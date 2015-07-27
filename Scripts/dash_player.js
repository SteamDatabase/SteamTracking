
// Logs messages to the console
function PlayerLog( s )
{
	console.log(s);
};

/////////////////////////////////////////////////////////////////
// DASH video player
/////////////////////////////////////////////////////////////////
function CDASHPlayer( elVideoPlayer )
{
	this.m_elVideoPlayer = elVideoPlayer;
	this.m_strMPD = '';
	this.m_loaders = [];
	this.m_mediaSource = null;
	this.m_rtLiveContentStarted = 0;
	this.m_rtVODResumeAtTime = 0;
	this.m_schUpdateMPD = null;
	this.m_xhrUpdateMPD = null;

	// info used in playback
	this.m_nVideoRepresentationIndex = -1;
	this.m_nAudioRepresentationIndex = 0;
	this.m_nPlayerHeight = 0;
	this.m_nCurrentDownloadBitRate = 0;
	this.m_nSavedPlaybackRate = 1.0;

	// player states
	this.m_bIsBuffering = true;
	this.m_bIsPlayingInUI = true;
	this.m_bExiting = false;
	this.m_nCurrentSeekTime = -1;
	this.m_nRepChangeTargetHeight = 0;

	// Logging
	this.m_nVideoBuffer = 0;
	this.m_nAudioBuffer = 0;
	this.m_nPlaybackWidth = 0;
	this.m_nPlaybackHeight = 0;
	this.m_nAudioBitRate = 0;
	this.m_nVideoBitRate = 0;
	this.m_nDownloadVideoWidth = 0;
	this.m_nDownloadVideoHeight = 0;
	this.m_bVideoLogVerbose = false;

	// For Server Event Logging
	this.m_nBandwidthTotal = 0;
	this.m_nBandwidthEntries = 0;
	this.m_nBandwidthMinimum = 0;
	this.m_nBandwidthMaximum = 0;

	// Captions
	this.m_VTTCaptionLoader = null;

	// Game state data
	this.m_fLastGameDataEventTriggerTime = 0;
	this.m_nLastGameDataEventArrayIndex = 0;
	this.m_schGameDataEventTimer = null;
	this.m_fGameDataEventTriggerPerf = 0;
}

CDASHPlayer.TRACK_BUFFER_MS = 5000;
CDASHPlayer.TRACK_BUFFER_MAX_SEC = 30 * 60;
CDASHPlayer.TRACK_BUFFER_VOD_LOOKAHEAD_MS = 30 * 1000;
CDASHPlayer.DOWNLOAD_RETRY_MS = 500;
CDASHPlayer.GAMEDATA_TRIGGER_MS = 200;

CDASHPlayer.HAVE_NOTHING = 0;
CDASHPlayer.HAVE_METADATA = 1;
CDASHPlayer.HAVE_CURRENT_DATA = 2;
CDASHPlayer.HAVE_FUTURE_DATA = 3;
CDASHPlayer.HAVE_ENOUGH_DATA = 4;

CDASHPlayer.prototype.StopDownloads = function()
{
	this.m_bExiting = true;
	for ( var i = 0; i < this.m_loaders.length; i++ )
	{
		this.m_loaders[i].Close();
	}

	if ( this.m_schUpdateMPD )
	{
		clearTimeout( this.m_schUpdateMPD );
		this.m_schUpdateMPD = null;
	}

	if ( this.m_xhrUpdateMPD )
	{
		this.m_xhrUpdateMPD.abort();
		this.m_xhrUpdateMPD = null;
	}
}

CDASHPlayer.prototype.Close = function()
{
	this.StopDownloads();

	this.m_loaders = [];
	if ( this.m_mediaSource )
	{
		$J( this.m_mediaSource ).off( '.DASHPlayerEvents' );
		if ( this.m_mediaSource.readyState != 'closed' )
			this.m_mediaSource.endOfStream();

		this.m_mediaSource = null;
	}

	$J( this.m_elVideoPlayer ).off( '.DASHPlayerEvents' );

	this.m_strMPD = '';
	this.m_rtLiveContentStarted = 0;
	this.m_rtVODResumeAtTime = 0;
	this.m_bIsBuffering = true;
	this.m_bIsPlayingInUI = true;
	this.m_nCurrentSeekTime = -1;
	this.m_nSavedPlaybackRate = 1.0;
	this.m_bExiting = false;
	this.m_nRepChangeTargetHeight = 0

	// For Server Event Logging
	this.m_nBandwidthTotal = 0;
	this.m_nBandwidthEntries = 0;
	this.m_nBandwidthMinimum = 0;
	this.m_nBandwidthMaximum = 0;

	// Stop game data triggering events
	if ( this.m_schGameDataEventTimer )
	{
		clearTimeout(this.m_schGameDataEventTimer);
		this.m_schGameDataEventTimer = null;
	}

	this.m_fLastGameDataEventTriggerTime = 0;
	this.m_nLastGameDataEventArrayIndex = 0;

	
	if ( this.m_VTTCaptionLoader )
	{
		this.m_VTTCaptionLoader.Close();
		this.m_VTTCaptionLoader = null;
	}
}

CDASHPlayer.prototype.CloseWithError = function()
{
	this.Close();
	$J( this.m_elVideoPlayer ).trigger( 'playbackerror' );
}

CDASHPlayer.prototype.PlayMPD = function( strURL )
{
	this.m_strMPD = strURL;

	// load video player then init & parse
	var _player = this;
	this.m_xhrUpdateMPD = $J.ajax(
	{
		url: strURL,
		type: 'GET'
	})
	.done( function( data, status, xhr )
	{
		_player.m_xhrUpdateMPD = null;
		if ( _player.m_bExiting )
			return;

		// parse MPD file
		_player.m_mpd = new CMPDParser();
		if ( !_player.m_mpd.BParse( data ) )
		{
			PlayerLog( 'Failed to parse MPD file' );
			_player.CloseWithError();
			return;
		}

		// special handling for dynamic content
		if ( _player.BIsLiveContent() )
		{
			// schedule mpd reload
			if ( _player.m_mpd.minimumUpdatePeriod > 0 )
			{
				_player.m_schUpdateMPD = setTimeout( function() { _player.UpdateMPD(); }, _player.m_mpd.minimumUpdatePeriod * 1000 );
			}

			// calculate when the video started relative to system clock
			var strServerTime = xhr.getResponseHeader( 'date' );
			var unServerTime = strServerTime ? new Date( strServerTime ).getTime() : Date.now();
			_player.m_rtLiveContentStarted = Date.now() - (unServerTime - _player.m_mpd.availabilityStartTime.getTime());
			PlayerLog( 'server time: ' + strServerTime );
		}

		// select representation to play
		if ( !_player.BCreateLoaders() )
		{
			PlayerLog( 'Failed to create segment loaders' );
			_player.CloseWithError();
			return;
		}

		// can now init video controls and start playback
		_player.InitVideoControl();
	})
	.fail( function()
	{
		_player.m_xhrUpdateMPD = null;
		PlayerLog( 'Failed to download: ' + _player.m_strMPD );
		_player.CloseWithError();
	});
}

CDASHPlayer.prototype.UpdateMPD = function()
{
	this.m_schUpdateMPD = null;
	if ( this.m_bExiting )
		return;

	// load video player then init & parse
	var _player = this;
	this.m_xhrUpdateMPD = $J.ajax(
	{
		url: _player.m_strMPD,
		type: 'GET'
	})
	.done( function( data, status, xhr )
	{
		_player.m_xhrUpdateMPD = null;
		if ( _player.m_bExiting )
        	return;

		// parse MPD file
		if ( !_player.m_mpd.BUpdate( data ) )
		{
			PlayerLog( 'Failed to update MPD file' );
			_player.CloseWithError();
			return;
		}

		// if dynamic, schedule mpd reload
		if ( _player.BIsLiveContent() && _player.m_mpd.minimumUpdatePeriod > 0 )
			_player.m_schUpdateMPD = setTimeout( function() { _player.UpdateMPD(); }, _player.m_mpd.minimumUpdatePeriod * 1000 );

	})
	.fail( function()
	{
		_player.m_xhrUpdateMPD = null;
		PlayerLog( 'Failed to download: ' + _player.m_strMPD );
		_player.CloseWithError();
	});
}

CDASHPlayer.prototype.BCreateLoaders = function()
{
	// only support 1 period
	if ( this.m_mpd.periods.length == 0 )
		return false;

	var period = this.m_mpd.periods[0];

	var bNeedVideo = true;
	var bNeedAudio = true;
	for ( var i = 0; i < period.adaptationSets.length; i++ )
	{
		var adaptation = period.adaptationSets[i];

		// tracks could be in same adaptation set
		var keep = null;
		if ( bNeedVideo && adaptation.containsVideo )
		{
			keep = adaptation;
			bNeedVideo = false;
		}

		if ( bNeedAudio && adaptation.containsAudio )
		{
			keep = adaptation;
			bNeedAudio = false;
		}

		if ( keep )
		{
			var loader = new CSegmentLoader( this, keep );
			this.m_loaders.push( loader );
		}

		if ( !bNeedVideo && !bNeedAudio )
			break;
	}

	for ( var i = 0; i < period.adaptationSets.length; i++ )
	{
		var adaptation = period.adaptationSets[i];
		if ( adaptation.containsGame )
		{
			var loader = new CSegmentLoader( this, adaptation );
			this.m_loaders.push( loader );

			// ensure no existing event timer
			if ( this.m_schGameDataEventTimer )
				clearTimeout( this.m_schGameDataEventTimer );

			var _player = this;
			this.m_schGameDataEventTimer = setTimeout( function() { _player.GameDataEventTrigger(); }, CDASHPlayer.GAMEDATA_TRIGGER_MS );

			break;
		}
	}

	// want to always play video
	return !bNeedVideo;
}

CDASHPlayer.prototype.GameDataEventTrigger = function()
{
	var start = performance.now();
	var _player = this;
	var nCurrentTime = _player.m_elVideoPlayer.currentTime;
	// PlayerLog( 'GameDataEventTrigger at ' + nCurrentTime );

	// get the video buffer start for clearing data shortly
	var nStartVideoTime = 0;
	for (var i = 0; i < _player.m_loaders.length; i++)
	{
		if ( _player.m_loaders[i].ContainsVideo() )
		{
			nStartVideoTime = _player.m_loaders[i].GetBufferedStart();
			break;
		}
	}

	// now trigger events with the data that needs to be broadcast
	for (var i = 0; i < _player.m_loaders.length; i++)
	{
		if ( _player.m_loaders[i].ContainsGame() )
		{
			// clear out of range frames and then get the up to date set
			var nFramesRemoved = _player.m_loaders[i].ClearGameDataFramesBefore( nStartVideoTime );
			var rgGameFrames = _player.m_loaders[i].GetGameDataFrames();

			// start at last frame checked unless watcher skipped back in time
			var g = 0;
			if ( _player.m_fLastGameDataEventTriggerTime < nCurrentTime )
			{
				g = Math.max( _player.m_nLastGameDataEventArrayIndex - nFramesRemoved, 0 );

				// make sure we are scanning a valid array range
				if ( g >= rgGameFrames.length )
					_player.m_nLastGameDataEventArrayIndex = g = 0;
			}

			var triggerFrame = null;
			for ( g ; g < rgGameFrames.length; g++ )
			{
				_player.m_nLastGameDataEventArrayIndex = g;
				if ( ( rgGameFrames[g].pts / 1000 ) < nCurrentTime )
				{
					triggerFrame = rgGameFrames[g];
				}
				else
				{
					break;
				}
			}

			if ( triggerFrame != null )
			{
				// PlayerLog( 'Found GameData to Trigger: ' + triggerFrame.pts  / 1000 + ', ' + nCurrentTime );
				$J( _player.m_elVideoPlayer ).trigger( 'gamedataupdate', [ triggerFrame.pts, triggerFrame.gamedata ] );
			}
		}
	}

	_player.m_fLastGameDataEventTriggerTime = nCurrentTime;
	this.m_schGameDataEventTimer = setTimeout( function() { _player.GameDataEventTrigger(); }, CDASHPlayer.GAMEDATA_TRIGGER_MS );

	this.m_fGameDataEventTriggerPerf = performance.now() - start;
}

CDASHPlayer.prototype.InitVideoControl = function()
{
	// create the media source
	var mediaSource = new window.MediaSource();
	var mediaURL = URL.createObjectURL(mediaSource);
	this.m_elVideoPlayer.pause();
	this.m_elVideoPlayer.src = mediaURL;
	this.m_mediaSource = mediaSource;

	// need to wait for the source to open then can add buffers
	var _player = this;
	$J( mediaSource ).on( 'sourceopen.DASHPlayerEvents', function() { _player.OnMediaSourceOpen(); });
	$J( mediaSource ).on( 'sourceended.DASHPlayerEvents', function( e ) { _player.OnMediaSourceEnded( e ); });
	$J( mediaSource ).on( 'sourceclose.DASHPlayerEvents', function( e ) { _player.OnMediaSourceClose( e ); });

	$J( this.m_elVideoPlayer ).on( 'progress.DASHPlayerEvents', function() { _player.OnVideoBufferProgress(); });
	$J( this.m_elVideoPlayer ).on( 'stalled.DASHPlayerEvents', function() { _player.OnVideoStalled(); });

	$J( this.m_elVideoPlayer ).on( 'changeuiplayingstate.DASHPlayerEvents', function( e, playing ) { _player.SavePlaybackStateFromUI( playing ); } );
}

CDASHPlayer.prototype.OnMediaSourceOpen = function()
{
	for ( var i = 0; i < this.m_loaders.length; i++ )
	{
		this.m_loaders[i].SetMediaSource( this.m_mediaSource );
	}

	this.BeginPlayback();
}

CDASHPlayer.prototype.OnMediaSourceEnded = function( e )
{
	PlayerLog( 'Media source ended' );
}

CDASHPlayer.prototype.OnMediaSourceClose = function( e )
{
		PlayerLog( 'Media source closed' );
	this.CloseWithError();
}

CDASHPlayer.prototype.SetVODResumeTime = function( nTime )
{
	this.m_rtVODResumeAtTime = nTime;
}

CDASHPlayer.prototype.BeginPlayback = function()
{
	var unStartTime = 0;

	if ( this.BIsLiveContent() )
	{
		unStartTime = Date.now() - this.m_rtLiveContentStarted;
	}
	else
	{
		var unVideoDuration = Math.floor( this.m_mpd.GetPeriodDuration(0) ) - ( CDASHPlayer.TRACK_BUFFER_MS / 1000 );
		if ( 0 < this.m_rtVODResumeAtTime && this.m_rtVODResumeAtTime < unVideoDuration )
		{
			unStartTime = this.m_rtVODResumeAtTime * 1000;
		}
	}

	for ( var i = 0; i < this.m_loaders.length; i++ )
	{
		this.m_loaders[i].BeginPlayback( unStartTime );
	}

	$J( this.m_elVideoPlayer ).trigger( 'initialized' );
}

CDASHPlayer.prototype.OnVideoBufferProgress = function()
{
	if ( !this.BIsBuffering() )
		return;

	if ( this.m_nCurrentSeekTime != -1 )
		this.m_elVideoPlayer.currentTime = this.m_nCurrentSeekTime;

	// when all loaders have enough buffered data, play
	var bPlay = ( this.m_loaders.length > 0 );
	var nStartPlayback = ( this.m_nCurrentSeekTime != -1 ) ? this.m_nCurrentSeekTime : 0;
	for ( var i = 0; i < this.m_loaders.length; i++ )
	{
		if ( this.m_loaders[i].m_bSeekInProgress || !this.m_loaders[i].BIsLoaderBuffered() )
		{
			bPlay = false;
			break;
		}

		nStartPlayback = Math.max( nStartPlayback, this.m_loaders[i].GetBufferedStart() );
	}

	if ( bPlay && this.m_elVideoPlayer.readyState != CDASHPlayer.HAVE_NOTHING )
	{
		this.m_bIsBuffering = false;
		this.m_nCurrentSeekTime = -1;

		this.m_elVideoPlayer.currentTime = nStartPlayback;

		if ( this.m_bIsPlayingInUI )
			this.m_elVideoPlayer.play();

		this.m_elVideoPlayer.playbackRate = this.m_nSavedPlaybackRate;

		$J( this.m_elVideoPlayer ).trigger( 'bufferingcomplete' );
	}
}

CDASHPlayer.prototype.OnVideoStalled = function()
{
	if ( !this.BIsBuffering() )
	{
		this.UpdateStats();
		for ( var i = 0; i < this.m_loaders.length; i++ )
		{
			if ( this.m_loaders[i].BIsLoaderStalling() )
			{
				if ( !this.BIsLiveContent() )
					this.SavePlaybackStateForBuffering( this.m_elVideoPlayer.currentTime );

				$J( this.m_elVideoPlayer ).trigger( 'playbackstalled', [ this.m_loaders[i].ContainsVideo() ] );

				break;
			}
		}
	}
}

CDASHPlayer.prototype.OnSegmentDownloaded = function()
{
	this.UpdateStats();
	this.UpdateRepresentation( this.m_nVideoRepresentationIndex, true );
	$J( this.m_elVideoPlayer ).trigger( 'bufferedupdate' );
}

CDASHPlayer.prototype.OnSegmentDownloadFailed = function()
{
		this.StopDownloads();

	$J( this.m_elVideoPlayer ).trigger( 'downloadfailed' );
}

CDASHPlayer.prototype.BIsBuffering = function()
{
	return this.m_bIsBuffering || this.m_elVideoPlayer.readyState == CDASHPlayer.HAVE_NOTHING;
}

CDASHPlayer.prototype.BIsLiveContent = function()
{
	if (this.m_mpd)
	{
		return (this.m_mpd.type == 'dynamic');
	}
	else
	{
		return true;
	}
}

CDASHPlayer.prototype.GetPercentBuffered = function()
{
	var unVideoBuffered = 0;
	var unAudioBuffered = 0 ;

	for ( var i = 0; i < this.m_loaders.length; i++ )
	{
		if ( this.m_loaders[i].m_bSeekInProgress )
			return 0;

		if ( this.m_loaders[i].ContainsVideo() )
		{
			unVideoBuffered = Math.min( this.m_nVideoBuffer * 100 / CDASHPlayer.TRACK_BUFFER_MS, 100 );
		}

		if ( this.m_loaders[i].ContainsAudio() && !this.m_loaders[i].ContainsVideo() )
		{
			unAudioBuffered = Math.min( this.m_nAudioBuffer * 100 / CDASHPlayer.TRACK_BUFFER_MS, 100 );
		}
	}

	return Math.min( unVideoBuffered, unAudioBuffered ).toFixed(0);
}

CDASHPlayer.prototype.GetLiveBufferWindow = function()
{
	return CDASHPlayer.TRACK_BUFFER_MAX_SEC;
}

CDASHPlayer.prototype.SeekToBufferedEnd = function()
{
	var nStartPlayback = null;
	for ( var i = 0; i < this.m_loaders.length; i++ )
	{
		if ( this.m_loaders[i].ContainsGame() )
			continue;

		if ( nStartPlayback == null )
		{
			nStartPlayback = this.m_loaders[i].GetBufferedEnd();
			continue;
		}

		nStartPlayback = Math.min( nStartPlayback, this.m_loaders[i].GetBufferedEnd() );
	}

	if ( nStartPlayback == null )
		return;

	nStartPlayback -= (CDASHPlayer.TRACK_BUFFER_MS / 1000 );
	if ( nStartPlayback > 0 )
		this.m_elVideoPlayer.currentTime = nStartPlayback;
}

CDASHPlayer.prototype.SeekTo = function( nTime )
{
	// bounds check the seek request
	var minSeek = 0.0;
	var maxSeek = Number.MAX_VALUE;
	if ( this.BIsLiveContent() )
	{
		for ( var i = 0; i < this.m_loaders.length; i++ )
		{
			if ( this.m_loaders[i].ContainsVideo() || this.m_loaders[i].ContainsAudio() )
			{
				minSeek = Math.max( this.m_loaders[i].GetBufferedStart() + ( CDASHPlayer.TRACK_BUFFER_MS / 1000 ), minSeek );
				maxSeek = Math.min( this.m_loaders[i].GetBufferedEnd() - ( CDASHPlayer.TRACK_BUFFER_MS / 1000 ), maxSeek );
			}
		}
	}
	else
	{
		maxSeek = this.m_mpd.GetPeriodDuration(0) - 1;
	}

	if ( minSeek > nTime )
		nTime = minSeek;
	else if ( nTime > maxSeek )
		nTime = maxSeek;

	// now do the seek
	var bCanSeekImmediately = true;
	for (var i = 0; i < this.m_loaders.length; i++)
	{
		bCanSeekImmediately &= this.m_loaders[i].SeekToSegment( nTime, false );
	}

	if ( bCanSeekImmediately )
	{
		this.m_elVideoPlayer.currentTime = nTime;
	}
	else
	{
		this.SavePlaybackStateForBuffering( nTime );
	}

	// return the actual time seeked to
	return nTime;
}

CDASHPlayer.prototype.SkipTime = function( nTimeDelta )
{
	var nTime = this.m_elVideoPlayer.currentTime + nTimeDelta;
	return this.SeekTo( nTime );
}

CDASHPlayer.prototype.BIsLiveEdge = function( nTime )
{
	// return true time passed in is within the live edge period and currently playing
	if ( this.BIsLiveContent() && this.m_bIsPlayingInUI )
	{
		for ( var i = 0; i < this.m_loaders.length; i++ )
		{
			if ( this.m_loaders[i].ContainsVideo() )
			{
				if ( this.m_loaders[i].GetBufferedEnd() - nTime < ( CDASHPlayer.TRACK_BUFFER_MS / 1000 ) * 2 )
					return true;
			}
		}
	}

	return false;
}

CDASHPlayer.prototype.SavePlaybackStateFromUI = function ( bPlaying )
{
	this.m_bIsPlayingInUI = bPlaying;
}

CDASHPlayer.prototype.SavePlaybackStateForBuffering = function( nSeekTime )
{
	this.m_elVideoPlayer.pause();
	this.m_nCurrentSeekTime = nSeekTime;
	this.m_bIsBuffering = true;
}

CDASHPlayer.prototype.GetClosedCaptionsArray = function()
{
	var period = this.m_mpd.periods[0];
	var rgClosedCaptions = [];

	for ( var i = 0; i < period.adaptationSets.length; i++ )
	{
		var adaptation = period.adaptationSets[i];
		if ( adaptation.isClosedCaption )
		{
			var language = {
				code: adaptation.language,
				display: adaptation.language,
				url: adaptation.representations[0].closedCaptionFile,
				roles: adaptation.roles,
			};

			for ( lang in CVTTCaptionLoader.LanguageCountryCodes )
			{
				if ( lang.toUpperCase() == language.code.toUpperCase() )
				{
					language.display = CVTTCaptionLoader.LanguageCountryCodes[lang].displayName;

										if ( language.display.indexOf( String.fromCharCode( 0x28 ) ) != -1 )
						language.display = language.display.substring( 0, language.display.indexOf( String.fromCharCode( 0x28 ) ) - 1 );
					else if ( language.display.indexOf( String.fromCharCode( 0xFF08 ) ) != -1 )
						language.display = language.display.substring( 0, language.display.indexOf( String.fromCharCode( 0xFF08 ) ) );
				}
			}

			rgClosedCaptions.push(language);
		}
	}

	return rgClosedCaptions.sort(CVTTCaptionLoader.SortClosedCaptionsByDisplayLanguage);
}

CDASHPlayer.prototype.GetRepresentationsArray = function ( bVideo )
{
	var rgRespresentations = [];

	if ( this.m_loaders )
	{
		for (var i = 0; i < this.m_loaders.length; i++)
		{
			if ( bVideo && this.m_loaders[i].ContainsVideo() )
			{
				for (var b = 0; b < this.m_loaders[i].GetRepresentationsCount(); b++)
				{
					var representation = {
						height: 0,
						bandwidth: 0,
						frameRate: 0,
					};

					if (this.m_loaders[i].m_adaptation.representations[b].height != null)
					{
						representation.height = this.m_loaders[i].m_adaptation.representations[b].height;
					}

					representation.bandwidth = this.m_loaders[i].m_adaptation.representations[b].bandwidth;
					representation.frameRate = this.m_loaders[i].m_adaptation.representations[b].frameRate;

					rgRespresentations.push( representation );
				}
			}
			else if ( !bVideo && this.m_loaders[i].ContainsAudio() )
			{
				for (var b = 0; b < this.m_loaders[i].GetRepresentationsCount(); b++)
				{
					var representation = {
						audioChannels: this.m_loaders[i].m_adaptation.representations[b].audioChannels,
						bandwidth: this.m_loaders[i].m_adaptation.representations[b].bandwidth,
					}

					rgRespresentations.push( representation );
				}
			}
		}
	}

	return rgRespresentations;
}

