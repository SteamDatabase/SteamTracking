
//-----------------------------------------------------------------------------
// Badge crafting
//-----------------------------------------------------------------------------

var g_CraftModal;
var g_rgBadgeCraftData = null;
var g_bBadgeCraftAnimationReady = false;

function Profile_CraftGameBadge( profileUrl, appid, series, border_color, levels )
{
	var submitUrl = profileUrl + "/ajaxcraftbadge/";
	g_rgBadgeCraftData = null;
	g_bBadgeCraftAnimationReady = false;
	levels = levels || 1;

	// fire off the ajax request to craft the badge
	$J.post(submitUrl,{ appid: appid, series: series, border_color: border_color, levels: levels, sessionid: g_sessionID } )
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
	g_CraftModal.GetContent().css( 'overflowX', 'hidden' );

	g_CraftModal.AdjustSizing();
	g_CraftModal.SetRemoveContentOnDismissal( false );

	$Throbber.addClass( 'loop_throbber_hide' );
	$Throbber.show();

	// show the right title
	$J('#badge_craft_header_crafting').show();
	$J('#badge_craft_header_crafted').hide();
	$J('#badge_completed').hide();

	// spend about 4 seconds animating the card spin - this used to vary based on # of cards in set, this
	//	value is equivalent to the time for an 8 card set the old way
	var nCardAnimationTiming = 4000 / $J('#card_image_set').children().length;

	if ( levels > 1 )
	{
		// for multi-level crafting, show more cards - up to 5 sets.  The animation will speed up accordingly
		//	so the total time taken is the same.
		var nAnimLevel = Math.min( levels, 5 );
		nCardAnimationTiming = nCardAnimationTiming / nAnimLevel;
		var rgClones = [];
		for ( var i = 1; i < nAnimLevel; i++ )
		{
			rgClones.push( $J('#card_image_set').children().clone() );
		}
		for( var i = 0; i < rgClones.length; i++ )
			$J('#card_image_set').append( rgClones[i] );
	}

	// shuffle the order the cards will appear in
	$J('#card_image_set').append( v_shuffle( $J('#card_image_set').children().detach() ) );

	// start the animation for each card, staggered
	var iCard = 0;
	$J('#card_image_set').children().each( function() {
		var $Card = $J(this);
		$Card.hide();
		$Card.removeClass( 'card_craft_combined' );

		window.setTimeout( function() {
			$Card.show();
			$Card.addClass( 'card_craft_combined' );
		}, iCard++ * nCardAnimationTiming );
	} );

	// we start the next phase half a second before the animation would end, so we can animate the badge appearing on top.
	var nAnimationTimeMS = ( ( iCard - 1 ) * nCardAnimationTiming ) + (4000 - 500);
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

	$Badge.show();
	$BadgeAnimation.addClass('show');
	window.setTimeout( function() {
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

	}, 500 );
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
	if ( rgRewardData.economy_hover_data )
	{
		$Icon.attr( 'data-economy-item', rgRewardData.economy_hover_data );
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

function ReloadCommunityInventory( itemid )
{
	if ( typeof UserYou != 'undefined' )
		UserYou.ReloadInventory( 753, 6, itemid );
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

	var $BtnFoilBadgeProgress = $J('<a/>', {'class': 'btn_grey_white_innerfade btn_medium foil_badge_progress', 'href': g_strProfileURL + '/gamecards/' + appid + '/?border=1' } );
	$BtnFoilBadgeProgress.append( $J('<span/>').text('View foil badge progress') );
	$BtnFoilBadgeProgress.hide();

	var $BtnClose = $J('<div/>', {'class': 'btn_grey_white_innerfade btn_medium booster_unpack_closebtn' } );
	$BtnClose.append( $J('<span/>').text('Close') );

	$PostUnpackActions.append( $BtnBadgeProgress, $BtnFoilBadgeProgress, $BtnClose );
	$PostUnpackActions.hide();

	$Content.append( $TitleArea, $CardArea, $PostUnpackActions );

	var Modal = ShowDialog( strTitle, $Content, { bExplicitDismissalOnly: true } );

	$BtnClose.click( function() { Modal.Dismiss(); } );

	//var $ImgBooster = $J('<img/>', {'class': 'booster_unpack_booster', src: 'https://community.fastly.steamstatic.com/economy/boosterpack/' + appid + '?l=' + g_strLanguage } );
	//$CardArea.append( $ImgBooster );

	var $Booster = $J('<div/>', {'class': 'booster_unpack_booster' } );
	var $rgCardBacks = [];
	for ( var i = 0; i < CARDS_PER_BOOSTER; i++ )
	{
		var $CardBack = $J('<div/>', {'class': 'booster_unpack_card card_back card' + (i+1) } );
		var $ImgFlipGradient = $J('<div/>', {'class': 'booster_unpack_card_image_flip_gradient'});
		var $Img = $J('<img/>', {'class': 'booster_unpack_card_image', src: 'https://community.fastly.steamstatic.com/economy/boosterpack/' + appid + '?l=english&single=1&v=2' } );
		$CardBack.append( $Img, $ImgFlipGradient );
		$Booster.append( $CardBack );
		$rgCardBacks.push( $CardBack );
	}

	var $ImgRibbon = $J('<img/>', {'class': 'booster_unpack_ribbon', 'src': 'https://community.fastly.steamstatic.com/economy/boosterpackribbon/?l=english' });
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
						$PostUnpackActions.find('.foil_badge_progress').show();

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
	var $Content = $J('<div class="group_invite_throbber"><img src="https://community.fastly.steamstatic.com/public/images/login/throbber.gif"></div>');

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

function ActivateCommunityItemConsumable( unAppID, rgParams, unItemType, ulAssetID )
{
	var rgAJAXParams = {
		sessionid: g_sessionID,
		appid: unAppID,
		item_type: unItemType,
		assetid: ulAssetID,
		actionparams: V_ToJSON( rgParams )
	};
	var strActionURL = g_strProfileURL + "/ajaxactivateconsumable/";

	$J.post( strActionURL, rgAJAXParams).done( function( data ) {
		var strDialogTitle = data.strTitle;

		if ( data.bActivated )
		{
			ShowAlertDialog( strDialogTitle, data.strHTML );
			ReloadCommunityInventory( ulAssetID );
		}
		else
		{
			var $Content = $J(data.strHTML);
			ShowConfirmDialog( strDialogTitle, $Content ).done( function() {

				$Content.find('select').each( function() {
					rgAJAXParams[ $J(this).attr('name') ] = $J(this).val();
				});
				rgAJAXParams['activate'] = 1;

				$J.post( strActionURL, rgAJAXParams).done( function( data ) {
					ShowAlertDialog( strDialogTitle, data.strHTML );
					ReloadCommunityInventory( ulAssetID );
				}).fail( function() {
					ShowAlertDialog( strDialogTitle, 'There was an error using your item.  The item may have already been used.  Please try again later.' );
				});
			});
		}
	}).fail( function() {
		ShowAlertDialog( 'Activate Item', 'There was an error communicating with the network. Please try again later.' );
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
				ReloadCommunityInventory( itemid );
			}).fail( function( xhr ) {
				if ( xhr.responseJSON && xhr.responseJSON.message )
				{
					ShowAlertDialog( 'Action Failed', xhr.responseJSON.message );
				}
				else
				{
					ShowAlertDialog( 'Action Failed', 'There was an error communicating with the network. Please try again later.' );
				}
			});
		});
	}).fail( function( xhr ) {
		if ( xhr.responseJSON && xhr.responseJSON.message )
		{
			ShowAlertDialog( 'Action Failed', xhr.responseJSON.message );
		}
		else
		{
			ShowAlertDialog( 'Action Failed', 'There was an error communicating with the network. Please try again later.' );
		}
	});
}

