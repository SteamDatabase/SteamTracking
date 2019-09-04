

//
// Set to true to use dropdowns with checkboxes, to allow
// users to select multiple tags for each category
//
ALLOW_MULTISELECT = false;

//
// Number of children to move when using triggers to
// fast scroll.
//
CHILDREN_TO_MOVE_IN_FAST_MOTION = 24;

//
// Contextid indicating "All contexts"
//
APPWIDE_CONTEXT = 0;

MAX_ITEMS_PER_CONTEXT = 1000000;

// If true, dropdown menus will show counts of items per tag, and will
// hide items where that count is 0.
SHOW_FILTER_COUNTS = true;


REQUEST_PAGE_SIZE = 60;
REQUEST_THRESHOLD = 30;
MAX_GRID_ITEMS = 120;


//
// Standard tags for page-based filtering
//
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

function TagIdFromTag( tag )
{
	return "Tag_" + tag;
}

function TagFromTagId( tagid )
{
	return tagid.substring( 4 );
}


function ShallowCopyTags(variable)
{
	var newVariable= [];
	for (var i in variable)
	{
		newVariable[i] = variable[i];
	}

	return newVariable;
}


function ShallowCopyItem(variable)
{
	var newVariable= {};
	for (var i in variable)
	{
		if ( i == 'tags' )
		{
			newVariable[i] = ShallowCopyTags( variable[i] );
		}
		else
			newVariable[i] = variable[i];
	}

	return newVariable;
}

function CreateInventoryItemPanel( item, grid )
{
	var id = 'Item_'+item.id;
	var p = $.CreatePanel( 'Button', grid, id );
	p.AddClass( 'InventoryItem' );
	p.hittest = false;

	var img = $.CreatePanel( 'Image', p, '' );
	img.SetScaling( 'stretch-to-fit-preserve-aspect' );

	if ( item.name_color )
		img.style.border = '3px solid #'+item.name_color;


	if ( item.is_stackable && item.amount > 1 )
	{
		var label = $.CreatePanel( 'Label', img, '' );
		label.text = item.amount;
	}

	var name = item.name;
	if ( item.is_stackable )
	{
		name = item.amount + " " + item.name;
	}

	var name_row = $.CreatePanel( 'Label', p, '' );
	name_row.AddClass( 'InventoryItemName' );
	name_row.text = $.html_entity_decode( name );


	var	image_name = item.icon_url_large ? item.icon_url_large : item.icon_url;

	$.RegisterEventHandler( 'ReadyPanelForDisplay', p, function()
	{
		p.GetChild( 0 ).SetImage( ImageURL( image_name, 256, 256 ) );
		p.AddClass( 'Ready' );
	} );

	$.RegisterEventHandler( 'PanelDoneWithDisplay', p, function()
	{
		p.GetChild( 0 ).SetImage( '' );
		p.RemoveClass( 'Ready' );
	} );

	p.SetPanelEvent( 'onmouseover', function()
	{
		if ( name_row.IsValid() )
			if ( name_row.contentwidth > name_row.actuallayoutwidth )
				name_row.AddClass( 'Fade' );
	} );

	p.SetPanelEvent( 'onblur', function()
	{
		if ( p.IsValid() )
		{
			p.AddClass( 'LosingFocus' );
			$.Schedule( 0.3, function() { if( p.IsValid() ) p.RemoveClass( 'LosingFocus' ); } );
		}
	} );

	return p;
}