CDASHPlayer.prototype.UpdateRepresentation = function ( representationIndex, bVideo )
{
	// if specific bit rate and no change will occur, short circuit and get out
	if ( ( bVideo && representationIndex >= 0 && this.m_nVideoRepresentationIndex == representationIndex ) ||
	   (  !bVideo && this.m_nAudioRepresentationIndex == representationIndex ) )
		return;

	if ( representationIndex == -1 )
	{
		// don't automatically shift bit rates while waiting on the player
		if ( this.BIsBuffering() )
			return;

		// Adaptive Video Change
		for (var i = 0; i < this.m_loaders.length; i++)
		{
			var newRepresentationIndex = this.m_loaders[i].GetRepresentationsCount() - 1;

			if ( this.m_loaders[i].ContainsVideo() )
			{
				var nMaxRepresentations = this.m_loaders[i].GetRepresentationsCount() - 1;

				// if we find there is only one representation, update to not-adaptive and get out
				if (nMaxRepresentations == 0)
				{
					this.m_nVideoRepresentationIndex = newRepresentationIndex;
					break;
				}

				for (var b = nMaxRepresentations; b >= 0; b--)
				{
					// proposed new video bit rate + current audio bit rate modified by playback rate, plus 20% overhead
					var nRequiredBitRate = ( ( this.m_loaders[i].m_adaptation.representations[b].bandwidth + this.m_nAudioBitRate ) * this.m_elVideoPlayer.playbackRate ) * 1.2;
					if ( this.m_nCurrentDownloadBitRate >= nRequiredBitRate )
					{
						if ( this.m_loaders[i].m_adaptation.representations[b].height != null )
						{
							// player height needs to be more than the video height of the smaller representation (e.g. 800 height should use 1080, not 720)
							if ( this.m_nPlayerHeight > this.m_loaders[i].m_adaptation.representations[ Math.min( b+1, nMaxRepresentations ) ].height )
							{
								newRepresentationIndex = b;
							}
						}
						else
						{
							// no defined height, then ok
							newRepresentationIndex = b;
						}
					}
				}

				// change representation, record now in adaptive rate.
				this.m_nVideoRepresentationIndex = -1;
				this.m_loaders[i].ChangeRepresentationByIndex(newRepresentationIndex);
				break;
			}
		}
	}
	else
	{
		// Specific representation and bit rate
		for (var i = 0; i < this.m_loaders.length; i++)
		{
			if ( bVideo && this.m_loaders[i].ContainsVideo() )
			{
				this.m_nVideoRepresentationIndex = representationIndex;
				this.m_loaders[i].ChangeRepresentationByIndex( this.m_nVideoRepresentationIndex );
				this.m_loaders[i].SeekToSegment( this.m_elVideoPlayer.currentTime, !this.BIsLiveContent() );
				this.m_nRepChangeTargetHeight = this.m_loaders[i].m_adaptation.representations[this.m_nVideoRepresentationIndex].height;
			}
			else if (!bVideo && this.m_loaders[i].ContainsAudio())
			{
				this.m_nAudioRepresentationIndex = representationIndex;
				this.m_loaders[i].ChangeRepresentationByIndex( this.m_nAudioRepresentationIndex );
				this.m_loaders[i].SeekToSegment( this.m_elVideoPlayer.currentTime, !this.BIsLiveContent() );
			}
		}

		if ( !this.BIsLiveContent() )
			this.SavePlaybackStateForBuffering( this.m_elVideoPlayer.currentTime );
	}
}

CDASHPlayer.prototype.BIsRepresentationChanging = function()
{
	return ( this.m_nRepChangeTargetHeight != 0 );
}

CDASHPlayer.prototype.UpdateClosedCaption = function ( closedCaptionCode, ccRole )
{
	if ( !this.m_VTTCaptionLoader )
	{
		this.m_VTTCaptionLoader = new CVTTCaptionLoader( this.m_elVideoPlayer, this.GetClosedCaptionsArray() );
	}

	if ( typeof ccRole === 'undefined' || ccRole == '' )
		ccRole = CVTTCaptionLoader.s_Subtitle;

	this.m_VTTCaptionLoader.SwitchToTextTrack( closedCaptionCode, ccRole );
}

CDASHPlayer.prototype.SetPlaybackRate = function ( unRate )
{
	if ( unRate )
		this.m_elVideoPlayer.playbackRate = this.m_nSavedPlaybackRate = unRate;
}

CDASHPlayer.prototype.GetPlaybackRate = function()
{
	return this.m_elVideoPlayer.playbackRate;
}

CDASHPlayer.prototype.GetPlaybackTimeInSeconds = function()
{
	return parseInt( this.m_elVideoPlayer.currentTime );
}

CDASHPlayer.prototype.GetLanguageForAudioTrack = function()
{
	for ( var i = 0; i < this.m_loaders.length; i++ )
	{
		if ( this.m_loaders[i].ContainsAudio() )
		{
			return this.m_loaders[i].m_adaptation.language;
		}
	}

	return null;
}

CDASHPlayer.prototype.GetThumbnailInfoForVideo = function()
{
	for ( var i = 0; i < this.m_loaders.length; i++ )
	{
		if ( this.m_loaders[i].ContainsVideo() )
		{
			if ( this.m_loaders[i].m_adaptation.thumbnails )
				return this.m_loaders[i].m_adaptation.thumbnails;
		}
	}

	return null;
}

CDASHPlayer.prototype.BPlayingAudio = function()
{
	for ( var i = 0; i < this.m_loaders.length; i++ )
	{
		if ( this.m_loaders[i].ContainsAudio() )
			return true;
	}

	return false;
}

CDASHPlayer.prototype.UpdateStats = function()
{
	this.m_nCurrentDownloadBitRate = 0;
	var nBandwidthCount = 0;

	for (var i = 0; i < this.m_loaders.length; i++)
	{
		if (this.m_loaders[i].ContainsVideo())
		{
			// logging
			this.m_nVideoBuffer = this.m_loaders[i].GetAmountBufferedInPlayer();
			this.m_nPlaybackWidth = this.m_elVideoPlayer.videoWidth;

			// if changing representations, reset the target height if showing the requested height
			if ( this.m_nRepChangeTargetHeight == this.m_elVideoPlayer.videoHeight )
				this.m_nRepChangeTargetHeight = 0;

			this.m_nPlaybackHeight = this.m_elVideoPlayer.videoHeight;
			this.m_nVideoBitRate = this.m_loaders[i].m_representation.bandwidth;
			this.m_nDownloadVideoWidth = (this.m_loaders[i].m_representation.width != null) ? this.m_loaders[i].m_representation.width : 0;
			this.m_nDownloadVideoHeight = (this.m_loaders[i].m_representation.height != null) ? this.m_loaders[i].m_representation.height : 0;

			// used for playback
			this.m_nPlayerHeight = this.StatsGetVideoPlayerHeight();
			this.m_nCurrentDownloadBitRate += this.m_loaders[i].GetBandwidthRate();
			nBandwidthCount++;
		}

		if (this.m_loaders[i].ContainsAudio())
		{
			this.m_nAudioBuffer = this.m_loaders[i].GetAmountBufferedInPlayer();

			// if a muxed audio stream, mark audio bitrate as zero
			// otherwise bandwidth needed will be calculated as double.
			if (this.m_loaders[i].ContainsVideo())
			{
				this.m_nAudioBitRate = 0;
			}
			else
			{
				this.m_nAudioBitRate = this.m_loaders[i].m_representation.bandwidth;
				this.m_nCurrentDownloadBitRate += this.m_loaders[i].GetBandwidthRate();
				nBandwidthCount++;
			}
		}
	}

	// Get average download rate across all loaders
	if ( nBandwidthCount > 1 )
	{
		this.m_nCurrentDownloadBitRate /= nBandwidthCount;
	}

	// For Server Event Logging
	this.m_nBandwidthTotal += this.m_nCurrentDownloadBitRate;
	this.m_nBandwidthEntries++;
	this.m_nBandwidthMinimum = ( this.m_nBandwidthMinimum == 0 ? this.m_nCurrentDownloadBitRate : ( this.m_nCurrentDownloadBitRate < this.m_nBandwidthMinimum ? this.m_nCurrentDownloadBitRate : this.m_nBandwidthMinimum ) );
	this.m_nBandwidthMaximum = ( this.m_nBandwidthMaximum == 0 ? this.m_nCurrentDownloadBitRate : ( this.m_nCurrentDownloadBitRate > this.m_nBandwidthMaximum ? this.m_nCurrentDownloadBitRate : this.m_nBandwidthMaximum ) );
}

CDASHPlayer.prototype.StatsGetVideoPlayerHeight = function()
{
	return $J( this.m_elVideoPlayer ).innerHeight();
}

CDASHPlayer.prototype.StatsVideoBuffer = function()
{
	return (this.m_nVideoBuffer / 1000).toFixed(2);
}

CDASHPlayer.prototype.StatsAudioBuffer = function()
{
	return (this.m_nAudioBuffer / 1000).toFixed(2);
}

CDASHPlayer.prototype.StatsPlaybackWidth = function()
{
	return this.m_nPlaybackWidth;
}

CDASHPlayer.prototype.StatsPlaybackHeight = function()
{
	return this.m_nPlaybackHeight;
}

CDASHPlayer.prototype.StatsAudioBitRate = function()
{
	return (this.m_nAudioBitRate / 1000).toFixed(2);
}

CDASHPlayer.prototype.StatsVideoBitRate = function()
{
	return (this.m_nVideoBitRate / 1000).toFixed(2);
}

CDASHPlayer.prototype.StatsAudioChannels = function()
{
	for (var i = 0; i < this.m_loaders.length; i++)
	{
		if ( this.m_loaders[i].ContainsAudio() && this.m_loaders[i].m_representation.audioChannels )
		{
			return this.m_loaders[i].m_representation.audioChannels;
		}
	}

	return 0;
}

CDASHPlayer.prototype.StatsDownloadVideoWidth = function()
{
	return this.m_nDownloadVideoWidth;
}

CDASHPlayer.prototype.StatsDownloadVideoHeight = function()
{
	return this.m_nDownloadVideoHeight;
}

CDASHPlayer.prototype.StatsCurrentDownloadBitRate = function()
{
	return (this.m_nCurrentDownloadBitRate / 1000).toFixed(2);
}

CDASHPlayer.prototype.StatsBufferInfo = function()
{
	var bufferString = "";

	for (var i = 0; i < this.m_loaders.length; i++)
	{
		if ( !this.m_loaders[i].m_sourceBuffer )
			continue;

		if ( this.m_loaders[i].ContainsVideo() )
		{
			for (var v = 0; v < this.m_loaders[i].m_sourceBuffer.buffered.length; v++)
			{
				bufferString += "Video Buffer " + v + ": " + SecondsToTime(this.m_loaders[i].m_sourceBuffer.buffered.start(v)) + " - " + SecondsToTime(this.m_loaders[i].m_sourceBuffer.buffered.end(v)) + "<br>";
			}
		}

		if ( this.m_loaders[i].ContainsAudio() )
		{
			for (var a = 0; a < this.m_loaders[i].m_sourceBuffer.buffered.length; a++)
			{
				bufferString += "Audio Buffer " + a + ": " + SecondsToTime(this.m_loaders[i].m_sourceBuffer.buffered.start(a)) + " - " + SecondsToTime(this.m_loaders[i].m_sourceBuffer.buffered.end(a)) + "<br>";
			}
		}
	}

	if (bufferString == "")
		bufferString = "No Buffers";

	return bufferString;
}

CDASHPlayer.prototype.StatsProperties = function()
{
	return "Error: " + ( (this.m_elVideoPlayer.error) ? this.m_elVideoPlayer.error.code : "None" ) + ", Network: " + this.m_elVideoPlayer.networkState;
}

CDASHPlayer.prototype.StatsSegmentInfo = function()
{
	var bufferString = "";
	for (var i = 0; i < this.m_loaders.length; i++)
	{
		if (this.m_loaders[i].ContainsVideo())
		{
			bufferString += "Video " + (this.m_loaders[i].m_nNextSegment);
			if (!this.BIsLiveContent())
				bufferString += "/" + (this.m_loaders[i].m_nTotalSegments );
			bufferString += ", ";
		}

		if (this.m_loaders[i].ContainsAudio())
		{
			bufferString += "Audio " + (this.m_loaders[i].m_nNextSegment);
			if (!this.BIsLiveContent())
				bufferString += "/" + (this.m_loaders[i].m_nTotalSegments );
			bufferString += " ";
		}
	}

	return bufferString;
}

CDASHPlayer.prototype.StatsDownloadHost = function()
{
	for (var i = 0; i < this.m_loaders.length; i++)
	{
		if ( this.m_loaders[i].ContainsVideo() )
		{
			var parser = document.createElement('a');
			parser.href = CMPDParser.GetInitSegmentURL( this.m_loaders[i].m_adaptation, this.m_loaders[i].m_representation );
			return parser.hostname;
		}
	}
	
	return '';
}

CDASHPlayer.prototype.StatsAllBytesReceived = function()
{
	var bytes = 0;
	for (var i = 0; i < this.m_loaders.length; i++)
	{
		bytes += this.m_loaders[i].GetBytesReceived();
	}
	
	return bytes;
}

CDASHPlayer.prototype.StatsAllFailedSegmentDownloads = function()
{
	var segments = 0;
	for (var i = 0; i < this.m_loaders.length; i++)
	{
		segments += this.m_loaders[i].GetFailedSegmentDownloads();
	}
	
	return segments;
}

CDASHPlayer.prototype.StatsBandwidthRates = function( bResetStats )
{
	var bw_stats = {};

	if ( this.m_nBandwidthEntries > 0 )
	{
		bw_stats = {
			'bw_avg': this.m_nBandwidthTotal / this.m_nBandwidthEntries,
			'bw_min': this.m_nBandwidthMinimum,
			'bw_max': this.m_nBandwidthMaximum,
		}
	}
	else
	{
		bw_stats = {
			'bw_avg': 0,
			'bw_min': 0,
			'bw_max': 0,
		}
	}

	if ( bResetStats )
	{
		this.m_nBandwidthTotal = 0;
		this.m_nBandwidthEntries = 0;
		this.m_nBandwidthMinimum = 0;
		this.m_nBandwidthMaximum = 0;
	}

	return bw_stats;
}

CDASHPlayer.prototype.StatsSegmentDownloadTimes = function( bResetStats )
{
	for (var i = 0; i < this.m_loaders.length; i++)
	{
		// for now, just video download time stats
		if ( this.m_loaders[i].ContainsVideo() )
			return this.m_loaders[i].GetSegmentDownloadTimeStats( bResetStats );
	}

	return {
		'seg_avg': 0,
		'seg_min': 0,
		'seg_max': 0,
	};
}

CDASHPlayer.prototype.StatsRecentSegmentDownloads = function( bVideo )
{
	var stats = {
		'last_segment_number': 0,
		'last_segment_response': 200
	};

	for (var i = 0; i < this.m_loaders.length; i++)
	{
		if ( bVideo && this.m_loaders[i].ContainsVideo() ||
			!bVideo && !this.m_loaders[i].ContainsVideo() && this.m_loaders[i].ContainsAudio() )
		{
			var downloadLog = this.m_loaders[i].GetDownloadLog();
			stats['last_segment_number'] = this.m_loaders[i].m_nNextSegment - 1;
			stats['last_segment_response'] = this.m_loaders[i].m_nLastSegmentDownloadStatus;

			var segNum = 1;
			for ( var l = downloadLog.length - 1; l >= 0; l-- )
			{
				stats['segment' + segNum + '_bytes'] = downloadLog[l].dataSizeBytes;
				stats['segment' + segNum + '_time'] = downloadLog[l].downloadTime / 1000;

				if ( ++segNum > 3 )
					break;
			}

			break;
		}
	}

	return stats;
}

CDASHPlayer.prototype.StatsGameDataBufferCount = function()
{
	for (var i = 0; i < this.m_loaders.length; i++)
	{
		if ( this.m_loaders[i].ContainsGame() )
			return this.m_loaders[i].GetGameDataFrames().length;
	}

	return 0;
}

CDASHPlayer.prototype.StatsLastGameDataBuffer = function()
{
	for (var i = 0; i < this.m_loaders.length; i++)
	{
		if ( this.m_loaders[i].ContainsGame() )
			return this.m_loaders[i].m_rgLastGameFrame;
	}

	return null;
}

CDASHPlayer.prototype.StatsLastGameDataEventTriggerPerf = function()
{
	return this.m_fGameDataEventTriggerPerf.toFixed(3);
}

CDASHPlayer.prototype.StatsLastGameDataEventTriggerFrame = function()
{
	return this.m_nLastGameDataEventArrayIndex + 1;
}

CDASHPlayer.prototype.BLogVideoVerbose = function()
{
	return this.m_bVideoLogVerbose;
}

/////////////////////////////////////////////////////////////////
// Segment loader. Responsible for downloading and loading video player buffers
/////////////////////////////////////////////////////////////////
function CSegmentLoader( player, adaptationSet )
{
	this.m_player = player;
	this.m_mediaSource = null;
	this.m_sourceBuffer = null;

	this.m_adaptation = adaptationSet;
	this.m_representation = null;

	this.m_nBufferUpdate = CSegmentLoader.s_BufferUpdateNone;
	this.m_bufSegments = [];
	this.m_bNeedInitSegment = true;
	this.m_nNextSegment = 0;
	this.m_nTotalSegments = Number.MAX_VALUE;
	this.m_bRemoveBufferState = false;
	this.m_bSeekInProgress = false;

	// need to be closed
	this.m_xhr = null;
	this.m_schNextDownload = null;
	this.m_schRetryDownload = null;
	this.m_schWaitForBuffer = null;

	// bandwidth monitoring
	this.m_rgDownloadLog = [];
	this.m_nDownloadLogSize = 4;

	// for stats tracking
	this.m_nBytesReceivedTotal = 0;
	this.m_nFailedSegmentDownloads = 0;
	this.m_nSegmentDownloadTimeTotal = 0;
	this.m_nSegmentDownloadTimeEntries = 0;
	this.m_nSegmentDownloadTimeMinimum = 0;
	this.m_nSegmentDownloadTimeMaximum = 0;
	this.m_nLastSegmentDownloadStatus = 200;

	// game data storage
	this.m_rgGameDataFrames = [];
	this.m_rgLastGameFrame = {};
}

CSegmentLoader.s_BufferUpdateNone = 0;
CSegmentLoader.s_BufferUpdateAppend = 1;
CSegmentLoader.s_BufferUpdateRemove = 2;

CSegmentLoader.PIPELINE_NEXT_SEGMENT = true;
CSegmentLoader.PIPELINE_RANGE_BYTES = 128;

CSegmentLoader.prototype.Close = function()
{
	if ( this.m_sourceBuffer )
	{
		$J( this.m_sourceBuffer ).off( '.SegmentLoaderEvents' );
		this.m_sourceBuffer = null;
	}

	if ( this.m_xhr )
	{
		this.m_xhr.abort();
		this.m_xhr = null;
	}

	if ( this.m_schNextDownload )
	{
		clearTimeout( this.m_schNextDownload );
		this.m_schNextDownload = null;
	}

	if ( this.m_schRetryDownload )
	{
		clearTimeout( this.m_schRetryDownload );
		this.m_schRetryDownload = null;
	}

	if ( this.m_schWaitForBuffer )
	{
		clearTimeout( this.m_schWaitForBuffer );
		this.m_schWaitForBuffer = null;
	}

	this.m_player = null;
	this.m_mediaSource = null;
	this.m_sourceBuffer = null;

	this.m_adaptation = null;
	this.m_representation = null;

	this.m_nBufferUpdate = CSegmentLoader.s_BufferUpdateNone;
	this.m_bufSegments = [];
	this.m_bNeedInitSegment = true;
	this.m_nNextSegment = 0;
	this.m_nTotalSegments = Number.MAX_VALUE;
	this.m_bRemoveBufferState = false;
	this.m_bSeekInProgress = false;

	// need to be closed
	this.m_xhr = null;
	this.m_schNextDownload = null;
	this.m_schRetryDownload = null;
	this.m_schWaitForBuffer = null;

	// for stats tracking
	this.m_nBytesReceivedTotal = 0;
	this.m_nFailedSegmentDownloads = 0;
	this.m_nSegmentDownloadTimeTotal = 0;
	this.m_nSegmentDownloadTimeEntries = 0;
	this.m_nSegmentDownloadTimeMinimum = 0;
	this.m_nSegmentDownloadTimeMaximum = 0;
	this.m_nLastSegmentDownloadStatus = 200;

	// game data storage
	this.m_rgGameDataFrames = [];
	this.m_rgLastGameFrame = {};
}

CSegmentLoader.prototype.ContainsVideo = function()
{
	if ( this.m_adaptation )
		return this.m_adaptation.containsVideo;
	else
		return false;
}

CSegmentLoader.prototype.ContainsAudio = function()
{
	if ( this.m_adaptation )
		return this.m_adaptation.containsAudio;
	else
		return false;
}

CSegmentLoader.prototype.ContainsGame = function()
{
	if ( this.m_adaptation )
		return this.m_adaptation.containsGame;
	else
		return false;
}

CSegmentLoader.prototype.SetMediaSource = function( mediaSource )
{
	this.m_mediaSource = mediaSource;
}

CSegmentLoader.prototype.GetRepresentationsCount = function()
{
	return this.m_adaptation.representations.length;
}

CSegmentLoader.prototype.GetTotalSegments = function()
{
	// Calculate total segments if appropriate
	if ( this.m_player.m_mpd.periods[0].duration )
	{
		this.m_nTotalSegments = CMPDParser.GetSegmentForTime( this.m_adaptation, this.m_player.m_mpd.periods[0].duration * 1000 );
	}

	return this.m_nTotalSegments;
}

CSegmentLoader.prototype.BeginPlayback = function( unStartTime )
{
	var nRepCounts = this.GetRepresentationsCount();
	if ( !nRepCounts )
		return false;

	this.GetTotalSegments();

	if ( this.ContainsVideo() )
	{
		this.m_nNextSegment = CMPDParser.GetSegmentForTime( this.m_adaptation, unStartTime );
		PlayerLog( 'Video Stream Starting at: ' + SecondsToTime( unStartTime / 1000 ) + ', starting segment: ' + this.m_nNextSegment );

		if ( this.m_player.m_nVideoRepresentationIndex == -1 )
		{
			// start at the highest resolution greater than video player height
			var nRepIndex = nRepCounts - 1;
			for ( nRepIndex; nRepIndex > 0; nRepIndex-- )
			{
				if ( this.m_player.StatsGetVideoPlayerHeight() <= this.m_adaptation.representations[nRepIndex].height )
				{
					break;
				}
			}

			this.ChangeRepresentationByIndex( nRepIndex );
		}
		else
		{
			this.ChangeRepresentationByIndex( this.m_player.m_nVideoRepresentationIndex );
		}

		this.DownloadNextSegment();

	}
	else if ( this.ContainsAudio() )
	{
		// alternate audio stream
		this.m_nNextSegment = CMPDParser.GetSegmentForTime( this.m_adaptation, unStartTime );
		PlayerLog( 'Audio Stream Starting at: ' + SecondsToTime( unStartTime / 1000 ) + ', starting segment: ' + this.m_nNextSegment );

		this.ChangeRepresentationByIndex( this.m_player.m_nAudioRepresentationIndex );
		this.DownloadNextSegment();
	}
	else if ( this.ContainsGame() )
	{
		// game data coming down in json
		this.m_nNextSegment = CMPDParser.GetSegmentForTime( this.m_adaptation, unStartTime );
		this.m_bNeedInitSegment = false;
		this.m_representation = this.m_adaptation.representations[0];
		PlayerLog( 'Game Data Stream Starting at: ' + SecondsToTime( unStartTime / 1000 ) + ', starting segment: ' + this.m_nNextSegment );
		this.DownloadNextSegment();
	}
}

CSegmentLoader.prototype.ChangeRepresentation = function( representation )
{
	var _loader = this;
	this.m_representation = representation;
	this.m_bNeedInitSegment = true;

	if ( !this.m_sourceBuffer )
	{
		this.m_sourceBuffer = this.m_mediaSource.addSourceBuffer( representation.mimeType + ';codecs=' + representation.codecs );
		//PlayerLog( representation.mimeType + ';codecs=' + representation.codecs );
		$J( this.m_sourceBuffer ).on( 'updateend.SegmentLoaderEvents', function() { _loader.OnSourceBufferUpdateEnd() } );
		$J( this.m_sourceBuffer ).on( 'error.SegmentLoaderEvents', function( e ) { _loader.OnSourceBufferError( e ) } );
		$J( this.m_sourceBuffer ).on( 'abort.SegmentLoaderEvents', function( e ) { _loader.OnSourceBufferAbort( e ) } );
	}
}

