
var iAjaxCalls = 0;
var g_sBaseURL = "";
var g_emailVerificationDialog = null;
var g_parentalConsentDialog = null;
var g_recaptchaInstance = null;

function CaptchaText()
{
	return $J('#captcha_text').val() || grecaptcha.enterprise.getResponse(g_recaptchaInstance);
}

function StartCreationSession()
{
	if ( g_parentalConsentDialog )
		g_parentalConsentDialog.Dismiss();

	$J.ajax( {
		type: 'POST',
		url: g_sBaseURL + 'join/ajaxverifyemail',
		data: {
			'email': $J( '#email' ).val(),
			'captchagid' : $J('#captchagid').val(),
			'captcha_text' : CaptchaText(),
			'elang' : 0,
			'init_id': $J( '#init_id' ).val(),
            'guest': g_bGuest
		}
	})
	.fail( function() {
		RefreshCaptcha();
		ShowError( 'An error has occurred. Please try again later.' );
	} )
	.done( function( data ) {

		if ( data.success != 1 )
		{
			var strError = data.details;

			if ( data.success == 14 )
			{
				strError = 'The account name you have chosen is not available. Please choose another name.';
			}
			else if ( data.success == 8 )
			{
				strError = 'Please enter an account name that is at least 3 characters long and uses only a-z, A-Z, 0-9 or _ characters.';
			}
			else if ( data.success == 13 )
			{
				strError = 'Please enter a valid email address.';
			}
			else if ( data.success == 17 )
			{
				strError = 'It appears you\'ve entered a disposable email address, or are using an email provider that cannot be used on Steam. Please provide a different email address.';
			}
			else if ( data.success == 101 )
			{
				new Effect.Morph( 'captcha_text', {style: 'border: 1px solid #b44040', duration: 0.5 } );
			}

			RefreshCaptcha();
			ShowError( strError );
		}
		else
		{
			g_creationSessionID = data.sessionid;
			WaitForEmailVerification();
		}
	} );
}

function StartCreationSessionParentalConsent()
{
	var email = $('parental_email').value;
	var email_regex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,24}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
	if ( email == '' || !email_regex.test(email) )
	{
		var strError = 'Please enter a valid email address.<br/>';
		$J( '#parental_email' ).css( "border", "1px solid #b44040" );
		ShowError( strError );
		return;
	}

	$J.ajax( {
		type: 'POST',
		url: g_sBaseURL + 'join/ajaxverifyemail',
		data: {
			'email': $J( '#email' ).val(),
			'parental_email': $J( '#parental_email' ).val(),
			'captchagid': $J('#captchagid').val(),
			'captcha_text' : CaptchaText(),
			'elang' : 0,
			'init_id': $J( '#init_id' ).val()
		}
	} )
	.fail( function() {
		RefreshCaptcha();
		ShowError( 'An error has occurred. Please try again later.' );
	} )
	.done( function( data ) {

		if ( data.success != 1 )
		{
			var strError = data.details;

			if ( data.success == 62 )
			{
				strError = 'This e-mail address must be different from your own.';
				$J( '#parental_email' ).css( "border", "1px solid #b44040" );
			}
			else if ( data.success == 13 )
			{
				strError = 'Please enter a valid email address.';
			}
			else if ( data.success == 17 )
			{
				strError = 'It appears you\'ve entered a disposable email address, or are using an email provider that cannot be used on Steam. Please provide a different email address.';
			}
			else if ( data.success == 101 )
			{
								g_parentalConsentDialog.Dismiss();
				g_parentalConsentDialog = null;
			}

			RefreshCaptcha();
			ShowError( strError );
		}
		else
		{
			g_creationSessionID = data.sessionid;

			ParentalConsentRequested();
		}
	} );
}

function WaitForEmailVerification()
{
	if ( !g_creationSessionID )
		return;

	var $strDialogContent = $J( '#email_verification_dialog' );

	g_emailVerificationDialog = ShowDialog( 'Verify Your Email', $strDialogContent, { bExplicitDismissalOnly: true }  );

	$J( '.insert_verification_email' ).text( $J( '#email' ).val() );
	$strDialogContent.show();
	g_emailVerificationDialog.SetRemoveContentOnDismissal( false );
	g_emailVerificationDialog.AdjustSizing();

	AjaxCheckEmailVerified();
}

