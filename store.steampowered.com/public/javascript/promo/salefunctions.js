
var k_nTier1Max = 15;
var k_nTier2Max = 18;

function BIsSameItem( rgItem1, rgItem2 )
{
	return ( rgItem1.appid && rgItem1.appid == rgItem2.appid ) ||
		( rgItem1.packageid && rgItem1.packageid == rgItem2.packageid ) ||
		( rgItem1.bundleid && rgItem1.bundleid == rgItem2.bundleid );
}

function AddItemsIfNotPresent( rgItemsToDisplay, rgItemsFound, cMaxItems )
{
	for ( var i = 0; i < rgItemsFound.length && rgItemsToDisplay.length < cMaxItems; i++ )
	{
		var bAlreadyPresent = false;
		for ( var j = 0; j < rgItemsToDisplay.length; j++ )
		{
			if ( BIsSameItem( rgItemsToDisplay[j], rgItemsFound[i] ) )
			{
				bAlreadyPresent = true;
				break;
			}
		}

		if ( !bAlreadyPresent )
			rgItemsToDisplay.push( rgItemsFound[i] );
	}
}

function GetTagRelevanceForUser( rgTagIDs )
{
	// this array will be empty when not logged in
	for ( var i = 0; i < GDynamicStore.s_rgRecommendedTags.length; i++ )
	{
		var rgRecommendedTag = GDynamicStore.s_rgRecommendedTags[i];
		if ( rgTagIDs.indexOf( rgRecommendedTag.tagid ) != -1 )
			return 1 - ( i / GDynamicStore.s_rgRecommendedTags.length );
	}

	return 0;
}

function TagBlockComparator( TagA, TagB )
{
	if ( TagA.rgItemsPassingFilter.length < 6 )
	{
		if ( TagB.rgItemsPassingFilter.length >= 6 )
		{
			return 1;
		}
	}
	else if ( TagB.rgItemsPassingFilter.length < 6 )
	{
		return -1;
	}

	return ( TagB.flUserScore + TagB.flTagScore ) - ( TagA.flUserScore + TagA.flTagScore );
}

function BItemNotDisplayedElsewhere( item )
{
	return item.appid && GDynamicStore.s_rgDisplayedApps.indexOf( item.appid ) !== -1;
}

function GenerateTagBlocks( rgTagData, rgTier1Unfiltered, rgTier2Unfiltered )
{
	var rgTagBlocks = [];
	var cTagBlocksToShow = 2;
	var rgTagDataShown = [];

	var rgTagDataWithItems = rgTagData.filter( function ( TagData ) { return TagData.items && TagData.items.length; } );

	// remove games we've already displayed
	var rgTier1 = rgTier1Unfiltered.filter( BItemNotDisplayedElsewhere );
	var rgTier2 = rgTier2Unfiltered.filter( BItemNotDisplayedElsewhere );

	for ( var iTagBlock = 0; iTagBlock < cTagBlocksToShow; iTagBlock++ )
	{
		var rgPersonalizedTagData = [];

		for( var iTag = 0; iTag < rgTagDataWithItems.length; iTag++ )
		{
			var TagData = rgTagDataWithItems[iTag];
			if ( !TagData.items || !TagData.items.length || rgTagDataShown.indexOf( TagData ) !== -1 )
				continue;

			if ( iTagBlock == 0 )	// first pass only
				PromoteFeaturedGamesWithinList( TagData, rgTier1, rgTier2 );

			var rgItemsPassingFilter = GHomepage.FilterItemsForDisplay(
				TagData.items, 'sale', 6, 6, { games_already_in_library: false, localized: true, displayed_elsewhere: false, only_current_platform: true }
			);

			rgPersonalizedTagData.push( {
				TagData: TagData,
				rgItemsPassingFilter: rgItemsPassingFilter,
				flUserScore: GetTagRelevanceForUser( TagData.tagids ),	/* scale of 0 - 1, with 1 being most relevant */
				flTagScore: 1 - ( iTag / rgTagDataWithItems.length )			/* scale of 0 - 1, with 1 being foremost in the list */
			});
		}

		rgPersonalizedTagData.sort( TagBlockComparator );

		var TagBlock = rgPersonalizedTagData.shift();
		if ( typeof TagBlock !== 'undefined' )
		{
			rgTagBlocks.push( TagBlock );
			rgTagDataShown.push( TagBlock.TagData );
			GDynamicStore.MarkAppDisplayed( TagBlock.rgItemsPassingFilter );
		}
	}

	return rgTagBlocks;
}

function FindAndRemoveWhere( vec, fnPredicate )
{
	let i = vec.findIndex( fnPredicate );
	if ( i >= 0 )
	{
		vec.splice( i, 1 );
		return true;
	}
	else
	{
		return false;
	}
}


function PromoteFeaturedGamesWithinList( TagData, rgTier1, rgTier2 )
{
	var oIncludedTags = {};
	for ( var i = 0; i < TagData.tagids.length; i++ )
		oIncludedTags[ TagData.tagids[i] ] = true;

	for ( var i = rgTier2.length - 1; i >= 0; i-- )
	{
		var rgItem = rgTier2[i];
		var rgAppData = rgItem.appid && GStoreItemData.rgAppData[ rgItem.appid ];
		if ( rgAppData )
		{
			for ( var iTag =0 ; iTag < rgAppData.tagids.length; iTag++ )
			{
				if ( oIncludedTags[ rgAppData.tagids[ iTag ] ] )
				{
					FindAndRemoveWhere( TagData.items, function( otherItem ) { return BIsSameItem( otherItem, rgItem ); } );
					TagData.items.unshift( rgItem );
					break;
				}
			}
		}
	}

	for ( var i = rgTier1.length - 1; i >= 0; i-- )
	{
		var rgItem = rgTier1[i];
		var rgAppData = rgItem.appid && GStoreItemData.rgAppData[ rgItem.appid ];
		if ( rgAppData )
		{
			for ( var iTag =0 ; iTag < rgAppData.tagids.length; iTag++ )
			{
				if ( oIncludedTags[ rgAppData[ iTag ] ] )
				{
					FindAndRemoveWhere( TagData.items, function( otherItem ) { return BIsSameItem( otherItem, rgItem ); } );
					TagData.items.unshift( rgItem );
					break;
				}
			}
		}
	}
}

