
var g_ThumbnailRefreshTimeSec = 60.0;
var g_ThumbnailFadeTimeSec = 6.0;

function CommunityDebugOut( message )
{
	// $.Msg( message );
}

function GetMenuStackLevel()
{
	var mainmenu = $.TenfootController( $.GetContextPanel() ).AccessMainMenu();
	var wrapper = mainmenu.FindChildTraverse( "CommunityWrapper" );

	var level = 0;
	if ( wrapper.BHasClass( "CommunityVisible" ) )
	{
		if ( mainmenu.BHasClass( "StackDepth1" ) )
		{
			level = 1;
		}
		else if ( mainmenu.BHasClass( "StackDepth2" ) )
		{
			level = 2;
		}
		else if ( mainmenu.BHasClass( "StackDepth3" ) )
		{
			level = 3;
		}
	}

	CommunityDebugOut( "Community menu has stack level " + level );
	return level;
}

function BIsBackgroundVisible()
{
	level = GetMenuStackLevel();

	return ( level == 1 || level == 2 );
}

function BIsMenuVisible()
{
	return ( GetMenuStackLevel() == 2 );
}

function ScheduleSetImage( delay, id, url )
{
	$.Schedule( delay, function() { $("#"+id).SetImage( url ) } );
}

function ScheduleReloadThumb( delay, id, url )
{
	var panel = $("#"+id);
	$.Schedule( delay, function() {
		panel.RemoveClass( "CommunityLoaded" );
		panel.AddClass( "CommunityLoading" );
		ScheduleSetImage( 0.7, id, url );
		}
	);
}

function RefreshThumbnails( currentClass, url, nextClass, nextUrl )
{
	var mainmenu = $.TenfootController( $.GetContextPanel() ).AccessMainMenu();
	var wrapper = mainmenu.FindChildTraverse( "CommunityWrapper" );

	var panel = $("#CommunityContent");
	bFirstLoad = ( nextClass == null );

	bRefresh = bFirstLoad || BIsBackgroundVisible();

	CommunityDebugOut( "RefreshThumbnails" );
	if ( panel && panel.IsValid() )  // Make sure the content panel is still valid, in case we reloaded the menu for some reason
	{
		if ( bRefresh )
		{
			if ( bFirstLoad || panel.BHasClass( "CommunityLoaded" ) ) // Make sure a slow load doesnt mess us up
			{
				panel.RemoveClass( "CommunityLoaded" );
				panel.AddClass( "CommunityLoading" );

				$.AsyncWebRequest( url,
								   {
									   type: 'GET',
									   success: function( data )
									   {
											var images = $("#CommunityContent").FindChildrenWithClassTraverse( currentClass );

											CommunityDebugOut( "AsyncWebRequest for " + currentClass + " returned " + data.length + " results" );
											CommunityDebugOut( "Content has " + images.length + " thumb children" );
											data = v_shuffle( data );

											for ( i = 0; i < Math.min( images.length, data.length ); i++ )
											{
												if ( images[i].BHasClass( "NeverLoaded" ) )
												{
													delay = 0;
												}
												else
												{
													delay = 0.7 + ( Math.random() * 2 );
												}
												ScheduleReloadThumb( delay, images[i].id, data[i] );

												// CommunityDebugOut( "Panel " + images[i].id + " got URL " + data[i] );
											}

											panel.AddClass( "CommunityLoaded" );
											if ( !bFirstLoad )
											{
												delay = bFirstLoad ? 0 : g_ThumbnailRefreshTimeSec;
												CommunityDebugOut( "Rescheduling for " + delay + " seconds." );
												$.Schedule( delay, function() { RefreshThumbnails( nextClass, nextUrl, currentClass, url, false ) } );
											}
									   }
								   }
								   );
			}
		}
		else
		{
			$.Schedule( g_ThumbnailRefreshTimeSec, function() { RefreshThumbnails( nextClass, nextUrl, currentClass, url, false ) } );
		}
	}
}

