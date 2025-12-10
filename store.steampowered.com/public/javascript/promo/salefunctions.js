
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

function GenerateTagBlocks( $Parent, rgTagData, rgTier1Unfiltered, rgTier2Unfiltered )
{
	var cTagBlocksToShow = 2;

	var rgTagDataWithItems = rgTagData.filter( function ( TagData ) { return TagData.items && TagData.items.length; } );

	// remove games we've already displayed
	var rgTier1 = rgTier1Unfiltered.filter( BItemNotDisplayedElsewhere );
	var rgTier2 = rgTier2Unfiltered.filter( BItemNotDisplayedElsewhere );

	let cTagBlocksShown = 0;
	for( var iTag = 0; iTag < rgTagDataWithItems.length && cTagBlocksShown < cTagBlocksToShow; iTag++ )
	{
		const TagData = rgTagDataWithItems[iTag];
		if ( !TagData.items )
			continue;

		PromoteFeaturedGamesWithinList( TagData, rgTier1, rgTier2 );

		let rgItemsPassingFilter = GHomepage.FilterItemsForDisplay(
			TagData.items, 'sale', 4, 4, { games_already_in_library: false, localized: true, displayed_elsewhere: false, only_current_platform: true, enforce_minimum: false }
		);

		if ( rgItemsPassingFilter.length !== 4 )
			continue;

		let $Ctn = $J( '<div/>', {'class': 'home_discounts_block'} );

		let $TitleCtn = $J('<div/>', { 'class': 'home_title_ctn' } ).append( $J('<div/>', { 'class': 'home_title'}).html( TagData.name ) );
		$TitleCtn.append( $J('<div/>', { 'class': 'home_section_subtitle'} ).text( TagData.recommended ? 'Recommended tag based on what you play' : 'Featured tag' ) )
		$Ctn.append( $TitleCtn );

		let $GamesCtn =  $J('<div/>', { 'class': 'home_discount_games_ctn' } );
		SaleRenderTwoByTwo( $GamesCtn, rgItemsPassingFilter, 'sale_tag_bucket_top' );
		$Ctn.append( $GamesCtn );

		let $SeeMore = $J('<div/>', { 'class': 'see_more_link' } );
		$SeeMore.append( $J('<a/>', {'class': 'btnv6_white_transparent btn_small_tall', 'href': TagData.url } ).html( '<span>' + 'See More' + '</span>' ) );
		$Ctn.append( $SeeMore );

		$Parent.append( $Ctn );
		GDynamicStore.MarkAppDisplayed( rgItemsPassingFilter );
		cTagBlocksShown++;
	}

	// we load with a fixed height to prevent the page from jumping around.  Eliminate that now.
	$Parent.css( { minHeight: '' } );
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
	let url = null
	let appids = null;
	if ( oItem.appid )
	{
		rgItemData = GStoreItemData.rgAppData[ oItem.appid ];
		purchaseAction = 'addToCart( %subid% )'.replace( '%subid%', rgItemData.pricing_subid );
		itemID = oItem.appid;
		url = GStoreItemData.GetAppURL( itemID, 'sale_hero' );
		appids = itemID;
	}
	else if ( oItem.bundleid )
	{
		rgItemData = GStoreItemData.rgBundleData[ oItem.bundleid ];
		purchaseAction = 'addBundleToCart( %bundleid% )'.replace( '%bundleid%', oItem.bundleid );
		itemID = oItem.bundleid;
		url = GStoreItemData.GetBundleURL(  itemID, 'sale_hero' );
		if ( rgItemData.appids )
			appids = rgItemData.appids.join( "," );
	}
	else if ( oItem.packageid )
	{
		rgItemData = GStoreItemData.rgPackageData[ oItem.packageid ];
		purchaseAction = 'addToCart( %subid% )'.replace( '%subid%', oItem.packageid );
		itemID = oItem.packageid;
		url = GStoreItemData.GetPackageURL(  itemID, 'sale_hero' );
		if ( rgItemData.appids )
			appids = rgItemData.appids.join( "," );
	}

	if ( !rgItemData )
		return;

	var $Cap = $J( '<div/>', {'class': 'hero_capsule', 'data-ds-appid': appids, 'data-panel': '{"clickOnActivate":"firstChild","onOptionsActionDescription":"Add to Cart","onOptionsButton":"%onOptionsButton%","flow-children":"column"}'.replace( '%onOptionsButton%', purchaseAction ) } );
	$Cap.append( $J('<a/>', {'class': 'hero_click_overlay', 'href': url, 'aria-label': rgItemData.name } ) );
	$Cap.append( $J('<img/>', {'class': 'hero_capsule_img', 'alt': rgItemData.name, 'style': 'max-height: 450px', src: 'https://store.fastly.steamstatic.com/public/images/v6/home/hero_placeholder_374x448.gif', 'data-image-url': rgItemData[ 'hero_capsule' ] ?? rgItemData[ 'main_capsule' ] } ) );

	if ( rgItemData.has_live_broadcast )
	{
		$J('<div/>', {'class': 'broadcast_live_stream_icon', 'style': 'z-index:unset' } ).append( 'Live')
	}

	var Screenshots = $J( '<div/>', {'class': 'hover_screenshots' } );
	var VideoCtn = $J( '<div/>', {'class': 'hover_video_container hero_screenshot_load', 'data-background': 'url(' + (  rgItemData.screenshots && rgItemData.screenshots.length > 0 ? GetScreenshotURL( rgItemData.screenshots[0].appid, rgItemData.screenshots[0].filename, '.600x338' ) : rgItemData.main_capsule ) + ')' } );

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
		var $elReviewData = $J('<div>', {'class': 'hero_stat', "data-tooltip-html": reviewSummary['sReviewScoreTooltip'] } );
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
	AddToCartCtn.append( $J( '<button/>', {'class': 'btn_green_steamui btn_medium', } ).click( function( e ){ eval( purchaseAction ); } ).append( $J( '<span/>' ).text( 'Add to Cart' )  ) );
	HeroData.append( AddToCartCtn );

	$Cap.append( HeroData );

	$Cap.append( $J( rgItemData.discount_block ).addClass( 'discount_block_inline hero_discount' ) );

	return $Cap;
}

