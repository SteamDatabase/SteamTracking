
function GotFlashPopup()
{
	var win = window.open( 'http://store.steampowered.com/gotflash','gotflash','width=536,height=546,resize=yes,scrollbars=yes');
	win.focus();
}

//
// Page-able tabs
//
var tabStart = { };
var tabMax = { };
var tabTransition = { };
function PageTab( tab, delta, max, params )
{
	if ( tabTransition[tab] )
		return;
	
	if ( !tabStart[tab] )
		tabStart[tab] = 0;
	if ( !tabMax[tab] )
		tabMax[tab] = 0;
	
	if ( tabStart[tab] + delta >= max )
		return;
	
	tabStart[tab] += delta;
	tabTransition[tab] = true;
	if ( tabStart[tab] > tabMax[tab] )
	{
		if ( !params )
			params = {};
		params.tab = tab;
		params.start = tabStart[tab];
		params.count = delta;
		new Ajax.Updater( 
				'tab_' + tab + '_items', 
				'http://store.steampowered.com/search/tab', 
				{ parameters: params, method: 'get', insertion: 'bottom', onComplete: TabCompletionClosure( tab, delta, max ) } );
		tabMax[tab] = tabStart[tab];
	}
	else 
	{
		RollTab( tab, delta );
		TabUpdateCounts( tab, delta, max );
	}
	
}

function TabCompletionClosure( tab, delta, max )
{
	var tab_closure = tab;
	var delta_closure = delta;
	var max_closure = max;
	return function() { 
		RollTab( tab_closure, delta_closure );
		TabUpdateCounts( tab_closure, delta_closure, max_closure ); 
	};
	
}

function RollTab( tab, delta )
{
	var ydiff = -RowHeightForTab( tab ) * delta;
	if ( $('tab_' + tab + '_items' ).hasClassName( 'summersale' ) )
		ydiff = -(RowHeightForTab( tab ) + 6) * (delta / 2);
	new Effect.Move( $('tab_' + tab + '_items'), {y: ydiff, afterFinish: TabScrollFinishClosure( tab, delta ) } );
	Effect.ScrollTo( $('tab_' + tab + '_items').up('.tabarea' ), { afterFinish: TabScrollFinishClosure( tab, delta ) } );
}

function TabScrollFinishClosure( tab, delta )
{
	var tab_closure = tab;
	var delta_closure = delta;
	return function() { 
		tabTransition[tab_closure] = false; 
	};
}

function TabUpdateCounts( tab, delta, max )
{
	if ( $('tab_' + tab + '_count_start') )
	{
		$('tab_' + tab + '_count_start').update( tabStart[tab] + 1 );
		$('tab_' + tab + '_count_end').update( Math.min( tabStart[tab] + Math.abs(delta), max ) );
	}
	else
	{
		$('tab_' + tab + '_count').update( (tabStart[tab] + 1) + '-' + Math.min( tabStart[tab] + Math.abs(delta), max ) );
	}
	if ( tabStart[tab] > 0 )
		$('tab_' + tab + '_prev').style.visibility='visible';
	else
		$('tab_' + tab + '_prev').style.visibility='hidden';
	
	if ( tabStart[tab] + delta >= max )
		$('tab_' + tab + '_next').style.visibility='hidden';
	else
		$('tab_' + tab + '_next').style.visibility='visible';
}

function RowHeightForTab( tab )
{
	var tabRow = $('tab_' + tab + '_items' ).down( '.tab_row' );
	return tabRow.getHeight();
}

function TabSelect( elem, target )
{
	$(elem).siblings().invoke( 'removeClassName', 'active')
	$(elem).addClassName( 'active' );

	if( target == "tab_1_content" )
		target = GetDefaultTabSelection();

	var tab_content = $(target);
	tab_content.siblings().invoke( 'hide' );
	tab_content.show();
}

function TabSelectStealth( target )
{
	var tab_content = $(target);
	tab_content.siblings().invoke( 'hide' );
	tab_content.show();

	SetDefaultTabSelection( target );
}

