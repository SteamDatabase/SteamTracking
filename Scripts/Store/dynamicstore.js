
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

GDynamicStore = {

	m_bLoadComplete: false,
	s_rgWishlist: {},
	s_rgOwnedPackages: {},
	s_rgOwnedApps: {},
	s_rgPackagesInCart: {},
	s_rgAppsInCart: {},
	s_rgRecommendedTags: [],

	s_rgIgnoredApps: {},
	s_rgIgnoredPackages: {},

	s_rgPersonalizedBundleData: {},
	s_rgPlaytestData: {},

	s_rgfnOnReadyCallbacks: [],

	s_bUserOnMacOS: false,
	s_bUserOnLinux: false,

	Init: function( accountid, bForceRefresh, strOS )
	{

		/* 'windows', 'macos', 'linux', or 'unknown' */
		if ( strOS == 'mac' )
			GDynamicStore.s_bUserOnMacOS = true;
		else if ( strOS == 'linux' )
			GDynamicStore.s_bUserOnLinux = true;

		var fnRunOnLoadCallbacks = function() {
			GDynamicStore.m_bLoadComplete = true;
			GDynamicStore.DecorateDynamicItems();
			GDynamicStore.PopulateRecommendedTagList();
			GDynamicStore.InitAppearHandler();

			for ( var i = 0; i < GDynamicStore.s_rgfnOnReadyCallbacks.length; i++ )
				GDynamicStore.s_rgfnOnReadyCallbacks[i]();
			GDynamicStore.s_rgfnOnReadyCallbacks = null;
		};

		if ( accountid )
		{
			if ( bForceRefresh )
				GDynamicStore.InvalidateCache();

			var url = 'https://store.steampowered.com/dynamicstore/userdata/?id=' + accountid;

			var unUserdataVersion = WebStorage.GetLocal( 'unUserdataVersion', true );
			if ( unUserdataVersion )
				url += '&v=' + parseInt( unUserdataVersion );

			$J.get( url ).done( function( data ) {
				var fnEnsureObject = function ( rgMaybeArray ) {
					return ( !rgMaybeArray || ( typeof rgMaybeArray.length != 'undefined' && rgMaybeArray.length == 0 ) ) ? {} : rgMaybeArray;
				};
				var fnConvertToMap = function ( rgData ) {
					var out = {};
					if ( rgData.length )
					{
						for ( var i = 0; i < rgData.length; i++ )
							out[ rgData[i] ] = true;
					}
					return out;
				};
				GDynamicStore.s_rgWishlist = fnConvertToMap( data.rgWishlist );
				GDynamicStore.s_rgOwnedPackages = fnConvertToMap( data.rgOwnedPackages );
				GDynamicStore.s_rgOwnedApps = fnConvertToMap( data.rgOwnedApps );
				GDynamicStore.s_rgPackagesInCart = fnConvertToMap( data.rgPackagesInCart );
				GDynamicStore.s_rgAppsInCart = fnConvertToMap( data.rgAppsInCart );
				GDynamicStore.s_rgRecommendedTags = data.rgRecommendedTags || [];
				GDynamicStore.s_rgIgnoredApps = fnConvertToMap( data.rgIgnoredApps );
				GDynamicStore.s_rgIgnoredPackages = fnConvertToMap( data.rgIgnoredPackages );
				if( data.rgPlaytestData )
				{
					GDynamicStore.s_rgPlaytestData = data.rgPlaytestData;

					GDynamicStore.s_rgPlaytestData.available_tests = GDynamicStore.s_rgPlaytestData.available_tests;
					GDynamicStore.s_rgPlaytestData.previous_active_tests = fnConvertToMap( GDynamicStore.s_rgPlaytestData.previous_active_tests );
				}

			}).always( function() { $J(fnRunOnLoadCallbacks); } );
		}
		else
		{
			// no data to load, just run the callbacks now
			$J( fnRunOnLoadCallbacks );
		}
	},

	s_strAppearSelector: '[data-ds-appid], [data-ds-packageid]',

	InitAppearHandler: function()
	{
		$J(document.body).on( 'appear', GDynamicStore.s_strAppearSelector, function(event) {
			var $Elem = $J( this );

			// scriptaculous adds Effect.Appear as appear() to the HTMLElement prototype.  jquery's trigger
			//	behavior will call this method if we don't stop it with preventDefault
			event.preventDefault();

			// check if we are already tracking this element
			if ( $Elem.data( 'trackedForImpressions' ) )
			{
				return;
			}
			$Elem.data( 'trackedForImpressions', true );

			// must have appids
			var strAppIDs = $Elem.data('dsAppid');
			if ( strAppIDs.length == 0 )
			{
				return;
			}

			var snr = GetElemSNR( $Elem );
			if ( !snr )
			{
				return;
			}

			// these are handled manually, so don't add the impression here
			if ( $Elem.hasClass( 'cluster_capsule' ) || $Elem.hasClass( 'carousel_cap') )
			{
				return;
			}

			GDynamicStore.AddImpressionFromDynamicItem( $Elem );
		} );

		// find our horizontal scrollers and add tracking to them
		$J.force_appear_on_scroll( '.store_horizontal_autoslider' );


		$J.force_appear();
	},

	AddImpressionFromDynamicItem: function( $Elem )
	{
		if ( $Elem.hasClass( 'app_impression_tracked' ) )
		{
			return;
		}
		$Elem.addClass( 'app_impression_tracked' );

		var strImpressions = V_GetCookie( "app_impressions" );
		var rgImpressions = strImpressions && strImpressions.length != 0 ? strImpressions.split( "|" ) : [];

		// commas not allowed in cookie value
		var strAppIDs = $Elem.data('dsAppid');
		if ( !strAppIDs )
		{
			return;
		}
		if ( typeof strAppIDs == 'string' && strAppIDs.indexOf( ',' ) >= 0 )
		{
			strAppIDs = strAppIDs.replace(/,/g , ":");
		}
		var snr = GetElemSNR( $Elem );
		if ( !snr )
		{
			return;
		}

		var strImpressionData = strAppIDs + '@' + snr;
		rgImpressions.push( strImpressionData );

		V_SetCookie( "app_impressions", rgImpressions.join( '|' ) );
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
			V_SetCookie( "app_impressions", rgImpressions.join( '|' ) );
		}
	},

	HandleClusterChange: function( cluster ) {
		$J.force_appear();
		$ScrollingContainer = $J( cluster.elScrollArea );
		$RealContainer = $ScrollingContainer.parent();
		var capsules = $ScrollingContainer.find( '.cluster_capsule' );
		if ( capsules.length != 0 && cluster.nCurCap < capsules.length )
		{
			var $element = $J( capsules[cluster.nCurCap] );
			if ( $element.is(':appeared') )
			{
				GDynamicStore.AddImpressionFromDynamicItem( $element );
			}
		}
	},

	HandleCarouselChange: function( targetid, curPos, pageSize ) {
		var $ScrollingContainer = $J( "#" + targetid );
		var capsules = $ScrollingContainer.find( '.recommendation_carousel_item' );
		var idx = (curPos * pageSize);
		if ( capsules.length != 0 && idx < capsules.length )
		{
			for ( var i = idx; i < capsules.length && i < ( idx + pageSize); ++i )
			{
				var $element = $J( capsules[i] );
				//if ( $element.is(':appeared') )
				{
					GDynamicStore.AddImpressionFromDynamicItem( $element );
				}
			}
		}
	},

	OnReady: function( fnCallback )
	{
		if ( GDynamicStore.m_bLoadComplete )
			fnCallback();
		else
			GDynamicStore.s_rgfnOnReadyCallbacks.push( fnCallback );
	},

	DecorateDynamicItems: function( $Selector ) {

		if ( !GDynamicStore.m_bLoadComplete )
		{
			GDynamicStore.OnReady( function() { GDynamicStore.DecorateDynamicItems( $Selector ) } );
			return;
		}

		// locate elements with dynamic store data
		var strSelector = '[data-ds-appid], [data-ds-packageid], [data-ds-bundleid]';

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

			if ( $El.data('dsInstrumented') )
				return;

			$El.data('dsInstrumented', true);

			var bOwned = false;
			var bWanted = false;
			var bInCart = false;

			var unBundleID = $El.data('dsBundleid');
			var unPackageID = $El.data('dsPackageid');
			var strAppIDs = $El.data('dsAppid');

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

					$El.appear();
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

				$El.appear();
			}

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

				if ( bInCart )
				{
					$El.addClass( 'ds_flagged ds_incart' );
					$El.append( '<div class="ds_flag ds_incart_flag">IN CART&nbsp;&nbsp;</div>');
				}
			}
		});


		// make sure that the elements are registered as "appearing" if necessary
		$J.force_appear();
	},

	GetPersonalizedBundleData: function( unBundleID, rgPageBundleData )
	{
		if ( !GDynamicStore.s_rgPersonalizedBundleData[unBundleID] )
		{
			if ( !GStoreItemData.rgBundleData[ unBundleID ] && rgPageBundleData && rgPageBundleData.m_rgItems )
			{
				GStoreItemData.rgBundleData[ unBundleID ] = rgPageBundleData;
			}

			var Bundle = GStoreItemData.rgBundleData[ unBundleID ];
			if ( !Bundle )
				return null;

			var BundleForUser = {
				m_nDiscountPct: Bundle.m_nDiscountPct,
				m_bMustPurchaseAsSet: Bundle.m_bMustPurchaseAsSet,
				m_cTotalItemsInBundle: Bundle.m_rgItems.length,
				m_cUserItemsInBundle: 0,
				m_nPackageBasePriceInCentsWithBundleDiscount: 0,
				m_nFinalPriceInCents: 0,
				m_nFinalPriceInCentsWithBundleDiscount: 0,
				m_rgBundleItems: []
			};

			for ( var i = 0; i < Bundle.m_rgItems.length; i++ )
			{
				var BundleItem = Bundle.m_rgItems[i];
				if ( GDynamicStore.s_rgOwnedPackages[ BundleItem.m_nPackageID ] )
					continue;

				if ( BundleItem.m_rgIncludedAppIDs.length )
				{
					var bAllAppsOwned = true;
					for ( var iApp = 0; iApp < BundleItem.m_rgIncludedAppIDs.length; iApp++ )
					{
						if ( !GDynamicStore.s_rgOwnedApps[ BundleItem.m_rgIncludedAppIDs[iApp] ] )
						{
							bAllAppsOwned = false;
							break;
						}
					}

					if ( bAllAppsOwned )
						continue;
				}

				BundleForUser.m_cUserItemsInBundle++;
				BundleForUser.m_nPackageBasePriceInCentsWithBundleDiscount += BundleItem.m_nBasePriceInCentsWithBundleDiscount;
				BundleForUser.m_nFinalPriceInCents += BundleItem.m_nFinalPriceInCents;
				BundleForUser.m_nFinalPriceInCentsWithBundleDiscount += BundleItem.m_nFinalPriceWithBundleDiscount;
				BundleForUser.m_rgBundleItems.push( BundleItem );
			}

			GDynamicStore.s_rgPersonalizedBundleData[ unBundleID ] = BundleForUser;
		}

		return GDynamicStore.s_rgPersonalizedBundleData[ unBundleID ];
	},

	UpdateDynamicBundleElements: function( Bundle, $El )
	{

		var $DiscountBlocks = $El.find('.discount_block');

		if ( !Bundle.m_rgBundleItems.length || ( Bundle.m_bMustPurchaseAsSet && Bundle.m_cUserItemsInBundle < Bundle.m_cTotalItemsInBundle ) )
		{
			$DiscountBlocks.hide();

			var $CartBtn = $El.find('.btn_addtocart:not(.btn_packageinfo)' ).children();

			var strTooltip = 'This bundle is not available for purchase on your account since you already have all included items.';
			if ( Bundle.m_bMustPurchaseAsSet )
				strTooltip ='This offer is only available when buying all %s items at the same time.'.replace( /%s/, Bundle.m_cTotalItemsInBundle );

			$CartBtn.addClass('btn_disabled' ).attr( 'href', 'javascript:void(0)' ).data('store-tooltip', strTooltip );
			$CartBtn.parent().css( 'background', '#000000' );
			BindStoreTooltip( $CartBtn );
		}
		else if ( !Bundle.m_bMustPurchaseAsSet )
		{
			var bShowDiscountPct = Bundle.m_nFinalPriceInCentsWithBundleDiscount < Bundle.m_nPackageBasePriceInCentsWithBundleDiscount;
			var strFormattedFinalPrice = GStoreItemData.fnFormatCurrency( Bundle.m_nFinalPriceInCentsWithBundleDiscount );

			$DiscountBlocks.find('.discount_original_price' ).text( GStoreItemData.fnFormatCurrency( Bundle.m_nPackageBasePriceInCentsWithBundleDiscount ) );
			if ( !bShowDiscountPct )
			{
				$DiscountBlocks.addClass('no_discount');
				$DiscountBlocks.find('.discount_final_price' ).addClass('your_price' ).empty().append($J('<div/>', {'class': 'your_price_label'} ).text('Your Price:'), $J('<div/>' ).text( strFormattedFinalPrice ) );
			}
			else
			{
				var nDiscountPct = Math.round( ( Bundle.m_nPackageBasePriceInCentsWithBundleDiscount - Bundle.m_nFinalPriceInCentsWithBundleDiscount ) / Bundle.m_nPackageBasePriceInCentsWithBundleDiscount * 100 );
				$DiscountBlocks.find('.discount_pct' ).text( '-' + nDiscountPct + '%' );
				$DiscountBlocks.find('.discount_final_price' ).text( strFormattedFinalPrice );
			}
		}

		var $Description = $El.find('.package_contents');
		if ( $Description.length && $El.hasClass('dynamic_bundle_description') && !Bundle.m_bMustPurchaseAsSet )
			GDynamicStore.BuildBundleDescription( Bundle, $Description );
	},

	BuildBundleDescription: function( Bundle, $Description )
	{
		if ( Bundle.m_cUserItemsInBundle == 0 )
		{
			// already own everything
			$Description.html( '<b>Collection Complete!</b> %1$s/%2$s items from this collection are already in your library.'.replace( '%1$s', Bundle.m_cTotalItemsInBundle ).replace( '%2$s', Bundle.m_cTotalItemsInBundle ) );
		}
		else if ( Bundle.m_cUserItemsInBundle < Bundle.m_cTotalItemsInBundle )
		{
			// own some but not all.
			$Description.html( '<div>%1$s/%2$s items from this bundle are already in your library.</div>'.replace( '%1$s', Bundle.m_cTotalItemsInBundle - Bundle.m_cUserItemsInBundle ).replace( '%2$s', Bundle.m_cTotalItemsInBundle ) );
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
			rgItemsWithCaps.slice( 0, 9 );

			// if there's more than 5 items, we overlap them a little bit on the display
			var bNeedToCollapse = rgItemsWithCaps.length > 5;
			var $BundleContentsCtn = $J('<div/>', {'class': 'bundle_contents_preview'} );
			if ( bNeedToCollapse )
				$BundleContentsCtn.addClass( 'collapsed' );

			var $BundleContentsPosition = $J('<div/>', {'class': 'bundle_contents_preview_position'} );
			for ( var i = 0; i < rgItemsWithCaps.length; i++ )
			{
				var rgLinkParams = { 'class': 'bundle_contents_preview_item ds_collapse_flag' };
				var Item = GStoreItemData.GetCapParams( 'bundle_component_preview', null, rgItemsWithCaps[i], rgLinkParams );
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
		for( var i = 0; i < GDynamicStore.s_rgRecommendedTags.length && i < 5; i++ )
		{
			var tag = GDynamicStore.s_rgRecommendedTags[i];
			var $Link = $J('<a/>', {'class': 'popup_menu_item', 'href': 'http://store.steampowered.com/tag/en/' + encodeURIComponent( tag.name ) })
			$Link.text( tag.name );
			$Element.append( $Link );
		}
	},

	InvalidateCache: function()
	{
		WebStorage.SetLocal( 'unUserdataVersion', parseInt( WebStorage.GetLocal( 'unUserdataVersion', true ) || 0 ) + 1, true );
	},

	BIsAppOwned: function( appid )
	{
		return GDynamicStore.s_rgOwnedApps[appid] ? true : false;
	},

	BIsAppIgnored: function( appid )
	{
		return GDynamicStore.s_rgIgnoredApps[appid] ? true: false;
	},

	BIsPackageIgnored: function( packageid )
	{
		return GDynamicStore.s_rgIgnoredPackages[packageid] ? true: false;
	},

	GetAvailablePlaytestForApp: function( appid )
	{
		if( !GDynamicStore.s_rgPlaytestData || !GDynamicStore.s_rgPlaytestData.available_tests )
			return false;

		for( var i=0; i<GDynamicStore.s_rgPlaytestData.available_tests.length; i++)
		{
			if( GDynamicStore.s_rgPlaytestData.available_tests[i].appid == appid )
				return GDynamicStore.s_rgPlaytestData.available_tests[i].testid;
		}

		return false;
	},

	BIsPlaytesting: function( testid )
	{
		return GDynamicStore.s_rgPlaytestData.current_test == testid ? true: false;
	}
};

GStoreItemData = {

	rgAppData: {},
	rgPackageData: {},
	rgBundleData: {},
	rgNavParams: {},
	fnFormatCurrency: function( nValueInCents, bWholeUnitsOnly ) { return v_numberformat( nValueInCents / 100 ); },

	AddStoreItemData: function ( rgApps, rgPackages )
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
					GStoreItemData.MergeStoreItemData( GStoreItemData.rgPackageData[packageid], rgPackageData[packageid] );
			}
		}
	},

	AddBundleData: function( rgBundles )
	{
		if ( rgBundles && typeof rgBundles.length == 'undefined' )
		{
			for ( var bundleid in rgBundles )
			{
				GStoreItemData.rgBundleData[bundleid] = rgBundles[bundleid];
			}
		}
	},

	SetCurrencyFormatter: function( fn )
	{
		GStoreItemData.fnFormatCurrency = fn;
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

	AddNavEventParamsToURL: function( strURL, strFeatureContext, nDepth )
	{
		if ( strFeatureContext && GStoreItemData.rgNavParams[strFeatureContext] )
		{
			var strNavParam = GStoreItemData.rgNavParams[strFeatureContext];
			if ( nDepth )
				strNavParam += '_' + parseInt( nDepth );

			strURL += ( strURL.indexOf( '?' ) != -1 ? '&' : '?' ) + 'snr=' + strNavParam;
		}
		return strURL;
	},

	GetAppURL: function( unAppID, strFeatureContext, nDepth )
	{
		return GStoreItemData.AddNavEventParamsToURL( 'http://store.steampowered.com/app/' + unAppID + '/', strFeatureContext, nDepth )
	},

	GetPackageURL: function( unPackageID, strFeatureContext, nDepth )
	{
		return GStoreItemData.AddNavEventParamsToURL( 'http://store.steampowered.com/sub/' + unPackageID + '/', strFeatureContext, nDepth )
	},

	GetHoverParams: function ( unAppID, unPackageID )
	{
		var hoverparams = unAppID ? { type: 'app', id: unAppID } : { type: 'sub', id: unPackageID };
		hoverparams.v6 = 1;
		return hoverparams;
	},

	BindHoverEvents: function( $Element, unAppID, unPackageID )
	{
		$Element.mouseenter( function( event ) {
			GameHover( this, event, $J('#global_hover'), GStoreItemData.GetHoverParams( unAppID, unPackageID ) );
		}).mouseleave( function( event ) {
			HideGameHover( this, event, $J('#global_hover') );
		});
	},

	GetCapParams: function( strFeatureContext, unAppID, unPackageID, params, nDepth )
	{
		var rgItemData = ( unAppID ? GStoreItemData.rgAppData[ unAppID] : GStoreItemData.rgPackageData[ unPackageID ] );

		if ( !rgItemData )
			return null;

		if ( !unAppID && rgItemData['appids'] && rgItemData['appids'].length == 1 )
		{
			unAppID = rgItemData['appids'][0];
		}

		if ( unAppID )
		{
			params['data-ds-appid'] = unAppID;
			params['href'] = GStoreItemData.GetAppURL( unAppID, strFeatureContext, nDepth );
		}
		else
		{
			params['data-ds-packageid'] = unPackageID;
			params['href'] = GStoreItemData.GetPackageURL( unPackageID, strFeatureContext, nDepth );
			if ( rgItemData['appids'] )
			{
				params['data-ds-appid'] = rgItemData['appids'].join( ',' );
			}
		}

		return rgItemData;
	},

	BuildSupportedPlatformIcon: function( rgItemData )
	{
		var strHTML = '';
		var nPlatforms = 0;

		if ( rgItemData.video )
			return '<span class="platform_img streamingvideo"></span>';

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

		return strHTML + ( nPlatforms > 1 ? '<span class="platform_img steamplay"></span>' : '' );
	},

	// filtering
	FilterItemsForDisplay: function( rgItems, Settings, ApplicableSettings, cMaxItemsToDisplay, cMinItemsToDisplay )
	{
		var rgGoodItems = [], rgOtherItems = [], rgStrictItems = [];

		if ( !cMaxItemsToDisplay )
			cMaxItemsToDisplay = rgItems.length;

		for ( var i = 0; i < rgItems.length; i++ )
		{
			var oItem = rgItems[i];
			var unAppID, unPackageID;
			if ( oItem instanceof Object )
			{
				if ( oItem.appid )
					unAppID = oItem.appid;
				else if ( oItem.packageid )
					unPackageID = oItem.packageid;
			}

			if ( unAppID )
			{
				if ( GStoreItemData.BAppPassesFilters( unAppID, Settings, ApplicableSettings, true ) )
					rgStrictItems.push(oItem);
				else if ( GStoreItemData.BAppPassesFilters( unAppID, Settings, ApplicableSettings ) )
					rgGoodItems.push(oItem);
				else
					rgOtherItems.push( oItem );
			}
			else if ( unPackageID )
			{
				if ( GStoreItemData.BPackagePassesFilters( unPackageID, Settings, ApplicableSettings, true ) )
					rgStrictItems.push( oItem );
				else if ( GStoreItemData.BPackagePassesFilters( unPackageID, Settings, ApplicableSettings ) )
					rgGoodItems.push( oItem );
				else
					rgOtherItems.push( oItem );
			}

			if ( rgStrictItems.length >= cMaxItemsToDisplay)
				break;
		}

		if ( cMinItemsToDisplay )
		{
			for ( i = 0; rgStrictItems.length < cMinItemsToDisplay && i < rgGoodItems.length; i++ )
				rgStrictItems.push( rgGoodItems[i] );
		}

		return rgStrictItems;
	},


	BItemPassesFilters: function( rgItemData, Settings, ApplicableSettings )
	{
		if ( ApplicableSettings.only_current_platform && Settings.only_current_platform )
		{
			if ( GDynamicStore.s_bUserOnMacOS && !rgItemData.os_macos )
				return false;

			if ( GDynamicStore.s_bUserOnLinux && !rgItemData.os_linux )
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
			( ApplicableSettings.dlc_for_you && ( !Settings.dlc_for_you || !rgAppData.dlc_for_app || !GDynamicStore.BIsAppOwned( rgAppData.dlc_for_app ) ) ) ) )
			return false;

		if ( ApplicableSettings.games_already_in_library && !Settings.games_already_in_library && GDynamicStore.BIsAppOwned( appid ) )
			return false;

		if ( ApplicableSettings.games_not_in_library && !Settings.games_not_in_library && !GDynamicStore.BIsAppOwned( appid ) )
			return false;

		if ( rgAppData.video && ApplicableSettings.video && !Settings.video )
			return false;

		if ( bStrict && !rgAppData.localized && ApplicableSettings.localized && Settings.localized )
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

		if ( GDynamicStore.BIsPackageIgnored( packageid ) )
			return false;

		return true;
	}

};

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

