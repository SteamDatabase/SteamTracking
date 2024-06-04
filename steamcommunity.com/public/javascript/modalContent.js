
/* handle modal content */
var modalContent = {};
var activeContent;
var bodyClassName = "";
var resizeActiveContentTimer = null;
var g_bModalModifyAnchorTargets = true;
var g_bModalCacheContent = true; // whether or not to reuse old iframes when opening a modal with a previously visited URL

function OnModalContentDismissal()
{
	document.body.style.overflow = '';
	$('modalContentScrollbarHack').hide();
	if ( $('ModalContentContainer') )
		$('ModalContentContainer').className = bodyClassName;
	if ( activeContent.contentWindow.onModalHidden )
	{
		activeContent.contentWindow.onModalHidden();
	}
	// for now, if the window has embedded objects, like YouTube videos,
	// remove the child to stop the video
	if ( activeContent.contentWindow.document.getElementsByTagName( "object" ).length > 0 || activeContent.contentWindow.document.getElementsByTagName( "iframe" ).length > 0 || !g_bModalCacheContent )
	{
		$('modalContentFrameContainer').removeChild( activeContent );
		modalContent[activeContent.src] = null;
	}
	else if ( !modalContent[activeContent.src] )
	{
		$('modalContentFrameContainer').removeChild( activeContent );
	}
	activeContent = null;

	$('modalContent').fire( 'modalContent:dismissed' );
}

function InnerAnchorClickHandler_Deferred()
{
	PollResizeActiveModalContent();
	HookAnchors();
}

function InnerAnchorClickHandler()
{
	setTimeout( InnerAnchorClickHandler_Deferred, 1 );
}

function HookAnchors()
{
	// the modal may have been closed by the time we get here
	if ( !activeContent )
		return;

	if ( g_bModalModifyAnchorTargets )
	{
		var anchorTags;
		try
		{
			anchorTags = activeContent.contentDocument.getElementsByTagName('a');
		}
		catch( err )
		{
			// We probably navigated off domain and don't have permission. Dang.
			return;
		}

		for( var i = 0; i < anchorTags.length; i++ )
		{
			var anchorTag = anchorTags[i];

			if ( anchorTag.target == "" )
			{
				anchorTag.target = '_top';
			}
		}
	}

	Event.observe( activeContent.contentDocument.body, 'click', InnerAnchorClickHandler );
}

modalContentLoaded = false;
function OnModalContentLoaded()
{
	if ( modalContentLoaded )
		return;

	modalContentLoaded = true;
	HookAnchors();

	$( 'modalContentWait' ).hide();
	modalContent[activeContent.src] = activeContent;
	activeContent.show();
	SizeModalContent( activeContent );
}

function OnModalContentFullyLoaded()
{
	OnModalContentLoaded(); //catch any pages that haven't been updated
	if ( $(activeContent).contentDocument.body.setStyle )
		$(activeContent).contentDocument.body.setStyle( { 'overflow-x' : 'hidden' } );
	activeContent.forceResize = true;
	SizeModalContent( activeContent );
	resizeActiveContentTimer = setTimeout( PollResizeActiveModalContent, 100 );
}



function SizeModalContent( activeContent )
{
	if ( activeContent.sizeToFit )
	{
		SizeToFitScreen( activeContent );
		resizeActiveContentTimer = setTimeout( PollResizeActiveModalContent, 200 );
	}
	else
	{
		ResizeModalContent( activeContent );
	}
}

function SizeToFitScreen( elem )
{
	// defer, to give the iframe a chance to figure out its normal size
	SizeToFitScreen_Deferred.bind( null, elem ).defer();
}

