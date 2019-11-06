
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

g_TagMap = null;
function PopulateTagFacetData( rgTagFacetData )
{
	// tab_filter_control_count
	var $Container = $J('#TagFilter_Container');
	var $Tags = $Container.children('div').detach();

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
	for ( var i = 0; i < rgTagFacetData.length; i++ )
	{
		var tagid = rgTagFacetData[i][0];
		var count = rgTagFacetData[i][1];

		rgDisplayedTags[ tagid ] = true;
		var $Tag = g_TagMap[tagid];
		$Tag.children('.tab_filter_control_count').text( v_numberformat( count ) ).css( {display: '' });
		$Container.append( $Tag );
		if ( nIndex++ > 15 )
			$Tag.hide();
		else
			$Tag.show();
	}
	for ( var tagid in g_TagMap )
	{
		if ( rgDisplayedTags[tagid] )
			continue;	//handled above

		var $Tag = g_TagMap[tagid];
		$Tag.children('.tab_filter_control_count').css( {display: 'none' });
		$Container.append( $Tag );
		if ( nIndex++ > 15 )
			$Tag.hide();
		else
			$Tag.show();
	}
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

var g_ajaxInFlight;
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
		return;

	// Find the item we want to be scrolling to.
	var sItemKey = history.state.itemkey;
	var nodeItem = $J( "a[data-ds-itemkey='" + history.state.itemkey + "']" );

	if ( nodeItem.length == 0 )
		return;

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

	// Remove our itemkey from the state to avoid risk of double-scrolls.
	delete history.state.itemkey;
}

// Returns a boolean as to whether InfiniScroll should be used.
// Does not examine user preferences.
function BShouldUseInfiniscroll()
{
	// InfiniScroll is enabled by default.
	var bEnable = true;

	// If we see a page number, we'd normally disable InfiniScroll...
	if ( new URL( window.location.href ).searchParams.get('page') )
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
		"pagesize": self.nScrollSize,
		"page": parseInt( rgParameters['page'] ),
		"total_count": 1000,         // Gets filled with real value after our first load.
		"prefix": "search_results",  // Where to put our results
	};

	self.oController = new CAjaxInfiniteScrollingControls( oScrollOptions, 'https://store.steampowered.com/search/results' );

	// We may have stashed a 'page' param in the URL to make sure we fetch the right page when the user
	// hits the back button. We remove that now because the pageno usually gets interpreted as paginated
	// search.
	
	var url = new URL( location.href );
	var params = new URLSearchParams( url.search );
	
	if ( params.has('page') )
	{
		params.delete('page');
		url.search = params.toString();
		history.replaceState( history.state, "", url.toString() );
		var $reloadNotice = $J("#search_infiniscroll_reload_container");
		$reloadNotice.show();
		$reloadNotice.click( function() {
			location.href = url.toString();
		});
	}	

	// Make sure our backend knows we're infinite scrolling, and don't need a whole page.
	rgParameters['infinite'] = "1";

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
	});

	// Kick off an infinite scroll check immediately, in case the user is on a high-res screen and doesn't have a scrollbar.
	self.oController.OnScroll();

	return self.oController;
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

function AddSearchTag( strParam, strValue, strLabel, fnOnClick )
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
	eleTag.css('display', 'inline-block');
	$J('.termcontainer').append(eleTag);
}

function ExpandOptions( e, target )
{
	/*var el = $J('#'+target),
	 curHeight = el.height(),
	 autoHeight = el.css('height', 'auto').height();
	 el.height(curHeight).animate({height: autoHeight}, 1000);*/
	$J('#'+target).css({height: 'auto'});
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
	var rgActiveTags = $J('#TagFilter_Container .tab_filter_control.checked');

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
				Tag.parent().prepend(Tag.show());
				Tag.trigger( 'tablefilter_update' );
			}
		}

		$J('#TagFilter_Container').css( {maxHeight: ''} );
		$J('#termsnone').hide();
	}

}

function EnableClientSideFilters( CUserPreferences )
{
	var rgFilterNames = [ 'hide_owned', 'hide_ignored', 'hide_wishlist' ];
	var oFilters = {};
	var results_container = $J("#search_results");

	// If we're using the dynamic store, hide our results until it finishes loading,
	// otherwise they can appear and then disappear.
	if ( GDynamicStore )
		results_container.addClass('results_loading');

	for ( var strFilter of rgFilterNames )
	{
		// Find our control widget for this filter.
		var $Control = $J("div[data-param='hide'][data-value='" + strFilter + "']");

		if ($Control.length < 1)
		{
			console.log("Could not find clientside control for", strFilter );
			continue;
		}

		if ( CUserPreferences[ strFilter ] )
		{
			results_container.addClass(strFilter);
			$Control.addClass("checked");
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
        }
		else 
		{
            results_container.removeClass(strFilter);
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
    };
}

function OnSelectFilteredContentSettingsMenu( elSource )
{
	var d = $J(elSource).data('dropdownValue');

	switch( d )
	{
		case 'explain':
			ShowAlertDialog( "Content Filtering", "The preferences you set affect what titles are displayed to you throughout the Steam Store, including on the home page, search results, etc." );
			break;
		case 'preferences':
			top.location.href = "https://store.steampowered.com/account/preferences/";
			break;
		case 'unfiltered':
			top.location.href = g_strUnfilteredURL;
			break;
	}
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

