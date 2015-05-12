"use strict";

function CLoginPromptManager( strBaseURL, rgOptions )
{
	// normalize with trailing slash
	this.m_strBaseURL = strBaseURL + ( strBaseURL.substr(-1) == '/' ? '' : '/' ) + ( this.m_bIsMobile ? 'mobilelogin' : 'login' ) + '/';

	// read options
	rgOptions = rgOptions || {};
	this.m_bIsMobile = rgOptions.bIsMobile || false;
	this.m_strMobileClientType = rgOptions.strMobileClientType || '';
	this.m_bIsMobileSteamClient = ( this.m_strMobileClientType ? true : false );

	this.m_$LogonForm = $JFromIDOrElement( rgOptions.elLogonForm || document.forms['logon'] );

	this.m_fnOnFailure = rgOptions.fnOnFailure || null;
	this.m_fnOnSuccess = rgOptions.fnOnSuccess || null;

	this.m_strRedirectURL = rgOptions.strRedirectURL || strBaseURL ;
	this.m_strSessionID = rgOptions.strSessionID || null;

	if ( rgOptions.gidCaptcha )
		this.UpdateCaptcha( rgOptions.gidCaptcha );
	else
		this.RefreshCaptcha();	// check if needed


	this.m_bLoginInFlight = false;
	this.m_bInEmailAuthProcess = false;
	this.m_bInTwoFactorAuthProcess = false;
	this.m_bEmailAuthSuccessful = false;
	this.m_bLoginTransferInProgress = false;
	this.m_bEmailAuthSuccessfulWantToLeave = false;
	this.m_bTwoFactorAuthSuccessful = false;
	this.m_bTwoFactorAuthSuccessfulWantToLeave = false;
	this.m_sOAuthRedirectURI = 'steammobile://mobileloginsucceeded';
	this.m_sAuthCode = "";

	// values we collect from the user
	this.m_steamidEmailAuth = '';


	// record keeping
	this.m_iIncorrectLoginFailures = 0;	// mobile reveals password after a couple failures

	var _this = this;

	this.m_$LogonForm.submit( function(e) {
		_this.DoLogin();
		e.preventDefault();
	});
	// find buttons and make them clickable
	$J('#login_btn_signin' ).children('a, button' ).click( function() { _this.DoLogin(); } );

	// these modals need to be in the body because we refer to elements by name before they are ready
	this.m_$ModalAuthCode = this.GetModalContent( 'loginAuthCodeModal' );
	$J(document.body).append( this.m_$ModalAuthCode.hide() );
	this.m_$ModalAuthCode.find('[data-modalstate]' ).each( function() {
		$J(this).click( function() { _this.SetEmailAuthModalState( $J(this ).data('modalstate') ); } );
	})
	this.m_$ModalAuthCode.find('form' ).submit( function(e) {
		_this.SetEmailAuthModalState('submit');
		e.preventDefault();
	});
	this.m_EmailAuthModal = null;

	this.m_$ModalIPT = this.GetModalContent( 'loginIPTModal' );

	this.m_$ModalTwoFactor = this.GetModalContent( 'loginTwoFactorCodeModal' );
	$J(document.body).append( this.m_$ModalTwoFactor.hide() );
	this.m_$ModalTwoFactor.find( '[data-modalstate]' ).each( function() {
		$J(this).click( function() { _this.SetTwoFactorAuthModalState( $J(this ).data('modalstate') ); } );
	});
	this.m_$ModalTwoFactor.find('form' ).submit( function(e) {
		_this.SetTwoFactorAuthModalState( 'submit' );
		e.preventDefault();
	});



	// register to listen to IOS two factor callback
	$J(document).on('SteamMobile_ReceiveAuthCode', function( e, authcode ) {
		_this.m_sAuthCode = authcode;
	});

	$J('#captchaRefreshLink' ).click( $J.proxy( this.RefreshCaptcha, this ) );

	// include some additional scripts we may need
	if ( typeof BigNumber == 'undefined' )
		$J.ajax( { url: 'https://steamcommunity-a.akamaihd.net/public/shared/javascript/crypto/jsbn.js', type: 'get', dataType: 'script', cache: true } );
	if ( typeof RSA == 'undefined' )
		$J.ajax( { url: 'https://steamcommunity-a.akamaihd.net/public/shared/javascript/crypto/rsa.js', type: 'get', dataType: 'script', cache: true } );
}

CLoginPromptManager.prototype.BIsIos = function() { return this.m_strMobileClientType == 'ios'; }
CLoginPromptManager.prototype.BIsAndroid = function() { return this.m_strMobileClientType == 'android'; }

CLoginPromptManager.prototype.GetParameters = function( rgParams )
{
	var rgDefaultParams = { 'donotcache': new Date().getTime() };
	if ( this.m_strSessionID )
		rgDefaultParams['sessionid'] = this.m_strSessionID;

	return $J.extend( rgDefaultParams, rgParams );
}

CLoginPromptManager.prototype.$LogonFormElement = function( strElementName )
{
	var $Form = this.m_$LogonForm;
	var elInput = this.m_$LogonForm[0].elements[ strElementName ];

	if ( !elInput )
	{
		var $Input = $J('<input/>', {type: 'hidden', name: strElementName } );
		$Form.append( $Input );
		return $Input;
	}
	else
	{
		return $J( elInput );
	}
}

