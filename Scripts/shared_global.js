
Steam = {
	sm_bInitialized: false,
	sm_bUserInClient: false,
	sm_bUserInGameOverlay: false,
	sm_bUserInTenfootBrowser: false,

	BIsUserInSteamClient: function()
	{
		if ( !Steam.sm_bInitialized )
			Steam.Init();

		return Steam.sm_bUserInClient;
	},

	BIsUserInGameOverlay: function()
	{
		if ( !Steam.sm_bInitialized )
			Steam.Init();

		return Steam.sm_bUserInGameOverlay
	},

	BIsUserInSteamTenfootBrowser: function()
	{
		if ( !Steam.sm_bInitialized )
			Steam.Init();

		return Steam.sm_bUserInTenfootBrowser;
	},

	BIsUserInClientOrOverlay: function()
	{
		if ( !Steam.sm_bInitialized )
			Steam.Init();

		return Steam.sm_bUserInClient || Steam.sm_bUserInGameOverlay;
	},

	GetClientPackageVersion: function()
	{
		if ( !Steam.BIsUserInClientOrOverlay() )
			return 0;

		if ( typeof navigator != 'undefined' && navigator.userAgent )
		{
			var matches = navigator.userAgent.match( /Valve Steam [^\/]*\/([0-9]*)/ );
			if ( matches && matches.length == 2 )
				return matches[1];
		}

		return 0;
	},

	Init: function()
	{
		var fnCheckAgent = function( strUAMatch, strURLParam )
		{
			if ( window.location.href.match( '[?&]' + strURLParam + '=' ) )
				return true;

			if ( typeof navigator != 'undefined' && navigator.userAgent && navigator.userAgent.indexOf( strUAMatch ) != -1 )
				return true;

			return false;
		};

		Steam.sm_bUserInTenfootBrowser = fnCheckAgent( 'Valve Steam Tenfoot', 'force_tenfoot_client_view' );
		Steam.sm_bUserInGameOverlay = fnCheckAgent( 'Valve Steam GameOverlay', 'force_overlay_view' );
		Steam.sm_bUserInClient = Steam.sm_bUserInTenfootBrowser || fnCheckAgent( 'Valve Steam Client', 'force_client_view' );

		Steam.sm_bInitialized = true;
	},

	LinkInNewWindow: function( $A )
	{
		if ( Steam.BIsUserInSteamClient() && !Steam.BIsUserInSteamTenfootBrowser() )
			$A.attr( 'href', 'steam://openurl_external/' + $A.attr('href') );
		else
			$A.attr( 'target', '_blank' );
	},
}

function ShowConfirmDialog( strTitle, strDescription, strOKButton, strCancelButton, strSecondaryActionButton )
{
	if ( !strOKButton )
		strOKButton = 'OK';
	if ( !strCancelButton )
		strCancelButton = 'Cancel';

	var deferred = new jQuery.Deferred();
	var fnOK = function() { deferred.resolve( 'OK' ); };
	var fnSecondary = function() { deferred.resolve( 'SECONDARY' ); };
	var fnCancel = function() { deferred.reject(); };

	var rgButtons = [];

	var $OKButton = _BuildDialogButton( strOKButton, true );
	$OKButton.click( fnOK );
	rgButtons.push( $OKButton );

	if ( strSecondaryActionButton )
	{
		var $SecondaryActionButton = _BuildDialogButton( strSecondaryActionButton, false, {strClassName: ' btn_darkblue_white_innerfade btn_medium' } );
		$SecondaryActionButton.click( fnSecondary );
		rgButtons.push( $SecondaryActionButton );
	}

	var $CancelButton = _BuildDialogButton( strCancelButton );
	$CancelButton.click( fnCancel );
	rgButtons.push( $CancelButton );

	var Modal = _BuildDialog( strTitle, strDescription, rgButtons, fnCancel );
	Modal.Show();

	_BindOnEnterKeyPressForDialog( Modal, deferred, fnOK );

	deferred.always( function() { Modal.Dismiss(); } );
	// attach the deferred's events to the modal
	deferred.promise( Modal );

	return Modal;
}

function ShowAlertDialog( strTitle, strDescription, strOKButton )
{
	if ( !strOKButton )
		strOKButton = 'OK';

	var deferred = new jQuery.Deferred();
	var fnOK = function() { deferred.resolve(); };

	var $OKButton = _BuildDialogButton( strOKButton );
	$OKButton.click( fnOK );

	var Modal = _BuildDialog( strTitle, strDescription, [ $OKButton ], fnOK );
	deferred.always( function() { Modal.Dismiss(); } );
	Modal.Show();

	_BindOnEnterKeyPressForDialog( Modal, deferred, fnOK );

	// attach the deferred's events to the modal
	deferred.promise( Modal );

	return Modal;

}

// rgModalParams are documented at the CModal class declaration
function ShowDialog( strTitle, strDescription, rgModalParams )
{
	var deferred = new jQuery.Deferred();
	var fnOK = function() { deferred.resolve(); };

	var Modal = _BuildDialog( strTitle, strDescription, [], fnOK, rgModalParams );
	deferred.always( function() { Modal.Dismiss(); } );
	Modal.Show();

	// attach the deferred's events to the modal
	deferred.promise( Modal );

	return Modal;
}

function ShowPromptDialog( strTitle, strDescription, strOKButton, strCancelButton )
{
	if ( !strOKButton )
		strOKButton = 'OK';
	if ( !strCancelButton )
		strCancelButton = 'Cancel';

	var $Body = $J('<form/>');
	var $Input = $J('<input/>', {type: 'text', 'class': '' } );
	$Body.append( $J('<div/>', {'class': 'newmodal_prompt_description' } ).append( strDescription ) );
	$Body.append( $J('<div/>', {'class': 'newmodal_prompt_input gray_bevel for_text_input fullwidth' } ).append( $Input ) );

	var deferred = new jQuery.Deferred();
	var fnOK = function() { deferred.resolve( $Input.val() ); };
	var fnCancel = function() { deferred.reject(); };


	$Body.submit( function( event ) { event.preventDefault(); fnOK(); } );

	var elButtonLabel = $J( '<span/>' ).text( strOKButton );
	var $OKButton = $J('<button/>', {type: 'submit', 'class': 'btn_green_white_innerfade btn_medium' } ).append( elButtonLabel );
	$OKButton.click( fnOK );
	var $CancelButton = _BuildDialogButton( strCancelButton );
	$CancelButton.click( fnCancel );

	var Modal = _BuildDialog( strTitle, $Body, [ $OKButton, $CancelButton ], fnCancel );
	deferred.always( function() { Modal.Dismiss(); } );
	Modal.Show();

	$Input.focus();

	// attach the deferred's events to the modal
	deferred.promise( Modal );

	return Modal;
}

function ShowPromptWithTextAreaDialog( strTitle, strDescription, strOKButton, strCancelButton, textAreaMaxLength )
{
	if ( !strOKButton )
		strOKButton = 'OK';
	if ( !strCancelButton )
		strCancelButton = 'Cancel';

	var $Body = $J('<form/>');
	var $TextArea = $J('<textarea/>', { 'class': 'newmodal_prompt_textarea' } );
	$TextArea.text( strDescription );
	if ( textAreaMaxLength )
	{
		$TextArea.attr( 'maxlength', textAreaMaxLength );
		$TextArea.bind( "keyup change",
			function()
			{
				var str = $J(this).val()
				var mx = parseInt($J(this).attr('maxlength'))
				if (str.length > mx)
				{
					$J(this).val(str.substr(0, mx))
					return false;
				}
			}
		);
	}
	$Body.append( $J('<div/>', {'class': 'newmodal_prompt_with_textarea gray_bevel fullwidth ' } ).append( $TextArea ) );

	var deferred = new jQuery.Deferred();
	var fnOK = function() { deferred.resolve( $TextArea.val() ); };
	var fnCancel = function() { deferred.reject(); };


	$Body.submit( function( event ) { event.preventDefault(); fnOK(); } );

	var elButtonLabel = $J( '<span/>' ).text( strOKButton );
	var $OKButton = $J('<button/>', {type: 'submit', 'class': 'btn_green_white_innerfade btn_medium' } ).append( elButtonLabel );
	$OKButton.click( fnOK );
	var $CancelButton = _BuildDialogButton( strCancelButton );
	$CancelButton.click( fnCancel );

	var Modal = _BuildDialog( strTitle, $Body, [ $OKButton, $CancelButton ], fnCancel );
	deferred.always( function() { Modal.Dismiss(); } );
	Modal.Show();

	$TextArea.focus();

	// attach the deferred's events to the modal
	deferred.promise( Modal );

	return Modal;
}

