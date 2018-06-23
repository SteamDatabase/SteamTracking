// <script>
"use strict";

const k_ScreenWidth = 1280;
const k_ScreenHeight = 720;
const k_MatchLengthSec = 120;
const k_GameBoxW = 93;
const k_GameBoxH = 36;
const k_GameBoxPadding = 4;

var gApp = null;
var gGame = null;
var gServer = null;

const gLoader = PIXI.loader;

// this dude gets shared between states
var gSalien = null;

var gPlayerInfo = null;

var gAudioManager = new CAudioManager();

// simple button for customizing a salien
function CreateCustomizeButton(w, h)
{
	var graphics = new PIXI.Graphics();
	graphics.interactive = true;
	graphics.buttonMode = true;
	
	graphics.beginFill(0xff0000, 0.0);
	graphics.drawRect(0, 0, w, h);
	graphics.endFill();	
	
	graphics.click = function()
	{
		ShowCustomSalienDialog();
	};

	graphics.mouseover = function()
	{
		gSalien.PlayAnim("greet", false, 1);
	};

	return graphics;
}

//////////////////////////////////////////////////////////
// Game - simple class for holding current state
function CGame()
{
	this.m_State = null;
	this.m_QueuedState = null;
	this.m_IsStateLoading = false;
}
CGame.prototype.Start = function()
{
	var instance = this;
	gServer = new CServerInterface();
	gServer.Connect( function() {} );

	// boot the game
	this.ChangeState(new CBootState());
	
	// begin the clock
	gApp.stage.interactive = true;
	gApp.ticker.add((delta) => 
	{
		gGame.Update(delta) 
	});    
	
	gLoader.onProgress.add((loader, resource) =>
	{
		gGame.OnLoadProgress(loader, resource);
	});
	gLoader.on('complete', (loader, resources) =>
	{
		gGame.OnLoadStateComplete(loader, resources);
	});    
};
CGame.prototype.ChangeState = function( newState )
{
	this.m_QueuedState = newState;
};
CGame.prototype.LoadGameState = function()
{
	$J( '#salien_loading_throbber' ).show();
	this.m_IsStateLoading = true;
	this.m_State.Load();
};
CGame.prototype.OnLoadProgress = function(loader, resource)
{
	this.m_State.OnLoadProgress(loader, resource);
};
CGame.prototype.OnLoadStateComplete = function(loader, resources)
{
	this.m_State.OnLoadComplete(loader, resources);
	$J( '#salien_loading_throbber' ).hide();
	this.m_IsStateLoading = false;
};
CGame.prototype.Update = function(delta)
{

	if(this.m_QueuedState)
	{
		if(this.m_State)
		{
			this.m_State.Shutdown();
		}
		gApp.stage.removeChildren();
		this.m_State = this.m_QueuedState;
		this.m_QueuedState = null;
		this.LoadGameState();
	}

	if(this.m_State && !this.m_IsStateLoading)
	{
		if(null != gSalien)
		{
			gSalien.Update();
		}
		this.m_State.Update(delta);
	}

	gAudioManager.Update(delta);
};

function CAudioManager()
{
	this.m_Muted = false;
	this.m_strCurrentTrack = null;
	this.m_bCurrentTrackLoop = false;
	this.m_rgFadeOut = [];
	this.m_AudioIndicator = null;

	this.m_Muted = WebStorage.GetLocal('minigame_mutemusic');
}

CAudioManager.prototype.PlaySound = function( strSoundName, bPlayOnce, volume )
{
	if ( this.m_Muted )
		return;
	
	var _bPlayOnce = true;
	if ( bPlayOnce !== undefined )
	{
		_bPlayOnce = bPlayOnce;
	}

	var _volume = 1.0;
	if ( volume !== undefined )
	{
		_volume = volume;
	}
	PIXI.loader.resources[strSoundName].sound.volume = _volume;

	if ( _bPlayOnce && PIXI.loader.resources[strSoundName].sound.isPlaying )
	{
		return;
	}

	PIXI.loader.resources[strSoundName].sound.play();
};

CAudioManager.prototype.StopSound = function( strSoundName )
{
	PIXI.loader.resources[strSoundName].sound.stop();
};

CAudioManager.prototype.PlayMusic = function( strMusicName, bLoop )
{
	if ( this.m_Muted )
		return;

	this.m_bCurrentTrackLoop = bLoop;
	if ( this.m_strCurrentTrack == strMusicName && PIXI.loader.resources[strMusicName].sound.isPlaying )
	{
		PIXI.loader.resources[strMusicName].sound.loop = this.m_bCurrentTrackLoop;
		return;
	}

	if ( this.m_strCurrentTrack !== null )
	{
		this.m_rgFadeOut.push( this.m_strCurrentTrack );
	}
	else
	{
		PIXI.loader.resources[strMusicName].sound.volume = 1.0;
		PIXI.loader.resources[strMusicName].sound.play();
		PIXI.loader.resources[strMusicName].sound.loop = this.m_bCurrentTrackLoop;
	}

	this.m_strCurrentTrack = strMusicName;
};

CAudioManager.prototype.FadeMusic = function()
{
	if ( this.m_strCurrentTrack !== null )
	{
		this.m_rgFadeOut.push( this.m_strCurrentTrack );
		this.m_strCurrentTrack = null;
	}
};

CAudioManager.prototype.ToggleMute = function()
{
	this.m_Muted = !this.m_Muted;
	WebStorage.SetLocal('minigame_mutemusic', this.m_Muted );

	if ( this.m_Muted )
	{
		PIXI.sound.stopAll();
	}
	else
	{
		if ( this.m_strCurrentTrack !== null )
		{
			this.PlayMusic(	this.m_strCurrentTrack, this.m_bCurrentTrackLoop );
		}
	}
};

CAudioManager.prototype.Update = function( delta )
{
	var nFadeRate = 0.01;
	for( var i = this.m_rgFadeOut.length - 1; i >= 0; --i )
	{
		var strMusicName = this.m_rgFadeOut[i];
		if( PIXI.loader.resources[strMusicName].sound.volume - nFadeRate <= 0 )
		{
			PIXI.loader.resources[strMusicName].sound.stop();
			PIXI.loader.resources[strMusicName].sound.volume = 1.0;
			this.m_rgFadeOut.splice( i, 1 );
			if ( this.m_strCurrentTrack !== null && !PIXI.loader.resources[this.m_strCurrentTrack].sound.isPlaying )
			{
				PIXI.loader.resources[this.m_strCurrentTrack].sound.volume = 1.0;
				if ( !this.m_Muted )
				{
					PIXI.loader.resources[this.m_strCurrentTrack].sound.play();
					PIXI.loader.resources[this.m_strCurrentTrack].sound.loop = this.m_bCurrentTrackLoop;
				}
			}
		}
		else
		{
			PIXI.loader.resources[strMusicName].sound.volume -= nFadeRate;
		}
	}
};

// base class for game states
function CGameState() { }
// call this to start the state, overload and call with your list of assets
CGameState.prototype.Load = function() {};
CGameState.prototype.OnLoadProgress = function(loader, resource ) 
{
	//console.log( 'loading files ' + loader.progress + '%' );
};
CGameState.prototype.OnLoadComplete = function(loader, resources) {};
CGameState.prototype.Update = function(delta) {};
CGameState.prototype.Shutdown = function() {};



