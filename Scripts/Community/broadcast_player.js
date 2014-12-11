
// Logs messages to the console
function BroadcastLog( s )
{
	console.log(s);
};

/////////////////////////////////////////////////////////////////
// Broadcast video player
/////////////////////////////////////////////////////////////////
function CBroadcastPlayer( elVideoPlayer )
{
	this.m_elVideoPlayer = elVideoPlayer;
	this.m_strMPD = '';
	this.m_loaders = [];
	this.m_mediaSource = null;
	this.m_rtBroadcastStarted = 0;
	this.m_bPlayAfterBuffering = true;
	this.m_schUpdateMPD = null;
	this.m_xhrUpdateMPD = null;

	// info used in playback
	this.m_nVideoRepresentationIndex = -1;
	this.m_nAudioRepresentationIndex = 0;
	this.m_nPlayerHeight = 0;
	this.m_nCurrentDownloadBitRate = 0;

	// player states
	this.m_bIsWaiting = false;
	this.m_bIsSeeking = false;
	this.m_bExiting = false;

	// Logging
	this.m_nVideoBuffer = 0;
	this.m_nAudioBuffer = 0;
	this.m_nPlaybackWidth = 0;
	this.m_nPlaybackHeight = 0;
	this.m_nAudioBitRate = 0;
	this.m_nVideoBitRate = 0;
	this.m_nDownloadVideoWidth = 0;
	this.m_nDownloadVideoHeight = 0;
	this.m_nLastSeekTime = 0;

}

CBroadcastPlayer.TRACK_BUFFER_MS = 5000;
CBroadcastPlayer.TRACK_BUFFER_MAX_SEC = 30 * 60;
CBroadcastPlayer.DOWNLOAD_RETRY_MS = 500;

CBroadcastPlayer.HAVE_NOTHING = 0;
CBroadcastPlayer.HAVE_METADATA = 1;
CBroadcastPlayer.HAVE_CURRENT_DATA = 2;
CBroadcastPlayer.HAVE_FUTURE_DATA = 3;
CBroadcastPlayer.HAVE_ENOUGH_DATA = 4;

CBroadcastPlayer.prototype.StopDownloads = function()
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

CBroadcastPlayer.prototype.Close = function()
{
	this.StopDownloads();

	this.m_loaders = [];
	if ( this.m_mediaSource )
	{
		$J( this.m_mediaSource ).off( '.BroadcastPlayerEvents' );
		if ( this.m_mediaSource.readyState != 'closed' )
			this.m_mediaSource.endOfStream();

		this.m_mediaSource = null;
	}

	this.m_strMPD = '';
	this.m_rtBroadcastStarted = 0;
	this.m_bPlayAfterBuffering = true;
	this.m_bIsWaiting = false;
	this.m_bIsSeeking = false;
	this.m_bExiting = false;
}

CBroadcastPlayer.prototype.CloseWithError = function()
{
	this.Close();

	var event = new Event( 'playbackerror' );
	this.m_elVideoPlayer.dispatchEvent( event );
}

CBroadcastPlayer.prototype.PlayMPD = function( strURL )
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
			BroadcastLog( 'Failed to parse MPD file' );
			return;
		}

		// if dynamic, schedule mpd reload
		if ( _player.BIsLiveContent() && _player.m_mpd.minimumUpdatePeriod > 0 )
		{
			_player.m_schUpdateMPD = setTimeout( function() { _player.UpdateMPD(); }, _player.m_mpd.minimumUpdatePeriod * 1000 );

			// calculate when the broadcast started relative to system clock
			var strServerTime = xhr.getResponseHeader( 'date' );
			var unServerTime = strServerTime ? new Date( strServerTime ).getTime() : Date.now();
			_player.m_rtBroadcastStarted = Date.now() - (unServerTime - _player.m_mpd.availabilityStartTime.getTime());
			BroadcastLog( 'server time: ' + strServerTime );
		}

		// select representation to play
		if ( !_player.BCreateLoaders() )
		{
			BroadcastLog( 'Failed to create segment loaders' );
			return;
		}

		// can now init video controls and start playback
		_player.InitVideoControl();
	})
	.fail( function()
	{
		_player.m_xhrUpdateMPD = null;
		BroadcastLog( 'Failed to download: ' + _player.m_strMPD );
	});
}

CBroadcastPlayer.prototype.UpdateMPD = function()
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
			BroadcastLog( 'Failed to update MPD file' );
			return;
		}

		// if dynamic, schedule mpd reload
		if ( _player.BIsLiveContent() && _player.m_mpd.minimumUpdatePeriod > 0 )
			_player.m_schUpdateMPD = setTimeout( function() { _player.UpdateMPD(); }, _player.m_mpd.minimumUpdatePeriod * 1000 );

	})
	.fail( function()
	{
		_player.m_xhrUpdateMPD = null;
		BroadcastLog( 'Failed to download: ' + _player.m_strMPD );
	});
}

CBroadcastPlayer.prototype.BCreateLoaders = function()
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

	// want to always play video
	return !bNeedVideo;
}

CBroadcastPlayer.prototype.InitVideoControl = function()
{
	// create the media source
	var mediaSource = new window.MediaSource();
	var mediaURL = URL.createObjectURL(mediaSource);
	this.m_elVideoPlayer.pause();
	this.m_elVideoPlayer.src = mediaURL;
	this.m_mediaSource = mediaSource;

	// need to wait for the source to open then can add buffers
	var _player = this;
	$J( mediaSource ).on( 'sourceopen.BroadcastPlayerEvents', function() { _player.OnMediaSourceOpen(); });
	$J( mediaSource ).on( 'sourceended.BroadcastPlayerEvents', function( e ) { _player.OnMediaSourceEnded( e ); });
	$J( mediaSource ).on( 'sourceclose.BroadcastPlayerEvents', function( e ) { _player.OnMediaSourceClose( e ); });
}

CBroadcastPlayer.prototype.OnMediaSourceOpen = function()
{
	for ( var i = 0; i < this.m_loaders.length; i++ )
	{
		this.m_loaders[i].SetMediaSource( this.m_mediaSource );
	}

	this.BeginPlayback();
}

CBroadcastPlayer.prototype.OnMediaSourceEnded = function( e )
{
	BroadcastLog( 'Media source ended' );
}

CBroadcastPlayer.prototype.OnMediaSourceClose = function( e )
{
		BroadcastLog( 'Media source closed' );
	this.CloseWithError();
}

