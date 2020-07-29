
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

function BIsTwoFactorEnabled()
{
	var bEnabled = $J( document.body).hasClass( "two_factor_sale_enabled" );
	return bEnabled;
}

RemoveListingDialog = {
	m_bOKClicked: false,
	m_bInitialized: false,

	m_oListingOriginalRow: null,
	m_ulListingId: false,
	m_bAwaitingConfirmation: false,
	m_fnDocumentKeyHandler: null,
	m_modal: null,
	
	Initialize: function() {
		$('market_removelisting_dialog_accept').observe( 'click', this.OnAccept.bindAsEventListener(this) );
		$('market_removelisting_dialog_cancelbtn').observe( 'click', this.OnCancel.bindAsEventListener(this) );
	},

	Show: function ( sElementPrefix, listingid, item, bAwaitingConfirmation ) {
		if ( !this.m_bInitialized )
			this.Initialize();

		this.m_bOKClicked = false;
		this.m_oListingOriginalRow = $(sElementPrefix + '_' + listingid);
		this.m_ulListingId = listingid;
		this.m_bAwaitingConfirmation = bAwaitingConfirmation;

		if ( bAwaitingConfirmation )
		{
			$J('#market_removelisting_dialog_title').text( 'Cancel listing' );
			$J('#market_removelisting_dialog_confirmation_text').html( 'This listing is awaiting your confirmation and has not yet been posted on the Community Market.<br><br>Would you like to cancel your listing for <span id="market_removelisting_dialog_itemname"></span>?' );
			$J('#market_removelisting_dialog_accept > span').text( 'Yes, cancel this listing' );
		}
		else
		{
			$J('#market_removelisting_dialog_title').text( 'Remove a listing' );
			$J('#market_removelisting_dialog_confirmation_text').html( 'Would you like to remove the listing for <span id="market_removelisting_dialog_itemname"></span> and return the item to your inventory?' );
			$J('#market_removelisting_dialog_accept > span').text( 'Yes, remove this listing' );
		}

		$('market_removelisting_dialog_error').hide();
		$('market_removelisting_dialog_accept').show();
		$('market_removelisting_dialog_accept').setOpacity('1');
		$('market_removelisting_dialog_cancelbtn').show();
		$('market_removelisting_dialog_cancelbtn').setOpacity('1');
		$('market_removelisting_dialog_accept_throbber').hide();

		var oItemName = Element.clone( $(sElementPrefix + '_' + listingid + '_name'), true );
		$('market_removelisting_dialog_itemname').innerHTML = '';
		$('market_removelisting_dialog_itemname').appendChild( oItemName );

		this.m_fnDocumentKeyHandler = this.OnDocumentKeyPress.bindAsEventListener( this );
		$(document).observe( 'keydown', this.m_fnDocumentKeyHandler );

		var _this = this;
		this.m_modal = new CModal( $J('#market_removelisting_dialog' ) );
		this.m_modal.GetContent().find('.newmodal_close' ).click( function() { _this.Dismiss() } );
		this.m_modal.Show();
		$('market_removelisting_dialog').focus();
	},

	DisplayError: function( error ) {
		$('market_removelisting_dialog_error').show();
		$('market_removelisting_dialog_error').update( error );
		$('market_removelisting_dialog_error').style.color = '#ffffff';
		new Effect.Morph( $('market_removelisting_dialog_error'), { style: {color: '#ff0000'}, duration: 0.25 } );
	},

	Dismiss: function() {
		$(document).stopObserving( 'keydown', this.m_fnDocumentKeyHandler );
		if ( this.m_modal )
		{
			this.m_modal.Dismiss();
			this.m_modal = null;
		}
	},

	OnAccept: function( event ) {
		event.stop();

		if ( this.m_bOKClicked )
		{
			return;
		}

		this.m_bOKClicked = true;
		$('market_removelisting_dialog_error').hide();

		$('market_removelisting_dialog_accept_throbber').clonePosition( $('market_removelisting_dialog_accept') );
		$('market_removelisting_dialog_accept').fade({ duration: 0.25 });
		$('market_removelisting_dialog_cancelbtn').fade({ duration: 0.25 });
		$('market_removelisting_dialog_accept_throbber').show();
		$('market_removelisting_dialog_accept_throbber').fade({ duration: 0.25, from: 0, to: 1 });

		var listingid = this.m_ulListingId;
		new Ajax.Request( 'https://steamcommunity.com/market/removelisting/' + listingid, {
			method: 'post',
			parameters: {
				sessionid: g_sessionID
			},
			onSuccess: function( transport ) { RemoveListingDialog.OnSuccess( transport ); },
			onFailure: function( transport ) { RemoveListingDialog.OnFailure( transport ); }
		} );
	},

	OnCancel: function( event ) {
		this.Dismiss();
		event.stop();
	},

	OnSuccessEffects: function() {
		// Decrement listing counters
		if ( this.m_bAwaitingConfirmation )
		{
			if ( $( 'my_market_listingstoconfirm_number' ) )
				$( 'my_market_listingstoconfirm_number' ).update( parseInt( $( 'my_market_listingstoconfirm_number' ).innerHTML ) - 1 );
		}
		else
		{
			if ( $( 'my_market_activelistings_number' ) )
				$( 'my_market_activelistings_number' ).update( parseInt( $( 'my_market_activelistings_number' ).innerHTML ) - 1 );
			if ( $( 'my_market_selllistings_number' ) )
				$( 'my_market_selllistings_number' ).update( parseInt( $( 'my_market_selllistings_number' ).innerHTML ) - 1 );
		}

		// Remove any listing rows
		$$('.listing_' + this.m_ulListingId).each( function( oListingRow ) {
			oListingRow.remove();
		} );

		var queue = Effect.Queues.get('global');
		queue.each(function(effect) { effect.cancel(); });

		$('market_removelisting_dialog_accept').hide();
		$('market_removelisting_dialog_cancelbtn').hide();
		$('market_removelisting_dialog_accept_throbber').hide();
		
		this.Dismiss();
	},

	OnSuccess: function( transport ) {
		if ( transport.responseJSON )
		{
			this.OnSuccessEffects();
		}
		else
		{
			this.OnFailureEffects();
			this.DisplayError( 'There was a problem removing your listing. Refresh the page and try again.' );
		}
	},

	OnFailureEffects: function() {
		this.m_bOKClicked = false;

		var queue = Effect.Queues.get('global');
		queue.each(function(effect) { effect.cancel(); });

		$('market_removelisting_dialog_accept').show();
		$('market_removelisting_dialog_accept').setOpacity('0');
		$('market_removelisting_dialog_accept').fade({ duration: 0.25, from: 0, to: 1 });
		$('market_removelisting_dialog_cancelbtn').show();
		$('market_removelisting_dialog_cancelbtn').setOpacity('0');
		$('market_removelisting_dialog_cancelbtn').fade({ duration: 0.25, from: 0, to: 1 });
		$('market_removelisting_dialog_accept_throbber').fade({ duration: 0.25 });
	},
	
	OnFailure: function( transport ) {
		this.OnFailureEffects();
		this.DisplayError( 'There was a problem removing your listing. Refresh the page and try again.' );
	},

	OnDocumentKeyPress: function( event ) {
		if ( event.keyCode == Event.KEY_ESC )
		{
			this.Dismiss();
			event.stop();
		}
	}
};

function RemoveMarketListing( sElementPrefix, listingid, appid, contextid, itemid )
{
	RemoveListingDialog.Show( sElementPrefix, listingid, g_rgAssets[appid][contextid][itemid], false );
}

function CancelMarketListingConfirmation( sElementPrefix, listingid, appid, contextid, itemid )
{
	RemoveListingDialog.Show( sElementPrefix, listingid, g_rgAssets[appid][contextid][itemid], true );
}


CancelMarketBuyOrderDialog = {
	m_bInitialized: false,
	m_llBuyOrderID: null,

	Initialize: function() {
	},

	Show: function ( buy_orderid ) {
		if ( !this.m_bInitialized )
			this.Initialize();
		this.m_llBuyOrderID = buy_orderid;

		this.OnAccept();
	},

	DisplayError: function( error ) {
		alert( error );
	},

	Dismiss: function() {
	},

	OnAccept: function() {
		new Ajax.Request( 'https://steamcommunity.com/market/cancelbuyorder/', {
			method: 'post',
			parameters: {
				sessionid: g_sessionID,
				buy_orderid: this.m_llBuyOrderID
			},
			onSuccess: function( transport ) { CancelMarketBuyOrderDialog.OnSuccess( transport ); },
			onFailure: function( transport ) { CancelMarketBuyOrderDialog.OnFailure( transport ); }
		} );
	},

	OnCancel: function() {
		this.Dismiss();
	},

	OnSuccessEffects: function() {
		window.location.reload();
	},

	OnSuccess: function( transport ) {
		if ( transport.responseJSON )
		{
			this.OnSuccessEffects();
		}
		else
		{
			// this.DisplayError( 'There was a problem removing your listing. Refresh the page and try again.' );
		}
	},

	OnFailure: function( transport ) {
		alert( 'failed to cancel buy order' );
	}
};

function CancelMarketBuyOrder( buy_orderid )
{
	CancelMarketBuyOrderDialog.Show( buy_orderid );
}

