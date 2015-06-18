// <script>
"use strict";

window.k_ETowerAttackAbility_Invalid = 0;
window.k_ETowerAttackAbility_Attack = 1;
window.k_ETowerAttackAbility_ChangeLane = 2;
window.k_ETowerAttackAbility_Respawn = 3;
window.k_ETowerAttackAbility_ChangeTarget = 4;

window.k_ETowerAttackElement_Invalid = 0;
window.k_ETowerAttackElement_Fire = 1;
window.k_ETowerAttackElement_Water = 2;
window.k_ETowerAttackElement_Air = 3;
window.k_ETowerAttackElement_Earth = 4;

window.g_eUniverseState = false;

// Tuning values
window.g_msTickRate = 1000;
window.g_nLaneScrollAmount = 450;

var g_bPrintGameStatusOnTick = false;

window.CSceneGame = function()
{
	CSceneMinigame.call(this, arguments[0]);

	var instance = this;

	this.m_bHaveTuningData = false;
	this.m_bRunning = false;
	this.m_nLastTick = 0;
	this.m_bReceivedStaleData = false;
	this.m_bWaitingForResponse = false;
	this.m_bRequestedPlayerNames = false;
	this.m_nTicks = 0;
	this.m_nBGTicks = 0;
	this.m_nClicks = 0;
	this.m_nClicksLast = 0;
	this.m_nCloudPosition = 0;
	this.m_rgAbilityQueue = [];
	this.m_rgUpgradesQueue = [];
	this.m_rgPurchaseItemsQueue = [];
	this.m_rgPlayerNameCache = {};
	this.m_rgPlayerNameRequests = [];
	this.m_rgLaneData = {};
	this.m_rgEmitters = [];

	this.m_bIsDead = false;

	this.m_rgEnemies = [];
	this.m_rgClickNumbers = [];

	this.m_rgActionLog = [
	];

	this.m_nLastAbilitySeen = 0;

	// Layers
	this.m_containerBG = new PIXI.Container();
	this.m_containerEnemies = new PIXI.Container();
	this.m_containerBGUI = new PIXI.Container();
	this.m_containerUI = new PIXI.Container();
	this.m_containerUIBehind = new PIXI.Container();
	this.m_containerParticles = new PIXI.Container();

	// Render texture for background so we don't end up blitting 3x pixels on slow software
	this.m_rtBackground = new PIXI.RenderTexture( this.m_Manager.Renderer, 340, 290);
	this.m_spriteBackground = new PIXI.Sprite( this.m_rtBackground );
	this.m_spriteBackground.position.x = 300;
	this.m_spriteBackground.scale.x = this.m_spriteBackground.scale.y = 2;

	//this.m_Container.addChild( this.m_containerBG );
	this.m_Container.addChild( this.m_spriteBackground );
	this.m_Container.addChild( this.m_containerUIBehind );
	this.m_Container.addChild( this.m_containerEnemies );
	this.m_Container.addChild( this.m_containerUI );
	this.m_Container.addChild( this.m_containerParticles );

	this.m_rgPlayerData = false;
	this.m_rgGameData = false;
	this.m_rgStats = false;
	this.m_bUpgradesBusy = false;
	this.m_rgTuningData = false;
	this.m_bNeedTechTree = true;

	this.m_rgStoredCrits = [];

	this.m_rgLocalOverrides = [];

	this.m_rgActiveParticles = {};

	this.m_nLocalTime = Date.now();

	this.m_UI = new CUI(this);

	//console.log("Starting game...");

	this.m_rgLevelMap = [
		'city_day',
		'city_night',
		'city_destroyed',
		'stadium',
		'snow',
		'desert',
		'island',
		'volcano',
		'ocean_floor',
		'space',

	];
	this.m_nCurrentLevel = 0;

	this.ChangeLevel( this.m_rgLevelMap[0] );

	var instance = this;

	this.m_containerEnemies.interactive = true;
	this.m_containerEnemies.click = this.m_containerEnemies.tap = function( mouseData ) {
		instance.DoClick( mouseData );
		instance.ClearNewPlayer();
	};

	this.m_spriteBackground.interactive = true;
	this.m_spriteBackground.click = this.m_spriteBackground.tap = function( mouseData ) {
		instance.DoClick( mouseData );
		instance.ClearNewPlayer();
	};

	g_Server.Connect( function() {
		g_Server.m_nGameID = instance.m_Manager.gameid;
		instance.m_rgTuningData = instance.m_Manager.rgTuningData;
		instance.m_rgTuningData.upgrades = V_ToArray( instance.m_Manager.rgTuningData.upgrades );
		instance.m_bHaveTuningData = true;
		instance.m_bRunning = true;
	} );

	// Setup scene
	//this.m_spriteBG = new PIXI.Sprite( g_rgTextureCache.bg_1.texture );
	//this.m_spriteBG.scale.x = this.m_spriteBG.scale.y = 1.4;

	//this.m_containerBG.addChild( this.m_spriteBG );

	//
	// TEMP STUFF BELOW
	//

	// Dead overlay and respawn button
	var g = new PIXI.Graphics();
	var overlay = new PIXI.Rectangle(0, 0, k_ScreenWidth, k_ScreenHeight );

	g.beginFill(0xff7b00);
	g.drawShape(overlay);

	g.alpha = 0.3;
	g.visible = false;

	this.m_containerUI.addChild(g);
	this.m_overlayDead = g;

	g_AudioManager.CrossfadeTrack('music');

	setInterval( function(){ instance.OnSimulatedServerTick(); }, 1000 );

	$J('#uicontainer').mousemove(function(){ g_msTickRate = 1100; });

	this.CheckNewPlayer();


}

CSceneGame.prototype = Object.create(CSceneMinigame.prototype);