function AjaxCheckEmailVerified()
{
	if ( !g_creationSessionID )
		return;

	$J.ajax( {
		type: 'POST',
		url: g_sBaseURL + 'join/ajaxcheckemailverified',
		data: { 'creationid' : g_creationSessionID }
	})
		.done( function( data ) {
			switch( data.success )
			{
				case 1:
					EmailConfirmedVerified( data );
					break;
				case 42:
				case 29:
									ChangeEmail();
					ShowError( 'There was an error with your registration, please try again.' );
					break;
				case 27:
					ChangeEmail();
					ShowError( 'You\'ve waited too long to verify your email. Please try creating your account and verifying your email again.' );
					break;
				default:
															setTimeout( AjaxCheckEmailVerified, 3000);
					break;
			}
		} )
		.fail( function() {
			setTimeout( AjaxCheckEmailVerified, 5000 );
		} );
}

function ChangeEmail()
{
	g_emailVerificationDialog.Dismiss();
	g_creationSessionID = null;
	$J('#cart_area').slideDown();
	Effect.ScrollTo( 'cart_area' );
	$J( '#email' ).val( '' );
	$J( '#reenter_email' ).val( '' );
	RefreshCaptcha();
}

function EmailConfirmedVerified( rgResults )
{
	if ( g_emailVerificationDialog )
		g_emailVerificationDialog.Dismiss();

	if ( rgResults.has_existing_account )
	{
		$J( '.create_account_form_container' ).hide();
		$J( '.joinsteam_existingaccount_ctn' ).show();

		if ( rgResults.guest && g_bGuest )
		{
			$J.ajax( {
				type: 'POST',
				url: `https://login.steampowered.com/jwt/finalizelogin`,
				data: {
					'nonce': rgResults.guest_refresh,
					'redir': GetRedir( rgResults )
				},
				crossDomain: true,
				xhrFields: { withCredentials: true },
			} )
				.fail( function() {
					ShowError( 'Your account creation request failed, please try again later.' );
				})
				.done( function( data )
				{
					if ( data && data.transfer_info )
					{
						TransferLogin( data );
					}
					else
					{
						// something went wrong, but the account should have been created - redirect
						window.location = GetRedir( data );
					}
				});
		}
		else if ( rgResults.steam_china_account && !rgResults.pw_account && !rgResults.global_account )
		{
			$J( '#intro_china' ).show();
		}
		else if ( rgResults.pw_account || rgResults.global_account )
		{
			$J( '#intro_pw' ).show();

			if ( rgResults.pw_account )
			{
				$J( '#desc_pw' ).show();
			}

			if ( rgResults.global_account )
			{
				$J( '#desc_global' ).show();
			}
		}
	}
	else
	{
	    if ( g_bGuest )
        {
            ReallyCreateAccount();
        }
	    else
        {
            window.location = g_strRedirectURL + ( g_strRedirectURL.indexOf( '?' ) > 0 ? '&' : '?' ) + 'creationid=' + g_creationSessionID;
        }
	}
}


function InitJoinSteamJS( sBaseURL )
{
    g_sBaseURL = sBaseURL;
    // ensure terminal slash
    if ( g_sBaseURL.slice( -1 ) != '/' )
    {
        g_sBaseURL = g_sBaseURL + '/';
    }
}

function CreateAccount()
{
	// if we are disabled due to a weak password, we will have the "btn_checkout_gray" class;
	// if we see that, do nothing when clicked
	if ( $('createAccountButton').hasClassName( 'btn_checkout_gray' ) )
	{
		return;
	}

	FinishFormVerification();
}


function CompleteCreateAccount()
{
	return AccountPasswordFormVerification();
}

