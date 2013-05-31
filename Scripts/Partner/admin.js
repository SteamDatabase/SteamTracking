
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
				$( 'partnerMailTo' ).innerHTML = "E-mail '" + partnerName + "' Instructions for Submitting Marketing Data";

				$( 'addedPartner' ).style.display = 'inline';
			}

			// Now that we are done creating the application in Steamworks, let's see if we have to do it in the store
			// We don't want to that in parallel in case of the Steamworks application creation returned an error
			if ( parameters[ 'createInStore' ] == 'true' )
			{
				var createInStoreParameters =	{
													'app[appid]':						appId,
													'app[name]':						parameters[ 'appName' ],
													'app[type]':						parameters[ 'appType' ],
													'app[publisherid]':					partnerId,						// This is used for the admin overview drop down
													'app_generate_id':					false,
													'parentId':							$( 'parentId_target' ).value
												};

				// Look for all the app[administrative] tags. They will be added as is to the parameters
				// During the application creation in the store, we will update the corresponding fields.
				createInStoreParameters = MergeArrays( createInStoreParameters, parameters, 'app[administrative]' );

				if ( partnerId != undefined )
				{
					// By default we set the publisher name from the back-end. This is probably not the official name but better than no name.
					// This will also help the search all app.
					createInStoreParameters[ 'app[game][publishers][0]' ] = result.PublisherName;
				}

				$( 'workingMessage' ).innerHTML = 'Working... Adding application to store...'

				// We are already in an Ajax request, do another one recursively
				new Ajax.Request( g_szBaseURL + "/admin/game/createajax",
					{
						parameters:		createInStoreParameters,
						method:			'post',
						requestHeaders:	{ 'Accept': 'application/json' },
						evalJSON:		'force',
						onSuccess: function ( transport ) { AddApplicationToStoreCallback( parameters, transport ) },
						onFailure: function ( transport ) { alert( 'Ajax call failed for AddApplicationToStoreCallback().' ); RestoreActionButtons( parameters ); },
						onException: function ( request, e ) { alert( 'Exception during Ajax call for AddApplicationToStoreCallback().' ); RestoreActionButtons( parameters ); throw e; }
				} );
			}
		}
		else
		{
			// We failed adding the application, restore the buttons so we can commit again
			 RestoreActionButtons( parameters );
		}
	}
	else
	{
		// Parsing failed, let's display something to the user.
		$( 'resultErrors' ).innerHTML += 'AddApplicationCallback(): Could not parse result as JSON:' + transport.responseText;
		RestoreActionButtons( parameters );
	}
}

function GenerateAppIDsCallback( parameters, transport )
{
	var results = transport.responseJSON;
	var messages;
	var warnings;
	var errors;

	for(i=0; i<results.length; i++)
	{
		if ( results[i] )
		{
			// Successful JSON parsing
			$( 'resultErrors' ).innerHTML += BuildText( results[i].Errors );
			$( 'resultWarnings' ).innerHTML += BuildText( results[i].Warnings );
			$( 'resultMessages' ).innerHTML += BuildText( results[i].Messages );

			var $resultMessVar = $( 'resultMessages' );

			if ( results[i].bMessagesOnly )
				continue;

			if ( results[i].Added == true )
			{
				g_ApplicationAdded = true;			// So if there is an exception at some point, we will restore the correct buttons
				var appId = results[i].AppId;			// We get the AppId from the result as the AppId has probably been auto-generated...


				// Now that we are done creating the application in Steamworks, let's see if we have to do it in the store
				// We don't want to that in parallel in case of the Steamworks application creation returned an error
				if ( parameters[ 'createInStore' ] == 'true' )
				{
					var createInStoreParameters =	{
														'app[appid]':						appId,
														'app[name]':						parameters[ 'appName' ],
														'app[type]':						parameters[ 'appType' ],
														'app[publisherid]':					partnerId,						// This is used for the admin overview drop down
														'app_generate_id':					false,
														'parentId':							$( 'parentId_target' ).value
													};

					// Look for all the app[administrative] tags. They will be added as is to the parameters
					// During the application creation in the store, we will update the corresponding fields.
					createInStoreParameters = MergeArrays( createInStoreParameters, parameters, 'app[administrative]' );

					if ( partnerId != undefined )
					{
						// By default we set the publisher name from the back-end. This is probably not the official name but better than no name.
						// This will also help the search all app.
						createInStoreParameters[ 'app[game][publishers][0]' ] = result.PublisherName;
					}

					$( 'workingMessage' ).innerHTML = 'Working... Adding application to store...'

					// We are already in an Ajax request, do another one recursively
					new Ajax.Request( g_szBaseURL + "/admin/game/createajax",
						{
							parameters:		createInStoreParameters,
							method:			'post',
							requestHeaders:	{ 'Accept': 'application/json' },
							evalJSON:		'force',
							onSuccess: function ( transport ) { AddApplicationToStoreCallback( parameters, transport ) },
							onFailure: function ( transport ) { alert( 'Ajax call failed for AddApplicationToStoreCallback().' ); RestoreActionButtons( parameters ); },
							onException: function ( request, e ) { alert( 'Exception during Ajax call for AddApplicationToStoreCallback().' ); RestoreActionButtons( parameters ); throw e; }
					} );
				}
			}
			else
			{
				// We failed adding the application, restore the buttons so we can commit again
				 RestoreActionButtons( parameters );
			}
		}
		else
		{
			// Parsing failed, let's display something to the user.
			$( 'resultErrors' ).innerHTML += 'AddApplicationCallback(): Could not parse result as JSON:' + transport.responseText;
			RestoreActionButtons( parameters );
		}
	}
}

function RestoreActionButtons( parameters )
{
	if ( g_ApplicationAdded )
	{
		FinalizeUiAfterAddedApplication( parameters );
	}
	else
	{
		$( 'createNowButton' ).style.display = 'inline';
		$( 'cancelButton' ).style.display = 'inline';
		$( 'workingMessage' ).innerHTML = '';

		if ( g_CurrentContacts.length == 0 )
		{
			AddOneContact();
			GenerateUiFromContacts();
		}
	}
}

