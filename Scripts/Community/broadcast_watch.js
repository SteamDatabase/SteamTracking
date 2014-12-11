
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


var CBroadcastWatch = function( steamID, name, eClientType )
{
	this.m_ulBroadcastSteamID = steamID;
	this.m_strBroadcastName = name;
	this.m_ulBroadcastID = 0;
	this.m_eClientType = eClientType;
	this.m_timeoutUpdate = null;
	this.m_elVideoPlayer = document.getElementById( 'videoplayer' );
	this.m_xhrViewUsers = null;
	this.m_bUnlockingH264 = false;
}

CBroadcastWatch.s_UpdateTimeoutSec = 120;
CBroadcastWatch.k_InBrowser = 1;
CBroadcastWatch.k_InClient = 2;
CBroadcastWatch.k_InOverlay = 3;
CBroadcastWatch.k_InOldClient = 4;

CBroadcastWatch.prototype.GetBroadcastID = function()
{
	return this.m_ulBroadcastID;
}

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
}

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
}

CBroadcastWatch.prototype.WaitUnlockH264 = function( rtStart )
{
	if ( BMediaSourceExtensionsSupported() )
	{
		this.Start();
		return;
	}

	if ( Date.now() - rtStart > 30000 )
	{
		this.ShowVideoError( 'Failed to apply a Steam update that is required to watch this broadcast.<br><br>Please ensure your client is connected to Steam and try again.' );
		return;
	}

	var _watch = this;
	window.setTimeout( function() { _watch.WaitUnlockH264( rtStart ); }, 5000 );
}

CBroadcastWatch.prototype.Start = function()
{
	var _watch = this;
	if ( !BMediaSourceExtensionsSupported() )
	{
		if ( this.m_eClientType != CBroadcastWatch.k_InBrowser )
		{
			this.UnlockH264();
			return;
		}

		this.ShowVideoError( 'Your web browser does not support the minimum set of features required to watch this broadcast.<br><br>Try again using the Steam Client or <a href="https://support.steampowered.com/kb_article.php?ref=6730-TOAK-6497">visit the Broadcast FAQ</a> for a list of supported browsers.' );
		return;
	}

	this.m_chat = new CBroadcastChat( this.m_ulBroadcastSteamID );
	this.m_player = new CBroadcastPlayer( this.m_elVideoPlayer );
	this.m_playerUI = new CBroadcastPlayerUI( this.m_player );
	this.m_playerUI.Init();

	$J( this.m_elVideoPlayer ).on( 'bufferingcomplete.BroadcastWatchEvents', function() { _watch.OnPlayerBufferingComplete(); } );
	$J( this.m_elVideoPlayer ).on( 'downloadfailed.BroadcastWatchEvents', function() { _watch.OnPlayerDownloadFailed(); } );
	$J( this.m_elVideoPlayer ).on( 'playbackerror.BroadcastWatchEvents', function() { _watch.OnPlayerPlaybackError(); } );

	this.GetBroadcastMPD();
}

CBroadcastWatch.prototype.OnPlayerBufferingComplete = function()
{
	$J( '#PageContents' ).removeClass( 'LoadingVideo' );
}

CBroadcastWatch.prototype.OnPlayerDownloadFailed = function()
{
	this.SetVideoLoadingText( 'Loading...' );
	this.GetBroadcastMPD();
}

CBroadcastWatch.prototype.OnPlayerPlaybackError = function()
{
	this.ShowVideoError( 'An unexpected error occurred while playing this video' );
}

CBroadcastWatch.prototype.AddBroadcasterName = function( str )
{
	var strEscaped = $J( '<span/>' ).text( this.m_strBroadcastName ).html();
	return str.replace( /%s/, strEscaped );
}

function LocalizeCount( strSingular, strPlural, nValue )
{
	if ( nValue == 1 )
		return strSingular;

	return strPlural.replace( /%s/, v_numberformat( nValue ) );
}

