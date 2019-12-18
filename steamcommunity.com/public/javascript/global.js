


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





function RefreshNotificationArea()
{
	// the new way - updates both the old envelope and responsive menu
	UpdateNotificationCounts();
}

function vIE()
{
	return (navigator.appName=='Microsoft Internet Explorer') ? parseFloat( ( new RegExp( "MSIE ([0-9]{1,}[.0-9]{0,})" ) ).exec( navigator.userAgent )[1] ) : -1;
}

function checkAbuseSub( elForm )
{
	if ( !$J(elForm).find('input[name=abuseType]:checked').length )
	{
		alert( 'Please select a reason for reporting abuse' );
		return false;
	}

	CModal.DismissActiveModal();

	var params = $J(elForm).serializeArray();
	params.push( {name: 'json', value: 1} );

	$J.post( 'https://steamcommunity.com/actions/ReportAbuse/', params).done( function() {
		ShowAlertDialog( 'Thank You!', 'Thank you for reporting offensive content and helping to keep Steam clean and friendly.' );
	}).fail( function() {
		ShowAlertDialog( 'Report Violation', 'There was a problem saving your report.  Please try again later.' );
	});
	return false;
}



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
	"blogger.com",
	"friendster.com",
	"fotolog.net",
	"google.fr",
	"baidu.com",
	"microsoft.com",
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
	"playdota.com",
	"kickstarter.com",
	"gamingheads.com",
	"reddit.com",
	"counter-strike.net",
	"imgur.com"
];

function getHostname( str )
{
	var re = new RegExp( '^(steam://openurl(_external)?/)?(f|ht)tps?://([^@/?#]*@)?([^/#?]+)', 'im' );
	return str.trim().match(re)[5].toString();
}

function AlertNonSteamSite( elem )
{
	var url = elem.href;
	var hostname = getHostname( url );
	if ( hostname )
	{
		hostname = hostname.toLowerCase();
		for ( var i = 0; i < g_whiteListedDomains.length; ++i )
		{
			var index = hostname.lastIndexOf( g_whiteListedDomains[i] );
			if ( index != -1 && index == ( hostname.length - g_whiteListedDomains[i].length )
				 && ( index == 0 || hostname.charAt( index - 1 ) == '.' ) )
			{
				return true;
			}
		}
		return confirm( 'Note: the URL you have clicked on is not an official Steam web site.\n\n'
						+ url.replace( new RegExp( '^steam://openurl(_external)?/' ), '' ) + '\n\n'
						+ 'If this web site asks for your user name or password, do not enter that information. You could lose your Steam account and all your games!\n'
						+ 'Are you sure you want to visit this page? Click OK to continue at your own risk.\n' );
	}

	ShowAlertDialog( '', 'The URL is badly formed.');
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
	if ( typeof ga != "undefined" && ga )
	{
		var rgURLs = [ 'https://steamcommunity.com', 'https://steamcommunity.com' ];
		for ( var i = 0; i < rgURLs.length; ++i )
		{
			var baseURL = rgURLs[i];
			var idx = url.indexOf(baseURL);
			if ( idx != -1 )
			{
				url = url.substring( idx + baseURL.length );
			}
			ga( 'send', 'pageview', url );
			return;
		}
	}
}

var g_SNR = false;

