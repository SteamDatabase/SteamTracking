
const k_rgClientSideFilterNames = [ 'hide_owned', 'hide_ignored', 'hide_wishlist' ];

InitializeGPFocusRestoreTimeout( false );

function DisplayAdvancedSearch()
{
	new Effect.BlindUp( 'advanced_search_toggle', {duration: 0.25}  );
	new Effect.BlindDown( 'advanced_search_ctn', {duration: 0.25} );
}
function HideAdvancedSearch()
{
	new Effect.BlindDown( 'advanced_search_toggle', {duration: 0.25}  );
	new Effect.BlindUp( 'advanced_search_ctn', {duration: 0.25} );
}

function OnLocationChange ( elIgnored, hash )
{
	if ( hash && hash.length > 1 )
	{
		FillFormFromNavigation( hash.substr(1) );
	}
	else if ( !g_bUseHistoryAPI )
	{
		var query = '';
		var href = window.location.href;
		var iQuery = href.indexOf( '?' );
		if ( iQuery > 0 )
			query = href.substr( iQuery + 1 );
		FillFormFromNavigation( query );
	}
}

// Apply verified and playable totals to the filter checkbox text.  If bSteamOS is true show SteamOS compatibility instead.
function PopulateHWCompatFacetData( rgCompatFacetData, rgSteamOSFacetData, bIncludeParens, bSteamOS )
{
	let $Container = $J('#deck_compatibility_search_filter');

	if ( bSteamOS )
	{
		let $Compatible = $Container.find( '.tab_filter_control_row[data-value=' + 2 + ']'); 
		let nCompatible = -1;

		for ( var i = 0; i < rgSteamOSFacetData.length; i++ )
		{
			if ( rgSteamOSFacetData[i][0] == 2 )
				nCompatible = rgSteamOSFacetData[i][1];
		}

		if ( nCompatible == -1 )
			$Compatible.find('.tab_filter_control_count').css( {display: 'none' } );
		else 
			$Compatible.find('.tab_filter_control_count').text( bIncludeParens ? "(" + v_numberformat( nCompatible ) + ")" : v_numberformat( nCompatible ) ).css( {display: '' } ); 
	}
	else // Show Deck Verified
	{
		let $Verified = $Container.find( '.tab_filter_control_row[data-value=' + 3 + ']');
		let $Playable = $Container.find( '.tab_filter_control_row[data-value=' + 2 + ']');
		let nVerified = -1;
		let nPlayable = -1;

		for ( var i = 0; i < rgCompatFacetData.length; i++ )
		{
			if ( rgCompatFacetData[i][0] == 3 )
				nVerified = rgCompatFacetData[i][1];
			else if ( rgCompatFacetData[i][0] == 2 )
				nPlayable = rgCompatFacetData[i][1];
		}

		if ( nVerified == -1 )
			$Verified.find('.tab_filter_control_count').css( {display: 'none' } );
		else 
			$Verified.find('.tab_filter_control_count').text( bIncludeParens ? "(" + v_numberformat( nVerified ) + ")" : v_numberformat( nVerified ) ).css( {display: '' } ); 

		if ( nPlayable == -1 )
			$Playable.find('.tab_filter_control_count').css( {display: 'none' } );
		else 
			$Playable.find('.tab_filter_control_count').text( bIncludeParens ? "(" + v_numberformat( nPlayable ) + ")" : v_numberformat( nPlayable ) ).css( {display: '' } ); 
	}
}

// This sorts our tags by frequency (tag facet) or explicitly (forced top)
g_TagMap = null;
function PopulateTagFacetData( rgTagFacetData, rgForcedTop, bHydrate=false)
{
	var $Container = $J('#TagFilter_Container');
	var $Tags = $Container.children('div').detach();

	// Map of tag IDs to HTML elements
	if ( !g_TagMap )
	{
		g_TagMap = {};
		$Tags.each( function() {
			var $Tag = $J(this);
			g_TagMap[$Tag.data('value')] = $Tag;
		} );
	}

	var nIndex = 0;
	var rgDisplayedTags = {};

	// Move our forcedTop elements to the top of our control.
	for ( var i = 0; i < rgForcedTop.length; i++ )
	{
		var tagid = rgForcedTop[i];
		var $Tag = g_TagMap[ tagid ];
		$Container.append( $Tag );
		$Tag.show();
		rgDisplayedTags[ tagid ] = true;
		nIndex++;
		$Tag.find('.tab_filter_control_count').css( {display: 'none' });
	}

	// Walk the rest of our tags that have facet counts and continue appending.
	for ( var i = 0; i < rgTagFacetData.length; i++ )
	{
		var tagid = rgTagFacetData[i][0];
		var count = rgTagFacetData[i][1];

		if (rgDisplayedTags[tagid])
			continue;

		rgDisplayedTags[ tagid ] = true;
		
		var textCount = v_numberformat( count );
		
		if(bHydrate){
			if(count > 500)
			{
				//500+: round to the nearest 100
				count = Math.floor(count/100) * 100;
			}
			else if(count > 100)
			{
				//101-500: round to the nearest 50
				count = Math.floor(count/50) * 50;
			}
			else if(count > 50)
			{
				//51-100: round to the nearest 10
				count = Math.floor(count/10) * 10;
			}
			else if(count > 10)
			{
				//10-50: round to the nearest 5
				count = Math.floor(count/5) * 5;
			}
			textCount = v_numberformat( count );
			textCount += "+";
		}
		
		var $Tag = g_TagMap[tagid];
		if ( !$Tag ) // Facet data may include banned or missing tags.
			continue;
		$Tag.find('.tab_filter_control_count').text( textCount ).css( {display: '' });
		$Container.append( $Tag );
		if ( nIndex++ > 15 )
			$Tag.hide();
		else
			$Tag.show();
	}

	//Add any remaining tags.
	for ( var tagid in g_TagMap )
	{
		if ( rgDisplayedTags[tagid] )
			continue;	//handled above

		var $Tag = g_TagMap[tagid];
		$Tag.find('.tab_filter_control_count').css( {display: 'none' });
		$Container.append( $Tag );
		if ( nIndex++ > 15 )
			$Tag.hide();
		else
			$Tag.show();
	}

	// apply tag filter text if not empty
	$Container.trigger( 'tablefilter_update' );
}

