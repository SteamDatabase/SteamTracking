
function ValidationMarkFieldBad( elem )
{
	if ( $(elem) )
	{
		if ( $(elem).hasClassName( 'highlight_on_error' ) )
			new Effect.Morph( elem, {style: 'color: #FF9900', duration: 0.5 } );
		else
			new Effect.Morph( elem, {style: 'border-color: #FF9900', duration: 0.5 } )
	}
}

function ValidationMarkFieldOk( elem )
{
	if ( $(elem) )
	{
		if ( $(elem).hasClassName( 'highlight_on_error' ) )
			$(elem).style.color='';
		else
			$(elem).style.borderColor = '';
	}

}

function CBuyOrder( iName, price_total, qty )
{
	this.m_llNameId = g_rgItemNameIds[iName];
	this.m_strMarketHashName = g_rgMarketHashNames[iName];
	this.m_nPriceTotal = price_total;
	this.m_nQuantity = qty;

	this.m_cCreateOrderAttempts = 0;
	this.m_bOrderAjaxComplete = false;
	this.m_bOrderSuccess = false;
	this.m_nOrderId = 0;

	this.m_timePollStart = 0;
	this.m_bOrderCanceling = false;
	this.m_bPollComplete = false;
	this.m_confirmation = 0;
	this.m_confirmationTries = 0;
}

CBuyOrder.prototype.PlaceOrder = function()
{
	if ( this.m_nQuantity == 0 )
	{
		var $elThrobber = $J( '#buy_' + this.m_llNameId + '_status .market_multi_throbber' );
		$elThrobber.hide();

		this.m_bOrderAjaxComplete = true;
		this.m_bOrderSuccess = false;

		return null;
	}

	this.m_cCreateOrderAttempts++;
	var thisOrder = this;

	var first_name = $J('#first_name') ? $J('#first_name').val() : '';
	var last_name = $J('#last_name') ? $J('#last_name').val() : '';
	var billing_address = $J('#billing_address') ? $J('#billing_address').val() : '';
	var billing_address_two = $J('#billing_address_two') ? $J('#billing_address_two').val() : '';
	var billing_country = $J('#billing_country') ? $J('#billing_country').val() : '';
	var billing_city = $J('#billing_city') ? $J('#billing_city').val() : '';
	var billing_state = g_bHasBillingStates ? ( $J('#billing_state_select') ? $J('#billing_state_select').val() : '' ) : '';
	var billing_postal_code = $J('#billing_postal_code') ? $J('#billing_postal_code').val() : '';
	var save_my_address = $J('#save_my_address') ? $J('#save_my_address').prop('checked') : false;

	var ajax = $J.ajax( {
		url: 'https://steamcommunity.com/market/createbuyorder/',
		type: 'POST',
		data: {
			sessionid: g_sessionID,
			currency: g_rgWalletInfo['wallet_currency'],
			appid: g_unAppId,
			market_hash_name: this.m_strMarketHashName,
			price_total: this.m_nPriceTotal,
			quantity: this.m_nQuantity,
			first_name: first_name,
			last_name: last_name,
			billing_address: billing_address,
			billing_address_two: billing_address_two,
			billing_country: billing_country,
			billing_city: billing_city,
			billing_state: billing_state,
			billing_postal_code: billing_postal_code,
			confirmation: this.m_confirmation,
			save_my_address: save_my_address ? '1' : '0'
		},
		crossDomain: true,
		xhrFields: { withCredentials: true }
	} );

	ajax.done( function( data ) {
		thisOrder.m_bOrderAjaxComplete = true;

		if ( thisOrder.m_confirmation )
		{
			new Effect.BlindDown('multibuy_ctn', {duration: 0.25});
			$J('#market_buy_confirmation_required').hide();
			$J('#market_buy_commodity_throbber').show();
      thisOrder.m_confirmation = 0;
		}

		if ( data.success == 1 )
		{
			thisOrder.m_bOrderSuccess = true;
			thisOrder.m_nOrderId = data.buy_orderid;

			// We'll start polling for purchase success when all orders have been created.
		}
		else if ( data.message )
		{
			thisOrder.m_bOrderSuccess = false;
			PurchaseError( thisOrder.m_llNameId, data.message );
		}
		else
		{
			thisOrder.m_bOrderSuccess = false;
			PurchaseError( thisOrder.m_llNameId, 'Sorry! We had trouble hearing back from the Steam servers about your order. Double check whether or not your order has actually been created or filled. If not, then please try again later.' );
		}

		PurchaseNextItem();

	}).fail( function( jqxhr ) {
		var data = $J.parseJSON( jqxhr.responseText );
		if ( data.need_confirmation )
		{
			if ( thisOrder.m_confirmation === 0 )
			{
				new Effect.BlindUp('multibuy_ctn', {duration: 0.25});
				$J('#market_buy_confirmation_required').show();
				$J('#market_buy_commodity_throbber').hide();
			}
			thisOrder.m_confirmation = data.confirmation.confirmation_id;
			if ( thisOrder.m_confirmation )
			{
				window.m_confirmationTimeout = setTimeout(function () { thisOrder.GetConfirmationState(); }, 1500);
			}
		}
		else if ( thisOrder.m_confirmation )
		{
			thisOrder.CancelConfirmation();
		}
		else
		{
			thisOrder.m_bOrderSuccess = false;
			thisOrder.m_bOrderAjaxComplete = true;

			PurchaseError( thisOrder.m_llNameId, 'Sorry! We had trouble hearing back from the Steam servers about your order. Double check whether or not your order has actually been created or filled. If not, then please try again later.' );
			PurchaseNextItem();
		}
	});

	return ajax;
};

