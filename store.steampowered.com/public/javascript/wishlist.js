"use strict";

InitializeGPFocusRestoreTimeout( false );

var CWishlistController = function( bNotificationFilter = false )
{
	this.rgElements = {};
	this.rgVisibleApps = [];
	var $elTarget = $J('#wishlist_ctn');
	this.elContainer = $elTarget;
	var _this = this;
	this.nElementBuffer = 10; // Additional elements to lode above/below the view window
	this.m_bNotificationFilter = bNotificationFilter; // true if we're only displaying a list of AppIDs for a wishlist notification

	// Usee for the scroll handler.
	this.nHeaderOffset = $J('#wishlist_ctn').offset().top;

	this.nRowHeight = 178; // Starting value. We'll measure the first element later, when it's in the dom.

	// List of loaded elements (Used to later unload
	this.rgLoadedApps = [];

	// List of elements currently matched by a search term
	this.rgTermMatchedElements = [];

	// Current drag target
	this.elDragTarget = null;
	this.nLastPosition = -1;
	this.nDragAppId = -1;

	// Requested appid to scroll into view
	this.scrollToAppID = -1;

	//this.marker = $J('<div style="position: absolute; width: 100px; height: 1px; background-color: red"></div>');
	//$J('body').append(this.marker);


	// @todo chrisk
	this.rgFilterSettings = {
		'sort': 'order',
		'last_sort': false
	};

	this.rgFilterPrefixMap = {
		'price_1' : "Price",
		'price_2' : "Price",
		'price_wallet' : "Price",
		'discount_any': "Discount",
		'discount_50': "Discount",
		'discount_75': "Discount",
		'ex_earlyaccess': "Exclude",
		'ex_prerelease': "Exclude",
		'ex_vr': "Exclude",
		'deck_verified': "Deck Compatibility",
		'deck_playable': "Deck Compatibility"	}

	this.rgValidFilters = [
		'platform',
		'type',
		'sort',
		'term',
		'price_1', 'price_2', 'price_wallet',
		'ex_earlyaccess', 'ex_prerelease', 'ex_vr',
		'discount_any', 'discount_50', 'discount_75',
		'deck_verified', 'deck_playable'
	];

	// Hook up dropdowns
	$J('#dropdown_sort .item').on('click', function(){
		_this.rgFilterSettings['sort'] = this.data('dropdownValue');
		_this.Update();
	});

	$J('#tab_filters').on('click',function(e){
		$J('#tab_filters').toggleClass('hover');
		$J('#section_filters').toggleClass('hover');

		e.preventDefault();
		return false;
	})

	$J('#wishlist_search').on('keyup', function(){
		_this.rgFilterSettings['term'] = this.value.toLowerCase();
		_this.Update();
	});

	// Add event handler to close filter section when we click outside the box
	$J('body').on('click', function(e){

		var elTarget = e.target;
		if( elTarget == $J('#tab_filters')[0] || $J('#section_filters')[0].contains( elTarget ) )
			return;

		$J('#tab_filters').removeClass('hover');
		$J('#section_filters').removeClass('hover');
	});

	window.addEventListener('scroll', this.OnUserScroll.bind(this)); // register a callback which ONLY fires when user takes action.  this.OnScroll is also called by our JS.
	window.addEventListener('scroll', this.OnScroll.bind(this));
	window.addEventListener('resize', this.OnScroll.bind(this));
	window.addEventListener('resize', this.OnResize.bind(this));
	//$elTarget.on('dragover', this.OnDragOver.bind(this));
	//$J('body').on('mouseover touchmove', this.OnDragOver.bind(this));

	document.body.addEventListener('mousemove', this.OnDragOver.bind(this));
	document.body.addEventListener('touchmove', this.OnDragOver.bind(this));

	document.body.addEventListener('mouseup', this.OnDrop.bind(this));
	document.body.addEventListener('touchend', this.OnDrop.bind(this));

	// Add price brackets, built in JS since they vary by cc
	// Using a div with flex becuse the 'less than steam wallet' text is long and we don't want it to wrap under the checkbox
	var $elPriceCtn = $J('#price_brackets_container');
	$elPriceCtn.append('<label><div class="checkbox_wrapper"><input class="filter_check" type="checkbox" name="price_1"><div>'+"Less than %1$s".replace(/%1\$s/g,GStoreItemData.fnFormatCurrency( g_rgPriceBrackets[0] ) )+'</div></div></label>');
	$elPriceCtn.append('<label><div class="checkbox_wrapper"><input class="filter_check" type="checkbox" name="price_2"><div>'+"Less than %1$s".replace(/%1\$s/g,GStoreItemData.fnFormatCurrency( g_rgPriceBrackets[1] ) )+'</div></div></label>');
	if( g_nWalletCents > 0 )
		$elPriceCtn.append('<label><div class="checkbox_wrapper"><input class="filter_check" type="checkbox" name="price_wallet"><div>'+"Less than Steam Wallet balance"+'</div></div></label>');

	// the appid param is used by wishlist notifications so when the user clicks the notification we scroll the page to the appid of the notification
	const urlParams = new URLSearchParams( window.location.search );
	if ( urlParams.has( 'appid' ) )
		this.scrollToAppID = urlParams.get( 'appid' );

	// Hook up filter checkboxes
	$J('.filter_check').change(function(){
		if( this.checked )
			_this.rgFilterSettings[ this.name ] = 1;
		else
			delete _this.rgFilterSettings[ this.name ];
		_this.SaveSettings();
		_this.Update();
	});

	this.LoadAdditionalPages();
}

