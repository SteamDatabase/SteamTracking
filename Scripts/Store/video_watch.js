
function BMediaSourceExtensionsSupported()
{
	var bSupported = false;
	try
	{
		bSupported = MediaSource.isTypeSupported( 'video/mp4;codecs="avc1.4d4032,mp4a.40.2"' );
	}
	catch (e)
	{
	}

	return bSupported;
}


var CVideoWatch = function( eClientType, appId, rtRestartTime, strLanguage )
{
	this.m_eClientType = eClientType;
	this.m_elVideoPlayer = document.getElementById( 'videoplayer' );
	this.m_nAppId = appId;
	this.m_strVideoTitle = appId;
	this.m_HTML5VideoStats = null;
	this.m_rtRestartTime = rtRestartTime;
	this.m_strLanguage = strLanguage;
	this.m_nVideoRestarts = 0;
}

CVideoWatch.k_InBrowser = 1;
CVideoWatch.k_InClient = 2;
CVideoWatch.k_InOverlay = 3;
CVideoWatch.k_InOldClient = 4;
CVideoWatch.k_InHTML5AppWrapper = 5;

CVideoWatch.k_MaximumVideoRestarts = 3;

CVideoWatch.prototype.ToggleStats = function()
{
	if ( this.m_HTML5VideoStats )
		this.m_HTML5VideoStats.Toggle();
}

CVideoWatch.prototype.ShowVideoError = function( strError )
{
	if ( $J( '#page_contents' ).hasClass( 'show_player' ) )
	{
		$J( '#video_loading_text' ).html( strError );
		$J( '#video_loading_text' ).addClass( 'error' );
		$J( '#page_contents' ).addClass( 'loading_video' );
		$J( '.loading_wrapper' ).show();
	}
	else
	{
		$J( '#page_loading_text' ).html( strError );
		$J( '#page_loading_text' ).addClass( 'error' );
		$J( '#loading_content' ).addClass( 'hide_throbber' );
	}
}

CVideoWatch.prototype.SetVideoLoadingText = function( strText )
{
	if ( $J( '#page_contents' ).hasClass( 'show_player' ) )
	{
		$J( '#video_loading_text' ).html( strText  );
	}
	else
	{
		$J('#page_loading_text').html( strText );
	}
}

CVideoWatch.prototype.UnlockH264 = function()
{
	if ( this.m_eClientType == CVideoWatch.k_InOldClient )
	{
		this.ShowVideoError( 'You must opt into the beta version of the Steam client to watch this video.<br><br><a href="https://support.steampowered.com/kb_article.php?ref=3252-WEUN-2306">Visit the FAQ</a> for instructions on how to opt into the latest beta client.' );
		return;
	}

	window.open( 'steam://unlockh264/' );
	this.SetVideoLoadingText( 'Updating Steam...' );
	this.WaitUnlockH264( Date.now() );
}

CVideoWatch.prototype.WaitUnlockH264 = function( rtStart )
{
	if ( BMediaSourceExtensionsSupported() )
	{
		this.Start();
		return;
	}

	if ( Date.now() - rtStart > 30000 )
	{
		this.ShowVideoError( 'Failed to apply a Steam update that is required to watch this video.<br><br>Please ensure your client is connected to Steam and try again.' );
		return;
	}

	var _watch = this;
	setTimeout( function() { _watch.WaitUnlockH264( rtStart ); }, 5000 );
}

CVideoWatch.prototype.Start = function()
{
	var _watch = this;

	if ( this.m_eClientType == CVideoWatch.k_InOldClient )
	{
		this.ShowVideoError( 'You must opt into the beta version of the Steam client to watch this video.<br><br><a href="https://support.steampowered.com/kb_article.php?ref=3252-WEUN-2306">Visit the FAQ</a> for instructions on how to opt into the latest beta client.' );
		return;
	}

	if ( !BMediaSourceExtensionsSupported() )
	{
		if ( this.m_eClientType != CVideoWatch.k_InBrowser )
		{
			this.UnlockH264();
			return;
		}

		this.ShowVideoError( 'Your web browser does not support the minimum set of features required to watch this video.<br><br>Try again using the beta version of the Steam Client or <a href="https://support.steampowered.com/kb_article.php?ref=3252-WEUN-2306">visit the FAQ</a> for a list of supported browsers.' );
		return;
	}

		CDASHPlayer.TRACK_BUFFER_MAX_SEC = 4 * 60;

	this.m_player = new CDASHPlayer( this.m_elVideoPlayer );
	this.m_playerUI = new CDASHPlayerUI( this.m_player );
	this.m_playerUI.SetUniqueSettingsID( this.m_nAppId );
   	this.m_playerUI.Init();

   	this.m_HTML5VideoStats = new CHTML5VideoStats( this.m_elVideoPlayer, this.m_player );

	$J( this.m_elVideoPlayer ).on( 'bufferingcomplete.VideoWatchEvents', function() { _watch.OnPlayerBufferingComplete( _watch.m_player ); } );
	$J( this.m_elVideoPlayer ).on( 'downloadfailed.VideoWatchEvents', function() { _watch.OnPlayerDownloadFailed(); } );
	$J( this.m_elVideoPlayer ).on( 'playbackerror.VideoWatchEvents', function() { _watch.OnPlayerPlaybackError(); } );

	this.GetVideoDetails();
}