CSegmentLoader.prototype.ChangeRepresentationByIndex = function( representationIndex )
{
	if ( representationIndex >= 0 && representationIndex < this.GetRepresentationsCount()
		&& this.m_representation != this.m_adaptation.representations[representationIndex] )
	{
		// PlayerLog( ( this.ContainsVideo() ? "Video" : "Audio" ) + " Changing Representation to " + Math.ceil( this.m_adaptation.representations[representationIndex].bandwidth / 1000 ) + 'Kb at Segment ' + this.m_nNextSegment );
		this.ChangeRepresentation( this.m_adaptation.representations[representationIndex] );
	}
}

CSegmentLoader.prototype.BIsEndVOD = function( bCheckCurrentSegment )
{
	var nSegToCheck = bCheckCurrentSegment ? this.m_nNextSegment - 1 : this.m_nNextSegment;
	if ( nSegToCheck > this.m_nTotalSegments )
	{
		if ( this.ContainsVideo() )
			$J( this.m_player.m_elVideoPlayer ).trigger( 'voddownloadcomplete' );

		return true;
	}

	return false;
}

CSegmentLoader.prototype.DownloadSegment = function( url, nSegmentDuration, rtAttemptStarted )
{
	this.m_schRetryDownload = null;
	if ( !rtAttemptStarted )
		rtAttemptStarted = Date.now();

	if ( this.BIsEndVOD( true ) )
		return;

	// PlayerLog( Date.now() + ' downloading: ' + url );

	var _loader = this;
	var xhr = new XMLHttpRequest();
	this.m_xhr = xhr;
	xhr.open( 'GET', url );
	xhr.send();

	if ( !this.ContainsGame() )
		xhr.responseType = 'arraybuffer';
	else
		xhr.responseType = 'json';

	var rtDownloadStart = performance.now();
	try
	{
		xhr.addEventListener( 'readystatechange', function ()
		{
			if ( xhr.readyState == xhr.DONE )
			{
				if ( _loader.m_xhr == null )
					return;

				var now = Date.now();
				var nDownloadMS = now - rtDownloadStart;

				_loader.m_xhr = null;
				_loader.m_nLastSegmentDownloadStatus = xhr.status;

				if ( xhr.status != 200 || !xhr.response )
				{
					// Check if next segment will end VOD and if so, stop now
					if ( xhr.status == 404 && _loader.BIsEndVOD( false ) )
						return;

					_loader.m_nFailedSegmentDownloads++;

					PlayerLog( '[video] HTTP ' + xhr.status + ' (' + nDownloadMS + 'ms, ' + + '0k): ' + url );
					var nTimeToRetry = CDASHPlayer.DOWNLOAD_RETRY_MS;
					if ( _loader.m_player.BIsLiveContent() )
						nTimeToRetry += CDASHPlayer.TRACK_BUFFER_MS;
					else
						nTimeToRetry += CDASHPlayer.TRACK_BUFFER_VOD_LOOKAHEAD_MS;

					if ( now - rtAttemptStarted > nTimeToRetry )
					{
						_loader.DownloadFailed();
						return;
					}

					_loader.m_schRetryDownload = setTimeout( function() { _loader.DownloadSegment( url, nSegmentDuration, rtAttemptStarted ); }, CDASHPlayer.DOWNLOAD_RETRY_MS );
					return;
				}

				if ( !_loader.ContainsGame() )
				{
					try
					{
						var arr = new Uint8Array(xhr.response);
						var segment = {};
						segment.duration = nSegmentDuration;
						segment.data = arr;
						_loader.m_bufSegments.push(segment);

						_loader.LogDownload(xhr, rtDownloadStart, segment.data.length);
						_loader.UpdateBuffer();

						if (_loader.m_player.BLogVideoVerbose()) {
							var nSize = segment.data.length / 1000;
							PlayerLog('[video] HTTP ' + xhr.status + ' (' + nDownloadMS + 'ms, ' + Math.floor(nSize) + 'k): ' + url);
						}
					}
					catch (e) {
						PlayerLog('Exception while appending: ' + e);
					}
				}
				else
				{
					for ( var f = 0; f < xhr.response.frames.length; f++ )
					{
						_loader.m_rgGameDataFrames.push( xhr.response.frames[f] );
					}

					_loader.m_rgLastGameFrame = xhr.response;

					//if ( xhr.response.frames.length > 0 )
					//	PlayerLog( 'Received Frame with PTS: ' + ( _loader.m_rgLastGameFrame.frames[_loader.m_rgLastGameFrame.frames.length-1].pts / 1000 ) );

				}

				_loader.ScheduleNextDownload();
			}
		}, false);
	}
	catch ( e )
	{
		PlayerLog( 'Failed to download segment: ' + e );
		return;
	}

	// Hint to the CDN to get the next segment ready for download
	if ( CSegmentLoader.PIPELINE_NEXT_SEGMENT && !this.m_player.BIsLiveContent() && this.m_nNextSegment < this.m_nTotalSegments )
	{
		urlNext = CMPDParser.GetSegmentURL( this.m_adaptation, this.m_representation, this.m_nNextSegment );
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open( "GET" , urlNext );
		xmlhttp.setRequestHeader( "Range", "bytes=0-" + parseInt( CSegmentLoader.PIPELINE_RANGE_BYTES - 1) );
		xmlhttp.send();
	}
}

CSegmentLoader.prototype.DownloadNextSegment = function()
{
	this.m_schNextDownload = null;

	var url = '';
	var nSegmentDuration = 0;
	if ( this.m_bNeedInitSegment )
	{
		this.m_bNeedInitSegment = false;
		url = CMPDParser.GetInitSegmentURL( this.m_adaptation, this.m_representation );
		nSegmentDuration = 0;
	}
	else
	{
		url = CMPDParser.GetSegmentURL( this.m_adaptation, this.m_representation, this.m_nNextSegment );
		nSegmentDuration = CMPDParser.GetSegmentDuration( this.m_adaptation );
		this.m_nNextSegment++;
	}

	this.DownloadSegment( url, nSegmentDuration );
}

CSegmentLoader.prototype.UpdateBuffer = function()
{
	if ( this.m_nBufferUpdate != CSegmentLoader.s_BufferUpdateNone )
		return;

	if ( this.m_bRemoveBufferState )
	{
		this.RemoveAllBuffers();
	}

	// first add any queued buffers
	if ( this.m_bufSegments.length > 0 )
	{
		this.m_nBufferUpdate = CSegmentLoader.s_BufferUpdateAppend;
		var segment = this.m_bufSegments[0];
		this.m_bufSegments.splice( 0, 1 );
		this.m_sourceBuffer.appendBuffer( segment.data );
	}
	else
	{
		// check to see if we should remove any data
		buffered = (this.m_sourceBuffer != null) ? this.m_sourceBuffer.buffered : [];
		if ( buffered.length > 0 && (buffered.end( 0 ) - buffered.start( 0 )) > CDASHPlayer.TRACK_BUFFER_MAX_SEC )
		{
			var nStart = Math.max( 0, buffered.start(0) - 1 );
			var nEnd = buffered.end(0) - CDASHPlayer.TRACK_BUFFER_MAX_SEC;

			// if playback is within this range, need to advance forward
			var nCurrentTime = this.m_player.m_elVideoPlayer.currentTime;
			if ( !this.m_player.m_elVideoPlayer.paused )
			{
				nEnd = Math.min( nEnd, nCurrentTime - 0.1 );
			}
			else if ( nCurrentTime > nStart && nCurrentTime < nEnd )
			{
				this.m_player.SeekTo( nEnd + 0.1 );
			}

			if ( nEnd > nStart )
			{
				this.m_nBufferUpdate = CSegmentLoader.s_BufferUpdateRemove;
				this.m_sourceBuffer.remove( nStart, nEnd );
			}
		}
	}
}

CSegmentLoader.prototype.OnSourceBufferUpdateEnd = function()
{
	this.m_bSeekInProgress = false;

	if ( this.m_nBufferUpdate == CSegmentLoader.s_BufferUpdateAppend )
		this.m_player.OnSegmentDownloaded();

	this.m_nBufferUpdate = CSegmentLoader.s_BufferUpdateNone;
	this.UpdateBuffer();
}

CSegmentLoader.prototype.OnSourceBufferError = function( e )
{
	PlayerLog( 'Source buffer error' );
}

CSegmentLoader.prototype.OnSourceBufferAbort = function( e )
{
	PlayerLog( 'Source buffer update aborted' );
}

CSegmentLoader.prototype.DownloadFailed = function()
{
	this.m_player.OnSegmentDownloadFailed();
}

CSegmentLoader.prototype.ScheduleNextDownload = function()
{
	var _loader = this;
	if ( this.m_bNeedInitSegment )
	{
		this.DownloadNextSegment();
		return;
	}

	// make sure we aren't already scheduled
	if ( this.m_schNextDownload != null )
	{
		PlayerLog( 'Already scheduled next download' );
		return;
	}

	// check if the next segment is available
	var unDeltaMS = CMPDParser.GetSegmentAvailableFromNow( this.m_adaptation, this.m_nNextSegment, this.m_player.m_rtLiveContentStarted );
	if ( unDeltaMS > 0 )
	{
		// not yet available
		this.m_schNextDownload = setTimeout( function() { _loader.DownloadNextSegment() }, unDeltaMS );
		return;
	}

	// check if we need to buffer. Keep downloading for dynamic content, minimum amount for VOD
	var unAmountBuffered = this.GetAmountBuffered();
	if ( this.m_player.BIsLiveContent() || unAmountBuffered < CDASHPlayer.TRACK_BUFFER_MS )
	{
		this.DownloadNextSegment();
		return;
	}

	// if enough to play, but not fully buffered, download with delay to allow adaptive changes to occur
	if ( unAmountBuffered < CDASHPlayer.TRACK_BUFFER_VOD_LOOKAHEAD_MS )
	{
		this.m_schNextDownload = setTimeout( function() { _loader.DownloadNextSegment() }, CDASHPlayer.DOWNLOAD_RETRY_MS );
		return;
	}

	// next segment is available but buffer is full. Can wait on download
	unDeltaMS = unAmountBuffered - CDASHPlayer.TRACK_BUFFER_VOD_LOOKAHEAD_MS;

	if ( this.m_player.m_elVideoPlayer.playbackRate > 1.0 )
		unDeltaMS /= this.m_player.m_elVideoPlayer.playbackRate;

	if ( unAmountBuffered < ( CDASHPlayer.TRACK_BUFFER_MAX_SEC * 1000 ) - CDASHPlayer.TRACK_BUFFER_VOD_LOOKAHEAD_MS )
	{
		// should be room in buffer in TRACK_BUFFER_MS time for next segment
		this.m_schNextDownload = setTimeout( function() { _loader.DownloadNextSegment() }, unDeltaMS );
	}
	else
	{
		// no more room in buffer, don't download now. Check again soon.
		this.m_schWaitForBuffer = setTimeout( function() { _loader.ScheduleNextDownload() }, unDeltaMS );
	}
}

CSegmentLoader.prototype.BIsLoaderStalling = function()
{
	if ( !this.ContainsGame() )
		return ( this.GetAmountBufferedInPlayer() < CMPDParser.GetSegmentDuration( this.m_adaptation ) && ( this.m_nNextSegment <= this.m_nTotalSegments ) );
	else
		return false;
}

CSegmentLoader.prototype.BIsLoaderBuffered = function()
{
	if ( !this.ContainsGame() )
		return ( this.GetAmountBufferedInPlayer() >= CDASHPlayer.TRACK_BUFFER_MS || this.m_nNextSegment > this.m_nTotalSegments );
	else
		return true;
}

CSegmentLoader.prototype.GetAmountBufferedInPlayer = function()
{
	var nBuffered = 0;
	var buffered = {};
	buffered = (this.m_sourceBuffer != null) ? this.m_sourceBuffer.buffered : [];

	if ( buffered.length > 0 )
	{
		// playback might not have started yet so need to ensure it is within the buffered area
		var nCurrentTime = this.m_player.m_elVideoPlayer.currentTime;
		if ( nCurrentTime < buffered.start( 0 ) )
			nCurrentTime = buffered.start( 0 );

		if ( nCurrentTime > buffered.end( 0 ) )
			nCurrentTime = buffered.end( 0 );

		nBuffered = buffered.end( 0 ) - nCurrentTime;
	}

	return Math.floor( nBuffered * 1000 );
}

CSegmentLoader.prototype.GetAmountBuffered = function()
{
	// include data we haven't fed to player
	var nBuffered = this.GetAmountBufferedInPlayer();
   	for ( var i = 0; i < this.m_bufSegments.length; i++ )
	{
		nBuffered += this.m_bufSegments[i].duration;
	}
	return nBuffered;
}

CSegmentLoader.prototype.GetBufferedStart = function()
{
	var buffered = (this.m_sourceBuffer != null) ? this.m_sourceBuffer.buffered : [];
	if ( buffered.length == 0 )
		return 0;

	return this.m_sourceBuffer.buffered.start(0);
}

CSegmentLoader.prototype.GetBufferedEnd = function()
{
	var buffered = (this.m_sourceBuffer != null) ? this.m_sourceBuffer.buffered : [];
	if ( buffered.length == 0 )
		return 0;

	return this.m_sourceBuffer.buffered.end(0);
}

CSegmentLoader.prototype.SeekToSegment = function( nSeekTime, bForceBufferClear )
{
	// if seeking outside of the main buffer or forced override
	if ( !this.ContainsGame() && ( nSeekTime < this.GetBufferedStart() || nSeekTime > this.GetBufferedEnd() || bForceBufferClear ) )
	{
		// Allow any current download to complete
		if ( this.m_xhr )
		{
			// use download timeout handler to block new downloads from starting
			var _loader = this;
			this.m_schNextDownload = setTimeout( function() { _loader.SeekToSegment( nSeekTime, bForceBufferClear ) }, CDASHPlayer.DOWNLOAD_RETRY_MS );
			return;
		}

		this.m_bSeekInProgress = true;

		// stop download timeouts
		if ( this.m_schNextDownload )
		{
			clearTimeout( this.m_schNextDownload );
			this.m_schNextDownload = null;
		}

		if ( this.m_schRetryDownload )
		{
			clearTimeout( this.m_schRetryDownload );
			this.m_schRetryDownload = null;
		}

		if ( this.m_schWaitForBuffer )
		{
			clearTimeout( this.m_schWaitForBuffer );
			this.m_schWaitForBuffer = null;
		}

		// Set the next segment based on nSeekTime, -1 for start of the segment for the time.
		var nSegmentTime = CMPDParser.GetSegmentForTime( this.m_adaptation, nSeekTime * 1000 ) - 1;
		this.m_nNextSegment = Math.max( nSegmentTime, this.m_adaptation.segmentTemplate.startNumber );

		// PlayerLog("Set Next Segment: " + this.m_nNextSegment + " at approx. " + SecondsToTime(this.m_nNextSegment * CMPDParser.GetSegmentDuration(this.m_adaptation) / 1000) + " seconds.");

		// flag an unused buffer cleanup
		this.m_bRemoveBufferState = true;
		this.UpdateBuffer();

		this.DownloadNextSegment();

		return false; // can't shift time just yet
	}
	else
	{
		// if not downloading, update next scheduled download in case we did a seek to the end of the buffered data
		if ( ( !this.m_xhr && this.m_schNextDownload ) || this.m_schWaitForBuffer )
		{
			clearTimeout( this.m_schNextDownload );
			this.m_schNextDownload = null;

			clearTimeout( this.m_schWaitForBuffer );
			this.m_schWaitForBuffer = null;

			this.ScheduleNextDownload();
		}

		return true; // can shift time now
	}
}

CSegmentLoader.prototype.RemoveAllBuffers = function()
{
	if ( !this.m_bRemoveBufferState )
		return;

	// clears all buffer data from the player
	buffered = (this.m_sourceBuffer != null) ? this.m_sourceBuffer.buffered : {};
	var nMaxBuffered = 0;
	for ( var i = 0; i < buffered.length; i++ )
	{
		if ( nMaxBuffered < buffered.end( i ) )
			nMaxBuffered = buffered.end( i );
	}

	if ( nMaxBuffered != 0 )
	{
		this.m_nBufferUpdate = CSegmentLoader.s_BufferUpdateRemove;
		this.m_sourceBuffer.remove( 0, nMaxBuffered + 1 );
	}

	this.m_bRemoveBufferState = false;
}

CSegmentLoader.prototype.GetGameDataFrames = function()
{
	return this.m_rgGameDataFrames;
}

CSegmentLoader.prototype.ClearGameDataFramesBefore = function( nBeforeTime )
{
	var spliceCount = 0;
	for ( i = 0; i < this.m_rgGameDataFrames.length; i++ )
	{
		if ( ( this.m_rgGameDataFrames[i].pts / 1000 ) < nBeforeTime )
			spliceCount++;
		else
			break;
	}

	// PlayerLog( 'Clearing Game Data Frames earlier than ' + nBeforeTime + '. Total Frames to Clear: ' + spliceCount );
	this.m_rgGameDataFrames.splice( 0, spliceCount );
	return spliceCount;
}

CSegmentLoader.prototype.LogDownload = function ( xhr, startTime, dataSizeBytes )
{
	// remove the oldest log as needed
	if ( this.m_rgDownloadLog.length > this.m_nDownloadLogSize )
	{
		this.m_rgDownloadLog.shift();
	}

	// store the download
	var logEntry = [];
	logEntry.downloadTime = performance.now() - startTime;

	if ( logEntry.downloadTime > 0 )
	{
		logEntry.dataSizeBytes = dataSizeBytes;
		this.m_rgDownloadLog.push( logEntry );

		// for stats tracking
		this.m_nBytesReceivedTotal += logEntry.dataSizeBytes;
		this.m_nSegmentDownloadTimeTotal += logEntry.downloadTime;
		this.m_nSegmentDownloadTimeEntries++;
		this.m_nSegmentDownloadTimeMinimum = ( this.m_nSegmentDownloadTimeMinimum == 0 ? logEntry.downloadTime : ( logEntry.downloadTime < this.m_nSegmentDownloadTimeMinimum ? logEntry.downloadTime : this.m_nSegmentDownloadTimeMinimum ) );
		this.m_nSegmentDownloadTimeMaximum = ( this.m_nSegmentDownloadTimeMaximum == 0 ? logEntry.downloadTime : ( logEntry.downloadTime > this.m_nSegmentDownloadTimeMaximum ? logEntry.downloadTime : this.m_nSegmentDownloadTimeMaximum ) );
	}
}

CSegmentLoader.prototype.GetBandwidthRate = function ()
{
	var nTotalTime = 0;
	var nTotalDataSizeBits = 0;
	for (var i = 0; i < this.m_rgDownloadLog.length; i++)
	{
		nTotalTime +=  this.m_rgDownloadLog[i].downloadTime;
		nTotalDataSizeBits +=  this.m_rgDownloadLog[i].dataSizeBytes;
	}

	// return in bits (per second) as representation bandwidth is as well
	if (nTotalTime != 0)
	{
		return ((nTotalDataSizeBits * 8) / (nTotalTime / 1000));
	}
	else
	{
		return 0;
	}
}

CSegmentLoader.prototype.GetSegmentDownloadTimeStats = function( bResetStats )
{
	var seg_stats = {};
	if ( this.m_nSegmentDownloadTimeEntries > 0 )
	{
		seg_stats = {
			'seg_avg': ( this.m_nSegmentDownloadTimeTotal / this.m_nSegmentDownloadTimeEntries ) / 1000,
			'seg_min': this.m_nSegmentDownloadTimeMinimum / 1000,
			'seg_max': this.m_nSegmentDownloadTimeMaximum / 1000,
		}
	}
	else
	{
		seg_stats = {
			'seg_avg': 0,
			'seg_min': 0,
			'seg_max': 0,
		}
	}

	if ( bResetStats )
	{
		this.m_nSegmentDownloadTimeTotal = 0;
		this.m_nSegmentDownloadTimeEntries = 0;
		this.m_nSegmentDownloadTimeMinimum = 0;
		this.m_nSegmentDownloadTimeMaximum = 0;
	}

	return seg_stats;
}

CSegmentLoader.prototype.GetBytesReceived = function()
{
	return this.m_nBytesReceivedTotal;
}

CSegmentLoader.prototype.GetFailedSegmentDownloads = function()
{
	return this.m_nFailedSegmentDownloads;
}

CSegmentLoader.prototype.GetDownloadLog = function()
{
	return this.m_rgDownloadLog;
}

/////////////////////////////////////////////////////////////////
// MPD parser
/////////////////////////////////////////////////////////////////
function CMPDParser()
{
	this.availabilityStartTime = new Date();
	this.periods = []
}

CMPDParser.strBaseURL = '';
CMPDParser.GetBaseURL = function()
{
	return CMPDParser.strBaseURL;
}

CMPDParser.strStatsLink = '';
CMPDParser.strStalledLink = '';
CMPDParser.GetAnalyticsStatsLink = function()
{
	return CMPDParser.strStatsLink;
}

CMPDParser.GetAnalyticsStalledLink = function()
{
	return CMPDParser.strStalledLink;
}