function GetDefaultTabSelection()
{
	var cookies = document.cookie.split(";");
	for( var i = 0; i < cookies.length; i++ )
	{
		var key = cookies[i].substr( 0, cookies[i].indexOf( "=" ) );
		var value = cookies[i].substr( cookies[i].indexOf( "=" ) + 1 );
		key = key.replace( /^\s+|\s+$/g, "" );

		if( key == "store_newreleases_filter_dlc" )
			return unescape( value );
	}
	return "tab_filtered_dlc_content";
}

function SetDefaultTabSelection( tab )
{
	var expirationDate = new Date();
	expirationDate.setDate( expirationDate.getDate() + 365 );
	var cookieValue = escape( tab ) + "; expires=" + expirationDate.toUTCString() + "; path=/";

	document.cookie = "store_newreleases_filter_dlc=" + cookieValue;
}

function InitTabDefaults()
{
	TabSelectStealth( GetDefaultTabSelection() );
}

function ScrollSmallCaps( name, delta, pageSize, totalCount, params )
{	
	var targetid = 'sm_cap_' + name + '_scroll';
	var elem = $( targetid );
	if ( elem.effect )
		return;
	
	if ( !elem.curPos ) 
	{
		elem.curPos = 0;
	}
	if ( !elem.maxLoaded )
	{
		elem.maxLoaded = 0;
	}
	
	elem.curPos += delta;
	
	if ( elem.curPos > elem.maxLoaded )
	{
		elem.effect = true;
		elem.maxLoaded++;
		elem.style.width = ( ( elem.maxLoaded + 2 ) * 614 ) + 'px';
		
		if ( !params )
			params = {};
		params.name = name;
		params.start = elem.curPos * pageSize + pageSize; // we are always loading one page ahead
		params.count = pageSize;
		new Ajax.Updater( 
				targetid, 
				'http://store.steampowered.com/search/smallcapscroll', 
				{ parameters: params, method: 'get', insertion: 'bottom', onComplete: UpdateSmallCapControl.bind( window, targetid, delta, pageSize, totalCount ) } );
	}
	else
	{
		UpdateSmallCapControl( targetid, delta, pageSize, totalCount );
	}

}

function ScrollStaticSmallCaps( targetid, delta, pageSize, totalCount )
{
	var elem = $( targetid );
	if ( elem.effect )
		return;
	
	if ( !elem.curPos ) 
	{
		elem.curPos = 0;
	}
	
	elem.curPos += delta;
	
	UpdateSmallCapControl( targetid, delta, pageSize, totalCount );
}

function ScrollCarouselSmallCaps( targetid, delta, pageSize, totalCount )
{
	var elem = $( targetid );
	if ( elem.effect )
		return;
	
	if ( !elem.curPos ) 
	{
		elem.curPos = 0;
	}
	
	elem.curPos += delta;
	
	var max = Math.ceil( totalCount / pageSize ) - 1;

	var nextLink = targetid + '_next';
	var prevLink = targetid + '_prev';
	if ( elem.curPos >= max )
		$(nextLink).addClassName('disabled');
	else 
		$(nextLink).removeClassName('disabled');
	
	if ( elem.curPos <= 0 )
		$(prevLink).addClassName('disabled');
	else
		$(prevLink).removeClassName('disabled');
				
	
	elem.effect = new Effect.Move( elem, {x: -808 * delta, afterFinish: function() { elem.effect = false; }, duration: 0.4 } );

}


function UpdateSmallCapControl( targetid, delta, pageSize, totalCount )
{
	var elem = $( targetid );
	var max = Math.ceil( totalCount / pageSize ) - 1;
	var width = $(elem.parentNode).getWidth();

	var nextLink = targetid + '_next';
	var prevLink = targetid + '_prev';
	if ( elem.curPos >= max )
		$(nextLink).hide();
	else 
		$(nextLink).show();
	
	if ( elem.curPos <= 0 )
		$(prevLink).hide();
	else
		$(prevLink).show();
	
	var pageStart = elem.curPos * pageSize + 1;
	var pageEnd = pageStart + ( pageSize - 1 );
	if ( $( targetid + '_page_start' ) )
		$( targetid + '_page_start' ).update( pageStart );
	if ( $( targetid + '_page_end' ) )
		$( targetid + '_page_end' ).update( Math.min( pageEnd, totalCount ) );
	
	
	elem.effect = new Effect.Move( elem, {x: -width * delta, afterFinish: function() { elem.effect = false; }, duration: 0.4 } );

}