// This sorts languages by, first already selected ones, then languages from user preferences
g_LangMap = null;
function PopulateLangFilterData( rgSelectedLanguages, rgLanguagesShowOnTop )
{
	var $Container = $J('#LanguageFilter_Container');
	var $Langs = $Container.children('div').detach();

	// Map of language IDs to HTML elements
	if ( !g_LangMap )
	{
		g_LangMap = {};
		$Langs.each( function() {
			var $Lang = $J(this);
			g_LangMap[ $Lang.data('value') ] = $Lang;
		} );
	}

	var nIndex = 0;
	var rgDisplayedLangs = {};

	// First move our already selected elements to the top of our control.
	for ( var i = 0; i < rgSelectedLanguages.length; i++ )
	{
		var langid = rgSelectedLanguages[ i ];
		var $Lang = g_LangMap[ langid ];
		$Container.append( $Lang ).show();
		rgDisplayedLangs[ langid ] = true;
		nIndex++;
	}

	// Then move our prioritized languages to the top as well, below the already active ones
	for ( var i = 0; i < rgLanguagesShowOnTop.length; i++ )
	{
		var langid = rgLanguagesShowOnTop[ i ];
		if ( rgDisplayedLangs[ langid ] )
			continue;	//handled above
		var $Lang = g_LangMap[ langid ];
		$Container.append( $Lang ).show();
		rgDisplayedLangs[ langid ] = true;
		nIndex++;
	}

	// Add any remaining languages, show if there's still room
	for ( var langid in g_LangMap )
	{
		if ( rgDisplayedLangs[ langid ] )
			continue;	//handled above

		var $Lang = g_LangMap[ langid ];
		$Container.append( $Lang );
		if ( nIndex++ > 15 )
			$Lang.hide();
		else
			$Lang.show();
	}

	if ( rgSelectedLanguages.length )
	{
		$J('#LanguageFilter_Container').css( {maxHeight: ''} );
	}

	// apply tag filter text if not empty
	$Container.trigger( 'tablefilter_update' );
}

function FillFormFromNavigation( querystring, link_click, initial_load )
{
	var rgLocationParams = querystring.toQueryParams();

	$J('.tab_filter_control.checked').removeClass('checked');

	if ( rgLocationParams['term'] )
		rgLocationParams['displayterm'] = rgLocationParams['term'];
	else
		rgLocationParams['displayterm'] = 'enter search term or tag';

	$J( "#hide_filtered_results_warning" ).val( link_click ? 1 : "" );

	var form = $J('#advsearchform');
	// in responsive mode, these elements are reparented to the localmenu_content area
	var addtlOptions = $J('.localmenu_content #additional_search_options');
	g_bPopulatingSearchControls = true;
	$J(":input",form ).add(':input', addtlOptions).each(function(input, element)
	{

		if ( !element || !element.name )
			return true;

		var name = element.name;

				if ( name == 'snr' || name == 'ignore_preferences' || name == 'hide_filtered_results_warning' )
			return true;

		var newvalue = rgLocationParams[name];

		if ( $( name + '_dselect_container') )
		{
			// it's a dselect, handle appropriately
			if ( newvalue )
			{
				if ( element.value != newvalue )
					DHighlightItemByValue( name, newvalue, true );
			}
			else
			{
				if ( element.value )
					DHighlightItem( name, 0, true );
			}
		}
		else
		{
			if ( element )
			{
				element.value = newvalue ? newvalue : '';
				if ( newvalue )
				{
					var rgSplitValues = newvalue.split(',');
					for( var i=0; i<rgSplitValues.length; i++)
					{
						$J('div[data-param=\''+jqEscapeSelectorAttribute(name)+'\'][data-value=\''+jqEscapeSelectorAttribute(rgSplitValues[i])+'\']').addClass('checked');
					}
					$J('div[data-param=\''+jqEscapeSelectorAttribute(name)+'\'][data-value=__toggle]').addClass('checked');
				}
			}
		}
	});

	if ( typeof UpdatePriceRangeControl !== 'undefined' )
		UpdatePriceRangeControl( rgLocationParams['maxprice'] );

	g_bPopulatingSearchControls = false;

	AjaxSearchResultsInternal( !link_click, initial_load );
}

