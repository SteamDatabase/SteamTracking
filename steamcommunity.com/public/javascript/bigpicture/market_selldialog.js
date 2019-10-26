

SellOrderPopup = {
	m_strPollPanel: '<root> \
					<styles> \
						<include src="file://{resources}/styles/steamstyles.css" /> \
						<include src="file://{resources}/styles/msgbox.css" /> \
						<include src="file://{resources}/styles/community/community.css" /> \
						<include src="https://steamcommunity-a.akamaihd.net/public/css/bigpicture/market.css?v=valveisgoodatcaching" /> \
						<include src="https://steamcommunity-a.akamaihd.net/public/css/bigpicture/market_selldialog.css?v=valveisgoodatcaching" /> \
					</styles> \
					<scripts> \
						<include src="https://steamcommunity-a.akamaihd.net/public/shared/javascript/bigpicture/base.js?v=valveisgoodatcaching&amp;l=english" /> \
						<include src="https://steamcommunity-a.akamaihd.net/public/javascript/bigpicture/market_buyorderdialog.js?v=valveisgoodatcaching&amp;l=english" /> \
					</scripts> \
					<Panel class="MarketPopupWrapper Complete"> \
						<Panel class="MarketPopup MarketSellOrderDialog" oncancel="ClosePollPanel();" defaultfocus="Loading" > \
							<Panel id="MarketPollPanelPopout" class="DialogRegion" > \
								<Label id="DetailText" text="This item will not be available in your inventory for use or trade while it is for sale in the Community Market. You can cancel the sale listing at any time from the &quot;My Listings&quot; tab in the Market." html="true" /> \
								<Button id="Loading"> \
									<LoadingThrobber /> \
								</Button> \
								<Panel id="MarketPollPopupButtons" class="FlowRight">\
									<Button id="MarketPollPopupOK" tabindex="auto" selectionpos="auto" onactivate="ButtonOK();" > \
										<Label text="OK" /> \
									</Button> \
									<Button id="MarketPollPopupCancel" tabindex="auto" selectionpos="auto" onactivate="ButtonCancel();">\
										<Label id="MarketPollPopupCancelLabel" text="Cancel" /> \
									</Button>\
								</Panel>\
							</Panel> \
						</Panel> \
					</Panel> \
				</root>',
	m_data: null,
	m_popup: null,

	Initialize: function( data )
	{
		this.m_data = data;

		this.m_popup = $.CreatePanel( 'Panel', $.TenfootController( $.GetContextPanel() ).AccessMainMenu(), 'MarketPollPopup' );
		$.RegisterEventHandler( 'LoadAsyncComplete', this.m_popup, function( pPanel, bSuccess, eDetail, bPartial )
		{
			//
			// This is to workaround a bug in a previous public client that caused ToPanel to
			// return null.
			//
			//pPanel = ToPanel( pPanel );
			//if ( pPanel.id != SellOrderPopup.m_popup.id )
			//{
			//	return;
			//}
			var strID = pPanel;
			if ( typeof pPanel !== 'string' )
			{
				strID = pPanel.id;
			}
			if ( strID != SellOrderPopup.m_popup.id )
			{
				return;
			}
			$.Msg( "Loaded" );

			if ( !bSuccess )
			{
				SellOrderPopup.Close();
			}
			else
			{
				SellOrderPopup.m_popup.FindChildTraverse( "MarketPollPopupOK" ).SetFocus();
			}
		} );

		$.RegisterEventHandler( 'ButtonOK', this.m_popup, function() { SellOrderPopup.OnButtonOK(); } );
		$.RegisterEventHandler( 'ButtonCancel', this.m_popup, function() { SellOrderPopup.OnButtonCancel(); }  );

		this.SetExitOnClose( false );

		this.m_popup.LoadLayoutFromStringAsync( this.m_strPollPanel, true, false );
	},

	Close: function()
	{
		var popup = this.m_popup;
		var bExitOnClose = popup.BHasClass( "ExitOnClose" );
		popup.AddClass( "Destructing" );
		$.DispatchEvent( "MessageBoxClose", popup );
		popup.DeleteAsync( 0.4 );

		if ( bExitOnClose )
		{
			$.DispatchEventAsync( 0.1, 'NavigateTenfootBack' );
			$.DispatchEventAsync( 0.1, 'TruncateBackStack' );
		}
		this.m_popup.AddClass( "Destructing" );
		this.m_popup = null;
	},

	Show: function()
	{
		this.SetExitOnClose( false );
		this.m_popup.AddClass( "Visible" );
		this.m_popup.RemoveClass( "Error" );
		$.TenfootController( $.GetContextPanel() ).ShowModalDialog( this.m_popup, '' );
		this.m_popup.SetFocus();
	},

	SetDetailText: function( text )
	{
		this.m_popup.FindChildTraverse( "DetailText").text = text;
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
	},

	OnButtonOK: function()
	{
		this.m_popup.RemoveClass( "Complete" );
		this.SetDetailText( 'Placing your sell order...' );
		$.AsyncWebRequest( 'https://steamcommunity.com/market/sellitem/',
			{
				type: 'POST',
				data: this.m_data,
				success: function( data ) { SellOrderPopup.OnComplete( data ); },
				error: function( jqxhr ) {
					$.Msg( "Error: " + jqxhr.responseText );
					var data = JSON.parse( jqxhr.responseText.replace('\u0000','') );
					if ( data && data.message )
					{
						SellOrderPopup.OnFailure( data.message )
					}
				}
			} );
	},

	OnButtonCancel: function()
	{
		this.Close();
	},

	OnComplete: function( data )
	{
		$.DispatchEvent( 'MarketListingCreated', g_rgAsset.appid, g_contextId, g_rgAsset.id );

		var strText = 'Your %s was successfully listed in the Community Market.'.replace( /%s/, g_rgAsset.name );
		if ( data.requires_confirmation )
		{
			var bNeedsEmailConfirmation = data.needs_email_confirmation;
			var bNeedsMobileConfirmation = data.needs_mobile_confirmation;

			if ( bNeedsMobileConfirmation )
			{
				strText = 'In order to list this item on the Community Market, you must verify the listing in your Steam Mobile app. You can verify it by launching the app and navigating to the Confirmations page from the menu.';
			}
			else
			{
				strText = 'In order to list this item on the Community Market, you must complete an additional verification step.  An email has been sent to your address (ending in "%s") with additional instructions.'.replace( /%s/, data.email_domain );
			}
		}
		this.m_popup.AddClass( "Complete" );
		this.SetDetailText( strText );
		this.SetExitOnClose( true );
		this.m_popup.FindChildTraverse( "MarketPollPopupOK").visible = false;
		this.m_popup.FindChildTraverse( "MarketPollPopupCancelLabel").text = 'OK';
		this.m_popup.FindChildTraverse( "MarketPollPopupCancel").SetFocus();
	},

	OnFailure: function( text )
	{
		DisplayError( text );
		this.Close();
	}
}

