
var g_bVoteInFlight = false;
function OnVoteClick( voteid, appid )
{
	if ( !g_AccountID )
	{
		// propmt for login
		ShowConfirmDialog( 'The Steam Awards',
			'You need to log in first before you can vote.',
			'Login'
		).done( function() {
				window.location = 'https://store.steampowered.com/login/?redir=SteamAwards%2F';
			});
	}
	else
	{
		if ( g_bVoteInFlight )
			return;

		g_bVoteInFlight = true;
		$J.post(
			'http://store.steampowered.com/salevote',
			{sessionid: g_sessionID, voteid: voteid, appid: appid }
		).done( function (data) {
				// update display
				HighlightSelectedVote( voteid, appid );
				if ( data )
				{
					ShowAlertDialog( 'The Steam Awards', data );
				}
				else
				{
					// show something generic
					ShowAlertDialog( 'The Steam Awards', 'Thanks for voting!' );
				}
			}).fail( function() {
				ShowAlertDialog(
					'The Steam Awards',
					'There was a problem recording your vote.  Please try again later.'
				).done( function() { window.location.reload(); } );
			}).always( function() {
				g_bVoteInFlight = false;
			});
	}
}

function HighlightSelectedVote( voteid, appid )
{
	$J('.vote_nominations').each( function() {
		if ( $J(this).data('voteid') == voteid )
		{
			$J(this).children('.vote_nomination').removeClass('your_vote').each( function() {
				if ( $J(this).data('voteAppid') == appid )
					$J(this).addClass('your_vote');
			});
		}
	});
}

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


function HomeRenderFeaturedItems( rgDisplayLists )
{
	var rgTier1 = GHomepage.FilterItemsForDisplay(
		rgDisplayLists.sale_tier1, 'home', 9, 18, { games_already_in_library: false, localized: true, displayed_elsewhere: true, only_current_platform: true }
	);
	var rgTier2 = GHomepage.FilterItemsForDisplay(
		rgDisplayLists.sale_tier2, 'home', 9, 18, { games_already_in_library: false, localized: true, displayed_elsewhere: true, only_current_platform: true }
	);

	var rgItemsPromotedToTier1 = [];
	if ( rgTier1.length < 9 )
	{
		// promote capsules until we're full
		while ( rgTier2.length && rgTier1.length < 9 )
		{
			var item = rgTier2.shift();
			rgItemsPromotedToTier1.push( item );
			rgTier1.push( item );
		}

		TryPopulateSaleItems( rgTier1, rgDisplayLists.sale_tier1, 9 );
	}

	if ( rgTier2.length < 9 )
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

		TryPopulateSaleItems( rgTier2, rgRemainingDisplayList, 9 );
	}

	HomeSaleBlock( rgTier1, $J('#tier1_target' ) );
	HomeSaleBlock( rgTier2, $J('#tier2_target' ) );

	// capsule rows
	HomeSaleCapsuleCategory( rgDisplayLists.virtualreality, $J('.category_caps_vr') );
	HomeSaleCapsuleCategory( rgDisplayLists.video, $J('.category_caps_video') );
	HomeSaleCapsuleCategory( rgDisplayLists.freetoplay, $J('.category_caps_freetoplay') );

}

function TryPopulateSaleItems( rgDisplayedItems, rgOriginalItemList, cMinItems )
{
	if ( rgDisplayedItems.length < cMinItems )
	{
		// fill with items that the user might already own
		AddItemsIfNotPresent( rgDisplayedItems, GHomepage.FilterItemsForDisplay(
			rgOriginalItemList, 'home', cMinItems, 15, { games_already_in_library: true, localized: true, displayed_elsewhere: true, only_current_platform: true }
		), cMinItems );
	}

	if ( rgDisplayedItems.length < 9 )
	{
		AddItemsIfNotPresent( rgDisplayedItems, rgOriginalItemList, 9 );
	}
}