function OnSearchDselectChange( elem, name )
{
	if ( elem.value )
		$( name + '_control' ).addClassName( 'withvalue' );
	else
		$( name + '_control' ).removeClassName( 'withvalue' );

	AjaxSearchResults();
}

function GatherSearchParameters()
{
	var rgRawParameters = $('advsearchform').serialize( true );

	for ( var key in rgRawParameters )
	{
		if ( !rgRawParameters[key] || key == 'displayterm' )
			delete rgRawParameters[key];
	}

	return rgRawParameters;
}

/**
 * Return the number of active search and client side filters
 */
function GetNumActiveSearchFilters()
{
	const k_rgNonFilterKeys = [ 'displayterm', 'sort_by', 'force_infinite', 'snr', 'page' ];
	var numActive = 0;

	var rgRawParameters = $( 'advsearchform' ).serialize( true );
	for ( var key in rgRawParameters )
	{
		if ( rgRawParameters[ key ] && !k_rgNonFilterKeys.includes( key ) )
			numActive += rgRawParameters[key].split(',').length;
	}

	for ( var strFilter of k_rgClientSideFilterNames )
	{
		var $Control = $J( "span[data-param='hide'][data-value='" + strFilter + "']" );
		if ( $Control.length > 0 && $Control.hasClass( 'checked' ) )
			numActive++;
	}

	return numActive;
}

/**
 * If page includes a num_active_filters element, update the innerhtml to the current count
 */
function UpdateFilterButtonText()
{
	var $elemNumActiveFilters = $J( '.num_active_filters' );
	if ( $elemNumActiveFilters.length > 0 )
	{
		$numFilters = GetNumActiveSearchFilters();
		$numFiltersString = $numFilters > 0 ? ' (' + $numFilters + ')' : '';

		$filterText = "Filters";

		$elemNumActiveFilters[0].innerHTML = $filterText + $numFiltersString;
	}
}

/**
 * Clear all selected filters
 */
function ResetFilters()
{
	// clear active filters
	var $Controls = $J( 'span.checked' );
	$Controls.each( function( i, element) {
		element.click();
	});

	// reset slider to 'Any Price'
	if ( typeof UpdatePriceRangeControl !== 'undefined' )
		UpdatePriceRangeControl();

	// clear search term and update results
	ReplaceTerm("");
}

function ReplaceTerm( term )
{
	$J( "#realterm" ).val( term );
	$J( "#term" ).val( term );
	AjaxSearchResults();
}

var g_ajaxInFlight = null;
var g_rgDesiredParameters = null;
var g_rgCurrentParameters = null;
var g_bPopulatingSearchControls = false;
var g_bUseHistoryAPI = !!(window.history && window.history.pushState);
var g_strUnfilteredURL = '';
function AjaxSearchResults()
{
	// we're in the middle of filling in all the controls from the hash parameter
	if ( g_bPopulatingSearchControls )
		return;

	// all page # changes come through as location changes, so reset to 1 here
	//	when changing search parameters
	$('search_current_page').value = 1;

	// reset
	$J( "#hide_filtered_results_warning" ).val( "" );

	AjaxSearchResultsInternal( false, false );
}

// Sets the URL to include all the params from rgParameters, and places
// them in the history interface under the 'params' key if supported.
//
// If oHistoryStash is set, those options will also be stored in the
// history interface, but will *not* appear in the URL.
function UpdateUrl( rgParameters, oHistoryStash = {}, bPushState = true )
{
	var fnUpdateState = bPushState ? history.pushState : history.replaceState;

	if ( g_bUseHistoryAPI )
	{
		oHistoryStash.params = rgParameters;
		if ( history.state.legacy_web_root )
			oHistoryStash['legacy_web_root'] = history.state.legacy_web_root; // preserve gamepad navigation history

		fnUpdateState.call( history, oHistoryStash, '', '?' + Object.toQueryString( rgParameters ) );
	}
	else
		window.location = '#' + Object.toQueryString( rgParameters );
}

