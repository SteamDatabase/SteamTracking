
var currently_selected_friend_block = '';
var currently_selected_friend_name = '';
var currently_selected_friend_id = 0;

var g_nPaymentMethodStep = 1;			 
var g_nPurchaseTotal = 0;				var g_strProviderRemaining = '';		  
var g_strProviderMethod = '';			
var nGetFinalPriceCalls = 0;

var g_bFinalizeTransactionInProgress = false;

function ReportCheckoutJSError( message, e )
{
	try 
	{
		if (typeof e == 'string')
    		e = new Error(e);
    		
		ReportError( '/public/javascript/checkout.js?l=english', message, message+":\n\n  Exception: "+e.name+" - "+e.message+"\n" );
	} catch( e ) 
	{
			}
}

function OnLoadCheckoutForm()
{
	UpdateStateSelectState(); 
	UpdatePaymentInfoForm();
	
	try 
	{
		var curTab = g_initialTab;
		if ( rgFocusOnTabSelect && rgFocusOnTabSelect[curTab] )
		{
			$( rgFocusOnTabSelect[curTab] ).focus();
		}
	} 
	catch( e ) 
	{
			}
}

function OpenUrlInNewBlankWindow( newURL )
{
	return window.open( newURL, "_blank" );
}

function GetAdditionalParametersForExternalPaymentProcessor( extProcessor )
{
	return "";
}

var g_bPayPalAuthInFlight = false;
function PerformPayPalAuthorization()
{
	try 
	{
		if ( $('paypaltoken').value )
		{
			var paypal_url = encodeURIComponent( 'https://www.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=%s'.replace( "%s", $('paypaltoken').value ) );
			var transID = $('transaction_id').value;
			OpenUrlInNewBlankWindow( 'https://store.steampowered.com/paypal/launchauth/?webbasedpurchasing=1&transid=' + transID + '&authurl='+paypal_url + GetAdditionalParametersForExternalPaymentProcessor( 'paypal' ) + '&s=' + g_SessionID );
			$('external_payment_processor_notice').innerHTML = '#paypal_authorization_inprogress';
			g_bPayPalAuthInFlight = true;
		}
	} 
	catch( e ) 
	{
		ReportCheckoutJSError( 'Failed launcing new window for PayPal auth', e );
	}
}


function OnCreateQiwiInvoiceFailure( eResult, resultDetail )
{
	var sErrorMessage = '#finalize_transaction_generic_error';
	
		switch ( resultDetail )
	{
		case 1:
			sErrorMessage = '#finalize_transaction_provider_unavailable';
			break;
			
		case 2:
			sErrorMessage = '#finalize_transaction_qiwi_invalid_phone_number';
			break;
			
		case 3:
		case 4:
		case 5:
		case 6:
						sErrorMessage = '#finalize_transaction_generic_error';
			break;		
			
		case 7:
			sErrorMessage = '#finalize_transaction_over_daily_limit';
			break;
			
		default:
			sErrorMessage = '#finalize_transaction_generic_error';
			break;
	}
	DisplayErrorMessage( sErrorMessage );
	
	$('purchase_button_bottom').style.display = 'block';
	$('purchase_button_inprogress_bottom').style.display = 'none';	
}


var g_bCreateQiwiInvoiceRunning = false;
function CreateQiwiInvoiceAndFinalizeTransaction( url )
{
	if ( g_bCreateQiwiInvoiceRunning )
		return;
		
		if ( !$('accept_ssa') || !$('accept_ssa').checked )
	{
		DisplayErrorMessage( '#checkout_ssa_fail' );
		ValidationMarkFieldBad( $('purchase_confirm_ssa') );
		return;
	}
	
	$('purchase_button_bottom').style.display = 'none';
	$('purchase_button_inprogress_bottom').style.display = 'block';

	var g_winQiwiWindow = window.open( 'http://store.steampowered.com/qiwi/launchauth', 'qiwiWindow' );

	g_bCreateQiwiInvoiceRunning = true;
	
	try 
	{
		var phoneNumber = $('mobile_number').value;
		var re = new RegExp(/^\+7|^\+38/ );
		var m = re.exec(phoneNumber);
		
		phoneNumber = phoneNumber.replace( m, "" );
		// strip out non-digits
		phoneNumber = phoneNumber.replace(/\D/g, "" );
		
		// add the country code back
		phoneNumber = m + phoneNumber;

		new Ajax.Request('https://store.steampowered.com/checkout/qiwiinvoice/',
		{
		    method:'post',
		    parameters: { 
				// Info for all carts
				'phone' : phoneNumber,
				'transid' : $('transaction_id').value
			},
			onSuccess: function(transport)
			{
			    	g_bCreateQiwiInvoiceRunning = false;
				if ( transport.responseText ){
					try {
						var result = transport.responseText.evalJSON(true);
			      		} catch ( e ) {
			      			// Failure
			      			OnCreateQiwiInvoiceFailure( 2, -1 );
			      			g_winQiwiWindow.close();
			      		}
			      	   	// Success...
			      	   	if ( result.success == 1 )
			      	   	{
			      	   											      	   		g_winQiwiWindow = window.open( result.url, 'qiwiWindow' );
			      	   		PollForTransactionStatus( $('transaction_id').value, 120, 15 ); 
			      	   		return;
			      	   	}
			      	   	else
			      	   	{
			      	   		OnCreateQiwiInvoiceFailure( result.success, result.result_detail );
			      	   		g_winQiwiWindow.close();
			      	   		return;
			      	   	}
			  	}
			  	
								OnCreateQiwiInvoiceFailure( 2, -1 );
			    },
			onFailure: function()
			{
			    	g_bCreateQiwiInvoiceRunning = false;
								OnCreateQiwiInvoiceFailure( 2, -1 );
				g_winQiwiWindow.close();
			}
		});
	} 
	catch(e) 
	{
		ReportCheckoutJSError( 'Failed gathering form data and calling CreateQiwiInvoiceAndFinalizeTransaction', e );
	}
}

var g_winExternal = false;
function PerformExternalFinalizeTransaction( url, useExternalRedirect)
{
		if ( !$('accept_ssa') || !$('accept_ssa').checked )
	{
		DisplayErrorMessage( '#checkout_ssa_fail' );
		ValidationMarkFieldBad( $('purchase_confirm_ssa') );
		return;
	}
	
	try 
	{
				
		
		var escapedUrl = encodeURIComponent( url );
		var transID = $('transaction_id').value;

		var method = $('payment_method');

				if ( g_bIsInClientOrOverlay && method.value == 'alipay' )
		{


			var iframe = $(document.createElement("iframe"));
			iframe.width = 0;
			iframe.height = 0;
			iframe.style.display = 'none';
			iframe.src = 'steam://openurl_external/https://store.steampowered.com//login/?redir=' + encodeURIComponent( 'paypal/launchauth/?webbasedpurchasing=1&transid=' + transID + '&authurl='+escapedUrl );

			document.body.appendChild(iframe);
		}
		else if( useExternalRedirect )
		{
			var displayPendingReceipt = false;
			switch ( method.value )
			{
				case 'boleto':
				case 'boacompragold':
				case 'bancodobrasilonline':
				case 'itauonline':
				case 'bradescoonline':
				case 'pagseguro':
				case 'visabrazil':
				case 'amexbrazil':
				case 'hipercard':
				case 'aura':
				case 'mastercardbrazil':
				case 'dinerscardbrazil':
				case 'multibanco':
				case 'payshop':
				case 'maestroboacompra':
				case 'molpoints':
				case 'konbini':
				case 'bank_transfer_japan':
				case 'payeasy':
				case 'oxxo':
				case 'toditocash':
				case 'carnet':
				case 'spei':
				case '3pay':
				case 'isbank':
				case 'garanti':
				case 'akbank':
				case 'yapikredi':
				case 'halkbank':
				case 'bankasya':
				case 'finansbank':
				case 'denizbank':
				case 'ptt':
				case 'cashu':
				case 'onecard':
					displayPendingReceipt = true;
					break;
						
				default:
					break;
			}
		
			g_winExternal = window.open( 'https://store.steampowered.com/checkout/externallink/?transid=' + transID, '_external_provider', '' );

						if ( displayPendingReceipt )
			{
				DisplayPendingReceiptPage();
			}
			else
			{
				PollForTransactionStatus( $('transaction_id').value, 120, 15 ); 
			}

		}
		else
		{
			OpenUrlInNewBlankWindow( 'https://store.steampowered.com/paypal/launchauth/?webbasedpurchasing=1&transid=' + transID + '&authurl='+escapedUrl + '&s=' + g_SessionID );
		}
		
		$('purchase_button_bottom').style.display = 'none';
		$('purchase_button_inprogress_bottom').style.display = 'block';
	} 
	catch( e ) 
	{
		ReportCheckoutJSError( 'Failed launching new window for external auth', e );
	}
}

function PopupCVV2Explanation()
{
	try 
	{
		var method = $('payment_method');
		var type = 'non-amex';
		if ( method && method.value == 'amex' )
		{
			type = 'amex';
		}
		
		 window.open( 'http://store.steampowered.com/checkout/cvv2explain/?webbasedpurchasing=1&type='+type, '_blank', "height=225,width=225,toolbar=no,menubar=no,resiable=no,scrollbars=no,status=no,titlebar=no" );
	} 
	catch( e ) 
	{
		ReportCheckoutJSError( 'Failed popping CVV2 explanation', e );
	}
}

function SetButtonInnerHtml( objName, value )
{
	$J( '*:not(:has("*"))' ,objName).text( value );
}

var g_nSubmitPaymentInfoButtonState = 1;
var g_bAnimatingSubmitButtonCurrently = false;
function AnimateSubmitPaymentInfoButton()
{
	try 
	{
						if ( !g_bInitTransactionCallRunning && !g_bGetFinalPriceRunning && !g_bFinalizeTransactionInProgress && !g_bPollingForTransactionStatus )
		{
			$J('#submit_payment_info_btn').show();
			$J('#submit_payment_info_btn_in_progress').hide();
			g_bAnimatingSubmitButtonCurrently = false;
			return;
		}
		
		g_bAnimatingSubmitButtonCurrently = true;
		$J('#submit_payment_info_btn').hide();
		$J('#submit_payment_info_btn_in_progress').show();
			
		g_nSubmitPaymentInfoButtonState++;
		if ( g_nSubmitPaymentInfoButtonState > 3 )
			g_nSubmitPaymentInfoButtonState = 1;
			
		var append = '';
		if ( g_nSubmitPaymentInfoButtonState == 1 )
		{
			append = '.';
		}
		else if ( g_nSubmitPaymentInfoButtonState == 2 ) 
		{
			append = '..';
		}
		else 
		{
			append = '...';
		} 
		
		SetButtonInnerHtml( 'submit_payment_info_btn_in_progress', '#btn_checkout_payment_info_in_progress'+append );
		
		setTimeout( AnimateSubmitPaymentInfoButton, 500 );
	} 
	catch( e ) 
	{
		ReportCheckoutJSError( 'Failed in AnimateSubmitPaymentInfoButton', e );
	}
}

var g_nStoredCardLabelState = 1;
function AnimateStoredCardProcessingLabel()
{
	try 
	{
				if ( !g_bInitTransactionCallRunning && !g_bGetFinalPriceRunning )
		{
			$('stored_card_processing').hide();
			return;
		}
		$('stored_card_processing_label').show();
			
		g_nStoredCardLabelState++;
		if ( g_nStoredCardLabelState > 3 )
			g_nStoredCardLabelState = 1;
			
		var append = '';
		if ( g_nStoredCardLabelState == 1 )
		{
			append = '.';
		}
		else if ( g_nStoredCardLabelState == 2 ) 
		{
			append = '..';
		}
		else 
		{
			append = '...';
		} 
		
		$('stored_card_processing_label').innerHTML = '#btn_checkout_payment_info_in_progress'+append;

		setTimeout( AnimateStoredCardProcessingLabel, 500 );
	} 
	catch( e ) 
	{
		ReportCheckoutJSError( 'Failed in AnimateStoredCardProcessingLabel', e );
	}
}

var g_nSubmitGiftNoteButtonState = 1;
function AnimateSubmitGiftNoteButton()
{
	try 
	{
				if ( !g_bInitTransactionCallRunning && !g_bGetFinalPriceRunning && !g_bSendGiftCallRunning )
		{
			$('submit_gift_note_btn').show();
			$('submit_gift_note_btn_in_progress').hide();
			
			return;
		}
		$('submit_gift_note_btn').hide();
		$('submit_gift_note_btn_in_progress').show();
			
		g_nSubmitGiftNoteButtonState++;
		if ( g_nSubmitGiftNoteButtonState > 3 )
			g_nSubmitGiftNoteButtonState = 1;
			
		var append = '';
		if ( g_nSubmitGiftNoteButtonState == 1 )
		{
			append = '.';
		}
		else if ( g_nSubmitGiftNoteButtonState == 2 ) 
		{
			append = '..';
		}
		else 
		{
			append = '...';
		} 
		
		SetButtonInnerHtml('submit_gift_note_btn_in_progress', '#btn_checkout_payment_info_in_progress'+append );
		
		setTimeout( AnimateSubmitGiftNoteButton, 500 );
	} 
	catch( e ) 
	{
		ReportCheckoutJSError( 'Failed in AnimateSubmitGiftNoteButton', e );
	}
}

