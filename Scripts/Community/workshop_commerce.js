
function ChoosePublishOption( publishedFileID, bFree )
{
	var dialog = ShowBlockingWaitDialog( 'Publishing', 'Please wait...' );

	$J.post( 'https://steamcommunity.com/sharedfiles/ajaxchoosepublishoption/' + publishedFileID + '/',
		{ 'sessionid' : g_sessionID, 'free' : ( bFree ? 1 : 0 ) }
	).done( function( json ) {
			top.location.reload();
		}
	).fail( function( jqXHR ) {
			dialog.Dismiss();
			ShowAlertDialog( 'Error', 'There was a problem choosing the publishing option for this item: ' + jqXHR.responseJSON.success );
		}
	);
}


function ApproveCommerceSubmission( publishedFileID, title, desc )
{
	var dialog = ShowConfirmDialog( title, desc );
	dialog.done( function() {
		$J.post( 'https://steamcommunity.com/sharedfiles/ajaxchangecommercesubmissionstatus/' + publishedFileID + '/',
			{ 'sessionid' : g_sessionID, 'estatus' : 2 }
		).done( function( json ) {
				top.location.reload();
			}
		).fail( function( jqXHR ) {
				ShowAlertDialog( 'Error', 'There was a problem approving this item for sale: ' + jqXHR.responseJSON.success );
			}
		);
	} );
}

function RejectCommerceSubmission( publishedFileID, title, desc )
{
	var dialog = ShowConfirmDialog( title, desc );
	dialog.done( function() {
		$J.post( 'https://steamcommunity.com/sharedfiles/ajaxchangecommercesubmissionstatus/' + publishedFileID + '/',
			{ 'sessionid' : g_sessionID, 'estatus' : 3 }
		).done( function( json ) {
				top.location.reload();
			}
		).fail( function( jqXHR ) {
				ShowAlertDialog( 'Error', 'There was a problem rejecting this item for sale: ' + jqXHR.responseJSON.success );
			}
		);
	} );
}

function StopSelling( publishedFileID )
{
	var dialog = ShowConfirmDialog( 'Stop Selling?', 'Are you sure you want to stop selling and delist this item?' );
	dialog.done( function() {
		$J.post( 'https://steamcommunity.com/sharedfiles/ajaxchangecommercesubmissionstatus/' + publishedFileID + '/',
			{ 'sessionid' : g_sessionID, 'estatus' : 4 }
		).done( function( json ) {
				top.location.reload();
			}
		).fail( function( jqXHR ) {
				ShowAlertDialog( 'Error', 'There was a problem changing the status of this item: ' + jqXHR.responseJSON.success );
			}
		);
	} );
}

function ShowPurchaseDialog( publishedFileID, returnPublishedFileID, priceOverride, bSkipRequiredItemsCheck )
{
	bSkipRequiredItemsCheck = typeof bSkipRequiredItemsCheck !== 'undefined' ? bSkipRequiredItemsCheck : false;

	if ( bSkipRequiredItemsCheck == false && $J( "[name=requiredItems]").length != 0 )
	{
		var requiredItems = $J( "#RequiredItems").clone();
		requiredItems.prepend( 'This item requires all of the following other items in order to function properly.<br><br>You can click on each one here to learn more about and subscribe to the item before proceeding.<br><br>' );
		var dialog = ShowConfirmDialog( 'Additional Required Items', requiredItems, 'Continue' );
		dialog.done( function() {
			ShowPurchaseDialog( publishedFileID, returnPublishedFileID, priceOverride, true );
		} );
	}
	else
	{
		var waitDialog = ShowBlockingWaitDialog( 'Please Wait', 'Please wait...' );

		$J.post( 'https://steamcommunity.com/sharedfiles/ajaxshowcommercepurchasedialog/' + publishedFileID + '/',
			{ 'sessionid' : g_sessionID, 'price_override' : priceOverride, 'originating_publishedfileid' : returnPublishedFileID }
		).done( function( json ) {
				waitDialog.Dismiss();
				if ( json.has_pending_refund )
				{
					ShowAlertDialog( 'Error', 'You have a pending refund for a purchase of this item, so you cannot purchase it until that has cleared.<br><br>It may take a few days for the refund to be processed.' );
					return;
				}
				var dialog = ShowConfirmDialog( 'Purchase Workshop Item', json.html, 'Continue' );
				dialog.SetRemoveContentOnDismissal( false );

				var form = $J( "#PurchaseWorkshopItemForm" );
				dialog.done( function() {
					if ( json.required_dlc_msg )
					{
						ShowAlertDialog( 'Purchase Workshop Item', json.required_dlc_msg );
					}
					else if ( json.price == 0 )
					{
						$J.post( 'https://steamcommunity.com/sharedfiles/ajaxgrantcommerceitem/' + publishedFileID + '/',
							{ 'sessionid' : g_sessionID }
						).done( function( json ) {
								top.location.reload();
							}
						).fail( function( jqXHR ) {
								ShowAlertDialog( 'Error', 'There was a problem trying to grant this item: ' + jqXHR.responseJSON.success );
							}
						);
					}
					else
					{
						form.submit();
					}
					dialog.Dismiss();
				} );
			}
		).fail( function( jqXHR ) {
				waitDialog.Dismiss();
				ShowAlertDialog( 'Error', 'There was a problem trying to purchase this item: ' + jqXHR.responseJSON.success );
			}
		);
	}
}