CSceneGame.prototype.Tick = function()
{


	CSceneMinigame.prototype.Tick.call(this);

	var nNow = performance.now();

	if( document.hidden || document.webkitHidden || document.mozHidden || document.msHidden )
	{
		//console.log("Page not visibile, will not tick");
		return; // Don't bother rendering while out of focus.
	}

	if( this.m_bRunning && !this.m_bWaitingForResponse )
	{
		var instance = this;

		// request player names as soon as we go running
		if ( !this.m_bRequestedPlayerNames && this.m_rgGameData.status == '2' )
		{
			this.m_bRequestedPlayerNames = true;
			this.RequestOutstandingPlayerNames( true, null );
		}

		var bTickAll = ( ( nNow - this.m_nLastTick ) > g_msTickRate || this.m_nLastTick === false );
		if ( bTickAll )
		{
			this.m_nLastTick = nNow;

			// Do abilities
			var rgRequest = {
				'requested_abilities': this.m_rgAbilityQueue
			};
			this.m_rgAbilityQueue = [];

			if( this.m_nClicks > 0 )
			{
				rgRequest.requested_abilities.push(
					{
						'ability': k_ETowerAttackAbility_Attack,
						'num_clicks': this.m_nClicks
					}
				);
			}

			this.m_nLastClicks = this.m_nClicks;
			this.m_nClicks = 0;

			this.m_bWaitingForResponse = true;
			if( rgRequest.requested_abilities.length > 0 )
			{
				g_Server.UseAbilities(function(rgResult)
				{
					if( rgResult.response.player_data )
					{
						instance.m_rgPlayerData = rgResult.response.player_data;
						instance.ApplyClientOverrides('player_data');
						instance.ApplyClientOverrides('ability');
						instance.ApplyClientOverrides('upgrades');
					}

					instance.m_bWaitingForResponse = false;
					if( rgResult.response.tech_tree )
					{
						instance.m_rgPlayerTechTree = rgResult.response.tech_tree;
						if( rgResult.response.tech_tree.upgrades )
							instance.m_rgPlayerUpgrades = V_ToArray( rgResult.response.tech_tree.upgrades );
						else
							instance.m_rgPlayerUpgrades = [];
					}
					instance.OnReceiveUpdate();
				},
				function(){
					instance.m_bWaitingForResponse = false;
				}
				, rgRequest );

				if( instance.m_bNeedTechTree )
				{
					g_Server.GetPlayerData(function(rgResult){
						if( rgResult.response.player_data )
						{
							instance.m_rgPlayerData = rgResult.response.player_data;
							instance.ApplyClientOverrides('player_data');
							instance.ApplyClientOverrides('ability');
							instance.ApplyClientOverrides('upgrades');
						}
						if( rgResult.response.tech_tree )
						{
							instance.m_rgPlayerTechTree = rgResult.response.tech_tree;
							if( rgResult.response.tech_tree.upgrades )
								instance.m_rgPlayerUpgrades = V_ToArray( rgResult.response.tech_tree.upgrades );
							else
								instance.m_rgPlayerUpgrades = [];
						}
						instance.m_bWaitingForResponse = false;
						//instance.OnReceiveUpdate();
						instance.OnServerTick();
					},
					function( err )
					{
						console.log("Network error");
						console.log(err);
						instance.m_bWaitingForResponse = false;
					},
					this.m_bNeedTechTree);
				}

			}
			else
			{
				g_Server.GetPlayerData(
					function(rgResult){
						if( rgResult.response.player_data )
						{
							instance.m_rgPlayerData = rgResult.response.player_data;
							instance.ApplyClientOverrides('player_data');
							instance.ApplyClientOverrides('ability');
							instance.ApplyClientOverrides('upgrades');
						}
						if( rgResult.response.tech_tree )
						{
							instance.m_rgPlayerTechTree = rgResult.response.tech_tree;
							if( rgResult.response.tech_tree.upgrades )
								instance.m_rgPlayerUpgrades = V_ToArray( rgResult.response.tech_tree.upgrades );
							else
								instance.m_rgPlayerUpgrades = [];
						}
						instance.m_bWaitingForResponse = false;
						instance.OnReceiveUpdate();
						instance.OnServerTick();
					},
					function( err )
					{
						console.log("Network error");
						console.log(err);
						instance.m_bWaitingForResponse = false;
					},
					this.m_bNeedTechTree
				);
				instance.m_bNeedTechTree = false;
			}

			this.SendChooseUpgradesRequest();
			this.SendSpendBadgePointsRequest();
		}

		if ( bTickAll || this.m_bReceivedStaleResponse )
		{
			this.m_bReceivedStaleResponse = false;

			// Get game state
			g_Server.GetGameData(
				function(rgResult){
					if( rgResult.response.game_data )
						instance.m_rgGameData = rgResult.response.game_data;

					if( rgResult.response.stats )
						instance.m_rgStats = rgResult.response.stats;

					instance.OnGameDataUpdate();

				},
				function( err )
				{
					console.log("Network error");
					console.log(err);
				},
				instance.m_rgGameData && instance.m_rgGameData.status == 1			);
			// Switch lane
			//console.log(this.m_rgPlayerData);
			//if( this.m_rgPlayerData.current_lane != undefined )
			//	this.m_containerEnemies.x = this.m_containerBG.x = this.m_rgPlayerData.current_lane * -765;
		}
	}

	this.TickBG();


	if( this.m_easingBG && !this.m_easingBG.m_bComplete )
	{
		var x = Math.floor(this.m_easingBG.Get());
		if( this.m_easingBG.bIsDone() ) // We intentionally checked the variable before and the function now so we can catch the frame in which we become compelte
		{
			x = this.m_easingBG.GetTarget();
		}

		this.m_containerEnemies.x = this.m_containerParticles.x = x;
		//this.m_containerBG.x = Math.floor( x/-3 );
		this.m_rtBackground.render( this.m_containerBG );
	} else if ( this.m_easingBG && this.m_easingBG.m_bComplete && this.m_rgPlayerData.current_lane != this.m_nExpectedLane )
	{
		var nDeltaX = (this.m_rgPlayerData.current_lane * -g_nLaneScrollAmount) - this.m_containerEnemies.x
		this.m_easingBG = new CEasingQuadOut(this.m_containerEnemies.x, nDeltaX, 750);
		this.m_nExpectedLane = this.m_rgPlayerData.current_lane;
		console.log("DURN GHOSTS CHANGING MY LANE AGAIN");
	}

	this.m_UI.Tick();

	// Tick enemies

	/*if( this.m_rgGameData != false )
	{
		for( var i=0; i<this.m_rgGameData.lanes.length; i++)
		{
			for( var j=0; j<this.m_rgGameData.lanes[i].enemies.length; j++)
			{
				//if( this.m_rgGameData.lanes[i].enemies[j].hp <= 0  )
				//	continue;

				var enemy = this.GetEnemy( i, j );
				if( !enemy )
					continue;
				enemy.m_data = this.m_rgGameData.lanes[i].enemies[j];
				enemy.Tick();
			}
		}
	}*/

	for( var i=0; i<this.m_rgEnemies.length; i++)
	{
		this.m_rgEnemies[i].Tick();
	}

	// Tick click numbers
	for( var i=0; i< this.m_rgClickNumbers.length; i++ )
	{
		var t = this.m_rgClickNumbers[i];
		if( t.m_easeY )
		{
			t.m_easeY.Update();
			if( t.m_easeY.bIsDone() )
			{
				t.container.removeChild(t);
				this.m_rgClickNumbers.splice(i,1);
			}
			t.y = t.m_easeY.Get();
		}

		if( t.m_easeX )
			t.x = t.m_easeX.Get();

		if( t.m_easeAlpha )
		{
			t.alpha = t.m_easeAlpha.Get();
			if( t.alpha > 1 )
				t.alpha = 1;
		}
	}

	// Did we die?
	if( !this.m_bIsDead && this.m_rgPlayerData && this.m_rgPlayerData.hp <= 0 )
	{
		//console.log("DIED");
		this.m_bIsDead = true;

		this.m_overlayDead.visible = true;

		// Show overlay and respawn button

		g_AudioManager.play( 'dead' );
	}

	//this.TickBG();

	var now = Date.now();
	var flDelta = (now - this.m_nLocalTime) * 0.001;
	this.m_nLocalTime = now;

	for ( var i=this.m_rgEmitters.length-1; i >= 0; i--)
	{
		if( this.m_rgEmitters[i].emit == false && this.m_rgEmitters[i]._activeParticles.length == 0 )
		{

			this.m_rgEmitters.splice(i,1);

		} else
		{
			this.m_rgEmitters[i].update( flDelta );
		}
	}

	//this.m_emitterTest.update(flDelta);

	if( this.m_spriteFinger )
	{
		var nScaleValue = 2;
		this.m_nFingerIndex = ( this.m_nFingerIndex + 1 ) % ( this.m_rgFingerTextures.length * nScaleValue );
		this.m_spriteFinger.texture =  this.m_rgFingerTextures[Math.floor(this.m_nFingerIndex / nScaleValue)];


		var enemy = this.GetEnemy( this.m_rgPlayerData.current_lane, this.m_rgPlayerData.target  );
		if( enemy )
		{
			this.m_spriteFinger.position.x = enemy.m_Sprite.x - 20;
			this.m_spriteFinger.position.y = enemy.m_Sprite.y - 200;
		}

	}

	// Screen shake
	if( this.m_bDoShake )
	{
		this.m_nShakeTimer++;

		if( this.m_nShakeTimer > 10 )
		{
			this.m_bDoShake = false;
			this.m_Container.x = 0;
			this.m_Container.y = 0;
		} else if( this.m_nShakeTimer % 1 == 0 )
		{
			this.m_Container.x = Math.random() * 10 - 5;
			this.m_Container.y = Math.random() * 10 - 5;
		}
	}


}

CSceneGame.prototype.ClientOverride = function( strOverrideTarget, strOverrideKey, strOverrideValue, strOverrideValueB, nOverrideCycles )
{
	if( !nOverrideCycles )
		nOverrideCycles = 2;

	this.m_rgLocalOverrides.unshift({
		'target': strOverrideTarget,
		'key': strOverrideKey,
		'value': strOverrideValue,
		'valueB': strOverrideValueB,
		'cycles': nOverrideCycles
	});
}

CSceneGame.prototype.ApplyClientOverrides = function( strTarget, bIgnoreTicks )
{
	for( var i = this.m_rgLocalOverrides.length - 1; i >= 0; i-- )
	{
		if( strTarget != this.m_rgLocalOverrides[i].target )
			continue;


		if( !bIgnoreTicks && this.m_rgLocalOverrides[i].cycles-- <= 0 )
		{
			//if( this.m_rgLocalOverrides[i].value != this.m_rgPlayerData[ this.m_rgLocalOverrides[i].key ] )
			//	console.log("Override expired. Expected: %s, actual: %s", this.m_rgLocalOverrides[i].value, this.m_rgPlayerData[ this.m_rgLocalOverrides[i].key ]);

			this.m_rgLocalOverrides.splice(i, 1);

			continue;
		}

		switch( strTarget )
		{
			case 'player_data':
				//console.log("Applying override:");
				//console.log(this.m_rgLocalOverrides[i]);
				this.m_rgPlayerData[ this.m_rgLocalOverrides[i].key ] = this.m_rgLocalOverrides[i].value;
				break;

			case 'upgrades':
				// Why do we still use this loop? Pretty sure the data is in order...
				if( this.m_rgPlayerUpgrades )
				{
					for( var j=0; j<this.m_rgPlayerUpgrades.length; j++ )
					{
						if( this.m_rgPlayerUpgrades[j].upgrade == this.m_rgLocalOverrides[i].key )
						{
							this.m_rgPlayerUpgrades[j].level = this.m_rgLocalOverrides[i].value;
						}
					}
				}
				break;

			case 'ability':
				//console.log(this.m_rgLocalOverrides[i]);
				if( this.m_rgLocalOverrides[i].value == 'unlocked' )
				{
					this.m_rgPlayerData.unlocked_abilities_bitfield |= 1 << this.m_rgLocalOverrides[i].key;
				}
				else if ( this.m_rgLocalOverrides[i].key ) // If not string "unlocked", it's a timestamp!
				{
					this.m_rgPlayerData.active_abilities_bitfield |= 1 << this.m_rgLocalOverrides[i].key;

					this.m_rgPlayerData.active_abilities.push({
						ability: this.m_rgLocalOverrides[i].key,
						timestamp_cooldown: this.m_rgLocalOverrides[i].value,
						timestamp_done: 10
					});

					//console.log(this.m_rgPlayerData.active_abilities);

				}
				break;
		}



		//this.m_rgLocalOverrides[i].cycles--;
	}
}