var g_bInitTransactionCallRunning = false;
function InitializeTransaction()
{
		if( g_bInitTransactionCallRunning )
		return;
		
	var giftee_account_id = 0;
	var giftee_email = '';
	var giftee_name = '';
	var gift_message = '';
	var gift_sentiment = '';
	var gift_signature = '';
	var bIsGift = false;
	
		$('is_external_finalize_transaction').value = 0;
	
		if ( g_bIsUpdateBillingInfoForm && BIsStoredCreditCard() )
	{
		var result = new Object();
		result.success = 1;
		result.purchaseresultdetail = 0;
		OnPurchaseSuccess( result );
		return;
	}
	
	try 
	{
		var old_transaction_id = $('transaction_id').value;
		if ( old_transaction_id != '' && old_transaction_id != -1 )
		{
			$('transaction_id').value = -1;
			$('paypaltoken').value = '';
			
									new Ajax.Request('https://store.steampowered.com/checkout/canceltransaction/',
			{
			    method:'post',
			    parameters: { 
					'transid' : old_transaction_id 
				},
			    onSuccess: function(transport){
			    	//alert( 'cancel ok' );
					return;
			    },
			    onFailure: function(){
			    	//alert( 'cancel fail' );
					return;
				}
			});
		}
	} 
	catch(e) 
	{
		ReportCheckoutJSError( 'Failed cancelling previous transaction', e );
	}
	
	try 
	{
				if ( $( 'send_via_email' ) )
		{
			bIsGift = true;
			if ( $( 'send_via_email' ).checked )
			{
				giftee_email = $( 'email_input' ).value;
			}
			else
			{
				giftee_account_id = currently_selected_friend_id;
			}
			giftee_name = $('gift_recipient_name').value;
			gift_message = $('gift_message_text').value;
			gift_sentiment = $('gift_sentiment').value;
			gift_signature = $('gift_signature').value;
		}
		
		var bHasCardInfo = false;
		method = $('payment_method');
		if ( BIsCreditCardMethod( method.value ) )
		{
			bHasCardInfo = true;
		}
		
				g_bInitTransactionCallRunning = true;
		
				AnimateSubmitPaymentInfoButton();
		
		var sPaymentMethod = method.value;
		if ( BIsStoredCreditCard() )
		{
			sPaymentMethod = $('stored_payment_method').value;
		}
		else if ( method.value == 'storedpaypal' && g_bEnableCachedPayPalCredentials )
		{
			sPaymentMethod = 'paypal';
		}
		else if ( method.value == 'updatepaypal' )
		{
			sPaymentMethod = 'paypal';
		}
	 
	 	var paymentGID = '';
	 	
	 	if ( BIsStoredCreditCard() )
	 	{
	 		paymentGID = $('stored_card_id').value;
	 	}
	 	else if ( method.value == 'storedpaypal' && g_bEnableCachedPayPalCredentials )
	 	{
	 		paymentGID = $('stored_paypal_id').value;
	 	}
		
		var bSaveBillingAddress = false;
		if ( $('save_my_address').checked && !BIsStoredCreditCard() && method.value != 'storedpaypal' )
		{
			if ( method.value == 'paypal' || method.value == 'updatepaypal' )
				bSaveBillingAddress = g_bEnableCachedPayPalCredentials;
			else
				bSaveBillingAddress = true;
		}

		$('gift_tracking_description').hide();
				if ( bIsGift )
		{
			if ( $('send_self') && $('send_self').checked )
			{
								$('checkout_receipt_description').innerHTML = '#checkout_receipt_gift_stored_in_inventory'.replace( '<%1$s>', '<a href="' + g_sInventoryLink + '">').replace( '<%2$s>', '</a>');
			}
			else
			{
								$('checkout_receipt_description').innerHTML = '#checkout_receipt_gift_on_the_way';
				$('gift_tracking_description').show();
			}
		}
		else if ( g_bMicroTxn )
		{
						$('checkout_receipt_description').innerHTML = '#checkout_receipt_purchase_available_microtxn';
		}
		else if ( g_bWalletCreditOnly )
		{
						$('checkout_receipt_description').innerHTML = '#checkout_receipt_purchase_available_microtxn';
		}
		else if ( g_bIsInOverlay )
		{
						 			$('checkout_receipt_description').innerHTML = '#checkout_receipt_purchase_available_v5';
					}		
		else
		{
			if ( g_nItemsForSelf > 0 && g_nItemsForGifts > 0 )
			{
								$('checkout_receipt_description').innerHTML = '#checkout_receipt_extras_in_inventory'.replace( '<%1$s>', '<a href="' + g_sInventoryLink + '">').replace( '<%2$s>', '</a>');
			}
			else if ( g_nItemsForSelf == 0 && g_nItemsForGifts > 0 )
			{
								$('checkout_receipt_description').innerHTML = '#checkout_receipt_gift_stored_in_inventory'.replace( '<%1$s>', '<a href="' + g_sInventoryLink + '">').replace( '<%2$s>', '</a>');
			}
			else
			{
												$('checkout_receipt_description').innerHTML = '#checkout_receipt_purchase_available_v5';
							}
		}

		new Ajax.Request('https://store.steampowered.com/checkout/inittransaction/',
		{
		    method:'post',
		    parameters: { 
				// Info for all carts
				'gidShoppingCart' : $('shopping_cart_gid').value,
				'PaymentMethod' : sPaymentMethod,
				'abortPendingTransactions' : ( $('cancel_pending').checked ? 1 : 0 ),
		    	
				'bHasCardInfo' : ( bHasCardInfo ? 1 : 0 ),
				'CardNumber' : $('card_number').value,
				'CardExpirationYear' : $('expiration_year').value,
				'CardExpirationMonth' : $('expiration_month').value,
				
				// address info, which may go unused be there depending on payment method
				'FirstName' : $('first_name').value,
				'LastName' : $('last_name').value,
				'Address' : $('billing_address').value,
				'AddressTwo' : $('billing_address_two').value,
				'Country' : $('billing_country').value,
				'City' : $('billing_city').value,
				'State' : ($('billing_country').value == 'US' ? $('billing_state_select').value : $('billing_state_text').value),
				'PostalCode' : $('billing_postal_code').value,
				'Phone' : $('billing_phone').value,

				'ShippingFirstName' : $('shipping_first_name') ? $('shipping_first_name').value : '',
				'ShippingLastName' : $('shipping_last_name').value,
				'ShippingAddress' : $('shipping_address').value,
				'ShippingAddressTwo' : $('shipping_address_two').value,
				'ShippingCountry' : $('shipping_country').value,
				'ShippingCity' : $('shipping_city').value,
				'ShippingState' : ($('shipping_country').value == 'US' ? $('shipping_state_select').value : $('shipping_state_text').value),
				'ShippingPostalCode' : $('shipping_postal_code').value,
				'ShippingPhone' : $('shipping_phone').value,

		    	
				// gift info, which may or may not exist
				'bIsGift' : ( bIsGift ? 1 : 0 ),
				'GifteeAccountID' : giftee_account_id,
				'GifteeEmail' : giftee_email,
				'GifteeName' : giftee_name,
				'GiftMessage' : gift_message,
				'GiftSentiment' : gift_sentiment,
				'GiftSignature' : gift_signature, 
				
				'BankAccount' : $('bank_account').value,
				'BankCode' : $('bank_code').value,
				'BankIBAN' : $('bank_iban').value,
				'BankBIC' : $('bank_bic').value,
				
								'bSaveBillingAddress' : bSaveBillingAddress ? 1 : 0,
				'gidPaymentID' : paymentGID,
				'bUseRemainingSteamAccount' : (g_bUseRemainingSteamAccount ? 1 : 0),
				'bPreAuthOnly' : (g_bIsUpdateBillingInfoForm ? 1 : 0)
			},
		    onSuccess: function(transport){
		    	g_bInitTransactionCallRunning = false;
				if ( transport.responseText ){
					try {
						var result = transport.responseText.evalJSON(true);
		      		} catch ( e ) {
		      			// Failure
		      			OnInitializeTransactionFailure( 0 );
		      		}
		      	   	// Success...
		      	   	if ( result.success == 1 && result.transid != -1 )
		      	   	{
		      	   		OnInitializeTransactionSuccess( result );
		      	   		return;
		      	   	}
		      	   	else
		      	   	{
		      	   		OnInitializeTransactionFailure( result.purchaseresultdetail, result );
		      	   		return;
		      	   	}
			  	}
			  	
								OnInitializeTransactionFailure( 0  );
		    },
		    onFailure: function(){
								g_bInitTransactionCallRunning = false;
				OnInitializeTransactionFailure( 0  );
			}
		});
	} 
	catch(e) 
	{
		ReportCheckoutJSError( 'Failed gathering form data and calling InitializeTransaction', e );
	}
}


function OnInitializeTransactionSuccess( result )
{
	try 
	{
				$('transaction_id').value = result.transid;
		
				if ( result.paymentmethod == 4 && result.transactionprovider != 5 && method.value != 'storedpaypal' )
		{
									
						$J('#payment_row_one').hide();
			$J('#payment_row_two').hide();
			$J('#payment_row_three').hide();
			$J('#payment_row_four').hide();
			$J('#payment_row_five').hide();
			$J('#payment_row_six').hide();
			$J('#payment_header_title').hide();
			$J('#payment_row_save_my_address').hide();
			$J('#payment_row_country_verification').hide();
			$J('#payment_method_specific_note').hide();
			$J('#payment_row_eight').show();
			
						$J('#credit_card_row').hide();
			$J('#card_number_label').hide();
			$J('#card_number').hide();
					
			$('paypaltoken').value = result.paypaltoken;
			$('external_payment_processor_notice').innerHTML = '#paypal_authorization_explanation';
			$('submit_payment_info_btn').href = "javascript:PerformPayPalAuthorization();";
			$( 'payment_info_form' ).onsubmit = function() { PerformPayPalAuthorization(); return false; };
			SetButtonInnerHtml('submit_payment_info_btn', '#paypal_authorization_btn' );
			
			$J('#payment_method_previous_button').hide();
			
			return;
		}
		else if ( ( result.paymentmethod == 4 && method.value != 'storedpaypal' ) || result.paymentmethod == 3 
					|| result.paymentmethod == 5 || result.paymentmethod == 6					|| result.paymentmethod == 7 || result.paymentmethod == 9					|| result.paymentmethod == 10					|| result.paymentmethod == 11					|| result.paymentmethod == 12 
					|| result.paymentmethod == 14 
					|| result.paymentmethod == 33 
					|| result.paymentmethod == 17 
					|| result.paymentmethod == 18 || result.paymentmethod == 19					|| result.paymentmethod == 20 || result.paymentmethod == 21					|| result.paymentmethod == 22 || result.paymentmethod == 23					|| result.paymentmethod == 24 || result.paymentmethod == 25					|| result.paymentmethod == 26 || result.paymentmethod == 27					|| result.paymentmethod == 28 || result.paymentmethod == 29 
					|| result.paymentmethod == 45 || result.paymentmethod == 46 
					|| result.paymentmethod == 47 || result.paymentmethod == 48					|| result.paymentmethod == 49 || result.paymentmethod == 50					|| result.paymentmethod == 51 || result.paymentmethod == 52					|| result.paymentmethod == 53 || result.paymentmethod == 54					|| result.paymentmethod == 55 || result.paymentmethod == 56					|| result.paymentmethod == 57 || result.paymentmethod == 58					|| result.paymentmethod == 59 || result.paymentmethod == 60					|| result.paymentmethod == 61 || result.paymentmethod == 62					|| result.paymentmethod == 63					|| result.paymentmethod == 31					|| result.paymentmethod == 34					|| result.paymentmethod == 36					|| result.paymentmethod == 37					|| result.paymentmethod == 38					|| result.paymentmethod == 65					|| result.paymentmethod == 39					|| result.paymentmethod == 40					|| result.paymentmethod == 41					|| result.paymentmethod == 42					|| result.paymentmethod == 43					|| result.paymentmethod == 44					|| result.paymentmethod == 35 )
		{
						
						$('is_external_finalize_transaction').value = 1;
			
			
			GetFinalPriceAndUpdateReviewTab();
		}
		else if ( result.paymentmethod == 128 )
		{
						DHighlightItemByValue( 'payment_method', 'steamaccount', true );	
			GetFinalPriceAndUpdateReviewTab();
		}
		else
		{
						GetFinalPriceAndUpdateReviewTab();
		}
	} 
	catch( e ) 
	{
		ReportCheckoutJSError( 'Failed handling InitializeTransaction success', e );
	}
}

function OnInitializeTransactionFailure( detail, result )
{
	try 
	{
				SetTabEnabled( 'payment_info' );
		var error_text = '#checkout_failed_inittransaction';
		if ( result && result.specificerrortext )
		{
			error_text = result.specificerrortext;
		}
		else
		{
			switch ( detail )
			{
				case 1:
					error_text = '#checkout_failed_inittransaction_avs';
					break;
				case 2:
					error_text = '#checkout_failed_inittransaction_insufficientfunds';
					break;
				case 3:
					error_text = '#checkout_failed_inittransaction_support';
					break;
				case 6:
					error_text = '#checkout_failed_inittransaction_unavailable';
					break;
				case 33:
					error_text = '#checkout_failed_inittransaction_expiredcard';
					break;
				case 24:
					error_text = '#checkout_failed_inittransaction_requiredapp';
					break;
				case 9:
					error_text = '#checkout_failed_inittransaction_alreadyowned';
					break;
				case 57:
					error_text = '#checkout_failed_inittransaction_subscriptionexists';
					break;
				case 31:
					error_text = '#checkout_failed_inittransaction_walletcurrencymismatch';
					break;
				case 35:
					error_text = '#finalize_transaction_exceed_wallet_max';
					break;
				case 39:
					error_text = '#checkout_failed_inittransaction_cannotgift';
					break;
				case 40:
					error_text = '#checkout_failed_inittransaction_cannot_ship_internationally';
					break;
				case 38:
					error_text = '#checkout_failed_inittransaction_out_of_inventory';
					break;
				case 44:
					error_text = '#checkout_failed_account_locked';
					break;
				case 45:
					error_text = '#checkout_failed_inittransaction_pending_transactions';
					$J('#cancel_pending_verification').show();
					ValidationMarkFieldBad( $('cancel_pending_label' ) );
					break;
				case 46:
					error_text = '#checkout_failed_steam_limit_exceeded';
					break;
				case 47:
					error_text = '#checkout_failed_overlapping_packages_in_cart';
					break;
				case 23:
					error_text = '#checkout_failed_billing_country_mismatch';
					break;
				case 8:
					error_text = '#checkout_failed_others_in_progress';
					break;
				case 52:
					error_text = '#checkout_failed_others_in_progress_delayed';
					break;
				case 55:
					error_text = '#checkout_error_bad_cardnumber';
					break;
				case 56:
					error_text = '#checkout_failed_inittransaction_cart_amount_too_high';
					break;
				default:
					break;
			}
		}
		
		DisplayErrorMessage( error_text );
	} 
	catch (e) 
	{
		ReportCheckoutJSError( 'Failed handling InitializeTransaction failure', e );
	}
}


 
function OnPayPalSuccess( gidTransID )
{
		if ( gidTransID && $('transaction_id').value != gidTransID )
		return;
	
		if ( $('is_external_finalize_transaction').value == 1 )
	{
				if ( g_bPollingForTransactionStatus )
		{
			if ( g_timeoutPoll )
			{
				clearTimeout( g_timeoutPoll );
				
				var method = $('payment_method');
				
				switch( method.value )
				{
										case 'boleto':
					case 'boacompragold':
					case 'bancodobrasilonline':
					case 'itauonline':
					case 'bradescoonline':
					case 'pagseguro':
					case 'visabrazil':
					case 'amexbrazil':
					case 'hipercard':
					case 'aura':
					case 'mastercardbrazil':
					case 'dinerscardbrazil':
					case 'multibanco':
					case 'payshop':
					case 'maestroboacompra':
					case 'oxxo':
					case 'toditocash':
					case 'carnet':
					case 'spei':
					case '3pay':
					case 'isbank':
					case 'garanti':
					case 'akbank':
					case 'yapikredi':
					case 'halkbank':
					case 'bankasya':
					case 'finansbank':
					case 'denizbank':
					case 'ptt':
					case 'cashu':
					case 'onecard':
					case 'molpoints':
					case 'konbini':
					case 'bank_transfer_japan':
					case 'payeasy':
						DisplayPendingReceiptPage();
						break;

					default:
												g_timeoutPoll = setTimeout( NewPollForTransactionStatusClosure( $('transaction_id').value, 120, 15 ), 1*1000 );
					break;
				}
			}
		}
		else
		{
			FinalizeTransaction();
		}
	}
	else
	{
		if ( g_bPayPalAuthInFlight )
			GetFinalPriceAndUpdateReviewTab();
		g_bPayPalAuthInFlight = false;
	}
	return true;
}


function OnPayPalCancel( gidTransID )
{
		if ( gidTransID && $('transaction_id').value != gidTransID )
		return;

	HandleFinalizeTransactionFailure( 4, 0, false, '' );
	return true;
}

var g_bGetFinalPriceRunning = false;
function GetFinalPriceAndUpdateReviewTab()
{
	try 
	{
				if ( g_bGetFinalPriceRunning )
			return;
	
		g_bGetFinalPriceRunning = true;
		// clear the cancel pending checkbox in case we need to go back
		$('cancel_pending').checked = false;
		
						if ( !g_bAnimatingSubmitButtonCurrently )
			AnimateSubmitPaymentInfoButton();
	
				var transid = $('transaction_id').value;
		var microtxnid = $('microtxn_id') ? $('microtxn_id').value : -1;
		var cart = $('cart_id') ? $('cart_id').value : -1;
		new Ajax.Request('https://store.steampowered.com/checkout/getfinalprice/',
		{
		    method:'get',
		    parameters: { 
				'count' : ++nGetFinalPriceCalls,
				'transid' : transid,
				'purchasetype' : g_bIsGiftForm ? 'gift' : 'self',
				'microtxnid' : microtxnid,
				'cart' : cart
			},
		    onSuccess: function(transport){
		    	g_bGetFinalPriceRunning = false;
				if ( transport.responseText ){
					try {
						var result = transport.responseText.evalJSON(true);
		      		} catch ( e ) {
		      			OnGetFinalPriceFailure( 0 );
		      		}
		      	   	if ( result.success == 1 )
		      	   	{
		      	   		OnGetFinalPriceSuccess( result );
		      	   		return;
		      	   	}
		      	   	else
		      	   	{
		      	   		OnGetFinalPriceFailure( result.purchaseresultdetail );
		      	   		return;
		      	   	}
			  	}
			  	
								OnGetFinalPriceFailure( 0 );
		    },
		    onFailure: function(){
								g_bGetFinalPriceRunning = false;
				OnGetFinalPriceFailure( 0 );
			}
		});
	} 
	catch(e) 
	{
		ReportCheckoutJSError( 'Failed making GetFinalPrice request', e );
	}
}