function HomeSaleBlock( rgItems, $Parent )
{
	var rgRemainingItems = rgItems;
	var bTwoThirdsRow = true;

	if ( rgRemainingItems.length > 9 && rgRemainingItems.length % 3 != 0 )
		rgRemainingItems = rgRemainingItems.slice( 0, rgRemainingItems.length - rgRemainingItems.length % 3 );

	while( rgRemainingItems.length )
	{
		rgRemainingItems = SaleRow( rgRemainingItems, $Parent, bTwoThirdsRow, 'sale_dailydeals' );
		bTwoThirdsRow = !bTwoThirdsRow;
	}
	BindSaleCapAutoSizeEvents( $Parent );
	GDynamicStore.DecorateDynamicItems( $Parent );
	$Parent.css('height','');
}

function HomeSaleCapsuleCategory( rgItems, $Parent )
{

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
			return GHomepage.BuildHomePageGenericCap(strFeature, oItem.appid, oItem.packageid, rgOptions);
		} , 'sale_categories', 4 );
	}
	else
	{
		$Parent.hide();
	}
}

var g_bRightSide = true;
function SaleRow( rgItems, $Parent, bTwoThirdsRow, strFeatureContext )
{
	var rgItemsThisRow = rgItems.slice( 0, 3 );

	if ( bTwoThirdsRow && rgItemsThisRow.length == 3 )
	{
		g_bRightSide = !g_bRightSide;
		var $Row = $J('<div/>', {'class': 'twothird_split ' + ( g_bRightSide ? 'right' : 'left' ) } );

		$Row.append( $J('<div/>', {'class': 'large_sale_caps' } ).append(
			SaleCap( rgItemsThisRow[0], strFeatureContext, 'discount_block_large' )
		) );

		$Row.append( $J('<div/>', {'class': 'small_sale_caps' } ).append(
			SaleCap( rgItemsThisRow[1], strFeatureContext, 'discount_block_inline' ),
			SaleCap( rgItemsThisRow[2], strFeatureContext, 'discount_block_inline' )
		) );

		$Row.append( $J('<div/>', {'style': 'clear: both;' } ) );
		$Parent.append( $Row );
	}
	else
	{
		var $Row = $J('<div/>', {'class': 'three_row small_sale_caps' } );
		for ( var i = 0; i < rgItemsThisRow.length; i++ )
			$Row.append( SaleCap( rgItemsThisRow[i], strFeatureContext, 'discount_block_inline'	 ) );
		$Parent.append( $Row );
	}

	return rgItems.slice( rgItemsThisRow.length );
}

function SaleCap( item, strFeatureContext, strDiscountClass )
{
	var params = { 'class': 'sale_capsule' };
	var rgItemData = GStoreItemData.GetCapParams( strFeatureContext, item.appid, item.packageid, params );

	var $CapCtn = $J('<a/>', params );
	GStoreItemData.BindHoverEvents( $CapCtn, item.appid, item.packageid );

	var $Img = $J( '<img/>', {'class': 'sale_capsule_image autosize', 'src': '/public/images/v6/home/maincap_placeholder_616x353.gif' } );
	$Img.data('src-maincap', rgItemData['main_capsule'] );
	$Img.data('src-smallcap', rgItemData['small_capsule'] );

	$CapCtn.append( $Img );
	$CapCtn.append( rgItemData.discount_block ? $J(rgItemData.discount_block).addClass( strDiscountClass ) : '' );

	return $CapCtn;
}

function BindSaleCapAutoSizeEvents( $Container )
{
	var $AutosizeImages = $Container.find('img.sale_capsule_image.autosize');
	var mqSwitchToSmall = window.matchMedia ? window.matchMedia("(max-width: 580px)") : {matches: false};

	if ( !$AutosizeImages.length )
		return;

	$J(window ).on('resize.AdjustSaleCaps', function() {
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
	} ).trigger('resize.AdjustSaleCaps');
}

