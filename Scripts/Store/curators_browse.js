
var gFollowedCuratorIDs = {};
var g_bInHashChange = false;
var g_oCurators = null;

function OnCuratorsRendered()
{
	var bHaveUser = ( g_AccountID != 0 );
	if ( !bHaveUser )
	{
		return;
	}

	$J('a.steam_curator_row').each(
		function()
		{
			var clanID = $J(this).data('clanid');
			if ( gFollowedCuratorIDs.hasOwnProperty( clanID ) )
			{
				$J( "#CuratorFollowing_" + clanID).show();
				$J( "#CuratorFollowBtn_" + clanID).hide();
			}
			else
			{
				$J( "#CuratorFollowing_" + clanID).hide();
				$J( "#CuratorFollowBtn_" + clanID).show();
			}
		}
	);
}

function FollowCurator( clanID )
{
	$J.post(
		'http://store.steampowered.com/curators/ajaxfollow',
		{ 'clanid' : clanID, 'sessionid' : g_sessionID },
		function( data )
		{
			UpdateFormattedNumber( $J( "#CuratorNumFollowers_" + clanID ), 1 );
			$J( "#CuratorFollowing_" + clanID).show();
			$J( "#CuratorFollowBtn_" + clanID).hide();
			gFollowedCuratorIDs[clanID] = clanID;
		},
		'json'
	).fail( function()
		{
			ShowAlertDialog( 'Error', 'There was a problem trying to follow the Steam Curator.' );
		}
	);
	return false;
}

function ClearHash()
{
	window.location.hash = '';
}

function HandleHashChangeCurators( bClearResults )
{
	if ( window.location.hash.length > 2 && window.location.hash.substr(0,2) == "#p" )
	{
		var nPage = parseInt( window.location.hash.substr(2) );

		if ( nPage - 1 != g_oCurators.m_iCurrentPage )
		{
			if ( bClearResults )
			{
				$J('.steam_curator_row_ctn').remove()
			}

			g_oCurators.GoToPage( nPage - 1, false );
		}
	}
}

function InitCuratorsPagingControls( oPagingData )
{
	g_oCurators = new CAjaxPagingControls( oPagingData, 'https://store.steampowered.com/curators/ajaxgetcurators/' );
	g_oCurators.SetResponseHandler( function( response ) {
		OnCuratorsRendered();
	});
	g_oCurators.SetPageChangingHandler( function( nPage ) {
		if ( !g_bInHashChange )
		{
			window.location.hash = 'p' + ( nPage + 1 );
		}
	} );

	var staticParams = { 'keywords' : oPagingData['keywords'], 'filter' : oPagingData['filter'] };
	g_oCurators.SetStaticParameters( staticParams );

	HandleHashChangeCurators( true );

	OnCuratorsRendered();
}

function RemoveFilter( paramName )
{
	$J( "#" + paramName).remove();
	$J( "#FilterForm").submit();
}


// All recommendations by your curators
var g_oRecommendations = null;
function InitCombinedRecommendationsPagingControls( oPagingData )
{
	g_oRecommendations = new CAjaxPagingControls( oPagingData, 'https://store.steampowered.com/curators/ajaxgetcombinedrecommendations/' );
	g_oRecommendations.SetResponseHandler( function( response ) {
		$J('.tooltip').v_tooltip();
		GDynamicStore.DecorateDynamicItems();
		$J( "#" + this.m_strElementPrefix + "Rows").InstrumentLinks();
	});
	g_oRecommendations.SetPageChangingHandler( function( nPage ) {
		if ( !g_bInHashChange )
		{
			window.location.hash = 'p' + ( nPage + 1 );
		}
	} );

	HandleHashChangeRecommendations( true );

	GDynamicStore.DecorateDynamicItems();
}

function HandleHashChangeRecommendations( bClearResults )
{
	if ( window.location.hash.length > 2 && window.location.hash.substr(0,2) == "#p" )
	{
		var nPage = parseInt( window.location.hash.substr(2) );

		if ( nPage - 1 != g_oRecommendations.m_iCurrentPage )
		{
			if ( bClearResults )
			{
				$J('.tab_item').remove()
			}

			g_oRecommendations.GoToPage( nPage - 1, false );
		}
	}
}


