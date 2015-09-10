
var g_CurrentTab = ""
var g_nLoadNumber = 0;
var g_nMarketListingCreatedEventId = 0;
var g_nMarketClosedEventId = 0;
var g_MarketSearchUrl = "";


function SelectMarketTab( sTab )
{
	if ( g_CurrentTab == sTab )
	{
		return false;
	}

	$.Each( $('#MarketMenuRowButtons' ).FindChildrenWithClassTraverse( "Button" ),
			function( elChild )
			{
				elChild.RemoveClass( 'Selected' );
			}
	);

	$(sTab).AddClass( 'Selected' );
	g_CurrentTab = sTab;
	$.GetContextPanel().defaultfocus = sTab.slice(1);

	CheckForPopups();
	return true;
}

function ClearGrid( oGrid )
{
	oGrid.RemoveAndDeleteChildren();
	$("#MarketContentPanel").defaultfocus = "";
}

function GiveFocusToOpenTab()
{
	$(g_CurrentTab).SetFocus();
}


function SelectGrid( s )
{
	var contentPanel = $("#CommunityMarketContent");
	var selected = undefined;
	var rgGrids = $("#MarketContentPanel").FindChildrenWithClassTraverse( "ItemGrid" );
	for ( var i = 0; i < rgGrids.length; i++ )
	{
		if ( rgGrids[i].id == "ItemGrid" + s )
		{
			selected = rgGrids[i];
			rgGrids[i].enabled = true;
			contentPanel.AddClass( rgGrids[i].id + "Visible" );
		}
		else
		{
			rgGrids[i].enabled = false;
			contentPanel.RemoveClass( rgGrids[i].id + "Visible" );
		}
	}

	if ( selected.id == "ItemGridSearch" )
	{
		selected.ScrollPanelToLeftEdge();
		GridChildIndexSelected( selected.id, 0 );
		$("#MarketContentPanel").defaultfocus = "";
		HideThrobber();
		$("#MarketSearchPanel").enabled = true;
	}
	else
	{
		$("#MarketSearchPanel").enabled = false;
	}
	return selected;
}


function CreateMarketItemImage( asset, oParent, oContainingPanel )
{
	var oItemImage = $.CreatePanel( 'Image', oParent, '' );
	oItemImage.AddClass( 'MarketGridItemImage' );
	oItemImage.SetScaling( 'stretch-to-fit-preserve-aspect' );

	var	image_name = asset.icon_url_large ? asset.icon_url_large : asset.icon_url;

	$.RegisterEventHandler( 'ReadyPanelForDisplay', oContainingPanel, function()
	{
		oItemImage.SetImage( ImageURL( image_name, 256, 256 ) );
		oContainingPanel.AddClass( 'Ready' );
	} );

	$.RegisterEventHandler( 'PanelDoneWithDisplay', oContainingPanel, function()
	{
		oItemImage.SetImage( '' );
		oContainingPanel.RemoveClass( 'Ready' );
	} );

	return oItemImage;
}

function OpenMarketPickedForMe()
{
	if ( !SelectMarketTab( '#MarketPickedForMe' ) )
	{
		return;
	}

	var oGrid = SelectGrid( "Main" );
	ClearGrid ( oGrid );

	var oItem = $.CreatePanel( 'Button', oGrid, 'Item_CreateListing' );
	oItem.AddClass( 'MarketGridItem' );
	oItem.AddClass( 'MarketGridItemActionButton' );

	var oContents = $.CreatePanel( 'Panel', oItem, '' );
	oContents.AddClass( 'MarketGridItemMainContent' );

	var oAction = $.CreatePanel( 'Panel', oContents, '' );
	oAction.AddClass( 'MarketGridItemAction' );

	var oText = $.CreatePanel( 'Label', oAction, '' );
	oText.AddClass( 'ButtonLabel' );
	oText.text = '+\nCreate new listing';
}

function MakeMarketActionButton( oGrid, text )
{
	var oButton = $.CreatePanel( 'Button', oGrid, 'Listing_CreateListing' );
	oButton.AddClass( 'MarketGridItem' );
	oButton.AddClass( 'MarketGridItemActionButton' );

	var oContents = $.CreatePanel( 'Panel', oButton, '' );
	oContents.AddClass( 'MarketGridItemMainContent' );

	var oAction = $.CreatePanel( 'Panel', oContents, '' );
	oAction.AddClass( 'MarketGridItemAction' );

	var oText = $.CreatePanel( 'Label', oAction, '' );
	oText.AddClass( 'ButtonLabel' );
	oText.text = text;

	$.RegisterFooterButton( oButton, 'pad_a', 'SELECT' );

	return oButton;
}

function ShowThrobber( bRight )
{
	$("#MarketContentPanel").AddClass( "ContentLoading" );
	if ( bRight )
	{
		$("#MarketContentPanel").AddClass( "ThrobberRight" );
	}
	else
	{
		$("#MarketContentPanel").RemoveClass( "ThrobberRight" );
	}
}

function HideThrobber()
{
	$("#MarketContentPanel").RemoveClass( "ContentLoading" );
}

var g_oMyHistory = null;
function RefreshMyMarketListings()
{
	var oGrid = $('#ItemGridMain');
	ClearGrid ( oGrid );

	var nLoadNumber = ++g_nLoadNumber;

	// Add the "Create new listing" button immediately
	if ( g_bMarketAllowed )
	{
		var oCreateListing = MakeMarketActionButton( oGrid, '+ Create new listing' );
		oCreateListing.SetPanelEvent( 'onactivate', function()
		{
			$.DispatchEvent( 'ShowMarketItemPicker', 0, '', encodeURIComponent('[ "OpenCommunityMarket", false ]'), true );
		} );
	}

	ShowThrobber( false );

	// Async load everything else
	$.AsyncWebRequest( 'https://steamcommunity.com/market/mylistings',
			{
				type: 'GET',
				data: {
					norender: 1
				},
				success: function( data ) {
					if ( data.success && g_nLoadNumber == nLoadNumber )
					{
						$.Each( data.buy_orders, function( order ) {
							DelayAddBuyOrder( nLoadNumber, order, oGrid );
						} );
						$.Each( data.listings.reverse(), function( listing ) {
							DelayAddListing( nLoadNumber, listing, oGrid );
						} );
					}
				},
				complete: function()
				{
					if ( g_nLoadNumber == nLoadNumber )
					{
						HideThrobber();
					}
				}
			}
	);
}

