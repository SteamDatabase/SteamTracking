

// called by steam client when going into minimized broadcast view
function SteamClientMinimize()
{
	$J( document.body ).addClass( 'SteamClientMinimized' );
}

// called by steam client when going into normal broadcast view
function SteamClientMaximize()
{
	$J( document.body ).removeClass( 'SteamClientMinimized' );
}

// called by steam client when moved to popout
function SteamClientPopOut()
{
	$J( '#PopOutBtn' ).hide();
}

// called by steam client when loaded in nav panel
function SteamClientShowPopOut()
{
	$J( '#PopOutBtn' ).show();
}


var CBroadcastWatch = function( broadcastAccountID, steamIDBroadcast, name, eClientType, steamIDViewer, IFrameHelper, nVideoLimitFPS )
{
	this.m_broadcastAccountID = broadcastAccountID;
	this.m_ulBroadcastSteamID = steamIDBroadcast;
	this.m_ulViewerSteamID = steamIDViewer;
	this.m_strBroadcastName = name;
	this.m_ulBroadcastID = 0;
	this.m_eClientType = eClientType;
	this.m_timeoutUpdate = null;
	this.m_elVideoPlayer = document.getElementById( 'videoplayer' );
	this.m_xhrViewUsers = null;
	this.m_bUnlockingH264 = false;
	this.m_DASHPlayerStats = null;
	this.m_bChatEnabled = null;
	this.m_bVideoEnabled = null;
	this.m_bDisableChatTooltips = false;
	this.m_IFrameHelper = IFrameHelper;
	this.m_nVideoLimitFPS = nVideoLimitFPS ? nVideoLimitFPS : 0;
	
	this.m_ulViewerToken = WebStorage.GetLocal( "broadcastViewerToken" );

	if ( this.m_ulViewerToken == null )
	{
		this.m_ulViewerToken = 0;
	}

	if( this.m_IFrameHelper )
	{
		this.RegisterParentBroadcastHooks();
	}
};

CBroadcastWatch.s_UpdateTimeoutSec = 60;
CBroadcastWatch.k_InBrowser = 1;
CBroadcastWatch.k_InClient = 2;
CBroadcastWatch.k_InOverlay = 3;

CBroadcastWatch.prototype.ToggleStats = function()
{
	if ( this.m_DASHPlayerStats )
		this.m_DASHPlayerStats.Toggle();
};

CBroadcastWatch.prototype.GetChat = function()
{
	return this.m_chat;
};

CBroadcastWatch.prototype.GetBroadcastID = function()
{
	return this.m_ulBroadcastID;
};

CBroadcastWatch.prototype.IsBroadcaster = function()
{
	return (this.m_ulBroadcastSteamID == this.m_ulViewerSteamID);
};

CBroadcastWatch.prototype.ShowVideoError = function( strError )
{
	if ( $J( '#PageContents' ).hasClass( 'ShowPlayer' ) )
	{
		$J( '#VideoLoadingText' ).html( strError );
		$J( '#VideoLoadingText' ).addClass( 'Error' );
		$J( '#LoadingVideoContent' ).addClass( 'HideThrobber' );
	}
	else
	{
		$J( '#PageLoadingText' ).html( strError );
		$J( '#PageLoadingText' ).addClass( 'Error' );
		$J( '#LoadingContent' ).addClass( 'HideThrobber' );
	}
};

CBroadcastWatch.prototype.IsPlayStateChangeable = function( )
{
	return $J( '#PageContents' ).hasClass( 'ShowPlayer' ) &&
		!$J( '#PageContents').hasClass( 'LoadingVideo' ) &&
		!$J( '#VideoLoadingText' ).hasClass( 'Error' ) &&
		!$J( '#PageLoadingText' ).hasClass( 'Error' );
}

CBroadcastWatch.prototype.SetVideoLoadingText = function( strText )
{
	if ( $J( '#PageContents' ).hasClass( 'ShowPlayer' ) )
	{
		$J( '#VideoLoadingText' ).html( strText  );
	}
	else
	{
		$J('#PageLoadingText').html( strText );
	}
};

