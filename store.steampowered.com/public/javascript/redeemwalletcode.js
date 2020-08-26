

function DisplayPage( page )
{
		$('error_display').innerHTML = '';
		$('error_display').style.display = 'none';	

		switch ( page )
		{
			case 'code':
				$('wallet_code_form').style.display = '';
				$('redeem_wallet_code_upsell_text').style.display = '';
				$('address_form').style.display = 'none';
				$('redeem_amount_form').style.display = 'none';
				$('validate_btn').style.display = '';
				$('validate_btn_in_progress').style.display = 'none';		
				$('wallet_code').value = '';
			break;
			
			case 'address':
				$('address_btn').style.display = '';
				$('address_btn_in_progress').style.display = 'none';
				$('wallet_code_form').style.display = 'none';
				$('redeem_wallet_code_upsell_text').style.display = 'none';
				$('main_content').style.backgroundImage = "url('')";
				$('address_form').style.display = '';
				$('redeem_amount_form').style.display = 'none';
			break;
		}
}

function UpdateStateSelection()
{
	try 
	{
		if ( $('billing_country').value == 'US' )
		{
			$('billing_state_text').style.display = 'none';
			$('billing_state_select_dselect_container').style.display = 'block';
		}
		else
		{
			$('billing_state_text').style.display = 'block';
			$('billing_state_select_dselect_container').style.display = 'none';
		}
	} 
	catch( e ) 
	{
		ReportRedeemJSError( 'Failed in UpdateStateSelection()', e );
	}
}

function ReportRedeemJSError( message, e )
{
	try 
	{
		if (typeof e == 'string')
    		e = new Error(e);
    		
		ReportError( '/public/javascript/redeemwalletcode.js?l=english', message, message+":\n\n  Exception: "+e.name+" - "+e.message+"\n" );
	} catch( e ) 
	{
			}
}

var g_bRedeemWalletCodeCallRunning = false;
function RedeemWalletCode()
{
		if( g_bRedeemWalletCodeCallRunning )
		return;
		
	if ( $('wallet_code').value == '' )
	{
		DisplayErrorMessage( 'You must enter a wallet code to proceed.' );		
	}
	else
	{
		try 
		{
						g_bRedeemWalletCodeCallRunning = true;
			
			$('validate_btn').style.display = 'none';
			$('validate_btn_in_progress').style.display = '';
			
			new Ajax.Request('https://store.steampowered.com/account/ajaxredeemwalletcode/',
			{
			    method:'post',
			    parameters: { 
					'wallet_code' : $('wallet_code').value,
				    'sessionid' : g_sessionID
				},
			    onSuccess: function(transport){
					g_bRedeemWalletCodeCallRunning = false;
					if ( transport.responseText ){
						try {
							var result = transport.responseText.evalJSON(true);
			      		} catch ( e ) {
			      			// Failure
							OnRedeemWalletCodeFailure( 0, 0  );
			      		}
			      	   	// Success...
						if ( result.success == 11 && result.detail == 48 )
						{
							DisplayPage( 'address' );
							UpdateStateSelection();
							return;
						}
			      	   	else if ( result.success == 1 && result.detail == 0 )
			      	   	{
							OnRedeemWalletCodeSuccess( result );
			      	   		return;
			      	   	}
			      	   	else
			      	   	{
							OnRedeemWalletCodeFailure( result.success, result.detail );
			      	   		return;
			      	   	}
				  	}
				  	
										OnRedeemWalletCodeFailure( 0, 0  );
			    },
			    onFailure: function(){
										g_bRedeemWalletCodeCallRunning = false;
					OnRedeemWalletCodeFailure( 0, 0  );
				}
			});
		} 
		catch(e) 
		{
			ReportRedeemJSError( 'Failed gathering form data and calling RedeemWalletCode', e );
		}
	}
}

