
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
