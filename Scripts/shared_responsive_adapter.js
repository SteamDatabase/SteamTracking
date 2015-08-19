"use strict";

// build our menu on init
jQuery( function($) {
	var mqQueryMenuMode = window.matchMedia ? window.matchMedia("(max-width: 910px)") : {matches: false};

	var $HTML = $J('html');
	window.UseTouchFriendlyMode = function() {
		return $HTML.hasClass( 'responsive' ) && ( mqQueryMenuMode.matches || $HTML.hasClass('touch') );
	};
	window.UseSmallScreenMode = function() {
		return $HTML.hasClass( 'responsive' ) && mqQueryMenuMode.matches;
	};


	// main menu

	var $Menu = $('#responsive_page_menu');
	var $Frame = $('.responsive_page_frame');
	var $ContentCtn = $('.responsive_page_content' );
	var $ContentOverlay = $('.responsive_page_content_overlay');

	var $SupernavElements = $('.responsive_page_menu' ).find( '.supernav');

	var fnResetMenuState = function() {
		$Frame.removeClass( 'mainmenu_active');
		$Frame.removeClass('localmenu_active');
		$J(document.body).removeClass( 'overflow_hidden' );

		$ContentOverlay.off( 'click.ReponsiveMenuDismiss');
	};

	$J(document).on('click.OnClickDismissMenu', '.responsive_OnClickDismissMenu', fnResetMenuState );

	var strLastExpandedSubmenu = WebStorage.GetLocalSession( 'responsiveMenuLastSubmenu' );

	var fnMakeExpandableMenuItem = function( $MenuItem, $Submenu )
	{
		var $SubmenuWrapper = $J('<div/>', {'class': 'menuitem_submenu_wrapper' });

		$MenuItem.after( $SubmenuWrapper.append( $Submenu ) );
		$Submenu.wrap( $('<div/>', {'class': 'inner_borders' } ) );

		// if this was the last used submenu, start with it expanded
		if ( strLastExpandedSubmenu && strLastExpandedSubmenu == $Submenu.data('submenuid') )
		{
			$SubmenuWrapper.css( 'height', $Submenu.height() + 'px' );
			$MenuItem.addClass( 'submenu_active' );
			$SubmenuWrapper.addClass('active');
		}
		else
		{
			$SubmenuWrapper.css( 'height', 0 );
		}

		$Submenu.show();

		$MenuItem.click( function(e) {
			e.preventDefault();
			if ( $SubmenuWrapper.hasClass('active' ) )
			{
				$SubmenuWrapper.removeClass('active' ).css('height',0);
				$MenuItem.removeClass('submenu_active');
				WebStorage.SetLocalSession( 'responsiveMenuLastSubmenu', null );
			}
			else
			{
				$SubmenuWrapper.siblings( '.menuitem_submenu_wrapper.active' ).css('height',0 ).removeClass('active');
				$MenuItem.siblings('.menuitem').removeClass('submenu_active');
				$SubmenuWrapper.css( 'height', $Submenu.height() + 'px' );
				$MenuItem.addClass( 'submenu_active' );
				$SubmenuWrapper.addClass('active');
				WebStorage.SetLocalSession( 'responsiveMenuLastSubmenu', $Submenu.data('submenuid') );
			}
		});
	};

	$SupernavElements.each( function() {
		var $Element = $(this);
		$Element.attr('href','');
		var strSubmenuSelector = $Element.data('tooltip-content');
		var $Submenu = $Element.parent().find(strSubmenuSelector);
		if ( $Submenu.length )
		{
			fnMakeExpandableMenuItem( $Element, $Submenu );
		}
	});

	var $NotificationItem = $Menu.find( '.notifications_item' );
	var $NotificationSubmenu = $Menu.find('.notification_submenu');
	if ( $NotificationItem.length && $NotificationSubmenu.length )
	{
		fnMakeExpandableMenuItem( $NotificationItem, $NotificationSubmenu );
	}

	var fnBuildMenuEvents = function( $Menu, strMenuName )
	{
		var strActiveClass = strMenuName + '_active';
		var fnDismissMenu = function() {
			$ContentCtn.off( 'click.ReponsiveMenuDismiss');
			$Frame.removeClass(strActiveClass);
			$J(document.body).removeClass('overflow_hidden' );

			window.setTimeout( function() {
				if ( !$Frame.hasClass('mainmenu_active') && !$Frame.hasClass('localmenu_active') )
				{
					fnResetMenuState();
				}
			}, 500 );
		};

		var fnActivateMenu = function() {
			if ( $Frame.hasClass( strActiveClass ) )
			{
				fnDismissMenu();
			}
			else
			{
				$J(document.body).addClass('overflow_hidden' );
				$Menu.removeClass('secondary_active');
				$Frame.addClass( strActiveClass );
				$ContentOverlay.one( 'click.ResponsiveMenuDismiss', function() {
					fnDismissMenu();
				});
			}
		};

		return { fnActivateMenu: fnActivateMenu, fnDismissMenu: fnDismissMenu };
	};

	var MainMenuEvents = fnBuildMenuEvents( $Menu, 'mainmenu' );

	Responsive_BuildChangeLanguageOption( $Menu.find( '.change_language_action' ) );

	$('#responsive_menu_logo' ).click( function( e ) {
		MainMenuEvents.fnActivateMenu();
	} );


	// local (page-specific) menu

	var $LocalMenuContent = $('.responsive_local_menu');
	var $LocalMenu = null;
	var LocalMenuEvents = null;
	if ( $LocalMenuContent.length )
	{
		var bLocalMenuEnabed = false;
		var rgMenuContents = [];
		for ( var i = 0; i < $LocalMenuContent.length; i++ )
		{
			var $LocalMenuElement = $($LocalMenuContent[i] ).wrap( '<div/>' );
			var $LocalMenuWrapper = $($LocalMenuContent[i]).parent();
			rgMenuContents.push( {
				wrapper: $LocalMenuWrapper,
				content: $LocalMenuElement
			});
		}

		$LocalMenu = $J('#responsive_page_local_menu');
		var $Affordance = $J('.responsive_local_menu_tab');

		LocalMenuEvents = fnBuildMenuEvents( $LocalMenu, 'localmenu' );

		$Affordance.click( function( e ) {
			LocalMenuEvents.fnActivateMenu();
		});

		$(window ).on( 'resize.ReponsiveLocalMenu', function() {
			var bShouldUseResponsiveMenu = UseSmallScreenMode();
			if ( bLocalMenuEnabed != bShouldUseResponsiveMenu )
			{
				if ( bShouldUseResponsiveMenu )
				{
					$Affordance.show();
					$LocalMenu.find('.localmenu_content' ).append( $LocalMenuContent );
				}
				else
				{
					fnResetMenuState();
					$Affordance.hide();
					for ( var i = 0; i < rgMenuContents.length; i++ )
					{
						rgMenuContents[i].wrapper.append( rgMenuContents[i].content );
					}
				}
				bLocalMenuEnabed = bShouldUseResponsiveMenu;
			}
		} ).trigger( 'resize');
	}

	$('#responsive_beta_logo' ).click( function() {

		var $ReportBugButton = $J('<div/>', {'class': ' btn_darkblue_white_innerfade btn_medium'} ).append( $J('<span/>').text( 'Report a Bug' ) );

		var $Description = $J('<div/>', {style: 'font-size: 1.2em;' } );
		$Description.append( $J('<h2/>', {style: "color: #ffffff; margin-top: 12px; margin-left: 12px;"} ).text('Welcome!') );
		$Description.append( $J('<p/>', {style: "margin-left: 12px;"}).append( "We're currently beta testing a new update to the Steam websites that uses a responsive design to provide a better experience on mobile phones, tablets, touch-enabled laptops, and other devices.<br \/>\r\n<br \/>\r\n\t\t\t\t\t\t\t\tVisit the Steam Mobile forum to learn more or leave feedback." ) );

		//$Description.append( $J('<p/>').append( "You can also report any issues you are having with the new pages here:" ) );
		$Description.append( $J('<div/>', {'class': 'newmodal_buttons', 'style': 'text-align: left; margin-bottom: 8px;'} ).append(
			$J('<a/>', {'href': 'http://steamcommunity.com/discussions/forum/8/', 'class': ' btn_darkblue_white_innerfade btn_medium'} ).append( $J('<span/>').text( 'Visit the Steam Mobile forum' ) )
		).append( $ReportBugButton ) );

		ShowDialog(
			'Steam Responsive Web Beta',
			$Description
		);

		$ReportBugButton.click( function() {
			var rgSpecs = [];

			rgSpecs.push( '[b]Page[/b]: [url=' + window.location.href + ']' + document.title + '[/url]' );
			rgSpecs.push( '[b]Device size[/b]: ' + screen.width + 'x' + screen.height + ' (window: ' + (window.innerWidth || '?') + 'x' + (window.innerHeight || '?') + ')' );
			rgSpecs.push( '[b]Pixel ratio[/b]: ' + ( window.devicePixelRatio || 'unknown' ) );
			rgSpecs.push( '[b]User Agent[/b]: ' + ( navigator && navigator.userAgent ) || 'unknown' );

			var orientation = screen.orientation || screen.mozOrientation || screen.msOrientation;
			if ( orientation && orientation.type )
				orientation = orientation.type;
			if ( typeof orientation == "string" )
				rgSpecs.push( '[b]Orientation[/b]: ' + orientation );

			var strPost = '[quote]\n' + rgSpecs.join( '\n' ) + '\n[/quote]\n\nEnter your bug report here:\n\n';

			PostToURLWithSession( 'http://steamcommunity.com/discussions/forum/8/537405286642983692/', {
				discussions_reply_prefill: strPost,
				discussions_reply_prefill_prompt: 'We\'ve automatically filled in some information about your device to help us diagnose issues.  Please add your own details to the end of the post.'
			} );
		});
	});

	Responsive_InitMenuSwipes( $, $Menu, $LocalMenu, MainMenuEvents, LocalMenuEvents );

	Responsive_InitFixOnScroll( $ );

	Responsive_InitTouchDetection( $ );

	Responsive_InitTabSelect( $ );

	Responsive_InitResponsiveToggleEvents( $ );
});