CreateBuyOrderDialog = {
	m_bInitialized: false,
	m_divContents: null,
	m_unAppId: null,
	m_strMarketHashName: null,
	m_strMarketItemName: null,
	m_timeBuyOrderPollingStart: null,
	m_bPageNeedsRefresh: false,
	m_nBestBuyPrice: null,
	m_bActive: false,

	Initialize: function( unAppId, strMarketHashName, strMarketItemName, divPopup ) {
		this.m_bInitialized = true;
		this.m_divContents = divPopup;
		this.m_unAppId = unAppId;
		this.m_strMarketHashName = strMarketHashName;
		this.m_strMarketItemName = strMarketItemName;
	},

	Show: function( unAppId, strMarketHashName, strMarketItemName, divPopup ) {
		if ( !this.m_bInitialized )
			this.Initialize( unAppId, strMarketHashName, strMarketItemName, divPopup );

		if ( !g_bLoggedIn )
		{
			showModal( 'NotLoggedInWarning', true );
			return;
		}

		this.m_bActive = true;

		// show the frame in the dialog
		var modal = ShowDialog( 'Buy - %1$s'.replace( '%1$s', strMarketItemName ), this.m_divContents.show() );
		modal.always( function() { CreateBuyOrderDialog.OnUserClosedDialog() } );

		$J('#market_buyorder_dialog_error').hide();

		// show the payment frame
		$J('#market_buyorder_dialog_paymentinfo_frame_container').show();
		$J('#market_buyorder_dialog_placing_order').hide();
		$J('#market_buy_commodity_view_in_inventory').hide();

		$J('#market_buy_commodity_input_price').prop( 'disabled', false);
		$J('#market_buy_commodity_input_quantity').prop('disabled', false);

		// set our callbacks
		$J('#market_buy_commodity_input_price').keyup( function() { CreateBuyOrderDialog.UpdateTotal(); } );
		$J('#market_buy_commodity_input_quantity').keyup( function() { CreateBuyOrderDialog.UpdateTotal(); } );
		$J('#market_buyorder_dialog_purchase').click( function() { CreateBuyOrderDialog.StartPurchase(); } );
		$J('#market_buyorder_dialog_addfunds').click( function() { CreateBuyOrderDialog.OnAddFunds(); } );
		$J('#market_buy_commodity_input_price').blur( function() {
			var sWalletCurrencyCode = GetCurrencyCode( g_rgWalletInfo['wallet_currency'] );
			var currency = GetPriceValueAsInt( $J('#market_buy_commodity_input_price').val() );
			$('market_buy_commodity_input_price').setValue( v_currencyformat( currency, sWalletCurrencyCode ) );
		});

		var sWalletCurrencyCode = GetCurrencyCode( g_rgWalletInfo['wallet_currency'] );
		if ( window.g_rgWalletInfo )
		{
			$('market_buyorder_dialog_walletbalance_amount').update( v_currencyformat( g_rgWalletInfo['wallet_balance'], sWalletCurrencyCode ) );
		}
		else
		{
			$('market_buyorder_dialog_walletbalance_amount').update( 'no funds' );
		}

		// set our default price
		$('market_buy_commodity_input_price').setValue( v_currencyformat( this.m_nBestBuyPrice, sWalletCurrencyCode ) );

		this.UpdateTotal();
	},

	UpdateTotal: function() {
		var currency = GetPriceValueAsInt( $J('#market_buy_commodity_input_price').val() );
		var quantity = parseInt( $J('#market_buy_commodity_input_quantity').val() );
		var price = Math.round( currency * quantity );

		var div = $J('#market_buy_commodity_order_total');
		if ( isNaN(price) || !window.g_rgWalletInfo )
			div.html( '--' );
		else
			div.html( v_currencyformat( price, GetCurrencyCode( g_rgWalletInfo['wallet_currency'] ) ) );

		if ( !window.g_rgWalletInfo || isNaN(price) || g_rgWalletInfo['wallet_balance'] < price )
		{
			// show add funds
			console.log(g_rgWalletInfo['wallet_balance']);
			$J('#market_buyorder_dialog_purchase').hide();
			$J('#market_buyorder_dialog_addfunds').show();
			$J('#market_buyorder_dialog_accept_ssa_container').hide();
		}
		else
		{
			// show buy button
			$J('#market_buyorder_dialog_addfunds').hide();
			$J('#market_buyorder_dialog_purchase').show();
			$J('#market_buyorder_dialog_accept_ssa_container').show();
		}
	},

	StartPurchase: function() {
				if ( !$J('#market_buyorder_dialog_accept_ssa').prop('checked') )
		{
			this.DisplayError( 'You must agree to the terms of the Steam Subscriber Agreement to complete this transaction.' );
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
				this.DisplayError( errorString );
				return;
			}
		}

		new Effect.BlindUp( 'market_buyorder_dialog_paymentinfo_frame_container', { duration: 0.25 } );
		new Effect.BlindDown( 'market_buyorder_dialog_placing_order', { duration: 0.25 } );

		$J('#market_buy_commodity_input_price').prop( 'disabled', true);
		$J('#market_buy_commodity_input_quantity').prop('disabled', true);
		$J('#market_buyorder_dialog_error').hide();

		$J('#market_buy_commodity_status').html( 'Placing buy order...' );

		var currency = GetPriceValueAsInt( $J('#market_buy_commodity_input_price').val() );
		var quantity = parseInt( $J('#market_buy_commodity_input_quantity').val() );
		var price_total = Math.round( currency * quantity );

		var first_name = $J('#first_name') ? $J('#first_name').val() : '';
		var last_name = $J('#last_name') ? $J('#last_name').val() : '';
		var billing_address = $J('#billing_address') ? $J('#billing_address').val() : '';
		var billing_address_two = $J('#billing_address_two') ? $J('#billing_address_two').val() : '';
		var billing_country = $J('#billing_country') ? $J('#billing_country').val() : '';
		var billing_city = $J('#billing_city') ? $J('#billing_city').val() : '';
		var billing_state = g_bHasBillingStates ? ( $J('#billing_state_select') ? $J('#billing_state_select').val() : '' ) : '';
		var billing_postal_code = $J('#billing_postal_code') ? $J('#billing_postal_code').val() : '';
		var save_my_address = $J('#save_my_address') ? $J('#save_my_address').prop('checked') : false;

		// we'll want to refresh the page behind us when done
		this.m_bPageNeedsRefresh = true;

		// ajax in the result
		$J.ajax( {
			url: 'https://steamcommunity.com/market/createbuyorder/',
			type: 'POST',
			data: {
				sessionid: g_sessionID,
				currency: g_rgWalletInfo['wallet_currency'],
				appid: this.m_unAppId,
				market_hash_name: this.m_strMarketHashName,
				price_total: price_total,
				quantity: quantity,
				first_name: first_name,
				last_name: last_name,
				billing_address: billing_address,
				billing_address_two: billing_address_two,
				billing_country: billing_country,
				billing_city: billing_city,
				billing_state: billing_state,
				billing_postal_code: billing_postal_code,
				save_my_address: save_my_address ? '1' : '0'			
			},
			crossDomain: true,
			xhrFields: { withCredentials: true }
		} ).done( function ( data ) {
			CreateBuyOrderDialog.OnCreateBuyOrderComplete( { responseJSON: data } );
		} ).fail( function( jqxhr ) {
			// jquery doesn't parse json on fail
			var data = $J.parseJSON( jqxhr.responseText );
			CreateBuyOrderDialog.OnCreateBuyOrderComplete( { responseJSON: data } );
		} );
	},

	OnCreateBuyOrderComplete: function( transport ) {
		if ( transport.responseJSON && transport.responseJSON.success == 1 )
		{
			$J('#market_buyorder_dialog_purchase_throbber').show();
			$J('#market_buy_commodity_status').html( 'Finding matching item listings at your desired price...' );

			var buy_orderid = transport.responseJSON.buy_orderid;

			// poll for buy order result
			this.m_timeBuyOrderPollingStart = $J.now();
			setTimeout( function() { CreateBuyOrderDialog.PollForBuyOrderCompletion( buy_orderid ); }, 1000 );
		}
		else if ( transport.responseJSON && transport.responseJSON.message )
		{
			this.DisplayError( transport.responseJSON.message );
		}
		else if ( transport.responseJSON && transport.responseJSON.success )
		{
			this.DisplayError( 'Sorry! We had trouble hearing back from the Steam servers about your order. Double check whether or not your order has actually been created or filled. If not, then please try again later.' + ' (' + transport.responseJSON.success + ')' );
		}
		else
		{
			this.DisplayError( 'Sorry! We had trouble hearing back from the Steam servers about your order. Double check whether or not your order has actually been created or filled. If not, then please try again later.' );
		}
	},

	OnAddFunds: function() {
		var currency = GetPriceValueAsInt( $J('#market_buy_commodity_input_price').val() );
		var quantity = parseInt( $J('#market_buy_commodity_input_quantity').val() );
		var price = Math.round( currency * quantity );

		if ( !window.g_rgWalletInfo || isNaN(price) || g_rgWalletInfo['wallet_balance'] >= price )
		{
			window.location = 'https://store.steampowered.com/steamaccount/addfunds?marketlisting=1&returnurl=' + window.location;
		}
		else
		{
			if ( price > g_rgWalletInfo['wallet_max_balance'] && price > g_rgWalletInfo['wallet_balance'] )
			{
				this.DisplayError(
					'The total order amount exceeds the maximum wallet balance of %1$s.'
						.replace( '%1$s', v_currencyformat( g_rgWalletInfo['wallet_max_balance'], GetCurrencyCode( g_rgWalletInfo['wallet_currency'] ) ) )
				);
			}
			else
			{
				window.location = 'https://store.steampowered.com/steamaccount/addfunds?marketlisting=1&minneeded=' + (price - g_rgWalletInfo['wallet_balance']) + '&returnurl=' + window.location;
			}
		}
	},

	PollForBuyOrderCompletion: function( buy_orderid ) {
		if ( $J.now() > (this.m_timeBuyOrderPollingStart+5000) )
		{
			this.BuyOrderPlaced();
		}
		else
		{
			// keep asking
			$J.ajax( {
				url: 'https://steamcommunity.com/market/getbuyorderstatus/',
				type: 'GET',
				data: {
					sessionid: g_sessionID,
					buy_orderid: buy_orderid
				}
			} ).done( function ( data ) {
				CreateBuyOrderDialog.OnPollForBuyOrderCompletionSuccess( buy_orderid, { responseJSON: data } );
			} ).fail( function( jqxhr ) {
				CreateBuyOrderDialog.BuyOrderPlaced();
			} );
		}
	},

	OnPollForBuyOrderCompletionSuccess: function( buy_orderid, response ) {
		if ( response.responseJSON.success != 1 )
		{
			// failed for some reason - just keep polling until we either timeout or get a status
			setTimeout( function() { CreateBuyOrderDialog.PollForBuyOrderCompletion( buy_orderid ); }, 1000 );
		}
		else if ( response.responseJSON.purchased )
		{
			this.BuyOrderPlaced();
			$J('#market_buy_commodity_status').html( 'Purchase succeeded! Your item is now in your inventory, and your receipt has been emailed to you.' );

			if ( response.responseJSON.purchase_amount_text )
			{
				$J('#market_buy_commodity_purchase_detail').html( response.responseJSON.purchase_amount_text );
			}

			for( var i = 0; i < response.responseJSON.purchases.length; i++ )
			{
				if ( response.responseJSON.purchases[i].assetid && response.responseJSON.purchases[i].contextid )
				{
					$J('#market_buy_commodity_view_in_inventory').show();
					$J('#market_buy_commodity_view_in_inventory').click( function() {
						CreateBuyOrderDialog.ViewPurchasedItemInInventory( response.responseJSON.purchases[i].appid, response.responseJSON.purchases[i].contextid, response.responseJSON.purchases[i].assetid );
						}
					);
					break;
				}
			}
		}
		else if ( response.responseJSON.active )
		{
			setTimeout( function() { CreateBuyOrderDialog.PollForBuyOrderCompletion( buy_orderid ); }, 1000 );
		}
	},

	BuyOrderPlaced: function() {
		// too long has passed, give up
		$J('#market_buy_commodity_status').html( 'Success! Your buy order has been placed.<br><br>You will be automatically notified by email when the purchase is completed. You can cancel this buy order from the bottom of this page, or from the market home page.' );
		$J('#market_buy_commodity_throbber').hide();
	},

	ViewPurchasedItemInInventory: function( appid, contextid, assetid ) {
		window.location = 'https://steamcommunity.com/my/inventory/#' + appid + '_' + contextid + '_' + assetid;
	},

	DisplayError: function( error ) {
		$J('#market_buyorder_dialog_purchase_throbber').hide();
		$J('#market_buyorder_dialog_error').show();
		$J('#market_buyorder_dialog_error_text').html( error );
		$J('#market_buyorder_dialog_error_text').css( 'color', '#ffffff' );
		// this doesn't work, need jquery-color plugin or a different solution
		$J('#market_buyorder_dialog_error_text').animate( {'color':'#ff0000'}, 250 );
		$J('#market_buyorder_dialog_placing_order').hide();
	},

	OnUserClosedDialog: function() {
		if ( this.m_bPageNeedsRefresh )
		{
			this.m_bPageNeedsRefresh = false;
			window.location.reload();
		}
		this.m_bActive = false;
	}
};

