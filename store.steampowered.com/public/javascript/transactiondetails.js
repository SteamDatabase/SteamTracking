
function ReportYourAccountJSError( message, e )
{
	try 
	{
		if (typeof e == 'string')
    		e = new Error(e);
    		
		ReportError( '/public/javascript/transactiondetails.js?l=english', message, message+":\n\n  Exception: "+e.name+" - "+e.message+"\n" );
	} catch( e ) 
	{
			}
}

function ClearUpdateShippingErrors()
{
 	$('updateShippingError').innerHTML = '';
	$('updateShippingError').style.display = 'none';
}

g_dlgEditShippingAddress = null;
function ShowUpdateShippingAddressForm()
{
	g_dlgEditShippingAddress = ShowDialog( 'Edit Shipping Address', $J( "#updateShippingAddress" ) );
	g_dlgEditShippingAddress.SetRemoveContentOnDismissal( false );

	$('shipping_info_confirm').hide();
	$('shipping_info_edit').show();

	ClearUpdateShippingErrors();
}

function HideUpdateShippingAddressForm()
{
	if ( g_dlgEditShippingAddress )
		g_dlgEditShippingAddress.Dismiss();

	ClearUpdateShippingErrors();
}

function SelectShippingAddressSuggestion()
{
	ShippingAddressVerified( $('shipping_info_verify_update').checked );
}

function UpdateShippingAddress()
{
		var errorString = '';

		var rgBadFields = {
		shipping_first_name : false,
		shipping_last_name : false,
		shipping_address : false,
		shipping_city : false,
		shipping_state : false,
		shipping_postal_code : false,
	}
	
	try
	{
		errorString = Shipping_VerifyAddressFields( rgBadFields );
	} 
	catch( e ) 
	{
		ReportYourAccountJSError( 'Failed validating shipping info form', e );
	}

	try 
	{
				if ( errorString != '' )
		{
			$('updateShippingError').innerHTML = errorString;
			$('updateShippingError').style.display = '';
			new Effect.Highlight( 'updateShippingError', { endcolor : '#000000', startcolor : '#ff9900' } );
		}
		else
		{
						$('updateShippingError').innerHTML = '';
			$('updateShippingError').style.display = 'none';

			VerifyShippingAddress();
		}
	}
	catch(e) 
	{
		ReportYourAccountJSError( 'Failed showing errors or submitting shipping info form', e );
	}
}

var g_bVerifyShippingAddressCallRunning = false;
function VerifyShippingAddress()
{
		if( g_bVerifyShippingAddressCallRunning )
		return;

	try 
	{
				g_bVerifyShippingAddressCallRunning = true;

		Shipping_VerifyShippingAddress( g_sessionID, 'https://checkout.steampowered.com/checkout/verifyshippingaddress/',
			{
				onSuccess: function( result ) {
					g_bVerifyShippingAddressCallRunning = false;
					// Success...
					if ( result.success == 1 )
					{
						OnVerifyShippingAddressSuccess( result );
						return;
					}
					else
					{
						OnVerifyShippingAddressFailure();
						return;
					}

										OnVerifyShippingAddressFailure();
				},
				onFailure: function(){
										g_bVerifyShippingAddressCallRunning = false;
					OnVerifyShippingAddressFailure();
				}
		});
	} 
	catch(e) 
	{
		ReportYourAccountJSError( 'Failed gathering form data and calling VerifyShippingAddress', e );
	}
}


