
var g_rgParams = {};
var g_filterType = 0;
var g_sortOption = "trendweek";

function DebugOut(x)
{
	// $.Msg( x );
}

function InitializeAppHubs()
{
	$.RegisterEventHandler( 'LoadAsyncComplete', 'AppHubTemp', MoveNewPanelsToView );

	var bShowSearch = $("#CommunityContent").BHasClass( "AppHubCommunityHome" );
	if ( bShowSearch )
	{
		var panel = $("#CommunityContent");
		$.RegisterKeyBind( panel, 'pad_x,steampad_x', DisplaySearchPanel );
		$.RegisterFooterButton( panel, "pad_x", "FIND HUBS" );

		$.RegisterEventHandler( 'Activated', $("#AppHubSearchButton"), function( panel, src ) { DisplaySearchPanel(src); } );
	}

	//
	// Mark the app hub as visited if we're in a particular hub
	//
	if ( g_appID )
	{
		var current = $.ClientConfigStore().GetString( $.ClientConfigStore().k_EConfigStoreUserLocal, "BigPicture/RecentlyVisitedAppHubs", "" );
		var rgApps = current == "" ? [] : current.split(",");
		var i = rgApps.indexOf( g_appID );
		if ( i != -1 )
		{
			rgApps.splice( i, 1 );
		}
		var cMaxShortcuts = 20;
		rgApps.unshift( g_appID );
		rgApps = rgApps.slice( 0, cMaxShortcuts - 1 );

		$.ClientConfigStore().SetString( $.ClientConfigStore().k_EConfigStoreUserLocal, "BigPicture/RecentlyVisitedAppHubs", rgApps.join() );
	}

	$.RegisterEventHandler('AppHubSelectFilter', $.GetContextPanel(), function( panel, i ) {DebugOut("AppHubSelectFilter( " + i + " )" ); SelectContentFilter( i, g_sortOption, {} ); } );
/*
	$.RegisterEventHandler( 'PagePanelLeft', $("#AppHubItems"),
		function()
		{
			DebugOut( "PagePanelLeft" );
			$.DispatchEvent( "MoveLeft", $("#AppHubItems").defaultfocus, 1 );
			return true;
		} );
	$.RegisterEventHandler( 'PagePanelRight', $("#AppHubItems"),
		function()
		{
			DebugOut( "PagePanelRight" );
			$.DispatchEvent( "MoveRight", $("#AppHubItems").defaultfocus, 1 );
			return true;
		} );
*/
	$.GetContextPanel().AddClass( "LoadingVisible" );
}

function InitializeSpecificAppHub( section, rgParams )
{
	InitializeAppHubs();

	InitializeTagFilters();

	SelectContentFilter( section, g_sortOption, rgParams );

	if ( g_bHasAdultContent )
	{
		$( "#AgeGatePanel" ).AddClass( "AgeGateVisible" );
		$( "#AppHubContent" ).AddClass( "AgeGateVisible" );
		$( "#AgeGateButton").SetFocus();
	}
}

function ViewAgeGatedContent()
{
	$( "#AgeGatePanel" ).RemoveClass( "AgeGateVisible" );
	$( "#AppHubContent" ).RemoveClass( "AgeGateVisible" );

	var params = {};
	$.AsyncWebRequest( 'https://steamcommunity.com/app/' + g_appID + '/setignoreagegatecookie',
		{
			type: 'POST',
			data: params,
			success: function( data )
			{
				if ( data.success )
				{
					DebugOut( "setagegatecookie succeeded" );
					$( "#AppHubContent" ).SetFocus();
				}
			},
			error: function()
			{
				DebugOut( "setagegatecookie failed" );
			}
		}
	);
}

function OnDescendantFocus()
{
	// BUGBUG: Remove when home/apphub focus fix is in
	var panelHide;
	if ( !$("#CommunityContent").BHasClass( "AppHubAppPage" ) )
	{
		panelHide = $.GetContextPanel().GetParent().FindChild( "CommunityGameHub" );
		if ( panelHide )
		{
			panelHide.RemoveClass( "CommunityVisible" );
			panelHide.AddClass( "CommunityInvisible" );
		}
	}
}


//
// Manage "infinite scroll" download of additional panels
//
function ClearMoreContentEvent( panel )
{
	panel.ClearPanelEvent( "onscrolledtobottom" );
}


function SetMoreContentEvent( panel, base, params )
{
	panel.SetPanelEvent( "onscrolledtobottom", function() { DebugOut( "FetchBottom" ); FetchContentAndReregister( base, params ); } );
}