function Market_ShowBuyOrderPopup( unAppId, sMarketHashName, strMarketItemName ) {
	if ( typeof g_rgWalletInfo != 'undefined' && g_rgWalletInfo['wallet_currency'] == 0 )
	{
		ShowConfirmDialog(
				'Cannot place order',
				'You cannot buy items in the Community Market until you <a href="https://store.steampowered.com/steamaccount/addfunds" target="_top">add funds to your Steam Wallet</a> or make a purchase in the Steam store and provide your billing address.',
				'Add wallet funds',
				'Cancel'
		).done( function() {
			location.href = 'https://store.steampowered.com/steamaccount/addfunds';
		} );
	}
	else
	{
		CreateBuyOrderDialog.Show( unAppId, sMarketHashName, strMarketItemName, $J('#market_buy_commodity_popup') );
	}
}

BuyItemDialog = {
	m_bPurchaseClicked: false,
	m_bPurchaseSuccess: false,
	m_bInitialized: false,

	m_oListingOriginalRow: null,
	m_sElementPrefix: null,
	m_ulListingId: false,
	m_item: null,
	m_fnDocumentKeyHandler: null,

	m_nSubtotal: 0,
	m_nFeeAmount: 0,
	m_nTotal: 0,

	m_sAddFundsReturnURL: null,
	m_modal: null,

	Initialize: function() {
		$('market_buynow_dialog_purchase').observe( 'click', this.OnAccept.bindAsEventListener(this) );
		$('market_buynow_dialog_addfunds').observe( 'click', this.OnAddFunds.bindAsEventListener(this) );
		$('market_buynow_dialog_cancel').observe( 'click', this.OnCancel.bindAsEventListener(this) );
		$('market_buynow_dialog_cancel_close').observe( 'click', this.OnCancel.bindAsEventListener(this) );
		$('market_buynow_dialog_close').observe( 'click', this.OnCancel.bindAsEventListener(this) );

		$('market_buynow_dialog').style.visibility = 'hidden';
		$('market_buynow_dialog').show();
		$('market_buynow_dialog').hide();
		$('market_buynow_dialog').style.visibility = '';

		this.m_bInitialized = true;
	},

	Show: function ( sElementPrefix, listingid, item ) {

		if ( !this.m_bInitialized )
			this.Initialize();

		this.m_bPurchaseClicked = false;
		this.m_bPurchaseSuccess = false;

		$('market_buynow_dialog_error').hide();

		$('market_buynow_dialog_title').update( 'Buy an item' );
		$('market_buynow_dialog_purchasecomplete_message').hide();
		$('market_buynow_dialog_purchase').show();
		$('market_buynow_dialog_purchase_throbber').hide();
		$('market_buynow_dialog_paymentinfo_frame_container').show();
		$('market_buynow_dialog_bottom_buttons').hide();

		$('market_buynow_dialog_cancel').show();
		$('market_buynow_dialog_cancel_close').hide();

		var sCurrentURL = window.location.protocol + "//" + window.location.host + window.location.pathname;
		this.m_sAddFundsReturnURL = encodeURIComponent( sCurrentURL + '#buy' + sElementPrefix + '|' + listingid + '|' + item['appid'] + '|' + item['contextid'] + '|'  + item['id'] );
		this.m_oListingOriginalRow = $(sElementPrefix + '_' + listingid);

		var bNoWallet = g_rgWalletInfo['wallet_currency'] == 0;
		var sWalletCurrencyCode = GetCurrencyCode( g_rgWalletInfo['wallet_currency'] );
		var rgListing = g_rgListingInfo[listingid];
		if ( rgListing['converted_fee_per_unit'] > 0 )
		{
			this.m_nSubtotal = rgListing['converted_price_per_unit'];
			this.m_nFeeAmount = rgListing['converted_fee_per_unit'];
			this.m_nTotal = rgListing['converted_price_per_unit'] + rgListing['converted_fee_per_unit'];

			var nFeePublisher = rgListing['converted_publisher_fee_per_unit'];
			var nFeeSteam = rgListing['converted_steam_fee_per_unit'];

			if ( this.m_nFeeAmount != nFeePublisher + nFeeSteam || this.m_nTotal != this.m_nSubtotal + nFeePublisher + nFeeSteam )
			{
				alert( "An unexpected error occurred trying to show the purchase dialog. Error: " + listingid + " " + this.m_nTotal + " " + this.m_nSubtotal + " " + this.m_nFeeAmount + " " + nFeePublisher + " " + nFeeSteam );
				return;
			}

			if ( BIsTwoFactorEnabled() )
			{
				this.m_nTotal -= nFeeSteam;
				this.m_nFeeAmount -= nFeeSteam;
				//nFeeSteam = 0;
			}

			$('market_buynow_dialog_totals_subtotal').update( v_currencyformat( this.m_nSubtotal, sWalletCurrencyCode ) );
			$('market_buynow_dialog_totals_publisherfee').update( v_currencyformat( nFeePublisher, sWalletCurrencyCode ) );
			$('market_buynow_dialog_totals_publisherfee_percent').update( ( rgListing['publisher_fee_percent'] * 100 ).toFixed(1) );
			if ( typeof g_rgAppContextData[rgListing['publisher_fee_app']] != 'undefined' )
			{
				$J('#market_buynow_dialog_totals_publisherfee_gamename').text( g_rgAppContextData[rgListing['publisher_fee_app']].name );
			}
			else
			{
				// No app data for some reason
				// Say "Game fee"
				$J('#market_buynow_dialog_totals_publisherfee_gamename').text( 'Game' );
			}
			$('market_buynow_dialog_totals_transactionfee').update( v_currencyformat( nFeeSteam, sWalletCurrencyCode ) );
			$('market_buynow_dialog_totals_transactionfee_percent').update( ( g_rgWalletInfo['wallet_fee_percent'] * 100 ).toFixed(1) );
			$('market_buynow_dialog_totals_total').update( v_currencyformat( this.m_nTotal, sWalletCurrencyCode ) );
			$('market_buynow_dialog_totals').show();
		}
		else
		{
			this.m_nSubtotal = rgListing['converted_price_per_unit'];
			this.m_nFeeAmount = 0;
			this.m_nTotal = rgListing['converted_price_per_unit'];
			$('market_buynow_dialog_totals').hide();
		}

		var elEuSSA = $('market_buynow_dialog_eu_ssa');
		if ( this.m_nTotal > g_rgWalletInfo['wallet_balance'] || bNoWallet )
		{
			$('market_buynow_dialog_purchase').hide();
			$('market_buynow_dialog_addfunds').show();
			$('market_buynow_dialog_accept_ssa_container').hide();
			if ( elEuSSA )
			{
				elEuSSA.hide();
			}
		}
		else
		{
			$('market_buynow_dialog_purchase').show();
			$('market_buynow_dialog_addfunds').hide();
			$('market_buynow_dialog_accept_ssa_container').show();
			if ( elEuSSA )
			{
				elEuSSA.show();
			}
		}

		if ( bNoWallet )
		{
			$('market_buynow_dialog_walletbalance').hide();
		}
		else
		{
			$('market_buynow_dialog_walletbalance').show();
			$('market_buynow_dialog_walletbalance_amount').update( v_currencyformat( g_rgWalletInfo['wallet_balance'], sWalletCurrencyCode ) );
		}

		this.m_sElementPrefix = sElementPrefix;
		this.m_ulListingId = listingid;
		this.m_item = item;

		var oListingRow = Element.clone( this.m_oListingOriginalRow, true );
		var oListingTable = Element.clone( this.m_oListingOriginalRow.up(1), false );
		var oListingTableRowHeader = Element.clone( this.m_oListingOriginalRow.up().down(), true);
		var oListingTableRows = Element.clone( this.m_oListingOriginalRow.up(), false );
		oListingTableRows.appendChild( oListingTableRowHeader );

		oListingRow.id = oListingRow.id + 'Copy';
		var oItemImg = oListingRow.select('.market_listing_item_img').first();
		if ( typeof oItemImg != 'undefined' )
			oItemImg.id = oItemImg.id + 'Copy';

		var oItemActionMenuButton = oListingRow.select('.market_actionmenu_button').first();
		if ( typeof oItemActionMenuButton != 'undefined' )
		{
			oItemActionMenuButton.id = oItemActionMenuButton.id + 'Copy';
			$(oItemActionMenuButton).observe( 'click', function() {
				var rgAsset = g_rgListingInfo[listingid].asset;
				HandleMarketActionMenu( oItemActionMenuButton, g_rgAssets[rgAsset.appid][rgAsset.contextid][rgAsset.id], listingid );

				return false;
			} );
		}

		var oItemName = oListingRow.select('.market_listing_item_name').first();
		oItemName.update( this.m_item.name.escapeHTML() ); // Remove any quantity from the item name
		oItemName.id = oItemName.id + 'Copy';
		oListingTableRows.appendChild( oListingRow );

		var oAvatarLink = oListingTableRows.select('a').each( function( item ) {
			item.target = '_new';
		});

		oListingTableRows.id = oListingTable.id + 'Copy';
		oListingTable.appendChild( oListingTableRows );
		oListingTable.id = oListingTable.id + 'Copy';

		$('market_buynow_dialog_item').innerHTML = '';
		$('market_buynow_dialog_item').appendChild( oListingTable );
		if ( typeof oItemImg != 'undefined' )
			CreateItemHoverFromContainer( g_rgAssets, oItemImg.id, item.appid, item.contextid, item.id, item.amount );
		CreateItemHoverFromContainer( g_rgAssets, oItemName.id, item.appid, item.contextid, item.id, item.amount );
		$('hover').style.zIndex = 1001;

		this.m_fnDocumentKeyHandler = this.OnDocumentKeyPress.bindAsEventListener( this );
		$(document).observe( 'keydown', this.m_fnDocumentKeyHandler );

		var _this = this;
		this.m_modal = new CModal( $J('#market_buynow_dialog' ) );
		this.m_modal.GetContent().find('.newmodal_close' ).click( function() { _this.Dismiss() } );
		this.m_modal.Show();
		$('market_buynow_dialog').focus();
	},

	DisplayError: function( error ) {
		$('market_buynow_dialog_error').show();
		$('market_buynow_dialog_error_text').update( error );
		$('market_buynow_dialog_error_text').style.color = '#ffffff';
		new Effect.Morph( $('market_buynow_dialog_error_text'), { style: {color: '#ff0000'}, duration: 0.25 } );
	},

	Dismiss: function() {
		$(document).stopObserving( 'keydown', this.m_fnDocumentKeyHandler );
		if ( this.m_modal )
		{
			this.m_modal.Dismiss();
			this.m_modal = null;
		}
	},

	OnAddFunds: function( event ) {
		event.stop();

		window.location = 'https://store.steampowered.com/steamaccount/addfunds?marketlisting=' + this.m_ulListingId + '&returnurl=' + this.m_sAddFundsReturnURL;
	},

	OnAccept: function( event ) {
		event.stop();

		// If already accepted, ignore
		if ( this.m_bPurchaseSuccess || this.m_bPurchaseClicked )
		{
			return;
		}

				if ( !$('market_buynow_dialog_accept_ssa') || !$('market_buynow_dialog_accept_ssa').checked )
		{
			this.DisplayError( 'You must agree to the terms of the Steam Subscriber Agreement to complete this transaction.' );
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
			errorString = BillingAddress_VerifyAddressFields( rgBadFields, g_bHasBillingStates, '_buynow' );

			for ( var key in rgBadFields )
			{
				if ( rgBadFields[key] )
					ValidationMarkFieldBad( key + '_buynow' );
				else
					ValidationMarkFieldOk( key + '_buynow' );
			}

			if ( errorString != '' )
			{
				this.DisplayError( errorString );
				return;
			}
		}

		this.m_bPurchaseClicked = true;
		$('market_buynow_dialog_error').hide();

		$('market_buynow_dialog_purchase_throbber').clonePosition( $('market_buynow_dialog_purchase') );
		$('market_buynow_dialog_purchase').fade({ duration: 0.25 });
		$('market_buynow_dialog_purchase_throbber').show();
		$('market_buynow_dialog_purchase_throbber').fade({ duration: 0.25, from: 0, to: 1 });

		var listingid = this.m_ulListingId;

		var first_name = $J('#first_name_buynow') ? $J('#first_name_buynow').val() : '';
		var last_name = $J('#last_name_buynow') ? $J('#last_name_buynow').val() : '';
		var billing_address = $J('#billing_address_buynow') ? $J('#billing_address_buynow').val() : '';
		var billing_address_two = $J('#billing_address_two_buynow') ? $J('#billing_address_two_buynow').val() : '';
		var billing_country = $J('#billing_country_buynow') ? $J('#billing_country_buynow').val() : '';
		var billing_city = $J('#billing_city_buynow') ? $J('#billing_city_buynow').val() : '';
		var billing_state = g_bHasBillingStates ? ( $J('#billing_state_select_buynow') ? $J('#billing_state_select_buynow').val() : '' ) : '';
		var billing_postal_code = $J('#billing_postal_code_buynow') ? $J('#billing_postal_code_buynow').val() : '';
		var save_my_address = $J('#save_my_address_buynow') ? $J('#save_my_address_buynow').prop('checked'): false;

		$J.ajax( {
			url: 'https://steamcommunity.com/market/buylisting/' + listingid,
			type: 'POST',
			data: {
				sessionid: g_sessionID,
				currency: g_rgWalletInfo['wallet_currency'],
				subtotal: this.m_nSubtotal,
				fee: this.m_nFeeAmount,
				total: this.m_nTotal,
				quantity: 1,
				first_name: first_name,
				last_name: last_name,
				billing_address: billing_address,
				billing_address_two: billing_address_two,
				billing_country: billing_country,
				billing_city: billing_city,
				billing_state: billing_state,
				billing_postal_code: billing_postal_code,
				save_my_address: save_my_address ? '1' : '0'
			},
			crossDomain: true,
			xhrFields: { withCredentials: true }
		} ).done( function ( data ) {
			BuyItemDialog.OnSuccess( { responseJSON: data } );
		} ).fail( function( jqxhr ) {
			// jquery doesn't parse json on fail
			var data = $J.parseJSON( jqxhr.responseText );
			BuyItemDialog.OnFailure( { responseJSON: data } );
		} );
	},

	OnCancel: function( event ) {
		this.Dismiss();
		event.stop();
	},

	OnSuccessEffects: function() {
		$('market_buynow_dialog_cancel').hide();
		$('market_buynow_dialog_cancel_close').show();
		
		$('market_buynow_dialog_purchase_throbber').fade({ duration: 0.25 });
		new Effect.BlindUp( 'market_buynow_dialog_paymentinfo_frame_container', { duration: 0.25 } );
		new Effect.BlindDown( 'market_buynow_dialog_purchasecomplete_message', { duration: 0.25 } );
		new Effect.BlindDown( 'market_buynow_dialog_bottom_buttons', { duration: 0.25 } );

		// Replace the listing row with a message that says this was purchased
		var oOriginalItemName = Element.clone( this.m_oListingOriginalRow.select('.market_listing_item_name').first(), true );
		this.m_oListingOriginalRow.update('');

		var elMessage = new Element( 'div', {'class': 'market_listing_purchase_message' } );
		var sItemNameSpanId = this.m_sElementPrefix + '_purchased_' + this.m_ulListingId;
		elMessage.update(
				'You purchased this <%1$s></%2$s>. View it in your <%3$s>inventory</%4$s>.'
					.replace( '%1$s', 'span id="' + sItemNameSpanId + '"' )
					.replace( '%2$s', 'span' )
					.replace( '%3$s', 'a href="https://steamcommunity.com/my/inventory/"' )
					.replace( '%4$s', 'a' ) );

		this.m_oListingOriginalRow.appendChild( elMessage );
		$(sItemNameSpanId).appendChild( oOriginalItemName );
	},

	OnSuccess: function( transport ) {
		this.m_bPurchaseSuccess = true;

		if ( transport.responseJSON )
		{
			var rgNewWalletInfo = transport.responseJSON.wallet_info;
			if ( rgNewWalletInfo && rgNewWalletInfo.success )
			{
				g_rgWalletInfo = rgNewWalletInfo;
			}

			var sWalletCurrencyCode = GetCurrencyCode( g_rgWalletInfo['wallet_currency'] );
			$('marketWalletBalanceAmount').update( v_currencyformat( g_rgWalletInfo['wallet_balance'], sWalletCurrencyCode ) );
			
			this.OnSuccessEffects();
		}
		else
		{
			this.OnFailureEffects();
			this.DisplayError( 'There was a problem purchasing your item. The listing may have been removed. Refresh the page and try again.' );
		}
	},

	OnFailureEffects: function() {
		var queue = Effect.Queues.get('global');
		queue.each(function(effect) { effect.cancel(); });
		
		$('market_buynow_dialog_purchase').show();
		$('market_buynow_dialog_purchase').setOpacity('0');
		$('market_buynow_dialog_purchase').fade({ duration: 0.25, from: 0, to: 1 });
		$('market_buynow_dialog_purchase_throbber').fade({ duration: 0.25 });
	},

	OnFailure: function( transport ) {
		this.m_bPurchaseClicked = false;
		this.OnFailureEffects();

		if ( transport.responseJSON && transport.responseJSON.message )
		{
			this.DisplayError( transport.responseJSON.message );
		}
		else
		{
			this.DisplayError( 'There was a problem purchasing your item. The listing may have been removed. Refresh the page and try again.' );
		}
	},

	OnDocumentKeyPress: function( event ) {
		if ( event.keyCode == Event.KEY_ESC )
		{
			this.Dismiss();
			event.stop();
		}
	},

	OnInputKeyPress: function( event ) {
		if ( event.keyCode == Event.KEY_RETURN )
		{
			if ( this.m_bPurchaseSuccess )
			{
				this.OnConfirmationAccept( event );
			}
			else
			{
				this.OnAccept( event );
			}
		}
	},

	OnInputKeyUp: function( event ) {

	}
};