function SubmitAddressForm()
{
		var errorString = '';
	
		var rgBadFields = { 
		billing_address : false,
		billing_city : false,
		billing_state_text : false,
		billing_postal_code : false,
		billing_state_select_trigger : false
	}
	
	try 
	{
		if ( $( 'billing_address' ).value.length < 1 )
		{
			errorString += 'Please enter your billing address.<br/>';
			rgBadFields.billing_address = true;
		}
				
		if ( $( 'billing_city' ).value.length < 1 )
		{
			errorString += 'Please enter your billing city.<br/>';
			rgBadFields.billing_city = true;
		}
			
				if  ( $( 'billing_country' ).value == 'US' )
		{
			if ( $('billing_state_select').value.length < 1 )
			{
				errorString += 'Please enter a State or Province.<br/>';
				rgBadFields.billing_state_select_trigger = true;
			}
		}
			
		if ( $( 'billing_country' ).value == 'US' )
		{
			if ( $( 'billing_postal_code' ).value.length < 5 )
			{
				errorString += 'Please enter your zip or postal code.<br/>';
				rgBadFields.billing_postal_code = true;
			}
		}
		else if ( $( 'billing_postal_code' ).value.length < 1 )
		{
			errorString += 'Please enter your zip or postal code.<br/>';
			rgBadFields.billing_postal_code = true;
		}
	}
	catch(e) 
	{
		ReportRedeemJSError( 'Failed validating address info form', e );
	}

	try 
	{
				for ( var key in rgBadFields )
		{
			if ( rgBadFields[key] )
			{
				ValidationMarkFieldBad( key );
			}
			else
			{
				ValidationMarkFieldOk( key );
			}
		}

				if ( errorString != '' )
		{
						var rgErrors = errorString.split( '<br/>' );
			if ( rgErrors.length > 3 )
			{
				errorString = '';
				errorString = rgErrors[0] + '<br/>' + rgErrors[1] + '<br/>' + 'And find more errors highlighted below.' + '<br/>';
			}		
		
			DisplayErrorMessage( errorString );
		}
		else
		{
						$('error_display').innerHTML = '';
			$('error_display').style.display = 'none';
			
						CreateWalletAndCheckFunds( true );
		}
	} 
	catch(e) 
	{
		ReportRedeemJSError( 'Failed showing error or submitting payment info form', e );
	}
}

var g_bCreateWalletAndCheckFundsRunning = false;
function CreateWalletAndCheckFunds( bCreateFromAddress )
{
		if( g_bCreateWalletAndCheckFundsRunning )
		return;
		
	try 
	{
				g_bCreateWalletAndCheckFundsRunning = true;
		
		$('address_btn').style.display = 'none';
		$('address_btn_in_progress').style.display = '';
		
		new Ajax.Request('https://store.steampowered.com/account/ajaxcreatewalletandcheckfunds/',
		{
		    method:'post',
		    parameters: { 
					'wallet_code' : $('wallet_code').value,
					'CreateFromAddress' : bCreateFromAddress ? 1 : 0,
					'Address' : $('billing_address').value,
					'City' : $('billing_city').value,
					'Country' : $('billing_country').value,
					'State' : ($('billing_country').value == 'US' ? $('billing_state_select').value : $('billing_state_text').value),
					'PostCode' : $('billing_postal_code').value,
			        'sessionid' : g_sessionID
			},
		    onSuccess: function(transport){
		    	g_bCreateWalletAndCheckFundsRunning = false;
				if ( transport.responseText ){
					try {
						var result = transport.responseText.evalJSON(true);
		      		} catch ( e ) {
		      			// Failure
		      			OnCreateWalletAndCheckFundsFailure( 2 );
		      		}
		      	   	// Success...
		      	   	if ( result.success == 1 )
		      	   	{
		      	   		OnCreateWalletAndCheckFundsSuccess( result );
		      	   		return;
		      	   	}
		      	   	else
		      	   	{
		      	   		OnCreateWalletAndCheckFundsFailure( result.success );
		      	   		return;
		      	   	}
			  	}
			  	
								OnCreateWalletAndCheckFundsFailure( 2  );
		    },
		    onFailure: function(){
								g_bCreateWalletAndCheckFundsRunning = false;
				OnCreateWalletAndCheckFundsFailure( 2  );
			}
		});
	} 
	catch(e) 
	{
		ReportRedeemJSError( 'Failed gathering form data and calling CreateWallet', e );
	}
}