function FinishFormVerification()
{
		var errorString = '';

		var rgBadFields = {
		email: false,
		reenter_email: false,
		captcha_text: false,
		ssa_box: false
	}

	var email = $('email').value;
	var email_regex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,24}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
	if ( email == '' || !email_regex.test(email) )
	{
		errorString += 'Please enter a valid email address.<br/>';
		rgBadFields.email = true;
		rgBadFields.reenter_email = true;
	}

	if ( !g_bGuest )
    {
        var reenter_email = $('reenter_email').value;
        if ( reenter_email == '' )
        {
            errorString += 'Please fill in the Confirm email address field.<br/>';
            rgBadFields.reenter_email = true;
        }
        else if ( email.toLowerCase() != reenter_email.toLowerCase() )
        {
            errorString += 'Please enter the same address in both email address fields.<br/>';
            rgBadFields.email = true;
            rgBadFields.reenter_email = true;
        }
    }

		if ( !( $('lt').value == 1 || $('lt').value == 4 ) )
	{
		$J( 'input[type=checkbox]' ).each( function() {
			if ( !$J( this ).is(':checked') )
			{
				errorString += 'You must agree to the Steam Subscriber Agreement to continue.<br/>';
				rgBadFields.ssa_box = true;
				return false;
			}
		} );
	}

		for ( var key in rgBadFields )
	{
		if ( rgBadFields[key] )
			$J( '#' + key ).css( 'border', '1px solid #b44040' );
		else
			$(key).style.border = 'none';
	}

		if ( errorString != '' )
	{
				var rgErrors = errorString.split( '<br/>' );
				if ( rgErrors.length > 3 )
		{
			errorString = '';
			errorString = rgErrors[0] + '<br/>' + rgErrors[1] + '<br/>' + 'And find more errors highlighted below.' + '<br/>';
		}
		ShowError( errorString );
	}
	else
	{
		var rgConsentCountries = [
			{ countrycode: 'AT', minage : 14 },	// Austria
			{ countrycode: 'BG', minage : 14 },	// Bulgaria
			{ countrycode: 'CY', minage : 14 }, // Cyprus
			{ countrycode: 'IT', minage : 14 }, // Italy
			{ countrycode: 'CZ', minage : 15 }, // Czech
			{ countrycode: 'GR', minage : 15 }, // Greece
			{ countrycode: 'SI', minage : 15 },	// Slovenia
			{ countrycode: 'HR', minage : 16 }, // Croatia
			{ countrycode: 'DE', minage : 16 }, // Germany
			{ countrycode: 'HU', minage : 16 }, // Hungary
			{ countrycode: 'LT', minage : 16 }, // Lithuania
			{ countrycode: 'FR', minage : 16 }, // France
			{ countrycode: 'LU', minage : 16 }, // Luxembourg
			{ countrycode: 'MT', minage : 16 }, // Malta
			{ countrycode: 'RO', minage : 16 }, // Romania
			{ countrycode: 'SK', minage : 16 }, // Slovakia
			{ countrycode: 'NL', minage : 16 } ]; // Netherlands

		var country_code = $( 'country' ).value;

		$J('#error_display').slideUp();

		var bCheckParentalConsent = false;
		var nMinAge = 0;
		for ( let country of rgConsentCountries )
		{
			if ( country.countrycode == country_code )
			{
				bCheckParentalConsent = true;
				nMinAge = country.minage;
				break;
			}
		}

		if ( bCheckParentalConsent )
		{
			CheckParentalConsent( nMinAge );
		}
		else
		{
			StartCreationSession();
		}
	}
}

function CheckParentalConsent( nMinAge )
{
	var $strDialogContent = $J( '#age_gate_dialog' );

	g_parentalConsentDialog =  ShowDialog( 'Please tell us your age', $strDialogContent, { bExplicitDismissalOnly: true }  );

	$J( '.insert_min_age' ).text( nMinAge );
	$strDialogContent.show();
	g_parentalConsentDialog.SetRemoveContentOnDismissal( false );
	g_parentalConsentDialog.AdjustSizing();

}

function GetParentalConsentEmail()
{
	g_parentalConsentDialog.Dismiss();

	var $strDialogContent = $J( '#parental_consent_email_dialog' );

	g_parentalConsentDialog =  ShowDialog( 'Please tell us your age', $strDialogContent, { bExplicitDismissalOnly: true }  );

	$strDialogContent.show();
	g_parentalConsentDialog.SetRemoveContentOnDismissal( false );
	g_parentalConsentDialog.AdjustSizing();
}

function ParentalConsentRequested()
{
	g_parentalConsentDialog.Dismiss();

	var $strDialogContent = $J( '#parental_consent_requested_dialog' );

	g_parentalConsentDialog =  ShowDialog( 'E-mail sent', $strDialogContent, { bExplicitDismissalOnly: true }  );

	$J( '.insert_verification_email' ).text( $J( '#email' ).val() );
	$strDialogContent.show();
	g_parentalConsentDialog.AdjustSizing();
}

