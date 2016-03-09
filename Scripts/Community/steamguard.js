
var g_checkforTOS = false;
function PhoneAjax( op, arg, success, error )
{
	$J.ajax( {
		url: 'https://steamcommunity.com/steamguard/phoneajax',
		type: 'POST',
		data: {
				op: op,
				arg: arg,
				checkfortos: g_checkforTOS ? 1 : 0,
				sessionid: g_sessionID
			 },

			 success: function( data, textStatus, jqXHR ) {
				 if ( data && data.success )
				 {
					 if ( success )
						 success( data );
				 }
				 else if ( data && data.error_text )
				 {
					 if ( error ) {
						 if ( 'fatal' in data ) {
							 error( data.error_text, data.fatal );
						 } else {
							 error( data.error_text );
						 }
					 }
				 }
				 else if ( data && data.tos_warning )
				 {
					 g_checkforTOS = false;

					 var sVAC = '';
					 if ( data.tos_warning.vac )
					 {
						 sVAC += '<div class="tos_list_header">' + 'VAC Bans in the following game(s):' + '</div>';
						 $J.each( data.tos_warning.vac, function( key, app )
						 {
							 sVAC += '<div class="tos_list_item">-' + app + '</div>';
						 } );
					 }

					 var sLocks = '';
					 if ( data.tos_warning.active_locks )
					 {
						 sLocks = '<div class="tos_list_header">' + 'Support alert(s)' + '</div>';
					 }

					 var sTosList = sLocks + sVAC;

					 $J( '#steamguard_tos_list' ).html( sTosList );

					 if ( data.tos_warning.time_allowed_to_add )
					 {
						 var sTimeText = 'If no future violations occur on this phone number, you will be able to add this phone number without inheriting these restrictions on ' + data.tos_warning.time_allowed_to_add + '.';
						 $J( '#phone_tos_time_add').html( sTimeText );
					 }

					 $J( '.steamguard_confirm_wrapper' ).hide();
					 $J( '.steamguard_tos_wrapper' ).show();
					 ClearBusy();

					 if ( data.tos_warning.vac_policy == 2 || data.tos_warning.tos_policy == 2 )
					 {
						 $J( '#steamguard_next_button' ).hide();
						 $J( '.steamguard_centered_button > #steamguard_cancel_button' ).hide();
						 $J( '#steamguard_done_button' ).show();
						 $J( '#phone_tos_details' ).html( 'We are unable to accept this phone number at this time due to the following violations associated with it:' );
					 }
					 else
					 {
						 $J( "#phone_warning_subtext" ).html( 'If you would like to add this phone number to your account now and inherit these restrictions, click Next.' );
						 $J( "#phone_warning_subtext" ).show();
						 $J( '#phone_tos_details' ).html( 'Adding this phone number to your account will also add the following (including any associated restrictions) to your account:' );

						 StartCountdownEnable( '#steamguard_next_button', 15 );
					 }

				 }
				 else
				 {
					 if ( error )
						 error();
				 }
			 },

			 error: function( jqXHR, textStatus ) {
				 if ( error )
					 error();
			 }
	});
}

var g_alreadyLoaded = false;

function HandleChangePageLoad( needGid )
{
	if ( g_alreadyLoaded )
	{
		return;
	}
	g_alreadyLoaded = true;

	var processGidFunc = function( haveGid )
	{
		if ( needGid && haveGid != needGid )
		{
			if ( $J('#steamguard_choice_list') )
			{
				$J('#steamguard_choice_list').hide();
			}

			if ( $J('#steamguard_prechange') )
			{
				$J('#steamguard_prechange').hide();
			}

			if ( $J('#steamguard_cannot_change') )
			{
				$J('#steamguard_cannot_change').show();
			}
		}
		else if ( ! needGid && haveGid )
		{
			GetValueFromLocalURL( "steammobile://steamguardsuppresstwofactorgid?gid=" + haveGid );
		}
	};

	GetValueFromLocalURL( "steammobile://steamguardgetgid", 5,
		processGidFunc,
		
		function( )
		{
			processGidFunc( null );
		},
		
		function( )
		{
			processGidFunc( null );
		}
	);
}

