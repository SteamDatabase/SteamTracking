

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
		var label = $.CreatePanel( 'Label', img, 'Amount' );
		label.text = item.amount;
	}

	var name = item.name;
	if ( item.is_stackable )
	{
		name = item.amount + " " + item.name;
	}

	var name_row = $.CreatePanel( 'Label', p, 'Name' );
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
		//$.Msg( JSON.stringify( item ) );
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

var CBigPictureInventoryCache = (function()
{
	function CBigPictureInventoryCache( loadURL )
	{
		this.m_strInventoryLoadURL = loadURL;

		this.m_params = {
			bTrading: false,
			bMarket: false
		};

		this.m_inventory = {};
	};

	CBigPictureInventoryCache.prototype.SetInventoryParameter = function( strParam, strValue )
	{
		this.m_params[strParam] = strValue;
	};

	CBigPictureInventoryCache.prototype.GetInventoryParameter = function( strParam )
	{
		return this.m_params[strParam];
	}

	CBigPictureInventoryCache.prototype.BHasInventory = function( appid, rgContexts )
	{
		$.Msg( "Checking appid " + appid + " for contexts " + JSON.stringify( rgContexts ) );
		if (  this.m_inventory[appid] == undefined )
		{
			$.Msg( "Missing appid " + appid );
			return false;
		}
		for ( var i = 0; i < rgContexts.length; i++ )
		{
			var contextid = rgContexts[i];

			if ( contextid == APPWIDE_CONTEXT )
			{
				continue;
			}

			if ( this.m_inventory[appid][contextid] == undefined )
			{
				$.Msg( "Missing context " + contextid );
				return false;
			}
		}
		return true;
	};

	CBigPictureInventoryCache.prototype.LoadInventory = function( appid, rgContexts, onsuccess, onfailure )
	{
		this.LoadInventoryHelper( appid, rgContexts, 0, 0, null, onsuccess, onfailure );
	};

	CBigPictureInventoryCache.prototype.LoadInventoryHelper = function( appid, rgContexts, currentContext, continue_from, response_so_far, onsuccess, onfailure )
	{
		var lcontextid = rgContexts[currentContext];
		if ( lcontextid == APPWIDE_CONTEXT ) // Can't retrieve this, skip it
		{
			lcontextid = rgContexts[++currentContext];
		}
		
		var params = {
			trading: Number( this.GetInventoryParameter('bTrading') ),
			market: Number( this.GetInventoryParameter('bMarket') ),
			appid: appid,
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

		var url = this.m_strInventoryLoadURL.replace( '%appid%', appid).replace( '%contextid%', lcontextid );

		//$.Msg( url );
		//$.Msg( JSON.stringify( params ) );

		//$.Msg( 'Showing inventory for appid='+appid+' contextid='+lcontextid+' gid='+gid );
		var that = this;
		$.AsyncWebRequest( url,
			{
				type: 'GET',
				data: params,
				success: function( data ) {that.OnReceiveInventoryResponse( appid, rgContexts, currentContext, continue_from, data, response_so_far, onsuccess, onfailure ); },
				error: function() {that.OnReceiveInventoryResponse( appid, rgContexts, currentContext, continue_from, null, response_so_far, onsuccess, onfailure ); } // BUGBUG
			} );

	};

	CBigPictureInventoryCache.prototype.OnReceiveInventoryResponse = function( appid, rgContexts, currentContext, continue_from, data, response_so_far, onsuccess, onfailure )
	{
		// check still matches what we have displayed, otherwise just discard
		var contextid = rgContexts[currentContext];
		var cID = contextid;

		if ( data == null || !data.success )
		{
			// Failure.. show error...
			$.Msg( JSON.stringify( data ) );
			$.Msg( "Failed to get inventory for appid="+appid+" contextid="+contextid );
			return;
		}

		var rgSorted = { };
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
		}

		if ( data.more )
		{
			// Request more now as well
			//$.Msg( '!!! Need to fetch more starting at '+data.more_start );
			this.LoadInventoryHelper( appid, rgContexts, currentContext, data.more_start, rgSorted, onsuccess, onfailure );
			return;
		}
		else if ( ++currentContext < rgContexts.length )
		{
			//$.Msg( "More contexts to load, continuing" );
			if ( this.m_inventory[appid] == undefined )
			{
				this.m_inventory[appid] = {};
			}
			this.m_inventory[appid][cID] = rgSorted;
			this.LoadInventoryHelper( appid, rgContexts, currentContext, 0, null, onsuccess, onfailure );
			return;
		}

		if ( this.m_inventory[appid] == undefined )
		{
			this.m_inventory[appid] = {};
		}
		this.m_inventory[appid][cID] = rgSorted;

		onsuccess( appid, rgContexts );
	};

	CBigPictureInventoryCache.prototype.GetSortedInventory = function( appid, rgContexts )
	{
		if ( rgContexts.length == 1 )
		{
			return this.m_inventory[appid][rgContexts[0]];
		}
		else
		{
			// Multiple contexts need to be collated and returned here
			rgSorted = {};
			for ( var i = 0; i < rgContexts.length; i++ )
			{
				var cID = rgContexts[i];
				for ( var j in this.m_inventory[appid][cID] )
				{
					var item = this.m_inventory[appid][cID][j];
					rgSorted[ cID * 10000 + item.key] = item;
				}
			}
			return rgSorted;
		}
	}

	CBigPictureInventoryCache.prototype.GetItem = function( appid, contextid, assetid )
	{
		if ( this.m_inventory[appid] == undefined || this.m_inventory[appid][contextid] == undefined )
		{
			$.Msg( "Inventory not found" );
			return null;
		}

		var rgAssets = this.m_inventory[appid][contextid];
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
		this.m_grid_item_tags = {};
		this.m_CurrentSearch = 0;
		this.m_curLoad = 0;

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
		this.m_pGridWrapper = c.FindChildTraverse( "GridWrapper" );

		this.m_InventoryCache = new CBigPictureInventoryCache( this.m_strInventoryLoadURL );
	}

	CBigPictureInventory.prototype.Initialize = function()
	{
		var container = this.m_pContainer;
		var that = this;
		$.RegisterEventHandler( 'DropDownSelectionChanged', container.FindChildTraverse('ContextDropdown'), function()
		{
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
			var parent = that.m_pFastScrollWrapper;
			var thumb = that.m_pFastScrollThumb;
			var grid = itemGrid;

			$.Schedule( 0.0, function()
			{
				var space = parent.actuallayoutwidth - thumb.actuallayoutwidth;
				var transform = space * grid.scrollprogress;

				thumb.style.transform = 'translatex( '+transform+'px )';
			})
		} );

		$.RegisterKeyBind( inventoryBody, 'pad_x,steampad_x', function() { that.FocusSearch(); } );
		$.RegisterFooterButton( inventoryBody, 'pad_x', 'SEARCH' );

		$.RegisterKeyBind( inventoryBody, 'pad_x,steampad_x', function() { that.ClearAllSearchOptions(); } );
		$.RegisterFooterButton( inventoryBody, 'pad_x', 'CLEAR ALL' );
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
	};


	CBigPictureInventory.prototype.ShowItemInventoryContext = function ( appid, rgContexts, continue_from, response_so_far )
	{
		var gridWrapper = this.m_pGridWrapper;
		gridWrapper.AddClass( "NoSearch" );
		gridWrapper.AddClass( "InventoryLoading" );
		this.ClearToEmptyInventory();

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


			var rgContexts = [ context ];
			if ( context == APPWIDE_CONTEXT )
			{
				rgContexts = this.m_rgContextIds;
			}
			this.m_pContextDropdown.GetParent().SetHasClass( "AlwaysVisible", context != APPWIDE_CONTEXT );

			this.ShowItemInventoryContext( this.m_curAppID, rgContexts, 0, null );
		}
	};


	CBigPictureInventory.prototype.ClearToEmptyInventory = function()
	{
		//$.Msg( "ClearToEmptyInventory" );

		this.m_tags = { };
		this.m_grid_item_tags = { };
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
//		$.Msg( JSON.stringify( this.m_tags ) );
//		$.Msg( JSON.stringify( this.m_grid_item_tags ) );
		if ( currentSearch == this.m_CurrentSearch )
		{
			for ( id in this.m_tags )
			{
				var category = this.m_tags[id];
				if ( category.dirty )
				{
					var dropdown = this.m_pTagFilters.FindChildTraverse( id );
					var menu = dropdown.AccessDropDownMenu();

					for ( var tag in category.tags )
					{
						category.tags[tag].count = 0;
						category.totalcount = 0;
					}

					// Figure out which categories have to match in order
					// for an item to be counted in this category.  It
					// needs to match the search text and every
					// category but this one.
					var rgCategories = [ 'Match_Search' ];
					for ( var cat in this.m_tags )
					{
						if ( cat != id )
						{
							rgCategories.push( "Cat_" + cat );
						}
					}

					var g = this.m_pItemGrid;
					for( var i = 0; i < g.GetChildCount(); ++i )
					{
						var p = g.GetChild( i );
						var bMatch = true;
						for ( var j = 0; j < rgCategories.length; j++ )
						{
							if ( !p.BHasClass( rgCategories[j] ) )
							{
								bMatch = false;
								break;
							}
						}

						if ( bMatch )
						{
							var item_tags = this.m_grid_item_tags[ p.id ];
							category.totalcount++;
							for ( var t in item_tags )
							{
								var item_tag = item_tags[t];
								if ( item_tag.category == id )
								{
									category.tags[item_tag.internal_name].count++;
								}
							}
						}
					}

					category.dirty = false;

					var bAnyVisible = false;
					menu.FindChild( 'any' ).text = 'Any (' + category.totalcount + ')';
					for ( var tag in category.tags )
					{
						var option =  menu.FindChild( tag );
						option.text = category.tags[tag].name+' ('+category.tags[tag].count+')';
						if ( category.tags[tag].count == 0 )
						{
//							$.Msg( "Hiding " + category.tags[tag].name );
							option.visible = false;
						}
						else
						{
							bAnyVisible = true;
							option.visible = true;
						}
					}
					dropdown.GetParent().visible = bAnyVisible;
				}
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
		this.m_grid_item_tags['Item_'+item.id] = item.tags;

		//
		// Set styles on panel to show that it passes all categories
		// (since search filters are initially empty).  This will
		// allow filter counts to be accurately computed before
		// a search is entered (which we'll do in market to get
		// proper counts of marketable items).
		//
		p.AddClass( "Match_Search" );
		for ( var cat in this.m_tags )
		{
			p.AddClass( "Cat_" + cat );
		}

		var name_row = p.FindChildrenWithClassTraverse( "InventoryItemName" )[0];

		p.SetPanelEvent( 'onfocus', function()
		{
			//$.Msg( JSON.stringify( item ) );
			if ( name_row.IsValid() )
				if ( name_row.contentwidth > name_row.actuallayoutwidth )
					name_row.AddClass( 'Fade' );
		} );

		this.m_funcSetupGridItem( item, p, this );
	};

	CBigPictureInventory.prototype.BuildGridFromSortedItems = function( rgSorted, loadIndex )
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
						that.CreateGridItem( d.item, d.grid, d.key );

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
					$.Msg( "Created up to " + lastIdx );
				}
			})
		};

		var g = this.m_pItemGrid;
		g.RemoveAndDeleteChildren();
		g.SetIgnoreFastMotion( true );

		this.m_pGridWrapper.RemoveClass( "InventoryLoading" );

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
	}


	CBigPictureInventory.prototype.OnInventoryLoadComplete = function( loadIndex, appid, rgContexts )
	{
		// Check if this completion is for the current request, otherwise ignore it.
		if ( loadIndex != this.m_curLoad )
		{
			$.Msg( "Inventory load mismatch, got " + loadIndex + ", expected " + this.m_curLoad );
			return;
		}

		var rgSorted = this.m_InventoryCache.GetSortedInventory( appid, rgContexts );
		this.BuildGridFromSortedItems( rgSorted, loadIndex );

		if ( Object.keys(rgSorted).length == 0 )
		{
			this.m_pGridWrapper.RemoveClass( "InventoryLoading" );
			// BUGBUG: Empty inventory message
		}

		// Update available tags/counts for items with tags
		for( key in rgSorted )
		{
			for( var tagkey in rgSorted[key].tags )
			{
				var sCategoryName = rgSorted[key].tags[tagkey];

				var rgCategory = this.m_tags[sCategoryName.category];
				if ( !rgCategory )
				{
					if ( typeof sCategoryName.category != "string" )
						continue;

					rgCategory = this.m_tags[sCategoryName.category] = { "name": sCategoryName.category_name ? sCategoryName.category_name : sCategoryName.category, "tags": {} };
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

			var filter = $.CreatePanel( 'DropDown', wrapper, t );

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
				if ( ALLOW_MULTISELECT )
				{
					option =  $.CreatePanel( 'ToggleButton', filter, tag );
					option.text = category.tags[tag].name+' ('+category.tags[tag].count+')';
					option.AddClass( 'FilterOption' );
					option.SetPanelEvent( 'onactivate', this.MakeToggleOnActivateCallback( this, filter, t ) );
				}
				else
				{
					option =  $.CreatePanel( 'Label', filter, tag );
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

	CBigPictureInventory.prototype.UpdateGridForFilters = function()
	{
		this.m_pGridWrapper.RemoveClass( "NoSearch" );
		var textMatch = this.m_pSearchEntry.text;

		var rgRequiredTags = {};

		var filters = this.m_pTagFilters;

		for ( var t in this.m_tags )
		{
			var category = this.m_tags[t];
			var dropdown = filters.FindChildTraverse( t );

			if ( ALLOW_MULTISELECT )
			{
				var menu = dropdown.AccessDropDownMenu();
				for( var tag in category.tags )
				{
					var option =  menu.FindChild( tag );
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
				var selected = dropdown.GetSelected();

				if ( selected.id != 'any' )
				{
					rgRequiredTags[t] = {}
					var cat = rgRequiredTags[t];
					cat[selected.id] = 1;
				}
			}
			category.dirty = true;
		}

		var funcFilterBatch = function( x, rgToApplyFilters, currentSearch, textMatch, rgRequiredTags )
		{
			$.Schedule( 0.0, function()
			{
				if ( currentSearch == x.m_CurrentSearch )
				{
					for( var i in rgToApplyFilters )
					{
						var p = rgToApplyFilters[i];
						if ( !p.IsValid() )
							continue;

						p.visible = true;
						p.AddClass( "Match_Search" );

						var item_tags = x.m_grid_item_tags[ p.id ];

						// First check search substring if we have it
						if ( textMatch.length )
						{
							textMatch = textMatch.toLowerCase();
							for( var iLabel = 0; iLabel < p.GetChildCount(); ++iLabel )
							{
								var pLabel = p.GetChild( iLabel );
								if ( pLabel.BHasClass( 'InventoryItemName' ) )
								{
									var itemText = pLabel.text;
									itemText = itemText.toLowerCase();

									if ( itemText.indexOf( textMatch ) == - 1 )
									{
										p.RemoveClass( "Match_Search" );
										p.visible = false;
									}
								}
							}
						}

						// Iterate required tags
						for( var cat in x.m_tags )
						{
							var bFoundAnyTag = false;
							p.AddClass( "Cat_" + cat );

							if ( rgRequiredTags[cat] )
							{
								for ( var tag in rgRequiredTags[cat] )
								{
									// Check item tags includes this tag
									for( var t in item_tags )
									{
										var item_tag = item_tags[t];
										if ( item_tag.category == cat && item_tag.internal_name == tag )
										{
											bFoundAnyTag = true;
											break;
										}
									}
								}

								if ( !bFoundAnyTag )
								{
									p.visible = false;
									p.RemoveClass( "Cat_" + cat );
								}
							}
						}
					}
				}
			})
		};


		var g = this.m_pItemGrid;
		var currentSearch = ++this.m_CurrentSearch;
		var rgToApplyFilters = [];
		for( var i = g.GetChildCount() - 1; i >=0 ; --i )
		{
			// Assume making visible again first
			var p = g.GetChild( i );
			rgToApplyFilters.push( p );

			if ( rgToApplyFilters.length == 200 )
			{
				funcFilterBatch( this, rgToApplyFilters, currentSearch, textMatch, rgRequiredTags );
				rgToApplyFilters = [];
			}
		}

		if ( rgToApplyFilters.length )
			funcFilterBatch( this, rgToApplyFilters, currentSearch, textMatch, rgRequiredTags );

		var that = this;
		$.Schedule(0.0, function() {that.UpdateAllFilterCounts( currentSearch ); } );
		this.ForceGridToLeft();
	}

	CBigPictureInventory.prototype.ForceGridToLeft = function()
	{
		// BUGBUG: Can remove exception handling when Grid exposes ScrollPanelToLeftEdge.
		try
		{
			this.m_pItemGrid.ScrollPanelToLeftEdge();
		}
		catch (err)
		{
		}
	}

	CBigPictureInventory.prototype.UpdateFastScrollThumbSize = function()
	{
		var thumb = this.m_pFastScrollThumb;
		var grid = this.m_pItemGrid;
		thumb.style.width = Math.max( 100*((grid.horizontalcount / (grid.GetChildCount()/grid.verticalcount ))), 5 ) + '%';
	};

	CBigPictureInventory.prototype.MakeDropDownSelectionChangedCallback = function( obj, dropdown, t )
	{
		return function ()
		{
			var selection = dropdown.GetSelected();
			var strSelection = 'Any';
			if ( selection.id != 'any' )
			{
				strSelection = obj.m_tags[t].tags[selection.id].name;
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

