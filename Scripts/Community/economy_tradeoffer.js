

function BeginTradeOffer( nTradeOfferID, bShowTutorial )
{
	g_bTradeOffer = true;

	// have the TradeOfferStateManager handle all trade updates
	GTradeStateManager = CTradeOfferStateManager;
	GTradeStateManager.InitCaptcha();
	Tutorial = new CTradeOfferTutorial();


	// set up the textarea for the note and events to advance tutorial when note is added
	if ( $('trade_offer_note') )
	{
		new CAutoSizingTextArea( $('trade_offer_note'), 82 );
		var fnCheckNote =  function() {
			if ( this.value.length > 0 )
				Tutorial.OnUserEnteredNote();
		};
		$J('#trade_offer_note').on( 'change keyup', fnCheckNote );
		$J('#trade_offer_note').on( 'keypress', function( event ) { if ( event.which == 13 ) return false; else return true;} );
	}

	if ( nTradeOfferID )
	{
		// viewing an existing trade offer
		g_bReadOnly = true;
		GTradeStateManager.m_eTradeOfferState = CTradeOfferStateManager.TRADE_OFFER_STATE_VIEW;
		GTradeStateManager.m_nTradeOfferID = nTradeOfferID;


		$('you_notready').addClassName('short');
		$('you_ready').addClassName('short');

		$('tradeoffer_addmessage') && $('tradeoffer_addmessage').hide();
	}

	BeginTrading( bShowTutorial );

	RefreshTradeStatus( g_rgCurrentTradeStatus );

	UpdateDisplayForActiveUser();
}

function GetOptionsDivForActiveUser()
{
	if ( g_ActiveUser == UserThem )
	{
		return 'appselect_them_options';
	}

	return 'appselect_you_options';
}

$J( function() {
	g_ActiveUser = UserYou;

	
	$J('#inventory_select_your_inventory').click( function( event ) {
		if ( g_ActiveInventory && g_ActiveInventory.appid && UserYou.GetContext( g_ActiveInventory.appid, g_ActiveInventory.contextid ) )
			TradePageSelectInventory( UserYou, g_ActiveInventory.appid, g_ActiveInventory.contextid, g_ActiveUser != UserYou /* force when flipping */ );
		else
		{
			g_ActiveUser = UserYou;
			TradePageSelectNoInventory( g_ActiveUser );
		}
		$J('#inventory_box' ).removeClass('their_inventory_active' ).addClass('your_inventory_active');

		UpdateDisplayForActiveUser();

		return false;
	} );

	$J('#inventory_select_their_inventory').click( function( event ) {
		if ( g_ActiveInventory && g_ActiveInventory.appid && UserThem.GetContext( g_ActiveInventory.appid, g_ActiveInventory.contextid ) )
			TradePageSelectInventory( UserThem, g_ActiveInventory.appid, g_ActiveInventory.contextid, g_ActiveUser != UserThem /* force if flipping */ );
		else
		{
			g_ActiveUser = UserThem;
			TradePageSelectNoInventory( g_ActiveUser );
		}
		$J('#inventory_box' ).removeClass('your_inventory_active' ).addClass('their_inventory_active');

		UpdateDisplayForActiveUser();

		return false;
	} );
} );

function UpdateDisplayForActiveUser()
{
	HideMenu( $('appselect'), $('appselect_you_options') );
	HideMenu( $('appselect'), $('appselect_them_options') );

	var active = ( g_ActiveUser == UserYou ? 'your' : 'their' );
	var inactive = ( g_ActiveUser == UserYou ? 'their' : 'your' );

	$J('#inventory_select_' + active + '_inventory').addClass('active');
	$J('#inventory_select_' + inactive + '_inventory').removeClass('active');

	if ( g_ActiveUser == UserYou )
	{
		$J('#trade_area > .trade_box_bgheader').addClass('active');
		$J('#trade_items_separator').css( 'visibility', 'visible' );
		$J('#trade_theirs_active').hide();
	}
	else
	{
		$J('#trade_area > .trade_box_bgheader').removeClass('active');
		$J('#trade_items_separator').css( 'visibility', 'hidden' );
		$J('#trade_theirs_active').show();
	}
}

function ConfirmTradeOffer()
{
	if ( !UserYou.bReady )
		return;

	if ( g_bConfirmPending )
		return;

	GTradeStateManager.ConfirmTradeOffer();
}

