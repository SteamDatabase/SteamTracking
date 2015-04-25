

// Array of filtered item defs
g_rgFilteredItems = [];

// g_rgCurrentlySelectedDropdownElements[unDropdownID] represents the currently selected subelement ID for iDropdown.
g_rgCurrentlySelectedDropdownElements = {};

// g_rgLastValidDropdownSelection[unDropdownID] will either be null or be the ID of the last sub-element
g_rgLastValidDropdownSelection = {};

// g_rgHighlightedDropdownElementIDs[unDropdownID] represents the element ID for the given dropdown
g_rgHighlightedDropdownElementIDs = {};

$g_rgDropdownContainerElements = {};
$g_rgDropdownPanelElements = {};	// The hovering panel that appears when the user interacts with the control
$g_rgDropdownLabelElements = {};	// The labels above each dropdown
$g_rgDropdownTextElements = {};
$g_rgDropdownElements = {};
$g_rgDropdownElementsDisabled = {};
$g_rgDropdownSubElements = {};

// Render timer ID
g_nRenderTimerID = null;

//----------------------------------------------------------------------------------------------------------------------

function ItemDisplay( rgSettings )
{
	this.m_rgSettings = rgSettings;
}

//----------------------------------------------------------------------------------------------------------------------

function BShouldUseLargeIcons()
{
		return true;
}

function GetNumItemsPerRow()
{
	return BShouldUseLargeIcons() ? 4 : g_nItemsPerRow;
}

function GetNumDisplayItemCounts()
{
	return g_rgDisplayItemCounts[ BShouldUseLargeIcons() ? 1 : 0 ].length;
}

function GetDisplayItemCount( i )
{
	return g_rgDisplayItemCounts[ BShouldUseLargeIcons() ? 1 : 0 ][i];
}

function GetTotalNumberOfDisplayItems()
{
	if ( BIsHomeCategorySelected() )
	{
		return 0;
	}

	return g_rgFilteredItems != null ? g_rgFilteredItems.length : 0;
}

function ComputeMaxPages()
{
	if ( g_nMaxDisplayItems == 0 )
	{
		console.log( "g_nMaxDisplayItems = 0! Can't compute g_nMaxPages." );
		return;
	}

	g_nMaxPages = parseInt( Math.ceil( GetTotalNumberOfDisplayItems() / g_nMaxDisplayItems ) );
}

function SetMaxDisplayItems( nMaxDisplayItems, bAddToHistory, bDontRender )
{
	if ( bAddToHistory != undefined && bAddToHistory )
	{
		DoHashRedirect( HASHHISTORYNAME_MAXDISPLAYITEMS, nMaxDisplayItems );
	}

	g_nMaxDisplayItems = nMaxDisplayItems;

	// Allows init to call SetMaxDisplayItems() and SetCurrentPage() without rendering twice in a row
	if ( bDontRender != undefined && !bDontRender )
	{
		SetCurrentPage( 0 );
		RecomputePagesAndRender();
	}
}

function SetCurrentPageAndRender( iPage, bAddToHistory )
{
	SetCurrentPage( iPage, bAddToHistory );
	g_Renderer.RenderItems();
}

function SetCurrentPage( iPage, bAddToHistory )
{
	// Add to history if necessary
	if ( bAddToHistory != undefined && bAddToHistory )
	{
		DoHashRedirect( HASHHISTORYNAME_PAGE, parseInt( iPage ) + 1 );
	}

	// Cache off clamped version of iPage
	g_iCurrentPage = Math.max( 0, Math.min( g_nMaxPages - 1, iPage ) );

	// Re-render
	RenderPageNavigation();
}

function RecomputePagesAndRender()
{
	// Recompute the max number of pages based on the new max display items
	ComputeMaxPages();

	RenderNavMaxDisplayItems();
	RenderPageNavigation();
}

// Setup HTML for navigation panels which display links for different display options
function RenderNavMaxDisplayItems()
{
	var strHTML = 'Items per page: ';
	var strSpacing = "&nbsp;&nbsp;";
	for ( var i = 0; i < GetNumDisplayItemCounts(); i++ )
	{
		var nCount = GetDisplayItemCount(i);
		if ( g_nMaxDisplayItems == nCount )
		{
			strHTML += '<span class="HighlightedNavText">' + nCount + '</span>' + strSpacing;
		}
		else if ( nCount == -1 )
		{
			// TODO: We aren't going to be displaying *all* items with a single filter configuration, so this number will likely be too big - but should be OK for now.
			strHTML += "<a href='javascript:SetMaxDisplayItems( " + g_nNumItems + ", true );'>" + g_strLocalized.all + strSpacing + "</a>";
		}
		else
		{
			strHTML += "<a href='javascript:SetMaxDisplayItems( " + nCount + ", true );'>" + nCount + strSpacing + "</a>";
		}
	}

	// This will apply to all uses of this style
	$( '.NumDisplayItems' ).html( strHTML );
}

function GetPageLinkHTML( iPage, strSpacing )
{
	return "<a href='javascript:SetCurrentPageAndRender( " + iPage + ", true );'>" + ( iPage + 1 ) + strSpacing + "</a>";
}

