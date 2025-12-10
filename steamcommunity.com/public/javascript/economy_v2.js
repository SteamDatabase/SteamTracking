var INVENTORY_PAGE_ITEMS = 16;
var INVENTORY_PAGE_WIDTH = 416;
var g_bIsTrading = false;
var g_bTradeOffer = false;	// implies g_bIsTrading
var g_bIsInventoryPage = false;
var g_bUseMarketLinks = true;

var g_bReadOnly = false;

var g_bWalletTradeUnavailable = false;
var g_bSellItemOnInventoryLoad = false;
var g_bShowTradableItemsOnly = false;

var g_bEnableDynamicSizing = false;
var g_bAllowHighDPIItemImages = false;	// true if the page is responsive, otherwise we assume page is not updated to allow high dpi images
var g_ActiveItemPopupModal = null;

var g_ActiveUser = null;
var ITEM_HOVER_DELAY = 500;

function Economy_UseResponsiveLayout()
{
	if ( !window.UseSmallScreenMode || !window.UseSmallScreenMode() )
		return false;

	// trading has a special break point
	if ( g_bIsTrading && $J(window).width() > 600 )
		return false;

	return true;
}

/*
 *		Initialization
 */

function InitInventoryPage( bHasPendingGifts, showAppId, bShowTradableItemsOnly )
{
	INVENTORY_PAGE_ITEMS = 25;	//5 x 5 grid
	INVENTORY_PAGE_WIDTH = 104 * 5;
	g_bIsInventoryPage = true;
	g_bShowTradableItemsOnly = bShowTradableItemsOnly;
	g_bAllowHighDPIItemImages = $J('html').hasClass('responsive');

		g_bUseMarketLinks = typeof g_bInChinaRealm == 'undefined' || !g_bInChinaRealm;
	
	// disable the global tooltip mutation observer.  We don't use tooltips and it has perf implications
	//	for how frequently we move items around.
	DisableTooltipMutationObserver();

	// set up the filter control
	if ( $( 'filter_control' ) )
		Filter.InitFilter( $('filter_control') );

	// decide what page we're going to start with
	// 	priority: hash params > cookie > first non-empty inventory > first inventory
	var oHashParams = ReadInventoryHash( window.location.hash );
	var oCookieParams = ReadInventoryCookie( GetCookie( 'strInventoryLastContext' ) );

	if ( window.location.hash == '#pending_gifts' && $('tabcontent_pendinggifts') )
	{
		if ( bHasPendingGifts )
			ShowPendingGifts();
		else
			ShowItemInventory( 753, 1 );
	}
	else if ( window.location.hash == '#gift_history' && g_bViewingOwnProfile )
	{
		ShowGiftHistory();
	}
	else if ( oHashParams && BValidateHashParams( oHashParams ) )
	{
		ShowItemInventory( oHashParams.appid, oHashParams.contextid, oHashParams.assetid );
	}
	else if ( showAppId != -1 )
	{
		if ( showAppId == 0 )
			showAppId = 753;

		ShowItemInventory( showAppId, 0 );
	}
	else if ( oCookieParams )
	{
		ShowItemInventory( oCookieParams.appid, oCookieParams.contextid );
		UserYou.SetDefaultInventoryId( oCookieParams );
	}
	else
	{
		var oFirstInventory = null;
		var oFirstNonEmptyInventory = null;
		for ( var appid in g_rgAppContextData )
		{
			var rgApp = g_rgAppContextData[appid];
			for ( var contextid in rgApp.rgContexts )
			{
				var rgContext = rgApp.rgContexts[contextid];
				if ( rgContext.asset_count && !oFirstNonEmptyInventory )
				{
					oFirstNonEmptyInventory = { appid: appid, contextid: contextid };
					break;
				}
				else if ( !oFirstInventory )
				{
					oFirstInventory = { appid: appid, contextid: contextid };
				}
			}
			if ( oFirstNonEmptyInventory )
				break;
		}
		var oInventoryToShow = oFirstNonEmptyInventory ? oFirstNonEmptyInventory : oFirstInventory;
		if ( oInventoryToShow )
		{
			ShowItemInventory( oInventoryToShow.appid, oInventoryToShow.contextid );
			UserYou.SetDefaultInventoryId( oInventoryToShow );
		}

	}

	InitDynamicInventoryItemAutosizing( $J('#inventories'), '.trade_item_box', true );
	$J(window).on('Responsive_SmallScreenModeToggled', function() {
		if ( window.UseSmallScreenMode && window.UseSmallScreenMode() )
		{
			$J('#inventory_pagecontrols').hide();
		}
		else
		{
			$J('#inventory_pagecontrols').show();
		}
	});

	// watch for incoming # urls
	$J(window).on('hashchange', function() {
		OnLocationChange( null, window.location.hash );
	});

	$J('.inventory_page_right').on( 'v_contentschanged', function() {
		var $element = $J(this);
		if ( !$element.is(':visible') )
			return;

		var nMinHeight = parseInt( $element.css('minHeight') ) || 0;
		if ( $element.height() > nMinHeight )
			$element.css( 'minHeight', $element.height() + 'px' );
	});
}

function ReadInventoryHash( hash )
{
	if ( hash && hash.length > 1 )
	{
		var rgHashElements = hash.substring(1).split('_');
		if ( rgHashElements.length >= 1 && rgHashElements.length < 4 )
		{
			var oLocation = { appid: parseInt( rgHashElements[0] ) };
			if ( rgHashElements.length >= 2 )
				oLocation.contextid = rgHashElements[1];
			if ( rgHashElements.length == 3 )
				oLocation.assetid = rgHashElements[2];
			return oLocation;
		}
	}
	return null;
}

function ReadInventoryCookie( cookie )
{
	if( cookie )
	{
		var rgCookieElements = cookie.split('_');
		if ( rgCookieElements.length == 2 )
		{
			var oCookieParams = {};
			oCookieParams.appid = parseInt( rgCookieElements[0] );
			oCookieParams.contextid = rgCookieElements[1];
			if ( BValidateHashParams( oCookieParams ) )
				return oCookieParams;
			else if ( g_rgAppContextData[ oCookieParams.appid ] )
			{
				// cookie wasn't valid, but we do know the app, see if there's another context we can use
				var rgContexts = g_rgAppContextData[ oCookieParams.appid ].rgContexts;
				for ( var contextid in rgContexts )
				{
					if ( rgContexts[contextid].asset_count )
					{
						oCookieParams.contextid = contextid;
						break;
					}
				}
				// one more time
				if ( BValidateHashParams( oCookieParams ) )
					return oCookieParams;
			}
		}
	}
	return null;
}

function BValidateHashParams( oHashParams )
{
	// Context ID, if present, is a 64-bit value that can contain only digits
	if ( oHashParams && oHashParams.contextid && !/^\d+$/.test( oHashParams.contextid ) )
	{
		return false;
	}

	if ( oHashParams && oHashParams.appid && g_rgAppContextData[oHashParams.appid] )
	{
		if ( oHashParams.contextid && !g_rgAppContextData[oHashParams.appid].rgContexts[oHashParams.contextid] )
			oHashParams.contextid = APPWIDE_CONTEXT;
		return true;
	}
	return false;

}

LocationHashObserver = Class.create(Abstract.TimedObserver, {
	getValue: function() {
		return window.location.hash;
	}
} );

function OnLocationChange ( elIgnored, hash )
{
	var oHashParams = ReadInventoryHash( hash );
	if ( hash == '#pending_gifts' && $('tabcontent_pendinggifts') )
	{
		ShowPendingGifts();
	}
	else if ( oHashParams && BValidateHashParams( oHashParams ) )
	{
		ShowItemInventory( oHashParams.appid, oHashParams.contextid, oHashParams.assetid );
	}
	else
	{
		var inventoryDefault = UserYou.GetDefaultInventoryId();
		ShowItemInventory( inventoryDefault.appid, inventoryDefault.contextid );
	}
}

/*
 *		Inventory
 */
/** @type {CInventory } */
var g_ActiveInventory = null;

function InventoryNextPage()
{
	g_ActiveInventory.NextPage();
}
function InventoryPreviousPage()
{
	g_ActiveInventory.PreviousPage();
}

function ShowTagFilters()
{
	if( g_ActiveInventory )
		g_ActiveInventory.ShowTags();

	$( 'filter_tag_show' ).hide();
	$( 'filter_tag_hide' ).show();

	var elTagHolder = $( 'filter_options' );
	if( elTagHolder )
	{
		elTagHolder.removeClassName( 'filter_collapsed' );
		elTagHolder.addClassName( 'filter_expanded' );
	}
}

function HideTagFilters()
{
	$$( '.econ_tag_filter_checkbox' ).each( function( elCheckbox ) {
		if( $( elCheckbox ).checked )
			$( elCheckbox ).checked = false;
	});

	if( g_ActiveInventory && g_ActiveInventory.getTagContainer() )
	{
		$( 'filter_tag_show' ).show();
		$( 'filter_tag_hide' ).hide();
		Filter.UpdateTagFiltering( {} );
	}

	var elTagHolder = $( 'filter_options' );
	if( elTagHolder )
	{
		elTagHolder.addClassName( 'filter_collapsed' );
		elTagHolder.removeClassName( 'filter_expanded' );
	}
}

var kStandardTag_Tradable =
{
	localized_tag_name: 'Tradable',
	internal_name: "tradable",
	category: "misc",
	localized_category_name: 'Misc'
};

var kStandardTag_Untradable =
{
	localized_tag_name: 'Not Tradable',
	internal_name: "untradable",
	category: "misc",
	localized_category_name: 'Misc'
};

var kStandardTag_Marketable =
{
	localized_tag_name: 'Marketable',
	internal_name: "marketable",
	category: "misc",
	localized_category_name: 'Misc'
};

var kStandardTag_Unmarketable =
{
	localized_tag_name: 'Not Marketable',
	internal_name: "unmarketable",
	category: "misc",
	localized_category_name: 'Misc'
};

	var kStandardTag_Sealed =
		{
			localized_tag_name: 'Trade Protected',
			internal_name: "sealed",
			category: "misc",
			localized_category_name: 'Misc'
		};
	
function CreateItemContextMenuButton( elItemHolder, strCompositeId, owner )
{
	// add the context menu
	var elActionMenuButton = new Element( 'a', {'id': strCompositeId + '_actionmenu_button', 'class': 'slot_actionmenu_button' } );
	elActionMenuButton.href = "javascript:void(0)";
	elItemHolder.appendChild( elActionMenuButton );

	$J(elActionMenuButton).click( function() {
		HandleTradeActionMenu( elActionMenuButton, elItemHolder.rgItem, owner );
	} );
}



function CPage( inventory, iPage )
{
	this.m_inventory = inventory;
	this.m_iPage = iPage;
	this.m_$Page = null;
	this.m_bImagesLoaded = false;
	this.m_bPageItemsCreated = false;
}

CPage.prototype.hide = function()
{
	if ( this.m_$Page )
		this.m_$Page.hide();
}

CPage.prototype.show = function()
{
	this.GetElement();
	this.m_$Page.show();
}

CPage.prototype.GetElement = function()
{
	if ( !this.m_$Page )
	{
		this.m_$Page = $J('<div/>', {'class': 'inventory_page'} ).hide();

		this.EnsurePageItemsCreated();

		this.m_inventory.AppendPage( this.m_$Page, this.m_iPage );
	}

	return this.m_$Page;
}

// returns true if new elements were added to the page
CPage.prototype.EnsurePageItemsCreated = function( bFiltering )
{
	if ( !this.m_bPageItemsCreated )
	{
		var rgItems = this.m_inventory.GetPageItems( this.m_iPage );

		for ( var i = 0; i < INVENTORY_PAGE_ITEMS; i++ )
		{
			if ( i < rgItems.length )
			{
				this.m_$Page.append( rgItems[i] );
			}
			else
			{
				this.m_$Page.append( $J('<div/>', {'class': 'itemHolder disabled'} ) );
			}
		}

		this.m_bPageItemsCreated = true;
		return true;
	}

	return false;
}

CPage.prototype.LoadPageImages = function()
{
	var $Page = this.GetElement()

	if ( !this.m_bImagesLoaded )
	{
		var bNeedToLoadMoreData = false;
		var inventory = this.m_inventory;
		$Page.children().each( function() {
			// from the Filter class...
			if ( this.filtered )
				return;

			var $Item = $J(this).children('.item');
			if ( $Item.hasClass('pendingItem') )
			{
				bNeedToLoadMoreData = true;
			}
			else
			{
				inventory.LoadItemImage( $Item );
			}
		});

		if ( bNeedToLoadMoreData )
		{
			var _this = this;
			inventory.LoadUntilConditionMet( function() {
				if ( $Page.children().children('.item.pendingItem').length == 0 )
				{
					window.setTimeout( function() { _this.m_bImagesLoaded = false; _this.LoadPageImages() }, 10 );
					return true;
				}
				else
				{
					return false;
				}
			});
		}

		this.m_bImagesLoaded = true;
	}
}

CPage.prototype.PostFilterCleanUp = function()
{
	// do nothing, this is used for responsive
}

function CSingleResponsivePage( inventory )
{
	CPage.call( this, inventory, 0 );

	this.m_$Page = $J('<div/>', {'class': 'inventory_page'} );
	this.m_bMounted = false;

	this.m_cPagesLoaded = 0;
}

// subclass the base page class
CSingleResponsivePage.prototype = Object.create( CPage.prototype );

CSingleResponsivePage.prototype.show = function()
{
	if ( !this.m_bMounted )
	{
		this.m_inventory.AppendPage( this.m_$Page, 0 );
		this.m_bMounted = true;
		this.EnsurePageItemsCreated();
		this.LoadPageImages();
	}
}

CSingleResponsivePage.prototype.hide = function()
{
	this.m_$Page.detach();
	this.m_bMounted = false;
}

CSingleResponsivePage.prototype.EnsurePageItemsCreated = function( bFiltering )
{
	if ( !this.m_bMounted )
		return false;

	var cMaxPages = Math.ceil( this.m_inventory.GetCountTotalItems() / INVENTORY_PAGE_ITEMS );

	if ( cMaxPages > this.m_cPagesLoaded )
	{
		var elLastItem = this.m_$Page[0].lastElementChild;
		if ( !bFiltering && elLastItem && elLastItem.getBoundingClientRect().top > window.innerHeight )
			return false;

		var bAddedItems = false;

		for ( var iPage = this.m_cPagesLoaded; iPage < cMaxPages; iPage++ )
		{
			var rgItems = this.m_inventory.GetPageItems( iPage );

			for ( var i = 0; i < rgItems.length; i++ )
			{
				this.m_$Page.append( rgItems[i] );
			}

			this.m_cPagesLoaded++;
			bAddedItems = true;

			if ( rgItems.length )
			{
				elLastItem = rgItems[ rgItems.length - 1 ][0];

				// if this isn't loaded yet, return.  We'll get called again when more data is ready.
				if ( $J(elLastItem).children('.pendingItem').length )
				{
					break;
				}
				else if ( !bFiltering && elLastItem && elLastItem.getBoundingClientRect().top > window.innerHeight )
					break;
			}
		}

		if ( bAddedItems )
		{
			this.m_bImagesLoaded = false;
			return true;
		}
	}

	return false;
}

CSingleResponsivePage.prototype.PostFilterCleanUp = function()
{
	if ( !this.m_bMounted )
		return;

	this.m_$Page.empty();
	this.m_cPagesLoaded = 0;
	this.EnsurePageItemsCreated();
}


APPWIDE_CONTEXT = 0;

function CInventory( owner, appid, contextid, rgContextData )
{
	this.m_owner = owner;
	this.m_steamid = owner.GetSteamId();
	this.m_appid = appid;
	this.m_contextid = contextid;

	// we reference these directly
	this.appid = appid;
	this.contextid = contextid;

	this.m_rgAssets = [];
	this.m_rgCurrencies = [];
	this.m_rgDescriptions = {};
	this.m_rgAssetProperties = {};

	this.m_strCompositeID = this.m_steamid + '_' + this.appid + '_' + this.contextid;

	this.m_$Inventory = $J('<div/>', {id: 'inventory_' + this.m_strCompositeID, 'class': 'inventory_ctn clearfix' } );
	this.m_rgItemElements = [];
	this.m_iNextEmptyItemElement = 0;

	// metadata from the context
	this.m_cItems = rgContextData.asset_count || 0;

	// tags
	this.tags = null;
	this.m_$TagContainer = $J('<div/>', {id: 'tags_' + this.m_strCompositeID, 'class': 'app_tags_container' } );

	// things we'll know after the initial load
	this.m_ulLastAssetID = 0;
	this.m_bFullyLoaded = false;
	this.m_promiseLoadCompleteInventory = null;
	this.m_bPerformedInitialLoad = false;

	/** @type {CPage[]} */
	this.m_rgPages = [];

	this.m_SingleResponsivePage = new CSingleResponsivePage( this );

	this.m_cPages = 0;
	this.m_iCurrentPage = 0;
	this.m_bNeedsRepagination = true;
	this.m_bNeedsItemHolders = false;
	this.m_fnQueuedPageTransition = null;

	this.m_tsLastError = 0;
	this.m_$ErrorDisplay = null;

	this.m_bNeedsReload = false;

	// appwide parent inventory, if viewing "all {gamename} items"
	/** @type {CAppwideInventory} */
	this.m_parentInventory = null;

	this.m_bActive = false;

	this.m_ActivePromise = null;
	this.m_rgOnItemsLoadedCallbacks = [];
}

CInventory.prototype.SetActivePromise = function( promise )
{
	// hopefully there is not one already?
	this.m_ActivePromise = promise;
	var _this = this;
	promise.always( function() { _this.m_ActivePromise = null; } );

	return promise;
};

CInventory.prototype.BIsPendingInventory = function()
{
	// lie
	return false;
};

CInventory.prototype.BIsEmptyInventory = function()
{
	return this.m_cItems == 0;
};

CInventory.prototype.BIsFullyLoaded = function()
{
	return this.m_bFullyLoaded;
};

CInventory.prototype.RetryLoad = function()
{
	this.m_tsLastError = 0;
	return this.LoadMoreAssets();
};

CInventory.prototype.destroy = function()
{
	$J(window).off('scroll.LazyLoad_' + this.m_strCompositeID );
	this.m_$Inventory.remove();
	this.m_$TagContainer.remove();
};

CInventory.prototype.getInventoryElement = function()
{
	return this.m_$Inventory[0];
};

CInventory.prototype.getTagContainer = function()
{
	return this.m_$TagContainer[0];
};

CInventory.prototype.GetInventoryLoadURL = function()
{
	return 'https://steamcommunity.com/inventory/' + this.m_steamid + '/' + this.m_appid + '/' + this.m_contextid;
};

CInventory.prototype.hide = function() {
	$J(window).off('scroll.LazyLoad_' + this.m_strCompositeID );
	this.m_$Inventory.hide();
	this.m_$TagContainer.hide();

	if ( this.m_$ErrorDisplay )
		this.m_$ErrorDisplay.hide();

	if ( this.m_$ReloadDisplay )
		this.m_$ReloadDisplay.hide();

	this.m_bActive = false;
};

CInventory.prototype.show = function()
{
	if ( !this.m_bPerformedInitialLoad )
		this.PerformInitialLoad();

	this.m_$Inventory.show();
	this.m_$TagContainer.show();
	this.m_bActive = true;
	this.ShowPageControlsIfNeeded();

	if ( this.m_tsLastError && this.m_$ErrorDisplay )
		this.m_$ErrorDisplay.show();

	if ( this.m_bNeedsReload )
		this.ShowInventoryReloadMessage();

	var _this = this;
};

CInventory.prototype.GetCountTotalItems = function()
{
	return this.m_cItems;
}

CInventory.prototype.AddInventoryData = function( data )
{
	this.m_bFullyLoaded = !data.more_items;
	this.m_ulLastAssetID = data.last_assetid;

	if ( data.descriptions )
	{
		for ( var i = 0; i < data.descriptions.length; i++ )
		{
			var description = data.descriptions[i];
			var key = description.classid;
			if ( description.instanceid && description.instanceid != '0' )
				key += '_' + description.instanceid;

			if ( !this.m_rgDescriptions[ key ] )
			{
				if ( !description.tags )
					description.tags = [];

									if ( description.sealed )
						description.tags.push( kStandardTag_Sealed );
									if ( !g_bIsTrading && !g_bShowTradableItemsOnly )
				{
					if ( description.tradable )
						description.tags.push( kStandardTag_Tradable );
					else
						description.tags.push( kStandardTag_Untradable );
				}

				if ( g_bUseMarketLinks )
				{
					if ( description.marketable )
						description.tags.push( kStandardTag_Marketable );
					else
						description.tags.push( kStandardTag_Unmarketable );
				}

				description.use_count = 0;

				this.m_rgDescriptions[key] = description;
			}
		}
	}

	if ( data.asset_properties )
	{
		for ( var i = 0; i < data.asset_properties.length; i++ )
		{
			var asset_properties = data.asset_properties[i];
			var key = asset_properties.assetid;

			if ( !this.m_rgAssetProperties[ key ] )
			{
				this.m_rgAssetProperties[ key ] = asset_properties.asset_properties;
			}
		}
	}

	// make sure we have enough element containers for the total number of items
	if ( data.total_inventory_count != this.m_cItems )
	{
		this.m_cItems = data.total_inventory_count;
		this.EnsureItemHoldersCreated();
	}

	if ( data.assets )
	{
		for ( var i = 0; i < data.assets.length; i++ )
		{
			var asset = data.assets[i];

			// add some fields we use in javascript
			asset.is_currency = !!asset.currencyid;

			var bIsStackable = asset.is_currency || ( asset.amount && asset.amount > 1 );

			if ( bIsStackable )
			{
				asset.original_amount = asset.amount;
				asset.is_stackable = true;
			}

			var strDescriptionKey = asset.classid;
			if ( asset.instanceid && asset.instanceid != '0' )
				strDescriptionKey += '_' + asset.instanceid;

			var description = this.m_rgDescriptions[ strDescriptionKey ];

			// Skip non-marketable items if we're showing the market sell dialog
			if ( typeof g_bIsInMarketplace != 'undefined' && g_bIsInMarketplace )
			{
				if ( typeof description.marketable == 'undefined' || !description.marketable )
					continue;
			}

			asset.description = description;
			asset.description.use_count++;

			if ( this.m_rgAssetProperties[ asset.assetid ] )
			{
				asset.asset_properties = this.m_rgAssetProperties[ asset.assetid ];
			}

			if ( asset.is_currency )
				this.m_rgCurrencies[ asset.currencyid ] = asset;
			else
				this.m_rgAssets[ asset.assetid ] = asset;

			var $ItemHolder = this.GetItemElement( this.m_iNextEmptyItemElement++ );
			var $Item = $ItemHolder.children( '.item' );

			this.BuildItemElement( asset, $Item );


			$ItemHolder[0].rgItem = asset;

			if ( g_bTradeOffer && this.m_owner == UserThem )
			{
				asset.is_their_item = true;
			}

			asset.element = $Item[0];
			asset.homeElement = $ItemHolder[0];


			if ( g_bIsTrading )
			{
				CreateItemContextMenuButton( $ItemHolder[0], this.m_strCompositeID, this.m_owner );
				if ( !g_bReadOnly )
				{
					if ( asset.is_stackable )
					{
						MakeCurrencyDraggable( $Item[0] );
					}
					else
					{
						MakeItemDraggable( $Item[0] );
					}
				}
			}
		}
	}

	// We may have found out there are fewer items than expected, especially if
	// we're filtering to marketable items only. Fix up the number of pages in
	// that case.
	if ( this.m_bFullyLoaded && this.m_cItems != this.m_iNextEmptyItemElement )
	{
		this.m_cItems = this.m_iNextEmptyItemElement;
		this.m_bNeedsRepagination = true;
		this.EnsureItemHoldersCreated();
	}

	if ( this.m_bNeedsRepagination )
	{
		if ( this.m_bActive )
		{
			this.LayoutPages();
			this.show();
		}
		else if ( g_ActiveInventory && g_ActiveInventory.m_appid == this.m_appid && g_ActiveInventory.contextid == APPWIDE_CONTEXT )
		{
			g_ActiveInventory.m_bNeedsRepagination = true;
			g_ActiveInventory.LayoutPages();
		}
	}
};

