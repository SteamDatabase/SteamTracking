

//
// COMMON UI CONTROLS
//

function segmentedControlClicked( element, linkToOpen )
{
	$J( element ).addClass( 'segmentedControlActive' );
	if ( linkToOpen )
		top.location.href = linkToOpen;
}

var lateRegisterActivatableControl; // function to support 'activatableControl' on dynamic objects

$J( function() {

	var g_nActivatableControlCurrentDragTouchID;
	var g_CurrentActiveControlTouch, g_CurrentActiveControlMouse;
	var g_ActivatableControlMouseStartX, g_ActivatableControlMouseStartY;
	var g_nCurrentActiveControlTouchTimeoutID, g_nCurrentActiveControlMouseTimeoutID;
	var g_nActivatableControlDebounceDuration = 50;
	var g_bInhibitMouseEvents = false;
	var g_nInhibitMouseEventsTimeoutID;

	
	$J( '.tableView .tableViewCell:first-child' ).wrapInner( '<div class="tableViewTopShadow"></div>' );
	$J( '.tableView .tableViewCell:last-child' ).css( 'border-bottom', 'none' );
	$J( '.tableView .tableViewCell:visible:last' ).css( 'border-bottom', 'none' );

	
	$J( '.activatableControl' ).on( 'touchstart', onTouchStart );
	$J( '.activatableControl' ).on( 'touchcancel', function( event ) { onTouchFinished( event, false ); } );
	$J( '.activatableControl' ).on( 'touchmove', function( event ) { onTouchFinished( event, false ); } ); // moving during touch cancels a tap event
	$J( '.activatableControl' ).on( 'touchend', function( event ) { onTouchFinished( event, true ); } );

	$J( '.activatableControl' ).on( 'mousedown', onMouseClickStart );
	$J( '.activatableControl' ).on( 'mouseleave', function( event ) { onMouseClickFinished( event ); } );
	$J( '.activatableControl' ).on( 'mouseup', function( event ) { onMouseClickFinished( event ); } );
	$J( '.activatableControl' ).on( 'mousemove', onMouseMoved );

	lateRegisterActivatableControl = function( parentElem, childSelector )
	{
		parentElem.on( 'touchstart', childSelector, onTouchStart );
		parentElem.on( 'touchcancel', childSelector, function( event ) { onTouchFinished( event, false ); } );
		parentElem.on( 'touchmove', childSelector, function( event ) { onTouchFinished( event, false ); } ); // moving during touch cancels a tap event
		parentElem.on( 'touchend', childSelector, function( event ) { onTouchFinished( event, true ); } );

		parentElem.on( 'mousedown', childSelector, onMouseClickStart );
		parentElem.on( 'mouseleave', childSelector, function( event ) { onMouseClickFinished( event ); } );
		parentElem.on( 'mouseup', childSelector, function( event ) { onMouseClickFinished( event ); } );
		parentElem.on( 'mousemove', childSelector, onMouseMoved );
	}

	function inhibitMouseEventsForDuration( duration )
	{
		g_bInhibitMouseEvents = true;
		window.clearTimeout( g_nInhibitMouseEventsTimeoutID );
		g_nInhibitMouseEventsTimeoutID = window.setTimeout( function() {
			g_bInhibitMouseEvents = false;
		}, duration );
	}

	function onTouchStart( event )
	{
		var newTouches = event.originalEvent.changedTouches;
		if ( !g_nActivatableControlCurrentDragTouchID )
		{
			g_nActivatableControlCurrentDragTouchID = newTouches[0].identifier;
			g_CurrentActiveControlTouch = this;
			g_nCurrentActiveControlTouchTimeoutID = window.setTimeout( function() {
				$J( g_CurrentActiveControlTouch ).addClass( 'active' );
			},
			g_nActivatableControlDebounceDuration );
		}
	}

	function onTouchFinished( event, bClick )
	{
		var changedTouches = event.originalEvent.changedTouches;

		if ( g_nActivatableControlCurrentDragTouchID != null )
		{
			for ( var i = 0; i < changedTouches.length; ++ i )
			{
				if ( changedTouches[i].identifier == g_nActivatableControlCurrentDragTouchID )
				{
					g_nActivatableControlCurrentDragTouchID = null;
					window.clearTimeout( g_nCurrentActiveControlTouchTimeoutID );
					$J( g_CurrentActiveControlTouch ).removeClass( 'active' );

					// Avoid bug in Android that fails to inhibit onclick event despite call to preventDefault in onTouchFinished
					if ( bClick && !navigator.userAgent.match(/Android/i) )
					{
						$J( g_CurrentActiveControlTouch ).trigger( 'click' );
						inhibitMouseEventsForDuration( 1000 ); // ignore mouse emulation events
						event.preventDefault();
					}

					g_CurrentActiveControlTouch = null;
				}
			}
		}
	}

	function onMouseClickStart( event )
	{
		if ( g_bInhibitMouseEvents )
		{
			event.stopPropagation();
			event.preventDefault();
			return;
		}

		if ( !g_CurrentActiveControlMouse )
		{
			g_CurrentActiveControlMouse = this;
			g_ActivatableControlMouseStartX = event.screenX;
			g_ActivatableControlMouseStartY = event.screenY;
			g_nCurrentActiveControlMouseTimeoutID = window.setTimeout( function() {
				$J( g_CurrentActiveControlMouse ).addClass( 'active' );
			},
			g_nActivatableControlDebounceDuration );
		}
	}

	function onMouseClickFinished( event )
	{
		if ( g_CurrentActiveControlMouse )
		{
			window.clearTimeout( g_nCurrentActiveControlMouseTimeoutID );
			$J( g_CurrentActiveControlMouse ).removeClass( 'active' );

			g_CurrentActiveControlMouse = null;
		}

		if ( g_bInhibitMouseEvents )
		{
			event.stopPropagation();
			event.preventDefault();
			return;
		}
	}

	function onMouseMoved( event )
	{
		if ( g_CurrentActiveControlMouse && ( event.screenX != g_ActivatableControlMouseStartX ) || ( event.screenY != g_ActivatableControlMouseStartY ) )
		{
			onMouseClickFinished( event );
		}
	}

		$J( '.tableViewCellDisclosureButton' ).on( 'touchstart', inhibitTouch );
	$J( '.tableViewCellDisclosureButton' ).on( 'touchend', inhibitTouch );
	$J( '.tableViewCellDisclosureButton' ).on( 'touchcancel', inhibitTouch );
	$J( '.tableViewCellDisclosureButton' ).on( 'touchmove', inhibitTouch );

	function inhibitTouch( event )
	{
		event.stopPropagation();
	}
});

