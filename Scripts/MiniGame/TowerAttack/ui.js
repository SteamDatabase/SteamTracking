// <script>
"use strict";

//
// UI for the game scene.
//

window.CUI = function( game )
{
	this.m_Game = game;
	var s = new CScrollbar( $J('#upgradesscroll > div'), $J('#upgradescontainer > div') );
	s = new CScrollbar( $J('#activityscroll > div'), $J('#activitycontainer > div') );

	this.m_nActionLogTime = 0;
	this.m_bUIReady = false;

	this.m_predictorHP = new CEasingPrediction( CEasingLinear, 0, g_msTickRate, 0, 0 );


}

CUI.prototype.BuildUI = function()
{
	// One time selectors to avoid excessive dom lookups
	this.m_eleUpdateLogTemplate = $J('#activitytemplate');
	this.m_eleUpdateLogContainer = $J('#activitycontainer > div');

	this.m_eleActiveInLaneTemplate = $J('#activeinlanetemplate');
	this.m_eleActiveInLaneContainer = $J('#activeinlanecontainer');

	this.m_eleHealthBarTemplate = $J('#healthbartemplate');
	this.m_eleUIContainer = $J('#uicontainer');
	this.m_rgHealthBars = [];

	this.m_eleInfoHP = $J('#info_hp');
	this.m_eleHPBar = $J('div',$J('#health_bar'));
	this.m_eleInfoDPS = $J('#info_dps');
	this.m_eleInfoGold = $J('#info_gold');
	this.m_eleInfoLaneDPS = $J('#teamdps');
	this.m_eleInfoClickDamage = $J('#info_click');
	this.m_eleInfoLevel = $J('#level');
	this.m_eleInfoLevelTime = $J('#level_time');
	this.m_eleInfoGameTime = $J('#game_time');

	this.m_dialogWaitingForPlayers = $J('#waiting_for_players_dialog');
	this.m_dialogPlayerDied = $J('#player_dead_dialog');

	// Element cache
	this.m_rgElementCache = {};

	this.m_rgElementCache['teamhealth_0'] = $J('#teamhealth_0 > div');
	this.m_rgElementCache['teamhealth_1'] = $J('#teamhealth_1 > div');
	this.m_rgElementCache['teamhealth_2'] = $J('#teamhealth_2 > div');
	this.m_rgElementCache['teamhealth_3'] = $J('#teamhealth_3 > div');
	this.m_rgElementCache['teamhealth_4'] = $J('#teamhealth_4 > div');
	this.m_rgElementCache['teamhealth_5'] = $J('#teamhealth_5 > div');
	this.m_rgElementCache['teamhealth_6'] = $J('#teamhealth_6 > div');
	this.m_rgElementCache['teamhealth_7'] = $J('#teamhealth_7 > div');
	this.m_rgElementCache['teamhealth_8'] = $J('#teamhealth_8 > div');
	this.m_rgElementCache['teamhealth_9'] = $J('#teamhealth_9 > div');
	this.m_rgElementCache['lane_0_bar'] = $J('#lane0 .bar > div');
	this.m_rgElementCache['lane_1_bar'] = $J('#lane1 .bar > div');
	this.m_rgElementCache['lane_2_bar'] = $J('#lane2 .bar > div');
	this.m_rgElementCache['lane_0_icon'] = $J('#lane0 .lane_element > span');
	this.m_rgElementCache['lane_1_icon'] = $J('#lane1 .lane_element > span');
	this.m_rgElementCache['lane_2_icon'] = $J('#lane2 .lane_element > span');
	this.m_rgElementCache['lane0'] = $J('#lane0');
	this.m_rgElementCache['lane1'] = $J('#lane1');
	this.m_rgElementCache['lane2'] = $J('#lane2');
	this.m_rgElementCache['lane_0_element'] = $J( '.lane_element', this.m_rgElementCache['lane0'] );
	this.m_rgElementCache['lane_1_element'] = $J( '.lane_element', this.m_rgElementCache['lane1'] );
	this.m_rgElementCache['lane_2_element'] = $J( '.lane_element', this.m_rgElementCache['lane2'] );
	this.m_rgElementCache['lane_0_treasure'] = $J('.enemy_icon_4', this.m_rgElementCache['lane0' ] );
	this.m_rgElementCache['lane_0_boss'] = $J('.enemy_icon_2', this.m_rgElementCache['lane0' ] );
	this.m_rgElementCache['lane_1_treasure'] = $J('.enemy_icon_4', this.m_rgElementCache['lane1' ] );
	this.m_rgElementCache['lane_1_boss'] = $J('.enemy_icon_2', this.m_rgElementCache['lane1' ] );
	this.m_rgElementCache['lane_2_treasure'] = $J('.enemy_icon_4', this.m_rgElementCache['lane2' ] );
	this.m_rgElementCache['lane_2_boss'] = $J('.enemy_icon_2', this.m_rgElementCache['lane2' ] );

	this.m_rgElementCache['players_in_lane'] = $J('#players_in_lane');


	// Active in lane block

	var rgAbilities = this.m_Game.m_rgTuningData.abilities;

	for( var i=0; i< 28; i++ )
	{
		if( !rgAbilities[i] )
			continue;
		var ele = this.m_eleActiveInLaneTemplate.clone();

		$J(ele).attr('id','activeability_'+i);
		this.m_rgElementCache['activeability_'+i] = ele;
		$J(ele).data('abilityid', i );
		$J('.quantity', ele).text( "x0" );
		$J('img', ele).attr( 'src', g_rgIconMap['ability_' + i].icon );
		$J(ele).v_tooltip({tooltipClass: 'ta_tooltip', location: 'top'});
		ele.hide();

		this.m_eleActiveInLaneContainer.append(ele);
	}

	$J(".link", $J("#upgr_3")).v_tooltip({tooltipClass: 'ta_tooltip', location: 'bottom', offsetY: 5});
	$J(".link", $J("#upgr_4")).v_tooltip({tooltipClass: 'ta_tooltip', location: 'bottom', offsetY: 5});
	$J(".link", $J("#upgr_5")).v_tooltip({tooltipClass: 'ta_tooltip', location: 'bottom', offsetY: 5});
	$J(".link", $J("#upgr_6")).v_tooltip({tooltipClass: 'ta_tooltip', location: 'bottom', offsetY: 5});

	for ( var i = 0; i < 3; ++i )
	{
		var laneID = "#lane" + i;

		var imgBoss = $J(laneID + '_enemy_icon_2 > img');
		imgBoss.attr( 'src', g_rgIconMap["enemy_2"].icon );

		var imgTreasureMob = $J(laneID + '_enemy_icon_4 > img');
		imgTreasureMob.attr( 'src', g_rgIconMap["enemy_4"].icon );
	}

	$J(".lane_element" ).v_tooltip({tooltipClass: 'ta_tooltip', location: 'top'});
	$J(".lane_enemy" ).v_tooltip({tooltipClass: 'ta_tooltip', location: 'top'});

	this.m_bUIReady = true;
}

