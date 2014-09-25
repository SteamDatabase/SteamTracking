
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
	if ( $('tab_' + tab + '_items' ).hasClassName( 'twenty_smallcap_page_items' ) )
	{
		var xdiff = 950;
		if ( delta > 0 )
			xdiff = -xdiff;
		new Effect.Move( $('tab_' + tab + '_items'), {x: xdiff, afterFinish: TabScrollFinishClosure( tab, delta ) } );
	}
	else
	{
		//standard tab
		var ydiff = -RowHeightForTab( tab ) * delta;
		new Effect.Move( $('tab_' + tab + '_items'), {y: ydiff, afterFinish: TabScrollFinishClosure( tab, delta ) } );
	}
	var elTabArea = $('tab_' + tab + '_items').up('.tabarea' );
	if ( elTabArea )
		Effect.ScrollTo( elTabArea, { afterFinish: TabScrollFinishClosure( tab, delta ) } );
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
	$J('#last_tab').val(target);
	$(elem).siblings().invoke( 'removeClassName', 'active')
	$(elem).addClassName( 'active' );

	if( target == "tab_1_content" )
		target = GetDefaultTabSelection();

	var tab_content = $(target);
	tab_content.siblings().invoke( 'hide' );
	tab_content.show();

	if ( typeof GDynamicStore != 'undefined' )
	{
		$J.force_appear();
	}
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
	var value = WebStorage.GetLocal( 'store_newreleases_filter_dlc' );

	if( value == null )
		return "tab_filtered_dlc_content";
	return value;
}

