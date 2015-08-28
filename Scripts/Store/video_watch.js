
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


var CVideoWatch = function( eClientType, appId, rtRestartTime, strLanguage, viewerSteamID, strVideoId )
{
	this.m_eClientType = eClientType;
	this.m_elVideoPlayer = document.getElementById( 'videoplayer' );
	this.m_nAppId = appId;
	this.m_strVideoId = strVideoId;
	this.m_strVideoTitle = appId;
	this.m_DASHPlayerStats = null;
	this.m_rtRestartTime = rtRestartTime;
	this.m_strLanguage = strLanguage;
	this.m_nVideoRestarts = 0;
	this.m_nViewerSteamID = viewerSteamID;
	this.m_eUIMode = CDASHPlayerUI.eUIModeDesktop;
	this.m_bHDCPErrorReported = false;
}

CVideoWatch.k_InBrowser = 1;
CVideoWatch.k_InClient = 2;
CVideoWatch.k_InOverlay = 3;
CVideoWatch.k_InOldClient = 4;
CVideoWatch.k_InHTML5AppWrapper = 5;
CVideoWatch.k_InHTML5AppWrapperTenFoot = 6;

CVideoWatch.k_MaximumVideoRestarts = 3;


CVideoWatch.prototype.ToggleStats = function()
{
	if ( this.m_DASHPlayerStats )
		this.m_DASHPlayerStats.Toggle();
}

CVideoWatch.prototype.ShowVideoError = function( strError )
{
	if ( $J( '#page_contents' ).hasClass( 'show_player' ) )
	{
		$J( '#video_loaded_text' ).html( strError );
		$J( '#video_loaded_text' ).addClass( 'error' );
		$J( '#page_contents' ).addClass( 'loading_video' );
		$J( '.loaded_wrapper' ).show();
	}
	else
	{
		$J( '#page_loading_text' ).html( strError );
		$J( '#page_loading_text' ).addClass( 'error' );
		$J( '#loading_content' ).addClass( 'hide_throbber' );
		$J( '#loading_content' ).css( 'z-index', '2' );
	}
}

CVideoWatch.prototype.SetVideoLoadingText = function( strText )
{
	if ( $J( '#page_contents' ).hasClass( 'show_player' ) )
	{
		$J( '#video_loaded_text' ).html( strText  );
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
		this.ShowVideoError( 'You must update your version of the Steam client to watch this video.<br><br><a href="https://support.steampowered.com/kb_article.php?ref=8699-OASD-1871">Visit the FAQ</a> for more information on resolving this issue.' );
		return;
	}

	window.open( 'steam://unlockh264/' );
	this.SetVideoLoadingText( 'Updating Steam... One Moment Please.' );
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
		this.ShowVideoError( 'Failed to apply a Steam update that is required to watch this video.<br><br>Please ensure your Steam client is connected to Steam and try again.' );
		return;
	}

	var _watch = this;
	setTimeout( function() { _watch.WaitUnlockH264( rtStart ); }, 5000 );
}

CVideoWatch.prototype.BlockedPlaybackMessage = function()
{
	this.ShowVideoError( 'Streaming Videos can only be watched in the Steam Client.' );
}

