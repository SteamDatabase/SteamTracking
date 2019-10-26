
var g_BroadcastUpdateInterval = 10;
var k_EVideoPlayerPlaybackErrorNone = 0;
var k_EVideoPlayerPlaybackErrorGeneric = 1;
var k_EVideoPlayerPlaybackErrorFailedDownload = 2;

var g_steamIDBroadcaster = '';
var g_strBroadcasterName = '';
var g_chatID = 0;

function InitializeBroadcastWatch( steamID, strBroadcasterName )
{
	$.Msg( "InitializeBroadcastWatch()" );
	g_steamIDBroadcaster = steamID;
	g_strBroadcasterName = strBroadcasterName;

	// add broadcast info to movie control
	var ptrTitle = $.GetContextPanel().FindChildTraverse( 'PlaybackTitle' );
	var ptrBroadcaster = $.GetContextPanel().FindChildTraverse( 'BroadcasterPanel' );
	ptrBroadcaster.SetParent( ptrTitle.GetParent() );

	// fix up default focus on controls
	var ptrControlBar = $.GetContextPanel().FindChildTraverse( 'ControlBar' );
	ptrControlBar.defaultfocus = 'FullscreenControl';

	$.RegisterEventHandler( 'ContributeToFooterPanel', $.GetContextPanel(), function() { return true; });
	$.RegisterEventHandler( 'MoviePlayerFullscreenControl', $.GetContextPanel(), function() { ToggleFullscreen(); });
	$.RegisterEventHandler( 'MoviePlayerPlaybackEnded', $.GetContextPanel(), function( pTarget, eError ) { OnMoviePlaybackEnded( eError ); });

	$.RegisterKeyBind( $.GetContextPanel(), 'pad_x,steampad_x', ToggleFullscreen );

	$.GetContextPanel().SetDialogVariableInt( "viewercount", 0 );

	if ( !$.GetContextPanel().BHasClass( "Dashboard" ) )
	{
		GetBroadcastMPD();
	}
	else
	{
		$.RegisterForUnhandledEvent( 'BroadcastStarted', OnBroadcastStarted );
		$.RegisterForUnhandledEvent( 'BroadcastStopped', OnBroadcastStopped );
		$.RegisterForUnhandledEvent( 'UserJoinedBroadcastChat', OnUserJoinedBroadcastChat );
		$.RegisterForUnhandledEvent( 'UserLeftBroadcastChat', OnUserLeftBroadcastChat );

		SetVideoLoadingText( 'Press Watch to View' );
		if ( g_broadcastID != 0 )
		{
			OnBroadcastIDAcquired( g_broadcastID );
		}
	}

	if($.GetContextPanel().BHasClass('vractive'))
	{
	    $.Schedule(0.1 , function () { $.GetContextPanel().FindChildTraverse('FullscreenControl').SetFocus(); } );
	}
	else
	{
	    $.GetContextPanel().SetFocus();
	}
}

function ToggleFullscreen()
{
	if ( $.GetContextPanel().BHasClass( "ChatVisible" ) )
	{
		$.GetContextPanel().FindChildTraverse( 'BroadcastMoviePlayer' ).AddClass( "Fullscreen" );
		$.GetContextPanel().RemoveClass( "ChatVisible" );
		$.GetContextPanel().RemoveClass( "RightColumnVisible" );
		$("#BroadcastMoviePlayer").SetFocus();
	}
	else
	{
		$.GetContextPanel().FindChildTraverse( 'BroadcastMoviePlayer' ).RemoveClass( "Fullscreen" );
		$.GetContextPanel().AddClass( "ChatVisible" );
		$.GetContextPanel().AddClass( "RightColumnVisible" );
		$("#ChatPanel").SetFocus();
	}
}

function StartBroadcast()
{
	if ( $.GetContextPanel().BHasClass( "Unstarted" ) )
	{
		SetVideoLoadingText( "" );
		$.GetContextPanel().RemoveClass( "Unstarted" );
		GetBroadcastMPD();
	}
}

function OnMoviePlaybackEnded( eError )
{
	$.Msg( "OnMoviePlaybackEnded" + eError );
	if ( eError == k_EVideoPlayerPlaybackErrorNone )
		ShowBroadcastError( AddBroadcasterName( '%s\'s broadcast has ended' ) );
	else if ( eError == k_EVideoPlayerPlaybackErrorFailedDownload )
		GetBroadcastMPD();
	else
		ShowBroadcastError( 'An unexpected error occurred while trying to view this broadcast' );
}

function SetVideoLoadingText( strText )
{
	var ptrStatusPanel = $("#BroadcastMoviePlayer").FindChild( "BroadcastStatusPanel" );
	var ptrStatus = ptrStatusPanel.FindChild( "BroadcastStatusText" );
	ptrStatus.text = strText;
}

