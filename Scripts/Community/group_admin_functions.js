
var g_rgCurrentVals = new Array();
var g_rgCurrentDisabled = new Array();


function validateSearchManageMembers()
{
	tbox = document.getElementById( 'searchKey' );
	if ( tbox.value == '' )
	{
		return false;
	}
	return true;
}

function setupEditors()
{
	var tags = new Array('input','textarea','select');
	for(y=0;y<tags.length;y++)
	{
		var inputs = document.getElementsByTagName(tags[y]);
		for(x=0;x<inputs.length;x++)
		{
			var i = inputs[x];
			if( $(i).hasClassName( 'dynInput' ) && (i.type == 'text' || tags[y] == 'textarea' || tags[y] == 'select'))
			{
				if(tags[y] == 'select')
				{
					g_rgCurrentVals[i.id] = i.selectedIndex;
					if(i.id == 'country' || i.id == 'state' || i.id == 'city')
					{
						// country/state/city are interlinked, they use their own check/update handler
						addEvent(i, 'change', updateLocation, false);
						addEvent(i, 'keypress', updateLocation, false);
					}
					else
					{
						addEvent(i, 'change', checkField, false);
					}
				}
				else
				{
					g_rgCurrentVals[i.id] = i.value;
					addEvent(i, 'keyup', checkField, false);
				}
				g_rgCurrentDisabled[i.id] = false;
				addEvent(i, 'focus', checkAllowInput, false);
				// if there's an individual save button, attach save handler and hide button
				if(i.id.indexOf('weblink_') != -1)
				{
					thisWLink = i.id.substr(8,1);
					saveButton = document.getElementById('save_weblink_'+thisWLink);
				}
				else
				{
					saveButton = document.getElementById('save_'+i.id);
				}
				if(saveButton)
				{
					addEvent(saveButton, 'click', saveField, false);
					if(!g_bInClient || (tags[y] != 'input' && tags[y] != 'textarea'))
					{
						saveButton.style.visibility = 'hidden';
					}
				}
			}
		}
	}
	// have to setup handler for location save button seperately
}

var saveBatches = new Array();

function batchSave(batchList)
{
	var thisList = saveBatches[batchList];
	for(x=0;x<thisList.length;x++)
	{
		saveField(false, thisList[x]);
	}
}

function saveField(e, fId)
{
	var el;
	if(!fId)
	{
		el = window.event ? window.event.srcElement : e ? e.target : null;
	}
	if(el || fId)
	{
		var fieldId;
		if(!fId)
		{
			// id should be save_<associated field id>
			fieldId = el.id.substr(5);
		}
		else
		{
			fieldId = fId;
		}
		var dataField = document.getElementById(fieldId);
		if(g_rgCurrentDisabled[dataField.id])
		{
			return false;
		}
		if(dataField)
		{
			if(!fId)
			{
				el.value = 'Saving..';
				el.className = el.className.replace( /dynSave/, 'dynSaveDisabled' );
			}
			g_rgCurrentDisabled[dataField.id] = true;
			addClass( dataField.id, 'disabled' );
			dataField.blur();
			var newContent;
			if(dataField.tagName == 'SELECT')
			{
				newContent = dataField.options[dataField.selectedIndex].value;
			}
			else
			{
				newContent = dataField.value;
			}
			var postData = {
				"xml": 1,
				"type": "profile",
				"fieldId": fieldId,
				"newContent": newContent
			};
			createQuery2(g_strBaseEditURL, receiveFieldSave, postData);
		}
	}
}

function removeClass( elID, cName )
{
	$(elID).removeClassName( cName );
}

function addClass( elID, cName )
{
	$(elID).addClassName( cName );
}