function RenderPageNavigation()
{
	var strHTML = '';

	// 1 page only is a special case
	if ( g_nMaxPages == 1 )
	{
		strHTML += "<div class='PageNavPagesContainer'>";
			strHTML += '<div class="HighlightedLink">1</div> of 1';
		strHTML += "</div>";
	}
	else
	{
		var iLastPage = g_nMaxPages - 1;
		var nNumMiddlePages = Math.min( 3, g_nMaxPages );	// "Middle," as in in between "1 ... " and " ... <N>" - although we don't always display either
		var strSpacing = "&nbsp;&nbsp;"
			
		// Display "previous page" button
		if ( g_iCurrentPage == 0 )
		{
			strHTML += "<div class='SlimButton DarkGrayButton BaseNavButton BtnBack'><div class='ArrowLeft'></div></div>";
		}
		else
		{
			strHTML += "<div class='SlimButton DarkGrayButton BaseNavButton BtnBack' onclick='SetCurrentPage( " + ( g_iCurrentPage - 1 ) + ", true );'><div class='ArrowLeft'></div></div>";
		}

		strHTML += "<div class='PageNavPagesContainer'>";

			if ( g_nMaxPages == 3 )
			{
				for ( var i = 0; i < 3; i++ )
				{
					strHTML += GetPageLinkHTML( i, strSpacing );
				}
			}
			else
			{
				// Add left "1 ..."  if the user is on page 3 or greater
				if ( g_iCurrentPage >= 2 )
				{
					strHTML += GetPageLinkHTML( 0, strSpacing ) + "&#8230;" + strSpacing;
				}

				// Display a max of 3 pages, besides "1 ..." and "... <N>"
				var iFirstMiddlePage = Math.max( 0, g_iCurrentPage - 1 );
				var iLastMiddlePage = Math.min( iFirstMiddlePage + nNumMiddlePages - 1, iLastPage );
				for ( var i = iFirstMiddlePage; i <= iLastMiddlePage; i++ )
				{
					if ( g_iCurrentPage == i )
					{
						strHTML += '<span class="HighlightedNavText">' + ( i + 1 ) + '</span>' + strSpacing;
					}
					else
					{
						strHTML += GetPageLinkHTML( i, strSpacing );
					}
				}

				// Add right "... <N>" if the user is within 3 pages of the last page
				if ( g_iCurrentPage < iLastPage - 1 )
				{
					strHTML += "&#8230;" + strSpacing + GetPageLinkHTML( g_nMaxPages - 1, strSpacing );
				}
			}

		// End div for page links
		strHTML += "</div>";

		// Display "next page" button
		if ( g_iCurrentPage == iLastPage )
		{
			strHTML += "<div class='SlimButton DarkGrayButton BaseNavButton BtnForward'><div class='ArrowRight'></div></div>";
		}
		else
		{
			strHTML += "<div class='SlimButton DarkGrayButton BaseNavButton BtnForward' onclick='SetCurrentPage( " + ( g_iCurrentPage + 1 ) + ", true );'><div class='ArrowRight'></div></div>";
		}
	}

	$( '.PageNav' ).html( strHTML );
}

var g_Renderer = {
	m_nRenderTimerID : null,

	_DoRenderItems: function()
	{
		// Clear timer ID
		this.m_nRenderTimerID = null;

		RebuildFilteredItemsList();
		RecomputePagesAndRender();

		var iFirstItemOnPage = g_iCurrentPage * g_nMaxDisplayItems;
		var nNumItemsToDisplay = Math.min( Math.max( g_rgFilteredItems.length - g_iCurrentPage * g_nMaxDisplayItems, 0 ), g_nMaxDisplayItems );
		var rgItems = g_rgFilteredItems.splice( iFirstItemOnPage, nNumItemsToDisplay );
		var strItemIDsQueryString = '&';

		// Build the query string
		for ( var i = 0; i < rgItems.length; ++i )
		{
			strItemIDsQueryString += 'id' + i + '=' + rgItems[i] + '&';
		}

		function OnRenderFail()
		{
			g_MainContainerGrid.HideSpinnerAndOverlay();
			GenericDialog.ShowErrorDialog( 'There was an error retrieving items from the server. Please try again in a few minutes.' );
		}

		var strURL = g_strRenderItemsBaseURL + strItemIDsQueryString;

		$.get(
			strURL,
			function( json )
			{
				if ( !json.result )
				{
					OnRenderFail();
					return;
				}

				g_MainContainerGrid.HideSpinnerAndOverlay();
				g_MainContainerGrid.SetItemHTML( json.html );
			}
		).error( OnRenderFail );
	},

	RenderItems: function()
	{
		if ( this.m_nRenderTimerID !== null )
			return;

		g_MainContainerGrid.ShowSpinnerAndOverlay();

		var This = this;
		this.m_nRenderTimerID  = setTimeout(
			function()
			{
				This._DoRenderItems();
			},
			1
		);
	},

	Render: function()
	{
				if ( BIsHomeCategorySelected() )
		{
			g_FeaturedTab.Load();

			$( '.StoreItemNavContainer' ).hide();
			$( '#StoreFilters' ).hide();
			$( '#Featured' ).show();
			$( '#MainItemContainer' ).hide();

			g_MainContainerGrid.ClearItemGrid();
		}
		else
		{
			// Autographed Treasure hack
			if ( g_nSelectedCategoryID == 236204710 )
			{
				$( '.StoreItemNavContainer' ).hide();
				$( '#StoreFilters' ).hide();
			}
			else
			{
				$( '.StoreItemNavContainer' ).show();
				$( '#StoreFilters' ).show();
			}

			$( '#Featured' ).hide();
			$( '#MainItemContainer' ).show();

			this.RenderItems();
		}

		// Show the store banner (if it has been added to the DOM)
		var bIsCurrentSalesCategory = g_rgStoreCategories[g_nSelectedCategoryID].custom_filter_name == 'current_sales';
		if ( BIsHomeCategorySelected() || bIsCurrentSalesCategory )
			$( '#FrostivusSaleBanner' ).show();
		else
			$( '#FrostivusSaleBanner' ).hide();
	}
};