function ShowBroadcastError( strError )
{
	var ptrStatusPanel = $("#BroadcastMoviePlayer").FindChild( "BroadcastStatusPanel" );
	var ptrStatus = ptrStatusPanel.FindChild( "BroadcastStatusText" );
	ptrStatus.text = strError;

	$.GetContextPanel().AddClass( 'PlaybackError' );
}

function AddBroadcasterName( strText )
{
	return strText.replace( /%s/, g_strBroadcasterName );
}

function GetBroadcastMPD( rtStartRequest )
{
	$.Msg( "LoadBroadcast( " + g_steamIDBroadcaster + " )" );

	if ( !rtStartRequest )
		rtStartRequest = Date.now();

	$.AsyncWebRequest( 'https://steamcommunity.com/broadcast/getbroadcastmpd',
	{
		type: 'GET',
		data: {
			steamid: g_steamIDBroadcaster,
			broadcastid: g_broadcastID,
			sessionid: g_sessionID,
			watchlocation: 8, /* k_EBroadcastWatchLocation_BigPicture */
		},
		success: function( data )
		{
			$.Msg( "success = " + data.success + ", retry = " + data.retry );
			retrySecs = data.retry / 1000;

			if ( data.success == 'waiting' )
			{
				SetVideoLoadingText( AddBroadcasterName( 'Waiting for a response from %s' ) );
				var rtElapsed = Date.now() - rtStartRequest;
				if ( rtElapsed > 60000 )
				{
					ShowBroadcastError( AddBroadcasterName( '%s\'s broadcast is not available at this time' ) );
					return;
				}

				if ( rtElapsed < 30000 )
				   retrySecs = 5;

				$.Schedule( retrySecs, function() { GetBroadcastMPD( rtStartRequest ); } );
			}
			else if ( data.success == 'waiting_for_start' )
			{
				SetVideoLoadingText( AddBroadcasterName( 'Waiting for %s\'s broadcast to start' ) );
				$.Schedule( retrySecs, function() { GetBroadcastMPD( rtStartRequest ); } );
			}
			else if ( data.success == 'waiting_for_reconnect' )
			{
				SetVideoLoadingText( AddBroadcasterName( 'Waiting for %s to reconnect to Steam' ) );
			   $.Schedule( retrySecs, function() { GetBroadcastMPD( rtStartRequest ); } );
			}
			else if ( data.success == 'ready' )
			{
				$.Msg( "Got broadcast ID = " + data.broadcastid + ", MPD URL = " + data.url );

				$.GetContextPanel().RemoveClass( "BroadcastLoading" );
				OnBroadcastIDAcquired( data.broadcastid );

				var player = $("#BroadcastMoviePlayer");
				player.SetControls( "full" );
				player.SetMovie( data.url );
			}
			else if ( data.success == 'end' )
			{
				ShowBroadcastError( AddBroadcasterName( '%s\'s broadcast has ended' ) );
			}
			else if ( data.success == 'noservers' )
			{
				ShowBroadcastError( AddBroadcasterName( 'Steam is currently experiencing high broadcast load in %s\'s area and is currently unable to reserve a server spot to start this broadcast.<br><br>Please try again in a few minutes.' ) );
			}
			else if ( data.success == 'system_not_supported' )
			{
				ShowBroadcastError( AddBroadcasterName( 'Steam Broadcasting is not currently supported on %s\'s system' ) );
			}
			else if ( data.success == 'user_restricted' )
			{
				ShowBroadcastError( AddBroadcasterName( '%s\'s account is currently restricted from broadcasting on Steam' ) );
			}
			else if ( data.success == 'client_out_of_date' )
			{
				ShowBroadcastError( AddBroadcasterName( '%s\'s client must be updated to support Steam Broadcasting' ) );
			}
			else if ( data.success == 'poor_upload_quality' )
			{
				ShowBroadcastError( AddBroadcasterName( '%s is currently unable to maintain a stable broadcast connection to Steam.' ) );
			}
			else if ( data.success == 'request_failed' )
			{
				ShowBroadcastError( 'Failed to load this broadcast' );
			}
			else
			{
				ShowBroadcastError( AddBroadcasterName( '%s\'s broadcast is not available at this time' ) );
				$.Msg( "getbroadcastmpd returned status " + data.success );
			}
		},
		error: function()
		{
			$.Msg( "GetBroadcastMPD failed" );
			ShowBroadcastError( 'An unexpected error occurred while trying to view this broadcast' );
		}
	});
}