// size width until the vertical scrollbar appears
function SizeToFitScreen_Deferred( elem )
{
	var viewport = document.viewport.getDimensions();
	var windowWidth = viewport.width;
	var windowHeight = viewport.height;

	// if we've already calculated the width, we don't need to do this again
	if ( ( !elem.forceResize ) && typeof elem.lastWidth != 'undefined' && typeof elem.lastHeight != 'undefined' && elem.lastWindowWidth == windowWidth && elem.lastWindowHeight == windowHeight )
	{
		$('modalContent').style.width =  elem.lastWidth + 'px';
		$('modalContent').style.height =  elem.lastHeight + 'px';
		modalSizing( $('modalContent') );
		return false;
	}

	elem.forceResize = false;

	var maxWidth = Math.floor( windowWidth * 0.95 );
	var maxHeight = Math.max( 300, Math.floor( windowHeight * 0.95 ) );

	// size up content, but keep aspect ratio
	var contentWidth = $(elem).contentDocument.body.offsetWidth;
	var contentHeight = $(elem).contentDocument.body.offsetHeight;
	var aspectRatio = contentWidth / contentHeight;

	var titleBarHeight = 0;
	if ( $('modalContentTitleBar').visible() )
	{
		titleBarHeight = $('modalContentTitleBar').getHeight();
	}

	// first try to set window at maximum width and figure out what that new height would be, including
	// title bar and borders
	var newWidth = maxWidth;
	var newHeight = Math.floor( newWidth / aspectRatio );// + titleBarHeight + 4;

	if ( newHeight > maxHeight )
	{
		newHeight = maxHeight;
		newWidth = Math.floor( newHeight * aspectRatio );
	}

	// remove borders
	newWidth += 12;	/* some space for scrollbar in firefox */
	$('modalContent').style.width = newWidth + 'px';

	var resized = ResizeModalContent( elem );

	elem.lastWindowWidth = windowWidth;
	elem.lastWindowHeight = windowHeight;
	elem.lastWidth = newWidth;
	elem.lastHeight = $('modalContent').getHeight();

	return resized;
}

function PollResizeActiveModalContent()
{
	if ( !activeContent || !activeContent.visible() )
		return;

	var resized = false;

	if ( activeContent.sizeToFit )
	{
		resized = SizeToFitScreen( activeContent );
	}
	else
	{
		resized = ResizeModalContent( activeContent );
	}

	if ( resized )
	{
		resizeActiveContentTimer = setTimeout( PollResizeActiveModalContent, 100 );
	}
}

function ResizeModalContent( elem )
{
	// the content window should be at most 90% of the usable window height
	var viewport = document.viewport.getDimensions();
	var windowHeight = viewport.height;
	var windowWidth = viewport.width;
	var minHeight = 300;
	var contentHeight = $(elem).contentDocument.body.scrollHeight;
	var desiredHeight = Math.min( contentHeight, Math.max( minHeight, Math.floor( windowHeight * 0.95 ) ) );
	var dialogHeight = desiredHeight;
	var titleBarHeight = 0;
	if ( $('modalContentTitleBar').visible() )
	{
		titleBarHeight = $('modalContentTitleBar').getHeight();
		dialogHeight += titleBarHeight;
	}
	var oldDialogHeight = $( 'modalContent' ).getHeight() - 4; // include the 2px border on top and bottom
	var oldFrameContainerHeight = $( 'modalContentFrameContainer' ).getHeight();
	var oldContentHeight = $( elem ).getHeight();
	if ( oldDialogHeight == dialogHeight && oldFrameContainerHeight == desiredHeight && oldContentHeight == contentHeight )
		return false;


	$( 'modalContent' ).style.height = dialogHeight + 'px';
	$( 'modalContentFrameContainer' ).style.height = desiredHeight + 'px';

	var $Modal = $J('#modalContent');
	if ( $Modal.width() > windowWidth * 0.95 )
	{
		if ( !$Modal.data('origWidth') )
			$Modal.data( 'origWidth', $Modal.width() );
		$('modalContent' ).style.width = Math.max( 310, Math.floor( windowWidth * 0.95 ) ) + 'px';
	}
	else if ( $Modal.data('origWidth') && $Modal.data('origWidth') > $Modal.width() )
	{
		$('modalContent' ).style.width = Math.min( $Modal.data('origWidth'), Math.floor( windowWidth * 0.95 ) ) + 'px';
	}

	//$( elem ).style.height = contentHeight + 'px';
	$( elem ).style.height = desiredHeight + 'px';
	// re-center
	modalSizing( $('modalContent') );
	return true;
}