CInventory.prototype.CreateEmptyItemHolder = function( iPage )
{
	var $ret = $J('<div class="itemHolder"><div class="item pendingItem app' + this.m_appid + ' context' + this.m_contextid + '"><img src="https://community.fastly.steamstatic.com/public/images/trans.gif"></div></div>');
	$ret.data('iPage', iPage );

	return $ret;
}

CInventory.prototype.EnsureItemHoldersCreated = function()
{
	if ( this.m_bNeedsItemHolders && this.m_rgItemElements.length )
	{
		for ( var iItem = 0; iItem < this.m_rgItemElements.length; iItem++ )
		{
			if ( this.m_rgItemElements[iItem] == null )
			{
				this.m_rgItemElements[iItem] = this.CreateEmptyItemHolder( Math.floor( iItem/INVENTORY_PAGE_ITEMS ) );
			}
		}

		this.m_bNeedsItemHolders = false;
	}

	if ( this.m_rgItemElements.length != this.m_cItems )
	{
		this.m_bNeedsRepagination = true;

		if ( this.m_rgItemElements.length < this.m_cItems )
		{
			while ( this.m_rgItemElements.length < this.m_cItems && (this.m_rgItemElements.length < INVENTORY_PAGE_ITEMS * 3 ))//|| g_bEnableDynamicSizing) )
			{
				var $ItemHolder = this.CreateEmptyItemHolder( Math.floor( this.m_rgItemElements.length/INVENTORY_PAGE_ITEMS ) );
				this.m_rgItemElements.push( $ItemHolder );
			}

			// the rest are created lazilly
			while ( this.m_rgItemElements.length < this.m_cItems )
			{
				this.m_rgItemElements.push( null );
			}
		}
		else
		{
			// count went down - unexpected but just handle it.  it shouldn't be possible to load past the item count, so
			//	these should be empty elements we're removing
			this.m_rgItemElements = this.m_rgItemElements.slice( 0, this.m_cItems );
		}
	}
};

// called when readonly mode is disabled
CInventory.prototype.MakeElementsDraggable = function()
{
	for ( var currencyid in this.m_rgCurrencies )
	{
		if ( !this.m_rgCurrencies.hasOwnProperty( currencyid ) )
		{
			continue;
		}

		var asset = this.m_rgCurrencies[currencyid];
		MakeCurrencyDraggable( asset.element );
	}
	for ( var assetid in this.m_rgAssets )
	{
		if ( !this.m_rgAssets.hasOwnProperty( assetid ) )
		{
			continue;
		}

		var asset = this.m_rgAssets[assetid];
		if ( asset.is_stackable )
		{
			MakeCurrencyDraggable( asset.element );
		}
		else
		{
			MakeItemDraggable( asset.element );
		}
	}
};

CInventory.prototype.PerformInitialLoad = function( count )
{
	if ( this.m_bPerformedInitialLoad )
		return $J.Deferred().resolve();
	else
		return this.LoadMoreAssets( count );
};

CInventory.prototype.AddOnItemsLoadedCallback = function( fnCallback )
{
	if ( this.m_rgOnItemsLoadedCallbacks.indexOf( fnCallback ) === -1 )
		this.m_rgOnItemsLoadedCallbacks.push( fnCallback );
}

CInventory.prototype.RemoveOnItemsLoadedCallback = function( fnCallback )
{
	var iIndex = this.m_rgOnItemsLoadedCallbacks.indexOf( fnCallback );
	if ( iIndex !== -1 )
		this.m_rgOnItemsLoadedCallbacks.splice( iIndex, 1 );
}

CInventory.prototype.LoadMoreAssets = function( count )
{
	if ( this.m_ActivePromise )
		return this.m_ActivePromise;

	if ( this.m_bFullyLoaded )
		return $J.Deferred().resolve().promise();

	// we won't re-request for 5 seconds after a failure
	if ( this.m_tsLastError && $J.now() - this.m_tsLastError < 5000 )
		return $J.Deferred().reject().promise();

	this.m_$Inventory.addClass('loading');
	var _this = this;

	if ( !count )
		count = this.m_bPerformedInitialLoad ? 2000 : 75;

	var params = {
		'l': 'english',
		'count': count
	};

	if ( typeof(g_bIsInMarketplace) != 'undefined' && g_bIsInMarketplace )
		params.market = 1;

	if ( window.g_bReactRenderedItemDescriptions && g_bReactRenderedItemDescriptions )
	{
		params.preserve_bbcode = 1;
		params.raw_asset_properties = 1;
	}

	if ( this.m_ulLastAssetID )
		params.start_assetid = this.m_ulLastAssetID;

	this.m_owner.ShowLoadingIndicator();

	return this.SetActivePromise( $J.get( this.GetInventoryLoadURL(), params
	).done( function( data ) {
		_this.m_bPerformedInitialLoad = true;
		_this.m_$Inventory.removeClass('loading');
		_this.AddInventoryData( data );
		_this.m_tsLastError = 0;
		_this.HideInventoryLoadError();
		_this.m_SingleResponsivePage.EnsurePageItemsCreated();

		if ( _this.m_parentInventory )
			_this.m_parentInventory.m_SingleResponsivePage.EnsurePageItemsCreated();

	}).fail( function() {
		_this.m_tsLastError = $J.now();
		_this.ShowInventoryLoadError();
	}).always( function() {
		_this.m_owner.HideLoadingIndicator();
	}) ).done( function() {
		// intentionally done outside SetActivePromise so active promise will bset.
		for ( var i = 0; i < _this.m_rgOnItemsLoadedCallbacks.length; i++ )
			_this.m_rgOnItemsLoadedCallbacks[i]();
	}).promise();
};

CInventory.prototype.ShowInventoryLoadError = function()
{
	if ( !this.m_$ErrorDisplay )
	{
		/*
				*/

		this.m_$ErrorDisplay = $J('<div/>').html( "\t\t\t<div class=\"inventory_load_error\">\n\t\t\t\t<div class=\"inventory_load_error_header\">\n\t\t\t\t\t<img src=\"https:\/\/community.fastly.steamstatic.com\/public\/images\/economy\/market\/icon_alertlistings.png\" class=\"load_error_icon\">\n\t\t\t\t\t<div class=\"message\">This inventory is not available at this time.  Please try again later.<\/div>\n\t\t\t\t\t<div class=\"btnv6_blue_hoverfade btn_small retry_load_btn\">\n\t\t\t\t\t\t<span>Try Again<\/span>\n\t\t\t\t\t<\/div>\n\t\t\t\t\t<span class=\"inventory_loading_indicator\">\n\t\t\t\t\t\t<img src=\"https:\/\/community.fastly.steamstatic.com\/public\/images\/login\/throbber.gif\">\n\t\t\t\t\t<\/span>\n\t\t\t\t<\/div>\n\t\t\t<\/div>\n\t\t" ).hide();

		var _this = this;
		this.m_$ErrorDisplay.find( '.retry_load_btn').click( function() { _this.RetryLoad(); } );

		this.m_owner.GetInventoryLoadDisplayElement().append( this.m_$ErrorDisplay );
	}

	if ( this.m_bActive )
		this.m_$ErrorDisplay.slideDown();

	if ( this.m_parentInventory )
		this.m_parentInventory.ShowInventoryLoadError();
};



CInventory.prototype.HideInventoryLoadError = function()
{
	if ( this.m_$ErrorDisplay && this.m_$ErrorDisplay.is(':visible') )
		this.m_$ErrorDisplay.slideUp();

	if ( this.m_parentInventory )
		this.m_parentInventory.HideInventoryLoadError();
};


CInventory.prototype.ShowInventoryReloadMessage = function()
{
	this.m_bNeedsReload = true;

	if ( !this.m_$ReloadDisplay )
	{
		/*
				*/

		this.m_$ReloadDisplay = $J('<div/>').html( "\t\t\t<div class=\"inventory_load_error\">\n\t\t\t\t<div class=\"inventory_load_error_header\">\n\t\t\t\t\t<img src=\"https:\/\/community.fastly.steamstatic.com\/public\/images\/economy\/market\/icon_alertlistings.png\" class=\"load_error_icon\">\n\t\t\t\t\t <div class=\"message\">Items in this inventory may be out of date and displaying old data.  For performance reasons, automatic refresh has been disabled.<\/div>\n\t\t\t\t\t<div class=\"btnv6_blue_hoverfade btn_small reload_btn\">\n\t\t\t\t\t\t<span>Refresh<\/span>\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/div>\n\t\t\t<\/div>\n\t\t" ).hide();

		var _this = this;
		this.m_$ReloadDisplay.find( '.reload_btn').click( function() { _this.ReloadIfNeeded() } );

		this.m_owner.GetInventoryLoadDisplayElement().append( this.m_$ReloadDisplay );
	}

	if ( this.m_bActive )
		this.m_$ReloadDisplay.slideDown();

	if ( this.m_parentInventory )
		this.m_parentInventory.ShowInventoryReloadMessage();
};

CInventory.prototype.ReloadIfNeeded = function()
{
	if ( this.m_bNeedsReload )
		this.m_owner.ReloadInventory( this.m_appid, this.m_contextid );
}

CInventory.prototype.LoadUntilConditionMet = function( fnCondition, count )
{
	var deferred = new $J.Deferred();
	this.LoadUntilConditionMetInternal( fnCondition, count, deferred );
	return deferred.promise();
};

CInventory.prototype.LoadUntilConditionMetInternal = function( fnCondition, count, deferred )
{
	if ( !fnCondition() )
	{
		// keep queueing more loads until it evaluates to true
		var _this = this;

		if ( this.m_bFullyLoaded )
		{
			deferred.reject();	// never happening
		}
		else
		{
			this.LoadMoreAssets( count ).done( function() {
				// will check immediately
				_this.LoadUntilConditionMetInternal( fnCondition, count, deferred );
			}).fail( function() {
				deferred.reject();
			});
		}
	}
	else
	{
		deferred.resolve();
	}
};

CInventory.prototype.LoadCompleteInventory = function()
{
	if ( this.m_bFullyLoaded )
		return $J.Deferred().resolve();

	if ( !this.m_promiseLoadCompleteInventory )
	{
		var _this = this;
				this.m_promiseLoadCompleteInventory = this.LoadUntilConditionMet( function() { return _this.m_bFullyLoaded; }, 2500 /* batch size */ );
	}

	return this.m_promiseLoadCompleteInventory;
};

CInventory.prototype.BuildItemElement = function( asset, $Item )
{
	var description = asset.description || {};

	var assetid = asset.is_currency ? 'c' + asset.currencyid : asset.assetid;

	$Item.attr('id', this.appid + '_' + this.contextid + '_' + assetid ).removeClass('pendingItem');

	if ( description.name_color )
		$Item.css( 'borderColor', '#' + description.name_color );
	if ( description.background_color )
		$Item.css( 'backgroundColor', '#' + description.background_color );

	// compat
	$Item[0].rgItem = asset;

	var strImageURL;

	if ( asset.is_stackable )
		strImageURL = ImageURL( description.icon_url, '96f', '58f', true );
	else
		strImageURL = ImageURL( description.icon_url, '96f', '96f', true );

	if ( $Item.data('imageLoaded') )
		$Item.children( 'img' ).attr( 'src', strImageURL );
	else
		$Item.data( 'lazyLoadImage', strImageURL );

	if ( asset.is_stackable )
	{
		var $Amount = $J( '<div/>', { 'class': 'item_currency_amount' } );
		if ( description.name_color )
			$Amount.css( 'color', '#' + description.name_color );

		$Amount.text( v_numberformat( asset.amount ) );

		var $CurrencyName = $J( '<div/>', { 'class': 'item_currency_name' } );
		if ( description.name_color )
			$CurrencyName.css( 'color', '#' + description.name_color );

		$CurrencyName.text( asset.is_currency ? description.name : '' );

		$Item.append( $Amount, $CurrencyName );
	}

	if ( g_bIsTrading )
	{
		// TODO
		Event.observe( $Item[0], 'mouseover', MouseOverItem.bindAsEventListener( null, this.m_owner, $Item[0], asset ) );
		Event.observe( $Item[0], 'mouseout', MouseOutItem.bindAsEventListener( null, this.m_owner, $Item[0], asset ) );
	}

	var url = ( g_bIsTrading ? this.GetInventoryPageURL() : '' ) + '#' + this.appid + '_' + this.contextid + '_' + asset.assetid;
	var $Link = $J( '<a/>', { href: url, 'class': 'inventory_item_link' } );
	$Item.append( $Link );
	this.BindMouseEvents( $Link, $Item, asset );

			if ( description.sealed )
		{
			$Item.addClass('provisional_item');

			var $SealedItemBadge = $J( '<div />', {'class': 'provisional_item_badge', 'data-tooltip-text': 'Trade protected items cannot be modified, consumed, or transferred.' } );
			$Item.append( $SealedItemBadge );

			// InitInventoryPage runs DisableTooltipMutationObserver, so bind the tooltip manually
			BindTooltips( $Item, { tooltipCSSClass: 'community_tooltip'} );
		}
		
	if ( description.fraudwarnings )
	{
		var $FraudWarningIcon = $J( '<div/>', {'class': 'slot_app_fraudwarning' } );
		$Item.append( $FraudWarningIcon );
	}

	return $Item;
};

CInventory.prototype.GetInventoryPageURL = function()
{
	return this.m_owner.GetProfileURL() + '/inventory/';
};

CInventory.prototype.BindMouseEvents = function( $Link, $Item, asset )
{
	// on trade UI, we only do "select item" for touches
	var _this = this;
	$Link.on( 'click', function( e ) {
		e.preventDefault();
		_this.SelectItem( e, $Item, asset, true );
		if ( asset.in_touch )
		{
			$Item.parents('.itemHolder').removeClass('in_touch');
			delete asset.in_touch;
		}
	} );

	if ( g_bIsTrading )
	{
		$Link.on( 'touchstart', function() {
			asset.in_touch = true;
			$Item.parents('.itemHolder').addClass('in_touch');
		} );
	}
};

CInventory.prototype.ShowTags = function()
{
	var _this = this;

	if ( !this.m_bFullyLoaded )
	{
		this.m_$TagContainer.html( '<div class="inventory_loading_indicator "><img src="https://community.fastly.steamstatic.com/public/images/login/throbber.gif"></div>');
	}

	this.LoadCompleteInventory().done( function() {
		if ( !_this.tags )
			_this.ReadTags();

		_this.BuildInventoryTagFilters();
	});
};

CInventory.prototype.ReadTags = function()
{
	this.tags = {};

	for ( var key in this.m_rgDescriptions )
	{
		var description = this.m_rgDescriptions[key];
		if ( !description.use_count )
			continue;

		for ( var tagid in description.tags )
		{
			var rgTag = description.tags[tagid];
			var rgCategory = this.tags[ rgTag.category ];

			if( !rgCategory )
			{
				if( typeof rgTag.category != "string" )
					continue;

				rgCategory = this.tags[ rgTag.category ] = { "name": rgTag.localized_category_name ? rgTag.localized_category_name : rgTag.category, "tags": {} };
			}

			if( rgCategory.tags[ rgTag.internal_name ] )
			{
				rgCategory.tags[ rgTag.internal_name ].count += description.use_count;
			}
			else
			{
				var rgNewTag = { "name": rgTag.localized_tag_name, "count": description.use_count };
				if( rgTag.color )
					rgNewTag.color = rgTag.color;
				rgCategory.tags[ rgTag.internal_name ] = rgNewTag;
			}
		}
	}
};


CInventory.prototype.BuildInventoryTagFilters = function()
{
	if( !this.m_$TagContainer.length )
		return;

	this.m_$TagContainer.children().detach();

	for( var sCategoryName in this.tags )
	{
		if( typeof sCategoryName != "string" )
			continue;
		var rgCategory = this.tags[ sCategoryName ];
		var elTagCategory = new Element( 'div', { 'class' : 'econ_tag_filter_category' } );
		elTagCategory.localized_category_name = sCategoryName;

		var elTagCategoryLabel = new Element( 'div', { 'class' : 'econ_tag_filter_category_label' } );
		$J(elTagCategoryLabel).text( rgCategory.name );
		elTagCategory.appendChild( elTagCategoryLabel );

		var rgCategoryTags = [];
		//quickly determine the total number of valid tags
		var cTagsTotal = 0;
		for ( var sInternalName in rgCategory.tags )
		{
			if ( typeof sInternalName == 'string' )
				cTagsTotal++;
		}

		var elTagCtn = elTagCategory;

		var cTagsDisplayed = 0;
		for( var sInternalName in rgCategory.tags )
		{
			if( !rgCategory.tags.hasOwnProperty( sInternalName ) )
				continue;

			var rgTag = rgCategory.tags[ sInternalName ];
			rgTag.internal_name = sInternalName;
			rgCategoryTags.push( rgTag );
		}

		rgCategoryTags.sort( function( a, b ) {
			var aName = a.name.toUpperCase();
			var bName = b.name.toUpperCase();
			if ( aName < bName ) return -1;
			if ( aName > bName ) return 1;
			return 0;
		} );

		for( var index in rgCategoryTags )
		{
			if( !rgCategoryTags.hasOwnProperty( index ) )
				continue;

			var rgTag = rgCategoryTags[ index ];
			var sInternalName = rgTag.internal_name;

			var elTagDiv = new Element( 'div', { 'class' : 'econ_tag_filter_container' } );

			var sCheckboxName =  'tag_filter_' + ( this.owner && this.owner != UserYou ? 'them_' : '' );
			sCheckboxName += this.appid + '_' + this.contextid + '_' + sCategoryName + '_' + sInternalName;
			var elTagFilter = new Element( 'input', { 'class' : 'econ_tag_filter_checkbox', 'type' : 'checkbox', 'name' : sCheckboxName, 'id' : sCheckboxName, 'tag_name' : sInternalName } );
			var elTagLabel = new Element( 'label', { 'class' : 'econ_tag_filter_label', 'for' : sCheckboxName } );

			if( rgTag.color )
			{
				var elTagName = new Element( 'span' );
				$J(elTagName).text( rgTag.name );
				elTagName.style.color = "#" + rgTag.color;
				elTagLabel.appendChild( elTagName );
			}
			else
			{
				$J(elTagLabel).text( rgTag.name );
			}

			var elItemCount = new Element( 'span', { 'class' : 'econ_tag_count' } );
			elItemCount.update( " (" + rgTag.count + ")" );
			elTagLabel.appendChild( elItemCount );

			$( elTagFilter ).observe( 'change', this.TagCheckboxChanged.bind( this ) );

			elTagDiv.appendChild( elTagFilter );
			elTagDiv.appendChild( elTagLabel );

			if ( ++cTagsDisplayed == 5 && cTagsTotal > 7 )
			{
				var elExpandTags = new Element( 'div',{'class': 'econ_tag_filter_collapsable_tags_showlink whiteLink' } );
				var elCollapsedTagCtn = new Element( 'div', {'class': 'econ_tag_filter_collapsable_tags', style: 'display: none;' } );
				elExpandTags.update( '+ Show more' );
				Event.observe( elExpandTags, 'click', (function( elExpandLink, elDivToExpand ) { elExpandLink.hide(); new Effect.BlindDown( elDivToExpand, {duration: 0.25} ); } ).bind( null, elExpandTags, elCollapsedTagCtn ) );

				elTagCtn.appendChild( elExpandTags );
				elTagCtn.appendChild( elCollapsedTagCtn );

				elTagCtn = elCollapsedTagCtn;
			}

			elTagCtn.appendChild( elTagDiv );
		}

		this.m_$TagContainer.append( elTagCategory );
	}

	// add a div to clear the floating
	this.m_$TagContainer.append( new Element( 'div', { "style" : "clear: left;" } ) );
};


CInventory.prototype.TagCheckboxChanged = function( )
{
	// build an array of the selected tags
	var rgCategories = {};

	this.m_$TagContainer.find('.econ_tag_filter_category').each(function(){
		var rgTags = [];
		var elCategory = this;

		$( elCategory ).select( '.econ_tag_filter_checkbox' ).each( function( elCheckbox ) {
			if( $(elCheckbox).checked )
			{
				var elParent = $(elCheckbox).up();
				elParent.addClassName( "filtered" );
				rgTags.push($(elCheckbox).readAttribute( 'tag_name' ) );
			}
			else
			{
				$(elCheckbox).up().removeClassName( "filtered" );
			}
		});

		if( rgTags.length )
			rgCategories[ elCategory.localized_category_name ] = rgTags;
	});

	Filter.UpdateTagFiltering( rgCategories );
};

CInventory.prototype.GetPageItems = function( iPage )
{
	var iStart = iPage * INVENTORY_PAGE_ITEMS;
	var iEnd = iStart + INVENTORY_PAGE_ITEMS;
	var rgItemHolders = [];
	for ( var iItem = iStart; iItem < this.m_rgItemElements.length && iItem < iEnd; iItem++ )
	{
		var $ItemHolder = this.GetItemElement( iItem );
		rgItemHolders.push( $ItemHolder );
	}

	return rgItemHolders;
}

CInventory.prototype.AppendPage = function( $Page, iPage )
{
	var elInventory = this.m_$Inventory[0];
	var rgChildElements = elInventory.childElements();

	$Page[0].iPage = iPage;

	for ( var i = rgChildElements.length - 1; i >= 0; i-- )
	{
		if ( rgChildElements[i].iPage < iPage )
		{
			elInventory.insertBefore( $Page[0], i + 1 < rgChildElements.length ? rgChildElements[ i + 1 ] : null );
			return;
		}
	}

	// insert at the start
	elInventory.insertBefore( $Page[0], rgChildElements.length ? rgChildElements[0] : null );
}

CInventory.prototype.SetActivePage = function( iPage )
{
	if ( iPage >= this.m_cPages )
		return;

	if ( this.m_iCurrentPage >= 0 && this.m_iCurrentPage < this.m_cPages )
	{
		this.m_rgPages[this.m_iCurrentPage].hide();
	}

	this.m_rgPages[iPage].show();
	this.m_iCurrentPage = iPage;
	this.UpdatePageCounts();

	this.PreloadPageImages( this.m_iCurrentPage );
};

CInventory.prototype.OnPageChangeTo = function( iPage )
{
	if ( iPage == this.m_cPages - 1 && this.bFilterApplied && !this.BIsFullyLoaded() )
	{
		// we tabbed to the last page, and there's a filter applied.  Keep loading more stuff.
		this.LoadMoreAssets( Filter.FILTER_ASSETS_PER_LOAD );
	}
};