function DelayAddBuyOrder( nLoadNumber, order, oGrid )
{
	$.Schedule( 0.0, function()
				{
					if ( g_CurrentTab == "#MarketMyListings" && nLoadNumber == g_nLoadNumber && oGrid.IsValid() )
					{
						var oItem = $.CreatePanel( 'Button', oGrid, 'BuyOrder_' + order.buy_orderid );
						oItem.AddClass( 'MarketGridItem' );

						$.RegisterKeyBind( oItem, 'pad_y,steampad_y', (function(orderid, item) { return function() {
							$.AsyncWebRequest( 'https://steamcommunity.com/market/cancelbuyorder/',
											   {
												   type: 'POST',
												   data:
												   {
													   sessionid: g_SessionID,
													   buy_orderid: orderid
												   },
												   success: function( data ) {
													   if ( data.success == 1 )
													   {
														   if ( item.IsValid() )
														   {
															   item.DeleteAsync( 0.0 );
														   }
													   }
													   else
													   {
														   // BUGBUG: Display error info
													   }
												   },
												   error: function( xhr )
												   {
													   $.Msg( "Remove " + orderid + " failed. Status: " + xhr.status + " " + xhr.statusText + " " + xhr.responseText );
													   $.TenfootController( $('#ItemGridMain') ).ShowMessageBox(
														   $.TenfootMsgBox.k_EMsgBoxButton_OK,
														   'Remove a listing',
														   'There was a problem removing your listing. Refresh the page and try again.'
													   );
												   }
											   }
											 );
						} })(order.buy_orderid, oItem) );
						$.RegisterFooterButton( oItem, 'pad_a', 'VIEW ITEM PAGE' );
						$.RegisterFooterButton( oItem, 'pad_y', 'CANCEL LISTING' );
						
						var oContents = $.CreatePanel( 'Panel', oItem, '' );
						oContents.AddClass( 'MarketGridItemMainContent' );

						var oItemImage = CreateMarketItemImage( order.description, oContents, oItem );

						var oInfo = $.CreatePanel( 'Panel', oContents, '' );
						oInfo.AddClass( 'MarketGridItemInfo' );

						var oItemName = $.CreatePanel( 'Label', oInfo, '' );
						oItemName.AddClass( 'ItemName' );
						oItemName.text = order.description.name;

						if ( order.description.name_color )
						{
							oItemName.style.color = '#'+order.description.name_color;
							oItemImage.style.borderColor = '#'+order.description.name_color;
						}
						else
						{
							oItemName.style.color = null;
							oItemImage.style.border = null;
						}

						var oPriceInfo = $.CreatePanel( 'Panel', oInfo, '' );
						oPriceInfo.AddClass( 'MyListingPrices' );

						var oPrice = $.CreatePanel( 'Label', oPriceInfo, '' );
						oPrice.AddClass( 'BuyingFor' );
						oPrice.text = 'Buying for %1$s'
							.replace( '%1$s', v_currencyformat(order.price, GetCurrencyCode( order.wallet_currency ) ) );

						var oQuantity = $.CreatePanel( "Label", oInfo, '' );
						oQuantity.AddClass( 'MyListingQuantity' );
						oQuantity.text = '%1$s of %2$s left to collect'
							.replace( '%1$s', order.quantity_remaining )
							.replace( '%2$s', order.quantity );
						


						oItem.SetPanelEvent( 'onactivate', function()
											 {
												 $.DispatchEvent( 'ShowMarketDetails', order.appid, order.hash_name, '', true );
											 } );

					}
				} );
}

function DelayAddListing( nLoadNumber, listing, oGrid )
{
	$.Schedule( 0.0, function()
	{
		if ( g_CurrentTab == "#MarketMyListings" && nLoadNumber == g_nLoadNumber && oGrid.IsValid() )
		{
			var oItem = $.CreatePanel( 'Button', oGrid, 'Listing_' + listing.listingid );
			oItem.AddClass( 'MarketGridItem' );

			$.RegisterKeyBind( oItem, 'pad_y,steampad_y', (function(listingid, item) { return function() {
				$.AsyncWebRequest( 'https://steamcommunity.com/market/removelisting/' + listingid,
						{
							type: 'POST',
							data:
							{
								sessionid: g_SessionID
							},
							success: function( data ) {
								if ( item.IsValid() )
								{
									item.DeleteAsync( 0.0 );
								}
							},
							error: function( xhr )
							{
								$.Msg( "Remove " + listingid + " failed. Status: " + xhr.status + " " + xhr.statusText + " " + xhr.responseText );
								$.TenfootController( $('#ItemGridMain') ).ShowMessageBox(
										$.TenfootMsgBox.k_EMsgBoxButton_OK,
										'Remove a listing',
										'There was a problem removing your listing. Refresh the page and try again.'
								);
							}
						}
				);
			} })(listing.listingid, oItem) );

			$.RegisterFooterButton( oItem, 'pad_y', 'CANCEL LISTING' );
			$.RegisterFooterButton( oItem, 'pad_a', 'VIEW ITEM PAGE' );

			var oContents = $.CreatePanel( 'Panel', oItem, '' );
			oContents.AddClass( 'MarketGridItemMainContent' );

			var oItemImage = CreateMarketItemImage( listing.asset, oContents, oItem );

			var oInfo = $.CreatePanel( 'Panel', oContents, '' );
			oInfo.AddClass( 'MarketGridItemInfo' );

			var oItemName = $.CreatePanel( 'Label', oInfo, '' );
			oItemName.AddClass( 'ItemName' );
			oItemName.text = listing.asset.name;

			if ( listing.asset.name_color )
			{
				oItemName.style.color = '#'+listing.asset.name_color;
				oItemImage.style.borderColor = '#'+listing.asset.name_color;
			}
			else
			{
				oItemName.style.color = null;
				oItemImage.style.border = null;
			}

			var oPriceInfo = $.CreatePanel( 'Panel', oInfo, '' );
			oPriceInfo.AddClass( 'MyListingPrices' );

			var oPrice = $.CreatePanel( 'Label', oPriceInfo, '' );
			oPrice.AddClass( 'SellingFor' );
			oPrice.text = 'Selling for %1$s'
					.replace( '%1$s', v_currencyformat(listing.price + listing.fee, GetCurrencyCode( listing.currencyid - 2000 ) ) );

			var oPrice = $.CreatePanel( 'Label', oPriceInfo, '' );
			oPrice.text = '(%1$s)'
					.replace( '%1$s', v_currencyformat(listing.price, GetCurrencyCode( listing.currencyid - 2000 ) ) );

			var oTimeListed = $.CreatePanel( 'Label', oInfo, '' );
			oTimeListed.text = 'Listed on %1$s'
					.replace( '%1$s', listing.time_created_str );

			oItem.SetPanelEvent( 'onactivate', function()
			{
				$.DispatchEvent( 'ShowMarketDetails', listing.asset.appid, GetMarketHashName( listing.asset ), '', true );
			} );
		}
	} );
}

