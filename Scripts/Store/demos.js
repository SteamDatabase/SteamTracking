

var g_bInHashChange = false;
var g_oPagingControls = null;

function OnRendered()
{
	var bHaveUser = ( g_AccountID != 0 );
	if ( !bHaveUser )
	{
		return;
	}

	GDynamicStore.DecorateDynamicItems();
}

function ClearHash()
{
	window.location.hash = '';
}

function HandleHashChange( bClearResults )
{
	if ( window.location.hash.length > 2 && window.location.hash.substr(0,2) == "#p" )
	{
		var nPage = parseInt( window.location.hash.substr(2) );

		if ( nPage - 1 != g_oPagingControls.m_iCurrentPage )
		{
			if ( bClearResults )
			{
				$J('.tab_item').remove()
			}

			g_oPagingControls.GoToPage( nPage - 1, false );
		}
	}
}

function InitSearchFilters( oPagingData, rgTabNames )
{
	var g_rgTabs = {};
	var g_rgTabBaseParams = {
		'tab' : oPagingData['tab']
	};
	var g_rgTabParams = {};
	var g_strActiveTab = null;

	g_oPagingControls.m_rgStaticParams = g_rgTabBaseParams;

	var fnOnFilterChange = function()
	{
		var rgParams = $J.extend( {}, g_rgTabBaseParams );
		for ( var filter in g_rgTabParams )
		{
			var rgParamValues = g_rgTabParams[filter];
			if ( rgParamValues && rgParamValues.length )
			{
				rgParamValues.sort();
				for ( var i = 0; i < rgParamValues.length; i++ )
				{
					rgParams[ filter + '[' + i + ']' ] = rgParamValues[i].toString();
				}
			}
		}

		g_oPagingControls.m_rgStaticParams = rgParams;
		g_oPagingControls.GoToPage( 0, true );
	};

	var fnAddFilter = function( strParam, value, $Checkbox )
	{
		if ( !$Checkbox )
			$Checkbox = $J('.tab_filter_control[data-param=' + strParam + '][data-value=' + value + ']');

		$Checkbox.addClass( 'checked' );

		if ( !g_rgTabParams[strParam] )
			g_rgTabParams[strParam] = [];
		g_rgTabParams[strParam].push( value );

		var $Filter = $J('<div/>', {'class': 'tab_filter' } );
		$Filter.attr( 'data-param', strParam );
		$Filter.attr( 'data-value', value );
		$Filter.text( $Checkbox.text() );
		$Filter.append( $J('<div/>', {'class': 'tab_filter_remove' }).html('&nbsp;').click( function() { fnRemoveFilter( strParam, value, $Checkbox, $Filter ); } ) );
		$J('.tab_filters').append( $Filter );
		$J('.tab_filter_ctn').show( 'fast' );

		fnOnFilterChange();
	};

	var fnRemoveFilter = function( strParam, value, $Checkbox, $Filter )
	{
		if ( !$Checkbox )
			$Checkbox = $J('.tab_filter_control[data-param=' + strParam + '][data-value=' + value + ']');
		if ( !$Filter )
			$Filter = $J('.tab_filter[data-param=' + strParam + '][data-value=' + value + ']');

		$Checkbox.removeClass('checked');

		if ( g_rgTabParams[strParam] )
			g_rgTabParams[strParam] = g_rgTabParams[strParam].filter( function( val ) { return val != value; } );

		$Filter.remove();
		if ( !$J('.tab_filters').children().length )
			$J('.tab_filter_ctn').hide( 'fast' );

		fnOnFilterChange();
	};

	$J('.tab_filter_control').each( function() {
		var $Control = $J(this);
		var strParam = $Control.data('param');
		var value = $Control.data('value');
		$Control.click( function() {
			if ( !$Control.hasClass( 'checked' ) )
			{
				fnAddFilter( strParam, value, $Control );
			}
			else
			{
				fnRemoveFilter( strParam, value, $Control );
			}
		});
	});
}

function InitPagingControls( oPagingData )
{
	g_oPagingControls = new CAjaxPagingControls( oPagingData, oPagingData['url'] );
	g_oPagingControls.SetResponseHandler( function( response ) {
		OnRendered();
	});
	g_oPagingControls.SetPageChangingHandler( function( nPage ) {
		if ( !g_bInHashChange )
		{
			window.location.hash = 'p' + ( nPage + 1 );
		}
		$J('#NewDemosRows').fadeTo( 0.1, 0.5 );
	} );
	g_oPagingControls.SetPageChangedHandler( function ( nPage ) {
		$J('#NewDemosRows').fadeTo( 0.1, 1 );
	} );

	InitSearchFilters( oPagingData );

	HandleHashChange( true );
}