var g_bRequiresCVVReEntry = false;
function OnGetFinalPriceSuccess( result )
{
	try 
	{
				$('stored_card_processing').hide();
		g_bRequiresCVVReEntry = result.requirecvv;
		
				UpdateReviewPageBillingInfoWithCurrentValues( result );
		
		if ( result )
		{
						
			if ( result.total )
				g_nPurchaseTotal = result.total;
			
			if ( result.steamAccountBalance )
				g_nSteamAccountBalance = result.steamAccountBalance;
			
			if ( result.formattedProviderRemaining )
				g_strProviderRemaining = result.formattedProviderRemaining;
			
						if ( result.providerpaymentmethod != null && result.total && result.steamAccountBalance )
			{
				if ( result.providerpaymentmethod == 0 && result.total > result.steamAccountBalance )
				{
					SetTabEnabled( 'payment_info' );
					return;
				}
			}

			result.priceOfASubChanged ? $J('#checkout_review_cart_message').show() : $('checkout_review_cart_message').hide();

		}
		
				if ( $('is_external_finalize_transaction').value == 1 )
		{
			if ( $('col_right_review_payment_tips') )
			{
				$J('#col_right_review_payment_tips').show();
			}
		
			var method = $('payment_method');
			if ( result.externalurl )
			{
								var url = result.externalurl.replace( /%/g, '%25' );
				$('purchase_button_bottom').href = "javascript:PerformExternalFinalizeTransaction( '"+url.replace( /\'/g, "\\'" )+"', " + ( result.useexternalredirect ? "true" : "false" ) + " );";
				$J('#purchase_bottom_note_paypalgc').show();

				$('purchase_top').show();
				
				if ( method.value == 'giropay' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#giropay_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#giropay_authorization_btn';

					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#giropay_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#giropay_payment_tips_text';
					}
				}
				else if ( method.value == 'ideal' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#ideal_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#ideal_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#ideal_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#ideal_payment_tips_text';
					}
				}
				else if ( method.value == 'paysafe' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#paysafe_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#paysafe_authorization_btn';					
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#paysafe_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#paysafe_payment_tips_text';
					}
				}
				else if ( method.value == 'paypal' || method.value == 'storedpaypal' || method.value == 'updatepaypal' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#paypal_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#paypal_authorization_btn';

					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#paypal_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#paypal_payment_tips_text';
					}
				}
				else if ( method.value == 'sofort' )
				{
					if ( result.storeCountryCode == 'GB' || result.storeCountryCode == 'BE' )
					{
						$('purchase_bottom_note_paypalgc').innerHTML = '#directebanking_authorization_explanation';
						$('purchase_button_bottom_text').innerHTML = '#directebanking_authorization_btn';
						
						if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
						{
							$('col_right_review_payment_tips_header_text').innerHTML = '#directebanking_payment_tips_header';
							$('col_right_review_payment_tips_info_text').innerHTML = '#directebanking_payment_tips_text';
						}
					}
					else
					{
						$('purchase_bottom_note_paypalgc').innerHTML = '#sofort_authorization_explanation';
						$('purchase_button_bottom_text').innerHTML = '#sofort_authorization_btn';
						if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
						{
							$('col_right_review_payment_tips_header_text').innerHTML = '#sofort_payment_tips_header';
							$('col_right_review_payment_tips_info_text').innerHTML = '#sofort_payment_tips_text';
						}
					}
				}
				else if ( method.value == 'webmoney' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#webmoney_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#webmoney_authorization_btn';					
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#webmoney_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#webmoney_payment_tips_text';
					}
				}
				else if ( method.value == 'moneybookers' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#moneybookers_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#moneybookers_authorization_btn';					

					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#moneybookers_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#moneybookers_payment_tips_text';
					}
				}
				else if ( method.value == 'alipay' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#alipay_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#alipay_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#alipay_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#alipay_payment_tips_text';
					}
				}
				else if ( method.value == 'yandex' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#yandex_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#yandex_authorization_btn';

					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#yandex_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#yandex_payment_tips_text';
					}
				}
				else if ( method.value == 'qiwi' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#qiwi_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#qiwi_authorization_btn';

					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#qiwi_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#qiwi_payment_tips_text';
					}
					
					// change the button to do something else
					$('purchase_button_bottom').href = "javascript:CreateQiwiInvoiceAndFinalizeTransaction( '"+url.replace( /\'/g, "\\'" )+"' );";
				}				
				else if ( method.value == 'beeline' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#beeline_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#beeline_authorization_btn';

					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#beeline_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#beeline_payment_tips_text';
					}
				}				
				else if ( method.value == 'mopay' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#mopay_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#mopay_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#mopay_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#mopay_payment_tips_text';
					}
				}
				else if ( method.value == 'boleto' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#boleto_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#boleto_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#boleto_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#boleto_payment_tips_text';
					}
				}
				else if ( method.value == 'boacompragold' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#boacompragold_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#boacompragold_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#boacompragold_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#boacompragold_payment_tips_text';
					}
				}
				else if ( method.value == 'bancodobrasilonline' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#bancodobrasilonline_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#bancodobrasilonline_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#bancodobrasilonline_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#bancodobrasilonline_payment_tips_text';
					}
				}
				else if ( method.value == 'itauonline' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#itauonline_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#itauonline_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#itauonline_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#itauonline_payment_tips_text';
					}
				}
				else if ( method.value == 'bradescoonline' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#bradescoonline_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#bradescoonline_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#bradescoonline_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#bradescoonline_payment_tips_text';
					}
				}
				else if ( method.value == 'pagseguro' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#pagseguro_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#pagseguro_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#pagseguro_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#pagseguro_payment_tips_text';
					}
				}
				else if ( method.value == 'visabrazil' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#visabrazil_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#visabrazil_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#visabrazil_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#visabrazil_payment_tips_text';
					}
				}
				else if ( method.value == 'amexbrazil' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#amexbrazil_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#amexbrazil_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#amexbrazil_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#amexbrazil_payment_tips_text';
					}
				}
				else if ( method.value == 'aura' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#aura_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#aura_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#aura_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#aura_payment_tips_text';
					}
				}
				else if ( method.value == 'hipercard' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#hipercard_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#hipercard_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#hipercard_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#hipercard_payment_tips_text';
					}
				}
				else if ( method.value == 'mastercardbrazil' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#mastercardbrazil_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#mastercardbrazil_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#mastercardbrazil_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#mastercardbrazil_payment_tips_text';
					}
				}
				else if ( method.value == 'dinerscardbrazil' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#dinerscardbrazil_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#dinerscardbrazil_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#dinerscardbrazil_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#dinerscardbrazil_payment_tips_text';
					}
				}
				else if ( method.value == 'multibanco' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#multibanco_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#multibanco_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#multibanco_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#multibanco_payment_tips_text';
					}
				}
				else if ( method.value == 'payshop' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#payshop_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#payshop_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#payshop_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#payshop_payment_tips_text';
					}
				}
				else if ( method.value == 'maestroboacompra' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#maestroboacompra_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#maestroboacompra_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#maestroboacompra_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#maestroboacompra_payment_tips_text';
					}
				}
				else if ( method.value == 'oxxo' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#oxxo_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#oxxo_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#oxxo_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#oxxo_payment_tips_text';
					}
				}
				else if ( method.value == 'toditocash' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#toditocash_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#toditocash_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#toditocash_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#toditocash_payment_tips_text';
					}
				}
				else if ( method.value == 'carnet' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#carnet_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#carnet_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#carnet_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#carnet_payment_tips_text';
					}
				}
				else if ( method.value == 'spei' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#spei_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#spei_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#spei_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#spei_payment_tips_text';
					}
				}
				else if ( method.value == '3pay' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#3pay_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#3pay_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#3pay_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#3pay_payment_tips_text';
					}
				}
				else if ( method.value == 'isbank' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#isbank_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#isbank_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#isbank_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#isbank_payment_tips_text';
					}
				}
				else if ( method.value == 'garanti' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#garanti_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#garanti_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#garanti_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#garanti_payment_tips_text';
					}
				}
				else if ( method.value == 'akbank' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#akbank_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#akbank_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#akbank_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#akbank_payment_tips_text';
					}
				}
				else if ( method.value == 'yapikredi' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#yapikredi_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#yapikredi_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#yapikredi_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#yapikredi_payment_tips_text';
					}
				}
				else if ( method.value == 'halkbank' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#halkbank_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#halkbank_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#halkbank_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#halkbank_payment_tips_text';
					}
				}
				else if ( method.value == 'bankasya' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#bankasya_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#bankasya_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#bankasya_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#bankasya_payment_tips_text';
					}
				}
				else if ( method.value == 'finansbank' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#finansbank_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#finansbank_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#finansbank_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#finansbank_payment_tips_text';
					}
				}
				else if ( method.value == 'denizbank' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#denizbank_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#denizbank_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#denizbank_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#denizbank_payment_tips_text';
					}
				}
				else if ( method.value == 'ptt' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#ptt_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#ptt_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#ptt_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#ptt_payment_tips_text';
					}
				}
				else if ( method.value == 'cashu' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#cashu_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#cashu_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#cashu_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#cashu_payment_tips_text';
					}
				}
				else if ( method.value == 'onecard' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#onecard_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#onecard_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#onecard_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#onecard_payment_tips_text';
					}
				}
				else if ( method.value == 'molpoints' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#molpoints_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#molpoints_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#molpoints_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#molpoints_payment_tips_text';
					}
				}				
				else if ( method.value == 'konbini' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#konbini_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#konbini_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#konbini_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#konbini_payment_tips_text';
					}
				}				
				else if ( method.value == 'credit_card_japan' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#credit_card_japan_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#credit_card_japan_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#credit_card_japan_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#credit_card_japan_payment_tips_text';
					}
				}				
				else if ( method.value == 'bank_transfer_japan' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#bank_transfer_japan_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#bank_transfer_japan_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#bank_transfer_japan_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#bank_transfer_japan_payment_tips_text';
					}
				}				
				else if ( method.value == 'payeasy' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#payeasy_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#payeasy_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#payeasy_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#payeasy_payment_tips_text';
					}
				}				
				else if ( method.value == 'webmoney_japan' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#webmoney_japan_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#webmoney_japan_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#webmoney_japan_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#webmoney_japan_payment_tips_text';
					}
				}				
				else if ( method.value == 'zong' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#zong_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#zong_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#zong_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#zong_payment_tips_text';
					}
				}				
				else if ( method.value == 'culturevoucher' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#culturevoucher_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#culturevoucher_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#culturevoucher_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#culturevoucher_payment_tips_text';
					}
				}				
				else if ( method.value == 'bookvoucher' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#bookvoucher_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#bookvoucher_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#bookvoucher_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#bookvoucher_payment_tips_text';
					}
				}				
				else if ( method.value == 'happymoneyvoucher' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#happymoneyvoucher_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#happymoneyvoucher_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#happymoneyvoucher_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#happymoneyvoucher_payment_tips_text';
					}
				}				
				else if ( method.value == 'convenientstorevoucher' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#convenientstorevoucher_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#convenientstorevoucher_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#convenientstorevoucher_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#convenientstorevoucher_payment_tips_text';
					}
				}				
				else if ( method.value == 'gamevoucher' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#gamevoucher_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#gamevoucher_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#gamevoucher_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#gamevoucher_payment_tips_text';
					}
				}				
				else if ( method.value == 'eclubpoints' )
				{
					$('purchase_bottom_note_paypalgc').innerHTML = '#eclubpoints_authorization_explanation';
					$('purchase_button_bottom_text').innerHTML = '#eclubpoints_authorization_btn';
					if ( $('col_right_review_payment_tips_header_text') && $('col_right_review_payment_tips_info_text') ) 
					{
						$('col_right_review_payment_tips_header_text').innerHTML = '#eclubpoints_payment_tips_header';
						$('col_right_review_payment_tips_info_text').innerHTML = '#eclubpoints_payment_tips_text';
					}
				}				
			}
			else
			{
				OnGetFinalPriceFailure( 0 );
				return;
			}
		}
		else
		{
			if ( $('col_right_review_payment_tips') )
			{
				$J('#col_right_review_payment_tips').hide();
			}

			$('purchase_button_bottom').href = "javascript:FinalizeTransaction();";
			$J('#purchase_bottom_note_paypalgc').hide();
			$('purchase_top').hide();
			$('purchase_button_bottom_text').innerHTML = '#btn_checkout_finalize_purchase';
		}
		
				$J('#purchase_button_bottom').show();
		$J('#purchase_button_disabled_bottom').hide();
		$J('#purchase_button_inprogress_bottom').hide();
		$J('#change_payment_method_button_bottom').hide();
		$J('#cancel_button_bottom').hide();

				if ( BIsStoredCreditCard() )
			SetTabEnabled( 'payment_info', false );
			
				if ( g_bIsUpdateBillingInfoForm )
		{
			if ( $('is_external_finalize_transaction').value == 1 )
			{
								ReportCheckoutJSError( 'Update payment page is not implemented for this payment method ' + $('payment_method').value );
			}
			else
			{
				FinalizeTransaction();
			}
		}
		else
		{
						SetTabEnabled( 'review' );
		}
	} 
	catch(e) 
	{
		ReportCheckoutJSError( 'Failed handling GetFinalPrice success', e );
	}
}


function OnGetFinalPriceFailure( eErrorDetail )
{
	try 
	{
		SetTabEnabled( 'payment_info' );
		var error_text = '#finalize_transaction_generic_error';
		switch ( eErrorDetail )
		{
			default:
				error_text = '#finalize_transaction_generic_error';
				break;
			case 23:
				error_text = '#checkout_failed_getfinalprice_storecountry';
				break;
			case 51:
				var method = $('payment_method');
				switch (method.value)
				{
					case 'mopay':
						error_text = '#checkout_failed_getfinalprice_invalid_provider_amount_mopay';
						break;

					case 'sofort':
						error_text = '#checkout_failed_getfinalprice_invalid_provider_amount_sofort';
						break;

					case 'beeline':
						error_text = '#checkout_failed_getfinalprice_invalid_provider_amount_beeline';
						break;

					default:
						error_text = '#checkout_failed_getfinalprice_invalid_provider_amount';
						break;
				}
				break;
			case 1:
				error_text = '#checkout_failed_inittransaction_avs';
				break;
			case 56:
				error_text = '#checkout_failed_inittransaction_cart_amount_too_high';
				break;
			case 17:
				var method = $('payment_method');
				if ( method.value == 'giropay' )
				{
					error_text = '#checkout_failed_getfinalprice_giropay_bank_not_supported';
				}
				break;
		}	
		
				UpdatePaymentInfoForm();
		DisplayErrorMessage( error_text );
	} 
	catch(e) 
	{
		ReportCheckoutJSError( 'Failed hadnling GetFinalPrice failure', e );
	}
}


function SubmitSSA()
{
	try 
	{
				var errorString = '';
		
				var rgBadFields = { 
			ssa_body: false
		}
		
		var ssa_check = $('i_agree');
		if ( !ssa_check.checked )
		{
			errorString += "#joinsteam_error_ssa_not_agreed<br/>";
			rgBadFields.ssa_body = true;
		}
	
				for ( var key in rgBadFields )
		{
			if ( rgBadFields[key] )
				ValidationMarkFieldBad( key );
			else
				ValidationMarkFieldOk( key );
		}
	
				if ( errorString != '' )
		{
			DisplayErrorMessage( errorString );
		}
		else
		{
						document.forms['ssa'].submit();
		}
	} 
	catch(e) 
	{
		ReportCheckoutJSError( 'Failed submitting SSA agreement', e );
	}
}


function IsRadioButtonChecked( objId )
{
	return $(objId).checked;
}
function CheckFriendDisplay()
{
	try
	{
		if ( IsRadioButtonChecked( 'send_via_email' ) )
		{
			$( 'email_input' ).disabled = false;
		}
		else
		{
			$( 'email_input' ).disabled = true;
			$( 'email_input' ).value = '';
		}

		if ( IsRadioButtonChecked('send_via_friends') )
		{
			$J( '#send_via_friends_box' ).show();
			
			for ( var accountid in g_MapFriendsAvatars )
			{
				var img = $('friend_avatar_img_'+accountid);
				if ( img )
					img.src = g_MapFriendsAvatars[accountid];
			}
		}
		else
		{
			$J('#send_via_friends_box').hide();
		}
	} 
	catch(e)
	{
		ReportCheckoutJSError( 'Failed handling CheckFriendDisplay', e );
	}
}