var g_MainContainerGrid = {
	Init: function()
	{
		this.$m_Grid = $( '#MainItemGrid' );
		this.$m_GridBg = $( '#ItemContainerBg' );
		this.$m_ItemContainerOverlay = $( '#ItemContainerOverlay' );

		this.m_SpinnerSettings = {
			lines: 11, // The number of lines to draw
			length: 12, // The length of each line
			width: 5, // The line thickness
			radius: 14, // The radius of the inner circle
			rotate: 0, // The rotation offset
			color: '#fff', // #rgb or #rrggbb
			speed: 1, // Rounds per second
			trail: 60, // Afterglow percentage
			shadow: false, // Whether to render a shadow
			hwaccel: true, // Whether to use hardware acceleration
			className: 'spinner', // The CSS class to assign to the spinner
			zIndex: 2e9, // The z-index (defaults to 2000000000)
			top: 'auto', // Top position relative to parent in px
			left: 'auto' // Left position relative to parent in px
		};
	},

	ShowOverlay: function( bShow )
	{
	},

	HasItemDef: function( nDefIndex )
	{
				return this.$m_Grid.find( '#MG_' + nDefIndex ).length > 0;
	},

	HideSpinnerAndOverlay: function()
	{
		this.$m_ItemContainerOverlay.unspin();
		this.$m_ItemContainerOverlay.fadeOut();
	},

	ShowSpinnerAndOverlay: function()
	{
				this.ClearItemGrid();
		this.$m_ItemContainerOverlay.fadeIn( 50 );
		this.$m_ItemContainerOverlay.height( Math.max( this.$m_GridBg.height(), this.$m_Grid.height() ) );

				this.$m_ItemContainerOverlay.spin( this.m_SpinnerSettings );
	},

	SetItemHTML: function( strHTML )
	{
		this.ClearItemGrid();
		this.$m_Grid.html( strHTML );
	},

	ClearItemGrid: function()
	{
		this.$m_Grid.empty();
		g_ItemTooltip.Hide();
	}
};

function ClearCachedDropdownHighlightState( unDropdownID )
{
	CacheDropdownHighlightState( unDropdownID, null );
}

function GetHighlightedDropdownElementID( unDropdownID )
{
	if ( g_rgHighlightedDropdownElementIDs[ unDropdownID ] != undefined )
	{
		return g_rgHighlightedDropdownElementIDs[ unDropdownID ];
	}

	// Default to selected item
	return g_rgCurrentlySelectedDropdownElements[ unDropdownID ];
}

function CacheDropdownHighlightState( unDropdownID, unHighlightedElement )
{
	// NOTE: state can be null, representing no highlighted item for the given dropdown
	g_rgHighlightedDropdownElementIDs[unDropdownID] = unHighlightedElement;
}

// NOTE: iElementToSelect indexes into the array of currently visible elements (g_rgListedDropdownElements), *not* all elements.
function SetDropdownHighlightState( unDropdownID, unElementIDToSelect )
{
	// Store the data in the element
	CacheDropdownHighlightState( unDropdownID, unElementIDToSelect );

	// Go through each element and adjust its style
	var rgDropdownElements = GetDropdownElements( unDropdownID );
	for ( var unElementID in rgDropdownElements )
	{
		var $CurElement = $g_rgDropdownSubElements[ unDropdownID ][ unElementID ];

		// Remove any existing style
		$CurElement.removeClass();

		if ( unElementID == unElementIDToSelect )
		{
			$CurElement.addClass( 'DropdownItemSelected' );
		}
	}
}

function GetFirstVisibleDropdownElementID( unDropdownID )
{
	return $g_rgDropdownPanelElements[ unDropdownID ].children( ':visible' ).first().data( 'elem-id' );
}

function GetNextVisibleElementID( unDropdownID, unReferenceElementID )
{
	// Wrap around if necessary
	$SelectedElement = $g_rgDropdownSubElements[ unDropdownID ][ unReferenceElementID ];
	$NextElement = $SelectedElement.nextAll( ':visible' ).first();
	if ( !$NextElement.length )
	{
		$NextElement = $SelectedElement.prevAll( ':visible' ).last();
	}

	return $NextElement.data( 'elem-id' );
}

function GetPrevVisibleElementID( unDropdownID, unReferenceElementID )
{
	// Wrap around if necessary
	$SelectedElement = $g_rgDropdownSubElements[ unDropdownID ][ unReferenceElementID ];
	$PrevElement = $SelectedElement.prevAll( ':visible' ).first();
	if ( !$PrevElement.length )
	{
		$PrevElement = $SelectedElement.nextAll( ':visible' ).last();
	}

	return $PrevElement.data( 'elem-id' );
}

