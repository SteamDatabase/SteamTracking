

function DebugOut( msg )
{
//	$.Msg( msg );
}


var g_LoadPoint = 0;
var g_NextSearchData;
var g_NextURL;
var g_LastTotal;
var g_panelsRemaining = 0;

var g_nMarketListingRemovedEventId = 0;

var g_strFilter = '';

function InitializeMarketDetails()
{
	$.RegisterEventHandler( 'InputFocusSet', $("#ItemsCarousel"), OnCarouselFocusChange );
	g_nMarketListingRemovedEventId = $.RegisterForUnhandledEvent( 'MarketListingRemoved', OnMarketListingRemoved );

	//
	// Set up footer buttons
	//
	$.RegisterKeyBind( $("#CommunityMarketDetailsContent"), "pad_x,steampad_x", function( src ) { ShowSearchPopup( src, g_strItemName ); } );
	$.RegisterFooterButton( $("#CommunityMarketDetailsContent"), "pad_x", "SEARCH" );

	UpdateStats();
}

function UpdateStats()
{
	var stats = $("#Stats");
	if ( stats && stats.visible )
	{
		var carousel = $("#ItemsCarousel");
		stats.text = "Displaying " + carousel.GetChildCount() + " of " + g_LastTotal + ". Focus = " +  $("#ItemsCarousel").GetFocusIndex() + ( g_LoadPoint === undefined ? ", Loading" : ( ", Load Point = " + g_LoadPoint ) ) + ", Remaining = " + g_panelsRemaining;
	}
}

function OnItemFocus( id )
{
	$("#" + id).RemoveClass("NeverFocused");
	UpdateStats();
}

function LoadMore()
{
	UpdateStats();

	$("#ThrobberPanel").RemoveClass( 'ContentLoaded' );

	g_LoadPoint = undefined;
	DebugOut( "Load more" );
	FetchMoreContent( g_NextSearchData, g_NextURL );
}

function OnMarketListingRemoved( id ) {
	$("#" + id).AddClass("ListingRemoved");
	$.Msg( "Listing Removed " + id );
}

function OnCarouselFocusChange()
{
	var carousel = $("#ItemsCarousel");

	//
	// Figure out which child offset this is
	//
	var index = $("#ItemsCarousel").GetFocusIndex();

	//	DebugOut( "Index " + index );
	if ( g_LoadPoint != undefined && index && index > g_LoadPoint )
	{
		LoadMore();
	}
}

function OnMarketDetailsSearch( text )
{
	DebugOut( "OnMarketDetailsSearch( " + text + " )" );
}

function UpdatePriceData( listing, panel )
{
//	DebugOut( panel.id + ": " + listing.converted_price + ", " + listing.converted_fee + ", " + listing.converted_currencyid );

	var price;
	var fee;
	var currencyid;
	var sortprice;

	if ( g_currencyid == 0 )
	{
		price = listing.price;

		if ( g_bTwoFactorSale )
		{
			fee = listing.fee;
			sortprice = listing.converted_price + listing.converted_fee;
		}
		else
		{
			fee = listing.fee;
			sortprice = listing.converted_price + listing.converted_fee;
		}

		currencyid = listing.currencyid;

	}
	else
	{
		price = listing.converted_price;
		fee = listing.converted_fee;
		currencyid = listing.converted_currencyid;
		sortprice = price + fee;
	}

	var priceText;
	if ( g_bMarketAllowed )
	{
		if ( g_bTwoFactorSale )
		{
			priceText = 'Buy Now for <span class="StrikethroughText">%1$s</span> <span class="SaleText">%2$s</span>';
		}
		else
		{
			priceText = 'Buy Now for %1$s';
		}
	}
	else
	{
		priceText = 'Listed at %1$s';
	}

	priceText = priceText.replace( '%1$s', v_currencyformat( price + fee, GetCurrencyCode( Number(currencyid) % 1000 ) ) )
		.replace( '%2$s', v_currencyformat( price + fee - listing.converted_steam_fee, GetCurrencyCode( Number(currencyid) % 1000 ) ) );

	var pricePanel = panel.FindChildrenWithClassTraverse( "ItemPrice" )[0];
	pricePanel.text = priceText;

	//
	// Use the text field on the enclosing panel as a convenient place
	// to keep this data for sorting purposes.
	//
	panel.text = sortprice;
}