CSceneGame.prototype.CalculateDamage = function(nDamage, nElement)
{
	var nMultiplier = 1;
	switch( nElement )
	{
		case k_ETowerAttackElement_Air:
			nMultiplier = this.m_rgPlayerTechTree.damage_multiplier_air;
			break;
		case k_ETowerAttackElement_Earth:
			nMultiplier = this.m_rgPlayerTechTree.damage_multiplier_earth;
			break;
		case k_ETowerAttackElement_Fire:
			nMultiplier = this.m_rgPlayerTechTree.damage_multiplier_fire;
			break;
		case k_ETowerAttackElement_Water:
			nMultiplier = this.m_rgPlayerTechTree.damage_multiplier_water;
			break;
	}
	return nDamage * nMultiplier;
}

CSceneGame.prototype.OnReceiveUpdate = function()
{
	this.m_UI.OnPlayerDataUpdate();

	if( this.m_rgPlayerData.crit_damage )
		this.m_rgStoredCrits.push(this.m_rgPlayerData.crit_damage);

	if( !this.m_easingBG )
	{
		var nDeltaX = (this.m_rgPlayerData.current_lane * -g_nLaneScrollAmount) - this.m_containerBG.x
		this.m_easingBG = new CEasingQuadOut(this.m_containerBG.x, nDeltaX, 750);
		this.m_nExpectedLane = this.m_rgPlayerData.current_lane;
	}

	if( this.m_bIsDead && this.m_rgPlayerData.hp > 0 )
	{
		this.m_overlayDead.visible = false;
		this.m_bIsDead = false;
	}

	this.m_nTarget = this.m_rgPlayerData.target;
}

function SmackTV()
{
	var r = null;
	switch( Math.floor( Math.random() * 15 ) )
	{
		case 2:
			var f = new PIXI.filters.RGBSplitFilter();
			f.angle = Math.random();
			r = [f];
			break;
		case 3:
			var f = new PIXI.filters.GrayFilter();
			f.gray = Math.random();
			r = [f];
			break;

		case 4:
			var f = new PIXI.filters.InvertFilter();
			f.invert = Math.random();
			r = [f];
			break;

		case 5:
			var f = new PIXI.filters.PixelateFilter();
			f.size.x = Math.floor( Math.random() * 20 );
			f.size.y = Math.floor( Math.random() * 20 );
			r = [f];
			break;

		case 6: // This inverts and offsets for some reason. Probably a bug in pixi, might look at it later
			var f = new PIXI.filters.AsciiFilter();
			r = [f];
			break;
		case 7:
			var f = new PIXI.filters.BloomFilter();
			r = [f];
			break;
		case 8:
			var f = new PIXI.filters.BlurDirFilter(Math.random(), Math.random());
			r = [f];
			break;

		case 9:
			var f = new PIXI.filters.ColorMatrixFilter();
			f.matrix =  [
				1,0,0,0,0,
				0,1,0,0,0,
				0,0,1,0,0,
				0,0,0,1,0,
			];

			f.hue (360*Math.random(),0xFFFFFF*Math.random());

			r = [f];
			break;

		case 10:
			var f = new PIXI.filters.ColorMatrixFilter();
			f.matrix =  [
				1,0,0,0,0,
				0,1,0,0,0,
				0,0,1,0,0,
				0,0,0,1,0,
			];

			f.browni  (Math.random());

			r = [f];
			break;

		case 11:
			var f = new PIXI.filters.ColorMatrixFilter();
			f.matrix =  [
				1,0,0,0,0,
				0,1,0,0,0,
				0,0,1,0,0,
				0,0,0,1,0,
			];

			f.predator  (Math.random(), Math.random());

			r = [f];
			break;

	}

	g_Minigame.CurrentScene().m_Container.filters = r;

	$J('#gamecontainer').animate({'left': -10 + 'px', 'top': 3 + 'px'}, 75,function(){ $J('#gamecontainer').css({'left': "0", 'top' : 0}); });

	console.log("%c*Whump*", "font-size: 32px;");
}

CSceneGame.prototype.OnSimulatedServerTick = function()
{
	if( g_msTickRate < 10000 )
		g_msTickRate += 10;

	if ( !this.m_rgPlayerData || !this.m_rgGameData || this.m_rgGameData.status != 2 )
		return;

	var element = this.m_rgGameData.lanes[this.m_rgPlayerData.current_lane].element;
	var enemy = this.GetEnemy( this.m_rgPlayerData.current_lane, this.m_rgPlayerData.target  );
	if( this.m_rgPlayerData.hp > 0 && enemy && enemy.m_data.hp > 0 && element )
	{
		var damage = this.CalculateDamage( this.m_rgPlayerTechTree.dps, element );
		if( damage > 0 )
		{
			this.DoClickEffect( damage, enemy.m_Sprite.position.x - 50, enemy.m_Sprite.position.y - 100, this.m_containerParticles );
			enemy.TakeDamage();
		}
	}

	this.m_nSimulatedTime++;
}

CSceneGame.prototype.OnServerTick = function()
{

}


CSceneGame.prototype.GetCurrentEnemyData = function()
{
	return this.m_rgGameData.lanes[this.m_rgPlayerData.current_lane].enemies[this.m_rgPlayerData.target];
}

CSceneGame.prototype.PreloadPlayerName = function( accountid )
{
	if ( !this.m_rgPlayerNameCache[accountid] )
	{
		this.m_rgPlayerNameCache[accountid] = 'Player ' + accountid;
		this.m_rgPlayerNameRequests.push( accountid );
	}
}

CSceneGame.prototype.GetPlayerName = function( accountid )
{
	if ( this.m_rgPlayerNameCache[accountid] )
	{
		return this.m_rgPlayerNameCache[accountid];
	}
	return 'Player ' + accountid;
}

CSceneGame.prototype.RequestOutstandingPlayerNames = function( bAllowEmpty, callback )
{
	if ( this.m_rgPlayerNameRequests.length != 0 || bAllowEmpty )
	{
		var instance = this;
		var rgPlayerNameRequests = this.m_rgPlayerNameRequests;
		this.m_rgPlayerNameRequests = [];
		g_Server.GetPlayerNames(
			function(rgResult){
				if( rgResult.response.names )
				{
					for ( var i = 0; i < rgResult.response.names.length; ++i )
					{
						var nameData = rgResult.response.names[i];
						instance.m_rgPlayerNameCache[nameData.accountid] = nameData.name;
					}
				}
				if ( callback )
					callback();
			},
			function( err )
			{
				console.log("Network error");
				console.log(err);
				if ( callback )
					callback();
			},
			rgPlayerNameRequests
		);
	}
	else if ( callback )
	{
		callback();
	}
}