// nDirection: -1 means up, 1 means down
function AdjustDropdownSelectionState( unDropdownID, nDirection )
{
	// Make sure the dropdown is visible, since a user can press the down or up arrow to jump right to the player class listing
	SetDropdownVisibilityState( unDropdownID, DISPLAY_SHOW );

	// Get the ID of the next visible element - wrap around if necessary
	var unSelectedElementID = GetHighlightedDropdownElementID( unDropdownID );
	var unNewElementIDToSelect = ( nDirection > 0 ) ? GetNextVisibleElementID( unDropdownID, unSelectedElementID ) : GetPrevVisibleElementID( unDropdownID, unSelectedElementID );

	// Set new dropdown state and cache in DOM
	SetDropdownHighlightState( unDropdownID, unNewElementIDToSelect );

	// Set the text
	SetDropdownTextEntryValue( unDropdownID, unNewElementIDToSelect );

	// Select the new text
	SelectDropdownText( unDropdownID );
}

function OnDropdownButtonClicked( unDropdownID )
{
	UpdateDropdownVisibility( unDropdownID, DISPLAY_TOGGLE, true );
	SelectDropdownText( unDropdownID );
}

function OnDropdownTextKeyDown( event, unDropdownID )
{
	switch( event.keyCode )
	{
	case $.keyCode.TAB:
		// Clear the selection state so there is no lingering state if the dropdown needs to pop up again
		ClearCachedDropdownHighlightState( unDropdownID );
		return;
	}
}

function OnDropdownTextKeyUp( event, unDropdownID )
{
	switch( event.keyCode )
	{
	case $.keyCode.TAB:
		// We get a tab key up event when a user tabs over from another control - we early out here otherwise the text
		// in the box will be interpreted as text the user typed and filter a dropdown's elements
		return;

	case $.keyCode.ENTER:
		// Perform the filtering or sorting
		CommitDropdownSelection( unDropdownID );	// The element to be committed is based on what subelement's currently highlighted
		return;

	case $.keyCode.UP:
		AdjustDropdownSelectionState( unDropdownID, -1 );
		return;

	case $.keyCode.DOWN:
		AdjustDropdownSelectionState( unDropdownID, 1 );
		return;

	case $.keyCode.RIGHT:
		return;

	case $.keyCode.LEFT:
		return;

	case $.keyCode.SHIFT:
		// Early out if shift key was pressed, otherwise shift+tabbing between dropdowns will cause whatever is currently in
		// the dropdown text entry to be treated as if the user just typed it. For example, if I shift tab to a dropdown with
		return;
	}

	DisplayAutoComplete( unDropdownID );
}

function OnDropdownLoseFocus( unDropdownID )
{
	// Reset the dropdown text entry to the last valid state
	var unLastValidSelectionID = g_rgLastValidDropdownSelection[ unDropdownID ];
	if ( unLastValidSelectionID != null )
	{
		SetDropdownTextEntryValue( unDropdownID, unLastValidSelectionID );
	}
}

// This uses the currently selected dropdown
function CommitDropdownSelection( unDropdownID )
{
	// Hide the dropdown
	UpdateDropdownVisibility( unDropdownID, DISPLAY_HIDE );

	// Updates the current filter
	var unElementID = GetHighlightedDropdownElementID( unDropdownID );
	UpdateDropdownState( unDropdownID, unElementID );

	// Cache off this state so we can revert to it if the user tabs away without pressing enter, etc.
	g_rgLastValidDropdownSelection[unDropdownID] = unElementID;

	// Clear the selection state so there is no lingering state if the dropdown needs to pop up again
	ClearCachedDropdownHighlightState( unDropdownID );

	// Update history
	DoHashRedirect( GetHistoryParamNameForDropdown( unDropdownID ), unElementID );
}

function DisplayAutoComplete( unDropdownID )
{
	var strInput = $.trim( $g_rgDropdownTextElements[ unDropdownID ].val() ).toLowerCase();
	if ( strInput.length == 0 )
	{
		// Display all available options if there is no text
		ResetDropdownElements( unDropdownID, null );
		UpdateDropdownVisibility( unDropdownID, DISPLAY_SHOW );
		SetDropdownHighlightState( unDropdownID, GetDefaultElementIDForDropdown( unDropdownID ) );
		return;
	}

	var rgAutocompleteElementIDs = new Array();	// List of relevant filters to display

	// Now loop through all of the dropdown's elements and see if there are any matches
	var rgDropdownElements = GetDropdownElements( unDropdownID );
	for ( var unCurElementID in rgDropdownElements )
	{
		var strCurSearchTerm = rgDropdownElements[unCurElementID].localized_text.toLowerCase();
		if ( strCurSearchTerm.indexOf( strInput ) != -1 )
		{
			rgAutocompleteElementIDs.push( unCurElementID );
		}
	}

	// If there were matches, re-render the dropdown with the matched results and show it
	if ( rgAutocompleteElementIDs.length != 0 )
	{
		ResetDropdownElements( unDropdownID, rgAutocompleteElementIDs );
		UpdateDropdownVisibility( unDropdownID, DISPLAY_SHOW );
		SetDropdownHighlightState( unDropdownID, GetFirstVisibleDropdownElementID( unDropdownID ) );
	}
	else
	{
		UpdateDropdownVisibility( unDropdownID, DISPLAY_HIDE );
		// TODO: Display "No player classes found," etc.
	}
}

function AddDropdownSubelementIfNotPresent( rgElements, strFilterName )
{
	for ( var i = 0; i < rgElements.length; i++ )
	{
		if ( rgElements[i] == strFilterName )
			return;
	}

	rgElements.push( strFilterName );
}

function GetSelectedCategoryId()
{
	return parseInt( g_rgStoreCategories[ g_nSelectedCategoryID ].id );
}