CWishlistController.prototype.LoadAdditionalPages = function()
{
	this.nPagesToLoad = g_nAdditionalPages;
	this.nPagesLoaded = 0;
	var _this = this;
	var unUserdataVersion = WebStorage.GetLocal( 'unUserdataVersion' );

	// include the wishlist notification games filter if in use
	const urlParams = new URLSearchParams( window.location.search );
	let wng = urlParams.has('wng') ? urlParams.get('wng') : undefined;

	for( var i=0; i < this.nPagesToLoad; i++ )
	{
		$J.ajax ( {
			type: "GET",
			url: g_strWishlistBaseURL + 'wishlistdata/',
			data: { 'p': i, 'v': unUserdataVersion, wng },
			dataType: 'json'
		}).done(function(data){
			_this.OnPageLoaded( data )
		});
	}

	if( g_nAdditionalPages == 0 )
		this.BuildElements();
}

CWishlistController.prototype.OnPageLoaded = function( data )
{
	g_rgAppInfo = Object.assign(data, g_rgAppInfo);
	this.nPagesLoaded++;
	if( this.nPagesLoaded == this.nPagesToLoad )
		this.BuildElements();
}

CWishlistController.prototype.RemoveFromWishlist = function( nAppId = 0 )
{
	if( !g_bCanEdit || nAppId == 0 )
		return;

	var _this = this;
	var strName = g_rgAppInfo[nAppId].name;

	ShowConfirmDialog("Remove this item from your wishlist?", "Are you sure you want to remove '%1$s' from your wishlist?<br><br>It can be re-added via the store page at any time.".replace(/%1\$s/,V_EscapeHTML(strName))).done(function(){

		window.RemoveFromWishlist( nAppId );
		GDynamicStore.InvalidateCache();

		$J( '#wishlist_ctn' ).removeClass ( 'sorting' );

		delete g_rgAppInfo[ nAppId ];
		_this.rgAllApps = Object.keys(g_rgAppInfo);
		_this.Update ( true );
	});
}