CLoginPromptManager.prototype.HighlightFailure = function( msg )
{
	if ( this.m_fnOnFailure )
	{
		this.m_fnOnFailure( msg );

		// always blur on mobile so the error can be seen
		if ( this.m_bIsMobile && msg )
			$J('input:focus').blur();
	}
	else
	{
		var $ErrorElement = $J('#error_display');

		if ( msg )
		{
			$ErrorElement.text( msg );
			$ErrorElement.slideDown();

			if ( this.m_bIsMobile )
				$J('input:focus').blur();
		}
		else
		{
			$ErrorElement.hide();
		}
	}
};


//Refresh the catpcha image 
CLoginPromptManager.prototype.RefreshCaptcha = function()
{
	var _this = this;
	$J.post( this.m_strBaseURL + 'refreshcaptcha/', this.GetParameters( {} ) )
		.done( function( data ) {
			_this.UpdateCaptcha( data.gid );
		});
};

CLoginPromptManager.prototype.UpdateCaptcha = function( gid )
{
	if ( gid != -1 )
	{
		$J('#captcha_entry').show();
		$J('#captchaImg').attr( 'src', this.m_strBaseURL + 'rendercaptcha/?gid='+gid );
		this.$LogonFormElement('captcha_text').val('');
	}
	else
	{
		$J('#captcha_entry' ).hide();
	}
	this.m_gidCaptcha = gid;
};

CLoginPromptManager.prototype.DoLogin = function()
{
	var form = this.m_$LogonForm[0];

	var username = form.elements['username'].value;
	username = username.replace( /[^\x00-\x7F]/g, '' ); // remove non-standard-ASCII characters

	var password = form.elements['password'].value;
	password = password.replace( /[^\x00-\x7F]/g, '' ); // remove non-standard-ASCII characters

	if ( this.m_bLoginInFlight || password.length == 0 || username.length == 0 )
		return;

	this.m_bLoginInFlight = true;
	$J('#login_btn_signin').hide();
	$J('#login_btn_wait').show();

	// reset some state
	this.HighlightFailure( '' );

	var _this = this;
	$J.post( this.m_strBaseURL + 'getrsakey/', this.GetParameters( { username: username } ) )
		.done( $J.proxy( this.OnRSAKeyResponse, this ) )
		.fail( function () {
			ShowAlertDialog( 'Error', 'There was a problem communicating with the Steam servers.  Please try again later.' );
			$J('#login_btn_signin').show();
			$J('#login_btn_wait').hide();
			_this.m_bLoginInFlight = false;
		});
};

// used to get mobile client to execute a steammobile URL
CLoginPromptManager.prototype.RunLocalURL = function(url)
{
	var $IFrame = $J('<iframe/>', {src: url} );
	$J(document.body).append( $IFrame );

	// take it back out immediately
	$IFrame.remove();
};

// read results from Android client
CLoginPromptManager.prototype.GetValueFromLocalURL = function( url )
{
	window.g_status = null;
	window.g_data = null;
	this.RunLocalURL( url );

	var timeoutTime = Date.now() + 1000 * 5;

	while ( true )
	{
		status = window.SGHandler.getResultStatus();
		if ( status && status != 'busy' )
		{
			value = window.SGHandler.getResultValue();
			return [ status, value ];
		}
		if ( Date.now() > timeoutTime )
		{
			return ['error', 'timeout'];
		}
	}
};

// this function is invoked by iOS after the steammobile:// url is triggered by GetAuthCode.
//	we post an event to the dom to let any login handlers deal with it.
function receiveAuthCode( code )
{
	$J(document).trigger( 'SteamMobile_ReceiveAuthCode', [ code ] );
};

CLoginPromptManager.prototype.GetAuthCode = function( results )
{
	if ( this.m_bIsMobile )
	{
		if ( this.BIsIos() )
		{
			this.RunLocalURL( "steammobile://twofactorcode?gid=" + results.token_gid );

			// this is expected to trigger receiveAuthCode and we'll have this value set by the time it's done
			if ( this.m_sAuthCode.length > 0 )
				return this.m_sAuthCode;
		}
		else if ( this.BIsAndroid() )
		{
			var result = this.GetValueFromLocalURL( "steammobile://twofactorcode?gid=" + results.token_gid );
			if ( result[0] == 'ok' )
				return result[1];
		}

		// this may be in the modal
		return $J('#twofactorcode_entry').val();
	}
	else
	{
		var authCode = this.m_sAuthCode;
		this.m_sAuthCode = '';
		return authCode;
	}
};