function OpenMarketListings()
{
	if ( !SelectMarketTab( '#MarketMyListings' ) )
	{
		return;
	}

	var oGrid = SelectGrid( "Main" );
	ClearGrid( oGrid );

	RefreshMyMarketListings();
}

function RefreshPopularItems()
{
	var oGrid = $('#ItemGridMain');
	ClearGrid( oGrid );

	if ( g_bMarketAllowed )
	{
		var oCreateListing = MakeMarketActionButton( oGrid, '+ Create new listing' );

		oCreateListing.SetPanelEvent( 'onactivate', function()
		{
			$.DispatchEvent( 'ShowMarketItemPicker', 0, '', encodeURIComponent('[ "OpenCommunityMarket", false ]'), true );
		} );
	}


	g_bLoadingItems = false;
	g_nMarketItemsStart = 0;
	g_nMarketItemsTotal = 0;
	GrabMorePopularEntries();
}

function GrabMorePopularEntries()
{
	if ( g_bLoadingItems )
	{
		return;
	}

	g_bLoadingItems = true;

	var oGrid = $('#ItemGridMain');
	var nLoadNumber = ++g_nLoadNumber;

	var pagesize = 99;

	ShowThrobber( g_nMarketItemsStart != 0 );

	// Async load everything else
	$.AsyncWebRequest( 'https://steamcommunity.com/market/popular',
			{
				type: 'GET',
				data: {
					norender: 1,
					country: g_strCountryCode,
					language: g_strLanguage,
					currency: typeof( g_rgWalletInfo ) != 'undefined' ? g_rgWalletInfo['wallet_currency'] : 1,
					start: g_nMarketItemsStart,
					count: pagesize
				},
				success: function( data ) {
					if ( data.success && g_nLoadNumber == nLoadNumber ) {
						$.Each(data.data, function (item) {
							DelayAddSmallItem(nLoadNumber, item, oGrid);
						});
						g_nMarketItemsStart += parseInt(data.pagesize);
					}
				},
				complete: function() {
					if ( g_nLoadNumber == nLoadNumber )
					{
						HideThrobber();
						g_bLoadingItems = false;
					}
				}
			}
	);
}

function DelayAddSmallItem( nLoadNumber, item, oGrid )
{
	$.Schedule( 0.0, function()
	{
		if ( g_CurrentTab == "#MarketPopularItems" && nLoadNumber == g_nLoadNumber && oGrid.IsValid() )
		{
			if ( !oGrid.FindChild( item.name ) )
			{
				var oItem = $.CreatePanel('Button', oGrid, item.name);
				oItem.AddClass('MarketGridItem');

				$.RegisterFooterButton(oItem, 'pad_a', 'VIEW ITEM PAGE');

				var oContents = $.CreatePanel('Panel', oItem, '');
				oContents.AddClass('MarketGridItemMainContent');

				var oItemImage = CreateMarketItemImage(item.asset_description, oContents, oItem);

				var elAppImage = $.CreatePanel('Image', oItemImage, '');
				elAppImage.AddClass('AppImage');
				elAppImage.SetImage(item.app_icon);
				elAppImage.SetScaling('stretch-to-fit-preserve-aspect');

				var elSubContents = $.CreatePanel('Panel', oContents, '');
				elSubContents.AddClass('MarketGridItemInfo');

				var elCardName = $.CreatePanel('Label', elSubContents, '');
				elCardName.AddClass('ItemName');
				elCardName.text = item.name;

				if ( item.asset_description.name_color )
				{
					elCardName.style.color = '#' + item.asset_description.name_color;
				}

				var elSubtitle = $.CreatePanel('Label', elSubContents, '' );
				elSubtitle.AddClass( 'ItemSubtitle' );
				elSubtitle.text = item.app_name;
				if ( item.asset_description.appid == 753  )
				{
					elSubtitle.text = item.asset_description.type;
				}

				var elPrice = $.CreatePanel('Label', elSubContents, '');
				elPrice.html = true;
				elPrice.AddClass('ItemPrice');
				elPrice.text = '%1$s and higher'.replace('%1$s', '<span class=\"BrightText\">' + item.sell_price_text + '</span>');

				oItem.SetPanelEvent('onactivate', function ()
				{
					$.DispatchEvent('ShowMarketDetails', item.asset_description.appid, item.hash_name, '', true);
				});
			}
			else
			{
				$.Msg("Found duplicate " + item.name);
			}
		}
	} );
}

function OpenMarketPopular()
{
	if ( !SelectMarketTab( '#MarketPopularItems' ) )
	{
		return;
	}

	var oGrid = SelectGrid( "Main" );
	ClearGrid( oGrid );

	RefreshPopularItems();
}