CBroadcastWatch.prototype.UnlockH264 = function()
{
	if ( this.m_eClientType != CBroadcastWatch.k_InClient && this.m_eClientType != CBroadcastWatch.k_InOverlay )
	{
		this.ShowVideoError( 'You must opt into the beta version of the Steam client to watch this broadcast.<br><br><a href="https://support.steampowered.com/kb_article.php?ref=6730-TOAK-6497">Visit the Broadcast FAQ</a> for instructions on how to opt into the latest beta client.' );
		return;
	}

	window.open( 'steam://unlockh264/' );
	this.SetVideoLoadingText( 'Updating Steam...' );
	this.WaitUnlockH264( Date.now() );
};

CBroadcastWatch.prototype.WaitUnlockH264 = function( rtStart )
{
	if ( BMediaSourceExtensionsSupported() )
	{
		this.Start( true, true );
		return;
	}

	if ( Date.now() - rtStart > 30000 )
	{
		this.ShowVideoError( 'Failed to apply a Steam update that is required to watch this broadcast.<br><br>Please ensure your client is connected to Steam and try again.' );
		return;
	}

	var _watch = this;
	window.setTimeout( function() { _watch.WaitUnlockH264( rtStart ); }, 5000 );
};

CBroadcastWatch.prototype.BCanPlayDashMpeg = function() {
	var bSupported = false;
	try
	{
		bSupported = MediaSource.isTypeSupported( 'video/mp4;codecs="avc1.4d4032,mp4a.40.2"' );
	}
	catch (e)
	{
	}

	return bSupported;
};

CBroadcastWatch.prototype.BCanPlayPlayHLS = function() {
	var result = this.m_elVideoPlayer.canPlayType( 'application/vnd.apple.mpegurl;codecs="avc1.64001f,mp4a.40.02"');
	return result === "probably" || result === "maybe";
};

CBroadcastWatch.prototype.BCanPlayMedia = function() {
	return this.BCanPlayDashMpeg() || this.BCanPlayPlayHLS();
};

CBroadcastWatch.prototype.Start = function( bEnableVideo, bEnableChat, strBaseURL )
{
	var _watch = this;

	this.m_bVideoEnabled = bEnableVideo;
	this.m_bChatEnabled = bEnableChat;

	if ( bEnableVideo && !this.BCanPlayMedia() )
	{
		if ( this.m_eClientType != CBroadcastWatch.k_InBrowser )
		{
			this.UnlockH264();
			return;
		}

		this.ShowVideoError( 'Your web browser does not support the minimum set of features required to watch this broadcast.<br><br>You can watch this broadcast from <a href="steam://broadcast/watch/%steamid%">inside the Steam Client</a> or, for a list of supported browsers, please <a href="https://support.steampowered.com/kb_article.php?ref=6730-TOAK-6497">visit the Broadcast FAQ</a>.'.replace( '%steamid%', this.m_ulBroadcastSteamID ) );
		return;
	}

	if ( bEnableChat )
	{
		this.m_chat = new CBroadcastChat( this.m_ulBroadcastSteamID, strBaseURL );
	}

	if ( bEnableVideo )
	{
		// Choose DASH ahead of HLS as we have more customization for it.  We only expect at this time
		// to choose HLS for iOS devices and tvOS devices.
		var bUseDASH = this.BCanPlayDashMpeg();
		var bUseHLSManifest = !bUseDASH && this.BCanPlayPlayHLS();
		var bIsMobile = bUseHLSManifest; // Adding feature for iOS first, and then going to investigate on android later

		this.m_player = new CDASHPlayer( this.m_elVideoPlayer );
		this.m_player.SetBroadcastAccountID( this.m_broadcastAccountID );
		this.m_player.SetUseHLSManifest( bUseHLSManifest );
		this.m_player.SetLimitFPS( this.m_nVideoLimitFPS );
		this.m_playerUI = new CDASHPlayerUI( this.m_player, bIsMobile ? CDASHPlayerUI.eUIModeMobile : CDASHPlayerUI.eUIModeDesktop );
		this.m_playerUI.Init( );

		this.m_DASHPlayerStats = new CDASHPlayerStats( this.m_elVideoPlayer, this.m_player, this.m_ulViewerSteamID );

		// For HLS playback we depend on the HTML Video Element for playback and events. Map those here to the broadcast events.
		$J( this.m_elVideoPlayer ).on( bUseDASH ? 'bufferingcomplete.BroadcastWatchEvents' : 'canplay', function() { _watch.OnPlayerBufferingComplete(); } );
		$J( this.m_elVideoPlayer ).on( bUseDASH ? 'playbackerror.BroadcastWatchEvents' : 'error' , function() { _watch.OnPlayerPlaybackError(); } );

		$J( this.m_elVideoPlayer ).on( 'gamedataupdate', function( e, pts, Data ) { _watch.OnGameFrameReceived( pts, Data ); } );
		$J( this.m_elVideoPlayer ).on( 'downloadfailed.BroadcastWatchEvents', function() { _watch.OnPlayerDownloadFailed(); } );

		// Add air-play support for iOS
		if( bUseHLSManifest )
		{
			this.m_elVideoPlayer.setAttribute( 'x-webkit-airplay', 'allow');
		}

		this.GetBroadcastManifest();
	}
};