CSceneGame.prototype.OnGameDataUpdate = function()
{
	this.m_bRunning = this.m_rgGameData.status != '3';

	if( this.m_rgGameData.universe_state && g_eUniverseState != this.m_rgGameData.universe_state )
	{
		g_eUniverseState = this.m_rgGameData.universe_state;

		var instance = this;

		$J.ajax({
			url: 'https://steamcommunity-a.akamaihd.net/public/javascript/minigame/towerattack/' + this.m_rgGameData.universe_state + '/script.js?v=' + g_CacheKey,
			dataType: "script",
			cache: true
		}).done(
			function(rgResult){
				while( instance.m_rgEnemies.length > 0 )
				{
					instance.m_rgEnemies[0].Destroy();
					instance.m_rgEnemies.shift();
				}
			}
		);


	}

	if( this.m_rgGameData.timestamp == this.m_nTime )
	{
		if ( this.m_nTime )
		{
			console.log("Got stale data for time " + this.m_nTime + ", requesting data again next tick...");
			this.m_bReceivedStaleData = false;
		}
		return;
	}
	this.m_nTime = this.m_rgGameData.timestamp;
	if( !this.m_nSimulatedTime )
	{
		this.m_nSimulatedTime = this.m_rgGameData.timestamp;
	}


	if( Math.abs( this.m_nSimulatedTime - this.m_rgGameData.timestamp ) > 2 )
	{
		// We're more than 2 seconds ahead or behind of the server, slam to the server's value
		this.m_nSimulatedTime = this.m_rgGameData.timestamp;
		console.log("Slamming time");
	}

	var nHighestTime = 0;

	if( this.m_rgPlayerData )
	{
		var rgAbilities = this.m_rgGameData.lanes[this.m_rgPlayerData.current_lane].active_player_abilities;
		if( rgAbilities )
		{
			for( var i=0; i<rgAbilities.length; i++ )
			{
				var nTimestampStart = rgAbilities[i].timestamp_done -  this.m_rgTuningData.abilities[ rgAbilities[i].ability ].duration;
				if( nTimestampStart <= this.m_nLastAbilitySeen )
					continue;
				this.PreloadPlayerName( rgAbilities[i].accountid_caster );
			}

			var instance = this;

			this.RequestOutstandingPlayerNames(
				false,
				function() {
					for( var i=0; i<rgAbilities.length; i++ )
					{
						var nTimestampStart = rgAbilities[i].timestamp_done -  instance.m_rgTuningData.abilities[ rgAbilities[i].ability ].duration;
						if( nTimestampStart <= instance.m_nLastAbilitySeen )
							continue;

						instance.m_rgActionLog.push({
							'icon': false,
							'type': 'ability',
							'ability': rgAbilities[i].ability ,
							'actor_name': instance.GetPlayerName( rgAbilities[i].accountid_caster ),
							'actor': rgAbilities[i].accountid_caster,
							'time': nTimestampStart
						});

						if( instance.m_rgActionLog.length > 50 )
							instance.m_rgActionLog.splice(0,instance.m_rgActionLog.length - 50);

						if( nTimestampStart > nHighestTime )
							nHighestTime = nTimestampStart;
					}
				}
			);
		}
	}

	// Change level if needed
	if( this.m_nCurrentLevel != this.m_rgGameData.level )
	{
		if( this.m_nCurrentLevel )
		{
			$J('.level', '#nextlevel').text(this.m_rgGameData.level + 1);
			$J('#nextlevel').show();
			setTimeout(function()
			{
				$J('#nextlevel').fadeOut();
			}, 750);
		}
		this.m_nCurrentLevel = this.m_rgGameData.level;

		var nIndex = Math.floor( this.m_nCurrentLevel / 10 ) % this.m_rgLevelMap.length;
		this.ChangeLevel( this.m_rgLevelMap[nIndex] );
		this.m_strLevelName = this.m_rgLevelMap[nIndex];
	}

	if( nHighestTime > this.m_nLastAbilitySeen )
		this.m_nLastAbilitySeen = nHighestTime;

	this.UpdateEnemies();
	this.m_UI.OnGameDataUpdate();

}

function IndexOfObject( needle, rgHaystack )
{
	var rgKeys = Object.keys(needle);

	haystackloop:
		for( var i=0; i < rgHaystack.length; i++ )
		{
			for( var k=0; k < rgKeys.length; k++ )
			{
				var strKey = rgKeys[k];
				if( rgHaystack[i][strKey] !== needle[strKey] )
					continue haystackloop;
			}
			return i;
		}
	return false;
}

CSceneGame.prototype.FindEnemyByID = function( nID )
{
	for( var i=0; i < this.m_rgEnemies.length; i++ )
	{
		if( this.m_rgEnemies[i].m_data.id == nID )
			return this.m_rgEnemies[i];
	}
	return false;
}

CSceneGame.prototype.UpdateEnemies = function()
{
	var rgExpectedIDs = [];

	for( var i=0; i<this.m_rgGameData.lanes.length; i++)
	{
		this.m_rgLaneData[i] = {
			friendly_dps: 0,
			enemies: 0,
			enemy_dps: 0,
			players: 0,
			abilities: {},
			player_hpbuckets_max: 0,
			has_boss: 0,
			has_treasure_mob: 0,
		};

		// Update enemies in this lane
		for( var j=0; j<this.m_rgGameData.lanes[i].enemies.length; j++)
		{
			var rgEnemyData = this.m_rgGameData.lanes[i].enemies[j];
			var enemy = this.FindEnemyByID( rgEnemyData.id );

			if( !enemy && rgEnemyData.hp > 0 )
			{
				// Spawn enemy if we need to

				if( this.m_rgGameData.lanes[i].enemies[j].type == 0)
				{
					enemy = new CEnemySpawner(this, i, j, this.m_rgGameData.lanes[i].enemies[j], this.m_strLevelName  );
					this.m_rgEnemies.push(enemy);
				}
				else if( this.m_rgGameData.lanes[i].enemies[j].type == 1 )
				{
					// Is our spawner alive? If so we should let it handle this...
					if( this.m_rgGameData.lanes[i].enemies[0].hp <= 0 )
					{
						//console.log("Spawner is dead, manually creating this unit :(");
						enemy = new CEnemyCreep(this, i, j, this.m_rgGameData.lanes[i].enemies[j] );
						this.m_rgEnemies.push(enemy);
					}
				}
				else if( this.m_rgGameData.lanes[i].enemies[j].type == 2 )
				{
					enemy = new CEnemyBoss(this, i, j, this.m_rgGameData.lanes[i].enemies[j], this.m_strLevelName );
					this.m_rgEnemies.push(enemy);
				}
				else if( this.m_rgGameData.lanes[i].enemies[j].type == 3 )
				{
					enemy = new CEnemyMiniBoss(this, i, j, this.m_rgGameData.lanes[i].enemies[j] );
					//enemy = new CEnemyTreasure(this, i, j, this.m_rgGameData.lanes[i].enemies[j] );
					this.m_rgEnemies.push(enemy);
				}
				else if( this.m_rgGameData.lanes[i].enemies[j].type == 4 )
				{
					enemy = new CEnemyTreasure(this, i, j, this.m_rgGameData.lanes[i].enemies[j] );
					this.m_rgEnemies.push(enemy);
				}
				else if( this.m_rgGameData.lanes[i].enemies[j].type != 1 )
				{
					console.log("Unknown enemy type %s!!!!", this.m_rgGameData.lanes[i].enemies[j].type);
					enemy = new CEnemyCreep(this, i, j, this.m_rgGameData.lanes[i].enemies[j] );
					this.m_rgEnemies.push(enemy);
				}
			} else if( enemy )
			{
				// Enemy was found, update data
				this.m_rgLaneData[i].friendly_dps += enemy.m_data.hp - rgEnemyData.hp;
				enemy.m_data = this.m_rgGameData.lanes[i].enemies[j];
				enemy.OnDataUpdate();
			}

			if ( enemy )
			{
				switch( enemy.m_data.type )
				{
					case 2:
						this.m_rgLaneData[i].has_boss = 1;
						break;
					case 4:
						this.m_rgLaneData[i].has_treasure_mob = 1;
						break;
				}
			}

			// If it's still alive, push it on the known entities stack so we don't prune it and end up spawning a bunch of junk to GC later.
			if( rgEnemyData.hp > 0 )
				rgExpectedIDs.push( rgEnemyData.id );

		}

		// Update lane statistics
		for( var j=0; j<this.m_rgGameData.lanes[i].player_hp_buckets.length; j++)
		{
			this.m_rgLaneData[i].players += this.m_rgGameData.lanes[i].player_hp_buckets[j];
			if( this.m_rgGameData.lanes[i].player_hp_buckets[j] > this.m_rgLaneData[i].player_hpbuckets_max )
				this.m_rgLaneData[i].player_hpbuckets_max = this.m_rgGameData.lanes[i].player_hp_buckets[j];
		}

		// Update active lane abilities
		var rgAbilities = this.m_rgGameData.lanes[i].active_player_abilities;
		if( rgAbilities )
		{
			for( var j=0; j<rgAbilities.length; j++ )
			{
				this.m_rgLaneData[i].abilities[rgAbilities[j].ability] = this.m_rgLaneData[i].abilities[rgAbilities[j].ability] + 1 || 1;

			}
		}

	}

	// Remove any enemies we still have with invalid IDs
	for( var i = this.m_rgEnemies.length - 1; i >= 0; i--)
	{
		if( rgExpectedIDs.indexOf( this.m_rgEnemies[i].m_data.id ) == -1 || this.m_rgEnemies[i].m_bIsDestroyed )
		{
			this.m_rgEnemies[i].Destroy();
			this.m_rgEnemies.splice(i,1);
		}
	}

	// Update particles...
	if( this.m_rgLaneData && this.m_rgLaneData[this.m_rgPlayerData.current_lane] )
	{
		if( window.g_TESTA || this.m_rgLaneData[ this.m_rgPlayerData.current_lane ].abilities[ 7 ] )
		{
			if( !this.m_rgActiveParticles[ 7 ] )
			{
				this.m_rgActiveParticles[ 7 ] = [
					this.SpawnEmitter( g_rgEmitterCache.healing_wave_crosses, 1280/2, 720/2, this.m_containerUI),
					this.SpawnEmitter( g_rgEmitterCache.healing_wave_mist, 1280/2, 920, this.m_containerUI)
				];
			}
		} else if (this.m_rgActiveParticles[ 7 ])
		{
			this.m_rgActiveParticles[ 7 ][0].emit = false;
			this.m_rgActiveParticles[ 7 ][1].emit = false;
			this.m_rgActiveParticles[ 7 ] = false;
		}

		if( window.g_TESTB || this.m_rgLaneData[ this.m_rgPlayerData.current_lane ].abilities[ 5 ] )
		{
			if( !this.m_rgActiveParticles[ 5 ] )
			{
				this.m_rgActiveParticles[ 5 ] = [
					this.SpawnEmitter( g_rgEmitterCache.blue_streaks, 1280/2, 720/2, this.m_containerUI)

				];
			}
		} else if (this.m_rgActiveParticles[ 5 ])
		{
			this.m_rgActiveParticles[ 5 ][0].emit = false;
			this.m_rgActiveParticles[ 5 ] = false;
		}

		if( window.g_TESTC || this.m_rgLaneData[ this.m_rgPlayerData.current_lane ].abilities[ 6 ] )
		{
			if( !this.m_rgActiveParticles[ 6 ] )
			{
				this.m_rgActiveParticles[ 6 ] = [
					this.SpawnEmitter( g_rgEmitterCache.luck_clover, 1280/2, 720/2, this.m_containerUI),
					this.SpawnEmitter( g_rgEmitterCache.luck_sparkle, 1280/2, 720/2, this.m_containerUI)

				];
			}
		} else if (this.m_rgActiveParticles[ 6 ])
		{
			this.m_rgActiveParticles[ 6 ][0].emit = false;
			this.m_rgActiveParticles[ 6 ][1].emit = false;
			this.m_rgActiveParticles[ 6 ] = false;
		}

		if( window.g_TESTE || this.m_rgLaneData[ this.m_rgPlayerData.current_lane ].abilities[ 8 ] )
		{
			if( !this.m_rgActiveParticles[ 8 ] )
			{
				this.m_rgActiveParticles[ 8 ] = [
					this.SpawnEmitter( g_rgEmitterCache.gold_up_coin, 1280/2, 720/2, this.m_containerUIBehind),
					this.SpawnEmitter( g_rgEmitterCache.radial_rays_yellow, 1280/2, 720/2, this.m_containerUIBehind),
					this.SpawnEmitter( g_rgEmitterCache.gold_up_sparkle, 1280/2, 720/2, this.m_containerUIBehind),
				];
			}
		} else if (this.m_rgActiveParticles[ 8 ])
		{
			this.m_rgActiveParticles[ 8 ][0].emit = false;
			this.m_rgActiveParticles[ 8 ][1].emit = false;
			this.m_rgActiveParticles[ 8 ][2].emit = false;
			this.m_rgActiveParticles[ 8 ] = false;
		}
	}

	if( window.g_TESTG || this.m_rgLaneData[ this.m_rgPlayerData.current_lane ].abilities[ 9 ] )
	{
		if( !this.m_rgActiveParticles[ 9 ] )
		{
			this.m_rgActiveParticles[ 9 ] = [
				this.SpawnEmitter( g_rgEmitterCache.time_explosion, 1280/2, 720/2, this.m_containerUIBehind),
				this.SpawnEmitter( g_rgEmitterCache.time_clock, 1280/2, 720/2, this.m_containerUIBehind)
			];
		}
	} else if (this.m_rgActiveParticles[ 9 ])
	{
		this.m_rgActiveParticles[ 9 ][0].emit = false;
		this.m_rgActiveParticles[ 9 ][1].emit = false;
		this.m_rgActiveParticles[ 9 ] = false;
	}

}

