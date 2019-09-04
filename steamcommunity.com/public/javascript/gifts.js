
function ShowDefaultGiftOptions( gidGift )
{
	var elStepInit = $('gift' + gidGift + '_step_init');
	var elStepAccept = $('gift' + gidGift + '_step_accept');

	elStepInit.show();
	elStepAccept.hide();
}

function ShowAcceptGiftOptions( gidGift )
{
	var elStepInit = $('gift' + gidGift + '_step_init');
	var elStepAccept = $('gift' + gidGift + '_step_accept');

	elStepInit.hide();
	elStepAccept.show();
}

function ShowDeclineGiftOptions( gidGift, steamidSender )
{
	var $Content = $J('#decline_gift_prompt_' + gidGift );
	var $TextArea = $Content.find('textarea');

	var Modal = ShowConfirmDialog(
		'Decline gift', $Content.show(), 'Decline gift'
	).done( function() {
			DoDeclineGift( gidGift, steamidSender, $TextArea.val() );
	});
	Modal.SetRemoveContentOnDismissal( false );

	$TextArea.focus();
}

function UnpackGift( gidGift )
{
	var action = 'validateunpack';

	new Ajax.Request( 'https://steamcommunity.com/gifts/' + gidGift + '/' + action, {
		method: 'post',
		parameters: { sessionid: g_sessionID },
		onSuccess: function( transport ) { OnValidateUnpackResults( gidGift, transport ); },
		onFailure: function( transport ) { ShowGiftModalError( 'Unable to add the gift to your library.  The gift may have already been redeemed.  Please try again later.' ); }
	} );
}

// as above, but with different text
function UnpackGiftItemReward( gidGift )
{
	var action = 'validateunpack';

	new Ajax.Request( 'https://steamcommunity.com/gifts/' + gidGift + '/' + action, {
		method: 'post',
		parameters: { sessionid: g_sessionID },
		onSuccess: function( transport ) {
			var response = transport.responseJSON;
			if ( response.owned )
			{
				ShowAlertDialog( 'Unpack Item', 'You already have this item on your account.' );
			}
			else
			{
				var item_name = response.gift_name;
				var strDialogTitle = 'Unpack Item: %s'.replace( /%s/, item_name );
				var Modal = ShowConfirmDialog( strDialogTitle,
					'This will permanently bind the item to your account.  Once unpacked, the item can no longer be traded or sold.',
					'Unpack Item'
				).done( function() {

					var action = 'unpack';

					new Ajax.Request( 'https://steamcommunity.com/gifts/' + gidGift + '/' + action, {
						method: 'post',
						parameters: { sessionid: g_sessionID },
						onComplete: function( transport ) {
							if ( transport.responseJSON && transport.responseJSON.success == 1 )
							{
								ShowAlertDialog( strDialogTitle, 'This item has been added to your account.')
							}
							else
							{
								ShowAlertDialog( strDialogTitle, 'There was a problem adding this item to your account.  Please try again later.' );
							}
							UserYou.ReloadInventory( 753, 7 );
						}
					} );
				} );

				Modal.GetContent().css('min-width', '300px');
				Modal.GetContent().find('.newmodal_content').css('max-width', '450px');
				Modal.AdjustSizing();
			}
		},
		onFailure: function( transport ) { ShowGiftModalError( 'Unable to add the gift to your library.  The gift may have already been redeemed.  Please try again later.' ); }
	} );
}


function OnValidateUnpackResults( gidGift, transport )
{
	var idUnpackResults = 'unpack_validate_results_' + gidGift;
	var elUnpackResults = $(idUnpackResults);
	if ( !elUnpackResults )
	{
		var elUnpackResults = new Element( 'div', { id: idUnpackResults } );
	}
	elUnpackResults.update( transport.responseJSON.message );
	showContentAsModal( 'gift_modal', elUnpackResults, true );
}

function DoUnpackGift( gidGift, packageid, packagename )
{
	var elUnpackGiftButtons = $('unpack_gift_buttons_' + gidGift);
	if ( elUnpackGiftButtons )
		ShowWaiting( gidGift, elUnpackGiftButtons,  $('unpack_gift_buttons_' + gidGift + '_wait') );

	var action = 'unpack';

	new Ajax.Request( 'https://steamcommunity.com/gifts/' + gidGift + '/' + action, {
		method: 'post',
		parameters: { sessionid: g_sessionID },
		onComplete: function( transport ) { OnUnpackGiftResults( gidGift, packageid, packagename, transport ); }
	} );
}

function DeleteGift( gidGift )
{
	ShowConfirmDialog(
			'Delete gift',
			'Are you sure you want to permanently delete this gift?',
			'Delete gift',
			'Cancel'
	).done( function() {
		new Ajax.Request( 'https://steamcommunity.com/gifts/' + gidGift + '/' + 'delete', {
			method: 'post',
			parameters: { sessionid: g_sessionID },
			onSuccess: function( transport ) { OnDeleteGiftResults( gidGift, transport ); },
			onFailure: function( transport ) { ShowGiftModalError( 'Unable to delete the gift from your library.  The gift may have already been deleted or redeemed.  Please try again later.' ); }
		} );
	} );
}