function ShowWithFade( elem )
{
	var elem = $(elem);

	if ( !elem.visible() || elem.hiding )
	{
		elem.hiding = false;
		if ( elem.effect )
			elem.effect.cancel();
		
		if ( Prototype.Browser.IE )
		{
			elem.addClassName( 'suppress_shadow' );
			elem.effect = new Effect.Appear( elem, { duration: 0.2, afterFinish: function() { elem.removeClassName( 'suppress_shadow' ); } } );
		}
		else
		{
			elem.effect = new Effect.Appear( elem, { duration: 0.2 } );
		}
	}
}

function HideWithFade( elem )
{
	var elem = $(elem);
	
	if ( elem.visible() && !elem.hiding )
	{
		if ( elem.effect && !elem.hiding )
			elem.effect.cancel();
		elem.hiding = true;

		if ( Prototype.Browser.IE )
		{
			elem.addClassName( 'suppress_shadow' );
		}
		elem.effect = new Effect.Fade( elem, { duration: 0.2 } );
	}
}

// register some events to dismiss popup (ie, user clicking elsewhere on the window, escape)
//   cleans up event binds afterwards.  clicks to children of "elemIgnore" will not dismiss popup 
function RegisterPopupDismissal( dismissFunc, elemIgnore, bNoGuard )
{
	var dismissHandler = {
		guard: bNoGuard ? 0 : 1,
		dismiss: function( event ) {
			if ( this.elemIgnore )
			{
				var elem = Event.element( event );
				if ( elem.up( '#' + elemIgnore.id ) )
					return;
			}
			// ignore the first click- assume it's the one starting the popup
			if ( this.guard-- > 0 )
				return;
			this.regFunc();
			this.unregister();
		},
		unregister: function() {
			Event.stopObserving( document, 'click', this.boundHandler );
			Event.stopObserving( document, 'keydown', this.boundHandler );
		}
	};
	dismissHandler.regFunc = dismissFunc;
	dismissHandler.elemIgnore = elemIgnore || null;
	dismissHandler.boundHandler = dismissHandler.dismiss.bindAsEventListener( dismissHandler );
	Event.observe( document, 'click', dismissHandler.boundHandler );
	Event.observe( document, 'keydown', dismissHandler.boundHandler );
	
	return dismissHandler;
	
}

function ShowMenu( elemLink, elemPopup, align, valign, bLinkHasBorder )
{
	var elemLink = $(elemLink);
	var elemPopup = $(elemPopup);
	
	AlignMenu( elemLink, elemPopup, align, valign, bLinkHasBorder );
	
	ShowWithFade( elemPopup );
	elemLink.addClassName('focus');
	RegisterPopupDismissal( function() { HideWithFade( elemPopup ); elemLink.removeClassName('focus'); }, elemPopup );
}

function RegisterFlyout( elemLink, elemPopup, align, valign, bLinkHasBorder )
{
	Event.observe( elemLink, 'mouseover', function(event) { FlyoutMenu( elemLink, elemPopup, align, valign, bLinkHasBorder ); } );
	
	Event.observe( elemLink, 'mouseout', HideFlyoutMenu.bindAsEventListener( null, elemLink, elemPopup ) );
	Event.observe( elemPopup, 'mouseout', HideFlyoutMenu.bindAsEventListener( null, elemLink, elemPopup ) );

}

function FlyoutMenu( elemLink, elemPopup, align, valign, bLinkHasBorder )
{
	var elemLink = $(elemLink);
	var elemPopup = $(elemPopup);
	
	if ( !elemPopup.visible() || elemPopup.hiding )
	{
		AlignMenu( elemLink, elemPopup, align, valign, bLinkHasBorder );
		ShowWithFade( elemPopup );
		elemLink.addClassName('focus');
	}
	
}

function HideFlyoutMenu( event, elemLink, elemPopup )
{
	var elemLink = $(elemLink);
	var elemPopup = $(elemPopup);
	var reltarget = (event.relatedTarget) ? event.relatedTarget : event.toElement;
	if ( !reltarget || ( $(reltarget).up( '#' + elemLink.id ) || $(reltarget).up( '#' + elemPopup.id )  ) )
		return;

	// start hiding in a little bit, have to let the fade in animation start before we can cancel it
	window.setTimeout( HideWithFade.bind( null, elemPopup ), 33 );
	elemLink.removeClassName('focus');
}