function RecordAppImpression( appid, snr )
{
	if ( appid == 0 || !snr )
		return;

	var strImpressions = V_GetCookie( "app_impressions" );
	var rgImpressions = strImpressions && strImpressions.length != 0 ? strImpressions.split( "|" ) : [];

	var strImpressionData = appid + '@' + snr;
	rgImpressions.push( strImpressionData );

	V_SetCookie( "app_impressions", rgImpressions.join( '|' ) );
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

// included data: strCode, eCurrencyCode, strSymbol, bSymbolIsPrefix, bWholeUnitsOnly
g_rgCurrencyData = {"USD":{"strCode":"USD","eCurrencyCode":1,"strSymbol":"$","bSymbolIsPrefix":true,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":""},"GBP":{"strCode":"GBP","eCurrencyCode":2,"strSymbol":"\u00a3","bSymbolIsPrefix":true,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":""},"EUR":{"strCode":"EUR","eCurrencyCode":3,"strSymbol":"\u20ac","bSymbolIsPrefix":false,"bWholeUnitsOnly":false,"strDecimalSymbol":",","strThousandsSeparator":" ","strSymbolAndNumberSeparator":""},"CHF":{"strCode":"CHF","eCurrencyCode":4,"strSymbol":"CHF","bSymbolIsPrefix":true,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":" ","strSymbolAndNumberSeparator":" "},"RUB":{"strCode":"RUB","eCurrencyCode":5,"strSymbol":"p\u0443\u0431.","bSymbolIsPrefix":false,"bWholeUnitsOnly":true,"strDecimalSymbol":",","strThousandsSeparator":"","strSymbolAndNumberSeparator":" "},"BRL":{"strCode":"BRL","eCurrencyCode":7,"strSymbol":"R$","bSymbolIsPrefix":true,"bWholeUnitsOnly":false,"strDecimalSymbol":",","strThousandsSeparator":".","strSymbolAndNumberSeparator":" "},"JPY":{"strCode":"JPY","eCurrencyCode":8,"strSymbol":"\u00a5","bSymbolIsPrefix":true,"bWholeUnitsOnly":true,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":" "},"NOK":{"strCode":"NOK","eCurrencyCode":9,"strSymbol":"kr","bSymbolIsPrefix":false,"bWholeUnitsOnly":false,"strDecimalSymbol":",","strThousandsSeparator":".","strSymbolAndNumberSeparator":" "},"IDR":{"strCode":"IDR","eCurrencyCode":10,"strSymbol":"Rp","bSymbolIsPrefix":true,"bWholeUnitsOnly":true,"strDecimalSymbol":".","strThousandsSeparator":" ","strSymbolAndNumberSeparator":" "},"MYR":{"strCode":"MYR","eCurrencyCode":11,"strSymbol":"RM","bSymbolIsPrefix":true,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":""},"PHP":{"strCode":"PHP","eCurrencyCode":12,"strSymbol":"P","bSymbolIsPrefix":true,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":""},"SGD":{"strCode":"SGD","eCurrencyCode":13,"strSymbol":"S$","bSymbolIsPrefix":true,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":""},"THB":{"strCode":"THB","eCurrencyCode":14,"strSymbol":"\u0e3f","bSymbolIsPrefix":true,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":""},"VND":{"strCode":"VND","eCurrencyCode":15,"strSymbol":"\u20ab","bSymbolIsPrefix":false,"bWholeUnitsOnly":true,"strDecimalSymbol":",","strThousandsSeparator":".","strSymbolAndNumberSeparator":""},"KRW":{"strCode":"KRW","eCurrencyCode":16,"strSymbol":"\u20a9","bSymbolIsPrefix":true,"bWholeUnitsOnly":true,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":" "},"TRY":{"strCode":"TRY","eCurrencyCode":17,"strSymbol":"TL","bSymbolIsPrefix":false,"bWholeUnitsOnly":false,"strDecimalSymbol":",","strThousandsSeparator":".","strSymbolAndNumberSeparator":" "},"UAH":{"strCode":"UAH","eCurrencyCode":18,"strSymbol":"\u20b4","bSymbolIsPrefix":false,"bWholeUnitsOnly":true,"strDecimalSymbol":",","strThousandsSeparator":" ","strSymbolAndNumberSeparator":""},"MXN":{"strCode":"MXN","eCurrencyCode":19,"strSymbol":"Mex$","bSymbolIsPrefix":true,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":" "},"CAD":{"strCode":"CAD","eCurrencyCode":20,"strSymbol":"CDN$","bSymbolIsPrefix":true,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":" "},"AUD":{"strCode":"AUD","eCurrencyCode":21,"strSymbol":"A$","bSymbolIsPrefix":true,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":" "},"NZD":{"strCode":"NZD","eCurrencyCode":22,"strSymbol":"NZ$","bSymbolIsPrefix":true,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":" "},"PLN":{"strCode":"PLN","eCurrencyCode":6,"strSymbol":"z\u0142","bSymbolIsPrefix":false,"bWholeUnitsOnly":false,"strDecimalSymbol":",","strThousandsSeparator":" ","strSymbolAndNumberSeparator":""},"CNY":{"strCode":"CNY","eCurrencyCode":23,"strSymbol":"\u00a5","bSymbolIsPrefix":true,"bWholeUnitsOnly":true,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":" "},"INR":{"strCode":"INR","eCurrencyCode":24,"strSymbol":"\u20b9","bSymbolIsPrefix":true,"bWholeUnitsOnly":true,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":" "},"CLP":{"strCode":"CLP","eCurrencyCode":25,"strSymbol":"CLP$","bSymbolIsPrefix":true,"bWholeUnitsOnly":true,"strDecimalSymbol":",","strThousandsSeparator":".","strSymbolAndNumberSeparator":" "},"PEN":{"strCode":"PEN","eCurrencyCode":26,"strSymbol":"S\/.","bSymbolIsPrefix":true,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":""},"COP":{"strCode":"COP","eCurrencyCode":27,"strSymbol":"COL$","bSymbolIsPrefix":true,"bWholeUnitsOnly":true,"strDecimalSymbol":",","strThousandsSeparator":".","strSymbolAndNumberSeparator":" "},"ZAR":{"strCode":"ZAR","eCurrencyCode":28,"strSymbol":"R","bSymbolIsPrefix":true,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":" ","strSymbolAndNumberSeparator":" "},"HKD":{"strCode":"HKD","eCurrencyCode":29,"strSymbol":"HK$","bSymbolIsPrefix":true,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":" "},"TWD":{"strCode":"TWD","eCurrencyCode":30,"strSymbol":"NT$","bSymbolIsPrefix":true,"bWholeUnitsOnly":true,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":" "},"SAR":{"strCode":"SAR","eCurrencyCode":31,"strSymbol":"SR","bSymbolIsPrefix":false,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":" "},"AED":{"strCode":"AED","eCurrencyCode":32,"strSymbol":"AED","bSymbolIsPrefix":false,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":" "},"ARS":{"strCode":"ARS","eCurrencyCode":34,"strSymbol":"ARS$","bSymbolIsPrefix":true,"bWholeUnitsOnly":false,"strDecimalSymbol":",","strThousandsSeparator":".","strSymbolAndNumberSeparator":" "},"ILS":{"strCode":"ILS","eCurrencyCode":35,"strSymbol":"\u20aa","bSymbolIsPrefix":true,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":""},"BYN":{"strCode":"BYN","eCurrencyCode":36,"strSymbol":"Br","bSymbolIsPrefix":true,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":""},"KZT":{"strCode":"KZT","eCurrencyCode":37,"strSymbol":"\u20b8","bSymbolIsPrefix":false,"bWholeUnitsOnly":true,"strDecimalSymbol":",","strThousandsSeparator":" ","strSymbolAndNumberSeparator":""},"KWD":{"strCode":"KWD","eCurrencyCode":38,"strSymbol":"KD","bSymbolIsPrefix":false,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":" "},"QAR":{"strCode":"QAR","eCurrencyCode":39,"strSymbol":"QR","bSymbolIsPrefix":false,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":" "},"CRC":{"strCode":"CRC","eCurrencyCode":40,"strSymbol":"\u20a1","bSymbolIsPrefix":true,"bWholeUnitsOnly":true,"strDecimalSymbol":",","strThousandsSeparator":".","strSymbolAndNumberSeparator":""},"UYU":{"strCode":"UYU","eCurrencyCode":41,"strSymbol":"$U","bSymbolIsPrefix":true,"bWholeUnitsOnly":true,"strDecimalSymbol":",","strThousandsSeparator":".","strSymbolAndNumberSeparator":""},"RMB":{"strCode":"RMB","eCurrencyCode":9000,"strSymbol":"\u5200\u5e01","bSymbolIsPrefix":false,"bWholeUnitsOnly":true,"strDecimalSymbol":".","strThousandsSeparator":"","strSymbolAndNumberSeparator":" "},"NXP":{"strCode":"NXP","eCurrencyCode":9001,"strSymbol":"\uc6d0","bSymbolIsPrefix":false,"bWholeUnitsOnly":true,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":""}};


// takes an integer
function v_currencyformat( valueInCents, currencyCode, countryCode )
{
	var currencyFormat = (valueInCents / 100).toFixed(2);

	if ( g_rgCurrencyData[currencyCode] )
	{
		var currencyData = g_rgCurrencyData[currencyCode];
		if ( IsCurrencyWholeUnits( currencyCode ) )
		{
			currencyFormat = currencyFormat.replace( '.00', '' );
		}
		
		if ( currencyData.strDecimalSymbol != '.' )
		{
			currencyFormat = currencyFormat.replace( '.', currencyData.strDecimalSymbol );
		}
		
		var currencyReturn = IsCurrencySymbolBeforeValue( currencyCode ) ?
			 GetCurrencySymbol( currencyCode ) + currencyData.strSymbolAndNumberSeparator + currencyFormat 
			 : currencyFormat + currencyData.strSymbolAndNumberSeparator + GetCurrencySymbol( currencyCode );
		
		if ( currencyCode == 'USD' && typeof(countryCode) != 'undefined' && countryCode != 'US' )
		{
			return currencyReturn + ' USD';
		}
		else if ( currencyCode == 'EUR' )
		{
			return currencyReturn.replace( ',00', ',--' );
		}
		else
		{
			return currencyReturn;
		}
	}
	else
	{
		return currencyFormat + ' ' + currencyCode;
	}
}


function IsCurrencySymbolBeforeValue( currencyCode )
{
	return g_rgCurrencyData[currencyCode] && g_rgCurrencyData[currencyCode].bSymbolIsPrefix;
}

function IsCurrencyWholeUnits( currencyCode )
{
		return g_rgCurrencyData[currencyCode] && g_rgCurrencyData[currencyCode].bWholeUnitsOnly && currencyCode != 'RUB';
}

// Return the symbol to use for a currency
function GetCurrencySymbol( currencyCode )
{
	return g_rgCurrencyData[currencyCode] ? g_rgCurrencyData[currencyCode].strSymbol : currencyCode + ' ';
}

function GetCurrencyCode( currencyId )
{
	for ( var code in g_rgCurrencyData )
	{
		if ( g_rgCurrencyData[code].eCurrencyCode == currencyId )
			return code;
	}
	return 'Unknown';
}

function GetAvatarURLFromHash( hash, size )
{
	var strURL = 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/' + hash.substring( 0, 2 ) + '/' + hash;

	if ( size == 'full' )
		strURL += '_full.jpg';
	else if ( size == 'medium' )
		strURL += '_medium.jpg';
	else
		strURL += '.jpg';

	return strURL;
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

function StandardCommunityBan( steamid, elemLink )
{
	$J.get( 'https://steamcommunity.com/actions/communitybandialog', { 'sessionID' : g_sessionID, 'steamID' : steamid } )
	.done( function( data )
	{
		var $Content = $J(data);
		var Modal = ShowConfirmDialog( "Community Ban", $Content, 'Submit'
		).done(	function( ) {

			var $Form = $Content.find( 'form#community_ban_form' );

			$J.post( "https://steamcommunity.com/actions/StandardCommunityBan", $Form.serialize() )
			.done( function( data ) {
				if ( !$J.isEmptyObject( elemLink ) )
				{
                    $J(elemLink).replaceWith( '<span style="color: red;">Banned</span>' );
				}
				else {
                    location.reload();
				}

			}).fail( function( jqxhr ) {
				// jquery doesn't parse json on fail
				var data = V_ParseJSON( jqxhr.responseText );
				ShowAlertDialog( 'Community Ban & Delete Comments', 'Failed with error message: ' + data.success );
			});
		} );

	}).fail( function( data )
	{
		ShowAlertDialog( 'Community Ban & Delete Comments', 'You do not have permissions to view this or you are not logged in.' );
	});

}

function ReportProfile( steamID )
{
	var $Content = $J('<div class="group_invite_throbber"><img src="https://steamcommunity-a.akamaihd.net/public/images/login/throbber.gif"></div>');
	var $Modal = ShowDialog( 'Report Profile', $Content );
	var sURL = 'https://steamcommunity.com/actions/ReportProfile/' + steamID;
	$J.ajax( {
		url: sURL,
		type: 'GET'
	}).done( function ( data ) {
		var $DialogHTML = $J( data );
		$Content.replaceWith( $DialogHTML );
		$Modal.SetMaxHeight( '850' );
	} );
}

function CEmoticonPopup( $EmoticonButton, $Textarea, strBaseURL )
{
	this.m_$EmoticonButton = $EmoticonButton;
	this.m_$TextArea = $Textarea;
	this.m_strBaseURL = strBaseURL || 'https://steamcommunity.com';

	if ( CEmoticonPopup.sm_deferEmoticonsLoaded == null )
		CEmoticonPopup.sm_deferEmoticonsLoaded = new jQuery.Deferred();

	this.m_bVisible = false;
	this.m_$Popup = null;

	var _this = this;
	this.m_$EmoticonButton.one('mouseenter', function() { _this.LoadEmoticons(); } );
	this.m_$EmoticonButton.click( function() { _this.LoadEmoticons(); CEmoticonPopup.sm_deferEmoticonsLoaded.done( function() { _this.OnButtonClick(); } ) } );
	this.m_fnOnDocumentClick = function() { _this.DismissPopup(); };
}

CEmoticonPopup.sm_rgEmoticons = [];
CEmoticonPopup.sm_bEmoticonsLoaded = false;
CEmoticonPopup.sm_deferEmoticonsLoaded = null;

CEmoticonPopup.prototype.LoadEmoticons = function()
{
	if ( CEmoticonPopup.sm_bEmoticonsLoaded )
		return;

	CEmoticonPopup.sm_bEmoticonsLoaded = true;
	CEmoticonPopup.sm_rgEmoticons = [];
	$J.get( this.m_strBaseURL + '/actions/EmoticonList' )
		.done( function(data) {
			if ( data )
				CEmoticonPopup.sm_rgEmoticons = data;
		}).always( function() { CEmoticonPopup.sm_deferEmoticonsLoaded.resolve() } );
};

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
		else
			PositionEmoticonHover( this.m_$Popup, this.m_$EmoticonButton );

		this.m_$EmoticonButton.addClass( 'focus' );
		this.m_$Popup.stop();
		this.m_$Popup.fadeIn( 'fast' );
		this.m_bVisible = true;

		if ( window.UseSmallScreenMode && window.UseSmallScreenMode() )
		{
			// scroll such that the emoticon button is just above the popup window we're showing at the bottom of the screen
			// 	the 10 pixels represents the popup being positioned 5px from the bottom of the screen, and 5px between the popup and button
			$J(window).scrollTop( this.m_$EmoticonButton.offset().top - $J(window).height() + this.m_$Popup.height() + this.m_$EmoticonButton.height() + 10 );
		}

		var _this = this;
		window.setTimeout( function() { $J(document).one( 'click.EmoticonPopup', _this.m_fnOnDocumentClick ) }, 0 );
	}
};