function BDoesItemPassFilterAndCategory( nDefIndex, fnGetDropdownElementID )	// fnGetDropdownElementID() should return an element ID given a dropdown ID
{
	if ( !BItemPassesCategoryFilter( nDefIndex, GetSelectedCategoryId() ) )
		return false;

	var bMatchesAllFilters = true;

	// If the list of filters for a given asset matches what the user has specified for the given filter type, add it to the filtered items list
	ForEachEnabledVisibleFilterDropdown(
		function( unDropdownID )
		{
			// Each asset can pass through for multiple filter elements - get that list of filter elements
			var rgValidFilterElementsForItem = g_rgItemInfo[nDefIndex].filter_data[unDropdownID].element_ids;

			// Go through all valid filter elements for the given asset - if any one of its elements matches the currently selected element ID of the current filter, let is pass
			var bAtLeastOneItemElementWasValid = false;
			for( var iElement = 0; iElement < rgValidFilterElementsForItem.length; iElement++ )
			{
				var unCurValidElementIDForItem = rgValidFilterElementsForItem[ iElement ];	// Gets the element ID for the given filter
				var unSelectedElementIDForFilter = fnGetDropdownElementID( unDropdownID );

				if ( unCurValidElementIDForItem == unSelectedElementIDForFilter )
				{
					bAtLeastOneItemElementWasValid = true;
					break;	// Break out of the loop
				}
			}

			if ( !bAtLeastOneItemElementWasValid )
			{
				bMatchesAllFilters = false;
			}
		}
	);

	// If all filters pass for this class ID and it can be displayed in the currently selected store tab (or its submenus, if any), add it to the list of filtered assets
	var bIsPackItem = g_rgItemInfo[nDefIndex].is_pack_item;	// Don't add pack items, which are not for sale individually, no matter what
	return !bIsPackItem && bMatchesAllFilters;
}

function GetSelectedElementIDForDropdown( unDropdownID )
{
	return g_rgCurrentlySelectedDropdownElements[ unDropdownID ];
}

function BDoesItemPassCurrentFilterAndCategorySelections( nDefIndex )
{
	// Element ID is based on the currently selected filter element
	return BDoesItemPassFilterAndCategory(
		nDefIndex,
		GetSelectedElementIDForDropdown
	);
}

function BDoesItemPassFilterAndCategorySpecial( nDefIndex, unDropdownIDSpecial, unElementIDOverride )
{
	// Element ID is based on the currently selected filter element
	return BDoesItemPassFilterAndCategory(
		nDefIndex,
		function( unDropdownID )
		{
			// Return a specific element ID if the special dropdown ID matches the current dropdown ID
			if ( unDropdownID == unDropdownIDSpecial )
				return unElementIDOverride;

			// Otherwise just get selected
			return GetSelectedElementIDForDropdown( unDropdownID );
		}
	);
}

function RebuildFilteredItemsList()
{
	// Clear the list of filtered items
	g_rgFilteredItems = [];

	// Go through all items and make sure they match the filter settings
	for ( var nDefIndex in g_rgItemInfo )
	{
		if ( !g_rgItemInfo[nDefIndex].for_sale )
			continue;

		if ( BDoesItemPassCurrentFilterAndCategorySelections( nDefIndex ) )
		{
			g_rgFilteredItems.push( nDefIndex );
		}
	}

	// Sort function
	var fnSortBy = function( field, bReverse, fnPrimer, fnLessThan )
	{
		var fnKey = function( nDefIndex )
		{
			var strValue = ( g_rgItemInfo[nDefIndex][field] != undefined ) ? g_rgItemInfo[nDefIndex][field] : g_rgItemInfo[nDefIndex].localized[field];
			return fnPrimer ? fnPrimer( strValue ) : strValue;
		};

		return function( a, b )
		{
			var A = fnKey( a ), B = fnKey( b );
			return ( ( A < B ) ? -1 : ( A > B ) ? +1 : 0 ) * [-1,1][+!!bReverse];
		}
	};

	// Date primer - parses date and returns milliseconds since Jan 1, 1970
	var fnDatePrimer = function( strDate )
	{
		// If there is no date, return the future
		if ( BIsStringEmpty( strDate ) )
			return ( new Date( 2050, 1, 1 ) ).getTime();

		var rgParts = strDate.match(/(\d+)/g);	// Parses to [0]=month, [1]=day, [2]=year
		return new Date( rgParts[2], rgParts[0], rgParts[1] ).getTime();
	}

	var fnStringPrimer = function( str )
	{
		return str.toUpperCase();
	}

	function GetPrimerFuncFromDataType( strDataType )
	{
		if ( strDataType == "date" )
			return fnDatePrimer;

		if ( strDataType == "int" )
			return parseInt;

		if ( strDataType == "string" )
			return fnStringPrimer;

		return null;
	}

	// Another Autographed Treasure hack
	if ( g_nSelectedCategoryID == 236204710 )
	{
		//+ Jonas Raoni Soares Silva
		//@ http://jsfromhell.com/array/shuffle [v1.0]
		var shuffle = function (o){ //v1.0
		    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		    return o;
		};
		g_rgFilteredItems = shuffle( g_rgFilteredItems );
		return;
	}


	// Sort based on selected sort type
	var nDropdownPrefabID = GetDropdownPrefabIDForSelectedCategory();
	var unSortDropdownID = GetSortDropdownID();
	var unSelectedSorterElementID = GetSelectedElementIDForDropdown( unSortDropdownID );
	var Sorter = g_rgSortingData.sorters[ unSelectedSorterElementID ];

	if ( Sorter != undefined )
	{
		g_rgFilteredItems.sort(
			fnSortBy(
				Sorter.sort_field,
				Sorter.sort_reversed,
				GetPrimerFuncFromDataType( Sorter.data_type )
			)
		);
	}
}

