
function CMarketSellItem( iName, unAppId, ulContextId, ulAssetId, nQuantity, nPriceTotal )
{
	this.m_llNameId = g_rgItemNameIds[iName];
	this.m_strMarketHashName = g_rgMarketHashNames[iName];
	this.m_unAppId = unAppId;
	this.m_ulContextId = ulContextId;
	this.m_ulAssetId = ulAssetId;
	this.m_nQuantity = nQuantity;
	this.m_nPriceTotal = nPriceTotal;

	this.m_cCreateOrderAttempts = 0;
	this.m_bOrderAjaxComplete = false;
	this.m_bOrderSuccess = false;

	this.m_bRequiresConfirmation = false;
	this.m_bRequiresMobileConf = false;
	this.m_bRequiresEmailConf = false;
	this.m_strEmailDomain = '';
}

CMarketSellItem.prototype.PlaceOrder = function()
{
	this.m_cCreateOrderAttempts++;

	if ( this.m_nQuantity == 0 )
	{
		var $elThrobber = $J( '#sell_' + this.m_llNameId + '_status .market_multi_throbber' );
		$elThrobber.hide();

		this.m_bOrderAjaxComplete = true;
		this.m_bOrderSuccess = false;

		return null;
	}

	var thisOrder = this;

	var ajax = $J.ajax( {
		url: 'https://steamcommunity.com/market/sellitem/',
		type: 'POST',
		data: {
			sessionid: g_sessionID,
			appid: this.m_unAppId,
			contextid: this.m_ulContextId,
			assetid: this.m_ulAssetId,
			amount: this.m_nQuantity,
			price: this.m_nPriceTotal
		},
		crossDomain: true,
		xhrFields: { withCredentials: true }
	} );

	ajax.done( function( data ) {
		thisOrder.m_bOrderAjaxComplete = true;

		if ( data.success )
		{
			thisOrder.m_bOrderSuccess = true;

			if ( data.requires_confirmation )
			{
				thisOrder.m_bRequiresConfirmation = true;

				if ( data.needs_mobile_confirmation )
				{
					thisOrder.m_bRequiresMobileConf = true;
				}
				else if ( data.needs_email_confirmation )
				{
					thisOrder.m_bRequiresEmailConf = true;
					thisOrder.m_strEmailDomain = data.email_domain;
				}
			}
		}
		else if ( data.message )
		{
			thisOrder.m_bOrderSuccess = false;
			SellError( thisOrder.m_llNameId, data.message );
		}
		else
		{
			thisOrder.m_bOrderSuccess = false;
			SellError( thisOrder.m_llNameId, 'There was a problem listing your item. Refresh the page and try again.' );
		}
	}).fail( function( jqxhr ) {
		thisOrder.m_bOrderSuccess = false;
		thisOrder.m_bOrderAjaxComplete = true;

		SellError( thisOrder.m_llNameId, 'There was a problem listing your item. Refresh the page and try again.' );
	});

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
		var llNameId = $elRow.data('nameid');

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

		var $elQuantity = $J('#sell_' + llNameId + '_qty');
		var $elQuantityOwned = $J('#sell_' + llNameId + '_qty_owned');
		var quantity = parseInt( $elQuantity.val() );
		if ( isNaN( quantity ) || quantity < 0 || quantity > $elQuantityOwned.text() )
		{
			$elQuantity.css( 'border-color', 'red' );
			$elRow.css( 'opacity', '' );
			ret = false;
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
			if ( $elThis.hasClass( 'market_multi_price_recv' ) )
			{
				total += price;
			}
		}
	} );

	var $elTotal = $J('#market_multisell_total');
	if ( isNaN(total) || !window.g_rgWalletInfo )
	{
		ret = false;
		$elTotal.html( '--' );
	}
	else
	{
		$elTotal.html( v_currencyformat( total, GetCurrencyCode( g_rgWalletInfo['wallet_currency'] ) ) );
	}

	if ( totalqty == 0 && (window.opener || g_bInSteamClientOrOverlay) )
	{
		$J( '#market_multisell_close' ).show();
		$J( '#market_multisell_createlistings' ).hide();
		$J( '#market_multisell_total_container' ).hide();
	}
	else
	{
		$J( '#market_multisell_close' ).hide();
		$J( '#market_multisell_createlistings' ).show();
		$J( '#market_multisell_total_container' ).show();
	}

	return ret;
}