CBuyOrder.prototype.CancelConfirmation = function()
{
	this.m_confirmationTries = 0;
	if (window.m_confirmationTimeout) {
		clearTimeout(window.m_confirmationTimeout);
	}
	window.m_confirmationTimeout = 0;
	if (!this.m_bPurchaseSuccess) {
		BuyItemDialog.OnFailure({responseJSON: {message: "There was a problem purchasing your item. Something went wrong while waiting for you to confirm this action. Refresh the page and try again."}});
		this.m_confirmation = 0;
	}
};

CBuyOrder.prototype.GetConfirmationState = function()
{
	this.m_confirmationTries++;
	PurchaseNextItem();
};

CBuyOrder.prototype.Poll = function()
{
	if ( this.m_timePollStart == 0 )
	{
		this.m_timePollStart = $J.now();
	}

	if ( $J.now() > (this.m_timePollStart + 5000) && !this.m_bOrderCanceling )
	{
		this.m_bOrderCanceling = true;

		var thisOrder = this;
		var ajax = $J.ajax( {
			url: 'https://steamcommunity.com/market/cancelbuyorder/',
			type: 'POST',
			data: {
				sessionid: g_sessionID,
				buy_orderid: this.m_nOrderId
			}
		} ).done( function( data ) {
			if ( data.success == 40 )
			{
				// try again quickly, but not right away
				thisOrder.m_bOrderCanceling = false;
				setTimeout( function() { thisOrder.Poll(); }, 200 );
			}
			else
			{
				// call GetBuyOrderStatus right away and finish polling
				setTimeout( function() { thisOrder.Poll(); }, 1 );
			}
		} ).fail( function() {
			// guess we'll keep refreshing until we figure out that it either worked or not
			setTimeout( function() { thisOrder.Poll(); }, 1000 );
		} );

		return ajax;
	}

	var thisOrder = this;
	var ajax = $J.ajax( {
		url: 'https://steamcommunity.com/market/getbuyorderstatus/',
		type: 'GET',
		data: {
			sessionid: g_sessionID,
			buy_orderid: this.m_nOrderId
		}
	} ).done( function ( data ) {
		if ( data.success == 1 && data.purchased )
		{
			thisOrder.m_bPollComplete = true;

			var $elThrobber = $J( '#buy_' + thisOrder.m_llNameId + '_status .market_multi_throbber' );
			$elThrobber.hide();

			var $elSuccess = $J( '#buy_' + thisOrder.m_llNameId + '_success' );
			$elSuccess.show();

			var $elQuantity = $J( '#buy_' + thisOrder.m_llNameId + '_qty' );
			var nNewQtyToPurchase = $elQuantity.val() - data.quantity_remaining;
			if ( isNaN( nNewQtyToPurchase ) || nNewQtyToPurchase < 0 )
			{
				nNewQtyToPurchase = 0;
			}

			$elQuantity.val( nNewQtyToPurchase );

			if ( data.purchase_amount_text )
			{
				$elSuccess.data( 'tooltip-text', data.purchase_amount_text );
				$elSuccess.v_tooltip( {
					location: 'bottom',
					trackMouse: true,
					tooltipClass: 'market_multi_warning_tooltip',
					offsetY: 6,
					fadeSpeed: 0,
					trackMouseCentered: false,
					dataName: 'tooltipText',
					defaultType: 'text'
				} );
			}

			UpdateOrderTotal();
			CheckIfAllPollingComplete();
		}
		else if ( data.success == 1 && !data.active )
		{
			thisOrder.m_bPollComplete = true;

			if ( data.quantity != data.quantity_remaining )
			{
				var $elQuantity = $J( '#buy_' + thisOrder.m_llNameId + '_qty' );
				var nNewQtyToPurchase = $elQuantity.val() - data.quantity;
				if ( isNaN( nNewQtyToPurchase ) || nNewQtyToPurchase < 0 )
				{
					nNewQtyToPurchase = 0;
				}

				$elQuantity.val( nNewQtyToPurchase );

				UpdateOrderTotal();
				PurchaseWarning(
					thisOrder.m_llNameId,
					'Your order was partially filled. We only found sellers for %1$s of the %2$s that you wanted to purchase.'
						.replace( '%1$s', data.quantity - data.quantity_remaining )
						.replace( '%2$s', data.quantity )
				);
			}
			else
			{
				PurchaseWarning( thisOrder.m_llNameId, 'We were not able to find a seller willing to sell the item for the price you\'ve chosen. Try raising your price.' );
			}

			CheckIfAllPollingComplete();
		}
		else
		{
			if ( thisOrder.m_bOrderCanceling && $J.now() > (thisOrder.m_timePollStart + 10000) )
			{
				thisOrder.m_bPollComplete = true;
				PurchaseWarning( thisOrder.m_llNameId, 'We were not able to find a seller willing to sell the item for the price you\'ve chosen. We tried to cancel your buy order, but were unable to do so. You may retry canceling your order from the market home page.' );
				CheckIfAllPollingComplete();
			}
			else
			{
				setTimeout( function () { thisOrder.Poll(); }, 1000 );
			}
		}
	} ).fail( function( jqxhr ) {
		if ( thisOrder.m_bOrderCanceling && $J.now() > (thisOrder.m_timePollStart + 10000) )
		{
			thisOrder.m_bPollComplete = true;
			PurchaseWarning( thisOrder.m_llNameId, 'We were not able to find a seller willing to sell the item for the price you\'ve chosen. We tried to cancel your buy order, but were unable to do so. You may retry canceling your order from the market home page.' );
			CheckIfAllPollingComplete();
		}
		else
		{
			setTimeout( function () { thisOrder.Poll(); }, 1000 );
		}
	} );

	return ajax;
};