function fnRenderHeroCapsule( oItem )
{
	let rgItemData = null;
	let purchaseAction = null;
	let itemID = null;
	if ( oItem.appid )
	{
		rgItemData = GStoreItemData.rgAppData[ oItem.appid ];
		purchaseAction = 'addToCart( %subid% )'.replace( '%subid%', rgItemData.pricing_subid );
		itemID = oItem.appid;
	}
	else if ( oItem.bundleid )
	{
		rgItemData = GStoreItemData.rgBundleData[ oItem.bundleid ];
		purchaseAction = 'addBundleToCart( %bundleid% )'.replace( '%bundleid%', oItem.bundleid );
		itemID = oItem.bundleid;
	}

	if ( !rgItemData )
		return;

	var url = GStoreItemData.GetAppURL( oItem.appid, 'sale_hero' );
	var $Cap = $J( '<div/>', {'class': 'hero_capsule', 'data-ds-appid': oItem.appid, 'data-panel': '{"clickOnActivate":"firstChild","onOptionsActionDescription":"Add to Cart","onOptionsButton":"%onOptionsButton%","flow-children":"column"}'.replace( '%onOptionsButton%', purchaseAction ) } );
	$Cap.append( $J('<a/>', {'class': 'hero_click_overlay', 'href': url } ) );
	$Cap.append( $J('<img/>', {'class': 'hero_capsule_img', 'alt': oItem.appid, 'style': 'max-height: 450px', src: 'https://store.cloudflare.steamstatic.com/public/images/blank.gif', 'data-image-url': rgItemData[ 'hero_capsule' ] ?? rgItemData[ 'main_capsule' ] } ) );

	if ( rgItemData.has_live_broadcast )
	{
		$J('<div/>', {'class': 'broadcast_live_stream_icon', 'style': 'z-index:unset' } ).append( 'Live')
	}

	var Screenshots = $J( '<div/>', {'class': 'hover_screenshots' } );
	var VideoCtn = $J( '<div/>', {'class': 'hover_video_container hero_screenshot_load', 'data-background': 'url(' + ( rgItemData.screenshots.length > 0 ? GetScreenshotURL( rgItemData.screenshots[0].appid, rgItemData.screenshots[0].filename, '.600x338' ) : rgItemData.main_capsule ) + ')' } );

	if ( rgItemData.microtrailer )
	{
		var Video = $J( '<video/>', {'class': 'hero_video', 'loop': true, 'preload': 'none' } ).prop("muted", true).append( $J( '<source/>', { 'src': rgItemData.microtrailer, 'type': 'video/webm' } ) );
		VideoCtn.append( Video );
	}

	Screenshots.append( VideoCtn );
	$Cap.append( Screenshots );

	var HeroData = $J( '<div/>', {'class': 'hero_data' } );
	var HeroContent = $J( '<div/>', {'class': 'hero_data_content' } )
	HeroContent.append( $J( '<div/>', {'class': 'hero_name' } ).text( rgItemData.name ) );

	if ( rgItemData.review_summary )
	{
		var pref = ( !GDynamicStore.s_preferences['review_score_preference'] ? 0 : GDynamicStore.s_preferences['review_score_preference'] );
		var reviewSummary = pref !== 1 ? rgItemData.review_summary_filtered : rgItemData.review_summary;
		var $elReviewData = $J('<div>', {'class': 'hero_stat', "data-tooltip-text": reviewSummary['sReviewScoreTooltip'] } );
		$elReviewData.append( $J('<span>', {'class': 'game_review_summary ' + reviewSummary['sReviewSummaryClass']}).text(reviewSummary['reviewSummaryDesc']) );
		if ( reviewSummary['reviewScore'] > 0 )
		{
			$elReviewData.append( $J('<span>').html('&nbsp;(' + v_numberformat( reviewSummary['cReviews'] ) + ')') );
		}
		if ( rgItemData['review_anomaly'] )
		{
			$elReviewData.append( $J( '<span class="review_anomaly_icon">&nbsp;*</span>' ) );
		}

		HeroContent.append( $elReviewData );
	}

	if( rgItemData.tags )
	{
		var $elTagContainer = $J('<div>',{'class': 'hero_tags_ctn'});
		for( var i=0; i < rgItemData.tags.length; i++)
		{
			$elTagContainer.append($J('<div>', {'class': 'hero_tag'}).text( rgItemData.tags[i] ));
		}
		HeroContent.append($elTagContainer);
	}
	HeroData.append( HeroContent );

	var AddToCartCtn = $J( '<div/>', {'class': 'hero_add_to_cart' } );
	AddToCartCtn.append( $J( '<button/>', {'class': 'btn_green_white_innerfade btn_medium', } ).click( function( e ){ eval( purchaseAction ); } ).append( $J( '<span/>' ).text( 'Add to Cart' )  ) );
	HeroData.append( AddToCartCtn );

	$Cap.append( HeroData );

	$Cap.append( $J( rgItemData.discount_block ).addClass( 'discount_block_inline hero_discount' ) );

	return $Cap;
}

function HomeSaleFilterHeroes( $Parent, rgHeroItems )
{
	var Settings = { games_already_in_library: false, localized: true, only_current_platform: true, enforce_minimum: true };

	var $HeroItemCtn = $Parent.find('.carousel_items' );

	
	var rgFilteredHeroes = GHomepage.FilterItemsForDisplay( rgHeroItems, 'home', 3, 21, Settings );

	
	GDynamicStore.MarkItemsAsDisplayed( rgFilteredHeroes );

	// generate carousel based on sorted and filtered hero capsules
	GHomepage.FillPagedCapsuleCarousel( rgFilteredHeroes, $Parent.find('.carousel_container'), function( oItem, strFeature, rgOptions ) { return fnRenderHeroCapsule( oItem ); }, 'sale-hero', 3 );

	$HeroItemCtn.find('.hero_capsule:not(.hidden)').children('a').each( function() {
		ModifyLinkSNR( $J(this), function( snr ) { return GStoreItemData.rgNavParams['sale_heroes_priority'] } );
	});

	$J('.hero_capsule').on( 'mouseenter vgp_onfocus touchstart', function() {
		$J(this).find('.hero_screenshot_load').each( function() { $J(this).css( 'backgroundImage', $J(this).data('background') ); } );
	} );

	$J('.hero_capsule:not(.valveindex)').on( 'mouseenter vgp_onfocus touchstart', function() {
		if ( $J(this).find('video.hero_video').length )
			$J(this).find('video.hero_video')[0].play();
	} );

	$J('.hero_capsule:not(.valveindex)').on( 'mouseleave vgp_onblur touchend', function() {
		if ( $J(this).find('video.hero_video').length )
			$J(this).find('video.hero_video')[0].pause();
	} );

	$HeroItemCtn.css('minHeight', '' );
}