function SellWarning( llNameId, sMessage )
{
	SellMessage( llNameId, 'warning', sMessage );
}

function SellError( llNameId, sMessage )
{
	SellMessage( llNameId, 'error', sMessage );
}

function SellMessage( llNameId, sType, sMessage )
{
	var $elThrobber = $J('#sell_' + llNameId + '_status .market_multi_throbber');
	$elThrobber.hide();

	// Show error icon with error message tooltip
	var $elError = $J('#sell_' + llNameId + '_' + sType);
	$elError.show();

	// Append on multiple errors. We create N listings, so we need to support error display for any N of them.
	if ( $elError.data( 'tooltip-html' ) )
	{
		var cPreExistingErrors = parseInt( $elError.data( 'num-errors' ) );
		var strLabeledNewError = 'Error #%1$s: '.replace( '%1$s', cPreExistingErrors + 1 ) + sMessage;

		if ( cPreExistingErrors == 1 )
		{
			var strOldError = $elError.data( 'tooltip-html' );
			var strLabeledOldError = 'Error #%1$s: '.replace( '%1$s', 1 ) + strOldError;

			$elError.data( 'tooltip-html', strLabeledOldError + '<br><br>' + strLabeledNewError );
		}
		else
		{
			$elError.data( 'tooltip-html', $elError.data( 'tooltip-html' ) + '<br><br>' + strLabeledNewError );
		}

		$elError.data( 'num-errors', parseInt( $elError.data( 'num-errors' ) ) + 1 );
	}
	else
	{
		$elError.data( 'tooltip-html', sMessage );
		$elError.data( 'num-errors', 1 );
		$elError.v_tooltip( {
			location: 'bottom',
			trackMouse: true,
			tooltipClass: 'market_multi_warning_tooltip',
			offsetY: 6,
			fadeSpeed: 0,
			trackMouseCentered: false,
			dataName: 'tooltipHtml',
			defaultType: 'html'
		} );
	}
}

function PriceRecvChanged( $elThis )
{
	var inputValue = GetPriceValueAsInt( $elThis.val() );
	var nAmount = inputValue;

	if ( inputValue > 0 && nAmount == parseInt( nAmount ) )
	{
		var $elRow = $elThis.parents('tr').first();
		var llNameId = $elRow.data('nameid');
		var nAppId = $elRow.data('appid');
		var ulContextId = $elRow.data('contextid');
		var ulAssetId = $elRow.data('assetid');
		var description = g_rgAssets[nAppId][ulContextId][ulAssetId].description;

		// Calculate what the buyer pays
		var ppct = parseFloat( g_rgWalletInfo[ 'wallet_publisher_fee_percent_default' ] ?? 0.10 );
		var spct = parseFloat( g_rgWalletInfo[ 'wallet_fee_percent' ] ?? 0.05 );
		var nTotalUnitPrice = GetTotalWithFees( nAmount, ppct, spct, g_rgWalletInfo );
		$J('#sell_' + llNameId + '_price_paid').val( v_currencyformat( nTotalUnitPrice, GetCurrencyCode( g_rgWalletInfo['wallet_currency'] ) ) );

		UpdateOrderTotal()
	}
}

function PricePaidChanged( $elThis )
{
	var inputValue = GetPriceValueAsInt( $elThis.val() );
	var nAmount = inputValue;

	if ( inputValue > 0 && nAmount == parseInt( nAmount ) )
	{
		var $elRow = $elThis.parents('tr').first();
		var llNameId = $elRow.data('nameid');
		var nAppId = $elRow.data('appid');
		var ulContextId = $elRow.data('contextid');
		var ulAssetId = $elRow.data('assetid');
		var description = g_rgAssets[nAppId][ulContextId][ulAssetId].description;

		// Calculate what the seller gets
		var nItemPrice = GetItemPriceFromTotal( nAmount, g_rgWalletInfo );
		var $elRecv = $J('#sell_' + llNameId + '_price_recv');
		$elRecv.val( v_currencyformat( nItemPrice, GetCurrencyCode( g_rgWalletInfo['wallet_currency'] ) ) );

		UpdateOrderTotal();
	}
}