function HomeSaleFilterHeroes( $Parent, rgHeroItems )
{
	if ( !rgHeroItems.length )
		return;

	var Settings = { games_already_in_library: false, localized: true, only_current_platform: true, enforce_minimum: true };

	var $HeroItemCtn = $Parent.find('.carousel_items' );

	
	let rgHeros = GHomepage.FilterItemsForDisplay( rgHeroItems, 'home', 3, 42, Settings );
	let rgPrioritizedHeros = SortItemListByPriorityList( rgHeros, 'tier1' );

	
	GDynamicStore.MarkItemsAsDisplayed( rgPrioritizedHeros.slice( 0, 3 ) );

	// generate carousel based on sorted and filtered hero capsules
	GHomepage.FillPagedCapsuleCarousel( rgPrioritizedHeros, $Parent.find('.carousel_container'), function( oItem, strFeature, rgOptions ) { return fnRenderHeroCapsule( oItem ); }, 'sale-hero', 3 );

	$HeroItemCtn.find('.hero_capsule:not(.hidden)').children('a').each( function() {
		ModifyLinkSNR( $J(this), function( snr ) { return GStoreItemData.rgNavParams['sale_heroes_priority'] } );
	});

	$J('.hero_capsule').on( 'mouseenter vgp_onfocus', function() {
		if ( window.UseTouchFriendlyMode() && !window.UseTabletScreenMode() )
			return;

		$J(this).find('.hero_screenshot_load').each( function() { $J(this).css( 'backgroundImage', $J(this).data('background') ); } );
	} );

	$J('.hero_capsule:not(.valveindex)').on( 'mouseenter vgp_onfocus', function() {
		if ( window.UseTouchFriendlyMode() && !window.UseTabletScreenMode() )
			return;

		if ( $J(this).find('video.hero_video').length )
			$J(this).find('video.hero_video')[0].play();
	} );

	$J('.hero_capsule:not(.valveindex)').on( 'mouseleave vgp_onblur', function() {
		if ( window.UseTouchFriendlyMode() && !window.UseTabletScreenMode() )
			return;

		if ( $J(this).find('video.hero_video').length )
			$J(this).find('video.hero_video')[0].pause();
	} );

	$Parent.show();
	$Parent.css('minHeight', '' );
}