CBroadcastPlayer.prototype.BeginPlayback = function()
{
	var _player = this;
	var unLiveEdge = 0;

	if (_player.BIsLiveContent())
	{
		unLiveEdge = Date.now() - this.m_rtBroadcastStarted;
	}

	for ( var i = 0; i < this.m_loaders.length; i++ )
	{
		this.m_loaders[i].BeginPlayback( unLiveEdge );
	}

	var event = new Event( 'initialized' );
	this.m_elVideoPlayer.dispatchEvent( event );
}

CBroadcastPlayer.prototype.OnSegmentDownloaded = function()
{
	this.UpdateStats();
	this.UpdateRepresentation( this.m_nVideoRepresentationIndex, true );

	var event = new Event( 'bufferedupdate' );
	this.m_elVideoPlayer.dispatchEvent( event );

	if ( !this.m_bPlayAfterBuffering )
		return;

	// when all loaders have enough buffered data, play
	var bPlay = (this.m_loaders.length > 0);
	var nStartPlayback = 0;
	for ( var i = 0; i < this.m_loaders.length; i++ )
	{
		if ( !this.m_loaders[i].BVideoBuffered() )
		{
    		bPlay = false;
    		break;
    	}

		nStartPlayback = Math.max( nStartPlayback, this.m_loaders[i].GetBufferedStart() );
	}

	if ( bPlay )
	{
		this.m_elVideoPlayer.play();
		this.m_bPlayAfterBuffering = false;
		this.m_nSeek = nStartPlayback;

		// need to wait till ready state advances before setting current time
		// bugbug - addEventListener isn't firing... polling wait below
		var _player = this;
		var funcInitialSeek = function()
		{
			if ( _player.m_elVideoPlayer.readyState == CBroadcastPlayer.HAVE_NOTHING )
			{
				setTimeout( funcInitialSeek, 50 );
			}
			else
			{
				_player.m_elVideoPlayer.currentTime = nStartPlayback;

				var event = new Event( 'bufferingcomplete' );
				_player.m_elVideoPlayer.dispatchEvent( event );

				// setup events now that we are playing
				_player.m_elVideoPlayer.addEventListener("seeking",function() { _player.playerSeeking(_player); });
				_player.m_elVideoPlayer.addEventListener("seeked", function() { _player.playerSeeked(_player); });
				_player.m_elVideoPlayer.addEventListener("waiting", function() { _player.playerWaiting(_player); });
				_player.m_elVideoPlayer.addEventListener("playing", function() { _player.playerPlaying(_player); });
			}
		};

		setTimeout( funcInitialSeek, 50 );
	}
}

CBroadcastPlayer.prototype.OnSegmentDownloadFailed = function()
{
		this.StopDownloads();

	var event = new Event( 'downloadfailed' );
	this.m_elVideoPlayer.dispatchEvent( event );
}

CBroadcastPlayer.prototype.playerSeeking = function(_player)
{
	this.m_bIsSeeking = true;
	_player.m_nLastSeekTime = new Date().getTime();

	// seek to the correct segment for each loader
	for (var i = 0; i < _player.m_loaders.length; i++)
	{
		_player.m_loaders[i].SeekToSegment( _player.m_elVideoPlayer.currentTime, false );
	}
}

CBroadcastPlayer.prototype.playerSeeked = function(_player)
{
	this.m_bIsSeeking = false;
	_player.m_nLastSeekTime = new Date().getTime() - _player.m_nLastSeekTime;
}

CBroadcastPlayer.prototype.playerWaiting = function(_player)
{
	_player.m_bIsWaiting = true;
}

CBroadcastPlayer.prototype.playerPlaying = function(_player)
{
	_player.m_bIsWaiting = false;
}

CBroadcastPlayer.prototype.BIsWaiting = function()
{
	return this.m_bIsSeeking || this.m_bIsWaiting || this.m_elVideoPlayer.readyState == CBroadcastPlayer.HAVE_NOTHING;
}

CBroadcastPlayer.prototype.BIsSeeking = function()
{
	return this.m_bIsSeeking;
}

CBroadcastPlayer.prototype.BIsLiveContent = function()
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

CBroadcastPlayer.prototype.GetPercentBuffered = function()
{
	var unVideoBuffered = 0;
	var unAudioBuffered = 0 ;

	for ( var i = 0; i < this.m_loaders.length; i++ )
	{
		if ( this.m_loaders[i].ContainsVideo() )
		{
			unVideoBuffered = Math.min( this.m_nVideoBuffer * 100 / CBroadcastPlayer.TRACK_BUFFER_MS, 100 );
		}

		if ( this.m_loaders[i].ContainsAudio() && !this.m_loaders[i].ContainsVideo() )
		{
			unAudioBuffered = Math.min( this.m_nAudioBuffer * 100 / CBroadcastPlayer.TRACK_BUFFER_MS, 100 );
		}
	}

	return Math.min( unVideoBuffered, unAudioBuffered ).toFixed(0);
}

CBroadcastPlayer.prototype.GetLiveBufferWindow = function()
{
	return CBroadcastPlayer.TRACK_BUFFER_MAX_SEC;
}

CBroadcastPlayer.prototype.SeekToBufferedEnd = function()
{
	var nStartPlayback = null;
	for ( var i = 0; i < this.m_loaders.length; i++ )
	{
		if ( nStartPlayback == null )
		{
			nStartPlayback = this.m_loaders[i].GetBufferedEnd();
			continue;
		}

		nStartPlayback = Math.min( nStartPlayback, this.m_loaders[i].GetBufferedEnd() );
	}

	if ( nStartPlayback == null )
		return;

	nStartPlayback -= (CBroadcastPlayer.TRACK_BUFFER_MS / 1000 );
	if ( nStartPlayback > 0 )
		this.m_elVideoPlayer.currentTime = nStartPlayback;
}

CBroadcastPlayer.prototype.SeekTo = function( nTime )
{
	if (this.m_elVideoPlayer.readyState != CBroadcastPlayer.HAVE_NOTHING)
		this.m_elVideoPlayer.currentTime = nTime;
}