function UpdateOrderTotal()
{
	var ret = true;

	var total = 0;
	var totalqty = 0;
	$J('.market_multi_price').each( function( i ) {
		var $elThis = $J(this);
		var $elRow = $elThis.parents('tr').first();
		var currency = GetPriceValueAsInt( $elThis.val() );
		if ( isNaN( currency ) || currency <= 0 )
		{
			ret = false;
			$elThis.css( 'border-color', 'red' );
		}
		else
		{
			$elThis.css( 'border-color', '' );
		}

		var $elQuantity = $J('#buy_' + $elThis.data('nameid') + '_qty');
		var quantity = parseInt( $elQuantity.val() );
		if ( isNaN( quantity ) || quantity < 0 )
		{
			ret = false;
			$elQuantity.css( 'border-color', 'red' );
			$elRow.css( 'opacity', '' );
		}
		else
		{
			$elQuantity.css( 'border-color', '' );
			if ( quantity == 0 )
			{
				$elRow.css( 'opacity', '0.5' );
			}
			else
			{
				totalqty += quantity;
				$elRow.css( 'opacity', '' );
			}
		}

		var price = Math.round( currency * quantity );
		if ( isNaN( price ) || price < 0 || (price == 0 && quantity != 0) )
		{
			ret = false;
		}
		else
		{
			total += price;
		}
	} );

	var $elTotal = $J('#market_multibuy_order_total');
	if ( isNaN(total) || !window.g_rgWalletInfo )
	{
		ret = false;
		$elTotal.html( '--' );
	}
	else
	{
		$elTotal.html( v_currencyformat( total, GetCurrencyCode( g_rgWalletInfo['wallet_currency'] ) ) );
	}

	g_nOrderTotal = total;

	if ( !window.g_rgWalletInfo || isNaN(total) || g_rgWalletInfo['wallet_balance'] < total )
	{
		// show add funds
		$J('#market_multibuy_order_total_container').show();
		$J('#market_multibuy_purchase').hide();
		$J('#market_multibuy_addfunds').show();
		$J('#market_multi_accept_ssa_container').hide();
	}
	else
	{
		if ( totalqty == 0 && (window.opener || g_bInSteamClientOrOverlay) )
		{
			// show close button
			$J( '#market_multibuy_order_total_container' ).hide();
			$J( '#market_multibuy_close' ).show();
			$J( '#market_multibuy_addfunds' ).hide();
			$J( '#market_multibuy_purchase' ).hide();
			$J( '#market_multi_accept_ssa_container' ).hide();
		}
		else
		{
			// show buy button
			$J( '#market_multibuy_order_total_container' ).show();
			$J( '#market_multibuy_close' ).hide();
			$J( '#market_multibuy_addfunds' ).hide();
			$J( '#market_multibuy_purchase' ).show();
			$J( '#market_multi_accept_ssa_container' ).show();
		}
	}

	return ret;
}

