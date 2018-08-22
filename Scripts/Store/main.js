
function GotFlashPopup()
{
	var win = window.open( 'https://store.steampowered.com/gotflash','gotflash','width=536,height=546,resize=yes,scrollbars=yes');
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
				'https://store.steampowered.com/search/tab',
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
	var $Elem = $JFromIDOrElement( elem );
	$Elem.siblings().removeClass( 'active' );
	$Elem.addClass( 'active' );

	if( target == "tab_1_content" )
		target = GetDefaultTabSelection();

	var $Content = $JFromIDOrElement(target);
	$Content.siblings().hide();
	$Content.show();

	// Re-compute impression tracking visibility
	if ( typeof GDynamicStore != 'undefined' )
	{
		GDynamicStore.s_ImpressionTracker.CheckVisibility();
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
				'https://store.steampowered.com/search/smallcapscroll',
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
			GDynamicStore.s_ImpressionTracker.CheckVisibility();
			GDynamicStore.HandleCarouselChange( targetid, elem.curPos, pageSize );
		}
	};

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


var g_HoverState = {
	target: null,
	hiding: false
};

function GetHoverState( $Elem )
{
	var oElemState = $Elem.data( 'oHoverState' );
	if ( !oElemState )
	{
		oElemState = {};
		$Elem.data( 'oHoverState', oElemState );
	}
	return oElemState;
}

function GameHover( elem, event, divHover, rgHoverData )
{
	if (!event) var event = window.event;
	var $Elem = $JFromIDOrElement(elem);
	var $Hover = $JFromIDOrElement(divHover);
	var bNewHoverSpeed = typeof ( g_bNewHoverSpeed) != 'undefined' && g_bNewHoverSpeed;

	var oElemState = GetHoverState( $Elem );
	
	if ( !$Hover.length )
	{
				$Hover = $J("\t\t<div class=\"hover game_hover\" id=\"global_hover\" style=\"display: none; left: 0; top: 0;\">\r\n\t\t\t<div class=\"game_hover_box hover_box\">\r\n\t\t\t\t<div class=\"content\" id=\"global_hover_content\">\r\n\t\t\t\t<\/div>\r\n\t\t\t<\/div>\r\n\t\t\t<div class=\"hover_arrow_left\"><\/div>\r\n\t\t\t<div class=\"hover_arrow_right\"><\/div>\r\n\t\t<\/div>");
		$J(document.body).append( $Hover );
	}
	
	if ( g_HoverState.hiding && $Hover.is(':visible') && g_HoverState.target == $Elem[0] )
	{
		ShowWithFade( $Hover );
	}
	else if ( ( !$Hover.is(':visible') || g_HoverState.target != $Elem[0] ) && !oElemState.timer )
	{
		oElemState.bWantsHover = true;
		var accountId = ( typeof g_AccountID !== 'undefined' ) && !rgHoverData['public'] ? g_AccountID : 0;
		var bPublic = rgHoverData['public'] || accountId == 0;
		var strTargetPrefix = '';
		var strUrlTarget = '';
		if ( rgHoverData['type'] == 'app' )
		{
			strTargetPrefix = 'hover_app_';
			strUrlTarget = 'apphover' + ( bPublic ? 'public' : '' ) + '/' + rgHoverData['id'];
		}
		else if ( rgHoverData['type'] == 'sub' )
		{
			strTargetPrefix = 'hover_sub_';
			strUrlTarget = 'subhover' + ( bPublic ? 'public' : '' ) + '/' + rgHoverData['id'];
		}
		else if ( rgHoverData['type'] == 'bundle' )
		{
			strTargetPrefix = 'hover_bundle_';
			strUrlTarget = 'bundle/' + rgHoverData['id'] + '/hover' + ( bPublic ? '_public' : '' ) + '/';
		}
		else
		{
			return;
		}
			
		var targetId = strTargetPrefix + rgHoverData['id'];
		var $HoverData = $JFromIDOrElement( targetId );
		var params = rgHoverData['params'] || {};
		var nStartHoverTime = new Date().getTime();
		var fnComputeHoverDelay = bNewHoverSpeed ?
			function() { return Math.max( 400 - ( new Date().getTime() - nStartHoverTime ), 200 );} :
			function() { return 200; };

		if ( !$HoverData.length && !oElemState.bAjaxRequestMade )
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
				if ( oElemState.bWantsHover && !oElemState.bAjaxRequestMade ) {
					oElemState.bAjaxRequestMade = true;
					$J.get( 'https://store.steampowered.com/' + strUrlTarget, rgAjaxParams ).done( function( html )
					{
						var $Content = $J(html);
						$Content.hide();
						$Hover.find( '.content' ).append( $Content );
						ShowGameHover( $Elem, $Hover, targetId, params, fnComputeHoverDelay()  );
					} );
				}
			}, bNewHoverSpeed ? 50 : 150 );
		}
		if ( !oElemState.timer )
		{
			oElemState.timer = window.setTimeout(function () {
				oElemState.timer = false;
				oElemState.bReadyForHover = true;
				ShowGameHover( $Elem, $Hover, targetId, params, fnComputeHoverDelay() );
			}, bNewHoverSpeed ? 100 : 300 );
		}
	}
	
}

function HideGameHover( elem, event, divHover )
{
	
	var $Elem = $JFromIDOrElement( elem );
	var $Hover = $JFromIDOrElement( divHover );

	var oElemState = GetHoverState( $Elem );

	if ( !$Hover.length )
		return;

	if (!event) var event = window.event;
	var reltarget = $J( (event.relatedTarget) ? event.relatedTarget : event.toElement );
	if ( reltarget.length && $J.contains( $Elem[0], reltarget[0] ) )
		return;
	
	if ( oElemState.timer )
	{
		window.clearTimeout( oElemState.timer );
		oElemState.timer = false;
	}
	oElemState.bWantsHover = false;
	oElemState.bReadyForHover = false;

	HideWithFade( divHover, 200 );
	
}

function ShowGameHover( elem, divHover, targetContent, params, speed )
{
	
	var $Elem = $JFromIDOrElement( elem );
	var $Hover = $JFromIDOrElement( divHover );
	var $Target = $JFromIDOrElement( targetContent );

	var oElemState = GetHoverState( $Elem );

	if ( !$Target.length || !oElemState.bWantsHover || !oElemState.bReadyForHover || !$J.contains( document, $Elem[0] ) )
		return;

	$Target.siblings().hide();
	$Target.show();

	g_HoverState.target = $Elem[0];
	
	var $Toparea = $Target.find( '.hover_top_area' );
	if ( params && params.top_area_content )
	{
		$Toparea.html( params.top_area_content );
		$Toparea.show();
	}
	else if ( $Toparea.length )
	{
		$Toparea.hide();
	}

	// "show" the hover, but not "visible", letting us do some positioning
	$Hover.css( 'visibility', 'hidden' ).show();

	var $HoverBox = $Hover.find( '.hover_box' );
	var $HoverArrowLeft = $Hover.find( '.hover_arrow_left' );
	var $HoverArrowRight = $Hover.find( '.hover_arrow_right' );

	var offset = $Elem.offset();
	var nWindowScrollTop = $J(window).scrollTop();
	var nWindowScrollLeft = $J(window).scrollLeft();
	var nViewportWidth = $J(window).width();
	var nViewportHeight = $J(window).height();

	var nHoverPositionLeft, nHoverPositionTop;

		var $HoverArrow = $HoverArrowLeft;
	var boxRightViewport = ( offset.left - nWindowScrollLeft ) + $Elem.outerWidth() + $HoverBox.width() + 14;
	var nSpaceRight = nViewportWidth - boxRightViewport;
	var nSpaceLeft = offset.left - $Hover.width();
	if( nSpaceLeft < -10 && nSpaceRight < -10 )
	{
		//no room at all
		$Hover.hide().css('visibility','');
		return;	//skip showing the hover
	}
	else if ( nSpaceRight < 14 && nSpaceLeft > nSpaceRight )
	{
				nHoverPositionLeft = offset.left - $Hover.outerWidth() + 8;
		$HoverArrow = $HoverArrowRight;
		$HoverArrowLeft.hide();
		$HoverArrowRight.show();
	}
	else
	{
				nHoverPositionLeft = offset.left + $Elem.outerWidth() - 8;
		$HoverArrowLeft.show();
		$HoverArrowRight.hide();
	}

	var nTopAdjustment = -13;	
				if ( $Elem.height() < 63 )
		nTopAdjustment =  Math.floor( $Elem.height() ) / 2 - 56;
	nHoverPositionTop = offset.top + nTopAdjustment;
	$Hover.offset( {top: nHoverPositionTop, left: nHoverPositionLeft} );

	var nTargetTopViewport = ( offset.top - nWindowScrollTop ) + nTopAdjustment;
	if ( nTargetTopViewport + $HoverBox.height() + 8 > nViewportHeight )
	{
		var nViewportAdjustment = ( $HoverBox.height() + 8 ) - ( nViewportHeight - nTargetTopViewport );

				nViewportAdjustment = Math.min( $HoverBox.height() - 74, nViewportAdjustment );
		var nViewportAdjustedHoverTop = offset.top - nViewportAdjustment;
		$Hover.css( 'top', nViewportAdjustedHoverTop + 'px' );

		$HoverArrow.css( 'top', ( 48 + nHoverPositionTop - nViewportAdjustedHoverTop ) + 'px' );
	}
	else
	{
		$HoverArrow.css( 'top', '' );
	}

	$Hover.hide();
	$Hover.css( 'visibility', '' );
	
	ShowWithFade( $Hover, speed );
	
}

