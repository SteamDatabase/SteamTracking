
//-----------------------------------------------------------------------------
// Badge crafting
//-----------------------------------------------------------------------------

var g_CraftModal;
var g_rgBadgeCraftData = null;
var g_bBadgeCraftAnimationReady = false;

function Profile_CraftGameBadge( profileUrl, appid, series, border_color )
{
	var submitUrl = profileUrl + "/ajaxcraftbadge/";
	g_rgBadgeCraftData = null;
	g_bBadgeCraftAnimationReady = false;

	// fire off the ajax request to craft the badge
	$J.post(submitUrl,{ appid: appid, series: series, border_color: border_color, sessionid: g_sessionID } )
		.done( function( data ) {
			g_rgBadgeCraftData = data;
			FinishCraft();
		}).fail( function() {
			g_CraftModal && g_CraftModal.Dismiss();
			ShowAlertDialog( 'Craft badge', 'There was an error trying to craft the badge.  Please try again later.' );
		});


	// display the crafting modal and animation
	var $Crafter = $J('#badge_crafter');
	var $Throbber = $J('#badge_craft_loop_throbber');

	g_CraftModal = ShowDialog( 'Craft badge', $Crafter, { bExplicitDismissalOnly: true } );

	$Crafter.show();
	g_CraftModal.GetContent().addClass( 'badge_craft_modal' );
	g_CraftModal.GetContent().find('.newmodal_content').css( 'overflow', 'visible' );
	g_CraftModal.GetContent().css( 'overflow', 'hidden' );

	g_CraftModal.AdjustSizing();
	g_CraftModal.SetRemoveContentOnDismissal( false );

	$Throbber.addClass( 'loop_throbber_hide' );
	$Throbber.show();

	// show the right title
	$J('#badge_craft_header_crafting').show();
	$J('#badge_craft_header_crafted').hide();
	$J('#badge_completed').hide();

	// start the animation for each card, staggered
	var iCard = 0;
	$J('#card_image_set').children().each( function() {
		var $Card = $J(this);
		$Card.hide();
		$Card.removeClass( 'card_craft_combined' );

		window.setTimeout( function() {
			$Card.show();
			$Card.addClass( 'card_craft_combined' );
		}, iCard++ * 500 );
	} );

	// we start the next phase half a second before the animation would end, so we can animate the badge appearing on top.
	var nAnimationTimeMS = ( ( iCard - 1 ) * 500 ) + (4000 - 500);
	window.setTimeout( function() {
		$Throbber.removeClass( 'loop_throbber_hide' );
		g_bBadgeCraftAnimationReady = true;
		g_CraftModal.GetContent().find('.newmodal_content').css( 'overflow', '' );
		FinishCraft();
	}, nAnimationTimeMS );
}

function FinishCraft()
{
	if ( !g_rgBadgeCraftData || !g_bBadgeCraftAnimationReady )
		return;

	$J('#badge_craft_loop_throbber').hide();

	$J('#badge_craft_header_crafting').fadeOut( 'fast' );
	$J('#badge_craft_header_crafted').fadeIn( 'fast' );

	var $Badge = $J('#badge_completed');
	var $BadgeAnimation = $Badge.find( '.completed_badge_animation_ctn');

	var $BadgeRewards = $J('#badge_rewards');
	var $BadgeRewardsList = $J('#badge_rewards_ctn');
	var $BadgeRewardsActions = $BadgeRewards.find('.badge_rewards_actions');

	if ( g_rgBadgeCraftData && g_rgBadgeCraftData.Badge )
	{
		BuildBadgeDisplay( $Badge, g_rgBadgeCraftData.Badge );
	}

	var rgBadgeRewards = [];
	if ( g_rgBadgeCraftData && g_rgBadgeCraftData.rgDroppedItems )
	{
		for ( var i = 0; i < g_rgBadgeCraftData.rgDroppedItems.length; i++ )
		{
			var $Reward = BuildBadgeReward( g_rgBadgeCraftData.rgDroppedItems[i] );
			$BadgeRewardsList.append( $Reward );
			$Reward.hide();
			rgBadgeRewards.push( $Reward );
		}
	}

	$BadgeAnimation.css( 'width', '0' );
	$Badge.show();
	$BadgeAnimation.animate( { width: 414 }, function() {
		$BadgeRewards.show();
		var nMSToWait = 500;

		for ( var i = 0; i < rgBadgeRewards.length; i++ )
		{
			var $Reward = rgBadgeRewards[i];
			window.setTimeout( DisplayBadgeRewardClosure( $Reward ), nMSToWait );
			nMSToWait += 500;
		}
		window.setTimeout( function() {
			$BadgeRewardsActions.show();

			// add the close button and "click outside dismisses modal" behavior back to modal.
			//	when/if they close, we'll reload the page.
			g_CraftModal.GetContent().find('.newmodal_close').show();
			g_CraftModal.SetDismissOnBackgroundClick( true );

			g_CraftModal.always( function() { ShowDialog( 'Craft badge', 'Reloading...' ); window.location.reload(); } );

			g_CraftModal.AdjustSizing( 'slow' );
		}, nMSToWait );

	} );
}

