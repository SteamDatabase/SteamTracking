
function ShowEmailUpdateForm()
{
	$('emailvalidation_validateform').hide();
	$('emailvalidation_updateform').show();
	$('password_input').focus();
	HideErrorMessage();
}

function HideEmailUpdateForm()
{
	$('emailvalidation_updateform').hide();
	$('emailvalidation_validateform').show();
	HideErrorMessage();
}

function UpdateDisplayedEmail( strNewEmail )
{
	$('emaildisplay_1').update( strNewEmail );
	$('emaildisplay_2').update( strNewEmail );
	$('emaildisplay_3').update( strNewEmail );
}

function ToggleEmailValidationSuccess()
{
	$('emailvalidation_status_sent').hide();
	$('emailvalidation_status_success').show();
	
	$('emailvalidation_purchase_pending').hide();
	$('emailvalidation_purchase_success').show();
	
	$('emailvalidation_buttons_disabled').hide();
	$('emailvalidation_buttons_enabled').show();
	
	$('emailvalidation_show_update_link').hide();
}

var g_bShortPollPending = false;
var g_bValidationPollInFlight = false;
var g_timeLastValidationPoll = 0;
var g_cPolls = 0;

var DEFAULT_POLL_INTERVAL_MS = 3000; var LONG_POLL_INTERVAL_MS = 15000; var g_timeout = false;

Event.observe( document, 'focus', OnUserActivity );
Event.observe( document, 'mousemove', OnUserActivity );

function OnUserActivity()
{
	if ( !g_bShortPollPending )
	{
		g_bShortPollPending = true;
				if ( !g_bValidationPollInFlight )
		{
			var now = (new Date()).getTime();
			var nMSSinceLastPoll = now - g_timeLastValidationPoll;
						if ( nMSSinceLastPoll > DEFAULT_POLL_INTERVAL_MS )
				PollEmailValidationStatus();
			else
			{
								if ( g_timeout )
					window.clearTimeout( g_timeout );

				g_timeout = setTimeout( PollEmailValidationStatus, DEFAULT_POLL_INTERVAL_MS - nMSSinceLastPoll );
			}
		}
	}
}

function PollEmailValidationStatus()
{
	//console.log( 'PollEmailValidationStatus' );
	if ( !g_bValidationPollInFlight )
	{
		if ( g_timeout )
		{
			window.clearTimeout( g_timeout );
			g_timeout = false;
		}
		
		g_bValidationPollInFlight = true;
		g_bShortPollPending = false;
		g_cPolls++;
		new Ajax.Request( 'https://store.steampowered.com/checkout/emailvalidationstatus', {
			method: 'post',
			onComplete: PollEmailStatusResponse
		});
	}
}

function PollEmailStatusResponse( response )
{
	if ( response && response.responseJSON && response.responseJSON.validated )
	{
		HideEmailUpdateForm(); //if the user was changing their email, flip back to the main page
		ToggleEmailValidationSuccess(); //change to the success form
	}
	else
	{
		g_bValidationPollInFlight = false;
		g_timeLastValidationPoll = (new Date()).getTime();
		//didn't get a response, poll again
		if ( g_bShortPollPending )
		{
			// user interacted with the page 
			g_timeout = setTimeout( PollEmailValidationStatus, DEFAULT_POLL_INTERVAL_MS );
		}
		else if ( g_cPolls < 20 )
		{
			// user hasn't interacted recently, back off on the polling
			g_timeout = setTimeout( PollEmailValidationStatus, LONG_POLL_INTERVAL_MS );
		}
	}
}

function CheckEmailUpdateForm()
{
	var bValid = true;
	var strError = false;
	ValidationMarkFieldOk( $('password_input' ) );
	ValidationMarkFieldOk( $('email_input' ) );
	ValidationMarkFieldOk( $('reenter_email_input' ) );
	
	if ( !$('password_input').value )
	{
		bValid = false;
		strError = ( strError ? strError + '<br>' : '' ) + 'Please enter your current Steam account password.';
		ValidationMarkFieldBad( $('password_input' ) );
	}
	var email = $('email_input').value;
	var email_regex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
	if ( !email || !email_regex.test(email) )
	{
		bValid = false;
		strError = ( strError ? strError + '<br>' : '' ) + 'Please enter a valid email address.';
		ValidationMarkFieldBad( $('email_input' ) );
	}
	else if ( !$('reenter_email_input').value )
	{
		bValid = false;
		strError = ( strError ? strError + '<br>' : '' ) + 'Please fill in the Re-enter email address field.';
		ValidationMarkFieldBad( $('reenter_email_input' ) );
	}
	else if ( $('reenter_email_input').value != $('email_input').value )
	{
		bValid = false;
		strError = ( strError ? strError + '<br>' : '' ) + 'Please enter the same address in both email address fields.';
		ValidationMarkFieldBad( $('email_input' ) );
		ValidationMarkFieldBad( $('reenter_email_input' ) );
	}
	
	if ( !bValid && strError )
	{
		DisplayErrorMessage( strError );
	}
	else
	{
		HideErrorMessage();
	}

	return bValid;
}

function SubmitEmailUpdateForm()
{
	if ( !CheckEmailUpdateForm() )
		return;
	
	new Ajax.Request( 'https://store.steampowered.com/checkout/updateemail', {
		method: 'post',
		parameters: $('email_updateform').serialize(true),
		onSuccess: SubmitEmailUpdateFormSuccess
	});
}

function SubmitEmailUpdateFormSuccess( response )
{
	var rgResults = response.responseJSON;
	if ( rgResults && rgResults.success )
	{
		var email = rgResults.email || '';
		UpdateDisplayedEmail( email );
		HideEmailUpdateForm();
	}
	else
	{
		DisplayErrorMessage( 'Failed to update your email address.  Please verify the information below and try again.' );
	}
}

function DisplayErrorMessage( strMessage )
{
	$('error_display').innerHTML = strMessage;
	$('error_display').show();
	Effect.ScrollTo( 'error_display' );
	
	new Effect.Highlight( 'error_display', { endcolor : '#000000', startcolor : '#ff9900' } );
}

function ValidationMarkFieldBad( elem )
{
	if ( $(elem).hasClassName( 'highlight_on_error' ) )
		new Effect.Morph( elem, {style: 'color: #FF9900', duration: 0.5 } );
	else
		new Effect.Morph( elem, {style: 'border-color: #FF9900', duration: 0.5 } )
}

function ValidationMarkFieldOk( elem )
{
	if ( $(elem).hasClassName( 'highlight_on_error' ) )
		$(elem).style.color='';
	else
		$(elem).style.borderColor = '';
}

function HideErrorMessage()
{
	$('error_display').innerHTML='';
	$('error_display').hide();
}