function AllOrdersCreated()
{
	// Count up the errors and successes
	var nListings = 0;
	var nSuccess = 0;
	var nFailure = 0;
	var nEmailConf = 0;
	var strEmailDomain = '';
	var nMobileConf = 0;
	for ( var iName = 0; iName < g_rgOrders.length; iName++ )
	{
		for ( var iOrder = 0; iOrder < g_rgOrders[iName].length; iOrder++ )
		{
			if ( g_rgOrders[iName][iOrder].m_nQuantity <= 0 )
			{
				continue;
			}

			nListings++;
			if ( g_rgOrders[iName][iOrder].m_bOrderSuccess )
			{
				nSuccess++;
				if ( g_rgOrders[iName][iOrder].m_bRequiresMobileConf )
				{
					nMobileConf++;
				}
				else if ( g_rgOrders[iName][iOrder].m_bRequiresEmailConf )
				{
					nEmailConf++;
					strEmailDomain = g_rgOrders[iName][iOrder].m_strEmailDomain;
				}
			}
			else
			{
				nFailure++;
			}
		}
	}

	var htmlMessage = '';
	if ( nSuccess > 0 )
	{
		htmlMessage += '<p>' + 'We have created %1$s new listings on the Community Market.'.replace( '%1$s', nSuccess );
	}

	if ( nFailure > 0 )
	{
		if ( nFailure == nListings )
		{
			htmlMessage += '<p>' + 'We tried to create %1$s listings, but all of them failed. You may view the errors after closing this dialog.'.replace( '%1$s', nListings );
		}
		else
		{
			htmlMessage += '<p>' + 'We tried to create %1$s listings, but %2$s of them failed. You may view the errors after closing this dialog.'.replace( '%1$s', nListings ).replace( '%2$s', nFailure );
		}
	}

	if ( nEmailConf )
	{
		htmlMessage += '<p>' + '%1$s of the new listings require email confirmation. An email has been sent to your address (ending in "%2$s") with additional instructions.'.replace( '%1$s', nEmailConf ).replace( '%2$s', strEmailDomain );
	}

	if ( nMobileConf )
	{
		htmlMessage += '<p>' + '<%1$s>%2$s of the new listings require confirmation in your Steam Mobile app.</%3$s><%4$s>You can verify your listings by launching the app and navigating to the Confirmations page from the menu.'
				.replace( '%1$s', 'span style="color: #6f9fc8; font-size: 125%"' )
				.replace( '%2$s', nMobileConf )
				.replace( '%3$s', 'span' )
				.replace( '%4$s', 'p' );
	}

	$J( '.market_multisell input' ).prop( 'disabled', false );
	$J( '.market_multi_throbber' ).hide();
	g_bSellInProgress = false;

	ShowAlertDialog( 'Create Listings', htmlMessage ).done( function() {
		// For each successful order, update our inventory to indicate we no longer have the item
		// Also update our quantity values on the page
		for ( var iName = 0; iName < g_rgOrders.length; iName++ )
		{
			var llNameId = g_rgItemNameIds[iName];
			var $elQuantity = $J('#sell_' + llNameId + '_qty');
			var $elQuantityOwned = $J('#sell_' + llNameId + '_qty_owned');

			for ( var iOrder = 0; iOrder < g_rgOrders[iName].length; iOrder++ )
			{
				if ( g_rgOrders[iName][iOrder].m_bOrderSuccess )
				{
					var inventory = UserYou.getInventory( g_rgOrders[iName][iOrder].m_unAppId, g_rgOrders[iName][iOrder].m_ulContextId );
					var asset = inventory.m_rgAssets[g_rgOrders[iName][iOrder].m_ulAssetId];
					asset.amount -= g_rgOrders[iName][iOrder].m_nQuantity;

					var nNewQtyToSell = $elQuantity.val() - g_rgOrders[iName][iOrder].m_nQuantity
					if ( isNaN( nNewQtyToSell ) || nNewQtyToSell < 0 )
					{
						nNewQtyToSell = 0;
					}

					$elQuantity.val( nNewQtyToSell );

					var nNewQtyOwned = parseInt( $elQuantityOwned.text() ) - g_rgOrders[iName][iOrder].m_nQuantity;
					if ( isNaN( nNewQtyOwned ) || nNewQtyOwned < 0 )
					{
						nNewQtyOwned = 0;
					}

					$elQuantityOwned.text( nNewQtyOwned );
				}
			}
		}

		UpdateOrderTotal();
	});
}