function ShowGrantDialog( publishedFileID )
{
	var dialog = ShowConfirmDialog( 'Grant Item', 'Are you sure you want to add this item to your inventory?' );
	dialog.done( function() {
		$J.post( 'https://steamcommunity.com/sharedfiles/ajaxgrantcommerceitem/' + publishedFileID + '/',
			{ 'sessionid' : g_sessionID }
		).done( function( json ) {
				top.location.reload();
			}
		).fail( function( jqXHR ) {
				ShowAlertDialog( 'Error', 'There was a problem trying to grant this item: ' + jqXHR.responseJSON.success );
			}
		);
	} );
}

function ShowRefundDialog( publishedFileID )
{
	var waitDialog = ShowBlockingWaitDialog( 'Please Wait', 'Please wait...' );
	$J.post( 'https://steamcommunity.com/sharedfiles/ajaxshowcommercerefunddialog/' + publishedFileID + '/',
		{ 'sessionid' : g_sessionID }
	).done( function( json ) {
			waitDialog.Dismiss();
			var dialog = ShowConfirmDialog( 'Refund Purchase', json.html, 'Get Refund' );
			var form = $J( "#RefundWorkshopItemForm" );
			dialog.done( function() {
				RequestRefund( form );
			} );
		}
	).fail( function( jqXHR ) {
			waitDialog.Dismiss();
			var errorMessage = 'There was a problem trying to refund this item: <br><br>' + ( jqXHR.responseJSON.hasOwnProperty( "error_message" ) ? jqXHR.responseJSON.error_message : jqXHR.responseJSON.success );
			ShowAlertDialog( 'Error', errorMessage );
		}
	);
}

function RequestRefund( form )
{
	if ( !$J( "input:radio[name='reason']", form ).is( ":checked" ) )
	{
		ShowAlertDialog( 'Error', 'Please select a reason why you were dissatisfied with this item.' );
		return;
	}

	var waitDialog = ShowBlockingWaitDialog( 'Requesting Refund', 'Please wait while we process your refund request...' );

	$J.post( 'https://steamcommunity.com/sharedfiles/ajaxrefundcommerceitem/',
		form.serialize()
	).done( function( json ) {
			waitDialog.Dismiss();
			var successDialog = ShowAlertDialog( 'Refund Request Successful', 'Your purchase of this item was refunded. It may take a few days before your Steam Wallet has been credited.' );
			successDialog.done( function() {
				top.location.reload();
			} );
		}
	).fail( function( jqXHR ) {
			waitDialog.Dismiss();
			ShowAlertDialog( 'Error', 'There was a problem trying to refund this item: <br><br>' + jqXHR.responseJSON.errorMessage );
		}
	);
}

function RemoveItemFromInventory( appID, itemID )
{
	var dialog = ShowConfirmDialog( 'Remove Item From Inventory?', 'Are you sure you want to remove this item from your Steam Inventory? This cannot be undone.' );
	dialog.done( function() {
		var waitDialog = ShowBlockingWaitDialog( 'Please Wait', 'Please wait while we remove the item from your Steam Inventory...' );
		$J.post( 'https://steamcommunity.com/sharedfiles/ajaxremovecommerceitem/' + appID + '/' + itemID + '/',
			{ 'sessionid' : g_sessionID }
		).done( function( json ) {
				top.location.reload();
			}
		).fail( function( jqXHR ) {
				waitDialog.Dismiss();
				var errorMessage = 'There was a problem removing the item from your Steam Inventory: ' + ( jqXHR.responseJSON.hasOwnProperty( "error_message" ) ? jqXHR.responseJSON.error_message : jqXHR.responseJSON.success );
				ShowAlertDialog( 'Error', errorMessage );
			}
		);
	} );
}

var gFriendsToReceiveItemGift = [];
function ShowFriendSelectionDialog( publishedFileID, profileLink )
{
	var waitDialog = ShowBlockingWaitDialog( 'Gift Item to Friends', 'Loading Friends List' );

	gFriendsToReceiveItemGift = [];

	$J.get( profileLink + "/friendspicker/?clickFunction=OnFriendSelectedForGift",
		{},
		function( data, textStatus, jqXHR ) {
			waitDialog.Dismiss();
			var dialog = ShowConfirmDialog( 'Gift Item to Friends', '<div class="friendsPicker" id="friendsPicker">' + data + '</div>' );
			dialog.done( function() {
				if ( gFriendsToReceiveItemGift.length != 0 )
				{
					SendItemToFriends( publishedFileID, gFriendsToReceiveItemGift );
				}
			} );
		}
	);
}

function OnFriendSelectedForGift( steamid, profileName, avatarLink )
{
	gFriendsToReceiveItemGift.push( steamid );
	$J( "#" + steamid).remove();
}

function SendItemToFriends( publishedFileID, steamIDs )
{
	var waitDialog = ShowBlockingWaitDialog( 'Gift Item to Friends', 'Please wait...' );
	$J.post( 'https://steamcommunity.com/sharedfiles/ajaxgrantcommerceitemstofriends/' + publishedFileID + '/',
		{ 'sessionid' : g_sessionID, 'steamids' : steamIDs }
	).done( function( json ) {
			waitDialog.Dismiss();
			ShowAlertDialog( 'Gift Item to Friends', 'Number of gifts given: ' + json.num_granted );
		}
	).fail( function( jqXHR ) {
			waitDialog.Dismiss();
			var errorMessage = 'A problem was encountered trying to give this item as a gift to the selected friends: ' + ( jqXHR.responseJSON.hasOwnProperty( "error_message" ) ? jqXHR.responseJSON.error_message : jqXHR.responseJSON.success );
			ShowAlertDialog( 'Gift Item to Friends', errorMessage );
		}
	);
}