function AccountPasswordFormVerification(  )
{
		var errorString = '';

		var rgBadFields = {
		accountname : false,
		password : false
	}

	var accountname = $('accountname').value;
	if ( accountname.length < 3 || accountname.length > 64 )
	{
		errorString += 'Please enter an account name that is at least 3 characters long and uses only a-z, A-Z, 0-9 or _ characters.<br/>';
		rgBadFields.accountname = true;
	}
	else
	{
		var bNameOK = true;
		for( var i=0; i<accountname.length; ++i )
		{
			if ( accountname.charAt(i) >= 'a' && accountname.charAt(i) <= 'z' )
				continue;
			if ( accountname.charAt(i) >= 'A' && accountname.charAt(i) <= 'Z' )
				continue;
			if ( accountname.charAt(i) >= '0' && accountname.charAt(i) <= '9' )
				continue;
			if ( accountname.charAt(i) == '_' )
				continue;

			bNameOK = false;
		}
		if ( !bNameOK )
		{
			errorString += 'Please enter an account name that is at least 3 characters long and uses only a-z, A-Z, 0-9 or _ characters.<br/>';
			rgBadFields.accountname = true;
		}
	}

	if ( !g_bAccountNameAvailable )
	{
		errorString += 'The account name you have chosen is not available. Please choose another name.<br/>';
		rgBadFields.accountname = true;
	}

	var password =  $('password').value;
	if ( password.length > 64 )
	{
		errorString += 'Please enter a password that is less than 64 characters long.<br/>';
		rgBadFields.password = true;
		rgBadFields.reenter_password = true;
	}

	if ( !g_bPasswordAvailable )
	{
		errorString += 'The password you entered is not allowed.  Please select a different password, with at least 8 characters.<br/>';
		rgBadFields.password = true;
		rgBadFields.reenter_password = true;
	}

	var reenter_password = $('reenter_password').value;
	if ( reenter_password == '' )
	{
		errorString += 'Please fill in the Re-enter password field.<br/>';
		rgBadFields.reenter_password = true;
	}
	else if ( password != reenter_password )
	{
		errorString += 'Please enter the same password in both password fields.<br/>';
		rgBadFields.password = true;
		rgBadFields.reenter_password = true;
	}

		for ( var key in rgBadFields )
	{
		if ( rgBadFields[key] )
		{
			$J( '#' + key ).css( "border", "1px solid #b44040" );
		}
		else
			$(key).style.borderColor = '#82807C';
	}

		if ( errorString != '' )
	{
			var rgErrors = errorString.split( '<br/>' );
			if ( rgErrors.length > 3 )
		{
			errorString = '';
			errorString = rgErrors[0] + '<br/>' + rgErrors[1] + '<br/>' + 'And find more errors highlighted below.' + '<br/>';
		}

		ShowError( errorString );

	}
	else
	{
		$J('#error_display').slideUp();

		ReallyCreateAccount();
	}
}

function GetRedir( result )
{
	if ( result && result.redirect )
	{
		return result.redirect;
	}
	else if ( g_strRedirectURL )
	{
		return g_strRedirectURL;
	}
	else
	{
		return g_sBaseURL;
	}
}

function TransferLogin( data )
{
	let posts = [];
	var nFailed = 0;
	var nTransferred = 0;
	for ( var idx = 0; idx < data.transfer_info.length; idx++ )
	{
		site = data.transfer_info[ idx ];
		prom = new Promise( (resolve, reject) => {
			 $J.ajax( {
				 type: 'POST',
				 url: site.url,
				 data: {
					 steamID: data.steamID,
					 auth: site.params.auth,
					 nonce: site.params.nonce,
				 },
				 crossDomain: true,
				 xhrFields: {withCredentials: true},
				 success: function ( data ) {
				     nTransferred++;
					 resolve();
				 },
				 error: function ( data ) {
					 nFailed++;
					 resolve();
				 }
			 } )
		} );
		posts.push( prom );
	}

	Promise.all(posts).then(() => {
		console.log( 'transfer ' + nTransferred + '/' + nFailed );
		if ( nTransferred > 0 )
		{
			window.location = GetRedir( data.redir );
		}
	}).catch((e) => {
	    // this is a weird failure
	});
}