function BuildBadgeDisplay( $BadgeCtn, Badge )
{
	var $IconContainer = $BadgeCtn.find( '.completed_badge_icon' );
	var $Content = $BadgeCtn.find( '.completed_badge_content' );

	$IconContainer.append( $J('<img/>', {src: Badge.image } ) );

	var DateUnlocked = new Date( Badge.unlocked_time * 1000 );
	var $XPLine = $J('<div/>', {'class': 'completed_badge_xp' } ).text( 'XP ' + Badge.xp + ' ' );
	$XPLine.append( $J('<span/>', {'class': 'completed_badge_unlock' }).text( DateUnlocked.toLocaleString() ) );

	$Content.append(
		$J('<div/>', {'class': 'completed_badge_title' } ).text( Badge.title ),
		$XPLine,
		$J('<div/>', {'class': 'completed_badge_game' } ).text( Badge.game )
	);
}

function BuildBadgeReward( rgRewardData )
{
	if ( rgRewardData.type == 'levelup' )
		return BuildLevelUpReward( rgRewardData );

	var $RewardCtn = $J('<div/>', {'class': 'badge_reward_ctn'} )

	if ( rgRewardData.label )
	{
		var $RewardLabel = $J('<div/>',{'class': 'badge_reward_label'}).text( rgRewardData.label );
		$RewardCtn.append( $RewardLabel );
	}

	var $Reward = $J('<div/>', {'class': 'badge_reward'} );
	var $Icon = $J('<div/>', {'class': 'badge_reward_icon'} );
	if ( rgRewardData.image )
	{
		$Icon.append( $J('<img/>', {src: rgRewardData.image } ) );
	}
	if ( rgRewardData.economy_hover_data && typeof BindSingleEconomyHover != 'undefined' )
	{
		$Icon.attr( 'data-economy-item', rgRewardData.economy_hover_data );
		BindSingleEconomyHover( $Icon );
	}
	var $Content = $J('<div/>', {'class': 'badge_reward_content' } );
	var $Title = $J('<div/>', {'class': 'badge_reward_title'}).text( rgRewardData.title );
	var $Desc = $J('<div/>').text( rgRewardData.description );

	if ( rgRewardData.rarity )
	{
		$Desc.addClass( 'reward_rarity rarity' + rgRewardData.rarity );

		if ( rgRewardData.rarity > 1 )
		{
			var strColor = '#ffffff';
			switch( rgRewardData.rarity )
			{
				case 2: strColor = '#70b04a'; break;
				case 3: strColor = '#9e2020'; break;
				case 4: strColor = '#8650ac'; break;
				case 5: strColor = '#505fac'; break;
				case 6: strColor = '#e46100'; break;
			}
			$Reward.css( 'box-shadow', 'inset 0 0 10px 0 ' + strColor );
		}
	}

	$Content.append( $Title, $Desc );

	$Reward.append( $Icon, $Content, $J('<div/>', {style: 'clear: left;' } ) );
	$RewardCtn.append( $Reward );
	return $RewardCtn;
}

function BuildLevelUpReward( rgRewardData )
{
	var $Reward = $J('<div/>', {'class': 'badge_reward_level'} );

	var $Level = $J('<div/>', {'class': rgRewardData.level_css_class } );
	$Level.append( $J('<span/>', {'class': 'friendPlayerLevelNum' }).text( rgRewardData.level ) );

	var strDescription = 'Level %s achieved'.replace( /%s/, rgRewardData.level );

	return $Reward.append( $Level, strDescription );
}

function DisplayBadgeRewardClosure( $Reward )
{
	return function() {
		$Reward.fadeIn();
		g_CraftModal.AdjustSizing( 'slow' );
	}
}