function FinalizeUiAfterAddedApplication( parameters )
{
	$( 'cancelButton' ).style.display = 'inline';
	$( 'cancelButton' ).innerHTML = 'Close';
	$( 'cancelButton' ).style.position = 'static';		// Remove the relative so 'Close' falls after the links.
	$( 'workingMessage' ).innerHTML = '';

	// Because the application has been added, we need to disable most of the inputs in the UI
	// So the user does not want to tinker with the values and think that it is going to change anything.
	var formElement = document.getElementById( 'createNew' );
	DisableElements( formElement, 'input' );
	DisableElements( formElement, 'select' );
	DisableElements( formElement, 'textarea' );

	// We also have to remove the various links
	$( g_releaseDatePicker.s_iconId ).style.display = "none";				// Date picker
	$( 'createNewPartner' ).style.display = "none";
	$( 'addAnotherContact' ).style.display = "none";
	$( 'importContactFromPartner' ).style.display = "none";

	// Hide the remove tags for the contacts
	for ( var index = 0 ; index < g_CurrentContacts.length ; ++index )
	{
		$( GetElementId( index, 'remove' ) ).style.display = "none";
	}

	// Finally, we have to disable the checkboxes for the product features
	var allFeatures = $( 'listOfProductFeatures' ).value;
	allFeatures = allFeatures.split( ',' );
	for ( var index = 0 ; index < allFeatures.length ; ++index )
	{
		$( 'checkbox_feature_' + allFeatures[ index ] ).href = "javascript:;";		// Do nothing href
	}
}

function AddApplicationToStoreCallback( parameters, transport )
{
	var result = transport.responseJSON;
	var messages;
	var warnings;
	var errors;
	if ( result )
	{
		// Successful JSON parsing
		$( 'resultErrors' ).innerHTML += BuildText( result.Errors, '<br/>' );			// Add some CRLF prefix to separate with the Steamworks AddApplication results.
		$( 'resultWarnings' ).innerHTML += BuildText( result.Warnings, '<br/>' );
		$( 'resultMessages' ).innerHTML += BuildText( result.Messages, '<br/>' );
		$( 'workingMessage' ).innerHTML = '';

		if ( result.Added == true )
		{
			$( 'storeApplicationLink' ).href = g_szBaseURL + '/admin/game/edit/' + result.ItemId;
			$( 'inStoreApplicationAdded' ).style.display = 'inline';
		}
	}
	else
	{
		// Parsing failed, let's display something to the user.
		$( 'resultErrors' ).innerHTML += 'AddApplicationToStoreCallback(): Could not parse result as JSON:' + transport.responseText;
		RestoreActionButtons( parameters );
	}
}

function AddApplication( )
{
	// let's clear the output as we are going to fill it as needed
	$( 'resultErrors' ).innerHTML = '';
	$( 'resultWarnings' ).innerHTML = '';
	$( 'resultMessages' ).innerHTML = '';

	var appType = $( 'appType' ).value;
	if ( ContainsParent( appType ) )
	{
		if ( !( $( 'parentId_target' ).value ) )
		{
			// We need a parent and it has not been passed...
			// Should we block this? Yes, but we allow a backdoor with the text '<none>'
			if ( $( 'parentId_compl' ).value.toLowerCase() != '<none>' )
			{
				$( 'resultErrors' ).innerHTML = 'No parent AppId provided. Will not create a DLC or Demo.';
				$( 'resultErrors' ).style.display = '';
				return;
			}
		}
	}

	// As creating the app, and all the sub-components take a while (10 seconds on public server),
	// we are going to disable "Create New" and "Cancel" right away so the user knows that the process is working
	$( 'createNowButton' ).style.display = 'none';
	$( 'cancelButton' ).style.display = 'none';
	$( 'workingMessage' ).innerHTML = 'Working... Adding application...'

	// We are going to ajax the AddApplication() call.
	// The reason is two folds, if there is an error, the user can fix the issue without losing any information in the page.
	// It also allows us to have a much nicer UI behavior when reporting errors.

	// Before we scan the input, we have to clean the contacts first (as some empty fields may be present, like for the last one)
	RemoveEmptyContacts( );

	// To make it work, first we have to parse all the inputs of the form so we can populate accordingly the Ajax call
	// Then once we do the call, we have to parse the result and display this to the end user.
	var formElement = document.getElementById( 'createNew' );
	var parameters = {};
	ScanElements( formElement, 'input', parameters );
	ScanElements( formElement, 'select', parameters );
	ScanElements( formElement, 'textarea', parameters );

	RemoveUnneededParameters( appType, parameters );

	// In the PHP and WG, the partner is actually called publisher. Make the translation here for the expected parameters.
	if ( parameters[ g_partnerId ] != undefined )
	{
		parameters[ 'pubId' ] = parameters[ g_partnerId ];
	}

	new Ajax.Request( g_szBaseURL + '/admin/addapplicationajax',
			{
				parameters: parameters,
				method: 'post',
				requestHeaders: { 'Accept': 'application/json' },
				evalJSON: 'force',
				onSuccess: function ( transport ) { AddApplicationCallback( parameters, transport ) },
				onFailure: function ( transport ) { alert( 'Ajax call failed for Exception during Ajax call for AddApplicationCallback().' ); RestoreActionButtons( parameters ); },
				onException: function ( request, e ) { alert( 'Exception during Ajax call for AddApplicationCallback().' ); RestoreActionButtons( parameters ); throw e; }
			} );
}


function GenerateAppIDScript( )
{

	// To make it work, first we have to parse all the inputs of the form so we can populate accordingly the Ajax call
	// Then once we do the call, we have to parse the result and display this to the end user.
	var formElement = document.getElementById( 'createNew' );
	var parameters = {};
	ScanElements( formElement, 'input', parameters );
	ScanElements( formElement, 'select', parameters );
	ScanElements( formElement, 'textarea', parameters );

	new Ajax.Request( g_szBaseURL + '/admin/generateappidscript',
			{
				parameters: parameters,
				method: 'post',
				requestHeaders: { 'Accept': 'application/json' },
				evalJSON: 'force',
				onSuccess: function ( transport ) { GenerateAppIDsCallback( parameters, transport ) },
				onFailure: function ( transport ) { alert( 'Ajax call failed for Exception during Ajax call for GenerateAppIDsCallback().' );  },
				onException: function ( request, e ) { alert( 'Exception during Ajax call for GenerateAppIDsCallback().' );  throw e; }
			} );
}