function RefreshNewlyListed( bItemTakeFocus )
{
	var oGrid = $('#ItemGridMain');
	ClearGrid ( oGrid );

	if ( g_bMarketAllowed )
	{
		var oCreateListing = MakeMarketActionButton( oGrid, '+ Create new listing' );

		oCreateListing.SetPanelEvent( 'onactivate', function()
		{
			$.DispatchEvent( 'ShowMarketItemPicker', 0, '', encodeURIComponent('[ "OpenCommunityMarket", false ]'), true );
		} );
	}

	var nLoadNumber = ++g_nLoadNumber;

	ShowThrobber( false );

	// Async load everything else
	$.AsyncWebRequest( 'https://steamcommunity.com/market/recent',
			{
				type: 'GET',
				data: {
					country: g_strCountryCode,
					language: g_strLanguage,
					currency: ( typeof( g_rgWalletInfo ) != 'undefined' && g_rgWalletInfo['wallet_currency'] != 0 ) ? g_rgWalletInfo['wallet_currency'] : 1,
					norender: 1
				},
				success: function( data ) {
					$.Each( data.listinginfo, function( listing ) {
						listing.asset = data.assets[listing.asset.appid][listing.asset.contextid][listing.asset.id]
						listing.asset.app_name = data.app_data[listing.asset.appid].name;
						DelayAddNewListing( nLoadNumber, listing, oGrid );
					} );

					$.Schedule( 0.0, function()
					{
						if ( g_CurrentTab == "#MarketNewlyListed" && nLoadNumber == g_nLoadNumber && oGrid.IsValid() )
						{
							var oButton = MakeMarketActionButton( oGrid, 'Refresh Listings' );
							oButton.SetPanelEvent( 'onactivate', function()
							{
								GiveFocusToOpenTab();
								RefreshNewlyListed( true );
							} );

							if ( bItemTakeFocus )
							{
								oGrid.GetChild(0).SetFocus();
							}
						}
					} );
				},
				complete: function()
				{
					if ( g_nLoadNumber == nLoadNumber )
					{
						HideThrobber();
					}
				}
			}
	);
}

function DelayAddNewListing( nLoadNumber, listing, oGrid )
{
	$.Schedule( 0.0, function()
	{
		if ( g_CurrentTab == "#MarketNewlyListed" && nLoadNumber == g_nLoadNumber && oGrid.IsValid() )
		{
			var price = listing.converted_price == undefined ? listing.price : listing.converted_price;
			var fee = listing.converted_fee == undefined ? listing.fee : listing.converted_fee;
			var currencyid = listing.converted_currencyid == undefined ? listing.currencyid : listing.converted_currencyid;

			if ( price == 0 || price == undefined )
			{
				return;
			}

			var oItem = $.CreatePanel( 'Button', oGrid, 'Listing_' + listing.listingid );
			oItem.AddClass( 'MarketGridItem' );

			$.RegisterFooterButton( oItem, 'pad_a', 'VIEW ITEM PAGE' );

			var oContents = $.CreatePanel( 'Panel', oItem, '' );
			oContents.AddClass( 'MarketGridItemMainContent' );

			var oItemImage = CreateMarketItemImage( listing.asset, oContents, oItem );

			var oInfo = $.CreatePanel( 'Panel', oContents, '' );
			oInfo.AddClass( 'MarketGridItemInfo' );

			var oItemName = $.CreatePanel( 'Label', oInfo, '' );
			oItemName.AddClass( 'ItemName' );
			oItemName.text = listing.asset.name;

			if ( listing.asset.name_color )
			{
				oItemName.style.color = '#'+listing.asset.name_color;
				oItemImage.style.borderColor = '#'+listing.asset.name_color;
			}
			else
			{
				oItemName.style.color = null;
				oItemImage.style.border = null;
			}

			var elSubtitle = $.CreatePanel('Label', oInfo, '' );
			elSubtitle.AddClass( 'ItemSubtitle' );
			elSubtitle.text = listing.asset.app_name;
			if ( listing.asset.appid == 753  )
			{
				elSubtitle.text = listing.asset.type;
			}

			var oPriceInfo = $.CreatePanel( 'Panel', oInfo, '' );
			oPriceInfo.AddClass( 'MyListingPrices' );

			var oPrice = $.CreatePanel( 'Label', oPriceInfo, '' );
			oPrice.AddClass( 'SellingFor' );
			oPrice.text = 'Selling for %1$s'
					.replace( '%1$s', v_currencyformat(price + fee, GetCurrencyCode( currencyid - 2000 ) ) );

			oItem.SetPanelEvent( 'onactivate', function()
			{
				$.DispatchEvent( 'ShowMarketDetails', listing.asset.appid, GetMarketHashName( listing.asset ), '', true );
			} );
		}
	} );
}

function OpenMarketNewlyListed()
{
	if ( !SelectMarketTab( '#MarketNewlyListed' ) )
	{
		return;
	}

	var oGrid = SelectGrid( "Main" );
	ClearGrid( oGrid );

	RefreshNewlyListed( false );
}

var g_bLoadingItems = false;
var g_nMarketItemsStart = 0;
var g_nMarketItemsTotal = 0;

var k_EMarketHistoryEvent_ListingCreated = 1;
var k_EMarketHistoryEvent_ListingCancelled = 2;
var k_EMarketHistoryEvent_Sale = 3;
var k_EMarketHistoryEvent_Purchase = 4;

function RefreshMarketHistory()
{
	var oGrid = $( '#ItemGridMain' );
	ClearGrid( oGrid );

	g_bLoadingItems = false;
	g_nMarketItemsStart = 0;
	g_nMarketItemsTotal = 0;
	GrabMoreMarketHistoryEntries();
}

function GrabMoreMarketHistoryEntries()
{
	if ( g_bLoadingItems )
	{
		return;
	}

	var oGrid = $( '#ItemGridMain' );
	var nLoadNumber = ++g_nLoadNumber;

	g_bLoadingItems = true;

	ShowThrobber( g_nMarketItemsStart != 0 );

	// Async load everything else
	$.AsyncWebRequest( 'https://steamcommunity.com/market/myhistory',
			{
				type: 'GET',
				data: {
					norender: 1,
					start: g_nMarketItemsStart,
					count: 60
				},
				success: function( data ) {
					if ( data.success && g_nLoadNumber == nLoadNumber )
					{
						$.Each( data.events,
								function ( event )
								{
									event.listing = data.listings[event.listingid];
									event.asset = data.assets[event.listing.asset.appid][event.listing.asset.contextid][event.listing.asset.id];
									if ( event.event_type == k_EMarketHistoryEvent_Sale || event.event_type == k_EMarketHistoryEvent_Purchase )
									{
										event.purchase = data.purchases[event.listingid + "_" + event.purchaseid];
									}

									DelayAddHistoryEvent( nLoadNumber, event, oGrid );
								}
						);
						g_nMarketItemsStart += parseInt(data.pagesize);
						g_nMarketItemsTotal = data.total_count;
					}
				},
				complete: function() {
					if ( g_nLoadNumber == nLoadNumber )
					{
						HideThrobber();
						g_bLoadingItems = false;
					}
				}
			}
	);
}