function ShowBlockingWaitDialog( strTitle, strDescription )
{
	var deferred = new jQuery.Deferred();
	var fnOK = function() { deferred.resolve(); };

	var container = $J('<div/>', {'class': 'waiting_dialog_container'} );
	var throbber = $J('<div/>', {'class': 'waiting_dialog_throbber'} );
	container.append( throbber );
	container.append( strDescription );

	var Modal = _BuildDialog( strTitle, container, [], fnOK, { bExplicitDismissalOnly: true } );
	deferred.always( function() { Modal.Dismiss(); } );
	Modal.Show();

	// attach the deferred's events to the modal
	deferred.promise( Modal );

	return Modal;
}

function _BindOnEnterKeyPressForDialog( Modal, deferred, fnOnEnter )
{
	var fnOnKeyUp = function( event ) {
		if ( Modal.BIsActiveModal() && event.which == 13 && ( !event.target || event.target.nodeName != 'TEXTAREA' ) )
			fnOnEnter();
	};
	$J(document).on( 'keyup.SharedConfirmDialog', fnOnKeyUp );
	deferred.always( function() { $J(document).off( 'keyup.SharedConfirmDialog' ); } );
}

function _BuildDialog( strTitle, strDescription, rgButtons, fnOnCancel, rgModalParams )
{
	var $Dialog = $J('<div/>', {'class': 'newmodal'} );
	var $CloseButton = $J('<div/>', {'class': 'newmodal_close' });
	var $Header = ( $J('<div/>', {'class': 'newmodal_header' }).append( strTitle ) );
	$Header.append( $CloseButton );
	$Header = $J('<div/>', {'class': 'newmodal_header_border'}).append( $Header );
	$Dialog.append( $Header );
	var $Content = $J('<div/>', {'class': 'newmodal_content' } );
	$Content.append( $J('<div/>').append( strDescription ) );

	if ( rgButtons.length > 0 )
	{
		var $Buttons = $J('<div/>', {'class': 'newmodal_buttons' } );
		$Content.append( $Buttons );
		for( var i = 0; i < rgButtons.length; i++ )
		{
			$Buttons.append( rgButtons[i] );
		}
	}

	$Dialog.append( $J('<div/>', {'class': 'newmodal_content_border' } ).append( $Content ) );

	if ( rgModalParams && rgModalParams.bExplicitDismissalOnly )
		$CloseButton.hide();

	var Modal = new CModal( $Dialog, rgModalParams );
	if ( fnOnCancel )
	{
		Modal.OnDismiss( fnOnCancel );
		$CloseButton.click( fnOnCancel );
	}
	Modal.SetRemoveContentOnDismissal( true );

	return Modal;
}

function _BuildDialogButton( strText, bActive, rgOptions )
{
	if ( !rgOptions )
		rgOptions = {};

	var strClassName = bActive ? 'btn_green_white_innerfade btn_medium' : 'btn_grey_white_innerfade btn_medium';
	if ( rgOptions.strClassName )
		strClassName = rgOptions.strClassName;

	var elButtonLabel = $J( '<span/>' ).html( strText );
	var elButton = $J('<div/>', {'class': strClassName } ).append( elButtonLabel );
	return elButton;
}

/* modal params:
	bExplicitDismissalOnly - by default, clicking outside of the modal dismisses it.  Set this to true to override that behavior
	bIgnoreResizeEvents - don't resize the modal when the window resizes
 */

function CModal( $Content, rgParams )
{
	rgParams = rgParams || {};

	this.m_$Content = $Content;
	this.m_bVisible = false;

	this.m_bIgnoreResizeEvents = rgParams.bIgnoreResizeEvents;
	this.m_fnSizing = null;
	this.m_fnBackgroundClick = null;
	this.m_fnOnResize = null;
	this.m_bDismissOnBackgroundClick = !rgParams.bExplicitDismissalOnly;

	this.m_fnOnDismiss = null;
	this.m_bRemoveContentOnDismissal = false;

	this.m_$Content.css( 'position', 'fixed' );
	this.m_$Content.css( 'z-index', 1000 );

	this.m_$StandardContent = null;
	this.m_$SizedContent = null;
	this.OnContentChanged();	//this will look for StandardContent and SizedContent in the modal body


	var _modal = this;
	this.m_fnBackgroundClick = function() { if ( _modal.BIsActiveModal() && _modal.m_bDismissOnBackgroundClick ) { _modal.Dismiss(); } };
	this.m_fnOnEscapeKeyPress = function( event ) { if ( _modal.BIsActiveModal() && event.which == 27 ) _modal.m_fnBackgroundClick(); };
	this.m_fnSizing = function() { _modal.AdjustSizing(); };

	/* make sure the content is parented correctly */
	$J(document.body).append( this.m_$Content );
}

CModal.prototype.OnDismiss = function( fn )
{
	this.m_fnOnDismiss = fn;
}

CModal.prototype.OnResize = function( fn )
{
	this.m_fnOnResize = fn;
}

CModal.prototype.GetContent = function ()
{
	return this.m_$Content;
}

CModal.prototype.GetBoundOnResizeEvent = function()
{
	// in case someone outside needs to tell the modal to resize on certain events (eg images or iframes loading in the modal)
	return this.m_fnSizing;
}

CModal.prototype.OnContentChanged = function()
{
	// make sure we're holding the right elements
	this.m_$StandardContent = this.m_$Content.find( '.newmodal_content' );
	if ( !this.m_$StandardContent.length )
		this.m_$StandardContent = this.m_$Content;
	this.m_$SizedContent = this.m_$Content.find( '.newmodal_sized_content' );
}

CModal.prototype.SetRemoveContentOnDismissal = function ( bRemoveContent )
{
	this.m_bRemoveContentOnDismissal = bRemoveContent;
}

CModal.prototype.SetDismissOnBackgroundClick = function ( bDismissOnBackgroundClick )
{
	this.m_bDismissOnBackgroundClick = bDismissOnBackgroundClick;
}

CModal.prototype.AdjustSizing = function( duration )
{

	var nViewportWidth = $J(window).width();
	var nViewportHeight = $J(window).height();

	var nMaxWidth = Math.max( nViewportWidth - 80, 500 );
	var nMaxHeight = Math.floor( nViewportHeight - 120 );

	// if the modal has a 'newmodal_sized_content' div, it wants to be the max height, so set it now
	//	before we compute height	( "- 18" is a fudge for a possible horizontal scrollbar )
	this.m_$SizedContent.css( 'min-height', ( nMaxHeight - 18 ) + 'px' );
	if ( this.m_fnOnResize )
	{
		this.m_fnOnResize( nMaxWidth - 40, nMaxHeight );
	}

	if ( !duration )
	{
		// set sizes right away so we can calculate a good left and top
		this.m_$Content.css( 'max-width',  nMaxWidth + 'px' );
		this.m_$StandardContent.css( 'max-height',  nMaxHeight + 'px' );
	}

	var nContentWidth = this.m_$Content.width();
	var nContentHeight = this.m_$Content.height();
	var nLeft = Math.floor( ( nViewportWidth - nContentWidth ) / 2 );
	var nTop = Math.floor( ( nViewportHeight - nContentHeight ) / 2 );

	if ( duration )
	{
		this.m_$Content.animate( { 'max-width': nMaxWidth, left: nLeft, top: nTop }, duration );
		this.m_$StandardContent.animate( {'max-height': nMaxHeight }, duration );
	}
	else
	{
		this.m_$Content.css( 'left', nLeft );
		this.m_$Content.css( 'top', nTop );
	}
}

CModal.prototype.Show = function()
{
	if ( this.m_bVisible )
		return;

	CModal.ShowModalBackground();

	if ( !this.m_bIgnoreResizeEvents )
	{
		$J(window).on( 'resize', null, this.m_fnSizing );
	}
	CModal.s_$Background.on( 'click.CModal', this.m_fnBackgroundClick );
	$J(document).on( 'keyup.CModal', this.m_fnOnEscapeKeyPress );

	this.AdjustSizing();

	this.m_$Content.show();

	// resize as any child image elements load in.
	this.m_$Content.find('img').load( this.m_fnSizing );

	this.m_bVisible = true;
	CModal.PushActiveModal( this );
}

CModal.prototype.Dismiss = function()
{
	if ( !this.m_bVisible )
		return;

	this.m_bVisible = false;

	this.m_$Content.hide();

	if ( !this.m_bIgnoreResizeEvents )
	{
		$J(window).off( 'resize', null, this.m_fnSizing );
	}

	if ( this.m_fnOnDismiss )
		this.m_fnOnDismiss();

	if ( this.m_bRemoveContentOnDismissal )
	{
		this.m_$Content.remove();
		this.m_$Content = null;
	}

	CModal.PopActiveModal( this );
	if ( !CModal.s_rgModalStack.length )
	{
		CModal.s_$Background.off( 'click.CModal', this.m_fnBackgroundClick );
		$J(document).off( 'keyup.CModal', this.m_fnOnEscapeKeyPress );
		CModal.HideModalBackground();
	}
}