function UpdateRedeemForm( result )
{
		$('redeem_wallet_success_description').innerHTML = result.success_message;
		$('redeem_wallet_success_upsell_text').innerHTML = result.upsell_text;
		$('redeem_wallet_success_app_image_link').href = result.redirect_url;
		$('redeem_wallet_success_button').href = result.redirect_url;
		$('redeem_wallet_success_button_text').innerHTML = result.redirect_button_text;
		
		if ( result.bRedirectToApp )
		{
			$('redeem_wallet_success_default_image').style.display = 'none';
			$('redeem_wallet_success_image').src = result.redirect_image;
			$('redeem_wallet_success_app_image').style.display = '';
		}
		else
		{
			$('redeem_wallet_success_default_image').style.display = '';
			$('redeem_wallet_success_app_image').style.display = 'none';
		}	
}

function OnCreateWalletAndCheckFundsSuccess( result )
{
	try 
	{
		RedeemWalletCode();
	} 
	catch( e ) 
	{
		ReportRedeemJSError( 'Failed handling CreateWallet success', e );
	}
}

function OnCreateWalletAndCheckFundsFailure( detail )
{
	try 
	{
		DisplayErrorMessage( 'There was an error validating your wallet.  Your wallet code has not been redeemed.<br>Please contact <a href="http://support.steampowered.com">Steam Support</a>.' );
		$('address_btn').style.display = '';
		$('address_btn_in_progress').style.display = 'none';
		$('validate_btn').style.display = '';
		$('validate_btn_in_progress').style.display = 'none';
	} 
	catch (e) 
	{
		ReportRedeemJSError( 'Failed handling CreateWallet failure', e );
	}
}


function OnRedeemWalletCodeSuccess( result )
{
	try 
	{
		$('wallet_current_balance').innerHTML = result.formattednewwalletbalance;
		DisplayPage( 'code' );
		showModal ( 'redirectStorePageModal', true );
	} 
	catch( e ) 
	{
		ReportRedeemJSError( 'Failed handling RedeemWalletCode success', e );
	}

	$('validate_btn').style.display = '';
	$('validate_btn_in_progress').style.display = 'none';
}

function OnRedeemWalletCodeFailure( success, detail )
{
	try 
	{
		var sErrorMessage = 'There was an error redeeming the entered code.';

		switch ( success )
		{
			case 16:
				sErrorMessage = '#youraccount_wallet_code_generic_not_redeemed';
				break;

			default:
				switch ( detail )
				{
					case 44:
						sErrorMessage = 'Your Steam account is currently restricted from activating Steam Wallet codes. Please contact <a href="https://support.steampowered.com/newticket.php?category=15">Steam Support</a> for further assistance.';
						break;

					case 15:
						sErrorMessage = 'The Steam Wallet code you have entered has already been redeemed. Steam Support is unable to issue you a new code.';
						break;

					case 9:
						sErrorMessage = 'The Steam Wallet code you have entered has already been previously redeemed on your account.';
						break;
				
					default:
						sErrorMessage = 'There was an error redeeming the entered code.'
											+ '<ul class="wallet_redeem_error"><li>The code may be invalid. Please carefully verify the characters as you re-enter the code and double check to see if you\'ve mistyped your key. I, L, and 1 can look alike, as can V and Y, and 0 and O.</li>'
											+ '<li>The code may not yet have been activated.  It may take several hours after time of purchase before activation is completed by your retailer, please wait and try redeeming the code again in a little while.</li>'
											+ '<li>If the currency of the code you are attempting to redeem is different than the region in which you are located, you may not be able to redeem this gift card to your account.  If this is the case please return this code to the retailer where it was purchased.</li>'
											+ '<li>If the problem persists, please contact <a href="https://help.steampowered.com/wizard/HelpWithWalletCode">Steam Support</a> for further assistance.</li></ul>';
						break;
				}
				break;
		}
		
		DisplayErrorMessage( sErrorMessage );

		$('validate_btn').style.display = '';
		$('validate_btn_in_progress').style.display = 'none';

	} 
	catch (e) 
	{
		ReportRedeemJSError( 'Failed handling RedeemWalletCode failure', e );
	}
}

function DisplayErrorMessage( strMessage )
{
	$('error_display').innerHTML = strMessage;
	$('error_display').style.display = 'block';
	
	new Effect.Highlight( 'error_display', { endcolor : '#000000', startcolor : '#ff9900' } );
}

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

