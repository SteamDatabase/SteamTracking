

var g_nCurrentAppID;
var g_nCurrentContextID;
var g_nInventoryLoadsInFlight = 0;

var g_rgContextInventory;

var g_rgContextCategories;

var g_strItemFilter;

var k_nInventoryItemWidth = 67; var g_nInventoryRowCount;
var g_nTotalItemCount;

var g_bSearchFilteringEnabled = false;
var g_bTagFilteringEnabled = false;
var g_bAnyFiltersActive = false;

var g_nInventoryResultRangeUpdateTimeout;

$J( function() {
	$J( '.inventoryItems' ).scroll( updateInventoryResultRangeDeferred );
});

function updateInventoryResultRangeDeferred()
{
	window.clearTimeout( g_nInventoryResultRangeUpdateTimeout );
	g_nInventoryResultRangeUpdateTimeout = window.setTimeout( function() {
		updateInventoryResultRange();
	}, 250 );
}

function updateInventoryResultRange()
{
	var inventoryItems = $J( '.inventoryItems' );
	var startingItem = Math.max( Math.min( 1, g_nTotalItemCount ), Math.min( g_nTotalItemCount, Math.round( inventoryItems.scrollLeft() / k_nInventoryItemWidth ) * g_nInventoryRowCount + 1 ) );
	var endingItem = Math.max( 0, Math.min( g_nTotalItemCount, ( startingItem - 1 ) + ( Math.round( inventoryItems.innerWidth() / k_nInventoryItemWidth ) * g_nInventoryRowCount ) ) );
	$J( '.inventoryResultRange' ).text( startingItem + " - " + endingItem );
}

function onInventoryAppIDChanged()
{
	g_nCurrentAppID = $J( '#appIDSelector' ).val();
	if ( g_nCurrentAppID )
	{
		var contextSelector = $J( '#contextSelector' );
		contextSelector.empty();
		var rgContexts = g_rgAppContextData[g_nCurrentAppID].rgContexts;
		var nContexts = 0;
		for ( var contextID in rgContexts )
		{
			contextSelector.append( $J( '<option value="' + contextID + '">' + rgContexts[contextID].name + '</option>' ) );
			nContexts ++;
		}
		if ( g_nCurrentContextID in rgContexts )
			contextSelector.val( g_nCurrentContextID );

		if ( nContexts > 1 )
			contextSelector.show();
		else
			contextSelector.hide();

		onInventoryContextChanged();
	}
}

function onInventoryContextChanged()
{
	g_nCurrentContextID = $J( '#contextSelector' ).val();
	setMobileInventoryCookies();
	reloadInventory();
}

function reloadInventory()
{
	$J( '#inventoryStatus' ).empty();
	g_nInventoryLoadsInFlight ++;

	$J( '.inventoryItems' ).empty();
	showLoadingUI();
	var requestAppID = g_nCurrentAppID;
	var requestContextID = g_nCurrentContextID;
	g_rgContextInventory = null;

	$J.ajax({
		type: 'GET',
		url: g_strInventoryLoadURL + g_nCurrentAppID + '/' + g_nCurrentContextID + '/',
	}).done( function( data, strStatus, jqXHR ) {

		-- g_nInventoryLoadsInFlight;
		if ( data.success && requestAppID == g_nCurrentAppID && requestContextID == g_nCurrentContextID )
		{
			$J( '.inventoryFilterSection' ).show();
			updateLocalInventory( data );
		}
		else if ( !data.success )
		{
			$J( '.inventoryFilterSection' ).hide();
			$J( '.inventoryResults' ).hide();
			$J( '.inventoryItems' ).hide();
			$J( '#inventoryStatus' ).append( data.Error );

		}
	}).fail( function( jqXHR, strStatus, error ) {
		$J( '#inventoryStatus' ).append( strStatus );
		-- g_nInventoryLoadsInFlight;
	});
}

