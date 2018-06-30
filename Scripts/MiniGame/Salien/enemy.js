// <script>
"use strict";

var gEnemiesVersion = 1;
var k_SpawnHeightLimit = 300;
var k_nDamagePointx = 224;

////// Enemy Manager /////
function CEnemyManager( battleState )
{
	this.m_mapEnemies = new Map();
	this.m_nDefeatedEnemies = 0;
	this.m_curID = 1;
	this.m_bIsInteractive = true;
	this.m_BattleState = battleState;
	this.Init();
}

CEnemyManager.prototype.Init = function()
{
	this.m_EnemyData = PIXI.loader.resources['enemy_config'].data;
	this.m_EnemyContainer = new PIXI.Container();
	gApp.stage.addChild( this.m_EnemyContainer );
};

CEnemyManager.prototype.GetID = function()
{
	return this.m_curID++;
};

CEnemyManager.prototype.SortEnemies = function()
{
	this.m_EnemyContainer.children.sort( function(a,b) {
		a.z = a.z || 0;
		b.z = b.z || 0;
		return b.z - a.z
	});
};

CEnemyManager.prototype.BuildEnemy = function( type, levelData )
{
	var enemy = new CEnemy( this, this.m_EnemyData[type], levelData );
	this.m_mapEnemies.set( enemy.m_ID, enemy );
	this.m_EnemyContainer.addChild( enemy.m_Sprite );
};

CEnemyManager.prototype.Update = function( delta )
{
	this.m_mapEnemies.forEach( function(enemy ) { enemy.Update( delta ); } );
};

CEnemyManager.prototype.Destroy = function()
{
	this.m_mapEnemies.forEach( function(enemy ) {
		gApp.stage.removeChild( enemy.m_Sprite );
		enemy.Destroy();
	});
	gApp.stage.removeChild( this.m_EnemyContainer );
};

CEnemyManager.prototype.SetInteractive = function ( bInteractive )
{
	this.m_bIsInteractive = bInteractive;
};

CEnemyManager.prototype.Stop = function()
{
	this.m_mapEnemies.forEach( function (enemy ) {
		enemy.m_Sprite.interactive = false;
		enemy.m_Sprite.stop();
	});
};

CEnemyManager.prototype.Start = function()
{
	this.m_mapEnemies.forEach( function (enemy ) {
		enemy.m_Sprite.interactive = true;
		enemy.m_Sprite.play();
	});
};

CEnemyManager.prototype.SpawnBoss = function( levelData )
{
	if ( this.m_Boss === undefined )
	{
		this.m_Boss = new CBoss( this, this.m_EnemyData.boss, levelData );
		this.m_mapEnemies.set( this.m_Boss.m_ID, this.m_Boss );
		gApp.stage.addChild( this.m_Boss.m_Sprite );
//		this.SortEnemies();
	}
};

////// Enemy Object /////
function CEnemy( enemyManager, typeData, levelData )
{
	this.m_EnemyManager = enemyManager;
	this.m_ID = enemyManager.GetID();
	this.m_typeData = typeData;
	this.m_levelData = levelData;
	this.m_bIsImmune =
	this.BuildSprite();
}

CEnemy.prototype.LoadFrames = function()
{
	this.m_rgWalkFrames = [];
	for ( var i = 0; i < this.m_typeData.walk_animation.num_frames; i++) {
		this.m_rgWalkFrames.push(PIXI.Texture.fromFrame( this.m_typeData.walk_animation.name + PadZerosLeft( i, 4 ) + '.png' ) );
	}

	this.m_rgDeathFrames = [];
	for ( i = 1; i <= this.m_typeData.death_animation.num_frames; i++) {
		this.m_rgDeathFrames.push(PIXI.Texture.fromFrame( this.m_typeData.death_animation.name + i + '.png' ) );
	}
};