function ReallyCreateAccount()
{
	++iAjaxCalls;
	let $waitDialog = ShowBlockingWaitDialog( 'Creating your Steam account...' );
	new Ajax.Request( g_sBaseURL + 'join/createaccount/',
	{
		type: 'POST', 	    parameters: { accountname : $('accountname').value,
	    			  password : $('password').value,
	    			  count : iAjaxCalls,
	    			  lt : $('lt').value,
	    			  creation_sessionid : g_creationSessionID,
	    			  embedded_appid : g_embeddedAppID,
                      guest: g_bGuest,
	    	},
		onSuccess: function( transport ) {
			var bSuccess = false;
			if ( transport.responseText ) {
				try {
					var result = transport.responseText.evalJSON(true);
				} catch (e) {
									}

				if (result && result.bSuccess)
					bSuccess = true;
			}
			if (!bSuccess)
			{
				ShowError( result.details ? result.details : 'Your account creation request failed, please try again later.' );

								if (result && result.ticket)
					$('ticket').value = result.ticket;

								if (result && result.redirect)
					window.location = result.redirect;

				$waitDialog.Dismiss();
			}
			else if ( result && result.bInSteamClient && !result.redirect )
			{
				$waitDialog.Dismiss();
				ShowAlertDialog( 'New Account Created Successfully', 'Please close this window or click continue to sign in with your new account.', 'Continue' )
					.always( function() {
												window.location = "steam://close";
					});
			}
			else {
				$J.ajax( {
					type: 'POST',
					url: `https://login.steampowered.com/jwt/finalizelogin`,
					data: {
						'nonce': result.refresh_token,
						'redir': GetRedir( result )
					},
					crossDomain: true,
					xhrFields: { withCredentials: true },
				} )
				.fail( function() {
					ShowError( 'Your account creation request failed, please try again later.' );
					$waitDialog.Dismiss();
				})
				.done( function( data )
				{
					if ( data && data.transfer_info )
					{
						TransferLogin( data );
					}
					else
					{
						// something went wrong, but the account should have been created - redirect
						window.location = GetRedir(result);
					}
				});
			}
		},
	    onFailure: function()
	    {
		    ShowError( 'Your account creation request failed, please try again later.' );
			$waitDialog.Dismiss();
		}
  });
}

function ShowError( strError )
{
	var error_div = 'error_display';
	if ( g_parentalConsentDialog )
		error_div = 'error_display_parental';

	$J('#cart_area').show();
	$J('#' +  error_div).html( strError );
	$J('#' + error_div).show();
	Effect.ScrollTo( error_div );
	new Effect.Highlight( error_div, { endcolor : '#000000', startcolor : '#f4b786' } );
}


function UpdateAccountName( value )
{
	$('accountname').value = value;
	CheckAccountNameAvailability();
}

g_strLastAccountNameCheck = '';
var g_bAccountNameAvailable = false;
function CheckAccountNameAvailability()
{
	var strName = document.getElementById('accountname').value;
	if ( strName == g_strLastAccountNameCheck || !g_creationSessionID )
		return;
	g_strLastAccountNameCheck = strName;
	++iAjaxCalls;
	new Ajax.Request( g_sBaseURL + 'join/checkavail/',
	  {
	    type: 'POST',
	    parameters: { accountname: strName, count : iAjaxCalls, creationid: g_creationSessionID },
	    onSuccess: function(transport)
		{
	      if ( transport.responseText )
	      {
	        try {
	      	  var result = transport.responseText.evalJSON(true);
	      	} catch ( e ) {
	      	  //alert(e);
	      	  return;
	      	}

	      	var elAvailibility = $J('#accountname_availability');
	        elAvailibility.removeClass( 'warning' );
	        elAvailibility.hide();

	      	if ( result && result.bAvailable )
	      	{
				elAvailibility.html('<img class="green_check" src="https://community.akamai.steamstatic.com/public/shared/images/joinsteam/icon_check.png?v=1" > Available');
				elAvailibility.css( 'background', '#5c7e10' );
				$('form_row_choose_suggested_name').style.display = 'none';
				g_bAccountNameAvailable = true;
	      	}
	      	else
	      	{
				elAvailibility.html('Not Available');
				elAvailibility.css( 'background', '#a0382b' );
				elAvailibility.addClass( 'warning' );
				g_bAccountNameAvailable = false;
				if ( result.rgSuggestions.length > 0 )
				{
					$('form_row_choose_suggested_name').style.display = 'block';
					for ( var i=0; i < Math.min( result.rgSuggestions.length, 3 ); ++i )
					{
						$('suggested_name_'+(i+1)).value = result.rgSuggestions[i];
						$('suggested_name_'+(i+1)).innerHTML = result.rgSuggestions[i];
					}
				}
				else
				{
					$('form_row_choose_suggested_name').style.display = 'none';
				}
	      	}
	      	elAvailibility.show();
	      }
	    },
	    onFailure: function(){ alert('Something went wrong...') }
	  });
}