CVideoWatch.prototype.Start = function()
{
	var _watch = this;

	if ( this.m_eClientType == CVideoWatch.k_InOldClient )
	{
		this.ShowVideoError( 'You must update your version of the Steam client to watch this video.<br><br><a href="https://support.steampowered.com/kb_article.php?ref=8699-OASD-1871">Visit the FAQ</a> for more information on resolving this issue.' );
		return;
	}

	if ( !BMediaSourceExtensionsSupported() )
	{
		if ( this.m_eClientType != CVideoWatch.k_InBrowser )
		{
			this.UnlockH264();
			return;
		}

		this.ShowVideoError( 'Your web browser does not support the minimum set of features required to watch this video.<br><br>Try again using the latest version of the Steam Client or <a href="https://support.steampowered.com/kb_article.php?ref=8699-OASD-1871">visit the FAQ</a> for a list of supported browsers.' );
		return;
	}

	this.SetVideoLoadingText( 'Preparing to Stream Video... One Moment Please.' );

		CDASHPlayer.TRACK_BUFFER_MAX_SEC = 4 * 60;

	this.m_player = new CDASHPlayer( this.m_elVideoPlayer );
	this.m_player.SetUniqueId( this.m_nAppId + '/' + this.m_strVideoId );
	this.m_eUIMode = ( this.m_eClientType == CVideoWatch.k_InHTML5AppWrapperTenFoot ) ? CDASHPlayerUI.eUIModeTenFoot : CDASHPlayerUI.eUIModeDesktop;
	this.m_playerUI = new CDASHPlayerUI( this.m_player, this.m_eUIMode );
	this.m_playerUI.SetUniqueSettingsID( this.m_nAppId );
   	this.m_playerUI.Init();

   	this.m_DASHPlayerStats = new CDASHPlayerStats( this.m_elVideoPlayer, this.m_player, this.m_nViewerSteamID );

	$J( this.m_elVideoPlayer ).on( 'bufferingcomplete.VideoWatchEvents', function() { _watch.OnPlayerBufferingComplete(); } );
	$J( this.m_elVideoPlayer ).on( 'downloadfailed.VideoWatchEvents', function() { _watch.OnPlayerDownloadFailed(); } );
	$J( this.m_elVideoPlayer ).on( 'playbackerror.VideoWatchEvents', function() { _watch.OnPlayerPlaybackError(); } );
	$J( this.m_elVideoPlayer ).on( 'drmerror.VideoWatchEvents', function() { _watch.OnPlayerDRMError(); } );
	$J( this.m_elVideoPlayer ).on( 'hdcperror.VideoWatchEvents', function() { _watch.OnPlayerHDCPError(); } );
	$J( this.m_elVideoPlayer ).on( 'logevent.VideoWatchEvents', function( e, strEventName, strEventDesc ) { _watch.OnLogEventToServer( strEventName, strEventDesc ); } );
	$J( this.m_elVideoPlayer ).on( 'waitingforwidevine.VideoWatchEvents', function() { _watch.SetVideoLoadingText( 'Retrieving additional components required for playback.<br><br>This may take up to 60 seconds.' ); } );
	$J( this.m_elVideoPlayer ).on( 'completedwidevine.VideoWatchEvents', function() { _watch.SetVideoLoadingText( 'Preparing to Stream Video... One Moment Please.' ); } );

	this.GetVideoDetails();
}

CVideoWatch.prototype.OnPlayerBufferingComplete = function()
{
	$J( '#page_contents' ).removeClass( 'loading_video' );
	$J( '#page_contents' ).addClass( 'show_player' );

	this.m_playerUI.SetVideoTitle( this.m_strVideoTitle );
	document.title = this.m_strVideoTitle + ' :: Steam';

	// options that need setting on playback start
	this.SetClosedCaptionLanguage();
	this.m_playerUI.SetPlayerPlaybackRate();

	$J( this.m_elVideoPlayer ).off( 'bufferingcomplete.VideoWatchEvents' );
}

CVideoWatch.prototype.OnPlayerDownloadFailed = function()
{
	this.m_nVideoRestarts++;
	if ( this.m_nVideoRestarts > CVideoWatch.k_MaximumVideoRestarts )
	{
		if ( this.m_eUIMode == CDASHPlayerUI.eUIModeDesktop )
			this.ShowVideoError( 'An unexpected network error occurred while trying to stream this video.<br><br><a href="https://support.steampowered.com/kb_article.php?ref=8699-OASD-1871">Visit the FAQ</a> for troubleshooting information.' );
		else
			this.ShowVideoError( 'An unexpected network error occurred while trying to stream this video.<br><br>Press Q or the Back button to Exit.' );

		this.OnLogEventToServer( 'Download Failed', '' );
	}
	else
	{
		var _watch = this;
		this.ShowVideoError( 'Reestablishing Stream... One Moment Please.' );
		this.OnLogEventToServer( 'Reconnection', '' );
		$J( this.m_elVideoPlayer ).on( 'bufferingcomplete.VideoWatchEvents', function() { _watch.OnPlayerBufferingComplete(); } );
		this.GetVideoDetails();
	}
}

CVideoWatch.prototype.OnPlayerPlaybackError = function()
{
	this.ShowVideoError( 'An unexpected error occurred while trying to play this video.<br><br><a href="https://support.steampowered.com/kb_article.php?ref=8699-OASD-1871">Visit the FAQ</a> for troubleshooting information.' );
	this.OnLogEventToServer( 'Playback Error', '' );
}

CVideoWatch.prototype.OnPlayerDRMError = function()
{
	this.ShowVideoError( 'This video requires a license to play which cannot currently be retrieved. Please try again in a few minutes.<br><br>You may also need to update your Steam Client to watch this video.' );
	this.OnLogEventToServer( 'DRM Error', '' );
}

