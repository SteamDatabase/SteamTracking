
g_PlaceBidDlg = null;
g_CancelBidDlg = null;
function FormatScrapCount( nScrap )
{
	if ( nScrap == 1 )
		return '%s Gem'.replace( /%s/, 1 );
	else
		return '%s Gems'.replace( /%s/, v_numberformat( nScrap ) );
}

function Auction_ShowPlaceBidDialog()
{
	if ( g_oItem.highest_amount )
	{
		$J('#auction_place_bid_highest').show();
		$J('#auction_place_bid_highest_amount').text( FormatScrapCount( g_oItem.highest_amount ) );
	}

	var sDialogTitle = "";
	if ( g_nCurrentUserBidAmount )
	{
		$J('#auction_place_bid_current').show();
		$J('#auction_place_bid_current_amount').text( FormatScrapCount( g_nCurrentUserBidAmount ) );

		$J('#auction_dialog_bid_button > span').text( 'Increase Bid' );
		sDialogTitle = 'Increase bid';
	}
	else
	{
		$J('#auction_dialog_bid_button > span').text( 'Place Bid' );
		sDialogTitle = 'Place a bid';
	}

	$J('.auction_dialog_input_container').show();
	$J('#auction_place_bid_yourbid').hide();

	$J('#auction_place_bid_available_after').hide();
	$J('#auction_place_bid_available').show();
	$J('#auction_place_bid_available_amount').text( FormatScrapCount( g_nCurrentUserScrapAvailable + g_nCurrentUserBidAmount ) );

	$J('#auction_dialog_actions_bid').show();
	$J('#auction_dialog_actions_confirm').hide();

	g_PlaceBidDlg = ShowDialog( sDialogTitle, $J('#auction_place_bid_dialog').show(), null );
	g_PlaceBidDlg.SetRemoveContentOnDismissal( false );
	$J('#auction_bid_amount_input' ).val( '' );
	$J('#auction_bid_amount_input').prop('disabled', false);
	$J('#auction_bid_amount_input').focus();
	$J('#auction_bid_button').show();
}

function Auction_BeginConfirmation()
{
	$J('#auction_place_bid_error').hide();

	var bid_amount = parseInt( $J('#auction_bid_amount_input').val().replace(/[,.]/g, '') );
	if ( isNaN(bid_amount) || bid_amount < 1 )
	{
		$J('#auction_place_bid_error').text( 'You must enter a valid number to bid.' );
		$J('#auction_place_bid_error').show();
		return;
	}

	if ( bid_amount > g_nCurrentUserScrapAvailable + g_nCurrentUserBidAmount )
	{
		$J('#auction_place_bid_error').text( 'You do not have enough Gems to place that bid.' );
		$J('#auction_place_bid_error').show();
		return;
	}

	if ( bid_amount == g_nCurrentUserBidAmount )
	{
		$J('#auction_place_bid_error').text( 'The amount entered is the same as your current bid. Your new bid must be for a greater amount of Gems then your current bid.' );
		$J('#auction_place_bid_error').show();
		return;
	}

	if ( bid_amount < g_nCurrentUserBidAmount )
	{
		$J('#auction_place_bid_error').text( 'Bid could not be changed - you can\'t reduce your bid once it has been placed.' );
		$J('#auction_place_bid_error').show();
		return;
	}

	$J('.auction_dialog_input_container').hide();
	$J('#auction_place_bid_yourbid').show();
	$J('#auction_place_bid_yourbid_amount').text( FormatScrapCount( bid_amount ) );

	$J('#auction_place_bid_available_after').show();
	$J('#auction_place_bid_available').hide();
	$J('#auction_place_bid_available_after_amount').text( FormatScrapCount( g_nCurrentUserScrapAvailable + g_nCurrentUserBidAmount - bid_amount ) );

	$J('#auction_dialog_actions_bid').hide();
	$J('#auction_dialog_actions_confirm').show();
}

function Auction_DoNotConfirm()
{
	g_PlaceBidDlg.Dismiss();
	Auction_ShowPlaceBidDialog();
}