function AlignMenu( elemLink, elemPopup, align, valign, bLinkHasBorder )
{
	var align = align ? align : 'left';
	
	if ( !valign )
	{
		//if there's not enough room between our spot and the top of the document, we definitely want to drop down
		if ( document.viewport.getScrollOffsets().top + elemLink.viewportOffset().top < nPopupHeight )
			valign = 'bottom'; 
		else
		{			
			// add a little bit of padding so we don't position it flush to an edge if possible
			var nPopupHeight = elemPopup.getHeight() + 8;
			var nSpaceAbove = elemLink.viewportOffset().top;
			var nSpaceBelow = document.viewport.getHeight() - elemLink.viewportOffset().top;
			//otherwise we only want to drop down if we've got enough space below us (measured based on view area)
			// or if there's not enough space above to pop in either direction and there's more space below
			if ( nSpaceBelow > nPopupHeight || ( nSpaceAbove < nPopupHeight && nSpaceBelow > nSpaceAbove ) )
				valign = 'bottom'; 
			else
				valign = 'top';
			
		}
	}

	var borderpx = bLinkHasBorder ? 1 : 0;
	var shadowpx = 12;
	var offsetLeft = 0;
	if ( align == 'left' )
	{
		//elemPopup.style.left = ( elemLink.positionedOffset()[0] - 12 ) + 'px';
		offsetLeft = -shadowpx - borderpx;
	}
	else if ( align == 'right' )
	{
		//elemPopup.style.left = ( elemLink.positionedOffset()[0] + elemLink.getWidth() - elemPopup.getWidth() + 13 ) + 'px';
		offsetLeft = elemLink.getWidth() - elemPopup.getWidth() + shadowpx + borderpx;
	}
	else if ( align == 'leftsubmenu' )
	{
		//elemPopup.style.left = ( elemLink.positionedOffset()[0] - elemPopup.getWidth() + 12 ) + 'px';
		offsetLeft = -elemPopup.getWidth() + shadowpx - borderpx;
	}
	else if ( align == 'rightsubmenu' )
	{
		//elemPopup.style.left = ( elemLink.positionedOffset()[0] + elemLink.getWidth() - 12 ) + 'px';
		offsetLeft = elemLink.getWidth()  - shadowpx + 2 * borderpx;
	}

	var offsetTop = 0;
	if ( valign == 'bottom' )
	{
		//elemPopup.style.top = ( elemLink.positionedOffset()[1] + elemLink.getHeight() - 12 ) + 'px';
		offsetTop = elemLink.getHeight() - 12;
	}
	else if ( valign == 'top' )
	{
		//elemPopup.style.top = ( elemLink.positionedOffset()[1] - elemPopup.getHeight() + 12 ) + 'px';
		offsetTop = -elemPopup.getHeight() + 12;
	}
	else if ( valign == 'bottomsubmenu' )
	{
		//elemPopup.style.top = ( elemLink.positionedOffset()[1] - 12 ) + 'px';
		offsetTop = -shadowpx;
	}


	var bPopupHidden = !elemPopup.visible();

	if ( bPopupHidden )
	{
		// IE can't do this with display: none elements
		elemPopup.style.visibility = 'hidden';
		elemPopup.show();
	}

	elemPopup.clonePosition( elemLink, { setWidth: false, setHeight: false, offsetLeft: offsetLeft, offsetTop: offsetTop } );

	if ( bPopupHidden )
	{
		// restore visibility
		elemPopup.hide();
		elemPopup.style.visibility = 'visible';
	}
}