function Responsive_InitMenuSwipes( $, $Menu, $LocalMenu, MainMenuEvents, LocalMenuEvents )
{
	var $Frame = $('.responsive_page_frame');
	// set up touch drag events
	var bInMainMenuDrag = false;
	var bInLocalMenuDrag = false;
	var bInDismissMenuDrag = false;
	var bLooksLikeSwipe = false;
	var nDragMenuWidth = 0;

	var nCurDragOffset = 0;
	var nTouchStartPageX = 0;	// page/CSS coordinates because that's how we measure the menu width
	var nTouchStartPageY = 0;

	var fnGetSingleTouch = function(e) {
		var TouchEvent = e.originalEvent;
		var rgTouches = TouchEvent ? TouchEvent.touches : null;
		if ( !rgTouches || rgTouches.length != 1 )
			return null;
		return rgTouches[0];
	};
	var fnCancelDrag = function()
	{
		$Frame.removeClass('in_menu_drag');
		if ( bLooksLikeSwipe )
		{
			var DragMenuEvents = bInMainMenuDrag ? MainMenuEvents : LocalMenuEvents;
			var $DragMenu = bInMainMenuDrag ? $Menu : $LocalMenu;
			$DragMenu.parents('.responsive_page_menu_ctn' ).css( 'left', '' ).css( 'right', '' );
			if ( ( !bInDismissMenuDrag && nCurDragOffset < nDragMenuWidth / 2 ) ||
				( bInDismissMenuDrag && nCurDragOffset > nDragMenuWidth / 2 ) )
			{
				DragMenuEvents.fnDismissMenu();
			}
		}

		bInLocalMenuDrag = bInMainMenuDrag = bLooksLikeSwipe = bInDismissMenuDrag = false;
	};
	$(window ).on('touchstart.ResponsiveMenuActivate', function(e) {
		if ( !UseSmallScreenMode() )
			return;

		var Touch = fnGetSingleTouch(e);
		if ( !Touch )
			return;

		if ( $Frame.hasClass('mainmenu_active') )
		{
			if ( Touch.clientX > $Menu.width() * 0.9 )
			{
				bInMainMenuDrag = true;
				bInDismissMenuDrag = true;
			}
		}
		else if ( $Frame.hasClass('localmenu_active') )
		{
			if ( Touch.clientX < ( window.innerWidth - $LocalMenu.width() * 0.9 ) )
			{
				bInLocalMenuDrag = true;
				bInDismissMenuDrag = true;
			}
		}
		else
		{
			var nClientXAsPct = 100 * Touch.clientX / window.innerWidth;
			bInDismissMenuDrag = false;
			if ( nClientXAsPct > 93 && $LocalMenu )
				bInLocalMenuDrag = true;
			else if ( nClientXAsPct < 7 )
				bInMainMenuDrag = true;
		}

		if ( bInLocalMenuDrag || bInMainMenuDrag )
		{
			bLooksLikeSwipe = false;
			nTouchStartPageX = Touch.pageX;
			nTouchStartPageY = Touch.pageY;
		}
	});
	$(window ).on('touchmove.ResponsiveMenuActive', function(e) {
		if ( !bInLocalMenuDrag && !bInMainMenuDrag )
			return;

		var Touch = fnGetSingleTouch(e);
		if ( !Touch )
			return;
		var nDeltaPageX = Touch.pageX - nTouchStartPageX;
		var nDeltaPageY = Touch.pageY - nTouchStartPageY;

		if ( ( bInLocalMenuDrag && !bInDismissMenuDrag ) || ( bInMainMenuDrag && bInDismissMenuDrag ) )
			nDeltaPageX = -nDeltaPageX;

		var DragMenuEvents = bInMainMenuDrag ? MainMenuEvents : LocalMenuEvents;
		var $DragMenu = bInMainMenuDrag ? $Menu : $LocalMenu;

		if ( !bLooksLikeSwipe && nDeltaPageX > 25 && nDeltaPageX > nDeltaPageY * 2 )
		{
			// horizontal drag
			$Frame.addClass('in_menu_drag');
			if ( !bInDismissMenuDrag )
				DragMenuEvents.fnActivateMenu();
			//$Frame.addClass( bInLocalMenuDrag ? 'localmenu_active' : 'mainmenu_active' );
			nDragMenuWidth = $DragMenu.width();
			bLooksLikeSwipe = true;
		}
		else if ( nDeltaPageY > 2 * nDeltaPageX )
		{
			// looks like scrolling?
			fnCancelDrag();
			return;
		}


		if ( bLooksLikeSwipe )
		{
			nCurDragOffset = Math.max( Math.min( nDeltaPageX, nDragMenuWidth ), 0 );

			var nOffset = bInDismissMenuDrag ? -nCurDragOffset : -(nDragMenuWidth - nCurDragOffset);

			$DragMenu.parents('.responsive_page_menu_ctn' ).css( bInLocalMenuDrag ? 'right' : 'left', nOffset + 'px' );
		}
	});
	$(window ).on('touchend.ResponsiveMenuActivate touchcancel.ResponsiveMenuActivate', function(e) {
		fnCancelDrag();
	});
}