function SelectGiftRecipient( id, name )
{
	try 
	{
		if ( $( currently_selected_friend_block ) )
		{
			$( currently_selected_friend_block ).removeClassName( 'active' );
		}
		if ( $( 'friend_block_'+id ) )
			$( 'friend_block_'+id ).addClassName( 'active' );
		
		currently_selected_friend_block = 'friend_block_'+id;
		currently_selected_friend_id = id;
		currently_selected_friend_name = name;
	} 
	catch( e ) 
	{
		ReportCheckoutJSError( 'Failed selecting gift recipient', e );
	}
}

function SubmitGiftDeliveryForm()
{
		var errorString = '';
	
		var rgBadFields = { 
		email_input : false, 
		friends_chooser : false
	}
	
	try 
	{
		if ( $( 'send_via_email' ).checked )
		{
			var email = $('email_input').value;
			var email_regex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
			if ( email == '' || !email_regex.test(email) )
			{
				errorString += '#checkout_error_bad_gift_email<br/>';
				rgBadFields.email_input = true;
			}
		}
		else if ( $('send_self') && $('send_self').checked )
		{
			// nothing to validate
		}
		else if ( $('unsend_gift') && $('unsend_gift').checked )
		{
			// nothing to validate
		}
		else if ( $('send_accountid' ) && $('send_accountid').checked )
		{
			if ( $('internal_giftee_accountid').value == '' )
			{
				errorString += '#checkout_error_no_friend_selected<br/>';
				rgBadFields.internal_giftee_accountid = true;
			}
			else
				rgBadFields.internal_giftee_accountid = false;
		}
		else
		{
			var bIsSomethingChecked = false;
			var rgRadios = Form.getInputs( 'gift_recipient_form', 'radio', 'friend_radio' );
			for( var i = 0; i < rgRadios.length; ++i )
			{
				if( rgRadios[i].checked ) 
					bIsSomethingChecked = true;
			}
			if ( !bIsSomethingChecked )
			{
				errorString += '#checkout_error_no_friend_selected<br/>';
				rgBadFields.friends_chooser = true;
			}
		}
	} 
	catch( e ) 
	{
		ReportCheckoutJSError( 'Failed validating gift delivery form', e );
	}
	

	try 
	{
				for ( var key in rgBadFields )
		{
			if ( rgBadFields[key] )
				ValidationMarkFieldBad( key );
			else
				ValidationMarkFieldOk( key );
		}
	
				if ( errorString != '' )
		{
			DisplayErrorMessage( errorString );
		}
		else
		{
						$('error_display').innerHTML = '';
			$J('#error_display').hide();

			if ( g_bIsSendGiftForm )
			{
				if ( $('unsend_gift') && $('unsend_gift').checked )
				{
					UnsendGift();
					return;
				}
				else
				{
					UpdateWillBeSentToNote();
				}
			}
			
						if ( $('send_self') && $('send_self').checked )
			{
				ProceedToPaymentInfoTab();
			}
			else
			{
				SetTabEnabled( 'gift_note' );
			}
		}
	} 
	catch(e) 
	{
		ReportCheckoutJSError( 'Failed showing errors or submitting gift delivery form', e );
	}
}

function SubmitGiftNoteForm()
{
		var errorString = '';
	
		var rgBadFields = { 
		gift_recipient_name : false, 
		gift_message_text : false, 
		gift_sentiment_trigger : false,
		gift_signature : false
	}
	
	try 
	{
		var recipient_name = $('gift_recipient_name').value;
		if ( recipient_name.length < 1 )
		{
			errorString += '#checkout_error_recipient_name_unset<br/>';
			rgBadFields.gift_recipient_name = true;
		}
		
		var gift_message_text = $('gift_message_text').value;
		if ( gift_message_text.length < 1 )
		{
			errorString += '#checkout_error_message_text_unset<br/>';
			rgBadFields.gift_message_text = true;
		}
		
		var gift_signature = $('gift_signature').value;
		if ( gift_signature.length < 1 )
		{
			errorString += '#checkout_error_signature_unset<br/>';
			rgBadFields.gift_signature = true;
		}
		
	
				for ( var key in rgBadFields )
		{
			if ( rgBadFields[key] )
				ValidationMarkFieldBad( key );
			else
				ValidationMarkFieldOk( key );
		}
	} 
	catch( e ) 
	{
		ReportCheckoutJSError( 'Failed validating gift message form', e );
	}

	try 
	{
				if ( errorString != '' )
		{
			DisplayErrorMessage( errorString );
		}
		else
		{
						$('error_display').innerHTML = '';
			$J('#error_display').hide();
	
						if ( g_bIsSendGiftForm )
			{
				SendGift();
				AnimateSubmitGiftNoteButton();
			}
			else
			{
				ProceedToPaymentInfoTab();
			}
		}
	}
	catch(e) 
	{
		ReportCheckoutJSError( 'Failed showing errors or submitting gift delivery form', e );
	}
}

function ProceedToPaymentInfoTab()
{
	if ( BIsStoredCreditCard() || BIsSteamAccountSelected() )
	{
		InitializeTransaction();
		AnimateSubmitGiftNoteButton();
	}
	else
	{
		SetTabEnabled( 'payment_info' );
	}
}

function UpdateStateSelectState()
{
	try 
	{
		if ( $('billing_country').value == 'US' )
		{
			$J('#billing_state_label').show();
			$J('#billing_state_input').show();
			$J('#billing_state_text').hide();
			$J('#billing_state_select_dselect_container').show();
		}
		else
		{
			$J('#billing_state_label').hide();
			$J('#billing_state_input').hide();
			$J('#billing_state_text').show();
			$J('#billing_state_select_dselect_container').hide();
		}

		if ( $('shipping_country').value == 'US' )
		{
			$J('#shipping_state_text').hide();
			$J('#shipping_state_select_dselect_container').show();
		}
		else
		{
			$J('shipping_state_text').show();
			$J('shipping_state_select_dselect_container').hide();
		}
	} 
	catch( e ) 
	{
		ReportCheckoutJSError( 'Failed in UpdateStateSelectState()', e );
	}
}

function BIsCreditCardMethod( method )
{
	return method == 'mastercard' || method == 'visa' 
			|| method == 'amex' || method == 'jcb' 
			|| method == 'discover' || method == 'cartebleue' 
			|| method == 'dankort';
}

function BIsStoredCreditCard()
{
	var method = $('payment_method');
	
	return method.value == 'storedcreditcard';
}

function BStoredCreditCardRequiresSecurityCode( method )
{
	return BIsStoredCreditCard() && ( g_bRequiresCVVReEntry || ( method == 'cartebleue' ) );
}

function BIsSteamAccountSelected()
{
	var method = $('payment_method');
	if ( method )
		return (method.value == 'steamaccount');
	
	return false;
}

function SaveProviderMethod()
{
	var method = $('payment_method');
	if ( method )
	{
		if ( method.value == 'steamaccount' )
			return;
		
		g_strProviderMethod = method.value;
	}
}

function ShowFirstPaymentStep()
{
		if ( g_bUseRemainingSteamAccount || g_nPaymentMethodStep == 2 )
	{
		SaveProviderMethod();
		DHighlightItemByValue( 'payment_method', 'steamaccount', true );						
	}
	
		g_nPaymentMethodStep = 1;
	g_bUseRemainingSteamAccount = false;
	
	UpdatePaymentInfoForm();
}

function ShowNextPaymentMethod()
{
		
	g_nPaymentMethodStep++;
	
		if ( g_nPaymentMethodStep == 2 ) 
	{
		if ( g_strProviderMethod != '' )
		{	
			DHighlightItemByValue( 'payment_method', g_strProviderMethod, true );
		}
		else
		{
			var paymentMethodDropList = $('payment_method_droplist');
				
			for ( var i = 0; i < paymentMethodDropList.childNodes.length; i++ )
			{
				var bPaymentMethodFound = false;
				for ( var j = 0; j < g_rgPaymentMethodsToToggle.length; j++ )
				{
					if ( g_rgPaymentMethodsToToggle[j] == paymentMethodDropList.childNodes[i].childNodes[0].id )
					{
						bPaymentMethodFound = true;
						break;
					}
				}
				
				if ( !bPaymentMethodFound )
				{
					DHighlightItem( 'payment_method', i, true );
					break;
				}
			}			
		}
	}
	
	UpdatePaymentInfoForm();
}

function OnSteamAccountSelected()
{
		
	if ( g_nPurchaseTotal > g_nSteamAccountBalance )
	{
		g_bUseRemainingSteamAccount = true;
		ShowNextPaymentMethod();
		return;
	}
	
		SubmitPaymentInfoForm();
}

function SelectPaymentMethod( method )
{
	DHighlightItemByValue( 'payment_method', method, true );
	UpdatePaymentInfoForm();
}

// this is a list of payment methods that are not allowed to be used in a split
var g_rgPaymentMethodsToToggle = new Array();
g_rgPaymentMethodsToToggle[0] = 'steamaccount';
g_rgPaymentMethodsToToggle[1] = 'boleto';
g_rgPaymentMethodsToToggle[2] = 'boacompragold';
g_rgPaymentMethodsToToggle[3] = 'bancodobrasilonline';
g_rgPaymentMethodsToToggle[4] = 'itauonline';
g_rgPaymentMethodsToToggle[5] = 'bradescoonline';
g_rgPaymentMethodsToToggle[6] = 'pagseguro';
g_rgPaymentMethodsToToggle[7] = 'visabrazil';
g_rgPaymentMethodsToToggle[8] = 'amexbrazil';
g_rgPaymentMethodsToToggle[9] = 'aura';
g_rgPaymentMethodsToToggle[10] = 'hipercard';
g_rgPaymentMethodsToToggle[11] = 'mastercardbrazil';
g_rgPaymentMethodsToToggle[12] = 'dinerscardbrazil';
g_rgPaymentMethodsToToggle[13] = 'multibanco';
g_rgPaymentMethodsToToggle[14] = 'payshop';
g_rgPaymentMethodsToToggle[15] = 'maestroboacompra';
g_rgPaymentMethodsToToggle[16] = 'konbini';
g_rgPaymentMethodsToToggle[17] = 'bank_transfer_japan';
g_rgPaymentMethodsToToggle[18] = 'payeasy';
g_rgPaymentMethodsToToggle[19] = 'oxxo';
g_rgPaymentMethodsToToggle[20] = 'toditocash';
g_rgPaymentMethodsToToggle[21] = 'carnet';
g_rgPaymentMethodsToToggle[22] = 'spei';
g_rgPaymentMethodsToToggle[23] = '3pay';
g_rgPaymentMethodsToToggle[24] = 'isbank';
g_rgPaymentMethodsToToggle[25] = 'garanti';
g_rgPaymentMethodsToToggle[26] = 'akbank';
g_rgPaymentMethodsToToggle[27] = 'yapikredi';
g_rgPaymentMethodsToToggle[28] = 'halkbank';
g_rgPaymentMethodsToToggle[29] = 'bankasya';
g_rgPaymentMethodsToToggle[30] = 'finansbank';
g_rgPaymentMethodsToToggle[31] = 'denizbank';
g_rgPaymentMethodsToToggle[32] = 'ptt';
g_rgPaymentMethodsToToggle[33] = 'cashu';
g_rgPaymentMethodsToToggle[34] = 'onecard';

function UpdatePaymentMethodList( bIsSplitTransaction )
{
	for (var i = 0; i < g_rgPaymentMethodsToToggle.length; i++)
	{
		var pm = $(g_rgPaymentMethodsToToggle[i]);
		
		if ( pm )
		{
			bIsSplitTransaction ? $J(pm).hide() : $J(pm).show();
		}
	}
}