function playSound( soundfile )
{
	$('audio_player').innerHTML=
		"<embed src=\""+soundfile+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
}

function Profile_LevelUp( profileUrl )
{
	var submitUrl = profileUrl + "/ajaxlevelup/";
	new Ajax.Request(submitUrl, {
		method:'post',
		parameters: { sessionid: g_sessionID },
		onSuccess: function(transport){
			var json = transport.responseJSON;
			if ( json.message )
			{
				ShowAlertDialog( 'Level up', json.message).done( function() {
					window.location.reload();
				} );
			}
			else if ( json.success == 1 )
			{
				window.location.reload();
			}
		}
	});
}

function GameCardArtDialog( strName, strImgURL )
{
	var $Img = $J('<img/>' );
	var $Link = $J('<a/>', {href: strImgURL, target: '_blank' } );
	var Modal = ShowDialog( strName, $Link.append( $Img ) );
	Modal.GetContent().hide();

	// set src after binding onload to be sure we catch it.
	$Img.load( function() { Modal.GetContent().show(); } );
	$Img.attr( 'src', strImgURL );

	Modal.OnResize( function( nMaxWidth, nMaxHeight ) {
		$Img.css( 'max-width', nMaxWidth );
		$Img.css( 'max-height', nMaxHeight );
	} );

	Modal.AdjustSizing();
}

function ShowCardDropInfo( strGameName, id )
{
	var $Content = $J('#' + id);
	$Content.detach();
	$Content.show();

	ShowAlertDialog( strGameName, $Content).always(
		function() {
			// save it away again for later
			$Content.hide();
			$J(document.body).append( $Content );
		}
	);

}

function ReloadCommunityInventory()
{
	if ( typeof UserYou != 'undefined' )
		UserYou.ReloadInventory( 753, 6 );
}

var CARDS_PER_BOOSTER = 3;
function BuildBoosterModal( strTitle, appid )
{
	var $Content = $J('<div/>', {'class': 'booster_unpack_dialog' } );

	var $TitleArea = $J('<div/>', {'class': 'booster_unpack_title' } );
	var $CardArea = $J('<div/>', {'class': 'booster_unpack_cardarea' } );
	var $PostUnpackActions = $J('<div/>', {'class': 'booster_unpack_actions post_unpack' } );

	var $BtnBadgeProgress = $J('<a/>', {'class': 'btn_grey_white_innerfade btn_medium', 'href': g_strProfileURL + '/gamecards/' + appid + '/' } );
	$BtnBadgeProgress.append( $J('<span/>').text('View badge progress') );

	var $BtnFoilBadgeProgress = $J('<a/>', {'class': 'btn_grey_white_innerfade btn_medium', 'href': g_strProfileURL + '/gamecards/' + appid + '/?border=1' } );
	$BtnFoilBadgeProgress.append( $J('<span/>').text('View foil badge progress') );
	$BtnFoilBadgeProgress.hide();

	var $BtnClose = $J('<div/>', {'class': 'btn_grey_white_innerfade btn_medium booster_unpack_closebtn' } );
	$BtnClose.append( $J('<span/>').text('Close') );

	$PostUnpackActions.append( $BtnBadgeProgress, $BtnFoilBadgeProgress, $BtnClose );
	$PostUnpackActions.hide();

	$Content.append( $TitleArea, $CardArea, $PostUnpackActions );

	var Modal = ShowDialog( strTitle, $Content, { bExplicitDismissalOnly: true } );

	$BtnClose.click( function() { Modal.Dismiss(); } );

	//var $ImgBooster = $J('<img/>', {'class': 'booster_unpack_booster', src: 'https://steamcommunity-a.akamaihd.net/economy/boosterpack/' + appid + '?l=' + g_strLanguage } );
	//$CardArea.append( $ImgBooster );

	var $Booster = $J('<div/>', {'class': 'booster_unpack_booster' } );
	var $rgCardBacks = [];
	for ( var i = 0; i < CARDS_PER_BOOSTER; i++ )
	{
		var $CardBack = $J('<div/>', {'class': 'booster_unpack_card card_back card' + (i+1) } );
		var $ImgFlipGradient = $J('<div/>', {'class': 'booster_unpack_card_image_flip_gradient'});
		var $Img = $J('<img/>', {'class': 'booster_unpack_card_image', src: 'https://steamcommunity-a.akamaihd.net/economy/boosterpack/' + appid + '?l=english&single=1&v=2' } );
		$CardBack.append( $Img, $ImgFlipGradient );
		$Booster.append( $CardBack );
		$rgCardBacks.push( $CardBack );
	}

	var $ImgRibbon = $J('<img/>', {'class': 'booster_unpack_ribbon', 'src': 'https://steamcommunity-a.akamaihd.net/economy/boosterpackribbon/?l=english' });
	$Booster.append( $ImgRibbon );
	$CardArea.append( $Booster );

	return Modal;
}