function AjaxSearchResultsInternal( bOnLocationChange, bInitialLoad )
{
	// we're in the middle of filling in all the controls from the hash parameter
	if ( g_bPopulatingSearchControls )
		return;

	var rgParameters = GatherSearchParameters();

	// remove snr for history purposes
	var snr = rgParameters['snr'];
	delete rgParameters['snr'];
	if ( rgParameters['sort_by'] == '_ASC' )
		delete rgParameters['sort_by'];
	if ( rgParameters['page'] === 1 || rgParameters['page'] === '1' )
		delete rgParameters['page'];

	// don't want this on the url either
	var hide_filtered_results_warning = rgParameters['hide_filtered_results_warning'];
	delete rgParameters['hide_filtered_results_warning'];

	// don't default the language filter even if doing a hard page refresh
	rgParameters['ndl'] = 1;

	if ( ( bInitialLoad && g_bUseHistoryAPI ) || !bOnLocationChange )
		UpdateUrl( rgParameters, {}, !bOnLocationChange );

	if ( snr )
		rgParameters['snr'] = snr;

	if ( hide_filtered_results_warning )
		rgParameters['hide_filtered_results_warning'] = hide_filtered_results_warning;

	UpdateTags();

	ExecuteSearch( rgParameters );
}

function ExecuteSearch( rgParameters )
{
	if ( g_ajaxInFlight )
	{
		g_rgDesiredParameters = rgParameters;
		return;
	}

	// we've already loaded or are loading the parameters requested
	if ( g_rgCurrentParameters && Object.toQueryString( g_rgCurrentParameters ) == Object.toQueryString( rgParameters ) )
		return;

	// On tablet hide the virtual keyboard
	if ( window.UseGamepadScreenMode && window.UseGamepadScreenMode() ) 
	{
		GPShowVirtualKeyboard( false );
	}

	g_rgCurrentParameters = rgParameters;
	new Effect.Fade( $('search_result_container'), { from: 1.0, to: 0.5, duration: 0.1 } );
	g_ajaxInFlight = new Ajax.Updater( 'search_results', 'https://store.steampowered.com/search/results', { parameters: rgParameters, method: 'get', evalScripts: true, onComplete: SearchCompleted.bind( null, rgParameters ) } );
}

function HandleFilteredResultsWarning()
{
	var elemFilteredWarning = $J( "#search_results_filtered_warning" );
	if ( elemFilteredWarning.length != 0 )
	{
		$J( "#search_results_filtered_warning_persistent" ).html( elemFilteredWarning.html() );
		elemFilteredWarning.remove();
		$J( "#search_results_filtered_warning_persistent" ).removeClass( "collapsed" );
	}
	else
	{
		$J( "#search_results_filtered_warning_persistent" ).addClass( "collapsed" );
	}

	$J('div.dropdown[data-dropdown-html]').v_tooltip({ 'dataName': 'dropdownHtml', 'defaultType':'html', 'createOnLoad': true, 'destroyWhenDone': false, 'childActiveCSSClass': 'hover', 'useMouseEnterEvent': false, 'useClickEvent': true, 'preventDefault':false, 'location':'bottom', 'tooltipClass': 'dropdown_container', 'parentActiveCSSClass': 'hover', 'offsetY':0, 'fadeSpeed': 0, 'inheritParentMinWidth': true});
}

function SearchCompleted( parameters, transport )
{
	if ( !parameters['hide_filtered_results_warning'] )
	{
		HandleFilteredResultsWarning();
	}

	g_ajaxInFlight = null;

	if ( typeof GDynamicStore != 'undefined' )
		GDynamicStore.DecorateDynamicItems( $J('#search_results' ) );

	if ( g_rgDesiredParameters )
	{
		ExecuteSearch( g_rgDesiredParameters );
		g_rgDesiredParameters = null;
	}

	if (typeof(GDynamicStore) !== 'undefined')
		GDynamicStore.DecorateDynamicItems();

	UpdateFilterButtonText();

	InitInfiniteScroll( parameters );
}

function SearchLinkClick( elem )
{
	var href = elem.href;
	var iQuery = href.indexOf( '?' );
	if ( iQuery > 0 && href.length > iQuery + 1 )
	{
		var query = href.substr( iQuery + 1 );
		if ( g_bUseHistoryAPI )
			FillFormFromNavigation( query, true );
		else
			window.location = '#' + query;
	}
	else
	{
		// ?? not sure
		window.location = href;
	}
	$J(window ).scrollTop( $J('.page_header_ctn.search' ).offset().top - GetResponsiveHeaderFixedOffsetAdjustment() );
}

LocationHashObserver = Class.create(Abstract.TimedObserver, {
	getValue: function() {
		return window.location.hash;
	}
} );

// Function generator that stashes the current page number so we can get back there if navigated back to the page.
function fnStashSearchPositionHistory( nPageNo, sItemKey )
{
	return function()
	{
		// Grab our search params from the form.
		var rgParams = GatherSearchParameters();

		// Inject our PageNo
		if ( nPageNo > 1 )
			rgParams['page'] = nPageNo;

		// Update the URL, stashing infiniscroll + itemKey in history storage.
		UpdateUrl( rgParams, { infiniscroll: true, itemkey: sItemKey } );
	};
}

function IsNavFromBackButton()
{
	// '2' is a magic number in the spec for back/forward. The important thing for us
	// is it's not reload or direct navigation.
	// https://www.w3.org/TR/navigation-timing/#performancenavigation
	return g_bUseHistoryAPI && window.performance && window.performance.navigation.type == 2;
}