function receiveFieldSave()
{
	if(req.readyState == 4)
	{
		if(req.status == 200)
		{
			var response = req.responseXML.documentElement;
			var fieldId = response.getElementsByTagName('fieldId')[0].firstChild.nodeValue;
			var results = response.getElementsByTagName('results')[0].firstChild.nodeValue;
			updateInProgress = false;
			var dataField = document.getElementById(fieldId);
			dataField.disabled = false;
			var saveButton = document.getElementById('save_'+fieldId);
			if(saveButton)
			{
				saveButton.value = 'Save';
				saveButton.className = saveButton.className.replace( /dynSaveDisabled/, 'dynSave' );
			}
			if(results == "OK")
			{
				var newContent = response.getElementsByTagName('newContent')[0].firstChild.nodeValue;
				if(dataField.tagName == 'SELECT')
				{
					for(x=0;x<dataField.options.length;x++)
					{
						if(dataField.options[x].value == newContent)
						{
							dataField.selectedIndex = x;
							g_rgCurrentVals[fieldId] = x;
							break;
						}
					}
				}
				else
				{
					dataField.value = newContent;
					g_rgCurrentVals[fieldId] = dataField.value;
				}
				removeClass( fieldId, 'changed' );
				removeClass( fieldId, 'disabled' );
				if(saveButton)
				{
					if(!g_bInClient || (dataField.tagName != 'INPUT' && dataField.tagName != 'TEXTAREA'))
					{
						saveButton.style.visibility = 'hidden';
					}
				}
			}
			else
			{
				alert( "There was an error saving your changes.\n\nError:\n"+results+"\n\nPlease address the error and try again." );
				removeClass( fieldId, 'disabled' );
			}
			updateInProgress = false;
			g_rgCurrentDisabled[fieldId] = false;
		}
	}
}


function locationInteract(toggle)
{
	if(toggle == 'disable')
	{
		g_rgCurrentDisabled['country'] = true;
		g_rgCurrentDisabled['state'] = true;
		g_rgCurrentDisabled['city'] = true;
		document.getElementById('country').blur();
		document.getElementById('state').blur();
		document.getElementById('city').blur();
	}
	else if(toggle == 'enable')
	{
		g_rgCurrentDisabled['country'] = false;
		g_rgCurrentDisabled['state'] = false;
		g_rgCurrentDisabled['city'] = false;
	}
}

function receiveLocations()
{
	if(req.readyState == 4)
	{
		if(req.status == 200)
		{
			var response = req.responseXML.documentElement;
			updateInProgress = false;
			locationInteract('enable');
			var results = response.getElementsByTagName('results')[0].firstChild.nodeValue;
			if(results == "OK")
			{
				var countryList = document.getElementById('country');
				var stateList = document.getElementById('state');
				var cityList = document.getElementById('city');

				var changeType = response.getElementsByTagName('changeType')[0].firstChild.nodeValue;
				if(changeType == 'country')
				{
					countryList.focus();
					// user changed country, receiving states OR cities
					// clear existing lists
					clearList(stateList);
					clearList(cityList);

					// repopulate
					var newStates = populateList(stateList, response.getElementsByTagName('state'));
					var newCities = populateList(cityList, response.getElementsByTagName('city'));
					stateList.selectedIndex = 0;
					cityList.selectedIndex = 0;

					// see if it was states or cities we got back, adjust visibility accordingly
					if(newStates > 1)
					{
						if(countryList.selectedIndex == g_rgCurrentVals['country'])
						{
							// we got states back, the original country is selected, re-select original state, go grab cities
							stateList.selectedIndex = g_rgCurrentVals['state'];
							removeClass( 'state', 'disabled' );
							removeClass( 'state', 'changed' );
							if(stateList.selectedIndex > 0)
							{
								locationInteract('disable');
								var postData = {
									"xml": 1,
									"type": "locationUpdate",
									"country": countryList.options[countryList.selectedIndex].value,
									"state": stateList.options[stateList.selectedIndex].value
								};
								createQuery2(g_strBaseEditURL, receiveLocations, postData);
							}
						}
						$('stateContainer').show();
						$('cityContainer').hide();
					}
					else
					{
						if(countryList.selectedIndex == g_rgCurrentVals['country'])
						{
							// we got cities back, the original country is selected, re-select original city
							cityList.selectedIndex = g_rgCurrentVals['city'];
							removeClass( 'city', 'disabled' );
							removeClass( 'city', 'changed' );
						}
						$('stateContainer').hide();
						$('cityContainer').show();
					}
				}
				else
				{
					stateList.focus();
					// user changed state, receiving just cities
					// clear existing list
					clearList(cityList);
					// repopulate
					newCities = populateList(cityList, response.getElementsByTagName('city'));
					cityList.selectedIndex = 0;
					if(countryList.selectedIndex == g_rgCurrentVals['country'] && stateList.selectedIndex == g_rgCurrentVals['state'])
					{
						// the country / state was changed back to the original, re-select original city
						cityList.selectedIndex = g_rgCurrentVals['city'];
						removeClass( 'city', 'disabled' );
						removeClass( 'city', 'changed' );
					}
					// make visible
					$('cityContainer').show();
				}
			}
		}
	}
}