function GameHover( elem, event, divHover, rgHoverData )
{
	if (!event) var event = window.event;
    elem = $(elem);
	
	var hover = $(divHover);
	
	if ( !hover )
		return;
	
	if ( hover.hiding && hover.visible() && hover.target == elem )
	{
		ShowWithFade( hover );
	}
	else if ( ( !hover.visible() || hover.target != elem ) && !elem.timer )
	{
		elem.bWantsHover = true;
		var strTargetPrefix = '';
		var strUrlTarget = '';
		if ( rgHoverData['type'] == 'app' )
		{
			strTargetPrefix = 'hover_app_';
			strUrlTarget = 'apphover/';
		}
		else if ( rgHoverData['type'] == 'sub' )
		{
			strTargetPrefix = 'hover_sub_';
			strUrlTarget = 'subhover/';
		}
		else
		{
			return;
		}
			
		var targetId = strTargetPrefix + rgHoverData['id'];
		var elemData = $( targetId );
		var steamId = g_SteamID ? g_SteamID : 0;
		var params = rgHoverData['params'] || {};
		if ( !elemData && !elem.ajaxRequest )
		{
			window.setTimeout( function() { 
				if ( elem.bWantsHover && !elem.ajaxRequest ) {
					elem.ajaxRequest = new Ajax.Updater( hover.down('.content'),
								'http://store.steampowered.com/' + strUrlTarget + rgHoverData['id'],
								{ method: 'get', parameters: { u: steamId }, insertion: 'bottom', onComplete: function() { ShowGameHover( elem, divHover, targetId, params ); } } );
				}
			}, 250 );
		}
		elem.timer = window.setTimeout( function() { elem.timer = false; elem.bReadyForHover = true; ShowGameHover( elem, divHover, targetId, params ); }, 500 );
	}
}

function HideGameHover( elem, event, divHover )
{
	
	if ( !divHover )
		return;
	if (!event) var event = window.event;
	var reltarget = (event.relatedTarget) ? event.relatedTarget : event.toElement;
	if ( reltarget && ( $(reltarget).up( '#' + elem.identify() ) /* || $(reltarget).up( '#' + divHover.id ) */ ) )
		return;
	
	if ( elem.timer )
	{
		window.clearTimeout( elem.timer );
		elem.timer = false;
	}
	elem.bWantsHover = false;
	elem.bReadyForHover = false;
	
	if ( Prototype.Browser.IE )
		divHover.hide();
	else
		HideWithFade( divHover );
}

function ShowGameHover( elem, divHover, targetContent, params )
{
	if ( !$( targetContent ) || !elem.bWantsHover || !elem.bReadyForHover )
		return;

	$( targetContent ).siblings().invoke('hide');
	$( targetContent ).show();
	
	var hover_toparea = $( targetContent ).down( '.hover_top_area' );
	if ( params && params.top_area_content )
	{
		hover_toparea.update( params.top_area_content );
		hover_toparea.show();
	}
	else if ( hover_toparea )
	{
		hover_toparea.hide();
	}

	var hover = $(divHover);
	
	//if ( true || !hover.target || hover.target != elem )
	{
		// "show" the hover, but not "visible", letting us do some positioning
		hover.style.visibility = 'hidden';
		hover.show();
		
		hover.clonePosition( elem, {setWidth: false, setHeight: false} );
		var hover_box = hover.down( '.hover_box' );
		var hover_arrow_left = hover.down( '.hover_arrow_left' );
		var hover_arrow_right = hover.down( '.hover_arrow_right' );
		
		if ( Prototype.Browser.IE )
		{
						hover.style.paddingTop = '12px';
			hover_box.style.marginTop = '0px';
		}


				
		var hover_arrow = hover_arrow_left;
		var boxRightViewport = elem.viewportOffset().left + parseInt( elem.getDimensions().width ) + hover_box.getWidth() + 14;
		var nSpaceRight = document.viewport.getWidth() - boxRightViewport;
		var nSpaceLeft = parseInt( hover.style.left ) - hover.getWidth();
		if ( boxRightViewport > document.viewport.getWidth() && nSpaceLeft > nSpaceRight)
		{
						hover.style.left = ( parseInt( hover.style.left ) - hover.getWidth() + 8 ) + 'px';
			hover_arrow = hover_arrow_right;
			hover_arrow_left.hide();
			hover_arrow_right.show();
		}
		else
		{
						hover.style.left = ( parseInt( hover.style.left ) + parseInt( elem.getDimensions().width ) - 8 ) + 'px';
			hover_arrow_left.show();
			hover_arrow_right.hide();
		}
		
		var nTopAdjustment = 0;
		
						if ( elem.getDimensions().height < 98 )
			nTopAdjustment =  elem.getDimensions().height / 2 - 49;
		hover.style.top = ( ( parseInt( hover.style.top ) - 13 ) + nTopAdjustment ) + 'px';

		var boxTopViewport = elem.viewportOffset().top + nTopAdjustment;
		if ( boxTopViewport + hover_box.getHeight() + 8 > document.viewport.getHeight() )
		{
			var nViewportAdjustment = ( hover_box.getHeight() + 8 ) - ( document.viewport.getHeight() - boxTopViewport );
						nViewportAdjustment = Math.min( hover_box.getHeight() - 74, nViewportAdjustment );
			hover.style.top = ( parseInt( hover.style.top ) - nViewportAdjustment ) + 'px';
			
			hover_arrow.style.top = ( 48 + nViewportAdjustment ) + 'px';
		}
		else
		{
			hover_arrow.style.top = '';
		}
		
		hover.hide();
		hover.style.visibility = '';
		
		hover.target = elem;
	}
	
	if ( Prototype.Browser.IE )
	{
		hover.show();
	}
	else
		ShowWithFade( hover );
}

