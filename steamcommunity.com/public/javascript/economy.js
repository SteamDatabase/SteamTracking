var INVENTORY_PAGE_ITEMS = 16;
var INVENTORY_PAGE_WIDTH = 416;
var g_bIsTrading = false;
var g_bTradeOffer = false;	// implies g_bIsTrading
var g_bIsInventoryPage = false;

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

	// set up the filter control
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
	new LocationHashObserver( null, 0.2, OnLocationChange );
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
	if( g_ActiveInventory && g_ActiveInventory.getTagContainer() )
		g_ActiveInventory.getTagContainer().show();

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
		g_ActiveInventory.getTagContainer().hide();
		$( 'filter_tag_show' ).show();
		$( 'filter_tag_hide' ).hide();
		Filter.UpdateTagFiltering( {} );

		if( Object.values( g_ActiveInventory.tags ).length == 0 )
		{
			$( 'filter_tag_show' ).hide();
		}
		else
		{
			$( 'filter_tag_show' ).show();
		}
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
	name: 'Tradable',
	internal_name: "tradable",
	category: "misc",
	category_name: 'Misc'
};

var kStandardTag_Untradable =
{
	name: 'Not Tradable',
	internal_name: "untradable",
	category: "misc",
	category_name: 'Misc'
};

var kStandardTag_Marketable =
{
	name: 'Marketable',
	internal_name: "marketable",
	category: "misc",
	category_name: 'Misc'
};