var CBigPictureAppInventoryCache = (function()
{
	function CBigPictureAppInventoryCache( appid, loadURL, params )
	{
		this.m_strInventoryLoadURL = loadURL;
		this.m_appid = appid;

		this.m_params = {
			bTrading: false,
			bMarket: false
		};

		for ( i in params )
		{
			this.m_params[i] = params[i];
		}

		this.m_inventory = [];

		this.m_cachedFilters = { text:'', tags: {} };
		this.m_cachedContext = [];
		this.m_cachedResults = [];
	};

	CBigPictureAppInventoryCache.prototype.SetInventoryParameter = function( strParam, strValue )
	{
		this.m_params[strParam] = strValue;
	};

	CBigPictureAppInventoryCache.prototype.GetInventoryParameter = function( strParam )
	{
		return this.m_params[strParam];
	}

	CBigPictureAppInventoryCache.prototype.BHasInventory = function( rgContexts )
	{
		$.Msg( "Checking appid " + this.m_appid + " for contexts " + JSON.stringify( rgContexts ) );
		for ( var i = 0; i < rgContexts.length; i++ )
		{
			var contextid = rgContexts[i];
			if ( contextid != APPWIDE_CONTEXT && this.m_inventory[contextid] == undefined )
			{
				$.Msg( "Missing context " + contextid );
				return false;
			}
		}
		return true;
	};

	CBigPictureAppInventoryCache.prototype.LoadInventory = function( rgContexts, onsuccess, onfailure )
	{
		this.LoadInventoryHelper( rgContexts, 0, 0, null, onsuccess, onfailure );
	};

	CBigPictureAppInventoryCache.prototype.LoadInventoryHelper = function( rgContexts, currentContext, continue_from, response_so_far, onsuccess, onfailure )
	{
		var lcontextid = rgContexts[currentContext];
		if ( lcontextid == APPWIDE_CONTEXT ) // Can't retrieve this, skip it
		{
			lcontextid = rgContexts[++currentContext];
		}

		var params = {
			trading: Number( this.GetInventoryParameter('bTrading') ),
			market: Number( this.GetInventoryParameter('bMarket') ),
			appid: this.m_appid,
			contextid: lcontextid };

		if ( this.GetInventoryParameter('steamIdPartner') )
		{
			params.partner = this.GetInventoryParameter('steamIdPartner');
		}

		if ( this.GetInventoryParameter('sessionId') )
		{
			params.sessionid = this.GetInventoryParameter('sessionId');
		}

		if ( continue_from )
		{
			params.start = continue_from;
		}

		var url = this.m_strInventoryLoadURL.replace( '%appid%', this.m_appid).replace( '%contextid%', lcontextid );

		//$.Msg( url );
		//$.Msg( JSON.stringify( params ) );

		//$.Msg( 'Showing inventory for appid='+appid+' contextid='+lcontextid+' gid='+gid );
		var that = this;
		$.AsyncWebRequest( url,
			{
				type: 'GET',
				data: params,
				success: function( data ) {that.OnReceiveInventoryResponse( rgContexts, currentContext, continue_from, data, response_so_far, onsuccess, onfailure ); },
				error: function() {that.OnReceiveInventoryResponse( rgContexts, currentContext, continue_from, null, response_so_far, onsuccess, onfailure ); } // BUGBUG
			} );

	};

	CBigPictureAppInventoryCache.prototype.OnReceiveInventoryResponse = function( rgContexts, currentContext, continue_from, data, response_so_far, onsuccess, onfailure )
	{
		// check still matches what we have displayed, otherwise just discard
		var contextid = rgContexts[currentContext];
		var cID = contextid;

		if ( data == null || !data.success )
		{
			// Failure.. show error...
			$.Msg( JSON.stringify( data ) );
			$.Msg( "Failed to get inventory for appid="+this.m_appid+" contextid="+contextid );
		}

		var rgSorted = [];
		if ( response_so_far != null )
		{
			$.Msg( "Got continued response, already had "+Object.keys( response_so_far ).length+" got "+Object.keys( data.rgInventory ).length+" more items." );
			rgSorted = response_so_far;
		}

		for( var key in data.rgInventory )
		{
			var i = data.rgInventory[key];


			// each item has id, classid, instanceid, amount, pos
			//$.Msg( "Got item "+i.id+": "+JSON.stringify( data.rgDescriptions[i.classid+'_'+i.instanceid] ) );

			var item = rgSorted[ i.pos ] = ShallowCopyItem( data.rgDescriptions[i.classid+'_'+i.instanceid] );
			item.key = key;
			item.id = i.id;
			item.contextid = contextid;
			item.amount = i.amount;
			if (i.amount > 1 )
			{
				item.is_stackable = true;
			}

			if( !item.tags )
				item.tags = [];

			//if ( !g_bIsTrading && !g_bShowTradableItemsOnly )
			{
				if( item.tradable )
					item.tags.push( kStandardTag_Tradable );
				else
					item.tags.push( kStandardTag_Untradable );
			}

			if( item.marketable )
				item.tags.push( kStandardTag_Marketable );
			else
				item.tags.push( kStandardTag_Unmarketable );

			item.parsed_tags = {};
			for ( t in item.tags )
			{
				var tag = item.tags[t];
				if ( !item.parsed_tags[tag.category] )
				{
					item.parsed_tags[tag.category] = {};
				}
				item.parsed_tags[tag.category][tag.internal_name] = true;
			}
		}

		if ( data.more )
		{
			// Request more now as well
			//$.Msg( '!!! Need to fetch more starting at '+data.more_start );
			this.LoadInventoryHelper( rgContexts, currentContext, data.more_start, rgSorted, onsuccess, onfailure );
			return;
		}
		else if ( ++currentContext < rgContexts.length )
		{
			this.m_inventory[cID] = rgSorted;
			this.LoadInventoryHelper( rgContexts, currentContext, 0, null, onsuccess, onfailure );
			return;
		}

		this.m_inventory[cID] = rgSorted;

		onsuccess( this.m_appid, rgContexts );
	};

	CBigPictureAppInventoryCache.prototype.GetSortedInventory = function( rgContexts )
	{
		rgSorted = [];
		for ( var i = 0; i < rgContexts.length; i++ )
		{
			var cID = Number( rgContexts[i] );
			for ( var j in this.m_inventory[cID] )
			{
				var item = this.m_inventory[cID][j];
				rgSorted.push( cID * MAX_ITEMS_PER_CONTEXT + Number( j ) );
			}
		}

		return rgSorted;
	}

	CBigPictureAppInventoryCache.prototype.GetSortedAndFilteredInventory = function( rgContexts, filters )
	{
		var strSearchText = filters.text;
		var rgRequiredTags = filters.tags;

		// Check if we have a previously cached result and return that if it's applicable
		if ( this.m_cachedResults.length > 0 )
		{
			$.Msg( "Returning cached result" );
			return this.m_cachedResults;
		}

		if ( strSearchText || (rgRequiredTags && Object.keys(rgRequiredTags).length > 0 ) )
		{
			$.Msg( "Filtered" );
			strSearchText = strSearchText.toLowerCase();

			var rgSorted = [];
			for ( var i = 0; i < rgContexts.length; i++ )
			{
				var cID = Number( rgContexts[i] );
				for ( var j in this.m_inventory[cID] )
				{
					var bMatched = true;
					var item = this.m_inventory[cID][j];

					if ( strSearchText )
					{
						var itemText = item.name.toLowerCase();
						if ( itemText.indexOf( strSearchText ) == -1 )
						{
							// BUGBUG: Search descriptions?
							continue;
						}
					}

					if ( rgRequiredTags )
					{
						var bCatMatched = true;
						for ( cat in rgRequiredTags )
						{
							var bFoundAny = this.BItemMatchesCategory( item, cat, rgRequiredTags );
							if ( !bFoundAny )
							{
								bCatMatched = false;
								break;
							}
						}
						if ( !bCatMatched )
						{
							continue;
						}
					}
					rgSorted.push( cID * MAX_ITEMS_PER_CONTEXT + Number( j ) );
				}
			}

			this.m_cachedContexts = rgContexts;
			this.m_cachedFilters = filters;
			this.m_cachedResults = rgSorted;
			return rgSorted;
		}
		else
		{
			this.m_cachedResults = [];
			return this.GetSortedInventory( rgContexts );
		}
	};

	CBigPictureAppInventoryCache.prototype.ClearCachedResults = function()
	{
		this.m_cachedResults = [];
	}

	CBigPictureAppInventoryCache.prototype.GetTags = function( rgContexts )
	{
		var rgTags = {};

		for ( var i = 0; i < rgContexts.length; i++ )
		{
			var cID = Number( rgContexts[i] );
			for ( var j in this.m_inventory[cID] )
			{
				var item = this.m_inventory[cID][j];
				for( var tagkey in item.tags )
				{
					var sCategoryName = item.tags[tagkey];

					var rgCategory = rgTags[sCategoryName.category];
					if ( !rgCategory )
					{
						if ( typeof sCategoryName.category != "string" )
							continue;

						rgCategory = rgTags[sCategoryName.category] = { "name": sCategoryName.category_name ? sCategoryName.category_name : sCategoryName.category, "tags": {} };
					}

					if( rgCategory.tags[ sCategoryName.internal_name ] )
						rgCategory.tags[ sCategoryName.internal_name ].count++;
					else
					{
						var rgNewTag = { "name": sCategoryName.name, "count": 1 };
						if( sCategoryName.color )
							rgNewTag.color = sCategoryName.color;
						rgCategory.tags[ sCategoryName.internal_name ] = rgNewTag;
					}
				}
			}
		}
		return rgTags;
	};

	CBigPictureAppInventoryCache.prototype.BItemMatchesCategory = function( item, cat, rgRequiredTags )
	{
		if ( rgRequiredTags == undefined || rgRequiredTags[cat] == undefined )
		{
			return true;
		}

		var bFoundAny = false;
		for ( t in rgRequiredTags[cat] )
		{
			if ( item.parsed_tags[cat][t] )
			{
				bFoundAny = true;
				break;
			}
		}

		return bFoundAny;
	};

	CBigPictureAppInventoryCache.prototype.GetFilterCounts = function( rgTags, rgContexts, filters )
	{
		var strSearchText = filters.text;
		var rgRequiredTags = filters.tags;

		var rgCounts = {};
		for ( cat in rgTags )
		{
			rgCounts[cat] = { 'any': 0 };
			for ( tag in rgTags[cat].tags )
			{
				rgCounts[cat][tag] = 0;
			}
		}

		for ( var i = 0; i < rgContexts.length; i++ )
		{
			var cID = Number( rgContexts[i] );
			for ( var j in this.m_inventory[cID] )
			{
				var item = this.m_inventory[cID][j];
				if ( strSearchText )
				{
					var itemText = item.name.toLowerCase();
					if ( itemText.indexOf( strSearchText ) == -1 )
					{
						// BUGBUG: Search descriptions
						continue;
					}
				}

				// Figure out which categories match
				var rgMatches = {};
				for ( matchcat in rgTags )
				{
					rgMatches[matchcat] = this.BItemMatchesCategory( item, matchcat, rgRequiredTags );
				}


				// For each category, if we match everything _except_ the category we're looking at,
				// then we want to count the item
				for ( cat in rgTags )
				{
					var bMatches = true;
					for ( matchcat in rgTags )
					{
						if ( matchcat == cat )
						{
							continue;
						}
						bMatches &= rgMatches[matchcat];
						if ( !bMatches )
						{
							break;
						}
					}

					if ( bMatches )
					{
						for ( t in item.parsed_tags[cat] )
						{
							rgCounts[cat][t]++;
						}
						rgCounts[cat]['any']++;
					}
				}
			}
		}
		return rgCounts;
	};

	CBigPictureAppInventoryCache.prototype.GetItemByIndex = function( idx )
	{
		var context = Math.floor( idx / MAX_ITEMS_PER_CONTEXT );
		var i = idx % MAX_ITEMS_PER_CONTEXT;

		return this.m_inventory[context][i];
	};

	CBigPictureAppInventoryCache.prototype.GetItem = function( contextid, assetid )
	{
		if ( this.m_inventory[contextid] == undefined )
		{
			$.Msg( "Inventory not found" );
			return null;
		}

		var rgAssets = this.m_inventory[contextid];
		for ( var i in rgAssets )
		{
			var asset = rgAssets[i];
			if ( asset.id == assetid )
			{
				return asset;
			}
		}
		$.Msg( "Asset not found" );
		return null;
	}

	return CBigPictureAppInventoryCache;
})();