function OnVerifyShippingAddressSuccess( result )
{
	try 
	{
				if ( result.eShippingAddressVerificationDetail != 0 )
		{
						var error_text = 'We cannot ship your order to the address that you\'ve provided.';
			switch ( result.eShippingAddressVerificationDetail )
			{
				case 4:
					error_text = 'We cannot ship to the address you\'ve provided because part of your address is missing or looks invalid.';
					break;

				case 3:
					error_text = 'We cannot ship to the address you\'ve provided because part of your address is too long.  Your combined name and each of the address fields can only be up to 35 characters long.';
					break;

				case 1:
				case 5:
					error_text = 'We cannot ship your order to P.O. Box, APO, FPO, or DPO address that you\'ve provided.';
					break;

				case 6:
					error_text = 'We cannot ship your order because the postal code you provided belongs to a region outside of the 48 continental United States.';
					break;

				case 7:
					error_text = 'Due to the Coronavirus, carriers currently will not deliver shipments to your location.  As a result, we are unable to process your order.';
					break;

				case 2:
					error_text = 'We cannot ship your order to the address that you\'ve provided because it contains characters that are not latin-based.';
					break;
			}

			$('updateShippingError').innerHTML = error_text;
			$('updateShippingError').style.display = '';
			new Effect.Highlight( 'updateShippingError', { endcolor : '#000000', startcolor : '#ff9900' } );
		}
		else if ( result.bValidAddress || result.bSuggestedAddressMatches )
		{
			ShippingAddressVerified( false );
		}
		else
		{
			Shipping_UpdateFieldsFromVerificationCall( result );

			$('shipping_info_confirm').show();
			$('shipping_info_edit').hide();
		
						var error_text = 'We\'ve found a suggestion for your shipping address.';
			
			$('updateShippingError').innerHTML = error_text;
			$('updateShippingError').style.display = '';
			new Effect.Highlight( 'updateShippingError', { endcolor : '#000000', startcolor : '#ff9900' } );
		}
	} 
	catch( e ) 
	{
		ReportYourAccountJSError( 'Failed handling VerifyShippingAddress success', e );
	}
}

function ShippingAddressVerified( bUseCorrected )
{
	if ( bUseCorrected )
	{
		Shipping_UpdateAddressWithCorrectedFields();
	}

	SubmitUpdateShippingAddress();
}

function OnVerifyShippingAddressFailure()
{
	try 
	{
				var error_text = 'There seems to have been an error initializing or updating your transaction.  Please wait a minute and try again or contact support for assistance.';
		
		$('updateShippingError').innerHTML = error_text;
		$('updateShippingError').style.display = '';
		new Effect.Highlight( 'updateShippingError', { endcolor : '#000000', startcolor : '#ff9900' } );
	} 
	catch (e) 
	{
		ReportYourAccountJSError( 'Failed handling VerifyShippingAddress failure', e );
	}
}


var g_bUpdateShippingAddress = false;
function SubmitUpdateShippingAddress()
{
		if( g_bUpdateShippingAddress )
		return;

	try 
	{
				g_bUpdateShippingAddress = true;

		new Ajax.Request('https://store.steampowered.com/account/updateshippingaddress/',
		{
		    method:'post',
		    parameters: { 
				'transid' : $('transid').value,
				'shippingfirstname' : $('shipping_first_name').value,
				'shippinglastname' : $('shipping_last_name').value,
				'shippingaddress' : $('shipping_address').value,
				'shippingaddress2' : $('shipping_address_two').value,
				'shippingcountry' : $('shipping_country').value,
				'shippingcity' : $('shipping_city').value,
				'shippingstate' : (g_bHasBillingStates ? $('shipping_state_select').value : $('shipping_state_text').value),
				'shippingpostalcode' : $('shipping_postal_code').value,
				'shippingphone' : $('shipping_phone').value,
			    'sessionid': g_sessionID
			},
		    onSuccess: function(transport){
				g_bUpdateShippingAddress = false;
					if ( transport.responseText ){
					try {
						var result = transport.responseText.evalJSON(true);
		      		} catch ( e ) {
		      			// Failure
		      			OnUpdateShippingAddressFailure();	
		      		}
		      	   	// Success...
		      	   	if ( result.success == 1 )
		      	   	{
 	   							window.location.reload();
		      	   		return;
		      	   	}
		      	   	else
		      	   	{
		      	   		OnUpdateShippingAddressFailure();	
		      	   		return;
		      	   	}
			  	}
			  	
								OnUpdateShippingAddressFailure();					
		    },
		    onFailure: function(){
								g_bUpdateShippingAddress = false;
				OnUpdateShippingAddressFailure();
			}
		});
	} 
	catch(e) 
	{
		ReportYourAccountJSError( 'Failed making AJAX call to UpdateShippingAddress', e );
	}
}


function OnUpdateShippingAddressFailure()
{
	try 
	{
		$('updateShippingError').innerHTML = 'There was a problem updating your shipping address for this order.';
		$('updateShippingError').show();
		new Effect.Highlight( 'updateShippingError', { endcolor : '#000000', startcolor : '#ff9900' } );
	} 
	catch (e) 
	{
		ReportYourAccountJSError( 'Failed in OnUpdateShippingAddressFailure()', e );
	}
}

