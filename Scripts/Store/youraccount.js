
function ReportYourAccountJSError( message, e )
{
	try 
	{
		if (typeof e == 'string')
    		e = new Error(e);
    		
		ReportError( '/public/javascript/youraccount.js?l=english', message, message+":\n\n  Exception: "+e.name+" - "+e.message+"\n" );
	} catch( e ) 
	{
			}
}


function ShowUpdateSubscriptionDialog(agreementid)
{
	$('link_subscription_'+agreementid).style.visibility = 'hidden';
	$('update_subscription_'+agreementid).style.display = 'block';
	
	new Effect.Highlight( 'update_subscription_'+agreementid, { endcolor : '#000000', startcolor : '#ff9900' } );	
}

function AbortUpdateSubscription(agreementid)
{
	$('link_subscription_'+agreementid).style.visibility = 'visible';
	$('update_subscription_'+agreementid).style.display = 'none';
}


var g_bUpdateSubscriptionRunning = false;
function UpdateSubscription(agreementid, cancelTerms, bBillingAgreement)
{
	var selection = $$('input:checked[type="radio"][name="update_subscription_'+agreementid+'_option"]');
	
	var packageid = '';
	if ( selection )
	{
		packageid = selection.pluck('value');
	}

	if ( packageid == '' )
		return;
		
		if( g_bUpdateSubscriptionRunning )
		return;

	try 
	{
				g_bUpdateSubscriptionRunning = true;

		new Ajax.Request('https://store.steampowered.com/account/updatesubscription/',
		{
		    method:'post',
		    parameters: { 
				'agreementid' : agreementid,
				'packageid' : packageid
			},
		    onSuccess: function(transport){
		    	g_bUpdateSubscriptionRunning = false;
				if ( transport.responseText ){
					try {
						var result = transport.responseText.evalJSON(true);
		      		} catch ( e ) {
		      			// Failure
		      			OnUpdateSubscriptionFailure( agreementid );
		      		}
		      	   	// Success...
		      	   	if ( result.success == 1 )
		      	   	{
		      	   		OnUpdateSubscriptionSuccess( agreementid, cancelTerms, bBillingAgreement, result );
		      	   		return;
		      	   	}
		      	   	else
		      	   	{
		      	   		OnUpdateSubscriptionFailure( agreementid, result.bCancel );
		      	   		return;
		      	   	}
			  	}
			  	
								OnUpdateSubscriptionFailure( agreementid, packageid == -1 );
		    },
		    onFailure: function(){
								g_bUpdateSubscriptionRunning = false;
				OnUpdateSubscriptionFailure( agreementid, packageid == -1 );
			}
		});
	} 
	catch(e) 
	{
		ReportYourAccountJSError( 'Failed making AJAX call to UpdateSubscription', e );
	}
}


function OnUpdateSubscriptionSuccess( agreementid, cancelTerms, bBillingAgreement, results )
{
	try 
	{
		if ( $('transaction_price_'+agreementid) )
			$('transaction_price_'+agreementid).innerHTML = results.price;

		if ( results.bCancel )
		{
			$('transaction_due_date_'+agreementid).innerHTML = 'Cancelled';
			$('subtext_subscription_'+agreementid).innerHTML = cancelTerms;
			if ( bBillingAgreement )
			{
				$('update_subscription_'+agreementid).innerHTML = 'Your pre-authorization of charges from %1$s has successfully been revoked.  You will no longer receive automatic charges from this game.'.replace( '%1$s', $('transaction_name_'+agreementid).innerText );
			}
			else
			{
				$('update_subscription_'+agreementid).innerHTML = 'This subscription is now cancelled.';
			}
		}
		else
		{
			$('transaction_name_'+agreementid).innerHTML = results.name;
			$('subtext_subscription_'+agreementid).innerHTML = results.terms;
			$('link_subscription_'+agreementid).style.visibility = 'visible';
			$('update_subscription_'+agreementid).style.display = 'none';
			$('transaction_due_date_'+agreementid).innerHTML = results.next_bill_date;
		}
		new Effect.Highlight( 'update_subscription_'+agreementid, { endcolor : '#000000', startcolor : '#ff9900' } );	
	} 
	catch( e ) 
	{
		ReportYourAccountJSError( 'Failed in OnUpdateSubscriptionSuccess()', e );
	}
}