function PurchaseWarning( llNameId, sMessage )
{
	PurchaseMessage( llNameId, 'warning', sMessage );
}

function PurchaseError( llNameId, sMessage )
{
	PurchaseMessage( llNameId, 'error', sMessage );
}

function PurchaseMessage( llNameId, sType, sMessage )
{
	var $elThrobber = $J('#buy_' + llNameId + '_status .market_multi_throbber');
	$elThrobber.hide();

	// Show error icon with error message tooltip
	var $elError = $J('#buy_' + llNameId + '_' + sType);
	$elError.show();

	$elError.data( 'tooltip-text', sMessage );
	$elError.v_tooltip( {
		location: 'bottom',
		trackMouse: true,
		tooltipClass: 'market_multi_warning_tooltip',
		offsetY: 6,
		fadeSpeed: 0,
		trackMouseCentered: false,
		dataName: 'tooltipText',
		defaultType:'text'
	} );
}

function AllOrdersCreated()
{
	// We're done placing buy orders. Start polling status.
	for ( var i = 0; i < g_rgItemNameIds.length; i++ )
	{
		if ( g_rgOrders[i].m_bOrderSuccess )
		{
			g_rgOrders[i].Poll();
		}
	}

	// Call this now in case all orders failed and there's nothing to poll
	CheckIfAllPollingComplete();
}

function CheckIfAllPollingComplete()
{
	for ( var i = 0; i < g_rgItemNameIds.length; i++ )
	{
		if ( g_rgOrders[i].m_bOrderSuccess && !g_rgOrders[i].m_bPollComplete )
			return;
	}

	OrderPollingComplete();
}

function OrderPollingComplete()
{
	$J( '.market_multibuy input' ).prop( 'disabled', false );
	g_bPurchaseInProgress = false;
}

function PurchaseNextItem()
{
	if ( g_iNamePurchase >= g_rgItemNameIds.length )
	{
		AllOrdersCreated();
		return;
	}

	if ( g_rgOrders[g_iNamePurchase].m_bOrderAjaxComplete )
	{
		g_iNamePurchase++;
	}

	if ( g_iNamePurchase >= g_rgItemNameIds.length )
	{
		AllOrdersCreated();
		return;
	}

	var ajax = g_rgOrders[g_iNamePurchase].PlaceOrder();
	if ( !ajax )
	{
		g_iNamePurchase++;
		PurchaseNextItem();
	}
}