// Smoothly scrolls us to the last element the user was viewing.
function HandleBackReposition()
{
	// Nothing to do unless we've an itemkey stashed and they hit the back button.
	if ( !( IsNavFromBackButton() && history.state && history.state.itemkey ) )
	{
		SetGPFocusRestoreTimeout(); // If we're on Deck restore focus for gamepad navigation
		return;
	}

	// Find the item we want to be scrolling to.
	var sItemKey = history.state.itemkey;
	var nodeItem = $J( "a[data-ds-itemkey='" + history.state.itemkey + "']" );

	if ( nodeItem.length == 0 )
	{
		SetGPFocusRestoreTimeout(); // If we're on Deck restore focus for gamepad navigation
		return;
	}

	// 'html, body' makes Firefox happy, as well as working in other browsers.
	$J('html, body').animate({
		// Scroll to just before the element we're after.
		scrollTop: nodeItem.offset().top - nodeItem[0].offsetHeight
	});

	var origBackground = nodeItem.css('background-color');

	// Pulse the item's colour to draw attention to it.
	nodeItem.css({
		'background-color': '#aaaaaa',
		'transition': 'background-color ease-in 1s'
	});

	setTimeout( function() {
		nodeItem.css({ 'background-color': origBackground });
	}, 1000 );

	// If we're on Deck restore focus for gamepad navigation once scrolling finishes
	if ( window.UseGamepadScreenMode && window.UseGamepadScreenMode() )
	{
		SetGPFocusRestoreTimeout();
		document.addEventListener( 'scroll', function() {
			SetGPFocusRestoreTimeout();
		});
	}

	// Remove our itemkey from the state to avoid risk of double-scrolls.
	delete history.state.itemkey;
}

// Returns a boolean as to whether InfiniScroll should be used.
// Does not examine user preferences.
function BShouldUseInfiniscroll()
{
	// InfiniScroll is enabled by default.
	var bEnable = true;

	var url = new URL( window.location.href );

	// If infinite scroll is forced on, then it's forced on.
	if ( url.searchParams.get( 'force_infinite' ) )
		return true;

	// If we see a page number, we'd normally disable InfiniScroll...
	if ( url.searchParams.get('page') )
		bEnable = false;

	// But if the user has hit back and originally came from infiniscroll, reanable it.
	if ( IsNavFromBackButton() && history.state && history.state.infiniscroll )
		bEnable = true;

	return bEnable;
}

function InitSearchPage()
{
	if ( g_bUseHistoryAPI )
	{
		$J(window).on('popstate', function( e ) {
			var oState = e.originalEvent.state;

			FillFormFromNavigation( window.location.search ? window.location.search.substr(1) : '' );
		});

		if ( window.location.hash.length )
		{
			FillFormFromNavigation( window.location.hash.substr(1), false, true /* initial load - will ReplaceState */ );
		}
		else
		{
			g_rgCurrentParameters = GatherSearchParameters();
		}
	}
	else
	{
		new LocationHashObserver( null, 0.2, OnLocationChange );
		if ( window.location.hash && window.location.hash.length > 1 )
		{
			// seems like this isn't needed for all browsers, but it is needed for the client
			OnLocationChange( null, window.location.hash );
		}
	}

	HandleFilteredResultsWarning();
	InitInfiniteScroll(g_rgCurrentParameters);
	DecorateFilterControls();
}

// Adds an element to an array that we've encoded in a string.
function strArrayAdd( strArray, strElement )
{
	if ( ! strArray )
		return strElement

	var rgValues = strArray.split(',');

	if( $J.inArray( strElement, rgValues ) == -1 )
		rgValues.push( strElement )

	return rgValues.join(',');
}

// Remove an element from an array we've encoded in a string.
function strArrayDel( strArray, strElement )
{
	if (! strArray)
		return "";

	if ( strElement === null )
		return strArray;

	var rgValues = strArray.split(',');

	if( rgValues.indexOf( strElement ) != -1 )
		rgValues.splice( rgValues.indexOf( strElement ), 1 );

	return rgValues.join(',');
}

// Decorates all our filter controls with event handlers.
function DecorateFilterControls()
{
	$J('.tab_filter_control_include, .tab_filter_control_not').each( function() {
		var $Control = $J(this);
		var bClientSideOnly = $Control.data('clientside');

		$Control.attr( 'data-gpfocus', 'item' );

		// Skip client-side only fields.
		if (bClientSideOnly)
		    return;

		var strParam = $Control.data('param'); // Eg: 'tags'
		var value = $Control.data('value');
		var $dataStore = $J('#' + strParam);
		var antiField = $dataStore.data('antifield');

		$Control.mousedown( function( event ) {
			event.preventDefault(); // don't take focus on a checkbox click
		});

		$Control.click( function() {
			if ( $Control.parent().hasClass('disabled') )
				return;

			var $antiStore = antiField ? $J('#' + antiField) : null;
			var strValues = decodeURIComponent( $dataStore.val() );
			value = String(value); // Javascript: Dynamic types except sometimes not.
			var bIsToggle = ( value === '__toggle' );

			var finalValue = null;
			var finalAntiValue = null;

			// When checking a field, we need to remove values from the antistore, if it
			// exists.
			if ( !$Control.hasClass( 'checked' ) ) {
				if ( bIsToggle )
				{
					finalValue = 1;
				}
				else {
					finalValue = strArrayAdd( strValues, value );
					if ( $antiStore ) {
						$antiStore.val( strArrayDel( $antiStore.val(), value ) );

						// Remove checked from the anti-element, if it exists.
						$J("span[data-value="+value+"][data-param="+antiField+"]").removeClass( 'checked' );

					}
				}
				// Set checked on our parent row.
				$Control.parent().addClass( 'checked' );
			}
			// When unchecking a field, no extra anti-field work is needed.
			else {
				if ( !bIsToggle )
					finalValue = strArrayDel( strValues, value );

				// Remove checked on our parent row.
				$Control.parent().removeClass( 'checked' );
			}

			$Control.toggleClass('checked');
			$J("#"+strParam).val( finalValue );
			AjaxSearchResults();
		});
	});
}