function ShowModalContent( url, titleBarText, titleBarURL, sizeToFit )
{
	var bIsPanorama = false;

	if ( navigator.userAgent.match( /Valve Steam Tenfoot/i ) )
		bIsPanorama = true;

	var params = document.location.toString().toQueryParams();
	if ( typeof params.insideModal != 'undefined' || bIsPanorama )
	{
		// already inside a modal, go there directly
		window.parent.location.href = url.replace( "insideModal=1", "insideModal=0");
		return;
	}

	EnsureModalContentDivExists();
	// defer the display of the modal by a frame, so any click event which may have triggered this
	//	has finished propagation
	ShowModalContent_Deferred.bind( null, url, titleBarText, titleBarURL, typeof sizeToFit != 'undefined' && sizeToFit ).defer();
}

function ShowModalContent_Deferred( url, titleBarText, titleBarURL, sizeToFit )
{
	EnsureModalContentDivExists();

	sizeToFit = typeof sizeToFit != 'undefined' && sizeToFit;
	// reset dialog width and height and show it in the waiting state
	$( 'modalContent' ).style.width = '990px';
	$( 'modalContent' ).style.height = '';
	showModal( 'modalContent', false, false );
	$( 'modalContent').OnModalDismissal = OnModalContentDismissal;
	$( 'modalContentFrameContainer' ).childElements().invoke( 'hide' );
	$( 'modalContent' ).childElements().invoke( 'hide' );
	$( 'modalContentWait' ).show();

	// set up the titlebar if applicable
	if ( typeof titleBarText != 'undefined' &&
		 typeof titleBarURL != 'undefined' )
	{
		$('modalContentTitleBar').show();
		$('modalContentTitleBarLink').href = titleBarURL;
		$('modalContentTitleBarImageLink').href = titleBarURL;
		$('modalContentTitleBarLink').innerHTML = titleBarText;
	}
	else
	{
		$('modalContentTitleBar').hide();
	}

	// hide the scrollbar and show our fake scrollbar
	document.body.style.overflow = 'hidden';
	if ( $('ModalContentContainer') )
	{
		bodyClassName = $('ModalContentContainer').className;
		$('ModalContentContainer').className = "modalBody";
	}
	$('modalContentScrollbarHack').show();
	$('modalContentDismiss').show();

	// look up the cached iframe and show it or create a new one
	if ( modalContent[url] )
	{
		$( 'modalContentWait' ).hide();
		modalContent[url].show();
		SizeModalContent( modalContent[url] );
		activeContent = modalContent[url];
		resizeActiveContentTimer = setTimeout( PollResizeActiveModalContent, 100 );
	}
	else
	{
		modalContentLoaded = false;
		iframeContent = new Element( 'iframe', { 'class' : 'modalContent_iFrame', 'onLoad' : 'OnModalContentFullyLoaded()', 'style' : 'display: none;', 'scrolling' : sizeToFit ? 'no' : 'auto' } );
		iframeContent.src = url;
		activeContent = iframeContent;
		activeContent.sizeToFit = sizeToFit;
		$( 'modalContentFrameContainer' ).appendChild( iframeContent );
		$( 'modalContentFrameContainer' ).style.height = 0 + 'px';
	}
	$( 'modalContentFrameContainer' ).show();

	return false;
}

function HideModalContent()
{
	if ( $( 'modalContent' ) )
	{
		hideModal( 'modalContent' );
	}
}

