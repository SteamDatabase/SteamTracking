// <script>
"use strict";

function CBossState( planetData, zoneidx, gameid )
{
	this.m_gameid = gameid;
	CBattleState.call( this, planetData, zoneidx );
	this.m_bPlayIntro = false;
}
CBossState.prototype = Object.create(CBattleState.prototype);

CBossState.prototype.Load = function()
{
	LoadAsset( 'boss-sprites0', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/boss-sprites0.json' );
	LoadAsset( 'boss-sprites1', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/boss-sprites1.json' );
	LoadAsset( 'boss-sprites2', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/boss-sprites2.json' );
	LoadAsset( 'boss-sprites3', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/boss-sprites3.json' );
	LoadAsset( 'boss-death-0', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/boss-death-0.json' );
	LoadAsset( 'boss-death-1', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/boss-death-1.json' );
	LoadAsset( 'boss_laser', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/boss_laser.json' );
	LoadAsset( 'boss_music', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/sfx/SS2018_Saliens_Boss2.{ogg,mp3}' );
	LoadAsset( 'boss_roar', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/sfx/boss_roar.{ogg,mp3}' );
	LoadAsset( 'boss_death', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/sfx/boss_vox_death.{ogg,mp3}' );
	LoadAsset( 'boss_attack', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/sfx/boss_vox_attack_01.{ogg,mp3}' );
	LoadAsset( 'boss_lasershoot', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/sfx/boss_laser_shoot.{ogg,mp3}' );
	LoadAsset( 'boss_laserhit', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/sfx/boss_laser_impact.{ogg,mp3}' );
	CBattleState.prototype.Load.call( this );
};

CBossState.prototype.OnLoadComplete = function(loader, resources)
{
	this.m_SalienContainer = new PIXI.Container();
	gApp.stage.addChild( this.m_SalienContainer );

	CBattleState.prototype.OnLoadComplete.call( this, loader, resources );

	var instance = this;

	this.m_TotalScore.visible = false;
	this.m_TotalScoreText.visible = false;
	this.m_bAccrueScore = false;
	this.m_Timer.visible = false;
	this.m_ScoreCounter.visible = false;
	this.m_TimerMenu.visible = false;
	this.m_TimeRemainingText.visible = true;
	this.m_TimeRemainingText.text = 'Quit';
	this.m_TimeRemainingText.interactive = true;
	this.m_TimeRemainingText.buttonMode = true;
	this.m_TimeRemainingText.pointertap = function() {
		instance.EndGame( false );
		instance.RenderVictoryScreen();
	};
	this.m_TimeRemainingText.style = {
		fontFamily: k_FontType,
		fontSize: 16,
		fill: 'white',
		align: 'center',
	};
	this.m_bUpdateTimer = false;
	this.m_strMusicName = 'boss_music';
	this.m_bLoopMusic = true;
	this.m_strDifficulty = 'boss';
	this.m_bWaitingForPlayers = true;
	this.m_bStarting = false;
	this.m_PlayerDead = false;
	this.m_bGameEnding = false;
	this.m_PlayerDamageTick = 0;
	this.m_nLaserHits = 0;
	this.m_nHealingUsed = 0;
	this.m_LastDamageResponse = null;
	this.m_bUsedHealing = false;
	this.m_nBossHealth = 1000000;
	this.m_nMaxBossHealth = 1000000;

	this.m_nConsecutiveFailures = 0;

	this.m_rgBossLaserTargets = [];
	this.m_rgHealTargets = [];

	// TODO add other positions
	this.m_rgSalienLocations =
		[{ x: 150, y: 300, scale: 0.045 },
			{ x: 30, y: 345, scale: 0.045 },
			{ x: 90, y: 390, scale: 0.045 },
			{ x: 150, y: 435, scale: 0.045 },
			{ x: 30, y: 480, scale: 0.045 },
			{ x: 90, y: 710, scale: 0.045 },
			{ x: 150, y: 690, scale: 0.045 },
			{ x: 90, y: 615, scale: 0.045 },
			{ x: 30, y: 660, scale: 0.045 },
			{ x: 60, y: 525, scale: 0.045 }];

	this.m_mapAllySaliens = new Map();

	this.m_SalienContainer = new PIXI.Container();
	gApp.stage.addChild( this.m_SalienContainer );

	//gApp.stage.removeChild( gSalien );
	//gApp.stage.addChild( gSalien );

	gSalien.position.set( 154, 550 );
	gSalien.scale.set( 0.065, 0.065 );
	gSalien.visible = true;

	this.RenderIntroScreen();


	this.m_UpdateHandler = setInterval( function() {
		var bossDamage = 0;
		if ( instance.m_EnemyManager !== undefined && instance.m_EnemyManager.m_Boss !== undefined )
		{
			bossDamage = instance.m_EnemyManager.m_Boss.m_DamageTick;
			instance.m_EnemyManager.m_Boss.m_DamageTick = 0;
		}

		var damageTaken = instance.m_PlayerDamageTick;
		instance.m_PlayerDamageTick = 0;

		var usedHealing = instance.m_bUsedHealing ? 1 : 0;
		instance.m_bUsedHealing = false;

		gServer.ReportBossDamage(
			bossDamage,
			damageTaken,
			usedHealing,
			function( results ) {
				instance.m_nConsecutiveFailures = 0;
				var bossStatus = results.response.boss_status;

				if ( results.response.game_over )
				{
					instance.m_bGameEnding = true;
					clearInterval( instance.m_UpdateHandler );
				}

				instance.m_nBossHealth = bossStatus.boss_hp;
				instance.m_nMaxBossHealth = bossStatus.boss_max_hp;
				if ( instance.m_EnemyManager !== undefined && instance.m_EnemyManager.m_Boss !== undefined )
				{
					instance.m_EnemyManager.m_Boss.UpdateDamage( bossStatus.boss_hp, bossStatus.boss_max_hp );
				}

				if ( instance.m_bWaitingForPlayers && !results.response.waiting_for_players )
				{
					instance.m_bWaitingForPlayers = false;
					instance.m_IntroScreen.continueButton.visible = true;
					instance.m_IntroScreen.waitingForPlayersText.visible = false;
				}

				if ( instance.m_nHealingUsed < results.response.num_team_heals && instance.m_AttackManager !== undefined )
				{
					instance.m_nHealingUsed = results.response.num_laser_uses;
					instance.m_nHealingUsed = false;
					instance.m_AttackManager.HealingAttack( true );
				}

				if ( bossStatus.boss_players !== undefined )
				{
					var rgCurrentAccountIDs = [];
					instance.m_mapAllySaliens.forEach( function ( allySalien, accountid ) {
						rgCurrentAccountIDs.push( accountid );
					});

					bossStatus.boss_players.forEach( function ( player ) {
						if ( player.accountid != gAccountID )
						{
							var bExists = false;
							for( var i = rgCurrentAccountIDs.length - 1; i >= 0; --i )
							{
								if ( rgCurrentAccountIDs[i] == player.accountid )
								{
									bExists = true;
									rgCurrentAccountIDs.splice( i, 1 );
									break;
								}
							}

							if ( !bExists && instance.m_mapAllySaliens.size < 10 )
							{
								instance.GenerateSalienAlly( player );
							}
							else
							{
								instance.UpdateSalienAlly( player );
							}
						}
						else if ( player.accountid == gAccountID )
						{
							if ( instance.m_nLaserHits < results.response.num_laser_uses )
							{
								instance.m_nLaserHits = results.response.num_laser_uses;
								instance.m_rgBossLaserTargets.push( { target:gSalien, isplayer:true, playerdata:player } );
							}
							else
							{
								instance.m_PlayerHealth = player.hp;
								instance.m_PlayerMaxHealth = player.max_hp;
								instance.DamagePlayer( 0 );
							}

							instance.m_LastDamageResponse = player;
							if ( player.hp > instance.m_PlayerHealth )
							{
								instance.m_rgHealTargets.push( player.accountid );
							}

							if ( gSalien.m_PlayerName === undefined )
							{
								gSalien.AddPlayerName( player.name );
							}

							instance.m_Score = player.xp_earned;
						}
					});

					rgCurrentAccountIDs.forEach( function( accountid ) {
						instance.KillSalienAlly( accountid );
					});
				}
			},
			function( results, eresult ) {
				instance.m_nConsecutiveFailures++;
				if ( eresult == 11 )
				{
					this.EndGame( false );
				}
				else if ( instance.m_nConsecutiveFailures > 5 )
				{
					GameLoadError();
				}
			}
		);
	}, 5000);
};

CBossState.prototype.Shutdown = function()
{
	CBattleState.prototype.Shutdown.call(this);
	gSalien.filters = null;
	gSalien.alpha = 1.0;
	gSalien.RemoveGameObjects();
	clearInterval( this.m_UpdateHandler );
};

CBossState.prototype.StartGame = function()
{
	// start the match
	this.m_rtBattleStart = Date.now();
	this.m_rtScoreAccrual = this.m_rtBattleStart;
	this.m_rtBattleEnd = Date.now() + k_MatchLengthSec * 1000;

	this.m_bStarting = false;
	this.m_bRunning = true;

	this.m_EnemyManager = new CEnemyManager( this );
	this.m_LevelManager = new CLevelManager( this, this.m_strDifficulty );
	this.m_ScoreIncrements = this.m_ScoreIncrements * this.m_LevelManager.m_LevelData.score_multiplier;

	gAudioManager.PlayMusic( this.m_strMusicName, this.m_bLoopMusic );

	// set default attack
	this.m_AttackManager = new CAttackManager( this, undefined, true );
	this.m_AttackManager.BuildAttacks();
	this.m_EnemyManager.SpawnBoss( this.m_LevelManager.m_LevelData );

	this.m_TimeRemainingText.visible = true;

};

CBossState.prototype.UpdateSaliens = function( delta )
{
	var instance = this;
	this.m_mapAllySaliens.forEach( function(salien ) {
		var enemyID = GetRandomKeyFromMap( instance.m_EnemyManager.m_mapEnemies );
		if ( enemyID === undefined )
		{
			return;
		}

		var enemy = instance.m_EnemyManager.m_mapEnemies.get( enemyID );
		salien.attackManager.Attack( { keyCode:49 }, enemy.m_Sprite.x + enemy.m_Sprite.width / 2, enemy.m_Sprite.y + enemy.m_Sprite.height / 2 );

		salien.attackManager.Update( delta );
		salien.Update();
	});
};

CBossState.prototype.Update = function(delta)
{
	if ( this.m_bWaitingForPlayers )
	{
		return;
	}

	var now = Date.now();

	if ( this.m_bStarting )
	{
		this.StartGame();

		this.m_EnemyManager.m_Boss.Roar();
		this.m_LastRoar = now;
	}

	if ( this.m_EnemyManager !== undefined && this.m_EnemyManager.m_Boss !== undefined && !this.m_EnemyManager.m_Boss.m_bDead
		&& this.m_rgBossLaserTargets.length > 0 && this.m_EnemyManager.m_Boss.targetsalien === undefined )
	{
		var targetData = this.m_rgBossLaserTargets.pop();
		if ( targetData.target.visible )
		{
			this.m_EnemyManager.m_Boss.Attack( targetData );
		}
	}

	if ( this.m_bRunning )
	{
		if ( this.m_EnemyManager.m_Boss.m_bMoving )
		{
			var roarchance = WeakRandomInt( 0, 100 );
			if ( roarchance > 99 && this.m_LastRoar + 25000 > now )
			{
				this.m_EnemyManager.m_Boss.Roar();
			}
		}

		this.m_turretSprite.visible = true;
		this.m_barrelSprite.visible = true;
		this.m_obscuringTurretSprite.visible = true;
		this.m_BaseContainer.y = k_ScreenHeight - this.m_BaseContainer.height;
		this.m_cableSprite.visible = true;

		var x = gApp.renderer.plugins.interaction.mouse.global.x;
		var y = gApp.renderer.plugins.interaction.mouse.global.y;

		var dx = x - this.m_barrelSprite.worldTransform.tx;
		var dy = y - this.m_barrelSprite.worldTransform.ty;
		var dist = Math.sqrt( dx*dx + dy*dy );
		this.m_barrelSprite.rotation = Math.asin( dy / dist );

		this.m_AttackManager.Update( delta );

		this.UpdateSaliens();

		this.m_LevelManager.Update( delta );

		this.m_EnemyManager.Update( delta );
	}
};

CBossState.prototype.SpawnFakeAlly = function()
{
	if ( this.m_mapAllySaliens.size > 9 )
	{
		return;
	}

	var salien = Object.assign( {}, this.m_LastDamageResponse );
	salien.accountid += 1 + this.m_mapAllySaliens.size ;
	this.GenerateSalienAlly( salien );
};

CBossState.prototype.GenerateSalienAlly = function( playerData )
{
	var positionObj = this.m_rgSalienLocations.pop();

	var salienData = Object.assign( {}, gSalienData );
	salienData.body_type = playerData.salien.body_type - 1;
	salienData.mouth = playerData.salien.mouth - 1;
	salienData.eyes = playerData.salien.eyes - 1;
	salienData.arms = playerData.salien.arms - 1;
	salienData.legs = playerData.salien.legs - 1;
	salienData.hat_itemid = playerData.salien.hat_itemid;
	salienData.hat_image = 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/' + playerData.salien.hat_image;
	salienData.shirt_itemid = playerData.salien.shirt_itemid;
	salienData.shirt_image = 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/' + playerData.salien.shirt_image ;

	var allySalien = new CSalien(PIXI.loader.resources, salienData);
	allySalien.position.set(positionObj.x, positionObj.y);
	allySalien.scale.set(positionObj.scale, positionObj.scale);
	allySalien.attackManager = new CAttackManager( this, allySalien );
	allySalien.attackManager.BuildAttacks();
	allySalien.UpdateHealth( playerData.hp, playerData.max_hp );
	allySalien.AddPlayerName( playerData.name );
	this.m_SalienContainer.addChild(allySalien);
	this.m_SalienContainer.children.sort( function(a,b) {
		a.z = -a.y || 0;
		b.z = -b.y || 0;
		return b.z - a.z
	});

	this.m_mapAllySaliens.set( playerData.accountid, allySalien );
};

CBossState.prototype.KillSalienAlly = function( accountid )
{
	var positionObj = { x:0,y:0,scale:0 };

	var allySalien = this.m_mapAllySaliens.get( accountid );
	if ( allySalien === undefined )
		return;

	positionObj.x = allySalien.x;
	positionObj.y = allySalien.y;
	positionObj.scale = allySalien.scale.x;
	this.m_rgSalienLocations.push( positionObj );

	allySalien.RemoveGameObjects();
	allySalien.attackManager.Destroy();
	this.m_SalienContainer.removeChild( allySalien );

	this.m_mapAllySaliens.delete( accountid );
};

CBossState.prototype.UpdateSalienAlly = function( playerData )
{
	var allySalien = this.m_mapAllySaliens.get( playerData.accountid );
	if ( allySalien === undefined )
		return;

	if ( playerData.hp < allySalien.m_PlayerHealth - 200 || playerData.hp == 0 )
	{
		this.m_rgBossLaserTargets.push( { target:allySalien, isplayer:false, playerdata:playerData } );
	}
	else
	{
		allySalien.UpdateHealth( playerData.hp, playerData.max_hp );
	}
};

CBossState.prototype.DamagePlayer = function( nAmount )
{
	if ( this.m_rtPlayerInvulnerable > Date.now() || this.m_rtDefensesRepaired != 0 )
	{
		return;
	}

	gSalien.PlayAnim("hurt", false, 1);

	this.m_PlayerHealth -= nAmount;
	this.m_PlayerDamageTick += nAmount;
	gSalien.UpdateHealth( this.m_PlayerHealth, this.m_PlayerMaxHealth );

	if ( this.m_PlayerHealth <= 0 )
	{
		gSalien.alpha = 0.3;
		var deadFilter = new PIXI.filters.ColorMatrixFilter();
		deadFilter.greyscale( 0.5 );
		gSalien.filters = [deadFilter];
		this.EndGame( false );
	}
};

CBossState.prototype.EndGame = function( bWin )
{
	if ( this.m_EnemyManager !== undefined )
	{
		this.m_EnemyManager.SetInteractive( false );
		this.m_EnemyManager.m_mapEnemies.forEach( function( enemy ) {
			if ( enemy instanceof CBoss )
			{
				return;
			}
			enemy.Die();
		} );
	}

	if ( this.m_AttackManager !== undefined )
	{
		this.m_AttackManager.SetDisabled( true );
	}

	this.m_bRunning = false;

	if ( bWin )
	{
		gAudioManager.PlaySound( 'stinger_win', true );
	}
	else
	{
		var instance = this;
		gServer.LeaveGameInstance(
			instance.m_gameid,
			function(){},
			function(){} );
		gAudioManager.PlaySound( 'stinger_lose', true );
	}

	clearInterval( this.m_UpdateHandler );
	this.RenderVictoryScreen();
};

CBossState.prototype.HealPlayer = function( nAmount )
{
	gSalien.PlayAnim("greet", false, 1);
	this.m_bUsedHealing = true;
	this.m_PlayerHealth += nAmount;
	gSalien.UpdateHealth( this.m_PlayerHealth, this.m_PlayerMaxHealth );
};

CBossState.prototype.RenderIntroScreen = function()
{
	var instance = this;
	this.m_IntroScreen = new PIXI.Container();
	this.m_IntroScreen.x = 375;
	this.m_IntroScreen.y = 140;

	var victoryBackground = new PIXI.Graphics();
	victoryBackground.beginFill( 0x000000, 1.0 );
	victoryBackground.drawRect( 0, 0, 545, 405 );
	victoryBackground.endFill();
	this.m_IntroScreen.addChild( victoryBackground );

	var continueButton = new PIXI.Graphics();
	continueButton.beginFill( k_UIWhite, 1.0 );
	continueButton.drawRect( 0, 0, 230, 40 );
	continueButton.endFill();
	this.m_IntroScreen.continueButton = continueButton;
	this.m_IntroScreen.addChild( continueButton );
	continueButton.x = 155;
	continueButton.y = 300;
	continueButton.interactive = true;
	continueButton.buttonMode = true;
	continueButton.pointertap = function () {
		instance.m_IntroScreen.visible = false;
		instance.m_bStarting = true;
	};

	var continueText = new PIXI.Text( 'Fight!'.toUpperCase() );
	continueText.style = {
		fontFamily: k_FontType,
		fontSize: 18,
		fontWeight: 'bold',
		fill: 'black',
		align: 'center',
	};
	continueButton.addChild( continueText );
	continueText.anchor.set( 0.5, 0.5 );
	continueText.x = 115;
	continueText.y = 20;

	var waitingForPlayersText = new PIXI.Text( 'Waiting for players...'.toUpperCase() );
	waitingForPlayersText.style = {
		fontFamily: k_FontType,
		fontSize: 18,
		fontWeight: 'bold',
		fill: 'white',
		align: 'center',
	};
	waitingForPlayersText.anchor.set( 0.5, 0.5 );
	waitingForPlayersText.x = victoryBackground.width / 2;
	waitingForPlayersText.y = 300;
	this.m_IntroScreen.addChild( waitingForPlayersText );
	this.m_IntroScreen.waitingForPlayersText = waitingForPlayersText;

	continueButton.visible = false;

	gApp.stage.addChild( this.m_IntroScreen );

	var bossText = new PIXI.Text( 'There is no respawning in this deadly battle,\nbut you have vastly increased health.' );
	bossText.style = {
		fontFamily: k_FontType,
		fontSize: 16,
		fontWeight: 'bold',
		fill: 'white',
		align: 'center',
	};
	bossText.anchor.set( 0.5, 0.5 );
	bossText.x = victoryBackground.width / 2;
	bossText.y = 100;
	this.m_IntroScreen.addChild( bossText );

	var healText = new PIXI.Text( 'Use your new healing ability to help\nyour fellow Saliens defeat this deadly Duldrum boss!' );
	healText.style = {
		fontFamily: k_FontType,
		fontSize: 16,
		fontWeight: 'bold',
		fill: 'white',
		align: 'center',
	};
	healText.anchor.set( 0.5, 0.5 );
	healText.x = victoryBackground.width / 2;
	healText.y = bossText.y + 95;
	this.m_IntroScreen.addChild( healText );
};


CBossState.prototype.RenderVictoryScreen = function( result )
{
	gApp.renderer.plugins.interaction.cursorStyles.default = 'inherit';
	gApp.renderer.plugins.interaction.cursorStyles.pointer = 'pointer';

	var instance = this;
	this.m_VictoryScreen = new PIXI.Container();
	this.m_VictoryScreen.x = 375;
	this.m_VictoryScreen.y = 140;

	var victoryBackground = new PIXI.Graphics();
	victoryBackground.beginFill( 0x000000, 1.0 );
	victoryBackground.drawRect( 0, 0, 545, 405 );
	victoryBackground.endFill();
	this.m_VictoryScreen.addChild( victoryBackground );

	var continueButton = new PIXI.Graphics();
	continueButton.beginFill( k_UIWhite, 1.0 );
	continueButton.drawRect( 0, 0, 230, 40 );
	continueButton.endFill();
	this.m_VictoryScreen.addChild( continueButton );
	continueButton.x = 155;
	continueButton.y = 300;
	continueButton.interactive = true;
	continueButton.buttonMode = true;
	continueButton.pointertap = function () {
		instance.m_VictoryScreen.visible = false;
		if ( instance.m_LastDamageResponse !== null && instance.m_LastDamageResponse.new_level !== undefined && instance.m_LastDamageResponse.new_level > instance.m_LastDamageResponse.level_on_join )
		{
			instance.RenderLevelUpScreen( instance.m_LastDamageResponse );
		}
		else
		{
			gGame.ChangeState( new CBattleSelectionState( instance.m_PlanetData.id ) );
		}
	};

	var continueText = new PIXI.Text( 'Continue'.toUpperCase() );
	continueText.style = {
		fontFamily: k_FontType,
		fontSize: 18,
		fontWeight: 'bold',
		fill: 'black',
		align: 'center',
	};
	continueButton.addChild( continueText );
	continueText.anchor.set( 0.5, 0.5 );
	continueText.x = 115;
	continueText.y = 20;

	var reportingScoreText = new PIXI.Text( 'Reporting Score to Salien High Command...'.toUpperCase() );
	reportingScoreText.style = {
		fontFamily: k_FontType,
		fontSize: 18,
		fontWeight: 'bold',
		fill: 'white',
		align: 'center',
	};
	reportingScoreText.anchor.set( 0.5, 0.5 );
	reportingScoreText.x = victoryBackground.width / 2;
	reportingScoreText.y = 300;
	this.m_VictoryScreen.addChild( reportingScoreText );

	continueButton.visible = false;

	var victoryText = new PIXI.Text( 'Battle Complete!'.toUpperCase() );
	victoryText.style = {
		fontFamily: k_FontType,
		fontSize: 48,
		fontWeight: 'bold',
		fill: 'white',
		align: 'center',
	};
	victoryText.anchor.set( 0.5, 0.5 );
	victoryText.x = victoryBackground.width / 2;
	victoryText.y = 100;
	this.m_VictoryScreen.addChild( victoryText );

	var planetVictoryText = new PIXI.Text( 'On '.toUpperCase() + this.m_PlanetData.state.name );
	planetVictoryText.style = {
		fontFamily: k_FontType,
		fontSize: 16,
		fontWeight: 'bold',
		fill: 'white',
		align: 'center',
	};
	planetVictoryText.anchor.set( 0.5, 0.5 );
	planetVictoryText.x = victoryText.x;
	planetVictoryText.y = victoryText.y + ( victoryText.height / 2 ) + 5;
	this.m_VictoryScreen.addChild( planetVictoryText );

	var enemiesDefeated = this.m_EnemyManager !== undefined ? this.m_EnemyManager.m_nDefeatedEnemies : 0;
	var enemiesVanquishedText = new PIXI.Text( 'You vanquished ' + enemiesDefeated + ' enemy aliens' );
	enemiesVanquishedText.style = {
		fontFamily: k_FontType,
		fontSize: 24,
		fill: 'white',
		align: 'center',
	};
	enemiesVanquishedText.anchor.set( 0.5, 0.5 );
	enemiesVanquishedText.x = victoryText.x;
	enemiesVanquishedText.y = planetVictoryText.y + ( planetVictoryText.height / 2 ) + 40;
	this.m_VictoryScreen.addChild( enemiesVanquishedText );

	var victoryScoreText = new PIXI.Text( 'Final Score: ' + this.m_Score );
	victoryScoreText.style = {
		fontFamily: k_FontType,
		fontSize: 24,
		fill: 'white',
		align: 'center',
	};
	victoryScoreText.anchor.set( 0.5, 0.5 );
	victoryScoreText.x = victoryText.x;
	victoryScoreText.y = enemiesVanquishedText.y + ( enemiesVanquishedText.height / 2 ) + 20;
	this.m_VictoryScreen.addChild( victoryScoreText );

	//victoryBackground
	var gameFadeOut = new PIXI.Graphics();
	gameFadeOut.beginFill( 0x000000, 0.8 );
	gameFadeOut.drawRect( 0, 0, 545, 135 );
	gameFadeOut.endFill();
	gameFadeOut.x = victoryBackground.x;
	gameFadeOut.y = victoryBackground.height;
	this.m_VictoryScreen.addChild( gameFadeOut );

	var enteredText = new PIXI.Text( 'You have been entered to win one of these four games:' );
	enteredText.style = {
		fontFamily: k_FontType,
		fontSize: 14,
		fill: 'white',
		align: 'center',
	};
	enteredText.anchor.set( 0.5, 0.5 );
	enteredText.x = gameFadeOut.width / 2;
	enteredText.y = 20;
	gameFadeOut.addChild( enteredText );

	// loop over all the apps
	for(var idx = 0; idx < this.m_PlanetData.giveaway_apps.length; idx++ )
	{
		var appid = this.m_PlanetData.giveaway_apps[idx];

		// retrieve our image
		var sprite = new PIXI.Sprite.fromImage('app_' + appid);
		sprite.width = k_GameBoxW;
		sprite.height = k_GameBoxH;
		sprite.interactive = true;
		sprite.buttonMode = true;
		sprite.appid = appid;
		sprite.pointertap = function() {
			window.open( 'https://store.steampowered.com/app/'+this.appid + '/?snr=1_saliens_4__salienapps', '_blank' );
		};
		gameFadeOut.addChild(sprite);

		sprite.x = 80 + (idx * (k_GameBoxW + k_GameBoxPadding));
		sprite.y = enteredText.y + 20;
	}

	this.button = new CUIButton( 300, 40, 'Browse Similar Games on Sale'.toUpperCase() );
	this.button.x = 122;
	this.button.y = enteredText.y + enteredText.height / 2 + 60;
	this.button.click = function(btn) {
		gAudioManager.PlaySound( 'ui_select' );
		if ( instance.m_PlanetData.state.tag_ids !== undefined )
		{
			window.open( 'https://store.steampowered.com/search/?snr=1_saliens_4__salientags&tags=' + instance.m_PlanetData.state.tag_ids, '_blank' );
		}
		else
		{
			window.open( 'https://store.steampowered.com/', '_blank' );
		}
	};

	gameFadeOut.addChild( this.button );

	gApp.stage.addChild( this.m_VictoryScreen );


	gServer.GetPlayerInfo(
		function ( results ) {
			gPlayerInfo = results.response;
			reportingScoreText.visible = false;
			continueButton.visible = true;
		},
		function() {
			reportingScoreText.visible = false;
			continueButton.visible = true;
		}
	);
};