function AddToWishlist( appid, steamworksappid, divToHide, divToShowSuccess, divToShowError, navref )
{
	var url = 'http://store.steampowered.com/friends/addtowishlist';
	if ( navref )
		MakeNavCookie( navref, url );
	new Ajax.Request( url, {
		method: 'post',
		parameters: {appid: appid, steamworksappid: steamworksappid},
		onSuccess: function( transport ) {
			$(divToHide).hide();
			if ( transport.responseJSON )
				$(divToShowSuccess).show();
			else
				$(divToShowError).show();
		}
	});
}

// unlike wishlists, the "divToHide" is only hidden on success
function RecommendGame( appid, steamworksappid, comment, divBtn, onSuccessFunc, divToShowError, navref )
{
	$(divBtn).hide();
	var url = 'http://store.steampowered.com/friends/recommendgame';
	if ( navref )
		MakeNavCookie( navref, url );
	
	new Ajax.Request( url, {
		method: 'post',
		parameters: {appid: appid, steamworksappid: steamworksappid, comment: comment},
		onSuccess: function( transport ) {
			if ( transport.responseJSON )
			{
				$(divToShowError).hide();
				onSuccessFunc();
			}
			else
			{
				$(divBtn).show();
				$(divToShowError).show();
			}
		}
	});
}

//hide a game from being recommended
function HideRecommendation( type, itemid, divBtn, elemContainer )
{
	var parameters = {};
	
	if ( type == 'app' )
		parameters.appid = itemid;
	else if ( type == 'sub' )
		parameters.subid = itemid;
	else
	{
		// invalid arguments
		return false;
	}
	
	$(divBtn).hide();
	
	new Ajax.Request( 'http://store.steampowered.com/recommended/ignorerecommendation/', {
		method: 'post',
		parameters: parameters,
		onSuccess: function( transport ) {
			if ( transport.responseJSON )
			{
				if ( $(elemContainer) )
					$(elemContainer).update( '<div class="recommendation_ignored">Okay, we\'ll recommend something else here next time</div>' );
			}
			else
			{
				$(divBtn).show();
			}
		}
	});
}

var g_OnWebPanelShownHandlers = Array();
function SteamOnWebPanelShown()
{
	for ( var i = 0; i < g_OnWebPanelShownHandlers.length; i++ )
	{
		g_OnWebPanelShownHandlers[i]();
	}
}
function RegisterSteamOnWebPanelShownHandler( f )
{
	g_OnWebPanelShownHandlers.push( f );
}

var g_OnWebPanelHiddenHandlers = Array();
function SteamOnWebPanelHidden()
{
	for( var i = 0; i < g_OnWebPanelHiddenHandlers.length; i++ )
	{
		g_OnWebPanelHiddenHandlers[i]();
	}
}
function RegisterSteamOnWebPanelHiddenHandler( f )
{
	g_OnWebPanelHiddenHandlers.push( f );
}


Event.observe( window, 'load', function() {
	InstrumentLinks();
} );