function AddToWishlist( appid, divToHide, divToShowSuccess, divToShowError, navref )
{
	var url = 'https://store.steampowered.com/api/addtowishlist';
	if ( navref )
	{
		MakeNavCookie( navref, url );
	}

	$J.post( url, {sessionid: g_sessionID, appid: appid} )
		.done( function( data ) {
			$JFromIDOrElement(divToHide).hide();
			if ( data && data.success ) {
				$JFromIDOrElement(divToShowSuccess).show();
				if ( data.saleTaskCompleted ) {
					NewStickerPackModal( 'Add to your wishlist' );
				}
			}
			else {
                $JFromIDOrElement(divToShowError).show();
            }

			if ( typeof GDynamicStore != 'undefined' )
				GDynamicStore.InvalidateCache();
		}).fail( function() {
			$JFromIDOrElement(divToShowError).show();
		});
}

function AddToWishlistButton( button, appid, navref )
{
	var url = 'https://store.steampowered.com/api/addtowishlist';
	if ( navref )
	{
		MakeNavCookie( navref, url );
	}

	$J.post( url, {sessionid: g_sessionID, appid: appid} )
		.done( function( data ) {
			if ( data && data.success )
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
		} );
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
function RecommendGame( appid, steamworksappid, comment, rated_up, is_public, language, received_compensation, divBtn, onSuccessFunc, divToShowError, navref, bDisableComments )
{
	$JFromIDOrElement(divBtn).hide();
	var url = 'https://store.steampowered.com/friends/recommendgame';
	if ( navref )
		MakeNavCookie( navref, url );
	
	$J.post( url, {appid: appid, steamworksappid: steamworksappid, comment: comment, rated_up: rated_up, is_public: is_public, language: language, received_compensation: received_compensation, disable_comments: bDisableComments, sessionid: g_sessionID} )
		.done( function( data ) {
			if ( data && data.success )
			{
				$JFromIDOrElement(divToShowError).hide();
				onSuccessFunc();
			}
			else
			{
				$JFromIDOrElement(divBtn).show();
				var $Error = $JFromIDOrElement(divToShowError);
				if ( data && data.strError )
				{
					if ( !$Error.data( 'strOrigMessage' ) )
						$Error.data( 'strOrigMessage', $Error.html() );
					$Error.html( data.strError );
				}
				else if ( $Error.data( 'strOrigMessage' ) )
					$Error.html( $Error.data( 'strOrigMessage' ) );
				$Error.show();
			}
		} );
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
	
	new Ajax.Request( 'https://store.steampowered.com/recommended/ignorerecommendation/', {
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


$J( function() {
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
	$J('A').each( function() { InstrumentLink( this ); } );
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
			$J(link).click( function( event ) { InstrumentedLinkOnClick( event, link ); } );
		}
		else
		{
			var outcinfo = link.href.match(/[\?&]outc=([^&]*)(&|$)/);
			if ( outcinfo )
			{
				bIsInstrumented = true;
				$J(link).click( function (event) { InstrumentedLinkOnClick(event, link); } );
			}
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
	var $elSpotlights = $J('#spotlight_scroll').children();
	var $Spotlight = $J( $elSpotlights[iCurSpotlight] );
	var $NextSpotlight = $J( $elSpotlights[iNextSpotlight] );
	
	var $Scroll = $JFromIDOrElement('spotlight_scroll');
	$Scroll.stop();
	var curHeight = $Scroll.height();

	$Scroll.css( 'height', curHeight + 'px' );

	$Spotlight.css( 'position', 'absolute' );
	$NextSpotlight.css( 'position', 'absolute' );

	var targetHeight = $NextSpotlight.height();
	if ( targetHeight != curHeight )
		$Scroll.animate( {height: targetHeight }, 250 );

	$Spotlight.stop();
	$Spotlight.fadeOut( 250 );

	$NextSpotlight.stop();
	$NextSpotlight.fadeTo( 200, 1.0 );	//fadeTo rather than fadeIn in case it was already in a fade
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
		Effect.BlindUp( blurb, { duration: 0.25 } );
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
		$JFromIDOrElement('spotlight_scroll_next').removeClass( 'disabled' );
	else
		$JFromIDOrElement('spotlight_scroll_next').addClass( 'disabled' );
	
	if ( g_iActiveSpotlight > 0 )
		$JFromIDOrElement('spotlight_scroll_prev').removeClass( 'disabled' );
	else
		$JFromIDOrElement('spotlight_scroll_prev').addClass( 'disabled' );

	$J('#spotlight_scroll_count_cur').text( g_iActiveSpotlight + 1 );
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
			var _this = this;
			$J(document).on( 'focus mousemove', function() { _this.doRefresh(); } );
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

function Countdown( elClock, nEndTimeLocalTime )
{
	this.$Clock = $JFromIDOrElement( elClock );
	this.nEndTime = nEndTimeLocalTime;
	this.bEnded = false;
	this.cbkExpired = null;

	if ( this.$Clock.length && nEndTimeLocalTime )
	{
		this.refreshClock();
		CCountdownManager.registerCountdown(this);
	}
}

Countdown.prototype.setCallback = function( cbkExpired )
{
	this.cbkExpired = cbkExpired;
};

Countdown.prototype.refreshClock = function()
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
};

Countdown.prototype.render = function( remainDays, remainHours, remainMinutes, remainSeconds )
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
	this.$Clock.text( str );
};

function GraphicalCountdown( nEndTimeLocalTime, strImagePath, strElPrefix )
{
	this.strImagePath = strImagePath;
	this.strElPrefix = strElPrefix;
	this.strExtension = '.png';
	this.rgLastVals = {};
	Countdown.apply( this, [ null, nEndtimeLocalTime ] );
}
GraphicalCountdown.prototype = new Countdown;
GraphicalCountdown.prototype.constructor = GraphicalCountdown;

GraphicalCountdown.prototype.render = function( remainDays, remainHours, remainMinutes, remainSeconds )
{
	remainHours += remainDays * 24;
	this.setImage( 'hours_tens', Math.floor( remainHours / 10 ) );
	this.setImage( 'hours_units', remainHours % 10 );
	this.setImage( 'minutes_tens', Math.floor( remainMinutes / 10 ) );
	this.setImage( 'minutes_units', remainMinutes % 10 );
	this.setImage( 'seconds_tens', Math.floor( remainSeconds / 10 ) );
	this.setImage( 'seconds_units', remainSeconds % 10 );
};

GraphicalCountdown.prototype.setImage = function( idSuffix, val )
{
	if ( this.rgLastVals[idSuffix] != val )
	{
		$(this.strElPrefix + idSuffix).src = this.strImagePath + val + this.strExtension;
		this.rgLastVals[idSuffix] = val;
	}
};


// SEARCH.JS

var g_oSuggestParams;

function EnableSearchSuggestions( elemTerm, navcontext, cc, l, rgUserPreferences, strPackageXMLVersion, elemSuggestionCtn, elemSuggestions )
{
	var $Term = $JFromIDOrElement(elemTerm);
	var $SuggestionsCtn = elemSuggestionCtn ? $JFromIDOrElement(elemSuggestionCtn) : $J('#searchterm_options');
	var $Suggestions = elemSuggestions ? $JFromIDOrElement(elemSuggestions) : $J('#search_suggestion_contents');

	$Term.parents('div.searchbox').click( function( event ) {
		if ( event.target && event.target.tagName != 'INPUT' )
			$J(elemTerm).focus();
	});

	// how long we wait after the first keypress after a search or page load
	var k_nStartSearchTimeoutMS = 350;

	// how long we extend the wait after each keypress.  We always time out at 3x the base search timeout ms
	var k_nSearchKeypressTimeoutExtensionMS = 125;

	var sLastVal = $Term.val();
	var nTermTimer = 0;
	var tsScheduledTimer = 0;
	var tsLastSearch = 0;
	$Term.on( 'keyup paste', function( event ) {
		var sNewVal = $Term.val();
		if ( sNewVal != sLastVal )
		{
			var tsChange = $J.now();
			var msDelayBeforeTimeout = k_nStartSearchTimeoutMS;
			if ( !tsLastSearch )
				tsLastSearch = tsChange;

			if ( nTermTimer && tsScheduledTimer - tsChange < k_nSearchKeypressTimeoutExtensionMS && tsChange - tsLastSearch < 3 * k_nStartSearchTimeoutMS )
			{
				// we have one scheduled within 50ms, just bump it out a little
				msDelayBeforeTimeout = k_nSearchKeypressTimeoutExtensionMS;
				window.clearTimeout( nTermTimer );
				nTermTimer = 0;
			}

			if ( !nTermTimer )
			{
				tsScheduledTimer = $J.now() + msDelayBeforeTimeout;
				nTermTimer = window.setTimeout( function() {
					nTermTimer = 0;
					tsLastSearch = 0;
					sLastVal = $Term.val();
					SearchTimeout( $Term, v_trim( sLastVal ), $SuggestionsCtn, $Suggestions );
				}, msDelayBeforeTimeout);
			}
		}
	});

	$Term.on( 'keydown', function( event ) { SearchSuggestOnKeyDown( event, $Term, $SuggestionsCtn, $Suggestions ); } );
	$Term.on( 'click focus', function( event ) { SearchSuggestClearDefaultSearchText( $Term, $SuggestionsCtn, $Suggestions ); } );
	$Term.on( 'blur', function( event ) { SearchSuggestSetDefaultSearchText( $Term, $SuggestionsCtn, $Suggestions ); } );
	g_oSuggestParams = {
		cc: cc,
		l:l,
		no_violence: rgUserPreferences['hide_adult_content_violence'],
		no_sex: rgUserPreferences['hide_adult_content_sex'],
		excluded_tags: rgUserPreferences['excluded_tags'],
		excluded_content_descriptors: rgUserPreferences['excluded_content_descriptors'],
		v: strPackageXMLVersion
	}
}
function SearchTimeout( $Term, value, $SuggestionsCtn, $Suggestions )
{
	if ( value )
	{
		var parameters = {term: value, f: 'games' };
		$J.extend( parameters, g_oSuggestParams );
		$J.get( 'https://store.steampowered.com/search/suggest', parameters).done( function( html ) {
			$Suggestions.html( html );
			$Suggestions.InstrumentLinks();
			$Suggestions.find('.match').attr('data-ds-options', 0);
			GDynamicStore.DecorateDynamicItems( $Suggestions );
			$Suggestions.find('a.match').each( function () {
				var el = this;
				$J(el).on( 'mouseover', function( event ) { SearchSuggestOnMouseOver( event, $J(el) ); } );
			} );
			ShowSuggestionsAsNecessary( false, $SuggestionsCtn, $Suggestions );
		} );
	}
	else
	{
		$Suggestions.empty();
		ShowSuggestionsAsNecessary( false, $SuggestionsCtn, $Suggestions );
	}
}

function ShowSuggestionsAsNecessary( bForceHide, $SuggestionsCtn, $Suggestions )
{
	if ( $Suggestions.children().length > 0 && !bForceHide )
	{
		ShowWithFade( $SuggestionsCtn );
	}
	else
	{
		HideWithFade( $SuggestionsCtn );
	}
}
function SearchSuggestOnKeyDown( event, $Term, $SuggestionsCtn, $Suggestions )
{
	if ( event.keyCode == 27 /* Event.KEY_ESC */ )
	{
		ShowSuggestionsAsNecessary( true, $SuggestionsCtn, $Suggestions );
	}
	else if ( event.keyCode == 13 /* Event.KEY_RETURN */
		|| event.keyCode == 38 /* Event.KEY_UP */
		|| event.keyCode == 40 /* Event.KEY_DOWN */ )
	{
		if ( !$SuggestionsCtn.is( ':visible' ) )
			return;

		var $CurSuggestion = $Suggestions.children('.focus');
		var $NewSuggestion = $J();

		if ( event.keyCode == 13 /* Event.KEY_RETURN */ )
		{
			if ( $CurSuggestion.length )
			{
				window.location = $CurSuggestion.attr( 'href' );
				event.preventDefault();
			}
		}
		else
		{
			if ( event.keyCode == 38 /* Event.KEY_UP */ )
			{
				if ( $CurSuggestion.length )
					$NewSuggestion = $CurSuggestion.prev();
				if ( !$NewSuggestion.length )
					$NewSuggestion = $Suggestions.children('a.match:last-child');
			}
			else if ( event.keyCode == 40 /* Event.KEY_DOWN */ )
			{
				if ( $CurSuggestion.length )
					$NewSuggestion = $CurSuggestion.next();
				if ( !$NewSuggestion.length )
					$NewSuggestion = $Suggestions.children('a.match:first-child');
			}

			if ( $NewSuggestion.length  )
			{
				$CurSuggestion.removeClass( 'focus' );
				$NewSuggestion.addClass('focus');
			}

			//client webkit will move cursor on up/down
			event.preventDefault();
		}

	}
}
function SearchSuggestOnMouseOver( event, $Suggestion )
{
	$Suggestion.siblings().removeClass( 'focus');
	$Suggestion.addClass( 'focus' );
}

function SearchSuggestClearDefaultSearchText( $Term, $SuggestionsCtn, $Suggestions )
{
	ShowSuggestionsAsNecessary( false, $SuggestionsCtn, $Suggestions );
	SearchSuggestClearFixStyles($Term);
}

function SearchSuggestClearFixStyles($Term)
{
	$Term.removeClass( 'default' );
}

function SearchSuggestSetDefaultSearchText( $Term, $SuggestionsCtn, $Suggestions )
{
	ShowSuggestionsAsNecessary( true, $SuggestionsCtn, $Suggestions );
	SearchSuggestSetFixStyles($Term);
}

function SearchSuggestSetFixStyles($Term)
{
	var text = $Term.val();
	if (text == '')
	{
		$Term.addClass( 'default' );
	}
}

function SearchSuggestCheckTerm( theform )
{
	// no longer need to check for #text_search_the_store, but leaving here
	// in case we have other things we want to block in the future.
	return true;
}

// HEADER.JS

// We always want to have the timezone cookie set for PHP to use
setTimezoneCookies();


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
			var rgYourPopularTags = data || [];
			if ( rgYourPopularTags.length > 0 )
			{
				$Element.empty();
				$Element.css( 'min-height', '' );
				for( var i = 0; i < rgYourPopularTags.length && i < 5; i++ )
				{
					var tag = rgYourPopularTags[i];
					var $Link = $J('<a/>', {'class': 'popup_menu_item', 'href': 'https://store.steampowered.com/tag/en/' + encodeURIComponent( tag.name ) });
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

	var posts = [];
	var subids = ( typeof subid == "number" || typeof subid == "string" ? [ subid ] : subid );

	for ( var i = 0; i < subids.length; i++ )
	{
		posts.push( $J.post( 'https://store.steampowered.com/checkout/addfreelicense/' + subids[i], { ajax: true, sessionid: g_sessionID }) );
	}

	$J.when.apply( $J, posts ).done( function() {
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
						if( g_AccountID )
				window.location = 'https://store.steampowered.com/account/languagepreferences/';
			else if ( window.location.href.match( /[?&]l=/ ) )
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

function getBestAvailNavData()
{
	var navData = jQuery.data( document, 'x_oldnav' );
	if ( navData == undefined )
	{
		navData = jQuery.data( document, 'x_oldref' );
	}
	if ( navData === undefined )
	{
		// try to get what we need from the URL !
		var rg = window.location.href.match( /[\?&]snr=([^\?&]*)($|&)/ );
		if ( rg )
		{
			navData = rg[1];
		}
	}
	return  navData;
}

// Function to add a package to a cart, assumes form setup on the page
function addToCart( subid, dedupe )
{
	try
	{
		// Find all of the add to cart buttons displayed on the page
		var filterAllButtons='a.btn_addtocart_content';
		// the filterString can be used to find the element that invoked us, since the subid appears within it
		// note that href*= specifies that href contains the string
		var filterString = 'a[href*=' + subid + ']';
		// within the set of all buttons, get the index of the one that we are dealing with!
		// To do that, we find the anchor that invoked us within the larger set of add to cart buttons!
		var allButtons = jQuery( filterAllButtons );

		// Check for quantity
		var idx = ( dedupe !== undefined ) ? dedupe : 0;
		var quantity = jQuery( '#quantity_update_'+subid+'_'+idx ).val();
		if ( quantity !== undefined )
		{
			var filterStringForm = 'form[name=add_to_cart_'+subid+']';
			var formSelector = jQuery( filterStringForm );
			if ( formSelector.length === 1 )
			{
				jQuery('<input type="hidden">').attr({name: 'quantity', 'value': quantity}).appendTo(formSelector);
			}
		}

		// do we have anything to examine?
		if ( allButtons.length > 0 )
		{

			var navData = getBestAvailNavData();
			var button;
			var buttonOffset = { top : 0, left : 0 };
			var buttonIndex = allButtons.index( jQuery( filterString ) );
			//
			//  Subscription pages have ambiguous add to cart buttons - we will try to 'dedupe' it !
			//
			if ( buttonIndex === -1 )
			{
				if ( dedupe !== undefined )
				{
					buttonIndex = dedupe;
				}
				else
				{
					//  There is a chance this we're mistaken if the .php generation of the page
					//  didn't generate the addToCart() calls as we expect !
					buttonIndex = 0;
				}
			}
						button = allButtons.eq(buttonIndex);

			//
			//  If we are certain we know what button was clicked, then we'll provide info on the form!
			//
			if ( button != null &&  button.length === 1 && typeof button.offset == 'function' )
			{
				buttonOffset = button.offset();
				var height = jQuery(window).height();
				var width = jQuery(window).width();
				//
				//  We have all the components we want the standard button to submit to the server!
				//  we will now add input fields to the form we intend to submit.
				//
				var filterStringForm = 'form[name=add_to_cart_'+subid+']';
				var formSelector = jQuery( filterStringForm );
				var begintime = jQuery.data(document, 'x_readytime');
				var selecttime = 0.0;
				if ( begintime !== undefined )
				{
					selecttime = new Date().getTime() - begintime;
				}
				if ( formSelector.length === 1 )
				{
					//  We include the 'hidden' attribute at this point, because of a believe compatibility issue with Internet Explorer!
					jQuery( '<input type="hidden">' ).attr( { name: 'x_selection', 'value' : buttonIndex } ).appendTo( formSelector  );
					jQuery( '<input type="hidden">' ).attr( { name: 'x_choices', 'value' : allButtons.length } ).appendTo( formSelector );
					jQuery( '<input type="hidden">' ).attr( { name: 'x_top', 'value' : buttonOffset.top } ).appendTo( formSelector  );
					jQuery( '<input type="hidden">' ).attr( { name: 'x_left', 'value' : buttonOffset.left } ).appendTo( formSelector );
					jQuery( '<input type="hidden">' ).attr( { name: 'x_window_height', 'value' : height } ).appendTo( formSelector );
					jQuery( '<input type="hidden">' ).attr( { name: 'x_window_width', 'value' : width } ).appendTo( formSelector );
					jQuery( '<input type="hidden">' ).attr( { name: 'x_select_time', 'value' : selecttime } ).appendTo( formSelector );
					if ( navData )
					{
						var pipeSplit = new RegExp( /\|/ );
						var resultString = navData.split( pipeSplit )[0];
						jQuery( '<input type="hidden">' ).attr( { name: 'x_oldnav', 'value' : resultString } ).appendTo( formSelector );
					}
				}
			}
		}
	}
	catch( e )
	{
		//console.log( e );
			}
	// Regardless of instrumentation failures, try to submit the form for the user.
	try
	{
		document.forms['add_to_cart_'+subid].submit();
	}
	catch( e )
	{
		// swallow exceptions !
	}

}

// Function to add a package to a cart, assumes form setup on the page
function updateQtyCart( formName, id )
{
	try
	{
		// Check for quantity
		var quantity = jQuery( '#'+id ).val();
		if ( quantity !== undefined )
		{
			var filterStringForm = 'form[name='+formName+']';
			var formSelector = jQuery( filterStringForm );
			if ( formSelector.length === 1 )
			{
				jQuery('<input type="hidden">').attr({name: 'quantity', 'value': quantity}).appendTo(formSelector);
			}
		}
	}
	catch( e )
	{
		//console.log( e );
		}
	// Regardless of instrumentation failures, try to submit the form for the user.
	try
	{
		document.forms[formName].submit();
	}
	catch( e )
	{
		// swallow exceptions !
	}

}

// Function to add a bundle to a cart, assumes form setup on the page
function addBundleToCart( bundleid, dedupe )
{
	try
	{
		// Find all of the add to cart buttons displayed on the page
		var filterAllButtons='a.btn_addtocart_content';
		// the filterString can be used to find the element that invoked us, since the subid appears within it
		// note that href*= specifies that href contains the string
		var filterString = 'a[href*=' + bundleid + ']';
		// within the set of all buttons, get the index of the one that we are dealing with!
		// To do that, we find the anchor that invoked us within the larger set of add to cart buttons!
		var allButtons = jQuery( filterAllButtons );

		// Check for quantity
		var idx = ( dedupe !== undefined ) ? dedupe : 0;
		var quantity = jQuery( '#quantity_update_'+bundleid+'_'+idx ).val();
		if ( quantity !== undefined )
		{
			var filterStringForm = 'form[name=add_bundle_to_cart_'+bundleid+']';
			var formSelector = jQuery( filterStringForm );
			if ( formSelector.length === 1 )
			{
				jQuery('<input type="hidden">').attr({name: 'quantity', 'value': quantity}).appendTo(formSelector);
			}
		}

		// do we have anything to examine?
		if ( allButtons.length > 0 )
		{

			var navData = getBestAvailNavData();
			var button;
			var buttonOffset = { top : 0, left : 0 };
			var buttonIndex = allButtons.index( jQuery( filterString ) );
			//
			//  Subscription pages have ambiguous add to cart buttons - we will try to 'dedupe' it !
			//
			if ( buttonIndex === -1 )
			{
				if ( dedupe !== undefined )
				{
					buttonIndex = dedupe;
				}
				else
				{
					//  There is a chance this we're mistaken if the .php generation of the page
					//  didn't generate the addToCart() calls as we expect !
					buttonIndex = 0;
				}
			}
						button = allButtons.eq(buttonIndex);

			//
			//  If we are certain we know what button was clicked, then we'll provide info on the form!
			//
			if ( button != null &&  button.length === 1 && typeof button.offset == 'function' )
			{
				buttonOffset = button.offset();
				var height = jQuery(window).height();
				var width = jQuery(window).width();
				//
				//  We have all the components we want the standard button to submit to the server!
				//  we will now add input fields to the form we intend to submit.
				//
				var filterStringForm = 'form[name=add_to_cart_'+bundleid+']';
				var formSelector = jQuery( filterStringForm );
				var begintime = jQuery.data(document, 'x_readytime');
				var selecttime = 0.0;
				if ( begintime !== undefined )
				{
					selecttime = new Date().getTime() - begintime;
				}
				if ( formSelector.length === 1 )
				{
					//  We include the 'hidden' attribute at this point, because of a believe compatibility issue with Internet Explorer!
					jQuery( '<input type="hidden">' ).attr( { name: 'x_selection', 'value' : buttonIndex } ).appendTo( formSelector  );
					jQuery( '<input type="hidden">' ).attr( { name: 'x_choices', 'value' : allButtons.length } ).appendTo( formSelector );
					jQuery( '<input type="hidden">' ).attr( { name: 'x_top', 'value' : buttonOffset.top } ).appendTo( formSelector  );
					jQuery( '<input type="hidden">' ).attr( { name: 'x_left', 'value' : buttonOffset.left } ).appendTo( formSelector );
					jQuery( '<input type="hidden">' ).attr( { name: 'x_window_height', 'value' : height } ).appendTo( formSelector );
					jQuery( '<input type="hidden">' ).attr( { name: 'x_window_width', 'value' : width } ).appendTo( formSelector );
					jQuery( '<input type="hidden">' ).attr( { name: 'x_select_time', 'value' : selecttime } ).appendTo( formSelector );
					if ( navData )
					{
						var pipeSplit = new RegExp( /\|/ );
						var resultString = navData.split( pipeSplit )[0];
						jQuery( '<input type="hidden">' ).attr( { name: 'x_oldnav', 'value' : resultString } ).appendTo( formSelector );
					}
				}
			}
		}
	}
	catch( e )
	{
		//console.log( e );
			}
	// Regardless of instrumentation failures, try to submit the form for the user.
	try
	{
		document.forms['add_bundle_to_cart_'+bundleid].submit();
	}
	catch( e )
	{
		// swallow exceptions !
	}

}

function addAllDlcToCart()
{
	try
	{
		// Find all of the add to cart buttons displayed on the page
		var filterAllButtons='a.btn_addtocart_content';
		// the filterString can be used to find the element that invoked us, since the subid appears within it
		// note that href*= specifies that href contains the string
		var filterString = 'a[href*=addAllDlcToCart]';
		// within the set of all buttons, get the index of the one that we are dealing with!
		// To do that, we find the anchor that invoked us within the larger set of add to cart buttons!
		var allButtons = jQuery( filterAllButtons );
		// do we have anything to examine?
		if ( allButtons.length > 0 )
		{

			var navData = getBestAvailNavData();
			var button = null;
			var buttonOffset = { top : 0, left : 0 };
			var buttonIndex = allButtons.index( jQuery( filterString ) );
			if ( buttonIndex !== -1 )
			{
				button = allButtons.eq(buttonIndex);
			}
			//
			//  If we are certain we know what button was clicked, then we'll provide info on the form!
			//
			if ( button != null &&  button.length === 1 && typeof button.offset == 'function' )
			{
				buttonOffset = button.offset();
				var height = jQuery(window).height();
				var width = jQuery(window).width();
				//
				//  We have all the components we want the standard button to submit to the server!
				//  we will now add input fields to the form we intend to submit.
				//
				var filterStringForm = 'form[name=add_all_dlc_to_cart]';
				var formSelector = jQuery( filterStringForm );
				var begintime = jQuery.data(document, 'x_readytime');
				var selecttime = 0.0;
				if ( begintime !== undefined )
				{
					selecttime = new Date().getTime() - begintime;
				}
				if ( formSelector.length === 1 )
				{
					//  We include the 'hidden' attribute at this point, because of a believe compatibility issue with Internet Explorer!
					jQuery( '<input type="hidden">' ).attr( { name: 'x_selection', 'value' : buttonIndex } ).appendTo( formSelector  );
					jQuery( '<input type="hidden">' ).attr( { name: 'x_choices', 'value' : allButtons.length } ).appendTo( formSelector );
					jQuery( '<input type="hidden">' ).attr( { name: 'x_top', 'value' : buttonOffset.top } ).appendTo( formSelector  );
					jQuery( '<input type="hidden">' ).attr( { name: 'x_left', 'value' : buttonOffset.left } ).appendTo( formSelector );
					jQuery( '<input type="hidden">' ).attr( { name: 'x_window_height', 'value' : height } ).appendTo( formSelector );
					jQuery( '<input type="hidden">' ).attr( { name: 'x_window_width', 'value' : width } ).appendTo( formSelector );
					jQuery( '<input type="hidden">' ).attr( { name: 'x_select_time', 'value' : selecttime } ).appendTo( formSelector );
					if ( navData )
					{
						var pipeSplit = new RegExp( /\|/ );
						var resultString = navData.split( pipeSplit )[0];
						jQuery( '<input type="hidden">' ).attr( { name: 'x_oldnav', 'value' : resultString } ).appendTo( formSelector );
					}
				}
			}
		}
	}
	catch( e )
	{
		//console.log( e );
			}

	try
	{
		document.forms['add_all_dlc_to_cart'].submit();
	}
	catch( e )
	{
	}
}

function removeFromCart( gid )
{
	try
	{
		// Find all of the add to cart buttons displayed on the page
		var filterAllButtons='a.remove_link';
		// the filterString can be used to find the element that invoked us, since the subid appears within it
		// note that href*= specifies that href contains the string
		var filterString = 'a[href*=' + gid + ']';
		// within the set of all buttons, get the index of the one that we are dealing with!
		// To do that, we find the anchor that invoked us within the larger set of add to cart buttons!
		var allButtons = jQuery( filterAllButtons );
		// do we have anything to examine?

		// do we have anything to examine?
		if ( allButtons.length > 0 )
		{
			var navData = getBestAvailNavData();
			var buttonIndex = allButtons.index( jQuery( filterString ) );
			//
			var button = allButtons.filter( jQuery( filterString ) );
			var buttonOffset = { top : 0, left : 0 };
			if ( button != null &&  button.length === 1 && typeof button.offset == 'function' )
			{
				buttonOffset = button.offset();
				var height = jQuery(window).height();
				var width = jQuery(window).width();
				//
				//  We have all the components we want the standard button to submit to the server!
				//  we will now add input fields to the form we intend to submit.
				//
				var filterStringForm = 'form[name=remove_line_item]';
				var formSelector = jQuery( filterStringForm );
				var begintime = jQuery.data(document, 'x_readytime');
				var selecttime = 0.0;
				if ( begintime !== undefined )
				{
					selecttime = new Date().getTime() - begintime;
				}
				if ( formSelector.length === 1 )
				{
					//  We include the 'hidden' attribute at this point, because of a believe compatibility issue with Internet Explorer!
					jQuery( '<input type="hidden">' ).attr( { name: 'x_selection', 'value' : buttonIndex } ).appendTo( formSelector  );
					jQuery( '<input type="hidden">' ).attr( { name: 'x_choices', 'value' : allButtons.length } ).appendTo( formSelector );
					jQuery( '<input type="hidden">' ).attr( { name: 'x_top', 'value' : buttonOffset.top } ).appendTo( formSelector  );
					jQuery( '<input type="hidden">' ).attr( { name: 'x_left', 'value' : buttonOffset.left } ).appendTo( formSelector );
					jQuery( '<input type="hidden">' ).attr( { name: 'x_window_height', 'value' : height } ).appendTo( formSelector );
					jQuery( '<input type="hidden">' ).attr( { name: 'x_window_width', 'value' : width } ).appendTo( formSelector );
					jQuery( '<input type="hidden">' ).attr( { name: 'x_select_time', 'value' : selecttime } ).appendTo( formSelector );
					if ( navData )
					{
						var pipeSplit = new RegExp( /\|/ );
						var resultString = navData.split( pipeSplit )[0];
						jQuery( '<input type="hidden">' ).attr( { name: 'x_oldnav', 'value' : resultString } ).appendTo( formSelector );
					}
				}
			}
		}
	}
	catch( e )
	{
			}
	try
	{
		document.getElementById('line_item_to_remove_gid').value = gid;
		document.forms['remove_line_item'].submit();
	}
	catch( e )
	{
			}
}

function dropdownSelectOption( dropdownName, subId, inCart )
{
		$J('#add_to_cart_' + dropdownName + '_value').val( subId );
	$J('#add_to_cart_' + dropdownName + '_selected_text').html( $J('#add_to_cart_' + dropdownName + '_menu_option_' + subId).html() );
	$J('#add_to_cart_' + dropdownName + '_description_text').html( $J('#add_to_cart_' + dropdownName + '_menu_option_description_' + subId).html() );
	if ( inCart )
	{
		$J('#add_to_cart_' + dropdownName + '_add_button').hide();
		$J('#add_to_cart_' + dropdownName + '_in_cart_button').show();
	}
	else
	{
		$J('#add_to_cart_' + dropdownName + '_add_button').show();
		$J('#add_to_cart_' + dropdownName + '_in_cart_button').hide();
	}
	HideMenu('add_to_cart_' + dropdownName + '_pulldown', 'add_to_cart_' + dropdownName + '_menu');
}

function dropdownAddToCart( dropdownName )
{
		if ( $J('#add_to_cart_' + dropdownName + '_value').val() == '')
	{
		ShowMenu( 'add_to_cart_' + dropdownName + '_pulldown', 'add_to_cart_' + dropdownName + '_menu' );
	}
	else
	{
		addToCart( dropdownName );
	}
}


function AgeGateClear()
{
	WebStorage.SetCookie('birthtime', 0, -1);
	window.location.reload();
}

function InitHorizontalAutoSliders()
{
	$J('.store_horizontal_autoslider' ).each( function() {
		var $Scroll = $J(this);
		var $Wrapper = $Scroll.wrap( $J('<div/>', {'class': 'store_horizontal_autoslider_ctn' } ) ).parent();
		var $SliderCtn = $J('<div/>', {'class': 'slider_ctn store_autoslider'} );
		var $SliderLeft = $J('<div/>', {'class': 'slider_left'} ).append($J('<span/>'));
		var $SliderRight = $J('<div/>', {'class': 'slider_right'} ).append($J('<span/>'));
		var $Slider = $J('<div/>', {'class': 'slider' } );
		$SliderCtn.append(
			$SliderLeft, $SliderRight,
			$J('<div/>', {'class': 'slider_bg' } ),
			$Slider.append( $J('<div/>', {'class': 'handle'} ) )
		);
		$Wrapper.after( $SliderCtn );
		var fnFixHeight = function() { $Wrapper.height( $Scroll[0].clientHeight ); };

		$Wrapper.on('v_contentschanged.AutoSlider', function() {
			fnFixHeight();
			$Wrapper.find('img' ).one('load', fnFixHeight );
		} );
		$J(window ).on('resize.AutoSlider', fnFixHeight );

		window.setTimeout( function() {
			$Wrapper.trigger('v_contentschanged.AutoSlider');

			var Slider = new CScrollSlider( $Scroll, $SliderCtn );

			var fnGetScrollIncrement = function() {
				var $TryChild = $Scroll;
				do
				{
					$TryChild = $TryChild.children().first();
					if ( $TryChild.width() && $TryChild.outerWidth() < $Scroll.width() )
					{
						// optional param determines whether or not we include margin
						// As a note, if you use selective margin make sure you're using
						// :not(:last-child) as it'll peek the first and you want to ensure
						// that element has the expected margin.
						return $TryChild.outerWidth( true );
					}
				} while ( $TryChild.length );

				return $Wrapper.width() / 3;
			};

			$SliderLeft.click( function() {
				Slider.SetValue( Slider.GetValue() - fnGetScrollIncrement(), 250 );
			});
			$SliderRight.click( function() {
				Slider.SetValue( Slider.GetValue() + fnGetScrollIncrement(), 250 );
			});

		}, 1 );
	});

	$J('.store_horizontal_minislider' ).each( function() {
		var $Scroll = $J(this);
		var $Wrapper = $Scroll.wrap( $J('<div/>', {'class': 'store_horizontal_minislider_ctn' } ) ).parent();
		var $SliderLeft = $J('<div/>', {'class': 'slider_left'} ).append($J('<span/>'));
		var $SliderRight = $J('<div/>', {'class': 'slider_right'} ).append($J('<span/>'));

		$Wrapper.append( $SliderLeft, $SliderRight );

		var fnShowHideButtons = function()
		{
			var nTallestChild = 0;
			$Scroll.children().each( function() {
				nTallestChild = Math.max( nTallestChild, $J(this ).outerHeight() );
			});
			$Wrapper.css('height', nTallestChild );

			if ( $Scroll.scrollLeft() <= 1 )
				$SliderLeft.hide();
			else
				$SliderLeft.show();

			if ( $Scroll.scrollLeft() + $Scroll.width() < $Scroll[0].scrollWidth - 1 )
				$SliderRight.show();
			else
				$SliderRight.hide();
		};

		$Scroll.on( 'scroll.AutoSlider v_contentschagned.AutoSlider', fnShowHideButtons );
		$J(window ).on('resize.AutoSlider', fnShowHideButtons );

		$SliderLeft.click( function() {
			$Scroll.animate( {scrollLeft: Math.max( 0, $Scroll.scrollLeft() - $Wrapper.width() ) } );
			fnShowHideButtons();
		} );
		$SliderRight.click( function() {
			$Scroll.animate( {scrollLeft: Math.min( $Scroll[0].scrollWidth - $Scroll.width(), $Scroll.scrollLeft() + $Wrapper.width() ) } );
			fnShowHideButtons();
		} );

		window.setTimeout( fnShowHideButtons, 1 );
	});
}

function PreloadImages( elElement )
{
	$J(elElement).find("*[data-background-image-url]").each(function(i, j){
		var $elTarget = $J(j);
		$elTarget.css({'background-image': 'url(' + $elTarget.data('background-image-url') + ')' });
	});

	$J(elElement).find("img[data-image-url]").each(function(i, j){
		var $elTarget = $J(j);
		$elTarget.attr('src', $elTarget.data('image-url') );
	});

}


// Common glue logic for a carousel of some kind
var CGenericCarousel = function( $elContainer, nSpeed, fnOnFocus, fnOnBlur, fnClickThumb, bNoWrap )
{
	this.$elContainer = $elContainer;
	this.nSpeed = nSpeed;
	this.fnOnFocus = fnOnFocus;
	this.fnOnBlur = fnOnBlur;
	this.fnClickThumb = fnClickThumb;
	this.bNoWrap = bNoWrap;
	this.nIndex = 0;

	this.$elArrowLeft = $J('.arrow.left', this.$elContainer);
	this.$elArrowRight = $J('.arrow.right', this.$elContainer);

	this.UpdateItems();

	this.fnOnFocus( this.nIndex );

	var instance = this;

	this.fnMouseOver = function(){
		clearInterval( instance.timerAdvance );
	};

	this.fnMouseOut = function(){

		if( instance.timerAdvance )
			clearInterval( instance.timerAdvance );

		if( instance.nSpeed > 0 )
		{
			instance.timerAdvance = setInterval ( function ()
			{
				if( !instance.bIsResponsive() )
					instance.Advance ();
			}, nSpeed * 1000 );
		}
	};

	this.fnMouseOut();

	$elContainer.bind('mouseover', function(e) { instance.fnMouseOver(); } );
	$elContainer.bind('mouseout', function(e) { instance.fnMouseOut(); }  );
	// If we get a scroll event, and we're in respondive, hint all remaining images
	this.$elItems.parent().bind('scroll', function(e) { if( instance.bIsResponsive() ) PreloadImages( $elContainer ); }   );

	// Only bind a mouseover thumb event if we have one.
	if( fnClickThumb ) {

		this.$elThumbs.each(function (i, j)
		{

			$J(j).bind('click touchstart', (function( index, ele ) {
				return function() {
					instance.fnClickThumb( index, ele );
				};}(i, j) )
			);
		});
	}

	// Bind arrows (if we have them)
	this.$elArrowLeft.click( function(e){ instance.Advance(-1); e.preventDefault(); return true; });
	this.$elArrowRight.click( function(e){ instance.Advance(); e.preventDefault(); return true; });

	this.UpdateControls();

};

// Advances the carousel by one. Optionally pass in a specific index to advance to.
CGenericCarousel.prototype.UpdateControls = function( )
{
	// Only one item, so hide the arrows since they're not useful.
	if( this.nItems == 1 )
	{
		this.$elArrowLeft.hide();
		this.$elArrowRight.hide();
		return;
	}

	// Our carousel does not wrap, so conditionally show/hider arrows
	if( this.bNoWrap )
	{
		if( this.nIndex == 0 )
			this.$elArrowLeft.hide();
		else
			this.$elArrowLeft.show();

		if( this.nIndex == this.nItems-1 )
			this.$elArrowRight.hide();
		else
			this.$elArrowRight.show();

	}
	else
	{
		this.$elArrowLeft.show();
		this.$elArrowRight.show();
		return;
	}



};

// Start loading images further down the rotation.
CGenericCarousel.prototype.HintNearbyCapsules = function( )
{
	var nNextIndex = this.GetNextValidIndex();
	var elNextElement = this.$elItems[ nNextIndex ];

	PreloadImages( this.$elItems[ this.nIndex ] );

	// If we're going to auto-scroll, hint the next item.
	if( this.nSpeed > 0 )
		PreloadImages( elNextElement );
};


CGenericCarousel.prototype.UpdateItems = function()
{
	this.$elThumbs = $J('.carousel_thumbs', this.$elContainer).children();
	this.$elItems = $J('.carousel_items', this.$elContainer).children();
	this.nItems = this.$elItems.length;
	this.HintNearbyCapsules();
}

CGenericCarousel.prototype.GetNextValidIndex = function( nNewIndex )
{
	if( this.nItems == 0 )
		return false;

	var nIndex = this.nIndex;

	var rgTargets = this.$elItems;
	var nSearched = 0;

	if( nNewIndex < 0 ) // Allow index of -1 to go backwards.
	{
		// Skip hidden items
		do
		{
			nIndex = ( nIndex + nNewIndex ) % this.nItems;

			// JS's % operator doesn't wrap, so we need to fix it...
			if( nIndex < 0 )
				nIndex += this.nItems;

		}
		while( !$J( rgTargets[ nIndex ] ).is( ":visible" ) && nSearched++ < this.nItems );
	}
	else if( nNewIndex !== undefined )
	{
		if( nIndex == nNewIndex )
			return false
		return nNewIndex;
	}
	else
	{
		// Skip hidden items
		do
		{
			nIndex = ( nIndex + 1 ) % this.nItems;
		}
		while( !$J( rgTargets[ nIndex ] ).is( ":visible" ) && nSearched++ < this.nItems );

	}

	return nIndex;
}

CGenericCarousel.prototype.bIsResponsive = function( )
{
	return window.UseSmallScreenMode && window.UseSmallScreenMode();
}

CGenericCarousel.prototype.Advance = function( nNewIndex )
{
	if( this.bIsResponsive() )
		return this.ResponsiveAdvance(nNewIndex);

	if( this.nItems == 0 )
		return;

	var nNextIndex = this.GetNextValidIndex( nNewIndex );
	if( nNextIndex == this.nIndex || nNextIndex === false )
		return;

	this.fnOnBlur( this.nIndex );
	this.fnOnFocus( nNextIndex );
	this.nIndex = nNextIndex;

	this.UpdateControls();
	this.HintNearbyCapsules();
}

// Advance function may be (totally is) different in responsive mode
CGenericCarousel.prototype.ResponsiveAdvance = function( nNewIndex )
{
	var $elTarget = this.$elItems.parent();
	var nMaxScroll = this.$elItems.outerWidth( true ) * this.nItems - $elTarget.innerWidth();
	var nCurrentScroll = $elTarget.scrollLeft();
	var nScrollRate = this.$elItems.outerWidth( true );
	if( nScrollRate > $elTarget.innerWidth() * 1.1 )
		nScrollRate = $elTarget.innerWidth();

	var nTargetScroll = nCurrentScroll + ( nNewIndex < 0 ? -1 : 1 ) * nScrollRate;

	if( nCurrentScroll == nMaxScroll && nCurrentScroll > nCurrentScroll)
		nTargetScroll = 0;

	if( nTargetScroll > nMaxScroll )
		nTargetScroll = nMaxScroll;

	if( nTargetScroll < 0 )
		nTargetScroll = 0;

	// Hintload capsules we're about to show
	this.$elItems.each( function(i, j) {
		var $el = $J(j);
		var rgOffset = $el.offset();
		if( rgOffset.left < nScrollRate * 2 )
		{
			PreloadImages( $el );
		}
	});

	$J( $elTarget ).stop().animate({scrollLeft: nTargetScroll}, 800);

}

// Carousel which adds the 'focus' class to the active element. Can be used for fading carousels
// @todo: This needs to be detangled from CGenericCarousel a bit more to be useful in other applications.....
function CreateFadingCarousel( $elContainer, nSpeed, bNoWrap, fnOnBlur )
{

	var fnOnFocus = function(  nIndex )
	{
		this.$elThumbs.removeClass( 'focus' );
		this.$elItems.removeClass( 'focus' );

		$J( this.$elThumbs[nIndex] ).addClass('focus');
		$J( this.$elItems[nIndex] ).addClass('focus');
		GDynamicStore.s_ImpressionTracker.TrackAppearanceIfVisible( this.$elItems[ nIndex ] );
	}

	var fnMouseOverThumb = function( index, element )
	{
		this.Advance(index);
	};
	if( !fnOnBlur )
		fnOnBlur = function(){};

	return new CGenericCarousel( $elContainer, nSpeed, fnOnFocus, fnOnBlur, fnMouseOverThumb, bNoWrap );

}


// Element appearance montior. Designed to replace jQuery.appear

var CAppearMonitor = function( fnOnAppear ){
	this.rgMonitoredElements = [];
	this.bRunning = false;
	this.unTimerFrequency = 500;
	this.bRegisteredWindowEvent = false;
	this.fnOnAppear = fnOnAppear;
};

CAppearMonitor.prototype.RegisterScrollEvent = function( elTarget )
{
	var instance = this;

	$J(elTarget).on('scroll', function()
	{
		if( instance.bRunning || instance.rgMonitoredElements.length == 0 )
			return;

		instance.bRunning = true;
		setTimeout( instance.CheckVisibility.bind(instance), instance.unTimerFrequency );

	});
}

CAppearMonitor.prototype.CheckVisibility = function()
{
	// Walk backwards so we can slice while we iterate
	for( var i=this.rgMonitoredElements.length-1; i>=0; i--)
	{
		var rgMonitored = this.rgMonitoredElements[i];
		if( this.bIsElementVisible( rgMonitored.element ) )
		{
			this.rgMonitoredElements.splice(i,1);
			this.fnOnAppear( rgMonitored.element );
		} else if( !document.body.contains( rgMonitored.element ) )
		{
			this.rgMonitoredElements.splice(i,1);
		}
	}

	this.bRunning = false;
};

CAppearMonitor.prototype.bIsElementVisible = function( elElement )
{
	if( !elElement )
		return;

	// Check physical position vs viewport. This is likely the fastest early-out.
	var rectElement = elElement.getBoundingClientRect();
	if( !( rectElement.top >= 0 && rectElement.left >= 0
		&& rectElement.bottom <= window.innerHeight && rectElement.right <= window.innerWidth ) )
			return false;

	// Ask jQuery to compute visibility, since it knows all the edge cases.
	if( !$J(elElement).is(':visible'))
		return false;

	return true;

};

CAppearMonitor.prototype.RegisterElement = function( elTarget )
{
	if( $J(elTarget).data('manual-tracking' ) )
		return;

	this.rgMonitoredElements.push({
		element: elTarget
	});

	// Register the window scroll event ONLY after we have something to monitor
	if( !this.bRegisteredWindowEvent)
		this.RegisterScrollEvent( window );
};

CAppearMonitor.prototype.TrackAppearanceIfVisible = function( elTarget )
{
	// Ensure we're actually in the viewport (Carousel may be scrolling out of view and calling this)
	if( !this.bIsElementVisible( elTarget ) )
		return;

	this.TrackAppearance( elTarget );
};

CAppearMonitor.prototype.TrackAppearance = function( elTarget )
{
	// Find our element, splice it out if we were tracking it
	for( var i=this.rgMonitoredElements.length-1; i>=0; i--)
	{
		var rgMonitored = this.rgMonitoredElements[i];
		if(  rgMonitored.element === elTarget )
		{
			this.rgMonitoredElements.splice(i,1);
		}
	}
	// Trigger it, even if we weren't actually tracking it
	this.fnOnAppear( elTarget );
};

/**
 * Sets up a form to automagically save itself when edited.
 * Note: Ajax requests inside fnOnChange should bind their first param to async
 * @param elForm
 * @param fnOnChange
 * @constructor
 */
function RegisterAutoSaveForm( elForm, fnOnChange )
{
	// Time to wait before saving a changed element that hasn't explicitly lost focus
	var nSaveDelay = 5000; // 5 seconds

	// Attempt to save if we're closing the tab in a dirty state
	$J( window ).on( 'unload', function(){
		$J( elForm ).trigger('saveform');
	} );

	$J( elForm ).on( 'saveform', function(){

		if (!$J.contains(document, elForm))
		{
			return;
		}

		$J( 'input[type=text],input[type=radio],input[type=checkbox],select,textarea', elForm ).trigger('save');
	});

	// Text elements
	$J( 'input[type=text],textarea', elForm ).each(function(index, element ){
		var curVal = element.value;
		var timer = null;

		var fnUpdateIfChanged = function( bAsync ){
			if( element.value != curVal )
			{
				curVal = element.value;
				fnOnChange ( bAsync );
			}
		};

		$J(element).on('save', fnUpdateIfChanged.bind(null, false ) );

		$J(element).on('keyup', function(){
			if( timer != null )
				clearTimeout( timer );
			timer = setTimeout( fnUpdateIfChanged.bind(null, true ), nSaveDelay );
		});
	});

	// input types that use .checked
	$J( 'input[type=checkbox],input[type=radio]', elForm ).each(function(index, element ){
		var curVal = element.checked;
		var timer = null;

		var fnUpdateIfChanged = function( bAsync ){
			if( element.checked != curVal )
			{
				curVal = element.checked;
				fnOnChange ( bAsync );
			}
		};

		$J(element).on('save', fnUpdateIfChanged.bind(null, false ));

		$J(element).on('change', function(){
			if( timer != null )
				clearTimeout( timer );
			timer = setTimeout( fnUpdateIfChanged.bind(null, true ), nSaveDelay );
		});
	});

	// select boxes
	$J( 'select', elForm ).each(function(index, element ){
		var curVal = element.selectedIndex;
		var timer = null;
		console.log(element);

		var fnUpdateIfChanged = function( bAsync ){
			if( element.selectedIndex != curVal )
			{
				curVal = element.selectedIndex;
				fnOnChange ( bAsync );
			}
		};

		$J(element).on('save', fnUpdateIfChanged.bind(null, false ));

		$J(element).on('change', function(){
			if( timer != null )
				clearTimeout( timer );
			timer = setTimeout( fnUpdateIfChanged.bind(null, true ), nSaveDelay );
		});
	});
}

function RecordAJAXPageView( url )
{
	if ( typeof ga != "undefined" && ga )
	{
		var rgURLs = [ 'https://store.steampowered.com/', 'https://store.steampowered.com/' ];
		for ( var i = 0; i < rgURLs.length; ++i )
		{
			var baseURL = rgURLs[i];
			var idx = url.indexOf( baseURL );
			if ( idx != -1 )
			{
				url = url.substring( idx + baseURL.length );
			}
			ga( 'send', 'pageview', url );
			return;
		}
	}
}


function FollowCuratorWithCallback( clanID, bFollow, onComplete )
{
	var bHaveUser = ( g_AccountID != 0 );
	if ( !bHaveUser )
	{
		ShowAlertDialog("Please log in", "You must be logged in to follow a curator");
		return;
	}

	$J.post(
		'https://store.steampowered.com/curators/ajaxfollow',
		{ 'clanid' : clanID, 'sessionid' : g_sessionID, 'follow' : bFollow ? 1 : 0 },
		function( data )
		{
			onComplete( bFollow );
		},
		'json'
	).fail( function()
		{
			ShowAlertDialog( 'Error', 'There was a problem trying to follow the Steam Curator.<br>Note: You cannot follow a curator you already ignore.' );
		}
	);
	return false;
}

function IgnoreCuratorWithCallback( clanID, bIgnore, onComplete )
{
	var bHaveUser = ( g_AccountID != 0 );
	if ( !bHaveUser )
	{
		ShowAlertDialog("Please log in", "You must be logged in before you can ignore a Steam Curator");
		return;
	}

	$J.post(
		'https://store.steampowered.com/curators/ajaxignore',
		{ 'clanid' : clanID, 'sessionid' : g_sessionID, 'ignore' : bIgnore ? 1 : 0 },
		function( data )
		{
			onComplete( bIgnore );
		},
		'json'
	).fail( function()
		{
			ShowAlertDialog( 'Error', 'There was a problem trying to ignore the Steam Curator.<br>Note: You cannot ignore a curator you already follow. ' );
		}
	);
	return false;
}