CBroadcastPlayer.prototype.GetRepresentationsArray = function ( bVideo )
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
					if (this.m_loaders[i].m_adaptation.representations[b].height != null)
					{
						rgRespresentations.push( this.m_loaders[i].m_adaptation.representations[b].height );
					}
					else
					{
						rgRespresentations.push( b );
					}

					rgRespresentations.push( this.m_loaders[i].m_adaptation.representations[b].bandwidth );
				}
			}
			else if ( !bVideo && this.m_loaders[i].ContainsAudio() )
			{
				for (var b = 0; b < this.m_loaders[i].GetRepresentationsCount(); b++)
				{
					rgRespresentations.push( this.m_loaders[i].m_adaptation.representations[b].audioChannels );
					rgRespresentations.push( this.m_loaders[i].m_adaptation.representations[b].bandwidth);
				}
			}
		}
	}

	return rgRespresentations;
}

CBroadcastPlayer.prototype.UpdateRepresentation = function ( representationIndex, bVideo )
{
	// if specific bit rate and no change will occur, short circuit and get out
	if ( ( bVideo && representationIndex >= 0 && this.m_nVideoRepresentationIndex == representationIndex ) ||
	   (  !bVideo && this.m_nAudioRepresentationIndex == representationIndex ) )
		return;

	if ( representationIndex == -1 )
	{
		// don't automatically shift bit rates while waiting on the player
		if ( this.BIsWaiting() )
			return;

		// *** Adaptive Video Change
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
					// proposed new video bit rate + current audio bit rate plus 20% overhead
					if ( this.m_nCurrentDownloadBitRate >= (this.m_loaders[i].m_adaptation.representations[b].bandwidth + this.m_nAudioBitRate) * 1.2 )
					{
						if (this.m_loaders[i].m_adaptation.representations[b].height != null)
						{
							// and player height needs to be more than the video height of the smaller representation (e.g. 800 height should use 1080, not 720)
							if ( this.m_nPlayerHeight >= this.m_loaders[i].m_adaptation.representations[ Math.min( b+1, nMaxRepresentations ) ].height )
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
		// *** Specific representation and bit rate
		for (var i = 0; i < this.m_loaders.length; i++)
		{
			if ( bVideo && this.m_loaders[i].ContainsVideo() )
			{
				this.m_nVideoRepresentationIndex = representationIndex;
				this.m_loaders[i].ChangeRepresentationByIndex( this.m_nVideoRepresentationIndex );
				this.m_loaders[i].SeekToSegment( this.m_elVideoPlayer.currentTime, true );
			}
			else if (!bVideo && this.m_loaders[i].ContainsAudio())
			{
				this.m_nAudioRepresentationIndex = representationIndex;
				this.m_loaders[i].ChangeRepresentationByIndex( this.m_nAudioRepresentationIndex );
				this.m_loaders[i].SeekToSegment( this.m_elVideoPlayer.currentTime, true );
			}
		}

		// if playing, then pause and wait for buffer to fill before playing again
		if ( !this.m_elVideoPlayer.paused )
		{
			this.m_bIsSeeking = true;
			this.m_elVideoPlayer.pause();
			var _player = this;
			setTimeout( function() { _player.WaitForRepresentationChangeToPlay( _player ) }, CBroadcastPlayer.DOWNLOAD_RETRY_MS );
		}
	}
}

CBroadcastPlayer.prototype.WaitForRepresentationChangeToPlay = function ( player )
{
	for (var i = 0; i < player.m_loaders.length; i++)
	{
		if ( player.m_loaders[i].ContainsVideo() || player.m_loaders[i].ContainsAudio() )
		{
			if ( player.m_loaders[i].m_bRemoveBufferState || !player.m_loaders[i].BVideoBuffered() )
			{
				var _player = player;
				setTimeout( function() { _player.WaitForRepresentationChangeToPlay( _player ) }, CBroadcastPlayer.DOWNLOAD_RETRY_MS );
				return;
			}
		}
	}

	player.m_elVideoPlayer.play();
	player.m_bIsSeeking = false;
}

CBroadcastPlayer.prototype.UpdateStats = function()
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
			this.m_nPlaybackHeight = this.m_elVideoPlayer.videoHeight;
			this.m_nVideoBitRate = this.m_loaders[i].m_representation.bandwidth;
			this.m_nDownloadVideoWidth = (this.m_loaders[i].m_representation.width != null) ? this.m_loaders[i].m_representation.width : 0;
			this.m_nDownloadVideoHeight = (this.m_loaders[i].m_representation.height != null) ? this.m_loaders[i].m_representation.height : 0;

			// used for playback
			this.m_nPlayerHeight = $J(this.m_elVideoPlayer.parentNode).height();
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
}

CBroadcastPlayer.prototype.StatsVideoBuffer = function()
{
	return (this.m_nVideoBuffer / 1000).toFixed(2);
}

CBroadcastPlayer.prototype.StatsAudioBuffer = function()
{
	return (this.m_nAudioBuffer / 1000).toFixed(2);
}

CBroadcastPlayer.prototype.StatsPlaybackWidth = function()
{
	return this.m_nPlaybackWidth;
}

CBroadcastPlayer.prototype.StatsPlaybackHeight = function()
{
	return this.m_nPlaybackHeight;
}

CBroadcastPlayer.prototype.StatsAudioBitRate = function()
{
	return (this.m_nAudioBitRate / 1000).toFixed(2);
}

CBroadcastPlayer.prototype.StatsVideoBitRate = function()
{
	return (this.m_nVideoBitRate  / 1000).toFixed(2);
}

CBroadcastPlayer.prototype.StatsDownloadVideoWidth = function()
{
	return this.m_nDownloadVideoWidth;
}

CBroadcastPlayer.prototype.StatsDownloadVideoHeight = function()
{
	return this.m_nDownloadVideoHeight;
}

CBroadcastPlayer.prototype.StatsCurrentDownloadBitRate = function()
{
	return (this.m_nCurrentDownloadBitRate / 1000).toFixed(2);
}

CBroadcastPlayer.prototype.StatsBufferInfo = function()
{
	var bufferString = "";
	for (var i = 0; i < this.m_loaders.length; i++)
	{
		if (this.m_loaders[i].ContainsVideo())
		{
			for (var v = 0; v < this.m_loaders[i].m_sourceBuffer.buffered.length; v++)
			{
				bufferString += "Video Buffer " + v + ": " + SecondsToTime(this.m_loaders[i].m_sourceBuffer.buffered.start(v)) + " - " + SecondsToTime(this.m_loaders[i].m_sourceBuffer.buffered.end(v)) + "<br>";
			}
		}

		if (this.m_loaders[i].ContainsAudio())
		{
			for (var a = 0; a < this.m_loaders[i].m_sourceBuffer.buffered.length; a++)
			{
				bufferString += "Audio Buffer " + a + ": " + SecondsToTime(this.m_loaders[i].m_sourceBuffer.buffered.start(a)) + " - " + SecondsToTime(this.m_loaders[i].m_sourceBuffer.buffered.end(a)) + "<br>";
			}
		}
	}

	if (bufferString == "") bufferString = "None";

	return bufferString;
}

CBroadcastPlayer.prototype.StatsProperties = function()
{
	return "Error: " + ((this.m_elVideoPlayer.error) ? this.m_elVideoPlayer.error.code : "None") + ", Network: " + this.m_elVideoPlayer.networkState
		+ ", Last Seek Time: " + (this.BIsSeeking() ? "..." : Math.max(0, this.m_nLastSeekTime) + "ms");
}

CBroadcastPlayer.prototype.StatsSegmentInfo = function()
{
	var bufferString = "";
	for (var i = 0; i < this.m_loaders.length; i++)
	{
		if (this.m_loaders[i].ContainsVideo())
		{
			bufferString += "Video " + (this.m_loaders[i].m_nNextSegment);
			if (!this.BIsLiveContent())
				bufferString += "/" + (this.m_loaders[i].m_nTotalSegments - 1);
			bufferString += ", ";
		}

		if (this.m_loaders[i].ContainsAudio())
		{
			bufferString += "Audio " + (this.m_loaders[i].m_nNextSegment);
			if (!this.BIsLiveContent())
				bufferString += "/" + (this.m_loaders[i].m_nTotalSegments - 1);
			bufferString += " ";
		}
	}

	return bufferString;
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

	// need to be closed
	this.m_xhr = null;
	this.m_schNextDownload = null;
	this.m_schRetryDownload = null;
	this.m_schWaitForBuffer = null;

	// bandwidth monitoring
	this.m_rgDownloadLog = [];
	this.m_nDownloadLogSize = 4;
}

CSegmentLoader.s_BufferUpdateNone = 0;
CSegmentLoader.s_BufferUpdateAppend = 1;
CSegmentLoader.s_BufferUpdateRemove = 2;

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

	// need to be closed
	this.m_xhr = null;
	this.m_schNextDownload = null;
	this.m_schRetryDownload = null;
	this.m_schWaitForBuffer = null;
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
	if (this.m_player.m_mpd.periods[0].duration)
	{
		this.m_nTotalSegments = CMPDParser.GetSegmentForTime( this.m_adaptation, this.m_player.m_mpd.periods[0].duration * 1000 );
	}

	return this.m_nTotalSegments;
}

