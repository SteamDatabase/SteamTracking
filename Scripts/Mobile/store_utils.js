
// Disable jquery mobile's ajax page transitions since they break on any links to non-jqm pages (and for some reason they're on by default for all links)
$J( document ).bind( "pageinit", function() {
	  $J.mobile.ajaxLinksEnabled = false;
	  $J.mobile.ajaxFormsEnabled = false;
	  $J.mobile.ajaxEnabled = false;
	  $J.mobile.loadingMessage = false;
	  $J.mobile.pushStateEnabled = false;
	  $J.mobile.showPageLoadingMsg = function(){};
});

//
// SEARCH
//

var g_strNavContext;

function EnableSearchSuggestions( elemTerm, navcontext )
{
	SearchSuggestSetDefaultSearchText( elemTerm );
	elemTerm = $J( elemTerm );
	elemTerm.delayedObserver( function()
	{
		SearchTimeout( elemTerm.val() );
	}, 0.4 );
	elemTerm.bind( 'click', function (e) { SearchSuggestClearDefaultSearchText( elemTerm ) } );
	elemTerm.bind( 'blur', function (e) { SearchSuggestSetDefaultSearchText( elemTerm ) } );
	g_strNavContext = navcontext;
}

function SearchTimeout( value )
{
	if ( value )
	{
		$J.ajax({
			url: 'https://store.steampowered.com/search/suggest',
			success: function( data )
			{
				$J( '#searchSuggestionsContents' ).html( data );
				$J.each( $J( '#searchSuggestionsContents a.match' ), function ( index, elem )
				{
					elem = $J( elem );
					elem.children( '.match_img' ).prependTo( elem );
				} );
				ShowSuggestionsAsNecessary();
			},
			error: function( jqXHR, textStatus, errorThrown )
			{

			},
			data:
			{
				mobile: 1,
				term: value,
				f: 'games',
				navcontext: g_strNavContext
			}

		});
	}
	else
	{
		$J( '#searchSuggestionsContents' ).html( '' );
		ShowSuggestionsAsNecessary();
	}
}

function ShowSuggestionsAsNecessary( bForceHide )
{
	var elem = $J( '#searchSuggestions' );
	if ( $J( '#searchSuggestionsContents' ).children().length > 0 && !bForceHide )
	{
		elem.fadeIn();
	}
	else
	{
		elem.fadeOut();
	}
}

function SearchSuggestClearDefaultSearchText( elem )
{
	elem = $J( elem );
	ShowSuggestionsAsNecessary();
	var text = elem.val();
	if ( text == 'search the store' )
	{
		elem.val( '' );
		elem.removeClass( 'default' );
	}
}