function BuyMarketListing( sElementPrefix, listingid, appid, contextid, itemid )
{
	if ( !g_bLoggedIn )
	{
		showModal( 'NotLoggedInWarning', true );
		return;
	}

	if ( !g_rgAssets[appid] || !g_rgAssets[appid][contextid] || !g_rgAssets[appid][contextid][itemid] )
	{
		return;
	}
	
	BuyItemDialog.Show( sElementPrefix, listingid, g_rgAssets[appid][contextid][itemid] );
}

function ObjectIsEmpty( object )
{
	for ( var property in object )
	{
		if ( object.hasOwnProperty( property ) )
		{
			return false;
		}
	}

	return true;
}

function MergeWithAssetArray( newAssets )
{
	if ( ObjectIsEmpty( newAssets ) )
	{
		return;
	}

	for( var appid in newAssets )
	{
		for ( var contextid in newAssets[appid] )
		{
			for ( var assetid in newAssets[appid][contextid] )
			{
				if ( typeof( g_rgAssets[appid] ) == 'undefined' )
				{
					g_rgAssets[appid] = [];
				}

				if ( typeof( g_rgAssets[appid][contextid] ) == 'undefined' )
				{
					g_rgAssets[appid][contextid] = [];
				}

				g_rgAssets[appid][contextid][assetid] = newAssets[appid][contextid][assetid];
			}
		}
	}
}

