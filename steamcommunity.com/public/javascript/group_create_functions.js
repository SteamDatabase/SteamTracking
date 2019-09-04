
function checkAvail(fieldId)
{
	fieldVal = document.getElementById(fieldId).value;
	if(fieldVal == '')
	{
		resultsSpan = document.getElementById(fieldId + '_results');
		resultsSpan.innerHTML = 'Please specify a value';
		resultsSpan.style.display = 'inline';
		resultsSpan.style.color = 'red';
		eval("avail_"+fieldId+" = false");
		return;
	}
	var postData = {
		"xml": 1,
		"type": fieldId,
		"value": fieldVal
	};
	createQuery2(availCheckUrl, receiveAvailCheck, postData);
}
avail_groupName = false;
avail_groupLink = false;
function receiveAvailCheck()
{
	if(req.readyState == 4)
	{
		if(req.status == 200)
		{
			response = req.responseXML.documentElement;
			updateInProgress = false;
			fieldId = response.getElementsByTagName('fieldId')[0].firstChild.nodeValue;
			if(fieldId)
			{
				bResults = response.getElementsByTagName('bResults')[0].firstChild.nodeValue;
				sResults = '';
				var oResults = response.getElementsByTagName('sResults')[0].childNodes;
				for( i in oResults )
				{
					if ( oResults[i].nodeValue != undefined)
					{
						sResults += oResults[i].nodeValue;
					}
				}
				
				resultsBox = document.getElementById(fieldId + '_results');
				resultsBox.innerHTML = sResults.escapeHTML();
				document.getElementById( fieldId + '_results_container' ).style.visibility = 'visible';
				resultsBox.style.color = 'white';
				if(bResults != '1')
				{
					fieldDiv = document.getElementById(fieldId);
					fieldDiv.value = '';
					resultsBox.style.color = 'red';
					eval("avail_"+fieldId+" = false");
				}
				else
				{
					eval("avail_"+fieldId+" = true");
				}
			}
		}
	}
}

function checkFields(checking)
{
	if(updateInProgress == true)
	{
		if(!checking)
		{
			setTimeout("checkFields()", 200);
		}
		else
		{
			setTimeout("checkFields(1)", 200);
		}
		return;
	}
	if(!checking && (avail_groupName == false || avail_groupLink == false || avail_abbreviation == false))
	{
		checkAvail('groupName');
		checkAvail('groupLink');
		checkAvail('abbreviation');
		setTimeout("checkFields(1)", 200);
		return;
	}
	if(avail_groupName == false || avail_groupLink == false || avail_abbreviation == false)
	{
		alert("Please fix all problems and try again.");
		return false;
	}
	else
	{
		document.groupCreateForm.submit();
	}
}

function showInfo( divName )
{
	el = document.getElementById( divName );
	if ( el.style.display != 'block' )
	{
		el.style.display = 'block';
	}
	else
	{
		el.style.display = 'none';
	}
}