// Infinite scroll state is kept on the function itself.
InitInfiniteScroll.oController = null;
InitInfiniteScroll.bEnabled = false;
InitInfiniteScroll.nScrollSize = 25; // Default, can be modified by calling page.

function InitInfiniteScroll( rgParameters )
{
	var self = InitInfiniteScroll;

	// Stop if disabled by preferences.
	if ( ! self.bEnabled )
		return null;

	// Stop if overriden by navigation.
	if  (! BShouldUseInfiniscroll() )
		return null;

    // Copy our params so we don't surprise our caller by changing theirs.
    rgParameters = Object.assign({}, rgParameters);

	// Clear any existing infinite scroll so we don't mix search results.
	if (typeof( self.oController ) != "undefined" && self.oController !== null )
		self.oController.Stop();

	var oScrollOptions = {
		"pagesize": self.nScrollSize,                 // How many results to load per request.
		"page": parseInt( rgParameters['page'] ) - 1, // InfiniScroll assumes pages count from zero.
		"total_count": 1000,                          // Placeholder - Filled with real value after our first load.
		"prefix": "search_results",                   // Where to put our results
		"trigger_height": 1620,                       // How many px from the bottom before triggering next load
	};

	self.oController = new CAjaxInfiniteScrollingControls( oScrollOptions, 'https://store.steampowered.com/search/results' );

	// We've committed to infinite scroll, so we'll flip our hidden field on. This later gets stashed in the URL,
	// so if the user returns using the back button we keep their infinite scroll settings.
	$J('#force_infinite').val(1);

	// Make sure our backend knows we're infinite scrolling, and don't need a whole page.
	rgParameters['infinite'] = "1";

	InfiniteCleanupUrlParams();

	// Infinite scroll handler populates our pagination controls, so we don't have to.
	delete rgParameters['start'];
	delete rgParameters['count'];
	delete rgParameters['page'];

	self.oController.SetStaticParameters(rgParameters);

	// Disable regular pagination, enable results-loading section.
	$J('.search_pagination').hide();

	// Set handler to trim duplicates. Right now this re-checks every time, so there's potential for saving
	// cycles by calculating what's newly loaded and just checking those.
	self.oController.SetPageChangedHandler(function( iPageNo, oUpdatedDom )
	{
		if ( GDynamicStore != null )
		{
			GDynamicStore.DecorateDynamicItems($J(oUpdatedDom));
		}
		// We need to check if something is a bundle or package first as they may also set data-ds-appid with
		// the apps they contain.
		var arrayAttrs = [ "data-ds-bundleid", "data-ds-packageid", "data-ds-appid" ];

		var mapDuplicates = {};

		// Javascript doesn't auto-create ("autovivify") map keys more than one layer deep, so set them up.
		for (var i=0; i < arrayAttrs.length; i++ )
		{
			mapDuplicates[ arrayAttrs[i] ] = {};
		}

		oUpdatedDom.childNodes.forEach( function ( item )
		{
			// No attributes? Not a node we can work with.
			if ( ! item["attributes"] )
				return;

			AddSearchPositionClickHandler( item );

			for (var i = 0; i < arrayAttrs.length; i++)
			{

				// Remove duplicate results.
				var strAttr = arrayAttrs[i];
				var node = null;
				if ( node = item.attributes[ strAttr ] )
				{
					var id = node['nodeValue'];

					if ( mapDuplicates[strAttr][ id ] )
					{
						// Duplicate! Hide it.
						item.hide();
					}
					else
					{
						mapDuplicates[ strAttr ][ id ] = true;
					}
					break;
				}
			}
		});

		// Re-fire our scroll-handler on the next tick, because after client-side filtering there may not be enough results to fill the screen.
		// This will only load more results if our list isn't long enough, and respects the rate-limit we've got in place for scrolling.
		setTimeout( function() {
			self.oController.OnScroll();
		}, 1 );
	});

	// Kick off an infinite scroll check immediately, in case the user is on a high-res screen and doesn't have a scrollbar.
	self.oController.OnScroll();

	return self.oController;
}

