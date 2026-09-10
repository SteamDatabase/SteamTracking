
function OnHomepageException(e)
{
	if ( typeof console != 'undefined' && console.log )
	{
		console.log( 'Exception rendering homepage:', e );
		if ( e.stack )
			console.log( e.stack );
	}
}

InitializeGPFocusRestoreTimeout();

GHomepage = {
	oSettings: {},
	oApplicableSettings: {"main_cluster":{"top_sellers":true,"early_access":true,"games_already_in_library":true,"recommended_for_you":true,"prepurchase":true,"games":"always","software":true,"dlc_for_you":true,"dlc":null,"recently_viewed":null,"new_on_steam":null,"popular_new_releases":"always","games_not_in_library":null,"only_current_platform":true,"video":true,"localized":true,"virtual_reality":true,"recommended_by_curators":true,"hidden":null},"new_on_steam":{"top_sellers":null,"early_access":true,"games_already_in_library":true,"recommended_for_you":null,"prepurchase":null,"games":"always","software":true,"dlc_for_you":null,"dlc":null,"recently_viewed":null,"new_on_steam":null,"popular_new_releases":null,"games_not_in_library":null,"only_current_platform":true,"video":true,"localized":true,"virtual_reality":true,"recommended_by_curators":null,"hidden":null},"recently_updated":{"top_sellers":null,"early_access":true,"games_already_in_library":null,"recommended_for_you":null,"prepurchase":null,"games":"always","software":true,"dlc_for_you":null,"dlc":null,"recently_viewed":null,"new_on_steam":null,"popular_new_releases":null,"games_not_in_library":true,"only_current_platform":true,"video":true,"localized":true,"virtual_reality":true,"recommended_by_curators":null,"hidden":null},"tabs":null,"specials":null,"more_recommendations":null,"friend_recommendations":null,"curators":{"top_sellers":null,"early_access":true,"games_already_in_library":true,"recommended_for_you":null,"prepurchase":null,"games":"always","software":true,"dlc_for_you":null,"dlc":null,"recently_viewed":null,"new_on_steam":null,"popular_new_releases":null,"games_not_in_library":null,"only_current_platform":true,"video":true,"localized":true,"virtual_reality":true,"recommended_by_curators":null,"hidden":null},"home":{"top_sellers":null,"early_access":true,"games_already_in_library":null,"recommended_for_you":null,"prepurchase":true,"games":null,"software":true,"dlc_for_you":null,"dlc":null,"recently_viewed":null,"new_on_steam":null,"popular_new_releases":null,"games_not_in_library":null,"only_current_platform":null,"video":true,"localized":true,"virtual_reality":true,"recommended_by_curators":null,"hidden":null}},

	oDisplayListsRaw: {},
	oDisplayLists: {},

	oCustomUserDisplayLists: {},

	oFeaturedMainCapItems: {},

	rgRecommendedGames: [],
	rgFriendRecommendations: [],	// { appid, accountid_friends, time_most_recent_recommendation }
	rgRecommendedBySteamLabsApps: [],

	rgCommunityRecommendations: [],
	rgCommunityRecommendationsByAppID: {},
	strCommunityRecommendationsPrefLastSaved: false,
	rgRecommendedByDeepDiveApps: [],
	rgRecommendedByDeepDiveKeyTags: [],
	rgRecommendedByDeepDiveAppTags: [],
	recommendedByDeepDiveFocusedApp: -1,
	recommendedByDeepDiveMethod: "",

	rgCuratedAppsData: [],
	rgCreatorFollowedAppData: [],
	rgRecentAppsByCreator: [],
	rgAppsRecommendedByCurators: [],
	rgTopSteamCurators: [],
	rgAccountTagBuckets: [],
	rgSteamAwardDefs: [],
	rgAltBackgroundDef: [],

	rgfnCustomRenders: [],

	bUserDataReady: false,
	bStaticDataReady: false,
	bLoadedActiveData: false,
	bInitialRenderComplete: false,
	bIsSeasonalSale: false,
	bHasLocalizedTopSellers: false,

	bShowAllRecentlyUpdated: false,
	unBackgroundAppID: 0,
	unAutoSizeListenerCount: 0,

	// Special offers carousel pages before this one keep what we rendered at page load; personalized
	// recommendations only rebuild the trailing pages, which the user has to page over to reach.
	k_iFirstPersonalizedSpotlightPage: 2,

	// How many of the carousel's large panels fit on one of its pages, and how many of its leading pages we top
	// up with generated ones.  The server sizes the list it sends us off the product of the two, so they have
	// to agree with k_nSpotlightPanelItems.
	k_nMaxSpotlightColumns: 2,
	k_nSpotlightPanelPages: 3,

	// The carousel gives every page three columns, and a column of capsules holds two of them.
	k_nSpotlightColumnsPerPage: 3,
	k_nSpotlightCapsulesPerColumn: 2,

	// Banner across a generated panel, where a curated one carries whatever was typed into it.  #spotlight_weekend_deal
	// is the sibling token to move to if these run over a weekend instead.
	k_strSpotlightPanelBanner: 'MIDWEEK DEAL',

	bSpotlightSectionRendered: false,
	rgSpotlightRecommendations: null,
	rgSpotlightPanels: null,
	cSpotlightPanelsPlaced: 0,
	rgSpotlightPanelsKept: [],
	rgSpotlightPanelDailyDeals: [],
	cSpotlightPanelsDuplicate: 0,

	// Daily deals the leading pages had no room for once the panels went in.  FillSpotlightSpecials() places
	// these on the pages it rebuilds, ahead of any spotlight specials.
	rgSpotlightCarryDeals: [],
	oSpotlightRecsDebug: null,

	MainCapCluster: null,

	rgContentHubs: [],
	rgFeaturedTagBuckets: [],

	bSteamOS: false,
	eHWVariant: 0, /* k_EHardwareVariant_Unknown */
	eGamingDeviceType: 0, /* k_EGamingDeviceType_Unknown */

	InitLayout: function()
	{
		var $Ctn = $J('.home_page_body_ctn');
		if ( $Ctn.hasClass('has_takeover') )
		{
			if ( !$J( 'body' ).hasClass('v7') )
			{
				var $Background = $Ctn.children('.page_background_holder');
				var $Menu = $J('#store_header');

				var k_nContentWidth = 940 + 32;
				var k_nMenuHeight = 0;

				var nTakeoverWidth = $Background.data('backgroundWidth') || 1880;
				var flTakeoverRatio = nTakeoverWidth / k_nContentWidth;
				var flTopAdjustment = (100 * k_nMenuHeight / k_nContentWidth) / flTakeoverRatio;

				var $TakeoverLink = $J('.home_page_takeover_link').children().first();
				var nInitialTakeoverLinkHeight = $TakeoverLink.height();

				$J(window).on('Responsive_SmallScreenModeToggled.StoreHomeLayout', function () {
					if (window.UseSmallScreenMode && window.UseSmallScreenMode()) {
						// the -5vw here accounts for the bit that would normally be overlapped by the menu, we use
						//	viewport-relative units because the background is being scaled relative to the viewport.
						$Background.css('background-position', 'center -' + flTopAdjustment + 'vw');
						$Background.css('background-size', Math.floor(100 * flTakeoverRatio) + '% auto');

						// this is the link, which also allocates the space for the takeover to be visible above the cluster rotation.
						//	we scale it based on the viewport width, assuming the initial width was 940px
						if (nInitialTakeoverLinkHeight)
							$TakeoverLink.css('height', Math.floor(nInitialTakeoverLinkHeight / k_nContentWidth * 100) + '%');

					} else {
						$Background.css('top', '').css('background-position', '').css('background-size', '');
						if (nInitialTakeoverLinkHeight)
							$TakeoverLink.css('height', nInitialTakeoverLinkHeight + 'px');
					}
				}).trigger('Responsive_SmallScreenModeToggled.StoreHomeLayout');
			}

			GHomepage.InitTakeoverVideos();
		}

		InitHorizontalAutoSliders();

		if ( $J( 'body' ).hasClass('v7') )
			InitTabSectionMicrotrailer();

		if ( $J( '#load_addtl_scroll_target' ).length )
			new CScrollOffsetWatcher( '#load_addtl_scroll_target', GHomepage.OnHomeActivate.bind(this), 1000 );

		GHomepage.LoadSpotlightRecommendations();

		if ( window.Responsive_ReparentItemsInResponsiveMode )
		{
			window.Responsive_ReparentItemsInResponsiveMode( '.spotlight_block', $J('#home_responsive_spotlight_ctn') );

			window.Responsive_ReparentItemsInResponsiveMode( '*[data-content-dive=true]', function ( $el ) {
				return $el.closest( '.home_page_content' );
			} );
		}

		if ( InitUsabilityTracker )
		{
			var tracker = InitUsabilityTracker( "https:\/\/store.steampowered.com\/default\/usabilitytracking\/" );
			tracker.SetPostCallback( this.UsabilityTrackerPostCallback );
			tracker.IncrementStat( "prefersReducedMotion", window.matchMedia( '(prefers-reduced-motion: reduce)' ).matches ? 1 : 0 )
		}
	},

	UsabilityTrackerPostCallback: function( stats )
	{
		stats.rgExcludedDescIDs = GDynamicStore.s_rgExcludedDescIDs;
	},

	AddCustomRender: function( fnRender )
	{
		if ( !GHomepage.bInitialRenderComplete )
			GHomepage.rgfnCustomRenders.push( fnRender );
		else
			window.setTimeout( function() { fnRender( GHomepage.oDisplayListsRaw ); }, 1 );
	},

	InitUserData: function( rgParams )
	{
		try {
			GHomepage.oSettings = rgParams.oSettings;
			GDynamicStorePage.oSettings = rgParams.oSettings;	// GDynamicStorePage is used to filter capsule lists, so make sure that has the settings too.
			GHomepage.CheckLocalStorageSettings();

			if (rgParams.rgRecommendedGames && rgParams.rgRecommendedGames.length) {
				var rgRecommendedAppIDs = v_shuffle(rgParams.rgRecommendedGames);
				for (var i = 0; i < rgRecommendedAppIDs.length; i++) {
					GHomepage.rgRecommendedGames.push({appid: rgRecommendedAppIDs[i], recommended: true});
				}
			}

			GHomepage.bMergeRecommendationsToHighlights = rgParams.bMergeRecommendationsToHighlights || false;
			GHomepage.bNewRecommendations = rgParams.bNewRecommendations || false;
			GHomepage.bIsLimitedUser = rgParams.bIsLimitedUser || false;

			if (g_AccountID == 0) {
				$J('#home_recommended_spotlight_notloggedin').show();
				$J('.home_top_sellers_area').show();
				$J('.home_logged_in').hide();
				$J('.home_friends_purchased_area').hide();
				$J('.home_btn.home_customize_btn').hide();
			}
			else {
				$J('#home_recommended_more').show();
			}

			GHomepage.rgCuratedAppsData = rgParams.rgCuratedAppsData || {};
			if (rgParams.rgCuratedAppsData['apps'] && rgParams.rgCuratedAppsData['apps'].length) {
				var rgRecommendedAppIDs = v_shuffle(rgParams.rgCuratedAppsData['apps']);
				for (var i = 0; i < rgRecommendedAppIDs.length; i++) {
					GHomepage.rgAppsRecommendedByCurators.push({
						appid: rgRecommendedAppIDs[i].appid,
						recommended_by_curator: true
					});
				}
			}

			GHomepage.rgCreatorFollowedAppData = rgParams.rgCreatorFollowedAppData || [];
			if (GHomepage.rgCreatorFollowedAppData && rgParams.rgCreatorFollowedAppData['apps'] && rgParams.rgCreatorFollowedAppData['apps'].length) {
								var rgRecentAppIDs = rgParams.rgCreatorFollowedAppData['apps'];
				var rgCreators = rgParams.rgCreatorFollowedAppData['creator'];
				for (var i = 0; i < rgRecentAppIDs.length; i++) {
										var iCreatorChoice = Math.floor(Math.random() * rgRecentAppIDs[i].filtered_clanids.length);
					var iClanIDToMatch = rgRecentAppIDs[i].filtered_clanids[iCreatorChoice];

										var creator = rgCreators['' + iClanIDToMatch];
					GHomepage.rgRecentAppsByCreator.push({appid: rgRecentAppIDs[i].appid, creator_info: creator});
				}
			}

			GHomepage.rgAccountTagBuckets = rgParams.rgAccountTagBuckets || [];
			GHomepage.rgAppsRecommendedByCurators = rgParams.rgAppsRecommendedByCurators || [];
			GHomepage.rgFriendRecommendations = v_shuffle(rgParams.rgFriendRecommendations) || [];
			GHomepage.rgRecommendedBySteamLabsApps = rgParams.rgRecommendedBySteamLabsApps || [];
			GHomepage.rgCommunityRecommendations = rgParams.rgCommunityRecommendations || [];
			GHomepage.strCommunityRecommendationsPrefLastSaved = rgParams.strCommunityRecommendationsPrefLastSaved || false,
			GHomepage.rgRecommendedByDeepDiveApps = rgParams.rgRecommendedByDeepDiveApps || [];
			GHomepage.rgRecommendedByDeepDiveKeyTags = rgParams.rgRecommendedByDeepDiveKeyTags || [];
			GHomepage.rgRecommendedByDeepDiveAppTags = rgParams.rgRecommendedByDeepDiveAppTags || [];
			GHomepage.recommendedByDeepDiveMethod = rgParams.recommendedByDeepDiveMethod || "";
			GHomepage.recommendedByDeepDiveFocusedApp = rgParams.recommendedByDeepDiveFocusedApp || -1;
			GHomepage.nLastIRSettingsUpdate = rgParams.nLastIRSettingsUpdate || 0;
			GHomepage.rgIRIncludedTags = rgParams.rgIRIncludedTags || [];
			GHomepage.rgIRExcludedTags = rgParams.rgIRExcludedTags || [];
			GHomepage.oCustomUserDisplayLists = rgParams.oCustomUserDisplayLists || {};
	} catch( e ) { OnHomepageException(e); }

		GHomepage.bUserDataReady = true;
		if ( GHomepage.bStaticDataReady )
			GHomepage.OnHomeDataReady();
	},

	InitStaticData: function( rgParams )
	{
		try {
			GHomepage.oDisplayListsRaw = rgParams.rgDisplayLists;
			GHomepage.rgContentHubs = rgParams.rgContentHubs || [];
			GHomepage.rgFeaturedTagBuckets = rgParams.rgFeaturedTagBuckets || [];
			GHomepage.bShuffleInMainLegacy = rgParams.bShuffleInMainLegacy;
			GHomepage.bHasLocalizedTopSellers = rgParams.bHasLocalizedTopSellers || false;
			GHomepage.rgMarketingMessages = rgParams.rgMarketingMessages;
			GHomepage.bShowAllRecentlyUpdated = rgParams.bShowAllRecentlyUpdated || false;
			GHomepage.unBackgroundAppID = rgParams.unBackgroundAppID || 0;
			GHomepage.bSteamOS = rgParams.bSteamOS || false;
			GHomepage.eHWVariant = rgParams.eHWVariant || 0;
			GHomepage.eGamingDeviceType = rgParams.eGamingDeviceType || 0;
			GHomepage.bIsSeasonalSale = rgParams.bIsSeasonalSale || false;
			GHomepage.rgSteamAwardDefs = rgParams.rgSteamAwardDefs || [];
			GHomepage.rgBackgroundDef = rgParams.rgBackgroundDef || [];
		} catch( e ) { OnHomepageException(e); }

		GHomepage.bStaticDataReady = true;
		if ( GHomepage.bUserDataReady )
			GHomepage.OnHomeDataReady();
	},

	// Call this when we think the user is "active" (ie more than just loading the page as a bookmark/defauly or
	// clicking straight out)
	OnHomeActivate: function()
	{
		if( this.bLoadedActiveData )
			return;

		this.bLoadedActiveData = true;

		try {
			if ( g_AccountID != 0 || GHomepage.bShowAllRecentlyUpdated )
			{
				$J.ajax( {
					url: "https:\/\/store.steampowered.com\/default\/home_additional\/",
					data: {
						v: 7,							bNeedRecommendedCurators: 0,
						u: g_AccountID,
						hwsos: Number( GHomepage.bSteamOS ),
						hwvar: GHomepage.eHWVariant,
						hwtype: GHomepage.eGamingDeviceType,
						seasonal_sale: GHomepage.bIsSeasonalSale ? 1 : 0,
					},
					dataType: 'json',
					type: 'GET'
				}).done(function( data ) {

					GStoreItemData.AddStoreItemDataSet( data.item_data );
					delete data.item_data;

					GStoreItemData.AddStoreAccountData( data.account_data );
					delete data.account_data;

					GHomepage.oAdditionalData = data;
					GHomepage.OnAdditionalDataReady();

				});
			}

		} catch(e) { OnHomepageException(e); }
	},

	OnAdditionalDataReady: function()
	{
		// FRIENDS RECENTLY PURCHASED
		try {
			GHomepage.RenderFriendsRecentlyPurchased();
		} catch( e ) { OnHomepageException(e); }

		try {
			GHomepage.RenderRecommendedCreatorApps();
		} catch( e ) { OnHomepageException(e); }

		try {
			GHomepage.RenderRecentlyUpdatedV2();
		} catch( e ) { OnHomepageException(e); }

		try {
			GHomepage.RenderWishlistAndDLCArea();
		} catch( e ) { OnHomepageException(e); }

		try {
			if ( GHomepage.oAdditionalData.strCuratorHTML )
			{
				GSteamCurators.RenderRecommendedCurators( GHomepage.oAdditionalData.strCuratorHTML );
			}
		} catch( e ) { OnHomepageException(e); }

		// Community Recommendations - Steam Labs
		try {
			GHomepage.RenderCommunityRecommendations();
		} catch ( e ) { OnHomepageException(e); }
	},

	OnHomeDataReady: function()
	{
		var bUseGamepadScreenMode = window.UseGamepadScreenMode && window.UseGamepadScreenMode();
		// Deck: Hide discovery queue shenanigans for now
		if( !bUseGamepadScreenMode )
		{
			try {
				if ( g_AccountID != 0 )
				{
					$J('#discovery_queue').append($J('#static_discovery_queue_elements').children());
					$J('#static_discovery_queeue_elements').remove();
					$J('.discovery_queue_ctn').show();
				}

			} catch(e) { OnHomepageException(e); }
		}
		GDynamicStore.OnReady( GHomepage.OnDynamicStoreReady );
	},

	OnDynamicStoreReady: function()
	{
		var bHaveUser = ( g_AccountID != 0 );

		GHomepage.oDisplayLists.main_cluster_legacy = GHomepage.oDisplayListsRaw.main_cluster_legacy || [];
		GHomepage.oDisplayLists.main_cluster = GHomepage.oDisplayListsRaw.main_cluster || [];
		GHomepage.oDisplayLists.top_sellers = GHomepage.oDisplayListsRaw.top_grossing || GHomepage.oDisplayListsRaw.top_sellers || [];
		GHomepage.oDisplayLists.popular_new = GHomepage.oDisplayListsRaw.popular_new_releases || [];
		GHomepage.oDisplayLists.specials = GHomepage.oDisplayListsRaw.specials || [];
		GHomepage.oDisplayLists.under10 = GHomepage.oDisplayListsRaw.under10 || [];
		GHomepage.oDisplayLists.top_vr = v_shuffle( GHomepage.oDisplayListsRaw.top_vr || [] );
		GHomepage.oDisplayLists.top_new_releases = v_shuffle( GHomepage.oDisplayListsRaw.top_new_releases || [] );
		GHomepage.oDisplayLists.top_played_deck = v_shuffle( GHomepage.oDisplayListsRaw.top_played_deck || [] );
		GHomepage.oDisplayLists.sale_tier1 = GHomepage.oDisplayListsRaw.sale_tier1 || [];
		GHomepage.oDisplayLists.sale_tier2 = GHomepage.oDisplayListsRaw.sale_tier2 || [];
		GHomepage.oDisplayLists.heros = GHomepage.oDisplayListsRaw.heros || [];
		GHomepage.oDisplayLists.special_deals = GHomepage.oDisplayListsRaw.special_deals || [];
		GHomepage.oDisplayLists.steam_award_winners = GHomepage.oDisplayListsRaw.steam_award_winners || [];

		GHomepage.oDisplayLists.popular_new_on_steam = GHomepage.oDisplayLists.popular_new || [];

		// CURATORS ( Must be initialized before the main cluster)
		try {
			GSteamCurators.Init( GHomepage.rgCuratedAppsData );
		} catch( e ) { OnHomepageException(e); }

		// mark index and steam deck as displayed so it doesn't appear in main cap; it is always below main cap
		GDynamicStore.MarkAppIDsAsDisplayed( [ 1059530, 1059570, 1059550, 1675200 ] );
		if ( GHomepage.unBackgroundAppID )
			GDynamicStore.MarkAppIDsAsDisplayed( [ GHomepage.unBackgroundAppID ] );

		// MAIN CLUSTER
		try {
			GHomepage.RenderMainClusterV2()
		} catch( e ) { OnHomepageException(e); }

		// Seasonal Sales
		try {
			GHomepage.RenderSeasonalSaleSections()
		} catch( e ) { OnHomepageException(e); }

		// Spotlight/specials section
		try {
			GHomepage.RenderSpotlightSection();
		} catch( e ) { OnHomepageException(e); }

		// Tags Section
		try {
			if ( !bHaveUser )
				GHomepage.RenderTagBucketSection();
		} catch( e ) { OnHomepageException(e); }

		try {
			GHomepage.RenderTopNewReleases();
		} catch ( e ) { OnHomepageException(e); }

		try {
			GHomepage.RenderContentHubCarousel();
		} catch ( e ) { OnHomepageException( e ); }

		try {
			GHomepage.RenderSteamDeckCarousel();
		} catch ( e ) { OnHomepageException( e ); }

		try {
			GHomepage.RenderSteamDeckCarouselv2();
		} catch ( e ) { OnHomepageException( e ); }

		// Logged in
		// Recommended by Steam Labs
		try {
			GHomepage.RenderRecommendedBySteamLabsApps();
		} catch ( e ) { OnHomepageException(e); }

		// Logged in
		// Recommended by Deep Dive
		try {
			GHomepage.RenderRecommendedByDeepDiveCarousel();
		} catch ( e ) { OnHomepageException(e); }

		try {
			GSteamCurators.Render();
		} catch( e ) { OnHomepageException(e); }

		// Tabs
		try {
			GHomepage.FilterTabs();
		} catch( e ) { OnHomepageException(e); }

		// Logged in

		// under10
		try {
			GHomepage.RenderUnder10();
		} catch( e ) { OnHomepageException(e); }

		try {
			GHomepage.RenderUnder10v2();
		} catch( e ) { OnHomepageException(e); }

		// Logged in
		try {
			GHomepage.RenderTopVRApps();
		} catch( e ) { OnHomepageException(e); }

		// Sidebar
		// Recommended tags
		try {
			if ( bHaveUser && GDynamicStore.s_rgRecommendedTags.length )
			{
				GHomepage.RenderRecommendedTags();
			}
		} catch( e ) { OnHomepageException(e); }

		// Recently viewed apps
		try {
			GHomepage.RenderRecentApps();
		} catch( e ) { OnHomepageException(e); }

		// Tabbed section
		try {

			// select the first item in the tabbed lists area
			window.setTimeout( function() {
				$J('.tab_item:visible').first().trigger('mouseenter');
				$J('.tab_row_item:visible').first().trigger('mouseenter');
			}, 10 );

		} catch( e ) { OnHomepageException(e); }

		GHomepage.InitGamepadMoreSections();

        // this is the only time we'll execute rgfnCustomRenders, future requests will be called directly
		GHomepage.bInitialRenderComplete = true;
		for( var i = 0; i < GHomepage.rgfnCustomRenders.length; i++ )
		{
			try {
				GHomepage.rgfnCustomRenders[i]( GHomepage.oDisplayListsRaw );
			} catch( e ) { OnHomepageException(e); }
		}

		$J(window ).on('Responsive_SmallScreenModeToggled.StoreHome', function() {
			// TODO: this was never updated for discovery update 2
		});

		// More Content
		if( bHaveUser )
		{
			$J('#content_more').autoloader({template_url: 'https://store.steampowered.com/explore/render/', recommendations_url: 'https://store.steampowered.com/explore/recommended/', additional_url: 'https://store.steampowered.com/explore/more'});
		}
		else
		{
			$J('#content_more').hide();
			$J('#content_loading').hide();
			$J('#content_callout').hide();
			$J('#content_login').show();
		}
	},

	ItemKey: function( rgItem )
	{
		if ( rgItem.appid )
		{
			// if this is a demo, use the parent appid
			var unAppIDParent = GStoreItemData.rgAppData[ rgItem.appid ] && GStoreItemData.rgAppData[ rgItem.appid ].demo_for_app;

			return 'a' + ( unAppIDParent || rgItem.appid );
		}
		else if ( rgItem.packageid )
			return 'p' + rgItem.packageid;
		else if ( rgItem.bundleid )
			return 'b' + rgItem.bundleid;

		return 'unknown';
	},

	InitGamepadMoreSections: function()
	{
		if ( !window.UseGamepadScreenMode() )
			return;

		$J('[data-gp-morebutton]').each( function(index, element) {
			let $Element = $J( element );
			let strURL = element.getAttribute('data-gp-morebutton');

			$Element.on('vgp_onfocus', function() {
				$Element.find('.see_more_gamepad_hint').addClass('hover_active')
			});

			$Element.on('vgp_onblur', function() {
				$Element.find('.see_more_gamepad_hint').removeClass('hover_active')
			});

			$Element.on('vgp_onoptions', function() {
				window.location = strURL;
			});

			$Element.removeAttr( 'data-gp-morebutton' );
		});
	},

	RenderRecentApps: function()
	{
		var strRecentApps = WebStorage.GetCookie('recentapps');
		if( !strRecentApps )
			return;

		var rgApps = Object.keys( strRecentApps );

		if( rgApps && rgApps.length > 0)
		{
			for( var i=0; i<rgApps.length; i++ )
			{
				var unAppID = rgApps[i];

				var params = {'class': 'gutter_item ds_no_flags'};
				var rgItemData = GStoreItemData.GetCapParams( 'gutter', unAppID, 0, null, params );

				if( !rgItemData || !rgItemData.name )
					continue;

								var eleRow = $J('<a/>', params ).html( rgItemData.name );

				$J('#home_gutter_recentlyviewed .gutter_items').append(eleRow);
			}
		}

		if( $J('#home_gutter_recentlyviewed .gutter_items').children().length > 0 )
		{
			var eleContainer = $J('#home_gutter_recentlyviewed');
			eleContainer.show();
			eleContainer.InstrumentLinks();
			//GDynamicStore.DecorateDynamicItems( eleContainer );
		}
	},

	RenderSeasonalSaleSections: function()
	{
		if ( !GHomepage.bIsSeasonalSale )
			return;

		var k_nTier1ItemsMin = 16;
		var k_nTier1ItemsMax = 16;

		var k_nTier2ItemsMin = 16;
		var k_nTier2ItemsMax = 16;

		if ( !GHomepage.oDisplayLists.sale_tier1 )
			return;

		if ( GHomepage.oDisplayLists.steam_award_winners && GHomepage.rgSteamAwardDefs.length )
		{
			HomeSaleSteamAwardWinners( $J( '.home_steamawards_ctn' ), GHomepage.oDisplayLists.steam_award_winners, GHomepage.rgSteamAwardDefs );
		}
		else
		{
			HomeSaleFilterHeroes( $J('.hero_parent_ctn'), GHomepage.oDisplayLists.heros );
		}

		GHomepage.HomeRenderSpecialDealsCarousel();

		let rgPriorityTier1Items = SortItemListByPriorityList( GHomepage.oDisplayLists.sale_tier1.slice( 0, 50 ), 'tier1' );
		var rgTier1 = GHomepage.FilterItemsForDisplay(
			rgPriorityTier1Items, 'home', k_nTier1ItemsMin, k_nTier1ItemsMax, { games_already_in_library: false, localized: true, displayed_elsewhere: false, only_current_platform: true, enforce_minimum: true }
		);

		GDynamicStore.MarkAppDisplayed( rgTier1 );

		let rgPriorityTier2Items = SortItemListByPriorityList( GHomepage.oDisplayLists.sale_tier2.slice( 0, 50 ), 'tier2' );
		var rgTier2 = GHomepage.FilterItemsForDisplay(
			rgPriorityTier2Items, 'home', k_nTier2ItemsMin, k_nTier2ItemsMax, { games_already_in_library: false, localized: true, displayed_elsewhere: false, only_current_platform: true, enforce_minimum: true }
		);

		GDynamicStore.MarkAppDisplayed( rgTier2 );

		GHomepage.RenderHomeCapsuleBlock( rgTier1, $J('#tier1_target' ), 'sale_dailydeals_priority' );

		var $Tier2 = $J('#tier2_target' );
		new CScrollOffsetWatcher( $Tier2, function() { GHomepage.RenderHomeCapsuleBlock( rgTier2, $Tier2, 'sale_dailydeals_t2_priority'  ); } );

		$J( '.home_morefeatured_ctn' ).css( 'minHeight', '' );
	},

	HomeRenderSpecialDealsCarousel: function()
	{
		if ( !GHomepage.oDisplayLists.special_deals )
			return;

		let $SpecialDealsCarousel = $J( '#featured_special_deals' );

		if ( !$SpecialDealsCarousel || !$SpecialDealsCarousel.length )
			return;

		let rgSpecialDeals = GHomepage.FilterItemsForDisplay(
			GHomepage.oDisplayLists.special_deals, 'home', 3, 24, { games_already_in_library: true, localized: true, displayed_elsewhere: false, only_current_platform: true, enforce_minimum: false }
		);

		if ( rgSpecialDeals.length < 3 )
		{
			$SpecialDealsCarousel.hide();
			return;
		}

		if ( g_AccountID )
		{
			rgSpecialDeals.sort( ( app1, app2 ) =>
			{
				const bApp1Owned = GDynamicStore.BIsAppOwned( app1.appid );
				const bApp2Owned = GDynamicStore.BIsAppOwned( app2.appid );
				if ( ( bApp1Owned && bApp2Owned ) || ( !bApp1Owned && !bApp2Owned ) )
					return 0;

				return !bApp1Owned && bApp2Owned ? -1 : 1;
			}  );
		}

		GHomepage.FillPagedCapsuleCarousel( rgSpecialDeals, $SpecialDealsCarousel, function( oItem, strFeature, rgOptions, nDepth ) {
			return GHomepage.BuildHomePageCapsule( oItem, strFeature, { 'disable_autosizer': true });
		}, 'sale_deep_discounts', 3 );

		GDynamicStore.MarkAppDisplayed( rgSpecialDeals );
		$SpecialDealsCarousel.css( { minHeight: '' } );
	},

	RenderMainClusterV2: function()
	{
		let $Parent = $J('.home_cluster_ctn');

		if ( !$Parent.length )
			return;

		var rgDisplayListCombined = false;

		var oMainCapFilterOpts = { games_already_in_library: false, localized: true, displayed_elsewhere: false, only_current_platform: true, dlc_for_you: true };
		var fnPreFilterList = function( list, shuffle ) {
			if ( shuffle )
				list = v_shuffle( list.slice() );
			return GHomepage.FilterItemsForDisplay( list, 'home', 0, 12, oMainCapFilterOpts );
		};

		var itemPrimary = [];
		var rgFeatured = fnPreFilterList( GHomepage.oDisplayLists.main_cluster, true );
		if ( rgFeatured.length >= 4 )
		{
						itemPrimary.push( rgFeatured.shift() );
		}

		if ( g_AccountID != 0 )
		{
			var rgOtherRecs = fnPreFilterList( GHomepage.ZipLists(
				GHomepage.rgRecentAppsByCreator, true,
				GHomepage.rgCuratedAppsData.apps, true,
				GHomepage.rgFriendRecommendations, true
			) );

						rgDisplayListCombined = GHomepage.ZipLists(
				rgFeatured, false,
				fnPreFilterList( GHomepage.oDisplayLists.top_sellers ), true,
				GHomepage.rgRecommendedGames, true,
				rgOtherRecs, false
			);
		}
		else
		{
			rgDisplayListCombined = GHomepage.ZipLists(
				rgFeatured, false,
				GHomepage.oDisplayLists.top_sellers, true,
				GHomepage.oDisplayLists.popular_new.slice( 0, 20 ), true, // Top new releases
				GHomepage.oDisplayLists.main_cluster, true // Legacy

			);
		}

				rgDisplayListCombined = GHomepage.MergeLists(
			GHomepage.oDisplayLists.main_cluster_legacy, GHomepage.bShuffleInMainLegacy,
			itemPrimary, false,				rgDisplayListCombined, false
		);

		rgDisplayListCombined = GHomepage.FilterItemsForDisplay(
			rgDisplayListCombined, 'home', 6, 15, oMainCapFilterOpts
		);

		var rgMainCaps = rgDisplayListCombined.slice( 0, 12 );

		GDynamicStore.MarkAppDisplayed( rgMainCaps, 3 );	
		var $CapTarget = $J('#home_maincap_v7 .carousel_items');
		var $CapThumbs = $J('#home_maincap_v7 .carousel_thumbs');

		var nMainCaps = rgMainCaps.length;
		for ( var i = 0; i < nMainCaps && i < 12; i++ )
		{
			var oItem = rgMainCaps[i];
			GHomepage.oFeaturedMainCapItems[ GHomepage.ItemKey( oItem ) ] = true;

			let $MainCap = null;
			if ( $Parent.hasClass( 'v2' ) )
			{
				$MainCap =  GHomepage.BuildMainCapsuleItemv2( oItem, 'main_cluster', i + 1 );
			}
			else
			{
				$MainCap =  GHomepage.BuildMainCapsuleItem( oItem, 'main_cluster', i + 1 );
			}
			if( !$MainCap )
				continue;

			$CapTarget.append( $MainCap );

			var $Thumb = $J('<div />');
			$CapThumbs.append( $Thumb );
		}

		GDynamicStore.DecorateDynamicItems( $CapTarget );
		GHomepage.MainCapCarousel = CreateFadingCarousel( $J('#home_maincap_v7'), 5, false, null, $Parent.hasClass( 'v2' ) );

		$Parent.css( 'minHeight', '' );
	},

	CreateMainCapCarousel: function ( $elContainer )
	{
		var fnOnFocus = function( nNewIndex )
		{
			this.$elThumbs.removeClass( 'focus' );
			this.$elItems.removeClass( 'focus' );

			$J( this.$elThumbs[nNewIndex] ).addClass('focus');
			$J( this.$elItems[nNewIndex] ).addClass('focus');
			if ( typeof GDynamicStore != 'undefined' && GDynamicStore.m_bLoadComplete ) {
				GDynamicStore.s_ImpressionTracker.TrackAppearanceIfVisible(this.$elItems[nNewIndex]);
			}
		}

		var fnOnBlur = function(  nOldIndex ) {};

		var fnMouseOverThumb = function( index, element )
		{
			this.Advance(index);
		};

		return new CGenericCarousel( $elContainer, 0, fnOnFocus, fnOnBlur, fnMouseOverThumb );
	},

	GetRecommendationReasons: function( oItem )
	{
		if( !oItem )
			return {};

		return {
			recommended: GDynamicStorePage.GetItemFromList( oItem, GHomepage.rgRecommendedGames ),
			recommended_by_curator: GDynamicStorePage.GetItemFromList( oItem, GSteamCurators.rgAppsRecommendedByCurators.apps ),
			recent_release_by_creator: GDynamicStorePage.GetItemFromList( oItem, GHomepage.rgRecentAppsByCreator ),
			recommended_by_friend: GDynamicStorePage.GetItemFromList( oItem, GHomepage.rgFriendRecommendations ),
			top_seller: GDynamicStorePage.GetItemFromList( oItem, GHomepage.oDisplayLists.top_sellers ),
			new_release: GDynamicStorePage.GetItemFromList( oItem, GHomepage.oDisplayLists.popular_new ),
			featured: GDynamicStorePage.GetItemFromList( oItem, GHomepage.oDisplayLists.main_cluster ) ||
						GDynamicStorePage.GetItemFromList( oItem, GHomepage.oDisplayLists.main_cluster_legacy ),
		};

	},

	BuildMainCapsuleItem: function( rgItem, strFeatureContext, nDepth )
	{
		var rgOptions = $J.extend({
			'class': 'store_main_capsule responsive_scroll_snap_start',
		}, rgOptions ? rgOptions : {} );

		var unAppID = rgItem.appid;
		var unPackageID = rgItem.packageid;
		var unBundleID = rgItem.bundleid;

		var params = { 'class': rgOptions.class + ' broadcast_capsule', 'data-manual-tracking': 1 };
		var rgItemData = GStoreItemData.GetCapParamsForItem( strFeatureContext, rgItem, params, nDepth );
		if ( !rgItemData )
			return null;

		var $CapCtn = $J('<a/>', params );
		GStoreItemData.BindHoverEventsForItem( $CapCtn, rgItem );

		var $ImgCtn = $J('<div class="capsule"/>').addClass( 'main_capsule' )

		if ( rgItemData.main_capsule )
		{
			$ImgCtn.attr( 'data-background-image-url', rgItemData.main_capsule );
		}
		else
		{
			var strImageURL = rgItemData.header ? rgItemData.header : rgItemData.package_header;
			if ( strImageURL )
			{
				$ImgCtn.append( $J('<div/>', {'class': 'cluster_maincap_fill ' + (rgItemData.package_header ? 'package' : '') } )
					.append(
						$J('<img/>', {'class': 'cluster_maincap_fill_placeholder', src: 'https://store.fastly.steamstatic.com/public/images/v6/home/maincap_placeholder_616x353.gif' } ),
						$J('<img/>', {'class': 'cluster_capsule_image cluster_maincap_fill_bg', src: 'https://store.fastly.steamstatic.com/public/images/blank.gif', 'data-image-url': strImageURL } ),
						$J('<img/>', {'class': 'cluster_maincap_fill_header', src: 'https://store.fastly.steamstatic.com/public/images/blank.gif', 'data-image-url': strImageURL } )
					)
				);
			}
			else
			{
				// no image to display!
				return null;
			}
		}

		var rgAppInfo = {};
		if ( unAppID )
		{
			rgAppInfo = GStoreItemData.rgAppData[ unAppID ];
		}

		if ( rgAppInfo && rgAppInfo.has_live_broadcast )
		{
			$ImgCtn.append( $J('<div/>', {'class': 'broadcast_live_stream_icon' } ).append( 'Live') );
		}

		if ( rgAppInfo && rgAppInfo.mastersub_granting_app )
		{
			$divMasterSub = $J('<div/>', {'class': 'cluster_maincap_grantingapp grantedbymastersub'} );
			$imgMasterSub = $J('<img/>', {'class': 'grantedbymastersub_app', 'src': rgAppInfo.mastersub_granting_app.capsule, 'alt': rgAppInfo.mastersub_granting_app.name } );
			$divMasterSub.append( $imgMasterSub );

			$ImgCtn.append( $divMasterSub );
		}

		//var $ImgCap = $J('<img/>', { src: rgItemData.main_capsule } );
		//$ImgCtn.append( $ImgCap );
		$CapCtn.append( $ImgCtn );

		var $RightColCtn = $J('<div/>').addClass('info');

		var $AppName = $J('<div/>', { html: rgItemData['name'] } )
		var $AppNameCtn = $J('<div/>' ).addClass( 'app_name' );

		$AppNameCtn.append( $AppName );
		$RightColCtn.append( $AppNameCtn );

		var $ScreenshotCtn = $J('<div/>').addClass('screenshots');

		var rgScreenshots = rgItemData.screenshots;
		var bUseGamepadScreenMode = window.UseGamepadScreenMode && window.UseGamepadScreenMode();

		if( rgScreenshots && rgScreenshots.length && !bUseGamepadScreenMode )
		{
			for ( var i = 0; i < 4 && i < rgScreenshots.length; i++ )
			{
				var screenshot = rgScreenshots[i];
				var unScreenshotAppId = screenshot.appid || unAppID;

				var $elScreenshotThumbWrapper = $J('<div>');
				var $ImgScreenshotThumb = $J ( '<div/>' ).attr ( 'data-background-image-url', GetScreenshotURL ( unScreenshotAppId, screenshot.filename, '.600x338' ) );
				var $ImgScreenshot = $J ( '<div/>', {class:'screenshot'} ).attr ( 'data-background-image-url', GetScreenshotURL ( unScreenshotAppId, screenshot.filename, '.600x338' ) );

				$ImgCtn.append($ImgScreenshot);

				$elScreenshotThumbWrapper.on ( 'mouseover', function( $elTarget ) { return function() { $elTarget.addClass('focus') } }( $ImgScreenshot ) );
				$elScreenshotThumbWrapper.on ( 'mouseout', function( $elTarget ) { return function() { $elTarget.removeClass('focus') } }( $ImgScreenshot ) );

				$elScreenshotThumbWrapper.append( $ImgScreenshotThumb );
				$ScreenshotCtn.append ( $elScreenshotThumbWrapper );
			}
		}
		$RightColCtn.append($ScreenshotCtn);

		if( $ScreenshotCtn.children().length == 0 )
			$CapCtn.addClass('no_screenshots');

		// Recommendation reason block
		var rgRecommendationReasons = GHomepage.GetRecommendationReasons( rgItem );
		var $RecommendedReason = $J('<div/>').addClass('reason');


		var bShowAdditionalReasons = true;

		// Show the "main" reason
		if( rgRecommendationReasons.recommended_by_friend )
		{
			var reason = rgRecommendationReasons.recommended_by_friend;
			rgRecommendationReasons.recommended_by_friend = false;
			var friend = GStoreItemData.GetAccountData( null, reason.accountid_friends[0] );
			var $ReasonMain = $J('<div/>').addClass('main').addClass('friend').html( "<strong>Recommended<\/strong> by your friend, <span>%1$s<\/span>".replace("%1$s", friend.name ) );
			var $ReasonAvatar = $J('<div>').addClass('avatar').append($J('<img>').attr('src', GetAvatarURL( friend.avatar, '_medium' ) ) ).attr('alt', friend.name).data('ds-miniprofile', friend.accountid );

			$RecommendedReason.append( $ReasonAvatar );
			$RecommendedReason.append( $ReasonMain );

			if ( unAppID )
			{
				$CapCtn.attr('href', GStoreItemData.GetAppURL( unAppID, 'main_cluster_recommended_byfriends', nDepth ));
			}
			else if ( unPackageID )
			{
				$CapCtn.attr('href', GStoreItemData.GetPackageURL( unPackageID, 'main_cluster_recommended_byfriends', nDepth ));
			}
			else if ( unBundleID )
			{
				$CapCtn.attr('href', GStoreItemData.GetBundleURL( unBundleID, 'main_cluster_recommended_byfriends', nDepth ));
			}
		}
		else if( rgRecommendationReasons.recent_release_by_creator && rgRecommendationReasons.recent_release_by_creator.creator_info )
		{
						var creator = rgRecommendationReasons.recent_release_by_creator.creator_info;
			rgRecommendationReasons.recent_release_by_creator = false;

			var $ReasonLocal = creator.link.indexOf( 'developer/' ) >= 0 ? "<strong>Developed<\/strong> by<br><span>%1$s<\/span>" : "<strong>Published<\/strong> by<br><span>%1$s<\/span>";
			var $ReasonMain = $J('<div/>').addClass('main').addClass('creator').html( $ReasonLocal.replace("%1$s", V_EscapeHTML( creator.name ) ) );
			var $ReasonAvatar = $J('<div>').addClass('avatar').append($J('<img>').attr('src', GetAvatarURL( creator.avatar_sha != '0000000000000000000000000000000000000000' ? creator.avatar_sha : "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb", '_medium' ) ).attr('alt', V_EscapeHTML( creator.name )) );

			$RecommendedReason.append( $ReasonAvatar );
			$RecommendedReason.append( $ReasonMain );
			$CapCtn.attr('href', GStoreItemData.GetAppURL( unAppID, 'main_cluster_followed_creator', nDepth ));
		}
		else if( rgRecommendationReasons.recommended_by_curator && rgRecommendationReasons.recommended_by_curator.rgCurators )
		{
			var reason = rgRecommendationReasons.recommended_by_curator;
			rgRecommendationReasons.recommended_by_curator = false;
			var curator = GStoreItemData.GetAccountData( null, reason.rgCurators[0], 7 );

			var $ReasonMain = $J('<div/>').addClass('main').addClass('curator').html( "<strong>Recommended<\/strong> by<br><span>%1$s<\/span>".replace("%1$s", V_EscapeHTML( curator.name ) ) );
			var $ReasonAvatar = $J('<div>').addClass('avatar').append($J('<img>').attr('src', GetAvatarURL( curator.avatar != '0000000000000000000000000000000000000000' ? curator.avatar : "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb", '_medium' ) ).attr( 'alt', curator.name ) );

			$RecommendedReason.append( $ReasonAvatar );
			$RecommendedReason.append( $ReasonMain );

			if ( unAppID )
			{
				$CapCtn.attr('href', GStoreItemData.GetAppURL( unAppID, 'main_cluster_recommended_bycurators', nDepth, curator.accountid ));
			}
			else if ( unPackageID )
			{
				$CapCtn.attr('href', GStoreItemData.GetPackageURL( unPackageID, 'main_cluster_recommended_bycurators', nDepth, curator.accountid ));
			}
			else if ( unBundleID )
			{
				$CapCtn.attr('href', GStoreItemData.GetBundleURL( unBundleID, 'main_cluster_recommended_bycurators', nDepth, curator.accountid ));
			}

		}
		else if( rgRecommendationReasons.recommended && GDynamicStore.s_rgRecommendedTags )
		{
			var reason = rgRecommendationReasons.recommended;
			rgRecommendationReasons.recommended = false;
			var rgMatchedTags = [];
			bShowAdditionalReasons = false;

			for ( var i = 0; i < GDynamicStore.s_rgRecommendedTags.length && rgMatchedTags.length < 4; i++ )
			{
				if( rgItemData.tagids.indexOf( GDynamicStore.s_rgRecommendedTags[i].tagid ) !== -1 )
					rgMatchedTags.push( '<span>' + GDynamicStore.s_rgRecommendedTags[i].name + '</span>' );

			}
			if( rgMatchedTags.length == 0 )
				var $ReasonMain = $J('<div/>').addClass('main').addClass('bytags').html( "<strong>Recommended<\/strong> because you play similar games" );
			else
				var $ReasonMain = $J('<div/>').addClass('main').addClass('bytags').html( "<strong>Recommended<\/strong> because you played games tagged with" );

			$ReasonMain.append( $J('<div>').addClass('tags').html( rgMatchedTags.join('') ) );
			$RecommendedReason.append( $ReasonMain );

			if ( unAppID )
			{
				$CapCtn.attr('href', GStoreItemData.GetAppURL( unAppID, 'main_cluster_recommended', nDepth ));
			}
			else if ( unPackageID )
			{
				$CapCtn.attr('href', GStoreItemData.GetPackageURL( unPackageID, 'main_cluster_recommended', nDepth ));
			}
			else if ( unBundleID )
			{
				$CapCtn.attr('href', GStoreItemData.GetBundleURL( unBundleID, 'main_cluster_recommended', nDepth ));
			}
		}
		else
		{
			// featured items use the default nav event "main-cluster", if it wasn't featured,
			// it must be a new release or top seller.
			if ( !rgRecommendationReasons.featured )
			{
				if ( rgRecommendationReasons.new_release )
				{
					if ( unAppID )
					{
						$CapCtn.attr('href', GStoreItemData.GetAppURL( unAppID, 'main_cluster_recenttopseller', nDepth ));
					}
					else if ( unPackageID )
					{
						$CapCtn.attr('href', GStoreItemData.GetPackageURL( unPackageID, 'main_cluster_recenttopseller', nDepth ));
					}
					else if ( unBundleID )
					{
						$CapCtn.attr('href', GStoreItemData.GetBundleURL( unBundleID, 'main_cluster_recenttopseller', nDepth ));
					}
				}
				else if ( rgRecommendationReasons.top_seller )
				{
					if ( unAppID )
					{
						$CapCtn.attr('href', GStoreItemData.GetAppURL( unAppID, 'main_cluster_topseller', nDepth ));
					}
					else if ( unPackageID )
					{
						$CapCtn.attr('href', GStoreItemData.GetPackageURL( unPackageID, 'main_cluster_topseller', nDepth ));
					}
					else if ( unBundleID )
					{
						$CapCtn.attr('href', GStoreItemData.GetBundleURL( unBundleID, 'main_cluster_topseller', nDepth ));
					}
				}
			}

			var strStatus = '';
			if ( rgItem.status_string )
			{
				strStatus = rgItem.status_string;
			}
			else if ( rgItemData && rgItemData.coming_soon )
			{
				strStatus = 'Pre-Purchase Now';
			}
			else if ( rgItemData.early_access )
			{
				strStatus = 'Early Access Now Available';
			}
			else if ( rgItemData.popular_new_on_steam )
			{
				strStatus = 'New On Steam';
			}
			else if ( rgItemData.top_seller )
			{
				strStatus = 'Top Seller';
				rgRecommendationReasons.top_seller = false; // Don't show this reason twice.
			}
			else if ( rgItemData && rgItemData.video )
			{
				strStatus = 'Now Available to Watch';
			}
			else if ( rgItemData && rgItemData.free_weekend && rgItemData.free_weekend_status )
			{
				strStatus = rgItemData.free_weekend_status;
			}
			else
			{
				strStatus = 'Now Available';
			}

			var $ReasonMain = $J('<div/>').addClass('main').addClass('default').text( strStatus );
			$RecommendedReason.append( $ReasonMain );
		}

		// Now show any additional reasons we might have to show it

		if( bShowAdditionalReasons )
		{
			var $ReasonAdditional = $J('<div/>').addClass('additional');

			for( var key in rgRecommendationReasons )
			{
				if( !rgRecommendationReasons[key] )
					continue;

				var strReason = '';

				if( key == 'top_seller' )
					strReason = "Top Seller";
				else if( key == 'new_release' )
					strReason = "New Release";
				else if( key == 'recommended')
					strReason = "Similar to games you play";
				else
					continue;

				$ReasonAdditional.append($J('<div/>').html( strReason ) );

			}

			$RecommendedReason.append($ReasonAdditional);
		}

		$RightColCtn.append($RecommendedReason);


		// Discount block
		$RightColCtn.append( rgItemData.discount_block ? $J(rgItemData.discount_block).addClass('discount_block_inline' ) : '' );

		// Platform icons
		var $PlatformContainer  = $J( '<div/>' ).addClass('platforms').append( GStoreItemData.BuildSupportedPlatformIcon(rgItemData) );


		$RightColCtn.append($PlatformContainer);
		$CapCtn.append($RightColCtn);

		return $CapCtn;
	},

	GetTopSellerRank: function( oItem )
	{
		if( !oItem || !oItem.appid )
			return 0;

		const idx = GHomepage.oDisplayLists.top_sellers.findIndex( ( item ) => item.appid === oItem.appid );

		let rank = 0;
		if ( idx !== -1 )
		{
			rank = idx + 1;
		}

		return rank;
	},

	BuildMainCapsuleItemv2: function( rgItem, strFeatureContext, nDepth )
	{
		var rgOptions = $J.extend({
			'class': 'store_main_capsule responsive_scroll_snap_start add_microtrailer',
		}, rgOptions ? rgOptions : {} );

		var unAppID = rgItem.appid;
		var unPackageID = rgItem.packageid;
		var unBundleID = rgItem.bundleid;

		var params = { 'class': rgOptions.class + ' broadcast_capsule', 'data-manual-tracking': 1 };
		var rgItemData = GStoreItemData.GetCapParamsForItem( strFeatureContext, rgItem, params, nDepth );
		if ( !rgItemData )
			return null;

		var $CapCtn = $J('<a/>', params );
		$CapCtn.data('hoverDisableScreenshots', true );
		GStoreItemData.BindHoverEventsForItem( $CapCtn, rgItem );

		var $ImgCtn = $J('<div class="capsule capsule_image_ctn main_capsule"/>');
		if ( rgItemData.main_capsule_2x )
		{
			$ImgCtn.attr( 'data-background-image2x-url', rgItemData.main_capsule_2x );
		}

		if ( rgItemData.main_capsule )
		{
			$ImgCtn.attr( 'data-background-image-url', rgItemData.main_capsule );
		}
		else
		{
			var strImageURL = rgItemData.header ? rgItemData.header : rgItemData.package_header;
			if ( strImageURL )
			{
				$ImgCtn.append( $J('<div/>', {'class': 'cluster_maincap_fill ' + (rgItemData.package_header ? 'package' : '') } )
					.append(
						$J('<img/>', {'class': 'cluster_maincap_fill_placeholder', src: 'https://store.fastly.steamstatic.com/public/images/v6/home/maincap_placeholder_616x353.gif' } ),
						$J('<img/>', {'class': 'cluster_capsule_image cluster_maincap_fill_bg', src: 'https://store.fastly.steamstatic.com/public/images/blank.gif', 'data-image-url': strImageURL } ),
						$J('<img/>', {'class': 'cluster_maincap_fill_header', src: 'https://store.fastly.steamstatic.com/public/images/blank.gif', 'data-image-url': strImageURL } )
					)
				);
			}
			else
			{
				// no image to display!
				return null;
			}
		}

		var rgAppInfo = {};
		if ( unAppID )
		{
			rgAppInfo = GStoreItemData.rgAppData[ unAppID ];
		}

		if ( rgAppInfo && rgAppInfo.has_live_broadcast )
		{
			$ImgCtn.append( $J('<div/>', {'class': 'broadcast_live_stream_icon' } ).append( 'Live') );
		}

		if ( rgAppInfo && rgAppInfo.mastersub_granting_app )
		{
			let $divMasterSub = $J('<div/>', {'class': 'cluster_maincap_grantingapp grantedbymastersub'} );
			let $imgMasterSub = $J('<img/>', {'class': 'grantedbymastersub_app', 'src': rgAppInfo.mastersub_granting_app.capsule, 'alt': rgAppInfo.mastersub_granting_app.name } );
			$divMasterSub.append( $imgMasterSub );

			$ImgCtn.append( $divMasterSub );
		}

		var $ScreenshotCtn = $J('<div/>').addClass('screenshots');

		var rgScreenshots = rgItemData.screenshots;
		var bUseGamepadScreenMode = window.UseGamepadScreenMode && window.UseGamepadScreenMode();

		if( rgScreenshots && rgScreenshots.length && !bUseGamepadScreenMode )
		{
			for ( var i = 0; i < 4 && i < rgScreenshots.length; i++ )
			{
				var screenshot = rgScreenshots[i];
				var unScreenshotAppId = screenshot.appid || unAppID;

				var $ImgScreenshotThumb = $J ( '<div/>' ).attr ( 'data-background-image-url', GetScreenshotURL ( unScreenshotAppId, screenshot.filename, '.1024x768' ) );
				var $ImgScreenshot = $J ( '<div/>', {class:'large_screenshot'} ).attr ( 'data-background-image-url', GetScreenshotURL ( unScreenshotAppId, screenshot.filename, '.1024x768' ) );

				$ImgCtn.append( $ImgScreenshot );

				$ImgScreenshotThumb.on( 'mouseover', function( $elTarget ) { return function() { $elTarget.addClass( 'focus' ) } }( $ImgScreenshot ) );
				$ImgScreenshotThumb.on( 'mouseout', function( $elTarget ) { return function() { $elTarget.removeClass( 'focus' ) } }( $ImgScreenshot ) );

				$ScreenshotCtn.append ( $ImgScreenshotThumb );
			}
		}

		$CapCtn.append( $ImgCtn );
		$CapCtn.data( 'microtrailerOnImageHover', 1 );
		GHomepage.AddHoverEffectToCapsule( $CapCtn, null, rgAppInfo.microtrailer );

		var $RightColCtn = $J('<div/>').addClass('info');
		var $InfoCtn = $J('<div/>', { 'class': 'info_ctn' });
		var $AppName = $J('<div/>', { html: rgItemData['name'] } );
		var $AppNameCtn = $J('<div/>' ).addClass( 'app_name' );
		var $DataCtn = $J('<div/>', { 'class': 'data_ctn' });

		$AppNameCtn.append( $AppName );
		$InfoCtn.append( $AppNameCtn );

		if ( rgItemData.review_summary &&  rgItemData.review_summary.reviewScore > 0 )
		{
			var pref = ( !GDynamicStore.s_preferences['review_score_preference'] ? 0 : GDynamicStore.s_preferences['review_score_preference'] );
			var reviewSummary = pref != 1 ? rgItemData['review_summary_filtered'] : rgItemData['review_summary'];
			var $elReviewData = $J('<div>', {'class': 'review_summary' } );
			var $summaryRow = $J('<div>', { 'class': 'review_summary_row' });
			let reviewSummaryText = 'Overall User Reviews';
			if ( reviewSummary['bLanguageOutlier'] && pref != 1 )
			{
				reviewSummaryText = 'English Reviews';
			}
			$summaryRow.append( $J('<span>', {'class': 'game_review_summary ' + reviewSummary['sReviewSummaryClass']}).text( reviewSummary['reviewSummaryDesc']) );

			const strTotalReviews = '%1$s Reviews'.replace( '%1$s', v_numberformat( reviewSummary['cReviews'] ) );
			$summaryRow.append( $J('<span>', { 'class': 'review_count' }).html( '&nbsp;(' + strTotalReviews + ')' ) );

			if ( reviewSummary['review_anomaly'] )
			{
				$summaryRow.append($J('<span>', {'class': 'review_anomaly_icon'}).html('&nbsp;*'));
			}

			$elReviewData.append($summaryRow);
			$InfoCtn.append($elReviewData);
		}
		else if ( rgItemData.coming_soon )
		{
			let $elReleaseDate = $J('<div/>', { 'class': 'release_date coming_soon' }).text( rgItemData.release_date_string );
			$InfoCtn.append( $elReleaseDate );
		}
		else
		{
			$InfoCtn.append( $J('<div>', { 'class': 'review_placeholder' }) );
		}

		// Recommendation reason block
		var rgRecommendationReasons = GHomepage.GetRecommendationReasons( rgItem );
		var $RecommendedReason = $J('<div/>').addClass('reason');

		var bShowAdditionalReasons = true;

		// Show the "main" reason
		if ( rgRecommendationReasons.recommended_by_friend )
		{
			var reason = rgRecommendationReasons.recommended_by_friend;
			rgRecommendationReasons.recommended_by_friend = false;
			var friend = GStoreItemData.GetAccountData( null, reason.accountid_friends[0] );
			var nameHTML = '<span class="friend_name">' + V_EscapeHTML(friend.name) + '</span>';
			var html = "<strong>Recommended<\/strong> by your friend, <span>%1$s<\/span>".replace("%1$s", nameHTML);
			var $ReasonMain = $J('<div/>').addClass('main friend').html(html);
			var $ReasonAvatar = $J('<div>').addClass('avatar').append($J('<img>').attr('src', GetAvatarURL(friend.avatar, '_full'))).attr('alt', friend.name).data('ds-miniprofile', friend.accountid);

			$RecommendedReason.append( $ReasonAvatar );
			$RecommendedReason.append( $ReasonMain );

			if ( unAppID )
			{
				$CapCtn.attr('href', GStoreItemData.GetAppURL( unAppID, 'main_cluster_recommended_byfriends', nDepth ));
			}
			else if ( unPackageID )
			{
				$CapCtn.attr('href', GStoreItemData.GetPackageURL( unPackageID, 'main_cluster_recommended_byfriends', nDepth ));
			}
			else if ( unBundleID )
			{
				$CapCtn.attr('href', GStoreItemData.GetBundleURL( unBundleID, 'main_cluster_recommended_byfriends', nDepth ));
			}
		}
		else if( rgRecommendationReasons.recent_release_by_creator && rgRecommendationReasons.recent_release_by_creator.creator_info )
		{
						var creator = rgRecommendationReasons.recent_release_by_creator.creator_info;
			rgRecommendationReasons.recent_release_by_creator = false;

			var $ReasonLocal = creator.link.indexOf( 'developer/' ) >= 0 ? "<strong>Developed<\/strong> by<br><span>%1$s<\/span>" : "<strong>Published<\/strong> by<br><span>%1$s<\/span>";
			var $ReasonMain = $J('<div/>').addClass('main').addClass('creator').html( $ReasonLocal.replace("%1$s", V_EscapeHTML( creator.name ) ) );
			var $ReasonAvatar = $J('<div>').addClass('avatar').append($J('<img>').attr('src', GetAvatarURL( creator.avatar_sha != '0000000000000000000000000000000000000000' ? creator.avatar_sha : "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb", '_full' ) ).attr('alt', V_EscapeHTML( creator.name )) );

			$RecommendedReason.append( $ReasonAvatar );
			$RecommendedReason.append( $ReasonMain );
			$CapCtn.attr('href', GStoreItemData.GetAppURL( unAppID, 'main_cluster_followed_creator', nDepth ));
		}
		else if( rgRecommendationReasons.recommended_by_curator && rgRecommendationReasons.recommended_by_curator.rgCurators )
		{
			var reason = rgRecommendationReasons.recommended_by_curator;
			rgRecommendationReasons.recommended_by_curator = false;
			var curator = GStoreItemData.GetAccountData( null, reason.rgCurators[0], 7 );

			var $ReasonMain = $J('<div/>').addClass('main').addClass('curator').html( "<strong>Recommended<\/strong> by<br><span>%1$s<\/span>".replace("%1$s", V_EscapeHTML( curator.name ) ) );
			var $ReasonAvatar = $J('<div>').addClass('avatar').append($J('<img>').attr('src', GetAvatarURL( curator.avatar != '0000000000000000000000000000000000000000' ? curator.avatar : "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb", '_full' ) ).attr( 'alt', curator.name ) );

			$RecommendedReason.append( $ReasonAvatar );
			$RecommendedReason.append( $ReasonMain );

			if ( unAppID )
			{
				$CapCtn.attr('href', GStoreItemData.GetAppURL( unAppID, 'main_cluster_recommended_bycurators', nDepth, curator.accountid ));
			}
			else if ( unPackageID )
			{
				$CapCtn.attr('href', GStoreItemData.GetPackageURL( unPackageID, 'main_cluster_recommended_bycurators', nDepth, curator.accountid ));
			}
			else if ( unBundleID )
			{
				$CapCtn.attr('href', GStoreItemData.GetBundleURL( unBundleID, 'main_cluster_recommended_bycurators', nDepth, curator.accountid ));
			}

		}
		else if( rgRecommendationReasons.recommended && GDynamicStore.s_rgRecommendedTags )
		{
			var reason = rgRecommendationReasons.recommended;
			rgRecommendationReasons.recommended = false;
			var rgMatchedTags = [];
			bShowAdditionalReasons = false;

			for ( var i = 0; i < GDynamicStore.s_rgRecommendedTags.length && rgMatchedTags.length < 4; i++ )
			{
				if( rgItemData.tagids.indexOf( GDynamicStore.s_rgRecommendedTags[i].tagid ) !== -1 )
					rgMatchedTags.push( '<span>' + GDynamicStore.s_rgRecommendedTags[i].name + '</span>' );

			}
			if( rgMatchedTags.length == 0 )
				var $ReasonMain = $J('<div/>').addClass('main').addClass('bytags').html( "<strong>Recommended<\/strong> because you play similar games" );
			else
				var $ReasonMain = $J('<div/>').addClass('main').addClass('bytags').html( "<strong>Recommended<\/strong> because you played games tagged with" );

			$ReasonMain.append( $J('<div>').addClass('tags').html( rgMatchedTags.join('') ) );
			$RecommendedReason.append( $ReasonMain );

			if ( unAppID )
			{
				$CapCtn.attr('href', GStoreItemData.GetAppURL( unAppID, 'main_cluster_recommended', nDepth ));
			}
			else if ( unPackageID )
			{
				$CapCtn.attr('href', GStoreItemData.GetPackageURL( unPackageID, 'main_cluster_recommended', nDepth ));
			}
			else if ( unBundleID )
			{
				$CapCtn.attr('href', GStoreItemData.GetBundleURL( unBundleID, 'main_cluster_recommended', nDepth ));
			}
		}
		else
		{
			// featured items use the default nav event "main-cluster", if it wasn't featured,
			// it must be a new release or top seller.
			if ( !rgRecommendationReasons.featured )
			{
				if ( rgRecommendationReasons.new_release )
				{
					if ( unAppID )
					{
						$CapCtn.attr('href', GStoreItemData.GetAppURL( unAppID, 'main_cluster_recenttopseller', nDepth ));
					}
					else if ( unPackageID )
					{
						$CapCtn.attr('href', GStoreItemData.GetPackageURL( unPackageID, 'main_cluster_recenttopseller', nDepth ));
					}
					else if ( unBundleID )
					{
						$CapCtn.attr('href', GStoreItemData.GetBundleURL( unBundleID, 'main_cluster_recenttopseller', nDepth ));
					}
				}
				else if ( rgRecommendationReasons.top_seller )
				{
					if ( unAppID )
					{
						$CapCtn.attr('href', GStoreItemData.GetAppURL( unAppID, 'main_cluster_topseller', nDepth ));
					}
					else if ( unPackageID )
					{
						$CapCtn.attr('href', GStoreItemData.GetPackageURL( unPackageID, 'main_cluster_topseller', nDepth ));
					}
					else if ( unBundleID )
					{
						$CapCtn.attr('href', GStoreItemData.GetBundleURL( unBundleID, 'main_cluster_topseller', nDepth ));
					}
				}
			}

			let strStatus = '';
			let strAdditionalDetail = '';
			let $ReasonMain = $J('<div/>').addClass('main').addClass('default');
			if ( rgItemData && rgItemData.coming_soon )
			{
				let $PrePurchaseReason =  $J( '<div/>', { 'class': 'main_reason' } ).html( '<strong>Pre-Purchase</strong> now' );
				if ( rgItemData.coming_soon_string )
				{
					const $ComingSoonString = $J( '<div/>', { 'class': 'reason_subtext' } ).text( rgItemData.coming_soon_string );
					$PrePurchaseReason.append( $ComingSoonString );
				}

				$PrePurchaseReason.appendTo( $ReasonMain );
			}
			else if ( rgItemData.recent_early_access )
			{
				let $EarlyAccessReason =  $J( '<div/>', { 'class': 'main_reason' } ).html( 'Now available in <strong>Early Access</strong>' );
				$EarlyAccessReason.appendTo( $ReasonMain );
			}
			else if ( rgItemData.popular_new_on_steam )
			{
				strStatus = 'New On Steam';
			}
			else if ( rgItemData && rgItemData.video )
			{
				strStatus = 'Now Available to Watch';
			}
			else if ( rgItemData && rgItemData.free_weekend && rgItemData.free_weekend_status_strong )
			{
				const $FreeWeekendReason =  $J( '<div/>', { 'class': 'main_reason' } ).html( rgItemData.free_weekend_status_strong );
				$FreeWeekendReason.appendTo( $ReasonMain );
			}
			else if ( rgRecommendationReasons.top_seller )
			{
				let $TopSellerReason = $J( '<div/>', { 'class': 'main_reason_topseller' } );
				$TopSellerReason.append( $J( '<img/>', { src: 'https://cdn.fastly.steamstatic.com/store//icons/rank_icon_lg.svg' } ) );

				let $TopSellerRightCol = $J( '<div/>', { 'class': 'topseller_right_col' } );
				$TopSellerRightCol.append( $J( '<div/>', { 'class': 'topseller_title' } ).text( 'Top Seller' ) );

				let strTopSellersRank = GHomepage.bHasLocalizedTopSellers ? 'Ranked <span>#%1$s</span> in your region' : 'Ranked <span>#%1$s</span> globally';
				$TopSellerRightCol.append( $J( '<div/>', { 'class': 'topseller_subtext' } ).html( strTopSellersRank.replace( '%1$s', GHomepage.GetTopSellerRank( rgItem ).toString() ) ) );

				$TopSellerRightCol.appendTo( $TopSellerReason );
				$TopSellerReason.appendTo( $ReasonMain );

				rgRecommendationReasons.top_seller = false; // Don't show this reason twice.
			}

			if ( strStatus.length )
				$ReasonMain.text( strStatus )

			$RecommendedReason.append( $ReasonMain );

			if ( bShowAdditionalReasons )
			{
				var $ReasonAdditional = $J('<div/>').addClass('additional');
				$ReasonAdditional.html( strAdditionalDetail );
				$RecommendedReason.append( $ReasonAdditional );
			}
		}

		// Now show any additional reasons we might have to show it

		if( bShowAdditionalReasons )
		{
			var $ReasonAdditional = $J('<div/>').addClass('additional');

			for( var key in rgRecommendationReasons )
			{
				if( !rgRecommendationReasons[key] )
					continue;

				var strReason = '';

				if( key == 'top_seller' )
					strReason = "Top Seller";
				else if( key == 'new_release' )
					strReason = "New Release";
				else if( key == 'recommended')
					strReason = "Similar to games you play";
				else
					continue;

				$ReasonAdditional.append($J('<div/>').html( strReason ) );

			}
		}

		$InfoCtn.append( $ScreenshotCtn );
		$InfoCtn.append( $RecommendedReason );

		// Discount block
		let $PriceCtn = ( rgItemData.discount_block ? $J(rgItemData.discount_block).addClass('discount_block_inline' ) : '' );

		$RightColCtn.append( $InfoCtn );
		$RightColCtn.append( $PriceCtn );
		$CapCtn.append($RightColCtn);

		return $CapCtn;
	},

	m_iTabItemPreviewMountTimeout: null,
	InstrumentTabbedSection: function( $Items )
	{
		$Items.each(function(i, j){
			var $el = $J(j);
			var rgLookup = GStoreItemData.GetStoreItemDataForElement( $el );
			var $elInfoDiv = null;

			if( rgLookup.item )
			{
				$el.on('hover focus', function()
				{
					var fnShowElement = function()
					{
						if ( GHomepage.m_iTabItemPreviewMountTimeout )
						{
							// we may have someone showing delayed.  clear them out if that's the case.
							window.clearTimeout( GHomepage.m_iTabItemPreviewMountTimeout );
							GHomepage.m_iTabItemPreviewMountTimeout = null;
						}

						$el.siblings().removeClass('focus');
						$elInfoDiv.siblings().removeClass('focus');
						$elInfoDiv.siblings().attr('inert', true);

						$el.addClass('focus');
						$elInfoDiv.addClass('focus');
						$elInfoDiv.removeAttr('inert');
					};

					if ( $elInfoDiv )
					{
						// we've already built the element, show immediately
						fnShowElement();
					}
					else
					{
						var rgData = rgLookup.item;
						$elInfoDiv = $J('<div>',{'class': 'tab_preview'});

						$elInfoDiv.append($J('<span>', {'class': 'tab_title'}).html( rgData.name ));

						if ( rgData['review_summary'] )
						{
							var pref = ( !GDynamicStore.s_preferences['review_score_preference'] ? 0 : GDynamicStore.s_preferences['review_score_preference'] );
							var reviewSummary = pref != 1 ? rgData['review_summary_filtered'] : rgData['review_summary'];
							var $elReviewData = $J('<div>', {'class': 'tab_review_summary', "data-tooltip-html": reviewSummary['sReviewScoreTooltip'] } );
							var reviewSummaryText = rgData.appids ? 'Overall user reviews for items in this bundle:' : 'Overall User Reviews';
							if ( reviewSummary['bLanguageOutlier'] && pref != 1 )
							{
								reviewSummaryText = 'English Reviews';
							}
							$elReviewData.append( $J('<div>', {'class': 'title'}).text( reviewSummaryText ) );
							$elReviewData.append( $J('<span>', {'class': 'game_review_summary ' + reviewSummary['sReviewSummaryClass']}).text(reviewSummary['reviewSummaryDesc']) );
							if ( reviewSummary['reviewScore'] > 0 )
							{
								$elReviewData.append( $J('<span>').html('&nbsp;(' + v_numberformat( reviewSummary['cReviews'] ) + ')') );
							}
							if ( rgData['review_anomaly'] )
							{
								$elReviewData.append( $J( '<span class="review_anomaly_icon">&nbsp;*</span>' ) );
							}

							$elInfoDiv.append( $elReviewData );
						}

						if( rgData.tags )
						{
							var $elTagContainer = $J('<div>',{'class': 'tags'});

							for( var i=0; i<rgData.tags.length; i++)
							{
								var url = GStoreItemData.AddNavEventParamsToURL( 'https://store.steampowered.com/tags/en/TAGNAME/'.replace( /TAGNAME/, encodeURIComponent( rgData.tags[i] ) ), 'tab_preview' );
								$elTagContainer.append($J('<a>').attr('href',url).text( rgData.tags[i] ));
							}
							$elInfoDiv.append($elTagContainer);
						}

						var rgScreenshots = rgData.screenshots;
						// we show the "this screenshot may contain mature content" mask for missing screenshots.
						// in the bundle case, we don't really know so we assume it contains mature apps.
						// For apps, if they have no screenshots we assume mature, but if they have at least one then they probably aren't mature
						var bMissingScreenshotsMayBeMature = true;
						if ( !rgLookup.bundleid && !rgLookup.packageid && rgScreenshots && rgScreenshots.length > 0 )
							bMissingScreenshotsMayBeMature = false;

						// However, for SteamChina, we need to disable this functionality since we don't have 'mature' screenshots, so we'd rather not
						// have images than show mature content blocks
						
						for( var i=0; i < 4; i++ )
						{
							if ( rgScreenshots && i < rgScreenshots.length )
							{
								var screenshot = rgScreenshots[i];
								var unAppId = screenshot.appid || rgLookup.appid;
								var $elScreenshot = $J('<div>', {'class': 'screenshot'}).attr( 'data-background-image-url', GetScreenshotURL( unAppId, screenshot.filename, '.600x338' ) );
								$elInfoDiv.append($elScreenshot);
							}
							else if ( bMissingScreenshotsMayBeMature )
							{
								var $elScreenshot = $J('<div>', {'class': 'screenshot empty'}).append("<div>").text("This screenshot may contain mature content.");
								$elInfoDiv.append($elScreenshot);
							}
						}

						$J('#tab_preview_container').append($elInfoDiv);
						PreloadImages( $elInfoDiv );

						GHomepage.m_iTabItemPreviewMountTimeout = window.setTimeout( fnShowElement, 1 );
					}
				});
			}
		});

	},

	m_TabItemPreviewMicrotrailerTimeout: null,
	InstrumentTabbedSectionv2: function( $Items )
	{
		if ( window.UseTouchFriendlyMode() && !window.UseGamepadScreenMode() )
		{
			$J( '.home_rightcol' ).hide();
			return;
		}

		const fnPauseActiveMicrotrailer = function()
		{
			let $elPrevMicrotrailer = $J( '.tab_preview.focus' ).find('.tab_preview_video')[0];
			if ( $elPrevMicrotrailer )
			{
				$elPrevMicrotrailer.pause();
			}
		}

		$Items.each(function(i, j){
			var $el = $J(j);
			var rgLookup = GStoreItemData.GetStoreItemDataForElement( $el );
			var $elInfoDiv = null;

			if( rgLookup.item )
			{
				$el.on('hover focus gpfocus', function(){
					var fnShowElement = function() {
						if (GHomepage.m_iTabItemPreviewMountTimeout) {
							// we may have someone showing delayed.  clear them out if that's the case.
							window.clearTimeout(GHomepage.m_iTabItemPreviewMountTimeout);
							GHomepage.m_iTabItemPreviewMountTimeout = null;
						}

						fnPauseActiveMicrotrailer();
						$el.siblings().removeClass('focus');
						$elInfoDiv.siblings().removeClass('focus');
						$elInfoDiv.siblings().attr('inert', true);

						$el.addClass('focus');
						$elInfoDiv.addClass('focus');
						$elInfoDiv.removeAttr('inert');

						// Current microtrailer
						let $elMicrotrailer = $elInfoDiv.children( '.tab_preview_video' )[0];
						if ( $elMicrotrailer )
						{
							const rect = $elMicrotrailer.getBoundingClientRect();
							const bIsVisible = rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth;
							if ( bIsVisible )
							{
								window.setTimeout( () => $elMicrotrailer.play(), 1 );
							}
						}
					};

					if ( $elInfoDiv )
					{
						// we've already built the element, show immediately
						fnShowElement();
					}
					else
					{
						var rgData = rgLookup.item;
						$elInfoDiv = $J('<div>',{'class': 'tab_preview', 'data-gp-focus-disabled': 'true' } );

						let $elTopDetailsCtn = $J('<div>',{'class': 'tab_preview_details' });

						$elTopDetailsCtn.append($J('<span>', {'class': 'tab_title'}).html( rgData.name ));

						if ( rgData['review_summary'] )
						{
							var pref = ( !GDynamicStore.s_preferences['review_score_preference'] ? 0 : GDynamicStore.s_preferences['review_score_preference'] );
							var reviewSummary = pref != 1 ? rgData['review_summary_filtered'] : rgData['review_summary'];
							var $elReviewData = $J('<div>', {'class': 'tab_review_summary', "data-tooltip-html": reviewSummary['sReviewScoreTooltip'] } );
							var reviewSummaryText = rgData.appids ? 'Overall user reviews for items in this bundle:' : 'Overall User Reviews';
							if ( reviewSummary['bLanguageOutlier'] && pref != 1 )
							{
								reviewSummaryText = 'English Reviews';
							}
							$elReviewData.append( $J('<div>', {'class': 'title'}).text( reviewSummaryText ) );
							$elReviewData.append( $J('<span>', {'class': 'game_review_summary ' + reviewSummary['sReviewSummaryClass']}).text(reviewSummary['reviewSummaryDesc']) );
							if ( reviewSummary['reviewScore'] > 0 )
							{
								$elReviewData.append( $J('<span>').html('&nbsp;(' + v_numberformat( reviewSummary['cReviews'] ) + ')') );
							}
							if ( rgData['review_anomaly'] )
							{
								$elReviewData.append( $J( '<span class="review_anomaly_icon">&nbsp;*</span>' ) );
							}

							$elTopDetailsCtn.append( $elReviewData );
						}

						if( rgData.tags )
						{
							var $elTagContainer = $J('<div>',{'class': 'tags'});

							for( var i=0; i<rgData.tags.length; i++)
							{
								var url = GStoreItemData.AddNavEventParamsToURL( 'https://store.steampowered.com/tags/en/TAGNAME/'.replace( /TAGNAME/, encodeURIComponent( rgData.tags[i] ) ), 'tab_preview' );
								let elTag = $J('<a>').attr('href',url ).text( rgData.tags[i] );
								elTag.data( "gpFocusDisabled", true );
								$elTagContainer.append( elTag );
							}
							$elTopDetailsCtn.append( $elTagContainer );
						}

						$elInfoDiv.append( $elTopDetailsCtn );

						if ( rgData.microtrailer && !GDynamicStore.s_preferences.disable_microtrailers )
						{
							const $Video = $J('<video/>', {
								'class': 'tab_preview_video',
								loop: true,
								preload: 'none',
								playsinline: true,
							}).prop("muted", true).append($J("<source>", {src: rgData.microtrailer, type: "video/webm"}));

							$elInfoDiv.append($Video);
						}

						let $elScreenshotsCtn =  $J('<div>',{'class': 'tab_screenshots_ctn'});

						var rgScreenshots = rgData.screenshots;
						// we show the "this screenshot may contain mature content" mask for missing screenshots.
						// in the bundle case, we don't really know so we assume it contains mature apps.
						// For apps, if they have no screenshots we assume mature, but if they have at least one then they probably aren't mature
						var bMissingScreenshotsMayBeMature = true;
						if ( !rgLookup.bundleid && !rgLookup.packageid && rgScreenshots && rgScreenshots.length > 0 )
							bMissingScreenshotsMayBeMature = false;

						// However, for SteamChina, we need to disable this functionality since we don't have 'mature' screenshots, so we'd rather not
						// have images than show mature content blocks
						
						const nMaxScreenshots = GDynamicStore.s_preferences.disable_microtrailers ? 4 : 3;
						for( var i=0; i < nMaxScreenshots; i++ )
						{
							if ( rgScreenshots && i < rgScreenshots.length )
							{
								var screenshot = rgScreenshots[i];
								var unAppId = screenshot.appid || rgLookup.appid;
								var $elScreenshot = $J('<div>', {'class': 'screenshot'}).attr( 'data-background-image-url', GetScreenshotURL( unAppId, screenshot.filename, '.600x338' ) );
								$elScreenshotsCtn.append($elScreenshot);
							}
							else if ( bMissingScreenshotsMayBeMature )
							{
								var $elScreenshot = $J('<div>', {'class': 'screenshot empty'}).append("<div>").text("This screenshot may contain mature content.");
								$elScreenshotsCtn.append($elScreenshot);
							}
						}
						$elInfoDiv.append( $elScreenshotsCtn );

						$J('#tab_preview_container').append( $elInfoDiv );
						PreloadImages( $elInfoDiv );

						GHomepage.m_iTabItemPreviewMountTimeout = window.setTimeout( fnShowElement, 1 );
					}
				});
			}
		});
	},

	RenderFriendsRecentlyPurchased: function()
	{

		var $RecentlyUpdated =  $J('.friends_recently_purchased' );
		if ( !$RecentlyUpdated.length )
			return;

		var rgData = GHomepage.oAdditionalData.rgUserNewsFriendsPurchased;

		let oFilterOptions = {
			games_already_in_library: false,
			dlc: false,
			localized: true,
			displayed_elsewhere: false,
			only_current_platform: true,
			playtest: false,
		};

		if ( GHomepage.bIsSeasonalSale )
		{
			oFilterOptions = { ...oFilterOptions, has_discount: true };
		}

		var rgCapsules = GHomepage.FilterItemsForDisplay( rgData, 'home', 4, 16, oFilterOptions );
		if( rgCapsules.length < 4 )
		{
			$RecentlyUpdated.hide();
			return;
		}

		GHomepage.FillPagedCapsuleCarousel( rgCapsules, $RecentlyUpdated,
			function( oItem, strFeature, rgOptions, nDepth )
			{
				if ( $RecentlyUpdated.hasClass( 'v2' ) )
				{
					const $elFriendsRow = () =>
					{
						let $FriendsCtn = $J('<div class="friends_container" />');

						var nAdditionalFriends = 0;

						var $AvatarsCtn = $J('<div class="avatars" />');
						$FriendsCtn.append($AvatarsCtn);

						for( var i = 0; i < oItem.friends.length; i++ )
						{
							if( i > 4)
							{
								nAdditionalFriends = oItem.friends.length - i;
								break;
							}

							var friend = GStoreItemData.GetAccountData( null, oItem.friends[i] );
							var $AvatarCap = $J('<a href="%1$s" data-miniprofile="%3$s"><img src="%2$s"></a>'.replace(/\%1\$s/g, friend.url).replace(/\%2\$s/g, GetAvatarURL( friend.avatar, "_medium" ) ).replace(/\%3\$s/g, friend.accountid) );
							$AvatarsCtn.append( $AvatarCap );
						}

						return $FriendsCtn;
					}

					return GHomepage.BuildHomePageCapsule( oItem, strFeature, { 'disable_autosizer': true, 'lazy': true, 'html_before_price': $elFriendsRow } );
				}


				var nAppId = oItem.appid;
				var $CapCtn = GHomepage.BuildHomePageGenericCap( strFeature, nAppId, null, null, rgOptions, nDepth );
				var $FriendsCtn = $J('<div class="friends_container" />');
				$CapCtn.append($FriendsCtn);

				var nAdditionalFriends = 0;

				var $AvatarsCtn = $J('<div class="avatars" />');
				$FriendsCtn.append($AvatarsCtn);

				for( var i = 0; i < oItem.friends.length; i++ )
				{
					if( i > 4)
					{
						nAdditionalFriends = oItem.friends.length - i;
						break;
					}

					var friend = GStoreItemData.GetAccountData( null, oItem.friends[i] );
					var $AvatarCap = $J('<a href="%1$s" data-miniprofile="%3$s"><img src="%2$s"></a>'.replace(/\%1\$s/g, friend.url).replace(/\%2\$s/g, GetAvatarURL( friend.avatar ) ).replace(/\%3\$s/g, friend.accountid) );
					$AvatarsCtn.append( $AvatarCap );
				}
				return $CapCtn;
			},	'friends_trending', 4
		);
	},

	RenderRecommendedCreatorApps: function()
	{
		let rgRecommendedAppsByCreators = v_shuffle( GHomepage.oAdditionalData.rgRecommendedAppsByCreators ) || [];

		var $RecommendedCreators =  $J('.recommended_creators_ctn' );
		if ( !$RecommendedCreators.length )
			return;

		$RecommendedCreators.hide();

		const k_nMinCapsules = 5;

		let rgCapsules = GHomepage.FilterItemsForDisplay(
			rgRecommendedAppsByCreators, 'home', k_nMinCapsules, 25, { games_already_in_library: false, dlc: false, localized: true, displayed_elsewhere: false }
		);

		let rgFirstRow = [];
		let rgDisplayedCreators = [];
		let rgAdditionalRows = [];
		for ( let i = 0;i < rgCapsules.length; i++ )
		{
			if ( rgFirstRow.length < 5 && rgDisplayedCreators.indexOf( rgCapsules[i].creatorid ) === -1 )
			{
				rgDisplayedCreators.push( rgCapsules[i].creatorid );
				rgFirstRow.push( rgCapsules[i] );
			}
			else
			{
				rgAdditionalRows.push( rgCapsules[i] )
			}
		}

		let rgCarouselCapsules =  [...rgFirstRow, ...rgAdditionalRows];

		if ( rgCarouselCapsules.length >= k_nMinCapsules )
			$RecommendedCreators.show();
		else
			return;

		const fnBuildCreatorArea = function( oItem, nDepth )
		{
			let elCuratorDetails = $J('<div/>', { 'class': 'creator_capsule_ctn' } );

			const strLink = GStoreItemData.AddNavEventParamsToURL( oItem.link, 'creator_recommendations', nDepth );
			let elCreatorLink = $J('<a/>', { 'class': 'curator_capsule_link', 'href': strLink } );
			elCreatorLink.append( $J('<img/>', { 'class': 'curator_capsule_avatar', 'src': GetAvatarURL( oItem.avatar_sha, '_full' ), 'alt': V_EscapeHTML( oItem.name ) } ) );
			elCreatorLink.append( $J('<span/>', {'class': 'curator_capsule_name'} ).text( oItem.name ) );
			elCuratorDetails.append( elCreatorLink );

			let $Actions = $J('<div class="creator_actions" />');
			let $FollowLink = $J('<button/>', { 'class': 'creator_follow_btn btnv6_white_transparent btn_small_thin' } );
			$FollowLink.attr( 'data-creatorid-btn', oItem.creatorid );

			const fnUpdateFollowStatus = function( $elFollowButton, bFollowing )
			{
				if ( bFollowing )
				{
					$elFollowButton.html( '<span><img src="https://store.fastly.steamstatic.com/public/images/v6/ico/ico_selected.png">Following</span>' );
					$elFollowButton.addClass( "following" );
				}
				else
				{
					$elFollowButton.html( '<span>Follow</span>' );
					$elFollowButton.removeClass( "following" );
				}
			}

			fnUpdateFollowStatus( $FollowLink, oItem.following );

			$FollowLink.on( 'click', function( e ) {
				const bFollow = !$J( this ).hasClass( "following" );
				FollowCuratorWithCallback(
					oItem.creatorid,
					bFollow,
					() => $RecommendedCreators.find('.creator_follow_btn[data-creatorid-btn="' + oItem.creatorid + '"]').each( ( idx, el ) => fnUpdateFollowStatus( $J( el ), bFollow ) )
				);

				e.preventDefault();
				e.stopPropagation();
			} );

			$Actions.append( $FollowLink );

			elCuratorDetails.append( $Actions );

			return elCuratorDetails;
		}

		GHomepage.FillPagedCapsuleCarousel( rgCarouselCapsules, $RecommendedCreators,
			function( oItem, strFeature, rgOptions, nDepth )
			{
				const $CreatorArea = fnBuildCreatorArea( oItem, nDepth );
				return GHomepage.BuildHomePageCapsule( oItem, 'creator_recommendations', { 'disable_autosizer': true, 'lazy': true, 'html_before_price': $CreatorArea });
			},	'creator_recommendations', k_nMinCapsules
		);

		GDynamicStore.MarkAppDisplayed( rgCarouselCapsules, k_nMinCapsules );
	},

	RenderRecommendedByDeepDiveCarousel: function()
	{
		var focusedAppID = GHomepage.recommendedByDeepDiveFocusedApp;

		//If we don't have a focused app id, we're either not logged in or have
		//no play time, either way, bail out now:
		if(focusedAppID < 0) return;

		var $DeepDive =  $J('.deep_dive_block' );

		if ( $DeepDive.length == 0 )
		{
			return;
		}

		var $RecommendedByDeepDiveTitle = $J('.recommended_by_deep_dive_title');

		var rgOptions = $J.extend({
			'class': 'store_capsule',
			'include_title': false,
			'discount_class': 'discount_block_inline',
			'capsule_size': 'headerv5',
			'html_before_price': '',
			'lazy': false
		}, rgOptions ? rgOptions : {} );

		//Get the id of the similarity algorithm we used and use it to build the
		//proper SNR code
		var focusedMethod = GHomepage.recommendedByDeepDiveMethod;
		var snrCode = "recommended_by_deep_dive_carousel_"+focusedMethod;

		var getItemData = function(appid,rgOptions){
			var nDepth = 0;
			var params = { 'class': 'store_capsule deepdive_capsule' };
			var rgItemData = GStoreItemData.GetCapParams( snrCode , appid, null, null, params, nDepth );
			return rgItemData;
		};

		//Get the focused app, its title, its tags, and the tags of the apps
		var focusedApp = getItemData(focusedAppID,rgOptions);
		var focusedAppTitle = (focusedApp !== null ? focusedApp.name : "");
		var keyTags = GHomepage.rgRecommendedByDeepDiveKeyTags.key;
		var appTags = GHomepage.rgRecommendedByDeepDiveAppTags;

		//TODO: Make double-plus sure to check this for XSS vulns
		focusedAppTitle = 'Because You Played <strong>%s</strong>'.replace( "%s", focusedAppTitle);

		$RecommendedByDeepDiveTitle.html(focusedAppTitle);

		var rgCapsules = GHomepage.FilterItemsForDisplay(
			GHomepage.rgRecommendedByDeepDiveApps, 'home', 4, 12,
			{
				games_already_in_library: false,
				dlc: false,
				localized: true,
				not_wishlisted: false,
				displayed_elsewhere: false,
				has_discount: GHomepage.bIsSeasonalSale
			}
		);

		if ( rgCapsules.length < 4 )
		{
			$DeepDive.hide();
			return;
		}

		GHomepage.FillPagedCapsuleCarousel( rgCapsules, $DeepDive,
			function( oItem, strFeature, rgOptions, nDepth )
			{
				var strKeyTags = "";
				var appid = oItem.appid;
				var appKeyTags = appTags[appid];

				if ( $DeepDive.hasClass( 'v2' ) )
				{
					const $elTags = () =>
					{
						for ( var i = 0; i < appKeyTags.length; i++ )
						{
							const tag = appKeyTags[i];
							strKeyTags += "<div class='deep_dive_tag'>"+tag.name + "</div>";
							if(i >= 7) break; //only show 8
						}

						return $J( '<div/>', { 'class': 'deep_dive_key_tags' } ).html( strKeyTags );
					}

					return GHomepage.BuildHomePageCapsule( oItem, strFeature, { 'disable_autosizer': true, 'html_before_price': $elTags } );
				}

				//Build the tag block
				for(var i = 0; i < appKeyTags.length; i++)
				{
					var tag = appKeyTags[i];
					strKeyTags += "<span class='deep_dive_tag'>"+tag.name + "</span><br>";
					if(i >= 3) break; //only show 4
				}

				var $CapCtn = GHomepage.BuildHomePageGenericCap ( strFeature, oItem.appid, null, null, rgOptions, nDepth );
				$CapCtn.append ( $J ( '<div/>', { 'class': 'deep_dive_key_tags' } ).html ( strKeyTags ) );
				return $CapCtn;
			},	snrCode, 4
		);

		//Save the focusedAppID and method, try for a different one next time.
		//If Deep Dive logic in homepage_loaders.php is set to random for either
		//focusedAppID or method, it will read this cookie and try not to return
		//the same result for either field twice in a row. This should help keep
		//the homepage feeling fresh.

		V_SetCookie ( 'deep_dive_carousel_focused_app', focusedAppID );
		V_SetCookie ( 'deep_dive_carousel_method', focusedMethod );
	},

    RenderRecommendedBySteamLabsApps: function()
    {
        var $RecommendedBySteamLabs = $J('.recommended_by_steam_labs_ctn');
		if ( !$RecommendedBySteamLabs.length )
			return;

		let oFilterOptions = {
			games_already_in_library: false,
			dlc: false,
			localized: true,
			not_wishlisted: false,
			explicitly_included_tags: GHomepage.rgIRIncludedTags,
			explicitly_excluded_tags: GHomepage.rgIRExcludedTags,
		};

		if ( GHomepage.bIsSeasonalSale )
		{
			oFilterOptions = { ...oFilterOptions, has_discount: true, enforce_minimum: true };
		}

		const bVersion2 = $RecommendedBySteamLabs.hasClass( 'v2' );

		const k_nMinItems = bVersion2 ? 5 : 4;

        const rgCapsules = GHomepage.FilterItemsForDisplay(GHomepage.rgRecommendedBySteamLabsApps, 'home', k_nMinItems, 20, oFilterOptions );

        if ( rgCapsules.length < k_nMinItems )
        {
            return;
        }

		GHomepage.FillPagedCapsuleCarousel( rgCapsules, $RecommendedBySteamLabs,
            function( oItem, strFeature, rgOptions, nDepth )
            {
				if ( bVersion2 )
				{
					return GHomepage.BuildHomePageCapsule( oItem, strFeature, { 'disable_autosizer': true } );
				}
				var nAppId = oItem.appid;
                return GHomepage.BuildHomePageGenericCap( strFeature, nAppId, null, null, rgOptions, nDepth );
            }, 'recommended_by_steam_labs', k_nMinItems
        );

		GDynamicStore.MarkAppDisplayed( rgCapsules, k_nMinItems );
		$RecommendedBySteamLabs.show();
    },

	RenderCommunityRecommendations: function()
	{
		var $Ctn = $J('.community_recommendations_by_steam_labs_ctn');
		if ( $Ctn.length == 0 )
		{
			return;
		}

		var rgCapsules = GHomepage.FilterItemsForDisplay(
			GHomepage.rgCommunityRecommendations, 'home', 4, 12, { games_already_in_library: false, dlc: false, localized: true, not_wishlisted: false }
		);

		if ( rgCapsules.length < 4 )
		{
			return;
		}

		for ( var i = 0; i < rgCapsules.length; ++i )
		{
			var item =  rgCapsules[i];
			GHomepage.rgCommunityRecommendationsByAppID[item.appid] = item.reviews;
		}

		const bVersion2 = $Ctn.hasClass( 'v2' );
		GHomepage.FillPagedCapsuleCarousel( rgCapsules, $Ctn,
			function( oItem, strFeature, rgOptions, nDepth )
			{
				return bVersion2 ? GHomepage.BuildCommunityRecommendationCapV2( strFeature, oItem ) : GHomepage.BuildCommunityRecommendationCap( strFeature, oItem );
			}, 'community_recommendations_by_steam_labs', 1
		);

		var elemPrefLastUpdated = $J( "#community_recommendations_preferences_last_updated" );
		if ( GHomepage.strCommunityRecommendationsPrefLastSaved )
		{
			elemPrefLastUpdated.text( 'Using preferences saved on %1$s'.replace( "%1$s", GHomepage.strCommunityRecommendationsPrefLastSaved ) );
		}

		GDynamicStore.MarkAppDisplayed( rgCapsules, 4 );
		$Ctn.show();
	},

	RenderTopVRApps: function()
	{
		var $TopVRTitles =  $J('.best_selling_vr_ctn' );
		if ( !$TopVRTitles.length )
			return;

		const k_nMinCapsules = $J( 'body' ).hasClass('v7') ? 5 : 4;
		const k_nMaxCapsules = $J( 'body' ).hasClass('v7') ? 15 : 16;

		var rgCapsules = GHomepage.FilterItemsForDisplay(
			GHomepage.oDisplayLists.top_vr, 'home', k_nMinCapsules, k_nMaxCapsules, { games_already_in_library: false, dlc: false, localized: true, displayed_elsewhere: false }
		);

		if ( rgCapsules.length < k_nMinCapsules )
		{
			$TopVRTitles.hide();
			return;
		}

		GHomepage.FillPagedCapsuleCarousel( rgCapsules, $TopVRTitles,
			function( oItem, strFeature, rgOptions, nDepth )
			{
				if ( $TopVRTitles.hasClass( 'v2' ) )
				{
					return GHomepage.BuildHomePageCapsule( oItem, strFeature, { 'disable_autosizer': true, 'lazy': true } );
				}
				return GHomepage.BuildHomePageGenericCap(strFeature, oItem.appid, oItem.packageid, oItem.bundleid, rgOptions, nDepth );
			},	'best_selling_vr', k_nMinCapsules
		);

		GDynamicStore.MarkAppDisplayed( rgCapsules, k_nMinCapsules );

		$TopVRTitles.show();
	},


	RenderSpotlightSection: function()
	{
		const $Parent = $J( '#module_special_offers' );
		var $Spotlights = $J('#spotlight_carousel');
		if ( $Spotlights.length == 0 )
		{
			$Parent.hide();
			return;
		}

		var $Pages = $J('#spotlight_carousel > .carousel_items .home_special_offers_group');

		var oShownItems = {};
		var Settings = {
			games_already_in_library: false, localized: true, displayed_elsewhere: false, only_current_platform: true,
			dlc_for_you: true,
			include_priority: true };
				var SettingsSpotlights = {
			games_already_in_library: false, localized: true, displayed_elsewhere: false, only_current_platform: true,
			include_priority: true };
						var rgSpotlights = GDynamicStorePage.FilterAndPrioritizeCapsules( $J('.home_area_spotlight', $Pages), 'spotlights', 'home', SettingsSpotlights, oShownItems );
		var rgDailyDeals = GDynamicStorePage.FilterAndPrioritizeCapsules( $J('.store_capsule.daily_deal', $Pages), 'spotlights', 'home', Settings, oShownItems, 2 );
		var rgSpecials = GDynamicStorePage.FilterAndPrioritizeItems( GHomepage.oDisplayLists.specials, 'spotlights', 'home', Settings, oShownItems, 16 );

		// rebuild pages one at a time
		$Pages.empty();

		let nMaxSpotlightColumns = GHomepage.k_nMaxSpotlightColumns;

		for ( var iPage = 0; iPage < $Pages.length; iPage++ )
		{
			var cColumnsUsed = 0;
			var cItemsInCol = 0;
			var $Col = null;
			var $Page = $J($Pages[iPage]);
			var rgItemsShown = [];

			var fnSetSNRDepth = function( snr ) {
				var rgParts = snr.split('_');
				rgParts[5] = iPage + 1;
				return rgParts.join('_');
			};

			// put in spotlights
			while ( rgSpotlights.length && cColumnsUsed < nMaxSpotlightColumns )
			{
				// a high priority indicates we wanted to filter it (eg, already owned).  Show at most 1 on first page.
				if ( cColumnsUsed >= 1 && rgSpotlights[0].priority >= 3 )
					break;

				var spotlight = rgSpotlights.shift();

				// never show ignored spotlights
				if ( spotlight.priority >= 4 )
					continue;

				$J( spotlight.capsule ).find( 'a' ).each( function() { ModifyLinkSNR( $J(this), fnSetSNRDepth ); } );
				rgItemsShown.push( spotlight );
				$Page.append( spotlight.capsule );
				cColumnsUsed++;
			}

			if ( cColumnsUsed === 1 )
			{
				$Page.addClass( 'spotlight_single_column' );
			}
			else if ( cColumnsUsed === 2 )
			{
				$Page.addClass( 'spotlight_double_column' );
			}

			// next prefer daily deals
			while ( rgDailyDeals.length && cColumnsUsed < 3 )
			{
				// don't show bad matches on the first couple of pages
				if (  iPage < 2 && rgDailyDeals[0].priority >= 3 )
					break;

				var dailydeal = rgDailyDeals.shift();
				// never show ignored daily deals
				if ( dailydeal.priority >= 4 )
					continue;

				if ( !$Col )
				{
					$Col = $J('<div/>', { 'class': 'spotlight_col capsules_col responsive_scroll_snap_start', 'data-panel': '{"maintainY":true,"flow-children":"column"}' } );
					$Page.append( $Col );
				}

				$J( dailydeal.capsule ).find( 'a' ).each( function() { ModifyLinkSNR( $J(this), fnSetSNRDepth ); } );
				$Col.append( dailydeal.capsule );
				rgItemsShown.push( dailydeal );

				if ( ++cItemsInCol >= 2 )
				{
					GHomepage.AddMicrotrailersToStaticCaps( $Col );
					$Col = null;
					cItemsInCol = 0;
					cColumnsUsed++;

					// if we don't have many good daily deals to show on front page, stop now
					if ( iPage == 0 && rgDailyDeals.length && rgDailyDeals[0].priority >= 3 )
						break;
				}
			}

			while ( rgSpecials.length && cColumnsUsed < 3 )
			{
				var oItem = rgSpecials.shift();

				if ( !$Col )
				{
					$Col = $J('<div/>', { 'class': 'spotlight_col capsules_col responsive_scroll_snap_start', 'data-panel': '{"maintainY":true,"flow-children":"column"}' } );
					$Page.append( $Col );
				}

				if ( $Spotlights.hasClass( 'v2' ) )
				{
					var rgItemData = GStoreItemData.GetCapParamsForItem( 'spotlight_specials', oItem, {} );
					if ( !rgItemData )
						continue;

					$Col.append ( GHomepage.BuildHomePageCapsule( oItem, 'spotlight_specials', {
						'discount_class': 'daily_deal_discount discount_block_large',
						'capsule_size': 'header',
						'disable_autosizer': true,
						lazy: 1,
					}, iPage + 1 ) );
				}
				else
				{
					var $Target = $J( '<div/>', {'class': 'specials_target' });
					$Target.append ( GHomepage.BuildHomePageGenericCap ( 'spotlight_specials', oItem.appid, oItem.packageid, oItem.bundleid, {
						'discount_class': 'daily_deal_discount discount_block_large',
						'capsule_size': 'header',
						lazy: true
					}, iPage + 1 ) );
					$Col.append( $Target );
				}

				rgItemsShown.push( oItem );

				if ( ++cItemsInCol >= 2 )
				{
					$Col = null;
					cItemsInCol = 0;
					cColumnsUsed++;
				}
			}

			if ( iPage == 0 )
				GDynamicStore.MarkAppDisplayed( rgItemsShown );
		}

		GDynamicStore.DecorateDynamicItems( $Spotlights );
		CreateFadingCarousel( $Spotlights, 0, false, null, $Spotlights.hasClass( 'v2' ) );
		$Parent.css( 'minHeight', '' );
		$Spotlights.css( 'visibility', '' );

		GHomepage.bSpotlightSectionRendered = true;

		// the recommendations request can land before we get here
		GHomepage.ApplySpotlightRecommendations();
	},

	LoadSpotlightRecommendations: function()
	{
		if ( g_AccountID == 0 )
			return;

		// nothing to personalize unless the carousel has pages past the ones we leave alone
		var $Pages = $J( '#spotlight_carousel > .carousel_items .home_special_offers_group' );
		if ( $Pages.length <= GHomepage.k_iFirstPersonalizedSpotlightPage )
			return;

		try {
			$J.ajax( {
				url: "https:\/\/store.steampowered.com\/default\/home_spotlight_recommendations\/",
				data: {
					v: 2,						u: g_AccountID,
				},
				dataType: 'json',
				type: 'GET'
			}).done( function( data ) {

				GStoreItemData.AddStoreItemDataSet( data.item_data );

				GHomepage.rgSpotlightRecommendations = data.spotlight_recommendations;
				GHomepage.rgSpotlightPanels = data.spotlight_panels;
				GHomepage.oSpotlightRecsDebug = data._debug_spotlight_recs;
				GHomepage.ApplySpotlightRecommendations();

			});
		} catch(e) { OnHomepageException(e); }
	},

	ApplySpotlightRecommendations: function()
	{
		// we rebuild pages this section already rendered, so there's nothing to do until it has
		if ( !GHomepage.bSpotlightSectionRendered )
			return;

		// The panels come first: FillSpotlightSpecials() dedupes against the pages it is leaving alone, which is
		// where the panels are, so it has to see them in place before it picks its capsules.
		var rgPanels = GHomepage.rgSpotlightPanels;
		if ( rgPanels && rgPanels.length )
			GHomepage.ApplySpotlightPanels( rgPanels );

		// Still worth going through even with no recommendations to place, if the panels left us daily deals to
		// carry on to the trailing pages: they have already come off the leading ones by now.
		var rgRecs = GHomepage.rgSpotlightRecommendations || [];
		if ( !rgRecs.length && !GHomepage.rgSpotlightCarryDeals.length )
			return;

		// the specials we're replacing are the fallback for when we don't have enough recommendations
		GHomepage.FillSpotlightSpecials( GHomepage.k_iFirstPersonalizedSpotlightPage, rgRecs, GHomepage.oDisplayListsRaw.specials );
	},

	// Purpose: top the carousel's large panel slots up with recommendations, alongside whatever spotlights are
	// already scheduled there rather than in place of them.
	// Each page has to be laid out again rather than added to: a page whose panel columns aren't all taken has
	// given them over to capsules, so those have to be repacked to make room.
	ApplySpotlightPanels: function( rgPanels )
	{
		var $Pages = $J( '#spotlight_carousel > .carousel_items .home_special_offers_group' );
		if ( !$Pages.length )
			return;

		var cPages = Math.min( $Pages.length, GHomepage.k_nSpotlightPanelPages );

		// Everything the carousel is going to keep, so a recommendation is never placed as a panel while the same
		// game is also sitting in a capsule somewhere.  RenderSpotlightSection() chose the capsules on the leading
		// pages before the recommendations existed, so they were never filtered against them, and it attributes
		// them as spotlight specials - a game in both places reports under both features.
		// The capsules past k_iFirstPersonalizedSpotlightPage are left out on purpose: FillSpotlightSpecials()
		// throws those away and picks again, deduping against our panels as it goes.
		var $Kept = $J( '.home_area_spotlight, .store_capsule.daily_deal', $Pages )
			.add( $J( '.store_capsule, .sale_capsule', $Pages.slice( 0, GHomepage.k_iFirstPersonalizedSpotlightPage ) ) );

		var oShownAppIDs = {};
		$Kept.each( function() {
			// A package or bundle capsule lists every app it holds, which is what catches a game we would
			// otherwise duplicate inside one
			var strAppIDs = $J( this ).data( 'ds-appid' );
			if ( !strAppIDs )
				return;

			String( strAppIDs ).split( ',' ).forEach( function( strAppID ) { oShownAppIDs[ strAppID ] = true; } );
		} );

		var iPanel = 0;
		GHomepage.cSpotlightPanelsPlaced = 0;
		GHomepage.cSpotlightPanelsDuplicate = 0;
		GHomepage.rgSpotlightPanelsKept = [];
		GHomepage.rgSpotlightPanelDailyDeals = [];

		for ( var iPage = 0; iPage < cPages; iPage++ )
		{
			var $Page = $J( $Pages[ iPage ] );
			var $Existing = $J( '.home_area_spotlight', $Page );

			// Note the spotlights already here, so the debug log can say what was scheduled against what we
			// added.  A spotlight can be associated with a package or a bundle rather than an app, and one that
			// is just a link has no association at all, which is why the id is reported as we find it.
			$Existing.each( function() {
				var itemid = GDynamicStorePage.ItemIDFromCapsule( $J( this ) );

				var rgData = null;
				if ( itemid && itemid.appid )
					rgData = GStoreItemData.rgAppData[ itemid.appid ];
				else if ( itemid && itemid.packageid )
					rgData = GStoreItemData.rgPackageData[ itemid.packageid ];
				else if ( itemid && itemid.bundleid )
					rgData = GStoreItemData.rgBundleData[ itemid.bundleid ];

				GHomepage.rgSpotlightPanelsKept.push( $J.extend(
					{ page: iPage + 1, name: rgData ? rgData.name : null }, itemid ) );
			} );

			var $DailyDeals = $J( '.store_capsule.daily_deal', $Page );
			GHomepage.rgSpotlightPanelDailyDeals.push( $DailyDeals.length );

			// Build before tearing anything down, so the page is left as it was if none of the recommendations
			// we had earmarked for it turn out to be buildable
			var rgBuilt = [];
			while ( rgBuilt.length < GHomepage.k_nMaxSpotlightColumns - $Existing.length && iPanel < rgPanels.length )
			{
				var oRec = rgPanels[ iPanel++ ];
				if ( oShownAppIDs[ oRec.appid ] )
				{
					GHomepage.cSpotlightPanelsDuplicate++;
					continue;
				}

				var $Panel = GHomepage.BuildSpotlightPanel( oRec, iPage + 1 );
				if ( !$Panel )
					continue;

				rgBuilt.push( $Panel );
				oShownAppIDs[ oRec.appid ] = true;
			}

			// FillSpotlightSpecials() lays the pages from k_iFirstPersonalizedSpotlightPage on out again below and
			// takes the carried over deals off us, so on those pages all we have to do is get the panels in.
			if ( iPage >= GHomepage.k_iFirstPersonalizedSpotlightPage )
			{
				for ( var iAppend = 0; iAppend < rgBuilt.length; iAppend++ )
					$Page.append( rgBuilt[ iAppend ] );

				GHomepage.cSpotlightPanelsPlaced += rgBuilt.length;
				continue;
			}

			if ( !rgBuilt.length && !GHomepage.rgSpotlightCarryDeals.length )
				continue;

			// Everything comes off the page so it can be laid out again around the panels.  Detaching the deals
			// first is what leaves the second selector holding only the specials.
			var rgDeals = GHomepage.rgSpotlightCarryDeals.concat( $DailyDeals.detach().get() );
			var rgSpecials = $J( '.store_capsule, .sale_capsule', $Page ).detach().get();

			$Existing.detach();

			$Page.empty();
			$Page.removeClass( 'spotlight_single_column spotlight_double_column' );

			// The scheduled spotlights keep the lead; the recommendations take the columns they left free
			$Page.append( $Existing );

			for ( var iBuilt = 0; iBuilt < rgBuilt.length; iBuilt++ )
				$Page.append( rgBuilt[ iBuilt ] );

			var cColumnsUsed = $Existing.length + rgBuilt.length;
			GHomepage.cSpotlightPanelsPlaced += rgBuilt.length;

			if ( cColumnsUsed === 1 )
			{
				$Page.addClass( 'spotlight_single_column' );
			}
			else if ( cColumnsUsed === 2 )
			{
				$Page.addClass( 'spotlight_double_column' );
			}

			// Daily deals fill the half height slots the panels left, then the specials take whatever is still
			// free.  Deals this page has no room for move on to the next one rather than being dropped, so the
			// thing that actually gives way to a panel is a special.
			var cSlotsFree = ( GHomepage.k_nSpotlightColumnsPerPage - cColumnsUsed ) * GHomepage.k_nSpotlightCapsulesPerColumn;

			var rgCapsules = rgDeals.slice( 0, cSlotsFree );
			GHomepage.rgSpotlightCarryDeals = rgDeals.slice( rgCapsules.length );

			if ( rgCapsules.length < cSlotsFree )
				rgCapsules = rgCapsules.concat( rgSpecials.slice( 0, cSlotsFree - rgCapsules.length ) );

			var $Col = null;
			var cItemsInCol = 0;
			for ( var iCapsule = 0; iCapsule < rgCapsules.length; iCapsule++ )
			{
				if ( !$Col )
				{
					$Col = $J('<div/>', { 'class': 'spotlight_col capsules_col responsive_scroll_snap_start', 'data-panel': '{"maintainY":true,"flow-children":"column"}' } );
					$Page.append( $Col );
				}

				$Col.append( rgCapsules[ iCapsule ] );

				if ( ++cItemsInCol >= GHomepage.k_nSpotlightCapsulesPerColumn )
				{
					GHomepage.AddMicrotrailersToStaticCaps( $Col );
					$Col = null;
					cItemsInCol = 0;
				}
			}
		}

		GDynamicStore.DecorateDynamicItems( $J( '#spotlight_carousel' ) );
	},

	// Purpose: build one of the carousel's large panels for an app, matching what the server renders for a
	// curated spotlight that has no artwork of its own.
	BuildSpotlightPanel: function( item, nDepth )
	{
		// The feature and depth are what land these in the same 'spotlight' bucket as the curated panels they
		// stand in for, so the two are measured against each other.
		var params = { 'class': 'home_area_spotlight responsive_scroll_snap_start' };
		var rgItemData = GStoreItemData.GetCapParamsForItem( 'spotlight', item, params, nDepth );
		if ( !rgItemData )
			return null;

		// A curated spotlight with no assets falls back to the app's hero capsule, so an app without one has
		// nothing to draw at this size
		var strImage = rgItemData.hero_capsule_2x || rgItemData.hero_capsule;
		if ( !strImage )
			return null;

		var strHref = params.href;
		delete params.href;

		var $Panel = $J( '<div/>', $J.extend( {}, params, {
			'role': 'link',
			'data-panel': '{"clickOnActivate":"firstChild","flow-children":"column"}'		} ) );

		GStoreItemData.BindHoverEventsForItem( $Panel, item );

		var $Link = $J( '<a/>', { 'href': strHref } );
		$Link.append( $J( '<img/>', { 'src': strImage, 'alt': rgItemData.name, 'border': 0 } ) );
		$Link.append( $J( '<div/>', { 'class': 'home_capsule_banner' } ).text( GHomepage.k_strSpotlightPanelBanner ) );

		$Panel.append( $J( '<div/>', { 'class': 'spotlight_img' } ).append( $Link ) );

		if ( rgItemData.discount_block )
		{
			var $Price = $J( '<div/>', { 'class': 'spotlight_body spotlight_price price' } )
				.append( $J( rgItemData.discount_block ).addClass( 'discount_block_spotlight discount_block_large' ) );

			$Panel.append( $J( '<div/>', { 'class': 'spotlight_bottom_ctn' } ).append( $Price ) );
		}

		return $Panel;
	},

	FillSpotlightSpecials: function( iStartPage, rgItems, rgFallbackItems )
	{
		var $Spotlights = $J( '#spotlight_carousel' );
		if ( $Spotlights.length == 0 )
			return;

		var $Pages = $J( '#spotlight_carousel > .carousel_items .home_special_offers_group' );
		if ( iStartPage >= $Pages.length )
			return;

		var Settings = {
			games_already_in_library: false,
			localized: true,
			displayed_elsewhere: false,
			only_current_platform: true,
			dlc_for_you: true,
			include_priority: true
		};

		// Daily deals are placed from one queue for the whole range rather than page by page, so the ones the
		// leading pages had no room for after the panels went in land here instead of being dropped.
		var rgDeals = GHomepage.rgSpotlightCarryDeals.concat(
			$J( '.store_capsule.daily_deal', $Pages.slice( iStartPage ) ).detach().get() );

		GHomepage.rgSpotlightCarryDeals = [];

		// Seed the dedupe set from the pages we're leaving alone so we don't repeat anything already shown.
		// Panels and daily deals are seeded wherever they are rather than only from those pages: the rebuild
		// below keeps every one of them, so they are all already-shown items.
		// This only reads the capsules, it doesn't move them.  Server rendered capsules are .store_capsule,
		// the ones we build client side are .sale_capsule.
		var oShownItems = {};
		GDynamicStorePage.FilterAndPrioritizeCapsules(
			$J( '.store_capsule, .sale_capsule', $Pages.slice( 0, iStartPage ) ).get()
				.concat( $J( '.home_area_spotlight', $Pages ).get() )
				.concat( rgDeals ),
			'spotlights', 'home', Settings, oShownItems, 0 );

		// three columns per page, two capsules per column
		var cSlots = ( $Pages.length - iStartPage ) * 3 * 2;

		var cSent = rgItems.length;
		var rgSpecials = GDynamicStorePage.FilterAndPrioritizeItems( rgItems, 'spotlights', 'home', Settings, oShownItems, cSlots );

		// Everything past this point in rgSpecials came from the fallback, which lets us tell apart the capsules
		// we came here to show from the ones we are trying to replace.
		var cAfterFilter = rgSpecials.length;

		// Top up from the fallback list when we come up short.  It gets filtered separately, and afterwards,
		// rather than as one combined list: the 'spotlights' priority list covers the items we're replacing but
		// not our recommendations, so sorting the two together orders the whole fallback ahead of everything we
		// came here to show.  Sharing oShownItems keeps the two lists from repeating each other.
		if ( rgSpecials.length < cSlots && rgFallbackItems && rgFallbackItems.length )
		{
			rgSpecials = rgSpecials.concat( GDynamicStorePage.FilterAndPrioritizeItems( rgFallbackItems, 'spotlights', 'home', Settings, oShownItems, cSlots - rgSpecials.length ) );
		}

		var cShifted = 0;
		var cPlaced = 0;
		var cPlacedRecs = 0;
		var cNoCapParams = 0;

		for ( var iPage = iStartPage; iPage < $Pages.length; iPage++ )
		{
			var $Page = $J( $Pages[iPage] );

			// Detach and hold the Spotlight entries, since we're not changing those and we want to restore them in
			// our rebuild of the panel.  The daily deals came off every page already, into rgDeals.
			var $Spotlight = $J( '.home_area_spotlight', $Page ).detach();

			// Clear the panel
			$Page.empty();

			// Put Spotlight back
			$Page.append( $Spotlight );

			var cColumnsUsed = $Spotlight.length;
			var cItemsInCol = 0;
			var $Col = null;

			// Put the daily deals back, lazy-creating columns and keeping track of waht we've filled
			while ( rgDeals.length && cColumnsUsed < 3 )
			{
				if ( !$Col )
				{
					$Col = $J('<div/>', { 'class': 'spotlight_col capsules_col responsive_scroll_snap_start', 'data-panel': '{"maintainY":true,"flow-children":"column"}' } );
					$Page.append( $Col );
				}

				$Col.append( rgDeals.shift() );

				if ( ++cItemsInCol >= 2 )
				{
					GHomepage.AddMicrotrailersToStaticCaps( $Col );
					$Col = null;
					cItemsInCol = 0;
					cColumnsUsed++;
				}
			}

			// Fill the rest with our specials, also lazy-creating columns
			while ( rgSpecials.length && cColumnsUsed < 3 )
			{
				var oItem = rgSpecials.shift();
				var bFromRecs = ( cShifted++ < cAfterFilter );

				if ( !GStoreItemData.GetCapParamsForItem( 'spotlight_specials', oItem, {} ) )
				{
					cNoCapParams++;
					continue;
				}

				if ( !$Col )
				{
					$Col = $J('<div/>', { 'class': 'spotlight_col capsules_col responsive_scroll_snap_start', 'data-panel': '{"maintainY":true,"flow-children":"column"}' } );
					$Page.append( $Col );
				}

				$Col.append( GHomepage.BuildHomePageCapsule( oItem, 'spotlight_specials', {
					'discount_class': 'daily_deal_discount discount_block_large',
					'capsule_size': 'header',
					'disable_autosizer': true,
				}, iPage + 1 ) );

				cPlaced++;
				if ( bFromRecs )
				{
					cPlacedRecs++;
				}

				if ( ++cItemsInCol >= 2 )
				{
					$Col = null;
					cItemsInCol = 0;
					cColumnsUsed++;
				}
			}
		}

		// The rest of the funnel, to go with the numbers the endpoint reports about the draw itself.  'placed' is
		// well under 'slot_budget' whenever the pages we rebuild kept spotlights or daily deals of their own,
		// since those take their slots first.  Anything we come up short by is made up from the fallback, so
		// placed_from_fallback counts capsules showing the items we are trying to replace.
		if ( GHomepage.oSpotlightRecsDebug )
		{
			console.log( 'spotlight recs', $J.extend( {}, GHomepage.oSpotlightRecsDebug, {
				sent: cSent,
				slot_budget: cSlots,
				after_filter: cAfterFilter,
				placed: cPlaced,
				placed_from_recs: cPlacedRecs,
				placed_from_fallback: cPlaced - cPlacedRecs,
				skipped_no_cap_params: cNoCapParams,
				panels_sent: GHomepage.rgSpotlightPanels ? GHomepage.rgSpotlightPanels.length : 0,
				panels_placed: GHomepage.cSpotlightPanelsPlaced,
				panels_skipped_duplicate: GHomepage.cSpotlightPanelsDuplicate,
				panels_kept: GHomepage.rgSpotlightPanelsKept,
				daily_deals_by_page: GHomepage.rgSpotlightPanelDailyDeals
			} ) );
		}

		GDynamicStore.DecorateDynamicItems( $Spotlights );
	},


	RenderTopNewReleases: function()
	{
		var $TopNewReleasesCarousel = $J('.top_new_releases_carousel');

		if ( !$TopNewReleasesCarousel.length || !GHomepage.oDisplayLists.top_new_releases.length )
			return;

		var rgCapsules = GHomepage.FilterItemsForDisplay(
			GHomepage.oDisplayLists.top_new_releases, 'home', 4, 12, { games_already_in_library: false, localized: true, displayed_elsewhere: false, only_current_platform: true  }
		);

		GDynamicStore.MarkAppDisplayed( rgCapsules, 4 );

		GHomepage.FillPagedCapsuleCarousel( rgCapsules, $TopNewReleasesCarousel,
			function( oItem, strFeature, rgOptions, nDepth )
			{
				if ( $TopNewReleasesCarousel.hasClass( 'v2' ) )
				{
					return GHomepage.BuildHomePageCapsule( oItem, strFeature, { 'disable_autosizer': true } );
				}

				return GHomepage.BuildHomePageGenericCap(strFeature, oItem.appid, oItem.packageid, oItem.bundleid, rgOptions, nDepth );
			},	'top_new_releases', 4
		);
	},

	RenderSteamDeckCarousel: function()
	{
		let $SteamDeckCarousel = $J( '#featured_steam_deck_games' );
		const k_nMinItemsInCarousel = 4;

		if ( !$SteamDeckCarousel.length || !GHomepage.oDisplayLists.top_played_deck.length )
			return;

		let rgSteamDeckGames = GHomepage.FilterItemsForDisplay(
			GHomepage.oDisplayLists.top_played_deck, 'home', k_nMinItemsInCarousel, 24, { games_already_in_library: false, localized: true, displayed_elsewhere: false, only_current_platform: true, enforce_minimum: false }
		);

		if ( rgSteamDeckGames.length >= k_nMinItemsInCarousel )
		{
			GHomepage.FillPagedCapsuleCarousel( rgSteamDeckGames, $SteamDeckCarousel, function( oItem, strFeature, rgOptions, nDepth ) {
				return GHomepage.BuildHomePageGenericCap(strFeature, oItem.appid, oItem.packageid, oItem.bundleid, rgOptions, nDepth );
			}, 'sale_deck_mostplayed', k_nMinItemsInCarousel );

			GDynamicStore.MarkAppDisplayed( rgSteamDeckGames, k_nMinItemsInCarousel );
		}
	},

	RenderSteamDeckCarouselv2: function()
	{
		let $SteamDeckCarousel = $J( '#featured_steam_deck_gamesv2' );
		let $SteamDeckParent = $J( '#home_deck_content' );
		const k_nMinItemsInCarousel = 5;

		if ( !$SteamDeckCarousel.length || !GHomepage.oDisplayLists.top_played_deck.length )
		{
			$SteamDeckParent.hide();
			return;
		}

		let oFilterOptions = { games_already_in_library: false, localized: true, displayed_elsewhere: false, only_current_platform: true };
		if ( GHomepage.bIsSeasonalSale )
			oFilterOptions = $J.extend( { has_discount: true,  enforce_minimum: true }, oFilterOptions );

		const rgSteamDeckGames = GHomepage.FilterItemsForDisplay( GHomepage.oDisplayLists.top_played_deck, 'home', k_nMinItemsInCarousel, 24, oFilterOptions );

		if ( rgSteamDeckGames.length < k_nMinItemsInCarousel )
		{
			$SteamDeckParent.hide();
			return;
		}

		GHomepage.FillPagedCapsuleCarousel( rgSteamDeckGames, $SteamDeckCarousel, function( oItem, strFeature, rgOptions, nDepth ) {
			return GHomepage.BuildHomePageCapsule( oItem, strFeature, { 'disable_autosizer': true } );
		}, 'sale_deck_mostplayed', k_nMinItemsInCarousel );

		GDynamicStore.MarkAppDisplayed( rgSteamDeckGames, k_nMinItemsInCarousel );
	},

	RenderContentHubCarousel: function()
	{
		var $contentHubCarousel = $J( '.content_hub_carousel' );

		if ( !$contentHubCarousel.length || !GHomepage.rgContentHubs.length )
			return;

		// We'll cycle through these colors for the gradients.
		var rgColors = [
			'rgb(139,0,0)',
			'rgb(0,0,139)',
			'rgb(184,134,11)',
			'rgb(0,100,0)',
			'rgb(0,139,139)',
			'rgb(139,0,139)',
			'rgb(233,140,0)',
		];

		var iColor = 0;
		const bVersion2 = $contentHubCarousel.hasClass( 'v2' );

		let nCarouselItems = 4;
		if ( bVersion2 )
			nCarouselItems = 5;

		GHomepage.FillPagedCapsuleCarousel( GHomepage.rgContentHubs, $contentHubCarousel,
			function( item, strFeature, rgOptions, nDepth )
			{
				var cc = "us";
				var l = "english";

				let strCapsuleClass = "content_hub_capsule_ctn responsive_scroll_snap_start";
				if ( bVersion2 )
					strCapsuleClass = "content_hub_capsule_ctn";

				var $capsule = $J( '<a/>', {
					"class": strCapsuleClass,
					"href": GStoreItemData.AddNavEventParamsToURL( "https://store.steampowered.com/" + item.strSalePageURL, strFeature, nDepth, null )
				} );

				var strImageURL = item.strSalePageURL;
				if ( item.strID == 'f2p' )
				{
					// The f2p hub is at /genre/Free To Play, but the image will be at /categories/image/freetoplay.
					strImageURL = 'freetoplay';
				}
				else if ( item.strSalePageURL.startsWith( 'tags/' ) && item.rgTagIDs.length > 0 )
				{
					// Tag hubs are at /tags/(language)/(tag name), but the image will be at /categories/image/tags/(tagid).
					strImageURL = 'tags/' + item.rgTagIDs[0];
				}

				var $image = $J( '<img/>', {
					'src': "https://store.fastly.steamstatic.com/public/images/blank.gif",
					"alt": '',	// intentionally blank, there is text overlaid on top of the image
					"data-image-url": "https://store.fastly.steamstatic.com/" + "categories/homepageimage/" + strImageURL + "?cc=" + cc + "&l=" + l + "&v=2",
				} );
				$capsule.append( $image );

				var $gradient = $J( '<div/>', {
					"class": "gradient",
					//"style": "background: linear-gradient(rgba(0,0,0,0), " + rgColors[iColor] + " 100%"
				} );
				$capsule.append( $gradient );

				iColor = ( iColor + 1 ) % rgColors.length;

				var $labelCtn = $J( '<div/>', {
					"class": "label_ctn"
				} );
				$capsule.append( $labelCtn );

				var $label = $J( '<span/>', {
					"class": "label"
				} );
				$labelCtn.append( $label );

				$label.append( item.strLocToken );

				return $capsule;
			}, 'content_hub_carousel', nCarouselItems
		);
	},

	RenderRecentlyUpdatedV2: function()
	{
		var $RecentlyUpdated =  $J('.recently_updated_block' );
		if ( !$RecentlyUpdated.length || !GHomepage.oAdditionalData.recent_updates )
			return;

		var rgCapsules = GHomepage.FilterItemsForDisplay( GHomepage.oAdditionalData.recent_updates, 'home', 4, 8 );

		GHomepage.FillPagedCapsuleCarousel( rgCapsules, $RecentlyUpdated,
			function( oItem, strFeature, rgOptions, nDepth )
			{
				if ( $RecentlyUpdated.hasClass( 'v2' ) )
				{
					let $elAnnouncements = $J('<div/>', {'class': 'recently_updated_desc'} ).text( oItem.description );
					let rgOptions = { 'disable_autosizer': true, 'lazy': true, 'html_before_price': $elAnnouncements };
					if ( oItem.announcementid )
					{
						rgOptions.href = 'https://store.steampowered.com/' + 'app/' + oItem.appid + '?announce_gid=' + oItem.announcementid;
					}

					return GHomepage.BuildHomePageCapsule( oItem, strFeature, rgOptions );
				}
				else
				{
					var $CapCtn = GHomepage.BuildHomePageGenericCap(strFeature, oItem.appid, null, null, rgOptions, nDepth);
					$CapCtn.append($J('<div/>', {'class': 'recently_updated_desc'}).text(oItem.description));
					if (oItem.announcementid.length != 0) {
						const strAnnouncementLink = 'https://store.steampowered.com/' + 'news/app/' + oItem.appid + '/view/' + oItem.announcementid + '/';
						var $AnnouncementLink = $J('<div/>', {
							'class': 'recently_updated_announcement_link',
							'text': 'View Update Details',
							'data-ds-link': strAnnouncementLink
						});
						$AnnouncementLink.click(function (e) {
							top.location.href = $J(this).attr('data-ds-link');
							return false;
						});
						$CapCtn.append($AnnouncementLink);

					}
					return $CapCtn;
				}
			},	'recently_updated', 4
		);


	},

	RenderTagBucketSection: function()
	{
		let $Parent = $J( '#home_accountblocks_section' );
		if ( !$Parent.length )
			return;

		$J( '#home_wishlistdlc_section' ).hide();

		const rgTagBuckets = [ ...GHomepage.rgAccountTagBuckets, ...GHomepage.rgFeaturedTagBuckets ];

		let $TagBlocksSection = $J( '#home_tags_section' );
		if ( !rgTagBuckets.length || !$TagBlocksSection.length )
		{
			$Parent.hide();
			return;
		}

		const k_cTagBucketsToShow = 2;
		let cTagBlocksShown = 0;
		for( var iTag = 0; iTag < rgTagBuckets.length && cTagBlocksShown < k_cTagBucketsToShow; iTag++ )
		{
			const TagData = rgTagBuckets[iTag];
			if ( !TagData.items )
				continue;

			let rgItemsPassingFilter = GHomepage.FilterItemsForDisplay(
				TagData.items, 'home', 4, 4, { games_already_in_library: false, localized: true, displayed_elsewhere: false, only_current_platform: true, enforce_minimum: false }
			);

			if ( rgItemsPassingFilter.length !== 4 )
				continue;

			let bGamepad = ( window.UseGamepadScreenMode && window.UseGamepadScreenMode() );
			let $Ctn = $J( '<div/>', {'class': 'home_discounts_block', 'data-gp-morebutton': TagData.url } );

			let $TitleCtn = $J('<div/>', { 'class': 'home_title_ctn' } ).append( $J('<div/>', { 'class': 'home_title'}).html( TagData.name ) );
			$TitleCtn.append( $J('<div/>', { 'class': 'home_section_subtitle'} ).text( TagData.recommended ? 'Recommended tag based on what you play' : 'Featured tag' ) )
			$Ctn.append( $TitleCtn );

			let $GamesCtn =  $J('<div/>', { 'class': 'home_discount_games_ctn' } );
			$GamesCtn.attr( 'data-panel', '{"flow-children":"geometric"}' );
			GHomepage.RenderHomeTwoByTwoSection( $GamesCtn, rgItemsPassingFilter, 'sale_tag_bucket_top' );
			$Ctn.append( $GamesCtn );

			if ( bGamepad )
			{
				let $SeeMore = $J( '<div/>', { 'class' : 'see_more_gamepad_hint' } );
				$SeeMore.append( `
					<div class="see_more_gamepad_hint">
						<img src="https://store.fastly.steamstatic.com/public/images/ico_gamepad/shared_button_y.svg">
						<div>See More</div>
					</div>
				`);
				$Ctn.append( $SeeMore );
			}
			else
			{
				let $SeeMore = $J('<div/>', { 'class': 'see_more_link' } );
				$SeeMore.append( $J('<a/>', {'class': 'btnv6_white_transparent btn_small_tall', 'href': TagData.url } ).html( '<span>' + 'See More' + '</span>' ) );
				$Ctn.append( $SeeMore );
			}

			$TagBlocksSection.append( $Ctn );
			GDynamicStore.MarkAppDisplayed( rgItemsPassingFilter );
			cTagBlocksShown++;
		}

		if ( cTagBlocksShown === 1 )
		{
			$Parent.find( '.home_discount_games_ctn' ).addClass( 'single_row' );
		}

		this.InitGamepadMoreSections();

		$Parent.css( { minHeight: '' } );
	},

	RenderWishlistAndDLCArea: function()
	{
		let $Parent = $J('#home_accountblocks_section');
		if ( !$Parent.length )
			return;

		var rgWishlistOnSaleFiltered = GHomepage.FilterItemsForDisplay(
			GHomepage.oAdditionalData.wishlist_onsale, 'home', 4, 4, { games_already_in_library: false, localized: true, displayed_elsewhere: false, only_current_platform: true }
		);

		var rgDLCOnSaleFiltered = GHomepage.FilterItemsForDisplay(
			GHomepage.oAdditionalData.dlc_onsale, 'home', 4, 4, { games_already_in_library: false, localized: true, displayed_elsewhere: false, only_current_platform: true }
		);

		// fallback to tags section
		if ( rgWishlistOnSaleFiltered.length < 4 && rgDLCOnSaleFiltered.length < 4 )
		{
			GHomepage.RenderTagBucketSection();
			return;
		}

		var bSingle = rgWishlistOnSaleFiltered.length < 4 || rgDLCOnSaleFiltered.length < 4;
		if ( rgWishlistOnSaleFiltered.length === 4 )
		{
			if ( bSingle )
				$J('#wishlist_tier').addClass( 'single_row' );

			GHomepage.RenderHomeTwoByTwoSection( $J('#wishlist_tier' ), rgWishlistOnSaleFiltered, 'sale_fromyourwishlist', { 'capsule_size': 'header' } );
			GDynamicStore.MarkAppDisplayed( rgWishlistOnSaleFiltered );
			$J('.wishlist_block').show();
		}

		if ( rgDLCOnSaleFiltered.length === 4 )
		{
			if ( bSingle )
				$J('#dlc_tier').addClass( 'single_row' );
			GHomepage.RenderHomeTwoByTwoSection( $J('#dlc_tier' ), rgDLCOnSaleFiltered, 'sale_dlcforyou', { 'capsule_size': 'header' } );
			GDynamicStore.MarkAppDisplayed( rgDLCOnSaleFiltered );
			$J('.dlc_block').show();
		}

		// we load with a fixed height to prevent the page from jumping around.  Eliminate that now.
		$Parent.css( { minHeight: '' } );
	},

	FilterTabs: function()
	{
		var rgTabSections =  ['#tab_newreleases_content', '#tab_specials_content', '#tab_topsellers_legacy_content', '#tab_trendingfree_content' ];

		for( var i=0; i<rgTabSections.length; i++)
		{
			GHomepage.FilterTab( rgTabSections[i] );
		}

		GHomepage.FilterTab( '#tab_upcoming_content', { prepurchase: true } );
	},

	FilterTab: function( id, opts )
	{
		var Settings = $J.extend( { games_already_in_library: false, only_current_platform: true }, opts );

		var $elTabSection = $J( id );
		if ( !$elTabSection.length )
			return;

		if ( $elTabSection.children('.tab_content_items').length )
			$elTabSection = $elTabSection.children('.tab_content_items');

		let nItems = 10;
		let $elTabItems = $elTabSection.children('.tab_item');

		let bVersion2 = false;
		if ( !$elTabItems.length )
		{
			$elTabItems = $elTabSection.children('.tab_row_item');
			bVersion2 = true;
		}

		GDynamicStorePage.FilterCapsules( nItems, nItems, $elTabItems, $elTabSection, Settings );

		// the results of $elTabSection.children('.tab_item') will change after the call to FilterCapsules above
		if ( bVersion2 )
		{
			GHomepage.InstrumentTabbedSectionv2( $elTabItems );
		}
		else
		{
			GHomepage.InstrumentTabbedSection( $elTabItems );
		}
	},

	FillPagedCapsuleCarousel: function( rgCapsules, $elTarget, fnCapsule, strNavContext, nCapsules )
	{
		var $elCapsuleTarget = $J('.carousel_items', $elTarget);
		var $elThumbTarget = $J('.carousel_thumbs', $elTarget);
		var bUseGamepadScreenMode = window.UseGamepadScreenMode && window.UseGamepadScreenMode();
		var strViewAllLink = "";

				if ( bUseGamepadScreenMode )
		{
			var $elAnchor = $J('a.deck_view_all_action_link', $elTarget);
			if ( $elAnchor && $elAnchor.attr('href') !== undefined )
				strViewAllLink = $elAnchor.attr('href');
		}

		var bPaginated = !$elCapsuleTarget.hasClass('no_paging');

		if ( !bPaginated )
			nCapsules = rgCapsules.length;

				if( rgCapsules.length < nCapsules )
			return;

		var nPage = 0;

		for( var j=0; j<rgCapsules.length; j+=nCapsules )
		{
			// Try to avoid half-filling a page
			if( j > 0 && j+nCapsules > rgCapsules.length && bPaginated )
				break;

			var $elPageContainer = $J('<div>');
			$elPageContainer.attr( 'data-panel', '{"maintainX":true,"flow-children":"row"}' );
			for( var k=0; k < nCapsules && k + j < rgCapsules.length; k++ )
			{
				var oItem = rgCapsules[ k + j ];
				var rgOptions = {};
				if( j > 0 )
					rgOptions.lazy = true;
				var $CapCtn = fnCapsule( oItem, strNavContext, rgOptions, nPage + 1 );
				if( !$CapCtn )
					continue;

								if ( bUseGamepadScreenMode && strViewAllLink !== "" )
				{
					const panelString = '{"onOptionsActionDescription":"View all","onOptionsButton":"window.location=\'%1$s\'"}';
					$CapCtn.attr( 'data-panel', panelString.replace( '%1$s', strViewAllLink ) );
				}

				// Don't try to do automatic visibilty tracking on non-visible clusters.
				if( j > 0 )
					$CapCtn.attr('data-manual-tracking', 1);

				$elPageContainer.append( $CapCtn );

			}

			$elCapsuleTarget.append($elPageContainer);
			nPage++;

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

	RenderUnder10: function()
	{
		let $elUnder10 = $J('.specials_under10');
		if ( $elUnder10.length == 0 )
		{
			return;
		}

		var rgCapsules = GHomepage.FilterItemsForDisplay(
			GHomepage.oDisplayLists.under10, 'home', 4, 28, { games_already_in_library: false, dlc: false, localized: true, displayed_elsewhere: false, only_current_platform: true }
		);

		if( rgCapsules.length < 4 )
		{
			rgCapsules = GHomepage.FilterItemsForDisplay(
				GHomepage.oDisplayLists.under10, 'home', 4, 28, { games_already_in_library: false, localized: true, only_current_platform: true }
			);
		}

		GHomepage.FillPagedCapsuleCarousel( rgCapsules, $elUnder10, function( oItem, strFeature, rgOptions, nDepth ) {
			return GHomepage.BuildHomePageGenericCap(strFeature, oItem.appid, oItem.packageid, oItem.bundleid, rgOptions, nDepth );
		} , 'under10', 4 );
	},

	RenderUnder10v2: function()
	{
		const $Parent = $J( '#sale_under10_area' );
		if ( !$Parent.length )
			return;

		let oFilterOptions = {
			games_already_in_library: false,
			localized: true,
			displayed_elsewhere: false,
			only_current_platform: true,
		};

		if ( GHomepage.bIsSeasonalSale )
		{
			oFilterOptions = { ...oFilterOptions, has_discount: true };
		}

		const k_nMinCapsules = 5;

		var rgUnder10Filtered = GHomepage.FilterItemsForDisplay( GHomepage.oDisplayLists.under10, 'home', k_nMinCapsules, k_nMinCapsules * 5, oFilterOptions );

		rgUnder10Filtered.splice( rgUnder10Filtered.length - ( rgUnder10Filtered.length % k_nMinCapsules ) );
		if ( rgUnder10Filtered.length >= k_nMinCapsules )
		{
			GHomepage.FillPagedCapsuleCarousel( rgUnder10Filtered, $Parent.find('.carousel_container'), function( oItem, strFeature, rgOptions, nDepth ) {
				return GHomepage.BuildHomePageCapsule( oItem, 'under10', { 'disable_autosizer': true, 'lazy': true } );
			} , 'under10', k_nMinCapsules );

			GDynamicStore.MarkAppDisplayed ( rgUnder10Filtered, k_nMinCapsules );
			$Parent.show();
		}
	},

	RenderWishlistOnSale: function( rgItems )
	{
				if ( !rgItems || !rgItems.length )
			return;

		GHomepage.FillPagedCapsuleCarousel( rgItems, $J('.wishlist_on_sale'), function( oItem, strFeature, rgOptions, nDepth ) {
			return GHomepage.BuildHomePageGenericCap(strFeature, oItem.appid, oItem.packageid, oItem.bundleid, rgOptions, nDepth);
		} , 'sale_fromyourwishlist', 4 );

		GDynamicStore.MarkAppDisplayed ( rgItems, 4 );
	},


	MergeLists: function( /* rgList1, bShuffle1, rgList2, bShuffleList2, rgList3, bShuffleList3, etc... */ )
	{
		return GHomepage.MergeListsInternal( arguments, false );
	},

	ZipLists: function( /* rgList1, bShuffle1, rgList2, bShuffleList2, rgList3, bShuffleList3, etc... */ )
	{
		return GHomepage.MergeListsInternal( arguments, true );
	},

	MergeListsInternal: function( args, bZip )
	{
		var rgLists = [];
		for ( var iArg = 0; iArg < args.length; iArg++ )
		{
			var rgList = args[iArg] || [];
			if ( iArg + 1 < args.length && args[++iArg] )
				rgList = v_shuffle( rgList.slice() );
			rgLists.push( rgList );
		}

		var oIncludedItems = {};
		var rgOutput = [];

		var fnAddItem = function( rgItem ) {
			var key = GHomepage.ItemKey( rgItem );
			if ( !oIncludedItems[key] )
			{
				oIncludedItems[key] = true;
				rgOutput.push( rgItem );
				return true;
			}
			return false;
		};

		if ( bZip )
		{
			var rgIndicies = [];
			while( rgIndicies.length < rgLists.length )
				rgIndicies.push( 0 );

			var bRemaining = true;
			while ( bRemaining )
			{
				bRemaining = false;
				for( var iList = 0; iList < rgLists.length; iList++ )
				{
					var rgList = rgLists[iList];
					var i = rgIndicies[iList];
					if ( i >= rgList.length )
						continue;

					// keep trying to add until one sticks
					while( i < rgList.length && !fnAddItem( rgList[i++] ) )
						;
					rgIndicies[iList] = i;
					bRemaining = true;
				}
			}
		}
		else
		{
			for ( var iList = 0; iList < rgLists.length; iList++ )
			{
				var rgList = rgLists[iList];
				for ( var i = 0; i < rgList.length; i++ )
					fnAddItem( rgList[i] );
			}
		}

		return rgOutput;
	},

	BuildHomePageHeaderCap: function( strFeatureContext, unAppID, unPackageID )
	{
		var params = { 'class': 'home_headercap' };
		var rgItemData = GStoreItemData.GetCapParams( strFeatureContext, unAppID, unPackageID, null, params );
		if ( !rgItemData )
			return null;

		var $CapCtn = $J('<a/>', params );
		GStoreItemData.BindHoverEvents( $CapCtn, unAppID, unPackageID );

		$CapCtn.append( $J('<img/>', { src: rgItemData.header } ) );
		$CapCtn.append( $J('<div/>', {'class': 'home_smallcap_title ellipsis' } ).html( rgItemData.name ) );
		$CapCtn.append( $J('<div/>').html( rgItemData.discount_block ? $J(rgItemData.discount_block).addClass('discount_block_inline') : '&nbsp;' ) );

		return $CapCtn;
	},

	BuildHomePageGenericCap: function( strFeatureContext, unAppID, unPackageID, unBundleID, rgOptions, nDepth )
	{
		var rgOptions = $J.extend({
			'class': 'store_capsule responsive_scroll_snap_start',
			'include_title': false,
			'discount_class': 'discount_block_inline',
			'capsule_size': 'headerv5',
			'html_before_price': '',
			'lazy': false
		}, rgOptions ? rgOptions : {} );

		var params = { 'class': rgOptions.class + ' broadcast_capsule' };
		var rgItemData = GStoreItemData.GetCapParams( strFeatureContext, unAppID, unPackageID, unBundleID, params, nDepth );
		if ( !rgItemData )
			return null;

		var $CapCtn = $J('<a/>', params );

		if ( !rgOptions.no_hover )
			GStoreItemData.BindHoverEvents( $CapCtn, unAppID, unPackageID, unBundleID );

		var $ImgCtn = $J('<div class="capsule"/>').addClass( rgOptions.capsule_size );

		var rgImageProperties = { alt: rgItemData.name };
		if ( rgOptions.lazy )
			rgImageProperties['data-image-url'] = rgItemData[rgOptions.capsule_size];
		else
			rgImageProperties['src'] = rgItemData[rgOptions.capsule_size];

		$ImgCtn.append( $J('<img/>', rgImageProperties ) );
		$CapCtn.append( $ImgCtn );
		if( rgOptions.include_title )
			$CapCtn.append( $J('<div/>', {'class': 'title ellipsis' } ).html( rgItemData.name ) );

		if( rgOptions.html_before_price )
			$CapCtn.append( rgOptions.html_before_price );

		$CapCtn.append( $J('<div/>').html( rgItemData.discount_block ? $J(rgItemData.discount_block).addClass( rgOptions.discount_class ) : '&nbsp;' ) );

		if( rgItemData.has_live_broadcast )
		{
			$ImgCtn.append(	$J('<div/>', {'class': 'broadcast_live_stream_icon' } ).append( 'Live') );
		}

		var rgAppInfo = GStoreItemData.rgAppData[ unAppID ];
		if ( rgAppInfo && rgAppInfo.has_live_broadcast )
		{
			$CapCtn.append(
					$J('<div/>', {'class': 'broadcast_live_stream_icon' } ).append( 'Live')
			);
		}

		if ( rgAppInfo && rgAppInfo.mastersub_granting_app )
		{
			$divMasterSub = $J('<div/>', {'class': 'cluster_maincap_grantingapp grantedbymastersub'} );
			$imgMasterSub = $J('<img/>', {'class': 'grantedbymastersub_app', 'src': rgAppInfo.mastersub_granting_app.capsule, 'alt': rgAppInfo.mastersub_granting_app.name } );
			$divMasterSub.append( $imgMasterSub );

			$ImgCtn.append( $divMasterSub );
		}

		return $CapCtn;
	},

	BuildHomePageCapsule: function( item, strFeatureContext, rgCapsuleOptions, nDepth )
	{
		const rgOptions = $J.extend({
			'class': 'sale_capsule',
			'include_title': false,
			'discount_class': 'discount_block_inline',
			'capsule_size': 'main_capsule',
			'html_before_price': '',
			'disable_autosizer': false,
			'lazy': false,
			'no_hover': false,
			'microtrailerOnImageHover': false,
			'curator_clanid': null,
		}, rgCapsuleOptions ? rgCapsuleOptions : {} );

		var params = { 'class': rgOptions.class };

		if( item && item.feature && item.feature.length > 0 )
		{
			strFeatureContext = item.feature;
		}

		if ( rgOptions.curator_clanid )
			params['curator_clanid'] = rgOptions.curator_clanid;

		var rgItemData = GStoreItemData.GetCapParamsForItem( strFeatureContext, item, params, nDepth );
		if ( !rgItemData )
			return;

		var $CapCtn = $J('<a/>', params );
		if ( rgOptions.href )
			$CapCtn.attr( 'href', GStoreItemData.AddNavEventParamsToURL( rgOptions.href, strFeatureContext, nDepth, null ) );

		if ( rgOptions.microtrailerOnImageHover )
			$CapCtn.data( 'microtrailerOnImageHover', true );

		if ( !rgOptions.no_hover )
			GStoreItemData.BindHoverEventsForItem( $CapCtn, item );

		const rgDefaultImageProperties = { 'alt': rgItemData.name, 'class': 'sale_capsule_image' };
		let rgImageProperties = {};
		if ( rgOptions.disable_autosizer )
		{
			if ( rgOptions.lazy )
			{
				rgImageProperties[ 'data-image-url' ] = rgItemData[ rgOptions.capsule_size ];

				let src = 'https://store.fastly.steamstatic.com/public/images/v6/home/maincap_placeholder_616x353.gif';
				if ( rgOptions.capsule_size === 'header' )
					src = 'https://store.fastly.steamstatic.com/public/images/v6/home/header_placeholder_460x215.gif';

				rgImageProperties['src'] = src;
			}
			else
				rgImageProperties['src'] = rgItemData[rgOptions.capsule_size];
		}
		else
		{
			if ( rgOptions.capsule_size === 'small_capsule' )
			{
				rgImageProperties['src'] = rgItemData[rgOptions.capsule_size];
			}
			else
			{
				if ( rgOptions.capsule_size === 'header' && typeof rgItemData['header'] !== 'undefined' )
				{
					rgImageProperties = {
						'class': 'sale_capsule_image autosize',
						'src': 'https://store.fastly.steamstatic.com/public/images/v6/home/header_placeholder_460x215.gif',
						'data-src-header': rgItemData['header'],
					};
				}
				else
				{
					rgImageProperties = {
						'class': 'sale_capsule_image autosize',
						'src': 'https://store.fastly.steamstatic.com/public/images/v6/home/maincap_placeholder_616x353.gif',
						'data-src-maincap': rgItemData['main_capsule'],
					};
				}

				rgImageProperties['data-src-smallcap'] = rgItemData['small_capsule'];
			}
		}

		const $Img = $J('<img/>', $J.extend( {}, rgDefaultImageProperties, rgImageProperties ) );
		let $CapsuleImgCtn = $J('<div/>', {'class': 'capsule_image_ctn' } ).append( $Img );

		$CapCtn.append( $CapsuleImgCtn );
		GHomepage.AddHoverEffectToCapsule( $CapCtn, rgItemData );

		if ( rgOptions.html_before_price )
		{
			$CapCtn.append( $J('<div/>', {'class': 'capsule_row_ctn' } ).append( rgOptions.html_before_price ) );
		}

		$CapCtn.append( rgItemData.discount_block ? $J(rgItemData.discount_block).addClass( rgOptions.discount_class ) : '&nbsp;' );

		var rgAppInfo = GStoreItemData.rgAppData[ item.appid ];
		if ( rgAppInfo && rgAppInfo.has_live_broadcast )
		{
			$CapCtn.append( $J('<div/>', {'class': 'broadcast_live_stream_icon' } ).append( 'Live') );
		}

		return $CapCtn;
	},

	AddMicrotrailersToStaticCaps: function( $Parent )
	{
		$Parent.children( '.add_microtrailer' ).each( function() {
			GHomepage.AddHoverEffectToCapsule( $J(this), null, $J(this).data('microtrailer') );
		});
	},

	AddHoverEffectToCapsule: function( $CapCtn, rgItemData, strMicrotrailerData )
	{
		if ( !rgItemData && !strMicrotrailerData )
			return;

		if ( window.UseTouchFriendlyMode() && !window.UseGamepadScreenMode() )
			return;

		let $ImgCtn = $CapCtn.find('.capsule_image_ctn').first();

		const strMicrotrailerWebmSrc = strMicrotrailerData ?? rgItemData?.microtrailer;
		if ( GDynamicStore.s_preferences.disable_microtrailers || !strMicrotrailerWebmSrc )
		{
			if ( rgItemData?.screenshots )
			{
				let ScreenshotsCtn = $J('<div/>', {'class': 'capsule_hover_screenshots'});
				for (let i = 0; i < rgItemData.screenshots.length && i < 4; i++) {
					const screenshot = $J('<div/>', {
						'class': 'screenshot capsule_screenshot_load',
						'data-background': 'url(' + GetScreenshotURL(rgItemData.screenshots[i].appid, rgItemData.screenshots[i].filename, '.600x338') + ')'
					});
					ScreenshotsCtn.append( screenshot )
				}

				$ImgCtn.append( ScreenshotsCtn );

				$CapCtn.on('mouseenter vgp_onfocus', function () {
					if ( window.UseTouchFriendlyMode() && !window.UseGamepadScreenMode() )
						return;

					$J(this).addClass('hover_active');
					$J(this).find('.capsule_screenshot_load').each( function () {
						$J(this).css('backgroundImage', $J(this).data('background') );
					});
				});

				$CapCtn.on('mouseleave vgp_onblur', function () {
					$J(this).removeClass('hover_active');
				});

				$CapCtn.data('hoverDisableScreenshots', true);
			}
		}
		else if ( strMicrotrailerWebmSrc )
		{
			$CapCtn.addClass( 'with_microtrailer' );
			$CapCtn.data('hoverDisableScreenshots', true );

			const bOnImageHover = $CapCtn.data('microtrailerOnImageHover');

			let $elOnHover = $CapCtn;
			if ( bOnImageHover && $ImgCtn.length && !window.UseGamepadScreenMode() )
				$elOnHover = $ImgCtn;

			$elOnHover.one( 'mouseenter vgp_onfocus', function()
			{
				let $Video = null;
				if ( $ImgCtn.children( '.sale_capsule_video' ).length === 0 )
				{
					$Video = $J('<video/>', {'class': 'sale_capsule_video', loop: true, preload: 'none', playsinline: true }).prop( "muted", true )
						.append($J("<source>", {src: strMicrotrailerWebmSrc, type: "video/webm"}));
					$ImgCtn.append( $Video );
				}
				else
				{
					$Video = $ImgCtn.children( '.sale_capsule_video' ).first();
				}

				var playPromise;
				let playTimerID;
				var fnPlay = function() {
					if ( window.UseTouchFriendlyMode() && !window.UseGamepadScreenMode() )
						return;

					$CapCtn.addClass( 'with_microtrailer' );
					$CapCtn.addClass( 'microtrailer_active' );

					playPromise = $Video[0].play();
					if ( playPromise )
					{
						playPromise.catch( function( e ) {
							$CapCtn.removeClass( 'with_microtrailer' );
						} );
					}
				};
				var fnPause = function() {
					clearTimeout( playTimerID );
					if ( playPromise )
						playPromise.then( function() { $Video[0].pause() } );
					else
						$Video[0].pause();

					$CapCtn.removeClass( 'microtrailer_active' );
				};

				$J( this ).on( 'mouseenter vgp_onfocus', fnPlay );
				$J( this ).on( 'mouseleave vgp_onblur', fnPause );

				const nWaitToFirstPlayMs = window.UseGamepadScreenMode() ? 500 : 1;
				playTimerID = window.setTimeout( fnPlay, nWaitToFirstPlayMs );
			});
		}
	},

	RenderHomeCapsuleBlock: function( rgItems, $Parent, strFeatureContext )
	{
		var rgRemainingItems = rgItems;

		if ( !strFeatureContext )
			strFeatureContext = 'sale_dailydeals';

		var bFourRow = true;
		while( rgRemainingItems.length )
		{
			if ( rgRemainingItems.length < 4 || rgRemainingItems.length == 6 || rgRemainingItems.length == 9 )
				bFourRow = false;
			else if ( rgRemainingItems.length == 4 )
				bFourRow = true;
			rgRemainingItems = GHomepage.RenderHomeCapsuleRow( rgRemainingItems, $Parent, 4, strFeatureContext );
			bFourRow = !bFourRow;
		}
		GHomepage.BindHomeCapAutoSizeEvents( $Parent );
		GDynamicStore.DecorateDynamicItems( $Parent );
		$Parent.css('min-height', '');
	},

	RenderHomeCapsuleRow: function( rgItems, $Parent, nItems, strFeatureContext, fnRenderFunc )
	{
		var rgItemsThisRow = rgItems.slice( 0, nItems );
		if ( !fnRenderFunc )
			fnRenderFunc = GHomepage.BuildHomePageCapsule;

		if ( rgItemsThisRow.length <= 3 )
		{
			var $Row = $J('<div/>', {'class': 'salerow salerow3' } );

			$Row.append(
				rgItemsThisRow[0] && fnRenderFunc( rgItemsThisRow[0], strFeatureContext ),
				rgItemsThisRow[1] && fnRenderFunc( rgItemsThisRow[1], strFeatureContext ),
				rgItemsThisRow[2] && fnRenderFunc( rgItemsThisRow[2], strFeatureContext )
			);

			$Parent.append( $Row );
		}
		else
		{
			var $Row = $J('<div/>', {'class': 'salerow salerow4' } );

			$Row.append(
				fnRenderFunc( rgItemsThisRow[0], strFeatureContext ),
				fnRenderFunc( rgItemsThisRow[1], strFeatureContext ),
				fnRenderFunc( rgItemsThisRow[2], strFeatureContext ),
				fnRenderFunc( rgItemsThisRow[3], strFeatureContext )
			);

			$Parent.append( $Row );
		}

		return rgItems.slice( rgItemsThisRow.length );
	},

	BindHomeCapAutoSizeEvents: function( $Container )
	{
		var $AutosizeImages = $Container.find('img.sale_capsule_image.autosize');
		var mqSwitchToSmall = window.matchMedia ? window.matchMedia("(max-width: 580px)") : {matches: false};

		if ( !$AutosizeImages.length )
			return;

		var id = 'AdjustSaleCaps_' + ( GHomepage.AutoSizeListenerCount++ );

		$J(window ).on('resize.' + id, function() {
			var rgSwitchToMain = [], rgSwitchToSmall = [], rgSwitchToHeader = [];
			$AutosizeImages.each( function() {
				var $Img = $J(this);
				if ( mqSwitchToSmall.matches && $Img.width() <= 176 )
				{
					if ( $Img.data('src-smallcap') != $Img.attr('src') )
						rgSwitchToSmall.push( $Img );
				}
				else
				{
					if ( typeof $Img.data('src-header') !== 'undefined' && $Img.data('src-header') != $Img.attr('src') )
					{
						rgSwitchToHeader.push( $Img );
					}
					else if ( $Img.data('src-maincap') != $Img.attr('src') )
					{
						rgSwitchToMain.push( $Img );
					}
				}
			});

			for ( var i =0; i < rgSwitchToHeader.length; i++ )
				rgSwitchToHeader[i].attr( 'src', rgSwitchToHeader[i].data('src-header') );
			for ( var i =0; i < rgSwitchToMain.length; i++ )
				rgSwitchToMain[i].attr( 'src', rgSwitchToMain[i].data('src-maincap') );
			for ( var i =0; i < rgSwitchToSmall.length; i++ )
				rgSwitchToSmall[i].attr( 'src', rgSwitchToSmall[i].data('src-smallcap') );
		} ).trigger('resize.' + id);
	},

	RenderHomeTwoByTwoSection: function( $Container, rgItems, strFeature, rgCapsuleOptions )
	{
		$Container.append(
			rgItems[0] && GHomepage.BuildHomePageCapsule( rgItems[0], strFeature, rgCapsuleOptions ),
			rgItems[1] && GHomepage.BuildHomePageCapsule( rgItems[1], strFeature, rgCapsuleOptions ),
			rgItems[2] && GHomepage.BuildHomePageCapsule( rgItems[2], strFeature, rgCapsuleOptions ),
			rgItems[3] && GHomepage.BuildHomePageCapsule( rgItems[3], strFeature, rgCapsuleOptions )
		);

		GDynamicStore.DecorateDynamicItems( $Container );
		GHomepage.BindHomeCapAutoSizeEvents( $Container );
	},

	SelectCommunityRecommendationFromIndex: function( appContainer, reviewIdx )
	{
		var relatedReview = $J( "#Review" + appContainer.data( 'recommendationid_' + reviewIdx ) );
		relatedReview.siblings().removeClass( "focus" );
		relatedReview.siblings().attr( "inert", true );
		relatedReview.siblings().attr( "aria-hidden", true );
		relatedReview.addClass( "focus" );
		relatedReview.removeAttr( "inert" );

		appContainer.data( "currentreviewidx", reviewIdx );
	},

	BuildCommunityRecommendationCap: function( strFeatureContext, oItem ) {
		var unAppID = oItem.appid;
		var params = {'class': 'community_recommendation_capsule responsive_scroll_snap_start'};
		var rgItemData = GStoreItemData.GetCapParamsForItem(strFeatureContext, oItem, params);

		var rgReviews = GHomepage.rgCommunityRecommendationsByAppID[unAppID] || [];

		if (!rgItemData || !rgReviews || rgReviews.length == 0)
			return null;

		var itemParams = {'class': 'community_recommendation_app responsive_scroll_snap_start'};
		let $Item = $J('<div>', itemParams);
		var bUseGamepadScreenMode = window.UseGamepadScreenMode && window.UseGamepadScreenMode();
		if (bUseGamepadScreenMode) {
			GStoreItemData.GetCapParamsForItem(strFeatureContext, oItem, itemParams);
			$Item = $J('<a/>', itemParams);
		}

		$Item.data('hoverDisableScreenshots', true);
		GStoreItemData.BindHoverEventsForItem($Item, oItem);

		var $ItemLink = $J('<a/>', params);
		$Item.append($ItemLink);

		// app image
		// app image anchor
		var $ImageCapsule = $J('<div/>');
		$ImageCapsule.addClass('capsule');

		var $Image = $J('<img/>', {
			src: 'https://store.fastly.steamstatic.com/public/images/blank.gif',
			'data-image-url': rgItemData.main_capsule ? rgItemData.main_capsule : rgItemData.header,
			alt: rgItemData.name
		});
		if (!rgItemData.main_capsule) {
			$Image.css({'height': '288px'});
		}
		$Image.bind('error', function () {
			$Image.attr('src', rgItemData.header);
			$Image.css({'height': '288px'});
		});
		$ImageCapsule.append($Image);
		$ImageCapsule.append($J('<div/>').html(rgItemData.discount_block ? $J(rgItemData.discount_block).addClass('discount_block_large main_cap_discount') : '&nbsp;'));

		$ItemLink.append($ImageCapsule);

		// micro trailer
		if (rgItemData.microtrailer) {
			let $Video = $J('<video class="microtrailer_video" loop muted playsinline aria-hidden=true>').appendTo($ImageCapsule);
			$Video.on("canplay", function () {
				$Item.addClass("has_microtrailer");
			});
			$Video.on("playing", function () {
				$Item.addClass("has_microtrailer");
			});

			$Item.hover(
				function () {
					if (!$Video.hasClass("added_source")) {
						$Video.addClass("added_source");
						$Video.append($J("<source>", {src: rgItemData.microtrailer, type: "video/webm"}));
					}

					playPromise = $Video[0].play();
					if (playPromise) {
						playPromise.catch(function (e) {
							$Item.removeClass('has_microtrailer');
						});
					}
				},

				function () {
					$Video[0].pause();
				}
			);
		}

		var $RightCol = $J('<div>', {class: 'right_col'}).appendTo($Item);
		var $ReviewsCtn = $J('<div/>', {class: 'community_recommendations_block'}).appendTo($RightCol);

		let numReviews = rgReviews.length;
		if (numReviews > 1) {
			$Item.data('currentreviewidx', 0);

			let strNumReviews = '%1$s of %2$s reviews'.replace("%1$s", 1).replace("%2$s", numReviews);

			let pagingThumbs = $J('<div>', {class: 'paging_thumbs'}).appendTo($RightCol);

			let arrowLeft = $J('<div>', {
				class: 'community_recommendation_arrow left',
				text: "<"
			}).appendTo(pagingThumbs);
			let numReviewsElem = $J('<div>', {class: 'num_reviews_desc', text: strNumReviews}).appendTo(pagingThumbs);
			let arrowRight = $J('<div>', {
				class: 'community_recommendation_arrow right',
				text: ">"
			}).appendTo(pagingThumbs);

			arrowLeft.click(function () {
				var curIdx = $Item.data("currentreviewidx");
				curIdx = (curIdx + numReviews - 1) % numReviews;
				var strNumReviews = '%1$s of %2$s reviews'.replace("%1$s", curIdx + 1).replace("%2$s", numReviews);
				numReviewsElem.text(strNumReviews);

				GHomepage.SelectCommunityRecommendationFromIndex($Item, curIdx);
			});

			arrowRight.click(function () {
				var curIdx = $Item.data("currentreviewidx");
				curIdx = (curIdx + 1) % numReviews;
				var strNumReviews = '%1$s of %2$s reviews'.replace("%1$s", curIdx + 1).replace("%2$s", numReviews);
				numReviewsElem.text(strNumReviews);

				GHomepage.SelectCommunityRecommendationFromIndex($Item, curIdx);
			});
		}

		// add reviews
		for( var i = 0; i < rgReviews.length; ++i)
		{
			var review = rgReviews[i];

			$Item.data( 'recommendationid_' + i, review.recommendationid );

			var $Review = $J( '<div>', { id: "Review" + review.recommendationid, class : 'review_box' } ).appendTo( $ReviewsCtn );
			if ( numReviews >= 1 )
			{
				if ( i == 0 )
				{
					$Review.addClass( "focus" );
				}
				else
				{
					$Review.attr( "aria-hidden", true );
					$Review.attr( "inert", true );
				}
			}

			var $Content = $Review.append( $J( '<div>', { class: 'content', text: '"' + review.review_text + '"' } ) );

			var $ViewMore = $J( '<div class="view_more"><a href="' + review.review_link + '" target="_blank">Read Entire Review</a></div>' );
			$Content.append( $ViewMore );

			var reviewer = GStoreItemData.GetAccountData( null, review.accountid );
			if ( reviewer )
			{
				var $AuthorBlock = $J( '<div>', { class: "author_block" } ).appendTo( $Review );
				var $AvatarCap = $J('<div class="avatar"><a href="%1$s" data-miniprofile="%3$s"><div class="playerAvatar"><img src="https://store.fastly.steamstatic.com/public/images/blank.gif" data-image-url="%2$s" alt="%4$s"></div></a></div>'.replace(/\%1\$s/g, reviewer.url).replace(/\%2\$s/g, GetAvatarURL( reviewer.avatar ) ).replace(/\%3\$s/g, reviewer.accountid).replace(/\%4\$s/g, reviewer.name) );
				$AuthorBlock.append( $AvatarCap );

				var $AuthorDetails = $J( '<div>' ).appendTo( $AuthorBlock );
				var $AvatarName = $J('<div class="persona_name"><a href="%1$s" data-miniprofile="%3$s">%2$s</a></div>'.replace(/\%1\$s/g, reviewer.url).replace(/\%2\$s/g, reviewer.name ).replace(/\%3\$s/g, reviewer.accountid) );
				$AuthorDetails.append( $AvatarName );
				if ( review.playtime_at_review > 0 )
				{
					var strHours = 'Played %s hrs at review time'.replace( "%s", v_numberformat( review.playtime_at_review / 60, 1 ) );
					$AuthorDetails.append( $J( '<div>', { class: "hours ellipsis", text: strHours } ) );
				}
				if ( review.votes_up > 0 )
				{
					var voteUpText = '1 person found this review helpful';
					if ( review.votes_up > 1 )
					{
						voteUpText = '%2$s people found this review helpful'.replace( "%2$s", v_numberformat( review.votes_up ) );
					}
					$AuthorDetails.append( $J( '<div>', { class: "hours vote_info", text: voteUpText } ) );
				}
			}
		}

		return $Item;
	},

	BuildCommunityRecommendationCapV2: function( strFeatureContext, oItem )
	{
		var unAppID = oItem.appid;
		var params = { 'class' : 'community_recommendation_capsule responsive_scroll_snap_start' };
		var rgItemData = GStoreItemData.GetCapParamsForItem( strFeatureContext, oItem, params );

		var rgReviews = GHomepage.rgCommunityRecommendationsByAppID[ unAppID ] || [];

		if ( !rgItemData || !rgReviews || rgReviews.length == 0 )
			return null;

		var itemParams = { 'class' : 'community_recommendation_app responsive_scroll_snap_start' };
		let $Item = $J( '<div>', itemParams );
		$Item.data( 'microtrailerOnImageHover', 1 );

		var bUseGamepadScreenMode = window.UseGamepadScreenMode && window.UseGamepadScreenMode();
		if ( bUseGamepadScreenMode )
		{
			GStoreItemData.GetCapParamsForItem( strFeatureContext, oItem, itemParams );
			$Item = $J( '<a/>', itemParams );
		}

		$Item.data('hoverDisableScreenshots', true );
		GStoreItemData.BindHoverEventsForItem( $Item, oItem );

		var $ItemLink = $J('<a/>', params );
		$Item.append( $ItemLink );

		// app image
		// app image anchor
		var $ImageCapsule = $J ( '<div/>' );
		$ImageCapsule.addClass('capsule capsule_image_ctn');

		var $Image = $J('<img/>', { src: 'https://store.fastly.steamstatic.com/public/images/blank.gif', 'data-image-url': rgItemData.header, 'data-image2x-url': rgItemData.header_2x ?? '',  alt: rgItemData.name } );

		$Image.bind('error', function(){
			$Image.attr('src', rgItemData.header  );
			$Image.css({'height': '337x' });
		});
		$ImageCapsule.append( $Image );
		$ItemLink.append( $ImageCapsule );

		var $RightCol = $J( '<div>', { class : 'right_col' } ).appendTo( $Item );
		$J('<div/>', { class: 'app_name'} ).html( rgItemData.name ).appendTo( $RightCol );

		var $ReviewsCtn = $J('<div/>', { class: 'community_recommendations_block'} ).appendTo( $RightCol );

		let numReviews = rgReviews.length;
		if ( numReviews > 1 )
		{
			$Item.data( 'currentreviewidx', 0 );

			let strNumReviews = '%1$s of %2$s reviews'.replace( "%1$s", 1 ).replace( "%2$s", numReviews );

			let pagingThumbs = $J( '<div>', { class: 'paging_thumbs' } ).appendTo( $RightCol );

			let arrowLeft = $J( '<div>', { class: 'review_arrow left'  } ).append( $J( '<div/>' ) );
			arrowLeft.appendTo( pagingThumbs );
			let numReviewsElem = $J( '<div>', { class: 'num_reviews_desc', text: strNumReviews } ).appendTo( pagingThumbs );
			let arrowRight = $J( '<div>', { class: 'review_arrow right' } ).append( $J( '<div/>' ) );
			arrowRight.appendTo( pagingThumbs );

			arrowLeft.click( function() {
				var curIdx = $Item.data( "currentreviewidx" );
				curIdx = ( curIdx + numReviews - 1 ) % numReviews;
				var strNumReviews = '%1$s of %2$s reviews'.replace( "%1$s", curIdx + 1 ).replace( "%2$s", numReviews );
				numReviewsElem.text( strNumReviews );

				GHomepage.SelectCommunityRecommendationFromIndex( $Item, curIdx );
			});

			arrowRight.click( function() {
				var curIdx = $Item.data( "currentreviewidx" );
				curIdx = ( curIdx + 1 ) % numReviews;
				var strNumReviews = '%1$s of %2$s reviews'.replace( "%1$s", curIdx + 1 ).replace( "%2$s", numReviews );
				numReviewsElem.text( strNumReviews );

				GHomepage.SelectCommunityRecommendationFromIndex( $Item, curIdx );
			});
		}
		else
		{
			$J( '<div>', { class: 'paging_thumbs' } ).appendTo( $RightCol );
		}

		// add reviews
		for( var i = 0; i < rgReviews.length; ++i)
		{
			var review = rgReviews[i];

			$Item.data( 'recommendationid_' + i, review.recommendationid );

			var $Review = $J( '<div>', { id: "Review" + review.recommendationid, class : 'review_box' } ).appendTo( $ReviewsCtn );
			if ( numReviews >= 1 )
			{
				if ( i == 0 )
				{
					$Review.addClass( "focus" );
				}
				else
				{
					$Review.attr( "aria-hidden", true );
					$Review.attr( "inert", true );
				}
			}

			var $Content = $Review.append( $J( '<div>', { class: 'content', text: '"' + review.review_text + '"' } ) );

			var $ViewMore = $J( '<div class="view_more"><a href="' + review.review_link + '" target="_blank">Read Entire Review</a></div>' );
			$Content.append( $ViewMore );

			var reviewer = GStoreItemData.GetAccountData( null, review.accountid );
			if ( reviewer )
			{
				var $AuthorBlock = $J( '<div>', { class: "author_block" } ).appendTo( $Review );
				var $AvatarCap = $J('<div class="avatar"><a href="%1$s" data-miniprofile="%3$s"><div class="playerAvatar"><img src="https://store.fastly.steamstatic.com/public/images/blank.gif" data-image-url="%2$s" alt="%4$s"></div></a></div>'.replace(/\%1\$s/g, reviewer.url).replace(/\%2\$s/g, GetAvatarURL( reviewer.avatar ) ).replace(/\%3\$s/g, reviewer.accountid).replace(/\%4\$s/g, reviewer.name) );
				$AuthorBlock.append( $AvatarCap );

				var $AuthorDetails = $J( '<div>' ).appendTo( $AuthorBlock );
				var $AvatarName = $J('<div class="persona_name"><a href="%1$s" data-miniprofile="%3$s">%2$s</a></div>'.replace(/\%1\$s/g, reviewer.url).replace(/\%2\$s/g, reviewer.name ).replace(/\%3\$s/g, reviewer.accountid) );
				$AuthorDetails.append( $AvatarName );
				if ( review.playtime_at_review > 0 )
				{
					var strHours = 'Played %s hrs at review time'.replace( "%s", v_numberformat( review.playtime_at_review / 60, 1 ) );
					$AuthorDetails.append( $J( '<div>', { class: "hours ellipsis", text: strHours } ) );
				}
				if ( review.votes_up > 0 )
				{
					var voteUpText = '1 person found this review helpful';
					if ( review.votes_up > 1 )
					{
						voteUpText = '%2$s people found this review helpful'.replace( "%2$s", v_numberformat( review.votes_up ) );
					}
					$AuthorDetails.append( $J( '<div>', { class: "hours vote_info", text: voteUpText } ) );
				}
			}
		}

		let $BottomCtn = $J('<div/>', {class: 'info_bottom_ctn'});
		$J('<div/>', {'class': 'price_ctn'}).html(rgItemData.discount_block ? $J(rgItemData.discount_block).addClass('discount_block_inline') : '&nbsp;').appendTo($BottomCtn);
		$RightCol.append( $BottomCtn );

		GHomepage.AddHoverEffectToCapsule( $Item, rgItemData, rgItemData.microtrailer );

		return $Item;
	},

	FilterItemsForDisplay: function( rgItems, strSettingsName, cMinItemsToDisplay, cMaxItemsToDisplay, rgAdditionalSettings )
	{

		var Settings = GHomepage.oSettings[strSettingsName] || {};
		var ApplicableSettings = GHomepage.oApplicableSettings[strSettingsName] || {};

		// Allow sections to have additional, section-specific settings. We'll use jQuery to shallow copy the settings
		// object so we don't pollute future calls.
		if( rgAdditionalSettings )
		{
			Settings = jQuery.extend({}, Settings, rgAdditionalSettings);

			// Ensure our feature is turned on as an applicable setting
			var ApplicableSettingsOverride = {};
			for( var strKey in rgAdditionalSettings )
				ApplicableSettingsOverride[strKey] = true;

			ApplicableSettings = jQuery.extend( {}, ApplicableSettings, ApplicableSettingsOverride );

		}

		if ( !cMaxItemsToDisplay )
			cMaxItemsToDisplay = cMinItemsToDisplay;

		return GStoreItemData.FilterItemsForDisplay( rgItems, Settings, ApplicableSettings, cMaxItemsToDisplay, cMinItemsToDisplay )
	},

	PersistSettings: function()
	{
		WebStorage.SetLocal( 'home_viewsettings', GHomepage.oSettings, true );
	},

	CheckLocalStorageSettings: function()
	{
		// to defeat bfcache
		var oSettings = WebStorage.GetLocal( 'home_viewsettings', true );
		if ( oSettings )
			GHomepage.oSettings = oSettings;
	},

	RenderRecommendedTags: function()
	{
		var rgGenreTags = [19,21,597,492,128,699,122,599,9,701,113,493];
		// array( 'tagid' => $Tag->tagid, 'name' => $Tag->name, 'weight' => $Tag->weight )

		var $TagBlock = $J('#home_gutter_recommendedtags');
		var $TagList = $TagBlock.find('.gutter_items');
		var cTagsFound = 0;
		for ( var i = 0; i < GDynamicStore.s_rgRecommendedTags.length; i++ )
		{
			var rgTag = GDynamicStore.s_rgRecommendedTags[i];
			if ( rgGenreTags.indexOf( rgTag.tagid ) == -1 )
			{
				var url = GStoreItemData.AddNavEventParamsToURL( 'https://store.steampowered.com/tags/en/TAGNAME/'.replace( /TAGNAME/, encodeURIComponent( rgTag.name ) ), 'gutter' );
				$TagList.append( $J('<a/>', {'class': 'gutter_item', 'href' : url}).text( rgTag.name ) );

				if ( ++cTagsFound >= 5 )
					break;
			}
		}
		if ( cTagsFound > 1 )
		{
			$TagList.InstrumentLinks();
			$TagBlock.show();
		}
	},

	PlayTakeoverVideo: function()
	{
		const $elDesktopVideo = document.getElementById('home_video_desktop');
		const $elMobileVideo =  document.getElementById('home_video_mobile');

		
		if ( window.innerWidth <= 500 )
		{
			if ( $elMobileVideo )
				$elMobileVideo.play();
			if ( $elDesktopVideo )
				$elDesktopVideo.pause();
		}
		else
		{
			if ( $elDesktopVideo )
				$elDesktopVideo.play();
			if ( $elMobileVideo )
				$elMobileVideo.pause();
		}
	},

	InitTakeoverVideos: function()
	{
		const intersectionOptions = {
			root: null,
			rootMargin: '0px',
			threshold: 0.5
		};

		let bIsTakeoverVisible = false;

		const elTakeoverVideoCtn = document.getElementById( 'takeover_videos' );
		if ( elTakeoverVideoCtn )
		{
			const intersectionObserver = new IntersectionObserver( ([e]) =>
			{
				bIsTakeoverVisible = e.isIntersecting;
				if ( bIsTakeoverVisible )
				{
					fnPlayVideoIfVisible();
				}
				else
				{
					fnPauseVideo();
				}
			}, intersectionOptions );

			intersectionObserver.observe( elTakeoverVideoCtn );
		}

		const k_strVideoSelector = 'video.fullscreen-bg__video,video.fullscreen-bg__video_mobile';
		const k_msActivityTimeout = 30000;

		const fnPlayVideoIfVisible = function()
		{
			if ( bIsTakeoverVisible )
			{
				GHomepage.PlayTakeoverVideo();
							}
		}

		const fnPauseVideo = function()
		{
			
			$J( k_strVideoSelector ).trigger( 'pause' );
		}

		let timeLastActive = Date.now();
		let bIsUserInactive = false;
		['mousemove', 'scroll', 'touchstart', 'vgp_onfocus', 'resize' ].forEach(event =>
			window.addEventListener(event, () => {
				if ( bIsUserInactive )
					fnPlayVideoIfVisible();

				bIsUserInactive = false;
				timeLastActive = Date.now();
			}, { passive: true } )
		);

		setInterval(() => {
			bIsUserInactive = ( Date.now() - timeLastActive ) > k_msActivityTimeout;
			if ( bIsUserInactive )
				fnPauseVideo();
		}, 5000 );
	},
	ToggleAlternateTakeover: function()
	{
		if ( !GHomepage.rgBackgroundDef )
			return;

		const fnUpdateTakeover = ( strPageBackgroundURL, strBackgroundWebm, strPageBackgroundMobileURL ) =>
		{
			let elStaticBackgroundHolder = $J('.page_background_holder');
			if ( window.innerWidth <= 500 )
			{
				$J('.page_background_holder_mobile').css('background-image', 'url(' + strPageBackgroundMobileURL + ')');
			}
			else
			{
				if ( strBackgroundWebm && !GDynamicStore.s_preferences.disable_animated_marketing )
				{
					let elVideo = $J('.fullscreen-bg__video')[0];
					if ( elVideo )
					{
						let $HomeBody = $J('.home_page_body_ctn');
						$HomeBody.addClass('transition_header');
						elStaticBackgroundHolder.css('background-image', 'url(' + strPageBackgroundURL + ')');
						elVideo.addEventListener("transitionend", function fnLoadData()
						{
							elVideo.src = strBackgroundWebm;
							elVideo.poster = strPageBackgroundURL;
							elVideo.load();
							elVideo.addEventListener("canplay", function fnPlayVideo()
							{
								$HomeBody.removeClass('transition_header');
								elVideo.play();
							}, { once: true } );
						}, { once: true });
					}
				}
				else
				{
					elStaticBackgroundHolder.css('background-image', 'url(' + strPageBackgroundURL + ')');
				}
			}
		}

		let $BackgroundDef = GHomepage.rgBackgroundDef.default;
		let elAltClick = $J( '.click_for_alt' );

		const AltBackgroundIdx = V_GetCookie( 'home_alt_bg_index' );
		if ( AltBackgroundIdx === null && GHomepage.rgBackgroundDef.alternate_1 )
		{
			V_SetCookie('home_alt_bg_index', 1, 14 );

			elAltClick.addClass("alternate_1");
			$BackgroundDef = GHomepage.rgBackgroundDef.alternate_1;
		}
		else if ( AltBackgroundIdx === "1" && GHomepage.rgBackgroundDef.alternate_2 )
		{
			V_SetCookie('home_alt_bg_index', 2, 14 );

			elAltClick.removeClass("alternate_1");
			elAltClick.addClass("alternate_2");
			$BackgroundDef = GHomepage.rgBackgroundDef.alternate_2;
		}
		else
		{
			V_SetCookie('home_alt_bg_index', 0, -1 );
			elAltClick.removeClass( "alternate_1 alternate_2" );
		}

		fnUpdateTakeover( $BackgroundDef.strPageBackgroundURL, $BackgroundDef.strPageBackgroundWebM, $BackgroundDef.strPageBackgroundMobileURL );
	},
};

function CHomeSettings( strSectionName, fnOnSettingsChange )
{
	this.m_strSectionName = strSectionName;
	this.m_ApplicableSettings = GHomepage.oApplicableSettings[strSectionName];
	this.m_Settings = GHomepage.oSettings[strSectionName];
	this.m_fnOnSettingsChange = fnOnSettingsChange;

	this.m_$ActiveBtn = null;
	this.m_$Popup = null;
}

CHomeSettings.prototype.RenderCustomizeButton = function()
{
	var $Btn = $J('<div/>', {'class': 'home_btn home_customize_btn' } ).text( 'Customize' );
	$Btn.click( $J.proxy( this.DisplayPopup, this, $Btn ) );
	return $Btn;
};

CHomeSettings.prototype.DisplayPopup = function( $Btn )
{
	if ( this.m_$Popup )
		return;

	this.m_$ActiveBtn = $Btn;

	this.m_$ActiveBtn.addClass( 'active' );

	this.m_$Popup = $J('<div/>', {'class': 'home_viewsettings_popup' } );
	this.m_$Popup.append( $J('<div/>', {'class': 'home_viewsettings_instructions' } ).text( 'Select the types of products that you wish to see in this section' ) );

	if ( this.m_ApplicableSettings.popular_new_releases )
		this.m_$Popup.append( this.RenderCheckbox( 'popular_new_releases', 'Popular New Releases' ) );
	if ( this.m_ApplicableSettings.top_sellers )
		this.m_$Popup.append( this.RenderCheckbox( 'top_sellers', 'Top Sellers' ) );
	if ( this.m_ApplicableSettings.early_access )
		this.m_$Popup.append( this.RenderCheckbox( 'early_access', 'Early Access Products' ) );
	if ( this.m_ApplicableSettings.games_already_in_library )
		this.m_$Popup.append( this.RenderCheckbox( 'games_already_in_library', 'Games already in your account' ) );
	if ( this.m_ApplicableSettings.games_not_in_library )
		this.m_$Popup.append( this.RenderCheckbox( 'games_not_in_library', 'Games not in your account' ) );
	if ( this.m_ApplicableSettings.recommended_for_you )
		this.m_$Popup.append( this.RenderCheckbox( 'recommended_for_you', 'Recommended For You' ) );
	if ( this.m_ApplicableSettings.prepurchase )
		this.m_$Popup.append( this.RenderCheckbox( 'prepurchase', 'Prepurchase' ) );
	if ( this.m_ApplicableSettings.games )
		this.m_$Popup.append( this.RenderCheckbox( 'games', 'Games' ) );
	if ( this.m_ApplicableSettings.software )
		this.m_$Popup.append( this.RenderCheckbox( 'software', 'Software' ) );
	if ( this.m_ApplicableSettings.dlc_for_you )
		this.m_$Popup.append( this.RenderCheckbox( 'dlc_for_you', 'DLC for your games & software' ) );
	if ( this.m_ApplicableSettings.recently_viewed )
		this.m_$Popup.append( this.RenderCheckbox( 'recently_viewed', 'Products you\'ve recently viewed' ) );
	if ( this.m_ApplicableSettings.new_on_steam )
		this.m_$Popup.append( this.RenderCheckbox( 'new_on_steam', 'New On Steam' ) );
	if ( this.m_ApplicableSettings.dlc )
		this.m_$Popup.append( this.RenderCheckbox( 'dlc', 'Downloadable Content' ) );
	if ( this.m_ApplicableSettings.video )
		this.m_$Popup.append( this.RenderCheckbox( 'video', 'Videos' ) );
	if ( this.m_ApplicableSettings.localized )
		this.m_$Popup.append( this.RenderCheckbox( 'localized', 'Games in my language' ) );
	if ( this.m_ApplicableSettings.virtual_reality )
		this.m_$Popup.append( this.RenderCheckbox( 'virtual_reality', 'Virtual Reality' ) );
	if ( this.m_ApplicableSettings.recommended_by_curators )
		this.m_$Popup.append( this.RenderCheckbox( 'recommended_by_curators', 'Recommended by your Steam Curators' ) );

	if ( this.m_ApplicableSettings.only_current_platform )
	{
		// this one is a little magic
		if ( GDynamicStore.s_bUserOnLinux )
			this.m_$Popup.append( this.RenderCheckbox( 'only_current_platform', 'Available for Linux/SteamOS' ) );
		else if ( GDynamicStore.s_bUserOnMacOS )
			this.m_$Popup.append( this.RenderCheckbox( 'only_current_platform', 'Available for Mac' ) );
	}

	var nOffsetTop = $Btn.position().top + $Btn.outerHeight();
	var nOffsetRight = $Btn.position().left + $Btn.outerWidth( true );

	this.m_$Popup.css( 'top', nOffsetTop + 'px' );

	$Btn.parent().append( this.m_$Popup );

	this.m_$Popup.css( 'left', ( nOffsetRight - this.m_$Popup.outerWidth() ) + 'px' );

	var _this = this;
	window.setTimeout( function() {
		$J(document).on( 'click.CHomeSettings', function( event ) {
			if ( !_this.m_$Popup.has( event.target).length && !_this.m_$Popup.is( event.target ) )
				_this.DismissPopup();
		}).on( 'keyup.CHomeSettings', function( event ) {
			if ( event.which == 27 )
				_this.DismissPopup();
		});
	}, 1 );
};

CHomeSettings.prototype.RenderCheckbox = function( strSettingName, strDisplayLabel )
{
	var $Row = $J('<div/>', {'class': 'home_viewsettings_checkboxrow ellipsis' } );

	if ( this.m_ApplicableSettings[strSettingName] == 'always' )
		$Row.addClass( 'disabled' );

	var $Checkbox = $J('<div/>', {'class': 'home_viewsettings_checkbox' } );
	if ( this.m_Settings[strSettingName] || this.m_ApplicableSettings[strSettingName] == 'always' )
		$Checkbox.addClass('checked');

	var $Label = $J('<div/>', {'class': 'home_viewsettings_label'} ).text( strDisplayLabel );

	$Row.append( $Checkbox, $Label );

	if ( this.m_ApplicableSettings[strSettingName] != 'always' )
	{
		$Row.click( $J.proxy( this.OnCheckboxToggle, this, strSettingName, $Checkbox ) );
	}

	return $Row;
};

CHomeSettings.prototype.OnCheckboxToggle = function( strSettingName, $Checkbox )
{
	var bEnabled = $Checkbox.hasClass( 'checked' );

	if ( bEnabled )
		$Checkbox.removeClass( 'checked' );
	else
		$Checkbox.addClass( 'checked' );

	this.m_Settings[strSettingName] = !bEnabled;

	var _this = this;
	$J.post( 'https://store.steampowered.com/dynamicstore/updatehomeviewsettings', {
		sessionid: g_sessionID,
		section: this.m_strSectionName,
		settings: V_ToJSON( this.m_Settings )
	}).done( function () {
		_this.m_fnOnSettingsChange();
		GHomepage.PersistSettings();
	}).fail( function() {
		_this.DismissPopup();
		_this.m_Settings[strSettingName] = bEnabled;	// revert
		ShowAlertDialog( 'Customize', 'There was a problem saving your preferences.  Please try again later.' );
	} );
};

CHomeSettings.prototype.DismissPopup = function()
{
	this.m_$Popup.remove();
	this.m_$Popup = null;
	this.m_$ActiveBtn.removeClass( 'active' );
	$J(document).off( 'click.CHomeSettings' ).off( 'keyup.CHomeSettings' );
};


function GetAvatarURL( strAvatarHash, sizeStr )
{
    return 'https://avatars.fastly.steamstatic.com/' + strAvatarHash + ( sizeStr || '' ) + '.jpg';
}

function GetScreenshotURL( appid, filename, sizeStr )
{
	if( sizeStr )
		return 'https://shared.fastly.steamstatic.com/store_item_assets/steam/' + 'apps/' + appid + '/' + filename.replace('.jpg', sizeStr + '.jpg');

	return 'https://shared.fastly.steamstatic.com/store_item_assets/steam/' + 'apps/' + appid + '/' + filename;
}

GSteamCurators = {
	rgAppsRecommendedByCurators: [],
	bNeedRecommendedCurators: true,	// we default to true so if the scroll event fires before we've run, we'll load (to be safe)

	Init: function( rgApps )
	{
		GSteamCurators.rgAppsRecommendedByCurators = rgApps;
	},

	BuildHomePageGenericCap: function( oItem, strFeatureContext )
	{
		var unAppID = oItem.appid;
		var unPackageID = 0;
		var params = { 'class': 'store_capsule responsive_scroll_snap_start' };
		if ( oItem.rgCurators.length > 0 )
		{
			params['curator_clanid'] = oItem.rgCurators[0];
		}
		var rgItemData = GStoreItemData.GetCapParamsForItem( strFeatureContext, oItem, params );
		if ( !rgItemData )
			return null;

		var $Item = $J('<a/>', params );
		GStoreItemData.BindHoverEventsForItem( $Item, oItem );


		// app image
		// app image anchor

		var $ImgCtn = $J('<div class="capsule headerv5"/>');

		if ( rgItemData.headerv5 )
			$ImgCtn.append( $J('<img/>', { src: rgItemData.headerv5, alt: rgItemData.name } ) );

		if( rgItemData.has_live_broadcast )
		{
			$ImgCtn.append(
				$J('<div/>', {'class': 'broadcast_live_stream_icon' } ).append( 'Live')
			);
		}

		$Item.append( $ImgCtn );

		// show up to 3 curators per app
		var curatorsCache = GSteamCurators.rgAppsRecommendedByCurators.curators;
		var $Curators = $J('<div/>', {'class': 'curated_app_curators'} );
		var numCuratorsAdded = 0;
		for ( var j = 0; j < oItem.rgCurators.length && numCuratorsAdded < 3; ++j )
		{
			var clanID = oItem.rgCurators[j];
			if ( curatorsCache.hasOwnProperty( clanID ) )
			{
				var curator = curatorsCache[clanID];
				var $Curator =  $J('<a/>', {'class': 'steam_curator_for_app tooltip', 'href': curator.link, "data-tooltip-text": curator.name, "aria-label": curator.name } );
				var $CuratorImg = $J('<img/>', {'class': 'steam_curator_for_app_img', 'src': GetAvatarURL( curator.strAvatarHash, '' ), 'alt': curator.name });
				$Curator.append( $CuratorImg );

				$Curators.append( $Curator );
				++numCuratorsAdded;
			}
		}
		$Curators.append( $J('<div/>', {'style': 'clear: left'} ) );
		$Item.append( $Curators );

		// pricing info
		$Item.append( $J('<div/>').html( rgItemData.discount_block ? $J(rgItemData.discount_block).addClass('discount_block_inline') : '&nbsp;' ) );

		return $Item;
	},

	BuildHomePageGiantCap: function( strFeatureContext, oItem )
	{
		var unClanId = Object.keys( oItem.rgRecommendationByCurator )[0] || false;

		var unAppID = oItem.appid;
		var unPackageID = 0;
		var params = { 'class': 'curator_giant_capsule', 'curator_clanid' : unClanId };
		var rgItemData = GStoreItemData.GetCapParamsForItem( strFeatureContext, oItem, params );

		var rgRecommendation = oItem.rgRecommendationByCurator[ unClanId ] || '';

		var curator = GHomepage.rgCuratedAppsData.curators[ unClanId ] || false;

		if ( !rgItemData || !curator || !rgItemData.screenshots || rgItemData.screenshots.length < 4 )
			return null;

		var $Item = $J('<a/>', params );
		GStoreItemData.BindHoverEventsForItem( $Item, oItem );

		// container

		// app image
		// app image anchor
		var $ImageCapsule= $J ('<div/>'  );
		$ImageCapsule.addClass('capsule');

		var $Image = $J('<img/>', { src: rgItemData.main_capsule, alt: rgItemData.name } );
		$Image.bind('error', function(){
			$Image.attr('src', rgItemData.headerv5  );
			$Image.css({'width': '470px'  });
		});
		$ImageCapsule.append( $Image );
		$ImageCapsule.append( $J('<div/>').html( rgItemData.discount_block ? $J(rgItemData.discount_block).addClass('discount_block_large main_cap_discount') : '&nbsp;' ) );

		if( rgItemData.has_live_broadcast )
		{
			$ImageCapsule.append(
				$J('<div/>', {'class': 'broadcast_live_stream_icon' } ).append( 'Live')
			);
		}

		$Item.append( $ImageCapsule );

		var $ScreenshotCtn = $J('<div/>',{'class':'screenshots'});

		// Add four screenshots
		for( var i=0; i<4; i++)
		{
			var screenshot = rgItemData.screenshots[i];

			$ScreenshotCtn.append( $J('<div>', {'class': 'screenshot'}).css({'background-image': 'url(' + GetScreenshotURL( unAppID, screenshot.filename, '.600x338' ) + ')' } ) );
		}

		$Item.append($ScreenshotCtn);


		// Add the curator block
		var $CuratorBlock = $J('<div/>', {'class': 'curator_block'} );


		// Add the image
		var $Curator =  $J('<a/>', {'class': 'tooltip', 'href': curator.link, "data-tooltip-text": curator.name } );
		var $CuratorImg = $J('<img/>', {'class': '', 'src': GetAvatarURL( curator.strAvatarHash, '_full' ), 'alt': curator.name });
		$Curator.append( $CuratorImg );

		// Now the text blurb
		var $CuratorTextCtn = $J('<div/>',{class:'blurb'});
		var $CuratorText = $J('<span/>').text( rgRecommendation.blurb  );

		$CuratorTextCtn.append( $CuratorText );

		$CuratorBlock.append( $Curator );
		$CuratorBlock.append( $CuratorTextCtn );


		$Item.append( $CuratorBlock );

		return $Item;
	},

    BuildResponsiveHomePageGiantCap: function( strFeatureContext, oItem )
	{
        var unClanId = Object.keys( oItem.rgRecommendationByCurator )[0] || false;

        var unAppID = oItem.appid;
        var unPackageID = 0;
        var params = { 'class': 'curator_giant_capsule', 'curator_clanid' : unClanId };
        var rgItemData = GStoreItemData.GetCapParamsForItem( strFeatureContext, oItem, params );

        var rgRecommendation = oItem.rgRecommendationByCurator[ unClanId ] || '';

        var curator = GHomepage.rgCuratedAppsData.curators[ unClanId ] || false;

        if ( !rgItemData || !curator || !rgItemData.screenshots || rgItemData.screenshots.length < 4 )
            return null;

        var $Item = $J('<a/>', params );

        var $Image = $J('<img/>', { src: rgItemData.main_capsule, 'class': 'capsule_image', alt: rgItemData.name } );
        $Image.bind('error', function(){
            $Image.attr('src', rgItemData.headerv5  );
            $Image.css({'width': '470px'  });
        });
        $Item.append( $Image );

        var $ItemContent = $J('<div/>', {'class': 'curator_content'});

        var $CuratorText = $J('<div/>', {'class': 'curator_text'} ).text( '"' + rgRecommendation.blurb + '"' );
        $ItemContent.append( $CuratorText );

        var $StatusAndDate = $J('<div/>', {'class': 'date_row'} );

        var $Thumb = $J('<img/>', {'class': 'recommendation_thumb', src: 'https://store.fastly.steamstatic.com/public/images/recommended_thumb.png', 'alt': ''});
        var $Status = $J('<div/>', {'class': 'recommendation_status recommended'}).text( "Recommended" );
        var $Date = $J('<div/>', {'class': 'recommendation_date'}).text( new Date( rgRecommendation.time_recommended * 1000 ).toLocaleDateString( undefined, { month: 'long', day: 'numeric' } ) );
        $StatusAndDate.append( $Thumb );
        $StatusAndDate.append( $Status );
        $StatusAndDate.append( $Date );

        $ItemContent.append( $StatusAndDate );

        // Curator ID
		var $CuratorIdentifier = $J('<div/>', {'class': 'curator_identifier'} );
		$CuratorIdentifier.append( $J( '<img/>', {'class': 'curator_img', src: GetAvatarURL( curator.strAvatarHash, '_full' ), 'alt': '' } ) );
		$CuratorIdentifier.append( $J( '<div/>', {'class': 'curator_name' } ).text( curator.name ) );
        $ItemContent.append( $CuratorIdentifier );

		var $DetailsRow = $J('<div/>', { 'class': 'curator_details_row' } );
		$DetailsRow.append( $J('<div/>').html( rgItemData.discount_block ? $J( rgItemData.discount_block ).addClass( '' ) : '&nbsp;' ) );
		$ItemContent.append( $DetailsRow );

        $Item.append( $ItemContent );

        return $Item;
	},

	BuildCuratorItem: function( curator, nDepth )
	{
		var strLink = GStoreItemData.AddNavEventParamsToURL( curator.link, 'curator_recommended', nDepth );
		var $Item = $J('<div/>', {'class': 'steam_curator', 'onclick': "top.location.href='" + strLink + "'" } );
		var $Img = $J('<img/>', {'class': 'steam_curator_img', 'src': GetAvatarURL( curator.strAvatarHash, '_medium' ) });
		$Item.append( $Img );
		$Item.append( $J('<div/>', {'class': 'steam_curator_name' } ).text( curator.name ) );
		if ( curator.curator_description )
		{
			$Item.append( $J('<div/>', {'class': 'steam_curator_desc' } ).text( curator.curator_description ) );
		}
		$Item.append( $J('<div/>', {'style': 'clear: left;' } ) );

		return $Item;
	},

	Render: function()
	{
		let $Parent = $J('.steam_curators_ctn');
		if ( !$Parent.length )
			return;

		// if there are apps, then show them
		if ( GSteamCurators.rgAppsRecommendedByCurators && GSteamCurators.rgAppsRecommendedByCurators.length != 0 && GSteamCurators.rgAppsRecommendedByCurators.apps.length != 0 )
		{
			var apps = GSteamCurators.rgAppsRecommendedByCurators.apps;

			var rgRecommendedApps = GHomepage.FilterItemsForDisplay(
				apps, 'home', 4, 20, { games_already_in_library: false, displayed_elsewhere: false, only_current_platform: true }
			);

			const $CuratorCarousel = $J('.more_apps_by_curators_capsule');
			GHomepage.FillPagedCapsuleCarousel( rgRecommendedApps, $CuratorCarousel,
				function( oItem, strFeature, rgOptions, nDepth )
			{
				const curatorsCache = GSteamCurators.rgAppsRecommendedByCurators.curators;
				const clanID = oItem.rgCurators[0];

				let params = { 'disable_autosizer': true, 'lazy': true, 'curator_clanid': clanID };
				if ( curatorsCache.hasOwnProperty( clanID ) )
				{
					const curator = curatorsCache[clanID];
					const rgRecommendation = oItem.rgRecommendationByCurator[ clanID ] || '';

					let elCuratorDetails = $J('<div/>', { 'class': 'curator_capsule_ctn' } );

					const strLink = GStoreItemData.AddNavEventParamsToURL( curator.link, 'curator_recommended', nDepth );
					let elCuratorLink = $J('<a/>', { 'class': 'curator_capsule_link', 'href': strLink } );
					elCuratorLink.append( $J('<img/>', { 'class': 'curator_capsule_avatar', 'src': GetAvatarURL( curator.strAvatarHash, '_full' ), 'alt': V_EscapeHTML( curator.name ) } ) );
					elCuratorLink.append($J('<span/>', {'class': 'curator_capsule_name'}).text( curator.name ));
					elCuratorDetails.append( elCuratorLink );
					elCuratorDetails.append( $J('<div/>', { 'class': 'curator_capsule_blurb' } ).text( rgRecommendation.blurb ) );

					params['html_before_price'] = elCuratorDetails;
				}

				return GHomepage.BuildHomePageCapsule( oItem, 'curator_recommended', params );
			},	'curated_app', 4 );

			GDynamicStore.MarkAppDisplayed( rgRecommendedApps, 4 );
			$Parent.show();
		}
	},

	RenderRecommendedCurators: function( strCuratorHTML )
	{
		// if we rendered recommended apps above, there's no need to render recommended curators
		//
		// On deck, we want to suppress the suggested curators.
		var bUseGamepadScreenMode = window.UseGamepadScreenMode && window.UseGamepadScreenMode();
		if ( !GSteamCurators.bNeedRecommendedCurators || bUseGamepadScreenMode )
		{
			return;
		}

		$J('#steam_curators_not_empty').html( strCuratorHTML ).show();
		$J('.steam_curators_ctn').show();
	}
};

function srand(nSeed)
{
	this.nModulus = 0x80000000;
	this.nMultiplier = 1103515245;
	this.nIncrement = 12345;

	this.nLast = nSeed ? nSeed : Math.floor(Math.random() * (this.nModulus-1));
};
srand.prototype.nextInt = function()
{
	this.nLast = (this.nMultiplier * this.nLast + this.nIncrement) % this.nModulus;
	return this.nLast;
};
srand.prototype.nextFloat = function()
{
	return this.nextInt() / (this.nModulus - 1);
};
// inclusive of nStart, exclusive of nEnd
srand.prototype.nextIntBetween = function(nStart, nEnd)
{
	var nRangeSize = nEnd - nStart;
	var fRand = this.nextInt() / this.nModulus;
	return nStart + Math.floor(fRand * nRangeSize);
};
srand.prototype.choice = function(rgOptions)
{
	return rgOptions[this.nextIntIn(0, rgOptions.length)];
};

var bAutoLoaderReady = false;
var g_bDisableAutoloader = false;

(function ( $ ) {

	$.fn.autoloader = function( options ) {
		var settings = $.extend({
			triggerStart: 0,
			template_url: false,
			recommendations_url: false,
			additional_url: false
		}, options );



		return this.each(function( i, ele ) {

			ele.indices = {chunks: 0};

			var nLastTriggerCalc = 0;
			ele.BShouldTrigger = function( scrollTop )
			{
				if ( !nLastTriggerCalc || nLastTriggerCalc < scrollTop )
				{
					var offset = $(ele).offset();
					nLastTriggerCalc = $(ele).height() + offset.top - 750;
				}
				return nLastTriggerCalc < scrollTop;
			}

			var bLoggedView = false;
			var nLastViewCalc = 0;
			ele.BCheckAndLogView = function( scrollTop )
			{
				if ( bLoggedView )
					return;
				if ( !nLastViewCalc || nLastViewCalc < scrollTop )
				{
					var offset = $(ele).offset();
					nLastViewCalc = offset.top + 375;	// log the view when the first row of large caps are completely visible

					if ( nLastViewCalc < scrollTop )
					{
						bLoggedView = true;
						$J.post( 'https://store.steampowered.com/explore/logfeedview/?snr=' + GStoreItemData.GetCurrentPageNavParams() )
					}
				}
			}

			ele.bTriggerActive = false;
			ele.tagIndex = 0;
			ele.nRecommendedDataIndex = 0;
			ele.rgSeenApps = [];
			ele.index = 0;


			var loadFunc = function() {
				ele = this;

				if( this.bTriggerActive || g_bDisableAutoloader )
				{
					return;
				}

				this.bTriggerActive = true;

				if( this.rgRecommendedData )
				{
					$(this).show();

					// Main cap

					var nItems = 0;
					while( nItems < 2 && this.rgRecommendedData.tags.length > 0 )
					{
						var rgMainCap = {
							tagid: this.rgRecommendedData.tags[this.nRecommendedDataIndex].tagid,
							tagname: this.rgRecommendedData.tags[this.nRecommendedDataIndex].tagname,
							items: []
						};

						nItems = 0;

						while( nItems < 2 && this.rgRecommendedData.tags[this.nRecommendedDataIndex].items.length > 0)
						{
							var nAppId = this.rgRecommendedData.tags[this.nRecommendedDataIndex].items.shift();
							if( !GDynamicStore.BIsAppOwned( nAppId ) && !GDynamicStore.BIsAppIgnored( nAppId ) && this.rgSeenApps.indexOf( nAppId ) === -1 )
							{
								rgMainCap.items.push(nAppId);
								nItems++;
								this.rgSeenApps.push(nAppId);
							}
						}

						// If we can't fill the bucket, remove it.
						if( nItems < 2 )
						{
							this.rgRecommendedData.tags.splice(this.nRecommendedDataIndex,1);
							this.nRecommendedDataIndex = ( this.nRecommendedDataIndex + 1 ) % this.rgRecommendedData.tags.length;
						}
					}

					if( nItems < 2 )
					{
						$('#content_out').show();
						$('#LoadingContent').hide();
						return;
					}

					this.nRecommendedDataIndex = ( this.nRecommendedDataIndex + 1 ) % this.rgRecommendedData.tags.length;

					// Secondary cap

					nItems = 0;
					while( nItems < 4 && this.rgRecommendedData.tags.length > 0 )
					{
						var rgSubCap = {
							tagid: this.rgRecommendedData.tags[this.nRecommendedDataIndex].tagid,
							tagname: this.rgRecommendedData.tags[this.nRecommendedDataIndex].tagname,
							items: []
						};

						nItems = 0;
						while( nItems < 4 && this.rgRecommendedData.tags[this.nRecommendedDataIndex].items.length > 0)
						{
							var nAppId = this.rgRecommendedData.tags[this.nRecommendedDataIndex].items.shift();
							if( !GDynamicStore.BIsAppOwned( nAppId ) && !GDynamicStore.BIsAppIgnored( nAppId ) && this.rgSeenApps.indexOf( nAppId ) === -1 )
							{
								rgSubCap.items.push(nAppId);
								nItems++;
								this.rgSeenApps.push(nAppId);
							}
						}

						// If we can't fill the bucket, remove it.
						if( nItems < 4 )
						{
							this.rgRecommendedData.tags.splice(this.nRecommendedDataIndex,1);
							this.nRecommendedDataIndex = ( this.nRecommendedDataIndex + 1 ) % this.rgRecommendedData.tags.length;
						}
					}

					if( nItems < 4 )
					{
						$('#content_out').show();
						$('#LoadingContent').hide();
						return;
					}

					this.nRecommendedDataIndex = ( this.nRecommendedDataIndex + 1 ) % this.rgRecommendedData.tags.length;

					var nItems = 0;
					var rgSimilarItems = [];
					var rgBuckets = ['played', 'friends', 'wishlist', 'curators'];
					while( rgSimilarItems.length < 3 && rgBuckets.length > 0 )
					{
						var nIndex = ele.srand.nextIntBetween(0,rgBuckets.length);
						WebStorage.SetLocal('home_seed',ele.srand.nLast, true );
						$('#content_seed').val(ele.srand.nLast);
						var strBucket = rgBuckets[nIndex];
						if( !this.rgRecommendedData[strBucket] || this.rgRecommendedData[strBucket].length == 0 )
						{
							rgBuckets.splice( nIndex, 1 );
							continue;
						}

						var rgItem = this.rgRecommendedData[strBucket].shift();

						// Don't show items similar to ones I'm ignoring
						if( ( strBucket == 'recent' || strBucket == 'curators' || strBucket == 'friends' ) && GDynamicStore.BIsAppIgnored( rgItem.appid ) )
							continue;

						// Don't recommend items I already own
						if( ( strBucket == 'curators' || strBucket == 'friends' ) && GDynamicStore.BIsAppOwned( rgItem.appid ) )
							continue;

						var rgItem = {
							type: strBucket,
							appid: rgItem.appid
						};
						rgSimilarItems.push(rgItem);

					}

					this.bTriggerActive = true;

					$('#content_loading').show();

					var jqxhr = $.ajax( {
						url: settings.template_url,
						data: {
							main: rgMainCap,
							sub: rgSubCap,
							similar: rgSimilarItems,
							depth: ele.index || 0,
							hwsos: Number( GHomepage.bSteamOS ),
							hwvar: GHomepage.eHWVariant,
							hwtype: GHomepage.eGamingDeviceType,
						},
						//dataType: 'json',
						type: 'GET'
					}).done(function( data ) {
						ele.index++;
						var newElement = $(data);

						GDynamicStore.DecorateDynamicItems(newElement);
						GHomepage.AddMicrotrailersToStaticCaps( $J( newElement ).find( '.home_content_items' ) );

						if ( !window.UseGamepadScreenMode() )
						{
							$J( '.home_content_single_ctn', newElement ).each( function ( index, e )
							{
								let elScreenshotDisplay = $J( e ).find( '.capsule_image_ctn' );
								let $ScreenshotThumbs = $J( e ).find( '.screenshot.thumbnail' );
								$ScreenshotThumbs.on( 'mouseover vgp_onfocus', function () {
									const strScreenshotSrc = $J( this ).attr( 'src' );
									const idxScreenshot = $J( this ).data( 'screenshot-index' );
									let elCurrentScreenshot = elScreenshotDisplay.children( '.screenshot_' + idxScreenshot );
									if ( !elCurrentScreenshot.length )
									{
										elCurrentScreenshot = $J( '<div/>', { 'class': 'screenshot_preview screenshot_' + idxScreenshot } ).css( 'background-image', 'url(' + strScreenshotSrc + ')' );
										elScreenshotDisplay.append( elCurrentScreenshot );
									}
									elCurrentScreenshot.addClass( 'hover_active' );
								} );
								$ScreenshotThumbs.on( 'mouseleave vgp_onblur', function () {
									elScreenshotDisplay.children( '.screenshot_preview.hover_active' ).removeClass( 'hover_active' );
								} );
							} );
						}

						$('.gamelink.ds_owned', newElement).parent().parent().hide().addClass( 'filtered_capsule' );

						$('*[data-ds-appid]', newElement).each(function(index, e){
							var nAppId = $(e).data('ds-appid');
							if( ele.rgSeenApps.indexOf( nAppId ) === -1 )
							{
								ele.rgSeenApps.push( nAppId );
							} else {
								if( $(e).hasClass('gamelink') )
									$(e).parent().parent().hide().addClass( 'filtered_capsule' );
							}
							// If we're going to recommend this game later, skip it for now.
							for( var i=0; i < ele.rgRecommendedData['friends'].length - 1; i++ )
							{
								if( nAppId == ele.rgRecommendedData['friends'][i].appid )
								{
									if( $(e).hasClass('gamelink') )
									{
										$(e).parent().parent().hide().addClass( 'filtered_capsule' );
										ele.rgSeenApps.splice( ele.rgSeenApps.indexOf( nAppId ), 1 );
									}
								}
							}

							if( $(e).hasClass('gamelink') )
							{
								if ( GDynamicStore.BIsAppIgnored( nAppId ) )
								{
									$(e).parent().parent().hide().addClass( 'filtered_capsule' );
								}
								else if ( $( e ).hasClass( 'ds_excluded_by_preferences' ) )
								{
									$(e).parent().parent().hide().addClass( 'filtered_capsule' );
								}
							}
						});

						if ( window.UseGamepadScreenMode() )
						{
							const k_nMinCarouselCapsules = 4;
							let $SinglesCarousel = $J('.gp_contiguous_singles', newElement );
							if ( $SinglesCarousel.length )
							{
								const rgVisibleCapsules = $SinglesCarousel.children( '.home_content_single_ctn' ).not( '.filtered_capsule' );
								if ( rgVisibleCapsules.length < k_nMinCarouselCapsules )
								{
									$SinglesCarousel.parent().hide();
								}
							}
						}

						$(ele).append(newElement);
						ele.bTriggerActive = false;
						var nCurrentScroll = $(window).scrollTop() + $(window).height();

						if( ele.BShouldTrigger( nCurrentScroll ) )
						{
							loadFunc.apply(ele);
						}

					}).always(function() {
						$('#content_loading').hide();
						WebStorage.SetLocal('home_content',$(ele).html(), true);
						//WebStorage.SetLocal('home_seed',ele.nSeed, true );
						WebStorage.SetLocal('home_data',ele.rgRecommendedData, true );
						WebStorage.SetLocal('home_seen',ele.rgSeenApps, true );
						WebStorage.SetLocal('home_index',ele.nRecommendedDataIndex, true );
					});
				} else {
					this.bTriggerActive = true;
					$('#content_loading').show();

					if( $('#content_seed').val() == WebStorage.GetLocal('home_seed', true ) )
					{
						// Clean out any pesky script tags that might have found their way into LS
						var wrapped = $J("<div>" + WebStorage.GetLocal('home_content', true ) + "</div>");
						wrapped.find('script').remove();

						$(this).html( wrapped.html() );
						ele.rgRecommendedData = WebStorage.GetLocal('home_data', true );
						ele.nRecommendedDataIndex = WebStorage.GetLocal('home_index', true );
						ele.nSeed = WebStorage.GetLocal('home_seed', true );
						ele.rgSeenApps = WebStorage.GetLocal('home_seen', true );
						ele.srand = new srand(ele.nSeed);
						$('#content_loading').hide();
						this.bTriggerActive = false;
						setTimeout(function(){ $J('html, body').scrollTop( WebStorage.GetLocal('home_scroll', true ) ) }, 250 );
						return;
					}

					var jqxhr = $.ajax( {
						url: settings.recommendations_url,
						dataType: 'json',
						type: 'GET'
					}).done(function( data ) {

						if( !data || data['tags'].length == 0 )
						{
							$J('#content_more').hide();
							$J('#content_loading').hide();
							$J('#content_callout').hide();
							$J('#content_none').show();
							return;
						}

						data['wishlist'] = [];
						for ( var unAppID in GDynamicStore.s_rgWishlist )
						{
							data['wishlist'].push({appid: unAppID});
						}
						v_shuffle( data['wishlist'] );

						ele.rgRecommendedData = data;
						ele.nSeed = data.seed;
						$('#content_seed').val(ele.nSeed);

						ele.srand = new srand(ele.nSeed);
						ele.bTriggerActive = false;

						loadFunc.apply(ele);

					}).fail( function(){
						$J('#content_more').hide();
						$J('#content_loading').hide();
						$J('#content_callout').hide();
						$J('#content_none').show();
						return;
					} );
				}

				bAutoLoaderReady = true;
			};

			var scrollFunc = function( event ){
				if ( g_bDisableAutoloader )
					return;

				if( bAutoLoaderReady )
					WebStorage.SetLocal('home_scroll',$(window).scrollTop(), true);

				var nCurrentScroll = $(window).scrollTop() + $(window).height();

				this.BCheckAndLogView( nCurrentScroll );

				if( this.BShouldTrigger( nCurrentScroll ) )
				{
					loadFunc.apply(this);
				}
			};

			$(document).scroll( function() { return scrollFunc.apply(ele) } );
			$(document).ready( function() { return scrollFunc.apply(ele) } );
		});

	};

}( jQuery ));


(function ( $ ) {

	$.fn.pagedautoloader = function( options ) {
		var settings = $.extend({
			triggerStart: 0,
			template_url: false
		}, options );



		return this.each(function( i, ele ) {

			ele.indices = {chunks: 0};

			var offset = $(ele).offset();
			this.nNextTrigger = $(ele).height() + offset.top - 750;

			ele.bTriggerActive = false;
			ele.tagIndex = 0;
			ele.nRecommendedDataIndex = 0;
			ele.rgSeenApps = [];
			ele.nPage = 0;
			ele.bMoreContent = true;


			var loadFunc = function() {
				ele = this;

				if( this.bTriggerActive || g_bDisableAutoloader )
				{
					return;
				}

				this.bTriggerActive = true;

				if( this.bMoreContent )
				{
					$(this).show();
					ele.nPage = ele.nPage + 1;

					this.bTriggerActive = true;

					$('#content_loading').show();

					var jqxhr = $.ajax( {
						url: settings.template_url,
						data: {
							page: this.nPage
						},
						type: 'GET'
					}).done(function( data ) {
						ele.index++;
						var newElement = $(data);

						GDynamicStore.DecorateDynamicItems(newElement);

						$(ele).append(newElement);
						ele.bTriggerActive = false;

						var nCurrentScroll = $(window).scrollTop() + $(window).height();
						ele.nNextTrigger = $(ele).height() + offset.top - 750;
						if(nCurrentScroll > ele.nNextTrigger)
						{
							loadFunc.apply(ele);
						}

					}).fail(function(){
						ele.bMoreContent = false;
					}).always(function() {
						$('#content_loading').hide();
					});
				}

				bAutoLoaderReady = true;
			};

			var scrollFunc = function( event ){
				if ( g_bDisableAutoloader )
					return;

				var nCurrentScroll = $(window).scrollTop() + $(window).height();
				if(nCurrentScroll > this.nNextTrigger)
				{
					if( bAutoLoaderReady )
						WebStorage.SetLocal('home_scroll',$(window).scrollTop(), true);

					loadFunc.apply(this);
				}
			};

			$(document).scroll( function() { return scrollFunc.apply(ele) } );
		});

	};

}( jQuery ));

function ScrollToDynamicContent()
{
	$J('html, body').animate({ scrollTop: $J("#homecontent_anchor").offset().top }, 200);
}

function HomeTabSelect( elem, target )
{
	TabSelect( elem, target );
	var $List = $J('#' + target);
	$List.find('.tab_item').first().trigger('mouseenter');
	GDynamicStoreHelpers.AddSNRDepthParamsToCapsuleList( $List.children('.tab_item') );
}

function TabSelectLast()
{
	var strLastValue = $J('#last_tab').val();
	if( strLastValue )
	{
		HomeTabSelect( $J('#'+strLastValue+'_trigger')[0], strLastValue );
		LoadDelayedImages('home_tabs');
	}
}

function BeginDiscoveryQueue( eQueueType, eleAnchorTarget )
{
	WebStorage.SetCookie( 'queue_type', eQueueType );
	window.location = eleAnchorTarget.href;
}

jQuery( document ).ready(function( $ ) {
	TabSelectLast();
});


/*
 var InitArgs = {
						UpdateRangeControlByIndex: UpdateRangeControlByIndex,
						UpdateRangeControlByValue: UpdateRangeControlByValue,
						rgRangeData: rgRangeData,
						$Element: $Element
					};

 */

function InitTopGrossingDateSlider( InitArgs )
{
	var $Element = InitArgs.$Element;
	var rgRangeData = InitArgs.rgRangeData;

	InitTopSellersControls( $Element.parents( '.topsellers_controls' ), rgRangeData );
}

function InitTopSellersControls( $Controls, RangeInitData, bVersion2 )
{
	//var $Controls = $Element.parents( '.topsellers_controls' );

	var $Checkbox = $Controls.find('#top_sellers_library_check');
	var $CheckboxHideF2P = $Controls.find( '#top_sellers_f2p_check' );

	var $TabItems = $J( '#tab_topsellers_content' ).children( '.tab_content_items' );

	var TopSellersCache = {};
	var bAJAXInFlight = false;
	var bFirstRender = true;
	var fnTopSellersKey = function ( time, bHideF2P ) { return parseInt( time ) + '_' + ( bHideF2P ? 'hidef2p' : '' ); }
	var fnLoadTopGrossing = function( time, bHideF2P )
	{
		if ( bAJAXInFlight )
		{
			// when we re-render, we'll request again with the current values.
			return;
		}

		bAJAXInFlight = true;
		$TabItems.addClass('loading');
		$J.get( 'https://store.steampowered.com/search/hometab/TopGrossing/', { time: time, hide_f2p: bHideF2P, seasonal_sale: GHomepage.bIsSeasonalSale ? 1 : 0 } ).done( function( data ) {
			if ( data.storeitemdata && data.html )
			{
				GStoreItemData.AddStoreItemDataSet( data.storeitemdata );
			}
			var html = '<div>Error</div>';
			if ( data.html )
			{
				var $Temp = $J('<div/>');
				$Temp.html( data.html );
				html = $Temp.html();
				$Temp.empty();
			}
			TopSellersCache[ fnTopSellersKey( time, bHideF2P ) ] = html;
		}).fail( function() {
			TopSellersCache[ fnTopSellersKey( time, bHideF2P ) ] = '<div>Error</div>';
		} ).always( function() {
			bAJAXInFlight = false;
			fnRenderTopGrossing();
			$TabItems.removeClass('loading');
		});
	};

	var fnRenderTopGrossing = function( bOnChange )
	{
		var bFilterLibraryItems = $Checkbox.length ? !$Checkbox.prop('checked') : false;
		var bHideF2P = !$CheckboxHideF2P.prop( 'checked' );
		var nTimeValue = RangeInitData ? RangeInitData.rgRangeData[ RangeInitData.$Element.val() ].time : 0;

		if ( bOnChange )
		{
			WebStorage.SetLocal( 'topgrossing_prefs', { bFilterLibraryItems: bFilterLibraryItems, bHideF2P: bHideF2P, nTimeValue: nTimeValue } );
		}

		if ( !TopSellersCache[ fnTopSellersKey( nTimeValue, bHideF2P ) ] )
		{
			// We don't have the HTML.  Load it.
			fnLoadTopGrossing( nTimeValue, bHideF2P );
		}
		else
		{
			$TabItems.html( TopSellersCache[ fnTopSellersKey( nTimeValue, bHideF2P ) ] );
			GHomepage.FilterTab( '#tab_topsellers_content', { games_already_in_library: !bFilterLibraryItems, dlc_for_you: true } );

			var strTargetSeeMore = bHideF2P ? 'hidef2p' : 'default';
			var $SeeMoreLinks = $J('#tab_topsellers_content').children('.tab_see_more').children('.topsellers_see_more');
			$SeeMoreLinks.hide().filter('[data-searchid=' + strTargetSeeMore + ']').show();

			// lazy load images when switching back
			if ( !bFirstRender )
				LoadDelayedImages( 'home_tabs', true );
			else
				bFirstRender = false;
		}

		if ( $J( '#tab_topsellers_content_trigger' ).hasClass( 'active' ) )
			$TabItems.find('.tab_row_item').first().trigger('mouseenter');

		GDynamicStore.DecorateDynamicItems( $TabItems );
	};

	$Checkbox.add($CheckboxHideF2P).add( RangeInitData ? RangeInitData.$Element : null ).on( 'change', function() {
		fnRenderTopGrossing( true /*onchange*/ );
	});

	if ( !g_AccountID )
		$Checkbox.parents('.tab_control').hide();

	TopSellersCache[ fnTopSellersKey( 0, false ) ] = $TabItems.html();

	GHomepage.AddCustomRender( function() {
		var rgPrefs = WebStorage.GetLocal( 'topgrossing_prefs' );
		if ( rgPrefs )
		{
			if ( rgPrefs.bFilterLibraryItems !== undefined )
			{
				$Checkbox.prop( 'checked', !rgPrefs.bFilterLibraryItems );
			}
			if ( rgPrefs.bHideF2P !== undefined )
			{
				$CheckboxHideF2P.prop( 'checked', !rgPrefs.bHideF2P );
			}
			if ( rgPrefs.nTimeValue !== undefined && RangeInitData )
			{
				RangeInitData.UpdateRangeControlByValue( 'time', rgPrefs.nTimeValue );
			}
		}
		fnRenderTopGrossing();
	});

}

function InitTabSectionMicrotrailer()
{
	const elRightSection = document.getElementById( 'tab_preview_container' );
	if ( elRightSection )
	{
		const intersectionOptions = {
			root: null,
			rootMargin: '-50% 0px 0px 0px',
			threshold: 0,
		};

		const k_nMicrotrailerTimeoutMS = 30000;

		const fnPlayTabMicrotrailer = function()
		{
			if ( GHomepage.m_TabItemPreviewMicrotrailerTimeout )
				window.clearTimeout( GHomepage.m_TabItemPreviewMicrotrailerTimeout );

			let elMicrotrailer = $J( '.tab_preview.focus' ).find( '.tab_preview_video' )[0];
			if ( elMicrotrailer && elMicrotrailer.paused )
			{
				elMicrotrailer.play();
			}

			GHomepage.m_TabItemPreviewMicrotrailerTimeout = window.setTimeout( fnPauseTabMicrotrailer, k_nMicrotrailerTimeoutMS );
		}

		const fnPauseTabMicrotrailer = function()
		{
			let elMicrotrailer = $J( '.tab_preview.focus' ).find( '.tab_preview_video' )[0];
			if ( elMicrotrailer )
				elMicrotrailer.pause();
		}

		const intersectionObserver = new IntersectionObserver( ([e]) =>
		{
			let bIsVisible = e.isIntersecting;
			if ( bIsVisible )
			{
				fnPlayTabMicrotrailer();
			}
			else
			{
				fnPauseTabMicrotrailer();
			}
		}, intersectionOptions );

		intersectionObserver.observe( elRightSection );

		GHomepage.m_TabItemPreviewMicrotrailerTimeout = window.setTimeout( fnPauseTabMicrotrailer, k_nMicrotrailerTimeoutMS );
	}
}

function HomeTabOnClick( elem, strTabSelectTarget, strDelayedImageGroup )
{
	if ( strDelayedImageGroup )
		LoadDelayedImages( strDelayedImageGroup );

	let elTopSellersControls = $J( '#topsellers_controls' );
	elTopSellersControls.hide();
	if ( strTabSelectTarget === 'tab_topsellers_content' )
		elTopSellersControls.show();

	TabSelect( elem, strTabSelectTarget );
	let $List = $JFromIDOrElement( strTabSelectTarget );
	$List.find('.tab_row_item').first().trigger('mouseenter');
	GDynamicStoreHelpers.AddSNRDepthParamsToCapsuleList( $List.find('.tab_row_item') );
}

function PreviewScreenshotModal( strAppName, elScreenshot )
{
	let image = new Image();
	image.src =  $J( elScreenshot ).data( 'screenshot-url' );
	image.className = 'home_content_screenshot_img';
	image.onload = function() {
		let $Modal = ShowAlertDialog( strAppName, image, 'Close' );
		window.setTimeout( () => $Modal.AdjustSizing(), 1 );
	}
}