//
// This is just a simple linear search, can convert to a binary
// search if this proves too slow.
//
function FindPositionToInsertBefore( carousel, panel )
{
	var children = carousel.Children();

	for ( var i = children.length - 1; i >= 0 ; i-- )
	{
		if ( Number( panel.text ) >= Number( children[i].text ) )
		{
			return i + 1;
		}
	}

	return 0;
}

function MoveToCarousel( carousel, panel )
{
	var bFirstPanel = ( carousel.GetChildCount() == 0 );
	var insertat = FindPositionToInsertBefore( carousel, panel );
	if ( insertat != carousel.GetChildCount() )
	{
		panel.SetParent( carousel );
		var nextpanel = carousel.GetChild( insertat );
		// DebugOut( "Moving child " + panel.id + " (" + panel.text + ") before panel " + nextpanel.id + " (" + nextpanel.text + ") - position " + insertat + " of " + carousel.GetChildCount() );
		carousel.MoveChildBefore( panel, nextpanel );
		// DebugOut( "New panel tabindex is " + panel.tabindex );
		// DebugOut( "Focus is at " + carousel.FindChildrenWithClassTraverse( "Focused" )[0].tabindex );
	}
	else
	{
		panel.SetParent( carousel );
	}
}

function AddPanel( page, listing, item )
{
	// DebugOut( JSON.stringify( listing ) );
	// DebugOut( JSON.stringify( item ) );

	var temp = $("#ItemsTemp");
	var carousel = $("#ItemsCarousel");

	if ( listing.price == 0 || isNaN( listing.price ) )
	{
		DebugOut( "Skipping listing with zero price" );
		return;
	}

	//
	// Don't add duplicates.
	//
	if ( carousel.FindChild( listing.listingid ) )
	{
		DebugOut( "Got duplicate " + listing.listingid );
		return;
	}

	var panel = $.CreatePanel( 'Panel', temp, listing.listingid );

	panel.SetPanelEvent( "ondescendantfocus", function() { OnItemFocus(listing.listingid); } );
	$.RegisterEventHandler( 'LoadAsyncComplete',
							panel,
							function( pPanel, bSuccess, eDetail, bPartial )
							{
								pPanel = ToPanel( pPanel );
								if ( pPanel.id != panel.id )
								{
									return;
								}

								g_panelsRemaining--;

								// Early out if the containing panel is no longer visible.
								if ( !$.GetContextPanel().BHasClass('NX') && !$.GetContextPanel().BHasClass("CommunityVisible") )
								{
									return;
								}

								if ( bSuccess )
								{
									var image = panel.FindChildrenWithClassTraverse( 'ItemDetailImage' )[0];
									$.RegisterEventHandler( 'PanelLoaded', image, function()
									{
										panel.AddClass( 'ImageLoaded' );
									} );

									PopulateDetails( item, panel, false, g_rgAppContextData );
									panel.FindChildrenWithClassTraverse( "ListingID" )[0].text = listing.listingid;
									panel.FindChildrenWithClassTraverse( "ItemID" )[0].text = item.id;
									UpdatePriceData( listing, panel );

									MoveToCarousel( carousel, panel );


									$.RegisterFooterButton( panel, 'pad_a', 'SELECT' );

									if ( g_bMarketAllowed ) {
										panel.FindChildTraverse("ActivateButton").SetPanelEvent('onactivate',
											function () {
												$.DispatchEvent('BuyItemOnMarket', listing.listingid, g_strFilter );
											}
										);
									}

									if ( listing.asset.market_actions )
									{
										var action = listing.asset.market_actions[0];

										$.RegisterKeyBind( panel, "pad_y,steampad_y", function() { DebugOut( action.link ); } );
										$.RegisterFooterButton( panel, "pad_y", "INSPECT IN GAME" );
									}
									else
									{
										$.RegisterFooterButton( panel, "pad_y", "" );
									}


									if ( g_panelsRemaining == 0 )
									{
										var focusindex = $("#ItemsCarousel").GetFocusIndex();
										if ( g_LoadPoint != undefined && focusindex >= g_LoadPoint )
										{
											DebugOut( "Focus is past load point ( " + focusindex + " >= " + g_LoadPoint + " )" );
											LoadMore();
										}
									}
									UpdateStats();
								}
								return true;
							} );

	panel.LoadLayoutFromStringAsync( g_PanelTemplate, true, false );
}

