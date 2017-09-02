
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


var CVideoWatch = function( options )
{
	this.m_eClientType = options.clientType;
	this.m_elVideoPlayer = document.getElementById( 'videoplayer' );
	this.m_nAppId = options.appID;
	this.m_strVideoId = options.videoID;
	this.m_strVideoTitle = options.videoTitle;
	this.m_DASHPlayerStats = null;
	this.m_rtRestartTime = options.startAt;
	this.m_strLanguage = options.language;
	this.m_nVideoRestarts = 0;
	this.m_nViewerSteamID = options.steamID;
	this.m_eUIMode = CDASHPlayerUI.eUIModeDesktop;
	this.m_bHDCPErrorReported = false;
	this.m_bEMECapableHost = options.emeCapable;
	this.m_bEnabledAudioDubTrack = false;
	this.n_LastPlaybackTime = 0;
	this.m_bSupportsVideoSuggest = true;
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
		this.ShowLoadingContentDiv( true );

	}
}

CVideoWatch.prototype.ShowLoadingContentDiv = function( bShow )
{
	if ( bShow )
		$J( '#loading_content' ).css( 'z-index', '10' );
	else
		$J( '#loading_content' ).css( 'z-index', '-1' );
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
	this.SetVideoLoadingText( 'Initializing Video Decoder...' );
	this.WaitUnlockH264( Date.now() );
}

