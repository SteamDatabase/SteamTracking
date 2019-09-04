
function setupCalRollovers()
{
	allAs = document.getElementsByTagName('a');
	for( x = 0; x < allAs.length; x++ )
	{
		thisA = allAs[x];
		if ( thisA.parentNode.className == 'days' )
		{
			if ( thisA.className != 'otherMonth' && thisA.className.indexOf( 'noRollover' ) == -1 && thisA.className.indexOf( 'isCurrent' ) == -1 )
			{
				addEvent( thisA, 'mouseover', calDayOver, false );
				addEvent( thisA, 'mouseout', calDayOff, false );
			}
			else
			{
				thisA.style.cursor = 'default';
			}
		}
	}
}

function calDayOver( e )
{
	var srcEl = window.event ? window.event.srcElement : e ? e.target : null;
	if(!srcEl)
	{
		return;
	}
	srcEl.className += ' rollOver';
}

function calDayOff( e )
{
	var srcEl = window.event ? window.event.srcElement : e ? e.target : null;
	if(!srcEl)
	{
		return;
	}
	srcEl.className = srcEl.className.replace( /rollOver/, '' );
	if ( srcEl.className == ' ' )
	{
		srcEl.classname = '';
	}
}	

var calChangeMonthExtraFunc;
function calChangeMonth( calID, newMonth, newYear )
{
	var postData = {
		"calendarID": calID
	};
	if ( newMonth != undefined && newYear != undefined )
	{
		postData['month'] = newMonth;
		postData['year'] = newYear;
	}
	createQuery2( baseCalendarUrl, calChangeReceive, postData );
	// this is so we can call an additional function if needed
	// specifically used to clear out all event summaries for the current month and fetch new ones for the changed-to month
	if ( calChangeMonthExtraFunc != undefined )
	{
		eval( calChangeMonthExtraFunc );
	}
}

function calChangeReceive()
{
	if ( req.readyState == 4 )
	{
		if ( req.status == 200 )
		{
			response = req.responseXML.documentElement;
			updateInProgress = false;
			results = response.getElementsByTagName('results')[0].firstChild.nodeValue;
			if ( results != 'OK' )
			{
				alert( results );
				return;
			}
			calendarID = response.getElementsByTagName('calendarID')[0].firstChild.nodeValue;
			document.getElementById( 'monthNav_' + calendarID ).innerHTML = response.getElementsByTagName('monthNav')[0].firstChild.nodeValue;
			document.getElementById( 'monthTitle_' + calendarID ).innerHTML = response.getElementsByTagName('monthTitle')[0].firstChild.nodeValue;
			dayDiv = document.getElementById( 'days_' + calendarID );
			while( dayDiv.childNodes.length > 0 )
			{
				dayDiv.removeChild( dayDiv.childNodes[0] );
			}
			newDays = response.getElementsByTagName('day');
			c = 0;
			for( x = 0; x < newDays.length; x++ )
			{
				if ( c == 7 )
				{
					c = 0;
					breaker = document.createElement( 'br' );
					breaker.clear = 'left';
					dayDiv.appendChild( breaker );
				}
				day = document.createElement( 'a' );
				day.id = newDays[x].getAttribute( 'linkID' );
				day.className = newDays[x].getAttribute( 'cssClass' );
				day.href = newDays[x].getAttribute( 'link' );
				dayNum = document.createTextNode( newDays[x].firstChild.nodeValue );
				day.appendChild( dayNum );
				dayDiv.appendChild( day );
				c++;
			}
			setupCalRollovers();
		}
	}
}

addEvent( window, "load", setupCalRollovers, false );
