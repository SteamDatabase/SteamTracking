
function setupMemberTooltips()
{
	anchors = document.getElementsByTagName('a');
	for(x=0;x<anchors.length;x++)
	{
		thisClass = ' '+anchors[x].className+' ';
		if(thisClass.indexOf(' groupMemberLink ') != -1)
		{
			addEvent(anchors[x], 'mouseover', showMemberTooltip);
			addEvent(anchors[x], 'mouseout', tooltipDestroy);
		}
	}
}

function showMemberTooltip(e)
{
	var srcEl = window.event ? window.event.srcElement : e ? e.target : null;
	if(!srcEl)
	{
		return;
	}
	memberA = getGoodElement(srcEl, 'a', 'groupMemberLink', 0);
	if(!memberA)
	{
		return;
	}
	memberId = memberA.id.slice(7);
	if(rgGroupMembers[memberId])
	{
		thisTip = document.createElement('div');
		thisTip.className = 'groupMemberTooltip'+rgGroupMembers[memberId][2];
		nameText = document.createTextNode(rgGroupMembers[memberId][0]);
		nameSpan = document.createElement('span');
		nameSpan.className = 'groupMemberTooltipName';
		nameSpan.appendChild(nameText);
		thisTip.appendChild(nameSpan);
		thisTip.appendChild(document.createElement('br'));
		stateText = document.createTextNode(rgGroupMembers[memberId][1]);
		stateSpan = document.createElement('span');
		stateSpan.className = 'groupMemberTooltipState';
		stateSpan.appendChild(stateText);
		thisTip.appendChild(stateSpan);
		tooltipCreate(thisTip, e);
	}
}
	
function showLinkTooltip(e)
{
	var srcEl = window.event ? window.event.srcElement : e ? e.target : null;
	if(!srcEl)
	{
		return;
	}
	linkA = getGoodElement(srcEl, 'a', 'externalLink', 0);
	if(!linkA)
	{
		return;
	}
	thisTip = document.createElement('div');
	thisTip.className = 'linkTooltip';
	linkText = document.createTextNode(linkA.href);
	linkSpan = document.createElement('span');
	linkSpan.className = 'linkTooltipText';
	linkSpan.appendChild(linkText);
	thisTip.appendChild(linkSpan);

	tooltipCreate(thisTip, e);
}

function setupLinkTooltips()
{
	anchors = document.getElementsByTagName('a');
	for(x=0;x<anchors.length;x++)
	{
		thisClass = ' '+anchors[x].className+' ';
		if(thisClass.indexOf(' externalLink ') != -1)
		{
			addEvent(anchors[x], 'mouseover', showLinkTooltip);
			addEvent(anchors[x], 'mouseout', tooltipDestroy);
		}
	}
}

function toggleAdminOptions()
{
	el = document.getElementById( "adminOptionsSelect" );
	if ( el )
	{
		if ( el.style.display != "block" )
		{
			if ( !justHid )
			{
				el.style.display = "block";
				document.getElementById( "adminOptCollapse" ).style.display = "inline";
				document.getElementById( "adminOptExpand" ).style.display = "none";
			}
			else
			{
				justHid = false;
			}
		}
		else
		{
			hideAdminOptions();
			justHid = false;
		}
	}
}
var justHid = false;
function hideAdminOptions()
{
	el = document.getElementById( "adminOptionsSelect" );
	if ( el )
	{
		if ( el.style.display == "block" )
		{
			el.style.display = "none";
			document.getElementById( "adminOptCollapse" ).style.display = "none";
			document.getElementById( "adminOptExpand" ).style.display = "inline";
			justHid = true;
		}
		else
		{
			justHid = false;
		}
	}
}

function adminOptArrowShow()
{
	document.getElementById( "adminOptCollapse" ).style.display = "inline";
	document.getElementById( "adminOptExpand" ).style.display = "none";
}

function adminOptArrowHide()
{
	el = document.getElementById( "adminOptionsSelect" );
	if ( el )
	{
		if ( el.style.display != "block" )
		{
			document.getElementById( "adminOptCollapse" ).style.display = "none";
			document.getElementById( "adminOptExpand" ).style.display = "inline";
		}
	}
}	

function setupExternalOGGLinks()
{
	SearchAndFixOGGExternalLinks( document.getElementById( 'summaryText' ) );

	divs = document.getElementById( 'announcementsBlock' ).getElementsByTagName( 'div' );
	for ( x = 0; x < divs.length; x++ )
	{
		thisClass = ' ' + divs[x].className + ' ';
		if ( thisClass.indexOf( ' bodytext ' ) != -1 )
		{
			SearchAndFixOGGExternalLinks( divs[x] );
		}
	}
}

function SearchAndFixOGGExternalLinks( primaryNode )
{
	links = primaryNode.getElementsByTagName( 'a' );
	for ( y = 0; y < links.length; y++ )
	{
		thisNode = links[y];
		if ( inOverlay )
		{
			thisNode.href = 'javascript:function(){return false;}';
			thisNode.className = 'externalLinkDisabled';
		}
		else
		{
			if ( thisNode.href.indexOf( 'steam://openurl/' ) != 0 )
			{
				thisNode.href = 'steam://openurl/' + thisNode.href;
			}
		}
	}
}

addEvent(document, "click", hideAdminOptions, false);
addEvent(window, "load", setupLinkTooltips, false);
addEvent(window, "load", setupMemberTooltips, false);