CSegmentLoader.prototype.BeginPlayback = function( unLiveEdge )
{
	if ( !this.GetRepresentationsCount() )
		return false;

	this.GetTotalSegments();

	if ( this.ContainsVideo() )
	{
		this.m_nNextSegment = CMPDParser.GetSegmentForTime( this.m_adaptation, unLiveEdge );
		BroadcastLog( 'Video Live edge at: ' + unLiveEdge + ', starting segment: ' + this.m_nNextSegment );

		this.ChangeRepresentationByIndex( this.GetRepresentationsCount() - 1 );
		this.DownloadNextSegment();

	}
	else if ( this.ContainsAudio() && !this.ContainsVideo())
	{
		// alternate audio stream
		this.m_nNextSegment = CMPDParser.GetSegmentForTime( this.m_adaptation, unLiveEdge );
		BroadcastLog( 'Audio Stream Starting at: ' + unLiveEdge + ', starting segment: ' + this.m_nNextSegment );

		this.ChangeRepresentationByIndex( 0 );
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
		//BroadcastLog( representation.mimeType + ';codecs=' + representation.codecs );
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
		// BroadcastLog("Changing Representation to " + this.m_adaptation.representations[representationIndex].id);
		this.ChangeRepresentation( this.m_adaptation.representations[representationIndex] );
	}
}