CMPDParser.prototype.BParse = function( xmlDoc )
{
	var _mpd = this;
	xml = $J( xmlDoc );
	_mpd.m_xml = xml;

	// get mpd
	var xmlMPD = xml.find( 'MPD' );
	if ( xmlMPD.size() == 0 )
	{
		// might be the root node, check
		xmlMPD = xml.filter(':first');
		if (xmlMPD[0].nodeName != 'MPD')
		{
			return false;
		}
	}

	xmlMPD = xmlMPD[0];
	_mpd.type = $J( xmlMPD ).attr( 'type' );
	_mpd.minBufferTime = _mpd.ParseDuration(xmlMPD, 'minBufferTime');
	if (_mpd.type == 'dynamic')
	{
		_mpd.availabilityStartTime = _mpd.ParseDate(xmlMPD, 'availabilityStartTime');
		_mpd.publishTime = _mpd.ParseDate(xmlMPD, 'publishTime');
		_mpd.minimumUpdatePeriod = _mpd.ParseDuration(xmlMPD, 'minimumUpdatePeriod');
		_mpd.timeShiftBufferDepth = _mpd.ParseDuration(xmlMPD, 'timeShiftBufferDepth');

		if (!_mpd.availabilityStartTime || !_mpd.publishTime || !_mpd.minimumUpdatePeriod || !_mpd.minBufferTime || !_mpd.timeShiftBufferDepth )
		{
			return false;
		}
	}
	else if (_mpd.type == 'static' )
	{
		_mpd.mediaPresentationDuration = _mpd.ParseDuration(xmlMPD, 'mediaPresentationDuration');

		if ( !_mpd.minBufferTime || !_mpd.mediaPresentationDuration ) {
			PlayerLog("MPD - Missing Buffer Time or Presentation Duration");
			return false;
		}
	}

	// MPD BaseURL if set - Must be direct child of MPD
	var baseUrl = $J( xmlMPD ).find('> BaseURL');
	if ( baseUrl )
	{
		CMPDParser.strBaseURL = baseUrl.text();
	}

	// stats reporting if Analytics set in MPD
	var analytics = $J( xmlMPD ).find( 'Analytics' );
	if ( analytics )
	{
		CMPDParser.strStatsLink = $J( analytics ).attr( 'statslink' );
		CMPDParser.strStalledLink = $J( analytics ).attr( 'stalledlink' );
	}

	// grab all periods.. only support 1
	var xmlPeriods = xml.find( 'Period' );
	if ( xmlPeriods.size() == 0 )
		return false;

	var xmlPeriod = xmlPeriods[0];
	var period = {};

	period.id = $J( xmlPeriod ).attr( 'id' );
	period.start = _mpd.ParseDuration( xmlPeriod, 'start' );
	if ( !period.id || period.start === null )
	{
		PlayerLog("MPD - Missing Period Information.")
		return false;
	}

	period.duration = _mpd.ParseDuration( xmlPeriod, 'duration' ); // optional on live

	// parse adaptation sets for this period
	var bError = false;
	_mpd.periods = [];
	_mpd.periods.push( period );
	_mpd.periods[0].adaptationSets = [];
	$J( xmlPeriod ).find( 'AdaptationSet' ).each( function()
	{

		var xmlAdaptation = $J( this );
		var adaptationSet = {};
		adaptationSet.segmentAlignment = _mpd.ParseBool( xmlAdaptation, 'segmentAlignment' );
		adaptationSet.isClosedCaption = ( xmlAdaptation.attr( 'mimeType' ) == "text/vtt" ? true : false );
		adaptationSet.language = xmlAdaptation.attr( 'lang' );
		adaptationSet.containsVideo = false;
		adaptationSet.containsAudio = false;
		adaptationSet.containsGame = false;

		if ( !adaptationSet.isClosedCaption )
		{
			if ( adaptationSet.segmentAlignment == null )
			{
				bError = true;
				PlayerLog("MPD - Segment Alignment Missing");
				return;
			}

			// parse components
			$J( xmlAdaptation ).find( 'ContentComponent' ).each( function()
			{
				var xmlComponent = $J( this );
				var type = $J( xmlComponent ).attr( 'contentType' );
				if ( type == 'video' )
					adaptationSet.containsVideo = true;
				if ( type == 'audio' )
					adaptationSet.containsAudio = true;
				if ( type == 'game' )
					adaptationSet.containsGame = true;
			});

			if ( adaptationSet.containsVideo )
			{
				var xmlThumbnails = $J( xmlAdaptation ).find('> Thumbnails');
				if ( xmlThumbnails.size() != 0 )
				{
					adaptationSet.thumbnails = {
						period: _mpd.ParseInt( xmlThumbnails, 'period' ),
						template: $J( xmlThumbnails ).attr( 'template' ),
						sheet: _mpd.ParseInt( xmlThumbnails, 'sheet' ),
						sheetSeconds: _mpd.ParseInt( xmlThumbnails, 'period' ) * _mpd.ParseInt( xmlThumbnails, 'sheet' )
					}
				}
			}

			// parse roles ( main, alternate, supplementary, commentary, dub )
			adaptationSet.roles = [];
			$J( xmlAdaptation ).find( 'Role' ).each( function()
			{
				var xmlComponent = $J( this );
				var type = $J( xmlComponent ).attr( 'value' );
				adaptationSet.roles.push( type );
			});

			// find segment template
			var xmlSegmentTemplates = $J( xmlAdaptation ).find( 'SegmentTemplate' );
			if ( xmlSegmentTemplates.size() == 0 )
			{
				bError = true;
				PlayerLog("MPD - Segment Template Missing");
				return;
			}

			var xmlSegmentTemplate = xmlSegmentTemplates[0];
			var segmentTemplate = {};
			segmentTemplate.timescale = _mpd.ParseInt( xmlSegmentTemplate, 'timescale' );
			segmentTemplate.duration = _mpd.ParseInt( xmlSegmentTemplate, 'duration' );
			segmentTemplate.startNumber = _mpd.ParseInt( xmlSegmentTemplate, 'startNumber' );
			segmentTemplate.media = $J( xmlSegmentTemplate ).attr( 'media' );

			if ( !adaptationSet.containsGame )
				segmentTemplate.initialization = $J( xmlSegmentTemplate ).attr( 'initialization' );
			else
				segmentTemplate.initialization = segmentTemplate.media;

			if ( !segmentTemplate.timescale || !segmentTemplate.duration || !segmentTemplate.startNumber || !segmentTemplate.media || !segmentTemplate.initialization )
			{
				bError = true;
				PlayerLog("MPD - Segment Template Data Missing");
				return false;
			}

			adaptationSet.segmentTemplate = segmentTemplate;

			// parse all representations
			adaptationSet.representations = [];
			$J( xmlAdaptation ).find( 'Representation' ).each( function()
			{
				var xmlRepresentation = $J( this );
				var representation = {};
				representation.id = $J( xmlRepresentation ).attr( 'id' );
				representation.mimeType = $J( xmlRepresentation ).attr( 'mimeType' );
				representation.codecs = $J( xmlRepresentation ).attr( 'codecs' );
				representation.bandwidth = _mpd.ParseInt( xmlRepresentation, 'bandwidth' );

				if (adaptationSet.containsVideo)
				{
					representation.width = _mpd.ParseInt( xmlRepresentation, 'width');
					representation.height = _mpd.ParseInt( xmlRepresentation, 'height');
					representation.frameRate = _mpd.ParseFramerate( xmlRepresentation, 'frameRate' );
					
					if ( !representation.id || !representation.mimeType || !representation.codecs || !representation.bandwidth  )
					{
						bError = true;
						PlayerLog("MPD - Representation Video Data Missing");
						return;
					}
				}
				else if (adaptationSet.containsAudio)
				{
					representation.audioSamplingRate = _mpd.ParseInt( xmlRepresentation, 'audioSamplingRate');

					// AudioChannelConfiguration to determine Audio Channels
					var xmlAudioChannelConfig = $J( xmlRepresentation ).find("AudioChannelConfiguration");
					if (xmlAudioChannelConfig)
						representation.audioChannels = _mpd.ParseInt( xmlAudioChannelConfig, 'value');

					if (!representation.audioChannels)
						representation.audioChannels = 2;

					if ( !representation.id || !representation.mimeType || !representation.codecs || !representation.bandwidth || !representation.audioSamplingRate || !representation.audioChannels)
					{
						bError = true;
						PlayerLog("MPD - Representation Audio Data Missing");
						return;
					}
				}

				adaptationSet.representations.push( representation );
			});
		}
		else
		{
			// parse roles ( caption or subtitle )
			adaptationSet.roles = ['subtitle']; // default
			$J( xmlAdaptation ).find( 'Role' ).each( function()
			{
				var xmlComponent = $J( this );
				var type = $J( xmlComponent ).attr( 'value' );
				adaptationSet.roles[0] = type;
			});

			// parse each adaptation set for closed captions
			adaptationSet.representations = [];
			$J( xmlAdaptation ).find( 'Representation' ).each( function()
			{
				var xmlRepresentation = $J( this );
				var representation = {};
				representation.id = $J( xmlRepresentation ).attr( 'id' );
				representation.bandwidth = _mpd.ParseInt( xmlRepresentation, 'bandwidth' );

				var closedCaptionFile = $J( xmlAdaptation ).find( 'BaseURL' );
				if ( !closedCaptionFile )
				{
					bError = true;
					PlayerLog( "Closed Caption File has no BaseURL for (id): " + representation.id );
					return;
				}

				// parse and store the caption URL
				representation.closedCaptionFile = CMPDParser.strBaseURL + CMPDParser.ReplaceTemplateTokens( closedCaptionFile.first().text(), representation.id, 0 );

				adaptationSet.representations.push( representation );
			});
		}

		// done
		_mpd.periods[0].adaptationSets.push( adaptationSet );
	});

	return !bError;
}

CMPDParser.prototype.BUpdate = function( xmlDoc )
{
	var _mpd = this;
	xml = $J( xmlDoc );
	_mpd.m_xml = xml;

	// make sure it is an mpd
	var xmlMPD = xml.find( 'MPD' );
	if ( xmlMPD.size() == 0 )
		return false;

	// stats reporting if Analytics set in MPD
	var analytics = $J( xmlMPD ).find( 'Analytics' );
	if ( analytics )
	{
		CMPDParser.strStatsLink = $J( analytics ).attr( 'statslink' );
		CMPDParser.strStalledLink = $J( analytics ).attr( 'stalledlink' );
	}

	// find existing period
	if ( this.periods.length == 0 )
		return false;

	var xmlPeriod;
	xml.find( 'Period' ).each( function()
	{
		var newID = $J( this ).attr( 'id' );
		var oldID = _mpd.periods[0].id;
		if ( newID == _mpd.periods[0].id )
			xmlPeriod = $J( this );
	});

	if ( !xmlPeriod )
		return false;

	// parse adapation sets for this period
	var bError = false;
	$J( xmlPeriod ).find( 'AdaptationSet' ).each( function()
	{
		var xmlAdaptation = $J( this );
		var strAdaptationID = xmlAdaptation.attr( 'id ' );
		if ( !strAdaptationID )
			return;

		// find matching adaptation
		var adaptationSet = null;
		for ( var i = 0; i < _mpd.periods[0].adaptationSets; i++ )
		{
			if ( strAdaptationID == _mpd.periods[0].adaptationSets[i] )
			{
				adaptationSet = _mpd.periods[0].adaptationSets[i];
				break;
			}
		}

		if ( !adaptationSet )
			return;

		if ( adaptationSet.containsVideo )
		{
			var xmlThumbnails = $J( xmlAdaptation ).find('> Thumbnails');
			if ( xmlThumbnails )
			{
				adaptationSet.thumbnails = {
					period: _mpd.ParseInt( xmlThumbnails, 'period' ),
					template: $J( xmlThumbnails ).attr( 'template' ),
					sheet: _mpd.ParseInt( xmlThumbnails, 'sheet' ),
					sheetSeconds: _mpd.ParseInt( xmlThumbnails, 'period' ) * _mpd.ParseInt( xmlThumbnails, 'sheet' )
				}
			}
		}

		var strMedia = $J( xmlSegmentTemplate ).attr( 'media' );
		var strInitialization = $J( xmlSegmentTemplate ).attr( 'initialization' );
		if ( !strMedia || !strInitialization )
		{
			bError = true;
			return;
		}

		var segmentTemplate = adaptationSet.segmentTemplate;
		segmentTemplate.media = strMedia;
		segmentTemplate.initialization = strInitialization;
	});

	return !bError;
}

CMPDParser.prototype.ParseDate = function( xml, strAttr )
{
	var val = $J( xml ).attr( strAttr );
	if ( !val )
		return null;

	var date = new Date( val );
	if ( Object.prototype.toString.call( date ) === '[object Date]' )
		return date;

	return null;
}

CMPDParser.prototype.ParseDuration = function( xml, strAttr )
{
	// example: PT3H50M22.33S or PT120S
	var val = $J( xml ).attr( strAttr );
	if ( !val )
		return null;

	var ret = 0;
	match = val.match( /(\d*)H/ );
	if ( match )
		ret += parseFloat(match[1]) * 60 * 60;

	match = val.match( /(\d*)M/ );
	if ( match )
		ret += parseFloat(match[1]) * 60;

	match = val.match( /(\d*\.?\d*)S/ );
	if ( match )
		ret += parseFloat(match[1]);

	return ret;
}

CMPDParser.prototype.ParseBool = function( xml, strAttr )
{
	var val = $J( xml ).attr( strAttr );
	if ( !val )
		return null;

	val = val.toLowerCase();
	if ( val == 'true' )
		return true;
	if ( val == 'false' )
		return false;

	return null;
}

CMPDParser.prototype.ParseInt = function( xml, strAttr )
{
	var val = $J( xml ).attr( strAttr );
	if ( !val )
		return null;

	return parseInt( val );
}

CMPDParser.prototype.ParseFramerate = function( xml, strAttr )
{
	var val = $J( xml ).attr( strAttr );
	if ( !val )
		return null;

	return eval( val );
}

CMPDParser.ReplaceTemplateTokens = function( template, representationID, number )
{
	template = template.replace( '$RepresentationID$', representationID );
	template = template.replace( '$Number$', number );

	return template;
}

CMPDParser.GetInitSegmentURL = function( adaptationSet, representation )
{
	var url = CMPDParser.GetBaseURL() + adaptationSet.segmentTemplate.initialization;
	return CMPDParser.ReplaceTemplateTokens( url, representation.id, 0 );
}

CMPDParser.GetSegmentURL = function( adaptationSet, representation, nSegment )
{
	var url = CMPDParser.GetBaseURL() + adaptationSet.segmentTemplate.media;
	return CMPDParser.ReplaceTemplateTokens( url, representation.id, nSegment );
}

CMPDParser.GetSegmentAvailableFromNow = function( adaptationSet, nSegment, rtMovieStart )
{
	var unSegmentDurationMS = CMPDParser.GetSegmentDuration( adaptationSet );
	var iSegment = nSegment - adaptationSet.segmentTemplate.startNumber;

	var unAvailableMS = Date.now() - rtMovieStart;
	var unSegmentReadyAt = iSegment * unSegmentDurationMS;

	return unSegmentReadyAt - unAvailableMS;
}

CMPDParser.GetSegmentDuration = function( adaptationSet )
{
	// currently only support all segments having the same duration
	return (adaptationSet.segmentTemplate.duration / adaptationSet.segmentTemplate.timescale) * 1000;
}

CMPDParser.GetSegmentForTime = function( adaptationSet, unTime )
{
	// currently only support all segments having the same duration
	var unSegmentDuration = CMPDParser.GetSegmentDuration( adaptationSet );
	return Math.floor( unTime / unSegmentDuration ) + 1;
}

CMPDParser.prototype.GetPeriodDuration = function( unPeriod )
{
	if ( this.type == 'dynamic' )
	{
		PlayerLog( 'GetPeriodDuration is unknown for live content!' );
		return 0;
	}

	if ( unPeriod < this.periods.length && this.periods[unPeriod].duration )
		return this.periods[unPeriod].duration;
	else
		return 0;
}

/////////////////////////////////////////////////////////////////
// UI
/////////////////////////////////////////////////////////////////
function CDASHPlayerUI( player, eUIMode )
{
	this.m_bHidden = false;
	this.m_player = player;
	this.m_elOverlay = null;
	this.m_elLiveBanner = null;
	this.m_elContainer = null;
	this.m_timeoutHide = null;
	this.m_bPlayingLiveEdge = true;
	this.m_elVideoTitle = null;
	this.m_elBufferingMessage = null;
	this.m_elBigPlayPauseIndicator = null;
	this.m_bIsSafariBrowser = (navigator.userAgent.toLowerCase().indexOf('safari') != -1 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1);
	this.m_bIsInternetExplorer = (navigator.appVersion.toLowerCase().indexOf('trident/') != -1);
	this.m_strUniqueSettingsID = '';
	this.m_elActiveNotification = null;
	this.m_schNotificationTimeout = null;
	this.m_ThumbnailInfo = null;
	this.m_bSettingsPanelInit = false;

	this.m_eUIMode = eUIMode;
	this.m_strStylePrefix = this.BInTenFoot() ? 'tenfoot_' : '';

	this.m_elSettingsPanel = null;
	this.m_elClosedCaptionsPanel = null;

	this.m_eFocusedUIPanel = CDASHPlayerUI.eUIPanelMain;
	this.m_nFocusedUIElementIndex = CDASHPlayerUI.PLAY_PAUSE_INDEX;
	this.m_fLastProgressBarScrubPerc = 0.0;
}

CDASHPlayerUI.CLOSED_CAPTIONS_NONE = "none";
CDASHPlayerUI.PRELOAD_THUMBNAILS = false;
CDASHPlayerUI.CLOSED_CAPTIONS_SELECT_EXT = "_CC";
CDASHPlayerUI.SKIP_SHORT_TIME_SECS = 15;
CDASHPlayerUI.SKIP_LONG_TIME_SECS = 300;
CDASHPlayerUI.VOLUME_STEP_SIZE = 0.025;

CDASHPlayerUI.eUIModeDesktop = 0;
CDASHPlayerUI.eUIModeTenFoot = 1;

CDASHPlayerUI.eUIPanelMain = 0;
CDASHPlayerUI.eUIPanelSettings = 1;
CDASHPlayerUI.eUIPanelCaptions = 2;

// Input to Keyboard / Controller Navigation
CDASHPlayerUI.NAVIGATE_INIT = 0;
CDASHPlayerUI.NAVIGATE_SELF = -1;

CDASHPlayerUI.LEFT_PAD_LEFT = 37;
CDASHPlayerUI.LEFT_PAD_UP = 38;
CDASHPlayerUI.LEFT_PAD_RIGHT = 39;
CDASHPlayerUI.LEFT_PAD_DOWN = 40;

CDASHPlayerUI.RIGHT_PAD_LEFT = 68;
CDASHPlayerUI.RIGHT_PAD_UP = 82;
CDASHPlayerUI.RIGHT_PAD_RIGHT = 71;
CDASHPlayerUI.RIGHT_PAD_DOWN = 70;

CDASHPlayerUI.BUTTON_A = 65;
CDASHPlayerUI.BUTTON_B = 66;
CDASHPlayerUI.BUTTON_X = 88;
CDASHPlayerUI.BUTTON_Y = 89;

CDASHPlayerUI.LEFT_GRIP = 72;
CDASHPlayerUI.LEFT_BUMPER = 74;
CDASHPlayerUI.BACK = 81;
CDASHPlayerUI.START = 32;
CDASHPlayerUI.RIGHT_BUMPER = 75;
CDASHPlayerUI.RIGHT_GRIP = 76;

// UI data-index elements
CDASHPlayerUI.NO_ELEMENT_INDEX = 0;
CDASHPlayerUI.SKIP_BACK_INDEX = 1;
CDASHPlayerUI.STOP_INDEX = 2;
CDASHPlayerUI.PLAY_PAUSE_INDEX = 3;
CDASHPlayerUI.SKIP_FORWARD_INDEX = 4;
CDASHPlayerUI.PROGRESS_BAR_INDEX = 11;
CDASHPlayerUI.CLOSED_CAPTION_INDEX = 21;
CDASHPlayerUI.VOLUME_CONTAINER_INDEX = 22;
CDASHPlayerUI.SETTINGS_INDEX = 23;
CDASHPlayerUI.SETTINGS_PANEL_FIRST_INDEX = 31;
CDASHPlayerUI.SETTINGS_PANEL_LAST_INDEX = 33;
CDASHPlayerUI.CAPTIONS_PANEL_FIRST_INDEX = 41;
CDASHPlayerUI.CAPTIONS_PANEL_LAST_INDEX = 49;

CDASHPlayerUI.prototype.Init = function()
{
	var _ui = this;
	var _overlay = this.parentNode;

	this.m_elContainer = $J( this.m_player.m_elVideoPlayer.parentNode );

	this.m_elOverlay = $J( '.' + this.m_strStylePrefix + 'dash_overlay' );
	this.m_elContainer.css( {'position': 'relative', 'overflow': 'hidden' } );
	this.m_elContainer.append( this.m_elOverlay );

	this.m_elContainer.on( 'fullscreenchange', function() { _ui.OnFullScreenChange(); } );
	this.m_elContainer.on( 'mozfullscreenchange', function() { _ui.OnFullScreenChange(); } );
	this.m_elContainer.on( 'webkitfullscreenchange', function() { _ui.OnFullScreenChange(); } );
	this.m_elContainer.on( 'msfullscreenchange', function() { _ui.OnFullScreenChange(); } );

	var elVideoPlayer = $J( this.m_player.m_elVideoPlayer );
	elVideoPlayer.on( 'mousemove', function() { _ui.OnMouseMovePlayer() } );
	elVideoPlayer.on( 'timeupdate', function() { _ui.OnTimeUpdatePlayer() } );
	elVideoPlayer.on( 'bufferedupdate', function() { _ui.OnTimeUpdatePlayer() } );
	elVideoPlayer.on( 'playing', function() { _ui.OnPlaying() } );
	elVideoPlayer.on( 'click', function() { _ui.TogglePlayPause() } );
	elVideoPlayer.on( 'pause', function() { _ui.OnPause() } );
	elVideoPlayer.on( 'initialized', function() { _ui.OnVideoInitialized(); } );

	this.m_elOverlay.on( 'mouseenter', function() { _ui.OnMouseEnterOverlay() } );
	this.m_elOverlay.on( 'mouseleave', function( e ) { _ui.OnMouseLeaveOverlay( e ) } );

	$J( '.live_button', _overlay ).on('click', function() { _ui.JumpToLive(); } );
	$J( '.play_button', _overlay ).on('click', function() { _ui.TogglePlayPause(); } );
	$J( '.stop_button', _overlay ).on('click', function() { _ui.StopVideo(); } );
	$J( '.volume_slider', _overlay ).on( 'click', function(e) { _ui.OnVolumeClick( e, this ); } );
	$J( '.volume_slider', _overlay ).on( 'mousedown', function(e) { _ui.OnVolumeStartDrag( e, this ); } );
	$J( '.volume_slider', _overlay ).on( 'mouseup', function(e) { _ui.OnVolumeStopDrag( e, this ); } );
	$J( '.volume_slider', _overlay ).on( 'mouseleave', function(e) { _ui.OnVolumeStopDrag( e, this ); } );

	$J( '.volume_icon', _overlay ).on( 'click', function(e) { _ui.ToggleMute( e, this ); });
	$J( '.volume_icon', _overlay ).on( 'mouseenter', function(e) { _ui.ShowVolumeBar(); });
	$J( '.volume_container', _overlay ).on( 'mouseleave', function(e) { _ui.HideVolumeBar(); });
	$J( '.fullscreen_button', _overlay ).on( 'click', function(e) { _ui.ToggleFullscreen(); });
	$J( '.progress_bar_container', _overlay ).on( 'click', function(e) { _ui.OnProgressClick( e, this ); });
	$J( '.progress_bar_container', _overlay ).on( 'mousemove', function(e) { _ui.OnProgressHover( e, this ); });
	$J( '.progress_bar_container', _overlay ).on( 'mouseleave', function(e) { _ui.OnProgressLeave( e, this ); });
	$J( '.skip_back', _overlay ).on( 'click', function(e) { _ui.OnSkipTime( -CDASHPlayerUI.SKIP_SHORT_TIME_SECS ); });
	$J( '.skip_fwd', _overlay ).on( 'click', function(e) { _ui.OnSkipTime( CDASHPlayerUI.SKIP_SHORT_TIME_SECS ); });

	this.m_elSettingsPanel = $J( '#' + this.m_strStylePrefix + 'settings_panel_wrapper' );
	this.m_elContainer.append( this.m_elSettingsPanel );
	this.m_elClosedCaptionsPanel = $J( '#' + this.m_strStylePrefix + 'closed_captions_panel_wrapper' );
	this.m_elContainer.append( this.m_elClosedCaptionsPanel );

	if ( this.BInTenFoot() )
	{
		$J( window ).on( 'keydown', function ( e ) { _ui.OnKeyDownTenFoot( e ); } );
		$J( window ).on( 'mousewheel', function ( e ) { _ui.OnMouseWheelTenFoot( e ); } );
	}
	else
	{
		$J( window ).on( 'keydown', function ( e ) { _ui.OnKeyDown( e ); } );
	}

}

CDASHPlayerUI.prototype.BInTenFoot = function()
{
	return ( this.m_eUIMode == CDASHPlayerUI.eUIModeTenFoot );
}

// Once the video is playing, init these UI elements
CDASHPlayerUI.prototype.OnVideoInitialized = function()
{
	var _ui = this;

	this.LoadVolumeSettings();

	if ( this.m_player.BIsLiveContent() )
	{
		if ( !this.m_elLiveBanner )
		{
			this.m_elLiveBanner = $J( '.dash_video_live_banner' );
			this.m_elLiveBanner.on( 'click', function() { _ui.JumpToLive(); } );
			this.m_elContainer.append( this.m_elLiveBanner );
		}
	}
	else if ( this.m_elLiveBanner )
	{
		this.m_elLiveBanner.remove();
		this.m_elLiveBanner = null;
	}

	if ( !this.m_player.BIsLiveContent() )
	{
		if ( !this.m_elBufferingMessage )
		{
			this.m_elBufferingMessage = $J( '#' + this.m_strStylePrefix + 'dash_video_buffering_message' );
			this.m_elContainer.append( this.m_elBufferingMessage );
		}
	}

	if ( !this.BInTenFoot() && !this.m_elVideoTitle )
	{
		this.m_elVideoTitle = $J( '#dash_video_title_banner' );
		this.m_elContainer.append( this.m_elVideoTitle );
	}

	if ( !this.BInTenFoot() && !this.m_elBigPlayPauseIndicator )
	{
		this.m_elBigPlayPauseIndicator = $J( '.dash_big_playpause_indicator' );
		this.m_elContainer.append( this.m_elBigPlayPauseIndicator );
		this.m_elBigPlayPauseIndicator.on( 'click', function() { _ui.TogglePlayPause() } );
	}

	if ( !this.m_player.BPlayingAudio() )
	{
		$J( '.control_container', this.m_elOverlay ).addClass( 'no_audio_track' );
		$J( this.m_player.m_elVideoPlayer ).one( 'bufferingcomplete', function() { _ui.DisplayNotification( 'This video does not contain any audio', 15000 ) } );
	}
	else
	{
		$J( '.control_container', this.m_elOverlay ).removeClass( 'no_audio_track' );
	}

	this.m_ThumbnailInfo = this.m_player.GetThumbnailInfoForVideo();
	if ( this.m_ThumbnailInfo && this.m_ThumbnailInfo.template )
	{
		// update display
		$J( '.progress_time_info' ).addClass( 'thumbnails' );

		// precache images for VOD
		if ( !this.m_player.BIsLiveContent() && CDASHPlayerUI.PRELOAD_THUMBNAILS )
		{
			var rgData = _ui.GetTimelineData();
			var nThumbnailSheets = Math.ceil( ( rgData.nTimeEnd - _ui.m_ThumbnailInfo.period ) / _ui.m_ThumbnailInfo.sheetSeconds );
			$J( '<div/>', { id: 'thumbnailcache' } ).appendTo( 'body' );
			for ( var i = 0; i < nThumbnailSheets; i++ )
			{
				var image_url = this.m_ThumbnailInfo.template.replace( '$Seconds$', i * _ui.m_ThumbnailInfo.sheetSeconds );
				$J('<img />').attr( 'src', image_url ).appendTo( '#thumbnailcache' ).hide();
			}
		}
	}

	if ( this.BInTenFoot() )
	{
		this.InitSettingsPanelInUITenFoot();
		this.InitClosedCaptionOptionPanelTenFoot();

		document.styleSheets[document.styleSheets.length-1].addRule( '::-webkit-scrollbar', 'width:8px;' );
		document.styleSheets[document.styleSheets.length-1].addRule( '::-webkit-scrollbar-track', 'background-color:#3b526f;' );
		document.styleSheets[document.styleSheets.length-1].addRule( '::-webkit-scrollbar-thumb', 'background-color:#d9dce0;' );
	}
	else
	{
		this.InitSettingsPanelInUI();
		this.InitClosedCaptionOptionPanel();
	}
}