function StartCounterOffer()
{
	GTradeStateManager.StartCounterOffer();
}

function DeclineTradeOffer()
{
	if ( GTradeStateManager.m_eTradeOfferState != CTradeOfferStateManager.TRADE_OFFER_STATE_VIEW || g_bConfirmPending )
		return;

	ShowConfirmDialog(
		'Decline Trade',
		'Are you sure you want to decline this trade offer?',
		'Decline Trade'
	).done( function() {
		GTradeStateManager.DeclineTradeOffer();
	} );
}

function DismissTradeOfferWindow()
{
	var bConfirm = false;
	if ( ( g_cMyItemsInTrade > 0 || g_cTheirItemsInTrade > 0 || g_cCurrenciesInTrade > 0 ) &&
		GTradeStateManager.m_eTradeOfferState != CTradeOfferStateManager.TRADE_OFFER_STATE_VIEW )
	{
		var strConfirmMessage = 'Are you sure you want to cancel this trade offer?  Any changes will not be saved.';
		if ( this.m_eTradeOfferState == CTradeOfferStateManager.TRADE_OFFER_STATE_COUNTEROFFER )
			strConfirmMessage = 'Are you sure you want to cancel this trade offer?' + '<br><br>' + 'Any changes will not be saved.  You will still be able to accept, decline, or counter this trade offer at a later time.';

		ShowConfirmDialog(
			'Cancel Trade Offer',
			strConfirmMessage,
			'Yes',
			'No'
		).done( function() {
			EndTradeOffer();
		});
	}
	else
	{
		EndTradeOffer();
	}
}

function MessageWindowOpener( msg )
{
		try {
		window.opener.postMessage( msg, 'http://steamcommunity.com/' );
		return;
	} catch ( e ) {}
	try {
		window.opener.postMessage( msg, 'https://steamcommunity.com/' );
	} catch ( e ) {}
}

// URL is optional and is where we'll go if this isn't a popup for some reason.
//	if bSendOpenerToURL is true, then we will always send the window that opened the popup to that URL.
function EndTradeOffer( url, bSendOpenerToURL )
{
	// window.opener does not work in the steam client or overlay
	if ( window.opener && window.opener.postMessage )
	{
		if ( bSendOpenerToURL )
		{
			MessageWindowOpener( {type: 'location', url: url } );
		}
		window.close();
	}
	else
	{
		if ( !url )
			url = UserYou.GetProfileURL() + '/tradeoffers/';

		if ( Steam.BIsUserInSteamClient() )
		{
			url = 'steam://openurl/' + url;

			// give the steam:// url time to process
			window.setTimeout( function() { window.close(); }, 1 );
		}

		//overlay (or any browser where we didn't have an opener, eg direct navigation) will follow this route
		window.location = url;
	}
}

