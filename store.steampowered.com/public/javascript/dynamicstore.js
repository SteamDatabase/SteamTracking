
function GetElemSNR( $Elem )
{
	var snr = $Elem.data( 'snr' );
	if ( typeof snr != 'undefined' )
	{
		return snr;
	}

	// look for links with snr parameter
	var links = $Elem.is( 'a' ) ? $Elem : $Elem.find( 'a' );
	snr = null;
	for ( var i = 0; i < links.length; ++i )
	{
		var link = links[i];
		var navinfo = link.href.match( /[\?&]snr=([a-zA-Z0-9\-\_ ]+)/ );
		if ( navinfo )
		{
			snr = navinfo[1];
			break;
		}
	}

	$Elem.data( 'snr', snr );
	return snr;
}

// given an array of impressions as strings, this will handle joining them all together into a singular string, but enforcing that it doesn't
// go above the cookie size limit which can otherwise cause users to become stuck since the page requests will start failing
function JoinImpressionsUpToLimit( rgImpressions )
{
	//cookies generally can go up to 4k bytes, but we can have problems when we start getting that close, so cut it off earlier
	var nRemainingLen = 3200;
	var result = '';
	for ( var i = 0; i < rgImpressions.length; i++ )
	{
		var impression = String( rgImpressions[ i ] );
		var nImpressionLen = encodeURIComponent( impression + '|' ).length;

		//did we run out of room in our list?
		if ( nRemainingLen < nImpressionLen )
			break;

		//add the separator if not the first entry
		if ( result !== '' )
			result += '|';

		//add our impression and remove that space from what is available
		result += impression;
		nRemainingLen -= nImpressionLen;
	}

	return result;
}