function MoveNewPanelsToView( pTarget, bSuccess, eDetail, bPartial )
{
	pTarget = ToPanel( pTarget );
	var panel = $( "#AppHubItems" );
	var tempPanel = $( "#AppHubTemp" );

	if ( pTarget.id != tempPanel.id )
	{
		return;
	}

	var nextParams = tempPanel.GetAttributeString( "nextquery", "" );

		if ( nextParams.length == 0 && tempPanel.GetChildCount() == 1 )
	{
		tempPanel = tempPanel.GetChild( 0 );
		nextParams = tempPanel.GetAttributeString( "nextquery", "" );
	}

	DebugOut( "nextParams = " + nextParams );

	$( "#ThrobberPanel" ).AddClass( "ContentLoaded" );
	$( "#ThrobberPanel" ).RemoveClass( "First" );

	if ( bSuccess )
	{
		if ( tempPanel.GetChildCount() == 0 )
		{
			// No more items
			DebugOut( "No more items, clearing event" );
			ClearMoreContentEvent( panel );

			//
			// If there are no items loaded at all, put up the
			// no content message
			//
			if ( panel.GetChildCount() == 0 )
			{
				panel.GetParent().AddClass( "NoContent" );
			}
			return;
		}
		// Everybody is in tempPanel. Move everyone up to the items panel
		while ( tempPanel.GetChildCount() > 0 )
		{
			var panelChild = tempPanel.GetChild( 0 );
			panelChild.SetParent( panel );
			if ( !panel.defaultfocus )
			{
				panel.defaultfocus = panelChild.id;
			}
			if ( g_bFocusFirstCard )
			{
				panel.SetFocus();
				if ( $("#AppHubMenuRowButtons") )
				{
					$("#AppHubMenuRowButtons").AddClass( "FirstFocusDone" );
				}
				g_bFocusFirstCard = false;
			}
			SetupFooterButtonsForPage( panelChild );

			GetVotes( panelChild );
			GetSubscriptionStatus( panelChild );

			$.RegisterEventHandler( 'ScrolledOutOfView', panelChild, function()
			{
				DebugOut( "scrolled out of view: " + panelChild.id );
				panelChild.AddClass( "OutOfView" );
				panelChild.SetReadyForDisplay( false );
			} );

			$.RegisterEventHandler( 'ScrolledIntoView', panelChild, function()
			{
				DebugOut( "scrolled into view: " + panelChild.id );
				panelChild.RemoveClass( "OutOfView" );
				panelChild.SetReadyForDisplay( true );
			} );

		}
		SetMoreContentEvent( panel, panel.GetAttributeString( "baseurl", "" ), JSON.parse(nextParams) );
	}
	else
	{
		DebugOut( "LoadAsync failed" );
	}
}


function GetVotes( panel )
{
	DebugOut( "GetVotes( " + panel.id + " )" );
	var items = panel.FindChildrenWithClassTraverse( "Voteable" );

	var params = {};
	for ( i = 0; i < items.length; i++ )
	{
		params['publishedfileids[' + i + ']'] = items[i].GetAttributeInt( "itemid", 0 );
	}

	DebugOut( JSON.stringify( params ) );

	$.AsyncWebRequest( 'https://steamcommunity.com/sharedfiles/ajaxgetvotes',
					   {
						   type: 'POST',
						   data: params,
						   success: function( data )
						   {
							   if ( data.success && data.votes )
							   {
								   for ( i = 0; i < data.votes.length; i++ )
								   {
									   if ( data.votes[i].votesfor )
									   {
										   var thumb = $("#VoteUp_" + data.votes[i].publishedfileid);
										   thumb.AddClass("VoteUp");
									   }
								   }
							   }
						   },
						   error: function()
						   {
							   DebugOut( "GetVotes failed" );
						   }
					   }
					   );
}

function GetSubscriptionStatus( panel )
{
	var items = panel.FindChildrenWithClassTraverse( "Subscribeable" );
	if ( items.length == 0 )
	{
		$.Msg( "No subscribe-able content found!" );
		return;
	}

	var params = { appid: g_appID };
	for ( i = 0; i < items.length; i++ )
	{
		var publishedfileid = items[i].GetAttributeInt( "itemid", 0 );
		var appid = items[i].GetAttributeInt( "appid", 0 );
		params['appid'] = appid;
		params['publishedfileids[' + i + ']'] = items[i].GetAttributeInt( "itemid", 0 );
	}

	$.AsyncWebRequest( 'https://steamcommunity.com/sharedfiles/ajaxgetsubscriptionstatus',
		{
			type: 'POST',
			data: params,
			success: function( data )
			{
				if ( data.success && data.publishedfileids )
				{
					for ( i = 0; i < data.publishedfileids.length; i++ )
					{
						var publishedfileid = data.publishedfileids[i];
						var toggleButton = $( "#PublishedFileSubscriptionStatus_" + publishedfileid );
						if ( toggleButton )
						{
							toggleButton.SetSelected( true );
						}
					}
				}
				$.Msg( "ajaxgetsubscriptionstatus: " + data.success + " => " + data.publishedfileids.length );
			},
			error: function()
			{
				//DebugOut( "GetSubscriptionStatus failed" );
				$.Msg( "GetSubscriptionStatus failed" );
			}
		}
	);
}

