
var g_bVoteInFlight = false;
var k_nTier1Max = 15;
var k_nTier1RecommendationMax = 7;
var k_nTier2Max = 18;
var k_nTier1RecommendationMax = 12;

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
			'https://store.steampowered.com/salevote',
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
			
			rgRecommendedGames[i].feature = 'summer2018_mergedview_recommend_neural';
			
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

			rgTier2Candidates[i].feature = 'summer2018_mergedview_curated';
				
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
		
		for ( var i = 0; i < rgTier1.length; i++ )
		{
			rgTier1[i].feature = 'summer2018_standardview_curated';
		}

		for ( var i = 0; i < rgTier2.length; i++ )
		{
			rgTier2[i].feature = 'summer2018_standardview_curated';
		}
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
	HomeSaleCapsuleCategory( rgDisplayLists.controller, $J('#hardware_carousel').parent() );
	HomeSaleCapsuleCategory( rgDisplayLists.virtualreality, $J('.category_caps_vr') );
	
	GSteamBroadcasts.Init();
	GSteamSalienPlanets.Init();
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
	if ( !rgItems )
	{
		$Parent.hide();
		return;
	}

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
 appid	o
 writein	o
 }
 */
function InitSteamAwardNominationDialog( appid, appname, rgCategories )
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

			if ( oCategory.appid == appid )
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

			$Row.append( $Radio.wrap( $J('<div/>', {'class': 'radio_ctn'} ) ).parent(), $Div );

			$Div.append( $J('<label/>', {'for': id} ).html( 'None - Withdraw nomination for %s'.replace( /%s/, appname ) ) );

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

			$J.post( 'https://store.steampowered.com/promotion/nominategame', {
				sessionid: g_sessionID,
				appid: appid,
				categoryid: categoryid,
				writein: writein
			} ).done( function( data ) {
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

GSteamSalienPlanets = {
	Init: function()
	{
		GSteamSalienPlanets.rgRecentlyConqueredPlanets = v_shuffle( GHomepage.rgRecentlyConqueredPlanets );
		GSteamSalienPlanets.Render();
		
	},

	Render: function()
	{
		if ( GSteamSalienPlanets.rgRecentlyConqueredPlanets.length == 0 )
		{
			return;
		}
		
		if ($J('.summer_salien_universe').length == 0 )
			return;

		var $Container = $J('.summer_salien_universe');
		$Container.show();
		
		// pick a random planet to show
		var $planet = GSteamSalienPlanets.rgRecentlyConqueredPlanets[Math.floor(Math.random() * Math.floor(GSteamSalienPlanets.rgRecentlyConqueredPlanets.length))];
		
		// render this to the container
		var $ConqueredPlanet = $J('.conquered_planet', $Container);
		$ConqueredPlanet.css( { "background" : "url('" + $planet.image + "')", "background-repeat" : "no-repeat", "background-position-x" : "-227px", "background-position-y" : "-170px" });
		
		var $Title = $J('#conquered_planet_name', $ConqueredPlanet );
		$Title.html(  $planet.name );
		
		var $AppLinkContainer = $J('#conquered_planet_apps', $ConqueredPlanet );
		$J.each( $planet.giveaway_apps, function(idx, oItem) {
			// oItem is an appid?
			var params = { 'class': 'home_smallcap app_impression_tracked', 'href': GStoreItemData.GetAppURL( oItem, 'summer2018_salien_giveaway' ), 'data-ds-appid' : oItem };
						
			var rgItemData = GStoreItemData.GetCapParams( 'summer2018_salien_giveaway', oItem, 0, null, params );
			var $CapCtn = $J('<a/>', params );
			GStoreItemData.BindHoverEvents( $CapCtn, oItem );
			var rgImageProperties = { src: rgItemData.small_capsulev5 };
			$CapCtn.append( $J('<img/>', rgImageProperties ) );
			$CapCtn.append( $J('<div class="home_smallcap_title ellipsis"/>' ).html( rgItemData.name ) );
			
			$AppLinkContainer.append( $CapCtn )
		});
		
		var $BrowseMoreCtn = $J( '<div class="browse_more_games_ctn"/>' );
		$AppLinkContainer.append( $BrowseMoreCtn );
		var rgLinkParams = { 'href': $planet.tag_link } ;
		$BrowseMoreCtn.append( $J('<a/>', rgLinkParams ).html( 'Browse for more games like these' ) );

		var $TopGroups = $J('.top_groups_ctn', $ConqueredPlanet );
		
		$J.each( $planet.top_clans, function(idx, oItem) {
			if ( oItem.clan_info.accountid == null || oItem.clan_info.accountid == 0 )
				return;
				
			var clan = GStoreItemData.GetAccountData( null, oItem.clan_info.accountid, 7 );
			var $AvatarCap = $J('<a href="https://steamcommunity.com/groups/%1$s" title="%3$s"><img src="%2$s"></a>'.replace(/\%1\$s/g, clan.url).replace(/\%2\$s/g, GetAvatarURL( clan.avatar ) ).replace(/\%3\$s/g, clan.name) );
			$TopGroups.append( $AvatarCap );
		});
		
		return;
	}
};