function MultiBuyStartPurchase()
{
	if ( g_bPurchaseInProgress )
	{
		return;
	}

		if ( !$J('#market_multi_accept_ssa') || !$J('#market_multi_accept_ssa').prop('checked') )
	{
		ShowAlertDialog( 'Cannot place order', 'You must agree to the terms of the Steam Subscriber Agreement to complete this transaction.', 'OK' );
		return;
	}

		if ( g_bRequiresBillingInfo )
	{
		var rgBadFields = {
			first_name : false,
			last_name : false,
			billing_address : false,
			security_code : false,
			billing_city : false,
			billing_state_text : false,
			billing_phone : false,
			billing_postal_code : false,
			billing_state_select_trigger : false
		}

		var errorString = '';
		errorString = BillingAddress_VerifyAddressFields( rgBadFields, g_bHasBillingStates );

		for ( var key in rgBadFields )
		{
			if ( rgBadFields[key] )
				ValidationMarkFieldBad( key );
			else
				ValidationMarkFieldOk( key );
		}

		if ( errorString != '' )
		{
			ShowAlertDialog( 'Cannot place order', errorString, 'OK' );
			return;
		}
	}

	if ( !window.g_rgWalletInfo )
	{
		ShowAlertDialog( 'Cannot place order', 'Please add funds to your Steam wallet before completing this purchase.', 'OK' );
		return;
	}

	if ( !UpdateOrderTotal() )
	{
		ShowAlertDialog( 'Cannot place order', 'Please correct the highlighted invalid inputs and try again.', 'OK' );
		return;
	}

	// prevent duplicate purchase by hiding the purchase & commit sections
	{
		$J('#market_multibuy_billinginfo').slideUp();
		$J('#market_multibuy_commit').slideUp();
	}

	g_rgOrders = [];
	var bAnyError = false;
	for ( var i = 0; i < g_rgItemNameIds.length; i++ )
	{
		g_rgOrders[i] = null;

		// Errors here should not happen since UpdateOrderTotal returned success
		var llNameId = g_rgItemNameIds[i];
		var $elQuantity = $J('#buy_' + llNameId + '_qty');
		var $elPrice = $J('#buy_' + llNameId + '_price');
		if ( !$elQuantity || !$elPrice )
		{
			PurchaseError( g_rgItemNameIds[i], 'There was an invalid input for this item.' );

			bAnyError = true;
			continue;
		}

		var currency = GetPriceValueAsInt( $elPrice.val() );
		var quantity = parseInt( $elQuantity.val() );
		var price = Math.round( currency * quantity );
		if ( isNaN( currency ) || currency <= 0 || isNaN( quantity ) || quantity < 0 || isNaN( price ) || price < 0 || (price == 0 && quantity != 0) )
		{
			PurchaseError( g_rgItemNameIds[i], 'There was an invalid input for this item.' );

			bAnyError = true;
			continue;
		}

		g_rgOrders[i] = new CBuyOrder( i, price, quantity );
	}

	if ( bAnyError )
	{
		return;
	}

	// Disable all inputs and show throbbers
	$J( '.market_multibuy input' ).prop( 'disabled', true );
	$J( '.market_multi_throbber' ).show();
	$J( '.market_multi_status .market_multi_warning' ).hide();

	// Hide any throbbers for 0 qty items (which will be skipped)
	for ( var iOrder = 0; iOrder < g_rgOrders.length; iOrder++ )
	{
		if ( g_rgOrders[iOrder].m_nQuantity <= 0 )
		{
			var $elThrobber = $J( '#buy_' + g_rgOrders[iOrder].m_llNameId + '_status .market_multi_throbber' );
			$elThrobber.hide();
		}
	}

	g_bPurchaseInProgress = true;
	g_iNamePurchase = 0;
	PurchaseNextItem();
}