CUI.prototype.OnPlayerDataUpdate = function()
{
	if( !this.m_bUIReady )
	{
		return;
	}

	var game = this.m_Game;


	var nDelta = g_msTickRate;

	if( this.m_nLastUpdate )
	{
		nDelta = Date.now() - this.m_nLastUpdate;
		//console.log((nDelta/1000).toFixed(1));
	}

	this.m_nLastUpdate = Date.now();

	if( this.m_flDisplayedHP <= 0 )
	{
		this.m_flDisplayedHP = game.m_rgPlayerData.hp;
	}

	this.m_predictorHP.m_nCeil = game.m_rgPlayerTechTree.max_hp;
	this.m_predictorHP.UpdateValue(game.m_rgPlayerData.hp, nDelta);
	this.m_predictorHP.m_nFloor = game.m_rgPlayerData.hp;

	// Gold updated, so we can update some more expensive UI tasks
	this.UpdateUpgrades();
	this.UpdateActiveAbilities();
	return;
}

CUI.prototype.OnGameDataUpdate = function()
{
	if( !this.m_bUIReady )
	{
		return;
	}
	this.UpdateLanes();
}

CUI.prototype.Tick = function()
{
	var game = this.m_Game;

	if( !this.m_bUIReady )
	{
		if( game.m_rgPlayerData && game.m_rgPlayerTechTree && game.m_rgGameData )
		{
			this.BuildUI();
			this.m_flDisplayedHP = game.m_rgPlayerData.hp;
		}
		else
			return;
	}

	if( game.m_rgPlayerData )
	{
		this.m_flDisplayedHP = this.m_predictorHP.Get();

		this.m_eleInfoHP[0].textContent = FormatNumberForDisplay( this.m_flDisplayedHP, 5) + " HP";
		this.m_eleHPBar[0].style.width = ( 100*( this.m_flDisplayedHP / game.m_rgPlayerTechTree.max_hp ) ) + "%";
		//this.m_eleInfoDPS.text( FormatNumberForDisplay( game.m_rgPlayerData.dps, 5 ) + " DPS");
		this.m_eleInfoGold[0].textContent = FormatNumberForDisplay( game.m_rgPlayerData.gold, 5 );

		if( game.m_rgLaneData[ game.m_rgPlayerData.current_lane ] )
		{
			var nLaneDPS = game.m_rgLaneData[ game.m_rgPlayerData.current_lane ].friendly_dps;
			this.m_eleInfoLaneDPS[0].textContent = FormatNumberForDisplay( nLaneDPS, 5 );
		}

		var playerDeadDialog = this.m_dialogPlayerDied;

		if ( game.m_rgPlayerData.hp <= 0 && ( game.m_rgPlayerTechTree && game.m_rgPlayerTechTree.badge_points <= 0 ) )
		{
			playerDeadDialog.show();
			playerDeadDialog.m_bVisible = true;

			// can the player respawn
			var nTimeLeft = ( game.m_rgPlayerData.time_died + game.m_rgTuningData.player.min_dead_time ) - this.m_Game.m_nTime;
			if ( nTimeLeft > 0 )
			{
				$J("#player_respawn_btn").hide();
				$J('.cannot_respawn', playerDeadDialog ).show();
				$J('.timeleft', playerDeadDialog )[0].textContent = nTimeLeft;
			}
			else
			{
				$J("#player_respawn_btn").show();
				$J('.cannot_respawn', playerDeadDialog).hide();
			}

			nTimeLeft = ( game.m_rgPlayerData.time_died + game.m_rgTuningData.player.respawn_time ) - this.m_Game.m_nTime;
			var sec = nTimeLeft % 60;
			var strTimeLeft = Math.floor( nTimeLeft / 60 ) + ":" + ( ( sec >= 10 ) ? sec : "0" + sec );
			$J('.automatically_respawn .timeleft', playerDeadDialog )[0].textContent =  strTimeLeft ;
		}
		else if( playerDeadDialog.m_bVisible )
		{
			playerDeadDialog.m_bVisible = false;
			playerDeadDialog.hide();
		}
	}
	/*if( game.m_rgPlayerTechTree )
	{
		this.m_eleInfoClickDamage.textContent = FormatNumberForDisplay( game.m_rgPlayerTechTree.damage_per_click, 5 ) + " click";
	}*/

	switch ( game.m_rgGameData.status )
	{
		case 1:
			this.m_dialogWaitingForPlayers.show();
			var numPlayers = 0;
			if ( game.m_rgStats )
			{
				numPlayers = game.m_rgStats.num_players;
			}
			var pct = (100* ( numPlayers / 1000 ) ).toFixed( 2 ) + '%' ;
			$J( "div.num_players_waiting_bar > div", this.m_dialogWaitingForPlayers )[0].style.width = pct;
			$J( "#num_players_waiting", this.m_dialogWaitingForPlayers )[0].textContent = numPlayers ;
			break;

		case 2:
			this.m_dialogWaitingForPlayers.hide();
			this.UpdateLevelAndTimes();
			this.UpdateAbilities();
			this.UpdateLootNotification();
			this.UpdateLog( game.m_rgActionLog );
			this.UpdateHealthBars();
			break;

		case 3:
			this.m_dialogWaitingForPlayers.hide();
			if ( !this.m_gameOverDialog )
			{
				this.m_gameOverDialog = ShowAlertDialog( 'Game Over', 'This game is over. Click OK to continue.' );
				this.m_gameOverDialog.done(
					function() {
						top.location.href = 'http://steamcommunity.com/minigame/';
					}
				);
			}
			this.UpdateLevelAndTimes();
			break;
	}

	this.UpdateStats();
	this.UpdateSpendBadgePointsDialog();
}