CSceneGame.prototype.GetEnemy = function(nLane, nIndex)
{
	for( var i=0; i<this.m_rgEnemies.length; i++)
	{
		if( this.m_rgEnemies[i].m_nLane == nLane && this.m_rgEnemies[i].m_nID == nIndex )
			return this.m_rgEnemies[i];
	}

	return false;
}

CSceneGame.prototype.Enter = function()
{
	CSceneMinigame.prototype.Enter.call(this);
}

CSceneGame.prototype.bHaveUpgrade = function( nUpgradeID )
{
	if( this.m_rgPlayerUpgrades )
	{
		for( var i=0; i<this.m_rgPlayerUpgrades.length; i++ )
		{
			if( this.m_rgPlayerUpgrades[i].upgrade == nUpgradeID )
			{
				return true;
			}
		}
	}
	return false;
}

CSceneGame.prototype.GetUpgradeLevel = function( nUpgradeID )
{
	if( this.m_rgPlayerUpgrades )
	{
		for( var i=0; i<this.m_rgPlayerUpgrades.length; i++ )
		{
			if( this.m_rgPlayerUpgrades[i].upgrade == nUpgradeID )
			{
				return this.m_rgPlayerUpgrades[i].level;
			}
		}
	}
	return 0;
}

CSceneGame.prototype.GetUpgradeCost = function( nUpgradeID )
{
	if( this.m_rgPlayerUpgrades )
	{
		for( var i=0; i<this.m_rgPlayerUpgrades.length; i++ )
		{
			if( this.m_rgPlayerUpgrades[i].upgrade == nUpgradeID )
			{
				var upgrade = this.GetUpgradeTuningData( nUpgradeID );

				var nPredictedCost = FloorToMultipleOf( 10, CalcExponentialTuningValve( this.m_rgPlayerUpgrades[i].level, upgrade.cost, upgrade.cost_exponential_base ) );
				return nPredictedCost;
			}
		}
	}
	return 0;
}

CSceneGame.prototype.GetUpgradeTuningData = function( nUpgradeID )
{
	return this.m_rgTuningData.upgrades[nUpgradeID];
}

CSceneGame.prototype.bHaveAbility = function( nAbilityID )
{
	return ( 1 << nAbilityID ) & this.m_rgPlayerTechTree.unlocked_abilities_bitfield;
}

CSceneGame.prototype.bIsAbilityActive = function( nAbilityID )
{
	return ( 1 << nAbilityID ) & this.m_rgPlayerData.active_abilities_bitfield;
}

CSceneGame.prototype.GetCooldownForAbility =  function( nAbilityID )
{
	if ( this.m_rgTuningData.abilities[nAbilityID].start_of_game_cooldown && this.m_rgGameData.timestamp_game_start )
	{
		var cooldown = this.m_rgTuningData.abilities[nAbilityID].start_of_game_cooldown;
		var timeSinceStart = this.m_nTime - this.m_rgGameData.timestamp_game_start;
		if ( timeSinceStart < cooldown )
		{
			return cooldown - timeSinceStart;
		}
	}

	if( this.m_rgPlayerData && this.m_rgPlayerData.active_abilities )
	{
		for( var i=0; i<this.m_rgPlayerData.active_abilities.length; i++ )
		{
			if( this.m_rgPlayerData.active_abilities[i].ability == nAbilityID )
			{
				return this.m_rgPlayerData.active_abilities[i].timestamp_cooldown - this.m_nTime;
			}
		}
	}
	return 0;
}


CSceneGame.prototype.GetTargetedEnemy = function()
{
	if( !this.m_rgGameData )
		return false;

	return this.m_rgGameData.lanes[ this.m_rgPlayerData.current_lane ].enemies[ this.m_rgPlayerData.target ];
}

CSceneGame.prototype.TryUpgrade = function( ele )
{
	var $ele = $J(ele);

	var nUpgradeID = $ele.data('type');

	if( $ele.data('cost') > this.m_rgPlayerData.gold )
	{
		g_AudioManager.play( 'wrongselection' );
		return;
	}
	//console.log("Attempting to upgrade %s", $ele.data('type'));

	this.m_bUpgradesBusy = true;

	// Override local gold to reflect the change
	// note this only works for the first level
	this.ClientOverride('player_data', 'gold', this.m_rgPlayerData.gold - $ele.data('cost') );
	this.ApplyClientOverrides('player_data', true );

	// Predict new upgrade level
	var nCurrentLevel = this.GetUpgradeLevel( nUpgradeID )
	this.ClientOverride('upgrades', nUpgradeID, nCurrentLevel+1 );
	this.ApplyClientOverrides('upgrades', true );

	this.m_rgUpgradesQueue.push( $ele.data('type') );
	this.m_UI.UpdateUpgrades();

	g_AudioManager.play( 'upgrade' );
}

CSceneGame.prototype.SendChooseUpgradesRequest = function()
{
	var upgrades = this.m_rgUpgradesQueue;
	if ( upgrades.length != 0 )
	{
		this.m_rgUpgradesQueue = [];

		var instance = this;

		g_Server.ChooseUpgrades(
			function(rgResult){
				if( rgResult.response.tech_tree )
				{
					instance.m_rgPlayerTechTree = rgResult.response.tech_tree;
					if( rgResult.response.tech_tree.upgrades )
					{
						instance.m_rgPlayerUpgrades = V_ToArray( rgResult.response.tech_tree.upgrades );
						instance.ApplyClientOverrides('upgrades');
					}
					else
						instance.m_rgPlayerUpgrades = [];
				}

				instance.m_bUpgradesBusy = false;
				instance.OnReceiveUpdate();
			},
			upgrades
		);
	}
}