function UpdatePaymentInfoForm()
{
	try 
	{
		$('error_display').innerHTML = '';
		$J('#error_display').hide();
	
		UpdatePaymentMethodList( g_nPaymentMethodStep == 2 );
				if ( g_nPaymentMethodStep == 2 )
		{
						$('payment_header').innerHTML = '#checkout_payment_method_header_step2';
			$J('#payment_row_step2').show();
			$J('#payment_method_previous_button').show();
			$('payment_info_method_label').innerHTML = '#checkout_payment_info_method_remaining_label' + ' ' + g_strProviderRemaining;
		}
		else
		{
			$('payment_header').innerHTML = '#checkout_payment_method_header';
			$J('#payment_row_step2').hide();
			$J('#payment_method_previous_button').hide();
			$('payment_info_method_label').innerHTML = '#checkout_payment_info_method_label';
		}
		
		method = $('payment_method');
		if ( !method )
			return;
		var card_is_stored = BIsStoredCreditCard();
		
		if ( card_is_stored )
		{
			$('save_my_address_input').hide();
		}
		else
		{
			$('save_my_address_input').show();
		}
		
		var bShowCVV = false;
		var bShowCreditCardNumberExp = false;
		var bShowAddressForm = true;
		var bShowCountryVerification = false;
		var bShowBankAccountForm = false;
		var bShowMobileForm = false;
		var bShowPaymentSpecificNote = false;
		var bShowSaveMyAddress = false;
		var bShowStoredPayPalDetails = false;
		$J('#payment_row_one').show();
		$J('#payment_row_eight').hide();
		
		if ( g_bIsUpdateBillingInfoForm )
		{
						$('submit_payment_info_btn').href = "javascript:InitializeTransaction();";
			$( 'payment_info_form' ).onsubmit = function() { InitializeTransaction(); return false; };
			SetButtonInnerHtml('submit_payment_info_btn', '#btn_checkout_payment_info_save' );
			$('payment_header').innerHTML = '#checkout_payment_method_header_update';
			$('payment_info_method_label').innerHTML = '#checkout_payment_info_method_update_label';
		}
		else if ( g_bPurchaseContainsSubscription )
		{
						$('submit_payment_info_btn').href = "javascript:SubmitPaymentInfoForm();";
			$( 'payment_info_form' ).onsubmit = function() { SubmitPaymentInfoForm(); return false; };
			SetButtonInnerHtml('submit_payment_info_btn', '#btn_checkout_payment_info_continue' );
			$('payment_info_method_label').innerHTML = '#checkout_payment_info_method_purchase_subscription_label';
		}		
		else
		{
						$('submit_payment_info_btn').href = "javascript:SubmitPaymentInfoForm();";
			$( 'payment_info_form' ).onsubmit = function() { SubmitPaymentInfoForm(); return false; };
			SetButtonInnerHtml('submit_payment_info_btn', '#btn_checkout_payment_info_continue' );
		}

		if ( BIsStoredCreditCard() )
		{
			bShowAddressForm = false;
		}
		else if ( BIsCreditCardMethod( method.value ) )
		{
			// For any of these common credit card methods show all the form elements
			
						bShowAddressForm = true;
			bShowCreditCardNumberExp = true;
									bShowCVV = method.value != 'jcb' && !card_is_stored; 
			bShowSaveMyAddress = true;
		}
		else if ( method.value == 'paypal' )
		{
						bShowAddressForm = !g_bSkipAddressRequirementForPayPal;
			bShowCountryVerification = g_bSkipAddressRequirementForPayPal;
			bShowSaveMyAddress = g_bEnableCachedPayPalCredentials;
			
			$('external_payment_processor_notice').innerHTML = '#paypal_authorization_init_explanation';
		}
		else if ( method.value == 'updatepaypal' )
		{
						bShowAddressForm = !g_bSkipAddressRequirementForPayPal;
			bShowCountryVerification = g_bSkipAddressRequirementForPayPal;
			
			$('external_payment_processor_notice').innerHTML = '#paypal_authorization_init_explanation';
			bShowPaymentSpecificNote = true;
			$('payment_method_specific_note').innerHTML = '#paypal_require_verification';
		}
		else if ( method.value == 'storedpaypal' )
		{
			bShowAddressForm = false;
			bShowCountryVerification = true;
			bShowStoredPayPalDetails = true;
		}
		else if ( method.value == 'giropay' )
		{
			bShowAddressForm = false;
			bShowCountryVerification = true;
			bShowBankAccountForm = true;
		}
		else if ( method.value == 'ideal' || method.value == 'paysafe' || method.value == 'sofort' || method.value == 'webmoney' || method.value == 'moneybookers'
			|| method.value == 'alipay' || method.value == 'yandex' || method.value == 'boacompragold' || method.value == 'pagseguro' || method.value == 'visabrazil'
			|| method.value == 'amexbrazil' || method.value == 'aura' || method.value == 'hipercard' || method.value == 'mastercardbrazil' || method.value == 'dinerscardbrazil'
			|| method.value == 'multibanco' || method.value == 'payshop' || method.value == 'maestroboacompra'
			|| method.value == 'oxxo' || method.value == 'toditocash' || method.value == 'carnet'
			|| method.value == 'spei' || method.value == '3pay' || method.value == 'isbank'
			|| method.value == 'garanti' || method.value == 'akbank' || method.value == 'yapikredi'
			|| method.value == 'halkbank' || method.value == 'bankasya' || method.value == 'finansbank'
			|| method.value == 'denizbank' || method.value == 'ptt' || method.value == 'cashu'
			|| method.value == 'onecard'
			|| method.value == 'molpoints' || method.value == 'beeline' || method.value == 'eclubpoints' )
		{
			bShowAddressForm = false;
			bShowCountryVerification = true;
		}
		else if ( method.value == 'boleto' || method.value == 'bancodobrasilonline' || method.value == 'itauonline' || method.value == 'bradescoonline' || method.value == 'oxxo' || method.value == 'toditocash' )
		{
			bShowAddressForm = false;
			bShowCountryVerification = true;
			bShowPaymentSpecificNote = true;
			$('payment_method_specific_note').innerHTML = '#checkout_payment_method_specific_note_boacompra';
		}
		else if ( method.value == 'mopay' )
		{
			bShowAddressForm = false;
			bShowCountryVerification = true;
			bShowPaymentSpecificNote = true;
		}
		else if ( method.value == 'culturevoucher' || method.value == 'culturevoucher' || method.value == 'bookvoucher' || method.value == 'happymoneyvoucher' || method.value == 'convenientstorevoucher' || method.value == 'gamevoucher' )
		{
			bShowAddressForm = false;
			bShowCountryVerification = true;
		}
		else if ( method.value == 'zong' )
		{
			bShowAddressForm = false;
			bShowCountryVerification = true;
		}
		else if ( method.value == 'qiwi' )
		{
			bShowAddressForm = false;
			bShowCountryVerification = true;
			bShowMobileForm = true;
		}
		else if ( method.value == 'konbini' || method.value == 'credit_card_japan' || method.value == 'bank_transfer_japan' || method.value == 'payeasy' || method.value == 'webmoney_japan' )
		{
			bShowAddressForm = false;
			bShowCountryVerification = true;
			bShowPaymentSpecificNote = true;
			$('payment_method_specific_note').innerHTML = '#checkout_payment_method_specific_note_degica';
		}
		else if ( method.value == 'steamaccount' )
		{
						bShowAddressForm = false;
			$J('#payment_row_eight').show();
			
						
			$('external_payment_processor_notice').innerHTML = '#steamaccount_authorization_init_explanation';
				
						$('submit_payment_info_btn').href = "javascript:OnSteamAccountSelected();";
			$( 'payment_info_form' ).onsubmit = function() { OnSteamAccountSelected(); return false; };
			SetButtonInnerHtml('submit_payment_info_btn', '#btn_checkout_payment_info_continue' );
		}
	
				if ( g_bIsInOverlay && method.value == 'alipay' )
		{
			$J('#submit_payment_info_btn').hide();
			$('cant_use_payment_method_in_overlay').innerHTML = '#cant_use_payment_method_in_overlay';
			$J('#cant_use_payment_method_in_overlay').show();

			bShowCountryVerification = false;
		}
		else if ( g_bIsInClientOrOverlay && method.value == 'itauonline' )
		{
			$J('#submit_payment_info_btn').hide();
			$('cant_use_payment_method_in_overlay').innerHTML = '#cant_use_payment_method_in_client';
			$J('#cant_use_payment_method_in_overlay').show();

			bShowCountryVerification = false;
		}
		else
		{
			$J('#submit_payment_info_btn').show();
			$J('#cant_use_payment_method_in_overlay').hide();
		}	
		
		var strCCDisplay = bShowCreditCardNumberExp ? 'block' : 'none';
		$('credit_card_row').style.display = strCCDisplay;
		$('card_number_label').style.display = strCCDisplay;
		$('card_number').style.display = strCCDisplay;
		$('expiration_date_cvv_label').style.display = strCCDisplay;

		if ( $('expiration_date_label'))
			$('expiration_date_label').style.display = strCCDisplay;

		$('expiration_month_dselect_container').style.display = strCCDisplay;
		$('expiration_year_dselect_container').style.display = strCCDisplay;
		
				var strCVVDisplay = bShowCVV ? 'block' : 'none';
		$('security_code_section').style.display = strCVVDisplay;

		if ( bShowCVV  )
		{
			$('expiration_date_cvv_label').innerHTML = '#checkout_payment_info_expiration_date_cvv';
		}
		else
		{
			$('expiration_date_cvv_label').innerHTML = '#checkout_payment_info_expiration_date';
		}
		
		var strAddressDisplay = bShowAddressForm ? 'block' : 'none';
		$('payment_row_two').style.display = strAddressDisplay;
		$('payment_row_three').style.display = strAddressDisplay;
		$('payment_row_four').style.display = strAddressDisplay;
		$('payment_row_five').style.display = strAddressDisplay;
		$('payment_row_six').style.display = strAddressDisplay;
		$('payment_header_title').style.display = strAddressDisplay;

		var strSaveMyAddressDisplay = bShowSaveMyAddress ? 'block' : 'none';
		$('payment_row_save_my_address').style.display = strSaveMyAddressDisplay;
		
		var strShowStoredPayPalDetails = bShowStoredPayPalDetails ? 'block' : 'none';
		$('payment_row_stored_paypal_details').style.display = strShowStoredPayPalDetails;
		
		var strBankAccountDisplay = !g_bEnableIBANForGiroPay && bShowBankAccountForm ? 'block' : 'none';
		var strBankAccountDisplayIBAN = g_bEnableIBANForGiroPay && bShowBankAccountForm ? 'block' : 'none';
		$('bank_code_row').style.display = strBankAccountDisplay;
		$('bank_iban_row').style.display = strBankAccountDisplayIBAN;
		
		var strCountryVerificationDisplay = bShowCountryVerification ? 'block' : 'none';
		$('payment_row_country_verification').style.display = strCountryVerificationDisplay;
		
		var strPaymentMethodSpecificNote = bShowPaymentSpecificNote ? 'block' : 'none';
		$('payment_row_payment_method_specific_note').style.display = strPaymentMethodSpecificNote;	

		var strMobileVerificationDisplay = bShowMobileForm ? 'block' : 'none';
		$('mobile_number_row').style.display = strMobileVerificationDisplay;
		
	} 
	catch( e ) 
	{
		ReportCheckoutJSError( 'Failed updating payment info form after payment method change', e );
	}
}

function IsDigitOrEditKeypress( e )
{
	try 
	{
		var keynum = 0;
		
		if( e.keyCode ) 	  	{
			keynum = e.keyCode;
		}
		else if( e.which ) 		{
			keynum = e.which;
		}
		
		// tab
		if ( keynum == 9 ) return true;
		// backspace
		if ( keynum == 8 ) return true;
		// delete
		if ( keynum == 46 ) return true;
		// arrows
		if ( keynum == 37 || keynum == 38 || keynum == 39 || keynum == 40 ) return true;
		
		// digits
		if ( keynum >= 48 && keynum <= 57 ) return true;
	} 
	catch( e ) 
	{
		ReportCheckoutJSError( 'Failed in IsDigitOrEditkeypress()', e );
	}
	
	return false;
}

function CardLuhnCheck( card_number )
{
	try 
	{
		var sum = 0;
		var j = 0;
		var i = 0;
		
				for ( i = 0; i < card_number.length; ++i )
		{
			var c = card_number.charAt(i);
			if ( c < '0' || c > '9' )
				return false;  
		}
		
		
				i = card_number.length;
		while ( i-- )
		{
			var c = parseInt( card_number.charAt(i) );
			if ( j++ & 1 )
			{
				c = c * 2;
				if ( c > 9 )
				{
					c -= 10;
					sum++;
				}
			}
			
			sum += c;
		}
		
		return ((sum % 10) == 0);
	} 
	catch( e ) 
	{
		ReportCheckoutJSError( 'Failed in CardLuhnCheck', e );
	} 
		
	return false;
}
	


function SubmitShippingInfoForm( bAutoSubmitPaymentInfo )
{
		var errorString = '';

		var rgBadFields = { 
		shipping_first_name : false,
		shipping_last_name : false,
		shipping_address : false,
		shipping_city : false,
		shipping_state_text : false,
		shipping_phone : false,
		shipping_postal_code : false,
		shipping_state_select_trigger: false
	}
	
	try 
	{
		if ( $( 'shipping_first_name' ).value.length < 1 )
		{
			errorString += '#checkout_error_bad_shipping_firstname<br/>';
			rgBadFields.first_name = true;
		}
			
		if ( $( 'shipping_last_name' ).value.length < 1 )
		{
			errorString += '#checkout_error_bad_shipping_lastname<br/>';
			rgBadFields.last_name = true;
		}
			
		if ( $( 'shipping_address' ).value.length < 1 )
		{
			errorString += '#checkout_error_bad_shipping_address<br/>';
			rgBadFields.shipping_address = true;
		}
		
				var regExPOBox = /P\.?O\.?\s+Box\s+#?\d+/i;
		if ( regExPOBox.test( $( 'shipping_address' ).value ) )
		{
			errorString += '#checkout_error_bad_shipping_address_po_box<br/>';
			rgBadFields.shipping_address = true;
		}
			
		if ( $( 'shipping_city' ).value.length < 1 )
		{
			errorString += '#checkout_error_bad_shipping_city<br/>';
			rgBadFields.shipping_city = true;
		}
			
				if  ( $( 'shipping_country' ).value == 'US' )
		{
			if ( $('shipping_state_select').value.length < 1 )
			{
				errorString += '#checkout_error_bad_shipping_state<br/>';
				rgBadFields.shipping_state_select_trigger = true;
			}
		}
		else if ( $('shipping_state_text').value.length < 1 )
		{
			errorString += '#checkout_error_bad_shipping_state<br/>';
			rgBadFields.shipping_state_text = true;
		}
			
	
	
		if ( $( 'shipping_phone' ).value.length < 3 )
		{
			errorString += '#checkout_error_bad_shipping_phone<br/>';
			rgBadFields.shipping_phone = true;
		}
		else if  ( $( 'shipping_country' ).value == 'US' )
		{
			// Expect 10 digits if in the US, we'll make sure we at least have that many digits
			var num = $( 'shipping_phone').value;
			var digitsFound = 0;
			for ( i = 0; i < num.length; ++i )
			{
				var c = num.charAt(i);
				if ( c >= '0' && c <= '9' )
					++digitsFound;
			}
			if ( digitsFound < 10 )
			{
				errorString += '#checkout_error_bad_shipping_phone<br/>';
				rgBadFields.shipping_phone = true;
			}
		}
				
		if ( $( 'shipping_country' ).value == 'US' )
		{
			if ( $( 'shipping_postal_code' ).value.length < 5 )
			{
				errorString += '#checkout_error_bad_shipping_postal<br/>';
				rgBadFields.shipping_postal_code = true;
			}
		}
		else if ( $( 'shipping_postal_code' ).value.length < 1 )
		{
			errorString += '#checkout_error_bad_shipping_postal<br/>';
			rgBadFields.shipping_postal_code = true;
		}
	} 
	catch( e ) 
	{
		ReportCheckoutJSError( 'Failed validating shipping info form', e );
	}

	try 
	{
				if ( errorString != '' )
		{
			DisplayErrorMessage( errorString );
		}
		else
		{
						$('error_display').innerHTML = '';
			$('error_display').style.display = 'none';
	
			if ( bAutoSubmitPaymentInfo )
			{
				SubmitPaymentInfoForm();
			}
			else
			{
				SetTabEnabled( 'payment_info' );
			}
		}
	}
	catch(e) 
	{
		ReportCheckoutJSError( 'Failed showing errors or submitting shipping info form', e );
	}
}