function MergeWithListingInfoArray ( newListings )
{
	if ( ObjectIsEmpty( newListings ) )
	{
		return;
	}

	for( var listingid in newListings )
	{
		g_rgListingInfo[listingid] = newListings[listingid];
	}
}

function MergeWithAppDataArray( newAppData )
{
	if ( ObjectIsEmpty( newAppData ) )
	{
		return;
	}

	for ( var appid in newAppData )
	{
		if ( typeof g_rgAppContextData[appid] == 'undefined' )
		{
			g_rgAppContextData[appid] = newAppData[appid];
		}
	}
}

var g_bBusyLoadingMore = false;
function LoadRecentListings( type, rows )
{
	if ( g_bBusyLoadingMore )
	{
		return;
	}

	var elRows = $(rows);

	elRows.update( g_htmlThrobber );

	g_bBusyLoadingMore = true;
	new Ajax.Request( 'https://steamcommunity.com/market/recent', {
		method: 'get',
		parameters: {
			country: g_strCountryCode,
			language: g_strLanguage,
			currency: typeof( g_rgWalletInfo ) != 'undefined' ? g_rgWalletInfo['wallet_currency'] : 1			//time: g_rgRecents[type]['time'],
			//listing: g_rgRecents[type]['listing']
		},
		onSuccess: function( transport ) {
			if ( transport.responseJSON )
			{
				var response = transport.responseJSON;

				if ( response.assets.length != 0 )
				{
					g_rgRecents[type]['time'] = response.last_time;
					g_rgRecents[type]['listing'] = response.last_listing;

					elRows.update( g_htmlSellListingsTableHeader + response.results_html );

					MergeWithAssetArray( response.assets );
					MergeWithListingInfoArray( response.listinginfo );
					MergeWithAppDataArray( response.app_data );
					eval( response.hovers );
				}
			}
		},
		onComplete: function() { g_bBusyLoadingMore = false; }
	});
}

var g_bBusyLoadingRecentCompleted = false;
var g_bLoadedRecentCompleted = false;
function LoadRecentCompletedListings( )
{
	if ( g_bBusyLoadingRecentCompleted )
	{
		return;
	}

	var elRows = $('soldListingRows');
	elRows.update( g_htmlThrobber );

	g_bBusyLoadingRecentCompleted = true;
	new Ajax.Request( 'https://steamcommunity.com/market/recentcompleted', {
		method: 'get',
		parameters: { },
		onSuccess: function( transport ) {
			if ( transport.responseJSON )
			{
				var response = transport.responseJSON;

				if ( response.assets.length != 0 )
				{
					g_rgRecents['sell_sold']['time'] = response.last_time;
					g_rgRecents['sell_sold']['listing'] = response.last_listing;

					elRows.update( g_htmlSoldListingTableHeader + response.results_html );

					MergeWithAssetArray( response.assets );
					MergeWithListingInfoArray( response.listinginfo );
					MergeWithAppDataArray( response.app_data );
					eval( response.hovers );
				}
			}
		},
		onComplete: function() { g_bLoadedRecentCompleted = true; g_bBusyLoadingRecentCompleted = false; }
	});
}

var g_bBusyLoadingMyMarketListings = false;
var g_oMyListings = null;
function RefreshMyMarketListings( bScrollIntoView )
{
	if ( g_bBusyLoadingMyMarketListings )
	{
		return;
	}

	g_bBusyLoadingMyMarketListings = true;
	var elMyMarketListings = $('tabContentsMyListings');
	new Ajax.Request( 'https://steamcommunity.com/market/mylistings', {
		method: 'get',
		parameters: {
			count: g_nMySellListingsPageSize
		},
		onSuccess: function( transport ) {
			if ( transport.responseJSON )
			{
				var response = transport.responseJSON;

				elMyMarketListings.innerHTML = response.results_html;
				$('my_market_activelistings_number').update( response.num_active_listings );

				MergeWithAssetArray( response.assets );
				eval( response.hovers );

				if ( response.total_count > response.pagesize )
				{
					g_oMyListings = new CAjaxPagingControls(
						{
							query: '',
							total_count: response.total_count,
							pagesize: response.pagesize,
							prefix: 'tabContentsMyActiveMarketListings',
							class_prefix: 'market'
						}, 'https://steamcommunity.com/market/mylistings/'
					);

					g_oMyListings.SetResponseHandler( function ( response )
					{
						MergeWithAssetArray( response.assets );
						eval( response.hovers );
					} );

					g_nMySellListingsPageSize = response.pagesize;
					$J( '#my_listing_pagesize_10' ).addClass( 'whiteLink' ).removeClass( 'disabled' );
					$J( '#my_listing_pagesize_30' ).addClass( 'whiteLink' ).removeClass( 'disabled' );
					$J( '#my_listing_pagesize_100' ).addClass( 'whiteLink' ).removeClass( 'disabled' );
					$J( '#my_listing_pagesize_' + g_nMySellListingsPageSize ).removeClass( 'whiteLink' ).addClass( 'disabled' );

					if ( bScrollIntoView )
					{
						var elTable = $J( '#tabContentsMyActiveMarketListingsTable' ).get(0);
						if ( typeof elTable.scrollIntoView !== 'undefined' )
						{
							elTable.scrollIntoView();
						}
					}
				}
			}
		},
		onComplete: function() { g_bBusyLoadingMyMarketListings = false; }
	});
}

var g_bBusyLoadingMarketHistory = false;
var g_oMyHistory = null;
function LoadMarketHistory()
{
	if ( g_bBusyLoadingMarketHistory )
	{
		return;
	}

	g_bBusyLoadingMarketHistory = true;
	var elMyHistoryContents = $('tabContentsMyMarketHistory');
	new Ajax.Request( 'https://steamcommunity.com/market/myhistory', {
		method: 'get',
		parameters: {
		},
		onSuccess: function( transport ) {
			if ( transport.responseJSON )
			{
				var response = transport.responseJSON;

				elMyHistoryContents.innerHTML = response.results_html;

				MergeWithAssetArray( response.assets );
				eval( response.hovers );

				g_oMyHistory = new CAjaxPagingControls(
						{
							query: '',
							total_count: response.total_count,
							pagesize: response.pagesize,
							prefix: 'tabContentsMyMarketHistory',
							class_prefix: 'market'
						}, 'https://steamcommunity.com/market/myhistory/'
				);

				g_oMyHistory.SetResponseHandler( function( response ) {
					MergeWithAssetArray( response.assets );
					eval( response.hovers );
				});
			}
		},
		onComplete: function() { g_bBusyLoadingMarketHistory = false; }
	});
}

function MarketCheckHash()
{
	if ( window.location.hash.length > 4 && window.location.hash.substr(0,4) == "#buy" )
	{
		var rgListing = window.location.hash.substr(4).split('|');
		BuyMarketListing( rgListing[0], rgListing[1], rgListing[2], rgListing[3], rgListing[4] );
	}
	else if ( window.location.hash.length > 5 && window.location.hash.substr(0,5) == "#sell" )
	{
		var strAsset = window.location.hash.substr(5);
		ShowModalContent('https://steamcommunity.com/my/inventory/?modal=1&market=1&sellOnLoad=1#' + strAsset, 'Choose an item from your inventory', 'https://steamcommunity.com/my/inventory/?modal=1&market=1&sellOnLoad=1#' + strAsset, false);
	}
	else if ( window.location.hash == "#myhistory" )
	{
		var oTabMyMarketHistory = $('tabMyMarketHistory');
		oTabMyMarketHistory.click();
	}
}

function InstallMarketActionMenuButtons()
{
	for ( var listing in g_rgListingInfo ) {
		var asset = g_rgListingInfo[listing].asset;
		if ( typeof g_rgAssets[asset.appid][asset.contextid][asset.id].market_actions != 'undefined' )
		{
			// add the context menu
			var elActionMenuButton = $J('<a></a>');
			elActionMenuButton.attr( 'id', 'listing_' + listing + '_actionmenu_button' );
			elActionMenuButton.addClass( 'market_actionmenu_button' );
			elActionMenuButton.attr( 'href', 'javascript:void(0)' );
			$J('#listing_' + listing + '_image').parent().append( elActionMenuButton );

			$J(elActionMenuButton).click( $J.proxy( function( elButton, rgAsset ) {
				HandleMarketActionMenu( elButton.attr( 'id' ), g_rgAssets[rgAsset.appid][rgAsset.contextid][rgAsset.id] );
			}, null, elActionMenuButton, asset ) );
		}
	}
}