CWishlistController.prototype.BuildElements = function()
{
	var _this = this;
	this.rgAllApps = Object.keys(g_rgAppInfo);

	// Callback for when a user clicks on a tag
	var fnClickTag = function()
	{
		$J('#wishlist_search').val( this.textContent );
		$J('#wishlist_search').trigger('keyup');
	}

	var fnClickTop = function()
	{
		var $el = $J(this).closest('.wishlist_row');
		var appId = $el.data("appId");

		_this.MoveToPosition( appId, 0 );
		_this.SaveOrder();
		_this.Update( true );
	}

	var fnRemoveFromWishlist = function(e)
	{
		var $el = $J(this).closest('.wishlist_row');
		var nAppId = $el.data("appId");

		_this.RemoveFromWishlist( nAppId );

		event.preventDefault();
		return false;
	}

	var fnDragStart = function(e)
	{
		if( e.target.classList.contains('order_input') )
		{
			return;
		}


		var $el = $J(this).closest('.wishlist_row');
		var appId = $el.data("appId");


		_this.elDragTarget = $el[0];
		_this.elDragTarget.classList.add('dragging');

		_this.nDragAppId = appId;
		if( !this.elGhostImage )
		{
			this.elGhostImage = document.createElement ( 'div' );
			this.elGhostImage.style.width = "10px";
			this.elGhostImage.style.height = "10px";
			document.body.appendChild( this.elGhostImage );
		}

		if( e.dataTransfer )
		{
			e.dataTransfer.setDragImage ( this.elGhostImage, 0, 0 );
			_this.nLastPosition = -1;
			e.dataTransfer.dropEffect = "move";
		}

		$J( '#wishlist_ctn' ).addClass ( 'sorting' );

		e.preventDefault();
		return false;
	}

	var fnMoveToNumber = function( e )
	{
		var $el = $J(this).closest('.wishlist_row');
		var appId = $el.data("appId");

		_this.MoveToPosition( appId, $J('.order_input',$el ).val() - 1 );
		_this.Update( true );
		_this.SaveOrder();
	}

	var fnFocusTextBox = function( e )
	{
		$(this).select();
		e.preventDefault();
		return false;
	}

	// Build elements

	var rgIndexes = Object.keys( g_rgWishlistData );
	var nIndex = 0;
	var nYields = 0;

	function YieldingCreateElements( )
	{
		// Allow to run for 15ms, then yield back to the browser.
		var nYieldTime = performance.now() + 15;
		while(  nIndex < rgIndexes.length && performance.now() < nYieldTime )
		{
			var wishlist = g_rgWishlistData[rgIndexes[nIndex++]]

			var rgParams = {};
			var rgAppInfo = g_rgAppInfo[ wishlist.appid ]
			if( !rgAppInfo )
			{
				// @todo inject placeholder app info here so users can remove dead apps from their wishlists?
				continue
			}
			var subForPurchase = rgAppInfo.subs && rgAppInfo.subs.length ? rgAppInfo.subs[0] : undefined;

			var strScreenshots = '';
			for( var i=0; i<rgAppInfo.screenshots.length; i++ )
			{
				strScreenshots += '<div data-background-img-src="' + GetScreenshotURL( wishlist.appid, rgAppInfo.screenshots[i],'.600x338' )+ '"></div>'
			}

			var strTags = '';
			for( var i=0; i<rgAppInfo.tags.length && i<5; i++ )
			{
				strTags += '<div class="tag" data-tag-index="'+i+'">'+rgAppInfo.tags[i]+'</div>';
			}

			var strEarlyAccess = rgAppInfo.early_access ? '<span class="earlyaccess">'+"Early Access"+'</span>' : '';
			var strPurchaseArea = '<div class="purchase_area">';

			// output the discount block HTML returned from PHP
			if ( subForPurchase )
				strPurchaseArea += subForPurchase['discount_block'];

			var strInCartLabel = ( GDynamicStore.s_rgAppsInCart[ wishlist.appid ] ) ? "In Cart" : ( rgAppInfo['free_promo'] ? "Add to Account" : "Add to Cart");

			if( subForPurchase && ( subForPurchase.price > 0 || rgAppInfo['free_promo'] ) )
			{
				strPurchaseArea += "<form name=\"add_to_cart_%1$s\" action=\"%5$s\/\" method=\"POST\">\r\n\t\t\t\t\t<input type=\"hidden\" name=\"sessionid\" value=\"%2$s\">\r\n\t\t\t\t\t<input type=\"hidden\" name=\"subid\" value=\"%1$s\">\r\n\t\t\t\t\t<input type=\"hidden\" name=\"action\" value=\"add_to_cart\">\r\n\t\t\t\t\t<input type=\"hidden\" name=\"snr\" value=\"%3$s\">\r\n\t\t\t\t\t<a class=\"btn_green_steamui btn_medium noicon\" href=\"javascript:%6$s(%1$s);\"><span>%4$s<\/span><\/a>\r\n\t\t\t\t\t<a class=\"btn_green_steamui btn_medium icon\" href=\"javascript:%6$s(%1$s);\"><span><img class=\"ico_cart\" src=\"https:\/\/store.akamai.steamstatic.com\/public\/images\/v6\/ico\/wishlist\/ico_cart.png\"><\/span><\/a>\r\n\t\t\t\t<\/form>"				.replace(/%1\$s/g, subForPurchase.packageid ? subForPurchase.packageid : subForPurchase.bundleid )
				.replace(/%2\$s/g,g_sessionID)
				.replace(/%3\$s/g,GStoreItemData.rgNavParams.wishlist_cart)
				.replace(/%4\$s/g,strInCartLabel)
				.replace(/%5\$s/g, rgAppInfo['free_promo']? 'https://store.steampowered.com/freelicense/addfreelicense' : 'https://store.steampowered.com/cart' )
				.replace(/%6\$s/g, subForPurchase.packageid ? 'addToCart' : 'addBundleToCart' );
			}
			else if( rgAppInfo['prerelease'] )
			{
				strPurchaseArea += '<a class="coming_soon_link" href="'+GStoreItemData.GetAppURL(  wishlist.appid , 'wishlist_details')+'"><span>'+"Coming soon"+'</span></a>';
			}
			else if( rgAppInfo['free'] )
			{
				var strURL = 'steam://run/%1$s';
				var strPlayButton = "Play now";
				if ( g_bIsMobileAgent )
				{
					// On mobile devices show a 'free' link to the store page since play is not supported
					strURL = GStoreItemData.GetAppURL( wishlist.appid );
					strPlayButton = "Free";
				}
				else if( !g_bIsInSteamClient )
				{
					strURL = 'javascript:ShowGotSteamModal(\''+strURL+'\', %2$s, &quot;Play this game now&quot; )';
				}

				strPurchaseArea += "<a class=\"btn_green_steamui btn_medium\" href=\"%4$s\"><span>%3$s<\/span><\/a>"					.replace ( /%4\$s/g, strURL  )
					.replace ( /%1\$s/g, wishlist.appid  )
					.replace ( /%2\$s/g, V_EscapeHTML( JSON.stringify( rgAppInfo.name ) ) )
					.replace ( /%3\$s/g, rgAppInfo['type'] == 'Video' ? "Watch Now" : strPlayButton )
			}
			else
			{
				strPurchaseArea += '<a class="btn_blue_steamui btn_medium noicon" href="'+GStoreItemData.GetAppURL(  wishlist.appid , 'wishlist_details')+'"><span>'+"View Details"+'</span></a><a class="btn_blue_steamui btn_medium icon" href="'+GStoreItemData.GetAppURL(  wishlist.appid , 'wishlist_details')+'"><span><img class="ico_cart" src="https://store.akamai.steamstatic.com/public/images/v6/ico/wishlist/ico_info.png"></span></a>';
			}

			strPurchaseArea += '</div>'; // div class="purchase_area opened above

			var options = {  year: 'numeric', month: 'numeric', day: 'numeric' };
			var date = new Date(rgAppInfo['added'] * 1000);
			var strAdded =  g_bIsMobileAgent ? "" : "Added on %1$s".replace(/%1\$s/, date.toLocaleDateString(options) );

			if( g_bCanEdit )
				strAdded += " ( <div %1$s>remove<\/div> )".replace(/%1\$s/, ' class="delete"' );

			if ( g_bIsMobileAgent ) // remove parens around remove text
				strAdded = strAdded.replace('(', '').replace(')', '');

			var strSteamDeckCompatCategory = '';
			if ( rgAppInfo.steam_deck_compat !== undefined )
			{
				strSteamDeckCompatCategory = rgAppInfo.steam_deck_compat;
			}

			var $el = $J(
				g_strRowTemplate.replace(/%1\$s/g, wishlist.appid)
					.replace(/%2\$s/g, rgAppInfo['capsule'])
					.replace(/%3\$s/g, rgAppInfo['name'] )
					.replace(/%4\$s/g, rgAppInfo['review_desc'] )
					.replace(/%5\$s/g, rgAppInfo['release_string'] )
					.replace(/%6\$s/g, strPurchaseArea )
					.replace(/%7\$s/g, rgAppInfo['platform_icons'] )
					.replace(/%8\$s/g, strTags )
					.replace(/%9\$s/g, strScreenshots )
					.replace(/%10\$s/g, rgAppInfo['review_css'] )
					.replace(/%11\$s/g, GStoreItemData.GetAppURL( wishlist.appid, 'wishlist_capsule' ) )
					.replace(/%12\$s/g, strEarlyAccess )
					.replace(/%13\$s/g, rgAppInfo['reviews_percent'] )
					.replace(/%14\$s/g, rgAppInfo['reviews_total'] )
					.replace(/%15\$s/g, strAdded )
					.replace(/%16\$s/g, rgAppInfo.priority )
					.replace(/%17\$s/g, strSteamDeckCompatCategory )
			);

			$J('.hover_handle',$el)[0].addEventListener('mousedown', fnDragStart);
			$J('.hover_handle img',$el)[0].addEventListener('touchstart', fnDragStart);


			$J('.tag',$el).on('click ', fnClickTag );
			$J('.top',$el).on('click', fnClickTop );
			$J('.order_input',$el).on('change submit', fnMoveToNumber );
			$J('.order_input',$el).on('focus touchstart', fnFocusTextBox );
			$J('.delete',$el).on('click toucnstart', fnRemoveFromWishlist );


			_this.rgElements[ "" + wishlist.appid ] = $el;
		}

		if( nIndex < rgIndexes.length )
		{
			//console.log("Creation loop taking too long, yielding to browser for paint. Current index is " + nIndex + "/" + rgIndexes.length );
			nYields++;
			setTimeout ( YieldingCreateElements, 0 ); // Reschedule after 2ms so the browser has a chance to paint if it wants to.
		} else {
			console.log("Finished building wishlist. Yielded %s times for browser painting", nYields);
			if( g_rgWishlistData.length > 0 )
			{
				var idx = g_rgWishlistData[ Math.floor ( Math.random () * g_rgWishlistData.length ) ];
				var bgApp = g_rgAppInfo[ idx.appid ];

				if ( bgApp )
					$J ( ".game_page_background" ).css ( { 'background-image': 'url(' + bgApp.background + ')' } );
			}

			_this.LoadSettings();
			_this.Update();
			$J('#throbber').hide();
			$J('#total_num_games').text( Object.keys(_this.rgElements).length );

			// if we stored a last scroll position in history.state, or if url included an appid to scroll to, scroll there now
			_this.ScrollToRequestedPosition();
		}
	}

	YieldingCreateElements();
}

