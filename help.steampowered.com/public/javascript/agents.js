
var $ = jQuery;

ProgressGraph = {
	SetupGraph: function( parentDiv ) 
	{
		// First create children/dom for the graph contents
		var canvas = ProgressGraph.CreateGraphDOM( parentDiv );

		// Setup some variables we'll capture in closure for update function
		var percentComplete = parentDiv.data( 'curval' ) / parentDiv.data( 'targetval' );

		var currentStartAngle = Math.PI/2;
		var currentEndAngle = currentStartAngle;
		var radiansDistance = (2*Math.PI)*percentComplete;

		if ( parentDiv.data( 'endAngle' ) )
		{
			currentEndAngle = parentDiv.data( 'endAngle' );

			// If the new value is smaller than the old one we clear and fully redraw the 
			// graph directly to the new target value.  Otherwise we don't clear and we 
			// allwo the incremental redraw to occur animating our further progress.
			if ( currentEndAngle - (Math.PI/2) > radiansDistance )
			{
				currentEndAngle = (Math.PI / 2) + radiansDistance;
				parentDiv.data( 'endAngle', currentEndAngle );
				$(canvas).data( 'cleared', 0 );
			}
		}
		else
		{
			parentDiv.data( 'endAngle', currentStartAngle );
		}

		var incrementValue = radiansDistance / 60;
		var currentColor = '#95C2F8';
		var backgroundColor = '#313947';
		var lineRadius = 100;
		var lineWidth = 7;


		var version = parentDiv.data( 'version' );
		var context = canvas.getContext("2d");
		var x = canvas.width / 2;
		var y = canvas.height / 2;

		function updateGraph()
		{
			if ( version < parentDiv.data( 'version' ) )
				return;

			context.clearRect ( 0 , 0 , canvas.width, canvas.height );
			context.beginPath();
			context.arc(x, y, lineRadius, 0, 2 * Math.PI);
			context.lineWidth = lineWidth;
			context.strokeStyle = backgroundColor;
			context.stroke();

			var startAngle = currentStartAngle;
			var endAngle = currentEndAngle;
			var percentComplete = parentDiv.data( 'curval' ) / parentDiv.data( 'targetval' );
			var radiansDistance = (2*Math.PI)*percentComplete;

			currentStartAngle = currentEndAngle - 0.01;
			currentStartAngle = Math.PI/2;
			currentEndAngle = currentEndAngle + incrementValue;

			// Jump ahead to the end a little fast if we weren't going to have space for another iteration
			if ( currentEndAngle - (Math.PI/2) > radiansDistance )
				endAngle =  Math.min( currentEndAngle, (Math.PI / 2) + radiansDistance );

			parentDiv.data('endAngle', endAngle );

			context.beginPath();
			context.arc( x, y, lineRadius, startAngle+Math.PI, endAngle+Math.PI );
			context.lineWidth = lineWidth;
			context.strokeStyle = currentColor;
			context.stroke();

			// Done drawing?
			if ( endAngle - (Math.PI/2) < radiansDistance - 0.0001 )
				setTimeout( updateGraph, 20 );
		}
		setTimeout( updateGraph, 20 );
	},

	CreateGraphDOM: function( parentDiv ) 
	{

		var canvas = parentDiv.find( 'canvas')
		if ( canvas.length )
		{
			canvas = canvas[0];

			div = parentDiv.find( 'div.approval_graph_cur_value' );
			if ( div.length )
				$( div[0] ).html( parentDiv.data('curval') );

			div = parentDiv.find( 'div.approval_graph_target_value' );
			if ( div.length )
				$( div[0] ).html( parentDiv.data('targetval') );
		}
		else
		{
			parentDiv.data( 'version', 0 );
			canvas = $('<canvas class="approval_graph_canvas" width="' + parentDiv.data('graphwidth') + '" height="' + parentDiv.data('graphheight') + '" />');
			parentDiv.append(canvas);
			canvas = canvas[0];

			var div = $('<div />', {class: 'approval_graph_labels'});
			parentDiv.append(div);

			var inner_div = $('<div />', {class: 'approval_graph_labels_inner'});
			div.append(inner_div);

			div = $('<div/>', {class: 'approval_graph_cur_value'});
			div.html(parentDiv.data('curval'));
			inner_div.append(div);

			inner_div.append($('<hr/>'));

			div = $('<div/>', {class: 'approval_graph_target_value_header'});
			div.html(parentDiv.data('targettitle'));
			inner_div.append(div);

			div = $('<div/>', {class: 'approval_graph_target_value'});
			div.html(parentDiv.data('targetval'));
			inner_div.append(div);
		}
		return canvas;
	}
}

