
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
	//if necessary, set its global release date
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

function ShowAddAppIDsProgress( strTitle, strDescription )
{
	var deferred = new jQuery.Deferred();
	var fnOK = function() { deferred.resolve(); };

	var throbber_container = $J('<div/>', {'class': 'waiting_dialog_container'} );
	var throbber = $J('<div/>', {'class': 'waiting_dialog_throbber'} );
	throbber_container.append( throbber );
	throbber_container.append( strDescription );

	var Modal = _BuildDialog( strTitle, throbber_container, [], fnOK );
	deferred.always( function() { Modal.Dismiss(); } );
	Modal.Show();

	// attach the deferred's events to the modal
	deferred.promise( Modal );

	return Modal;
}

function GenerateAppIDs( dialog, idx, numAppIds, appName, bForSelfPublishing )
{
	if ( idx >= numAppIds )
	{
		dialog.Dismiss();
		return;
	}

	// add initial one to create the range
	$J.post( 'https://partner.steamgames.com/admin/generateappidscript',
		{
			'appIdCount' : 1,
			'appName' : appName,
			'forSelfPublishing' : bForSelfPublishing ? 1 : 0
		}
	).done(
		function( response ) {

			for ( var i = 0; i < response.length; ++i )
			{
				if ( response[i] )
				{
					// Successful JSON parsing
					$( 'resultErrors' ).innerHTML += BuildText( response[i].Errors );
					$( 'resultWarnings' ).innerHTML += BuildText( response[i].Warnings );
					$( 'resultMessages' ).innerHTML += BuildText( response[i].Messages );
				}
			}

			GenerateAppIDs( dialog, idx + 1, numAppIds, appName, bForSelfPublishing );
		}
	).fail( function( jqxhr ) {
		dialog.Dismiss();
		ShowAlertDialog( 'Failed to Add AppID', jqxhr.responseText );
	});
}

function GenerateAppIDScript( )
{
	var numAppIds = $J( "#appIdCount" ).val();
	var bForSelfPublishing = $J( "#forSelfPublishing" ).prop( "checked" );
	var appName = $J( "#appName" ).val();

	var dialog = ShowAddAppIDsProgress( 'Generating ' + numAppIds + ' App IDs', 'Please wait while the app ids are being generated...' );

	GenerateAppIDs( dialog, 0, numAppIds, appName, bForSelfPublishing );
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

	$( 'partnerBlock' ).style.display = ContainsPartner( appType ) ? 'inline' : 'none';
	$( 'parentBlock' ).style.display = ContainsParent( appType ) ? 'inline' : 'none';
}

function RemoveUnneededParameters( appType, parameters )
{
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
		allMatch =