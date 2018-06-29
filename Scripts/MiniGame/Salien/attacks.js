// <script>
"use strict";


var gAttacksVersion = 1;

function CCooldownHandler( attackManager, strType )
{
	this.m_strType = strType;
	this.m_AttackManager = attackManager;
	this.m_typeData = this.m_AttackManager.m_AttackData[this.m_strType];
	this.m_rtAttackLastUsed = 0;
}

CCooldownHandler.prototype.BuildSprites = function()
{
	//cooldown background
	this.m_CooldownBackgroundOn = new PIXI.Graphics();
	this.m_CooldownBackgroundOn.lineStyle( 1, 0xFFFFFF, 1 );
	this.m_CooldownBackgroundOn.beginFill(0x000000, 1);
	this.m_CooldownBackgroundOn.drawRect(0, 0, 68, 68);
	this.m_CooldownBackgroundOn.endFill();
	this.m_CooldownBackgroundOn.x = this.m_typeData.ability_position.x - ( this.m_CooldownBackgroundOn.width / 2 );
	this.m_CooldownBackgroundOn.y = this.m_typeData.ability_position.y - ( this.m_CooldownBackgroundOn.height / 2 );
	gApp.stage.addChild( this.m_CooldownBackgroundOn );

	this.m_CooldownBackgroundOff = new PIXI.Graphics();
	this.m_CooldownBackgroundOff.beginFill(0x000000, 0.5);
	this.m_CooldownBackgroundOff.drawRect(0, 0, 68, 68);
	this.m_CooldownBackgroundOff.endFill();
	this.m_CooldownBackgroundOff.x = this.m_typeData.ability_position.x - ( this.m_CooldownBackgroundOn.width / 2 );
	this.m_CooldownBackgroundOff.y = this.m_typeData.ability_position.y - ( this.m_CooldownBackgroundOn.height / 2 );
	gApp.stage.addChild( this.m_CooldownBackgroundOff );

	//attack sprite image
	this.m_AbilitySprite = new PIXI.Sprite.fromImage( this.m_typeData.image );
	this.m_AbilitySprite.height = this.m_CooldownBackgroundOn.height * 0.9;
	this.m_AbilitySprite.width = this.m_CooldownBackgroundOn.width * 0.9;
	this.m_AbilitySprite.anchor.set( 0.5, 0.5 );
	this.m_AbilitySprite.x = this.m_typeData.ability_position.x;
	this.m_AbilitySprite.y = this.m_typeData.ability_position.y;
	gApp.stage.addChild( this.m_AbilitySprite );

	//cooldown text
	this.m_CooldownText = new PIXI.Text( '' );
	this.m_CooldownText.anchor.set( 0.5, 0.5 );
	this.m_CooldownText.x = this.m_typeData.ability_position.x;
	this.m_CooldownText.y = this.m_typeData.ability_position.y;
	this.m_CooldownText.style = {
		fontSize: 36,
		fill:"white",
		fontFamily:'Motiva Sans'
	};
	gApp.stage.addChild( this.m_CooldownText );

	//cooldown text
	this.m_AbilityButton = new PIXI.Sprite.fromImage( 'keyboard' + ( this.m_typeData.keycode - 48 ) );
	this.m_AbilityButton.scale.set( 0.15, 0.15 );
	this.m_AbilityButton.anchor.set( 1, 1 );
	this.m_AbilityButton.x = this.m_CooldownBackgroundOn.x + this.m_CooldownBackgroundOn.width * 0.9;
	this.m_AbilityButton.y = this.m_CooldownBackgroundOn.y + this.m_CooldownBackgroundOn.height * 0.9;
	gApp.stage.addChild( this.m_AbilityButton );

	if ( gPlayerInfo.level < this.m_typeData.levelreq )
	{
		this.m_AbilityButton.visible = false;
		this.m_CooldownBackgroundOn.visible = false;
		this.m_CooldownBackgroundOff.visible = true;
		this.m_rtAttackLastUsed = Date.now() + k_MatchLengthSec*2000;

		this.m_AbilityLock = new PIXI.Sprite.fromImage( 'lock' );
		this.m_AbilityLock.anchor.set( 0.5, 0.5 );
		this.m_AbilityLock.x = this.m_AbilitySprite.x;
		this.m_AbilityLock.y = this.m_AbilitySprite.y;
		gApp.stage.addChild( this.m_AbilityLock );

		this.m_AbilityLockText = new PIXI.Text( 'Lv' + this.m_typeData.levelreq );
		this.m_AbilityLockText.anchor.set( 0.5, 0.5 );
		this.m_AbilityLockText.x = this.m_AbilitySprite.x;
		this.m_AbilityLockText.y = this.m_AbilitySprite.y + 5;
		this.m_AbilityLockText.style = {
			fontSize: 16,
			fill:"black",
			fontFamily:'Motiva Sans'
		};
		gApp.stage.addChild( this.m_AbilityLockText );
	}
};