CEnemy.prototype.BuildSprite = function()
{
	this.m_nMaxHealth = this.m_typeData.base_health;
	this.m_nHealth = this.m_typeData.base_health;

	this.LoadFrames();

	this.m_Sprite = new PIXI.extras.AnimatedSprite(this.m_rgWalkFrames);
	this.m_Sprite.animationSpeed = 0.8;

	this.m_Sprite.interactive = true;
	this.m_Sprite.buttonMode = true;

	this.m_Sprite.scale.set( this.m_typeData.scale.x, this.m_typeData.scale.y );

	// scale and set speed
	var ypos = WeakRandomInt( k_SpawnHeightLimit, gApp.screen.height - this.m_Sprite.height );
	var vx = -WeakRandomInt( this.m_typeData.speed.min, this.m_typeData.speed.max );

	var scaleAdjustment = 1 - ( ypos - k_SpawnHeightLimit ) / ( ( gApp.screen.height - this.m_Sprite.height ) - ( k_SpawnHeightLimit ) );

	this.m_Sprite.scale.set( this.m_typeData.scale.x - ( scaleAdjustment * 0.2 ), this.m_typeData.scale.y - ( scaleAdjustment * 0.2 ) );
	if ( this.m_levelData.speed_multiplier !== undefined )
	{
		this.m_Sprite.vx = vx * this.m_levelData.speed_multiplier;
	}
	else
	{
		this.m_Sprite.vx = vx;
	}


	// set position
	this.m_Sprite.x = gApp.renderer.width - this.m_Sprite.width;
	this.m_Sprite.y = ypos;
	this.m_Sprite.z = - ( this.m_Sprite.y + this.m_Sprite.height );

	var instance = this;
	this.m_Sprite.pointertap = function() {
		if ( instance.m_EnemyManager.m_bIsInteractive )
		{
			instance.Damage(1);
		}
	};

	this.m_HealthBar = null;
	this.m_bDead = false;

	this.m_DamagedElapsed = 0;

	this.Walk();
};

CEnemy.prototype.Walk = function()
{
	this.m_Sprite.textures = this.m_rgWalkFrames;
	this.m_Sprite.loop = true;
	this.m_Sprite.play();
	this.m_Sprite.onComplete = null;
	this.m_bMoving = true;
};

CEnemy.prototype.Damage = function( nAmount )
{
	this.m_nHealth = this.m_nHealth - nAmount;
	if ( this.m_nHealth <= 0  )
	{
		this.Die( true );
	}
	else if ( this.m_HealthBar === null )
	{
		this.m_HealthBar = new PIXI.Container();

		var totalBar = new PIXI.Graphics();
		totalBar.beginFill(0x000000);
		totalBar.drawRect(0, 0, this.m_Sprite.width, 16 );
		totalBar.endFill();
		this.m_HealthBar.addChild(totalBar);
		this.m_HealthBar.total = totalBar;

		var redBar = new PIXI.Graphics();
		redBar.beginFill(0xFF3300);
		redBar.drawRect(0, 0, totalBar.width * ( this.m_nHealth / this.m_nMaxHealth ), 16 );
		redBar.endFill();
		this.m_HealthBar.addChild(redBar);
		this.m_HealthBar.health = redBar;

		this.m_Sprite.addChild( this.m_HealthBar );

		this.m_DamagedElapsed = 20;
	}
	else
	{
		this.m_HealthBar.health.width = this.m_HealthBar.total.width * ( this.m_nHealth / this.m_nMaxHealth );
	}
};

CEnemy.prototype.Die = function( bRecordDeath )
{
	var width = this.m_Sprite.width;
	var height = this.m_Sprite.height;

	this.m_Sprite.textures = this.m_rgDeathFrames;
	this.m_Sprite.loop = false;
	this.m_Sprite.width = width * this.m_typeData.death_animation.scale;
	this.m_Sprite.height = height * this.m_typeData.death_animation.scale;
	this.m_Sprite.play();
	this.m_bMoving = false;
	this.m_bDead = true;
	this.m_Sprite.interactive = false;
	this.m_EnemyManager.m_mapEnemies.delete( this.m_ID );

	if ( bRecordDeath )
	{
		gAudioManager.PlaySound( this.m_typeData.deathsound );
		this.m_EnemyManager.m_nDefeatedEnemies++;
	}

	if ( this.m_HealthBar !== null )
	{
		this.m_HealthBar.health.visible = false;
	}

	var instance = this;
	this.m_Sprite.onComplete = function() {
		instance.Destroy();
	};
};