function SetDefaultTabSelection( tab )
{
	WebStorage.SetLocal( 'store_newreleases_filter_dlc', tab );
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
				

	var cb = function( targetid ) {
		var elem = $( targetid );
		elem.effect = false;
		if ( typeof GDynamicStore != 'undefined' )
		{
			$J.force_appear();
			GDynamicStore.HandleCarouselChange( targetid, elem.curPos, pageSize );
		}
	}

	elem.effect = new Effect.Move( elem, {x: -808 * delta, afterFinish: cb.bind( this, targetid ), duration: 0.4 } );

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

		elem.effect = new Effect.Appear( elem, { duration: 0.2 } );
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

function HideMenu( elemLink, elemPopup )
{
	var elemLink = $(elemLink);
	var elemPopup = $(elemPopup);

	HideWithFade( elemPopup );
	elemLink.removeClassName( 'focus' );
	if ( elemLink.dismissHandler )
		elemLink.dismissHandler.unregister();
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
	if ( !reltarget || ( $(reltarget).up( '#' + elemLink.id ) || $(reltarget).up( '#' + elemPopup.id )  ) || elemLink.id == reltarget.id )
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
	var shadowpx = elemPopup.hasClassName( 'popup_block_new' ) ? 0 : 12;
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
		offsetTop = elemLink.getHeight() - shadowpx;
	}
	else if ( valign == 'top' )
	{
		//elemPopup.style.top = ( elemLink.positionedOffset()[1] - elemPopup.getHeight() + 12 ) + 'px';
		offsetTop = -elemPopup.getHeight() + shadowpx;
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
	{
				$(document.body).insert( {bottom: "\t\t<div class=\"hover game_hover\" id=\"global_hover\" style=\"display: none; left: 0; top: 0;\">\r\n\t\t\t<div class=\"game_hover_box hover_box\">\r\n\t\t\t\t<div class=\"content\" id=\"global_hover_content\">\r\n\t\t\t\t<\/div>\r\n\t\t\t<\/div>\r\n\t\t\t<div class=\"hover_arrow_left\"><\/div>\r\n\t\t\t<div class=\"hover_arrow_right\"><\/div>\r\n\t\t<\/div>" });
		hover = $('global_hover');
	}

	if ( !hover )
		return;
	
	if ( hover.hiding && hover.visible() && hover.target == elem )
	{
		ShowWithFade( hover );
	}
	else if ( ( !hover.visible() || hover.target != elem ) && !elem.timer )
	{
		elem.bWantsHover = true;
		var bPublic = rgHoverData['public'];
		var strTargetPrefix = '';
		var strUrlTarget = '';
		if ( rgHoverData['type'] == 'app' )
		{
			strTargetPrefix = 'hover_app_';
			strUrlTarget = 'apphover' + ( bPublic ? 'public' : '' ) + '/';
		}
		else if ( rgHoverData['type'] == 'sub' )
		{
			strTargetPrefix = 'hover_sub_';
			strUrlTarget = 'subhover' + ( bPublic ? 'public' : '' ) + '/';
		}
		else
		{
			return;
		}
			
		var targetId = strTargetPrefix + rgHoverData['id'];
		var elemData = $( targetId );
		var accountId = g_AccountID ? g_AccountID : 0;
		var params = rgHoverData['params'] || {};

		if ( !elemData && !elem.ajaxRequest )
		{
			var rgAjaxParams = { u: accountId };
			if ( bPublic )
			{
				// is cc needed?
				rgAjaxParams = { /*cc: rgHoverData['cc'],*/ l: 'english' };
			}
			if ( rgHoverData['v6'] )
			{
				rgAjaxParams['pagev6'] = true;
			}
			window.setTimeout( function() { 
				if ( elem.bWantsHover && !elem.ajaxRequest ) {
					elem.ajaxRequest = new Ajax.Updater( hover.down('.content'),
								'http://store.steampowered.com/' + strUrlTarget + rgHoverData['id'],
								{ method: 'get', parameters: rgAjaxParams, insertion: 'bottom', onComplete: function() { ShowGameHover( elem, hover, targetId, params ); elem.ajaxRequest = null; } } );
				}
			}, 250 );
		}
		elem.timer = window.setTimeout( function() { elem.timer = false; elem.bReadyForHover = true; ShowGameHover( elem, hover, targetId, params ); }, 500 );
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

	HideWithFade( divHover );
}

function ShowGameHover( elem, divHover, targetContent, params )
{
	if ( !$( targetContent ) || !elem.bWantsHover || !elem.bReadyForHover || !$J.contains(document, elem) )
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
	
	ShowWithFade( hover );
}

function AddToWishlist( appid, divToHide, divToShowSuccess, divToShowError, navref )
{
	var url = 'http://store.steampowered.com/api/addtowishlist';
	if ( navref )
		MakeNavCookie( navref, url );
	new Ajax.Request( url, {
		method: 'post',
		parameters: {appid: appid},
		onSuccess: function( transport ) {
			$(divToHide).hide();
			if ( transport.responseJSON && transport.responseJSON.success )
				$(divToShowSuccess).show();
			else
				$(divToShowError).show();

			if ( typeof GDynamicStore != 'undefined' )
				GDynamicStore.InvalidateCache();
		}
	});
}

function AddToWishlistButton( button, appid, navref )
{
	var url = 'http://store.steampowered.com/api/addtowishlist';
	if ( navref )
		MakeNavCookie( navref, url );
	new Ajax.Request( url, {
		method: 'post',
		parameters: {appid: appid},
		onSuccess: function( transport ) {
			if ( transport.responseJSON && transport.responseJSON.success )
			{
				$J(button).addClass('btn_disabled');
				$J('span',button).text("On Wishlist");
			}
			else
			{
				$J('span',button).text( "Oops, sorry!" );
			}

			if ( typeof GDynamicStore != 'undefined' )
				GDynamicStore.InvalidateCache();
		}
	});
}

function IgnoreButton( button, appid )
{
	$J.post( 'https://store.steampowered.com/recommended/ignorerecommendation/', {
		sessionid: g_sessionID,
		appid: appid
	}).done( function() {
		$J(button).addClass('btn_disabled');
		GDynamicStore.InvalidateCache();
	}).fail( function() {
		ShowAlertDialog( 'Not Interested', 'There was a problem saving your changes.  Please try again later.' );
	});
}

// unlike wishlists, the "divToHide" is only hidden on success
function RecommendGame( appid, steamworksappid, comment, rated_up, is_public, language, divBtn, onSuccessFunc, divToShowError, navref )
{
	$(divBtn).hide();
	var url = 'http://store.steampowered.com/friends/recommendgame';
	if ( navref )
		MakeNavCookie( navref, url );
	
	new Ajax.Request( url, {
		method: 'post',
		parameters: {appid: appid, steamworksappid: steamworksappid, comment: comment, rated_up: rated_up, is_public: is_public, language: language, sessionid: g_sessionID},
		onSuccess: function( transport ) {
			if ( transport.responseJSON.success )
			{
				$(divToShowError).hide();
				onSuccessFunc();
			}
			else
			{
				$(divBtn).show();
				var elError = $(divToShowError);
				if ( transport.responseJSON.strError )
				{
					if ( !elError.strOrigMessage )
						elError.strOrigMessage = elError.innerHTML;
					elError.update( transport.responseJSON.strError );
				}
				else if ( elError.strOrigMessage )
					elError.update( elError.strOrigMessage )
				elError.show();
			}
		}
	});
}

//hide a game from being recommended
function HideRecommendation( type, itemid, divBtn, elemContainer )
{
	var parameters = { sessionid: g_sessionID };
	
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


Event.observe( document, 'dom:loaded', function() {
	InstrumentLinks();

	// add a jquery extension to handle our SNR stuff (we do this on load because jquery is included after this file)
	jQuery.fn.InstrumentLinks = function()
	{
		if ( this.is('a') )
			this.each( function() { InstrumentLink( this ); } );
		else
			this.find( 'a' ).each( function() { InstrumentLink( this ); } );

		return this;
	};
} );

function InstrumentLinks()
{
	$$('A').each( InstrumentLink );
}

function InstrumentLink( link )
{
	if ( link.bIsInstrumented )
		return;

	var bIsInstrumented = false;
	//  if the anchor uses javascript, then we don't want to monkey with any embedded URL's
	if ( !link.href.match( /^javascript/ ) )
	{
		var navinfo = link.href.match( /[\?&]snr=[^&]*(&|$)/ );
		if ( navinfo  )
		{
			bIsInstrumented = true;
			Event.observe( link, 'click', InstrumentedLinkOnClick.bindAsEventListener( null, link ) );
		}
		var outcinfo = link.href.match( /[\?&]outc=([^&]*)(&|$)/ );
		if ( outcinfo && !bIsInstrumented )
		{
			bIsInstrumented = true;
			Event.observe( link, 'click', InstrumentedLinkOnClick.bindAsEventListener( null, link ) );
		}
		if ( bIsInstrumented )
		{
			link.bIsInstrumented = bIsInstrumented;
		}
	}
}

function InstrumentedLinkOnClick( event, link )
{
	var navinfo = link.href.match( /[\?&]snr=([^&#]*)(&|$|#)/ );
	if ( navinfo )
	{
		// if we matched an ampersand at the end, there are more arguments
		var replacement = '';
		if ( navinfo[2] == '&' )	// there was an ampersand after the snr arg
			replacement = navinfo[0][0];	//keep the first character of the match (a ? or &)
		else
			replacement = navinfo[2];	// whatever other thing came next, either blank or a # sign
		link.href = link.href.replace( /[\?&]snr=[^&#]*(&|#|$)/, replacement );
		
		MakeNavCookie( navinfo[1], link.href );
	}
    var exprinfo = link.href.match( /[\?&]outc=([^&#]*)(&|#|$)/ );
    if ( exprinfo )
    {
        replacement = '';
        if ( exprinfo[2] == '&' )
            replacement = exprinfo[0][0];
		else
			replacement = navinfo[2];
        link.href = link.href.replace( /[\?&]outc=[^&#]*(&|#|$)/, replacement );
        MakeOutcomeCookie( exprinfo[1], link.href );
    }

	return true;
}

function MakeNavCookie( snr, url )
{
	var dateExpires = new Date();
	dateExpires.setTime( dateExpires.getTime() + 1000 * 60 );
	document.cookie = 'snr=' + snr + '|' + encodeURIComponent( url ) +'; expires=' + dateExpires.toGMTString() + ';path=/';
}

function MakeOutcomeCookie( outc, url )
{
    var dateExpires = new Date();
    dateExpires.setTime( dateExpires.getTime() + 1000 * 60 );
    document.cookie = 'outc=' + outc +'; expires=' + dateExpires.toGMTString() + ';path=/';
}

function GetNavCookie()
{
    // get back the cookie that MakeNavCookie creates !
    var ref = document.cookie.match( /\ssnr=([^;]*);/ );
    if ( ref )
        return  ref[1];
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

function expandTXItem( item )
{
	var blurb = $( item ).down( '.tx_record_row_blurb' );

	if ( !blurb )
		return;

	if ( blurb.visible() )
		Effect.BlindUp( blurb, { duration: 0.25 } )
	else
		Effect.BlindDown( blurb, { duration: 0.25 } )
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
		$('spotlight_scroll_next').removeClassName( 'disabled' );
	else
		$('spotlight_scroll_next').addClassName( 'disabled' );
	
	if ( g_iActiveSpotlight > 0 )
		$('spotlight_scroll_prev').removeClassName( 'disabled' );
	else
		$('spotlight_scroll_prev').addClassName( 'disabled' );

	if ( $('spotlight_scroll_count_cur') )
		$('spotlight_scroll_count_cur').update( g_iActiveSpotlight + 1 );
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
			window.location.reload();
		}
	}
};

var Countdown = Class.create( {
	elClock: null,
	nEndTime: null,
	bEnded: false,
	cbkExpired: null,

	initialize: function( elClock, nEndTimeLocalTime )
	{
		this.elClock = elClock;
		this.nEndTime = nEndTimeLocalTime;
		this.bEnded = false;
		this.cbkExpired = null;

		this.refreshClock();
		CCountdownManager.registerCountdown( this );
	},

	setCallback: function( cbkExpired )
	{
		this.cbkExpired = cbkExpired;
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

		if ( this.cbkExpired && secsRemaining < 1 )
		{
			this.cbkExpired();
			this.cbkExpired = null;
		}

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
		remainHours += remainDays * 24;
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


function LaunchWebChat()
{
	if ( $('webchat_launch_iframe') )
		$('webchat_launch_iframe').remove();

	var iframe = new Element( 'iframe', {id: 'webchat_launch_iframe' } );
	iframe.hide();
	iframe.src='http://steamcommunity.com/chat/launch/'
	$(document.body).appendChild( iframe );
}


// SEARCH.JS

var g_oSuggestParams;

function EnableSearchSuggestions( elemTerm, navcontext, cc, l, strPackageXMLVersion, elemSuggestionCtn, elemSuggestions )
{
	elemTerm = $(elemTerm);
	elemSuggestionCtn = elemSuggestionCtn ? $(elemSuggestionCtn) : $( 'searchterm_options');
	elemSuggestions = elemSuggestions ? $(elemSuggestions) : $('search_suggestion_contents');

	$J(elemTerm).parents('div.searchbox').click( function( event ) {
		if ( event.target && event.target.tagName != 'INPUT' )
			$J(elemTerm).focus();
	});

	new Form.Element.DelayedObserver( elemTerm, 0.25, function( elem, value ) { SearchTimeout(elem, value, elemSuggestionCtn, elemSuggestions ); } );
	elemTerm.observe( 'keydown', SearchSuggestOnKeyDown.bindAsEventListener( null, elemTerm, elemSuggestionCtn, elemSuggestions ) );
	elemTerm.observe( 'click', SearchSuggestClearDefaultSearchText.bind( null, elemTerm, elemSuggestionCtn, elemSuggestions ) );
	elemTerm.observe( 'focus', SearchSuggestClearDefaultSearchText.bind( null, elemTerm, elemSuggestionCtn, elemSuggestions ) );
	elemTerm.observe( 'blur', SearchSuggestSetDefaultSearchText.bind( null, elemTerm, elemSuggestionCtn, elemSuggestions ) );
	g_oSuggestParams = {
		cc: cc,
		l:l,
		v: strPackageXMLVersion
	}
}
function SearchTimeout( elem, value, elemSuggestionCtn, elemSuggestions )
{
	if ( value )
	{
		var parameters = {term: value, f: 'games' };
		Object.extend( parameters, g_oSuggestParams );
		new Ajax.Updater( elemSuggestions, 'http://store.steampowered.com/search/suggest',
			{
				parameters: parameters,
				method: 'GET',
				onComplete: function() {
					$J(elemSuggestions).InstrumentLinks();
					GDynamicStore.DecorateDynamicItems( $J(elemSuggestions) );
					elemSuggestions.select('a.match').each( function (e) { e.observe( 'mouseover', SearchSuggestOnMouseOver.bindAsEventListener( null, e ) ); } );
					ShowSuggestionsAsNecessary( false, elemSuggestionCtn, elemSuggestions );
				}
			} );
	}
	else
	{
		elemSuggestions.update( '' );
		ShowSuggestionsAsNecessary( false, elemSuggestionCtn, elemSuggestions );
	}
}

function ShowSuggestionsAsNecessary( bForceHide, elemSuggestionCtn, elemSuggestions )
{
	var elem = elemSuggestionCtn;
	if ( elemSuggestions.childElements().length > 0 && !bForceHide )
	{
		ShowWithFade( elem );
	}
	else
	{
		HideWithFade( elem );
	}
}
function SearchSuggestOnKeyDown( event, elem, elemSuggestionCtn, elemSuggestions )
{
	if ( event.keyCode == Event.KEY_ESC )
	{
		ShowSuggestionsAsNecessary( true );
	}
	else if ( event.keyCode == Event.KEY_RETURN
		|| event.keyCode == Event.KEY_UP
		|| event.keyCode == Event.KEY_DOWN )
	{
		if ( !elemSuggestionCtn.visible() || elemSuggestionCtn.hiding )
			return;

		var elemCurSuggestion = elemSuggestions.down('.focus');
		var elemNewSuggestion = null;

		if ( event.keyCode == Event.KEY_RETURN )
		{
			if ( elemCurSuggestion )
			{
				window.location = elemCurSuggestion.href;
				event.stop();
			}
		}
		else
		{
			if ( event.keyCode == Event.KEY_UP )
			{
				if ( elemCurSuggestion )
					elemNewSuggestion = elemCurSuggestion.previous();
				if ( !elemNewSuggestion )
					elemNewSuggestion = elemSuggestions.down('a.match:last-child');
			}
			else if ( event.keyCode == Event.KEY_DOWN )
			{
				if ( elemCurSuggestion )
					elemNewSuggestion = elemCurSuggestion.next();
				if ( !elemNewSuggestion )
					elemNewSuggestion = elemSuggestions.down('a.match');
			}

			if ( elemNewSuggestion  )
			{
				if ( elemCurSuggestion )
					elemCurSuggestion.removeClassName( 'focus' );
				elemNewSuggestion.addClassName( 'focus' );
			}

			//client webkit will move cursor on up/down
			event.stop();
		}

	}
}
function SearchSuggestOnMouseOver( event, elem )
{
	elem.siblings().invoke( 'removeClassName', 'focus');
	elem.addClassName( 'focus' );
}

function SearchSuggestClearDefaultSearchText( elem, elemSuggestionCtn, elemSuggestions )
{
	ShowSuggestionsAsNecessary( false, elemSuggestionCtn, elemSuggestions );
	var text = elem.value;
	if ( text == 'search the store' )
	{
		elem.value = '';
		$(elem).removeClassName( 'default' );
	}
}
function SearchSuggestSetDefaultSearchText( elem, elemSuggestionCtn, elemSuggestions )
{
	ShowSuggestionsAsNecessary( true, elemSuggestionCtn, elemSuggestions );
	var text = elem.value;
	if ( text == '' )
	{
		elem.value = 'search the store';
		$(elem).addClassName( 'default' );
	}
}
function SearchSuggestCheckTerm( theform )
{
	if ( theform.term.value == 'search the store' )
	{
		theform.term.value = '';
	}
	return true;
}

// HEADER.JS



function setTimezoneCookies()
{
	var now = new Date();
	var expire = new Date();

	// One year expiration, this way we don't need to wait at least one page
	// load to have accurate timezone info each session, but only each time the user
	// comes with cleared cookies
	expire.setTime( now.getTime() + 3600000*24*365 );
	tzOffset = now.getTimezoneOffset() * -1 * 60;
	isDST = 0;
	document.cookie = "timezoneOffset=" + tzOffset + "," + isDST + ";expires="+expire.toGMTString() + ";path=/";
}
// We always want to have the timezone cookie set for PHP to use
setTimezoneCookies();


// general text suggestion control

// fnSuggestForTerm will be called with two values, the current string to get suggestions for,
//	and the callback to invoke with the new values.  You should always invoke the callback per call
//	to fnSuggestForTerm, but can delay due to ajax if needed.
function CTextInputSuggest( $InputElement, fnSuggestForTerm )
{
	this.m_bHaveSuggestions = false;
	this.m_$Input = $InputElement;
	this.m_fnSuggestForTerm = fnSuggestForTerm;
	this.m_strLastVal = '';

	this.m_$Focus = $J();
	this.m_strLastFocusVal = null;


	this.m_$SuggestionsCtn = $J('<div/>', {'class': 'popup_block_new', style: 'display: none;' } );
	this.m_$Suggestions = $J('<div/>', {'class': 'popup_body popup_menu' } );
	this.m_$SuggestionsCtn.append( this.m_$Suggestions );

	this.m_$SuggestionsCtn.hide();
	this.m_$Input.after( this.m_$SuggestionsCtn );

	var _this = this;
	this.m_$Input.on( 'keyup.CTextInputSuggest click.CTextInputSuggest', function( event ) { _this.OnTextChanged( event ) } );
	this.m_$Input.on( 'paste.CTextInputSuggest cut.CTextInputSuggest', function() { window.setTimeout( function() { _this.OnTextChanged() }, 1 ); } );
	this.m_$Input.on( 'keydown.CTextInputSuggest', function( event ) { _this.OnKeyDown( event ) } );
	this.m_$Input.on( 'focus.CTextInputSuggest', function() { _this.ShowSuggestions() } );
	this.m_$Input.on( 'blur.CTextInputSuggest', function() { _this.HideSuggestions() } );
}

CTextInputSuggest.prototype.ShowSuggestions = function()
{
	if ( !this.m_$SuggestionsCtn.find(':visible').length && this.m_bHaveSuggestions )
	{
		AlignMenu( this.m_$Input[0], this.m_$SuggestionsCtn[0], 'left', 'bottom', true );
		this.m_$SuggestionsCtn.fadeIn( 'fast' );
	}
};

CTextInputSuggest.prototype.HideSuggestions = function()
{
	if ( this.m_bHaveSuggestions )
		this.m_$SuggestionsCtn.fadeOut( 'fast' );
	else
		this.m_$SuggestionsCtn.hide();
}

CTextInputSuggest.prototype.OnSuggestionSelected = function( $Suggestion )
{
	this.m_$Input.val( $Suggestion.text() );

	this.m_bHaveSuggestions = false;
	this.m_$Focus = $J();
	this.HideSuggestions();
}

CTextInputSuggest.prototype.SetSuggestions = function( rgSuggestions )
{
	var strLastFocus = this.m_strLastFocusVal;

	this.m_$Suggestions.empty();

	this.m_$Focus = $J();
	this.m_strLastFocus = null;

	if ( rgSuggestions && rgSuggestions.length )
	{
		var _this = this;
		for ( var i = 0; i < rgSuggestions.length; i++ )
		{
			var $Suggestion = $J('<div/>', {'class': 'suggestion_item popup_menu_item' } );
			$Suggestion.text( rgSuggestions[i] );
			$Suggestion.click( $J.proxy( this.OnSuggestionSelected, this, $Suggestion ) );
			$Suggestion.mouseenter( $J.proxy( this.SetFocus, this, $Suggestion ) );

			this.m_$Suggestions.append( $Suggestion );

			if ( rgSuggestions[i] == strLastFocus )
				this.SetFocus( $Suggestion );
		}
		this.m_bHaveSuggestions = true;
		this.ShowSuggestions();
	}
	else
	{
		this.m_bHaveSuggestions = false;
		this.HideSuggestions();
	}
}

CTextInputSuggest.prototype.OnTextChanged = function( event )
{
	if ( event && ( event.which == 13 || event.which == 27 ) )
		return;

	var value = this.m_$Input.val();
	if ( value != this.m_strLastVal )
	{
		var _this = this;
		this.m_fnSuggestForTerm( value, function( rgSuggestions ) { _this.SetSuggestions( rgSuggestions ); } );
		this.m_strLastVal = value;
	}
}

CTextInputSuggest.prototype.OnKeyDown = function( event )
{
	if ( event.which == 27 )
	{
		this.HideSuggestions();
	}
	else if ( this.m_bHaveSuggestions )
	{
		var $NewSuggestion = null;
		if ( event.which == 13 )
		{
			if ( this.m_$Focus.length && this.m_bHaveSuggestions )
			{
				this.OnSuggestionSelected( this.m_$Focus );
				event.stopPropagation();
				event.preventDefault();
			}
		}
		else if ( event.which == 38 /* up arrow */ )
		{
			event.preventDefault();
			if ( this.m_$Focus.length )
				$NewSuggestion = this.m_$Focus.prev();
			if ( !$NewSuggestion )
				$NewSuggestion = this.m_$Suggestions.children().last();
		}
		else if ( event.which == 40 /* down arrow */ )
		{
			event.preventDefault();
			if ( this.m_$Focus.length )
				$NewSuggestion = this.m_$Focus.next();
			if ( !$NewSuggestion )
				$NewSuggestion = this.m_$Suggestions.children().first();
		}

		if ( $NewSuggestion )
			this.SetFocus( $NewSuggestion );
	}
}

CTextInputSuggest.prototype.SetFocus = function( $Suggestion )
{
	this.m_$Focus.removeClass( 'focus' );
	this.m_$Focus = $Suggestion;
	this.m_$Focus.addClass( 'focus' );
	this.m_strLastFocusVal = $Suggestion.text();
}

CTextInputSuggest.prototype.Destroy = function()
{
	this.m_$SuggestionsCtn.remove();
	this.m_$Input.off( '.CTextInputSuggest' );
}

// tags in the menu
function EnsureStoreMenuTagsLoaded( strId )
{
	// dynamic store can handle this in v6
	if ( typeof GDynamicStore != 'undefined' )
		return;

	var $Element = $J(strId);
	if ( !$Element.data('tags-loaded') )
	{
		$Element.data('tags-loaded', true );

		var url = 'https://store.steampowered.com/tagdata/recommendedtags';

		$J.get( url, {ll: 'english'} ).done( function( data ) {
			rgYourPopularTags = data || [];
			if ( rgYourPopularTags.length > 0 )
			{
				$Element.empty();
				$Element.css( 'min-height', '' );
				for( var i = 0; i < rgYourPopularTags.length && i < 5; i++ )
				{
					var tag = rgYourPopularTags[i];
					var $Link = $J('<a/>', {'class': 'popup_menu_item', 'href': 'http://store.steampowered.com/tag/en/' + encodeURIComponent( tag.name ) })
					$Link.text( tag.name );
					$Element.append( $Link );
				}
			}
		}).fail( function() {
		}).always( function() {
			$Element.children( '.popup_menu_subarea').show();
		});
	}
}


function AddFreeLicense( subid, strDisplayName )
{
	if ( window.g_bAddFreeLicenseInFlight )
		return;

	window.g_bAddFreeLicenseInFlight = true;

	$J.post( 'https://store.steampowered.com/checkout/addfreelicense/' + subid, { ajax: true, sessionid: g_sessionID }).done( function() {
		ShowAlertDialog(
			strDisplayName,
			'%s has been added to your account.  It is now available in your Steam Library.'.replace( /%s/, strDisplayName )
		).done( function() {
			window.location.reload();
		});
		if ( typeof GDynamicStore != 'undefined' )
			GDynamicStore.InvalidateCache();
	}).fail( function( jqXHR ) {
		var data = V_ParseJSON( jqXHR.responseText );
		if ( data && data.purchaseresultdetail == 9 )
			ShowAlertDialog( strDisplayName, 'This product is already available in your Steam library.' );
		else
			ShowAlertDialog( strDisplayName, 'There was a problem adding this product to your account.  Please try again later.' );
	}).always( function () {
		delete window.g_bAddFreeLicenseInFlight;
	});
}

function ChangeLanguage( strTargetLanguage, bStayOnPage )
{
	var Modal = ShowBlockingWaitDialog( 'Change language', '' );
	$J.post( 'https://store.steampowered.com/account/setlanguage/', {language: strTargetLanguage, sessionid: g_sessionID })
	.done( function() {
		if ( bStayOnPage )
			Modal.Dismiss();
		else
		{
			if ( window.location.href.match( /[?&]l=/ ) )
				window.location = window.location.href.replace( /([?&])l=[^&]*&?/, '$1' );
			else
				window.location.reload();
		}
	}).fail( function() {
		Modal.Dismiss();
		ShowAlertDialog( 'Change language', 'There was a problem saving your changes.  Please try again later.' );
	});
}

function Logout()
{
	var $Form = $J('<form/>', {'action': 'https://store.steampowered.com/logout/', 'method': 'POST' } );
	$Form.append( $J('<input/>', {'type': 'hidden', 'name': 'sessionid', 'value': g_sessionID } ) );
	$Form.appendTo( 'body' );
	$Form.submit();
}