CCooldownHandler.prototype.BAttack = function()
{
	if ( gPlayerInfo.level < this.m_typeData.levelreq )
	{
		return false;
	}

	if ( Date.now() < this.m_rtAttackLastUsed + ( this.m_typeData.cooldown * 1000 ) )
	{
		return false;
	}

	this.m_rtAttackLastUsed = Date.now();
	return true;
};

CCooldownHandler.prototype.Update = function()
{
	if ( Date.now() < this.m_rtAttackLastUsed + ( this.m_typeData.cooldown * 1000 ) )
	{
		this.m_AbilityButton.visible = false;
		this.m_CooldownBackgroundOn.visible = false;
		this.m_CooldownBackgroundOff.visible = true;
		if ( gPlayerInfo.level >= this.m_typeData.levelreq )
		{
			this.m_CooldownText.text = this.m_typeData.cooldown - Math.floor(( Date.now() - this.m_rtAttackLastUsed ) / 1000);
		}
	}
	else
	{
		this.m_AbilityButton.visible = true;
		this.m_CooldownBackgroundOn.visible = true;
		this.m_CooldownBackgroundOff.visible = false;
		this.m_CooldownText.text = '';
	}
};

CCooldownHandler.prototype.Destroy = function()
{
	this.m_CooldownText.destroy();
	this.m_CooldownBackgroundOn.destroy();
	this.m_CooldownBackgroundOff.destroy();
	this.m_AbilityButton.destroy();
	this.m_AbilitySprite.destroy();

	if ( this.m_AbilityLock !== undefined )
	{
		this.m_AbilityLock.destroy();
		this.m_AbilityLockText.destroy();
	}
};


function CAttackManager( battleState, salien, bBossLevel )
{
	// will store data for attacks like animation frames, active attack, cooldowns, etc

	this.m_mapBoulders = new Map();
	this.m_mapBombs = new Map();
	this.m_mapSlimes = new Map();
	this.m_mapBlackholes = new Map();
	this.m_mapFrozenEnemies = new Map();
	this.m_mapBeasts = new Map();
	this.m_mapPsychicCubes = new Map();
	this.m_curID = 0;
	this.m_BattleState = battleState;
	this.m_bDisabled = false;

	this.m_bAllySalien = false;
	if ( salien !== undefined )
	{
		this.m_bAllySalien = true;
		this.m_Salien = salien;
	}
	else
	{
		this.m_bAllySalien = false;
		this.m_Salien = gSalien;
	}

	if ( bBossLevel !== undefined )
	{
		this.m_bBossLevel = bBossLevel;
	}
	else
	{
		this.m_bBossLevel = false;
	}
}

CAttackManager.prototype.SetDisabled = function( bDisabled )
{
	this.m_bDisabled = bDisabled;
};

CAttackManager.prototype.GetID = function()
{
	return this.m_curID++;
};

