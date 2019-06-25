
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

function GenerateTagBlocks( rgTagData, rgTier1, rgTier2 )
{
	var rgTagBlocks = [];
	var cTagBlocksToShow = 2;
	var rgTagDataShown = [];

	var rgTagDataWithItems = rgTagData.filter( function ( TagData ) { return TagData.items && TagData.items.length; } );

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
		rgTagBlocks.push( TagBlock );
		rgTagDataShown.push( TagBlock.TagData );
		GDynamicStore.MarkAppDisplayed( TagBlock.rgItemsPassingFilter );
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

function HomeRenderFeaturedItems( rgDisplayLists, rgTagData, rgFranchiseData )
{
	// process tag sections first, pulling in featured items into the tag blocks we display
	var rgPersonalizedTagData = GenerateTagBlocks( rgTagData, rgDisplayLists.sale_tier1, rgDisplayLists.sale_tier2 );

	var k_nTier1ItemsMin = 3;
	var k_nTier1ItemsMax = 7;

	var k_nTier2ItemsMin = 3;
	var k_nTier2ItemsMax = 7;

	var rgTier1 = GHomepage.FilterItemsForDisplay(
		rgDisplayLists.sale_tier1, 'home', k_nTier1ItemsMin, k_nTier1ItemsMax, { games_already_in_library: false, localized: true, displayed_elsewhere: false, only_current_platform: true }
	);

	var rgTier2 = GHomepage.FilterItemsForDisplay(
		rgDisplayLists.sale_tier2, 'home', k_nTier2ItemsMin, k_nTier2ItemsMax, { games_already_in_library: false, localized: true, displayed_elsewhere: false, only_current_platform: true }
	);

	var rgItemsPromotedToTier1 = [];
	if ( rgTier1.length < k_nTier1ItemsMin )
	{
		// promote capsules until we're full
		while ( rgTier2.length && rgTier1.length < k_nTier1ItemsMin )
		{
			var item = rgTier2.shift();
			rgItemsPromotedToTier1.push( item );
			rgTier1.push( item );
		}

		TryPopulateSaleItems( rgTier1, rgDisplayLists.sale_tier1, k_nTier1ItemsMin, k_nTier1ItemsMax );
	}

	if ( rgTier2.length < k_nTier2ItemsMin )
	{
		var rgRemainingDisplayList = rgDisplayLists.sale_tier2.slice();
		for ( var i = 0; i < rgItemsPromotedToTier1.length; i++ )
		{
			for ( var j = 0; j < rgRemainingDisplayList.length; j++ )
			{
				if ( BIsSameItem( rgItemsPromotedToTier1[i], rgRemainingDisplayList[j] ) )
				{
					rgRemainingDisplayList.splice( j, 1 );
					break;
				}
			}
		}

		TryPopulateSaleItems( rgTier2, rgRemainingDisplayList, k_nTier2ItemsMin, k_nTier2ItemsMax );
	}


	GDynamicStore.MarkAppDisplayed( rgTier1 );
	GDynamicStore.MarkAppDisplayed( rgTier2 );

	HomeSaleBlock( rgTier1, $J('#tier1_target' ) );

	var $Tier2 = $J('#tier2_target' );
	new CScrollOffsetWatcher( $Tier2, function() { HomeSaleBlock( rgTier2,$Tier2  ); } );

	var $TagBlock = $J('#sale_tag_categories')
	new CScrollOffsetWatcher( $TagBlock, function() {
		for ( var iTag = 0; iTag < rgPersonalizedTagData.length; iTag++ )
		{
			SaleTagBlock( $TagBlock, rgPersonalizedTagData[iTag] );
		}
	});

	var $FranchiseBlock = $J('#franchise_target' );
	new CScrollOffsetWatcher( $FranchiseBlock, function() {
		SaleFranchiseBlock( $FranchiseBlock, rgFranchiseData );
	});

	var $DiscountsArea = $J('#sale_discounts_area');
	new CScrollOffsetWatcher( $DiscountsArea, function() {
		SaleRenderDiscountsArea( rgDisplayLists.under10, rgDisplayLists.sale_deals );
		$DiscountsArea.css('height', '' );
	} );

	// NOTE: If we are already using home.js, then we don't need this. Found we were doubling up the streams
	// GSteamBroadcasts.Init( GHomepage.FilterItemsForDisplay );
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

function HomeSaleBlock( rgItems, $Parent )
{
	var rgRemainingItems = rgItems;

	while( rgRemainingItems.length )
	{
		rgRemainingItems = SaleRow( rgRemainingItems, $Parent, rgRemainingItems.length >= 7 ? 4 : 3, 'sale_dailydeals' );
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

function SaleRow( rgItems, $Parent, nItems, strFeatureContext )
{
	var rgItemsThisRow = rgItems.slice( 0, nItems );

	if ( rgItemsThisRow.length <= 3 )
	{
		var $Row = $J('<div/>', {'class': 'salerow salerow3' } );

		$Row.append(
			rgItemsThisRow[0] && SaleCap( rgItemsThisRow[0], strFeatureContext, 'discount_block_inline' ),
			rgItemsThisRow[1] && SaleCap( rgItemsThisRow[1], strFeatureContext, 'discount_block_inline' ),
			rgItemsThisRow[2] && SaleCap( rgItemsThisRow[2], strFeatureContext, 'discount_block_inline' )
		);

		$Parent.append( $Row );
	}
	else
	{
		var $Row = $J('<div/>', {'class': 'salerow salerow4' } );

		$Row.append(
			SaleCap( rgItemsThisRow[0], strFeatureContext, 'discount_block_inline' ),
			SaleCap( rgItemsThisRow[1], strFeatureContext, 'discount_block_inline' ),
			SaleCap( rgItemsThisRow[2], strFeatureContext, 'discount_block_inline' ),
			SaleCap( rgItemsThisRow[3], strFeatureContext, 'discount_block_inline' )
		);

		$Parent.append( $Row );
	}

	return rgItems.slice( rgItemsThisRow.length );
}

function SaleCap( item, strFeatureContext, strDiscountClass )
{
	var params = { 'class': 'sale_capsule' };
	
	if( item && item.feature && item.feature.length > 0 )
	{
		strFeatureContext = item.feature;		
	}
	var rgItemData = GStoreItemData.GetCapParamsForItem( strFeatureContext, item, params );

	var $CapCtn = $J('<a/>', params );
	GStoreItemData.BindHoverEventsForItem( $CapCtn, item );

	var $Img = $J( '<img/>', {'class': 'sale_capsule_image autosize', 'src': 'https://steamstore-a.akamaihd.net/public/images/v6/home/maincap_placeholder_616x353.gif' } );
	$Img.data('src-maincap', rgItemData['main_capsule'] );
	$Img.data('src-smallcap', rgItemData['small_capsule'] );

	$CapCtn.append( $J('<div/>', {'class': 'sale_capsule_image_ctn' } ).append( $J('<div/>', {'class': 'sale_capsule_image_hover'} ), $Img ) );
	$CapCtn.append( rgItemData.discount_block ? $J(rgItemData.discount_block).addClass( strDiscountClass ) : '' );

	var rgAppInfo = GStoreItemData.rgAppData[ item.appid ];
	if ( rgAppInfo && rgAppInfo.live_broadcast )
	{
		$CapCtn.append( 
					$J('<div/>', {'class': 'broadcast_live_stream_icon' } ).append( 'Live')
		);
		
	}

	return $CapCtn;
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

function SaleTagBackground( colors )
{
	var hex = colors[0];
	var r = Number.parseInt( hex[1] + hex[2], 16 );
	var g = Number.parseInt( hex[3] + hex[4], 16 );
	var b = Number.parseInt( hex[5] + hex[6], 16 );
	return 'background: rgba( ' + r + ', ' + g + ', ' + b + ', 0.3 );';
}

function SaleTagBlock( $Parent, rgPersonalizedTagData )
{
	var rgTagData = rgPersonalizedTagData.TagData;
	var rgItemsPassingFilter = rgPersonalizedTagData.rgItemsPassingFilter;

	TryPopulateSaleItems( rgItemsPassingFilter, rgTagData.items, 6, 6 );

	var colors = rgTagData.colors;
	// id, colors, name, items
	var $Ctn = $J( '<div/>', {'class': 'home_category_ctn'} );

	$Ctn.append( $J('<div/>', { 'class': 'home_category_title_ctn', style: SaleTagGradient( colors ) } ).append( $J('<div/>', { 'class': 'home_category_title'}).html( rgTagData.name ) ) );

	var $Games = $J('<div/>', {'class': 'home_category_games_ctn', style: SaleTagBackground( colors ) } );

	var $Row = $J('<div/>', {'class': 'salerow salerow3 multiline' } );

	for ( var iItem = 0; iItem < rgItemsPassingFilter.length; iItem++ )
		$Row.append( SaleCap( rgItemsPassingFilter[iItem], 'sale_tag_bucket', 'discount_block_inline' ) );

	$Games.append( $Row );

	BindSaleCapAutoSizeEvents( $Games );

	$Ctn.append( $Games );

	$Ctn.append( $J('<a/>', {'class': 'see_more_link', 'href': rgTagData.url } ).text( 'See more...' ) );

	$Parent.append( $Ctn ).css('height','');
	GDynamicStore.DecorateDynamicItems( $Parent );
}

function SaleFranchiseBlock( $Parent, rgFranchiseData )
{
	var $PrevTarget = $Parent.find( '.franchise_previous' );
	var $ContentTarget = $Parent.find( '.franchise_flex' );
	var $NextTarget = $Parent.find( '.franchise_next' );


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
	}

	var bInTransition = false;
	$PrevTarget.click( function() {
		if ( bInTransition )
			return;

		$NextTarget.fadeOut( 'fast' );

		var nHeight = $ContentTarget.height();
		$ContentTarget.addClass( 'transition' ).css('height', nHeight + 'px');
		for ( var i = iPageStart - 1; i > iPageStart - 4; i-- )
		{
			$ContentTarget.prepend( BuildFranchiseCap( fnGetFranchise( i ) ) );
		}
		$PrevTarget.empty().append( BuildFranchiseCap( fnGetFranchise( iPageStart - 4 ), true ) );
		$PrevTarget.css('right', '199%' ).animate( {right: '99%' }, 600 );

		var rgChildren = $ContentTarget.children();
		$J(rgChildren[5]).animate( {opacity: 0}, 600 );
		$J(rgChildren[4]).animate( {opacity: 0}, 600 );
		$J(rgChildren[3]).animate( {opacity: 0.5}, 600 );


		$ContentTarget.css('left','-100%').animate( {left: '0%'}, 600, function() {
			iPageStart -= 3;
			$ContentTarget.children().detach();
			$ContentTarget.removeClass('transition').css('left', '').css('height','');
			SaleFranchisePageTo( true, false );
			$NextTarget.show();
			$PrevTarget.stop().css('right','');
			bInTransition = false;
		} );
	});
	$NextTarget.click( function() {
		if ( bInTransition )
			return;

		$PrevTarget.fadeOut( 'fast' );

		var nHeight = $ContentTarget.height();
		$ContentTarget.addClass( 'transition' ).css('height', nHeight + 'px');
		var bClicked = true;
		for ( var i = iPageStart + 3; i < iPageStart + 6; i++ )
		{
			var $Cap = BuildFranchiseCap( fnGetFranchise( i ) );
			if ( bClicked )
			{
				$Cap.css( 'opacity', 0.5 ).animate( { opacity: 1.0 }, 600 );
				bClicked = false;
			}
			else
			{
				$Cap.css( 'opacity', 0 ).animate( { opacity: 1.0 }, 600 );
			}
			$ContentTarget.append( $Cap );
		}
		$NextTarget.empty().append( BuildFranchiseCap( fnGetFranchise( iPageStart + 6 ), true ) );
		$NextTarget.css('left', '199%' ).animate( {left: '99%' }, 600 );

		var rgChildren = $ContentTarget.children();
		$J(rgChildren[0]).animate( {opacity: 0}, 600 );
		$J(rgChildren[1]).animate( {opacity: 0}, 600 );
		$J(rgChildren[2]).animate( {opacity: 0.5}, 600 );

		$ContentTarget.animate( {left: '-100%'}, 600, function() {
			iPageStart += 3;
			$ContentTarget.children().detach();
			$ContentTarget.removeClass('transition').css('left', '').css('height','');
			SaleFranchisePageTo()
			$PrevTarget.show();
			$NextTarget.stop().css('left','');
			bInTransition = false;
		} );
	});

	SaleFranchisePageTo();
}

function BuildFranchiseCap( FranchiseData, bAlternate )
{
	var field = bAlternate ? '$CapAlt' : '$Cap';
	if ( !FranchiseData[field] )
	{
		var $Cap = $J( '<div/>', {'class': 'franchise_capsule'} );

		var url = GStoreItemData.AddNavEventParamsToURL( FranchiseData.strSalePageURL, 'sale_franchises', 0 /* depth */ );

		$Cap.append( $J('<a/>', {'class': 'hero_click_overlay', 'href': url } ) );
		$Cap.append( $J('<img/>', {'class': 'franchise_background', 'src': FranchiseData.strBackgroundImageURL } ) );
		$Cap.append( $J( '<div/>', {'class': 'franchise_logo_ctn'} ).append( $J('<img/>', {'class': 'franchise_logo', 'src': FranchiseData.strLogoImageURL } ) ) );

		$Cap.append( $J('<div/>', {'class': 'franchise_discount_tag' } ).text( 'Up to {PCT}% Off'.replace( /\{PCT\}/, FranchiseData.nDiscountMax ) ) );

		if ( !bAlternate )
		{
			var $Games = $J( '<div/>', {'class': 'franchise_games'} );

			$Cap.one( 'mouseenter', function( event ) {
				var rgItems = FranchiseData.rgItemsToFeature.slice();
				if ( rgItems.length > 2 || rgItems.length == 1 )
				{
					var $Row = $J('<div/>', {'class': 'franchise_game single' } );
					$Row.append( SaleCap( rgItems.shift(), 'sale_franchises', 'discount_block_inline' ) );
					$Games.append( $Row );
				}
				if ( rgItems.length == 2 )
				{
					var $Row = $J('<div/>', {'class': 'franchise_game double' } );
					$Row.append( SaleCap( rgItems.shift(), 'sale_franchises', 'discount_block_inline' ) );
					$Row.append( SaleCap( rgItems.shift(), 'sale_franchises', 'discount_block_inline' ) );
					$Games.append( $Row );
				}

				$Games.append( $J('<a/>', {'class': 'franchise_see_all', 'href': url } ).text(
					'See %s more games...'.replace( /%s/, FranchiseData.nItemsTotal - FranchiseData.rgItemsToFeature.length )
				) );

				BindSaleCapAutoSizeEvents( $Games );
				GDynamicStore.DecorateDynamicItems( $Games );
			} );

			$Cap.append( $Games );
		}

		FranchiseData[field] = $Cap;
	}
	return FranchiseData[field].css( 'opacity', '');
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


	GDynamicStore.MarkAppDisplayed( rgDeals );

	SaleRenderTwoByTwo( $J('#75pct_tier' ), rgDealsFiltered, 'sale_deals' );
	SaleRenderTwoByTwo( $J('#10off_tier' ), rgUnder10Filtered, 'under10' );
}

function SaleRenderTwoByTwo( $Container, rgItems, strFeature )
{
	$Container.append(
		rgItems[0] && SaleCap( rgItems[0], strFeature, 'discount_block_inline' ),
		rgItems[1] && SaleCap( rgItems[1], strFeature, 'discount_block_inline' ),
		rgItems[2] && SaleCap( rgItems[2], strFeature, 'discount_block_inline' ),
		rgItems[3] && SaleCap( rgItems[3], strFeature, 'discount_block_inline' )
	);

	GDynamicStore.DecorateDynamicItems( $Container );
	BindSaleCapAutoSizeEvents( $Container );
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
		var rgSwitchToMain = [], rgSwitchToSmall = [];
		$AutosizeImages.each( function() {
			var $Img = $J(this);
			if ( mqSwitchToSmall.matches && $Img.width() <= 176 )
			{
				if ( $Img.data('src-smallcap') != $Img.attr('src') )
					rgSwitchToSmall.push( $Img );
			}
			else
			{
				if ( $Img.data('src-maincap') != $Img.attr('src') )
					rgSwitchToMain.push( $Img );
			}
		});

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