function HomeRenderFeaturedItems( rgDisplayLists, rgTagData, rgFranchiseData )
{
	var k_nTier1ItemsMin = 14;
	var k_nTier1ItemsMax = 14;

	var k_nTier2ItemsMin = 14;
	var k_nTier2ItemsMax = 14;

	if ( rgDisplayLists.steam_award_winners )
	{
		var rgSteamAwardWinners = GHomepage.FilterItemsForDisplay( rgDisplayLists.steam_award_winners, 'home', 10, 10, { games_already_in_library: false, localized: true, displayed_elsewhere: false, only_current_platform: false, enforce_minimum: true } );
		GDynamicStore.MarkAppDisplayed( rgSteamAwardWinners );
		HomeSaleBlock( rgSteamAwardWinners, $J('#steamawards_target' ), 'sale_steamawards' );
	}

	HomeSaleFilterHeroes( $J('.hero_parent_ctn'), SortItemListByPriorityList( rgDisplayLists.heros, 'tier1' ) );

	var rgAllTier1Items = GHomepage.MergeLists( rgDisplayLists.sale_tier1, false, rgDisplayLists.sale_tier1_fallback, false );

	var rgTier1 = GHomepage.FilterItemsForDisplay(
		SortItemListByPriorityList( rgAllTier1Items, 'tier1' ), 'home', k_nTier1ItemsMin, k_nTier1ItemsMax, { games_already_in_library: false, localized: true, displayed_elsewhere: false, only_current_platform: true, enforce_minimum: true }
	);

	GDynamicStore.MarkAppDisplayed( rgTier1 );

	var rgAllTier2Items = GHomepage.MergeLists( rgDisplayLists.sale_tier2, false, rgDisplayLists.sale_tier2_fallback, false );

	var rgTier2 = GHomepage.FilterItemsForDisplay(
		SortItemListByPriorityList( rgAllTier2Items, 'tier2' ), 'home', k_nTier2ItemsMin, k_nTier2ItemsMax, { games_already_in_library: false, localized: true, displayed_elsewhere: false, only_current_platform: true, enforce_minimum: true }
	);

	GDynamicStore.MarkAppDisplayed( rgTier2 );

	HomeSaleBlock( rgTier1, $J('#tier1_target' ), 'sale_dailydeals_priority' );


	var $FranchiseBlock = $J('#franchise_target' );
	new CScrollOffsetWatcher( $FranchiseBlock, function() {
		SaleFranchiseBlock( $FranchiseBlock, rgFranchiseData );
	});


	var $Tier2 = $J('#tier2_target' );
	new CScrollOffsetWatcher( $Tier2, function() { HomeSaleBlock( rgTier2, $Tier2, 'sale_dailydeals_t2_priority'  ); } );


	var $UserArea = $J('#home_sale_account_ctn');
	if ( $UserArea.length )
	{
		if ( g_AccountID )
		{
			new CScrollOffsetWatcher( $UserArea, function() {
				$J.get( 'https://store.steampowered.com/default/home_sale_data', {u: g_AccountID } ).done( function( data ) {
					GStoreItemData.AddStoreItemDataSet( data.StoreItemData );
					RenderWishlistAndDLCArea( $UserArea, data.rgWishlistOnSale, data.rgDLCOnSale );
				}).fail( function() {
					$UserArea.hide();
				});
			});
		}
		else
		{
			$UserArea.hide();
		}
	}

	var $DiscountsArea = $J('#sale_discounts_area');
	new CScrollOffsetWatcher( $DiscountsArea, function() {
		SaleRenderDiscountsArea( rgDisplayLists.under10, rgDisplayLists.sale_deals );
		$DiscountsArea.css('height', '' );
	} );

	// process tag sections first, pulling in featured items into the tag blocks we display
	var $TagBlock = $J('#sale_tag_categories');
	if ( $TagBlock.length )
	{
		new CScrollOffsetWatcher( $TagBlock, function() {
			var rgPersonalizedTagData = GenerateTagBlocks( rgTagData, rgDisplayLists.sale_tier1, rgDisplayLists.sale_tier2 );
			for ( var iTag = 0; iTag < rgPersonalizedTagData.length; iTag++ )
			{
				SaleTagBlock( $TagBlock, rgPersonalizedTagData[iTag] );
			}
		});
	}

	// filter dupes from tab lists
	GDynamicStorePage.FilterCapsules( 16, 16, $J( '#popular_new_releases_content .tab_content_items' ).children('.sale_capsule'), $J( '#popular_new_releases_content' ), { only_current_platform: true, games_already_in_library: false, localized: true, enforce_minimum: true } );
	GDynamicStorePage.FilterCapsules( 16, 16, $J( '#tab_upcoming_content .tab_content_items' ).children('.sale_capsule'), $J( '#tab_upcoming_content' ), { prepurchase: true, games_already_in_library: true, localized: true, enforce_minimum: true } );
	GDynamicStorePage.FilterCapsules( 16, 16, $J( '#topsellers_tier' ).children('.sale_capsule'), $J( '#topsellers_tier' ), {dlc_for_you: true, games_already_in_library: true, localized: true, enforce_minimum: true } );

	// NOTE: If we are already using home.js, then we don't need this. Found we were doubling up the streams
	// GSteamBroadcasts.Init( GHomepage.FilterItemsForDisplay );

	AddMicrotrailersToStaticCaps( $J('.home_topsellers_games_ctn' ) );
	AddMicrotrailersToStaticCaps( $J('.home_newupcoming_games_ctn') );

	// Render the featured events section
	// RenderSeasonalSaleInGameEventsCarousel( rgFeaturedSeasonEvents, rgDisplayLists.feature_event_apps );
}

function TryPopulateSaleItems( rgDisplayedItems, rgOriginalItemList, cMinItems, cMaxItems )
{
	if ( rgDisplayedItems.length < cMinItems )
	{
		// fill with items that the user might already own
		AddItemsIfNotPresent( rgDisplayedItems, GHomepage.FilterItemsForDisplay(
			rgOriginalItemList, 'home', cMinItems, cMaxItems, { games_already_in_library: true, localized: true, displayed_elsewhere: true, only_current_platform: true }
		), cMinItems );
	}

	if ( rgDisplayedItems.length < cMinItems )
	{
		AddItemsIfNotPresent( rgDisplayedItems, rgOriginalItemList, cMinItems );
	}
}

function HomeSaleBlock( rgItems, $Parent, strFeatureContext )
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
		rgRemainingItems = SaleRow( rgRemainingItems, $Parent, bFourRow ? 4 : 3, strFeatureContext, SaleCap );
		bFourRow = !bFourRow;
	}
	BindSaleCapAutoSizeEvents( $Parent );
	GDynamicStore.DecorateDynamicItems( $Parent );
	$Parent.css('height','');
}

function HomeSaleCapsuleCategory( rgItems, $Parent, strFeatureContext )
{
	if ( !rgItems )
	{
		$Parent.hide();
		return;
	}

	if ( !strFeatureContext )
		strFeatureContext = 'sale_categories';

	var rgCapsules = GHomepage.FilterItemsForDisplay(
		rgItems, 'home', 4, 16, { games_already_in_library: false, localized: true, displayed_elsewhere: false, only_current_platform: true }
	);

	if ( rgCapsules.length < 4 )
	{
		rgCapsules = GHomepage.FilterItemsForDisplay(
			rgItems, 'home', 4, 16, { games_already_in_library: false, localized: true, only_current_platform: true }
		);
	}

	if ( rgCapsules.length >= 4 )
	{
		GHomepage.FillPagedCapsuleCarousel( rgCapsules, $Parent.find('.carousel_container'), function( oItem, strFeature, rgOptions ) {
			return GHomepage.BuildHomePageGenericCap(strFeature, oItem.appid, oItem.packageid, oItem.bundleid, rgOptions);
		} , strFeatureContext, 4 );
	}
	else
	{
		$Parent.hide();
	}
}

function SaleRow( rgItems, $Parent, nItems, strFeatureContext, fnRenderFunc )
{
	var rgItemsThisRow = rgItems.slice( 0, nItems );
	if ( !fnRenderFunc )
		fnRenderFunc = SaleCap;

	if ( rgItemsThisRow.length <= 3 )
	{
		var $Row = $J('<div/>', {'class': 'salerow salerow3' } );

		$Row.append(
			rgItemsThisRow[0] && fnRenderFunc( rgItemsThisRow[0], strFeatureContext, 'discount_block_inline' ),
			rgItemsThisRow[1] && fnRenderFunc( rgItemsThisRow[1], strFeatureContext, 'discount_block_inline' ),
			rgItemsThisRow[2] && fnRenderFunc( rgItemsThisRow[2], strFeatureContext, 'discount_block_inline' )
		);

		$Parent.append( $Row );
	}
	else
	{
		var $Row = $J('<div/>', {'class': 'salerow salerow4' } );

		$Row.append(
			fnRenderFunc( rgItemsThisRow[0], strFeatureContext, 'discount_block_inline' ),
			fnRenderFunc( rgItemsThisRow[1], strFeatureContext, 'discount_block_inline' ),
			fnRenderFunc( rgItemsThisRow[2], strFeatureContext, 'discount_block_inline' ),
			fnRenderFunc( rgItemsThisRow[3], strFeatureContext, 'discount_block_inline' )
		);

		$Parent.append( $Row );
	}

	return rgItems.slice( rgItemsThisRow.length );
}