CLoginPromptManager.prototype.OnRSAKeyResponse = function( results )
{
	if ( results.publickey_mod && results.publickey_exp && results.timestamp )
	{
		var form = this.m_$LogonForm[0];

		var pubKey = RSA.getPublicKey( results.publickey_mod, results.publickey_exp );
		var username = form.elements['username'].value;
		username = username.replace( /[^\x00-\x7F]/g, '' ); // remove non-standard-ASCII characters
		var password = form.elements['password'].value;
		password = password.replace( /[^\x00-\x7F]/g, '' ); // remove non-standard-ASCII characters
		var encryptedPassword = RSA.encrypt( password, pubKey );

		var rgParameters = {
			password: encryptedPassword,
			username: username,
			twofactorcode: this.GetAuthCode( results ),
			emailauth: form.elements['emailauth'] ? form.elements['emailauth'].value : '',
			loginfriendlyname: form.elements['loginfriendlyname'] ? form.elements['loginfriendlyname'].value : '',
			captchagid: this.m_gidCaptcha,
			captcha_text: form.elements['captcha_text'] ? form.elements['captcha_text'].value : '',
			emailsteamid: this.m_steamidEmailAuth,
			rsatimestamp: results.timestamp,
			remember_login: ( form.elements['remember_login'] && form.elements['remember_login'].checked ) ? 'true' : 'false',
		};
		if ( this.m_bIsMobile )
			rgParameters.oauth_client_id = form.elements['oauth_client_id'].value;

		var _this = this;
		$J.post( this.m_strBaseURL + 'dologin/', this.GetParameters( rgParameters ) )
			.done( $J.proxy( this.OnLoginResponse, this ) )
			.fail( function() {
				ShowAlertDialog( 'Error', 'There was a problem communicating with the Steam servers.  Please try again later.' );

				$J('#login_btn_signin').show();
				$J('#login_btn_wait').hide();
				_this.m_bLoginInFlight = false;
			});
	}
	else
	{
		if ( results.message )
		{
			this.HighlightFailure( results.message );
		}

		$J('#login_btn_signin').show();
		$J('#login_btn_wait').hide();

		this.m_bLoginInFlight = false;
	}
};

CLoginPromptManager.prototype.OnLoginResponse = function( results )
{
	this.m_bLoginInFlight = false;
	var bRetry = true;

	if ( results.login_complete )
	{
		if ( this.m_bIsMobile && results.oauth )
		{
			if( results.redirect_uri )
			{
				this.m_sOAuthRedirectURI = results.redirect_uri;
			}

			this.$LogonFormElement('oauth' ).val( results.oauth );
			bRetry = false;
			this.LoginComplete();
			return;
		}

		var bRunningTransfer = false;
		if ( results.transfer_url && results.transfer_parameters )
		{
			bRunningTransfer = true;
			this.TransferLogin( results.transfer_url, results.transfer_parameters );
		}

		if ( this.m_bInEmailAuthProcess )
		{
			this.m_bEmailAuthSuccessful = true;
			this.SetEmailAuthModalState( 'success' );
		}
		else if ( this.m_bInTwoFactorAuthProcess )
		{
			this.m_bTwoFactorAuthSuccessful = true;
			this.SetTwoFactorAuthModalState( 'success' );
		}
		else
		{
			bRetry = false;
			if ( !bRunningTransfer )
				this.LoginComplete();
		}
	}
	else
	{
		// if there was some kind of other error while doing email auth or twofactor, make sure
		//	the modals don't get stuck
		if ( !results.emailauth_needed && this.m_EmailAuthModal )
			this.m_EmailAuthModal.Dismiss();

		if ( !results.requires_twofactor && this.m_TwoFactorModal )
			this.m_TwoFactorModal.Dismiss();

		if ( results.requires_twofactor )
		{
			$J('#captcha_entry').hide();

			if ( !this.m_bInTwoFactorAuthProcess )
				this.StartTwoFactorAuthProcess();
			else
				this.SetTwoFactorAuthModalState( 'incorrectcode' );
		}
		else if ( results.captcha_needed && results.captcha_gid )
		{
			this.UpdateCaptcha( results.captcha_gid );
			this.m_iIncorrectLoginFailures ++;
		}
		else if ( results.emailauth_needed )
		{
			if ( results.emaildomain )
				$J('#emailauth_entercode_emaildomain').text( results.emaildomain );

			if ( results.emailsteamid )
				this.m_steamidEmailAuth = results.emailsteamid;

			if ( !this.m_bInEmailAuthProcess )
				this.StartEmailAuthProcess();
			else
				this.SetEmailAuthModalState( 'incorrectcode' );
		}
		else if ( results.denied_ipt )
		{
			ShowDialog( 'Intel&reg; Identity Protection Technology', this.m_$ModalIPT.show() ).always( $J.proxy( this.ClearLoginForm, this ) );
		}
		else
		{
			this.m_iIncorrectLoginFailures ++;
		}

		if ( results.message )
		{
			this.HighlightFailure( results.message );
			if ( this.m_bIsMobile && this.m_iIncorrectLoginFailures > 1 && !results.emailauth_needed && !results.bad_captcha )
			{
				// 2 failed logins not due to Steamguard or captcha, un-obfuscate the password field
				$J( '#passwordclearlabel' ).show();
				$J( '#steamPassword' ).val('');
				$J( '#steamPassword' ).attr( 'type', 'text' );
			}
		}
	}
	if ( bRetry )
	{
		$J('#login_btn_signin').show();
		$J('#login_btn_wait').hide();
	}
};

CLoginPromptManager.prototype.ClearLoginForm = function()
{
	var rgElements = this.m_$LogonForm[0].elements;
	rgElements['username'].value = '';
	rgElements['password'].value = '';
	if ( rgElements['emailauth'] ) rgElements['emailauth'].value = '';
	this.m_steamidEmailAuth = '';

	// part of the email auth modal
	$J('#authcode').value = '';

	if ( this.m_gidCaptcha )
		this.RefreshCaptcha();

	rgElements['username'].focus();
};