CInventory.prototype.PrepPageTransition = function( nPageWidth, iCurPage, iNextPage )
{
	$J('#inventories').css( 'overflow', 'hidden' );
	this.m_$Inventory.css( 'width', ( 2 * nPageWidth ) + 'px' );

	this.m_rgPages[iCurPage].GetElement().add( this.m_rgPages[iNextPage].GetElement() ).css('width', nPageWidth + 'px' );
	this.m_rgPages[iNextPage].show();
	this.m_rgPages[iNextPage].LoadPageImages();
	this.OnPageChangeTo( iNextPage );

	this.m_$Inventory.addClass('paging_transition');
};

CInventory.prototype.NextPage = function()
{
	if ( this.m_iCurrentPage < this.m_cPages - 1 && !this.m_$Inventory.hasClass('paging_transition') )
	{
		var nPageWidth = this.m_$Inventory.children('.inventory_page:first' ).width();

		var iCurPage = this.m_iCurrentPage;
		var iNextPage = iCurPage + 1;

		this.PrepPageTransition( nPageWidth, iCurPage, iNextPage );
		this.m_$Inventory.css( 'left', '0' );

		var _this = this;
		this.m_$Inventory.animate( {left: -nPageWidth}, 250, null, function() {
			_this.FinishPageTransition( iCurPage, iNextPage );
		} );
	}
	else if ( this.m_$Inventory.hasClass('paging_transition' ) )
	{
		var _this = this;
		this.m_fnQueuedPageTransition = function() { _this.NextPage(); };
	}
};

CInventory.prototype.PreviousPage = function()
{
	if ( this.m_iCurrentPage > 0 && !this.m_$Inventory.hasClass('paging_transition') )
	{
		var nPageWidth = this.m_$Inventory.children('.inventory_page:first' ).width();

		var iCurPage = this.m_iCurrentPage;
		var iNextPage = iCurPage - 1;

		this.PrepPageTransition( nPageWidth, iCurPage, iNextPage );
		this.m_$Inventory.css( 'left', '-' + nPageWidth + 'px' );

		var _this = this;
		this.m_$Inventory.animate( {left: 0}, 250, null, function() {
			_this.FinishPageTransition( iCurPage, iNextPage );
		} );
	}
	else if ( this.m_$Inventory.hasClass('paging_transition' ) )
	{
		var _this = this;
		this.m_fnQueuedPageTransition = function() { _this.PreviousPage(); };
	}
};

CInventory.prototype.FinishPageTransition = function( iLastPage, iCurPage )
{
	this.m_iCurrentPage = iCurPage;
	$J('#inventories').css( 'overflow', '' );
	this.m_rgPages[iLastPage].hide();
	this.m_$Inventory.css( 'left', '0' ).css( 'width', '' );
	this.m_rgPages[iLastPage].GetElement().add( this.m_rgPages[iCurPage].GetElement() ).css('width', '' );
	this.m_$Inventory.removeClass('paging_transition');

	this.UpdatePageCounts();
	this.PreloadPageImages( this.m_iCurrentPage );

	if ( this.m_fnQueuedPageTransition )
	{
		this.m_fnQueuedPageTransition();
		this.m_fnQueuedPageTransition = null;
	}
};

CInventory.prototype.PreloadPageImages = function( iPage )
{
	// this page
	this.m_rgPages[ iPage ].LoadPageImages();

	// next page
	if ( iPage < this.m_cPages - 1 )
		this.m_rgPages[ iPage + 1 ].LoadPageImages();

	// previous page
	if ( iPage > 0 )
		this.m_rgPages[ iPage - 1 ].LoadPageImages();
};

CInventory.prototype.UpdatePageCounts = function()
{
	$J('#pagecontrol_cur').text( v_numberformat( this.m_iCurrentPage + 1 ) );
	$J('#pagecontrol_max').text( v_numberformat( this.m_cPages ) );

	if ( this.m_iCurrentPage > 0 )
		$J('#pagebtn_previous').removeClass( 'disabled' );
	else
		$J('#pagebtn_previous').addClass( 'disabled' );

	if ( this.m_iCurrentPage < this.m_cPages - 1 )
		$J('#pagebtn_next').removeClass( 'disabled' );
	else
		$J('#pagebtn_next').addClass( 'disabled' );
};

CInventory.prototype.LayoutPages = function()
{
	this.EnsureItemHoldersCreated();

	this.m_$Inventory.children().detach();

	if ( g_bEnableDynamicSizing )
	{
		this.m_SingleResponsivePage.hide();
		this.m_rgPages = [ this.m_SingleResponsivePage ];
	}
	else
	{
		this.m_rgPages = [];

		var iPage = 0;
		this.m_rgPages.push( new CPage( this, iPage++ ) );
		var cPageItemsRemaining = INVENTORY_PAGE_ITEMS;

		for ( var iItem = 0; iItem < this.m_rgItemElements.length; iItem++ )
		{
			var $ItemHolder = this.m_rgItemElements[iItem];
			if ( cPageItemsRemaining-- <= 0 )
			{
				this.m_rgPages.push( new CPage( this, iPage++ ) );
				cPageItemsRemaining = INVENTORY_PAGE_ITEMS - 1;
			}
		}
	}

	this.m_cPages = this.m_rgPages.length;

	this.m_bNeedsRepagination = false;
	this.SetActivePage( this.m_iCurrentPage );
};

CInventory.prototype.MakeActive = function()
{
	this.m_bActive = true;

	if ( !this.m_bPerformedInitialLoad )
		this.PerformInitialLoad();

	if ( this.m_bNeedsRepagination )
		this.LayoutPages();

	this.SetActivePage( this.m_iCurrentPage );

	this.show();
};

CInventory.prototype.ShowPageControlsIfNeeded = function()
{
	var $Controls = $J('#inventory_pagecontrols');
	if ( this.m_cPages <= 1 )
		$Controls.css( 'visibility', 'hidden' );
	else
		$Controls.css( 'visibility', '' );
};

CInventory.prototype.LocateAsset = function( assetid )
{
	var deferred = $J.Deferred();

	var asset = this.m_rgAssets[assetid];

	if ( asset )
	{
		deferred.resolve( asset );
	}
	else
	{
		var _this = this;
		this.LoadUntilConditionMet( function() { return _this.m_rgAssets[assetid] != null; } )
			.done( function() { deferred.resolve( _this.m_rgAssets[assetid] ); } )
			.fail( function() { deferred.reject(); } );

	}

	return deferred.promise();
};

// always returns asset or null, no promise.  Use if you know the asset is loaded.
CInventory.prototype.GetLoadedAsset = function ( assetid )
{
	return this.m_rgAssets[assetid] || null;
};

CInventory.prototype.GetItemElement = function( i )
{
	var $ItemElement = this.m_rgItemElements[i];
	if ( $ItemElement != null )
		return $ItemElement;

	$ItemElement = this.CreateEmptyItemHolder( Math.floor( i/INVENTORY_PAGE_ITEMS ) );
	$ItemElement.data( 'contextid', this.m_contextid );
	this.m_rgItemElements[i] = $ItemElement;
	return $ItemElement;
};

CInventory.prototype.FindFirstAsset = function()
{
	var deferred = $J.Deferred();
	var _this = this;
	this.PerformInitialLoad().done( function() {
		for ( var i =0; i < _this.m_rgItemElements.length; i++ )
		{
			var $ItemHolder = _this.m_rgItemElements[i];

			if ( $ItemHolder == null || $ItemHolder.data('filtered') )
				continue;

			var $Item = $ItemHolder.children('.item');

			if ( $Item.hasClass( 'pendingItem' ) )
				deferred.reject();
			else
				deferred.resolve( $Item[0].rgItem );

			break;
		}
	}).fail( function() { deferred.reject(); } );

	return deferred.promise();
};

CInventory.prototype.FindFirstAssetOnPage = function( iPage )
{
	var deferred = $J.Deferred();

	if ( iPage < 0 )
		return deferred.reject().promise();

	var _this = this;
	this.LoadUntilConditionMet( function() {
		if ( iPage >= _this.m_rgPages.length )
			return _this.m_bPerformedInitialLoad;

		var $Page = _this.m_rgPages[iPage].GetElement();
		var $Item = $Page.children('.itemHolder:first').children('.item');

		return !$Item.hasClass('pendingItem');
	}).done( function() {
		if ( iPage < _this.m_rgPages.length )
		{
			var $Page = _this.m_rgPages[iPage].GetElement();
			var $Item = $Page.children('.itemHolder:first').children('.item');

			if ( !$Item.hasClass('pendingItem') )
				deferred.resolve( $Item[0].rgItem );
			else
				deferred.reject();
		}
	}).fail( function() {
		deferred.reject();
	});

	return deferred.promise();
};

CInventory.prototype.LocateCurrency = function( currencyid )
{
	for ( var i =0; i < this.m_rgCurrencies.length; i++ )
	{
		if ( this.m_rgCurrencies[i].currencyid == currencyid )
			return this.m_rgCurrencies[i];
	}

	// all currency is loaded in the initial load
	if ( !this.m_bPerformedInitialLoad )
	{
		// need to load more data!
		return null;
	}
	else
	{
		return null;
	}
};

// TODO
CInventory.prototype.LocateAssetElement = function( assetid )
{
	var asset = this.LocateAsset( assetid );

	if ( asset )
		return asset.element;
	else
		return null;
};


CInventory.prototype.LoadItemImage = function( $Item )
{
	var url = $Item && $Item.data('lazyLoadImage' );
	if ( url )
	{
		var $Img = $Item.children('img');
		if ( $Img.length )
		{
			$Img.attr( 'src', url );
		}
		else
		{
			$Img = $J('<img/>', {'src': url } );
			$Item.append( $Img );
		}
		$Item.data( 'lazyLoadImage', null );
	}
	else
	{
		// track that we would have loaded the image for this item slot, so if the item has yet to load
		//	we'll just immediately place the image
		$Item.data( 'imageLoaded', true );
	}
};

function RenderItemInfo( name, description, asset )
{
	if ( window.UpdateReactItemInfo )
	{
		window.UpdateReactItemInfo(name, description, asset );
	}
	else
	{
		// too early, queue
		if (!window.g_mapPendingItemInfo)
			window.g_mapPendingItemInfo = new Map();
		window.g_mapPendingItemInfo.set(name, { description: description, asset: asset } );
	}
}


CInventory.prototype.SelectItem = function( event, elItem, rgItem, bUserAction )
{
	if ( event )
		event.preventDefault();

	var bShouldShowPopup = ( g_bIsInventoryPage && Economy_UseResponsiveLayout() );

	if ( g_bIsTrading )
	{
		// in trading you can't "select" items, for the most part.  Only on touch, or in responsive mode (no hovers)
		// parent_item indicates it's a stack of currency in a trade - clicking it presents a dialog instead of our popup
		if ( ( rgItem.in_touch || ( Economy_UseResponsiveLayout() ) ) &&
			!rgItem.parent_item )
			bShouldShowPopup = true;
		else
			return;
	}

	var iNewSelect = ( iActiveSelectView == 0 ) ? 1 : 0;
	var sOldInfo = 'iteminfo' + iActiveSelectView;
	var sNewInfo = 'iteminfo' + iNewSelect;


	var $OldInfo = $J( '#' + sOldInfo );
	var $NewInfo = $J( '#' + sNewInfo );

	$OldInfo.css( 'position', 'absolute' );
	$NewInfo.css( 'position', 'static' );

	if ( $NewInfo.is(':visible') && !bShouldShowPopup )
	{
		$NewInfo.fadeIn()
	}
	if ( $NewInfo.data( 'blankTimeout' ) )
	{
		window.clearTimeout( $NewInfo.data( 'blankTimeout' ) );
	}

	if ( window.g_bReactRenderedItemDescriptions && g_bReactRenderedItemDescriptions )
	{
				const asset = {
			appid: rgItem.appid,
			contextid: rgItem.contextid,
			assetid: rgItem.assetid,
			classid: rgItem.classid,
			instanceid: rgItem.instanceid,
			amount: rgItem.amount,
			missing: rgItem.missing,
			est_usd: rgItem.est_usd,
			asset_properties: rgItem.asset_properties,
		};
		RenderItemInfo( sNewInfo, rgItem.description, asset );
	}
	else
		BuildHover( sNewInfo, rgItem, UserYou );


	if ( bShouldShowPopup )
	{
		// event indicates the user tapped an item, otherwise they may have just switched inventories
		if ( bUserAction )
		{
			var $BtnAddToTrade = $NewInfo.find('.item_desc_addtotrade');
			if ( $BtnAddToTrade.length && typeof OnDoubleClickItem != 'undefined' )
			{
				var bInTrade = $J(elItem).parents('.itemHolder').hasClass('trade_slot');

				if ( bInTrade )
				{
					$BtnAddToTrade.removeClass('btn_green_white_innerfade' ).addClass('btn_grey_white_innerfade');
					$BtnAddToTrade.children('span' ).text( 'Remove from trade' );
				}
				else
				{
					$BtnAddToTrade.removeClass('btn_grey_white_innerfade' ).addClass('btn_green_white_innerfade');
					$BtnAddToTrade.children('span' ).text( 'Add to trade' );
				}

				$BtnAddToTrade.on('click', function() {
					g_ActiveItemPopupModal && g_ActiveItemPopupModal.Dismiss();
					OnDoubleClickItem( null, elItem );
				} );

				if ( typeof g_bReadOnly != 'undefined' && g_bReadOnly )
					$BtnAddToTrade.hide();
				else
					$BtnAddToTrade.show();
			}

			ShowItemHoverAsPopup( $NewInfo, function() {
				$BtnAddToTrade.off('click');

				$J('.inventory_page_right' ).append( $NewInfo );
				g_ActiveItemPopupModal = null;
			} );
		}
	}
	else
	{
		$OldInfo.css( 'z-index', 2 );
		$NewInfo.css( 'z-index', 1 );

		$NewInfo.show();
		$OldInfo.fadeOut( 200 );
	}

	var builtFor = $OldInfo.data( 'builtFor' );
	if ( builtFor && builtFor.element )
		$J(builtFor.element).removeClass('activeInfo');

	$J(rgItem.element).addClass('activeInfo');
	$NewInfo.data( 'builtFor', rgItem );

	this.selectedItem = rgItem;

	// the user has the appwide context selected, so update the active item there.
	if ( g_ActiveInventory && g_ActiveInventory != this && g_ActiveInventory.contextid == APPWIDE_CONTEXT )
		g_ActiveInventory.selectedItem = rgItem;

	$OldInfo.data( 'blankTimeout', window.setTimeout( function() {
		if ( window.g_bReactRenderedItemDescriptions && g_bReactRenderedItemDescriptions )
			RenderItemInfo( sOldInfo, undefined );
		else
			$(sOldInfo+'_item_icon').src = 'https://community.fastly.steamstatic.com/public/images/trans.gif';
	}, 200 ) );

	iActiveSelectView = iNewSelect;
};

CInventory.prototype.EnsurePageActiveForItem = function( element )
{
	var iPage = $J(element).data('iPage');
	if ( typeof iPage != 'undefined' )
		this.SetActivePage( iPage );
};

function CAppwideInventory( owner, appid, rgContextIds )
{
	CInventory.call( this, owner, appid, APPWIDE_CONTEXT, {} );

	this.m_rgContextIds = rgContextIds;
	/** @var CInventory[] */
	this.m_rgChildInventories = {};

	this.m_cInventoriesLoaded = 0;
	this.m_bChildInventoriesReady = false;
}

// subclass the base inventory class
CAppwideInventory.prototype = Object.create( CInventory.prototype );

CAppwideInventory.prototype.GetContextIds = function()
{
	return this.m_rgContextIds;
};

CAppwideInventory.prototype.GetCountTotalItems = function()
{
	this.EnsureChildInventoriesReady();

	var cItems = 0;
	for ( var iContext = 0; iContext < this.m_rgContextIds.length; iContext++ )
	{
		var contextid = this.m_rgContextIds[iContext];
		var inventory = this.m_rgChildInventories[contextid];
		cItems += inventory.GetCountTotalItems();
	}

	return cItems;
}

CAppwideInventory.prototype.AddChildInventory = function( inventory )
{
	if ( !this.m_rgChildInventories[ inventory.contextid ] )
		this.m_cInventoriesLoaded++;

	// this usually happens when the inventory was reloaded.  Either way, reset our flags so we'll check again
	inventory.m_parentInventory = this;
	this.m_bPerformedInitialLoad = false;
	this.m_bFullyLoaded = false;
	this.m_bNeedsRepagination = true;
	this.m_rgChildInventories[ inventory.contextid ] = inventory;

	var _this = this;
	inventory.AddOnItemsLoadedCallback( function() {
		for ( var i = 0; i < _this.m_rgOnItemsLoadedCallbacks.length; i++ )
			_this.m_rgOnItemsLoadedCallbacks[i]();
	});
};

CAppwideInventory.prototype.EnsureChildInventoriesReady = function()
{
	if ( !this.m_bChildInventoriesReady )
	{
		for ( var i = 0; i < this.m_rgContextIds.length; i++ )
		{
			var contextid = this.m_rgContextIds[i];
			var inventory = this.m_rgChildInventories[contextid];
			if ( !inventory )
			{
				this.AddChildInventory( this.m_owner.getInventory( this.m_appid, contextid ) );
			}
		}

		this.m_bChildInventoriesReady = true;
	}
};

CAppwideInventory.prototype.PerformInitialLoad = function()
{
	this.EnsureChildInventoriesReady();

	if ( this.m_bPerformedInitialLoad )
		return $J.Deferred().resolve();

	for ( var contextid in this.m_rgChildInventories )
	{
		var inventory = this.m_rgChildInventories[contextid];
		if ( inventory.m_cItems > 0 )
		{
			var _this = this;
			return inventory.PerformInitialLoad().done( function() { _this.m_bPerformedInitialLoad = true; } );
		}
	}

	// ready as we'll ever be
	return $J.Deferred().resolve();
};

CAppwideInventory.prototype.LoadCompleteInventory = function()
{
	if ( this.m_bFullyLoaded )
		return $J.Deferred().resolve();

	if ( !this.m_promiseLoadCompleteInventory )
	{
		this.EnsureChildInventoriesReady();

		var rgDeferreds = [];
		for ( var contextid in this.m_rgChildInventories )
		{
			rgDeferreds.push( this.m_rgChildInventories[contextid].LoadCompleteInventory() );
		}

		var _this = this;
		this.m_promiseLoadCompleteInventory = $J.when.apply( $J, rgDeferreds ).done( function() {  _this.m_bFullyLoaded = true; } );
	}

	return this.m_promiseLoadCompleteInventory;
};

CAppwideInventory.prototype.ReadTags = function()
{
	this.tags = {};

	for( var sContextID in this.m_rgChildInventories )
	{
		var inventory = this.m_rgChildInventories[ sContextID ];

		if ( !inventory.tags )
			inventory.ReadTags();

		for ( var sCategoryName in inventory.tags )
		{
			var rgChildCategory = inventory.tags[ sCategoryName ];

			var rgCategory = this.tags[ sCategoryName ];

			if( !rgCategory )
			{
				rgCategory = this.tags[ sCategoryName ] = { "name": rgChildCategory.name, "tags": {} };
			}

			for( var tagid in rgChildCategory.tags )
			{
				var rgTag = rgChildCategory.tags[ tagid ];

				if( rgCategory.tags[ tagid ] )
					rgCategory.tags[ tagid ].count += rgTag.count;
				else
				{
					var rgNewTag = { "name": rgTag.name, "count": rgTag.count };
					if( rgTag.color )
						rgNewTag.color = rgTag.color;
					rgCategory.tags[ tagid ] = rgNewTag;
				}
			}
		}
	}
};

CAppwideInventory.prototype.MakeActive = function()
{
	var _this = this;

	for( var contextid in _this.m_rgChildInventories )
	{
		var inventory = _this.m_rgChildInventories[contextid];
		if ( !inventory.m_bNeedsRepagination )
		{
			inventory.m_bNeedsRepagination = true;
			_this.m_bNeedsRepagination = true;
		}
	}

	if ( _this.m_bNeedsRepagination )
		_this.LayoutPages();

	_this.SetActivePage( _this.m_iCurrentPage );

	_this.show();
};

CAppwideInventory.prototype.LayoutPages = function()
{
	this.EnsureChildInventoriesReady();

	this.m_$Inventory.children().detach();

	this.m_rgPages = [];

	if ( g_bEnableDynamicSizing )
	{
		this.m_SingleResponsivePage.hide();
		this.m_rgPages = [ this.m_SingleResponsivePage ];
	}
	else
	{
		var iPage = 0;
		this.m_rgPages.push( new CPage( this, iPage++  ) );
		var cPageItemsRemaining = INVENTORY_PAGE_ITEMS;

		var bAnyMissing = false;
		for ( var iContext = 0; iContext < this.m_rgContextIds.length; iContext++ )
		{
			var contextid = this.m_rgContextIds[iContext];
			var inventory = this.m_rgChildInventories[contextid];

			inventory.EnsureItemHoldersCreated();

			for ( var iItem = 0; iItem < inventory.m_rgItemElements.length; iItem++ )
			{
				if ( cPageItemsRemaining-- <= 0 )
				{
					this.m_rgPages.push( new CPage( this, iPage++  ) );
					cPageItemsRemaining = INVENTORY_PAGE_ITEMS - 1;
				}
			}
		}
	}

	this.m_cPages = this.m_rgPages.length;

	this.m_bNeedsRepagination = false;
	this.SetActivePage( this.m_iCurrentPage );
};

CAppwideInventory.prototype.GetPageItems = function( iPage )
{
	var iStart = iPage * INVENTORY_PAGE_ITEMS;
	var iCur = iStart;
	var cHandled = 0;
	var iEnd = iStart + INVENTORY_PAGE_ITEMS;
		var rgItems = [];

	for ( var iContext = 0; iContext < this.m_rgContextIds.length; iContext++ )
	{
		var contextid = this.m_rgContextIds[iContext];
		var inventory = this.m_rgChildInventories[contextid];
		
		// Skip this context if this page contains no items from it
		if ( inventory.GetCountTotalItems() <= iCur )
		{
						iCur -= inventory.GetCountTotalItems();
			cHandled += inventory.GetCountTotalItems();
						continue;
		}

		cHandled += iCur;

				for ( var iItem = iCur; iItem < inventory.GetCountTotalItems() && cHandled < iEnd; iItem++ )
		{
			var $ItemHolder = inventory.GetItemElement( iItem );
			rgItems.push($ItemHolder);
			cHandled++;
		}

		iCur = 0;
		if ( cHandled >= iEnd )
			break;
	}

	return rgItems;
};

CAppwideInventory.prototype.LocateAsset = function( itemid )
{
	var rgDeferred = [];
	for ( var contextid in this.m_rgChildInventories )
	{
		rgDeferred.push( this.m_rgChildInventories[ contextid ].LocateAsset( itemid ) );
	}

	var deferred = $J.Deferred();
	var cResponses = rgDeferred.length;
	var bSuccess = false;

	for ( var i = 0; i < rgDeferred.length; i++ )
	{
		rgDeferred[i].done( function( asset )
		{
			// expected to have only one success...
			if ( !bSuccess )
				deferred.resolve( asset );

			cResponses--;
			bSuccess = true;
		}).fail( function() {
			cResponses--;
			if ( cResponses == 0 && !bSuccess )
				deferred.reject();
		});
	}

	return deferred.promise();
};