function SaleCap( item, strFeatureContext, strDiscountClass, bUseSmallCap, bPreferHeaderImg )
{
	var params = { 'class': 'sale_capsule' };

	if( item && item.feature && item.feature.length > 0 )
	{
		strFeatureContext = item.feature;
	}
	var rgItemData = GStoreItemData.GetCapParamsForItem( strFeatureContext, item, params );

	if ( !rgItemData )
		return;

	var $CapCtn = $J('<a/>', params );
	GStoreItemData.BindHoverEventsForItem( $CapCtn, item );

	var $Img;
	if ( bUseSmallCap )
	{
		$Img = $J( '<img/>', {'class': 'sale_capsule_image', 'src':  rgItemData['small_capsule'] } );
	}
	else
	{
		if ( bPreferHeaderImg && typeof rgItemData['header'] !== 'undefined' )
		{
			$Img = $J( '<img/>', {'class': 'sale_capsule_image autosize', 'src': 'https://store.cloudflare.steamstatic.com/public/images/v6/home/header_placeholder_460x215.gif' } );
			$Img.data('src-header', rgItemData['header'] );
		}
		else
		{
			$Img = $J( '<img/>', {'class': 'sale_capsule_image autosize', 'src': 'https://store.cloudflare.steamstatic.com/public/images/v6/home/maincap_placeholder_616x353.gif' } );
			$Img.data('src-maincap', rgItemData['main_capsule'] );
		}

		$Img.data('src-smallcap', rgItemData['small_capsule'] );
	}

	$CapCtn.append( $J('<div/>', {'class': 'sale_capsule_image_ctn' } ).append( $J('<div/>', {'class': 'sale_capsule_image_hover'} ), $Img ) );
	$CapCtn.append( rgItemData.discount_block ? $J(rgItemData.discount_block).addClass( strDiscountClass ) : '' );

	var rgAppInfo = GStoreItemData.rgAppData[ item.appid ];
	if ( rgAppInfo && rgAppInfo.has_live_broadcast )
	{
		$CapCtn.append(
					$J('<div/>', {'class': 'broadcast_live_stream_icon' } ).append( 'Live')
		);

	}

	AddMicrotrailer( $CapCtn, rgItemData.microtrailer );

	return $CapCtn;
}

function AddMicrotrailer( $CapCtn, microtrailer )
{
	if ( !microtrailer )
		return;

	$CapCtn.addClass( 'with_microtrailer' );
	$CapCtn.data('hoverDisableScreenshots', true );
	var $ImgCtn = $CapCtn.children('.sale_capsule_image_ctn');
	$CapCtn.one( 'mouseenter vgp_onfocus', function()
	{
		let $Video = null;
		if ( !$ImgCtn.children( '.sale_capsule_video' ).length )
		{
			$Video = $J('<video/>', {'class': 'sale_capsule_video', loop: true, preload: 'none' }).prop( "muted", true )
				.append($J("<source>", {src: microtrailer, type: "video/webm"}));
			$ImgCtn.append( $Video );
		}
		else
		{
			$Video = $ImgCtn.children( '.sale_capsule_video' );
		}

		var playPromise;
		var fnPlay = function() {
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
			if ( playPromise )
				playPromise.then( function() {$Video[0].pause() } );
			else
				$Video[0].pause();

			$CapCtn.removeClass( 'microtrailer_active' );
		};

		$CapCtn.on( 'mouseenter vgp_onfocus', fnPlay );
		$CapCtn.on( 'mouseleave vgp_onblur', fnPause );

		window.setTimeout( fnPlay, 1 );
	});
}

function AddMicrotrailersToStaticCaps( $Parent )
{
	$Parent.children( '.sale_capsule' ).each( function() {
		AddMicrotrailer( $J(this), $J(this).data('microtrailer') );
	});
}

function TagBoxTopDecoration()
{
	var imgStr = '<div class="home_category_top_decoration"><img src="https://cdn.cloudflare.steamstatic.com/store/promo/winter2019/snow_ceiling.png"/></div>';
	return '';
}

function SaleTagTexture( suffix )
{
	return 'background-image: url("https://cdn.cloudflare.steamstatic.com/store/promo/summer2023/' + suffix + '_page.webp"); background-repeat: repeat;';
}

function SaleTagGradient( colorsIn )
{
	var colors = colorsIn.slice(); // don't want to modify

	var strStyle = 'background: linear-gradient( 330deg, ' + colors.shift() + ' 0%, ';

	// add midstop if needed
	if ( colors.length >= 2 )
		strStyle += colors.shift() + ' 45%, ';

	strStyle += colors.shift() + ' 90% );';

	return strStyle;
}

// Prioritize the genre/tag blocks based on the users tag preference, then display the renaming in the provided random order
// Returns the priority list; can modify and alter the rgTagGenre list
function PrioritizeTagGenreList( rgTagGenres )
{
	rgPriorityTagGenreList = [];

	// Walk through the user's preference if any, and append to the rgPriorityTagGenreList list. Since multiple tagid
	// can refer to the same entity, we null out the value, so we don't add the same item more than once.
	//
	// We won't have any recommendation tags for a not-logged in users, so we don't prioritize and fallback to random ordering.
	if( GDynamicStore && GDynamicStore.s_rgRecommendedTags && GDynamicStore.s_rgRecommendedTags.length > 0 )
	{
		// Map the tagid to index into the rgTagGenres list;
		const mapTagIDSourceIndex = new Map();
		rgTagGenres.forEach( function ( TagGenre, index ) {
			TagGenre.tagids.forEach( function( tagid ) {
				mapTagIDSourceIndex.set( tagid, index );
			});
		});

		GDynamicStore.s_rgRecommendedTags.forEach( function( preferredTag ) {
			if( mapTagIDSourceIndex.has( preferredTag.tagid ) )
			{
				const index = mapTagIDSourceIndex.get( preferredTag.tagid );
				if( rgTagGenres[index])
				{
					rgPriorityTagGenreList.push( rgTagGenres[index]);
					rgTagGenres[index] = null; // invalidate so we don't add it again
				}
			}
		});
	}

	rgTagGenres.forEach( function( TagGenre ) {
		if (TagGenre) {
			rgPriorityTagGenreList.push(TagGenre)
		}
	} );

	return rgPriorityTagGenreList;
}

// Display the Tag Genre which are a list of art block that refer to a custom sale page for that tag/genre
function RenderTagGenreBlock( rgTagGenres )
{
	// This has scroll row per contain
	var $elCtn = $J( '#sale_tag_genre_ctn');

	rgTagGenres.forEach( function ( TagGenre, index ) {

		var nScrollRowIndex = Math.floor( index / 5 );
		var $elScrollRow = $J( $elCtn.children()[ nScrollRowIndex] );
		var $Link = $J('<a/>', { 'class': 'tag_square', 'href': TagGenre.url  } );

		$Link.append( $J('<img/>', { 'class': 'tag_square_img', 'src': TagGenre.square } ) );
		$Link.append( $J('<img/>', { 'class': 'tag_square_title_img', 'src': TagGenre.titleimg } ) );

		$elScrollRow.append( $Link );
	});
}

