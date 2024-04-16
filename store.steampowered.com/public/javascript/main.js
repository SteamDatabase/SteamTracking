
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

		if ( typeof GDynamicStore != 'undefined' )
		{
			strUrlTarget += '?review_score_preference=' + ( !GDynamicStore.s_preferences['review_score_preference'] ? 0 : GDynamicStore.s_preferences['review_score_preference'] );
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
			if ( $Elem.data('hoverDisableScreenshots') )
			{
				rgAjaxParams['disableScreenshots'] = true;
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

function UpdateWishlistCount( nCount )
{
	if ( nCount == 0 )
		$JFromIDOrElement('wishlist_link').text( 'Wishlist' );
	else
		$JFromIDOrElement('wishlist_link').html( 'Wishlist (<span id="wishlist_item_count_value">' + nCount.toString() + '</span>)' );
}

function AddToWishlist( appid, divToHide, divToShowSuccess, divToShowError, navref, divToHide2 )
{
	if ( !g_AccountID )
	{
		ShowAlertDialog( "Please login...", "You must log into Steam to add an item to your wishlist." )
		.done( function() {
			window.location.href = 'https://store.steampowered.com//login?redir=app/' + appid;
		} );
		return;
	}

	var url = 'https://store.steampowered.com/api/addtowishlist';
	if ( navref )
	{
		MakeNavCookie( navref, url );
	}

	$J.post( url, {sessionid: g_sessionID, appid: appid} )
		.done( function( data ) {
			$JFromIDOrElement(divToHide).hide();

			if ( divToHide2 )
				$JFromIDOrElement(divToHide2).hide();

			if ( data && data.success ) {
				$JFromIDOrElement(divToShowSuccess).show();
				if ( data.saleTaskCompleted ) {
					NewStickerPackModal( 'Add to your wishlist' );
				}
			}
			else {
                $JFromIDOrElement(divToShowError).show();
            }

			UpdateWishlistCount( data.wishlistCount );

			if ( typeof GDynamicStore != 'undefined' )
				GDynamicStore.InvalidateCache();
		}).fail( function() {
			$JFromIDOrElement(divToShowError).show();
		});
}

function RemoveFromWishlist( appid, divToHide, divToShowSuccess, divToShowError, navref, divToHide2 )
{
	var url = 'https://store.steampowered.com/api/removefromwishlist';
	if ( navref )
	{
		MakeNavCookie( navref, url );
	}

	$J.post( url, {sessionid: g_sessionID, appid: appid} )
		.done( function( data ) {
			$JFromIDOrElement(divToHide).hide();

			if ( divToHide2 )
				$JFromIDOrElement(divToHide2).hide();

			if ( data && data.success ) {
				$JFromIDOrElement(divToShowSuccess).show();
			}
			else {
				$JFromIDOrElement(divToShowError).show();
			}

			UpdateWishlistCount( data.wishlistCount );

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
				UpdateWishlistCount( data.wishlistCount );
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
		ShowAlertDialog( 'Ignore App', 'There was a problem saving your changes.  Please try again later.' );
	});
}

// unlike wishlists, the "divToHide" is only hidden on success
function RecommendGame( appid, steamworksappid, comment, rated_up, is_public, language, received_compensation, divBtn, onSuccessFunc, divToShowError, navref, bDisableComments )
{
	$JFromIDOrElement(divBtn).hide();
	var url = 'https://store.steampowered.com/friends/recommendgame';
	if ( navref )
		MakeNavCookie( navref, url );

	var params = {
		appid: appid,
		steamworksappid: steamworksappid,
		comment: comment,
		rated_up: rated_up,
		is_public: is_public,
		language: language,
		received_compensation:
		received_compensation,
		disable_comments: bDisableComments,
				sessionid: g_sessionID
	};

	$J.post( url, params )
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

function RegisterSteamOnWebPanelShownHandler( f )
{
	$J(document).on( 'visibilitychange', function() {
		if ( document.visibilityState === "visible" )
			f();
	});
}

function RegisterSteamOnWebPanelHiddenHandler( f )
{
	$J(document).on( 'visibilitychange', function() {
		if ( document.visibilityState === "hidden" )
			f();
	});
}

function InitVideoFocusWatcher()
{
	const k_strVideoSelector = 'video[data-video-pause-on-blur],video.fullscreen-bg__video,video.fullscreen-bg__video_mobile';
	const k_nBlurTimeout = 20000;

	let nBlurTimeoutId = undefined;
	const onWindowBlur = function()
	{
		if ( !nBlurTimeoutId )
		{
			nBlurTimeoutId = window.setTimeout( () =>
			{
				
				$J( k_strVideoSelector ).trigger( 'pause' );
			}, k_nBlurTimeout );
		}
	}

	const onWindowFocus = function()
	{
		if ( nBlurTimeoutId )
		{
			window.clearTimeout( nBlurTimeoutId );
		}

		nBlurTimeoutId = undefined;
		$J( k_strVideoSelector ).trigger( 'play' );
	}

	$J( window ).on( 'blur' , onWindowBlur );
	$J( window ).on( 'focus' , onWindowFocus );

	// Start the blur timer now if the document initially doesn't have focus
	if ( !document.hasFocus() )
		onWindowBlur();
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

function ExtractSNR( href )
{
	var match = href.match( /[\?&]snr=([^&]*)/ );
	return match && match[1];
}

function ReplaceSNR( href, snr )
{
	return href.replace( /([\?&]snr=)[^&]*/, '$1' + snr );
}

/**
 *
 * @param $Link
 * @param fnCallback	takes an SNR code, should return the new SNR code
 * @constructor
 */
function ModifyLinkSNR( $Link, fnCallback )
{
	var href = $Link.attr('href');
	var snr = href && ExtractSNR( href );
	if ( snr )
	{
		$Link.attr( 'href', ReplaceSNR( href, fnCallback( snr ) ) );
	}
}

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

var g_nMobileSearchTermTimer = 0;

// how long we wait after the first keypress after a search or page load
var k_nStartSearchTimeoutMS = 350;

// how long we extend the wait after each keypress.  We always time out at 3x the base search timeout ms
var k_nSearchKeypressTimeoutExtensionMS = 125;

// TODO: only reason for having this here is to support the SNR.  If the mobile app can identify it, or it's not important to include the SNR then
// we'll have the mobile app navigate to the search page without having to post a message to the webview
function MobileApp_ShowSearchResults( $SNR, $Term )
{
	const snr = $SNR ? '&snr=' + $SNR : '';
	window.location = 'https://store.steampowered.com/search/?term=' + $Term + snr;
}

function MobileApp_UpdateSearchSuggestions( $Term )
{
	var $SuggestionsCtn = $J('#searchterm_options');
	var $Suggestions = $J('#search_suggestion_contents');

	var msDelayBeforeTimeout = k_nStartSearchTimeoutMS;
	if ( g_nMobileSearchTermTimer !== 0 )
	{
		window.clearTimeout( g_nMobileSearchTermTimer );
		g_nMobileSearchTermTimer = 0;
		msDelayBeforeTimeout = k_nSearchKeypressTimeoutExtensionMS;
	}

	g_nMobileSearchTermTimer = window.setTimeout( function() {
			g_nMobileSearchTermTimer = 0;
			sLastVal = $Term;
			SearchTimeout( $Term, v_trim( sLastVal ), $SuggestionsCtn, $Suggestions, true /* bUseResponsivePopupOverlay */ );
		}, msDelayBeforeTimeout );
}

function InitializeSearchSuggestionParams( cc, realm, l, rgUserPreferences, strPackageXMLVersion )
{
	g_oSuggestParams = $J.extend( {
		cc: cc,
		realm: realm,
		l:l,
		v: strPackageXMLVersion
	}, rgUserPreferences );
}

// Enable search where the search text input is part of the web page
function EnableSearchSuggestions( elemTerm, navcontext, cc, realm, l, rgUserPreferences, strPackageXMLVersion, elemSuggestionCtn, elemSuggestions )
{
	var $Term = $JFromIDOrElement(elemTerm);
	var $SuggestionsCtn = elemSuggestionCtn ? $JFromIDOrElement(elemSuggestionCtn) : $J('#searchterm_options');
	var $Suggestions = elemSuggestions ? $JFromIDOrElement(elemSuggestions) : $J('#search_suggestion_contents');

	$Term.parents('div.searchbox').click( function( event ) {
		if ( event.target && event.target.tagName != 'INPUT' )
			$J(elemTerm).focus();
	});

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
	$Term.add( $SuggestionsCtn ).on( 'focusout', function( event ) {
		if ( event.relatedTarget && ( $J.contains( $Term[0], event.relatedTarget ) || $Term.is( event.relatedTarget ) || $J.contains( $SuggestionsCtn[0], event.relatedTarget ) ) )
		{
			return;
		}
		SearchSuggestSetDefaultSearchText( $Term, $SuggestionsCtn, $Suggestions );
	} );

	InitializeSearchSuggestionParams( cc, realm, l, rgUserPreferences, strPackageXMLVersion );
}
function SearchTimeout( $Term, value, $SuggestionsCtn, $Suggestions, bUseResponsivePopupOverlay = false )
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
				$J(el).on( 'mouseleave', function( event ) { SearchSuggestOnMouseLeave( event, $J(el) ); } );
				$J(el).on( 'mousemove', function( event ) { SearchSuggestOnMouseOver( event, $J(el) ); } );
			} );
			ShowSuggestionsAsNecessary( false, $SuggestionsCtn, $Suggestions, bUseResponsivePopupOverlay );
		} );
	}
	else
	{
		$Suggestions.empty();
		ShowSuggestionsAsNecessary( false, $SuggestionsCtn, $Suggestions, bUseResponsivePopupOverlay );
	}
}