// Cleans up any params we've stashed in the URL to make sure the user returns to the right spot in their query when
// using the back button.
function InfiniteCleanupUrlParams()
{
	var url = new URL( location.href );
	var params = new URLSearchParams( url.search );

	if ( params.has('force_infinite') || params.has('page') )
	{
		params.delete('force_infinite');
		params.delete('page');
		url.search = params.toString();
		history.replaceState( history.state, "", url.toString() );

		// We're only here if they've used the back-button with infinite-scroll, so enable the
		// banner at the top to show results from the start.
		var $reloadNotice = $J("#search_infiniscroll_reload_container");
		$reloadNotice.show();
		$reloadNotice.click( function() {
			location.href = url.toString();
		});
	}
}

// Decorates the given node with a click handler to support smoothly returning
// to it on navigation back through the browser history.
// Does nothing if the node is not a store item.
function AddSearchPositionClickHandler( item )
{
	var attrPageNo = item.attributes[ 'data-search-page' ];
	var sItemKey = item.attributes[ 'data-ds-itemkey' ].value;

	if ( attrPageNo && sItemKey )
	{
		$J(item).click( fnStashSearchPositionHistory( parseInt( attrPageNo.value ), sItemKey ) ); 

		// Remove the page number, so we don't try to attach a click handler again.
		item.removeAttributeNode(attrPageNo);
	}
}

// This handles our croutons at the top of the page.
function AddSearchTag( strParam, strValue, strLabel, fnOnClick, strIcon = null )
{
	if( $J('#searchtag_tmpl').length == 0 )
		return;
	var eleTag = $J('#searchtag_tmpl').clone( true );
	eleTag.id = "";
	eleTag[0].dataset.tag_param = strParam;
	eleTag[0].dataset.tag_value = strValue;
	eleTag.addClass('tag_dynamic');
	$J(".label", eleTag).text(strLabel);
	$J(".btn", eleTag).click( fnOnClick );

	var $icon = $J(".search_crouton_icon", eleTag);

	// Add an icon, or remove the icon element
	if (strIcon)
		$icon.attr("src",strIcon);
	else
		$icon.remove();

	eleTag.css('display', 'inline-block');
	$J('.termcontainer').append(eleTag);
}

function ExpandOptions( e, target )
{
	var options = $J('#' + target);
	options.css( { 'max-height': '', 'height': 'auto' } );
	$J(e).hide();
}

function RemoveSearchTag( strParam, strValue )
{
	$J('div[data-tag_param=\''+strParam+'\'][data-tag_value=\''+strValue+'\']').remove();
}

function UpdateTags()
{
	$J('.tag_dynamic').remove();
	$J('#termsnone').show();
	var rgActiveTags   = $J('#TagFilter_Container .tab_filter_control.checked');
	var rgActiveUntags = $J('#TagFilter_Container .tab_filter_control_not.checked');

	// Search term
	var strTerm = $J("#realterm").val();
	if( strTerm )
	{
		AddSearchTag( 'term', strTerm, '"'+strTerm+'"', function(tag) { $J("#realterm").val(""); $J("#term").val(""); AjaxSearchResults(); return false; } );
		$J('#termsnone').hide();
	}

	// Publisher
	var strPublisher = $J("#publisher").val();
	if( strPublisher )
	{
		AddSearchTag( 'publisher', strPublisher, "Publisher" + ': '+strPublisher, function(tag) { $J("#publisher").val(""); AjaxSearchResults(); return false; } );
		$J('#termsnone').hide();
	}

	// Developer
	var strDeveloper = $J("#developer").val();
	if( strDeveloper )
	{
		AddSearchTag( 'publisher', strDeveloper, "Developer" + ': '+strDeveloper, function(tag) { $J("#developer").val(""); AjaxSearchResults(); return false; } );
		$J('#termsnone').hide();
	}

	if ( rgActiveTags.length )
	{
		for( var i=0; i < rgActiveTags.length; i++)
		{
			var Tag = $J(rgActiveTags[i]);
			AddSearchTag( Tag.data('param'), Tag.data('value'), $J('.tab_filter_control_label', Tag).text(), function(tag) { return function() { tag.click(); return false; } }(Tag) );
			if ( !Tag.is(':visible') )
			{
				Tag.trigger( 'tablefilter_update' );
			}
		}

		$J('#TagFilter_Container').css( {maxHeight: ''} );
		$J('#termsnone').hide();
	}

	// NOT tags.
	if ( rgActiveUntags.length ) {
		for ( var i=0; i < rgActiveUntags.length; i++ ) {
			var $untag = $J(rgActiveUntags[i]);
			AddSearchTag( $untag.data('param'), $untag.data('value'), $untag.data('loc'), function(elem) { return function() { elem.click(); return false; } }($untag), $untag.data('icon') );
		}
		$J('#termsnone').hide();
	}
}