function ViewBoosterPackStore()
{
	window.location = 'https://steamcommunity.com/' + '/tradingcards/boostercreator/';
}

CGameGooExchangeDialog = {

	m_bInitialized: false,
	m_appid: 0,
	m_currency: null,
	m_nSourceDenomination: 0,
	m_nTargetDenomination: 0,
	m_fnDocumentKeyHandler: null,
	m_slider: null,
	m_elSliderHandle: null,
	m_elSliderProgress: null,
	m_elSliderCount: null,
	m_bIgnoreSlider: false,

	Initialize: function() {
		var oDialog = this;
		$J('#goo_exchange_dialog_accept').click( function( event ) { oDialog.OnAccept( event ); } );
		$J('#goo_exchange_dialog_cancel').click( function( event ) { oDialog.OnCancel( event ); } );
		$J('#goo_exchange_input').keypress( function( event ) { oDialog.OnInputKeyPress( event ) } );
		$J('#goo_exchange_input').keyup( function( event ) { oDialog.OnInputKeyUp( event ) } );

		$J('#goo_exchange_dialog').css( 'visibility', 'hidden' );
		$J('#goo_exchange_dialog').show();

		this.m_elSliderHandle = $J('#goo_exchange_slider .handle');
		this.m_slider = new CSlider( $J('#goo_exchange_slider'), this.m_elSliderHandle, {
			min: 0,
			max: 1,
			increment: 1,
			fnOnChange: function( value, bInDrag ) { oDialog.OnSliderChange( value, bInDrag ) }
		});
		this.m_elSliderProgress = $J('#goo_exchange_slider_ctn .slider_progress');
		this.m_elSliderCount = $J('#goo_exchange_slider_count');
		$J('#goo_exchange_dialog').hide();
		$J('#goo_exchange_dialog').css( 'visibility', '' );
		this.m_bInitialized = true;
	},

	Show: function ( appid, currency, nSourceDenomination, nTargetDenomination, strAction ) {

		if ( !this.m_bInitialized )
			this.Initialize();

		this.m_appid = appid;
		this.m_currency = currency;
		this.m_nSourceDenomination = nSourceDenomination;
		this.m_nTargetDenomination = nTargetDenomination;

		var description = currency.description || currency;

		this.m_slider.SetIncrement( nTargetDenomination );
		$J('#goo_exchange_dialog_title').text( strAction );

		$J('.goo_exchange_dialog_currencyname').text( description.name );

		var amount = currency.amount > 0 ? currency.amount : 1;

		var nMaxOut = Math.floor( amount / nTargetDenomination );
		if ( nMaxOut <= 0 )
		{
			ShowAlertDialog( 'Action Failed', 'You do not have enough ' + description?.name?.escapeHTML() + '.' );
			return;
		}

		$J('#goo_exchange_input').val( amount );

		var iconUrl = ImageURL( description.icon_url, 42, '42f' );
		$J('#goo_exchange_dialog_symbol1').attr( 'src', iconUrl );
		$J('#goo_exchange_dialog_symbol2').attr( 'src', iconUrl );

		$J('#goo_exchange_input').css( 'color', description.name_color ? '#' + description.name_color : '' );
		$J('#goo_exchange_dialog_remaining_display').css( 'color', description.name_color ? '#' + description.name_color : '' );

		$J('#goo_exchange_dialog_error').text('');

		var oDialog = this;
		this.m_fnDocumentKeyHandler = function( event ) { oDialog.OnDocumentKeyPress( event ) };
		$J(document).bind( 'keydown', this.m_fnDocumentKeyHandler );

		showModal( 'goo_exchange_dialog', true );

		this.m_slider.SetRange( 0, nMaxOut * nTargetDenomination, 0 );
		this.OnSliderChange( 0 );

		this.UpdateRemainingCurrencyDisplay();

		$J('#goo_exchange_input').focus();
	},

	UpdateRemainingCurrencyDisplay: function() {
		var inputValue = this.GetInputValueAsInt();
		var nAmount = inputValue;

		var nDisplayAmount = this.m_currency.amount;
		if ( nAmount <= this.m_currency.amount )
			nDisplayAmount = this.m_currency.amount - nAmount;

		$J('#goo_exchange_dialog_remaining_display').text( v_numberformat( nDisplayAmount ) );
	},

	DisplayError: function( error ) {
		$J('#goo_exchange_dialog_error').text( error );
		$J('#goo_exchange_dialog_error').css( 'color', '#ff0000' );
	},

	Dismiss: function() {
		$J(document).unbind( 'keydown', this.m_fnDocumentKeyHandler );
		hideModal( 'goo_exchange_dialog' );
	},

	GetInputValueAsInt: function() {
		var nAmount;
		var strAmount = $J('#goo_exchange_input').val();

		if ( !strAmount )
		{
			return 0;
		}

		nAmount = parseInt( strAmount.replace( /[,.]/g, '' ) );

		nAmount = Math.max( nAmount, 0 );
		return nAmount;
	},

	OnAccept: function( event ) {
		event.preventDefault();

		var inputValue = $J('#goo_exchange_input').val();
		if ( ! inputValue.match( /^[0-9,.]*$/ ) )
		{
			this.DisplayError( 'Please enter a valid amount above.' );
			return;
		}

		var xferAmount = this.GetInputValueAsInt();
		if ( xferAmount <= 0 )
		{
			this.Dismiss();
			event.preventDefault();
			return;
		}

		var nExpectedOut = (xferAmount * (this.m_nSourceDenomination / this.m_nTargetDenomination) );
		if ( parseInt(nExpectedOut) != nExpectedOut )
		{
			var nRequiredMultiple = this.m_nTargetDenomination / this.m_nSourceDenomination;
			this.DisplayError( 'You must enter a multiple of %1$s.'.replace( '%1$s', v_numberformat( nRequiredMultiple ) ) );
			return;
		}

		if ( xferAmount > this.m_currency.amount )
		{
			this.DisplayError( 'You do not have enough ' + this.m_currency.name + '.' );
			return;
		}

		nExpectedOut = parseInt(nExpectedOut);
		var currency = this.m_currency;
		var nSourceDenomination = this.m_nSourceDenomination;
		var nTargetDenomination = this.m_nTargetDenomination;

		var rgAJAXParams = {
			sessionid: g_sessionID,
			appid: this.m_appid,
			assetid: currency.assetid || currency.id,
			goo_denomination_in: nSourceDenomination,
			goo_amount_in: xferAmount,
			goo_denomination_out: nTargetDenomination,
			goo_amount_out_expected: nExpectedOut
		};
		var strActionURL = g_strProfileURL + "/ajaxexchangegoo/";

		$J.post( strActionURL, rgAJAXParams).done( function( data ) {
				if ( data.success == 78 )
				{
					ShowAlertDialog( 'Action Failed', 'You do not have enough %s.'.replace( '%1$s', currency.name ) );
				}
				else if ( data.success == 1 )
				{
					if ( nSourceDenomination == 1 && nTargetDenomination == 1000 )
					{
						if ( nExpectedOut == 1 )
						{
							ShowAlertDialog( 'Success', 'One new Sack of Gems has been added to your inventory.' );
						}
						else
						{
							ShowAlertDialog( 'Success', '%1$s new Sacks of Gems have been added to your inventory.'.replace( '%1$s', v_numberformat( nExpectedOut ) ) );
						}
					}
					else if ( nSourceDenomination == 1000 && nTargetDenomination == 1 )
					{
						ShowAlertDialog( 'Success', '%s Gems received from Sack.'.replace( '%s', v_numberformat( nExpectedOut ) ) );
					}
					else
					{
						ShowAlertDialog( 'Success', '%1$s %2$s successfully exchanged.'.replace( '%1$s', v_numberformat( xferAmount ) ).replace( '%2$s', currency.name ) );
					}

					ReloadCommunityInventory();
				}
			}).fail( function() {
				ShowAlertDialog( 'Action Failed', 'There was an error communicating with the network. Please try again later.' );
			});


		this.Dismiss();
	},

	OnCancel: function( event ) {
		this.Dismiss();
		event.preventDefault();
	},

	OnDocumentKeyPress: function( event ) {
		if ( event.keyCode == Event.KEY_ESC )
		{
			this.Dismiss();
			event.preventDefault();
		}
	},

	OnInputKeyPress: function( event ) {
		if ( event.keyCode == Event.KEY_RETURN )
		{
			this.OnAccept( event );
		}
	},

	OnInputKeyUp: function( event ) {

		var value = this.GetInputValueAsInt();

		this.UpdateRemainingCurrencyDisplay();

		this.m_bIgnoreSlider = true;
		this.m_slider.SetValue( value );
		this.m_bIgnoreSlider = false;
		this.UpdateSliderNumberDisplays( value );
	},

	UpdateSliderNumberDisplays: function( value )
	{
		var flooredValue = Math.floor( value );
		var strValue = v_numberformat( flooredValue );

		var nProgressPx = parseInt( value * this.m_slider.m_flRatio );
		var nMaxWidth = this.m_elSliderProgress.parent().find( '.slider_background' ).width();
		if ( nProgressPx > nMaxWidth )
		{
			nProgressPx = nMaxWidth;
		}

		this.m_elSliderProgress.css( 'width', nProgressPx + 'px' );

		this.m_elSliderCount.css( 'left', (nProgressPx - 40) + 'px' );
		this.m_elSliderCount.text( strValue );
	},

	SetInputValuesFromSlider: function( value )
	{
		var flooredValue = Math.floor( value );
		var strValue = v_numberformat( flooredValue );
		$J('#goo_exchange_input').val( strValue.escapeHTML() );
		this.UpdateRemainingCurrencyDisplay();
	},

	OnSliderChange: function( value, bInDrag )
	{
		if ( this.m_bIgnoreSlider )
			return;
		this.m_bIgnoreSlider = true;

		this.UpdateSliderNumberDisplays( value );
		this.m_slider.SetValue( value );

		this.SetInputValuesFromSlider( value );

		this.m_bIgnoreSlider = false;
	}
};

	function PackGameGooIntoBarrel( appid, itemid, nSourceDenomination, nTargetDenomination )
	{
		if ( $J('#goo_exchange_dialog').length == 0 )
		{
			$J.get( 'https://steamcommunity.com/tradingcards/gooexchangedialog?l=english', function( data ) {
				$J(document.body).append(data);

				CGameGooExchangeDialog.Show( appid,
						UserYou.findAsset( 753, 6, itemid ),
						nSourceDenomination,
						nTargetDenomination,
						'Pack Gems into a Sack'
				);
			} );
		}
		else
		{
			CGameGooExchangeDialog.Show( appid,
					UserYou.findAsset( 753, 6, itemid ),
					nSourceDenomination,
					nTargetDenomination,
					'Pack Gems into a Sack'
			);
		}
	}

	function UnpackGameGooFromBarrel( appid, itemid, nSourceDenomination, nTargetDenomination )
	{
		if ( $J('#goo_exchange_dialog').length == 0 )
		{
			$J.get( 'https://steamcommunity.com/tradingcards/gooexchangedialog?l=english', function( data ) {
				$J(document.body).append(data);

				CGameGooExchangeDialog.Show( appid,
						UserYou.findAsset( 753, 6, itemid ),
						nSourceDenomination,
						nTargetDenomination,
						'Unpack Gems from Sack'
				);
			} );
		}
		else
		{
			CGameGooExchangeDialog.Show( appid,
					UserYou.findAsset( 753, 6, itemid ),
					nSourceDenomination,
					nTargetDenomination,
					'Unpack Gems from Sack'
			);
		}
	}

	function EquipOnSteamProfile()
	{
		top.location.href = g_strProfileURL + "/edit/";
	}