CUI.prototype.UpdateLevelAndTimes = function()
{
	var game = this.m_Game;
	this.m_eleInfoLevel[0].textContent = game.m_rgGameData.level + 1 ;

	if( window.DEBUG_bUseServerTime )
	{
		this.m_eleInfoGameTime[0].textContent = FormatDeltaTimeString( game.m_rgGameData.timestamp - game.m_rgGameData.timestamp_game_start ) ;
		this.m_eleInfoLevelTime[0].textContent =  FormatDeltaTimeString( game.m_rgGameData.timestamp - game.m_rgGameData.timestamp_level_start ) ;
	} else{
		this.m_eleInfoGameTime[0].textContent = FormatDeltaTimeString( game.m_nSimulatedTime - game.m_rgGameData.timestamp_game_start ) ;
		this.m_eleInfoLevelTime[0].textContent =  FormatDeltaTimeString( game.m_nSimulatedTime - game.m_rgGameData.timestamp_level_start ) ;
	}

}

CUI.prototype.UpdateSpendBadgePointsDialog = function()
{
	if ( !this.m_spendBadgePointsDialog )
	{
		this.m_spendBadgePointsDialog = $J( "#spend_badge_points_dialog" );
	}
	if ( !this.m_Game.m_rgPlayerTechTree || !this.m_Game.m_rgPlayerTechTree.badge_points || this.m_Game.m_rgGameData.status != 2 )
	{
		this.m_spendBadgePointsDialog.hide();
		return;
	}

	if ( !this.m_spendBadgePointsDialog.is(":visible") )
	{
		this.m_spendBadgePointsDialog.show();
	}

	// update
	$J( "#num_badge_points", this.m_spendBadgePointsDialog ).text( FormatNumberForDisplay( this.m_Game.m_rgPlayerTechTree.badge_points ) );
	var container = $J( "#badge_items", this.m_spendBadgePointsDialog );

	var template = $J( "#purchase_ability_item_template" );

	// add ability items
	var bResort = false;
	var abilities = this.m_Game.m_rgTuningData.abilities;
	for ( var i=0; i< 28; i++ )
	{
		var ability = abilities[i];
		if ( !ability || !ability.badge_points_cost )
		{
			continue;
		}

		var ele = this.m_rgElementCache['purchase_abilityitem_'+i]; // $J('#purchase_abilityitem_' + i)[0];
		if ( !ele )
		{
			ele = template.clone();
			$J(ele).click( function( event ) {
				g_Minigame.CurrentScene().TrySpendBadgePoints( this, 1 );
				event.stopPropagation();
			} );
			$J(ele).attr('id','purchase_abilityitem_' + i);
			this.m_rgElementCache['purchase_abilityitem_'+i] = ele;
			$J(ele).data('sortIndex', ability.badge_points_cost );
			$J(ele).data('type', i );
			$J(ele).data('cost', ability.badge_points_cost );
			$J(ele).data('abilityid', i );

			$J('.name', ele).text( abilities[i].name );
			$J('.cost', ele).text( FormatNumberForDisplay( ability.badge_points_cost, 5 ) );
			$J('img', ele).attr( 'src', g_rgIconMap['ability_' + i].icon );
			$J(ele).v_tooltip({tooltipClass: 'ta_tooltip', location: 'top'});

			var buyOption = $J('.sub_item', ele );
			buyOption.data('type', i );
			buyOption.data('cost', ability.badge_points_cost );
			$J(buyOption).click( function( event ) {
				g_Minigame.CurrentScene().TrySpendBadgePoints( this, 10 );
				event.stopPropagation();
			} );

			container.append(ele);
			bResort = true;
		}

		ele = $J( ele );
		var buyOption = $J('.sub_item', ele );
		var cost = parseInt( ele.data( "cost" ) );
		if ( cost > parseInt( this.m_Game.m_rgPlayerTechTree.badge_points ) )
		{
			$J(ele).addClass('disabled');
			$J(ele).addClass('disabled');
		}
		else
		{
			$J(ele).removeClass('disabled');
			if ( cost*10 > parseInt( this.m_Game.m_rgPlayerTechTree.badge_points ) )
			{
				buyOption.addClass('disabled');
			}
			else
			{
				buyOption.removeClass('disabled');
			}
		}


	}

	if ( bResort )
	{
		var purchaseableItems = container.children();
		purchaseableItems.sort( function( a, b ) {
			var sort_a = $J( a ).data('sortIndex');
			var sort_b = $J( b ).data('sortIndex');
			if ( sort_a < sort_b )
				return -1;
			if ( sort_a > sort_b )
				return 1;
			return 0;
		} );
		purchaseableItems.detach().appendTo( container );
	}
}

CUI.prototype.UpdateStats = function()
{
	if ( g_DebugUpdateStats && this.m_Game.m_rgStats )
	{
		var container = this.m_rgElementCache['stats'];
		if ( !container )
		{
			container = $J( "#stats" );
		}

		var bNeedsResort = false;
		$J.each( this.m_Game.m_rgStats, function( key, value ) {
			var elem = $J( "." + key, container )[0];
			if ( !elem )
			{
				var row = $J('<tr/>' );
				row.data( 'sortIndex', key );
				var label = $J('<td/>' );
				label.text( key );
				row.append( label );
				elem = $J('<td/>', { "class" : key } );
				row.append( elem );
				container.append( row );
				bNeedsResort = true;
			}
			$J( elem ).text( FormatNumberForDisplay( value, 5 ) );
		} );

		if ( bNeedsResort )
		{
			var statElems = container.children();
			statElems.sort( function( a, b ) {
				var sort_a = $J( a ).data('sortIndex');
				var sort_b = $J( b ).data('sortIndex');
				if ( sort_a < sort_b )
					return -1;
				if ( sort_a > sort_b )
					return 1;
				return 0;
			} );
			statElems.detach().appendTo( container );
		}
	}
}