CModal.prototype.BIsActiveModal = function()
{
	return CModal.s_rgModalStack.length && CModal.s_rgModalStack[ CModal.s_rgModalStack.length - 1 ] == this;
}

/* static */
CModal.ShowModalBackground = function()
{
	if ( !CModal.s_$Background )
	{
		CModal.s_$Background = $J('<div/>', {style: 'position: fixed; z-index: 900; background-color: #000000; top: 0; right: 0; bottom: 0; left: 0;'});
		CModal.s_$Background.css( 'opacity', 0 );
		$J(document.body).append( CModal.s_$Background );
	}
	CModal.s_$Background.stop();	// stop running animations
	CModal.s_$Background.fadeTo( 200, 0.8 );
}

CModal.HideModalBackground = function()
{
	if ( CModal.s_$Background )
	{
		CModal.s_$Background.stop();	// stop running animations
		CModal.s_$Background.fadeOut( 200, 0 );
	}
}

CModal.s_rgModalStack = [];
CModal.DismissActiveModal = function()
{
	if ( CModal.s_rgModalStack.length )
		CModal.s_rgModalStack[CModal.s_rgModalStack.length-1].Dismiss();
}

CModal.PushActiveModal = function( Modal )
{
	for ( var i = 0; i < CModal.s_rgModalStack.length; i++ )
	{
		// push below background
		CModal.s_rgModalStack[i].m_$Content.css( 'z-index', 899 );
	}
	CModal.s_rgModalStack.push( Modal );
}

CModal.PopActiveModal = function( Modal )
{
	for ( var i = 0; i < CModal.s_rgModalStack.length; i++ )
	{
		if ( CModal.s_rgModalStack[i] == Modal )
		{
			CModal.s_rgModalStack.splice( i, 1 );
			break;
		}
	}

	if ( CModal.s_rgModalStack.length )
		CModal.s_rgModalStack[ CModal.s_rgModalStack.length - 1 ].m_$Content.css( 'z-index', 1000 );
}

// this will set the right headers for a cross-domain request to community
function GetDefaultCommunityAJAXParams( path, method )
{
	var rgParams = { url: 'https://steamcommunity.com/' + path };
	if ( method )
		rgParams.type = method;

	// if this js file was hosted off the store, add CORS request headers
	if ( window.location.href.indexOf( 'http://steamcommunity.com/' ) != 0 && window.location.href.indexOf( 'https://steamcommunity.com/' ) != 0 )
	{
		rgParams.crossDomain = true;
		rgParams.xhrFields = { withCredentials: true };
	}
	return rgParams;
}

// spped of the miniprofile fading in and out
var MINIPROFILE_ANIM_SPEED = 150;
// how long the mouse must remain over an element before we'll make an AJAX call
var MINIPROFILE_DELAY_BEFORE_AJAX = 100;
// the delay before we'll show the hover, must be longer than DELAY_BEFORE_AJAX
var MINIPROFILE_DELAY_BEFORE_SHOW = 250;

function CDelayedAJAXData( strURL, msDelayBeforeAJAX )
{
	this.m_$Data = null;
	this.m_bAJAXFailed = false;
	this.m_timerDelayedAJAX = null;
	this.m_bAJAXRequestMade = false;
	this.m_msDelayBeforeAJAX = msDelayBeforeAJAX;
	this.m_strURL = strURL;

	this.m_fnOnAJAXComplete = null;
}

CDelayedAJAXData.prototype.GetAJAXParams = function()
{
	return GetDefaultCommunityAJAXParams( this.m_strURL, 'GET' );
}

CDelayedAJAXData.prototype.QueueAjaxRequestIfNecessary = function()
{
	if ( !this.m_$Data && !this.m_bAJAXRequestMade )
	{
		var _this = this;
		this.m_timerDelayedAJAX = window.setTimeout( function() {
			_this.m_timerDelayedAJAX = null;
			_this.m_bAJAXRequestMade = true;
			var rgAJAXParams = _this.GetAJAXParams();
			$J.ajax( rgAJAXParams )
				.done( function(data) {
					_this.m_$Data = $J(data);
					if ( _this.m_fnOnAJAXComplete )
						_this.m_fnOnAJAXComplete();
				}).fail( function() {
					_this.m_bAJAXFailed = true;
				});
		}, this.m_msDelayBeforeAJAX );
	}
}

CDelayedAJAXData.prototype.CancelAJAX = function()
{
	if ( this.m_timerDelayedAJAX )
		window.clearTimeout( this.m_timerDelayedAJAX );

	this.m_fnOnAJAXComplete = null;
}

CDelayedAJAXData.prototype.RunWhenAJAXReady = function( fnOnReady )
{
	if ( this.m_$Data )
		fnOnReady();
	else if ( !this.m_bAJAXFailed )
	{
		this.m_fnOnAJAXComplete = fnOnReady;
		this.QueueAjaxRequestIfNecessary();
	}
	// if ajax failed we will not call fnOnReady
}

CDelayedAJAXData.prototype.Show = function( $HoverContent )
{
	$HoverContent.children().detach();
	$HoverContent.append( this.m_$Data );
}

function InitMiniprofileHovers()
{
	var $Hover = $J('<div/>', {'class': 'miniprofile_hover'} );
	var $HoverContent = $J('<div/>', {'class': 'miniprofile_hover_inner shadow_content'} );

	var $HoverArrowLeft = $J('<div/>', {'class': 'hover_arrow left miniprofile_arrow'} )
	$HoverArrowLeft.append( '<div class="miniprofile_arrow_inner"></div>' );
	var $HoverArrowRight = $J('<div/>', {'class': 'hover_arrow right miniprofile_arrow'} )
	$HoverArrowRight.append( '<div class="miniprofile_arrow_inner"></div>' );

	$Hover.append( $J('<div class="shadow_ul"></div><div class="shadow_top"></div><div class="shadow_ur"></div><div class="shadow_left"></div><div class="shadow_right"></div><div class="shadow_bl"></div><div class="shadow_bottom"></div><div class="shadow_br"></div>'), $HoverContent, $HoverArrowLeft, $HoverArrowRight );

	$Hover.hide();
	$J(document.body).append( $Hover );

	var fnDataFactory = function( key ) { return new CDelayedAJAXData( 'miniprofile/' + key, MINIPROFILE_DELAY_BEFORE_AJAX ); }

	var rgCallbacks = BindAJAXHovers( $Hover, $HoverContent, {
		fnDataFactory: fnDataFactory,
		fnPositionHover: PositionMiniprofileHover,
		strDataName: 'miniprofile',
		strURLMatch: 'miniprofile'
	}  );

	window.BindMiniprofileHovers = rgCallbacks.fnBindAllHoverElements;
	window.BindSingleMiniprofileHover = rgCallbacks.fnBindSingleHover;
}

function _RegisterAJAXHoverHideFunction( fnHide )
{
	if ( typeof g_rgfnHideAJAXHover == 'undefined' )
	{
		g_rgfnHideAJAXHover = [];
		$J(window).blur( HideAJAXHovers );
	}

	g_rgfnHideAJAXHover.push( fnHide );
}

function HideAJAXHovers()
{
	if ( typeof g_rgfnHideAJAXHover != 'undefined' )
	{
		for ( var i = 0; i < g_rgfnHideAJAXHover.length; i++ )
			g_rgfnHideAJAXHover[i]();
	}
}