function MultiBuyAddFunds()
{
	if ( !window.g_rgWalletInfo || isNaN(g_nOrderTotal) || g_rgWalletInfo['wallet_balance'] >= g_nOrderTotal )
	{
		window.location = 'https://store.steampowered.com/steamaccount/addfunds?marketlisting=1&returnurl=' + window.location;
	}
	else
	{
		if ( g_nOrderTotal > g_rgWalletInfo['wallet_max_balance'] && g_nOrderTotal > g_rgWalletInfo['wallet_balance'] )
		{
			ShowAlertDialog(
				'Cannot place order',
				'The total order amount exceeds the maximum wallet balance of %1$s.'
					.replace( '%1$s', v_currencyformat( g_rgWalletInfo['wallet_max_balance'], GetCurrencyCode( g_rgWalletInfo['wallet_currency'] ) ) ),
				'OK'
			);
		}
		else
		{
			window.location = 'https://store.steampowered.com/steamaccount/addfunds?marketlisting=1&minneeded=' + (g_nOrderTotal - g_rgWalletInfo['wallet_balance']) + '&returnurl=' + window.location;
		}
	}
}

$J( function() {
	$J('.market_multi_table .market_multi_warning[data-tooltip-html]').v_tooltip( {
		location: 'bottom',
		trackMouse: true,
		tooltipClass: 'market_multi_warning_tooltip',
		offsetY: 6,
		fadeSpeed: 0,
		trackMouseCentered: false,
		dataName: 'tooltipHtml',
		defaultType: 'html'
	} );
	$J('.market_multi_table .market_multi_warning[data-tooltip-text]').v_tooltip( {
		location: 'bottom',
		trackMouse: true,
		tooltipClass: 'market_multi_warning_tooltip',
		offsetY: 6,
		fadeSpeed: 0,
		trackMouseCentered: false,
		dataName: 'tooltipText',
		defaultType: 'text'
	} );

	$J('.market_multi_price[data-tooltip-text]').v_tooltip( {
		location: 'bottom',
		tooltipClass: 'market_multi_warning_tooltip',
		offsetY: 0,
		disableOnTouchDevice: true,
		dataName: 'tooltipText',
		defaultType: 'text'
	} );


	UpdateOrderTotal();
	$J('.market_multi_price').change( function() { UpdateOrderTotal(); } );
	$J('.market_multi_price').blur( function() {
		var sWalletCurrencyCode = GetCurrencyCode( g_rgWalletInfo['wallet_currency'] );
		var currency = GetPriceValueAsInt( $J(this).val() );
		if ( !isNaN( currency ) && currency > 0 )
		{
			$J( this ).val( v_currencyformat( currency, sWalletCurrencyCode ) );
		}
	} );
	$J('.market_multi_quantity').change( function() { UpdateOrderTotal(); } );

	if ( g_bMarketAllowed )
	{
		$J( '#market_multibuy_purchase' ).click( function ()
		{
			MultiBuyStartPurchase();
		} );
		$J( '#market_multibuy_addfunds' ).click( function ()
		{
			MultiBuyAddFunds();
		} );
	}
	else
	{
		DisableMarketButtons();
	}

	// If we're not on a touch device, select the price input for the first non-zero quantity item
	if ( (!("maxTouchPoints" in Navigator) || Navigator.maxTouchPoints == 0) && window.g_rgWalletInfo && g_rgWalletInfo['wallet_currency'] )
	{
		$J('.market_multi_price').each( function( i ) {
			var $elThis = $J( this );

			var currencyCode = GetCurrencyCode( g_rgWalletInfo['wallet_currency'] );
			var $elQuantity = $J( '#buy_' + $elThis.data( 'nameid' ) + '_qty' );
			var quantity = parseInt( $elQuantity.val() );
			if ( !isNaN( quantity ) && quantity > 0 )
			{
				if ( $elThis[0].setSelectionRange )
				{
					$elThis.focus();

					if ( IsCurrencySymbolBeforeValue( currencyCode ) )
					{
						// move the caret to the end
						var length = $elThis.val().length;
						$elThis[0].setSelectionRange( length, length );
					}
					else
					{
						// caret to the beginning
						$elThis[0].setSelectionRange( 0, 0 );
					}
				}

				return false;
			}
		} );
	}
} );