function OnDeleteGiftResults( gidGift, transport )
{
	if ( transport.responseJSON && transport.responseJSON.success == 1 )
	{
		UserYou.ReloadInventory( 753, 1 );
	}
	else
	{
		ShowGiftModalError( 'Unable to delete the gift from your library.  The gift may have already been deleted or redeemed.  Please try again later.' );
	}
}

function DoAcceptGift( gidGift, bUnpack )
{
	ShowWaiting( gidGift, $('gift' + gidGift + '_step_accept'),  $('gift' + gidGift + '_step_wait') );

	var action = bUnpack ? 'acceptunpack' : 'accept';

	new Ajax.Request( 'https://steamcommunity.com/gifts/' + gidGift + '/' + action, {
		method: 'post',
		parameters: { sessionid: g_sessionID },
		onComplete: function( transport ) { OnAcceptGiftResults( gidGift, bUnpack, transport ); }
	} );
}

function DoDeclineGift( gidGift, steamidSender, note )
{
	var WaitDialog = ShowBlockingWaitDialog( 'Decline gift' );

	var action = 'decline';

	$J.post( 'https://steamcommunity.com/gifts/' + gidGift + '/' + action,
		{ sessionid: g_sessionID, steamid_sender: steamidSender, note: note }
	).done( function(data) {
		OnDeclineGiftResults( gidGift, data );
	}).fail( function() {
		OnDeclineGiftResults( gidGift );
	}).always( function() {
		WaitDialog.Dismiss();
	});
}

function OnAcceptGiftResults( gidGift, bUnpack, transport )
{
	if ( UserYou )
	{
		// reload the user's gift inventory so they see any changes made here
		UserYou.ReloadInventory( 753, 1 );
	}
	if ( transport.responseJSON && transport.responseJSON.success == 1 )
	{
		if ( bUnpack )
		{
			ClearGiftWithMessage( gidGift, $('unpacked_gift_' + gidGift) );
		}
		else
		{
			ShowAcceptedGiftMessage( gidGift, transport.responseJSON.gidgiftnew );
		}
		RefreshNotificationArea();
	}
	else
	{
		$('gift' + gidGift + '_step_accept').show();
		$('gift' + gidGift + '_step_wait').hide();
		ShowDefaultGiftOptions( gidGift );

		ShowUnpackError( gidGift, bUnpack, transport );
	}
}

function ShowUnpackError( gidGift, bUnpack, transport )
{
	var response = transport.responseJSON;
	var strError = bUnpack ? 'Unable to add the gift to your library.  The gift may have already been redeemed.  Please try again later.' : 'Unable to accept gift.  The gift may have already been redeemed.  Please try again later.';
	var strDetails = false;
	if ( response && response.error )
	{
		strError = response.error;
	}
	if ( response && response.accepted )
	{
		strDetails = 'This gift has not been added to your library.  It will be stored in your inventory, to be traded or added to library later.';
		if ( response.gidgiftnew )
			ShowAcceptedGiftMessage( gidGift, response.gidgiftnew );
	}
	ShowGiftModalError( strError, strDetails );
}

function OnUnpackGiftResults( gidGift, packageid, packagename, transport )
{
	if ( transport.responseJSON && transport.responseJSON.success == 1 )
	{
		if ( UserYou )
		{
			// reload the user's gift inventory so they see any changes made here
			UserYou.ReloadInventory( 753, 1 );
		}

		if ( $('unpacked_gift_' + gidGift) )
			ClearGiftWithMessage( gidGift, $('unpacked_gift_' + gidGift) );

		if ( $('gift_unpack_install_modal_installbtn' ) )
		{
			if ( packageid == 15479 )
				$('gift_unpack_install_modal_installbtn').hide();
			else
			{
				$('gift_unpack_install_modal_installbtn').show();
				$('gift_unpack_install_modal_installbtn').href = 'steam://subscriptioninstall/' + packageid;
			}
		}

		if ( $('gift_unpack_install_packagename') )
			$('gift_unpack_install_packagename').update( packagename );

		showContentAsModal( 'gift_modal', $('gift_unpack_install_modal') );
		RefreshNotificationArea();
	}
	else
	{
		ShowUnpackError( gidGift, true, transport );
	}
}

function ShowAcceptedGiftMessage( gidGift, gidGiftNew )
{
	var elLink = $('accepted_gift_link_' + gidGift );
	elLink.href = elLink.href + '#753_1_' + gidGiftNew;
	ClearGiftWithMessage( gidGift, $('accepted_gift_' + gidGift) );
}

function OnDeclineGiftResults( gidGift, data )
{
	if ( data && data.success == 1 )
	{
		hideModal( 'gift_modal' );
		ClearGiftWithMessage( gidGift, $('declined_gift_' + gidGift) );
		RefreshNotificationArea();
	}
	else
	{
		ShowDefaultGiftOptions( gidGift );
		ShowGiftModalError( 'Unable to decline gift.  The gift may have already been declined or redeemed.' );
	}
}