function BindAJAXHovers( $Hover, $HoverContent, oParams )
{
	var fnDataFactory = oParams.fnDataFactory;
	var fnPositionHover = oParams.fnPositionHover || PositionMiniprofileHover;
	var strDataName = oParams.strDataName;
	var strURLMatch = oParams.strURLMatch;
	var fnReadKey = function( $Element ) { return $Element.attr( 'data-' + strDataName ); };
	if ( oParams.fnReadKey )
		fnReadKey = oParams.fnReadKey;
	var strSelector = oParams.strSelector || '[data-' + strDataName + ']';
	var nDelayBeforeShow = oParams.nDelayBeforeShow || MINIPROFILE_DELAY_BEFORE_SHOW;

	// indexed by accountid
	var rgHoverData = {};
	var HoverTarget = null;
	var timerHover = null;

	var fnOnHover = function( $Target, key ) {

		var bHoverVisible = ( $Hover.css('display') != 'none' );

		var HoverData = rgHoverData[key];
		if ( !HoverData )
		{
			HoverData = rgHoverData[key] = fnDataFactory( key );
		}

		if ( HoverTarget == HoverData && bHoverVisible )
		{
			//really only want to do this while fading out
			$Hover.stop();
			fnPositionHover( $Hover, $Target );
			$Hover.show();	// PositionMiniprofile toggles visibility
			$Hover.fadeTo( MINIPROFILE_ANIM_SPEED, 1.0 );
		}
		else if ( !timerHover || HoverData != HoverTarget )
		{
			// this is the new target
			if ( HoverTarget && HoverTarget != HoverData )
				HoverTarget.CancelAJAX();
			HoverTarget = HoverData;

			if ( timerHover )
			{
				window.clearTimeout( timerHover )
				timerHover = null;
			}

			HoverData.QueueAjaxRequestIfNecessary();

			timerHover = window.setTimeout( function() {
				window.clearTimeout( timerHover );
				timerHover = null;

				HoverData.RunWhenAJAXReady( function() {
					HoverData.Show( $HoverContent );
					$Hover.stop();
					$Hover.css( 'opacity', '' ); //clean up jquery animation
					fnPositionHover( $Hover, $Target );
					$Hover.fadeIn( MINIPROFILE_ANIM_SPEED );
				} );
			}, nDelayBeforeShow );
		}
	};

	var fnCancelHover = function( key )
	{
		var bHoverVisible = ( $Hover.css('display') != 'none' );

		if ( key )
		{
			var HoverData = rgHoverData[key];
			if ( HoverData )
			{
				HoverData.CancelAJAX();
			}
		}

		if ( timerHover )
		{
			window.clearTimeout( timerHover );
			timerHover = null;
		}

		if ( bHoverVisible )
		{
			$Hover.stop();
			$Hover.fadeOut( MINIPROFILE_ANIM_SPEED );
		}
	}

	var strAttributeName = 'data-' + strDataName;
	var strBoundDataName = strDataName + '_bound';
	var fnBindSingleHover = function( target ) {
		var $Target = $J(target);
		var key = fnReadKey( $Target );
		if ( key && !$Target.data( strBoundDataName ) )
		{
			$Target.mouseenter( $J.proxy( fnOnHover, null, $Target, key ) );
			$Target.mouseleave( fnCancelHover );
			$Target.data( strBoundDataName, true );
		}
	};
	var fnBindAllHoverElements = function( $Element ) {
		var $Target;
		if ( !$Element )
			$Target = $J(strSelector);
		else
			$Target = $Element.find(strSelector);

		$Target.each( function() { fnBindSingleHover( this ); } );
	};

	fnBindAllHoverElements();

	// register this hover so HideAJAXHovers() can hide it when invoked
	_RegisterAJAXHoverHideFunction( fnCancelHover );

	$J(document).ajaxComplete( function( event, xhr, settings ) {
		// skip any ajax calls we generated ourselves
		if ( settings && settings.url && settings.url.match( strURLMatch ) )
			return;

		fnBindAllHoverElements();
	} );
	if ( typeof Ajax != 'undefined' )
	{
		//prototype AJAX
		Ajax.Responders.register({
			onComplete: function() { fnBindAllHoverElements(); }
		});
	}

	return {
		fnBindAllHoverElements: fnBindAllHoverElements,
		fnBindSingleHover: fnBindSingleHover,
		fnCancelHover: fnCancelHover
	};
}

function PositionMiniprofileHover( $Hover, $Target, oParams )
{
	if ( !oParams )
		oParams = {};
	var bPreferRightSide = oParams.bPreferRightSide || false;
	var nPxArrowOverlap = ( oParams.nPxArrowOverlap != undefined ) ? oParams.nPxArrowOverlap : 2;

	$Hover.css( 'visibility', 'hidden' );
	$Hover.show();

	var offset = $Target.offset();
	$Hover.css( 'left', offset.left + 'px' );
	$Hover.css( 'top', offset.top + 'px');

	var $HoverBox = $Hover.children( '.shadow_content' );
	if ( !$HoverBox.length )
		$HoverBox = $J( $Hover.children()[0] );

	var $HoverArrowLeft = $Hover.children( '.hover_arrow.left' );
	var $HoverArrowRight = $Hover.children( '.hover_arrow.right' );

	var nWindowScrollTop = $J(window).scrollTop();
	var nWindowScrollLeft = $J(window).scrollLeft();
	var nViewportWidth = $J(window).width();
	var nViewportHeight = $J(window).height();

		var $HoverArrow = $HoverArrowRight;
	var nBoxRightViewport = ( offset.left - nWindowScrollLeft ) + $Target.outerWidth() + $HoverBox.width() + 14;
	var nSpaceRight = nViewportWidth - nBoxRightViewport;
	var nSpaceLeft = offset.left - $Hover.width();
	if ( ( ( nSpaceLeft > 0 || nSpaceLeft > nSpaceRight ) && !bPreferRightSide ) || ( bPreferRightSide && nSpaceRight < 14 && nSpaceLeft > nSpaceRight ) )
	{
				$Hover.css( 'left', ( offset.left - $Hover.width() + nPxArrowOverlap + 3 ) + 'px' );
		$HoverArrowLeft.hide();
		$HoverArrowRight.show();
	}
	else
	{
				$Hover.css( 'left', ( offset.left + $Target.outerWidth() - nPxArrowOverlap ) + 'px' );
		$HoverArrow = $HoverArrowLeft;
		$HoverArrowLeft.show();
		$HoverArrowRight.hide();
	}

	var nTopAdjustment = 0;

			if ( $Target.height() < 48 )
		nTopAdjustment = Math.floor( $Target.height() / 2 ) - 24;
	var nDesiredHoverTop = offset.top - 15 + nTopAdjustment;
	$Hover.css( 'top', nDesiredHoverTop + 'px' );

	// see if the hover is cut off by the bottom of the window, and bump it up if neccessary
	var nTargetTopViewport = ( offset.top - nWindowScrollTop ) + nTopAdjustment;
	if ( nTargetTopViewport + $HoverBox.height() + 35 > nViewportHeight )
	{
		var nViewportAdjustment = ( $HoverBox.height() + 35 ) - ( nViewportHeight - nTargetTopViewport );

		// if the hover has the "in-game" block at the bottom, we need to have more space at the bottom of the hover
		//	so that the arrow will appear in the blue part of the hover.  This means the game info may be off-screen below.
		var bHaveInGameInfo = $HoverBox.find('.miniprofile_ingame').length > 0;
		var nHoverBoxBottomMinimum = ( bHaveInGameInfo ? 78 : 24 );	// the minimum amount of space we need below the arrow
		nViewportAdjustment = Math.min( $HoverBox.height() - nHoverBoxBottomMinimum, nViewportAdjustment );

		var nViewportAdjustedHoverTop = offset.top - nViewportAdjustment;
		$Hover.css( 'top', nViewportAdjustedHoverTop + 'px' );

		// arrow is normally offset 30pixels.  we move it down the same distance we moved the hover up, so it is "fixed" to where it was initially
		$HoverArrow.css( 'top', ( 30 + nDesiredHoverTop - nViewportAdjustedHoverTop ) + 'px' );
	}
	else
	{
		$HoverArrow.css( 'top', '' );
	}

	$Hover.hide();
	$Hover.css( 'visibility', '' );
}


/* Emoticon hovers */

function CEmoticonDelayedAJAXData( strEmoticonName, msDelayBeforeAJAX )
{
	CDelayedAJAXData.apply( this, [ 'economy/emoticonhover/' + strEmoticonName + '/jsonp.js', msDelayBeforeAJAX ]);
	this.m_strEmoticonName = strEmoticonName;
}

// subclass CDelayedAJAXData so we can request via JSONP
CEmoticonDelayedAJAXData.prototype = new CDelayedAJAXData;
CEmoticonDelayedAJAXData.prototype.constructor = CEmoticonDelayedAJAXData;

CEmoticonDelayedAJAXData.prototype.GetAJAXParams = function()
{
	return {
		url: 'https://steamcommunity-a.akamaihd.net/' + this.m_strURL,
		dataType: 'jsonp',
		jsonpCallback: 'OnLoadEmoticon_' + this.m_strEmoticonName,	//consistent name for cachability
		cache: true,
		data: {l: 'english' }
	}
}