CUI.prototype.UpdateHealthBars = function()
{

	var rgExpectedIDs = [];
	for( var i=0; i<this.m_Game.m_rgEnemies.length; i++)
	{
		var enemy = this.m_Game.m_rgEnemies[i];
		rgExpectedIDs.push( enemy.m_data.id );
		// Find the health bar
		var bar = enemy.m_HealthBar;
		/*for( var j=0; j < this.m_rgHealthBars.length; j++ )
		{
			if( this.m_rgHealthBars[j].m_id == enemy.m_data.id )
			{
				bar = this.m_rgHealthBars[j];
				break;
			}
		}*/
		if( !bar && enemy.m_data.hp > 0 )
		{
			bar = this.m_eleHealthBarTemplate.clone();

			bar.data('id', enemy.m_data.id );
			bar.m_id = enemy.m_data.id;
			bar.addClass('enemy_' + enemy.m_data.type );
			//bar.offset({ top: enemy.m_Sprite.position.y, left: enemy.m_Sprite.position.x });

			$J('.name',bar).text( enemy.GetName() );

			bar.eleText = $J('div.text',bar)[0];
			bar.eleBar = $J('div.bar > div',bar)[0];

			this.m_eleUIContainer.append( bar );
			this.m_rgHealthBars.push(bar);
			enemy.m_HealthBar = bar;
		}

		if( bar )
		{

			if( bar.m_nLastPositionY != enemy.m_Sprite.position.y )
			{
				bar[0].style.top = enemy.m_Sprite.position.y + "px";
				bar.m_nLastPositionY = enemy.m_Sprite.position.y;
				//console.log("Y");

			}

			var barX = ( Math.floor( enemy.m_Sprite.position.x + this.m_Game.m_containerEnemies.position.x ) ) + "px";
			if( bar.m_nLastPositionX != barX )
			{
				bar[0].style.left = barX;
				bar.m_nLastPositionX = barX;
				//console.log("X");
			}

			var pct =  (100* (  enemy.m_flDisplayedHP /  enemy.m_data.max_hp ) ).toFixed( 2 ) + '%' ;
			if( bar.m_nLastWidth != pct )
			{
				bar.eleBar.style.width = pct;
				bar.m_nLastWidth = pct;
				//console.log("P");
			}

			if( bar.m_strLastText != FormatNumberForDisplay( enemy.m_flDisplayedHP, 5 ) )
			{
				bar.m_strLastText = FormatNumberForDisplay( enemy.m_flDisplayedHP, 5 );
				bar.eleText.textContent = bar.m_strLastText; // Eh? EEEH???
				//console.log("T");
			}



		}
	}

	for( var i = this.m_rgHealthBars.length - 1; i >= 0 ; i-- )
	{
		if( rgExpectedIDs.indexOf( this.m_rgHealthBars[i].data('id') ) == -1 )
		{
			this.m_rgHealthBars[i].detach();
			this.m_rgHealthBars.splice(i, 1);
		}
	}
}

CUI.prototype.UpdateLanes = function()
{
	var instance = this.m_Game;

	var rgLaneData = {
		"0_total": 0,
		"0_remain": 0,
		"1_total": 0,
		"1_remain": 0,
		"2_total": 0,
		"2_remain": 0
	};

	if( instance.m_rgGameData != false )
	{
		for( var i=0; i<instance.m_rgGameData.lanes.length; i++)
		{
			for( var j=0; j<instance.m_rgGameData.lanes[i].enemies.length; j++)
			{
				if( instance.m_rgGameData.lanes[i].enemies[j].max_hp > 0 )
					rgLaneData[i + "_total"] += instance.m_rgGameData.lanes[i].enemies[j].max_hp;
				if( instance.m_rgGameData.lanes[i].enemies[j].hp > 0 )
					rgLaneData[i + "_remain"] += instance.m_rgGameData.lanes[i].enemies[j].hp;
			}

		}
	}

	// Update health histogram
	if( instance.m_rgGameData && instance.m_rgPlayerData )
	for( var i=0; i < 10; i++ )
	{
		var nHeight = 100 * ( instance.m_rgGameData.lanes[ instance.m_rgPlayerData.current_lane ].player_hp_buckets[i] / instance.m_rgLaneData[ instance.m_rgPlayerData.current_lane].player_hpbuckets_max );

		this.m_rgElementCache['teamhealth_' + i][0].style.height = nHeight.toFixed() + "%";
	}

	// Update players in my lane
	this.m_rgElementCache['players_in_lane'].text( instance.m_rgLaneData[ instance.m_rgPlayerData.current_lane].players );

	// @optimize
	if ( instance.m_rgGameData && instance.m_rgGameData.lanes )
	{
		for ( var i=0; i < instance.m_rgGameData.lanes.length; ++i )
		{
			var laneID = "#lane" + i;

			this.m_rgElementCache['lane_' + i + '_bar'][0].style.width = (100* ( rgLaneData[i+"_remain"] / rgLaneData[i+"_total"] ) ) + '%';

			this.m_rgElementCache['lane_' + i + '_element'].data( 'element', instance.m_rgGameData.lanes[i].element );

			if( this.m_rgElementCache['lane_' + i + '_icon'].m_nElement !=  instance.m_rgGameData.lanes[i].element )
			{
				this.m_rgElementCache['lane_' + i + '_icon'].removeClass();
				this.m_rgElementCache['lane_' + i + '_icon'].addClass('element_' + instance.m_rgGameData.lanes[i].element);
				this.m_rgElementCache['lane_' + i + '_icon'].m_nElement = instance.m_rgGameData.lanes[i].element;

			}

			var laneData = instance.m_rgLaneData[i];

			var imgBoss = this.m_rgElementCache['lane_' + i + '_boss'];
			if( laneData.has_boss != imgBoss.m_visible )
			{
				imgBoss.m_visible = laneData.has_boss;
				if ( laneData.has_boss )
				{
					imgBoss.show();
				}
				else
				{
					imgBoss.hide();
				}
			}

			var imgTreasureMob = this.m_rgElementCache['lane_' + i + '_treasure'];
			if( laneData.has_treasure_mob != imgTreasureMob.m_visible )
			{
				imgTreasureMob.m_visible = laneData.has_treasure_mob;
				if ( laneData.has_treasure_mob )
				{
					imgTreasureMob.show();
				}
				else
				{
					imgTreasureMob.hide();
				}
			}


			if( this.m_nLastLane != instance.m_rgPlayerData.current_lane )
			{
				if( instance.m_rgPlayerData.current_lane == i )
					this.m_rgElementCache['lane' + i].addClass('active');
				else
					this.m_rgElementCache['lane'+ i].removeClass('active');
			}
		}

		this.m_nLastLane =  instance.m_rgPlayerData.current_lane;
	
	}

}