function SubmitPaymentInfoForm()
{
		method = $('payment_method');
	if ( !method )
		return;

		var errorString = '';
	
		var rgBadFields = { 
		card_number : false, 
		first_name : false,
		last_name : false,
		billing_address : false,
		security_code : false,
		billing_city : false,
		label_verify_country : false,
		billing_state_text : false,
		billing_phone : false,
		billing_postal_code : false,
		expiration_month_trigger : false,
		expiration_year_trigger : false,
		payment_method_trigger : false,
		billing_state_select_trigger : false,
		bank_account : false,
		bank_code : false,
		bank_iban : false,
		bank_bic : false,
		verify_country_only_label: false,
		mobile_number_label: false
	}
	
	try 
	{
		var card_is_stored = BIsStoredCreditCard(); 
				if ( BIsCreditCardMethod( method.value ) )
		{
						if ( method.value != 'jcb' && !card_is_stored )
			{
				var val = $( 'security_code' ).value;
				var len = val.length;
				var requiredLen = ( method.value == 'amex' ) ? 4 : 3;
				if ( len != requiredLen )
				{
					errorString += '#checkout_error_bad_security_code<br/>';
					rgBadFields.security_code = true;
				}
				else if ( len > 0 )
				{
					var bAllDigits = true;
					for ( i = 0; i < len; ++i )
					{
						var c = val.charAt(i);
						if ( c < '0' || c > '9' )
						{
							bAllDigits = false;
						}
					}
					if ( !bAllDigits )
					{
						errorString += '#checkout_error_bad_security_code<br/>';
						rgBadFields.security_code = true;
					}
				}
			}
			
			var dateNow = new Date();
			var month = dateNow.getMonth()+1; // 0-11 in JS
			var year = dateNow.getFullYear();
			if ( ( $( 'expiration_year' ).value == '' ) || ( $('expiration_month').value == '' ) || ( $( 'expiration_year' ).value < year ) || ( $('expiration_year').value == year && $('expiration_month').value < month ) )
			{
				errorString += '#checkout_error_bad_cc_expiration<br/>';
				rgBadFields.expiration_month_trigger = true;
				rgBadFields.expiration_year_trigger = true;
			}
		}
		
		if ( method.value == 'giropay' || method.value == 'ideal' || method.value == 'paysafe' || method.value == 'sofort' || method.value == 'webmoney' || method.value == 'moneybookers'
			|| method.value == 'alipay' || method.value == 'yandex' || method.value == 'mopay' || method.value == 'boleto' || method.value == 'boacompragold'
 		  || method.value == 'bancodobrasilonline' || method.value == 'itauonline' || method.value == 'bradescoonline' || method.value == 'pagseguro' || method.value == 'visabrazil'
			|| method.value == 'amexbrazil' || method.value == 'aura' || method.value == 'hipercard' || method.value == 'mastercardbrazil' || method.value == 'dinerscardbrazil' 
			|| method.value == 'multibanco' || method.value == 'payshop' || method.value == 'maestroboacompra'
			|| method.value == 'oxxo' || method.value == 'toditocash' || method.value == 'carnet'
			|| method.value == 'spei' || method.value == '3pay' || method.value == 'isbank'
			|| method.value == 'garanti' || method.value == 'akbank' || method.value == 'yapikredi'
			|| method.value == 'halkbank' || method.value == 'bankasya' || method.value == 'finansbank'
			|| method.value == 'denizbank' || method.value == 'ptt' || method.value == 'cashu'
			|| method.value == 'onecard'
			|| method.value == 'molpoints' || method.value == 'beeline' || method.value == 'konbini' || method.value == 'eclubpoints' || method.value == 'credit_card_japan' 
			|| method.value == 'bank_transfer_japan' || method.value == 'payeasy' || method.value == 'webmoney_japan'
			|| ( method.value == 'paypal' && g_bSkipAddressRequirementForPayPal ) || ( method.value == 'updatepaypal' && g_bSkipAddressRequirementForPayPal ) || method.value == 'storedpaypal'
			|| method.value == 'zong' || method.value == 'culturevoucher' || method.value == 'bookvoucher' || method.value == 'happymoneyvoucher' || method.value == 'convenientstorevoucher'
			|| method.value == 'gamevoucher' )
		{
			if ( !$('verify_country_only').checked )
			{
				errorString += '#checkout_error_verify_country<br/>';
				rgBadFields.verify_country_only_label = true;
			}
		}
		if ( method.value == 'qiwi' )
		{
			// Expect 10 digits, we'll make sure we at least have that many digits
			var num = $( 'mobile_number').value;
			
			// check to make sure qiwi phone number starts with +7 or +38
			var re = new RegExp(/^\+7|^\+38/ );
			var m = re.exec(num);
		
			if ( m == null )
			{
				errorString += '#checkout_error_mobile_number<br/>';
				rgBadFields.mobile_number_label = true;
			}
			else
			{
				num = num.replace( m, "" );
				num = num.replace(/\D/g, "");
			
				var digitsFound = 0;
				for ( i = 0; i < num.length; ++i )
				{
					var c = num.charAt(i);
					if ( c >= '0' && c <= '9' )
						++digitsFound;
				}
				if ( digitsFound != 10 )
				{
					errorString += '#checkout_error_mobile_number<br/>';
					rgBadFields.mobile_number_label = true;
				}
			}

			if ( !$('verify_country_only').checked )
			{
				errorString += '#checkout_error_verify_country<br/>';
				rgBadFields.verify_country_only_label = true;
			}
		}
		else if ( ( !g_bSkipAddressRequirementForPayPal && ( method.value == 'paypal' || method.value == 'updatepaypal' ) ) || BIsCreditCardMethod( method.value ) )
		{
			
			if ( $( 'first_name' ).value.length < 1 )
			{
				errorString += '#checkout_error_bad_firstname<br/>';
				rgBadFields.first_name = true;
			}
			
			if ( $( 'last_name' ).value.length < 1 )
			{
				errorString += '#checkout_error_bad_lastname<br/>';
				rgBadFields.last_name = true;
			}
			
			if ( $( 'billing_address' ).value.length < 1 )
			{
				errorString += '#checkout_error_bad_address<br/>';
				rgBadFields.billing_address = true;
			}
				
			
			if ( $( 'billing_city' ).value.length < 1 )
			{
				errorString += '#checkout_error_bad_city<br/>';
				rgBadFields.billing_city = true;
			}
			
						if  ( $( 'billing_country' ).value == 'US' )
			{
				if ( $('billing_state_select').value.length < 1 )
				{
					errorString += '#checkout_error_bad_state<br/>';
					rgBadFields.billing_state_select_trigger = true;
				}
			}
	
	
			if ( $( 'billing_phone' ).value.length < 3 )
			{
				errorString += '#checkout_error_bad_phone<br/>';
				rgBadFields.billing_phone = true;
			}
			else if  ( $( 'billing_country' ).value == 'US' )
			{
				// Expect 10 digits if in the US, we'll make sure we at least have that many digits
				var num = $( 'billing_phone').value;
				var digitsFound = 0;
				for ( i = 0; i < num.length; ++i )
				{
					var c = num.charAt(i);
					if ( c >= '0' && c <= '9' )
						++digitsFound;
				}
				if ( digitsFound < 10 )
				{
					errorString += '#checkout_error_bad_phone<br/>';
					rgBadFields.billing_phone = true;
				}
			}
				
			if ( $( 'billing_country' ).value == 'US' )
			{
				if ( $( 'billing_postal_code' ).value.length < 5 )
				{
					errorString += '#checkout_error_bad_postal<br/>';
					rgBadFields.billing_postal_code = true;
				}
			}
			else if ( $( 'billing_postal_code' ).value.length < 1 )
			{
				errorString += '#checkout_error_bad_postal<br/>';
				rgBadFields.billing_postal_code = true;
			}
			
			if ( !$( 'verify_country' ).checked )
			{
				errorString += '#checkout_error_verify_country<br/>';
				rgBadFields.label_verify_country = true;
			}
		}
		
		if ( method.value == 'giropay' )
		{
			if ( !g_bEnableIBANForGiroPay )
			{
				if ( isNaN( $('bank_account').value ) || $('bank_account').value.length < 1 || $('bank_account').value.length > 10 )
				{
					errorString += '#checkout_error_bad_bank_account<br/>';
					rgBadFields.bank_account = true;
				}
				if ( isNaN( $('bank_code').value ) || $('bank_code').value.length < 1 || $('bank_code').value.length > 8 )
				{
					errorString += '#checkout_error_bad_bank_code<br/>';
					rgBadFields.bank_code = true;
				}
			}
			else
			{
				if ( $('bank_iban').value.length < 15 || $('bank_iban').value.length > 50 )
				{
					errorString += '#checkout_error_bad_bank_iban<br/>';
					rgBadFields.bank_iban = true;
				}
				else
				{
										
										var sIBAN = $('bank_iban').value.substring(4).toUpperCase() + $('bank_iban').value.substring(0, 4).toUpperCase();
					
										var sCalculatedIBAN = '';
					var nACode = 'A'.charCodeAt( 0 );
					
					for ( var i = 0; i < sIBAN.length; i++ )
					{
						var c = sIBAN.substring( i, i + 1 );

						if ( isNaN( c ) )
						{
							var nCharCode = c.charCodeAt( 0 );
							
							sCalculatedIBAN += ( nCharCode - nACode + 10 );
						}
						else
						{
							sCalculatedIBAN += c;
						}
					}
					
										
					while ( sCalculatedIBAN.length > 10 )
					{
						var sLHS = sCalculatedIBAN.slice( 0, 9 );
						sCalculatedIBAN = ( parseInt( sLHS ) % 97 ) + sCalculatedIBAN.slice( sLHS.length );
					}
				
					
					if ( ( parseInt( sCalculatedIBAN ) % 97 ) != 1 )
					{
						errorString += '#checkout_error_bad_bank_iban<br/>';
						rgBadFields.bank_iban = true;
					}
				}
				
				if ( $('bank_bic').value.length != 8 && $('bank_bic').value.length != 11 && $('bank_bic').value.length != 12 )
				{
					errorString += '#checkout_error_bad_bank_bic<br/>';
					rgBadFields.bank_bic = true;
				}
			}
		}
	} 
	catch(e) 
	{
		ReportCheckoutJSError( 'Failed validating payment info form', e );
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
				errorString = rgErrors[0] + '<br/>' + rgErrors[1] + '<br/>' + '#checkout_error_more_errors' + '<br/>';
			}		
		
			DisplayErrorMessage( errorString );
		}
		else
		{
						$('error_display').innerHTML = '';
			$('error_display').style.display = 'none';
			
						if ( $('cancel_pending_verification') )
				$('cancel_pending_verification').style.display = 'none';
			
						InitializeTransaction();
		}
	} 
	catch(e) 
	{
		ReportCheckoutJSError( 'Failed showing error or submitting payment info form', e );
	}
}