//
// This gets called in the JS context of the popup panel,
// which is not the same as the JS context of the panel
// that created the popup and where SellOrderPopup is
// interesting.  So don't reference SellOrderPopup
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


function SellItem()
{
	var elError = $( '#SellDialogError' );
	var elYourPrice = $( '#YourPrice' );
	var elBuyerPrice = $( '#BuyerPrice' );
	var elSSAButton = $( '#SSAButton' );
	var price = GetPriceValueAsInt( elYourPrice.text );
	var buyerPrice = GetPriceValueAsInt( elBuyerPrice.text );

	$.GetContextPanel().RemoveClass( 'ErrorTextVisible' );
	elSSAButton.RemoveClass( 'FailedValidation' );
	elYourPrice.RemoveClass( 'FailedValidation' );
	elBuyerPrice.RemoveClass( 'FailedValidation' );

	// If the price entered exceeds the maximum allowed, prevent the sale.
	if ( buyerPrice > g_rgWalletInfo['wallet_trade_max_balance'] || price > g_rgWalletInfo['wallet_trade_max_balance'] )
	{
		elBuyerPrice.AddClass( 'FailedValidation' );
		if ( price > g_rgWalletInfo['wallet_trade_max_balance'] )
		{
			elYourPrice.AddClass( 'FailedValidation' );
		}

		var strError = ' The price entered exceeds the maximum price of %1$s.'
				.replace( '%1$s', v_currencyformat( g_rgWalletInfo['wallet_trade_max_balance'], GetCurrencyCode( g_rgWalletInfo['wallet_currency'] ) ) );
		DisplayError( strError );
		return;
	}

	if ( price <= 0 || buyerPrice <= 0 )
	{
		elYourPrice.AddClass( 'FailedValidation' );
		DisplayError( 'You must enter a valid price.' );
		return;
	}

		if ( !elSSAButton.checked )
	{
		elSSAButton.AddClass( 'FailedValidation' );
		DisplayError( 'You must agree to the terms of the Steam Subscriber Agreement to sell this item.' );
		return;
	}

	var data = {
		sessionid: g_SessionID,
		appid: g_rgAsset.appid,
		contextid: g_contextId,
		assetid: g_rgAsset.id,
		amount: 1,
		price: price };

	SellOrderPopup.Initialize( data );
	SellOrderPopup.Show();
}