CUI.prototype.UpdateUpgrades = function()
{
	if( !this.m_bUIReady )
		return;

	var template = $J('#upgradetemplate');
	var purchasetemplate = $J('#purchasetemplate');
	var container = $J('#upgradescontainer > div');
	var parentContainer = $J('.container_upgrades', container );

	if( !this.m_Game.m_rgTuningData.upgrades )
		return;

	var upgrades = this.m_Game.m_rgTuningData.upgrades.slice(0);

	var bNeedToResort = false;
	var bestElementalUpgradeLevel = 0;
	for( var i=0; i< upgrades.length; i++ )
	{
		var upgrade = upgrades[i];

		if ( upgrade.required_upgrade != undefined )
		{
			var requiredUpgradeLevel = upgrade.required_upgrade_level != undefined ? upgrade.required_upgrade_level : 1;
			var parentUpgradeLevel = this.m_Game.GetUpgradeLevel(upgrade.required_upgrade);
			if ( requiredUpgradeLevel > parentUpgradeLevel )
			{
				continue;
			}
		}

		var ele = this.m_rgElementCache['upgr_'+i]; //$J('#upgr_' + i)[0];

		var nCost = this.m_Game.GetUpgradeCost(i);

		if( !ele )
		{
			bNeedToResort = true;
			// Quick check, maybe it's set in the DOM?
			ele = $J('#upgr_' + i)[0];
			if( ele )
			{
				this.m_rgElementCache['upgr_'+i] = ele;
			} else {
				if( upgrade.type == '8' )
					ele = purchasetemplate.clone();
				else
					ele = template.clone();
				$J(ele).attr('id','upgr_' + i);
				this.m_rgElementCache['upgr_'+i] = ele;
				$J('.name', ele).text( upgrade.name );
				$J('.link', ele).data( 'type', i );
				$J('.link', ele).data( 'upgrade_type', upgrade.type );
				$J('.link', ele).data( 'cost', nCost );
				$J('.link', ele).data( 'multiplier', upgrade.multiplier );
				$J('.link', ele).data( 'initial_value', upgrade.initial_value );
				$J('.link', ele).data( 'desc', upgrade.desc );
				$J( ele ).data( 'sortIndex', ( upgrade.type << 16 ) + i );

				$J('.link', ele).v_tooltip({tooltipClass: 'ta_tooltip', location: 'top'});

				if ( upgrade.type == '8' )
				{
					$J('.icon', ele).attr( 'src', g_rgIconMap['ability_' + upgrade.ability].icon );
					$J('.container_purchase', container).append(ele);
				} else {
					$J('.container_upgrades', container).append(ele);
				}
			}
		}

		var nLevel = this.m_Game.GetUpgradeLevel(i);

		$J('.cost', ele).text( FormatNumberForDisplay( nCost, 5 ) );
		$J('.link', ele).data( 'cost', nCost );

		// hide purchased abilities
		if (upgrades[i].type == '8') {
			if (!this.m_Game.bHaveAbility(upgrades[i].ability)) {
				ele.show();
			}
			else {
				ele.hide();
			}
			$J('.level', ele).hide();
		}
		else {
			$J('.level', ele).text(nLevel);

			switch( i )
			{
				case 3:
				case 4:
				case 5:
				case 6:
					bestElementalUpgradeLevel = Math.max( bestElementalUpgradeLevel, nLevel );
					break;
			}
		}

		if( nCost > this.m_Game.m_rgPlayerData.gold )
			$J(ele).addClass('cantafford');
		else
			$J(ele).removeClass('cantafford');

	}

	if ( bNeedToResort )
	{
		var upgradesToSort = parentContainer.children();
		upgradesToSort.sort( function( a, b ) {
			var sort_a = $J( a ).data('sortIndex');
			var sort_b = $J( b ).data('sortIndex');
			if ( sort_a < sort_b )
				return -1;
			if ( sort_a > sort_b )
				return 1;
			return 0;
		} );
		upgradesToSort.detach().appendTo( parentContainer );
	}

	var nCombinedElementalLevels = 1;
	if ( bestElementalUpgradeLevel > 0 )
	{
		var elementalUpgrades = [ 3, 4, 5, 6 ];
		for ( var i = 0; i < elementalUpgrades.length; ++i )
		{
			var idx = elementalUpgrades[i];
			var elem = $J( this.m_rgElementCache['upgr_'+idx] );
			var nLevel = this.m_Game.GetUpgradeLevel(idx);
			nCombinedElementalLevels += nLevel;
			if ( nLevel == bestElementalUpgradeLevel )
			{
				elem.addClass( "primary" );
			}
			else
			{
				elem.removeClass("primary");
			}
		}

		//console.log(nCombinedElementalLevels);

		var upgrade = this.m_Game.m_rgTuningData.upgrades[4];

		var nElementalCost = FloorToMultipleOf( 10, CalcExponentialTuningValve( nCombinedElementalLevels, upgrade.cost, upgrade.cost_exponential_base ) );

		$J('#element_cost')[0].textContent =  FormatNumberForDisplay( nElementalCost, 5 );

		for ( var i = 0; i < elementalUpgrades.length; ++i )
		{
			var idx = elementalUpgrades[i];
			var elem = $J( this.m_rgElementCache['upgr_'+idx] );

			$J('.link', elem).data( 'cost', nElementalCost );
		}

	}


		/*if( this.m_Game.bHaveUpgrade( i ) )
			$J('.link', ele).addClass('disabled');
		else
			$J('.link', ele).removeClass('disabled');*/


}


CUI.prototype.UpdateLootNotification = function()
{
	if ( this.m_Game.m_rgPlayerData.loot && this.m_Game.m_rgPlayerData.loot.length != 0 )
	{
		$J("#loot_notification").show();

		var abilities = this.m_Game.m_rgTuningData.abilities;
		var strLootNames = "";
		for ( var i = 0; i < this.m_Game.m_rgPlayerData.loot.length; ++i )
		{
			var loot = this.m_Game.m_rgPlayerData.loot[i];
			if ( i != 0 )
			{
				strLootNames += ", ";
			}
			strLootNames += abilities[loot.ability].name;
		}
		$J("#loot_name").text( strLootNames );
		$J("#loot_notification").delay( 5000 ).fadeOut(1000);

		this.m_Game.m_rgPlayerData.loot = null;
	}
}