function HandleSplashettePageLoad( needGid )
{
	if ( g_alreadyLoaded )
	{
		return;
	}
	g_alreadyLoaded = true;

	var processGidFunc = function( haveGid )
	{
		if ( needGid && haveGid != needGid )
		{
			$J('#splashette_rcode_wrapper').hide();
		}
	};

	GetValueFromLocalURL( "steammobile://steamguardgetgid", 5,
			processGidFunc,

			function( )
			{
				processGidFunc( null );
			},

			function( )
			{
				processGidFunc( null );
			}
	);
}

function PushLocation( url )
{
	return 'steammobile://openurl?url=' + url;
}


function HandleSteamguardCancel( near )
{
	if ( BIsMobileAPICallInProgress() )
		return;
	ShowBusy( near );
	window.location = 'https://steamcommunity.com/steamguard/prechange';
}



g_SteamguardDoneSecondsLeft = 0;

function HandleSteamguardDone( near )
{
	if ( g_SteamguardDoneSecondsLeft <= 0 )
	{
		window.location = 'https://steamcommunity.com/steamguard/prechange';
	}
}

function StartCountdownEnable( name, seconds )
{
	if ( ! $J(name).data('counting') )
	{
		$J(name).data('counting', true);
		var originalHtml = $J(name).html();

		$J(name).html( '<span>[' + seconds + ']</span>' );

		g_SteamguardDoneSecondsLeft = seconds;

		var id = setInterval( function() {

			g_SteamguardDoneSecondsLeft -= 1;

			if ( g_SteamguardDoneSecondsLeft <= 0 )
			{
				window.clearInterval( id );
				$J(name).html( originalHtml );
				$J(name).removeClass( 'btn_disabled' );
			}
			else
			{
				$J(name).html( '<span>[' + g_SteamguardDoneSecondsLeft + ']</span>' );
			}
		}, 1000 );
	}
}


//	Steam Guard with email

function UseSteamguardWithEmail( near )
{
	if ( BIsMobileAPICallInProgress() )
		return;
	ShowBusy( near );
	window.location = 'https://steamcommunity.com/steamguard/email';
}


function HandleSteamguardEmailContinue( near )
{
	if ( BIsMobileAPICallInProgress() )
		return;
	ShowBusy( near );
	GetValueFromLocalURL( 'steammobile://steamguardset?scheme=email', 60,
		function(data)
		{
			window.location = 'https://steamcommunity.com/steamguard/email_done';
		},
		FatalError,
		FatalError
	);
}


//	Steam Guard w/o email

function UseSteamguardNoEmail( near )
{
	if ( BIsMobileAPICallInProgress() )
		return;
	ShowBusy( near );
	window.location = 'https://steamcommunity.com/steamguard/none';
}


function HandleSteamguardNoneContinue( near )
{
	if ( BIsMobileAPICallInProgress() )
		return;
	ShowBusy( near );
	GetValueFromLocalURL( 'steammobile://steamguardset?scheme=none', 60,
		function(data)
		{
			window.location = 'https://steamcommunity.com/steamguard/none_done';
		},
		FatalError,
		FatalError
	);
}


//	Steam Guard with two factor

function UseSteamguardWithTwoFactor( near )
{
	if ( BIsMobileAPICallInProgress() )
		return;
	ShowBusy( near );
	window.location = 'https://steamcommunity.com/steamguard/twofactor_splash';
}


function HandleActivationCode( near )
{
	if ( BIsMobileAPICallInProgress() )
		return;
	ClearError();

	var code = $J('#activationcode_entry').val();

	code = code.replace( /[^\x00-\x7F\\s]/g, '' ).trim(); // remove non-standard-ASCII characters and whitespace

	ShowBusy( near );
	var result = GetValueFromLocalURL( 'steammobile://steamguardvalidate?code=' + code, 60,
		function()
		{
			PhoneAjax( 'has_phone', null,
				function( data )
				{
					window.location = 'https://steamcommunity.com/steamguard/twofactor_recoverycode';
				},

				function()
				{
					window.location = 'https://steamcommunity.com/steamguard/twofactor_recoverycode';
				}
			);
		},

		function( msg, code )
		{
			if ( code == 88 ||
				code == 89 )
			{
				ShowError( 'The activation code is incorrect' );
			}
			else
			{
				FatalError( 'Sorry, there was an error processing your activation code.' );
			}
		},

		FatalError
	);
}


