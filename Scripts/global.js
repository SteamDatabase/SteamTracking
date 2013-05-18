


var g_OnWebPanelShownHandlers = Array();
function SteamOnWebPanelShown()
{
	for ( var i = 0; i < g_OnWebPanelShownHandlers.length; i++ )
	{
		g_OnWebPanelShownHandlers[i]();
	}
}
function RegisterSteamOnWebPanelShownHandler( f )
{
	g_OnWebPanelShownHandlers.push( f );
}

var g_OnWebPanelHiddenHandlers = Array();
function SteamOnWebPanelHidden()
{
	for( var i = 0; i < g_OnWebPanelHiddenHandlers.length; i++ )
	{
		g_OnWebPanelHiddenHandlers[i]();
	}
}
function RegisterSteamOnWebPanelHiddenHandler( f )
{
	g_OnWebPanelHiddenHandlers.push( f );
}




function toggleAbuse()
{
	abuseDiv = document.getElementById( 'reporter' );
	if ( abuseDiv.style.display != 'block' )
	{
		abuseDiv.style.display = 'block';
	}
	else
	{
		abuseDiv.style.display = 'none';
	}
}

function RefreshNotificationArea()
{
	if ( typeof $J != 'undefined' )
	{
		if ( $J('#header_notification_area' ) )
		{
			$J.ajax({
				url: 'http://steamcommunity.com/actions/RefreshNotificationArea',
				success: function ( data ) { $J('#header_notification_area').html( data ); }
			});
		}
	}
	else if ( typeof $ != 'undefined' )
	{
		if ( $('header_notification_area' ) )
		{
			new Ajax.Updater( 'header_notification_area', 'http://steamcommunity.com/actions/RefreshNotificationArea' );
		}
	}
}

function vIE()
{
	return (navigator.appName=='Microsoft Internet Explorer') ? parseFloat( ( new RegExp( "MSIE ([0-9]{1,}[.0-9]{0,})" ) ).exec( navigator.userAgent )[1] ) : -1;
}

function checkAbuseSub()
{
	if ( !document.getElementById( 'contentType2' ).checked && !document.getElementById( 'contentType3' ).checked && !document.getElementById( 'contentType4' ).checked && !document.getElementById( 'contentType13' ).checked  )
	{
		alert( 'Please select a reason for reporting abuse' );
		return false;
	}
	document.getElementById( 'abuseForm' ).submit();
}


function setTimezoneCookies()
{
	var now = new Date();
	var expire = new Date();

	// One year expiration, this way we don't need to wait at least one page
	// load to have accurate timezone info each session, but only each time the user
	// comes with cleared cookies
	expire.setTime( now.getTime() + 3600000*24*365 );
	tzOffset = now.getTimezoneOffset() * -1 * 60;
	isDST = 0;
	document.cookie = "timezoneOffset=" + tzOffset + "," + isDST + ";expires="+expire.toGMTString() + ";path=/";
}
// We always want to have the timezone cookie set for PHP to use
setTimezoneCookies();



var g_whiteListedDomains = [
	"steampowered.com",
	"steamgames.com",
	"steamcommunity.com",
	"valvesoftware.com",
	"youtube.com",
	"youtu.be",
	"live.com",
	"msn.com",
	"myspace.com",
	"facebook.com",
	"hi5.com",
	"wikipedia.org",
	"orkut.com",
	"rapidshare.com",
	"blogger.com",
	"megaupload.com",
	"friendster.com",
	"fotolog.net",
	"google.fr",
	"baidu.com",
	"microsoft.com",
	"ebay.com",
	"shacknews.com",
	"bbc.co.uk",
	"cnn.com",
	"foxsports.com",
	"pcmag.com",
	"nytimes.com",
	"flickr.com",
	"amazon.com",
	"veoh.com",
	"pcgamer.com",
	"metacritic.com",
	"fileplanet.com",
	"gamespot.com",
	"gametap.com",
	"ign.com",
	"kotaku.com",
	"xfire.com",
	"pcgames.gwn.com",
	"gamezone.com",
	"gamesradar.com",
	"digg.com",
	"engadget.com",
	"gizmodo.com",
	"gamesforwindows.com",
	"xbox.com",
	"cnet.com",
	"l4d.com",
	"teamfortress.com",
	"tf2.com",
	"half-life2.com",
	"aperturescience.com",
	"dayofdefeat.com",
	"dota2.com",
	"steamtranslation.ru",
	"playdota.com",
	"kickstarter.com",
	"gamingheads.com",
	"reddit.com"
];

function getHostname( str )
{
	var re = new RegExp('^(?:f|ht)tp(?:s)?\://([^/]+)', 'im');
	return str.match(re)[1].toString();
}

function AlertNonSteamSite( elem )
{
	var url = elem.href;
	var hostname = getHostname( url );
	if ( hostname )
	{
		hostname.toLowerCase();
		for ( var i = 0; i < g_whiteListedDomains.length; ++i )
		{
			if ( hostname.indexOf( g_whiteListedDomains[i] ) != -1 )
			{
				return true;
			}
		}
		var $Msg = $J('<div/>');
		$Msg.append( $J('<div/>').text( "Note: the URL you have clicked on is not an official Steam web site." ) );
		$Msg.append( '<br>' );
		$Msg.append( $J('<div/>').text( url ) );
		$Msg.append( '<br>' );
		$Msg.append( $J('<div/>').text( "If this web site asks for your user name or password, do not enter that information. You could lose your Steam account and all your games!" ) );
		$Msg.append( $J('<div/>').text( "Are you sure you want to visit this page? Click OK to continue at your own risk." ) );
		ShowConfirmDialog( '', $Msg ).done( function() {
			window.location = url;
		} );
		return false;
	}

	ShowAlertDialog( '', "The URL is badly formed.");
	return false;
}

var lastFilters = new Object();
function FilterListFast( target, str )
{
	var lastFilter = lastFilters[target];
	if ( !lastFilter )
		lastFilter = '';

	str = str.toLowerCase();
	if ( str == lastFilter )
		return false;

	var expanding = false;
	var contracting = false;
	if ( str.length > lastFilter.length && str.startsWith( lastFilter ) )
		expanding = true;
	if ( !str || str.length < lastFilter.length && lastFilter.startsWith( str ) )
		contracting = true;

	var strParts = str.split(/\W/);

	var elemTarget = $(target);
	var elemParent = elemTarget.parentNode;
	elemParent.removeChild( elemTarget );

	var rgChildren = elemTarget.childNodes;
	for ( var i = 0; i < rgChildren.length; i++ )
	{
		var child = rgChildren[i];
		if ( child.nodeType != child.ELEMENT_NODE )
			continue;
		if ( expanding && child.style.display=='none' || contracting && child.style.display != 'none' )
			continue;
		if ( !child.lcText )
			child.lcText = (child.innerText || child.textContent).toLowerCase();

		var text = child.lcText;
		var show = true;
		for ( var iPart = 0; show && iPart < strParts.length; iPart++ )
			if ( !text.include( strParts[iPart] ) )
				show=false;

		if ( show )
			child.style.display = '';
		else
			child.style.display = 'none';
	}
	lastFilters[target] = str;
	elemParent.appendChild( elemTarget );
	return true;
}


// goes into fullscreen, returning false if the browser doesn't support it
function requestFullScreen( element )
{
	// Supports most browsers and their versions.
	var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

	if (requestMethod)
	{
		// Native full screen.
		requestMethod.call(element);
		return true;
	}

	return false;
}

function exitFullScreen()
{
	if (document.exitFullscreen) {
		document.exitFullscreen();
	}
	else if (document.mozCancelFullScreen) {
		document.mozCancelFullScreen();
	}
	else if (document.webkitCancelFullScreen) {
		document.webkitCancelFullScreen();
	}
}

function RecordAJAXPageView( url )
{
	if ( typeof _gaq != "undefined" && _gaq )
	{
		var baseURL = 'http://steamcommunity.com';
		var idx = url.indexOf( baseURL );
		if ( idx != -1 )
		{
			url = url.substring( idx + baseURL.length );
		}
		_gaq.push( ['_trackPageview', url ] );
	}
}



// doesn't properly handle cookies with ; in them (needs to look for escape char)
function GetCookie( strCookieName )
{
	var rgMatches = document.cookie.match( '(^|; )' + strCookieName + '=([^;]*)' );
	if ( rgMatches && rgMatches[2] )
		return rgMatches[2];
	else
		return null;
}

