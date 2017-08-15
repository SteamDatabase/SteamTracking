
var g_bInHashChange = false;
var g_oRecommendations = null;

function OnRecommendationsRendered()
{
	var bHaveUser = ( g_AccountID != 0 );
	if ( !bHaveUser )
	{
		return;
	}

	GDynamicStore.DecorateDynamicItems();
}

function FollowCurator( clanID, bFollow )
{
	var bHaveUser = ( g_AccountID != 0 );
	if ( !bHaveUser )
	{
		ShowAlertDialog("Please log in", "You must be logged in to follow a curator");
		return;
	}

	$J.post(
		'http://store.steampowered.com/curators/ajaxfollow',
		{ 'clanid' : clanID, 'sessionid' : g_sessionID, 'follow' : bFollow ? 1 : 0 },
		function( data )
		{
			if ( bFollow )
			{
				UpdateFormattedNumber( $J( "#CuratorNumFollowers_" + clanID ), 1 );
				$J( "#CuratorFollowBtn_" + clanID).hide();
				$J( "#CuratorUnFollowBtn_" + clanID).show();
                		if ( data && data.nSaleTaskCompleted ) { NewStickerPackModal( 'Follow a Curator' ); }
			}
			else
			{
				UpdateFormattedNumber( $J( "#CuratorNumFollowers_" + clanID ), -1 );
				$J( "#CuratorFollowBtn_" + clanID).show();
				$J( "#CuratorUnFollowBtn_" + clanID).hide();
			}
		},
		'json'
	).fail( function()
		{
			ShowAlertDialog( 'Error', 'There was a problem trying to follow the Steam Curator.' );
		}
	);
	return false;
}

function InitSearchFilters()
{
	var g_rgTabs = [];
	var g_rgTabParams = {};
	var g_activeSort = 'recent';

	var fnOnFilterChange = function()
	{
		var rgParams = {};
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

		rgParams['sort'] = g_activeSort;

		$J('#' + g_oRecommendations.m_strElementPrefix + 'Rows').empty();

		g_oRecommendations.m_rgStaticParams = rgParams;
		g_oRecommendations.LoadPage( 0, true );
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
		{
			$J('.tab_filter_ctn').hide( 'fast' );
		}

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

	$J('.tab').each( function() {
		var $Control = $J(this);
		var value = $Control.data('value');

		g_rgTabs.push( $Control );

		$Control.click( function() {
			if ( !$Control.hasClass( 'active' ) )
			{
				g_activeSort = value;
				$Control.addClass('active');

				for (var i = 0; i < g_rgTabs.length; ++i)
				{
					var $OtherTab = g_rgTabs[i];
					if ( $OtherTab != $Control )
					{
						$OtherTab.removeClass('active');
					}
				}

				fnOnFilterChange();
			}

		});
	});
}

function InitPagingControls( oPagingData )
{
	g_oRecommendations = new CAjaxInfiniteScrollingControls( oPagingData, 'https://store.steampowered.com/curators/ajaxgetcuratorrecommendations/' + oPagingData['clanid'] + '/' );
	g_oRecommendations.SetResponseHandler( function( response ) {
		OnRecommendationsRendered();
		$J( "#" + this.m_strElementPrefix + "Rows").InstrumentLinks();
	});

	InitSearchFilters();
}

function CuratorFieldToggle( elNode, strValue )
{
	var elInput = elNode.querySelector('input');
	if( elInput.value == strValue )
	{
		elNode.classList.remove('selected');
		elInput.value = '';
	}
	else
	{
		elNode.classList.add('selected');
		elInput.value = strValue;
	}

	UpdateCurationList();
}


function UpdateCurationList( )
{
	var elForm = document.getElementById('filter_box');
	var elTarget = document.getElementById('RecommendationsTable');

	var rgTags = elForm.querySelectorAll('*[name="tagids"]');

	var rgValues = [];
	for( var j=0; j<rgTags.length; j++ )
	{
		if ( rgTags[ j ].value )
		{
			rgValues.push ( rgTags[ j ].value );
		}
	}

	var strSort = elForm.querySelector('*[name="sortby"]').value;
	var strFilter = elForm.querySelector('*[name="filter"]').value;

	$J.ajax ( {
		url: g_strCuratorBaseURL + 'ajaxgetfilteredrecommendations/',
		data: {
			tagids: rgValues,
			sort: strSort,
			filter: strFilter
		},
		type: 'GET',
		cache: true
	} ).done( function ( data )
	{
		elTarget.innerHTML = data;
	});

}