CEnemy.prototype.Update = function(delta )
{
	if ( !this.m_Sprite.visible )
		return;

	if ( this.m_DamagedElapsed > 0 )
	{
		this.m_DamagedElapsed -= delta;
		if ( Math.floor( this.m_DamagedElapsed ) % 2 )
		{
			this.m_Sprite.x -= this.m_Sprite.vx;
		}
		else
		{
			this.m_Sprite.x += this.m_Sprite.vx;
		}
		//this.m_Sprite.x += (Math.sin(this.m_Elapsed / 24.0));
	}
	else if ( this.m_bMoving )
	{
		this.m_Sprite.x += this.m_Sprite.vx * delta;

		if ( this.m_Sprite.x < k_nDamagePointx )
		{
			this.m_EnemyManager.m_BattleState.DamagePlayer( this.m_typeData.base_damage );
			this.Die(false);
		}
	}
};

CEnemy.prototype.Destroy = function()
{
	this.m_EnemyManager.m_mapEnemies.delete( this.m_ID );
	this.m_Sprite.destroy();
	if ( this.m_HealthBar !== null )
	{
		this.m_HealthBar.destroy( true );
	}
};


function CBoss( enemyManager, typeData, levelData )
{
	CEnemy.call( this, enemyManager, typeData, levelData );
	this.m_DamageTick = 0;
}
CBoss.prototype = Object.create(CEnemy.prototype);

CBoss.prototype.LoadFrames = function()
{
	this.m_rgWalkFrames = [];
	for ( var i = 0; i < this.m_typeData.walk_animation.num_frames; i++) {
		this.m_rgWalkFrames.push(PIXI.Texture.fromFrame( this.m_typeData.walk_animation.name + PadZerosLeft( i, 4 ) + '.png' ) );
	}

	this.m_rgDeathFrames = [];
	for ( i = 1; i < this.m_typeData.death_animation.num_frames; i++) {
		this.m_rgDeathFrames.push(PIXI.Texture.fromFrame( this.m_typeData.death_animation.name + PadZerosLeft( i, 4 ) + '.png' ) );
	}

	this.m_rgRoarFrames = [];
	for ( var i = 0; i < this.m_typeData.roar_animation.num_frames; i++) {
		this.m_rgRoarFrames.push(PIXI.Texture.fromFrame( this.m_typeData.roar_animation.name + PadZerosLeft( i, 4 ) + '.png' ) );
	}

	this.m_rgAttackFrames = [];
	for ( var i = 0; i < this.m_typeData.attack_animation.num_frames; i++) {
		this.m_rgAttackFrames.push(PIXI.Texture.fromFrame( this.m_typeData.attack_animation.name + PadZerosLeft( i, 4 ) + '.png' ) );
	}

	this.m_rgLaserFrames = [];
	for ( var i = 0; i < this.m_typeData.laser_animation.num_frames; i++) {
		this.m_rgLaserFrames.push(PIXI.Texture.fromFrame( this.m_typeData.laser_animation.name + PadZerosLeft( i, 4 ) + '.png' ) );
	}
};