var g_DashboardUpdateTimeout;
var g_bDashboardUpdating = false;
var g_nDashboardUpdateRate = 60000;
function UpdateDashboardStats()
{
	clearTimeout( g_DashboardUpdateTimeout );

	if ( g_bDashboardUpdating )
		return;

	g_bDashboardUpdating = true;

	$J.ajax({
		type: "GET",
		url: "https://help.steampowered.com/agents/dashboardstats/",
		data: {  },
		dataType: "json"
	}).done( function( result ) 
	{
		g_DashboardUpdateTimeout = setTimeout( function() { UpdateDashboardStats(); }, g_nDashboardUpdateRate );

		// Update the dashboard graph values then update the graphs visual as well
		if ( result.hasOwnProperty( 'all_responses_today' ) )
		{
			if ( $J('#all_today_graph').data('curval') != result.all_responses_today || $J('#all_today_graph').data('targetval') != result.all_responses_goal_today )
			{
				$J('#all_today_graph').data( 'version', $J('#all_today_graph').data('version')+1 );
				$J('#all_today_graph').data( 'curval', result.all_responses_today );
				$J('#all_today_graph').data( 'targetval', result.all_responses_goal_today );
			}
		}
		if ( result.hasOwnProperty( 'my_responses_today' ) )
		{
			if ( $J('#my_today_graph').data('curval') != result.my_responses_today || $J('#my_today_graph').data('targetval') != result.my_responses_goal_today )
			{
				$J('#my_today_graph').data( 'version', $J('#my_today_graph').data('version')+1 );
				$J('#my_today_graph').data( 'curval', result.my_responses_today );
				$J('#my_today_graph').data( 'targetval', result.my_responses_goal_today );
			}
		}
		if ( result.hasOwnProperty( 'all_responses_yesterday' ) )
		{
			if ( $J('#all_yesterday_graph').data('curval') != result.all_responses_yesterday || $J('#all_yesterday_graph').data('targetval') != result.all_responses_goal_yesterday )
			{
				$J('#all_yesterday_graph').data( 'version', $J('#all_yesterday_graph').data('version')+1 );
				$J('#all_yesterday_graph').data( 'curval', result.all_responses_yesterday );
				$J('#all_yesterday_graph').data( 'targetval', result.all_responses_goal_yesterday );
			}
		}

		if ( result.hasOwnProperty( 'all_approval_stats_inner' ) )
		{
			$J('#all_approval_stats').html( result.all_approval_stats_inner );
		}

		UpdateProgressGraphs();
	} ).always( function()
	{
		g_bDashboardUpdating = false;
	} );
}

function UpdateProgressGraphs()
{
	$('.approval_graph').each( function()
	{
		ProgressGraph.SetupGraph( $(this) );
	} );
}