CLoginPromptManager.prototype.StartEmailAuthProcess = function()
{
	this.m_bInEmailAuthProcess = true;

	this.SetEmailAuthModalState( 'entercode' );

	if ( !this.m_bIsMobile )
	{
		var _this = this;
		this.m_EmailAuthModal = ShowDialog( 'Steam Guard', this.m_$ModalAuthCode.show() )
			.always( function() {
				$J(document.body).append( _this.m_$ModalAuthCode.hide() );
				_this.CancelEmailAuthProcess();
				_this.m_EmailAuthModal = null;
			} );

		this.m_EmailAuthModal.SetDismissOnBackgroundClick( false );
		this.m_EmailAuthModal.SetRemoveContentOnDismissal( false );
	}
};

CLoginPromptManager.prototype.CancelEmailAuthProcess = function()
{
	this.m_steamidEmailAuth = '';
	if ( this.m_bInEmailAuthProcess )
	{
		this.m_bInEmailAuthProcess = false;

		// if the user closed the auth window on the last step, just redirect them like we normally would
		if ( this.m_bEmailAuthSuccessful )
			this.LoginComplete();
	}
};

CLoginPromptManager.prototype.TransferLogin = function( url, parameters )
{
	if ( this.m_bLoginTransferInProgress )
		return;
	this.m_bLoginTransferInProgress = true;

	var $IFrame = $J('<iframe>', {id: 'transfer_iframe' } ).hide();
	$J(document.body).append( $IFrame );

	var doc = $IFrame[0].contentWindow.document;
	doc.open();
	doc.write( '<form method="POST" action="' + url + '" name="transfer_form">' );
	for ( var param in parameters )
	{
		doc.write( '<input type="hidden" name="' + param + '" value="' + parameters[param] + '">' );
	}
	doc.write( '</form>' );
	doc.write( '<script>window.onload = function(){ document.forms["transfer_form"].submit(); }</script>' );
	doc.close();

	var cLoadCount = 1;
	var fnOnComplete = $J.proxy( this.OnTransferComplete, this );

	//TODO: use messaging?
	$IFrame.on( 'load', function( event ) { if ( --cLoadCount == 0 ) fnOnComplete(); } );
	$IFrame.on( 'error', function( event ) { fnOnComplete(); } );

	// after 10 seconds, give up on waiting for transfer
	window.setTimeout( fnOnComplete, 10000 );
};

CLoginPromptManager.prototype.OnTransferComplete = function()
{
	if ( !this.m_bLoginTransferInProgress )
		return;
	this.m_bLoginTransferInProgress = false;
	if ( !this.m_bInEmailAuthProcess && !this.m_bInTwoFactorAuthProcess )
		this.LoginComplete();
	else if ( this.m_bEmailAuthSuccessfulWantToLeave || this.m_bTwoFactorAuthSuccessfulWantToLeave)
		this.LoginComplete();
};

CLoginPromptManager.prototype.OnEmailAuthSuccessContinue = function()
{
	if ( !this.m_bIsMobile )
	{
				$J('#auth_buttonsets').children().hide();
		$J('#auth_buttonset_waiting').show();
	}
	if ( this.m_bLoginTransferInProgress )
	{
		this.m_bEmailAuthSuccessfulWantToLeave = true;
	}
	else
		this.LoginComplete();
};

CLoginPromptManager.prototype.LoginComplete = function()
{
	if ( this.m_fnOnSuccess )
	{
		this.m_fnOnSuccess();
	}
	else if ( $J('#openidForm').length )
	{
				$J('#openidForm').submit();
	}
	else if ( this.m_bIsMobile )
	{
				if ( document.forms['logon'].elements['oauth'] && ( document.forms['logon'].elements['oauth'].value.length > 0 ) )
		{
			window.location = this.m_sOAuthRedirectURI + '?' + document.forms['logon'].elements['oauth'].value;
		}
	}
	else
	{
		window.location = this.m_strRedirectURL;
	}
};

CLoginPromptManager.prototype.SubmitAuthCode = function()
{
	$J('#auth_details_computer_name').css('color', '85847f' );	//TODO
	$J('#auth_buttonsets').children().hide();
	$J('#auth_buttonset_waiting').show();

	if ( !this.m_bIsMobile )
	{
		this.$LogonFormElement( 'loginfriendlyname' ).val( $J('#friendlyname').val() );
		this.$LogonFormElement( 'emailauth' ).val( $J('#authcode').val() );
	}
	this.DoLogin();
};

CLoginPromptManager.prototype.SetEmailAuthModalState = function( step )
{
	if ( step == 'submit' )
	{
		this.SubmitAuthCode();
		return;
	}
	else if ( step == 'complete' )
	{
		this.OnEmailAuthSuccessContinue();
		return;
	}

	if ( this.m_bIsMobile )
	{
		if ( step == 'entercode' )
		{
			$J('#emailauth').show();
			$J('#emailauthlabel').show();
		}
		else if ( step == 'success' )
		{
			this.OnEmailAuthSuccessContinue();
		}
	}
	else
	{
		$J('#auth_messages').children().hide();
		$J('#auth_message_' + step ).show();

		$J('#auth_details_messages').children().hide();
		$J('#auth_details_' + step ).show();

		$J('#auth_buttonsets').children().hide();
		$J('#auth_buttonset_' + step ).show();

		$J('#authcode_help_supportlink').hide();

		var icon='key';
		var bShowAuthcodeEntry = true;
		if ( step == 'entercode' )
		{
			icon = 'key';
		}
		else if ( step == 'checkspam' )
		{
			icon = 'trash';
		}
		else if ( step == 'success' )
		{
			icon = 'unlock';
			bShowAuthcodeEntry = false;
			$J('#success_continue_btn').focus();
			this.m_EmailAuthModal.SetDismissOnBackgroundClick( true );
			this.m_EmailAuthModal.always( $J.proxy( this.LoginComplete, this ) );
		}
		else if ( step == 'incorrectcode' )
		{
			icon = 'lock';
		}
		else if ( step == 'help' )
		{
			icon = 'steam';
			bShowAuthcodeEntry = false;
			$J('#authcode_help_supportlink').show();
		}

		if ( bShowAuthcodeEntry )
		{
			$J('#authcode_entry').show();
			$J('#auth_details_computer_name').show();
		}
		else
		{
			$J('#authcode_entry').hide();
			$J('#auth_details_computer_name').hide();
		}

		$J('#auth_icon').attr('class', 'auth_icon auth_icon_' + icon );

	}
};