function EnsureModalContentDivExists()
{
	if ( !$('modalContent') )
	{
				$(document.body).insert( {bottom: "<div id=\"modalContentScrollbarHack\" style=\"display: none\"><\/div>\r\n\r\n<div id=\"modalContent\" class=\"modal_frame\" style=\"display: none\">\r\n\t<div id=\"modalContentTitleBar\">\r\n\t\t<a id=\"modalContentTitleBarLink\" href=\"\" target=\"_blank\">&nbsp;<\/a>\r\n\t\t<a id=\"modalContentTitleBarImageLink\" href=\"\" target=\"_blank\"><img src=\"https:\/\/community.akamai.steamstatic.com\/public\/images\/skin_1\/ico_external_link.gif\" alt=\"\"><\/a>\r\n\t\t<div id=\"modalContentDismiss\" class=\"modalContentDismissImage\" onclick=\"HideModalContent();\">\r\n\t\t\t<img src=\"https:\/\/community.akamai.steamstatic.com\/public\/images\/x9x9.gif\" width=\"9\" height=\"9\" border=\"0\" alt=\"Close\">\r\n\t\t<\/div>\r\n\t<\/div>\r\n\t<div id=\"modalContentWait\"><img src=\"https:\/\/community.akamai.steamstatic.com\/public\/images\/login\/throbber.gif\" alt=\"Loading\"><\/div>\r\n\t<div id=\"modalContentFrameContainer\"><\/div>\r\n<\/div>" });
	}
}

function ShowPartnerEvent( partnerEventAppid, partnerEventAnnounceGID )
{
	if( typeof window.fnPartnerEvent_ShowInfiniteScroll !== 'undefined')
	{
		window.fnPartnerEvent_ShowInfiniteScroll( partnerEventAppid, partnerEventAnnounceGID );
		return true;
	}
	return false;
}

$J( function($) {

	$(window ).on('resize.modalContent', PollResizeActiveModalContent );

	var s_bInTouchEvent = false;
	$(document ).on('touchstart.modalContent', 'a.modalContentLink, div.modalContentLink', function( e ) {
		s_bInTouchEvent = true;
	});
	$(document ).on('click.modalContent', 'a.modalContentLink, div.modalContentLink', function( e ) {
		var $Link = $( e.currentTarget );
		var bIsAnchor = $Link.is('a');

		// if it's not a left click (middle or right click) just continue
		if ( bIsAnchor && ( s_bInTouchEvent || ( e.which && e.which != 1 ) ) )
		{
			s_bInTouchEvent = false;
			return;
		}

		// show as a modal popup
		if ( bIsAnchor )
			e.preventDefault();

		var partnerEventAnnounceGID = $Link.data('partnerEventAnnounceGid');
		var partnerEventAppid = $Link.data('partnerEventAppid');
			if( partnerEventAnnounceGID && partnerEventAppid && ShowPartnerEvent( partnerEventAppid, partnerEventAnnounceGID ) ) {
			return;
		}
		else {
			console.log( 'Partner Events: InfiniteScroll - Did not find div to hook onto');
		}

		var strURL = $Link.data('modalContentUrl');
		if ( !strURL )
		{
			strURL = $Link.attr('href');
		}

		if ( window.location.href.indexOf("https://") == 0 )
		{
			strURL = strURL.replace( "http://", "https://" );
		}


		// if they are touching a div, just navigate to the item url
		if ( s_bInTouchEvent )
		{
			s_bInTouchEvent = false;
			window.location = strURL;
			return;
		}

		// or if we're in gamepadui
		if ( window.bSupportsGamepadUI )
		{
			window.location = strURL;
			return;
		}

		var strModalURL = $Link.data('modalContentPopupUrl');
		if ( !strModalURL )
			strModalURL = strURL + ( strURL.indexOf( "?" ) != -1 ? '&' : '?' ) + 'insideModal=1';

		var strTitle = $( e.currentTarget ).data('modalContentTitle');
		if ( !strTitle )
			strTitle = V_EscapeHTML( strURL );

		var bSizeToFit = $( e.currentTarget ).data('modalContentSizetofit');
		if ( typeof bSizeToFit == 'undefined' )
			bSizeToFit = true;

		ShowModalContent( strModalURL, strTitle, strURL, bSizeToFit );

	});
});