// <script>
"use strict";

var gEnemiesVersion = 1;
var k_SpawnHeightLimit = 450;
var k_nDamagePointx = 224;

////// Enemy Manager /////
function CEnemyManager( battleState )
{
	this.m_rgEnemies = new Map();
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
	this.m_rgEnemies.set( enemy.m_ID, enemy );
	this.m_EnemyContainer.addChild( enemy.m_Sprite );
	this.SortEnemies();
};

CEnemyManager.prototype.Update = function( delta )
{
	this.m_rgEnemies.forEach( function( enemy ) { enemy.Update( delta ); } );
};

CEnemyManager.prototype.Destroy = function()
{
	this.m_rgEnemies.forEach( function( enemy ) {
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
	this.m_rgEnemies.forEach( function ( enemy ) {
		enemy.m_Sprite.interactive = false;
		enemy.m_Sprite.stop();
	});
};

CEnemyManager.prototype.Start = function()
{
	this.m_rgEnemies.forEach( function ( enemy ) {
		enemy.m_Sprite.interactive = true;
		enemy.m_Sprite.play();
	});
};

////// Enemy Object /////
function CEnemy( enemyManager, typeData, levelData )
{
	this.m_EnemyManager = enemyManager;
	this.m_ID = enemyManager.GetID();
	this.m_typeData = typeData;
	this.m_levelData = levelData;
	this.BuildSprite();
}

CEnemy.prototype.BuildSprite = function()
{
	this.m_nMaxHealth = this.m_typeData.base_health;
	this.m_nHealth = this.m_typeData.base_health;

	this.m_rgWalkFrames = [];
	for ( var i = 0; i < this.m_typeData.walk_animation.num_frames; i++) {
		this.m_rgWalkFrames.push(PIXI.Texture.fromFrame( this.m_typeData.walk_animation.name + PadZerosLeft( i, 4 ) + '.png' ) );
	}

	this.m_rgDeathFrames = [];
	for ( i = 1; i <= this.m_typeData.death_animation.num_frames; i++) {
		this.m_rgDeathFrames.push(PIXI.Texture.fromFrame( this.m_typeData.death_animation.name + i + '.png' ) );
	}

	this.m_Sprite = new PIXI.extras.AnimatedSprite(this.m_rgWalkFrames);
	this.m_Sprite.animationSpeed = 0.8;

	this.m_Sprite.interactive = true;
	this.m_Sprite.buttonMode = true;

	// scale and set speed
	var ypos = WeakRandomInt( gApp.screen.height - k_SpawnHeightLimit, gApp.screen.height - this.m_Sprite.height );
	var vx = -WeakRandomInt( this.m_typeData.speed.min, this.m_typeData.speed.max );

	var scaleAdjustment = 1 - ( ypos - ( gApp.screen.height - k_SpawnHeightLimit ) ) / ( ( gApp.screen.height - this.m_Sprite.height ) - ( gApp.screen.height - k_SpawnHeightLimit ) );
//	var animationSpeedAdjustment = ( -vx - ( this.m_typeData.speed.max - this.m_typeData.speed.min ) ) / ( this.m_typeData.speed.max - this.m_typeData.speed.min ) ;

	this.m_Sprite.scale.set( this.m_typeData.scale.x - ( scaleAdjustment * 0.2 ), this.m_typeData.scale.y - ( scaleAdjustment * 0.2 ) );
	this.m_Sprite.vx = vx * this.m_levelData.speed_multiplier;
//	this.m_Sprite.animationSpeed = animationSpeedAdjustment;

	var instance = this;
	this.m_Sprite.pointertap = function() {
		if ( instance.m_EnemyManager.m_bIsInteractive )
		{
			instance.Damage(1);
		}
	};

	// set position
	this.m_Sprite.x = gApp.renderer.width - this.m_Sprite.width;
	this.m_Sprite.y = ypos;
	this.m_Sprite.z = - ( this.m_Sprite.y + this.m_Sprite.height );

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
	this.m_EnemyManager.m_rgEnemies.delete( this.m_ID );

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
	this.m_EnemyManager.m_rgEnemies.delete( this.m_ID );
	this.m_Sprite.destroy();
	if ( this.m_HealthBar !== null )
	{
		this.m_HealthBar.destroy( true );
	}
};

function CSpawnSection( spawnRate, rtSpawnStart, rtMatchEnd, sectionLength, mapEnemySpawns )
{
	this.m_spawnRate = spawnRate;
	this.m_mapEnemySpawns = mapEnemySpawns;
	this.m_rtSpawnStart = rtSpawnStart;
	this.m_rtNextSpawn = 0;
	this.m_curInterval = 0;
	this.m_rtMatchEnd = rtMatchEnd;

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


			this.m_rtNextSpawn = rtNow + ( this.m_spawnRate * 1000 );
			this.m_curInterval++;
		}
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
	for ( i = 0; i < this.m_LevelData.enemies.spawn_sections; ++i )
	{
		var spawnRate = WeakRandomInt( this.m_LevelData.enemies.spawn_frequency.min, this.m_LevelData.enemies.spawn_frequency.max );
		var rtSpawnStart = this.m_BattleState.m_rtBattleStart + ( i * sectionLength * 1000 );
		var mapSectionSpawns = new Map();
		mapEnemyCounts.forEach( function( count, strType ) {
			mapSectionSpawns.set( strType, count / nSpawnSections );
		});

		var spawnSection = new CSpawnSection( spawnRate, rtSpawnStart, this.m_BattleState.m_rtBattleEnd, sectionLength, mapSectionSpawns );
		this.m_SpawnSections.push( spawnSection );
	}
};

CLevelManager.prototype.Update = function( delta )
{
	var instance = this;
	this.m_SpawnSections.forEach( function( spawnSection ) {
		spawnSection.Update( instance.m_BattleState.m_EnemyManager, instance.m_LevelData.enemies.modifiers );
	});
};