function Auction_PlaceBid()
{
	var bid_amount = parseInt( $J('#auction_bid_amount_input').val().replace(/[,.]/g, '') );
	if ( isNaN(bid_amount) || bid_amount < 1 )
		return;

	var expected_amount_remaining = parseInt( g_oItem.amount_remaining );
	var auctiondescriptionid = g_oItem.auctiondescriptionid;

	// hide the place bid button
	$J("#auction_bid_amount_input").prop('disabled', true);
	$J("#auction_bid_button").hide();

	// fire it off to the server
	$J.ajax({
		url: "https://steamcommunity.com/auction/placebidajax/",
		type: "POST",
		data: { auctiondescriptionid: auctiondescriptionid, bid_amount: bid_amount, expected_amount_remaining: expected_amount_remaining, sessionid: g_sessionID },
		error: function() {
			alert( "A server error has occured. Please try again later." );
		},
		success: function( response )
		{
			if ( response.success == 1 )
			{
				g_PlaceBidDlg.Dismiss();
				ShowAlertDialog( 'Place Bid', '<p>' + response.message + '</p><p>' + 'If you win the auction, the difference between the winning bid amount and your maximum bid will be returned to your inventory.' + '</p>', 'OK' ).done( function()
				{
					window.location = window.location;
				});
			}
			else if ( response.message )
			{
				g_PlaceBidDlg.Dismiss();
				ShowAlertDialog( 'Place Bid', response.message, 'OK' ).done( function()
				{
					window.location = window.location;
				});
			}
			else
			{
				alert( 'failed with error code: ' + response.success );
				window.location = window.location;
			}
		}
	});
}

function Auction_ShowCancelBidDialog()
{
	if ( g_nCurrentUserBidAmount == 0 )
	{
		ShowAlertDialog( 'Cancel bid', 'You do not have a bid on this item.', 'OK' )
		return;
	}

	if ( g_nCurrentUserBidPosition == 1 )
	{
		ShowAlertDialog( 'Cancel bid', 'You cannot cancel your bid because you are currently the highest bidder.', 'OK' )
		return;
	}

	$J('#auction_cancel_bid_returned_amount').text( FormatScrapCount( g_nCurrentUserBidAmount ) );

	g_CancelBidDlg = ShowDialog( 'Cancel bid', $J('#auction_cancel_bid_dialog').show(), null );
	g_CancelBidDlg.SetRemoveContentOnDismissal( false );
	$J('#auction_dialog_cancel_button').css( 'visibility', 'visible' );
}

function Auction_CancelBid()
{
	$J('#auction_dialog_cancel_button').css( 'visibility', 'hidden' );

	$J.ajax({
		url: "https://steamcommunity.com/auction/cancelbidajax/",
		type: "POST",
		data: { auctiondescriptionid: g_oItem.auctiondescriptionid, sessionid: g_sessionID },
		error: function() {
			$J('#auction_dialog_cancel_button').show();
			alert( "A server error has occured. Please try again later." );
		},
		success: function( response )
		{
			g_CancelBidDlg.Dismiss();
			ShowAlertDialog( 'Cancel bid', response.message, 'OK' ).done( function()
			{
				window.location = window.location;
			});
		}
	});
}

function InitQueueControls( store_appid, steamworks_appid )
{
	var elFollowBtn = $J('.queue_control_button.queue_btn_follow .queue_btn_inactive');
	var elUnfollowBtn = $J('.queue_control_button.queue_btn_follow .queue_btn_active');

	elFollowBtn.click( function() {
		$J.post( 'https://steamcommunity.com/app/' + steamworks_appid + '/follow/', {
			sessionid: g_sessionID
		}).done( function() {
			elFollowBtn.hide();
			elUnfollowBtn.show();
		}).fail( function() {
			ShowAlertDialog( 'Follow', 'Error processing your request. Please try again.' );
		});
	});

	elUnfollowBtn.click( function() {
		$J.post( 'https://steamcommunity.com/app/' + steamworks_appid + '/stopfollowing/', {
			sessionid: g_sessionID
		}).done( function() {
			elFollowBtn.show();
			elUnfollowBtn.hide();
		}).fail( function() {
			ShowAlertDialog( 'Follow', 'Error processing your request. Please try again.' );
		});
	});


	var elAddToWishlistBtn = $J('.queue_btn_wishlist.queue_btn_inactive');
	var elAddedToWishlistBtn = $J('#add_to_wishlist_success');
	elAddToWishlistBtn.click( function() {
		$J.post( 'https://steamcommunity.com/actions/AddToWishlist', {
			appid: steamworks_appid,
			sessionid: g_sessionID
		}).done( function() {
			elAddToWishlistBtn.hide();
			elAddedToWishlistBtn.show();
		}).fail( function() {
			ShowAlertDialog( 'Follow', 'Error processing your request. Please try again.' );
		});
	});
}

$J( function() {
	InitQueueControls( g_oItem.store_appid, g_oItem.store_appid )


} );