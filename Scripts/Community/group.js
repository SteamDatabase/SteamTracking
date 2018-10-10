
CACHE_LIFETIME_SECS = 30;

var g_bLoadingGroupPage = false;
var g_rgPendingRequestedURL = null;
var g_strActiveTab;
var g_strActiveURL;
var g_strGroupURL;
var g_rgPageContentCache = {};
var g_oRecommendedApps = null;
function InitGroupPage( strGroupBaseURL, strActiveTab )
{
	g_strGroupURL = strGroupBaseURL;
	g_strActiveTab = strActiveTab;
	g_strActiveURL = '';
	BindOnHashChange( OnGroupHashChange );
	OnGroupHashChange( window.location.hash, true );
}

function ValidateURLRoot( url, base )
{

	var elAnchor = document.createElement("a");
	elAnchor.href = url;
	return elAnchor.href.startsWith( base );
}

function OnGroupHashChange( hash, bInitialLoad )
{
	var strTab = 'overview';
	var url = '';
	if ( hash.length > 1 )
	{
		hash = hash.substr ( 1 );	// skip the #
		var rgMatches = hash.match ( /^[^\^]*/ );

		if ( rgMatches && rgMatches[ 0 ] )
		{
			url = rgMatches[ 0 ];
			url = url.replace ( /(\.|%2E)+([\/\\]|%2F|%5C)/g, '' );	//clean out any ./ or ../ in the URL
			strTab = url.match ( /^[a-zA-Z]*/ )[ 0 ];
		}
	}
	if ( !ValidateURLRoot ( url, "https:\/\/steamcommunity.com\/groups\/") )
	{
		console.log("Failed to load URL: %s", url );
		return;
	}


	if ( url != g_strActiveURL )
	{
		if ( bInitialLoad )
		{
			// we just loaded the page and we're immediately navigating to a sub page,
			//	flip over to the dynamic div now so there's no flash of the overview tab/page while
			//	we wait for the AJAX
			$('group_tab_content_overview').hide();
			$('group_page_dynamic_content').show();
			FlipToTab( strTab );
		}
		LoadURL( strTab, url );
	}
	else if ( bInitialLoad )
	{
		// not flipping to another tab, so load trending topics on the group overview page
		LoadTrendingTopics();
	}
}

function LoadURL( strTab, url )
{
	if ( g_bLoadingGroupPage )
	{
		g_rgPendingRequestedURL = {strTab: strTab, url: url };
		return;
	}

	if ( url == '' || url == '/' || url == 'overview' )
	{
		$('group_tab_content_overview').show();
		$('group_page_dynamic_content').hide();
		g_strActiveURL = url;
		FlipToTab( 'overview' );
		return;
	}

	var tsNow = new Date().getTime();
	var rgCacheData = g_rgPageContentCache[ url ];
	if ( !rgCacheData  || ( tsNow - rgCacheData.timestamp > CACHE_LIFETIME_SECS * 1000 ) )
	{
		g_bLoadingGroupPage = true;
		new Ajax.Request( g_strGroupURL + '/' + url, {
			method: 'get',
			parameters: { content_only: true },
			onComplete: OnGroupContentLoadComplete.bind( null, strTab, url )
		} );
	}
	else
	{

		FlipToTab( strTab );
		$('group_page_dynamic_content').childElements().invoke( 'remove' );
		ScrollToIfNotInView( 'group_tab_overview', 20, 150 );

		$('group_page_dynamic_content').appendChild( rgCacheData.html );
		g_strActiveURL = url;
	}
}

function OnGroupContentLoadComplete( strTab, url, transport )
{
	g_bLoadingGroupPage = false;

	FlipToTab( strTab );
	$('group_page_dynamic_content').childElements().invoke( 'remove' );
	ScrollToIfNotInView( 'group_tab_overview', 20, 150 );


		if ( transport.responseJSON == null )
	{
		var elContent = new Element( 'div' );
		$('group_page_dynamic_content').appendChild( elContent );
		elContent.update( transport.responseText );

		g_rgPageContentCache[ url ] = {
			timestamp: new Date().getTime(),
			html: elContent
		};
	}

	g_strActiveURL = url;

	if ( g_rgPendingRequestedURL )
	{
		LoadURL( g_rgPendingRequestedURL.strTab, g_rgPendingRequestedURL.url );
		g_rgPendingRequestedURL = null;
	}
}