function LoadAndAppendContent( panel, nRequest, baseurl, params )
{
	$.AsyncWebRequest( baseurl,
		{
			type: 'GET',
			data: params,
			success: function( data )
			{
				if ( nRequest == g_nRequest )
				{
					var pTemp = $( "#AppHubTemp" );
					pTemp.RemoveAndDeleteChildren();
					if ( pTemp.BCreateChildren( data ) )
					{
						MoveNewPanelsToView( pTemp, true, 0, false );
					}
					else
					{
						$.Msg( 'Failed to create children loaded for: ' + baseurl );
					}
				}
				else
				{
					DebugOut( "Request mismatch: Found " + g_nRequest + ", expected " + nRequest );
				}
			},
			error: function() { 	$( "#ThrobberPanel" ).AddClass( "ContentLoaded" ); DebugOut( "Failed to load " + url ); }
		}
	);
}

var g_nRequest = 0;

function FetchContentAndReregister( base, params )
{
	var panel = $( "#AppHubItems" );

	DebugOut( "FetchContentAndReregister( " + base + ", " + JSON.stringify( params ) );

	panel.GetParent().RemoveClass( "NoContent" );
	$( "#ThrobberPanel" ).RemoveClass( "ContentLoaded" );
	ClearMoreContentEvent( panel );
	g_nRequest++;
	LoadAndAppendContent( panel, g_nRequest, base, params );
}


//
// Manage screenshot popups (and others if we get that hooked up)
//

//
// For the scheduled close of the bottom bar, keep track of which
// corresponding show the scheduled function is for, to avoid
// closing prematurely if the user toggles the bar up and down
// or rapidly switches between screenshots
//
var g_BottomBarInstance = 0;

function ScheduleHideBottomBar( bottombar, instance )
{
	$.Schedule( 2, function()
				{
					if ( instance == g_BottomBarInstance && bottombar.IsValid() )
					{
						bottombar.RemoveClass( "Show" );
						$.DispatchEvent( 'QueuedInvalidateFooterPanel' );
					}
				} );
}

function ShowBottomBar( bottombar )
{
	if ( !bottombar.BHasClass( "Show" ) )
	{
		var instance = ++g_BottomBarInstance;
		bottombar.AddClass( "Show" );
		$.DispatchEvent( 'QueuedInvalidateFooterPanel' );
		ScheduleHideBottomBar( bottombar, instance );
	}	
}

function SwitchScreenshotItem( panelid, popup, xoffset )
{
	if ( panelid )
	{
		//
		// Momentarily throw focus to the panel we're about to view.
		// This will make sure that it's in view when we dismiss and
		// as a side benefit will load more panels if we approach the right
		// edge.
		//
		$("#"+panelid).SetFocus();
		popup.SetFocus();


		var button = popup.FindChildTraverse( "CommunityAppHubPopupButton" );
		button.style.transform='translatex( ' + xoffset + 'px )';

		var throbber = popup.FindChildTraverse( "Throbber" );
		$.Schedule( 0.3, function()
		{
			throbber.RemoveClass( "LoadComplete" );
			button.style.opacity = 0;
			button.style.transform = 'translatex( ' + (-xoffset) + 'px )';

			SetupPopupForPanel( "#" + panelid, popup );
			SetupAppHubPopupForPanel( "#" + panelid, popup );
		} );
	}
}

function ShowPreviousItem( popup )
{
	var panelid = popup.GetAttributeString( "sourcepanel", "" );
	var prev = GetPreviousItem( panelid );
	SwitchScreenshotItem( prev, popup, 1920 );
}