CBoosterCreatorPage = {

	sm_rgBoosterData: {},
	sm_flUserGooAmount: 0,
	sm_flUserTradableGooAmount: 0,
	sm_flUserUntradableGooAmount: 0,
	sm_strBoosterOptionTemplate: '',

	Init: function( rgBoosterCatalog, flUserGooAmount, flUserTradableGooAmount, flUserUntradableGooAmount, strBoosterOptionTemplate, rgSuggestedApps )
	{
		CBoosterCreatorPage.sm_flUserGooAmount = flUserGooAmount;
		CBoosterCreatorPage.sm_flUserTradableGooAmount = flUserTradableGooAmount;
		CBoosterCreatorPage.sm_flUserUntradableGooAmount = flUserUntradableGooAmount;
		CBoosterCreatorPage.sm_strBoosterOptionTemplate = strBoosterOptionTemplate;

		var k_cInitialSetSize = 6;

		var rgInitialBoosterSet = [];
		var rgAvailableAppIDs = [];

		for ( var i = 0; i < rgBoosterCatalog.length; i++ )
		{
			var rgBoosterData = rgBoosterCatalog[i];

			CBoosterCreatorPage.sm_rgBoosterData[ rgBoosterData.appid ] = rgBoosterData;
			rgAvailableAppIDs.push( rgBoosterData.appid );
		}

		if ( rgSuggestedApps && rgSuggestedApps.length )
		{
			for ( var i = 0; i < rgSuggestedApps.length && rgInitialBoosterSet.length < k_cInitialSetSize; i++ )
			{
				if ( rgAvailableAppIDs.indexOf( rgSuggestedApps[i] ) >= 0 )
					rgInitialBoosterSet.push( rgSuggestedApps[i] );
			}
		}

		while ( rgInitialBoosterSet.length < k_cInitialSetSize && rgAvailableAppIDs.length > 0 )
		{
			var iGuess = Math.floor( Math.random() * rgAvailableAppIDs.length );

			var i = iGuess;
			do
			{
				i = ( i + 1 ) % rgAvailableAppIDs.length;
				if ( rgInitialBoosterSet.indexOf( rgAvailableAppIDs[i] ) < 0 )
				{
					rgInitialBoosterSet.push( rgAvailableAppIDs[i] );
					break;
				}
			} while ( i != iGuess );

			// exhausted all options
			if ( i == iGuess )
				break;
		}

		var $Options = $J('.booster_options' );
		for ( var i = 0 ; i < rgInitialBoosterSet.length && i < k_cInitialSetSize; i++ )
		{
			var $Option = CBoosterCreatorPage.CreateBoosterOption( rgInitialBoosterSet[i], true );
			$Options.append( $Option );
		}

		var $SelectBox = $J( '#booster_game_selector' );
		rgBoosterCatalog.sort( function( a, b ) {
			var aname = a.name.toLowerCase();
			var bname = b.name.toLowerCase();
			if ( aname < bname )
				return -1;
			else if ( aname > bname )
				return 1;
			else
				return 0;
		} );
		for( var i = 0; i < rgBoosterCatalog.length; i++ )
		{
			var rgBoosterData = rgBoosterCatalog[i];
			var $SelectOption = $J('<option/>', {value: rgBoosterData.appid} ).html( rgBoosterData.name );

			if ( rgBoosterData.unavailable || rgBoosterData.price > CBoosterCreatorPage.sm_flUserGooAmount )
			{
				$SelectOption.addClass( 'unavailable' );
			}
			else
			{
				$SelectOption.addClass( 'available' );
			}

			$SelectBox.append( $SelectOption );
		}

		var $SelectTarget = $J('#booster_game_selector_booster');
		if ( flUserUntradableGooAmount > 0.99 )
		{
			$SelectTarget.css( 'text-align', 'left' );
		}

		$SelectBox.change( function() {
			$SelectTarget.children().detach();
			var $BoosterOption = $SelectBox.val() ? CBoosterCreatorPage.CreateBoosterOption( $SelectBox.val(), false ) : null;

			if ( $BoosterOption )
			{
				$BoosterOption.find('input').each( function() { $J(this).prop( 'checked', false ); } );
				$SelectTarget.append( $BoosterOption );
				window.location.replace( '#' + $SelectBox.val() );
			}
			else
			{
				if ( history && history.replaceState )
					history.replaceState( '', document.title, window.location.pathname + window.location.search );
				else
					window.location.replace( '#' );
			}
		});

		$J(window).on('hashchange', function() {
			if ( window.location.hash.length > 1 )
			{
				var nAppID = parseInt( window.location.hash.substr(1) );
				if ( nAppID )
					$SelectBox.val( nAppID ).change();
			}
		});
		$J(window).trigger('hashchange');

	},

	UpdateGooDisplay: function( nGooAmount, nTradableGooAmount, nUnTradableGooAmount )
	{
		CBoosterCreatorPage.sm_flUserGooAmount = parseFloat( nGooAmount );
		CBoosterCreatorPage.sm_flUserTradableGooAmount = parseFloat( nTradableGooAmount );
		CBoosterCreatorPage.sm_flUserUntradableGooAmount = parseFloat( nUnTradableGooAmount );
		$J('.goovalue').text( v_numberformat( nGooAmount ) );
		$J('.untradablegoovalue').text( v_numberformat( nUnTradableGooAmount ) );
		$J('.booster_option').each( function() { CBoosterCreatorPage.ToggleActionButton( $J(this) ); } );

		if ( nUnTradableGooAmount == 0 )
		{
			$J('.goo_untradable_note').hide();
		}
		else
		{
			$J('.goo_untradable_note').show();
		}
	},

	RefreshSelectOptions: function()
	{
		var $Select = $J( '#booster_game_selector' );
		$Select.children().each( function() {
			var $Option = $J(this);
			var appid = $Option.val();
			if ( appid && CBoosterCreatorPage.sm_rgBoosterData[appid] && $Option.hasClass( 'available' ) )
			{
				var rgBoosterData = CBoosterCreatorPage.sm_rgBoosterData[appid];
				if ( rgBoosterData['unavailable'] ||
					rgBoosterData.price > CBoosterCreatorPage.sm_flUserGooAmount )
					$Option.removeClass( 'available' ).addClass( 'unavailable' );
			}
		});
	},


	ExecuteCreateBooster: function( rgBoosterData, nTradabilityPreference )
	{
		$J.post( 'https://steamcommunity.com/tradingcards/ajaxcreatebooster/', {
			sessionid: g_sessionID,
			appid: rgBoosterData.appid,
			series: rgBoosterData.series,
			tradability_preference: nTradabilityPreference
		}).done( function( data ) {

			// this will show the booster along with unpack actions
			CBoosterCreatorPage.ShowBoosterCreatedDialog( data.purchase_result );

			// update display of page elements
			CBoosterCreatorPage.UpdateGooDisplay( data.goo_amount, data.tradable_goo_amount, data.untradable_goo_amount );
			rgBoosterData.unavailable = true;
			if ( rgBoosterData.$Option )
			{
				CBoosterCreatorPage.ToggleActionButton( rgBoosterData.$Option );
			}
			if ( rgBoosterData.$MiniOption )
			{
				CBoosterCreatorPage.ToggleActionButton( rgBoosterData.$MiniOption );
			}

			// gray out packs we can't afford anymore
			CBoosterCreatorPage.RefreshSelectOptions();

		}).fail( function( jqXHR ) {
			ShowAlertDialog( 'Booster Pack Creator', 'There was a problem creating your booster pack.  Please try again later.' );

			var data = $J.parseJSON( jqXHR.responseText );
			if ( data && typeof( data.goo_amount ) != 'undefined' )
				CBoosterCreatorPage.UpdateGooDisplay( data.goo_amount, data.tradable_goo_amount, data.untradable_goo_amount );
		});
	},

	ShowBoosterCreatedDialog: function( rgPurchaseResults )
	{
		var Modal = BuildBoosterModal( 'Booster Pack Creator', rgPurchaseResults.appid );

		var $CloseBtn = Modal.GetContent().find('.newmodal_close').show();
		Modal.SetDismissOnBackgroundClick( true );

		var $Content = Modal.GetContent().find( '.booster_unpack_dialog' );
		var $UnpackActions = $J('<div/>', {'class': 'booster_creator_actions' } );

		var $BtnUnpack = $J('<div/>', {'class': 'btn_grey_grey btn_small' } );
		$BtnUnpack.append( $J('<span/>').text('Unpack it now') );
		$BtnUnpack.click( function() {
			$UnpackActions.slideUp( 'fast' );
			$CloseBtn.hide();
			Modal.SetDismissOnBackgroundClick( false );
			ExecuteBoosterUnpack( Modal, rgPurchaseResults.appid, rgPurchaseResults.communityitemid, 0 );
		});

		var $BtnInventory = $J('<a/>', {'class': 'btn_grey_grey btn_small', 'href': g_strProfileURL + '/inventory/#753_6_' + rgPurchaseResults.communityitemid  } );
		$BtnInventory.append( $J('<span/>').text('View my Inventory') );

		$UnpackActions.append( $J('<div/>').append($BtnUnpack), $J('<div/>').append($BtnInventory) );
		$Content.append( $UnpackActions );
	},


	CreateBoosterOption: function( appid, bMiniOption )
	{
		var rgBoosterData = CBoosterCreatorPage.sm_rgBoosterData[ appid ];

		if ( !rgBoosterData )
			return null;
		else if ( rgBoosterData.$Option && !bMiniOption )
		{
			CBoosterCreatorPage.ToggleActionButton( rgBoosterData.$Option );
			return rgBoosterData.$Option;
		}

		var strTemplate = CBoosterCreatorPage.sm_strBoosterOptionTemplate.replace( /{[^}]+}/g, function( match ) {
			switch( match.substr( 1, match.length - 2 ) )
			{
				case 'appid':
					return rgBoosterData.appid;
				case 'appname':
					return rgBoosterData.name.replace( /&/g, '&amp;' );	// aready escaped, but needs one more level for tooltip
				case 'price':
					return v_numberformat( rgBoosterData.price );
				case 'img_params':
					return '?l=english' + ( bMiniOption ? '&size=120x' : '' );
				default:
					return match;
			}
		});

		var $Option = $J(strTemplate);
		$Option.data( 'appid', rgBoosterData.appid );

		var $ActionBtn = $Option.find( '.btn_makepack' );
		if ( bMiniOption )
		{
			$Option.addClass( 'minioption ');
			$Option.find( '.booster_option_action' ).hide();
			$Option.click( function() {
				var $SelectBox = $J( '#booster_game_selector' );
				$SelectBox.val( appid );
				$SelectBox.change();
			})
		}
		else
		{
			$ActionBtn.click( function() {
				if ( !$ActionBtn.hasClass( 'btn_disabled') )
				{
					var nTradabilityPreference = 2;

					// If we asked the user to pick, get the user's selection
					var $TradabilitySelection = $Option.find( '.booster_option_tradability_preference' );
					if ( $TradabilitySelection.is(":visible") )
					{
						$CheckedPreference = $TradabilitySelection.find("input[name=booster_tradability_preference]:checked")
						if ( $CheckedPreference.length != 0 )
						{
							nTradabilityPreference = $CheckedPreference.val();
						}
						else
						{
							nTradabilityPreference = 0;
						}
					}

					if ( nTradabilityPreference == 0 )
					{
						ShowAlertDialog( 'Booster Pack Creator', 'You must select whether you want to create a tradable booster pack or untradable booster pack.' );
					}
					else
					{
						var sConfirmText = 'Are you sure you want to spend %1$s Gems to create a %2$s Booster Pack?'.replace( /%1\$s/,
								v_numberformat( rgBoosterData.price )
						).replace( /%2\$s/, rgBoosterData.name );


						if ( nTradabilityPreference == 1 && CBoosterCreatorPage.sm_flUserTradableGooAmount < rgBoosterData.price )
						{
							// Some untradable gems will be used
							// The UI should prevent this case since the "Make tradable pack" option will be disabled, but here it is anyways.
							sConfirmText += '<br><br>You only have %1$s tradable Gems, so some of your untradable Gems will be used to create this booster. The booster will have the same trade restriction as the untradable Gems that are used to create it.'.replace( /%1\$s/,
									v_numberformat( parseInt( CBoosterCreatorPage.sm_flUserTradableGooAmount ) )
							);
						}

						if ( nTradabilityPreference == 3 && CBoosterCreatorPage.sm_flUserUntradableGooAmount < rgBoosterData.price )
						{
							// Some tradable gems will be used
							sConfirmText += '<br><br>You only have %1$s untradable Gems, so some of your tradable Gems will be used to create this booster.'.replace( /%1\$s/,
									v_numberformat( parseInt( CBoosterCreatorPage.sm_flUserUntradableGooAmount ) )
							);
						}

						ShowConfirmDialog( 'Booster Pack Creator',
								sConfirmText,
								'Make Pack'
						).done( function ()
								{
									CBoosterCreatorPage.ExecuteCreateBooster( rgBoosterData, nTradabilityPreference );
								}
						);
					}
				}
			});
		}

		CBoosterCreatorPage.ToggleActionButton( $Option );

		if ( bMiniOption )
			rgBoosterData.$MiniOption = $Option;
		else
			rgBoosterData.$Option = $Option;

		return $Option;
	},


	ToggleActionButton: function( $Option )
	{
		var $ActionBtn = $Option.find( '.btn_makepack' );
		var $TradabilitySelection = $Option.find( '.booster_option_tradability_preference' );
		var bActionsShown = !($Option.hasClass("minioption"));
		var rgBoosterData = CBoosterCreatorPage.sm_rgBoosterData[ $Option.data('appid') ];
		if ( rgBoosterData && rgBoosterData.unavailable )
		{
			$ActionBtn.addClass( 'btn_disabled' );
			$TradabilitySelection.hide();
			if ( bActionsShown )
			{
				$Option.css( 'text-align', '' );
			}

			if ( rgBoosterData.available_at_time )
				$ActionBtn.data( 'community-tooltip', 'You will not be able to create another %1$s Booster Pack until %2$s.'.replace( /%1\$s/, rgBoosterData.name ).replace( /%2\$s/, rgBoosterData.available_at_time ) );
			else
				$ActionBtn.data( 'community-tooltip', 'You can only create one booster pack per game, per day.  Check back tomorrow to create another %s booster.'.replace( /%s/, rgBoosterData.name ) );
		}
		else
		{
			var nPrice = rgBoosterData.price;

			// Hide radio buttons if the user has no untradable gems
			if ( CBoosterCreatorPage.sm_flUserUntradableGooAmount < 0.01 )
			{
				$TradabilitySelection.hide();
				if ( bActionsShown )
				{
					$Option.css( 'text-align', '' );
				}
			}
			else
			{
				$TradabilitySelection.show();
				if ( bActionsShown )
				{
					$Option.css( 'text-align', 'left' );
				}
			}

			// Disable the tradable pack option if the user doesn't have enough
			$Option.find('.booster_tradability_preference_tradable').attr( 'disabled', nPrice > CBoosterCreatorPage.sm_flUserTradableGooAmount );

			if ( CBoosterCreatorPage.sm_flUserGooAmount >= nPrice )
			{
				$ActionBtn.removeClass( 'btn_disabled' );
				$ActionBtn.data( 'community-tooltip', '' );
			}
			else
			{
				$ActionBtn.addClass( 'btn_disabled' );
				$ActionBtn.data( 'community-tooltip', 'Not enough Gems.' );
			}
		}
	}


};