CSceneGame.prototype.SendSpendBadgePointsRequest = function()
{
	var abilityItems = this.m_rgPurchaseItemsQueue;
	if ( abilityItems.length != 0 )
	{
		this.m_rgPurchaseItemsQueue = [];

		var instance = this;

		 g_Server.UseBadgePoints(
			 function(rgResult){
				 if( rgResult.response.tech_tree )
				 {
					 instance.m_rgPlayerTechTree = rgResult.response.tech_tree;
					 if( rgResult.response.tech_tree.upgrades )
					 {
					 	instance.m_rgPlayerUpgrades = V_ToArray( rgResult.response.tech_tree.upgrades );
						instance.ApplyClientOverrides('upgrades');
					 }
					 else
					 	instance.m_rgPlayerUpgrades = [];
				 }
				 instance.m_bUpgradesBusy = false;
				 instance.OnReceiveUpdate();
			 },
			 abilityItems
		 );
	}
}

CSceneGame.prototype.TrySpendBadgePoints = function( ele, count )
{
	var instance = this;
	var $ele = $J(ele);

	var type = $ele.data('type');
	var cost = parseInt( $ele.data('cost') ) * count;

	if ( instance.m_rgPlayerTechTree.badge_points < cost )
	{
		return;
	}
	instance.m_rgPlayerTechTree.badge_points -= cost;

	//console.log("Attempting to purchase ability item %s", type );
	instance.m_bUpgradesBusy = true;

	for ( var i = 0; i < count; ++i )
	{
		this.m_rgPurchaseItemsQueue.push( type );
	}

	g_AudioManager.play( 'upgrade' );
}


CSceneGame.prototype.DoClick = function( mouseData )
{
	if( this.m_rgPlayerData.hp <= 0 || !this.m_rgGameData )
		return;

	var element = this.m_rgGameData.lanes[this.m_rgPlayerData.current_lane].element;
	var enemy = this.GetEnemy( this.m_rgPlayerData.current_lane, this.m_rgPlayerData.target  );

	if( !enemy || enemy.m_data.hp <= 0 )
		return;


	enemy.TakeDamage();

	var x, y;


	if( mouseData )
	{
		var point = mouseData.data.getLocalPosition(this.m_Container);
		x = point.x;
		y = point.y;
	}

	if ( this.m_rgStoredCrits.length > 0 )
	{
		var rgDamage = this.m_rgStoredCrits.splice(0,1);

		this.DoCritEffect( rgDamage[0],x, y, 'Crit!' );
	} else {
		this.DoClickEffect(this.CalculateDamage( this.m_rgPlayerTechTree.damage_per_click, element ), x, y);
	}


	this.SpawnEmitter( g_rgEmitterCache.click_burst, x - this.m_containerParticles.position.x, y );

	var nClickGoldPct = this.m_rgGameData.lanes[ this.m_rgPlayerData.current_lane ].active_player_ability_gold_per_click;
	var enemy = this.GetEnemy( this.m_rgPlayerData.current_lane, this.m_rgPlayerData.target  );
	if( nClickGoldPct > 0 && enemy.m_data.hp > 0)
	{
		var nClickGold = enemy.m_data.gold * nClickGoldPct;
		var text = new PIXI.Text("+" + FormatNumberForDisplay( nClickGold, 5 ), {font: "35px 'Press Start 2P'", fill: "#e1b21e", stroke: '#000', strokeThickness: 2, align:"left" });
		g_AudioManager.play('goldclick');
		this.ClientOverride('player_data', 'gold', this.m_rgPlayerData.gold + nClickGold );
		this.ApplyClientOverrides('player_data', true );

		text.x = x + 50;
		text.y = y + 50;

		this.m_containerUI.addChild( text );
		text.container = this.m_containerUI;

		var e = new CEasingSinOut( text.y, -200, 1000 );
		e.parent = text;
		text.m_easeY = e;

		var e = new CEasingSinOut( 2, -2, 1000 );
		e.parent = text;
		text.m_easeAlpha = e;

		this.m_rgClickNumbers.push(text)

	}

	this.m_nClicks++;

}

CSceneGame.prototype.DoClickEffect = function( nDamage, x, y, container )
{
	var text = new PIXI.Text("-" + FormatNumberForDisplay( nDamage, 5 ), {font: "30px 'Press Start 2P'", fill: "#fff", stroke: '#000', strokeThickness: 2 });

	text.x = x;
	text.y = y;

	if( container )
	{
		container.addChild( text );
		text.container = container;
	} else {
		this.m_containerUI.addChild( text );
		text.container = this.m_containerUI;
	}

	var e = new CEasingSinOut( text.y, -200, 1000 );
	e.parent = text;
	text.m_easeY = e;


	var e = new CEasingSinOut( 2, -2, 1000 );
	e.parent = text;
	text.m_easeAlpha = e;

	this.m_rgClickNumbers.push(text);
	g_AudioManager.play( 'hurt' );

}


CSceneGame.prototype.DoCritEffect = function( nDamage, x, y, additionalText, container )
{
	var strText = ( additionalText ? additionalText : "" ) + "\n-" + FormatNumberForDisplay( nDamage );
	var text = new PIXI.Text(strText, {font: "35px 'Press Start 2P'", fill: "#faa", stroke: '#000', strokeThickness: 2 });

	text.x = x;
	text.y = y;

	if( container )
	{
		container.addChild( text );
		text.container = container;
	} else {
		this.m_containerUI.addChild( text );
		text.container = this.m_containerUI;
	}

	var e = new CEasingSinOut( text.y, -200, 1000 );
	e.parent = text;
	text.m_easeY = e;


	var e = new CEasingSinOut( 2, -2, 1000 );
	e.parent = text;
	text.m_easeAlpha = e;

	this.m_rgClickNumbers.push(text);
	g_AudioManager.play( 'wrongselection' ); // @todo chrisk this sound isn't ideal, but it's the closest thing I can find on a friday at 6:45pm

	this.DoScreenShake();

}

CSceneGame.prototype.DoScreenShake = function()
{
	this.m_bDoShake = true;
	this.m_nShakeTimer = 0;
}

CSceneGame.prototype.TryAbility = function( ele )
{
	var instance = this;
	var $ele = $J(ele);

	var nAbilityID = $ele.data('type');

	var nCooldown = this.GetCooldownForAbility( nAbilityID );
	if( nCooldown > 0)
	{
		g_AudioManager.play( 'wrongselection' );
		return;
	}


	this.m_rgAbilityQueue.push({
		'ability': nAbilityID
	});


	var nCooldownDuration = this.m_rgTuningData.abilities[nAbilityID].cooldown;
	//console.log("cooldown is %s", nCooldownDuration);
	this.ClientOverride('ability', parseInt( nAbilityID ), Math.floor(Date.now() / 1000 ) + nCooldownDuration );
	this.ApplyClientOverrides('ability', true );


	//g_AudioManager.play( 'nuke' );

	// Do ability-specific effects
	switch( nAbilityID )
	{
		case 10: // Nuke
			var enemy = this.GetEnemy( this.m_rgPlayerData.current_lane, this.m_rgPlayerData.target  );
			this.SpawnEmitter( g_rgEmitterCache.nuke_black_smoke, enemy.m_Sprite.position.x, enemy.m_Sprite.position.y );
			this.SpawnEmitter( g_rgEmitterCache.nuke_green_fog, enemy.m_Sprite.position.x, enemy.m_Sprite.position.y );
			g_AudioManager.play( 'nuke' );
			break;

		case 11: // Cluster bombs
			for( var i=0; i<12; i++)
			{
				var instance = this;
				setTimeout(function(){
					instance.SpawnEmitter( g_rgEmitterCache.explosion_purple_organge,350 + instance.m_rgPlayerData.current_lane * g_nLaneScrollAmount + Math.random() * 500, Math.random() * 720);
				}, 3000 * Math.random());
			}

			//console.log("%s, %s",360 + this.m_rgPlayerData.current_lane * g_nLaneScrollAmount, 720/2);
			g_AudioManager.play( 'clusterbomb' );
			break;

		case 12: // Cluster bombs

			this.SpawnEmitter( g_rgEmitterCache.fire_wave_flame,this.m_rgPlayerData.current_lane * g_nLaneScrollAmount,  0);
			this.SpawnEmitter( g_rgEmitterCache.fire_wave_cloud,this.m_rgPlayerData.current_lane * g_nLaneScrollAmount,  0);
			//console.log("%s, %s",360 + this.m_rgPlayerData.current_lane * g_nLaneScrollAmount, 720/2);
			g_AudioManager.play( 'napalm' );
			break;


		default:
			g_AudioManager.play( 'ability' );
			break;
	}
}

