
// <script type="text/javascript">

// Mass partner handling functions
function assignSelfToPartners()
{
	var field = $J("#assignedContact").val('');
	assignToPartners();
}

function assignUserToPartners()
{
	$J.post( 'https://partner.steamgames.com/pub/ajaxselectvalvecontactsdialog', { 'sessionid' : g_sessionID
		}
	).done( function( response ) {
			var dialog = ShowConfirmDialog( 'Select Valve Contact', response );
			dialog.SetRemoveContentOnDismissal( false );
			dialog.done( function() {
				var accountName = $J('#selectedValveContact').val();
				var field = $J("#assignedContact").val( accountName );
				assignToPartners();
				dialog.GetContent().remove();
			} );

			dialog.fail( function() {
				dialog.GetContent().remove();
			} );
	} );
}

function assignToPartners()
{
	var form = $J("#UnassignedPartnersForm");
	$J.ajax({
		type: "POST",
		url: "https://partner.steamgames.com/pub/ajaxaddvalvecontacttopublishers/",
		data: form.serialize(),
		success: function( data, textStatus, jqXHR )
		{
			if ( data['success'] == 1 )
			{
				location.reload();
			}
			else if ( data['success'] == 8 )
			{
				alert( 'Please make sure a role is selected (Business or Tech contact).' );
			}
			else if ( data['success'] == 18 )
			{
				alert( 'Account not found!' );
			}
			else
			{
				alert( 'Failure: ' + data['success'] );
			}
		}
	});
}

// on publisher or app detail pages

function removeValveContact( publisherID, accountName, appid )
{
	return changeValveContactStatus( publisherID, false, appid, false, false, accountName );
}

function addValveTechContact( publisherID, accountName, appid )
{
	return changeValveContactStatus( publisherID, true, appid, true, false, accountName );
}

function addValveBusinessContact( publisherID, accountName, appid )
{
	return changeValveContactStatus( publisherID, true, appid, false, true, accountName );
}

function addValveContact( publisherID, accountName, appid )
{
	return changeValveContactStatus( publisherID, true, appid, true, true, accountName );
}

function addOtherUserAsValveTechContact( publisherID, appid )
{
	$J.post( 'https://partner.steamgames.com/pub/ajaxselectvalvecontactsdialog', { 'sessionid' : g_sessionID
		}
	).done( function( response ) {
			var dialog = ShowConfirmDialog( 'Select Valve Contact (will clear other roles)', response );
			dialog.SetRemoveContentOnDismissal( false );
			dialog.done( function() {
				var accountName = $J('#selectedValveContact').val();
				addValveTechContact( publisherID, accountName, appid );
				dialog.GetContent().remove();
			} );

			dialog.fail( function() {
				dialog.GetContent().remove();
			} );
	} );
}

function addOtherUserAsValveBusinessContact( publisherID, appid )
{
	$J.post( 'https://partner.steamgames.com/pub/ajaxselectvalvecontactsdialog', { 'sessionid' : g_sessionID
		}
	).done( function( response ) {
			var dialog = ShowConfirmDialog( 'Select Valve Contact (will clear other roles)', response );
			dialog.SetRemoveContentOnDismissal( false );
			dialog.done( function() {
				var accountName = $J('#selectedValveContact').val();
				addValveBusinessContact( publisherID, accountName, appid );
				dialog.GetContent().remove();
			} );

			dialog.fail( function() {
				dialog.GetContent().remove();
			} );
	} );
}

// on a detail page
function changeValveContactStatus( publisherID, bAdd, appid, bIsTechContact, bIsBusinessContact, accountName )
{
	$J.ajax({
		type: "POST",
		url: "https://partner.steamgames.com/pub/ajaxvalvecontactchange/" + publisherID + "/",
		dataType: "json",
		data: {'add': bAdd, 'appid': appid, 'bIsBusinessContact' : bIsBusinessContact, 'bIsTechContact' : bIsTechContact, 'accountName' : accountName, 'sessionid' : g_sessionID },
		error: function() {
			alert("An error has occured. Please try again later.");
			location.reload();
		},
		success: function( response )
		{
			if ( response.success == 1 )
			{
				location.reload();
			}
			else if ( response.success == 18 )
			{
				alert( "Could not find account." );
			}
			else
			{
				alert( "Failed with result: " + response.success );
			}
		}
	});

	return false;
}