function HandleResendEmail( near )
{
	if ( BIsMobileAPICallInProgress() )
		return;
	ShowBusy( near );
	GetValueFromLocalURL( 'steammobile://steamguardsendemail' );
	ClearBusy();
}


function HandlePhoneSplashContinue( near, bForTwoFactor )
{
	if ( BIsMobileAPICallInProgress() )
		return;
	ShowBusy( near );
	var sForTwoFactor = bForTwoFactor ? '1' : '0';
	var phoneNumberLocation = 'https://steamcommunity.com/steamguard/phone_number?bForTwoFactor=' + sForTwoFactor + '&bRevoke2fOnCancel=';

	if ( bForTwoFactor )
	{
		PhoneAjax( 'has_phone', null,
			function( data )
			{
				if ( data.has_phone )
				{
					var result = GetValueFromLocalURL( 'steammobile://steamguardset?scheme=twofactor&ph=1', 60,
							function()
							{
								window.location = 'https://steamcommunity.com/steamguard/phone_checksms?bForTwoFactor=1&bRevoke2fOnCancel=';
							},
						
							function( data, code )
							{
								if ( code == 84 )
								{
									window.location = 'https://steamcommunity.com/steamguard/phone_cantsendsms';
								}
								else
								{
									FatalError( data, code );
								}
							},
							
							FatalError
						);
				}
				else
				{
					window.location = phoneNumberLocation;
				}
			},

			function()
			{
				window.location = phoneNumberLocation;
			}
		);
	}
	else
	{
		window.location = phoneNumberLocation;
	}
}


function HandleAddPhoneButton( near )
{
	if ( BIsMobileAPICallInProgress() )
		return;
	ShowBusy( near );
	window.location = 'https://steamcommunity.com/steamguard/phone_splash?bRevoke2fOnCancel=false';
}


function HandleRecoveryCodeDone( near )
{
	if ( BIsMobileAPICallInProgress() )
		return;

	if ( g_SteamguardDoneSecondsLeft > 0 )
		return;

	ShowBusy( near );
	window.location = 'https://steamcommunity.com/steamguard/twofactor_done';
}


function HandlePhoneNumber( near, bForTwoFactor )
{
	if ( BIsMobileAPICallInProgress() )
		return;
	ClearError();

	var phone_number = $J('#phone_number').val();
	phone_number = phone_number.replace( /[^\x00-\x7F]/g, '' ).trim(); // remove non-standard-ASCII characters

	ShowBusy( near );

	PhoneAjax( 'add_phone_number', phone_number,
		function()
		{
			if ( bForTwoFactor )
			{
				GetValueFromLocalURL( 'steammobile://steamguardset?scheme=twofactor&ph=1', 60,
					function()
					{
						window.location = 'https://steamcommunity.com/steamguard/phone_checksms?bForTwoFactor=1&bRevoke2fOnCancel=';
					},
					FatalError,
					FatalError
				);
			}
			else
			{
				window.location = 'https://steamcommunity.com/steamguard/phone_checksms?bRevoke2fOnCancel=';
			}
		},

		function( errorText, fatal )
		{
			ClearBusy();

			if ( fatal ) {
				FatalError( errorText );
			} else if ( errorText ) {
				ShowError( errorText );
			}
		}
	);
}


g_SmsCodeFailures = 0;


