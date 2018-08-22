
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

	s_rgCurators: {},
	s_rgCurations: {},
	s_rgCreatorsFollowed: {},
	s_rgCreatorsIgnored: {},

	s_preferences: {},
	s_rgExcludedTags: {},
	s_rgExcludedDescIDs: {},

	s_rgPersonalizedBundleData: {},
	s_rgPlaytestData: {},

	s_rgfnOnReadyCallbacks: [],

	s_rgDisplayedApps: [],

	s_bUserOnMacOS: false,
	s_bUserOnLinux: false,
	s_bUserOnWindows: false,


	s_ImpressionTracker: false,

	Init: function( accountid, bForceRefresh, strOS )
	{

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

		var fnRunOnLoadCallbacks = function() {
			GDynamicStore.m_bLoadComplete = true;
			GDynamicStore.DecorateDynamicItems();
			GDynamicStore.PopulateRecommendedTagList();
			GDynamicStore.InitAppearHandler();

			for ( var i = 0; i < GDynamicStore.s_rgfnOnReadyCallbacks.length; i++ )
				GDynamicStore.s_rgfnOnReadyCallbacks[i]();
			GDynamicStore.s_rgfnOnReadyCallbacks = null;
		};

		try {
			this.RemoveSNRFromURL();
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
				GDynamicStore.s_rgPackagesInCart = fnConvertToMap( data.rgPackagesInCart );
				GDynamicStore.s_rgAppsInCart = fnConvertToMap( data.rgAppsInCart );
				GDynamicStore.s_rgRecommendedTags = data.rgRecommendedTags || [];
				GDynamicStore.s_rgIgnoredApps = fnConvertToMap( data.rgIgnoredApps );
				GDynamicStore.s_rgIgnoredPackages = fnConvertToMap( data.rgIgnoredPackages );
				GDynamicStore.s_rgCurators = data.rgCurators || {};
				GDynamicStore.s_rgCurations = data.rgCurations || {};
				GDynamicStore.s_rgCreatorsFollowed = fnConvertToMap( data.rgCreatorsFollowed );
				GDynamicStore.s_rgCreatorsIgnored = fnConvertToMap( data.rgCreatorsIgnored );
				if( data.rgPlaytestData )
				{
					GDynamicStore.s_rgPlaytestData = data.rgPlaytestData;

					GDynamicStore.s_rgPlaytestData.available_tests = GDynamicStore.s_rgPlaytestData.available_tests;
					GDynamicStore.s_rgPlaytestData.previous_active_tests = fnConvertToMap( GDynamicStore.s_rgPlaytestData.previous_active_tests );
				}

				GDynamicStore.s_preferences = data.preferences || {};
				if ( data.rgExcludedTags && data.rgExcludedTags.length > 0 )
				{
					for ( var i = i = 0; i < data.rgExcludedTags.length; ++i )
					{
						var tag = data.rgExcludedTags[i];
						GDynamicStore.s_rgExcludedTags[tag.tagid] = tag.name;
					}
				}
				if ( data.rgExcludedContentDescriptorIDs && data.rgExcludedContentDescriptorIDs.length > 0 )
				{
					for ( var i = i = 0; i < data.rgExcludedContentDescriptorIDs.length; ++i )
					{
						var id = data.rgExcludedContentDescriptorIDs[i];
						GDynamicStore.s_rgExcludedDescIDs[id] = id;
					}
				}

			}).always( function() { $J(fnRunOnLoadCallbacks); } );
		}
		else
		{
			// no data to load, just run the callbacks now
			$J( fnRunOnLoadCallbacks );
		}
	},

	RemoveSNRFromURL: function()
	{
		if ( !window.history || !window.history.replaceState || !window.location.search )
			return;

		// find snr param
		var strSearch = window.location.search;
		if ( strSearch.indexOf( '?' ) == 0 )
			strSearch = strSearch.slice( 1 );

		var rgParams = strSearch.split( '&' );
		var iParam = -1;
		for ( var i = 0; i < rgParams.length; i++ )
		{
			var strParam = rgParams[i];
			if (strParam.indexOf('snr=') == 0)
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

	MarkAppDisplayed: function( rgDisplayList )
	{
		for( var key in rgDisplayList )
			if( rgDisplayList[key].appid )
				GDynamicStore.s_rgDisplayedApps.push( rgDisplayList[key].appid )

	},

	MarkAppIDsAsDisplayed: function( rgAppIDs )
	{
		for ( var i = 0; i < rgAppIDs.length; i++ )
			GDynamicStore.s_rgDisplayedApps.push( rgAppIDs[i] );
	},

	HandleClusterChange: function( cluster ) {
		GDynamicStore.s_ImpressionTracker.CheckVisibility();
		var $ScrollingContainer = $J( cluster.elScrollArea );
		var $RealContainer = $ScrollingContainer.parent();
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
				else if ( GDynamicStore.s_rgIgnoredPackages[unPackageID] )
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
				else if ( GDynamicStore.s_rgIgnoredApps[unAppID] )
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
					$El.append( '<div class="ds_flag ds_ignored_flag">NOT INTERESTED&nbsp;&nbsp;</div>');
				}

				if ( bInCart )
				{
					$El.addClass( 'ds_flagged ds_incart' );
					$El.append( '<div class="ds_flag ds_incart_flag">IN CART&nbsp;&nbsp;</div>');
				}

				if ( rgExcludedContentDescriptorIDs.length != 0 )
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
					$elMenu.v_tooltip ( {
						'tooltipClass': 'ds_options_tooltip',
						'location': 'bottom left',
						'offsetY': -20,
						'useClickEvent': true,
						'useMouseEnterEvent': false,
						func: GDynamicStore.CapsuleSettingsMenu
					} );

					$El.append ( $elMenu );
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
						GDynamicStore.ModifyWishlist ( rgAppIds[ i ], false, false, function(){
							// Remove the flag if we failed.
							$elSource.removeClass( 'ds_wishlist ds_flagged' );
							$J('.ds_flag.ds_wishlist_flag', $elSource).remove();
						} );

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
						GDynamicStore.ModifyWishlist ( rgAppIds[ i ], true, false, function(){
							// Add the flag back if we failed for some reason
							$elSource.addClass( 'ds_flagged ds_wishlist' );
							$elSource.append( '<div class="ds_flag ds_wishlist_flag">ON WISHLIST&nbsp;&nbsp;</div>');

						} );

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
					$elSource.append( '<div class="ds_flag ds_ignored_flag">NOT INTERESTED&nbsp;&nbsp;</div>');
					for( var i=0; i<rgAppIds.length; i++ )
						GDynamicStore.ModifyIgnoredApp ( $elSource, rgAppIds[ i ], false );

					return false;
				};
				var strText = "Not Interested";

			}
			else
			{

				var fnClick = function ()
				{
					$elSource.removeClass('ds_flagged ds_ignored');
					$J('.ds_flag.ds_ignored_flag', $elSource).remove();
					for( var i=0; i<rgAppIds.length; i++ )
						GDynamicStore.ModifyIgnoredApp ( $elSource, rgAppIds[ i ], true );

					return false;
				};
				var strText = "Not Interested";
			}


			var $elNotInterested = $J ( '<div/>' ).click ( fnClick ).text ( strText ).addClass( 'option' );
			$El.append($elNotInterested);


			var $elPreferences = $J ( '<a/>' ).attr('href', 'https://store.steampowered.com/account/preferences' ).text ( "Preferences" ).addClass( 'option' );
			$El.append($elPreferences);


		}
	},

	ModifyWishlist: function( appid, bRemove, fnOnSuccess, fnOnFail )
	{
		var url = 'https://store.steampowered.com/api/addtowishlist';
		GDynamicStore.s_rgWishlist[appid] = !bRemove;

		if( bRemove )
			url = 'https://store.steampowered.com/api/removefromwishlist';


		$J.post( url, {sessionid: g_sessionID, appid: appid} )
			.done( function( data ) {
				if( fnOnSuccess )
					fnOnSuccess( appid );
				GDynamicStore.InvalidateCache();
			}).fail( function() {
				if( fnOnFail )
					fnOnFail( appid );
			GDynamicStore.s_rgWishlist[appid] = false;
		});
	},

	ModifyIgnoredApp: function( $elSource, appid, bRemove, fnOnSuccess, fnOnFail )
	{
		GDynamicStore.s_rgIgnoredApps[appid] = !bRemove;

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
			GDynamicStore.s_rgIgnoredApps[appid] = false;
		});
	},

	ModifyIgnoredPackage: function( packageid, bRemove, fnOnSuccess, fnOnFail )
	{
		GDynamicStore.s_rgIgnoredPackages[appid] = !bRemove;
		$J.post( 'https://store.steampowered.com/recommended/ignorerecommendation/', {
			sessionid: g_sessionID,
			subid: packageid,
			remove: bRemove
		}).done( function() {
			if( fnOnSuccess )
				fnOnSuccess( appid );
			GDynamicStore.InvalidateCache();
		}).fail( function() {
			if( fnOnFail )
				fnOnFail( appid );
			GDynamicStore.s_rgIgnoredPackages[appid] = false;
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
					if ( GDynamicStore.BAreAllAppsOwned( BundleItem.m_rgIncludedAppIDs ) )
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

		var $DiscountBlocks = $El.find('.discount_block');

		if ( !Bundle.m_bIsCommercial && ( !Bundle.m_rgBundleItems.length || ( Bundle.m_bMustPurchaseAsSet && Bundle.m_cUserItemsInBundle < Bundle.m_cTotalItemsInBundle ) ) )
		{

			var $CartBtn = $El.find('.btn_addtocart:not(.btn_packageinfo)' ).children();

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
				$DiscountBlocks.find('.discount_pct' ).text( '-' + nDiscountPct + '%' );
				$DiscountBlocks.find('.discount_final_price' ).removeClass('your_price').text( strFormattedFinalPrice );
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
				var rgLinkParams = { 'class': 'bundle_contents_preview_item ds_collapse_flag' };
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
		for( var i = 0; i < GDynamicStore.s_rgRecommendedTags.length && i < 5; i++ )
		{
			var tag = GDynamicStore.s_rgRecommendedTags[i];
							var $Link = $J('<a/>', {'class': 'popup_menu_item', 'href': 'https://store.steampowered.com/tags/en/' + encodeURIComponent( tag.name ) });
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

	BIsPackageOwned: function( packageid )
	{
		return GDynamicStore.s_rgOwnedPackages[packageid] ? true : false;
	},

	BIsAppIgnored: function( appid )
	{
		return GDynamicStore.s_rgIgnoredApps[appid] ? true: false;
	},

	GetIgnoredAppCount: function( )
	{
		return Object.keys(GDynamicStore.s_rgIgnoredApps).length;
	},

	BIsFilteredByPreferences: function( $e )
	{
		if ( $e.data( 'dsHasAdultContentSex' ) && GDynamicStore.s_preferences['hide_adult_content_sex'] )
		{
			return true;
		}
		if ( $e.data( 'dsHasAdultContentViolence' ) && GDynamicStore.s_preferences['hide_adult_content_violence'] )
		{
			return true;
		}
		return false;
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
		return GDynamicStore.s_rgIgnoredPackages[packageid] ? true: false;
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

	BAreAllAppsOwned: function( rgAppIds )
	{
		for ( var i = 0; i < rgAppIds.length; i++ )
		{
			if ( !GDynamicStore.s_rgOwnedApps[rgAppIds[i]] )
				return false;
		}

		return true;
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
	fnFormatCurrency: function( nValueInCents ) { return v_numberformat( nValueInCents / 100 ); },
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
					GStoreItemData.MergeStoreItemData( GStoreItemData.rgPackageData[packageid], rgPackageData[packageid] );
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
		if ( strFeatureContext && GStoreItemData.rgNavParams[strFeatureContext] )
		{
			var strNavParam = GStoreItemData.rgNavParams[strFeatureContext];
			if ( nDepth )
				strNavParam += '_' + parseInt( nDepth );

			strURL += ( strURL.indexOf( '?' ) != -1 ? '&' : '?' ) + 'snr=' + strNavParam;
			if( strClanParam )
				strURL += '&' + strClanParam;
		}
		else if( strClanParam )
		{
			strURL += ( strURL.indexOf( '?' ) != -1 ? '&' : '?' ) + strClanParam;
		}
		return strURL;
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

	GetCapParams: function( strFeatureContext, unAppID, unPackageID, unBundleID, params, nDepth )
	{
		var rgItemData = null;
		if( unAppID )
			rgItemData = GStoreItemData.rgAppData[ unAppID];
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

		if ( unAppID )
		{
			params['data-ds-appid'] = unAppID;
			params['href'] = GStoreItemData.GetAppURL( unAppID, strFeatureContext, nDepth );

		}
		else if( unPackageID )
		{
			params['data-ds-packageid'] = unPackageID;
			params['href'] = GStoreItemData.GetPackageURL( unPackageID, strFeatureContext, nDepth );
			if ( rgItemData['appids'] )
			{
				params['data-ds-appid'] = rgItemData['appids'].join( ',' );
			}
		} else if( unBundleID )
		{
			params['data-ds-bundleid'] = unBundleID;
			params['href'] = GStoreItemData.GetBundleURL( unBundleID, strFeatureContext, nDepth );
			if ( rgItemData['appids'] )
			{
				params['data-ds-appid'] = rgItemData['appids'].join( ',' );
			}
		}

		// override with item-specific URL
		if ( rgItemData.url )
			params['href'] = GStoreItemData.AddNavEventParamsToURL( rgItemData.url, strFeatureContext, nDepth );
		
		if ( params['curator_clanid'] )
			params['href'] += "&curator_clanid=" + params['curator_clanid'];

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

		if ( rgItemData.vr_htcvive || rgItemData.vr_oculusrift || rgItemData.vr_razerosvr || rgItemData.vr_windowsmr )
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
			if ( rgItemData.vr_razerosvr )
			{
				strHTML += '<span class="platform_img razerosvr"></span>';
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
		var rgGoodItems = [], rgOtherItems = [], rgStrictItems = [];

		if ( !cMaxItemsToDisplay )
			cMaxItemsToDisplay = rgItems.length;

		for ( var i = 0; i < rgItems.length; i++ )
		{
			var oItem = rgItems[i];
			var unAppID, unPackageID, unBundleID;
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

			if (	( !GDynamicStore.s_bUserOnMacOS || ( GDynamicStore.s_bUserOnMacOS && !rgItemData.os_macos ) ) &&
					( !GDynamicStore.s_bUserOnLinux || ( GDynamicStore.s_bUserOnLinux && !rgItemData.os_linux ) ) &&
					( !GDynamicStore.s_bUserOnWindows || ( GDynamicStore.s_bUserOnWindows && !rgItemData.os_windows ) &&
					( GDynamicStore.s_bUserOnWindows || GDynamicStore.s_bUserOnMacOS || GDynamicStore.s_bUserOnLinux ) )
				)
			return false;
		}

		if ( rgItemData.coming_soon && ApplicableSettings.prepurchase && !Settings.prepurchase )
			return false;

		if ( rgItemData.has_adult_content_violence && Settings.hide_adult_content_violence )
			return false;

		if ( rgItemData.has_adult_content_sex && Settings.hide_adult_content_sex )
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

		if ( bStrict && ApplicableSettings.displayed_elsewhere && !Settings.displayed_elsewhere && GDynamicStore.s_rgDisplayedApps.indexOf( appid ) !== -1 )
			return false;

		if ( rgAppData.virtual_reality && ApplicableSettings.virtual_reality && !Settings.virtual_reality )
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
	},

	BBundlePassesFilters: function( bundleid, Settings, ApplicableSettings, bStrict )
	{
		var rgBundleData = GStoreItemData.rgBundleData[ bundleid ];

		if ( !rgBundleData )
			return false;

		if( !GStoreItemData.BItemPassesFilters( rgBundleData, Settings, ApplicableSettings, bStrict ) )
			return false;


		return true;
	}

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

		var rgImageProperties = { src: rgItemData[rgOptions.capsule_size] };
		if( rgOptions.lazy )
			rgImageProperties = { 'data-image-url': rgItemData[rgOptions.capsule_size] }

		$ImgCtn.append( $J('<img/>', rgImageProperties ) );
		$CapCtn.append( $ImgCtn );
		if( rgOptions.include_title )
			$CapCtn.append( $J('<div/>', {'class': 'title ellipsis' } ).html( rgItemData.name ) );

		if( rgOptions.html_before_price )
			$CapCtn.append( rgOptions.html_before_price );

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
};

function OnDynamicStorePageException(e)
{
	}

GDynamicStorePage = {
	oSettings: {},
	oApplicableSettings: {"main_cluster":{"top_sellers":true,"early_access":true,"games_already_in_library":true,"recommended_for_you":true,"prepurchase":true,"games":"always","software":true,"dlc_for_you":true,"dlc":null,"recently_viewed":null,"new_on_steam":null,"popular_new_releases":"always","games_not_in_library":null,"only_current_platform":true,"video":true,"localized":true,"virtual_reality":true,"recommended_by_curators":true,"hidden":null},"new_on_steam":{"top_sellers":null,"early_access":true,"games_already_in_library":true,"recommended_for_you":null,"prepurchase":null,"games":"always","software":true,"dlc_for_you":null,"dlc":null,"recently_viewed":null,"new_on_steam":null,"popular_new_releases":null,"games_not_in_library":null,"only_current_platform":true,"video":true,"localized":true,"virtual_reality":true,"recommended_by_curators":null,"hidden":null},"recently_updated":{"top_sellers":null,"early_access":true,"games_already_in_library":null,"recommended_for_you":null,"prepurchase":null,"games":"always","software":true,"dlc_for_you":null,"dlc":null,"recently_viewed":null,"new_on_steam":null,"popular_new_releases":null,"games_not_in_library":true,"only_current_platform":true,"video":true,"localized":true,"virtual_reality":true,"recommended_by_curators":null,"hidden":null},"tabs":null,"specials":null,"more_recommendations":null,"friend_recommendations":null,"curators":{"top_sellers":null,"early_access":true,"games_already_in_library":true,"recommended_for_you":null,"prepurchase":null,"games":"always","software":true,"dlc_for_you":null,"dlc":null,"recently_viewed":null,"new_on_steam":null,"popular_new_releases":null,"games_not_in_library":null,"only_current_platform":true,"video":true,"localized":true,"virtual_reality":true,"recommended_by_curators":null,"hidden":null},"home":{"top_sellers":null,"early_access":true,"games_already_in_library":null,"recommended_for_you":null,"prepurchase":true,"games":null,"software":true,"dlc_for_you":null,"dlc":null,"recently_viewed":null,"new_on_steam":null,"popular_new_releases":null,"games_not_in_library":null,"only_current_platform":null,"video":true,"localized":null,"virtual_reality":true,"recommended_by_curators":null,"hidden":null}},

	InitUserData: function( rgParams )
	{
		try {
			GDynamicStorePage.oSettings = rgParams.oSettings;
		} catch( e ) { OnDynamicStorePageException(e); }
	},

	FilterCapsules: function( nMin, nMax, $elElements, $elContainer, rgFilterParams)
	{
		var nCapsules = $elElements.length;

		// Get a list of appids to filter
		var rgApps = [];
		var rgAllAppIds = [];
		var rgAppIds = [];

		// Remove duplicates or DLC from the list
		for( var i = 0; i < $elElements.length; i++ )
		{
			var $capsule = $J( $elElements[i] );
			var unAppId = $capsule.data('ds-appid');

			if( !unAppId )
				continue;

			if( unAppId.toString().indexOf(',') !== -1 )
				unAppId = unAppId.toString().split(',')[0];

			if( rgAppIds.indexOf( unAppId ) !== -1 )
			{
				$capsule.remove();
				continue;
			}

			var rgAppData = GStoreItemData.rgAppData[unAppId];

			// Treat DLC as the base app; so we either show the DLC or the base game; but only one (and whichever is in top position).
			// If the user owns the base game already, only show the DLC
			if( rgAppData && rgAppData.dlc_for_app )
			{
				if( !GDynamicStore.BIsAppOwned(rgAppData.dlc_for_app) && rgAppIds.indexOf( parseInt( rgAppData.dlc_for_app ) ) !== -1 )
				{
					$capsule.remove();
					continue;
				}

				rgAppIds.push( rgAppData.dlc_for_app );
			}


			rgAppIds.push( unAppId );
			rgApps.push( { appid: unAppId } );
		}

		// Filter
		var rgFilteredApps = this.FilterItemsForDisplay(
			rgApps, 'home', nMin, nMax, rgFilterParams
		);

		// Now follow filters as long we we can keep 4 items in the capsule
		for( var i = 0; i < $elElements.length; i++ )
		{
			var $capsule = $J( $elElements[i] );
			var nAppId = $capsule.data('ds-appid');
			if( !nAppId )
				continue;

			if( nAppId.toString().indexOf(',') !== -1 )
				nAppId = nAppId.toString().split(',')[0];

			// Test our filtered list
			var bVisible = false;
			for( var j=0; j<rgFilteredApps.length; j++)
			{
				if( rgFilteredApps[j].appid == nAppId )
				{
					bVisible = true;
					break;
				}
			}

			if( bVisible )
				$capsule.removeClass('hidden');
			else
				$capsule.remove();
		}


		$elElements.parent().trigger('v_contentschanged');

		//if( nCapsules < nMin && $elContainer )
		//	$elContainer.hide();
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

		if ( this.bHideAdultContentViolence )
			Settings = jQuery.extend({}, Settings, {hide_adult_content_violence: true});

		if ( this.bHideAdultContentSex )
			Settings = jQuery.extend({}, Settings, {hide_adult_content_sex: true});

		if ( !cMaxItemsToDisplay )
			cMaxItemsToDisplay = cMinItemsToDisplay;

		return GStoreItemData.FilterItemsForDisplay( rgItems, Settings, ApplicableSettings, cMaxItemsToDisplay, cMinItemsToDisplay )
	},
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

function GetAvatarURL( strHash, strSize )
{
	return "https:\/\/steamcdn-a.akamaihd.net\/steamcommunity\/public\/images\/avatars\/" + strHash.substring( 0, 2 ) + '/' + strHash + strSize + '.jpg';
}

function GetScreenshotURL( appid, filename, sizeStr )
{
	if( sizeStr )
		return 'https://steamcdn-a.akamaihd.net/steam/' + 'apps/' + appid + '/' + filename.replace('.jpg', sizeStr + '.jpg');

	return 'https://steamcdn-a.akamaihd.net/steam/' + 'apps/' + appid + '/' + filename;
}