function InitializeCommunityMenu()
{
	CommunityDebugOut( "InitializeCommunityMenu" );

	RefreshThumbnails( "GameHubThumb", 'http://steamcommunity.com/apps/apphubthumbs', null, null );
	RefreshThumbnails( "MarketThumb", 'http://steamcommunity.com/market/marketthumbs', null, null );
	$.Schedule( g_ThumbnailRefreshTimeSec, function() { RefreshThumbnails( "GameHubThumb", 'http://steamcommunity.com/apps/apphubthumbs', "MarketThumb", 'http://steamcommunity.com/market/marketthumbs' ) } );

	$("#CommunityContent").AddClass( "LoadingVisible" );


	var context = $.GetContextPanel();

	var mainmenu = $.TenfootController( context ).AccessMainMenu();
	var communityButton = mainmenu.FindChildTraverse( "CommunityButton" );
	communityButton.RemoveClass( "Disabled" );

	$.RegisterEventHandler( 'ImageFailedLoad', $("#CommunityContent"), function( id, x )
	{
		// Override default image loading on failure.
		return true;
	} );
}

function OnThumbLoad( id )
{
	CommunityDebugOut( "OnThumbLoad( " + id + " )" );

	var panel = $("#"+id);
	panel.AddClass( "CommunityLoaded" );
	panel.RemoveClass( "CommunityLoading" );
	panel.RemoveClass( "NeverLoaded" );
}

function OnMarketButtonFocused()
{
	$.GetContextPanel().AddClass( "MarketFocused" );
	$.GetContextPanel().RemoveClass( "GameHubsFocused" );
}

function OnGameHubsButtonFocused()
{
	$.GetContextPanel().AddClass( "GameHubsFocused" );
	$.GetContextPanel().RemoveClass( "MarketFocused" );
}


function ShowPanel( panel )
{
	var home = $("#CommunityHomeContent");
	var sectionWrapper = $("#SectionWrapper");
	$.Each( sectionWrapper.FindChildrenWithClassTraverse( "CommunityContentSectionPanel" ),
		function( elChild )
		{
			elChild.RemoveClass( 'Selected' );
			home.RemoveClass( elChild.id + "Visible" );
		}
	);

	$("#" + panel).AddClass( 'Selected' );
	home.AddClass( panel + "Visible" );
}


function SelectContentTab( panel, url )
{
	var p = $("#" + panel );
	if ( !p.BHasClass( 'Selected' ) )
	{
		ShowPanel( panel );
		$("#" + panel).LoadPanelAsyncWithWebAuth( url, false );
	}
}

function ShowEmptyTab( msg )
{
	ShowPanel( 'CommunityContentEmpty' );
	$("#CommunityContentEmptyLabel").text = msg;
}

function SelectFilterType( filter )
{
	$.DispatchEvent( 'AppHubSelectFilter', $('#CommunityContentAll'), filter );
}

function SetupSearchPanel()
{
	var textentry = $("#AppHubSearchText");
	textentry.RaiseChangeEvents( true );

	$.RegisterEventHandler( 'TextEntryChanged', textentry, function()
	{
		OnSearchTextChanged( textentry )
	});

	$.RegisterEventHandler( 'TextInputHandlerStateChange', textentry, function( bActivating )
	{
		return OnTextHandlerStateChange( bActivating );
	});
}

function AddSearchResult( toppanel, panel, appdata )
{
	//
	// This is creating the panel manually rather than loading
	// a layout to avoid problems with javascript context, which
	// gets reset when a layout file is loaded.
	//
	var result = $.CreatePanel( "Button", panel, "SearchResult_" + appdata.appid );
	result.AddClass( "AppHubSearchResult" );
	result.SetPanelEvent( "onactivate", function() { OnSelectSearchResult( appdata.appid ); } );
	var image = $.CreatePanel( "Image", result, "" );
	var label = $.CreatePanel( "Label", result, "" );

	image.SetImage( appdata.icon );
	image.SetScaling( "stretch-to-fit-y-preserve-aspect" );
	label.text = appdata.name;
}


function OnSearchTextChanged( textentry )
{
	var panel = $("#CommunityContentSearch");
	var results = panel.FindChildTraverse( "AppHubSearchResults" );
	if ( textentry.text )
	{
		url = panel.GetAttributeString( "baseurl", "" ) + "/actions/SearchApps/" + encodeURIComponent( textentry.text );
		DebugOut( url );
		$.AsyncWebRequest( url,
			{
				type: 'GET',
				success: function ( data )
				{
					results.RemoveAndDeleteChildren();
					for ( app in data )
					{
						AddSearchResult( panel, results, data[app] );
					}
				},
				failure: function() { DebugOut( "Failed to load " + url ); }
			}
		);
	}
	else
	{
		results.RemoveAndDeleteChildren();
	}
	return false;
}