CAttackManager.prototype.BuildAttacks = function()
{
	this.m_AttackData = PIXI.loader.resources['attack_config'].data;

	// store explosion effect
	this.m_rgExplosionFrames = [];
	for ( var i = 1; i < 10; i++) {
		this.m_rgExplosionFrames.push(PIXI.Texture.fromFrame('ex_fr' + i + '.png'));
	}

	this.m_rgSlimeSplatFrames = [];
	for ( var i = 1; i < 18; i++) {
		this.m_rgSlimeSplatFrames.push(PIXI.Texture.fromFrame('SlimeAttack_Splat_' + PadZerosLeft( i, 4 ) + '.png'));
	}

	this.m_rgSlimeAttackFrames = [];
	for ( var i = 0; i < 6; ++i ) {
		this.m_rgSlimeAttackFrames.push( PIXI.Texture.fromFrame('SlimeBall_Final_A_' + PadZerosLeft( i, 4 ) + '.png') );
	}

	this.m_rgBeastSpawnFrames = [];
	for ( var i = 0; i < 7; ++i ) {
		this.m_rgBeastSpawnFrames.push( PIXI.Texture.fromFrame('BeastAttack_Spawn_' + PadZerosLeft( i, 4 ) + '.png') );
	}

	this.m_rgBeastAttackFrames = [];
	for ( var i = 0; i < 16; ++i ) {
		this.m_rgBeastAttackFrames.push( PIXI.Texture.fromFrame('BeastAttack_BigBiteFX_' + PadZerosLeft( i, 4 ) + '.png') );
	}

	this.m_rgPsychicAttackFrames = [];
	for ( var i = 0; i < 16; ++i ) {
		this.m_rgPsychicAttackFrames.push( PIXI.Texture.fromFrame('PsychicAttack_Cube_' + PadZerosLeft( i, 4 ) + '.png') );
	}

	this.m_rgHealingFrames = [];
	for ( var i = 1; i < 7; ++i ) {
		this.m_rgHealingFrames.push( PIXI.Texture.fromFrame('plusfr' + i + 'b.png') );
	}

	if ( !this.m_bAllySalien )
	{
		this.m_BoundAttack = this.Attack.bind(this);
		window.addEventListener( "keydown", this.m_BoundAttack );
	}

	// map bound keys to attacks
	this.m_mapKeyCodeToAttacks = new Map();
	this.m_mapKeyCodeToAttacks.set( this.m_AttackData.explosion.keycode, this.ExplosionAttack.bind( this ) );
	this.m_mapKeyCodeToAttacks.set( this.m_AttackData.boulder.keycode, this.BoulderAttack.bind( this ) );
	this.m_mapKeyCodeToAttacks.set( this.m_AttackData.blackhole.keycode, this.BlackholeAttack.bind( this ) );
	this.m_mapKeyCodeToAttacks.set( this.m_AttackData.flashfreeze.keycode, this.FlashFreezeAttack.bind( this ) );

	// set cooldown timers
	this.m_mapCooldowns = new Map();
	this.BuildAttackCooldown( 'boulder' );
	this.BuildAttackCooldown( 'explosion' );
	this.BuildAttackCooldown( 'blackhole' );
	this.BuildAttackCooldown( 'flashfreeze' );


	if ( this.m_Salien.m_BodyType == 'slime' )
	{
		this.BuildAttackCooldown( 'slimeattack' );
		this.m_mapKeyCodeToAttacks.set( this.m_AttackData.slimeattack.keycode, this.SlimeAttack.bind( this ) );
	}
	else if ( this.m_Salien.m_BodyType == 'beast' )
	{
		this.BuildAttackCooldown( 'beastattack' );
		this.m_mapKeyCodeToAttacks.set( this.m_AttackData.beastattack.keycode, this.BeastAttack.bind( this ) );
	}
	else
	{
		this.BuildAttackCooldown( 'psychicattack' );
		this.m_mapKeyCodeToAttacks.set( this.m_AttackData.psychicattack.keycode, this.PsychicAttack.bind( this ) );
	}

	if ( this.m_bBossLevel )
	{
		this.m_mapKeyCodeToAttacks.set( this.m_AttackData.healing.keycode, this.HealingAttack.bind( this ) );
		this.BuildAttackCooldown( 'healing' );
	}
};

CAttackManager.prototype.BuildAttackCooldown = function( strType )
{
	var cdhandler = new CCooldownHandler( this, strType );
	if ( !this.m_bAllySalien )
	{
		cdhandler.BuildSprites();
	}
	this.m_mapCooldowns.set( strType, cdhandler );
};

CAttackManager.prototype.Destroy = function()
{
	this.m_mapBoulders.forEach( function ( boulder, id ) {
		boulder.destroy();
	});
	this.m_mapBombs.forEach( function ( bomb, id ) {
		bomb.destroy();
	});
	this.m_mapSlimes.forEach( function ( item, id ) {
		item.destroy();
	});
	this.m_mapBlackholes.forEach( function ( item, id ) {
		item.destroy();
	});
	this.m_mapBeasts.forEach( function ( item, id ) {
		item.destroy();
	});
	this.m_mapPsychicCubes.forEach( function ( item, id ) {
		item.destroy();
	});

	if ( !this.m_bAllySalien )
	{
		window.removeEventListener( "keydown", this.m_BoundAttack );
		this.m_mapCooldowns.forEach( function( cooldown ) {
			cooldown.Destroy();
		});
	}

};

CAttackManager.prototype.Update = function( delta )
{
	var instance = this;
	this.UpdateBoulders(delta);
	this.UpdateBombs(delta);
	this.UpdateBlackholes( delta );
	this.UpdateFlashfreeze( delta );
	this.UpdateSlimes( delta );
	this.UpdateBeasts( delta );
	this.UpdateCubes( delta );

	if ( !this.m_bAllySalien )
	{
		this.m_mapCooldowns.forEach( function( cooldown ) {
			cooldown.Update();
		});
	}

};

CAttackManager.prototype.UpdateBoulders = function( delta )
{
	var instance = this;
	this.m_mapBoulders.forEach( function ( boulder, id ) {
		if ( boulder.x > gApp.screen.width )
		{
			instance.m_mapBoulders.delete( id );
			boulder.destroy();
			gAudioManager.StopSound( instance.m_AttackData.boulder.rollingsound );
		}
		else
		{
			if ( boulder.y <= boulder.targety )
			{
				if ( boulder.y + instance.m_AttackData.boulder.fallspeed >= boulder.targety && boulder.landed == false )
				{
					boulder.landed = true;
					gAudioManager.PlaySound( instance.m_AttackData.boulder.landsound );
					boulder.y = boulder.targety;
				}
				else
				{
					boulder.y += instance.m_AttackData.boulder.fallspeed;
				}
			}
			else
			{
				gAudioManager.PlaySound( instance.m_AttackData.boulder.rollingsound, true );
				boulder.x += boulder.vx * delta;
				boulder.rotation += 0.1;
				instance.m_BattleState.DamageEnemiesAtLocation( instance.m_AttackData.boulder.damage, new PIXI.Rectangle( boulder.x, boulder.y - ( boulder.height / 2 ), boulder.width * 0.5, boulder.height ), false );
			}
		}
	});
};