CDASHPlayerUI.prototype.InitSettingsPanelInUI = function()
{
	if ( this.m_bSettingsPanelInit || this.BInTenFoot() )
		return;

	var _ui = this;

	$J( '#settings_icon' ).on( 'click', function()
	{
		if ( !_ui.m_elClosedCaptionsPanel.is(':hidden') )
		{
			$J( '.panel_cancel' ).click();
		}

		_ui.m_elSettingsPanel.toggle();
		if ( !_ui.m_elSettingsPanel.is( ':hidden') )
			_ui.m_eFocusedUIPanel = CDASHPlayerUI.eUIPanelSettings;
		else
			_ui.m_eFocusedUIPanel = CDASHPlayerUI.eUIPanelMain;
	} );

	$J( '.settings_done' ).on( 'click', function()
	{
		_ui.m_elSettingsPanel.hide();
		_ui.m_eFocusedUIPanel = CDASHPlayerUI.eUIPanelMain;
	});

	// Video Representations
	rgRepresentation = this.m_player.GetRepresentationsArray( true );

	$J('.representation_video').show();

	// show "auto" only if there is more than one representation
	if ( rgRepresentation.length > 1 )
		$J('#representation_select_video').append('<option selected value="-1">Auto</option>');

	for (var r = 0; r < rgRepresentation.length; r++)
	{
		if ( rgRepresentation[r].height.toString().length > 1 )
		{
			var strResolution = rgRepresentation[r].height + 'p';
			var strBandwidth = ( rgRepresentation[r].bandwidth / 1000000 ).toFixed(1) + 'Mbps';
			var strFPS = '';
			
			if ( this.m_player.BIsLiveContent() && rgRepresentation[r].frameRate > 30 )
				strFPS = '@' + rgRepresentation[r].frameRate + 'fps'; // advertise high FPS
				
			$J('#representation_select_video').append('<option value="' + r + '">' + strResolution + strFPS + ' (' + strBandwidth + ') </option>');
		}
	}

	$J( '#representation_select_video').on('change', function()
	{
		_ui.m_player.UpdateRepresentation(this.value, true);
		this.blur();
	} );

	// Audio Representations
	rgRepresentation = this.m_player.GetRepresentationsArray( false );

	// show selector if only more than one audio representation
	if (rgRepresentation.length > 1)
	{
		$J('.representation_audio').show();
		for (var r = 0; r < rgRepresentation.length; r++)
		{
			var strChannelInfo;
			if ( rgRepresentation[r].audioChannels == 2 )
				strChannelInfo = 'Stereo';
			else if ( rgRepresentation[r].audioChannels == 6 )
				strChannelInfo = '5.1 Surround';
			else
				strChannelInfo = rgRepresentation[r].audioChannels + '-Channel';

			$J('#representation_select_audio').append('<option value="' + ( r ) + '">' + strChannelInfo + ' (' + Math.ceil( rgRepresentation[r].bandwidth / 1000 ) + 'Kbps)</option>');
		}

		$J( '#representation_select_audio').on('change', function()
		{
			_ui.m_player.UpdateRepresentation(this.value, false);
			this.blur();
		} );
	}

	// Video Playback Rate
	if ( !this.m_player.BIsLiveContent() )
	{
		$J('.representation_playbackRate').show();

		$J( '#representation_select_playbackRate').on('change', function()
		{
			_ui.m_player.SetPlaybackRate(this.value);
		} );
	}

	this.m_bSettingsPanelInit = true;
}

CDASHPlayerUI.prototype.InitSettingsPanelInUITenFoot = function()
{
	if ( this.m_bSettingsPanelInit || !this.BInTenFoot() )
		return;

	var _ui = this;

	$J( '#settings_icon' ).on( 'click', function()
	{
		_ui.Hide(0);
		_ui.m_elSettingsPanel.show();
		_ui.m_eFocusedUIPanel = CDASHPlayerUI.eUIPanelSettings;
		_ui.SwitchElementFocus( CDASHPlayerUI.NO_ELEMENT_INDEX );
	} );

	// Video Representations
	var rgRepresentation = this.m_player.GetRepresentationsArray( true );
	if ( rgRepresentation.length > 0 )
	{
		for (var r = 0; r < rgRepresentation.length; r++)
		{
			if ( rgRepresentation[r].height.toString().length > 1 )
			{
				var strResolution = rgRepresentation[r].height + 'p';
				$J( '#representation_video #representation_select' ).append('<div data-value="' + r + '" class="notselected">' + strResolution + ' (' + ( rgRepresentation[r].bandwidth / 1000000 ).toFixed(1) + 'Mbps)</div>');
			}
		}

		$J( '#representation_video .panel_select .left_arrow' ).on( 'click', function() {
			var elSelect = $J( '#representation_video #representation_select' );
			var value = _ui.PanelSelectShift( elSelect, false );
		} );

		$J( '#representation_video .panel_select .right_arrow' ).on( 'click', function() {
			var elSelect = $J( '#representation_video #representation_select' );
			var value = _ui.PanelSelectShift( elSelect, true );
		} );

		$J( '#representation_video' ).show();
	}

	// Audio Representations
	rgRepresentation = this.m_player.GetRepresentationsArray( false );
	if ( rgRepresentation.length > 0 )
	{
		if ( rgRepresentation.length == 1 )
		{
			$J( '#representation_audio .left_arrow' ).css( 'visibility', 'hidden' );
			$J( '#representation_audio .right_arrow' ).css( 'visibility', 'hidden' );
		}

		for (var r = 0; r < rgRepresentation.length; r++)
		{
			var strChannelInfo;
			if ( rgRepresentation[r].audioChannels == 2 )
				strChannelInfo = 'Stereo';
			else if ( rgRepresentation[r].audioChannels == 6 )
				strChannelInfo = '5.1 Surround';
			else
				strChannelInfo = rgRepresentation[r].audioChannels + '-Channel';

			if ( r == 0 )
				$J( '#representation_audio #representation_select' ).append('<div data-value="' + ( r ) + '" class="selected">' + strChannelInfo + ' (' + Math.ceil( rgRepresentation[r].bandwidth / 1000 ) + 'Kbps)</div>');
			else
				$J( '#representation_audio #representation_select' ).append('<div data-value="' + ( r ) + '" class="notselected">' + strChannelInfo + ' (' + Math.ceil( rgRepresentation[r].bandwidth / 1000 ) + 'Kbps)</div>');
		}

		$J( '#representation_audio .panel_select .left_arrow' ).on( 'click', function() {
			var elSelect = $J( '#representation_audio #representation_select' );
			var value = _ui.PanelSelectShift( elSelect, false );
			_ui.m_player.UpdateRepresentation( value, false );
		} );

		$J( '#representation_audio .panel_select .right_arrow' ).on( 'click', function() {
			var elSelect = $J( '#representation_audio #representation_select' );
			var value = _ui.PanelSelectShift( elSelect, true );
			_ui.m_player.UpdateRepresentation( value, false );
		} );

		$J( '#representation_audio' ).show();

	}

	// Video Playback Rate
	if ( !this.m_player.BIsLiveContent() )
	{
		$J( '#representation_playbackRate .panel_select .left_arrow' ).on( 'click', function() {
			var elSelect = $J( '#representation_playbackRate #representation_select' );
			var value = _ui.PanelSelectShift( elSelect, false );
			_ui.m_player.SetPlaybackRate( value );
		} );

		$J( '#representation_playbackRate .panel_select .right_arrow' ).on( 'click', function() {
			var elSelect = $J( '#representation_playbackRate #representation_select' );
			var value = _ui.PanelSelectShift( elSelect, true );
			_ui.m_player.SetPlaybackRate( value );
		} );

		$J('#representation_playbackRate').show();
	}

	$J( '#buttonA', this.m_elSettingsPanel ).on( 'click', function ( e ) { _ui.CloseSettingsPanel( false ); } );

	this.m_bSettingsPanelInit = true;
}

CDASHPlayerUI.prototype.SetUniqueSettingsID = function( uniqueSettingsID )
{
	this.m_strUniqueSettingsID = uniqueSettingsID.toString();
}

CDASHPlayerUI.prototype.SetPlayerPlaybackRate = function()
{
	this.m_player.SetPlaybackRate( $J( '#representation_select_playbackRate' ).val() );
}

CDASHPlayerUI.prototype.Show = function()
{
	if ( this.BInTenFoot() && this.m_eFocusedUIPanel != CDASHPlayerUI.eUIPanelMain )
		return;

	this.m_bHidden = false;
	clearTimeout( this.m_timeoutHide );
	$J( this.m_elContainer ).addClass( 'dash_show_player_ui' );

	this.OnTimeUpdatePlayer();
}

CDASHPlayerUI.prototype.Hide = function( nTime )
{
	var runTime = ( typeof nTime !== 'undefined' ) ? nTime : 3000;

	var _ui = this;
	clearTimeout( this.m_timeoutHide );

	if ( runTime == 0 )
	{
		anonHideMainUI();
	}
	else if ( !this.m_player.m_elVideoPlayer.paused )
	{
		this.m_timeoutHide = setTimeout( function() { anonHideMainUI(); }, runTime );
	}

	function anonHideMainUI()
	{
		_ui.m_bHidden = true;
		$J( _ui.m_elContainer ).removeClass( 'dash_show_player_ui' );
		$J( '.volume_slider', _ui.m_elOverlay ).off( 'mousemove' );
		_ui.OnProgressLeave();
	}
}

CDASHPlayerUI.prototype.OnMouseMovePlayer = function()
{
	if ( this.BInTenFoot() && this.m_eFocusedUIPanel != CDASHPlayerUI.eUIPanelMain )
		return;

	this.Show();
	this.Hide();
}

CDASHPlayerUI.prototype.GetTimelineData = function()
{
	var elVideoPlayer = this.m_player.m_elVideoPlayer;
	var nBufferedStart = null;
	var nBufferedEnd = 0;
	for ( var i = 0; i < elVideoPlayer.buffered.length; i++ )
	{
		if ( nBufferedStart == null || elVideoPlayer.buffered.start( i ) < nBufferedStart )
			nBufferedStart = elVideoPlayer.buffered.start( i );

		if ( elVideoPlayer.buffered.end( i ) > nBufferedEnd )
			nBufferedEnd = elVideoPlayer.buffered.end( i );
	}

	if ( nBufferedStart == null )
		nBufferedStart = 0;

	var nTimeStart = 0;
	var nTimeEnd = elVideoPlayer.duration;
	if ( this.m_player.BIsLiveContent() )
	{
		nTimeStart = nBufferedStart;
		nTimeEnd = Math.max( nBufferedEnd, this.m_player.GetLiveBufferWindow() + nBufferedStart );
	}
	else
	{
		nTimeEnd = this.m_player.m_mpd.GetPeriodDuration(0);
	}

	var rgRet = {};
	rgRet.nBufferedStart = nBufferedStart;
	rgRet.nBufferedEnd = nBufferedEnd;
	rgRet.nTimeStart = nTimeStart;
	rgRet.nTimeEnd = nTimeEnd;

	return rgRet;
}

CDASHPlayerUI.prototype.OnTimeUpdatePlayer = function()
{
	// buffering should show/hide no matter if the UI is on screen
	this.UpdateBufferingProgress();

	if ( this.m_bHidden )
		return;

	var elVideoPlayer = this.m_player.m_elVideoPlayer;
	var rgData = this.GetTimelineData();

	var nProgressPct = (( elVideoPlayer.currentTime - rgData.nTimeStart ) / (rgData.nTimeEnd - rgData.nTimeStart)) * 100;
	var nLoadedPct = (( rgData.nBufferedEnd - rgData.nTimeStart ) / (rgData.nTimeEnd - rgData.nTimeStart)) * 100;

	//PlayerLog( 'bstart: ' + nBufferedStart + ', bend: ' + nBufferedEnd + ', tstart: ' + nTimeStart + ', tend: ' + nTimeEnd + ', progpct: ' + nProgressPct + ', loadpct: ' + nLoadedPct );

	if ( this.m_player.BIsLiveContent() )
	{
		$J( '.live_button' ).show();

		if ( this.m_bPlayingLiveEdge )
		{
			$J( this.m_elContainer ).addClass( 'dash_live_edge' );
			nProgressPct = nLoadedPct;
		}
		else
		{
			$J( this.m_elContainer ).removeClass( 'dash_live_edge' );
		}
	}
	else
	{
		$J( '.live_button' ).hide();
	}

	//PlayerLog( 'bstart: ' + nBufferedStart + ', bend: ' + nBufferedEnd + ', tstart: ' + nTimeStart + ', tend: ' + nTimeEnd + ', progpct: ' + nProgressPct + ', loadpct: ' + nLoadedPct );

	$J( '.progress_bar', this.m_elOverlay ).stop().css( {'width': nProgressPct + '%'}, 200 );
	$J( '.progress_bar_background', this.m_elOverlay ).stop().css({'width': nLoadedPct + '%'}, 200);

	var strCurrentTime = SecondsToTime( elVideoPlayer.currentTime );
	var strTotalTime = SecondsToTime( rgData.nTimeEnd - rgData.nTimeStart );

	if ( this.m_player.BIsLiveContent() )
	{
		$J('.right_time', this.m_elOverlay).text( strCurrentTime );
	}
	else
	{
		if ( this.BInTenFoot() )
		{
			$J('.left_time', this.m_elOverlay).text( strCurrentTime );
			$J('.right_time', this.m_elOverlay).text( strTotalTime );
		}
		else
		{
			$J( '.right_time', this.m_elOverlay ).text( strCurrentTime + " / " + strTotalTime );
		}
	}

	// show adaptive value when selected
	if ( !this.BInTenFoot() )
	{
		var repVideo = $J( '#representation_select_video' );
		if ( repVideo.find('option').length > 1 && !repVideo.is( ':focus' ) )
		{
			if ( repVideo.val() == -1 && this.m_player.m_nPlaybackHeight > 0 )
			{
				$J( '#representation_select_video option:first' ).text( 'Auto (' + this.m_player.m_nPlaybackHeight + 'p)' );
			}
			else
			{
				$J( '#representation_select_video option:first' ).text( 'Auto' );
			}
		}
	}

	var repQualityLabel = $J( '.video_quality_label' );
	if ( repQualityLabel.length != 0 )
	{
		if ( this.m_player.m_nPlaybackHeight != 0 )
			repQualityLabel.text( this.m_player.m_nPlaybackHeight + "p" );
	}

	if ( !this.BInTenFoot() )
	{
		if ( this.m_player.BIsRepresentationChanging() )
			$J( '#settings_icon' ).addClass( 'settings_icon_animated' ).removeClass( 'settings_icon' );
		else
			$J( '#settings_icon' ).addClass( 'settings_icon' ).removeClass( 'settings_icon_animated' );
	}
}

CDASHPlayerUI.prototype.UpdateBufferingProgress = function()
{
	if ( this.m_player.BIsLiveContent() )
		return;

	var _ui = this;
	var elLoadingText = this.m_elBufferingMessage.find( '.loading_text' );
	if ( this.m_player.BIsBuffering() && this.m_player.m_elVideoPlayer.readyState != CDASHPlayer.HAVE_NOTHING )
	{
		if ( this.m_player.GetPercentBuffered() != 100 )
		{
			elLoadingText.text( this.m_player.GetPercentBuffered() + '%' );
			this.m_elBufferingMessage.show();
		}
	}
	else
	{
		if ( elLoadingText.text() != '' )
		{
			if ( elLoadingText.queue() == 0 )
			{
				elLoadingText.text( '100%' );
				this.m_elBufferingMessage.fadeOut(500, function()
				{
					elLoadingText.text('');
				});
			}
		}
	}
}

CDASHPlayerUI.prototype.SetVideoTitle = function( strTitle )
{
	$J( '#dash_video_title_banner' ).attr( 'title', strTitle );
	$J( '#dash_video_title_banner' ).text( strTitle );

}

CDASHPlayerUI.prototype.JumpToLive = function()
{
	if ( this.m_bPlayingLiveEdge )
		return;

	this.m_player.SeekToBufferedEnd();
	this.m_bPlayingLiveEdge = true;

	if ( this.m_player.m_elVideoPlayer.paused )
		this.TogglePlayPause();

	this.OnTimeUpdatePlayer();
}

CDASHPlayerUI.prototype.OnPlaying = function()
{
	$J( '.play_button', this.m_elOverlay ).removeClass( 'play' );
	$J( '.play_button', this.m_elOverlay ).addClass( 'pause' );

	this.Hide();
}

CDASHPlayerUI.prototype.OnPause = function()
{
	this.Show();
	this.m_bPlayingLiveEdge = false;
	this.OnTimeUpdatePlayer();
}

CDASHPlayerUI.prototype.TogglePlayPause = function()
{
	var elVideoPlayer = this.m_player.m_elVideoPlayer;
	if( elVideoPlayer.paused )
	{
		elVideoPlayer.play();
		elVideoPlayer.playbackRate = this.m_player.m_nSavedPlaybackRate;
		$J( '.play_button', this.m_elOverlay ).addClass( 'pause' );
		$J( '.play_button', this.m_elOverlay ).removeClass( 'play' );
		this.ShowBigPlayPauseIndicator( true );
		$J( elVideoPlayer ).trigger( 'changeuiplayingstate', true );
	}
	else
	{
		elVideoPlayer.pause();
		$J( '.play_button', this.m_elOverlay ).addClass( 'play' );
		$J( '.play_button', this.m_elOverlay ).removeClass( 'pause' );
		this.ShowBigPlayPauseIndicator( false )
		$J( elVideoPlayer ).trigger( 'changeuiplayingstate', false );
	}
}

CDASHPlayerUI.prototype.StopVideo = function()
{
	if ( !this.m_player.BIsLiveContent() )
		window.close();
}