CBroadcastWatch.prototype.SetGameDataUpdateFrequency = function( flFreq )
{
	if ( !this.m_bVideoEnabled )
		return;

	CDASHPlayer.GAMEDATA_TRIGGER_MS = 1000 / Math.max( 3, Math.min( 10, flFreq ) );
};

CBroadcastWatch.prototype.DisableChatTooltips = function()
{
	this.m_bDisableChatTooltips = true;
};

CBroadcastWatch.prototype.OnPlayerBufferingComplete = function()
{
	$J( '#PageContents' ).removeClass( 'LoadingVideo' );
};

CBroadcastWatch.prototype.OnPlayerDownloadFailed = function()
{
	this.SetVideoLoadingText( 'Loading...' );
	this.GetBroadcastManifest();
};

CBroadcastWatch.prototype.OnPlayerPlaybackError = function()
{
	this.ShowVideoError( 'An unexpected error occurred while playing this video' );
};

CBroadcastWatch.prototype.OnGameFrameReceived = function( pts, Data )
{
	this.PostMessageToIFrameParent( "OnGameDataReceived", { pts: pts, data: Data } );
};

CBroadcastWatch.prototype.AddBroadcasterName = function( str )
{
	var strEscaped = $J( '<span/>' ).text( this.m_strBroadcastName ).html();
	return str.replace( /%s/, strEscaped );
};

function LocalizeCount( strSingular, strPlural, nValue )
{
	if ( nValue == 1 )
		return strSingular;

	return strPlural.replace( /%s/, v_numberformat( nValue ) );
}