function UpdateReviewPageBillingInfoWithCurrentValues( price_data )
{
	try 
	{
				method = $('payment_method');
		if ( method && price_data )
		{
			var providerPaymentMethod = price_data.providerpaymentmethod ? price_data.providerpaymentmethod : 0;
			var steamAccountTotal = price_data.steamAccountTotal ? price_data.steamAccountTotal : 0;
			var formattedProviderTotal = price_data.formattedProviderTotal ? price_data.formattedProviderTotal : '';
			var formattedSteamAccountTotal = price_data.formattedSteamAccountTotal ? price_data.formattedSteamAccountTotal : '';
			var hitMinProviderAmount = price_data.hitminprovideramount ? price_data.hitminprovideramount : false;

			var card_number;
			if ( method.value == 'storedcreditcard' )
			{
				method = $('stored_payment_method');
				card_number = $('stored_card_number');
				if ( BStoredCreditCardRequiresSecurityCode( method.value ) )
				{
					$('payment_method_review_row_provider_cvv').style.display = 'block';
					$('security_code_cached').value = '';
				}
			}
			else
			{
				card_number = $( 'card_number' );
				$('payment_method_review_row_provider_cvv').style.display = 'none';
			}
			if ( card_number )
				card_number = card_number.value
			else
				card_number = '';

						$('payment_method_review_row_provider').style.display = 'block';
			$('payment_method_review_row_steam_account').style.display = 'none';
			$('payment_method_review_row_min_provider_amount').style.display = 'none';
			$('payment_method_review_provider_total').style.display = 'none';
			$('payment_method_review_steam_account_total').style.display = 'none';
			
			if ( providerPaymentMethod == 0 )
			{
								$('payment_method_review_row_provider_cvv').style.display = 'none';
				$('payment_method_review_row_steam_account').style.display = 'block';
				$('payment_method_review_row_provider').style.display = 'none';
			}
			else if ( steamAccountTotal > 0 )
			{
								$('payment_method_review_row_steam_account').style.display = 'block';
				$('payment_method_review_provider_total').style.display = 'block';
				$('payment_method_review_steam_account_total').style.display = 'block';
				$('payment_method_review_row_min_provider_amount').style.display = hitMinProviderAmount ? 'block' : 'none';				
			}
			else
			{
						
			}

						$('payment_method_review_provider_total').innerHTML = formattedProviderTotal;
			$('payment_method_review_steam_account_total').innerHTML = formattedSteamAccountTotal;
						$('checkout_review_payment_info_area').style.display = '';
			
						if ( method.value == 'visa' && providerPaymentMethod == 2 )
			{	
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_visa'+'#checkout_card_ending_in'+ (card_number.substr( Math.max( 0, card_number.length-4 ) ) );
			}
			else if ( method.value == 'mastercard' && providerPaymentMethod == 2 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_mastercard'+'#checkout_card_ending_in'+ (card_number.substr( Math.max( 0, card_number.length-4 ) ) );
			}
			else if ( method.value == 'amex' && providerPaymentMethod == 2 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_amex'+'#checkout_card_ending_in'+ (card_number.substr( Math.max( 0, card_number.length-4 ) ) );
			}
			else if ( method.value == 'discover' && providerPaymentMethod == 2 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_discover'+'#checkout_card_ending_in'+ (card_number.substr( Math.max( 0, card_number.length-4 ) ) );
			}
			else if ( method.value == 'jcb' && providerPaymentMethod == 2 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_jcb'+'#checkout_card_ending_in'+ (card_number.substr( Math.max( 0, card_number.length-4 ) ) );
			}
			else if ( method.value == 'cartebleue' && providerPaymentMethod == 2 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_cartebleue'+'#checkout_card_ending_in'+ (card_number.substr( Math.max( 0, card_number.length-4 ) ) );
			}
			else if ( method.value == 'dankort' && providerPaymentMethod == 2 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_dankort'+'#checkout_card_ending_in'+ (card_number.substr( Math.max( 0, card_number.length-4 ) ) );
			}
			else if ( method.value == 'steamaccount' && providerPaymentMethod == 0 )
			{
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'storedpaypal' && providerPaymentMethod == 4 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_stored_paypal_payment_method (' + $('stored_paypal_email').value + ')';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'paypal' && providerPaymentMethod == 4 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_paypal';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'updatepaypal' && providerPaymentMethod == 4 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_paypal';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'giropay' && providerPaymentMethod == 3 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_giropay';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'paysafe' && providerPaymentMethod == 6 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_paysafe';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'ideal' && providerPaymentMethod == 5 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_ideal';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'sofort' && providerPaymentMethod == 7 )
			{
								if ( price_data.storeCountryCode == 'GB' || price_data.storeCountryCode == 'BE' )
				{
					$('payment_method_review_text').innerHTML = '#checkout_payment_method_directebanking';
				}
				else
				{
					$('payment_method_review_text').innerHTML = '#checkout_payment_method_sofort';					
				}
					
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'webmoney' && providerPaymentMethod == 9 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_webmoney';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'moneybookers' && providerPaymentMethod == 10 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_moneybookers';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'alipay' && providerPaymentMethod == 11 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_alipay';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'yandex' && providerPaymentMethod == 12 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_yandex';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'qiwi' && providerPaymentMethod == 14 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_qiwi';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'beeline' && providerPaymentMethod == 33 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_beeline';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'mopay' && providerPaymentMethod == 17 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_mopay';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'boleto' && providerPaymentMethod == 18 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_boleto';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'boacompragold' && providerPaymentMethod == 19 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_boacompragold';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'bancodobrasilonline' && providerPaymentMethod == 20 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_bancodobrasilonline';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'itauonline' && providerPaymentMethod == 21 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_itauonline';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'bradescoonline' && providerPaymentMethod == 22 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_bradescoonline';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'pagseguro' && providerPaymentMethod == 23 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_pagseguro';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'visabrazil' && providerPaymentMethod == 24 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_visabrazil';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'amexbrazil' && providerPaymentMethod == 25 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_amexbrazil';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'aura' && providerPaymentMethod == 26 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_aura';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'hipercard' && providerPaymentMethod == 27 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_hipercard';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'mastercardbrazil' && providerPaymentMethod == 28 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_mastercardbrazil';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'dinerscardbrazil' && providerPaymentMethod == 29 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_dinerscardbrazil';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'multibanco' && providerPaymentMethod == 45 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_multibanco';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'payshop' && providerPaymentMethod == 46 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_payshop';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'maestroboacompra' && providerPaymentMethod == 47 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_maestroboacompra';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'oxxo' && providerPaymentMethod == 48 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_oxxo';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'toditocash' && providerPaymentMethod == 49 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_toditocash';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'carnet' && providerPaymentMethod == 50 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_carnet';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'spei' && providerPaymentMethod == 51 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_spei';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == '3pay' && providerPaymentMethod == 52 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_3pay';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'isbank' && providerPaymentMethod == 53 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_isbank';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'garanti' && providerPaymentMethod == 54 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_garanti';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'akbank' && providerPaymentMethod == 55 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_akbank';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'yapikredi' && providerPaymentMethod == 56 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_yapikredi';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'halkbank' && providerPaymentMethod == 57 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_halkbank';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'bankasya' && providerPaymentMethod == 58 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_bankasya';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'finansbank' && providerPaymentMethod == 59 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_finansbank';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'denizbank' && providerPaymentMethod == 60 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_denizbank';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'ptt' && providerPaymentMethod == 61 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_ptt';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'cashu' && providerPaymentMethod == 62 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_cashu';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'onecard' && providerPaymentMethod == 63 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_onecard';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'molpoints' && providerPaymentMethod == 31 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_molpoints';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'konbini' && providerPaymentMethod == 34 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_konbini';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'credit_card_japan' && providerPaymentMethod == 36 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_credit_card_japan';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'bank_transfer_japan' && providerPaymentMethod == 37 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_bank_transfer_japan';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'payeasy' && providerPaymentMethod == 38 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_payeasy';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'webmoney_japan' && providerPaymentMethod == 65 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_webmoney_japan';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'zong' && providerPaymentMethod == 39 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_zong';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'culturevoucher' && providerPaymentMethod == 40 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_culturevoucher';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'bookvoucher' && providerPaymentMethod == 41 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_bookvoucher';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'happymoneyvoucher' && providerPaymentMethod == 42 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_happymoneyvoucher';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'convenientstorevoucher' && providerPaymentMethod == 43 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_convenientstorevoucher';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'gamevoucher' && providerPaymentMethod == 44 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_gamevoucher';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
			else if ( method.value == 'eclubpoints' && providerPaymentMethod == 35 )
			{
				$('payment_method_review_text').innerHTML = '#checkout_payment_method_eclubpoints';
				$('checkout_review_payment_info_area').style.display = 'none';
			}
		}
		
		$('review_address_body').innerHTML = $('first_name').value+' '+$('last_name').value;
		$('review_address_body').innerHTML += '<br>'+$('billing_address').value;
		if ( $('billing_address_two').value.length > 0 )
			$('review_address_body').innerHTML += '<br>'+$('billing_address_two').value;
			
		if ( $('billing_country').value == 'US' )
		{
			$('review_address_body').innerHTML += '<br>'+$('billing_city').value+','+$('billing_state_select').value;
		}
		else
		{
			$('review_address_body').innerHTML += '<br>'+$('billing_city').value+','+$('billing_state_text').value;
		}
		
		$('review_address_body').innerHTML += '<br>'+$('billing_postal_code').value;
		$('review_address_body').innerHTML += '<br>'+$('billing_country').value;

		if ( g_bRequiresShipping )
		{
			$('review_shipping_address_body').innerHTML = $('shipping_first_name').value+' '+$('shipping_last_name').value;
			$('review_shipping_address_body').innerHTML += ' (<a href="javascript:SetTabEnabled(\'shipping_info\');">#checkout_review_edit</a>)';
			$('review_shipping_address_body').innerHTML += '<br>'+$('shipping_address').value;
			if ( $('shipping_address_two').value.length > 0 )
				$('review_shipping_address_body').innerHTML += '<br>'+$('shipping_address_two').value;
			
			if ( $('shipping_country').value == 'US' )
			{
				$('review_shipping_address_body').innerHTML += '<br>'+$('shipping_city').value+','+$('shipping_state_select').value;
			}
			else
			{
				$('review_shipping_address_body').innerHTML += '<br>'+$('shipping_city').value+','+$('shipping_state_text').value;
			}
		
			$('review_shipping_address_body').innerHTML += '<br>'+$('shipping_postal_code').value;
			$('review_shipping_address_body').innerHTML += '<br>'+$('shipping_country').value;
		}
		else
		{
			$('checkout_review_shipping_address_area').style.display = 'none';
		}

		$('review_phone_body').innerHTML = $('billing_phone').value;
		
		var giftee_name_review = $('giftee_name_review');
		if ( giftee_name_review )
		{
			if ( $( 'send_via_email' ).checked )
			{
				giftee_name_review.innerHTML = $( 'email_input' ).value;
			}
			else
			{
				giftee_name_review.innerHTML = currently_selected_friend_name;
			}
		}

				if( $('checkout_review_gift_willbesent') && $('checkout_review_gift_willbekept') )
		{
			if ( $('send_self') && $('send_self').checked )
			{
				$('checkout_review_gift_willbesent').hide();
				$('checkout_review_gift_willbekept').show();
			}
			else
			{
				$('checkout_review_gift_willbesent').show();
				$('checkout_review_gift_willbekept').hide();
			}
		}
		
				if ( price_data )
		{
			if ( price_data.base )
				$('review_subtotal_value').innerHTML = price_data.formattedSubTotal;
			else
				$('review_subtotal_value').innerHTML = '';
				
			if ( price_data.formattedTax && price_data.formattedTax != '' )
			{
				$('review_taxes_value').innerHTML = price_data.formattedTax;
				$('cart_price_summary_taxes').style.display = 'block';
				$('review_taxes_value').style.display = 'block';
			}
			else
			{
				$('cart_price_summary_taxes').style.display =  'none';
				$('review_taxes_value').style.display = 'none';
			}

			if ( price_data.formattedShipping && price_data.formattedShipping != '' )
			{
				$('review_shipping_value').innerHTML = price_data.formattedShipping;
				$('cart_price_summary_shipping').style.display = 'block';
				$('review_shipping_value').style.display = 'block';
			}
			else
			{
				$('cart_price_summary_shipping').style.display =  'none';
				$('review_shipping_value').style.display = 'none';
			}
				
			if ( price_data.base )
				$('review_total_value').innerHTML = price_data.formattedTotal;
			else
				$('review_total_value').innerHTML = '';
				
			$('checkout_review_cart_area').innerHTML = price_data.lineItemsHTML;
			
			if ( price_data.taxNotice && price_data.taxNotice != '' )
			{
				$('checkout_review_tax_notice').innerHTML = price_data.taxNotice;
				$('checkout_review_tax_notice').style.display = 'block';
			}
			else
			{
				$('checkout_review_tax_notice').style.display = 'none';
			}
			
			if ( price_data.purchaseNotice && price_data.purchaseNotice != '' )
			{
				//in V5, this is a seperate notice
				$('checkout_review_purchase_notice').innerHTML = price_data.purchaseNotice;
				$('checkout_review_purchase_notice_area').show();
			}
		}
	} 
	catch(e) 
	{
		ReportCheckoutJSError( 'Failed updating review page with new billing/pricing data', e );
	}		
}



function NewSetTabEnabledClosure( a_tab_name )
{
	var tab_name = a_tab_name;
	return function() { SetTabEnabled( tab_name ) };
}


function SetTabEnabled( tab_name, bResetTab )
{
		if ( bResetTab == undefined )
		bResetTab = true;
		
		try 
	{
		if ( g_bFinalizeTransactionInProgress )
			return;
	} 
	catch( e )
	{
	}

		if ( g_timeoutPoll )
	{
		clearTimeout( g_timeoutPoll );	
	}
	g_timeoutPoll = false;
	g_bPollingForTransactionStatus = false;
		
	try 
	{
				var bTabNameOK = false;
		for( var i=0; i < rgValidTabs.length; ++i )
		{
			if ( rgValidTabs[i] == tab_name )
			{
				bTabNameOK = true;
				break;
			}
		}
		
				if ( !bTabNameOK )
			return;
			
		for( var i=0; i < rgValidTabs.length; ++i )
		{
			var curTab = rgValidTabs[i];
			
						if ( curTab != tab_name && $( rgValidTabs[i]+'_tab_select' ).className == 'cart_tab_on' )
			{
				$( curTab+'_tab_select' ).className = 'cart_tab_inactive';
				$( curTab+'_tab_select_left' ).className = 'cart_tab_left_inactive';
				$( curTab+'_tab_select_right' ).className = 'cart_tab_right_inactive';
				
																if ( curTab == 'review' )
					$( curTab+'_tab_select' ).onclick = function() { SubmitPaymentInfoForm(); };
				else
					$( curTab+'_tab_select' ).onclick = NewSetTabEnabledClosure( curTab );
				
				$( curTab+'_tab' ).style.display = 'none';
				$( 'col_right_'+curTab ).style.display = 'none';
				if ( $('footer_note_'+curTab) ) $('footer_note_'+curTab).hide();
			}
			else if ( curTab == tab_name )
			{
				$( curTab+'_tab_select' ).className = 'cart_tab_on';
				$( curTab+'_tab_select_left' ).className = 'cart_tab_left_on';
				$( curTab+'_tab_select_right' ).className = 'cart_tab_right_on';
				$( curTab+'_tab_select' ).onclick = function() { return true; };
				
				$( curTab+'_tab' ).style.display = 'block';
				$( 'col_right_'+curTab ).style.display = 'block';
				if ( $('footer_note_'+curTab) ) $('footer_note_'+curTab).show();
				
				if ( rgFocusOnTabSelect && rgFocusOnTabSelect[curTab] )
				{
										try {
						$( rgFocusOnTabSelect[curTab] ).focus();
					} catch(e) {
											}
				}	
				
				if ( bResetTab && curTab == 'payment_info' )
				{					
										ShowFirstPaymentStep();
				}
			}
		}
		
				$('error_display').innerHTML = '';
		$('error_display').style.display = 'none';
		
				$('footer').hide();
		$('footer').show();
	} 
	catch(e) 
	{
		ReportCheckoutJSError( 'Failed in SetTabEnabled(\''+tab_name+'\')', e );
	}
	
}

function UpdateGiftTextCharsRemaining()
{
	try 
	{
		var element = $( 'gift_message_text' );
		if ( !element )
			return;
			
		var len = element.value.length;
		if ( len > 160 )
		{
			element.value = element.value.substring( 0, 160 );
		}
		
		var remaining = 160 - Math.min( len, 160 );
		$( 'message_chars_left' ).innerHTML = remaining;
	}
	catch(e)
	{
		ReportCheckoutJSError( 'Failed in UpdateGiftTextCharsRemaining', e );
	}
}

function HandleFinalizeTransactionFailure( ePaymentType, eErrorDetail, bShowBRSpecificCreditCardError, sErrorText )
{
	try
	{
		var error_text = '';

		if ( sErrorText && sErrorText != '' )
		{
			error_text = sErrorText;			
		}
		else
		{
			switch ( ePaymentType )
			{
				case 2:
				{
					if ( bShowBRSpecificCreditCardError && ( 
						eErrorDetail == 1 
						|| eErrorDetail == 4 
						|| eErrorDetail == 0 
						|| eErrorDetail == 2 
						|| eErrorDetail == 13 
						)
					)
					{
						error_text = '#finalize_transaction_cc_error_brazil';
					}
					else
					{
						switch ( eErrorDetail )
						{
							default:
							case 3:
							case 8:
							case 9:
							case 7:
							case 11:
							case 57:
								error_text = '#finalize_transaction_generic_error';
								break;
							case 1:
								error_text = '#finalize_transaction_cc_avs_error';
								break;
							case 4:
								error_text = '#finalize_transaction_cc_timeout_error';
								break;
							case 0:
								error_text = '#finalize_transaction_cc_declined_error';
								break;
							case 2:
								error_text = '#finalize_transaction_cc_insufficientfunds_error';
								break;
							case 13:
								error_text = '#finalize_transaction_cc_restrictedcountry_error';
								break;
							case 35:
								error_text = '#finalize_transaction_exceed_wallet_max';
								break;
							case 44:
								error_text = '#finalize_transaction_account_locked';
								break;
							case 46:
								error_text = '#checkout_failed_steam_limit_exceeded';
								break;
						}
					}
				}
				break;	
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
				case 9:
				case 10:
				case 11:
				case 12:
				case 14:
				case 33:
				case 17:
				case 18:
				case 19:
				case 20:
				case 21:
				case 22:
				case 23:
				case 24:
				case 25:
				case 26:
				case 27:
				case 28:
				case 29:
				case 45:
				case 46:
				case 47:
				case 48:
				case 49:
				case 50:
				case 51:
				case 52:
				case 53:
				case 54:
				case 55:
				case 56:
				case 57:
				case 58:
				case 59:
				case 60:
				case 61:
				case 62:
				case 63:
				case 31:
				case 34:
				case 36:
				case 37:
				case 38:
				case 65:
				case 39:
				case 40:
				case 41:
				case 42:
				case 43:
				case 44:
				case 35:
				default:
				{
					switch ( eErrorDetail )
					{
						default:
						case 3:
						case 8:
						case 9:
						case 7:
						case 11:
						case 57:
							error_text = '#finalize_transaction_generic_error';
							break;
						case 13:
							error_text = '#finalize_transaction_cc_restrictedcountry_error';
							break;
						case 4:
							error_text = '#finalize_transaction_cc_timeout_error';
							break;
						case 0:
						case 22:
							error_text = '#finalize_transaction_paypal_decline_error';
							break;
						case 16:
							error_text = '#finalize_transaction_paypal_use_other_error';
							break;
						case 17:
						case 2:
							error_text = '#finalize_transaction_paypal_use_other_funding_error2';
							break;
						case 18:
							error_text = '#finalize_transaction_paypal_address_error';
							break;
						case 19:
							error_text = '#finalize_transaction_paypal_region_error';
							break;
						case 20:
							error_text = '#finalize_transaction_paypal_blocked_account_error';
							break;
						case 21:
							error_text = '#finalize_transaction_paypal_notverified_error';
							break;
						case 35:
							error_text = '#finalize_transaction_exceed_wallet_max';
							break;
						case 44:
							error_text = '#finalize_transaction_account_locked';
							break;
						case 46:
							error_text = '#checkout_failed_steam_limit_exceeded';
							break;
					}
				}
			}
		}
	}
	catch(e)
	{
		ReportCheckoutJSError( 'Failed choosing error string for FinalizeTransaction failure', e );
	}
		
	
	try 
	{
				if ( error_text != '' )
		{
			DisplayErrorMessage( error_text );
		}
		
				$('purchase_button_bottom').style.display = 'none';
		$('purchase_button_inprogress_bottom').style.display = 'none';
		$('purchase_button_disabled_bottom').style.display = 'block';
		$('change_payment_method_button_bottom').style.display = 'block';
		$('cancel_button_bottom').style.display = 'block';
	}
	catch( e )
	{
		ReportCheckoutJSError( 'Failed showing error after FinalizeTransaction failure', e );
	}
}

function NukeCartCookie()
{
	try
	{
		var date = new Date();
		date.setTime(date.getTime()+(-10*24*60*60*1000));
		var expires = "expires="+date.toGMTString();
		document.cookie = 'shoppingCartGID'+"=-1; "+expires+"; path=/";
		document.cookie = 'workshopShoppingCartGID'+"=-1; "+expires+"; path=/";
	}
	catch ( e )
	{
		ReportCheckoutJSError( 'Failed nuking cart cookie', e );
	}
}

function OnPurchaseSuccess( result )
{
	try 
	{
		if ( g_bIsUpdateBillingInfoForm )
		{
						if ( $('cache_return_url') )
				window.location = $('cache_return_url').value;
			else
				window.location = 'http://store.steampowered.com/account';
			return true;
		}
	
		$('receipt_total_price').innerHTML = result.purchasereceipt.formattedTotal;
		$('receipt_confirmation_code').innerHTML = result.purchasereceipt.transactionid;
		$('receipt_track_img').innerHTML = result.strReceiptPageHTML;
	
		DisplayReceiptPage();
		
		if ( result.purchaseresultdetail == 29 )
		{
			$('purchase_summary_area').style.display = 'none';
			$('receipt_error_display').style.display = 'block';
			
			$('receipt_error_display').innerHTML = '#finalize_transaction_needs_approval_error';
			
			Effect.ScrollTo( 'receipt_error_display' );
			new Effect.Highlight( 'receipt_error_display', { endcolor : '#000000', startcolor : '#ff9900' } );				
		}

		if ( typeof GDynamicStore != 'undefined' )
			GDynamicStore.InvalidateCache();
	}
	catch( e )
	{
		ReportCheckoutJSError( 'Error updating receipt body', e );
	}
	
		try
	{
		NukeCartCookie();
		var item_count = $('cart_item_count_value');
		if ( item_count )
			item_count.innerHTML = '0 '+'#cart_items_plural';
	}
	catch ( e )
	{
		ReportCheckoutJSError( 'Failed nuking cart cookie or updating item_count display', e );
	}

}

function DisplayReceiptPage()
{
	$('cart_area').style.display = 'none';
	$('receipt_area').style.display = 'block';

	if ( $('checkout_pipeline') && $('receipt_pipeline') )
	{
				$('checkout_pipeline').hide();
		$('receipt_pipeline').show();
	}

	if ( $('checkout_logo_default') && $('checkout_logo_receipt' ) )
	{
				$('checkout_logo_default').hide();
		$('checkout_logo_receipt').show();
	}

	if ( $('col_right_receipt') )
	{
		$('col_right_receipt').siblings().invoke('hide');
		$('col_right_receipt').show();
	}

	if ( $('logsuccessfulpurchase_form') )
	{
		var form = $('logsuccessfulpurchase_form');
		form.request();		}
}


function DisplayPendingReceiptPage()
{
	$('cart_area').style.display = 'none';
	$('col_right_review').style.display = 'none';
	$('pending_receipt_area').style.display = 'block';

	$('pending_receipt_total_price').innerHTML = $('review_total_value').innerHTML;
	$('pending_receipt_confirmation_code').innerHTML = $('transaction_id').value;
	
	var method = $('payment_method');
	
	switch ( method.value )
	{
		case 'boleto':
		case 'boacompragold':
		case 'bancodobrasilonline':
		case 'itauonline':
		case 'bradescoonline':
		case 'pagseguro':
		case 'visabrazil':
		case 'amexbrazil':
		case 'hipercard':
		case 'aura':
		case 'mastercardbrazil':
		case 'dinerscardbrazil':
		case 'multibanco':
		case 'payshop':
		case 'maestroboacompra':
		case 'oxxo':
		case 'toditocash':
		case 'carnet':
		case 'spei':
		case '3pay':
		case 'isbank':
		case 'garanti':
		case 'akbank':
		case 'yapikredi':
		case 'halkbank':
		case 'bankasya':
		case 'finansbank':
		case 'denizbank':
		case 'ptt':
		case 'cashu':
		case 'onecard':
			$('pending_purchase_summary_payment_method_description').innerHTML = 'checkout_receipt_pending_long';
			$('pending_purchase_summary_payment_method_notes_text').innerHTML = 'checkout_receipt_pending_boacompra_text';
			$('pending_purchase_summary_payment_method_notes').style.display = 'block';
			break;

		case 'molpoints':
			$('pending_purchase_summary_payment_method_description').innerHTML = 'checkout_receipt_pending_long';
			$('pending_purchase_summary_payment_method_notes_text').innerHTML = 'checkout_receipt_pending_mol_text';
			$('pending_purchase_summary_payment_method_notes').style.display = 'block';
			break;
			
		case 'konbini':
		case 'bank_transfer_japan':
		case 'payeasy':
			$('pending_purchase_summary_payment_method_description').innerHTML = 'checkout_receipt_pending_long';
			$('pending_purchase_summary_payment_method_notes_text').innerHTML = 'checkout_receipt_pending_degica_text';
			$('pending_purchase_summary_payment_method_notes').style.display = 'block';
			break;
			
		case 'eclubpoints':
			$('pending_purchase_summary_payment_method_description').innerHTML = 'checkout_receipt_pending_long';
			$('pending_purchase_summary_payment_method_notes_text').innerHTML = 'checkout_receipt_pending_eclub_text';
			$('pending_purchase_summary_payment_method_notes').style.display = 'block';
			break;
						
		default:
			$('pending_purchase_summary_payment_method_notes').style.display = 'none';
			break;
	}

	NukeCartCookie();
	
	if ( $('checkout_pipeline') && $('receipt_pipeline') )
	{
				$('checkout_pipeline').hide();
		$('receipt_pipeline').show();
	}

	if ( $('checkout_logo_default') && $('checkout_logo_receipt' ) )
	{
				$('checkout_logo_default').hide();
		$('checkout_logo_receipt').show();
	}

	if ( $('col_right_pending_receipt') )
	{
		$('col_right_pending_receipt').siblings().invoke('hide');
		$('col_right_pending_receipt').show();
	}
}

var g_nFinalizeWorkingButtonState = 1;
function AnimateFinalizeWorkingButton()
{
	try
	{
				if ( !g_bFinalizeTransactionInProgress && !g_bPollingForTransactionStatus )
			return;
			
		g_nFinalizeWorkingButtonState++;
		if ( g_nFinalizeWorkingButtonState > 3 )
			g_nFinalizeWorkingButtonState = 1;
			
		var append = '';
		if ( g_nFinalizeWorkingButtonState == 1 )
		{
			append = '.';
		}
		else if ( g_nFinalizeWorkingButtonState == 2 ) 
		{
			append = '..';
		}
		else 
		{
			append = '...';
		} 
		
		SetButtonInnerHtml('purchase_button_inprogress_bottom', 'btn_checkout_finalize_in_progress'+append );
		
		setTimeout( AnimateFinalizeWorkingButton, 500 );
	}
	catch ( e )
	{
		ReportCheckoutJSError( 'Error animating finalize working button', e );
	}
}


function HandlePollForTransactionStatusFailure()
{
	try
	{
		var error_text = '';
		error_text = '#check_purchase_status_error';
	}
	catch(e)
	{
		ReportCheckoutJSError( 'Failed choosing error string for PollForTransactionStatus failure', e );
	}
		
	
	try 
	{
				if ( error_text != '' )
		{
			DisplayErrorMessage( error_text );
		}
		
				$('purchase_button_bottom').style.display = 'none';
		$('purchase_button_inprogress_bottom').style.display = 'none';
		$('purchase_button_disabled_bottom').style.display = 'block';
		$('change_payment_method_button_bottom').style.display = 'none';
		$('cancel_button_bottom').style.display = 'block';
	}
	catch( e )
	{
		ReportCheckoutJSError( 'Failed showing error after PollForTransactionStatus failure', e );
	}
}

	
var g_nGetPurchaseStatusCalls = 0;
var g_timeoutPoll = false;
var g_bPollingForTransactionStatus = false;
function PollForTransactionStatus( txnid, retries, timeout )
{
	g_bPollingForTransactionStatus = true;
	
		AnimateFinalizeWorkingButton();
	
		if ( retries < 0 )
	{
		g_bFinalizeTransactionInProgress = false;
		g_timeoutPoll = false;
		HandlePollForTransactionStatusFailure();
		return;
	}
		
	try 
	{
		new Ajax.Request('https://store.steampowered.com/checkout/transactionstatus/',
		{
		    method:'get',
		    parameters: { 
				'count' : ++g_nGetPurchaseStatusCalls,
				'transid' : txnid
			},
		    onSuccess: function(transport)
		    {
				if ( transport.responseText )
				{
					try {
						var result = transport.responseText.evalJSON(true);
			      		} catch ( e ) {
		      							    			g_timeoutPoll = setTimeout( NewPollForTransactionStatusClosure( txnid, retries-1, timeout ), timeout*1000 );
		      				return;
		      			}
		      		
			      					      		var bNeedsApproval = (result.success == 22 && result.purchaseresultdetail == 29);
			      		if ( result.success == 22 && !bNeedsApproval )
		      			{
		      						      				g_timeoutPoll = setTimeout( NewPollForTransactionStatusClosure( txnid, retries-1, timeout ), timeout*1000 );
			      			return;
			      		}
	      		
			      		g_bFinalizeTransactionInProgress = false;
			      		g_bPollingForTransactionStatus = false;
					g_timeoutPoll = false;
					
			      	   				      	   	if ( result.success == 1 || bNeedsApproval )
		      		   	{
		      	   			OnPurchaseSuccess( result );
		      	   			return;
			      	   	}
			      	   	else
			      	   	{
		      		   		var ePaymentMethod = 2;
		      	   			if ( result.purchasereceipt && result.purchasereceipt.paymentmethod )
		      	   				ePaymentMethod = result.purchasereceipt.paymentmethod;
		      	   			
			      	   		HandleFinalizeTransactionFailure( ePaymentMethod, result.purchaseresultdetail, result.bShowBRSpecificCreditCardError, result.errorDescription );
			      	   		return;
			      	   	}
				}
			  	
			  			      		g_bFinalizeTransactionInProgress = false;
			  	g_bPollingForTransactionStatus = false;
				g_timeoutPoll = false;
				HandleFinalizeTransactionFailure( 2, 3, false, '' );
		    },
		    onFailure: function()
			{
						      		g_timeoutPoll = setTimeout( NewPollForTransactionStatusClosure( txnid, retries-1, timeout ), timeout*1000 );
			      	return;
			}
		});
	}
	catch( e ) 
	{
		ReportCheckoutJSError( 'Error submitting TransactionStatus request', e );
	}
}

function NewPollForTransactionStatusClosure( txnid, retries, timeout )
{
	var closure_txnid = txnid;
	var closure_retries = retries;
	var closure_timeout = timeout;
	return function() { PollForTransactionStatus( closure_txnid, closure_retries, closure_timeout ); };
}

var g_LastFinalizedTransactionID = -1;
function FinalizeTransaction()
{
		if ( g_bFinalizeTransactionInProgress || g_timeoutPoll ) 
		return;

		if ( BStoredCreditCardRequiresSecurityCode( method.value ) && $('security_code_cached').value == '' )
	{
		DisplayErrorMessage( '#checkout_error_bad_security_code' );
		ValidationMarkFieldBad( $('security_code_cached' ) );
		return;
	}

		if ( !g_bIsUpdateBillingInfoForm && ( !$('accept_ssa') || !$('accept_ssa').checked ) )
	{
		DisplayErrorMessage( '#checkout_ssa_fail' );
		ValidationMarkFieldBad( $('purchase_confirm_ssa') );
		return;
	}
	

	 
	if ( $('transaction_id').value == -1 || $('transaction_id').value == '' )
	{
		HandleFinalizeTransactionFailure( 2, 0, false, '' );
		return;
	}
	
		
		g_bFinalizeTransactionInProgress = true;
	
	try
	{
				$('purchase_button_bottom').style.display = 'none';
		$('purchase_button_disabled_bottom').style.display = 'none';
		$('purchase_button_inprogress_bottom').style.display = 'block';
		$('change_payment_method_button_bottom').style.display = 'none';
		$('cancel_button_bottom').style.display = 'none';
	}
	catch ( e )
	{
		ReportCheckoutJSError( 'Error disabling buttons during FinalizeTransaction', e );
	}

	try
	{
				setTimeout( AnimateFinalizeWorkingButton, 500 );
	}
	catch ( e )
	{
		ReportCheckoutJSError( 'Error initializing finalize working animation', e );
	}
	
	try 
	{
				g_LastFinalizedTransactionID = $('transaction_id').value;
		$('transaction_id').value = -1;
		
		// Create this here, so its not nested within the onSuccess closure	
		var StatusPollFunc = NewPollForTransactionStatusClosure( g_LastFinalizedTransactionID, 60, 5 );
		
		new Ajax.Request('https://store.steampowered.com/checkout/finalizetransaction/',
		{
		    method:'post',
		    parameters: { 
								'transid' : g_LastFinalizedTransactionID,
				'CardCVV2' : ( method.value == 'jcb' ? ' ' : ( BIsStoredCreditCard() ? $('security_code_cached').value : $('security_code').value ) )
			},
		    onSuccess: function(transport){
				if ( transport.responseText ){
					try {
						var result = transport.responseText.evalJSON(true);
		      		} catch ( e ) {
		      			// Failure
		      			HandleFinalizeTransactionFailure( 2, 3, false, '' );
		      			g_bFinalizeTransactionInProgress = false;
		      			return;
		      		}
		      		
		      				      		var bNeedsApproval = (result.success == 22 && result.purchaseresultdetail == 29);
		      		if ( result.success == 22 && !bNeedsApproval )
		      		{
		      					      			g_timeoutPoll = setTimeout( StatusPollFunc, 2*1000 );
		      			return;
		      		}
		      		
		      		g_bFinalizeTransactionInProgress = false;
		      	   	// Success...
		      	   	if ( result.success == 1 || bNeedsApproval )
		      	   	{
		      	   		OnPurchaseSuccess( result );
		      	   		return;
		      	   	}
		      	   	else
		      	   	{
		      	   		var ePaymentMethod = 2;
		      	   		if ( result.purchasereceipt && result.purchasereceipt.paymentmethod )
		      	   			ePaymentMethod = result.purchasereceipt.paymentmethod;
		      	   			
		      	   		HandleFinalizeTransactionFailure( ePaymentMethod, result.purchaseresultdetail, result.bShowBRSpecificCreditCardError, result.errorDescription );
		      	   		return;
		      	   	}
			  	}
			  	
			  				  	g_bFinalizeTransactionInProgress = false;
				HandleFinalizeTransactionFailure( 2, 3, false, '' );
		    },
		    onFailure: function(){
								g_bFinalizeTransactionInProgress = false;
				HandleFinalizeTransactionFailure( 2, 3, false, '' );
			}
		});
	}
	catch( e ) 
	{
		ReportCheckoutJSError( 'Error submitting FinalizeTransaction request', e );
	}
}

function SSAPopup()
{
		var win = window.open( 'https://store.steampowered.com/checkout/ssapopup','steam_ssa','width=536,height=546,resize=yes,scrollbars=yes');
	win.focus();
}

function DisplayErrorMessage( strMessage )
{
	$('error_display').innerHTML = strMessage;
	$('error_display').style.display = 'block';
	Effect.ScrollTo( 'error_display' );
	
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

function UpdateWillBeSentToNote()
{
	var elSentToNote = $('sendgift_willbesentto');
	if ( elSentToNote )
	{
		if ( $( 'send_via_email' ).checked )
		{
			$('sendto_email').show();
			$('sendto_steamaccount').hide();
			$('sendto_email_value').update( $( 'email_input' ).value );
		}
		else
		{
			$('sendto_email').hide();
			$('sendto_steamaccount').show();
			$('sendto_steamaccount_value').update( currently_selected_friend_name );
		}
		elSentToNote.show();
	}
}

var g_bSendGiftCallRunning = false;
function SendGift()
{
		if( g_bSendGiftCallRunning )
		return;

	var giftee_account_id = 0;
	var giftee_email = '';
	var giftee_name = '';
	var gift_message = '';
	var gift_sentiment = '';
	var gift_signature = '';
	var bIsGift = true;

	try
	{
				if ( $( 'send_via_email' ).checked )
		{
			giftee_email = $( 'email_input' ).value;
		}
		else
		{
			giftee_account_id = currently_selected_friend_id;
		}
		giftee_name = $('gift_recipient_name').value;
		gift_message = $('gift_message_text').value;
		gift_sentiment = $('gift_sentiment').value;
		gift_signature = $('gift_signature').value;

				g_bSendGiftCallRunning = true;

		new Ajax.Request('https://store.steampowered.com/checkout/sendgiftsubmit/',
		{
		    method:'post',
		    parameters: {
				// gift info
				'GifteeAccountID' : giftee_account_id,
				'GifteeEmail' : giftee_email,
				'GifteeName' : giftee_name,
				'GiftMessage' : gift_message,
				'GiftSentiment' : gift_sentiment,
				'GiftSignature' : gift_signature,
				'GiftGID':		g_gidGift,
				'SessionID':	g_SessionID
			},
		    onSuccess: function(transport){
		    	g_bSendGiftCallRunning = false;
				if ( transport.responseJSON && transport.responseJSON.success )
				{
					var result = transport.responseJSON.success;
			      	   	// Success...
			      	   	if ( result == 1 || result == 22 )
			      	   	{
						OnSendGiftSuccess( result );
			      	   	}
					else
					{
			      	   		OnSendGiftFailure( result );
					}
			  	}
				else
				{
										OnSendGiftFailure( 2  );
				}
			},
			onFailure: function()
			{
								g_bSendGiftCallRunning = false;
				OnSendGiftFailure( 3  );
			}
		});
	}
	catch(e)
	{
		ReportCheckoutJSError( 'Failed gathering form data and calling DoSendGift', e );
	}
}


function OnSendGiftSuccess( result )
{
	// show receipt tab
	DisplayReceiptPage();
}

function OnUnsendGiftSuccess( result )
{
	$('send_gift_success').hide();
	$('unsend_gift_success').show();
	DisplayReceiptPage();
}

function OnSendGiftFailure( eresult )
{
	try
	{
		SetTabEnabled( 'gift_recipient' );
		var error_text = '#checkout_failed_inittransaction';

		DisplayErrorMessage( error_text );
	}
	catch (e)
	{
		ReportCheckoutJSError( 'Failed handling OnSendGiftFailure failure', e );
	}
}

function UnsendGift()
{
		if( g_bSendGiftCallRunning )
		return;

	try
	{
				g_bSendGiftCallRunning = true;

		new Ajax.Request('https://store.steampowered.com/checkout/unsendgiftsubmit/',
		{
		    method:'post',
		    parameters: {
				// gift info
				'GiftGID':		g_gidGift,
				'SessionID':	g_SessionID
			},
		    onSuccess: function(transport){
		    	g_bSendGiftCallRunning = false;
				if ( transport.responseJSON && transport.responseJSON.success )
				{
					var result = transport.responseJSON.success;
			      	   	// Success...
			      	   	if ( result == 1 || result == 22 )
			      	   	{
							OnUnsendGiftSuccess( result );
			      	   	}
					else
					{
						OnSendGiftFailure( result );
					}
			  	}
				else
				{
										OnSendGiftFailure( 2  );
				}
			},
			onFailure: function()
			{
								g_bSendGiftCallRunning = false;
				OnSendGiftFailure( 3  );
			}
		});
	}
	catch(e)
	{
		ReportCheckoutJSError( 'Failed gathering form data and calling DoSendGift', e );
	}
}