function HandleMarketActionMenu( elActionMenuButton, item )
{
	HideMenuFast( elActionMenuButton, 'market_action_popup' );

	var elItemActions = $J('#market_action_popup_itemactions');
	elItemActions.empty();
	for ( var action = 0; action < item.market_actions.length; action++ )
	{
		var rgAction = item.market_actions[action];
		var elNewAction = $J( '<a></a>' );
		elNewAction.addClass( 'popup_menu_item' );
		elNewAction.attr(
			'href',
			rgAction.link.replace( "%assetid%", item.id )
					.replace( "%contextid%", item.contextid )
					.replace( "%owner_steamid%", item.owner )
		);

		if ( rgAction.link.substr( 0, 6 ) != "steam:" )
		{
			elNewAction.attr( 'target', '_blank' );
			elNewAction.attr( 'rel', 'noreferrer' );
		}

		elNewAction.text( rgAction.name );

		elNewAction.click( function() {
			HideMenu( elActionMenuButton, 'market_action_popup' );
		} );

		elItemActions.append( elNewAction );
	}

	ShowMenu( elActionMenuButton, 'market_action_popup', 'right' );
}

Event.observe( document, 'dom:loaded', function() {
	var oTabMyListings = $('tabMyListings');
	var oTabMyMarketHistory = $('tabMyMarketHistory');
	var oTabContentsMyListings = $('tabContentsMyListings');
	var oTabContentsMyMarketHistory = $('tabContentsMyMarketHistory');
	if ( oTabMyListings && oTabMyMarketHistory )
	{
		oTabMyListings.observe( 'click', function( event ) {
			event.stop();
			HideHover();

			oTabContentsMyListings.show();
			oTabContentsMyMarketHistory.hide();

			oTabMyListings.addClassName( 'market_tab_well_tab_active' );
			oTabMyListings.removeClassName( 'market_tab_well_tab_inactive' );
			oTabMyMarketHistory.addClassName( 'market_tab_well_tab_inactive' );
			oTabMyMarketHistory.removeClassName( 'market_tab_well_tab_active' );
		} );

		oTabMyMarketHistory.observe( 'click', function( event ) {
			event.stop();
			HideHover();

			oTabContentsMyListings.hide();
			oTabContentsMyMarketHistory.show();

			oTabMyListings.addClassName( 'market_tab_well_tab_inactive' );
			oTabMyListings.removeClassName( 'market_tab_well_tab_active' );
			oTabMyMarketHistory.addClassName( 'market_tab_well_tab_active' );
			oTabMyMarketHistory.removeClassName( 'market_tab_well_tab_inactive' );

			LoadMarketHistory();
		} );
	}


	var oTabPopularItems = $('tabPopularItems');
	var oTabRecentSellListings = $('tabRecentSellListings');
	var oTabRecentSoldListings = $('tabRecentSoldListings');
	var oTabContentsPopularItems = $('popularItemsTable');
	var oTabContentsRecentSellListings = $('sellListingsTable');
	var oTabContentsRecentSoldListings = $('soldListingTable');
	if ( oTabPopularItems && oTabRecentSellListings && oTabRecentSoldListings )
	{
		oTabPopularItems.observe( 'click', function( event ) {
			event.stop();
			HideHover();

			oTabContentsPopularItems.show();
			oTabContentsRecentSellListings && oTabContentsRecentSellListings.hide();
			oTabContentsRecentSoldListings.hide();

			oTabPopularItems.addClassName( 'market_tab_well_tab_active' );
			oTabPopularItems.removeClassName( 'market_tab_well_tab_inactive' );
			oTabRecentSellListings.addClassName( 'market_tab_well_tab_inactive' );
			oTabRecentSellListings.removeClassName( 'market_tab_well_tab_active' );
			oTabRecentSoldListings.addClassName( 'market_tab_well_tab_inactive' );
			oTabRecentSoldListings.removeClassName( 'market_tab_well_tab_active' );
		} );

		if ( oTabContentsRecentSellListings )
		{
			// only set up the on click if we have the listing data
			oTabRecentSellListings.observe( 'click', function( event ) {
				event.stop();
				HideHover();

				oTabContentsPopularItems.hide();
				oTabContentsRecentSellListings && oTabContentsRecentSellListings.show();
				oTabContentsRecentSoldListings.hide();

				oTabPopularItems.addClassName( 'market_tab_well_tab_inactive' );
				oTabPopularItems.removeClassName( 'market_tab_well_tab_active' );
				oTabRecentSellListings.addClassName( 'market_tab_well_tab_active' );
				oTabRecentSellListings.removeClassName( 'market_tab_well_tab_inactive' );
				oTabRecentSoldListings.addClassName( 'market_tab_well_tab_inactive' );
				oTabRecentSoldListings.removeClassName( 'market_tab_well_tab_active' );

				LoadRecentListings( 'sell_new', 'sellListingRows' );
			} );
		}

		oTabRecentSoldListings.observe( 'click', function( event ) {
			event.stop();
			HideHover();

			oTabContentsPopularItems.hide();
			oTabContentsRecentSellListings && oTabContentsRecentSellListings.hide();
			oTabContentsRecentSoldListings.show();

			oTabPopularItems.addClassName( 'market_tab_well_tab_inactive' );
			oTabPopularItems.removeClassName( 'market_tab_well_tab_active' );
			oTabRecentSellListings.addClassName( 'market_tab_well_tab_inactive' );
			oTabRecentSellListings.removeClassName( 'market_tab_well_tab_active' );
			oTabRecentSoldListings.addClassName( 'market_tab_well_tab_active' );
			oTabRecentSoldListings.removeClassName( 'market_tab_well_tab_inactive' );

			LoadRecentCompletedListings();
		} );
	}
} );

AdvancedSearchDialog = {
	m_bInitialized: false,

	m_fnDocumentKeyHandler: null,
	m_modal: null,

	Initialize: function() {
	},

	Show: function () {
		if ( !this.m_bInitialized )
			this.Initialize();

		this.m_fnDocumentKeyHandler = this.OnDocumentKeyPress.bindAsEventListener( this );
		$(document).observe( 'keydown', this.m_fnDocumentKeyHandler );

		var _this = this;
		this.m_modal = ShowDialog( "Search Community Market", $J('#market_advancedsearch_dialog' ).show() );
		this.m_modal.SetRemoveContentOnDismissal( false );
		this.m_modal.always( function() { _this.Dismiss(); } );
		$('market_advancedsearch_dialog').focus();
	},

	Dismiss: function() {
		$(document).stopObserving( 'keydown', this.m_fnDocumentKeyHandler );
		if ( this.m_modal )
		{
			this.m_modal.Dismiss();
			this.m_modal = null;
		}
	},

	SelectApp: function( unApp ) {
		this.SelectAppElement( $J('#app_option_' + unApp ) );
	},

	SelectAppElement: function( elSelected ) {
		var elActiveAppNew = elSelected.clone();
		$J('#market_advancedsearch_appselect_activeapp').empty();
		elActiveAppNew.attr( "id", elActiveAppNew.attr("id") + "_selected" );
		$J('#market_advancedsearch_appselect_activeapp').append( elActiveAppNew );

		$J('#market_advanced_search_app').remove();
		var elHiddenAppInput = $J('<input type="hidden" id="market_advanced_search_app" name="appid" value="' + elSelected.data("appid") + '"/>');
		$J('#market_advanced_search').append( elHiddenAppInput );
	},

	OnCancel: function( event ) {
		this.Dismiss();
		event.stop();
	},

	OnDocumentKeyPress: function( event ) {
		if ( event.keyCode == Event.KEY_ESC )
		{
			this.Dismiss();
			event.stop();
		}
	}
};

function ShowAdvancedSearchOptions()
{
	AdvancedSearchDialog.Show();

	if ( typeof g_rgFilterData != 'undefined' )
	{
		$J('#advancedSearchBox').val( g_strQueryText );
		var data = { facets: g_rgFilterData };
		ProcessFilterData( data );
		AdvancedSearchDialog.SelectApp( g_unFilterApp );
	}

}

