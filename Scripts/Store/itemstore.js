
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
				ShowAlertDialog( 'Error', 'SORRY, WE COULDN\'T ADD YOUR ITEM!' );
			}
			else
			{
				
				$J( "#store_header_cart_btn").show();
				var elemCartCount = $J("#cart_item_count_value");
				elemCartCount.html( parseInt( elemCartCount.html() ) + 1 );
				var dialog = ShowConfirmDialog( 'Added to Shopping Cart', 'The item was added to your shopping cart.<br><br>Would you like to Checkout now or Continue Shopping?', 'Checkout', 'Continue Shopping' );
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
					ShowAlertDialog( 'Error', 'There was an error trying to load your shopping cart.  Please try again later.' );
					break;
				case 42:
					ShowAlertDialog( 'Error', 'You must have items in your cart to checkout.' );
					break;
				default:
					ShowAlertDialog( 'Error', 'There seems to have been an error initializing or updating your transaction.  Please wait a minute and try again or contact support for assistance.' );
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
	elMarketLink.html( 'View in Community Market' );
	elPriceInfoHeader.append( elMarketLink );

	elPriceInfo.append( elPriceInfoHeader );

	var elPriceInfoContent = $J( '<div/>', { 'style': 'min-height: 3em; margin-left: 1em;' } );
	elPriceInfoContent.html( '<img src="/public/images/login/throbber.gif" alt="#Economy_Market_BuyDialog_WaitThrobber_AltText">' );
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
					strInfo += 'Starting at: ' + json.lowest_price + '<br>'
				}
				else
				{
					strInfo += 'There are no listings currently available for this item.' + '<br>';
				}

				if ( json.volume )
				{
					var strVolume = '%1$s sold in the last 24 hours';
					strVolume = strVolume.replace( '%1$s', json.volume );
					//strInfo += '#Economy_Market_PriceOverview_Median ' + json.median_price + '<br>';
					strInfo += 'Volume: ' + strVolume + '<br>';
				}

				elPriceInfoContent.html( strInfo );
			}
		}
	)
	.fail(
		function() {
			var strInfo = 'There was an error getting listings for this item. Please try again later.';
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

