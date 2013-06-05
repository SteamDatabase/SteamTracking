
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
// Refactor modal box code (here and in checklist.js) so we can reduce the number of implementations.
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
				parameters: { 'publishername':  partnerName },
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

function DisableElements( parentElement, tagName )
{
	var inputElements = parentElement.getElementsByTagName( tagName );
	for ( var i = 0 ; i < inputElements.length ; ++i )
	{
		var inputElement = inputElements[ i ];
		var inputName = inputElement.name;
		if ( !inputName )
		{
			continue;		// If there is no name, there is no point passing this as parameter
		}
		if ( inputName == 'disabled' )
		{
			continue;		// If disabled, on purpose, do not store it
		}
		inputElement.disabled = true;
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

function MergeArrays( destination, source, filter )
{
	for (var property in source)
	{
		if ( source.hasOwnProperty( property ) )
		{
			if ( property.StartsWith( filter) )
			{
				destination[ property ] = source[ property ];
			}
		}
	}
	return destination;
}

var g_ApplicationAdded = false;

function OnAjaxCallback( transport, parameters, text )
{
	var response = transport.responseJSON
	if ( !response )
	{
		alert( "OnAjaxCallback( '" + text + "' ) - No response: " + transport.responseText );
		return;
	}
	if ( response.success == false )
	{
		alert( "OnAjaxCallback( '" + text + "' ) - Unsuccessful: " + response.result );
		return;
	}
	// All good, nothing to do, except displaying some text...
	if ( text )
	{
		$( 'resultMessages' ).innerHTML += "<br/>" + text;
	}
}

function OnApplicationAdded( parameters, appId )
{
	// The application has been added, we need to do two things

	// Watch the application...
	var watchlistParameters = { appId: appId, mode: 'add' };
	new Ajax.Request( g_szBaseURL + '/admin/updatewatchlistajax',
		{
			parameters:		watchlistParameters,
			method:			'post',
			requestHeaders:	{ 'Accept': 'application/json' },
			evalJSON:		'force',
			onSuccess: function ( transport ) { OnAjaxCallback( transport, watchlistParameters, 'Application added to your watchlist.' ) },
			onFailure: function ( transport ) { alert( 'Ajax call failed for OnApplicationAdded().' ); RestoreActionButtons( watchlistParameters ); },
			onException: function ( request, e ) { alert( 'Exception during Ajax call for OnApplicationAdded().' ); RestoreActionButtons( watchlistParameters ); throw e; }
	} );

	// And if necessary, set its global release date
	if ( parameters.releaseDate == 'datePicker' )
	{
		var date = new Date( parameters.releaseDatePicker );				// Convert from Month/Day/Year to number of seconds since 1970
		var epoch = date.getTime() / 1000.0;

		var dateParameters = { appId: appId, mode: 'set', category: '', date: epoch };
		new Ajax.Request( g_szBaseURL + '/apps/callcategorydatemethodajax',
			{
				parameters:		dateParameters,
				method:			'post',
				requestHeaders:	{ 'Accept': 'application/json' },
				evalJSON:		'force',
				onSuccess: function ( transport ) { OnAjaxCallback( transport, dateParameters, 'Global release date set for application.' ) },
				onFailure: function ( transport ) { alert( 'Ajax call failed for OnApplicationAdded().' ); RestoreActionButtons( dateParameters ); },
				onException: function ( request, e ) { alert( 'Exception during Ajax call for OnApplicationAdded().' ); RestoreActionButtons( dateParameters ); throw e; }
		} );
	}
}

function AddApplicationCallback( parameters, transport )
{
	var result = transport.responseJSON;
	var messages;
	var warnings;
	var errors;
	if ( result )
	{
		// Successful JSON parsing
		$( 'resultErrors' ).innerHTML += BuildText( result.Errors );
		$( 'resultWarnings' ).innerHTML += BuildText( result.Warnings );
		$( 'resultMessages' ).innerHTML += BuildText( result.Messages );

		if ( result.Added == true )
		{
			g_ApplicationAdded = true;			// So if there is an exception at some point, we will restore the correct buttons
			var appId = result.AppId;			// We get the AppId from the result as the AppId has probably been auto-generated...

			// Application added, we are done for the main part (there may be some other jobs that will finish later).
			// Update the UI buttons
			FinalizeUiAfterAddedApplication( parameters );

			$( 'editTechnicalData' ).href = g_szBaseURL + '/apps/view/' + appId;
			$( 'editMarketingData' ).href = g_szBaseURL + '/apps/title/' + appId;
			$( 'addedBlock' ).style.display = 'inline';

			OnApplicationAdded( parameters, appId );		// AppId has probably been created dynamically, we need to pass it

			var partnerId = parameters[ g_partnerId ];		// g_partnerId is the element id of the partner Id combo box
															// It should be set by the page.
			if ( partnerId != undefined )
			{
				var partnerName = result.PublisherName;		// We don't send this, however we get it in the response
															// so we can display it here

				$( 'partnerDetails' ).href = g_szBaseURL + '/pub/ownershipoverview/' + partnerId;
				$( 'partnerDetails' ).innerHTML = "View Partner Details for '" + partnerName + "'";
				$( 'partnerUsers' ).href = g_szBaseURL + '/pub/view/' + partnerId;
				$( 'partnerUsers' ).innerHTML = "View Users In '" + partnerName + "'";

				var isApplication = ( parameters[ 'appType' ] == 'Application' );

				var appName = parameters[ 'appName' ];
				var href = "mailto:?subject='" + appName + "' Is Being Set Up In Steam&body=Hello-%0A%0a";
				if ( isApplication )
				{
					href += "We have completed the initial setup for '" + appName + "'. To get the application page set up on Steam, ";
					href += "we will need a number of art assets as well as details about your application. You will need to log into ";
				}
				else
				{
					href += "We have completed the initial setup for '" + appName + "'. To get the game page set up on Steam, ";
					href += "we will need a number of art assets as well as details about your game. You will need to log into ";
				}
				href += g_szBaseURL + "/apps/title/" + appId + " to begin that process.%0A%0a";
				href += "The web interface describes the data we need but here are some additional details regarding the ";
				href += "technical requirements of the assets you will need to supply:%0A%0a";
				href += "Please provide your product key art and logo in high resolution layered .PSD format to be used by ";
				href += "our design team in creating all necessary marketing assets.%0a%0A";
				if ( isApplication )
				{
					href += "Please provide all videos assets in 720 x 1280 resolution, 30/29.97 or 60/59.94 fps, ";
				}
				else
				{
					href += "Please provide all trailer or gameplay videos in 720 x 1280 resolution, 30/29.97 or 60/59.94 fps, ";
				}
				href += "high bit rate (5,000+ Kbps) and in .mov or .wmv format. 4:3 aspect ratio is also acceptable but not ";
				href += "preferred since the Steam client is optimized for widescreen. Please note that audio will be filtered "
				href += "down to regular stereo when we transcode the videos. %0a%0A";
				href += "Please feel free to contact us if you have any questions or issues.%0A%0a";
				href += "-Best Regards,%0A%0a%0A";
				href += "							Valve";
				$( 'partnerMailTo' ).href = href;
				$( 'partnerMailTo' ).innerHTML = "E-mail '" + partnerName + "' Instructions for 