function ProcessFilterData( data )
{
	var elFilters = $J('#market_advancedsearch_filters');
	elFilters.empty();
	elFilters.css( 'text-align', 'inherit' );

	var cCategories = 0;
	$J.each( data.facets, function( sCategory, oCategory ) {
		cCategories++;
	} );

	if ( cCategories > 0 )
	{
		// Do all dropdowns first
		var cDropdowns = 0;
		$J.each( data.facets, function( sCategory, oCategory ) {
			var cTags = 0;
			$J.each( oCategory.tags, function( k, oTag ) {
				cTags++;
			} );

			if ( cTags > 20 )
			{
				var elCategory = $J('<div class="econ_tag_filter_category"><div class="econ_tag_filter_category_label">' + oCategory.localized_name + '</div></div>');
				var elDropdown = $J('<select name="' + "category_" + sCategory + '[]" class=""></select>' );
				var elOption = $J('<option value="any"></option>');
				elOption.text( 'Any' );
				elDropdown.append( elOption );

				// sort the tags by name
				var rgTags = [];
				$J.each( oCategory.tags, function( k, oTag ) {
					oTag.internal_name = k;
					rgTags.push( oTag );
				} );

				if ( typeof Intl != 'undefined' && Intl.Collator )
				{
					var oCollator = new Intl.Collator();
					rgTags.sort( function(a, b) {
						return oCollator.compare( a.localized_name, b.localized_name );
					} );
				}
				else
				{
					rgTags.sort( function(a, b) {
						if ( a.localized_name < b.localized_name ) return -1;
						else if ( a.localized_name > b.localized_name ) return 1;
						else return 0;
					} );
				}

				// Put the sorted tags into the dropdown
				$J.each( rgTags, function( k, oTag ) {
					var elOption = $J('<option value="tag_'+ oTag.internal_name + '"></option>');
					elOption.text( oTag.localized_name /* + " (" + oTag.matches + ")" */ );

					if ( oTag.selected )
					{
						elOption.attr( "selected", "selected" );
					}

					elDropdown.append( elOption );
				} );

				elCategory.append( elDropdown );
				elFilters.append( elCategory );
				cDropdowns++;
			}
		} );

		if ( cDropdowns > 0 )
		{
			elFilters.append( "<br>" );
		}

		// Followed by checkboxes
		$J.each( data.facets, function( sCategory, oCategory ) {
			var cTags = 0;
			$J.each( oCategory.tags, function( k, oTag ) {
				cTags++;
			} );

			if ( cTags <= 20 )
			{
				var elCategory = $J('<div class="econ_tag_filter_category"><div class="econ_tag_filter_category_label">' + oCategory.localized_name + '</div></div>');
				$J.each( oCategory.tags, function( k, oTag ) {
					var sFilterId = 'tag_' + sCategory + '_' + k;
					var elFilterContainer = $J('<div class="econ_tag_filter_container"/>');
					var elCheckbox = $J('<input id="' + sFilterId + '" class="econ_tag_filter_checkbox" type="checkbox" name="category_' + sCategory + '[]" value="tag_' + k + '"></input>');

					if ( oTag.selected )
					{
						elCheckbox.prop( "checked", true );
					}

					elFilterContainer.append( elCheckbox );
					var elLabel = $J('<label class="econ_tag_filter_label" for="' + sFilterId + '"></label>' );
					var elLabelText = $J('<span></span>');
					elLabelText.text( oTag.localized_name );
					if ( oTag.color )
					{
						elLabelText.css( 'color', '#' + oTag.color );
					}

					elLabel.append( elLabelText );
					elFilterContainer.append( elLabel );
					//var elCount = $J('<span class="econ_tag_count"> (' + oTag.matches + ')</span>');
					//elFilterContainer.append( elCount );

					elCategory.append( elFilterContainer );
				} );
				elFilters.append( elCategory );
			}

		} );
	}
	else
	{
		elFilters.text( 'There are no filters available for this game. Click the search button to view all listings for this game.' );
	}
}

$J(function() {
	$J( '#market_advancedsearch_appselect_options_apps .popup_item').click( function() {
		HideMenu( $('market_advancedsearch_appselect'), $('market_advancedsearch_appselect_options') );
		AdvancedSearchDialog.SelectAppElement( $J(this) );

		var unAppId = $J(this).data('appid');
		var elFilters = $J('#market_advancedsearch_filters');
		if ( unAppId )
		{
			elFilters.empty();

			var elThrobber = $J('<img src="https://community.cloudflare.steamstatic.com/public/images/login/throbber.gif" alt="Loading" style="margin-top: 139px">');
			elFilters.append( elThrobber );
			elFilters.css( 'text-align', 'center' );

			$J.ajax( {
				url: 'https://steamcommunity.com/market/appfilters/' + unAppId,
				type: 'GET',
				data: {}
			} ).error( function ( ) {
				elFilters.empty();
				elFilters.css( 'text-align', 'inherit' );
				elFilters.text( 'There was a problem loading filters for this game. Refresh the page and try again.' );
			} ).success( function( data ) {
				if ( data.success )
				{
					ProcessFilterData( data );
				}
				else
				{
					elFilters.empty();
					elFilters.css( 'text-align', 'inherit' );
					elFilters.text( 'There was a problem loading filters for this game. Refresh the page and try again.' );
				}
			} );
		}
		else
		{
			elFilters.empty();
			elFilters.css( 'text-align', 'inherit' );
			elFilters.text( 'Pick a game from the drop-down list above to see the available filters.' );
			$J('#market_advanced_search_app').remove();
		}
	});
});

function ResetSearchFilters()
{
	$J('.econ_tag_filter_container input[type="checkbox"]').attr("checked", false);
	$J('.econ_tag_filter_category select').val( 'any' );
}

function WatchForSortableColumnClicks()
{
	$J( '.market_sortable_column' ).click( function() {
		if ( g_oSearchResults.m_bLoading )
			return;

		var strDesiredSortColumn = $J( this ).data( 'sorttype' );
		if ( strDesiredSortColumn == g_strSortColumn )
		{
			// Change the sort order
			if ( g_strSortDir == 'asc' )
			{
				g_strSortDir = 'desc';
			}
			else
			{
				g_strSortDir = 'asc';
			}
		}
		else
		{
			g_strSortColumn = strDesiredSortColumn;

			// When switching to sorting by quantity, default to desc
			if ( strDesiredSortColumn == 'quantity' )
			{
				g_strSortDir = 'desc';
			}
			else
			{
				g_strSortDir = 'asc';
			}
		}

		UpdateSortArrows();
		g_oSearchResults.GoToPage( 0, true );
	} );
}

function UpdateSortArrows()
{
	$J('#searchResultsTable').find( '.market_sort_arrow' ).hide();
	var elArrow = $J("#searchResultsTable [data-sorttype='" + g_strSortColumn + "']").find( '.market_sort_arrow' );
	elArrow.show();
	if ( g_strSortDir == 'asc' )
		elArrow.html( '&#9650' );
	else
		elArrow.html( '&#9660' );
}

var g_nMillisPopularRefresh = 1900;
var g_bMarketWindowHidden = false;
var g_nUpdatesQueued = 0;

function CreatePopularItemClosure( item )
{
	return function() {
		g_nUpdatesQueued--;

		var elResult = $J('.market_listing_searchresult[data-appid=' + item.appid + '][data-hash-name="' + item.hash_name.replace( /"/g, "\\\"" ) + '"]' );

		if ( elResult.length )
		{
			var elQuantity = elResult.find( '.market_listing_num_listings_qty' );
			var elPrice = elResult.find( '.market_listing_their_price .market_table_value > span.normal_price ' );

			// Update values and apply some effects for values that changed
			if ( elQuantity.data( 'qty' ) != item.sell_listings )
			{
				elQuantity.html( item.sell_listings.toLocaleString() );
				elQuantity.data( 'qty', item.sell_listings );

				elQuantity.css( 'color', '#fff' );
				elQuantity.animate({
					color: "#828282"
				}, 900 );
			}

			if ( elPrice.data( 'price' ) != item.sell_price )
			{
				var elArrow = null;
				if ( item.sell_price > elPrice.data( 'price' ) )
				{
					elArrow = elResult.find( '.market_arrow_up' );
				}
				else
				{
					elArrow = elResult.find( '.market_arrow_down' );
				}

				var position = elPrice.position();
				position.top -= elPrice.height();
				position.left += elPrice.width() + 2;
				elArrow.css( 'top', position.top );
				elArrow.css( 'left', position.left );
				elArrow.stop();
				elArrow.show();
				elArrow.fadeOut( 900 );

				var sCurrencyCode = GetCurrencyCode( g_nWalletCurrency );
				elPrice.html( v_currencyformat( item.sell_price, sCurrencyCode, g_strCountryCode ) );
				elPrice.data( 'price', item.sell_price );
			}
		}
	};
}

function v_shuffle( rgArray )
{
	for ( var i = 0; i < rgArray.length; i++ )
	{
		var newIdx = parseInt( Math.random() * ( rgArray.length - i ) + i );
		if ( newIdx != i )
		{
			var tmp = rgArray[newIdx];
			rgArray[newIdx] = rgArray[i];
			rgArray[i] = tmp;
		}
	}

	return rgArray;
}

var g_bWaitingOnWebSocketRetry = false
function SubscribeToPopularItemUpdates()
{
	g_bWaitingOnWebSocketRetry = false;
	if ( !("WebSocket" in window) )
	{
		console.log( "No web socket support" );
		return;
	}

	var socket = new WebSocket( g_strWebSocketURL );

	socket.onopen = function() {
		var subscribe = { message: "subscribe", seqnum: 1, feed: g_strPopularFeed };
		socket.send( JSON.stringify( subscribe )  );
	};

	socket.onerror = function() {
		var cmsRetry = 90000 + Math.floor(Math.random() * 60000);
		console.log( "WebSocket error. Retry in " + cmsRetry + "ms." );
		try
		{
			socket.close();
		}
		catch ( exception )
		{
		}

		if ( !g_bWaitingOnWebSocketRetry )
		{
			g_bWaitingOnWebSocketRetry = true;
			setTimeout( SubscribeToPopularItemUpdates, cmsRetry );
		}
	};

	socket.onclose = function() {
		if ( !g_bWaitingOnWebSocketRetry )
		{
			g_bWaitingOnWebSocketRetry = true;

			var cmsRetry = 90000 + Math.floor( Math.random() * 60000 );
			console.log( "WebSocket closed. Retry in " + cmsRetry + "ms." );
			setTimeout( SubscribeToPopularItemUpdates, cmsRetry );
		}
	};

	socket.onmessage = function( oMessage ) {
		var data = $J.parseJSON( oMessage.data );
		if ( data && data.message && data.message == "feedupdate" )
		{
			if ( data.feed == g_strPopularFeed )
			{
				var feed = $J.parseJSON( data.data );
				if ( !feed || !feed.items )
				{
					return;
				}

				var nMilliToWaitForRowUpdate = 0;
				var rgItems = v_shuffle( feed.items );

				for ( var i = 0; i < rgItems.length; i++ )
				{
					// Don't update if we're too far behind
					if ( g_nUpdatesQueued <= 20 && !g_bMarketWindowHidden )
					{
						g_nUpdatesQueued++;
						setTimeout( CreatePopularItemClosure( rgItems[i] ), nMilliToWaitForRowUpdate );
						nMilliToWaitForRowUpdate += ( g_nMillisPopularRefresh / rgItems.length );
					}
				}
			}
		}
	};
}

function ShowAllGames()
{
	var $elMoreGames = $J('.market_more_games');
	$elMoreGames.css( 'visibility', 'visible' );
	$elMoreGames.css( 'height', $elMoreGames.prop( 'scrollHeight' ) );
	setTimeout(
		function() {
			$J('.market_show_more_games').hide();
		}, 300
	);
}