function Responsive_InitTouchDetection( $ )
{
	var $HTML= $J('html');
	if ( !UseTouchFriendlyMode() && $HTML.hasClass('responsive') )
	{
		$J(window ).one('touchstart', function() {
			// user is on a touch device - enable touch-friendly accessors and
			// remember for the rest of this session

			$HTML.addClass('touch');
			V_SetCookie( "strResponsiveViewPrefs", 'touch', 0 );
		} );
	}
}

function Responsive_InitTabSelect( $ )
{
	// handle any tab dropdowns
	$J(document).on('change.ResponsiveTabSelect', 'select.responsive_tab_select', function() {
		var url = $J(this ).val();
		if ( url != window.location )
			window.location = url;
	});
}

function Responsive_InitFixOnScroll($)
{
	var $Ctn = $J('.responsive_fixonscroll_ctn');
	var $Elements = $J('.responsive_fixonscroll');
	if ( $Elements.length )
	{
		var nCtnTop = -1;
		var nCtnHeight = 0;

		$J(window).on('scroll.ResponsiveFixOnScroll resize.ResponsiveFixOnScroll', function() {
			var nHeaderOffset = GetResponsiveHeaderFixedOffsetAdjustment();
			var nScrollTop = $J(window ).scrollTop() + nHeaderOffset + nCtnHeight;

			if ( nHeaderOffset != nCtnTop )
			{
				nCtnTop = nHeaderOffset;
				$Ctn.css( 'top', nCtnTop + 'px' );
			}
			$Elements.each( function() {
				var $Element = $J(this);
				if ( !$Element.is(':visible') )
				{
					if ( $Element.hasClass('in_fixed_ctn') && $Element.data('originalContents') )
					{
						$Element.append( $Element.data('originalContents') );
						$Element.removeClass('in_fixed_ctn');
						$Element.css('height', '');
						nCtnHeight = $Ctn.height();
					}
					return;
				}

				var nElementTop = $Element.offset().top;
				if ( nElementTop > nScrollTop )
				{
					if ( $Element.hasClass('in_fixed_ctn') )
					{
						$Element.append( $Element.data('originalContents') );
						$Element.removeClass('in_fixed_ctn');
						$Element.css('height', '');
						nCtnHeight = $Ctn.height();
					}
				}
				else
				{
					if ( !$Element.hasClass('in_fixed_ctn') )
					{
						$Element.css('height', $Element.height() + 'px' );
						$Element.data( 'originalContents', $Element.children() );
						$Ctn.append( $Element.children() );
						$Element.addClass( 'in_fixed_ctn' );
						nCtnHeight = $Ctn.height();
					}
				}
			});
		} );
	}
}