function SearchSuggestSetDefaultSearchText( elem )
{
	elem = $J( elem );
	ShowSuggestionsAsNecessary( true );
	var text = elem.val();
	if ( text == '' )
	{
		elem.val( 'search the store' );
		elem.addClass( 'default' );
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

function ExpandHiddenTableViewCells( element )
{
	$J( element ).parent().children( 'div.tableViewCellHidden' ).removeClass( 'tableViewCellHidden' );
	$J( element ).remove();
}

//
// CART & WISHLIST
//

function MakeNavCookie( snr, url )
{
	var dateExpires = new Date();
	dateExpires.setTime( dateExpires.getTime() + 1000 * 60 );
	document.cookie = 'snr=' + snr + '|' + encodeURIComponent( url ) +'; expires=' + dateExpires.toGMTString() + ';path=/';
}

function AddToWishlistMobile( appid, divToHide, divToShowSuccess, navref )
{
	if ( navref )
		MakeNavCookie( navref, url );

	var url = 'https://store.steampowered.com/api/addtowishlist';

	$J.post(
		url,
		{
			appid: appid
		},
		function( data )
		{
			$J( '#' + divToHide ).hide();
			$J( '#' + divToShowSuccess ).show();
		},
		"json"
	);
}

// Function to add a package to a cart, assumes form setup on the page
function addToCart( subid )
{
	try
	{
		document.forms['add_to_cart_'+subid].submit();
	}
	catch( e )
	{
	}
}

function addBundleToCart( bundleid )
{
	try
	{
		document.forms['add_bundle_to_cart_'+bundleid].submit();
	}
	catch( e )
	{
	}
}


function addAllDlcToCart()
{
	try
	{
		document.forms['add_all_dlc_to_cart'].submit();
	}
	catch( e )
	{
	}
}

//
// LARGE CAP scroll box code
//

var g_nCapCount = 0; // This must be set externally by the including page!

// Large cap indexing goes from [1, g_nCapCount] with 0 and g_nCapCount + 1 reserved for left/right overflow.
// So if there exist large caps A, B, C, and D, the array of laid out caps looks like 'DABCDA' so we can
// seamlessly wrap around with animation.
var g_nCurrentCap = 0;
var g_nLastPageIndicator = -1;

// Value of CSS 'left' property for scroller (larger negative values imply successive scrolls to the right)
var g_nCurrentLeftScroll = 0;

// Width of the large cap image
var g_nCapImageWidth;
// Timer ID used to auto-scroll large caps
var g_nAutoScrollTimeoutID;

// ID of current touch
var g_LargeCapCurrentTouchID;
// Last touch coordinate
var g_nLargeCapLastTouchX, g_nLargeCapLastTouchY;
var g_nLargeCapStartX;
var g_nStartCap;

var g_bDisableScroll;

var g_nAutoscrollInterval = 4500;
var g_nScrollDuration = 400;

function setLargeCapDivSizes()
{
	if ( $J( '.largeCapFrame' ).length ) {

		var pageWidth = $J( 'body' ).width();
		var capWidth = pageWidth - 24; // 12px margin left & right
		if ( capWidth > 467 ) capWidth = 467;
		$J( '.largeCapFrame' ).width( capWidth );
		var progressFrameHeight = $J( '.largeCapProgressFrame' ).get(0).offsetHeight;
		g_nCapImageWidth = capWidth;
		var descriptionHeight = 45; // description, price, title
		$J( '.largeCapFrame' ).height( g_nCapImageWidth / 2.58 + descriptionHeight + progressFrameHeight );
		$J( '.largeCap' ).height( g_nCapImageWidth / 2.58 + descriptionHeight );
		$J( '.largeCapImg' ).width( g_nCapImageWidth );
		$J( '.largeCapImg' ).height( g_nCapImageWidth / 2.58 );
		// add 2 to account for the extra divs on the far left and far right of the scroller (wrap-around)
		$J( '.largeCapScroller' ).width( ( g_nCapCount + 2 ) * g_nCapImageWidth );
		g_nCurrentLeftScroll = -g_nCapImageWidth * g_nCurrentCap;
		$J( '.largeCapScroller' ).css( 'left', g_nCurrentLeftScroll );

	} else {

		g_nCapImageWidth = 50;

	}
}

function updateLargeCapPageIndicator()
{
	// Figure out which cap we are closest to
	g_nCurrentCap = Math.round( -g_nCurrentLeftScroll / g_nCapImageWidth );
	// Don't update the text field if nothing has changed
	if ( g_nCurrentCap == g_nLastPageIndicator )
		return;

	var text = '';
	for ( var i = 1; i < g_nCurrentCap; ++ i )
	{
		text += '&#183; ';
	}
	text += '<span class="largeCapProgressHighlight">&#8226; </span>';
	for ( var i = g_nCurrentCap + 1; i <= g_nCapCount; ++ i )
	{
		text += '&#183; ';
	}
	$J( '.largeCapProgress' ).html( text );
	g_nLastPageIndicator = g_nCurrentCap;
}

// Scroll right by 1 entry
function scrollLargeCap( numCaps )
{
	g_nCurrentCap += numCaps;
	// If this causes us to overflow to the right, reset the location to the far left
	// (actual indexing is [1, g_nCapCount], with 0 and g_nCapCount + 1 reserved for left/right overflow)
	if ( g_nCurrentCap > g_nCapCount )
	{
		g_nCurrentCap = 1;
		$J( '.largeCapScroller' ).css( 'left', 0 );
	}
	else if ( g_nCurrentCap < 1 )
	{
		g_nCurrentCap = g_nCapCount;
		$J( '.largeCapScroller' ).css( 'left', -g_nCapImageWidth * ( g_nCapCount + 1 ) );
	}

	g_nCurrentLeftScroll = -g_nCapImageWidth * g_nCurrentCap;
	$J( '.largeCapScroller' ).animate({
		left: g_nCurrentLeftScroll
	},
	g_nScrollDuration );

	updateLargeCapPageIndicator();

	window.clearTimeout( g_nAutoScrollTimeoutID );
	g_nAutoScrollTimeoutID = window.setTimeout( function() {
		scrollLargeCap( 1 );
	},
	g_nAutoscrollInterval );
}

function initializeLargeCapScroller()
{
	// large cap indexing goes from [1, g_nCapCount] with 0 and g_nCapCount + 1 reserved for left/right overflow
	g_nCurrentCap = 1;
	setLargeCapDivSizes();

	$J( '.largeCapFrame' ).live( 'touchstart', function( event ) {

		var newTouches = event.originalEvent.changedTouches;
		if ( !g_LargeCapCurrentTouchID )
		{
			g_LargeCapCurrentTouchID = newTouches[0].identifier;
			g_nLargeCapStartX = g_nLargeCapLastTouchX = newTouches[0].screenX;
			g_nLargeCapLastTouchY = newTouches[0].screenY;
			g_nStartCap = g_nCurrentCap;
			g_bDisableScroll = false;

			// Cancel any current animations or pending auto scrolls
			$J( '.largeCapScroller' ).stop();
			window.clearTimeout( g_nAutoScrollTimeoutID );
		}
	});

	$J( '.largeCapFrame' ).keydown( function( event ) {

		if ( event.keyCode == 37 || event.keyCode == 39 )
		{
			// Cancel any current animations or pending auto scrolls
			$J( '.largeCapScroller' ).stop();
			window.clearTimeout( g_nAutoScrollTimeoutID );
			scrollLargeCap( event.keyCode == 37 ? -1 : 1 );
		}
	});

	$J( '.largeCapFrame' ).live( 'touchmove', function( event ) {

		// Avoid bug in Android that renders 'touchmove' event useless and breaks capsule scrolling
		if( navigator.userAgent.match(/Android/i) ) {
			event.preventDefault();
		}

		var changedTouches = event.originalEvent.changedTouches;

		if ( g_LargeCapCurrentTouchID != null )
		{
			for ( var i = 0; i < changedTouches.length; ++ i )
			{
				if ( changedTouches[i].identifier == g_LargeCapCurrentTouchID )
				{
					var diffX = changedTouches[i].screenX - g_nLargeCapLastTouchX;
					var diffY = changedTouches[i].screenY - g_nLargeCapLastTouchY;
					g_nLargeCapLastTouchX = changedTouches[i].screenX;
					g_nLargeCapLastTouchY = changedTouches[i].screenY;

					if ( g_bDisableScroll )
					{
						event.preventDefault();
					}
					else if ( Math.abs( diffY ) <= Math.abs( diffX ) )
					{
						g_bDisableScroll = true;
					}

					// Cancel any pending animations
					$J( '.largeCapScroller' ).stop();

					g_nCurrentLeftScroll = g_nCurrentLeftScroll + diffX;

					// Wrap around the scroller if we go too far left/right
					if ( g_nCurrentLeftScroll > -0.5 * g_nCapImageWidth )
					{
						g_nCurrentLeftScroll -= g_nCapImageWidth * g_nCapCount;
					}
					if ( g_nCurrentLeftScroll < -( g_nCapCount + 0.5 ) * g_nCapImageWidth )
					{
						g_nCurrentLeftScroll += g_nCapImageWidth * g_nCapCount;
					}

					// Update scroll position and page indicator
					$J( '.largeCapScroller' ).css( 'left', g_nCurrentLeftScroll );
					updateLargeCapPageIndicator();
				}
			}
		}
	});

	// Called when touches end for any reason
	function onTouchEnd( event )
	{
		var changedTouches = event.originalEvent.changedTouches;

		if ( g_LargeCapCurrentTouchID != null )
		{
			for ( var i = 0; i < changedTouches.length; ++ i )
			{
				if ( changedTouches[i].identifier == g_LargeCapCurrentTouchID )
				{
					g_LargeCapCurrentTouchID = null;

					var nCurrentCap = -g_nCurrentLeftScroll / g_nCapImageWidth;
					var nCurrentCapRounded = Math.round( nCurrentCap );

					// Handle the wrap-around case
					if ( g_nStartCap - nCurrentCapRounded > 1 )
					{
						g_nStartCap -= g_nCapCount;
					}
					else if ( g_nStartCap - nCurrentCapRounded < -1 )
					{
						g_nStartCap += g_nCapCount;
					}

					var nTotalDiffX = changedTouches[i].screenX - g_nLargeCapStartX;

					var nTargetCap = g_nStartCap;

					if ( nTotalDiffX / g_nCapImageWidth > 0.2 )
					{
						nTargetCap = g_nStartCap - 1;
					}
					else if ( nTotalDiffX / g_nCapImageWidth < -0.2 )
					{
						nTargetCap = g_nStartCap + 1;
					}

					// Snap to the nearest discrete cap
					var nRoundoff = Math.abs( nCurrentCap - nTargetCap );

					$J( '.largeCapScroller' ).animate({
						left: -g_nCapImageWidth * nTargetCap
					},
					g_nScrollDuration * nRoundoff,
					function() {
						g_nCurrentLeftScroll = -g_nCapImageWidth * nTargetCap;
						updateLargeCapPageIndicator();
					});

					// Re-enable auto-scrolling
					g_nAutoScrollTimeoutID = window.setTimeout( function() {
						scrollLargeCap( 1 );
					},
					g_nAutoscrollInterval );
				}
			}
		}
	}

	$J( '.largeCapFrame' ).live( 'touchend', onTouchEnd );
	$J( '.largeCapFrame' ).live( 'touchcancel', onTouchEnd );

	updateLargeCapPageIndicator();

	// Kick off auto-scrolling
	g_nAutoScrollTimeoutID = window.setTimeout( function() {
		scrollLargeCap( 1 );
	},
	g_nAutoscrollInterval );
}

function largeCapScrollerHandleResize()
{
	setLargeCapDivSizes();
}

function dropdownMobileSelectOption( dropdownName, selectBox )
{
	try
	{
		var subId = selectBox.options[selectBox.selectedIndex].value;
		$J('#add_to_cart_' + dropdownName + '_value').val( subId );
		$J('#add_to_cart_' + dropdownName + '_description_text').html( $J('#add_to_cart_' + dropdownName + '_menu_option_description_' + subId ).html() );

		bInCart = selectBox.options[selectBox.selectedIndex].getAttribute( "inCart" ) == "true";

		if ( bInCart )
		{
			$J('#add_to_cart_' + dropdownName + '_add_button').hide();
			$J('#add_to_cart_' + dropdownName + '_in_cart_button').show();
		}
		else
		{
			$J('#add_to_cart_' + dropdownName + '_add_button').show();
			$J('#add_to_cart_' + dropdownName + '_in_cart_button').hide();
		}
	}
	catch( e)
	{
			}
}

function dropdownMobileAddToCart( dropdownName )
{
	try
	{
				if ($J('#add_to_cart_' + dropdownName + '_value').val() != '')
		{
			addToCart( dropdownName );
		}
	}
	catch( e)
	{
			}
}

function getCookie( name )
{
	var parts = document.cookie.split("; " + name + "=");
	if ( parts.length == 2 ) return parts.pop().split(";").shift();
}

//
// STOREFRONT APP FILTERING
//

var g_currentPlatformFilter = 'all';
var g_bShowingDLC = true;

$J( function() {
	// set up store filter
	var platformFilter = getCookie( "mobileStorePlatformFilter" );
	if ( platformFilter == 'pc' || platformFilter == 'mac' || platformFilter == 'linux' )
		g_currentPlatformFilter = platformFilter;
	else
		g_currentPlatformFilter = 'all';

	$J( '.platformFilterButton_' + g_currentPlatformFilter ).addClass( 'platformFilterButtonDown' );

	var showDLC = getCookie( "mobileStoreDLCFilter" );
	if ( showDLC == '0' )
	{
		g_bShowingDLC = false;
	}
	else
	{
		g_bShowingDLC = true;
		$J( '.showDLCButton' ).addClass( 'showDLCButtonDown' );
	}

	updateStoreItemFilter();
});

function onPlatformFilterButtonPressed( element, platform )
{
	$J( '.platformFilterButton' ).removeClass( 'platformFilterButtonDown' );
	$J( element ).addClass( 'platformFilterButtonDown' );
	g_currentPlatformFilter = platform;
	document.cookie = "mobileStorePlatformFilter=" + g_currentPlatformFilter + "; path=/";
	updateStoreItemFilter();
}

function updateStoreItemFilter()
{
	$J( '.storeItem' ).hide();
	var additionalFilters = g_bShowingDLC ? "" : '.showNonDLC';
	if ( g_currentPlatformFilter == 'all' )
	{
		$J( '.storeItem' + additionalFilters ).show();
	}
	else if ( g_currentPlatformFilter == 'pc' )
	{
		$J( '.showOnPC' + additionalFilters ).show();
	}
	else if ( g_currentPlatformFilter == 'mac' )
	{
		$J( '.showOnMac' + additionalFilters ).show();
	}
	else if ( g_currentPlatformFilter == 'linux' )
	{
		$J( '.showOnLinux' + additionalFilters ).show();
	}

	$J( '.storeItemSection' ).show();
	$J( '.storeItemSection' ).each( function( index ) {
		var hideSection = true;
		if ( $J( this ).find( '.standardAppContainer' ).is( ':visible' ) )
		{
			hideSection = false;
		}
		if ( hideSection )
			$J( this ).hide();
	});

	if ( typeof setDivSizes == 'function' )
		setDivSizes();
}

function onDLCTogglePressed( element )
{
	if ( g_bShowingDLC )
	{
		g_bShowingDLC = false;
		$J( element ).removeClass( "showDLCButtonDown" );
	}
	else
	{
		g_bShowingDLC = true;
		$J( element ).addClass( "showDLCButtonDown" );
	}
	document.cookie = "mobileStoreDLCFilter=" + (g_bShowingDLC ? "1" : "0") + "; path=/";
	updateStoreItemFilter();
}


function Logout()
{
	var $Form = $J('<form/>', {'action': 'https://store.steampowered.com/logout/', 'method': 'POST' } );
	$Form.append( $J('<input/>', {'type': 'hidden', 'name': 'sessionid', 'value': g_sessionID } ) );
	$Form.appendTo( 'body' );
	$Form.submit();
}