CBoss.prototype.BuildSprite = function()
{
	CEnemy.prototype.BuildSprite.call(this);
	this.m_nHealth = this.m_EnemyManager.m_BattleState.m_nBossHealth;
	this.m_nMaxHealth = this.m_EnemyManager.m_BattleState.m_nMaxBossHealth;
	this.m_nLastTick = Date.now();

	this.m_easingHP = new CEasingPrediction( CEasingLinear, this.m_nHealth, 5000, 0, this.m_nMaxHealth );

	this.m_Sprite.scale.set( this.m_typeData.scale.x , this.m_typeData.scale.y );
	this.m_Sprite.x = k_ScreenWidth - this.m_Sprite.width;
	this.m_Sprite.y = ( k_ScreenHeight / 2 ) - ( this.m_Sprite.height / 2 );
	this.m_Sprite.z = - ( this.m_Sprite.y + this.m_Sprite.height );

	this.m_HealthBar = new PIXI.Container();

	var totalBar = new PIXI.Graphics();
	totalBar.beginFill(0x000000);
	totalBar.drawRect(0, 0, 640, 48 );
	totalBar.endFill();
	this.m_HealthBar.addChild(totalBar);
	this.m_HealthBar.total = totalBar;

	var redBar = new PIXI.Graphics();
	redBar.beginFill(0xFF3300);
	redBar.drawRect(0, 0, totalBar.width * ( this.m_nHealth / this.m_nMaxHealth ), totalBar.height );
	redBar.endFill();
	this.m_HealthBar.addChild(redBar);
	this.m_HealthBar.health = redBar;
	this.m_HealthBar.x = ( k_ScreenWidth / 2 ) - ( this.m_HealthBar.width / 2 );
	this.m_HealthBar.y = 120;


	var healthText = new PIXI.Text();
	healthText.style = {
		fontFamily: k_FontType,
		fontSize: 36,
		fontWeight: 'bold',
		fill: 'white',
		align: 'center',
	};
	healthText.anchor.set( 0.5, 0.5 );
	healthText.x = totalBar.width / 2;
	healthText.y = totalBar.height / 2;
	this.m_HealthBar.addChild( healthText );
	this.m_HealthBar.healthText = healthText;

	gApp.stage.addChild( this.m_HealthBar );
};

CBoss.prototype.Roar = function()
{
	gAudioManager.PlaySound( 'boss_roar' );
	this.m_Sprite.textures = this.m_rgRoarFrames;
	this.m_Sprite.loop = false;
	this.m_Sprite.play();

	var instance = this;
	this.m_Sprite.onComplete = function() {
		instance.Walk();
	};
	this.m_bMoving = false;
};

CBoss.prototype.Walk = function()
{
	CEnemy.prototype.Walk.call(this);
	this.m_Sprite.x = k_ScreenWidth - this.m_Sprite.width;
}

CBoss.prototype.Attack = function( targetData )
{
	gAudioManager.PlaySound( 'boss_attack' );
	this.m_Sprite.x = k_ScreenWidth - this.m_Sprite.width - 80;
	this.m_Sprite.textures = this.m_rgAttackFrames;
	this.m_Sprite.loop = false;
	this.m_Sprite.play();
	this.targetData = targetData;

	var instance = this;
	this.m_Sprite.onFrameChange = function() {
		if ( this.currentFrame < 30 )
			return;
		this.onFrameChange = null;
		gAudioManager.PlaySound( 'boss_lasershoot' );
		gSalien.PlayAnim("hurt", false, 1);

		var x = instance.m_Sprite.x + ( instance.m_Sprite.width / 2 ) + 60;
		var y = instance.m_Sprite.y + ( instance.m_Sprite.height / 2 ) + 90;
		var laser = new PIXI.extras.AnimatedSprite( instance.m_rgLaserFrames );
		laser.scale.set( 1.0, 1.0 );
		laser.x = instance.targetData.target.x - ( instance.targetData.target.width / 2 );
		laser.y = instance.targetData.target.y - ( instance.targetData.target.height / 2 );
		laser.targetx = instance.m_Sprite.x;
		laser.targety = instance.m_Sprite.y;
		var dx = x - laser.x;
		var dy = ( y - laser.y - 10 );
		laser.width = Math.sqrt( dx*dx + dy*dy );
		laser.rotation = Math.asin( dy / laser.width );
		laser.animationSpeed = 0.6;
		laser.loop = false;
		laser.play();
		gApp.stage.addChild( laser );

		var battleState = instance.m_EnemyManager.m_BattleState;
		if ( instance.targetData.isplayer )
		{
			battleState.m_PlayerHealth = instance.targetData.playerdata.hp;
			battleState.m_PlayerMaxHealth = instance.targetData.playerdata.max_hp;
			battleState.DamagePlayer( 0 );
		}
		else
		{
			instance.targetData.target.UpdateHealth( instance.targetData.playerdata.hp, instance.targetData.playerdata.max_hp );
		}

		laser.onComplete = function() {
			gAudioManager.PlaySound( 'boss_laserhit' );
			this.destroy();
		};
	};

	this.m_Sprite.onComplete = function() {
		instance.targetData = undefined;
		instance.Walk();
	};

	this.m_bMoving = false;
};