CVideoWatch.prototype.WaitUnlockH264 = function( rtStart )
{
	if ( BMediaSourceExtensionsSupported() )
	{
		this.Start();
		return;
	}

	if ( Date.now() - rtStart > 3000 )
	{
		this.ShowVideoError( 'The video player failed to initialize the video decoder correctly.<br><br>Please restart the video to try again.' );
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

	this.m_player = new CDASHPlayer( this.m_elVideoPlayer );
	this.m_player.SetUniqueId( this.m_nAppId + '/' + this.m_strVideoId );
	this.m_eUIMode = ( this.m_eClientType == CVideoWatch.k_InHTML5AppWrapperTenFoot ) ? CDASHPlayerUI.eUIModeTenFoot : CDASHPlayerUI.eUIModeDesktop;
	this.m_player.SetEMECapableHost( this.m_bEMECapableHost );

	this.m_playerUI = new CDASHPlayerUI( this.m_player, this.m_eUIMode );
	this.m_playerUI.SetUniqueSettingsID( this.m_nAppId );
	this.m_playerUI.SetVideoTitle( this.m_strVideoTitle );
	this.m_playerUI.SetUseSDLFullscreen( this.m_eClientType != CVideoWatch.k_InBrowser );
   	this.m_playerUI.Init();

	this.m_DASHPlayerStats = new CDASHPlayerStats( this.m_elVideoPlayer, this.m_player, this.m_nViewerSteamID );
	if ( this.m_eUIMode == CDASHPlayerUI.eUIModeTenFoot )
		$J( '.dash_player_playback_stats' ).addClass( 'tenfoot' );

	$J( this.m_elVideoPlayer ).on( 'bufferingcomplete.VideoWatchEvents', function() { _watch.OnPlayerBufferingComplete(); } );
	$J( this.m_elVideoPlayer ).on( 'downloadfailed.VideoWatchEvents', function( event, description ) { _watch.OnPlayerDownloadFailed( description ); } );
	$J( this.m_elVideoPlayer ).on( 'playbackerror.VideoWatchEvents', function( event, description ) { _watch.OnPlayerPlaybackError( description ); } );
	$J( this.m_elVideoPlayer ).on( 'mediaelementerror.VideoWatchEvents', function( event, nCode ) { _watch.OnPlayerMediaElementError( nCode ); } );
	$J( this.m_elVideoPlayer ).on( 'drmerror.VideoWatchEvents', function( event, description ) { _watch.OnPlayerDRMError( description ); } );
	$J( this.m_elVideoPlayer ).on( 'drmerrordownload.VideoWatchEvents', function( event, description ) { _watch.OnPlayerDRMDownloadError( description ); } );
	$J( this.m_elVideoPlayer ).on( 'hdcperror.VideoWatchEvents', function( event, description ) { _watch.OnPlayerHDCPError( description ); } );
	$J( this.m_elVideoPlayer ).on( 'logevent.VideoWatchEvents', function( e, strEventName, strEventDesc ) { _watch.OnLogEventToServer( strEventName, strEventDesc ); } );
	$J( this.m_elVideoPlayer ).on( 'waitingforwidevine.VideoWatchEvents', function() { _watch.SetVideoLoadingText( 'Retrieving additional components required for playback.<br><br>This is a one-time process and may take a few minutes to complete.' ); } );
	$J( this.m_elVideoPlayer ).on( 'completedwidevine.VideoWatchEvents', function() { } );
	$J( this.m_elVideoPlayer ).on( 'togglestats.VideoWatchEvents', function() { _watch.ToggleStats(); } );
	$J( this.m_elVideoPlayer ).on( 'videosuggest.VideoWatchEvents', function( event, oData ) { _watch.OnVideoSuggestClick( oData ); } );

	this.EnforceAppID();
	this.GetVideoDetails();
}

CVideoWatch.prototype.EnforceAppID = function()
{
	if ( this.m_eClientType != CVideoWatch.k_InBrowser )
	{
		try
		{
			var nAppID = SteamAPI.SteamUtils.GetAppID();
			if ( nAppID != this.m_nAppId )
			{
				SteamAPI.SteamUtils.SetAppID( this.m_nAppId );
				this.m_bSupportsVideoSuggest = true;
			}
		}
		catch( e )
		{
			// temp while client is in beta, use the API check to determine
			// if we can even show suggestions
			this.m_bSupportsVideoSuggest = false;
		}
	}

	document.body.style.cursor = 'default';
}

CVideoWatch.prototype.OnPlayerBufferingComplete = function()
{
	this.ShowLoadingContentDiv( false );
	$J( '#page_contents' ).removeClass( 'loading_video' );
	$J( '#page_contents' ).addClass( 'show_player' );

	// options that need setting on playback start
	this.SetVideoTrack();
	this.SetAudioTrack();
	this.SetClosedCaptionLanguage();
	this.m_playerUI.SetPlayerPlaybackRate();

	$J( this.m_elVideoPlayer ).off( 'bufferingcomplete.VideoWatchEvents' );
	var strLogUI = ( this.m_eUIMode == CDASHPlayerUI.eUIModeDesktop ) ? "desktop" : ( this.m_eUIMode == CDASHPlayerUI.eUIModeMobile) ? "mobile" : "tenfoot";
	this.OnLogEventToServer( 'Video Player UI', strLogUI );
}

CVideoWatch.prototype.OnPlayerDownloadFailed = function( description )
{
	this.m_nVideoRestarts++;
	if ( this.m_nVideoRestarts > CVideoWatch.k_MaximumVideoRestarts )
	{
		if ( this.m_eUIMode == CDASHPlayerUI.eUIModeDesktop || this.m_eUIMode == CDASHPlayerUI.eUIModeMobile )
			this.ShowVideoError( 'An unexpected network error occurred while trying to stream this video.<br><br><a href="https://support.steampowered.com/kb_article.php?ref=8699-OASD-1871">Visit the FAQ</a> for troubleshooting information.' );
		else
			this.ShowVideoError( 'An unexpected network error occurred while trying to stream this video.<br><br>Press the Back or Home controller button to exit the video.' );

		this.OnLogEventToServer( 'Download Failed', description );
	}
	else
	{
		var _watch = this;
		this.ShowVideoError( 'Reestablishing Stream...' );
		this.OnLogEventToServer( 'Reconnection', description );
		$J( this.m_elVideoPlayer ).on( 'bufferingcomplete.VideoWatchEvents', function() { _watch.OnPlayerBufferingComplete(); } );
		this.GetVideoDetails();
	}
}

CVideoWatch.prototype.OnPlayerPlaybackError = function( description )
{
	if ( this.m_eUIMode == CDASHPlayerUI.eUIModeDesktop || this.m_eUIMode == CDASHPlayerUI.eUIModeMobile )
		this.ShowVideoError( 'An unexpected error occurred while trying to play this video.<br><br><a href="https://support.steampowered.com/kb_article.php?ref=8699-OASD-1871">Visit the FAQ</a> for troubleshooting information.' );
	else
		this.ShowVideoError( 'An unexpected error occurred while trying to play this video.<br><br>Press the Back or Home controller button to exit the video.' );

	this.OnLogEventToServer( 'Playback Error', description );
}

CVideoWatch.prototype.OnPlayerMediaElementError = function( nCode )
{
	if ( nCode == MediaError.MEDIA_ERR_DECODE || nCode == MediaError.MEDIA_ERR_NETWORK )
	{
		if ( nCode == MediaError.MEDIA_ERR_DECODE )
			strError = 'Decode Error';
		else if ( nCode == MediaError.MEDIA_ERR_NETWORK )
			strError = 'Network Error';

		this.OnPlayerDownloadFailed( strError );
	}
	else
	{
		var strError = 'Unknown';
		if ( nCode == MediaError.MEDIA_ERR_ABORTED )
			strError = 'Aborted';
		else if ( nCode == MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED )
			strError = 'Source Not Supported';
		else
			strError = nCode;

		this.OnPlayerPlaybackError( "OnVideoError: " + strError );
	}
}

CVideoWatch.prototype.OnPlayerDRMError = function( description )
{
	this.ShowVideoError( 'This video requires a license to play which cannot be retrieved.<br><br>This may be a temporary network condition.<br><br>Please restart the video to try again.' );
	this.OnLogEventToServer( 'DRM License Error', description );
}

CVideoWatch.prototype.OnPlayerDRMDownloadError = function( description )
{
	if ( this.m_bEMECapableHost )
	{
		this.ShowVideoError( 'Sorry! There is an issue with Steam Video at the present time where some additional components required for playback can\'t be downloaded automatically. We are actively working on a fix. Until that time, you can manually install these components to get your video playback working.<br><br><a href="https://support.steampowered.com/kb_article.php?ref=8699-OASD-1871#15">Visit the FAQ</a> for help on installing these components.' );
		this.OnLogEventToServer( 'DRM Download Error', description );
	}
	else
	{
		this.ShowVideoError( 'You must update your version of the Steam client to watch this video.<br><br><a href="https://support.steampowered.com/kb_article.php?ref=8699-OASD-1871">Visit the FAQ</a> for more information on resolving this issue.' );
	}
}

CVideoWatch.prototype.OnPlayerHDCPError = function( description )
{
	if ( !this.m_bHDCPErrorReported )
	{
		this.ShowVideoError( 'This video cannot be played because one or more of your displays do not support High-Bandwidth Digital Content Protection (HDCP).<br><br><a href="https://support.steampowered.com/kb_article.php?ref=8699-OASD-1871">Visit the FAQ</a> for more information on resolving this issue.' );
		this.OnLogEventToServer( 'HDCP Error', description );
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
	this.ShowLoadingContentDiv( true );

	var _watch = this;

	$J.ajax( {
		url: 'https://store.steampowered.com/video/details/' + _watch.m_nAppId + '/' + _watch.m_strVideoId,
		type: 'GET'
	})
	.done( function( data )
	{
		if ( data.success == 'ready' )
		{
			_watch.ShowLoadingContentDiv( false );
			_watch.LoadVideoMPD( data.video_url );
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
					_watch.ShowVideoError( 'The video could not be accessed. <br><br>Please ensure the account you are logged in with owns this video.' );
					break;
				case 16:
					_watch.ShowVideoError( 'This video is not currently available to stream.' );
					break;
				case 20:
					_watch.ShowVideoError( 'The video service is not available.' );
					break;
				case 27:
					_watch.ShowVideoError( 'The viewing period for this video rental has expired.' );
					break;
				case 40:
					_watch.ShowVideoError( 'Sorry, this video is not yet available to watch.' );
					break;
				case 82:
					_watch.ShowVideoError( 'Streaming Videos can only be watched in the Steam Client.' );
					break;
				default:
					if ( _watch.m_eUIMode == CDASHPlayerUI.eUIModeDesktop || _watch.m_eUIMode == CDASHPlayerUI.eUIModeMobile )
						_watch.ShowVideoError( 'An unexpected error occurred while trying to play this video.<br><br><a href="https://support.steampowered.com/kb_article.php?ref=8699-OASD-1871">Visit the FAQ</a> for troubleshooting information.' + '<br><br>Error Code: ' + data.error_code );
					else
						_watch.ShowVideoError( 'An unexpected error occurred while trying to play this video.<br><br>Press the Back or Home controller button to exit the video.' + '<br><br>Error Code: ' + data.error_code );
					break;
			}
		}
	})
	.fail( function()
	{
		if ( _watch.m_eUIMode == CDASHPlayerUI.eUIModeDesktop || _watch.m_eUIMode == CDASHPlayerUI.eUIModeMobile )
			_watch.ShowVideoError( 'An unexpected error occurred while trying to play this video.<br><br><a href="https://support.steampowered.com/kb_article.php?ref=8699-OASD-1871">Visit the FAQ</a> for troubleshooting information.' );
		else
			_watch.ShowVideoError( 'An unexpected error occurred while trying to play this video.<br><br>Press the Back or Home controller button to exit the video.' );
	});
}

CVideoWatch.prototype.LoadVideoMPD = function( url )
{
	this.m_player.Close();
	this.m_DASHPlayerStats.Reset();
	this.SetResumeTimeForAppID();
	var bUseMpdRelativePathForSegments = false;
	this.m_player.SetVideoAdaptationIndex ( CDASHPlayerUI.GetSavedVideoTrackSelected( this.m_nAppId ) );
	this.m_player.SetAudioAdaptationIndex ( CDASHPlayerUI.GetSavedAudioTrackSelected( this.m_nAppId ) );


	this.m_player.PlayMPD( url, bUseMpdRelativePathForSegments );

	this.GetSuggestedVideo();
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
	var nCurrentTime = parseInt( this.m_player.m_elVideoPlayer.currentTime.toFixed(0) );
	if ( this.n_LastPlaybackTime != nCurrentTime )
	{
		this.n_LastPlaybackTime = nCurrentTime;
		WebStorage.SetLocal( "steam_video_watch_last_time_indicator_" + this.m_nAppId, nCurrentTime );
	}
}

CVideoWatch.prototype.SetClosedCaptionLanguage = function()
{
	var strClosedCaptionCode = CDASHPlayerUI.GetSavedClosedCaptionLanguage( this.m_nAppId );
	if ( !strClosedCaptionCode )
	{
		if ( !this.m_bEnabledAudioDubTrack )
		{
			for ( var strCode in CVTTCaptionLoader.LanguageCountryCodes )
			{
				if ( CVTTCaptionLoader.LanguageCountryCodes[ strCode ].steamLanguage.toUpperCase() == this.m_strLanguage.toUpperCase() )
				{
					if ( this.m_player.GetLanguageForCurrentAudioTrack() == strCode )
						strClosedCaptionCode = CDASHPlayerUI.CLOSED_CAPTIONS_NONE;
					else
						strClosedCaptionCode = strCode;

					break;
				}
			}
		}
		else
		{
			strClosedCaptionCode = CDASHPlayerUI.CLOSED_CAPTIONS_NONE;
		}
	}

	if ( strClosedCaptionCode )
	{
		this.m_playerUI.SetClosedCaptionLanguageInUI( strClosedCaptionCode );
		this.m_playerUI.SwitchClosedCaptionLanguageInPlayer( strClosedCaptionCode );
		this.m_playerUI.SaveClosedCaptionLanguage();
	}
}

CVideoWatch.prototype.SetAudioTrack = function()
{
	var strAudioTrackID = CDASHPlayerUI.GetSavedAudioTrackSelected( this.m_nAppId );

	if ( !strAudioTrackID )
	{
		// determine the best main or dub audio track for the user
		for ( var strCode in CVTTCaptionLoader.LanguageCountryCodes )
		{
			if ( CVTTCaptionLoader.LanguageCountryCodes[strCode].steamLanguage.toUpperCase() == this.m_strLanguage.toUpperCase() )
			{
				strAudioTrackID = this.m_player.GetAudioTrackIDForLanguage( strCode );
				break;
			}
		}
	}

	if ( strAudioTrackID && strAudioTrackID != -1 )
	{
		this.m_playerUI.SetAudioTrackSelectedInUI( strAudioTrackID );
		this.m_playerUI.SwitchAudioTrackSelectedInPlayer( strAudioTrackID );
		this.m_playerUI.SaveAudioTrackSelected();
		this.m_bEnabledAudioDubTrack = true;
	}
}

CVideoWatch.prototype.SetVideoTrack = function()
{
	var strVideoTrackID = CDASHPlayerUI.GetSavedVideoTrackSelected( this.m_nAppId );

	if ( !strVideoTrackID )
	{
		// determine the best main or dub audio track for the user
		for ( var strCode in CVTTCaptionLoader.LanguageCountryCodes )
		{
			if ( CVTTCaptionLoader.LanguageCountryCodes[strCode].steamLanguage.toUpperCase() == this.m_strLanguage.toUpperCase() )
			{
				strVideoTrackID = this.m_player.GetVideoTrackIDForLanguage( strCode );
				break;
			}
		}
	}

	if ( strVideoTrackID && strVideoTrackID != -1 )
	{
		this.m_playerUI.SetVideoTrackSelectedInUI( strVideoTrackID );
		this.m_playerUI.SwitchVideoTrackSelectedInPlayer( strVideoTrackID );
		this.m_playerUI.SaveVideoTrackSelected();
	}
}

CVideoWatch.prototype.GetSuggestedVideo = function()
{
	if ( !this.m_bSupportsVideoSuggest )
		return;

	var _watch = this;
	$J.ajax( {
		url: 'https://store.steampowered.com/video/suggest/' + _watch.m_nAppId,
		type: 'GET',
		cache: false
	})
		.done( function( data )
		{
			if ( data.length != 0 )
			{
				var strSuggestTitle = 'Next (Not Owned)';
				if ( data.owns_app == 1 )
					strSuggestTitle = 'Next';
				else if ( data.owns_app == 40 )
					strSuggestTitle = 'Next (Not Yet Available)';

				var strGroupTitle = data.grouptitle;
				var strVideoTitle = data.videotitle;
				var oData = { 'appid': data.appid };
				_watch.m_playerUI.SetVideoSuggestData( strSuggestTitle, strGroupTitle, strVideoTitle, oData );
			}
		})
		.fail( function()
		{

		});
}

CVideoWatch.prototype.OnVideoSuggestClick = function( oData )
{
	if ( oData.appid.length > 0 )
	{
		this.ShowVideoError('');
		document.body.style.cursor = 'wait';
		var nAppID = parseInt( oData.appid );
		this.OnLogEventToServer( 'Video Suggest Click', nAppID );
		window.location = 'https://store.steampowered.com/video/watch/' + nAppID;
	}
}