CWishlistController.prototype.SetFilterString = function()
{
	var strFilterString = '';
	$J.each(this.rgFilterSettings, function(key, value) {
		if( !key || key == 'last_sort' || key == 'view')
			return;

		if( strFilterString )
			strFilterString += '&'
		strFilterString += key + '='+value;
	});

	history.replaceState( history.state, undefined, "#" + strFilterString );
}

CWishlistController.prototype.ApplyDefaultView = function()
{
	var strMode = g_bIsMobileAgent ? 'compact' : 'full';

	$J('#viewmode_'+V_EscapeHTML( strMode )).attr('checked',true);

	if( strMode == "compact")
		this.elContainer.addClass('compact');
	else
		this.elContainer.removeClass('compact');
}

CWishlistController.prototype.ApplyDefaultType = function()
{
	$J('#type_all').attr('checked',true);
}

CWishlistController.prototype.ApplyDefaultPlatform = function()
{
	$J('#platform_all').attr('checked',true);
}

CWishlistController.prototype.LoadSettings = function()
{
	var lsValue = WebStorage.GetLocal('wishlistSettings');
	var rgPairs = location.hash.substring(1).split('&');
	if( rgPairs.length > 0 && rgPairs[0] )
	{
		for ( var i = 0; i < rgPairs.length; i++ )
		{
			var rgKV = rgPairs[ i ].split ( '=' );

			if ( this.rgValidFilters.includes( rgKV[ 0 ] ) )
			{
				this.rgFilterSettings[ rgKV[ 0 ] ] = decodeURIComponent( rgKV[ 1 ] );
				$J('input[name=\''+V_EscapeHTML( rgKV[ 0 ] )+'\']').attr('checked',true);
			}
		}
	}
	else if( lsValue != null )
	{
		this.rgFilterSettings = lsValue;
	}

	if( lsValue != null )
	{
		this.rgFilterSettings.view = lsValue.view;
	}

	if( this.rgFilterSettings.sort )
		this.SetDropdownLabel('sort', this.rgFilterSettings.sort );

	if( this.rgFilterSettings.platform )
		$J('#platform_'+V_EscapeHTML( this.rgFilterSettings.platform )).attr('checked',true);
	else
		this.ApplyDefaultPlatform();

	if( this.rgFilterSettings.type )
		$J('#type_'+V_EscapeHTML( this.rgFilterSettings.type )).attr('checked',true);
	else
		this.ApplyDefaultType();

	if( this.rgFilterSettings.term )
		$J('#wishlist_search').val(this.rgFilterSettings.term);

	if( this.rgFilterSettings.view )
	{
		this.SetViewMode ( this.rgFilterSettings.view );
		$J('#viewmode_'+V_EscapeHTML(  this.rgFilterSettings.view )).attr('checked',true);
	}
	else
	{
		this.ApplyDefaultView();
	}

	// price checkboxes
	$J('input[name=' + 'price_1' + ']').attr( 'checked', this.rgFilterSettings.price_1 );
	$J('input[name=' + 'price_2' + ']').attr( 'checked', this.rgFilterSettings.price_2 );
	$J('input[name=' + 'price_wallet' + ']').attr( 'checked', this.rgFilterSettings.price_wallet );

	// discount checkboxes
	$J('input[name=' + 'discount_any' + ']').attr( 'checked', this.rgFilterSettings.discount_any );
	$J('input[name=' + 'discount_50' + ']').attr( 'checked', this.rgFilterSettings.discount_50 );
	$J('input[name=' + 'discount_75' + ']').attr( 'checked', this.rgFilterSettings.discount_75 );

	// exclude checkboxes
	$J('input[name=' + 'ex_earlyaccess' + ']').attr( 'checked', this.rgFilterSettings.ex_earlyaccess );
	$J('input[name=' + 'ex_prerelease' + ']').attr( 'checked', this.rgFilterSettings.ex_prerelease );
	$J('input[name=' + 'ex_vr' + ']').attr( 'checked', this.rgFilterSettings.ex_vr );

	// steam deck compatibility checkboxes
	$J('input[name=' + 'deck_verified' + ']').attr( 'checked', this.rgFilterSettings.deck_verified );
	$J('input[name=' + 'deck_playable' + ']').attr( 'checked', this.rgFilterSettings.deck_playable );

}

