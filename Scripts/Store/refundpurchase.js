
function ReportYourAccountJSError( message, e )
{
	try 
	{
		if (typeof e == 'string')
    		e = new Error(e);
    		
		ReportError( '/public/javascript/refundpurchase.js?l=english', message, message+":\n\n  Exception: "+e.name+" - "+e.message+"\n" );
	} catch( e ) 
	{
			}
}

function ShowRefundableItems()
{
	$('refundPage1').style.display = 'none';
	$('refundPage2').style.display = 'block';
	$('refundPage3').style.display = 'none';
	$('refundPage4').style.display = 'none';
}

var g_bVerifyRefundRunning = false;
function VerifyRefund(transid)
{
	var selection = $$('input:checked[type="radio"][name="lineitem"]');
	
	var lineitem = '';
	if ( selection )
	{
		lineitem = selection.pluck('value');
	}

	if ( lineitem == '' )
		return;
		
		if( g_bVerifyRefundRunning )
		return;

	try 
	{
				g_bVerifyRefundRunning = true;

		new Ajax.Request('https://store.steampowered.com/account/refundpurchaseverify/',
		{
		    method:'post',
		    parameters: { 
				'transid' : transid,
				'lineitem' : lineitem
			},
		    onSuccess: function(transport){
		    	g_bVerifyRefundRunning = false;
				if ( transport.responseText ){
					try {
						var result = transport.responseText.evalJSON(true);
		      		} catch ( e ) {
		      			// Failure
		      			OnVerifyRefundFailure( transid );
		      		}
		      	   	// Success...
		      	   	if ( result.success == 1 )
		      	   	{
		      	   		OnVerifyRefundSuccess( transid, result );
		      	   		return;
		      	   	}
		      	   	else
		      	   	{
		      	   		OnVerifyRefundFailure( transid );
		      	   		return;
		      	   	}
			  	}
			  	
								OnVerifyRefundFailure( transid );
		    },
		    onFailure: function(){
								g_bVerifyRefundRunning = false;
				OnVerifyRefundFailure( transid );
			}
		});
	} 
	catch(e) 
	{
		ReportYourAccountJSError( 'Failed making AJAX call to VerifyRefund', e );
	}
}


function OnVerifyRefundSuccess( transid, results )
{
	try 
	{
		$('refund_error').style.display = 'none';
		$('refundPage1').style.display = 'none';
		$('refundPage2').style.display = 'none';
		$('refundPage3').style.display = 'block';
		$('refundPage4').style.display = 'none';
		$('refundVerifyAmount').innerHTML = results.verify_text;
	} 
	catch( e ) 
	{
		ReportYourAccountJSError( 'Failed in OnVerifyRefundSuccess()', e );
	}
}

function OnVerifyRefundFailure( transid )
{
	try 
	{
		$('refund_error').innerHTML = 'There was a problem processing your refund at this time.<br/>Please contact <a href="%s">Steam Support</a>';
		$('refund_error').style.display = 'block';
		Effect.ScrollTo( 'refund_error' );
		new Effect.Highlight( 'refund_error', { endcolor : '#000000', startcolor : '#ff9900' } );		
	} 
	catch (e) 
	{
		ReportYourAccountJSError( 'Failed in OnVerifyRefundFailure()', e );
	}
}


var g_bConfirmRefundRunning = false;
function ConfirmRefund(transid)
{
	var selection = $$('input:checked[type="radio"][name="lineitem"]');
	
	var lineitem = '';
	if ( selection )
	{
		lineitem = selection.pluck('value');
	}

	if ( lineitem == '' )
		return;
		
		if( g_bConfirmRefundRunning )
		return;

	try 
	{
				g_bConfirmRefundRunning = true;

		new Ajax.Request('https://store.steampowered.com/account/refundpurchaseconfirm/',
		{
		    method:'post',
		    parameters: { 
				'transid' : transid,
				'lineitem' : lineitem
			},
		    onSuccess: function(transport){
		    	g_bConfirmRefundRunning = false;
				if ( transport.responseText ){
					try {
						var result = transport.responseText.evalJSON(true);
		      		} catch ( e ) {
		      			// Failure
		      			OnConfirmRefundFailure( transid, 2 );
		      		}
		      	   	// Success...
		      	   	if ( result.success == 1 || result.success == 22 )
		      	   	{
		      	   		OnConfirmRefundSuccess( transid, result );
		      	   		return;
		      	   	}
		      	   	else
		      	   	{
		      	   		OnConfirmRefundFailure( transid, result.success );
		      	   		return;
		      	   	}
			  	}
			  	
								OnConfirmRefundFailure( transid, 2 );
		    },
		    onFailure: function(){
								g_bConfirmRefundRunning = false;
				OnConfirmRefundFailure( transid, 2 );
			}
		});
	} 
	catch(e) 
	{
		ReportYourAccountJSError( 'Failed making AJAX call to ConfirmRefund', e );
	}
}