CSegmentLoader.prototype.DownloadSegment = function( url, nSegmentDuration, rtAttemptStarted )
{
	this.m_schRetryDownload = null;
	if ( !rtAttemptStarted )
		rtAttemptStarted = Date.now();

	// VOD ended?
	if (this.m_nNextSegment > this.m_nTotalSegments)
	{
		return;
	}

	// BroadcastLog( Date.now() + ' downloading: ' + url );

	var _loader = this;
	var xhr = new XMLHttpRequest();
	this.m_xhr = xhr;
	xhr.open( 'GET', url );
	xhr.send();
	xhr.responseType = 'arraybuffer';

	downloadStart = new Date().getTime();

	try
	{
		xhr.addEventListener( 'readystatechange', function ()
		{
			if ( xhr.readyState == xhr.DONE )
			{
				if ( _loader.m_xhr == null )
					return;

				_loader.m_xhr = null;
				if ( xhr.status != 200 || !xhr.response )
				{
					BroadcastLog( 'Request failed: ' + url );
					if ( Date.now() - rtAttemptStarted > CBroadcastPlayer.TRACK_BUFFER_MS + CBroadcastPlayer.DOWNLOAD_RETRY_MS )
					{
						_loader.DownloadFailed();
						return;
					}

					_loader.m_schRetryDownload = setTimeout( function() { _loader.DownloadSegment( url, nSegmentDuration, rtAttemptStarted ); }, CBroadcastPlayer.DOWNLOAD_RETRY_MS );
					return;
				}

				try
				{
					var arr = new Uint8Array( xhr.response );
					var segment = {};
					segment.duration = nSegmentDuration;
					segment.data = arr;
					_loader.m_bufSegments.push( segment );

					_loader.LogDownload( xhr, downloadStart, segment.data.length );
				}
				catch (e)
				{
					BroadcastLog('Exception while appending: ' + e);
				}

				_loader.UpdateBuffer();
				_loader.ScheduleNextDownload();
			}
		}, false);
	}
	catch ( e )
	{
		BroadcastLog( 'Failed to download segment: ' + e );
		return;
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
		buffered = (this.m_sourceBuffer != null) ? this.m_sourceBuffer.buffered : {};
		if ( buffered.length > 0 && (buffered.end( 0 ) - buffered.start( 0 )) > CBroadcastPlayer.TRACK_BUFFER_MAX_SEC )
		{
			var nStart = buffered.start(0);
			var nEnd = buffered.end(0) - CBroadcastPlayer.TRACK_BUFFER_MAX_SEC;

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
	if ( this.m_nBufferUpdate == CSegmentLoader.s_BufferUpdateAppend )
		this.m_player.OnSegmentDownloaded();

	this.m_nBufferUpdate = CSegmentLoader.s_BufferUpdateNone;
	this.UpdateBuffer();
}

CSegmentLoader.prototype.OnSourceBufferError = function( e )
{
	BroadcastLog( 'Source buffer error' );
}

CSegmentLoader.prototype.OnSourceBufferAbort = function( e )
{
	BroadcastLog( 'Source buffer update aborted' );
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
		BroadcastLog( 'Already scheduled next download' );
		return;
	}

	// check if the next segment is available
	var unDeltaMS = CMPDParser.GetSegmentAvailableFromNow( this.m_adaptation, this.m_nNextSegment, this.m_player.m_rtBroadcastStarted );
	if ( unDeltaMS > 0 )
	{
		// not yet available
		this.m_schNextDownload = setTimeout( function() { _loader.DownloadNextSegment() }, unDeltaMS );
		return;
	}

	// check if we need to buffer. Keep downloading for dynamic content
	var unAmountBuffered = this.GetAmountBuffered();
	if ( this.m_player.BIsLiveContent() || unAmountBuffered < CBroadcastPlayer.TRACK_BUFFER_MS )
	{
		this.DownloadNextSegment();
		return;
	}

	// next segment is available but buffer is full. Can wait on download
	unDeltaMS = unAmountBuffered - CBroadcastPlayer.TRACK_BUFFER_MS;
	if ( unAmountBuffered < ( CBroadcastPlayer.TRACK_BUFFER_MAX_SEC * 1000 ) - CBroadcastPlayer.TRACK_BUFFER_MS )
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

CSegmentLoader.prototype.BVideoBuffered = function()
{
	return (this.GetAmountBufferedInPlayer() >= CBroadcastPlayer.TRACK_BUFFER_MS);
}

CSegmentLoader.prototype.GetAmountBufferedInPlayer = function()
{
	var nBuffered = 0;
	var buffered = {};
	buffered = (this.m_sourceBuffer != null) ? this.m_sourceBuffer.buffered : {};

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
	var buffered = this.m_sourceBuffer.buffered;
	if ( buffered.length == 0 )
		return 0;

	return this.m_sourceBuffer.buffered.start(0);
}

CSegmentLoader.prototype.GetBufferedEnd = function()
{
	var buffered = this.m_sourceBuffer.buffered;
	if ( buffered.length == 0 )
		return 0;

	return this.m_sourceBuffer.buffered.end(0);
}

CSegmentLoader.prototype.SeekToSegment = function( nSeekTime, bForceBufferClear )
{
	// if seeking outside of the main buffer or forced override
	if ( nSeekTime < this.GetBufferedStart() || nSeekTime > this.GetBufferedEnd() || bForceBufferClear )
	{
		// Allow any current download to complete
		if ( this.m_xhr )
		{
			// use download timeout handler to block new downloads from starting
			var _loader = this;
			this.m_schNextDownload = setTimeout( function() { _loader.SeekToSegment( nSeekTime, bForceBufferClear ) }, CBroadcastPlayer.DOWNLOAD_RETRY_MS );
			return;
		}

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

		// BroadcastLog("Set Next Segment: " + this.m_nNextSegment + " at approx. " + SecondsToTime(this.m_nNextSegment * CMPDParser.GetSegmentDuration(this.m_adaptation) / 1000) + " seconds.");

		// flag an unused buffer cleanup
		this.m_bRemoveBufferState = true;
		this.UpdateBuffer();

		// start the download
		this.DownloadNextSegment();
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
	}
}

CSegmentLoader.prototype.RemoveAllBuffers = function()
{
	if ( !this.m_bRemoveBufferState )
		return;

	// clears all buffer data from the player
	buffered = (this.m_sourceBuffer != null) ? this.m_sourceBuffer.buffered : {};
	if (buffered.length)
	{
		var nBufferedStart = buffered.start(0);
		var nBufferedEnd = buffered.end(buffered.length-1);

		if (nBufferedStart < nBufferedEnd)
		{
			this.m_nBufferUpdate = CSegmentLoader.s_BufferUpdateRemove;
			this.m_sourceBuffer.remove( nBufferedStart, nBufferedEnd );
		}
	}

	this.m_bRemoveBufferState = false;
}

CSegmentLoader.prototype.LogDownload = function ( xhr, startTime, dataSizeBytes )
{
	// If CORS with Date Header is enabled, use it for cache check
	var responseTime;
	if (xhr.getAllResponseHeaders().indexOf("Date:") != -1)
		responseTime = Date.parse( xhr.getResponseHeader( "Date" ));
	else
		responseTime = startTime;

	// check if download wasn't from cache (startTime earlier than or equal to responseTime ... round to nearest second)
	var startSeconds = Math.floor( startTime / 1000 );
	var responseSeconds = responseTime / 1000;
	if ( startSeconds <= responseSeconds || this.m_rgDownloadLog.length < this.m_nDownloadLogSize)
	{
		// remove the oldest log as needed
		if ( this.m_rgDownloadLog.length > this.m_nDownloadLogSize )
		{
			this.m_rgDownloadLog.shift();
		}

		// store the download
		var logEntry = [];
		logEntry.downloadTime = (new Date().getTime()) - startTime;
		logEntry.dataSizeBytes = dataSizeBytes;
		this.m_rgDownloadLog.push( logEntry );
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
			BroadcastLog("MPD - Missing Buffer Time or Presentation Duration");
			return false;
		}
	}

	// baseURL if set
	var baseUrl = $J( xmlMPD ).find('BaseURL');
	if (baseUrl)
	{
		CMPDParser.strBaseURL = baseUrl.text();
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
		BroadcastLog("MPD - Missing Period Information.")
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
		if ( adaptationSet.segmentAlignment == null )
		{
			bError = true;
			BroadcastLog("MPD - Segment Alignment Missing");
			return;
		}

		// parse components
		adaptationSet.containsVideo = false;
		adaptationSet.containsAudio = false;
		$J( xmlAdaptation ).find( 'ContentComponent' ).each( function()
		{
			var xmlComponent = $J( this );
			var type = $J( xmlComponent ).attr( 'contentType' );
			if ( type == 'video' )
				adaptationSet.containsVideo = true;
			if ( type == 'audio' )
				adaptationSet.containsAudio = true;
		});

		// find segment template
		var xmlSegmentTemplates = $J( xmlAdaptation ).find( 'SegmentTemplate' );
		if ( xmlSegmentTemplates.size() == 0 )
		{
			bError = true;
			BroadcastLog("MPD - Segment Template Missing");
			return;
		}

		var xmlSegmentTemplate = xmlSegmentTemplates[0];
		var segmentTemplate = {};
		segmentTemplate.timescale = _mpd.ParseInt( xmlSegmentTemplate, 'timescale' );
		segmentTemplate.duration = _mpd.ParseInt( xmlSegmentTemplate, 'duration' );
		segmentTemplate.startNumber = _mpd.ParseInt( xmlSegmentTemplate, 'startNumber' );
		segmentTemplate.media = $J( xmlSegmentTemplate ).attr( 'media' );
		segmentTemplate.initialization = $J( xmlSegmentTemplate ).attr( 'initialization' );
		if ( !segmentTemplate.timescale || !segmentTemplate.duration || !segmentTemplate.startNumber || !segmentTemplate.media || !segmentTemplate.initialization )
		{
			bError = true;
			BroadcastLog("MPD - Segment Template Data Missing");
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
				representation.frameRate = $J( xmlRepresentation ).attr( 'frameRate' );
				if ( !representation.id || !representation.mimeType || !representation.codecs || !representation.bandwidth  )
				{
					bError = true;
					BroadcastLog("MPD - Representation Video Data Missing");
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
					BroadcastLog("MPD - Representation Audio Data Missing");
					return;
				}
		}

			adaptationSet.representations.push( representation );
		});

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

CMPDParser.GetSegmentForTime = function( adaptationSet, unLiveEdge )
{
	// currently only support all segments having the same duration
	var unSegmentDuration = (adaptationSet.segmentTemplate.duration / adaptationSet.segmentTemplate.timescale) * 1000;
	return Math.floor( unLiveEdge / unSegmentDuration ) + 1;
}

CMPDParser.prototype.GetPeriodDuration = function( unPeriod )
{
	if ( unPeriod < this.periods.length && this.periods[unPeriod].duration )
		return this.periods[unPeriod].duration;
	else
		return 0;
}

/////////////////////////////////////////////////////////////////
// UI
/////////////////////////////////////////////////////////////////
function CBroadcastPlayerUI( player )
{
	this.m_bHidden = false;
	this.m_player = player;
	this.m_elOverlay = null;
	this.m_elLiveBanner = null;
	this.m_elVideoWrapper = null;
	this.m_elContainer = null;
	this.m_timeoutHide = null;
	this.m_bPlayingLiveEdge = true;
	this.m_elVideoTitle = null;
	this.m_elBufferingMessage = null;
}

CBroadcastPlayerUI.s_overlaySrc =	'<div class="html5_video_overlay">' +
									'<div class="play_button play"></div>' +
									'<div class="control_container">' +
									'<div class="fullscreen_button"></div>' +
									'<div class="time"></div>' +
									'<div class="live_button"></div>' +
									'<div class="representation_audio"></div>' +
									'<div class="representation_video"></div>' +
									'<div class="volume_icon"></div>' +
									'<div class="volume_slider">' +
									'<div class="volume_handle"></div>' +
									'</div>' +
									'</div>' +
									'<div class="progress_bar_wrapper">' +
									'<div class="progress_bar_container">' +
									'<div class="progress_bar_background"></div>' +
									'<div class="progress_bar"></div>' +
									'</div>' +
									'</div>' +
									'</div>';

CBroadcastPlayerUI.prototype.Init = function()
{
	var _ui = this;
	var _overlay = this.parentNode;

	this.m_elContainer = $J( this.m_player.m_elVideoPlayer.parentNode );

	this.m_elOverlay = $J( CBroadcastPlayerUI.s_overlaySrc );
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
	$J( '.volume_slider', _overlay ).on( 'click', function(e) { _ui.OnVolumeClick( e, this ); } );
	$J( '.volume_slider', _overlay ).on( 'mousedown', function(e) { _ui.OnVolumeStartDrag( e, this ); } );
	$J( '.volume_slider', _overlay ).on( 'mouseup', function(e) { _ui.OnVolumeStopDrag( e, this ); } );
	$J( '.volume_slider', _overlay ).on( 'mouseleave', function(e) { _ui.OnVolumeStopDrag( e, this ); } );

	$J( '.volume_icon', _overlay ).on( 'click', function(e) { _ui.ToggleMute( e, this ); });
	$J( '.fullscreen_button', _overlay ).on( 'click', function(e) { _ui.ToggleFullscreen(); });
	$J( '.progress_bar_container', _overlay ).on( 'click', function(e) { _ui.OnProgressClick( e, this ); });

	this.LoadVolumeSettings();
}

CBroadcastPlayerUI.prototype.OnVideoInitialized = function()
{
	var _ui = this;
	if ( this.m_player.BIsLiveContent() )
	{
		if ( !this.m_elLiveBanner )
		{
			this.m_elLiveBanner = $J( '<div class="VideoLiveBanner"></div>' );
			this.m_elLiveBanner.on( 'click', function() { _ui.JumpToLive(); } );
			this.m_elContainer.append( this.m_elLiveBanner );
		}
	}
	else if ( this.m_elLiveBanner )
	{
		this.m_elLiveBanner.remove();
		this.m_elLiveBanner = null;
	}

	if ( !this.m_elBufferingMessage )
	{
		this.m_elBufferingMessage = $J( '<div id="VideoBufferingMessage"></div>' );
		this.m_elContainer.append( this.m_elBufferingMessage );
	}

	if ( !this.m_elVideoTitle )
	{
		this.m_elVideoTitle = $J( '<div id="VideoTitleBanner"></div>' );
		this.m_elContainer.append( this.m_elVideoTitle );
	}

	this.InitRepresentationsInUI();
}

CBroadcastPlayerUI.prototype.InitRepresentationsInUI = function()
{
   	var _ui = this;
	rgRepresentation = this.m_player.GetRepresentationsArray( true );

	// show selector if only more than one video representation
	if (rgRepresentation.length > 2)
	{
		$J( '.representation_video').append('<select id="representation_select_video" class="representation_select"></select>');
		$J( '#representation_select_video').append('<option value="-1">Auto</option>');

		for (var r = 0; r < rgRepresentation.length; r += 2)
		{
			var strResolution = rgRepresentation[r] + ( rgRepresentation[r].toString().length > 1 ? 'p' : '');
			$J('#representation_select_video').append('<option value="' + ( r/2 ) + '">' + strResolution + ' (' + (rgRepresentation[r+1]/1000000).toFixed(1) + 'Mbs)</option>');
		}

		$J( '#representation_select_video option[value="-1"]').attr('selected', 'selected');

		$J( '#representation_select_video').on('change', function()
		{
			_ui.m_player.UpdateRepresentation(this.value, true);
			this.blur();
		} );
	}

	// got video, go get audio
	rgRepresentation = this.m_player.GetRepresentationsArray( false );

	// show selector if only more than one audio representation
	if (rgRepresentation.length > 2)
	{
		$J( '.representation_audio').append('<select id="representation_select_audio" class="representation_select"></select>');

		for (var r = 0; r < rgRepresentation.length; r += 2)
		{
			var strChannelInfo = rgRepresentation[r] + "-Ch";
			$J('#representation_select_audio').append('<option value="' + ( r/2 ) + '">' + strChannelInfo + " (" + Math.ceil(rgRepresentation[r+1]/1000) + "Kbs)</option>");
		}

		$J('#representation_select_audio option[value="-1"]').attr('selected', 'selected');

		$J( '#representation_select_audio').on('change', function()
		{
			_ui.m_player.UpdateRepresentation(this.value, false);
			this.blur();
		} );
	}
}

CBroadcastPlayerUI.prototype.Show = function()
{
	this.m_bHidden = false;
	clearTimeout( this.m_timeoutHide );
	$J( this.m_elContainer ).addClass( 'ShowPlayerUI' );

	this.OnTimeUpdatePlayer();
}

CBroadcastPlayerUI.prototype.Hide = function()
{
	var _ui = this;
	clearTimeout( this.m_timeoutHide );

	if ( !this.m_player.m_elVideoPlayer.paused )
	{
		this.m_timeoutHide = setTimeout( function()
		{
			_ui.m_bHidden = true;
			$J( _ui.m_elContainer ).removeClass( 'ShowPlayerUI' );
			$J( '.volume_slider', _ui.m_elOverlay ).off( 'mousemove' );

		}, 3000 );
	}
}

CBroadcastPlayerUI.prototype.OnMouseMovePlayer = function()
{
	this.Show();
	this.Hide();
}

CBroadcastPlayerUI.prototype.GetTimelineData = function()
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

CBroadcastPlayerUI.prototype.OnTimeUpdatePlayer = function()
{
	// buffering should show/hide no matter if the UI is on screen
	this.UpdateBufferingProgress();

	if ( this.m_bHidden )
		return;

	var elVideoPlayer = this.m_player.m_elVideoPlayer;
	var rgData = this.GetTimelineData();

	var nProgressPct = (( elVideoPlayer.currentTime - rgData.nTimeStart ) / (rgData.nTimeEnd - rgData.nTimeStart)) * 100;
	var nLoadedPct = (( rgData.nBufferedEnd - rgData.nTimeStart ) / (rgData.nTimeEnd - rgData.nTimeStart)) * 100;

	//BroadcastLog( 'bstart: ' + nBufferedStart + ', bend: ' + nBufferedEnd + ', tstart: ' + nTimeStart + ', tend: ' + nTimeEnd + ', progpct: ' + nProgressPct + ', loadpct: ' + nLoadedPct );

	if ( this.m_player.BIsLiveContent() )
	{
		$J( '.live_button' ).show();

		if ( this.m_bPlayingLiveEdge )
		{
			$J( this.m_elContainer ).addClass( 'LiveEdge' );
			nProgressPct = nLoadedPct;
		}
		else
		{
			$J( this.m_elContainer ).removeClass( 'LiveEdge' );
		}
	}
	else
	{
		$J( '.live_button' ).hide();
	}

	//BroadcastLog( 'bstart: ' + nBufferedStart + ', bend: ' + nBufferedEnd + ', tstart: ' + nTimeStart + ', tend: ' + nTimeEnd + ', progpct: ' + nProgressPct + ', loadpct: ' + nLoadedPct );

	$J( '.progress_bar', this.m_elOverlay ).stop().css( {'width': nProgressPct + '%'}, 200 );
	$J( '.progress_bar_background', this.m_elOverlay ).stop().css({'width': nLoadedPct + '%'}, 200);

	var timeString = SecondsToTime( elVideoPlayer.currentTime ) + " / " + SecondsToTime( rgData.nTimeEnd - rgData.nTimeStart );
	if ( this.m_player.BIsLiveContent() )
		timeString = SecondsToTime( elVideoPlayer.currentTime );

	$J( '.time', this.m_elOverlay ).text( timeString );

	// show adaptive value when selected
	var repVideo = $J("#representation_select_video");
	if ( repVideo != null && !repVideo.is(":focus") )
	{
		if ( repVideo.val() == -1 && this.m_player.m_nPlaybackHeight > 0)
		{
			$J( '#representation_select_video option:first' ).text("Auto (" + this.m_player.m_nPlaybackHeight + "p" + ")");
		}
		else
		{
			$J( '#representation_select_video option:first' ).text("Auto");
		}
	}
}

CBroadcastPlayerUI.prototype.UpdateBufferingProgress = function()
{
	var buffMsg = $J( '#VideoBufferingMessage');
	if ( this.m_player.BIsWaiting() && this.m_player.m_elVideoPlayer.readyState != CBroadcastPlayer.HAVE_NOTHING )
	{
		if ( this.m_player.GetPercentBuffered() != 100 )
			buffMsg.text("Loading (" + this.m_player.GetPercentBuffered() + "%)").show();
	}
	else
	{
		if (buffMsg.text() != "")
		{
			if ( buffMsg.queue() == 0 )
			{
				buffMsg.text("Loading (100%)");
				buffMsg.fadeOut(500, function()
				{
					buffMsg.text("");
				});
			}
		}
	}
}

CBroadcastPlayerUI.prototype.SetVideoTitle = function( strTitle )
{
	if ( $J('#VideoTitleBanner') )
		$J( '#VideoTitleBanner' ).text( strTitle );
}

CBroadcastPlayerUI.prototype.JumpToLive = function()
{
	if ( this.m_bPlayingLiveEdge )
		return;

	this.m_player.SeekToBufferedEnd();
	this.m_bPlayingLiveEdge = true;

	if ( this.m_player.m_elVideoPlayer.paused )
		this.TogglePlayPause();

	this.OnTimeUpdatePlayer();
}

CBroadcastPlayerUI.prototype.OnPlaying = function()
{
	$J( '.play_button', this.m_elOverlay ).removeClass( 'play' );
	$J( '.play_button', this.m_elOverlay ).addClass( 'pause' );

	this.Hide();
}

CBroadcastPlayerUI.prototype.OnPause = function()
{
	this.Show();
	this.m_bPlayingLiveEdge = false;
	this.OnTimeUpdatePlayer();
}

CBroadcastPlayerUI.prototype.TogglePlayPause = function()
{
	var elVideoPlayer = this.m_player.m_elVideoPlayer;
	if( elVideoPlayer.paused )
	{
		elVideoPlayer.play();
		$J( '.play_button', this.m_elOverlay ).addClass( 'pause' );
		$J( '.play_button', this.m_elOverlay ).removeClass( 'play' );
	}
	else
	{
		elVideoPlayer.pause();
		$J( '.play_button', this.m_elOverlay ).addClass( 'play' );
		$J( '.play_button', this.m_elOverlay ).removeClass( 'pause' );
	}
}

CBroadcastPlayerUI.prototype.OnMouseEnterOverlay = function()
{
	clearTimeout( this.m_timeoutHide );
}

CBroadcastPlayerUI.prototype.OnMouseLeaveOverlay = function( e )
{
	var relTarget = e.relatedTarget ? e.relatedTarget : e.toElement;
	if ( this.m_player.m_elVideoPlayer == relTarget )
		return;

	this.Hide();
}

CBroadcastPlayerUI.prototype.OnVolumeClick = function( e, ele )
{
	var parentOffset = $J( ele ).offset();
	var relX = e.pageX - parentOffset.left;
	var volume =  relX / 80 ;

	this.SetVolume( volume );

	if( this.m_player.m_elVideoPlayer.muted )
		this.ToggleMute();
}

CBroadcastPlayerUI.prototype.SetVolume = function( value )
{
	value = Math.min( Math.max( value, 0 ), 1 );
	this.m_player.m_elVideoPlayer.volume = value;
	var sliderX = value * 80 - 2;
	$J( '.volume_handle', this.m_elOverlay ).css( {'left': sliderX + "px"} );

	WebStorage.SetLocal( 'video_volume', value );
}

CBroadcastPlayerUI.prototype.OnVolumeStartDrag = function( e, ele )
{
	var _ui = this;
	$J( '.volume_slider', this.m_elOverlay ).on( 'mousemove', function(e) { _ui.OnVolumeClick( e, this ); } );
	e.originalEvent.preventDefault();
}

CBroadcastPlayerUI.prototype.OnVolumeStopDrag = function( e, ele )
{
	$J( '.volume_slider', this.m_elOverlay ).off( 'mousemove' );
}

CBroadcastPlayerUI.prototype.ToggleMute = function( e, ele )
{
	var elVideoPlayer = this.m_player.m_elVideoPlayer;
	elVideoPlayer.muted = !elVideoPlayer.muted;

	WebStorage.SetLocal( 'video_mute', elVideoPlayer.muted );

	if( elVideoPlayer.muted )
	{
		$J( '.volume_icon',this.m_elOverlay ).addClass( 'muted' );
		$J( '.volume_handle', this.m_elOverlay ).css({ 'left': "0px" });
	}
	else
	{
		$J( '.volume_icon',this.m_elOverlay ).removeClass( 'muted' );
		this.SetVolume( elVideoPlayer.volume );
	}
}

CBroadcastPlayerUI.prototype.ToggleFullscreen = function()
{
	var elContainer = this.m_elOverlay[0].parentNode;
	var bFullscreen = document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen;

	if( !bFullscreen )
	{
		if( elContainer.requestFullscreen )
			elContainer.requestFullscreen();
		else if( elContainer.webkitRequestFullScreen )
			elContainer.webkitRequestFullScreen( Element.ALLOW_KEYBOARD_INPUT );
		else if( elContainer.mozRequestFullScreen )
			elContainer.mozRequestFullScreen();

		$J( elContainer ).addClass( 'Fullscreen' );
	}
	else
	{
		if( document.cancelFullscreen )
			document.cancelFullscreen();
		else if( document.webkitCancelFullScreen )
			document.webkitCancelFullScreen();
		else if( document.mozCancelFullScreen )
			document.mozCancelFullScreen();

		$J( elContainer ).removeClass( 'Fullscreen' );
	}
}

CBroadcastPlayerUI.prototype.OnFullScreenChange = function()
{
	var _ui = this;
	var bFullscreen = document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen;
	if ( bFullscreen )
	{
		$J( document ).on( 'keydown', function( e )
		{
			var bFullscreen = document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen;
			if ( e.keyCode == 27 && bFullscreen )
				_ui.ToggleFullscreen();
		});
	}
	else
	{
		$J( document ).off( 'keydown' );
		$J( this.m_elContainer ).removeClass( 'Fullscreen' );
	}
}

CBroadcastPlayerUI.prototype.OnProgressClick = function( e, ele )
{
	var elVideoPlayer = this.m_player.m_elVideoPlayer;
	var parentOffset = $J(ele).offset();
	var barWidth = $J(ele).innerWidth();
	var relX = e.pageX - parentOffset.left;
	var nPercent =  relX / barWidth;

	var rgData = this.GetTimelineData();
	var nSeekTo = ((rgData.nTimeEnd - rgData.nTimeStart) * nPercent) + rgData.nTimeStart;

	if (this.m_player.BIsLiveContent())
	{
		nSeekTo = Math.min( nSeekTo, rgData.nBufferedEnd );
	}

	if ( this.m_player.BIsLiveContent() && ( rgData.nBufferedEnd - nSeekTo < CBroadcastPlayer.TRACK_BUFFER_MS / 1000 * 2 ) )
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

CBroadcastPlayerUI.prototype.LoadVolumeSettings = function()
{
	var nLastVolume = WebStorage.GetLocal('video_volume');
	if( nLastVolume == null )
		nLastVolume = 1;

	this.SetVolume( nLastVolume );

	var nLastMute = WebStorage.GetLocal('video_mute' );
	if ( nLastMute == null )
		nLastMute = false;

	if ( nLastMute != this.m_player.m_elVideoPlayer.muted )
		this.ToggleMute();
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


