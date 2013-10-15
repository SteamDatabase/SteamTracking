

function friendSelect( which )
{
	boxes = document.getElementsByTagName( 'input' );
	for ( x = 0; x < boxes.length; x++ )
	{
		thisbox = boxes[x];
		if ( thisbox.id.indexOf( 'friendbox_' ) != -1 )
		{
			if ( which == 'all' )
			{
				thisbox.checked = true;
			}
			else if ( which == 'none' )
			{
				thisbox.checked = false;
			}
			else if ( which == 'invert' )
			{
				thisbox.checked = ( thisbox.checked ? false : true );
			}
		}
	}
}

function getSelectedFriendsCount()
{
	boxes = document.getElementsByTagName( 'input' );
	count = 0;
	for ( x = 0; x < boxes.length; x++ )
	{
		thisbox = boxes[x];
		if ( thisbox.id.indexOf( 'friendbox_' ) != -1 )
		{
			if ( thisbox.checked )
			{
				count++;
			}
		}
	}
	return count;
}

function friendAction( action )
{
	actionInput = document.getElementById( 'friendListFormAction' );
	actionInput.value = action;
	count = getSelectedFriendsCount();
	if ( count < 1 )
	{
		alert( "You have not selected any friends." );
		return;
	}
	msg = "Friends selected: " + count + "\n\n";
	if ( action == 'ignore' || action == 'remove' || action == 'addfriend' )
	{
		if ( action == 'ignore' )
		{
			if ( count == 1 )
			{
				msg += "You will no longer be able to send or receive messages or invites with this player.";
			}
			else
			{
				msg += "You will no longer be able to send or receive messages or invites with these players.";
			}
		}
		else if ( action == 'remove' )
		{
			if ( count == 1 )
			{
				msg += "This player will no longer appear in your friends list and you will not be able to communicate with them.";
			}
			else
			{
				msg += "These players will no longer appear in your friends list and you will not be able to communicate with them.";
			}
		}
		else if ( action == 'addfriend' )
		{
				msg += "Add to your friends list";
		}	
		msg += "\n\n" + "Press OK to complete this action or Cancel to go back";
		if ( !window.confirm( msg ) )
		{
			return;
		}
	}		
	document.getElementById( 'friendListForm' ).submit();
}

function friendInvite( groupID )
{
	actionInput = document.getElementById( 'friendListFormAction' );
	actionInput.value = 'groupInvite';
	groupIDInput = document.getElementById( 'groupInviteID' );
	groupIDInput.value = groupID;
	document.getElementById( 'friendListForm' ).submit();
}

function setupGroupInvite()
{
	anchors = document.getElementsByTagName('a');
	for(x=0;x<anchors.length;x++)
	{
		cn = ' ' + anchors[x].className + ' ';
		if( cn.indexOf( ' inviteGroupListLink ' ) != -1 )
		{
			addEvent(anchors[x], 'click', selectInviteGroup);
		}
	}
}	

function selectInviteGroup(e)
{
	pickEl = document.getElementById('groupInviteSelect');
	if(pickEl)
	{
		pickEl.parentNode.removeChild(pickEl);
	}
	
	pickEl = document.createElement('div');
	pickEl.id = 'groupInviteListPopup';
	pickEl.style.position = 'absolute';
	addEvent(pickEl, 'mouseout', hideInviteGroup);
	for(x=0;x<invitableGroups.length;x++)
	{
		c = invitableGroups[x];
		curA = document.createElement('a');
		curA.className = 'groupInviteLink';
		curA.href = "javascript:friendInvite('" + c[0] + "')";
		curA.id = 'c_'+c[0];
		curATN = document.createTextNode(c[1]);
		curA.appendChild(curATN);
		pickEl.appendChild(curA);
	}
	document.getElementsByTagName('body')[0].appendChild(pickEl);
	popTL = getPopPos(e, pickEl.clientWidth, pickEl.clientHeight, -6);
	pickEl.style.top = popTL[0] + 'px';
	pickEl.style.left = popTL[1] + 'px';
}

function hideInviteGroup(e)
{
	pickEl = document.getElementById('groupInviteListPopup');
	if(pickEl)
	{
		mx = e.clientX + winDim('w', 's');
		my = e.clientY + winDim('h', 's');
		pl = parseInt(pickEl.style.left) + 2;
		pr = pl + pickEl.clientWidth + 1;
		pt = parseInt(pickEl.style.top) + 2;
		pb = pt + pickEl.clientHeight + 1;
		if(mx < pl || mx > pr || my < pt || my > pb)
		{
			pickEl.parentNode.removeChild(pickEl);
		}
	}
}

function showSuccessMsg()
{
	if ( typeof successInfo != 'undefined' && successInfo != "" )
	{
		alert( successInfo );
	}
}

function confirmBlock()
{
	$('blockForm').submit();
}

function declineBlock()
{
	$('blockAction').value = '';
	$('blockForm').submit();
}

function filterCoplay( appid )
{
	actionInput = document.getElementById( 'friendListFormAction' );
	actionInput.value = appid;
	if ( appid < 1 )
	{
		alert( "You have not selected any friends." );
		return;
	}
	msg = "#BulkActions_FilterCoplayByAppID " + appid + "\n\n";
	if ( appid > 0 )
	{

		msg += "You will no longer be able to send or receive messages or invites with this player.";

		msg += "\n\n" + "Press OK to complete this action or Cancel to go back";
		if ( !window.confirm( msg ) )
		{
			return;
		}
	}		
	document.getElementById( 'friendListForm' ).submit();
}

addEvent(window, "load", setupGroupInvite, false);
addEvent(window, "load", showSuccessMsg, false);