function OnConfirmRefundSuccess( transid, results )
{
	try 
	{
		$('refund_error').style.display = 'none';		
		$('refundPage1').style.display = 'none';
		$('refundPage2').style.display = 'none';
		$('refundPage3').style.display = 'none';
		$('refundPage4').style.display = 'block';
		$('refundConfirmation').innerHTML = results.confirm_text;
	} 
	catch( e ) 
	{
		ReportYourAccountJSError( 'Failed in OnConfirmRefundSuccess()', e );
	}
}

function OnConfirmRefundFailure( transid, result )
{
	try 
	{
		$('refund_error').innerHTML = 'There was a problem processing your refund at this time.<br/>Please contact <a href="%s">Steam Support</a>';
		$('refund_error').style.display = 'block';
		Effect.ScrollTo( 'refund_error' );
		new Effect.Highlight( 'refund_error', { endcolor : '#000000', startcolor : '#ff9900' } );		
	} 
	catch (e) 
	{
		ReportYourAccountJSError( 'Failed in OnConfirmRefundFailure()', e );
	}
}


var g_bCancelPendingRefundRunning = false;
function CancelPendingRefund(refundid)
{
		
		if( g_bCancelPendingRefundRunning )
		return;

	try 
	{
				g_bCancelPendingRefundRunning = true;

		new Ajax.Request('https://store.steampowered.com/account/cancelpendingrefund/',
		{
		    method:'post',
		    parameters: { 
				'refundid' : refundid
			},
		    onSuccess: function(transport){
		    	g_bCancelPendingRefundRunning = false;
				if ( transport.responseText ){
					try {
						var result = transport.responseText.evalJSON(true);
		      		} catch ( e ) {
		      			// Failure
		      			OnCancelPendingRefundFailure( refundid, 2 );
		      		}
		      	   	// Success...
		      	   	if ( result.success == 1 )
		      	   	{
		      	   		OnCancelPendingRefundSuccess( refundid, result );
		      	   		return;
		      	   	}
		      	   	else
		      	   	{
		      	   		OnCancelPendingRefundFailure( refundid, result.success );
		      	   		return;
		      	   	}
			  	}
			  	
								OnCancelPendingRefundFailure( refundid, 2 );
		    },
		    onFailure: function(){
								g_bCancelPendingRefundRunning = false;
				OnCancelPendingRefundFailure( refundid, 2 );
			}
		});
	} 
	catch(e) 
	{
		ReportYourAccountJSError( 'Failed making AJAX call to CancelPendingRefund', e );
	}
}


function OnCancelPendingRefundSuccess( refundid, results )
{
	try 
	{
		$('refund_error').style.display = 'none';		
		$('refundPage1').style.display = 'none';
		$('refundPage2').style.display = 'none';
		$('refundPage3').style.display = 'none';
		$('refundPage4').style.display = 'block';
		$('refundConfirmation').innerHTML = 'Your refund request has been cancelled.';
	} 
	catch( e ) 
	{
		ReportYourAccountJSError( 'Failed in OnCancelPendingRefundSuccess()', e );
	}
}

function OnCancelPendingRefundFailure( refundid, result )
{
	try 
	{
		$('refund_error').innerHTML = 'There was a problem processing your refund at this time.<br/>Please contact <a href="%s">Steam Support</a>';
		$('refund_error').style.display = 'block';
		Effect.ScrollTo( 'refund_error' );
		new Effect.Highlight( 'refund_error', { endcolor : '#000000', startcolor : '#ff9900' } );		
	} 
	catch (e) 
	{
		ReportYourAccountJSError( 'Failed in OnCancelPendingRefundFailure()', e );
	}
}
