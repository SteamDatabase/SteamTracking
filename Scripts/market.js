
RemoveListingDialog = {
	m_bOKClicked: false,
	m_bInitialized: false,

	m_oListingOriginalRow: null,
	m_ulListingId: false,
	m_fnDocumentKeyHandler: null,
	
	Initialize: function() {
		$('market_removelisting_dialog_accept').observe( 'click', this.OnAccept.bindAsEventListener(this) );
		$('market_removelisting_dialog_cancel').observe( 'click', this.OnCancel.bindAsEventListener(this) );
	},

	Show: function ( sElementPrefix, listingid, item ) {
		if ( !this.m_bInitialized )
			this.Initialize();

		this.m_bOKClicked = false;
		this.m_oListingOriginalRow = $(sElementPrefix + '_' + listingid);
		this.m_ulListingId = listingid;

		$('market_removelisting_dialog_error').hide();
		$('market_removelisting_dialog_accept').show();
		$('market_removelisting_dialog_accept_throbber').hide();

		var oItemName = Element.clone( $(sElementPrefix + '_' + listingid + '_name'), true );
		$('market_removelisting_dialog_itemname').innerHTML = '';
		$('market_removelisting_dialog_itemname').appendChild( oItemName );

		this.m_fnDocumentKeyHandler = this.OnDocumentKeyPress.bindAsEventListener( this );
		$(document).observe( 'keydown', this.m_fnDocumentKeyHandler );

		showModal( 'market_removelisting_dialog', true );
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
		hideModal( 'market_removelisting_dialog' );
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
		$('market_removelisting_dialog_accept_throbber').show();
		$('market_removelisting_dialog_accept_throbber').fade({ duration: 0.25, from: 0, to: 1 });
		
		var listingid = this.m_ulListingId;
		new Ajax.Request( 'http://steamcommunity.com/market/removelisting/' + listingid, {
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
		if ( $('my_market_activelistings_number') )
			$('my_market_activelistings_number').update( parseInt($('my_market_activelistings_number').innerHTML)-1 );
		if ( $('my_market_selllistings_number') )
			$('my_market_selllistings_number').update( parseInt($('my_market_selllistings_number').innerHTML)-1 );

		// Remove any listing rows
		$$('.listing_' + this.m_ulListingId).each( function( oListingRow ) {
			oListingRow.remove();
		} );

		var queue = Effect.Queues.get('global');
		queue.each(function(effect) { effect.cancel(); });

		$('market_removelisting_dialog_accept').hide();
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
}

function RemoveMarketListing( sElementPrefix, listingid, appid, contextid, itemid )
{
	RemoveListingDialog.Show( sElementPrefix, listingid, g_rgAssets[appid][contextid][itemid] );
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
		if ( rgListing['converted_fee'] > 0 )
		{
			this.m_nSubtotal = rgListing['converted_price'];
			this.m_nFeeAmount = rgListing['converted_fee'];
			this.m_nTotal = rgListing['converted_price'] + rgListing['converted_fee'];

			var nFeePublisher = rgListing['converted_publisher_fee'];
			var nFeeSteam = rgListing['converted_steam_fee'];

			if ( this.m_nFeeAmount != nFeePublisher + nFeeSteam || this.m_nTotal != this.m_nSubtotal + nFeePublisher + nFeeSteam )
			{
				alert( "An unexpected error occurred trying to show the purchase dialog. Error: " + listingid + " " + this.m_nTotal + " " + this.m_nSubtotal + " " + this.m_nFeeAmount + " " + nFeePublisher + " " + nFeeSteam );
				return;
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
			this.m_nSubtotal = rgListing['converted_price'];
			this.m_nFeeAmount = 0;
			this.m_nTotal = rgListing['converted_price'];
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
				HandleMarketActionMenu( oItemActionMenuButton, g_rgAssets[rgAsset.appid][rgAsset.contextid][rgAsset.id] );

				return false;
			} );
		}

		var oItemName = oListingRow.select('.market_listing_item_name').first();
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

		showModal( 'market_buynow_dialog', true );
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
		hideModal( 'market_buynow_dialog' );
	},

	OnAddFunds: function( event ) {
		event.stop();

		window.location = 'http://store.steampowered.com/steamaccount/addfunds?marketlisting=' + this.m_ulListingId + '&returnurl=' + this.m_sAddFundsReturnURL;
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

		this.m_bPurchaseClicked = true;
		$('market_buynow_dialog_error').hide();

		$('market_buynow_dialog_purchase_throbber').clonePosition( $('market_buynow_dialog_purchase') );
		$('market_buynow_dialog_purchase').fade({ duration: 0.25 });
		$('market_buynow_dialog_purchase_throbber').show();
		$('market_buynow_dialog_purchase_throbber').fade({ duration: 0.25, from: 0, to: 1 });

		var listingid = this.m_ulListingId;

		$J.ajax( {
			url: 'https://steamcommunity.com/market/buylisting/' + listingid,
			type: 'POST',
			data: {
				sessionid: g_sessionID,
				currency: g_rgWalletInfo['wallet_currency'],
				subtotal: this.m_nSubtotal,
				fee: this.m_nFeeAmount,
				total: this.m_nTotal
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
					.replace( '%3$s', 'a href="http://steamcommunity.com/my/inventory/"' )
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
}

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

	for( appid in newAssets )
	{
		for ( contextid in newAssets[appid] )
		{
			for ( assetid in newAssets[appid][contextid] )
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

	for( listingid in newListings )
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

	for ( appid in newAppData )
	{
		if ( typeof g_rgAppContextData[appid] == 'undefined' )
		{
			g_rgAppContextData[appid] = newAppData[appid];
		}
	}
}

var g_bBusyLoadingMore = false;
function MoreRecentListingsLink( id, type, rows )
{
	var elShowMore = $(id);
	var elRows = $(rows);
	elShowMore.observe( 'click', function( event ) {
		event.stop();
		if ( g_bBusyLoadingMore )
		{
			return;
		}

		g_bBusyLoadingMore = true;
		new Ajax.Request( 'http://steamcommunity.com/market/recent', {
			method: 'get',
			parameters: {
				time: g_rgRecents[type]['time'],
				listing: g_rgRecents[type]['listing']
			},
			onSuccess: function( transport ) {
				if ( transport.responseJSON )
				{
					var response = transport.responseJSON;

					if ( response.assets.length != 0 )
					{
						g_rgRecents[type]['time'] = response.last_time;
						g_rgRecents[type]['listing'] = response.last_listing;

						elRows.insert( { 'bottom' : response.results_html } );
						
						MergeWithAssetArray( response.assets );
						MergeWithListingInfoArray( response.listinginfo );
						MergeWithAppDataArray( response.app_data );
						eval( response.hovers );
					}

					if ( !response.more || response.assets.length == 0 )
					{
						elShowMore.hide();
					}
				}
			},
			onComplete: function() { g_bBusyLoadingMore = false; }
		});
	});
}

var g_bBusyLoadingRecentCompleted = false;
var g_bLoadedRecentCompleted = false;
function LoadRecentCompletedListings( )
{
	var elRows = $('soldListingRows');
	if ( g_bBusyLoadingRecentCompleted || g_bLoadedRecentCompleted )
	{
		return;
	}

	g_bBusyLoadingRecentCompleted = true;
	new Ajax.Request( 'http://steamcommunity.com/market/recentcompleted', {
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

					elRows.insert( { 'bottom' : response.results_html } );

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
var g_oMyHistory = null;
function RefreshMyMarketListings()
{
	if ( g_bBusyLoadingMyMarketListings )
	{
		return;
	}

	g_bBusyLoadingMyMarketListings = true;
	var elMyMarketListings = $('tabContentsMyListings');
	new Ajax.Request( 'http://steamcommunity.com/market/mylistings', {
		method: 'get',
		parameters: {
		},
		onSuccess: function( transport ) {
			if ( transport.responseJSON )
			{
				var response = transport.responseJSON;

				elMyMarketListings.innerHTML = response.results_html;
				$('my_market_activelistings_number').update( response.num_active_listings );

				MergeWithAssetArray( response.assets );
				eval( response.hovers );
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
	new Ajax.Request( 'http://steamcommunity.com/market/myhistory', {
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
						}, 'http://steamcommunity.com/market/myhistory/'
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
		ShowModalContent('http://steamcommunity.com/my/inventory/?modal=1&market=1&sellOnLoad=1#' + strAsset, 'Choose an item from your inventory', 'http://steamcommunity.com/my/inventory/?modal=1&market=1&sellOnLoad=1#' + strAsset, false);
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
		elNewAction.attr( 'href', rgAction.link.replace("%assetid%", item.id) );

		if ( rgAction.link.substr( 0, 6 ) != "steam:" )
		{
			elNewAction.attr( 'target', '_blank' );
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

function SSAPopup()
{
		var win = window.open( 'http://store.steampowered.com/checkout/ssapopup','steam_ssa','width=536,height=546,resize=yes,scrollbars=yes');
	win.focus();
}

function ShowAdvancedSearchOptions()
{
	$J('#market_search_advanced_show').hide();
	$J('#market_search_advanced_hide').show();
	$J('#market_search_advanced').show();
}

function HideAdvancedSearchOptions()
{
	$J('#market_search_advanced_show').show();
	$J('#market_search_advanced_hide').hide();
	$J('#market_search_advanced').hide();
}

var g_nMillisPopularRefresh = 2000;

function CreatePopularItemClosure( data, iLink )
{
	return function() {
		var elOldLink = $J('#resultlink_' + iLink)

		// Don't do anything if none of the data changed
		if ( g_rgPreviousPopularData == null ||
			( data.data[iLink].sell_listings == g_rgPreviousPopularData[iLink].sell_listings && data.data[iLink].sell_price == g_rgPreviousPopularData[iLink].sell_price && data.data[iLink].name == g_rgPreviousPopularData[iLink].name ) )
		{
			return;
		}

		var elNewLink = $J(data.results_html[iLink]);

		// If the item name changed, replace the whole row
		if ( data.data[iLink].name != g_rgPreviousPopularData[iLink].name )
		{
			elOldLink.empty();
			elOldLink.append( elNewLink.children() );

			// The link destination can change
			if ( elOldLink.attr("href") != elNewLink.attr("href") )
			{
				elOldLink.attr("href", elNewLink.attr("href") );
			}
		}
		else
		{
			// Just update the number of listings and price
			if ( data.data[iLink].sell_listings != g_rgPreviousPopularData[iLink].sell_listings )
			{
				var elQuantity = elOldLink.find( '.market_listing_num_listings_qty' );
				var elNewQuantity = elNewLink.find( '.market_listing_num_listings_qty' );
				elQuantity.html( elNewQuantity.html() );
			}

			if ( data.data[iLink].sell_price != g_rgPreviousPopularData[iLink].sell_price )
			{
				var elPrice = elOldLink.find( '.market_listing_their_price .market_table_value > span ' );
				var elNewPrice = elNewLink.find( '.market_listing_their_price .market_table_value > span ' );
				elPrice.html( elNewPrice.html() );
			}
		}

		// Apply some effects for values that changed
		if ( data.data[iLink].sell_listings != g_rgPreviousPopularData[iLink].sell_listings )
		{
			var elQuantity = elOldLink.find( '.market_listing_num_listings_qty' );
			elQuantity.css( 'color', '#fff' );
			elQuantity.animate({
				color: "#828282"
			}, 900 );
		}

		if ( data.data[iLink].sell_price != g_rgPreviousPopularData[iLink].sell_price )
		{
			var elArrow = null;
			var elPrice = elOldLink.find( '.market_listing_their_price .market_table_value > span ' );

			if ( data.data[iLink].sell_price > g_rgPreviousPopularData[iLink].sell_price )
			{
				elArrow = elOldLink.find( '.market_arrow_up' );
			}
			else
			{
				elArrow = elOldLink.find( '.market_arrow_down' );
			}

			var position = elPrice.position();
			position.top -= elPrice.height();
			position.left += elPrice.width() + 2;
			elArrow.css( 'top', position.top );
			elArrow.css( 'left', position.left );
			elArrow.stop();
			elArrow.show();
			elArrow.fadeOut( 900 );
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

function UpdateFrontPage()
{
	$J.ajax( {
		url: 'http://steamcommunity.com/market/popular',
		type: 'GET',
		data: {
			country: g_strCountryCode,
			language: g_strLanguage,
			currency: typeof( g_rgWalletInfo ) != 'undefined' ? g_rgWalletInfo['wallet_currency'] : 1,
			count: g_nResultCount
		}
	} ).error( function ( ) {
		setTimeout( UpdateFrontPage, g_nMillisPopularRefresh );
	} ).success( function( data ) {
		var nMilliToWaitForRowUpdate = 0;

		// Build a list of rows to be updated
		var rgElems = [];
		for ( var i = 0; i < data.results_html.length; i++ )
		{
			rgElems.push( i );
		}

		// Update those rows randomly
		rgElems = v_shuffle( rgElems );

		for ( var i = 0; i < rgElems.length; i++ )
		{
			setTimeout( CreatePopularItemClosure(data, rgElems[i]), nMilliToWaitForRowUpdate );
			nMilliToWaitForRowUpdate += ( g_nMillisPopularRefresh / data.results_html.length );
		}

		setTimeout(
			function() {
				g_rgPreviousPopularData = data.data;
				UpdateFrontPage();
			}, nMilliToWaitForRowUpdate
		);
	} );
}