CBroadcastWatch.prototype.GetBroadcastMPD = function( rtStartRequest )
{
	$J( '#PageContents' ).addClass( 'LoadingVideo' );

	var _watch = this;
	if ( !rtStartRequest )
		rtStartRequest = Date.now();

	$J.ajax( {
		url: 'https://steamcommunity.com/broadcast/getbroadcastmpd/',
		data: {
			steamid: _watch.m_ulBroadcastSteamID,
			broadcastid: _watch.m_ulBroadcastID
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
			setTimeout( function() { _watch.GetBroadcastMPD( rtStartRequest ) }, timeout );
		}
		else if ( data.success == 'waiting_for_start' )
		{
			_watch.SetVideoLoadingText( _watch.AddBroadcasterName( 'Waiting for %s\'s broadcast to start' ) );
			setTimeout( function() { _watch.GetBroadcastMPD() }, data.retry );
		}
		else if ( data.success == 'waiting_for_reconnect' )
		{
			_watch.SetVideoLoadingText( _watch.AddBroadcasterName( 'Waiting for %s to reconnect to Steam' ) );
			setTimeout( function() { _watch.GetBroadcastMPD() }, data.retry );
        	}
		else if ( data.success == 'ready' )
		{
			_watch.m_ulBroadcastID = data.broadcastid;
			_watch.LoadBroadcastMPD( data.url );

			_watch.SetBroadcastInfo( data );
			_watch.ScheduleBroadcastInfoUpdate();

			_watch.m_chat.RequestChatInfo(data.broadcastid);
			$J( '#PageContents' ).addClass( 'ShowPlayer' );
		}
		else if ( data.success == 'end' )
		{
			_watch.ShowVideoError( _watch.AddBroadcasterName( '%s\'s broadcast has ended' ) );
		}
		else if ( data.success == 'noservers' )
		{
			_watch.ShowVideoError( _watch.AddBroadcasterName( 'BroadcastWatch_BroadcastWatch_ServersTooBusy' ) );
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
		_watch.ShowVideoError( 'An unexpected error occurred while trying to load this broadcast' );
	});
}

CBroadcastWatch.prototype.LoadBroadcastMPD = function( url )
{
	this.m_player.Close();
	this.m_player.PlayMPD( url );
}

CBroadcastWatch.prototype.UpdateBroadcastInfo = function()
{
	var _watch = this;
	$J.ajax( {
		url: 'https://steamcommunity.com/broadcast/getbroadcastinfo/',
		data:
		{
			steamid: _watch.m_ulBroadcastSteamID,
			broadcastid: _watch.m_ulBroadcastID
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
}

CBroadcastWatch.prototype.SetBroadcastInfo = function( data )
{
	$J( '#BroadcastViewerCount' ).text( LocalizeCount( '1 viewer', '%s viewers', data.viewer_count ) );

	var strTitle = data.title;
	if ( !strTitle || strTitle.length == 0 )
		strTitle = 'Playing: ' + data.app_title;

	var strBroadcastURL = 'http://steamcommunity.com/app/' + data.appid + '/broadcasts';
	if ( data.appid == 0 )
		strBroadcastURL = 'http://steamcommunity.com?subsection=broadcasts';

	var strStoreURL = 'http://store.steampowered.com/app/' + data.appid;
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
	}
	else
	{
		$J( '#ViewStorePage' ).show();
	}

	$J( '#BroadcastTitle' ).text( strTitle );
	$J( '#MoreBroadcastLink' ).attr( 'href', strBroadcastURL).attr( 'target', target );
	$J( '#ViewStorePage' ).attr( 'href', strStoreURL).attr( 'target', target );

	$J( '#BroadcastInfoRow' ).show();
}

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
}

CBroadcastWatch.prototype.SubmitChat = function()
{
	if ( this.m_chat )
		this.m_chat.ChatSubmit();
}

CBroadcastWatch.prototype.FocusChatTextArea = function()
{
	$J( chatmessage ).attr( 'placeholder', '' );
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

	if ( !this.m_chat || this.m_chat.GetChatID() == 0 )
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

	var _watch = this;
	this.m_xhrViewers = $J.ajax(
	{
		url: 'https://steamcommunity.com/broadcast/getbroadcastviewers/',
		data: {
			chatid: _watch.m_chat.GetChatID()
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
				var elUser = $J( '<div><a href="https://steamcommunity.com/profiles/' + viewer.id + '" target="_blank">' + viewer.name + '</a></div>' );
				BindSingleMiniprofileHover( elUser.children( 'a' ).data( 'miniprofile', 's' + viewer.id ) );
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
}

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
}

CBroadcastWatch.prototype.MinimizeChat = function()
{
	$J( '#PageContents' ).addClass( 'MinimizedChat' );
}

CBroadcastWatch.prototype.MaximizeChat = function()
{
	$J( '#PageContents' ).removeClass( 'MinimizedChat' );
}

CBroadcastWatch.prototype.ReportBroadcast = function()
{
	if ( this.m_ulBroadcastID == 0 || $J( '#ReportBroadcast' ).hasClass( 'Reported' ) )
		return;

	var dialog = ShowPromptWithTextAreaDialog( 'Report this item', '', null, null, 1000 );
	var explanation = $J('<div/>', { 'class': 'report_dialog_explanation' } );
	explanation.html( 'Please enter the reason why you are reporting this item for violating the Steam Terms of Service. This cannot be undone.' );

	var textArea = dialog.m_$Content.find( 'textarea' );
	textArea.addClass( "report_dialog_text_area" );
	textArea.parent().before( explanation );

	var _watch = this;
	dialog.done( function( data )
	{
		data = v_trim( data );
		if ( data.length < 1 )
		{
			alert( 'Please enter a valid reason.')
			return;
		}

		$J.post( 'https://steamcommunity.com/broadcast/report',
		{
			steamid: _watch.m_ulBroadcastSteamID,
			broadcastid: _watch.m_ulBroadcastID,
			description: data,
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
}

//////////////////////////////////////////////////
// Stats
//////////////////////////////////////////////////
CBroadcastStats = function( element )
{
	this.elePlayer = element;
	this.eleOverlay = $J('<div class="VideoStatsOverlay"></div>')[0];
	$J(this.elePlayer).parent().append( this.eleOverlay );

	this.timerTick = false;
	this.timerSecond = false;
	this.nDecodedFramesPerSecond = 0;
	this.bRunning = false;
}

CBroadcastStats.prototype.Show = function() {
	if( this.bRunning )
		return;

	this.bRunning = true;

	$J(this.eleOverlay).show();
	var context = this;
	this.timerTick = setInterval( function() { context.Tick() }, 1000/60 );
	this.timerCalculateTotals = setInterval(function() { context.CalculateTotals() }, 500);
}

CBroadcastStats.prototype.Hide = function() {
	if( !this.bRunning )
		return;

	this.bRunning = false;

	$J(this.eleOverlay).hide();
	clearInterval(this.timerTick);
	clearInterval(this.timerCalculateTotals);
}

CBroadcastStats.prototype.Toggle = function() {
	if( this.bRunning )
		this.Hide();
	else
		this.Show();
}

CBroadcastStats.prototype.CalculateTotals = function()
{
	// runs on a 500ms timer, so frame counts must be multiplied by 2.
	this.nDecodedFramesPerSecond = 2 * ( ( ele.mozDecodedFrames || ele.webkitDecodedFrames || ele.webkitDecodedFrameCount ) - ( this.nLastDecodedFrames || 0 ) )
	this.nLastDecodedFrames = ( ele.mozDecodedFrames || ele.webkitDecodedFrames || ele.webkitDecodedFrameCount );

}

CBroadcastStats.prototype.FormattingBytesToHuman = function ( nBytes )
{
	if( nBytes < 1000 )
		return nBytes + " B";
	if( nBytes < 1000000 )
		return ( nBytes / 1000 ).toFixed(2) + ' KB';

	if( nBytes < 1000000000)
		return ( nBytes / 1000000 ).toFixed(2) + ' MB';

	return (nBytes / 1000000000 ).toFixed(2) + ' GB';
}

CBroadcastStats.prototype.Tick = function() {
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
			id: 'videoSize',
			label: 'Video Size',
			value: ele.videoWidth +"x" + ele.videoHeight + " (Scaled to "+$ele.innerWidth() + "x" + $ele.innerHeight()+ ")"
		},
		{
			id: 'decodedFramesPerSecond',
			label: 'Decoded Frames Per Second',
			value: this.nDecodedFramesPerSecond
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
				$target.text( rgStatDefinition.value );
		}
	}
}