function SellNextItem()
{
	// Find the first one with no attempts
	for ( var iName = 0; iName < g_rgOrders.length; iName++ )
	{
		for ( var iOrder = 0; iOrder < g_rgOrders[iName].length; iOrder++ )
		{
			if ( g_rgOrders[iName][iOrder].m_cCreateOrderAttempts == 0 )
			{
				var ajax = g_rgOrders[iName][iOrder].PlaceOrder();
				if ( ajax )
				{
					ajax.always( function ()
					{
						SellNextItem();
					} );
				}
				else
				{
					SellNextItem();
				}

				return;
			}
		}
	}

	// Looks like we're done
	AllOrdersCreated();
}

function MultiSellCreateListings()
{
	if ( g_bSellInProgress )
	{
		return;
	}

		if ( !$J('#market_multi_accept_ssa') || !$J('#market_multi_accept_ssa').prop('checked') )
	{
		ShowAlertDialog( 'Cannot place order', 'You must agree to the terms of the Steam Subscriber Agreement to complete this transaction.' );
		return;
	}

	if ( !window.g_rgWalletInfo )
	{
		ShowAlertDialog( 'Cannot place order', 'Please add funds to your Steam wallet before completing this purchase.' );
		return;
	}

	if ( !UpdateOrderTotal() )
	{
		ShowAlertDialog( 'Cannot place order', 'Please correct the highlighted invalid inputs and try again.' );
		return;
	}

	g_rgOrders = [];
	var bAnyError = false;
	var bAnyListings = false;
	for ( var i = 0; i < g_rgItemNameIds.length; i++ )
	{
		g_rgOrders[i] = [];

		// Errors here should not happen since UpdateOrderTotal returned success
		var llNameId = g_rgItemNameIds[i];
		var $elQuantity = $J('#sell_' + llNameId + '_qty');
		var $elPrice = $J('#sell_' + llNameId + '_price_recv');
		if ( !$elQuantity || !$elPrice )
		{
			SellError( g_rgItemNameIds[i], 'There was an invalid input for this item.' );

			bAnyError = true;
			continue;
		}

		var currency = GetPriceValueAsInt( $elPrice.val() );
		var quantity = parseInt( $elQuantity.val() );
		var price = Math.round( currency * quantity );
		if ( isNaN( currency ) || currency <= 0 || isNaN( quantity ) || quantity < 0 || isNaN( price ) || price < 0 || (price == 0 && quantity != 0) )
		{
			SellError( g_rgItemNameIds[i], 'There was an invalid input for this item.' );

			bAnyError = true;
			continue;
		}

		if ( quantity == 0 )
		{
			g_rgOrders[i].push( new CMarketSellItem( i, g_unAppId, g_ulContextId, 0, 0, 0 ) );
			continue;
		}

		// Create as many sell listings as required for this item type
		var inventory = UserYou.getInventory( g_unAppId, g_ulContextId );
		for ( var assetid in inventory.m_rgAssets )
		{
			if ( !inventory.m_rgAssets.hasOwnProperty( assetid ) )
			{
				continue;
			}

			var asset = inventory.m_rgAssets[assetid];
			var assetAmount = parseInt( asset.amount );
			if ( assetAmount <= 0 )
			{
				continue;
			}

			var strDescriptionKey = asset.classid;
			if ( asset.instanceid && asset.instanceid != '0' )
				strDescriptionKey += '_' + asset.instanceid;

			var description = inventory.m_rgDescriptions[strDescriptionKey];

			var strMarketHashName = g_rgMarketHashNames[i];
			if ( strMarketHashName == GetMarketHashName( description ) && description.marketable )
			{
				var quantityThisStack = quantity;
				if ( quantityThisStack > assetAmount )
				{
					quantityThisStack = assetAmount;
				}

				g_rgOrders[i].push( new CMarketSellItem( i, g_unAppId, g_ulContextId, asset.assetid, quantityThisStack, currency ) );
				bAnyListings = true;

				quantity -= quantityThisStack;
				if ( quantity <= 0 )
				{
					break;
				}
			}
		}
	}

	if ( bAnyError )
	{
		return;
	}

	if ( !bAnyListings )
	{
		g_rgOrders = [];
		ShowAlertDialog( 'Cannot place order', 'Nothing to do! All quantities are zero, so no listings have been created.' );
		return;
	}

	// Disable all inputs and show throbbers
	$J( '.market_multisell input' ).prop( 'disabled', true );
	$J( '.market_multi_throbber' ).show();
	$J( '.market_multi_status .market_multi_warning' ).hide();

	// Hide any throbbers for 0 qty items (which will be skipped)
	for ( var iName = 0; iName < g_rgOrders.length; iName++ )
	{
		if ( g_rgOrders[iName].length == 1 && g_rgOrders[iName][0].m_nQuantity <= 0 )
		{
			var $elThrobber = $J( '#sell_' + g_rgOrders[iName][0].m_llNameId + '_status .market_multi_throbber' );
			$elThrobber.hide();
		}
	}

	g_bSellInProgress = true;
	SellNextItem();
}

