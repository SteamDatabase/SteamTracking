
// this will set the right headers for a cross-domain request to community
function GetDefaultCommunityAJAXParams( path, method )
{
	var rgParams = { url: 'http://steamcommunity.com/' + path };
	if ( method )
		rgParams.type = method;

	// if this js file was hosted off the store, add CORS request headers
	
	return rgParams;
}

// spped of the miniprofile fading in and out
var MINIPROFILE_ANIM_SPEED = 150;
// how long the mouse must remain over an element before we'll make an AJAX call
var MINIPROFILE_DELAY_BEFORE_AJAX = 150;
// the delay before we'll show the hover, must be longer than DELAY_BEFORE_AJAX
var MINIPROFILE_DELAY_BEFORE_SHOW = 300;

function CMiniprofileData( accountid )
{
	this.m_nAccountID = accountid;
	this.m_$Data = null;
	this.m_bAJAXFailed = false;
	this.m_timerDelayedAJAX = null;
	this.m_bAJAXRequestMade = false;

	this.m_fnOnAJAXComplete = null;
}

CMiniprofileData.prototype.QueueAjaxRequestIfNecessary = function()
{
	if ( !this.m_$Data && !this.m_bAJAXRequestMade )
	{
		var _this = this;
		this.m_timerDelayedAJAX = window.setTimeout( function() {
			_this.m_timerDelayedAJAX = null;
			_this.m_bAJAXRequestMade = true;
			var rgAJAXParams = GetDefaultCommunityAJAXParams( 'miniprofile/' + _this.m_nAccountID, 'GET' );
			$J.ajax( rgAJAXParams )
				.done( function(data) {
					_this.m_$Data = $J(data);
					if ( _this.m_fnOnAJAXComplete )
						_this.m_fnOnAJAXComplete();
				}).fail( function() {
					_this.m_bAJAXFailed = true;
				});
		}, MINIPROFILE_DELAY_BEFORE_AJAX );
	}
}

CMiniprofileData.prototype.CancelAJAX = function()
{
	if ( this.m_timerDelayedAJAX )
		window.clearTimeout( this.m_timerDelayedAJAX );

	this.m_fnOnAJAXComplete = null;
}

CMiniprofileData.prototype.RunWhenAJAXReady = function( fnOnReady )
{
	if ( this.m_$Data )
		fnOnReady();
	else if ( !this.m_bAJAXFailed )
	{
		this.m_fnOnAJAXComplete = fnOnReady;
		this.QueueAjaxRequestIfNecessary();
	}
	// if ajax failed we will not call fnOnReady
}

CMiniprofileData.prototype.Show = function( $HoverContent )
{
	$HoverContent.children().detach();
	$HoverContent.append( this.m_$Data );
}

function InitMiniprofileHovers()
{
	var $Hover = $J('<div/>', {'class': 'miniprofile_hover'} );
	var $HoverContent = $J('<div/>', {'class': 'miniprofile_hover_inner shadow_content'} );

	var $HoverArrowLeft = $J('<div/>', {'class': 'miniprofile_arrow_left'} )
	$HoverArrowLeft.append( '<div class="miniprofile_arrow_inner"></div>' );
	var $HoverArrowRight = $J('<div/>', {'class': 'miniprofile_arrow_right'} )
	$HoverArrowRight.append( '<div class="miniprofile_arrow_inner"></div>' );

	$Hover.append( $J('<div class="shadow_ul"></div><div class="shadow_top"></div><div class="shadow_ur"></div><div class="shadow_left"></div><div class="shadow_right"></div><div class="shadow_bl"></div><div class="shadow_bottom"></div><div class="shadow_br"></div>'), $HoverContent, $HoverArrowLeft, $HoverArrowRight );

	$Hover.hide();
	$J(document.body).append( $Hover );

	// indexed by accountid
	var rgMiniprofileData = {};
	var HoverTarget = null;
	var timerHover = null;

	var fnOnHover = function( $Target, accountid ) {

		var bHoverVisible = ( $Hover.css('display') != 'none' );

		var MiniprofileData = rgMiniprofileData[accountid];
		if ( !MiniprofileData )
		{
			MiniprofileData = rgMiniprofileData[accountid] = new CMiniprofileData( accountid );
		}

		if ( HoverTarget == MiniprofileData && bHoverVisible )
		{
			//really only want to do this while fading out
			$Hover.stop();
			PositionMiniprofileHover( $Hover, $Target );
			$Hover.show();	// PositionMiniprofile toggles visibility
			$Hover.fadeTo( MINIPROFILE_ANIM_SPEED, 1.0 );
		}
		else if ( !timerHover || MiniprofileData != HoverTarget )
		{
			// this is the new target
			if ( HoverTarget && HoverTarget != MiniprofileData )
				HoverTarget.CancelAJAX();
			HoverTarget = MiniprofileData;

			if ( timerHover )
			{
				window.clearTimeout( timerHover )
				timerHover = null;
			}

			MiniprofileData.QueueAjaxRequestIfNecessary();

			timerHover = window.setTimeout( function() {
				window.clearTimeout( timerHover );
				timerHover = null;

				MiniprofileData.RunWhenAJAXReady( function() {
					MiniprofileData.Show( $HoverContent );
					$Hover.stop();
					$Hover.css( 'opacity', '' ); //clean up jquery animation
					PositionMiniprofileHover( $Hover, $Target );
					$Hover.fadeIn( MINIPROFILE_ANIM_SPEED );
				} );
			}, MINIPROFILE_DELAY_BEFORE_SHOW );
		}
	};

	var fnCancelHover = function( accountid )
	{
		var bHoverVisible = ( $Hover.css('display') != 'none' );

		var MiniprofileData = rgMiniprofileData[accountid];
		if ( MiniprofileData )
		{
			MiniprofileData.CancelAJAX();
		}

		if ( timerHover )
		{
			window.clearTimeout( timerHover );
			timerHover = null;
		}

		if ( bHoverVisible )
		{
			$Hover.stop();
			$Hover.fadeOut( MINIPROFILE_ANIM_SPEED );
		}
	}

	var fnBindSingleMiniprofileHover = function( target ) {
		var $Target = $J(target);
		var accountid = parseInt( $Target.attr( 'data-miniprofile' ) );
		if ( accountid && !$Target.data('miniprofile_bound' ) )
		{
			$Target.mouseenter( $J.proxy( fnOnHover, null, $Target, accountid ) );
			$Target.mouseleave( fnCancelHover );
			$Target.data( 'miniprofile_bound', true );
		}
	};
	var fnBindAllAccountIDElements = function() {
		$J('[data-miniprofile]').each( function() { fnBindSingleMiniprofileHover( this ); } );
	}

	fnBindAllAccountIDElements();
	$J(document).ajaxComplete( function( event, xhr, settings ) {
		// skip any ajax calls we generated ourselves
		if ( settings && settings.url && settings.url.match( /miniprofile/ ) )
			return;

		fnBindAllAccountIDElements();
	} );
	if ( typeof Ajax != 'undefined' )
	{
		//prototype AJAX
		Ajax.Responders.register({
			onComplete: fnBindAllAccountIDElements
		});
	}

	window.BindMiniprofileHovers = fnBindAllAccountIDElements;
	window.BindSingleMiniprofileHover = fnBindSingleMiniprofileHover;
}