function SetCookie( strCookieName, strValue, expiryInDays, path )
{
	if ( !expiryInDays )
		expiryInDays = 0;
	if ( !path )
		path = '/';
	
	var dateExpires = new Date();
	dateExpires.setTime( dateExpires.getTime() + 1000 * 60 * 60 * 24 * expiryInDays );
	document.cookie = strCookieName + '=' + strValue + '; expires=' + dateExpires.toGMTString() + ';path=' + path;
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

// takes an integer
function v_numberformat( n )
{
	var str = '' + ( n ? n : 0 );
	var len = str.length;
	var out = '';
	for ( var i = 0; i < len; i++ )
	{
		out += str.charAt(i);
		if ( i < len - 1 && (len - i - 1) % 3 == 0 )
			out += ',';
	}

	return out;
}

// takes an integer
function v_currencyformat( valueInCents, currencyCode, countryCode )
{
	var currencyFormat = (valueInCents / 100).toFixed(2);
	switch( currencyCode )
	{
		case 'EUR':
			return (currencyFormat + GetCurrencySymbol( currencyCode )).replace( '.', ',' ).replace( ',00', ',--' );
		case 'GBP':
			return GetCurrencySymbol( currencyCode ) + currencyFormat;
		case 'USD':
			if ( typeof(countryCode) != 'undefined' && countryCode != 'US' )
				return GetCurrencySymbol( currencyCode ) + currencyFormat + ' USD';
			else
				return GetCurrencySymbol( currencyCode ) + currencyFormat;
		case 'RUB':
			return currencyFormat.replace( '.', ',' ).replace( ',00', '' ) + ' ' + GetCurrencySymbol( currencyCode );
		case 'BRL':
			return GetCurrencySymbol( currencyCode ) + ' ' + currencyFormat.replace( '.', ',' );
		default:
			return currencyFormat + ' ' + currencyCode;
	}
}

function IsCurrencySymbolBeforeValue( currencyCode )
{
	if ( currencyCode == 'GBP' || currencyCode == 'USD' || currencyCode == 'BRL' )
		return true;

	return false;
}

// Return the symbol to use for a currency
function GetCurrencySymbol( currencyCode )
{
	switch( currencyCode )
	{
		case 'EUR':
			return '€';
		case 'GBP':
			return '£';
		case 'USD':
			return '$';
		case 'RUB':
			return 'pуб.';
		case 'BRL':
			return 'R$';
		default:
			return currencyCode + ' ';
	}
}

function GetCurrencyCode( currencyId )
{
	switch( currencyId )
	{
		case 1:
			return 'USD';
		case 2:
			return 'GBP';
		case 3:
			return 'EUR';
		case 5:
			return 'RUB';
		case 7:
			return 'BRL';
		default:
			return 'Unknown';
	}
}

function GetAvatarURLFromHash( hash, size )
{
	var strURL = 'http://media.steampowered.com/steamcommunity/public/images/avatars/' + hash.substring( 0, 2 ) + '/' + hash;

	if ( size == 'full' )
		strURL += '_full.jpg';
	else if ( size == 'medium' )
		strURL += '_medium.jpg';
	else
		strURL += '.jpg';

	return strURL;
}


function LaunchWebChat( params )
{
	var winChat = window.open( '', 'SteamWebChat', 'height=790,width=1015,resize=yes,scrollbars=yes' );
	if ( !winChat )
	{
		// popup blocked - this sometimes happens when chat is initiated from the store.  just roll with it.
		return;
	}

	if ( winChat.location ==  'about:blank' )
	{
		// created a new window, set the url
		if ( params )
			SetValueLocalStorage( 'rgChatStartupParam', V_ToJSON( params ) );

		winChat.location = 'http://steamcommunity.com/chat/';
	}
	else
	{
		if ( params )
			winChat.OnWebchatLaunchURL( params );
	}
	winChat.focus();
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


function SetValueLocalStorage( strPreferenceName, value )
{
	if ( window.localStorage )
	{
		window.localStorage[strPreferenceName] = value;
	}
	else
	{
		var strStorageJSON = GetCookie( 'storage' ) || '{}';

		var oStorage = V_ParseJSON( strStorageJSON );

		oStorage[strPreferenceName] = value;

		SetCookie( 'storage', V_ToJSON( oStorage ), 365 )
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
		var strStorageJSON = GetCookie( 'storage' ) || '{}';

		var oStorage = V_ParseJSON( strStorageJSON );

		delete oStorage[strPreferenceName];

		SetCookie( 'storage', V_ToJSON( oStorage ), 365 )
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
		var strStorageJSON = GetCookie( 'storage' ) || '{}';
		var oStorage = V_ParseJSON( strStorageJSON );
		return oStorage[strPreferenceName] || defaultValue;
	}
}






function ShowConfirmDialog( strTitle, strDescription, strOKButton, strCancelButton )
{
	if ( !strOKButton )
		strOKButton = 'OK';
	if ( !strCancelButton )
		strCancelButton = 'Cancel';

	var deferred = new jQuery.Deferred();
	var fnOK = function() { deferred.resolve(); };
	var fnCancel = function() { deferred.reject(); };

	var $OKButton = _BuildDialogButton( strOKButton, true );
	$OKButton.click( fnOK );
	var $CancelButton = _BuildDialogButton( strCancelButton );
	$CancelButton.click( fnCancel );

	var Modal = _BuildDialog( strTitle, strDescription, [ $OKButton, $CancelButton ], fnCancel );
	deferred.always( function() { Modal.Dismiss(); } );
	Modal.Show();

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
	$TextArea.html( strDescription );
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

// need to hold on to this so it doesn't get lost when we remove() the dialog element
var g_AbuseModalContents = null;
function ShowAbuseDialog()
{
	if ( !g_AbuseModalContents )
		g_AbuseModalContents = $J('#reportAbuseModalContents');

	if ( g_AbuseModalContents )
	{
		var Modal = ShowDialog( 'Report Violation', g_AbuseModalContents );
	}
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

	var Modal = new CModal( $Dialog, rgModalParams );
	if ( fnOnCancel )
	{
		Modal.OnDismiss( fnOnCancel );
		$CloseButton.click( fnOnCancel );
	}
	Modal.SetRemoveContentOnDismissal( true );

	return Modal;
}

function _BuildDialogButton( strText, bActive )
{
	var strClassName = bActive ? 'btn_green_white_innerfade btn_medium' : 'btn_grey_white_innerfade btn_medium';
	var elButtonLabel = $J( '<span/>' ).text( strText );
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
	this.m_fnBackgroundClick = function() { if ( _modal.m_bDismissOnBackgroundClick ) { _modal.Dismiss(); } };
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
		this.m_$Content.css( 'max-width',  nMaxWidth + 'px' );
		this.m_$StandardContent.css( 'max-height',  nMaxHeight + 'px' );

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
	CModal.s_$Background.on( 'click', null, this.m_fnBackgroundClick );

	this.AdjustSizing();

	this.m_$Content.show();

	// resize as any child image elements load in.
	this.m_$Content.find('img').load( this.m_fnSizing );

	this.m_bVisible = true;
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
	CModal.s_$Background.off( 'click', null, this.m_fnBackgroundClick );
	CModal.HideModalBackground();

	if ( this.m_fnOnDismiss )
		this.m_fnOnDismiss();

	if ( this.m_bRemoveContentOnDismissal )
	{
		this.m_$Content.remove();
		this.m_$Content = null;
	}
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

function StandardCommunityBan( steamid, elemLink )
{
	ShowPromptDialog(
		"Community Ban",
		"This action will ban this user from the community for a month and delete all their comments. Please enter a reason:"
	).done(	function( note ) {
		if ( !note )
			return;

		$J.post( 'http://steamcommunity.com/actions/StandardCommunityBan', {
			'sessionID' : g_sessionID,
			'steamid' : steamid,
			'note' : note
		}).done( function( data ) {
			$J(elemLink).replaceWith( '<span style="color: red;">banned</span>' );
		}).fail( function( jqxhr ) {
			// jquery doesn't parse json on fail
			var data = V_ParseJSON( jqxhr.responseText );
			ShowAlertDialog( 'Community Ban', 'Failed to ban.  Message: ' + data.success );
		});
	} );
}



function CEmoticonPopup( rgEmoticons, $EmoticonButton, $Textarea )
{
	this.m_rgEmoticons = rgEmoticons;
	this.m_$EmoticonButton = $EmoticonButton;
	this.m_$TextArea = $Textarea;

	this.m_bVisible = false;
	this.m_$Popup = null;

	var _this = this;
	this.m_$EmoticonButton.click( function() { _this.OnButtonClick(); } );
	this.m_fnOnDocumentClick = function() { _this.DismissPopup(); };
}

CEmoticonPopup.prototype.OnButtonClick = function()
{
	if ( this.m_bVisible )
	{
		this.DismissPopup();
	}
	else
	{
		if ( !this.m_$Popup )
			this.BuildPopup();

		// make sure we aren't listening to this
		$J(document).off( 'click', this.m_fnOnDocumentclick );

		this.m_$EmoticonButton.addClass( 'focus' );
		this.m_$Popup.stop();
		this.m_$Popup.fadeIn( 'fast' );
		this.m_bVisible = true;

		var _this = this;
		window.setTimeout( function() { $J(document).on( 'click', _this.m_fnOnDocumentClick ) }, 0 );
	}
}

CEmoticonPopup.prototype.DismissPopup = function()
{
	this.m_$Popup.fadeOut( 'fast' );
	this.m_$EmoticonButton.removeClass( 'focus' );
	this.m_bVisible = false;

	$J(document).off( 'click', this.m_fnOnDocumentclick );
}

CEmoticonPopup.prototype.BuildPopup = function()
{
	this.m_$Popup = $J('<div/>', {'class': 'emoticon_popup_ctn' } );


	var $PopupInner = $J('<div/>', {'class': 'emoticon_popup' } );
	this.m_$Popup.append( $PopupInner );
	var $Content = $J('<div/>', {'class': 'emoticon_popup_content' } );
	$PopupInner.append( $Content );

	for( var i = 0; i < this.m_rgEmoticons.length; i++ )
	{
		var strEmoticonName = this.m_rgEmoticons[i];
		var strEmoticonURL = 'http://cdn.steamcommunity.com/economy/emoticon/' + strEmoticonName;

		var $Emoticon = $J('<div/>', {'class': 'emoticon_option', 'title': strEmoticonName } );
		$Emoticon.append( $J('<img/>', {'src': strEmoticonURL } ) );

		$Emoticon.click( this.GetEmoticonClickClosure( strEmoticonName ) );

		$Content.append( $Emoticon );
	}

	$J(document.body).append( this.m_$Popup );
	PositionEmoticonHover( this.m_$Popup, this.m_$EmoticonButton );
}

CEmoticonPopup.prototype.GetEmoticonClickClosure = function ( strEmoticonName )
{
	var _this = this;
	return function() {
		var elTextArea = _this.m_$TextArea[0];
		if ( elTextArea )
		{
			var nSelectionStart = elTextArea.selectionStart;
			elTextArea.value = elTextArea.value.substr( 0, nSelectionStart ) + strEmoticonName + elTextArea.value.substr( nSelectionStart );
			elTextArea.selectionStart = nSelectionStart + strEmoticonName.length;
		}

		_this.m_$TextArea.focus();

		_this.DismissPopup();
	};
}

function PositionEmoticonHover( $Hover, $Target )
{
		$Hover.css( 'visibility', 'hidden' );
	$Hover.show();

	var offset = $Target.offset();
	$Hover.css( 'left', offset.left + 'px' );
	$Hover.css( 'top', offset.top + 'px');

	var $HoverBox = $Hover.children( '.emoticon_popup' );
	var $HoverArrowLeft = $Hover.children( '.miniprofile_arrow_left' );
	var $HoverArrowRight = $Hover.children( '.miniprofile_arrow_right' );

	var nWindowScrollTop = $J(window).scrollTop();
	var nWindowScrollLeft = $J(window).scrollLeft();
	var nViewportWidth = $J(window).width();
	var nViewportHeight = $J(window).height();

		var $HoverArrow = $HoverArrowRight;
	var nBoxRightViewport = ( offset.left - nWindowScrollLeft ) + $Target.outerWidth() + $HoverBox.width();
	var nSpaceRight = nViewportWidth - nBoxRightViewport;
	var nSpaceLeft = offset.left - $Hover.width();
	if ( nSpaceLeft > 0 || nSpaceLeft > nSpaceRight)
	{
				$Hover.css( 'left', ( offset.left - $Hover.width() - 12) + 'px' );
		$HoverArrowLeft.hide();
		$HoverArrowRight.show();
	}
	else
	{
				$Hover.css( 'left', ( offset.left + $Target.outerWidth() ) + 'px' );
		$HoverArrow = $HoverArrowLeft;
		$HoverArrowLeft.show();
		$HoverArrowRight.hide();
	}

	var nTopAdjustment = 0;

			if ( $Target.height() < 48 )
		nTopAdjustment = Math.floor( $Target.height() / 2 ) - 12;
	var nDesiredHoverTop = offset.top - 0 + nTopAdjustment;
	$Hover.css( 'top', nDesiredHoverTop + 'px' );

	// see if the hover is cut off by the bottom of the window, and bump it up if neccessary
	var nTargetTopViewport = ( offset.top - nWindowScrollTop ) + nTopAdjustment;
	if ( nTargetTopViewport + $HoverBox.height() + 35 > nViewportHeight )
	{
		var nViewportAdjustment = ( $HoverBox.height() + 35 ) - ( nViewportHeight - nTargetTopViewport );

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




function RegisterPopupDismissal( dismissFunc, elemIgnore, bNoGuard )
{
	var dismissHandler = {
		dismiss: function( event ) {
			if ( event.keyCode && event.keyCode !=  Event.KEY_ESC )
			{
				return;
			}
			if ( this.elemIgnore )
			{
				var elem = Event.element( event );
				if ( elem.up( '#' + elemIgnore.id ) )
					return;
			}
			this.regFunc();
			this.unregister();
		},
		unregister: function() {
			Event.stopObserving( document, 'click', this.boundHandler );
			Event.stopObserving( document, 'keydown', this.boundHandler );
		}
	};
	dismissHandler.regFunc = dismissFunc;
	dismissHandler.elemIgnore = elemIgnore || null;
	dismissHandler.boundHandler = dismissHandler.dismiss.bindAsEventListener( dismissHandler );
	(function () {
		Event.observe( document, 'click', dismissHandler.boundHandler );
		Event.observe( document, 'keydown', dismissHandler.boundHandler );
	}).defer();	// defer by a frame to ensure we don't register the click that opened the popup and clear it

	return dismissHandler;

}





function ShowMenu( elemLink, elemPopup, align, valign, bLinkHasBorder )
{
	var elemLink = $(elemLink);
	var elemPopup = $(elemPopup);

	AlignMenu( elemLink, elemPopup, align, valign, bLinkHasBorder );

	ShowWithFade( elemPopup );
	elemLink.addClassName('focus');
	elemLink.dismissHandler = RegisterPopupDismissal( function() { HideWithFade( elemPopup ); elemLink.removeClassName('focus'); }, elemPopup );
}

function HideMenu( elemLink, elemPopup )
{
	var elemLink = $(elemLink);
	var elemPopup = $(elemPopup);

	HideWithFade( elemPopup );
	elemLink.removeClassName( 'focus' );
	if ( elemLink.dismissHandler )
		elemLink.dismissHandler.unregister();
}

function RegisterFlyout( elemLink, elemPopup, align, valign, bLinkHasBorder )
{
	Event.observe( elemLink, 'mouseover', function(event) { FlyoutMenu( elemLink, elemPopup, align, valign, bLinkHasBorder ); } );

	Event.observe( elemLink, 'mouseout', HideFlyoutMenu.bindAsEventListener( null, elemLink, elemPopup ) );
	Event.observe( elemPopup, 'mouseout', HideFlyoutMenu.bindAsEventListener( null, elemLink, elemPopup ) );

}

function FlyoutMenu( elemLink, elemPopup, align, valign, bLinkHasBorder )
{
	var elemLink = $(elemLink);
	var elemPopup = $(elemPopup);

	if ( !elemPopup.visible() || elemPopup.hiding )
	{
		AlignMenu( elemLink, elemPopup, align, valign, bLinkHasBorder );
		ShowWithFade( elemPopup );
		elemLink.addClassName('focus');
	}

}

function HideFlyoutMenu( event, elemLink, elemPopup )
{
	var elemLink = $(elemLink);
	var elemPopup = $(elemPopup);
	var reltarget = (event.relatedTarget) ? event.relatedTarget : event.toElement;
	if ( !reltarget || ( $(reltarget).up( '#' + elemLink.id ) || $(reltarget).up( '#' + elemPopup.id )  ) )
		return;

	// start hiding in a little bit, have to let the fade in animation start before we can cancel it
	window.setTimeout( HideWithFade.bind( null, elemPopup ), 33 );
	elemLink.removeClassName('focus');
}

function AlignMenu( elemLink, elemPopup, align, valign, bLinkHasBorder )
{
	var align = align ? align : 'left';

	if ( !valign )
	{
		//if there's not enough room between our spot and the top of the document, we definitely want to drop down
		if ( document.viewport.getScrollOffsets().top + elemLink.viewportOffset().top < nPopupHeight )
			valign = 'bottom';
		else
		{
			// add a little bit of padding so we don't position it flush to an edge if possible
			var nPopupHeight = elemPopup.getHeight() + 8;
			var nSpaceAbove = elemLink.viewportOffset().top;
			var nSpaceBelow = document.viewport.getHeight() - elemLink.viewportOffset().top;
			//otherwise we only want to drop down if we've got enough space below us (measured based on view area)
			// or if there's not enough space above to pop in either direction and there's more space below
			if ( nSpaceBelow > nPopupHeight || ( nSpaceAbove < nPopupHeight && nSpaceBelow > nSpaceAbove ) )
				valign = 'bottom';
			else
				valign = 'top';

		}
	}

	var borderpx = bLinkHasBorder ? 1 : 0;
	var shadowpx = 12;
	var offsetLeft = 0;
	if ( align == 'left' )
	{
		//elemPopup.style.left = ( elemLink.positionedOffset()[0] - 12 ) + 'px';
		offsetLeft = -shadowpx - borderpx;
	}
	else if ( align == 'right' )
	{
		//elemPopup.style.left = ( elemLink.positionedOffset()[0] + elemLink.getWidth() - elemPopup.getWidth() + 13 ) + 'px';
		offsetLeft = elemLink.getWidth() - elemPopup.getWidth() + shadowpx + borderpx;
	}
	else if ( align == 'leftsubmenu' )
	{
		//elemPopup.style.left = ( elemLink.positionedOffset()[0] - elemPopup.getWidth() + 12 ) + 'px';
		offsetLeft = -elemPopup.getWidth() + shadowpx - borderpx;
	}
	else if ( align == 'rightsubmenu' )
	{
		//elemPopup.style.left = ( elemLink.positionedOffset()[0] + elemLink.getWidth() - 12 ) + 'px';
		offsetLeft = elemLink.getWidth()  - shadowpx + 2 * borderpx;
	}

	var offsetTop = 0;
	if ( valign == 'bottom' )
	{
		//elemPopup.style.top = ( elemLink.positionedOffset()[1] + elemLink.getHeight() - 12 ) + 'px';
		offsetTop = elemLink.getHeight() - 12;
	}
	else if ( valign == 'top' )
	{
		//elemPopup.style.top = ( elemLink.positionedOffset()[1] - elemPopup.getHeight() + 12 ) + 'px';
		offsetTop = -elemPopup.getHeight() + 12;
	}
	else if ( valign == 'bottomsubmenu' )
	{
		//elemPopup.style.top = ( elemLink.positionedOffset()[1] - 12 ) + 'px';
		offsetTop = -shadowpx;
	}

	var bPopupHidden = !elemPopup.visible();

	if ( bPopupHidden )
	{
		// IE can't do this with display: none elements
		elemPopup.style.visibility = 'hidden';
		elemPopup.show();
	}
	
	elemPopup.clonePosition( elemLink, { setWidth: false, setHeight: false, offsetLeft: offsetLeft, offsetTop: offsetTop } );
	
	if ( bPopupHidden )
	{
		// restore visibility
		elemPopup.hide();
		elemPopup.style.visibility = 'visible';
	}
}



function BShouldSuppressFades()
{
	if ( Prototype.Browser.IE )
	{
		var ieVer =parseInt(navigator.userAgent.substring(navigator.userAgent.indexOf("MSIE")+5));
		return ieVer < 9;
	}
	return false;
}

function ShowWithFade( elem, durationSec )
{
	var elem = $(elem);

	if ( !elem.visible() || elem.hiding )
	{
		durationSec = Math.max( 0.2, typeof durationSec !== 'undefined' ? parseFloat( durationSec ) : 0.2 );
		elem.hiding = false;
		if ( elem.effect )
			elem.effect.cancel();
		
		if ( BShouldSuppressFades() )
		{
			elem.addClassName( 'suppress_shadow' );
			elem.effect = new Effect.Appear( elem, { duration: durationSec, afterFinish: function() { elem.removeClassName( 'suppress_shadow' ); } } );
		}
		else
		{
			elem.effect = new Effect.Appear( elem, { duration: durationSec } );
		}
	}
}

function HideWithFade( elem )
{
	var elem = $(elem);
	
	if ( elem.visible() && !elem.hiding )
	{
		if ( elem.effect && !elem.hiding )
			elem.effect.cancel();
		elem.hiding = true;

		if ( BShouldSuppressFades() )
		{
			elem.addClassName( 'suppress_shadow' );
		}
		elem.effect = new Effect.Fade( elem, { duration: 0.2 } );
	}
}




function abuseSSDescripCheck()
{
	chkd_inap = $('abuseType1').checked;
	chkd_cprt = $('abuseType5').checked;
	if ( chkd_inap )
	{
		$('abuseDescriptionLabel').setStyle( { color: '#777777', fontStyle: 'italic' } );
		$('abuseDescriptionArea').disable();
		$('abuseDescriptionArea').clear();
	}
	else if ( chkd_cprt )
	{
		$('abuseDescriptionLabel').setStyle( { color: '#898989', fontStyle: 'normal' } );
		$('abuseDescriptionArea').enable();
		$('abuseDescriptionArea').focus();
	}
}






function BindOnHashChange( fnCallback )
{
	if ( 'onhashchange' in window )
	{
		Event.observe( window, 'hashchange', function(e) { fnCallback( this.location.hash ); } );
	}
	else
	{
		new LocationHashObserver( null, 0.1, function( el, hash ) { fnCallback( hash ); } );
	}
}

LocationHashObserver = Class.create(Abstract.TimedObserver, {
	getValue: function() {
		return window.location.hash;
	}
} );

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




var CAutoSizingTextArea = Class.create( {
	m_elTextArea: null,
	m_nMinHeight: 20,
	m_nMaxHeight: 500,
	m_cCurrentSize: Number.MAX_VALUE,
	m_fnChangeCallback: null,

	initialize: function( elTextArea, nMinHeight, fnChangeCallback )
	{
		this.m_elTextArea = elTextArea;
		this.m_elTextArea.observe( 'keyup', this.OnTextInput.bind( this ) );
		this.m_elTextArea.observe( 'blur', this.OnTextInput.bind( this ) );
		this.m_elTextArea.observe( 'click', this.OnTextInput.bind( this ) );
		this.m_elTextArea.observe( 'paste', this.OnPasteText.bind( this ) );
		this.m_elTextArea.observe( 'cut', this.OnPasteText.bind( this ) );
		this.m_elTextArea.style.overflow = 'hidden';

		this.m_cEntryLength = Number.MAX_VALUE;
		this.m_nMinHeight = nMinHeight || 20;
		this.m_fnChangeCallback = fnChangeCallback || null;

		this.OnTextInput();
	},

	OnPasteText: function()
	{
		this.OnTextInput.bind( this ).defer();
	},

	OnTextInput: function()
	{
		var iScrollOffset = undefined;
		var cNewLength = this.m_elTextArea.value.length;
		// force a resize
		if ( cNewLength < this.m_cEntryLength )
		{
			// when we shrink this box, we might scroll the window.  Remember where we are so we can jump back
			iScrollOffset = window.scrollY;
			this.m_elTextArea.style.height = this.m_nMinHeight + 'px';
		}

		if ( this.m_elTextArea.scrollHeight > this.m_nMaxHeight )
		{
			this.m_elTextArea.style.height = this.m_nMaxHeight + 'px';
			this.m_elTextArea.style.overflow = 'auto';
		}
		else if ( this.m_elTextArea.scrollHeight != this.m_elTextArea.getHeight() )
		{
			var nHeight = Math.max( this.m_elTextArea.scrollHeight, this.m_nMinHeight );
			this.m_elTextArea.style.height = nHeight + 'px';

			if ( this.m_elTextArea.style.overflow == 'auto' )
				this.m_elTextArea.style.overflow = 'hidden';
		}

		if ( this.m_fnChangeCallback )
			this.m_fnChangeCallback( this.m_elTextArea );

		if ( iScrollOffset )
			window.scrollTo( window.scrollX, iScrollOffset );

		this.m_cEntryLength = cNewLength;
	}
});




var g_rgCommentThreads = {};
function InitializeCommentThread( type, name, rgCommentData, url, nQuoteBoxHeight )
{
	// see if we have a custom comment thread class for this type
	var commentclass = CCommentThread;
	if ( window['CCommentThread' + type] )
		commentclass = window['CCommentThread' + type];

	g_rgCommentThreads[name] = new commentclass( type, name, rgCommentData, url, nQuoteBoxHeight );
}

function FindCommentThread( type, owner, gidFeature, gidFeature2 )
{
	for ( var key in g_rgCommentThreads )
	{
		if ( g_rgCommentThreads[key].BMatches( type, owner, gidFeature, gidFeature2 ) )
			return g_rgCommentThreads[key];
	}
	return null;
}

var CCommentThread = Class.create( {

	m_strName: null,
	m_strCommentThreadType: null,
	m_rgCommentData: null,
	m_strActionURL: null,
	m_elTextArea: null,
	m_cPageSize: null,
	m_nQuoteBoxHeight: 40,

	m_cTotalCount: 0,
	m_iCurrentPage: 0,
	m_cMaxPages: 0,
	m_bLoading: false,
	m_bLoadingUserHasUpVoted : false,
	m_cUpVotes: 0,

	m_bIncludeRaw: false,
	m_rgRawCommentCache: null,

	// these vars are id's we'll update when values change
	m_votecountID: null,
	m_voteupID: null,
	m_commentcountID: null,

	m_oTextAreaSizer: null,

	m_bSubscribed: null,

	initialize: function( type, name, rgCommentData, url, nQuoteBoxHeight )
	{
		this.m_strName = name;
		this.m_strCommentThreadType = type;
		this.m_rgCommentData = rgCommentData;
		this.m_strActionURL = url;
		this.m_nQuoteBoxHeight = nQuoteBoxHeight;

		var start = rgCommentData['start'] ? rgCommentData['start'] : 0;

		this.m_cTotalCount = rgCommentData['total_count'];
		this.m_cPageSize = rgCommentData['pagesize'];
		this.m_iCurrentPage = Math.floor( start / this.m_cPageSize );
		this.m_cMaxPages = Math.ceil( this.m_cTotalCount / this.m_cPageSize );
		this.m_bLoadingUserHasUpVoted = rgCommentData['has_upvoted'];
		this.m_cUpVotes = rgCommentData['upvotes'];
		this.m_votecountID = rgCommentData['votecountid'];
		this.m_voteupID = rgCommentData['voteupid'];
		this.m_commentcountID = rgCommentData['commentcountid'];

		this.m_bSubscribed = rgCommentData['subscribed'];


		var strPrefix = 'commentthread_' + this.m_strName;
		this.m_elTextArea = $( strPrefix + '_textarea');

		if ( rgCommentData['comments_raw'] )
		{
			this.m_bIncludeRaw = true;
			this.m_rgRawCommentCache = rgCommentData['comments_raw'];
			rgCommentData['comments_raw'] = undefined;
		}

		if ( this.m_elTextArea )
		{
			var elSaveButton = $('commentthread_' + this.m_strName + '_submit_container');
			var iMinHeight = this.m_nQuoteBoxHeight;
			if ( this.m_strName.startsWith( 'Profile_' ) )
				iMinHeight = 20;

			this.m_oTextAreaSizer = new CAutoSizingTextArea( this.m_elTextArea, iMinHeight, this.OnTextInput.bind( this, elSaveButton ) );
		}

		$(strPrefix + '_pagebtn_prev').observe( 'click', this.OnPagingButtonClick.bindAsEventListener( this , this.PrevPage )  );
		$(strPrefix + '_fpagebtn_prev').observe( 'click', this.OnPagingButtonClick.bindAsEventListener( this , this.PrevPage )  );
		$(strPrefix + '_pagebtn_next').observe( 'click', this.OnPagingButtonClick.bindAsEventListener( this , this.NextPage ) );
		$(strPrefix + '_fpagebtn_next').observe( 'click', this.OnPagingButtonClick.bindAsEventListener( this , this.NextPage ) );

		var elForm = $( strPrefix + '_form');
		if ( elForm )
		{
			elForm.observe( 'submit', this.OnSubmit.bind( this ) );
		}

		var elSubmit = $(strPrefix + '_submit');
		if ( elSubmit )
		{
			elSubmit.observe( 'click', this.OnSubmit.bind( this ) );
		}

		var elAutosubscribe = $(strPrefix + '_autosubscribe' );
		if ( elAutosubscribe )
		{
			// initialize check state based on preferences
			elAutosubscribe.checked = this.m_bSubscribed || GetValueLocalStorage( 'forum_autosubscribe', false );
			//console.log( 'subscribed? ' + this.m_bSubscribed + ' autosubscribe? ')
			elAutosubscribe.observe( 'change', this.OnAutosubscribeToggle.bind( this ) );
		}

		this.UpdatePagingDisplay();
	},

	BMatches: function( strType, steamidOwner, gidFeature, gidFeature2 )
	{
		return this.m_strCommentThreadType == strType && this.m_rgCommentData['owner'] == steamidOwner &&
			this.m_rgCommentData['feature'] == gidFeature && this.m_rgCommentData['feature2'] == gidFeature2;
	},

	CheckTextAreaSize: function()
	{
		this.m_oTextAreaSizer.OnTextInput();
	},

	OnTextInput: function( elSaveButton, elTextArea )
	{
		if ( elSaveButton )
		{
			if ( elTextArea.value.length > 0 )
				elSaveButton.show();
			else
				elSaveButton.hide();
		}
	},

	GetActionURL: function( action )
	{
		var url = this.m_strActionURL + action + '/';
		url += this.m_rgCommentData['owner'] + '/';
		url += this.m_rgCommentData['feature'] + '/';
		return url;
	},

	ParametersWithDefaults: function( params )
	{
		if ( !params )
			params = {};

		params['count'] = this.m_cPageSize;
		params['sessionid'] = g_sessionID;

		if ( this.m_rgCommentData['extended_data'] )
			params['extended_data'] = this.m_rgCommentData['extended_data'];

		if ( this.m_rgCommentData['feature2'] )
			params['feature2'] = this.m_rgCommentData['feature2'];

		if ( this.m_rgCommentData['oldestfirst'] )
			params['oldestfirst'] = true;

		if ( this.m_rgCommentData['newestfirstpagination'] )
			params['newestfirstpagination'] = true;

		if ( this.m_rgCommentData['lastvisit'] )
			params['lastvisit'] = this.m_rgCommentData['lastvisit'];

		if ( this.m_bIncludeRaw )
			params['include_raw'] = true;


		return params;
	},

	OnSubmit: function()
	{
		if ( this.m_bLoading )
			return;

		var params = this.ParametersWithDefaults( {
			comment: this.m_elTextArea.value
		} );
		
		this.m_bLoading = true;
		new Ajax.Request( this.GetActionURL( 'post' ), {
			method: 'post',
			parameters: params,
			onSuccess: this.OnResponseAddComment.bind( this ),
			onFailure: this.OnFailureDisplayError.bind( this ),
			onComplete: this.OnAJAXComplete.bind( this )
		} );

		var elAutosubscribe = $( 'commentthread_' + this.m_strName + '_autosubscribe' );
		if ( elAutosubscribe && elAutosubscribe.checked && !this.m_bSubscribed )
			this.Subscribe();

		return false;
	},

	DeleteComment: function( gidComment )
	{
		if ( this.m_bLoading )
			return;

		var params = this.ParametersWithDefaults( {
			gidcomment: gidComment,
			start: this.m_cPageSize * this.m_iCurrentPage
		} );

		this.m_bLoading = true;
		new Ajax.Request( this.GetActionURL( 'delete' ), {
			method: 'post',
			parameters: params,
			onSuccess: this.OnResponseDeleteComment.bind( this ),
			onFailure: this.OnFailureDisplayError.bind( this ),
			onComplete: this.OnAJAXComplete.bind( this )
		} );
	},

	DisplayEditComment: function( gidComment )
	{
		var elForm = $('editcommentform_' + gidComment);
		var elTextarea = $('comment_edit_text_' + gidComment);

		var elContent = $('comment_content_' + gidComment);
		elContent.hide();

		if ( elContent.next('.forum_audit') )
			elContent.next('.forum_audit').hide();

		$('comment_edit_' + gidComment).show();
		$('comment_edit_' + gidComment + '_error').update('');

		if ( !elTextarea.value || elTextarea.value.length == 0 )
			elTextarea.value = this.m_rgRawCommentCache[ gidComment ].text;

		if ( !elForm.m_bEventsBound )
		{
			new CAutoSizingTextArea( elTextarea, 40 );
			elForm.observe( 'submit', this.SubmitEditComment.bind( this, elForm ) );
			elForm.observe( 'reset', this.HideEditComment.bind( this, gidComment ) );
			elForm.m_bEventsBound = true;
		}
	},

	VoteUp: function()
	{
		if ( this.m_bLoading )
			return;

		var params = this.ParametersWithDefaults( {
			vote: this.m_bLoadingUserHasUpVoted ? 0 : 1	// flip our vote
		} );

		this.m_bLoading = true;
		new Ajax.Request( this.GetActionURL( 'voteup' ), {
			method: 'post',
			parameters: params,
			onSuccess: this.OnResponseVoteUp.bind( this ),
			onFailure: this.OnFailureDisplayError.bind( this ),
			onComplete: this.OnAJAXComplete.bind( this )
		} );
	},

	GetRawComment: function( gidComment )
	{
		return this.m_rgRawCommentCache[ gidComment ];
	},

	GetCommentTextEntryElement: function()
	{
		return this.m_elTextArea;
	},

	HideEditComment: function( gidComment )
	{
		$('comment_content_' + gidComment).show();
		$('comment_edit_' + gidComment).hide();
	},

	OnResponseEditComment: function( gidComment, transport )
	{
		if ( transport.responseJSON && transport.responseJSON.success)
		{
			// no need to hide because render will replace our whole element
			this.OnResponseRenderComments( CCommentThread.RENDER_DELETEDPOST, transport );	//display the updated comment thread
		}
		else
		{
			this.OnEditFailureDisplayError( gidComment, transport );
		}
	},

	OnEditFailureDisplayError: function( gidComment, transport )
	{
		this.DisplayError( $('comment_edit_' + gidComment + '_error'), transport );
	},

	SubmitEditComment: function( elForm )
	{
		if ( this.m_bLoading )
			return false;

		var gidComment = elForm.elements['gidcomment'].value;
		var strComment = elForm.elements['comment'].value;

		var params = this.ParametersWithDefaults( {
			gidcomment: gidComment,
			comment: strComment,
			start: this.m_cPageSize * this.m_iCurrentPage
		} );

		this.m_bLoading = true;
		new Ajax.Request( this.GetActionURL( 'edit' ), {
			method: 'post',
			parameters: params,
			onSuccess: this.OnResponseEditComment.bind( this, gidComment ),
			onFailure: this.OnEditFailureDisplayError.bind( this, gidComment ),
			onComplete: this.OnAJAXComplete.bind( this )
		} );
		return false;
	},

	OnAJAXComplete: function()
	{
		this.m_bLoading = false;
	},

	OnPagingButtonClick: function( event, fnToExecute )
	{
		event.stop();
		fnToExecute.call( this );
	},

	NextPage: function()
	{
		if ( this.m_iCurrentPage < this.m_cMaxPages - 1 )
			this.GoToPage( this.m_iCurrentPage + 1 );
	},

	PrevPage: function()
	{
		if ( this.m_iCurrentPage > 0 )
			this.GoToPage( this.m_iCurrentPage - 1 );
	},

	GoToPage: function( iPage )
	{
		if ( this.m_bLoading || iPage >= this.m_cMaxPages || iPage < 0 || iPage == this.m_iCurrentPage )
			return;

		var params = this.ParametersWithDefaults( {
			start: this.m_cPageSize * iPage,
			totalcount: this.m_cTotalCount
		} );

		this.m_bLoading = true;
		new Ajax.Request( this.GetActionURL( 'render' ), {
			method: 'post',
			parameters: params,
			onSuccess: this.OnResponseRenderComments.bind( this, CCommentThread.RENDER_GOTOPAGE ),
			onComplete: this.OnAJAXComplete.bind( this )
		});
	},

	GoToPageWithComment: function( gidComment )
	{
		// see if it's on the current page
		if ( this.m_bLoading || $('comment_' + gidComment ) )
			return;

		// nope, load
		var params = this.ParametersWithDefaults( {
			gidComment: gidComment
		} );

		new Ajax.Request( this.GetActionURL( 'render' ), {
			method: 'post',
			parameters: params,
			onSuccess: this.OnResponseRenderComments.bind( this, CCommentThread.RENDER_GOTOPOST ),
			onComplete: this.OnAJAXComplete.bind( this )
		});
	},

	OnResponseAddComment: function( transport )
	{
		if ( transport.responseJSON && transport.responseJSON.success)
		{
			$('commentthread_' + this.m_strName + '_entry_error').hide();
			this.m_elTextArea.value='';
			this.CheckTextAreaSize();
			this.OnResponseRenderComments( CCommentThread.RENDER_NEWPOST, transport );	//display the updated comment thread
		}
		else
		{
			this.OnFailureDisplayError( transport );
		}
	},

	OnResponseDeleteComment: function( transport )
	{
		if ( transport.responseJSON && transport.responseJSON.success )
			this.OnResponseRenderComments( CCommentThread.RENDER_DELETEDPOST, transport );
		else
			this.OnFailureDisplayError( transport );
	},

	OnResponseVoteUp: function( transport )
	{
		if ( transport.responseJSON && transport.responseJSON.success )
		{
			this.OnResponseRenderComments( CCommentThread.RENDER_GOTOPOST, transport );
			this.m_bLoadingUserHasUpVoted = !this.m_bLoadingUserHasUpVoted;	// we can switch this to getting from the response after 8/24/2012
			this.m_cUpVotes = transport.responseJSON.upvotes;

			if ( this.m_votecountID && $(this.m_votecountID) && transport.responseJSON.votetext )
			{
				$(this.m_votecountID).innerHTML = transport.responseJSON.votetext;
			}

			if ( this.m_voteupID && $(this.m_voteupID) )
			{
				if ( this.m_bLoadingUserHasUpVoted )
					$(this.m_voteupID).addClassName('active');
				else
					$(this.m_voteupID).removeClassName('active');
			}
		}
		else
			this.OnFailureDisplayError( transport );
	},

	OnFailureDisplayError: function( transport )
	{
		this.DisplayError( $('commentthread_' + this.m_strName + '_entry_error'), transport );
	},

	DisplayError: function( elError, transport )
	{
		var strMessage = 'Sorry, some kind of error has occurred: ';
		if ( transport.responseJSON && transport.responseJSON.error )
			strMessage += transport.responseJSON.error;
		else
			strMessage += 'There was an error communicating with the network. Please try again later.';

		elError.update( strMessage );
		elError.show();
	},

	OnResponseRenderComments: function( eRenderReason, transport )
	{
		if ( transport.responseJSON )
		{
			var response = transport.responseJSON;
			this.m_cTotalCount = response.total_count;
			this.m_cMaxPages = Math.ceil( response.total_count / response.pagesize );
			this.m_iCurrentPage = Math.floor( response.start / response.pagesize );

			if ( response.comments_raw )
				this.m_rgRawCommentCache = response.comments_raw;

			if ( this.m_commentcountID && $(this.m_commentcountID) )
				$(this.m_commentcountID).innerHTML = this.m_cTotalCount;

			if ( this.m_cTotalCount <= response.start && this.m_iCurrentPage > 0 )
			{
				// this page is no logner valid, flip back a page (deferred so that the AJAX handler exits and reset m_bLoading)
				this.GoToPage.bind( this, this.m_iCurrentPage - 1 ).defer();
				return;
			}

			this.DoTransitionToNewPosts( response, eRenderReason );

			// if we're viewing the most recent page of comments, refresh notifications
			if ( ( !this.m_rgCommentData['oldestfirst'] && this.m_iCurrentPage == 0 ) ||
					this.m_rgCommentData['oldestfirst'] && ( this.m_iCurrentPage + 1 ) * this.m_cPageSize > this.m_cTotalCount )
			{
				RefreshNotificationArea();
			}

			this.UpdatePagingDisplay();
		}
	},

	DoTransitionToNewPosts: function( response, eRenderReason )
	{
		var strNewHTML = response.comments_html;

		var elPosts = $('commentthread_' + this.m_strName + '_posts' );
		var elContainer = $('commentthread_' + this.m_strName + '_postcontainer' );
		elContainer.style.height = elContainer.getHeight() + 'px';

		var bNewPost = ( eRenderReason == CCommentThread.RENDER_NEWPOST );

		if ( bNewPost && this.m_cTotalCount <= this.m_cPageSize && !this.m_rgCommentData['oldestfirst'] && !this.m_rgCommentData['newestfirstpagination'] )
		{
			elContainer.style.position = 'relative';
			elPosts.style.position = 'absolute';
			elPosts.style.left = '0px';
			elPosts.style.right = '0px';
			elPosts.style.bottom = '0px';
		}
		else
		{
			elPosts.style.position = 'static';
		}

		elPosts.update( strNewHTML );

		ScrollToIfNotInView( $('commentthread_' + this.m_strName + '_area'), 40, 20 );

		if ( elContainer.effect )
			elContainer.effect.cancel();

		( function() {
			elContainer.effect = new Effect.Morph( elContainer, { style: 'height: ' + elPosts.getHeight() + 'px', duration: 0.25, afterFinish: function() { elPosts.style.position = 'static'; elContainer.style.height = 'auto';  } } );
		}).defer();
	},

	UpdatePagingDisplay: function()
	{
		var strPrefix = 'commentthread_' + this.m_strName;

		// this element not displayed on the forum topic page
		$(strPrefix + '_totalcount') && $(strPrefix + '_totalcount').update( v_numberformat( this.m_cTotalCount ) );

		var rgPagingControls = [ strPrefix + '_page', strPrefix + '_fpage' ];
		for ( var i = 0; i < rgPagingControls.length; i++ )
		{
			var strPagePrefix = rgPagingControls[i];

			// these elements are displayed on the forum topic page
			$(strPagePrefix + 'total') && $(strPagePrefix + 'total').update( v_numberformat( this.m_cTotalCount ) );
			$(strPagePrefix + 'start') && $(strPagePrefix + 'start').update( v_numberformat( this.m_iCurrentPage * this.m_cPageSize + 1 ) );
			$(strPagePrefix + 'end') && $(strPagePrefix + 'end').update( Math.min( ( this.m_iCurrentPage + 1 ) * this.m_cPageSize, this.m_cTotalCount ) );

			if ( $(strPagePrefix + 'ctn' ) )
			{
				if ( this.m_cTotalCount > 0 )
					$(strPagePrefix + 'ctn' ).show();
				else
					$(strPagePrefix + 'ctn' ).hide();
			}


			if ( this.m_cMaxPages <= 1 )
			{
				$(strPagePrefix + 'controls').hide();
			}
			else
			{
				$(strPagePrefix + 'controls').show();
				if ( this.m_iCurrentPage > 0 )
					$(strPagePrefix + 'btn_prev').removeClassName('disabled');
				else
					$(strPagePrefix + 'btn_prev').addClassName('disabled');

				if ( this.m_iCurrentPage < this.m_cMaxPages - 1 )
					$(strPagePrefix + 'btn_next').removeClassName('disabled');
				else
					$(strPagePrefix + 'btn_next').addClassName('disabled');

				var elPageLinks = $(strPagePrefix + 'links');
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
		}
	},

	AddPageLink: function( elPageLinks, iPage )
	{
		var el = new Element( 'span', {'class': 'commentthread_pagelink' } );
		el.update( (iPage + 1) + ' ' );

		if ( iPage == this.m_iCurrentPage )
			el.addClassName( 'active' );
		else
			el.observe( 'click', this.GoToPage.bind( this, iPage ) );
		
		elPageLinks.insert( el );
	},

	Subscribe: function( fnOnSuccess, fnOnFail )
	{
		var params = this.ParametersWithDefaults();

		new Ajax.Request( this.GetActionURL( 'subscribe' ), {
			method: 'post',
			parameters: params,
			onSuccess: this.OnSubscriptionChange.bind( this, true, fnOnSuccess ),
			onFailure: fnOnFail
		});
	},

	Unsubscribe: function( fnOnSuccess, fnOnFail )
	{
		var params = this.ParametersWithDefaults();

		new Ajax.Request( this.GetActionURL( 'unsubscribe' ), {
			method: 'post',
			parameters: params,
			onSuccess: this.OnSubscriptionChange.bind( this, false, fnOnSuccess ),
			onFailure: fnOnFail
		});
	},

	OnSubscriptionChange: function( bSubscribed, fnProxy, transport )
	{
		this.m_bSubscribed = bSubscribed;

		if ( fnProxy )
			fnProxy( transport );

		var elForumSubscribe = $('forum_subscribe_' + this.m_rgCommentData['feature2'] );
		var elForumUnsubscribe = $('forum_unsubscribe_' + this.m_rgCommentData['feature2'] );
		if ( elForumSubscribe && elForumUnsubscribe )
		{
			if ( bSubscribed )
			{
				elForumSubscribe.hide();
				elForumUnsubscribe.show();
			}
			else
			{
				elForumSubscribe.show();
				elForumUnsubscribe.hide();
			}
		}
	},

	OnAutosubscribeToggle: function()
	{
		var elAutosubscribe = $( 'commentthread_' + this.m_strName + '_autosubscribe' );
		if ( elAutosubscribe )
		{
			SetValueLocalStorage( 'forum_autosubscribe', elAutosubscribe.checked );
		}
	}

} );
CCommentThread.RENDER_NEWPOST = 0;
CCommentThread.RENDER_GOTOPAGE = 1;
CCommentThread.RENDER_GOTOPOST = 2;
CCommentThread.RENDER_DELETEDPOST = 3;

// static accessor
CCommentThread.DeleteComment = function( id, gidcomment )
{
	if ( g_rgCommentThreads[id] )
		g_rgCommentThreads[id].DeleteComment( gidcomment );
};
// static accessor
CCommentThread.EditComment = function( id, gidcomment )
{
	if ( g_rgCommentThreads[id] )
		g_rgCommentThreads[id].DisplayEditComment( gidcomment );
};
// static accessor
CCommentThread.VoteUp = function( id )
{
	if ( g_rgCommentThreads[id] )
		g_rgCommentThreads[id].VoteUp();
};
CCommentThread.FormattingHelpPopup = function( strCommentThreadType )
{
	if ( strCommentThreadType == 'Guide' )
	{
		window.open( 'http://steamcommunity.com/comment/' + strCommentThreadType + '/formattinghelp','formattinghelp','height=975,width=640,resize=yes,scrollbars=yes');
	}
	else
	{
		window.open( 'http://steamcommunity.com/comment/' + strCommentThreadType + '/formattinghelp','formattinghelp','height=640,width=640,resize=yes,scrollbars=yes');
	}
};
CCommentThread.ShowDeletedComment = function( id, gidcomment )
{
	var elComment = $('comment_' + gidcomment);
	var elDeletedComment = $('deleted_comment_' + gidcomment );
	elComment.show();
	elDeletedComment.hide();
};





CGameSelector = Class.create( {
	bHaveSuggestions: false,
	elInput: null,
	elSuggestionsCtn: null,
	elSuggestions: null,
	fnOnClick: null,

	elFocus: null,
	nAppIDFocus: 0,

	initialize: function( elInput, elSuggestionsCtn, elSuggestions, fnOnClick )
	{
		this.elInput = elInput;
		this.elSuggestionsCtn = elSuggestionsCtn;
		this.elSuggestions = elSuggestions;

		if ( !this.elSuggestions && !this.elSuggestionsCtn )
		{
			// build them
			this.elSuggestions = new Element( 'div', {'class': 'shadow_content popup_body popup_menu' } );
			this.elSuggestionsCtn = new Element( 'div', {'class': 'popup_block', style: 'display: none;' } );
			this.elSuggestionsCtn.update( '<div class="shadow_ul"></div><div class="shadow_top"></div><div class="shadow_ur"></div><div class="shadow_left"></div><div class="shadow_right"></div><div class="shadow_bl"></div><div class="shadow_bottom"></div><div class="shadow_br"></div>' );
			this.elSuggestionsCtn.insert( {bottom: this.elSuggestions } );
			this.elInput.parentNode.appendChild( this.elSuggestionsCtn );
		}

		this.fnOnClick = function( Selector, rgAppData ) { Selector.HideSuggestions(); fnOnClick( Selector, rgAppData ); };

		new Form.Element.Observer( elInput, 0.2, this.OnGameSelectTextEntry.bind(this) );
		elInput.observe( 'blur', this.HideSuggestions.bind(this) );
		elInput.observe( 'focus', this.ShowSuggestions.bind(this) );
		elInput.observe( 'keydown', this.OnGameSelectKeyDown.bindAsEventListener( this, elInput ) );
	},

	ShowSuggestions: function()
	{
		if ( !this.elSuggestionsCtn.visible() && this.bHaveSuggestions )
		{
			AlignMenu( this.elInput, this.elSuggestionsCtn, 'left', 'bottom', true );
			ShowWithFade( this.elSuggestionsCtn );
		}
	},

	HideSuggestions: function()
	{
		HideWithFade( this.elSuggestionsCtn );
	},

	OnGameSelectTextEntry: function( elInput, value )
	{
		if ( value )
		{
			new Ajax.Request( 'http://steamcommunity.com/actions/SearchApps/' + encodeURIComponent( value ), {
				method: 'get',
				onSuccess: this.ReceiveGameSelectResponse.bind( this, value )
			} );
		}
		else
		{
			this.elSuggestions.update('');
			this.bHaveSuggestions = false;
		}
	},

	OnGameSelectKeyDown: function( event, elem )
	{
		if ( event.keyCode == Event.KEY_ESC )
		{
			this.HideSuggestions();
		}
		else if ( this.bHaveSuggestions )
		{
			var elNewSuggestion = null;

			if ( event.keyCode == Event.KEY_RETURN )
			{
				if ( this.elFocus )
				{
					this.elFocus.fnOnSelect();
					event.stop();
				}
			}
			else if ( event.keyCode == Event.KEY_UP )
			{
				if ( this.elFocus )
					elNewSuggestion = this.elFocus.previous();
				if ( !elNewSuggestion )
					elNewSuggestion = this.elSuggestions.select(":last-child")[0];
			}
			else if ( event.keyCode == Event.KEY_DOWN )
			{
				if ( this.elFocus )
					elNewSuggestion = this.elFocus.next();
				if ( !elNewSuggestion )
					elNewSuggestion = this.elSuggestions.childElements()[0];
			}

			if ( elNewSuggestion )
				this.SetFocus( elNewSuggestion );
		}
	},

	ReceiveGameSelectResponse: function( value, transport )
	{
		if ( this.elInput.value == value )
		{

			var json = transport.responseJSON;
			this.UpdateListWithOptions( json );

		}
	},

	UpdateListWithOptions: function( rgOptions )
	{
		this.elSuggestions.update('');
		this.elFocus = null;
		if ( rgOptions && rgOptions.length )
		{
			for ( var i=0; i < rgOptions.length; i++ )
			{
				var elSuggestion = new Element( 'div', {'class': 'game_suggestion popup_menu_item' } );
				elSuggestion.update( rgOptions[i].name );

				elSuggestion.appid = rgOptions[i].appid;
				elSuggestion.fnOnSelect = this.fnOnClick.bind( null, this, rgOptions[i] );
				elSuggestion.observe( 'click', elSuggestion.fnOnSelect );
				elSuggestion.observe( 'mouseover', this.SetFocus.bind( this, elSuggestion ) );

				this.elSuggestions.insert( {bottom: elSuggestion } );

				if ( this.nAppIDFocus == elSuggestion.appid )
					this.SetFocus( elSuggestion );
			}
			this.bHaveSuggestions = true;
			this.ShowSuggestions();
		}
		else
		{
			this.bHaveSuggestions = false;
			this.HideSuggestions();
		}
	},


	SetFocus: function( elSuggestion )
	{
		if ( this.elFocus )
			this.elFocus.removeClassName( 'focus' );

		this.elFocus = elSuggestion;
		this.nAppIDFocus = elSuggestion.appid;
		elSuggestion.addClassName( 'focus' );
	}


} );

CGameSelectorOwnedGames = Class.create( CGameSelector, {

	m_bOwnedGamesReady: false,

	initialize: function( $super, elInput, elSuggestionsCtn, elSuggestions, fnOnClick )
	{
		$super( elInput, elSuggestionsCtn, elSuggestions, fnOnClick );
		CGameSelectorOwnedGames.LoadOwnedGames( this.OnOwnedGamesReady.bind( this ) );
	},

	OnOwnedGamesReady: function()
	{
		this.m_bOwnedGamesReady = true;
		this.OnGameSelectTextEntry( this.elInput, this.elInput.value );
	},

	OnGameSelectTextEntry: function( elInput, value )
	{
		if ( value )
		{
			if ( !this.m_bOwnedGamesReady )
			{
				this.elSuggestions.update( '<div style="text-align: center; width: 200px; padding: 5px 0;"><img src="http://cdn.steamcommunity.com/public/images/login/throbber.gif"></div>' );
				this.bHaveSuggestions = true;
				this.ShowSuggestions();
			}
			else
			{
				var rgTerms = value.toLowerCase().split( ' ' );
				var rgRegex = [];
				for ( var iTerm = 0; iTerm < rgTerms.length; iTerm++ )
				{
					var term = RegExp.escape( rgTerms[iTerm] );	// prototype-specific function
					rgRegex.push( new RegExp( term ) );
				}
				var rgMatchingGames = [];
				for ( var i = 0; i < CGameSelectorOwnedGames.s_rgOwnedGames.length; i++ )
				{
					var game = CGameSelectorOwnedGames.s_rgOwnedGames[i];
					var bMatch = true;
					for ( var iRegex = 0; iRegex < rgRegex.length; iRegex++ )
					{
						if ( !rgRegex[iRegex].match( game.name_normalized ) )
						{
							bMatch = false;
							break;
						}
					}
					if ( bMatch )
					{
						rgMatchingGames.push( game );
						if ( rgMatchingGames.length >= 10 )
							break;
					}
				}

				rgMatchingGames.sort( function( a, b ) {
					if ( a.name < b.name )
						return -1;
					else if ( b.name < a.name )
						return 1;
					else
						return 0;
				} );

				this.UpdateListWithOptions( rgMatchingGames );
			}
		}
		else
		{
			this.elSuggestions.update('');
			this.bHaveSuggestions = false;
		}
	}

} );

CGameSelectorOwnedGames.s_rgOwnedGames = null;
CGameSelectorOwnedGames.s_bLoadInFlight = false;
CGameSelectorOwnedGames.s_rgOwnedGamesReadyCallbacks = [];
CGameSelectorOwnedGames.AreOwnedGamesLoaded = function()
{
	return CGameSelectorOwnedGames.s_rgOwnedGames != null;
}
CGameSelectorOwnedGames.LoadOwnedGames = function( fnCallback )
{
	if ( !CGameSelectorOwnedGames.AreOwnedGamesLoaded() )
	{
		CGameSelectorOwnedGames.s_rgOwnedGamesReadyCallbacks.push( fnCallback );

		if ( CGameSelectorOwnedGames.s_bLoadInFlight )
			return;

		CGameSelectorOwnedGames.s_bLoadInFlight = true;

		new Ajax.Request( 'http://steamcommunity.com/actions/GetOwnedApps/', {
			method: 'get',
			parameters: {sessionid: g_sessionID },
			onSuccess: function( transport )
			{
				CGameSelectorOwnedGames.s_rgOwnedGames = transport.responseJSON || [];

				var regexNormalize = new RegExp( /[^0-9a-zA-Z]/g );
				for( var i=0; i < CGameSelectorOwnedGames.s_rgOwnedGames.length; i++ )
				{
					var game = CGameSelectorOwnedGames.s_rgOwnedGames[i];
					game.name_normalized = game.name.replace( regexNormalize, '' ).toLowerCase();
				}
			},
			onFailure: function()
			{
				CGameSelectorOwnedGames.s_rgOwnedGames = [];
			},
			onComplete: function()
			{
				for ( var i = 0; i < CGameSelectorOwnedGames.s_rgOwnedGamesReadyCallbacks.length; i++ )
				{
					CGameSelectorOwnedGames.s_rgOwnedGamesReadyCallbacks[i]();
				}
			}
		} );
	}
	else
	{
		// data is already ready
		fnCallback();
	}
}


function DynamicLink_PlayYouTubeVideoInline( elem, videoid )
{
	var el = $(elem);
	var youtubeurl = 'http://www.youtube.com/embed/' + videoid + '?showinfo=0&autohide=1&fs=1&hd=1&modestbranding=1&rel=0&showsearch=0&wmode=direct&autoplay=1';
	var iframeContent = new Element( 'iframe', { 'class' : 'dynamiclink_youtubeviewvideoembedded', 'frameborder' : '0' } );
	iframeContent.src = youtubeurl;
	if ( el )
	{
		el.insert( {after: iframeContent } );
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

function TargetIsChild( event, selector )
{
	var evt = event || window.event;
	var reltarget = evt.relatedTarget || evt.toElement;
	if ( !reltarget || !$(reltarget).up( selector ) )
		return false;
	return true;
}

function addEvent(el, ev, fn, useCapture)
{
	if(el.addEventListener)
	{
		el.addEventListener(ev, fn, useCapture);
	}
	else if(el.attachEvent)
	{
		var ret = el.attachEvent("on"+ev, fn);
		return ret;
	}
	else
	{
		el["on"+ev] = fn;
	}
}
function fixFloatHeight(floatDiv, fixedDiv, type, topDiv)
{
	floatDivEl = document.getElementById(floatDiv);
	fixedDivEl = document.getElementById(fixedDiv);
	if(floatDivEl && fixedDivEl)
	{
		floatHeight = floatDivEl.offsetHeight;
		fixedHeight = fixedDivEl.offsetHeight;
		if(type == 1)
		{
			if(topDiv)
			{
				floatHeight += document.getElementById(topDiv).offsetHeight;
			}
			if(floatHeight > fixedHeight)
			{
				fixedDivEl.style.height = floatHeight+'px';
			}
		}
		else
		{
			if(fixedHeight > floatHeight)
			{
				floatDivEl.style.height = fixedHeight+'px';
			}
		}
	}
}

function setCheck(checkDiv, checkField)
{
	realField = eval('document.loginForm.'+checkField);
	curVal = realField.value;
	if(curVal == 0)
	{
		document.getElementById(checkDiv).style.color = '#909090';
		realField.value = 1;
	}
	else
	{
		document.getElementById(checkDiv).style.color = '#000000';
		realField.value = 0;
	}
}

function createQuery2( postUrl, returnFn, postData )
{
	uid = Math.round(Math.random()*100000);
	rUid = "requester"+uid;
	eval(rUid+" = new xHttpQuery_Post();");
	eval(rUid+".postUrl = postUrl;");
	eval(rUid+".returnFn = returnFn;");
	eval(rUid+".postData = postData;");
	eval(rUid+".selfRef = \""+rUid+"\";");
	eval(rUid+".doRequest();");
}

var updateInProgress = false;
function xHttpQuery_Post()
{
	this.postUrl = '';
	this.selfRef = '';
	this.postData = '';
	this.dataEncoded = false;
	this.returnFn = false;
	this.doRequest = function()
	{
		if ( updateInProgress == true )
		{
			setTimeout( this.selfRef + ".doRequest()", 200 );
			return;
		}
		if ( this.dataEncoded == false )
		{
			var pairs = [];
			var regexp = /%20/g;
			for ( var name in this.postData )
			{
				var value = this.postData[name].toString();
				var pair = encodeURIComponent( name ).replace( regexp, '+' ) + '=' + encodeURIComponent( value ).replace( regexp, '+' );
				pairs.push( pair );
			}
			this.postData = pairs.join( '&' );
			this.dataEncoded = true;
		}
		updateInProgress = true;
		if ( window.XMLHttpRequest )
		{
			req = new XMLHttpRequest();
		}
		else if( window.ActiveXObject )
		{
			req = new ActiveXObject( "Microsoft.XMLHTTP" );
		}
		if ( req )
		{
			req.open( "POST", this.postUrl, true );
			req.onreadystatechange = this.returnFn;
			req.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );
			req.setRequestHeader( "Content-Length", this.postData.length );
			req.send( this.postData );
		}
	}
}

function GetNameHistory( a_el )
{
	//createQuery2( profileURL + '/namehistory/', ReceiveNameHistory, { "json": 1 } );
	steamId = a_el.id.replace( /namehistory_link_/, '' );
//	alert( steamId );
	$('namehistory_'+steamId).show();
	//alert( a_el.id + "\n" + a_el.href );
}

function winDim(wh, vs)
{
	if(window.innerWidth) // most browsers - ff, safari, etc
	{
		return (wh == 'w' ? (vs == 'v' ? window.innerWidth : window.pageXOffset) : (vs == 'v' ? window.innerHeight : window.pageYOffset));
	}
	else if(document.documentElement && document.documentElement.clientWidth) // ie strict
	{
		return (wh == 'w' ? (vs == 'v' ? document.documentElement.clientWidth : document.documentElement.scrollLeft) : (vs == 'v' ? document.documentElement.clientHeight : document.documentElement.scrollTop));
	}
	else // ie normal
	{
		return (wh == 'w' ? (vs == 'v' ? document.body.clientWidth : document.body.scrollLeft) : (vs == 'v' ? document.body.clientHeight : document.body.scrollTop));
	}
}

function getGoodElement(el,nn,cn,next)
{
	if(next == 1)
	{
		el = el.parentNode;
	}
	while( el.nodeName && el.nodeName.toLowerCase() != nn && el.nodeName.toLowerCase() != "body")
	{
		el = el.parentNode;
	}
	thisClass = ' '+el.className+' ';
	if( el.nodeName && el.nodeName.toLowerCase() != "body" && thisClass.indexOf(' '+cn+' ') == -1)
	{
		return getGoodElement(el,nn,cn,1);
	}
	else if(thisClass.indexOf(' '+cn+' ') != -1)
	{
		return el;
	}
	return false;
}
function addGameActions()
{
	if(!document.getElementsByTagName)
	{
		return;
	}
	var pageDivs = document.getElementsByTagName("div");
	for(var x = 0; x < pageDivs.length; x++)
	{
		tempClassName = " "+pageDivs[x].className+" ";
		tempParentClassName = " "+pageDivs[x].parentNode.className+" ";
		if(tempClassName.indexOf(" gameContainer ") != -1 || tempParentClassName.indexOf(" gameContainer ") != -1)
		{
			addEvent(pageDivs[x], "mouseover", listItem_hilite, false);
			addEvent(pageDivs[x], "mouseout", listItem_lolite, false);
			addEvent(pageDivs[x], "click", listItem_toggle, false);
		}
	}
}

function getPopPos(e, pw, ph, offset)
{
	w = winDim('w','v');
	h = winDim('h','v');
	sl = winDim('w','s');
	st = winDim('h','s');
	// mouse x/y within viewport
	vmX = e.clientX;
	vmY = e.clientY;
	// mouse x/y within document
	smX = vmX + sl;
	smY = vmY + st;
	l = (pw > vmX) ? (smX + offset) : (smX - pw - offset);
	t = (ph > vmY) ? (smY + offset) : (smY - ph - offset);
	popTL = new Array(t, l);
	return popTL;
}

var keepTooltip = false;
function tooltipCreate(tipEl, e)
{
	ttEl = document.getElementById('tooltip');
	if(ttEl)
	{
		ttEl.parentNode.removeChild(ttEl);
	}
	ttEl = document.createElement('div');
	ttEl.id = 'tooltip';
	ttEl.style.position = 'absolute';
	ttEl.appendChild(tipEl);
	document.getElementsByTagName('body')[0].appendChild(ttEl);
	tipTL = getPopPos(e, ttEl.clientWidth, ttEl.clientHeight, 6);
	ttEl.style.top = tipTL[0] + 'px';
	ttEl.style.left = tipTL[1] + 'px';
}

function tooltipDestroy(go)
{
	if ( go != 1 )
	{
		setTimeout( "tooltipDestroy(1)", 10 );
	}
	else
	{
		ttEl = document.getElementById('tooltip');
		if(ttEl)
		{
			ttEl.parentNode.removeChild(ttEl);
		}
	}
}

function getElement( elementId )
{
	var elem;
	if ( document.getElementById ) // standard compliant method
		elem = document.getElementById( elementId )
	else if ( document.all ) // old msie versions
		elem = document.all[ elementId ]
	else
		elem = false;

	return elem;
}

function setImage( elementId, strImage )
{
	var imageElem = getElement( elementId );
	if ( !imageElem )
		return;

	imageElem.src = strImage;
}

function iSwapFullURL( imgID, newImg )
{
	newImgPath = newImg;
	setImage( imgID, newImgPath );
}


function GetCurrentScrollPercentage()
{
	return ((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100);
}

// @elemID id of the element
// @fixedOffsetTop offset from the top when fixed
// @bScrollWithPageIfTooTall if the element is taller than the page, then it will "scroll" with the page if this is true
// @docHeightOffset if bScrollWithPageIfTooTall is set to true, then this is how much the document height is reduced by (recommend this to be 130 for the typical footer)
FixedElementOnScrollWrapper = Class.create({
	initialize: function initialize( elemID, fixedOffsetTop, bScrollWithPageIfTooTall, docHeightOffset )
	{
		this.fixedElement = $( elemID );
		this.fixedOffsetTop = typeof fixedOffsetTop != "undefined" ? fixedOffsetTop : 0;
		this.bScrollWithPageIfTooTall = typeof bScrollWithPageIfTooTall != "undefined" ? bScrollWithPageIfTooTall : false;
		this.docHeightOffset = typeof docHeightOffset != "undefined" ? docHeightOffset : 0;
		this.homePosn = { x: this.fixedElement.cumulativeOffset()[0], y: this.fixedElement.cumulativeOffset()[1] };


		this.fixedElementPadding = new Element( 'div' );
		this.fixedElementPadding.hide();
		this.fixedElement.insert( { before: this.fixedElementPadding } );

		Event.observe(document, 'scroll', this.handleScroll.bind(this));
		BindOnHashChange( this.handleScroll.bind(this) );
		this.handleScroll();
	},
	handleScroll: function handleScroll()
	{
		this.scrollOffset = document.viewport.getScrollOffsets().top;
		var offsetTop = this.fixedOffsetTop;
		if ( this.scrollOffset > ( this.homePosn.y - offsetTop ) )
		{
			if ( this.fixedElement.style.position != 'fixed' )
			{
				this.fixedElement.style.position = 'fixed';
				this.fixedElement.style.top = offsetTop + 'px';
				this.fixedElement.style.left = this.homePosn.x;
				this.fixedElementPadding.show();
				this.fixedElementPadding.style.height = this.fixedElement.getHeight() + 'px';
			}

			if ( this.bScrollWithPageIfTooTall )
			{
				// this forces the element to scroll off the page, but there's enough that isn't on the page, "scroll" this guy percentage-wise
				var elemHeight = this.fixedElement.getHeight() + offsetTop;
				if ( elemHeight > document.viewport.getHeight() )
				{
					var currentScrollPercentage = GetCurrentScrollPercentage();
					var heightDiff = elemHeight - ( document.viewport.getHeight() - this.docHeightOffset );
					offsetTop -= Math.floor( heightDiff * currentScrollPercentage / 100 );
					this.fixedElement.style.top = offsetTop + 'px';
				}
			}
		}
		else
		{
			if ( this.fixedElement.style.position != 'relative' )
			{
				this.fixedElement.style.position = 'relative';
				this.fixedElement.style.top = null;
				this.fixedElement.style.left = null;
				this.fixedElementPadding.hide();
			}
		}
	}
});

/**
 * Generic search field that handles:
 * 1.) Showing default text if the input field is empty
 * 2.) When the input field gets focus, the text field clears
 * 3.) Adding CSS class to the input field when it is default text
 * 4.) When the user presses return/enter in  the field
 *
 * Call ClearIfDefaultValue() before submitting the form
 */
SearchFieldWithText = Class.create({
	initialize: function initialize( elemID, defaultSearchText, onEnterFunc, defaultTextCSSClass )
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
	},
	handleClickOrFocus: function handleClick()
	{
		if ( this.elem.value == this.defaultSearchText )
		{
			this.elem.value = '';
			if ( this.defaultTextCSSClass )
				this.elem.removeClassName( this.defaultTextCSSClass );
		}
	},
	handleBlur: function handleBlur()
	{
		if ( this.elem.value == '')
		{
			this.elem.value = this.defaultSearchText;
			if ( this.defaultTextCSSClass )
				this.elem.addClassName( this.defaultTextCSSClass );
		}
	},
	handleKeypress: function handleKeypress()
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
	},
	ClearIfDefaultValue: function ClearIfDefaultValue()
	{
		if ( this.elem.value == this.defaultSearchText )
		{
			this.elem.value = '';
		}
	}
});


function iSwap( imgID, newImg )
{
	newImgPath = "http://cdn.steamcommunity.com/public/images/" + newImg;
	setImage( imgID, newImgPath );
}


function ListenToIFrameMessage( callbackFunc )
{
	// Respond to a posted message from our sub-frame
	var eventMethodAlias = ( window.addEventListener ) ? "addEventListener" : "attachEvent";
	var eventMethod = window[eventMethodAlias];
	var messageEvent = ( eventMethod === "attachEvent" ) ? "onmessage" : "message";

	eventMethod( messageEvent, callbackFunc, false );
}

var gSharePopup = null;
var gShareRequestURL = null;
function ShowSharePublishedFilePopup( publishedFileID, appID )
{
	gShareRequestURL = "http://steamcommunity.com/sharedfiles/shareonsteam/?id=" + publishedFileID + '&appid=' + appID;

	var shareURL = "http://steamcommunity.com/sharedfiles/filedetails/?id=" + publishedFileID;
	var baseSocialShareURL = "http://steamcommunity.com/sharedfiles/share/?id=" + publishedFileID;
	ShowSharePopup( shareURL, baseSocialShareURL );
}

function ShowShareNewsPostPopup( gid, appid )
{
	gShareRequestURL = "http://steamcommunity.com/news/shareonsteam/" + gid + "?appid=" + appid;

	var baseSocialShareURL = "http://steamcommunity.com/news/sharepost/" + gid;
	var shareURL = "http://steamcommunity.com/news/post/" + gid;
	ShowSharePopup( shareURL, baseSocialShareURL );
}

function ShowShareClanAnnouncementPopup( groupId, gid )
{
	gShareRequestURL = "http://steamcommunity.com/gid/" + groupId + "/announcements/shareonsteam/" + gid;

	var baseSocialShareURL = "http://steamcommunity.com/gid/" + groupId + "/announcements/share/" + gid;
	var shareURL = "http://steamcommunity.com/gid/" + groupId + "/announcements/detail/" + gid;
	ShowSharePopup( shareURL, baseSocialShareURL );
}

function ShowSharePopup( url, baseSocialShareURL )
{
	var appendQueryParam = baseSocialShareURL.indexOf( "?" ) != -1 ? '&' : '?';

	$( "SharePopupLink_Facebook" ).href = baseSocialShareURL + appendQueryParam + "site=facebook";
	$( "SharePopupLink_Twitter" ).href = baseSocialShareURL + appendQueryParam + "site=twitter";
	$( "SharePopupLink_Reddit" ).href = baseSocialShareURL + appendQueryParam + "site=reddit";
	$( "SharePopupLink_Digg" ).href = baseSocialShareURL + appendQueryParam + "site=digg";

	$( "SharePopupInput" ).value = url;

	gSharePopup = ShowDialog( 'Share', $( 'SharePopup' ) );
	gSharePopup.SetRemoveContentOnDismissal( false );
	$( 'SharePopup' ).show();
}

var gShareOnSteamDialog = null;
function ShareOnSteam()
{
	gSharePopup.Dismiss();
	gSharePopup = null;

	$( 'ShareOnSteamDialogContents' ).hide();
	new Ajax.Updater( "ShareOnSteamDialogContents", gShareRequestURL, { evalScripts: true, onLoaded: function() { ShowWithFade( $( 'ShareOnSteamDialogContents') ); } } );
	$( 'ShareOnSteamDialog' ).show();
	gShareOnSteamDialog = ShowDialog( 'Share', $( 'ShareOnSteamDialog' ) );
	gShareOnSteamDialog.SetRemoveContentOnDismissal( false );
}

function CloseShareOnSteamDialog()
{
	gShareOnSteamDialog.Dismiss();
}

function ShareContentToUserStatus( text, urlToShare, appID, posturl )
{
	text += '\n\n' + urlToShare;
	new Ajax.Request( posturl, {
		insertion: Insertion.Bottom,
		method: 'post',
		parameters: { sessionid: g_sessionID, status_text: text, appid: appID },
		onSuccess: function(transport) {
			gShareOnSteamDialog.Dismiss();
			ShowAlertDialog( 'Share', 'The status update has been posted to your Friends Activity.' );
		},
		onFailure: function(transport) {
			ShowAlertDialog( 'Share', 'There was a problem sharing the status update.  Please try again later.' );
		}
	});
}