function EnableClientSideFilters( CUserPreferences )
{
	var oFilters = {};
	var results_container = $J("#search_results");

	// If we're using the dynamic store, hide our results until it finishes loading,
	// otherwise they can appear and then disappear.
	if ( GDynamicStore )
		results_container.addClass('results_loading');

	for ( var strFilter of k_rgClientSideFilterNames )
	{
		// Find our control widget for this filter.
		var $Control = $J("span[data-param='hide'][data-value='" + strFilter + "']");

		if ($Control.length < 1)
		{
			console.log("Could not find clientside control for", strFilter );
			continue;
		}

		if ( CUserPreferences[ strFilter ] )
		{
			results_container.addClass(strFilter);
			$Control.addClass("checked");
			$Control.parent().addClass("checked");
		}

		// Click handler to toggle this filter.
		$Control.click( OnClickClientFilter($Control, strFilter, results_container) );
	}

	// Schedule our results to appear once we've finished decorating them.
	// Dynamic store will trigger the event immediately if it's already finished loading.
	GDynamicStore.OnReady( function() {
		results_container.removeClass( 'results_loading' );
	} );
}

// This exists as a function returning a function to ensure that we've got
// function-scope for our closures, because *some* browsers don't properly do
// block-scope.

function OnClickClientFilter( $Control, strFilter, results_container )
{
    return function() {
        var $document = $J(document);
        nSavedOffset = $Control[0].getBoundingClientRect().top;

        $Control.toggleClass('checked');

		var bChecked = $Control.hasClass('checked');

		// We don't just 'toggle' classes here, because if things somehow get out of whack, then
		// they'll stay out of whack. Instead we yoke the container to our control's value.
        if ( bChecked )
		{
            results_container.addClass(strFilter);
			$Control.parent().addClass("checked");
        }
		else 
		{
            results_container.removeClass(strFilter);
			$Control.parent().removeClass("checked");
        }

        // Our viewport will "jump" with the results list changing in length, so we calculate where we
        // need to be to be to keep the side-menu in the same location, and "scroll" to there.
        var nFixScrollOffset = $document.scrollTop() - nSavedOffset + $Control[0].getBoundingClientRect().top;
        $document.scrollTop(nFixScrollOffset);

		// Update the user's preferences back-end, so the toggles remain sticky. SavePrefs explicitly allows
		// only a subset to be posted for update. There's no checking if this succeeds, as what would we
		// do if it fails?
		
		var oPrefs = { 'sessionid' : g_sessionID };
		oPrefs[strFilter] = bChecked ? 1 : 0;
		
		$J.post(
			'https://store.steampowered.com/account/savesearchpreferences',
			oPrefs
		);

		UpdateFilterButtonText();
    };
}

function OnClickShowFilteredContentSettingsModal()
{
	let $dialog = ShowConfirmDialog(
		"Content Filtering",
		"The preferences you set affect what titles are displayed to you throughout the Steam Store, including on the home page, search results, etc.",
		"View unfiltered search results",
		"Close",
		"Edit your preferences" );

	$dialog.done( function( strButton ) {
		if ( strButton == 'OK' )
		{
			top.location.href = g_strUnfilteredURL;
		}
		else if ( strButton == 'SECONDARY' )
		{
			top.location.href = "https://store.steampowered.com/account/preferences/";
		}
	}  );
}

function jqEscapeSelectorAttribute(str)
{
	if (str)
		return str.replace(/([ #;?%&,.+*~\':"!^$[\]()=>|\/@])/g,'\\$1');

	return str;
}

function InitAutocollapse()
{
	var prefs = GetCollapsePrefs();
	$J('.search_collapse_block').each( function() {
		var $Block = $J(this);
		$Block.attr('data-gpnav','rows').attr('data-gpfocus','group');
		var name = $Block.data('collapseName');
		var bCollapsed;
		if ( prefs[ name ] !== undefined )
			bCollapsed = prefs[ name ];
		else
			prefs[ name ] = bCollapsed = $Block.data('collapseDefault');

		bCollapsed = bCollapsed && !( $Block.find('.tab_filter_control.checked').length > 0 );

		$Block.children('.block_content').css( 'height', '' );

		if ( bCollapsed )
		{
			$Block.addClass( 'collapsed' );
			$Block.children('.block_content').hide();
		}

		$Block.children('.block_header').on( 'click', function() {
			if ( $Block.hasClass('collapsed') )
			{
				prefs[ name ] = false;
				$Block.children('.block_content').slideDown( 'fast' );
			}
			else
			{
				prefs[ name ] = true;
				$Block.children('.block_content').slideUp( 'fast' );
			}

			$Block.toggleClass('collapsed');
			SaveCollapsePrefs( prefs );
		});

		$Block.on('v_gpfocus', function() {
			if ( $Block.hasClass('collapsed') )
			{
				// show but don't modify preferences
				$Block.children('.block_content').slideDown( 'fast' );
				$Block.toggleClass('collapsed');
			}
		});
	});
}

function GetCollapsePrefs()
{
	var data = WebStorage.GetLocal( 'search_collapse_prefs' );
	return data || {};
}

function SaveCollapsePrefs( data )
{
	WebStorage.SetLocal( 'search_collapse_prefs', data );
}