function FlipToTab( strTab )
{
	$('group_tab_' + g_strActiveTab).removeClassName( 'active' );
	$('group_tab_' + strTab).addClassName( 'active' );

	$J('.responsive_tab_select > option').each( function() {
		if ( $J(this).data('tabName') == strTab )
			$J(this).parent().val( $J(this).attr('value') );
	} );

	if ( strTab != 'overview' )
	{
		$('group_tab_content_overview').hide();
		$('group_page_dynamic_content').show();
	}
	else
	{
		LoadTrendingTopics();
	}

	g_strActiveTab = strTab;
}

g_bTrendingTopicsLoading = false;
function LoadTrendingTopics()
{
	var elTrendingTopics = $('group_trending_topics');
	if ( elTrendingTopics.children.length == 0 )
	{
		elTrendingTopics.update('<div id="group_trending_topics_pending"><img src="https://steamcommunity-a.akamaihd.net/public/images/login/throbber.gif"></div>');
		g_bTrendingTopicsLoading = true;
		new Ajax.Updater( elTrendingTopics, g_strGroupURL + '/trendingtopics', {method: 'get', onSuccess: function() { Forum_InitTooltips.defer(); } } );
	}
}

Event.observe( window, 'load', function() {
	if ( Prototype.Browser.IE )
	{
		var rv = -1;
		var ua = navigator.userAgent;
		var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		if (re.exec(ua) != null)
			rv = parseFloat( RegExp.$1 );

		if ( rv < 8 )
		{
			$(document.body).addClassName('nodatauri');
		}
	}
} );



/* Event page cruft */


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
	createQuery2( getEventURL, dayEventsReceive, postData );
}

