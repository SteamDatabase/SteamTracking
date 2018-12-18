
var g_bVoteInFlight = false;
var k_nTier1Max = 15;
var k_nTier1RecommendationMax = 7;
var k_nTier2Max = 18;
var k_nTier1RecommendationMax = 12;


function OnDeveloperVoteClick( voteid, developerid )
{
	OnVoteClick(voteid, 0, developerid );
}

function OnAppVoteClick( voteid, appid )
{
	OnVoteClick( voteid, appid, 0 );
}

function OnVoteClick( voteid, appid, developerid )
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
			'https://store.steampowered.com/salevote',
			{sessionid: g_sessionID, voteid: voteid, appid: appid,  developerid: developerid }
		).done( function (data) {
				// update display
				// HighlightSelectedVote( voteid, appid );
				var $dialog = null;
				if ( data )
				{
					$dialog = ShowAlertDialog( 'The Steam Awards', data );
				}
				else
				{
					// show something generic
					$dialog = ShowAlertDialog( 'The Steam Awards', 'Thanks for voting!' );
				}
				$dialog.done( function() { window.location.reload(); } );
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
	var rgTier1 = [];
	var rgTier2 = [];
	
	var rgSeenAppIds = [];
	
	if ( GHomepage.bMergeRecommendationsToHighlights )
	{
		var rgRecommendedGames = GHomepage.FilterItemsForDisplay(
			GHomepage.rgRecommendedGames, 'home', 9, 48, { games_already_in_library: false, localized: true, displayed_elsewhere: true, only_current_platform: true }
		);
		
		rgRecommendedGames = v_shuffle( rgRecommendedGames );
		
		var rgTier1Candidates = GHomepage.FilterItemsForDisplay(
			rgDisplayLists.sale_tier1, 'home', 9, 48, { games_already_in_library: false, localized: true, displayed_elsewhere: true, only_current_platform: true }
		);

		var rgTier2Candidates = GHomepage.FilterItemsForDisplay(
			rgDisplayLists.sale_tier2, 'home', 9, 48, { games_already_in_library: false, localized: true, displayed_elsewhere: true, only_current_platform: true }		
		);

		for ( var i = 0; i < rgRecommendedGames.length; i++ )
		{
			if ( rgSeenAppIds.indexOf( rgRecommendedGames[i].appid ) !== -1 )
				continue;
			
			// 7 from recommendation into tier1, then overflow into tier2
			if ( rgTier1.length < k_nTier1RecommendationMax )		
			{
				rgTier1.push( rgRecommendedGames[i] );
				rgSeenAppIds.push( rgRecommendedGames[i].appid );
			}
			else if ( rgTier2.length < k_nTier2RecommendationMax )
			{
				rgTier2.push( rgRecommendedGames[i] );
				rgSeenAppIds.push( rgRecommendedGames[i].appid );
			}
		}
		
		// fill up tier1 to 15, then overflow into tier2
		for ( var i = 0; i < rgTier1Candidates.length; i++ )
		{
			if ( rgSeenAppIds.indexOf( rgTier1Candidates[i].appid ) !== -1 )
				continue;
				
			rgTier1Candidates[i].feature = 'summer2018_mergedview_curated';

			if ( rgTier1.length < k_nTier1Max )
			{
				rgTier1.push( rgTier1Candidates[i] );
				rgSeenAppIds.push( rgTier1Candidates[i].appid );
			}
			else if ( rgTier2.length < k_nTier2Max )
			{
				rgTier2.push( rgTier1Candidates[i] );
				rgSeenAppIds.push( rgTier1Candidates[i].appid );
			}
		}
		
		// fill up rest with tier 2
		for ( var i = 0; i < rgTier2Candidates.length && rgTier2.length < k_nTier2Max; i++ )
		{
			if ( rgSeenAppIds.indexOf( rgTier2Candidates[i].appid ) !== -1 )
				continue;
				
			rgTier2.push( rgTier2Candidates[i] );
			rgSeenAppIds.push( rgTier2Candidates[i].appid );
		}
		
		rgTier1 = v_shuffle( rgTier1 );
		rgTier2 = v_shuffle( rgTier2 );
	}
	else
	{
		rgTier1 = GHomepage.FilterItemsForDisplay(
			rgDisplayLists.sale_tier1, 'home', 9, k_nTier1Max, { games_already_in_library: false, localized: true, displayed_elsewhere: true, only_current_platform: true }
		);

		rgTier2 = GHomepage.FilterItemsForDisplay(
			rgDisplayLists.sale_tier2, 'home', 9, k_nTier2Max, { games_already_in_library: false, localized: true, displayed_elsewhere: true, only_current_platform: true }
		);
	}

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
	HomeSaleCapsuleCategory( rgDisplayLists.controller, $J('#hardware_carousel').parent(), 'sale_hardware' );
	HomeSaleCapsuleCategory( rgDisplayLists.virtualreality, $J('.category_caps_vr'), 'sale_vr' );
	HomeSaleCapsuleCategory( rgDisplayLists.bundles, $J('.category_caps_bundles'), 'sale_bundles' );
	HomeSaleCapsuleCategory( rgDisplayLists.franchises, $J('.category_caps_franchises'), 'sale_franchises' );
	HomeSaleCapsuleCategory( rgDisplayLists.moddable, $J('.category_caps_moddable'), 'sale_moddable' );


	// NOTE: If we are already using home.js, then we don't need this. Found we were doubling up the streams
	// GSteamBroadcasts.Init( GHomepage.FilterItemsForDisplay );
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
	var bPromoRow = true;

	if ( rgRemainingItems.length > 9 && rgRemainingItems.length % 3 != 0 )
		rgRemainingItems = rgRemainingItems.slice( 0, rgRemainingItems.length - rgRemainingItems.length % 3 );

	while( rgRemainingItems.length )
	{
		rgRemainingItems = SaleRow( rgRemainingItems, $Parent, bTwoThirdsRow, 'sale_dailydeals', bPromoRow );
		if ( !bPromoRow )
			bTwoThirdsRow = !bTwoThirdsRow;
		bPromoRow = false;
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

var g_bRightSide = true;
function SaleRow( rgItems, $Parent, bTwoThirdsRow, strFeatureContext, bPromoRow )
{
	var rgItemsThisRow = rgItems.slice( 0, 3 );

	if ( bTwoThirdsRow && rgItemsThisRow.length == 3 )
	{
		g_bRightSide = !g_bRightSide;
		var $Row = $J('<div/>', {'class': 'twothird_split ' + ( g_bRightSide ? 'right' : 'left' ) } );

		if ( bPromoRow )
		{
			$Row.append( $J('<div/>', {'class': 'large_sale_caps' } ).append(
				SaleCap( rgItemsThisRow[0], strFeatureContext, 'discount_block_large' ),
				$J( '<div/>', {'class': 'three_row small_sale_caps' } ).append(
					SaleCap( rgItemsThisRow[1], strFeatureContext, 'discount_block_inline' ),
					SaleCap( rgItemsThisRow[2], strFeatureContext, 'discount_block_inline' )
				)
			) );

			$Row.append( $J('<div/>', {'class': 'small_sale_caps steam_awards_cta' } ).append(
				$J( '<a/>', { 'href' : g_strPromoCapsuleURL } ).append(
					$J( '<img/>', {'class': 'sale_capsule_image autosize', 'src': g_strPromoCapsule } )
				)
			) );
		}
		else
		{

			$Row.append( $J('<div/>', {'class': 'large_sale_caps' } ).append(
				SaleCap( rgItemsThisRow[0], strFeatureContext, 'discount_block_large' )
			) );

			$Row.append( $J('<div/>', {'class': 'small_sale_caps' } ).append(
				SaleCap( rgItemsThisRow[1], strFeatureContext, 'discount_block_inline' ),
				SaleCap( rgItemsThisRow[2], strFeatureContext, 'discount_block_inline' )
			) );
		}


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
	var params = { 'class': 'sale_capsule broadcast_capsule' };
	
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

	$CapCtn.append( $Img );
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

/*
 {
 categoryid
 label
 nominatedid	o
 writein	o
 }
 */
function InitSteamAwardNominationDialog( nominatedid, appname, rgCategories )
{
	$J('.show_nomination_dialog').click( function() {
		var $PageElement = $J(this);
		if ( !g_AccountID )
		{
			// prompt for login
			ShowConfirmDialog( 'Community\'s Choice',
				'You need to log in first before you can vote.',
				'Login'
			).done( function() {
				window.location = 'https://store.steampowered.com/login/?redir=app%2F__APPID__'.replace( /__APPID__/, appid );
			});
			return;
		}

		var $Form = $J('<form/>', {'class': 'steamward_nominate_form'});

		var bFoundCurrentApp = false;

		for ( var i = 0; i < rgCategories.length; i++ )
		{
			var oCategory = rgCategories[i];
			if ( oCategory.categoryid == 4 )
				continue;


			var id = 'category' + oCategory.categoryid;
			var $Row = $J('<div/>', {'class': 'steamaward_nomination_row'} );

			var $Div = $J('<div/>', {'class': 'steamaward_nomination_content'} );
			var $Radio = $J('<input/>', {type: 'radio', id: id, name: 'nomination_category', value: oCategory.categoryid } );

			$Row.append( $Radio.wrap( $J('<div/>', {'class': 'radio_ctn'} ) ).parent(), $Div );

			$Div.append( $J('<label/>', {'for': id} ).html( oCategory.label ) );

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

		if ( bFoundCurrentApp )
		{
			// remove option
			var id = 'category_remove';


			var $Row = $J('<div/>', {'class': 'steamaward_nomination_row remove_row'} );

			var $Div = $J('<div/>', {'class': 'steamaward_nomination_content'} );
			var $Radio = $J('<input/>', {type: 'radio', id: id, name: 'nomination_category', value: 0 } );

			$Radio.change( function() {
				if ( $J(this).prop('checked') )
					$J(this).parents( '.steamaward_nomination_row' ).addClass('selected').siblings().removeClass('selected');
				else
					$J(this).parents( '.steamaward_nomination_row' ).removeClass('selected');
			});

			$Form.append( $Row );
		}

		// build the display
		var $Dialog = $J('<div/>');
		$Dialog.append( $J('<p/>', {'class': 'steamawards_nomination_intro'}).html( 'Which award would you like to nominate %s for?'.replace( /%s/, appname ) ) );
		$Dialog.append( $Form );
		$Dialog.append( $J('<div/>', {'class': 'steamaward_nomination_learnmore' }).append( $J('<a/>', {'href': 'https://store.steampowered.com/SteamAwardNominations/'}).text( 'Learn more about the Steam Awards' ) ) );

		var fnSubmit = function()
		{
			var categoryid = $Form.find( 'input[name=nomination_category]:checked' ).val();
			var writein = $Form.find('#category' + categoryid + '_writein').val();

			if ( categoryid == 13 && v_trim( writein || '' ).length < 5 )
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
				rgCategories = data.rgCategories;
				$PageElement.html( data.page_html );
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

function FillCapsuleContainer( rgItems, $Parent, settings )
{
	var settings = $J.extend( {
		'minItems'			: 6,
		'maxItems'			: 12,
		'rowItems'		: 3, // Item count must be divisible by this number
		'filterRules'		: { games_already_in_library: false, localized: true, displayed_elsewhere: false, only_current_platform: true },
		'filterRulesFallback': { games_already_in_library: false, displayed_elsewhere: false, only_current_platform: true }, // Filter rules to use if we don't meet our minItems count
		'filterRulesApplicable': { games_already_in_library: true, localized: true, displayed_elsewhere: true, only_current_platform: true},
		'capsuleOptions'	: {},
		'feature'			: ''

	}, settings);

	if ( !rgItems )
	{
		$Parent.hide();
		return;
	}

	var rgCapsules = GStoreItemData.FilterItemsForDisplay( rgItems, settings.filterRules, settings.filterRulesApplicable, settings.maxItems, settings.minItems )

	if ( rgCapsules.length < settings.minItems )
	{
		rgCapsules = GStoreItemData.FilterItemsForDisplay( rgItems, settings.filterRulesFallback, settings.filterRulesApplicable, settings.maxItems, settings.minItems )
	}

	while( rgCapsules.length % settings.rowItems != 0 )
		rgCapsules.pop();

	GDynamicStore.MarkAppDisplayed( rgCapsules );

	if ( rgCapsules.length >= settings.minItems )
	{
		var $elTarget = $Parent.find('.capsule_container');
		var capsuleOptions = settings.capsuleOptions;

		$J.each( rgCapsules, function(idx, oItem) {
			$elTarget.append( GDynamicStoreHelpers.BuildCapsuleHTML(settings.feature, oItem.appid, oItem.packageid, oItem.bundleid, capsuleOptions) )
		});

		GDynamicStore.DecorateDynamicItems($elTarget);
	}
	else
	{
		$Parent.hide();
	}
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