CWishlistController.prototype.SaveSettings = function()
{
	var settingsCopy = Object.assign( {}, this.rgFilterSettings );

	delete settingsCopy.last_sort;
	delete settingsCopy.term;

	WebStorage.SetLocal('wishlistSettings',settingsCopy);
}


CWishlistController.prototype.SetDropdownLabel = function( strID, strValue )
{
	// Since our value mapping data is in a tooltip, we need to first create a virtual DOM from the tooltijp content.
	var $elTooltip = $J( '<div>' + $J('#dropdown_' + strID).data('dropdownHtml') + '</div>' );
	// Now pop out the label
	var strLabel = $J( 'div[data-dropdown-value=\'' + V_EscapeHTML(strValue) + '\']', $elTooltip ).text();
	$J('#label_' + strID).text( strLabel );
}


CWishlistController.prototype.OnResize = function()
{
	var $el = $J('.wishlist_row');
	if( !$el )
		return;

	var nNewHeight = $el.outerHeight(true);
	if( nNewHeight > 0 && nNewHeight != this.nRowHeight )
	{
		this.nRowHeight = $el.outerHeight ( true );
		this.Update();
	}
}
CWishlistController.prototype.OnScroll = function()
{
	var nWindow = 2; // How many elements to load in advance
	var scrollTop = window.scrollY;
	var nWindowHeight = window.innerHeight;
	var nRowHeight = this.nRowHeight

	var nStart =  Math.floor( scrollTop );
	var nRows =  Math.floor( nWindowHeight / nRowHeight  );
	nStart = Math.floor( ( nStart / nRowHeight ) - ( this.nHeaderOffset / nRowHeight ) ) - nWindow - this.nElementBuffer;


	if( nStart < 0)
		nStart = 0;

	//this.marker.css('top',(1+nStart )* nRowHeight + this.nHeaderOffset );


	var nEnd = nStart + nRows + nWindow * 2 + this.nElementBuffer;
	if( nEnd > this.rgVisibleApps.length )
		nEnd = this.rgVisibleApps.length;

		SetGPFocusRestoreTimeout();

	for( var i=nStart; i < nEnd; i++)
		this.LoadElement(i);

	for( var i=this.rgLoadedApps.length-1; i>=0; i-- )
	{
		var nIndex = this.GetPositionForAppId( this.rgLoadedApps[i] );
		if( nIndex < nStart || nIndex >= nEnd )
			this.UnloadElement(this.rgLoadedApps[i]);
	}
}

CWishlistController.prototype.GetPositionForAppId = function(appid)
{
	return this.rgVisibleApps.indexOf(appid);
}

CWishlistController.prototype.OnDragOver = function(e)
{
	if( this.nDragAppId == -1 )
		return;


	var nPageY = e.touches ? e.touches[0].pageY : e.pageY;

	var nPosition = Math.floor( ( nPageY / this.nRowHeight ) - ( this.nHeaderOffset / this.nRowHeight ) );

	if( nPosition < 0 )
		nPosition = 0;


	this.elDragTarget.style.top = ( nPageY - this.nHeaderOffset - this.nRowHeight / 2 ) + "px"



	if( this.nLastPosition != nPosition )
	{

		this.MoveToPosition ( this.nDragAppId, nPosition );
		this.Update ( true );

	}

	this.nLastPosition = nPosition;

	return false;

}

/**
 * Assumes/requires we're in "order" sort mode
 * @param unAppId
 * @param unPosition
 * @constructor
 */
CWishlistController.prototype.MoveToPosition = function( unAppId, unPosition )
{
	var oldIdx = this.rgAllApps.indexOf("" + unAppId);

	// When an AppId position changes, move the wishlist row div to its new position in the DOM.  This keeps the gamepad nav tree in sync.
	if ( oldIdx != unPosition )
	{
		// Each wishlist row has an id set to its corresponding AppId
		var $elInsertionPoint = $J('#wishlist_row_' + this.rgAllApps[ oldIdx ]);
		var $elMoved = $J('#wishlist_row_' + this.rgAllApps[ unPosition ]);

		if ( $elInsertionPoint && $elMoved )
		{
			if ( oldIdx > unPosition ) // $elMoved went up
				$elMoved.before( $elInsertionPoint );
			else
				$elMoved.after( $elInsertionPoint );
		}
	}

	this.rgAllApps.splice( oldIdx, 1 );
	this.rgAllApps.splice( unPosition, 0, "" + unAppId );

	for( var i=0; i<this.rgAllApps.length; i++)
	{
		g_rgAppInfo[ this.rgAllApps[i] ].priority = i+1;
		$J('.order_input', this.rgElements[ this.rgAllApps[i] ] ).val(i+1);
	}

}

