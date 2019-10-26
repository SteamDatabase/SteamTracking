
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

	var ajax = $J.ajax( {
		url: 'https://steamcommunity.com/market/createbuyorder/',
		type: 'POST',
		data: {
			sessionid: g_sessionID,
			currency: g_rgWalletInfo['wallet_currency'],
			appid: g_unAppId,
			market_hash_name: this.m_strMarketHashName,
			price_total: this.m_nPriceTotal,
			quantity: this.m_nQuantity
		},
		crossDomain: true,
		xhrFields: { withCredentials: true }
	} );

	ajax.done( function( data ) {
		thisOrder.m_bOrderAjaxComplete = true;

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
	}).fail( function( jqxhr ) {
		var data = $J.parseJSON( jqxhr.responseText );
		thisOrder.m_bOrderSuccess = false;
		thisOrder.m_bOrderAjaxComplete = true;

		PurchaseError( thisOrder.m_llNameId, 'Sorry! We had trouble hearing back from the Steam servers about your order. Double check whether or not your order has actually been created or filled. If not, then please try again later.' );
	});

	return ajax;
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
			var nNewQtyToPurchase = $elQuantity.val() - data.quantity;
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

	if ( g_rgOrders[g_iNamePurchase].m_cCreateOrderAttempts >= 5 )
	{
		g_iNamePurchase++;
	}

	if ( g_iNamePurchase >= g_rgItemNameIds.length )
	{
		AllOrdersCreated();
		return;
	}

	var ajax = g_rgOrders[g_iNamePurchase].PlaceOrder();
	if ( ajax )
	{
		ajax.always( function ()
		{
			g_iNamePurchase++;
			PurchaseNextItem();
		} );
	}
	else
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