function updateItemCategories( rgItem )
{
	if ( !rgItem.tags )
		rgItem.tags = {};

	for ( var tagid in rgItem.tags )
	{
		var rgTag = rgItem.tags[ tagid ];
		var rgCategory = g_rgContextCategories[ rgTag.category ];

		if( !rgCategory )
		{
			if( typeof rgTag.category != "string" )
				continue;

			rgCategory = g_rgContextCategories[ rgTag.category ] =
			{
				"name": rgTag.category_name ? rgTag.category_name : rgTag.category,
				"tags": {},
				"bAnySelected": false,
				"bCategoryUIExpanded": false
			};
		}

		if( rgCategory.tags[ rgTag.internal_name ] )
			rgCategory.tags[ rgTag.internal_name ].count++;
		else
		{
			var rgNewTag = { "name": rgTag.name, "count": 1, "selected": false };
			if( rgTag.color )
				rgNewTag.color = rgTag.color;
			rgCategory.tags[ rgTag.internal_name ] = rgNewTag;
		}
	}
}

function clearFilterSelections()
{
	for( var strCategoryName in g_rgContextCategories )
	{
		var rgCategory = g_rgContextCategories[strCategoryName];
		rgCategory.bAnySelected = false;
		for ( var strInternalName in rgCategory.tags )
		{
			var rgTag = rgCategory.tags[strInternalName];
			rgTag.selected = false;
		}
	}
	$J( '.inventoryFilterOption' ).addClass( 'inventoryFilterOptionDeselected' );
	$J( '.inventoryFilterCategories' ).removeClass( 'inventoryFilterStroke' );
	g_bAnyFiltersActive = false;
	filterInventory();
}


function updateFilterState( strCategoryName, strTagInternalName, bSelected )
{
	var bRefilterInventory = false;
	var rgTag = null;

		if ( strCategoryName in g_rgContextCategories )
	{
		var rgCategory = g_rgContextCategories[strCategoryName];
		if ( strTagInternalName in rgCategory.tags )
		{
			rgTag = rgCategory.tags[strTagInternalName];
		}
	}

	if ( !rgTag )
		return;

		var bAnySelected = false;
	rgTag.selected = bSelected;
	if ( bSelected )
	{
		bAnySelected = true;
	}
	else
	{
		for ( var strInternalName in rgCategory.tags )
		{
			var rgTag = rgCategory.tags[strInternalName];
			if ( rgTag.selected )
			{
				bAnySelected = true;
				break;
			}
		}
	}
	rgCategory.bAnySelected = bAnySelected;

		g_bAnyFiltersActive = false;
	for( var strCategoryName in g_rgContextCategories )
	{
		var rgCategory = g_rgContextCategories[strCategoryName];
		if ( rgCategory.bAnySelected )
		{
			g_bAnyFiltersActive = true;
		}
	}
	var elemInventoryFilterCategories = $J( '.inventoryFilterCategories' );
	if ( g_bAnyFiltersActive && !elemInventoryFilterCategories.hasClass( 'inventoryFilterStroke' ) )
	{
		elemInventoryFilterCategories.addClass( 'inventoryFilterStroke' );
	}
	else if ( !g_bAnyFiltersActive && elemInventoryFilterCategories.hasClass( 'inventoryFilterStroke' ) )
	{
		elemInventoryFilterCategories.removeClass( 'inventoryFilterStroke' );
	}

		filterInventory();
}