CBoss.prototype.Update = function( delta )
{
	CEnemy.prototype.Update.call( this, delta );

	this.m_HealthBar.healthText.text = this.m_easingHP.Get();
};

CBoss.prototype.Die = function( bRecordDeath )
{
	if ( !this.m_EnemyManager.m_BattleState.m_bGameEnding )
	{
		return;
	}

	var width = this.m_Sprite.width;
	var height = this.m_Sprite.height;

	this.m_Sprite.textures = this.m_rgDeathFrames;
	this.m_Sprite.loop = false;
	this.m_Sprite.width = width * this.m_typeData.death_animation.scale;
	this.m_Sprite.height = height * this.m_typeData.death_animation.scale;
	this.m_Sprite.play();
	this.m_bMoving = false;
	this.m_bDead = true;
	this.m_Sprite.interactive = false;
	this.m_EnemyManager.m_mapEnemies.delete( this.m_ID );

	if ( bRecordDeath )
	{
		gAudioManager.PlaySound( this.m_typeData.deathsound );
		this.m_EnemyManager.m_nDefeatedEnemies++;
	}

	if ( this.m_HealthBar !== null )
	{
		this.m_HealthBar.health.visible = false;
	}

	var instance = this;
	this.m_Sprite.onComplete = function() {
		instance.m_EnemyManager.m_BattleState.EndGame( true );
	};
};

CBoss.prototype.Damage = function( nAmount )
{
	this.m_DamageTick += nAmount;
	CEnemy.prototype.Damage.call( this, nAmount );
	if ( this.m_nHealth < 0 )
	{
		this.m_nHealth = 0;
	}
	this.m_HealthBar.healthText.text = ''+this.m_nHealth;
};

CBoss.prototype.UpdateDamage = function( nHealth, nMaxHealth )
{
	this.m_nMaxHealth = nMaxHealth;
	this.m_nHealth = nHealth;
	this.m_HealthBar.health.width = this.m_HealthBar.total.width * ( this.m_nHealth / this.m_nMaxHealth );
	var nDuration = Date.now() - this.m_nLastTick;
	this.m_nLastTick = Date.now();
	this.m_easingHP.UpdateValue(this.m_nHealth, nDuration);
	this.m_easingHP.m_nCeil = this.m_nMaxHealth;
	this.m_easingHP.m_nFloor = this.m_nHealth;
};

CBoss.prototype.Destroy = function()
{
	this.m_HealthBar.destroy();
	this.m_HealthBar = null;
	CEnemy.prototype.Destroy.call( this );
};

function CSpawnSection( spawnRate, rtSpawnStart, rtMatchEnd, sectionLength, mapEnemySpawns )
{
	this.m_spawnRate = spawnRate;
	this.m_mapEnemySpawns = mapEnemySpawns;
	this.m_rtSpawnStart = rtSpawnStart;
	this.m_rtNextSpawn = 0;
	this.m_curInterval = 0;
	this.m_rtMatchEnd = rtMatchEnd;
	this.m_Complete = false;

	this.m_mapSpawnsPerInterval = new Map();
	for ( var i = 0; i < sectionLength / spawnRate; ++i )
	{
		this.m_mapSpawnsPerInterval.set( i, [] );
	}

	var instance = this;
	this.m_mapEnemySpawns.forEach( function( count, strType ) {
		for( var i = 0; i < count; ++i )
		{
			var position = WeakRandomInt( 0, instance.m_mapSpawnsPerInterval.size - 1 );
			instance.m_mapSpawnsPerInterval.get( position ).push( strType );
		}
	});
}