function UpdateFocus( bMoveToPrevious, bAllowWrap )
{
	// Get the focused element:
	focused = $(document.activeElement)[0];
	focusedTabIndex = focused.tabIndex;

	// Get all focusable elements
	elements = $(".focusable");

	while( 1 )
	{
		var bestIndex = 10000000000;
		if ( bMoveToPrevious )
			bestIndex = -1;

		var bestElement = 0;
		for (i = 0; i < elements.length; ++i)
		{
			if (( !bMoveToPrevious && elements[i].tabIndex > focusedTabIndex ) || ( bMoveToPrevious && elements[i].tabIndex < focusedTabIndex ))
			{
				if (( !bMoveToPrevious && elements[i].tabIndex < bestIndex ) || ( bMoveToPrevious && elements[i].tabIndex > bestIndex ))
				{
					bestIndex = elements[i].tabIndex;
					bestElement = elements[i];
				}
			}
		}

		if ( bestElement )
			break;

		if ( !bAllowWrap )
			break;

		// Clear bAllowWrap and clobber focused index to cause wrap in second pass now
		bAllowWrap = false;
		focusedTabIndex = -1;
		if ( bMoveToPrevious )
			focusedTabIndex = 10000000000;
	}

	if ( bestElement )
	{
		bestElement.focus();
		return true;
	}

	return false;
}

// Find all the approval graph canvas's and set them up to draw
$( document ).ready( function()
{
	UpdateProgressGraphs();
	UpdateDashboardStats();

	UpdateFocus( false, false );

	$(window).keydown(function(e){
		if ( e.which == 40 || ( e.which == 9 && !e.shiftKey ) )
		{
			// Move focused section down
			if ( UpdateFocus( false, e.which == 9 ) )
				e.preventDefault();

		}
		else if ( e.which == 38 || ( e.which == 9 && e.shiftKey ) )
		{
			// Move focused section up
			if ( UpdateFocus( true, e.which == 9 ) )
				e.preventDefault();
		}
	});

	// Handle ascii chars that are typed as hotkeys
	$(window).keypress(function(e) {

		var c = String.fromCharCode( e.which).toLowerCase();

		// Find the focused element, then find any .hotkey children, and try
		// to match the textContent to the hotkey code
		focused = $(document.activeElement);

		// Our focused element has to focusable
		// For example, the body might have focus, in which case we don't want to do anything.
		if ( !focused.hasClass( 'focusable' ) )
		{
			return;
		}

		hotkeys = focused.find( ".hotkey" );
		for( i=0; i < hotkeys.length; ++i )
		{
			if ( hotkeys[i].textContent.toLowerCase() == c )
			{
				hotkeys[i].click();
			}
		}
	});
} );

function ClaimMoreTickets( type, quantity )
{
	// Do ajax call to assign more tickets, put resulting batch into list
	$J.ajax({
		type: "POST",
		url: "https://help.steampowered.com/agents/claimtickets/",
		data: { type: type,
			quantity: quantity,
			assigned: true,
			agentid: g_AgentIDForListing,
			accountid: g_AccountIDForListing,
			state: g_RequestStateForListing,
			refundsupportaction: g_RefundSupportActionForListing,
			sort: g_TicketSortForListing,
			mintimecreated: g_unMinTicketCreateTime,
			maxtimecreated: g_unMaxTicketCreateTime
		},
		dataType: "json"
	}).done(function( result ) 
	{
		if ( result.html )
		{
			$J( '#my_approval_queue_'+type).html( result.html );

			if ( result.first_ticket )
				ExpandTicket( result.first_ticket.ticket_id, result.first_ticket.type );
		}
		else if ( result.count == 0 )
		{
			ShowAlertDialog( 'No more tickets to claim', 'There were no more available tickets to claim at this time.', 'OK' );
		}
	}).fail(function( result )
	{
		ShowAlertDialog( 'Request failed', 'Your request failed on the backend, try again later.', 'OK' );
	});
}