CUI.prototype.UpdateActiveAbilities = function()
{
	var abilities = this.m_Game.m_rgTuningData.abilities;

	if( !this.m_Game.m_rgPlayerTechTree || !this.m_Game.m_rgLaneData[ this.m_Game.m_rgPlayerData.current_lane ] )
		return;


	// TODO: Don't do this every tick, it's awful.
	//container.empty();

	for( var i=0; i< 28; i++ )
	{
		var $ele = this.m_rgElementCache['activeability_' + i];

		if( !$ele )
			continue;


		var nCount = this.m_Game.m_rgLaneData[ this.m_Game.m_rgPlayerData.current_lane ].abilities[ i ];
		var bVisible = this.m_Game.m_rgLaneData[ this.m_Game.m_rgPlayerData.current_lane ].abilities[ i ];
		if( bVisible != $ele.m_bVisible )
		{
			$ele.m_bVisible = bVisible;

			if( bVisible )
				$ele.show();
			else
				$ele.hide();
		}
		if( bVisible && nCount != $ele.m_nCount )
		{
			$ele.m_nCount = nCount;
			$J('.quantity', $ele).text('x' + nCount);
		}
	}
}

CUI.prototype.UpdateAbilities = function()
{
	var template = $J('#abilitytemplate');
	var item_template = $J('#abilityitemtemplate');
	var container = $J('#abilitiescontainer');

	var abilities = this.m_Game.m_rgTuningData.abilities;

	if( !this.m_Game.m_rgPlayerTechTree )
		return;

	// TODO: Don't do this every tick, it's awful.
	//container.empty();

	var bResortAbilities = false;
	for( var i=0; i< 28; i++ )
	{
		if( !this.m_Game.bHaveAbility( i ) )
			continue;

		var ele = this.m_rgElementCache['ability_'+i]; //$J('#ability_' + i)[0];

		if( !ele )
		{
			ele = template.clone();
			$J(ele).attr('id','ability_' + i);
			this.m_rgElementCache['ability_'+i] = ele;
			$J(ele).data('sortIndex', i );
			$J('.name', ele).text( abilities[i].name );
			$J('.link', ele).data( 'type', i );
			$J('.link', ele).data( 'abilityid', i );
			$J('img', ele).attr( 'src', g_rgIconMap['ability_' + i].icon );

			$J('.ta_tip', ele).v_tooltip({tooltipClass: 'ta_tooltip', location: 'top'});

			container.append(ele);
			bResortAbilities = true;
		}



		var nTimeLeft = this.m_Game.GetCooldownForAbility( i );

		if( nTimeLeft > 0 && !ele.m_bActive)
		{
			ele.m_bActive = true;
			$J(ele).addClass('active');
		} else if ( nTimeLeft <= 0 && ele.m_bActive )
		{
			ele.m_bActive = false;
			$J(ele).removeClass('active');
		}

		if( ele.m_nTimeLeft != nTimeLeft )
		{
			ele.m_nTimeLeft = nTimeLeft;

			var nTimeLeft = this.m_Game.GetCooldownForAbility( i );
			var strTimeLeft = FormatDeltaTimeString( nTimeLeft );
			$J('.timeleft', ele)[0].textContent = strTimeLeft;

		}


	}

	var abilityItemQuantities = {};
	if( this.m_Game.m_rgPlayerTechTree.ability_items )
	{
		for ( var i = 0; i < this.m_Game.m_rgPlayerTechTree.ability_items.length; ++i )
		{
			var abilityItem = this.m_Game.m_rgPlayerTechTree.ability_items[i];
			abilityItemQuantities[abilityItem.ability] = abilityItem.quantity;
		}
	}

	for( var i=0; i< 28; i++ )
	{
		var ele = this.m_rgElementCache['abilityitem_'+i];// $J('#abilityitem_' + i)[0];

		if( !abilityItemQuantities[i] )
		{
			if ( ele )
			{
				ele.hide();
			}
			continue;
		}

		if( !ele )
		{
			ele = item_template.clone();
			$J(ele).attr('id','abilityitem_' + i);
			this.m_rgElementCache['abilityitem_'+i] = ele;
			$J(ele).data('sortIndex', 28 + i );
			$J('.name', ele).text( abilities[i].name );
			$J('.link', ele).data( 'type', i );
			$J('.link', ele).data( 'abilityid', i );
			$J('img', ele).attr( 'src', g_rgIconMap['ability_' + i].icon );
			$J('.ta_tip', ele).v_tooltip({tooltipClass: 'ta_tooltip', location: 'top'});

			container.append(ele);
			bResortAbilities = true;

			// Sub-selects
			ele.eleQuantity = $J('.abilityitemquantity', ele)[0];
			ele.eleTimeLeft = $J('.timeleft', ele)[0];
		}
		if( !ele.m_bVisible )
		{
			ele.show();
			ele.m_bVisible = true;
		}


		ele.eleQuantity.textContent =  'x' + abilityItemQuantities[i];

		var nTimeLeft = this.m_Game.GetCooldownForAbility( i );
		if( nTimeLeft != ele.m_nTimeLeft )
		{
			ele.m_nTimeLeft = nTimeLeft;
			if( nTimeLeft > 0 )
			{
				$J(ele).addClass('active');
				ele.m_bActive = true;

				var nTimeLeft = this.m_Game.GetCooldownForAbility( i );
				var strTimeLeft = FormatDeltaTimeString( nTimeLeft );
				ele.eleTimeLeft.textContent = strTimeLeft;

			}
			else
			{
				ele.m_bActive = false;
				$J(ele).removeClass('active');
			}
		}
	}

	if ( bResortAbilities )
	{
		var abilityElems = container.children();
		abilityElems.sort( function( a, b ) {
			var sort_a = $J( a ).data('sortIndex');
			var sort_b = $J( b ).data('sortIndex');
			if ( sort_a < sort_b )
				return -1;
			if ( sort_a > sort_b )
				return 1;
			return 0;
		} );
		abilityElems.detach().appendTo( container );
	}

	return;
}


