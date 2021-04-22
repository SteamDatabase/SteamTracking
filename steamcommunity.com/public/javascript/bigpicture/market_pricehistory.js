
function ClosePopup( id )
{
	var popup = $.TenfootController( $.GetContextPanel() ).AccessMainMenu().FindChildTraverse( id );

	popup.AddClass( "Destructing" );
	$.DispatchEvent( 'MessageBoxClose', popup );
	popup.DeleteAsync( 0.4 );
}

function DisplayPopup( id, layout )
{
	var popup = $.CreatePanel( 'Panel', $.TenfootController($.GetContextPanel() ).AccessMainMenu(), id );
	popup.BLoadLayoutFromString( layout, true, false );

	$.TenfootController($.GetContextPanel()).ShowModalDialog( popup, '' );
	return popup;
}

function ShowPriceHistory()
{
	var layout =
		'<root>' +
			'<styles>' +
			'<include src="file://{resources}/styles/steamstyles.css" />' +
			'<include src="file://{resources}/styles/msgbox.css" />' +
			'<include src="https://community.cloudflare.steamstatic.com/public/css/bigpicture/market_pricehistory.css?v=valveisgoodatcaching&amp;_cdn=cloudflare" />' +
			'</styles>' +
			'<scripts>' +
				'<include src="" />' +
			'</scripts>' +
			'<script>' +
				ClosePopup.toString() +
			'</script>' +
			'<Panel defaultfocus="DialogInner" oncancel="ClosePopup( \'PriceChartPopup\' );" >' +
				'<Button id="DialogInner" >' +
					'<LoadingThrobber id="Throbber" />' +
					'<HTML embedded="true" manualscroll="false" url="' + g_urlPriceChart + '" />' +
				'</Button>' +
			'</Panel>' +
		'</root>';

	var popup = DisplayPopup( "PriceChartPopup", layout );
	$.RegisterEventHandler( 'HTMLFinishRequest', popup, function() {
		popup.AddClass( "LoadComplete" );
	} );
	$.RegisterFooterButton( popup, "pad_a", '' );
	$.RegisterFooterButton( popup, "pad_b", 'DISMISS' );
	$.RegisterKeyBind( popup, "pad_b,steampad_b", function() { ClosePopup( 'PriceChartPopup' ); } );
}

$.Schedule( 0.0, function() {
	if ( g_urlPriceChart != undefined )
	{
		$.RegisterKeyBind($.GetContextPanel(), "pad_x,steampad_x", function() {
			ShowPriceHistory();
		} );

		$.RegisterFooterButton($("#CommunityMarketContent"), "pad_x", "SHOW HISTORY" );
	}
});