RegisterSteamOnWebPanelShownHandler( function() { g_bMarketWindowHidden = false; } );
RegisterSteamOnWebPanelHiddenHandler( function() { g_bMarketWindowHidden = true; } );

// ajax's in the some html describing the current orders
var Market_OrderSpreadPlot = null;
var Market_OrderSpreadPlotLastRefresh = 0;
function Market_LoadOrderSpread( item_nameid )
{
	$J.ajax( {
		url: 'https://steamcommunity.com/market/itemordershistogram',
		type: 'GET',
		data: {
			country: g_strCountryCode,
			language: g_strLanguage,
			currency: typeof( g_rgWalletInfo ) != 'undefined' && g_rgWalletInfo['wallet_currency'] != 0 ? g_rgWalletInfo['wallet_currency'] : 1,
			item_nameid: item_nameid,
			two_factor: BIsTwoFactorEnabled() ? 1 : 0
		}
	} ).error( function ( ) {
	} ).success( function( data ) {
		if ( data.success == 1 )
		{
			$J('#market_commodity_forsale').html( data.sell_order_summary );
			$J('#market_commodity_forsale_table').html( data.sell_order_table );
			$J('#market_commodity_buyrequests').html( data.buy_order_summary );
			$J('#market_commodity_buyreqeusts_table').html( data.buy_order_table );

			// set in the purchase dialog the default price to buy things (which should almost always be the price of the cheapest listed item)
			if ( data.lowest_sell_order && data.lowest_sell_order > 0 )
				CreateBuyOrderDialog.m_nBestBuyPrice = data.lowest_sell_order;
			else if ( data.highest_buy_order && data.highest_buy_order > 0 )
				CreateBuyOrderDialog.m_nBestBuyPrice = data.highest_buy_order;

			// update the jplot graph
			// we do this infrequently, since it's really expensive, and makes the page feel sluggish
			var $elOrdersHistogram = $J('#orders_histogram');
			if ( Market_OrderSpreadPlotLastRefresh
			&& Market_OrderSpreadPlotLastRefresh + (60*60*1000) < $J.now()
			&& $elOrdersHistogram.length )
			{
				$elOrdersHistogram.html('');
				Market_OrderSpreadPlot = null;
			}

			if ( Market_OrderSpreadPlot == null && $elOrdersHistogram.length )
			{
				Market_OrderSpreadPlotLastRefresh = $J.now();

				$elOrdersHistogram.show();
				var line1 = data.sell_order_graph;
				var line2 = data.buy_order_graph;
				var numXAxisTicks = null;
				if ( $J(window).width() < 400 )
				{
					numXAxisTicks = 3;
				}
				else if ( $J(window).width() < 600 )
				{
					numXAxisTicks = 4;
				}

				var numYAxisTicks = 11;
				var strFormatPrefix = data.price_prefix;
				var strFormatSuffix = data.price_suffix;
				var lines = [ line1, line2 ];

				Market_OrderSpreadPlot = $J.jqplot('orders_histogram', lines, {
					renderer: $J.jqplot.BarRenderer,
					rendererOptions: {fillToZero: true},
					title:{text: 'Buy and Sell Orders (cumulative)', textAlign: 'left' },
					gridPadding:{left: 45, right:45, top:45},
					axesDefaults:{ showTickMarks:false },
					axes:{
						xaxis:{
							tickOptions:{formatString:strFormatPrefix + '%0.2f' + strFormatSuffix, labelPosition:'start', showMark: false},
							numberTicks: numXAxisTicks,
							min: data.graph_min_x,
							max: data.graph_max_x
						},
						yaxis: {
							pad: 1,
							tickOptions:{formatString:'%d'},
							numberTicks: numYAxisTicks,
							min: 0,
							max: data.graph_max_y
						}
					},
					grid: {
						gridLineColor: '#1b2939',
						borderColor: '#1b2939',
						background: '#101822'
					},
					cursor: {
						show: true,
						zoom: true,
						showTooltip: false
					},
					highlighter: {
						show: true,
						lineWidthAdjust: 2.5,
						sizeAdjust: 5,
						showTooltip: true,
						tooltipLocation: 'n',
						tooltipOffset: 20,
						fadeTooltip: true,
						yvalues: 2,
						formatString: "<span style=\"display: none\">%s%s</span>%s"
					},
					series: [{lineWidth:3, fill: true, fillAndStroke:true, fillAlpha: 0.3, markerOptions:{show: false, style:'circle'}}, {lineWidth:3, fill: true, fillAndStroke:true, fillAlpha: 0.3, color:'#6b8fc3', markerOptions:{show: false, style:'circle'}}],
					seriesColors: [ "#688F3E" ]
				});
			}
		}
	} );
}

// keeps track of the state we have showing ticks
ItemActivityTicker = {
	m_llItemNameID: null,
	m_rgActivity: [],
	m_nActivityIndexNext: 0,
	m_bStartedUpdate: false,
	m_nTickerAdvanceRate: 0,
	m_rgActivityShown: [],
	m_nTimeLastLoaded: 0,

	Start: function( item_nameid ) {
		this.m_llItemNameID = item_nameid;
		this.Load();
		PollOnUserActionAfterInterval( 'ItemActivityTicker' + item_nameid, 10000, $J.proxy( this.Load, this ), 2 * 60 * 1000 );
	},

	Load: function() {
		$J.ajax( {
			url: 'https://steamcommunity.com/market/itemordersactivity',
			type: 'GET',
			data: {
				country: g_strCountryCode,
				language: g_strLanguage,
				currency: typeof( g_rgWalletInfo ) != 'undefined' && g_rgWalletInfo['wallet_currency'] != 0 ? g_rgWalletInfo['wallet_currency'] : 1,
				item_nameid: this.m_llItemNameID,
				two_factor: BIsTwoFactorEnabled() ? 1 : 0
			}
		} ).fail( function( jqxhr ) {
		} ).done( function( data ) {
			if ( data.success == 1 )
			{
				if ( data.timestamp > ItemActivityTicker.m_nTimeLastLoaded )
				{
					ItemActivityTicker.m_nTimeLastLoaded = data.timestamp;
					ItemActivityTicker.Update( data.activity );
				}
			}
		} );
	},

	Update: function( rgActivity ) {
		if ( rgActivity.length == 0 )
			return;

		// set the new list
		this.m_nActivityIndexNext = 0;
		this.m_rgActivity = rgActivity;

		// spread the updates out over 10 seconds
		this.m_nTickerAdvanceRate = 10000 / Math.max(rgActivity.length-2,1);

		// but no more than one every 1.5 seconds
		this.m_nTickerAdvanceRate = Math.max( this.m_nTickerAdvanceRate, 1500 );

		if ( !this.m_bStartedUpdate )
		{
			this.m_bStartedUpdate = true;
			this.AdvanceTicker();
			$J('#market_activity_waiting_text').hide();
		}
	},

	AdvanceTicker: function() {
		// don't update if the dialog is open
		if ( CreateBuyOrderDialog.m_bActive )
		{
			setTimeout( function() { ItemActivityTicker.AdvanceTicker(); }, this.m_nTickerAdvanceRate );
			return;
		}

		if ( this.m_nActivityIndexNext >= this.m_rgActivity.length )
		{
			this.m_bStartedUpdate = false;
			return;
		}

		// hide the old item
		if ( this.m_rgActivityShown.length > 0 )
		{
			var line_item = this.m_rgActivityShown.shift();

			// animate thie item up
			$J(line_item).animate( {'margin-top':'-40px','opacity':'0'}, 300, 'swing', function() { $J(line_item).remove(); } );
		}

		// add back items
		while ( this.m_rgActivityShown.length < 3 && this.m_nActivityIndexNext < this.m_rgActivity.length )
		{
			var newObj = jQuery.parseHTML( this.m_rgActivity[this.m_nActivityIndexNext] );
			this.m_nActivityIndexNext += 1;
			this.m_rgActivityShown.push( newObj );
			$J('#market_activity_block').append( newObj ).fadeIn( 300 );
		}

		setTimeout( function() { ItemActivityTicker.AdvanceTicker(); }, this.m_nTickerAdvanceRate );
	}
};

function Market_SetActiveLisitingsPerPage( cListings )
{
	var bDecreasing = g_nMySellListingsPageSize > cListings;
	g_nMySellListingsPageSize = cListings;
	SetCookie( 'ActListPageSize', cListings, 365, '/market' );
	RefreshMyMarketListings( bDecreasing );
}

$J(function() {
	$$('a.tooltip').each( function( elem ) {
		if ( elem.hasClassName( "locked" ) )
		{
			InstallHoverTooltip( elem, $('locked_tooltip') );
		}
		else if ( elem.hasClassName( "banned" ))
		{
			InstallHoverTooltip( elem, $('banned_tooltip') );
		}
		else if ( elem.hasClassName( "trusted" ))
		{
			InstallHoverTooltip( elem, $('trusted_tooltip') );
		}
		else if ( elem.hasClassName( "pwreset" ))
		{
			InstallHoverTooltip( elem, $('pwreset_tooltip') );
		}
		else if ( elem.hasClassName( "cookie" ))
		{
			InstallHoverTooltip( elem, $('cookie_tooltip') );
		}
		else if ( elem.hasClassName( "newdevice" ))
		{
			InstallHoverTooltip( elem, $('newdevice_tooltip') );
		}
		else if ( elem.hasClassName( "limiteduser" ))
		{
			InstallHoverTooltip( elem, $('limiteduser_tooltip') );
		}
		else if ( elem.hasClassName( "selfrefund" ))
		{
			InstallHoverTooltip( elem, $('selfrefund_tooltip') );
		}
		else if ( elem.hasClassName( "sgdisabled" ))
		{
			InstallHoverTooltip( elem, $('sgdisabled_tooltip') );
		}
		else if ( elem.hasClassName( "sgrecent" ))
		{
			InstallHoverTooltip( elem, $('sgrecent_tooltip') );
		}
		else if ( elem.hasClassName( "trustedwaiting" ))
		{
			InstallHoverTooltip( elem, $('trustedwaiting_tooltip') );
		}
	} );
} );