function InstrumentLinks()
{
	$$('A').each(
		function ( link ) {
			if ( link.bIsInstrumented )
				return;
			
			var navinfo = link.href.match( /[\?&]snr=[^&]*(&|$)/ ); 
			if ( navinfo && !link.href.match( /^javascript/ ) )
			{
				link.bIsInstrumented = true;
				Event.observe( link, 'click', InstrumentedLinkOnClick.bindAsEventListener( null, link ) );
			}
		}
	);
}

function InstrumentedLinkOnClick( event, link )
{
	var navinfo = link.href.match( /[\?&]snr=([^&]*)(&|$)/ ); 
	if ( navinfo )
	{
		// if we matched an ampersand at the end, there are more arguments
		var replacement = '';
		if ( navinfo[2] == '&' )	// there was an ampersand after the snr arg
			replacement = navinfo[0][0];	//keep the first character of the match (a ? or &)
		link.href = link.href.replace( /[\?&]snr=[^&]*(&|$)/, replacement );
		
		MakeNavCookie( navinfo[1], link.href );
	}
	return true;
}

function MakeNavCookie( snr, url )
{
	var dateExpires = new Date();
	dateExpires.setTime( dateExpires.getTime() + 1000 * 60 );
	document.cookie = 'snr=' + snr + '|' + encodeURIComponent( url ) +'; expires=' + dateExpires.toGMTString() + ';path=/';
}

var g_iActiveSpotlight = 0;

function AnimateSpotlightTransition( iCurSpotlight, iNextSpotlight )
{
	var curSpotlight = $('spotlight_' + iCurSpotlight );
	var nextSpotlight = $('spotlight_' + iNextSpotlight );
	
	var elemScroll = $('spotlight_scroll');
	if ( elemScroll.effect )
		elemScroll.effect.cancel();
	var curHeight = elemScroll.getHeight();
	
	if ( !elemScroll.style.height )
		elemScroll.style.height = curHeight + 'px';
	
	curSpotlight.style.position = 'absolute';
	nextSpotlight.style.position = 'absolute';
	
	var targetHeight = nextSpotlight.getHeight();
	if ( targetHeight != curHeight )
		elemScroll.effect = new Effect.Morph( elemScroll, { style: 'height: ' + targetHeight + 'px;', duration: 0.25 } );
	
	if ( Prototype.Browser.IE )
	{
		curSpotlight.hide();
		nextSpotlight.show();
	}
	else
	{

		if ( curSpotlight.effect ) curSpotlight.effect.cancel();
		curSpotlight.effect = Effect.Fade( curSpotlight, {duration: 0.25 } );
		
	
		if ( nextSpotlight.effect ) nextSpotlight.effect.cancel();
		nextSpotlight.effect = new Effect.Appear( nextSpotlight, {duration: 0.25 } );
	}
}

function NextSpotlight( cMaxSpotlights )
{
	if ( g_iActiveSpotlight + 1 >= cMaxSpotlights )
		return;
	AnimateSpotlightTransition( g_iActiveSpotlight, ++g_iActiveSpotlight );
	UpdateSpotlightControls( cMaxSpotlights );
}

function PrevSpotlight( cMaxSpotlights )
{
	if ( g_iActiveSpotlight <= 0 )
		return;
	AnimateSpotlightTransition( g_iActiveSpotlight, --g_iActiveSpotlight );
	UpdateSpotlightControls( cMaxSpotlights );
}

function UpdateSpotlightControls( cMaxSpotlights )
{
	if ( g_iActiveSpotlight < cMaxSpotlights - 1 )
		$('spotlight_scroll_next').show();
	else
		$('spotlight_scroll_next').hide();
	
	if ( g_iActiveSpotlight > 0 )
		$('spotlight_scroll_prev').show();
	else
		$('spotlight_scroll_prev').hide();
}

function InitDailyDealTimer( elTimer, nServerEndTime )
{
	var nTimeRemaining = nServerEndTime - g_ServerTime;
	if ( nTimeRemaining > 0 )
	{
		var nEndTimeLocal = Math.round( new Date().getTime() / 1000 ) + nTimeRemaining;
		new Countdown( elTimer, nEndTimeLocal );
	}
}