function relayoutCategoryFilters()
{
	var filterCategories = $J( '.inventoryFilterCategories' );
	filterCategories.children( '.inventoryFilterCategory' ).remove();

	var i = 0;
	for( var strCategoryName in g_rgContextCategories )
	{
		var rgCategory = g_rgContextCategories[strCategoryName];

		var strFilterCategoryName = "inventoryFilterCategory" + i;

		var filterCategory = $J( '<div class="inventoryFilterCategory ' + strFilterCategoryName + '"></div>' );
		filterCategories.append( filterCategory );

		var filterCategoryLabel = $J( '<div class="inventoryFilterCategoryLabel"></div>' );
		filterCategory.append( filterCategoryLabel );
		filterCategoryLabel.html( rgCategory.name + '<span class="inventoryFilterCategoryLabelPunctuation">...</span>' );

		(function( elemLabel, strSelector, rgThisCategory ) {
			elemLabel.click( function() {
				if ( rgThisCategory.bCategoryUIExpanded )
				{
					$J( strSelector ).children( '.inventoryFilterOptionDeselected' ).hide();
					$J( strSelector ).find( '.inventoryFilterCategoryLabelPunctuation' ).text( '...' );
					rgThisCategory.bCategoryUIExpanded = false;
				}
				else
				{
					$J( strSelector ).children( '.inventoryFilterOptionDeselected' ).show();
					$J( strSelector ).find( '.inventoryFilterCategoryLabelPunctuation' ).text( ':' );
					rgThisCategory.bCategoryUIExpanded = true;
				}
			});
		})( filterCategoryLabel, '.' + strFilterCategoryName, rgCategory );

		var nTagCount = 0;
		for ( var strInternalName in rgCategory.tags )
		{
			var filterOption = $J( '<div class="inventoryFilterOption inventoryFilterOptionDeselected" style="display: none;"></div>' );
			var strFilterOptionText = rgCategory.tags[strInternalName].name + ' (' + rgCategory.tags[strInternalName].count + ')';
			filterOption.text( strFilterOptionText );
			filterOption.data( 'categoryname', strCategoryName );
			filterOption.data( 'taginternalname', strInternalName );
			filterCategory.append( filterOption );

			filterOption.click( function() {
				var thisElem = $J( this );
				var bSelected;
				if ( thisElem.hasClass( 'inventoryFilterOptionDeselected' ) )
				{
					thisElem.removeClass( 'inventoryFilterOptionDeselected' );
					bSelected = true;
				}
				else
				{
					thisElem.addClass( 'inventoryFilterOptionDeselected' );
					bSelected = false;
				}
				updateFilterState( thisElem.data( 'categoryname' ), thisElem.data( 'taginternalname' ), bSelected );
			});

			nTagCount ++;
		}

		lateRegisterActivatableControl( filterCategory, '.inventoryFilterCategoryLabel' );
		lateRegisterActivatableControl( filterCategory, '.inventoryFilterOption' );

		i ++;
	}
}

function updateLocalInventory( responseData )
{
	var merged = mergeInventoryWithDescriptions( responseData.rgInventory, responseData.rgCurrency, responseData.rgDescriptions );
	g_rgContextInventory = [];
	g_rgContextCategories = { };

	for ( var itemid in merged.currency )
	{
		var rgItem = merged.currency[itemid];
		g_rgContextInventory.push( rgItem );
		updateItemCategories( rgItem );
	}

	for ( var itemid in merged.inventory )
	{
		var rgItem = merged.inventory[itemid];
		g_rgContextInventory.push( rgItem );
		updateItemCategories( rgItem );
	}

	relayoutInventory();
	relayoutCategoryFilters();
}

function filterInventory( strTerm )
{
	if ( strTerm != null )
		g_strItemFilter = strTerm.toLowerCase();

	relayoutInventory();

	if ( ( g_strItemFilter && g_bSearchFilteringEnabled ) || ( g_bTagFilteringEnabled && g_bAnyFiltersActive ) )
	{
		$J( '.inventoryResults' ).addClass( 'inventoryResultsFiltered' );
	}
	else
	{
		$J( '.inventoryResults' ).removeClass( 'inventoryResultsFiltered' );
	}
}

function relayoutInventory()
{
	var inventoryItems = $J( '.inventoryItems' );
	inventoryItems.empty();
	if ( !g_rgContextInventory && g_nInventoryLoadsInFlight > 0 )
	{
		showLoadingUI();
		return;
	}

	var itemCount = 0;
	g_nTotalItemCount = 0;

	for ( var itemIndex = 0 ; itemIndex <  g_rgContextInventory.length; itemIndex++ )
	{
		if ( bInventoryItemMatchesFilter( g_rgContextInventory[itemIndex] ) )
			g_nTotalItemCount ++;
	}

	var totalWidth = $J( inventoryItems ).width();
	var columnWidth = k_nInventoryItemWidth;
	var itemsPerRow = Math.floor( totalWidth / columnWidth );
	var maxRowCount = 4;
	g_nInventoryRowCount = Math.min( Math.max( Math.ceil( g_nTotalItemCount / itemsPerRow ), 1 ), maxRowCount );

	var currentItemColumnContainer;

	for ( var itemIndex = 0 ; itemIndex <  g_rgContextInventory.length; itemIndex++ )
	{
		var item = g_rgContextInventory[itemIndex];

		if ( !bInventoryItemMatchesFilter( g_rgContextInventory[itemIndex] ) )
			continue;

		if ( itemCount % g_nInventoryRowCount == 0 )
		{
			currentItemColumnContainer = $J( '<div class="inventoryItemColumn"></div>' );
			inventoryItems.append( currentItemColumnContainer );
		}
		var strImageHTML = '<img class="lazyInventory" src="https://steamcommunity-a.akamaihd.net/public/shared/images/mobile/trans.png" data-original="' + inventoryImageURL( item.icon_url, '128f', '128f' ) + '">';
		var strOnClick = 'onclick=onInventoryItemClicked("' + itemIndex + '");'
		currentItemColumnContainer.append( $J( '<div class="inventoryItem activatableControl" ' + strOnClick + '>' + strImageHTML + '</div>' ) );
		++ itemCount;
	}

	$J( '.inventoryResultCount' ).text( g_nTotalItemCount );
	updateInventoryResultRange();
	$J( '.inventoryResults' ).show();

	$J( 'img.lazyInventory' ).lazyload( { container: $J( '.inventoryItems' ), threshold : 0 } );
	lateRegisterActivatableControl( inventoryItems, '.activatableControl' );
}