function InitEmoticonHovers()
{
	var $Hover = $J('<div/>', {'class': 'emoticon_hover'} );
	var $HoverContent = $J('<div/>', {'class': 'emoticon_hover_content'} );
	$Hover.append( $HoverContent, $J('<div/>', {'class': 'hover_arrow left emoticon_hover_arrow' } ), $J('<div/>', {'class': 'hover_arrow right emoticon_hover_arrow' } ) );
	$Hover.hide();

	var fnOneTimeEmoticonSetup = function() {
		$J(document.body).append( $Hover );
	};

	var fnReadKey = function ( $Element ) {
		if ( $Element.data('emoticon') )
		{
			return $Element.data('emoticon');
		}
		else if ( $Element.attr( 'src' ) )
		{
			var rgMatches = $Element.attr( 'src' ).match( 'emoticon/(.*)$' );
			if ( rgMatches && rgMatches[1] )
			{
				var strEmoticon = rgMatches[1];
				if ( strEmoticon.length > 1 )
				{
					if ( strEmoticon[0] == ':' )
						strEmoticon = strEmoticon.substr( 1 );
					if ( strEmoticon[ strEmoticon.length - 1 ] == ':' )
						strEmoticon = strEmoticon.substr( 0, strEmoticon.length - 1 );
				}
				return strEmoticon;
			}
		}

		return null;
	};

	var fnDataFactory = function( key )	{
		if ( fnOneTimeEmoticonSetup )
		{
			fnOneTimeEmoticonSetup();
			fnOneTimeEmoticonSetup = null;
		}

		return new CEmoticonDelayedAJAXData( key, 50 );
	};

	var rgCallbacks = BindAJAXHovers( $Hover, $HoverContent, {
		fnDataFactory: fnDataFactory,
		fnPositionHover: function( $Hover, $Target ) {
			PositionMiniprofileHover( $Hover, $Target, {
				bPreferRightSide: true,
				nPxArrowOverlap: 0
			} );
			//slide it down a little for emoticon option popup
			if ( $Target.hasClass('emoticon_option') )
				$Hover.css( 'top', parseInt( $Hover.css('top') ) + 5 );
		},
		fnReadKey: fnReadKey,
		strSelector: 'img.emoticon',
		strURLMatch: 'emoticonhover',
		nDelayBeforeShow: 50
	} );

	window.BindEmoticonHover = rgCallbacks.fnBindSingleHover;
	window.BindAllEmoticonHovers = rgCallbacks.fnBindAllHoverElements;
	window.DismissEmoticonHover = rgCallbacks.fnCancelHover;
}

function v_trim( str )
{
	if ( str.trim )
		return str.trim();
	else
	{
		return str.replace(/^\s+/, '').replace(/\s+$/, '');
	}
}

function V_ParseJSON( str )
{
	if ( typeof JSON == 'object' && JSON.parse )
		return JSON.parse( str );	// built-in / json2.js
	else
		str.evalJSON();				// prototype
}

function V_ToJSON( object )
{
	if ( typeof JSON == 'object' && JSON.stringify )
		return JSON.stringify( object );	// built-in / json2.js
	else
		Object.toJSON( object )				// prototype
}

function V_IsJSON( str )
{
	try
	{
		if( typeof JSON == 'object' && JSON.parse )
		{
			var o = JSON.parse(str);
			if ( o !== null )
				return true;

		} else {
			return str.isJSON();
		}
	}
	catch (e) { }
	return false;
}


function V_GetCookie( strCookieName )
{
	var rgMatches = document.cookie.match( '(^|; )' + strCookieName + '=([^;]*)' );
	if ( rgMatches && rgMatches[2] )
		return rgMatches[2];
	else
		return null;
}

function V_SetCookie( strCookieName, strValue, expiryInDays, path )
{
	if ( !path )
		path = '/';

	var strDate = '';

	if( expiryInDays != null )
	{
		var dateExpires = new Date();
		dateExpires.setTime( dateExpires.getTime() + 1000 * 60 * 60 * 24 * expiryInDays );
		strDate = '; expires=' + dateExpires.toGMTString();
	}

	document.cookie = strCookieName + '=' + strValue + strDate + ';path=' + path;
}

function SetValueLocalStorage( strPreferenceName, value )
{
	if ( window.localStorage )
	{
		window.localStorage[strPreferenceName] = value;
	}
	else
	{
		var strStorageJSON = V_GetCookie( 'storage' ) || '{}';

		var oStorage = V_ParseJSON( strStorageJSON );

		oStorage[strPreferenceName] = value;

		V_SetCookie( 'storage', V_ToJSON( oStorage ), 365 )
	}
}

function UnsetValueLocalStorage( strPreferenceName )
{
	if ( window.localStorage )
	{
		delete window.localStorage[strPreferenceName];
	}
	else
	{
		var strStorageJSON = V_GetCookie( 'storage' ) || '{}';

		var oStorage = V_ParseJSON( strStorageJSON );

		delete oStorage[strPreferenceName];

		V_SetCookie( 'storage', V_ToJSON( oStorage ), 365 )
	}
}

function GetValueLocalStorage( strPreferenceName, defaultValue )
{
	if ( window.localStorage )
	{
		return window.localStorage[strPreferenceName] || defaultValue;
	}
	else
	{
		var strStorageJSON = V_GetCookie( 'storage' ) || '{}';
		var oStorage = V_ParseJSON( strStorageJSON );
		return oStorage[strPreferenceName] || defaultValue;
	}
}

function DynamicLink_PlayYouTubeVideoInline( elem, videoid )
{
	var el = $(elem);
	var youtubeurl = 'http://www.youtube.com/embed/' + videoid + '?showinfo=0&autohide=1&fs=1&hd=1&modestbranding=1&rel=0&showsearch=0&wmode=direct&autoplay=1';
	var wrapper = new Element( 'div', { 'class' : 'dynamiclink_youtubeviewvideoembedded', 'frameborder' : '0' } );
	var iframeContent = new Element( 'iframe', { 'frameborder' : '0' } );
	iframeContent.src = youtubeurl;
	if ( el )
	{
		wrapper.insert( iframeContent );
		el.insert( {after: wrapper } );
		el.remove();
	}
}

function ReplaceDynamicLink( id, strHTML )
{
	var el = $(id);
	if ( el && strHTML.length > 0 )
	{
		el.insert( {after: strHTML } );
		el.remove();
	}
}



function CScrollOffsetWatcher( el, fnCallback )
{
	this.nOffsetTop = $J(el).offset().top;
	this.nBufferHeight = 200;

	this.nOffsetTopTrigger = this.nOffsetTop - this.nBufferHeight;

	this.fnOnHit = fnCallback;


	CScrollOffsetWatcher.RegisterWatcher( this );
}

CScrollOffsetWatcher.sm_rgWatchers = [];
CScrollOffsetWatcher.m_nTimeoutInitialLoad = 0;
CScrollOffsetWatcher.RegisterWatcher = function( Watcher )
{
	var bHadWatchers = CScrollOffsetWatcher.sm_rgWatchers.length > 0;

	// keep the list sorted by offset trigger
	var iInsertionPoint;
	for( iInsertionPoint = CScrollOffsetWatcher.sm_rgWatchers.length; iInsertionPoint > 0 ; iInsertionPoint-- )
	{
		if ( Watcher.nOffsetTopTrigger > CScrollOffsetWatcher.sm_rgWatchers[iInsertionPoint - 1].nOffsetTopTrigger )
			break;
	}
	CScrollOffsetWatcher.sm_rgWatchers.splice( iInsertionPoint, 0, Watcher );

	if ( !bHadWatchers )
	{
		$J(window).on( 'scroll.ScrollOffsetWatcher', CScrollOffsetWatcher.OnScroll );
		$J(window).on( 'resize.ScrollOffsetWatcher', CScrollOffsetWatcher.OnScroll );
	}

	// use a 1ms timeout to roll these together as much as possible on page load
	if ( !CScrollOffsetWatcher.m_nTimeoutInitialLoad )
		CScrollOffsetWatcher.m_nTimeoutInitialLoad = window.setTimeout( function() { CScrollOffsetWatcher.OnScroll(); CScrollOffsetWatcher.m_nTimeoutInitialLoad = 0; }, 1 );
}

CScrollOffsetWatcher.OnScroll = function()
{
	var nScrollY = document.viewport.getScrollOffsets()[1];
	var nOffsetBottom = nScrollY + document.viewport.getHeight();

	var cCompletedWatchers = 0;
	for( var i = 0; i < CScrollOffsetWatcher.sm_rgWatchers.length; i++ )
	{
		var Watcher = CScrollOffsetWatcher.sm_rgWatchers[i];
		if ( nOffsetBottom > Watcher.nOffsetTopTrigger )
		{
			Watcher.fnOnHit();
			cCompletedWatchers++;
		}
		else
		{
			break;
		}
	}

	if ( cCompletedWatchers )
		CScrollOffsetWatcher.sm_rgWatchers.splice( 0, cCompletedWatchers );

	if ( CScrollOffsetWatcher.sm_rgWatchers.length == 0 )
	{
		$J(window).off( 'scroll.ScrollOffsetWatcher' );
		$J(window).off( 'resize.ScrollOffsetWatcher' );
	}
}

function LoadImageGroupOnScroll( elTarget, strGroup )
{
	var $Element = $J( '#' + elTarget );
	if ( $Element.length )
		new CScrollOffsetWatcher( $Element, function() { LoadDelayedImages(strGroup); } );
}

function LoadDelayedImages( group )
{
	if ( typeof g_rgDelayedLoadImages != 'undefined' && g_rgDelayedLoadImages[group] )
	{
		var rgURLs = g_rgDelayedLoadImages[group];
		for ( var i=0; i < rgURLs.length; i++ )
		{
			$J('#delayedimage_' + group + '_' + i).attr( 'src', rgURLs[i] );
		}

		g_rgDelayedLoadImages[group] = false;
	}
}