function clearList(listEl)
{
	while(listEl.firstChild != undefined)
	{
		listEl.removeChild(listEl.firstChild);
	}
}

function populateList(listEl, listItems)
{
	for(x=0;x<listItems.length;x++)
	{
		var thisName = listItems[x].firstChild.nodeValue;
		var thisKey = listItems[x].getAttribute('key');
		var thisOpt = document.createElement('option');
		thisOpt.appendChild(document.createTextNode(thisName));
		thisOpt.setAttribute('value',thisKey);
		listEl.appendChild(thisOpt);
	}
	return listItems.length;
}

function checkAllowInput(e)
{
	var el = window.event ? window.event.srcElement : e ? e.target : null;
	if(el)
	{
		if(g_rgCurrentDisabled[el.id])
		{
			el.blur();
		}
	}
}

function updateLocation(e)
{
	var el = window.event ? window.event.srcElement : e ? e.target : null;
	if(el)
	{
		var eCountry = document.getElementById('country');
		var eCountryC = (eCountry.selectedIndex != g_rgCurrentVals['country']) ? true : false;
		var eState = document.getElementById('state');
		var eStateC = (eState.selectedIndex != g_rgCurrentVals['state']) ? true : false;
		var eCity = document.getElementById('city');
		var eCityC = (eCity.selectedIndex != g_rgCurrentVals['city']) ? true : false;

		var cVal = el.selectedIndex;
		if(el.id == 'country')
		{
			// change of country field fired this event
			if(eCountryC)
			{
				// country has changed from original, set city and state to nothin
				eState.selectedIndex = 0;
				eCity.selectedIndex = 0;
				// set styles to changed
				addClass( 'country', 'changed' );
				addClass( 'state', 'changed' );
				addClass( 'city', 'changed' );
			}
			else
			{
				// country just got changed back to its original
				removeClass( 'country', 'changed' );
			}
			if(eCountry.selectedIndex == 0)
			{
				// (Do not display) selected
				eState.selectedIndex = 0;
				eCity.selectedIndex = 0;
				$('stateContainer').hide();
				$('cityContainer').hide();
			}
			else
			{
				// go get our states or cities
				locationInteract('disable');
				var postData = {
					"xml": 1,
					"type": "locationUpdate",
					"country": eCountry.options[eCountry.selectedIndex].value
				};
				createQuery2(g_strBaseEditURL, receiveLocations, postData);
			}
		}
		else if(el.id == 'state')
		{
			// change of state field fired this event
			if(eCountryC || eStateC)
			{
				// country or state are changed, so city gets set to nothin
				eCity.selectedIndex = 0;
				addClass( 'state', 'changed' );
				addClass( 'city', 'changed' );
			}
			else
			{
				// state is returning to its original value (dependent on country also being its original value)
				removeClass( 'state', 'changed' );
			}
			if(eState.selectedIndex == 0)
			{
				$('cityContainer').hide();
			}
			else
			{
				// go get our cities
				locationInteract('disable');
				var postData = {
					"xml": 1,
					"type": "locationUpdate",
					"country": eCountry.options[eCountry.selectedIndex].value,
					"state": eState.options[eState.selectedIndex].value
				};
				createQuery2(g_strBaseEditURL, receiveLocations, postData);
			}
		}
		else // id must be 'city'
		{
			if(eCountryC || eStateC || eCityC)
			{
				addClass( 'city', 'changed' );
			}
			else
			{
				removeClass( 'city', 'changed' );
			}
		}
	}
}