CEmoticonPopup.prototype.DismissPopup = function()
{
	this.m_$Popup.fadeOut( 'fast' );
	this.m_$EmoticonButton.removeClass( 'focus' );
	this.m_bVisible = false;

	$J(document).off( 'click.EmoticonPopup' );
};

CEmoticonPopup.prototype.BuildPopup = function()
{
	this.m_$Popup = $J('<div/>', {'class': 'emoticon_popup_ctn' } );

	var $PopupInner = $J('<div/>', {'class': 'emoticon_popup' } );
	this.m_$Popup.append( $PopupInner );
	var $Content = $J('<div/>', {'class': 'emoticon_popup_content' } );
	$PopupInner.append( $Content );

	for( var i = 0; i < CEmoticonPopup.sm_rgEmoticons.length; i++ )
	{
		var strEmoticonName = CEmoticonPopup.sm_rgEmoticons[i].replace( /:/g, '' );
		var strEmoticonURL = 'https://steamcommunity-a.akamaihd.net/economy/emoticon/' + strEmoticonName;

		var $Emoticon = $J('<div/>', {'class': 'emoticon_option', 'data-emoticon': strEmoticonName } );
		var $Img = $J('<img/>', {'src': strEmoticonURL, 'class': 'emoticon' } );
		$Emoticon.append( $Img );

		$Emoticon.click( this.GetEmoticonClickClosure( strEmoticonName ) );

		$Content.append( $Emoticon );
	}

	$J(document.body).append( this.m_$Popup );
	PositionEmoticonHover( this.m_$Popup, this.m_$EmoticonButton );
};

CEmoticonPopup.prototype.GetEmoticonClickClosure = function ( strEmoticonName )
{
	var _this = this;
	var strTextToInsert = ':' + strEmoticonName + ':';
	return function() {
		var elTextArea = _this.m_$TextArea[0];
		if ( elTextArea )
		{
			var nSelectionStart = elTextArea.selectionStart;
			elTextArea.value = elTextArea.value.substr( 0, nSelectionStart ) + strTextToInsert + elTextArea.value.substr( nSelectionStart );
			elTextArea.selectionStart = nSelectionStart + strTextToInsert.length;
		}

		_this.m_$TextArea.focus();

		_this.DismissPopup();

		if ( window.DismissEmoticonHover )
			window.setTimeout( DismissEmoticonHover, 1 );
	};
};

