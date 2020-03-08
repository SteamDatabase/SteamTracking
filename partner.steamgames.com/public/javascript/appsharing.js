
function UpdateAppCount()
{
	var cChecked = $J( '#appsTable input[type="checkbox"]:checked' ).length;
	var elButton = $J( '#appsharing_create_btn' );
	var strNumApps = '';
	if ( cChecked > 0 )
	{
		elButton.removeClass( 'btn_disabled' );
		strNumApps = '(' + cChecked + ')';
	}
	else
	{
		elButton.addClass( 'btn_disabled' );
		strNumApps = '';
	}

	$J( '#num_apps' ).text( strNumApps );
}

function CreateShareInvite( nPublisherID )
{
	var elApps = $J( '#appsTable input[type="checkbox"]:checked' );

	if ( !elApps.length )
		return;

	var elDialogContent = $J( '.appsharing_form_ctn' );

	var $ConfirmShareDialog = ShowConfirmDialog( 'Share Management Rights For An App',
		elDialogContent,
		'Create Invite Link' );
	$ConfirmShareDialog.SetRemoveContentOnDismissal( false );

	elDialogContent.show();

	$ConfirmShareDialog.done( function() {

		var rgApps = [];
		elApps.each( function() {
			rgApps.push( this.value );
		});

		var rgParams = {
			'sessionid' : g_sessionID,
			'grant_financial_access' : ( $J( 'input[name="grant_financial_access"]' ).is(':checked') ? 1 : 0 ),
			'note' : $J( '.create_form_note' ).val(),
			'appids' : rgApps
		};

		$J.post( 'https://partner.steamgames.com/appsharing/ajaxcreateinvite/' + nPublisherID, rgParams )
			.done( function( data ) {

				if ( data.success == 1 && data.share_token_url )
				{
					var $elShareTokenDetails = $J('<div/>', {'class': 'appsharing_link_dialog_ctn'} );
					$elShareTokenDetails.append( $J('<div/>', {'class': 'appsharing_link_desc'} ).html( 'We\'ve created a link for you to share with the Steamworks organization that you\'d like give management access to. Please copy this link and send it to an admin or actual authority of the other Steamworks organization for confirmation.\n									<br><br>Once they\'ve responded, you\'ll receive an email for final confirmation with information on the account and entity that you will be granting access to. Please note that this invite link will expire in two weeks and can be viewed anytime from this page.' ) );
					$elShareTokenDetails.append( $J('<div/>', {'class': 'appsharing_link_ctn' } ).text( data.share_token_url ) );

					ShowAlertDialog( 'Share Link Created', $elShareTokenDetails )
						.done( function() { location.reload( true ) } );
				}
				else
				{
					ShowAlertDialog( 'Your Request Failed...', data.msg || 'Error' );
				}
			} );
	} );
}

function ManageShareInvite( ulShareID, eNewShareState, nPublisherID )
{
	var $dialog = null;
	if ( eNewShareState == 5 )
	{
		$dialog = ShowConfirmDialog( 'Cancel App Share', 'Are you sure you want to cancel this pending app management share invite?', 'Cancel App Share' );
	}
	else if ( eNewShareState == 7 )
	{
		$dialog = ShowConfirmDialog( 'Revoke App Share', 'Are you sure you want to revoke this active app management share invite? Access will be removed immediately.', 'Revoke App Share' );
	}
	else if ( eNewShareState == 3 )
	{
		$dialog = ShowConfirmDialog( 'Decline App Share', 'Are you sure you want to decline this pending app management share invite?', 'Decline App Share' );
	}
	else if ( eNewShareState == 4 )
	{
		var elDialogContent = $J( '.appsharing_accept_ctn' )
		$dialog = ShowConfirmDialog( 'Approve App Share', elDialogContent, 'Approve App Share' );
		$dialog.SetRemoveContentOnDismissal( false );
		elDialogContent.show();
		$dialog.AdjustSizing();
	}
	else
	{
		return;
	}

	$dialog.done( function() {

		var rgParams = {
			'sessionid' : g_sessionID,
			'shareid' : ulShareID,
			'new_share_state' : eNewShareState
		};

		$J.post( 'https://partner.steamgames.com/appsharing/ajaxmanageinvite/' + nPublisherID, rgParams )
			.done( function( data ) {

				if ( data.success == 1 )
				{
					location.reload( true );
				}
				else
				{
					ShowAlertDialog( 'Your Request Failed...', 'ERROR' );
				}
			} );
	} );
}