CAttackManager.prototype.UpdateBombs = function( delta )
{
	var instance = this;
	this.m_mapBombs.forEach( function ( bomb, id ) {
		if (  bomb.x < bomb.targetx )
		{
			var t = ( bomb.x - bomb.startx ) / ( bomb.targetx - bomb.startx );
			t = parseInt( ( t ) * 100 );

			// find a t value that is at or ahead of the x we should be at
			for ( var i = t; i < bomb.lut.length; ++i )
			{
				t = i;
				if ( bomb.lut[t].x >= bomb.x + bomb.vx )
				{
					break;
				}
			}

			if ( bomb.lut[t] === undefined )
			{
				bomb.x = bomb.targetx;
				bomb.y = bomb.targety;
				bomb.landed = true;
			}
			else
			{
				bomb.x = bomb.lut[t].x;
				bomb.y = bomb.lut[t].y;
			}
		}
		else
		{
			bomb.landed = true;
		}

		if ( bomb.landed )
		{
				var explosion = new PIXI.extras.AnimatedSprite( instance.m_rgExplosionFrames );
				explosion.animationSpeed = 0.2;
				explosion.loop = false;
				explosion.play();
				explosion.scale.set( 0.4, 0.4 );
				explosion.anchor.set( 0.5, 0.5 );
				explosion.x = bomb.x;
				explosion.y = bomb.y;
				gApp.stage.addChild( explosion );
				gAudioManager.PlaySound( instance.m_AttackData.explosion.sound, true );

				instance.m_mapBombs.delete( id );
				bomb.destroy();

				instance.m_BattleState.DamageEnemiesAtLocation( instance.m_AttackData.explosion.damage, new PIXI.Rectangle( explosion.x - ( explosion.width / 2 ), explosion.y - ( explosion.height / 2 ), explosion.width, explosion.height ) );

				explosion.onComplete = function() {
					explosion.destroy();
				};

		}

	});
};

CAttackManager.prototype.UpdateSlimes = function( delta )
{
	var instance = this;
	this.m_mapSlimes.forEach( function ( slime, id ) {
		if (  slime.x < slime.targetx )
		{
			var t = ( slime.x - slime.startx ) / ( slime.targetx - slime.startx );
			t = parseInt( ( t ) * 100 );

			// find a t value that is at or ahead of the x we should be at
			for ( var i = t; i < slime.lut.length; ++i )
			{
				t = i;
				if ( slime.lut[t].x >= slime.x + slime.vx )
				{
					break;
				}
			}

			if ( slime.lut[t] === undefined )
			{
				slime.x = slime.targetx;
				slime.y = slime.targety;
				slime.landed = true;
			}
			else
			{
				slime.x = slime.lut[t].x;
				slime.y = slime.lut[t].y;
			}
		}
		else
		{
			slime.landed = true;
		}

		if ( slime.landed )
		{
			var splat = new PIXI.extras.AnimatedSprite( instance.m_rgSlimeSplatFrames );
			splat.animationSpeed = 0.2;
			splat.loop = false;
			splat.play();
			splat.scale.set( 0.3, 0.3 );
			splat.anchor.set( 0.5, 0.5 );
			splat.x = slime.x;
			splat.y = slime.y;
			gApp.stage.addChild( splat );

			instance.m_mapSlimes.delete( id );
			slime.destroy();
			gAudioManager.PlaySound( instance.m_AttackData.slimeattack.sound, false, 0.25 );

			instance.m_BattleState.DamageEnemiesAtLocation( instance.m_AttackData.slimeattack.damage, new PIXI.Rectangle( splat.x - ( splat.width / 2 ), splat.y - ( splat.height / 2 ), splat.width, splat.height ), !instance.m_bAllySalien );

			splat.onComplete = function() {
				splat.destroy();
			};
		}
	});
};