CBroadcastWatch.prototype.GetBroadcastManifest = function(rtStartRequest )
{
	if ( !this.m_bVideoEnabled )
		return;

	$J( '#PageContents' ).addClass( 'LoadingVideo' );

	var _watch = this;
	if ( !rtStartRequest )
		rtStartRequest = Date.now();

	$J.ajax( {
		url: 'https://steamcommunity.com/broadcast/getbroadcastmpd/',
		data: {
			steamid: _watch.m_ulBroadcastSteamID,
			broadcastid: _watch.m_ulBroadcastID,
			viewertoken: _watch.m_ulViewerToken,
			sessionid: g_sessionID
		},
		type: 'GET'
	})
	.done( function( data )
	{
		if ( data.success == 'waiting' )
		{
			_watch.SetVideoLoadingText( _watch.AddBroadcasterName( 'Waiting for a response from %s' ) );

		 			 	var rtWait = (Date.now() - rtStartRequest);
		 	if ( rtWait > 60 * 1000 )
		 	{
		 		_watch.ShowVideoError( _watch.AddBroadcasterName( '%s\'s broadcast is not available at this time' ) );
		 		return;
		 	}

		 	var timeout = ( rtWait > 30 * 1000 ) ? data.retry : 5000;
			setTimeout( function() { _watch.GetBroadcastManifest( rtStartRequest ) }, timeout );
		}
		else if ( data.success == 'waiting_for_start' )
		{
			_watch.SetVideoLoadingText( _watch.AddBroadcasterName( 'Waiting for %s\'s broadcast to start' ) );
			setTimeout( function() { _watch.GetBroadcastManifest() }, data.retry );
		}
		else if ( data.success == 'waiting_for_reconnect' )
		{
			_watch.SetVideoLoadingText( _watch.AddBroadcasterName( 'Waiting for %s to reconnect to Steam' ) );
			setTimeout( function() { _watch.GetBroadcastManifest() }, data.retry );
        	}
		else if ( data.success == 'ready' )
		{
			_watch.m_ulBroadcastID = data.broadcastid;

			if( _watch.m_ulViewerToken != data.viewertoken )
			{
				_watch.m_ulViewerToken = data.viewertoken;
				WebStorage.SetLocal( "broadcastViewerToken", _watch.m_ulViewerToken );
			}

			// We prefer DASHMPEG playback ahead of HLS support. For DASH we have a lot more control and features.
			if( _watch.BCanPlayDashMpeg() )
			{
				_watch.LoadBroadcastMPD(data.url);
			}
			else
			{
				_watch.LoadBroadcastHLSMasterManifest( data.url, data.hls_url );
			}
			_watch.UpdateBroadcastInfo();

			if ( _watch.m_chat && _watch.m_bChatEnabled )
			{
				_watch.m_chat.RequestChatInfo( data.broadcastid );
			}
			// If we're in an IFrame and are video-only, send a message over the fence to plumb the new broadcastid into the
			// other chat iframe, so it can call RequestChatInfo.
			else if ( _watch.m_IFrameHelper )
			{
				_watch.PostMessageToIFrameParent( 'OnBroadcastIDChanged', { broadcastid: data.broadcastid, broadcaststeamid: _watch.m_ulBroadcastSteamID } );
			}

			// Hide the loading panel
			_watch.HideLoadingPanel();
		}
		else if ( data.success == 'end' )
		{
			_watch.ShowVideoError( _watch.AddBroadcasterName( '%s\'s broadcast has ended' ) );
		}
		else if ( data.success == 'noservers' )
		{
			_watch.ShowVideoError( _watch.AddBroadcasterName( 'Steam is currently experiencing high broadcast load in %s\'s area and is currently unable to reserve a server spot to start this broadcast.<br><br>Please try again in a few minutes.' ) );
		}
		else if ( data.success == 'system_not_supported' )
		{
			_watch.ShowVideoError( _watch.AddBroadcasterName( 'Steam Broadcasting is not currently supported on %s\'s system' ) );
		}
		else if ( data.success == 'user_restricted' )
		{
			_watch.ShowVideoError( _watch.AddBroadcasterName( '%s\'s account is currently restricted from broadcasting on Steam' ) );
		}
		else if ( data.success == 'client_out_of_date' )
		{
			_watch.ShowVideoError( _watch.AddBroadcasterName( '%s\'s client must be updated to support Steam Broadcasting' ) );
		}
		else if ( data.success == 'poor_upload_quality' )
		{
			_watch.ShowVideoError( _watch.AddBroadcasterName( '%s is currently unable to maintain a stable broadcast connection to Steam.' ) );
		}
		else if ( data.success == 'missing_subscription' )
		{
			_watch.ShowVideoError( _watch.AddBroadcasterName( 'Missing subscription to watch %s\'s broadcast' ) );
		}
		else if ( data.success == 'request_failed' )
		{
			_watch.ShowVideoError( 'Failed to load this broadcast' );
		}
		else
		{
			_watch.ShowVideoError( _watch.AddBroadcasterName( '%s\'s broadcast is not available at this time' ) );
		}
	})
	.fail( function()
	{
		_watch.ShowVideoError( 'An unexpected error occurred while trying to view this broadcast' );
	});
};