CAppwideInventory.prototype.FindFirstAsset = function()
{
	this.EnsureChildInventoriesReady();

	var deferred = $J.Deferred();
	var _this = this;
	var iContext = 0;

	var fnTryNextContext = function() {
		while ( iContext < _this.m_rgContextIds.length )
		{
			var contextid = _this.m_rgContextIds[iContext++];
			var inventory = _this.m_rgChildInventories[contextid];

			if ( inventory.m_cItems == 0 )
				continue;

			inventory.FindFirstAsset().done( function( asset ) {
				deferred.resolve( asset );
			}).fail( function() {
				fnTryNextContext();
			});
			return;
		}

		deferred.reject();
	};

	fnTryNextContext();

	return deferred.promise();
};


CAppwideInventory.prototype.ReloadIfNeeded = function()
{
	if ( this.m_bNeedsReload )
	{
		// hide message and remove flag first, so when the reload activate the appwide inventory again we don't
		//	briefly show the reload message
		if ( this.m_$ReloadDisplay )
			this.m_$ReloadDisplay.slideUp();
		this.m_bNeedsReload = false;

		for ( var contextid in this.m_rgChildInventories )
		{
			if ( this.m_rgChildInventories[contextid].m_bNeedsReload )
				this.m_owner.ReloadInventory( this.m_appid, contextid );
		}
	}

}

CAppwideInventory.prototype.LoadUntilConditionMet = function( fnCondition )
{
	this.EnsureChildInventoriesReady();

	var deferred = $J.Deferred();
	var _this = this;
	var iContext = 0;

	var fnTryNextContext = function() {
		while ( iContext < _this.m_rgContextIds.length )
		{
			var contextid = _this.m_rgContextIds[iContext++];
			var inventory = _this.m_rgChildInventories[contextid];

			if ( inventory.m_cItems == 0 )
				continue;

			inventory.LoadUntilConditionMet( fnCondition ).done( function() {
				deferred.resolve();
			}).fail( function() {
				fnTryNextContext();
			});
			return;
		}

		deferred.reject();
	};

	fnTryNextContext();

	return deferred.promise();
};



CAppwideInventory.prototype.LoadMoreAssets = function( count )
{
	this.EnsureChildInventoriesReady();

	for ( var contextid in this.m_rgChildInventories )
	{
		if ( !this.m_rgChildInventories[contextid].m_bFullyLoaded )
			return this.m_rgChildInventories[contextid].LoadMoreAssets( count );
	}

	return $J.Deferred().resolve().promise();
};

CAppwideInventory.prototype.BIsEmptyInventory = function()
{
	if ( !this.m_bFullyLoaded )
		return false;


	for ( var contextid in this.m_rgChildInventories )
	{
		if ( !this.m_rgChildInventories[contextid].BIsEmptyInventory() )
			return false;
	}

	return true;
};

CAppwideInventory.prototype.ShowInventoryLoadError = function()
{
	this.m_tsLastError = 0;
	for( var contextid in this.m_rgChildInventories )
		this.m_tsLastError = Math.max( this.m_tsLastError, this.m_rgChildInventories[contextid].m_tsLastError );

	CInventory.prototype.ShowInventoryLoadError.call( this );
};

CAppwideInventory.prototype.HideInventoryLoadError = function()
{
	this.m_tsLastError = 0;
	for( var contextid in this.m_rgChildInventories )
		this.m_tsLastError = Math.max( this.m_tsLastError, this.m_rgChildInventories[contextid].m_tsLastError );

	if ( this.m_tsLastError == 0 )
		CInventory.prototype.HideInventoryLoadError.call( this );
};

CAppwideInventory.prototype.RetryLoad = function()
{
	for( var contextid in this.m_rgChildInventories )
	{
		if ( this.m_rgChildInventories[contextid].m_tsLastError )
			this.m_rgChildInventories[contextid].RetryLoad();
	}
};

var CUser = Class.create( {
	bReady: false,
	bSingleContext: false,
	nItemsInTrade: 0,
	cLoadsInFlight: 0,
	bDynamicLoadInventory: true,
	strProfileURL: null,
	strSteamId: null,
	rgContexts: null,
	rgAppwideInventories: null,
	rgContextIdsByApp: null,
	rgAppInfo: null,
	nActiveAppId: null,

	initialize: function() {
		this.rgContexts = {};
		this.rgContextIdsByApp = {};
		this.rgAppwideInventories = {};
		this.rgAppInfo = {};
		this.bReady = false;
	},

	GetContext: function( appid, contextid ) {
		return this.rgContexts[appid] && this.rgContexts[appid][contextid];
	},

	getInventory: function( appid, contextid )
	{
		var rgContext = this.GetContext( appid, contextid );
		var inventory = rgContext ? rgContext.inventory : null;

		if ( !inventory )
		{
			inventory = this.loadInventory( appid, contextid, rgContext );
		}
		return inventory;
	},

	HasApp: function( appid ) {
		return !!this.rgContexts[appid];
	},

	ShowLoadingIndicator: function()
	{
		if ( !this.cLoadsInFlight )
		{
			$J(document.body).addClass('inventory_loading');
		}
		this.cLoadsInFlight++;
	},

	HideLoadingIndicator: function()
	{
		this.cLoadsInFlight--;

		if ( !this.cLoadsInFlight )
		{
			$J(document.body).removeClass('inventory_loading');
		}
	},

	GetAllLoadedInventories: function()
	{
		var rgInventories = [];
		for ( var appid in this.rgContexts )
		{
			var rgAppContexts = this.rgContexts[appid];
			for ( var contextid in rgAppContexts )
			{
				var rgContext = rgAppContexts[contextid];
				if ( rgContext && rgContext.inventory )
					rgInventories.push( rgContext.inventory );
			}
		}

		return rgInventories;
	},

	InvalidatePaging: function()
	{
		var rgInventories = this.GetAllLoadedInventories();
		for ( var i = 0; i < rgInventories.length; i++ )
		{
			rgInventories[i].m_bNeedsRepagination = true;

			if ( g_bEnableDynamicSizing )
			{
				//rgInventories[i].m_bNeedsItemHolders = true;
			}
		}

		if ( g_ActiveInventory && g_ActiveInventory.m_bNeedsRepagination &&
			!g_ActiveInventory.BIsEmptyInventory() )
		{
			g_ActiveInventory.LayoutPages();
			g_ActiveInventory.SetActivePage(0);
			g_ActiveInventory.ShowPageControlsIfNeeded();
		}
	},

	addInventory: function( inventory ) {
		var rgContext = this.GetContext( inventory.appid, inventory.contextid );

		var oldInventory = rgContext.inventory;
		rgContext.inventory = inventory;

		if ( oldInventory )
		{
			if ( oldInventory.pageCurrent )
				inventory.SetActivePage( oldInventory.pageCurrent );

			oldInventory.destroy();
		}

		var elInventory = inventory.getInventoryElement();
		elInventory.hide();

		if ( $('inventories') )
		{
			$('inventories').insert( elInventory );

			var elTags = inventory.getTagContainer();
			var elTagHolder = $( 'filter_options' );
			if ( elTagHolder && elTags )
			{
				elTagHolder.insert( elTags );
				elTagHolder.addClassName( 'filter_collapsed' );
			}
		}
	},

	findAsset: function( appid, contextid, itemid ) {
		var inventory = this.getInventory( appid, contextid );
		if ( inventory )
			return inventory.GetLoadedAsset( itemid );
		else
			return null;
	},

	findAssetElement: function( appid, contextid, itemid ) {
		var inventory = this.getInventory( appid, contextid );
		if ( inventory )
		{
			var element = inventory.LocateAssetElement( itemid );
			if ( element )
				inventory.LoadItemImage( element );

			return element;
		}
		else
			return null;
	},

	FindCurrency: function( appid, contextid, currencyid ) {
		var inventory = this.getInventory( appid, contextid );
		if ( inventory )
			return inventory.LocateCurrency( currencyid );
		else
			return null;
	},

	BIsLoadingInventoryData: function()
	{
		// TODO!
		return false;
	},

	SetProfileURL: function( strProfileURL )
	{
		this.strProfileURL = strProfileURL;
	},

	GetProfileURL: function()
	{
		return this.strProfileURL;
	},

	SetSteamId: function( strSteamId )
	{
		this.strSteamId = strSteamId;
	},

	GetSteamId: function()
	{
		return this.strSteamId;
	},

	LoadContexts: function( rgAppContextData )
	{
		for ( var appid in rgAppContextData )
		{
			var rgAppData = rgAppContextData[appid];

			var appTradePermissions = 'FULL';
			if ( rgAppData.trade_permissions )
				appTradePermissions = rgAppData.trade_permissions;

			this.rgContexts[appid] = {};
			var rgContextIds = [];

			this.rgAppInfo[appid] = rgAppData;

			for ( var contextid in rgAppData.rgContexts )
			{
				var rgContext = rgAppData.rgContexts[contextid];
				rgContext.trade_permissions = appTradePermissions;
				rgContext.inventory = null;
				this.rgContexts[appid][contextid] = rgContext;
								if ( rgContext.hide_context ?? false )
				{
					rgContextIds.splice( 0, 0, contextid );
					this.m_bSingleContext = true;
				}
				else
								{
					rgContextIds.push(contextid);
				}
			}

			if ( rgContextIds.length > 1 )
			{
				// add a virtual context to represent the app-wide view
				var templAllContextName = new Template( 'All #{appname} Items');

				var rgContext = {
					id: APPWIDE_CONTEXT,
					trade_permissions: appTradePermissions,
					name: templAllContextName.evaluate( {appname: rgAppData.name } )
				};

				this.rgContexts[appid][APPWIDE_CONTEXT] = rgContext;

				var inventory = new CAppwideInventory( this, appid, rgContextIds.clone() );
				this.addInventory( inventory );

				rgContextIds.splice( 0, 0, APPWIDE_CONTEXT );
			}

			this.rgContextIdsByApp[appid] = rgContextIds;
		}
	},

	GetContextIdsForApp: function( appid ) {
		return this.rgContextIdsByApp[appid];
	},

	BIsSingleContextApp: function( appid ) {
		return ( this.m_bSingleContext || ( this.rgContextIdsByApp[appid] && this.rgContextIdsByApp[appid].length == 1 ) ) ? true : false;
	},

	GetFirstContextForApp: function( appid ) {
		return this.GetContext( appid, this.rgContextIdsByApp[appid][0] );
	},

	ShowInventoryIfActive: function( appid, contextid )
	{
		if ( g_ActiveUser == this && g_ActiveInventory && g_ActiveInventory.appid == appid && g_ActiveInventory.contextid == contextid )
		{
			if ( g_bIsInventoryPage )
				ShowItemInventory( appid, contextid, null, true );
			else if ( g_bIsTrading )
			{
				TradePageSelectInventory( g_ActiveUser, appid, contextid, true );
			}
		}
	},

	SetActiveAppId: function( appid ) {
		this.nActiveAppId = appid;
	},

	GetActiveAppId: function() {
		return this.nActiveAppId;
	},

	GetTradePermissions: function( appid, contextid )
	{
		/* trade permissions are app-wide, but could be context-specific in the future */
		var rgContext = this.GetContext( appid, contextid );
		if ( !rgContext )
		{
			if ( !this.rgAppInfo[appid] || !this.rgAppInfo[appid].trade_permissions )
			{
				// We don't know anything about this app, so we're defaulting to full.
				// This allows somebody to receive items in a game they don't yet have items for, for example.
				return 'FULL';
			}
			else
			{
				return this.rgAppInfo[appid].trade_permissions;
			}
		}
		else
		{
			return rgContext.trade_permissions;
		}
	},

	GetAppData: function( appid )
	{
		return this.rgAppInfo[appid];
	},

	BAllowedToTradeItems: function( appid, contextid )
	{
		var permissions = this.GetTradePermissions( appid, contextid );
		return ( permissions == 'FULL' ) || ( permissions == 'SENDONLY' ) || ( permissions == 'SENDONLY_FULLINVENTORY' );
	},

	BAllowedToRecieveItems: function( appid, contextid )
	{
		var permissions = this.GetTradePermissions( appid, contextid );
		return ( permissions == 'FULL' ) || ( permissions == 'RECEIVEONLY' );
	},

	BInventoryIsFull: function( appid, contextid )
	{
		var permissions = this.GetTradePermissions( appid, contextid );
		return permissions == 'SENDONLY_FULLINVENTORY';
	}
});

CUserYou = Class.create( CUser, {

	oDefaultInventoryId: null,
	rgActiveContextIdByApp: null,
	rgReapplyFilterTags: null,


	initialize: function( $super )
	{
		$super();
		this.rgActiveContextIdByApp = {};
	},

	ReloadInventory: function( appid, contextid, assetid )
	{
		// force a reload of an inventory that's already been loaded
		var context = this.GetContext( appid, contextid );
		if ( context && context.inventory )
		{
			var asset = null;
			if ( assetid )
				asset = context.inventory.GetLoadedAsset( assetid );

			// for large inventories, if we have an idea of what asset was modified, just mark that asset "disabled"
			if ( asset && context.inventory.GetCountTotalItems() > 1000 )
			{
				// just mark this item as invalid
				asset.consumed_item = true;
				if ( asset && asset.element )
					$J(asset.element).parent().addClass('consumed_item');

				context.inventory.ShowInventoryReloadMessage();

				if ( g_ActiveItemPopupModal )
					g_ActiveItemPopupModal.Dismiss();

				if ( g_ActiveInventory && g_ActiveInventory.appid == appid && ( g_ActiveInventory.contextid == contextid || g_ActiveInventory.contextid == APPWIDE_CONTEXT )
					&& g_ActiveInventory.selectedItem && g_ActiveInventory.selectedItem.consumed_item )
				{
					var page = g_ActiveInventory.m_rgPages[ g_ActiveInventory.m_iCurrentPage ];
					var $ItemHolder = page.GetElement().children(':not(.consumed_item):first');
					if ( $ItemHolder.length && $ItemHolder[0].rgItem )
					{
						var item = $ItemHolder[0].rgItem;
						g_ActiveInventory.SelectItem( null, item.element, item, false );
					}
				}
			}
			else
			{
				this.rgReapplyFilterTags = Filter.rgCurrentTags;
				var NewInventory = this.loadInventory( appid, contextid, context );

				if ( !this.BIsSingleContextApp( appid ) )
				{
					var appwideContext = this.GetContext( appid, APPWIDE_CONTEXT );
					var appwideInventory = appwideContext.inventory;
					appwideInventory.AddChildInventory( NewInventory );
				}

				if ( g_ActiveInventory && g_ActiveInventory.appid == appid && ( g_ActiveInventory.contextid == contextid || g_ActiveInventory.contextid == APPWIDE_CONTEXT ) )
				{
					ShowItemInventory( appid, g_ActiveInventory.contextid, g_ActiveInventory.selectedItem ? g_ActiveInventory.selectedItem.id : null, true );
				}
			}
		}
	},

	loadInventory: function( appid, contextid, rgContext )
	{
		if ( g_bIsTrading && !this.BAllowedToTradeItems( appid, contextid ) )
		{
			// not allowed to trade, so we just create an empty inventory
			var EmptyInventory = new CInventory( this, appid, contextid, null, null );
			this.addInventory( EmptyInventory );
			return EmptyInventory;
		}

		var inventory = new CInventory( this, appid, contextid, rgContext );
		this.addInventory( inventory );

		return inventory;
	},

	GetInventoryLoadDisplayElement: function() {
		return $J('#inventory_load_error_ctn');
	},

	// an obj with .appid and .contextid
	GetDefaultInventoryId: function () {
		return this.oDefaultInventoryId;
	},

	SetDefaultInventoryId: function( oDefaultInventoryId ) {
		this.oDefaultInventoryId = oDefaultInventoryId;
	}

});
UserYou = new CUserYou();

function DisableReadOnlyMode()
{
	g_bReadOnly = false;
	if ( g_bIsTrading )
	{
		var rgInventories = UserYou.GetAllLoadedInventories();
		for ( var i = 0; i < rgInventories.length; i++ )
		{
			rgInventories[i].MakeElementsDraggable();
		}

		if ( g_bTradeOffer )
		{
			var rgInventories = UserThem.GetAllLoadedInventories();
			for ( var i = 0; i < rgInventories.length; i++ )
			{
				rgInventories[i].MakeElementsDraggable();
			}
		}

		RedrawCurrentTradeStatus();
	}
}

function ShowPendingGifts()
{
	if ( !$('tabcontent_pendinggifts') )
		return;

	var elTabcontentInventory = $('tabcontent_inventory');
	if ( elTabcontentInventory )
	{
		$('tabcontent_inventory').hide();
	}
	else
	{
		$('no_inventories')&& $('no_inventories').hide();
	}

	$('tabcontent_pendinggifts').show();


	var elTab = $('pending_gift_link' );
	if ( elTab )
		elTab.addClassName('active');

	if ( elTabcontentInventory )
	{
		$$( '.games_list_tabs' ).first().childElements().invoke( 'removeClassName', 'active' )
	}

	if ( g_ActiveInventory )
		g_ActiveInventory.hide();

	g_ActiveInventory = null;
	UserYou.SetActiveAppId(null);
}

function ShowItemInventory( appid, contextid, assetid, bLoadCompleted )
{
	if ( g_ActiveUser == null )
	{
		g_ActiveUser = UserYou;
	}

	$('tabcontent_inventory') && $('tabcontent_inventory').show();
	$('tabcontent_pendinggifts') && $('tabcontent_pendinggifts').hide();

	if ( !g_ActiveUser.HasApp( appid ) )
	{
		return;
	}

	if ( !contextid )
	{
		if ( g_ActiveUser.BIsSingleContextApp( appid ) )
			contextid = g_ActiveUser.GetFirstContextForApp( appid ).id;
		else
			contextid = APPWIDE_CONTEXT;
	}

	var lastAppId = g_ActiveInventory ? g_ActiveInventory.appid : null;
	var lastContextID = g_ActiveInventory ? g_ActiveInventory.contextid : null;
	var lastPageCurrent = g_ActiveInventory ? g_ActiveInventory.m_iCurrentPage : 0;

	// if we're in the appwide context and looking for a specific asset, just scroll
	//	to the asset in the appwide context rather than switching to the specific
	//  context with the item
	if ( assetid && lastAppId == appid && lastContextID == APPWIDE_CONTEXT )
	{
		contextid = APPWIDE_CONTEXT;
	}

	var inventory = g_ActiveUser.getInventory( appid, contextid );
	var bAlreadyInitialized = inventory.initialized;
	var bSellNow = g_bSellItemOnInventoryLoad;
	g_bSellItemOnInventoryLoad = false;

	if ( lastAppId != appid || contextid != lastContextID )
	{
		Filter.ClearFilter();
	}

	if ( SelectInventoryFromUser( g_ActiveUser, appid, contextid, bLoadCompleted ) )
	{
		$('iteminfo0').hide();
		$('iteminfo1').hide();
		if ( g_ActiveItemPopupModal )
			g_ActiveItemPopupModal.Dismiss();

		if ( g_ActiveUser.GetActiveAppId() != appid )
		{
			g_ActiveUser.SetActiveAppId( appid );

			var elTab = $('inventory_link_' + appid );
			$J( '.games_list_tab.active' ).removeClass( 'active' );

			var $ResponsiveSelect = $J('#responsive_inventory_select');
			var $Opt = $ResponsiveSelect.children('[data-appid=' + parseInt(appid) + ']');
			if ( $Opt.length )
				$ResponsiveSelect.val( $Opt.attr('value') );

			var elPendingGift = $('pending_gift_link' );
			if ( elPendingGift )
				elPendingGift.removeClassName('active');
			elTab.addClassName('active');
			var oEconomyDisplay = GetEconomyDisplay( appid, contextid );

			if ( oEconomyDisplay && oEconomyDisplay.inventory_logo )
			{
				if ( !bAlreadyInitialized )
				{
					// explicitly blank logo to prevent it from showing as the old logo until load is complete
					$('inventory_applogo').src = 'https://community.fastly.steamstatic.com/public/images/trans.gif';
					var fnUpdate= function() {$('inventory_applogo').src = oEconomyDisplay.inventory_logo };
					fnUpdate.defer();
				}
				else
				{
					$('inventory_applogo').src = oEconomyDisplay.inventory_logo;
				}
				$('inventory_applogo').show();
			}
			else
			{
				$('inventory_applogo').hide();
			}

			if ( g_ActiveUser.BIsSingleContextApp( appid ) )
			{
				$('context_selector').hide();
			}
			else
			{
				$('contextselect_options_contexts').update('');
				var rgContextIds = g_ActiveUser.GetContextIdsForApp( appid );
				var fnContextClick = function( appid, contextid ) { HideMenu( $('contextselect'), $('contextselect_options') ); window.location = '#' + appid + '_' + contextid; };
				for ( var i = 0; i < rgContextIds.length; i++ )
				{
					var rgContext = g_ActiveUser.GetContext( appid, rgContextIds[i] );
					var elContext = new Element( 'div', {'class': 'popup_item context_name', 'id': 'context_option_' + appid + '_' + rgContext.id } );
					$J( elContext ).text( rgContext.name );
											$J( elContext ).text( rgContext.name );
										var strHash = '#' + appid + '_' + rgContext.id;
					elContext.observe( 'click', fnContextClick.bind( null, appid, rgContext.id ) );


					$('contextselect_options_contexts').appendChild( elContext );
				}
				$('context_selector').show();
			}
		}

		// display the current context in the drop down menu
		if ( !g_ActiveUser.BIsSingleContextApp( appid ) )
		{
			// make sure the popup isn't visible
			HideMenu( $('contextselect'), $('contextselect_options') );
			var elActiveContext = $('context_option_' + appid + '_' + contextid);
			if ( elActiveContext )
			{
				$('contextselect_activecontext').update( elActiveContext.clone( true ) );
			}

		}

		$('active_inventory_page').hide();
		$('empty_inventory_page').hide();
		$('pending_inventory_page').hide();
		$('failed_inventory_page').hide();

		if ( g_ActiveInventory.BIsEmptyInventory() )
		{
			// TODO: this will never fire now
			$('empty_inventory_page').show();

			$J( $('empty_inventory_page').down('.gamename') ).text( g_rgAppContextData[appid].name );
			var strHowToGet = '';
			if( oEconomyDisplay && oEconomyDisplay.howtoget )
				strHowToGet = oEconomyDisplay.howtoget;
			$('empty_inventory_page_howtoget').update( strHowToGet );
		}
		else
		{
			$('active_inventory_page').show();

			SetCookie( 'strInventoryLastContext', appid + '_' + contextid, 14 );
		}

		// hide the tags after we select the new inventory so
		// we can show the "show" button appropriately.
		HideTagFilters();
	}
	else
	{
		// we already had this inventory selected.  Only continue if we are changing assetid
		if ( !assetid )
			return;
	}

	// highlight an item for this game's inventory
	var rgItem = null;
	var bShowPopup = true;

	// TODO:
	if ( g_ActiveInventory.BIsEmptyInventory() )
		return;

	var fnShowAssetOnLoadClosure = function( asset ) {
		if ( inventory == g_ActiveInventory )
		{
			g_ActiveInventory.SelectItem( null, asset.element, asset, bShowPopup );
			g_ActiveInventory.EnsurePageActiveForItem( asset.homeElement );

			if ( bSellNow )
			{
				SellCurrentSelection();
			}
		}
	};

	if ( assetid )
	{
		// either the passed in item ...
		inventory.LocateAsset( assetid ).done(
			fnShowAssetOnLoadClosure
		).fail( function() {
			// should we show something else?
		});
	}
	else
	{
		bSellNow = false;
		bShowPopup = false;

		// ... or the last selected item ...
		if ( g_ActiveInventory.selectedItem )
		{
			g_ActiveInventory.SelectItem( null, g_ActiveInventory.selectedItem.element, g_ActiveInventory.selectedItem, bShowPopup );
			g_ActiveInventory.EnsurePageActiveForItem( g_ActiveInventory.selectedItem.homeElement );
		}
		else
		{
			if ( g_ActiveInventory.appid == lastAppId && g_ActiveInventory.contextid == lastContextID && lastPageCurrent )
			{
				g_ActiveInventory.SetActivePage( lastPageCurrent );
				g_ActiveInventory.FindFirstAssetOnPage( lastPageCurrent ).done( fnShowAssetOnLoadClosure );
			}
			else
			{
				g_ActiveInventory.FindFirstAsset().done( fnShowAssetOnLoadClosure );
			}
		}
	}
}