CDASHPlayerUI.prototype.ShowBigPlayPauseIndicator = function( playing )
{
	if ( !this.m_elBigPlayPauseIndicator )
		return;

	var indicator = $J( '.dash_big_playpause_indicator' );
	var state = $J( '.dash_big_playpause_indicator_state' );

		indicator.one( 'animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function() { $J(this).removeClass( 'show' ); } );
	indicator.removeClass('show');
	FlushStyleChanges( indicator );

	if ( playing )
	{
		state.addClass('play_triangle');
		state.removeClass('pause_bars');
	}
	else
	{
		state.addClass('pause_bars');
		state.removeClass('play_triangle');
	}

	indicator.addClass('show');
}

CDASHPlayerUI.prototype.OnMouseEnterOverlay = function()
{
	clearTimeout( this.m_timeoutHide );
}

CDASHPlayerUI.prototype.OnMouseLeaveOverlay = function( e )
{
	var relTarget = e.relatedTarget ? e.relatedTarget : e.toElement;
	if ( this.m_player.m_elVideoPlayer == relTarget )
		return;

	this.Hide();
}

CDASHPlayerUI.prototype.OnVolumeClick = function( e, ele )
{
	var parentOffset = $J( ele ).offset();
	var volume = 0;

	if ( this.BInTenFoot() )
	{
		var relY = e.pageY - parentOffset.top - $J( '.volume_handle' ).height();
		volume = 1 - ( relY / 160 ); // length of well
	}
	else
	{
		var relX = e.pageX - parentOffset.left;
		volume = relX / 80;
	}

	this.SetVolume( volume );

	if( this.m_player.m_elVideoPlayer.muted )
		this.ToggleMute();
}

CDASHPlayerUI.prototype.SetVolume = function( value )
{
	value = Math.min( Math.max( value, 0 ), 1 );
	this.m_player.m_elVideoPlayer.volume = value;

	if ( this.BInTenFoot() )
	{
		var sliderY = 175 - ( value * 160 ); // 160 length, offset 15 from top
		$J( '.volume_handle', this.m_elOverlay ).css( {'top': sliderY + "px"} );
	}
	else
	{
		var sliderX = value * 80 - 2;
		$J( '.volume_handle', this.m_elOverlay ).css( {'left': sliderX + "px"} );
	}

	WebStorage.SetLocal( 'video_volume', value );

}

CDASHPlayerUI.prototype.IncrementVolume = function( nAccelerate )
{
	this.SetVolume( this.m_player.m_elVideoPlayer.volume + CDASHPlayerUI.VOLUME_STEP_SIZE * nAccelerate );
	if( this.m_player.m_elVideoPlayer.muted )
		this.ToggleMute();
}

CDASHPlayerUI.prototype.DecrementVolume = function( nAccelerate )
{
	this.SetVolume( this.m_player.m_elVideoPlayer.volume - CDASHPlayerUI.VOLUME_STEP_SIZE * nAccelerate );
	if( this.m_player.m_elVideoPlayer.muted )
		this.ToggleMute();
}

CDASHPlayerUI.prototype.OnVolumeStartDrag = function( e, ele )
{
	var _ui = this;
	$J( '.volume_slider', this.m_elOverlay ).on( 'mousemove', function(e) { _ui.OnVolumeClick( e, this ); } );
	e.originalEvent.preventDefault();
}

CDASHPlayerUI.prototype.OnVolumeStopDrag = function( e, ele )
{
	$J( '.volume_slider', this.m_elOverlay ).off( 'mousemove' );
}

CDASHPlayerUI.prototype.ToggleMute = function( e, ele )
{
	if ( !this.m_player.BPlayingAudio() )
		return;

	var elVideoPlayer = this.m_player.m_elVideoPlayer;
	elVideoPlayer.muted = !elVideoPlayer.muted;

	WebStorage.SetLocal( 'video_mute', elVideoPlayer.muted );

	if( elVideoPlayer.muted )
	{
		$J( '.volume_icon',this.m_elOverlay ).addClass( 'muted' );

		if ( this.BInTenFoot() )
		{
			$J('.volume_handle', this.m_elOverlay).css( {'top': "175px"} );
		}
		else
		{
			$J('.volume_handle', this.m_elOverlay).css( {'left': "0px"} );
		}
	}
	else
	{
		$J( '.volume_icon',this.m_elOverlay ).removeClass( 'muted' );
		this.SetVolume( elVideoPlayer.volume );
	}
}

CDASHPlayerUI.prototype.ShowVolumeBar = function()
{
	if ( this.BInTenFoot() )
	{
		$J( '.volume_slider' ).show();
		$J( '.volume_container' ).addClass( 'tenfoot_focus' );
	}
}

CDASHPlayerUI.prototype.HideVolumeBar = function()
{
	if ( this.BInTenFoot() )
	{
		$J( '.volume_slider' ).hide();
		$J( '.volume_container' ).removeClass( 'tenfoot_focus' );
	}
}

CDASHPlayerUI.prototype.LoadVolumeSettings = function()
{
	var nLastVolume = WebStorage.GetLocal( 'video_volume' );
	if( nLastVolume == null )
		nLastVolume = 1;

	this.SetVolume( nLastVolume );

	var nLastMute = WebStorage.GetLocal( 'video_mute' );
	if ( nLastMute == null )
		nLastMute = false;

	if ( nLastMute != this.m_player.m_elVideoPlayer.muted )
		this.ToggleMute();
}

CDASHPlayerUI.prototype.PanelSelectShift = function( elSelect, bMoveRight )
{
	var elSelectedValue = elSelect.find( '.selected' );
	var newSelectedValue;

	if ( bMoveRight )
		newSelectedValue = elSelectedValue.next();
	else
		newSelectedValue = elSelectedValue.prev();

	if ( newSelectedValue.length == 0 )
	{
		if ( bMoveRight )
			newSelectedValue = elSelect.find( 'div' ).first();
		else
			newSelectedValue = elSelect.find( 'div' ).last();
	}

	elSelectedValue.removeClass( 'selected' ).addClass( 'notselected' );
	newSelectedValue.removeClass( 'notselected' ).addClass( 'selected' );

	return newSelectedValue.attr( 'data-value' );
}

CDASHPlayerUI.prototype.PanelSelectByValue = function ( elSelect, value )
{
	var elSelectedValue = elSelect.find( '.selected' );
	var newSelectedValue = elSelect.find( "div[data-value='" + value + "']" );
	elSelectedValue.removeClass( 'selected' ).addClass( 'notselected' );
	newSelectedValue.removeClass( 'notselected' ).addClass( 'selected' );
}

CDASHPlayerUI.prototype.PanelSelectGetValue = function ( elSelect )
{
	return elSelect.find( '.selected' ).attr( 'data-value' );
}

CDASHPlayerUI.prototype.OnKeyDown = function( e )
{
	var keycode;
	if (window.event)
		keycode = window.event.keyCode;
	else if (e)
		keycode = e.which;

	var e = e || window.event;

	var bHandled = true;
		if ( e.target == document.body )
	{
		switch (keycode)
		{
			case 32:	// space - play / pause
				e.preventDefault();
				 $J( '.play_button' ).click();
				break;
			case 37:	// left arrow - skip back
				$J( '.skip_back' ).click();
				break;
			case 39:	// right arrow - skip forward
				$J( '.skip_fwd' ).click();
				break;
			case 81:	// q - stop / quit / close
				this.StopVideo();
				break;
			default:
				bHandled = false;
				break;
		}
	}

	if ( bHandled )
	{
		this.Show();
		this.Hide();
	}

	// determine whether to bubble or not
	return !bHandled;
}

CDASHPlayerUI.prototype.OnKeyDownTenFoot = function( e )
{
	if ( !this.BInTenFoot() )
		return;

	var keycode;
	if (window.event)
		keycode = window.event.keyCode;
	else if (e)
		keycode = e.which;

	var e = e || window.event;

	var bHandled = true;

	switch ( keycode )
	{
		case CDASHPlayerUI.START:
			e.preventDefault();
			this.ClickUIElementOnKeyDown( $J( '.play_button' ) );
			break;

		case CDASHPlayerUI.LEFT_PAD_LEFT:
			this.NavigateUIOnKeyDown( CDASHPlayerUI.LEFT_PAD_LEFT );
			break;
		case CDASHPlayerUI.LEFT_PAD_UP:
			this.NavigateUIOnKeyDown( CDASHPlayerUI.LEFT_PAD_UP );
			break;
		case CDASHPlayerUI.LEFT_PAD_RIGHT:
			this.NavigateUIOnKeyDown( CDASHPlayerUI.LEFT_PAD_RIGHT );
			break;
		case CDASHPlayerUI.LEFT_PAD_DOWN:
			this.NavigateUIOnKeyDown( CDASHPlayerUI.LEFT_PAD_DOWN );
			break;

		case CDASHPlayerUI.BUTTON_A:
			this.OnPressButtonA();
			break;
		case CDASHPlayerUI.BUTTON_B:
			this.OnPressButtonB();
			break;
		case CDASHPlayerUI.BUTTON_X:
			break;
		case CDASHPlayerUI.BUTTON_Y:
			break;

		case CDASHPlayerUI.LEFT_BUMPER:
			this.ClickUIElementOnKeyDown( $J( '.skip_back' ) );
			break;
		case CDASHPlayerUI.RIGHT_BUMPER:
			this.ClickUIElementOnKeyDown( $J( '.skip_fwd' ) );
			break;

		case CDASHPlayerUI.LEFT_GRIP:
			this.OnSkipTime( -CDASHPlayerUI.SKIP_LONG_TIME_SECS );
			break;

		case CDASHPlayerUI.RIGHT_GRIP:
			this.OnSkipTime( CDASHPlayerUI.SKIP_LONG_TIME_SECS );
			break;

		case CDASHPlayerUI.BACK:
			this.ClickUIElementOnKeyDown( $J( '.stop_button') );
			break;

		case CDASHPlayerUI.RIGHT_PAD_LEFT:
			this.ScrubUIOnKeyDown( CDASHPlayerUI.RIGHT_PAD_LEFT );
			break;
		case CDASHPlayerUI.RIGHT_PAD_UP:
			this.ScrubUIOnKeyDown( CDASHPlayerUI.RIGHT_PAD_UP );
			break;
		case CDASHPlayerUI.RIGHT_PAD_RIGHT:
			this.ScrubUIOnKeyDown( CDASHPlayerUI.RIGHT_PAD_RIGHT );
			break;
		case CDASHPlayerUI.RIGHT_PAD_DOWN:
			this.ScrubUIOnKeyDown( CDASHPlayerUI.RIGHT_PAD_DOWN );
			break;

		default:
			bHandled = false;
			break;
	}

	// determine whether to bubble or not
	return !bHandled;
}

CDASHPlayerUI.prototype.ClickUIElementOnKeyDown = function ( element )
{
	if ( this.BInTenFoot() )
	{
		element.trigger( 'click' );

		var _ui = this;
		element.addClass( 'tenfoot_focus' ).delay( 150 ).queue( function() {
			element.removeClass('tenfoot_focus').dequeue();

			// make sure any selected UI is still focused
			_ui.NavigateUIOnKeyDown( CDASHPlayerUI.NAVIGATE_SELF );
		});
	}
}

CDASHPlayerUI.prototype.OnPressButtonA = function ()
{
	if ( !this.BInTenFoot() )
		return;

	if ( this.m_eFocusedUIPanel == CDASHPlayerUI.eUIPanelMain )
	{
		if ( this.ShowMainPanelUI() )
			return;

		switch ( this.m_nFocusedUIElementIndex )
		{
			case CDASHPlayerUI.VOLUME_CONTAINER_INDEX:
				$J( '.volume_icon' ).click();
				break;

			case CDASHPlayerUI.PROGRESS_BAR_INDEX:
				this.m_player.SeekTo( this.m_fLastProgressBarScrubPerc * this.GetTimelineData().nTimeEnd );
				this.m_bPlayingLiveEdge = false;
				this.OnTimeUpdatePlayer();
				break;

			case CDASHPlayerUI.CLOSED_CAPTION_INDEX:
				this.Hide(0);
				this.ShowClosedCaptionsPanel();
				break;

			case CDASHPlayerUI.SETTINGS_INDEX:
				this.Hide(0);
				this.m_elSettingsPanel.show();
				this.m_eFocusedUIPanel = CDASHPlayerUI.eUIPanelSettings;
				this.NavigateUIOnKeyDown( CDASHPlayerUI.NAVIGATE_INIT );
				break;

			default:
				$J( "div[data-index='" + this.m_nFocusedUIElementIndex + "']" ).click();
				break;
		}
	}
	else if ( this.m_eFocusedUIPanel == CDASHPlayerUI.eUIPanelSettings )
	{
		this.CloseSettingsPanel( true );
	}
	else if ( this.m_eFocusedUIPanel == CDASHPlayerUI.eUIPanelCaptions )
	{
		this.CloseCaptionsPanel( true, true );
	}
}

CDASHPlayerUI.prototype.OnPressButtonB = function ()
{
	if ( !this.BInTenFoot() )
		return;

	if ( this.m_eFocusedUIPanel == CDASHPlayerUI.eUIPanelMain )
	{
		this.Hide(0);
	}
	else if ( this.m_eFocusedUIPanel == CDASHPlayerUI.eUIPanelSettings )
	{
		this.CloseSettingsPanel( true );
	}
	else if ( this.m_eFocusedUIPanel == CDASHPlayerUI.eUIPanelCaptions )
	{
		this.CloseCaptionsPanel( true, false );
	}
}

CDASHPlayerUI.prototype.CloseSettingsPanel = function( bRestoreElementFocus )
{
	this.m_elSettingsPanel.hide();
	this.m_eFocusedUIPanel = CDASHPlayerUI.eUIPanelMain;

	if ( bRestoreElementFocus )
		this.SwitchElementFocus( CDASHPlayerUI.SETTINGS_INDEX );

	this.ShowMainPanelUI();

	var value = this.PanelSelectGetValue( $J( '#representation_video #representation_select' ) );
	this.m_player.UpdateRepresentation( value, true );
}

CDASHPlayerUI.prototype.CloseCaptionsPanel = function( bRestoreElementFocus, bSaveChanges )
{
	if ( bSaveChanges )
	{
		this.SaveClosedCaptionLanguage();
		this.SaveClosedCaptionOptions();
	}
	else
	{
		this.LoadClosedCaptionLanguage();
		this.LoadClosedCaptionOptions();
	}

	this.m_elClosedCaptionsPanel.hide();
	this.m_eFocusedUIPanel = CDASHPlayerUI.eUIPanelMain;

	if ( bRestoreElementFocus )
		this.SwitchElementFocus( CDASHPlayerUI.CLOSED_CAPTION_INDEX );

	this.ShowMainPanelUI();
}

CDASHPlayerUI.prototype.SwitchElementFocus = function ( newIndex )
{
	if ( !this.BInTenFoot() )
		return;

	$J( "div[data-index='" + this.m_nFocusedUIElementIndex + "']" ).removeClass( 'tenfoot_focus' );
	this.m_nFocusedUIElementIndex = newIndex;
	$J( "div[data-index='" + this.m_nFocusedUIElementIndex + "']" ).addClass( 'tenfoot_focus' );

}

CDASHPlayerUI.prototype.ShowMainPanelUI = function()
{
	if ( !this.BInTenFoot() )
		return;

	if ( $J( '.tenfoot_dash_overlay' ).is( ':hidden' ) )
	{
		this.Show();
		this.Hide();

		this.SwitchElementFocus( this.m_nFocusedUIElementIndex );

		if ( this.m_nFocusedUIElementIndex == CDASHPlayerUI.VOLUME_CONTAINER_INDEX )
			this.ShowVolumeBar();
		else if ( this.m_nFocusedUIElementIndex == CDASHPlayerUI.PROGRESS_BAR_INDEX )
			this.SetProgressBarPreview( -1 );

		return true;
	}

	// always show main UI
	this.Show();
	this.Hide();

	return false;
}

CDASHPlayerUI.prototype.NavigateUIOnKeyDown = function ( nKeyDirection )
{
	if ( !this.BInTenFoot() )
		return;

	// handle switch through the map of UI elements
	if ( this.m_eFocusedUIPanel == CDASHPlayerUI.eUIPanelMain )
	{
		if ( this.ShowMainPanelUI() )
			return;

		// remove the previous "focus" state
		$J( "div[data-index='" + this.m_nFocusedUIElementIndex + "']" ).removeClass( 'tenfoot_focus' );

		// volume bar
		if ( this.m_nFocusedUIElementIndex == CDASHPlayerUI.VOLUME_CONTAINER_INDEX )
			this.HideVolumeBar();
		else if ( this.m_nFocusedUIElementIndex == CDASHPlayerUI.PROGRESS_BAR_INDEX )
			this.OnProgressLeave();

		// handle captions not being there
		var nTopRowIndex = CDASHPlayerUI.CLOSED_CAPTION_INDEX;
		if ( $J( '.customize_captions' ).css( 'visibility' ) == 'hidden' )
			nTopRowIndex++;

		switch ( nKeyDirection )
		{
			case CDASHPlayerUI.LEFT_PAD_LEFT:
				if ( this.m_nFocusedUIElementIndex == nTopRowIndex )
					this.m_nFocusedUIElementIndex = CDASHPlayerUI.PROGRESS_BAR_INDEX;
				else if ( this.m_nFocusedUIElementIndex == CDASHPlayerUI.PROGRESS_BAR_INDEX )
					this.m_nFocusedUIElementIndex = CDASHPlayerUI.SKIP_FORWARD_INDEX;
				else if ( this.m_nFocusedUIElementIndex != CDASHPlayerUI.SKIP_BACK_INDEX )
					this.m_nFocusedUIElementIndex--;
				break;

			case CDASHPlayerUI.LEFT_PAD_RIGHT:
				if ( this.m_nFocusedUIElementIndex == CDASHPlayerUI.SKIP_FORWARD_INDEX )
					this.m_nFocusedUIElementIndex = CDASHPlayerUI.PROGRESS_BAR_INDEX;
				else if ( this.m_nFocusedUIElementIndex == CDASHPlayerUI.PROGRESS_BAR_INDEX )
					this.m_nFocusedUIElementIndex = nTopRowIndex;
				else if ( this.m_nFocusedUIElementIndex != CDASHPlayerUI.SETTINGS_INDEX )
					this.m_nFocusedUIElementIndex++;
				break;

			case CDASHPlayerUI.LEFT_PAD_UP:
				if ( this.m_nFocusedUIElementIndex < CDASHPlayerUI.PROGRESS_BAR_INDEX )
					this.m_nFocusedUIElementIndex = CDASHPlayerUI.PROGRESS_BAR_INDEX;
				else if ( this.m_nFocusedUIElementIndex < nTopRowIndex )
					this.m_nFocusedUIElementIndex = nTopRowIndex;
				break;

			case CDASHPlayerUI.LEFT_PAD_DOWN:
				if ( this.m_nFocusedUIElementIndex >= nTopRowIndex )
					this.m_nFocusedUIElementIndex = CDASHPlayerUI.PROGRESS_BAR_INDEX;
				else if ( this.m_nFocusedUIElementIndex >= CDASHPlayerUI.PROGRESS_BAR_INDEX )
					this.m_nFocusedUIElementIndex = CDASHPlayerUI.PLAY_PAUSE_INDEX;
				break;

			default:
				break;
		}

		// switch and show "focus" on that element
		$J( "div[data-index='" + this.m_nFocusedUIElementIndex + "']" ).addClass( 'tenfoot_focus' );

		// volume bar
		if ( this.m_nFocusedUIElementIndex == CDASHPlayerUI.VOLUME_CONTAINER_INDEX )
			this.ShowVolumeBar();
		else if ( this.m_nFocusedUIElementIndex == CDASHPlayerUI.PROGRESS_BAR_INDEX )
			this.SetProgressBarPreview( -1 );

	}
	else if ( this.m_eFocusedUIPanel == CDASHPlayerUI.eUIPanelSettings )
	{
		// remove the previous "focus" state
		var selElement = $J( "div[data-index='" + this.m_nFocusedUIElementIndex + "']" );
		selElement.removeClass( 'tenfoot_focus' );

		switch ( nKeyDirection )
		{
			case CDASHPlayerUI.LEFT_PAD_LEFT:
				this.ClickUIElementOnKeyDown( $J( '.left_arrow', selElement ) );
				break;

			case CDASHPlayerUI.LEFT_PAD_RIGHT:
				this.ClickUIElementOnKeyDown( $J( '.right_arrow', selElement ) );
				break;

			case CDASHPlayerUI.LEFT_PAD_UP:
				this.m_nFocusedUIElementIndex = Math.min( Math.max( --this.m_nFocusedUIElementIndex, CDASHPlayerUI.SETTINGS_PANEL_FIRST_INDEX ), CDASHPlayerUI.SETTINGS_PANEL_LAST_INDEX );
				break;

			case CDASHPlayerUI.LEFT_PAD_DOWN:
				this.m_nFocusedUIElementIndex = Math.min( Math.max( ++this.m_nFocusedUIElementIndex, CDASHPlayerUI.SETTINGS_PANEL_FIRST_INDEX ), CDASHPlayerUI.SETTINGS_PANEL_LAST_INDEX );
				break;

			case CDASHPlayerUI.NAVIGATE_INIT:
				if ( this.m_nFocusedUIElementIndex < CDASHPlayerUI.SETTINGS_PANEL_FIRST_INDEX )
					this.m_nFocusedUIElementIndex = CDASHPlayerUI.SETTINGS_PANEL_FIRST_INDEX;
				break;

			default:
				break;
		}

		// switch and show "focus" on that element
		selElement = $J( "div[data-index='" + this.m_nFocusedUIElementIndex + "']" );
		selElement.addClass( 'tenfoot_focus' );

		this.ScrollToPanelSelectItem( nKeyDirection, $J( '.tenfoot_settings_panel' ), CDASHPlayerUI.SETTINGS_PANEL_FIRST_INDEX, selElement.parent().height() );

	}
	else if ( this.m_eFocusedUIPanel == CDASHPlayerUI.eUIPanelCaptions )
	{
		// remove the previous "focus" state
		var selElement = $J( "div[data-index='" + this.m_nFocusedUIElementIndex + "']" );
		selElement.removeClass( 'tenfoot_focus' );

		switch ( nKeyDirection )
		{
			case CDASHPlayerUI.LEFT_PAD_LEFT:
				this.ClickUIElementOnKeyDown( $J( '.left_arrow', selElement ) );
				break;

			case CDASHPlayerUI.LEFT_PAD_RIGHT:
				this.ClickUIElementOnKeyDown( $J( '.right_arrow', selElement ) );
				break;

			case CDASHPlayerUI.LEFT_PAD_UP:
				this.m_nFocusedUIElementIndex = Math.min( Math.max( --this.m_nFocusedUIElementIndex, CDASHPlayerUI.CAPTIONS_PANEL_FIRST_INDEX ), CDASHPlayerUI.CAPTIONS_PANEL_LAST_INDEX );
				break;

			case CDASHPlayerUI.LEFT_PAD_DOWN:
				this.m_nFocusedUIElementIndex = Math.min( Math.max( ++this.m_nFocusedUIElementIndex, CDASHPlayerUI.CAPTIONS_PANEL_FIRST_INDEX ), CDASHPlayerUI.CAPTIONS_PANEL_LAST_INDEX );
				break;

			case CDASHPlayerUI.NAVIGATE_INIT:
				if ( this.m_nFocusedUIElementIndex < CDASHPlayerUI.CAPTIONS_PANEL_FIRST_INDEX )
					this.m_nFocusedUIElementIndex = CDASHPlayerUI.CAPTIONS_PANEL_FIRST_INDEX;
				break;

			default:
				break;
		}

		// switch and show "focus" on that element
		selElement = $J( "div[data-index='" + this.m_nFocusedUIElementIndex + "']" );
		selElement.addClass( 'tenfoot_focus' );

		this.ScrollToPanelSelectItem( nKeyDirection, $J( '.tenfoot_dash_closed_captions_customization' ), CDASHPlayerUI.CAPTIONS_PANEL_FIRST_INDEX, selElement.parent().height() );
	}
}

CDASHPlayerUI.prototype.ScrollToPanelSelectItem = function( nKeyDirection, elScrollWrapper, nFirstIndex, nScrollAmount )
{
	if ( !this.BInTenFoot() )
		return;

	if ( nKeyDirection == CDASHPlayerUI.LEFT_PAD_DOWN )
	{
		// if the next element is outside of the page, scroll some amount
		var selectIndex = this.m_nFocusedUIElementIndex - nFirstIndex + 1;
		var windowBottom = elScrollWrapper.scrollTop() + elScrollWrapper.height();
		if ( windowBottom < selectIndex * nScrollAmount )
			elScrollWrapper.scrollTop( elScrollWrapper.scrollTop() + nScrollAmount );
	}
	else if ( nKeyDirection == CDASHPlayerUI.LEFT_PAD_UP )
	{
		var selectIndex = this.m_nFocusedUIElementIndex - nFirstIndex;
		var windowTop = elScrollWrapper.scrollTop();
		if ( windowTop > selectIndex * nScrollAmount )
			elScrollWrapper.scrollTop( elScrollWrapper.scrollTop() - nScrollAmount );
	}
	else if ( nKeyDirection == CDASHPlayerUI.NAVIGATE_INIT )
	{
		elScrollWrapper.scrollTop( 0 );
	}
}

CDASHPlayerUI.prototype.ScrubUIOnKeyDown = function ( nKeyDirection )
{
	if ( !this.BInTenFoot() )
		return;

	if ( this.ShowMainPanelUI() )
		return;

	// handle switch through the map of UI elements
	switch ( nKeyDirection )
	{
		case CDASHPlayerUI.RIGHT_PAD_RIGHT:
			if ( this.m_nFocusedUIElementIndex == CDASHPlayerUI.PROGRESS_BAR_INDEX )
				this.IncrementProgressBarPreview(4);
			break;

		case CDASHPlayerUI.RIGHT_PAD_LEFT:
			if ( this.m_nFocusedUIElementIndex == CDASHPlayerUI.PROGRESS_BAR_INDEX )
				this.DecrementProgressBarPreview(4);
			break;

		case CDASHPlayerUI.RIGHT_PAD_UP:
			if ( this.m_nFocusedUIElementIndex == CDASHPlayerUI.VOLUME_CONTAINER_INDEX )
				this.IncrementVolume(4);
			break;

		case CDASHPlayerUI.RIGHT_PAD_DOWN:
			if ( this.m_nFocusedUIElementIndex == CDASHPlayerUI.VOLUME_CONTAINER_INDEX )
				this.DecrementVolume(4);

		default:
			break;
	}

}

CDASHPlayerUI.prototype.OnSkipTime = function( nTimeDelta )
{
	var nSeekedTime = this.m_player.SkipTime( nTimeDelta );
	this.m_bPlayingLiveEdge = this.m_player.BIsLiveEdge( nSeekedTime );
}

CDASHPlayerUI.prototype.OnMouseWheelTenFoot = function ( e )
{
	if ( !this.BInTenFoot() )
		return;

	if ( this.ShowMainPanelUI() )
		return;

	if ( this.m_nFocusedUIElementIndex == CDASHPlayerUI.VOLUME_CONTAINER_INDEX )
	{
		if ( e.originalEvent.wheelDelta > 0 )
			this.IncrementVolume(1);
		else
			this.DecrementVolume(1);
	}
	else if ( this.m_nFocusedUIElementIndex == CDASHPlayerUI.PROGRESS_BAR_INDEX )
	{
		if ( e.originalEvent.wheelDelta > 0 )
			this.IncrementProgressBarPreview(1);
		else
			this.DecrementProgressBarPreview(1);
	}

}

CDASHPlayerUI.prototype.ToggleFullscreen = function()
{
	var elContainer = this.m_elOverlay[0].parentNode;
	var bFullscreen = document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement;

	if( !bFullscreen )
	{
		if( elContainer.requestFullscreen )
			elContainer.requestFullscreen();
		else if( elContainer.webkitRequestFullScreen && this.m_bIsSafariBrowser )
			elContainer.webkitRequestFullScreen();
		else if( elContainer.webkitRequestFullScreen )
			elContainer.webkitRequestFullScreen( Element.ALLOW_KEYBOARD_INPUT );
		else if( elContainer.mozRequestFullScreen )
			elContainer.mozRequestFullScreen();
		else if( elContainer.msRequestFullscreen )
			elContainer.msRequestFullscreen();

		$J( elContainer ).addClass( 'fullscreen' );
	}
	else
	{
		if( document.cancelFullscreen )
			document.cancelFullscreen();
		else if( document.webkitCancelFullScreen )
			document.webkitCancelFullScreen();
		else if( document.mozCancelFullScreen )
			document.mozCancelFullScreen();
		else if( document.msExitFullscreen )
			document.msExitFullscreen();

		$J( elContainer ).removeClass( 'fullscreen' );
	}
}

CDASHPlayerUI.prototype.OnFullScreenChange = function()
{
	var _ui = this;
	var bFullscreen = document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement;
	if ( bFullscreen )
	{
		$J( document ).on( 'keydown', function( e )
		{
			var bFullscreen = document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement;
			if ( e.keyCode == 27 && bFullscreen )
				_ui.ToggleFullscreen();
		});
	}
	else
	{
		$J( document ).off( 'keydown' );
		$J( this.m_elContainer ).removeClass( 'fullscreen' );
	}
}

CDASHPlayerUI.prototype.OnProgressClick = function( e, ele )
{
	var elVideoPlayer = this.m_player.m_elVideoPlayer;
	var parentOffset = $J(ele).offset();
	var barWidth = $J(ele).innerWidth();
	var relX = e.pageX - parentOffset.left;
	var nPercent =  relX / barWidth;

	var rgData = this.GetTimelineData();
	var nSeekTo = ((rgData.nTimeEnd - rgData.nTimeStart) * nPercent) + rgData.nTimeStart;

	if ( this.m_player.BIsLiveContent() )
	{
		nSeekTo = Math.min( nSeekTo, rgData.nBufferedEnd );
	}

	if ( this.m_player.BIsLiveContent() && ( rgData.nBufferedEnd - nSeekTo < CDASHPlayer.TRACK_BUFFER_MS / 1000 * 2 ) )
	{
		this.JumpToLive();
	}
	else
	{
		this.m_player.SeekTo( nSeekTo );
		this.m_bPlayingLiveEdge = false;
		this.OnTimeUpdatePlayer();
	}
}

CDASHPlayerUI.prototype.OnProgressHover = function( e, ele )
{
	if ( this.m_bHidden )
		return;

	var parentOffset = $J( ele ).offset();
	var barWidth = $J( ele ).innerWidth();

	var relX = Math.min( e.pageX - parentOffset.left, $J( ele ).width() );
	var fPercent =  relX / barWidth;

	this.SetProgressBarPreview( fPercent );

}

CDASHPlayerUI.prototype.OnProgressLeave = function( e, ele )
{
	$J( '.progress_time_info' ).css( 'visibility', 'hidden' );
	$J( '.progress_time_bar' ).css( 'visibility', 'hidden' );
}

CDASHPlayerUI.prototype.SetProgressBarPreview = function( fPercent )
{
	var rgData = this.GetTimelineData();

	// if -1 set preview to the current time location
	if ( fPercent == -1 )
		fPercent = this.m_player.GetPlaybackTimeInSeconds() / rgData.nTimeEnd;

	fPercent = Math.min( Math.max( fPercent, 0 ), 1 );

	var barWidth = $J( '.progress_bar_container' ).innerWidth();
	var relX = fPercent * barWidth;

	var nSeekTo = ((rgData.nTimeEnd - rgData.nTimeStart) * fPercent) + rgData.nTimeStart;
	var strTime = "";

	if ( this.m_player.BIsLiveContent() )
	{
		nSeekTo = rgData.nBufferedEnd - nSeekTo;
		if ( nSeekTo < CDASHPlayer.TRACK_BUFFER_MS / 1000 * 2 )
			strTime = 'Live';
		else
			strTime = '-' + SecondsToTime( nSeekTo );
	}
	else
	{
		strTime = SecondsToTime( Math.min( Math.max( nSeekTo, 0 ), rgData.nTimeEnd ) );
	}

	if ( !this.BInTenFoot() )
	{
		var timeWidth = $J('.progress_time_info').outerWidth();
		var nTimeInfoLeft = Math.min( Math.max( relX - timeWidth / 2, -2 ), barWidth - timeWidth - 4 );
		$J('.progress_time_info').css( 'left', nTimeInfoLeft );
	}

	$J( '.progress_time_info .time_display' ).text( strTime );
	$J( '.progress_time_bar' ).css( 'left', relX );

	$J('.progress_time_info').css('visibility', 'visible');
	$J('.progress_time_bar').css('visibility', 'visible');

	// if we have thumbnails to show
	if (this.m_ThumbnailInfo && this.m_ThumbnailInfo.template)
	{
		// find the sprite sheet, the image in the sprite sheet and render it
		// don't try to get a thumbnail beyond the length of the video
		var nLastThumbnailTime = Math.floor(( rgData.nTimeEnd - this.m_ThumbnailInfo.period ) / this.m_ThumbnailInfo.period) * this.m_ThumbnailInfo.period;
		nSeekTo = Math.min(nSeekTo, nLastThumbnailTime);

		var nThumbnailSheetSeconds = Math.floor(nSeekTo / this.m_ThumbnailInfo.sheetSeconds) * this.m_ThumbnailInfo.sheetSeconds;
		var nThumbnailIndexInSheet = Math.floor(( nSeekTo - nThumbnailSheetSeconds ) / this.m_ThumbnailInfo.period);
		var nThumbnailWidth = $J('.progress_time_info.thumbnails').innerWidth();
		var strThumbnailSheetURL = this.m_ThumbnailInfo.template.replace('$Seconds$', nThumbnailSheetSeconds);
		var nXPosInSheet = -1 * nThumbnailWidth * nThumbnailIndexInSheet;

		$J('.progress_time_info').css('background-image', 'url(\'' + strThumbnailSheetURL + '\')');
		$J('.progress_time_info').css('background-position', nXPosInSheet + 'px 0px');

	}

	this.m_fLastProgressBarScrubPerc = fPercent;
}

CDASHPlayerUI.prototype.IncrementProgressBarPreview = function( nAccelerate )
{
	var time = CDASHPlayerUI.SKIP_SHORT_TIME_SECS * nAccelerate / this.GetTimelineData().nTimeEnd;
	this.SetProgressBarPreview( this.m_fLastProgressBarScrubPerc + time );
}

CDASHPlayerUI.prototype.DecrementProgressBarPreview = function( nAccelerate )
{
	var time = CDASHPlayerUI.SKIP_SHORT_TIME_SECS * nAccelerate / this.GetTimelineData().nTimeEnd;
	this.SetProgressBarPreview( this.m_fLastProgressBarScrubPerc - time );
}

CDASHPlayerUI.prototype.InitClosedCaptionOptionPanel = function()
{
	if ( this.BInTenFoot() )
		return;

	var _ui = this;
	this.m_elContainer.append( this.m_elClosedCaptionsPanel );

	// Closed Captions languages
	var rgRepresentation = this.m_player.GetClosedCaptionsArray();

	// show selector if there is a closed caption available
	if ( rgRepresentation.length > 0 )
	{
		$J( '.representation_captions' ).show();
		for (var r = 0; r < rgRepresentation.length; r++)
		{
			if ( rgRepresentation[r].code.toUpperCase() != CDASHPlayerUI.CLOSED_CAPTIONS_NONE.toUpperCase() )
			{
				var strClosedCaptionValue = '';
				var strClosedCaptionLabel = '';
				if ( rgRepresentation[r].roles[0] == CVTTCaptionLoader.s_Caption )
				{
					strClosedCaptionValue = CDASHPlayerUI.CLOSED_CAPTIONS_SELECT_EXT;
					strClosedCaptionLabel = ' (CC)';
				}

				$J('#representation_select_captions').append('<option value="' + rgRepresentation[r].code + strClosedCaptionValue + '">' + rgRepresentation[r].display + strClosedCaptionLabel + "</option>");
			}
		}

		$J( '#representation_select_captions' ).on( 'change', function()
		{
			_ui.SwitchClosedCaptionLanguageInPlayer( this.value );
		} );

		// customize captions link and action
		$J( '.customize_captions' ).on( 'click', function()
		{
			_ui.m_elSettingsPanel.hide();
			_ui.ShowClosedCaptionsPanel();
		} );

	}
	else
	{
		$J( '.customize_captions' ).css( 'display', 'none' );
	}

	// Steam/Chrome options we present, Safari captions options are controlled at the OS level, IE in the browser Internet Options
	if ( this.m_bIsSafariBrowser )
	{
		this.m_elClosedCaptionsPanel.append('<div class="cc_style_instructions"><p>For Safari</p><br/>\n                                                 <ol>\n                                                     <li>From the Apple Menu, select System Preferences</li>\n                                                     <li>Click Accessibility</li>\n                                                     <li>Click Captions</li>\n                                                     <li>Select a pre-defined style or create a custom style by clicking +</li>\n                                                 </ol></div>');
	}
	else if ( this.m_bIsInternetExplorer )
	{
		this.m_elClosedCaptionsPanel.append('<div class="cc_style_instructions"><p>For Internet Explorer</p><br/>\n                                                        <ol>\n                                                           <li>From the Tools Menu, select Internet options</li>\n                                                           <li>Click Accessibility</li>\n                                                           <li>Click Captions</li>\n                                                           <li>Turn on Ignore default caption fonts and colors</li>\n                                                           <li>Customize the font, font style and color as desired</li>\n                                                           <li>Click OK, OK, OK</li>\n                                                           <li>Restart the movie for the changes to take effect</li>\n                                                        </ol></div>');
	}
	else
	{
		$J( '.cc_select_wrapper > select' ).each( function ( index, selectid )
		{
			$J( selectid ).on(' change', function()
			{
				CDASHPlayerUI.ChangeClosedCaptionDisplay( this.id.replace("cc-",""), this.value );
			} );

		});

		this.LoadClosedCaptionLanguage();
		this.LoadClosedCaptionOptions();
	}

	$J( '.panel_cancel' ).on('click', function()
	{
		_ui.LoadClosedCaptionLanguage();
		_ui.LoadClosedCaptionOptions();
		_ui.m_elClosedCaptionsPanel.hide();
		this.m_eFocusedUIPanel = CDASHPlayerUI.eUIPanelMain;
	} );

	$J( '.panel_done' ).on('click', function()
	{
		_ui.SaveClosedCaptionLanguage();
		_ui.SaveClosedCaptionOptions();
		_ui.m_elClosedCaptionsPanel.hide();
		this.m_eFocusedUIPanel = CDASHPlayerUI.eUIPanelMain;
	} );
}

CDASHPlayerUI.prototype.InitClosedCaptionOptionPanelTenFoot = function()
{
	if ( !this.BInTenFoot() )
		return;

	var _ui = this;
	this.m_elContainer.append( this.m_elClosedCaptionsPanel );

	// Closed Captions Language list
	var rgRepresentation = this.m_player.GetClosedCaptionsArray();
	if ( rgRepresentation.length > 0 )
	{
		for (var r = 0; r < rgRepresentation.length; r++)
		{
			if ( rgRepresentation[r].code.toUpperCase() != CDASHPlayerUI.CLOSED_CAPTIONS_NONE.toUpperCase() )
			{
				var strClosedCaptionValue = '';
				var strClosedCaptionLabel = '';
				if ( rgRepresentation[r].roles[0] == CVTTCaptionLoader.s_Caption )
				{
					strClosedCaptionValue = CDASHPlayerUI.CLOSED_CAPTIONS_SELECT_EXT;
					strClosedCaptionLabel = ' (CC)';
				}

				$J('#representation_captions_language #representation_select').append('<div data-value="' + rgRepresentation[r].code + strClosedCaptionValue + '" class="notselected">' + rgRepresentation[r].display + strClosedCaptionLabel + "</div>");
			}
		}

		$J( '#representation_captions_language .panel_select .left_arrow' ).on( 'click', function() {
			var elSelect = $J( '#representation_captions_language #representation_select' );
			var value = _ui.PanelSelectShift( elSelect, false );
			_ui.SwitchClosedCaptionLanguageInPlayer( value );
		} );

		$J( '#representation_captions_language .panel_select .right_arrow' ).on( 'click', function() {
			var elSelect = $J( '#representation_captions_language #representation_select' );
			var value = _ui.PanelSelectShift( elSelect, true );
			_ui.SwitchClosedCaptionLanguageInPlayer( value );
		} );

		$J( '#representation_video' ).show();

		// CC button event
		$J( '.customize_captions' ).on( 'click', function()
		{
			_ui.Hide(0);
			_ui.ShowClosedCaptionsPanel();
			_ui.SwitchElementFocus( CDASHPlayerUI.NO_ELEMENT_INDEX );
		} );

		$J( '#buttonA', this.m_elClosedCaptionsPanel ).on( 'click', function ( e ) { _ui.CloseCaptionsPanel( false, true ); } );
		$J( '#buttonB', this.m_elClosedCaptionsPanel ).on( 'click', function ( e ) { _ui.CloseCaptionsPanel( false, false ); } );

	}
	else
	{
		$J( '.customize_captions' ).css( 'visibility', 'hidden' );
	}


	// caption options
	$J( '#captions_options_wrapper > .panel_select_wrapper' ).each( function ( index, selectid )
	{
		var elPanelSelect = $J( selectid ).find( '.panel_select' );

		elPanelSelect.find( '.left_arrow' ).on( 'click', function() {
			var elSelect = $J( selectid ).find( '#representation_select' );
			var value = _ui.PanelSelectShift( elSelect, false );
			CDASHPlayerUI.ChangeClosedCaptionDisplay( selectid.id.replace("cc-",""), value );
		} );

		elPanelSelect.find( '.right_arrow' ).on( 'click', function() {
			var elSelect = $J( selectid ).find( '#representation_select' );
			var value = _ui.PanelSelectShift( elSelect, true );
			CDASHPlayerUI.ChangeClosedCaptionDisplay( selectid.id.replace("cc-",""), value );
		} );

	});

	this.LoadClosedCaptionLanguage();
	this.LoadClosedCaptionOptions();

}

CDASHPlayerUI.prototype.SetClosedCaptionLanguageInUI = function( strCode )
{
	if ( this.BInTenFoot() )
	{
		this.PanelSelectByValue( $J( '#representation_captions_language', this.m_elClosedCaptionsPanel ), strCode );
	}
	else
	{
		var uiCaptionLanguage = $J("#representation_select_captions");
		if ( uiCaptionLanguage.length )
			$J( '#representation_select_captions' ).val( strCode );
	}
}

CDASHPlayerUI.GetSavedClosedCaptionLanguage = function( strUniqueSettingsID )
{
	return WebStorage.GetLocal( "closed_caption_language_setting_" + strUniqueSettingsID.toString() );
}

CDASHPlayerUI.prototype.ShowClosedCaptionsPanel = function()
{
	if ( this.m_elClosedCaptionsPanel.is( ':hidden' ) )
	{
		this.LoadClosedCaptionLanguage();
		this.LoadClosedCaptionOptions();
		this.m_eFocusedUIPanel = CDASHPlayerUI.eUIPanelCaptions;
		this.m_elClosedCaptionsPanel.show();
		this.NavigateUIOnKeyDown( CDASHPlayerUI.NAVIGATE_INIT );
	}
	else
	{
		// desktop click of CC while Panel is open
		$J( '.panel_cancel' ).click();
		this.m_elClosedCaptionsPanel.hide();
	}
}

CDASHPlayerUI.prototype.SwitchClosedCaptionLanguageInPlayer = function( strCaptionCode )
{
	var ccRole = endsWith( strCaptionCode, CDASHPlayerUI.CLOSED_CAPTIONS_SELECT_EXT ) ? CVTTCaptionLoader.s_Caption : CVTTCaptionLoader.s_Subtitle;
	this.m_player.UpdateClosedCaption( strCaptionCode.replace( CDASHPlayerUI.CLOSED_CAPTIONS_SELECT_EXT, '' ), ccRole );
}

CDASHPlayerUI.ChangeClosedCaptionDisplay = function( cueKey, cueValue )
{
	if ( window.VTTCue )
		document.styleSheets[document.styleSheets.length-1].addRule( '::cue', cueKey + ":" + cueValue );
}

CDASHPlayerUI.prototype.LoadClosedCaptionLanguage = function()
{
	var strCode = WebStorage.GetLocal( "closed_caption_language_setting_" + this.m_strUniqueSettingsID.toString() );
	if ( strCode )
	{
		this.SetClosedCaptionLanguageInUI( strCode );
		this.SwitchClosedCaptionLanguageInPlayer( strCode );
	}
}

CDASHPlayerUI.prototype.SaveClosedCaptionLanguage = function()
{
	var strCaptionCode = '';

	if ( this.BInTenFoot() )
		strCaptionCode = $J( '#representation_captions_language #representation_select .selected' ).attr( 'data-value' );
	else
		strCaptionCode = $J( '#representation_select_captions' ).find( ":selected" ).val();

	WebStorage.SetLocal( "closed_caption_language_setting_" + this.m_strUniqueSettingsID, strCaptionCode );
}

CDASHPlayerUI.prototype.LoadClosedCaptionOptions = function()
{
	if ( this.BInTenFoot() )
	{
		var _ui = this;

		$J( '#captions_options_wrapper > .panel_select_wrapper', this.m_elClosedCaptionsPanel ).each( function ( index, element )
		{
			var value = WebStorage.GetLocal( element.id );
			if ( value )
			{
				_ui.PanelSelectByValue( $J( element ), value );
				CDASHPlayerUI.ChangeClosedCaptionDisplay( element.id.replace("cc-",""), value );
			}
			else
			{
				// save the default value so we have something to cancel back to
				var elementId = '#' + element.id + ' #representation_select .selected';
				WebStorage.SetLocal( element.id, $J( elementId ).attr( 'data-value' ) );
			}
		});
	}
	else
	{
		$J( '.cc_select_wrapper select', this.m_elClosedCaptionsPanel ).each( function ( index, element )
		{
			var value = WebStorage.GetLocal( element.id );
			if ( value )
			{
				$J( '#' + element.id ).val( value ).change();
			}
			else
			{
				// save the default value so we have something to cancel back to
				var elementId = '#' + element.id + ' option:selected';
				WebStorage.SetLocal( element.id, $J( elementId ).val() );
			}
		});
	}
}

CDASHPlayerUI.prototype.SaveClosedCaptionOptions = function()
{
	if ( this.BInTenFoot() )
	{
		strCaptionCode = $J( '#representation_captions_language #representation_select .selected' ).attr( 'data-value' );

		$J( '#captions_options_wrapper > .panel_select_wrapper', this.m_elClosedCaptionsPanel ).each( function ( index, element )
		{
			var elementId = '#' + element.id + ' #representation_select .selected';
			WebStorage.SetLocal( element.id, $J( elementId ).attr( 'data-value' ) );
		});
	}
	else
	{
		$J( 'select', this.m_elClosedCaptionsPanel ).each( function ( index, element )
		{
			var elementId = '#' + element.id + ' option:selected';
			WebStorage.SetLocal( element.id, $J( elementId ).val() );
		});
	}
}

CDASHPlayerUI.prototype.DisplayNotification = function( strNotification, nDisplayTimeMS )
{
	// hide any active notification
	if ( this.m_elActiveNotification )
	{
		this.m_elActiveNotification.remove();
		this.m_elActiveNotification = null;
	}

	if ( this.m_schNotificationTimeout )
	{
		clearTimeout( this.m_schNotificationTimeout );
		this.m_schNotificationTimeout = null;
	}

	var elNotification = $J( '<div class="playback_notification"><span></span></div>' );
	elNotification.find( 'span').text( strNotification );
	this.m_elContainer.append( elNotification );
	this.m_elActiveNotification = elNotification;

		FlushStyleChanges( elNotification );
	elNotification.addClass( 'show_notification' );

	var _ui = this;
	this.m_schNotificationTimeout = setTimeout( function() { _ui.CloseNotification(); }, nDisplayTimeMS );
}

CDASHPlayerUI.prototype.CloseNotification = function()
{
	this.m_schNotificationTimeout = null;
	if ( !this.m_elActiveNotification )
		return;

	var _ui = this;
	var elNotification = this.m_elActiveNotification;
	elNotification.one( 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function()
	{
		if ( _ui.m_elActiveNotification == elNotification )
			_ui.m_elActiveNotification = null;

		elNotification.remove();
	});

	elNotification.addClass( 'close_notification' );
}

function SecondsToTime( seconds )
{
	var hours = Math.floor( seconds / (60 * 60) );
	var minutes = Math.floor( seconds / 60 ) % 60;
	var seconds = Math.floor( seconds ) % 60;

	if( seconds < 10 )
		seconds = "0" + seconds;

	if ( minutes < 10 && hours > 0 )
		minutes = "0" + minutes;

	var out = (hours > 0 ) ? hours + ":" : "";
	return out + minutes + ":" + seconds;
}

function TimetoSeconds( strTime )
{
	// expecting 11:11:11.111
	var rgTimeComponents = strTime.split( ":"),
	compLength = rgTimeComponents.length - 1;

	var seconds = parseInt( rgTimeComponents[compLength-1] ) * 60 + parseFloat( rgTimeComponents[compLength] );

	if ( compLength === 2 )
	{
		seconds += parseInt( rgTimeComponents[0] ) * 3600;
	}

	return seconds;
}

function endsWith( str, suffix ) {
	return ( str.indexOf( suffix, str.length - suffix.length ) !== -1 );
}

//////////////////////////////////////////////////////////////////////////
// CVTTCaptionLoader for Parsing and Managing VTT Closed Caption Files
//////////////////////////////////////////////////////////////////////////
function CVTTCaptionLoader( elVideoPlayer, closedCaptions )
{
	this.m_elVideoPlayer = elVideoPlayer;
	this.m_rgClosedCaptions = closedCaptions;
	this.m_xhrDownloadVTT = null;
}

CVTTCaptionLoader.s_TrackOff = "disabled";
CVTTCaptionLoader.s_TrackHidden = "hidden";
CVTTCaptionLoader.s_TrackShowing = "showing";
CVTTCaptionLoader.s_Caption = "caption";
CVTTCaptionLoader.s_Subtitle = "subtitle";
CVTTCaptionLoader.s_DefaultLinePosition = 95;

CVTTCaptionLoader.prototype.Close = function()
{
	// stop any downloads
	if ( this.m_xhrDownloadVTT )
	{
		this.m_xhrDownloadVTT.abort();
		this.m_xhrDownloadVTT = null;
	}

	// clean up cues and turn off tracks
	for (var i = this.m_elVideoPlayer.textTracks.length - 1; i >= 0; i--)
	{
		if ( this.m_elVideoPlayer.textTracks[i].cues )
		{
			for (var c = this.m_elVideoPlayer.textTracks[i].cues.length - 1; c >=0; c--)
			{
				this.m_elVideoPlayer.textTracks[i].removeCue(this.m_elVideoPlayer.textTracks[i].cues[c]);
			}
		}

		this.m_elVideoPlayer.textTracks[i].mode = CVTTCaptionLoader.s_TrackOff;
	}

	this.m_rgClosedCaptions = [];
	this.m_elVideoPlayer = null;
}

CVTTCaptionLoader.prototype.SetAllTextTracksDisplay = function( trackState )
{
	for (var i = 0; i < this.m_elVideoPlayer.textTracks.length; i++ )
	{
		this.m_elVideoPlayer.textTracks[i].mode = trackState;
	}
}

CVTTCaptionLoader.prototype.GetTextTrackByCode = function( closedCaptionCode, role )
{
	for (var i = 0; i < this.m_elVideoPlayer.textTracks.length; i++ )
	{
		if ( this.m_elVideoPlayer.textTracks[i].label == closedCaptionCode && ( this.m_elVideoPlayer.textTracks[i].kind + 's' ) == role )
			return this.m_elVideoPlayer.textTracks[i];
	}

	return null;
}

CVTTCaptionLoader.prototype.GetClosedCaptionUrl = function( closedCaptionCode, role )
{
	for (var i = 0; i < this.m_rgClosedCaptions.length; i++)
	{
		if ( this.m_rgClosedCaptions[i].code == closedCaptionCode && this.m_rgClosedCaptions[i].roles[0] == role )
				return this.m_rgClosedCaptions[i].url;
	}

	return null;
}

CVTTCaptionLoader.prototype.SwitchToTextTrack = function( closedCaptionCode, role )
{
	// turn off any current track
	this.SetAllTextTracksDisplay( CVTTCaptionLoader.s_TrackOff );

	// see if the requested text track exists, if so, turn it on
	var ccTextTrack = this.GetTextTrackByCode( closedCaptionCode, role );
	if ( ccTextTrack )
	{
		// .cues seems to only be filled in now after showing the track?
		ccTextTrack.mode = CVTTCaptionLoader.s_TrackShowing;
		if ( ccTextTrack.cues && ccTextTrack.cues.length )
			return true;
		else
			ccTextTrack.mode = CVTTCaptionLoader.s_TrackHidden;
	}

	// no text track or cues are empty so go get the VTT file
	var ccUrl = this.GetClosedCaptionUrl( closedCaptionCode, role );
	if ( ccUrl )
	{
		var _loader = this;
		this.m_xhrDownloadVTT = $J.ajax(
		{
			url: ccUrl,
			type: 'GET'
		})
		.done( function( data, status, xhr )
		{
			_loader.m_xhrDownloadVTT = null;

			var newTextTrack = _loader.AddVTTCuesToNewTrack ( data, closedCaptionCode, role );
			if ( !newTextTrack )
			{
				PlayerLog( 'Failed to parse VTT file ' + ccUrl );
				return false;
			}

			// show the text track
			newTextTrack.mode = CVTTCaptionLoader.s_TrackShowing;

		})
		.fail( function()
		{
			_loader.m_xhrDownloadVTT = null;
			PlayerLog( 'Failed to download: ' + ccUrl );
		});
	}
}

CVTTCaptionLoader.prototype.AddVTTCuesToNewTrack = function( data, closedCaptionCode, role )
{
	browserCue = window.VTTCue || window.TextTrackCue;

	// there may be a track but the cues are empty, so try to get it first and then create if needed
	var newTextTrack = this.GetTextTrackByCode( closedCaptionCode, role );
	if ( !newTextTrack )
		newTextTrack = this.m_elVideoPlayer.addTextTrack( role + 's', closedCaptionCode, closedCaptionCode );

	var rgCuesFromVTT = this.ParseVTTForCues( data );
	if (rgCuesFromVTT.length == 0)
		return null;

	for (var c = 0; c < rgCuesFromVTT.length; c++)
	{
		if ( rgCuesFromVTT[c].startTime < rgCuesFromVTT[c].endTime )
		{
			var newCue = new browserCue( rgCuesFromVTT[c].startTime, rgCuesFromVTT[c].endTime, rgCuesFromVTT[c].captionText );

			// apply layout info if there is any
			for (var i = 0; i < rgCuesFromVTT[c].layout.length; i++)
			{
				var rgKeyVal = rgCuesFromVTT[c].layout[i].split(":");
				if (rgKeyVal.length == 2)
				{
					try
					{
						// skip size percentages as caption options don't scale with these
						if (rgKeyVal[0].indexOf('size') == 0 && rgKeyVal[1].indexOf('%') != -1)
							continue;

						// relative (percentage) screen attributes require snapToLines off
						if (newCue.snapToLines && rgKeyVal[1].indexOf('%') != -1)
						{
							newCue.snapToLines = false;
							rgKeyVal[1] = rgKeyVal[1].replace('%', '');
						}

						// if the value is a number, then make sure the cue knows it's a number
						if (!isNaN(parseFloat(rgKeyVal[1])))
							newCue[rgKeyVal[0]] = parseFloat(rgKeyVal[1]);
						else
							newCue[rgKeyVal[0]] = String(rgKeyVal[1]);
					}
					catch (e)
					{
						PlayerLog('VTTCue Error: ' + e.message);
						PlayerLog(rgCuesFromVTT[c]);
					}
				}
			}

			// if no line position was set, set the default
			if ( typeof newCue["line"] !== "undefined" )
			{
				newCue.snapToLines = false;
				newCue["line"] = CVTTCaptionLoader.s_DefaultLinePosition;
			}

			newTextTrack.addCue( newCue );
		}
		else
		{
			console.warn("TextTrack Cue " + c + " has a startTime (" + rgCuesFromVTT[c].startTime + ") after endTime (" + rgCuesFromVTT[c].endTime + ") and wasn't added.")
		}
	}

	return newTextTrack;
}

CVTTCaptionLoader.prototype.ParseVTTForCues = function ( cueData )
{
	var rgCues = [];

	var regExNewLine = /(?:\r\n|\r|\n)/gm,
		regExTimeSplit = /-->/,
		regExWhiteSpace = /(^[\s]+|[\s]+$)/g,
		regExInlineLayout = /{\\an[1-9]}/;

	var data = cueData.split( regExNewLine );

	for (var line = 0 ; line < data.length; line++)
	{
		var item = data[line];
		if (item.length > 0 && item !== "WEBVTT")
		{
			if (item.match( regExTimeSplit ) )
			{
				// get start and end time + optional layout information in VTT end cue section
				var cuePoints = item.split( regExTimeSplit );
				var startTime = cuePoints[0].replace(regExWhiteSpace, '');
				var rgEndCueElements = cuePoints[1].trim().split( " " );
				var endTime = rgEndCueElements[0];
				rgEndCueElements.splice( 0, 1 );
				var rgLayoutInfo = rgEndCueElements;

				// could be multiple caption text lines, get them all
				var captionLines = "";
				while ( line + 1 < data.length && data[line + 1].replace(regExWhiteSpace, "") != "")
				{
					// line break if more than one text line
					if (captionLines != "")
						captionLines += "\n";

					captionLines += data[++line];
				}

				// convert any layout info embedded in captionLines
				var rgFoundLayoutInfo = captionLines.match( regExInlineLayout );
				if ( rgFoundLayoutInfo )
				{
					captionLines = captionLines.replace( regExInlineLayout, '' );
					this.UpdateLayoutInfo( rgLayoutInfo, rgFoundLayoutInfo[0] );
				}

				var cueInfo = {
					startTime: TimetoSeconds( startTime ),
					endTime: TimetoSeconds( endTime ),
					captionText: captionLines,
					layout: rgLayoutInfo
				}

				rgCues.push( cueInfo );
			}
		}
	}

	return rgCues;
}

CVTTCaptionLoader.prototype.UpdateLayoutInfo = function( rgLayoutInfo, rgFoundLayoutInfo )
{
	// 3x3 grid, starting lower left to upper right.
	switch ( rgFoundLayoutInfo )
	{
		case "{\\an1}":
			rgLayoutInfo.push("line:" + CVTTCaptionLoader.s_DefaultLinePosition + "%");
			rgLayoutInfo.push("align:left");
			rgLayoutInfo.push("position:25%");
			break;
		case "{\\an2}":
			rgLayoutInfo.push("line:" + CVTTCaptionLoader.s_DefaultLinePosition + "%");
			rgLayoutInfo.push("align:middle");
			rgLayoutInfo.push("position:50%");
			break;
		case "{\\an3}":
			rgLayoutInfo.push("line:" + CVTTCaptionLoader.s_DefaultLinePosition + "%");
			rgLayoutInfo.push("align:right");
			rgLayoutInfo.push("position:75%");
			break;
		case "{\\an4}":
			rgLayoutInfo.push("line:50%");
			rgLayoutInfo.push("align:left");
			rgLayoutInfo.push("position:25%");
			break;
		case "{\\an5}":
			rgLayoutInfo.push("line:50%");
			rgLayoutInfo.push("align:middle");
			rgLayoutInfo.push("position:50%");
			break;
		case "{\\an6}":
			rgLayoutInfo.push("line:50%");
			rgLayoutInfo.push("align:right");
			rgLayoutInfo.push("position:75%");
			break;
		case "{\\an7}":
			rgLayoutInfo.push("line:10%");
			rgLayoutInfo.push("align:left");
			rgLayoutInfo.push("position:25%");
			break;
		case "{\\an8}":
			rgLayoutInfo.push("line:10%");
			rgLayoutInfo.push("align:middle");
			rgLayoutInfo.push("position:50%");
			break;
		case "{\\an9}":
			rgLayoutInfo.push("line:10%");
			rgLayoutInfo.push("align:right");
			rgLayoutInfo.push("position:75%");
			break;
		default:
			break;
	}
}

CVTTCaptionLoader.SortClosedCaptionsByDisplayLanguage = function(a,b) {
	if (a.display < b.display)
		return -1;
	if (a.display > b.display)
		return 1;

	return 0;
}

CVTTCaptionLoader.LanguageCountryCodes = {
    "ar-SA":{
        "displayName":"العربية (Arabic)",
        "steamLanguage":"arabic"
    },
    "bg-BG":{
        "displayName":"Български (Bulgarian)",
        "steamLanguage":"bulgarian"
    },
    "cs-CZ":{
        "displayName":"čeština (Czech)",
        "steamLanguage":"czech"
    },
    "da-DK":{
        "displayName":"Dansk (Danish)",
        "steamLanguage":"danish"
    },
    "en-US":{
        "displayName":"English",
        "steamLanguage":"english"
    },
    "fi-FI":{
        "displayName":"Suomi (Finnish)",
        "steamLanguage":"finnish"
    },
    "fr-FR":{
        "displayName":"Français (French)",
        "steamLanguage":"french"
    },
    "de-DE":{
        "displayName":"Deutsch (German)",
        "steamLanguage":"german"
    },
    "el-GR":{
        "displayName":"Ελληνικά (Greek)",
        "steamLanguage":"greek"
    },
    "es-ES":{
        "displayName":"Español (Spanish)",
        "steamLanguage":"spanish"
    },
    "es-MX":{
        "displayName":"Español-Mexicano (Spanish-Mexican)",
        "steamLanguage":"mexican"
    },
    "hu-HU":{
        "displayName":"Magyar (Hungarian)",
        "steamLanguage":"hungarian"
    },
    "it-IT":{
        "displayName":"Italiano (Italian)",
        "steamLanguage":"italian"
    },
    "ja-JP":{
        "displayName":"日本語 (Japanese)",
        "steamLanguage":"japanese"
    },
    "ko-KR":{
        "displayName":"한국어 (Korean)",
        "steamLanguage":"koreana"
    },
    "nl-NL":{
        "displayName":"Nederlands (Dutch)",
        "steamLanguage":"dutch"
    },
    "nb-NO":{
        "displayName":"Norsk (Norwegian)",
        "steamLanguage":"norwegian"
    },
    "pl-PL":{
        "displayName":"Polski (Polish)",
        "steamLanguage":"polish"
    },
    "pt-BR":{
        "displayName":"Português-Brasil (Portuguese-Brazil)",
        "steamLanguage":"brazilian"
    },
    "pt-PT":{
        "displayName":"Português (Portuguese)",
        "steamLanguage":"portuguese"
    },
    "ro-RO":{
        "displayName":"Română (Romanian)",
        "steamLanguage":"romanian"
    },
    "ru-RU":{
        "displayName":"Русский (Russian)",
        "steamLanguage":"russian"
    },
    "sv-SE":{
        "displayName":"Svenska (Swedish)",
        "steamLanguage":"swedish"
    },
    "th-TH":{
        "displayName":"ไทย (Thai)",
        "steamLanguage":"thai"
    },
    "tr-TR":{
        "displayName":"Türkçe (Turkish)",
        "steamLanguage":"turkish"
    },
    "uk-UA":{
        "displayName":"Українська (Ukrainian)",
        "steamLanguage":"ukrainian"
    },
    "vi-VN":{
        "displayName":"tiếng Việt (Vietnamese)",
        "steamLanguage":"vietnamese"
    },
    "zh-CH":{
        "displayName":"简体中文 (Simplified Chinese)",
        "steamLanguage":"schinese"
	},
    "zh-CN":{
        "displayName":"繁體中文 (Traditional Chinese)",
        "steamLanguage":"tchinese"
    },
}

//////////////////////////////////////////////////
// Stats & Server Logging
//////////////////////////////////////////////////
CDASHPlayerStats = function( elVideoPlayer, videoPlayer, viewerSteamID )
{
	this.m_elVideoPlayer = elVideoPlayer;

	this.eleOverlay = $J('<div class="dash_player_playback_stats"></div>')[0];
	$J(this.m_elVideoPlayer).parent().append( this.eleOverlay );
	this.m_videoPlayer = videoPlayer;

	this.timerTick = false;
	this.nDecodedFramesPerSecond = 0;
	this.bRunning = false;

	this.strResolution = '';
	this.strVideoBuffered = '';
	this.strAudioBuffered = '';
	this.strBandwidth = '';
	this.strBuffers = '';
	this.strGameDataBuffers = '';
	this.oLastGameDataFrame = {};
	this.fGameDataTriggerPerf = 0;

	// For Server Event Logging
	this.m_bAutoLoggingEventsToServer = ( Math.random() * 100 ) < CDASHPlayerStats.LOGGING_RATE_PERC;
	this.m_xhrLogEventToServer = null;
	this.m_steamID = viewerSteamID;
	this.m_statsLastSnapshot = {
		'time': performance.now(),
		'bytes_received': 0,
		'frames_decoded': 0,
		'frames_dropped': 0,
		'failed_segments': 0,
	};

	// on screen reporting from stats report
	this.m_nStalledSegmentNumber = 0;
	this.m_nCountStalls = 0;
	this.m_strVideoDownloadHost = '...';
	this.m_nReportedPlaybackPos = 0;
	this.m_fSegmentTimeAverage = 0;
	this.m_fBandwidthAverage = 0;

	// events that trigger server event logging
	var _stats = this;
	this.m_schNextLogEvent = null;
	if ( this.m_bAutoLoggingEventsToServer )
	{
		$J( this.m_elVideoPlayer ).on( 'voddownloadcomplete.DASHPlayerStats', function() { _stats.LogEventToServer( false, false ); });

		// set up for the first event logged
		this.m_schNextLogEvent = window.setTimeout( function() { _stats.LogEventToServer( false, false ); }, CDASHPlayerStats.LOG_FIRST_EVENT );
	}

	// always log stalled events
	$J( this.m_elVideoPlayer ).on( 'playbackstalled.DASHPlayerStats', function( e, bVideoStalled ) { _stats.LogEventToServer( true, bVideoStalled ); });
}

CDASHPlayerStats.LOGGING_RATE_PERC = 100;
CDASHPlayerStats.LOG_FIRST_EVENT = 1000 * 30; 	// 30 seconds
CDASHPlayerStats.LOG_NEXT_EVENT = 1000 * 300; 	// 5 minutes
CDASHPlayerStats.SEND_LOG_TO_SERVER = true;

CDASHPlayerStats.prototype.Close = function()
{
	$J( this.m_elVideoPlayer ).off( '.DASHPlayerStats' );

	clearTimeout( this.m_schNextLogEvent );

	if ( this.m_xhrLogEventToServer )
	{
		this.m_xhrLogEventToServer.abort();
		this.m_xhrLogEventToServer = null;
	}
}

CDASHPlayerStats.prototype.Reset = function()
{
	this.m_statsLastSnapshot = {
		'time': performance.now(),
		'bytes_received': 0,
		'frames_decoded': 0,
		'frames_dropped': 0,
		'failed_segments': 0,
	};
}

CDASHPlayerStats.prototype.LogEventToServer = function( bStalledEvent, bVideoStalled )
{
	var _stats = this;

	var statsURL;
	if ( bStalledEvent )
		statsURL = CMPDParser.GetAnalyticsStalledLink();
	else
		statsURL = CMPDParser.GetAnalyticsStatsLink();

	if ( statsURL )
	{
		var statsCollected = this.CollectStatsForEvent( bStalledEvent, bVideoStalled );
		if ( Object.keys( statsCollected ).length )
		{
			// PlayerLog( statsCollected );

			if ( CDASHPlayerStats.SEND_LOG_TO_SERVER )
			{
				_stats.m_xhrLogEventToServer = $J.ajax(
				{
					url: statsURL,
					type: 'POST',
					data: statsCollected
				})
				.done( function( data, status, xhr )
				{
					_stats.m_xhrLogEventToServer = null;
				})
				.fail( function( jqXHR, textStatus, errorThrown )
				{
					_stats.m_xhrLogEventToServer = null;
				});
			}
		}

		// set up for the next log event
		if ( _stats.m_bAutoLoggingEventsToServer && !bStalledEvent )
		{
			clearTimeout( _stats.m_schNextLogEvent );
			_stats.m_schNextLogEvent = window.setTimeout( function() { _stats.LogEventToServer( false, false ); }, CDASHPlayerStats.LOG_NEXT_EVENT );
		}
	}
}

CDASHPlayerStats.prototype.CollectStatsForEvent = function( bStalledEvent, bVideoStalled )
{
	var statsCollected = {};

	if ( bStalledEvent )
	{
		statsCollected = this.m_videoPlayer.StatsRecentSegmentDownloads( bVideoStalled );

		// if the stalled segment is the same segment as last stall or the last segment error was 0 (request failed) or 404, no need to log.
		if ( statsCollected['last_segment_number'] == this.m_nStalledSegmentNumber || statsCollected['last_segment_response'] == 0 || statsCollected['last_segment_response'] == 404 )
			return {};

		this.m_nStalledSegmentNumber = statsCollected['segment_stalled'] = statsCollected['last_segment_number'];
		delete statsCollected['last_segment_number'];
		statsCollected['audio_stalled'] = !bVideoStalled;
		this.m_nCountStalls++;
	}
	else
	{
		var statsSnapshot = {
			'time': performance.now(),
			'bytes_received': this.m_videoPlayer.StatsAllBytesReceived(),
			'frames_decoded': ( this.m_elVideoPlayer.webkitDecodedFrames || this.m_elVideoPlayer.webkitDecodedFrameCount ),
			'frames_dropped': ( this.m_elVideoPlayer.webkitDroppedFrames || this.m_elVideoPlayer.webkitDroppedFrameCount ),
			'failed_segments': this.m_videoPlayer.StatsAllFailedSegmentDownloads(),
		}

		// if the player hasn't played or downloaded since the last snapshot then nothing new to log
		if ( statsSnapshot['frames_decoded'] == this.m_statsLastSnapshot['frames_decoded'] && statsSnapshot['bytes_received'] == this.m_statsLastSnapshot['bytes_received'] )
			 return {};

		var bw_rates = this.m_videoPlayer.StatsBandwidthRates( true );
		var seg_times = this.m_videoPlayer.StatsSegmentDownloadTimes( true );

		statsCollected = {
			'video_buffer': Math.round( this.m_videoPlayer.StatsVideoBuffer() ),
			'audio_buffer': Math.round( this.m_videoPlayer.StatsAudioBuffer() ),
			'seconds_delta': Math.round( ( statsSnapshot['time'] - this.m_statsLastSnapshot['time'] ) / 1000 ),
			'bytes_received': statsSnapshot['bytes_received'] - this.m_statsLastSnapshot['bytes_received'],
			'frames_decoded': statsSnapshot['frames_decoded'] - this.m_statsLastSnapshot['frames_decoded'],
			'frames_dropped': statsSnapshot['frames_dropped'] - this.m_statsLastSnapshot['frames_dropped'],
			'failed_segments': statsSnapshot['failed_segments'] - this.m_statsLastSnapshot['failed_segments'],
			'bw_avg': Math.round( bw_rates['bw_avg'] ),
			'bw_min': Math.round( bw_rates['bw_min'] ),
			'bw_max': Math.round( bw_rates['bw_max'] ),
			'seg_time_avg': Number( seg_times['seg_avg'].toFixed(3) ),
			'seg_time_min': seg_times['seg_min'],
			'seg_time_max': seg_times['seg_max'],
		}

		// stats being displayed on screen
		this.m_fBandwidthAverage = statsCollected['bw_avg'];
		this.m_fSegmentTimeAverage = statsCollected['seg_time_avg'];
		this.m_nReportedPlaybackPos = this.m_videoPlayer.GetPlaybackTimeInSeconds();

		this.m_statsLastSnapshot = statsSnapshot;
	}

	// common for both log events
	statsCollected['steamid'] = this.m_steamID,
	statsCollected['host'] = this.m_strVideoDownloadHost = this.m_videoPlayer.StatsDownloadHost();
	statsCollected['playback_position'] = this.m_videoPlayer.GetPlaybackTimeInSeconds();
	statsCollected['playback_speed'] = this.m_videoPlayer.GetPlaybackRate();
	statsCollected['video_res'] = this.m_videoPlayer.StatsPlaybackHeight();
	statsCollected['audio_rate'] = Math.round ( this.m_videoPlayer.StatsAudioBitRate() );
	statsCollected['audio_ch'] = this.m_videoPlayer.StatsAudioChannels();

	return statsCollected;
}

//////////////////////
// On-Screen Events
//////////////////////

CDASHPlayerStats.prototype.Show = function()
{
	if( this.bRunning )
		return;

	this.bRunning = true;

	$J(this.eleOverlay).show();
	var context = this;
	this.timerTick = setInterval( function() { context.Tick() }, 1000/60 );
	this.timerCalculateTotals = setInterval(function() { context.CalculateTotals() }, 500);
}

CDASHPlayerStats.prototype.Hide = function()
{
	if( !this.bRunning )
		return;

	this.bRunning = false;

	$J(this.eleOverlay).hide();
	clearInterval(this.timerTick);
	clearInterval(this.timerCalculateTotals);
}

CDASHPlayerStats.prototype.Toggle = function()
{
	if( this.bRunning )
		this.Hide();
	else
		this.Show();
}

CDASHPlayerStats.prototype.CalculateTotals = function()
{
	// runs on a 500ms timer, so frame counts must be multiplied by 2.
	this.nDecodedFramesPerSecond = 2 * ( ( ele.mozDecodedFrames || ele.webkitDecodedFrames || ele.webkitDecodedFrameCount ) - ( this.nLastDecodedFrames || 0 ) )
	this.nLastDecodedFrames = ( ele.mozDecodedFrames || ele.webkitDecodedFrames || ele.webkitDecodedFrameCount );

	this.strResolution = this.m_videoPlayer.StatsPlaybackWidth() + 'x' + this.m_videoPlayer.StatsPlaybackHeight() + ' (' + $J(this.m_elVideoPlayer).innerWidth() + 'x' + $J(this.m_elVideoPlayer).innerHeight() + ')';
	this.strVideoBuffered = this.m_videoPlayer.StatsVideoBuffer() + 's';
	this.strAudioBuffered = this.m_videoPlayer.StatsAudioBuffer() + 's';
	this.strBandwidth = this.m_videoPlayer.StatsCurrentDownloadBitRate() * 1000;
	this.strBuffers = this.m_videoPlayer.StatsBufferInfo();
	if ( this.m_videoPlayer.StatsGameDataBufferCount() != 0 )
		this.strGameDataBuffers = this.m_videoPlayer.StatsLastGameDataEventTriggerFrame() + '/' + this.m_videoPlayer.StatsGameDataBufferCount();
	else
		this.strGameDataBuffers = '';
	this.oLastGameDataFrame = this.m_videoPlayer.StatsLastGameDataBuffer();
	this.fGameDataTriggerPerf = this.m_videoPlayer.StatsLastGameDataEventTriggerPerf();
}

CDASHPlayerStats.prototype.FormattingBytesToHuman = function ( nBytes )
{
	if( nBytes < 1000 )
		return nBytes + " B";
	if( nBytes < 1000000 )
		return ( nBytes / 1000 ).toFixed(2) + ' KB';

	if( nBytes < 1000000000)
		return ( nBytes / 1000000 ).toFixed(2) + ' MB';

	return (nBytes / 1000000000 ).toFixed(2) + ' GB';
}

CDASHPlayerStats.prototype.Tick = function()
{
	$ele = $J(this.m_elVideoPlayer);
	ele = this.m_elVideoPlayer;
	var rgStatsDefinitions = [
		// Webkit
		{
			id: 'webkitAudioBytesDecoded',
			label: 'Audio Bytes Decoded',
			value: ele.webkitAudioBytesDecoded || ele.webkitAudioDecodedByteCount,
			formatFunc: this.FormattingBytesToHuman
		},
		{
			id: 'webkitVideoBytesDecoded',
			label: 'Video Bytes Decoded',
			value: ele.webkitVideoBytesDecoded || ele.webkitVideoDecodedByteCount,
			formatFunc: this.FormattingBytesToHuman
		},
		{
			id: 'webkitDecodedFrames',
			label: 'Decoded Frames',
			value: ele.webkitDecodedFrames || ele.webkitDecodedFrameCount
		},
		{
			id: 'webkitDroppedFrames',
			label: 'Dropped Frames',
			value: ele.webkitDroppedFrames || ele.webkitDroppedFrameCount
		},
		// Firefox
		{
			id: 'mozParsedFrames',
			label: 'Parsed Frames',
			value: ele.mozParsedFrames
		},
		{
			id: 'mozDecodedFrames',
			label: 'Decoded Frames',
			value: ele.mozDecodedFrames
		},
		{
			id: 'mozPresentedFrames',
			label: 'Presented Frames',
			value: ele.mozPresentedFrames
		},
		{
			id: 'mozPaintedFrames',
			label: 'Painted Frames',
			value: ele.mozPaintedFrames
		},
		{
			id: 'mozFrameDelay',
			label: 'Frame Delay',
			value: ele.mozFrameDelay
		},
		// Generic
		{
			id: 'decodedFramesPerSecond',
			label: 'Decoded Frames Per Second',
			value: this.nDecodedFramesPerSecond
		},
		// DASHPlayer
		{
			id: 'playbackResolution',
			label: 'Resolution',
			value: this.strResolution
		},
		{
			id: 'videobuffered',
			label: 'Video Buffered',
			value: this.strVideoBuffered
		},
		{
			id: 'audiobuffered',
			label: 'Audio Buffered',
			value: this.strAudioBuffered
		},
		{
			id: 'downloadbandwidth',
			label: 'Bandwidth (bits)',
			value: this.strBandwidth,
			formatFunc: this.FormattingBytesToHuman
		},
		{
			id: 'dashbuffers',
			label: 'Buffers',
			value: this.strBuffers
		},
		// Report Stats
		{
			id: 'stalls',
			label: 'Stalled Events',
			value: this.m_nCountStalls
		},
		{
			id: 'reportsent',
			label: 'Stats Sent',
			value: SecondsToTime( this.m_nReportedPlaybackPos )
		},
		{
			id: 'host',
			label: ' - Host',
			value: this.m_strVideoDownloadHost
		},
		{
			id: 'bandwidthavg',
			label: ' - Bandwidth Average (bits)',
			value: this.m_fBandwidthAverage,
			formatFunc: this.FormattingBytesToHuman
		},
		{
			id: 'segmentfails',
			label: ' - Segment D/L Fails',
			value: this.m_statsLastSnapshot['failed_segments']
		},
		{
			id: 'segmenttimeaverage',
			label: ' - Segment D/L Time Average',
			value: this.m_fSegmentTimeAverage + 's'
		},
		// Game log data if available
		{
			id: 'lastgameframeappid',
			label: 'Game Frame App ID',
			value: ( this.oLastGameDataFrame != null ) ? this.oLastGameDataFrame.appid : null
		},
		{
			id: 'lastgameframerelayid',
			label: 'Game Broadcast Relay ID',
			value: ( this.oLastGameDataFrame != null ) ? this.oLastGameDataFrame.broadcastrelayid : null
		},
		{
			id: 'lastgameframesegmentid',
			label: 'Game Segment Frame ID',
			value: ( this.oLastGameDataFrame != null ) ? this.oLastGameDataFrame.segmentid : null
		},
		{
			id: 'gamedatabuffers',
			label: 'Game Frame Buffers',
			value: ( this.strGameDataBuffers != '' ) ? this.strGameDataBuffers : null
		},
		{
			id: 'gametriggerperf',
			label: 'Game Frame Perf',
			value: ( this.fGameDataTriggerPerf != 0 ) ? this.fGameDataTriggerPerf + ' ms' : null
		},
];

	for( var i=0; i < rgStatsDefinitions.length; i++)
	{
		var rgStatDefinition = rgStatsDefinitions[i];
		if( rgStatDefinition.value != undefined && rgStatDefinition.value != NaN )
		{
			$target = $J( '.value', $J('#' + rgStatDefinition.id) );
			// Create element if needed
			if( $target.length == 0 )
			{
				var container = $J('<div id="'+rgStatDefinition.id+'">' + rgStatDefinition.label + ': <span class="value"></span></div>');
				$J(this.eleOverlay).append( container );
				$target = $J( '.value', container );
			}

			if( rgStatDefinition.formatFunc )
				$target.text( rgStatDefinition.formatFunc( rgStatDefinition.value ) );
			else
				$target.html( rgStatDefinition.value );
		}
	}
}



