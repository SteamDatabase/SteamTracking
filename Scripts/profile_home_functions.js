
function leaveGroupPrompt( groupId, groupName )
{
	if ( window.confirm( 'You are about to leave the group: \n' + groupName + '\nAre you sure?' ) )
	{
		leaveURL = processURL + '?action=leaveGroup&groupId=' + groupId + '&sessionID=' + escape( $('sessionID').value );
		location.href = leaveURL;
	}
}
function showFMPBlock( blockID, bShow )
{
	newdisplay = ( bShow ? 'block' : 'none' );
	d1 = document.getElementById( 'fmpArrow' + blockID );
	if ( d1 )
	{
		d1.style.display = newdisplay;
		d2 = document.getElementById( 'fmpPlayers' + blockID );
		if ( d2 )
		{
			d2.style.display = newdisplay;
		}
	}
}
function FriendAccept( friendID64, action )
{
	var postData = {
		"json": 1,
		"xml": 1,
		"action": "approvePending",
		"itype": "friend",
		"perform": action,
		"id": friendID64,
		"sessionID": $('sessionID').value
	};
	createQuery2( processURL, ReceiveInviteProcessResponse, postData );
}

function SuggestedFriendAccept( friendID64, action )
{
	var postData = {
		"json": 1,
		"xml": 1,
		"action": "approvePending",
		"itype": "suggestedfriend",
		"perform": action,
		"id": friendID64,
		"sessionID": $('sessionID').value
	};
	createQuery2( processURL, ReceiveInviteProcessResponse, postData );
}

function GroupAccept( groupID64, action )
{
	var postData = {
		"json": 1,
		"xml": 1,
		"action": "approvePending",
		"itype": "group",
		"perform": action,
		"id": groupID64,
		"sessionID": $('sessionID').value
	};
	createQuery2( processURL, ReceiveInviteProcessResponse, postData );
}

function GroupLeave( groupID64 )
{
	var postData = {
		"json": 1,
		"xml": 1,
		"action": "leaveGroup",
		"groupId": groupID64,
		"sessionID": $('sessionID').value
	};
	createQuery2( processURL, ReceiveInviteProcessResponse, postData );
}

function ReceiveInviteProcessResponse()
{
	if ( req.readyState == 4 )
	{
		if ( req.status == 200 )
		{
			updateInProgress = false;
			var data = eval( '(' + req.responseText + ')' );
			if ( data.error_text && data.error_text != "" )
			{
				el = document.getElementById( 'errorText' );
				if ( el )
				{
					el.innerHTML = data.error_text;
				}
			}
			else if ( data.success )
			{
				el = document.getElementById( 'invite_' + data.id.replace( "[", "_" ).replace( "]", "_" ) );
				if ( el )
				{
					el.style.display = 'none';
				}

				if ( data.itype == 'friend' )
				{
					pref = 'pinvites_';
					cplayerinvites--;
					newc = Math.max( 0, cplayerinvites );
				}
				else if ( data.itype == 'group' )
				{
					pref = 'ginvites_';
					cgroupinvites--;
					newc = Math.max( 0, cgroupinvites );
				}
				else if ( data.itype == 'kick' )
				{
					pref = 'kicks_';
					ckicks--;
					newc = Math.max( 0, ckicks );
				}
				else if ( data.itype == 'suggestedfriend' )
				{
					pref = 'sinvites_';
					csuggestedplayers--;
					newc = Math.max( 0, csuggestedplayers );
					if ( newc == 0 )
					{
                        // We reached 0 suggested friends, display a corresponding text
					    emptyMessageElement = document.getElementById( 'sinvites_empty_message' );
					    if ( emptyMessageElement )
					    {
                            emptyMessageElement.style.display = 'inline';
                        }
					}
				}

				newfullcount = cgroupinvites + cplayerinvites + csuggestedplayers + ckicks;
				if ( newc == 1 )
				{
					document.getElementById( pref + 'plural' ).style.display = 'none';
					document.getElementById( pref + 'singular' ).style.display = 'inline';
				}
				else
				{
					document.getElementById( pref + 'singular' ).style.display = 'none';
					document.getElementById( pref + 'count' ).innerHTML = newc;
					document.getElementById( pref + 'plural' ).style.display = 'inline';
				}

				if ( newc == 0 && data.itype != 'kick' )
				{
					document.getElementById( pref + 'ignoreall' ).style.display = 'none';
					inviteAllElement = document.getElementById( pref + 'inviteall' );
					if ( inviteAllElement )
					{
						inviteAllElement.style.display = 'none';
					}
				}

				headerInviteEl = document.getElementById( 'headerInviteCount' );
				if ( headerInviteEl )
					headerInviteEl.innerHTML = newfullcount;
				RefreshNotificationArea();
			}
		}
	}
}