var g_timerPasswordAvail = null;
var g_bPasswordAvailable = false;

function CalculatePasswordStrength( pass )
{
	if ( pass.length < 7 )
		return 0;

	var bHasUppercase = false;
	var bHasLowercase = false;
	var bHasNumbers = false;
	var bHasSymbols = false;

	for( var i = 0; i < pass.length; ++i )
	{
		if ( pass.charAt(i) >= 'a' && pass.charAt(i) <= 'z' )
			bHasLowercase = true;
		else if ( pass.charAt(i) >= 'A' && pass.charAt(i) <= 'Z' )
			bHasUppercase = true;
		else if ( pass.charAt(i) >= '0' && pass.charAt(i) <= '9' )
			bHasNumbers = true;
		else
			bHasSymbols = true;
	}

	var nTypesOfChars = 0;
	if ( bHasUppercase ) nTypesOfChars++;
	if ( bHasLowercase ) nTypesOfChars++;
	if ( bHasNumbers ) nTypesOfChars++;
	if ( bHasSymbols ) nTypesOfChars++;

	var nStrength = 0;
	if ( nTypesOfChars >= 3 )
	{
				nStrength = 3;
	}
	else if ( (nTypesOfChars < 2 && !bHasSymbols )  )
	{
				nStrength = 1;
	}
	else
	{
				nStrength = 2;
	}
	return nStrength;
}

function SetPasswordTag( strTagID, strClass, strText )
{
	if ( strText.length == 0 )
	{
		$J( strTagID ).hide();
		$J( strTagID ).removeClass( 'visible' );
		return;
	}

	$J( strTagID ).text( strText );
	$J( strTagID ).removeClass( 'error warning' );
	$J( strTagID ).addClass( strClass );
	$J( strTagID ).addClass( 'visible' );
	$J( strTagID ).show();
}

function CheckPasswordAvail()
{
	var strAccountName = $J( '#accountname' ).val();
	var password_before = document.getElementById('password').value;
	if ( password_before == '' )
	{
		SetPasswordTag( '#password_tag', '', '' );
		return;
	}

	if ( strAccountName.length > 0 && strAccountName.toLowerCase() == password_before.toLowerCase() )
	{
		SetPasswordTag( '#password_tag', 'error', 'Can\'t use your user name as your password' );
		return;
	}

	if ( password_before.length < 8 )
	{
		SetPasswordTag( '#password_tag', 'error', 'Password must contain at least 8 characters' );
		return;
	}

	var iInvalidChar = password_before.search( /[^\x00-\x7F]/g );
	if ( iInvalidChar >= 0 )
	{
		SetPasswordTag( '#password_tag', 'error', '%s can\'t be used in passwords'.replace( /%s/, password_before.charAt( iInvalidChar ) ) );
		return;
	}

	    ++iAjaxCalls;
	new Ajax.Request( g_sBaseURL + 'join/checkpasswordavail/',
	{
		type: 'POST',
		parameters: { password: document.getElementById('password').value, accountname: strAccountName, count : iAjaxCalls },
		onSuccess: function(transport){
			if ( transport.responseJSON )
			{
								if ( document.getElementById('password').value != password_before )
					return;
				if ( transport.responseJSON.bAvailable )
				{
					  g_bPasswordAvailable = true;
				}

				SetPasswordTag( '#password_tag', '', '' );
				DisplayPasswordStrength();
			}
		}
	});

}

function DisplayPasswordStrength()
{
	var strPassword = document.getElementById('password').value;

	var nStrength = CalculatePasswordStrength( strPassword );
	if ( strPassword.length == 0 )
		SetPasswordTag( '#password_tag', '', '' );
	else if ( !g_bPasswordAvailable )
		SetPasswordTag( '#password_tag', 'error', 'Choose a less commonly used password' );
	else if ( nStrength >= 3 )
		SetPasswordTag( '#password_tag', 'good', '' );
	else
		SetPasswordTag( '#password_tag', 'warning', 'Include lowercase and uppercase letters, numbers and symbols for a stronger password' );

	CheckPasswordsMatch();
}

