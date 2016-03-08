
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
			$('transaction_due_date_'+agreementid).innerHTML = '#youraccount_subscription_status_cancelled';
			$('subtext_subscription_'+agreementid).innerHTML = cancelTerms;
			if ( bBillingAgreement )
			{
				$('update_subscription_'+agreementid).innerHTML = '#youraccount_cancel_game_agreement_successful'.replace( '%1$s', $('transaction_name_'+agreementid).innerText );
			}
			else
			{
				$('update_subscription_'+agreementid).innerHTML = '#youraccount_cancel_subscription_successful';
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
			$('update_subscription_'+agreementid).innerHTML = '#youraccount_cancel_subscription_error';
		}
		else
		{
			$('update_subscription_'+agreementid).innerHTML = 'youraccount_update_subscription_error';
		}
		new Effect.Highlight( 'update_subscription_'+agreementid, { endcolor : '#000000', startcolor : '#ff9900' } );	
	} 
	catch (e) 
	{
		ReportYourAccountJSError( 'Failed in agreementid()', e );
	}
}

function ShowRenewSubscriptionDialog(agreementid)
{
	$('link_subscription_'+agreementid).style.visibility = 'hidden';
	$('renew_subscription_'+agreementid).style.display = 'block';
	
	new Effect.Highlight( 'renew_subscription_'+agreementid, { endcolor : '#000000', startcolor : '#ff9900' } );	
}


function AbortRenewSubscription(agreementid)
{
	$('link_subscription_'+agreementid).style.visibility = 'visible';
	$('renew_subscription_'+agreementid).style.display = 'none';
}


var g_bRenewSubscriptionRunning = false;
function RenewSubscription(agreementid, duedate, terms, total, bBillingAgreement)
{
		if( g_bRenewSubscriptionRunning )
		return;

	try 
	{
				g_bRenewSubscriptionRunning = true;

		new Ajax.Request('https://store.steampowered.com/account/renewsubscription/',
		{
		    method:'post',
		    parameters: { 
				'agreementid' : agreementid
			},
		    onSuccess: function(transport){
		    	g_bRenewSubscriptionRunning = false;
				if ( transport.responseText ){
					try {
						var result = transport.responseText.evalJSON(true);
		      		} catch ( e ) {
		      			// Failure
		      			OnRenewSubscriptionFailure( agreementid );
		      		}
		      	   	// Success...
		      	   	if ( result.success == 1 )
		      	   	{
		      	   		OnRenewSubscriptionSuccess( agreementid, duedate, terms, total, bBillingAgreement );
		      	   		return;
		      	   	}
		      	   	else
		      	   	{
		      	   		OnRenewSubscriptionFailure( agreementid );
		      	   		return;
		      	   	}
			  	}
			  	
								OnRenewSubscriptionFailure( agreementid );
		    },
		    onFailure: function(){
								g_bRenewSubscriptionRunning = false;
				OnRenewSubscriptionFailure( agreementid );
			}
		});
	} 
	catch(e) 
	{
		ReportYourAccountJSError( 'Failed making AJAX call to RenewSubscription', e );
	}
}


function OnRenewSubscriptionSuccess( agreementid, duedate, terms, total, bBillingAgreement )
{
	try 
	{
		$('transaction_due_date_'+agreementid).innerHTML = duedate;
		if ( $('transaction_price_'+agreementid) )
			$('transaction_price_'+agreementid).innerHTML = total;
		$('subtext_subscription_'+agreementid).innerHTML = terms;
		if ( bBillingAgreement )
		{
				$('renew_subscription_'+agreementid).innerHTML = '#youraccount_renew_billing_agreement_successful'.replace( '%1$s', $('transaction_name_'+agreementid).innerText );
		}
		else
		{
			$('renew_subscription_'+agreementid).innerHTML = '#youraccount_renew_transaction_successful';
		}
		new Effect.Highlight( 'renew_subscription_'+agreementid, { endcolor : '#000000', startcolor : '#ff9900' } );	
	} 
	catch( e ) 
	{
		ReportYourAccountJSError( 'Failed in OnRenewSubscriptionSuccess()', e );
	}
}

function OnRenewSubscriptionFailure( agreementid )
{
	try 
	{
		$('renew_subscription_'+agreementid).innerHTML = '#youraccount_renew_transaction_error';
		new Effect.Highlight( 'renew_subscription_'+agreementid, { endcolor : '#000000', startcolor : '#ff9900' } );	
	} 
	catch (e) 
	{
		ReportYourAccountJSError( 'Failed in agreementid()', e );
	}
}

function ShowConfirmRemovePaymentMethodDialog()
{
	$('confirm_remove_card').style.display = 'block';
	
	new Effect.Highlight( 'confirm_remove_card', { endcolor : '#000000', startcolor : '#ff9900' } );	
}

