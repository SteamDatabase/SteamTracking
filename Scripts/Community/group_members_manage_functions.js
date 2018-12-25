function kickMember( steamId, memberName )
{
	bAnswer = confirm( 'You are about to kick ' + memberName + ' from the group.\n\nAre you sure?' );
	if ( bAnswer )
	{
		kickURL = processURL + '?action=kick&memberId=' + steamId;
		location.href = kickURL;
	}
}
function toggleRank( steamId, memberName )
{
	rankIcon = document.getElementById( 'rankIcon_' + steamId );
	if ( !rankIcon )
	{
		return;
	}
	if ( rankIcon.src.indexOf( 'rankIconMember' ) != -1 )
	{
		if ( bCanPromoteToModerator )
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
	bAnswer = confirm( 'You are about to ' + pText + '\n\nAre you sure?' );
	if ( bAnswer )
	{
		var postData = {
			"xml": 1,
			"action": "toggleRank",
			"memberId": steamId,
			"sessionID": g_sessionID
		};
		createQuery2( processURL, receiveRankToggle, postData );
	}
}

function receiveRankToggle()
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
				rankIcon = document.getElementById( 'rankIcon_' + steamId );
				if ( !rankIcon )
				{
					// shouldn't be possible to have queried a steamId we dont have a rankicon for, so this should never be hit
					return;
				}
				newRank = response.getElementsByTagName('newRank')[0].firstChild.nodeValue;
				if ( newRank == 'Officer' )
				{
					rankIcon.src = rankIcon.src.replace(/rankIconMember/, 'rankIconOfficer' );
					rankIcon.src = rankIcon.src.replace(/rankIconModerator/, 'rankIconOfficer' );
				}
				else if ( newRank == 'Moderator' )
				{
					rankIcon.src = rankIcon.src.replace(/rankIconMember/, 'rankIconModerator' );
					rankIcon.src = rankIcon.src.replace(/rankIconOfficer/, 'rankIconModerator' );
				}
				else
				{
					rankIcon.src = rankIcon.src.replace(/rankIconOfficer/, 'rankIconMember' );
					rankIcon.src = rankIcon.src.replace(/rankIconModerator/, 'rankIconMember' );
				}
			}
			else
			{
				alert( 'There was an error promoting/demoting that player. \n' + results + '\nPlease address the error and try again.' );
			}
		}
	}
}

function clearSearchInput()
{
	tbox = document.getElementById( 'searchKey' );
	if ( tbox.value == strSearchPrompt )
	{
		tbox.value = '';
	}
}

function restoreSearchInput()
{
	tbox = document.getElementById( 'searchKey' );
	if ( tbox.value == '' )
	{
		tbox.value = strSearchPrompt;
	}
}

function validateSearchSubmit()
{
	tbox = document.getElementById( 'searchKey' );
	if ( tbox.value == strSearchPrompt || tbox.value == '' )
	{
		return false;
	}
	document.getElementById( 'searchEditForm' ).submit();
}