CAttackManager.prototype.UpdateBlackholes = function( delta )
{
	var instance = this;
	this.m_mapBlackholes.forEach( function ( blackhole, id ) {
		if ( blackhole.rtDespawn < Date.now() )
		{
			blackhole.destroy();
			instance.m_mapBlackholes.delete( id );
			return;
		}

		if ( blackhole.scale.x < 0.3 )
		{
			blackhole.scale.x += instance.m_AttackData.blackhole.growthspeed * delta;
			blackhole.scale.y += instance.m_AttackData.blackhole.growthspeed * delta;
		}
		else if ( blackhole.filters === null )
		{
			var bhFilter = new PIXI.filters.GlowFilter();
			bhFilter.color = 0x90303;
			bhFilter.distance = 15;
			bhFilter.innerStrength = 2;
			bhFilter.outerStrength = 3;
			bhFilter.vi = 0.1;
			bhFilter.vo = 0.1;

			blackhole.filters = [bhFilter];
		}
		else
		{
			var bhFilter = blackhole.filters[0];
			if ( bhFilter.innerStrength > 5 || bhFilter.innerStrength < 1 )
			{
				bhFilter.vi = -bhFilter.vi;
				bhFilter.vo = -bhFilter.vo;
			}
			bhFilter.innerStrength += bhFilter.vi;
			bhFilter.outerStrength += bhFilter.vo;

			var targetx = blackhole.x;
			var targety = blackhole.y;

			var rgEnemies = instance.m_BattleState.GetEnemiesAtLocation( new PIXI.Rectangle( blackhole.x - (blackhole.width / 2), blackhole.y - ( blackhole.height / 2 ), blackhole.width, blackhole.height ) );
			rgEnemies.forEach( function( enemy ){
				if ( enemy instanceof CBoss )
				{
					return;
				}

				if ( ( enemy.m_Sprite.x + enemy.m_Sprite.width / 2 ) < targetx )
				{
					enemy.m_Sprite.x += instance.m_AttackData.blackhole.strength;
				}
				if ( ( enemy.m_Sprite.x + enemy.m_Sprite.width / 2 ) > targetx )
				{
					enemy.m_Sprite.x -= instance.m_AttackData.blackhole.strength;
				}
				if ( ( enemy.m_Sprite.y + enemy.m_Sprite.height / 2 ) < targety )
				{
					enemy.m_Sprite.y += instance.m_AttackData.blackhole.strength;
				}
				if ( ( enemy.m_Sprite.y + enemy.m_Sprite.height / 2 ) > targety )
				{
					enemy.m_Sprite.y -= instance.m_AttackData.blackhole.strength;
				}
			});
		}
	});
};

CAttackManager.prototype.UpdateFlashfreeze = function( delta )
{
	var rtNow = Date.now();
	var instance = this;

	this.m_mapFrozenEnemies.forEach( function ( enemy ) {
		if ( enemy.rtFrozenUntil < rtNow && !enemy.m_bDead )
		{
			enemy.m_Sprite.filters = null;
			enemy.m_Sprite.play();
			enemy.m_Sprite.vx = enemy.m_Sprite.oldvx;
			instance.m_mapFrozenEnemies.delete( enemy.m_ID );
		}
		else if ( enemy.m_bDead )
		{
			instance.m_mapFrozenEnemies.delete( enemy.m_ID );
		}
	});
};

CAttackManager.prototype.UpdateBeasts = function ( delta )
{
	var instance = this;
	this.m_mapBeasts.forEach( function ( beast, id ) {
		if (  beast.x < beast.targetx )
		{
			var t = ( beast.x - beast.startx ) / ( beast.targetx - beast.startx );
			t = parseInt( ( t ) * 100 );

			// find a t value that is at or ahead of the x we should be at
			for ( var i = t; i < beast.lut.length; ++i )
			{
				t = i;
				if ( beast.lut[t].x >= beast.x + beast.vx )
				{
					break;
				}
			}

			if ( beast.lut[t] === undefined )
			{
				beast.x = beast.targetx;
				beast.y = beast.targety;
				beast.landed = true;
			}
			else
			{
				beast.x = beast.lut[t].x;
				beast.y = beast.lut[t].y;
			}
		}
		else
		{
			beast.landed = true;
		}

		if ( beast.landed )
		{
			beast.play();

			instance.m_mapBeasts.delete( id );
			gAudioManager.PlaySound( instance.m_AttackData.beastattack.sound, false, 0.25 );
			beast.onComplete = function() {
				instance.m_BattleState.DamageEnemiesAtLocation( instance.m_AttackData.beastattack.damage, new PIXI.Rectangle( beast.x - ( beast.width / 2 ), beast.y - ( beast.height / 2 ), beast.width, beast.height ), !instance.m_bAllySalien );
				beast.destroy();
			};
		}
	});
};