var kStandardTag_Unmarketable =
{
	name: 'Not Marketable',
	internal_name: "unmarketable",
	category: "misc",
	category_name: 'Misc'
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

var CInventory = Class.create( {
	owner: null,
	appid: 0,
	contextid: 0,
	rgInventory: null,
	rgCurrency: null,

	elInventory: null,
	rgItemElements: null,
	elTagContainer: null,

	initialized: false,

	cItemsPerPage: 0,
	cPageWidth: 0,

	pageCurrent: 0,
	pageList: null,
	pageTotal: 0,

	selectedItem: null,

	bInPagingTransition: false,

	bNeedsRepagination: true,
	m_rgLazyLoadImages: null,

	initialize: function( owner, appid, contextid, rgInventory, rgCurrency )
	{
		this.owner = owner;
		this.appid = appid;
		this.contextid = contextid;
		this.rgInventory = rgInventory;
		this.rgCurrency = rgCurrency;
		var strCompositeId = this.getCompositeID();
		this.elInventory = new Element( 'div', {id: 'inventory_' + strCompositeId, 'class': 'inventory_ctn' } );
		this.rgItemElements = new Array();
		this.elTagContainer = new Element( 'div', {id: 'tags_' + strCompositeId } );

		// make sure inventory is stored as an object, not an array
		if ( this.rgInventory instanceof Array )
		{
			if ( this.rgInventory.length == 0 )
				this.rgInventory = null;
			else
				this.rgInventory = Object.extend( {}, this.rgInventory );
		}
		// make sure inventory is stored as an object, not an array
		if ( this.rgCurrency instanceof Array )
		{
			if ( this.rgCurrency.length == 0 )
				this.rgCurrency = null;
			else
				this.rgCurrency = Object.extend( {}, this.rgCurrency );
		}

		this.tags = {};
		if ( this.rgInventory )
		{
			for ( var itemid in this.rgInventory )
			{
				var rgItem = this.rgInventory[itemid];
				rgItem.appid = this.appid;
				rgItem.contextid = this.contextid;

				if ( rgItem.amount && rgItem.amount > 1 )
				{
					rgItem.original_amount = rgItem.amount;
					rgItem.is_stackable = true;
				}

				if( !rgItem.tags )
					rgItem.tags = [];

				if ( !g_bIsTrading && !g_bShowTradableItemsOnly )
				{
					if( rgItem.tradable )
						rgItem.tags.push( kStandardTag_Tradable );
					else
						rgItem.tags.push( kStandardTag_Untradable );
				}

				if( rgItem.marketable )
					rgItem.tags.push( kStandardTag_Marketable );
				else
					rgItem.tags.push( kStandardTag_Unmarketable );

				for( var tagid in rgItem.tags )
				{
					var rgTag = rgItem.tags[ tagid ];
					var rgCategory = this.tags[ rgTag.category ];

					if( !rgCategory )
					{
						if( typeof rgTag.category != "string" )
							continue;

						rgCategory = this.tags[ rgTag.category ] = { "name": rgTag.category_name ? rgTag.category_name : rgTag.category, "tags": {} };
					}

					if( rgCategory.tags[ rgTag.internal_name ] )
						rgCategory.tags[ rgTag.internal_name ].count++;
					else
					{
						var rgNewTag = { "name": rgTag.name, "count": 1 };
						if( rgTag.color )
							rgNewTag.color = rgTag.color;
						rgCategory.tags[ rgTag.internal_name ] = rgNewTag;
					}
				}
			}
		}

		if ( this.rgCurrency )
		{
			for ( var currencyid in this.rgCurrency )
			{
				var rgCurrency = this.rgCurrency[currencyid];
				rgCurrency.appid = this.appid;
				rgCurrency.contextid = this.contextid;
				rgCurrency.original_amount = rgCurrency.amount;
				rgCurrency.is_currency = true;
				rgCurrency.is_stackable = true;

				if( !rgCurrency.tags )
					rgCurrency.tags = [];

				if ( !g_bIsTrading && !g_bShowTradableItemsOnly )
				{
					if( rgCurrency.tradable )
						rgCurrency.tags.push( kStandardTag_Tradable );
					else
						rgCurrency.tags.push( kStandardTag_Untradable );
				}

				if( rgCurrency.marketable )
					rgCurrency.tags.push( kStandardTag_Marketable );
				else
					rgCurrency.tags.push( kStandardTag_Unmarketable );

				for( var tagid in rgCurrency.tags )
				{
					var rgTag = rgCurrency.tags[ tagid ];
					var rgCategory = this.tags[ rgTag.category ];

					if( !rgCategory )
					{
						if( typeof rgTag.category != "string" )
							continue;

						rgCategory = this.tags[ rgTag.category ] = { "name": rgTag.category_name ? rgTag.category_name : rgTag.category, "tags": {} };
					}

					if( rgCategory.tags[ rgTag.internal_name ] )
						rgCategory.tags[ rgTag.internal_name ].count++;
					else
					{
						var rgNewTag = { "name": rgTag.name, "count": 1 };
						if( rgTag.color )
							rgNewTag.color = rgTag.color;
						rgCategory.tags[ rgTag.internal_name ] = rgNewTag;
					}
				}
			}

		}
	},

	getCompositeID: function()
	{
		return this.owner.GetSteamId() + '_' + this.appid + '_' + this.contextid;
	},

	destroy: function()
	{
		$J(window).off('scroll.LazyLoad_' + this.getCompositeID() );
		if ( this.elInventory )
		{
			if ( this.elInventory.parentNode )
				this.elInventory.remove();

			this.elInventory = null;
		}
		if ( this.elTagContainer )
		{
			if ( this.elTagContainer.parentNode )
				this.elTagContainer.remove();
			this.elTagContainer = null;
		}
	},

	getInventoryElement: function()
	{
		return this.elInventory;
	},

	getTagContainer: function()
	{
		return this.elTagContainer;
	},

	hide: function()
	{
		$J(window).off('scroll.LazyLoad_' + this.getCompositeID() );
		if ( this.elInventory )
			this.elInventory.hide();
		if( this.elTagContainer )
			this.elTagContainer.hide();
	},

	show: function()
	{
		this.elInventory.show();

		var _this = this;

		$J(window).on('scroll.LazyLoad_' + this.getCompositeID(), function() {
			if ( !_this.m_rgLazyLoadImages || !_this.m_rgLazyLoadImages.length )
				return;

			var nPageHeight = $J(window).height();
			var nStartOffset = $J(window).scrollTop() - ( nPageHeight * 0.5 );
			var nEndOffset = $J(window).scrollTop() + ( nPageHeight * 1.5  );
			var rgLazyLoadImages = _this.m_rgLazyLoadImages;

			var iStart, iEnd;
			for ( iStart = 0; iStart < rgLazyLoadImages.length; iStart++ )
			{
				if ( rgLazyLoadImages[iStart].offset().top > nStartOffset )
					break;
			}
			if ( iStart < rgLazyLoadImages.length )
			{
				for ( iEnd = iStart; iEnd < rgLazyLoadImages.length; iEnd++ )
				{
					if ( rgLazyLoadImages[iEnd].offset().top > nEndOffset )
						break;
				}

				if ( iStart != iEnd )
				{
					// we could have loaded these in the loop above, but there is better
					// perf doing it all at once rather than alternating between loading images and querying position()
					for ( var i = iStart; i < iEnd; i++ )
						_this.LoadItemImage( rgLazyLoadImages[i][0].firstChild );

					rgLazyLoadImages.splice( iStart, iEnd - iStart );
				}
			}
		});

	},

	BIsEmptyInventory: function()
	{
		return !this.rgInventory && !this.rgCurrency;
	},

	BIsPendingInventory: function()
	{
		// pending means we are still waiting for the inventory to load
		return false;
	},

	Initialize: function()
	{
		if ( !this.BIsEmptyInventory() )
		{
			this.BuildInventoryDisplayElements();
		}

		this.BuildInventoryTagFilters();

		this.bNeedsRepagination = true;

		this.initialized = true;
	},

	TagCheckboxChanged: function( )
	{
		// build an array of the selected tags
		var rgCategories = {};

		this.elTagContainer.select('.econ_tag_filter_category').each(function( elCategory ){
			var rgTags = [];

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
				rgCategories[ elCategory.category_name ] = rgTags;
		});

		Filter.UpdateTagFiltering( rgCategories );
	},

	BuildInventoryTagFilters: function()
	{
		if( !this.elTagContainer )
			return;

		$J('#' + this.elTagContainer.id).empty();

		for( var sCategoryName in this.tags )
		{
			if( typeof sCategoryName != "string" )
				continue;
			var rgCategory = this.tags[ sCategoryName ];
			var elTagCategory = new Element( 'div', { 'class' : 'econ_tag_filter_category' } );
			elTagCategory.category_name = sCategoryName;

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

			this.elTagContainer.appendChild( elTagCategory );
		}

		// add a div to clear the floating
		this.elTagContainer.appendChild( new Element( 'div', { "style" : "clear: left;" } ) );
	},

	BuildInventoryDisplayElements: function()
	{
		for ( var currencyid in this.rgCurrency )
		{
			var rgCurrency = this.rgCurrency[currencyid];

			// hide wallet currencies this user does not care about
			if ( CurrencyIsWalletFunds( rgCurrency ) &&
					( g_bWalletTradeUnavailable ||
					( typeof(g_rgWalletInfo) != 'undefined' && g_rgWalletInfo['wallet_currency'] != ( rgCurrency.id % 1000 ) ) ) )
			{
					continue;
			}

			var elCurrency = this.BuildItemElement( rgCurrency );

			var elItemHolder = new Element( 'div', {'class': 'itemHolder' } );
			elItemHolder.appendChild( elCurrency );
			elItemHolder.rgItem = elCurrency.rgItem;

			this.rgItemElements.push( elItemHolder );

			var strCompositeId = this.owner.GetSteamId() + '_' + this.appid + '_' + this.contextid;
			if ( g_bIsTrading )
			{
				CreateItemContextMenuButton( elItemHolder, strCompositeId, this.owner );
			}

			rgCurrency.element = elCurrency;
			rgCurrency.homeElement = elItemHolder;
		}

		var rgSortedInventory = { };
		for ( var itemid in this.rgInventory )
		{
			var rgItem = this.rgInventory[itemid];
			rgSortedInventory[rgItem.pos] = rgItem;
		}

		for ( var pos in rgSortedInventory )
		{
			var rgItem = rgSortedInventory[pos];
			var itemid = rgItem.id;
			var elItem;

			try {
				elItem = this.BuildItemElement( rgItem );
			}
			catch ( e )
			{
				elItem = this.BuildUnknownItemElement( itemid );
			}

			if ( g_bTradeOffer && this.owner == UserThem )
			{
				rgItem.is_their_item = true;
			}

			var elItemHolder = new Element( 'div', {'class': 'itemHolder' } );
			elItemHolder.appendChild( elItem );
			elItemHolder.rgItem = elItem.rgItem;

			this.rgItemElements.push( elItemHolder );

			var strCompositeId = this.owner.GetSteamId() + '_' + this.appid + '_' + this.contextid;
			if ( g_bIsTrading )
			{
				CreateItemContextMenuButton( elItemHolder, strCompositeId, this.owner );
			}

			rgItem.element = elItem;
			rgItem.homeElement = elItemHolder;
		}

		if ( g_bIsTrading && !g_bReadOnly )
			this.MakeElementsDraggable();
	},

	MakeElementsDraggable: function()
	{
		for ( var currencyid in this.rgCurrency )
		{
			var rgCurrency = this.rgCurrency[currencyid];

			if ( rgCurrency.element )
				MakeCurrencyDraggable( rgCurrency.element );
		}
		for ( var itemid in this.rgInventory )
		{
			var rgItem = this.rgInventory[itemid];
			if ( rgItem.is_stackable )
				MakeCurrencyDraggable( rgItem.element );
			else
				MakeItemDraggable( rgItem.element );
		}
	},

	LayoutPages: function()
	{
		// remove any current page elements
		this.elInventory.childElements().invoke('remove');

		var elPage = new Element( 'div', {'class': 'inventory_page' } );
		this.m_rgLazyLoadImages = [];
		var oPageBuilder = { elPage: elPage, cPageItemsRemaining: INVENTORY_PAGE_ITEMS };

		for ( var iItem = 0; iItem < this.rgItemElements.length; iItem++ )
		{
			var elItemHolder = this.rgItemElements[iItem];

			if ( elItemHolder.parentNode )
				elItemHolder.remove();
			this.AddElementToPage( elItemHolder, oPageBuilder );
		}

		if ( !g_bEnableDynamicSizing )
		{
			for ( var i = 0; i < oPageBuilder.cPageItemsRemaining; i++ )
			{
				oPageBuilder.elPage.appendChild( new Element( 'div', {'class': 'itemHolder disabled' } ) );
			}
		}
		oPageBuilder.elPage.hide();
		this.elInventory.appendChild( oPageBuilder.elPage );

		var rgPages = this.elInventory.childElements();
		this.pageList = rgPages;
		this.pageTotal = rgPages.length;
		for ( var i = 0; i < rgPages.length; i++ )
			rgPages[i].iPage = i;

		this.elInventory.appendChild( new Element ('div', {'style': 'clear: left;' } ) );

		this.bNeedsRepagination = false;
	},

	AddElementToPage: function( elItemHolder, oPageBuilder )
	{
		if ( g_bEnableDynamicSizing )
		{
			if ( elItemHolder.firstChild.lazyload_image )
			{
				this.m_rgLazyLoadImages.push( $J(elItemHolder) );
			}
		}
		else if ( oPageBuilder.cPageItemsRemaining-- <= 0 )
		{
			oPageBuilder.elPage.hide();
			this.elInventory.appendChild( oPageBuilder.elPage );
			oPageBuilder.elPage = new Element( 'div', {'class': 'inventory_page' } );
			oPageBuilder.cPageItemsRemaining = INVENTORY_PAGE_ITEMS - 1;
		}

		oPageBuilder.elPage.appendChild( elItemHolder );
	},


	BuildItemElement: function( rgItem )
	{
		var elItem = new Element( 'div', { id: 'item' + this.appid + '_' + this.contextid + '_' + rgItem.id, 'class': 'item app' + this.appid + ' context' + this.contextid } );
		if ( rgItem.name_color )
			elItem.style.borderColor = '#' + rgItem.name_color;
		if ( rgItem.background_color )
			elItem.style.backgroundColor = '#' + rgItem.background_color;

		rgItem.appid = this.appid;
		rgItem.contextid = this.contextid;
		elItem.rgItem = rgItem;

		if ( rgItem.is_stackable )
			elItem.lazyload_image = ImageURL( rgItem.icon_url, '96f', '58f', true );
		else
			elItem.lazyload_image = ImageURL( rgItem.icon_url, '96f', '96f', true );

		if ( typeof( rgItem.icon_drag_url ) != 'undefined' && rgItem.icon_drag_url != '' )
		{
			if ( rgItem.is_stackable )
				elItem.drag_image = ImageURL( rgItem.icon_drag_url, '96f', '58f', true );
			else
				elItem.drag_image = ImageURL( rgItem.icon_drag_url, '96f', '96f', true );
		}

		if ( rgItem.is_stackable )
		{
			var elAmount = new Element( 'div', { 'class': 'item_currency_amount' } );
			if ( rgItem.name_color )
				elAmount.style.color = '#' + rgItem.name_color;

			if ( CurrencyIsWalletFunds( rgItem ) )
				elAmount.update( v_currencyformat( rgItem.amount, rgItem.name ) );
			else
				elAmount.update( v_numberformat( rgItem.amount ) );

			elItem.appendChild( elAmount );

			var elCurrencyName = new Element( 'div', { 'class': 'item_currency_name' } );
			if ( rgItem.name_color )
				elCurrencyName.style.color = '#' + rgItem.name_color;

			elCurrencyName.update( rgItem.is_currency ? rgItem.name : '' );

			elItem.appendChild( elCurrencyName );
		}

		if ( g_bIsTrading )
		{
			Event.observe( elItem, 'mouseover', MouseOverItem.bindAsEventListener( null, this.owner, elItem, rgItem ) );
			Event.observe( elItem, 'mouseout', MouseOutItem.bindAsEventListener( null, this.owner, elItem, rgItem ) );
		}

		var url = ( g_bIsTrading ? this.GetInventoryPageURL() : '' ) + '#' + this.appid + '_' + this.contextid + '_' + rgItem.id;
		var elLink = new Element( 'a', { href: url, 'class': 'inventory_item_link' } );
		if ( Prototype.Browser.IE )
		{
			elLink.appendChild( new Element( 'img', {src: 'https://community.fastly.steamstatic.com/public/images/trans.gif', width: 96, height: 96 } ) );
		}
		elItem.appendChild( elLink );
		this.BindMouseEvents( elLink, elItem );

		if ( rgItem.fraudwarnings )
		{
			var elFraudWarningIcon = new Element( 'div', {'class': 'slot_app_fraudwarning' } );
			elItem.appendChild( elFraudWarningIcon );
		}

		return elItem;
	},

	BuildUnknownItemElement: function( appid, contextid, itemid )
	{
		var elItem = new Element( 'div', {'class': 'item unknownItem' } );
		elItem.identify();
		elItem.update( '<img src="https://community.fastly.steamstatic.com/public/images/' + ( g_bIsTrading ? 'login/throbber.gif' : 'trans.gif' ) + '" class="item_throbber">' );
		elItem.rgItem = { unknown: true, id: itemid, appid: this.appid, contextid: this.contextid, element: elItem, name: 'Unknown Item ' + itemid, descriptions: [], fraudwarnings: [ 'Could not retrieve information about this item.' ] };

		if ( g_bIsTrading )
		{
			Event.observe( elItem, 'mouseover', MouseOverItem.bindAsEventListener( null, this.owner, elItem, elItem.rgItem ) );
			Event.observe( elItem, 'mouseout', MouseOutItem.bindAsEventListener( null, this.owner, elItem, elItem.rgItem ) );
		}

		var url = ( g_bIsTrading ? this.GetInventoryPageURL() : '' ) + '#' + this.appid + '_' + this.contextid + '_' + itemid;
		var elLink = new Element( 'a', { href: url, 'class': 'inventory_item_link' } );
		if ( Prototype.Browser.IE )
		{
			elLink.appendChild( new Element( 'img', {src: 'https://community.fastly.steamstatic.com/public/images/trans.gif', width: 96, height: 96 } ) );
		}
		elItem.appendChild( elLink );
		this.BindMouseEvents( elLink, elItem );

		return elItem;
	},

	BindMouseEvents: function( elLink, elItem )
	{
		// on trade UI, we only do "select item" for touches
		var _this = this;
		$J(elLink ).on( 'click', function( e ) {
			_this.SelectItem( e, elItem, elItem.rgItem, true );
			if ( elItem.rgItem.in_touch )
			{
				$J(elItem ).parents('.itemHolder').removeClass('in_touch');
				delete elItem.rgItem.in_touch;
			}
		} );

		if ( g_bIsTrading )
		{
			$J(elLink ).on( 'touchstart', function() {
				elItem.rgItem.in_touch = true;
				$J(elItem ).parents('.itemHolder').addClass('in_touch');
			} );
		}
	},

	MakeActive: function()
	{
		// are we taking over paging controls again?
		if ( this.bNeedsRepagination )
			this.LayoutPages();

		var elControls = $('inventory_pagecontrols');
		if ( this.pageTotal <= 1 )
			elControls.style.visibility = 'hidden';
		else
			elControls.style.visibility = '';

		this.SetActivePage( this.pageCurrent );

		this.show();
	},

	LocateAsset: function( itemid )
	{
		if ( this.rgInventory && this.rgInventory[itemid] )
			return this.rgInventory[itemid];
		else
			return null;
	},

	LocateAssetElement: function( itemid )
	{
		if ( g_bIsTrading && !g_bTradeOffer && this.owner == UserThem )
		{
			// for the other user's inventory in a trade, we create elements on demand
			var item = this.LocateAsset( itemid );
			if ( item )
			{
				if ( !item.element )
				{
					// we create item elements on demand for the other user
					var element = this.BuildItemElement( item );
					item.element = element;
					this.LoadItemImage( element );
				}
				return item.element;
			}
		}
		else
		{
			if ( !this.initialized )
				this.Initialize();

			if ( this.rgInventory && this.rgInventory[itemid] )
				return this.rgInventory[itemid].element;
		}

		return this.BuildUnknownItemElement( itemid );
	},

	LocateCurrency: function( currencyid )
	{
		if ( this.rgCurrency && this.rgCurrency[currencyid] )
			return this.rgCurrency[currencyid];
		else
			return null;
	},

	LoadPageImages: function( elPage )
	{
		if ( g_bEnableDynamicSizing )
		{
			window.setTimeout( function() { $J(elPage ).trigger('scroll'); }, 1 );
		}
		else if ( !elPage.images_loaded )
		{
			var rgItemHolders = elPage.childElements();
			for ( var i = 0; i < rgItemHolders.length; i++ )
			{
				var elItemHolder = rgItemHolders[i];
				var elItem = elItemHolder.firstChild;
				this.LoadItemImage( elItem );
			}
			elPage.images_loaded = true;
		}
	},

	LoadItemImage: function( elItem )
	{
		if ( elItem && elItem.lazyload_image )
		{
			elItem.appendChild( new Element( 'img', {src: elItem.lazyload_image } ) );
			elItem.lazyload_image = false;
		}
	},

	PrepPageTransition: function( nPageWidth, iCurPage, iNextPage )
	{
		$('inventories').style.overflow = 'hidden';
		this.elInventory.style.width = ( 2 * nPageWidth ) + 'px';

		// breifly fix the width on pages for the transition
		$J(this.pageList[iCurPage] ).add(this.pageList[iNextPage] ).css('width', nPageWidth + 'px' );
		this.pageList[iNextPage].show();
		this.LoadPageImages( this.pageList[iNextPage] );

		this.bInPagingTransition = true;
	},

	NextPage: function()
	{
		if ( this.pageCurrent < this.pageTotal - 1 && !this.bInPagingTransition )
		{
			var nPageWidth = $J(this.elInventory ).children('.inventory_page:first' ).width();

			var iCurPage = this.pageCurrent;
			var iNextPage = iCurPage + 1;

			this.PrepPageTransition( nPageWidth, iCurPage, iNextPage );
			this.elInventory.style.left = '0px';

			var fnOnFinish = this.FinishPageTransition.bind( this, iCurPage, iNextPage );
			this.transitionEffect = new Effect.Move( this.elInventory, {x: -nPageWidth, duration: 0.25, afterFinish: fnOnFinish });
		}
	},

	PreviousPage: function()
	{
		if ( this.pageCurrent > 0 && !this.bInPagingTransition )
		{
			var nPageWidth = $J(this.elInventory ).children('.inventory_page:first' ).width();
			var iCurPage = this.pageCurrent;
			var iNextPage = iCurPage - 1;

			this.PrepPageTransition( nPageWidth, iCurPage, iNextPage );
			this.elInventory.style.left = '-' + nPageWidth + 'px';

			var fnOnFinish = this.FinishPageTransition.bind( this, iCurPage, iNextPage );
			this.transitionEffect = new Effect.Move( this.elInventory, {x: nPageWidth, duration: 0.25, afterFinish: fnOnFinish });
		}
	},

	FinishPageTransition: function( iLastPage, iCurPage )
	{
		this.pageCurrent = iCurPage;
		$('inventories').style.overflow = '';
		this.pageList[iLastPage].hide();
		this.elInventory.style.left = '0px';
		this.elInventory.style.width = '';
		$J(this.pageList[iLastPage] ).add(this.pageList[iCurPage] ).css('width', '' );
		$J(this.elInventory ).removeClass('inTransition');

		this.bInPagingTransition = false;
		this.UpdatePageCounts();
		this.PreloadPageImages( this.pageCurrent );
	},

	SetActivePage: function( iPage )
	{
		if ( this.BIsPendingInventory() )
		{
			// just hold on to the value
			this.pageCurrent = iPage;
			return;
		}

		if ( iPage >= this.pageTotal )
			return;

		// we may have removed pages
		if ( this.pageCurrent >= 0 && this.pageCurrent < this.pageTotal )
			this.pageList[this.pageCurrent].hide();

		this.pageList[iPage].show();
		this.pageCurrent = iPage;
		this.UpdatePageCounts();


		this.PreloadPageImages( this.pageCurrent );
	},

	PreloadPageImages: function( iPage )
	{
		// this page
		this.LoadPageImages( this.pageList[ iPage ] );
		// next page
		if ( iPage < this.pageTotal - 1 )
			this.LoadPageImages( this.pageList[ iPage + 1 ] );
		// previous page
		if ( iPage > 0 )
			this.LoadPageImages( this.pageList[ iPage - 1 ] );
	},

	UpdatePageCounts: function()
	{
		$('pagecontrol_cur') && $('pagecontrol_cur').update( this.pageCurrent + 1 );
		$('pagecontrol_max') && $('pagecontrol_max').update( this.pageTotal );

		if ( this.pageCurrent > 0 )
			$('pagebtn_previous').removeClassName( 'disabled' );
		else
			$('pagebtn_previous').addClassName( 'disabled' );

		if ( this.pageCurrent < this.pageTotal - 1 )
			$('pagebtn_next').removeClassName( 'disabled' );
		else
			$('pagebtn_next').addClassName( 'disabled' );
	},


	SelectItem: function( event, elItem, rgItem, bUserAction )
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


		var elOldInfo = $(sOldInfo);
		var elNewInfo = $(sNewInfo);

		elOldInfo.style.position = 'absolute';
		elNewInfo.style.position = '';

		if ( elNewInfo.visible && !bShouldShowPopup )
		{
			elNewInfo.effect && elNewInfo.effect.cancel();
			elNewInfo.hide();
			elNewInfo.style.opacity = 1;
		}
		if ( elNewInfo.blankTimeout )
		{
			window.clearTimeout( elNewInfo.blankTimeout );
		}
		BuildHover( sNewInfo, rgItem, UserYou );


		if ( bShouldShowPopup )
		{
			// event indicates the user tapped an item, otherwise they may have just switched inventories
			if ( bUserAction )
			{
				var $Info = $J(elNewInfo);

				var $BtnAddToTrade = $Info.find('.item_desc_addtotrade');
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

				ShowItemHoverAsPopup( $Info, function() {
					$BtnAddToTrade.off('click');

					$J('.inventory_page_right' ).append( $Info );
					g_ActiveItemPopupModal = null;
				} );
			}
		}
		else
		{
			elOldInfo.style.zIndex = 2;
			elNewInfo.style.zIndex = 1;
			elNewInfo.show();

			elOldInfo.hiding = false;
			HideWithFade( elOldInfo );
		}

		if ( elOldInfo.builtFor && elOldInfo.builtFor.element )
			elOldInfo.builtFor.element.removeClassName('activeInfo');
		$(rgItem.element).addClassName('activeInfo');
		this.selectedItem = rgItem;

		// the user has the appwide context selected, so update the active item there.
		if ( g_ActiveInventory && g_ActiveInventory != this && g_ActiveInventory.contextid == APPWIDE_CONTEXT )
			g_ActiveInventory.selectedItem = rgItem;

		elOldInfo.blankTimeout = window.setTimeout( function() { $(sOldInfo+'_item_icon').src = 'https://community.fastly.steamstatic.com/public/images/trans.gif'; }, 200 );

		iActiveSelectView = iNewSelect;
	},

	SelectItemNoOp: function( event )
	{

		if ( event )
			event.preventDefault();
	},

	EnsurePageActiveForItem: function( elItem )
	{
		if ( elItem && elItem.parentNode && elItem.parentNode.parentNode )
			this.SetActivePage( elItem.parentNode.parentNode.iPage );
	},

	GetInventoryPageURL: function()
	{
		return this.owner.GetProfileURL() + '/inventory/';
	}

});