function FetchMoreContent( searchdata, url )
{
	//
	// If the user has no wallet, their g_currencyid will be set to 0.  In this case, we are going to request
	// USD conversions so that we can sort, but we're going to display the results in the listed currency.
	//
	searchdata['currency'] = g_currencyid == 0 ? 1 : g_currencyid;
	searchdata['count'] = 20;

	DebugOut( "Fetching " + searchdata.count + " listings starting at " + searchdata.start + ", focus is at " + $("#ItemsCarousel").GetFocusIndex() + " of " + $("#ItemsCarousel").GetChildCount() );
	$.AsyncWebRequest( url,
					   {
						   type: 'GET',
						   data: searchdata,
						   success: function( data )
						   {
							   //DebugOut( JSON.stringify( data, false, 4 ) );

							// Early out if the containing panel is no longer visible.
							   if ( !$.GetContextPanel().BHasClass('NX') && !$.GetContextPanel().BHasClass("CommunityVisible") )
							   {
								   return;
							   }

							   if ( data.total_count == 0 )
							   {
								   DebugOut( "Call returned 0 total" );
								   DebugOut( url );
								   DebugOut( JSON.stringify( searchdata, null, 4 ) );
								   DebugOut( JSON.stringify( data, null, 4 ) );

								   $("#CommunityMarketDetailsContent").AddClass( "NoSearchResults" );
							   }
							   else
							   {
								   $("#CommunityMarketDetailsContent").RemoveClass( "NoSearchResults" );
							   }

							   g_LastTotal = data.total_count;
							   var page = ( Number( searchdata.start ) + Number( data.pagesize ) ) / Number( data.pagesize );

							   if ( searchdata.filter )
							   {
								   var titlepanel = $("#ItemTitle");
								   titlepanel.RemoveClass( "Hidden" );
								   titlepanel.text = titlepanel.GetAttributeString( "basetext", "" ).replace( "%s", searchdata.filter );
								   g_strFilter = searchdata.filter;
							   }
							   else
							   {
								   $("#ItemTitle").AddClass( "Hidden" );
								   g_strFilter ='';
							   }
							   //DebugOut( "Page " + page );

							   if ( Object.keys( data.listinginfo ) )
							   {
								   var carousel = $("#ItemsCarousel");

								   //
								   // Count how many non-dupes we got
								   //
								   var count = 0;
								   for ( var id in data.listinginfo )
								   {
									   var listing = data.listinginfo[id];
									   if ( !carousel.FindChild( listing.listingid ) )
									   {
										   count++;
									   }
									   else
									   {
										   delete data.listinginfo[id];
									   }
									   // var item = data.assets[listing.asset.appid][listing.asset.contextid][listing.asset.id];
									   // DebugOut( item.id + " price " + Number ( listing.converted_price + listing.converted_fee ) );
								   }

								   //
								   // Set up the next load point
								   //
								   g_LoadPoint = Math.floor( carousel.GetChildCount() + ( count / 2 ) );
								   g_NextURL = url;
								   g_NextSearchData = searchdata;
								   g_NextSearchData.start = parseInt( searchdata.start ) + count;

								   g_panelsRemaining = count;

								   $("#ThrobberPanel").AddClass( "ContentLoaded" );
								   $("#ThrobberPanel").RemoveClass( "First" );
								   
								   //
								   // Now load all the panels
								   //
								   for ( var id in data.listinginfo )
								   {
									   var listing = data.listinginfo[id];
									   AddPanel( page, listing, data.assets[listing.asset.appid][listing.asset.contextid][listing.asset.id] );
								   }
							   }
						   },
						   error: function( e )
						   {
							   DebugOut( "Fetch failed => " + JSON.stringify(e) );
						   }
					   }
					 );

	DebugOut( "Done" );
	return false;
}