const k_MinItemPerEventFeaturingPage = 3;

function RenderSeasonalSaleInGameEventsCarousel( rgFeaturedSeasonEvents, rgItems )
{
	// If there aren't any item, exit early
	if( !rgFeaturedSeasonEvents || rgFeaturedSeasonEvents.length < k_MinItemPerEventFeaturingPage )
		return;

	v_shuffle( rgFeaturedSeasonEvents );
	var bHasFeaturedGames = false;
	for( var i=0; i< rgFeaturedSeasonEvents.length; i++ )
	{
				var bPassFilter = GStoreItemData.BAppPassesFilters( rgFeaturedSeasonEvents[i].appid,
			{ only_current_platform: true, } /* setting */,
			{ only_current_platform: true, early_access: true, software: true, video: true, virtual_reality: true  } /* applicable setting */,
			false /* bStrict */ );

		if( !bPassFilter )
		{
			rgFeaturedSeasonEvents.splice( i, 1 );
			i -= 1;
		}

				if( GDynamicStore.BIsAppOwned( rgFeaturedSeasonEvents[i].appid ) || GDynamicStore.BIsAppOnWishlist( rgFeaturedSeasonEvents[i].appid ) )
		{
			bHasFeaturedGames = true;
			rgFeaturedSeasonEvents.unshift( rgFeaturedSeasonEvents.splice( i, 1 )[0] );
		}
	}

	var elementName = bHasFeaturedGames ? 'featured_in_game_event_carousel_top' : 'featured_in_game_event_carousel_bottom'
	var $eventCarousel = $J( '.' + elementName );
	if ( !$eventCarousel  )
		return;


	GHomepage.FillPagedCapsuleCarousel( rgFeaturedSeasonEvents, $eventCarousel,
		function( eventInfo, strFeature, rgOptions, nDepth )
		{
			var rgItemData = GStoreItemData.GetCapParamsForItem( 'sale_featured_seasonal_events', eventInfo, rgOptions );

			var $eventCapsule = $J( '<a/>', {
				"class": "season_sale_feature_event_capsule" + (GDynamicStore.BIsAppOwned( eventInfo.appid ) ? " season_sale_feature_has_app_in_library" : "" ),
				"data-ds-appid": eventInfo.appid,
				"href": eventInfo.link,
			} );

			var $image = $J( '<img/>', {
				"src": eventInfo.img_url,
				"loading": "lazy",
			} );
			$eventCapsule.append( $image );

            if( rgItemData )
            {
                var $appName = $J( '<div/>', {
                    "class": "feature_event_appname",
                } );
                $appName.append( rgItemData.name );
                $eventCapsule.append( $appName);

                GStoreItemData.BindHoverEventsForItem(  $eventCapsule, eventInfo );
            }

			var $title = $J( '<div/>', {
				"class": "feature_event_title",
			} );
			$title.append( eventInfo.title );
			$eventCapsule.append( $title);

			if( eventInfo.subtitle )
			{
				var $subtitle = $J( '<div/>', {
					"class": "feature_event_subtitle",
				} );
				$subtitle.append( eventInfo.subtitle );
				$eventCapsule.append( $subtitle);
			}

			return $eventCapsule;
		},
		'sale_featured_seasonal_events',
		k_MinItemPerEventFeaturingPage
	)

	$J('#' + elementName).show();
}

function SaleTagBackground( colors )
{
	var hex = colors[0];
	var r = Number.parseInt( hex[1] + hex[2], 16 );
	var g = Number.parseInt( hex[3] + hex[4], 16 );
	var b = Number.parseInt( hex[5] + hex[6], 16 );
	// return 'background: rgba( ' + r + ', ' + g + ', ' + b + ', 0.3 );';
	return 'background: #ffffff11';
}

function SaleTagBlock( $Parent, rgPersonalizedTagData )
{
	var rgTagData = rgPersonalizedTagData.TagData;
	var rgItemsPassingFilter = rgPersonalizedTagData.rgItemsPassingFilter;

	if ( rgItemsPassingFilter.length <= 0 ) {
        return;
    }

	var strTagMethod = rgTagData.method;
	var focusedAppId = rgTagData.focusedAppId;
	var rgKeyTags = rgTagData.keyTags;
	var title = "";
	var noTags = false;

	if(strTagMethod === "tags") { title='<b>GAMES </b><br/>SIMILAR TO';}
	else if(strTagMethod === "gems") { title='<b>GEMS </b><br/>SIMILAR TO';}
	else if(strTagMethod === "default") { title='<b>POPULAR GAMES </b><br/>SIMILAR TO';}
	else { noTags = true;}

	var rgTextures = [ 'a', 'b', 'c', 'd', 'e' ];
	var randomKey = Math.floor( Math.random() * rgTextures.length );
	var texture = rgTextures[ randomKey ];

	TryPopulateSaleItems( rgItemsPassingFilter, rgTagData.items, 6, 6 );

	var colors = rgTagData.colors;
	// id, colors, name, items
	var $Ctn = $J( '<div/>', {'class': 'home_category_ctn'} );

	var $TitleCtn = $J('<div/>', { 'class': 'home_category_title_ctn', style: SaleTagTexture( texture ) } ).append( $J('<div/>', { 'class': 'home_category_title'}).html( title ) );
	var $FocusCtn = $J('<div/>', { 'class': 'home_category_focus_ctn'} );

	var $TopDecoration = TagBoxTopDecoration();
	$Ctn.append( $TopDecoration );

	var focusCap = SaleCap( {"appid":focusedAppId}, 'sale_tag_bucket', 'discount_block_inline' );
	$FocusCtn.append(focusCap);

	var $TagsCtn = $J('<div/>', {'class': 'home_category_tags_ctn'} );

	$TitleCtn.append( $FocusCtn );

	if(!noTags){
		var keyTagsLine = "";
		var top3 = [];
		for(var i = 0; i < rgKeyTags.key.length; i++){
			var keyTag = rgKeyTags.key[i];
			top3.push(keyTag.name);
			if(top3.length >= 3){
				break;
			}
		}
		keyTagsLine = top3.join(" | ");
		$Ctn.append( $TitleCtn.append( $J('<div/>', { 'class': 'home_category_subtitle_tags'}).html( keyTagsLine) ) );
	}
	else{
		if ( "subtitle" in rgTagData )
		{
			$Ctn.append( $J('<div/>', { 'class': 'home_category_title_ctn', style: SaleTagTexture( texture ) } ).
				append( $J('<div/>', { 'class': 'home_category_title'}).html( rgTagData.name ) ).
				append( $J('<div/>', { 'class': 'home_category_subtitle'}).html( rgTagData.subtitle ) ) );
		}
		else
		{
			$Ctn.append( $J('<div/>', { 'class': 'home_category_title_ctn', style: SaleTagTexture( texture ) } ).
				append( $J('<div/>', { 'class': 'home_tag_category_title'}).html( rgTagData.name ) ) );
		}
	}

	BindSaleCapAutoSizeEvents( $FocusCtn );

	var $Games = $J('<div/>', {'class': 'home_category_games_ctn', style: SaleTagBackground( colors ) } );
	var $Row = $J('<div/>', {'class': 'salerow salerow3 multiline' } );

	if ( "feature_name" in rgTagData )
	    $FeatureName = rgTagData.feature_name;
	else
	    $FeatureName = 'sale_tag_bucket';

	for ( var iItem = 0; iItem < rgItemsPassingFilter.length; iItem++ )
		$Row.append( SaleCap( rgItemsPassingFilter[iItem], $FeatureName, 'discount_block_inline' ) );

	$Games.append( $Row );

	BindSaleCapAutoSizeEvents( $Games );

	$Ctn.append( $Games );

	if ( $FeatureName === "sale_tag_bucket" )
	    $Ctn.append( $J('<a/>', {'class': 'see_more_link btnv6_white_transparent btn_small_tall', 'href': rgTagData.url } ).html( '<span>' + 'See More' + '</span>' ) );
	else if ( $FeatureName == "sale_recommended_by_steam_labs" )
		$Ctn.append( $J('<a/>', {'class': 'see_more_link btnv6_white_transparent btn_small_tall', 'href': rgTagData.url } ).html( '<span>' + 'Discover more in the Interactive Recommender' + '</span>' ) );

	$Parent.append( $Ctn ).css('height','');
	GDynamicStore.DecorateDynamicItems( $Parent );
}