function DoTwoFactorValidate( sms_code )
{
	if ( BIsMobileAPICallInProgress() )
		return;
	ShowBusy();

	GetValueFromLocalURL( 'steammobile://steamguardvalidate?code=' + sms_code, 60,
		function()
		{
			window.location = 'https://steamcommunity.com/steamguard/twofactor_recoverycode';
		},

		function( data, code )
		{
			if ( ++g_SmsCodeFailures > 5 )
			{
				FatalError( 'Sorry, there was an error processing your SMS code.' );
			}
			else
			{
				if ( code == 88 ||
					code == 89 )
				{
					ShowError( 'The SMS code is incorrect' );
				}
				else
				{
					ShowError( 'There was an error with that code (' + code + ')' );
				}
			}
		},

		FatalError
	);
}


function HandleAjaxError( errorText, fatal )
{
	ClearBusy();

	if ( fatal ) {
		FatalError( errorText );
	} else if ( errorText ) {
		ShowError( errorText );
	}
}



function HandleSmsCode( near, bForTwoFactor )
{
	if ( BIsMobileAPICallInProgress() )
		return;
	ClearError();

	if ( g_SteamguardDoneSecondsLeft > 0 )
		return;


	var sms_code = $J('#sms_code').val();
	sms_code = sms_code.replace( /[^0-9a-zA-Z]/g, '' );		// clobber non-alphanumeric

	ShowBusy( near );

	PhoneAjax( 'has_phone', null,
		function( data )
		{
			if ( data.has_phone )
			{
				if ( bForTwoFactor )
				{
					DoTwoFactorValidate( sms_code );
				}
			}
			else
			{
				PhoneAjax( 'check_sms_code', sms_code,
					function( data )
					{
						if ( bForTwoFactor )
						{
							DoTwoFactorValidate( sms_code );
						}
						else
						{
							//	just adding a phone
							ClearBusy();
							window.location = 'https://steamcommunity.com/steamguard/phone_done';
						}
					},

					function( errorText, fatal )
					{
						if ( fatal )
							FatalError( errorText );
						
						if ( ++g_SmsCodeFailures > 5 )
						{
							FatalError( 'Sorry, there was an error processing your SMS code.' );
						}
						else
						{
							HandleAjaxError( errorText, fatal );
						}
					}
					);
			}
		},

		HandleAjaxError
	);
}


function HandleSmsResend( near, bForTwoFactor )
{
	if ( BIsMobileAPICallInProgress() )
		return;
	ClearError();

	ShowBusy( near );

	PhoneAjax( 'send_sms_code', bForTwoFactor,
		function()
		{
			g_SmsCodeFailures = 0;
			ClearBusy();
			$J('#sms_code').val('');
		},

		function( error_text, fatal )
		{
			ClearBusy();
			$J('#sms_code').val('');

			if ( fatal ) {
				FatalError( errorText );
			} else if ( errorText ) {
				ShowError( errorText );
			}
		}
	);
}


function SetRevocationCode( id )
{
	GetValueFromLocalURL( 'steammobile://steamguardgetrevocation', 5,
		function( data )
		{
			$J(id).text( data );
		}
	);
}


function ClearError()
{
	$J('#steamguard_error_text').text( '' );
	$J('#steamguard_error_text').hide();
}


function ShowError( msg )
{
	ClearBusy();
	$J('#steamguard_error_text').text( msg );
	$J('#steamguard_error_text').show();
}


function FatalError( msg )
{
	window.location = 'https://steamcommunity.com/steamguard/error?msg=' + msg;
}


function ShowBusy( near )
{
	var p = null;

	var throbber = $J('#throbber');
	if ( ! throbber )
		return;
	
	if ( near && $J( near ) )
	{
		var p = $J( near ).offset();

		var cy = p.top + $J( near ).height() / 2 - throbber.height() / 2;
		var cx = p.left + $J( near ).width() / 2 - throbber.width() / 2;

		p = { top: cy, left: cx };
	}
	
	if ( $J( '#throbber' ) )
	{
		if ( p )
		{
			throbber.offset( p );
		}
		
		throbber.show();
	}
}


function ClearBusy()
{
	if ( $J( '#throbber' ) )
	{
		$J( '#throbber' ).hide();
	}
}