function ClearGiftWithMessage( gidGift, elMessage )
{
	new Effect.BlindDown( $(elMessage), {duration: 0.5 } );
	new Effect.BlindUp( $('pending_gift_' + gidGift), {duration: 0.5 } );
}

function ShowWaiting( gidGift, elCurrentControls, elStepWait )
{
	elStepWait.style.height = elCurrentControls.getHeight() + 'px';
	elStepWait.style.lineHeight = elCurrentControls.getHeight() + 'px';
	elCurrentControls.hide();
	elStepWait.show();
}

function ShowGiftModalError( strError, strDetails )
{
	$('gift_error_modal_message').update( strError );
	$('gift_error_modal_details').update( strDetails ? strDetails : '&nbsp;' );
	showContentAsModal( 'gift_modal', $('gift_error_modal_content' ) );
}

function ShowGiftModalSuccess( strMessage, strDetails )
{
	$('gift_success_modal_message').update( strMessage );
	$('gift_success_modal_details').update( strDetails ? strDetails : '&nbsp;' );
	showContentAsModal( 'gift_modal', $('gift_success_modal_content' ) );
}

g_bGiftHistoryLoaded = false;
function ShowGiftHistory()
{
	ShowPendingGifts();

	if ( $('no_pending_gifts_msg') )
		$('no_pending_gifts_msg').hide();

	if ( !g_bGiftHistoryLoaded )
	{
		g_bGiftHistoryLoaded = true;

		if ( $('gift_history_link') )
			$('gift_history_link').hide();
		$('gift_history').show();

		new Ajax.Updater(
			'gift_history_content',
			'https://steamcommunity.com/gifts/0/history/',
			{ method: 'get' }
		);
	}
}


function AcceptRejectGiftCard( gidGiftCardID, bAccept )
{
	if ( bAccept != 1 )
	{
		ShowConfirmDialog( 'Decline Gift Card', 'Are you sure you want to decline this gift card?  These funds will be refunded to the friend who purchased it for you.', 'Decline gift card' )
		.done( function() {
			AcceptRejectGiftCardInternal( gidGiftCardID, bAccept, null, null, null );
		});
	}
	else
	{
		AcceptRejectGiftCardInternal( gidGiftCardID, bAccept, null, null, null );
	}
}

function AcceptGiftCard_RequireBillingInfo( gidGiftCardID )
{
	var $DialogContents = $J( '#billing_info_form' ).clone();
	var $Dialog = ShowConfirmDialog( 'Redeem Gift Card', $DialogContents.show(), 'Accept gift' )
	.done( function()
	{
		var $Form = $DialogContents.find( 'form' );
		var strState = $Form.find( '#billing_state_select' ).val();
		var strCity = $Form.find( 'input[name="billing_city"]' ).val();
		var strZip = $Form.find( 'input[name="billing_postal_code"]' ).val();
		AcceptRejectGiftCardInternal( gidGiftCardID, 1, strState, strCity, strZip );
	});
}


function AcceptRejectGiftCardInternal( gidGiftCardID, bAccept, strState, strCity, strZip )
{
	var mapParams = {
		sessionid: g_sessionID,
		giftcardid: gidGiftCardID,
		accept: bAccept,
	};

	if ( strState )
		mapParams[ 'state' ] = strState;
	if ( strCity )
		mapParams[ 'city' ] = strCity;
	if ( strZip )
		mapParams[ 'zip' ] = strZip;

	new Ajax.Request( 'https://steamcommunity.com/gifts/0/resolvegiftcard', {
		method: 'post',
		parameters: mapParams,
		onSuccess: function( transport )
		{
			if ( transport.responseJSON.success == 1 )
			{
				if ( bAccept == 1 )
				{
					ShowAlertDialog( 'Success!', 'You have successfully redeemed this gift card to your Steam Wallet!' ).done( function() { location.reload() } );
					$J( '<iframe src="https://steamcommunity.com/market/eligibilitycheck?noredir=1" style="height:0;visibility:hidden"></iframe>' ).appendTo( 'body' );
				}
				else
					ShowAlertDialog( 'Gift Card Declined', 'You have successfully declined this gift card.  These funds will be refunded to the purchaser.' ).done( function() { location.reload() } );
			}
			else if ( bAccept == 1 && transport.responseJSON.success == 8 )
			{
								AcceptGiftCard_RequireBillingInfo( gidGiftCardID );
			}
			else
			{
				if ( bAccept == 1 )
					ShowAlertDialog( 'Error', 'An error occurred accepting your gift, please try again in a few minutes.' );
				else
					ShowAlertDialog( 'Error', 'An error occurred declining your gift, please try again in a few minutes.' );
			}

		},
		onFailure: function( transport )
		{
			if ( bAccept == 1 )
				ShowAlertDialog( 'Error', 'An error occurred accepting your gift, please try again in a few minutes.' );
			else
				ShowAlertDialog( 'Error', 'An error occurred declining your gift, please try again in a few minutes.' );
		}
	} );
}

