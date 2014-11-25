
// Let's create a namespace for some of the internal methods
var admin = {};

// Validate data and submit form for new publisher
function BSubmitNewPartner()
{
	sPublisher = document.getElementById( 'publishername' ).value;
	if ( !sPublisher || sPublisher.length < 3 )
	{
		alert( 'Invalid partner name' );
		return false;
	}

	sConfirmTxt = 'Are you sure you want to add a partner named: ' + sPublisher + '?';
	return confirm(sConfirmTxt);
}

// Validate data and submit form for new application
function BSubmitNewAppID()
{
	var sConfirmTxt = 'Are you sure you want to add an app with ID: ' + document.getElementById( 'appId' ).value + '?';
	return confirm(sConfirmTxt);
}

function BVerifyPartnerDelete()
{
	return confirm( "Are you sure you want to delete this partner and all its users/permissions?" );
}

// Validate data and submit form for new publisher/app relationship
function BAffiliateAppWithPublisher( sPublisherName )
{
	iApp = document.getElementById( 'appid' ).value;

	sConfirmTxt = 'Are you sure you want to allow ' + sPublisherName +' access to: ' + iApp + '?';
	return confirm(sConfirmTxt);
}

function BVerifyAppDelete( sAppName, sPublisherName )
{
	return confirm( 'Are you sure you want to remove admin access for ' + sAppName + ' from ' + sPublisherName + '?' );
}

// Validate data and submit form for new publisher autogrant
function BSubmitNewAutogrant( sPublisherName )
{
	unPackageID = document.getElementById( 'packageid' ).value;

	sConfirmTxt = 'Are you sure you want all users from ' + sPublisherName +' to own package ' + unPackageID + '?';
	return confirm(sConfirmTxt);
}

function BVerifyAutograntDelete( unPackageID, sPublisherName )
{
	return confirm( 'Are you sure you want to remove licenses for ' + unPackageID + ' for users from ' + sPublisherName + '?' );
}

// Code for AddPublished modal box
// Refactor modal box code (here) so we can reduce the number of implementations.
var g_CustomIdBeingEdited;

// Functions to get viewport and scroll offset are coming from here (works better than others I found on the web):
//	http://stevenbenner.com/2010/04/calculate-page-size-and-view-port-position-in-javascript/

function GetViewportSize()
{
	var viewportWidth, viewportHeight;
	if (window.innerHeight && window.scrollMaxY)
	{
		viewportWidth = document.body.scrollWidth;
		viewportHeight = window.innerHeight + window.scrollMaxY;
	}
	else if (document.body.scrollHeight > document.body.offsetHeight)
	{
		// all but explorer mac
		viewportWidth = document.body.scrollWidth;
		viewportHeight = document.body.scrollHeight;
	}
	else
	{
		// explorer mac...would also work in explorer 6 strict, mozilla and safari
		viewportWidth = document.body.offsetWidth;
		viewportHeight = document.body.offsetHeight;
	}
	return { Width: viewportWidth, Height: viewportHeight };
}

function GetScrollOffsets()
{
	var horizontalOffset, verticalOffset;
	if (self.pageYOffset)
	{
		horizontalOffset = self.pageXOffset;
		verticalOffset = self.pageYOffset;
	}
	else if (document.documentElement && document.documentElement.scrollTop)
	{
		// Explorer 6 Strict
		horizontalOffset = document.documentElement.scrollLeft;
		verticalOffset = document.documentElement.scrollTop;
	} else if (document.body)
	{
		// all other Explorers
		horizontalOffset = document.body.scrollLeft;
		verticalOffset = document.body.scrollTop;
	}
	return { Horizontal: horizontalOffset, Vertical: verticalOffset };
}

// Found this in another page but seems to work as expected
function GetWindowSize()
{
	// Handle IE and other browsers
	var winW = 630, winH = 460;
	if (document.body && document.body.offsetWidth)
	{
		winW = document.body.offsetWidth;
		winH = document.body.offsetHeight;
	}
	if (document.compatMode=='CSS1Compat' &&
		document.documentElement &&
		document.documentElement.offsetWidth )
	{
		winW = document.documentElement.offsetWidth;
		winH = document.documentElement.offsetHeight;
	}
	if (window.innerWidth && window.innerHeight)
	{
		winW = window.innerWidth;
		winH = window.innerHeight;
	}
	return { Width: winW, Height: winH };
}