function validateFields()
{
	var bOk = true;
	if ( document.getElementById( 'headline' ).value.length > 255 )
	{
		alert( "There is a maximum length of 255 characters for headlines. Please shorten it and try again." );
		bOk = false;
	}
	if ( document.getElementById( 'summary' ).value.length > 3000 )
	{
		alert( "There is a maximum length of 3000 characters for summaries. Please shorten it and try again." );
		bOk = false;
	}
	for( x=1; x <= 3; x++ )
	{
		if ( document.getElementById( 'weblink_' + x + '_title' ).value.length > 128 )
		{
			alert( "Website link titles can only be 128 characters in length" );
			bOk = false;
		}
		if ( document.getElementById( 'weblink_' + x + '_url' ).value.length > 128 )
		{
			alert( "Website URLs can only be 128 characters in length" );
			bOk = false;
		}
	}
	if ( bOk )
	{
		document.getElementById( 'editForm' ).submit();
	}
}

function submitChangeType()
{
	document.getElementById( 'editForm' ).submit();
}

function checkField(e)
{
	var el = window.event ? window.event.srcElement : e ? e.target : null;
	if(el)
	{
		var cVal;
		if(el.tagName == 'SELECT')
		{
			cVal = el.selectedIndex;
		}
		else
		{
			cVal = el.value;
		}
		var changed = false;
		if(cVal != g_rgCurrentVals[el.id])
		{
			changed = true;
		}
		var saveButton = document.getElementById('save_'+el.id);
		if(changed)
		{
			// content has changed, show individual save button if there is one
			addClass( el.id, 'changed' );
			if(saveButton)
			{
				saveButton.style.visibility = 'visible';
			}
		}
		else
		{
			// content has not changed, hide save button if there is one
			removeClass( el.id, 'changed' );
			if(!g_bInClient && saveButton)
			{
				saveButton.style.visibility = 'hidden';
			}
		}
	}
}


function checkGameFields()
{
	typeField = document.getElementById( 'type' );
	if ( typeField.value == 'GameEvent' )
	{
		document.getElementById( 'gameField' ).style.display = '';
		document.getElementById( 'serverIPField' ).style.display = '';
		document.getElementById( 'serverPasswordField' ).style.display = '';
	}
	else
	{
		document.getElementById( 'gameField' ).style.display = 'none';
		document.getElementById( 'serverIPField' ).style.display = 'none';
		document.getElementById( 'serverPasswordField' ).style.display = 'none';
	}
}

function showDatePick()
{
	someDateO = $( 'startDate' );
	datePickO = $( 'datePick' );
	datePickO.style.top = someDateO.offsetTop + someDateO.clientHeight + 'px';
	datePickO.style.left = someDateO.offsetLeft + 'px';
	datePickO.show();
}

function setDatePick( newDate )
{
	document.getElementById( 'startDate' ).value = newDate;
	document.getElementById( 'startDate' ).disabled = false;
	$('datePick').hide();
}