function EscapeHTML( text )
{
	return text.replace( /&/g, "&amp;" )
				.replace( /</g, "&lt;" )
				.replace( />/g, "&gt;" )
				.replace( /"/g, "&quot;" )
				.replace( /'/g, "&#039;" );
}

function BuildText( container, prefixText )
{
	var text = '';
	if ( container != null )
	{
		for ( var i = 0 ; i < container.length ; ++i )
		{
			text += EscapeHTML( container[ i ] ) + "<br/>";
		}
	}

	if ( ( text != '' ) && prefixText )
	{
		text = prefixText + text;
	}
	return text;
}

function InitializeCreateNewPage()
{
	OnAppTypeChanged();
}

function ContainsExtendedFeatures( appType )
{
	switch ( appType.toLowerCase() )
	{
		case 'game':
		case 'application':
			return true;
		default:
			return false;
	}
}

function ContainsPartner( appType )
{
	switch ( appType.toLowerCase() )
	{
		case 'game':
		case 'application':
		case 'mod':
		case 'tool':
			return true;
		default:
			return false;
	}
}

function ContainsParent( appType )
{
	switch ( appType.toLowerCase() )
	{
		//case 'demo':
		case 'dlc':
			return true;
		case 'demo':
        	return true;
		default:
			return false;
	}
}

function ContainsFeatures( appType )
{
	switch ( appType.toLowerCase() )
	{
		case 'guide':
			return false;
		default:
			return true;
	}
}

function OnAppTypeChanged()
{
	var appType = $( 'appType' ).value;
	// Update corresponding label
	$( 'appNameLabel').innerHTML = appType + " name:";
	// Some product features are for games / applications only

	$( 'featuresBlock' ).style.display = ContainsFeatures( appType ) ? 'inline' : 'none';
	$( 'extendedFeaturesBlock' ).style.display = ContainsExtendedFeatures( appType ) ? 'inline' : 'none';
	$( 'partnerBlock' ).style.display = ContainsPartner( appType ) ? 'inline' : 'none';
	$( 'parentBlock' ).style.display = ContainsParent( appType ) ? 'inline' : 'none';
}

function RemoveUneededFeatureFromList( featureNamesToRemove, parameters )
{
	var splitString = featureNamesToRemove.split( ',' );
	for( var i = 0; i < splitString.length; i++ )
	{
		var featureName = 'feature_' + splitString[ i ];
		if ( parameters[ featureName ] )
		{
			parameters[ featureName ] = undefined;		// That was checked, let's undefined it before we post it
		}
	}
}

function RemoveUnneededParameters( appType, parameters )
{
	if ( ContainsExtendedFeatures( appType ) == false )
	{
		// In case some checkboxes were activated before the type got changed to something else, we have to remove their state first
		// otherwise the corresponding checklist would be activated even if it did not make any sense.
		// For example, Game has ceg and in_the_box checkable, however it does not make sense for Demo, Dlc and Mod.
		var gameOnlyFeatures = $( 'listOfGameOnlyProductFeatures' ).value;
		RemoveUneededFeatureFromList( gameOnlyFeatures, parameters );
	}

	// Similarly, if all features have to be removed
	if ( ContainsFeatures( appType ) == false )
	{
		var allFeatures = $( 'listOfProductFeatures' ).value;
		RemoveUneededFeatureFromList( allFeatures, parameters );
	}

	if ( ContainsPartner( appType) == false )
	{
		// We don't have a partner, let's make sure that we don't pass any related parameters
		parameters[ g_partnerId ] = undefined;

		for ( var key in parameters )
		{
			if ( key.StartsWith( "app[administrative][partner_contacts]" ) )
			{
				parameters[ key ] = undefined;
			}
		}
	}

	if ( ContainsParent( appType ) == false )
	{
		parameters[ 'parentId' ] = undefined;
	}
}

// When importing contact, I suppose we should see if the last contact is empty or not.
// If it is empty we can replace the text, if it is not empty we should add a contact so we can import it.

function ImportContactsFromPartnerCallback( transport )
{
	var response = transport.responseJSON
	if ( !response )
	{
		return;
	}

	var select = $( 'importFromPartnerSelection' );
	while (select.length != 0 )
	{
		select.remove( 0 );
	}

	// The response should contain the list of contacts
	var firstOption = null;
	for ( var partnerContactAccountId in response )
	{
		// Anything that's a number in the JSON is considered an account ID. Anything else is thrown out.
		if ( isNaN( partnerContactAccountId ) )
		{
			continue;
		}

		var fullName = response[ partnerContactAccountId ][ 'realname' ];
		var email = response[ partnerContactAccountId ][ 'email' ];

		if ( fullName == '' )
		{
			fullName = response[ partnerContactAccountId ][ 'steamname' ] + " (Steam name)";
		}

		var newOption = document.createElement( 'option' );
		newOption.value = partnerContactAccountId;
		newOption.innerHTML = fullName;

		select.appendChild( newOption );
	}

	$( 'importFromPartnerSelection' ).style.display = 'inline';
	$( 'importFromPartnerSelection' ).focus();
}

function OnImportContactFromPartner()
{
	var partnerId = $( g_partnerId ).value;
	if ( partnerId == '' )
	{
		alert( 'Please select a partner so we can import its contacts.');
		return;
	}

	RetrieveContactsInfoFromUi();
	var addOneContact = false;
	if ( g_CurrentContacts.length == 0 )
	{
		addOneContact = true;
	}
	else
	{
		var index = g_CurrentContacts.length - 1;
		var oneContact = g_CurrentContacts[ index ];
		if ( ( oneContact.FullName != '' ) || ( oneContact.Email != '' ) || ( oneContact.Notes != '' ) )
		{
			// There is already some information, we are not going to erase current info
			addOneContact = true;
		}
	}

	if ( addOneContact )
	{
		AddOneContact();
		GenerateUiFromContacts();		// We update the UI so the state is working as expected
	}

	new Ajax.Request( g_szBaseURL + '/admin/game/fetchpartnerusers/' + partnerId,
			{
				method:'get',
				requestHeaders: { 'Accept': 'application/json' },
				evalJSON: 'force',
				onSuccess: function(transport){	ImportContactsFromPartnerCallback( transport );	},
				onFailure: function ( transport ) { alert( 'Ajax call failed in OnImportContactFromPartner().' ); },
				onException: function ( request, e ) { alert( 'Exception during call to OnImportContactFromPartner().' + e ); throw e; }
			} );
}

function OnLoseFocusImportContactFromPartner()
{
	OnChangeImportContactFromPartner();		// Just make sure we imported the data if there was no change detected yet
											// Like if there was only one item in the combo box.
	$( 'importFromPartnerSelection' ).style.display = 'none';
}

function OnChangeImportContactFromPartnerCallback( transport )
{
	var response = transport.responseJSON
	if ( !response )
	{
		return;
	}
	if ( response.success == false )
	{
		return;
	}

	var index = g_CurrentContacts.length - 1;
	// In some cases, the index may be incorrect, for example:
	//	- Enter a previous text
	//	- Import a new contact
	//	- The UI will create a new contact to not erase the previous contact
	//	- The combo box is displayed, but as a user I am going to click on "remove" on the empty line
	// 		as I changed my mind, or there is not the information I'm looking for.
	//	- The last line is going to be removed (as I clicked "remove"), then the combo will lose the focus.
	//	- This in return will replace my previous text with the imported info.

	if ( index < 0 )
	{
		// Bad state, nothing to do
		return;
	}
	var oneContact = g_CurrentContacts[ index ];
	// Check if we have a previous content already, if that's the case, we consider it is the case above
	// And we are not importing anything...
	if ( ( oneContact.FullName != '' ) || ( oneContact.Email != '' ) || ( oneContact.Notes != '' ) )
	{
		return;
	}

	// We directly update the UI here as we created a contact before importing
	var fullNameId = GetElementId( index, 'fullName' );
	var emailId = GetElementId( index, 'email' );
	var notesId = GetElementId( index, 'notes' );
	// TODO: Revisit fetchpartneruserinfo at some point so it has a more coherent API
	var realName = response.partneruserrealname;
	if ( realName == '' )
	{
		realName = response.accountname + " (Steam name)";
	}
	g_CurrentContacts[ index ].FullName = realName;
	g_CurrentContacts[ index ].Email = response.partneruseremail;
	g_CurrentContacts[ index ].AccountId = response.accountid;
	g_CurrentContacts[ index ].Notes = response.partnerusernotes;

	// Generate the full UI
	GenerateUiFromContacts();
}

function OnChangeImportContactFromPartner()
{
	var partnerId = $( g_partnerId ).value;
	if ( partnerId == '' )
	{
		alert( 'Please select a partner so we can import its contacts.');
		return;
	}

	var contactAccountId = $( 'importFromPartnerSelection' ).value;
	var accountIdAsInteger = parseInt( contactAccountId );		// Due to wackiness in Javascript engine, have to use parseInt first.
	if ( isNaN( accountIdAsInteger ) )
	{
		// The combo did not have correct value, probably empty, nothing to import
		return;
	}
	new Ajax.Request( g_szBaseURL + '/admin/game/fetchpartneruserinfo/' + partnerId + '/' + accountIdAsInteger,
			{
				method:'get',
				requestHeaders: { 'Accept': 'application/json' },
				evalJSON: 'force',
				onSuccess: function(transport){	OnChangeImportContactFromPartnerCallback( transport );	},
				onFailure: function ( transport ) { alert( 'Ajax call failed in OnChangeImportContactFromPartner().' ); },
				onException: function ( request, e ) { alert( 'Exception during call to OnChangeImportContactFromPartner().' + e ); throw e; }
			} );

}

function GetElementId( index, subField )
{
	return 'app[administrative][partner_contacts][contact_' + index + '][' + subField + ']';
}

function GetElementCountId( )
{
	return 'app[administrative][partner_contacts][count]';
}

// These functions are used to match the UI with the internal Javascript information
// Because the UI identifiers have to be unique and contiguous, it is better if we regenerate the UI from the internal representation.
// And we refresh the internal representation from the UI before doing any modification.
function RetrieveContactsInfoFromUi()
{
	for ( var index = 0 ; index < g_CurrentContacts.length ; ++index )
	{
		var oneContact = g_CurrentContacts[ index ];

		if ( oneContact.AccountId == 0 )
		{
			// Manual entry, let's update internal state
			var fullNameId = GetElementId( index, 'fullName' );
			oneContact.FullName =  $( fullNameId ).value;
			var emailId = GetElementId( index, 'email' );
			oneContact.Email =  $( emailId ).value;
			var notesId = GetElementId( index, 'notes' );
			oneContact.Notes = $( notesId ).value;
		}
		var roleId = GetElementId( index, 'role' );
		oneContact.Role = $( roleId ).value;
	}
}

function ShowInputAsReadOnly( element )
{
	element.readOnly = true;
	element.style.fontStyle = 'italic';
	element.style.color = '#A0A0A0';
}

function CreateInput( index, elementKey, value, width, readOnly )
{
	var element = document.createElement( 'input' );
	element.id = element.name = GetElementId( index, elementKey );
	element.type = 'text';
	element.value = value;
	element.style.width = width;
	if ( readOnly )
	{
		ShowInputAsReadOnly( element );
	}
	return element;
}

var GenerateUiMode =
	{
		KeepAll: 						0,
		RemoveEmpty:					1,
		RemoveEmptyKeepLastEmptyOnly:	2
	};

function GenerateUiFromContacts( mode )
{
	if ( mode == undefined )
	{
		mode = GenerateUiMode.KeepAll;
	}
	var partnerContactContainer = $( 'partnerContactContainer' );
	// Remove all children from the container
	while ( partnerContactContainer.hasChildNodes() )
	{
		partnerContactContainer.removeChild( partnerContactContainer.lastChild );
	}

	for ( var index = 0 ; index < g_CurrentContacts.length ; ++index )
	{
		var oneContact = g_CurrentContacts[ index ];

		if ( ( oneContact.FullName == '' ) && ( oneContact.Email == '' ) )
		{
			switch ( mode )
			{
				case GenerateUiMode.KeepAll:
					break;
				case GenerateUiMode.RemoveEmpty:
					continue;
				case GenerateUiMode.RemoveEmptyKeepLastEmptyOnly:
					if ( index != g_CurrentContacts.length - 1 )
					{
						continue;		// Skip all empty except the last one
					}
			}
		}

		var readOnly = ( oneContact.AccountId != 0 );

		{
			var element = CreateInput(index, 'fullName', oneContact.FullName, '150px', readOnly);
			partnerContactContainer.appendChild(element);
		}

		{
			var element = CreateInput( index, 'email', oneContact.Email, '200px', readOnly );
			element.style.marginLeft = '4px';
			partnerContactContainer.appendChild( element );
		}

		{
			var element = CreateInput( index, 'notes', oneContact.Notes, '200px', readOnly );
			element.style.marginLeft = '4px';
			if ( !g_GenerateUiFromContactsParameters.DisplayNotes )
			{
				element.style.display = 'none';
			}
			partnerContactContainer.appendChild( element );
		}

		{
			var selectElement = document.createElement( 'select' );
			selectElement.id = selectElement.name = GetElementId( index, 'role' );
			selectElement.style.width = '80px';
			selectElement.style.marginLeft = '4px';

			var listOfRoles = [ 'Tech', 'Marketing', 'Business', 'Design', 'Various' ];
			for ( var optionIndex = 0 ; optionIndex < listOfRoles.length ; ++optionIndex )
			{
				var newOption = document.createElement( 'option' );
				var role = listOfRoles[ optionIndex ];
				newOption.value = newOption.innerHTML = role;

				if ( oneContact.Role == role )
				{
					newOption.selected = true;
				}

				selectElement.appendChild( newOption );
			}
			selectElement.value = oneContact.Role;
			partnerContactContainer.appendChild( selectElement );
		}

		{
			// Inputs must NOT be style.display == 'none' or they won't be save in the POST or GET
			// They have to have explicitly the type 'hidden'
			var element = CreateInput( index, 'accountId', oneContact.AccountId, '64px', readOnly );
			element.type = 'hidden';
			partnerContactContainer.appendChild( element );
		}

		{
			var element = document.createElement( 'span' );
			element.id = GetElementId( index, 'remove' );		// We set an id so we can hide the tag later
			element.innerHTML = 'remove';
			// Create a closure otherwise all functions would have the last value of i
			element.onclick = ( function( i ) { return function () { OnDeleteContact( i ); } } ( index ) );
			// At some point, we will have to create an easy way to get the style info (instead of copying the style in Javascript)
			element.style.textDecoration = 'underline';
			element.style.cursor = 'pointer';
			element.style.color = '#b6c5ca';
			element.style.marginLeft = '16px';
			element.style.fontSize = '9px';
			partnerContactContainer.appendChild( element );
		}

		{
			var element = document.createElement( 'br' );
			element.style.clear = 'both';
			element.style.marginBottom = '8px';
			partnerContactContainer.appendChild( element );
		}
	}

	// And to finalize this, let's update the count of contacts in the UI
	{
		var element = document.createElement( 'input' );
		element.id = element.name = GetElementCountId();
		element.value = g_CurrentContacts.length;
		element.style.display = 'none';
		partnerContactContainer.appendChild( element );
	}
}

function OnDeleteContact( index )
{
	RetrieveContactsInfoFromUi();
	g_CurrentContacts.splice( index, 1 );
	if ( g_CurrentContacts.length == 0 )
	{
		// If we removed the last one, add a default one again.
		AddOneContact();
	}
	GenerateUiFromContacts();
}

function OnInsertContact( )
{
	RetrieveContactsInfoFromUi();
	AddOneContact();
	GenerateUiFromContacts();
}

function AddOneContact()
{
	// Add a new contact at the end with default values
	g_CurrentContacts[ g_CurrentContacts.length ] = { FullName: '', Email: '', AccountId: 0, Notes: '', Role: 'Tech' };
}

function RemoveEmptyContacts()
{
	RetrieveContactsInfoFromUi();

	// We are going to remove the empty contacts that are not necessary anymore
	var length = g_CurrentContacts.length;
	for ( var index = length - 1 ; index >= 0 ; --index )
	{
		var oneContact = g_CurrentContacts[ index ];
		if ( oneContact.FullName != '' )
		{
			continue;
		}
		if ( oneContact.Email != '' )
		{
			continue;
		}
		if ( oneContact.Notes != '' )
		{
			continue;
		}
		// This contact is not necessary, let's remove it
		g_CurrentContacts.splice( index, 1 );
	}

	GenerateUiFromContacts( GenerateUiMode.RemoveEmpty );
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
	// First, we prioritize the app with depots
	// Deactivated for the moment...
/*
	if ( thisApp1.Depots )
	{
		if ( thisApp2.Depots )
		{
			// Both have depots, we are going to compare with AppId.
		}
		else
		{
			return -1;
		}
	}
	else if ( thisApp2.Depots )
	{
		return +1;
	}
	else
	{
		// None have depots, we are going to compare with AppIds.
	}
*/
	// First let's compare the types, sorted by lowest first
	if (thisApp1.Type != thisApp2.Type )
	{
		return thisApp1.Type - thisApp2.Type;
	}

	// Same type
	return thisApp2.AppId - thisApp1.AppId;		// Display the highest AppId first
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

function GetAppNameText( thisApp )
{
	// First, if Store, CDDB and Steamworks have the same name, then there is no issue, we return the expected text
	// We also have to take in account if the corresponding info exists
	var cddbName = trim( thisApp.CddbName );
	var storeName = trim( thisApp.StoreName );
	var steamworksName = trim( thisApp.SteamworksName );
	var registeredName = trim( thisApp.RegisteredName );

	var referenceName = '';
	if ( IsNullOrEmptyString( cddbName ) == false )
	{
		referenceName = cddbName;
	}
	else if ( IsNullOrEmptyString( storeName ) == false )
	{
		referenceName = storeName;
	}
	else if ( IsNullOrEmptyString( steamworksName ) == false )
	{
		referenceName = steamworksName;
	}
	else
	{
		if ( IsNullOrEmptyString( registeredName )  )
		{
			return '???';
		}
		else
		{
			return registeredName;
		}
	}

	// Now that we have reference name, let's check that those defined match...
	var allMatch = true;
	var countOfInputs = 0;
	if ( thisApp.InCddb && ( cddbName != referenceName ) )
	{
		allMatch = false;
		++countOfInputs;
	}
	if ( thisApp.InStore && ( storeName != referenceName ) )
	{
		allMatch = false;
		++countOfInputs;
	}
	if ( thisApp.IsSteamworks && ( steamworksName != referenceName ) )
	{
		allMatch = false;
		++countOfInputs;
	}
	// At this level, we do not take in account the registeredName yet
	// We accept minor variations between registered and public info.

	if ( allMatch )
	{
		if ( ( countOfInputs > 1 ) || IsNullOrEmptyString( registeredName ) || ( registeredName == referenceName ) )
		{
			return referenceName;		// All in sync, or more than 2 public sources in sync
										// If that is the case, we don't mind variations in registration
		}
		// However if we only had one match, there is something registered that is not the same,
		// we actually do the full text display. This is to make more explicit issues like "ValveTestApp...".
	}

	var textToDisplay = '';
	if ( thisApp.IsRegistered && ( registeredName != referenceName ) )
	{
		textToDisplay += 'Registered: ' + registeredName;
	}
	if ( thisApp.InCddb )
	{
		textToDisplay += ( textToDisplay != '' ) ? '<br/>' : '';
		textToDisplay += 'CDDB: ' + cddbName;
	}
	if ( thisApp.InStore )
	{
		textToDisplay += ( textToDisplay != '' ) ? '<br/>' : '';
		textToDisplay += 'Store: ' + storeName;
	}
	if ( thisApp.InSteamworks )
	{
		textToDisplay += ( textToDisplay != '' ) ? '<br/>' : '';
		textToDisplay += 'Steamworks: ' + steamworksName;
	}

	return textToDisplay;
}

function GetPartnerNameText( thisApp )
{
	// First, if Store, CDDB and Steamworks have the same name, then there is no issue, we return the expected text
	// We also have to take in account if the corresponding info exists
	var CddbDeveloperName = trim( thisApp.CddbDeveloperName );
	var storeDeveloperName = trim( thisApp.StoreDeveloperName );
	var storePublisherName = trim( thisApp.StorePublisherName );

	var referenceName = '';
	var textToDisplay = '';
	if ( IsNullOrEmptyString( CddbDeveloperName ) == false )
	{
		referenceName = CddbDeveloperName;
	}
	else if ( IsNullOrEmptyString( storeDeveloperName ) == false )
	{
		referenceName = storeDeveloperName;
	}
	else
	{
		if ( IsNullOrEmptyString( storePublisherName ) )
		{
			return '???';
		}
		else
		{
			textToDisplay = 'Developer: ???';
			textToDisplay += '<br/>Publisher in store: ' + storePublisherName;
			return textToDisplay;
		}
	}

	// Now that we have reference name, let's check that those defined match...
	var allMatch = true;
	if ( thisApp.InCddb && ( CddbDeveloperName != referenceName ) )
	{
		allMatch = false;
	}
	if ( thisApp.InStore && ( storeDeveloperName != referenceName ) )
	{
		allMatch = false;
	}

	if ( allMatch )
	{
		if ( thisApp.InStore )
		{
			if ( storePublisherName == referenceName )
			{
				return referenceName;		// match, and the publisher is the developer, return the simple text
			}

			textToDisplay = 'Developer: ' + referenceName + '<br/>Publisher in store: ';
			textToDisplay += IsNullOrEmptyString( storePublisherName ) ? '???' : storePublisherName;
			return textToDisplay;
		}
		else
		{
			return referenceName;				// match, and nothing from the Store, return the simple name
		}
	}

	if ( thisApp.InCddb )
	{
		textToDisplay += ( textToDisplay != '' ) ? '<br/>' : '';
		textToDisplay += 'Developer in CDDB: ' + CddbDeveloperName;
	}
	if ( thisApp.InStore )
	{
		textToDisplay += ( textToDisplay != '' ) ? '<br/>' : '';
		textToDisplay += 'Developer in Store: ' + storeDeveloperName;
		if ( IsNullOrEmptyString( storePublisherName ) )
		{
			textToDisplay += '<br/>Publisher in store: ???';
		}
		else
		{
			textToDisplay += '<br/>Publisher in store: ' + storePublisherName;
		}
	}

	return textToDisplay;
}

function MapTypeToText( type )
{
	switch ( type )
	{
	case 0:	return 'Game/Application';
	case 1: return 'Demo';
	case 2: return 'DLC';
	case 3: return 'Mod';
	case 4: return 'Media';
	case 5: return 'Advertising';
	case 6: return 'Guide';
	case 7: return 'Hardware';
	default: return '???';
	}
}

function RetrieveType( thisApp )
{
	var cddbType = thisApp.CddbType;
	var storeType = thisApp.StoreType;

	var referenceType = 0;			// By default it is an App
	if ( cddbType != undefined )
	{
		referenceType = cddbType;
	}
	else if ( storeType != undefined )
	{
		referenceType = storeType;
	}
	else
	{
		if ( thisApp.IsRegistered )
		{
			thisApp.Type = 0;
			return MapTypeToText( 0 );			// By default, it is an app
		}
		else
		{
			thisApp.Type = -1;
			return MapTypeToText( -1 );			// Unknown type
		}
	}

	thisApp.Type = referenceType;

	// Now that we have reference name, let's check that those defined match...
	var allMatch = true;
	var countOfInputs = 0;
	if ( thisApp.InCddb && ( cddbType != referenceType ) )
	{
		allMatch = false;
		++countOfInputs;
	}
	if ( thisApp.InStore && ( storeType != referenceType ) )
	{
		allMatch = false;
		++countOfInputs;
	}

	// In this case, we do not take in account the registration yet.
	// We probably should at a later point, once we store the info in the db, and we cleaned the source from the wiki.

	if ( allMatch )
	{
		return MapTypeToText( referenceType );		// All in sync
	}

	var textToDisplay = '';
	if ( thisApp.InCddb )
	{
		textToDisplay += 'CDDB: ' + MapTypeToText( cddbType );
	}
	if ( thisApp.InStore )
	{
		textToDisplay += ( textToDisplay != '' ) ? '<br/>' : '';
		textToDisplay += 'Store: ' + MapTypeToText( storeType );
	}
	return textToDisplay;
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

	DisplayAllApps( response.result, $( 'results' ), 'Query result: ', false );
}

function DisplayAllApps( result, resultsElement, prefixText, hideDepot )
{
	var initialStyleDisplayForDepots = '';
	if ( ( Object.keys(result).length > 5 ) || hideDepot )
	{
		// More than 5 elements... Depots will be hidden
		initialStyleDisplayForDepots = 'none';
	}

	// Before we sort the objects, let's populate some info that could be used for sorting
	var arrayOfResults = new Array();
	var i = 0;
	for ( var appId in result )
	{
		if ( appId < 0 )
		{
			continue;			// Skip workaround for PHP JSON encoding issue
		}
		var thisApp = result[ appId ];
		thisApp.AppId = appId ? appId : -1;			// If there is no AppId, always at the end
		thisApp.AppIdText = appId ? appId : '???';
		thisApp.TypeText = RetrieveType( thisApp );	// Will also fill thisApp.Type

		arrayOfResults[ i++ ] = thisApp;
	}

	arrayOfResults.sort( CompareAppResults );

	// Before we add to the result, let's delete previous content.
	while ( resultsElement.hasChildNodes() )
	{
		resultsElement.removeChild( resultsElement.firstChild );
	}

	var numberOfResults = arrayOfResults.length;
	var resultText;
	if ( numberOfResults == 0 )
	{
		resultText = prefixText + 'No result found.';
	}
	else
	{
		resultText = prefixText + numberOfResults + ' result(s) found.';
	}

	$( 'resultsCount' ).update( resultText );

	// Note that we would probably want to sort by AppIds before displaying this
	for (var i = 0 ; i < numberOfResults ; ++i )
	{
		var thisApp = arrayOfResults[ i ];

		var found = thisApp.IsRegistered;
		found |= thisApp.InCddb;
		found |= thisApp.InSteamworks;
		found |= thisApp.InStore;
		if ( found == false )
		{
			continue;		// We have an AppId but no other information. Skip it...
		}

		// We found an application, let's update the UI

		var color;		// Color will match the definition in styles_admin.css (.app_Movie, etc...)
		switch ( thisApp.Type )
		{
			case 0:	color = '#ffffff'; break;		// App
			case 1: color = '#89c53f'; break;		// Demo
			case 2: color = '#a159a3'; break;		// DLC
			case 3: color = '#e1b21e'; break;		// Mod
			case 4:									// Media
			case 5:									// Advertising
			case 6:									// Guide
				color = '#6ba1bd';
				break;
			default:
				color = '#ff0000';				// If we don't recognize the type, let put a nice color :)
				break;
		}

		// First the application
		var applicationElement = document.createElement( 'div' );
		applicationElement.style.backgroundColor = '#333333';
		applicationElement.style.MarginTop = '4px';
		applicationElement.style.paddingTop = '4px';
		applicationElement.style.paddingBottom = '4px';
		resultsElement.appendChild( applicationElement );

		var appIdText = thisApp.AppIdText;
		if ( thisApp.RegisteredEndRange )
		{
			// Won't happen with AppIdText of '???' (i.e. in the case we set the AppId to -1).

			// There is 2 modes to display the range.
			// in most cases, the range is something like 10 - 19. There is no need to display the full range
			// Instead in some cases we are going to display a portion of the range

			var displayExtendedRange = false;
			if ( thisApp.RegisteredEndRange - thisApp.AppId >= 10 )
			{
				displayExtendedRange = true;
			}
			else
			{
				var appIdMod10 = thisApp.AppId % 10;
				var endRangeMod10 = thisApp.RegisteredEndRange % 10;
				if ( endRangeMod10 < appIdMod10 )
				{
					// The full range overlaps with the tens, display extended range
					displayExtendedRange = true;
				}
			}

			if ( displayExtendedRange )
			{
				appIdText += ' - ' + thisApp.RegisteredEndRange;
			}
			else
			{
				appIdText += ' - ' + ( thisApp.RegisteredEndRange % 10 );
			}
		}

		var depots = thisApp.Depots;
		var postfix = '';
		if (depots != undefined )
		{
			postfix = ' ...';
		}

		var appIdDiv = admin.CreateDiv( applicationElement, 'appIdHeader', 'appId', appIdText + postfix );
		appIdDiv.style.color = color;

		var appIdNameDiv = admin.CreateDiv( applicationElement, 'appNameHeader', 'appName', GetAppNameText( thisApp) );
		appIdNameDiv.style.color = color;

		var partnerNameDiv = admin.CreateDiv( applicationElement, 'partnerNameHeader', 'partnerName', GetPartnerNameText( thisApp ) );
		partnerNameDiv.style.color = color;

		var text = 'no';
		if ( thisApp.InStore )
		{
			var url = g_szBaseURL + '/admin/game/edit/' + thisApp.ItemId;
			text = '<a href="' + url + '" target="_blank">edit</a>';
		}
		admin.CreateDiv( applicationElement, 'inStoreHeader', 'inStore', text );
		text = 'no';
		if ( thisApp.InSteamworks )
		{
			var url = g_szBaseURL + '/apps/view/' + thisApp.AppId;
			text = '<a href="' + url + '" target="_blank">edit</a>';
		}
		admin.CreateDiv( applicationElement, 'inSteamworksHeader', 'inSteamworks', text );
		admin.CreateDiv( applicationElement, 'isReleasedHeader', 'isReleased', thisApp.VisibleInStore ? 'yes' : 'no' );

		var typeDiv = admin.CreateDiv( applicationElement, 'typeHeader', 'type', thisApp.TypeText );
		typeDiv.style.color = color;

		url = g_szBaseURL + "/admin/allpackages?appId=" + thisApp.AppId;
		var numPackages = thisApp.hasOwnProperty('Packages') ? Object.keys(thisApp.Packages).length : 0;
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

		/*
		url = "javascript:UpdateWatchlist( 'WatchlistOn" + appIdText+ "', 'WatchlistOff" + appIdText + "', " + thisApp.AppId + ", 'remove' )";
		inWatchlist = 'yes (' + '<a href="' + url + '">remove</a>' + ')';
		var watchlistOn = admin.CreateDiv( applicationElement, 'watchlistHeader', 'WatchlistOn' + appIdText, inWatchlist );
		url = "javascript:UpdateWatchlist( 'WatchlistOff" + appIdText+ "', 'WatchlistOn" + appIdText + "', " + thisApp.AppId + ", 'add' )";
		inWatchlist = 'no (' + '<a href="' + url + '">add</a>' + ')';
		var watchlistOff = admin.CreateDiv( applicationElement, 'watchlistHeader', 'WatchlistOff' + appIdText, inWatchlist );

		if ( g_watchlistAppIdsAsText.indexOf( ',' + thisApp.AppId + ',' ) != -1 )
		{
			watchlistOn.style.display = '';
			watchlistOff.style.display = 'none';
		}
		else
		{
			watchlistOn.style.display = 'none';
			watchlistOff.style.display = '';
		}
		*/

		CreateBr( applicationElement );

		// Then if there are some depots, display the depots...
		if ( depots != undefined )
		{
			// Add some scripting to display / hide the depots
			var depotId = "depots_" + appIdText;
			applicationElement.onclick = ( function( id ) { return function () { OnAppClick( id ); } } ( depotId ) );
			applicationElement.style.cursor = 'pointer';

			var depotsElement = document.createElement( 'div' );
			depotsElement.id = depotId;
			depotsElement.style.backgroundColor = '#2d2d2d';
			depotsElement.style.display = initialStyleDisplayForDepots;
			resultsElement.appendChild( depotsElement );			// Attach to 'results' so does not inherit the onclick
			for (var depotId in depots)
			{
				var depotName = depots[depotId];

				admin.CreateDiv( depotsElement, 'appIdHeader', 'appId', depotId );
				admin.CreateDiv( depotsElement, 'appNameHeader', 'appName', depotName );
				// Empty div, so we can display the type for the depot
				var div;
				div = admin.CreateDiv( depotsElement, 'partnerNameHeader', 'partnerName', '-' );
				div.style.visibility = 'hidden';
				div = admin.CreateDiv( depotsElement, 'inStoreHeader', 'inStore', '-' );
				div.style.visibility = 'hidden';
				div = admin.CreateDiv( depotsElement, 'inSteamworksHeader', 'inSteamworks', '-' );
				div.style.visibility = 'hidden';
				div = admin.CreateDiv( depotsElement, 'isReleasedHeader', 'isReleased', '-' );
				div.style.visibility = 'hidden';
				admin.CreateDiv( depotsElement, 'typeHeader', 'type', 'depot' );
				CreateBr( depotsElement );
			}
		}

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

// Code related to the watchlist

function UpdateWatchlistCallback( transport, elementIdBefore, elementIdAfter )
{
	var response = transport.responseJSON;
	if ( !response )
	{
		return;
	}
	if ( response.success == false )
	{
		alert( "Failed: " + response.result );
		return;
	}

	$( elementIdBefore ).style.display = 'none';
	$( elementIdAfter ).style.display = '';
}

function UpdateWatchlist( elementIdBefore, elementIdAfter, appId, mode )
{
	var parameters = { appId: appId, mode: mode };
	new Ajax.Request( g_szBaseURL + '/admin/updatewatchlistajax',
			{
				method:'get',
				requestHeaders: { 'Accept': 'application/json' },
				evalJSON: 'force',
				parameters: parameters,
				onSuccess: function(transport){	UpdateWatchlistCallback( transport, elementIdBefore, elementIdAfter );	},
				onFailure: function ( transport ) { alert( 'Ajax call failed in UpdateWatchlist().' ); },
				onException: function ( request, e ) { alert( 'Exception during call to UpdateWatchlist().' + e ); throw e; }
			} );
}

function GoToLink( linkId )
{
	var link = $( linkId ).value;
	if ( link != '' )
	{
		window.location = link;
	}
}

function OnForceAppIdClicked()
{
	$( 'allocateRange' ).disabled = $( 'forceAppId' ).checked;
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
	select.value = language;

	$( id + '_currentlanguage' ).value = language;
	var textArea = $( id + '_textarea' );
	var hiddenInput = $( id + language + '__hidden' );
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


/* store flyout/menu code */


function ShowWithFade( elem )
{
	var elem = $(elem);

	if ( !elem.visible() || elem.hiding )
	{
		elem.hiding = false;
		if ( elem.effect )
			elem.effect.cancel();

		if ( Prototype.Browser.IE )
		{
			elem.addClassName( 'suppress_shadow' );
			elem.effect = new Effect.Appear( elem, { duration: 0.2, afterFinish: function() { elem.removeClassName( 'suppress_shadow' ); } } );
		}
		else
		{
			elem.effect = new Effect.Appear( elem, { duration: 0.2 } );
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

		if ( Prototype.Browser.IE )
		{
			elem.addClassName( 'suppress_shadow' );
		}
		elem.effect = new Effect.Fade( elem, { duration: 0.2 } );
	}
}


// register some events to dismiss popup (ie, user clicking elsewhere on the window, escape)
//   cleans up event binds afterwards.  clicks to children of "elemIgnore" will not dismiss popup
function RegisterPopupDismissal( dismissFunc, elemIgnore, bNoGuard )
{
	var dismissHandler = {
		guard: bNoGuard ? 0 : 1,
		dismiss: function( event ) {
			if ( this.elemIgnore )
			{
				var elem = Event.element( event );
				if ( elem.up( '#' + elemIgnore.id ) )
					return;
			}
			// ignore the first click- assume it's the one starting the popup
			if ( this.guard-- > 0 )
				return;
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
	Event.observe( document, 'click', dismissHandler.boundHandler );
	Event.observe( document, 'keydown', dismissHandler.boundHandler );

	return dismissHandler;

}

function ShowMenu( elemLink, elemPopup, align, valign, bLinkHasBorder )
{
	var elemLink = $(elemLink);
	var elemPopup = $(elemPopup);

	AlignMenu( elemLink, elemPopup, align, valign, bLinkHasBorder );

	ShowWithFade( elemPopup );
	elemLink.addClassName('focus');
	RegisterPopupDismissal( function() { HideWithFade( elemPopup ); elemLink.removeClassName('focus'); }, elemPopup );
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
	if ( !reltarget || ( $(reltarget).up( '#' + elemLink.id ) || $(reltarget).up( '#' + elemPopup.id )  ) || elemLink.id == reltarget.id )
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
	var shadowpx = elemPopup.hasClassName( 'popup_block_new' ) ? 0 : 12;
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
		offsetTop = elemLink.getHeight() - shadowpx;
	}
	else if ( valign == 'top' )
	{
		//elemPopup.style.top = ( elemLink.positionedOffset()[1] - elemPopup.getHeight() + 12 ) + 'px';
		offsetTop = -elemPopup.getHeight() + shadowpx;
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



