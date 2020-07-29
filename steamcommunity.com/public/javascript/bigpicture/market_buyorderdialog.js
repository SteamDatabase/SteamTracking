

BuyOrderPopup = {
	m_strPollPanel: '<root> \
					<styles> \
						<include src="file://{resources}/styles/steamstyles.css" /> \
						<include src="file://{resources}/styles/msgbox.css" /> \
						<include src="file://{resources}/styles/community/community.css" /> \
						<include src="https://community.cloudflare.steamstatic.com/public/css/bigpicture/market.css?v=valveisgoodatcaching" /> \
						<include src="https://community.cloudflare.steamstatic.com/public/css/bigpicture/market_selldialog.css?v=valveisgoodatcaching" /> \
					</styles> \
					<scripts> \
						<include src="https://community.cloudflare.steamstatic.com/public/shared/javascript/bigpicture/base.js?v=valveisgoodatcaching&amp;l=english" /> \
						<include src="https://community.cloudflare.steamstatic.com/public/javascript/bigpicture/market_buyorderdialog.js?v=valveisgoodatcaching&amp;l=english" /> \
					</scripts> \
					<Panel class="MarketPopupWrapper"> \
						<Panel class="MarketPopup" oncancel="ClosePollPanel();" defaultfocus="Loading" > \
							<Panel id="MarketPollPanelPopout" class="DialogRegion" > \
								<Label id="PollStatus" html="true" text="Finding matching item listings at your desired price..." /> \
								<Label id="DetailText" html="true" /> \
								<Button id="Loading"> \
									<LoadingThrobber /> \
								</Button> \
								<Button id="MarketPollPopupOK" onactivate="ClosePollPanel();" > \
									<Label text="OK" /> \
								</Button> \
							</Panel> \
						</Panel> \
					</Panel> \
				</root>',
	m_popup: null,
	m_startTime: 0,

	Initialize: function( funcOnLoad )
	{
		$.Msg( "Init" );
		this.m_popup = $.CreatePanel( 'Panel', $.TenfootController( $.GetContextPanel() ).AccessMainMenu(), 'MarketPollPopup' );
		$.RegisterEventHandler( 'LoadAsyncComplete', this.m_popup, function( pPanel, bSuccess, eDetail, bPartial )
		{
			//
			// This is to workaround a bug in a previous public client that caused ToPanel to
			// return null.
			//
			//pPanel = ToPanel( pPanel );
			//if ( pPanel.id != BuyOrderPopup.m_popup.id )
			//{
			//	return;
			//}
			var strID = pPanel;
			if ( typeof pPanel !== 'string' )
			{
				strID = pPanel.id;
			}
			if ( strID != BuyOrderPopup.m_popup.id )
			{
				return;
			}
			$.Msg( "Loaded" );

			if ( bSuccess )
			{
				if ( funcOnLoad )
				{
					funcOnLoad();
				}
			}
			else
			{
				BuyOrderPopup.Close();
			}
		} );

		this.m_popup.LoadLayoutFromStringAsync( this.m_strPollPanel, true, false );
	},

	Close: function()
	{
		this.m_popup.AddClass( "Destructing" );
		$.DispatchEvent( 'MessageBoxClose', this.m_popup );
		this.m_popup.DeleteAsync( 0.4 );
		this.m_popup = null;
	},

	Show: function()
	{
		this.SetExitOnClose( false );

		$.Msg( "Show" );
		this.m_popup.AddClass( "Visible" );
		this.m_popup.RemoveClass( "Error" );
		$.TenfootController( $.GetContextPanel() ).ShowModalDialog( this.m_popup, '' );
		this.m_popup.SetFocus();
	},

	SetText: function( text )
	{
		this.m_popup.FindChildTraverse( "PollStatus").text = text;
	},

	SetDetailText: function( text )
	{
		this.m_popup.FindChildTraverse( "DetailText").text = text;
	},

	SetComplete: function()
	{
		var ok = this.m_popup.FindChildTraverse( "MarketPollPopupOK" );
		this.m_popup.AddClass( "Complete" );
		ok.SetFocus();
	},

	PlaceBuyOrder: function( price, quantity )
	{
		$.Msg( "Place" );
		if ( this.m_popup == null || !this.m_popup.IsValid() )
		{
			$.Msg( "Invalid panel, reinitializing" );
			this.m_popup = null;
			this.Initialize( function() { BuyOrderPopup.PlaceBuyOrder( price, quantity ); } );
			return;
		}

		this.Show();

		$.AsyncWebRequest( 'https://steamcommunity.com/market/createbuyorder/',
			{
				type: 'POST',
				data: {
					sessionid: g_SessionID,
					currency: g_rgWalletInfo['wallet_currency'],
					appid: g_rgAsset.appid,
					market_hash_name: g_rgAsset['market_hash_name'],
					price_total: Math.round( price * quantity ),
					quantity: quantity
				},
				success: function( data ) {
					BuyOrderPopup.OnCreateBuyOrderComplete( data );
				},
				error: function( jqxhr ) {
					$.Msg( "Error: " + jqxhr.responseText );
					var data = JSON.parse( jqxhr.responseText );
					if ( data && data.message )
					{
						BuyOrderPopup.DisplayError( data.message )
					}
				}
			}
		);
	},

	OnCreateBuyOrderComplete: function( data )
	{
		$.Msg( "OnCreateBuyOrderComplete: " + JSON.stringify( data ) );
		if ( data.success == 1 )
		{
			// Display status dialog and kick off first update
			var orderid = data.buy_orderid;
			$.Msg( orderid );
			this.m_startTime = Date.now();
			$.Schedule( 1.0, function() { BuyOrderPopup.PollForBuyOrderCompletion( orderid ); } );
		}
		else if ( data.message )
		{
			this.DisplayError( data.message );
		}
		else if ( data.success )
		{
			this.DisplayError( 'Sorry! We had trouble hearing back from the Steam servers about your order. Double check whether or not your order has actually been created or filled. If not, then please try again later.' + ' (' + data.success + ')' );
		}
		else
		{
			this.DisplayError( 'Sorry! We had trouble hearing back from the Steam servers about your order. Double check whether or not your order has actually been created or filled. If not, then please try again later.' );
		}
	},

	PollForBuyOrderCompletion: function( orderid )
	{
		if ( Date.now() > this.m_startTime + 5000 )
		{
			// Stop polling after 5s and just display completion
			this.DisplayBuyOrderPlaced();
		}
		else
		{
			$.AsyncWebRequest( 'https://steamcommunity.com/market/getbuyorderstatus/',
				{
					type: 'GET',
					data: {
						sessionid: g_SessionID,
						buy_orderid: orderid
					},
					success: function( data )
					{
						BuyOrderPopup.OnPollForBuyOrderCompletionSuccess( orderid, data );
					},
					error: function( jqhxr )
					{
						$.Msg( "PollForBuyOrderCompletion error: " + JSON.stringify( jghxr ) );
						BuyOrderPopup.DisplayBuyOrderPlaced();
					}
				} );
		}
	},

	OnPollForBuyOrderCompletionSuccess: function( orderid, data )
	{
		$.Msg( "OnPollForBuyOrderCompletionSuccess: " + JSON.stringify( data ) );
		if ( data.success != 1 )
		{
			$.Msg( data.success );
			$.Schedule( 1.0, function() { BuyOrderPopup.PollForBuyOrderCompletion( orderid ); } );
		}
		else if ( data.purchased )
		{
			this.m_popup.AddClass( "Purchased" );
			this.SetExitOnClose( true );
			this.SetComplete();
			this.SetText( 'Purchase succeeded! Your item is now in your inventory, and your receipt has been emailed to you.' );
			this.SetDetailText( data.purchase_amount_text );
		}
		else if ( data.active )
		{
			$.Schedule( 1.0, function() { BuyOrderPopup.PollForBuyOrderCompletion( orderid ); } );
		}
	},

	DisplayBuyOrderPlaced: function()
	{
		this.SetExitOnClose( true );
		this.SetText( 'Success! Your buy order has been placed.<br><br>You will be automatically notified by email when the purchase is completed. You can cancel this buy order from the bottom of this page, or from the market home page.' );
		this.SetComplete();
	},

	DisplayError: function( text )
	{
		this.SetExitOnClose( true );
		this.m_popup.AddClass( "Error" );
		this.SetText( text );
		this.SetComplete();
	},

	SetExitOnClose: function( bCloseOnExit )
	{
		if ( bCloseOnExit )
		{
			this.m_popup.AddClass( "ExitOnClose" );
		}
		else
		{
			this.m_popup.RemoveClass( "ExitOnClose" );
		}
	}
}