function bInventoryItemMatchesFilter( rgItem )
{
	if ( g_strItemFilter && g_bSearchFilteringEnabled )
	{
		var bMatch = false;
		bMatch = rgItem.name.toLowerCase().indexOf( g_strItemFilter ) != -1;
		if ( !bMatch && rgItem.type && rgItem.type.toLowerCase().indexOf( g_strItemFilter ) != -1 )
			bMatch = true;

		if ( !bMatch && rgItem.descriptions )
		{
			for ( var i = 0; i < rgItem.descriptions.length; ++ i )
			{
				if ( ( rgItem.descriptions[i].value &&
					   rgItem.descriptions[i].value.toLowerCase().indexOf( g_strItemFilter ) != -1 ) ||
					 ( rgItem.descriptions[i].type &&
					   rgItem.descriptions[i].type.toLowerCase().indexOf( g_strItemFilter ) != -1 ) )
				{
					bMatch = true;
					break;
				}
			}
		}

		if ( !bMatch )
			return false;
	}

	if ( g_bTagFilteringEnabled && g_bAnyFiltersActive )
	{
		for ( var strCategoryName in g_rgContextCategories )
		{
			var rgCategory = g_rgContextCategories[strCategoryName];
			if ( rgCategory.bAnySelected )
			{
				var bPassesCategoryFilter = false;
				for ( var strFilterTagName in rgCategory.tags )
				{
					var rgFilterTag = rgCategory.tags[strFilterTagName];
					if ( !rgFilterTag.selected )
						continue;
					for ( var tagid in rgItem.tags )
					{
						var rgItemTag = rgItem.tags[ tagid ];
						if ( rgItemTag.internal_name == strFilterTagName )
						{
							bPassesCategoryFilter = true;
							break;
						}
					}

					if ( bPassesCategoryFilter )
						break;
				}

				if ( !bPassesCategoryFilter )
					return false;
			}
		}
	}

	return true;
}

function showLoadingUI( elemParent )
{
	$J( '.inventoryItems' ).append( $J( '<img class="inventoryThrobber" src="https://steamcommunity-a.akamaihd.net/public/images/login/throbber.gif">' ) );
	$J( '.inventoryResults' ).hide();
}

function onInventoryItemClicked( itemIndex )
{
	var item = g_rgContextInventory[itemIndex];
	if ( item )
	{
		$J( '.singleInventoryItemView' ).fadeIn( 150 );
		$J( '.mobileBody' ).addClass( 'stopScrolling' );

		$J( '.singleInventoryItemImage' ).empty();
		var imageName = item.icon_url_large ? item.icon_url_large : item.icon_url;
		$J( '.singleInventoryItemImage' ).append( '<img src="' + inventoryImageURL( imageName, 600, 600 ) + '">' );
		$J( '.singleInventoryItemName' ).text( item.name );
		var strAppIconSrc = "//:0";
		var strAppName = "&nbsp;";
		if ( item.appid && g_rgAppContextData[item.appid] )
		{
			strAppIconSrc = g_rgAppContextData[item.appid].icon;
			strAppName = g_rgAppContextData[item.appid].name;
		}
		$J( '.singleInventoryItemAppIcon' ).attr( 'src', strAppIconSrc );
		$J( '.singleInventoryItemAppName' ).html( strAppName );
		$J( '.singleInventoryItemType' ).html( item.type ? item.type : '&nbsp;' );

		populateDescriptions( $J( '.singleInventoryItemDescription' ), item.descriptions );
	}
}

