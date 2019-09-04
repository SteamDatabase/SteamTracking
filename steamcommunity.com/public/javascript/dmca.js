
function UpdateStateSelectState()
{
	try
	{
		if ( $('country_code').value == 'US' )
		{
			$('state_input').style.display = 'none';
			$('state_select').style.display = 'block';
		}
		else
		{
			$('state_input').style.display = 'block';
			$('state_input').value = '';
			$('state_select').style.display = 'none';
		}
	}
	catch( e )
	{
		ReportJSError( 'Failed in UpdateStateSelectState()', e );
	}
}

function OnChangeCopyrightOwner()
{
	if ( $J( "#check_is_ownera" ).prop('checked') )
	{
		$J( "#copyright_holder_container" ).hide();
		$J( "#copyright_holder" ).val('');
	}
	if ( $J( "#check_is_ownerb" ).prop('checked') )
	{
		$J( "#copyright_holder_container" ).show();
	}
}

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

var gValidFieldAlphaNumericRegex = /^[A-Za-z0-9 &.,#'\/\-]+$/

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

function SaveTakeDownNotice()
{
	var frm = $J( "#CreateDMCATakeDownNoticeForm" );

	if ( !$J( "#check_is_ownera").prop('checked') && !$J( "#check_is_ownerb").prop('checked') )
	{
		ShowAlertDialog( 'Error', 'You must certify that you are the owner or authorized to act on the copyright owner\'s behalf' );
		return false;
	}
	if ( !$J( "#check_use_not_authorized").prop('checked') )
	{
		ShowAlertDialog( 'Error', 'You must certify that the content is not authorized to be used' );
		return false;
	}
	if ( !$J( "#check_acknowledge_liability").prop('checked') )
	{
		ShowAlertDialog( 'Error', 'You acknowledge the terms of Section 512(f) of the DMCA' );
		return false;
	}
	if ( !$J( "#check_is_accurate").prop('checked') )
	{
		ShowAlertDialog( 'Error', 'You must certify that the above information is accurate UNDER PENALTY OF PERJURY' );
		return false;
	}

	// required fields
	var bHasRequiredFields = true;
	bHasRequiredFields &= HasRequiredField( "#content_url" );
	bHasRequiredFields &= HasRequiredField( "#content_desc" );
	bHasRequiredFields &= HasRequiredField( "#original_ip_desc" );
	bHasRequiredFields &= HasRequiredField( "#full_name" );
	bHasRequiredFields &= HasRequiredField( "#address1" );
	bHasRequiredFields &= HasRequiredField( "#city" );
	bHasRequiredFields &= HasRequiredField( "#full_name" );
	bHasRequiredFields &= HasRequiredField( "#postal_code" );
	bHasRequiredFields &= HasRequiredField( "#phone" );
	bHasRequiredFields &= HasRequiredField( "#email" );
	bHasRequiredFields &= HasRequiredField( "#signature" );
	if ( $('country_code').value != 'US' )
	{
		bHasRequiredFields &= HasRequiredField( "#state_input" );
	}
	bHasRequiredFields &= HasRequiredField( "#input_captcha" );
	if ( $J( "#check_is_ownerb" ).prop('checked') )
	{
		bHasRequiredFields &= HasRequiredField( "#copyright_holder" );
	}

	if ( !bHasRequiredFields )
	{
		ShowAlertDialog( 'Error', 'Please fill in the required fields highlighted in red.' );
		return false;
	}

	// validate address fields
	var bHasValidFields = true;
	bHasValidFields &= IsValidRequiredField( "#address1", gValidFieldAlphaNumericRegex );
	bHasValidFields &= IsValidOptionalField( "#address2", gValidFieldAlphaNumericRegex );
	bHasValidFields &= IsValidRequiredField( "#city", gValidFieldAlphaNumericRegex );
	if ( $('country_code').value != 'US' )
	{
		bHasValidFields &= IsValidRequiredField( "#state_input", gValidFieldAlphaNumericRegex );
	}
	bHasValidFields &= IsValidRequiredField( "#postal_code", gValidFieldAlphaNumericRegex );
	if ( !bHasValidFields )
	{
		ShowAlertDialog( 'Error', 'Please fill in the highlighted fields and make sure they only contain valid characters: alpha, numeric, blank, ampersand (&amp;), hyphen(-), comma (,), apostrophe(’), forward slash (/), pound sign (#), and period (.) Do not use special characters that are unique to a language other than English.' );
		return false;
	}

	var email = $J('#email').val();
	var email_regex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
	if ( email == '' || !email_regex.test(email) )
	{
		ShowAlertDialog( 'Error', 'The email address you entered is invalid.' )
			.done( function() {
				$J( '#email' ).focus();
			} );
		return false;
	}

	var jqxhr = $J.post( frm.attr('action'), frm.serialize() )
		.done(function(data) {
			ShowAlertDialog( 'DMCA Takedown Notice Filed', 'Your DMCA takedown notice has been filed.  We will review it as soon as we can.' )
				.done( function() { top.location.href = 'https://steamcommunity.com' } );
		} )
		.fail(function() {
			var data = V_ParseJSON( jqxhr.responseText );
			if ( data['captchagid'] )
			{
				ShowAlertDialog( 'Error', 'Error verifying humanity' );
				UpdateCaptcha( data['captchagid'] );
				return;
			}
			alert('fail' + data.success );
		} );
}


/* captcha */
var iAjaxCalls = 0;

// Refresh the catpcha image
function RefreshCaptcha()
{
	++iAjaxCalls;

	new Ajax.Request('https://steamcommunity.com/dmca/ajaxrefreshcaptcha/',
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
				}
			}
		});
}

function UpdateCaptcha( gid )
{
	if ( gid != -1 )
	{
		$('captcha_entry').show();
		$('captchaImg').src = 'https://steamcommunity.com/public/captcha.php?gid='+gid;
	}
	$('captchagid').value = gid;
}