/**
 * Called both when we drop, or manually change an index (ie when clicking "top").
 * @constructor
 */
CWishlistController.prototype.OnDrop = function(e)
{
	if( !this.elDragTarget )
		return;

	if( this.elDragTarget != null )
		this.elDragTarget.classList.remove('dragging');
	this.elDragTarget = null;
	this.nDragAppId = -1;


	$J( '#wishlist_ctn' ).removeClass ( 'sorting' );


	this.SaveOrder();
	this.Update ( true );

	if( e )
		e.preventDefault();
}

CWishlistController.prototype.SaveOrder = function(e)
{
	if( !g_bCanEdit )
		return;

	$J.ajax({
		type: "POST",
		url: g_strWishlistBaseURL + 'reorder/',
		data: {'appids':this.rgAllApps, sessionid: g_sessionID}
	});

	// technically dynamic store doesn't care about order, but this will force a refresh of the wishlist data load.
	GDynamicStore.InvalidateCache();
}

CWishlistController.prototype.LoadElement = function( nIndex )
{

	var unAppId = this.rgVisibleApps[ nIndex ];
	var $elTarget = this.rgElements[ unAppId ];

	$J('img[data-img-src]', $elTarget).each(function(i, j){
		if( !j.src )
			j.src = j.dataset.imgSrc;
	});

	$J('div[data-background-img-src]', $elTarget).each(function(i, j){
		if( !j.style.backgroundImage )
			j.style.backgroundImage = 'url(' + j.dataset.backgroundImgSrc + ')';
	});

	if ( !this.rgLoadedApps.includes ( unAppId ) )
	{
		// important to insert in-order so gamepad navigation stays in sync
		var pos = this.GetPositionForAppId( unAppId );
		var posStart = this.GetPositionForAppId( this.rgLoadedApps[0] );
		if ( pos < posStart )
		{
			this.rgLoadedApps.splice( 0, 0, unAppId );
			this.elContainer.prepend( $elTarget );
		}
		else
		{
			this.rgLoadedApps.push( unAppId );
			this.elContainer.append( $elTarget );
		}
	}

	if( !$elTarget.hasClass('dragging') )
		$elTarget.css('top', nIndex * this.nRowHeight );
}

CWishlistController.prototype.UnloadElement = function( unAppId )
{

	var $elTarget = this.rgElements[unAppId];

	// Ok this is kind of confusing verbally; we have an array of indexes, so we need the index of the index...
	var nLoadedIndex = this.rgLoadedApps.indexOf( unAppId );
	// remove it
	this.rgLoadedApps.splice(nLoadedIndex, 1);


	// Now remove the element from the dom
	 $elTarget.detach();
}

CWishlistController.prototype.SetFilterFromRadio = function( strFilter, elSource )
{
	this.rgFilterSettings[ strFilter ] = $J(elSource).data('dropdownValue');
	this.Update();
	this.SaveSettings();
}

CWishlistController.prototype.SetFilterFromDropdown = function( strFilter, elSource )
{
	this.rgFilterSettings[ strFilter ] = $J(elSource).data('dropdownValue');
	$J('#label_' + strFilter).text( elSource.textContent );
	this.Update();
	this.SaveSettings();
}

CWishlistController.prototype.SetViewMode = function( strMode, elSource )
{
	if( elSource && !elSource.checked )
		return;

	if( strMode == "compact")
		this.elContainer.addClass('compact');
	else
		this.elContainer.removeClass('compact');

	this.rgFilterSettings.view = strMode;

	this.SaveSettings();

	this.OnResize();

}

CWishlistController.prototype.SetSection = function( strSection )
{
	$J('.filter_tab').removeClass('selected');
	$J('.filter_section').removeClass('selected');
	$J('#tab_'+strSection).addClass('selected');
	$J('#section_'+strSection).addClass('selected');

}