function GetDropdownElementText( unDropdownID, unElementID )
{
	return GetDropdownElements( unDropdownID )[ unElementID ].localized_text;
}

function SetDropdownTextEntryValue( unDropdownID, unElementID )
{
	$g_rgDropdownTextElements[ unDropdownID ].val( GetDropdownElementText( unDropdownID, unElementID ) );
}

function SetDropdownTextEntryValueByString( unDropdownID, strText )
{
	$g_rgDropdownTextElements[ unDropdownID ].val( strText );
}

function UpdateDropdownState( unDropdownID, unElementID )
{

	// Set in global array of current filter indices
	g_rgCurrentlySelectedDropdownElements[unDropdownID] = unElementID;

	// Cache off this state so we can revert to it if the user tabs away without pressing enter, etc.
	g_rgLastValidDropdownSelection[unDropdownID] = unElementID;

	// Hide the dropdown
	SetDropdownVisibilityState( unDropdownID, DISPLAY_HIDE );

	// Set the text in the text box
	SetDropdownTextEntryValue( unDropdownID, unElementID );

	// Reset the dropdown contents so all elements will be visible if the user clicks the dropdown button
	ResetDropdownElements( unDropdownID, null );

}

function InitDropdownData()
{
	// Create a sub-array for each filter type and set each current filter to "all"
	ForEachDropdown(
		function( unDropdownID )
		{
			// Set last valid state to currently selected state
			g_rgLastValidDropdownSelection[ unDropdownID ] = g_rgCurrentlySelectedDropdownElements[ unDropdownID ];
		}
	);

	// Render all potential results with no autocomplete parameter
	for ( var unDropdownID in g_rgDropdownData.dropdowns )
	{
		ResetDropdownElements( unDropdownID, null );
	}
}

function GetDropdownSubElement( unDropdownID, unElementID )
{
	return $g_rgDropdownPanelElements[ unDropdownID ].find( 'div' ).eq( unElementID );
}

function BItemPassesCustomFilter( nDefIndex, strCustomFilterName )
{
	if ( strCustomFilterName == 'current_sales' )
	{
		return g_rgSalesData[nDefIndex];
	}

	return false;
}

// Does the given asset belong in the given category/tab
function BItemPassesCategoryFilter( nDefIndex, nSelectedCategoryID )
{
	var rgCategory = g_rgStoreCategories[ nSelectedCategoryID ];

	// If this category has a custom filter associated with it, use that instead
	if ( rgCategory.custom_filter_name != undefined )
		return BItemPassesCustomFilter( nDefIndex, rgCategory.custom_filter_name );

	// Get the list of categories that apply to this item
	var rgItemCategories = g_rgItemInfo[nDefIndex].categories;
	
		if ( rgItemCategories == undefined )
		return false;

	// Construct one set of category IDs that compose the filter
	if ( $.inArray( nSelectedCategoryID, rgItemCategories ) > -1 )
		return true;

	// Get the child categories for the selected category
	var rgChildCategories = rgCategory.children;
	if ( rgChildCategories != undefined )
	{
		for ( var i = 0; i < rgChildCategories.length; ++i )
		{
			if ( $.inArray( parseInt( rgChildCategories[i].id ), rgItemCategories ) > -1 )
			{
				return true;
			}
		}
	}

	return false;
}

function HasDropdownCombinationResultItems( unDropdownID, unElementID )
{
	// Go through all items and look for the first that matches the settings
	for ( var nDefIndex in g_rgItemInfo )
	{
		if ( BDoesItemPassFilterAndCategorySpecial( nDefIndex, unDropdownID, unElementID ) )
		{
			return true;
		}
	}

	return false;
}

function ResetDropdownElements( unDropdownID, rgAutocompleteElementIDs )
{
	// Get all potential elements for the given dropdown
	var rgElements = GetDropdownElements( unDropdownID );

	// Go through each filter and add HTML to the result
	for ( var unElementID in rgElements )
	{
		// If rgAutocompleteElementIDs is null or if not null or if the current filter index exists in the autocomplete index array, add it - otherwise, skip it.
		var bShow = ( !rgAutocompleteElementIDs || $.inArray( unElementID, rgAutocompleteElementIDs ) != -1 );
		if ( bShow )
		{
			$g_rgDropdownSubElements[ unDropdownID ][ unElementID ].show();
		}
		else
		{
			$g_rgDropdownSubElements[ unDropdownID ][ unElementID ].hide();
		}
	}
}

function SetDropdownVisibilityState( unDropdownID, nState )
{
	var $Dropdown = $g_rgDropdownPanelElements[unDropdownID];
	var strDuration = "1.0";

	// Toggle, hide or show
	if ( nState == DISPLAY_TOGGLE )
	{
		if ( $Dropdown.css( 'display' ) === 'none' )
		{
			$Dropdown.fadeIn( strDuration );
		}
		else
		{
			$Dropdown.hide();
		}
	}
	else if ( nState == DISPLAY_HIDE )
	{
		$Dropdown.hide();
	}
	else if ( nState == DISPLAY_SHOW )
	{
		$Dropdown.fadeIn( strDuration );
	}
	else
	{
		console.log( "Invalid display type (" + nDisplayType + ")!" );
	}
}