function saveEvent()
{
	if ( document.getElementById( 'name' ).value.length > 256 )
	{
		alert( "Event names can only be 256 characters in length" );
	}
	else if( document.getElementById( 'serverPassword' ).value.length > 256 )
	{
		alert( "Server passwords can only be 256 characters in length" );
	}
	else if( document.getElementById( 'notes' ).value.length > 1000 )
	{
		alert( "Event description can only be 1000 characters in length" );
	}
	else if ( document.getElementById( 'startDate' ).value == 'MM/DD/YY' && !document.getElementById( 'timeChoiceQuick' ).checked )
	{
		alert( "You must choose a date for the event to occur on." );
	}
	else
	{
		eType = document.getElementById( 'type' );
		aID = document.getElementById( 'appID' );
		if ( eType.options[eType.selectedIndex].value == 'GameEvent' && aID.options[aID.selectedIndex].value == '' )
		{
			alert( "Please select a game for your Game Event." );
		}
		else
		{
			now = new Date();
			document.getElementById( 'tzOffset' ).value = now.getTimezoneOffset() * -1 * 60;
			document.getElementById( 'eventForm' ).submit();
		}
	}
}

function cancelSave()
{
	history.back();
}

function ShowAdminArea( element )
{
	element = $(element);
	if ( !element.visible() )
	{
		new Effect.BlindDown( element, {duration: 0.25} );
	}
}


/* member manage page */


function ManageMembers_Kick( steamId, memberName )
{
	var bAnswer = confirm( 'You are about to kick ' + memberName + ' from the group.\n\nAre you sure?' );
	if ( bAnswer )
	{
		var form = document.forms['kick_form'];
		form.elements['memberId'].value = steamId;
		form.submit();
	}
}
function ManageMembers_ToggleRank( steamId, memberName )
{
	var rankIcon = document.getElementById( 'rankIcon_' + steamId );
	var pText = '';
	if ( !rankIcon )
	{
		return;
	}
	if ( rankIcon.src.indexOf( 'rankIconMember' ) != -1 )
	{
		if ( g_bCanPromoteToModerator )
			pText = 'promote ' + memberName + ' to a Moderator.';
		else
			pText = 'promote ' + memberName + ' to an Officer.';
	}
	else if ( rankIcon.src.indexOf( 'rankIconModerator' ) != -1 )
	{
		pText = 'promote ' + memberName + ' to an Officer.';
	}
	else
	{
		pText = 'demote ' + memberName + ' to a Member.';
	}
	var bAnswer = confirm( 'You are about to ' + pText + '\n\nAre you sure?' );
	if ( bAnswer )
	{
		var postData = {
			"xml": 1,
			"action": "toggleRank",
			"memberId": steamId,
			"sessionID": g_sessionID
		};
		createQuery2( g_strProcessURL, ManageMembers_OnRankToggleResponse, postData );
	}
}

function ManageMembers_OnRankToggleResponse()
{
	if ( req.readyState == 4 )
	{
		if ( req.status == 200 )
		{
			var response = req.responseXML.documentElement;
			updateInProgress = false;
			var results = response.getElementsByTagName('results')[0].firstChild.nodeValue;
			if(results == "OK")
			{
				var steamId = response.getElementsByTagName('steamId')[0].firstChild.nodeValue;
				var rankIcon = document.getElementById( 'rankIcon_' + steamId );
				if ( !rankIcon )
				{
					// shouldn't be possible to have queried a steamId we dont have a rankicon for, so this should never be hit
					return;
				}
				var newRank = response.getElementsByTagName('newRank')[0].firstChild.nodeValue;
				if ( newRank == 'Officer' )
				{
					rankIcon.src = rankIcon.src.replace(/[^\/]*\.gif/, 'rankIconOfficer.gif' );
				}
				else if ( newRank == 'Moderator' )
				{
					rankIcon.src = rankIcon.src.replace(/[^\/]*\.gif/, 'rankIconModerator.gif' );
				}
				else
				{
					rankIcon.src = rankIcon.src.replace(/[^\/]*\.gif/, 'rankIconMember.gif' );
				}
			}
			else
			{
				alert( 'There was an error promoting/demoting that player. \n' + results + '\nPlease address the error and try again.' );
			}
		}
	}
}