function ShowSearchPopup( src, name )
{
	searchpanel = '<root> \
					<styles> \
						<include src="file://{resources}/styles/steamstyles.css" /> \
						<include src="file://{resources}/styles/msgbox.css" /> \
						<include src="file://{resources}/styles/search.css" /> \
						<include src="file://{resources}/styles/community/community.css" /> \
						<include src="https://community.cloudflare.steamstatic.com/public/css/bigpicture/market.css?v=valveisgoodatcaching" /> \
						<include src="https://community.cloudflare.steamstatic.com/public/css/bigpicture/market_details.css?v=valveisgoodatcaching" /> \
						<include src="https://community.cloudflare.steamstatic.com/public/css/bigpicture/economy.css?v=valveisgoodatcaching&amp;l=english" /> \
					</styles> \
					<scripts> \
						<include src="https://community.cloudflare.steamstatic.com/public/shared/javascript/bigpicture/base.js?v=valveisgoodatcaching&amp;l=english" /> \
						<include src="https://community.cloudflare.steamstatic.com/public/javascript/bigpicture/market_details.js?v=valveisgoodatcaching&amp;l=english" /> \
					</scripts> \
					<Panel oncancel="CloseSearchPanel();" baseurl="https://steamcommunity.com" appid="' + g_unAppId + '" item="' + name + '"> \
						<Panel id="MarketDetailsSearchPopout" class="DialogRegion" > \
							<Label id="MarketDetailsSearchTitle" text="Enter search terms to narrow results for ' + name + '" /> \
							<TextEntry id="MarketDetailsSearchText" textinputid="MarketDetailsSearchText" textinputclass="HalfWidth DockLeft AppearFromBottomCenter" textmode="normal" tabindex="auto" selectionpos="auto"/> \
							<Panel id="MsgBoxButtons" class="FlowRight" tabindex="auto" selectionpos="auto"> \
								 <Button onactivate="OnSearchClear()" id="Clear" tabindex="auto" selectionpos="-1,1"> \
									  <Label text="Clear"/> \
								 </Button> \
								 <Button id="OK" onactivate="OnSearchSubmit()" tabindex="auto" selectionpos="0,1"> \
									   <Label text="OK"/> \
								 </Button> \
							</Panel> \
						</Panel> \
					</Panel> \
				</root>';


	var search = $.CreatePanel( 'Panel', $.TenfootController( $.GetContextPanel() ).AccessMainMenu(), 'MarketDetailsSearch' );
	$.RegisterEventHandler( 'LoadAsyncComplete', search, function( pPanel, bSuccess, eDetail, bPartial )
	{
		if ( bSuccess )
		{
			var textentry = search.FindChildTraverse( "MarketDetailsSearchText" );

			$.RegisterEventHandler( 'TextInputHandlerStateChange', search, function( bActivating )
									{
										return OnTextHandlerStateChange( search, bActivating );
									});
			$.RegisterEventHandler( 'TextEntrySubmit', search, function() { search.FindChildTraverse("OK").SetFocus() } );

			if ( src == "gamepad" )
			{
				$.RegisterEventHandler( 'SetInputFocus', textentry, function()
				{
					$.DispatchEventAsync( 0.0, 'TextEntryShowTextInputHandler', textentry );
				} );
			}

			$.DispatchEventAsync( 0.04, 'SetInputFocus', textentry );
		}
		else
		{
			search.AddClass( "Destructing" );
			$.DispatchEvent( 'MessageBoxClose', search );
			search.DeleteAsync( 0.4 );
		}
	} );

	search.LoadLayoutFromStringAsync( searchpanel, true, false );
	$.TenfootController( $.GetContextPanel() ).ShowModalDialog( search, '' );
}

function OnSearchClear()
{
	$("#MarketDetailsSearchText").text = '';
}

function OnSearchSubmit()
{
	var text = $("#MarketDetailsSearchText").text;
	var appid = $.GetContextPanel().GetAttributeInt( "appid", 0 );
	var item = $.GetContextPanel().GetAttributeString( "item", "" );
	DebugOut( "Search text: " + text );

	$.DispatchEventAsync( 0.04,  "ShowMarketDetails", appid, item, text, true );

	CloseSearchPanel();
}

function CloseSearchPanel()
{
	var popup = $("#MarketDetailsSearch");
	DebugOut( "Closing" );
	popup.AddClass( "Destructing" );
	$.DispatchEvent( 'MessageBoxClose', popup );
	popup.DeleteAsync( 0.4 );
}

function OnTextHandlerStateChange( popup, bActivating )
{
	if ( bActivating )
	{
		popup.AddClass( "DaisyWheelVisible" );
	}
	else
	{
		popup.RemoveClass( "DaisyWheelVisible" );
		$("#AppHubSearchText").SetFocus();
	}

	return false;
}