//////////////////////////////////////////////////////////
// Boot State - load everything that's used globally, then 
//   start the game.
function CBootState() 
{
	CGameState.call(this);
}
CBootState.prototype = Object.create(CGameState.prototype);
CBootState.prototype.Load = function()
{
	LoadAsset('intro_music', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/sfx/SS2018_Saliens_Intro2.{ogg,mp3}');
	LoadAsset('boot_bg', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/saliens_play_screen.png');
	LoadAsset('logo_bg', 'https://steamcommunity-a.akamaihd.net/public/images/saliengame/saliens_logo_bg.png');
	LoadAsset('logo', 'https://steamcommunity-a.akamaihd.net/public/images/saliengame/saliens_logo.png');	
	LoadAsset('saliens_rig_atlas', 'https://steamcommunity-a.akamaihd.net/public/images/saliengame/saliens_rig.atlas');
	LoadAsset('saliens_rig', 'https://steamcommunity-a.akamaihd.net/public/images/saliengame/saliens_rig.png');
	LoadAsset('saliens_rig_anim', 'https://steamcommunity-a.akamaihd.net/public/images/saliengame/saliens_rig.json');
	LoadAsset( 'ui_select', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/sfx/ui_item_select.{ogg,mp3}' );
	LoadAsset('sound_toggle', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/sound_toggle.png');
	gLoader.load();
};
CBootState.prototype.OnLoadComplete = function(loader, resources)
{
	//console.log("CBootState::OnLoadComplete()");

	this.background = new PIXI.Sprite.fromImage( 'boot_bg' );
	this.background.width = gApp.screen.width;
	this.background.height = gApp.screen.height;
	gApp.stage.addChild( this.background );    

	// add button
	this.button = new CUIButton( 120, 40, 'Play'.toUpperCase() );
	this.button.x = gApp.screen.width / 2 - (this.button.width / 2);
	this.button.y = 450;
	this.button.click = function() {
		gAudioManager.PlaySound( 'ui_select' );
		gServer.GetPlayerInfo(
			function( results ) {
				gPlayerInfo = results.response;
				if ( gPlayerInfo.active_zone_game )
				{
					gServer.LeaveGameInstance( gPlayerInfo.active_zone_game, function(){}, function(){} );
				}

				if ( null != gPlayerInfo && gPlayerInfo.active_planet !== undefined )
				{
					gGame.ChangeState( new CBattleSelectionState( gPlayerInfo.active_planet ) );
				}
				else
				{
					gGame.ChangeState( new CPlanetSelectionState() );
				}
			},
			GameLoadError
		)
	};
	
	gApp.stage.addChild( this.button );

	this.m_AudioIndicator = new PIXI.Sprite.fromImage( 'sound_toggle' );
	this.m_AudioIndicator.x = k_ScreenWidth - this.m_AudioIndicator.width - 10;
	this.m_AudioIndicator.y = k_ScreenHeight - this.m_AudioIndicator.height - 10;
	this.m_AudioIndicator.alpha = gAudioManager.m_Muted ? 0.3 : 1.0;
	this.m_AudioIndicator.interactive = true;
	this.m_AudioIndicator.buttonMode = true;
	this.m_AudioIndicator.pointertap = function() {
		gAudioManager.ToggleMute();
		this.alpha = gAudioManager.m_Muted ? 0.3 : 1.0;
	};
	gApp.stage.addChild( this.m_AudioIndicator );

	gAudioManager.PlayMusic( 'intro_music', false );

};
CBootState.prototype.Shutdown = function()
{
	gApp.stage.removeChild(this.background);
	gApp.stage.removeChild(this.button);
	this.m_AudioIndicator.destroy();
};


//////////////////////////////////////////////////////////
// Planet Selection State - load the current planets,
//   let the player choose one to attack.
function CPlanetSelectionState() 
{
	CGameState.call(this);
}
CPlanetSelectionState.prototype = Object.create(CGameState.prototype);
CPlanetSelectionState.prototype.Load = function()
{
	var instance = this;
	gServer.GetPlanets( 0, function( results ) {
			LoadAsset( 'planet_select_bg', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/planet_select_bg.jpg' );
			LoadAsset( 'galaxy_music', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/sfx/SS2018_Saliens_Planet.{ogg,mp3}' );
			LoadAsset( 'ship', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/ship.png');
			LoadAsset( 'ship_flag', 'https://steamcommunity-a.akamaihd.net/public/images/saliengame/ship_flag.png');			
			LoadAsset( 'grid_tile_boss', 'https://steamcommunity-a.akamaihd.net/public/images/saliengame/grid_tile_boss.png' );
			LoadAsset( 'grid_tile_complete', 'https://steamcommunity-a.akamaihd.net/public/images/saliengame/grid_tile_complete.png' );
			LoadAsset( 'ui_select_forward', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/sfx/ui_select_forward_confirm.{ogg,mp3}' );

			if ( gPlayerInfo.clan_info !== undefined )
			{
				LoadAsset( 'clanavatar_' + gPlayerInfo.clan_info.accountid, 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/' + '/' + gPlayerInfo.clan_info.avatar.substr( 0, 2 ) + '/' + gPlayerInfo.clan_info.avatar + '.jpg' );
			}

			instance.m_rgPlanets = [];
			instance.m_rgConqueredPlanets = [];

			results.response.planets.forEach( function ( planet ) {
				if ( !planet.state.captured && planet.state.active )
				{
					instance.m_rgPlanets.push( planet )
				}
				else if ( planet.state.captured )
				{
					instance.m_rgConqueredPlanets.push( planet );
				}
			});

			instance.m_rgConqueredPlanets.sort( function( a, b ) {
				return b.state.capture_time - a.state.capture_time;
			});
			instance.m_rgConqueredPlanets.splice( Math.min( 5, instance.m_rgConqueredPlanets.length ), instance.m_rgConqueredPlanets.length );

			instance.m_mapPlanets = new Map();
			for ( var i = 0; i < instance.m_rgPlanets.length; ++i )
			{
				instance.m_mapPlanets.set( instance.m_rgPlanets[i].id, instance.m_rgPlanets[i] );
			}
			for ( var i = 0; i < instance.m_rgConqueredPlanets.length; ++i )
			{
				instance.m_mapPlanets.set( instance.m_rgConqueredPlanets[i].id, instance.m_rgConqueredPlanets[i] );
			}
			instance.m_rgPlanets.forEach( function( planet ) {
				var strPlanetName = 'Planet_' + planet.id;
				LoadAsset( strPlanetName, 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets//saliengame/planets/' + planet.state.image_filename );

				if ( planet.giveaway_apps !== undefined )
				{
					planet.giveaway_apps.forEach( function( appid ) {
						LoadAsset( 'app_' + appid, 'https://steamcdn-a.akamaihd.net/steam/apps/' + appid + '/capsule_sm_120.jpg' );
					});
				}
			});


			instance.m_rgConqueredPlanets.forEach( function( planet ) {
				var strPlanetName = 'Planet_' + planet.id;
				LoadAsset( strPlanetName, 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets//saliengame/planets/' + planet.state.image_filename );
			});

			gLoader.load();
		},
		GameLoadError
	);
};
CPlanetSelectionState.prototype.OnLoadComplete = function(loader, resources)
{
	//console.log("CPlanetSelectionState::OnLoadComplete()");

	if(null == gSalien)
	{
		gSalien = new CSalien(resources);
	}

	this.background = new PIXI.Sprite.fromImage( 'planet_select_bg' );
	this.background.width = gApp.screen.width;
	this.background.height = gApp.screen.height;
	gApp.stage.addChild( this.background );

	gAudioManager.PlayMusic( 'galaxy_music', true );

	this.m_rgPlanetLocations =
		[{ x: 1036, y: 218, scale: 0.8 },
		{ x: 453, y: 251, scale: 0.7 },
		{ x: 750, y: 360, scale: 0.3 },
		{ x: 600, y: 532, scale: 0.4 },
		{ x: 900, y: 569, scale: 0.5 }];

	this.m_rgPlanetSprites = [];

	this.m_MouseOverInfo = false;
	this.m_MouseOverPlanet = null;

	var instance = this;
	this.m_rgPlanets.forEach( function( planet, i ) {
		var position = planet.state.position;
		var planetSprite = new PIXI.Sprite.fromImage( 'Planet_' + planet.id );
		planetSprite.anchor.set( 0.5, 0.5 );
		planetSprite.x = instance.m_rgPlanetLocations[position].x;
		planetSprite.y = instance.m_rgPlanetLocations[position].y;
		planetSprite.vscale = 0;
		planetSprite.minscale = instance.m_rgPlanetLocations[position].scale - 0.02;
		planetSprite.maxscale = instance.m_rgPlanetLocations[position].scale + 0.03;
		planetSprite.basescale = instance.m_rgPlanetLocations[position].scale;
		planetSprite.scale.set( instance.m_rgPlanetLocations[position].scale, instance.m_rgPlanetLocations[position].scale );
		planetSprite.interactive = true;
		planetSprite.buttonMode = true;
		planetSprite.mouseover = function()
		{
			instance.OnMouseOverPlanet(this, planet.id);
		};
		planetSprite.mouseout = function()
		{
			instance.OnMouseOutPlanet(this);
		};
		planetSprite.pointertap = function() {
			gAudioManager.PlaySound( 'ui_select_forward' );
			gServer.JoinPlanet(
				planet.id,
				function ( response ) {
					gGame.ChangeState( new CBattleSelectionState( planet.id ) );
				},
				function ( response ) {
					ShowAlertDialog( 'Join Planet Error', 'Failed to join planet.  Please reload your game or try again shortly.' );
				}
			);
		};
		instance.m_rgPlanetSprites.push( planetSprite );
		gApp.stage.addChild( planetSprite );
	});

	instance.m_rgConqueredPlanets.forEach( function( planet, idx ) {
		var planetSprite = new PIXI.Sprite.fromImage( 'Planet_' + planet.id );
		planetSprite.anchor.set( 0.5, 0.5 );
		planetSprite.width = 48;
		planetSprite.height = 48;
		planetSprite.x = 450 + ( ( ( planetSprite.width ) + k_GameBoxPadding ) * idx ) ;
		planetSprite.y = k_ScreenHeight - ( planetSprite.height / 2 ) - 5;
		planetSprite.interactive = true;
		planetSprite.buttonMode = true;
		planetSprite.pointertap = function() {
			gAudioManager.PlaySound( 'ui_select_forward' );
			gGame.ChangeState( new CBattleSelectionState( planet.id ) );
		};
		planetSprite.mouseover = function()
		{
			instance.OnMouseOverPlanet(this, planet.id);
		};
		planetSprite.mouseout = function()
		{
			instance.OnMouseOutPlanet(this);
		};
		gApp.stage.addChild( planetSprite );
	});

	this.m_ViewMoreButton = new CUIButton( 180, 40, 'View All'.toUpperCase() );
	this.m_ViewMoreButton.x = gApp.screen.width - 50 - (this.m_ViewMoreButton.width);
	this.m_ViewMoreButton.y = 550;
	this.m_ViewMoreButton.click = function() {
		gAudioManager.PlaySound( 'ui_select' );
		window.open( 'https://store.steampowered.com/saliens', '_blank' )
	};
	gApp.stage.addChild( this.m_ViewMoreButton );

	this.m_SelectedPlanet = null;
	this.m_ShowingInfo = false;
	
	this.m_LogoBG = new PIXI.Sprite.fromImage( 'logo_bg' );
	gApp.stage.addChild(this.m_LogoBG);
	this.m_Logo = new PIXI.Sprite.fromImage( 'logo' );
	this.m_Logo.x = 33;
	this.m_Logo.y = 17;
	gApp.stage.addChild(this.m_Logo);
	
	this.m_Elapsed = 0;
	this.m_Ship = new PIXI.Sprite.fromImage( 'ship' );
	this.m_Ship.y = k_ScreenHeight - this.m_Ship.height;
	gApp.stage.addChild(this.m_Ship);
	
	this.m_ShipFlag = new PIXI.Sprite.fromImage( 'ship_flag' );
	this.m_ShipFlag.x = 84;
	this.m_ShipFlag.y = 2;
	this.m_Ship.addChild(this.m_ShipFlag);

	this.m_ShipFlag.interactive = true;
	this.m_ShipFlag.buttonMode = true;
	this.m_ShipFlag.pointertap = function() {
		ShowRepresentGroupDialog( function( groupid, strAvatarHash ) {
			gPlayerInfo.clan_info = {};
			gPlayerInfo.clan_info.accountid = groupid;
			gPlayerInfo.clan_info.avatar = strAvatarHash;
			gGame.ChangeState( new CPlanetSelectionState( instance.m_unPlanetID ) );
		} );
	};
	this.m_Ship.addChild(this.m_ShipFlag);


	this.m_RecentlyConqueredText = new PIXI.Text( 'Recently Conquered by the Steam Community'.toUpperCase() );
	this.m_RecentlyConqueredText.style = {
		fontFamily: k_FontType,
		fontSize: 12,
		fill: "white",
		fontWeight: 'bold',
		align: 'center',
	};
	this.m_RecentlyConqueredText.anchor.set( 0.5, 0.5 );
	this.m_RecentlyConqueredText.x = 553;
	this.m_RecentlyConqueredText.y = k_ScreenHeight - 60;
	gApp.stage.addChild( this.m_RecentlyConqueredText );

	if ( gPlayerInfo.clan_info !== undefined )
	{
		this.m_ShipFlagClan = new PIXI.Sprite.fromImage( 'clanavatar_' + gPlayerInfo.clan_info.accountid );
		this.m_ShipFlagClan.x = this.m_ShipFlag.x + 32;
		this.m_ShipFlagClan.y = this.m_ShipFlag.y + 12;
		this.m_Ship.addChild(this.m_ShipFlagClan);
	}
	else if ( WebStorage.GetLocal('minigame_joingroupprompt') <= 3 )
	{
		if ( WebStorage.GetLocal('minigame_joingroupprompt') !== null )
		{
			WebStorage.SetLocal( 'minigame_joingroupprompt', WebStorage.GetLocal('minigame_joingroupprompt') + 1 );
		}
		else
		{
			WebStorage.SetLocal( 'minigame_joingroupprompt', 1 );
		}

		this.m_JoinGroupText = new PIXI.Text( '< Choose a group!' );
		this.m_JoinGroupText.anchor.set( 0, 0.5 );
		this.m_JoinGroupText.x = this.m_ShipFlag.x + this.m_ShipFlag.width;
		this.m_JoinGroupText.y = this.m_ShipFlag.y + ( this.m_ShipFlag.height / 2 ) - 10;
		this.m_JoinGroupText.style = {
			fontFamily: k_FontType,
			fontSize: 14,
			fill: 'white',
			align: 'center',
		};
		this.m_Ship.addChild(this.m_JoinGroupText);
	}


	// add the salien to the top
	gSalien.position.set(98, 386);
	gSalien.scale.set(0.13, 0.13);
	this.m_Ship.addChild(gSalien);	
	
	// our info!
	this.m_SalienInfoBox = new CSalienInfoBox();
	this.m_SalienInfoBox.x = 12;
	this.m_SalienInfoBox.y = k_ScreenHeight - 72;
	gApp.stage.addChild(this.m_SalienInfoBox);	
	
	this.m_Cursor = new CCrosshair(256, 256);
	this.m_InfoBox = new CUIBox(244, 180);
	this.m_InfoBox.SetTitleStyle(k_TextStyleDefault);
	this.m_InfoBox.AddRolloverBox(function() {
		instance.m_MouseOverInfo = true;
	},
	function() {
		instance.m_MouseOverInfo = false;

		if(null == instance.m_MouseOverPlanet && null != instance.m_SelectedPlanet)
		{
			instance.OnMouseOutPlanet(instance.m_SelectedPlanet);
		}
	});
	
	this.m_InfoBoxProgress = new CProgressBar(200);
	this.m_InfoBoxProgress.x = (this.m_InfoBox.GetWidth() - this.m_InfoBoxProgress.m_Width) * 0.5;
	this.m_InfoBoxProgress.y = 48;
	this.m_InfoBox.addChild(this.m_InfoBoxProgress);

	this.m_InfoBoxFlavorText = new PIXI.Text();
	this.m_InfoBoxFlavorText.style = k_TextStyleItalics;
	this.m_InfoBoxFlavorText.anchor.set(0.5, 0.0);
	this.m_InfoBoxFlavorText.x = (this.m_InfoBox.GetWidth() / 2);
	this.m_InfoBoxFlavorText.y = 32
	this.m_InfoBox.addChild(this.m_InfoBoxFlavorText);

	this.m_InfoBoxPlanetStatus = new PIXI.Text( 'Status:' );
	this.m_InfoBoxPlanetStatus.style = {
		fontFamily: k_FontType,
		fontSize: 14,
		fill: 'white',
		align: 'center',
	};
	this.m_InfoBoxPlanetStatus.anchor.set(0.0, 0.0);
	this.m_InfoBoxPlanetStatus.y = this.m_InfoBoxProgress.y - 20;
	this.m_InfoBox.addChild( this.m_InfoBoxPlanetStatus );

	this.m_InfoBoxPlanetStatusCurrent = new PIXI.Text( '' );
	this.m_InfoBoxPlanetStatusCurrent.style = {
		fontFamily: k_FontType,
		fontSize: 14,
		fill: 'white',
		align: 'left',
	};
	this.m_InfoBoxPlanetStatusCurrent.anchor.set(0.0, 0.0);
	this.m_InfoBoxPlanetStatusCurrent.y = this.m_InfoBoxPlanetStatus.y;
	this.m_InfoBox.addChild( this.m_InfoBoxPlanetStatusCurrent );

	var statusWidth = this.m_InfoBoxPlanetStatus.width + this.m_InfoBoxPlanetStatusCurrent.width + 8;
	this.m_InfoBoxPlanetStatus.x = (this.m_InfoBox.GetWidth() / 2) - (statusWidth / 2);
	this.m_InfoBoxPlanetStatusCurrent.x = this.m_InfoBoxPlanetStatus.x + this.m_InfoBoxPlanetStatus.width + 8;

	this.m_InfoBoxBattlingLabel = new PIXI.Text('Battling for a chance to win'.toUpperCase());
	this.m_InfoBoxBattlingLabel.style = k_TextStyleSmallBoldLeft;
	this.m_InfoBoxBattlingLabel.anchor.set(0,0);
	this.m_InfoBoxBattlingLabel.x = (this.m_InfoBox.GetWidth() / 2) - 99;
	this.m_InfoBoxBattlingLabel.y = 76;
	this.m_InfoBox.addChild(this.m_InfoBoxBattlingLabel);

	this.m_QueuedMouseOutPlanet = null;

	this.m_InfoBoxGameSprites = [];
	this.m_InfoBoxTeamSprites = [];

	this.m_DynamicLoader = new PIXI.loaders.Loader();
	this.m_DynamicLoader.on('complete', (loader, resources) =>
	{
		instance._RefreshInfoBoxGames(resources);
	});

	this.m_TeamIconIds = [];
	this.m_GameBannerIds = [];

	// button to customize the salien
	this.m_CustomizeButton = CreateCustomizeButton(220, 300);
	this.m_CustomizeButton.y = k_ScreenHeight - 340;
	gApp.stage.addChild(this.m_CustomizeButton);

	this.m_AudioIndicator = new PIXI.Sprite.fromImage( 'sound_toggle' );
	this.m_AudioIndicator.x = k_ScreenWidth - this.m_AudioIndicator.width - 10;
	this.m_AudioIndicator.y = k_ScreenHeight - this.m_AudioIndicator.height - 10;
	this.m_AudioIndicator.alpha = gAudioManager.m_Muted ? 0.3 : 1.0;
	this.m_AudioIndicator.interactive = true;
	this.m_AudioIndicator.buttonMode = true;
	this.m_AudioIndicator.pointertap = function() {
		gAudioManager.ToggleMute();
		this.alpha = gAudioManager.m_Muted ? 0.3 : 1.0;
	};
	gApp.stage.addChild( this.m_AudioIndicator );
};

CPlanetSelectionState.prototype.OnMouseOverPlanet = function(planet, planetId)
{
	this.m_MouseOverPlanet = planet;

	// bail if we're already over this guy (happens while it's animating sometimes)
	if(this.m_SelectedPlanet == planet)
	{
		return;
	}

	planet.vscale = 0.001;

	this.OnMouseOutPlanet(this.m_SelectedPlanet);
	this.m_SelectedPlanet = planet;

	// highlight it
	this.m_Cursor.x = planet.x - planet.width * 0.5;
	this.m_Cursor.y = planet.y - planet.height * 0.5;
	this.m_Cursor.SetSize(planet.width, planet.height);

	var box = this.m_InfoBox;

	var planetData = this.m_mapPlanets.get( planetId );
	box.SetTitleText( planetData.state.name.toUpperCase() );

	if ( planetData.state.captured )
	{
		this.m_InfoBox.SetSize( 244, 80 );
		this.m_InfoBox.RemoveRollOverBox();
		this.m_InfoBoxBattlingLabel.visible = false;
		this.m_InfoBoxPlanetStatusCurrent.text = 'Conquered';
	}
	else
	{
		var instance = this;
		this.m_InfoBox.AddRolloverBox(function() {
				instance.m_MouseOverInfo = true;
			},
			function() {
				instance.m_MouseOverInfo = false;

				if(null == instance.m_MouseOverPlanet && null != instance.m_SelectedPlanet)
				{
					instance.OnMouseOutPlanet(instance.m_SelectedPlanet);
				}
			});
		this.m_InfoBox.SetSize( 244, 180 );
		this.m_InfoBoxBattlingLabel.visible = true;
		this.m_InfoBoxPlanetStatusCurrent.text = 'Embattled';
		this.m_InfoBoxPlanetStatusCurrent.style = {
			fill: '#FDEE0B',
			fontFamily: k_FontType,
			fontSize: 14,
			align: 'center',
		};
	}

	const leftGutter = 300;

	// first see if the box would fit below (the default choice)
	if(planet.y + 8 + planet.height / 2 + box.m_Height < k_ScreenHeight)
	{
		box.x = planet.x - box.m_Width * 0.5;
		box.y = planet.y - 36 + planet.height * 0.5;

		box.SetTitleTailPosition(box.GetWidth() * 0.5);
	}
	else if(planet.x - planet.width / 2 > leftGutter)
	{
		// if the box doesn't fit below, put it on the left (unless it won't
		//  look great in the left gutter)
		box.x = planet.x - 4 - box.m_Width - planet.width * 0.5;
		box.y = Math.min(planet.y, k_ScreenHeight - box.m_Height);

		// move the tail to the right
		box.SetTitleTailPosition(box.GetWidth() + 2);
	}
	else
	{
		// just put it on the right
		box.x = planet.x + 4 + planet.width * 0.5;
		box.y = Math.min(planet.y, k_ScreenHeight - box.m_Height);

		box.SetTitleTailPosition(-2);
	}

	this.m_TeamIconIds = [];
	this.m_GameBannerIds = [];

	if ( !planetData.captured )
	{
		// LOAD all the dynamic images this info box uses!
		if ( planetData.giveaway_apps !== undefined )
		{
			for(var idx = 0; idx < planetData.giveaway_apps.length; idx++)
			{
				var appId = planetData.giveaway_apps[idx];
				this.m_GameBannerIds.push(appId);
			}
			this._RefreshInfoBoxGames();
		}
	}


	this.m_InfoBoxProgress.SetValue(planetData.state.capture_progress);

	// have to do some layout fixups since the box resizes based on the text passed in.
	this.m_InfoBoxProgress.x = (box.GetWidth() - this.m_InfoBoxProgress.m_Width) * 0.5;
	this.m_InfoBoxFlavorText.x = (this.m_InfoBox.GetWidth() / 2);
	var statusWidth = this.m_InfoBoxPlanetStatus.width + this.m_InfoBoxPlanetStatusCurrent.width + 8;
	this.m_InfoBoxPlanetStatus.x = (this.m_InfoBox.GetWidth() / 2) - (statusWidth / 2);
	this.m_InfoBoxPlanetStatusCurrent.x = this.m_InfoBoxPlanetStatus.x + this.m_InfoBoxPlanetStatus.width + 8;
};

CPlanetSelectionState.prototype._RefreshInfoBoxGames = function()
{
	var box = this.m_InfoBox;
	this.m_InfoBoxGameSprites.forEach( function ( sprite )
	{
		box.removeChild(sprite);
		sprite.destroy();
	});
	this.m_InfoBoxGameSprites = [];

	var gameBoxTopLeftX = (box.GetWidth() / 2) - k_GameBoxW - (k_GameBoxPadding / 2);
	var gameBoxTopLeftY = 92;

	// loop over all the apps
	for(var idx = 0; idx < this.m_GameBannerIds.length; idx++ )
	{
		var appId = this.m_GameBannerIds[idx];

		// retrieve our image
		var sprite = new PIXI.Sprite.fromImage('app_' + appId);
		sprite.width = k_GameBoxW;
		sprite.height = k_GameBoxH;
		sprite.interactive = true;
		sprite.buttonMode = true;
		sprite.pointertap = function() {
			window.open( 'https://store.steampowered.com/app/'+appId + '/?snr=1_saliens_4__salienapps', '_blank' );
		};
		box.addChild(sprite);
		this.m_InfoBoxGameSprites.push(sprite);

		sprite.x = gameBoxTopLeftX + ((idx % 2) * (k_GameBoxW + k_GameBoxPadding));
		sprite.y = gameBoxTopLeftY + (Math.floor(idx / 2) * (k_GameBoxH + k_GameBoxPadding));
	}

	this.m_InfoBoxBattlingLabel.x = gameBoxTopLeftX;
};


CPlanetSelectionState.prototype.OnMouseOutPlanet = function(planet)
{
	this.m_QueuedMouseOutPlanet = planet;
	if(this.m_MouseOverPlanet == planet)
	{
		this.m_MouseOverPlanet = null;
	}
};


CPlanetSelectionState.prototype.Shutdown = function()
{
	this.m_Cursor.destroy();
	this.m_Ship.destroy();
	this.m_Logo.destroy();
	this.m_LogoBG.destroy();
	this.m_CustomizeButton.destroy();
	this.m_InfoBox.destroy( true );
	
	gApp.stage.removeChild(this.background);
};

CPlanetSelectionState.prototype.Update = function(delta)
{
	this.m_Elapsed += delta;

	if(null != this.m_InfoBox)
	{
		this.m_InfoBox.Update(delta);

		if(null != this.m_SelectedPlanet && !this.m_ShowingInfo)
		{
			gApp.stage.addChild(this.m_InfoBox);
			gApp.stage.addChild(this.m_Cursor);
			this.m_ShowingInfo = true;
		}
		else if(null == this.m_SelectedPlanet && this.m_ShowingInfo)
		{
			gApp.stage.removeChild(this.m_InfoBox);
			gApp.stage.removeChild(this.m_Cursor);
			this.m_ShowingInfo = false;
		}
	}

	if(null != this.m_QueuedMouseOutPlanet)
	{
		var planet = this.m_QueuedMouseOutPlanet;
		this.m_QueuedMouseOutPlanet = null;

		// ignore this if the player is over the info box
		if(this.m_MouseOverInfo)
		{
			return;
		}

		if(planet == this.m_SelectedPlanet)
		{
			// highlight nothing now
			this.m_SelectedPlanet = null;
		}
	}

	// move the ship a little
	const xOffset = 3.0;
	const yOffset = 2.0;
	this.m_Ship.x = (Math.sin(this.m_Elapsed / 24.0) * xOffset) - xOffset;
	this.m_Ship.y = k_ScreenHeight - this.m_Ship.height - (Math.sin(this.m_Elapsed / 18.0) * yOffset) + yOffset;

	var selectedPlanet = this.m_SelectedPlanet;
	this.m_rgPlanetSprites.forEach( function ( planet )
	{
		if(planet != selectedPlanet)
		{
			planet.vscale = 0;
		}

		if ( planet.scale.x <= planet.minscale || planet.scale.x >= planet.maxscale )
		{
			planet.vscale = -planet.vscale;
		}
		planet.scale.set( planet.scale.x + planet.vscale, planet.scale.y );
	});
};


//////////////////////////////////////////////////////////
// Battle Selection State - player selects which battle
//  to begin on a grid
function CBattleSelectionState( planetid )
{
	CGameState.call(this);
	this.m_unPlanetID = planetid;
}
CBattleSelectionState.prototype = Object.create(CGameState.prototype);
CBattleSelectionState.prototype.Load = function()
{
	var instance = this;

	gServer.GetPlanet( this.m_unPlanetID, function (results ) {
			instance.m_PlanetData = results.response.planets[0];
			LoadAsset( 'planet_select_bg', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/planet_select_bg.jpg' );
			LoadAsset( 'galaxy_music', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/sfx/SS2018_Saliens_Planet.{ogg,mp3}' );
			LoadAsset( 'ship', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/ship.png');
			LoadAsset( 'ship_flag', 'https://steamcommunity-a.akamaihd.net/public/images/saliengame/ship_flag.png');						
			LoadAsset( 'grid_tile_boss', 'https://steamcommunity-a.akamaihd.net/public/images/saliengame/grid_tile_boss.png' );
			LoadAsset( 'grid_tile_complete', 'https://steamcommunity-a.akamaihd.net/public/images/saliengame/grid_tile_complete.png' );
			LoadAsset( 'map_bg_' + instance.m_PlanetData.id, 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/maps/' + instance.m_PlanetData.state.map_filename );
			LoadAsset( 'galaxy_music', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/sfx/SS2018_Saliens_Planet.{ogg,mp3}' );
			LoadAsset( 'ui_select_backwards', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/sfx/ui_select_backwards_deny.{ogg,mp3}' );
			LoadAsset( 'easy_difficulty', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/low.png' );
			LoadAsset( 'medium_difficulty', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/medium.png' );
			LoadAsset( 'hard_difficulty', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/high.png' );
			LoadAsset( 'boss_difficulty', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/boss.png' );

			if ( gPlayerInfo.clan_info !== undefined )
			{
				LoadAsset( 'clanavatar_' + gPlayerInfo.clan_info.accountid, 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/' + '/' + gPlayerInfo.clan_info.avatar.substr( 0, 2 ) + '/' + gPlayerInfo.clan_info.avatar + '.jpg' );
			}

			instance.m_PlanetData.zones.forEach( function ( zone ) {
				if ( zone.leader !== undefined )
				{
					LoadAsset( 'clanavatar_' + zone.leader.accountid, 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/' + '/' + zone.leader.avatar.substr( 0, 2 ) + '/' + zone.leader.avatar + '.jpg' );
				}

				if ( zone.top_clans !== undefined )
				{
					zone.top_clans.forEach( function( clan ) {
						LoadAsset( 'clanavatar_' + clan.accountid, 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/' + '/' + clan.avatar.substr( 0, 2 ) + '/' + clan.avatar + '.jpg' );
					} );
				}
			});

			instance.m_PlanetData.giveaway_apps.forEach( function( appid ) {
				LoadAsset( 'app_' + appid, 'https://steamcdn-a.akamaihd.net/steam/apps/' + appid + '/capsule_sm_120.jpg' );
			});

			gLoader.load();
		},
		GameLoadError
	);

};
CBattleSelectionState.prototype.OnLoadComplete = function(loader, resources)
{
	//console.log("CBattleSelectionState::OnLoadComplete()");

	if(null == gSalien)
	{
		gSalien = new CSalien(resources);
	}

	var instance = this;
	this.m_Background = new PIXI.Sprite.fromImage( 'planet_select_bg' );
	this.m_Background.width = gApp.screen.width;
	this.m_Background.height = gApp.screen.height;
	
	this.m_GridContainer = new PIXI.Container();
	this.m_GridContainer.x = 408;
	this.m_GridContainer.y = 102;
	
	const gridBgHeight = 648;
	this.m_GridBox = new CUIBox(854, gridBgHeight);
	this.m_GridBox.SetTitleHeight(44);
	var titleStyle = jQuery.extend({}, k_TextStyleBold);
	titleStyle.fontSize = 20;
	this.m_GridBox.SetTitleStyle(titleStyle);
	this.m_GridBox.SetTitleText( this.m_PlanetData.state.name.toUpperCase() );
	this.m_GridBox.x = -24;
	this.m_GridBox.y = -64;	
	this.m_GridContainer.addChild(this.m_GridBox);	

	this.m_MapImage = new PIXI.Sprite.fromImage( 'map_bg_' + instance.m_PlanetData.id );
	this.m_GridContainer.addChild(this.m_MapImage);	

	this.m_bJoiningPlanet = false;

	// initialize a grid the user can click on
	this.m_Grid = new CBattleSelect(resources, this.m_GridContainer);
	this.m_Grid.click = function(tileX, tileY)
	{
		if ( instance.m_bJoiningPlanet )
		{
			return;
		}

		var unPlanetID = instance.m_unPlanetID;
		var zoneIdx = _GetTileIdx( tileX, tileY );

		if ( instance.m_PlanetData.zones[zoneIdx].captured )
		{
			ZoneCaptured();
			return;
		}

		instance.m_bJoiningPlanet = true;

		gServer.JoinZone(
			zoneIdx,
			function ( results ) {
				gGame.ChangeState( new CBattleState( instance.m_PlanetData, zoneIdx ) );
				instance.m_bJoiningPlanet = false;
			},
			function ( error, eResult ) {
				if ( eResult !== undefined )
				{
					if ( eResult == 27 )
					{
						instance.m_bJoiningPlanet = false;
						ZoneCaptured();
						gGame.ChangeState( new CBattleSelectionState( instance.m_PlanetData.id ) );
					}
					else
					{
						instance.m_bJoiningPlanet = false;
						GameLoadError();
					}
				}
				else
				{
					instance.m_bJoiningPlanet = false;
					GameLoadError();
				}
			}
		);
	};

	this.m_RewardsContainer = new PIXI.Container();
	this.m_RewardsContainer.x = 256;
	this.m_RewardsContainer.y = this.m_GridBox.y + gridBgHeight - 55;

	this.m_PossibleRewardsLabel = new PIXI.Text('Possible rewards:'.toUpperCase());
	this.m_PossibleRewardsLabel.style = {
		fontFamily: k_FontType,
		fontSize: 12,
		fill: "white",
		fontWeight: 'bold',
		align: 'center',
	};
	this.m_PossibleRewardsLabel.anchor.set( 0.5, 0.5 );
	this.m_RewardsContainer.addChild(this.m_PossibleRewardsLabel);

	// show our game rewards
	for(var idx = 0; idx < this.m_PlanetData.giveaway_apps.length; idx++)
	{
		const boxScale = 0.80;

		var appId = this.m_PlanetData.giveaway_apps[idx];
		var sprite = new PIXI.Sprite.fromImage('app_' + appId);
		sprite.x = idx * (k_GameBoxW * boxScale + k_GameBoxPadding);
		sprite.y = 12;
		sprite.width = k_GameBoxW * boxScale;
		sprite.height = k_GameBoxH * boxScale;
		sprite.interactive = true;
		sprite.buttonMode = true;
		sprite.appid = appId;
		sprite.pointertap = function() {
			window.open( 'https://store.steampowered.com/app/'+this.appid + '/?snr=1_saliens_4__salienapps', '_blank' );
		};
		this.m_RewardsContainer.addChild(sprite);
	}

	this.m_GridContainer.addChild(this.m_RewardsContainer);

	this.m_PossibleRewardsLabel.x = ( this.m_RewardsContainer.width / 2 ) - 40;

	this.m_RewardCountdown = new PIXI.Text( '' );
	this.m_RewardCountdown.style = {
		fontFamily: k_FontType,
		fontSize: 14,
		fill: "white",
		fontWeight: 'bolder',
		align: 'center',
	};
	this.m_RewardCountdown.anchor.set( 0.5, 0.5 );
	this.m_RewardCountdown.x = this.m_PossibleRewardsLabel.x;
	this.m_RewardCountdown.y = this.m_PossibleRewardsLabel.y  - 18;
	this.m_RewardsContainer.addChild( this.m_RewardCountdown );

	if ( !this.m_PlanetData.state.captured )
	{
		this.m_rtPlanetCountUp = 0;
		gServer.GetPlayerInfo( function(results){
				gPlayerInfo = results.response;
				instance.m_rtPlanetCountUp = Date.now();
				var nSecondsOnPlanet = gPlayerInfo.time_on_planet;
				var strTime = PadZerosLeft( Math.floor( nSecondsOnPlanet / 3600 ), 2 ) + ':' + PadZerosLeft( Math.floor( ( nSecondsOnPlanet % 3600 ) / 60 ), 2 ) + ':' + PadZerosLeft( nSecondsOnPlanet % 60, 2 );
				instance.m_RewardCountdown.text = 'Time Spent On Planet: '.toUpperCase() + strTime;
			},
			function() {}
		);
	}
	else
	{
		this.m_RewardCountdown.text = 'Recently Conquered by the Steam Community'.toUpperCase();
	}


	// add button
	this.m_LeaveButton = new CUIButton( 134, 34, 'Leave Planet'.toUpperCase() );
	this.m_LeaveButton.x = 0;
	this.m_LeaveButton.y = this.m_GridBox.y + gridBgHeight - 55;
	this.m_LeaveButton.click = function(btn) {
		gAudioManager.PlaySound( 'ui_select_backwards' );
		gServer.LeaveGameInstance(
			instance.m_PlanetData.id,
			function() {
				gGame.ChangeState( new CPlanetSelectionState() );
			}
		);
	};		
	this.m_GridContainer.addChild(this.m_LeaveButton);

	var nEasy = 0;
	var nMedium = 0;
	var nHard = 0;
	//var nBoss = 0;
	this.m_PlanetData.zones.forEach( function( zone ) {
		if ( zone.captured )
			return;

		if ( zone.difficulty == 1 )
			++nEasy;
		else if ( zone.difficulty == 2 )
			++nMedium;
		else if ( zone.difficulty == 3 )
			++nHard;
	});

	this.m_ZonesRemainingBox = new PIXI.Container();
	this.m_ZonesRemainingBox.x = 660;
	this.m_ZonesRemainingBox.y = 524;
	this.m_GridContainer.addChild(this.m_ZonesRemainingBox);

	this.m_EnemiesRemainingText = new PIXI.Text( 'Enemy Tiles Remaining:'.toUpperCase() );
	this.m_EnemiesRemainingText.style = {
		fontFamily: k_FontType,
		fontSize: 10,
		fill: "white",
		fontWeight: 'bold',
		align: 'left',
	};
	this.m_EnemiesRemainingText.y = -16;
	this.m_EnemiesRemainingText.x = -20;
	this.m_ZonesRemainingBox.addChild(this.m_EnemiesRemainingText);

	this.m_EasySprite = new PIXI.Sprite.fromImage( 'easy_difficulty' );
	this.m_EasySprite.scale.set( 0.1, 0.1 );
	this.m_EasyText = new PIXI.Text( 'x' + nEasy );
	this.m_EasyText.x = this.m_EasySprite.x + this.m_EasySprite.width / 2;
	this.m_EasyText.y = this.m_EasySprite.height;
	this.m_EasyText.style = k_TextStyleZoneRemaining;
	this.m_ZonesRemainingBox.addChild( this.m_EasyText );
	this.m_ZonesRemainingBox.addChild( this.m_EasySprite );

	this.m_MediumSprite = new PIXI.Sprite.fromImage( 'medium_difficulty' );
	this.m_MediumSprite.scale.set( 0.1, 0.1 );
	this.m_MediumSprite.x = this.m_EasySprite.x + this.m_EasySprite.width + k_GameBoxPadding;
	this.m_MediumText = new PIXI.Text( 'x' + nMedium );
	this.m_MediumText.x = this.m_MediumSprite.x + this.m_MediumSprite.width / 2;
	this.m_MediumText.y = this.m_MediumSprite.height;
	this.m_MediumText.style = k_TextStyleZoneRemaining;
	this.m_ZonesRemainingBox.addChild( this.m_MediumText );
	this.m_ZonesRemainingBox.addChild( this.m_MediumSprite );

	this.m_HardSprite = new PIXI.Sprite.fromImage( 'hard_difficulty' );
	this.m_HardSprite.scale.set( 0.1, 0.1 );
	this.m_HardSprite.x = this.m_MediumSprite.x + this.m_MediumSprite.width + k_GameBoxPadding;
	this.m_HardText = new PIXI.Text( 'x' + nHard );
	this.m_HardText.x = this.m_HardSprite.x + this.m_HardSprite.width / 2;
	this.m_HardText.y = this.m_HardSprite.height;
	this.m_HardText.style = k_TextStyleZoneRemaining;
	this.m_ZonesRemainingBox.addChild( this.m_HardText );
	this.m_ZonesRemainingBox.addChild( this.m_HardSprite );

	for ( var i = 0; i < k_NumMapTilesW; ++i )
	{
		for ( var j = 0; j < k_NumMapTilesH; ++j )
		{
			var idx = _GetTileIdx( i, j );
			var zone = this.m_PlanetData.zones[idx];
			
			var bBoss = false;
			if ( zone.type == 4  )
			{
				bBoss = true;
			}
			var bCaptured = false;
			if ( zone.captured !== undefined  && zone.captured == true )
			{
				bCaptured = true;
			}

			var difficulty = zone.difficulty;

			var clanavatar = null;
			var clanurl = null;
			if ( zone.leader !== undefined )
			{
				clanurl = zone.leader.url;
				clanavatar = 'clanavatar_' + zone.leader.accountid;
			}

			var progress = 0.0;
			if ( zone.capture_progress !== undefined )
			{
				progress = zone.capture_progress;
			}

			var clans = [];
			if ( zone.top_clans !== undefined )
			{
				clans = zone.top_clans;
			}

			var params = {
				boss : bBoss,
				captured : bCaptured,
				difficulty :  difficulty,
				clanurl : clanurl,
				clanavatar : clanavatar,
				progress:progress,
				clans:clans
			};

			this.m_Grid.SetTile( i, j, params );
		}
	}
	
	this.m_MapImage.width = this.m_Grid.width;
	this.m_MapImage.height = this.m_Grid.height;		
	
	
	gApp.stage.addChild( this.m_Background );		 
	
	this.m_LogoBG = new PIXI.Sprite.fromImage( 'logo_bg' );
	gApp.stage.addChild(this.m_LogoBG);
	this.m_Logo = new PIXI.Sprite.fromImage( 'logo' );
	this.m_Logo.x = 33;
	this.m_Logo.y = 17;
	gApp.stage.addChild(this.m_Logo);
	
	this.m_Elapsed = 0;
	this.m_Ship = new PIXI.Sprite.fromImage( 'ship' );
	this.m_Ship.x = -8;
	this.m_Ship.y = k_ScreenHeight - this.m_Ship.height + 20;
	gApp.stage.addChild(this.m_Ship);
	this.m_ShipFlag = new PIXI.Sprite.fromImage( 'ship_flag' );
	this.m_ShipFlag.x = 84;
	this.m_ShipFlag.y = 2;
	this.m_ShipFlag.interactive = true;
	this.m_ShipFlag.buttonMode = true;
	this.m_ShipFlag.pointertap = function() {
		ShowRepresentGroupDialog( function( groupid, strAvatarHash ) {
			gPlayerInfo.clan_info = {};
			gPlayerInfo.clan_info.accountid = groupid;
			gPlayerInfo.clan_info.avatar = strAvatarHash;
			gGame.ChangeState( new CBattleSelectionState( instance.m_unPlanetID ) );
		} );
	};
	this.m_Ship.addChild(this.m_ShipFlag);

	if ( gPlayerInfo.clan_info !== undefined )
	{
		this.m_ShipFlagClan = new PIXI.Sprite.fromImage( 'clanavatar_' + gPlayerInfo.clan_info.accountid );
		this.m_ShipFlagClan.x = this.m_ShipFlag.x + 32;
		this.m_ShipFlagClan.y = this.m_ShipFlag.y + 12;
		this.m_Ship.addChild(this.m_ShipFlagClan);
	}
	else if ( WebStorage.GetLocal('minigame_joingroupprompt') <= 3 )
	{
		if ( WebStorage.GetLocal('minigame_joingroupprompt') !== null )
		{
			WebStorage.SetLocal( 'minigame_joingroupprompt', WebStorage.GetLocal('minigame_joingroupprompt') + 1 );
		}
		else
		{
			WebStorage.SetLocal( 'minigame_joingroupprompt', 1 );
		}

		this.m_JoinGroupText = new PIXI.Text( '< Choose a group!' );
		this.m_JoinGroupText.anchor.set( 0, 0.5 );
		this.m_JoinGroupText.x = this.m_ShipFlag.x + this.m_ShipFlag.width;
		this.m_JoinGroupText.y = this.m_ShipFlag.y + ( this.m_ShipFlag.height / 2 ) - 10;
		this.m_JoinGroupText.style = {
			fontFamily: k_FontType,
			fontSize: 14,
			fill: 'white',
			align: 'center',
		};
		this.m_Ship.addChild(this.m_JoinGroupText);
	}

	// add the salien to the top
	gSalien.position.set(98, 386);
	gSalien.scale.set(0.13, 0.13);
	this.m_Ship.addChild(gSalien);	

	// our info!
	this.m_SalienInfoBox = new CSalienInfoBox();
	this.m_SalienInfoBox.x = 12;
	this.m_SalienInfoBox.y = k_ScreenHeight - 72;
	gApp.stage.addChild(this.m_SalienInfoBox);
	
	gApp.stage.addChild( this.m_GridContainer );      	
	
	// button to customize the salien
	this.m_CustomizeButton = CreateCustomizeButton(220, 300);
	this.m_CustomizeButton.y = k_ScreenHeight - 320;
	gApp.stage.addChild(this.m_CustomizeButton);		
	
	gAudioManager.PlayMusic( 'galaxy_music', true );

	this.m_AudioIndicator = new PIXI.Sprite.fromImage( 'sound_toggle' );
	this.m_AudioIndicator.x = k_ScreenWidth - this.m_AudioIndicator.width - 10;
	this.m_AudioIndicator.y = k_ScreenHeight - this.m_AudioIndicator.height - 10;
	this.m_AudioIndicator.alpha = gAudioManager.m_Muted ? 0.3 : 1.0;
	this.m_AudioIndicator.interactive = true;
	this.m_AudioIndicator.buttonMode = true;
	this.m_AudioIndicator.pointertap = function() {
		gAudioManager.ToggleMute();
		this.alpha = gAudioManager.m_Muted ? 0.3 : 1.0;
	};
	gApp.stage.addChild( this.m_AudioIndicator );
};
CBattleSelectionState.prototype.Update = function(delta)
{
	this.m_Grid.Update(delta);
	
	this.m_Elapsed += delta;

	if ( this.m_rtPlanetCountUp != 0 && !this.m_PlanetData.state.captured )
	{
		var additionalTime = Math.floor( ( Date.now() - this.m_rtPlanetCountUp ) / 1000 );
		var nSecondsOnPlanet = gPlayerInfo.time_on_planet + additionalTime;
		var strTime = PadZerosLeft( Math.floor( nSecondsOnPlanet / 3600 ), 2 ) + ':' + PadZerosLeft( Math.floor( ( nSecondsOnPlanet % 3600 ) / 60 ), 2 ) + ':' + PadZerosLeft( nSecondsOnPlanet % 60, 2 );
		this.m_RewardCountdown.text = 'Time Spent On Planet: '.toUpperCase() + strTime;
	}

	// move the ship a little
	const xOffset = 3.0;
	const yOffset = 2.0;
	this.m_Ship.x = -8 + (Math.sin(this.m_Elapsed / 24.0) * xOffset) - xOffset;
	this.m_Ship.y = k_ScreenHeight - this.m_Ship.height + 20 - (Math.sin(this.m_Elapsed / 18.0) * yOffset) + yOffset;	
};
CBattleSelectionState.prototype.Shutdown = function()
{
	gApp.stage.removeChild(this.m_Background);
	this.m_Background.destroy();
	
	gApp.stage.removeChild(this.m_GridContainer);
	this.m_GridContainer.destroy();
	this.m_Grid.destroy();
	this.m_GridBox.destroy();
	this.m_CustomizeButton.destroy();
	
	this.m_LeaveButton.destroy();
	this.m_Ship.destroy();
	this.m_Logo.destroy();
	this.m_LogoBG.destroy();

	this.m_RewardsContainer.destroy();
	this.m_ZonesRemainingBox.destroy();
};

//////////////////////////////////////////////////////////
// Battle State - fight waves of dudes
function CBattleState( planetData, zoneidx )
{
	this.m_curID = 1;
	CGameState.call(this);
	this.m_PlanetData = planetData;
	this.m_unZoneIndex = zoneidx;
	this.m_ShipDestination = { x: 200, y:100 };
	this.m_SalienDestination = { x: 0, y: 520 };
}
CBattleState.prototype = Object.create(CGameState.prototype);
CBattleState.prototype.Load = function()
{
	var instance = this;
	LoadAsset( 'attack_config', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets//saliengame/attacks.json', '7' );
	LoadAsset( 'enemy_config', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets//saliengame/enemies.json', '7' );
	LoadAsset( 'level_config', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets//saliengame/levels.json', '9' );
	LoadAsset( 'enemy-spritesheet-0', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/enemy-spritesheet-0.json' );
	LoadAsset( 'enemy-spritesheet-1', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/enemy-spritesheet-1.json' );
	LoadAsset( 'enemy-spritesheet-2', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/enemy-spritesheet-2.json' );
	LoadAsset( 'explosion-sprite', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/explosion.json' );
	LoadAsset( 'laser-sprite', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/laser-sprite.json' );
	LoadAsset( 'enemy-death', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/enemy-death.json' );
	LoadAsset( 'slime-attack', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/slime-attack.json' );
	LoadAsset( 'beast-attack', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/beast-attack.json' );
	LoadAsset( 'psychic-attack', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/psychic-attack.json' );
	LoadAsset( 'battle_music', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/sfx/SS2018_Saliens_Battle5.{ogg,mp3}' );
	LoadAsset( 'boulder', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/boulder.png' );
	LoadAsset( 'blackhole', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/blackhole.png' );
	LoadAsset( 'bomb', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/space-bomb2.png' );
	LoadAsset( 'flash_freeze', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/iced_enemy.png' );
	LoadAsset( 'stinger_win', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/sfx/stinger_win.{ogg,mp3}' );
	LoadAsset( 'boulder_land', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/sfx/boulder_land.{ogg,mp3}' );
	LoadAsset( 'boulder_roll', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/sfx/boulder_roll.{ogg,mp3}' );
	LoadAsset( 'bomb_explode', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/sfx/bomb_explode.{ogg,mp3}' );
	LoadAsset( 'slime_sound', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/sfx/attack_green.{ogg,mp3}' );
	LoadAsset( 'beast_sound', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/sfx/attack_red.{ogg,mp3}' );
	LoadAsset( 'psychic_sound', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/sfx/attack_purple.{ogg,mp3}' );
	LoadAsset( 'blackhole_sound', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/sfx/blackhole.{ogg,mp3}' );
	LoadAsset( 'freeze_sound', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/sfx/freeze_start.{ogg,mp3}' );
	LoadAsset( 'ship_sound', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/sfx/ship_entry.{ogg,mp3}' );
	LoadAsset( 'beam_down', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/sfx/beam_down.{ogg,mp3}' );
	LoadAsset( 'ship_full', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/salien_ship_full2.png' );
	LoadAsset( 'keyboard1', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/keyboard1.png' );
	LoadAsset( 'keyboard2', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/keyboard2.png' );
	LoadAsset( 'keyboard3', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/keyboard3.png' );
	LoadAsset( 'keyboard4', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/keyboard4.png' );
	LoadAsset( 'keyboard5', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/keyboard5.png' );
	LoadAsset( 'slime_ability', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/slime_ability.png' );
	LoadAsset( 'beast_ability', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/beast_ability.png' );
	LoadAsset( 'psychic_ability', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/psychic_ability.png' );
	LoadAsset( 'impact_sound', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/sfx/box_metal_impact.{ogg,mp3}' );
	LoadAsset( 'laser_shoot', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/sfx/weapon_laser_shoot.{ogg,mp3}' );
	LoadAsset( 'laser_impact', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/sfx/weapon_laser_impact.{ogg,mp3}' );
	LoadAsset( 'lvlonedeath', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/sfx/lvlonedeath.{ogg,mp3}' );
	LoadAsset( 'lvltwodeath', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/sfx/lvltwodeath.{ogg,mp3}' );
	LoadAsset( 'lvlthreedeath', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/sfx/lvlthreedeath.{ogg,mp3}' );
	LoadAsset( 'cables', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/cables.png' );
	LoadAsset( 'satellite', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/satellite.png' );
	LoadAsset( 'station', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/station.png' );
	LoadAsset( 'turret', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/turret.png' );
	LoadAsset( 'turret_obscuring', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/turret_obscuring.png' );
	LoadAsset( 'barrel', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/barrel_small.png' );
	LoadAsset( 'battle_background_' + this.m_PlanetData.id, 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/backgrounds/' + this.m_PlanetData.state.land_filename );
	LoadAsset( 'beam', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/beam.json' );
	LoadAsset( 'lock', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/lock.png' );
	this.m_PlanetData.giveaway_apps.forEach( function( appid ) {
		LoadAsset( 'app_' + appid, 'https://steamcdn-a.akamaihd.net/steam/apps/' + appid + '/capsule_sm_120.jpg' );
	});
	gLoader.load();
};

CBattleState.prototype.OnLoadComplete = function(loader, resources)
{
	var instance = this;
	//console.log("CBattleState::OnLoadComplete()");

	gAudioManager.FadeMusic();

	this.m_Score = 0;
	this.m_ScoreAccrual = 0;
	this.m_ScoreIncrements = 5;

	this.m_PlayerHealth = gPlayerInfo.level * 10;
	this.m_PlayerMaxHealth = this.m_PlayerHealth;
	this.m_HealthBar = null;
	this.m_rtDefensesRepaired = 0;
	this.m_rgPointsHolder = [];

	// build background
	this.m_background = new PIXI.Sprite.fromImage( 'battle_background_' + this.m_PlanetData.id );
	this.m_background.width = gApp.screen.width;
	this.m_background.height = gApp.screen.height;
	gApp.stage.addChild( this.m_background );

	this.m_bStarting = true;
	this.m_bBuilding = false;


	// salien defenses
	this.m_BaseContainer = new PIXI.Container();
	this.m_cableSprite = new PIXI.Sprite.fromImage( 'cables' );
	this.m_cableSprite.visible = false;
	this.m_BaseContainer.addChild( this.m_cableSprite );
	this.m_satelliteSprite = new PIXI.Sprite.fromImage( 'satellite' );
	this.m_satelliteSprite.visible = false;
	this.m_BaseContainer.addChild( this.m_satelliteSprite );
	this.m_stationSprite = new PIXI.Sprite.fromImage( 'station' );
	this.m_stationSprite.visible = false;
	this.m_BaseContainer.addChild( this.m_stationSprite );
	this.m_turretSprite = new PIXI.Sprite.fromImage( 'turret' );
	this.m_turretSprite.visible = false;
	this.m_BaseContainer.addChild( this.m_turretSprite );
	this.m_barrelSprite = new PIXI.Sprite.fromImage( 'barrel' );
	this.m_barrelSprite.visible = false;
	this.m_BaseContainer.addChild( this.m_barrelSprite );
	this.m_obscuringTurretSprite = new PIXI.Sprite.fromImage( 'turret_obscuring' );
	this.m_obscuringTurretSprite.visible = false;
	this.m_BaseContainer.addChild( this.m_obscuringTurretSprite );
	this.m_BaseContainer.y = k_ScreenHeight - this.m_BaseContainer.height;
	gApp.stage.addChild( this.m_BaseContainer );

	this.m_barrelSprite.anchor.set( 0.0, 0.5  );
	this.m_barrelSprite.x = 230;
	this.m_barrelSprite.y = 175;

	this.m_rgBeamFrames = [];
	for ( i = 1; i < 4; ++i )
	{
		this.m_rgBeamFrames.push( PIXI.Texture.fromFrame( 'beam_fr' + i + '.png' ) );
	}

	this.m_Ship = new PIXI.Sprite.fromImage( 'ship_full' );
	this.m_Ship.scale.set( 0.8, 0.8 );
	this.m_Ship.anchor.set( 0.5, 0.5 );
	this.m_Ship.x = this.m_ShipDestination.x;
	this.m_Ship.y = -this.m_Ship.height;
	this.m_Ship.vy = 2.55;
	this.m_Ship.elapsed = 0;
	this.m_Ship.ascending = false;

	gSalien.x = 124;
	gSalien.y = this.m_Ship.y + this.m_Ship.height / 2;
	gSalien.scale.set(0.08, 0.08);
	gSalien.vy = 2;
	gSalien.visible = false;
	gApp.stage.addChild(gSalien);

	this.m_BeamSprite = new PIXI.extras.AnimatedSprite( this.m_rgBeamFrames );
	this.m_BeamSprite.play();
	this.m_BeamSprite.loop = true;
	this.m_BeamSprite.animationSpeed = 0.25;
	this.m_BeamSprite.visible = false;
	this.m_BeamSprite.x = 0;
	gApp.stage.addChild( this.m_BeamSprite );

	// add ship after salien so its on top
	gApp.stage.addChild( this.m_Ship );
	gAudioManager.PlaySound( 'ship_sound', true );

	// build UI

	//Css style for icons
	var defaultIcon = "url('https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/reticle_blue.png') 16 16, auto";
	var hoverIcon = "url('https://steamcdn-a.akamaihd.net/steamcommunity/public/assets/saliengame/reticle.png') 16 16, auto";
	gApp.renderer.plugins.interaction.cursorStyles.default = defaultIcon;
	gApp.renderer.plugins.interaction.cursorStyles.pointer = hoverIcon;
	gApp.renderer.plugins.interaction.update(0.01);


	// score bar
	this.m_MenuBar = new PIXI.Graphics();
	this.m_MenuBar.beginFill(0x000000, 0.9);
	this.m_MenuBar.drawRect(0, 0, gApp.screen.width, 35);
	this.m_MenuBar.endFill();
	this.m_MenuBar.x = 0;
	this.m_MenuBar.y = 0;
	this.m_MenuBar.cacheAsBitmap = true;
	gApp.stage.addChild( this.m_MenuBar );

	this.m_ScoreCounter = new PIXI.Text( 'Enemies Defeated: ' + '0' );
	this.m_ScoreCounter.anchor.set( 0.5, 0.5 );
	this.m_ScoreCounter.x = 90;
	this.m_ScoreCounter.y = this.m_MenuBar.height / 2;
	this.m_ScoreCounter.style = {
		fontFamily: k_FontType,
		fontSize: 12,
		fill: 'white',
		align: 'center',
	};
	gApp.stage.addChild( this.m_ScoreCounter );

	this.m_MenuTitle = new PIXI.Text( this.m_PlanetData.state.name.toUpperCase() );
	this.m_MenuTitle.anchor.set( 0.5, 0.5 );
	this.m_MenuTitle.x = this.m_MenuBar.width / 2;
	this.m_MenuTitle.y = this.m_MenuBar.height / 2;
	this.m_MenuTitle.style = {
		fontFamily: k_FontType,
		fontSize: 24,
		fill: "white",
		align: 'center',
	};
	this.m_MenuBar.addChild( this.m_MenuTitle );

	this.m_TotalScore = new PIXI.Graphics();
	this.m_TotalScore.beginFill(0x000000, 0.8);
	this.m_TotalScore.drawRect(0, 0, 160, 45);
	this.m_TotalScore.endFill();
	this.m_TotalScore.x = ( k_ScreenWidth / 2 ) - 80;
	this.m_TotalScore.y = this.m_MenuBar.height;
	gApp.stage.addChild( this.m_TotalScore );

	this.m_TotalScoreText = new PIXI.Text( 'Score: 0' );
	this.m_TotalScoreText.anchor.set( 0.5, 0.5 );
	this.m_TotalScoreText.x = k_ScreenWidth / 2;
	this.m_TotalScoreText.y = this.m_MenuBar.height + this.m_TotalScore.height / 2;
	this.m_TotalScoreText.style = {
		fontSize: 24,
		fill:"white",
		fontWeight:'bold',
		fontFamily:k_FontType
	};
	gApp.stage.addChild( this.m_TotalScoreText );

	// timer ui
	this.m_TimerMenu = new PIXI.Graphics();
	this.m_TimerMenu.beginFill(0x000000, 0.8);
	this.m_TimerMenu.drawRect(0, 0, 160, 45);
	this.m_TimerMenu.endFill();
	this.m_TimerMenu.x = gApp.screen.width - this.m_TimerMenu.width;
	this.m_TimerMenu.y = this.m_MenuBar.height;
	gApp.stage.addChild( this.m_TimerMenu );

	this.m_Timer = new PIXI.Text( '' );
	this.m_Timer.anchor.set( 0.5, 0.5 );
	this.m_Timer.x = gApp.screen.width - ( this.m_TimerMenu.width / 2 );
	this.m_Timer.y = this.m_TimerMenu.y + ( this.m_TimerMenu.height / 2 );
	this.m_Timer.style= {
		fontSize: 36,
		fill:"white",
		fontWeight:'bold',
		fontFamily:k_FontType
	};
	gApp.stage.addChild( this.m_Timer );

	this.m_TimeRemainingText = new PIXI.Text( 'Time Remaining'.toUpperCase() );
	this.m_TimeRemainingText.anchor.set( 0.5, 0.5 );
	this.m_TimeRemainingText.x = gApp.screen.width - ( this.m_TimerMenu.width / 2 );
	this.m_TimeRemainingText.y = this.m_MenuBar.height / 2;
	this.m_TimeRemainingText.style = {
		fontFamily: k_FontType,
		fontSize: 12,
		fill: 'white',
		align: 'center',
	};
	this.m_MenuBar.addChild( this.m_TimeRemainingText );

	this.m_RespawnTimer = new PIXI.Text( '' );
	this.m_RespawnTimer.anchor.set( 0.5, 0.5 );
	this.m_RespawnTimer.x = gApp.screen.width / 2;
	this.m_RespawnTimer.y = 200;
	this.m_RespawnTimer.style= {
		fontSize: 36,
		fill:"white",
		fontWeight:'bold',
		fontFamily:k_FontType
	};
	this.m_RespawnTimer.visible = false;
	gApp.stage.addChild( this.m_RespawnTimer );

	// handlers for laser beams
	this.m_rgLaserBeamFrames = [];
	for ( var i = 1; i < 4; i++) {
		this.m_rgLaserBeamFrames.push( PIXI.Texture.fromFrame( 'laserpath' + i + '.png' ) );
	}

	this.m_rgLaserHitFrames = [];
	for ( i = 1; i < 4; i++) {
		this.m_rgLaserHitFrames.push( PIXI.Texture.fromFrame( 'laserhit' + i + '.png' ) );
	}

	gApp.stage.pointertap = this.FireLaser.bind(this);
};
CBattleState.prototype.Update = function(delta)
{
	if ( this.m_bStarting )
	{
		this.HandleStart( delta );
	}

	var now = Date.now();

	if ( this.m_bRunning )
	{
		// repair defenses
		if ( this.m_rtDefensesRepaired != 0 && this.m_rtDefensesRepaired < Date.now() )
		{
			this.m_BaseContainer.alpha = 1;
			this.m_BaseContainer.filters = null;
			this.m_EnemyManager.SetInteractive( true );
			this.m_rtDefensesRepaired = 0;
			this.m_rtPlayerInvulnerable = Date.now() + 2 * 1000;
			this.m_PlayerHealth = this.m_PlayerMaxHealth;
			if ( this.m_HealthBar !== null )
			{
				this.m_HealthBar.destroy( true );
				this.m_HealthBar = null;
			}
			this.m_RespawnTimer.visible = false;
			this.m_rtScoreAccrual = now;

			gSalien.PlayAnim("greet", false, 1);
			gAudioManager.PlaySound( 'impact_sound', false );
		}
		else if ( this.m_rtDefensesRepaired )
		{
			this.m_RespawnTimer.visible = true;
			this.m_RespawnTimer.text = 'Station Repaired In ' + Math.floor( ( this.m_rtDefensesRepaired - Date.now() ) / 1000 );
		}

		if ( this.m_rtDefensesRepaired == 0 && ( ( now - this.m_rtScoreAccrual ) / 1000 ) > 1 )
		{
			this.m_Score += this.m_ScoreIncrements * Math.floor( ( now - this.m_rtScoreAccrual ) / 1000 );
			this.m_TotalScoreText.text =  'Score: ' + this.m_Score;
			this.m_rtScoreAccrual = now;

			var sprite = new PIXI.Text( '+' + this.m_ScoreIncrements );
			sprite.x = 80;
			sprite.y = ( k_ScreenHeight / 2 ) - 40;
			sprite.style = {
				fontFamily: k_FontType,
				fontSize: 24,
				fill: 'white',
				align: 'center',
			};
			this.m_rgPointsHolder.push( sprite );
			gApp.stage.addChild(sprite);
		}

		if ( this.m_rtDefensesRepaired == 0 )
		{
			var x = gApp.renderer.plugins.interaction.mouse.global.x;
			var y = gApp.renderer.plugins.interaction.mouse.global.y;

			var dx = x - this.m_barrelSprite.worldTransform.tx;
			var dy = y - this.m_barrelSprite.worldTransform.ty;
			var dist = Math.sqrt( dx*dx + dy*dy );
			this.m_barrelSprite.rotation = Math.asin( dy / dist );
		}

		this.m_AttackManager.Update( delta );

		this.m_LevelManager.Update( delta );

		this.m_EnemyManager.Update( delta );

		this.m_ScoreCounter.text = 'Enemies Defeated: '.toUpperCase() + this.m_EnemyManager.m_nDefeatedEnemies;

		var nSecondsRemaining = Math.floor( ( this.m_rtBattleEnd - Date.now() ) / 1000 );

		if ( nSecondsRemaining <= 10 )
		{
			this.m_Timer.style = {
				fontSize: 36,
				fill:"red",
				fontWeight:'bold',
				fontFamily:k_FontType
			};
		}

		this.m_Timer.text = PadZerosLeft( Math.floor( nSecondsRemaining / 60 ), 2 ) + ':' + PadZerosLeft( nSecondsRemaining % 60, 2 );
	}

	for ( var i = this.m_rgPointsHolder.length - 1; i >= 0; --i )
	{
		var scoresprite = this.m_rgPointsHolder[i];
		if ( scoresprite.alpha == 0 )
		{
			scoresprite.destroy();
			this.m_rgPointsHolder.splice( i, 1 );
		}
		else
		{
			scoresprite.y -= 2;
			scoresprite.alpha -= 0.01;
		}
	}

	if ( nSecondsRemaining <= 0 && this.m_bRunning )
	{
		this.m_Timer.text = '00:00';
		this.m_bRunning = false;

		this.m_EnemyManager.Stop();
		this.m_AttackManager.Destroy();
		this.m_AttackManager = null;

		var instance = this;

		gAudioManager.PlaySound( 'stinger_win' );

		instance.RenderVictoryScreen();
	}
};

CBattleState.prototype.Shutdown = function()
{
	this.m_EnemyManager.Destroy();
	if ( this.m_AttackManager !== null )
	{
		this.m_AttackManager.Destroy();
	}

	gApp.stage.pointertap = null;
	this.m_MenuBar.destroy( true );
	this.m_TimerMenu.destroy( true );
	this.m_Timer.destroy();
	this.m_VictoryScreen.destroy();
	this.m_Ship.destroy();
	this.m_BaseContainer.destroy();
	this.m_RespawnTimer.destroy();

	if ( this.m_LevelUpScreen !== undefined )
	{
		this.m_LevelUpScreen.destroy();
	}

	gApp.renderer.plugins.interaction.cursorStyles.default = 'inherit';
	gApp.renderer.plugins.interaction.cursorStyles.pointer = 'pointer';
};

CBattleState.prototype.FireLaser = function( event )
{
	if ( !this.m_bRunning || this.m_rtDefensesRepaired != 0 )
		return;

	var instance = this;
	var x = event.data.global.x;
	var y = event.data.global.y;

	var laser = new PIXI.extras.AnimatedSprite( instance.m_rgLaserBeamFrames );
	laser.scale.set( 0.2, 0.2 );
	laser.x = instance.m_barrelSprite.worldTransform.tx + ( instance.m_barrelSprite.width * Math.cos(instance.m_barrelSprite.rotation) );
	laser.y = instance.m_barrelSprite.worldTransform.ty + ( instance.m_barrelSprite.width * Math.sin(instance.m_barrelSprite.rotation) ) - ( instance.m_barrelSprite.height / 2 ) ;
	laser.targetx = x;
	laser.targety = y;
	var dx = x - laser.x;
	var dy = ( y - laser.y - 10 );
	laser.width = Math.sqrt( dx*dx + dy*dy );
	laser.rotation = Math.asin( dy / laser.width );
	if ( x < instance.m_barrelSprite.worldTransform.tx )
		laser.rotation += 2 * ( ( Math.PI/2 ) - laser.rotation);
	laser.animationSpeed = 0.4;
	laser.loop = false;
	laser.play();
	gApp.stage.addChild( laser );


	laser.onComplete = function() {
		var laserHit = new PIXI.extras.AnimatedSprite( instance.m_rgLaserHitFrames );
		laserHit.scale.set( 0.2, 0.2 );
		laserHit.anchor.set( 0.5, 0.5 );
		laserHit.x = this.targetx;
		laserHit.y = this.targety;
		laserHit.animationSpeed = 0.8;
		laserHit.loop = false;
		laserHit.play();
		gApp.stage.addChild( laserHit );
		gAudioManager.PlaySound( 'laser_impact', false, 0.25 );

		laserHit.onComplete = function() {
			this.destroy();
		};

		this.destroy();
	}
};

CBattleState.prototype.HandleStart = function( delta )
{
	if ( !this.m_Ship.ascending && this.m_Ship.visible == true && this.m_Ship.y < this.m_ShipDestination.y )
	{
		this.m_Ship.y += this.m_Ship.vy * delta;
		gSalien.y += this.m_Ship.vy * delta;
		const xOffset = 20.0;
		this.m_Ship.elapsed += delta;
		this.m_Ship.x = this.m_ShipDestination.x +  (Math.sin(this.m_Ship.elapsed / 10.0) * xOffset) - xOffset;
	}
	else if ( !this.m_Ship.ascending && this.m_Ship.y >= this.m_ShipDestination.y && !this.m_BeamSprite.visible )
	{
		this.m_BeamSprite.visible = true;
		gAudioManager.PlaySound( 'beam_down' );
	}
	else if ( gSalien.y < this.m_SalienDestination.y )
	{
		gSalien.visible = true;
		gSalien.y += gSalien.vy;
	}
	else if ( !this.m_Ship.ascending )
	{
		this.m_BeamSprite.visible = false;
		this.m_Ship.ascending = true;

		var instance = this;


		gSalien.PlayAnim( "greet", false, 1, function (){
			gAudioManager.PlaySound( 'impact_sound', false );
			instance.m_turretSprite.visible = true;
			instance.m_barrelSprite.visible = true;
			instance.m_obscuringTurretSprite.visible = true;
			instance.m_BaseContainer.y = k_ScreenHeight - instance.m_BaseContainer.height;
			gSalien.PlayAnim( "greet", false, 1, function (){
				gAudioManager.PlaySound( 'impact_sound', false );
				instance.m_cableSprite.visible = true;
				gSalien.PlayAnim( "greet", false, 1, function (){
					gAudioManager.PlaySound( 'impact_sound', false );
					instance.m_stationSprite.visible = true;
					instance.m_satelliteSprite.visible = true;
					gSalien.ClearAnimCallback();
				});
			});
		});
	}

	if ( this.m_Ship.ascending )
	{
		this.m_Ship.ascending = true;
		this.m_Ship.y -= this.m_Ship.vy * delta;
	}

	if ( this.m_Ship.ascending && this.m_Ship.y + this.m_Ship.height < 0 )
	{
		this.m_Ship.visible = false;
		this.m_Ship.vy = 0;

		// start the match
		this.m_rtBattleStart = Date.now();
		this.m_rtScoreAccrual = this.m_rtBattleStart;
		this.m_rtBattleEnd = Date.now() + k_MatchLengthSec * 1000;

		this.m_bStarting = false;
		this.m_bRunning = true;

		var strDifficulty = 'easy';
		if ( this.m_PlanetData.zones[this.m_unZoneIndex].difficulty == 3 )
		{
			strDifficulty = 'hard';
		}
		else if ( this.m_PlanetData.zones[this.m_unZoneIndex].difficulty == 2 )
		{
			strDifficulty = 'medium';
		}

		this.m_EnemyManager = new CEnemyManager( this );
		this.m_LevelManager = new CLevelManager( this, strDifficulty );
		this.m_ScoreIncrements = this.m_ScoreIncrements * this.m_LevelManager.m_LevelData.score_multiplier;

		gAudioManager.PlayMusic( 'battle_music', false );

		// set default attack
		this.m_AttackManager = new CAttackManager( this );
		this.m_AttackManager.BuildAttacks();
	}
};

CBattleState.prototype.DamageEnemiesAtLocation = function( nAmount, rect )
{
//	var collisionDebug = new PIXI.Graphics();
//	collisionDebug.beginFill(0xFF0000);
//	collisionDebug.drawRect(0, 0, rect.width, rect.height);
//	collisionDebug.endFill();
//	collisionDebug.x = rect.x;
//	collisionDebug.y = rect.y;
//	collisionDebug.cacheAsBitmap = true;
//	gApp.stage.addChild( collisionDebug );

	this.m_EnemyManager.m_rgEnemies.forEach( function( enemy ) {
		if ( DistBetweenRects( rect, new PIXI.Rectangle( enemy.m_Sprite.x, enemy.m_Sprite.y, enemy.m_Sprite.width,  enemy.m_Sprite.height  ) ) <= 0 )
		{
			enemy.Damage( nAmount );
		}
	});
};

CBattleState.prototype.GetEnemiesAtLocation = function( rect )
{
	var rgEnemiesAtLocation = [];
	this.m_EnemyManager.m_rgEnemies.forEach( function( enemy ) {
		if ( DistBetweenRects( rect, new PIXI.Rectangle( enemy.m_Sprite.x, enemy.m_Sprite.y, enemy.m_Sprite.width,  enemy.m_Sprite.height  ) ) <= 0 )
		{
			rgEnemiesAtLocation.push( enemy );
		}
	});
	return rgEnemiesAtLocation;
};

CBattleState.prototype.SpawnEnemies = function( strType, cEnemies )
{
	for ( var i = 0; i < cEnemies; ++i )
	{
		var enemy = this.m_EnemyManager.BuildEnemy( strType );
	}
};

CBattleState.prototype.DamagePlayer = function( nAmount )
{
	if ( this.m_rtPlayerInvulnerable > Date.now() || this.m_rtDefensesRepaired != 0 )
	{
		return;
	}

	gSalien.PlayAnim("hurt", false, 1);

	this.m_PlayerHealth -= nAmount;

	if ( this.m_PlayerHealth <= this.m_PlayerMaxHealth )
	{
		if ( this.m_HealthBar === null )
		{
			this.m_HealthBar = new PIXI.Container();
			this.m_HealthBar.x = gSalien.x - 50;
			this.m_HealthBar.y = gSalien.y;
			var totalBar = new PIXI.Graphics();
			totalBar.beginFill(0x000000);
			totalBar.drawRect(0, 0, gSalien.width, 16 );
			totalBar.endFill();
			this.m_HealthBar.addChild(totalBar);
			this.m_HealthBar.total = totalBar;

			var redBar = new PIXI.Graphics();
			redBar.beginFill(0xFF3300);
			redBar.drawRect(0, 0, totalBar.width * ( this.m_PlayerHealth / this.m_PlayerMaxHealth ), 16 );
			redBar.endFill();
			this.m_HealthBar.addChild(redBar);
			this.m_HealthBar.health = redBar;

			gApp.stage.addChild( this.m_HealthBar );
		}
		else
		{
			this.m_HealthBar.health.width = this.m_HealthBar.total.width * ( this.m_PlayerHealth / this.m_PlayerMaxHealth );
		}
	}

	if ( this.m_PlayerHealth <= 0 && this.m_rtDefensesRepaired == 0 )
	{
		this.m_BaseContainer.alpha = 0.3;
		var deadFilter = new PIXI.filters.ColorMatrixFilter();
		deadFilter.greyscale( 0.5 );
		this.m_BaseContainer.filters = [deadFilter];
		this.m_EnemyManager.SetInteractive( false );
		this.m_rtDefensesRepaired = Date.now() + 10 * 1000;
	}
};

CBattleState.prototype.RenderVictoryScreen = function( result )
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
		if ( continueButton.result.new_level > continueButton.result.old_level )
		{
			instance.RenderLevelUpScreen( continueButton.result );
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

	var enemiesVanquishedText = new PIXI.Text( 'You vanquished ' + this.m_EnemyManager.m_nDefeatedEnemies + ' enemy aliens' );
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

	gServer.ReportScore(
		this.m_Score,
		function ( results ) {
			reportingScoreText.visible = false;
			continueButton.visible = true;
			continueButton.result = results.response;
			//attempt to refresh player info
			gServer.GetPlayerInfo( function( results ) { gPlayerInfo = results.response; }, function(){} );
		},
		GameLoadError
	);
};

CBattleState.prototype.RenderLevelUpScreen = function( result )
{
	var instance = this;
	this.m_LevelUpScreen = new PIXI.Container();
	this.m_LevelUpScreen.x = 375;
	this.m_LevelUpScreen.y = 140;

	var LevelUpBackground = new PIXI.Graphics();
	LevelUpBackground.beginFill( 0x000000, 1.0 );
	LevelUpBackground.drawRect( 0, 0, 545, 405 );
	LevelUpBackground.endFill();
	this.m_LevelUpScreen.addChild( LevelUpBackground );

	var continueButton = new PIXI.Graphics();
	continueButton.beginFill( k_UIWhite, 1.0 );
	continueButton.drawRect( 0, 0, 230, 40 );
	continueButton.endFill();
	this.m_LevelUpScreen.addChild( continueButton );
	continueButton.x = 155;
	continueButton.y = 300;
	continueButton.interactive = true;
	continueButton.buttonMode = true;
	continueButton.pointertap = function () {
		gGame.ChangeState( new CBattleSelectionState( instance.m_PlanetData.id ) );
	};

	var continueText = new PIXI.Text( 'Back to Map'.toUpperCase() );
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

	var victoryText = new PIXI.Text( 'Level Up!'.toUpperCase() );
	victoryText.style = {
		fontFamily: k_FontType,
		fontSize: 48,
		fontWeight: 'bold',
		fill: 'white',
		align: 'center',
	};
	victoryText.anchor.set( 0.5, 0.5 );
	victoryText.x = LevelUpBackground.width / 2;
	victoryText.y = 100;
	this.m_LevelUpScreen.addChild( victoryText );

	var LevelText = new PIXI.Text( 'Level '.toUpperCase() + result.new_level );
	LevelText.style = {
		fontFamily: k_FontType,
		fontSize: 18,
		fill: 'white',
		align: 'center',
	};
	LevelText.anchor.set( 0.5, 0.5 );
	LevelText.x = LevelUpBackground.width / 2;
	LevelText.y = continueButton.y - 70;
	this.m_LevelUpScreen.addChild( LevelText );

	var checkInventoryText = new PIXI.Text( 'Check your Steam Inventory for your reward!' );
	checkInventoryText.style = {
		fontFamily: k_FontType,
		fontSize: 18,
		fill: '#67c1f5',
		align: 'center',
	};
	checkInventoryText.anchor.set( 0.5, 0.5 );
	checkInventoryText.x = LevelUpBackground.width / 2;
	checkInventoryText.y = continueButton.y - 40;
	checkInventoryText.interactive = true;
	checkInventoryText.buttonMode = true;
	checkInventoryText.pointertap = function () {
		window.open( 'https://steamcommunity.com/my/inventory/', '_blank' );
	};
	this.m_LevelUpScreen.addChild( checkInventoryText );

	gApp.stage.addChild( this.m_LevelUpScreen );
};

var gStageFilter = new PIXI.filters.CRTFilter();

$J( document ).ready( function() {
	gApp = new PIXI.Application({
		antialias: true,    // default: false
		transparent: true, // default: false
		resolution: 1       // default: 1
	});

	gApp.renderer.view.style.position = 'absolute';
	gApp.renderer.view.style.display = 'block';
	gApp.renderer.autoResize = true;
	gApp.renderer.resize(k_ScreenWidth, k_ScreenHeight);

	gStageFilter.curvature = 1;
	gStageFilter.lineWidth = 0.6;
	gStageFilter.lineContrast = 0.11;
	gStageFilter.noise = 0.16;
	gStageFilter.noiseSize = 1;
	gStageFilter.vignetting = 0.3;
	gStageFilter.vignettingAlpha = 0.1;
	gStageFilter.vignettingBlur = 0.45;
	gStageFilter.time = 0;

	gApp.stage.filters = [gStageFilter];



	$J( '#salien_game_placeholder' ).append(gApp.view);
//	document.body.appendChild(gApp.view);

	// our entry: make a stage, start ticking the loop (which runs through the states above)
	gGame = new CGame();
	gGame.Start();
});