function SaleFranchiseBlock( $Parent, rgFranchiseData )
{
	// slice off extras to make it an even multiple of 3
	rgFranchiseData.splice( rgFranchiseData.length - ( rgFranchiseData.length % 3 ) );

	var $PrevTarget = $Parent.find( '.franchise_previous' );
	var $ContentTarget = $Parent.find( '.franchise_flex' );
	var $NextTarget = $Parent.find( '.franchise_next' );


	var $Thumbs = $Parent.children('.carousel_thumbs');
	var rg$Thumbs = [];

	var fnGetFranchise = function( i )
	{
		var iClamped = i % rgFranchiseData.length;
		if ( iClamped < 0 )
			iClamped += rgFranchiseData.length;
		return rgFranchiseData[ iClamped ];
	}

	var iPageStart = 0;
	var SaleFranchisePageTo = function ( bSkipPrev, bSkipNext )
	{
		if ( !bSkipPrev )
			$PrevTarget.empty().append( BuildFranchiseCap( fnGetFranchise( iPageStart - 1 ) ), true );

		$ContentTarget.children().detach();
		for ( var i = iPageStart; i < iPageStart + 3; i++ )
		{
			$ContentTarget.append( BuildFranchiseCap( fnGetFranchise( i ) ) );
		}

		if ( !bSkipNext )
			$NextTarget.empty().append( BuildFranchiseCap( fnGetFranchise( iPageStart + 3 ), true ) );

		if ( iPageStart < 0 )
			iPageStart += rgFranchiseData.length;
		var $Thumb = rg$Thumbs[ iPageStart / 3 ];
		if ( $Thumb )
		{
			$Thumb.siblings().removeClass( 'focus' );
			$Thumb.addClass( 'focus' );
		}
	}

	var bInTransition = false;
	$PrevTarget.add( $Parent.children('.arrow.left') ).click( function() {
		if ( bInTransition )
			return;

		$NextTarget.fadeOut( '500' );

		var nHeight = $ContentTarget.height();
		$ContentTarget.addClass( 'transition' ).css('height', nHeight + 'px');
		$Thumbs.children().removeClass('focus');
		for ( var i = iPageStart - 1; i > iPageStart - 4; i-- )
		{
			$ContentTarget.prepend( BuildFranchiseCap( fnGetFranchise( i ) ) );
		}
		$PrevTarget.empty().append( BuildFranchiseCap( fnGetFranchise( iPageStart - 4 ), true ) );
		$PrevTarget.css('right', '199%' ).animate( {right: '99%' }, 500 );

		var rgChildren = $ContentTarget.children();
		$J(rgChildren[5]).animate( {opacity: 0}, 500 );
		$J(rgChildren[4]).animate( {opacity: 0}, 500 );
		$J(rgChildren[3]).animate( {opacity: 0}, 500 );


		$ContentTarget.css('left','-100%').animate( {left: '0%'}, 500, function() {
			iPageStart -= 3;
			$ContentTarget.children().detach();
			$ContentTarget.removeClass('transition').css('left', '').css('height','');
			SaleFranchisePageTo( true, false );
			$NextTarget.show();
			$PrevTarget.stop().css('right','');
			bInTransition = false;
		} );
	});
	$NextTarget.add( $Parent.children('.arrow.right') ).click( function() {
		if ( bInTransition )
			return;

		$PrevTarget.fadeOut( '500' );

		var nHeight = $ContentTarget.height();
		$ContentTarget.addClass( 'transition' ).css('height', nHeight + 'px');
		$Thumbs.children().removeClass('focus');
		var bClicked = true;
		for ( var i = iPageStart + 3; i < iPageStart + 6; i++ )
		{
			var $Cap = BuildFranchiseCap( fnGetFranchise( i ) );
			if ( bClicked )
			{
				$Cap.css( 'opacity', 0.5 ).animate( { opacity: 1.0 }, 500 );
				bClicked = false;
			}
			else
			{
				$Cap.css( 'opacity', 0 ).animate( { opacity: 1.0 }, 500 );
			}
			$ContentTarget.append( $Cap );
		}
		$NextTarget.empty().append( BuildFranchiseCap( fnGetFranchise( iPageStart + 6 ), true ) );
		$NextTarget.css('left', '199%' ).animate( {left: '99%' }, 500 );

		var rgChildren = $ContentTarget.children();
		$J(rgChildren[0]).animate( {opacity: 0}, 500 );
		$J(rgChildren[1]).animate( {opacity: 0}, 500 );
		$J(rgChildren[2]).animate( {opacity: 0}, 500 );

		$ContentTarget.animate( {left: '-100%'}, 500, function() {
			iPageStart += 3;
			$ContentTarget.children().detach();
			$ContentTarget.removeClass('transition').css('left', '').css('height','');
			SaleFranchisePageTo()
			$PrevTarget.show();
			$NextTarget.stop().css('left','');
			bInTransition = false;
		} );
	});

	var fnMakeThumb = function( index )
	{
		return $J('<div/>').click( function() {
			if ( !bInTransition )
			{
				bInTransition = true;
				var nHeight = $ContentTarget.height();
				$ContentTarget.css('height', nHeight + 'px');
				iPageStart = index * 3;
				SaleFranchisePageTo();
				window.setTimeout( function() {
					bInTransition = false;
					$ContentTarget.css('height','');
				}, 45 );
			}
		});
	};

	for ( var i = 0; i < rgFranchiseData.length / 3; i++ )
	{
		var $Thumb = fnMakeThumb( i );
		rg$Thumbs.push( $Thumb );
		$Thumbs.append( $Thumb );
	}

	SaleFranchisePageTo();
}