function ShowSuggestionsAsNecessary( bForceHide, $SuggestionsCtn, $Suggestions, bUseResponsivePopupOverlay = false )
{
	var bShow = $Suggestions.children().length > 0 && !bForceHide;
	if ( bShow )
	{
		ShowWithFade( $SuggestionsCtn );
	}
	else
	{
		HideWithFade( $SuggestionsCtn );
	}

	if ( bUseResponsivePopupOverlay )
	{
		UpdateResponsiveSearchOverlay( bShow );
	}
}

function UpdateResponsiveSearchOverlay( bShow )
{
	var $ResponsiveSearchOverlay = $J( '#responsive_store_search_overlay' );
	if ( bShow )
	{
		$ResponsiveSearchOverlay.show();
		document.body.classList.add( 'responsive_store_overlay_visible' );
	}
	else
	{
		$ResponsiveSearchOverlay.hide();
		document.body.classList.remove( 'responsive_store_overlay_visible' );
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
			if ( !$CurSuggestion.length )
				$CurSuggestion = $Suggestions.children('.hover');

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
				$CurSuggestion.removeClass( 'hover' );
				$NewSuggestion.addClass('focus');
			}

			//client webkit will move cursor on up/down
			event.preventDefault();
		}

	}
}
function SearchSuggestOnMouseOver( event, $Suggestion )
{
	$Suggestion.siblings().removeClass( 'focus' );
	$Suggestion.removeClass( 'focus' );
	$Suggestion.siblings().removeClass( 'hover' );
	$Suggestion.addClass( 'hover' );
}