function HomeSaleSteamAwardWinners( $Parent, rgSteamAwardWinners, rgSteamAwardDefs )
{
	const rgSteamAwardWinnerFiltered = GHomepage.FilterItemsForDisplay( rgSteamAwardWinners, 'home', 0, 11, { localized: false, displayed_elsewhere: false, only_current_platform: false, virtual_reality: true } );
	GDynamicStore.MarkAppDisplayed( rgSteamAwardWinnerFiltered );

	if ( !rgSteamAwardWinnerFiltered.length )
	{
		$Parent.hide();
		return;
	}

	
	const mapFilteredAppIDs = new Map();
	for( let i = 0; i < rgSteamAwardWinnerFiltered.length; i++ )
	{
		const item = rgSteamAwardWinnerFiltered[i];
		mapFilteredAppIDs.set( item.appid, true );
	}

	let $WinnerCapsules = $Parent.find('.winner_grid' );

	rgSteamAwardDefs.forEach( function ( def, i )  {
		if ( !def.winner_appid )
			return;

		if ( !mapFilteredAppIDs.has( def.winner_appid ) )
			return;

		let params = { 'class': 'winner_ctn' };
		const rgItemData = GStoreItemData.GetCapParams( 'sale_steamawards', def.winner_appid, null, null, params );
		if ( !rgItemData )
			return;

		let purchaseAction = 'addToCart( %subid% )'.replace( '%subid%', rgItemData.pricing_subid );
		let $Cap = $J( '<div/>', {'class': 'winner_ctn', 'data-panel': '{"clickOnActivate":"firstChild","onOptionsActionDescription":"Add to Cart","onOptionsButton":"%onOptionsButton%","flow-children":"column"}'.replace( '%onOptionsButton%', purchaseAction ) } );
		$Cap.append( $J('<a/>', {'class': 'hero_click_overlay', 'href': params['href'], 'aria-label': rgItemData.name } ) );
		$Cap.append( $J('<div/>', {'class': 'category_background', 'style': 'background-image: url( \'https://cdn.fastly.steamstatic.com/store/promo/steamawards2024/backgrounds/' + def.internal_name +'.jpg\');' } ) );

		let $Content = $J('<div/>', {'class': 'category_content' } );
		$Content.append( $J('<div/>', {'class': 'category_title' } ).append( def.localization.title_linebreak.replace( '<1></1>', '<br/>' ).replace( '<2></2>', '<br/>' ) ) );

		let $Images = $J('<div/>', {'class': 'game_capsule' } );
		$Images.append( $J('<img/>', {'src': rgItemData.hero_capsule } ) );
		$Images.append( $J('<img/>', {'src': rgItemData.main_capsule } ) );

		$Content.append( $Images );
		$Cap.append( $Content );

		$Cap.append( $J( rgItemData.discount_block ).addClass( 'discount_block_inline' ) );

		$WinnerCapsules.append( $Cap );
	} );
}

function HomeRenderSpecialDealsCarousel( rgSpecialDealItems )
{
	if ( !rgSpecialDealItems )
		return;

	let $SpecialDealsCarousel = $J( '#featured_special_deals' );

	if ( !$SpecialDealsCarousel || !$SpecialDealsCarousel.length )
		return;

	let rgSpecialDeals = GHomepage.FilterItemsForDisplay(
		rgSpecialDealItems, 'home', 3, 24, { games_already_in_library: true, localized: true, displayed_elsewhere: false, only_current_platform: true, enforce_minimum: false }
	);

	if ( rgSpecialDeals.length >= 3 )
	{
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
			return SaleCap( oItem, strFeature, 'discount_block_inline', false, false, true );
		}, 'sale_deep_discounts', 3 );

			GDynamicStore.MarkAppDisplayed( rgSpecialDeals );
	}
}