var g_VCountdownManager = {
	instances : new Array(),
	intervalID : null,
};

function VCountdown( tsEnd, element ) {
	this.m_tsRemaining = tsEnd - g_ServerTime;
	if ( this.m_tsRemaining < 0 )
		this.m_tsRemaining = 0;

	this.m_element = element;

	g_VCountdownManager.instances.push( this );
	if ( !g_VCountdownManager.intervalID )
	{
		g_VCountdownManager.intervalID = window.setInterval( function() {
			g_VCountdownManager.instances.forEach( function( objCountdown ) {
				if ( objCountdown.m_tsRemaining > 0 )
				{
					objCountdown.m_tsRemaining --;
					objCountdown.updateElement();
				}
			} );
		}, 
		1000 );
	}

	this.updateElement = function() {

		var h, m, s;
		h = Math.floor( this.m_tsRemaining / 3600 );
		m = Math.floor( ( this.m_tsRemaining - h * 3600 ) / 60 );
		s = this.m_tsRemaining - h * 3600 - m * 60;

		if ( h < 10 ) h = "0" + h;
		if ( m < 10 ) m = "0" + m;
		if ( s < 10 ) s = "0" + s;
		$J( this.m_element ).text( h + ":" + m + ":" + s );
	}

	this.updateElement();
}

function getCookie( name )
{
	var parts = document.cookie.split("; " + name + "=");
	if ( parts.length == 2 ) return parts.pop().split(";").shift();
}