CSceneGame.prototype.SpawnEmitter = function( emitter, x, y, container )
{
	if( !container )
		container = this.m_containerParticles
	var rgTextures = [];
	for( var i=0; i < emitter.textures.length; i++ )
		rgTextures.push( g_rgTextureCache[ emitter.textures[i] ].texture );

	var emitter = new cloudkid.Emitter(
		container,
		rgTextures,
		emitter.emitter
	);

	emitter.updateOwnerPos( x, y);
	this.m_rgEmitters.push( emitter );
	emitter.emit = true;

	return emitter;
}

CSceneGame.prototype.TryChangeTarget = function( nNewTarget )
{
	if( this.m_rgPlayerData.target == nNewTarget )
		return;

	//console.log("Attempting to change target to %s", nNewTarget);
	var instance = this;

	this.QueueAbility({
		'ability': k_ETowerAttackAbility_ChangeTarget,
		'new_target': nNewTarget
	});
	this.m_rgPlayerData.target = nNewTarget;
	this.ClientOverride('player_data','target', nNewTarget);
	this.ApplyClientOverrides('player_data', true);

}

CSceneGame.prototype.ChangeLevel = function( strSceneName )
{
	var bIsBossLevel = this.m_rgGameData.level != 0 && (1+this.m_rgGameData.level) % 10 == 0;

	if( bIsBossLevel )
	{
		if( (1+this.m_rgGameData.level) % 100 == 0 )
			g_AudioManager.CrossfadeTrack('music_bossB');
		else
			g_AudioManager.CrossfadeTrack('music_boss');

	}
	else
		g_AudioManager.CrossfadeTrack('music');

	// @todo remove old references
	this.m_strLevelName = strSceneName;

	this.m_containerBG.removeChild( this.m_spriteBGSky );
	this.m_containerBG.removeChild( this.m_spriteBGClouds );
	this.m_containerBG.removeChild( this.m_spriteBGCloudsWrap );
	this.m_containerBG.removeChild( this.m_spriteBGFar );
	this.m_containerBG.removeChild( this.m_spriteBGMid );
	this.m_containerBG.removeChild( this.m_spriteBGNear );
	this.m_containerBG.removeChild( this.m_spriteBGFloor );

	$J('#col_right > .lanes').removeClass().addClass('lanes').addClass(strSceneName);



	switch( strSceneName )
	{
		case 'city_day':
			this.m_spriteBGFloor = new PIXI.Sprite( g_rgTextureCache["city_floor"].texture );
			this.m_spriteBGSky = new PIXI.Sprite( g_rgTextureCache["city_sky"].texture );
			this.m_spriteBGFar = new PIXI.Sprite( g_rgTextureCache["city_bg_far"].texture );
			this.m_spriteBGMid = new PIXI.Sprite( g_rgTextureCache["city_bg_mid"].texture );
			this.m_spriteBGNear = new PIXI.Sprite( g_rgTextureCache["city_bg_near"].texture );
			this.m_spriteBGClouds = new PIXI.Sprite( g_rgTextureCache["clouds"].texture );
			this.m_spriteBGCloudsWrap = new PIXI.Sprite( g_rgTextureCache["clouds"].texture );
			this.m_spriteBGClouds.alpha = this.m_spriteBGCloudsWrap.alpha = 0.7;
			break;

			case 'snow':
					this.m_spriteBGFloor = new PIXI.Sprite( g_rgTextureCache["snow_floor"].texture );
					this.m_spriteBGSky = new PIXI.Sprite( g_rgTextureCache["snow_sky"].texture );
					this.m_spriteBGFar = new PIXI.Sprite( g_rgTextureCache["snow_bg_far"].texture );
					this.m_spriteBGMid = new PIXI.Sprite( g_rgTextureCache["snow_bg_mid"].texture );
					this.m_spriteBGNear = new PIXI.Sprite( );
					this.m_spriteBGClouds = new PIXI.Sprite( g_rgTextureCache["clouds"].texture );
					this.m_spriteBGCloudsWrap = new PIXI.Sprite( g_rgTextureCache["clouds"].texture );
					//this.m_spriteBGClouds.alpha = this.m_spriteBGCloudsWrap.alpha = 0.7;
					break;

			case 'city_destroyed':
				this.m_spriteBGFloor = new PIXI.Sprite( g_rgTextureCache["cityr_floor"].texture );
				this.m_spriteBGSky = new PIXI.Sprite( g_rgTextureCache["cityr_sky"].texture );
				this.m_spriteBGFar = new PIXI.Sprite( g_rgTextureCache["cityr_bg_far"].texture );
				this.m_spriteBGMid = new PIXI.Sprite( g_rgTextureCache["cityr_bg_mid"].texture );
				this.m_spriteBGNear = new PIXI.Sprite( g_rgTextureCache["cityr_bg_near"].texture );
				this.m_spriteBGClouds = new PIXI.Sprite( g_rgTextureCache["clouds"].texture );
				this.m_spriteBGCloudsWrap = new PIXI.Sprite( g_rgTextureCache["clouds"].texture );

				this.m_spriteBGClouds.tint = this.m_spriteBGCloudsWrap.tint = 0x444444;
				this.m_spriteBGClouds.alpha = this.m_spriteBGCloudsWrap.alpha = 0.7;
				break;

			case 'stadium':
				this.m_spriteBGFloor = new PIXI.Sprite( g_rgTextureCache["stadium_floor"].texture );
				this.m_spriteBGSky = new PIXI.Sprite( g_rgTextureCache["stadium_sky"].texture );
				this.m_spriteBGFar = new PIXI.Sprite( g_rgTextureCache["stadium_bg_far"].texture );
				this.m_spriteBGMid = new PIXI.Sprite( g_rgTextureCache["stadium_bg_mid"].texture );
				this.m_spriteBGNear = new PIXI.Sprite( g_rgTextureCache["stadium_bg_near"].texture );
				this.m_spriteBGClouds = new PIXI.Sprite( g_rgTextureCache["clouds"].texture );
				this.m_spriteBGCloudsWrap = new PIXI.Sprite( g_rgTextureCache["clouds"].texture );

				//this.m_spriteBGClouds.tint = this.m_spriteBGCloudsWrap.tint = 0x444444;
				//this.m_spriteBGClouds.alpha = this.m_spriteBGCloudsWrap.alpha = 0.7;
				break;

			case 'volcano':
				this.m_spriteBGFloor = new PIXI.Sprite( g_rgTextureCache["volcano_floor"].texture );
				this.m_spriteBGSky = new PIXI.Sprite( g_rgTextureCache["volcano_sky"].texture );
				this.m_spriteBGFar = new PIXI.Sprite( g_rgTextureCache["volcano_bg_far"].texture );
				this.m_spriteBGMid = new PIXI.Sprite( g_rgTextureCache["volcano_bg_mid"].texture );
				this.m_spriteBGNear = new PIXI.Sprite( );
				this.m_spriteBGClouds = new PIXI.Sprite( g_rgTextureCache["clouds"].texture );
				this.m_spriteBGCloudsWrap = new PIXI.Sprite( g_rgTextureCache["clouds"].texture );

				this.m_spriteBGClouds.tint = this.m_spriteBGCloudsWrap.tint = 0x664444;
				this.m_spriteBGClouds.alpha = this.m_spriteBGCloudsWrap.alpha = 0.7;
				break;

			case 'island':
				this.m_spriteBGFloor = new PIXI.Sprite( g_rgTextureCache["island_floor"].texture );
				this.m_spriteBGSky = new PIXI.Sprite( g_rgTextureCache["island_sky"].texture );
				this.m_spriteBGFar = new PIXI.Sprite( g_rgTextureCache["island_bg_far"].texture );
				this.m_spriteBGMid = new PIXI.Sprite( g_rgTextureCache["island_bg_mid"].texture );
				this.m_spriteBGNear = new PIXI.Sprite( );
				this.m_spriteBGClouds = new PIXI.Sprite( g_rgTextureCache["clouds"].texture );
				this.m_spriteBGCloudsWrap = new PIXI.Sprite( g_rgTextureCache["clouds"].texture );

				//this.m_spriteBGClouds.tint = this.m_spriteBGCloudsWrap.tint = 0x664444;
				//this.m_spriteBGClouds.alpha = this.m_spriteBGCloudsWrap.alpha = 0.7;
				break;



			case 'city_night':
				this.m_spriteBGFloor = new PIXI.Sprite( g_rgTextureCache["night_floor"].texture );
				this.m_spriteBGSky = new PIXI.Sprite( g_rgTextureCache["night_sky"].texture );
				this.m_spriteBGFar = new PIXI.Sprite( g_rgTextureCache["night_bg_far"].texture );
				this.m_spriteBGMid = new PIXI.Sprite( g_rgTextureCache["night_bg_mid"].texture );
				this.m_spriteBGNear = new PIXI.Sprite( g_rgTextureCache["night_bg_near"].texture );
				this.m_spriteBGClouds = new PIXI.Sprite( g_rgTextureCache["clouds"].texture );
				this.m_spriteBGCloudsWrap = new PIXI.Sprite( g_rgTextureCache["clouds"].texture );

				this.m_spriteBGClouds.tint = this.m_spriteBGCloudsWrap.tint = 0x333333;
				this.m_spriteBGClouds.alpha = this.m_spriteBGCloudsWrap.alpha = 0.7;
				break;

			case 'space':
				this.m_spriteBGFloor = new PIXI.Sprite( g_rgTextureCache["space_floor"].texture );
				this.m_spriteBGSky = new PIXI.Sprite( g_rgTextureCache["space_sky"].texture );
				this.m_spriteBGFar = new PIXI.Sprite( g_rgTextureCache["space_bg_far"].texture );
				this.m_spriteBGMid = new PIXI.Sprite( g_rgTextureCache["space_bg_mid"].texture );
				this.m_spriteBGNear = new PIXI.Sprite( g_rgTextureCache["space_bg_near"].texture );
				this.m_spriteBGClouds = new PIXI.Sprite(  );
				this.m_spriteBGCloudsWrap = new PIXI.Sprite( );

				//this.m_spriteBGClouds.tint = this.m_spriteBGCloudsWrap.tint = 0x333333;
				//this.m_spriteBGClouds.alpha = this.m_spriteBGCloudsWrap.alpha = 0.7;
				break;

			case 'ocean_floor':
				this.m_spriteBGFloor = new PIXI.Sprite( g_rgTextureCache["ocean_floor"].texture );
				this.m_spriteBGSky = new PIXI.Sprite( g_rgTextureCache["ocean_sky"].texture );
				this.m_spriteBGFar = new PIXI.Sprite( g_rgTextureCache["ocean_bg_far"].texture );
				this.m_spriteBGMid = new PIXI.Sprite( g_rgTextureCache["ocean_bg_mid"].texture );
				this.m_spriteBGNear = new PIXI.Sprite( g_rgTextureCache["ocean_bg_near"].texture );
				this.m_spriteBGClouds = new PIXI.Sprite(  );
				this.m_spriteBGCloudsWrap = new PIXI.Sprite(  );

				this.m_spriteBGNear.alpha = 0.4;
				break;


		case 'desert':
		default:
			this.m_spriteBGFloor = new PIXI.Sprite( g_rgTextureCache["desert_floor"].texture );
			this.m_spriteBGSky = new PIXI.Sprite( g_rgTextureCache["desert_sky"].texture );
			this.m_spriteBGFar = new PIXI.Sprite( g_rgTextureCache["desert_dunes"].texture );
			this.m_spriteBGMid = new PIXI.Sprite( );
			this.m_spriteBGNear = new PIXI.Sprite();
			this.m_spriteBGClouds = new PIXI.Sprite( g_rgTextureCache["clouds"].texture );
			this.m_spriteBGCloudsWrap = new PIXI.Sprite( g_rgTextureCache["clouds"].texture );


	}

	var nBGScale = 3;
	/*this.m_spriteBGFloor.scale.x = this.m_spriteBGFloor.scale.y = nBGScale;
	this.m_spriteBGSky.scale.x = this.m_spriteBGSky.scale.y = nBGScale;
	this.m_spriteBGFar.scale.x = this.m_spriteBGFar.scale.y = nBGScale;
	this.m_spriteBGMid.scale.x = this.m_spriteBGMid.scale.y = nBGScale;
	this.m_spriteBGNear.scale.x = this.m_spriteBGNear.scale.y = nBGScale;
	this.m_spriteBGClouds.scale.x = this.m_spriteBGClouds.scale.y = nBGScale;
	this.m_spriteBGCloudsWrap.scale.x = this.m_spriteBGCloudsWrap.scale.y = nBGScale;*/

	this.m_containerBG.addChild( this.m_spriteBGSky );
	this.m_containerBG.addChild( this.m_spriteBGClouds );
	this.m_containerBG.addChild( this.m_spriteBGCloudsWrap );
	this.m_containerBG.addChild( this.m_spriteBGFar );
	this.m_containerBG.addChild( this.m_spriteBGMid );
	this.m_containerBG.addChild( this.m_spriteBGFloor );
	this.m_containerBG.addChild( this.m_spriteBGNear );

	this.m_rtBackground.render( this.m_containerBG );



}

