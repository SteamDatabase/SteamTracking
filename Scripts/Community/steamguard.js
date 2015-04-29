

function runLocalUrl(url)
{
	var iframe = document.createElement("IFRAME");
	iframe.setAttribute("src", url);
	document.documentElement.appendChild(iframe);
	iframe.parentNode.removeChild(iframe);
	iframe = null;
}




function PhoneAjax( op, arg, success, error )
{
	$J.ajax( {
		url: 'https://steamcommunity.com/steamguard/phoneajax',

		data: {
				 op: op,
				 arg: arg
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

var g_interval = null;
var g_callInProgress = false;


function CheckCallInProgress()
{
	return g_callInProgress;
}


//	[status, data], status='ok' / 'error' / 'fatal'
function GetValueFromLocalURL( url, timeout, success, error, fatal )
{

	g_callInProgress = true;
	runLocalUrl( url );

	if ( ! timeout )
	{
		timeout = 5;
	}

	var timeoutTime = Date.now() + 1000 * timeout;

	if ( g_interval != null )
	{
		window.clearInterval( g_interval );
		g_interval = null;
	}

	g_interval = window.setInterval( function() {
		
		
		if ( Date.now() > timeoutTime )
		{
			g_callInProgress = false;				
			if ( g_interval )
				window.clearInterval( g_interval );
			
			fatal( 'timeout', -1 );
		}

	}, 100 );
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
	}

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


function HandleSplashetteChange( near )
{
	if ( CheckCallInProgress() )
		return;
	ShowBusy( near );
	window.location = 'https://steamcommunity.com/steamguard/change';
}


function PushLocation( url )
{
	return 'steammobile://openurl?url=' + url;
}


function HandleSplashetteHelp( near )
{
	window.location = 'https://steamcommunity.com/steamguard/help';
}


function HandleSteamguardPreChangeButton( near )
{
	if ( CheckCallInProgress() )
		return;
	ShowBusy( near );
	window.location = 'https://steamcommunity.com/steamguard/change';
}


function HandleSteamguardCancel( near )
{
	if ( CheckCallInProgress() )
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
	if ( CheckCallInProgress() )
		return;
	ShowBusy( near );
	window.location = 'https://steamcommunity.com/steamguard/email';
}


function HandleSteamguardEmailContinue( near )
{
	if ( CheckCallInProgress() )
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
	if ( CheckCallInProgress() )
		return;
	ShowBusy( near );
	window.location = 'https://steamcommunity.com/steamguard/none';
}


function HandleSteamguardNoneContinue( near )
{
	if ( CheckCallInProgress() )
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
	if ( CheckCallInProgress() )
		return;
	ShowBusy( near );
	window.location = 'https://steamcommunity.com/steamguard/twofactor_splash';
}


function HandleTwoFactorSplashContinue( near )
{	
	if ( CheckCallInProgress() )
		return;
	ShowBusy( near );

	GetValueFromLocalURL( 'steammobile://steamguardset?scheme=twofactor', 60,
		function( data )
		{
			window.location = 'https://steamcommunity.com/steamguard/twofactor_confirm';
		},
		FatalError,
		FatalError
	);
}


function HandleActivationCode( near, bUsingSms )
{
	if ( CheckCallInProgress() )
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
				ShowError( "The activation code is incorrect" );
			}
			else
			{
				FatalError( "Sorry, there was an error processing your activation code." );
			}
		},

		FatalError
	);
}


function HandleResendEmail( near )
{
	if ( CheckCallInProgress() )
		return;
	ShowBusy( near );
	GetValueFromLocalURL( 'steammobile://steamguardsendemail' );
	ClearBusy();
}


function HandlePhoneSplashContinue( near, bForTwoFactor )
{
	if ( CheckCallInProgress() )
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
	if ( CheckCallInProgress() )
		return;
	ShowBusy( near );
	window.location = 'https://steamcommunity.com/steamguard/phone_splash?bRevoke2fOnCancel=false';
}


function HandleRecoveryCodeDone( near )
{
	if ( CheckCallInProgress() )
		return;
	ShowBusy( near );
	window.location = 'https://steamcommunity.com/steamguard/twofactor_done';
}


function HandlePhoneNumber( near, bForTwoFactor )
{
	if ( CheckCallInProgress() )
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
	if ( CheckCallInProgress() )
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
				FatalError( "Sorry, there was an error processing your SMS code." );
			}
			else
			{
				if ( code == 88 ||
					code == 89 )
				{
					ShowError( "The SMS code is incorrect" );
				}
				else
				{
					ShowError( "There was an error with that code" );
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
	if ( CheckCallInProgress() )
		return;
	ClearError();

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
							FatalError( "Sorry, there was an error processing your SMS code." );
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
	if ( CheckCallInProgress() )
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