CSpawnSection.prototype.Update = function( enemyManager, levelData )
{
	var rtNow = Date.now();
	if ( rtNow > this.m_rtSpawnStart && this.m_mapEnemySpawns.size > 0 )
	{
		// check if its time for us to spawn, or if the match is ending within 5 seconds
		if ( rtNow > this.m_rtNextSpawn || rtNow > this.m_rtMatchEnd - 5000 )
		{
			if ( this.m_curInterval < this.m_mapSpawnsPerInterval.size )
			{
				var instance = this;
				this.m_mapSpawnsPerInterval.get( this.m_curInterval ).forEach( function( strType ) {
					enemyManager.BuildEnemy( strType, levelData );
					var remaining = instance.m_mapEnemySpawns.get( strType ) - 1;
					instance.m_mapEnemySpawns.set( strType, remaining );
					if ( remaining == 0 )
						instance.m_mapEnemySpawns.delete( strType );
				});
			}
			else
			{
				// spawn whatever we have left
				var instance = this;
				this.m_mapEnemySpawns.forEach( function( count, strType ) {
					for( var i = 0; i < count; ++i )
					{
						enemyManager.BuildEnemy( strType, levelData );
					}
					instance.m_mapEnemySpawns.delete( strType );
				});
			}
			enemyManager.SortEnemies();


			this.m_rtNextSpawn = rtNow + ( this.m_spawnRate * 1000 );
			this.m_curInterval++;
		}
	}

	if ( this.m_mapEnemySpawns.size == 0 )
	{
		this.m_Complete = true;
	}
};


////// Level Manager /////
function CLevelManager( battleState, strDifficulty )
{
	this.m_strDifficulty = strDifficulty;
	this.m_BattleState = battleState;
	this.Init();
}

CLevelManager.prototype.Init = function()
{
	this.m_LevelData = PIXI.loader.resources['level_config'].data[ this.m_strDifficulty ];

	this.GenerateSpawnSections( this.m_BattleState.m_rtBattleStart, this.m_BattleState.m_rtBattleEnd );
};

CLevelManager.prototype.GenerateSpawnSections = function( rtStart, rtEnd )
{
	var cEnemyTotal = this.m_LevelData.enemies.total_count;
	var mapEnemyCounts = new Map();
	for ( var i = 0; i < this.m_LevelData.enemies.types.length; ++i )
	{
		var enemyType = this.m_LevelData.enemies.types[i];
		mapEnemyCounts.set( enemyType.type, cEnemyTotal * enemyType.ratio );
	}

	this.m_SpawnSections = [];
	var nSpawnSections = this.m_LevelData.enemies.spawn_sections;
	var sectionLength = Math.floor( k_MatchLengthSec / nSpawnSections );
	for ( var i = 0; i < this.m_LevelData.enemies.spawn_sections; ++i )
	{
		var spawnRate = WeakRandomInt( this.m_LevelData.enemies.spawn_frequency.min, this.m_LevelData.enemies.spawn_frequency.max );
		var rtSpawnStart = rtStart + ( i * sectionLength * 1000 );
		var mapSectionSpawns = new Map();
		mapEnemyCounts.forEach( function( count, strType ) {
			mapSectionSpawns.set( strType, count / nSpawnSections );
		});

		var spawnSection = new CSpawnSection( spawnRate, rtSpawnStart, rtEnd, sectionLength, mapSectionSpawns );
		this.m_SpawnSections.push( spawnSection );
	}
};

CLevelManager.prototype.Update = function( delta )
{
	var instance = this;
	var bAllComplete = true;
	this.m_SpawnSections.forEach( function( spawnSection ) {
		spawnSection.Update( instance.m_BattleState.m_EnemyManager, instance.m_LevelData.enemies.modifiers );
		if ( !spawnSection.m_Complete )
		{
			bAllComplete = false;
		}
	});

	if ( bAllComplete )
	{
		var now = Math.floor( Date.now() );
		this.GenerateSpawnSections( now, ( now + k_MatchLengthSec * 1000 ) );
	}
};