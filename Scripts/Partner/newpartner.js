
/* captcha */
var iAjaxCalls = 0;

// Refresh the catpcha image
function RefreshCaptcha()
{
	++iAjaxCalls;

	new Ajax.Request('https://partner.steamgames.com/newpartner/ajaxrefreshcaptcha/',
		{
			method:'get',
			parameters: { count : iAjaxCalls },
			onSuccess: function(transport){
				if ( transport.responseText ){

					try {
						var result = transport.responseText.evalJSON(true);
					} catch ( e ) {
						//alert(e);
						return;
					}

					gid = result.gid;
					UpdateCaptcha( gid );
					$J( "#input_captcha" ).val('');
				}
			}
		});
}

function UpdateCaptcha( gid )
{
	if ( gid != -1 )
	{
		$('captcha_entry').show();
		$('captchaImg').src = 'https://partner.steamgames.com/public/captcha.php?gid='+gid;
	}
	$('captchagid').value = gid;
}


var gValidFieldAlphaNumericRegex = /^[A-Za-z0-9 &.,#'\/\-]+$/

function HasRequiredField( fieldName )
{
	var field = $J( fieldName );
	var value = field.val();
	value = v_trim( value );
	if ( value.length == 0 )
	{
		field.addClass( "errorRequiredField" );
		return false;
	}

	field.removeClass( "errorRequiredField" );
	field.val( value );
	return true;
}

function IsValidRequiredField( fieldName, regex )
{
	var field = $J( fieldName );
	var value = field.val();
	value = v_trim( value );
	if ( value.length == 0 )
	{
		field.addClass( "errorRequiredField" );
		return false;
	}

	if ( !regex.test( value ) )
	{
		field.addClass( "errorRequiredField" );
		return false;
	}

	field.removeClass( "errorRequiredField" );
	field.val( value );
	return true;
}

function IsValidOptionalField( fieldName, regex )
{
	var field = $J( fieldName );
	var value = field.val();
	value = v_trim( value );
	if ( value.length == 0 )
	{
		return true;
	}

	if ( !regex.test( value ) )
	{
		field.addClass( "errorRequiredField" );
		return false;
	}

	field.removeClass( "errorRequiredField" );
	field.val( value );
	return true;
}

var gAllSections = [ "Introduction", "ProjectInfo", "CompanyInfo", "SignNDA", "SignAgreements", "PaymentDetails", "PayAppSubmissionFee", "WelcomeToSteamworks" ];

function HighlightSection( sectionID )
{
	for ( var i = 0; i < gAllSections.length; ++i )
	{
		$J("#Nav_" + gAllSections[i] ).removeClass( 'highlighted' );
	}

	$J("#Nav_" + sectionID).addClass( 'highlighted' );
}

function GoToSection( sectionID )
{
	$J("#NavBar").show();

	for ( var i = 0; i < gAllSections.length; ++i )
	{
		$J("#" + gAllSections[i] ).hide();
	}

	$J('#' + sectionID ).show();
	window.scrollTo( 0, 0 );

	HighlightSection( sectionID );
}

function ViewSDA()
{
	var agreedToNDA = $J( "#agree_to_nda_checkbox" );
	if ( !agreedToNDA.prop( "checked" ) )
	{
		ShowAlertDialog( 'Warning',  'You must agree to the terms in the Non-Disclosure Agreement before continuing.'  );
		return;
	}

	GoToSection('SignAgreements');
}

function ValidateSigneeInfoOnAgreementPage()
{
	var bHasRequiredFields = true;

	// signee info
	bHasRequiredFields &= IsValidRequiredField( "[name='signee_info[full_name]']", gValidFieldAlphaNumericRegex );
	bHasRequiredFields &= IsValidRequiredField( "[name='signee_info[title]']", gValidFieldAlphaNumericRegex );
	bHasRequiredFields &= IsValidRequiredField( "[name='signee_info[phone]']", gValidFieldAlphaNumericRegex );

	if ( !bHasRequiredFields )
	{
		ShowAlertDialog( 'Error', 'Please fill in the highlighted fields and make sure they only contain valid characters: alpha, numeric, blank, ampersand (&amp;), hyphen(-), comma (,), apostrophe(’), forward slash (/), pound sign (#), and period (.) Do not use special characters that are unique to a language other than English.' );
		return false;
	}

	return true;
}

function ValidateCompanyInfo( bTransition, nextSection )
{
	var bHasRequiredFields = true;
	// company info
	bHasRequiredFields &= IsValidRequiredField( "[name='partner_info[partner_name]']", gValidFieldAlphaNumericRegex );
	bHasRequiredFields &= IsValidRequiredField( "[name='partner_info[company_form]']", gValidFieldAlphaNumericRegex );
	bHasRequiredFields &= IsValidRequiredField( "[name='partner_info[address1]']", gValidFieldAlphaNumericRegex );
	bHasRequiredFields &= IsValidOptionalField( "[name='partner_info[address2]']", gValidFieldAlphaNumericRegex );
	bHasRequiredFields &= IsValidRequiredField( "[name='partner_info[city]']", gValidFieldAlphaNumericRegex );
	bHasRequiredFields &= IsValidRequiredField( "[name='partner_info[state]']", gValidFieldAlphaNumericRegex );
	bHasRequiredFields &= IsValidRequiredField( "[name='partner_info[postal_code]']", gValidFieldAlphaNumericRegex );
	bHasRequiredFields &= IsValidOptionalField( "[name='partner_info[fax]']", gValidFieldAlphaNumericRegex );
	bHasRequiredFields &= HasRequiredField( "[name='partner_info[finance_email]']" );


	if ( !bHasRequiredFields )
	{
		ShowAlertDialog( 'Error', 'Please fill in the highlighted fields and make sure they only contain valid characters: alpha, numeric, blank, ampersand (&amp;), hyphen(-), comma (,), apostrophe(’), forward slash (/), pound sign (#), and period (.) Do not use special characters that are unique to a language other than English.' );
		return false;
	}

	if ( bTransition )
	{
        if ( !nextSection )
            nextSection = 'SignNDA';
		GoToSection( nextSection );
	}
	return true;
}


function ValidateProjectInfo( bTransition, nextSection )
{
	var bHasRequiredFields = true;
	// project info
	bHasRequiredFields &= IsValidRequiredField( "[name='project_info[title]']", gValidFieldAlphaNumericRegex );
	//bHasRequiredFields &= IsValidRequiredField( "[name='project_info[desc]']", gValidFieldAlphaNumericRegex );
	bHasRequiredFields &= IsValidRequiredField( "[name='project_info[shipdate]']", gValidFieldAlphaNumericRegex );

	if ( !bHasRequiredFields )
	{
		ShowAlertDialog( 'Error', 'Please fill in the highlighted fields and make sure they only contain valid characters: alpha, numeric, blank, ampersand (&amp;), hyphen(-), comma (,), apostrophe(’), forward slash (/), pound sign (#), and period (.) Do not use special characters that are unique to a language other than English.' );
		return false;
	}

	if ( bTransition )
	{
		if ( !nextSection )
			nextSection = 'CompanyInfo';
		GoToSection( nextSection );
	}
	return true;
}

function ValidateSigneeInfo( bTransition, nextSection )
{
    var bHasRequiredFields = true;
    // signee info
    bHasRequiredFields &= IsValidRequiredField( "[name='signee_info[full_name]']", gValidFieldAlphaNumericRegex );
    bHasRequiredFields &= IsValidRequiredField( "[name='signee_info[title]']", gValidFieldAlphaNumericRegex );
    bHasRequiredFields &= IsValidRequiredField( "[name='signee_info[phone]']", gValidFieldAlphaNumericRegex );

    if ( !bHasRequiredFields )
    {
        ShowAlertDialog( 'Error', 'Please fill in the highlighted fields and make sure they only contain valid characters: alpha, numeric, blank, ampersand (&amp;), hyphen(-), comma (,), apostrophe(’), forward slash (/), pound sign (#), and period (.) Do not use special characters that are unique to a language other than English.' );
        return false;
    }

    if ( bTransition )
    {
        if ( !nextSection )
            nextSection = 'SignLicense';
        GoToSection( nextSection );
    }
    return true;
}



function UpdateSigneeText( elemID )
{
	var signeeName = $J( "[name='signee_info[full_name]']" );
	var text = $J("#" + elemID );
	text.text( 'I represent and warrant that I am: ' + signeeName.val() );
}

function SignSDA()
{
	if ( !ValidateCompanyInfo( false ) )
	{
		GoToSection( 'CompanyInfo' );
		return;
	}

	if ( !ValidateSigneeInfoOnAgreementPage() )
	{
		return;
	}

    var agreedToSDA1 = $J( "#agree_to_sda_checkbox1" );
    var agreedToSDA2 = $J( "#agree_to_sda_checkbox2" );
    var agreedToSDA3 = $J( "#agree_to_sda_checkbox3" );
    if ( !agreedToSDA1.prop( "checked" ) || !agreedToSDA2.prop( "checked" ) || !agreedToSDA3.prop( "checked" ) )
    {
        ShowAlertDialog( 'Warning',  'You must agree to the terms in the Steam Distribution Agreement before continuing.'  );
        return;
    }

	var waitingDialog = ShowBlockingWaitDialog( 'Saving',  'Saving your information...'  );
	$J.ajax(
		{
			type: "POST",
			url: 'https://partner.steamgames.com/newpartner/ajaxsave',
			data: $J('#SteamworksAccessForm').serialize(),
			success: function ( response ) {
			waitingDialog.Dismiss();
				if ( response.success == 1 )
				{
					top.location.href = response.redirect_url;
				}
				else
				{
					if ( typeof response.captchagid !== 'undefined' )
					{
						ShowAlertDialog( 'Error', 'Error verifying humanity' );
						UpdateCaptcha( response.captchagid );
						$J( "#input_captcha" ).val('');
					}
					else if ( typeof response.errormsg !== 'undefined' )
					{
						ShowAlertDialog( 'Error', 'An error was encountered while processing your request: ' + response.errormsg );
					}
					else
					{
						ShowAlertDialog( 'Error', 'An error was encountered while processing your request: ' + response.success );
					}
				}
			},
			failure: function( response ) {
				waitingDialog.Dismiss();
			}
		}
	);
}

function SignSteamVRTrackingLicense()
{
	if ( !ValidateProjectInfo( false ) )
	{
		GoToSection( 'ProjectInfo' );
		return;
	}

	if ( !ValidateCompanyInfo( false ) )
	{
		GoToSection( 'CompanyInfo' );
		return;
	}

	if ( !ValidateSigneeInfoOnAgreementPage() )
	{
		return;
	}

	var agreedToSDA1 = $J( "#agree_to_sda_checkbox1" );
	if ( !agreedToSDA1.prop( "checked" ) )
	{
		ShowAlertDialog( 'Warning',  'You must agree to the terms in the SteamVR Tracking License before continuing.'  );
		return;
	}

	var waitingDialog = ShowBlockingWaitDialog( 'Saving',  'Saving your information...'  );
	$J.ajax(
		{
			type: "POST",
			url: 'https://partner.steamgames.com/newpartner/ajaxsave',
			data: $J('#SteamworksAccessForm').serialize(),
			success: function ( response ) {
				waitingDialog.Dismiss();
				if ( response.success == 1 )
				{
					top.location.href = response.redirect_url;
				}
				else
				{
					if ( typeof response.captchagid !== 'undefined' )
					{
						ShowAlertDialog( 'Error', 'Error verifying humanity' );
						UpdateCaptcha( response.captchagid );
						$J( "#input_captcha" ).val('');
					}
					else if ( typeof response.errormsg !== 'undefined' )
					{
						ShowAlertDialog( 'Error', 'An error was encountered while processing your request: ' + response.errormsg );
					}
					else
					{
						ShowAlertDialog( 'Error', 'An error was encountered while processing your request: ' + response.success );
					}
				}
			},
			failure: function( response ) {
				waitingDialog.Dismiss();
			}
		}
	);
}

function GenericPartnerSignNDA()
{
	if ( !ValidateCompanyInfo( false ) )
	{
		GoToSection( 'CompanyInfo' );
		return;
	}

	if ( !ValidateSigneeInfoOnAgreementPage() )
	{
		return;
	}

	var agreedToNDA = $J( "#agree_to_nda_checkbox" );
	if ( !agreedToNDA.prop( "checked" ) )
	{
		ShowAlertDialog( 'Warning',  'You must agree to the terms in the Non-Disclosure Agreement before continuing.'  );
		return;
	}

	var waitingDialog = ShowBlockingWaitDialog( 'Saving',  'Saving your information...'  );
	$J.ajax(
		{
			type: "POST",
			url: 'https://partner.steamgames.com/newpartner/ajaxsave',
			data: $J('#SteamworksAccessForm').serialize(),
			success: function ( response ) {
				waitingDialog.Dismiss();
				if ( response.success == 1 )
				{
					top.location.href = response.redirect_url;
				}
				else
				{
					if ( typeof response.captchagid !== 'undefined' )
					{
						ShowAlertDialog( 'Error', 'Error verifying humanity' );
						UpdateCaptcha( response.captchagid );
						$J( "#input_captcha" ).val('');
					}
					else if ( typeof response.errormsg !== 'undefined' )
					{
						ShowAlertDialog( 'Error', 'An error was encountered while processing your request: ' + response.errormsg );
					}
					else
					{
						ShowAlertDialog( 'Error', 'An error was encountered while processing your request: ' + response.success );
					}
				}
			},
			failure: function( response ) {
				waitingDialog.Dismiss();
			}
		}
	);
}

function SignCyberCafeAgreement()
{
	if ( !ValidateCompanyInfo( false ) )
	{
		GoToSection( 'CompanyInfo' );
		return;
	}

	if ( !ValidateSigneeInfoOnAgreementPage() )
	{
		return;
	}

    var agreedToSDA1 = $J( "#agree_to_sda_checkbox1" );
    if ( !agreedToSDA1.prop( "checked" ) )
    {
        ShowAlertDialog( 'Warning',  'You must agree to the terms in the Steam Site License Program before continuing.'  );
        return;
    }

	var waitingDialog = ShowBlockingWaitDialog( 'Saving',  'Saving your information...'  );
	$J.ajax(
		{
			type: "POST",
			url: 'https://partner.steamgames.com/newpartner/ajaxsave',
			data: $J('#SteamworksAccessForm').serialize(),
			success: function ( response ) {
			waitingDialog.Dismiss();
				if ( response.success == 1 )
				{
					top.location.href = response.redirect_url;
				}
				else
				{
					if ( typeof response.captchagid !== 'undefined' )
					{
						ShowAlertDialog( 'Error', 'Error verifying humanity' );
						UpdateCaptcha( response.captchagid );
						$J( "#input_captcha" ).val('');
					}
					else if ( typeof response.errormsg !== 'undefined' )
					{
						ShowAlertDialog( 'Error', 'An error was encountered while processing your request: ' + response.errormsg );
					}
					else
					{
						ShowAlertDialog( 'Error', 'An error was encountered while processing your request: ' + response.success );
					}
				}
			},
			failure: function( response ) {
				waitingDialog.Dismiss();
			}
		}
	);
}

function SignOEMProductPurchaseAgreement()
{
	if ( !ValidateSigneeInfoOnAgreementPage() )
	{
		return;
	}

	var agreedToSDA1 = $J( "#agree_to_sda_checkbox1" );
	var agreedToSDA2 = $J( "#agree_to_sda_checkbox2" );
	if ( !agreedToSDA1.prop( "checked" ) || !agreedToSDA2.prop( "checked" ) )
	{
		ShowAlertDialog( 'Warning',  'You must agree to the terms in the OEM Product Purchase agreement before continuing.'  );
		return;
	}

	var waitingDialog = ShowBlockingWaitDialog( 'Saving',  'Saving your information...'  );
	$J.ajax(
		{
			type: "POST",
			url: 'https://partner.steamgames.com/newpartner/ajaxsave',
			data: $J('#SteamworksAccessForm').serialize(),
			success: function ( response ) {
				waitingDialog.Dismiss();
				if ( response.success == 1 )
				{
					top.location.href = response.redirect_url;
				}
				else
				{
					if ( typeof response.captchagid !== 'undefined' )
					{
						ShowAlertDialog( 'Error', 'Error verifying humanity' );
						UpdateCaptcha( response.captchagid );
						$J( "#input_captcha" ).val('');
					}
					else if ( typeof response.errormsg !== 'undefined' )
					{
						ShowAlertDialog( 'Error', 'An error was encountered while processing your request: ' + response.errormsg );
					}
					else
					{
						ShowAlertDialog( 'Error', 'An error was encountered while processing your request: ' + response.success );
					}
				}
			},
			failure: function( response ) {
				waitingDialog.Dismiss();
			}
		}
	);
}

function SignWalletCodePurchaseAgreement( returnURL )
{
	var bHasRequiredFields = true;
	// signee info
	bHasRequiredFields &= IsValidRequiredField( "[name='signee_info[full_name]']", gValidFieldAlphaNumericRegex );
	bHasRequiredFields &= IsValidRequiredField( "[name='signee_info[title]']", gValidFieldAlphaNumericRegex );
	bHasRequiredFields &= IsValidRequiredField( "[name='signee_info[phone]']", gValidFieldAlphaNumericRegex );

	if ( !bHasRequiredFields )
	{
		ShowAlertDialog( 'Error', 'Please fill in the highlighted fields and make sure they only contain valid characters: alpha, numeric, blank, ampersand (&amp;), hyphen(-), comma (,), apostrophe(’), forward slash (/), pound sign (#), and period (.) Do not use special characters that are unique to a language other than English.' );
		return false;
	}

	var agreedToSDA1 = $J("#agree_to_sda_checkbox1");
	if ( !agreedToSDA1.prop("checked") ) {
		ShowAlertDialog('Warning', 'By selecting the box to the left, you are accepting the Steam Wallet Code Reseller agreement as an authorized representative of the party you identified in the "Company Legal Name" field. These Wallet Code Purchase agreements takes effect upon Valve’s acceptance of it by email notice to you.');
		return;
	}
	
	var inviteID = $J("#inviteID");

	var waitingDialog = ShowBlockingWaitDialog( 'Saving',  'Saving your information...'  );
	$J.ajax(
		{
			type: "POST",
			url: 'https://partner.steamgames.com/newpartner/ajaxsignlatestsda/?agreement_type=' + 10,
			data: $J('#SteamworksAccessForm').serialize(),
			success: function ( response ) {
				waitingDialog.Dismiss();
				if ( response.success == 1 )
				{
					var dialog = ShowAlertDialog( 'Thanks!', 'Thank you for signing the latest Steam Wallet Code Reseller Agreement. Click OK to continue.' );
					dialog.done( function() {
						top.location.href = response.redirect_url;
					} );
				}
				else
				{
					if( response.success == 15)
						ShowAlertDialog( 'Error', 'You must have Actual Authority on your partner account to sign this agreement.');
					else
						ShowAlertDialog( 'Error', 'An error was encountered while processing your request: ' + response.success );
				}
			},
			failure: function( response ) {
				waitingDialog.Dismiss();
			}
		}
	);
}

function SignLatestSDA( returnURL )
{
	var bHasRequiredFields = true;
	// signee info
	bHasRequiredFields &= IsValidRequiredField( "[name='signee_info[full_name]']", gValidFieldAlphaNumericRegex );
	bHasRequiredFields &= IsValidRequiredField( "[name='signee_info[title]']", gValidFieldAlphaNumericRegex );
	bHasRequiredFields &= IsValidRequiredField( "[name='signee_info[phone]']", gValidFieldAlphaNumericRegex );

	if ( !bHasRequiredFields )
	{
		ShowAlertDialog( 'Error', 'Please fill in the highlighted fields and make sure they only contain valid characters: alpha, numeric, blank, ampersand (&amp;), hyphen(-), comma (,), apostrophe(’), forward slash (/), pound sign (#), and period (.) Do not use special characters that are unique to a language other than English.' );
		return false;
	}

	var agreedToSDA1 = $J( "#agree_to_sda_checkbox1" );
	var agreedToSDA2 = $J( "#agree_to_sda_checkbox2" );
	var agreedToSDA3 = $J( "#agree_to_sda_checkbox3" );
	if ( !agreedToSDA1.prop( "checked" ) || !agreedToSDA2.prop( "checked" ) || !agreedToSDA3.prop( "checked" ) )
	{
		ShowAlertDialog( 'Warning',  'You must agree to the terms in the Steam Distribution Agreement before continuing.'  );
		return;
	}

	var waitingDialog = ShowBlockingWaitDialog( 'Saving',  'Saving your information...'  );
	$J.ajax(
		{
			type: "POST",
			url: 'https://partner.steamgames.com/newpartner/ajaxsignlatestsda/',
			data: $J('#SteamworksAccessForm').serialize(),
			success: function ( response ) {
			waitingDialog.Dismiss();
				if ( response.success == 1 )
				{
					var dialog = ShowAlertDialog( 'Thanks!', 'Thank you for signing the latest Steamworks Distribution Agreement. Click OK to continue.' );
					dialog.done( function() {
						top.location.href = returnURL;
					} );
				}
				else
				{
					if( response.success == 15)
						ShowAlertDialog( 'Error', 'You must have Actual Authority on your partner account to sign the Steamworks Distribution Agreement');
					else
						ShowAlertDialog( 'Error', 'An error was encountered while processing your request: ' + response.success );
				}
			},
			failure: function( response ) {
				waitingDialog.Dismiss();
			}
		}
	);
}

function SignLatestVideoSDA( returnURL )
{
	var bHasRequiredFields = true;
	// signee info
	bHasRequiredFields &= IsValidRequiredField( "[name='signee_info[full_name]']", gValidFieldAlphaNumericRegex );
	bHasRequiredFields &= IsValidRequiredField( "[name='signee_info[title]']", gValidFieldAlphaNumericRegex );
	bHasRequiredFields &= IsValidRequiredField( "[name='signee_info[phone]']", gValidFieldAlphaNumericRegex );

	if ( !bHasRequiredFields )
	{
		ShowAlertDialog( 'Error', 'Please fill in the highlighted fields and make sure they only contain valid characters: alpha, numeric, blank, ampersand (&amp;), hyphen(-), comma (,), apostrophe(’), forward slash (/), pound sign (#), and period (.) Do not use special characters that are unique to a language other than English.' );
		return false;
	}

	var agreedToSDA1 = $J( "#agree_to_sda_checkbox1" );
	var agreedToSDA2 = $J( "#agree_to_sda_checkbox2" );
	var agreedToSDA3 = $J( "#agree_to_sda_checkbox3" );
	if ( !agreedToSDA1.prop( "checked" ) || !agreedToSDA2.prop( "checked" ) || !agreedToSDA3.prop( "checked" ) )
	{
		ShowAlertDialog( 'Warning',  'You must agree to the terms in the Steam Distribution Agreement before continuing.'  );
		return;
	}

	var waitingDialog = ShowBlockingWaitDialog( 'Saving',  'Saving your information...'  );
	$J.ajax(
		{
			type: "POST",
			url: 'https://partner.steamgames.com/newpartner/ajaxsignlatestsda/?agreement_type=' + 5,
			data: $J('#SteamworksAccessForm').serialize(),
			success: function ( response ) {
				waitingDialog.Dismiss();
				if ( response.success == 1 )
				{
					var dialog = ShowAlertDialog( 'Thanks!', 'Thank you for signing the latest Steamworks Distribution Agreement. Click OK to continue.' );
					dialog.done( function() {
						top.location.href = returnURL;
					} );
				}
				else
				{
					if( response.success == 15)
					ShowAlertDialog( 'Error', 'You must have Actual Authority on your partner account to sign the Steamworks Distribution Agreement');
				else
					ShowAlertDialog( 'Error', 'An error was encountered while processing your request: ' + response.success );
				}
			},
			failure: function( response ) {
				waitingDialog.Dismiss();
			}
		}
	);
}

function SignLatestCafeAgreement( returnURL )
{
	var bHasRequiredFields = true;
	// signee info
	bHasRequiredFields &= IsValidRequiredField( "[name='signee_info[full_name]']", gValidFieldAlphaNumericRegex );
	bHasRequiredFields &= IsValidRequiredField( "[name='signee_info[title]']", gValidFieldAlphaNumericRegex );
	bHasRequiredFields &= IsValidRequiredField( "[name='signee_info[phone]']", gValidFieldAlphaNumericRegex );

	if ( !bHasRequiredFields )
	{
		ShowAlertDialog( 'Error', 'Please fill in the highlighted fields and make sure they only contain valid characters: alpha, numeric, blank, ampersand (&amp;), hyphen(-), comma (,), apostrophe(’), forward slash (/), pound sign (#), and period (.) Do not use special characters that are unique to a language other than English.' );
		return false;
	}

	var agreedToSDA1 = $J("#agree_to_sda_checkbox1");
	if ( !agreedToSDA1.prop("checked") ) {
		ShowAlertDialog('Warning', 'You must agree to the terms in the Steam Site License Program before continuing.');
		return;
	}

	var waitingDialog = ShowBlockingWaitDialog( 'Saving',  'Saving your information...'  );
	$J.ajax(
		{
			type: "POST",
			url: 'https://partner.steamgames.com/newpartner/ajaxsignlatestsda/?agreement_type=' + 2,
			data: $J('#SteamworksAccessForm').serialize(),
			success: function ( response ) {
				waitingDialog.Dismiss();
				if ( response.success == 1 )
				{
					var dialog = ShowAlertDialog( 'Thanks!', 'Thank you for signing the latest Steam Site License Agreement. Click OK to continue.' );
					dialog.done( function() {
						top.location.href = returnURL;
					} );
				}
				else
				{
					if( response.success == 15)
						ShowAlertDialog( 'Error', 'You must have Actual Authority on your partner account to sign the Steam Site License Agreement');
					else
						ShowAlertDialog( 'Error', 'An error was encountered while processing your request: ' + response.success );
				}
			},
			failure: function( response ) {
				waitingDialog.Dismiss();
			}
		}
	);
}

function SignLatestCafeWalletFundingAgreement( returnURL )
{
	var bHasRequiredFields = true;
	// signee info
	bHasRequiredFields &= IsValidRequiredField( "[name='signee_info[full_name]']", gValidFieldAlphaNumericRegex );
	bHasRequiredFields &= IsValidRequiredField( "[name='signee_info[title]']", gValidFieldAlphaNumericRegex );
	bHasRequiredFields &= IsValidRequiredField( "[name='signee_info[phone]']", gValidFieldAlphaNumericRegex );

	if ( !bHasRequiredFields )
	{
		ShowAlertDialog( 'Error', 'Please fill in the highlighted fields and make sure they only contain valid characters: alpha, numeric, blank, ampersand (&amp;), hyphen(-), comma (,), apostrophe(’), forward slash (/), pound sign (#), and period (.) Do not use special characters that are unique to a language other than English.' );
		return false;
	}

	var agreedToSDA1 = $J("#agree_to_sda_checkbox1");
	if ( !agreedToSDA1.prop("checked") ) {
		ShowAlertDialog('Warning', 'You must agree to the terms in the Steam Cafe Wallet Funding License Agreement before continuing.');
		return;
	}
	
	var inviteID = $J("#inviteID");

	var waitingDialog = ShowBlockingWaitDialog( 'Saving',  'Saving your information...'  );
	$J.ajax(
		{
			type: "POST",
			url: 'https://partner.steamgames.com/newpartner/ajaxsignlatestsda/?agreement_type=' + 8,
			data: $J('#SteamworksAccessForm').serialize(),
			success: function ( response ) {
				waitingDialog.Dismiss();
				if ( response.success == 1 )
				{
					var dialog = ShowAlertDialog( 'Thanks!', 'Thank you for signing the latest Steam Cafe Wallet Funding License Agreement. Click OK to continue.' );
					dialog.done( function() {
						top.location.href = returnURL;
					} );
				}
				else
				{
					if( response.success == 15)
						ShowAlertDialog( 'Error', 'You must have Actual Authority on your partner account to sign this agreement.');
					else
						ShowAlertDialog( 'Error', 'An error was encountered while processing your request: ' + response.success );
				}
			},
			failure: function( response ) {
				waitingDialog.Dismiss();
			}
		}
	);
}

function EnterBankDetails()
{
	var dialog = ShowDialog( 'Enter Bank Details', $J( "#BankAccountRedirectModal" ) );
	dialog.SetRemoveContentOnDismissal( false );
}

function EnterTaxDetails()
{
	var waitingDialog = ShowBlockingWaitDialog( 'Please Wait', 'Contacting the third party service...' );
	$J.ajax(
		{
			type: "POST",
			url: 'https://partner.steamgames.com/newpartner/ajaxstarttaxidentityworkflow/',
			data: {'sessionid': g_sessionID},
			success: function ( response ) {
				if ( response.success == 1 )
				{
					top.location.href = response.url;
				}
				else
				{
					waitingDialog.Dismiss();
					ShowAlertDialog( 'Error', 'An error was encountered while processing your request: ' + response.success );
				}
			}
		}
	);
}

function Abandon()
{
	var confirmDialog = ShowConfirmDialog( 'Are You Sure You Want to Start Over?', 'Clicking \'OK\' will erase any information you have already entered and force you to start the process over.<br><br>Are you sure you want to continue?' );
	confirmDialog.done( function() {
		CancelAgreementOnboarding( 'Reseting your partner information...' );
	} );

}

function CancelAgreementOnboarding( strPleaseWaitText )
{
	var waitingDialog = ShowBlockingWaitDialog( 'Please Wait', strPleaseWaitText );
	$J.ajax(
		{
			type: "POST",
			url: 'https://partner.steamgames.com/newpartner/ajaxabandon/',
			data: {'sessionid': g_sessionID},
			success: function ( response ) {
				if ( response.success == 1 )
				{
					top.location.href = response.redirect_url;
				}
				else
				{
					waitingDialog.Dismiss();
					ShowAlertDialog( 'Error', 'An error was encountered while processing your request: ' + response.success );
				}
			}
		}
	);
}

function Finalize()
{
	var waitingDialog = ShowBlockingWaitDialog( 'Please Wait', 'Saving your information...' );
	$J.ajax(
		{
			type: "POST",
			url: 'https://partner.steamgames.com/newpartner/ajaxfinish/',
			data: {'sessionid': g_sessionID},
			success: function ( response ) {
				if ( response.success == 1 )
				{
					top.location.href = 'https://partner.steamgames.com/newpartner/';
				}
				else
				{
					waitingDialog.Dismiss();
					ShowAlertDialog( 'Error', 'An error was encountered while processing your request: ' + response.success );
				}
			}
		}
	);
}