function UpdateBroadcastInfo( steamid, broadcastid )
{
	if ( $.GetContextPanel().IsValid() )
	{
		var popup = $.GetContextPanel();
		
		//$.Msg( "UpdateBroadcastInfo( " + steamid + ", " + broadcastid + " )" );
		$.AsyncWebRequest( 'https://steamcommunity.com/broadcast/getbroadcastinfo/',
						   {
							   type: 'GET',
							   data:
							   {
								   steamid: steamid,
								   broadcastid: broadcastid
							   },
							   success: function( data )
							   {
								   //$.Msg( "GetBroadcastInfo returned " + data.success );
								   if ( data.success == 1 )
								   {
									   //$.Msg( "Got " + data.viewer_count + " viewers" );
									   popup.SetDialogVariableInt( "viewercount", data.viewer_count );

									   var player = $("#BroadcastMoviePlayer");
									   var pTitle = player.FindChildTraverse("PlaybackTitle");
									   pTitle.html = true;

									   var title = '<span class="AppTitle">'  + data.app_title + '</span>';
									   if ( data.title )
									   {
									   		title = title + '<span class="BroadcastTitle"> - ' + data.title + '</span>';
									   }
									   player.SetTitle( title );
								   }
								   
								   if ( data.success != 42 )
								   {
									   $.Schedule( g_BroadcastUpdateInterval, function() { UpdateBroadcastInfo( steamid, broadcastid ) } );
								   }
							   },
							   error: function()
							   {
								   $.Schedule( g_BroadcastUpdateInterval, function() { UpdateBroadcastInfo( steamid, broadcastid ) } );
							   }
						   }
						 );
	}
}

function UpdateBroadcastViewers( chatid )
{
	if ( $.GetContextPanel().IsValid() && $("#ViewerList") )
	{
		$.Msg( "UpdateBroadcastViewers( " + chatid + " )" );
		$.AsyncWebRequest( 'https://steamcommunity.com/broadcast/getbroadcastviewers/',
			{
				type: 'GET',
				data:
				{
					chatid: chatid,
				},
				success: function( data )
				{
					$.Msg( "GetBroadcastViewers: " + data.viewer_count);
					var pList = $("#ViewerList");

					pList.RemoveAndDeleteChildren();

					for ( var i = 0; i < data.viewer_count; i++ )
					{
						var viewer = data.viewers[i];
						var pChild = $.CreatePanel( 'Label', pList, viewer.id );
						pChild.text = viewer.name;
						pChild.SetHasClass( 'ingame', viewer.in_game );
					}
					$("#BroadcastViewers").SetDialogVariableInt( 'viewercount', pList.GetChildCount() );
				}
			}
		);

	}
}

function StartChat( steamid, broadcastid )
{
	$.Msg( "StartChat( " + steamid + ", " + broadcastid + " )" );
	$.AsyncWebRequest( 'https://steamcommunity.com/broadcast/getchatinfo/',
		{
			type: 'GET',
			data:
			{
				steamid: steamid,
				broadcastid: broadcastid
			},
			success: function( data )
			{
				if ( data.success == 1 )
				{
					g_chatID = data.chat_id;
					UpdateBroadcastViewers( g_chatID );
				}
			}
		}
	);
	$("#ChatPanel").SetSession( steamid, broadcastid );
}

function OnBroadcastIDAcquired( broadcastid )
{
	$.Msg( "OnBroadcastIDAcquired( " + broadcastid + " )" );
	g_broadcastID = broadcastid;
	UpdateBroadcastInfo( g_steamIDBroadcaster, broadcastid );
	StartChat( g_steamIDBroadcaster, broadcastid );
}

function OnBroadcastStarted( broadcastid )
{
	$.Msg( "OnBroadcastStarted( " + broadcastid + " )" );

	if ( g_broadcastID != broadcastid )
	{
		OnBroadcastIDAcquired( broadcastid );
	}
}

function OnBroadcastStopped( broadcastid )
{
	$.Msg( "OnBroadcastStopped( " + broadcastid + " )" );
}

function OnUserJoinedBroadcastChat( broadcastid, name, steamid, bInGame )
{
	$.Msg( "OnUserJoinedBroadcastChat( " + broadcastid + ", " + name + ", " + steamid + ", " + bInGame );
	if ( broadcastid == g_broadcastID && $("#ViewerList") )
	{
		var pList = $("#ViewerList");
		var pChild = pList.FindChild( steamid );
		if ( !pChild )
		{
			pChild = $.CreatePanel( 'Label', pList, steamid );
			pChild.text = name;
		}
		pChild.SetHasClass( 'ingame', bInGame );
		$("#BroadcastViewers").SetDialogVariableInt( 'viewercount', pList.GetChildCount() );
	}
}

function OnUserLeftBroadcastChat( broadcastid, name, steamid, bInGame )
{
	$.Msg( "OnUserLeftBroadcastChat( " + broadcastid + ", " + name + ", " + steamid + ", " + bInGame );
	if ( broadcastid == g_broadcastID )
	{
		var pList = $("#ViewerList" && $("#ViewerList") );
		var pChild = pList.FindChild( steamid );
		if ( pChild )
		{
			pChild.DeleteAsync( 0.0 );
		}
		$("#BroadcastViewers").SetDialogVariableInt( 'viewercount', pList.GetChildCount() - 1 );
	}
}