CWishlistController.prototype.Update = function( bForceSort )
{
	var $root = $J('#wishlist_ctn');


	for( var i=0; i<this.rgTermMatchedElements.length; i++)
	{
		this.rgTermMatchedElements[i].removeClass('term_matched')
	}

	var _this = this;

	if( this.rgFilterSettings.last_sort != this.rgFilterSettings.sort || bForceSort)
	{
		if( this.rgFilterSettings.sort == 'order' )
			this.rgAllApps.sort( function(a, b ) {
				if( g_rgAppInfo[b].priority == g_rgAppInfo[a].priority )
					return 0;
				if( g_rgAppInfo[b].priority == 0 )
					return -1;
				if( g_rgAppInfo[a].priority == 0 )
					return 1;
				return g_rgAppInfo[a].priority - g_rgAppInfo[b].priority;
			});
		else if( this.rgFilterSettings.sort == 'salesrank' )
			this.rgAllApps.sort( function(a, b ) {
				return g_rgAppInfo[a].rank - g_rgAppInfo[b].rank;
			});
		else if( this.rgFilterSettings.sort == 'reviewscore' )
			this.rgAllApps.sort( function(a, b ) {
				if ( g_rgAppInfo[b].review_score != g_rgAppInfo[a].review_score )
					return g_rgAppInfo[b].review_score - g_rgAppInfo[a].review_score;

				return g_rgAppInfo[b].reviews_percent - g_rgAppInfo[a].reviews_percent;
			});
		else if( this.rgFilterSettings.sort == 'releasedate' )
			this.rgAllApps.sort( function(a, b ) {
				return g_rgAppInfo[b].release_date - g_rgAppInfo[a].release_date;
			});
		else if( this.rgFilterSettings.sort == 'dateadded' )
			this.rgAllApps.sort( function(a, b ) {
				return g_rgAppInfo[b].added - g_rgAppInfo[a].added;
			});
		else if( this.rgFilterSettings.sort == 'price' )
			this.rgAllApps.sort( function(a, b ) {
				return _this.GetCheapestPrice( g_rgAppInfo[a] ) - _this.GetCheapestPrice( g_rgAppInfo[b] );
			});
		else if( this.rgFilterSettings.sort == 'discount' )
			this.rgAllApps.sort( function(a, b ) {
				return _this.GetBestDiscount( g_rgAppInfo[b] ) - _this.GetBestDiscount( g_rgAppInfo[a] );
			});
		else if( this.rgFilterSettings.sort == 'name' )
			this.rgAllApps.sort( function(a, b ) {
				if( !g_rgAppInfo[a].name || !g_rgAppInfo[b].name )
					return 0;

				return g_rgAppInfo[a].name.localeCompare( g_rgAppInfo[b].name );
			});
		else
			console.log("Unknown sort order",this.rgFilterSettings.sort);

	}

	this.rgVisibleApps = [];

	// Ok, now build a list of sorted/filtered apps
	for( var i=0; i<this.rgAllApps.length; i++ )
	{
		if( !this.rgElements[ this.rgAllApps[i] ] )
		{
			continue;
		}
		if( this.BPassesFilters( this.rgAllApps[ i ], this.rgFilterSettings ) )
		{
			this.rgVisibleApps.push( this.rgAllApps[ i ] );
		}
	}

	if( this.rgVisibleApps.length == this.rgAllApps.length && this.rgFilterSettings.sort == "order" && g_bCanEdit )
	{
		$J( '#wishlist_ctn' ).addClass ( 'sort_order' );

		$J.each(this.rgElements, function(i, j){
			$J('.hover_handle',j).attr('draggable', true );
		});
	}
	else
	{
		$J( '#wishlist_ctn' ).removeClass ( 'sort_order' );
		$J.each(this.rgElements, function(i, j){
			$J('.hover_handle',j).attr('draggable', false );
		});
	}


	this.rgFilterSettings.last_sort = this.rgFilterSettings.sort;

	var el = this.elContainer[0].children[0];
	var nTargetRowHeight =  $J ( el ).outerHeight( true );
	if( nTargetRowHeight > 0 )
	{
		this.nRowHeight = nTargetRowHeight;
	}

	$root.css('height', ( this.nRowHeight * this.rgVisibleApps.length ) + 'px' );

	this.UpdateFilterDisplay();
	this.OnScroll();
	this.OnResize();

	if( this.rgVisibleApps.length == 0 )
	{
		$J('#nothing_to_see_here').show();
	} else {
		$J('#nothing_to_see_here').hide();
	}

}

CWishlistController.prototype.UpdateFilterDisplay = function()
{
	this.rgIgnoreTagFields = ['sort', 'last_sort','show', 'type', 'term', 'view', 'platform'];

	var _this = this;
	var $elContainer = $J('#filters_container');

	$elContainer.empty();
	$J.each(this.rgFilterSettings, function(key, value ) {
		if( _this.rgIgnoreTagFields.includes( key ) || !value )
			return;

		var strText = $J('input[name="'+V_EscapeHTML(key) +'"]').closest('label').text();

		var $el = $J('<div></div>').text( _this.rgFilterPrefixMap[key] + ": " + strText);
		$el.on('click', function(){
			$J('input[name='+key+']').attr('checked',false);
			delete _this.rgFilterSettings[key];
			_this.Update();
			_this.SaveSettings();
		})
		$elContainer.append($el);
	});

	if ( this.rgFilterSettings.type && this.rgFilterSettings.type != 'all' )
	{
		var strText = $J('#type_'+this.rgFilterSettings.type).closest('label').text();

		var $el = $J('<div></div>').text( "Type" + ": " + strText );

		$el.on('click', function(){
			_this.ApplyDefaultType();
			_this.rgFilterSettings.type = '';
			_this.Update();
		})
		$elContainer.append($el);
	}

	if ( this.rgFilterSettings.platform && this.rgFilterSettings.platform != 'all' )
	{
		var $el = $J('<div></div>').text( "Platform" + ": " + this.rgFilterSettings.platform);

		$el.on('click', function(){
			_this.ApplyDefaultPlatform();
			_this.rgFilterSettings.platform = '';
			_this.Update();
		})
		$elContainer.append($el);
	}

	if( this.rgFilterSettings.term )
	{
		var $el = $J('<div></div>').text( "Search" + ": " + this.rgFilterSettings.term);
		$el.on('click', function(){
			$J('#wishlist_search').val("");
			_this.rgFilterSettings.term = '';
			_this.Update();
		})
		$elContainer.append($el);
	}

	if ( this.m_bNotificationFilter )
	{
		var $el = $J('<div></div>').text( "Only show" + ": " + "Wishlist Notification Games" );

		$el.on('click', function(){
			// remove the notification filter param
			window.location.search = '';
		})
		$elContainer.append($el);
	}

	this.SetFilterString();
}

CWishlistController.prototype.GetCheapestPrice = function( appInfo )
{
	if( appInfo.free )
		return 0;

	var nCheapestPrice = null;

	for ( var i = 0; i < appInfo.subs.length; i++ )
	{
		if( appInfo.subs[i].price > 0 && ( nCheapestPrice == null || appInfo.subs[i].price < nCheapestPrice ) )
			nCheapestPrice = appInfo.subs[i].price;
	}


	return nCheapestPrice != null ? nCheapestPrice : Number.MAX_SAFE_INTEGER;
}