var g_timerReenterChange = null;
function ReenterPasswordChange()
{
	SetPasswordTag( '#reenter_tag', '', '' );
	if ( g_timerReenterChange )
		window.clearTimeout( g_timerReenterChange );

	g_timerReenterChange = window.setTimeout( CheckPasswordsMatch, 1000 );
}

function CheckPasswordsMatch()
{
	var strPassword = $J( '#password' ).val();
	var strReenter = $J( '#reenter_password' ).val();
	if ( strPassword.length > 0 && strReenter.length > 0 && strPassword != strReenter )
		SetPasswordTag( '#reenter_tag', 'error', 'Passwords do not match' );
	else
		SetPasswordTag( '#reenter_tag', '', '' );
}

var g_strLastPassword = '';
function CheckPasswordStrength()
{
	var pass = document.getElementById('password').value;
	if ( pass == g_strLastPassword )
		return;

	g_strLastPassword = pass;

		g_bPasswordAvailable = false;	// reset

	if ( g_timerPasswordAvail )
		window.clearTimeout( g_timerPasswordAvail );
	g_timerPasswordAvail = window.setTimeout( CheckPasswordAvail, 250 ); // milliseconds to wait
}

function RenderRecaptcha( parent_sel, gid, sitekey, s )
{
	var render_div_id = 'recaptcha_render_' + gid;
	$J( parent_sel ).empty();
	$J( parent_sel ).append('<div id="' + render_div_id + '"></div>');
	g_recaptchaInstance = grecaptcha.enterprise.render( render_div_id, {
		'sitekey': sitekey,
		'theme': 'dark',
		'callback': function(n){},
		's': s
	});
}

function UpdateCaptcha(data)
{
	$J( '#captcha_text' ).val('');
	if ( data.gid != -1 ) {
		$J( '#captcha_entry' ).show();
		$J( '#captchagid' ).val(data.gid);
		if ( data.type == 1 ) {
			$J( '#captcha_entry_recaptcha' ).hide();
			$J( '#captcha_entry_text' ).show();
			$J( '#captchaImg' ).attr( 'src', g_sBaseURL + 'login/rendercaptcha?gid=' + data.gid );
		} else if ( data.type == 2 ) {
			$J( '#captcha_entry_recaptcha' ).show();
			$J( '#captcha_entry_text' ).hide();
			RenderRecaptcha( "#captcha_entry_recaptcha", data.gid, data.sitekey, data.s );
		}
	} else {
		$J( '#captcha_entry' ).hide();
		$J( '#captcha_entry_recaptcha' ).empty();
		$J( '#captchagid' ).val('-1');
	}
}

function RefreshCaptcha()
{
	++iAjaxCalls;

	new Ajax.Request( g_sBaseURL + 'join/refreshcaptcha/',
	  {
	  	type: 'POST',
	    parameters: { count : iAjaxCalls },
	    onSuccess: function(transport){
	      if ( transport.responseText ){

	        try {
	      	  var result = transport.responseText.evalJSON(true);
	      	} catch ( e ) {
	      	  //alert(e);
	      	  return;
	      	}

			UpdateCaptcha(result);
		  }
	    }
	  });
}

function ToggleEmailVerificationHelp()
{
	var elHelpCtn = $J( '.email_verification_troubleshooting' );
	var bVisible = elHelpCtn.is(':visible');

	if ( bVisible )
	{
		elHelpCtn.slideUp();
		elHelpCtn.find( '.ico16' ).addClass( 'active' );
	}
	else
	{
		elHelpCtn.slideDown();
		elHelpCtn.find( '.ico16' ).removeClass( 'active' );
	}
}

function GoToExistingAccount( bIsInClient )
{
	if ( bIsInClient )
	{
		window.close();
	}
	else
	{
		window.location = g_sBaseURL + 'login';s
	}
}

function OnCountryChange( elCountry )
{
	if ( g_rgEUCountries && g_rgEUCountries.indexOf( $J( elCountry ).val() ) >= 0 )
	{
		$J( '#eu_ssa_box' ).slideDown();
	}
}