function SelectInventoryFromUser( user, appid, contextid, bForceSelect )
{
	var inventory = user.getInventory( appid, contextid );
	if ( inventory == g_ActiveInventory && !bForceSelect )
	{
		return false;
	}

	if ( g_ActiveInventory )
	{
		g_ActiveInventory.hide();
	}
	g_ActiveInventory = inventory;
	g_ActiveUser = user;

	inventory.MakeActive();

	return true;
}

/* special display rules for economy apps, logos, special messages, etc */
var g_rgEconomyDisplay = {"440":{"howtoget":"You can get them from free in-game item drops, the in-game Mann Co. Store, or trade for them with friends."},"620":{"howtoget":"You can get them from the Portal 2 in-game store or trade for them with friends."},"753":{"1":{"howtoget":"You can get extra copies of games during special promotions, or by purchasing a game from the Steam Store and selecting \"Purchase as a Gift\" at checkout time."}},"99900":{"logo":"https:\/\/community.fastly.steamstatic.com\/public\/images\/economy\/applogos\/99900.png"},"99920":{"logo":"https:\/\/community.fastly.steamstatic.com\/public\/images\/economy\/applogos\/99900.png"}};
function GetEconomyDisplay( appid, contextid )
{
	var oDisplay = {};
	if ( g_rgEconomyDisplay[appid] )
	{
		if ( g_rgEconomyDisplay[appid][contextid] )
			oDisplay = g_rgEconomyDisplay[appid][contextid];
		else
			oDisplay = g_rgEconomyDisplay[appid];
	}

	if ( g_rgAppContextData[appid] && g_rgAppContextData[appid].inventory_logo )
		oDisplay.inventory_logo = g_rgAppContextData[appid].inventory_logo;
	else
		oDisplay.inventory_logo = oDisplay.logo;

	return oDisplay;
}

function ImageURL( imageName, x, y, bEnableHighDPI )
{
	if ( imageName )
	{
		x = x ? x : 0;
		y = y ? y : 0;
		var strSize = '';
		if ( x != 0 || y != 0 )
		{
			strSize = '/' + x + 'x' + y;

			// we support 2x (but not arbitrary DPIs for caching purposes).
			// The backend does not accept fractional DPIs, they are ignored.
			// 	The elements have to be set up to allow high DPI images - ie, they must be enforcing a css
			//	width or the image will be displayed too large
			if ( bEnableHighDPI && window.devicePixelRatio >= 2 && g_bAllowHighDPIItemImages )
				strSize += 'dpx2x';
		}
		return 'https://community.fastly.steamstatic.com/economy/image/' + v_trim(imageName) + strSize + '?allow_animated=1';
	}
	else
		return 'https://community.fastly.steamstatic.com/public/images/trans.gif';
}


/*
 *		Hovers
 */
function MouseOverItem( event, owner, elItem, rgItem )
{
	// no hovers while the user is moving items around
	if ( g_bEnableDynamicSizing || ( g_bIsTrading && g_bInDrag ) || ( rgItem.in_touch ) )
		return;

	elItem.addClassName( 'hover' );
	var hover = $('hover');
	if ( hover.hiding && hover.visible() && hover.target == elItem )
	{
		ShowWithFade( hover );
	}
	else if ( ( !hover.visible() || hover.target != elItem ) && !elItem.timer )
	{
		elItem.wants_hover = true;
		// if the hover is visible, wait a bit to give it a chacne to disappear
		if ( hover.visible() )
			window.setTimeout( function() { if ( elItem.wants_hover ) BuildHover( 'hover', rgItem, owner ); }, Math.min( 250, ITEM_HOVER_DELAY - 50 ) );
		else
			BuildHover( 'hover', rgItem, owner );

		elItem.timer = window.setTimeout( function() { elItem.timer = false; if ( elItem.wants_hover ) ShowHover( elItem, rgItem ); elItem.wants_hover = false; }, ITEM_HOVER_DELAY );
	}
}

function MouseOutItem( event, owner, elItem, rgItem )
{
	if ( event )
	{
		var reltarget = (event.relatedTarget) ? event.relatedTarget : event.toElement;
		if ( reltarget && ( reltarget == elItem || ( $(reltarget).up( '#' + elItem.identify() ) ) ) )
			return;
	}

	CancelItemHover( elItem );
}

function CancelItemHover( elItem )
{
	elItem.removeClassName( 'hover' );
	if ( elItem.wants_hover && elItem.timer )
	{
		window.clearTimeout( elItem.timer );
		elItem.wants_hover = false;
		elItem.timer = false;
	}
	else
		HideHover.defer();
}

var iActiveSelectView = 0;


var HoverCurrencyFromTemplate = new Template( '<span style="#{currencystyle}">#{amount}</span> from #{contextname}');

function GetEscapedNameForItem( item )
{
	var strName = item.description.name.escapeHTML();
	if ( CurrencyIsWalletFunds( item ) )
		strName = v_currencyformat( item.amount, item.description.name ) + ' <span class="hover_item_name_small">' + strName + '</span>';
	else if ( item.is_stackable )
		strName = v_numberformat( item.amount ) + ' ' + strName;

	return strName;
}

/* We allow owner to be a CUser or string ( steamid ) */
function BuildHover( prefix, item, owner )
{
	var description = item.description;
	var imageName = description.icon_url_large ? description.icon_url_large : description.icon_url;
	var url = '';
	if ( g_bIsTrading )
		url = ImageURL( imageName, 192, 192 );
	else
		url = ImageURL( imageName, 330, 192 );

	var strHoverClass = 'item_desc_content';
	if ( item.appid )
		strHoverClass = strHoverClass + ' app' + item.appid + ' context' + item.contextid;

	var elHoverContent = $(prefix+'_content');
	elHoverContent.className = strHoverClass;

	$(prefix+'_item_icon').src = url;
	$(prefix+'_item_icon').alt = description.name;

	var htmlName = GetEscapedNameForItem( item );
	$(prefix+'_item_name').update( htmlName );

	var elArrowLeft = $(prefix+'_arrow_left');
	var elArrowRight = $(prefix+'_arrow_right');
	if ( description.name_color )
	{
		$(prefix+'_item_name').style.color = '#' + description.name_color;
		$(prefix+'_content').parentNode.style.borderColor = '#' + description.name_color;
		if ( elArrowLeft ) elArrowLeft.style.borderRightColor = '#' + description.name_color;
		if ( elArrowRight ) elArrowRight.style.borderLeftColor = '#' + description.name_color;
	}
	else
	{
		$(prefix+'_item_name').style.color = '';
		$(prefix+'_content').parentNode.style.borderColor = '';
		if ( elArrowLeft ) elArrowLeft.style.borderRightColor = '';
		if ( elArrowRight ) elArrowRight.style.borderLeftColor = '';
	}

	var elFraudWarnings = $J('#'+prefix+'_fraud_warnings');
	if ( elFraudWarnings )
	{
		// on the inventory page, we only show fraud warnings for currency (special privacy notice)
		if ( description.fraudwarnings || ( g_bIsInventoryPage && item.is_currency ) )
		{
			elFraudWarnings.empty();
			if ( description.fraudwarnings )
			{
				for ( var i=0; i < description.fraudwarnings.length; i++ )
				{
					var warning = $J( '<div/>', { class: 'fraud_warning_box' } );
					var warningImage = $J( '<img>', { class: 'fraud_warning_image', src: 'https://community.fastly.steamstatic.com/public/images/sharedfiles/icons/icon_warning.png' } );
					warning.append( warningImage );
					var warningText = $J( '<span/>' );
					warningText.text( description.fraudwarnings[i] );
					warning.append( warningText );
					elFraudWarnings.append( warning );
				}
			}
			if ( g_bIsInventoryPage && item.is_currency )
			{
				var warning = $J( '<div/>' );
				warning.text( 'This amount is private and shown only to you.' );
				elFraudWarnings.append( warning );
			}
			elFraudWarnings.show();
		}
		else
		{
			elFraudWarnings.hide();
		}
	}

	if ( item.appid && g_rgAppContextData[item.appid] )
	{
		var rgAppData = g_rgAppContextData[item.appid];
		$(prefix+'_game_icon').src = rgAppData.icon;
		$(prefix+'_game_icon').alt = rgAppData.name;
					$JFromIDOrElement(prefix+'_game_name').text( rgAppData.name );
		
		$JFromIDOrElement(prefix+'_item_type').text( description.type );
		$(prefix+'_game_info').show();
	}
	else
	{
		$(prefix+'_game_info').hide();
	}

	var elDescriptors = $(prefix+'_item_descriptors');
	PopulateDescriptions( elDescriptors, description.descriptions );

	var elActions = $(prefix+'_item_actions');
	if ( elActions )
	{
		PopulateActions( prefix, elActions, description.actions, item, owner );
	}

	var elOwnerDescriptors = $(prefix+'_item_owner_descriptors');
	if ( elOwnerDescriptors )
	{
		PopulateDescriptions( elOwnerDescriptors, description.owner_descriptions )
	}

	// hide "grind into goo" action
	$J('#'+prefix+'_item_scrap_actions').hide();

	var elOwnerActions = $(prefix+'_item_owner_actions');
	if ( elOwnerActions )
	{
		PopulateActions( prefix, elOwnerActions, description.owner_actions, item, owner );
	}

	var elCurrencyInTradeDescriptor = $(prefix+'_currency_in_trade' );
	if ( elCurrencyInTradeDescriptor )
	{
		elCurrencyInTradeDescriptor.update('');
		if ( item.is_currency && item.parent_currency && owner == UserYou )
		{
			// this item is currency in a trade, display how much is being offered
			var rgContext = owner && owner.GetContext( item.appid, item.contextid );
			var oParams = {};
			oParams.amount = v_numberformat( item.amount );
			oParams.contextname = rgContext ? rgContext.name : '' ;
			oParams.currencystyle = description.name_color ? 'color: #' + description.name_color + ';' : '';
			elCurrencyInTradeDescriptor.update( HoverCurrencyFromTemplate.evaluate( oParams ) );
		}
	}

	
	var elTradeProtected = $( prefix + '_provisional_badge' );
	if ( elTradeProtected )
	{
		PopulateTradeProtected( elTradeProtected, description );
	}

	
	var elTags = $(prefix+'_item_tags');
	var elTagsContent = $(prefix+'_item_tags_content');
	if ( elTags && elTagsContent )
	{
		PopulateTags( elTags, elTagsContent, description.tags );
	}

	var elAssetProperties = $(prefix+'_item_asset_properties');
	var elAssetPropertiesContent = $(prefix+'_item_asset_properties_content');

	if ( elAssetProperties && elAssetPropertiesContent )
	{
		PopulateAssetProperties( elAssetProperties, elAssetPropertiesContent, item.asset_properties );
	}

	var elMarketActions = $(prefix+'_item_market_actions');
	if ( elMarketActions )
	{
		PopulateMarketActions( elMarketActions, item );
	}

	$(prefix).builtFor = item;
	$(prefix).builtForAmount = item.amount;
	$J(elHoverContent).trigger('v_contentschanged');
}

function PopulateDescriptions( elDescriptions, rgDescriptions )
{
	elDescriptions.update('');
	if ( !rgDescriptions || !rgDescriptions.length )
	{
		elDescriptions.hide();
		return;
	}

	elDescriptions.show();
	for ( var i = 0; i < rgDescriptions.length; i++ )
	{
		var description = rgDescriptions[i];
		if ( !description.value )
			continue;

		var strParsedDescription = v_trim( description.value.replace(/\[date\](\d*)\[\/date\]/g, function( match, p1 ) {
			var date = new Date( p1 * 1000 );
			return date.toLocaleString();
		}) );

		var elDescription = new Element( 'div', {'class': 'descriptor' } );
		if ( description.color )
			elDescription.style.color = '#' + description.color;

		if ( description.class )
			elDescription.classList.add( description.class );

		// just use a blank space for an empty string
		if ( strParsedDescription.length == 0 )
		{
			elDescription.update( '&nbsp;' );
		}
		else if ( description.type == 'image' )
		{
			var elImage = new Element( 'img', {src: v_trim( description.value ) } );
			elDescription.appendChild( elImage );
		}
		else if ( description.type == 'html' )
		{
			elDescription.update( strParsedDescription );
		}
		else
		{
			var strEscapedDescription = strParsedDescription.escapeHTML().replace( /\n/g, '<br>' );
			if ( description.type == 'usertext' )
			{
				if ( typeof(g_bViewingOwnProfile) == 'undefined' || !g_bViewingOwnProfile )
				{
					strEscapedDescription = '<strong>Custom description: </strong>' + strEscapedDescription;
				}
			}
									elDescription.update( strEscapedDescription );
		}

		if ( description.label )
		{
			var elLabel = new Element( 'span', {'class': 'descriptor_label' } );
			elLabel.update( description.label + ': ' );
			elDescription.insert( { top: elLabel } );
		}

		elDescriptions.appendChild( elDescription );
	}
}


function PopulateTradeProtected( elTradeProtected, description )
{
	if ( description.sealed )
	{
		$J( elTradeProtected ).show();
	}
	else
	{
		$J( elTradeProtected ).hide();
	}
}


function PopulateActions( prefix, elActions, rgActions, item, owner )
{
	elActions.update('');
	if ( !rgActions )
	{
		elActions.hide();
		return;
	}
	for ( var i = 0; i < rgActions.length; i++ )
	{
		var action = rgActions[i];
		if ( !action.link || !action.name )
			continue;

		var strLink = action.link.replace( "%assetid%", item.assetid );
		strLink = strLink.replace( "%contextid%", item.contextid );
		if ( owner )
		{
			if ( typeof owner == 'string' )
				strLink = strLink.replace( "%owner_steamid%", owner );
			else
				strLink = strLink.replace( "%owner_steamid%", owner.GetSteamId() );
		}

		// hack to handle "grind into goo" action
		if ( strLink.match( /^javascript:GetGooValue/ ) )
		{
			HandleGetGooValueAction( prefix, item, strLink );
			continue;
		}

		if ( strLink.match( /%owner_steamid%/ ) )
			continue;

		var elAction = new Element(
			'a',
			{
				'class': 'btn_small btn_grey_white_innerfade',
				href: strLink
			}
		);
		var elSpan = new Element( 'span' );
		elSpan.update( action.name );
		elAction.appendChild( elSpan );
		elActions.appendChild( elAction );
	}
	elActions.show();
}

