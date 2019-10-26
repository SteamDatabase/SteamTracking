
function deleteEvent( deleteURL ) 
{
	if ( confirm( 'You are about to delete this event. Are you sure?' ) )
	{
		var $Form = $J('<form/>', {action: deleteURL, method: 'POST'});
		$Form.append( $J('<input/>', {type: 'hidden', name: 'sessionid', value: g_sessionID } ) );
		$J('body').append( $Form );
		$Form.submit();
	}
}

function getMonthEvents( newMonth, newYear )
{
	var postData = {
		"xml": 1,
		"action": "eventFeed",
		"month": newMonth,
		"year": newYear
	};
	createQuery2( getEventURL, monthEventsReceive, postData );
}

function getDayEvents( mdy, eventID )
{
	var postData = {
		"xml": 1,
		"action": "eventDayFeed",
		"mdy": mdy
	};
	if ( eventID != undefined )
	{
		postData['selectedEvent'] = eventID;
	}
	createQuery2( fetchURL, dayEventsReceive, postData );
}

var calCurrentClass;
function dayEventsReceive()
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
				return false;
			}
			// clear existing list
			expandedEvents = document.getElementById( 'eventsExpanded' );
			while( expandedEvents.childNodes.length > 0 )
			{
				expandedEvents.removeChild( expandedEvents.childNodes[0] );
			}
			eventCount = response.getElementsByTagName( 'eventCount' )[0].firstChild.nodeValue;
			expiredEventCount = response.getElementsByTagName( 'expiredEventCount' )[0].firstChild.nodeValue;
			if ( eventCount > 0 || expiredEventCount > 0 )
			{
				mdy = response.getElementsByTagName( 'mdy' )[0].firstChild.nodeValue;
				if ( calCurrentFocus != undefined )
				{
					if ( document.getElementById( 'cal1_' + calCurrentFocus ) )
					{
						document.getElementById( 'cal1_' + calCurrentFocus ).className = calCurrentClass;
						document.getElementById( 'cal1_' + calCurrentFocus ).className = document.getElementById( 'cal1_' + calCurrentFocus ).className.replace( /rollOver/, '' );
						if ( document.getElementById( 'cal1_' + calCurrentFocus ).className == ' ' )
						{
							document.getElementById( 'cal1_' + calCurrentFocus ).classname = '';
						}
					}
				}
				calCurrentClass = document.getElementById( 'cal1_' + mdy ) .className;
				document.getElementById( 'cal1_' + mdy ) .className = 'isFocus';
				calCurrentFocus = mdy;
				selectedEvent = response.getElementsByTagName( 'selectedEvent' )[0].firstChild.nodeValue;
				expandedEvents.innerHTML += '<p class="sectionText" id="fullEventTitle">Showing events for ' + mdy + '</p>';
				if ( eventCount > 0 )
				{
					events = response.getElementsByTagName( 'event' );
					for( x = 0; x < events.length; x++ )
					{
						expandedEvents.innerHTML += events[x].firstChild.nodeValue;
					}
				}
				if ( expiredEventCount > 0 )
				{
					events = response.getElementsByTagName( 'expiredEvent' );
					for( x = 0; x < events.length; x++ )
					{
						expandedEvents.innerHTML += events[x].firstChild.nodeValue;
					}
				}
			}
		}
	}
}
			


function monthEventsReceive()
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
				return false;
			}
			// clear existing lists
			eventList = document.getElementById( 'eventListing' );
			while( eventList.childNodes.length > 0 )
			{
				eventList.removeChild( eventList.childNodes[0] );
			}
			expiredEventList = document.getElementById( 'expiredEventListing' );
			while( expiredEventList.childNodes.length > 0 )
			{
				expiredEventList.removeChild( expiredEventList.childNodes[0] );
			}
			expandedEvents = document.getElementById( 'eventsExpanded' );
			while( expandedEvents.childNodes.length > 0 )
			{
				expandedEvents.removeChild( expandedEvents.childNodes[0] );
			}
			//get and populate new ones
			eventCount = response.getElementsByTagName( 'eventCount' )[0].firstChild.nodeValue;
			expiredEventCount = response.getElementsByTagName( 'expiredEventCount' )[0].firstChild.nodeValue;
			monthName = response.getElementsByTagName( 'monthName' )[0].firstChild.nodeValue;
			year = response.getElementsByTagName( 'year' )[0].firstChild.nodeValue;
			bPastMonth = response.getElementsByTagName( 'bPastMonth' )[0].firstChild.nodeValue;
			if ( bPastMonth == 1 )
			{
				document.getElementById( 'futureEventsHeader' ).innerHTML = '';
				document.getElementById( 'futureEventsHeaderBreak' ).style.display = 'none';
			}
			else
			{
				document.getElementById( 'futureEventsHeader' ).innerHTML = monthName + " " + year;
				document.getElementById( 'futureEventsHeaderBreak' ).style.display = 'block';
			}
			if ( expiredEventCount > 0 || bPastMonth == 1 )
			{
				document.getElementById( 'expiredEventsHeader' ).innerHTML = "Past events in " + monthName;
				document.getElementById( 'expiredEventsHeaderBreak' ).style.display = 'block';
			}
			else
			{
				document.getElementById( 'expiredEventsHeader' ).innerHTML = '';
				document.getElementById( 'expiredEventsHeaderBreak' ).style.display = 'none';
			}
			if ( bPastMonth || expiredEventCount > 0 )
			{
				document.getElementById( 'expiredEventsHeader' ).style.display = 'block';
			}
			if ( bPastMonth == 0 )
			{
				document.getElementById( 'futureEventsHeader' ).style.display = 'block';
			}
			if ( eventCount > 0 )
			{
				events = response.getElementsByTagName('event');
				for( x = 0; x < events.length; x++ )
				{
					eventList.innerHTML += events[x].firstChild.nodeValue;
				}
			}
			if ( expiredEventCount > 0 )
			{
				events = response.getElementsByTagName('expiredEvent');
				for( x = 0; x < events.length; x++ )
				{
					expiredEventList.innerHTML += events[x].firstChild.nodeValue;
				}
			}
		}
	}
}