function OnUpdateSubscriptionFailure( agreementid, cancel )
{
	try 
	{
		if ( cancel )
		{
			$('update_subscription_'+agreementid).innerHTML = 'There was a problem canceling this subscription.<br/>Please contact <a href="http://support.steampowered.com/">Steam Support</a>';
		}
		else
		{
			$('update_subscription_'+agreementid).innerHTML = 'There was a problem updating this subscription.<br/>Please contact <a href="%s">Steam Support</a>';
		}
		new Effect.Highlight( 'update_subscription_'+agreementid, { endcolor : '#000000', startcolor : '#ff9900' } );	
	} 
	catch (e) 
	{
		ReportYourAccountJSError( 'Failed in agreementid()', e );
	}
}


function ShowCancelPurchaseDialog(transid)
{
	$('link_transaction_'+transid).style.display = 'none';
	$('cancel_transaction_'+transid).style.display = 'block';
	
	new Effect.Highlight( 'cancel_transaction_'+transid, { endcolor : '#000000', startcolor : '#ff9900' } );	
}

function AbortCancelPendingPurchase(transid)
{
	$('link_transaction_'+transid).style.display = 'block';
	$('cancel_transaction_'+transid).style.display = 'none';
}

var g_bCancelPendingTransactionRunning = false;
function CancelPendingPurchase(transid)
{
		if( g_bCancelPendingTransactionRunning )
		return;

	try 
	{
				g_bCancelPendingTransactionRunning = true;

		new Ajax.Request('https://store.steampowered.com/account/cancelpendingpurchase/',
		{
		    method:'post',
		    parameters: { 
				'transid' : transid
			},
		    onSuccess: function(transport){
		    	g_bCancelPendingTransactionRunning = false;
				if ( transport.responseText ){
					try {
						var result = transport.responseText.evalJSON(true);
		      		} catch ( e ) {
		      			// Failure
		      			OnCancelPendingTransactionFailure( transid );
		      		}
		      	   	// Success...
		      	   	if ( result.success == 1 )
		      	   	{
		      	   		OnCancelPendingTransactionSuccess( transid );
		      	   		return;
		      	   	}
		      	   	else
		      	   	{
		      	   		OnCancelPendingTransactionFailure( transid );
		      	   		return;
		      	   	}
			  	}
			  	
								OnCancelPendingTransactionFailure( transid );
		    },
		    onFailure: function(){
								g_bCancelPendingTransactionRunning = false;
				OnCancelPendingTransactionFailure( transid );
			}
		});
	} 
	catch(e) 
	{
		ReportYourAccountJSError( 'Failed making AJAX call to CancelPendingPurchase', e );
	}
}


function OnCancelPendingTransactionSuccess( transid )
{
	try 
	{
		$('transaction_event_'+transid).innerHTML = 'Failed';
		$('transaction_price_'+transid).innerHTML = 'N/A';
		$('cancel_transaction_'+transid).innerHTML = 'This transaction is now cancelled.';
		new Effect.Highlight( 'cancel_transaction_'+transid, { endcolor : '#000000', startcolor : '#ff9900' } );	
	} 
	catch( e ) 
	{
		ReportYourAccountJSError( 'Failed in OnCancelPendingTransactionSuccess()', e );
	}
}

function OnCancelPendingTransactionFailure( transid )
{
	try 
	{
		$('cancel_transaction_'+transid).innerHTML = 'There was a problem cancelling this transaction.<br/>Please contact <a href="http://support.steampowered.com/">Steam Support</a>';
		new Effect.Highlight( 'cancel_transaction_'+transid, { endcolor : '#000000', startcolor : '#ff9900' } );	
	} 
	catch (e) 
	{
		ReportYourAccountJSError( 'Failed in OnCancelPendingTransactionFailure()', e );
	}
}

function ShowConfirmRemovePaymentMethodDialog()
{
	$('confirm_remove_card').style.display = 'block';
	
	new Effect.Highlight( 'confirm_remove_card', { endcolor : '#000000', startcolor : '#ff9900' } );	
}