function OnSelectSearchResult( appid )
{
	$.DispatchEvent( "OpenGameHub", appid, true );
}


function OnTextHandlerStateChange( bActivating )
{
	var panel = $("#CommunityContentSearch");
	if ( bActivating )
	{
		panel.AddClass( "DaisyWheelVisible" );
	}
	else
	{
		panel.RemoveClass( "DaisyWheelVisible" );
		$("#AppHubSearchText").SetFocus();
	}

	return false;
}

function ShowFriendActivity( url )
{
	var now = new Date();
	var tzOffset = now.getTimezoneOffset() * -1 * 60;

	var finalURL = url + "?timezoneOffset=" + tzOffset;

	SelectContentTab( 'CommunityContentFriendActivity', finalURL );
}


function DisplayYouTubeVideo( videoURL, panelid )
{
	DebugOut( $.GetContextPanel().id + ": DisplayYouTubeVideo( " + videoURL + ", " + panelid + " )" );

	var layout = '<root> \
					<styles> \
						<include src="file://{resources}/styles/steamstyles.css" /> \
						<include src="file://{resources}/styles/community/community.css" /> \
						<include src="file://{resources}/styles/movie.css" /> \
						<include src="https://steamcommunity-a.akamaihd.net/public/css/bigpicture/apphub.css?v=valveisgoodatcaching" /> \
					</styles> \
					<scripts> \
						<include src="https://steamcommunity-a.akamaihd.net/public/shared/javascript/bigpicture/base.js?v=valveisgoodatcaching&amp;l=english" /> \
					</scripts> \
					<Panel oncancel="CloseBigPicturePopup();" class="CommunityAppHubPopup CommunityAppHubScreenshotPopup"> \
						<Button id="CommunityAppHubPopupButton" > \
							<HTML id="CommunityAppHubPopupVideoBrowser" embedded="true" /> \
						</Button> \
					</Panel> \
				</root>';

	DisplayBigPicturePopup(
		layout,
		panelid,
		function ( bSuccess, panelid, popup ) {
			if ( bSuccess )
			{
				var throbber = popup.FindChildTraverse( "Throbber" );
				var browser = popup.FindChildTraverse( "CommunityAppHubPopupVideoBrowser" );
				var button = popup.FindChildTraverse( "CommunityAppHubPopupButton" );

				button.style.transform = 'translate3d( ' + popup.GetAttributeInt( "x", 0 ) + 'px, ' + popup.GetAttributeInt( "y", 0 ) + 'px, 0px )';
				button.style.preTransformScale2d = '0.0';

				if ( browser )
				{
					browser.SetURL( videoURL );

					$.RegisterEventHandler( 'PanelLoaded', browser, function()
					{
						DebugOut( "Browser loaded" );

						throbber.AddClass( "LoadComplete" );
						{
							button.style.opacity = 1;
							button.style.preTransformScale2d = '1.0';
							button.style.transform='translatex( 0px )';
						};

						$.DispatchEventAsync( 0.1, 'SetInputFocus', button );

						$.RegisterKeyBind( button, 'pad_a,steampad_a', function() {	browser.RunJavascript( "toggleVideoPlayback();" ); } );
						$.RegisterFooterButton( button, "pad_a", "PLAY/PAUSE" );

						$.RegisterKeyBind( button, 'pad_ltrigger,steampad_ltrigger', function() {	browser.RunJavascript( "rewindVideo();" ); } );
						$.RegisterKeyBind( button, 'pad_ltrigger(up),steampad_ltrigger(up)', function() {	browser.RunJavascript( "stopSeek();" ); } );

						$.RegisterKeyBind( button, 'pad_rtrigger,steampad_rtrigger', function() { browser.RunJavascript( "fastForwardVideo();" ); } );
						$.RegisterKeyBind( button, 'pad_rtrigger(up),steampad_rtrigger(up)', function() { browser.RunJavascript( "stopSeek();" ); } );
					} );
				}
			}
		}
	);
}