CLoginPromptManager.prototype.StartTwoFactorAuthProcess = function()
{
	this.m_bInTwoFactorAuthProcess = true;
	this.SetTwoFactorAuthModalState( 'entercode' );

	if ( !this.m_bIsMobile )
	{

		var _this = this;
		this.m_TwoFactorModal = ShowDialog( 'Two-Factor Authentication', this.m_$ModalTwoFactor.show() )
			.fail( function() { _this.CancelTwoFactorAuthProcess(); } )
			.always( function() {
				$J(document.body).append( _this.m_$ModalTwoFactor.hide() );
				_this.m_bInTwoFactorAuthProcess = false;
				_this.m_TwoFactorModal = null;
			} );

		this.m_TwoFactorModal.SetDismissOnBackgroundClick( false );
		this.m_TwoFactorModal.SetRemoveContentOnDismissal( false );
	}
	$J('#twofactorcode_entry').focus();
};


CLoginPromptManager.prototype.CancelTwoFactorAuthProcess = function()
{
	this.m_bInTwoFactorAuthProcess = false;

	if ( this.m_bTwoFactorAuthSuccessful )
		this.LoginComplete();
	else
		this.ClearLoginForm();
}


CLoginPromptManager.prototype.OnTwoFactorAuthSuccessContinue = function()
{
	if ( !this.m_bIsMobile )
	{
		$J('#login_twofactorauth_buttonsets').children().hide();
		$J('#login_twofactorauth_buttonset_waiting').show();
	}

	if ( this.m_bLoginTransferInProgress )
	{
		this.m_bTwoFactorAuthSuccessfulWantToLeave = true;
	}
	else
	{
		this.LoginComplete();
	}
}

CLoginPromptManager.prototype.SetTwoFactorAuthModalState = function( step )
{
	if ( step == 'submit' )
	{
		$J('#login_twofactor_authcode_entry').hide();
		this.SubmitTwoFactorCode();
		return;
	}
	else if ( step == 'success' )
	{
		this.OnTwoFactorAuthSuccessContinue();
		return;
	}

	if ( this.m_bIsMobile )
	{
		// mobile, just show the field
		if ( step == 'entercode' )
		{
			$J('#twofactorcode_entry').show();
			$J('#twofactorauthlabel').show();
		}
	}
	else
	{
		$J('#login_twofactorauth_messages').children().hide();
		$J('#login_twofactorauth_message_' + step ).show();

		$J('#login_twofactorauth_details_messages').children().hide();
		$J('#login_twofactorauth_details_' + step ).show();

		$J('#login_twofactorauth_buttonsets').children().hide();
		$J('#login_twofactorauth_buttonset_' + step ).show();

		$J('#login_twofactor_authcode_help_supportlink').hide();

		var icon = 'key';
		if ( step == 'entercode' )
		{
			$J('#login_twofactor_authcode_entry').show();
			$J('#twofactorcode_entry').focus();
		}
		else if ( step == 'incorrectcode' )
		{
			icon = 'lock';
			$J('#login_twofactor_authcode_entry').show();
			$J('#twofactorcode_entry').focus();
		}
		else if ( step == 'help' )
		{
			icon = 'steam';
			$J('#login_twofactor_authcode_entry').hide();
			$J('#login_twofactor_authcode_help_supportlink').show();
		}

		$J('#login_twofactorauth_icon').attr( 'class', 'auth_icon auth_icon_' + icon );
	}
}

CLoginPromptManager.prototype.SubmitTwoFactorCode = function()
{
	this.m_sAuthCode = $J('#twofactorcode_entry').val();


	$J('#login_twofactorauth_messages').children().hide();
	$J('#login_twofactorauth_details_messages').hide();

	$J('#login_twofactorauth_buttonsets').children().hide();
	$J('#login_twofactorauth_buttonset_waiting').show();

	this.DoLogin();
}