//
// This gets called in the JS context of the popup panel,
// which is not the same as the JS context of the panel
// that created the popup and where BuyOrderPopup is
// interesting.  So don't reference BuyOrderPopup
// in here.
//
function ClosePollPanel()
{
	var popup = $("#MarketPollPopup");
	var bExitOnClose = popup.BHasClass( "ExitOnClose" );
	popup.AddClass( "Destructing" );
	$.DispatchEvent( "MessageBoxClose", popup );
	popup.DeleteAsync( 0.4 );

	if ( bExitOnClose )
	{
		$.Msg( "Exiting" );
		$.DispatchEventAsync( 0.1, 'NavigateTenfootBack' );
		$.DispatchEventAsync( 0.1, 'TruncateBackStack' );
	}
}


function PlaceBuyOrder()
{
	var elError = $( '#BuyDialogError' );
	var elYourPrice = $( '#YourPrice' );
	var elQuantity = $( '#Quantity' );
	var elSSAButton = $( '#SSAButton' );
	var price = GetPriceValueAsInt( elYourPrice.text );
	var quantity = elQuantity.text;

	$.GetContextPanel().RemoveClass( 'ErrorTextVisible' );
	elSSAButton.RemoveClass( 'FailedValidation' );
	elYourPrice.RemoveClass( 'FailedValidation' );
	elQuantity.RemoveClass( 'FailedValidation' );

	// If the price entered exceeds the maximum allowed, prevent the sale.
	if ( price > g_rgWalletInfo['wallet_trade_max_balance'] )
	{
		elYourPrice.AddClass( 'FailedValidation' );
		if ( price > g_rgWalletInfo['wallet_trade_max_balance'] )
		{
			elYourPrice.AddClass( 'FailedValidation' );
		}

		var strError = ' The price entered exceeds the maximum price of %1$s.'
				.replace( '%1$s', v_currencyformat( g_rgWalletInfo['wallet_trade_max_balance'], GetCurrencyCode( g_rgWalletInfo['wallet_currency'] ) ) );
		DisplayError( strError );
		return;
	}

	if ( price <= 0 )
	{
		elYourPrice.AddClass( 'FailedValidation' );
		DisplayError( 'You must enter a valid price.' );
		return;
	}

	if ( quantity <= 0 )
	{
		elQuantity.AddClass( 'FailedValidation' );
		DisplayError( 'You must enter a valid quantity.' );
		return;
	}

		if ( !elSSAButton.checked )
	{
		elSSAButton.AddClass( 'FailedValidation' );
		DisplayError( 'You must agree to the terms of the Steam Subscriber Agreement to sell this item.' );
		return;
	}

	BuyOrderPopup.PlaceBuyOrder( price, quantity );
}


function DisplayError( error )
{
	var elError = $( '#BuyDialogError' );
	$.GetContextPanel().AddClass( 'ErrorTextVisible' );
	elError.text = error;
}

function FixupTotal()
{
	var price = GetPriceValueAsInt( $('#YourPrice').text );
	var quantity = $('#Quantity').text;
	var total = 0;

	if ( price > 0 && price == parseInt( price ) &&
		quantity >0 && quantity == parseInt(quantity, 10 ) )
	{
		total = price * quantity;
		$('#Total').text = v_currencyformat( total, GetCurrencyCode( g_rgWalletInfo['wallet_currency'] ) );
	}
	else
	{
		$('#Total').text = '';
	}

	if ( total > g_rgWalletInfo.wallet_balance )
	{
		$("#Contents").AddClass( "Underfunded" );
	}
	else
	{
		$("#Contents").RemoveClass( "Underfunded" );
	}
}