function PositionMiniprofileHover( $Hover, $Target )
{
	$Hover.css( 'visibility', 'hidden' );
	$Hover.show();

	var offset = $Target.offset();
	$Hover.css( 'left', offset.left + 'px' );
	$Hover.css( 'top', offset.top + 'px');

	var $HoverBox = $Hover.children( '.shadow_content' );
	var $HoverArrowLeft = $Hover.children( '.miniprofile_arrow_left' );
	var $HoverArrowRight = $Hover.children( '.miniprofile_arrow_right' );

	var nWindowScrollTop = $J(window).scrollTop();
	var nWindowScrollLeft = $J(window).scrollLeft();
	var nViewportWidth = $J(window).width();
	var nViewportHeight = $J(window).height();

		var $HoverArrow = $HoverArrowRight;
	var nBoxRightViewport = ( offset.left - nWindowScrollLeft ) + $Target.outerWidth() + $HoverBox.width() + 14;
	var nSpaceRight = nViewportWidth - nBoxRightViewport;
	var nSpaceLeft = offset.left - $Hover.width();
	if ( nSpaceLeft > 0 || nSpaceLeft > nSpaceRight)
	{
			$Hover.css( 'left', ( offset.left - $Hover.width() + 5 ) + 'px' );
		$HoverArrowLeft.hide();
		$HoverArrowRight.show();
	}
	else
	{
			$Hover.css( 'left', ( offset.left + $Target.outerWidth() - 2 ) + 'px' );
		$HoverArrow = $HoverArrowLeft;
		$HoverArrowLeft.show();
		$HoverArrowRight.hide();
	}

	var nTopAdjustment = 0;

			if ( $Target.height() < 48 )
		nTopAdjustment = Math.floor( $Target.height() / 2 ) - 24;
	var nDesiredHoverTop = offset.top - 15 + nTopAdjustment;
	$Hover.css( 'top', nDesiredHoverTop + 'px' );

	// see if the hover is cut off by the bottom of the window, and bump it up if neccessary
	var nTargetTopViewport = ( offset.top - nWindowScrollTop ) + nTopAdjustment;
	if ( nTargetTopViewport + $HoverBox.height() + 35 > nViewportHeight )
	{
		var nViewportAdjustment = ( $HoverBox.height() + 35 ) - ( nViewportHeight - nTargetTopViewport );

		// if the hover has the "in-game" block at the bottom, we need to have more space at the bottom of the hover
		//	so that the arrow will appear in the blue part of the hover.  This means the game info may be off-screen below.
		var bHaveInGameInfo = $HoverBox.find('.miniprofile_ingame').length > 0;
		var nHoverBoxBottomMinimum = ( bHaveInGameInfo ? 78 : 24 );	// the minimum amount of space we need below the arrow
		nViewportAdjustment = Math.min( $HoverBox.height() - nHoverBoxBottomMinimum, nViewportAdjustment );

		var nViewportAdjustedHoverTop = offset.top - nViewportAdjustment;
		$Hover.css( 'top', nViewportAdjustedHoverTop + 'px' );

		// arrow is normally offset 30pixels.  we move it down the same distance we moved the hover up, so it is "fixed" to where it was initially
		$HoverArrow.css( 'top', ( 30 + nDesiredHoverTop - nViewportAdjustedHoverTop ) + 'px' );
	}
	else
	{
		$HoverArrow.css( 'top', '' );
	}

	$Hover.hide();
	$Hover.css( 'visibility', '' );
}