WebStorage = {
	GetLocal: function ( key, bSessionOnly )
	{
		var type = ( bSessionOnly ) ? 'session' : 'local';

		var storage = window[type + 'Storage'];

		if ( !window[type + 'Storage'] )
			return WebStorage.GetCookie( key );

		var value = storage.getItem(key);
		try {
			value = V_ParseJSON( value );
		} catch(err){
			return null;
		}

		if( value == null )
		{
			// Check if we have the value stored in a cookie instead. If so, move that to LS and remove the cookie
			value = V_GetCookie( key );
			if( value != null )
			{
				WebStorage.SetLocal( key, value, bSessionOnly );
				WebStorage.ClearCookie( key );
			}
		}
		return value;
	},
	SetLocal: function ( key, value, bSessionOnly )
	{
		var type = ( bSessionOnly ) ? 'session' : 'local';

		var storage = window[type + 'Storage'];

		if ( !window[type + 'Storage'] )
			return WebStorage.SetCookie( key, value, ( bSessionOnly ) ? null : 365 );

		value = V_ToJSON( value );

		storage.setItem( key, value, type);
	},
	GetCookie: function( key )
	{
		var keyValue = V_GetCookie( key );

		return V_IsJSON( keyValue ) ? V_ParseJSON( keyValue ) : keyValue;
	},
	SetCookie: function( key, value, duration )
	{
		value = V_ToJSON( value );
		V_SetCookie( key, value, duration );
	},
	ClearCookie: function( key )
	{
		WebStorage.SetCookie(key, null, -1 );
	}
};

// takes an integer
function v_numberformat( n, decimals )
{
	var str = '' + ( n ? n : 0 );
	var len = str.indexOf( '.' );
	if ( len == -1 )
		len = str.length;
	var out = '';
	for ( var i = 0; i < len; i++ )
	{
		var c = str.charAt(i);
		out += c;
		if ( i < len - 1 && (len - i - 1) % 3 == 0 && c != '-' )
			out += ',';
	}
	if ( ( len < str.length || decimals ) && typeof decimals != 'undefined' && decimals !== 0 )
	{
		len++;
		out += '.';
		for ( var i = 0; i < ( decimals ? decimals : str.length - len ); i++ )
		{
			if ( len + i < str.length )
				out += str.charAt( len + i );
			else
				out += '0';
		}
	}

	return out;
}


function v_shuffle( rgArray )
{
	for ( var i = 0; i < rgArray.length; i++ )
	{
		var iSwap = Math.floor( Math.random() * ( rgArray.length - i ) + i );
		if ( iSwap != i )
		{
			var temp = rgArray[iSwap];
			rgArray[iSwap] = rgArray[i];
			rgArray[i] = temp;
		}
	}

	return rgArray;
}


function UpdateFormattedNumber( element, delta )
{
	var $Element = $J(element);
	$Element.text( v_numberformat( parseInt( $Element.text().replace( /,/, '' ) ) + delta ) );
}

function RateAnnouncement( rateURL, gid, bVoteUp )
{
	if ( bVoteUp && $J('#VoteUpBtn_' + gid).hasClass( "btn_active" ) )
	{
		return;
	}
	if ( !bVoteUp && $J('#VoteDownBtn_' + gid).hasClass( "btn_active" ) )
	{
		return;
	}

	rateURL = rateURL + gid;
	$J.post( rateURL, {
			'voteup' : bVoteUp,
			'sessionid' : g_sessionID
		}
	).done( function( json ) {

		var votesUpCount = $J('#VotesUpCount_' + gid);
		if ( votesUpCount )
		{
			var increment = 0;
			if ( bVoteUp )
			{
				increment = 1;
			}
			else if ( $J('#VoteUpBtn_' + gid).hasClass( 'btn_active' ) )
			{
				increment = -1;
			}
			UpdateFormattedNumber( votesUpCount, increment );

			if ( parseInt( votesUpCount.html().replace(/,/g, '') ) == 0 )
			{
				$J('#VotesUpCountContainer_' + gid).hide();
			}
			else
			{
				$J('#VotesUpCountContainer_' + gid).show();
			}
		}

		if ( bVoteUp )
		{
			$J('#VoteUpBtn_' + gid).addClass( "btn_active" );
			$J('#VoteDownBtn_' + gid).removeClass( "btn_active" );
		}
		else
		{
			$J('#VoteDownBtn_' + gid).addClass( "btn_active" );
			$J('#VoteUpBtn_' + gid).removeClass( "btn_active" );
		}



	} )
	.fail( function( jqxhr ) {
		alert( jqxhr );
	} );
	return false;
}



/* Scroll to an element if it's not already in view.  If it's at the bottom of the viewport, then it will be
 scrolled to the top if less than nRequiredPixelsToShow are visible (defaults to the height of the element)
 */
function ScrollToIfNotInView( elem, nRequiredPixelsToShow, nSpacingBefore )
{
	elem = $(elem);

	var elemTop = elem.viewportOffset().top;
	var bNeedToScroll = false;
	if ( elemTop < 0 )
	{
		bNeedToScroll = true;
	}
	else
	{
		if ( !nRequiredPixelsToShow )
			nRequiredPixelsToShow = elem.getHeight();

		var elemBottom = elemTop + nRequiredPixelsToShow;

		if ( elemBottom > $(document).viewport.getHeight() )
			bNeedToScroll = true;
	}

	if ( bNeedToScroll )
	{
		if ( nSpacingBefore )
			window.scrollBy( 0, elemTop - nSpacingBefore );
		else
			elem.scrollTo();
	}
}

function CAjaxInfiniteScrollingControls( rgSearchData, url )
{
	this.m_strActionURL = null;
	this.m_cPageSize = null;
	this.m_strElementPrefix = "";
	this.m_strClassPrefix = "";
	this.m_rgStaticParams = null;

	this.m_strQuery = null;
	this.m_cTotalCount = 0;
	this.m_iCurrentPage = 0;
	this.m_cMaxPages = 0;
	this.m_bLoading = false;

	this.m_fnPreRequestHandler = null;
	this.m_fnResponseHandler = null;
	this.m_fnPageChangingHandler = null;
	this.m_fnPageChangedHandler = null;

	this.m_LoadingDialog = null;
	this.m_bRestoringScrollTop = false;

	this.m_strActionURL = url;

	this.m_strQuery = rgSearchData['query'];
	this.m_cTotalCount = rgSearchData['total_count'];
	this.m_iCurrentPage = 0;
	this.m_cPageSize = rgSearchData['pagesize'];
	this.m_cMaxPages = Math.ceil( this.m_cTotalCount / this.m_cPageSize );

	if ( rgSearchData['prefix'] )
		this.m_strElementPrefix = rgSearchData['prefix'];

	if ( rgSearchData['class_prefix'] )
		this.m_strClassPrefix = rgSearchData['class_prefix'];

	var thisControl = this;
	var scrollFunc = function( event ) {
		this.OnScroll( event );
	};
	$J(document).scroll( function() { return scrollFunc.apply( thisControl ) } );

	window.addEventListener('beforeunload', function( event ) { thisControl.OnUnload( event ); } );

	this.RestoreScrollTop( true );
}

CAjaxInfiniteScrollingControls.prototype.DoneRestoreScrollTop = function()
{
	if ( this.m_LoadingDialog )
	{
		this.m_LoadingDialog.Dismiss();
		this.m_LoadingDialog = null;
	}
	this.m_bRestoringScrollTop = false;
}

CAjaxInfiniteScrollingControls.prototype.RestoreScrollTop = function( bForce )
{
	this.m_bRestoringScrollTop |= bForce;
	if ( !this.m_bRestoringScrollTop )
	{
		return;
	}
	var scrollTopPrevious = parseInt( $J( "#" + this.m_strElementPrefix + '_scroll_top').val() );
	if ( scrollTopPrevious != 0 )
	{
		var viewport = document.viewport.getDimensions(); // Gets the viewport as an object literal
		var windowHeight = viewport.height; // Usable window height
		var bodyHeight = $(document.body).getHeight();

		// done?
		if ( scrollTopPrevious < bodyHeight - windowHeight )
		{
			this.DoneRestoreScrollTop();
			window.scrollTo( 0, scrollTopPrevious );
		}
		else
		{
			if ( this.m_LoadingDialog == null )
			{
				this.m_LoadingDialog = ShowBlockingWaitDialog( 'Please Wait', 'Returning to where you were last on this page...' );
			}
			window.scrollTo( 0, scrollTopPrevious );
		}
	}
}

CAjaxInfiniteScrollingControls.prototype.OnUnload = function( event )
{
	var scrollOffset = document.viewport.getScrollOffsets();
	var scrollTop = scrollOffset.top;
	$J( "#" + this.m_strElementPrefix + '_scroll_top').val( scrollTop );
}