CUI.prototype.UpdateLog = function( rgLaneLog )
{
	var abilities = this.m_Game.m_rgTuningData.abilities;

	if( !this.m_Game.m_rgPlayerTechTree )
		return;

	var nHighestTime = 0;

	for( var i=rgLaneLog.length-1; i >= 0; i--)
	{
		var rgEntry = rgLaneLog[i];

		// If we got a bad time for some reason, assume it's n+1 since we'll be ahead of it by the next update anyway
		if( isNaN( rgEntry.time ) )
			rgEntry.time = this.m_nActionLogTime + 1;

		if( rgEntry.time <= this.m_nActionLogTime )
			continue;

		switch( rgEntry.type )
		{
			case 'ability':

				var ele = this.m_eleUpdateLogTemplate.clone();
				$J(ele).data('abilityid', rgEntry.ability );
				$J('.name', ele).text( rgEntry.actor_name );
				$J('.ability', ele).text( this.m_Game.m_rgTuningData.abilities[ rgEntry.ability ].name );
				$J('img', ele).attr( 'src', g_rgIconMap['ability_' + rgEntry.ability].icon );

				$J(ele).v_tooltip({tooltipClass: 'ta_tooltip', location: 'top'});

				this.m_eleUpdateLogContainer[0].insertBefore(ele[0], this.m_eleUpdateLogContainer[0].firstChild);
				break;

			default:
				console.log("Unknown action log type: %s", rgEntry.type);
				console.log(rgEntry);
		}

		if( rgEntry.time > nHighestTime )
			nHighestTime = rgEntry.time;
	}

	if( nHighestTime > this.m_nActionLogTime )
		this.m_nActionLogTime = nHighestTime;

	// Prune older entries
	var e = this.m_eleUpdateLogContainer[0];
	while(e.children.length > 20 )
	{
		e.children[e.children.length-1].remove();
	}
}



window.CScrollbar = function( eleHandle, eleTarget )
{
	this.m_eleHandle = eleHandle;
	this.m_eleTarget = eleTarget;

	var instance = this;

	var funcMouseMove = function( event ) {
		var localY = event.pageY - eleHandle.parent().offset().top;
		var localMax = eleHandle.parent().height() - eleHandle.outerHeight();

		if( localY < 0 ) localY = 0;
		if( localY > localMax  ) localY = localMax;

		var percent = localY / localMax;

		instance.m_eleHandle[0].style.top = localY + 'px';
		if( eleTarget.height() < eleTarget.parent().height() )
			instance.m_eleTarget[0].style.top = '0px';
		else
			instance.m_eleTarget[0].style.top =  -percent * ( eleTarget.height() - eleTarget.parent().height())  + 'px';

		event.preventDefault();
	}

	$J(eleTarget).bind('mousewheel DOMMouseScroll',function( event ){
		var delta = event.originalEvent.wheelDelta || event.originalEvent.detail * -12
		var localY = eleHandle.offset().top - eleHandle.parent().offset().top - delta;
		var localMax = eleHandle.parent().height() - eleHandle.outerHeight();;

		if( localY < 0 ) localY = 0;
		if( localY > localMax  ) localY = localMax;

		var percent = localY / localMax;

		instance.m_eleHandle.css({top: localY + 'px' });
		if( eleTarget.height() < eleTarget.parent().height() )
			instance.m_eleTarget.css({top: '0px' });
		else
			instance.m_eleTarget.css({top: -percent * ( eleTarget.height() - eleTarget.parent().height())  + 'px' });

		event.preventDefault();
	});

	eleHandle.mousedown(function( event ){
		$J(window).bind('mousemove.scroll', funcMouseMove);
	});

	$J(window).mouseup(function( event ){
		$J(window).unbind('mousemove.scroll');
	});


}

window.fnTooltipUpgradeDesc = function( context )
{
	var $context = $J(context);
	var desc = $context.data('desc');
	var strOut = desc;

	var multiplier = parseFloat( $context.data('multiplier') );
	switch( $context.data('upgrade_type') )
	{
		case 8:
			break;
		case 0:
			strOut += '<br><br>Base Health: ' + FormatNumberForDisplay( g_Minigame.CurrentScene().m_rgTuningData.player.hp );
			strOut += '<br>Current Health: ' + FormatNumberForDisplay( g_Minigame.CurrentScene().m_rgPlayerTechTree.max_hp );
			strOut += '<br>New Health: ' + FormatNumberForDisplay( g_Minigame.CurrentScene().m_rgTuningData.player.hp * ( g_Minigame.CurrentScene().m_rgPlayerTechTree.hp_multiplier + multiplier ) );
			strOut += '<br><br>Base Increased by: ' + FormatNumberForDisplay( 100 * multiplier ) + '%';
			break;
		case 1:
			strOut += "<br>";
			if ( $context.data('type') == 1 )
			{
				strOut += '<br>Base DPS: ' + ( $context.data('initial_value') );
			}
			strOut += '<br>Current DPS: ' + FormatNumberForDisplay( g_Minigame.CurrentScene().m_rgPlayerTechTree.dps );
			strOut += '<br>New DPS: ' + FormatNumberForDisplay( g_Minigame.CurrentScene().m_rgPlayerTechTree.base_dps * ( g_Minigame.CurrentScene().m_rgPlayerTechTree.damage_multiplier_dps + multiplier ) );
			strOut += '<br><br>Base Increased by: ' + FormatNumberForDisplay( 100 * multiplier ) + '%';
			break;
		case 2:
			strOut += '<br><br>Base: ' + FormatNumberForDisplay( g_Minigame.CurrentScene().m_rgTuningData.player.damage_per_click );
			strOut += '<br>Current: ' + FormatNumberForDisplay( g_Minigame.CurrentScene().m_rgPlayerTechTree.damage_per_click );
			strOut += '<br>Next Level: ' + FormatNumberForDisplay( g_Minigame.CurrentScene().m_rgTuningData.player.damage_per_click * ( g_Minigame.CurrentScene().m_rgPlayerTechTree.damage_per_click_multiplier + multiplier ) );
			strOut += '<br><br>Base Increased by: ' + FormatNumberForDisplay( 100 * multiplier ) + '%';
			break;
		default:
			strOut += "<br><br>" + 'Base Increased by: ' + FormatNumberForDisplay( 100 * multiplier ) + '%';
			break;
	}

	return strOut;
}