function OpenAddPartnerBox( customId )
{
	g_CustomIdBeingEdited = customId;

	var editBox = $( 'editBox' );
	var overlay = $( 'overlay' );
	var editTitle = $( 'editTitle' );
	var editText = $( 'partnerName' );

	editText.value = '';

	overlay.style.display = 'inline';
	editBox.style.display = 'inline';

	// Now that it is displayed we can update the position (as we have clientWidth and clientHeight now)

	// Calculate viewport dimension (the whole page) so overlay covers everything. In I.E. height:100% only means what is visible
	// However the method works only if we don't increase the size of the window outside what is visible.
	// If we use '100%', it mostly works however ins some particular cases (small window, then scrolling, we can see the overlay being set incorrectly)
	// It is better than setting width to a big size like 8192, as otherwise we could see the full 8192 size in the scroll bars.

	var windowSize = GetWindowSize();
	var winW = windowSize.Width;
	var winH = windowSize.Height;
	var objW = editBox.clientWidth;
	var objH = editBox.clientHeight;
	var left = (winW / 2) - (objW / 2);
	var top = (winH / 2) - (objH / 2);
	top += GetScrollOffsets().Vertical;
	editBox.style.top = ( top > 0 ? top : 0 ) + 'px';
	editBox.style.left = ( left > 0 ? left : 0 ) + 'px';

	editText.focus();
}

function CommitAddPartnerBox()
{
	var partnerName = $( 'partnerName' ).value;

	// Commit this to the DB, update the UI once it is done
	// The PHP size (and WG) calls this a publisher. There is way too many things to change, do the translation at this level.
	new Ajax.Request( g_szBaseURL + '/admin/addpublisherajax',
			{
				parameters: { 'publishername':  partnerName, 'sessionid' : g_sessionID },
				method: 'post',
				requestHeaders: { 'Accept': 'application/json' },
				onSuccess: function ( transport )
				{
					var partnerId = transport.responseText;
					if ( partnerId != '' )
					{
						// Now that we created the application and that's successful, let's update the combo box
						var optionElement = document.createElement( 'option' );
						optionElement.text = partnerName;
						optionElement.value = partnerId;
						$( 'partnerId' ).appendChild( optionElement );		// For the moment we add the option to the end of the combo list
						optionElement.selected = true;					// And let's assume that if the user created a new partner, (s)he wants to select it
					}
					else
					{
						alert( "Could not add partner '" + partnerName + "'. It probably already exists." );
					}
				},
				onFailure: function ( transport ) { alert( 'Ajax call failed in CommitAddPartnerBox().' ); },
				onException: function ( request, e ) { alert( 'Exception during call to CommitAddPartnerBox().' ); throw e; }
			} );

	CloseAddPartnerBox();
}

function CloseAddPartnerBox()
{
	g_CustomIdBeingEdited = null;
	$( 'overlay' ).style.display = 'none';
	$( 'editBox' ).style.display = 'none';
}

admin.OnChangeReleaseDatePicker = function OnChangeReleaseDatePicker( field, e )
{
	var fixedReleaseDateRadioElement = document.getElementById( 'fixedReleaseDateRadio' );
	fixedReleaseDateRadioElement.checked = true;
}

function ScanElements( parentElement, tagName, arrayToFill )
{
	var inputElements = parentElement.getElementsByTagName( tagName );
	for ( var i = 0 ; i < inputElements.length ; ++i )
	{
		var inputElement = inputElements[ i ];
		var inputName = inputElement.name;
		if ( !inputName )
		{
			if ( inputElement.type != 'submit' )
			{
				console.log( "ScanElements() - Element of type " + inputElement.type + " with id '" + inputElement.id + "' does not have a name. Skip it." );
			}
			continue;		// If there is no name, there is no point passing this as parameter
		}
		if ( inputName == 'disabled' )
		{
			continue;		// If named disabled, on purpose, do not store it
		}
		var value = inputElement.value;
		if ( ( inputElement.type == 'radio' ) || ( inputElement.type == 'checkbox' ) )
		{
			if ( inputElement.checked != true )		// To handle side effect with potential null
			{
				continue;	// Not checked, we don't care about this value (otherwise it would override previously checked value)
			}
		}
		if ( ( value == null ) || ( value == undefined ) || ( value == '' ) )
		{
			continue;		// No point sending data that don't have any particular values
		}
		arrayToFill[ inputName ] = value;
	}
}

// Add StartsWith() on the string type (like C# version)
if ( !String.prototype.StartsWith )
{
	String.prototype.StartsWith = function (str)
	{
		// lastIndexOf starts at 0, and goes in reverse, thus it only checks the beginning of the string
		return ( this.lastIndexOf(str, 0) === 0 );
	}
}