CBroadcastWatch.prototype.LoadBroadcastMPD = function( url )
{
	if ( !this.m_bVideoEnabled )
		return;

	this.m_player.Close();
	this.m_DASHPlayerStats.Reset();
	this.m_player.PlayMPD( url );
};

// For HLS, we depend on the native iOS playback support for the default HTML5 <video> tag.
// This leaves all the ABR choices to Safari.  However, we need to read the MPD from time-to-time
// to determine if the broadcast representations have change, which will cause us to reload the
// the master manifest in the video element.
CBroadcastWatch.prototype.LoadBroadcastHLSMasterManifest = function( mpdURL, hlsURL )
{
	this.m_elVideoPlayer.src = hlsURL;
	this.m_elVideoPlayer.load();
	this.m_elVideoPlayer.play();

	// Now we call the regular DASH Player initialization. The override will prevent a double
	// playback. We need the DASH player to check the Dash MPD every so often for updates.
	this.m_player.PlayMPD( mpdURL );
};

CBroadcastWatch.prototype.OnVideoIFrameBroadcastIDChanged = function( ulBroadcastID )
{
	if ( !this.m_bChatEnabled )
		return;

	this.m_chat.RequestChatInfo( ulBroadcastID );
	this.HideLoadingPanel();
};

CBroadcastWatch.prototype.HideLoadingPanel = function()
{
	$J( '#PageContents' ).addClass( 'ShowPlayer' );
};

CBroadcastWatch.prototype.UpdateBroadcastInfo = function()
{
	var _watch = this;
	$J.ajax( {
		url: 'https://steamcommunity.com/broadcast/getbroadcastinfo/',
		data:
		{
			steamid: _watch.m_ulBroadcastSteamID,
			broadcastid: _watch.m_ulBroadcastID,
			sessionid: g_sessionID
		},
		type: 'GET'
	}).done( function( data )
	{
		if ( data.success == 42 )
			return;

		if ( data.success == 1 )
			_watch.SetBroadcastInfo( data );

		_watch.ScheduleBroadcastInfoUpdate();

	}).fail( function()
	{
		_watch.ScheduleBroadcastInfoUpdate();
	});
};

CBroadcastWatch.prototype.SetBroadcastInfo = function( data )
{
	$J( '#BroadcastViewerCount' ).text( LocalizeCount( '1 viewer', '%s viewers', data.viewer_count ) );

	var strTitle = data.title ? data.title : '';
	var strGameName = data.app_title ? data.app_title : '';

	var strBroadcastURL = 'https://steamcommunity.com/app/' + data.appid + '/broadcasts';
	if ( data.appid == 0 )
		strBroadcastURL = 'https://steamcommunity.com?subsection=broadcasts';

	var strStoreURL = 'https://store.steampowered.com/app/' + data.appid;
	var target = "_blank";
	if ( this.m_eClientType == CBroadcastWatch.k_InClient )
	{
		strBroadcastURL = 'steam://url/GameHubBroadcast/' + data.appid;
		if ( data.appid == 0 )
			strBroadcastURL = 'steam://url/GameHubBroadcasts/';

		strStoreURL = 'steam://store/' + data.appid;
		target = "_self";
	}

	if ( data.appid == 0 )
	{
		$J( '#ViewStorePage' ).hide();
		$J( '#BroadcastGameLink' ).hide();
	}
	else
	{
		$J( '#ViewStorePage' ).show();
		$J( '#BroadcastGameLink' ).show();
	}

	if ( strTitle.length > 0 && strGameName.length > 0 && data.appid != 0 )
		$J( '#BroadcastTitleSeparator' ).show();
	else
		$J( '#BroadcastTitleSeparator' ).hide();

	$J( '#BroadcastGame' ).text( strGameName );
	$J( '#BroadcastTitle' ).text( strTitle );
	$J( '#MoreBroadcastLink' ).attr( 'href', strBroadcastURL).attr( 'target', target );
	$J( '#ViewStorePage' ).attr( 'href', strStoreURL).attr( 'target', target );
	$J( '#BroadcastGameLink' ).attr( 'href', strStoreURL).attr( 'target', target );

	$J( '#BroadcastInfoButtons' ).show();

	if ( this.IsBroadcaster() )
	{
		// show admin box instead of regular box
		$J( '#BroadcasterAdminBox' ).show();
		$J( '#BroadcastInfo' ).hide();
		$J( '#ViewStorePage' ).hide();
		$J( '#ReportBroadcast' ).hide();
		$J( '#BroadcastAdminTitleInput' ).val( strTitle );

		// allow to change MatchID RTMP streams only
		if( !data.is_rtmp )
		{
			$J( '#BroadcastAdminMatchID' ).hide();
		}

		$J( '#BroadcastAdminViewerCount' ).text( LocalizeCount( '1 viewer', '%s viewers', data.viewer_count ) );
	}

	this.PostMessageToIFrameParent( "OnBroadcastInfoChanged",
		{ viewer_count: data.viewer_count, title: data.title, app_title: data.app_title, appid: data.appid, permission: data.permission } );
};

