
function SearchItemStore()
{
	$J( "#SearchForm" ).submit();
}

function FilterSelect( url, filter )
{
	if ( filter )
	{
		top.location.href = url + "?filter=" + filter;
	}
	else
	{
		top.location.href = url;
	}
}

function AddMtxItemToCart( appid, assetclassid, quantity )
{
	$J.post(
		'https://store.steampowered.com/cart/addtocart',
		{
			'sessionid' : g_sessionID,
			'action' : 'add_to_cart',
			'microtxnappid' : appid,
			'microtxnassetclassid' : assetclassid,
			'quantity' : quantity
		}
	)
	.done(
		function( data ) {
			if ( !data || !data.success )
			{
				ShowAlertDialog( '#title_error', '#cart_add_failed' );
			}
			else
			{
				
				$J( "#store_header_cart_btn").show();
				var elemCartCount = $J("#cart_item_count_value");
				elemCartCount.html( parseInt( elemCartCount.html() ) + 1 );
				var dialog = ShowConfirmDialog( '#item_store_added_item_title', '#item_store_added_item_text', '#item_store_checkout', '#item_store_continue_shopping' );
				dialog.done(
					function() {
						StartCheckout( appid );
				} );
			}
		}
	);
}

function StartCheckout( appid )
{
	$J.post(
		'https://store.steampowered.com/itemstore/' + appid + '/ajaxcheckout/',
		{
			'sessionid' : g_sessionID
		}
	)
	.done(
		function( json ) {
			switch ( json.success )
			{
				case 1:
				{
					ContinueCheckout( json );
				}
				break;
				case 39:
					ShowAlertDialog( '#title_error', '#cart_error_failed_to_load' );
					break;
				case 42:
					ShowAlertDialog( '#title_error', '#checkout_error_no_items' );
					break;
				default:
					ShowAlertDialog( '#title_error', '#checkout_failed_inittransaction' );
			}
		}
	);
}

function ContinueCheckout( checkoutParams )
{
	var params = {
		'method' : 'POST',
		'action' : 'https://store.steampowered.com/itemcart/checkout/',
		'style' : 'display: none'
	};

	var form = $J("<form/>", params );

	$J.each(
		checkoutParams,
		function ( key, value ) {
			form.append( $J( '<input/>', { type: 'hidden', name: key, value: value } ) );
		}
	)

	form.appendTo( "body" );

	form.submit();
}


function GetMarketPriceOverview( container, params )
{
	var appid = params['appid'];
	var strMarketHashName = params['market_hash_name'];

	var elPriceInfo = $J( '<div/>' );
	var elPriceInfoHeader = $J( '<div/>', { 'style': 'height: 24px;' } );

	var elMarketLink = $J( '<a/>', {
		'href': 'http://steamcommunity.com/market/listings/' + appid + '/' + encodeURIComponent( strMarketHashName )
	} );
	elMarketLink.html( '#Economy_Market_PriceOverview_Header' );
	elPriceInfoHeader.append( elMarketLink );

	elPriceInfo.append( elPriceInfoHeader );

	var elPriceInfoContent = $J( '<div/>', { 'style': 'min-height: 3em; margin-left: 1em;' } );
	elPriceInfoContent.html( '<img src="https://steamstore-a.akamaihd.net/public/images/login/throbber.gif" alt="#Economy_Market_BuyDialog_WaitThrobber_AltText">' );
	elPriceInfo.append( elPriceInfoContent );

	container.append( elPriceInfo );

	$J.get(
		'https://steamcommunity.com/market/priceoverview/',
		{
			appid: appid,
			country: params['country'],
			currency: params['currency'],
			market_hash_name : strMarketHashName
		}
	)
	.done(
		function ( json ) {
			if ( json.success )
			{
				var strInfo = '';
				if ( json.lowest_price )
				{
					strInfo += '#Economy_Market_Listing_Price_StartingAt ' + json.lowest_price + '<br>'
				}
				else
				{
					strInfo += '#Economy_Market_PriceOverview_NoListings' + '<br>';
				}

				if ( json.volume )
				{
					var strVolume = '#Economy_Market_PriceOverview_DailyVolume';
					strVolume = strVolume.replace( '%1$s', json.volume );
					//strInfo += '#Economy_Market_PriceOverview_Median ' + json.median_price + '<br>';
					strInfo += '#Economy_Market_PriceOverview_VolumeLabel ' + strVolume + '<br>';
				}

				elPriceInfoContent.html( strInfo );
			}
		}
	)
	.fail(
		function() {
			var strInfo = '#Economy_Market_Listings_Error';
			elPriceInfoContent.html( strInfo );
		}
	)
}

function CItemStoreHighlightPlayer( rgParams, scrollbar ) {
	rgParams = rgParams || {};

	var player = this;

	this.m_scrollbar = scrollbar;

	this.m_previewImageElem = $J( "#preview_image" );
	this.m_previewImageElem.mouseover( function() { player.StopHighlightTimer(); } );
	this.m_previewImageElem.mouseout( function() { player.StartHighlightTimer(); } );

	this.m_scrollbar.m_eleTarget.mouseover( function() { player.StopHighlightTimer(); } );
	this.m_scrollbar.m_eleTarget.mouseout( function() { player.StartHighlightTimer(); } );
	this.m_scrollbar.m_eleHandle.mouseover( function() { player.StopHighlightTimer(); } );
	this.m_scrollbar.m_eleHandle.mouseout( function() { player.StartHighlightTimer(); } );

	for ( var i = 0; i < rgParams.length; ++i )
	{
		var elemID = rgParams[i].id;
		var elem = $J( "#" + elemID );
		elem.data( 'url', rgParams[i].url );
		elem.click( function() {
			var elem = $J( this );
			player.OnSelected( elem, elem.data( 'url' ) );
		} );
	}

	this.m_currentElem = null;
	this.OnSelected( $J( "#" + rgParams[0].id ), rgParams[0].url );

	this.StartHighlightTimer();
}

CItemStoreHighlightPlayer.prototype.StartHighlightTimer = function()
{
	this.StopHighlightTimer();

	var player = this;
	this.m_timeoutID = setTimeout(
		function() {
			player.CheckHighlightNextItem();
		},
		5000
	);
}

CItemStoreHighlightPlayer.prototype.StopHighlightTimer = function()
{
	if ( this.m_timeoutID )
	{
		clearTimeout( this.m_timeoutID );
		this.m_timeoutID = false;
	}
}

CItemStoreHighlightPlayer.prototype.CheckHighlightNextItem = function()
{
	var nextElem = this.m_currentElem.next();
	if ( nextElem.length == 0 )
	{
		var siblings = this.m_currentElem.siblings();
		nextElem = $J( siblings[0] );
	}
	this.OnSelected( nextElem, nextElem.data( 'url' ) );
}

CItemStoreHighlightPlayer.prototype.OnSelected = function( elem, imgURL )
{
	if ( this.m_currentElem )
	{
		this.m_currentElem.removeClass( "selected" );
	}

	this.m_currentElem = elem;
	this.m_currentElem.addClass( "selected" );

	var player = this;
	this.m_previewImageElem.fadeOut( 250, function() {
		player.m_previewImageElem.attr( 'src', imgURL );
		player.m_previewImageElem.attr( 'srcset', imgURL );
		player.m_previewImageElem.fadeIn( 250 );
	} );

	this.m_scrollbar.EnsureVisible( this.m_currentElem );

	this.StartHighlightTimer();
}