var calCurrentClass;
function dayEventsReceive()
{
	if ( req.readyState == 4 )
	{
		if ( req.status == 200 )
		{
			var response = req.responseXML.documentElement;
			updateInProgress = false;
			var results = response.getElementsByTagName('results')[0].firstChild.nodeValue;
			if ( results != 'OK' )
			{
				alert( results );
				return false;
			}
			// clear existing list
			var expandedEvents = document.getElementById( 'eventsExpanded' );
			while( expandedEvents.childNodes.length > 0 )
			{
				expandedEvents.removeChild( expandedEvents.childNodes[0] );
			}
			var eventCount = response.getElementsByTagName( 'eventCount' )[0].firstChild.nodeValue;
			var expiredEventCount = response.getElementsByTagName( 'expiredEventCount' )[0].firstChild.nodeValue;
			if ( eventCount > 0 || expiredEventCount > 0 )
			{
				var mdy = response.getElementsByTagName( 'mdy' )[0].firstChild.nodeValue;
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
				var selectedEvent = response.getElementsByTagName( 'selectedEvent' )[0].firstChild.nodeValue;
				expandedEvents.innerHTML += '<p class="sectionText" id="fullEventTitle">Showing events for ' + mdy + '</p>';
				if ( eventCount > 0 )
				{
					var events = response.getElementsByTagName( 'event' );
					for( var x = 0; x < events.length; x++ )
					{
						expandedEvents.innerHTML += events[x].firstChild.nodeValue;
					}
				}
				if ( expiredEventCount > 0 )
				{
					var events = response.getElementsByTagName( 'expiredEvent' );
					for( var x = 0; x < events.length; x++ )
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
			var response = req.responseXML.documentElement;
			updateInProgress = false;
			var results = response.getElementsByTagName('results')[0].firstChild.nodeValue;
			if ( results != 'OK' )
			{
				alert( results );
				return false;
			}
			// clear existing lists
			var eventList = document.getElementById( 'eventListing' );
			while( eventList.childNodes.length > 0 )
			{
				eventList.removeChild( eventList.childNodes[0] );
			}
			var expiredEventList = document.getElementById( 'expiredEventListing' );
			while( expiredEventList.childNodes.length > 0 )
			{
				expiredEventList.removeChild( expiredEventList.childNodes[0] );
			}
			var expandedEvents = document.getElementById( 'eventsExpanded' );
			while( expandedEvents.childNodes.length > 0 )
			{
				expandedEvents.removeChild( expandedEvents.childNodes[0] );
			}
			//get and populate new ones
			var eventCount = response.getElementsByTagName( 'eventCount' )[0].firstChild.nodeValue;
			var expiredEventCount = response.getElementsByTagName( 'expiredEventCount' )[0].firstChild.nodeValue;
			var monthName = response.getElementsByTagName( 'monthName' )[0].firstChild.nodeValue;
			var year = response.getElementsByTagName( 'year' )[0].firstChild.nodeValue;
			var bPastMonth = response.getElementsByTagName( 'bPastMonth' )[0].firstChild.nodeValue;
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
				var events = response.getElementsByTagName('event');
				for( var x = 0; x < events.length; x++ )
				{
					eventList.innerHTML += events[x].firstChild.nodeValue;
				}
			}
			if ( expiredEventCount > 0 )
			{
				var events = response.getElementsByTagName('expiredEvent');
				for( var x = 0; x < events.length; x++ )
				{
					expiredEventList.innerHTML += events[x].firstChild.nodeValue;
				}
			}
		}
	}
}


function validateSearchSubmit()
{
	var tbox = document.getElementById( 'searchKey' );
	if ( tbox.value == '' )
	{
		return false;
	}
	var elForm = $('searchEditForm');
	window.location = elForm.action + '?' + elForm.serialize();
}

function ConfirmLeaveGroup( groupName )
{
	if ( window.confirm( 'You are about to leave the group: \n' + groupName + '\nAre you sure?' ) )
	{
		$('leave_group_form').submit();
	}
}

function ConfirmCancelJoinRequest( groupName )
{

	ShowConfirmDialog( 'Cancel Request', 'You are about to cancel your pending membership request. Are you sure?', 'Yes' )
		.done( function() {
            $J('#leave_group_form').submit();
		} );
}


function Curator_CreateOrEditReview( groupid, create_only )
{
	// create the review
	$J.ajax({
		url: 'https://steamcommunity.com/groups/' + groupid + '/createrecommendation/',
		type: 'POST',
		data: {
			sessionID: g_sessionID,
			appid: $J('#curationAppIDInput').val(),
			appname: $J('#curationAppInput').val(),
			blurb: $J('#curationBlurbInput').val(),
			link_url: $J('#curationURLInput').val(),
			recommendation_state: $J('input[name=recommendation_state]:checked').val(),
			received_compensation: $J('#curationReceivedCompensation').is(':checked') ? 1 : 0,
			received_for_free: $J('#curationReceivedForFree').is(':checked') ? 1 : 0,
			create_only: create_only?1:0
		},
		success: function( data, textStatus, jqXHR ) {
			if ( data.success == 1 )
			{
				// great, go back to the front page
				window.location = 'https://steamcommunity.com/groups/' + groupid + '/curation';
			}
			else if ( data.error )
			{
				ShowAlertDialog( 'Could not create review', data.error );
			}
			else
			{
				ShowAlertDialog( 'Could not create review', 'The Steam Servers are currently too busy to create your review. Please try again later.' );
			}
		},
		error: function( jqXHR, textStatus, errorThrown ) {
			// uh oh
			ShowAlertDialog( 'Could not create review', 'The Steam Servers are currently too busy to create your review. Please try again later.' );
		}
	});
}

function Curator_CreateOrEditRecommendation( groupid, create_only )
{
	// create the recommendation
	$J.ajax({
		url: 'https://steamcommunity.com/groups/' + groupid + '/createrecommendation/',
		type: 'POST',
		data: {
			sessionID: g_sessionID,
			appid: $J('#curationAppIDInput').val(),
			appname: $J('#curationAppInput').val(),
			blurb: $J('#curationBlurbInput').val(),
			link_url: $J('#curationURLInput').val(),
			create_only: create_only?1:0
		},
		success: function( data, textStatus, jqXHR ) {
			if ( data.success == 1 )
			{
				// great, go back to the front page
				window.location = 'https://steamcommunity.com/groups/' + groupid + '/curation';
			}
			else if ( data.error )
			{
				ShowAlertDialog( 'Could not create recommendation', data.error );
			}
			else
			{
				ShowAlertDialog( 'Could not create recommendation', 'The Steam Servers are currently too busy to create your recommendation. Please try again later.' );
			}
		},
		error: function( jqXHR, textStatus, errorThrown ) {
			// uh oh
			ShowAlertDialog( 'Could not create recommendation', 'The Steam Servers are currently too busy to create your recommendation. Please try again later.' );
		}
	});
}

function Curator_UpdateCharacterCount( textareaid, counterid, maxchars )
{
	var len = $J(textareaid).val().length;
	var text = '%s characters remaining';
	$J( counterid ).html( text.replace( '%s', maxchars-len ) );
}

function Curator_Follow( groupid, bFollow )
{
	$J.ajax({
		url: 'https://steamcommunity.com/groups/' + groupid + '/followcurator/',
		type: 'POST',
		data: {
			sessionID: g_sessionID,
			follow: bFollow
		},
		success: function( data, textStatus, jqXHR ) {
			if ( data.success == 1 )
			{
				if ( data.following )
				{
					$J('#group_curation_follow_button').html( 'Stop Following' );
				}
				else
				{
					$J('#group_curation_follow_button').html( 'Follow this Curator' );
				}

				$J('#group_curation_follow_link').attr( 'onclick', "Curator_Follow('" + groupid + "', " + (data.following?'0':'1') + "); return false;" );

				if ( data.total_followers )
				{
					$J('#curator_follower_count').html( data.total_followers );
				}
			}
			else if ( data.error )
			{
				ShowAlertDialog( 'Could not change follow state', data.error );
			}
			else
			{
				ShowAlertDialog( 'Could not change follow state', 'Sorry! There was an error with the servers and you\'ll have to try to do this again later.' );
			}
		},
		error: function( jqXHR, textStatus, errorThrown ) {
			// uh oh
			ShowAlertDialog( 'Could not change follow state', 'Sorry! There was an error with the servers and you\'ll have to try to do this again later.' );
		}
	});
}

function Curator_DeleteReview( groupid, appid, appname )
{
	var prompt_text = 'Do you want to delete your review of %s?';
	prompt_text = prompt_text.replace( '%s', appname );
	var dialog = ShowConfirmDialog( 'Delete review', prompt_text, 'Delete review' );
	dialog.done( function( reason ) {
		$J.ajax({
			url: 'https://steamcommunity.com/groups/' + groupid + '/deleterecommendation/',
			type: 'POST',
			data: {
				sessionID: g_sessionID,
				appid: appid
			},
			success: function( data, textStatus, jqXHR ) {
				dialog = null;
				if ( data.success == 1 )
					dialog = ShowAlertDialog( 'Review deleted', data.message );
				else if ( data.error )
					dialog = ShowAlertDialog( 'Could not delete review', data.error );
				else
					dialog = ShowAlertDialog( 'Could not delete review', 'Sorry! There was an issue with the Steam servers and the review could not be deleted. Please try again later.' );

				// reload
				dialog.done( function( reason ) {
					window.location = 'https://steamcommunity.com/groups/' + groupid + '/curation';
				});
			},
			error: function( jqXHR, textStatus, errorThrown ) {
				// uh oh
				ShowAlertDialog( 'Could not delete review', 'Sorry! There was an issue with the Steam servers and the review could not be deleted. Please try again later.' );
			}
		});
	});
}

function Curator_DeleteRecommendation( groupid, appid, appname )
{
	var prompt_text = 'Do you want to delete your recommendation of %s?';
	prompt_text = prompt_text.replace( '%s', appname );
	var dialog = ShowConfirmDialog( 'Delete recommendation', prompt_text, 'Delete recommendation' );
	dialog.done( function( reason ) {
		$J.ajax({
			url: 'https://steamcommunity.com/groups/' + groupid + '/deleterecommendation/',
			type: 'POST',
			data: {
				sessionID: g_sessionID,
				appid: appid
			},
			success: function( data, textStatus, jqXHR ) {
				dialog = null;
				if ( data.success == 1 )
					dialog = ShowAlertDialog( 'Recommendation deleted', data.message );
				else if ( data.error )
					dialog = ShowAlertDialog( 'Could not deleted recommendation', data.error );
				else
					dialog = ShowAlertDialog( 'Could not deleted recommendation', 'Sorry! There was an issue with the Steam servers and the recommendation could not be deleted. Please try again later.' );

				// reload
				dialog.done( function( reason ) {
					window.location = 'https://steamcommunity.com/groups/' + groupid + '/curation';
				});
			},
			error: function( jqXHR, textStatus, errorThrown ) {
				// uh oh
				ShowAlertDialog( 'Could not deleted recommendation', 'Sorry! There was an issue with the Steam servers and the recommendation could not be deleted. Please try again later.' );
			}
		});
	});
}


function Curator_SetDetails( groupid, tagline, gaTrackingID )
{
	$J.ajax({
		url: 'https://steamcommunity.com/groups/' + groupid + '/setcuratordetails/',
		type: 'POST',
		data: {
			sessionID: g_sessionID,
			tagline: tagline,
			google_analytics_trackingid: gaTrackingID
		},
		success: function( data, textStatus, jqXHR ) {
			if ( data.success == 1 )
			{
				// just reload, this page shows the result
				window.location = 'https://steamcommunity.com/groups/' + groupid + '/curation';
			}
			else if ( data.error )
			{
				ShowAlertDialog( 'Could not set tagline', data.error );
			}
			else
			{
				ShowAlertDialog( 'Could not set tagline', 'Sorry! We failed to talk to the Steam Servers to set your tagline. Please try again later.' );
			}
		},
		error: function( jqXHR, textStatus, errorThrown ) {
			// uh oh
			ShowAlertDialog( 'Could not set tagline', 'Sorry! We failed to talk to the Steam Servers to set your tagline. Please try again later.' );
		}
	});
}

function ConfirmDeleteAnnouncement( deleteURL )
{
	var dialog = ShowConfirmDialog( 'Delete Announcement?', 'Are you sure you want to delete this announcement?' );
	dialog.done( function() {
		top.location.href = deleteURL;
	});
}

function SetGroupState( groupid, clan_type )
{
    ShowPromptDialog( "Change Group State", "Please enter a reason:"
    ).done(	function( note ) {
            if ( !note )
                return;

            $J.post( 'https://steamcommunity.com/actions/SetGroupState', {
                'sessionID' : g_sessionID,
                'steamid' : groupid,
                'note' : note,
                'clan_type' : clan_type
            }).done( function( data ) {
                window.location.reload();
            }).fail( function( jqxhr ) {
                // jquery doesn't parse json on fail
                var data = V_ParseJSON( jqxhr.responseText );
                ShowAlertDialog( 'Change Group Type', 'Failed to change group type.  Message: ' + data.success );
            });
        });
}

function UpdateImageList( rgClanImages, strClanURL )
{
	var eleContainer = $J('#clan_image_list_container > div');
	eleContainer.empty();
	var eleTarget = $J('#body');

	for( var i=0; i < rgClanImages.length; i++ )
	{
		var ele = $J('<div class="clan_image" data-image-filename="%6$s" data-image-id="%5$s" data-image-url="%3$s" data-thumbnail-url="%4$s" ><img src="%1$s" ><span class="delete"/><span class="thumbnail"/><span class="full"/><div class="clan_image_filename">%2$s</div></div>'
				.replace('%1$s', V_EscapeHTML( rgClanImages[i].thumb_url) )
				.replace('%2$s', V_EscapeHTML( rgClanImages[i].file_name ) )
				.replace('%3$s', V_EscapeHTML( rgClanImages[i].url) )
				.replace('%4$s', V_EscapeHTML( rgClanImages[i].thumb_url ) )
				.replace('%5$s', V_EscapeHTML( rgClanImages[i].imageid ) )
				.replace('%6$s', V_EscapeHTML( rgClanImages[i].file_name ) )
		);

		var fnImageDelete = DeleteImage.bind(ele, strClanURL, rgClanImages[i].file_name );
		var fnImageThumb = InsertImage.bind(eleTarget, rgClanImages[i].thumb_url, rgClanImages[i].url );
		var fnImageFull = InsertImage.bind(eleTarget, rgClanImages[i].url, false );

		$J('.delete', ele).on('click', fnImageDelete);
		if( rgClanImages[i].thumb_url != rgClanImages[i].url )
			$J('.thumbnail', ele).text( "Thumbnail"  ).on('click', fnImageThumb);
		else
			$J('.thumbnail', ele).remove();
		$J('.full', ele).text( "Full size" ).on('click', fnImageFull);

		eleContainer.append(ele);
	}
}

function InsertImage( strImageURL, strFullURL, event )
{
	var nCursorPosition = this.prop('selectionStart');
	var strCurrentText = this.val();

	var strInsertText = '[img]' + strImageURL + '[/img]';
	if( strFullURL )
		strInsertText = '[url=' + strFullURL + ']' + strInsertText + '[/url]';

	this.val(strCurrentText.substring(0,  nCursorPosition) + strInsertText + strCurrentText.substring(nCursorPosition, strCurrentText.length));
}

function DeleteImage(strClanURL, strFileName)
{
	var imageid = this.data('image-id');

	var ele = this;

	if( !imageid )
		return false; // ?????

	ShowConfirmDialog( "Delete Image", "Are you sure you want to delete %1$s?<br><br>Old announcements which reference this image will no longer work.".replace("%1$s", V_EscapeHTML( strFileName ) ) )
.done( function() {
		$J.ajax({
			url: strClanURL + '/deleteimage',
			cache: false,
			type: "POST",
			data: { imageid: imageid, sessionid: g_sessionID },
			error: function( jqXHR ) {
				var json = jqXHR.responseJSON;
				var error = 16;
				if ( json && json.hasOwnProperty( "success" ) )
					error = json.success;

				ShowDialog( "Error deleting image", "An error has occurred. Please try again later. (%1$s)".replace('%1$s', error ) );
			},
			success: function( response )
			{
				ele.fadeOut();
			}
		});
	}
);
}

function ClanUploadImage( ele, strClanURL )
{
	var rgFiles = ele.files;
	var nFiles = rgFiles.length;
	if( nFiles < 1 )
	{
		return;
	}
	var strUploadingString = "Uploading image %1$s\/%2$s<br><br>This dialog will automatically close when finished.";

	var dialog = ShowDialog( "Please wait...", '' );

	ProcessNextImage(0, nFiles, rgFiles, dialog, strClanURL)
}

function ProcessNextImage(nImageCurrent, nImagesTotal, rgImages, dialog, strClanURL)
{
	var fd = new FormData();
	fd.append( 'clanimage', rgImages[nImageCurrent] );
	fd.append( 'sessionid', g_sessionID );

	$J('.newmodal_content > div', dialog.GetContent()).html( "Uploading image %1$s\/%2$s<br><br>This dialog will automatically close when finished.".replace('%1$s',nImageCurrent+1).replace('%2$s',nImagesTotal) );

	$J.ajax({
		url: strClanURL + '/uploadimage',
		cache: false,
		type: "POST",
		data: fd,
		contentType: false,
		processData: false,
		error: function( jqXHR ) {
			var json = jqXHR.responseJSON;
			var error = 16;
			if ( json && json.hasOwnProperty( "success" ) )
				error = json.success;

			dialog.Dismiss();
			ShowDialog( "Error uploading image", "An error has occurred. Please try again later. (%1$s)".replace('%1$s', error ) );
		},
		success: function( response )
		{
			nImageCurrent++;
			if( nImageCurrent >= nImagesTotal )
			{
				dialog.Dismiss();

				$J.ajax({
					url: strClanURL + '/getimages',
					cache: false,
					type: "POST",
					error: function( jqXHR ) {
						document.location.reload();
					},
					success: function( response )
					{
						g_rgClanImages = response.images;
						UpdateImageList( g_rgClanImages, strClanURL );
					}
				});



			} else {
				ProcessNextImage(nImageCurrent, nImagesTotal, rgImages, dialog, strClanURL)
			}
		}
	});
}

function OnImageSearch( val )
{
	var rgImages = $J('.clan_image');
	var needle = val.toLowerCase();

	for( var i=0; i<rgImages.length; i++)
	{
		var ele = $J(rgImages[i]);
		var haystack = ele.data('image-filename').toLowerCase();
		if( haystack.indexOf( needle ) == -1 )
			ele.hide();
		else
			ele.show();
	}

	g_scrollbarImages.Reset();
}

function SwapLanguageFields( nNewLanguage )
{
	// First copy the current form data to their submitted fields
	SaveFields();

	// Now copy the requested fields to the editable form
	g_nCurrentLanguage = nNewLanguage;

	var strHeadline = $J('#'+g_nCurrentLanguage+'_headline').val( );
	var strBody = $J('#'+g_nCurrentLanguage+'_body').val( );

	$J('#headline').val( strHeadline );
	$J('#body').val( strBody );

}

function UpdateHighlights()
{
	for( var i=0; i < 29; i++ )
	{
		if( $J('#'+i+'_headline').val() &&  $J('#'+i+'_body').val() )
			$J('#'+i+'_opt').addClass('has_localization');
		else
			$J('#'+i+'_opt').removeClass('has_localization');
	}
}

function SaveFields()
{
	var strHeadline = $J('#headline').val();
	var strBody = $J('#body').val();

	if($J('#'+g_nCurrentLanguage+'_headline').val() != strHeadline || $J('#'+g_nCurrentLanguage+'_body').val() != strBody )
	{
		$J('#'+g_nCurrentLanguage+'_headline').val( strHeadline );
		$J('#'+g_nCurrentLanguage+'_body').val( strBody );
		$J('#'+g_nCurrentLanguage+'_updated').val( 1 );

	}



	UpdateHighlights();

}

function CORSTest( fnOnSuccess )
{
	var strBody = $J( '#body' ).val();
	var regex = /\[img\](.+)\[\/img\]/ig;
	var regexCDN = new RegExp(g_strCDNRegex, 'i');

	var nImages = 0;
	var bShownError = false;


	// Callback for when our image loads (or fails). Show an error if we fail, decrement image count if we pass.
	var fnHandleResult = function( bSuccess, strURL )
	{
		if( bSuccess )
			nImages--;
		else if( !bShownError )
		{
			ShowAlertDialog ( "Cannot load image", "<p>The included image %1$s could not be loaded. It is either missing, or inaccessible from this domain.<\/p>Images hosted on remote domains must set Access Control headers. Refer to <a target=\"_blank\" href=\"https:\/\/developer.mozilla.org\/docs\/Web\/HTTP\/CORS\">this article<\/a> for more information<\/p>".replace('%1$s', V_EscapeHTML( strURL ) ) );
			bShownError = true;
		}

		if( nImages === 0 )
			fnOnSuccess();
	};

	var rgMatch = regex.exec( strBody );

	while( rgMatch !== null )
	{
		var strURL = rgMatch[1];
		if( strURL )
		{
			var strHostName = getHostname( strURL );
			if( !regexCDN.exec( strHostName ) )
			{
				nImages++;

				var img = new Image();

				img.onload = fnHandleResult.bind(null, true, strURL);
				img.onerror = fnHandleResult.bind(null, false, strURL);

				img.crossOrigin = "Anonymous";

				img.src = strURL;
			}
		}

		rgMatch = regex.exec( strBody )
	}


	// If we had no images to test, just pass success.
	if( nImages === 0 )
	{
		fnOnSuccess ();
	}

}


function SaveAnnouncement()
{
	CORSTest( function(){
		SaveFields();
		$('post_announcement_form').submit();
	});

}

function UpdateRecommendations( newState, bToggleFree, bTogglePaid )
{

	if ( !( $J ( "input[name='appids']:checked" ).length > 0 ) )
	{
		ShowAlertDialog( "Cannot update recommendations", "Please select one or more recommendations to update." );
		return;
	}

	ShowConfirmDialog( "Update selected curations?", "Are you sure you want to update these curations? " ).done(
		function()
		{
			var data = {};

			data.sessionID = g_sessionID;
			data.appids = [];

			if( newState !== null )
				data.recommendation_state = newState;

			if( bToggleFree )
				data.toggle_free = 1;

			if( bTogglePaid )
				data.toggle_paid = 1;


			$J.each( $J("input[name='appids']:checked"), function(i, j){
				data.appids.push( j.value );
			} );

			$J.ajax( {
				url: g_strGroupURL + '/updatecurations/',
				type: 'POST',
				data: data,
			} ).done( function ( data ) {
				window.location.reload();
			} ).fail( function( jqxhr ) {
				ShowAlertDialog( "Oops, an error has occurred", "An error has occurred. Please try again later." );
			} );
		}
	);
}

jQuery( function($) {
	var $MemberTiles = $('.grouppage_member_tiles');
	if ( $MemberTiles.length )
	{
		if ( $MemberTiles.is(':visible') )
		{
			LoadDelayedImages( 'member_tiles' );
		}
		else
		{
			// load the member tiles if the page resizes
			$(window ).on('resize.GroupMemberTiles', function() {
				if ( $MemberTiles.is(':visible') )
				{
					LoadDelayedImages( 'member_tiles' );
					$(window ).off('resize.GroupMemberTiles');
				}
			});
		}
	}

	InitBBCodeVideos( false );
});