function OpenBroadcastLink()
{
	var elButton = $J( this );
	alert( elButton.attr( 'href' ) );
	window.open( elButton.attr( 'href' ) );
}

CBroadcastWatch.prototype.ScheduleBroadcastInfoUpdate = function()
{
	var _watch = this;
	this.m_timeoutUpdate = setTimeout( function() { _watch.UpdateBroadcastInfo() }, CBroadcastWatch.s_UpdateTimeoutSec * 1000 );
};

CBroadcastWatch.prototype.SubmitChat = function()
{
	if ( this.m_chat )
	{
		this.m_chat.ChatSubmit();
	}
};

CBroadcastWatch.prototype.FocusChatTextArea = function()
{
	$J( chatmessage ).attr( 'placeholder', '' );
};

function CreateUnmuteFunc( chat, viewer, elMute )
{
	return function() { chat.UnmuteUser( viewer.id, viewer.name ); elMute.hide(); };
}

CBroadcastWatch.prototype.ShowViewers = function()
{
	if ( this.m_xhrViewUsers )
	{
		this.m_xhrViewUsers.abort();
		this.m_xhrViewUsers = null;
	}

	$J( '#ModalBackground' ).show();
	$J( '#ChatViewerModalBackdrop' ).show();
	$J( '#ViewerModal' ).show();
	$J( '#LoadingViewerModal' ).show();
	$J( '#LoadedViewerModal' ).hide();
	$J( '#LoadedViewerModal' ).scrollTop( 0 );
	$J( '#ViewerModalUsers' ).empty();
	$J( '#ViewerModalViewers' ).hide();
	$J( '#ViewerModalError' ).hide();
	$J( '#ViewerNotReturned' ).hide();

	if ( this.m_bChatEnabled && ( !this.m_chat || this.m_chat.GetChatID() == 0 ) )
	{
		$J( '#LoadingViewerModal' ).hide();
		$J( '#LoadedViewerModal' ).show();
		$J( '#ViewerModalError' ).text( 'Failed to load user list' );
		$J( '#ViewerModalError' ).show();
	}

	// position modal
	var rectBody = document.body.getBoundingClientRect();
	var rectViewerBtn = $J( '#ChatViewersBtn' )[0].getBoundingClientRect();
	var nTop = rectViewerBtn.bottom - rectBody.top + 6;
	var nRight = rectBody.right - rectViewerBtn.right;
	$J( '#ViewerModal' ).css( {top: nTop, right: nRight} );
	$J( '#ChatViewersBtn' ).addClass( 'ViewersVisible' );

	this.UpdateBroadcastViewerUI();
};