function setMobileInventoryCookies()
{
	document.cookie = "mobileInventoryAppID=" + g_nCurrentAppID + "; path=/";
	document.cookie = "mobileInventoryContextID=" + g_nCurrentContextID + "; path=/";
}

function initMobileInventory()
{
	g_nCurrentAppID = getCookie( "mobileInventoryAppID" );
	g_nCurrentContextID = getCookie( "mobileInventoryContextID" );
	if ( g_nCurrentAppID in g_rgAppContextData )
	{
		$J( '#appIDSelector' ).val( g_nCurrentAppID );
	}
	onInventoryAppIDChanged();
}


function inventoryImageURL( imageName, x, y )
{
	if ( imageName )
	{
		x = x ? x : 0;
		y = y ? y : 0;
		var strSize = '';
		if ( x != 0 || y != 0 )
			strSize = '/' + x + 'x' + y;
		return 'https://steamcommunity-a.akamaihd.net/economy/image/' + imageName.trim() + strSize;
	}
	else
		return 'https://steamcommunity-a.akamaihd.net/public/images/trans.gif';
}

function mergeInventoryWithDescriptions( rgInventory, rgCurrency, rgDescriptions )
{
	var rgMergedInventory = null;
	var rgMergedCurrency = null;

	if ( rgInventory && !( rgInventory instanceof Array ) )
	{
		rgMergedInventory = {};
		for ( var itemid in rgInventory )
		{
			var rgItem = rgInventory[itemid];
			if ( rgItem )
			{
				rgMergedInventory[itemid] = $J.extend( false, rgItem, rgDescriptions[rgItem.classid + '_' + rgItem.instanceid] );

				// each item needs its own tags
				if ( rgItem.tags )
				{
					rgMergedInventory[itemid].tags = rgMergedInventory[itemid].tags.clone();
				}
			}
		}
	}
	else
	{
		rgMergedInventory = {};
	}

	if ( rgCurrency && !( rgCurrency instanceof Array ) )
	{
		rgMergedCurrency = {};
		for ( var itemid in rgCurrency )
		{
			var rgItem = rgCurrency[itemid];
			if ( rgItem )
			{
				rgMergedCurrency[itemid] = $J.extend( false, rgItem, rgDescriptions[rgItem.classid + '_' + 0] );

				// each item needs its own tags
				if ( rgItem.tags )
				{
					rgMergedCurrency[itemid].tags = rgMergedCurrency[itemid].tags.clone();
				}
			}
		}
	}
	else
	{
		rgMergedCurrency = {};
	}

	return { inventory: rgMergedInventory, currency: rgMergedCurrency };
}

function populateDescriptions( elDescriptions, rgDescriptions )
{
	elDescriptions.html( '' );
	if ( !rgDescriptions )
		return;
	for ( var i = 0; i < rgDescriptions.length; i++ )
	{
		var description = rgDescriptions[i];
		if ( !description.value )
			continue;

		var elDescription = $J( '<div class="inventoryItemDescriptor"></div>' );
		if ( description.color )
			elDescription.css( 'color', '#' + description.color );

		// just use a blank space for an empty string
		if ( description.value.trim().length == 0 )
		{
			elDescription.html( '&nbsp;' );
		}
		else if ( description.type == 'image' )
		{
			var elImage = $J( '<img src="' + description.value + '">' );
			elDescription.append( elImage );
		}
		else
		{
			description.value = description.value.replace(/\[date\](\d*)\[\/date\]/g, function( match, p1 ) {
				var date = new Date( p1 * 1000 );
				return date.toLocaleString();
			});

			if ( description.type == 'html' )
			{
				elDescription.html( description.value );
			}
			else
			{
				elDescription.text( description.value );
				elDescription.html( elDescription.html().replace( /\n/g, '<br>' ) );
			}
		}

		if ( description.label )
		{
			var elLabel = $J( '<span class="inventoryItemDescriptorLabel"></span>' );
			elLabel.text( description.label + ': ' );
			elDescription.prepend( elLabel );
		}

		elDescriptions.append( elDescription );
	}
}