function Responsive_BuildChangeLanguageOption( $MenuItem )
{
	$MenuItem.click( function() {
		var $LanguageForm = $J('<form/>', {'class': 'responsive_change_language_form' } );
		var $SelectBox = $J('<select/>', {'class': 'responsive_change_language_select' } );
		$SelectBox.append(
			$J('<option/>', {value: "english"} ).text( 'English' )
		);
					$SelectBox.append(
				$J('<option/>', {value: "bulgarian"} ).text( 'Български (Bulgarian)' )
			);
					$SelectBox.append(
				$J('<option/>', {value: "czech"} ).text( 'čeština (Czech)' )
			);
					$SelectBox.append(
				$J('<option/>', {value: "danish"} ).text( 'Dansk (Danish)' )
			);
					$SelectBox.append(
				$J('<option/>', {value: "dutch"} ).text( 'Nederlands (Dutch)' )
			);
					$SelectBox.append(
				$J('<option/>', {value: "finnish"} ).text( 'Suomi (Finnish)' )
			);
					$SelectBox.append(
				$J('<option/>', {value: "french"} ).text( 'Français (French)' )
			);
					$SelectBox.append(
				$J('<option/>', {value: "greek"} ).text( 'Ελληνικά (Greek)' )
			);
					$SelectBox.append(
				$J('<option/>', {value: "german"} ).text( 'Deutsch (German)' )
			);
					$SelectBox.append(
				$J('<option/>', {value: "hungarian"} ).text( 'Magyar (Hungarian)' )
			);
					$SelectBox.append(
				$J('<option/>', {value: "italian"} ).text( 'Italiano (Italian)' )
			);
					$SelectBox.append(
				$J('<option/>', {value: "japanese"} ).text( '日本語 (Japanese)' )
			);
					$SelectBox.append(
				$J('<option/>', {value: "koreana"} ).text( '한국어 (Korean)' )
			);
					$SelectBox.append(
				$J('<option/>', {value: "norwegian"} ).text( 'Norsk (Norwegian)' )
			);
					$SelectBox.append(
				$J('<option/>', {value: "polish"} ).text( 'Polski (Polish)' )
			);
					$SelectBox.append(
				$J('<option/>', {value: "portuguese"} ).text( 'Português (Portuguese)' )
			);
					$SelectBox.append(
				$J('<option/>', {value: "brazilian"} ).text( 'Português-Brasil (Portuguese-Brazil)' )
			);
					$SelectBox.append(
				$J('<option/>', {value: "russian"} ).text( 'Русский (Russian)' )
			);
					$SelectBox.append(
				$J('<option/>', {value: "romanian"} ).text( 'Română (Romanian)' )
			);
					$SelectBox.append(
				$J('<option/>', {value: "schinese"} ).text( '简体中文 (Simplified Chinese)' )
			);
					$SelectBox.append(
				$J('<option/>', {value: "spanish"} ).text( 'Español (Spanish)' )
			);
					$SelectBox.append(
				$J('<option/>', {value: "swedish"} ).text( 'Svenska (Swedish)' )
			);
					$SelectBox.append(
				$J('<option/>', {value: "tchinese"} ).text( '繁體中文 (Traditional Chinese)' )
			);
					$SelectBox.append(
				$J('<option/>', {value: "thai"} ).text( 'ไทย (Thai)' )
			);
					$SelectBox.append(
				$J('<option/>', {value: "turkish"} ).text( 'Türkçe (Turkish)' )
			);
		
		var Modal = null;

		var fnChangeLanguage = function() {
			if ( $SelectBox.val() != "english" )
				ChangeLanguage( $SelectBox.val() );
			Modal && Modal.Dismiss();
		};

		$LanguageForm.submit( function(e) {
			e.preventDefault();
			fnChangeLanguage();
		});
		$SelectBox.change( fnChangeLanguage );

		$LanguageForm.append( $SelectBox );
		$LanguageForm.append( $J('<input/>', {type: 'submit'} ).hide() );
		Modal = ShowConfirmDialog( 'Change language', $LanguageForm, 'Change language' ).done( fnChangeLanguage );
		$SelectBox.focus();
	});
}