CWishlistController.prototype.GetBestDiscount = function( appInfo )
{
	if( appInfo.free )
		return 0;

	var nBestDiscount = 0;

	for ( var i = 0; i < appInfo.subs.length; i++ )
	{
		if( appInfo.subs[i].discount_pct > nBestDiscount )
			nBestDiscount = appInfo.subs[i].discount_pct;
	}


	return nBestDiscount;
}


CWishlistController.prototype.BPassesFilters = function( unAppId, rgFilters ) {
	var appInfo = g_rgAppInfo[ unAppId ];
	if ( !appInfo )
		return false; // :thinking:

	var rgelMatchedElements = [];
	var elParent = this.rgElements[ unAppId ];

	if ( rgFilters.term )
	{
		var rgTerms = rgFilters.term.split(' ');

		for( var j=0; j<rgTerms.length; j++ )
		{
			var bMatchesTerm = false;
			if( rgTerms[j].length == 0 || !appInfo.name )
				continue;

			if ( appInfo.name.toLowerCase().indexOf ( rgTerms[j].toLowerCase() ) !== -1 )
			{
				bMatchesTerm = true
				rgelMatchedElements.push( $J('.title', elParent) );
			}

			for ( var i = 0; i < appInfo.tags.length; i++ )
				if ( appInfo.tags[ i ].toLowerCase ().indexOf ( rgTerms[j].toLowerCase() ) !== -1 )
				{
					bMatchesTerm = true;
					rgelMatchedElements.push( $J('.tag[data-tag-index=\''+i+'\']', elParent) );
				}

			if( !bMatchesTerm )
				return false;

			for( var i=0; i<rgelMatchedElements.length; i++)
			{
				rgelMatchedElements[i].addClass('term_matched');
				this.rgTermMatchedElements.push( rgelMatchedElements[i] )
			}

		}
	}

	if ( rgFilters.ex_earlyaccess && appInfo.early_access )
		return false;

	if ( rgFilters.ex_prerelease && appInfo.prerelease )
		return false;

	if ( rgFilters.ex_vr && appInfo.vr_only )
		return false;

	var bDeckVerified = appInfo.deck_compat == 3;
	var bDeckPlayable = appInfo.deck_compat == 2;
	if( rgFilters.deck_verified && rgFilters.deck_playable && !bDeckVerified && !bDeckPlayable )
	{
		return false;
	}
	else if ( rgFilters.deck_verified && !rgFilters.deck_playable && !bDeckVerified )
	{
		return false;
	}
	else if ( !rgFilters.deck_verified && rgFilters.deck_playable && !bDeckPlayable )
	{
		return false;
	}

	var bPassesPriceFilters = !rgFilters.price_1 && !rgFilters.price_2 && !rgFilters.price_wallet;

	for ( var i = 0; i < appInfo.subs.length; i++ )
	{
		if ( rgFilters.price_1 && appInfo.subs[i].price <= g_rgPriceBrackets[ 0 ] )
			bPassesPriceFilters = true;

		if ( rgFilters.price_2 && appInfo.subs[i].price <= g_rgPriceBrackets[ 1 ] )
			bPassesPriceFilters = true;

		if ( rgFilters.price_wallet && appInfo.subs[i].price <= g_nWalletCents )
			bPassesPriceFilters = true;
	}

	if( !bPassesPriceFilters )
		return false;

	var bPassesDiscountFilters = !rgFilters.discount_any && !rgFilters.discount_50 && !rgFilters.discount_75;

	for ( var i = 0; i < appInfo.subs.length; i++ )
	{

		if ( rgFilters.discount_any && appInfo.subs[i].discount_pct > 0 )
			bPassesDiscountFilters = true;

		if ( rgFilters.discount_50 && appInfo.subs[i].discount_pct >= 50 )
			bPassesDiscountFilters = true;

		if ( rgFilters.discount_75 && appInfo.subs[i].discount_pct >= 75 )
			bPassesDiscountFilters = true;
	}

	if( !bPassesDiscountFilters )
		return false;

	if( rgFilters.type && rgFilters.type != 'all' )
	{
		if( rgFilters.type == 'Video' && appInfo.type != "Video" && appInfo.type != "Movie" && appInfo.type != "Series" && appInfo.type != "Episode")
			return false;
		else if ( appInfo.type != rgFilters.type )
			return false;
	}

	// Platform checks: Assume unsupported if any filters are set
	if ( rgFilters.platform && rgFilters.platform != 'all' )
	{
		if( rgFilters.platform == 'mac' && !appInfo.mac )
			return false;
		else if( rgFilters.platform == 'linux' && !appInfo.linux )
			return false;
	}


	return true;
}

// Save current scroll position, which we'll restore if the user navigates back to the wishlist page
CWishlistController.prototype.OnUserScroll = function()
{
	window.history.replaceState( $J.extend( {}, window.history.state, { wishlistScroll: parseInt( window.scrollY ) } ), "" );
}
CWishlistController.prototype.ScrollToRequestedPosition = function()
{
	var _this = this;

	if ( window.history.state && window.history.state.wishlistScroll != null )
	{
		window.scrollTo( 0, window.history.state.wishlistScroll );
	}
	else if ( _this.scrollToAppID !== -1 )
	{
		// A delay is needed so on mobile devices the in-app webview scrolls to the correct position.  It also looks nice to show the top of the page briefly before we auto-scroll within.
		window.setTimeout( function(){ document.getElementById( 'wishlist_row_' + _this.scrollToAppID )?.scrollIntoView( { behavior: "smooth", block: 'start' } ); }, 500 );
	}
}

