
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

	if ( !bOnLocationChange )
	{
		if ( g_bUseHistoryAPI )
		{
			history.pushState( { params: rgParameters}, '', '?' + Object.toQueryString( rgParameters ) );
		}
		else
		{

			window.location = '#' + Object.toQueryString( rgParameters );
		}
	}
	else if ( bInitialLoad && g_bUseHistoryAPI )
	{
		history.replaceState( { params: rgParameters}, '', '?' + Object.toQueryString( rgParameters ) );
	}


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

function InitInfiniteScroll( rgParameters )
{
    // Copy our params so we don't surprise our caller by changing theirs.
    rgParameters = Object.assign({}, rgParameters);

	// Is there a better way to find our current function?
	var self = InitInfiniteScroll;

	// Clear any existing infinite scroll so we don't mix search results.
	if (typeof( self.oController ) != "undefined" && self.oController !== null )
		self.oController.Stop();

	// If we're not enabled, or see a page parameter, then we don't want to use infiniscroll.
	if ( ! self.bEnabled || new URL( window.location.href ).searchParams.get('page') )
	{
		return null;
	}

	var oScrollOptions = {
		"pagesize": 25,
		"total_count": 1000, // Gets filled with real value after our first load.
		"prefix": "search_results"
	};

	self.oController = new CAjaxInfiniteScrollingControls( oScrollOptions, 'https://store.steampowered.com/search/results' );

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

			// Some nodes will be text or otherwise attributeless.
			if ( ! item["attributes"] ) return;

			//  Check our duplicate params.
			for (var i = 0; i < arrayAttrs.length; i++)
			{
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

	return self.oController;
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

function EnableClientSideFilters()
{
	var oFilters = {
		'hide_owned':    { 'default': true },
		'hide_ignored':  { 'default': true },
		'hide_wishlist': { 'default': false },
	};

	var results_container = $J("#search_results");

	for (var strFilter of Object.keys(oFilters))
	{
		// Find our control widget for this filter.
		var $Control = $J("div[data-param='hide'][data-value='" + strFilter + "']");

		if ($Control.length < 1)
		{
			console.log("Could not find clientside control for", strFilter );
			continue;
		}

		// If it's a default filter, set it on the widget and our results container.
		if (oFilters[strFilter].default)
		{
			results_container.addClass(strFilter);
			$Control.addClass("checked");
		}

		// Click handler to toggle this filter.
		$Control.click( OnClickClientFilter($Control, strFilter, results_container) );
	}
}

// This exists to ensure that we've got function-scope for our closures because *some* browsers
// don't properly do block-scope.
function OnClickClientFilter( $Control, strFilter, results_container )
{
    return function() {
        var $document = $J(document);
        nSavedOffset = $Control[0].getBoundingClientRect().top;

        $Control.toggleClass('checked');

        if ($Control.hasClass('checked')) {
            results_container.addClass(strFilter);
        } else {
            results_container.removeClass(strFilter);
        }

        // Our viewport will "jump" with the results list changing in length, so we calculate where we
        // need to be to be to keep the side-menu in the same location, and "scroll" to there.
        var nFixScrollOffset = $document.scrollTop() - nSavedOffset + $Control[0].getBoundingClientRect().top;
        $document.scrollTop(nFixScrollOffset);
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

