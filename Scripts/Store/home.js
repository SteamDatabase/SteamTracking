
function OnHomepageException(e)
{
	}


GHomepage = {
	oSettings: {},
	oApplicableSettings: {"main_cluster":{"top_sellers":true,"early_access":true,"games_already_in_library":true,"recommended_for_you":true,"prepurchase":true,"games":"always","software":true,"dlc_for_you":true,"dlc":null,"recently_viewed":null,"new_on_steam":null,"popular_new_releases":"always","games_not_in_library":null,"only_current_platform":true,"video":true,"localized":true,"virtual_reality":true,"recommended_by_curators":true,"hidden":null},"new_on_steam":{"top_sellers":null,"early_access":true,"games_already_in_library":true,"recommended_for_you":null,"prepurchase":null,"games":"always","software":true,"dlc_for_you":null,"dlc":null,"recently_viewed":null,"new_on_steam":null,"popular_new_releases":null,"games_not_in_library":null,"only_current_platform":true,"video":true,"localized":true,"virtual_reality":true,"recommended_by_curators":null,"hidden":null},"recently_updated":{"top_sellers":null,"early_access":true,"games_already_in_library":null,"recommended_for_you":null,"prepurchase":null,"games":"always","software":true,"dlc_for_you":null,"dlc":null,"recently_viewed":null,"new_on_steam":null,"popular_new_releases":null,"games_not_in_library":true,"only_current_platform":true,"video":true,"localized":true,"virtual_reality":true,"recommended_by_curators":null,"hidden":null},"tabs":null,"specials":null,"more_recommendations":null,"friend_recommendations":null,"curators":{"top_sellers":null,"early_access":true,"games_already_in_library":true,"recommended_for_you":null,"prepurchase":null,"games":"always","software":true,"dlc_for_you":null,"dlc":null,"recently_viewed":null,"new_on_steam":null,"popular_new_releases":null,"games_not_in_library":null,"only_current_platform":true,"video":true,"localized":true,"virtual_reality":true,"recommended_by_curators":null,"hidden":null},"home":{"top_sellers":null,"early_access":true,"games_already_in_library":null,"recommended_for_you":null,"prepurchase":true,"games":null,"software":true,"dlc_for_you":null,"dlc":null,"recently_viewed":null,"new_on_steam":null,"popular_new_releases":null,"games_not_in_library":null,"only_current_platform":null,"video":true,"localized":null,"virtual_reality":true,"recommended_by_curators":null,"hidden":null}},

	oDisplayListsRaw: {},
	oDisplayLists: {},

	oFeaturedMainCapItems: {},

	rgRecommendedGames: [],
	rgFriendRecommendations: [],	// { appid, accountid_friends, time_most_recent_recommendation }

	rgCuratedAppsData: [],
	rgAppsRecommendedByCurators: [],
	rgUserNewsFriendsPurchased: {},
	rgTopSteamCurators: [],

	rgfnCustomRenders: [],

	bUserDataReady: false,
	bStaticDataReady: false,
	bLoadedActiveData: false,

	MainCapCluster: null,
	usabilityTracker: null,

	InitLayout: function()
	{
		var $Ctn = $J('.home_page_body_ctn');
		if ( $Ctn.hasClass('has_takeover') )
		{
			var $Background = $Ctn.children( '.page_background_holder' );
			var $Menu = $J('#store_header');

			var k_nContentWidth = 940 + 32;
			var k_nMenuHeight = 66;

			var nTakeoverWidth = $Background.data( 'backgroundWidth' ) || 1880;
			var flTakeoverRatio = nTakeoverWidth / k_nContentWidth;
			var flTopAdjustment = ( 100 * k_nMenuHeight / k_nContentWidth ) / flTakeoverRatio;

			var $TakeoverLink = $J('.home_page_takeover_link' ).children().first();
			var nInitialTakeoverLinkHeight = $TakeoverLink.height();

			if( $TakeoverLink && $TakeoverLink.attr('href') )
			{
				var strURL = $TakeoverLink.attr('href');
				var matches = /\/app\/([0-9]+)/.exec(strURL);
				if ( matches && matches.length > 0 && matches[1] )
				{
					var appid = matches[1];
					$TakeoverLink.data('dsAppid', appid);
					GDynamicStore.s_ImpressionTracker.TrackAppearance( $TakeoverLink );
				}
			}

			$J(window ).on('Responsive_SmallScreenModeToggled.StoreHomeLayout', function() {
				if ( window.UseSmallScreenMode && window.UseSmallScreenMode() )
				{
					// the -5vw here accounts for the bit that would normally be overlapped by the menu, we use
					//	viewport-relative units because the background is being scaled relative to the viewport.
					$Background.css( 'background-position', 'center -' + flTopAdjustment + 'vw' );
					$Background.css( 'background-size', Math.floor( 100 * flTakeoverRatio ) + '% auto' );

					// this is the link, which also allocates the space for the takeover to be visible above the cluster rotation.
					//	we scale it based on the viewport width, assuming the initial width was 940px
					if ( nInitialTakeoverLinkHeight )
						$TakeoverLink.css( 'height', Math.floor( nInitialTakeoverLinkHeight / k_nContentWidth * 100 ) + 'vw' );

				}
				else
				{
					$Background.css( 'top', '' ).css('background-position', '').css('background-size', '' );
					if ( nInitialTakeoverLinkHeight )
						$TakeoverLink.css( 'height', nInitialTakeoverLinkHeight + 'px' );
				}
			} ).trigger('Responsive_SmallScreenModeToggled.StoreHomeLayout');
		}

		InitHorizontalAutoSliders();

		$J(window).one('scroll', GHomepage.OnHomeActivate.bind(this) );

		if ( window.Responsive_ReparentItemsInResponsiveMode )
		{
			window.Responsive_ReparentItemsInResponsiveMode( '.spotlight_block', $J('#home_responsive_spotlight_ctn') );
		}

		this.usabilityTracker = new CUsabilityTracker();
		this.usabilityTracker.Init();
	},

	AddCustomRender: function( fnRender )
	{
		GHomepage.rgfnCustomRenders.push( fnRender );
	},

	InitUserData: function( rgParams )
	{
		try {
			GHomepage.oSettings = rgParams.oSettings;
			GHomepage.CheckLocalStorageSettings();

			if ( rgParams.rgRecommendedGames && rgParams.rgRecommendedGames.length )
			{
				var rgRecommendedAppIDs = v_shuffle( rgParams.rgRecommendedGames );
				for( var i = 0; i < rgRecommendedAppIDs.length; i++ )
				{
					GHomepage.rgRecommendedGames.push( { appid: rgRecommendedAppIDs[i], recommended: true } );
				}
			}

			if ( g_AccountID == 0 )
			{
				$J('#home_recommended_spotlight_notloggedin').show();
				$J('.home_top_sellers_area').show();
				$J('.home_logged_in').hide();
				$J('.home_friends_purchased_area').hide();
				$J('.home_btn.home_customize_btn').hide();
			}
			else
			{
				$J('#home_recommended_more').show();
			}

			GHomepage.rgCuratedAppsData = rgParams.rgCuratedAppsData || {};
			if ( rgParams.rgCuratedAppsData['apps'] && rgParams.rgCuratedAppsData['apps'].length )
			{
				var rgRecommendedAppIDs = v_shuffle( rgParams.rgCuratedAppsData['apps'] );
				for( var i = 0; i < rgRecommendedAppIDs.length; i++ )
				{
					GHomepage.rgAppsRecommendedByCurators.push( { appid: rgRecommendedAppIDs[i].appid, recommended_by_curator: true } );
				}
			}

			GHomepage.rgAppsRecommendedByCurators = rgParams.rgAppsRecommendedByCurators || [];
			GHomepage.rgUserNewsFriendsPurchased = rgParams.rgUserNewsFriendsPurchased || {};
			GHomepage.rgTopSteamCurators = rgParams.rgTopSteamCurators || [];
			GHomepage.rgFriendRecommendations = v_shuffle( rgParams.rgFriendRecommendations ) || [];
			GHomepage.bHideAdultContentViolence = rgParams.bHideAdultContentViolence || false;
			GHomepage.bHideAdultContentSex = rgParams.bHideAdultContentSex || false;
		} catch( e ) { OnHomepageException(e); }

		GHomepage.bUserDataReady = true;
		if ( GHomepage.bStaticDataReady )
			GHomepage.OnHomeDataReady();
	},

	InitStaticData: function( rgParams )
	{
		try {
			GHomepage.oDisplayListsRaw = rgParams.rgDisplayLists;
			GHomepage.bShuffleInMainLegacy = rgParams.bShuffleInMainLegacy;
			GHomepage.bAutumnSaleMainCap = rgParams.bAutumnSaleMainCap;
			GHomepage.rgMarketingMessages = rgParams.rgMarketingMessages;
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

		if ( GHomepage.bAutumnSaleMainCap )
			return;

		try {
			if ( g_AccountID != 0 )
			{
				$J.ajax( {
					url: "http:\/\/store.steampowered.com\/default\/home_additional\/",
					data: {

					},
					dataType: 'json',
					type: 'GET'
				}).done(function( data ) {

					GStoreItemData.AddStoreItemData( data.item_data, {} )

					GHomepage.oAdditionalData = data;
					GHomepage.OnAdditionalDataReady();

				});
			}

		} catch(e) { OnHomepageException(e); }
	},

	OnAdditionalDataReady: function()
	{
		try {
			GHomepage.RenderRecentlyUpdatedV2();
		} catch( e ) { OnHomepageException(e); }
	},

	OnHomeDataReady: function()
	{
		try {
			if ( g_AccountID != 0 )
			{
				$J('#discovery_queue').append( $J('#static_discovery_queue_elements').children() );
				$J('#static_discovery_queeue_elements').remove();
				$J('.discovery_queue_ctn').show();
			}

		} catch(e) { OnHomepageException(e); }

		GDynamicStore.OnReady( GHomepage.OnDynamicStoreReady );
	},

	OnDynamicStoreReady: function()
	{
		var HomeSettings;
		var bHaveUser = ( g_AccountID != 0 );

		// RECOMMENDED SPOTLIGHTS
		try {
			// we render this first, it may "steal" some recommendations from the main cap to show here instead.
			if ( bHaveUser )
				GHomepage.RenderRecommendedForYouSpotlight();
		} catch( e ) { OnHomepageException(e); }


		GHomepage.oDisplayLists.main_cluster_legacy = GHomepage.oDisplayListsRaw.main_cluster_legacy || [];
		GHomepage.oDisplayLists.main_cluster = GHomepage.oDisplayListsRaw.main_cluster || [];
		GHomepage.oDisplayLists.top_sellers = GHomepage.oDisplayListsRaw.top_sellers || [];
		GHomepage.oDisplayLists.popular_new = GHomepage.oDisplayListsRaw.popular_new_releases || [];
		GHomepage.oDisplayLists.specials = GHomepage.oDisplayListsRaw.specials || [];
		GHomepage.oDisplayLists.under10 = GHomepage.oDisplayListsRaw.under10 || [];

		GHomepage.oDisplayLists.popular_new_on_steam = GHomepage.oDisplayLists.popular_new || [];

		// CURATORS ( Must be initialized before the main cluster)
		try {
			GSteamCurators.Init( GHomepage.rgTopSteamCurators, GHomepage.rgCuratedAppsData );
		} catch( e ) { OnHomepageException(e); }


		// MAIN CLUSTER
		try {
			GHomepage.RenderMainClusterV2()
		} catch( e ) { OnHomepageException(e); }


		// Spotlight/specials section
		try {
			GHomepage.RenderSpotlightSection();
		} catch( e ) { OnHomepageException(e); }

		// under10
		try {
			GHomepage.RenderUnder10();
		} catch( e ) { OnHomepageException(e); }

		// Tabs
		try {
			GHomepage.FilterTabs();
		} catch( e ) { OnHomepageException(e); }

		// Marketing Messages
		try {
			GHomepage.RenderMarketingMessages();
		} catch( e ) { OnHomepageException(e); }

		// Logged in
		// FRIENDS RECENTLY PURCHASED
		try {
			GHomepage.RenderFriendsRecentlyPurchased();
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

			GHomepage.InstrumentTabbedSection();

		} catch( e ) { OnHomepageException(e); }

		for( var i = 0; i < GHomepage.rgfnCustomRenders.length; i++ )
		{
			try {
				GHomepage.rgfnCustomRenders[i]( GHomepage.oDisplayListsRaw );
			} catch( e ) { OnHomepageException(e); }
		}

		GHomepage.oDisplayListsRaw = null;

		$J(window ).on('Responsive_SmallScreenModeToggled.StoreHome', function() {
			// TODO: this was never updated for discovery update 2
		});

		// More Content
		if( bHaveUser )
		{
			$J('#content_more').autoloader({template_url: 'http://store.steampowered.com/explore/render/', recommendations_url: 'http://store.steampowered.com/explore/recommended/', additional_url: 'http://store.steampowered.com/explore/more'});
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
		return rgItem.appid ? 'a' + rgItem.appid : 'p' + rgItem.packageid;
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

				var params = {'class': 'gutter_item'};
				var rgItemData = GStoreItemData.GetCapParams( 'gutter_recent', unAppID, 0, params );

				if( !rgItemData || !rgItemData.name )
					continue;

				var eleRow = $J('<a/>', params ).text( rgItemData.name );

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


	RenderMainClusterV2: function()
	{
		var rgDisplayListCombined = false;
		GDynamicStore.s_rgDisplayedApps = [];

		if ( g_AccountID == 0 )
		{
			rgDisplayListCombined = GHomepage.ZipLists(
				GHomepage.oDisplayLists.main_cluster_legacy, true, // legacy
				GHomepage.oDisplayLists.top_sellers, true,
				GHomepage.oDisplayLists.popular_new.slice( 0, 20 ), true, // Top new releases
				GHomepage.oDisplayLists.main_cluster, true // Legacy

			);
		}
		else if ( g_AccountID % 2 != 0 )
		{
			rgDisplayListCombined = GHomepage.ZipLists(
				GHomepage.oDisplayLists.main_cluster_legacy, true, // legacy
				GHomepage.oDisplayLists.top_sellers, true,
				GHomepage.oDisplayLists.popular_new.slice( 0, 20 ), true, // Top new releases
				GHomepage.oDisplayLists.main_cluster, true // Legacy
			);

			rgDisplayListCombined = GHomepage.MergeLists(
				rgDisplayListCombined, false,
				GHomepage.rgRecommendedGames, true
			);
		}
		else
		{
			/*rgDisplayListCombined = GHomepage.InterleaveLists(
				GHomepage.FilterItemsForDisplay( GHomepage.oDisplayLists.main_cluster_legacy, 'home', 0, 4, { games_already_in_library: false, localized: true, displayed_elsewhere: false } ),
				GHomepage.FilterItemsForDisplay( GHomepage.rgFriendRecommendations, 'home', 0, 4, { games_already_in_library: false, localized: true, displayed_elsewhere: false } ),
				GHomepage.FilterItemsForDisplay( GHomepage.rgRecommendedGames, 'home', 0, 4, { games_already_in_library: false, localized: true, displayed_elsewhere: false } ),
				GHomepage.FilterItemsForDisplay( GHomepage.rgCuratedAppsData.apps, 'home', 0, 4, { games_already_in_library: false, localized: true, displayed_elsewhere: false } ),
				GHomepage.FilterItemsForDisplay( GHomepage.oDisplayLists.main_cluster, 'home', 0, 4, { games_already_in_library: false, localized: true, displayed_elsewhere: false } )
			);*/
			rgDisplayListCombined = GHomepage.ZipLists(
				GHomepage.oDisplayLists.main_cluster_legacy, false, // legacy
				GHomepage.oDisplayLists.main_cluster, false, // Legacy
				GHomepage.rgRecommendedGames, true,
				GHomepage.rgCuratedAppsData.apps, true,
				GHomepage.rgFriendRecommendations, true
			);
		}

		rgDisplayListCombined = GHomepage.FilterItemsForDisplay(
			rgDisplayListCombined, 'home', 6, 15, { games_already_in_library: false, localized: true, displayed_elsewhere: false, only_current_platform: true }
		);

		var rgMainCaps = rgDisplayListCombined.slice( 0, GHomepage.bAutumnSaleMainCap ? 8 : 12 );

		if ( GHomepage.bAutumnSaleMainCap && rgMainCaps.length < 5 )
		{
			$J('.home_cluster_ctn').hide();
			return;
		}

		GDynamicStore.MarkAppDisplayed( rgMainCaps );

		if ( GHomepage.bShuffleInMainLegacy )
			rgMainCaps = v_shuffle( rgMainCaps );

		var $CapTarget = $J('#home_maincap_v7 .carousel_items');
		var $CapThumbs = $J('#home_maincap_v7 .carousel_thumbs');

		for ( var i = 0; i < rgMainCaps.length && i < 12; i++ )
		{
			var oItem = rgMainCaps[i];
			GHomepage.oFeaturedMainCapItems[ GHomepage.ItemKey( oItem ) ] = true;


			if ( GHomepage.bAutumnSaleMainCap )
			{
				var $MainCap =  GHomepage.BuildMainCapsuleItem( oItem, 'main_cluster' );
				if( !$MainCap )
					continue;

				$CapTarget.append( $MainCap );

				var $SmallCap = GHomepage.BuildHomePageGenericCap( 'main_cluster_list', oItem.appid, oItem.packageid, {capsule_size: 'header', no_hover: true} );
				$SmallCap.on('mouseenter', (function(index) { return function() {
					GHomepage.MainCapCarousel.Advance( index );
				}; })(i));

				$J('.maincap_list .carousel_items').append(
					$SmallCap
				);
			}
			else
			{

				var $MainCap =  GHomepage.BuildMainCapsuleItem( oItem, 'main_cluster' );
				if( !$MainCap )
					continue;

				$CapTarget.append( $MainCap );

				var $Thumb = $J('<div />');
				$CapThumbs.append( $Thumb );
			}
		}

		GDynamicStore.DecorateDynamicItems( $CapTarget );
		if ( GHomepage.bAutumnSaleMainCap )
			GDynamicStore.DecorateDynamicItems( $J('.maincap_list .carousel_items') );

		GHomepage.MainCapCarousel = CreateFadingCarousel( $J('#home_maincap_v7'), GHomepage.bAutumnSaleMainCap ? 0 : 5 );
	},

	GetAppFromList: function( unAppId, rgList )
	{
		if( rgList )
		{

			for ( var i = 0; i < rgList.length; i++ )
			{
				if ( rgList[i].appid == unAppId )
				{
					return rgList[i];
				}
			}
		}

		return null;
	},

	GetRecommendationReasons: function( unAppId )
	{
		if( !unAppId )
			return false;

		return {
			recommended: GHomepage.GetAppFromList( unAppId, GHomepage.rgRecommendedGames ),
			recommended_by_curator: GHomepage.GetAppFromList( unAppId, GSteamCurators.rgAppsRecommendedByCurators.apps ),
			recommended_by_friend: GHomepage.GetAppFromList( unAppId, GHomepage.rgFriendRecommendations ),
			top_seller: GHomepage.GetAppFromList( unAppId, GHomepage.oDisplayLists.top_sellers ),
			new_release: GHomepage.GetAppFromList( unAppId, GHomepage.oDisplayLists.popular_new ),
		};

	},

	BuildMainCapsuleItem: function( rgItem, strFeatureContext )
	{
		var rgOptions = $J.extend({
			'class': 'store_main_capsule',
		}, rgOptions ? rgOptions : {} );

		var unAppID = rgItem.appid;
		var unPackageID = rgItem.packageid;

		var params = { 'class': rgOptions.class, 'data-manual-tracking': 1 };
		var rgItemData = GStoreItemData.GetCapParams( strFeatureContext, unAppID, unPackageID, params );
		if ( !rgItemData )
			return null;

		var $CapCtn = $J('<a/>', params );
		GStoreItemData.BindHoverEvents( $CapCtn, unAppID, unPackageID );

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
						$J('<img/>', {'class': 'cluster_maincap_fill_placeholder', src: 'https://steamstore-a.akamaihd.net/public/images/v6/home/maincap_placeholder_616x353.gif' } ),
						$J('<img/>', {'class': 'cluster_capsule_image cluster_maincap_fill_bg', src: 'https://steamstore-a.akamaihd.net/public/images/blank.gif', 'data-image-url': strImageURL } ),
						$J('<img/>', {'class': 'cluster_maincap_fill_header', src: 'https://steamstore-a.akamaihd.net/public/images/blank.gif', 'data-image-url': strImageURL } )
					)
				);
			}
			else
			{
				// no image to display!
				return null;
			}
		}


		//var $ImgCap = $J('<img/>', { src: rgItemData.main_capsule } );
		//$ImgCtn.append( $ImgCap );
		$CapCtn.append( $ImgCtn );

		var $AppName = $J('<div/>', { html: rgItemData['name'] } )
		var $AppNameCtn = $J('<div/>' ).addClass( 'app_name' );

		$AppNameCtn.append( $AppName );
		$CapCtn.append( $AppNameCtn );

		var $ScreenshotCtn = $J('<div/>').addClass('screenshots');

		var rgScreenshots = rgItemData.screenshots;
		var unScreenshotAppId = unAppID;
		if( !rgScreenshots && rgItemData.appids )
		{
			for( var i=0; i<rgItemData.appids.length; i++)
			{
				var rgAppInfo = GStoreItemData.rgAppData[ rgItemData.appids[i] ];
				if( rgAppInfo && rgAppInfo.screenshots )
				{
					rgScreenshots = rgAppInfo.screenshots;
					unScreenshotAppId = rgItemData.appids[i];
					break;
				}
			}
		}

		if( rgScreenshots && rgScreenshots.length )
		{
			for ( var i = 0; i < 4 && i < rgScreenshots.length; i++ )
			{

				var $elScreenshotThumbWrapper = $J('<div>');
				var $ImgScreenshotThumb = $J ( '<div/>' ).attr ( 'data-background-image-url', GetScreenshotURL ( unScreenshotAppId, rgScreenshots[ i ].filename, '.600x338' ) );
				var $ImgScreenshot = $J ( '<div/>', {class:'screenshot'} ).attr ( 'data-background-image-url', GetScreenshotURL ( unScreenshotAppId, rgScreenshots[ i ].filename, '.600x338' ) );

				$ImgCtn.append($ImgScreenshot);

				$elScreenshotThumbWrapper.on ( 'mouseover', function( $elTarget ) { return function() { $elTarget.addClass('focus') } }( $ImgScreenshot ) );
				$elScreenshotThumbWrapper.on ( 'mouseout', function( $elTarget ) { return function() { $elTarget.removeClass('focus') } }( $ImgScreenshot ) );

				$elScreenshotThumbWrapper.append( $ImgScreenshotThumb );
				$ScreenshotCtn.append ( $elScreenshotThumbWrapper );
			}
		}
		$CapCtn.append($ScreenshotCtn);

		if( $ScreenshotCtn.children().length == 0 )
			$CapCtn.addClass('no_screenshots');

		// Recommendation reason block
		var rgRecommendationReasons = GHomepage.GetRecommendationReasons( unAppID );
		var $RecommendedReason = $J('<div/>').addClass('reason');


		var bShowAdditionalReasons = true;

		// Show the "main" reason
		if( rgRecommendationReasons.recommended_by_friend )
		{
			var reason = rgRecommendationReasons.recommended_by_friend;
			rgRecommendationReasons.recommended_by_friend = false;
			var friend = GStoreItemData.GetAccountData( null, reason.accountid_friends[0] )
			var $ReasonMain = $J('<div/>').addClass('main').addClass('friend').html( "<strong>Recommended<\/strong> by your friend, <span>%1$s<\/span>".replace("%1$s", friend.name ) );
			var $ReasonAvatar = $J('<div>').addClass('avatar').append($J('<img>').attr('src', GetAvatarURL( friend.avatar, '_medium' ) ) ).data('ds-miniprofile', friend.accountid );

			$RecommendedReason.append( $ReasonAvatar );
			$RecommendedReason.append( $ReasonMain )

			$CapCtn.attr('href', GStoreItemData.GetAppURL( unAppID, 'main_cluster_recommended_byfriends' ));

		}
		else if( rgRecommendationReasons.recommended_by_curator )
		{
			var reason = rgRecommendationReasons.recommended_by_curator;
			rgRecommendationReasons.recommended_by_curator = false;
			var curator = GStoreItemData.GetAccountData( null, reason.rgCurators[0], 7 );

			var $ReasonMain = $J('<div/>').addClass('main').addClass('curator').html( "<strong>Recommended<\/strong> by<br><span>%1$s<\/span>".replace("%1$s", V_EscapeHTML( curator.name ) ) );
			var $ReasonAvatar = $J('<div>').addClass('avatar').append($J('<img>').attr('src', GetAvatarURL( curator.avatar != '0000000000000000000000000000000000000000' ? curator.avatar : "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb", '_medium' ) ) );

			$RecommendedReason.append( $ReasonAvatar );
			$RecommendedReason.append( $ReasonMain );
			$CapCtn.attr('href', GStoreItemData.GetAppURL( unAppID, 'main_cluster_recommended_bycurators' ));
		}
		else if( rgRecommendationReasons.recommended && GDynamicStore.s_rgRecommendedTags )
		{
			var reason = rgRecommendationReasons.recommended;
			rgRecommendationReasons.recommended = false;
			var rgMatchedTags = [];
			bShowAdditionalReasons = false;

			for ( var i = 0; i < GDynamicStore.s_rgRecommendedTags.length && rgMatchedTags.length <= 3; i++ )
			{
				if( rgItemData.tags.indexOf( GDynamicStore.s_rgRecommendedTags[i].name ) !== -1 )
					rgMatchedTags.push( '<span>' + GDynamicStore.s_rgRecommendedTags[i].name + '</span>' );

			}
			if( rgMatchedTags.length == 0 )
				var $ReasonMain = $J('<div/>').addClass('main').addClass('bytags').html( "<strong>Recommended<\/strong> because you play similar games" );
			else
				var $ReasonMain = $J('<div/>').addClass('main').addClass('bytags').html( "<strong>Recommended<\/strong> because you played games tagged with" );
			$ReasonMain.append( $J('<div>').addClass('tags').html( rgMatchedTags.join('') ) );
			$RecommendedReason.append( $ReasonMain );
			$CapCtn.attr('href', GStoreItemData.GetAppURL( unAppID, 'main_cluster_recommended' ));

		}
		else
		{
			if ( rgItemData.popular_new_on_steam )
			{
				$CapCtn.attr('href', GStoreItemData.GetAppURL( unAppID, 'main_cluster_recenttopseller' ));
			}
			else if ( rgItemData.top_seller )
			{
				$CapCtn.attr('href', GStoreItemData.GetAppURL( unAppID, 'main_cluster_topseller' ));
			}

			var strStatus = '';
			if ( rgItem.status_string )
			{
				strStatus = rgItem.status_string;
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
			else if ( rgItemData && rgItemData.coming_soon )
			{
				strStatus = 'Pre-Purchase Now';
			}
			else if ( rgItemData && rgItemData.video )
			{
				strStatus = 'Now Available to Watch';
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

		$CapCtn.append($RecommendedReason);


		// Discount block
		$CapCtn.append( rgItemData.discount_block ? $J(rgItemData.discount_block).addClass('discount_block_inline' ) : '' );

		// Platform icons
		var $PlatformContainer  = $J( '<div/>' ).addClass('platforms').append( GStoreItemData.BuildSupportedPlatformIcon(rgItemData) );


		$CapCtn.append($PlatformContainer);

		return $CapCtn;
	},


	InstrumentTabbedSection: function()
	{
		var $elTarget = $J('#tab_preview_container');

		$J('.tab_item').each(function(i, j){
			var $el = $J(j);
			var unAppId = $el.data('ds-appid');

			if( unAppId && unAppId.toString().indexOf(',') !== -1 )
				unAppId = unAppId.split(',')[0];

			if( unAppId && GStoreItemData.rgAppData[ unAppId ] )
			{
				var rgData = GStoreItemData.rgAppData[ unAppId ];

				var $elInfoDiv = $J('<div>',{'class': 'tab_preview'});

				$elInfoDiv.append($J('<h2>').html( rgData.name ));

				if ( rgData['review_summary'] )
				{
					var reviewSummary = rgData['review_summary'];
					var $elReviewData = $J('<div>', {'class': 'tab_review_summary', "data-tooltip-content": reviewSummary['sReviewScoreTooltip'] } );
					$elReviewData.append( $J('<div>', {'class': 'title'}).text('Overall user reviews:') );
					$elReviewData.append( $J('<span>', {'class': 'game_review_summary ' + reviewSummary['sReviewSummaryClass']}).text(reviewSummary['reviewSummaryDesc']) );
					if ( reviewSummary['reviewScore'] > 0 )
					{
						$elReviewData.append( $J('<span>').html('&nbsp;(' + v_numberformat( reviewSummary['cReviews'] ) + ')') );
					}
					$elReviewData.v_tooltip();

					$elInfoDiv.append( $elReviewData );
				}

				if( rgData.tags )
				{
					var $elTagContainer = $J('<div>',{'class': 'tags'});

					for( var i=0; i<rgData.tags.length; i++)
					{
						var url = GStoreItemData.AddNavEventParamsToURL( 'http://store.steampowered.com/tag/en/TAGNAME/'.replace( /TAGNAME/, encodeURIComponent( rgData.tags[i] ) ), 'tab-preview' );
						$elTagContainer.append($J('<a>').attr('href',url).text( rgData.tags[i] ));
					}
					$elInfoDiv.append($elTagContainer);
				}

				if( rgData.screenshots && rgData.screenshots.length > 0 )
				{
					for( var i=0; i < rgData.screenshots.length && i < 4; i++ )
					{
						var $elScreenshot = $J('<div>', {'class': 'screenshot'}).attr( 'data-background-image-url', GetScreenshotURL( unAppId, rgData.screenshots[i].filename, '.600x338' ) );
						$elInfoDiv.append($elScreenshot);
					}
				}
				else
				{
					for( var i=0; i < 4; i++ )
					{
						var $elScreenshot = $J('<div>', {'class': 'screenshot empty'}).append("<div>").text("This screenshot may contain mature content.");
						$elInfoDiv.append($elScreenshot);
					}
				}

				$elTarget.append($elInfoDiv);

				$el.on('hover', function(){
					$J('.tab_preview', $elTarget).each(function(i, j){ $J(j).removeClass('focus') });
					$J('.tab_item.focus').each(function(i, j){ $J(j).removeClass('focus') });

					PreloadImages( $elInfoDiv );
					$el.addClass('focus');
					$elInfoDiv.addClass('focus');
				});
			}
		});

		$J('.tab_item:visible').first().trigger('mouseenter');

	},

	RenderFriendsRecentlyPurchased: function()
	{

		var $RecentlyUpdated =  $J('.friends_recently_purchased' );


		var rgCapsules = GHomepage.FilterItemsForDisplay(
			GHomepage.rgUserNewsFriendsPurchased, 'home', 4, 8, { games_already_in_library: false, dlc: false, localized: true, displayed_elsewhere: false, only_current_platform: true }
		);
		if( rgCapsules.length < 4 )
		{
			rgCapsules = GHomepage.FilterItemsForDisplay(
				GHomepage.rgUserNewsFriendsPurchased, 'home', 4, 8, { games_already_in_library: false, localized: true, only_current_platform: true }
			);
		}


		GHomepage.FillPagedCapsuleCarousel( rgCapsules, $RecentlyUpdated,
			function( oItem, strFeature, rgOptions )
			{
				var nAppId = oItem.appid;
				var $CapCtn = GHomepage.BuildHomePageGenericCap( strFeature, nAppId, 0, rgOptions );
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

	RenderSpotlightSection: function()
	{
		var rgFeaturedApps = {};
		$J('.home_area_spotlight').each( function( i, j){
			var unAppId = $J(j).data('ds-appid');
			if( unAppId )
				rgFeaturedApps[unAppId] = { appid: unAppId };

		});

		$J('.store_capsule.daily_deal').each( function( i, j){
			var unAppId = $J(j).data('ds-appid');
			if( unAppId )
				rgFeaturedApps[unAppId] = { appid: unAppId };

		});

		GDynamicStore.MarkAppDisplayed(rgFeaturedApps);

		var nSpecials = $J('.specials_target').length;

		var rgCapsules = GHomepage.FilterItemsForDisplay(
			GHomepage.oDisplayLists.specials, 'home', nSpecials, nSpecials, { games_already_in_library: false, dlc: false, localized: true, displayed_elsewhere: false, only_current_platform: true }
		);

		if( !rgCapsules || rgCapsules.length < 1 )
			return;

		GDynamicStore.MarkAppDisplayed ( rgCapsules );


		$J('.specials_target').each(function(i,j){

			oItem = rgCapsules[ i % nSpecials ];
			var strHTMLID = ( oItem.appid || oItem.packageid || oItem.bundleid ) + '_special_timer';

			$J ( j ).append ( GHomepage.BuildHomePageGenericCap ( 'spotlight_specials', oItem.appid, oItem.packageid, {
					'discount_class': 'daily_deal_discount discount_block_large',
					'capsule_size': 'header'

			} ) );

			$J( function() {
				InitDailyDealTimer( $J('#'+strHTMLID),oItem.discount_end);
			});


		});

		GDynamicStore.DecorateDynamicItems( $J('.specials_target') );

	},

	RenderRecentlyUpdatedV2: function()
	{
		var $RecentlyUpdated =  $J('.recently_updated_block' );

		var rgCapsules = GHomepage.FilterItemsForDisplay(
			GHomepage.oAdditionalData.recent_updates, 'home', 4, 8
		);


		GHomepage.FillPagedCapsuleCarousel( rgCapsules, $RecentlyUpdated,
			function( oItem, strFeature, rgOptions )
			{
				var $CapCtn = GHomepage.BuildHomePageGenericCap ( strFeature, oItem.appid, 0, rgOptions );
				$CapCtn.append ( $J ( '<div/>', { 'class': 'recently_updated_desc' } ).text ( oItem.description ) );
				if ( oItem.announcementid.length != 0 )
				{
					var strAnnouncementLink = 'http://steamcommunity.com/ogg/' + oItem.appid + '/announcements/detail/' + oItem.announcementid + '/';
					var $AnnouncementLink = $J ( '<div/>', {
						'class': 'recently_updated_announcement_link',
						'text': 'View Update Details',
						'data-ds-link': strAnnouncementLink
					} );
					$AnnouncementLink.click ( function ( e )
					{
						top.location.href = $J ( this ).attr ( 'data-ds-link' );
						return false;
					} );
					$CapCtn.append ( $AnnouncementLink );
					return $CapCtn;
				}
			},	'recently_updated', 4
		);


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
		var rgFilteredApps = GHomepage.FilterItemsForDisplay(
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

	FilterTabs: function()
	{
		var rgTabSections =  ['#tab_newreleases_content', '#tab_topsellers_content', '#tab_specials_content'];

		for( var i=0; i<rgTabSections.length; i++)
		{
			var $elTabSection = $J( rgTabSections[i] );

			this.FilterCapsules( 10, 10, $elTabSection.children(), $elTabSection, { games_already_in_library: false, only_current_platform: true } )
		}

	},

	FillPagedCapsuleCarousel: function( rgCapsules, $elTarget, fnCapsule, strNavContext, nCapsules )
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
				var rgOptions = {};
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

	RenderUnder10: function()
	{

		var rgCapsules = GHomepage.FilterItemsForDisplay(
			GHomepage.oDisplayLists.under10, 'home', 4, 8, { games_already_in_library: false, dlc: false, localized: true, displayed_elsewhere: false, only_current_platform: true }
		);

		if( rgCapsules.length < 4 )
		{
			rgCapsules = GHomepage.FilterItemsForDisplay(
				GHomepage.oDisplayLists.under10, 'home', 4, 8, { games_already_in_library: false, localized: true, only_current_platform: true }
			);
		}

		GHomepage.FillPagedCapsuleCarousel( rgCapsules, $J('.specials_under10'), function( oItem, strFeature, rgOptions ) {
			return GHomepage.BuildHomePageGenericCap(strFeature, oItem.appid, oItem.packageid, rgOptions);
		} , 'under10', 4 );
	},

	RenderWishlistOnSale: function( rgItems )
	{
				if ( !rgItems || !rgItems.length )
			return;

		GHomepage.FillPagedCapsuleCarousel( rgItems, $J('.wishlist_on_sale'), function( oItem, strFeature, rgOptions ) {
			return GHomepage.BuildHomePageGenericCap(strFeature, oItem.appid, oItem.packageid, rgOptions);
		} , 'sale_fromyourwishlist', 4 );

		GDynamicStore.MarkAppDisplayed ( rgItems.slice( 0, 4 ) );
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
				rgList = v_shuffle( rgList );
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
		var rgItemData = GStoreItemData.GetCapParams( strFeatureContext, unAppID, unPackageID, params );
		if ( !rgItemData )
			return null;

		var $CapCtn = $J('<a/>', params );
		GStoreItemData.BindHoverEvents( $CapCtn, unAppID, unPackageID );

		$CapCtn.append( $J('<img/>', { src: rgItemData.header } ) );
		$CapCtn.append( $J('<div/>', {'class': 'home_smallcap_title ellipsis' } ).html( rgItemData.name ) );
		$CapCtn.append( $J('<div/>').html( rgItemData.discount_block ? $J(rgItemData.discount_block).addClass('discount_block_inline') : '&nbsp;' ) );

		return $CapCtn;
	},

	BuildHomePageGenericCap: function( strFeatureContext, unAppID, unPackageID, rgOptions )
	{
		var rgOptions = $J.extend({
			'class': 'store_capsule',
			'include_title': false,
			'discount_class': 'discount_block_inline',
			'capsule_size': 'headerv5',
			'html_before_price': '',
			'lazy': false
		}, rgOptions ? rgOptions : {} );

		var params = { 'class': rgOptions.class };
		var rgItemData = GStoreItemData.GetCapParams( strFeatureContext, unAppID, unPackageID, params );
		if ( !rgItemData )
			return null;

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
			for( var strKey in rgAdditionalSettings )
				rgAdditionalSettings[strKey] = true;

			ApplicableSettings = jQuery.extend({}, ApplicableSettings, rgAdditionalSettings);

		}

		if ( GHomepage.bHideAdultContentViolence )
			Settings = jQuery.extend({}, Settings, {hide_adult_content_violence: true});

		if ( GHomepage.bHideAdultContentSex )
			Settings = jQuery.extend({}, Settings, {hide_adult_content_sex: true});

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
				var url = GStoreItemData.AddNavEventParamsToURL( 'http://store.steampowered.com/tag/en/TAGNAME/'.replace( /TAGNAME/, encodeURIComponent( rgTag.name ) ), 'gutter' );
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

	RenderRecommendedForYouSpotlight: function()
	{
		var $Element = $J('#home_recommended_spotlight');
		var rgGamesShown = [];
		var nGamesToShow = 1;

		var rgRecommendedSpotlightOptions = [];

		// prefer recommended things that have a discount and passes filter
		for ( var i = 0; i < GHomepage.rgRecommendedGames.length && rgRecommendedSpotlightOptions.length < nGamesToShow; i++ )
		{
			var unAppID = GHomepage.rgRecommendedGames[i].appid;
			if ( GStoreItemData.BAppPassesFilters( unAppID, GHomepage.oSettings.main_cluster, GHomepage.oApplicableSettings.main_cluster ) &&
				 GStoreItemData.rgAppData[unAppID] && GStoreItemData.rgAppData[unAppID].discount )
				rgRecommendedSpotlightOptions.push( unAppID );
		}

		// then recommended items that pass the filter
		for ( var i = 0; i < GHomepage.rgRecommendedGames.length && rgRecommendedSpotlightOptions.length < nGamesToShow; i++ )
		{
			var unAppID = GHomepage.rgRecommendedGames[i].appid;
			if ( GStoreItemData.BAppPassesFilters( unAppID, GHomepage.oSettings.main_cluster, GHomepage.oApplicableSettings.main_cluster ) )
				rgRecommendedSpotlightOptions.push( unAppID );
		}

		if ( rgRecommendedSpotlightOptions.length > 0 )
		{
			var $Spotlight = GHomepage.RenderRecommendedSpotlight( rgRecommendedSpotlightOptions[0], 'Similar to games you play' );
			if ( $Spotlight )
			{
				$Element.append( $Spotlight );
				rgGamesShown.push( rgRecommendedSpotlightOptions[0] );
			}
		}

		if ( rgGamesShown.length < nGamesToShow )
		{
			// try and find something onsale from wishlist that we have data for
			var rgWishlistItemsOnSale = [];
			for ( var unAppID in GDynamicStore.s_rgWishlist )
			{
				if ( GStoreItemData.rgAppData[unAppID] && GStoreItemData.rgAppData[unAppID].discount &&
					rgGamesShown.indexOf( unAppID ) == -1 )
					rgWishlistItemsOnSale.push( unAppID );
			}

			v_shuffle( rgWishlistItemsOnSale );
			for ( var i = 0; i < rgWishlistItemsOnSale.length; i++ )
			{
				// game from wishlist on sale
				var $Spotlight = GHomepage.RenderRecommendedSpotlight( rgWishlistItemsOnSale[i], 'From your wishlist' );
				if ( $Spotlight )
				{
					$Spotlight.children( 'a.recommended_spotlight' ).addClass( 'wishlist_recommendation' );
					$Element.append( $Spotlight );
					rgGamesShown.push( rgWishlistItemsOnSale[i] );
					break;
				}
			}
		}

		if ( rgGamesShown.length < nGamesToShow && GHomepage.rgFriendRecommendations )
		{
			for ( var i = 0; i < GHomepage.rgFriendRecommendations.length; i++ )
			{
				var unAppID = GHomepage.rgFriendRecommendations[i].appid;
				if ( rgGamesShown.indexOf( unAppID ) == -1 )
				{
					var $Spotlight = GHomepage.RenderRecommendedSpotlight( unAppID, 'Recommended by friends' );
					if ( $Spotlight )
					{
						$Element.append( $Spotlight );
						rgGamesShown.push( unAppID );
						GHomepage.rgFriendRecommendations.splice( i, 1 );
						break;
					}
				}
			}
		}

		if ( rgGamesShown.length < nGamesToShow && rgRecommendedSpotlightOptions.length > 1 && rgGamesShown.indexOf( rgRecommendedSpotlightOptions[1] ) == -1 )
		{
			var $Spotlight = GHomepage.RenderRecommendedSpotlight( rgRecommendedSpotlightOptions[1], 'Similar to games you play' );
			if ( $Spotlight )
			{
				$Element.append( $Spotlight );
				rgGamesShown.push( rgRecommendedSpotlightOptions[1] );
			}
		}

		$Element.append( $J('<div/>', {'style': 'clear: both;' } ) );

		// remove anything we showed here from the main cluster rotation
		for ( var i = GHomepage.rgRecommendedGames.length - 1; i >= 0; i-- )
		{
			if ( rgGamesShown.indexOf( GHomepage.rgRecommendedGames[i].appid ) != -1 )
			{
				GHomepage.rgRecommendedGames.splice( i, 1 );
			}
		}

		GDynamicStore.DecorateDynamicItems( $Element );
	},

	RenderRecommendedSpotlight: function( unAppID, strDescription, bNoDSFlag )
	{
		var $SpotlightCtn = $J('<div/>', {'class': 'recommended_spotlight_ctn' } );

		var params = { 'class': 'recommended_spotlight' };
		var rgItemData = GStoreItemData.GetCapParams( 'recommended_spotlight', unAppID, null, params );

		if ( !rgItemData )
			return null;

		var strHeaderURL = rgItemData.header;
		if ( !strHeaderURL )	// wishlist items may not have a header loaded
			strHeaderURL = 'https://steamcdn-a.akamaihd.net/steam/apps/' + unAppID + '/header.jpg';

		var $Spotlight = $J('<a/>', params );
		GStoreItemData.BindHoverEvents( $Spotlight, unAppID );
		$Spotlight.append( $J('<div/>', {'class': 'recommended_spotlight_cap'}).append( $J('<img/>', {src: strHeaderURL } ) ) );
		$Spotlight.append( $J('<div/>', {'class': 'recommended_spotlight_desc'} ).text( strDescription ) );
		$Spotlight.append( $J('<div/>', {'class': 'recommended_spotlight_price' }).html( rgItemData.discount_block ? $J(rgItemData.discount_block).addClass('discount_block_spotlight discount_block_large') : '&nbsp;' ) );
		$Spotlight.append( $J('<div/>', {'style': 'clear: both;' } ) );

		$SpotlightCtn.append(
			$Spotlight
		);
		return $SpotlightCtn;
	},

	RenderMarketingMessages: function(  )
	{
		var rgMessages = GHomepage.rgMarketingMessages;
		var rgFilteredMessages = [];

		if( !rgMessages || !rgMessages.length )
			return;


		var $MessagesContainer = $J('.marketingmessage_area .marketingmessage_container');

		// Filter messages
		for( var i=0; i<rgMessages.length; i++)
		{
			var message = rgMessages[i];
			if( message.must_own_appid && !GDynamicStore.BIsAppOwned( message.must_own_appid ) )
				continue;

			if( message.must_not_own_appid && GDynamicStore.BIsAppOwned( message.must_not_own_appid ) )
				continue;

			if( message.must_own_packageid && !GDynamicStore.BIsPackageOwned( message.must_own_packageid ) )
				continue;

			if( message.must_not_own_packageid && GDynamicStore.BIsPackageOwned( message.must_not_own_packageid ) )
				continue;

			// We don't have this data handy so fall back to ownership for now
			if( message.must_have_launched_appid && !GDynamicStore.BIsAppOwned( message.must_have_launched_appid ) )
				continue;

			// Skip apps the user has ignored even if they otherwise match filtering criteria
			if( message.appid && GDynamicStore.BIsAppIgnored( message.appid ) )
				continue;

			rgFilteredMessages.push(message);
		}


		var rgLayout = [ 'big','2small', '2small', '2small'];


		if( rgFilteredMessages.length < 5 )
			rgLayout = [ 'big', 'big','2small'];


		var j=0;
		for( var i=0; i<rgFilteredMessages.length; i++)
		{
			var params = {};

			if( j >= rgLayout.length )
				break;

			if( rgLayout[j] == 'big' )
			{
				var message = rgFilteredMessages[i];

				var rgItemData = GStoreItemData.GetCapParams ( 'marketingmessage', message.appid, message.packageid, params );

				var strUrl = GStoreItemData.AddNavEventParamsToURL( message.url, 'marketing_message' )

				var $MessageCtn = $J ( '<a/>', { 'class': 'home_marketing_message' } ).attr ( 'href', strUrl );

				var $MessageImg = $J ( '<span/>' ).css ( { 'background-image': 'url(' + message.image + ')' } );


				$MessageCtn.append ( $MessageImg );
				if ( rgItemData )
					$MessageCtn.append ( $J ( '<div/>' ).html ( rgItemData.discount_block ? $J ( rgItemData.discount_block ).addClass ( 'discount_block_inline' ) : '&nbsp;' ) );
				else
					$MessageCtn.append ( $J ( '<div/>' ).addClass ( 'discount_block discount_block_inline' ).append ( $J ( '<div/>' ).addClass ( 'discount_final_price' ).html ( message.title ? message.title : '&nbsp;' ) ) );

				GStoreItemData.BindHoverEvents( $MessageCtn, message.appid, message.packageid );

				$MessagesContainer.append($MessageCtn);

			} else if( rgLayout[j] == '2small')
			{
				var k = i+2;
				for( ; i < k && i < rgFilteredMessages.length; i++)
				{
					var message = rgFilteredMessages[i];

					var rgItemData = GStoreItemData.GetCapParams ( 'marketingmessage', message.appid, message.packageid, params );

					var $MessageCtn = $J ( '<a/>', { 'class': 'home_marketing_message small' } ).attr ( 'href', message.url );

					var $MessageImg = $J ( '<span/>' ).css ( { 'background-image': 'url(' + message.image + ')' } );


					$MessageCtn.append ( $MessageImg );
					if ( rgItemData )
						$MessageCtn.append ( $J ( '<div/>' ).html ( rgItemData.discount_block ? $J ( rgItemData.discount_block ).addClass ( 'discount_block_inline' ) : '&nbsp;' ) );
					else
						$MessageCtn.append ( $J ( '<div/>' ).addClass ( 'discount_block discount_block_inline' ).append ( $J ( '<div/>' ).addClass ( 'discount_final_price' ).html ( message.title ? message.title : '&nbsp;' ) ) );

					GStoreItemData.BindHoverEvents( $MessageCtn, message.appid, message.packageid );

					$MessagesContainer.append ( $MessageCtn );
				}
				// Loop will increment one more time than we want it to, so decrement to fix the outer loop.
				i--;


			}

			j++;
		}

		$J('.marketingmessage_area').show();

	}
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
	return 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/' + strAvatarHash.substr( 0 , 2 ) + '/' + strAvatarHash + ( sizeStr || '' ) + '.jpg';
}

function GetScreenshotURL( appid, filename, sizeStr )
{
	if( sizeStr )
		return 'https://steamcdn-a.akamaihd.net/steam/' + 'apps/' + appid + '/' + filename.replace('.jpg', sizeStr + '.jpg');

	return 'https://steamcdn-a.akamaihd.net/steam/' + 'apps/' + appid + '/' + filename;
}

GSteamCurators = {
	rgAppsRecommendedByCurators: [],
	rgSteamCurators: [],

	Init: function( rgSteamCurators, rgApps )
	{
		GSteamCurators.rgSteamCurators = rgSteamCurators;
		GSteamCurators.rgAppsRecommendedByCurators = rgApps;

		GSteamCurators.Render();
	},

	BuildHomePageHeaderCap: function( strFeatureContext, oItem )
	{
		var unAppID = oItem.appid;
		var unPackageID = 0;
		var params = { 'class': 'curated_app_link' };
		if ( oItem.rgCurators.length > 0 )
		{
			params['curator_clanid'] = oItem.rgCurators[0];
		}
		var rgItemData = GStoreItemData.GetCapParams( strFeatureContext, unAppID, unPackageID, params );
		if ( !rgItemData )
			return null;

		var $Item = $J('<div/>', {'class': 'curated_app_item'} );
		GStoreItemData.BindHoverEvents( $Item, unAppID, unPackageID );

		// href
		var $CapCtn = $J('<a/>', params );
		$Item.append( $CapCtn );

		// app image
		var $Image = $J('<img/>', { src: rgItemData.headerv5 } );
		$CapCtn.append( $Image );

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
				var $Curator =  $J('<div/>', {'class': 'steam_curator_for_app tooltip', 'onclick': "top.location.href='" + curator.link + "'", "data-tooltip-content": V_EscapeHTML( curator.name ) } );
				var $CuratorImg = $J('<img/>', {'class': 'steam_curator_for_app_img', 'src': GetAvatarURL( curator.strAvatarHash, '' ) });
				$Curator.append( $CuratorImg );
				$Curator.v_tooltip();

				$Curators.append( $Curator );
				++numCuratorsAdded;
			}
		}
		$Curators.append( $J('<div/>', {'style': 'clear: left'} ) );
		$Item.append( $Curators );

		// pricing info
		$CapCtn.append( $J('<div/>', {'class': 'home_headerv5_title ellipsis' } ).html( rgItemData.name ) );
		$CapCtn.append( $J('<div/>').html( rgItemData.discount_block ? $J(rgItemData.discount_block).addClass('discount_block_inline') : '&nbsp;' ) );

		return $Item;
	},

	BuildHomePageGenericCap: function( oItem, strFeatureContext )
	{
		var unAppID = oItem.appid;
		var unPackageID = 0;
		var params = { 'class': 'store_capsule' };
		if ( oItem.rgCurators.length > 0 )
		{
			params['curator_clanid'] = oItem.rgCurators[0];
		}
		var rgItemData = GStoreItemData.GetCapParams( strFeatureContext, unAppID, unPackageID, params );
		if ( !rgItemData )
			return null;

		var $Item = $J('<a/>', params );
		GStoreItemData.BindHoverEvents( $Item, unAppID, unPackageID );


		// app image
		// app image anchor

		var $CapCtn = $J('<a/>', params );
		GStoreItemData.BindHoverEvents( $CapCtn, unAppID, unPackageID );

		var $ImgCtn = $J('<div class="capsule headerv5"/>');

		$ImgCtn.append( $J('<img/>', { src: rgItemData.headerv5 } ) );
		$CapCtn.append( $ImgCtn );

		$Item.append( $CapCtn );

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
				var $Curator =  $J('<a/>', {'class': 'steam_curator_for_app tooltip', 'href': curator.link, "data-tooltip-content": V_EscapeHTML( curator.name ) } );
				var $CuratorImg = $J('<img/>', {'class': 'steam_curator_for_app_img', 'src': GetAvatarURL( curator.strAvatarHash, '' ) });
				$Curator.append( $CuratorImg );
				$Curator.v_tooltip();

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
		var rgItemData = GStoreItemData.GetCapParams( strFeatureContext, unAppID, unPackageID, params );

		var rgRecommendation = oItem.rgRecommendationByCurator[ unClanId ] || '';

		var curator = GHomepage.rgCuratedAppsData.curators[ unClanId ] || false;

		if ( !rgItemData || !curator || !rgItemData.screenshots || rgItemData.screenshots.length < 4 )
			return null;

		var $Item = $J('<a/>', params );
		GStoreItemData.BindHoverEvents( $Item, unAppID, unPackageID );

		// container

		// app image
		// app image anchor
		var $ImageCapsule= $J ('<div/>'  );
		$ImageCapsule.addClass('capsule');

		var $Image = $J('<img/>', { src: rgItemData.main_capsule } );
		$Image.bind('error', function(){
			$Image.attr('src', rgItemData.headerv5  );
			$Image.css({'width': '470px'  });
		});
		$ImageCapsule.append( $Image );
		$ImageCapsule.append( $J('<div/>').html( rgItemData.discount_block ? $J(rgItemData.discount_block).addClass('discount_block_large main_cap_discount') : '&nbsp;' ) );

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
		var $Curator =  $J('<a/>', {'class': 'tooltip', 'href': curator.link, "data-tooltip-content": V_EscapeHTML( curator.name ) } );
		var $CuratorImg = $J('<img/>', {'class': '', 'src': GetAvatarURL( curator.strAvatarHash, '_full' ) });
		$Curator.append( $CuratorImg );
		$Curator.v_tooltip();

		// Now the text blurb
		var $CuratorTextCtn = $J('<div/>',{class:'blurb'});
		var $CuratorText = $J('<span/>').text( rgRecommendation.blurb  );

		$CuratorTextCtn.append( $CuratorText );

		$CuratorBlock.append( $Curator );
		$CuratorBlock.append( $CuratorTextCtn );


		$Item.append( $CuratorBlock );

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
		$J('.steam_curators_ctn').hide();
		$J('.apps_recommended_by_curators_ctn').hide();

		if( $J('#apps_recommended_by_curators').children().length > 0 )
			return;

		$J('#apps_recommended_by_curators').empty();
		$J('#steam_curators').children('.steam_curator' ).remove();

		// if there are apps, then show them
		var bShowApps = 1;
		if ( bShowApps && GSteamCurators.rgAppsRecommendedByCurators && GSteamCurators.rgAppsRecommendedByCurators.length != 0 &&
			 GSteamCurators.rgAppsRecommendedByCurators.apps.length != 0 )
		{
			var apps = GSteamCurators.rgAppsRecommendedByCurators.apps;

			var rgRecommendedApps = GHomepage.FilterItemsForDisplay(
				apps, 'home', 5, 9, { games_already_in_library: false, displayed_elsewhere: false, only_current_platform: true }
			);

			GDynamicStore.MarkAppDisplayed( rgRecommendedApps );

			if ( rgRecommendedApps.length >= 5 )
			{
				// v1
				$J('.apps_recommended_by_curators_ctn').show();
				var $RecommendedApps = $J('#apps_recommended_by_curators');

				for ( var i = 0; i < rgRecommendedApps.length; i++ )
				{
					var oItem = rgRecommendedApps[i];
					var $Item = GSteamCurators.BuildHomePageHeaderCap( 'curated_app', oItem );
					if ( $Item )
					{
						$RecommendedApps.append( $Item );
					}
				}
				$RecommendedApps.InstrumentLinks();
				$RecommendedApps.trigger('v_contentschanged');	// update our horizontal scrollbars if needed
				GDynamicStore.DecorateDynamicItems( $RecommendedApps );

				// v2
				$J('.apps_recommended_by_curators_ctn').show();
				var $RecommendedApps = $J('#apps_recommended_by_curators_v2');

				if( $RecommendedApps.children().length > 0 )
					return;

				// First show the giant cap
				for( var j=0; j<rgRecommendedApps.length; j++ in rgRecommendedApps )
				{
					var appid = rgRecommendedApps[j].appid;

					// Find the item info in the unfiltered apps list
					var oItem = false;
					for( var i=0; i < apps.length; i++ )
					{
						if( apps[i].appid == appid )
						{
							oItem = apps[i];
							break;
						}
					}

					var $Item = GSteamCurators.BuildHomePageGiantCap( 'curated_main_app', oItem );
					if( !$Item )
						continue;

					rgRecommendedApps.splice(j,1);

					$J('.giant_curator_capsule').empty().append($Item);
					$J('.giant_curator_capsule').show();
					$J('.giant_curator_controls').show();
					$J('.giant_curator_title').show();


					var $elButtonWishlist = $J('<span />').text("Add to Wishlist");

					$elButtonWishlist.click(function(){
						GDynamicStore.ModifyWishlist( appid, false, function(){ $elButtonWishlist.hide(); return false; } );
					});

					var $elButtonNotInterested = $J('<span />').text("Not Interested");

					$elButtonNotInterested.click(function(){
						$J('.giant_curator_capsule').css({'opacity': 0.3});
						GDynamicStore.ModifyIgnoredApp( $Item, appid, false, function(){ $elButtonNotInterested.hide();  return false; } );
					});

					if( !GDynamicStore.BIsAppOnWishlist(appid) )
						$J('.giant_curator_controls').append( $elButtonWishlist );

					if( !GDynamicStore.BIsAppIgnored(appid ) ) // Shouldn't ever need to check this here, but sure why not?
						$J('.giant_curator_controls').append( $elButtonNotInterested );

					break;
				}


				GHomepage.FillPagedCapsuleCarousel( rgRecommendedApps, $J('.more_apps_by_curators_capsule'),
					GSteamCurators.BuildHomePageGenericCap,	'curated_app', 4
				);


				return;
			}
		}

		$J('.steam_curators_ctn').show();
		// if no apps, then curators
		if ( GSteamCurators.rgSteamCurators && GSteamCurators.rgSteamCurators.length != 0 )
		{
			$J('#steam_curators_not_empty').show();
			var $Curators = $J('#steam_curators');

			for ( var i = 0; i < GSteamCurators.rgSteamCurators.length; i++ )
			{
				var curator = GSteamCurators.rgSteamCurators[i];
				var $Item = GSteamCurators.BuildCuratorItem( curator, i );
				$Curators.append( $Item );
			}
		}
		else
		{
			$J('#steam_curators_not_empty').hide();
			$J('#steam_curators_empty').show();
		}
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

			var offset = $(ele).offset();
			this.nNextTrigger = $(ele).height() + offset.top - 750;

			ele.bTriggerActive = false;
			ele.tagIndex = 0;
			ele.nRecommendedDataIndex = 0;
			ele.rgSeenApps = [];


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
						if( this.rgRecommendedData[strBucket].length == 0 )
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
							similar: rgSimilarItems
						},
						//dataType: 'json',
						type: 'GET'
					}).done(function( data ) {
						ele.index++;
						var newElement = $(data);

						GDynamicStore.DecorateDynamicItems(newElement);

						$('.gamelink.ds_owned', newElement).parent().parent().hide();

						$('*[data-ds-appid]', newElement).each(function(index, e){
							var nAppId = $(e).data('ds-appid');
							if( ele.rgSeenApps.indexOf( nAppId ) === -1 )
							{
								ele.rgSeenApps.push( nAppId );
							} else {
								if( $(e).hasClass('gamelink') )
									$(e).parent().parent().hide();
							}
							// If we're going to recommend this game later, skip it for now.
							for( var i=0; i < ele.rgRecommendedData['friends'].length - 1; i++ )
							{
								if( nAppId == ele.rgRecommendedData['friends'][i].appid )
								{
									if( $(e).hasClass('gamelink') )
									{
										$(e).parent().parent().hide();
										ele.rgSeenApps.splice( ele.rgSeenApps.indexOf( nAppId ), 1 );
									}
								}
							}
							if( GDynamicStore.BIsAppIgnored( nAppId ) )
							{
								if( $(e).hasClass('gamelink') )
									$(e).parent().parent().hide();
							}
						});
						$(ele).append(newElement);
						ele.bTriggerActive = false;

						var nCurrentScroll = $(window).scrollTop() + $(window).height();
						ele.nNextTrigger = $(ele).height() + offset.top - 750;
						if(nCurrentScroll > ele.nNextTrigger)
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
				if(nCurrentScroll > this.nNextTrigger)
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
	$J('#' + target + ' .tab_item').first().trigger('mouseenter');
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

var CUsabilityTracker = function()
{
	this.m_schUpload = null;
	this.m_tsLoaded = performance.now();
	this.m_rgScrollToElements = null;
	this.m_stats = {
		maxScroll: 0,
		windowWidth: 0,
		windowHeight: 0,
		scrolledToSection: 0,
		events: []
	}
}

CUsabilityTracker.prototype.Init = function()
{
	this.ResetStats();

	var _this = this;
	$Window = $J( window );
	$Window.unload( function()
	{
		_this.OnWindowUnload();
	});

	$Window.on( 'scroll', function()
	{
		_this.SetScrollPosition();
	});

	$Window.on( 'click', function( e )
	{
		_this.HandleWindowClick( e );
	});
}

CUsabilityTracker.prototype.ResetStats = function()
{
	this.m_stats.windowWidth = window.innerWidth;
	this.m_stats.windowHeight = window.innerHeight;
	this.m_stats.events = [];
	this.m_stats.maxScroll = this.GetScrollPosition();
	this.m_stats.scrolledToSection = 0;
}

CUsabilityTracker.prototype.ScheduleUpload = function()
{
	this.CancelScheduledUpload();

	var _this = this;
	this.m_schUpload = setTimeout( function() { _this.PostStats() }, 3 * 60 * 1000 );
}

CUsabilityTracker.prototype.CancelScheduledUpload = function()
{
	if ( this.m_schUpload === null )
		return;

	clearTimeout( this.m_schUpload );
	this.m_schUpload = null;
}

CUsabilityTracker.prototype.GetScrollPosition = function()
{
	var nCurrent = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
	return nCurrent + window.innerHeight;
}

CUsabilityTracker.prototype.SetScrollPosition = function()
{
	// ignore scrolling for 1/2 second after page load
	if ( (performance.now() - this.m_tsLoaded) < 500.0 )
		return;

	var nCurrent = this.GetScrollPosition();

	// always skip updating and scheduling a new scroll if previous matches, including across page reloads that automatically scroll down
	if ( nCurrent <= this.m_stats.maxScroll )
		return;

	this.m_stats.maxScroll = nCurrent;
	this.CheckScrollToElements();
	this.ScheduleUpload();
}

CUsabilityTracker.prototype.OnWindowUnload = function ()
{
	this.PostStats();
}

CUsabilityTracker.prototype.HandleWindowClick = function( e )
{
	var $Target = $J( e.target );
	if ( !$Target )
		return;

	var $Tracked = $Target.closest( '[data-usability]');
	if ( !$Tracked || $Tracked.length == 0 )
		return;

	this.AddEvent( $Tracked.data( 'usability' ) );
}

CUsabilityTracker.prototype.AddEvent = function( eEvent )
{
	for ( var i = 0; i < this.m_stats.events.length; i++ )
	{
		if ( this.m_stats.events[i] == eEvent )
			return;
	}

	this.m_stats.events.push( eEvent );
	this.ScheduleUpload();
}

CUsabilityTracker.prototype.CheckScrollToElements = function()
{
	if ( this.m_rgScrollToElements === null )
		this.m_rgScrollToElements = $J( '[data-usability-scroll]' );

	var nBottomOfScreen = this.GetScrollPosition();
	for ( var i = this.m_rgScrollToElements.length - 1; i >= 0; i-- )
	{
		var $element = $J( this.m_rgScrollToElements[i] );
		if ( !$element.is(':visible') )
			continue;

		var nOffset = $element.offset().top;
		if ( nOffset > nBottomOfScreen )
			continue;

		this.SetScrollToSection( $element.data( 'usability-scroll' ) );
	}
}

CUsabilityTracker.prototype.SetScrollToSection = function( eEvent )
{
	if ( this.m_stats.scrolledToSection < eEvent )
	{
		this.m_stats.scrolledToSection = eEvent;
		this.ScheduleUpload();
	}
}

CUsabilityTracker.prototype.PostStats = function()
{
	// if no scheduled upload, stats aren't dirty
	if ( this.m_schUpload === null )
		return;

	this.CancelScheduledUpload();

		this.m_stats.windowWidth = window.innerWidth;
	this.m_stats.windowHeight = window.innerHeight;

	var strStats = JSON.stringify( this.m_stats );
	var strURL = "http:\/\/store.steampowered.com\/default\/usabilitytracking\/";
	var bSupportsBeacon = typeof navigator.sendBeacon != 'undefined';
	if ( bSupportsBeacon )
	{
		var fdParams = new FormData();
		fdParams.append( 'stats', strStats );
		navigator.sendBeacon( strURL, fdParams );
	}
	else
	{
		$J.ajax(
		{
			url: strURL,
			data: { stats: strStats },
			dataType: 'json',
			type: 'POST'
		})
		.done( function( data )
		{
		});

		// if we couldn't send a beacon, we try to busy wait for a bit so the AJAX request has time
		// to reach the servers.
		var iters = 0;
		var start = new Date().getMilliseconds();
		while ( iters < 10000000 && ( new Date().getMilliseconds() - start ) < 30 ) { iters++; }
	}

	this.ResetStats();
}

jQuery( document ).ready(function( $ ) {
	TabSelectLast();
});