function EscapeHTML( text )
{
	return text.replace( /&/g, "&amp;" )
				.replace( /</g, "&lt;" )
				.replace( />/g, "&gt;" )
				.replace( /"/g, "&quot;" )
				.replace( /'/g, "&#039;" );
}

// http://doc.infosnel.nl/javascript_trim.html
function trim( s )
{
	if ( ( s == null ) || ( s == undefined ) )
	{
		return s;
	}
	var l=0; var r=s.length -1;
	while(l < s.length && s[l] == ' ')
	{	l++; }
	while(r > l && s[r] == ' ')
	{	r--;	}
	return s.substring(l, r+1);
}

function CompareAppResults( thisApp1, thisApp2 )
{
	// First let's compare the types, sorted by lowest first
	if (thisApp1.app_type != thisApp2.app_type )
	{
		return thisApp1.app_type - thisApp2.app_type;
	}

	// Same type
	return thisApp2.appid - thisApp1.appid;		// Display the highest AppId first
												// As there is bigger chance that we want to see the recent Apps.
}

function IsNullOrEmptyString( text )
{
	if ( text == null )
	{
		return true;
	}
	if ( text == undefined )
	{
		return true;
	}
	if ( text == '' )
	{
		return true;
	}
	return false;
}

function GetPartnerNameText( thisApp )
{
	var textToDisplay = '';
	if ( thisApp.publishers && thisApp.publishers.length > 0 )
	{
		textToDisplay += "Publishers: ";
		for ( var i = 0; i < thisApp.publishers.length; ++i )
		{
			textToDisplay += ( i != 0 ? ', ' : '' ) + thisApp.publishers[i];
		}
	}
	if ( thisApp.store_publishers && thisApp.store_publishers.length > 0 )
	{
		if ( thisApp.publishers && thisApp.publishers.length > 0 )
		{
			textToDisplay += '<br>';
		}
		textToDisplay += "Store Publishers: ";
		for ( var i = 0; i < thisApp.store_publishers.length; ++i )
		{
			textToDisplay += ( i != 0 ? ', ' : '' ) + thisApp.store_publishers[i];
		}
	}

	return textToDisplay.length != 0 ? textToDisplay : "None set";
}

function MapTypeToText( type )
{
	switch ( type )
	{
		case 0: return "Invalid";
		case 1: return "Game";
		case 2: return "Application";
		case 4: return "Tool";
		case 8: return "Demo";
		case 16: return "Media";
		case 32: return "DLC";
		case 64: return "Guide";
		case 128: return "Driver";
		case 1073741824: return "Shortcut";
		case 2147483648: return "Depot";
		case 256: return "Config";
		case 512: return "Movie";
		case 1024: return "TV Series";
		case 2048: return "Video";
		case 4096: return "Plugin";
		case 8192: return "Music";
		default: return 'UNKNOWN: ' + type;
	}
}

admin.CreateDiv = function CreateDiv( parent, template, id, value )
{
	var divElement = document.createElement( 'div' );
	divElement.id = id;
	divElement.style.styleFloat = 'left';							// Another cross-browser compatibility issue
	divElement.style.cssFloat = 'left';
	divElement.style.width = $( template ).style.width;				// Copy from the header for the moment
	divElement.innerHTML = value;									// Let's avoid innerText, and use innerHTML instead,
																	// it works cross-browser and will keep the <br/> tags
	divElement.position = 'relative';
	parent.appendChild( divElement );
	return divElement;
};

function CreateBr( parentElement )
{
	var brElement = document.createElement( 'br' );
	brElement.style.clear = 'both';
	parentElement.appendChild(brElement);

}

var g_lastPrimarySearchSetTimeout = null;
var g_LastSecondarySearchSetTimeout = null;

var g_lastPrimarySearchRequest = null;
var g_LastSecondarySearchRequest = null;

var g_SendCommandAfterMs = 500;				// Send command after half a second

function CheckSendChangeAllCommand( elementSearch, elementPartnerSearch )
{
	// We set variables here, so the async version can check if the content changed between the last request
	// And cancel the Ajax query if the result is not relevant anymore...
	g_lastPrimarySearchSetTimeout = trim( elementSearch.value );
	if ( elementPartnerSearch )
	{
		g_LastSecondarySearchSetTimeout = trim( elementPartnerSearch.value );
	}
	else
	{
		g_LastSecondarySearchSetTimeout = '';
	}
	if ( ( g_lastPrimarySearchSetTimeout == '' ) && ( g_LastSecondarySearchSetTimeout == '' ) )
	{
		// Nothing to display, clear the result
		var resultsElement = $( 'results' );
		while ( resultsElement.hasChildNodes() )
		{
			resultsElement.removeChild( resultsElement.firstChild );
		}
		// Reset the previous request state, in case we simply copy and paste the previous search after emptying the buffer
		g_lastPrimarySearchRequest = null;
		g_LastSecondarySearchRequest = null;
		return false;
	}

	// We have to send the message
	return true;
}

// Code related to the allpackages page

function OnChangeAllApps( event )
{
	if ( CheckSendChangeAllCommand( $( 'appSearch' ), $( 'partnerSearch' ) ) == false )
	{
		return;
	}

	var eventObj = window.event ? window.event : event;	//distinguish between IE's explicit event object (window.event) and Firefox's implicit.
	var unicode = eventObj.charCode? eventObj.charCode : eventObj.keyCode;

	switch (unicode)
	{
		case 16:			// Shift - Is there
		case 17:			// Control
		case 18:			// Alt
		case 20:			// Caps-lock
		case 27: 			// Esc
		case 33:			// Page up
		case 34:			// Page down
		case 35:			// Home (verify)
		case 36:			// End (verify)
		case 37:			// Up (verify)
		case 38:			// Down (verify)
		case 39:			// left (verify)
		case 40:			// right (verify)
		case 45:			// insert
		case 91:			// Windows
		case 93:			// Context menu
			// These case are now certainly covered by the checks to avoid sending two times the same query
			// Skip arrows, home, end, shift, control, escape, windows, caps lock...
			// We could do the F1...F12, and others at a later point...
			return;
		case 9:
		case 13:
			// If tab or enter, we query directly
			OnChangeAllAppsAsync();
			break;
		default:
			window.setTimeout( 'OnChangeAllAppsAsync()', g_SendCommandAfterMs );
			break;
	}
}

function OnChangeAllAppsAsync()
{
	var appSearch = trim( $( 'appSearch' ).value );
	var partnerSearch = trim( $( 'partnerSearch' ).value );

	if ( ( appSearch == g_lastPrimarySearchRequest ) && ( partnerSearch == g_LastSecondarySearchRequest ) )
	{
		// We already sent the request, no need to send it again...
		//console.log( 'Already sent the request, skip it. ' + appSearch + "/" + partnerId );
		return;
	}
	if ( ( appSearch != g_lastPrimarySearchSetTimeout ) || ( partnerSearch != g_LastSecondarySearchSetTimeout ) )
	{
		// Since we received this request, we actually sent a new one that is more up-to-date, we can cancel this one...
		//console.log( 'Request is obsolete, skip it. ' + appSearch + "/" + partnerId );
		return;
	}

	g_lastPrimarySearchRequest = appSearch;
	g_LastSecondarySearchRequest = partnerSearch;

	if ( ( appSearch == '' ) && ( partnerSearch == '' ) )
	{
		// Reverted back to nothing, no need to send the request, it will fail
		return;
	}

	var parameters = { };
	var appId = parseInt( appSearch);
	if ( appSearch != '' )
	{
		if ( isNaN( appId ) )
		{
			parameters.appName = appSearch;
		}
		else
		{
			parameters.appId = appId;		// Could convert to integer, then we are looking it up as an appId
		}
	}
	parameters.partnerName = partnerSearch;

	new Ajax.Request( g_szBaseURL + '/admin/allappsqueryajax',
			{
				method:'get',
				requestHeaders: { 'Accept': 'application/json' },
				evalJSON: 'force',
				parameters: parameters,
				onSuccess: function(transport)
				{
					if ( ( appSearch != g_lastPrimarySearchSetTimeout ) || ( partnerSearch != g_LastSecondarySearchSetTimeout ) )
					{
						// After we sent this request, we actually sent a new one that is more up-to-date, we can cancel this one...
						//console.log( 'Request is obsolete, skip it. ' + appSearch + "/" + partnerId );
						return;
					}
					OnChangeAllAppsCallback( transport, parameters );
				},
				onFailure: function ( transport ) { alert( 'Ajax call failed in OnChangeAllApps().' ); },
				onException: function ( request, e ) { alert( 'Exception during call to OnChangeAllApps().' + e ); throw e; }
			} );
}

// Gets called when we get the search result from PHP.
// This is going to fill the UI with the results.
function OnChangeAllAppsCallback( transport, parameters )
{
	var response = transport.responseJSON
	if ( !response )
	{
		alert( "OnChangeAllAppsCallback() - No response: " + transport.responseText );
		return;
	}
	if ( response.success == false )
	{
		alert( "OnChangeAllAppsCallback() - Unsuccessful: " + response.result );
		return;
	}

	DisplayAllApps( response, $( 'results' ) );
}

function DisplayAllApps( response, resultsElement )
{
	var apps = response.result;
	apps.sort( CompareAppResults );

	// Before we add to the result, let's delete previous content.
	while ( resultsElement.hasChildNodes() )
	{
		resultsElement.removeChild( resultsElement.firstChild );
	}

	var numberOfResults = response.num_found;
	var resultText = numberOfResults == 0 ? 'No result found.' : "Displaying " + apps.length + " of " + numberOfResults + ' results ';
	$( 'resultsCount' ).update( resultText );

	// Note that we would probably want to sort by AppIds before displaying this
	for ( var i = 0 ; i < apps.length ; ++i )
	{
		var thisApp = apps[ i ];

		var color;		// Color will match the definition in styles_admin.css (.app_Movie, etc...)
		switch ( parseInt( thisApp.app_type ) )
		{
			case 1:	color = '#ffffff'; break;
			case 2:	color = '#ffffff'; break;
			case 4:	color = '#ffffff'; break;
			case 8: color = '#89c53f'; break;		// Demo
			case 32: color = '#a159a3'; break;		// DLC
			case 16:	color = '#6ba1bd'; break;		// Media
			case 64:	color = '#6ba1bd'; break;
			case 256:	color = '#6666FF'; break;
			default:							color = '#ff0000';	break;			// If we don't recognize the type, let put a nice color :)
		}

		// First the application
		var applicationElement = document.createElement( 'div' );
		applicationElement.style.backgroundColor = '#333333';
		applicationElement.style.MarginTop = '4px';
		applicationElement.style.paddingTop = '4px';
		applicationElement.style.paddingBottom = '4px';
		resultsElement.appendChild( applicationElement );

		var appIdText = thisApp.appid;
		var appIdDiv = admin.CreateDiv( applicationElement, 'appIdHeader', 'appId', appIdText );
		appIdDiv.style.color = color;

		var appIdNameDiv = admin.CreateDiv( applicationElement, 'appNameHeader', 'appName', thisApp.name );
		appIdNameDiv.style.color = color;

		var partnerNameDiv = admin.CreateDiv( applicationElement, 'partnerNameHeader', 'partnerName', GetPartnerNameText( thisApp ) );
		partnerNameDiv.style.color = color;

		// store link
		var text = 'no';
		if ( thisApp.store_itemid )
		{
			var url = g_szBaseURL + '/admin/game/edit/' + thisApp.store_itemid;
			text = '<a href="' + url + '" target="_blank">edit</a>';
		}
		admin.CreateDiv( applicationElement, 'inStoreHeader', 'inStore', text );

		// steamworks link
		var url = g_szBaseURL + '/apps/landing/' + thisApp.appid;
		text = '<a href="' + url + '" target="_blank">edit</a>';
		admin.CreateDiv( applicationElement, 'inSteamworksHeader', 'inSteamworks', text );

		var typeDiv = admin.CreateDiv( applicationElement, 'typeHeader', 'type', MapTypeToText( parseInt( thisApp.app_type ) ) );
		typeDiv.style.color = color;

		url = g_szBaseURL + "/admin/allpackages?appId=" + thisApp.appid;
		var numPackages = thisApp.hasOwnProperty('subs') ? thisApp.subs.length : 0;
		if (numPackages == 0)
		{
			text = 'no packages';
		}
		else if (numPackages == 1)
		{
			text = '<a href="' + url + '" target="_blank">1 package</a>';
		}
		else
		{
			text = '<a href="' + url + '" target="_blank">' + numPackages + ' packages</a>';
		}
		admin.CreateDiv( applicationElement, 'packagesHeader', 'packages', text );

		CreateBr( applicationElement );

		var spacingElement = document.createElement( 'div' );
		spacingElement.style.marginTop = '4px';
		resultsElement.appendChild( spacingElement );
	}
}

function OnAppClick( depotId )
{
	$( depotId ).style.display = ( $( depotId ).style.display == '' ? 'none' : '' );
}

function TogglePackageInfoVisibility( element )
{
	for ( var sibling = element.next(); sibling && !sibling.hasClassName('PackageSection'); sibling = sibling.next() )
	{
		sibling.toggle();
	}
}
// Code related to the allpackages page

function OnChangeAllPackagesKeyEvent(event)
{
	var eventObj = window.event ? window.event : event;	//distinguish between IE's explicit event object (window.event) and Firefox's implicit.
	var unicode = eventObj.charCode? eventObj.charCode : eventObj.keyCode;

	switch (unicode)
	{
		case 16:			// Shift - Is there
		case 17:			// Control
		case 18:			// Alt
		case 20:			// Caps-lock
		case 27: 			// Esc
		case 33:			// Page up
		case 34:			// Page down
		case 35:			// Home (verify)
		case 36:			// End (verify)
		case 37:			// Up (verify)
		case 38:			// Down (verify)
		case 39:			// left (verify)
		case 40:			// right (verify)
		case 45:			// insert
		case 91:			// Windows
		case 93:			// Context menu
			// These case are now certainly covered by the checks to avoid sending two times the same query
			// Skip arrows, home, end, shift, control, escape, windows, caps lock...
			// We could do the F1...F12, and others at a later point...
			return;
		case 9:
		case 13:
			// If tab or enter, we query directly
			OnChangeAllPackages(true);
			break;
		default:
			OnChangeAllPackages(false);
			break;
	}

}

function OnChangeAllPackages(sendImmediately)
{
	if ( CheckSendChangeAllCommand( $( 'packageSearch' ), $( 'packageSearchByDepotId' ) ) == false )
	{
		return;
	}

	if (sendImmediately) {
		OnChangeAllPackagesAsync();
	} else {
		window.setTimeout( 'OnChangeAllPackagesAsync()', g_SendCommandAfterMs );
	}
}

function OnChangeAllPackagesAsync()
{
	$( 'errorText' ).update( '' );

	var packageSearch = trim( $( 'packageSearch' ).value );
	var depotIdSearch = trim( $( 'packageSearchByDepotId' ).value );

	if ( ( packageSearch == g_lastPrimarySearchRequest ) && ( depotIdSearch == g_LastSecondarySearchRequest ) )
	{
		// We already sent the request, no need to send it again...
		//console.log( 'Already sent the request, skip it. ' + packageSearch );
		return;
	}
	if ( ( packageSearch != g_lastPrimarySearchSetTimeout ) || ( depotIdSearch != g_LastSecondarySearchSetTimeout ) )
	{
		// Since we received this request, we actually sent a new one that is more up-to-date, we can cancel this one...
		//console.log( 'Request is obsolete, skip it. ' + packageSearch );
		return;
	}

	g_lastPrimarySearchRequest = packageSearch;
	g_LastSecondarySearchRequest = depotIdSearch;

	if ( ( packageSearch == '' ) && ( depotIdSearch == '' ) )
	{
		// Reverted back to nothing, no need to send the request, it will fail
		return;
	}

	var parameters = { };
	if ( packageSearch != '' )
	{
		var packageId = parseInt( packageSearch);
		if ( isNaN( packageId ) )
		{
			parameters.packageName = packageSearch;
		}
		else
		{
			parameters.packageId = packageId;		// Could convert to integer, then we are looking it up as a packageId
		}
	}

	if ( depotIdSearch != '' )
	{
		var depotId = parseInt( depotIdSearch );
		if ( isNaN( depotId ) )
		{
			// Not a number, we are not doing the search
			$( 'errorText' ).update( depotIdSearch + " can't be converted to an app or depot ID." );
			return;
		}
		else
		{
			parameters.depotId = depotId;
		}
	}

	parameters.output = 'html';         // We ask the PHP back-end to write the dynamic template for us
										// The message returned is bigger but there is less code to maintain

	new Ajax.Request( g_szBaseURL + '/admin/allpackagesqueryajax',
		{
			method:'get',
			requestHeaders: { 'Accept': 'application/json' },
			parameters: parameters,
			onSuccess: function(transport)
			{
				if ( ( packageSearch != g_lastPrimarySearchSetTimeout ) || ( depotIdSearch != g_LastSecondarySearchSetTimeout ) )
				{
					// After we sent this request, we actually sent a new one that is more up-to-date, we can cancel this one...
					//console.log( 'Request is obsolete, skip it. ' + partnerSearch );
					return;
				}
				$( 'results' ).innerHTML = transport.responseText;
			},
			onFailure: function ( transport ) { alert( 'Ajax call failed in OnChangeAllPackages().' ); },
			onException: function ( request, e ) { alert( 'Exception during call to OnChangeAllPackages().' + e ); throw e; }
		} );
}

function OnPackageClick( depotId )
{
	$( depotId ).style.display = ( $( depotId ).style.display == '' ? 'none' : '' );
}

function GoToLink( linkId )
{
	var link = $( linkId ).value;
	if ( link != '' )
	{
		window.location = link;
	}
}

function OnSavePackageAjax( bDupe, appitems )
{

	$( 'errorMessage' ).update( '' );
	$( 'savedMessage' ).update( 'Saving...' );

	// Let's get all the inputs directly from the page
	var formElement = document.getElementById( 'editPackage' );
	var parameters = {};
	ScanElements( formElement, 'input', parameters );
	ScanElements( formElement, 'select', parameters );
	ScanElements( formElement, 'textarea', parameters );
	parameters.appitems = Object.toJSON( appitems );
	parameters.sessionid = g_sessionID;

	// if we are creating a new package based on existing package
	if ( bDupe )
	{
		var r = confirm( "Are you sure you want to create a new package based on this?" );
		if ( r == false )
		{
			return;
		}

		parameters.packageid = -1;
		parameters.create_packages_only = true;

	}

	// let's do some checks here
	// appids and depotids can only contain digits and , (otherwise the parsing will fail in the back-end).
	if ( parameters.appids )
	{
		if ( /[^0123456789,]+/.test( parameters.appids ) )
		{
			$( 'errorMessage').update( 'appids does not have the proper syntax. No whitespaces are allowed. Example: "1,2,3,4".' );
			$( 'savedMessage').update( '' );
			return;
		}
	}

	if ( parameters.depotids )
	{
		if ( /[^0123456789,]+/.test( parameters.depotids ) )
		{
			$( 'errorMessage').update( 'depotids does not have the proper syntax. No whitespaces are allowed. Example: "1,2,3,4".' );
			$( 'savedMessage').update( '' );
			return;
		}
	}

	if ( parameters.startDepotAdd )
	{

		if ( /[^0123456789]+/.test( parameters.startDepotAdd ) )
		{
			$( 'errorMessage').update( 'Depot Range does not have the proper syntax. Integers only.' );
			$( 'savedMessage').update( '' );
			return;
		}


		if ( parameters.endDepotAdd )
		{
			if( /[^0123456789]+/.test( parameters.endDepotAdd ) )
			{
				$( 'errorMessage').update( 'Depot Range does not have the proper syntax. Integers only.' );
				$( 'savedMessage').update( '' );
				return;
			}

			if(parameters.startDepotAdd > parameters.endDepotAdd)
			{
				$( 'errorMessage').update( 'Start depot must be less than end depot.' );
				$( 'savedMessage').update( '' );
				return;

			}
		}

	}

	// Special case for package creation. In that case packageId is Not A Number
	if ( isNaN( parameters.packageid ) )
	{
		parameters.packageid = -1;
		parameters.create_packages_only = true;
	}


	// We Ajax the save so if it fails we are still on the same page and the user can modify the entry
	// It does not pollute the browser history either
	new Ajax.Request( g_szBaseURL + '/admin/savepackageajax',
		{
			method: 'post',
			requestHeaders: { 'Accept': 'application/json' },
			evalJSON: 'force',
			parameters: parameters,
			onSuccess: function(transport){	OnSaveCddbPackageCallback( transport );	},
			onFailure: function ( transport ) { alert( 'Ajax call failed in OnSavePackageAjax().' ); },
			onException: function ( request, e ) { alert( 'Exception during call to OnSavePackageAjax().' + e ); throw e; }
		} );
}

function OnSaveCddbPackageCallback( transport )
{
	var response = transport.responseJSON;
	if ( !response )
	{
		return;
	}
	if ( response.success )
	{
		$( 'errorMessage' ).update( '' );
		$( 'savedMessage' ).update( 'Package has been saved.');
		$( 'packageIdVisible' ).update( response.packageid );
		$( 'packageId').value = response.packageid;
		$( 'packageDisplay' ).update( response.newDisplay );

		if(response.startDepotAdd > 0)
		{
			$( 'depotRangeMessage').update(response.startDepotAdd + ' through ' + response.endDepotAdd + ' added.');
		}
		else
		{
			$( 'depotRangeMessage').update('');
		}


		$( 'revision' ).update( response.revision );
		$( 'last_modification_time' ).update( response.last_modification_time );
		$( 'submitInput' ).value = 'Apply Changes';
	}
	else
	{
		$( 'errorMessage' ).update( 'Package could not be saved. ' + response.error );
		$( 'savedMessage' ).update( '' );
		$( 'depotRangeMessage').update('');
	}
}

function ChangeCheckedState( parentElement, value )
{
	var inputElements = parentElement.getElementsByTagName( 'input' );
	for ( var i = 0 ; i < inputElements.length ; ++i )
	{
		var inputElement = inputElements[ i ];
		if ( inputElement.type == "checkbox" )
		{
			inputElement.checked = value;
		}
	}
}

function ActionOnPackages( parentElement, appIds, action )
{
	$( 'errorText').update( '' );
	$( 'packageActionStatusText' ).update( 'working...' );
	$( 'packageActionErrorText').update( '' );
	$( 'packageActionUpdateText').update( '' );
	$( 'addIdsButton' ).disable().addClassName('disabled');
	$( 'removeIdsButton' ).disable().addClassName('disabled');

	// Construct the string that list all the packages
	var allPackagesToUpdate = '';
	var inputElements = parentElement.getElementsByTagName( 'input' );
	var count = 0;
	for ( var i = 0 ; i < inputElements.length ; ++i )
	{
		var inputElement = inputElements[ i ];
		if ( ( inputElement.type == "checkbox" ) && inputElement.checked )
		{
			if ( allPackagesToUpdate != '' )
			{
				allPackagesToUpdate += ',';
			}
			allPackagesToUpdate += String( inputElement.value );
			count += 1;
		}
	}

	if ( count >= 10 )
	{
		var r = confirm( "Are you sure you want to modify " + count + " packages?" );
		if ( r == false )
		{
			return;
		}
	}

	// The inputs check is done by the PHP code.
	var parameters = {};
	parameters.packageidstoupdate = allPackagesToUpdate;
	parameters.appids = appIds;
	parameters.action = action;
	parameters.sessionid = g_sessionID;

	new Ajax.Request( g_szBaseURL + '/admin/actiononpackagesajax',
		{
			method: 'post',
			requestHeaders: { 'Accept': 'application/json' },
			evalJSON: 'force',
			parameters: parameters,
			onSuccess:  function(transport)
						{
							var response = transport.responseJSON;
							if ( response )
							{
								$( 'packageActionUpdateText').update( response.message_text );
								$( 'packageActionErrorText').update( response.error_text );
							}
							$( 'packageActionStatusText' ).update( '' );
							$( 'addIdsButton' ).enable().removeClassName('disabled');;
							$( 'removeIdsButton' ).enable().removeClassName('disabled');;
						},
			onFailure: function ( transport ) { alert( 'Ajax call failed in ActionOnPackages().' ); },
			onException: function ( request, e ) { alert( 'Exception during call to ActionOnPackages().' + e ); throw e; }
		} );
}

// updates allowed country hidden input fields
function UpdateAllowedCountries()
{
	var select = $( 'AllowedCountriesSelect' );
	var text = $( 'AllowedCountriesText' ).value;

	var hiddenAllowed = $('AllowedCountries_Hidden');
	var hiddenRestricted = $('RestrictedCountries_Hidden');

	if ( select.value == 'not' )
	{
		hiddenAllowed.value = '';
		hiddenRestricted.value = text;
	}
	else
	{
		hiddenAllowed.value = text;
		hiddenRestricted.value = '';
	}
}

//
// Localized text areas
//

// called when a localized text area selection box has changed
function OnLocLanguageSelect( id )
{
	var select = $( id + '_select' );
	LocChangeLanguage( select.value );
}

// changes the localization language
function LocChangeLanguage( strLanguage )
{
	for ( var i = 0; i < g_LocSectionIDs.length; i++ )
		LocLanguageSelect( g_LocSectionIDs[i], strLanguage );
}

// global for registering all localized sections. Used to update all text area languages when one changes
var g_LocSectionIDs = [];
var g_bLocSetToEnglishOnLoad = false;
function LocListenForEvents( id )
{
	g_LocSectionIDs.push( id );

	// fire an event to set all text entries to english on page load. Only do this once, and after
	// all enteries have registered for language change notifications (hence the setTimeout call below)
	if ( !g_bLocSetToEnglishOnLoad )
	{
		g_bLocSetToEnglishOnLoad = true;
		setTimeout( function(){ LocChangeLanguage( 'english' ) }, 1 );
	}
}

// sets up text area for specific language
function LocLanguageSelect( id, language )
{
	var select = $( id + '_select' );
	if ( select )
		select.value = language;

	var currentLang = $( id + '_currentlanguage' );
	if ( currentLang )
		currentLang.value = language;

	var textArea = $( id + '_textarea' );
	var hiddenInput = $( id + language + '__hidden' );
	if ( textArea && hiddenInput )
		textArea.value = hiddenInput.value;
}

// called when localized text input changes. Updates hidden inputs
function OnLocTextChanged( id )
{
	var currentLanguage = $( id + '_currentlanguage' ).value;
	if ( currentLanguage.length <= 0 )
		return;

	var textArea = $( id + '_textarea' );
	var hiddenInput = $( id + currentLanguage + '__hidden' );
	hiddenInput.value = textArea.value;
}

// called to set styles on text area select
function LocUpdateLangThatHaveText( id )
{
	var hiddenInputs = $$( '#' + id + '_area input' );
	for ( var i = 0; i < hiddenInputs.length; i++ )
	{
		if ( hiddenInputs[i].id.indexOf( "_hidden" ) == -1 )
			continue;

		var idLanguage = hiddenInputs[i].id.slice( id.length );
		idLanguage = idLanguage.slice( 0, idLanguage.indexOf( "_" ) );
		var option = $( id + idLanguage + '__option' );

		if ( hiddenInputs[i].value.length > 0 )
			option.addClassName( 'HasText' );
		else
			option.removeClassName( 'HasText' );
	}
}

function InferHtmlTagsInTextArea( id )
{
	// find text area
	var area = $( id + '_textarea' );
	window.originalHtmlAreaValue = area.value;
	area.value = InferHtmlTags( area.value );
	jQuery("#app_content_about_default_preview").html( area.value );
	OnLocTextChanged( id );
}

function InferBBCodeInTextArea( id )
{
	// find text area
	var area = $( id + '_textarea' );
	window.originalHtmlAreaValue = area.value;
	area.value = InferBBCode( area.value );
	jQuery("#app_content_about_default_preview").html( area.value );
	OnLocTextChanged( id );
}

function RevertInferedHtml( id, value )
{
	if ( window.originalHtmlAreaValue )
	{
		// find text area
		var area = $( id + '_textarea' );
		jQuery("#app_content_about_default_preview").html();
		area.value = window.originalHtmlAreaValue;
		OnLocTextChanged( id );
	}
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

function RejectAppReleaseRequest( appid )
{
	var dialog = ShowPromptWithTextAreaDialog( 'Notes to send to the partner', '', null, null, 1000 );

	dialog.done( function( data ) {
		data = v_trim( data );
		if ( data.length < 1 )
		{
			ShowAlertDialog( 'Error', 'Please enter in some notes for the partner telling them what they need to do before their app can be released.' );
			return;
		}
		$J.post( 'https://partner.steamgames.com/admin/ajaxrejectappreleaserequest', {
				'sessionid' : g_sessionID,
				'appid' : appid,
				'notes_for_partner' : data
			}
		).done( function( json ) {
				top.location.reload();
			} );
	} );
}

// Register a callback to fire when our changes have been processed by the AI
function OnAIWaitComplete(func)
{
	var doCheck = function()
	{
		$J.ajax({
			url: "https://partner.steamgames.com/actions/waitforedits",
			type: "GET",
			dataType: "json"
		})
			.done(function( rgResult )
			{
				if( rgResult.wait_successful == 1 )
				{
					func();
				}
				else
				{
					// Try again in 500ms
					setTimeout(doCheck, 500);
				}
			})
			.fail(function( jqXHR, textStatus ) {
				alert( "Request failed: " + textStatus );
			});
	};
	doCheck();
}