function SearchSuggestOnMouseLeave( event, $Suggestion )
{
	$Suggestion.removeClass( 'focus' );
	$Suggestion.removeClass( 'hover' );
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
		posts.push( CrossDomainPost( 'https://store.steampowered.com/freelicense/addfreelicense/' + subids[i], { ajax: true, sessionid: g_sessionID }) );
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
		else if ( data && data.purchaseresultdetail == 24 )
			ShowAlertDialog( strDisplayName, 'Before you can add this product to your Steam account, you must own the base product.' );
		else
			ShowAlertDialog( strDisplayName, 'There was a problem adding this product to your account.  Please try again later.' );
	}).always( function () {
		delete window.g_bAddFreeLicenseInFlight;
	});
}


function AddFreeBundle( bundleid, strDisplayName )
{
	if ( window.g_bAddFreeLicenseInFlight )
		return;

	window.g_bAddFreeLicenseInFlight = true;

	var posts = [];
	posts.push( CrossDomainPost( 'https://store.steampowered.com/freelicense/addfreebundle/' + bundleid, { ajax: true, sessionid: g_sessionID }) );

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
						if( typeof g_AccountID  != 'undefined' && g_AccountID > 0 )
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

function AddToAccountCart( subid )
{
	let fnAddToCart = function() { addToCart( subid ); };
	if ( typeof window.AddItemToCart !== 'undefined' )
	{
		fnAddToCart();
	}
	else
	{
		window.rgOnAccountCartReadyCallbacks = ( window.rgOnAccountCartReadyCallbacks || [] ).concat( fnAddToCart );
	}
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
		var filterStringForm = 'form[name=add_to_cart_'+subid+']';
		var $Form = jQuery( filterStringForm );

		if ( !$Form.length || ( $Form[0].getAttribute( 'action' ) || '' ).indexOf( '/freelicense/' ) === -1 )
		{
			if ( typeof g_bUseNewCartAPI != 'undefined' && g_bUseNewCartAPI && typeof window.AddItemToCart !== 'undefined' )
			{
				// subid may represent an actual subid... or it might just be a way to get the right form. Figure that out here.
				var actualSubID = subid;
				if ( $Form.length )
				{
					var $Input = $Form.children( 'input[name=subid]' );
					if ( $Input.length )
					{
						actualSubID = JSON.parse( $Input[0].value );
					}
				}

												var navdata;
				if ( typeof GStoreItemData !== 'undefined' )
					navdata = $Form.find('input[name=originating_snr]').length > 0 ? GStoreItemData.GetPreviousPageNavParamObj() : GStoreItemData.GetCurrentPageNavParamObj();

				window.AddItemToCart( actualSubID, undefined /* bundleid */, navdata );
				return;
			}
		}

		if ( !$Form.length )
		{
			$Form= $J('<form/>', { name: 'add_to_cart_' + subid, action: 'https://store.steampowered.com/cart/', method: 'POST', style: 'display: none;' } );
			$Form.append( $J('<input/>', { type: 'hidden', name: 'action', value: 'add_to_cart' } ) );
			$Form.append( $J('<input/>', { type: 'hidden', name: 'subid', value: subid } ) );
			$Form.append( $J('<input/>', { type: 'hidden', name: 'sessionid', value: g_sessionID } ) );

			if ( typeof GStoreItemData !== 'undefined' )
				$Form.append( $J('<input/>', { type: 'hidden', name: 'snr', value: GStoreItemData.GetCurrentPageNavParams() } ) );

			$J(document.body).append( $Form );
		}

		var quantity = jQuery( '#quantity_update_'+subid+'_'+idx ).val();
		if ( quantity !== undefined )
		{
			jQuery('<input type="hidden">').attr({name: 'quantity', 'value': quantity}).appendTo($Form);
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

				var begintime = jQuery.data(document, 'x_readytime');

				var selecttime = 0.0;
				if ( begintime !== undefined )
				{
					selecttime = new Date().getTime() - begintime;
				}
				if ( $Form.length === 1 )
				{
					//  We include the 'hidden' attribute at this point, because of a believe compatibility issue with Internet Explorer!
					jQuery( '<input type="hidden">' ).attr( { name: 'x_selection', 'value' : buttonIndex } ).appendTo( $Form  );
					jQuery( '<input type="hidden">' ).attr( { name: 'x_choices', 'value' : allButtons.length } ).appendTo( $Form );
					jQuery( '<input type="hidden">' ).attr( { name: 'x_top', 'value' : buttonOffset.top } ).appendTo( $Form  );
					jQuery( '<input type="hidden">' ).attr( { name: 'x_left', 'value' : buttonOffset.left } ).appendTo( $Form );
					jQuery( '<input type="hidden">' ).attr( { name: 'x_window_height', 'value' : height } ).appendTo( $Form );
					jQuery( '<input type="hidden">' ).attr( { name: 'x_window_width', 'value' : width } ).appendTo( $Form );
					jQuery( '<input type="hidden">' ).attr( { name: 'x_select_time', 'value' : selecttime } ).appendTo( $Form );
					if ( navData )
					{
						var pipeSplit = new RegExp( /\|/ );
						var resultString = navData.split( pipeSplit )[0];
						jQuery( '<input type="hidden">' ).attr( { name: 'x_oldnav', 'value' : resultString } ).appendTo( $Form );
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
		$Form.submit();
	}
	catch( e )
	{
		// swallow exceptions !
	}
}

// Function to handle quantity box changes per keystroke, largely to show error style if above max quantity
function qtyBoxInputChanged( sIdSuffix, sAddToCartID )
{
	let elField = jQuery( "#quantity_update_" + sIdSuffix );
	let elCartButton = jQuery( "#" + sAddToCartID );
	let elUpdateButton = jQuery( "#btn_quantity_update_" + sIdSuffix );

	try
	{
		let sQty = elField.val();
		let sQtyMax = elField.attr( 'max' );
		let nQty = parseInt( sQty );
		let nQtyMax = parseInt( sQtyMax );

		const sDisabledClass = 'btn_disabled';
		const sInvalidClass = 'qty_invalid';

		if ( nQty !== undefined )
		{
			if ( ( nQtyMax === undefined || isNaN( nQtyMax ) ) || ( !isNaN( nQty ) && nQty > 0 && nQty <= nQtyMax ) )
			{
				elField.removeClass( sInvalidClass );
				elCartButton.removeClass( sDisabledClass );
				elCartButton.prop( 'disabled', false );
				elUpdateButton.prop( 'disabled', false );
			}
			else
			{
				elField.addClass( sInvalidClass );
				elCartButton.addClass( sDisabledClass );
				elCartButton.prop( 'disabled', true );
				elUpdateButton.prop( 'disabled', true );
			}

			elUpdateButton.show();
		}
	}
	catch( e )
	{
		// ignore
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


		var filterStringForm = 'form[name=add_bundle_to_cart_'+bundleid+']';
		var $Form = jQuery( filterStringForm );

		if ( !$Form.length || ( $Form[0].getAttribute( 'action' ) || '' ).indexOf( '/freelicense/' ) === -1 )
		{
			if ( typeof g_bUseNewCartAPI != 'undefined' && g_bUseNewCartAPI && typeof window.AddItemToCart !== 'undefined' )
			{
				var navdata;
				if ( typeof GStoreItemData !== 'undefined' )
					navdata = $Form.find('input[name=originating_snr]').length > 0 ? GStoreItemData.GetPreviousPageNavParamObj() : GStoreItemData.GetCurrentPageNavParamObj();

				window.AddItemToCart( null, bundleid, navdata );
				return;
			}
		}

		if ( !$Form.length )
		{
			$Form= $J('<form/>', { name: 'add_bundle_to_cart_' + bundleid, action: 'https://store.steampowered.com/cart/', method: 'POST', style: 'display: none;' } );
			$Form.append( $J('<input/>', { type: 'hidden', name: 'action', value: 'add_to_cart' } ) );
			$Form.append( $J('<input/>', { type: 'hidden', name: 'bundleid', value: bundleid } ) );
			$Form.append( $J('<input/>', { type: 'hidden', name: 'sessionid', value: g_sessionID } ) );

			$J(document.body).append( $Form );
		}

		// Check for quantity
		var idx = ( dedupe !== undefined ) ? dedupe : 0;
		var quantity = jQuery( '#quantity_update_'+bundleid+'_'+idx ).val();
		if ( quantity !== undefined )
		{
			if ( $Form.length === 1 )
			{
				jQuery('<input type="hidden">').attr({name: 'quantity', 'value': quantity}).appendTo($Form);
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
				var begintime = jQuery.data(document, 'x_readytime');
				var selecttime = 0.0;
				if ( begintime !== undefined )
				{
					selecttime = new Date().getTime() - begintime;
				}
				if ( $Form.length === 1 )
				{
					//  We include the 'hidden' attribute at this point, because of a believe compatibility issue with Internet Explorer!
					jQuery( '<input type="hidden">' ).attr( { name: 'x_selection', 'value' : buttonIndex } ).appendTo( $Form  );
					jQuery( '<input type="hidden">' ).attr( { name: 'x_choices', 'value' : allButtons.length } ).appendTo( $Form );
					jQuery( '<input type="hidden">' ).attr( { name: 'x_top', 'value' : buttonOffset.top } ).appendTo( $Form  );
					jQuery( '<input type="hidden">' ).attr( { name: 'x_left', 'value' : buttonOffset.left } ).appendTo( $Form );
					jQuery( '<input type="hidden">' ).attr( { name: 'x_window_height', 'value' : height } ).appendTo( $Form );
					jQuery( '<input type="hidden">' ).attr( { name: 'x_window_width', 'value' : width } ).appendTo( $Form );
					jQuery( '<input type="hidden">' ).attr( { name: 'x_select_time', 'value' : selecttime } ).appendTo( $Form );
					if ( navData )
					{
						var pipeSplit = new RegExp( /\|/ );
						var resultString = navData.split( pipeSplit )[0];
						jQuery( '<input type="hidden">' ).attr( { name: 'x_oldnav', 'value' : resultString } ).appendTo( $Form );
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
		$Form.submit();
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
		if ( typeof g_bUseNewCartAPI != 'undefined' && g_bUseNewCartAPI && typeof window.AddItemToCart !== 'undefined' )
		{
			var $Inputs = $J( 'form[name=add_all_dlc_to_cart' ).find( 'input' );
			var rgSubIDs = [];

			for ( var i = 0; i < $Inputs.length; i++ )
			{
				if ( $Inputs[i].name.startsWith( 'subid' ) )
					rgSubIDs.push( JSON.parse( $Inputs[i].value ) );
			}

			window.AddItemToCart( rgSubIDs.length === 1 ? rgSubIDs[0] : rgSubIDs );
			return;
		}
		else
		{
			document.forms['add_all_dlc_to_cart'].submit();
		}

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

function GamePurchaseDropdownSelectOption( dropdownName, subId, inCart )
{
		$J('#add_to_cart_' + dropdownName + '_value').val( subId );
	$J('#add_to_cart_' + dropdownName + '_selected_text').html( $J('#add_to_cart_' + dropdownName + '_menu_option_' + subId).html() );

	$J('#add_to_cart_' + dropdownName + '_select_option').hide();

	var $inCart = $J('#add_to_cart_' + dropdownName + '_in_cart_button');
	var $addCart = $J('#add_to_cart_' + dropdownName + '_add_button');
	if ( inCart )
	{
		$addCart.hide();
		$inCart.show();
		if ( typeof GPNavFocusChild !== 'undefined' )
		{
			GPNavFocusChild( $inCart );
		}
	}
	else
	{
		$inCart.hide();
		$addCart.show();
		if ( typeof GPNavFocusChild !== 'undefined' )
		{
			GPNavFocusChild( $addCart );
		}
	}

	if ( window.UseTabletScreenMode && window.UseTabletScreenMode() )
	{
		CModal.DismissActiveModal();
	}
	else
	{
		HideMenu('game_purchase_dropdown_' + dropdownName + '_region', 'add_to_cart_' + dropdownName + '_menu');
	}
}

function GamePurchaseDropdownAddToCart( dropdownName )
{
		if ( $J('#add_to_cart_' + dropdownName + '_value').val() == '')
	{
		ShowGamePurchaseDropdown( 'game_purchase_dropdown_' + dropdownName + '_region', 'add_to_cart_' + dropdownName + '_menu' );
	}
	else
	{
		addToCart( dropdownName );
	}
}

function ShowGamePurchaseDropdown( elemLink, elemPopup )
{
	var $Link = $JFromIDOrElement(elemLink);
	var $Popup = $JFromIDOrElement(elemPopup);

	var nWidth = $Link.outerWidth();
	$Popup.css( 'min-width', nWidth );

	if ( window.UseTabletScreenMode && window.UseTabletScreenMode() )
	{
		var $Content = $Popup.clone();
		$Content.attr('data-panel', '{"maintainY":true,"autoFocus":true}' );
		$Content.css( 'position', 'relative' );
		var $Dialog = ShowDialog( 'Select a purchase option', $Content.show() );
		$Dialog.AdjustSizing();
	}
	else
	{
		ShowMenu( elemLink, elemPopup, 'right', 'bottom' );
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

		if ( $Scroll.data( 'usability' ) )
			$SliderCtn.attr( 'data-usability', $Scroll.data( 'usability' ) );

		$Wrapper.on('v_contentschanged.AutoSlider', function() {
			fnFixHeight();
			$Wrapper.find('img' ).one('load', fnFixHeight );
		} );
		$J(window ).on('resize.AutoSlider', fnFixHeight );

		$Scroll.attr( 'data-panel', '{"maintainX":true,"bFocusRingRoot":true,"flow-children":"row"}' );

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
	PreloadImages( this.$elItems[ this.nIndex ] );

	if ( window.UseTabletScreenMode && window.UseTabletScreenMode() )
	{
		PreloadImages( $elContainer );
	}

	// get ready to preload images when we scroll.  Delay this a bit because these are low priority
	//	and finding them forces layout via a slow jquery :visible call
	if ( this.nSpeed )
		setTimeout( this.HintNearbyCapsules.bind(this), this.nSpeed * 750 );

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
	var $Parent = this.$elItems.parent();
	$Parent.bind('scroll', function(e) { if( instance.bIsResponsive() ) PreloadImages( $elContainer ); } );

	// add panel attributes, and force an update as this element is already on the page so legacyweb doesn't see this change
	$Parent.attr( 'data-panel', '{"bFocusRingRoot":true,"flow-children":"row"}' );
	if ( typeof ForceUpdateFocusElements != 'undefined' )
		ForceUpdateFocusElements( $Parent );

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

	this.$elContainer.on('v_gamepadpress', function( e, button ) {
		if ( button.button == 'BUMPER_BACK' )
		{
			instance.Advance( -1, true );
			e.stopPropagation();
		}
		else if ( button.button == 'BUMPER_FORWARD' )
		{
			// -1 means go back 1, any other number means "go to that index".
			instance.Advance( undefined, true );
			e.stopPropagation();
		}
	}).on('focusin', function( e ) {
		if ( e.target != e.currentTarget )
		{
			// focus on a child element; make sure it's in view
			instance.$elItems.each( function ( index ) {
				// $elItems are caps in main cluster, but pages in others
				if ( $J.contains( this, e.target ) || this == e.target )
				{
					if ( !$J(this).hasClass('focus') )
						instance.Advance( index );
					return false; // stop iterating
				}
			});
		}
		instance.fnMouseOver();
	}).on('focusout', function() {
		instance.fnMouseOut();
	});

	if( this.$elThumbs.length < 2 )
	{
		this.$elThumbs.parent().css({'visibility':'hidden'})
	}

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
	PreloadImages( this.$elItems[ this.nIndex ] );

	// If we're going to auto-scroll, hint the next item.
	if( this.nSpeed > 0 )
	{
		var nNextIndex = this.GetNextValidIndex();
		var elNextElement = this.$elItems[ nNextIndex ];
		PreloadImages( elNextElement );
	}
};


CGenericCarousel.prototype.UpdateItems = function()
{
	this.$elThumbs = $J('.carousel_thumbs', this.$elContainer).children();
	this.$elItems = $J('.carousel_items', this.$elContainer).children();
	this.nItems = this.$elItems.length;
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

CGenericCarousel.prototype.Advance = function( nNewIndex, bApplyFocus )
{
		if( this.bIsResponsive() && !window.UseTabletScreenMode() )
	{
		return this.ResponsiveAdvance(nNewIndex );
	}

	if( this.nItems == 0 )
		return;

	var nNextIndex = this.GetNextValidIndex( nNewIndex );
	if( nNextIndex == this.nIndex || nNextIndex === false )
		return;

	this.fnOnBlur( this.nIndex );
	this.fnOnFocus( nNextIndex );
	this.nIndex = nNextIndex;

	if ( bApplyFocus && typeof GPNavFocusChild !== 'undefined' )
		GPNavFocusChild( this.$elItems[this.nIndex] );

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
		if ( typeof GDynamicStore != 'undefined' && GDynamicStore.m_bLoadComplete ) {
			GDynamicStore.s_ImpressionTracker.TrackAppearanceIfVisible(this.$elItems[nIndex]);
		}
	}

	var fnMouseOverThumb = function( index, element )
	{
		this.Advance(index);
	};
	if( !fnOnBlur )
		fnOnBlur = function(){};

	return new CGenericCarousel( $elContainer, nSpeed, fnOnFocus, fnOnBlur, fnMouseOverThumb, bNoWrap );

}

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
			ShowAlertDialog( 'Error', 'There was a problem trying to follow the Steam Curator. Possible issues:<ul><li>You cannot follow a curator you already ignore.</li><li>You can only follow upto 100 curators at a time</li><li>Limited accounts cannot follow a curator</li></ul>' );
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
			GDynamicStore.InvalidateCache();
		},
		'json'
	).fail( function()
		{
			ShowAlertDialog( 'Error', 'There was a problem trying to ignore the Steam Curator.<br>Note: You cannot ignore a curator you already follow. ' );
		}
	);
	return false;
}


var CUsabilityTracker = function()
{
	this.m_strEndpoint = '';
	this.m_fnPostCallback = null;
	this.m_schUpload = null;
	this.m_tsLoaded = performance.now();
	this.m_rgScrollToElements = null;
	this.m_stats = {
		maxScroll: 0,
		windowWidth: 0,
		windowHeight: 0,
		scrolledToSection: 0,
		events: []
	}
}

CUsabilityTracker.prototype.Init = function( strEndpoint )
{
	this.m_strEndpoint = strEndpoint;
	this.ResetStats();

	var _this = this;
	$Window = $J( window );
	$Window.unload( function()
	{
		_this.OnWindowUnload();
	});

	$Window.on( 'scroll', function()
	{
		_this.SetScrollPosition();
	});

	$Window.on( 'click', function( e )
	{
		_this.HandleWindowClick( e );
	});
}

CUsabilityTracker.prototype.ResetStats = function()
{
	this.m_stats.windowWidth = window.innerWidth;
	this.m_stats.windowHeight = window.innerHeight;
	this.m_stats.events = [];
	this.m_stats.maxScroll = this.GetScrollPosition();
	this.m_stats.scrolledToSection = 0;
}

CUsabilityTracker.prototype.ScheduleUpload = function()
{
	this.CancelScheduledUpload();

	var _this = this;
	this.m_schUpload = setTimeout( function() { _this.PostStats() }, 3 * 60 * 1000 );
}

CUsabilityTracker.prototype.CancelScheduledUpload = function()
{
	if ( this.m_schUpload === null )
		return;

	clearTimeout( this.m_schUpload );
	this.m_schUpload = null;
}

CUsabilityTracker.prototype.GetScrollPosition = function()
{
	var nCurrent = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
	return nCurrent + window.innerHeight;
}

CUsabilityTracker.prototype.SetScrollPosition = function()
{
	// ignore scrolling for 1/2 second after page load
	if ( (performance.now() - this.m_tsLoaded) < 500.0 )
		return;

	var nCurrent = this.GetScrollPosition();

	// always skip updating and scheduling a new scroll if previous matches, including across page reloads that automatically scroll down
	if ( nCurrent <= this.m_stats.maxScroll )
		return;

	this.m_stats.maxScroll = nCurrent;
	this.CheckScrollToElements();
	this.ScheduleUpload();
}

CUsabilityTracker.prototype.OnWindowUnload = function ()
{
	this.PostStats();
}

CUsabilityTracker.prototype.HandleWindowClick = function( e )
{
	var $Target = $J( e.target );
	if ( !$Target )
		return;

	var $Tracked = $Target.closest( '[data-usability]');
	if ( !$Tracked || $Tracked.length == 0 )
		return;

	this.AddEvent( $Tracked.data( 'usability' ) );
}

CUsabilityTracker.prototype.AddEvent = function( eEvent )
{
	for ( var i = 0; i < this.m_stats.events.length; i++ )
	{
		if ( this.m_stats.events[i] == eEvent )
			return;
	}

	this.m_stats.events.push( eEvent );
	this.ScheduleUpload();
}

CUsabilityTracker.prototype.IncrementStat = function( strStat, nValue )
{
	if ( this.m_stats[strStat] === undefined )
		this.m_stats[strStat] = 0;

	this.m_stats[strStat] = this.m_stats[strStat] + nValue;
}

CUsabilityTracker.prototype.CheckScrollToElements = function()
{
	if ( this.m_rgScrollToElements === null )
		this.m_rgScrollToElements = $J( '[data-usability-scroll]' );

	var nBottomOfScreen = this.GetScrollPosition();
	for ( var i = this.m_rgScrollToElements.length - 1; i >= 0; i-- )
	{
		var $element = $J( this.m_rgScrollToElements[i] );
		if ( !$element.is(':visible') )
			continue;

		var nOffset = $element.offset().top;
		if ( nOffset > nBottomOfScreen )
			continue;

		this.SetScrollToSection( $element.data( 'usability-scroll' ) );
	}
}

CUsabilityTracker.prototype.SetScrollToSection = function( eEvent )
{
	if ( this.m_stats.scrolledToSection < eEvent )
	{
		this.m_stats.scrolledToSection = eEvent;
		this.ScheduleUpload();
	}
}

CUsabilityTracker.prototype.SetPostCallback = function( fnCallback )
{
	this.m_fnPostCallback = fnCallback;
}

CUsabilityTracker.prototype.PostStats = function()
{
	// if no scheduled upload, stats aren't dirty
	if ( this.m_schUpload === null )
		return;

	this.CancelScheduledUpload();

		this.m_stats.windowWidth = window.innerWidth;
	this.m_stats.windowHeight = window.innerHeight;

		if ( this.m_fnPostCallback )
		this.m_fnPostCallback( this.m_stats );

	var strStats = JSON.stringify( this.m_stats );
	var strURL = this.m_strEndpoint;
	var bSupportsBeacon = typeof navigator.sendBeacon != 'undefined';
	if ( bSupportsBeacon )
	{
		var fdParams = new FormData();
		fdParams.append( 'stats', strStats );
		navigator.sendBeacon( strURL, fdParams );
	}
	else
	{
		$J.ajax(
		{
			url: strURL,
			data: { stats: strStats },
			dataType: 'json',
			type: 'POST'
		})
		.done( function( data )
		{
		});

		// if we couldn't send a beacon, we try to busy wait for a bit so the AJAX request has time
		// to reach the servers.
		var iters = 0;
		var start = new Date().getMilliseconds();
		while ( iters < 10000000 && ( new Date().getMilliseconds() - start ) < 30 ) { iters++; }
	}

	this.ResetStats();
}

var g_usabilityTracker = null;
function InitUsabilityTracker( strEndpoint )
{
	if ( !g_usabilityTracker )
	{
		g_usabilityTracker = new CUsabilityTracker();
		g_usabilityTracker.Init( strEndpoint );
	}

	return g_usabilityTracker;
}

function GetUsabilityTracker()
{
	return g_usabilityTracker;
}

function ScrollToTopStoreMobileAware()
{
	var bUseSmallScreenMode = window.UseSmallScreenMode && window.UseSmallScreenMode();
	var bIsMobileClient = $J('html').is('.mobile_client:not(.legacy_mobile)')
	if ( bUseSmallScreenMode && !bIsMobileClient )
	{
		var $Window = $J( window );
		$Window.scrollTop( $J( '#store_header' ).height() );
	}
	else
	{
		window.scrollTo( 0, 0 );
	}
}