function DelayAddHistoryEvent( nLoadNumber, event, oGrid )
{
	$.Schedule( 0.0, function()
	{
		if ( g_CurrentTab == "#MarketMyHistory" && nLoadNumber == g_nLoadNumber && oGrid.IsValid() )
		{
			var oItem = $.CreatePanel( 'Button', oGrid, '' );
			oItem.AddClass( 'MarketGridItem' );

			$.RegisterFooterButton( oItem, 'pad_a', 'VIEW ITEM PAGE' );

			var oContents = $.CreatePanel( 'Panel', oItem, '' );
			oContents.AddClass( 'MarketGridItemMainContent' );

			var oItemImage = CreateMarketItemImage( event.asset, oContents, oItem );

			var elAppImage = $.CreatePanel( 'Image', oItemImage, '' );
			elAppImage.AddClass( 'AppImage' );
			elAppImage.SetScaling( 'stretch-to-fit-preserve-aspect' );

			$.RegisterEventHandler( 'ReadyPanelForDisplay', oItem, function()
			{
				elAppImage.SetImage( event.asset.app_icon );
			} );

			$.RegisterEventHandler( 'PanelDoneWithDisplay', oItem, function()
			{
				elAppImage.SetImage( '' );
			} );

			var oInfo = $.CreatePanel( 'Panel', oContents, '' );
			oInfo.AddClass( 'MarketGridItemInfo' );

			var oItemName = $.CreatePanel( 'Label', oInfo, '' );
			oItemName.AddClass( 'ItemName' );
			oItemName.text = event.asset.name;

			if ( event.asset.name_color )
			{
				oItemName.style.color = '#'+event.asset.name_color;
				oItemImage.style.borderColor = '#'+event.asset.name_color;
			}
			else
			{
				oItemName.style.color = null;
				oItemImage.style.border = null;
			}

			var oPriceInfo = $.CreatePanel( 'Panel', oInfo, '' );
			oPriceInfo.AddClass( 'MyListingPrices' );

			if ( event.event_type == k_EMarketHistoryEvent_ListingCreated || event.event_type == k_EMarketHistoryEvent_ListingCancelled )
			{
				var oPrice = $.CreatePanel( 'Label', oPriceInfo, '' );
				oPrice.AddClass( 'SellingFor' );
				oPrice.text = 'Selling for %1$s'
						.replace( '%1$s',
						v_currencyformat( event.listing.original_price,
								GetCurrencyCode( event.listing.currencyid - 2000 )
						)
				);
			}
			else if ( event.event_type == k_EMarketHistoryEvent_Sale )
			{
				var oPrice = $.CreatePanel( 'Label', oPriceInfo, '' );
				oPrice.AddClass( 'SellingFor' );
				oPrice.text = 'Sold for %1$s'
						.replace( '%1$s',
						v_currencyformat( event.purchase.received_amount,
								GetCurrencyCode( event.purchase.received_currencyid - 2000 )
						)
				);
			}
			else if ( event.event_type == k_EMarketHistoryEvent_Purchase )
				{
					var oPrice = $.CreatePanel( 'Label', oPriceInfo, '' );
					oPrice.AddClass( 'PurchasedFor' );
					oPrice.text = 'Purchased for %1$s'
							.replace( '%1$s',
							v_currencyformat( event.purchase.paid_amount + event.purchase.paid_fee,
									GetCurrencyCode( event.purchase.currencyid - 2000 )
							)
					);
				}


			var oEvent = $.CreatePanel( 'Label', oInfo, '' );
			oEvent.AddClass( "HistoryEventDescription" );

			var sEvent;
			if ( event.event_type == k_EMarketHistoryEvent_ListingCreated )
			{
				sEvent = 'Listed';
			}
			else if ( event.event_type == k_EMarketHistoryEvent_ListingCancelled )
			{
				sEvent = event.listing.cancel_reason;
			}
			else if ( event.event_type == k_EMarketHistoryEvent_Sale )
			{
				sEvent = 'Sold';
			}
			else if ( event.event_type == k_EMarketHistoryEvent_Purchase )
			{
				sEvent = 'Purchased';
			}

			oEvent.text = '%1$s on %2$s'
					.replace( '%1$s', sEvent )
					.replace( '%2$s', event.date_event );

			if ( event.event_type == k_EMarketHistoryEvent_Sale || event.event_type == k_EMarketHistoryEvent_Purchase )
			{
				var elActorInfo = $.CreatePanel( 'Panel', oInfo, '' );
				elActorInfo.AddClass( "ActorInfo" );

				var oActorAvatar = $.CreatePanel( 'Image', elActorInfo, '' );
				oActorAvatar.SetScaling( 'stretch-to-fit-preserve-aspect' );

				$.RegisterEventHandler( 'ReadyPanelForDisplay', oItem, function()
				{
					oActorAvatar.SetImage( event.purchase.avatar_actor );
				} );

				$.RegisterEventHandler( 'PanelDoneWithDisplay', oItem, function()
				{
					oActorAvatar.SetImage( '' );
				} );

				var oActorName = $.CreatePanel( 'Label', elActorInfo, '' );
				if ( event.event_type == k_EMarketHistoryEvent_Purchase )
				{
					oActorName.text = 'Seller: ' + event.purchase.persona_actor;
				}
				else
				{
					oActorName.text = 'Buyer: ' + event.purchase.persona_actor;
				}
			}

			if ( event.event_type != k_EMarketHistoryEvent_ListingCreated )
			{
				var oSash = $.CreatePanel( 'Panel', oItem, '' );
				oSash.AddClass( 'HistorySash' );

				var oSashText = $.CreatePanel( 'Label', oSash, '' );

				if ( event.event_type == k_EMarketHistoryEvent_ListingCancelled )
				{
					oSash.AddClass( 'ListingCancelled' );
					oSashText.text = event.listing.cancel_reason_short;
				}
				else if ( event.event_type == k_EMarketHistoryEvent_Sale )
				{
					oSash.AddClass( 'ListingSold' );
					oSashText.text = 'Sold';
				}
				else if ( event.event_type == k_EMarketHistoryEvent_Purchase )
				{
					oSash.AddClass( 'ListingPurchased' );
					oSashText.text = 'Purchased';
				}
			}

			oItem.SetPanelEvent( 'onactivate', function()
			{
				$.DispatchEvent( 'ShowMarketDetails', event.asset.appid, GetMarketHashName( event.asset), '', true );
			} );
		}
	} );
}

