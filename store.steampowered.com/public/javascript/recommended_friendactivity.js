
var g_strActiveContext = null;
var g_rgPagingControls = {};

function ToggleForeverPlaytime()
{
	$J( "#playtime_2weeks_togglebtns").hide();
	$J( "#playtime_forever_togglebtns").show();
	ShowContext( 'MostPlayedForever', 'MostPlayed' );
}

function Toggle2WeekPlaytime()
{
	$J( "#playtime_2weeks_togglebtns").show();
	$J( "#playtime_forever_togglebtns").hide();
	ShowContext( 'MostPlayed2Weeks', 'MostPlayed' );
}

function ShowContext( strContext, strTab )
{
	var tab = $J( "#" + strTab + "_Tab" );
	tab.siblings().removeClass( 'active' );
	tab.addClass( 'active' );

	if ( strTab == 'MostPlayed' )
	{
		$J( "#MostPlayed_content").show();
	}
	else
	{
		$J( "#MostPlayed_content").hide();
	}

	$J( "#" + g_strActiveContext + "_content").hide();
	g_strActiveContext = strContext;
	$J( "#" + g_strActiveContext + "_content").show();
	g_rgPagingControls[g_strActiveContext].GoToPage( 0, true );
}

function InitPagingControls( strInitialContext, strInitialTab, rgPagingData )
{
	for ( var i = 0; i < rgPagingData.length; ++i )
	{
		var oPagingData = rgPagingData[i];
		var oPagingControls = new CAjaxPagingControls( oPagingData, oPagingData['url'] );
		oPagingControls.m_rgStaticParams = oPagingData['params'];

		oPagingControls.SetResponseHandler( function( response ) {
			GDynamicStore.DecorateDynamicItems();
			$J('#' + this.m_strElementPrefix + 'Rows').InstrumentLinks();
		});
		oPagingControls.SetPageChangingHandler( function( nPage ) {
			g_nPage = nPage;
			//UpdateQueryString();
			$J('#' + this.m_strElementPrefix + 'Rows').fadeTo( 0.1, 0.5 );
		} );
		oPagingControls.SetPageChangedHandler( function ( nPage ) {
			$J('#' + this.m_strElementPrefix + 'Rows').fadeTo( 0.1, 1 );
		} );

		g_rgPagingControls[oPagingData['prefix']] = oPagingControls;
	}

	// force load
	ShowContext( strInitialContext, strInitialTab );
}

