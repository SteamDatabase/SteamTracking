
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

function FillFormFromNavigation( querystring, link_click, initial_load )
{
	var rgLocationParams = querystring.toQueryParams();

	$J('.tab_filter_control.checked').removeClass('checked');

	if ( rgLocationParams['term'] )
		rgLocationParams['displayterm'] = rgLocationParams['term'];
	else
		rgLocationParams['displayterm'] = 'enter search term or tag'

	var form = $J('#advsearchform');
	// in responsive mode, these elements are reparented to the localmenu_content area
	var addtlOptions = $J('.localmenu_content #additional_search_options');
	g_bPopulatingSearchControls = true;
	$J(":input",form ).add(':input', addtlOptions).each(function(input, element)
	{

		if ( !element || !element.name )
			return true;

		var name = element.name;

		if ( name == 'snr' )
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
				}
			}
		}
	});

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
function AjaxSearchResults()
{
	// we're in the middle of filling in all the controls from the hash parameter
	if ( g_bPopulatingSearchControls )
		return;

	// all page # changes come through as location changes, so reset to 1 here
	//	when changing search parameters
	$('search_current_page').value = 1;

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
	g_ajaxInFlight = new Ajax.Updater( 'search_results', 'http://store.steampowered.com/search/results', { parameters: rgParameters, method: 'get', onComplete: SearchCompleted.bind( null, rgParameters ) } );
}

function SearchCompleted( parameters, transport )
{
	g_ajaxInFlight = null;

	if ( typeof GDynamicStore != 'undefined' )
		GDynamicStore.DecorateDynamicItems( $J('#search_results' ) );

	if ( typeof BindStoreTooltip != 'undefined' )
		BindStoreTooltip( $J('#search_results [data-store-tooltip]' ) );

	if ( g_rgDesiredParameters )
	{
		ExecuteSearch( g_rgDesiredParameters );
		g_rgDesiredParameters = null;
	}


	if (typeof(GDynamicStore) !== 'undefined')
		GDynamicStore.DecorateDynamicItems();
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
	var rgActiveTags = $J('.tab_filter_control.checked');

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

	for( var i=0; i < rgActiveTags.length; i++)
	{
		var Tag = $J(rgActiveTags[i]);
		AddSearchTag( Tag.data('param'), Tag.data('value'), $J('.tab_filter_control_label', Tag).text(), function(tag) { return function() { tag.click(); return false; } }(Tag) );
		if ( !Tag.is(':visible') )
		{
			Tag.parent().prepend(Tag.show());
			Tag.trigger( 'tablefilter_update' );
		}
		$J('#termsnone').hide();
	}
}

function jqEscapeSelectorAttribute(str)
{
	if (str)
		return str.replace(/([ #;?%&,.+*~\':"!^$[\]()=>|\/@])/g,'\\$1');

	return str;
}

