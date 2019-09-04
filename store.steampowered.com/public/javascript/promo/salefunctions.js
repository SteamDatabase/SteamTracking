
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

function HomeRenderFeaturedItems( rgDisplayLists, rgTagData, rgFranchiseData )
{
	// process tag sections first, pulling in featured items into the tag blocks we display
	var rgPersonalizedTagData = GenerateTagBlocks( rgTagData, rgDisplayLists.sale_tier1, rgDisplayLists.sale_tier2 );

	var k_nTier1ItemsMin = 7;
	var k_nTier1ItemsMax = 11;

	var k_nTier2ItemsMin = 7;
	var k_nTier2ItemsMax = 11;

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

	var bFourRow = true;
	while( rgRemainingItems.length )
	{
		if ( rgRemainingItems.length < 4 || rgRemainingItems.length == 6 || rgRemainingItems.length == 9 )
			bFourRow = false;
		else if ( rgRemainingItems.length == 4 )
			bFourRow = true;
		rgRemainingItems = SaleRow( rgRemainingItems, $Parent, bFourRow ? 4 : 3, 'sale_dailydeals', SaleCapWithMicroTrailer );
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

function SaleCapWithMicroTrailer( item, strFeatureContext, strDiscountClass )
{
	var $Cap = SaleCap( item, strFeatureContext, strDiscountClass );

	if ( item.appid && g_rgAppsWithMicroTrailers[ item.appid ] )
	{
		$Cap.addClass( 'with_microtrailer' );
		$Cap.data('hoverDisableScreenshots', true );
		var $ImgCtn = $Cap.children('.sale_capsule_image_ctn');
		$Cap.one( 'mouseenter', function()
		{
			var $Video = $J('<video/>', {'class': 'sale_capsule_video', loop: true, preload: 'none', muted: 'muted'})
				.append( $J('<source/>', { src: 'https://steamcdn-a.akamaihd.net/store/labs/microtrailers/video/summer_sale_2019/single_summer_' + item.appid + '.webm' }));
			$ImgCtn.append( $Video );

			var playPromise;
			var fnPlay = function() {
				$Cap.addClass( 'with_microtrailer' );
				playPromise = $Video[0].play();
				if ( playPromise )
				{
					playPromise.catch( function( e ) {
						$Cap.removeClass( 'with_microtrailer' );
					} );
				}
			};
			var fnPause = function() {
				if ( playPromise )
					playPromise.then( function() {$Video[0].pause() } );
				else
					$Video[0].pause();
			};

			$Cap.hover( fnPlay, fnPause );

			window.setTimeout( fnPlay, 1 );
		});
	}

	return $Cap;
}

function SaleCap( item, strFeatureContext, strDiscountClass, bUseSmallCap )
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
		$Img = $J( '<img/>', {'class': 'sale_capsule_image autosize', 'src': 'https://steamstore-a.akamaihd.net/public/images/v6/home/maincap_placeholder_616x353.gif' } );
		$Img.data('src-maincap', rgItemData['main_capsule'] );
		$Img.data('src-smallcap', rgItemData['small_capsule'] );
	}

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
		$Row.append( SaleCapWithMicroTrailer( rgItemsPassingFilter[iItem], 'sale_tag_bucket', 'discount_block_inline' ) );

	$Games.append( $Row );

	BindSaleCapAutoSizeEvents( $Games );

	$Ctn.append( $Games );

	$Ctn.append( $J('<a/>', {'class': 'see_more_link', 'href': rgTagData.url } ).text( 'See more...' ) );

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

		$NextTarget.fadeOut( 'fast' );

		var nHeight = $ContentTarget.height();
		$ContentTarget.addClass( 'transition' ).css('height', nHeight + 'px');
		$Thumbs.children().removeClass('focus');
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
	$NextTarget.add( $Parent.children('.arrow.right') ).click( function() {
		if ( bInTransition )
			return;

		$PrevTarget.fadeOut( 'fast' );

		var nHeight = $ContentTarget.height();
		$ContentTarget.addClass( 'transition' ).css('height', nHeight + 'px');
		$Thumbs.children().removeClass('focus');
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

var g_rgAppsWithMicroTrailers =
	{784150:1, 553310:1, 606230:1, 244450:1, 487000:1, 8870:1, 49520:1, 220200:1,
	360430:1, 841370:1, 289070:1, 695290:1, 817130:1, 268500:1, 323190:1,
	606150:1, 282070:1, 384190:1, 374040:1, 239030:1, 653530:1, 386940:1,
	531510:1, 476600:1, 731490:1, 814380:1, 761620:1, 774351:1, 966330:1,
	501300:1, 801630:1, 544390:1, 718560:1, 515180:1, 597220:1, 648800:1,
	387990:1, 313120:1, 381210:1, 555440:1, 994280:1, 240720:1, 286160:1,
	403640:1, 379720:1, 377160:1, 480490:1, 548570:1, 306130:1, 489830:1,
	612880:1, 350640:1, 621830:1, 840010:1, 578080:1, 107410:1, 221100:1,
	285900:1, 616560:1, 1032430:1, 424030:1, 367500:1, 761600:1, 787480:1,
	310950:1, 601150:1, 742300:1, 582010:1, 587620:1, 883710:1, 250680:1,
	292030:1, 211820:1, 607050:1, 368070:1, 505460:1, 451340:1, 656240:1,
	690790:1, 737800:1, 548430:1, 605740:1, 677120:1, 219990:1, 525510:1,
	777770:1, 815370:1, 594650:1, 352720:1, 934780:1, 527230:1, 477160:1,
	638000:1, 410320:1, 418240:1, 559650:1, 629730:1, 368340:1, 456670:1,
	744060:1, 363890:1, 447150:1, 311690:1, 578620:1, 683320:1, 460950:1,
	513710:1, 764790:1, 622720:1, 32470:1, 376210:1, 682530:1, 718590:1, 367450:1,
	410900:1, 715560:1, 962730:1, 392160:1, 337000:1, 517630:1, 532210:1,
	750920:1, 307690:1, 239160:1, 242760:1, 299740:1, 413150:1, 860890:1,
	1029630:1, 518790:1, 596970:1, 704270:1, 552500:1, 752590:1, 573100:1,
	399810:1, 787860:1, 819500:1, 581320:1, 675010:1, 298900:1, 287630:1,
	378540:1, 427290:1, 251060:1, 282140:1, 359320:1, 648350:1, 493340:1,
	613100:1, 440900:1, 760060:1, 223850:1, 559100:1, 446800:1, 503560:1, 4000:1,
	252490:1, 632360:1, 320240:1, 230290:1, 453090:1, 573090:1, 239820:1,
	1046030:1, 586140:1, 434650:1, 275850:1, 736260:1, 688130:1, 510500:1,
	305620:1, 516110:1, 253230:1, 718670:1, 751780:1, 405710:1, 445980:1,
	632350:1, 228280:1, 704450:1, 108600:1, 774201:1, 774461:1, 595690:1,
	644930:1, 582660:1, 493900:1, 503940:1, 671440:1, 373930:1, 492720:1,
	673880:1, 326460:1, 244850:1, 736850:1, 322330:1, 457140:1, 383150:1,
	287390:1, 794260:1, 640820:1, 206420:1, 838380:1, 886820:1, 485510:1,
	628890:1, 363150:1, 831560:1, 939700:1, 287700:1, 770240:1, 838350:1,
	805550:1, 824270:1, 269950:1, 435150:1, 481510:1, 290340:1, 690830:1,
	991780:1, 569480:1, 914260:1, 233860:1, 555160:1, 552100:1, 598330:1,
	633460:1, 858810:1, 552620:1, 504230:1, 432350:1, 646570:1, 758190:1,
	221380:1, 266840:1, 847370:1, 613880:1, 882020:1, 759740:1, 673950:1,
	609320:1, 433340:1, 588650:1, 502500:1, 374320:1, 678950:1, 899440:1,
	816020:1, 848350:1, 424840:1, 349040:1, 589360:1, 755500:1, 544750:1,
	798510:1, 626690:1, 738540:1, 389730:1, 246620:1, 400940:1, 519860:1,
	250900:1, 960090:1, 414340:1, 803600:1, 889600:1, 619150:1, 494430:1,
	844590:1, 736220:1, 774861:1, 790740:1, 831980:1, 365360:1, 1055090:1,
	448280:1, 868360:1, 637090:1, 255710:1, 203770:1, 236850:1, 394360:1,
	859580:1, 233450:1, 281990:1, 464920:1, 362960:1, 571740:1, 394690:1,
	645630:1, 704850:1, 494840:1, 269190:1, 846470:1, 591370:1, 568220:1,
	252950:1, 599080:1, 253250:1, 314160:1, 530070:1, 24010:1, 701160:1, 105600:1,
	312660:1, 312670:1, 301640:1, 880940:1, 414700:1, 555220:1, 262060:1,
	499660:1, 656700:1, 546430:1, 396750:1, 271590:1, 391540:1, 450540:1,
	594330:1, 949290:1, 270880:1, 227300:1, 460790:1, 893180:1, 231430:1,
	289130:1, 392110:1, 872790:1, 415200:1, 546050:1, 809890:1, 584400:1,
	594570:1, 535930:1, 790820:1, 834530:1, 736190:1, 967050:1, 242920:1,
	466560:1, 980300:1, 998940:1, 544610:1, 489630:1, 346110:1, 834910:1,
	840800:1, 334540:1, 567640:1, 564230:1, 819030:1, 819020:1, 613830:1,
	637650:1, 714370:1, 552700:1, 718650:1, 218620:1, 226860:1, 204880:1,
	271260:1, 341800:1, 636480:1, 527430:1, 382310:1, 383840:1, 212680:1,
	590380:1, 490920:1, 617830:1, 813630:1, 361420:1, 48700:1, 942970:1, 367520:1,
	431240:1, 666140:1, 728880:1, 641990:1, 327030:1, 239140:1, 439340:1,
	285920:1, 674020:1, 251570:1, 621060:1, 541210:1, 378360:1, 449960:1,
	853550:1, 743450:1, 606280:1, 411300:1, 311290:1, 311260:1, 228380:1,
	599140:1, 572430:1, 929010:1, 232090:1, 418460:1, 629760:1, 812140:1,
	939960:1, 304390:1, 221680:1, 647590:1, 460920:1, 646910:1, 359550:1,
	641080:1, 447040:1, 264710:1, 851100:1, 550:1, 620:1, 560130:1, 342180:1,
	951440:1, 992640:1, 379430:1, 208650:1, 863550:1, 627270:1, 647830:1,
	356190:1, 976310:1, 963930:1, 674940:1, 508440:1, 396900:1, 877200:1,
	622220:1, 955050:1, 230410:1, 790850:1, 779340:1, 475150:1, 512900:1,
	572410:1, 690530:1, 637670:1, 383980:1, 593600:1, 557340:1, 394510:1,
	438740:1, 501080:1, 829590:1, 346010:1, 825630:1, 459220:1, 460810:1
	};