function ExecuteBoosterUnpack( Modal, appid, itemid, nMSBeforeStart )
{
	var $Content = Modal.GetContent().find( '.booster_unpack_dialog' );
	var $PostUnpackActions = $Content.find( '.booster_unpack_actions.post_unpack' );
	var $ImgRibbon = $Content.find( '.booster_unpack_ribbon' );
	var $Booster = $Content.find( '.booster_unpack_booster' );
	var $CardBacks = $Content.find( '.booster_unpack_card.card_back' );
	var $CardArea = $Content.find( '.booster_unpack_cardarea' );

	var submitUrl = g_strProfileURL + "/ajaxunpackbooster/";
	var tsStart = (new Date()).getTime();
	window.setTimeout( function() {
		$ImgRibbon.addClass( 'unwrap' );
		$Booster.addClass( 'move_to_position' );
		$CardBacks.addClass( 'final_position' );
	}, nMSBeforeStart );


	// fire off the ajax request to unpack the booster
	$J.post( submitUrl, { appid: appid, communityitemid: itemid, sessionid: g_sessionID } )
		.done( function( data ) {

			if ( data.rgItems && data.rgItems.length > 0 )
			{
				var $rgCards = [];
				for( var i = 0; i < CARDS_PER_BOOSTER; i++ )
				{
					var item = data.rgItems[i];
					if ( item.foil )
						$BtnFoilBadgeProgress.show();

					var $Card = $J('<div/>', {'class': 'booster_unpack_card card_front card' + (i+1) } );
					var $ImgFlipGradient = $J('<div/>', {'class': 'booster_unpack_card_image_flip_gradient'});
					var $Img = $J('<img/>', {'class': 'booster_unpack_card_image', src: item.image } );
					var $CardTitle = $J('<div/>', {'class': 'booster_unpack_card_title'} ).text( item.name );
					var $CardSeries= $J('<div/>', {'class': 'booster_unpack_card_title'}).text( 'Series %s'.replace( /%s/, item.series ) );
					$Card.append( $Img, $ImgFlipGradient, $CardTitle, $CardSeries );
					$Card.hide();
					$CardTitle.hide();
					$CardSeries.hide();
					$CardArea.append( $Card );
					$rgCards.push( $Card );
				}

				// make sure we show it for a moment, even if the ajax gets back early
				var tsNow = (new Date()).getTime();
				var msToWait = Math.max( nMSBeforeStart + 1500 - (tsNow - tsStart), 1 );
				window.setTimeout( function() {

					var nNextTimeout = 0;

					for ( var i = 0; i < $CardBacks.length; i++ )
					{
						window.setTimeout( (function(iCard) { return function() {
							$J($CardBacks[iCard]).addClass('start_flip_card');

							if ( iCard < $rgCards.length )
							{
								$rgCards[iCard].addClass( 'start_flip_card');
								$rgCards[iCard].show();
								window.setTimeout( function() {
									$rgCards[iCard].children('.booster_unpack_card_title').fadeIn( 500 );
								}, 750 );
							}
						}; })(i), nNextTimeout );
						nNextTimeout += 500;
					}

					window.setTimeout( function() {
						$PostUnpackActions.fadeIn( 500 );
						Modal.GetContent().find('.newmodal_close').fadeIn( 500 );
						Modal.SetDismissOnBackgroundClick( true );
						ReloadCommunityInventory();
					}, nNextTimeout - 250 );

				}, msToWait );
			}

		}).fail( function() {
			Modal && Modal.Dismiss();
			ShowAlertDialog( 'Unpacking booster pack', 'Sorry, there was a problem unpacking this booster pack.  It may have already been unpacked.  Please try again later.' );
			ReloadCommunityInventory();
		});
}

function OpenBooster( appid, itemid )
{
	var Modal = BuildBoosterModal( 'Unpacking booster pack', appid );

	ExecuteBoosterUnpack( Modal, appid, itemid, 1000 );

	//Modal.always( function() { ShowDialog( 'Unpacking booster pack', 'Reloading...' ); window.location.reload(); } );
}