function OpenMarketHistory()
{
	if ( !SelectMarketTab( '#MarketMyHistory' ) )
	{
		return;
	}

	var oGrid = SelectGrid( "Main" );
	ClearGrid( oGrid );

	RefreshMarketHistory();
}

function OpenMarketSearch()
{
	if ( !SelectMarketTab( "#MarketSearch" ) )
	{
		return;
	}

	var oGrid = SelectGrid( "Search" );


	$.RegisterKeyBind( oGrid, 'pad_x,steampad_x', function() {
		FocusSearchPanel();
	} );

}

function GridChildIndexSelected( strGrid, iChild )
{
	if ( g_CurrentTab == "#MarketMyHistory" )
	{
		// Load more entries if we're approaching the end
		if (g_nMarketItemsStart < g_nMarketItemsTotal && iChild >= g_nMarketItemsStart - 30 && !g_bLoadingItems)
		{
			GrabMoreMarketHistoryEntries();
		}
	}
	else if ( g_CurrentTab == "#MarketPopularItems" )
	{
		if (iChild >= g_nMarketItemsStart - 30 && !g_bLoadingItems)
		{
			GrabMorePopularEntries();
		}
	}
	else if ( g_CurrentTab == "#MarketSearch" )
	{
		if (iChild >= g_nMarketItemsStart - 30 && !g_bLoadingItems)
		{
			GrabMoreSearchEntries();
		}
		else if ( iChild < 3 )
		{
			$("#MarketContentPanel").AddClass( "SearchVisible" );
		}
		else if ( iChild >= 6 )
		{
			$("#MarketContentPanel").RemoveClass("SearchVisible");
		}
	}
	var oGrid = $( '#' + strGrid );
	if ( oGrid.GetChildCount() > 0 )
	{
		$("#MarketContentPanel").defaultfocus = oGrid.GetChild(iChild).id;
	}
}

function OnMarketClosed()
{
	$.UnregisterForUnhandledEvent( 'MarketListingCreated', g_nMarketListingCreatedEventId );
	$.Schedule( 0.0,
			function() {
				$.UnregisterForUnhandledEvent( 'CommunityMarketClosed', g_nMarketClosedEventId );
			}
	);
}

function DisplayPopup( id, url )
{
	var strStartingLayout =  "<root>\r\n\t\t\t\t\t<styles>\r\n\t\t\t\t\t\t<include src=\"file:\/\/{resources}\/styles\/steamstyles.css\" \/>\n\t\t<include src=\"https:\/\/steamcommunity-a.akamaihd.net\/public\/shared\/css\/bigpicture\/basestyles.css?v=.O7qIGXRQ0TKu\" \/>\n\r\n\t\t\t\t\t\t<include src=\"https:\/\/steamcommunity-a.akamaihd.net\/public\/css\/bigpicture\/market.css?v=.R0Uw4Caql-2o\" \/>\r\n\t\t\t\t\t<\/styles>\r\n\t\t\t\t\t<Button class=\"MarketPopupWrapper\" tabindex=\"auto\" selectionpos=\"auto\" onfocus=\"None();\">\r\n\t\t\t\t\t\t<LoadingThrobber \/>\r\n\t\t\t\t\t<\/Button>\r\n\t\t\t\t<\/root>";
	var popup = $.CreatePanel( 'Panel', $.TenfootController( $.GetContextPanel() ).AccessMainMenu(), id );
	popup.BLoadLayoutFromString( strStartingLayout, true, false );
	$.TenfootController( $.GetContextPanel() ).ShowModalDialog( popup, '' );
	popup.SetFocus();

	$.RegisterEventHandler( 'LoadAsyncComplete', popup, function( panelid, bSuccess, eDetail, bPartial )
	{
		if ( panelid != popup.id )
		{
			return;
		}

		if ( bSuccess )
		{
			popup.FindChildrenWithClassTraverse("MarketPopup")[0].SetFocus();
		}
		else
		{
			popup.AddClass( "Destructing" );
			$.DispatchEvent( 'MessageBoxClose', popup );
			popup.DeleteAsync( 0.4 );
		}
	} );
	popup.LoadLayoutAsync( url, true, false );

}

function DisplaySearchOptions( data )
{
	var options = $("#SearchOptions");
	ClearSearchOptions();

	var nCategories = Object.keys( data.facets ).length;
	if ( nCategories == 0 )
	{
		$( "#MarketSearchPanel" ).AddClass("NoSearchOptions");
		$( "#MarketSearchPanel" ).RemoveClass("SearchOptions");
		return;
	}

	$( "#MarketSearchPanel").AddClass( "SearchOptions" );

	for ( facet in data.facets )
	{
		var facetData = data.facets[facet];

		var header = $.CreatePanel( 'Label', options, '' );
		header.AddClass( 'FacetHeader' );
		header.text = facetData.localized_name;

		var dropdown = $.CreatePanel( 'DropDown', options, facet );

		dropdown.text = facetData.localized_name;

		tagCount = Object.keys( facetData.tags).length;

		var bSort = tagCount > 20;
		var rgTags = [];
		for ( var tagName in facetData.tags )
		{
			facetData.tags[tagName].internal_name = tagName;
			rgTags.push( facetData.tags[tagName] );
		}

		if ( bSort )
		{
			rgTags.sort( function(a, b) {
				var str1 = a.localized_name.toLocaleLowerCase();
				var str2 = b.localized_name.toLocaleLowerCase();

				if ( str1 < str2 ) return -1;
				else if ( str1 > str2 ) return 1;
				else return 0;
			} );
		}


		var any = $.CreatePanel( 'Label', dropdown, 'any' );
		any.text = 'Any';
		any.AddClass( 'FilterOption' );
		dropdown.AddOption( any );
		dropdown.SetSelected( any );

		for ( var i = 0; i < rgTags.length; i++ )
		{
			var tagData = rgTags[i];
			var option = $.CreatePanel( 'Label', dropdown, 'tag_' + tagData.internal_name );
			option.AddClass( 'FilterOption' );
			option.text = tagData.localized_name;

			if ( tagData.hasOwnProperty('color') )
			{
				option.style.color = ( tagData.color[0] == '#' ? '' : '#' ) + tagData.color;
			}
			dropdown.AddOption( option );

		}

		$.RegisterEventHandler( 'DropDownSelectionChanged', dropdown, OnSearchFacetChange );
	}
}