/*	potw edit */


function togglePOTW( steamId, memberName )
{
	var POTWIcon = document.getElementById( 'POTWIcon_' + steamId );
	if ( !POTWIcon )
	{
		return false;
	}
	var pText;
	if ( POTWIcon.src.indexOf( 'iconPOTW' ) != -1 )
	{
		pText = 'remove ' + memberName + ' as group Player of the Week.';
	}
	else
	{
		pText = 'make ' + memberName + ' your new group Player of the Week.';
	}
	var bAnswer = confirm( 'You are about to ' + pText + '\n\nAre you sure?' );
	if ( bAnswer )
	{
		createQuery2( g_strProcessURL, receivePOTWToggle, { "xml": 1, "action": "potw", "memberId": steamId, sessionid: g_sessionID } );
	}
}
function receivePOTWToggle()
{
	if ( req.readyState == 4 )
	{
		if ( req.status == 200 )
		{
			var response = req.responseXML.documentElement;
			updateInProgress = false;
			var results = response.getElementsByTagName('results')[0].firstChild.nodeValue;
			if(results == "OK")
			{
				var oldPOTW = response.getElementsByTagName('oldPOTW')[0].firstChild.nodeValue;
				var newPOTW = response.getElementsByTagName('newPOTW')[0].firstChild.nodeValue;
				if ( oldPOTW && document.getElementById( 'POTWIcon_' + oldPOTW ) )
				{
					document.getElementById( 'POTWIcon_' + oldPOTW ).src = document.getElementById( 'POTWIcon_' + oldPOTW ).src.replace( /iconPOTW/, 'iconNonPOTW' );
				}
				if ( newPOTW != 0 )
				{
					if ( document.getElementById( 'POTWIcon_' + newPOTW ) )
					{
						document.getElementById( 'POTWIcon_' + newPOTW ).src = document.getElementById( 'POTWIcon_' + newPOTW ).src.replace( /iconNonPOTW/, 'iconPOTW' );
					}
				}
			}
			else
			{
				alert( 'There was an error changing group Player of the Week. \n' + results + '\nPlease address the error and try again.' );
			}
		}
	}
}

/* chat bans */

function ManageBans_Unban( steamId, name )
{
	if ( confirm( 'You are about to remove the ban on \n' + name + '\nAre you sure?' ) )
	{
		var postData = {
			"xml": 1,
			"action": "unban",
			"steamId": steamId,
			"sessionID": g_sessionID
		};
		createQuery2( g_strProcessURL, ManageBans_ReceiveUnban, postData );
	}
}

function ManageBans_ReceiveUnban()
{
	if ( req.readyState == 4 )
	{
		if ( req.status == 200 )
		{
			response = req.responseXML.documentElement;
			updateInProgress = false;
			results = response.getElementsByTagName('results')[0].firstChild.nodeValue;
			if(results == "OK")
			{
				steamId = response.getElementsByTagName('steamId')[0].firstChild.nodeValue;
				unbanned = document.getElementById( 'ban_' + steamId );
				if ( unbanned )
				{
					unbanned.parentNode.removeChild( unbanned );
				}
			}
			else
			{
				alert( 'There was a problem processing your unban request:' + "\n" + results );
			}
		}
	}
}

function ShowForumBanDetails( accountid )
{
	var $Details = $J('#forum_bandetails_' + accountid );
	$Details.show();

	ShowAlertDialog( 'Ban details', $Details ).always( function() {
		$J(document.body).append( $Details.hide() );
	});
}