CAjaxInfiniteScrollingControls.prototype.OnScroll = function( event )
{
	if ( this.m_bLoading )
		return;

	var nCurrentScroll = $J(window).scrollTop() + $J(window).height();

	var rows = $J('#' + this.m_strElementPrefix + 'Rows');
	var offset = rows.offset();
	var nTriggerPoint = rows.height() + offset.top - 750;

	if ( nCurrentScroll >  nTriggerPoint )
	{
		this.NextPage();
	}
}

CAjaxInfiniteScrollingControls.prototype.GetActionURL = function( action )
{
	var url = this.m_strActionURL + action + '/';
	return url;
}

CAjaxInfiniteScrollingControls.prototype.SetPreRequestHandler = function( fnHandler )
{
	this.m_fnPreRequestHandler = fnHandler;
}

CAjaxInfiniteScrollingControls.prototype.SetResponseHandler = function( fnHandler )
{
	this.m_fnResponseHandler = fnHandler;
}

CAjaxInfiniteScrollingControls.prototype.SetPageChangingHandler = function ( fnHandler )
{
	this.m_fnPageChangingHandler = fnHandler;
}

CAjaxInfiniteScrollingControls.prototype.SetPageChangedHandler = function ( fnHandler )
{
	this.m_fnPageChangedHandler = fnHandler;
}

CAjaxInfiniteScrollingControls.prototype.SetStaticParameters = function ( rgParams )
{
	this.m_rgStaticParams = rgParams;
}

CAjaxInfiniteScrollingControls.prototype.OnAJAXComplete = function()
{
	this.m_bLoading = false;
}

CAjaxInfiniteScrollingControls.prototype.NextPage = function()
{
	if ( this.m_iCurrentPage < this.m_cMaxPages - 1 )
		this.LoadPage( this.m_iCurrentPage + 1 );
}

CAjaxInfiniteScrollingControls.prototype.LoadPage = function( iPage, bForce )
{
	if ( typeof( bForce )== 'undefined' || !bForce )
	{
		if ( this.m_bLoading || iPage >= this.m_cMaxPages || iPage < 0 )
		{
			return false;
		}
		else if ( iPage == this.m_iCurrentPage )
		{
			this.RestoreScrollTop( false );
		}
	}

	var params = {
		query: this.m_strQuery,
		start: this.m_cPageSize * iPage,
		count: this.m_cPageSize
	};

	if ( this.m_rgStaticParams != null )
	{
		for ( var sParamName in this.m_rgStaticParams )
		{
			if ( typeof sParamName != "string" )
				continue;

			if ( typeof this.m_rgStaticParams[sParamName] != "string" )
				continue;

			params[sParamName] = this.m_rgStaticParams[sParamName];
		}
	}

	if ( this.m_fnPageChangingHandler != null )
		this.m_fnPageChangingHandler( iPage );

	if ( this.m_fnPreRequestHandler != null )
		this.m_fnPreRequestHandler( params );

	var elLoading = $(this.m_strElementPrefix + '_loading');
	elLoading.show();

	this.m_bLoading = true;
	new Ajax.Request( this.GetActionURL( '' ), {
		method: 'get',
		parameters: params,
		onSuccess: this.OnResponseRenderResults.bind( this ),
		onComplete: this.OnAJAXComplete.bind( this )
	});

	return true;
}

CAjaxInfiniteScrollingControls.prototype.OnResponseRenderResults = function( transport )
{
	if ( transport.responseJSON && transport.responseJSON.success )
	{
		var elLoading = $(this.m_strElementPrefix + '_loading');
		elLoading.hide();

		if ( typeof RecordAJAXPageView !== "undefined" )
		{
			RecordAJAXPageView( transport.request.url );
		}

		var response = transport.responseJSON;
		this.m_cTotalCount = response.total_count;
		this.m_cMaxPages = Math.ceil( response.total_count / this.m_cPageSize );
		this.m_iCurrentPage = Math.floor( response.start / this.m_cPageSize );

		if ( this.m_iCurrentPage != 0 && this.m_cTotalCount <= response.start )
		{
			// this page is no longer valid, flip back a page (deferred so that the AJAX handler exits and reset m_bLoading)
			this.DoneRestoreScrollTop();
			return;
		}

		var elResults = $(this.m_strElementPrefix + 'Rows');

		elResults.insert( response.results_html );

		if ( this.m_fnResponseHandler != null )
		{
			this.m_fnResponseHandler( response );
		}

		if ( this.m_fnPageChangedHandler != null )
			this.m_fnPageChangedHandler( this.m_iCurrentPage );

		this.m_bLoading = false;
		if ( this.m_iCurrentPage < this.m_cMaxPages - 1 )
		{
			this.RestoreScrollTop( false );
		}
		else
		{
			this.DoneRestoreScrollTop();
		}
	}
	else
	{
		this.DoneRestoreScrollTop();
	}
}

function CAjaxPagingControls( rgSearchData, url )
{
	this.m_strActionURL = null;
	this.m_cPageSize = null;
	this.m_strElementPrefix = "";
	this.m_strClassPrefix = "";
	this.m_rgStaticParams = null;

	this.m_strQuery = null;
	this.m_cTotalCount = 0;
	this.m_iCurrentPage = 0;
	this.m_cMaxPages = 0;
	this.m_bLoading = false;

	this.m_fnPreRequestHandler = null;
	this.m_fnResponseHandler = null;
	this.m_fnPageChangingHandler = null;
	this.m_fnPageChangedHandler = null;


	this.m_strActionURL = url;

	this.m_strQuery = rgSearchData['query'];
	this.m_cTotalCount = rgSearchData['total_count'];
	this.m_iCurrentPage = 0;
	this.m_cPageSize = rgSearchData['pagesize'];
	this.m_cMaxPages = Math.ceil( this.m_cTotalCount / this.m_cPageSize );

	if ( rgSearchData['prefix'] )
		this.m_strElementPrefix = rgSearchData['prefix'];

	if ( rgSearchData['class_prefix'] )
		this.m_strClassPrefix = rgSearchData['class_prefix'];

	$(this.m_strElementPrefix + '_btn_prev').observe( 'click', this.PrevPage.bind( this ) );
	$(this.m_strElementPrefix + '_btn_next').observe( 'click', this.NextPage.bind( this ) );

	this.UpdatePagingDisplay();
}

CAjaxPagingControls.prototype.GetActionURL = function( action )
{
	var url = this.m_strActionURL + action + '/';
	return url;
}

CAjaxPagingControls.prototype.SetPreRequestHandler = function( fnHandler )
{
	this.m_fnPreRequestHandler = fnHandler;
}

CAjaxPagingControls.prototype.SetResponseHandler = function( fnHandler )
{
	this.m_fnResponseHandler = fnHandler;
}

CAjaxPagingControls.prototype.SetPageChangingHandler = function ( fnHandler )
{
	this.m_fnPageChangingHandler = fnHandler;
}

CAjaxPagingControls.prototype.SetPageChangedHandler = function ( fnHandler )
{
	this.m_fnPageChangedHandler = fnHandler;
}

CAjaxPagingControls.prototype.SetStaticParameters = function ( rgParams )
{
	this.m_rgStaticParams = rgParams;
}

CAjaxPagingControls.prototype.OnAJAXComplete = function()
{
	this.m_bLoading = false;
}

CAjaxPagingControls.prototype.NextPage = function()
{
	if ( this.m_iCurrentPage < this.m_cMaxPages - 1 )
		this.GoToPage( this.m_iCurrentPage + 1 );
}

CAjaxPagingControls.prototype.PrevPage = function()
{
	if ( this.m_iCurrentPage > 0 )
		this.GoToPage( this.m_iCurrentPage - 1 );
}

CAjaxPagingControls.prototype.GoToPage = function( iPage, bForce )
{
	if ( typeof( bForce )== 'undefined' || !bForce )
	{
		if ( this.m_bLoading || iPage >= this.m_cMaxPages || iPage < 0 || iPage == this.m_iCurrentPage )
			return false;
	}

	var params = {
		query: this.m_strQuery,
		start: this.m_cPageSize * iPage,
		count: this.m_cPageSize
	};

	if ( this.m_rgStaticParams != null )
	{
		for ( var sParamName in this.m_rgStaticParams )
		{
			if ( typeof sParamName != "string" )
				continue;

			if ( typeof this.m_rgStaticParams[sParamName] != "string" )
				continue;

			params[sParamName] = this.m_rgStaticParams[sParamName];
		}
	}

	if ( this.m_fnPageChangingHandler != null )
		this.m_fnPageChangingHandler( iPage );

	if ( this.m_fnPreRequestHandler != null )
		this.m_fnPreRequestHandler( params );

	this.m_bLoading = true;
	new Ajax.Request( this.GetActionURL( 'render' ), {
		method: 'get',
		parameters: params,
		onSuccess: this.OnResponseRenderResults.bind( this ),
		onComplete: this.OnAJAXComplete.bind( this )
	});

	return true;
}