function HomeRenderFeaturedItems( rgDisplayLists, rgTagData, rgFranchiseData, rgSteamAwardDefs )
{
	var k_nTier1ItemsMin = 16;
	var k_nTier1ItemsMax = 16;

	var k_nTier2ItemsMin = 16;
	var k_nTier2ItemsMax = 16;

	if ( !rgDisplayLists.sale_tier1 )
		return;

	if ( rgDisplayLists.steam_award_winners && rgSteamAwardDefs )
	{
		HomeSaleSteamAwardWinners( $J( '.home_steamawards_ctn' ), rgDisplayLists.steam_award_winners, rgSteamAwardDefs );
	}
	else
	{
		HomeSaleFilterHeroes( $J('.hero_parent_ctn'), rgDisplayLists.heros );
	}

	HomeRenderSpecialDealsCarousel( rgDisplayLists.special_deals );

	// process tag sections first, pulling in featured items into the tag blocks we display
	var $TagBlock = $J('#sale_tag_categories');
	if ( $TagBlock.length )
	{
		new CScrollOffsetWatcher( $TagBlock, function() {
			let rgUserTagData = ( GHomepage.oCustomUserDisplayLists && GHomepage.oCustomUserDisplayLists.rgAccountTagDataJSON ) || [];

			GenerateTagBlocks( $TagBlock, rgUserTagData.concat( rgTagData ), rgDisplayLists.sale_tier1, rgDisplayLists.sale_tier2 );
		});
	}

	let rgPriorityTier1Items = SortItemListByPriorityList( rgDisplayLists.sale_tier1.slice( 0, 50 ), 'tier1' );
	var rgTier1 = GHomepage.FilterItemsForDisplay(
		rgPriorityTier1Items, 'home', k_nTier1ItemsMin, k_nTier1ItemsMax, { games_already_in_library: false, localized: true, displayed_elsewhere: false, only_current_platform: true, enforce_minimum: true }
	);

	GDynamicStore.MarkAppDisplayed( rgTier1 );

	let rgPriorityTier2Items = SortItemListByPriorityList( rgDisplayLists.sale_tier2.slice( 0, 50 ), 'tier2' );
	var rgTier2 = GHomepage.FilterItemsForDisplay(
		rgPriorityTier2Items, 'home', k_nTier2ItemsMin, k_nTier2ItemsMax, { games_already_in_library: false, localized: true, displayed_elsewhere: false, only_current_platform: true, enforce_minimum: true }
	);

	GDynamicStore.MarkAppDisplayed( rgTier2 );

	HomeSaleBlock( rgTier1, $J('#tier1_target' ), 'sale_dailydeals_priority' );

	var $Tier2 = $J('#tier2_target' );
	new CScrollOffsetWatcher( $Tier2, function() { HomeSaleBlock( rgTier2, $Tier2, 'sale_dailydeals_t2_priority'  ); } );

	$J( '.home_morefeatured_ctn' ).show();

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
		rgRemainingItems = SaleRow( rgRemainingItems, $Parent, 4, strFeatureContext, SaleCap );
		bFourRow = !bFourRow;
	}
	GHomepage.BindSaleCapAutoSizeEvents( $Parent );
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

function SaleCap( item, strFeatureContext, strDiscountClass, bUseSmallCap, bPreferHeaderImg, bDisableAutosizer )
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
	if ( bDisableAutosizer )
	{
		$Img = $J('<img/>', {'class': 'sale_capsule_image', 'src': rgItemData['main_capsule']});
	}
	else
	{
		if ( bUseSmallCap )
		{
			$Img = $J('<img/>', {'class': 'sale_capsule_image', 'src': rgItemData['small_capsule']});
		}
		else
		{
			if ( bPreferHeaderImg && typeof rgItemData['header'] !== 'undefined' )
			{
				$Img = $J('<img/>', {
					'class': 'sale_capsule_image autosize',
					'src': 'https://store.fastly.steamstatic.com/public/images/v6/home/header_placeholder_460x215.gif'
				});
				$Img.data('src-header', rgItemData['header']);
			} else
			{
				$Img = $J('<img/>', {
					'class': 'sale_capsule_image autosize',
					'src': 'https://store.fastly.steamstatic.com/public/images/v6/home/maincap_placeholder_616x353.gif'
				});
				$Img.data('src-maincap', rgItemData['main_capsule']);
			}

			$Img.data('src-smallcap', rgItemData['small_capsule']);
		}
	}

	$Img.attr( 'alt', rgItemData['name'] );

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

	if ( window.UseTouchFriendlyMode() && !window.UseTabletScreenMode() )
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