var Template_AssociatedGame = new Template (
	'<div class="group_associated_game" id="group_associated_game_#{appid}">' +
	'	<div class="group_associated_game_icon">' +
	'		<img src="#{icon}">'+
	'		</div>' +
	'	#{name}' +
	'	<img class="group_associated_game_remove" src="https://steamcommunity-a.akamaihd.net/public/images/skin_1/kickIcon.gif" onclick="RemoveAssociatedGame( #{appid} );">' +
	'</div>'
);

function InitGameAssociationSearch()
{
	if ( $('associate_game' ) && $('game_select_suggestions_ctn') && $('game_select_suggestions') )
		new CGameSelector( $('associate_game'), $('game_select_suggestions_ctn'), $('game_select_suggestions'), OnSelectGame );
}

function OnSelectGame( GameSelector, rgAppData )
{
	$('associate_game').value='';

	var rgCurrentAppIDs = GetCurrentGameAssociationList();
	var bAlreadySelected = false;
	for ( var i = 0; i < rgCurrentAppIDs.length; i++ )
	{
		if ( rgCurrentAppIDs[i] == rgAppData.appid )
		{
			bAlreadySelected = true;
			break;
		}
	}

	if ( !bAlreadySelected )
	{
		$('group_associated_games_edit').insert( {bottom: Template_AssociatedGame.evaluate( rgAppData ) } );

		rgCurrentAppIDs.push( rgAppData.appid );
		$('favorite_games').value = rgCurrentAppIDs.join( ',' );
	}
}

function GetCurrentGameAssociationList()
{
	var rgCurrentAppIDs = $('favorite_games').value.split(',');

	if ( rgCurrentAppIDs.length == 1 && rgCurrentAppIDs[0] == '' )
		return [];
	else
		return rgCurrentAppIDs;
}

function RemoveAssociatedGame( appid )
{
	var rgCurrentAppIDs = GetCurrentGameAssociationList();
	var rgNewAppIDList = [];

	for( var i=0; i < rgCurrentAppIDs.length; i++ )
	{
		if ( rgCurrentAppIDs[i] != appid )
			rgNewAppIDList.push( rgCurrentAppIDs[i] );
	}

	var elGame = $('group_associated_game_' + appid);
	if ( elGame )
		elGame.remove();

	$('favorite_games').value = rgNewAppIDList.join( ',' );
}


function OnForumReorder( elContainer )
{
	var rgChildElements = elContainer.childElements();
	for ( var i = 0; i < rgChildElements.length; i++ )
	{
		var elChild = rgChildElements[i];
		var elInput = elChild.down( '.forum_ordinal_input' );
		elInput.value = i;
	}
}

function GroupAdmin_DeleteForum( strForumType, gidFeature )
{
	if ( confirm( 'Are you sure you want to delete this forum?  This action cannot be undone.' ) )
	{
		var elForm = document.forms['delete_forum_form'];
		elForm.elements['forumtype'].value = strForumType;
		elForm.elements['gidfeature'].value = gidFeature;
		elForm.submit();
	}
}