CVideoWatch.prototype.OnPlayerBufferingComplete = function( player )
{
	$J( '#page_contents' ).removeClass( 'loading_video' );

	this.m_playerUI.SetVideoTitle( this.m_strVideoTitle );
	document.title = this.m_strVideoTitle + ' :: Steam';

	this.SetClosedCaptionFromSteamLanguage( player );

	$J( this.m_elVideoPlayer ).off( 'bufferingcomplete.VideoWatchEvents' );
}

CVideoWatch.prototype.OnPlayerDownloadFailed = function()
{
	this.m_nVideoRestarts++;
	if ( this.m_nVideoRestarts > CVideoWatch.k_MaximumVideoRestarts )
	{
		this.ShowVideoError( 'An unexpected network error occurred while trying to stream this video.' );
	}
	else
	{
		$J( '#video_loading_text' ).text( 'Loading...' );
		this.GetVideoDetails();
		$J( '#page_contents' ).removeClass( 'loading_video' );
	}
}

CVideoWatch.prototype.OnPlayerPlaybackError = function()
{
	this.ShowVideoError( 'An unexpected error occurred while trying to play this video.' );
}

CVideoWatch.prototype.GetVideoDetails = function()
{
	$J( '#page_contents' ).addClass( 'loading_video' );

	var _watch = this;

	$J.ajax( {
		url: 'https://store.steampowered.com/video/details/' + _watch.m_nAppId,
		type: 'GET'
	})
	.done( function( data )
	{
		if ( data.success == 'ready' )
		{
			_watch.LoadVideoMPD( data.video_url );
			_watch.m_strVideoTitle = data.video_title;
			$J( '#page_contents' ).addClass( 'show_player' );
		}
		else if ( data.success == 'error' )
		{
			switch ( data.error_code )
			{
				case 15:
					_watch.ShowVideoError( 'The video could not be accessed. <br><br>Please ensure you are logged in and own this video.' );
					break;
				case 16:
					_watch.ShowVideoError( 'The video is not currently available.' );
					break;
				case 20:
					_watch.ShowVideoError( 'The video service is not available.' );
					break;
				default:
					_watch.ShowVideoError( 'An unexpected error occurred while trying to play this video.' + ' Code: ' + data.error_code );
			}
		}
	})
	.fail( function()
	{
		_watch.ShowVideoError( 'An unexpected error occurred while trying to play this video.' );
	});
}

CVideoWatch.prototype.LoadVideoMPD = function( url )
{
	this.m_player.Close();
	this.SetResumeTimeForAppID();
	this.m_player.PlayMPD( url );
}

CVideoWatch.prototype.SetResumeTimeForAppID = function()
{
	if ( this.m_rtRestartTime > -1 )
	{
		this.m_player.SetVODResumeTime( this.m_rtRestartTime );
		this.m_rtRestartTime = -1;
	}
	else
	{
		var unLastTimeIndicator = WebStorage.GetLocal( "steam_video_watch_last_time_indicator_" + this.m_nAppId );
		if ( unLastTimeIndicator )
		{
			this.m_player.SetVODResumeTime( unLastTimeIndicator );
		}
	}

		var _watch = this;
	$J( this.m_elVideoPlayer ).on( 'timeupdate.VideoWatchEvents', function() { _watch.OnTimeUpdatePlayer(); } );
}