function ClearSearchOptions()
{
	var options = $("#SearchOptions");

	$.Each( options.Children(), function( elDropDown )
	{
		if ( !elDropDown.BHasClass( "DoNotRemove" ) )
		{
			elDropDown.DeleteAsync( 0.0 );
		}
	} );

	$("#MarketSearchPanel").RemoveClass( "NoSearchOptions" );
	$("#MarketSearchPanel").RemoveClass( "SearchOptions" );
}

function OnSearchButtonActivated( id )
{
	var button = $("#" + id );
	button.checked = !button.checked;
}

function OnSearchAppChange()
{
	var dropdown = $("#MarketSearchAppDropDown" );
	var selected = dropdown.GetSelected();
	var appid = selected.GetAttributeInt( "appid", 0 );

	var nLoadNumber = ++g_nLoadNumber;

	ClearGrid( $("#ItemGridSearch" ) );
	ClearSearchOptions();

	if ( appid != 0 )
	{
		$("#SearchContentPanel").AddClass( "SearchOptionsLoading" );
		$.AsyncWebRequest( 'https://steamcommunity.com/market/appfilters/' + appid,
							{
								type: 'GET',
								data: {
									country: g_strCountryCode
								},
								success: function( data )
								{
									if ( g_nLoadNumber == nLoadNumber )
									{
										if ( data.success )
										{
											DisplaySearchOptions( data );
										}
										else
										{
											$( "MarketSearchPanel" ).AddClass( "NoSearchOptions" );
										}
									}
								},
								complete: function()
								{
									if ( g_nLoadNumber == nLoadNumber )
									{
										$("#SearchContentPanel").RemoveClass( "SearchOptionsLoading" );
										OnSearchSubmit();
									}
								},
								error: function()
								{
									if ( g_nLoadNumber == nLoadNumber )
									{
										$( "MarketSearchPanel" ).AddClass( "NoSearchOptions" );
									}
								}
							} );
	}
}

function OnSearchFacetChange()
{
	OnSearchSubmit();
}


function OnSearchClear()
{
	var dropdown = $("#MarketSearchAppDropDown" );
	$("#MarketSearchText").text = "";

	if ( !$("#MarketContentPanel").BHasClass( "NoSearchRun" ) )
	{
		ClearSearchOptions();
		dropdown.SetSelected( "app_option_all" );
	}

	var searchTerms = $("#SearchTerms");
	searchTerms.AddClass( "NoSearchTerms" );

	ClearGrid( $("#ItemGridSearch" ) );
}



function OnSearchSubmit()
{
	var strQuery = $("#MarketSearchText").text;
	// Construct search URL
	var url = 'https://steamcommunity.com/market/search/render?norender=1&query=' + encodeURIComponent( strQuery );

	// appid
	var selectedApp = $("#MarketSearchAppDropDown").GetSelected();
	var selectedAppId = selectedApp.id;
	var appid = selectedAppId.substring( selectedAppId.lastIndexOf('_') + 1 );

	if ( appid != 'all' )
	{
		url = url + '&appid=' + appid;
	}

	//
	// All search params
	//
	var options = $( "#SearchOptions" );
	$.Each( options.Children(), function( elCategory )
	{
		if ( elCategory.paneltype == 'DropDown' && elCategory.enabled )
		{
			var param = encodeURIComponent( 'category_' + elCategory.id + '[]' );
			var filter = elCategory.AccessDropDownMenu();
			var selected = elCategory.GetSelected();

			url = url + '&' + param + '=' + encodeURIComponent( selected.id );
		}
	} );

	$.Msg( url );

	$("#MarketContentPanel").RemoveClass( "NoSearchRun" );

	if ( appid == 'all' )
	{
		ClearSearchOptions();
	}

	var searchTerms = $("#SearchTerms");
	searchTerms.AddClass( "NoSearchTerms" );

	RefreshSearchListings( url );
}

function RefreshSearchListings( url )
{
	var oGrid = $('#ItemGridSearch');
	ClearGrid( oGrid );

	g_bLoadingItems = false;
	g_nMarketItemsStart = 0;
	g_nMarketItemsTotal = 0;
	g_MarketSearchURL = url;
	GrabMoreSearchEntries();
}

function GrabMoreSearchEntries()
{
	if ( g_bLoadingItems )
	{
		return;
	}

	g_bLoadingItems = true;

	var oGrid = $('#ItemGridSearch');
	var nLoadNumber = ++g_nLoadNumber;

	var pagesize = 99;

	ShowThrobber( g_nMarketItemsStart != 0 );

	// Async load everything else
	$.AsyncWebRequest( g_MarketSearchURL,
		{
			type: 'GET',
			data: {
				start: g_nMarketItemsStart,
				count: pagesize
			},
		success: function( data ) {
			if ( data.success && g_nLoadNumber == nLoadNumber ) {
				if ( Object.keys( data.results ).length == 0 )
				{
					$("#MarketContentPanel").AddClass( "NoItemsSearch" );
				}
				else
				{
					$("#MarketContentPanel").RemoveClass( "NoItemsSearch" );
					$.Each(data.results, function (item) {
						DelayAddSearchItem(nLoadNumber, item, oGrid);
					});
				}
				g_nMarketItemsStart += parseInt(data.pagesize);

				var strQuery = $("#MarketSearchText").text;
				var searchTerms = $("#SearchTerms");
				if ( strQuery )
				{
					searchTerms.text ='"' + strQuery.toUpperCase() + '"';
					searchTerms.RemoveClass( "NoSearchTerms" );
				}
			}
		},
		complete: function() {
			if ( g_nLoadNumber == nLoadNumber )
			{
				HideThrobber();
				g_bLoadingItems = false;
			}
		}
		}
	);
}