$J( function() {
	UserYou.LoadContexts( g_rgAppContextData );

	var inventory = UserYou.getInventory( g_unAppId, g_ulContextId );
	inventory.LoadCompleteInventory().always( function() {
		$J( '#market_multisell_loading' ).hide();
	} ).done( function() {
		// Find out how much we own of each item to be sold
		var rgQuantities = [];
		var rgNonMarketQuantities = [];
		for ( var i = 0; i < g_rgItemNameIds.length; i++ )
		{
			rgQuantities[i] = 0;
			rgNonMarketQuantities[i] = 0;
		}

		for ( var assetid in inventory.m_rgAssets )
		{
			if ( !inventory.m_rgAssets.hasOwnProperty( assetid ) )
			{
				continue;
			}

			var asset = inventory.m_rgAssets[assetid];
			var assetAmount = parseInt( asset.amount );
			if ( assetAmount <= 0 )
			{
				continue;
			}

			var strDescriptionKey = asset.classid;
			if ( asset.instanceid && asset.instanceid != '0' )
				strDescriptionKey += '_' + asset.instanceid;

			var description = inventory.m_rgDescriptions[strDescriptionKey];

			for ( var i = 0; i < g_rgItemNameIds.length; i++ )
			{
				var strMarketHashName = g_rgMarketHashNames[i];

				if ( strMarketHashName == GetMarketHashName( description ) )
				{
					if ( description.marketable )
					{
						rgQuantities[i] += parseInt( asset.amount );
					}
					else
					{
						rgNonMarketQuantities[i] += parseInt( asset.amount );
					}
				}
			}
		}

		for ( var i = 0; i < g_rgItemNameIds.length; i++ )
		{
			var nQuantity = rgQuantities[i];
			var nNonMarketQuantity = rgNonMarketQuantities[i];
			var llNameId = g_rgItemNameIds[i];
			var $elQuantity = $J('#sell_' + llNameId + '_qty');
			var $elQuantityOwned = $J('#sell_' + llNameId + '_qty_owned');
			var $elQuantityUnmarketable = $J('#sell_' + llNameId + '_qty_unmarketable_warning');

			if ( $elQuantity.val() > nQuantity )
			{
				$elQuantity.val( nQuantity );
			}

			$elQuantityOwned.text( nQuantity );

			var strTooltipContent = $elQuantityUnmarketable.data( 'tooltip-text' );
			strTooltipContent = strTooltipContent.replace( '%1$s', nNonMarketQuantity );
			$elQuantityUnmarketable.data( 'tooltip-text', strTooltipContent );
			if ( nNonMarketQuantity > 0 )
			{
				$elQuantityUnmarketable.show();
			}
		}

		UpdateOrderTotal();

		$J( '.market_multi_table .market_multi_warning[data-tooltip-html]' ).v_tooltip( {
			location: 'bottom',
			trackMouse: true,
			tooltipClass: 'market_multi_warning_tooltip',
			offsetY: 6,
			fadeSpeed: 0,
			trackMouseCentered: false,
			dataName: 'tooltipHtml',
			defaultType: 'html'
		} );
		$J( '.market_multi_table .market_multi_warning[data-tooltip-text]' ).v_tooltip( {
			location: 'bottom',
			trackMouse: true,
			tooltipClass: 'market_multi_warning_tooltip',
			offsetY: 6,
			fadeSpeed: 0,
			trackMouseCentered: false,
			dataName: 'tooltipText',
			defaultType: 'text'
		} );

		$J('.market_multi_price').v_tooltip( {
			location: 'bottom',
			tooltipClass: 'market_multi_warning_tooltip',
			offsetY: 0,
			disableOnTouchDevice: true,
			dataName: 'tooltipText',
			defaultType: 'text'
		} );

		$J( '#market_mutlisell_maincontent' ).show();

		// If we're not on a touch device, select the price input for the first non-zero quantity item
		if ( (!("maxTouchPoints" in Navigator) || Navigator.maxTouchPoints == 0) && window.g_rgWalletInfo && g_rgWalletInfo['wallet_currency'] )
		{
			$J('.market_multi_price_recv').each( function( i ) {
				var $elThis = $J( this );
				var $elRow = $elThis.parents( 'tr' ).first();

				var currencyCode = GetCurrencyCode( g_rgWalletInfo['wallet_currency'] );
				var $elQuantity = $J( '#sell_' + $elRow.data( 'nameid' ) + '_qty' );
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
	} ).fail( function() {
		var $elMessage = $J( '#market_multisell_errmsg' );
		$elMessage.text( 'Your inventory is currently unavailable. Please try again later.' );
		$elMessage.show();
	} );

	// Update all "You receive" values from "Buyer pays"
	// The "Buyer pays" values were the only ones filled in.
	$J('.market_multi_price_paid').each( function() {
		PricePaidChanged( $J(this) );
	} );

	$J('.market_multi_price_paid').keyup( function() { PricePaidChanged( $J(this) ); } );
	$J('.market_multi_price_recv').keyup( function() { PriceRecvChanged( $J(this) ); } );
	$J('.market_multi_price_paid').blur( function() {
		var sWalletCurrencyCode = GetCurrencyCode( g_rgWalletInfo['wallet_currency'] );
		var currency = GetPriceValueAsInt( $J(this).val() );
		if ( !isNaN( currency ) && currency > 0 )
		{
			$J( this ).val( v_currencyformat( currency, sWalletCurrencyCode ) );

			var strEnteredAmount = $J(this).val();
			PricePaidChanged( $J(this) );

			// Verify we haven't just entered an impossible amount (like $0.22)
			var $elRow = $J(this).parents('tr').first();
			var llNameId = $elRow.data('nameid');
			var $elRecv = $J('#sell_' + llNameId + '_price_recv');
			PriceRecvChanged( $elRecv );

			// Tell the user we've changed their input when applicable
			if ( $J(this).val() != strEnteredAmount )
			{
				ShowAlertDialog(
					'Warning',
					'We have changed your input from %1$s to %2$s since the amount you would receive is %3$s in both cases.'
						.replace( '%1$s', strEnteredAmount )
						.replace( '%2$s', $J(this).val() )
						.replace( '%3$s', $elRecv.val() )
				);
			}
		}
	} );
	$J('.market_multi_price_recv').blur( function() {
		var sWalletCurrencyCode = GetCurrencyCode( g_rgWalletInfo['wallet_currency'] );
		var currency = GetPriceValueAsInt( $J(this).val() );
		if ( !isNaN( currency ) && currency > 0 )
		{
			$J( this ).val( v_currencyformat( currency, sWalletCurrencyCode ) );
			PriceRecvChanged( $J(this) );
		}
	} );
	$J('.market_multi_quantity').change( function() { UpdateOrderTotal(); } );

	if ( g_bMarketAllowed )
	{
		$J( '#market_multisell_createlistings' ).click( function ()
		{
			MultiSellCreateListings();
		} );
	}
	else
	{
		DisableMarketButtons();
	}
} );