CSceneGame.prototype.TickBG = function()
{

	if(this.m_Manager.Renderer instanceof PIXI.WebGLRenderer)
	{
		this.m_nCloudPosition += 0.02;
		this.m_nBGTicks++;

		this.m_rtBackground.render( this.m_containerBG );
	}

	var nPosition = Math.floor( this.m_containerEnemies.position.x / 2 ) - 85;

	if( this.m_nCloudPosition >= this.m_spriteBGCloudsWrap.width )
	{
		this.m_nCloudPosition -= this.m_spriteBGClouds.width;
	}


	this.m_spriteBGFloor.position.x = Math.floor(nPosition);
	this.m_spriteBGSky.position.x = Math.floor(nPosition/2); //1.2;
	this.m_spriteBGClouds.position.x = Math.floor(nPosition/1.9 - this.m_nCloudPosition);///1.2 - this.m_nCloudPosition;
	this.m_spriteBGFar.position.x = Math.floor(nPosition/1.8);
	this.m_spriteBGMid.position.x = Math.floor(nPosition/1.5);///1.8;
	this.m_spriteBGNear.position.x = Math.floor(nPosition/1.2);//;

	this.m_spriteBGCloudsWrap.position.x = this.m_spriteBGClouds.position.x + this.m_spriteBGClouds.width;


}


function GetAdjustedX(nLocalY, nParentX )
{

	var nScaleRate = GetScaleFactor( nLocalY );
	return (nScaleRate * nParentX)//' + nOffset;// + ( nOffset * nScaleRate );
}

function GetAdjustedScale( nLocalY, nLocalScale )
{
	var nScaleRate = GetScaleFactor( nLocalY );
	return nLocalScale + (nLocalScale/2) * nScaleRate
}

function GetScaleFactor( nLocalY )
{
	return (k_ScreenHeight-nLocalY)/600;
}


CSceneGame.prototype.TryChangeLane = function( nLane )
{
	this.QueueAbility({
		'ability': k_ETowerAttackAbility_ChangeLane,
		'new_lane': nLane
	});

	var nDeltaX = (nLane * -g_nLaneScrollAmount) - this.m_containerEnemies.x
	this.m_easingBG = new CEasingQuadOut(this.m_containerEnemies.x, nDeltaX, 750);
	this.m_rgPlayerData.current_lane = nLane;
	this.m_nExpectedLane = nLane;
	this.ClientOverride('player_data','current_lane', nLane);
	this.m_UI.OnGameDataUpdate();
}

CSceneGame.prototype.QueueAbility = function( rgAbility )
{
	for( var i=this.m_rgAbilityQueue.length-1; i >= 0; i--)
	{
		if( this.m_rgAbilityQueue[i].ability == rgAbility.ability )
		{
			console.log("NO. BAD HUMAN.");
			this.m_rgAbilityQueue[i] = rgAbility;
			return;
		}
	}

	this.m_rgAbilityQueue.push( rgAbility );
}

CSceneGame.prototype.ClearNewPlayer = function()
{
	if( this.m_spriteFinger )
	{
		this.m_spriteFinger.visible = false;
		var bPlayedBefore = WebStorage.SetLocal('mg_how2click', 1);
		this.m_spriteFinger = false;
		$J('#newplayer').hide();
	}
}

CSceneGame.prototype.CheckNewPlayer = function( )
{
	var bPlayedBefore = WebStorage.GetLocal('mg_how2click');

	if( !bPlayedBefore )
	{
		$J('#newplayer').show();
		this.m_rgFingerTextures = [];
		var w = 26;
		var h = 49;


		for( var y = 0; y < 4; y++)
		{
			for( var x = 0; x < 5; x++ )

			{
				this.m_rgFingerTextures.push( new PIXI.Texture( g_rgTextureCache.pointer.texture, {
					x: x * w,
					y: y * h,
					width: w,
					height: h
				} )
				);
			}
		}

		this.m_nFingerIndex = 0;

		this.m_spriteFinger = new PIXI.Sprite( this.m_rgFingerTextures[this.m_nFingerIndex] );
		this.m_spriteFinger.scale.x = this.m_spriteFinger.scale.y = 2;

		this.m_containerParticles.addChild( this.m_spriteFinger );
	}


}
// Stats functions we don't always include, redefine just in case.
function FloorToMultipleOf( multipleOf, number )
{
	return Math.floor( number / multipleOf ) * multipleOf;
}

function CalcExponentialTuningValve( level, coefficient, base )
{
	return ( coefficient * ( Math.pow( base, level ) ) );
}

// A shoddy implementation of an otherwise reasonable prng
function xorprng( x, nMax ) {
	x ^= parseInt( g_GameID ); // a
	x ^= x << 25; // b
	x ^= x >> 27; // c
	return ( x * 338717 ) % nMax;
}