CAttackManager.prototype.UpdateCubes = function ( delta )
{
	var instance = this;
	this.m_mapPsychicCubes.forEach( function ( psychicCube, id ) {
		if (  psychicCube.x < psychicCube.targetx )
		{
			var t = ( psychicCube.x - psychicCube.startx ) / ( psychicCube.targetx - psychicCube.startx );
			t = parseInt( ( t ) * 100 );

			// find a t value that is at or ahead of the x we should be at
			for ( var i = t; i < psychicCube.lut.length; ++i )
			{
				t = i;
				if ( psychicCube.lut[t].x >= psychicCube.x + psychicCube.vx )
				{
					break;
				}
			}

			if ( psychicCube.lut[t] === undefined )
			{
				psychicCube.x = psychicCube.targetx;
				psychicCube.y = psychicCube.targety;
				psychicCube.landed = true;
			}
			else
			{
					psychicCube.x = psychicCube.lut[t].x;
					psychicCube.y = psychicCube.lut[t].y;
			}
		}
		else
		{
			psychicCube.landed = true;
		}

		if ( psychicCube.landed )
		{
			psychicCube.play();

			psychicCube.affectedEnemies = [];
			var rgEnemies = instance.m_BattleState.GetEnemiesAtLocation( new PIXI.Rectangle( psychicCube.x - ( psychicCube.width / 2 ), psychicCube.y - ( psychicCube.height / 2 ), psychicCube.width, psychicCube.height ) );
			rgEnemies.forEach( function( enemy ) {
				var psychicFilter = new PIXI.filters.GlitchFilter();
				psychicFilter.seed = 0.34;
				psychicFilter.slices = 5;
				psychicFilter.offset = 20;
				psychicFilter.direction = 9;
				psychicFilter.red.x = 0.1;
				psychicFilter.red.y = 2;

				enemy.m_Sprite.filters = [psychicFilter];
				psychicCube.affectedEnemies.push( enemy );
			});

			instance.m_mapPsychicCubes.delete( id );
			gAudioManager.PlaySound( instance.m_AttackData.psychicattack.sound, false, 0.25 );
			psychicCube.onComplete = function() {
				psychicCube.affectedEnemies.forEach( function ( enemy ) {
					if ( !enemy.m_bDead )
					{
						enemy.m_Sprite.filters = null;
						if ( instance.m_bAllySalien && enemy instanceof CBoss )
						{
							return;
						}
						enemy.Damage( instance.m_AttackData.psychicattack.damage );
					}
				});
				psychicCube.destroy();
			};
		}
	});
};

CAttackManager.prototype.Attack = function( event, x, y )
{
	if ( this.m_bDisabled )
	{
		return;
	}

		if ( this.m_mapKeyCodeToAttacks.has( event.keyCode ) )
	{
		this.m_mapKeyCodeToAttacks.get(event.keyCode).call( undefined, x, y );
	}
};

CAttackManager.prototype.ExplosionAttack = function()
{
	if ( !this.m_mapCooldowns.get( 'explosion' ).BAttack() )
	{
		return;
	}

	this.m_Salien.PlayAnim("attack", false, 1);

	var bomb = new PIXI.Sprite( PIXI.loader.resources['bomb'].texture );
	bomb.scale.set( 0.5, 0.5 );
	bomb.anchor.set( 0.5, 0.5 );
	bomb.x = this.m_Salien.x;
	bomb.vx = 30;
	bomb.startx = this.m_Salien.x;
	bomb.y = this.m_Salien.y - ( this.m_Salien.height / 2 );
	bomb.targety = gApp.renderer.plugins.interaction.mouse.global.y;
	bomb.targetx = gApp.renderer.plugins.interaction.mouse.global.x;
	bomb.landed = false;

	var xmid = this.m_Salien.x + ( ( bomb.targetx - this.m_Salien.x ) / 2 );
	var ymid = Math.min( bomb.y, bomb.targety ) - 100;

	var curve = new Bezier(bomb.x,bomb.y , xmid,ymid , bomb.targetx,bomb.targety);
	bomb.lut = curve.getLUT();
	gApp.stage.addChild( bomb );
	this.m_mapBombs.set( this.GetID(), bomb );
};

function ResolveTarget( target, x, y )
{
	if ( x === undefined )
	{
		target.x = gApp.renderer.plugins.interaction.mouse.global.x;
	}
	else
	{
		target.x = x;
	}


	if ( y === undefined )
	{
		target.y = gApp.renderer.plugins.interaction.mouse.global.y;
	}
	else
	{
		target.y = y;
	}
}

CAttackManager.prototype.SlimeAttack = function( x, y )
{
	if ( !this.m_mapCooldowns.get( 'slimeattack' ).BAttack() )
	{
		return;
	}

	var target = { x: 0, y: 0 };
	ResolveTarget( target, x, y );

	this.m_Salien.PlayAnim("attack", false, 1);

	var slime = new PIXI.extras.AnimatedSprite( this.m_rgSlimeAttackFrames );
	slime.animationSpeed = 0.2;
	slime.loop = true;
	slime.play();
	slime.scale.set( 0.3, 0.3 );
	slime.anchor.set( 0.5, 0.5 );
	slime.x = this.m_Salien.x;
	slime.startx = this.m_Salien.x;
	slime.y = this.m_Salien.y - ( this.m_Salien.height / 2 );
	slime.targety = target.y;
	slime.targetx = target.x;
	slime.landed = false;
	slime.vx = this.m_AttackData.slimeattack.speed;

	var xmid = this.m_Salien.x + ( ( slime.targetx - this.m_Salien.x ) / 2 );
	var ymid = Math.min( slime.y, slime.targety ) - 100;

	var curve = new Bezier(slime.x,slime.y , xmid,ymid , slime.targetx,slime.targety);
	slime.lut = curve.getLUT();
	gApp.stage.addChild( slime );
	this.m_mapSlimes.set( this.GetID(), slime );
};