function DisplayError( error )
{
	var elError = $( '#SellDialogError' );
	$.GetContextPanel().AddClass( 'ErrorTextVisible' );
	elError.text = error;
}

$.Schedule( 0.0, function()
{
	$.GetContextPanel().RemoveClass( 'ErrorTextVisible' );

	$( '#YourPrice' ).text = g_strPriceFormatPrefix + g_strPriceFormatSuffix;
	$( '#BuyerPrice' ).text = g_strPriceFormatPrefix + g_strPriceFormatSuffix;

	if ( g_strPriceFormatPrefix != '' )
	{
		$( '#YourPrice' ).SetCursorOffset( g_strPriceFormatPrefix.length )
	}
	else
	{
		$( '#YourPrice' ).SetCursorOffset( 0 )
	}

	$( '#YourPrice' ).RaiseChangeEvents( true );
	$( '#BuyerPrice' ).RaiseChangeEvents( true );

	$.RegisterEventHandler( 'TextEntryChanged', $('#YourPrice'),
			function ()
			{
				$( '#BuyerPrice' ).RaiseChangeEvents( false );

				var inputValue = GetPriceValueAsInt( $('#YourPrice' ).text );
				var nAmount = inputValue;

				if ( inputValue > 0 && nAmount == parseInt( nAmount ) )
				{
					// Calculate what the buyer pays
					var publisherFee = typeof g_rgAsset.market_fee != 'undefined' ? g_rgAsset.market_fee : g_rgWalletInfo['wallet_publisher_fee_percent_default'];
					var info = CalculateAmountToSendForDesiredReceivedAmount( nAmount, publisherFee );
					$( '#BuyerPrice' ).text = v_currencyformat( info.amount, GetCurrencyCode( g_rgWalletInfo['wallet_currency'] ) );
				}

				$( '#BuyerPrice' ).RaiseChangeEvents( true );
			}
	);

	$.RegisterEventHandler( 'TextEntryChanged', $('#BuyerPrice'),
			function ()
			{
				$( '#YourPrice' ).RaiseChangeEvents( false );

				var inputValue = GetPriceValueAsInt( $('#BuyerPrice' ).text );
				var nAmount = inputValue;

				if ( inputValue > 0 && nAmount == parseInt( nAmount ) )
				{
					// Calculate what the seller gets
					var publisherFee = typeof g_rgAsset.market_fee != 'undefined' ? g_rgAsset.market_fee : g_rgWalletInfo['wallet_publisher_fee_percent_default'];
					var feeInfo = CalculateFeeAmount( nAmount, publisherFee );
					nAmount = nAmount - feeInfo.fees;
					$( '#YourPrice' ).text = v_currencyformat( nAmount, GetCurrencyCode( g_rgWalletInfo['wallet_currency'] ) );
				}

				$( '#YourPrice' ).RaiseChangeEvents( true );
			}
	);

	$.RegisterEventHandler( 'InputFocusLost', $('#YourPrice'),
			function()
			{
				// Correct the user input
				var inputValue = GetPriceValueAsInt( $('#YourPrice' ).text );
				var nAmount = inputValue;

				if ( inputValue > 0 && nAmount == parseInt( nAmount ) )
				{
					$( '#YourPrice' ).text = v_currencyformat( nAmount, GetCurrencyCode( g_rgWalletInfo['wallet_currency'] ) );
				}
			}
	);

	$.RegisterEventHandler( 'InputFocusLost', $('#BuyerPrice'),
			function()
			{
				// Correct the user input
				var inputValue = GetPriceValueAsInt( $('#BuyerPrice' ).text );
				var nAmount = inputValue;

				if ( inputValue > 0 && nAmount == parseInt( nAmount ) )
				{
					$( '#BuyerPrice' ).text = v_currencyformat( nAmount, GetCurrencyCode( g_rgWalletInfo['wallet_currency'] ) );
				}
			}
	);

	PopulateDetails( g_rgAsset, $( '#RightDetail' ), true, g_rgAppContextData );
});