CAjaxPagingControls.prototype.OnResponseRenderResults = function( transport )
{
	if ( transport.responseJSON && transport.responseJSON.success )
	{
		if ( typeof RecordAJAXPageView !== "undefined" )
		{
			RecordAJAXPageView( transport.request.url );
		}

		var response = transport.responseJSON;
		this.m_cTotalCount = response.total_count;
		this.m_cMaxPages = Math.ceil( response.total_count / this.m_cPageSize );
		this.m_iCurrentPage = Math.floor( response.start / this.m_cPageSize );

		if ( this.m_iCurrentPage != 0 && this.m_cTotalCount <= response.start )
		{
			// this page is no longer valid, flip back a page (deferred so that the AJAX handler exits and reset m_bLoading)
			this.GoToPage.bind( this, this.m_iCurrentPage - 1 ).defer();
			return;
		}

		var elResults = $(this.m_strElementPrefix + 'Rows');

		elResults.update( response.results_html );

		if ( this.m_fnResponseHandler != null )
			this.m_fnResponseHandler( response );

		ScrollToIfNotInView( $(this.m_strElementPrefix + 'Table'), 40 );

		this.UpdatePagingDisplay();
	}
}

CAjaxPagingControls.prototype.UpdatePagingDisplay = function()
{
	var elemNoResults = $(this.m_strElementPrefix + '_no_results');
	if ( this.m_cTotalCount == 0 )
	{
		$(this.m_strElementPrefix + '_ctn').hide();
		if ( elemNoResults )
			elemNoResults.show();
	}
	else
	{
		$(this.m_strElementPrefix + '_ctn').show();
		if ( elemNoResults )
			elemNoResults.hide();

		$(this.m_strElementPrefix + '_total').update( v_numberformat( this.m_cTotalCount ) );
		$(this.m_strElementPrefix + '_start').update( v_numberformat( this.m_iCurrentPage * this.m_cPageSize + 1 ) );
		$(this.m_strElementPrefix + '_end').update( Math.min( ( this.m_iCurrentPage + 1 ) * this.m_cPageSize, this.m_cTotalCount ) );
	}

	if ( this.m_cMaxPages <= 1 )
	{
		$(this.m_strElementPrefix + '_controls').hide();
	}
	else
	{
		$(this.m_strElementPrefix + '_controls').show();
		if ( this.m_iCurrentPage > 0 )
			$(this.m_strElementPrefix + '_btn_prev').removeClassName('disabled');
		else
			$(this.m_strElementPrefix + '_btn_prev').addClassName('disabled');

		if ( this.m_iCurrentPage < this.m_cMaxPages - 1 )
			$(this.m_strElementPrefix + '_btn_next').removeClassName('disabled');
		else
			$(this.m_strElementPrefix + '_btn_next').addClassName('disabled');

		var elPageLinks = $(this.m_strElementPrefix + '_links');
		elPageLinks.update('');
		// we always show first, last, + 3 page links closest to current page
		var cPageLinksAheadBehind = 2;
		var firstPageLink = Math.max( this.m_iCurrentPage - cPageLinksAheadBehind, 1 );
		var lastPageLink = Math.min( this.m_iCurrentPage + (cPageLinksAheadBehind*2) + ( firstPageLink - this.m_iCurrentPage ), this.m_cMaxPages - 2 );

		if ( lastPageLink - this.m_iCurrentPage < cPageLinksAheadBehind )
			firstPageLink = Math.max( this.m_iCurrentPage - (cPageLinksAheadBehind*2) + ( lastPageLink - this.m_iCurrentPage ), 1 );

		this.AddPageLink( elPageLinks, 0 );
		if ( firstPageLink != 1 )
			elPageLinks.insert( ' ... ' );

		for ( var iPage = firstPageLink; iPage <= lastPageLink; iPage++ )
		{
			this.AddPageLink( elPageLinks, iPage );
		}

		if ( lastPageLink != this.m_cMaxPages - 2 )
			elPageLinks.insert( ' ... ' );
		this.AddPageLink( elPageLinks, this.m_cMaxPages - 1 );
	}

	if ( this.m_fnPageChangedHandler != null )
		this.m_fnPageChangedHandler( this.m_iCurrentPage );
}

CAjaxPagingControls.prototype.AddPageLink = function( elPageLinks, iPage )
{
	var el = new Element( 'span', {'class': ( this.m_strClassPrefix != "" ? this.m_strClassPrefix : this.m_strElementPrefix ) + '_paging_pagelink' } );
	el.update( (iPage + 1) + ' ' );

	if ( iPage == this.m_iCurrentPage )
		el.addClassName( 'active' );
	else
		el.observe( 'click', this.GoToPage.bind( this, iPage ) );

	elPageLinks.insert( el );
}


function IsValidEmailAddress( email )
{
	var email_regex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
	return ( email != '' && email_regex.test(email) );
}


(function ($) {
  $.deparam = function (params, coerce) {
    var obj = {},
        coerce_types = { 'true': !0, 'false': !1, 'null': null };

    $.each(params.replace(/\+/g, ' ').split('&'), function (j,v) {
      var param = v.split('='),
          key = decodeURIComponent(param[0]),
          val,
          cur = obj,
          i = 0,

          keys = key.split(']['),
          keys_last = keys.length - 1;

      if (/\[/.test(keys[0]) && /\]$/.test(keys[keys_last])) {
        keys[keys_last] = keys[keys_last].replace(/\]$/, '');

        keys = keys.shift().split('[').concat(keys);

        keys_last = keys.length - 1;
      } else {
        keys_last = 0;
      }

      if (param.length === 2) {
        val = decodeURIComponent(param[1]);

        if (coerce) {
          val = val && !isNaN(val)              ? +val              // number
              : val === 'undefined'             ? undefined         // undefined
              : coerce_types[val] !== undefined ? coerce_types[val] // true, false, null
              : val;                                                // string
        }

        if ( keys_last ) {
          for (; i <= keys_last; i++) {
            key = keys[i] === '' ? cur.length : keys[i];
            cur = cur[key] = i < keys_last
              ? cur[key] || (keys[i+1] && isNaN(keys[i+1]) ? {} : [])
              : val;
          }

        } else {

          if ($.isArray(obj[key])) {
            obj[key].push( val );

          } else if (obj[key] !== undefined) {
            obj[key] = [obj[key], val];

          } else {
            obj[key] = val;
          }
        }

      } else if (key) {
        obj[key] = coerce
          ? undefined
          : '';
      }
    });

    return obj;
  };
})(jQuery);

/**
 * Generic search field that handles:
 * 1.) Showing default text if the input field is empty
 * 2.) When the input field gets focus, the text field clears
 * 3.) Adding CSS class to the input field when it is default text
 * 4.) When the user presses return/enter in  the field
 *
 * Call ClearIfDefaultValue() before submitting the form
 */
function SearchFieldWithText( elemID, defaultSearchText, onEnterFunc, defaultTextCSSClass )
{
	var elem = $( elemID );

	this.elem = elem;
	this.defaultSearchText = defaultSearchText;
	this.defaultTextCSSClass = defaultTextCSSClass;
	this.onEnterFunc = onEnterFunc;

	Event.observe( elem, 'click', this.handleClickOrFocus.bind(this));
	Event.observe( elem, 'focus', this.handleClickOrFocus.bind(this));
	Event.observe( elem, 'blur', this.handleBlur.bind(this));
	Event.observe( elem, 'keypress', this.handleKeypress.bind(this));
	Event.observe( elem.form, 'submit', this.ClearIfDefaultValue.bind(this));

	this.handleBlur();
}

SearchFieldWithText.prototype.handleClickOrFocus = function()
{
	if ( this.elem.value == this.defaultSearchText )
	{
		this.elem.value = '';
		if ( this.defaultTextCSSClass )
			this.elem.removeClassName( this.defaultTextCSSClass );
	}
}

SearchFieldWithText.prototype.handleBlur = function()
{
	if ( this.elem.value == '')
	{
		this.elem.value = this.defaultSearchText;
		if ( this.defaultTextCSSClass )
			this.elem.addClassName( this.defaultTextCSSClass );
	}
}

SearchFieldWithText.prototype.handleKeypress = function()
{
	if ( !this.onEnterFunc )
		return;

	var keyCode = null;
	if( event.which )
	{
		keyCode = event.which;
	}
	else if( event.keyCode )
	{
		keyCode = evt.keyCode;
	}
	if ( 13 == keyCode )
	{
		this.onEnterFunc();
	}
}

SearchFieldWithText.prototype.ClearIfDefaultValue = function()
{
	if ( this.elem.value == this.defaultSearchText )
	{
		this.elem.value = '';
	}
}