window.fnTooltipLaneElementDesc = function( context )
{
	var strOut = '';
	var $context = $J(context);
	var element = $context.data('element');
	switch ( element )
	{
		case 1:
			strOut = "This lane has Fire Monsters" ;
			break
		case 2:
			strOut = "This lane has Water Monsters";
			break
		case 3:
			strOut = "This lane has Air Monsters";
			break
		case 4:
			strOut = "This lane has Earth Monsters";
			break
	}

	return strOut;
}

function log10( val ) {
	return Math.log(val) / Math.LN10;
}

window.fnTooltipAbilityDesc = function( context )
{
	var strOut = '';
	var $context = $J(context);

	var rgAbilities = g_Minigame.CurrentScene().m_rgTuningData.abilities;
	var idx = $context.data('abilityid');
	var ability = rgAbilities[idx];

	strOut += ability.name + '<br><br>' +  ability.desc ;

	if ( idx == '22' )
	{
		var levelMultiplier = Math.pow( 10, Math.max( 0, Math.floor( log10( g_Minigame.CurrentScene().m_rgGameData.level + 1 ) ) - 1 ) );
		var goldGiven = ability.multiplier * levelMultiplier;
		strOut += '<br><br>Gold for this level: ' + FormatNumberForDisplay( goldGiven );
	}

	if ( ability.instant )
	{
		strOut += '<br><br>Applied Instantly';
	}
	else if ( ability.duration )
	{
		strOut += '<br><br>Duration: ' + FormatDeltaTimeString( ability.duration );

	}
	if ( ability.cooldown )
	{
		strOut += '<br><br>Cooldown: ' + FormatDeltaTimeString( ability.cooldown );
	}
	return strOut;
}

window.fnTooltipUpgradeElementDesc = function( context )
{
	var strOut = '';
	var $context = $J(context);

	var upgrades = g_Minigame.CurrentScene().m_rgTuningData.upgrades.slice(0);
	var idx = $context.data('type');
	var upgrade = upgrades[idx];
	var multiplier = parseFloat( upgrade.multiplier );

	strOut += upgrade.desc;
	var currentMultiplier = 0;
	var strDamagePrefix = '';
	switch( idx )
	{
		case 3: // fire
			currentMultiplier = g_Minigame.CurrentScene().m_rgPlayerTechTree.damage_multiplier_fire;
			strDamagePrefix = 'Damage to Fire Monsters: ';
			break;
		case 4: // water
			currentMultiplier = g_Minigame.CurrentScene().m_rgPlayerTechTree.damage_multiplier_water;
			strDamagePrefix = 'Damage to Water Monsters: ';
			break;
		case 5: // air
			currentMultiplier = g_Minigame.CurrentScene().m_rgPlayerTechTree.damage_multiplier_air;
			strDamagePrefix = 'Damage to Air Monsters: ';
			break;
		case 6: // earth
			currentMultiplier = g_Minigame.CurrentScene().m_rgPlayerTechTree.damage_multiplier_earth;
			strDamagePrefix = 'Damage to Earth Monsters: ';
			break;
	}

	var dps = g_Minigame.CurrentScene().m_rgPlayerTechTree.dps;
	var clickDamage = g_Minigame.CurrentScene().m_rgPlayerTechTree.damage_per_click;
	var newMultiplier = currentMultiplier + multiplier;
	strOut += '<br><br>Current: ' + ( currentMultiplier ) + 'x';
	strOut += '<br>Next Level: ' + ( newMultiplier ) + 'x';

	strOut += '<br><br>' + strDamagePrefix;
	strOut += '<br>DPS: ' + FormatNumberForDisplay( currentMultiplier * dps ) + ' => ' + FormatNumberForDisplay( newMultiplier * dps );
	strOut += '<br>Click: ' + FormatNumberForDisplay( currentMultiplier * clickDamage ) + ' => ' + FormatNumberForDisplay( newMultiplier * clickDamage );

	return strOut;
}

window.FormatDeltaTimeString = function( nTimeLeft )
{
	var hours = Math.floor( nTimeLeft / ( 60 * 60 ) );
	var minutes =  Math.floor( ( nTimeLeft % ( 60 * 60 ) ) / 60 );
	var seconds = nTimeLeft % 60;
	var strTimeLeft = "";
	if ( hours > 0 )
	{
		strTimeLeft += hours + ":";
	}
	strTimeLeft += ( hours > 0 && minutes < 9 ? "0" : "" ) + minutes + ":" + ( ( seconds >= 10 ) ? seconds : "0" + seconds );
	return strTimeLeft;
}


window.FormatNumberForDisplay = function( num, digits )
{
	digits = digits || 5;

	for( var i=0; i < g_rgUnits.length; i++ )
	{
		if( num < g_rgUnits[i].magnitude * Math.pow(10, digits) )
			return ( Math.floor( num / g_rgUnits[i].magnitude ) ).toLocaleString() + g_rgUnits[i].unit;
	}
}

var g_rgUnits = [
	{magnitude: 1, unit: ''},
	{magnitude: Math.pow(10,3), unit: 'K'},
	{magnitude: Math.pow(10,6), unit: 'M'},
	{magnitude: Math.pow(10,9), unit: 'B'},
	{magnitude: Math.pow(10,12), unit: 'T'},
	{magnitude: Math.pow(10,15), unit: 'q'},
	{magnitude: Math.pow(10,18), unit: 'Q'},
	{magnitude: Math.pow(10,21), unit: 's'},
	{magnitude: Math.pow(10,24), unit: 'S'},
	{magnitude: Math.pow(10,27), unit: 'O'},
	{magnitude: Math.pow(10,30), unit: 'N'},
	{magnitude: Math.pow(10,33), unit: 'd'},
	{magnitude: Math.pow(10,36), unit: 'U'},
	{magnitude: Math.pow(10,39), unit: 'D'},
	{magnitude: Math.pow(10,42), unit: '!'},
	{magnitude: Math.pow(10,45), unit: '@'},
	{magnitude: Math.pow(10,48), unit: '#'},
	{magnitude: Math.pow(10,51), unit: '$'},
	{magnitude: Math.pow(10,54), unit: '%'},
	{magnitude: Math.pow(10,57), unit: '^'},
	{magnitude: Math.pow(10,60), unit: '&'},
	{magnitude: Math.pow(10,63), unit: '*'},
	{magnitude: Math.pow(10,65), unit: '?!'}
];