function ReleaseClaimedTickets( type )
{
	// Do ajax call to assign more tickets, put resulting batch into list
	$J.ajax({
		type: "POST",
		url: "https://help.steampowered.com/agents/releaseclaimedtickets/",
		data: { type: type, assigned: true },
		dataType: "json"
	}).done(function( result )
	{
		if ( result.html )
		{
			$J( '#my_approval_queue_'+type).html( result.html );
		}
		else
		{
			ShowAlertDialog( 'Request failed', 'Your request failed on the backend, try again later.', 'OK' );
		}
	}).fail(function( result )
	{
		ShowAlertDialog( 'Request failed', 'Your request failed on the backend, try again later.', 'OK' );
	});
}

function GetNextClaimedTicket( $ticket )
{
	var elNextTicket = $ticket.next();
	if ( elNextTicket.length != 0 && elNextTicket.hasClass( 'help_request_row' ) )
	{
		return elNextTicket;
	}
	else
	{
		return null;
	}
}

var g_ExpandedTicket = 0;
function ExpandTicket( ticket_id, type )
{
	var elHelpRequest = $J('#help_request_' + ticket_id);

	if ( elHelpRequest.hasClass( "expanded" ) )
		return;

	if ( g_ExpandedTicket )
		$J('#help_request_'+g_ExpandedTicket).removeClass('expanded');


	elHelpRequest.addClass('expanded');
	g_ExpandedTicket = ticket_id;

	// Don't reload tickets that have failed (as long as we still have the ticket data loaded)
	// so that we don't stomp our error message.
	if ( elHelpRequest.hasClass( 'failed' ) && elHelpRequest.find( '.button_row' ).length != 0 )
	{
		return;
	}

	elHelpRequest.addClass( 'loading' );

	// Do ajax call to fetch ticket details
	$J.ajax({
		type: "GET",
		url: "https://help.steampowered.com/agents/ticketdetails/"+ticket_id,
		data: {
			type: type,
			assigned: !g_ShowingUnassigned,
			agentid: g_AgentIDForListing,
			accountid: g_AccountIDForListing,
			state: g_RequestStateForListing,
			refundsupportaction: g_RefundSupportActionForListing,
			sort: g_TicketSortForListing
		},
		dataType: "json"
	}).done( function( result ) 
	{
		if( result.html )
		{
			// stale request
			if ( !elHelpRequest.hasClass( "expanded" ) )
				return;
			// Append contents into details div

			$J('#help_request_' + ticket_id + ' .details_row').html(result.html);
			elHelpRequest.focus();
			g_ExpandedTicket = ticket_id;
		}
	}).always( function() {
		$J('#help_request_' + ticket_id).removeClass( 'loading' );
	});

	// Preload the next five tickets that do not have data
	var elNextTicket = elHelpRequest;
	for ( var i = 0; i < 5; i++ )
	{
		elNextTicket = GetNextClaimedTicket( elNextTicket );
		if ( elNextTicket != null )
		{
			if ( elNextTicket.find( '.button_row' ).length == 0 )
			{
				PreloadTicket( elNextTicket.data( 'ticket-id' ), elNextTicket.data( 'ticket-type' ) );
			}
		}
		else
		{
			break;
		}
	}
}

function PreloadTicket( ticket_id, type )
{
	if ( $J('#help_request_' + ticket_id).hasClass( "expanded" ) )
		return;

	$J('#help_request_' + ticket_id).addClass( 'loading' );

	// Do ajax call to fetch ticket details
	$J.ajax({
		type: "GET",
		url: "https://help.steampowered.com/agents/ticketdetails/"+ticket_id,
		data: {
			type: type,
			assigned: !g_ShowingUnassigned,
			agentid: g_AgentIDForListing,
			accountid: g_AccountIDForListing,
			state: g_RequestStateForListing,
			refundsupportaction: g_RefundSupportActionForListing,
			sort: g_TicketSortForListing
		},
		dataType: "json"
	}).done( function( result )
	{
		if( result.html )
		{
			// Append contents into details div
			$J('#help_request_' + ticket_id + ' .details_row').html(result.html);
		}
	}).always( function() {
		$J('#help_request_' + ticket_id).removeClass( 'loading' );
	});
}