CBroadcastWatch.prototype.UpdateBroadcastViewerUI = function()
{
	if ( !this.m_chat )
		return;

	var _watch = this;

	this.m_xhrViewers = $J.ajax(
	{
		url: 'https://steamcommunity.com/broadcast/getbroadcastviewers/',
		data: {
			chatid: _watch.m_chat.GetChatID(),
			muted: _watch.m_chat.GetMutedUsers(),
			sessionid: g_sessionID
		},
		type: 'GET'
	})
	.done( function( data )
	{
		$J( '#LoadingViewerModal' ).hide();
		$J( '#LoadedViewerModal' ).show();
		$J( '#ViewerModalViewers' ).show();
		$J( '#LoadedViewerModal' ).scrollTop( 0 );

		$J( '#ViewerModalViewers' ).text( LocalizeCount( '1 viewer', '%s viewers', data.viewer_count ) );

		if ( data.viewers.length > 0 )
		{
			for ( var i = 0; i < data.viewers.length; i++ )
			{
				var viewer = data.viewers[i];
				var elUser = $J( '<div class="UserRow"><a href="https://steamcommunity.com/profiles/' + viewer.id + '" target="_blank">' + viewer.name + '</a></div>' );
				if ( viewer.muted || _watch.m_chat.IsUserMutedLocally( viewer.id ) )
				{
					var elMute = $J( '<div class="Muted"></div>' );
					if ( !viewer.muted || _watch.IsBroadcaster() )
					{
						elMute.addClass( 'CanUnmute' );
						elMute.on( 'click', CreateUnmuteFunc( _watch.m_chat, viewer, elMute ) );
					}

					elUser.append( elMute );
				}

				if ( !_watch.m_bDisableChatTooltips )
				{
					elUser.children( 'a' ).attr( 'data-miniprofile', 's' + viewer.id );
				}

				$J( '#ViewerModalUsers' ).append( elUser );
			}
		}

		var nMissing = data.viewer_count - data.viewers.length;
		if ( nMissing > 0 )
		{
			$J( '#ViewerNotReturned' ).text( '... and %d more'.replace( /%d/, nMissing ) );
			$J( '#ViewerNotReturned' ).show();
		}
	})
	.fail( function()
	{
		$J( '#LoadingViewerModal' ).hide();
		$J( '#LoadedViewerModal' ).show();
		$J( '#ViewerModalError' ).text( 'Failed to load user list' );
		$J( '#ViewerModalError' ).show();
	});
};

CBroadcastWatch.prototype.CloseViewers = function()
{
	if ( this.m_xhrViewUsers )
	{
		this.m_xhrViewUsers.abort();
		this.m_xhrViewUsers = null;
	}

	$J( '#ChatViewersBtn' ).removeClass( 'ViewersVisible' );
	$J( '#ViewerModal' ).hide();
	$J( '#ChatViewerModalBackdrop' ).hide();
	$J( '#ModalBackground' ).hide();
};

CBroadcastWatch.prototype.MinimizeChat = function()
{
	$J( '#PageContents' ).addClass( 'MinimizedChat' );
};

CBroadcastWatch.prototype.MaximizeChat = function()
{
	$J( '#PageContents' ).removeClass( 'MinimizedChat' );
};

CBroadcastWatch.prototype.ReportBroadcast = function()
{
	if ( this.m_ulBroadcastID == 0 || $J( '#ReportBroadcast' ).hasClass( 'Reported' ) )
		return;

	var dialog = ShowPromptWithTextAreaDialog( 'Report this item', '', null, null, 1000 );
	var explanation = $J('<div/>', { 'class': 'report_dialog_explanation' } );
	explanation.html( 'Please describe the way in which this item is in violation of the Steam Terms of Service. Please include any relevant information or links. Filing this report cannot be undone.' );

	var textArea = dialog.m_$Content.find( 'textarea' );
	textArea.addClass( "report_dialog_text_area" );
	textArea.parent().before( explanation );

	var _watch = this;
	dialog.done( function( data )
	{
		data = v_trim( data );
		if ( data.length < 1 )
		{
			alert( 'Please enter a valid reason.');
			return;
		}

		$J.post( 'https://steamcommunity.com/broadcast/report',
		{
			steamid: _watch.m_ulBroadcastSteamID,
			broadcastid: _watch.m_ulBroadcastID,
			description: data,
			sessionid: g_sessionID
		}
		).done( function( json )
		{
			$J( '#ReportBroadcast' ).text( 'Report Successful' );
			$J( '#ReportBroadcast' ).addClass( 'Reported' );
			$J( '#ReportBroadcast' ).removeClass( 'BroadcastButton' );
		})
		.fail( function()
		{
			alert( 'There was a problem submitting your request to our servers. Please try again.')
		});
	});
};