GDynamicStore = {

	m_bLoadComplete: false,
	s_rgWishlist: {},
	s_rgOwnedPackages: {},
	s_rgOwnedApps: {},
	s_rgMasterSubApps: {},
	s_rgAutoGrantApps: {},
	s_rgPackagesInCart: {},
	s_rgAppsInCart: {},
	s_rgRecommendedTags: [],

	s_rgIgnoredApps: {},
	s_rgIgnoredPackages: {},

	s_rgCurators: {},
	s_rgCurations: {},
	s_rgCreatorsFollowed: {},
	s_rgCreatorsIgnored: {},

	s_preferences: {},
	s_rgExcludedTags: {},
	s_rgExcludedDescIDs: {},

	s_rgPersonalizedBundleData: {},

	s_rgfnOnReadyCallbacks: [],

	s_rgDisplayedApps: [],
	s_rgDisplayedBundles: [],
	s_rgDisplayedPackages: [],

	s_bUserOnMacOS: false,
	s_bUserOnLinux: false,
	s_bUserOnWindows: false,

	s_rgRecommendedApps: [],


	s_ImpressionTracker: false,
	s_bAllowAppImpressions: false,

	Init: function( accountid, bForceRefresh, strOS, preferences, strCC, optsIn )
	{
		var opts = $J.extend( { bNoDefaultDescriptors: false }, optsIn || {} );
		var rgDesiredOSTypes = strOS ? strOS.split(',') : 'any';

		for( var i=0; i < rgDesiredOSTypes.length; i++ )
		{
			switch( rgDesiredOSTypes[i] )
			{
				case 'mac': GDynamicStore.s_bUserOnMacOS = true; break;
				case 'linux': GDynamicStore.s_bUserOnLinux = true; break;
				default:
				case 'win': GDynamicStore.s_bUserOnWindows = true; break;
			}
		}

		GDynamicStore.s_preferences = preferences || {};

		var fnRunOnLoadCallbacks = function() {
			GDynamicStore.m_bLoadComplete = true;
			GDynamicStore.InitAppearHandler();

			for ( var i = 0; i < GDynamicStore.s_rgfnOnReadyCallbacks.length; i++ )
			{
				try {
					GDynamicStore.s_rgfnOnReadyCallbacks[i]();
				}
				catch ( e )
				{
					console.error( e );
				}
			}
			GDynamicStore.s_rgfnOnReadyCallbacks = null;

			GDynamicStore.DecorateDynamicItems();
			GDynamicStore.PopulateRecommendedTagList();
		};

		try {
			this.RemoveSNRFromURL();
			this.RemoveUTMFromURL();
		} catch ( e )
		{
		}

		// Create a new monitor to track impressions
		this.s_ImpressionTracker = new CAppearMonitor(
			function( elElement ){

				var fnTrack = function( el )
				{

					var $Elem = $J(el);

					if ( $Elem.data( 'trackedForImpressions' ) )
					{
						return;
					}
					$Elem.data( 'trackedForImpressions', true );

					// must have appids
					var strAppIDs = $Elem.data('dsAppid');
					if ( !strAppIDs || strAppIDs.length == 0 )
					{
						return;
					}

					var snr = GetElemSNR( $Elem );
					if ( !snr )
					{
						return;
					}

					GDynamicStore.AddImpressionFromDynamicItem( $Elem );
				};

				fnTrack( elElement );

				// Also track sub-elements, which may exist inside our container. This is useful for nested clusters etc.
				$J(elElement).find("*[data-ds-appid]").each(function(i, j){
					fnTrack(j);

				});


			}
		);

		if ( accountid )
		{
			if ( bForceRefresh )
				GDynamicStore.InvalidateCache();

			var url = 'https://store.steampowered.com/dynamicstore/userdata/?id=' + accountid + '&cc=' + strCC;

			var unUserdataVersion = WebStorage.GetLocal( 'unUserdataVersion' );
			if ( unUserdataVersion )
				url += '&v=' + parseInt( unUserdataVersion );

			$J.get( url ).done( function( data ) {
				var fnEnsureObject = function ( rgMaybeArray ) {
					return ( !rgMaybeArray || ( typeof rgMaybeArray.length != 'undefined' && rgMaybeArray.length == 0 ) ) ? {} : rgMaybeArray;
				};
				var fnConvertToMap = function ( rgData ) {
					var out = {};
					if ( rgData && rgData.length )
					{
						for ( var i = 0; i < rgData.length; i++ )
							out[ rgData[i] ] = true;
					}
					return out;
				};
				GDynamicStore.s_rgWishlist = fnConvertToMap( data.rgWishlist );
				GDynamicStore.s_rgOwnedPackages = fnConvertToMap( data.rgOwnedPackages );
				GDynamicStore.s_rgOwnedApps = fnConvertToMap( data.rgOwnedApps );
				GDynamicStore.s_rgMasterSubApps = fnConvertToMap( data.rgMasterSubApps );
				GDynamicStore.s_rgAutoGrantApps = fnConvertToMap( data.rgAutoGrantApps );
				GDynamicStore.s_rgPackagesInCart = fnConvertToMap( data.rgPackagesInCart );
				GDynamicStore.s_rgAppsInCart = fnConvertToMap( data.rgAppsInCart );
				GDynamicStore.s_rgRecommendedTags = data.rgRecommendedTags || [];
				GDynamicStore.s_rgIgnoredApps = data.rgIgnoredApps || {}
				GDynamicStore.s_rgIgnoredPackages = data.rgIgnoredPackages || {};
				GDynamicStore.s_rgCurators = data.rgCurators || {};
				GDynamicStore.s_rgCurations = data.rgCurations || {};
				GDynamicStore.s_rgCreatorsFollowed = fnConvertToMap( data.rgCreatorsFollowed );
				GDynamicStore.s_rgCreatorsIgnored = fnConvertToMap( data.rgCreatorsIgnored );
				GDynamicStore.s_bAllowAppImpressions = data.bAllowAppImpressions || false;

				if ( data.rgExcludedTags && data.rgExcludedTags.length > 0 )
				{
					for ( var i = i = 0; i < data.rgExcludedTags.length; ++i )
					{
						var tag = data.rgExcludedTags[i];
						GDynamicStore.s_rgExcludedTags[tag.tagid] = tag.name;
					}
				}
				if ( data.rgExcludedContentDescriptorIDs && data.rgExcludedContentDescriptorIDs.length > 0 &&
						!V_GetCookie( 'wants_mature_content') )
				{
					for ( var i = i = 0; i < data.rgExcludedContentDescriptorIDs.length; ++i )
					{
						var id = data.rgExcludedContentDescriptorIDs[i];
						GDynamicStore.s_rgExcludedDescIDs[id] = id;
					}
				}

				GDynamicStore.s_nRemainingCartDiscount = data.nRemainingCartDiscount ? data.nRemainingCartDiscount : 0;
				GDynamicStore.s_nTotalCartDiscount = data.nTotalCartDiscount ? data.nTotalCartDiscount : 0;
				GDynamicStore.s_rgRecommendedApps = data.rgRecommendedApps || [];

				GDynamicStore.s_nPromotionalDiscount = data.nPromotionalDiscount ? data.nPromotionalDiscount : 0;
				GDynamicStore.s_nPromotionalDiscountMinCartAmount = data.nPromotionalDiscountMinCartAmount ? data.nPromotionalDiscountMinCartAmount : 0;
				GDynamicStore.s_nPromotionalDiscountAvailableUseCount = data.nPromotionalDiscountAvailableUseCount ? data.nPromotionalDiscountAvailableUseCount : 0;

			}).always( function() { $J(fnRunOnLoadCallbacks); } );
		}
		else
		{
			if ( !opts.bNoDefaultDescriptors )
				GDynamicStore.s_rgExcludedDescIDs[3] = 3;

			var url = 'https://store.steampowered.com/dynamicstore/saledata/?cc=' + strCC;

			$J.get( url ).done( function( data ) {
				GDynamicStore.s_nPromotionalDiscount = data.nPromotionalDiscount ? data.nPromotionalDiscount : 0;
				GDynamicStore.s_nPromotionalDiscountMinCartAmount = data.nPromotionalDiscountMinCartAmount ? data.nPromotionalDiscountMinCartAmount : 0;
				GDynamicStore.s_nPromotionalDiscountAvailableUseCount = data.nPromotionalDiscountAvailableUseCount ? data.nPromotionalDiscountAvailableUseCount : 0;
				GDynamicStore.s_bAllowAppImpressions = data.bAllowAppImpressions || false;

			}).always( function() { $J(fnRunOnLoadCallbacks); } );
		}
	},

	RemoveSNRFromURL: function()
	{
		if ( !window.history || !window.history.replaceState || !window.location.search )
			return;

		GDynamicStore.RemoveParamFromURL( 'snr' );
		GDynamicStore.RemoveParamFromURL( 'ser' );
	},

	RemoveParamFromURL: function( strParamName )
	{
		// find snr param
		var strParamPrefix = '' + strParamName + '=';
		var strSearch = window.location.search;
		if ( strSearch.indexOf( '?' ) == 0 )
			strSearch = strSearch.slice( 1 );

		var rgParams = strSearch.split( '&' );
		var iParam = -1;
		for ( var i = 0; i < rgParams.length; i++ )
		{
			var strParam = rgParams[i];
			if (strParam.indexOf( strParamPrefix ) == 0)
			{
				iParam = i;
				break;
			}
		}

		if ( iParam < 0 )
			return;

		var strRemove = '';
		if ( rgParams.length == 1 || (rgParams.length == 2 && rgParams[1].length == 0) )
		{
			// remove the entire search.. just SNR
			strRemove = '?' + strSearch;
		}
		else if ( iParam == 0 )
		{
			// first param of multiple. Remove snr and trailing &
			strRemove = rgParams[iParam] + '&';
		}
		else
		{
			// 2nd+ param of multiple. Remove snr and preceeding &
			strRemove = '&' + rgParams[iParam];
		}

		if ( strRemove.length > 0 )
		{
			var strNewURL = window.location.href.replace( strRemove, '' );
			window.history.replaceState( history.state, null, strNewURL );
		}
	},

	RemoveUTMFromURL: function()
	{
		if ( !window.history || !window.history.replaceState || !window.location.search )
			return;

		var strSearch = window.location.search;
		if ( strSearch.indexOf( '?' ) == 0 )
			strSearch = strSearch.slice( 1 );

		var rgParams = strSearch.split( '&' );
		var rgNewParams = [];

		for ( var i = 0; i < rgParams.length; ++i )
		{
			var strParam = rgParams[i];
			if ( strParam.indexOf( 'utm_') == -1 )
			{
				rgNewParams.push( strParam );
			}
		}

		if ( rgParams.length != rgNewParams.length )
		{
			var strNewURL = window.location.href.replace( window.location.search, '' );
			for ( var i = 0; i < rgNewParams.length; ++i )
			{
				var strParam = rgNewParams[i];
				strNewURL += ( i == 0 ? '?' : '&' ) + strParam;
			}
			window.history.replaceState( history.state, null, strNewURL );
		}
	},

	// Fixup name portion of URL via history API, if support and if name portion is incorrect
	FixupNamePortion: function() {
		var rel = $J( "link[rel='canonical']" );
		if ( rel.length && window.history ) {
			// have rel=canonical URL and access to history API.
			// parse out href portion of navigated URL and see if it's OK
			var detachedAnchor = document.createElement( 'a' );
			detachedAnchor.href = rel.attr( "href" );
			if ( window.location.pathname != detachedAnchor.pathname ) {
				// URL portion does not match canonical URL; rewrite it, preserving query params and hash
				window.history.replaceState( null, null, rel[0].href + window.location.search + window.location.hash );
			}
		}
	},

	s_strAppearSelector: '[data-ds-appid], [data-ds-packageid]',

	InitAppearHandler: function()
	{
		$J(GDynamicStore.s_strAppearSelector).each(function(i, elTarget ){

			var $Elem = $J(elTarget);
			// these are handled manually, so don't add the impression here
			if ( $Elem.hasClass( 'cluster_capsule' ) || $Elem.hasClass( 'carousel_cap') )
			{
				return;
			}

			GDynamicStore.s_ImpressionTracker.RegisterElement( elTarget )
		});

		// find our horizontal scrollers and add tracking to them

		$J('.store_horizontal_autoslider' ).each(function(i, elTarget ){
			GDynamicStore.s_ImpressionTracker.RegisterScrollEvent( elTarget );
		});

		GDynamicStore.s_ImpressionTracker.CheckVisibility();

	},

	s_oImpressionsTracked: {},
	AddImpressionFromDynamicItem: function( $Elem )
	{
		if ( !GDynamicStore.s_bAllowAppImpressions )
		{
						return;
		}

		
		if ( $Elem.hasClass( 'app_impression_tracked' ) )
		{
			return;
		}
		$Elem.addClass( 'app_impression_tracked' );

		var strImpressions = V_GetDecodedCookie( "app_impressions" );
		var rgImpressions = strImpressions && strImpressions.length != 0 ? strImpressions.split( "|" ) : [];

		// commas not allowed in cookie value
		var strAppIDs = $Elem.data('dsAppid');
		if ( !strAppIDs )
		{
			return;
		}

		var rgAppIds;
		if ( typeof strAppIDs == 'string' && ( strAppIDs.indexOf( ',' ) >= 0 || strAppIDs.indexOf( ':' ) >= 0 ))
		{
			rgAppIds = strAppIDs.split( /[,:]/ );
		}
		else
		{
			rgAppIds = [ parseInt( strAppIDs ) ];
		}

		var snr = GetElemSNR( $Elem );
		if ( !snr )
		{
			return;
		}

		var rgAppIDsToReport = [];
		for ( var i = 0; i < rgAppIds.length; i++ )
		{
			var nAppID = rgAppIds[i];
			var strImpressionData = nAppID + '@' + snr;

			if ( !GDynamicStore.s_oImpressionsTracked[ strImpressionData ] )
			{
				GDynamicStore.s_oImpressionsTracked[ strImpressionData ] = true;

				

				rgAppIDsToReport.push( nAppID );
			}
		}

		if ( !rgAppIDsToReport.length )
			return;

		rgImpressions.push( rgAppIDsToReport.join( ':' ) + '@' + snr );
		V_SetCookie( "app_impressions", JoinImpressionsUpToLimit( rgImpressions ) );
	},

	AddImpression: function( $Elem, appID, strLink )
	{
		if ( $Elem.hasClass( 'app_impression_tracked' ) )
		{
			return;
		}
		$Elem.addClass( 'app_impression_tracked' );

		var navinfo = strLink.match( /[\?&]snr=([^&#]*)(&|$|#)/ );
		if ( navinfo )
		{
			var snr = navinfo[1];

			var strImpressions = V_GetCookie( "app_impressions" );
			var rgImpressions = strImpressions && strImpressions.length != 0 ? strImpressions.split( "|" ) : [];
			var strImpressionData = appID + '@' + snr;
			rgImpressions.push( strImpressionData );
			V_SetCookie( "app_impressions", JoinImpressionsUpToLimit( rgImpressions ) );
		}
	},

	MarkAppDisplayed: function( rgDisplayList, cItemsToMark )
	{
		// jquery map takes care of arrays as well as array-ish
		GDynamicStore.MarkAppIDsAsDisplayed( $J.map( rgDisplayList, function ( item ) { return item.appid; } ), cItemsToMark );
	},

	MarkItemsAsDisplayed: function( rgItems, cItemsToMark )
	{
		for ( var i = 0; i < rgItems.length; i++ )
		{
			const item = rgItems[i];
			if ( item.appid )
			{
				GDynamicStore.s_rgDisplayedApps.push( item.appid );

				// if this appid is a demo, also mark the parent app as displayed
				var rgAppData = GStoreItemData.rgAppData[ item.appid ];
				if ( rgAppData && rgAppData.demo_for_app )
					GDynamicStore.s_rgDisplayedApps.push( rgAppData.demo_for_app );
			}
			else if ( item.bundleid )
			{
				GDynamicStore.s_rgDisplayedBundles.push( item.bundleid );
			}
			else if ( item.packageid )
			{
				GDynamicStore.s_rgDisplayedPackages.push( item.packageid );
			}

			if ( cItemsToMark !== undefined && --cItemsToMark == 0 )
				break;
		}
	},

	MarkAppIDsAsDisplayed: function( rgAppIDs, cItemsToMark )
	{
		for ( var i = 0; i < rgAppIDs.length; i++ )
		{
			if ( rgAppIDs[i] )
			{
				GDynamicStore.s_rgDisplayedApps.push( rgAppIDs[i] );

				// if this appid is a demo, also mark the parent app as displayed
				var rgAppData = GStoreItemData.rgAppData[ rgAppIDs[i] ];
				if ( rgAppData && rgAppData.demo_for_app )
					GDynamicStore.s_rgDisplayedApps.push( rgAppData.demo_for_app );

				if ( cItemsToMark !== undefined && --cItemsToMark == 0 )
					break;
			}
		}
	},

	HandleClusterChange: function( cluster ) {
		GDynamicStore.s_ImpressionTracker.CheckVisibility();
		var $ScrollingContainer = $J( cluster.elScrollArea );
		var capsules = $ScrollingContainer.find( '.cluster_capsule' );
		GDynamicStore.s_ImpressionTracker.TrackAppearanceIfVisible( capsules[cluster.nCurCap] );
	},

	HandleCarouselChange: function( targetid, curPos, pageSize ) {
		var $ScrollingContainer = $J( "#" + targetid );
		var capsules = $ScrollingContainer.find( '.recommendation_carousel_item' );
		var idx = (curPos * pageSize);
		if ( capsules.length != 0 && idx < capsules.length )
		{
			GDynamicStore.s_ImpressionTracker.TrackAppearanceIfVisible( capsules[idx] );
		}
	},

	OnReady: function( fnCallback )
	{
		if ( GDynamicStore.m_bLoadComplete )
			fnCallback();
		else
			GDynamicStore.s_rgfnOnReadyCallbacks.push( fnCallback );
	},

	DecorateDynamicItems: function( $Selector, bForceRecalculate ) {

		if ( !GDynamicStore.m_bLoadComplete )
		{
			GDynamicStore.OnReady( function() { GDynamicStore.DecorateDynamicItems( $Selector ) } );
			return;
		}

		// locate elements with dynamic store data
		var strSelector = '[data-ds-appid], [data-ds-packageid], [data-ds-bundleid]';

		// update prices for cart
		if ( GDynamicStore.s_nRemainingCartDiscount != 'undefined ')
		{
			UpdatePricesForAdditionalCartDiscount($Selector, GDynamicStore.s_nRemainingCartDiscount);
		}

		var bBannerShown = false;
		if ( GDynamicStore.s_nTotalCartDiscount != 'undefined ')
		{
			bBannerShown = UpdateStoreBannerForAdditionalCartDiscount( GDynamicStore.s_nTotalCartDiscount );
		}

		if ( !bBannerShown && GDynamicStore.s_nPromotionalDiscount != 'undefined' )
		{
			bBannerShown = UpdateStoreBannerForPromotionalDiscount( GDynamicStore.s_nPromotionalDiscount, GDynamicStore.s_nPromotionalDiscountMinCartAmount, GDynamicStore.s_nPromotionalDiscountAvailableUseCount );
		}

		var $DynamicElements;
		if ( $Selector )
		{
			if ( $Selector.is( strSelector ) )
			{
				$DynamicElements = $Selector;
			}
			else
			{
				$DynamicElements = $Selector.find( strSelector );
			}
		}
		else
		{
			$DynamicElements = $J(strSelector);
		}

		$DynamicElements.each( function() {
			var $El = $J(this);

			if ( bForceRecalculate )
			{
				$El.removeClass( 'ds_flagged ds_owned ds_wishlist ds_incart' ).children( '.ds_flag' ).remove();
			}
			else if ( $El.data('dsInstrumented') )
			{
				return;
			}

			$El.data('dsInstrumented', true);

			var bOwned = false;
			var bWanted = false;
			var bInCart = false;
			var bIgnored = false;

			var unBundleID = $El.data('dsBundleid');
			var unPackageID = $El.data('dsPackageid');
			var strAppIDs = $El.data('dsAppid');
			var eSteamDeckCompatCategory = $El.data('dsSteamDeckCompatCategory');

			if ( eSteamDeckCompatCategory !== undefined && !$El.data( 'dsSteamDeckCompatHandled' ) )
			{
				$El.data('dsSteamDeckCompatHandled', true);

				var strClasses = 'ds_steam_deck_compat ';
				switch( eSteamDeckCompatCategory )
				{
					case 3:
						strClasses += 'verified';
						break;
					case 2:
						strClasses += 'playable';
						break;
					case 1:
						strClasses += 'unsupported';
						break;
					case 0:
					default:
						strClasses += 'unknown';
						break;
				}
				var elSteamDeckCompatCategory = $J( '<div/>', { class: strClasses } );
				$El.append( elSteamDeckCompatCategory );
			}

			if ( unBundleID )
			{
				var Bundle = GDynamicStore.GetPersonalizedBundleData( unBundleID, $El.data('dsBundleData') );
				if ( !Bundle )	// no data available
					return;

				if ( Bundle.m_cUserItemsInBundle == 0 )
				{
					bOwned = true;
				}
				else
				{
					// pull out all the appids and let the strAppIDs code below handle it
					var rgAllAppIDsInBundle = [];
					for( var iBundleItem = 0; iBundleItem < Bundle.m_rgBundleItems.length; iBundleItem++ )
					{
						var BundleItem = Bundle.m_rgBundleItems[iBundleItem];
						for ( var iApp = 0; iApp < BundleItem.m_rgIncludedAppIDs.length; iApp++ )
						{
							rgAllAppIDsInBundle.push( BundleItem.m_rgIncludedAppIDs[iApp] );
						}
					}
					strAppIDs = rgAllAppIDsInBundle.join(',');
				}

				GDynamicStore.UpdateDynamicBundleElements( Bundle, $El );
			}
			else if ( unPackageID )
			{
				if ( GDynamicStore.s_rgPackagesInCart[unPackageID] )
					bInCart = true;
				else if ( GDynamicStore.s_rgOwnedPackages[unPackageID] )
					bOwned = true;
				else if ( unPackageID in GDynamicStore.s_rgIgnoredPackages )
					bIgnored = true;
			}

			if ( strAppIDs && typeof strAppIDs == 'string' && strAppIDs.indexOf( ',' ) >= 0 )
			{
				var rgAppIDs = strAppIDs.split( ',' );
				var bValid = false;
				var bAllOwned = true, bAllWanted = true, bAllInCart = true;
				for ( var i = 0; i < rgAppIDs.length; i++ )
				{
					var unAppID = parseInt( rgAppIDs[i] );
					if ( !unAppID )
						continue;

					bValid = true;
					if ( !GDynamicStore.s_rgOwnedApps[unAppID] )
						bAllOwned = false;
					if ( !GDynamicStore.s_rgWishlist[unAppID] )
						bAllWanted = false;
					if ( !GDynamicStore.s_rgAppsInCart[unAppID] )
						bAllInCart = false;
				}

				if ( bValid )
				{
					if ( bAllInCart )
						bInCart = bAllInCart;
					else if ( bAllOwned )
						bOwned = bAllOwned;
					else if ( bAllWanted )
						bWanted = bAllWanted;

					GDynamicStore.s_ImpressionTracker.RegisterElement( this );
				}
			}
			else if ( parseInt( strAppIDs ) )
			{
				// simple case of single appid
				var unAppID = parseInt( strAppIDs );
				if ( GDynamicStore.s_rgAppsInCart[unAppID] )
					bInCart = true;
				else if ( GDynamicStore.s_rgOwnedApps[unAppID] )
					bOwned = true;
				else if ( GDynamicStore.s_rgWishlist[unAppID] )
					bWanted = true;
				else if ( unAppID in GDynamicStore.s_rgIgnoredApps )
					bIgnored = true;

				GDynamicStore.s_ImpressionTracker.RegisterElement( this );
			}

			var rgExcludedTagNames = GDynamicStore.GetExcludedTagsOverlap( $El );
			var rgExcludedContentDescriptorIDs = GDynamicStore.GetExcludedContentDescriptorOverlap( $El );
			var rgExcludedCreatorIDs = GDynamicStore.GetExcludedCreatorOverlap( $El );

			if ( !$El.hasClass('ds_no_flags') )
			{
				// owned and wishlist are mutually exclusive
				if ( bOwned )
				{
					$El.addClass( 'ds_flagged ds_owned' );
					$El.append( '<div class="ds_flag ds_owned_flag">IN LIBRARY&nbsp;&nbsp;</div>');
				}
				else if ( bWanted )
				{
					$El.addClass( 'ds_flagged ds_wishlist' );
					$El.append( '<div class="ds_flag ds_wishlist_flag">ON WISHLIST&nbsp;&nbsp;</div>');
				}
				else if ( bIgnored )
				{
					$El.addClass( 'ds_flagged ds_ignored' );
					$El.append( '<div class="ds_flag ds_ignored_flag">IGNORED&nbsp;&nbsp;</div>');
				}

				if ( bInCart )
				{
					$El.addClass( 'ds_flagged ds_incart' );
					$El.append( '<div class="ds_flag ds_incart_flag">IN CART&nbsp;&nbsp;</div>');
				}

				if ( $El.hasClass( 'ds_excluded_blur' ) )
				{
					$El.addClass( 'ds_flagged' );
                	$El.append( '<div class="ds_flag ds_excluded_by_preferences_flag">EXCLUDED BY PREFERENCES&nbsp;&nbsp;</div>' );
				}
				else if ( rgExcludedContentDescriptorIDs.length != 0 )
				{
					$El.addClass( 'ds_flagged ds_excluded_by_preferences' );
					$El.append( '<div class="ds_flag ds_excluded_by_preferences_flag">EXCLUDED BY PREFERENCES&nbsp;&nbsp;</div>' );
				}
				else if ( rgExcludedTagNames.length != 0 )
				{
					$El.addClass( 'ds_flagged ds_excluded_by_preferences' );
					$El.append( '<div class="ds_flag ds_excluded_by_preferences_flag">HAS EXCLUDED TAGS:&nbsp;' + rgExcludedTagNames.join(", " ) + '</div>' );
				}
				else if ( rgExcludedCreatorIDs.length != 0 )
				{
					$El.addClass( 'ds_flagged ds_excluded_by_preferences' );
					$El.append( '<div class="ds_flag ds_excluded_by_preferences_flag">EXCLUDED BY IGNORED DEVELOPER / PUBLISHER / FRANCHISE&nbsp;&nbsp;</div>' );
				}

				if( g_AccountID && unAppID && $El.data('ds-options') !== 0 ) // Only add if we have an appid
				{
					var $elMenu = $J ( '<div></div>', { 'class': 'ds_options' } ).append($J('<div>'));
					$El.append ( $elMenu );

					$El.one( 'mouseenter', function() {
						$elMenu.v_tooltip ( {
							'tooltipClass': 'ds_options_tooltip',
							'location': 'bottom left',
							'offsetY': -20,
							'useClickEvent': true,
							'useMouseEnterEvent': false,
							func: GDynamicStore.CapsuleSettingsMenu
						} );
					} );
				}

			}
		});


		// make sure that the elements are registered as "appearing" if necessary
		GDynamicStore.s_ImpressionTracker.CheckVisibility();
	},

	CapsuleSettingsMenu: function( elSource )
	{
		var $El = $J(this);
		var $elSource = $J(elSource.parentNode);
		$El.empty();

		var strAppIDs = $elSource.data('dsAppid');

		// AppID specific controls
		if( strAppIDs )
		{

			var rgAppIds = [];

			if (strAppIDs && typeof strAppIDs == 'string' && strAppIDs.indexOf(',') >= 0) {
				rgAppIds = strAppIDs.split(',');
			}
			else if (parseInt(strAppIDs)) {
				rgAppIds = [parseInt(strAppIDs)];
			}

			var bIgnored = false;
			var bOnWishlist = false;
			var bFilteredByContentPreferences = false;

			for( var i = 0; i < rgAppIds.length; i++ )
			{
				bIgnored |= GDynamicStore.BIsAppIgnored( rgAppIds[i] );
				bOnWishlist |= GDynamicStore.BIsAppOnWishlist( rgAppIds[i] );
			}


			if (!bOnWishlist)
			{
				var fnClick = function ( event )
				{
					event.preventDefault();

					$elSource.addClass( 'ds_flagged ds_wishlist' );
					$elSource.append( '<div class="ds_flag ds_wishlist_flag">ON WISHLIST&nbsp;&nbsp;</div>');

					for( var i=0; i<rgAppIds.length; i++ )
						GDynamicStore.ModifyWishlist ( $elSource, rgAppIds[ i ], false, false, function(){
							// Remove the flag if we failed.
							$elSource.removeClass( 'ds_wishlist ds_flagged' );
							$J('.ds_flag.ds_wishlist_flag', $elSource).remove();
						} );

					$El.trigger('mouseleave');

					return false;
				};
				var strText = "Add to your wishlist";

			}
			else
			{
				var fnClick = function ( event )
				{
					event.preventDefault();

					$elSource.removeClass( 'ds_wishlist ds_flagged' );
					$J('.ds_flag.ds_wishlist_flag', $elSource).remove();

					for( var i=0; i<rgAppIds.length; i++ )
						GDynamicStore.ModifyWishlist ( $elSource, rgAppIds[ i ], true, false, function(){
							// Add the flag back if we failed for some reason
							$elSource.addClass( 'ds_flagged ds_wishlist' );
							$elSource.append( '<div class="ds_flag ds_wishlist_flag">ON WISHLIST&nbsp;&nbsp;</div>');

						} );

					$El.trigger('mouseleave');

					return false;
				};
				var strText = "On Wishlist";


			}

			var $elAddToWishlist = $J ( '<div/>' ).click ( fnClick ).text ( strText ).addClass( 'option' );
			$El.append($elAddToWishlist);

			if (!bIgnored)
			{
				var fnClick = function ()
				{
					$elSource.addClass('ds_ignored ds_flagged');
					$elSource.append( '<div class="ds_flag ds_ignored_flag">IGNORED&nbsp;&nbsp;</div>');
					for( var i=0; i<rgAppIds.length; i++ )
						GDynamicStore.ModifyIgnoredApp ( $elSource, rgAppIds[ i ], false );

					$El.trigger('mouseleave');

					return false;
				};
				var strText = "Ignore";

			}
			else
			{

				var fnClick = function ()
				{
					$elSource.removeClass('ds_flagged ds_ignored');
					$J('.ds_flag.ds_ignored_flag', $elSource).remove();
					for( var i=0; i<rgAppIds.length; i++ )
						GDynamicStore.ModifyIgnoredApp ( $elSource, rgAppIds[ i ], true );

					$El.trigger('mouseleave');

					return false;
				};
				var strText = "Ignored";
			}


			var $elNotInterested = $J ( '<div/>' ).click ( fnClick ).text ( strText ).addClass( 'option' );
			$El.append($elNotInterested);


			var $elPreferences = $J ( '<a/>' ).attr('href', 'https://store.steampowered.com/account/preferences' ).text ( "Store preferences" ).addClass( 'option' );
			$El.append($elPreferences);


		}
	},

	ModifyWishlist: function( $elSource, appid, bRemove, fnOnSuccess, fnOnFail )
	{
		var url = 'https://store.steampowered.com/api/addtowishlist';
		GDynamicStore.s_rgWishlist[appid] = !bRemove;

		if( bRemove )
			url = 'https://store.steampowered.com/api/removefromwishlist';


		$J.post( url, {
			sessionid: g_sessionID,
			appid: appid,
			snr: $elSource.data( 'snr' )
		}).done( function( data ) {
			if( fnOnSuccess )
				fnOnSuccess( appid );
			GDynamicStore.InvalidateCache();
		}).fail( function() {
			if( fnOnFail )
				fnOnFail( appid );
			GDynamicStore.s_rgWishlist[appid] = false;
		});
	},


	ToggleClientsideFilter: function( elControl, strToggleClass, elResults, strFilterClass )
	{
		$Control = $J(elControl);
		$Results = $J(elResults);

		$Control.toggleClass( strToggleClass );

		if ( $Control.hasClass( strToggleClass ) )
		{
			$Results.addClass( strFilterClass );
		}
		else
		{
			$Results.removeClass( strFilterClass );
		}
	},

	ModifyIgnoredApp: function( $elSource, appid, bRemove, fnOnSuccess, fnOnFail )
	{
		if ( bRemove )
		{
			delete GDynamicStore.s_rgIgnoredApps[appid];
		}
		else
		{
			GDynamicStore.s_rgIgnoredApps[appid] = 0;
		}


		$J.post( 'https://store.steampowered.com/recommended/ignorerecommendation/', {
			sessionid: g_sessionID,
			appid: appid,
			remove: bRemove ? 1 : 0,
			snr: $elSource.data( 'snr' )
		}).done( function() {
			if( fnOnSuccess )
				fnOnSuccess( appid );
			GDynamicStore.InvalidateCache();
		}).fail( function( jqXHR ) {
			if( fnOnFail )
				fnOnFail( appid );
			delete GDynamicStore.s_rgIgnoredApps[appid];
		});
	},

	ModifyIgnoredPackage: function( packageid, bRemove, fnOnSuccess, fnOnFail )
	{
				if ( bRemove )
		{
			delete GDynamicStore.s_rgIgnoredPackages[packageid];
		}
		else
		{
			GDynamicStore.s_rgIgnoredPackages[packageid] = 0;
		}

		$J.post( 'https://store.steampowered.com/recommended/ignorerecommendation/', {
			sessionid: g_sessionID,
			subid: packageid,
			remove: bRemove
		}).done( function() {
			if( fnOnSuccess )
				fnOnSuccess( packageid );
			GDynamicStore.InvalidateCache();
		}).fail( function() {
			if( fnOnFail )
				fnOnFail( packageid );
			delete GDynamicStore.s_rgIgnoredPackages[packageid];
		});
	},

	GetPersonalizedBundleData: function( unBundleID, rgPageBundleData )
	{
		if ( !GDynamicStore.s_rgPersonalizedBundleData[unBundleID] )
		{
			if ( !GStoreItemData.rgPersonalizedBundleData[ unBundleID ] && rgPageBundleData && rgPageBundleData.m_rgItems )
			{
				GStoreItemData.rgPersonalizedBundleData[ unBundleID ] = rgPageBundleData;
			}

			var Bundle = GStoreItemData.rgPersonalizedBundleData[ unBundleID ];
			if ( !Bundle )
				return null;

			var BundleForUser = {
				m_nDiscountPct: Bundle.m_nDiscountPct,
				m_bMustPurchaseAsSet: Bundle.m_bMustPurchaseAsSet,
				m_cTotalItemsInBundle: Bundle.m_rgItems.length,
				m_bContainsDiscountedPackage: false,
				m_cUserItemsInBundle: 0,
				m_nPackageBasePriceInCents: 0,
				m_nFinalPriceInCents: 0,
				m_nFinalPriceInCentsWithBundleDiscount: 0,
				m_rgBundleItems: [],
				m_bIsCommercial: Bundle.m_bIsCommercial,
				m_bRestrictGifting: Bundle.m_bRestrictGifting
			};

			for ( var i = 0; i < Bundle.m_rgItems.length; i++ )
			{
				var BundleItem = Bundle.m_rgItems[i];
				if ( !BundleItem.m_nPackageID || GDynamicStore.s_rgOwnedPackages[ BundleItem.m_nPackageID ] )
					continue;

				if ( BundleItem.m_rgIncludedAppIDs.length )
				{
					if ( GDynamicStore.BAreAllAppsOwned( BundleItem.m_rgIncludedAppIDs, { bExcludeMasterSub: true } ) )
						continue;
				}

				BundleForUser.m_bContainsDiscountedPackage |= BundleItem.m_bPackageDiscounted;
				BundleForUser.m_cUserItemsInBundle++;
				BundleForUser.m_nPackageBasePriceInCents += BundleItem.m_nBasePriceInCents;
				BundleForUser.m_nFinalPriceInCents += BundleItem.m_nFinalPriceInCents;
				BundleForUser.m_nFinalPriceInCentsWithBundleDiscount += BundleItem.m_nFinalPriceWithBundleDiscount;
				BundleForUser.m_rgBundleItems.push( BundleItem );
			}

			// fix the price
			BundleForUser.m_nFinalPriceInCentsWithBundleDiscount = GStoreItemData.CalculateCurrencyAppropriatePrice( BundleForUser.m_nFinalPriceInCentsWithBundleDiscount );

			GDynamicStore.s_rgPersonalizedBundleData[ unBundleID ] = BundleForUser;
		}

		return GDynamicStore.s_rgPersonalizedBundleData[ unBundleID ];
	},

	UpdateDynamicBundleElements: function( Bundle, $El )
	{

		var $CartBtn = $El.find('.btn_addtocart:not(.btn_packageinfo)' ).children();
		var $DiscountBlocks = $El.find('.discount_block');

		if ( !Bundle.m_bIsCommercial && ( !Bundle.m_rgBundleItems.length || ( Bundle.m_bMustPurchaseAsSet && Bundle.m_cUserItemsInBundle < Bundle.m_cTotalItemsInBundle ) ) )
		{
			var strTooltip = 'This bundle is not available for purchase on your account since you already have all included items.';

			if ( Bundle.m_bMustPurchaseAsSet && !Bundle.m_bRestrictGifting )
			{
				strTooltip = 'This offer is only available when buying all %s items at the same time.  You may still purchase the bundle as a gift for a friend.'.replace(/%s/, Bundle.m_cTotalItemsInBundle);
				$CartBtn.find('span').text( 'Purchase as a gift' );
			}
			else
			{
				// completely owned "complete the set" bundle
				$DiscountBlocks.hide();
				$CartBtn.addClass('btn_disabled' ).attr( 'href', 'javascript:void(0)' );
				$CartBtn.parent().css( 'background', '#000000' );
			}

			$CartBtn.data('tooltip-text', strTooltip );

		}
		else if ( !Bundle.m_bMustPurchaseAsSet )
		{
			var strFormattedFinalPrice = GStoreItemData.fnFormatCurrency( Bundle.m_nFinalPriceInCentsWithBundleDiscount );
			$DiscountBlocks.show();

			$DiscountBlocks.find('.discount_original_price' ).text( GStoreItemData.fnFormatCurrency( Bundle.m_nPackageBasePriceInCents ) );
			if ( !Bundle.m_bContainsDiscountedPackage )
			{
				$DiscountBlocks.addClass('no_discount');
				$DiscountBlocks.find('.discount_final_price' ).addClass('your_price' ).empty().append($J('<div/>', {'class': 'your_price_label'} ).text('Your Price:'), $J('<div/>' ).text( strFormattedFinalPrice ) );
			}
			else
			{
				$DiscountBlocks.removeClass('no_discount');
				var nDiscountPct = Math.round( ( Bundle.m_nPackageBasePriceInCents - Bundle.m_nFinalPriceInCentsWithBundleDiscount ) / Bundle.m_nPackageBasePriceInCents * 100 );
				nDiscountPct = Math.min( nDiscountPct, 99 );
				$DiscountBlocks.find('.discount_pct' ).text( '-' + nDiscountPct + '%' );
				$DiscountBlocks.find('.discount_final_price' ).removeClass('your_price').text( strFormattedFinalPrice );
			}

			if ( Bundle.m_nFinalPriceInCentsWithBundleDiscount == 0 && Bundle.m_cUserItemsInBundle )
			{
				// Complete the set bundle with only free items remaining
				var $AddToAcctBtn = $El.find('.btn_addtoaccount' );
				if ( $AddToAcctBtn.length )
				{
					$CartBtn.hide();
					$AddToAcctBtn.show();
				}
			}
		}

		var $Description = $El.find('.package_contents');
		if ( $Description.length && $El.hasClass('dynamic_bundle_description') && !Bundle.m_bMustPurchaseAsSet )
			GDynamicStore.BuildBundleDescription( Bundle, $Description );

		if ( $El.is( '.package_totals_area' ) && !Bundle.m_bMustPurchaseAsSet )
		{
			if ( !Bundle.m_rgBundleItems.length )
			{
				$El.hide();
			}
			else
			{
				$El.show();
				if ( Bundle.m_cUserItemsInBundle < Bundle.m_cTotalItemsInBundle )
				{
					$El.find('.bundle_final_package_price_desc' ).text( 'Individual price of the %s items you don\'t already have:'.replace( '%s', Bundle.m_cUserItemsInBundle ) );
				}
				$El.find('.bundle_final_package_price' ).text( GStoreItemData.fnFormatCurrency( Bundle.m_nFinalPriceInCents ) );
				$El.find('.bundle_final_price_with_discount' ).text( GStoreItemData.fnFormatCurrency( Bundle.m_nFinalPriceInCentsWithBundleDiscount ) );
				$El.find('.bundle_savings' ).text( GStoreItemData.fnFormatCurrency( Bundle.m_nFinalPriceInCents - Bundle.m_nFinalPriceInCentsWithBundleDiscount ) );
			}
		}
	},

	BuildBundleDescription: function( Bundle, $Description )
	{
		if ( Bundle.m_cUserItemsInBundle == 0 )
		{
			// already own everything
			$Description.html( '<span class="collectionComplete">Collection Complete!</span> %1$s of %2$s items from this collection are already in your library.'.replace( '%1$s', Bundle.m_cTotalItemsInBundle ).replace( '%2$s', Bundle.m_cTotalItemsInBundle ) );
		}
		else if ( Bundle.m_cUserItemsInBundle < Bundle.m_cTotalItemsInBundle )
		{
			// own some but not all.
			$Description.html( '<div>%1$s of %2$s items from this bundle are already in your library.</div>'.replace( '%1$s', Bundle.m_cTotalItemsInBundle - Bundle.m_cUserItemsInBundle ).replace( '%2$s', Bundle.m_cTotalItemsInBundle ) );
			$Description.append( '<div>Buy this bundle to save %1$s%% off the %2$s items you don\'t yet have!</div>'.replace( '%1$s', Bundle.m_nDiscountPct ).replace( '%2$s', Bundle.m_cUserItemsInBundle ).replace( '%%', '%' ) );

			// add "complete the set" flag
			$Description.parents('.dynamic_bundle_description' ).append( $J('<div/>', {'class': 'ds_flag ds_completetheset'} ).text('COMPLETE YOUR COLLECTION!') );
		}
		else
		{
			$Description.html( '<div>Buy this bundle to save %1$s%% off all %2$s items!</div>'.replace( '%1$s', Bundle.m_nDiscountPct ).replace( '%2$s', Bundle.m_cTotalItemsInBundle ).replace( '%%', '%' ) );
		}

		var rgItemsWithCaps = [];
		for ( var iBundleItem = 0; iBundleItem < Bundle.m_rgBundleItems.length; iBundleItem++ )
		{
			var unPackageID = Bundle.m_rgBundleItems[iBundleItem].m_nPackageID;
			var PackageData = GStoreItemData.rgPackageData[ unPackageID];
			if ( PackageData && PackageData.tiny_capsule )
			{
				rgItemsWithCaps.push( unPackageID );
			}
		}

		if ( rgItemsWithCaps.length )
		{
			// show no more than 9 items
			rgItemsWithCaps = rgItemsWithCaps.slice( 0, 9 );

			// if there's more than 5 items, we overlap them a little bit on the display
			var bNeedToCollapse = rgItemsWithCaps.length > 5;
			var $BundleContentsCtn = $J('<div/>', {'class': 'bundle_contents_preview'} );
			if ( bNeedToCollapse )
				$BundleContentsCtn.addClass( 'collapsed' );

			var $BundleContentsPosition = $J('<div/>', {'class': 'bundle_contents_preview_position'} );
			for ( var i = 0; i < rgItemsWithCaps.length; i++ )
			{
				var rgLinkParams = { 'class': 'bundle_contents_preview_item ds_collapse_flag', 'data-panel': '{"focusable":false}' }
				var Item = GStoreItemData.GetCapParams( 'bundle_component_preview', null, rgItemsWithCaps[i], null, rgLinkParams );
				var $Link = $J('<a/>', rgLinkParams );

				var $Img = $J('<img/>', {'src': Item.tiny_capsule, 'class': 'bundle_contents_preview_img' } );
				if ( i > 0 && bNeedToCollapse )
				{
					var flPositionRight = 100 * i / rgItemsWithCaps.length;
					$Link.addClass( 'floated' ).css( 'left', flPositionRight + '%' ).css('z-index', (rgItemsWithCaps.length - i));
				}
				$BundleContentsPosition.append( $Link.append( $Img ) );


				GStoreItemData.BindHoverEvents( $Img.parent(), Item.appids.length == 1 ? Item.appids[0] : null, rgItemsWithCaps[i] );
			}

			$Description.append( $BundleContentsCtn.append($BundleContentsPosition) );
			GDynamicStore.DecorateDynamicItems( $BundleContentsCtn );
		}
	},

	PopulateRecommendedTagList: function()
	{
		var $Element = $J('#foryou_yourtags');
		if ( !$Element.length )
			return;	// no menu

		$Element.empty();
		$Element.css( 'min-height', '' );
		for( var i = 0; i < GDynamicStore.s_rgRecommendedTags.length && i < 4; i++ )
		{
			var tag = GDynamicStore.s_rgRecommendedTags[i];
			var url = 'https://store.steampowered.com/tags/en/' + encodeURIComponent( tag.name );
			var $Link = $J('<a/>', {'class': 'popup_menu_item', 'href': GStoreItemData.AddNavEventParamsToURL( url, 'storemenu_recommendedtags' ) });
			$Link.text( tag.name );
			$Element.append( $Link );
		}
	},

	InvalidateCache: function()
	{
		WebStorage.SetLocal( 'unUserdataVersion', parseInt( WebStorage.GetLocal( 'unUserdataVersion' ) || 0 ) + 1 );
	},

	BIsAppOwned: function( appid, optsIn )
	{
		var opts = { bExcludeIfAutoGrant: true, bExcludeMasterSub: false };

				if ( optsIn === false )
			$J.extend( opts, { bExcludeIfAutoGrant: false } );
		else if ( optsIn )
			$J.extend( opts, optsIn );

		if ( GDynamicStore.s_rgOwnedApps[appid] )
		{
			if ( opts.bExcludeIfAutoGrant && this.BIsAutoGrantedApp( appid ) )
				return false;

			if ( opts.bExcludeMasterSub && this.BIsMasterSubApp( appid ) )
				return false;

			return true;
		}
		return false;
	},

	BIsAutoGrantedApp: function( appid )
	{
		return GDynamicStore.s_rgAutoGrantApps[appid] ? true : false;
	},

	BIsMasterSubApp: function( appid )
	{
		// presence in s_rgMasterSubApps indicates the user owns the app via a subscription like EA Play
		// in some places we allow user to repurchase
		return GDynamicStore.s_rgMasterSubApps[appid] ? true : false;
	},

	BIsSalePageAppID: function( appid )
	{
				return GStoreItemData.rgAppData[ appid ] && GStoreItemData.rgAppData[ appid ].url;
	},

	BIsPackageOwned: function( packageid )
	{
		return GDynamicStore.s_rgOwnedPackages[packageid] ? true : false;
	},

	BIsAppIgnored: function( appid )
	{
		return ( appid in GDynamicStore.s_rgIgnoredApps );
	},

	GetIgnoredAppCount: function( )
	{
		return Object.keys(GDynamicStore.s_rgIgnoredApps).length;
	},

	GetExcludedTagsOverlap: function( $e )
	{
		var rgOverlappingTagNames = [];
		var rgTagIDs = $e.data( 'dsTagids' );
		if ( rgTagIDs && rgTagIDs.length > 0 )
		{
			for ( var i = 0; i < rgTagIDs.length; ++i )
			{
				var tagid = rgTagIDs[i];
				if ( GDynamicStore.s_rgExcludedTags[tagid] )
				{
					rgOverlappingTagNames.push( GDynamicStore.s_rgExcludedTags[tagid] );
				}
			}
		}
		return rgOverlappingTagNames;
	},

	GetExcludedContentDescriptorOverlap: function( $e )
	{
		var rgOverlappingDescIDs = [];
		var rgIDs = $e.data( 'dsDescids' );
		if ( rgIDs && rgIDs.length > 0 )
		{
			for ( var i = 0; i < rgIDs.length; ++i )
			{
				var id = rgIDs[i];
				if ( GDynamicStore.s_rgExcludedDescIDs[id] )
				{
					rgOverlappingDescIDs.push( id );
				}
			}
		}
		return rgOverlappingDescIDs;
	},

	GetExcludedCreatorOverlap: function( $e )
	{
		var rgOverlappingDescIDs = [];
		var rgIDs = $e.data( 'dsCrtrids' );
		if ( rgIDs && rgIDs.length > 0 )
		{
			for ( var i = 0; i < rgIDs.length; ++i )
			{
				var id = rgIDs[i];
				if ( GDynamicStore.s_rgCreatorsIgnored[id] )
				{
					rgOverlappingDescIDs.push( id );
				}
			}
		}
		return rgOverlappingDescIDs;
	},

	BIsAppOnWishlist: function( appid )
	{
		return GDynamicStore.s_rgWishlist[appid] ? true: false;
	},

	BIsPackageIgnored: function( packageid )
	{
		return ( packageid in GDynamicStore.s_rgIgnoredPackages );
	},

	GetCuratorForApp: function( unAppID, bOnlyPositive )
	{
		var curator = null;
		if( GDynamicStore.s_rgCurations[unAppID] )
		{
			var rgFilteredCuratorIDs = [];
			$J.each(GDynamicStore.s_rgCurations[unAppID], function( unCuratorID, unRecommendationState ){
				if( !bOnlyPositive || unRecommendationState == 0  )
					rgFilteredCuratorIDs.push( unCuratorID );
			});

			if( rgFilteredCuratorIDs.length )
			{
				var unCuratorID = rgFilteredCuratorIDs[ Math.floor( Math.random() * rgFilteredCuratorIDs.length ) ];
				return {
					'recommendation_state': GDynamicStore.s_rgCurations[unAppID][unCuratorID],
					'curator': GDynamicStore.s_rgCurators[unCuratorID]
				}
			}
		}
		return null;
	},

	GetCurator: function( clanid )
	{
		return GDynamicStore.s_rgCurators[ clanid ];
	},

	GetMatchingCreatorFollowed: function( rgAppCreatorRelationship )
	{
		if( GDynamicStore.s_rgCreatorsFollowed )
		{
			for( var clanid in rgAppCreatorRelationship )
			{
				if( rgAppCreatorRelationship.hasOwnProperty( clanid ) && clanid in GDynamicStore.s_rgCreatorsFollowed )
				{
					return { 'clanid': clanid, 'relationship': rgAppCreatorRelationship[clanid] }
				}
			}
		}
		return null;
	},

	BAreAllAppsOwned: function( rgAppIds, opts )
	{
		for ( var i = 0; i < rgAppIds.length; i++ )
		{
			if ( !GDynamicStore.BIsAppOwned( rgAppIds[i], opts ) )
				return false;
		}

		return true;
	},

	DisplayBundleSimulator: function( unBundleID )
	{
		if ( !GDynamicStore.m_bLoadComplete )
		{
			GDynamicStore.OnReady( function() { GDynamicStore.DisplayBundleSimulator( unBundleID ) } );
			return;
		}

		var Bundle = GStoreItemData.rgPersonalizedBundleData[ unBundleID ];
		if ( !Bundle )
		{
			ShowAlertDialog( '', 'Unknown bundle ID ' + unBundleID );
			return;
		}

		var $Form = $J('<form/>', {'class': 'bundle_simulator_form'});
		$Form.append( $J('<h2/>').text('Check the items to "own"') );
		$Form.append( $J('<div/>', {'class': 'bundle_simulator_secondary' } ).append(
			$J('<a/>', {'href': 'javascript:void(0);'} ).click( function() { $Form.find('input').prop('checked', true ); } ).text( "Select all" ),
			' - ',
			$J('<a/>', {'href': 'javascript:void(0);'} ).click( function() { $Form.find('input').prop('checked', false ); } ).text( "Select none" )
		) );

		for ( var i =0; i < Bundle.m_rgItems.length; i++ )
		{
			var BundleItem = Bundle.m_rgItems[i];
			var id = 'bundle_check_' + i;
			var nPackageID = BundleItem.m_nPackageID;
			var rgAppIDs = BundleItem.m_rgIncludedAppIDs;

			var $Row = $J('<div/>', {'class': 'bundle_simulator_row'} );
			var $Checkbox = $J('<input/>', {type: 'checkbox', id: id } );
			if ( GDynamicStore.s_rgOwnedPackages[nPackageID] || ( rgAppIDs.length && GDynamicStore.BAreAllAppsOwned( rgAppIDs ) ) )
				$Checkbox.prop('checked', true);

			$Checkbox.data( 'BundleItem', BundleItem );
			$Row.append( $Checkbox );

			var strLabel = GStoreItemData.rgPackageData[nPackageID].name;
			if ( rgAppIDs.length == 1 )
				strLabel = GStoreItemData.rgAppData[rgAppIDs[0]].name;
			$Row.append( $J('<label/>', {'for': id } ).text( strLabel ) );

			$Form.append( $Row );
		}

		var Modal;

		Modal = ShowConfirmDialog( '', $Form, 'Update Display' ).done( function() {
			$Form.find('input').each( function() {
				var $Checkbox = $J(this);
				var BundleItem = $Checkbox.data('BundleItem');
				var nPackageID = BundleItem.m_nPackageID;
				var rgAppIDs = BundleItem.m_rgIncludedAppIDs;
				if ( $Checkbox.prop('checked') )
				{
					GDynamicStore.s_rgOwnedPackages[nPackageID] = true;
					for ( var i = 0; i < rgAppIDs.length; i++ )
						GDynamicStore.s_rgOwnedApps[rgAppIDs[i]] = true;
				}
				else
				{
					delete GDynamicStore.s_rgOwnedPackages[nPackageID];
					for ( var i = 0; i < rgAppIDs.length; i++ )
						delete GDynamicStore.s_rgOwnedApps[rgAppIDs[i]];
				}

				GDynamicStore.s_rgPersonalizedBundleData = {};
				GDynamicStore.DecorateDynamicItems( null, true );
			});
			Modal.GetContent().remove();
		});
		Modal.SetRemoveContentOnDismissal( false );
	}
};

GStoreItemData = {

	rgAppData: {},
	rgPackageData: {},
	rgBundleData: {},
	rgPersonalizedBundleData: {},
	rgAccountData: [],
	rgNavParams: {},
		fnFormatCurrency: function( nValueInCents, bWholeNumbersOnly ) { return v_numberformat( nValueInCents / 100, bWholeNumbersOnly !== undefined ? bWholeNumbersOnly : false ); },
	nCurrencyMinPriceIncrement : 1,

	AddStoreItemDataSet: function( rgStoreItemData )
	{
		GStoreItemData.AddStoreItemData( rgStoreItemData.rgApps, rgStoreItemData.rgPackages, rgStoreItemData.rgBundles );
	},

	/**
	 * @deprecated - use AddStoreItemDataSet instead
	 */
	AddStoreItemData: function ( rgApps, rgPackages, rgBundles )
	{
		if ( rgApps && typeof rgApps.length == 'undefined' )
		{
			for( var appid in rgApps )
			{
				if ( !GStoreItemData.rgAppData[appid] )
					GStoreItemData.rgAppData[appid] = rgApps[appid];
				else
					GStoreItemData.MergeStoreItemData( GStoreItemData.rgAppData[appid], rgApps[appid] );
			}
		}

		if ( rgPackages && typeof rgPackages.length == 'undefined' )
		{
			for( var packageid in rgPackages )
			{
				if ( !GStoreItemData.rgPackageData[packageid] )
					GStoreItemData.rgPackageData[packageid] = rgPackages[packageid];
				else
					GStoreItemData.MergeStoreItemData( GStoreItemData.rgPackageData[packageid], rgPackages[packageid] );
			}
		}

		if ( rgBundles && typeof rgBundles.length == 'undefined' )
		{
			for( var bundleid in rgBundles )
			{
				if ( !GStoreItemData.rgBundleData[bundleid] )
					GStoreItemData.rgBundleData[bundleid] = rgBundles[bundleid];
				else
					GStoreItemData.MergeStoreItemData( GStoreItemData.rgBundleData[bundleid], rgBundles[bundleid] );
			}
		}
	},

	GetStoreItemDataForElement: function( $el )
	{
		var unAppId = $el.data('ds-appid');
		var unPackageID = $el.data('ds-packageid');
		var unBundleID = $el.data('ds-bundleid' );

		if ( unBundleID && GStoreItemData.rgBundleData[unBundleID] )
			return { bundleid: unBundleID, item: GStoreItemData.rgBundleData[unBundleID] };

		if( unPackageID && unPackageID.toString().indexOf(',') !== -1 )
			unPackageID = unPackageID.split(',')[0];

		if ( unPackageID && GStoreItemData.rgPackageData[unPackageID] )
			return { packageid: unPackageID, item: GStoreItemData.rgPackageData[unPackageID] };

		if( unAppId && unAppId.toString().indexOf(',') !== -1 )
			unAppId = unAppId.split(',')[0];

		if ( unAppId && GStoreItemData.rgAppData[unAppId] )
			return { appid: unAppId, item: GStoreItemData.rgAppData[unAppId] };

		return { item: undefined };
	},

	AddStoreAccountData: function( rgAccounts )
	{
		if ( rgAccounts && rgAccounts.length > 0 )
		{
			for ( var i = 0; i < rgAccounts.length; i++ )
			{
				GStoreItemData.rgAccountData.push( rgAccounts[i] );
			}
		}
	},

	GetAccountData: function( steamid, accountid, type )
	{

		// Assume individual account unless otherwise specified.
		if( !type )
			type = 1;

		// Search for an accountid instead
		for( var i = 0; i < GStoreItemData.rgAccountData.length; i++ )
		{
			var account = GStoreItemData.rgAccountData[i];

			if( account.accountid == accountid && account.type == type )
				return account;
		}

	},

	SetCurrencyFormatter: function( fn )
	{
		GStoreItemData.fnFormatCurrency = fn;
	},

	SetCurrencyMinPriceIncrement: function( nMinPriceIncrement )
	{
		GStoreItemData.nCurrencyMinPriceIncrement = nMinPriceIncrement;
	},

	CalculateCurrencyAppropriatePrice: function( nPrice )
	{
		if ( GStoreItemData.nCurrencyMinPriceIncrement > 1 )
		{
			var nRoundingAmount = GStoreItemData.nCurrencyMinPriceIncrement;
			var dAmount = nPrice / nRoundingAmount;
			// round "half away from zero" - javascript Math.round rounds -1.5 to -1, which is not desired
			var dSign = dAmount < 0 ? -1 : 1;
			dAmount = ( dSign * Math.floor( Math.abs( dAmount ) + 0.5 ) ) * nRoundingAmount;
			nPrice = dAmount;
		}

		return nPrice;
	},

	MergeStoreItemData: function( rgExistingItemData, rgItemData )
	{
		for( var key in rgItemData )
		{
			if ( !rgExistingItemData[key] )
				rgExistingItemData[key] = rgItemData[key];
		}
	},

	AddNavParams: function( rgNavParams )
	{
		if ( rgNavParams )
			$J.extend( GStoreItemData.rgNavParams, rgNavParams );
	},

	AddNavEventParamsToURL: function( strURL, strFeatureContext, nDepth, nCuratorClanID )
	{
		var strClanParam = nCuratorClanID ? 'curator_clanid=' + nCuratorClanID : '';
		if ( strFeatureContext )
		{
			if ( !GStoreItemData.rgNavParams[strFeatureContext] )
			{
				
								strFeatureContext = '__page_default';
			}

			if ( GStoreItemData.rgNavParams[strFeatureContext] )
			{
				var strNavParam = GStoreItemData.rgNavParams[strFeatureContext];
				if ( nDepth )
					strNavParam += '_' + parseInt( nDepth );

				strURL += ( strURL.indexOf( '?' ) != -1 ? '&' : '?' ) + 'snr=' + strNavParam;
				if( strClanParam )
					strURL += '&' + strClanParam;
			}
		}
		else if( strClanParam )
		{
			strURL += ( strURL.indexOf( '?' ) != -1 ? '&' : '?' ) + strClanParam;
		}
		return strURL;
	},

	GetCurrentPageNavParams: function()
	{
				return GStoreItemData.rgNavParams['__page_default'];
	},

	GetCurrentPageNavParamObj: function()
	{
				return GStoreItemData.rgNavParams['__page_default_obj'];
	},

	GetPreviousPageNavParamObj: function()
	{
				return GStoreItemData.rgNavParams['__originating_obj'];
	},

	GetAppURL: function( unAppID, strFeatureContext, nDepth, nCuratorClanID)
	{
		if ( typeof GStoreItemData.rgAppData[ unAppID ] == 'object' && 'url_name' in GStoreItemData.rgAppData[ unAppID ] ) {
			return GStoreItemData.AddNavEventParamsToURL( 'https://store.steampowered.com/app/' + unAppID + '/' + GStoreItemData.rgAppData[ unAppID ].url_name + '/', strFeatureContext, nDepth, nCuratorClanID )
		}

		return GStoreItemData.AddNavEventParamsToURL( 'https://store.steampowered.com/app/' + unAppID + '/', strFeatureContext, nDepth, nCuratorClanID )
	},

	GetPackageURL: function( unPackageID, strFeatureContext, nDepth )
	{
		return GStoreItemData.AddNavEventParamsToURL( 'https://store.steampowered.com/sub/' + unPackageID + '/', strFeatureContext, nDepth )
	},

	GetBundleURL: function( unBundleID, strFeatureContext, nDepth )
	{
		return GStoreItemData.AddNavEventParamsToURL( 'https://store.steampowered.com/bundle/' + unBundleID + '/', strFeatureContext, nDepth )
	},

	GetHoverParams: function ( unAppID, unPackageID, unBundleID )
	{
		var hoverparams;

		if ( unBundleID )
			hoverparams = { type: 'bundle', id: unBundleID };
		else if ( unPackageID )
			hoverparams = { type: 'sub', id: unPackageID };
		else if ( unAppID )
			hoverparams = { type: 'app', id: unAppID };
		else
			return null;

		hoverparams.v6 = 1;
		return hoverparams;
	},

	BindHoverEvents: function( $Element, unAppID, unPackageID, unBundleID, rgAdditionalParams )
	{
		$Element.mouseenter( function( event ) {
					GameHover( this, event, $J('#global_hover'), $J.extend( GStoreItemData.GetHoverParams( unAppID, unPackageID, unBundleID ), rgAdditionalParams || {}) );
				}).mouseleave( function( event ) {
					HideGameHover( this, event, $J('#global_hover') );
				});
	},

	BindHoverEventsForItem: function( $Element, oItem, rgAdditionalParams )
	{
		return GStoreItemData.BindHoverEvents( $Element, oItem.appid, oItem.packageid, oItem.bundleid, rgAdditionalParams );
	},

	GetCapParamsForItem: function( strFeatureContext, rgItem, params, nDepth )
	{
		return GStoreItemData.GetCapParams( strFeatureContext, rgItem.appid, rgItem.packageid, rgItem.bundleid, params, nDepth );
	},

	GetCapParams: function( strFeatureContext, unAppID, unPackageID, unBundleID, params, nDepth )
	{
		var rgItemData = null;
		if( unAppID )
			rgItemData = GStoreItemData.rgAppData[ unAppID ];
		else if( unPackageID )
			rgItemData = GStoreItemData.rgPackageData[ unPackageID ];
		else if( unBundleID )
			rgItemData = GStoreItemData.rgBundleData[ unBundleID ];

		if ( !rgItemData )
			return null;

		if ( !unAppID && rgItemData['appids'] && rgItemData['appids'].length == 1 )
		{
			unAppID = rgItemData['appids'][0];
		}

		if ( rgItemData['steam_deck_compat_category'] !== undefined )
		{
			params['data-ds-steam-deck-compat-category'] = rgItemData['steam_deck_compat_category'];
		}

		if ( unAppID )
		{
			params['data-ds-appid'] = unAppID;
			params[ 'href' ] = GStoreItemData.GetAppURL( unAppID, strFeatureContext, nDepth, params['curator_clanid'] );
		}
		else if ( unPackageID )
		{
			params['data-ds-packageid'] = unPackageID;
			params['href'] = GStoreItemData.GetPackageURL( unPackageID, strFeatureContext, nDepth );
			if ( rgItemData['appids'] )
			{
				params['data-ds-appid'] = rgItemData['appids'].join( ',' );
			}
		}
		else if ( unBundleID )
		{
			params['data-ds-bundleid'] = unBundleID;
			params['href'] = GStoreItemData.GetBundleURL( unBundleID, strFeatureContext, nDepth );
			if ( rgItemData['appids'] )
			{
				params['data-ds-appid'] = rgItemData['appids'].join( ',' );
			}
		}

		if ( rgItemData.tagids && rgItemData.tagids.length != 0 )
		{
			params['data-ds-tagids'] = '[' + rgItemData['tagids'].join( ',' ) + ']';
		}
		if ( rgItemData.descids && rgItemData.descids.length != 0 )
		{
			params['data-ds-descids'] = '[' + rgItemData['descids'].join( ',' ) + ']';
		}

		// override with item-specific URL
		if ( rgItemData.url )
			params['href'] = GStoreItemData.AddNavEventParamsToURL( rgItemData.url, strFeatureContext, nDepth, params['curator_clanid'] );

		return rgItemData;
	},

	BuildSupportedPlatformIcon: function( rgItemData )
	{
		var strHTML = '';
		var nPlatforms = 0;

		if ( rgItemData.video )
		{
			strHTML += '<span class="platform_img streamingvideo"></span>';
		}
		else if ( rgItemData.video360 )
		{
			strHTML += '<span class="platform_img streaming360video"></span>';
		}
		else if ( rgItemData.videoseries )
		{
			strHTML += '<span class="platform_img streamingvideoseries"></span>';
		}
		else
		{
			if ( rgItemData.os_windows )
			{
				strHTML += '<span class="platform_img win"></span>';
				nPlatforms++;
			}
			if ( rgItemData.os_macos )
			{
				strHTML += '<span class="platform_img mac"></span>';
				nPlatforms++;
			}
			if ( rgItemData.os_linux )
			{
				strHTML += '<span class="platform_img linux"></span>';
				nPlatforms++;
			}
		}

		if ( rgItemData.vr_htcvive || rgItemData.vr_oculusrift || rgItemData.vr_windowsmr )
		{
			strHTML += '<span class="platform_img hmd_separator"></span>';

			if ( rgItemData.vr_htcvive )
			{
				strHTML += '<span class="platform_img htcvive"></span>';
			}
			if ( rgItemData.vr_oculusrift )
			{
				strHTML += '<span class="platform_img oculusrift"></span>';
			}
			if ( rgItemData.vr_windowsmr )
			{
				strHTML += '<span class="platform_img windowsmr"></span>';
			}
		}

		return strHTML;

	},

	// filtering
	FilterItemsForDisplay: function( rgItems, Settings, ApplicableSettings, cMaxItemsToDisplay, cMinItemsToDisplay )
	{
		var rgStrictItems = [], rgGoodItems = [], rgOtherItems = [], rgBadItems = [];

		var fnAnnotatePriority = function ( item, priority ) { return item; };
		if ( Settings.include_priority )
			fnAnnotatePriority = function ( item, priority ) { item.priority = priority; return item; };

		if ( !cMaxItemsToDisplay )
			cMaxItemsToDisplay = rgItems.length;

		for ( var i = 0; i < rgItems.length; i++ )
		{
			var oItem = rgItems[i];
			var unAppID = null, unPackageID = null, unBundleID = null;
			if ( oItem instanceof Object )
			{
				if ( oItem.appid )
					unAppID = oItem.appid;
				else if ( oItem.packageid )
					unPackageID = oItem.packageid;
				else if ( oItem.bundleid )
					unBundleID = oItem.bundleid;
			}

			if ( unAppID )
			{
				if ( GStoreItemData.BAppPassesFilters( unAppID, Settings, ApplicableSettings, true ) )
					rgStrictItems.push(oItem);
				else if ( GStoreItemData.BAppPassesFilters( unAppID, Settings, ApplicableSettings ) )
					rgGoodItems.push(oItem);
				else if ( !GDynamicStore.BIsAppIgnored( unAppID ) )
					rgOtherItems.push( oItem );
				else
					rgBadItems.push( oItem );
			}
			else if ( unPackageID )
			{
				if ( GStoreItemData.BPackagePassesFilters( unPackageID, Settings, ApplicableSettings, true ) )
					rgStrictItems.push( oItem );
				else if ( GStoreItemData.BPackagePassesFilters( unPackageID, Settings, ApplicableSettings ) )
					rgGoodItems.push( oItem );
				else if ( !GDynamicStore.BIsPackageIgnored( unPackageID ) )
					rgOtherItems.push( oItem );
				else
					rgBadItems.push( oItem );
			}
			else if ( unBundleID )
			{
				if ( GStoreItemData.BBundlePassesFilters( unBundleID, Settings, ApplicableSettings, true ) )
					rgStrictItems.push( oItem );
				else if ( GStoreItemData.BBundlePassesFilters( unBundleID, Settings, ApplicableSettings ) )
					rgGoodItems.push( oItem );
				else
					rgOtherItems.push( oItem );
			}

			if ( rgStrictItems.length >= cMaxItemsToDisplay)
				break;
		}

		if ( Settings.include_priority )
			rgStrictItems.forEach( function( item ) { fnAnnotatePriority( item , 1 ); } );

		if ( cMinItemsToDisplay )
		{
			for ( i = 0; rgStrictItems.length < cMinItemsToDisplay && i < rgGoodItems.length; i++ )
			{
				rgStrictItems.push( fnAnnotatePriority( rgGoodItems[i], 2 ) );
			}

			if ( Settings.enforce_minimum )
			{
				for ( i = 0; rgStrictItems.length < cMinItemsToDisplay && i < rgOtherItems.length; i++ )
					rgStrictItems.push( fnAnnotatePriority( rgOtherItems[i], 3 ) );

				for ( i = 0; rgStrictItems.length < cMinItemsToDisplay && i < rgBadItems.length; i++ )
					rgStrictItems.push( fnAnnotatePriority( rgBadItems[i], 4 ) );
			}
		}

		return rgStrictItems;
	},


	BItemPassesFilters: function( rgItemData, Settings, ApplicableSettings )
	{
		if ( ApplicableSettings.only_current_platform && Settings.only_current_platform )
		{

			if (	( !GDynamicStore.s_bUserOnMacOS || ( GDynamicStore.s_bUserOnMacOS && !rgItemData.os_macos ) ) &&
					( !GDynamicStore.s_bUserOnLinux || ( GDynamicStore.s_bUserOnLinux && !rgItemData.os_linux ) ) &&
					( !GDynamicStore.s_bUserOnWindows || ( GDynamicStore.s_bUserOnWindows && !rgItemData.os_windows ) &&
					( GDynamicStore.s_bUserOnWindows || GDynamicStore.s_bUserOnMacOS || GDynamicStore.s_bUserOnLinux ) )
				)
			return false;
		}

		if ( rgItemData.coming_soon && ApplicableSettings.prepurchase && !Settings.prepurchase )
			return false;

		return true;
	},

	BAppPassesFilters: function( appid, Settings, ApplicableSettings, bStrict )
	{
		var rgAppData = GStoreItemData.rgAppData[appid];

		if ( !rgAppData )
			return false;
		// TODO: score based on filter misses and sort by score?

		if ( !GStoreItemData.BItemPassesFilters( rgAppData, Settings, ApplicableSettings ) )
			return false;

		if ( GDynamicStore.BIsAppIgnored( appid ) )
			return false;

		if ( rgAppData.early_access && ApplicableSettings.early_access && !Settings.early_access )
			return false;

		if ( rgAppData.software && ApplicableSettings.software && !Settings.software )
			return false;

		if ( rgAppData.dlc && ( ( ApplicableSettings.dlc && !Settings.dlc ) ||
			( ApplicableSettings.dlc_for_you && ( !Settings.dlc_for_you || !rgAppData.dlc_for_app || !GDynamicStore.BIsAppOwned( rgAppData.dlc_for_app, false ) ) ) ) )
			return false;

		if ( ApplicableSettings.games_already_in_library && !Settings.games_already_in_library && GDynamicStore.BIsAppOwned( appid ) )
			return false;

		if ( ApplicableSettings.games_not_in_library && !Settings.games_not_in_library && !GDynamicStore.BIsAppOwned( appid ) )
			return false;

		if ( rgAppData.video && ApplicableSettings.video && !Settings.video )
			return false;

		// for the strict mode, we check if the app supports any of the preferred languages
		if ( bStrict && !rgAppData.localized && ApplicableSettings.localized && Settings.localized )
			return false;

		// for the non-strict pass, we only check English, even if not part of user preferences.
		// we no longer show random language games if the view calls for localized items
		if ( !bStrict && !rgAppData.localized_english && ApplicableSettings.localized && Settings.localized )
			return false;

		if ( bStrict && ApplicableSettings.displayed_elsewhere && !Settings.displayed_elsewhere && GDynamicStore.s_rgDisplayedApps.indexOf( appid ) !== -1 )
			return false;

		if ( rgAppData.virtual_reality && ApplicableSettings.virtual_reality && !Settings.virtual_reality )
			return false;

		if ( ApplicableSettings.not_wishlisted && !Settings.not_wishlished && GDynamicStore.BIsAppOnWishlist( appid ) )
		    return false;

		if ( ApplicableSettings.has_discount && Settings.has_discount )
		{
		    if ( !rgAppData.discount_block || rgAppData.discount_block.includes('no_discount') )
		    {
		        return false;
		    }
        }

        if ( rgAppData.demo_for_app )
		{
			// skip demos for games that are already owned
			if ( ApplicableSettings.games_already_in_library && !Settings.games_already_in_library && GDynamicStore.BIsAppOwned( rgAppData.demo_for_app ) )
				return false;

			if ( bStrict && ApplicableSettings.displayed_elsewhere && !Settings.displayed_elsewhere && GDynamicStore.s_rgDisplayedApps.indexOf( rgAppData.demo_for_app ) !== -1 )
				return false;
		}

		if ( rgAppData.tagids && rgAppData.tagids.length != 0 )
		{
			for ( var i = 0; i < rgAppData.tagids.length; ++i )
			{
				var tagid = rgAppData.tagids[i];
				if ( GDynamicStore.s_rgExcludedTags[tagid] )
				{
					return false;
				}
			}
		}

		if ( rgAppData.descids && rgAppData.descids.length != 0 )
		{
			for ( var i = 0; i < rgAppData.descids.length; ++i )
			{
				var id = rgAppData.descids[i];
				if ( GDynamicStore.s_rgExcludedDescIDs[id] )
				{
					return false;
				}
			}
		}

		// If a non-empty list of explicit tag exclusions is specified, reject apps with one of those tags
		if ( ApplicableSettings.explicitly_excluded_tags && Settings.explicitly_excluded_tags.length > 0 && rgAppData.tagids )
		{
			for ( var i = 0; i < rgAppData.tagids.length; ++i )
			{
				var tagid = rgAppData.tagids[i];
				if ( Settings.explicitly_excluded_tags.includes( tagid ) )
				{
				    return false;
				}
			}
		}

		// If a non-empty list of explicit tag inclusions is specified, reject apps which don't have one of those tags
		if ( ApplicableSettings.explicitly_included_tags && Settings.explicitly_included_tags.length > 0 )
		{
		    if ( !rgAppData.tagids )
		    {
		        return false;
		    }

		    for ( var i = 0; i < Settings.explicitly_included_tags.length; ++i )
		    {
		        var tagid = Settings.explicitly_included_tags[i];
		        if ( !rgAppData.tagids.includes( tagid ) )
		        {
		            return false;
		        }
		    }
		}

		if ( rgAppData.no_main_cap )
			return false;

		return true;
	},

	BPackagePassesFilters: function( packageid, Settings, ApplicableSettings, bStrict )
	{
		var rgPackageData = GStoreItemData.rgPackageData[ packageid ];
		if ( !rgPackageData )
			return false;

		if ( !GStoreItemData.BItemPassesFilters( rgPackageData, Settings, ApplicableSettings, bStrict ) )
			return false;

		if ( !GStoreItemData.BAppIDSetPassesFilters( rgPackageData.appids, Settings, ApplicableSettings, bStrict ) )
			return false;

		if ( ApplicableSettings.games_already_in_library && !Settings.games_already_in_library && GDynamicStore.BIsPackageOwned( packageid ) )
			return false;

		if ( GDynamicStore.BIsPackageIgnored( packageid ) )
			return false;

		if ( bStrict && ApplicableSettings.displayed_elsewhere && !Settings.displayed_elsewhere && GDynamicStore.s_rgDisplayedPackages.indexOf( packageid ) !== -1 )
			return false;

		return true;
	},

	BBundlePassesFilters: function( bundleid, Settings, ApplicableSettings, bStrict )
	{
		var rgBundleData = GStoreItemData.rgBundleData[ bundleid ];

		if ( !rgBundleData )
			return false;

		if( !GStoreItemData.BItemPassesFilters( rgBundleData, Settings, ApplicableSettings, bStrict ) )
			return false;

		if ( !GStoreItemData.BAppIDSetPassesFilters( rgBundleData.appids, Settings, ApplicableSettings, bStrict ) )
			return false;

		if ( bStrict && ApplicableSettings.displayed_elsewhere && !Settings.displayed_elsewhere && GDynamicStore.s_rgDisplayedBundles.indexOf( bundleid ) !== -1 )
			return false;

		return true;
	},

	BAppIDSetPassesFilters: function( appids, Settings, ApplicableSettings, bStrict )
	{
		// figure out state of apps
		var bAnyAppsOwned = false;
		for ( var i = 0; i < appids.length; i++ )
		{
			if ( GDynamicStore.BIsAppIgnored( appids[i] ) )
				return false;

			if ( GDynamicStore.BIsAppOwned( appids[i] ) )
			{
				bAnyAppsOwned = true;
			}
		}

		if ( ApplicableSettings.games_already_in_library && !Settings.games_already_in_library )
		{
			// any app being owned excludes the package; packages don't grant extra copies (usually)
			if ( bAnyAppsOwned )
				return false;

		}

		if ( ApplicableSettings.games_not_in_library && !Settings.games_not_in_library )
		{
			if ( !bAnyAppsOwned )
				return false;
		}

		return true;
	},

};

var GDynamicStoreHelpers = {

	BuildCapsuleHTML: function( strFeatureContext, unAppID, unPackageID, unBundleID, rgOptions )
	{
		var rgOptions = $J.extend({
			'class': 'store_capsule',
			'include_title': false,
			'discount_class': 'discount_block_inline',
			'capsule_size': 'headerv5',
			'html_before_price': '',
			'lazy': false,
			'curator': false
		}, rgOptions ? rgOptions : {} );

		var params = { 'class': rgOptions.class };
		if( rgOptions.curator )
			params['curator_clanid'] =  rgOptions.curator
		var rgItemData = GStoreItemData.GetCapParams( strFeatureContext, unAppID, unPackageID, unBundleID, params );
		if ( !rgItemData )
		{
			return null;
		}

		var $CapCtn = $J('<a/>', params );

		if ( !rgOptions.no_hover )
			GStoreItemData.BindHoverEvents( $CapCtn, unAppID, unPackageID );

		var $ImgCtn = $J('<div class="capsule"/>').addClass( rgOptions.capsule_size );

		var rgImageProperties = { src: rgItemData[rgOptions.capsule_size], alt: rgItemData.name };
		if( rgOptions.lazy )
			rgImageProperties = { 'data-image-url': rgItemData[rgOptions.capsule_size] }

		$ImgCtn.append( $J('<img/>', rgImageProperties ) );
		$CapCtn.append( $ImgCtn );
		if( rgOptions.include_title )
			$CapCtn.append( $J('<div/>', {'class': 'title ellipsis' } ).html( rgItemData.name ) );

		if( rgOptions.html_before_price )
			$CapCtn.append( rgOptions.html_before_price );

		if( rgItemData.has_live_broadcast )
			$CapCtn.append( $J( '<div>').addClass( 'broadcast_live_stream_icon' ).append( 'Live' ) );

		$CapCtn.append( $J('<div/>').html( rgItemData.discount_block ? $J(rgItemData.discount_block).addClass( rgOptions.discount_class ) : '&nbsp;' ) );

		return $CapCtn;
	},

	FillPagedCapsuleCarousel: function( rgCapsules, $elTarget, fnCapsule, strNavContext, nCapsules, rgBaseOptions )
	{
		var $elCapsuleTarget = $J('.carousel_items', $elTarget);
		var $elThumbTarget = $J('.carousel_thumbs', $elTarget);

		var bPaginated = !$elCapsuleTarget.hasClass('no_paging');

		if ( !bPaginated )
			nCapsules = rgCapsules.length;

				if( rgCapsules.length < nCapsules )
			return;

		for( var j=0; j<rgCapsules.length; j+=nCapsules )
		{
			// Try to avoid half-filling a page
			if( j > 0 && j+nCapsules > rgCapsules.length && bPaginated )
				break;

			var $elPageContainer = $J('<div>');
			for( var k=0; k < nCapsules && k + j < rgCapsules.length; k++ )
			{
				var oItem = rgCapsules[ k + j ];
				var rgOptions = $J.extend({}, rgBaseOptions);
				if( j > 0 )
					rgOptions.lazy = true;
				var $CapCtn = fnCapsule( oItem, strNavContext, rgOptions );
				if( !$CapCtn )
					continue;

				// Don't try to do automatic visibilty tracking on non-visible clusters.
				if( j > 0 )
					$CapCtn.attr('data-manual-tracking', 1);

				$elPageContainer.append( $CapCtn );

			}

			$elCapsuleTarget.append($elPageContainer);

			if ( bPaginated )
			{
				$elThumbTarget.append($J('<div/>'));
			}
		}

		if ( $elCapsuleTarget.children().length > 0 )
		{
			$elCapsuleTarget.InstrumentLinks();
			GDynamicStore.DecorateDynamicItems( $elCapsuleTarget );
			$elTarget.show();
		}

		if ( bPaginated )
			CreateFadingCarousel( $elTarget, 0 );
	},

	AddSNRDepthParamsToCapsuleList: function( $Capsules )
	{
		var nDepth = 1;
		$Capsules.filter('a:visible').each( function() {
			ModifyLinkSNR( $J(this), function( snr ) {
				var rgParts = snr.split('_');
				rgParts[5] = nDepth++;
				return rgParts.join('_');
			});
		});
	}
};

function OnDynamicStorePageException(e)
{
	}

GDynamicStorePage = {
	oSettings: {},
	oApplicableSettings: {"main_cluster":{"top_sellers":true,"early_access":true,"games_already_in_library":true,"recommended_for_you":true,"prepurchase":true,"games":"always","software":true,"dlc_for_you":true,"dlc":null,"recently_viewed":null,"new_on_steam":null,"popular_new_releases":"always","games_not_in_library":null,"only_current_platform":true,"video":true,"localized":true,"virtual_reality":true,"recommended_by_curators":true,"hidden":null},"new_on_steam":{"top_sellers":null,"early_access":true,"games_already_in_library":true,"recommended_for_you":null,"prepurchase":null,"games":"always","software":true,"dlc_for_you":null,"dlc":null,"recently_viewed":null,"new_on_steam":null,"popular_new_releases":null,"games_not_in_library":null,"only_current_platform":true,"video":true,"localized":true,"virtual_reality":true,"recommended_by_curators":null,"hidden":null},"recently_updated":{"top_sellers":null,"early_access":true,"games_already_in_library":null,"recommended_for_you":null,"prepurchase":null,"games":"always","software":true,"dlc_for_you":null,"dlc":null,"recently_viewed":null,"new_on_steam":null,"popular_new_releases":null,"games_not_in_library":true,"only_current_platform":true,"video":true,"localized":true,"virtual_reality":true,"recommended_by_curators":null,"hidden":null},"tabs":null,"specials":null,"more_recommendations":null,"friend_recommendations":null,"curators":{"top_sellers":null,"early_access":true,"games_already_in_library":true,"recommended_for_you":null,"prepurchase":null,"games":"always","software":true,"dlc_for_you":null,"dlc":null,"recently_viewed":null,"new_on_steam":null,"popular_new_releases":null,"games_not_in_library":null,"only_current_platform":true,"video":true,"localized":true,"virtual_reality":true,"recommended_by_curators":null,"hidden":null},"home":{"top_sellers":null,"early_access":true,"games_already_in_library":null,"recommended_for_you":null,"prepurchase":true,"games":null,"software":true,"dlc_for_you":null,"dlc":null,"recently_viewed":null,"new_on_steam":null,"popular_new_releases":null,"games_not_in_library":null,"only_current_platform":null,"video":true,"localized":true,"virtual_reality":true,"recommended_by_curators":null,"hidden":null}},

	InitUserData: function( rgParams )
	{
		try {
			GDynamicStorePage.oSettings = rgParams.oSettings;
		} catch( e ) { OnDynamicStorePageException(e); }
	},

	ItemIDFromCapsule: function( $capsule )
	{
		var unPackageId = $capsule.data('ds-packageid');
		var unBundleId = $capsule.data('ds-bundleid');
		var unAppId = $capsule.data('ds-appid');

		// bundles set package and appids, packages set appids, so start from the outside and work down.
		if ( unBundleId )
			return { bundleid: unBundleId };
		else if ( unPackageId)
			return { packageid: unPackageId };
		else if ( unAppId )
			return { appid: unAppId };

		return null;
	},

	BItemValid: function( item, oShownItems, opts )
	{
		var unAppId = item.appid;

		if( unAppId )
		{
			var rgAppIds = [ unAppId ];
			if( unAppId.toString().indexOf(',') !== -1 )
			{
				rgAppIds = unAppId.toString().split( ',' );
				unAppId = rgAppIds[0];
			}

			for ( var i = 0; i < rgAppIds.length; i++ )
			{
				if ( oShownItems.rgAppIds.indexOf( rgAppIds[i] ) !== -1 )
				{
					return false;
				}
			}

			if ( opts && opts.filter_dlc )
			{
				var rgAppData = GStoreItemData.rgAppData[unAppId];

				// Treat DLC as the base app; so we either show the DLC or the base game; but only one (and whichever is in top position).
				// If the user owns the base game already, only show the DLC
				if ( rgAppData && rgAppData.dlc_for_app )
				{
					if ( !GDynamicStore.BIsAppOwned( rgAppData.dlc_for_app, false ) )
					{
						return false;
					}

					oShownItems.rgAppIds.push( rgAppData.dlc_for_app );
				}
			}

			for ( var i = 0; i < rgAppIds.length; i++ )
				oShownItems.rgAppIds.push( rgAppIds[i] );
		}

		if ( item.packageid )
		{
			if ( oShownItems.rgPackageIds.indexOf( item.packageid ) !== -1 )
				return false;

			oShownItems.rgPackageIds.push( item.packageid );
		}

		if ( item.bundleid )
		{
			if ( oShownItems.rgBundleIds.indexOf( item.bundleid ) !== -1 )
				return false;

			oShownItems.rgBundleIds.push( item.bundleid );
		}

		return true;
	},

	FilterCapsules: function( nMin, nMax, $elElements, $elContainer, rgFilterParams, bFilterDLC )
	{
		// by default we want to filter DLC
		if ( bFilterDLC === undefined )
			bFilterDLC = true;

		// Get a list of appids to filter
		var rgItems = [];
		var oShownItems = { rgAppIds: [], rgPackageIds: [], rgBundleIds: [] };
		var rgValidElements = [];

		// Remove duplicates or DLC from the list
		for( var i = 0; i < $elElements.length; i++ )
		{
			var $capsule = $J( $elElements[i] );
			var item = GDynamicStorePage.ItemIDFromCapsule( $capsule );
			if ( !item )
				continue;

			if ( GDynamicStorePage.BItemValid( item, oShownItems, { filter_dlc: bFilterDLC } ) )
			{
				rgItems.push( item );
				rgValidElements.push( $capsule );
			}
			else
				$capsule.remove();
		}

		// Filter
		var rgFilteredItems = this.FilterItemsForDisplay(
			rgItems, 'home', nMin, nMax, rgFilterParams
		);

		// Now follow filters as long we we can keep 4 items in the capsule
		for( var i = 0; i < rgValidElements.length; i++ )
		{
			var $capsule = rgValidElements[i];
			var item = GDynamicStorePage.ItemIDFromCapsule( $capsule );
			if ( !item )
				continue;

			// Test our filtered list
			var bVisible = false;
			if ( this.GetItemFromList( item, rgFilteredItems ) )
				bVisible = true;

			if( bVisible )
			{
				$capsule.removeClass('hidden');

				if ( $capsule.parent().length )
				{
					$capsule.parent().append( $capsule );
				}
				else
				{
					$J( $elContainer ).append( $capsule );
				}
			}
			else
				$capsule.remove();
		}

		GDynamicStoreHelpers.AddSNRDepthParamsToCapsuleList( $elElements );

		$elElements.parent().trigger('v_contentschanged');

		//if( nCapsules < nMin && $elContainer )
		//	$elContainer.hide();
	},

	GetItemFromList: function( oItem, rgList )
	{
		if( rgList )
		{
			for ( var i = 0; i < rgList.length; i++ )
			{
				if ( oItem.bundleid && rgList[i].bundleid == oItem.bundleid )
				{
					return rgList[i];
				}
				else if ( oItem.packageid && rgList[i].packageid == oItem.packageid )
				{
					return rgList[i];
				}
				else if ( oItem.appid && rgList[i].appid == oItem.appid )
				{
					return rgList[i];
				}
			}
		}
		return null;
	},

	FilterItemsForDisplay: function( rgItems, strSettingsName, cMinItemsToDisplay, cMaxItemsToDisplay, rgAdditionalSettings )
	{
		var Settings = this.oSettings[strSettingsName] || {};
		var ApplicableSettings = this.oApplicableSettings[strSettingsName] || {};

		// Allow sections to have additional, section-specific settings. We'll use jQuery to shallow copy the settings
		// object so we don't pollute future calls.
		if( rgAdditionalSettings )
		{
			Settings = jQuery.extend({}, Settings, rgAdditionalSettings);

			// Ensure our feature is turned on as an applicable setting
			for( var strKey in rgAdditionalSettings )
				rgAdditionalSettings[strKey] = true;

			ApplicableSettings = jQuery.extend({}, ApplicableSettings, rgAdditionalSettings);
		}

		if ( !cMaxItemsToDisplay )
			cMaxItemsToDisplay = cMinItemsToDisplay;

		return GStoreItemData.FilterItemsForDisplay( rgItems, Settings, ApplicableSettings, cMaxItemsToDisplay, cMinItemsToDisplay )
	},

	FilterAndPrioritizeCapsules: function( rgCapsules, strPriorityListKey, strSettingsName, AdditionalSettings, oShownItems, cMinItemsToDisplay )
	{
		// initialize the shown item list
		if ( !oShownItems.rgAppIds )
			$J.extend( oShownItems, { rgAppIds: [], rgPackageIds: [], rgBundleIds: [] }, oShownItems );

		var rgPriorityList = g_rgAppPriorityLists[strPriorityListKey] || [];
		var rgItems = [];
		var rgUnidentifiedCaps = [];

		for ( var i = 0; i < rgCapsules.length; i++ )
		{
			var $capsule = $J( rgCapsules[i] );
			var itemid = GDynamicStorePage.ItemIDFromCapsule( $capsule );

			if ( !itemid || ( itemid.appid && GDynamicStore.BIsSalePageAppID( itemid.appid ) ) )
			{
				// if there's no item associated, preseve it; it's probably a sale page or event
				rgUnidentifiedCaps.push( i );
				continue;
			}
			else if ( !GDynamicStorePage.BItemValid( itemid, oShownItems ) )
			{
				// duplicate
				continue;
			}

			itemid.capsule = $capsule;
			rgItems.push( itemid );
		}

		rgItems =  SortItemListByPriorityList( rgItems, strPriorityListKey );
		var rgItems = GDynamicStorePage.FilterItemsForDisplay( rgItems, strSettingsName, cMinItemsToDisplay, rgItems.length, AdditionalSettings );

		// splce anything we don't have info about back in the list in the same position it was before.
		for ( var i = 0; i < rgUnidentifiedCaps.length; i++ )
		{
			var $capsule = $J( rgCapsules[ rgUnidentifiedCaps[i] ] );
			rgItems.splice( rgUnidentifiedCaps[i], 0, { capsule: $capsule, priority: 1 } );
		}


		return rgItems;
	},

	FilterAndPrioritizeItems: function( rgItems, strPriorityListKey, strSettingsName, AdditionalSettings, oShownItems, cMinItemsToDisplay )
	{
		// initialize the shown item list
		if ( !oShownItems.rgAppIds )
			$J.extend( oShownItems, { rgAppIds: [], rgPackageIds: [], rgBundleIds: [] }, oShownItems );

		// first filter out items that are dupes of ones we've already been asked to list
		var rgItemsNoDupes = [];
		for( var i = 0; i < rgItems.length; i++ )
		{
			if ( GDynamicStorePage.BItemValid( rgItems[i], oShownItems ) )
				rgItemsNoDupes.push( rgItems[i] );
		}
		rgItemsNoDupes = SortItemListByPriorityList( rgItemsNoDupes, strPriorityListKey );
		return GDynamicStorePage.FilterItemsForDisplay( rgItemsNoDupes, strSettingsName, cMinItemsToDisplay, rgItemsNoDupes.length, AdditionalSettings );
	},
};

var g_rgAppPriorityLists = {};
var g_rgAppPriorityListMaps = {};
function InitAppPriorityLists( rgAppPriorityLists )
{
	$J.extend( g_rgAppPriorityLists, rgAppPriorityLists );
}

function GetAppPriorityListMap( strPriorityListName )
{
	if ( !g_rgAppPriorityListMaps[strPriorityListName] )
	{
		var rgAppPriorityList = g_rgAppPriorityLists[strPriorityListName] || [];

		var rgPositionByApp = {};
		for ( var i = 0; i < rgAppPriorityList.length; i++ )
			rgPositionByApp[ ItemKey( rgAppPriorityList[i] ) ] = i;

		g_rgAppPriorityListMaps[strPriorityListName] = rgPositionByApp;
	}

	return g_rgAppPriorityListMaps[strPriorityListName];
}

function ItemKey( rgItem )
{
	if ( rgItem.appid )
		return 'a' + rgItem.appid;
	else if ( rgItem.packageid )
		return 'p' + rgItem.packageid;
	else if ( rgItem.bundleid )
		return 'b' + rgItem.bundleid;

	return 'unknown';
}

function SortItemListByPriorityList( rgItemList, strPriorityListName )
{
	var rgPositionByApp = GetAppPriorityListMap( strPriorityListName );
	if ( !rgPositionByApp )
		return rgItemList.slice();

	/*
	javascript sort is stable (except in IE), so this shouldn't be needed
	for ( var i = 0; i < rgItemList.length; i++ )
	{
		var key = ItemKey( rgItemList[i] );
		if ( key && rgPositionByApp[key] === undefined )
			rgPositionByApp[key] = i + 1000;
	}
	 */

	var rgItemListSorted = rgItemList.slice();
	rgItemListSorted.sort( function( a, b ) {
		var posA = rgPositionByApp[ ItemKey( a ) ];
		var posB = rgPositionByApp[ ItemKey( b ) ];
		return ( posA !== undefined ? posA : 1000 ) - ( posB !== undefined ? posB : 1000 );
	});

	DEBUG_LogItemList( strPriorityListName, rgItemListSorted );

	return rgItemListSorted;
}

function DEBUG_LogItemList( strListName, rgItems )
{
	}

function ShowHowDoDiscoveryQueuesWorkDialog()
{
	$J.get(
		'https://store.steampowered.com/explore/howitworks/',
		{
			l : 'english'
		},
		function( data )
		{
			ShowAlertDialog( 'How does this work?', data );
		}
	);
}

function GetAvatarURL( strHash, strSize )
{
	return "https:\/\/avatars.cloudflare.steamstatic.com\/" + strHash + strSize + '.jpg';
}

function GetScreenshotURL( appid, filename, sizeStr )
{
	if( sizeStr )
		return 'https://cdn.cloudflare.steamstatic.com/steam/' + 'apps/' + appid + '/' + filename.replace('.jpg', sizeStr + '.jpg');

	return 'https://cdn.cloudflare.steamstatic.com/steam/' + 'apps/' + appid + '/' + filename;
}


function UpdatePricesForAdditionalCartDiscount( $Selector, nCartDiscount )
{
	if ( !nCartDiscount )
		return;

	var strSelector = '[data-price-final]';
	var $DynamicElements = [];
	if ( $Selector )
	{
		if ( $Selector.is( strSelector ) )
			$DynamicElements = $Selector;
		else
			$DynamicElements = $Selector.find( strSelector );
	}
	else
	{
		$DynamicElements = $J( strSelector );
	}

	for ( var i = 0; i < $DynamicElements.length; i++ )
	{
		$element = $J($DynamicElements[i]);
		var nFinalPrice = parseInt($element.attr('data-price-final'));
		$element.addClass( 'additional_cart_discount_container' );

		if (!nFinalPrice)
			continue;

		var nToSubtract = Math.min(nFinalPrice, nCartDiscount);
		var bNowFree = (nFinalPrice - nToSubtract) <= 0;

		var strAdditionalDiscountBlock = '<div class="additional_cart_discount_amount">-' + GStoreItemData.fnFormatCurrency(nToSubtract) + '</div>';
		var strFinalPriceBlock = '<div class="additional_cart_discount_final">' + GStoreItemData.fnFormatCurrency(nFinalPrice - nToSubtract) + '</div>';
  		var $additionalDiscount = $J('<div class="additional_cart_discount' + ( bNowFree ? ' NowFree"' : '"' ) + ' data-test="' + nFinalPrice + '">' + strAdditionalDiscountBlock + strFinalPriceBlock + '</div>');
		//var $additionalDiscount = $J('<div class="additional_cart_discount" data-test="' + nFinalPrice + '">' + strAdditionalDiscountBlock + strFinalPriceBlock + '</div>');
		var $basePriceStrikeout = $J('<div class="basePriceStrikeout" />');
		$element.append($basePriceStrikeout);
		$element.append($additionalDiscount);
	}
}


function UpdateStoreBannerForAdditionalCartDiscount( nCartDiscount )
{
	if ( !nCartDiscount )
		return false;

	var strTemplate = ' \
	<div class="placeHolder_lunarSale2019_giftActiveBar">	\
		<div class="lunarSale2019_contentContainer"> \
		<div class="lunar_sale_poinks01"> \
		<div class="lunar_sale_sparkle sparkle01"> \
			<div class="sparkleStar star1"></div> \
			<div class="sparkleStar star2"></div> \
			<div class="sparkleStar star3"></div> \
		</div> \
		</div> \
		<div class="lunar_sale_title"><img src="https://store.cloudflare.steamstatic.com/public/images/promo/lunar2019/lny2019_title_en.png"/></div> \
		<div class="lunar_sale_spacer lunar_leftspacer"></div> \
		<div class="lunar_sale_supersavings_label"><div class="highlight">%header%</div><div class="subtitle">%discount%</div></div> \
		<div class="lunar_sale_spacer lunar_rightspacer">\
		<div class="lunar_sale_poinks02"> \
			<div class="lunar_sale_sparkle sparkle02"> \
				<div class="sparkleStar star1"></div> \
				<div class="sparkleStar star2"></div> \
				<div class="sparkleStar star3"></div> \
			</div> \
		</div> \
		</div> \
		</div> \
	</div> \
	';


	var strAmount = GStoreItemData.fnFormatCurrency( nCartDiscount );
	var strHeader = 'Bonus Savings Mode Active';
	var strDiscount = '%amount% will be taken off your cart!'.replace( '%amount%', strAmount );
	strTemplate = strTemplate.replace( '%header%', strHeader );
	strTemplate = strTemplate.replace( '%discount%', strDiscount );

	$Elements = $J( '[data-cart-banner-spot]' );
	for ( var i = 0; i < $Elements.length; i++ )
	{
		$element = $J( $Elements[i] );
		$element.replaceWith( $J( strTemplate ) );
	}

	return true;
}

function UpdateStoreBannerForPromotionalDiscount( nDiscount, nMinCartAmount, nAvailableUseCount )
{
	if ( !nDiscount )
		return false;

	if ( !nAvailableUseCount )
		return false;

	if ( $J( 'body.events_hub' ).length )
		return false;

	var strTemplate = ' \
	<div id="promo_header_banner" class="placeHolder_summerSale2020_promotionDetailsBar" style="display:none;">	\
		<div class="summerSale2020_contentContainer"> \
		<div class="summersale2020_supersavings_title">%title%</div> \
		<div class="summersale2020_supersavings_label"><div class="highlight">%header%</div><div class="subtitle">%discount%</div></div> \
		</div> \
		</div> \
	</div> \
	';


	var strAmount = GStoreItemData.fnFormatCurrency( nDiscount, true );
	var strMinAmount = GStoreItemData.fnFormatCurrency( nMinCartAmount, true );

	var strTitle = 'Road Trip Special';
	var strHeader = 'Save an additional %amount% on a purchase of %min_amount%'.replace( '%amount%', strAmount ).replace( '%min_amount%', strMinAmount );
	var strDiscount = 'Discount applied at checkout';
	strTemplate = strTemplate.replace( '%title%', strTitle );
	strTemplate = strTemplate.replace( '%header%', strHeader );
	strTemplate = strTemplate.replace( '%discount%', strDiscount );

	$Elements = $J( '[data-cart-banner-spot]' );
	for ( var i = 0; i < $Elements.length; i++ )
	{
		$element = $J( $Elements[i] );
		$element.replaceWith( $J( strTemplate ) );
		$J( '#promo_header_banner' ).slideDown( 500 );
	}

	return true;
}