var g_CurrentTicketListingPage = [];
function ShowNextTicketListingPage( type )
{
	if ( typeof g_CurrentTicketListingPage[type] === 'undefined' )
		g_CurrentTicketListingPage[type] = 0;

	g_CurrentTicketListingPage[type]++;
	UpdateTicketListing( type );
}

function ShowPreviousTicketListingPage( type )
{
	if ( typeof g_CurrentTicketListingPage[type] === 'undefined' )
		g_CurrentTicketListingPage[type] = 0;

	g_CurrentTicketListingPage[type]--;
	g_CurrentTicketListingPage[type] = Math.max( g_CurrentTicketListingPage[type], 0 );
	UpdateTicketListing( type );
}

function UpdateTicketListing( type )
{
	if ( typeof g_CurrentTicketListingPage[type] === 'undefined' )
		g_CurrentTicketListingPage[type] = 0;

	// Do ajax call to assign more tickets, put resulting batch into list
	$J.ajax({
		type: "POST",
		url: "https://help.steampowered.com/agents/ticketlisting/",
		data: {
			type: type,
			assigned: !g_ShowingUnassigned,
			agentid: g_AgentIDForListing,
			accountid: g_AccountIDForListing,
			state: g_RequestStateForListing,
			refundsupportaction: g_RefundSupportActionForListing,
			sort: g_TicketSortForListing,
			page: g_CurrentTicketListingPage[type],
			mintimecreated: g_unMinTicketCreateTime,
			maxtimecreated: g_unMaxTicketCreateTime
		},
		dataType: "json"
	}).done(function( result )
	{
		if ( result.html )
		{
			$J( '#my_approval_queue_'+type).html( result.html );

			if ( result.first_ticket )
				ExpandTicket( result.first_ticket.ticket_id, result.first_ticket.type );
			else if (g_CurrentTicketListingPage[type] > 0 )
				ShowPreviousTicketListingPage( type );
		}
	}).fail(function( result )
	{
		ShowAlertDialog( 'Request failed', 'Your request failed on the backend, try again later.', 'OK' );
	});
}

function FocusNextTicket( ticket_id )
{
	var elThisTicket = $J( '#help_request_'+ticket_id );
	var elNextTicket = GetNextClaimedTicket( elThisTicket );

	elThisTicket.removeClass('expanded');

	if ( elNextTicket != null )
	{
		// Scroll down so next ticket is in same spot
		var nHeight = elNextTicket.height();
		var nMarginHeight = parseInt( elNextTicket.css( 'margin-top' ).replace( 'px', '' ) ) + parseInt( elNextTicket.css( 'margin-bottom' ).replace( 'px', '' ) );
		var nHeight = nHeight + (nMarginHeight/2);
		window.scrollBy(0, nHeight);

		elNextTicket.focus();
	}
}

function SetTicketStatus( $ticket, strStatus )
{
	$ticket.find( '.help_request_column_5' ).text( strStatus );
}

function ApproveOrDeclineRefund( ticket_id, strRefCode, steamid, action, is_within_release_date_window )
{
	var $request = $J('#help_request_' + ticket_id);
	if ( $request.hasClass( 'disabled') )
	{
		return;
	}

	$request.addClass( 'disabled' );
	$request.addClass( 'loading' );
	$request.removeClass( 'failed' );

	if ( action == 1 )
	{
		SetTicketStatus( $request, 'Processing approval...' );
	}
	else
	{
		SetTicketStatus( $request, 'Processing decline...' );
	}

	ApproveOrDeclineRefundInternal( ticket_id, strRefCode, steamid, action, is_within_release_date_window );

	if ( typeof g_bSingleTicketPage == 'undefined' || !g_bSingleTicketPage )
		FocusNextTicket( ticket_id, 1 );
}