CTradeOfferStateManager = {

	TRADE_OFFER_STATE_NEW: 0,
	TRADE_OFFER_STATE_VIEW: 1,
	TRADE_OFFER_STATE_COUNTEROFFER: 2,

	m_nTradeOfferID: 0,
	m_eTradeOfferState: 0,	/* TRADE_OFFER_STATE_NEW */
	m_bChangesMade: false,
	m_rgTradeOfferCreateParams: {},
	m_bCaptchaReady: true,
	m_Recaptcha: null,
	m_nPollIntervalId: 0,

	SetTradeOfferCreateParams: function( rgParams )
	{
		$J.extend( this.m_rgTradeOfferCreateParams, rgParams );
	},

	RemoveItemFromTrade: function( item )
	{
		var slots = item.is_their_item ? g_rgCurrentTradeStatus.them : g_rgCurrentTradeStatus.me;

		var bChanged = false;
		for ( var i = 0; i < slots.assets.length; i++ )
		{
			var rgAsset = slots.assets[i];
			if ( rgAsset.appid == item.appid && rgAsset.contextid == item.contextid && rgAsset.assetid == item.id )
			{
				slots.assets.splice( i, 1 );
				bChanged = true;
				break;
			}
		}

		if ( bChanged )
		{
			this.m_bChangesMade = true;
			this.UpdateTradeStatus();
		}
	},

	SetAssetOrCurrencyInTrade: function( item, xferAmount, is_currency )
	{
		var userslots = item.is_their_item ? g_rgCurrentTradeStatus.them : g_rgCurrentTradeStatus.me;
		var slots = is_currency ? userslots.currency : userslots.assets;

		// find existing element
		var iExistingElement = -1;
		var bChanged = false;
		for ( var i = 0; i < slots.length; i++ )
		{
			var rgSlotItem = slots[i];
			if ( rgSlotItem.appid == item.appid && rgSlotItem.contextid == item.contextid &&
				( ( is_currency ? rgSlotItem.currencyid : rgSlotItem.assetid ) == item.id ) )
			{
				iExistingElement = i;
				if ( xferAmount == 0 )
				{
					slots.splice( i, 1 );
					bChanged = true;
				}
				break;
			}
		}

		if ( xferAmount > 0 )
		{
			if ( iExistingElement != -1 )
			{
				if ( slots[iExistingElement].amount != xferAmount )
				{
					slots[iExistingElement].amount = xferAmount;
					bChanged = true;
				}
			}
			else
			{
				var oSlot = {
					appid: item.appid,
					contextid: item.contextid,
					amount: xferAmount
				};
				if ( is_currency )
					oSlot.currencyid = item.id;
				else
					oSlot.assetid = item.id;

				slots.push( oSlot );
				bChanged = true;
			}
		}

		if ( bChanged )
		{
			this.m_bChangesMade = true;
			this.UpdateTradeStatus();
		}
	},

	SetCurrencyInTrade: function( currency, xferAmount )
	{
		this.SetAssetOrCurrencyInTrade( currency, xferAmount, true );
	},


	SetItemInTrade: function( item, slot, xferAmount )
	{
		this.SetAssetOrCurrencyInTrade( item, xferAmount || 1, false );
	},

	ToggleReady: function( bReady )
	{
	},

	SetCaptchaReady: function( bReady )
	{
		if ( bReady != this.m_bCaptchaReady )
		{
			this.m_bCaptchaReady = bReady;
			this.UpdateConfirmButtonStatus();

			if ( bReady && this.m_nPollIntervalId )
			{
				clearInterval( this.m_nPollIntervalId );
				this.m_nPollIntervalId = 0;
			}
		}
	},

	InitCaptcha: function()
	{
		if ( $J('#trade_confirm_captchaentry').length != 0 )
		{
			this.m_bCaptchaReady = false;
		}
	},

	RefreshCaptcha: function()
	{
		if ( this.m_nPollIntervalId )
		{
			clearInterval( this.m_nPollIntervalId );
		}

		if ( $J('#trade_confirm_captchaentry').length == 0 )
		{
			return;
		}

		if ( this.m_Recaptcha == null )
		{
			this.m_Recaptcha = grecaptcha.render( 'trade_recaptcha', {
				'sitekey': '6LdlRgATAAAAAMipBNy6Zu2SsnhwioBCrwf47dNX',
				'theme': 'dark'
			} );
		}
		else
		{
			grecaptcha.reset( this.m_Recaptcha );
		}

		this.m_bCaptchaReady = false;
		var _this = this;
		this.m_nPollIntervalId = setInterval( function() {
			var strResponse = grecaptcha.getResponse( _this.m_Recaptcha );
			if ( strResponse )
			{
				_this.SetCaptchaReady( true );
				clearInterval( _this.m_nPollIntervalId );
				_this.m_nPollIntervalId = 0;
			}
		}, 200 );
	},

	GetCaptchaResponse: function()
	{
		if ( this.m_bCaptchaReady && $J('#trade_confirm_captchaentry').length != 0 )
			return grecaptcha.getResponse( this.m_Recaptcha );
		else
			return "";
	},

	UpdateConfirmButtonStatus: function()
	{
		if ( g_bConfirmPending )
		{
			$('trade_confirmbtn').hide();
			$('trade_confirm_throbber').show();
		}
		else
		{
			$('trade_confirmbtn').show();
			$('trade_confirm_throbber').hide();
		}

		if ( this.m_eTradeOfferState == this.TRADE_OFFER_STATE_COUNTEROFFER )
		{
			$('trade_confirmbtn_text').update( 'Send Counter Offer');
		}
		else if ( this.m_eTradeOfferState == this.TRADE_OFFER_STATE_VIEW )
		{
			$('trade_confirmbtn_text').update( 'Accept Trade');
		}
		else
		{
			$('trade_confirmbtn_text').update( 'Make Offer');
		}

		if ( UserYou.bReady && this.m_bCaptchaReady )
		{
			$('trade_confirmbtn').addClassName( 'active' );

			if ( this.m_eTradeOfferState == this.TRADE_OFFER_STATE_COUNTEROFFER || this.m_eTradeOfferState == this.TRADE_OFFER_STATE_NEW )
			{
				$('trade_confirm_message').update( 'Ready to send your offer.' );
			}
			else
			{
				$('trade_confirm_message').update( 'Ready to complete the trade.' );
			}
		}
		else
		{
			$('trade_confirmbtn').removeClassName( 'active' );

			if ( UserYou.bReady && !this.m_bCaptchaReady )
			{
				var $CaptchaCtn = $J('#trade_confirm_captchaentry');
				if ( !$CaptchaCtn.is(':visible' ) )
				{
					this.RefreshCaptcha();
					$CaptchaCtn.show();
				}

				$('trade_confirm_message').update( 'Waiting for you to check the box above.' );
			}
			else
			{
				if ( this.m_eTradeOfferState == this.TRADE_OFFER_STATE_COUNTEROFFER || this.m_eTradeOfferState == this.TRADE_OFFER_STATE_NEW )
				{
					if( g_rgCurrentTradeStatus.me.assets.length || g_rgCurrentTradeStatus.me.currency.length ||
						g_rgCurrentTradeStatus.them.assets.length || g_rgCurrentTradeStatus.them.currency.length )
					{
						$('trade_confirm_message').update( 'Waiting for you to confirm your offer.' );
					}
					else
					{
						$('trade_confirm_message').update( 'Make Offer' );
					}
				}
				else
				{
					//view
					$('trade_confirm_message').update( 'Waiting for you to confirm trade contents.' );
				}
			}
		}
	},

	UpdateTradeStatus: function()
	{
		g_rgCurrentTradeStatus.version++;
		RefreshTradeStatus( g_rgCurrentTradeStatus );
	},

	StartCounterOffer: function()
	{
		if ( this.m_eTradeOfferState == CTradeOfferStateManager.TRADE_OFFER_STATE_VIEW )
		{
			this.m_eTradeOfferState = CTradeOfferStateManager.TRADE_OFFER_STATE_COUNTEROFFER;
			UserYou.bReady = false;
			$('modify_trade_offer_opts').hide();
			$('you_notready').removeClassName('short');
			$('you_ready').removeClassName('short');

			$('btn_decline_trade_offer').hide();

			$('tradeoffer_includedmessage') && $('tradeoffer_includedmessage').hide();
			$('tradeoffer_addmessage') && $('tradeoffer_addmessage').show();

			DisableReadOnlyMode();	// will make items draggable again
		}
	},

	ConfirmTradeOffer: function()
	{
		if ( !this.m_bCaptchaReady )
			return;

		g_bConfirmPending = true;
		this.UpdateConfirmButtonStatus();

		var StateManager = this;

		if ( this.m_eTradeOfferState == CTradeOfferStateManager.TRADE_OFFER_STATE_NEW || this.m_eTradeOfferState == CTradeOfferStateManager.TRADE_OFFER_STATE_COUNTEROFFER )
		{
			if ( this.m_eTradeOfferState == CTradeOfferStateManager.TRADE_OFFER_STATE_COUNTEROFFER && !this.m_bChangesMade )
			{
				// user has not made changes.  Prompt to just accept the offer
				ShowConfirmDialog( 'Send Counter Offer',
					'You have not made any changes to this counter offer.  Would you like to accept the original offer?',
					'Accept Trade'
				).done( function() {
					// flip back to VIEW state so that this function will run the usual accept AJAX
					StateManager.m_eTradeOfferState = CTradeOfferStateManager.TRADE_OFFER_STATE_VIEW;
					var deferred = StateManager.ConfirmTradeOffer();

					// if something goes wrong with the AJAX, flip back to the COUNTEROFFER state (to match the UI)
					if ( deferred )
						deferred.fail( function() {
							StateManager.m_eTradeOfferState = CTradeOfferStateManager.TRADE_OFFER_STATE_COUNTEROFFER;
							StateManager.UpdateConfirmButtonStatus();
						} );

				}).fail( function() {
					g_bConfirmPending = false;
					StateManager.UpdateConfirmButtonStatus();
				});

				// we don't actually send the counter offer in this case.
				return null;
			}

			var rgParams = {
				sessionid: g_sessionID,
				serverid: 1,				partner: g_ulTradePartnerSteamID,
				tradeoffermessage: $('trade_offer_note') ? $('trade_offer_note').value : '',
				json_tradeoffer: V_ToJSON( g_rgCurrentTradeStatus ),
				captcha: CTradeOfferStateManager.GetCaptchaResponse()
			};

			if ( this.m_rgTradeOfferCreateParams )
				rgParams['trade_offer_create_params'] = V_ToJSON( this.m_rgTradeOfferCreateParams );

			if ( this.m_eTradeOfferState == CTradeOfferStateManager.TRADE_OFFER_STATE_NEW )
			{
				// remember that the user has created a new trade
				Tutorial.OnCompletedTutorial();
			}
			else if ( this.m_eTradeOfferState == CTradeOfferStateManager.TRADE_OFFER_STATE_COUNTEROFFER )
			{
				rgParams['tradeofferid_countered'] = this.m_nTradeOfferID;
			}

			return $J.ajax(
				{
					url: 'https://steamcommunity.com/tradeoffer/new/send',
					data: rgParams,
					type: 'POST',
					crossDomain: true,
					xhrFields: { withCredentials: true }
				}
			).done( function( data ) {
				var bNeedsEmailConfirmation = data && data.needs_email_confirmation;
				var bNeedsMobileConfirmation = data && data.needs_mobile_confirmation;

				var Modal;
				if ( bNeedsMobileConfirmation )
				{
					var strText = 'In order to send this trade offer, you must verify it in your Steam Mobile app. You can verify it by launching the app and navigating to the Confirmations page from the menu.';
					if ( bNeedsEmailConfirmation )
					{
						strText += '<br><br>We have also sent an email to your address (ending in "%s") and you may complete the verification from there.'.replace( /%s/, data.email_domain );
						strText += '<br><br><strong>Note:</strong> After October 29th, accounts with a Steam Guard Mobile Authenticator will only be able to complete this verification step from the Steam Mobile app.';
					}

					Modal = ShowAlertDialog(
							'Additional confirmation needed',
							strText
					);
				}
				else if ( bNeedsEmailConfirmation )
				{
					Modal = ShowAlertDialog(
						'Additional confirmation needed',
						'In order to send this trade offer, you must complete an additional verification step.  An email has been sent to your address (ending in "%s") with additional instructions.'.replace( /%s/, data.email_domain )
					);
				}
				else
					Modal = ShowAlertDialog(
						'Trade Offer Sent',
						'Success!  Your trade offer has been sent to %s.<br><br>You can manage your outstanding trade offers from your Sent Trade Offers page.'.replace( /%s/, g_strTradePartnerPersonaName )
					);

				Modal.always( function() {
						EndTradeOffer( UserYou.GetProfileURL() + '/tradeoffers/sent/', true );
				} );
			}).fail( function( jqXHR ) {
				var data = $J.parseJSON( jqXHR.responseText );
				g_bConfirmPending = false;
				StateManager.RefreshCaptcha();
				StateManager.UpdateConfirmButtonStatus();
				ShowAlertDialog( 'Make Offer', data && data.strError ? data.strError : 'There was an error sending your trade offer.  Please try again later.' );
			});
		}
		else if ( this.m_eTradeOfferState == CTradeOfferStateManager.TRADE_OFFER_STATE_VIEW )
		{
			var nTradeOfferID = this.m_nTradeOfferID;
			var rgParams = {
				sessionid: g_sessionID,
				serverid: 1,				tradeofferid: nTradeOfferID,
				partner: g_ulTradePartnerSteamID,
				captcha: CTradeOfferStateManager.GetCaptchaResponse()
			};

			return $J.ajax(
				{
					url: 'https://steamcommunity.com/tradeoffer/' + nTradeOfferID + '/accept',
					data: rgParams,
					type: 'POST',
					crossDomain: true,
					xhrFields: { withCredentials: true }
				}
			).done( function( data ) {

				var bNeedsEmailConfirmation = data && data.needs_email_confirmation;
				var bNeedsMobileConfirmation = data && data.needs_mobile_confirmation;

				if ( bNeedsMobileConfirmation )
				{
					var strText = 'In order to complete this trade, you must verify it in your Steam Mobile app. You can verify it by launching the app and navigating to the Confirmations page from the menu.';
					if ( bNeedsEmailConfirmation )
					{
						strText += '<br><br>We have also sent an email to your address (ending in "%s") and you may complete the verification from there.'.replace( /%s/, data.email_domain );
						strText += '<br><br><strong>Note:</strong> After October 29th, accounts with a Steam Guard Mobile Authenticator will only be able to complete this verification step from the Steam Mobile app.';
					}

					Modal = ShowAlertDialog(
							'Additional confirmation needed',
							strText
					);
				}
				else if ( bNeedsEmailConfirmation )
				{
					ShowAlertDialog(
						'Additional confirmation needed',
						'In order to complete this trade, you must complete an additional verification step.  An email has been sent to your address (ending in "%s") with additional instructions.'.replace( /%s/, data.email_domain )
					).always( function() {
						if ( window.opener )
							window.close();
						else
							EndTradeOffer( UserYou.GetProfileURL() + '/tradeoffers/' );
					});

					if ( window.opener && window.opener.postMessage )
					{
						MessageWindowOpener( { type: 'await_confirm', tradeofferid: nTradeOfferID } );
					}
				}
				else
				{
					if ( window.opener && window.opener.postMessage )
					{
						MessageWindowOpener( { type: 'accepted', tradeofferid: nTradeOfferID } );
					}

					if ( data.tradeid )
						window.location = 'https://steamcommunity.com/trade/' + data.tradeid + '/receipt';
					else
						EndTradeOffer( UserYou.GetProfileURL() + '/inventory/' );	//?? not sure
				}
			}).fail( function( jqXHR ) {
				var data = $J.parseJSON( jqXHR.responseText );
				g_bConfirmPending = false;
				StateManager.RefreshCaptcha();
				StateManager.UpdateConfirmButtonStatus();
				ShowAlertDialog( 'Accept Trade', data && data.strError ? data.strError : 'There was an error accepting this trade offer.  Please try again later.' );
			});
		}
	},

	DeclineTradeOffer: function()
	{
		if ( this.m_eTradeOfferState != CTradeOfferStateManager.TRADE_OFFER_STATE_VIEW || g_bConfirmPending )
			return;

		g_bConfirmPending = true;
		this.UpdateConfirmButtonStatus();
		var StateManager = this;

		var rgParams = {
			sessionid: g_sessionID
		};

		$J.ajax(
			{
				url: 'https://steamcommunity.com/tradeoffer/' + this.m_nTradeOfferID + '/decline',
				data: rgParams,
				type: 'POST',
				crossDomain: true,
				xhrFields: { withCredentials: true }
			}
		).done( function( data ) {
			EndTradeOffer();
		}).fail( function() {
			g_bConfirmPending = false;
			StateManager.UpdateConfirmButtonStatus();
			ShowAlertDialog( 'Decline Trade', 'There was an error modifying this trade offer.  Please try again later.' );
		});
	}

};


function CTradeOfferTutorial()
{
	CTutorial.apply( this, [ 5 ] );
}
CTradeOfferTutorial.prototype = new CTutorial;
CTradeOfferTutorial.prototype.constructor = CTradeOfferTutorial;

CTradeOfferTutorial.prototype.OnSelectedNonEmptyInventory = function( user ) {

};

CTradeOfferTutorial.prototype.OnUserAddedItemsToTrade = function( cMyItems, cTheirItems ) {
	if ( cTheirItems > 0 && cMyItems > 0 )
	{
		if ( $('trade_offer_note') )
			this.AdvanceToStep( 3 );
		else
			this.AdvanceToStep( 4 );	//skip note
	}
	else if ( cMyItems > 0 )
		this.AdvanceToStep( 2 );
};

CTradeOfferTutorial.prototype.OnUserEnteredNote = function() {
	this.AdvanceToStep( 4 );
};

CTradeOfferTutorial.prototype.OnUserIsReady = function() {
	this.AdvanceToStep( 5 );
};

CTradeOfferTutorial.prototype.OnCompletedTutorial = function() {
	SetCookie( 'bCompletedTradeOfferTutorial', 'true', 365 * 10, '/tradeoffer/' );
};