var CBigPictureInventoryCache = (function()
{
	function CBigPictureInventoryCache( loadURL )
	{
		this.m_strInventoryLoadURL = loadURL;

		this.m_params = {
			bTrading: false,
			bMarket: false
		};

		this.m_inventories = [];
	};

	CBigPictureInventoryCache.prototype.SetInventoryParameter = function( strParam, strValue )
	{
		this.m_params[strParam] = strValue;
		for ( i in this.m_inventories )
		{
			this.m_inventories[i].SetInventoryParameter( strParam, strValue );
		}
	};

	CBigPictureInventoryCache.prototype.GetInventoryParameter = function( strParam )
	{
		return this.m_params[strParam];
	}

	CBigPictureInventoryCache.prototype.BHasInventory = function( appid, rgContexts )
	{
		if ( this.m_inventories[appid] == undefined )
		{
			return false;
		}

		return this.m_inventories[appid].BHasInventory( rgContexts );
	};

	CBigPictureInventoryCache.prototype.LoadInventory = function( appid, rgContexts, onsuccess, onfailure )
	{
		if ( this.m_inventories[appid] == undefined )
		{
			$.Msg( "Loading new inventory for " + appid );
			this.m_inventories[appid] = new CBigPictureAppInventoryCache( appid, this.m_strInventoryLoadURL, this.m_params );
		}

		this.m_inventories[appid].LoadInventory( rgContexts, onsuccess, onfailure );
	};

	CBigPictureInventoryCache.prototype.GetSortedInventory = function( appid, rgContexts, start, count )
	{
		if ( this.m_inventories[appid] == undefined )
		{
			return [];
		}

		return this.m_inventories[appid].GetSortedInventory( rgContexts).slice( start, start + count );
	};

	CBigPictureInventoryCache.prototype.GetSortedAndFilteredInventory = function( appid, rgContexts, filters, start, count )
	{
		if ( this.m_inventories[appid] == undefined )
		{
			return [];
		}

		return this.m_inventories[appid].GetSortedAndFilteredInventory( rgContexts, filters).slice( start, start + count );
	};

	CBigPictureInventoryCache.prototype.GetFilteredInventorySize = function( appid, rgContexts, filters )
	{
		if ( this.m_inventories[appid] == undefined )
		{
			return 0;
		}

		return this.m_inventories[appid].GetSortedAndFilteredInventory( rgContexts, filters).length;
	};

	CBigPictureInventoryCache.prototype.ClearCachedResults = function( appid )
	{
		if ( this.m_inventories[appid] != undefined )
		{
			this.m_inventories[appid].ClearCachedResults();
		}
	}

	CBigPictureInventoryCache.prototype.GetTags = function( appid, rgContexts )
	{
		return this.m_inventories[appid].GetTags( rgContexts );
	};

	CBigPictureInventoryCache.prototype.GetFilterCounts = function( appid, rgContexts, rgTags, filters )
	{
		return this.m_inventories[appid].GetFilterCounts( rgTags, rgContexts, filters );
	};

	CBigPictureInventoryCache.prototype.GetItemByIndex = function( appid, idx )
	{
		return this.m_inventories[appid].GetItemByIndex( idx );
	};

	CBigPictureInventoryCache.prototype.GetItem = function( appid, contextid, assetid )
	{
		if ( this.m_inventories[appid] == undefined )
		{
			$.Msg( "Inventory not found" );
			return null;
		}

		return this.m_inventories[appid].GetItem( contextid, assetid );
	}

	return CBigPictureInventoryCache;
})();