CAttackManager.prototype.BoulderAttack = function()
{
	if ( !this.m_mapCooldowns.get( 'boulder' ).BAttack() )
	{
		return;
	}

	this.m_Salien.PlayAnim("attack", false, 1);

	var boulder = new PIXI.Sprite( PIXI.loader.resources['boulder'].texture );
	boulder.scale.set( 0.2, 0.2 );
	boulder.anchor.set( 0.5, 0.5 );
	boulder.x = gApp.renderer.plugins.interaction.mouse.global.x;
	boulder.y = -10;
	boulder.targety = gApp.renderer.plugins.interaction.mouse.global.y;
	boulder.landed = false;
	boulder.vx = 2;
	gApp.stage.addChild( boulder );

	this.m_mapBoulders.set( this.GetID(), boulder );
};

CAttackManager.prototype.BlackholeAttack = function()
{
	if ( !this.m_mapCooldowns.get( 'blackhole' ).BAttack() )
	{
		return;
	}

	this.m_Salien.PlayAnim("attack", false, 1);

	var blackhole = new PIXI.Sprite( PIXI.loader.resources['blackhole'].texture );
	blackhole.scale.set( 0.01, 0.01 );
	blackhole.anchor.set( 0.5, 0.5 );
	blackhole.x = gApp.renderer.plugins.interaction.mouse.global.x;
	blackhole.y = gApp.renderer.plugins.interaction.mouse.global.y;
	blackhole.z = 10;
	blackhole.rtDespawn = Date.now() + this.m_AttackData.blackhole.duration * 1000;
	this.m_BattleState.m_EnemyManager.m_EnemyContainer.addChild( blackhole );
	this.m_BattleState.m_EnemyManager.SortEnemies();

	gAudioManager.PlaySound( this.m_AttackData.blackhole.sound, true );

	this.m_mapBlackholes.set( this.GetID(), blackhole );
};

CAttackManager.prototype.FlashFreezeAttack = function()
{
	if ( !this.m_mapCooldowns.get( 'flashfreeze' ).BAttack() )
	{
		return;
	}

	this.m_Salien.PlayAnim("attack", false, 1);
	gAudioManager.PlaySound( this.m_AttackData.flashfreeze.sound );

	var freezeGlow = new PIXI.filters.GlowFilter();
	freezeGlow.color = 0x3690cf;
	freezeGlow.distance = 15;
	freezeGlow.innerStrength = 2;
	freezeGlow.outerStrength = 3;

	var instance = this;
	this.m_BattleState.m_EnemyManager.m_mapEnemies.forEach( function (enemy ) {
		if ( enemy instanceof CBoss )
		{
			return;
		}

		if ( instance.m_mapFrozenEnemies.has( enemy.m_ID ) )
		{
			return;
		}

		enemy.m_Sprite.stop();
		enemy.m_Sprite.oldvx = enemy.m_Sprite.vx;
		enemy.m_Sprite.vx = 0;

		enemy.m_Sprite.filters = [freezeGlow];
		enemy.rtFrozenUntil = Date.now() + instance.m_AttackData.flashfreeze.duration * 1000;
		instance.m_mapFrozenEnemies.set( enemy.m_ID, enemy );
	});
};

CAttackManager.prototype.BeastAttack = function( x, y )
{
	if ( !this.m_mapCooldowns.get( 'beastattack' ).BAttack() )
	{
		return;
	}

	var target = { x: 0, y: 0 };
	ResolveTarget( target, x, y );

	var beastSprite = new PIXI.extras.AnimatedSprite( this.m_rgBeastSpawnFrames );
	beastSprite.play();
	beastSprite.loop = false;
	beastSprite.animationSpeed = 0.5;
	beastSprite.scale.set( 0.3, 0.3 );
	beastSprite.anchor.set( 0.5, 0.5 );
	beastSprite.x = this.m_Salien.x;
	beastSprite.startx = this.m_Salien.x;
	beastSprite.y = this.m_Salien.y - ( this.m_Salien.height / 2 );
	beastSprite.landed = false;

	beastSprite.vx = this.m_AttackData.beastattack.speed;
	beastSprite.vy = this.m_AttackData.beastattack.speed;
	gApp.stage.addChild( beastSprite );

	if ( this.m_bAllySalien )
	{
		target.x -= 100;
	}
	beastSprite.targetx = target.x - 20;
	beastSprite.targety = target.y;

	var xmid = this.m_Salien.x + ( ( beastSprite.targetx - this.m_Salien.x ) / 2 );
	var ymid = Math.min( beastSprite.y, beastSprite.targety ) - 100;

	var curve = new Bezier(beastSprite.x,beastSprite.y , xmid,ymid , beastSprite.targetx,beastSprite.targety);
	beastSprite.lut = curve.getLUT();

	var instance = this;
	beastSprite.onComplete = function() {
		instance.m_Salien.PlayAnim("attack", false, 1);
		beastSprite.textures = instance.m_rgBeastAttackFrames;
		beastSprite.stop();
		beastSprite.animationSpeed = 1.0;
		beastSprite.onComplete = null;
		instance.m_mapBeasts.set( instance.GetID(), beastSprite );
	};
};