CLoginPromptManager.sm_$Modals = null;	// static
CLoginPromptManager.prototype.GetModalContent = function( strModalType )
{
	if ( !CLoginPromptManager.sm_$Modals )
	{
				CLoginPromptManager.sm_$Modals = $J( "<div data-login-modal-name=\"loginAuthCodeModal\" class=\"login_modal\">\r\n\t<form data-ajax=\"false\">\r\n\t\t<div class=\"auth_message_area\">\r\n\t\t\t<div id=\"auth_icon\" class=\"auth_icon auth_icon_key\">\r\n\t\t\t<\/div>\r\n\t\t\t<div class=\"auth_messages\" id=\"auth_messages\">\r\n\t\t\t\t<div class=\"auth_message\" id=\"auth_message_entercode\" style=\"display: none;\">\r\n\t\t\t\t\t<div class=\"auth_modal_h1\">Hello!<\/div>\r\n\t\t\t\t\t<p>We see you're logging in to Steam from a new browser or a new computer.  Or maybe it's just been a while...<\/p>\r\n\t\t\t\t<\/div>\r\n\t\t\t\t<div class=\"auth_message\" id=\"auth_message_checkspam\" style=\"display: none;\">\r\n\t\t\t\t\t<div class=\"auth_modal_h1\">Mistaken for spam?<\/div>\r\n\t\t\t\t\t<p>Did you check your spam folder?  If you don't see a recent message from Steam Support in your inbox, try looking there.<\/p>\r\n\t\t\t\t<\/div>\r\n\t\t\t\t<div class=\"auth_message\" id=\"auth_message_success\" style=\"display: none;\">\r\n\t\t\t\t\t<div class=\"auth_modal_h1\">Success!<\/div>\r\n\t\t\t\t\t<p>You now have access to your Steam account here.<\/p>\r\n\t\t\t\t<\/div>\r\n\t\t\t\t<div class=\"auth_message\" id=\"auth_message_incorrectcode\" style=\"display: none;\">\r\n\t\t\t\t\t<div class=\"auth_modal_h1\">Whoops!<\/div>\r\n\t\t\t\t\t<p>Sorry but, <br>that isn't quite right...<\/p>\r\n\t\t\t\t<\/div>\r\n\t\t\t\t<div class=\"auth_message\" id=\"auth_message_help\" style=\"display: none;\">\r\n\t\t\t\t\t<div class=\"auth_modal_h1\">Let us help!<\/div>\r\n\t\t\t\t\t<p>Sorry you're having trouble.  We know your Steam account is valuable to you, and we're committed to helping you keep access to it in the right hands.<\/p>\r\n\t\t\t\t<\/div>\r\n\t\t\t<\/div>\r\n\t\t<\/div>\r\n\t\t<div id=\"auth_details_messages\" class=\"auth_details_messages\">\r\n\t\t\t<div class=\"auth_details\" id=\"auth_details_entercode\" style=\"display: none;\">\r\n\t\t\t\tAs an added account security measure, you\u2019ll need to grant access to this browser by entering the special code we\u2019ve just sent to your email address at <span id=\"emailauth_entercode_emaildomain\"><\/span>.\t\t\t<\/div>\r\n\t\t\t<div class=\"auth_details\" id=\"auth_details_success\" style=\"display: none;\">\r\n\t\t\t\tIf this is a public computer, be sure to log out of Steam when you're ready to quit this browser session.\t\t\t<\/div>\r\n\t\t\t<div class=\"auth_details\" id=\"auth_details_help\" style=\"display: none;\">\r\n\t\t\t\tPlease contact Steam Support for assistance from a member of our staff.  Legitimate claims for help with account access are our number one priority.\t\t\t<\/div>\r\n\t\t<\/div>\r\n\t\t<div class=\"authcode_entry_area\">\r\n\t\t\t<div id=\"authcode_entry\">\r\n\t\t\t\t<div class=\"authcode_entry_box\">\r\n\t\t\t\t\t<input class=\"authcode_entry_input authcode_placeholder\" id=\"authcode\" type=\"text\" value=\"\"\r\n\t\t\t\t\t\t   placeholder=\"enter your code here\">\r\n\r\n\t\t\t\t<\/div>\r\n\t\t\t<\/div>\r\n\t\t\t<div id=\"authcode_help_supportlink\">\r\n\t\t\t\t<a href=\"https:\/\/support.steampowered.com\/kb_article.php?ref=4020-ALZM-5519\" data-ajax=\"false\" data-externallink=\"1\">Contact Steam Support for help with account access<\/a>\r\n\t\t\t<\/div>\r\n\t\t<\/div>\r\n\t\t<div class=\"modal_buttons\" id=\"auth_buttonsets\">\r\n\t\t\t<div class=\"auth_buttonset\" id=\"auth_buttonset_entercode\" style=\"display: none;\">\r\n\t\t\t\t<div data-modalstate=\"submit\" class=\"auth_button leftbtn\">\r\n\t\t\t\t\t<div class=\"auth_button_h3\">Submit<\/div>\r\n\t\t\t\t\t<div class=\"auth_button_h5\">my special access code<\/div>\r\n\t\t\t\t<\/div>\r\n\t\t\t\t<div data-modalstate=\"checkspam\" class=\"auth_button\">\r\n\t\t\t\t\t<div class=\"auth_button_h3\">What message?<\/div>\r\n\t\t\t\t\t<div class=\"auth_button_h5\">I don't have any message from Steam Support...<\/div>\r\n\t\t\t\t<\/div>\r\n\t\t\t\t<div style=\"clear: left;\"><\/div>\r\n\t\t\t<\/div>\r\n\t\t\t<div class=\"auth_buttonset\" id=\"auth_buttonset_checkspam\" style=\"display: none;\">\r\n\t\t\t\t<div data-modalstate=\"submit\" class=\"auth_button leftbtn\">\r\n\t\t\t\t\t<div class=\"auth_button_h3\">Found it!<\/div>\r\n\t\t\t\t\t<div class=\"auth_button_h5\">and I've entered my special access code above<\/div>\r\n\t\t\t\t<\/div>\r\n\t\t\t\t<div data-modalstate=\"help\"  class=\"auth_button\">\r\n\t\t\t\t\t<div class=\"auth_button_h3\">No luck still...<\/div>\r\n\t\t\t\t\t<div class=\"auth_button_h5\">I don't have any message from Steam Support...<\/div>\r\n\t\t\t\t<\/div>\r\n\t\t\t\t<div style=\"clear: left;\"><\/div>\r\n\t\t\t<\/div>\r\n\t\t\t<div class=\"auth_buttonset\" id=\"auth_buttonset_success\" style=\"display: none;\">\r\n\t\t\t\t<div class=\"auth_button auth_button_spacer\">\r\n\t\t\t\t<\/div>\r\n\t\t\t\t<button type=\"button\" data-modalstate=\"complete\" class=\"auth_button\" id=\"success_continue_btn\">\r\n\t\t\t\t\t<div class=\"auth_button_h3\">Proceed to Steam!<\/div>\r\n\t\t\t\t\t<div class=\"auth_button_h5\">&nbsp;<br>&nbsp;<\/div>\r\n\t\t\t\t<\/button>\r\n\t\t\t\t<div style=\"clear: left;\"><\/div>\r\n\t\t\t<\/div>\r\n\t\t\t<div class=\"auth_buttonset\" id=\"auth_buttonset_incorrectcode\" style=\"display: none;\">\r\n\t\t\t\t<div data-modalstate=\"submit\" class=\"auth_button leftbtn\">\r\n\t\t\t\t\t<div class=\"auth_button_h3\">I want to try again<\/div>\r\n\t\t\t\t\t<div class=\"auth_button_h5\">and I've re-entered my special access code above<\/div>\r\n\t\t\t\t<\/div>\r\n\t\t\t\t<div data-modalstate=\"help\" class=\"auth_button\">\r\n\t\t\t\t\t<div class=\"auth_button_h3\">Please help<\/div>\r\n\t\t\t\t\t<div class=\"auth_button_h5\">I think I need assistance from Steam Support...<\/div>\r\n\t\t\t\t<\/div>\r\n\t\t\t\t<div style=\"clear: left;\"><\/div>\r\n\t\t\t<\/div>\r\n\t\t\t<div class=\"auth_buttonset\" id=\"auth_buttonset_waiting\" style=\"display: none;\">\r\n\t\t\t<\/div>\r\n\t\t<\/div>\r\n\t\t<div style=\"\" id=\"auth_details_computer_name\" class=\"auth_details_messages\">\r\n\t\t\tTo easily recognize this browser among the list of devices Steam Guard has enabled, give the browser a friendly name - at least 6 characters long.\t\t\t<div id=\"friendly_name_box\" class=\"friendly_name_box\">\r\n\t\t\t\t<input class=\"authcode_entry_input authcode_placeholder\" id=\"friendlyname\" type=\"text\"\r\n\t\t\t\t\t   placeholder=\"enter a friendly name here\">\r\n\t\t\t<\/div>\r\n\t\t<\/div>\r\n\t<\/form>\r\n<\/div>\r\n\r\n<div data-login-modal-name=\"loginIPTModal\" class=\"login_modal\">\r\n\t<div class=\"auth_message_area\">\r\n\t\t<div id=\"\" class=\"auth_icon ipt_icon\">\r\n\t\t<\/div>\r\n\t\t<div class=\"auth_messages\" id=\"\">\r\n\t\t\t<div class=\"auth_message\" id=\"\" >\r\n\t\t\t\t<div class=\"auth_modal_h1\">Sorry<\/div>\r\n\t\t\t\t<p>This account can't be accessed from this computer without additional authorization.<\/p>\r\n\t\t\t<\/div>\r\n\t\t<\/div>\r\n\t<\/div>\r\n\t<div id=\"\" class=\"auth_details_messages\">\r\n\t\t<div class=\"auth_details\">\r\n\t\t\tPlease contact Steam Support to have a member of our staff assist you.  Legitimate claims for help with account access are our number one priority.\t\t<\/div>\r\n\t<\/div>\r\n\t<div class=\"authcode_entry_area\">\r\n\t<\/div>\r\n\t<div class=\"modal_buttons\" id=\"\">\r\n\t\t<div class=\"auth_buttonset\" >\r\n\t\t\t<a href=\"https:\/\/support.steampowered.com\/kb_article.php?ref=9400-IPAX-9398&auth=e39b5c227cffc8ae65414aba013e5fef\" class=\"auth_button leftbtn\" data-ajax=\"false\" data-externallink=\"1\">\r\n\t\t\t\t<div class=\"auth_button_h3\">Learn more<\/div>\r\n\t\t\t\t<div class=\"auth_button_h5\">about Intel&reg; Identity Protection Technology<\/div>\r\n\t\t\t<\/a>\r\n\t\t\t<a href=\"https:\/\/support.steampowered.com\" class=\"auth_button\" data-ajax=\"false\" data-externallink=\"1\">\r\n\t\t\t\t<div class=\"auth_button_h3\">Please help<\/div>\r\n\t\t\t\t<div class=\"auth_button_h5\">I think I need assistance from Steam Support...<\/div>\r\n\t\t\t<\/a>\r\n\t\t\t<div style=\"clear: left;\"><\/div>\r\n\t\t<\/div>\r\n\t<\/div>\r\n<\/div>\r\n\r\n\r\n\r\n<div data-login-modal-name=\"loginTwoFactorCodeModal\" class=\"login_modal\">\r\n\t<div class=\"twofactorauth_message_area\">\r\n\t\t<div id=\"login_twofactorauth_icon\" class=\"auth_icon auth_icon_key\">\r\n\t\t<\/div>\r\n\t\t<div class=\"twofactorauth_messages\" id=\"login_twofactorauth_messages\">\r\n\t\t\t<div class=\"twofactorauth_message\" id=\"login_twofactorauth_message_entercode\" style=\"display: none;\">\r\n\t\t\t\t<div class=\"auth_modal_h1\">Hello!<\/div>\r\n\t\t\t\t<p>We see you're logging in to Steam and you have Steam Guard two-factor authentication turned on.<\/p>\r\n\t\t\t<\/div>\r\n\t\t\t<div class=\"twofactorauth_message\" id=\"login_twofactorauth_message_incorrectcode\" style=\"display: none;\">\r\n\t\t\t\t<div class=\"auth_modal_h1\">Whoops!<\/div>\r\n\t\t\t\t<p>Sorry but, <br>that isn't quite right...<\/p>\r\n\t\t\t<\/div>\r\n\t\t\t<div class=\"twofactorauth_message\" id=\"login_twofactorauth_message_help\" style=\"display: none;\">\r\n\t\t\t\t<div class=\"auth_modal_h1\">Let us help!<\/div>\r\n\t\t\t\t<p>Sorry you're having trouble.  We know your Steam account is valuable to you, and we're committed to helping you keep access to it in the right hands.<\/p>\r\n\t\t\t<\/div>\r\n\t\t<\/div>\r\n\t<\/div>\r\n\t<div id=\"login_twofactorauth_details_messages\" class=\"twofactorauth_details_messages\">\r\n\t\t<div class=\"twofactorauth_details\" id=\"login_twofactorauth_details_entercode\" style=\"display: none;\">\r\n\t\t\tAs an added account security measure, you'll need to enter the most recent code generated by the Steam Mobile app on your phone.\t\t<\/div>\r\n\t\t<div class=\"twofactorauth_details\" id=\"login_twofactorauth_details_help\" style=\"display: none;\">\r\n\t\t\tPlease contact Steam Support for assistance from a member of our staff.  Legitimate claims for help with account access are our number one priority.\t\t<\/div>\r\n\t<\/div>\r\n\t<div class=\"twofactorauthcode_entry_area\">\r\n\t\t<div id=\"login_twofactor_authcode_entry\">\r\n\t\t\t<div class=\"twofactorauthcode_entry_box\">\r\n\t\t\t\t<form>\r\n\t\t\t\t\t<input class=\"twofactorauthcode_entry_input authcode_placeholder\" id=\"twofactorcode_entry\" type=\"text\"\r\n\t\t\t\t\t\t   placeholder=\"enter your code here\">\r\n\t\t\t\t<\/form>\r\n\t\t\t<\/div>\r\n\t\t<\/div>\r\n\t\t<div id=\"login_twofactor_authcode_help_supportlink\">\r\n\t\t\t<a href=\"https:\/\/support.steampowered.com\/kb_article.php?ref=4020-ALZM-5519\">\r\n\t\t\t\tContact Steam Support for help with account access\t\t\t<\/a>\r\n\t\t<\/div>\r\n\t<\/div>\r\n\t<div class=\"modal_buttons\" id=\"login_twofactorauth_buttonsets\">\r\n\t\t<div class=\"auth_buttonset\" id=\"login_twofactorauth_buttonset_entercode\" style=\"display: none;\">\r\n\t\t\t<div class=\"auth_button leftbtn\" data-modalstate=\"submit\">\r\n\t\t\t\t<div class=\"auth_button_h3\">Submit<\/div>\r\n\t\t\t\t<div class=\"auth_button_h5\">my special access code<\/div>\r\n\t\t\t<\/div>\r\n\t\t\t<div style=\"clear: left;\"><\/div>\r\n\t\t<\/div>\r\n\t\t<div class=\"auth_buttonset\" id=\"login_twofactorauth_buttonset_incorrectcode\" style=\"display: none;\">\r\n\t\t\t<div class=\"auth_button leftbtn\" data-modalstate=\"submit\">\r\n\t\t\t\t<div class=\"auth_button_h3\">I want to try again<\/div>\r\n\t\t\t\t<div class=\"auth_button_h5\">and I've re-entered my special access code above<\/div>\r\n\t\t\t<\/div>\r\n\t\t\t<div class=\"auth_button\" data-modalstate=\"help\">\r\n\t\t\t\t<div class=\"auth_button_h3\">Please help<\/div>\r\n\t\t\t\t<div class=\"auth_button_h5\">I think I need assistance from Steam Support...<\/div>\r\n\t\t\t<\/div>\r\n\t\t\t<div style=\"clear: left;\"><\/div>\r\n\t\t<\/div>\r\n\t\t<div class=\"auth_buttonset\" id=\"login_twofactorauth_buttonset_waiting\" style=\"display: none;\">\r\n\t\t<\/div>\r\n\t<\/div>\r\n<\/div>" );
	}

	var $ModalContent = CLoginPromptManager.sm_$Modals.filter( function() { return $J(this ).data('login-modal-name') == strModalType; } );

	if ( this.m_bIsMobileSteamClient )
	{
		$ModalContent.find('a[data-externallink]' ).each( function() {
			$J(this).attr( 'href', 'steammobile://openexternalurl?url=' + $J(this).data('href') );
		});
	}

	return $ModalContent;
};