function GroupAnnouncement_ShowHTMLImportDialog( btn, selector )
{
	var $Btn = $J(btn);
	if ( $Btn.hasClass( 'btn_disabled' ) )
		return;

	var strDialogTitle = 'Import from HTML';

	$Btn.addClass( 'btn_disabled' );

	var $Textarea = $J(selector);

	var $Dialog = $J('<div/>');
	$Dialog.append( $J('<div/>').text( 'Type or paste HTML below.' ) );
	var $HTMLTextarea = $J('<textarea/>', {cols: 40, rows: 14} );
	$HTMLTextarea.css( 'width', '462px').css( 'margin', '4px 0');
	$Dialog.append( $HTMLTextarea );

	var $HTMLNewlineCheck = $J('<input/>', {type: 'checkbox', id: 'html_newline_check'} );
	var $Label = $J('<label/>', {'for': 'html_newline_check'}).text( 'Preserve newlines' );
	$Label.data('community-tooltip', 'In HTML, newlines usually have no effect, but in BBCode they will show as blank lines.  If you used &lt;p&gt; or &lt;br&gt; tags, leave this unchecked.  If you usually use blog software that automatically adds &lt;br&gt; tags for newlines, you will probably want to check this box.' );

	$Dialog.append( $J('<div/>').append( $HTMLNewlineCheck, $Label )) ;

	ShowConfirmDialog( strDialogTitle, $Dialog, 'Convert to BBCode' )
		.done( function () {
			if ( !$HTMLTextarea.val() )
				return;

			$J.post( 'https://steamcommunity.com/actions/ConvertHTMLToBBCode', {
				content: $HTMLTextarea.val(),
				preserve_newlines: $HTMLNewlineCheck.is( ':checked' ) ? 1 : 0
			}).done( function( data ) {
				if ( $Textarea.val() )
				{
					ShowConfirmDialog( strDialogTitle, 'You\'ve already entered text in the body.  Would you like to replace it with the converted text or append the new text?', 'Replace', null, 'Append' )
						.done( function( button ) {
							if ( button == 'OK' )
								$Textarea.val( data.content );
							else if ( button == 'SECONDARY' )
								$Textarea.val( $Textarea.val() + '\n' + data.content );
							PreviewAnnouncement();
						});
				}
				else
				{
					$Textarea.val( data.content );
					PreviewAnnouncement();
				}
			}).fail( function() {
				ShowAlertDialog( strDialogTitle, 'There was a problem converting your text.  Please try again later.' );
			});
		}).always( $Btn.removeClass( 'btn_disabled' ) );
	$HTMLTextarea.focus();
}

function JoinRequests_ToggleBulkManageJoinRequests()
{
	$J( '.joinRequestBulkTools' ).slideToggle();
    $J( '.rank_icon > a' ).toggle();
    $J( 'input[type=checkbox]' ).toggle();

    var elArrow = $J( '.btn_details_arrow' );
    if ( elArrow.hasClass( 'down' ) )
	{
        elArrow.removeClass( 'down' );
        elArrow.addClass( 'up' );
	}
	else
	{
        elArrow.removeClass( 'up' );
        elArrow.addClass( 'down' );
	}
}

function JoinRequests_ApproveDenyUser( accountID, bApprove )
{
    $J.post( g_strProcessURL, { 'rgAccounts' : [ accountID ], 'bapprove' : bApprove, 'sessionID': g_sessionID } )
        .done( function( eResult ) {
	        JoinRequests_HandleResponse( eResult );
        } );
}

function JoinRequests_RespondToAllJoinRequests( bApprove )
{
    $J.post( g_strProcessURL, { 'bapprove' : bApprove, "action" : "bulkrespond", 'sessionID': g_sessionID } )
        .done( function( eResult ) {
	        JoinRequests_HandleResponse( eResult );
        } );
}

function JoinRequests_RespondToSelectedJoinRequests( bApprove )
{
    $J.post( g_strProcessURL, $J( "#joinRequestForm" ).serialize() + "&bapprove=" + bApprove )
        .done( function( eResult ) {
	        JoinRequests_HandleResponse( eResult );
        } );
}

function JoinRequests_HandleResponse( eResult )
{
    if ( eResult == 1 )
    {
        document.location.href = g_strProcessURL;
    }
    else
    {
        ShowAlertDialog( "Error", "There was a problem responding to membership requests. Result: " + eResult );
    }
}

function JoinRequests_ToggleSelectAll( el )
{
    if ( el.data( "selected" ) == 1 )
	{
        el.children('span').text( "Select All" );
        $J( 'input[type=checkbox]' ).prop( 'checked', false );
        el.data( "selected", 0 );
	}
	else
	{
        el.children('span').text( "Deselect All" );
        $J( 'input[type=checkbox]' ).prop( 'checked', true );
        el.data( "selected", 1 );
	}
}