function Responsive_RequestDesktopView()
{
	// we can dynamically switch, but this doesn't trigger the phone to zoom out and some elements don't resize right
	/*
	$J('html' ).removeClass('responsive touch' ).addClass('force_desktop');
	$J('meta[name=viewport]' ).attr('value', '' );
	$J(window ).trigger('resize');
	*/
	Responsive_UpdateResponsivePrefs( 'desktop', true );
	window.location.reload();
}

function Responsive_RequestMobileView()
{
	/*
	$J('html' ).removeClass('force_desktop' ).addClass('responsive');
	$J('meta[name=viewport]' ).attr('value', 'width=device-width,initial-scale=1' );
	$J(window ).trigger('resize');
	*/
	Responsive_UpdateResponsivePrefs( 'desktop', false );
	window.location.reload();
}


function Responsive_UpdateResponsivePrefs( strFlag, bEnabled )
{
	if ( bEnabled )
	{
		V_SetCookie( "strResponsiveViewPrefs", strFlag, 365 );
	}
	else
	{
		V_SetCookie( "strResponsiveViewPrefs", null, -1 );
	}
}

function Responsive_InitResponsiveToggleEvents( $ )
{
	// initially undefined, so we will fire the events at at start
	var bTouchFriendly, bSmallScreen;

	$(window).on('resize.ResponsiveToggle', function() {
		if ( window.UseTouchFriendlyMode() !== bTouchFriendly )
		{
			bTouchFriendly = window.UseTouchFriendlyMode();
			$(window).trigger('Responsive_TouchFriendlyModeToggled');
		}

		if ( window.UseSmallScreenMode() !== bSmallScreen )
		{
			bSmallScreen = window.UseSmallScreenMode();
			$(window).trigger('Responsive_SmallScreenModeToggled');
		}
	} ).trigger( 'resize.ResponsiveToggle' );
}