CVideoWatch.prototype.OnTimeUpdatePlayer = function()
{
	WebStorage.SetLocal( "steam_video_watch_last_time_indicator_" + this.m_nAppId, parseInt( this.m_player.m_elVideoPlayer.currentTime.toFixed(0) ) );
}

CVideoWatch.prototype.SetClosedCaptionFromSteamLanguage = function( player )
{
	var strClosedCaptionCode = CDASHPlayerUI.GetSavedClosedCaptionLanguage( this.m_nAppId );
	if ( !strClosedCaptionCode )
	{
		for ( strCode in CVTTCaptionLoader.LanguageCountryCodes )
		{
			if ( CVTTCaptionLoader.LanguageCountryCodes[strCode].steamLanguage.toUpperCase() == this.m_strLanguage.toUpperCase() )
			{
				if ( player.GetLanguageForAudioTrack() == strCode )
					strClosedCaptionCode = CDASHPlayerUI.s_ClosedCaptionsNone;
				else
					strClosedCaptionCode = strCode;

				break;
			}
		}
	}

	if ( strClosedCaptionCode )
	{
		CDASHPlayerUI.SetClosedCaptionLanguageInUI( strClosedCaptionCode );
		player.UpdateClosedCaption( strClosedCaptionCode );
	}
}

//////////////////////////////////////////////////
// Stats
//////////////////////////////////////////////////
CHTML5VideoStats = function( element, videoPlayer )
{
	this.elePlayer = element;
	this.eleOverlay = $J('<div class="video_watch_playback_stats"><strong>Playback Stats</strong></div>')[0];
	$J(this.elePlayer).parent().append( this.eleOverlay );
	this.videoPlayer = videoPlayer;

	this.timerTick = false;
	this.timerSecond = false;
	this.nDecodedFramesPerSecond = 0;
	this.bRunning = false;

	this.strResolution = '';
	this.strVideoBuffered = '';
	this.strAudioBuffered = '';
	this.strBandwidth = '';
	this.strBuffers = '';
}

CHTML5VideoStats.prototype.Show = function() {
	if( this.bRunning )
		return;

	this.bRunning = true;

	$J(this.eleOverlay).show();
	var context = this;
	this.timerTick = setInterval( function() { context.Tick() }, 1000/60 );
	this.timerCalculateTotals = setInterval(function() { context.CalculateTotals() }, 500);
}

CHTML5VideoStats.prototype.Hide = function() {
	if( !this.bRunning )
		return;

	this.bRunning = false;

	$J(this.eleOverlay).hide();
	clearInterval(this.timerTick);
	clearInterval(this.timerCalculateTotals);
}

CHTML5VideoStats.prototype.Toggle = function() {
	if( this.bRunning )
		this.Hide();
	else
		this.Show();
}

CHTML5VideoStats.prototype.CalculateTotals = function()
{
	// runs on a 500ms timer, so frame counts must be multiplied by 2.
	this.nDecodedFramesPerSecond = 2 * ( ( ele.mozDecodedFrames || ele.webkitDecodedFrames || ele.webkitDecodedFrameCount ) - ( this.nLastDecodedFrames || 0 ) )
	this.nLastDecodedFrames = ( ele.mozDecodedFrames || ele.webkitDecodedFrames || ele.webkitDecodedFrameCount );

	this.strResolution = this.videoPlayer.StatsPlaybackWidth() + 'x' + this.videoPlayer.StatsPlaybackHeight() + ' (' + $J(this.elePlayer).innerWidth() + 'x' + $J(this.elePlayer).innerHeight() + ')';
	this.strVideoBuffered = this.videoPlayer.StatsVideoBuffer() + 's';
	this.strAudioBuffered = this.videoPlayer.StatsAudioBuffer() + 's';
	this.strBandwidth = this.videoPlayer.StatsCurrentDownloadBitRate() * 1000;
	this.strBuffers = this.videoPlayer.StatsBufferInfo();
}

CHTML5VideoStats.prototype.FormattingBytesToHuman = function ( nBytes )
{
	if( nBytes < 1000 )
		return nBytes + " B";
	if( nBytes < 1000000 )
		return ( nBytes / 1000 ).toFixed(2) + ' KB';

	if( nBytes < 1000000000)
		return ( nBytes / 1000000 ).toFixed(2) + ' MB';

	return (nBytes / 1000000000 ).toFixed(2) + ' GB';
}

CHTML5VideoStats.prototype.Tick = function() {
	$ele = $J(this.elePlayer);
	ele = this.elePlayer;
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
		}

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