function PositionEmoticonHover( $Hover, $Target )
{
	// we position fixed in CSS for responsive mode
	if ( window.UseSmallScreenMode && window.UseSmallScreenMode() )
	{
		$Hover.css( 'left', '' ).css('top', '' );
		return;
	}

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


function InitEconomyHovers( strEconomyCSSURL, strEconomyCommonJSURL, strEconomyJSURL )
{
	var $Hover = $J('<div/>', {'class': 'economyitem_hover'} );
	var $HoverContent = $J('<div/>', {'class': 'economyitem_hover_content'} );
	$Hover.append( $HoverContent );
	$Hover.hide();

	var fnOneTimeEconomySetup = function() {
		$J(document.body).append( $Hover );

		if ( typeof UserYou == 'undefined' )
		{
						var css = document.createElement( "link" );
			css.setAttribute( "rel", "stylesheet" );
			css.setAttribute( "type", "text/css" );
			css.setAttribute( "href", strEconomyCSSURL );
			var js1 = document.createElement( "script" );
			js1.setAttribute( "type", "text/javascript" );
			js1.setAttribute( "src", strEconomyCommonJSURL );
			var js2 = document.createElement( "script" );
			js2.setAttribute( "type", "text/javascript" );
			js2.setAttribute( "src", strEconomyJSURL );
			var head = $J('head')[0];
			head.appendChild( css );
			head.appendChild( js1 );
			head.appendChild( js2 );
		}
	};

	var fnDataFactory = function( key ) {
		var rgItemKey = key.split('/');
		if ( rgItemKey.length >= 3 && rgItemKey.length <= 5 )
		{
			if ( fnOneTimeEconomySetup )
			{
				fnOneTimeEconomySetup();
				fnOneTimeEconomySetup = null;
			}

			// pop amount off the end first if it's present
			var nAmount;
			var strLastEntry = rgItemKey[rgItemKey.length - 1];
			if ( strLastEntry && strLastEntry.length > 2 && strLastEntry.substr( 0, 2 ) == 'a:' )
			{
				nAmount = strLastEntry.substr( 2 );
				rgItemKey.pop();
			}

			var strURL = null;
			var appid = rgItemKey[0];
			if ( appid == 'classinfo' )
			{
				// class info style
				appid = rgItemKey[1];
				var classid = rgItemKey[2];
				var instanceid = ( rgItemKey.length > 3 ? rgItemKey[3] : 0 );
				strURL = 'economy/itemclasshover/' + appid + '/' + classid + '/' + instanceid;
				strURL += '?content_only=1&l=english';
			}
			else
			{
				// real asset
				var contextid = rgItemKey[1];
				var assetid = rgItemKey[2];
				var strURL = 'economy/itemhover/' + appid + '/' + contextid + '/' + assetid;
				strURL += '?content_only=1&omit_owner=1&l=english';
				if ( rgItemKey.length == 4 && rgItemKey[3] )
				{
					var strOwner = rgItemKey[3];
					if ( strOwner.indexOf( 'id:' ) == 0 )
						strURL += '&o_url=' + strOwner.substr( 3 );
					else
						strURL += '&o=' + strOwner;
				}
			}
			if ( nAmount && nAmount > 1 )
				strURL += '&amount=' + nAmount;
			return new CDelayedAJAXData( strURL, 100 );
		}
		else
			return null;
	};

	var rgCallbacks = BindAJAXHovers( $Hover, $HoverContent, {
		fnDataFactory: fnDataFactory,
		strDataName: 'economy-item',
		strURLMatch: 'itemhover'
	} );
}

function ShowTradeOffer( tradeOfferID, rgParams )
{
	var strParams = '';
	if ( rgParams )
		strParams = '?' + $J.param( rgParams );

	var strKey = ( tradeOfferID == 'new' ? 'NewTradeOffer' + rgParams['partner'] : 'TradeOffer' + tradeOfferID );

	var winHeight = 1120;
	if ( Steam.BIsUserInSteamClient() && Steam.GetClientPackageVersion() < 1407800248 )
	{
		// workaround for client break when the popup window is too tall for the screen.  Try and pick a height that will fit here.
		var nClientChromePX = 92;
		if ( window.screen.availHeight && window.screen.availHeight - nClientChromePX < winHeight )
			winHeight = window.screen.availHeight - nClientChromePX;
	}

	var winOffer = window.open( 'https://steamcommunity.com/tradeoffer/' + tradeOfferID + '/' + strParams, strKey, 'height=' + winHeight + ',width=1028,resize=yes,scrollbars=yes' );

	winOffer.focus();
}

function Logout()
{
	PostToURLWithSession( 'https://steamcommunity.com/login/logout/' );
}

function ChangeLanguage( strTargetLanguage, bStayOnPage )
{
	var Modal = ShowBlockingWaitDialog( 'Change language', '' );
	$J.post( 'https://steamcommunity.com/actions/SetLanguage/', {language: strTargetLanguage, sessionid: g_sessionID })
		.done( function() {
			if ( bStayOnPage )
				Modal.Dismiss();
			else
			{
								if( g_steamID )
					window.location = 'https://store.steampowered.com/account/languagepreferences/';
				else if ( window.location.href.match( /[?&]l=/ ) )
					window.location = window.location.href.replace( /([?&])l=[^&]*&?/, '$1' );
				else
					window.location.reload();
			}
		}).fail( function() {
			Modal.Dismiss();
			ShowAlertDialog( 'Change language', 'There was a problem communicating with the Steam servers.  Please try again later.' );
		});
}

var g_CommunityPreferences = { 'hide_adult_content_sex' : 1, 'hide_adult_content_violence' : 1 };
var g_UGCWithNoBlur = {};
var g_bLoadedUGCWithNoBlur = false;
var g_UGCSkipAdultContentCheckForAppID = false;

function LoadUGCWithNoBlur()
{
	if ( g_bLoadedUGCWithNoBlur )
	{
		return;
	}

	var strUGCNoBlur = WebStorage.GetLocal( 'rgUGCNoBlur', false );
	if ( strUGCNoBlur != null )
	{
		g_UGCWithNoBlur = JSON.parse( strUGCNoBlur );
	}
}

function SaveUGCWithNoBlur()
{
	var keys = Object.keys( g_UGCWithNoBlur );
	var maxKeys = 1000;
	if ( keys.length >= maxKeys )
	{
		var rgTemp = [];
		for ( var i = 0; i < keys.length; ++i )
		{
			var key = keys[i];
			var value = g_UGCWithNoBlur[key];
			rgTemp.push( { v: value['timestamp'], k: key } );
		}
		rgTemp.sort( function( a, b ) {
			if ( a.v > b.v ) { return 1; }
			if ( a.v < b.v ) { return -1; }
			return 0;
		});

		var delta = rgTemp.length - maxKeys;
		for ( var i = 0; i < rgTemp.length && i < delta; ++i )
		{
			var a = rgTemp[i];
			delete g_UGCWithNoBlur[a.k];
		}
	}
	WebStorage.SetLocal( 'rgUGCNoBlur', JSON.stringify( g_UGCWithNoBlur ), false );
}

function ApplyAdultContentPreferences()
{
	LoadUGCWithNoBlur();

	var elementsWithAdultContent = $J('.has_adult_content');
	if ( elementsWithAdultContent.length == 0 )
	{
		return;
	}

	var bGlobalHideAdultContentSex = g_CommunityPreferences['hide_adult_content_sex'] != 0;
	var bGlobalHideAdultContentViolence = g_CommunityPreferences['hide_adult_content_violence'] != 0;

	for ( var i = 0; i < elementsWithAdultContent.length; ++i )
	{
		var e = $J( elementsWithAdultContent[i] );
		ApplyAdultContentPreferencesHelper( e, bGlobalHideAdultContentSex, bGlobalHideAdultContentViolence, false );
	}
}

function ReapplyAdultContentPreferences()
{
	var elementsWithAdultContent = $J('.has_adult_content');
	if ( elementsWithAdultContent.length == 0 )
	{
		return;
	}

	var bGlobalHideAdultContentSex = g_CommunityPreferences['hide_adult_content_sex'] != 0;
	var bGlobalHideAdultContentViolence = g_CommunityPreferences['hide_adult_content_violence'] != 0;

	for ( var i = 0; i < elementsWithAdultContent.length; ++i )
	{
		var e = $J( elementsWithAdultContent[i] );
		ApplyAdultContentPreferencesHelper( e, bGlobalHideAdultContentSex, bGlobalHideAdultContentViolence, true );
	}
}

// override where necessary
function HandleNewDynamicLink( newDynamicLinkElement )
{
	if ( newDynamicLinkElement.hasClass( "has_adult_content" ) )
	{
		var bGlobalHideAdultContentSex = g_CommunityPreferences['hide_adult_content_sex'] != 0;
		var bGlobalHideAdultContentViolence = g_CommunityPreferences['hide_adult_content_violence'] != 0;
		ApplyAdultContentPreferencesHelper( newDynamicLinkElement, bGlobalHideAdultContentSex, bGlobalHideAdultContentViolence, false );
	}
}

function ShowAdultContentWarningDialog( $Link, appid, publishedFileID, callbackFunc )
{
	$J.get(
		'https://steamcommunity.com/sharedfiles/ajaxgetmaturecontentwarningdialog/',
		{
			'appid': appid,
			'publishedfileid' : publishedFileID
		}
	).done( function( data ) {
		switch( data.success )
		{
			case 1:
			{
				if ( callbackFunc )
				{
					var dialog = ShowConfirmDialog('Content May Not Be Appropriate For All Ages', data['html'], 'View Content' );
					dialog.done( function ( action ) {
						if ( callbackFunc )
						{
							callbackFunc();
						}
					});
				}
				else
				{
					ShowAlertDialog('Content May Not Be Appropriate For All Ages', data['html'] );
				}
			}
			break;

			default:
			{
				if ( callbackFunc )
				{
					callbackFunc();
				}
			}
			break;
		} // switch
	} );
}

function UGCAdultContentPreferencesMenu( elSource )
{
	var $El = $J(this);
	var $elSource = $J(elSource.parentNode);
	$El.empty();

	var appid = $elSource.data('appid');
	var publishedFileID = $elSource.data('publishedfileid');

	// warning
	{
		var fnViewWarning = function ()
		{
			ShowAdultContentWarningDialog( $elSource, appid, publishedFileID, null );
			return true;
		};
		var $elViewWarning = $J( '<div/>' ).click( fnViewWarning ).text( 'View Mature Content Warning' ).addClass( 'option' );
		$El.append( $elViewWarning );
	}

	if ( $elSource.hasClass( "has_adult_content" ) )
	{
		var fnUnblur = function ()
		{
			$elSource.removeClass('has_adult_content');
			g_UGCWithNoBlur[publishedFileID] = { 'timestamp' : Date.now() };
			SaveUGCWithNoBlur();
			return true;
		};
		var $elUnblur = $J( '<div/>' ).click( fnUnblur ).text( 'Remove blur for this content only' ).addClass( 'option' );
		$El.append( $elUnblur );
	}
	else
	{
		var fnAddBlur = function ()
		{
			$elSource.addClass('has_adult_content');
			delete g_UGCWithNoBlur[publishedFileID];
			SaveUGCWithNoBlur();
			return true;
		};
		var $elAddBlur = $J( '<div/>' ).click( fnAddBlur ).text( 'Blur this content' ).addClass( 'option' );
		$El.append( $elAddBlur );
	}

	// preferences
	{
		var fnViewPreferences = function ()
		{
			top.location.href = 'https://store.steampowered.com//account/preferences/#CommunityContentPreferences';
			return true;
		};
		var $elViewPreferences = $J( '<div/>' ).click( fnViewPreferences ).text( 'Edit Preferences' ).addClass( 'option' );
		$El.append( $elViewPreferences );
	}
}

function ApplyAdultContentPreferencesHelper( e, bGlobalHideAdultContentSex, bGlobalHideAdultContentViolence, bForce )
{
	if ( !bForce && ( e.data( 'processed_adult_content') || e.width() == 0 ) )
	{
		return;
	}
	
	e.data( 'processed_adult_content', true );

	var bHideAdultContentSex = bGlobalHideAdultContentSex;
	var bHideAdultContentViolence = bGlobalHideAdultContentViolence;

	var bIsAnchor = e.is('a');

	var publishedFileID = e.data( 'publishedfileid' );
	var appid = e.data( 'appid' );
	var bForceDeBlur = ( publishedFileID && g_UGCWithNoBlur.hasOwnProperty( publishedFileID ) ) || ( appid && g_UGCSkipAdultContentCheckForAppID == appid );

	if ( bForceDeBlur )
	{
		e.removeClass( 'has_adult_content' );
	}
	else if ( e.hasClass( "maybe_inappropriate_sex" ) || e.hasClass( "maybe_inappropriate_violence" ) )
	{
		if ( e.hasClass( "maybe_inappropriate_sex" ) && !bHideAdultContentSex )
		{
			e.removeClass( 'maybe_inappropriate_sex' );
		}

		if ( e.hasClass( "maybe_inappropriate_violence" ) && !bHideAdultContentViolence )
		{
			e.removeClass( 'maybe_inappropriate_violence' );
		}

		if ( !e.hasClass( "maybe_inappropriate_sex" ) && !e.hasClass( "maybe_inappropriate_violence" ) )
		{
			e.removeClass( 'has_adult_content' );
		}
	}

	if ( e.data( 'ugclinktextonly' ) === 1 )
	{

	}
	else
	{
		// widget
		{
			var $elMenu = $J( '<div></div>', { 'class': 'ugc_options' } ).append( $J( '<div>' ) );
			$elMenu.v_tooltip( {
				'tooltipClass': 'ugc_options_tooltip',
				'location': 'bottom left',
				'offsetY': -20,
				'useClickEvent': true,
				'useMouseEnterEvent': false,
				'preventDefault': true,
				'stopPropagation': true,
				func: UGCAdultContentPreferencesMenu
			} );
			e.append( $elMenu );
		}

		if ( !e.hasClass( "modalContentLink" ) )
		{
			var appid = e.data('appid');
			e.on( 'click', function( e ) {
				var $Link = $J( e.currentTarget );
				var bLinkHasAdultContent = $Link.hasClass( 'has_adult_content' );
				if ( !bLinkHasAdultContent )
				{
					return;
				}

				e.preventDefault();
				e.stopPropagation();
				ShowAdultContentWarningDialog( $Link, appid, publishedFileID, function() {
					if ( bIsAnchor )
					{
						top.location.href = $Link[0].href;
					}
				} );
				return false;
			} );
		}

		// warning
		if ( e.width() > 100 && !e.hasClass( 'ugc_show_warning_image' ) && !e.hasClass( 'dynamiclink_box' ) )
		{
			var $elWarning = $J( '<div></div>', {
				'class': 'ugc_warning'
			} );
			if ( e.width() > 350 )
			{
				$elWarning.addClass( "large" );
			}

			if ( e.height() > 125 )
			{
				e.addClass( "ugc_show_warning_image" );
			}
			else
			{
				$elWarning.append( $J( '<div>', { 'class': 'ugc_warning_image' } ) );
			}

			$elWarning.append( $J( '<span>', { 'text': 'Content may not be appropriate for all audiences'} ) );

			var $elOptions = $J( '<div></div>' );
			var $elViewOption = $J( '<div></div>', {
				'class': 'ugc_inline_option',
				'text': 'View Content'
			} );
			$elViewOption.click( function ( event ) {
				event.preventDefault();
				event.stopPropagation();
				if ( bIsAnchor && !e.hasClass( "modalContentLink" ) )
				{
					top.location.href = e[0].href;
				}
				else
				{
					e.removeClass( 'has_adult_content' );
					e.click();
					e.addClass( 'has_adult_content' );
				}
				return false;
			} );
			$elOptions.append( $elViewOption );
			$elOptions.append( "&nbsp;|&nbsp;" );
			var $elPreferencesOption = $J( '<div></div>', {
				'class': 'ugc_inline_option',
				'text': 'Edit Preferences'
			} );
			$elPreferencesOption.click( function ( event )	{
				event.stopPropagation();
				top.location.href = 'https://store.steampowered.com//account/preferences/#CommunityContentPreferences';
				return false;
			} );
			$elOptions.append( $elPreferencesOption );

			$elWarning.append( $elOptions );

			e.append( $elWarning );
		}
		else
		{
			e.addClass( "ugc_show_warning_image" );
		}
	}
}

function SetAppAgeGateBypass( appid, bBypass, callbackFunc )
{
	// force update
	var strCookie = 'age_gate_' + appid;
	WebStorage.SetLocal( strCookie, true, true );
	WebStorage.SetLocal( 'unAppAgeGateBypassVersion', parseInt( WebStorage.GetLocal( 'unAppAgeGateBypassVersion', true ) || 0 ) + 1, true );

	$J.post(
		'https://steamcommunity.com/actions/ajaxsetappagegatebypass/',
		{ 'sessionid': g_sessionID, 'appid' : appid, 'bypass' : bBypass ? 1 : 0 }
	).done( function( data ) {
		callbackFunc( data );
	} );
}

function CheckAppAgeGateBypass( appid, bCheckAppAgeGateBypass, callbackFunc )
{
	var bGlobalHideAdultContentSex = g_CommunityPreferences['hide_adult_content_sex'] != 0;
	var bGlobalHideAdultContentViolence = g_CommunityPreferences['hide_adult_content_violence'] != 0;

	if ( !bGlobalHideAdultContentSex && !bGlobalHideAdultContentViolence )
	{
		callbackFunc( false );
		return;
	}

	if ( bCheckAppAgeGateBypass && g_steamID )
	{
		var url = 'https://steamcommunity.com/my/ajaxgetappagegatesbypassed/';
		var data = { 'sessionid' : g_sessionID, 'steamid' : g_steamID };
		data['appids'] = [ appid ];

		var unVersion = WebStorage.GetLocal( 'unAppAgeGateBypassVersion', true );
		if ( unVersion )
		{
			data['v'] = parseInt( unVersion );
		}
		else
		{
			data['v'] = 1;
		}

		$J.get( url, data )
		.done( function( data ) {
			var bShowWarning = true;

			if ( data.success == 1 )
			{
				for ( var i = 0; i < data.apps.length; ++i )
				{
					var a = data.apps[i];
					if ( a.appid == appid )
					{
						bShowWarning = !a.bypassed;
						break;
					}
				}
			}

			callbackFunc( bShowWarning );
		} )
		.fail( function( jqXHR ) {
			callbackFunc( true );
		} );
	}
	else
	{
		var strCookie = 'age_gate_' + appid;
		var bShowWarning = !WebStorage.GetLocal( strCookie, true );
		callbackFunc( bShowWarning );
	}
}





function abuseSSDescripCheck()
{
	var chkd_inap = $('abuseType1').checked;
	var chkd_cprt = $('abuseType5').checked;
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


var CAutoSizingTextArea = Class.create( {
	m_elTextArea: null,
	m_nMinHeight: 20,
	m_nMaxHeight: 500,
	m_cCurrentSize: Number.MAX_VALUE,
	m_fnChangeCallback: null,
	m_nTextAreaPadding: null,

	initialize: function( elTextArea, nMinHeight, fnChangeCallback )
	{
		this.m_elTextArea = elTextArea;
		var _this = this;
		$J(this.m_elTextArea ).on( 'keyup blur click paste cut', function( e ) {
			if ( e.type == 'paste' || e.type == 'blur' )
				_this.OnPasteText();
			else
				_this.OnTextInput();
		});
		this.m_elTextArea.style.overflow = 'hidden';

		this.m_cEntryLength = Number.MAX_VALUE;
		this.m_nMinHeight = nMinHeight || 20;
		this.m_fnChangeCallback = fnChangeCallback || null;

		this.m_elTextArea.style.height = this.m_nMinHeight + 'px';

		this.OnTextInput();
	},

	CalculatePadding: function()
	{
		// briefly empty the text area and set the height so we can see how much padding there is
		var strContents = this.m_elTextArea.value;
		this.m_elTextArea.value = '';
		this.m_elTextArea.style.height = this.m_nMinHeight + 'px';
		this.m_nTextAreaPadding = this.m_elTextArea.scrollHeight - this.m_nMinHeight;
		this.m_elTextArea.value = strContents;
	},

	OnPasteText: function()
	{
		this.OnTextInput.bind( this ).defer();
	},

	OnTextInput: function()
	{
		var iScrollOffset = undefined;
		var cNewLength = this.m_elTextArea.value.length;

		// we delay this until first input as some values get reported incorrectly if the element isn't visible.
		if ( this.m_nTextAreaPadding === null && $J(this.m_elTextArea ).is(':visible') )
			this.CalculatePadding();

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
			this.m_elTextArea.style.height = ( nHeight - this.m_nTextAreaPadding ) + 'px';

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





function UpdateParameterInCurrentURL( strParamName, strParamValue, rgRemoveParameters )
{
	var path = window.location.pathname;
	var query = window.location.search;
	var params = {};
	if ( query && query.length > 2 )
		params = $J.deparam( query.substr( 1 ) );

	if ( strParamValue === null )
		delete params[strParamName];
	else
		params[strParamName] = strParamValue;

	// comment thread specific
	if ( rgRemoveParameters )
		for( var i = 0; i < rgRemoveParameters.length; i++ )
			delete params[ rgRemoveParameters[i] ];

	query = $J.param( params );

	return path + ( query ? '?' + query : '' );
}


var g_rgCommentThreads = {};
function InitializeCommentThread( type, name, rgCommentData, url, nQuoteBoxHeight )
{
	// see if we have a custom comment thread class for this type
	var commentclass = CCommentThread;
	if ( window['CCommentThread' + type] )
		commentclass = window['CCommentThread' + type];

	g_rgCommentThreads[name] = new commentclass( type, name, rgCommentData, url, nQuoteBoxHeight );
}

function BindCommentThreadSubscribeButtons( type, owner, gidfeature, gidfeature2, btnSubscribe, btnUnsubscribe )
{
	var CommentThread = FindCommentThread( type, owner, gidfeature, gidfeature2 );
	if ( CommentThread )
		CommentThread.BindSubscribeButtons( btnSubscribe, btnUnsubscribe );
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
	m_cDropdownPages: 0,
	m_bLoading: false,
	m_bLoadingUserHasUpVoted : false,
	m_cUpVotes: 0,

	m_bIncludeRaw: false,
	m_rgRawCommentCache: null,
	m_bHasPaging: true,
	m_bTrackNavigation: false,	// should we track navigation in the URL?

	// these vars are id's we'll update when values change
	m_votecountID: null,
	m_voteupID: null,
	m_commentcountID: null,

	m_oTextAreaSizer: null,

	m_bSubscribed: null,
	m_$SubscribeCheckbox: null,

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

		this.m_bHasPaging = !rgCommentData['no_paging'];
		this.m_bTrackNavigation = !!rgCommentData['track_navigation'];


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

		var _this = this;

		if ( this.m_bHasPaging )
		{
			$(strPrefix + '_pagebtn_prev').observe( 'click', this.OnPagingButtonClick.bindAsEventListener( this , this.PrevPage )  );
			$(strPrefix + '_fpagebtn_prev').observe( 'click', this.OnPagingButtonClick.bindAsEventListener( this , this.PrevPage )  );
			$(strPrefix + '_pagebtn_next').observe( 'click', this.OnPagingButtonClick.bindAsEventListener( this , this.NextPage ) );
			$(strPrefix + '_fpagebtn_next').observe( 'click', this.OnPagingButtonClick.bindAsEventListener( this , this.NextPage ) );

			if ( this.m_bTrackNavigation && window.history && window.history.pushState )
			{
				window.history.replaceState( {comment_thread_page: this.m_iCurrentPage }, '' );

				$J(window).on('popstate', function( e ) {
					var oState = e.originalEvent.state;

					if ( oState && typeof oState.comment_thread_page != 'undefined' )
						_this.GoToPage( oState.comment_thread_page );
				});
			}
		}

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
			elAutosubscribe.observe( 'change', this.OnAutosubscribeToggle.bind( this ) );
		}

		var elSubscribe = $(strPrefix + '_subscribe');
		var elUnsubscribe = $(strPrefix + '_unsubscribe' );
		if ( elSubscribe && elUnsubscribe )
		{
			this.BindSubscribeButtons( elSubscribe, elUnsubscribe );
		}

		this.m_$SubscribeCheckbox = $J('#' + strPrefix + '_subscribe_checkbox');
		this.m_$SubscribeCheckbox.click( function() {
			if ( _this.m_$SubscribeCheckbox.hasClass( 'waiting' ) )
				return;

			if ( _this.m_bSubscribed )
				_this.Unsubscribe( function() {},  function() {ShowAlertDialog('Subscribe to thread', 'There was a problem updating your subscription.  Please try again later.');});
			else
				_this.Subscribe( function() {},  function() {ShowAlertDialog('Subscribe to thread', 'There was a problem updating your subscription.  Please try again later.');});
		});

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
			var strPrepoulatedText = $J(this.m_elTextArea ).data('prepopulated-text');
			var bEnteredText = elTextArea.value.length > 0;

			if ( bEnteredText && strPrepoulatedText && !$J(this.m_elTextArea ).data('replaced-prepopulated-text') )
			{
				strPrepoulatedText = v_trim( strPrepoulatedText ).replace( /[\n\r]/g, '' );
				var strEnteredText = v_trim( elTextArea.value ).replace( /[\n\r]/g, '' );

				bEnteredText = strPrepoulatedText != strEnteredText;

				// save so we don't have to keep doing this check as they enter more text.
				if ( bEnteredText )
					$J(this.m_elTextArea ).data('replaced-prepopulated-text', true );
			}

			if ( bEnteredText )
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

		var strPrepoulatedText = $J(this.m_elTextArea ).data('prepopulated-text');
		if ( strPrepoulatedText && v_trim( strPrepoulatedText ).replace( /[\n\r]/g, '' ) == v_trim( this.m_elTextArea.value ).replace( /[\n\r]/g, '' ) )
		{
			ShowAlertDialog( '', 'Please enter a comment to post.' );
			return;
		}

		var params = this.ParametersWithDefaults( {
			comment: this.m_elTextArea.value
		} );
		
		this.m_bLoading = true;
		new Ajax.Request( this.GetActionURL( 'post' ), {
			method: 'post',
			parameters: params,
			onSuccess: this.OnResponseAddComment.bind( this, ++this.m_nRenderAjaxSequenceNumber ),
			onFailure: this.OnFailureDisplayError.bind( this ),
			onComplete: this.OnAJAXComplete.bind( this )
		} );

		var elAutosubscribe = $( 'commentthread_' + this.m_strName + '_autosubscribe' );
		if ( elAutosubscribe && elAutosubscribe.checked && !this.m_bSubscribed )
			this.Subscribe();

		return false;
	},

	DeleteComment: function( gidComment, bUndelete, fnOnSuccess )
	{
		if ( this.m_bLoading )
			return;

		var params = this.ParametersWithDefaults( {
			gidcomment: gidComment,
			start: this.m_cPageSize * this.m_iCurrentPage
		} );

		if ( bUndelete )
			params.undelete = 1;

		this.m_bLoading = true;
		new Ajax.Request( this.GetActionURL( 'delete' ), {
			method: 'post',
			parameters: params,
			onSuccess: fnOnSuccess ? fnOnSuccess : this.OnResponseDeleteComment.bind( this, ++this.m_nRenderAjaxSequenceNumber ),
			onFailure: this.OnFailureDisplayError.bind( this ),
			onComplete: this.OnAJAXComplete.bind( this )
		} );
	},

	HideAndReport: function( gidComment, bHide, fnOnSuccess )
	{
		if ( this.m_bLoading )
			return;

		var params = this.ParametersWithDefaults( {
			gidcomment: gidComment,
			hide: bHide,
			start: this.m_cPageSize * this.m_iCurrentPage
		} );

		this.m_bLoading = true;
		new Ajax.Request( this.GetActionURL( 'hideandreport' ), {
			method: 'post',
			parameters: params,
			onSuccess: fnOnSuccess ? fnOnSuccess : this.OnResponseHideAndReportComment.bind( this, ++this.m_nRenderAjaxSequenceNumber ),
			onFailure: this.OnFailureDisplayError.bind( this ),
			onComplete: this.OnAJAXComplete.bind( this )
		} );
	},

	OnResponseHideAndReportComment: function( nAjaxSequenceNumber, transport )
	{
		if ( transport.responseJSON && transport.responseJSON.success )
			this.OnResponseRenderComments( CCommentThread.RENDER_GOTOCOMMENT, nAjaxSequenceNumber, transport );
		else
			this.OnFailureDisplayError( transport );
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
			onSuccess: this.OnResponseVoteUp.bind( this, ++this.m_nRenderAjaxSequenceNumber ),
			onFailure: this.OnFailureDisplayError.bind( this ),
			onComplete: this.OnAJAXComplete.bind( this )
		} );
	},

	UpdateAnswer: function( gidComment, bExisting )
	{
		// see if it's on the current page
		if ( this.m_bLoading )
			return;

		if ( !gidComment )
		{
			$modal = ShowConfirmDialog( 'Remove As Answer', 'Are you sure you want to unmark this post as the answer to this thread? You can update this at any time.', 'Remove As Answer' );
		}
		else
		{
			var strModalBody = 'You are about to mark this post as the answer to this thread. This will indicate that the original post has been answered and link to this specific post. You can remove this or indicate a different post as the answer at any time if you change your mind.';
			if ( bExisting )
				strModalBody = 'A different post is already selected as the answer to this thread. Would you like to choose this post as the new answer?';

			$modal = ShowConfirmDialog( 'Mark As Answer', strModalBody, 'Choose Answer' );
			$modal.SetMaxWidth(500);
		}

		var _$this = this;

		$modal.done( function(){

			var params = _$this.ParametersWithDefaults( {
				gidcommentanswer: gidComment
			} );

			_$this.m_bLoading = true;
			new Ajax.Request( _$this.GetActionURL( 'updateanswer' ), {
				method: 'post',
				parameters: params,
				onSuccess: function() {
										window.location.hash = 'c' + gidComment;
					window.location.reload();
				},
				onFailure: function( transport ) {
					if ( transport.responseJSON && transport.responseJSON.success )
					{
						var strError = 'There was an issue updating this topic answer. Error: ' + transport.responseJSON.success;
						if ( transport.responseJSON.success == 15 )
						{
							strError = 'You do not have permission to update this topic\'s answer.'
						}

						ShowAlertDialog( 'Error', strError );
					}
				},
				onComplete: _$this.OnAJAXComplete.bind( _$this )
			});
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

	OnResponseEditComment: function( gidComment, nAjaxSequenceNumber, transport )
	{
		if ( transport.responseJSON && transport.responseJSON.success)
		{
			// no need to hide because render will replace our whole element
			this.OnResponseRenderComments( CCommentThread.RENDER_DELETEDPOST, nAjaxSequenceNumber, transport );	//display the updated comment thread
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
			onSuccess: this.OnResponseEditComment.bind( this, gidComment, ++this.m_nRenderAjaxSequenceNumber ),
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

	m_nRenderAjaxSequenceNumber: 0,
	GoToPage: function( iPage, eRenderReason )
	{
		if (  iPage >= this.m_cMaxPages || iPage < 0 || ( iPage == this.m_iCurrentPage && !this.m_bLoading ) )
			return;

		var params = this.ParametersWithDefaults( {
			start: this.m_cPageSize * iPage,
			totalcount: this.m_cTotalCount
		} );

		this.m_bLoading = true;
		new Ajax.Request( this.GetActionURL( 'render' ), {
			method: 'post',
			parameters: params,
			onSuccess: this.OnResponseRenderComments.bind( this, eRenderReason || CCommentThread.RENDER_GOTOPAGE, ++this.m_nRenderAjaxSequenceNumber ),
			onComplete: this.OnAJAXComplete.bind( this )
		});
	},

	GoToPageWithComment: function( gidComment, eRenderReason )
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
			onSuccess: this.OnResponseRenderComments.bind( this, eRenderReason || CCommentThread.RENDER_GOTOCOMMENT, ++this.m_nRenderAjaxSequenceNumber ),
			onComplete: this.OnAJAXComplete.bind( this )
		});
	},

	OnResponseAddComment: function( nAjaxSequenceNumber, transport )
	{
		if ( transport.responseJSON && transport.responseJSON.success)
		{
			$('commentthread_' + this.m_strName + '_entry_error').hide();
			this.m_elTextArea.value='';
			this.CheckTextAreaSize();
			this.OnResponseRenderComments( CCommentThread.RENDER_NEWPOST, nAjaxSequenceNumber, transport );	//display the updated comment thread

			if ( $('commentthread_' + this.m_strName + '_subscribeoptions') )
				$('commentthread_' + this.m_strName + '_subscribeoptions').show();
		}
		else
		{
			this.OnFailureDisplayError( transport );
		}
	},

	OnResponseDeleteComment: function( nAjaxSequenceNumber, transport )
	{
		if ( transport.responseJSON && transport.responseJSON.success )
			this.OnResponseRenderComments( CCommentThread.RENDER_DELETEDPOST, nAjaxSequenceNumber, transport );
		else
			this.OnFailureDisplayError( transport );
	},

	OnResponseVoteUp: function( nAjaxSequenceNumber, transport )
	{
		if ( transport.responseJSON && transport.responseJSON.success )
		{
			this.OnResponseRenderComments( CCommentThread.RENDER_GOTOCOMMENT, nAjaxSequenceNumber, transport );
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

	OnResponseRenderComments: function( eRenderReason, nAjaxSequenceNumber, transport )
	{
		if ( this.m_nRenderAjaxSequenceNumber != nAjaxSequenceNumber )
			return;

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

			if ( this.m_bTrackNavigation && window.history && window.history.pushState )
			{
				var params = window.location.search.length ? $J.deparam( window.location.search.substr(1) ) : {};
				if ( ( !params['ctp'] && this.m_iCurrentPage != 0 ) || ( params['ctp'] && params['ctp'] != this.m_iCurrentPage + 1 ) )
				{
					var fnStateUpdate = window.history.pushState.bind( window.history );
					var url = UpdateParameterInCurrentURL( 'ctp', this.m_iCurrentPage == 0 ? null : this.m_iCurrentPage + 1, ['tscn'] );
					if ( eRenderReason == CCommentThread.RENDER_GOTOPAGE_HASHCHANGE || eRenderReason == CCommentThread.RENDER_GOTOCOMMENT_HASHCHANGE )
					{
						fnStateUpdate = window.history.replaceState.bind( window.history );
						if ( eRenderReason == CCommentThread.RENDER_GOTOCOMMENT_HASHCHANGE )
							url += window.location.hash;
					}
					fnStateUpdate( { comment_thread_page: this.m_iCurrentPage }, '', url );
				}
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
		elContainer.style.overflow = 'hidden';

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
			elContainer.effect = new Effect.Morph( elContainer, { style: 'height: ' + elPosts.getHeight() + 'px', duration: 0.25, afterFinish: function() { elPosts.style.position = 'static'; elContainer.style.height = 'auto'; elContainer.style.overflow = '';  } } );
		}).defer();
	},

	UpdatePagingDisplay: function()
	{
		if ( !this.m_bHasPaging )
			return;

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
				{
					$(strPagePrefix + 'btn_prev').removeClassName('disabled');
					if ( this.m_bTrackNavigation )
						$(strPagePrefix + 'btn_prev').href = UpdateParameterInCurrentURL( 'ctp', this.m_iCurrentPage == 1 ? null : this.m_iCurrentPage, ['tscn'] );
				}
				else
				{
					$(strPagePrefix + 'btn_prev').addClassName('disabled');
					if ( this.m_bTrackNavigation )
						$(strPagePrefix + 'btn_prev').href = 'javascript:void(0);';
				}

				if ( this.m_iCurrentPage < this.m_cMaxPages - 1 )
				{
					$(strPagePrefix + 'btn_next').removeClassName('disabled');
					if ( this.m_bTrackNavigation )
						$(strPagePrefix + 'btn_next').href = UpdateParameterInCurrentURL( 'ctp', this.m_iCurrentPage + 2, ['tscn'] );
				}
				else
				{
					$(strPagePrefix + 'btn_next').addClassName('disabled');
					if ( this.m_bTrackNavigation )
						$(strPagePrefix + 'btn_next').href = 'javascript:void(0);';
				}

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

			// update the dropdown list with the total.
			var $DropdownCtn = $J( '#' + strPagePrefix + 'dropdown');
			var $Select = $DropdownCtn.children( 'select' );

			if ( true )
			{
				if ( !$Select.length )
				{
					$Select = $J('<select/>');
					var _this = this;
					$Select.change( function() {
						var $Select = $J(this);
						_this.GoToPage( $Select.val() );
					});
					$DropdownCtn.append( $Select );
				}

				$Select.empty();

				// we always show first, last, + 3 page links closest to current page
				var fnAddPageDropdown = function( iDropdownPage )
				{
					$Select.append( $J('<option/>', { 'value' : iDropdownPage } ).text( iDropdownPage >= 999 ? v_numberformat( iDropdownPage + 1 ) : iDropdownPage + 1) );
				};

				var cPageLinksAheadBehind = 10;
				var firstPageLink = Math.max( this.m_iCurrentPage - cPageLinksAheadBehind, 1 );
				var lastPageLink = Math.min( this.m_iCurrentPage + (cPageLinksAheadBehind*2) + ( firstPageLink - this.m_iCurrentPage ), this.m_cMaxPages - 2 );

				if ( lastPageLink - this.m_iCurrentPage < cPageLinksAheadBehind )
					firstPageLink = Math.max( this.m_iCurrentPage - (cPageLinksAheadBehind*2) + ( lastPageLink - this.m_iCurrentPage ), 1 );

				fnAddPageDropdown( 0 );
				if ( firstPageLink != 1 )
					$Select.append( $J('<option/>', { 'value' : '', 'disabled':1 } ).text('...') );

				for ( var iPage = firstPageLink; iPage <= lastPageLink; iPage++ )
				{
					fnAddPageDropdown( iPage );
				}

				if ( lastPageLink != this.m_cMaxPages - 2 )
					$Select.append( $J('<option/>', { 'value' : '', 'disabled':1 } ).text('...') );
				fnAddPageDropdown( this.m_cMaxPages - 1 );
			}

			$Select.val( this.m_iCurrentPage );
		}

		this.m_cDropdownPages = this.m_cMaxPages;
	},

	AddPageLink: function( elPageLinks, iPage )
	{
		var el;
		if ( this.m_bTrackNavigation )
			el = new Element( 'a', {'class': 'commentthread_pagelink', 'href': UpdateParameterInCurrentURL( 'ctp', iPage + 1, ['tscn'] ) } );
		else
			el = new Element( 'span', {'class': 'commentthread_pagelink' } );

		el.update( (iPage + 1) );

		var fnGoToPage = this.GoToPage.bind( this, iPage );

		if ( iPage == this.m_iCurrentPage )
			el.addClassName( 'active' );
		else
			el.observe( 'click',  function(e) { e.stop(); fnGoToPage(); } );
		
		elPageLinks.insert( el );
		elPageLinks.insert( ' ' );
	},

	Subscribe: function( fnOnSuccess, fnOnFail )
	{
		var params = this.ParametersWithDefaults();
		this.m_$SubscribeCheckbox.addClass('waiting');

		var _this = this;
		$J.post( this.GetActionURL( 'subscribe' ), params )
			.done( function() {
				_this.OnSubscriptionChange( true, fnOnSuccess );
			})
			.fail( fnOnFail )
			.always( function() { _this.m_$SubscribeCheckbox.removeClass('waiting' ) } );
	},

	Unsubscribe: function( fnOnSuccess, fnOnFail )
	{
		var params = this.ParametersWithDefaults();
		this.m_$SubscribeCheckbox.addClass('waiting');

		var _this = this;
		$J.post( this.GetActionURL( 'unsubscribe' ), params )
			.done( function() {
				_this.OnSubscriptionChange( false, fnOnSuccess );
			})
			.fail( fnOnFail )
			.always( function() { _this.m_$SubscribeCheckbox.removeClass('waiting' ) } );
	},

	m_rgSubscriptionUpdateHandlers: null,

	BindSubscribeButtons: function( elBtnSubscribe, elBtnUnsubscribe )
	{
		var _this = this;

		if ( !this.m_rgSubscriptionUpdateHandlers )
			this.m_rgSubscriptionUpdateHandlers = [];

		this.m_rgSubscriptionUpdateHandlers.push( function() {
			if ( _this.m_bSubscribed )
			{
				$J(elBtnSubscribe).hide();
				$J(elBtnUnsubscribe).show();
			}
			else
			{
				$J(elBtnSubscribe).show();
				$J(elBtnUnsubscribe).hide();
			}
		} );

		$J(elBtnSubscribe).click( function() {
			_this.Subscribe( function() {
				ShowAlertDialog('Subscribe to thread', 'You\'ll receive a comment notification whenever someone replies to this thread.');
			}, function() {
				ShowAlertDialog('Subscribe to thread', 'There was a problem updating your subscription.  Please try again later.');
			});
		});

		$J(elBtnUnsubscribe).click( function() {
			_this.Unsubscribe( function() {
				ShowAlertDialog('Unsubscribe from thread', 'You\'ll no longer receive comment notifications from this thread.');
			}, function() {
				ShowAlertDialog('Unsubscribe from thread', 'There was a problem updating your subscription.  Please try again later.');
			});
		});

		this.UpdateSubscriptionDisplay();
	},

	OnSubscriptionChange: function( bSubscribed, fnProxy, transport )
	{
		this.m_bSubscribed = bSubscribed;

		if ( fnProxy )
			fnProxy( transport );

		this.UpdateSubscriptionDisplay();
	},

	UpdateSubscriptionDisplay: function()
	{
		if ( this.m_rgSubscriptionUpdateHandlers && this.m_rgSubscriptionUpdateHandlers.length )
		{
			for ( var i = 0; i < this.m_rgSubscriptionUpdateHandlers.length; i++ )
				(this.m_rgSubscriptionUpdateHandlers[i])();
		}

		if ( this.m_bSubscribed )
			this.m_$SubscribeCheckbox.addClass('checked');
		else
			this.m_$SubscribeCheckbox.removeClass('checked');

		var elForumSubscribe = $('forum_subscribe_' + this.m_rgCommentData['feature2'] );
		var elForumUnsubscribe = $('forum_unsubscribe_' + this.m_rgCommentData['feature2'] );
		if ( elForumSubscribe && elForumUnsubscribe )
		{
			if ( this.m_bSubscribed )
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
			if ( elAutosubscribe.checked )
				SetValueLocalStorage( 'forum_autosubscribe', true );
			else
				UnsetValueLocalStorage( 'forum_autosubscribe' );
		}
	}

} );
CCommentThread.RENDER_NEWPOST = 1;
CCommentThread.RENDER_GOTOPAGE = 2;
CCommentThread.RENDER_GOTOCOMMENT = 3;
CCommentThread.RENDER_DELETEDPOST = 4;
CCommentThread.RENDER_GOTOPAGE_HASHCHANGE = 5;
CCommentThread.RENDER_GOTOCOMMENT_HASHCHANGE = 6;

// static accessor
CCommentThread.DeleteComment = function( id, gidcomment )
{
	if ( g_rgCommentThreads[id] )
		g_rgCommentThreads[id].DeleteComment( gidcomment );
};
CCommentThread.UnDeleteComment = function( id, gidcomment )
{
	if ( g_rgCommentThreads[id] )
		g_rgCommentThreads[id].DeleteComment( gidcomment, true );
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
// static accessor
CCommentThread.UpdateAnswer = function( id, gidcomment, bExisting )
{
	if ( g_rgCommentThreads[id] )
		g_rgCommentThreads[id].UpdateAnswer( gidcomment, bExisting );
};
CCommentThread.FormattingHelpPopup = function( strCommentThreadType )
{
	$J.get( 'https://steamcommunity.com/comment/' + strCommentThreadType + '/formattinghelp', {ajax:1} ).done( function(data) {
		ShowAlertDialog( 'Text Formatting', data );
	});
};
CCommentThread.ShowDeletedComment = function( id, gidcomment )
{
	var elComment = $('comment_' + gidcomment);
	var elDeletedComment = $('deleted_comment_' + gidcomment );
	elComment.show();
	elDeletedComment.hide();
};
CCommentThread.HideAndReport = function( id, gidcomment, bHide )
{
	if ( g_rgCommentThreads[id] )
		g_rgCommentThreads[id].HideAndReport( gidcomment, bHide );
};
CCommentThread.ShowHiddenComment = function( id, gidcomment )
{
	var elComment = $('comment_' + gidcomment);
	var elHiddenComment = $('hidden_comment_' + gidcomment );
	elComment.show();
	elHiddenComment.hide();
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
			this.elSuggestionsCtn = new Element( 'div', {'class': 'popup_block', style: 'display: none; z-index: 1200;' } );
			this.elSuggestionsCtn.update( '<div class="shadow_ul"></div><div class="shadow_top"></div><div class="shadow_ur"></div><div class="shadow_left"></div><div class="shadow_right"></div><div class="shadow_bl"></div><div class="shadow_bottom"></div><div class="shadow_br"></div>' );
			this.elSuggestionsCtn.insert( {bottom: this.elSuggestions } );
			$(document.body).appendChild( this.elSuggestionsCtn );
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
			new Ajax.Request( 'https://steamcommunity.com/actions/SearchApps/' + encodeURIComponent( value ), {
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
				$J(elSuggestion).text( rgOptions[i].name );

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

CGameSelectorWorkshopGames = Class.create( CGameSelector, {
	OnGameSelectTextEntry: function( elInput, value )
	{
		if ( value )
		{
			new Ajax.Request( 'https://steamcommunity.com/workshop/ajaxfindworkshops/?searchText=' + encodeURIComponent( value ), {
				method: 'get',
				onSuccess: this.ReceiveGameSelectResponse.bind( this, value )
			} );
		}
		else
		{
			this.elSuggestions.update('');
			this.bHaveSuggestions = false;
		}
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
				this.elSuggestions.update( '<div style="text-align: center; width: 200px; padding: 5px 0;"><img src="https://steamcommunity-a.akamaihd.net/public/images/login/throbber.gif"></div>' );
				this.bHaveSuggestions = true;
				this.ShowSuggestions();
			}
			else
			{
				var rgTerms = value.toLowerCase().split( ' ' );
				var rgRegex = [];
				for ( var iTerm = 0; iTerm < rgTerms.length; iTerm++ )
				{
					var term = V_EscapeRegExp( rgTerms[iTerm] );
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
CGameSelectorOwnedGames.s_rgParams = {};
CGameSelectorOwnedGames.AreOwnedGamesLoaded = function()
{
	return CGameSelectorOwnedGames.s_rgOwnedGames != null;
};
CGameSelectorOwnedGames.LoadOwnedGames = function( fnCallback )
{
	if ( !CGameSelectorOwnedGames.AreOwnedGamesLoaded() )
	{
		CGameSelectorOwnedGames.s_rgOwnedGamesReadyCallbacks.push( fnCallback );

		if ( CGameSelectorOwnedGames.s_bLoadInFlight )
			return;

		CGameSelectorOwnedGames.s_bLoadInFlight = true;
		var rgParams = CGameSelectorOwnedGames.s_rgParams;
		rgParams['sessionid'] = g_sessionID;

		new Ajax.Request( 'https://steamcommunity.com/actions/GetOwnedApps/', {
			method: 'get',
			parameters: rgParams,
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
};

CGameSelectorProfileShowcaseGames = Class.create( CGameSelectorOwnedGames, {
	initialize: function( $super, elInput, elSuggestionsCtn, elSuggestions, fnOnClick )
	{
		CGameSelectorOwnedGames.s_rgParams['for_showcase'] = 1;
		$super( elInput, elSuggestionsCtn, elSuggestions, fnOnClick );
	},
} );

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

function createQuery2( postUrl, returnFn, postData )
{
	var uid = Math.round(Math.random()*100000);
	var rUid = "requester"+uid;
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
		// req is intentionally a global.  The contract for this function is that the callers look at the "req" global in their callback to see results.
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
	var thisClass = ' '+el.className+' ';
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
		var tempClassName = " "+pageDivs[x].className+" ";
		var tempParentClassName = " "+pageDivs[x].parentNode.className+" ";
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
	var w = winDim('w','v');
	var h = winDim('h','v');
	var sl = winDim('w','s');
	var st = winDim('h','s');
	// mouse x/y within viewport
	var vmX = e.clientX;
	var vmY = e.clientY;
	// mouse x/y within document
	var smX = vmX + sl;
	var smY = vmY + st;
	var l = (pw > vmX) ? (smX + offset) : (smX - pw - offset);
	var t = (ph > vmY) ? (smY + offset) : (smY - ph - offset);
	var popTL = new Array(t, l);
	return popTL;
}

var keepTooltip = false;
function tooltipCreate(tipEl, e)
{
	var ttEl = document.getElementById('tooltip');
	if(ttEl)
	{
		ttEl.parentNode.removeChild(ttEl);
	}
	ttEl = document.createElement('div');
	ttEl.id = 'tooltip';
	ttEl.style.position = 'absolute';
	ttEl.appendChild(tipEl);
	document.getElementsByTagName('body')[0].appendChild(ttEl);
	var tipTL = getPopPos(e, ttEl.clientWidth, ttEl.clientHeight, 6);
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
		var ttEl = document.getElementById('tooltip');
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
		elem = document.getElementById( elementId );
	else if ( document.all ) // old msie versions
		elem = document.all[ elementId ];
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
	var newImgPath = newImg;
	setImage( imgID, newImgPath );
}

function iSwap( imgID, newImg )
{
	var newImgPath = "https://steamcommunity-a.akamaihd.net/public/images/" + newImg;
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
	gShareRequestURL = "https://steamcommunity.com/sharedfiles/shareonsteam/?id=" + publishedFileID + '&appid=' + appID;

	var shareURL = "https://steamcommunity.com/sharedfiles/filedetails/?id=" + publishedFileID;
	var baseSocialShareURL = "https://steamcommunity.com/sharedfiles/share/?id=" + publishedFileID;
	ShowSharePopup( shareURL, baseSocialShareURL );
}

function ShowShareNewsPostPopup( gid, appid )
{
	gShareRequestURL = "https://steamcommunity.com/news/shareonsteam/" + gid + "?appid=" + appid;

	var baseSocialShareURL = "https://steamcommunity.com/news/sharepost/" + gid;
	var shareURL = "https://steamcommunity.com/news/post/" + gid;
	ShowSharePopup( shareURL, baseSocialShareURL );
}

function ShowShareClanAnnouncementPopup( groupId, gid )
{
	gShareRequestURL = "https://steamcommunity.com/gid/" + groupId + "/announcements/shareonsteam/" + gid;

	var baseSocialShareURL = "https://steamcommunity.com/gid/" + groupId + "/announcements/share/" + gid;
	var shareURL = "https://steamcommunity.com/gid/" + groupId + "/announcements/detail/" + gid;
	ShowSharePopup( shareURL, baseSocialShareURL );
}

function ShowSharePopup( url, baseSocialShareURL )
{
	var appendQueryParam = baseSocialShareURL.indexOf( "?" ) != -1 ? '&' : '?';

	$( "SharePopupLink_Facebook" ).href = baseSocialShareURL + appendQueryParam + "site=facebook&t=" + Math.random();
	$( "SharePopupLink_Twitter" ).href = baseSocialShareURL + appendQueryParam + "site=twitter";
	$( "SharePopupLink_Reddit" ).href = baseSocialShareURL + appendQueryParam + "site=reddit";

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

	var deferred = new jQuery.Deferred();
	var fnCancel = function() { CloseShareOnSteamDialog(); deferred.resolve(); };

	gShareOnSteamDialog = _BuildDialog(  'Share', $( 'ShareOnSteamDialog' ), [], fnCancel, null );
	deferred.always( function() { gShareOnSteamDialog.Dismiss(); } );
	gShareOnSteamDialog.Show();

	// attach the deferred's events to the modal
	deferred.promise( gShareOnSteamDialog );

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
			CloseShareOnSteamDialog();
			ShowAlertDialog( 'Share', 'The status update has been posted to your Friends Activity.' );
		},
		onFailure: function(transport) {
			ShowAlertDialog( 'Share', 'There was a problem sharing the status update.  Please try again later.' );
		}
	});
}





