
function checkGameFields()
{
	typeField = document.getElementById( 'type' );

	$J( '#gameField' ).hide();
	$J( '#serverIPField' ).hide();
	$J( '#serverPasswordField' ).hide();
	$J( '#broadcasterID' ).hide();
	$J( '#broadcastGameField' ).hide();

	if ( typeField && typeField.value == 'GameEvent' )
	{
		$J( '#gameField' ).show();
		$J( '#serverIPField' ).show();
		$J( '#serverPasswordField' ).show();
	}
	else if( typeField && typeField.value == 'BroadcastEvent' )
	{
		$J( '#broadcasterID' ).show();
		$J( '#broadcastGameField' ).show();
	}
}

function showDatePick()
{
	someDateO = document.getElementById( 'startDate' );
	datePickO = document.getElementById( 'datePick' );
	datePickO.style.top = someDateO.offsetTop + someDateO.clientHeight + 'px';
	datePickO.style.left = someDateO.offsetLeft + 'px';
	datePickO.style.display = 'block';
}

function setDatePick( newDate )
{
	document.getElementById( 'startDate' ).value = newDate;
	document.getElementById( 'startDate' ).disabled = false;
	document.getElementById( 'datePick' ).style.display = 'none';
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

function SetBroasdcasterAccountID( accountid )
{
	$J('#broadcasterAccountID').val( accountid );
	$J('#broadcasterName').val( accountid );
}

function SetBroadcastAccountToMe( accountid )
{
	SetBroasdcasterAccountID( accountid );
}

function CreateFriendOrMemberDialog( transport )
{
	$J('#choose_friend_throbber').hide();
	var dialog = ShowConfirmDialog( 'Choose a broadcaster', $J( transport.responseText ) );

	dialog.SetRemoveContentOnDismissal( false );
	dialog.done( function()
	{
		var chosenAccountID = $J("input[name=friend]:checked").val();
		if( chosenAccountID)
		{
			SetBroasdcasterAccountID( chosenAccountID );
		}
	} );
}

function OnFailureFriendOrMember( transport )
{
	$J('#choose_friend_throbber').hide();
}

function ChooseFriendAsBroadcaster( accountid, clanid )
{
	$J( '#choose_friend_throbber' ).show();

	var params = {};
	params['accountid'] = accountid;
	params[ 'sessionid' ] = g_sessionID;

	new Ajax.Request( g_strClanLink + '/ajaxlistfriends/', {
		method: 'post',
		requestHeaders: { 'Accept': 'application/json' },
		parameters: params,
		onSuccess: CreateFriendOrMemberDialog,
		onFailure: OnFailureFriendOrMember
	});
	return false;
}

function ChooseMemberAsBroadcaster( accountid, clanid )
{
	$J( '#choose_friend_throbber' ).show();

	var params = {};
	params['accountid'] = accountid;
	params[ 'sessionid' ] = g_sessionID;
	params['clanid'] = clanid;

	new Ajax.Request( g_strClanLink  + 'ajaxlistfriends/', {
		method: 'post',
		requestHeaders: { 'Accept': 'application/json' },
		parameters: params,
		onSuccess: CreateFriendOrMemberDialog,
		onFailure: OnFailureFriendOrMember
	});
	return false;
}

addEvent( window, 'load', checkGameFields, false );