function HandleGetGooValueAction( prefix, item, action )
{
	var elScrapActions = $(prefix+'_item_scrap_actions');
	var elScrapAmount = $(prefix+'_item_scrap_value');
	var elScrapLink = $(prefix+'_item_scrap_link');
	if ( elScrapActions && elScrapAmount && elScrapLink )
	{
		var rgMatches = action.match( /GetGooValue\( *'?([0-9]+)'? *, *'?([0-9]+)'? *, *'?([0-9]+)'? *, *'?([0-9]+)'? *, *'?([0-9]+)'?/ );

		if ( rgMatches )
		{
			PopulateScrapAction( elScrapActions, elScrapAmount, elScrapLink, item, rgMatches[3], rgMatches[4], rgMatches[5] );
		}
	}
}

function PopulateTags( elTags, elTagsContent, rgTags )
{
	elTagsContent.update('');
	if ( !rgTags )
	{
		elTags.hide();
		return;
	}

	var sTagList = "";
	for ( var i = 0; i < rgTags.length; i++ )
	{
		var tag = rgTags[i];
		if ( !tag.localized_tag_name )
			continue;

		if( sTagList != "" )
			sTagList += ", ";

		sTagList += tag.localized_tag_name;
	}

	if( sTagList != "" )
	{
		elTags.show();
		$J(elTagsContent).text( sTagList );
	}
	else
	{
		elTags.hide();
	}
}

function PopulateAssetProperties( elAssetProperties, elAssetPropertiesContent, asset_properties )
{
	elAssetPropertiesContent.update('');

	if ( !asset_properties )
	{
		elAssetProperties.hide();
		return;
	}

	var sAssetProperties = "";
	for ( var i = 0; i < asset_properties.length; i++ )
	{
		var property = asset_properties[i];

		if ( !Object.hasOwn( property, 'name' ) )
			continue;

		if ( sAssetProperties != "" )
			sAssetProperties += "<BR>";

		var sAssetProperty = "";

		sAssetProperty += property.name;
		sAssetProperty += ": ";

		if ( Object.hasOwn( property, 'float_value' ) )
		{
												var floatValue = parseFloat( property.float_value );
			var maxFractionDigits = 9;

			if ( floatValue > 0 )
			{
				if ( floatValue < 0.0000000000000000000000000001 )
					maxFractionDigits = 47;
				else if ( floatValue < 0.000000000000000001 )
					maxFractionDigits = 35;
				else if ( floatValue < 0.000000000001 )
					maxFractionDigits = 21;
				else if ( floatValue < 0.00001 )
					maxFractionDigits = 15;
			}

			sAssetProperty += floatValue.toLocaleString( undefined, { maximumFractionDigits: maxFractionDigits, } );
		}

		if ( Object.hasOwn( property, 'int_value' ) )
			sAssetProperty += property.int_value;

		if ( Object.hasOwn( property, 'string_value' ) )
		{
			continue;
		}

		sAssetProperties += sAssetProperty;
	}

	if ( sAssetProperties != "" )
	{
		elAssetProperties.show();
		$J(elAssetPropertiesContent).html( sAssetProperties );
	}
	else
	{
		elAssetProperties.hide();
	}
}

function CreateMarketActionButton( color, href, text )
{
	var elButton = new Element( 'a', {'class': 'item_market_action_button item_market_action_button_' + color, 'href': href } );
	var elButtonLeft = new Element( 'span', {'class' : 'item_market_action_button_edge item_market_action_button_left' } );
	var elButtonContents = new Element( 'span', {'class' : 'item_market_action_button_contents' } );
	var elButtonRight = new Element( 'span', {'class' : 'item_market_action_button_edge item_market_action_button_right' } );
	var elButtonPreload = new Element( 'span', {'class' : 'item_market_action_button_preload' } );

	elButtonContents.update( text );

	elButton.appendChild( elButtonLeft );
	elButton.appendChild( elButtonContents );
	elButton.appendChild( elButtonRight );
	elButton.appendChild( elButtonPreload );

	return elButton;
}

function PopulateScrapAction( elActions, elScrapAmount, elScrapLink, item, appid, item_type, border_color )
{
	// TODO!
	if ( item.appid != 753 || item.contextid != 6 || !appid || !item_type )
	{
		elActions.hide();
		return;
	}

	elScrapAmount.update( '' );
	elScrapLink.setAttribute( 'href', '#' );

	// this currently uses a per-user request getting the scrap value of the item for the specific user - so it doesn't get cached
	// would be better to use one based off the properties of the item, but we don't have the item_type and border_color handy here
	$J.ajax({
		url: 'https://steamcommunity.com' + '/auction/ajaxgetgoovalueforitemtype/',
		type: 'GET',
		data: {
			appid: appid,
			item_type: item_type,
			border_color: border_color
		},
		error: function() {
			elActions.hide();
		},
		success: function( response )
		{
			if ( response.goo_value && parseInt(response.goo_value) > 0 )
			{
				elScrapAmount.update( '%s Gems'.replace( /%s/, response.goo_value  ) );
				elScrapLink.setAttribute( 'href', 'javascript:GrindIntoGoo( ' + appid + ',' + item.contextid + ',\'' + item.assetid + '\' )' );
				elActions.show();
			}
			else
			{
				elActions.hide();
			}
			$J(elActions).trigger('v_contentschanged');
		}
	});
}

function PopulateMarketActions( elActions, item )
{
	var description = item.description;
	elActions.update('');
	if ( !description.marketable || ( item.is_currency && CurrencyIsWalletFunds( item ) ) || !g_bUseMarketLinks )
	{
		elActions.hide();
		return;
	}

	var bIsTrading = typeof( g_bIsTrading ) != 'undefined' && g_bIsTrading;

	if ( ( typeof(g_bViewingOwnProfile) != 'undefined' && g_bViewingOwnProfile ) || bIsTrading )
	{
		var strMarketName = GetMarketHashName( description );

		var elPriceInfo = new Element( 'div' );
		var elPriceInfoHeader = new Element ( 'div', { 'style': 'height: 24px;' } );

		var elMarketLink = new Element( 'a', {
			'href': 'https://steamcommunity.com/market/listings/' + item.appid + '/' + encodeURIComponent( strMarketName )
		} );
		elMarketLink.update( 'View in Community Market' );

		if ( bIsTrading )
			Steam.LinkInNewWindow( $J(elMarketLink) );

		elPriceInfoHeader.appendChild( elMarketLink );

		elPriceInfo.appendChild( elPriceInfoHeader );

		var elPriceInfoContent = new Element( 'div', { 'style': 'min-height: 3em; margin-left: 1em;' } );
		elPriceInfoContent.update( '<img src="https://community.fastly.steamstatic.com/public/images/login/throbber.gif" alt="Working...">' );
		elPriceInfo.appendChild( elPriceInfoContent );

		new Ajax.Request( 'https://steamcommunity.com/market/priceoverview/', {
			method: 'get',
			parameters: {
				country: g_strCountryCode,
				currency: typeof( g_rgWalletInfo ) != 'undefined' ? g_rgWalletInfo['wallet_currency'] : 1,
				appid: item.appid,
				market_hash_name: strMarketName
			},
			onSuccess: function( transport ) {
				if ( transport.responseJSON && transport.responseJSON.success )
				{
					var strInfo = '';
					if ( transport.responseJSON.lowest_price )
					{
						strInfo += 'Starting at: ' + transport.responseJSON.lowest_price + '<br>'
					}
					else
					{
						strInfo += 'There are no listings currently available for this item.' + '<br>';
					}

					if ( transport.responseJSON.volume )
					{
						var strVolume = '%1$s sold in the last 24 hours';
						strVolume = strVolume.replace( '%1$s', transport.responseJSON.volume );
						//strInfo += 'Median price: ' + transport.responseJSON.median_price + '<br>';
						strInfo += 'Volume: ' + strVolume + '<br>';
					}

					elPriceInfoContent.update( strInfo );
					$J(elActions).trigger('v_contentschanged');
				}
			},
			onFailure: function( transport ) { elPriceInfo.hide(); }
		} );

		elActions.appendChild( elPriceInfo );

		if ( !bIsTrading )
		{
			var elSellButton = CreateMarketActionButton('green', 'javascript:SellCurrentSelection()', 'Sell' );
			elActions.appendChild( elSellButton );
		}

		if ( !g_bMarketAllowed )
		{
			var elTooltip = $('market_tip_noaccess');
			InstallHoverTooltip( elSellButton, elTooltip );
		}
	}
		else
	{
		elActions.hide();
		return;
	}
	
	
	elActions.show();
}


function ShowItemHoverAsPopup( elNewInfo, fnOnDismiss )
{
	g_ActiveItemPopupModal && g_ActiveItemPopupModal.Dismiss();

	var $Info = $J(elNewInfo);
	$Info.show();
	$Info.css('opacity',1);

	var $Modal = $J('<div/>',{'class': 'newmodal economy_modal_ctn'});
	var $PopupCtn = $J('<div/>', {'class': 'economy_item_popup' } );
	var $Scroll = $J('<div/>', {'class' : 'economy_item_popup_scroll'} );
	var $DismissBtn = $J('<div/>', {'class': 'economy_item_popup_dismiss'} ).text('X');

	$PopupCtn.append( $Scroll.append( $Info ) );
	$PopupCtn.append( $DismissBtn );

	g_ActiveItemPopupModal = new CModal( $Modal.append( $PopupCtn ) );
	g_ActiveItemPopupModal.SetRemoveContentOnDismissal( true );
	g_ActiveItemPopupModal.Show();
	$DismissBtn.click( function() { g_ActiveItemPopupModal.Dismiss(); } );


	if ( g_ActiveItemPopupModal.m_fnBackgroundClick )
	{
		$Modal.add($Scroll).click( function(e) { if ( e.target == this && g_ActiveItemPopupModal ) g_ActiveItemPopupModal.m_fnBackgroundClick(); } );

	}
	g_ActiveItemPopupModal.OnDismiss( fnOnDismiss );
}

function SellCurrentSelection()
{
	if ( !g_bMarketAllowed )
		return;

	if ( g_rgWalletInfo['wallet_currency'] == 0 )
	{
		MessageDialog.Show(
			'You cannot sell items in the Community Market until you <a href="https://store.steampowered.com/steamaccount/addfunds" target="_top">add funds to your Steam Wallet</a> or make a purchase in the Steam store and provide your billing address.',
			'Cannot sell item'
		);
	}
	else
	{
		SellItemDialog.Show( g_ActiveInventory.selectedItem );
	}
}

MessageDialog = {
	m_bInitialized: false,

	Initialize: function() {
		$('market_message_dialog_accept').observe( 'click', this.OnAccept.bindAsEventListener(this) );
		$('market_message_dialog_close').observe( 'click', this.OnAccept.bindAsEventListener(this) );

		this.m_bInitialized = true;
	},

	Show: function ( strMessage, strTitle ) {

		if ( !this.m_bInitialized )
			this.Initialize();

		$('market_message_dialog_title').innerHTML = strTitle;
		$('market_message_dialog_message').innerHTML = strMessage;
		showModal( 'market_message_dialog', true );
	},

	Dismiss: function() {
		$(document).stopObserving( 'keydown', this.m_fnDocumentKeyHandler );
		hideModal( 'market_message_dialog' );
	},

	OnAccept: function( event ) {
		event.stop();
		this.Dismiss();
	}
};

function SSAPopup()
{
		var win = window.open( 'https://store.steampowered.com/checkout/ssapopup','steam_ssa','width=536,height=546,resize=yes,scrollbars=yes');
	win.focus();
}

SellItemDialog = {
	m_bInitialized: false,
	m_bWaitingForUserToConfirm: false,
	m_bWaitingOnServer: false,
	m_nConfirmedPrice: 0,
	m_nConfirmedQuantity: 0,
	m_item: null,
	m_strEscapedName: '',
	m_fnDocumentKeyHandler: null,

	m_plotPriceHistory: null,
	m_timePriceHistoryEarliest: new Date(),
	m_timePriceHistoryLatest: new Date(),

	m_modal: null,
	m_elDialogContent: null,

	Initialize: function() {
		$('market_sell_dialog_accept').observe( 'click', this.OnAccept.bindAsEventListener(this) );
		if ( $('market_sell_dialog_cancel') ) $('market_sell_dialog_cancel').observe( 'click', this.OnCancel.bindAsEventListener(this) );
		$('market_sell_dialog_ok').observe( 'click', this.OnConfirmationAccept.bindAsEventListener(this) );
		$('market_sell_dialog_back').observe( 'click', this.OnConfirmationBack.bindAsEventListener(this) );
		$('market_sell_quantity_input').observe( 'keypress', this.OnInputKeyPress.bindAsEventListener(this) );
		$('market_sell_quantity_input').observe( 'keyup', this.OnInputKeyUp.bindAsEventListener(this) );
		$('market_sell_currency_input').observe( 'keypress', this.OnInputKeyPress.bindAsEventListener(this) );
		$('market_sell_currency_input').observe( 'keyup', this.OnInputKeyUp.bindAsEventListener(this) );
		$('market_sell_buyercurrency_input').observe( 'keypress', this.OnInputKeyPress.bindAsEventListener(this) );
		$('market_sell_buyercurrency_input').observe( 'keyup', this.OnBuyerPriceInputKeyUp.bindAsEventListener(this) );

		$('market_sell_dialog').style.visibility = 'hidden';
		$('market_sell_dialog').show();
		// TODO: Slider
		$('market_sell_dialog').hide();
		$('market_sell_dialog').style.visibility = '';

		// hold a reference to prevent it form getting removed
		this.m_elDialogContent = $('market_sell_dialog');

		this.m_bInitialized = true;
	},

	Show: function ( item ) {

		if ( !this.m_bInitialized )
			this.Initialize();

		this.m_bWaitingForUserToConfirm = false;
		this.m_nConfirmedPrice = 0;
		this.m_nConfirmedQuantity = 0;

		$('market_sell_quantity_input').style.borderColor = '';
		$('market_sell_currency_input').style.borderColor = '';
		$('market_sell_buyercurrency_input').style.borderColor = '';
		$('market_sell_dialog_error').hide();

		$('market_sell_dialog_title').update( 'Put an item up for sale' );
		//$('market_sell_dialog_background').show();
		$('market_sell_dialog_item_availability_hint').hide();
		$('market_sell_dialog_confirm_buttons').hide();

		$('market_sell_dialog_accept').style.cursor = '';
		$('market_sell_dialog_accept').style.opacity = 1;

		$('market_sell_quantity_input').style.borderColor = '';
		$('market_sell_quantity_input').style.backgroundColor = '';
		$('market_sell_currency_input').style.borderColor = '';
		$('market_sell_currency_input').style.backgroundColor = '';
		$('market_sell_buyercurrency_input').style.borderColor = '';
		$('market_sell_buyercurrency_input').style.backgroundColor = '';

		$('market_sell_quantity_input').enable();
		$('market_sell_currency_input').enable();
		$('market_sell_buyercurrency_input').enable();
		$('market_sell_dialog_accept_ssa').enable();

		$('market_sell_dialog_ok').show();
		$('market_sell_dialog_ok').style.cursor = '';
		$('market_sell_dialog_ok').style.opacity = 1;
		$('market_sell_dialog_back').show();
		$('market_sell_dialog_back').style.cursor = '';
		$('market_sell_dialog_back').style.opacity = 1;
		$('market_sell_dialog_throbber').hide();

		this.m_item = item;
		var description = item.description;

		var elItem = $('market_sell_dialog_item');
		if ( description.name_color )
			elItem.style.borderColor = '#' + description.name_color;
		if ( description.background_color )
			elItem.style.backgroundColor = '#' + description.background_color;

		var elItemImage = $('market_sell_dialog_item_img');
		if ( item.is_stackable )
			elItemImage.src = ImageURL( description.icon_url, '96f', '58f' );
		else
			elItemImage.src = ImageURL( description.icon_url, '96f', '96f' );

		this.m_strEscapedName = GetEscapedNameForItem( item );
		$('market_sell_dialog_item_name').update( description.name.escapeHTML() );
		$('market_sell_quantity_available_amt').update( item.amount );

		if ( description.name_color )
		{
			$('market_sell_dialog_item_name').style.color = '#' + description.name_color;
		}
		else
		{
			$('market_sell_dialog_item_name').style.color = '';
		}

		if ( item.appid && g_rgAppContextData[item.appid] )
		{
			var rgAppData = g_rgAppContextData[item.appid];
			$('market_sell_dialog_game_icon').src = rgAppData.icon;
			$('market_sell_dialog_game_icon').alt = rgAppData.name;

							$JFromIDOrElement('market_sell_dialog_game_name').text( rgAppData.name );
			
			$J('#market_sell_dialog_item_type').text( description.type );
			$('market_sell_dialog_game_info').show();
		}
		else
		{
			$('market_sell_dialog_game_info').hide();
		}

		if ( item.amount == 1 )
		{
			$('market_sell_quantity_input').disable();

			$('market_sell_quantity_label').hide();
			$('market_sell_quantity_input').hide();
			$('market_sell_quantity_available').hide();
			$('market_sell_dialog_total_youreceive' ).hide();
		}
		else
		{
			$('market_sell_quantity_label').show();
			$('market_sell_quantity_input').show();
			$('market_sell_quantity_available').show();
			$('market_sell_dialog_total_youreceive' ).show();
		}

		this.m_fnDocumentKeyHandler = this.OnDocumentKeyPress.bindAsEventListener( this );
		$(document).observe( 'keydown', this.m_fnDocumentKeyHandler );

		var currencyCode = GetCurrencyCode( g_rgWalletInfo['wallet_currency'] );
		$('market_sell_quantity_input').value = 1;
		$('market_sell_currency_input').value = GetCurrencySymbol( currencyCode );
		$('market_sell_buyercurrency_input').value = GetCurrencySymbol( currencyCode );
		$('market_sell_dialog_total_youreceive_amount').update( GetCurrencySymbol( currencyCode ) );

		var $elDialogContent = $J(this.m_elDialogContent);
		this.m_modal = new CModal( $elDialogContent );
		this.m_modal.Show();
		this.m_modal.SetMaxWidth( $elDialogContent.width() );

		var _this = this;
		$J(this.m_elDialogContent).find('.newmodal_close' ).click( function() { _this.m_modal.m_fnBackgroundClick(); } );


		$J('#market_sell_currency_input' ).one( 'focus', function() {
			// move the caret to the correct spot
			var oPriceInput = $('market_sell_currency_input');
			if ( oPriceInput.setSelectionRange )
			{
				if ( IsCurrencySymbolBeforeValue( currencyCode ) )
				{
					// move the caret to the end
					var length = oPriceInput.value.length;
					oPriceInput.setSelectionRange( length, length );
				}
				else
				{
					// caret to the beginning
					oPriceInput.setSelectionRange( 0, 0 );
				}
			}
			else
			{
				var oldval = oPriceInput.value;
				oPriceInput.value = '';
				oPriceInput.value = oldval;
			}
		} );

		// don't give focus on touch devices - the keyboard appears and will either
		//	overlap the actual box with focus or scroll the dialog off screen
		if ( !window.UseTouchFriendlyMode || !window.UseTouchFriendlyMode() )
			$('market_sell_currency_input').focus();

		// Load price history
		$J('#pricehistory_container').show();
		$J('#pricehistory').hide();
		$J('#pricehistory_throbber').show();
		$J('#pricehistory_notavailable').hide();
		new Ajax.Request( 'https://steamcommunity.com/market/pricehistory/', {
			method: 'get',
			parameters: {
				appid: this.m_item.appid,
				market_hash_name: GetMarketHashName( description )
			},
			onSuccess: function( transport ) { SellItemDialog.OnPriceHistorySuccess( transport ); },
			onFailure: function( transport ) { SellItemDialog.OnPriceHistoryFailure( transport ); }
		} );
	},

	OnPriceHistorySuccess: function( transport ) {
		$J('#pricehistory_throbber').hide();
		if ( transport.responseJSON && transport.responseJSON.success && transport.responseJSON.prices.length > 0 )
		{
			$J('#pricehistory').show();

			var line1 = transport.responseJSON.prices;

			this.m_timePriceHistoryEarliest = new Date();
			if ( line1 != false )
			{
				this.m_timePriceHistoryEarliest = new Date(line1[0][0]);
				this.m_timePriceHistoryLatest = new Date(line1[line1.length-1][0]);
			}

			var strFormatPrefix = transport.responseJSON.price_prefix;
			var strFormatSuffix = transport.responseJSON.price_suffix;

			this.m_plotPriceHistory = CreatePriceHistoryGraph( line1, 5, strFormatPrefix, strFormatSuffix );

			pricehistory_zoomMonthOrLifetime( this.m_plotPriceHistory, this.m_timePriceHistoryEarliest, this.m_timePriceHistoryLatest );
		}
		else
		{
			$J('#pricehistory_notavailable').show();
		}
	},

	OnPriceHistoryFailure: function( transport ) {
		$J('#pricehistory_throbber').hide();
		$J('#pricehistory_notavailable').show();
	},

	DisplayError: function( error ) {
		$('market_sell_dialog_error').show();
		$('market_sell_dialog_error').update( error );
		$('market_sell_dialog_error').style.color = '#ffffff';
		new Effect.Morph( $('market_sell_dialog_error'), { style: {color: '#ff0000'}, duration: 0.25 } );
	},

	Dismiss: function() {
		$(document).stopObserving( 'keydown', this.m_fnDocumentKeyHandler );
		if ( this.m_modal )
			this.m_modal.Dismiss();
	},

	GetPriceAsInt: function() {
		return GetPriceValueAsInt( $('market_sell_currency_input').value );
	},

	GetBuyerPriceAsInt: function() {
		return GetPriceValueAsInt( $('market_sell_buyercurrency_input').value );
	},

	GetQuantityAsInt: function() {
		var nAmount;
		var strAmount = $('market_sell_quantity_input').value;

		if ( !strAmount )
		{
			return 0;
		}

		strAmount = strAmount.replace( /[,.]/g, '' );
		if ( !strAmount || strAmount.length == 0 )
		{
			return 0;
		}

		nAmount = parseInt( strAmount );
		if ( isNaN( nAmount ) )
		{
			return 0;
		}

		return nAmount;
	},

	OnAccept: function( event ) {
		event.stop();

		// If already accepted, ignore
		if ( this.m_bWaitingForUserToConfirm )
		{
			return;
		}

				if ( !$('market_sell_dialog_accept_ssa') || !$('market_sell_dialog_accept_ssa').checked )
		{
			this.DisplayError( 'You must agree to the terms of the Steam Subscriber Agreement to sell this item.' );
			return;
		}

		var price = this.GetPriceAsInt();
		var buyerPrice = this.GetBuyerPriceAsInt();
		var quantity = this.GetQuantityAsInt();

		if ( quantity < 1 || quantity > this.m_item.amount )
		{
			$('market_sell_quantity_input').style.borderColor = 'red';
			this.DisplayError( 'You must enter a valid quantity.' );
			return;
		}

		$('market_sell_currency_input').value = v_currencyformat( price, GetCurrencyCode( g_rgWalletInfo['wallet_currency'] ) );
		this.OnInputKeyUp( null );

		this.RecalculateTotal( price, quantity );
		$( 'market_sell_quantity_input' ).value = quantity;

		// If the price entered exceeds the maximum allowed, prevent the sale.
		if ( buyerPrice > g_rgWalletInfo['wallet_trade_max_balance'] || price > g_rgWalletInfo['wallet_trade_max_balance'] )
		{
			$('market_sell_buyercurrency_input').style.borderColor = 'red';
			if ( price > g_rgWalletInfo['wallet_trade_max_balance'] )
			{
				$('market_sell_currency_input').style.borderColor = 'red';
			}

			var strError = ' The price entered exceeds the maximum price of %1$s.'
				.replace( '%1$s', v_currencyformat( g_rgWalletInfo['wallet_trade_max_balance'], GetCurrencyCode( g_rgWalletInfo['wallet_currency'] ) ) );
			this.DisplayError( strError );
			return;
		}

		var nFloor = parseInt( g_rgWalletInfo[ 'wallet_market_minimum' ] ?? 1 );
		if ( price <= 0 || buyerPrice <= 0 || price < nFloor || buyerPrice < ( 3 * nFloor ) )
		{
			$('market_sell_currency_input').style.borderColor = 'red';
			this.DisplayError( 'You must enter a valid price.' );
			var strError = 'The minimum per-unit price is %price%.';
			this.DisplayError( strError.replace( '%price%', v_currencyformat( nFloor, GetCurrencyCode( g_rgWalletInfo['wallet_currency'] ) ) ) )
			return;
		}

		// validation succeeded
		this.m_bWaitingForUserToConfirm = true;

		$('market_sell_quantity_input').style.borderColor = '';
		$('market_sell_currency_input').style.borderColor = '';
		$('market_sell_buyercurrency_input').style.borderColor = '';
		$('market_sell_dialog_error').hide();

		$('market_sell_dialog_title').update( 'Confirm sell price' );
		//$('market_sell_dialog_background').fade({ duration: 0.25 });
		new Effect.BlindDown( 'market_sell_dialog_item_availability_hint', { duration: 0.25 } );
		new Effect.BlindDown( 'market_sell_dialog_confirm_buttons', { duration: 0.25 } );
		new Effect.BlindUp( 'pricehistory_container', { duration: 0.25 } );

		// Hide the button
		$('market_sell_dialog_accept').style.cursor = 'default';
		new Effect.Morph( 'market_sell_dialog_accept', { style: 'opacity:0', duration: 0.25 } );
		new Effect.Morph( 'market_sell_quantity_input', { style: 'border-color: #262626; background-color: #262626', duration: 0.25 } );
		new Effect.Morph( 'market_sell_currency_input', { style: 'border-color: #262626; background-color: #262626', duration: 0.25 } );
		new Effect.Morph( 'market_sell_buyercurrency_input', { style: 'border-color: #262626; background-color: #262626', duration: 0.25 } );

		$('market_sell_quantity_input').disable();
		$('market_sell_currency_input').disable();
		$('market_sell_buyercurrency_input').disable();
		$('market_sell_dialog_accept_ssa').disable();

		this.m_nConfirmedPrice = price;
		this.m_nConfirmedQuantity = quantity;
	},

	OnCancel: function( event ) {
		this.Dismiss();
		event.stop();
	},

	OnConfirmationAccept: function( event ) {
		if ( this.m_bWaitingOnServer )
		{
			event.stop();
			return;
		}

		this.m_bWaitingOnServer = true;

		$('market_sell_dialog_error').hide();

		$('market_sell_dialog_ok').fade({ duration: 0.25 });
		$('market_sell_dialog_back').fade({ duration: 0.25 });
		$('market_sell_dialog_throbber').show();
		$('market_sell_dialog_throbber').fade({ duration: 0.25, from: 0, to: 1 });

		$J.ajax( {
			url: 'https://steamcommunity.com/market/sellitem/',
			type: 'POST',
			data: {
				sessionid: g_sessionID,
				appid: this.m_item.appid,
				contextid: this.m_item.contextid,
				assetid: this.m_item.assetid,
				amount: this.m_nConfirmedQuantity,
				price: this.m_nConfirmedPrice
			},
			crossDomain: true,
			xhrFields: { withCredentials: true }
		} ).done( function ( data ) {
			if ( data.success )
			{
				SellItemDialog.OnSuccess( { responseJSON: data } );
			}
			else
			{
				SellItemDialog.OnFailure( { responseJSON: data } );
			}
		} ).fail( function( jqxhr ) {
			// jquery doesn't parse json on fail
			var data = $J.parseJSON( jqxhr.responseText );
			SellItemDialog.OnFailure( { responseJSON: data } );
		} );

		event.stop();
	},

	OnConfirmationBack: function( event ) {
		if ( this.m_bWaitingOnServer )
		{
			event.stop();
			return;
		}

		this.m_bWaitingForUserToConfirm = false;

		// reverse the effects
		$('market_sell_dialog_title').update( 'Put an item up for sale' );

		var item = this.m_item;

		//$('market_sell_dialog_background').fade({ duration: 0.25, from: 0, to: 1 });
		new Effect.BlindUp( 'market_sell_dialog_item_availability_hint', { duration: 0.25 } );
		new Effect.BlindUp( 'market_sell_dialog_confirm_buttons', { duration: 0.25 } );
		new Effect.BlindDown( 'pricehistory_container', { duration: 0.25 } );
		new Effect.Morph( 'market_sell_dialog_accept', { style: 'opacity:1', duration: 0.25 } );
		new Effect.Morph( 'market_sell_quantity_input', { style: 'border-color: #707070; background-color: #1A1A1A', duration: 0.25 } );
		new Effect.Morph( 'market_sell_currency_input', { style: 'border-color: #707070; background-color: #1A1A1A', duration: 0.25 } );
		new Effect.Morph( 'market_sell_buyercurrency_input', { style: 'border-color: #707070; background-color: #1A1A1A', duration: 0.25 } );

		$('market_sell_dialog_accept').style.cursor = '';

		$('market_sell_dialog_accept_ssa').enable();
		$('market_sell_currency_input').enable();
		$('market_sell_buyercurrency_input').enable();
		if ( item.amount != 1 )
		{
			$('market_sell_quantity_input').enable();
		}

		event.stop();
	},

	OnSuccess: function( transport ) {
		this.m_bWaitingForUserToConfirm = false;
		this.m_bWaitingOnServer = false;

		if ( transport.responseJSON )
		{
			this.Dismiss();

			var idNameShow = ( transport.responseJSON.requires_confirmation ? '_pending' : '' );
			var idNameHide = ( transport.responseJSON.requires_confirmation ? '' : '_pending' );

			new Effect.BlindUp( 'market_headertip_itemsold' + idNameHide, { duration: 0.0 } );

			if ( this.m_nConfirmedQuantity > 1 )
			{
				$( 'market_headertip_itemsold_itemname'+idNameShow ).update( v_numberformat( this.m_nConfirmedQuantity ) + ' ' + this.m_item.description.name.escapeHTML() );
			}
			else
			{
				$( 'market_headertip_itemsold_itemname'+idNameShow ).update( this.m_item.description.name.escapeHTML() );
			}

			if ( this.m_item.description.name_color )
			{
				$('market_headertip_itemsold_itemname'+idNameShow).style.color = '#' + this.m_item.description.name_color;
			}
			else
			{
				$('market_headertip_itemsold_itemname'+idNameShow).style.color = '';
			}

			new Effect.BlindDown( 'market_headertip_itemsold'+idNameShow, { duration: 0.25 } );

			if ( transport.responseJSON.requires_confirmation )
			{
				var bNeedsEmailConfirmation = transport.responseJSON.needs_email_confirmation;
				var bNeedsMobileConfirmation = transport.responseJSON.needs_mobile_confirmation;

				var strText = '';
				if ( bNeedsMobileConfirmation )
				{
					strText = 'In order to list this item on the Community Market, you must verify the listing in your Steam Mobile app. You can verify it by launching the app and navigating to the Confirmations page from the menu.' +
						'<br><br>' +
						'If you don\'t see the Confirmations option in the main menu of the app, then make sure you have the latest version of the app.';

				}
				else
				{
					strText = 'In order to list this item on the Community Market, you must complete an additional verification step.  An email has been sent to your address (ending in "%s") with additional instructions.'.replace( /%s/, transport.responseJSON.email_domain );
				}

				ShowAlertDialog(
					'Additional confirmation needed',
					strText
				);
			}
			else
			{
				UserYou.ReloadInventory( this.m_item.appid, this.m_item.contextid, this.m_item.assetid );
			}
		}
		else
		{
			this.DisplayError( 'There was a problem listing your item. Refresh the page and try again.' );
		}
	},

	OnFailure: function( transport ) {
		this.m_bWaitingOnServer = false;

		var queue = Effect.Queues.get('global');
		queue.each(function(effect) { effect.cancel(); });

		$('market_sell_dialog_ok').show();
		$('market_sell_dialog_ok').setOpacity('0');
		$('market_sell_dialog_ok').fade({ duration: 0.25, from: 0, to: 1 });
		$('market_sell_dialog_back').show();
		$('market_sell_dialog_back').setOpacity('0');
		$('market_sell_dialog_back').fade({ duration: 0.25, from: 0, to: 1 });
		$('market_sell_dialog_throbber').fade({ duration: 0.25 });

		if ( transport.responseJSON && transport.responseJSON.message )
		{
			this.DisplayError( transport.responseJSON.message );
		}
		else
		{
			this.DisplayError( 'There was a problem listing your item. Refresh the page and try again.' );
		}
	},

	OnDocumentKeyPress: function( event ) {
		if ( event.keyCode == Event.KEY_ESC )
		{
			this.Dismiss();
			event.stop();
		}
	},

	OnInputKeyPress: function( event ) {
		if ( event.keyCode == Event.KEY_RETURN )
		{
			if ( this.m_bWaitingForUserToConfirm )
			{
				this.OnConfirmationAccept( event );
			}
			else
			{
				this.OnAccept( event );
			}
		}
	},

	HighlightPrices: function() {
		var nPrice = this.GetPriceAsInt();
		var nFloor = parseInt( g_rgWalletInfo[ 'wallet_market_minimum' ] ?? 1 );

		if ( nPrice < nFloor )
		{
			$J('#market_sell_currency_input').css("color", "#ff6464" );
		}
		else
		{
			$J('#market_sell_currency_input').css("color", "");
		}
	},

	OnInputKeyUp: function( event ) {
		var inputValue = this.GetPriceAsInt();
		var nAmount = inputValue;
		var quantity = this.GetQuantityAsInt();

		if ( inputValue > 0 && nAmount == parseInt( nAmount ) )
		{
			var ppct = parseFloat( g_rgWalletInfo[ 'wallet_publisher_fee_percent_default' ] ?? 0.10 );
			var spct = parseFloat( g_rgWalletInfo[ 'wallet_fee_percent' ] ?? 0.05 );
			var nTotalUnitPrice = GetTotalWithFees( nAmount, ppct, spct, g_rgWalletInfo );

			$('market_sell_buyercurrency_input').value = v_currencyformat( nTotalUnitPrice, GetCurrencyCode( g_rgWalletInfo['wallet_currency'] ) );

			this.RecalculateTotal( nAmount, quantity );
		}
	},

	OnBuyerPriceInputKeyUp: function( event ) {
		var inputValue = this.GetBuyerPriceAsInt();
		var nAmount = inputValue;
		var quantity = this.GetQuantityAsInt();

		if ( inputValue > 0 && nAmount == parseInt( nAmount ) )
		{
			var nItemPrice = GetItemPriceFromTotal( nAmount, g_rgWalletInfo );
			$('market_sell_currency_input').value = v_currencyformat( nItemPrice, GetCurrencyCode( g_rgWalletInfo['wallet_currency'] ) );

			this.RecalculateTotal( nAmount, quantity );
		}
	},

	RecalculateTotal: function( nAmount, quantity ) {
		if ( quantity > 0 )
		{
			$( 'market_sell_dialog_total_youreceive_amount' ).update( v_currencyformat( nAmount * quantity,
				GetCurrencyCode( g_rgWalletInfo['wallet_currency'] )
			) );
			this.HighlightPrices();
		}
		else
		{
			$( 'market_sell_dialog_total_youreceive_amount' ).update( GetCurrencySymbol( GetCurrencyCode( g_rgWalletInfo['wallet_currency'] ) ) );
		}
	}
};

function ShowHover( elem, item )
{
	var hover = $('hover');
	if ( hover.target != elem || hover.builtFor != item || hover.builtForAmount != item.amount )
	{
		if ( hover.target )
			hover.target.removeClassName('hover');

		BuildHover( 'hover', item );
		hover.target = elem;
	}

	var divHoverContents = hover.down( '.hover_box' );

	hover.style.visibility = 'hidden';
	hover.show();

	hover.clonePosition( elem, {setWidth: false, setHeight: false} );
	var hover_box = hover.down( '.hover_box' );
	var hover_arrow_left = hover.down( '.hover_arrow_left' );
	var hover_arrow_right = hover.down( '.hover_arrow_right' );


	var hover_arrow = hover_arrow_left;

	var nHoverHorizontalPadding = (hover_arrow ? -4 : 8);
	var boxRightViewport = elem.viewportOffset().left + parseInt( elem.getDimensions().width ) + hover_box.getWidth() + ( 24 - nHoverHorizontalPadding );
	var nSpaceRight = document.viewport.getWidth() - boxRightViewport;
	var nSpaceLeft = parseInt( hover.style.left ) - hover.getWidth();
	if ( boxRightViewport > document.viewport.getWidth() && nSpaceLeft > nSpaceRight)
	{
				hover.style.left = ( parseInt( hover.style.left ) - hover.getWidth() + nHoverHorizontalPadding ) + 'px';
		hover_arrow = hover_arrow_right;
	}
	else
	{
				hover.style.left = ( parseInt( hover.style.left ) + parseInt( elem.getDimensions().width ) - nHoverHorizontalPadding ) + 'px';
	}

	if ( hover_arrow )
	{
		hover_arrow_left.hide();
		hover_arrow_right.hide();
		hover_arrow.show();
	}

	var nTopAdjustment = 0;

			if ( elem.getDimensions().height < 98 )
		nTopAdjustment =  elem.getDimensions().height / 2 - 49;
	hover.style.top = ( ( parseInt( hover.style.top ) - 13 ) + nTopAdjustment ) + 'px';

	var boxTopViewport = elem.viewportOffset().top + nTopAdjustment;
	if ( boxTopViewport + hover_box.getHeight() + 8 > document.viewport.getHeight() )
	{
		var nViewportAdjustment = ( hover_box.getHeight() + 8 ) - ( document.viewport.getHeight() - boxTopViewport );
				nViewportAdjustment = Math.min( hover_box.getHeight() - 74, nViewportAdjustment );
		hover.style.top = ( parseInt( hover.style.top ) - nViewportAdjustment ) + 'px';

		if ( hover_arrow )
			hover_arrow.style.top = ( 48 + nViewportAdjustment ) + 'px';
	}
	else
	{
		if ( hover_arrow )
			hover_arrow.style.top = '';
	}

	hover.hide();
	hover.style.visibility = '';

	ShowWithFade( hover );
}

function HideHover()
{
	var hover = $('hover');

	if ( !hover.visible() || !hover.target )
		return;

	hover.target.removeClassName('hover');

	HideWithFade( hover );
}

function InventoryDismissPurchaseMessage()
{
	new Effect.BlindUp( $('economy_popup_msg'), {duration: 0.25} );
}


var Filter = {

	strLastFilter: '',
	elFilter: null,
	rgLastTags: {},
	rgCurrentTags: {},
	FILTER_ASSETS_PER_LOAD: 5000,

	InitFilter: function( elFilter )
	{
		this.strLastFilter = '';
		this.elFilter = elFilter;

		elFilter.observe( 'keyup', this.OnFilterChange.bind( this ) );
		elFilter.observe( 'blur', this.OnFilterChange.bind( this ) );
		elFilter.observe( 'click', this.OnFilterChange.bind( this ) );
		elFilter.observe( 'paste', this.FilterOnPaste.bind( this ) );
		elFilter.observe( 'cut', this.FilterOnPaste.bind( this ) );
		$('filter_clear_btn').observe( 'click', this.ClearTextFilter.bind( this ) );
	},

	ClearTextFilter: function()
	{
		if ( this.elFilter.value != '' )
		{
			this.elFilter.value = '';
			this.OnFilterChange();
		}
	},

	ClearFilter: function()
	{
		this.elFilter.value = '';
		this.rgLastTags = this.rgCurrentTags;
		this.rgCurrentTags = {};
		this.OnFilterChange();
	},

	FilterOnPaste: function( event )
	{
		this.OnFilterChange.bind(this).defer();
	},

	OnFilterChange: function()
	{
		this.ApplyFilter( this.elFilter.value );
	},

	ReApplyFilter: function()
	{
		/* erase the filter so visibilty will be recalculated - should store last filter at inventory level */
		if ( g_ActiveInventory.bFilterApplied && this.strLastFilter.length == 0 )
		{
			this.strLastFilter = this.elFilter.value && this.elFilter.value[0] == 'x' ? 'y' : 'x';
			this.ApplyFilter( this.elFilter.value );
		}
		else
		{
			this.strLastFilter = '';
			this.ApplyFilter( this.elFilter.value );
		}
	},

	UpdateTagFiltering: function( rgNewTags )
	{
		this.rgLastTags = this.rgCurrentTags;
		this.rgCurrentTags = rgNewTags;
		this.ApplyFilter( this.elFilter.value );
	},

	OnMoreInventoryLoaded: function()
	{
		if ( Filter.elFilter.value != '' )
			Filter.ReApplyFilter();
	},

	ApplyFilter: function( filterValue, elInsertedItem )
	{
		if ( !g_ActiveInventory || g_ActiveInventory.BIsEmptyInventory() )
			return;

		var bInventoryFullyLoaded = g_ActiveInventory.BIsFullyLoaded();

		var filter = v_trim( filterValue );

		if( filter == this.strLastFilter && !Object.values( this.rgCurrentTags ).length && !Object.values( this.rgLastTags ).length )
			return;

		var bRestricting = true;
		var bLoosening = true;
		if ( elInsertedItem )
			bRestricting = bLoosening = false;

		// if it's the text filter that changed, turn on the loosening/restricting optimization
		if ( filter != this.strLastFilter )
		{
			if ( this.strLastFilter && this.strLastFilter.startsWith( filter ) )
				bRestricting = false;
			else if ( !this.strLastFilter || filter.startsWith( this.strLastFilter ) )
				bLoosening=false;
		}

		this.strLastFilter = filter;

		var rgTerms = filter.length ? filter.split( ' ' ) : false;
		for( var i = 0; i < rgTerms.length; i++ )
		{
			// wrap each string in a case-insensitive regexp (using prototype's escape function)
			rgTerms[i] = new RegExp( RegExp.escape( rgTerms[i] ), 'i' );
		}

		var rgTags = Object.values( this.rgCurrentTags ).length ? this.rgCurrentTags : null;

		var bDisplayAll = !rgTerms && !rgTags;

		var rgPages = g_ActiveInventory.m_rgPages;
		var rgForwardInserts = { };
		var cElementsDisplayed = 0;
		for (var iPage = 0; iPage < rgPages.length; iPage++ )
		{
			var $Page = rgPages[iPage].GetElement();
			var iCarryoverInserts = 0;

			if ( rgForwardInserts[iPage] )
			{
				// new items became visible on the first page, pushing some items on to this page
				for( var i = rgForwardInserts[iPage].length - 1; i >=0; i-- )
				{
					$Page.prepend( rgForwardInserts[iPage][i] );
					iCarryoverInserts++;
				}
				//we mucked with elements, check for images again
				rgPages[iPage].m_bImagesLoaded = false;
			}

			var rgChildren = $Page.children();
			var bPageMissingItems = false;
			for ( var iChild = 0; iChild < rgChildren.length; iChild++ )
			{
				// skip any items that were pushed on to this page from the previous page - they've already been processed
				if ( iCarryoverInserts > 0 )
				{
					iCarryoverInserts--;
					continue;
				}

				var elItemHolder = rgChildren[iChild];
				var elItem = elItemHolder.firstChild;

				// not loaded yet
				if ( !elItem || !elItem.rgItem  )
				{
					bPageMissingItems = true;
					break;
				}

				var bVisible = !elItemHolder.filtered;
				if ( bVisible && bRestricting )
				{
					var bHide = !this.MatchItem( elItem, rgTerms, rgTags );
					if ( bHide )
					{
						$J(elItemHolder).hide();
						elItemHolder.filtered = true;
					}
				}
				else if ( !bVisible && ( bLoosening || elInsertedItem && elItem == elInsertedItem ) )
				{
					var bShow = bDisplayAll || this.MatchItem( elItem, rgTerms, rgTags );
					if ( bShow )
					{
						$J(elItemHolder).show();
						elItemHolder.filtered=false;
					}
				}

				if ( !elItemHolder.filtered )
					cElementsDisplayed++;

				var iCorrectPage = Math.floor( (cElementsDisplayed > 0 ? cElementsDisplayed - 1 : 0 ) / INVENTORY_PAGE_ITEMS );
				if ( iCorrectPage != iPage )
				{
					if ( iCorrectPage > iPage )
					{
						if ( !rgForwardInserts[iCorrectPage] )
							rgForwardInserts[iCorrectPage] = [];
						rgForwardInserts[iCorrectPage].push( elItemHolder );
					}
					else
					{
						rgPages[iCorrectPage].GetElement().append( elItemHolder );
						rgPages[iCorrectPage].m_bImagesLoaded = false;
					}
				}
			}

			if ( bPageMissingItems )
				break;
		}

		// blue border around filtered items
		if ( filter.length || Object.values( this.rgCurrentTags ).length )
		{
			$('inventories').addClassName( 'filtered' );
			g_ActiveInventory.bFilterApplied = true;
		}
		else
		{
			$('inventories').removeClassName( 'filtered' );
			g_ActiveInventory.bFilterApplied = false;
		}

		// blue border around the text box
		if( filter.length )
		{
			if( $('filter_control') )
			{
				$('filter_control').addClassName( 'filtered' );
				$('filter_clear_btn').show();
			}
		}
		else
		{
			if( $('filter_control') )
			{
				$('filter_control').removeClassName( 'filtered' );
				$('filter_clear_btn').hide();
			}
		}

		// blue border around the tag controls
		if ( Object.values( this.rgCurrentTags ).length )
		{
			if( $('filter_options') )
				$('filter_options').removeClassName( 'filtered' );
		}
		else
		{
			if( $('filter_options') )
				$('filter_options').removeClassName( 'filtered' );
		}

		if( cElementsDisplayed == 0 && bInventoryFullyLoaded )
		{
			if( $( 'empty_filtered_inventory_page' ) )
			{
				$( 'empty_filtered_inventory_page' ).show();
				$( 'active_inventory_page' ).hide();
			}
		}
		else
		{
			if( $( 'empty_filtered_inventory_page' ) )
			{
				$( 'empty_filtered_inventory_page' ).hide();
				$( 'active_inventory_page' ).show();
			}
		}

		// adjust page controls.  If the active page no longer has any items, dump the user on the first (0th) page
		var cNewMaxPages = bDisplayAll ? g_ActiveInventory.m_rgPages.length : Math.floor( (cElementsDisplayed + INVENTORY_PAGE_ITEMS - 1 ) / INVENTORY_PAGE_ITEMS );
		if ( cNewMaxPages <= 1 )
			cNewMaxPages = 1;
		g_ActiveInventory.m_cPages = cNewMaxPages;
		if ( g_ActiveInventory.m_iCurrentPage >= cNewMaxPages )
		{
			g_ActiveInventory.m_rgPages[g_ActiveInventory.m_iCurrentPage].hide();
			g_ActiveInventory.SetActivePage(0);
		}

		var CurrentPage =g_ActiveInventory.m_rgPages[g_ActiveInventory.m_iCurrentPage];
		var bAddedItems = false;

		if ( bDisplayAll )
		{
			CurrentPage.PostFilterCleanUp();	//for responsive
			CurrentPage.LoadPageImages();
		}
		else
		{
			CurrentPage.LoadPageImages();
			bAddedItems = CurrentPage.EnsurePageItemsCreated( true /* keep going */ );	// also for responsive, we may need more items.
			if ( bAddedItems )
				window.setTimeout( function() { Filter.ReApplyFilter() }, 10 );
		}

		// if we haven't loaded inventory and there are more slots available, keep loading more data.
		if ( !bDisplayAll && !bInventoryFullyLoaded )
		{
			g_ActiveInventory.AddOnItemsLoadedCallback( this.OnMoreInventoryLoaded );

			if ( g_ActiveInventory.m_iCurrentPage == cNewMaxPages - 1 )
				g_ActiveInventory.LoadMoreAssets( Filter.FILTER_ASSETS_PER_LOAD );
		}
		else if ( bDisplayAll )
		{
			g_ActiveInventory.RemoveOnItemsLoadedCallback( this.OnMoreInventoryLoaded );
		}

		g_ActiveInventory.UpdatePageCounts();
	},

	MatchItem: function( elItem, rgTerm, rgCategories )
	{
		if ( !rgTerm && !rgCategories)
			return true;

		if ( !elItem || !elItem.rgItem || !elItem.rgItem.description )
			return false;

		return ( !rgCategories || this.MatchItemCategories( elItem, rgCategories ) )
			&& this.MatchItemTerms( elItem, rgTerm );
	},

	// match a tag in every category. This is an AND
	MatchItemCategories: function( elItem, rgCategories )
	{
		var description = elItem.rgItem.description;
		if( Object.values( rgCategories ).length > 0 && (!description.tags || !description.tags.length ) )
			return false;

		for( var sCategoryName in rgCategories )
		{
			if( typeof sCategoryName != "string" )
				continue;

			if( !this.MatchItemTags( elItem, rgCategories[ sCategoryName ] ) )
				return false;
		}

		return true;
	},

	// match any tag within a category. This is an OR
	MatchItemTags: function( elItem, rgTags )
	{
		var description = elItem.rgItem.description;
		for( var iTag = 0; iTag < rgTags.length; iTag++ )
		{
			var sTag = rgTags[ iTag ];
			for( var iItemTag = 0; iItemTag < description.tags.length; iItemTag++ )
			{
				var rgItemTag = description.tags[ iItemTag ];
				if( rgItemTag.internal_name == sTag )
				{
					return true;
				}
			}
		}

		return false;
	},

	MatchItemTerms: function( elItem, rgTerms )
	{
		if ( !rgTerms )
			return true;

		var description = elItem.rgItem.description;

		var name = description.name;
		var type = description.type;
		var descriptions = description.descriptions;
		var owner_descriptions = description.owner_descriptions;

		for ( var iTerm = 0; iTerm < rgTerms.length; iTerm++ )
		{
			var bMatch = false;
			if ( name.match( rgTerms[iTerm] ) || ( type && type.match( rgTerms[iTerm] ) ) )
			{
				bMatch = true;
			}
			if ( !bMatch && descriptions && descriptions.length )
			{
				for ( var i = 0; i < descriptions.length; i++ )
				{
					if ( descriptions[i].value && descriptions[i].value.match( rgTerms[iTerm] ) )
					{
						bMatch = true;
						break;
					}
				}
			}
			if ( !bMatch && owner_descriptions && owner_descriptions.length )
			{
				for ( var i = 0; i < owner_descriptions.length; i++ )
				{
					if ( owner_descriptions[i].value && owner_descriptions[i].value.match( rgTerms[iTerm] ) )
					{
						bMatch = true;
						break;
					}
				}
			}
			if ( !bMatch )
				return false;
		}

		return true;
	}
};

function CreateCurrencyHoverFromContainer( container, id, appid, contextid, currencyid, amount )
{
	var element = $(id);
	var rgItem = container[appid][currencyid];
	if ( !rgItem )
		return;
	rgItem = Object.clone( rgItem );
	rgItem.appid = appid;
	rgItem.contextid = contextid;
	rgItem.amount = amount;
	AddItemHoverToElement( element, rgItem );
}

function CreateItemHoverFromContainer( container, id, appid, contextid, assetid, amount )
{
	var element = $(id);
	if ( element == null )
		return;

	var rgItem = container[appid][contextid][assetid];
	if ( !rgItem )
		return;
	rgItem.appid = appid;
	rgItem.contextid = contextid;
	rgItem.amount = amount;
	rgItem.is_stackable = amount > 1;
	AddItemHoverToElement( element, rgItem );
}

function AddItemHoverToElement( element, rgItem )
{
	var $Element = $JFromIDOrElement( element );

	$Element.addClass('economy_item_hoverable');

	var bInTouch = false;
	$Element.on('touchstart', function() {
		bInTouch = true;
	} );
	$Element.on('click.ItemHover', function( e ) {

		// if this is an actual link, we won't show a hover we'll just navigate
		if ( e.target && $J(e.target ).is('a') )
			return;

		if ( bInTouch || ( window.UseSmallScreenMode && window.UseSmallScreenMode() ) )
		{
			BuildHover( 'hover', rgItem, UserYou );
			var $Content = $JFromIDOrElement( 'iteminfo_clienthover' );
			ShowItemHoverAsPopup( $Content, function() {
				bInTouch = false;
				$J('#hover').append( $Content );
				$J('#hover_item_icon' ).attr('src', 'https://community.fastly.steamstatic.com/public/images/trans.gif');
			} );
		}
	});
	$Element.on('mouseenter', function() {
		if ( !bInTouch && ( !window.UseSmallScreenMode || !window.UseSmallScreenMode() ) )
			MouseOverItem( null, UserYou, $(element), rgItem );
	} );
	$Element.on('mouseleave', function() {
		if ( !bInTouch && ( !window.UseSmallScreenMode || !window.UseSmallScreenMode() ) )
			MouseOutItem( null, UserYou, $(element), rgItem );
	} );

}

/* trade history page */
function HistoryPageCreateCurrencyHover( id, appid, contextid, currencyid, amount )
{
	CreateCurrencyHoverFromContainer( g_rgHistoryCurrency, id, appid, contextid, currencyid, amount );
}

function HistoryPageCreateItemHover( id, appid, contextid, assetid, amount )
{
	CreateItemHoverFromContainer( g_rgHistoryInventory, id, appid, contextid, assetid, amount );
}

CNewItemScroller = Class.create( {

	m_rgPageOffsets: [],
	m_iPage: 0,

	m_elScroller: null,
	m_elRightControl: null,
	m_elLeftControl: null,

	m_bInTransition: false,

	initialize: function( elScroller, elRightControl, elLeftControl )
	{
		this.m_elScroller = $(elScroller);
		this.m_elRightControl = $(elRightControl);
		this.m_elLeftControl = $(elLeftControl);

		this.CalculatePages();
		if ( this.m_rgPageOffsets.length > 1 )
			this.m_elRightControl.show();

		this.m_elRightControl.observe( 'click', this.ScrollNext.bind( this ) );
		this.m_elLeftControl.observe( 'click', this.ScrollPrevious.bind( this ) );

		var _this = this;
		$J(this.m_elScroller ).parent().on( 'scroll', function() {
			var nScrollLeft = $J(this ).scrollLeft();
			var nWidth = $J(this ).width();
			var nTotalWidth = $J(_this.m_elScroller ).width();
			if ( nScrollLeft > 25 )
				_this.m_elLeftControl.show();
			else
				_this.m_elLeftControl.hide();

			if ( nScrollLeft + nWidth < nTotalWidth - 25 )
				_this.m_elRightControl.show();
			else
				_this.m_elRightControl.hide();

			for ( var iPage = _this.m_rgPageOffsets.length - 1 ; iPage >= 0; iPage-- )
			{
				if ( nScrollLeft >= _this.m_rgPageOffsets[iPage] )
				{
					_this.m_iPage = iPage;
					break;
				}
			}
		});
		$J(window ).on('resize', function() {
			_this.CalculatePages();
			$J(_this.m_elScroller ).parent().trigger('scroll');
		} );
	},

	CalculatePages: function()
	{
		var rgItems = this.m_elScroller.childElements();

		this.m_rgPageOffsets = [ 0 ];

		var iPage = 0;
		// we start with a negative accumulated width because we have some extra space on the intial page due
		//	to no previous page button
		var nAccumWidth = -20;
		var nLastPageOffset = 0;
		var nMaxWidth = $(this.m_elScroller.parentNode).getWidth() - 50;
		var nItemMargin = 10;

		for ( var iItem = 0; iItem < rgItems.length; iItem++ )
		{
			var elItem = rgItems[iItem];
			var nItemWidth = elItem.getWidth();

			if ( ( nAccumWidth - nLastPageOffset ) + nItemWidth > nMaxWidth )
			{
				this.m_rgPageOffsets.push( nAccumWidth );
				iPage++;
				nLastPageOffset = nAccumWidth;
				nAccumWidth += nItemWidth + nItemMargin;
			}
			else
			{
				nAccumWidth += nItemWidth + nItemMargin;
			}
		}

		$J(this.m_elScroller ).css('width', nAccumWidth + 25 );
	},

	ScrollPrevious: function()
	{
		this.ScrollTo( this.m_iPage - 1 );
	},

	ScrollNext: function()
	{
		this.ScrollTo( this.m_iPage + 1 );
	},

	ScrollTo: function( iPage )
	{
		if ( iPage < 0 || iPage > this.m_rgPageOffsets.length || this.m_bInTransition )
			return;

		var nOffset = this.m_rgPageOffsets[ iPage ];

		this.m_bInTransition = true;

		$J(this.m_elScroller ).parent().animate( {scrollLeft: nOffset + 'px'}, 500, 'swing', $J.proxy( this.OnScrollComplete, this ) );

		this.m_iPage = iPage;

		if ( this.m_iPage < this.m_rgPageOffsets.length - 1 )
			this.m_elRightControl.show();
		else
			this.m_elRightControl.hide();

		if ( this.m_iPage > 0 )
			this.m_elLeftControl.show();
		else
			this.m_elLeftControl.hide();
	},

	OnScrollComplete: function()
	{
		this.m_bInTransition = false;
	}

} );

function InventoryDismissNewItems( elNewItems )
{
	new Effect.BlindUp( elNewItems, {duration: 0.5 } );
	document.cookie='tsNewItemsPreviousLastChecked=0';
}

function SelectItemDialogOnSelect()
{
	var item = g_ActiveInventory.selectedItem;
	if ( item && window.parent && window.parent.OnItemSelected )
	{
		window.parent.OnItemSelected( item );
	}
	else
	{
		alert( 'There was a problem saving your selection, please try again later.' );
	}
}

function DisableMarketButtons()
{
	$J('a.item_market_action_button, a.market_commodity_buy_button, a.market_noncommodity_buyorder_button, a.market_unstyled_button').each( function() {
		if ( !$J(this).hasClass( 'nodisable' ) && !$J(this).hasClass( 'item_market_action_button_disabled' ) )
		{
			$J(this).attr( 'onclick', '' );
			$J(this).click( function( event ) { event.stopPropagation(); return false; } );
			$J(this).addClass( 'item_market_action_button_disabled' );
		}
	} );
}

function InstallHoverTooltip( elem, tooltip )
{
	elem.observe( 'mouseover', function( event ) {
		HoverTooltipMouseOver( elem, tooltip, event )
	} );
	elem.observe( 'mousemove', function( event ) {
		HoverTooltipMouseMove( tooltip, event )
	} );
	elem.observe( 'mouseout', function( event ) {
		tooltip.hide();
	} );
}

function HoverTooltipMouseOver( elem, tooltip, event )
{
	tooltip.show();
	HoverTooltipMouseMove( tooltip, event );
}

function HoverTooltipMouseMove( tooltip, event )
{
	var docWidth = document.documentElement.clientWidth - 8;
	var toolWidth = tooltip.getWidth();
	var toolHeight = tooltip.getHeight();
	var newLeft = event.pageX + 28;
	var newTop = event.pageY + 20;

	var scrollLeft = document.documentElement.scrollLeft + document.body.scrollLeft;
	var scrollTop = document.documentElement.scrollTop + document.body.scrollTop;

	if(newLeft + toolWidth - scrollLeft > docWidth)
	{
		newLeft = docWidth - toolWidth + scrollLeft;
	}

	if(newLeft < scrollLeft)
	{
		newLeft = scrollLeft;
	}

	if(newTop + toolHeight - scrollTop > document.documentElement.clientHeight)
	{
		newTop = event.pageY - toolHeight - 20;
	}

	if(newTop < scrollTop)
	{
		newTop = scrollTop;
	}

	tooltip.setStyle({ left: newLeft + 'px', top: newTop + 'px' });
}

function HandleTradeActionMenu( elActionMenuButton, item, user )
{
	HideMenuFast( elActionMenuButton, 'trade_action_popup' );

	var bOtherProfileIsPublic = user != null; // TODO: Set this properly
	var bShowStaticActions = item.description.marketable || bOtherProfileIsPublic;
	var bItemHasActions = typeof item.description.actions != 'undefined';
	if ( bShowStaticActions )
		$J('#trade_action_popup_staticactions').show();

	if ( bShowStaticActions && bItemHasActions )
		$J('#trade_action_popup_itemstaticsep').show();
	else
		$J('#trade_action_popup_itemstaticsep').hide();

	var strLinkPrefix = '';
	if ( Steam.BIsUserInSteamClient() )
		strLinkPrefix = 'steam://openurl/';

	if ( item.description.marketable )
	{
		var sMarketHashName = GetMarketHashName( item.description );
		$J('#trade_action_viewinmarket').attr( 'href', strLinkPrefix + 'https://steamcommunity.com/market/listings/' + item.appid + '/' + sMarketHashName );
		$J('#trade_action_viewinmarket').show();
	}
	else
	{
		$J('#trade_action_viewinmarket').hide();
	}

	if ( bOtherProfileIsPublic )
	{
		$J('#trade_action_viewininventory').attr( 'href', strLinkPrefix + user.GetProfileURL() + '/inventory/#' + item.appid + '_' + item.contextid + '_' + item.assetid );
		$J('#trade_action_viewininventory').show();
	}
	else
	{
		$J('#trade_action_viewininventory').hide();
	}

	if ( bItemHasActions )
	{
		var elItemActions = $J('#trade_action_popup_itemactions');
		elItemActions.empty();
		for ( var action = 0; action < item.description.actions.length; action++ )
		{
			var rgAction = item.description.actions[action];
			var elNewAction = $J( '<a></a>' );
			elNewAction.addClass( 'popup_menu_item' );

			var strLink = rgAction.link.replace( "%assetid%", item.assetid ).replace( "%contextid%", item.contextid ).replace( "%owner_steamid%", user.GetSteamId() );
			elNewAction.attr( 'href', strLink );

			if ( rgAction.link.substr( 0, 6 ) != "steam:" )
			{
				elNewAction.attr( 'target', '_blank' );
				elNewAction.attr( 'rel', 'noreferrer' );
			}

			elNewAction.text( rgAction.name );

			elNewAction.click( function() {
				HideMenu( elActionMenuButton, 'trade_action_popup' );
			} );

			elItemActions.append( elNewAction );
		}

		elItemActions.show();
	}
	else
	{
		$J('#trade_action_popup_itemactions').hide();
	}

	ShowMenu( elActionMenuButton, 'trade_action_popup', 'right' );
}


// returns [ roundedStart: Date, tick_interval: string, axis_format: string ]
function GetXAxisParameters( endDate, days )
{
	var strInterval = undefined;
	var cdaysInterval = undefined;

	// long time: include Jan 1 1970
	var strFormatStringLong = '%b %#d %Y<span class="priceHistoryTime"> %#I%p</span>';

	// short time: include Jan 1
	var strFormatString = '%b %#d<span class="priceHistoryTime"> %#I%p</span>';

	if ( days >= 365 * 10 )
	{
		strInterval = '2 years';
		cdaysInterval = 365 * 2;
	}
	else if ( days >= 365 * 5 )
	{
		strInterval = '1 year';
		cdaysInterval = 365;
	}
	else if ( days >= 365 * 2 )
	{
		strInterval = '6 months';
		cdaysInterval = 180;
	}
	else if ( days >= 180 )
	{
		strInterval = '1 month';
		cdaysInterval = 30;
	}
	else if ( days >= 90 )
	{
		strInterval = '2 weeks';
		cdaysInterval = 14;
	}
	else if ( days >= 14 )
	{
		strInterval = '1 week';
		cdaysInterval = 7;
	}
	else
	{
		strInterval = '1 day';
		cdaysInterval = 1;
	}

	// round delta up to interval so ticks will line up
	var daysRounded = Math.ceil( days / cdaysInterval ) * cdaysInterval;

	var strFormat = days >= 30 ? strFormatStringLong : strFormatString;

	var epochMillis = endDate.getTime() - ( daysRounded * 24 * 60 * 60 * 1000 );
	var timeSelected = new Date( epochMillis );

	return [timeSelected, strInterval, strFormat];
}


function CreatePriceHistoryGraph( line1, numYAxisTicks, strFormatPrefix, strFormatSuffix )
{
	var plot = $J.jqplot('pricehistory', [line1], {
		title:{text: 'Median Sale Prices', textAlign: 'left' },
		gridPadding:{left: 45, right:45, top:25},
		axesDefaults:{ showTickMarks:false },
		axes:{
			xaxis:{
				renderer:$J.jqplot.DateAxisRenderer,
				tickOptions:{formatString:'%b %#d<span class="priceHistoryTime"> %#I%p</span>'},
				pad: 1
			},
			yaxis: {
				pad: 1.1,
				tickOptions:{formatString:strFormatPrefix + '%0.2f' + strFormatSuffix, labelPosition:'start', showMark: false},
				numberTicks: numYAxisTicks
			}
		},
		grid: {
			gridLineColor: '#1b2939',
			borderColor: '#1b2939',
			background: '#101822'
		},
		cursor: {
			show: true,
			zoom: true,
			showTooltip: false
		},
		highlighter: {
			show: true,
			lineWidthAdjust: 2.5,
			sizeAdjust: 5,
			showTooltip: true,
			tooltipLocation: 'n',
			tooltipOffset: 20,
			fadeTooltip: true,
			yvalues: 2,
			formatString: '<strong>%s</strong><br>%s<br>%d sold'
		},
		series:[{lineWidth:3, markerOptions:{show: false, style:'circle'}}],
		seriesColors: [ "#688F3E" ]
	});

	plot.defaultNumberTicks = numYAxisTicks;
	return plot;
}

function GetYAXisForPriceHistoryGraph( plotPriceHistory, timeMin, timeMax )
{
	var min = -1;
	var max = 0.06;
	for ( var index in plotPriceHistory.series[0].data )
	{
		var rgData = plotPriceHistory.series[0].data[index];
		if ( rgData[0] >= timeMin.getTime() && rgData[0] <= timeMax.getTime() )
		{
			if ( rgData[1] > max )
			{
				max = rgData[1];
			}

			if ( rgData[1] < min || min == -1 )
			{
				min = rgData[1];
			}
		}
	}

	return $J.jqplot.LinearTickGenerator( min, max, null, plotPriceHistory.defaultNumberTicks, false, false );
}

function pricehistory_zoomDays( plotPriceHistory, timePriceHistoryEarliest, timePriceHistoryLatest, days )
{
	[ timeSelected, strInterval, strFormat ] = GetXAxisParameters( timePriceHistoryLatest, days );

	plotPriceHistory.axes.xaxis.ticks = [];
	plotPriceHistory.axes.xaxis.reset();
	plotPriceHistory.axes.y2axis.reset();

	var rgYAxis = GetYAXisForPriceHistoryGraph( plotPriceHistory, timeSelected, timePriceHistoryLatest );

	plotPriceHistory.axes.xaxis.tickInterval = strInterval;
	plotPriceHistory.axes.xaxis.min = timeSelected;
	plotPriceHistory.axes.xaxis.max = timePriceHistoryLatest;
	plotPriceHistory.axes.xaxis.tickOptions.formatString = strFormat;

	plotPriceHistory.axes.yaxis.min = rgYAxis[0];
	plotPriceHistory.axes.yaxis.max = rgYAxis[1];
	plotPriceHistory.axes.yaxis.numberTicks = rgYAxis[2];
	plotPriceHistory.axes.yaxis.tickInterval = rgYAxis[4];

	plotPriceHistory.replot();

	$J('#pricehistory .jqplot-yaxis').children().first().remove();
	$J('#pricehistory .jqplot-yaxis').children().last().remove();

	return false;
}


function pricehistory_zoomMonthOrLifetime( plotPriceHistory, timePriceHistoryEarliest, timePriceHistoryLatest )
{
	[ timeSelected, strInterval, strFormat ] = GetXAxisParameters( timePriceHistoryLatest, 30 );

	plotPriceHistory.resetZoom();
	plotPriceHistory.axes.xaxis.reset();

	var days = (timePriceHistoryLatest.getTime() - timeSelected.getTime()) / ( 24 * 60 * 60 * 1000 );
	if ( days / 7 < 1 )
	{
		var difference = timePriceHistoryLatest.getTime() - timePriceHistoryEarliest.getTime();
		plotPriceHistory.axes.xaxis.ticks = [timePriceHistoryEarliest, new Date( timePriceHistoryEarliest.getTime() + difference * 0.25  ), new Date( timePriceHistoryEarliest.getTime() + difference * 0.5  ), new Date( timePriceHistoryEarliest.getTime() + difference * 0.75  ), timePriceHistoryLatest];
	}
	else
	{
		plotPriceHistory.axes.xaxis.tickInterval = strInterval;
	}
	plotPriceHistory.axes.xaxis.tickOptions.formatString = strFormat;
	plotPriceHistory.axes.xaxis.min = timeSelected;
	plotPriceHistory.axes.xaxis.max = timePriceHistoryLatest;

	var rgYAxis = GetYAXisForPriceHistoryGraph( plotPriceHistory, plotPriceHistory.axes.xaxis.min, timePriceHistoryLatest );
	plotPriceHistory.axes.yaxis.min = rgYAxis[0];
	plotPriceHistory.axes.yaxis.max = rgYAxis[1];
	plotPriceHistory.axes.yaxis.numberTicks = rgYAxis[2];
	plotPriceHistory.axes.yaxis.tickInterval = rgYAxis[4];

	plotPriceHistory.replot();

	$J('#pricehistory .jqplot-yaxis').children().first().remove();
	$J('#pricehistory .jqplot-yaxis').children().last().remove();

	return false;
}

function pricehistory_zoomLifetime( plotPriceHistory, timePriceHistoryEarliest, timePriceHistoryLatest )
{
	plotPriceHistory.axes.xaxis.ticks = [];
	plotPriceHistory.resetZoom();
	plotPriceHistory.axes.xaxis.reset();
	plotPriceHistory.axes.y2axis.reset();

	var days = (timePriceHistoryLatest.getTime() - timePriceHistoryEarliest.getTime()) / ( 24 * 60 * 60 * 1000 );
	[ timeStartRounded, strInterval, strFormat ] = GetXAxisParameters( timePriceHistoryLatest, days );
	if ( days / 7 < 1 )
	{
		var difference = timePriceHistoryLatest.getTime() - timePriceHistoryEarliest.getTime();
		plotPriceHistory.axes.xaxis.ticks = [timePriceHistoryEarliest, new Date( timePriceHistoryEarliest.getTime() + difference * 0.25  ), new Date( timePriceHistoryEarliest.getTime() + difference * 0.5  ), new Date( timePriceHistoryEarliest.getTime() + difference * 0.75  ), timePriceHistoryLatest];
	}
	else
	{
		plotPriceHistory.axes.xaxis.tickInterval = strInterval;
	}
	plotPriceHistory.axes.xaxis.tickOptions.formatString = strFormat;
	plotPriceHistory.axes.xaxis.min = timeStartRounded;
	plotPriceHistory.axes.xaxis.max = timePriceHistoryLatest;

	var rgYAxis = GetYAXisForPriceHistoryGraph( plotPriceHistory, timeStartRounded, timePriceHistoryLatest );
	plotPriceHistory.axes.yaxis.min = rgYAxis[0];
	plotPriceHistory.axes.yaxis.max = rgYAxis[1];
	plotPriceHistory.axes.yaxis.numberTicks = rgYAxis[2];
	plotPriceHistory.axes.yaxis.tickInterval = rgYAxis[4];

	plotPriceHistory.replot();

	$J('#pricehistory .jqplot-yaxis').children().first().remove();
	$J('#pricehistory .jqplot-yaxis').children().last().remove();

	return false;
}

function ReportTradeScam( steamIDTarget, strPersonaName )
{
	var $Dialog = $J('<div/>');
	$Dialog.append( $J('<div/>', {'class': 'trade_scam_report_label' }).html( 'Use this to report %s to Steam Support for an attempted scam.<br><br>Please provide a brief description:'.replace( /%s/, strPersonaName ) ) );
	var $TextArea = $J('<textarea/>', {'rows': 3, 'cols': 26 });
	$Dialog.append( $J('<div/>', {'class': 'gray_bevel fullwidth' }).append( $TextArea ) );
	var Modal = ShowConfirmDialog( 'Report Scam', $Dialog, 'Report Scam').done( function() {
		if ( !$TextArea.val() )
		{
			ShowAlertDialog( 'Report Scam', 'A description is required.' );
			return;
		}

		var rgParams = {
			json: 1,
			abuseID: steamIDTarget,
			sessionid: g_sessionID,
			abuseType: 'Trade Scam',
			abuseDescription: $TextArea.val()
		};

		$J.post( 'https://steamcommunity.com/actions/ReportAbuse/', rgParams).done( function() {
			ShowAlertDialog( 'Thank You!', 'Your report has been submitted and will be reviewed by Steam Support.' );
		}).fail( function() {
			ShowAlertDialog( 'Report Scam', 'There was a problem saving your report.  Please try again later.' );
		});
	} );

	$TextArea.focus();
}

function InitDynamicInventoryItemAutosizing( $InventoryCtn, strCSSClass, bAutoRetryIfNotVisible )
{
	// a global event to toggle the pagination on inventory and a global that the CUser class uses to change some behaviors
	var bDynamicWasSizingEnabled;
	$J(window ).off('resize.EconomyRepaginateInventory' ).on('resize.EconomyRepaginateInventory', function() {
		// this flag is used by inventories in a few places
		if ( Economy_UseResponsiveLayout() )
		{
			g_bEnableDynamicSizing = true;
		}
		else
		{
			g_bEnableDynamicSizing = false;
		}

		if ( bDynamicWasSizingEnabled != g_bEnableDynamicSizing )
		{
			bDynamicWasSizingEnabled = g_bEnableDynamicSizing;
			if ( typeof UserYou != 'undefined' && UserYou )
				UserYou.InvalidatePaging();
			if ( typeof UserThem != 'undefined' && UserThem )
				UserThem.InvalidatePaging();
		}
	} ).trigger('resize.EconomyRepaginateInventory');

	$J(window).off('scroll.EconomyResponsive' ).on('scroll.EconomyResponsive', function() {
		if ( g_bEnableDynamicSizing && g_ActiveInventory )
		{
			g_ActiveInventory.m_SingleResponsivePage.EnsurePageItemsCreated();
			g_ActiveInventory.m_SingleResponsivePage.LoadPageImages();
		}
	} ).trigger('scroll.EconomyResponsive');


	$J(window ).on('resize.DynamicInventorySizing', function() {

		if ( !Economy_UseResponsiveLayout() )
		{
			$InventoryCtn.removeClass('dynamicSizing');
			return;
		}

		if ( $InventoryCtn.width() == 0 )
		{
			//too soon
			if ( bAutoRetryIfNotVisible )
				window.setTimeout( function() {$J(window).trigger('resize.DynamicInventorySizing')}, 50 );

			return;
		}
	});
	$J(window).trigger('resize.DynamicInventorySizing');

}

function ShowEscrowExplanationDialog( bAddSteamGuardLink )
{
	var description = $J( '<div/>', { class: 'escrow_explanation' } );

	description.append( '<div class="escrow_explanation_q">What is a trade or market hold?</div>' );
	description.append( '<div class="escrow_explanation_a">A hold is a period of time where items are held by Steam before a trade is completed or a Market listing is posted.</div>' );

	description.append( '<div class="escrow_explanation_q">Items holds help protect your items</div>' );
	description.append( '<div class="escrow_explanation_a">Steam accounts are valuable, especially if they have items worth stealing. If you haven\'t protected your account with a physical device (the Steam Guard Mobile Authenticator), a trade hold will give you time to discover your account has been compromised and to prevent your items from leaving your account.</div>' );

	description.append( '<div class="escrow_explanation_q">A delay to catch and stop item theft</div>' );
	description.append( '<div class="escrow_explanation_a">If a user trading away or selling items hasn\'t had their account protected by a Mobile Authenticator for the past 7 days: <br><span style="color: #5aa9d6">Trades:</span> item delivery from completed trades will be delayed by Steam for up to 15 days <br><span style="color: #5aa9d6">Market:</span> sell listings will be held by Steam before they are posted for up to 15 days <br><br>This provides the user time to cancel any pending transactions they didn\'t authorize. <br><br>Cancelling trades that are pending or in a trade hold will begin a trading cooldown on your account to prevent any further unauthorized attempts to trade away items. There is no cooldown for cancelling market listings.</div>' );

	description.append( '<div class="escrow_explanation_q">Remove the need for item holds</div>' );
	description.append( '<div class="escrow_explanation_a">Using a Mobile Authenticator ensures that you and only you can trade or sell your items quickly and securely, so holds are no longer necessary. Increase your account security by getting the <a href="https://store.steampowered.com/mobile/" target="_blank">Steam Guard Mobile Authenticator</a> for iOS and Android devices. </div>' );

	description.append( '<div class="escrow_explanation_a"><a href="http://store.steampowered.com/news/20631/" target="_blank">Read the Steam blog post about account security</a> for a detailed explanation on why we implemented holds.</div>' );

	if ( bAddSteamGuardLink )
	{
		var dialog = ShowConfirmDialog(
			'Trade and Market Holds',
			description,
			'Learn About Steam Guard Mobile Authenticator',
			'Close'
		);

		dialog.done( function() {
			window.open( 'https://store.steampowered.com/mobile' );
		} );
	}
	else
	{
		var dialog = ShowAlertDialog(
			'Trade Holds',
			description
		);
	}
	return false;
}