function DelayAddSearchItem( nLoadNumber, item, oGrid )
{
	$.Schedule( 0.0, function()
	{
		if ( g_CurrentTab == "#MarketSearch" && nLoadNumber == g_nLoadNumber && oGrid.IsValid() )
		{
			if ( !oGrid.FindChild( item.name ) )
			{
				var oItem = $.CreatePanel('Button', oGrid, item.name);
				oItem.AddClass('MarketGridItem');

				$.RegisterFooterButton(oItem, 'pad_a', 'VIEW ITEM PAGE');

				var oContents = $.CreatePanel('Panel', oItem, '');
				oContents.AddClass('MarketGridItemMainContent');

				var oItemImage = CreateMarketItemImage(item.asset_description, oContents, oItem);

				var elSubContents = $.CreatePanel('Panel', oContents, '');
				elSubContents.AddClass('MarketGridItemInfo');

				var elCardName = $.CreatePanel('Label', elSubContents, '');
				elCardName.AddClass('ItemName');
				elCardName.text = item.name;

				if ( item.asset_description.name_color )
				{
					elCardName.style.color = '#' + item.asset_description.name_color;
				}

				var elSubtitle = $.CreatePanel('Label', elSubContents, '' );
				elSubtitle.AddClass( 'ItemSubtitle' );
				elSubtitle.text = item.app_name;
				if ( item.asset_description.appid == 753  )
				{
					elSubtitle.text = item.asset_description.type;
				}


				var elPrice = $.CreatePanel('Label', elSubContents, '');
				elPrice.html = true;
				elPrice.AddClass('ItemPrice');
				elPrice.text = '%1$s and higher'.replace('%1$s', '<span class=\"BrightText\">' + item.sell_price_text + '</span>');
				oItem.SetPanelEvent('onactivate', function ()
				{
					$.DispatchEvent('ShowMarketDetails', item.asset_description.appid, item.hash_name, '', true);
				});

				if ( oGrid.GetChildCount() == 1 )
				{
					//oItem.SetFocus();
				}
			}
			else
			{
				$.Msg("Found duplicate " + item.name);
			}
		}
	} );
}

function FocusSearchPanel()
{
	$("#MarketContentPanel").AddClass( "SearchVisible" );
	$("#MarketSearchPanel").SetFocus();
}

function OnMoveLeftFromGrid()
{
	$("#MarketSearchPanel").SetFocus();
	$("#MarketContentPanel").defaultfocus = "";
}

function FocusItemGrid()
{
	var oGrid = $("#ItemGridSearch");
	if ( oGrid.GetChildCount() > 0 )
	{
		var contentpanel = $( "#MarketContentPanel" );
		if ( contentpanel.defaultfocus && $( "#" + contentpanel.defaultfocus ) )
		{
			$( "#" + contentpanel.defaultfocus ).SetFocus();
		}
		else
		{
			oGrid.SetFocus();
		}
	}
}

function BlockMove()
{
	return true;
}

function OnMoveDownFromMenuRow()
{
	var contentpanel = $( "#MarketContentPanel" );
	if ( contentpanel.defaultfocus && $( "#" + contentpanel.defaultfocus ) && $("#CommunityMarketContent").BHasClass( $( "#" + contentpanel.defaultfocus).GetParent().id + "Visible"  ) )
	{
		$( "#" + contentpanel.defaultfocus ).SetFocus();
	}
	else
	{
		contentpanel.defaultfocus = "";
		contentpanel.SetFocus();
	}
}

function FocusContentPanel()
{
	var contentpanel = $( "#MarketContentPanel" );
	contentpanel.defaultfocus = "";
	contentpanel.SetFocus();
}

var g_bPopupsDisplayed = false;
function CheckForPopups()
{
	if ( !g_bPopupsDisplayed )
	{
		if ( !g_bMarketAllowed ) {
			DisplayPopup( 'MarketRestrictionsPopup',  "https://steamcommunity.com/market/restrictionsdialog" );
		}
		else if ( g_bShowSalesLimitDialog )
		{
			DisplayPopup( "MarketSalesLimitPopup",  "https://steamcommunity.com/market/saleslimitdialog" );
		}

		g_bPopupsDisplayed = true;
	}
}

$.Schedule( 0.0,
	function() {
		g_nMarketListingCreatedEventId = $.RegisterForUnhandledEvent( 'MarketListingCreated',
			function()
			{
				if ( g_CurrentTab == "#MarketMyListings" )
				{
					// Refresh the market listings if we're on that tab
					RefreshMyMarketListings();
				}
			}
		);

		g_nMarketClosedEventId = $.RegisterForUnhandledEvent( 'CommunityMarketClosed', OnMarketClosed );

		$.RegisterEventHandler( 'ChildIndexSelected', $( '#ItemGridMain' ), GridChildIndexSelected );
		$.RegisterEventHandler( 'ChildIndexSelected', $( '#ItemGridSearch' ), GridChildIndexSelected );


		$.RegisterEventHandler( 'DropDownSelectionChanged', 'MarketSearchAppDropDown', OnSearchAppChange );

		$.RegisterEventHandler( 'Activated', 'SearchOptions', OnSearchButtonActivated );

		$.RegisterKeyBind( $.GetContextPanel(), 'pad_x,steampad_x', function() {
			OpenMarketSearch();
			GiveFocusToOpenTab();
		} );
		$.RegisterFooterButton( $.GetContextPanel(), 'pad_x', 'SEARCH' );

		SetupAddFundsButton();

		// Suppress the "Select" footer on the buttons in the menu row.
		var elContent = $('#CommunityMarketContent');
		$.Each( elContent.FindChildrenWithClassTraverse( "Button" ),
			function( button )
			{
				$.RegisterFooterButton( button, 'pad_a', '' );
			}
		);

		// Suppress the 'Search' footer on the search button in the menu row
		$.RegisterFooterButton( $('#MarketSearch'), 'pad_x', '' );

		var elSearchPanel = $('#MarketSearchPanel');
		$.RegisterKeyBind( elSearchPanel, 'pad_x,steampad_x', function() {
			OnSearchClear();
		} );
		$.RegisterFooterButton( elSearchPanel, 'pad_x', 'CLEAR ALL' );

		//
		// Register secret keybind to switch between fixed search and hidden panel search
		//
		$.RegisterKeyBind( elContent, 'pad_start', function() {
				var panel = $("#MarketContentPanel");
				if ( panel.BHasClass( "FixedSearch" ) )
				{
					panel.RemoveClass( "FixedSearch" );
				}
				else
				{
					panel.AddClass( "FixedSearch" );
				}
		} );
	}
);

