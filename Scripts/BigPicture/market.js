

function DelayAddBuyOrder( nLoadNumber, order, oGrid )
{
	$.Schedule( 0.0, function()
	{
		if ( oGrid.IsValid() )
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
							$.TenfootController( $('#ItemGridMyListings') ).ShowMessageBox(
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

function DelayAddListing( nLoadNumber, listing, oGrid, bWaitingForConfirmation )
{
	$.Schedule( 0.0, function()
	{
		if ( oGrid.IsValid() )
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
							$.TenfootController( $('#ItemGridMyListings') ).ShowMessageBox(
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

			if ( bWaitingForConfirmation )
			{
				var oWaiting = $.CreatePanel( 'Label', oInfo, '' );
				oWaiting.AddClass( "WaitingForConfirmation" );
				oWaiting.text = 'Waiting for confirmation';
			}
			else
			{
				var oTimeListed = $.CreatePanel( 'Label', oInfo, '' );
				oTimeListed.text = 'Listed on %1$s'
					.replace( '%1$s', listing.time_created_str );
			}

			oItem.SetPanelEvent( 'onactivate', function()
			{
				$.DispatchEvent( 'ShowMarketDetails', listing.asset.appid, GetMarketHashName( listing.asset ), '', true );
			} );
		}
	} );
}



function DelayAddSmallItem( nLoadNumber, item, oGrid )
{
	$.Schedule( 0.0, function()
	{
		if ( oGrid.IsValid() )
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


function DelayAddNewListing( nLoadNumber, listing, oGrid )
{
	$.Schedule( 0.0, function()
	{
		if ( oGrid.IsValid() )
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


var k_EMarketHistoryEvent_ListingCreated = 1;
var k_EMarketHistoryEvent_ListingCancelled = 2;
var k_EMarketHistoryEvent_Sale = 3;
var k_EMarketHistoryEvent_Purchase = 4;

function DelayAddHistoryEvent( nLoadNumber, event, oGrid )
{
	$.Schedule( 0.0, function()
	{
		if ( oGrid.IsValid() )
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


function DelayAddSearchItem( nLoadNumber, item, oGrid )
{
	$.Schedule( 0.0, function()
	{
		if ( oGrid.IsValid() )
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
			}
			else
			{
				$.Msg("Found duplicate " + item.name);
			}
		}
	} );
}


var CMarketGrid = (function()
{
	function CMarketGrid( grid, url )
	{
		this.m_grid = $("#" + grid);
		this.m_url = url;
		this.m_start = 0;
		this.m_total = 0;
		this.m_bLoading = false;
		this.m_bAllowAddListing = true;
		this.m_nLoadNumber = 0;

		var that = this;
		$.RegisterEventHandler( 'ChildIndexSelected', this.m_grid, function( p, i ) { that.GridChildIndexSelected( i ) } );
	};

	CMarketGrid.prototype.ClearGrid = function()
	{
		this.m_grid.RemoveAndDeleteChildren();
		this.m_start = 0;
		this.m_total = 0;
	};

	CMarketGrid.prototype.ShowThrobber = function()
	{
		var p = this.m_grid.GetParent();
		p.AddClass( "ContentLoading" );
	}

	CMarketGrid.prototype.HideThrobber = function()
	{
		var p = this.m_grid.GetParent();
		p.RemoveClass( "ContentLoading" );
	}

	CMarketGrid.prototype.GridChildIndexSelected = function( i )
	{
		if ( this.BLoadMore( i ) )
		{
			this.GrabMore();
		}
	};

	CMarketGrid.prototype.BLoadMore = function( iChild )
	{
		$.Msg( "iChild = " + iChild + ", start = " + this.m_start );
		if ( iChild >= this.m_start - 30 && !this.m_bLoading )
		{
			return true;
		}
		return false;
	}

	CMarketGrid.prototype.RefreshListings = function()
	{
		var oGrid = this.m_grid;

		$.Msg( "Refresh " + oGrid.id );
		this.ClearGrid();

		// Add the "Create new listing" button immediately
		if ( g_bMarketAllowed && this.m_bAllowAddListing )
		{
			var oCreateListing = MakeMarketActionButton( oGrid, '+ Create new listing' );
			oCreateListing.SetPanelEvent( 'onactivate', function()
			{
				$.DispatchEvent( 'ShowMarketItemPicker', 0, '', encodeURIComponent('[ "OpenCommunityMarket", false ]'), true );
			} );
		}
		this.GrabMore();
	}

	CMarketGrid.prototype.GrabMore = function()
	{
		var oGrid = this.m_grid;

		var params = this.GetParams();
		if ( !params )
		{
			return;
		}

		var nLoadNumber = ++this.m_nLoadNumber;

		this.m_bLoading = true;
		this.ShowThrobber();


		var that = this;
		$.Msg( this.m_url );
		// Async load everything else
		$.AsyncWebRequest( this.m_url,
			{
				type: 'GET',
				data: params,
				success: function( data ) {
					if ( data && data.success && that.m_nLoadNumber == nLoadNumber )
					{
						$.Msg( "Success on " + that.m_grid.id );
						that.OnRefreshSuccess( that.m_grid, nLoadNumber, data );
						that.m_start += parseInt(data.pagesize);
						that.m_total = data.total_count;
					}
					else if ( data && data.success )
					{
						$.Msg( "Completed " + nLoadNumber + ", waiting for " + that.m_nLoadNumber );
					}
					else
					{
						$.Msg( "Failed:" );
						$.Msg( JSON.stringify( data ) );
					}
				},
				complete: function()
				{
					if ( that.m_nLoadNumber == nLoadNumber )
					{
						that.HideThrobber();
					}
					that.m_bLoading = false;
				}
			}
		);
	}

	return CMarketGrid;
})();


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

function ShowThrobber( oGrid )
{
	var p = oGrid.GetParent();
	p.AddClass( "ContentLoading" );
}

function HideThrobber( oGrid )
{
	var p = oGrid.GetParent();
	p.RemoveClass( "ContentLoading" );
}



function OnMyListingSuccess( oGrid, nLoadNumber, data )
{
	$.Each( data.buy_orders, function( order ) {
		DelayAddBuyOrder( nLoadNumber, order, oGrid );
	} );
	$.Each( data.listings_to_confirm, function( order ) {
		DelayAddListing( nLoadNumber, order, oGrid, true );
	} );
	$.Each( data.listings.reverse(), function( listing ) {
		DelayAddListing( nLoadNumber, listing, oGrid );
	} );
}

function GetParamsMyListings()
{
	return {
		norender: 1
	};
}

function OpenMarketPanel( strPanel, bForce )
{
	CheckForPopups();

	var grid = g_rgMarketGrids[strPanel];

	for ( key in g_rgMarketGrids )
	{
		$.GetContextPanel().RemoveClass( key + "Visible" );
	}

	var oGrid = grid.m_grid;
	if ( bForce || oGrid.GetChildCount() == 0 )
	{
		grid.RefreshListings();
	}
	$.GetContextPanel().AddClass( strPanel + "Visible" );
}

function OnPopularRefresh( oGrid, nLoadNumber, data )
{
	$.Each(data.data, function (item) {
		DelayAddSmallItem(nLoadNumber, item, oGrid);
	});
}

function GetParamsPopular()
{
	var pagesize = 99;

	// Try to always fill rows
	pagesize = pagesize - ( this.m_grid.GetChildCount() % this.m_grid.horizontalcount );

	return {
		country: g_strCountryCode,
		language: g_strLanguage,
		currency: typeof( g_rgWalletInfo ) != 'undefined' ? g_rgWalletInfo['wallet_currency'] : 1,
		norender: 1,
		start: this.m_start,
		count: pagesize
	};
}


function OnNewRefresh( oGrid, nLoadNumber, data )
{
	$.Each( data.listinginfo, function( listing ) {
		listing.asset = data.assets[listing.asset.appid][listing.asset.contextid][listing.asset.id]
		listing.asset.app_name = data.app_data[listing.asset.appid].name;
		DelayAddNewListing( nLoadNumber, listing, oGrid );
	} );

	$.Schedule( 0.0, function () {
		var oButton = MakeMarketActionButton( oGrid, 'Refresh Listings' );
		oButton.SetPanelEvent( 'onactivate', function()
		{
			$("#MarketNewlyListed").SetFocus();
			$.Schedule( 0.0, function() { g_rgMarketGrids['new'].RefreshListings(); } );
		} );
	} );
}

function GetParamsNewListings()
{
	return  {
		country: g_strCountryCode,
		language: g_strLanguage,
		currency: ( typeof( g_rgWalletInfo ) != 'undefined' && g_rgWalletInfo['wallet_currency'] != 0 ) ? g_rgWalletInfo['wallet_currency'] : 1,
		norender: 1
	};
}



function OnHistoryRefresh( oGrid, nLoadNumber, data )
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
}

function GetParamsHistory()
{
	var pagesize = 99;

	// Try to always fill rows
	pagesize = pagesize - ( this.m_grid.GetChildCount() % this.m_grid.horizontalcount );


	return {
		norender: 1,
		start: this.m_start,
		count: pagesize
	};
}


function DisplayPopup( id, url )
{
	var strStartingLayout =  "<root>\r\n\t\t\t\t\t<styles>\r\n\t\t\t\t\t\t<include src=\"file:\/\/{resources}\/styles\/steamstyles.css\" \/>\n\t\t<include src=\"https:\/\/steamcommunity-a.akamaihd.net\/public\/shared\/css\/bigpicture\/basestyles.css?v=valveisgoodatcaching\" \/>\n\r\n\t\t\t\t\t\t<include src=\"https:\/\/steamcommunity-a.akamaihd.net\/public\/css\/bigpicture\/market.css?v=valveisgoodatcaching\" \/>\r\n\t\t\t\t\t<\/styles>\r\n\t\t\t\t\t<Button class=\"MarketPopupWrapper\" tabindex=\"auto\" selectionpos=\"auto\" onfocus=\"None();\">\r\n\t\t\t\t\t\t<LoadingThrobber \/>\r\n\t\t\t\t\t<\/Button>\r\n\t\t\t\t<\/root>";
	var popup = $.CreatePanel( 'Panel', $.TenfootController( $.GetContextPanel() ).AccessMainMenu(), id );
	popup.BLoadLayoutFromString( strStartingLayout, true, false );
	$.TenfootController( $.GetContextPanel() ).ShowModalDialog( popup, '' );
	popup.SetFocus();

	$.RegisterEventHandler( 'LoadAsyncComplete', popup, function( pTarget, bSuccess, eDetail, bPartial )
	{
		pTarget = ToPanel( pTarget );
		if ( pTarget.id != popup.id )
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


var g_nLoadNumber = 0;
function OnSearchAppChange()
{
	var dropdown = $("#MarketSearchAppDropDown" );
	var selected = dropdown.GetSelected();
	var appid = selected.GetAttributeInt( "appid", 0 );

	var nLoadNumber = ++g_nLoadNumber;

	$.Msg( "OnSearchAppChange" );
	//ClearGrid( $("#ItemGridSearch" ) );
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
	$.Msg( "OnSearchFacetChange" );
	OnSearchSubmit();
}


function OnSearchClear()
{
	$.GetContextPanel().AddClass( "NoSearchRun" );
	var dropdown = $("#MarketSearchAppDropDown" );
	$("#MarketSearchText").text = "";

	ClearSearchOptions();
	dropdown.SetSelected( "app_option_all" );

	// Put back in the fake dropdowns
	var options = $("#SearchOptions");
	for ( var i = 0; i < 5; i++ )
	{
		var p = $.CreatePanel( 'DropDown', options, '' );
		p.enabled = false;
	}

	g_rgMarketGrids['search'].ClearGrid();
}


function OnSearchSubmit()
{
	$.Msg( "OnSearchSubmit" );
	$.GetContextPanel().RemoveClass( "NoSearchRun" );
	$.GetContextPanel().RemoveClass( "NoSearchResults" );
	g_rgMarketGrids['search'].RefreshListings();
}


function FocusSearchPanel()
{
	$("#MarketSearchPanel").SetFocus();
}

function GetParamsSearch()
{
	if ( $.GetContextPanel().BHasClass("NoSearchRun") || $.GetContextPanel().BHasClass( "NoSearchResults" ) )
	{
		return false;
	}

	var pagesize = 99;

	// Try to always fill rows
	pagesize = pagesize - ( this.m_grid.GetChildCount() % this.m_grid.horizontalcount );

	var rgParams =  {
		norender: 1,
		start: this.m_start,
		count: pagesize };

	rgParams['query'] =  $("#MarketSearchText").text;

	// appid
	var selectedApp = $("#MarketSearchAppDropDown").GetSelected();
	var selectedAppId = selectedApp.id;
	var appid = selectedAppId.substring( selectedAppId.lastIndexOf('_') + 1 );

	if ( appid != 'all' )
	{
		rgParams['appid'] = appid;
	}

	//
	// All search params
	//
	var options = $( "#SearchOptions" );
	$.Each( options.Children(), function( elCategory )
	{
		if ( elCategory.paneltype == 'DropDown' && elCategory.enabled )
		{
			var param = encodeURIComponent( 'category_' + elCategory.id /*+ '[]' */);
			var filter = elCategory.AccessDropDownMenu();
			var selected = elCategory.GetSelected();

			rgParams[param] = [ selected.id ];
		}
	} );

	$.Msg( JSON.stringify( rgParams ) );
	return rgParams;
}

function OnSearchRefresh( oGrid, nLoadNumber, data )
{
	if ( Object.keys( data.results ).length == 0 )
	{
		$.GetContextPanel().AddClass( "NoSearchResults" );
	}
	else
	{
		$.Each(data.results, function (item) {
			DelayAddSearchItem(nLoadNumber, item, oGrid);
		});
	}
}

function MoveLeftFromSearch()
{
	if ( $("#ItemGridSearch").GetChildCount() > 0 )
	{
		$("#ItemGridSearch").SetFocus();
	}
	else
	{
		$("#LeftColumn").SetFocus();
	}
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

function OnMarketClosed()
{
	$.UnregisterForUnhandledEvent( 'MarketListingCreated', g_nMarketListingCreatedEventId );
	$.Schedule( 0.0,
		function() {
			$.UnregisterForUnhandledEvent( 'CommunityMarketClosed', g_nMarketClosedEventId );
		}
	);
}

var g_nMarketListingCreatedEventId = 0;
var g_nMarketClosedEventId = 0;


var g_rgMarketGrids = new Array();

$.Schedule( 0.0,
	function() {
		g_nMarketListingCreatedEventId = $.RegisterForUnhandledEvent( 'MarketListingCreated',
			function()
			{
				// Refresh the market listings
				g_rgMarketGrids['mylistings'].RefreshGrid();
			}
		);

		g_nMarketClosedEventId = $.RegisterForUnhandledEvent( 'CommunityMarketClosed', OnMarketClosed );

		// Set up grids
		g_rgMarketGrids['popular'] = new CMarketGrid( 'ItemGridPopular', 'https://steamcommunity.com/market/popular' );
		g_rgMarketGrids['mylistings'] = new CMarketGrid( 'ItemGridMyListings', 'https://steamcommunity.com/market/mylistings' );
		g_rgMarketGrids['new'] = new CMarketGrid( 'ItemGridNew', 'https://steamcommunity.com/market/recent' );
		g_rgMarketGrids['history'] = new CMarketGrid( 'ItemGridHistory', 'https://steamcommunity.com/market/myhistory' );
		g_rgMarketGrids['search'] = new CMarketGrid( 'ItemGridSearch', 'https://steamcommunity.com/market/search/render' );

		g_rgMarketGrids['popular'].OnRefreshSuccess = OnPopularRefresh;
		g_rgMarketGrids['popular'].GetParams = GetParamsPopular;

		g_rgMarketGrids['mylistings'].OnRefreshSuccess = OnMyListingSuccess;
		g_rgMarketGrids['mylistings'].GetParams = GetParamsMyListings;
		g_rgMarketGrids['mylistings'].BLoadMore = function( i ) { return false; };

		g_rgMarketGrids['new'].OnRefreshSuccess = OnNewRefresh;
		g_rgMarketGrids['new'].BLoadMore = function() { return false; };
		g_rgMarketGrids['new'].GetParams = GetParamsNewListings;

		g_rgMarketGrids['history'].OnRefreshSuccess = OnHistoryRefresh;
		g_rgMarketGrids['history'].GetParams = GetParamsHistory;
		g_rgMarketGrids['history'].m_bAllowAddListing = false;

		g_rgMarketGrids['search'].OnRefreshSuccess = OnSearchRefresh;
		g_rgMarketGrids['search'].GetParams = GetParamsSearch;
		g_rgMarketGrids['search'].m_bAllowAddListing = false;
		$.RegisterKeyBind( $("#ItemGridSearch"), 'pad_x,steampad_x', function() {
			FocusSearchPanel();
		} );


		$.RegisterEventHandler( 'DropDownSelectionChanged', 'MarketSearchAppDropDown', OnSearchAppChange );

		$.RegisterKeyBind( $.GetContextPanel(), 'pad_x,steampad_x', function() {
			$("#MarketSearch").SetFocus();
		} );
		$.RegisterFooterButton( $.GetContextPanel(), 'pad_x', 'SEARCH' );

		$.RegisterEventHandler( 'TextInputFinished', 'MarketSearchText', OnSearchSubmit );

		SetupAddFundsButton();


		// Suppress the 'Search' footer on the search button in the menu row
		$.RegisterFooterButton( $('#MarketSearch'), 'pad_x', '' );

		var elSearchPanel = $('#MarketSearchPanel');
		$.RegisterKeyBind( elSearchPanel, 'pad_x,steampad_x', function() {
			OnSearchClear();
		} );
		$.RegisterFooterButton( elSearchPanel, 'pad_x', 'CLEAR ALL' );
	}
);