CVideoWatch.prototype.OnPlayerHDCPError = function()
{
	if ( !this.m_bHDCPErrorReported )
	{
		this.ShowVideoError( 'This video cannot be played because one or more of your displays do not support High-Bandwidth Digital Content Protection (HDCP).<br><br><a href="https://support.steampowered.com/kb_article.php?ref=8699-OASD-1871">Visit the FAQ</a> for more information on resolving this issue.' );
		this.OnLogEventToServer( 'HDCP Error', '' );
		this.m_bHDCPErrorReported = true;
	}
}

CVideoWatch.prototype.OnLogEventToServer = function( strEventName, strEventDesc )
{
	if ( this.m_DASHPlayerStats )
		this.m_DASHPlayerStats.LogEventToServer( CDASHPlayerStats.LOGTYPE_EVENT, false, strEventName, strEventDesc );
}

CVideoWatch.prototype.GetVideoDetails = function()
{
	$J( '#page_contents' ).addClass( 'loading_video' );
	$J( '#loading_content' ).css( 'z-index', '0' );

	var _watch = this;

	$J.ajax( {
		url: 'https://store.steampowered.com/video/details/' + _watch.m_nAppId + '/' + _watch.m_strVideoId,
		type: 'GET'
	})
	.done( function( data )
	{
		if ( data.success == 'ready' )
		{
			_watch.LoadVideoMPD( data.video_url );
			_watch.m_strVideoTitle = data.video_title;
		}
		else if ( data.success == 'error' )
		{
			switch ( data.error_code )
			{
				case 8:
					_watch.ShowVideoError( 'This application is not a video and cannot be streamed.' );
					break;
				case 9:
					_watch.ShowVideoError( 'This video has not been processed for streaming.' );
					break;
				case 15:
					_watch.ShowVideoError( 'The video could not be accessed. <br><br>Please ensure you are logged in and own this video.' );
					break;
				case 16:
					_watch.ShowVideoError( 'This video is not currently available to stream.' );
					break;
				case 20:
					_watch.ShowVideoError( 'The video service is not available.' );
					break;
				case 82:
					_watch.ShowVideoError( 'Streaming Videos can only be watched in the Steam Client.' );
					break;
				default:
					if ( _watch.m_eUIMode == CDASHPlayerUI.eUIModeDesktop )
						_watch.ShowVideoError( 'An unexpected error occurred while trying to play this video.<br><br><a href="https://support.steampowered.com/kb_article.php?ref=8699-OASD-1871">Visit the FAQ</a> for troubleshooting information.' + '<br><br>Error Code: ' + data.error_code );
					else
						_watch.ShowVideoError( 'An unexpected error occurred while trying to play this video.<br><br>Press Q or the Back button to Exit.' + '<br><br>Error Code: ' + data.error_code );
					break;
			}
		}
	})
	.fail( function()
	{
		if ( _watch.m_eUIMode == CDASHPlayerUI.eUIModeDesktop )
			_watch.ShowVideoError( 'An unexpected error occurred while trying to play this video.<br><br><a href="https://support.steampowered.com/kb_article.php?ref=8699-OASD-1871">Visit the FAQ</a> for troubleshooting information.' );
		else
			_watch.ShowVideoError( 'An unexpected error occurred while trying to play this video.<br><br>Press Q or the Back button to Exit.' );
	});
}

CVideoWatch.prototype.LoadVideoMPD = function( url )
{
	this.m_player.Close();
	this.m_DASHPlayerStats.Reset();
	this.SetResumeTimeForAppID();
	var bUseMpdRelativePathForSegments = false;
	this.m_player.PlayMPD( url, bUseMpdRelativePathForSegments );
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

CVideoWatch.prototype.SetClosedCaptionLanguage = function()
{
	var strClosedCaptionCode = CDASHPlayerUI.GetSavedClosedCaptionLanguage( this.m_nAppId );
	if ( !strClosedCaptionCode )
	{
		for ( strCode in CVTTCaptionLoader.LanguageCountryCodes )
		{
			if ( CVTTCaptionLoader.LanguageCountryCodes[strCode].steamLanguage.toUpperCase() == this.m_strLanguage.toUpperCase() )
			{
				if ( this.m_player.GetLanguageForAudioTrack() == strCode )
					strClosedCaptionCode = CDASHPlayerUI.CLOSED_CAPTIONS_NONE;
				else
					strClosedCaptionCode = strCode;

				break;
			}
		}
	}

	if ( strClosedCaptionCode )
	{
		this.m_playerUI.SetClosedCaptionLanguageInUI( strClosedCaptionCode );
		this.m_playerUI.SwitchClosedCaptionLanguageInPlayer( strClosedCaptionCode );
		this.m_playerUI.SaveClosedCaptionLanguage();
	}
}