var CCountdownManager = {
	rgCountdowns: [],
	nIntervalId: null,
	bRefreshOnTimerEnd: false,
	
	tsInit: 0,
	bReadyForRefresh: false,
	bTriggeredRefresh: false,

	registerCountdown: function( countdown )
	{
		this.rgCountdowns.push( countdown );
		if ( !this.nIntervalId )
		{
			this.nIntervalId = window.setInterval( this.refreshClocks.bind( this ), 1000 );
			this.tsInit = Math.round( new Date().getTime() / 1000 );
		}
	},

	refreshClocks: function()
	{
		for ( var i = 0; i < this.rgCountdowns.length; i++ )
		{
			var countdown = this.rgCountdowns[i];
			if ( countdown.bEnded )
				continue;

			this.rgCountdowns[i].refreshClock();
			if ( countdown.bEnded && this.bRefreshOnTimerEnd )
				this.refreshOnUserAction();
		}
	},

	refreshOnUserAction: function()
	{
		// if a few seconds have passed, we'll refresh
		if ( !this.bReadyForRefresh && Math.round( new Date().getTime() / 1000 ) - this.tsInit >= 5 )
		{
			Event.observe( document, 'focus', this.doRefresh.bind(this) );
			Event.observe( document, 'mousemove', this.doRefresh.bind(this) );
			this.bReadyForRefresh = true;
		}
	},

	doRefresh: function()
	{
		if ( !this.bTriggeredRefresh )
		{
			this.bTriggeredRefresh = true;
			window.location = window.location;
		}
	}
};

var Countdown = Class.create( {
	elClock: null,
	nEndTime: null,
	bEnded: false,

	initialize: function( elClock, nEndTimeLocalTime )
	{
		this.elClock = elClock;
		this.nEndTime = nEndTimeLocalTime;
		this.bEnded = false;

		this.refreshClock();
		CCountdownManager.registerCountdown( this );
	},
	
	refreshClock: function()
	{
		if ( this.bEnded )
			return;
		
		var timeCur = Math.round( new Date().getTime() / 1000 );
		var secsRemaining = this.nEndTime - timeCur;
	
		if ( secsRemaining < 0 )
		{
			this.bEnded = true;
			secsRemaining = 0;
		}

		var remainDays = Math.floor( secsRemaining / 86400 );
		var remainHours = Math.floor( ( secsRemaining % 86400 ) / 3600 );
		var remainMinutes = Math.floor( ( secsRemaining % 3600 ) / 60 );
		var remainSeconds = secsRemaining % 60;


		this.render( remainDays, remainHours, remainMinutes, remainSeconds );
	},

	render: function( remainDays, remainHours, remainMinutes, remainSeconds )
	{
		var str = '';
		if ( remainDays < 3 )
		{
			remainHours += remainDays * 24;
		}
		else
		{
			str += remainDays + ' days ';
		}
		str += (remainHours < 10 ? '0' : '') + remainHours + ':';
		str += (remainMinutes < 10 ? '0' : '') + remainMinutes + ':';
		str += (remainSeconds < 10 ? '0' : '') + remainSeconds;
		this.elClock.update( str );
	}
});

var GraphicalCountdown = Class.create( Countdown, {
	strImagePath: null,
	strElPrefix: null,
	strExtension: '.png',
	rgLastVals: null,

	initialize: function( $super, nEndTimeLocalTime, strImagePath, strElPrefix )
	{
		this.strImagePath = strImagePath;
		this.strElPrefix = strElPrefix;
		this.rgLastVals = {};
		$super( null, nEndTimeLocalTime );
	},

	render: function( remainDays, remainHours, remainMinutes, remainSeconds )
	{
		this.setImage( 'hours_tens', Math.floor( remainHours / 10 ) );
		this.setImage( 'hours_units', remainHours % 10 );
		this.setImage( 'minutes_tens', Math.floor( remainMinutes / 10 ) );
		this.setImage( 'minutes_units', remainMinutes % 10 );
		this.setImage( 'seconds_tens', Math.floor( remainSeconds / 10 ) );
		this.setImage( 'seconds_units', remainSeconds % 10 );
	},

	setImage: function( idSuffix, val )
	{
		if ( this.rgLastVals[idSuffix] != val )
		{
			$(this.strElPrefix + idSuffix).src = this.strImagePath + val + this.strExtension;
			this.rgLastVals[idSuffix] = val;
		}
	}
});