CAttackManager.prototype.PsychicAttack = function( x, y )
{
	if ( !this.m_mapCooldowns.get( 'psychicattack' ).BAttack() )
	{
		return;
	}

	var target = { x: 0, y: 0 };
	ResolveTarget( target, x, y );

	var psychicSprite = new PIXI.extras.AnimatedSprite( this.m_rgPsychicAttackFrames );
	psychicSprite.stop();
	psychicSprite.loop = false;
	psychicSprite.animationSpeed = 0.5;
	psychicSprite.scale.set( 0.3, 0.3 );
	psychicSprite.anchor.set( 0.5, 0.5 );
	psychicSprite.x = this.m_Salien.x;
	psychicSprite.startx = this.m_Salien.x;
	psychicSprite.y = this.m_Salien.y - ( this.m_Salien.height / 2 );
	psychicSprite.landed = false;

	psychicSprite.vx = this.m_AttackData.psychicattack.speed;
	psychicSprite.vy = this.m_AttackData.psychicattack.speed;
	gApp.stage.addChild( psychicSprite );

	psychicSprite.targetx = target.x - 10;
	psychicSprite.targety = target.y;

	var xmid = this.m_Salien.x + ( ( psychicSprite.targetx - this.m_Salien.x ) / 2 );
	var ymid = Math.min( psychicSprite.y, psychicSprite.targety ) - 100;

	var curve = new Bezier(psychicSprite.x,psychicSprite.y , xmid,ymid , psychicSprite.targetx,psychicSprite.targety);
	psychicSprite.lut = curve.getLUT();

	this.m_Salien.PlayAnim("attack", false, 1);
	this.m_mapPsychicCubes.set( this.GetID(), psychicSprite );
};

CAttackManager.prototype.HealingAttack = function( bSkipCooldown )
{
	var _bSkipCooldown = false;
	if ( bSkipCooldown !== undefined )
	{
		_bSkipCooldown = bSkipCooldown;
	}

	if ( !_bSkipCooldown && !this.m_mapCooldowns.get( 'healing' ).BAttack() )
	{
		return;
	}

	if ( !this.m_bAllySalien && this.m_BattleState.HealPlayer !== undefined )
	{
		if ( !bSkipCooldown )
		{
			this.m_BattleState.HealPlayer( this.m_AttackData.healing.damage );
		}
	}

	var healingSprite = new PIXI.extras.AnimatedSprite( this.m_rgHealingFrames );
	healingSprite.loop = false;
	healingSprite.play();
	healingSprite.animationSpeed = 0.2;
	healingSprite.scale.set( 0.2, 0.2 );
	healingSprite.x = this.m_Salien.x - this.m_Salien.width / 3;
	healingSprite.y = this.m_Salien.y - this.m_Salien.height / 2;
	healingSprite.loopcount = 0;
	gApp.stage.addChild( healingSprite );

	var instance = this;
	healingSprite.onComplete = function() {
		if ( this.loopcount < 2 )
		{
		    this.textures = instance.m_rgHealingFrames;
			this.loopcount += 1;
			this.play();
		}
		else
		{
			this.destroy();
		}
	};

	if ( this.m_BattleState.m_mapAllySaliens !== undefined )
	{
		this.m_BattleState.m_mapAllySaliens.forEach( function ( salien ) {
			var healingSprite = new PIXI.extras.AnimatedSprite( instance.m_rgHealingFrames );
			healingSprite.loop = false;
			healingSprite.play();
			healingSprite.animationSpeed = 0.2;
			healingSprite.scale.set( 0.2, 0.2 );
			healingSprite.x = salien.x - salien.width / 3;
			healingSprite.y = salien.y - salien.height / 2;
			healingSprite.loopcount = 0;
			gApp.stage.addChild( healingSprite );

			healingSprite.onComplete = function() {
				if (this.loopcount < 2) {
					this.textures = instance.m_rgHealingFrames;
					this.loopcount += 1;
					this.play();
				}
				else {
					this.destroy();
				}
			};
		});
	}
};