CBroadcastWatch.prototype.UpdateBroadcast = function()
{
	if ( this.m_ulBroadcastID == 0 )
		return;

	var _watch = this;

	$J.post( 'https://steamcommunity.com/broadcast/updatebroadcastsettings',
	{
		steamid: _watch.m_ulBroadcastSteamID,
		title: $J( '#BroadcastAdminTitleInput' ).val(),
		matchid : $J( '#BroadcastAdminMatchIDInput' ).val(),
		sessionid: g_sessionID
	}

	).done( function( json )
	{
		$J( '#BroadcastAdminUpdateResult' ).show();
		$J( '#BroadcastAdminUpdateResult' ).css('color', 'green');
		$J( '#BroadcastAdminUpdateResult' ).text( 'Broadcast updated.' );
		$J( '#BroadcastAdminUpdateResult' ).delay(3000).fadeOut("slow");
	})
	.fail( function()
	{
		$J( '#BroadcastAdminUpdateResult' ).show();
		$J( '#BroadcastAdminUpdateResult' ).css('color', 'red');
		$J( '#BroadcastAdminUpdateResult' ).text( 'Failed to update broadcast.' );
		$J( '#BroadcastAdminUpdateResult' ).delay(3000).fadeOut("slow");
	});
};

CBroadcastWatch.prototype.StopBroadcast = function()
{
	if ( this.m_ulBroadcastID == 0 )
		return;

	if ( !confirm( 'Stop broadcast ?' ) )
		return;

	var _watch = this;

	$J.post( 'https://steamcommunity.com/broadcast/stopbroadcast',
	{
		steamid: _watch.m_ulBroadcastSteamID,
		broadcastid : this.m_ulBroadcastID,
		sessionid: g_sessionID
	}

	).done( function( json )
	{
		$J( '#BroadcastAdminUpdateResult' ).show();
		$J( '#BroadcastAdminUpdateResult' ).css('color', 'green');
		$J( '#BroadcastAdminUpdateResult' ).text( 'Broadcast stopped.' );
		$J( '#BroadcastAdminUpdateResult' ).delay(3000).fadeOut("slow");
	})
	.fail( function()
	{
		$J( '#BroadcastAdminUpdateResult' ).show();
		$J( '#BroadcastAdminUpdateResult' ).css('color', 'red');
		$J( '#BroadcastAdminUpdateResult' ).text( 'Failed to stop broadcast' );
		$J( '#BroadcastAdminUpdateResult' ).delay(3000).fadeOut("slow");
	});
};

CBroadcastWatch.prototype.PostMessageToIFrameParent = function( strMessage, Data )
{
	if ( !this.m_IFrameHelper )
		return;

	this.m_IFrameHelper.PostMessageToIFrameParent( strMessage, Data );
};

CBroadcastWatch.prototype.RegisterParentBroadcastHooks = function(  )
{
	var _watch = this;

	$J( window ).on(
		"message",
		function ( e )
		{
			var Msg = e.originalEvent.data;
			switch( Msg.msg )
			{
				case 'pause':
					if ( ! _watch.m_player.m_elVideoPlayer.paused )
					{
						_watch.m_playerUI.TogglePlayPause();
					}

					// The player may think its pause but the player state may be out of sync. Set it anyways.
					_watch.m_player.SavePlaybackStateFromUI( false );
					_watch.m_playerUI.m_bPlayingLiveEdge = false;
					break;
				case 'toggleplaypause':
					if( _watch.IsPlayStateChangeable() ) {
						_watch.m_playerUI.TogglePlayPause();
					}
					break;
			}
		}
	);
}