var CAppwideInventory = Class.create( CInventory, {

	rgInventories: null,
	bIsAppwideInventory: true,
	rgContextIds: null,
	rgChildInventories: null,
	cInventoriesLoaded: 0,
	bEmpty: true,
	rgAllChildElements: null,

	initialize: function( $super, owner, appid, rgContextIds )
	{
		$super( owner, appid, 0, null, null );
		this.rgContextIds = rgContextIds;
		this.rgChildInventories = {};
		this.rgAllChildElements = new Array();
	},

	Initialize: function()
	{
		this.bNeedsRepagination = true;

		this.initialized = true;
	},

	GetContextIds: function()
	{
		return this.rgContextIds;
	},

	AddChildInventory: function( inventory )
	{
		if ( !this.rgChildInventories[ inventory.contextid ] )
			this.cInventoriesLoaded++;

		this.rgChildInventories[ inventory.contextid ] = inventory;
		if ( this.bEmpty && !inventory.BIsEmptyInventory() )
			this.bEmpty = false;

		if( !this.BIsPendingInventory() )
		{
			this.AllChildrenLoaded();
		}
	},

	AllChildrenLoaded: function()
	{
		this.tags = {};

		for( var sContextID in this.rgChildInventories )
		{
			var inventory = this.rgChildInventories[ sContextID ];
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

		this.BuildInventoryTagFilters();
		var elTags = this.getTagContainer();
		var elTagHolder = $( 'filter_options' );
		if( elTagHolder && elTags )
		{
			elTags.hide();
			elTagHolder.insert( elTags );
			elTagHolder.addClassName( 'filter_collapsed' );
		}
	},

	OnInventoryReload: function( contextid )
	{
		if ( this.rgChildInventories[ contextid ] )
		{
			this.cInventoriesLoaded--;
			this.rgChildInventories[ contextid ] = null;
			this.bNeedsRepagination = true;
		}
	},

	BIsPendingInventory: function()
	{
		// pending means we are still waiting for the inventory to load
		return this.cInventoriesLoaded < this.rgContextIds.length;
	},

	BIsEmptyInventory: function()
	{
		return this.bEmpty || this.BIsPendingInventory();
	},

	PrepareElementList: function()
	{

	},

	MakeActive: function()
	{
		if ( this.BIsPendingInventory() )
			return;

		for ( var contextid in this.rgChildInventories )
		{
			var inventory = this.rgChildInventories[ contextid ];

			if ( !inventory.initialized )
				inventory.Initialize();

			if ( !inventory.bNeedsRepagination )
			{
				// if an inventory took control of its child elements again, we need to take them back
				this.bNeedsRepagination = true;
				inventory.bNeedsRepagination = true;
			}
		}

		if ( this.bNeedsRepagination )
			this.LayoutPages();

		var elControls = $('inventory_pagecontrols');
		if ( this.pageTotal <= 1 )
			elControls.style.visibility = 'hidden';
		else
			elControls.style.visibility = '';

		this.SetActivePage( this.pageCurrent );

		this.show();
	},

	LayoutPages: function()
	{
		// remove any current page elements
		this.elInventory.childElements().invoke('remove');

		var elPage = new Element( 'div', {'class': 'inventory_page' } );
		this.m_rgLazyLoadImages = [];
		var oPageBuilder = { elPage: elPage, cPageItemsRemaining: INVENTORY_PAGE_ITEMS };

		for ( var iContext = 0; iContext < this.rgContextIds.length; iContext++ )
		{
			var contextid = this.rgContextIds[ iContext ];
			var inventory = this.rgChildInventories[ contextid ];
			for ( var iItem = 0; iItem < inventory.rgItemElements.length; iItem++ )
			{
				var elItemHolder = inventory.rgItemElements[iItem];

				if ( elItemHolder.parentNode )
					elItemHolder.remove();
				this.AddElementToPage( elItemHolder, oPageBuilder );
			}
		}


		if ( !g_bEnableDynamicSizing )
		{
			for ( var i = 0; i < oPageBuilder.cPageItemsRemaining; i++ )
			{
				oPageBuilder.elPage.appendChild( new Element( 'div', {'class': 'itemHolder disabled' } ) );
			}
		}
		oPageBuilder.elPage.hide();
		this.elInventory.appendChild( oPageBuilder.elPage );

		var rgPages = this.elInventory.childElements();
		this.pageList = rgPages;
		this.pageTotal = rgPages.length;
		for ( var i = 0; i < rgPages.length; i++ )
			rgPages[i].iPage = i;

		this.elInventory.appendChild( new Element ('div', {'style': 'clear: left;' } ) );

		this.bNeedsRepagination = false;
	},

	LocateAsset: function( itemid )
	{
		for ( var contextid in this.rgChildInventories )
		{
			var item = this.rgChildInventories[ contextid ].LocateAsset( itemid );
			if ( item )
				return item;
		}
		return null;
	}

});


var CForeignInventoryPending = Class.create( CInventory, {

	LocateAssetElement: function( itemid )
	{
		return this.BuildUnknownItemElement( itemid );
	},

	LocateAsset: function( itemid )
	{
		return null;
	},

	BIsPendingInventory: function()
	{
		// pending means we are still waiting for the inventory to load
		return true;
	}
});

APPWIDE_CONTEXT = 0;

var CUser = Class.create( {
	bReady: false,
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
			this.loadInventory( appid, contextid );
			// this will be a temporary inventory object
			inventory = rgContext.inventory;
		}
		else if ( inventory.bIsAppwideInventory )
		{
			this.LoadAppwideInventory( inventory );
		}
		return inventory;
	},

	HasApp: function( appid ) {
		return !!this.rgContexts[appid];
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
			rgInventories[i].bNeedsRepagination = true;
		}

		if ( g_ActiveInventory && g_ActiveInventory.bNeedsRepagination &&
			!g_ActiveInventory.BIsPendingInventory() && !g_ActiveInventory.BIsEmptyInventory() )
		{
			g_ActiveInventory.LayoutPages();
			g_ActiveInventory.SetActivePage(0);


			var elControls = $('inventory_pagecontrols');
			if ( g_ActiveInventory.pageTotal <= 1 )
				elControls.style.visibility = 'hidden';
			else
				elControls.style.visibility = '';
		}
	},

	LoadAppwideInventory: function( appwideInventory )
	{
		var appid = appwideInventory.appid;
		var rgContextIds = appwideInventory.GetContextIds();
		for ( var i = 0; i < rgContextIds.length; i++ )
		{
			var contextid = rgContextIds[i];
			var rgContext = this.GetContext( appid, contextid );
			var inventory = rgContext ? rgContext.inventory : null;
			if ( !inventory )
				this.loadInventory( appid, contextid );
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

		if ( ( this == UserYou || g_bTradeOffer ) && inventory.contextid != APPWIDE_CONTEXT && !inventory.BIsPendingInventory() && !this.BIsSingleContextApp( inventory.appid ) )
		{
			var appwideContext = this.GetContext( inventory.appid, APPWIDE_CONTEXT );
			appwideContext.inventory.AddChildInventory( inventory );

			if ( !appwideContext.inventory.BIsPendingInventory() )
			{
				this.ShowInventoryIfActive( inventory.appid, APPWIDE_CONTEXT );
			}
		}
	},

	findAsset: function( appid, contextid, itemid ) {
		var inventory = this.getInventory( appid, contextid );
		if ( inventory )
			return inventory.LocateAsset( itemid );
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
		return this.cLoadsInFlight > 0;
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
				rgContextIds.push( contextid );
			}

			if ( rgContextIds.length > 1 )
			{
				// add a virtual context to represent the app-wide view
				var inventory = new CAppwideInventory( this, appid, rgContextIds.clone() );
				var elInventory = inventory.getInventoryElement();
				elInventory.hide();
				$('inventories').insert( elInventory );

				var templAllContextName = new Template( 'All #{appname} Items');

				var rgContext = {
					id: APPWIDE_CONTEXT,
					trade_permissions: appTradePermissions,
					inventory: inventory,
					name: templAllContextName.evaluate( {appname: rgAppData.name } )
				};


				this.rgContexts[appid][APPWIDE_CONTEXT] = rgContext;
				rgContextIds.splice( 0, 0, APPWIDE_CONTEXT );
			}

			this.rgContextIdsByApp[appid] = rgContextIds;
		}
	},

	GetContextIdsForApp: function( appid ) {
		return this.rgContextIdsByApp[appid];
	},

	BIsSingleContextApp: function( appid ) {
		return ( this.rgContextIdsByApp[appid] && this.rgContextIdsByApp[appid].length == 1 ) ? true : false;
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
	},

	OnLoadInventoryComplete: function( transport, appid, contextid )
	{
		this.cLoadsInFlight--;
		if ( transport.responseJSON && transport.responseJSON.success )
		{
			var inventory = new CInventory( this, appid, contextid, transport.responseJSON.rgInventory, transport.responseJSON.rgCurrency );

			this.addInventory( inventory );
			var elInventory = inventory.getInventoryElement();
			elInventory.hide();
			$('inventories').insert( elInventory );

			var elTags = inventory.getTagContainer();
			var elTagHolder = $( 'filter_options' );
			if( elTagHolder && elTags )
			{
				elTags.hide();
				elTagHolder.insert( elTags );
				elTagHolder.addClassName( 'filter_collapsed' );
			}
		}
		else
		{
			this.OnInventoryLoadFailed( transport, appid, contextid );
			return;
		}

		this.ShowInventoryIfActive( appid, contextid );
		$J(window ).trigger('resize.DynamicInventorySizing');

		if ( g_bIsTrading )
			RedrawCurrentTradeStatus();
	},

	OnInventoryLoadFailed: function( transport, appid, contextid )
	{
		var elPendingInventory = $('pending_inventory_page') || $('trade_inventory_pending' );
		var elFailedInventory = $('failed_inventory_page') || $('trade_inventory_failed' );
		if ( transport.responseJSON && transport.responseJSON.busy )
		{
			if ( !elFailedInventory )
			{
				// if we don't have the "Failed" div, then just do a an alert
				alert( 'This inventory is not available at this time.  Please try again later.' );
			}
		}

		if ( g_ActiveInventory && g_ActiveInventory.appid == appid && ( g_ActiveInventory.contextid == contextid || g_ActiveInventory.contextid == APPWIDE_CONTEXT ) )
		{
			if ( elPendingInventory && elFailedInventory )
			{
				elPendingInventory.hide();
				elFailedInventory.show();
			}
		}

		this.GetContext( appid, contextid ).inventory = null;
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

	ReloadInventory: function( appid, contextid )
	{
		// force a reload of an inventory that's already been loaded
		var context = this.GetContext( appid, contextid );
		if ( context && context.inventory )
		{
			this.rgReapplyFilterTags = Filter.rgCurrentTags;
			var NewInventory = this.loadInventory( appid, contextid );

			if ( !this.BIsSingleContextApp( appid ) )
			{
				var appwideContext = this.GetContext( appid, APPWIDE_CONTEXT );
				var appwideInventory = appwideContext.inventory;

				var newAppwideInventory = new CAppwideInventory( this, appid, appwideInventory.rgContextIds );
				this.addInventory( newAppwideInventory );
				for ( var sContextID in appwideInventory.rgChildInventories )
				{
					if ( sContextID != contextid )
					{
						var ChildInventory = appwideInventory.rgChildInventories[sContextID];
						ChildInventory.bNeedsRepagination = true;
						newAppwideInventory.AddChildInventory( ChildInventory );
					}
				}

				var elNewAppwideInventory = newAppwideInventory.getInventoryElement();
				elNewAppwideInventory.hide();
				$('inventories').insert( elNewAppwideInventory );
			}

			if ( g_ActiveInventory && g_ActiveInventory.appid == appid && ( g_ActiveInventory.contextid == contextid || g_ActiveInventory.contextid == APPWIDE_CONTEXT ) )
			{
				ShowItemInventory( appid, g_ActiveInventory.contextid, g_ActiveInventory.selectedItem ? g_ActiveInventory.selectedItem.id : null );
			}
		}
	},

	loadInventory: function( appid, contextid )
	{
		if ( g_bIsTrading && !this.BAllowedToTradeItems( appid, contextid ) )
		{
			// not allowed to trade, so we just create an empty inventory
			var EmptyInventory = new CInventory( this, appid, contextid, null, null );
			this.addInventory( EmptyInventory );
			return EmptyInventory;
		}
		this.cLoadsInFlight++;

		var PendingInventory = new CForeignInventoryPending( this, appid, contextid, null );
		this.addInventory( PendingInventory );

		var thisClosure = this;
		var params = {};
		if ( g_bIsTrading || g_bShowTradableItemsOnly )
			params.trading = 1;

		if ( typeof(g_bIsInMarketplace) != 'undefined' && g_bIsInMarketplace )
			params.market = 1;

		if ( window.g_bReactRenderedItemDescriptions && g_bReactRenderedItemDescriptions )
			params.preserve_bbcode = 1;

		RequestFullInventory(
				g_strInventoryLoadURL + appid + '/' + contextid + '/',
				params,
				null,
				null,
				function( transport ) { thisClosure.OnLoadInventoryComplete( transport, appid, contextid ); }
		);

		return PendingInventory;
	},

	// an obj with .appid and .contextid
	GetDefaultInventoryId: function () {
		return this.oDefaultInventoryId;
	},

	SetDefaultInventoryId: function( oDefaultInventoryId ) {
		this.oDefaultInventoryId = oDefaultInventoryId;
	},

	OnLoadInventoryComplete: function( transport, appid, contextid ) {
		CUser.prototype.OnLoadInventoryComplete.call( this, transport, appid, contextid );

		if ( this.rgReapplyFilterTags != null )
		{
			// Reapply filters
			Filter.rgLastTags = Filter.rgCurrentTags;
			Filter.rgCurrentTags = this.rgReapplyFilterTags;
			Filter.OnFilterChange();

			this.rgReapplyFilterTags = null;
		}
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

var g_deferredAsset = null;
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

	var inventory = g_ActiveUser.getInventory( appid, contextid );
	var bAlreadyInitialized = inventory.initialized;
	var bSellNow = false;

	if ( bLoadCompleted && g_deferredAsset )
	{
		// use the asset we wanted to show before we dynamically loaded inventory
		assetid = g_deferredAsset;
		g_deferredAsset = null;
		if ( g_bSellItemOnInventoryLoad )
		{
			g_bSellItemOnInventoryLoad = false;
			bSellNow = true;
		}
	}
	var lastAppId = g_ActiveInventory ? g_ActiveInventory.appid : null;
	var lastContextID = g_ActiveInventory ? g_ActiveInventory.contextid : null;
	var lastPageCurrent = g_ActiveInventory ? g_ActiveInventory.pageCurrent: 0;
	if ( lastAppId != appid || contextid != lastContextID )
	{
		Filter.ClearFilter();
	}

	// if we're in the appwide context and looking for a specific asset, just scroll
	//	to the asset in the appwide context rather than switching to the specific
	//  context with the item
	if ( assetid && lastAppId == appid && lastContextID == APPWIDE_CONTEXT )
	{
		contextid = APPWIDE_CONTEXT;
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
			elTab.siblings().invoke( 'removeClassName', 'active');

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

		if ( g_ActiveInventory.BIsPendingInventory() )
		{
			$('pending_inventory_page').show();

			if ( assetid )
				g_deferredAsset = assetid;
		}
		else if ( g_ActiveInventory.BIsEmptyInventory() )
		{
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

	if ( g_ActiveInventory.BIsEmptyInventory() )
		return;

	var bShowPopup = true;
	if ( assetid )
	{
		// either the passed in item ...
		rgItem = g_ActiveInventory.LocateAsset( assetid );
	}
	if ( !rgItem )
	{
		// ... or the last selected item ...
		bSellNow = false;
		bShowPopup = false;
		rgItem = g_ActiveInventory.selectedItem;
	}
	if ( !rgItem || rgItem.element.parentNode.filtered )
	{
		// ... or the first (non-filtered) item listed

		// jump to the page they were last on, if we're reloading
		if ( g_ActiveInventory.appid == lastAppId && g_ActiveInventory.contextid == lastContextID && lastPageCurrent )
		{
			g_ActiveInventory.SetActivePage( lastPageCurrent );
		}

		bSellNow = false;
		bShowPopup = false;
		for ( var iPage = g_ActiveInventory.pageCurrent; iPage < g_ActiveInventory.pageList.length; iPage++ )
		{
			var rgItemHolders = g_ActiveInventory.pageList[iPage].childElements();
			for ( var i = 0; i < rgItemHolders.length; i++ )
			{
				if ( rgItemHolders[i].filtered )
					continue;
				var elItem = $(rgItemHolders[i]).down('div.item');
				if ( elItem )
				{
					rgItem = elItem.rgItem;
					break;
				}
			}
			if ( rgItem ) break;
		}
	}
	if ( rgItem )
	{
		g_ActiveInventory.SelectItem( null, rgItem.element, rgItem, bShowPopup );
		g_ActiveInventory.EnsurePageActiveForItem( rgItem.element );

		if ( bSellNow )
		{
			SellCurrentSelection();
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
	if ( !inventory.initialized )
	{
		inventory.Initialize();
	}

	
	// before activating inventory, compute trade protection status, so we can know whether the items
	// should be draggable
	RecomputeTradeProtectedStatus( g_rgCurrentTradeStatus );

	
	inventory.MakeActive();

	return true;
}

function SelectInventory( appid, contextid, bForceSelect )
{
	return SelectInventoryFromUser( UserYou, appid, contextid, bForceSelect );
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
		return 'https://community.fastly.steamstatic.com/economy/image/' + v_trim(imageName) + strSize;
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
			window.setTimeout( function() { if ( elItem.wants_hover ) RenderHover( rgItem, owner ); }, Math.min( 250, ITEM_HOVER_DELAY - 50 ) );
		else
			RenderHover( rgItem, owner );

		elItem.timer = window.setTimeout( function() { elItem.timer = false; if ( elItem.wants_hover ) ShowHover( elItem, rgItem ); elItem.wants_hover = false; }, ITEM_HOVER_DELAY );
	}
}

function RenderHover( rgItem, owner )
{
	var elHover = $('hover_content');
	if ( elHover.hasAttribute( 'data-featuretarget' ) )
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
		if ( typeof rgItem.descriptions == 'string' )
			rgItem.descriptions = [];
		if ( typeof rgItem.owner_descriptions == 'string' )
			rgItem.owner_descriptions = [];
		if ( rgItem.tags )
			rgItem.tags.forEach( function ( tag ) { tag.localized_tag_name = tag.name; } );
		RenderItemInfo( 'hover_content', rgItem, asset );
	}
	else
	{
		BuildHover('hover', rgItem, owner);
	}

	ApplyHoverArrowColors( 'hover', rgItem );
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

function GetNameForItem( item )
{
	var strName = item.name;
	if ( CurrencyIsWalletFunds( item ) )
		strName = v_currencyformat( item.amount, item.name ) + ' <span class="hover_item_name_small">' + strName + '</span>';
	else if ( item.is_stackable )
		strName = v_numberformat( item.amount ) + ' ' + strName;

	// Show the other user's currency in the name field.
	if ( CurrencyIsWalletFunds( item ) && typeof(g_rgWalletInfo) != 'undefined' && typeof(g_rgWalletInfo['wallet_other_currency']) != 'undefined' &&
			g_rgWalletInfo['wallet_currency'] != g_rgWalletInfo['wallet_other_currency'] )
	{
		var bThisIsOurCurrency = ( g_rgWalletInfo['wallet_currency'] == ( item.id % 1000 ) );
		var bThisIsTheirCurrency = ( g_rgWalletInfo['wallet_other_currency'] == ( item.id % 1000 ) );

		if ( bThisIsOurCurrency )
		{
			var strTheirCurrency = GetCurrencyCode( g_rgWalletInfo['wallet_other_currency'] );
			strName += '<span class="hover_item_name_conversion"> / ' +
					v_currencyformat( ConvertToTheirCurrency( item.amount ), strTheirCurrency ) + ' <span class="hover_item_name_small">' + strTheirCurrency + '</span>' +
					'</span>';
		}
		else if ( bThisIsTheirCurrency )
		{
			// strName already contains their currency, so let's convert to our currency and display that first.
			var strOurCurrency = GetCurrencyCode( g_rgWalletInfo['wallet_currency'] );
			strName = v_currencyformat( ConvertToOurCurrencyForDisplay( item.amount ), strOurCurrency ) + ' <span class="hover_item_name_small">' + strOurCurrency + '</span>' +
					'<span class="hover_item_name_conversion"> / ' + strName + '</span>';
		}
	}

	return strName;
}


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

function ApplyHoverArrowColors( prefix, item )
{
	var elArrowLeft = $(prefix+'_arrow_left');
	var elArrowRight = $(prefix+'_arrow_right');

	if ( item.name_color )
	{
		if ( elArrowLeft ) elArrowLeft.style.borderRightColor = '#' + item.name_color;
		if ( elArrowRight ) elArrowRight.style.borderLeftColor = '#' + item.name_color;
	}
	else
	{
		if ( elArrowLeft ) elArrowLeft.style.borderRightColor = '';
		if ( elArrowRight ) elArrowRight.style.borderLeftColor = '';
	}
}

/* We allow owner to be a CUser or string ( steamid ) */
function BuildHover( prefix, item, owner )
{
	var imageName = item.icon_url_large ? item.icon_url_large : item.icon_url;
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
	$(prefix+'_item_icon').alt = item.name;

	var strName = GetNameForItem( item );
	$(prefix+'_item_name').update( strName.escapeHTML() );

	if ( item.name_color )
	{
		$(prefix+'_item_name').style.color = '#' + item.name_color;
		$(prefix+'_content').parentNode.style.borderColor = '#' + item.name_color;
	}
	else
	{
		$(prefix+'_item_name').style.color = '';
		$(prefix+'_content').parentNode.style.borderColor = '';
	}

	var elFraudWarnings = $J('#'+prefix+'_fraud_warnings');
	if ( elFraudWarnings )
	{
		// on the inventory page, we only show fraud warnings for currency (special privacy notice)
		if ( item.fraudwarnings || ( g_bIsInventoryPage && item.is_currency ) )
		{
			elFraudWarnings.empty();
			if ( item.fraudwarnings )
			{
				for ( var i=0; i < item.fraudwarnings.length; i++ )
				{
					var warning = $J( '<div/>', { class: 'fraud_warning_box' } );
					var warningImage = $J( '<img>', { class: 'fraud_warning_image', src: 'https://community.fastly.steamstatic.com/public/images/sharedfiles/icons/icon_warning.png' } );
					warning.append( warningImage );
					var warningText = $J( '<span/>' );
					warningText.text( item.fraudwarnings[i] );
					warning.append( warningText );
					elFraudWarnings.append( warning );
				}
			}
			if ( g_bIsInventoryPage && item.is_currency )
			{
				var warning = $J( '<div/>' );
				warning.text( 'This amount is private and shown only to you.' );
				elFraudWarnings.appendChild( warning );
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
		$JFromIDOrElement(prefix+'_item_type').text( item.type );
		$(prefix+'_game_info').show();
	}
	else
	{
		$(prefix+'_game_info').hide();
	}

	var elDescriptors = $(prefix+'_item_descriptors');
	PopulateDescriptions( elDescriptors, item.descriptions );

	var elActions = $(prefix+'_item_actions');
	if ( elActions )
	{
		PopulateActions( prefix, elActions, item.actions, item, owner );
	}

	var elOwnerDescriptors = $(prefix+'_item_owner_descriptors');
	if ( elOwnerDescriptors )
	{
		PopulateDescriptions( elOwnerDescriptors, item.owner_descriptions )
	}

	var elOwnerActions = $(prefix+'_item_owner_actions');
	if ( elOwnerActions )
	{
		PopulateActions( prefix, elOwnerActions, item.owner_actions, item, owner );
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
			oParams.currencystyle = item.name_color ? 'color: #' + item.name_color + ';' : '';
			elCurrencyInTradeDescriptor.update( HoverCurrencyFromTemplate.evaluate( oParams ) );
		}
	}

	var elTags = $(prefix+'_item_tags');
	var elTagsContent = $(prefix+'_item_tags_content');
	if ( elTags && elTagsContent )
	{
		PopulateTags( elTags, elTagsContent, item.tags );
	}

	var elScrapActions = $(prefix+'_item_scrap_actions');
	var elScrapAmount = $(prefix+'_item_scrap_value');
	var elScrapLink = $(prefix+'_item_scrap_link');
	if ( elScrapActions && elScrapAmount && elScrapLink )
	{
		if ( typeof(g_bViewingOwnProfile) != 'undefined' && g_bViewingOwnProfile )
		{
			PopulateScrapAction( elScrapActions, elScrapAmount, elScrapLink, item );
		}
	}

	var elMarketActions = $(prefix+'_item_market_actions');
	if ( elMarketActions )
	{
		PopulateMarketActions( elMarketActions, item );
	}

	
	$(prefix).builtFor = item;
	$(prefix).builtForAmount = item.amount;
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

		var strLink = action.link.replace( "%assetid%", item.id );
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
		if ( !tag.name )
			continue;

		if( sTagList != "" )
			sTagList += ", ";

		sTagList += tag.name;
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
				elScrapLink.setAttribute( 'href', 'javascript:GrindIntoGoo( ' + appid + ',' + item.contextid + ',\'' + item.id + '\' )' );
				elActions.show();
			}
			else
			{
				elActions.hide();
			}
		}
	});
}

function PopulateMarketActions( elActions, item )
{
	elActions.update('');
	if ( !item.marketable || ( item.is_currency && CurrencyIsWalletFunds( item ) ) )
	{
		elActions.hide();
		return;
	}

	var bIsTrading = typeof( g_bIsTrading ) != 'undefined' && g_bIsTrading;

	if ( ( typeof(g_bViewingOwnProfile) != 'undefined' && g_bViewingOwnProfile ) || bIsTrading )
	{
		var strMarketName = GetMarketHashName( item );

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

// taken from domutils.ts, see there for more information
function ComputeZoomForElement( element )
{
	let fCumulativeZoom = 1;

	let cursor = element;
	while ( cursor != null && cursor.tagName != "HTML" )
	{
		const style = getComputedStyle( cursor );
		if ( style.zoom )
		{
			const fElemZoom = Number.parseFloat( style.zoom );
			if ( !isNaN( fElemZoom ) )
			{
				fCumulativeZoom *= fElemZoom;
			}
		}

		cursor = cursor.parentElement;
	}

	return fCumulativeZoom;
}

function ShowHover( elem, item )
{
	var hover = $('hover');
	if ( hover.target != elem || hover.builtFor != item || hover.builtForAmount != item.amount )
	{
		if ( hover.target )
			hover.target.removeClassName('hover');

		RenderHover( item );
		hover.target = elem;
	}

	var divHoverContents = hover.down( '.hover_box' );

	hover.style.visibility = 'visible';
	hover.show();

	var boundingRect = elem.getBoundingClientRect();
	var zoom = ComputeZoomForElement( hover );
	hover.style.left = ( ( boundingRect.left + window.scrollX ) / zoom ) + 'px';
	hover.style.top = ( ( boundingRect.top + window.scrollY ) / zoom ) + 'px';

	var hover_box = hover.down( '.hover_box' );
	var hover_arrow_left = hover.down( '.hover_arrow_left' );
	var hover_arrow_right = hover.down( '.hover_arrow_right' );


	var hover_arrow = hover_arrow_left;

	var nHoverHorizontalPadding = (hover_arrow ? -4 : 0);
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
		this.elFilter.value = '';
		this.OnFilterChange();
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
			this.strLastFilter = 'x';
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

	ApplyFilter: function( filterValue, elInsertedItem )
	{
		if ( !g_ActiveInventory || g_ActiveInventory.BIsEmptyInventory() )
			return;

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


		var rgNewItemList = Array();
		var rgPages = g_ActiveInventory.pageList;
		var rgForwardInserts = { };
		var cElementsDisplayed = 0;
		for (var iPage = 0; iPage < rgPages.length; iPage++ )
		{
			var page = rgPages[iPage];
			var iCarryoverInserts = 0;

			if ( rgForwardInserts[iPage] )
			{
				// new items became visible on the first page, pushing some items on to this page
				for( var i = rgForwardInserts[iPage].length - 1; i >=0; i-- )
				{
					page.insertBefore( rgForwardInserts[iPage][i].remove(), page.firstChild );
					iCarryoverInserts++;
				}
			}

			var rgChildren = page.childElements();
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
				var bVisible = !elItemHolder.filtered;
				if ( bVisible && bRestricting )
				{
					var bHide = !this.MatchItem( elItem, rgTerms, this.rgCurrentTags );
					if ( bHide )
					{
						elItemHolder.hide();
						elItemHolder.filtered = true;
					}
				}
				else if ( !bVisible && ( bLoosening || elInsertedItem && elItem == elInsertedItem ) )
				{
					var bShow = this.MatchItem( elItem, rgTerms, this.rgCurrentTags );
					if ( bShow )
					{
						elItemHolder.show();
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
							rgForwardInserts[iCorrectPage] = new Array();
						rgForwardInserts[iCorrectPage].push( elItemHolder );
					}
					else
					{
						rgPages[iCorrectPage].appendChild( elItemHolder.remove() );
						g_ActiveInventory.LoadItemImage( elItem );
					}
				}
			}
		}

		if ( g_bEnableDynamicSizing )
			$J(rgPages[0] ).trigger('scroll');

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

		if( cElementsDisplayed == 0 )
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
		var cNewMaxPages = Math.floor( (cElementsDisplayed + INVENTORY_PAGE_ITEMS - 1 ) / INVENTORY_PAGE_ITEMS );
		if ( cNewMaxPages <= 1 )
			cNewMaxPages = 1;
		g_ActiveInventory.pageTotal = cNewMaxPages;
		if ( g_ActiveInventory.pageCurrent >= cNewMaxPages )
		{
			g_ActiveInventory.pageList[g_ActiveInventory.pageCurrent].hide();
			g_ActiveInventory.SetActivePage(0);
		}
		g_ActiveInventory.UpdatePageCounts();
	},

	MatchItem: function( elItem, rgTerm, rgCategories )
	{
		if ( !rgTerm && !Object.values( rgCategories ).length)
			return true;

		if ( !elItem || !elItem.rgItem || !elItem.rgItem.name )
			return false;

		return this.MatchItemCategories( elItem, rgCategories )
			&& this.MatchItemTerms( elItem, rgTerm );
	},

	// match a tag in every category. This is an AND
	MatchItemCategories: function( elItem, rgCategories )
	{
		if( Object.values( rgCategories ).length > 0 && (!elItem.rgItem.tags || !elItem.rgItem.tags.length ) )
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
		for( var iTag = 0; iTag < rgTags.length; iTag++ )
		{
			var sTag = rgTags[ iTag ];
			for( var iItemTag = 0; iItemTag < elItem.rgItem.tags.length; iItemTag++ )
			{
				var rgItemTag = elItem.rgItem.tags[ iItemTag ];
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

		var name = elItem.rgItem.name;
		var type = elItem.rgItem.type;
		var descriptions = elItem.rgItem.descriptions;

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
	var bShowStaticActions = item.marketable || bOtherProfileIsPublic;
	var bItemHasActions = typeof item.actions != 'undefined';
	if ( bShowStaticActions )
		$J('#trade_action_popup_staticactions').show();

	if ( bShowStaticActions && bItemHasActions )
		$J('#trade_action_popup_itemstaticsep').show();
	else
		$J('#trade_action_popup_itemstaticsep').hide();

	var strLinkPrefix = '';
	if ( Steam.BIsUserInSteamClient() )
		strLinkPrefix = 'steam://openurl/';

	if ( item.marketable )
	{
		var sMarketHashName = GetMarketHashName( item );
		$J('#trade_action_viewinmarket').attr( 'href', strLinkPrefix + 'https://steamcommunity.com/market/listings/' + item.appid + '/' + sMarketHashName );
		$J('#trade_action_viewinmarket').show();
	}
	else
	{
		$J('#trade_action_viewinmarket').hide();
	}

	if ( bOtherProfileIsPublic )
	{
		$J('#trade_action_viewininventory').attr( 'href', strLinkPrefix + user.GetProfileURL() + '/inventory/#' + item.appid + '_' + item.contextid + '_' + item.id );
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
		for ( var action = 0; action < item.actions.length; action++ )
		{
			var rgAction = item.actions[action];
			var elNewAction = $J( '<a></a>' );
			elNewAction.addClass( 'popup_menu_item' );

			var strLink = rgAction.link.replace( "%assetid%", item.id ).replace( "%contextid%", item.contextid ).replace( "%owner_steamid%", user.GetSteamId() );
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

function ContinueFullInventoryRequestIfNecessary( transport, mergedResponse, strURL, oParams, fOnSuccess, fOnFailure, fOnComplete )
{
	var bMore = false;
	var bSuccess = false;

	if ( transport.responseJSON && transport.responseJSON.success )
	{
		bMore = transport.responseJSON.more;
		bSuccess = true;

		if ( transport.responseJSON.rgAppInfo )
		{
			mergedResponse.rgAppInfo = transport.responseJSON.rgAppInfo;
		}

		// Merge the inventory into the merged response and also put the description with the item
		if ( transport.responseJSON.rgInventory && !( transport.responseJSON.rgInventory instanceof Array ) )
		{
			for ( var itemid in transport.responseJSON.rgInventory )
			{
				var rgItem = transport.responseJSON.rgInventory[itemid];
				if ( rgItem )
				{
					mergedResponse.rgInventory[itemid] = Object.extend( rgItem, Object.clone( transport.responseJSON.rgDescriptions[rgItem.classid + '_' + rgItem.instanceid] ) );

					// each item needs its own tags
					if ( rgItem.tags )
					{
						mergedResponse.rgInventory[itemid].tags = mergedResponse.rgInventory[itemid].tags.clone();
					}
				}
			}
		}

		// Merge the currencies into the merged response and also put the description with the currency
		if ( transport.responseJSON.rgCurrency && !( transport.responseJSON.rgCurrency instanceof Array ) )
		{
			for ( var itemid in transport.responseJSON.rgCurrency )
			{
				var rgItem = transport.responseJSON.rgCurrency[itemid];
				if ( rgItem )
				{
					mergedResponse.rgCurrency[itemid] = Object.extend( rgItem, Object.clone( transport.responseJSON.rgDescriptions[rgItem.classid + '_' + 0] ) );

					// each item needs its own tags
					if ( rgItem.tags )
					{
						mergedResponse.rgCurrency[itemid].tags = mergedResponse.rgCurrency[itemid].tags.clone();
					}
				}
			}
		}

		if ( bMore )
		{
			oParams.start = transport.responseJSON.more_start;

			new Ajax.Request( strURL, {
				method: 'get',
				parameters: oParams,
				onComplete:
					function( newTransport )
					{
						ContinueFullInventoryRequestIfNecessary(
								newTransport,
								mergedResponse,
								strURL,
								oParams,
								fOnSuccess, fOnFailure, fOnComplete
						);
					}
			} );
		}
	}
	else
	{
		if ( fOnFailure != null )
		{
			fOnFailure( transport );
		}
	}

	// If we're done, call the complete method
	if ( !bMore )
	{
		mergedResponse.success = bSuccess;

		if ( fOnSuccess != null && bSuccess )
		{
			fOnSuccess( { responseJSON: mergedResponse } );
		}

		if ( fOnComplete != null )
		{
			fOnComplete( { responseJSON: mergedResponse } );
		}
	}
}

function RequestFullInventory( strURL, oParams, fOnSuccess, fOnFailure, fOnComplete )
{
	new Ajax.Request( strURL, {
		method: 'get',
		parameters: oParams,
		onComplete:
			function( transport )
			{
				ContinueFullInventoryRequestIfNecessary(
						transport,
						{ rgInventory: {}, rgCurrency: {}, rgAppInfo: {} },
						strURL,
						oParams,
						fOnSuccess, fOnFailure, fOnComplete
				);
			}
	} );
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


	var elStyle = document.createElement('style');
	$J(document.head ).append(elStyle);

	var styles = elStyle.sheet;

	var bAddedRules = false;

	$J(window ).on('resize.DynamicInventorySizing', function() {

		if ( !Economy_UseResponsiveLayout() )
		{
			$InventoryCtn.removeClass('dynamicSizing');
			if ( bAddedRules )
			{
				bAddedRules = false;
				while ( styles.rules.length )
					styles.deleteRule(0);
			}
			return;
		}

		if ( $InventoryCtn.width() == 0 )
		{
			//too soon
			if ( bAutoRetryIfNotVisible )
				window.setTimeout( function() {$J(window).trigger('resize.DynamicInventorySizing')}, 50 );

			return;
		}

		var nDesiredItemCtnWidth = 98;
		var flMarginPct = 0.0625;
		var flDesiredItemCtnWidthWithMargin = nDesiredItemCtnWidth + ( ( nDesiredItemCtnWidth - 2 ) * flMarginPct );

		var nRowWidth = Math.max( $InventoryCtn.width() - 1, nDesiredItemCtnWidth );
		// the -0.3 here creates a window where we'll use the smaller number of items but at pixel-perfect size
		var cDesiredItemsPerRow = Math.max( Math.ceil( nRowWidth / flDesiredItemCtnWidthWithMargin - 0.3 ), 3 );

		// now re-do the math at that rate
		var flItemWidthWithMargin = nRowWidth / cDesiredItemsPerRow;

		var flMargin, flItemCtnWidth;
		if ( flItemWidthWithMargin > flDesiredItemCtnWidthWithMargin )
			flItemWidthWithMargin = flDesiredItemCtnWidthWithMargin;

		var flMargin = Math.floor( ( flItemWidthWithMargin - 2 ) * flMarginPct / ( 1 + flMarginPct ) );
		var flItemCtnWidth = flItemWidthWithMargin - flMargin;

		$InventoryCtn.addClass('dynamicSizing');
		styles.insertRule( 'html.responsive ' + strCSSClass + '.dynamicSizing .itemHolder { width: ' + flItemCtnWidth + 'px; height: ' + flItemCtnWidth + 'px; margin: ' + ( flMargin / 2 ) + 'px; }', 0 );
		styles.insertRule( 'html.responsive ' + strCSSClass + '.dynamicSizing .inventory_page { width: ' + nRowWidth + 'px }', 0 );


		if ( bAddedRules )
		{
			styles.deleteRule(2);
			styles.deleteRule(2);
		}

		bAddedRules = true;
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