// Display a dropdown menu, given the name of the element and the filter type
function UpdateDropdownVisibility( unDropdownID, nDisplayType, bHideAllOtherDropdowns )
{
	//var unDropdownID = GetDropdownIDFromPrefabDropdownIndex( iDropdown );
	$Dropdown = $g_rgDropdownPanelElements[ unDropdownID ];

	// Position the element
	$Dropdown.position(
		{
			"my": "right left",
			"at": "left bottom",
			"of": $Dropdown
		}
	);

	SetDropdownVisibilityState( unDropdownID, nDisplayType );

	// Go through and hide all other dropdowns
	if ( bHideAllOtherDropdowns != null && bHideAllOtherDropdowns )
	{
		UpdateDropdownVisibilityForAllBut( unDropdownID, DISPLAY_HIDE );
	}
}

// Set each dropdown visibility to nDisplayTypeEverythingElse for every dropdown except iDropdownExclude
function UpdateDropdownVisibilityForAllBut( unDropdownExcludeID, nDisplayTypeEverythingElse )
{
	ForEachDropdown(
		function( unDropdownID )
		{
			if ( unDropdownID == unDropdownExcludeID )
				return true;

			SetDropdownVisibilityState( unDropdownID, nDisplayTypeEverythingElse );
		}
	);
}

// Set each dropdown visibility to nDisplayType for every dropdown except iDropdownExclude
function UpdateDropdownVisibilityForAll( nDisplayType )
{
	ForEachDropdown(
		function( unDropdownID )
		{
			SetDropdownVisibilityState( unDropdownID, nDisplayType );
		}
	);
}

function OnDropdownTextFocus( unDropdownID )
{
	// Reset the dropdown elements so it's fresh if the user clicks its button
	ResetDropdownElements( unDropdownID, null );

	// Hide other dropdowns
	UpdateDropdownVisibilityForAllBut( unDropdownID, DISPLAY_HIDE );

	// Select the text - this needs to be deferred a frame, otherwise the text will select and then instantly deselect
	setTimeout( "SelectDropdownText( " + unDropdownID + ")", 1 );
}

function SelectDropdownText( unDropdownID )
{
	$g_rgDropdownTextElements[ unDropdownID ].select();
}

function SetDropdownEnabled( iDropdown, bEnabled )
{
	var unDropdownID = GetDropdownIDFromPrefabDropdownIndex( iDropdown );
	var $DropdownBox = $g_rgDropdownElements[ unDropdownID ];
	var $DropdownBoxDisabled = $g_rgDropdownElementsDisabled[ unDropdownID ];

	if ( bEnabled )
	{
		$DropdownBox.show();
		$DropdownBoxDisabled.hide();
	}
	else
	{
		$DropdownBox.hide();
		$DropdownBoxDisabled.show();
	}
}

function ToggleFilters()
{
	var StoreFilters = $( '#StoreFilters' );
	var bShow = !StoreFilters.is( ':visible' );

	ShowFilters( bShow );
}

function ShowFilters( bShow )
{
	var StoreFilters = $( '#StoreFilters' );
	if ( bShow )
	{
		StoreFilters.show();
	}
	else
	{
		StoreFilters.hide();
	}

	var strShowHide = bShow ? 'Hide' : 'Show';
	$( '#FilterButtonText' ).html( strShowHide + ' Filters' );
}

function GetNumCarouselFrames()
{
	return g_rgCarouselData.images.length;
}

function CacheDropdownElements()
{
	var nNumTotalDropdowns = GetTotalNumDropdowns();
	for ( var unDropdownID in g_rgDropdownData.dropdowns )
	{
		$g_rgDropdownContainerElements[ unDropdownID ] = $( '#DropdownContainer_' + unDropdownID );
		$g_rgDropdownLabelElements[ unDropdownID ] = $( '#DropdownContainer_' + unDropdownID + ' .Label' );
		$g_rgDropdownTextElements[ unDropdownID ] = $( '#DropdownBox_' + unDropdownID + ' input' );
		$g_rgDropdownElements[ unDropdownID ] = $( '#DropdownBox_' + unDropdownID );
		$g_rgDropdownElementsDisabled[ unDropdownID ] = $( '#DropdownBox_' + unDropdownID + '_Disabled' );
		$g_rgDropdownPanelElements[ unDropdownID ] = $( '#DropdownPanel_' + unDropdownID );

		// Create a direct mapping from each dropdown's element ID the actual DOM element.
		// NOTE: the ordering here has nothing to do with the display order
		$g_rgDropdownSubElements[ unDropdownID ] = {};
		for ( var unElementID in g_rgDropdownData.dropdowns[ unDropdownID ].elements )
		{
			$g_rgDropdownSubElements[ unDropdownID ][ unElementID ] = $( '#DropdownPanelElement_' + unDropdownID + '_' + unElementID );
		}
	}
}