function ShowBoosterEligibility()
{
	var $Content = $J('<div class="group_invite_throbber"><img src="https://steamcommunity-a.akamaihd.net/public/images/login/throbber.gif"></div>');

	var Modal = ShowAlertDialog( 'Booster Pack Eligibility', $Content );

	$J.get( g_strProfileURL + '/ajaxgetboostereligibility/' )
		.done( function( html ) {
			g_$BoosterModalContent = $J(html);
			$Content.replaceWith( g_$BoosterModalContent );
			Modal.AdjustSizing();
		})
		.fail( function() {
			Modal.Dismiss();
			ShowAlertDialog( 'Booster Pack Eligibility', 'There was a problem checking your booster pack eligibility.  Please try again later.' );
		});
}




	function GrindIntoGoo( appid, contextid, itemid )
	{
		var rgAJAXParams = {
			sessionid: g_sessionID,
			appid: appid,
			assetid: itemid,
			contextid: contextid
		};
		var strActionURL = g_strProfileURL + "/ajaxgetgoovalue/";

		$J.get( strActionURL, rgAJAXParams ).done( function( data ) {
			var $Content = $J(data.strHTML);
			var strDialogTitle = data.strTitle;
			ShowConfirmDialog( strDialogTitle, $Content ).done( function() {
				strActionURL = g_strProfileURL + "/ajaxgrindintogoo/";
				rgAJAXParams.goo_value_expected = data.goo_value;

				$J.post( strActionURL, rgAJAXParams).done( function( data ) {
					ShowAlertDialog( strDialogTitle, data.strHTML );
					ReloadCommunityInventory();
				}).fail( function() {
					ShowAlertDialog( strDialogTitle, 'There was an error communicating with the network. Please try again later.' );
				});
			});
		});
	}

	function PackGameGooIntoBarrel( appid, itemid )
	{
		var rgAJAXParams = {
			sessionid: g_sessionID,
			appid: appid,
			assetid: itemid,
			goo_denomination_in: 1,
			goo_amount_in: 1000,
			goo_denomination_out: 1000,
			goo_amount_out_expected: 1
		};
		var strActionURL = g_strProfileURL + "/ajaxexchangegoo/";

		$J.post( strActionURL, rgAJAXParams).done( function( data ) {
				if ( data.success == 78 )
				{
					ShowAlertDialog( 'Action Failed', 'You need at least 1000 Gems to make a Sack' );
				}
				else
				{
					ShowAlertDialog( 'Success', 'The new Sack has been added to your inventory.' );		// localize
					ReloadCommunityInventory();
				}
			}).fail( function() {
				ShowAlertDialog( 'Action Failed', 'There was an error communicating with the network. Please try again later.' );
			});
	}

	function UnpackGameGooFromBarrel( appid, itemid )
	{
		var rgAJAXParams = {
			sessionid: g_sessionID,
			appid: appid,
			assetid: itemid,
			goo_denomination_in: 1000,
			goo_amount_in: 1,
			goo_denomination_out: 1,
			goo_amount_out_expected: 1000
		};
		var strActionURL = g_strProfileURL + "/ajaxexchangegoo/";

		$J.post( strActionURL, rgAJAXParams).done( function( data ) {
				ShowAlertDialog( 'Success', '%s Gems received from Sack.'.replace( /%s/, v_numberformat( 1000 ) ) );		// localize
				ReloadCommunityInventory();
			}).fail( function() {
				ShowAlertDialog( 'Action Failed', 'There was an error communicating with the network. Please try again later.' );
			});
	}

	function EnableProfileModifier( appid, itemid, enabled )
	{
		var rgAJAXParams = {
			sessionid: g_sessionID,
			appid: appid,
			assetid: itemid,
			enabled: enabled
		};
		var strActionURL = g_strProfileURL + "/ajaxenableprofilemodifier/";

		$J.post( strActionURL, rgAJAXParams).done( function( data ) {
				if ( enabled )
					ShowAlertDialog( 'Enable Profile Modifier', 'This item has been applied to your profile.' );
				else
					ShowAlertDialog( 'Disable Profile Modifier', 'This item has been removed from your profile.' );

				ReloadCommunityInventory();
			}).fail( function() {
				ShowAlertDialog( 'Action Failed', 'There was an error communicating with the network. Please try again later.' );
			});
	}





