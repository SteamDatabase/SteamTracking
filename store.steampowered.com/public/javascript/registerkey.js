

function DisplayPage( page )
{
	$('error_display').innerHTML = '';
	$('error_display').style.display = 'none';

	switch ( page )
	{
		case 'code':
			$('registerkey_form').show()
			$('registerkey_examples_text').show();
			$('receipt_form').hide();
			$('register_btn').show();
			$('register_btn_in_progress').hide();
			ValidationMarkFieldOk( $('purchase_confirm_ssa') );

			$('product_key').value ='';
			$('accept_ssa').checked = false;
		break;

		case 'receipt':
			$('receipt_form').show();
			$('registerkey_form').hide();
			$('registerkey_examples_text').hide();

			break;
	}
}

function ReportJSError(message, e )
{
	try 
	{
		if (typeof e == 'string')
    		e = new Error(e);

		ReportError( '/public/javascript/registerkey.js?l=english', message, message+":\n\n  Exception: "+e.name+" - "+e.message+"\n" );
	} catch( e ) 
	{
			}
}

var g_bRegisterKeyCallRunning = false;
function RegisterProductKey()
{
	if( g_bRegisterKeyCallRunning )
		return;

	if ( $('product_key').value == '' )
	{
		DisplayErrorMessage( 'You must enter a product key to proceed.' );
		return;
	}

	if ( !$('accept_ssa') || !$('accept_ssa').checked )
	{
		DisplayErrorMessage( 'You must agree to the terms of the Steam Subscriber Agreement to complete this transaction.' );
		ValidationMarkFieldBad( $('purchase_confirm_ssa') );
		return;
	}

	try
	{
		g_bRegisterKeyCallRunning = true;

		$('register_btn').hide();
		$('register_btn_in_progress').show();

		new Ajax.Request('https://store.steampowered.com/account/ajaxregisterkey/',
		{
			method:'post',
			parameters: {
				'product_key' : $('product_key').value,
				'sessionid' : g_sessionID
			},
			onSuccess: function(transport){
				g_bRegisterKeyCallRunning = false;
				if ( transport.responseText ){
					try {
						var result = transport.responseText.evalJSON(true);
					} catch ( e ) {
						// Failure
						OnRegisterProductKeyFailure( 0, null );
					}

					if ( result.success == 1 )
					{
						OnRegisterProductKeySuccess( result );
						return;
					}
					else if ( result.purchase_result_details !== undefined && result.purchase_receipt_info )
					{
						OnRegisterProductKeyFailure( result.purchase_result_details, result.purchase_receipt_info );
						return;
					}
				}

								OnRegisterProductKeyFailure( 0, null );
			},
			onFailure: function(){
								g_bRegisterKeyCallRunning = false;
				OnRegisterProductKeyFailure( 0, null );
			}
		});
	}
	catch(e)
	{
		ReportJSError( 'Failed gathering form data and calling ajaxregisterkey', e );
	}
}


function OnRegisterProductKeySuccess( result )
{
	$('error_display').innerHTML = '';
	$('error_display').hide();

	UpdateReceiptForm( result );
	DisplayPage( 'receipt' );
}

function GetGameNameForFailure( receipt )
{
	if ( receipt )
	{
		if ( receipt.line_items && receipt.line_items[0] && receipt.line_items[0].line_item_description )
		{
			return receipt.line_items[0].line_item_description;
		}
	}
	return false;
}

function OnRegisterProductKeyFailure( ePurchaseResult, receipt )
{
	var sErrorMessage = 'An unexpected error has occurred.  Your product code has not been redeemed.  Please wait 30 minutes and try redeeming the code again.  If the problem persists, please contact <a href="https://help.steampowered.com/en/wizard/HelpWithCDKey">Steam Support</a> for further assistance.';
	var strGameName = GetGameNameForFailure( receipt );

	switch ( ePurchaseResult )
	{
		case 14:
			sErrorMessage = 'The product code you\'ve entered is not valid or is not a product code. Please double check to see if you\'ve mistyped your key. I, L, and 1 can look alike, as can V and Y, and 0 and O.  If you are redeeming a gift card please click <a href="%1$s">here</a> to redeem it.';
			break;

		case 15:
			sErrorMessage = 'The product code you\'ve entered has already been activated by a different Steam account. This code cannot be used again. Please contact the retailer or online seller where the code was purchased for assistance.';
			break;

		case 53:
			sErrorMessage = 'There have been too many recent activation attempts from this account or Internet address. Please wait and try your product code again later.';
			break;

		case 13:
			if ( strGameName )
			{
				sErrorMessage = 'Sorry, but %1$s is not available for purchase in this country. Your product key has not been redeemed.'.replace( /\%1\$s/, strGameName );
			}
			else
			{
				sErrorMessage = 'Sorry, but this product is not available for purchase in this country. Your product key has not been redeemed.';
			}
			break;

		case 9:
			sErrorMessage = 'This Steam account already owns the product(s) contained in this offer. To access them, visit your library in the Steam client.';
			break;

		case 24:
			sErrorMessage = 'The product code you\'ve entered requires ownership of another product before activation.\n\nIf you are trying to activate an expansion pack or downloadable content, please first activate the original game, then activate this additional content.';
			break;

		case 36:
			if ( strGameName )
			{
				sErrorMessage = 'The product code you have entered requires that you first play %1$s on the PlayStation®3 system before it can be registered.\n\nPlease:\n\n- Start %1$s on your PlayStation®3 system\n\n- Link your Steam account to your PlayStation®3 Network account\n\n- Connect to Steam while playing %1$s on the PlayStation®3 system\n\n- Register this product code through Steam.'.replace( /\%1\$s/g, strGameName );
			}
			else
			{
				sErrorMessage = 'The product code you have entered requires that you first play this game on the PlayStation®3 system before it can be registered.\n\nPlease:\n\n- Start this game on your PlayStation®3 system\n\n- Link your Steam account to your PlayStation®3 Network account\n\n- Connect to Steam while playing this game on the PlayStation®3 system\n\n- Register this product code through Steam.';
			}
			break;

		case 50: // User entered wallet code
			sErrorMessage = '#youraccount_registerkey_walletkey_error';
			break;

		case 4:
		default:
			sErrorMessage = 'An unexpected error has occurred.  Your product code has not been redeemed.  Please wait 30 minutes and try redeeming the code again.  If the problem persists, please contact <a href="https://help.steampowered.com/en/wizard/HelpWithCDKey">Steam Support</a> for further assistance.';
			break;
	}

	DisplayErrorMessage( sErrorMessage );
	$('register_btn').show();
	$('register_btn_in_progress').hide();
}

function UpdateReceiptForm( result )
{
	var eList = $('registerkey_productlist');

	var strLines = '';
	for ( item of result.purchase_receipt_info.line_items )
	{
		strLines = strLines + '<div class="registerkey_lineitem">' + V_EscapeHTML( item.line_item_description ) + '</div>';
	}
	eList.innerHTML = strLines;
}

function DisplayErrorMessage( strMessage )
{
	$('error_display').innerHTML = V_EscapeHTML( strMessage ).replace( /\n/g, '<br/>');
	$('error_display').style.display = 'block';
	Effect.ScrollTo( 'error_display' );
	
	new Effect.Highlight( 'error_display', { endcolor : '#000000', startcolor : '#ff9900' } );
}