function GetPreviousItem( panelid )
{
	var rgComponents = panelid.match( /#Page(\d*)_(\d*)/);
	var page = Number( rgComponents[1] );
	var item = Number( rgComponents[2] );

	while ( page > 0 )
	{
		while ( item > 0 )
		{
			item--;
			var panel = $("#Page" + page + "_" + item );
			if ( panel && ( panel.BHasClass( "Artwork" ) || panel.BHasClass( "Screenshot" ) ) )
			{
				return panel.id;
			}
		}
		page--;

		var pagePanel = $("#PagePanel_" + page );
		if ( pagePanel )
		{
			// Find the rightmost child
			var pageCount = pagePanel.GetChildCount();
			var lastPage = pagePanel.GetChild( pageCount - 1);
			if ( lastPage.BHasClass( "AppHubItemStack" ) )
			{
				// Get the second item in the stack, there are always
				// exactly two children
				lastPage = lastPage.GetChild( 1 );
			}
			item = Number( lastPage.id.match( /Page\d*_(\d*)/)[1] );
		}
	}

	return false;
}

function ShowNextItem( popup )
{
	var panelid = popup.GetAttributeString( "sourcepanel", "" );
	var next = GetNextItem( panelid );
	SwitchScreenshotItem( next, popup, -1920 );
}

function GetNextItem( panelid )
{
	var rgComponents = panelid.match( /#Page(\d*)_(\d*)/);
	var page = Number( rgComponents[1] );
	var item = Number( rgComponents[2] );

	while ( true )
	{
		while ( true )
		{
			item++;
			var panel = $("#Page" + page + "_" + item );
			if ( !panel )
			{
				break;
			}

			if ( panel.BHasClass( "Artwork" ) || panel.BHasClass( "Screenshot" ) )
			{
				return panel.id;
			}
		}
		page++;

		var pagePanel = $("#PagePanel_" + page );
		if ( pagePanel )
		{
			item = 0;
		}
		else
		{
			break;
		}
	}

	return false;


}

function SetupAppHubPopupForPanel( panelid, popup )
{
	var panel = ToPanel(panelid);

	var file_type = panel.GetAttributeInt( "file_type", 0 ) || panel.GetAttributeInt( "file-type", 0 );
	var url = panel.GetAttributeString( "url", "" );
	var upvotes = panel.GetAttributeString( "votesfor", 0 );
	var comments = panel.GetAttributeString( "comments", 0 );
	var appname = panel.GetAttributeString( "appname", "" ) || panel.GetAttributeString( "file-app-name", 0 );
	var title = panel.GetAttributeString( "title", "" ) || panel.GetAttributeString( "file-title", 0 );

	//
	// User votes are read after the panel has loaded, so we won't find them in the
	// main panel attributes.  Go look at how the thumb is styled and that tells us whether or
	// not the user has upvoted.
	//
	var voteup = false;
	if( panel.FindChildrenWithClassTraverse( "AppHubCardRatingPanel" )[0] )
		voteup = panel.FindChildrenWithClassTraverse( "AppHubCardRatingPanel" )[0].BHasClass( "VoteUp" );

	popup.FindChildTraverse("Title").text = title;
	popup.FindChildTraverse("AppName").text = appname;
	popup.FindChildTraverse("UpVotes").text = upvotes;
	popup.FindChildTraverse("Comments").text = comments;

	switch( file_type )
	{
		case 4:
		{
			var browser = popup.FindChildTraverse("CommunityAppHubPopupVideoBrowser");
			var video_url = panel.GetAttributeString( "video_url", "" )  || 'https://steamcommunity.com/sharedfiles/youtube/' + panel.GetAttributeString( "file-youtube-id", 0 );
			browser.SetURL( video_url );
		}
		break;

		default:
		{
			popup.FindChildTraverse("CommunityAppHubPopupBackground").SetImage( url );
			popup.FindChildTraverse("CommunityAppHubPopupImage").SetImage( url );
		}
		break;
	}

	var votepanel = popup.FindChildTraverse("VotePanel");
	if ( voteup )
	{
		votepanel.AddClass( "VoteUp" );
	}
	else
	{
		votepanel.RemoveClass( "VoteUp" );
	}

	// Copy some attributes to the panel for later use in events
	var details = panel.GetAttributeString( "details", "" );
	var itemid = panel.GetAttributeString( "itemid", "" );
	var appid = panel.GetAttributeInt( "appid", 0 );


	popup.SetAttributeString( "details", details );
	popup.SetAttributeString( "itemid", itemid );
	popup.SetAttributeInt( "appid", appid );
}

function PopupContributeToFooterPanel( pPanel, pFooter )
{
	$.Schedule( 2, function()
	{
		DebugOut( "PopupContributeToFooterPanel - scheduled" );
		pFooter.HideAllPanels();
	} );

	return true;
}

function DisplayAppHubPopup( layout, panelid )
{
	DisplayBigPicturePopup(
		layout,
		panelid,
		function( bSuccess, panelid, popup ) {
			if ( bSuccess )
			{
				SetupAppHubPopupForPanel( panelid, popup );

				var throbber = popup.FindChildTraverse( "Throbber" );
				var image = popup.FindChildTraverse( "CommunityAppHubPopupImage" );
				var browser = popup.FindChildTraverse( "CommunityAppHubPopupVideoBrowser" );
				var button = popup.FindChildTraverse( "CommunityAppHubPopupButton" );
				var bottombar = popup.FindChildTraverse( "CommunityAppHubPopupBottomBar" );

				button.style.transform = 'translate3d( ' + popup.GetAttributeInt( "x", 0 ) + 'px, ' + popup.GetAttributeInt( "y", 0 ) + 'px, 0px )';
				button.style.preTransformScale2d = '0.0';

				if ( image )
				{
					$.RegisterEventHandler( 'PanelLoaded', image, function()
					{
						DebugOut( "Image loaded" );

						throbber.AddClass( "LoadComplete" );
						$.Schedule( 0.1, function() {
								button.style.opacity = 1;
								button.style.preTransformScale2d = '1.0';
								button.style.transform='translatex( 0px )';
								ShowBottomBar( bottombar );
							}

						);
						$.DispatchEventAsync( 0.1, 'SetInputFocus', button );
					} );
				}
				else if ( browser )
				{
					$.RegisterEventHandler( 'PanelLoaded', browser, function()
					{
						DebugOut( "Browser loaded" );

						throbber.AddClass( "LoadComplete" );
						{
							button.style.opacity = 1;
							button.style.preTransformScale2d = '1.0';
							button.style.transform='translatex( 0px )';
							ShowBottomBar( bottombar );
						};
						$.DispatchEventAsync( 0.1, 'SetInputFocus', button );
					} );
				}

				if ( image )
				{
					$.RegisterKeyBind( button, 'pad_a,steampad_a', function() { CloseBigPicturePopup(); GoToScreenshotDetails( popup.GetAttributeString( "details", "" ) ); } );
					$.RegisterFooterButton( button, "pad_a", "VIEW DETAILS" );

					$.RegisterKeyBind( button, 'pad_ltrigger,steampad_ltrigger,pad_left,key_left,steampad_stick1_left,pad_stick1_left', function() { ShowPreviousItem( popup ); } );
					$.RegisterKeyBind( button, 'pad_rtrigger,steampad_rtrigger,pad_right,key_right,steampad_stick1_right,pad_stick1_right', function() { ShowNextItem( popup ); } );
				}
				else if ( browser )
				{
					$.RegisterKeyBind( button, 'pad_a,steampad_a', function() {	browser.RunJavascript( "toggleVideoPlayback();" ); } );
					$.RegisterFooterButton( button, "pad_a", "PLAY/PAUSE" );

					$.RegisterKeyBind( button, 'pad_ltrigger,steampad_ltrigger', function() {	browser.RunJavascript( "rewindVideo();" ); } );
					$.RegisterKeyBind( button, 'pad_ltrigger(up),steampad_ltrigger(up)', function() {	browser.RunJavascript( "stopSeek();" ); } );

					$.RegisterKeyBind( button, 'pad_rtrigger,steampad_rtrigger', function() { browser.RunJavascript( "fastForwardVideo();" ); } );
					$.RegisterKeyBind( button, 'pad_rtrigger(up),steampad_rtrigger(up)', function() { browser.RunJavascript( "stopSeek();" ); } );
				}

				$.RegisterKeyBind( button, 'pad_y,steampad_y', function() { ShowBottomBar( bottombar ); VoteUpItem( popup.GetAttributeString( "itemid", "" ), bottombar.FindChildTraverse( "VotePanel" ) ); } );
				$.RegisterFooterButton( button, "pad_y", "RATE UP" );

				var appid = popup.GetAttributeInt( "appid", 0 ) || popup.GetAttributeInt( "file-appid", 0 );
				if ( appid )
				{
					$.RegisterKeyBind( button, 'pad_x,steampad_x', function()
					{
						var appid = popup.GetAttributeInt( "appid", 0 ) || popup.GetAttributeInt( "file-appid", 0 );
						if ( appid != 0 )
						{
							CloseBigPicturePopup();
							$.DispatchEvent( "OpenGameHub", appid, true );
						}
					} );
					$.RegisterFooterButton( button, "pad_x", "VIEW GAME HUB" );
				}

				$.RegisterKeyBind( button, 'pad_up,key_up,steampad_dpad_up,steampad_stick1_up,pad_stick1_up', function() { ShowBottomBar( bottombar ); } );
				$.RegisterKeyBind( button, 'pad_down,key_down,steampad_dpad_down,steampad_stick1_down,pad_stick1_down', function() { bottombar.RemoveClass( "Show" ); } );

				$.RegisterEventHandler( 'ContributeToFooterPanel', popup,
					function( pPanel, pFooter )
					{
						if ( !bottombar.BHasClass( "Show" ) )
						{
							pFooter.HideAllPanels();
						}
						return true;
					}
				);
			}
		}
	);
}

function DisplayScreenshot( panelid )
{
	var panel = ToPanel( panelid );

	DebugOut( $.GetContextPanel().id + ": DisplayScreenshot( " + panelid + " )");



	var imagepanel = '<root> \
					<styles> \
						<include src="file://{resources}/styles/steamstyles.css" /> \
						<include src="file://{resources}/styles/community/community.css" /> \
						<include src="file://{resources}/styles/contentframe.css" /> \
						<include src="file://{resources}/styles/movie.css" /> \
						<include src="https://steamcommunity-a.akamaihd.net/public/css/bigpicture/apphub.css?v=valveisgoodatcaching" /> \
					</styles> \
					<scripts> \
						<include src="https://steamcommunity-a.akamaihd.net/public/shared/javascript/bigpicture/base.js?v=valveisgoodatcaching&amp;l=english" /> \
						<include src="https://steamcommunity-a.akamaihd.net/public/javascript/bigpicture/apphub_bigpicture.js?v=valveisgoodatcaching&amp;l=english" /> \
					</scripts> \
					<Panel oncancel="CloseBigPicturePopup();" class="CommunityAppHubPopup CommunityAppHubScreenshotPopup"> \
						<Button id="CommunityAppHubPopupButton" > \
							<Panel id="ContentFrameHeader"> \
								<Panel id="ContentMouseBackButton" class="ContentMouseBackButton" onmouseactivate="CloseBigPicturePopup();" /> \
								<Panel id="ContentHomeButton" class="SteamLogo ContentHomeButton" onmouseactivate="CloseBigPicturePopup(); $.DispatchEventAsync( 0.25, \'ShowMainMenu\' );" /> \
							</Panel> \
							<Image id="CommunityAppHubPopupBackground" animate="false" scaling="stretch-to-cover-preserve-aspect" /> \
							<Image id="CommunityAppHubPopupImage" scaling="stretch-to-fit-preserve-aspect" /> \
							<Panel id="CommunityAppHubPopupBottomBar" > \
								<Panel class="PlaybackTitleGlow" /> \
								<Panel class="PlaybackTitleBackground" > \
									<Label id="Title" class="Title" /> \
									<Panel class="CommunityAppHubPopupRatings" > \
										<Label id="AppName" class="AppName" /> \
										<Panel id="VotePanel" > \
											<Image class="AppHubCardThumb" src="https://steamcommunity-a.akamaihd.net/public/images/apphubs/bigpicture/thumbs_up.png" /> \
											<Image class="AppHubCardThumb AppHubCardThumbSelected" src="https://steamcommunity-a.akamaihd.net/public/images/apphubs/bigpicture/thumbs_upselected.png" /> \
										</Panel> \
										<Label id="UpVotes" class="UpVotes" /> \
										<Image class="CommentIcon" src="https://steamcommunity-a.akamaihd.net/public/images/apphubs/bigpicture/comments.png" /> \
										<Label id="Comments" class="Comments" /> \
									</Panel> \
								</Panel> \
							</Panel> \
						</Button> \
					</Panel> \
				</root>';
	DisplayAppHubPopup( imagepanel, panelid );
}


function DisplayVideo( panelid )
{
	var panel = ToPanel( panelid );

	DebugOut( $.GetContextPanel().id + ": DisplayVideo( " + panelid + " )");

	var layout = '<root> \
					<styles> \
						<include src="file://{resources}/styles/steamstyles.css" /> \
						<include src="file://{resources}/styles/community/community.css" /> \
						<include src="file://{resources}/styles/contentframe.css" /> \
						<include src="file://{resources}/styles/movie.css" /> \
						<include src="https://steamcommunity-a.akamaihd.net/public/css/bigpicture/apphub.css?v=valveisgoodatcaching" /> \
					</styles> \
					<scripts> \
						<include src="https://steamcommunity-a.akamaihd.net/public/shared/javascript/bigpicture/base.js?v=valveisgoodatcaching&amp;l=english" /> \
						<include src="https://steamcommunity-a.akamaihd.net/public/javascript/bigpicture/apphub_bigpicture.js?v=valveisgoodatcaching&amp;l=english" /> \
					</scripts> \
					<Panel oncancel="CloseBigPicturePopup();" class="CommunityAppHubPopup CommunityAppHubScreenshotPopup"> \
						<Button id="CommunityAppHubPopupButton" > \
							<Panel id="ContentFrameHeader"> \
								<Panel id="ContentMouseBackButton" class="ContentMouseBackButton" onmouseactivate="CloseBigPicturePopup();" /> \
								<Panel id="ContentHomeButton" class="SteamLogo ContentHomeButton" onmouseactivate="CloseBigPicturePopup(); $.DispatchEventAsync( 0.25, \'ShowMainMenu\' );" /> \
							</Panel> \
							<HTML id="CommunityAppHubPopupVideoBrowser" embedded="true" /> \
							<Panel id="CommunityAppHubPopupBottomBar" > \
								<Panel class="PlaybackTitleGlow" /> \
								<Panel class="PlaybackTitleBackground" > \
									<Label id="Title" class="Title" /> \
									<Panel class="CommunityAppHubPopupRatings" > \
										<Label id="AppName" class="AppName" /> \
										<Panel id="VotePanel" > \
											<Image class="AppHubCardThumb" src="https://steamcommunity-a.akamaihd.net/public/images/apphubs/bigpicture/thumbs_up.png" /> \
											<Image class="AppHubCardThumb AppHubCardThumbSelected" src="https://steamcommunity-a.akamaihd.net/public/images/apphubs/bigpicture/thumbs_upselected.png" /> \
										</Panel> \
										<Label id="UpVotes" class="UpVotes" /> \
										<Image class="CommentIcon" src="https://steamcommunity-a.akamaihd.net/public/images/apphubs/bigpicture/comments.png" /> \
										<Label id="Comments" class="Comments" /> \
									</Panel> \
								</Panel> \
							</Panel> \
						</Button> \
					</Panel> \
				</root>';
	DisplayAppHubPopup( layout, panelid );
}

var g_focusedFilterTab;

function PerformSearch()
{
	var rgParams = g_rgParams;
	var rgRequiredTags = [];

	var panel = $( "#ContentFilter" );

	var checkboxes = panel.FindChildrenWithClassTraverse( "CheckBox" );
	for ( var i = 0; i < checkboxes.length; ++i )
	{
		var tagPanel = checkboxes[i];
		if ( tagPanel.checked )
		{
			var tagName = tagPanel.GetAttributeString( "tagname", "" );
			if ( tagName != "" )
			{
				rgRequiredTags.push( tagName );
			}
		}
	}

	var drownDowns = panel.FindChildrenWithClassTraverse( "SelectTagFilter" );
	for ( var i = 0; i < drownDowns.length; ++i )
	{
		var dropDown = drownDowns[i];
		dropDown.RemoveClass( "AlwaysVisible" );
		var tagPanel = dropDown.GetSelected();
		if ( tagPanel )
		{
			var tagName = tagPanel.GetAttributeString( "tagname", "" );
			if ( tagName != "" )
			{
				rgRequiredTags.push( tagName );
				dropDown.AddClass( "AlwaysVisible" );
			}

			var sort = tagPanel.GetAttributeString( "sort_option", "" );
			if ( sort != "" )
			{
				g_sortOption = sort;
			}

			var matchingFileType = tagPanel.GetAttributeString( "filetype", "" );
			if ( matchingFileType != "" )
			{
				rgParams['filetype'] = matchingFileType;
			}
		}
	}

	rgParams['requiredtags'] = rgRequiredTags;

	var sortOption =  $( "#SortOption" );
	if ( sortOption )
	{
		if ( rgParams['filetype'] == 17 )
		{
			g_sortOption = "trendday";
			sortOption.AddClass( "Hidden" );
		}
		else
		{
			sortOption.RemoveClass( "Hidden" );
		}
	}

	SelectContentFilter( g_filterType, g_sortOption, rgParams, true );
}

function InitializeTagFilters()
{
	var panel = $( "#ContentFilter" );
	if ( panel )
	{
		var drownDowns = panel.FindChildrenWithClassTraverse("SelectTagFilter");
		for ( var i = 0; i < drownDowns.length; ++i )
		{
			$.RegisterEventHandler( 'DropDownSelectionChanged', drownDowns[i], function () { PerformSearch(); } );
		}
	}
}

//
// Manage filter changes from menu bar buttons
//
function SelectContentFilter( filterType, sortOption, rgParams, bForce )
{
	DebugOut( "SelectContentFilter( " + filterType + " )" );
	$.Schedule( 0.0, function()
	{
		var focusedButton = '#' + filterType;

		if ( focusedButton != g_focusedFilterTab || bForce )
		{
			var url = $("#AppHubItems").GetAttributeString( "baseurl", "" );

			var menuRowButtons = $('#AppHubMenuRowButtons' );
			if ( menuRowButtons )
			{
				$.Each( menuRowButtons.FindChildrenWithClassTraverse( "Button" ),
					function( elChild )
					{
						elChild.RemoveClass( 'Selected' );
					}
				);
			}

			g_focusedFilterTab = focusedButton;
			if ( $(g_focusedFilterTab) )
			{
				$(g_focusedFilterTab).AddClass( 'Selected' );
			}

			var browsefilter = sortOption;
			g_sortOption = sortOption;
			var subsection = filterType;
			g_filterType = filterType;

			// Empty panel, preserving the search panel if it exists
			var searchpanel = $("#AppHubSearchPanel");
			if ( searchpanel )
			{
				searchpanel.SetParent( $("#AppHubTemp") );
			}
			
			var items = $( "#AppHubItems" );
			items.RemoveAndDeleteChildren();

			$("#ThrobberPanel").AddClass( "First" );

			$.Each( $("#AppHubTemp").Children(), function (elChild)
			{
				elChild.SetParent( items );
			} );

			items.defaultfocus = "";
			items.ScrollToTop();
			items.ScrollToLeftEdge();

			if ( $("#AppHubMenuRow") )
			{
				$("#AppHubMenuRow").defaultfocus = filterType;
			}

			rgParams = rgParams || {};
			rgParams['appHubSubSection'] = subsection;
			rgParams['browsefilter'] = browsefilter;
			FetchContentAndReregister( url, rgParams );
		}
	} );
}

/*
function FilterBumper( direction )
{
	var panel = $('#AppHubTypeFilterDropDown');
	var selected = panel.GetSelected();

	var menuitem = panel.FindDropDownMenuChild( selected.id );
	var menuitems = menuitem.GetParent();

	var idx = menuitem.tabindex;

	idx = ( idx + direction ) % menuitems.GetChildCount();
	if ( idx == -1 )
	{
		idx = menuitems.GetChildCount() - 1;
	}

	var newSelection = menuitems.GetChild( idx );
	panel.SetSelected( newSelection.id );
}
*/

//
// Footer buttons
//
function SetupFooterButtonsForPage( pagepanel )
{
	for ( var i = 0; i < pagepanel.GetChildCount(); i++ )
	{
		var panel = pagepanel.GetChild( i );

		if ( panel.BHasClass( "AppHubItemStack" ) )
		{
			SetButtonsForItem( panel.GetChild( 0 ) );
			SetButtonsForItem( panel.GetChild( 1 ) );
		}
		else
		{
			SetButtonsForItem( panel );
		}
	}
}


function SetButtonsForItem( panel )
{
	if ( panel.BHasClass( "Artwork" ) || panel.BHasClass( "Screenshot" ) )
	{
		$.RegisterKeyBind( panel, 'pad_y,steampad_y', function() { VoteUpItem( panel.GetAttributeString( "itemid", "" ), null ); } );
		$.RegisterFooterButton( panel, "pad_y", "RATE UP" );
	}
}

function VoteUpItem( itemid, extrathumb )
{
	var url = 'https://steamcommunity.com/sharedfiles/voteup';
	DebugOut( "VoteUpItem( " + itemid + " ) => " + url );
	if ( itemid )
	{
		$.AsyncWebRequest( url,
						   {
							   type: 'POST',
							   data: { id: itemid, sessionid: g_SessionID },
							   success: function( data )
							   {
								   if ( data.success == 1 )
								   {
									   $("#VoteUp_" + itemid).AddClass( "VoteUp" );

									   if ( extrathumb )
									   {
										   extrathumb.AddClass( "VoteUp" );
									   }
								   }
							   },
							   error: function()
							   {
								   DebugOut( "VoteUp failed" );
							   }
						   }
						 );
	}
}

function GoToScreenshotDetails( url )
{
	$.DispatchEvent( "BrowserGoToURL", url )
}


function OnItemFocused( item )
{
}


//
// Search panel popout
//
function DisplaySearchPopup( src, layout )
{
	var popup = $.CreatePanel( 'Panel', $.TenfootController( $.GetContextPanel() ).AccessMainMenu(), 'CommunityAppHubPopup' );
	$.RegisterEventHandler( 'LoadAsyncComplete', popup, function( pTarget, bSuccess, eDetail, bPartial )
	{
		pTarget = ToPanel( pTarget );
		if ( pTarget.id != popup.id )
		{
			return;
		}

		if ( bSuccess )
		{
			var textentry = popup.FindChildTraverse( "AppHubSearchText" );
			textentry.RaiseChangeEvents( true );


			$.RegisterEventHandler( 'TextEntryChanged', popup, function()
									{
										OnSearchTextChanged( popup, textentry )
									});

			$.RegisterEventHandler( 'TextInputHandlerStateChange', popup, function( bActivating )
									{
										return OnTextHandlerStateChange( popup, bActivating );
									});

			if ( src == "gamepad" )
			{
				$.RegisterEventHandler( "SetInputFocus", textentry, function ()
				{
					$.DispatchEventAsync( 0.0, 'TextEntryShowTextInputHandler', textentry );
				} );
			}
			$.DispatchEventAsync( 0.04, 'SetInputFocus', textentry );
		}
		else
		{
			popup.AddClass( "Destructing" );
			$.DispatchEvent( 'MessageBoxClose', popup );
			popup.DeleteAsync( 0.4 );
		}
	} );

	popup.LoadLayoutFromStringAsync( layout, true, false );
	$.TenfootController( $.GetContextPanel() ).ShowModalDialog( popup, '' );
}


function CloseSearchPanel()
{
	var popup = $("#CommunityAppHubPopup");
	DebugOut( "Closing" );
	popup.AddClass( "Destructing" );
	$.DispatchEvent( 'MessageBoxClose', popup );
	popup.DeleteAsync( 0.4 );
}


function DisplaySearchPanel( src )
{
	var searchpanel = '<root> \
					<styles> \
						<include src="file://{resources}/styles/steamstyles.css" /> \
						<include src="file://{resources}/styles/msgbox.css" /> \
						<include src="file://{resources}/styles/search.css" /> \
						<include src="file://{resources}/styles/community/community.css" /> \
						<include src="https://steamcommunity-a.akamaihd.net/public/css/bigpicture/apphub.css?v=valveisgoodatcaching" /> \
					</styles> \
					<scripts> \
						<include src="https://steamcommunity-a.akamaihd.net/public/shared/javascript/bigpicture/base.js?v=valveisgoodatcaching&amp;l=english" /> \
						<include src="https://steamcommunity-a.akamaihd.net/public/javascript/bigpicture/apphub_bigpicture.js?v=valveisgoodatcaching&amp;l=english" /> \
					</scripts> \
					<Panel class="CommunityAppHubPopup" oncancel="CloseSearchPanel();" baseurl="https://steamcommunity.com"> \
						<Panel id="AppHubSearchPopout" class="DialogRegion ShowSearchDivider"> \
							<Label text="Find a Game Hub" /> \
							<TextEntry id="AppHubSearchText" textinputid="AppHubSearchText" textinputclass="HalfWidth DockLeft AppearFromBottomCenter" textmode="normal" tabindex="auto" selectionpos="auto"/> \
							<Panel class="SearchDivider" /> \
							<Panel id="AppHubSearchResults" tabindex="auto" selectionpos="auto"> \
							</Panel> \
						</Panel> \
					</Panel> \
				</root>';

	DisplaySearchPopup( src, searchpanel );
}



function DisplayBroadcastPlayer( steamid )
{
	$.DispatchEvent( "ShowBroadcastViewer", steamid );
}

function ToggleSubscription( publishedfileid )
{
	var toggleButton = $( "#PublishedFileSubscriptionStatus_" + publishedfileid );
	if ( toggleButton )
	{
		var appid = toggleButton.GetAttributeInt( "appid", 0 );

		var params = { id: publishedfileid, appid: appid, sessionid: g_SessionID };

		$.AsyncWebRequest( 'https://steamcommunity.com/sharedfiles/' + ( toggleButton.checked ? 'subscribe' : 'unsubscribe' ),
			{
				type: 'POST',
				data: params,
				success: function( data )
				{
					callbackFunc();
				},
				error: function()
				{
					DebugOut( "ToggleSubscription failed" );
				}
			}
		);
	}
}