// Called when page is ready
$(
	function()
	{
		CacheDropdownElements();

		g_MainContainerGrid.Init();

		var iHistoryCat = $.bbq.getState( HASHHISTORYNAME_CATEGORY );
		var iCatToSelect = iHistoryCat === undefined ? g_nDefaultCategoryID : iHistoryCat;
		ChangeCategory( iCatToSelect, false );

		// Gather all filter information from asset data
		InitDropdownData();

		// Compute number of pages
		ComputeMaxPages();

		// This is the dialog that appears when a user clicks add to cart
		SetupCartConfirmDlg();

		$( document ).click(
			function( e )
			{
				// Hide all dropdowns
				UpdateDropdownVisibilityForAll( DISPLAY_HIDE );
			}
		);

		$( '#StoreFilters' ).on(
			'click',
			'.DropdownButton',
			function( e )
			{
				// Don't propagate to document handler.
				return false;
			}
		);

		$( window ).bind(
			'hashchange',
			function( e )
			{
				var bShowFilters = false;

				// Setup tab selection - do this before setting up max display items, since those counts can be determined on whichever tab is active (some tabs have different cell counts).
				var iHistoryCat = $.bbq.getState( HASHHISTORYNAME_CATEGORY );
				var iCatToSelect = iHistoryCat === undefined ? g_nDefaultCategoryID : iHistoryCat;
				ChangeCategory( iCatToSelect, false );

				if ( !BIsHomeCategorySelected() )
				{
					ForEachDropdown(
						function( unDropdownID )
						{
							var strHistoryParam = GetHistoryParamNameForDropdown( unDropdownID );
							var unElementID = $.bbq.getState( strHistoryParam );

							if ( unElementID == undefined )
							{
								
								// If no history set for this state, select first element
								unElementID = GetDefaultElementIDForDropdown( unDropdownID );
							}
							else
							{
								// See use below
								bShowFilters = true;
							}

							UpdateDropdownState( unDropdownID, unElementID );	// Don't rebuild the filter list or render until after all dropdowns are updated
						}
					);

					// If there is a max display items state, use it
					var nMaxDisplayItems = $.bbq.getState( HASHHISTORYNAME_MAXDISPLAYITEMS );

					// Autographed Treasure hack
					if ( iCatToSelect == 236204710 )
					{
						nMaxDisplayItems = 2399;
					}

					SetMaxDisplayItems( nMaxDisplayItems != undefined ? nMaxDisplayItems : GetDisplayItemCount(0) );

					// If at least one filter was set by the URL - display the filter UI
					if ( bShowFilters )
					{
						ShowFilters( true );
					}

					// If there is page state, use it - we want to set the page after we change the tab, since changing tab resets to page 0
					var iPage = $.bbq.getState( HASHHISTORYNAME_PAGE );
					SetCurrentPage ( iPage != undefined ? ( iPage - 1 ) : 0 );

					// Go through all dropboxes and disable the ones that are not appropriate for the selected category, and setup visibility
					// Note that there can be more than 4 dropdowns, since a given category can have its filter/sorting configuration. Here dropdown visibility
					// is adjusted based on the current category.

					// First, hide all dropdown boxes
					for ( var unDropdownID in g_rgDropdownData.dropdowns )
					{
						$g_rgDropdownContainerElements[ unDropdownID ].hide();
					}

					// Now, given the current dropdown prefab, show only the dropdowns that should be shown
					var nDropdownPrefabID = GetDropdownPrefabIDForSelectedCategory();
					var DropdownConfig = GetDropdownConfig();
					if ( DropdownConfig != null )
					{
						for ( var iDropdown = 0; iDropdown < DropdownConfig.length; iDropdown++ )
						{
							// Set enabled or disabled, depending on the config
							SetDropdownEnabled( iDropdown, DropdownConfig[ iDropdown ].enabled );

							// Show it now
							var unDropdownID = DropdownConfig[ iDropdown ].dropdown_id;
							$g_rgDropdownContainerElements[ unDropdownID ].show();
						}
					}

					RenderDropdownLabels();
				}

				g_Renderer.Render();
			}
		);

		$( window ).trigger( 'hashchange' );

		// Handle mouse move and capture mouse position
		$( '.StoreContainer' ).on(
			'mouseenter',
			'.ItemContainerCell',
			function( e )
			{
				var $Cell = $( this );
				var nDefIndex = $Cell.data( 'defindex' );

				ShowAddToCartButton( $Cell, nDefIndex, true );
				$Cell.data( 'hovering', 1 );

				// Highlight the border immediately
				UpdateItemCellBorder( $Cell, true );

				// Set a timeout for hover popup
				var nTimeoutID = setTimeout(
					function()
					{
						if ( BIsHomeCategorySelected() || g_MainContainerGrid.HasItemDef( nDefIndex ) )
							g_ItemTooltip.Show( $Cell, nDefIndex );
					},
					MINI_POPUP_DELAY * 1000
				);

				$Cell.data( 'hovertimeout', nTimeoutID );
			}
		).on(
			'mouseleave',
			'.ItemContainerCell',
			function( e )
			{
				var $Cell = $( this );
				var nDefIndex = $Cell.data( 'defindex' );

				ShowAddToCartButton( $Cell, nDefIndex, false );
				$Cell.data( 'hovering', 0 );

				// Deactivate border
				UpdateItemCellBorder( $Cell, false );

				// Hide the mini popup and clear the timeout
				g_ItemTooltip.Hide();
				clearTimeout( $Cell.data( 'hovertimeout' ) );
			}
		);

		$( '.StoreContainer' ).on(
			'click',
			'.HoverAddToCartButton',
			function( e )
			{
				var $Button = $( this );
				var nDefIndex = $Button.parent().parent().data( 'defindex' );
				var strSourceHistory = $Button.parent().parent().data( 'sourcehistory' );

				Store_AddToCartAjax( $Button, nDefIndex, strSourceHistory );
			}
		);
	}
);