function SaleTagBlock( $Parent, rgPersonalizedTagData )
{
	var rgTagData = rgPersonalizedTagData.TagData;
	var rgItemsPassingFilter = rgPersonalizedTagData.rgItemsPassingFilter;

	if ( rgItemsPassingFilter.length <= 0 )
	{
		$Parent.hide();
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

	TryPopulateSaleItems( rgItemsPassingFilter, rgTagData.items, 6, 6 );

	var $Ctn = $J( '<div/>', {'class': 'home_category_ctn'} );

	var $TitleCtn = $J('<div/>', { 'class': 'home_category_title_ctn' } ).append( $J('<div/>', { 'class': 'home_category_title'}).html( title ) );
	var $FocusCtn = $J('<div/>', { 'class': 'home_category_focus_ctn'} );

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
			$Ctn.append( $J('<div/>', { 'class': 'home_category_title_ctn' } ).
				append( $J('<div/>', { 'class': 'home_category_title'}).html( rgTagData.name ) ).
				append( $J('<div/>', { 'class': 'home_category_subtitle'}).html( rgTagData.subtitle ) ) );
		}
		else
		{
			$Ctn.append( $J('<div/>', { 'class': 'home_category_title_ctn' } ).
				append( $J('<div/>', { 'class': 'home_tag_category_title'}).html( rgTagData.name ) ) );
		}
	}

	GHomepage.BindSaleCapAutoSizeEvents( $FocusCtn );

	var $Games = $J('<div/>', {'class': 'home_category_games_ctn' } );
	var $Row = $J('<div/>', {'class': 'salerow salerow3 multiline' } );

	if ( "feature_name" in rgTagData )
	    $FeatureName = rgTagData.feature_name;
	else
	    $FeatureName = 'sale_tag_bucket';

	rgItemsPassingFilter.splice( rgItemsPassingFilter.length - ( rgItemsPassingFilter.length % 3 ) );
	for ( var iItem = 0; iItem < rgItemsPassingFilter.length; iItem++ )
		$Row.append( SaleCap( rgItemsPassingFilter[iItem], $FeatureName, 'discount_block_inline' ) );

	$Games.append( $Row );

	GHomepage.BindSaleCapAutoSizeEvents( $Games );

	$Ctn.append( $Games );

	if ( $FeatureName === "sale_tag_bucket" )
	    $Ctn.append( $J('<a/>', {'class': 'see_more_link btnv6_white_transparent btn_small_tall', 'href': rgTagData.url } ).html( '<span>' + 'See More' + '</span>' ) );
	else if ( $FeatureName == "sale_recommended_by_steam_labs" )
		$Ctn.append( $J('<a/>', {'class': 'see_more_link btnv6_white_transparent btn_small_tall', 'href': rgTagData.url } ).html( '<span>' + 'Discover more in the Interactive Recommender' + '</span>' ) );

	$Parent.append( $Ctn ).css('min-height','');
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

		if ( iPageStart === rgFranchiseData.length )
			iPageStart = 0;

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
        $Cap.append( $J('<img/>', {'class': 'franchise_placeholder', 'src': 'https://cdn.fastly.steamstatic.com/store/promo/winter2019/franchise_placeholder.gif' } ) );
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

function SaleRenderUnder10Section( $Parent, rgUnder10 )
{
	var rgUnder10Filtered = GHomepage.FilterItemsForDisplay(
		rgUnder10, 'sale', 4, 8, { games_already_in_library: false, localized: true, displayed_elsewhere: false, only_current_platform: true, has_discount: true }
	);

	TryPopulateSaleItems( rgUnder10Filtered, rgUnder10, 4, 8 );

	let $Under10Ctn = $J('#10off_tier' );

	rgUnder10Filtered.splice( rgUnder10Filtered.length - ( rgUnder10Filtered.length % 4 ) );
	if ( $Under10Ctn.length && rgUnder10Filtered.length >= 4 )
	{
		let rgCaps = [];
		for( let i = 0; i < rgUnder10Filtered.length; i++ )
		{
			rgCaps.push( SaleCap( rgUnder10Filtered[i], 'under10', 'discount_block_inline' ) );
		}
		$Under10Ctn.append( rgCaps );
		GDynamicStore.MarkAppDisplayed( rgUnder10Filtered );
		BindSaleCapAutoSizeEvents( $Under10Ctn );
		$Parent.css('min-height', '' );
	}
	else
	{
		$Parent.hide();
	}
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

function ToggleAltHeader()
{
	if ( g_rgAltBackgroundSrc )
	{
		if ( !V_GetCookie( 'enable_alt_sale_header' ) )
		{
			V_SetCookie('enable_alt_sale_header', 1, 14 );

			if ( window.innerWidth <= 500 )
			{
				$J('.page_background_holder').css('background-image', 'url(' + g_rgAltBackgroundSrc.strPageBackgroundMobileURL + ')');
			}
			else
			{
				$J('.fullscreen-bg__video').attr('src', g_rgAltBackgroundSrc.strPageBackgroundWebM);
				$J('.fullscreen-bg__video').attr('poster', g_rgAltBackgroundSrc.strPageBackgroundURL);
				$J('.page_background_holder').css('background-image', 'url(' + g_rgAltBackgroundSrc.strPageBackgroundURL + ')');
				$J('.fullscreen-bg__video').get( 0 ).play();
			}

			$J( '.page_background_overlay' ).addClass( 'alternate' );
		}
		else
		{
			V_SetCookie('enable_alt_sale_header', 0, -1 );
			location.reload();
		}
	}
}