function BuildFranchiseCap( FranchiseData, bAlternate )
{
	var field = bAlternate ? '$CapAlt' : '$Cap';
	if ( FranchiseData && !FranchiseData[field] )
	{
		var $Cap = $J( '<div/>', {'class': 'franchise_capsule', 'data-panel': '{"clickOnActivate":"firstChild"}'} );

		var url = GStoreItemData.AddNavEventParamsToURL( FranchiseData.strSalePageURL, 'sale_franchises', 0 /* depth */ );

		$Cap.append( $J('<a/>', {'class': 'hero_click_overlay', 'href': url } ) );
		$Cap.append( $J('<img/>', {'class': 'franchise_background', 'src': FranchiseData.strBackgroundImageURL } ) );
        $Cap.append( $J('<img/>', {'class': 'franchise_placeholder', 'src': 'https://cdn.cloudflare.steamstatic.com/store/promo/winter2019/franchise_placeholder.gif' } ) );
		$Cap.append( $J( '<div/>', {'class': 'franchise_logo_ctn'} ).append( $J('<img/>', {'class': 'franchise_logo', 'src': FranchiseData.strLogoImageURL } ) ) );

		$Cap.append( $J('<div/>', {'class': 'franchise_discount_tag' } ).text( 'Up to {PCT}% Off'.replace( /\{PCT\}/, FranchiseData.nDiscountMax ) ) );

		if ( !bAlternate )
		{
			var $Games = $J( '<div/>', {'class': 'franchise_games'} );

			$Cap.one( 'mouseenter vgp_onfocus', function( event ) {

				if ( $Games.html().length > 0 )
					return;

				var rgItems = FranchiseData.rgItemsToFeature.slice();
				if ( rgItems.length > 2 || rgItems.length == 1 )
				{
					var $Row = $J('<div/>', {'class': 'franchise_game single' } );
					$Row.append( SaleCap( rgItems.shift(), 'sale_franchises', 'discount_block_inline', true ) );
					$Games.append( $Row );
				}
				if ( rgItems.length == 2 )
				{
					var $Row = $J('<div/>', {'class': 'franchise_game double' } );
					$Row.append( SaleCap( rgItems.shift(), 'sale_franchises', 'discount_block_inline', true ) );
					$Row.append( SaleCap( rgItems.shift(), 'sale_franchises', 'discount_block_inline', true ) );
					$Games.append( $Row );
				}

				$Games.append( $J('<a/>', {'class': 'franchise_see_all', 'href': url } ).text(
					'See %s more games...'.replace( /%s/, FranchiseData.nItemsTotal - FranchiseData.rgItemsToFeature.length )
				) );

				$Cap.addClass( 'active' );
				BindSaleCapAutoSizeEvents( $Games );
				GDynamicStore.DecorateDynamicItems( $Games );

				$Cap.on( 'mouseenter vgp_onfocus', function() { $Cap.addClass( 'active' ); } );
				$Cap.on( 'mouseleave vgp_onblur', function() { $Cap.removeClass( 'active' ); } );
			} );

			$Cap.append( $Games );
		}

		FranchiseData[field] = $Cap;
	}

	if ( FranchiseData )
		FranchiseData[field].css( 'opacity', '');

	return FranchiseData ? FranchiseData[field] : null;
}

function SaleRenderDiscountsArea( rgUnder10, rgDeals )
{
	var rgUnder10Filtered = GHomepage.FilterItemsForDisplay(
		rgUnder10, 'sale', 4, 4, { games_already_in_library: false, localized: true, displayed_elsewhere: false, only_current_platform: true }
	);

	TryPopulateSaleItems( rgUnder10Filtered, rgUnder10, 4, 4 );

	GDynamicStore.MarkAppDisplayed( rgUnder10Filtered );

	var rgDealsFiltered = GHomepage.FilterItemsForDisplay(
		rgDeals, 'sale', 4, 4, { games_already_in_library: false, localized: true, displayed_elsewhere: false, only_current_platform: true }
	);

	TryPopulateSaleItems( rgDealsFiltered, rgDeals, 4, 4 );


	GDynamicStore.MarkAppDisplayed( rgDealsFiltered );

	SaleRenderTwoByTwo( $J('#75pct_tier' ), rgDealsFiltered, 'sale_deals' );
	SaleRenderTwoByTwo( $J('#10off_tier' ), rgUnder10Filtered, 'under10' );
}

function SaleRenderTwoByTwo( $Container, rgItems, strFeature, bPreferHeaderImg )
{
	$Container.append(
		rgItems[0] && SaleCap( rgItems[0], strFeature, 'discount_block_inline', false, bPreferHeaderImg ),
		rgItems[1] && SaleCap( rgItems[1], strFeature, 'discount_block_inline', false, bPreferHeaderImg ),
		rgItems[2] && SaleCap( rgItems[2], strFeature, 'discount_block_inline', false, bPreferHeaderImg ),
		rgItems[3] && SaleCap( rgItems[3], strFeature, 'discount_block_inline', false, bPreferHeaderImg )
	);

	GDynamicStore.DecorateDynamicItems( $Container );
	BindSaleCapAutoSizeEvents( $Container );
}

function RenderWishlistAndDLCArea( $Parent, rgWishlistOnSale, rgDLCOnSale )
{
	var rgWishlistOnSaleFiltered = GHomepage.FilterItemsForDisplay(
		rgWishlistOnSale, 'sale', 4, 4, { games_already_in_library: false, localized: true, displayed_elsewhere: false, only_current_platform: true }
	);

	TryPopulateSaleItems( rgWishlistOnSaleFiltered, rgWishlistOnSale, 4, 4 );


	var rgDLCOnSaleFiltered = GHomepage.FilterItemsForDisplay(
		rgDLCOnSale, 'sale', 4, 4, { games_already_in_library: false, localized: true, displayed_elsewhere: false, only_current_platform: true }
	);

	TryPopulateSaleItems( rgDLCOnSaleFiltered, rgDLCOnSale, 4, 4 );


	// do we have enough to display?
	if ( rgWishlistOnSaleFiltered.length < 4 && rgDLCOnSaleFiltered.length < 4 )
	{
		$Parent.hide();
		return;
	}

	var bSingle = rgWishlistOnSaleFiltered.length < 4 || rgDLCOnSaleFiltered.length < 4;

	if ( rgWishlistOnSaleFiltered.length < 4 )	// TODO
	{
		$J('#wishlist_tier').parents('.home_discounts_block').hide();
	}
	else
	{
		if ( bSingle )
			$J('#wishlist_tier').addClass( 'single_row' );
		SaleRenderTwoByTwo( $J('#wishlist_tier' ), rgWishlistOnSaleFiltered, 'sale_fromyourwishlist', true );
		GDynamicStore.MarkAppDisplayed( rgWishlistOnSaleFiltered );
	}

	if ( rgDLCOnSaleFiltered.length < 4 )	// TODO
	{
		$J('#dlc_tier').parents('.home_discounts_block').hide();
	}
	else
	{
		if ( bSingle )
			$J('#dlc_tier').addClass( 'single_row' );
		SaleRenderTwoByTwo( $J('#dlc_tier' ), rgDLCOnSaleFiltered, 'sale_dlcforyou', true );
		GDynamicStore.MarkAppDisplayed( rgDLCOnSaleFiltered );
	}

	// we load with a fixed height to prevent the page from jumping around.  Eliminate that now.
	$Parent.css( { minHeight: '' } );
}

var g_AutoSizeListenerCount = 0;
function BindSaleCapAutoSizeEvents( $Container )
{
	var $AutosizeImages = $Container.find('img.sale_capsule_image.autosize');
	var mqSwitchToSmall = window.matchMedia ? window.matchMedia("(max-width: 580px)") : {matches: false};

	if ( !$AutosizeImages.length )
		return;

	var id = 'AdjustSaleCaps_' + ( g_AutoSizeListenerCount++ );

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
}