var CBigPictureInventory = (function()
{
	function CBigPictureInventory( containerID, loadURL, rgAppContextData, funcSetupGridItem )
	{
		this.m_containerID = containerID;
		this.m_strInventoryLoadURL = loadURL;
		this.m_rgAppContextData = rgAppContextData;
		this.m_funcSetupGridItem = funcSetupGridItem;

		this.m_curAppID = 0;
		this.m_curShownAppID = 0;
		this.m_curShownContext = 0;
		this.m_rgContextIds = [];
		this.m_tags = {};
		this.m_CurrentSearch = 0;
		this.m_curLoad = 0;

		this.m_firstChildIndex = 0;
		this.m_lastChildIndex = 0;

		this.m_pContainer = $("#" + this.m_containerID );
		var c = this.m_pContainer;
		this.m_pSearchEntry = c.FindChildTraverse( "SearchEntry" );
		this.m_pSearchRegion = c.FindChildTraverse( "SearchRegion" );
		this.m_pSearchWrapper = c.FindChildTraverse( "SearchWrapper" );
		this.m_pTagFilters = c.FindChildTraverse( "TagFilters" );
		this.m_pInventoryBody = c.FindChildTraverse( "InventoryBody" );
		this.m_pItemGrid = c.FindChildTraverse( "ItemGrid" );
		this.m_pFastScrollWrapper = c.FindChildTraverse( 'FastScrollWrapper' );
		this.m_pFastScrollThumb = c.FindChildTraverse( 'FastScrollThumb' );
		this.m_pContextDropdown = c.FindChildTraverse( 'ContextDropdown' );
		this.m_pLeftColumn = c.FindChildTraverse( 'LeftColumn' );
		this.m_pGridWrapper = c.FindChildTraverse( "GridWrapper" );

		var that = this;
		$.RegisterEventHandler( 'ChildIndexSelected', this.m_pItemGrid, function( p, i ) { that.GridChildIndexSelected( i ); } );
		$.RegisterEventHandler( 'ScrollToBottom', this.m_pItemGrid, function( p ) { return that.OnScrollToBottom( p ); } );
		this.m_InventoryCache = new CBigPictureInventoryCache( this.m_strInventoryLoadURL );

		this.m_Navigation = new CNXNavigation( this.m_pLeftColumn, this.m_pGridWrapper );
	}

	CBigPictureInventory.prototype.Initialize = function()
	{
		var container = this.m_pContainer;
		var that = this;
		$.RegisterEventHandler( 'DropDownSelectionChanged', container.FindChildTraverse('ContextDropdown'), function()
		{
			that.m_InventoryCache.ClearCachedResults( that.m_curAppID );
			that.UpdateItemInventoryContext();
		} );

		var searchEntry = this.m_pSearchEntry;
		searchEntry.RaiseChangeEvents( true );
		$.RegisterEventHandler( 'TextEntryChanged', searchEntry, function( g )
		{
			searchEntry.GetParent().SetHasClass( 'AlwaysVisible', searchEntry.text != '' );
			that.UpdateGridForFilters();
			return true;
		} );

		var inventoryBody = this.m_pInventoryBody;
		var itemGrid = this.m_pItemGrid;
		$.RegisterEventHandler( 'GridInFastMotion', itemGrid, function( g )
		{
			inventoryBody.AddClass( 'FastMotion' );
		} );

		$.RegisterEventHandler( 'GridStoppingFastMotion', itemGrid, function( g )
		{
			inventoryBody.RemoveClass( 'FastMotion' );
		} );

		$.RegisterEventHandler( 'GridPageRight', itemGrid, function( g )
		{
			var grid = itemGrid;
			var iFocus = grid.GetFocusedChildVisibleIndex();
			iFocus += CHILDREN_TO_MOVE_IN_FAST_MOTION;
			if ( iFocus > grid.GetChildCount() - 1 )
			{
				iFocus = grid.GetChildCount - 1;
			}
			grid.GetChild( iFocus).SetFocus();
		} );

		$.RegisterEventHandler( 'GridPageLeft', itemGrid, function( g )
		{
			var grid = itemGrid;
			var iFocus = grid.GetFocusedChildVisibleIndex();
			iFocus -= CHILDREN_TO_MOVE_IN_FAST_MOTION;
			if ( iFocus < 0 )
			{
				iFocus = 0;
			}
			grid.GetChild( iFocus).SetFocus();
		} );

		$.RegisterEventHandler( 'InputFocusSet', itemGrid, function( g )
		{
			that.UpdateFastScrollThumbPosition();
		} );

		$.RegisterKeyBind( inventoryBody, 'pad_x,steampad_x', function() { that.FocusSearch(); } );
		$.RegisterFooterButton( inventoryBody, 'pad_x', 'SEARCH' );

		$.RegisterKeyBind( inventoryBody, 'pad_x,steampad_x', function() { that.ClearAllSearchOptions(); } );
		$.RegisterFooterButton( inventoryBody, 'pad_x', 'CLEAR ALL' );
	};

	CBigPictureInventory.prototype.GridChildIndexSelected = function( i )
	{
		//$.Msg( "GridChildIndexSelected( "  + i + " )" );

		var grid = this.m_pItemGrid;
		if ( i >= this.m_lastChildIndex - REQUEST_THRESHOLD )
		{
			// Get more
			// $.Msg( "Get more bottom " + this.m_lastChildIndex + ", " + REQUEST_PAGE_SIZE );

			var filters = this.GetFilters();
			var rgContexts = this.GetCurrentContexts();
			var rgSorted = this.m_InventoryCache.GetSortedAndFilteredInventory( this.m_curAppID, rgContexts, filters, this.m_lastChildIndex, REQUEST_PAGE_SIZE );
			var total =  Object.keys( rgSorted ).length;

			if ( total == 0 )
			{
				return;
			}
			this.m_lastChildIndex += total;

			this.AddItemsToGrid( rgSorted, ++this.m_curLoad );

			// Do we need to drop some from the top?
			if ( grid.GetChildCount() > MAX_GRID_ITEMS )
			{
				// BUGBUG: Complete

				//$.Msg( "Drop some top" );
				/*
				for ( i = REQUEST_PAGE_SIZE - 1; i >= 0; i-- )
				{
					grid.GetChild(i).DeleteAsync( 0.0 );
				}
				this.m_firstChildIndex += REQUEST_PAGE_SIZE;
				this.m_topPadding += 200;
				grid.style.paddingTop = this.m_topPadding + "px";
				*/
			}
		}
		else if ( i < REQUEST_THRESHOLD )
		{
			// Don't need this until we're dropping content
			/*
			$.Msg( "Get more top" );

			if ( this.m_pItemGrid.GetChildCount() > MAX_GRID_ITEMS )
			{
				$.Msg( "Drop some bottom" );
			}
			*/
		}
	}

	CBigPictureInventory.prototype.OnScrollToBottom = function(p)
	{
		if ( p != this.m_pItemGrid )
		{
			return false;
		}

		$.Msg( "OnScrollToBottom" );

		// BUGBUG: Load the remainder of the inventory and then select the
		// last item
		return true;
	};

	CBigPictureInventory.prototype.GetInventoryCache = function()
	{
		return this.m_InventoryCache;
	}

	CBigPictureInventory.prototype.SetInventoryParameter = function( strParam, strValue )
	{
		this[strParam] = strValue;
		this.m_InventoryCache.SetInventoryParameter( strParam, strValue );
	};

	CBigPictureInventory.prototype.GetInventoryParameter = function( strParam )
	{
		return this[strParam];
	}

	CBigPictureInventory.prototype.GetContextsForAppId = function( appid )
	{
		var data = this.m_rgAppContextData[appid];

		if ( data.rgContexts.length > 0 )
			cDropdown.GetParent().AddClass( 'Visible' );

		if ( Object.keys(data.rgContexts).length > 1 )
		{
			// Add an "all items" context
			var rgContext = {
				id: APPWIDE_CONTEXT,
				asset_count: 0,
				name: 'All %s Items'.replace( '%s', data.name )
			};
			data.rgContexts[APPWIDE_CONTEXT] = rgContext;
		}

		rgContextIds = [];
		for ( var contextid in data.rgContexts )
		{
			rgContextIds.push( contextid );
		}
		return rgContextIds;
	}

	CBigPictureInventory.prototype.ShowItemInventory = function( appid )
	{
		//$.Msg( "ShowItemInventory " + appid );
		if ( this.m_curAppID != appid )
		{
			this.m_curAppID = appid;

			var cDropdown = this.m_pContextDropdown;
			//$.Msg( cDropdown.id );
			cDropdown.GetParent().AddClass( 'Building' );
			cDropdown.GetParent().RemoveClass( 'Visible' );
			cDropdown.RemoveAllOptions();

			this.m_pItemGrid.RemoveAndDeleteChildren();

			if( this.m_rgAppContextData[appid] )
			{
				var data = this.m_rgAppContextData[appid];

				if ( data.rgContexts.length > 0 )
					cDropdown.GetParent().AddClass( 'Visible' );

				this.m_rgContextIds = this.GetContextsForAppId( appid );

				var count = 0;
				var initialSelection;
				for( key in data.rgContexts )
				{
					l = $.CreatePanel( 'Label', cDropdown, key );
					l.text = data.rgContexts[key].name;
					cDropdown.AddOption( l );

					if( count == 0 )
					{
						initialSelection = l.id;
					}

					++count;
					if ( count == 2 )
						cDropdown.GetParent().AddClass( 'Visible' );
				}

				cDropdown.GetParent().RemoveClass( 'Building' );
				cDropdown.SetSelected( initialSelection ); // This will trigger the load of the data

				if ( count == 0 )
					cDropdown.GetParent().enabled = false;
				else
					cDropdown.GetParent().enabled = true;
			}
		}

		this.m_Navigation.UpdateSelectedStyle();
	};


	CBigPictureInventory.prototype.ShowItemInventoryContext = function ( appid, rgContexts, continue_from, response_so_far )
	{
		var gridWrapper = this.m_pGridWrapper;
		gridWrapper.AddClass( "NoSearch" );
		this.m_pContainer.RemoveClass( "InventoryLoaded" );
		this.m_pContainer.AddClass( "InventoryLoading" );
		this.ClearToEmptyInventory();

		gridWrapper.SetDialogVariable( "appname", this.m_rgAppContextData[appid].name );
		var loadIndex = ++this.m_curLoad;
		if ( this.m_InventoryCache.BHasInventory( appid, rgContexts ) )
		{
			var that = this;
			$.Msg( "Found cached inventory" );
			$.Schedule( 0.0, function() { that.OnInventoryLoadComplete( loadIndex, appid, rgContexts ); } );
		}
		else
		{
			var that = this;
			this.m_InventoryCache.LoadInventory( appid, rgContexts, function( appid, rgContexts ) { that.OnInventoryLoadComplete( loadIndex, appid, rgContexts ); } );
		}
	};

	CBigPictureInventory.prototype.UpdateItemInventoryContext = function()
	{
		// $.Msg( "UpdateItemInventoryContext " + JSON.stringify( this.m_rgContextIds ) );

		var s = this.m_pContextDropdown.GetSelected();
		if ( !this.m_pContextDropdown.GetParent().BHasClass( "Building" ) && ( this.m_curShownAppID != this.m_curAppID || (s && this.m_curShownContext != s.id ) ) )
		{
			var context = 0;
			if ( s )
				context = s.id;

			//$.Msg( 'Initialize for '+this.m_curAppID+' '+context );
			this.m_curShownAppID = this.m_curAppID;
			this.m_curShownContext = context;


			var rgContexts = this.GetCurrentContexts();
			this.m_pContextDropdown.GetParent().SetHasClass( "AlwaysVisible", context != APPWIDE_CONTEXT );

			this.ShowItemInventoryContext( this.m_curAppID, rgContexts, 0, null );
		}
	};


	CBigPictureInventory.prototype.ClearToEmptyInventory = function()
	{
		//$.Msg( "ClearToEmptyInventory" );

		this.m_tags = { };
		var that = this;
		//$.Schedule( 0.0, function() { that.m_pItemGrid.RemoveAndDeleteChildren(); that.m_pGridWrapper.AddClass("SearchVisible"); } );
		this.m_pSearchEntry.text = '';
	};

	CBigPictureInventory.prototype.FocusSearch = function()
	{
		this.m_pGridWrapper.AddClass("SearchVisible");
		this.m_pSearchRegion.SetFocus();
	};

	CBigPictureInventory.prototype.ClearAllSearchOptions = function()
	{
		//$.Msg( "ClearAllSearchOptions" );
		this.m_pSearchEntry.text ='';

		// Reset all tags
		var filters = this.m_pTagFilters;
		for( var i = 0; i < filters.GetChildCount(); ++i )
		{
			var dropdown = filters.GetChild( i );
			var filter = dropdown.AccessDropDownMenu();
			for( var j = 0; j < filter.GetChildCount(); ++j )
			{
				var option = filter.GetChild( j );
				if ( option.paneltype == 'ToggleButton' )
				{
					option.SetSelected( false );
				}
			}
		}

		var cDropdown = this.m_pContextDropdown;
		if ( cDropdown.GetParent().BHasClass( "Visible" ) )
		{
			cDropdown.SetSelected( cDropdown.AccessDropDownMenu().GetChild(0).id );
			this.UpdateItemInventoryContext();
		}

		this.UpdateGridForFilters();
	};


	CBigPictureInventory.prototype.UpdateAllFilterCounts = function( currentSearch )
	{
		if ( SHOW_FILTER_COUNTS && currentSearch == this.m_CurrentSearch )
		{
			var rgContexts = this.GetCurrentContexts();
			var rgCounts = this.m_InventoryCache.GetFilterCounts( this.m_curAppID, rgContexts, this.m_tags, this.GetFilters() );

			for ( cat in this.m_tags )
			{
				var dropdown = this.m_pTagFilters.FindChildTraverse( "Cat_" + cat );
				var menu  = dropdown.AccessDropDownMenu();

				for ( tag in this.m_tags[cat].tags )
				{
					var option = menu.FindChild( TagIdFromTag( tag ) );

					if ( !option )
					{
						$.Msg( "Couldn't find option " + tag + " in " + cat );
						continue;
					}
					option.text = this.m_tags[cat].tags[tag].name + ' ('+ rgCounts[cat][tag] +')';
					if ( rgCounts[cat][tag] == 0 )
					{
						option.visible = false;
					}
					else
					{
						option.visible = true;
					}
				}
				menu.FindChild( 'any' ).text = 'Any (' + rgCounts[cat]['any'] + ')';
				dropdown.GetParent().visible = ( rgCounts[cat]['any'] != 0 );
			}
		}
		return false;
	};

	CBigPictureInventory.prototype.CreateGridItem = function( item, grid, pos )
	{
		// Stale call for deleted grid (tried to reload while it was loading still)	if ( !grid.IsValid() )
		if ( !grid.IsValid() )
			return;

		var p = CreateInventoryItemPanel( item, grid );


		p.SetPanelEvent( 'onfocus', function()
		{
		 	var name_row = p.FindChildrenWithClassTraverse( "InventoryItemName" )[0];
			if ( name_row && name_row.IsValid() )
				if ( name_row.contentwidth > name_row.actuallayoutwidth )
					name_row.AddClass( 'Fade' );
		} );


		this.m_funcSetupGridItem( item, p, this );
	};

	CBigPictureInventory.prototype.AddItemsToGrid = function( rgSorted, loadIndex )
	{
		var that = this;
		var funcCreateBatch = function( rgToCreate, loadIndex, lastIdx )
		{
			$.Schedule( 0.0, function()
			{
				if ( loadIndex == that.m_curLoad ) // Check that we're still on the correct view
				{
					for( var i in rgToCreate )
					{
						var d = rgToCreate[i];
						that.CreateGridItem( that.m_InventoryCache.GetItemByIndex( that.m_curAppID, d.item ), d.grid, d.key );

						if (d.final )
						{
							g.SetIgnoreFastMotion( false );
							//
							// If we had an initial focus, clear it now - we should already be focused and
							// don't want to force focus if the user navigates to a different tab or
							// initiates a search or something.
							//
							g_unAppId = 0; // BUGBUG
							g_strMarketHashName = ''; // BUGBUG

							that.UpdateFastScrollThumbSize();
						}
					}
				}
			})
		};

		var g = this.m_pItemGrid;
		g.SetIgnoreFastMotion( true );

		this.m_pContainer.RemoveClass( "InventoryLoading" );
		this.m_pContainer.AddClass( "InventoryLoaded" );

		var rgToCreate = [];
		var lastKey = Object.keys(rgSorted)[Object.keys(rgSorted).length - 1];
		var BATCH_SIZE = 40;
		var idx = 0;
		for( key in rgSorted )
		{
			rgToCreate.push( { item: rgSorted[key], grid: g, key: key, final: ( key == lastKey ) } );
			if ( rgToCreate.length == BATCH_SIZE )
			{
				funcCreateBatch( rgToCreate, loadIndex, idx );
				rgToCreate = [];
			}
			idx++;
		}

		if ( rgToCreate.length > 0 )
			funcCreateBatch( rgToCreate, loadIndex, idx );
	};

	CBigPictureInventory.prototype.RefreshGrid = function()
	{
		this.m_pItemGrid.RemoveAndDeleteChildren();
		this.m_firstChildIndex = 0;
		this.m_lastChildIndex = 0;
		this.GridChildIndexSelected( 0 );
	}


	CBigPictureInventory.prototype.OnInventoryLoadComplete = function( loadIndex, appid, rgContexts )
	{
		// Check if this completion is for the current request, otherwise ignore it.
		if ( loadIndex != this.m_curLoad )
		{
			$.Msg( "Inventory load mismatch, got " + loadIndex + ", expected " + this.m_curLoad );
			return;
		}

		this.RefreshGrid();

		if ( Object.keys(rgSorted).length == 0 )
		{
			this.m_pContainer.RemoveClass( "InventoryLoading" );
		}

		this.m_pContainer.SetHasClass( "EmptyInventory", Object.keys(rgSorted).length == 0 );

		// Update available tags/counts for items with tags
		this.m_tags = this.m_InventoryCache.GetTags( appid, rgContexts );

		// Update filters to list all the available options
		var filters = this.m_pTagFilters;
		filters.RemoveAndDeleteChildren();
		for( var t in this.m_tags )
		{
			var category = this.m_tags[t];
			var wrapper = $.CreatePanel( 'Panel', filters, '' );
			wrapper.AddClass( "DropDownWrapper" );

			var header = $.CreatePanel( 'Label', wrapper, '' );
			header.text = category.name;
			header.AddClass( "DropDownHeader" );

			var filter = $.CreatePanel( 'DropDown', wrapper, "Cat_" + t );

			var option = $.CreatePanel( 'Label', filter, 'any' );
			option.text = 'Any';
			if ( ALLOW_MULTISELECT )
			{
				option.AddClass( 'Header' );
			}
			filter.AddOption( option );
			filter.SetSelected( option );

			for( var tag in category.tags )
			{
				// Some TF items have a blank tag.  Why?  I don't know.
				if ( ALLOW_MULTISELECT )
				{
					option =  $.CreatePanel( 'ToggleButton', filter, tag );
					option.text = category.tags[tag].name+' ('+category.tags[tag].count+')';
					option.AddClass( 'FilterOption' );
					option.SetPanelEvent( 'onactivate', this.MakeToggleOnActivateCallback( this, filter, t ) );
				}
				else
				{
					option =  $.CreatePanel( 'Label', filter, TagIdFromTag( tag ) );
					option.text = category.tags[tag].name;
				}
				filter.AddOption( option );

			}

			if ( !ALLOW_MULTISELECT )
			{
				$.RegisterEventHandler( 'DropDownSelectionChanged', filter, this.MakeDropDownSelectionChangedCallback( this, filter, t ) );
			}

			category.dirty = true;
		}

		var that = this;
		var currentSearch = ++this.m_CurrentSearch;
		$.Schedule(0.0, function() {that.UpdateAllFilterCounts( currentSearch ); } );
		this.m_pSearchRegion.ScrollToTop();
	};

	CBigPictureInventory.prototype.GetCurrentContexts = function()
	{
		var context = this.m_curShownContext;
		var rgContexts = (context == APPWIDE_CONTEXT ) ? this.m_rgContextIds : [ context ];
		return rgContexts;
	}

	CBigPictureInventory.prototype.GetFilters = function()
	{
		var textMatch = this.m_pSearchEntry.text;

		var rgRequiredTags = {};

		var filters = this.m_pTagFilters;

		for ( var t in this.m_tags )
		{
			var category = this.m_tags[t];
			var dropdown = filters.FindChildTraverse( "Cat_" + t );

			if ( ALLOW_MULTISELECT )
			{
				var menu = dropdown.AccessDropDownMenu();
				for( var tag in category.tags )
				{
					var option =  menu.FindChild( TagFromTagId( tag ) );
					if ( option.IsSelected() )
					{
						if ( !( t in rgRequiredTags ) )
						{
							rgRequiredTags[t] = {};
						}

						var cat = rgRequiredTags[t];
						cat[option.id] = 1;
					}
				}
			}
			else
			{
				//$.Msg( JSON.stringify( dropdown ) );
				var selected = dropdown.GetSelected();

				if ( selected.id != 'any' )
				{
					rgRequiredTags[t] = {};
					var cat = rgRequiredTags[t];
					cat[TagFromTagId(selected.id)] = 1;
				}
			}
			category.dirty = true;
		}

		return { text: textMatch, tags: rgRequiredTags };
	};

	CBigPictureInventory.prototype.UpdateGridForFilters = function()
	{
		this.m_InventoryCache.ClearCachedResults( this.m_curAppID );
		this.m_pGridWrapper.RemoveClass( "NoSearch" );
		var filters = this.GetFilters();
		this.RefreshGrid();

		var currentSearch = ++this.m_CurrentSearch;
		var that = this;
		$.Schedule(0.0, function() {that.UpdateAllFilterCounts( currentSearch ); } );
		this.ForceGridToLeft();
	}

	CBigPictureInventory.prototype.ForceGridToLeft = function()
	{
		this.m_pItemGrid.ScrollPanelToLeftEdge();
	}

	CBigPictureInventory.prototype.UpdateFastScrollThumbSize = function()
	{
		var thumb = this.m_pFastScrollThumb;
		var grid = this.m_pItemGrid;

		var rgContexts = this.GetCurrentContexts();
		var filters = this.GetFilters();
		var total = this.m_InventoryCache.GetFilteredInventorySize( this.m_curAppID, rgContexts, filters );

		thumb.style.width = Math.max( 100*((grid.horizontalcount / (total/grid.verticalcount ))), 5 ) + '%';
	};

	CBigPictureInventory.prototype.UpdateFastScrollThumbPosition = function()
	{
		var parent = this.m_pFastScrollWrapper;
		var thumb = this.m_pFastScrollThumb;
		var grid = this.m_pItemGrid;

		var rgContexts = this.GetCurrentContexts();
		var filters = this.GetFilters();
		var total = this.m_InventoryCache.GetFilteredInventorySize( this.m_curAppID, rgContexts, filters );
		var currentCount = grid.GetChildCount();

		$.Schedule( 0.0, function()
		{
			var space = parent.actuallayoutwidth - thumb.actuallayoutwidth;
			var transform = space * grid.scrollprogress;
			transform = transform / ( total / currentCount ); // Account for total inventory size instead of current child count

			thumb.style.transform = 'translatex( '+transform+'px )';
		})
	};

	CBigPictureInventory.prototype.MakeDropDownSelectionChangedCallback = function( obj, dropdown, t )
	{
		return function ()
		{
			var selection = dropdown.GetSelected();
			var strSelection = 'Any';
			if ( selection.id != 'any' )
			{
				strSelection = obj.m_tags[t].tags[TagFromTagId(selection.id)].name;
				dropdown.GetParent().AddClass( "AlwaysVisible" );
			}
			else
			{
				dropdown.GetParent().RemoveClass( "AlwaysVisible" );
			}
			dropdown.GetChild(0).text = strSelection;
			obj.UpdateGridForFilters();
		};
	}

	CBigPictureInventory.prototype.MakeToggleOnActivateCallback = function( obj, dropdown, t )
	{
		return function()
		{
			var category = obj.m_tags[t];
			var strSelected = "";

			var menu = dropdown.AccessDropDownMenu();
			for( var tag in category.tags )
			{
				var option =  menu.FindChild( tag );
				if ( option.IsSelected() )
				{
					if ( strSelected )
					{
						strSelected = 'Multiple';
						break;
					}
					strSelected = category.tags[tag].name;
				}
			}

			dropdown.GetChild(0).text = strSelected ? strSelected : 'Any';

			obj.UpdateGridForFilters();
			return true;
		}
	}

	CBigPictureInventory.prototype.OnMarketListingCreated = function( appid, contextid, assetid )
	{
		if ( this.m_curShownAppID == appid && this.m_curShownContext == contextid )
		{
			var elItem = this.m_pItemGrid.FindChildTraverse('Item_' + assetid);
			elItem.DeleteAsync( 0.0 );
		}

		// BUGBUG: Also delete from inventory cache

	}

	CBigPictureInventory.prototype.LoadInventories = function( oInventories, onsuccess )
	{
		$.Msg( "LoadInventories" );
		var cRequests = Object.keys( oInventories ).length;
		if ( cRequests == 0 )
		{
			$.Msg( "No inventories to load" );
			onsuccess();
		}

		$.Msg( cRequests + " to load" );
		for ( var appid in oInventories )
		{
			var rgContexts = this.GetContextsForAppId( appid );
			this.m_InventoryCache.LoadInventory(
				appid,
				rgContexts,
				function( appid, rgContexts )
				{
					$.Msg( "Completed " + appid );
					cRequests--;
					$.Msg( cRequests );
					if ( cRequests == 0 )
					{

						onsuccess();
					}
				} );
		}
	};

	CBigPictureInventory.prototype.GetContextName = function( appid, contextid )
	{
		return this.m_rgAppContextData[this.m_curAppID].rgContexts[this.m_curShownContext].name;
	};

	return CBigPictureInventory;

})();