function ApproveOrDeclineRefundInternal( ticket_id, strRefCode, steamid, action, is_within_release_date_window )
{
	var $request = $J('#help_request_' + ticket_id);

	// Do ajax call to update ticket
	$J.ajax({
		type: "GET",
		url: "https://help.steampowered.com/agents/processrefund/" + ticket_id + "/" + strRefCode,
		data: { action: action, steamid: steamid, is_within_release_date_window: is_within_release_date_window },
		dataType: "json"
	}).done( function( result )
	{
		// If we succeeded then close the ticket, otherwise present error to the agent
		if ( result.eresult == 1 )
		{
			// When we remove this request, make sure our focused ticket stays in the same spot on the screen.
			var bLastTicket = GetNextClaimedTicket( $request ) == null;
			var nHeight = $request.height();
			var nMarginHeight = parseInt( $request.css( 'margin-top' ).replace( 'px', '' ) ) + parseInt( $request.css( 'margin-bottom' ).replace( 'px', '' ) );
			var nHeight = nHeight + (nMarginHeight/2);
			$request.remove();
			window.scrollBy(0, -nHeight);

			// If this was the last one, refresh
			if ( bLastTicket && $J('.failed').length == 0 && $J('.loading').length == 0 )
			{
				UpdateTicketListing( 1 );
			}

			UpdateDashboardStats();
		}
		else if ( result.eresult == 98 && action != 4 )
		{
			// user must refund to wallet. Call again with this state
			ApproveOrDeclineRefundInternal( ticket_id, strRefCode, steamid, 4 );
		}
		else
		{
			if ( !result._dev_simulation_only )
			{
				$request.addClass( 'failed' );
				if ( result.error )
					SetTicketStatus( $request, 'Request failed: ' + result.error );
				else
					SetTicketStatus( $request, 'Request failed: ' + 'The refund failed on the backend, this may be a transient error or a problem with the purchase state that prevents refunding.' + '(' + result.eresult + ')' );
			}


			if ( result._dev_test_email )
			{
				// web universe is dev, so just show a test of the email we generated
				var win = window.open( '','help_agent_dev_test_email_' + ticket_id,'height=584,width=616,resize=yes,scrollbars=yes');
				win.document.open();
				win.document.write( result._dev_test_email );
				win.document.close();
				win.focus();
			}

			if ( result._dev_test_bbcode )
			{
				$J('#_dev_help_request_bbcode_response').html( result._dev_test_bbcode ).parents('.help_request_message').show();
			}
		}
	}).fail(function( result )
	{
		$request.addClass( 'failed' );
		SetTicketStatus( $request, 'Request failed: ' + 'Your request failed on the backend, try again later.' + '(ajax)' );
	}).always(function( result )
	{
		var bResubmitted = (result.eresult == 98 && action != 4);
		if ( !bResubmitted )
		{
			$request.removeClass( 'disabled' );
			$request.removeClass( 'loading' );
		}
	});
}

function AssignHelpRequest( strRefCode, agent_accountid, type )
{
	// Do ajax call to update ticket
	$J.ajax({
		type: "POST",
		url: "https://help.steampowered.com/agents/assignhelprequest/",
		data: { reference_code: strRefCode, agent_accountid: agent_accountid },
		dataType: "json"
	}).done( function( result )
	{
		// If we succeeded then close the ticket, otherwise present error to the agent
		if ( result.eresult == 1 )
		{
			var $request = $J('#help_request_' + ticket_id);
			FocusNextTicket( ticket_id, type );
			$request.remove();
		}
		else
		{
			if ( result.error )
				ShowAlertDialog( 'Couldn\'t re-assign ticket', result.error, 'OK' );
			else
				ShowAlertDialog( 'Couldn\'t re-assign ticket', 'Backend issue - things could be down, you\'ll have to try again later.', 'OK' );
		}
	}).fail(function( result )
	{
		ShowAlertDialog( 'Couldn\'t re-assign ticket', 'Backend issue - things could be down, you\'ll have to try again later.', 'OK' );
	});
}