var CVideoScrollController = function( $container )
{
	this.rgVideos = [];
	var _this = this;

	// Store off the query results locally, so we don't need to re-query every time we scroll (which is slow)
	$J( 'video', $container ).each(function(i,j){
		_this.rgVideos.push(j);
	});

	document.addEventListener('scroll', this.onScroll.bind(this) );
	window.addEventListener('resize', this.onScroll.bind(this) );

	this.update();
};

/**
 * Called on scroll.
 *
 * Right now this just calls update, but adding an explicit method since we may want to be smarter later.
 */
CVideoScrollController.prototype.onScroll = function(  )
{
	this.update();
};

/** Called on scroll, resize, and once on load.
 * This function has three basic jobs:
 * 1) Determine which video we should be playing, and play it (if it's not already)
 * 2) Stop any videos we shouldn't be playing
 * 3) Start preloading the *next* video, so it will be ready when we scroll further.
 *
 * The "best" video in this context is the highest video on the screen that is fully visible in the viewport.
 * If no video is "best", we should accept partially occluded videos, though this may not be implemented in v1.
 */
CVideoScrollController.prototype.update = function()
{
	var idxBest = -1;

	// Find the first fully-visible video.
	// Note this assumes our array is in order. It *probably* is, but we don't currently do an explicit sort,
	// so if you're getting weird results, check that first.
	for( var i=0; i<this.rgVideos.length; i++ )
	{
		var rect = this.rgVideos[i].getBoundingClientRect();
		if( rect.top > 0 && rect.bottom < window.innerHeight )
		{
			idxBest = i;
			break;
		}
	}

	// Toggle play/pause statuses.
	for( var i=0; i<this.rgVideos.length; i++ )
	{
		if ( i == idxBest )
			this.rgVideos[ i ].play ();
		else
		{
			this.rgVideos[ i ].pause ();
		}
	}
};

/*
 {
 categoryid
 label
 nominatedid	o
 writein	o
 }
 */
function InitSteamAwardNominationDialog( nominatedid, appname, rgCategories, bReleasedCurrentYear, bLimitedUser )
{
	$J('.show_nomination_dialog').click( function() {
		var $PageElement = $J(this);

		if ( $PageElement.hasClass( 'disabled' ) )
			return;

		if ( !g_AccountID )
		{
			// prompt for login
			ShowConfirmDialog( 'Nominate Game',
				'You need to log in first before you can vote.',
				'Login'
			).done( function() {
				window.location = 'https://store.steampowered.com/login/?redir=app%2F__APPID__'.replace( /__APPID__/, nominatedid );
			});
			return;
		}

		if ( bLimitedUser )
		{
			ShowAlertDialog( 'Error', 'It appears that your account is limited. To prevent nomination abuse, you must spend $5 USD on Steam in order to participate in the Steam Awards. Visit <a href="https://support.steampowered.com/kb_article.php?ref=3330-IAGK-7663" target="_blank" rel="">Steam Support</a> for more info.' );
			return;
		}

		var $Form = $J('<form/>', {'class': 'steamward_nominate_form'});

		var bFoundCurrentApp = false;
		var rgPreviousLaborOfLoveWinners = [230410,271590,730,105600];
		for ( var i = 0; i < rgCategories.length; i++ )
		{
			var oCategory = rgCategories[i];
			if ( oCategory.categoryid == -1 )
				continue;

			var bHideCategory = !bReleasedCurrentYear && oCategory.categoryid != 74;

			if ( oCategory.categoryid == 74 && $J.inArray( nominatedid, rgPreviousLaborOfLoveWinners ) !== -1 )
				bHideCategory = true;

			if ( bHideCategory )
				continue;

			var id = 'category' + oCategory.categoryid;
			var $Row = $J('<div/>', {'class': 'steamaward_nomination_row'} );

			var $Div = $J('<div/>', {'class': 'steamaward_nomination_content'} );
			var $Radio = $J('<input/>', {type: 'radio', id: id, name: 'nomination_category', value: oCategory.categoryid } );

			$Row.append( $Radio.wrap( $J('<div/>', {'class': 'radio_ctn'} ) ).parent(), $Div );

			$Div.append( $J('<label/>', {'for': id} ).html( '<span>' + oCategory.label + '</span><br>' + oCategory.desc ) );

			$Radio.change( function() {
				if ( $J(this).prop('checked') )
					$J(this).parents( '.steamaward_nomination_row' ).addClass('selected').siblings().removeClass('selected');
				else
					$J(this).parents( '.steamaward_nomination_row' ).removeClass('selected');
			});

			if ( oCategory.appid == nominatedid )
			{
				$Radio.prop( 'checked', true ).change();
				bFoundCurrentApp = true;
			}

			if ( oCategory.is_writein )
			{
				var $WriteInDiv = $J('<div/>', {'class': 'writein_ctn'} );
				var $WriteInInput = $J('<input/>', {'id': id + '_writein', 'name': id + '_writein', 'type': 'text', 'value': oCategory.write_in_name || '' } );
				$WriteInDiv.append(
					$J('<label/>', {'for': id + '_writein'} ).text( 'Your category suggestion:' ),
					$J('<div/>', {'class': 'gray_bevel for_text_input' } ).append( $WriteInInput )
				);

				$Div.append( $WriteInDiv );

				$WriteInInput.keypress( function() {
					if ( $J(this).val() )
						$J(this).parents('.steamaward_nomination_row').find('input[type=radio]').prop('checked', true ).change();
				});
			}
			$Form.append( $Row );
		}

		// build the display
		var $Dialog = $J('<div/>');
		$Dialog.append( $J('<p/>', {'class': 'steamawards_nomination_intro'}).html( 'Which award would you like to nominate %s for?'.replace( /%s/, appname ) ) );
		$Dialog.append( $Form );
		$Dialog.append( $J('<div/>', {'class': 'steamaward_nomination_learnmore' }).append( $J('<a/>', {'href': 'https://store.steampowered.com/steamawards/nominations/'}).text( 'Learn more about the Steam Awards' ) ) );

		var fnSubmit = function()
		{
			var categoryid = $Form.find( 'input[name=nomination_category]:checked' ).val();
			var writein = $Form.find('#category' + categoryid + '_writein').val();

			if ( categoryid == -1 && v_trim( writein || '' ).length < 5 )
			{
				ShowAlertDialog( 'Error', 'Please enter a category suggestion' );
				return;
			}

			$J.post( 'https://store.steampowered.com/steamawards/nominategame', {
				sessionid: g_sessionID,
				nominatedid: nominatedid,
				categoryid: categoryid,
				writein: writein,
				source: 1			} ).done( function( data ) {
				// update the metadata
				if ( data.success == 1 )
				{
					rgCategories = data.rgCategories;
					$PageElement.html( data.page_html );
				}
				else
				{
					if ( data.message && data.message.length )
					{
						ShowAlertDialog( 'Error', data.message );
					}
					else
					{
						ShowAlertDialog( 'Error', 'There was a problem saving your changes.  Please try again later.' );
					}
				}
			}).fail( function() {
				ShowAlertDialog( 'Error', 'There was a problem saving your changes.  Please try again later.' );
			});
		};

		var Modal = ShowConfirmDialog( 'Nominate Game', $Dialog, 'Save' )
			.done( function() {
				fnSubmit();
			});

		$Form.submit( function( e ) {
			e.preventDefault();
			Modal.Dismiss();
		});

	});
}


