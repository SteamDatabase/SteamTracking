'use strict';

(function()
{
	//--------------------------------------------------------------------------------------------

	var g_bIsDev = null;
	var g_bIsMobile = null;
	var g_bIsLoggedIn = null;
	var g_strStreamLanguage = null;
	var g_bIsSimulation = null;
	var g_Localization = null;
	var g_Chat = null;
	var g_GraphData = null;
	var g_Minimap = null;
	var g_Tournament = null;
	var g_Match = null;
	var g_UIManager = null;
	var g_StreamSimulator = null;
	var g_rgHeroDataKeys = null;
	var g_strLeaguesBaseURL = null;
	var g_strDotaIFrameOriginURL = null
	var g_strSteamBroadcastOrigin = null;
	var g_strBaseImageURL = null;
	var g_strBaseAudioURL = null;
	var g_rgHeroData = null;
	var g_rgLocalizedHeroData = null;
	var g_rgItemData = null;
	var g_rgEmoticonData = null;
	var g_strGetEmoticonsForUserURL = null;
	var g_strLoginURL = null;
	var g_strPostAndGetCheersWebAPIURL = null;
	var g_strGetTournamentDataURL = null;
	var g_Noise = null;
	var g_Localization = null;
	var g_strCurrency = null;
	var g_nViewerCount = null;
	var g_ErrorSound = null;
	var g_rgTournamentDataReadyCallbacks = [];
	
	var g_DevConfig = {
		cheer_use_stream_values: true,
		force_teams: false,
		spew_events: false
	};

	//--------------------------------------------------------------------------------------------

	var DOTA_CONSTS =
	{
		LEAGUE_ID_TI5: 2733,

		TEAM_RADIANT: 2,
		TEAM_DIRE: 3,

		DOTA_LANE_NONE: 0,

		DOTA_LANE_TOP: 1,
		DOTA_LANE_MIDDLE: 2,
		DOTA_LANE_BOTTOM: 3,

		DOTA_RUNE_DOUBLEDAMAGE: 0,
		DOTA_RUNE_HASTE: 1,
		DOTA_RUNE_ILLUSION: 2,
		DOTA_RUNE_INVISIBILITY: 3,
		DOTA_RUNE_REGENERATION: 4,
		DOTA_RUNE_BOUNTY: 5,

		PLAYERS_PER_TEAM: 5,
		NUM_ITEM_SLOTS: 6,

		MAX_HERO_ABILITIES: 6,
		MAX_HERO_ABILITIES_INCLUDING_ATTRIBUTE_BONUS: 7,
		MAX_HERO_LEVEL: 25,

		HERO_TO_HERO_KILLS: 0,
		HERO_TO_HERO_ASSISTS: 1,
		HERO_TO_HERO_TYPE_COUNT: 2,

		COLOR_RADIANT: '#5f812f',
		COLOR_DIRE: '#892f2e',
		COLOR_MINIMAP_HOVER_STROKE: '#d28116',

		PANELGROUP_ID_MAIN: 'PanelGroup_Main',

		DIV_ID_SPECTATOR_STATS: 'Panel_SpectatorStats',
		DIV_ID_TOURNAMENT_AD: 'Panel_TournamentBox',
		DIV_ID_TOURNAMENT_CHEER: 'Panel_TournamentCheer',
		DIV_ID_OVERVIEW_HEADER: 'Panel_OverviewHeader',
		DIV_ID_STATSPANEL_PLAYERS: 'Panel_Players',
		DIV_ID_STATSPANEL_PLAYERDETAILS: 'Panel_PlayerDetails',
		DIV_ID_STATSPANEL_MATCHSTATS: 'Panel_MatchStats',
		DIV_ID_STATSPANEL_DRAFT: 'Panel_Draft',

		DIV_ID_IFRAME_MATCHSTATS: 'IFrame_MatchStats',

		DIV_ID_VIDEO_IFRAME: 'VideoIFrame',

		STATS_SORTING_KDA: 'kda',
		STATS_SORTING_LHD: 'lhd',
		STATS_SORTING_HEROLEVEL: 'hl',
		STATS_SORTING_XPPERMINUTE: 'xppm',
		STATS_SORTING_CURRENTGOLD: 'curgold',
		STATS_SORTING_NETWORTH: 'networth',
		STATS_SORTING_GOLDPERMINUTE: 'gpm',
		STATS_SORTING_BUYBACKSTATUS: 'bb',

		CHEEER_SEND_INTERVAL: 5.0,	// Seconds
		CHEEER_GET_INTERVAL: 5.0,

		CHEER_SHRINK_DELAY: 5.0,	// Seconds
		CHEER_BAR_COUNT: 20,
		CHEER_STARTING_SCALE_MAX: 100,
		CHEER_RENORMALIZE_FACTOR: 1.5,

		HEALTHBAR_REFRESH_INTERVAL: 1/3,
		GRAPH_REFRESH_INTERVAL: 10.0,	// Seconds
		POP_ANIMATION_DURATION: 200,	// In milliseconds -- NOTE: This must match $sPopAnimationDuration in tv.vcss.

		TOURNAMENT_SCHEDULE_UPDATE_INTERVAL: 60.0, // Seconds

		STATS_SORTING_DEFAULT: 'kda',

		NUM_GRAPH_SAMPLES: 128,
		NUM_STAT_LOCATIONS: 6,
		NUM_STAT_LOCATION_TYPES: 4,

		BROWSER_WIDTH_SLIM: 1200,

		MINIMAP_UPDATE_INTERVAL: 1/10,

		DATA_CHUNK_TYPES: [ 'match', 'teams', 'buildings', 'graph_data' ],	// NOTE: Processed in this order

		ULT_STATUS_NO_ULT: 0,
		ULT_STATUS_ON_COOLDOWN: 1,
		ULT_STATUS_NO_MANA: 2,
		ULT_STATUS_READY: 3
	};

	//--------------------------------------------------------------------------------------------

	function PlayErrorSound()
	{
		if ( null === g_ErrorSound )
		{
			g_ErrorSound = new Audio( g_strBaseAudioURL + "meep_mop.mp3" );
			g_ErrorSound.volume = 0.5;
		}

		// Allow the sound to be restarted if one is already being played
		g_ErrorSound.pause();
		g_ErrorSound.currentTime = 0;

		// Play the sound
		g_ErrorSound.play();
	}

	function SetSelectionRange( input, nSelectionStart, nSelectionEnd )
	{
		if ( input.setSelectionRange )
		{
			input.focus();
			input.setSelectionRange( nSelectionStart, nSelectionEnd );
		}
		else if ( input.createTextRange )
		{
			var range = input.createTextRange();
			range.collapse( true );
			range.moveEnd( 'character', nSelectionEnd );
			range.moveStart( 'character', nSelectionStart );
			range.select();
		}
	}

	function FadeInLoadedContent( $Elem )
	{
		$Elem.addClass( 'Loaded_js' );

//		if ( g_bIsDev && $Elem.attr( 'src' ) !== undefined )
//		{
//			console.log( "Loaded " + $Elem.attr( 'src' ) );
//		}
	}

	function CreateItemImage( strURL, Item, bEnableTooltips )
	{
		var $Result = CreateImage( strURL );

		if ( bEnableTooltips )
		{
			$Result.addClass( 'itemIconWithTooltip' ).attr( 'itemname', Item.GetKey() );
		}

		return $Result;
	}

	function CreateImage( strURL )
	{
		var $Img = $( '<img>' );

		if ( strURL )
		{
			$Img.attr( 'src', strURL );
		}

		FadeInImageOnLoad( $Img );

		return $Img;
	}

	function FadeInImageOnLoad( $Img )
	{
		return CallCallbackOnImageLoad( $Img, FadeInLoadedContent );
	}

	function CallCallbackOnImageLoad( $Img, fnCallback )
	{
		// If the image is already loaded, call the callback immediately
		VUtils.Assert( $Img && $Img.length );
		if ( $Img[0].complete )
		{
			fnCallback( $Img );
			return $Img;
		}

		return $Img.load( function() { fnCallback( $( this ) ); } );
	}

	function BIsValidHero( nHeroID )
	{
		return undefined !== g_rgHeroData[nHeroID] && nHeroID > 0;
	}

	function GetMiniHeroIconURL( nHeroID )
	{
		VUtils.Assert( BIsValidHero( nHeroID ) );
		return g_strBaseImageURL + 'miniheroes/' + g_rgHeroData[nHeroID].key + '.png';
	}

	function GetHeroImageURL( nHeroID )
	{
		VUtils.Assert( BIsValidHero( nHeroID ) );
		return g_strBaseImageURL + 'heroes/' + g_rgHeroData[ nHeroID ].key + '_hphover.png';
	}

	function GetHeroImageURL_LargeWide( nHeroID )
	{
		return g_strBaseImageURL + 'heroes/' + g_rgHeroData[ nHeroID ].key + '_full.png';
	}

	function GetItemImageURL( nItemID, bSmall )
	{
		VUtils.AssertMsg( undefined !== g_rgItemData[ nItemID ], "No item data for item with item ID " + nItemID );
		return g_strBaseImageURL + 'items/' + g_rgItemData[ nItemID ].base_img + ( bSmall ? '_eg' : '_lg' ) + '.png';
	}

	function GetEnemyTeam( nTeam )
	{
		return nTeam === DOTA_CONSTS.TEAM_RADIANT ? DOTA_CONSTS.TEAM_DIRE : DOTA_CONSTS.TEAM_RADIANT;
	}

	function GetTeamFromString( strTeam )	// 'Radiant' or 'Dire'
	{
		strTeam = strTeam.toLowerCase();

		if ( strTeam === 'radiant' )
			return DOTA_CONSTS.TEAM_RADIANT;

		if ( strTeam === 'dire' )
			return DOTA_CONSTS.TEAM_DIRE;

		VUtils.Assert( false );

		return undefined;
	}

	function GetRadiantDireFromTeam( nTeam )
	{
		return nTeam === DOTA_CONSTS.TEAM_RADIANT ? 'Radiant' : 'Dire';
	}

	function GetRandomHeroID()
	{
		var cHeroes = g_rgHeroDataKeys.length;
		var iHeroKeyIndex = parseInt( Math.random() * 1000 ) % cHeroes;
		return g_rgHeroData[ g_rgHeroDataKeys[iHeroKeyIndex] ].id;
	}

	function RedirectToLogin()
	{
		window.location.href = g_strLoginURL;
	}

	function GetLocalizedHeroName( nHeroID )
	{
		return g_rgLocalizedHeroData[ nHeroID ].name;
	}

	function BIsValidAbilityName( strAbilityName )
	{
		return [ 'empty' ].indexOf( strAbilityName ) !== -1;
	}

	function SendMessageToIFrame( $IFrame, strTargetOrigin, Msg )
	{
		VUtils.Assert( $IFrame.length );

		$IFrame[0].contentWindow.postMessage( Msg, strTargetOrigin );
	}

	//--------------------------------------------------------------------------------------------

	var CBaseParser = function()
	{
	}

	CBaseParser.prototype =
	{
		constructor: CBaseParser,

		ProcessDataReceived: function( flTimestamp, Data )
		{
		}
	};

	//--------------------------------------------------------------------------------------------

	var CMatchParserV001 = function()
	{
		CBaseParser.call( this );
	}

	CMatchParserV001.prototype = Object.create( CBaseParser.prototype );
	CMatchParserV001.prototype.constructor = CMatchParserV001;

	CMatchParserV001.prototype.ProcessDataReceived = function( flTimestamp, Data )
	{
		CBaseParser.prototype.ProcessDataReceived.apply( this, arguments );

		var bCreateNewMatch = false;

		// If we don't have a match yet
		if ( !g_Match )
		{
			// Get outta here if we don't have a matchid yet.
			if ( undefined === Data.matchid )
				return;

			bCreateNewMatch = true;
		}

		// If the viewer was already watching a match and the match ID is different than what's coming
		// across the wire now, create a new match
		else if ( undefined !== Data.matchid && g_Match && g_Match.GetMatchID() !== Data.matchid )
		{
			bCreateNewMatch = true;
		}

		// Create a new match?
		if ( bCreateNewMatch )
		{
			InitNewMatch( Data.matchid );
		}

		// Process global data
		g_Match.SetServerSteamID( Data.server_steam_id );
		g_Match.SetBroadcastTime( Data.timestamp );
		g_Match.SetMatchTime( Data.game_time );
		g_Match.SetIsStreamerMode( Data.single_team );
		g_Match.SetCheerPeak( Data.cheers_peak );

		if ( Data.time_of_day )
		{
			g_Match.SetTimeOfDay( Data.time_of_day );
		}

		if ( g_bIsDev && g_DevConfig['force_teams'] )
		{
			Data.teamid_radiant = 1838315;
			Data.teamid_dire = 4;
		}

		if ( undefined !== Data.teamid_radiant && undefined !== Data.teamid_dire )
		{
			g_Match.SetTeamID( DOTA_CONSTS.TEAM_RADIANT, Data.teamid_radiant );
			g_Match.SetTeamID( DOTA_CONSTS.TEAM_DIRE, Data.teamid_dire );
		}

		if ( undefined !== Data.teamname_radiant && undefined !== Data.teamname_dire )
		{
			g_Match.SetTeamName( DOTA_CONSTS.TEAM_RADIANT, Data.teamname_radiant );
			g_Match.SetTeamName( DOTA_CONSTS.TEAM_DIRE, Data.teamname_dire );
		}

		if ( undefined !== Data.picks )
		{
			for ( var i = 0; i < Data.picks.length; ++i )
			{
				var CurPick = Data.picks[i];
				g_Match.SetPick( i, CurPick.team, CurPick.hero );
			}
		}

		if ( undefined !== Data.bans )
		{
			for ( var i = 0; i < Data.bans.length; ++i )
			{
				var CurBan = Data.bans[i];
				g_Match.SetBan( i, CurBan.team, CurBan.hero );
			}
		}

		if ( undefined !== Data.kills )
		{
			g_GraphData.SetKills( Data.kills );
		}
		
		if ( g_bIsDev )
		{
			Data.league_id = DOTA_CONSTS.LEAGUE_ID_TI5;
		}

		if ( null === g_Tournament && undefined !== Data.league_id && Data.league_id > 0 )
		{
			InitTournament( Data.league_id );
		}
	}

	//--------------------------------------------------------------------------------------------

	var CChatParserV001 = function()
	{
		CBaseParser.call( this );
	}

	CChatParserV001.prototype = Object.create( CBaseParser.prototype );
	CChatParserV001.prototype.constructor = CChatParserV001;

	CChatParserV001.prototype.ProcessDataReceived = function( flTimestamp, Data )
	{
		CBaseParser.prototype.ProcessDataReceived.apply( this, arguments );

		g_Chat.AddMessage( Data.channel_id, Data.matchtime, Data.user, Data.message );
	}

	//--------------------------------------------------------------------------------------------

	var CTeamsParserV001 = function()
	{
		CBaseParser.call( this );
	}

	CTeamsParserV001.prototype = Object.create( CBaseParser.prototype );
	CTeamsParserV001.prototype.constructor = CTeamsParserV001;

	CTeamsParserV001.prototype.ProcessDataReceived = function( flTimestamp, Data )
	{
		CBaseParser.prototype.ProcessDataReceived.apply( this, arguments );

		for ( var iTeam in Data )
		{
			var CurTeam = Data[iTeam];
			var rgPlayers = CurTeam.players;

			if ( !rgPlayers || 0 === rgPlayers.length )
				continue;

			if ( CurTeam.team_number !== DOTA_CONSTS.TEAM_RADIANT && CurTeam.team_number != DOTA_CONSTS.TEAM_DIRE )
				continue;

			// In dev, we use the results of the WebAPI
			if ( !g_bIsDev || g_DevConfig['cheer_use_stream_values'] )
			{
				g_Match.SetTeamScore( CurTeam.team_number, CurTeam.score );
				g_Match.SetTeamCheers( CurTeam.team_number, CurTeam.cheers );
			}

			if ( CurTeam.only_team )
			{
				g_Match.SetStreamerTeam( CurTeam.team_number );
			}

			for ( var iPlayer = 0, cPlayers = rgPlayers.length; iPlayer < cPlayers; ++iPlayer )
			{
				var CurPlayerData = rgPlayers[iPlayer];
				var Player = g_Match.GetPlayer( CurTeam.team_number, iPlayer );

				Player.SetTeam( CurPlayerData.team );

				if ( CurPlayerData && CurPlayerData.heroid > 0 )
				{
					Player.SetAccountID( CurPlayerData.accountid );
					Player.SetPlayerID( CurPlayerData.playerid );
					Player.SetHeroID( CurPlayerData.heroid );
					Player.SetLevel( CurPlayerData.level );
					Player.SetRespawnTime( CurPlayerData.respawn_time );

					Player.SetName( CurPlayerData.name );
					Player.SetPosition( CurPlayerData.x, CurPlayerData.y );
					Player.SetHasBuyback( CurPlayerData.has_buyback );
					Player.SetHealthPoints( CurPlayerData.healthpoints );
					Player.SetMaxHealthPoints( CurPlayerData.maxhealthpoints );
					Player.SetHealthRegenRate( CurPlayerData.healthregenrate );
					Player.SetManaPoints( CurPlayerData.manapoints );
					Player.SetMaxManaPoints( CurPlayerData.maxmanapoints );
					Player.SetManaRegenRate( CurPlayerData.manaregenrate );
					Player.SetBaseIntelligence( CurPlayerData.base_intelligence );
					Player.SetBaseAgility( CurPlayerData.base_agility );
					Player.SetBaseStrength( CurPlayerData.base_strength );
					Player.SetBaseDamage( CurPlayerData.base_damage );
					Player.SetBaseMoveSpeed( CurPlayerData.base_movespeed );
					Player.SetBaseArmor( CurPlayerData.base_armor );
					Player.SetIntelligence( CurPlayerData.intelligence );
					Player.SetAgility( CurPlayerData.agility );
					Player.SetStrength( CurPlayerData.strength );
					Player.SetDamage( CurPlayerData.damage );
					Player.SetMoveSpeed( CurPlayerData.movespeed );
					Player.SetArmor( CurPlayerData.armor );
					Player.SetKillCount( CurPlayerData.kill_count );
					Player.SetDeathCount( CurPlayerData.death_count );
					Player.SetAssistsCount( CurPlayerData.assists_count );
					Player.SetGoldPerMinute( CurPlayerData.gold_per_min );
					Player.SetXPPerMinute( CurPlayerData.xp_per_min );
					Player.SetLastHitsCount( CurPlayerData.lh_count );
					Player.SetDeniesCount( CurPlayerData.denies_count );
					Player.SetNetGold( CurPlayerData.net_gold );
					Player.SetHeroDamage( CurPlayerData.hero_damage );
					Player.SetTowerDamage( CurPlayerData.tower_damage );
					Player.SetHealingProvided( CurPlayerData.hero_healing );
					Player.SetGold( CurPlayerData.gold );
					Player.SetUltimateStatus( CurPlayerData.has_ultimate, CurPlayerData.has_ultimate_mana, CurPlayerData.ultimate_cooldown );
				}

				for ( var iSlot in CurPlayerData.items )
				{
					if ( iSlot >= DOTA_CONSTS.NUM_ITEM_SLOTS )
						continue;

					// Empty slot?
					if ( !CurPlayerData.items[iSlot] || CurPlayerData.items[iSlot].id === 0 )
					{
						Player.GetItem( iSlot ).SetKey( null );
						continue;
					}

					Player.GetItem( iSlot ).SetKey( CurPlayerData.items[iSlot].name.substr( 5 ) );
				}

				for ( var iSlot in CurPlayerData.stashitems )
				{
					if ( iSlot >= DOTA_CONSTS.NUM_ITEM_SLOTS )
						continue;

					// Empty slot?
					if ( !CurPlayerData.stashitems[iSlot] || CurPlayerData.stashitems[iSlot].id === 0 )
					{
						Player.GetStashItem( iSlot ).SetKey( null );
						continue;
					}

					Player.GetStashItem( iSlot ).SetKey( CurPlayerData.stashitems[iSlot].name.substr( 5 ) );
				}

				if ( CurPlayerData.abilities !== undefined )
				{
					for ( var iAbility = 0; iAbility < CurPlayerData.abilities.length; ++iAbility )
					{
						Player.SetAbilityLevel( iAbility, CurPlayerData.abilities[iAbility].level );
					}
				}

				if ( CurPlayerData.levelpoints !== undefined )
				{
					for ( var iLevel = 0; iLevel < CurPlayerData.levelpoints.length; ++iLevel )
					{
						Player.SetLevelPointToAbilities( iLevel + 1, CurPlayerData.levelpoints[iLevel].id );
					}
				}

				Player.ClearItemShoppingList();
				if ( CurPlayerData.itemshoppinglist !== undefined )
				{
					for ( var iItem = 0; iItem < CurPlayerData.itemshoppinglist.length; ++iItem )
					{
						var CurItem = CurPlayerData.itemshoppinglist[iItem];
						Player.AddItemToShoppingList( CurItem.time, CurItem.sold, CurItem.name.substr( 5 ) );
					}
				}

				Player.ClearHeroToHeroStats();
				if ( CurPlayerData.hero_to_hero_stats !== undefined )
				{
					for ( var iStat = 0, cStats = CurPlayerData.hero_to_hero_stats.length; iStat < cStats; ++iStat )
					{
						var CurStat = CurPlayerData.hero_to_hero_stats[iStat];

						Player.SetHeroToHeroStatData( DOTA_CONSTS.HERO_TO_HERO_KILLS, CurStat.victimid, CurStat.kills );
						Player.SetHeroToHeroStatData( DOTA_CONSTS.HERO_TO_HERO_ASSISTS, CurStat.victimid, CurStat.assists );
					}
				}
			}
		}
	}

	//--------------------------------------------------------------------------------------------

	var CBuildingParserV001 = function()
	{
		CBaseParser.call( this );
	}

	CBuildingParserV001.prototype = Object.create( CBaseParser.prototype );
	CBuildingParserV001.prototype.constructor = CBuildingParserV001;

	CBuildingParserV001.prototype.ProcessDataReceived = function( flTimestamp, Data )
	{
		CBaseParser.prototype.ProcessDataReceived.apply( this, arguments );

		g_Match.ClearBuildings();

		for ( var iBuilding = 0, cBuildings = Data.length; iBuilding < cBuildings; ++iBuilding )
		{
			var CurBuildingData = Data[iBuilding];
			var Building = g_Match.AddBuilding( CurBuildingData.team, CurBuildingData.lane, CurBuildingData.type, CurBuildingData.tier );

			Building.SetPosition( CurBuildingData.x, CurBuildingData.y );
			Building.SetHeading( CurBuildingData.heading );
		}
	}

	//--------------------------------------------------------------------------------------------

	var CGraphDataParserV001 = function()
	{
		CBaseParser.call( this );
	}

	CGraphDataParserV001.prototype = Object.create( CBaseParser.prototype );
	CGraphDataParserV001.prototype.constructor = CGraphDataParserV001;

	CGraphDataParserV001.prototype.ProcessDataReceived = function( flTimestamp, Data )
	{
		CBaseParser.prototype.ProcessDataReceived.apply( this, arguments );

		g_GraphData.Init( Data.graph_gold, Data.graph_kill, Data.graph_rax, Data.graph_tower, Data.graph_xp, Data.team_loc_stats );
	}

	//--------------------------------------------------------------------------------------------

	var ParserFactory = function() {};

	ParserFactory.prototype.Create = function( nVersion, strParserType )
	{
		// nVersion here is specific to the given blob of data/parser pairing
		switch( strParserType )
		{
		case 'match':
			return new CMatchParserV001();

		case 'teams':
			return new CTeamsParserV001();

		case 'buildings':
			return new CBuildingParserV001();

		case 'graph_data':
			return new CGraphDataParserV001();

		case 'chat':	// Unused:
			return new CChatParserV001();
		}

		return null;
	}

	//--------------------------------------------------------------------------------------------

	var VStreamProcessor = function( nStreamVersion )
	{
		this.m_nStreamVersion = nStreamVersion;
		this.m_ParserFactory = new ParserFactory();
		this.m_Parsers = {};
	}

	VStreamProcessor.prototype =
	{
		constructor: VStreamProcessor,

		ProcessDataReceived: function( Data )
		{
			for( var iChunk = 0, cChunks = DOTA_CONSTS.DATA_CHUNK_TYPES.length; iChunk < cChunks; ++iChunk )
			{
				var strType = DOTA_CONSTS.DATA_CHUNK_TYPES[iChunk];

				// Chunks are not always present
				if ( undefined === Data[strType] || null === Data[strType] )
					continue;

				var Chunk = Data[strType];

				// Make sure there is a valid parser for this type of event
				this.m_Parsers[strType] = this.m_Parsers[strType] || this.m_ParserFactory.Create( Chunk.version, strType );
				if ( undefined === this.m_Parsers[strType] )
					continue;

				this.m_Parsers[strType].ProcessDataReceived( Data.game_time, Data[strType] );
			}
		}
	};

	//--------------------------------------------------------------------------------------------

	var VStreamSimulator = function()
	{
		this.m_flMatchStartTime = VUtils.GetTime() - Math.random() * 3 * 60 * 60;	// The match began some time ago
		this.m_flStreamStartTime = this.m_flMatchStartTime - Math.random() * 3 * 60 * 60;	// The stream began sometime before the match

		this.m_Data = {
			events: []
		};

		// Select some heroes, items, and player names for the match we're simulating
		this.m_MatchHeroIDs = {};
		this.m_MatchItems = {};
		this.m_MatchStashItems = {};
		this.m_PlayerNames = {};
		this.m_MatchShoppingItems = {};

		this.m_nRadiantTeamID = null;
		this.m_nDireTeamID = null;

		var rgItemDataKeys = Object.keys( g_rgItemData );
		var cItems = rgItemDataKeys.length;

		var rgPlayerNames = [
			"EricTams", "EricL", "IceFrog", "JonL", "Robin", "Carorlolf", "The O'Roracle", "DanielJ", "andrewk", "BrettS"
		];

		var iPlayerName = 0;

		var rgAlwaysUseHeroes = [
			1,	// Anti-Mage
			11,	// Shadow Fiend
			54,	// Lifestealer
			69,	// Doom
			74	// Invoker
		];

		for ( var nTeam = DOTA_CONSTS.TEAM_RADIANT; nTeam <= DOTA_CONSTS.TEAM_DIRE; ++nTeam )
		{
			this.m_MatchHeroIDs[nTeam] = [];
			this.m_MatchItems[nTeam] = [];
			this.m_MatchStashItems[nTeam] = [];
			this.m_PlayerNames[nTeam] = [];
			this.m_MatchShoppingItems[nTeam] = [];

			for ( var iPlayer = 0; iPlayer < DOTA_CONSTS.PLAYERS_PER_TEAM; ++iPlayer )
			{
				var nHeroID;

				if ( rgAlwaysUseHeroes.length )
				{
					// List of heroes we always want to test
					nHeroID = rgAlwaysUseHeroes[0];
					rgAlwaysUseHeroes.shift();
				}
				else
				{
					// Random hero
					nHeroID = GetRandomHeroID();
				}

				this.m_MatchHeroIDs[nTeam].push( nHeroID );
				this.m_MatchItems[nTeam][iPlayer] = [];
				this.m_MatchStashItems[nTeam][iPlayer] = [];

				this.m_PlayerNames[nTeam].push( rgPlayerNames[iPlayerName++] );

				// For each player, select 6 random items and 6 random stash items
				var cItemsToAdd = Math.max( 5, parseInt( Math.random() * 1000 ) % DOTA_CONSTS.NUM_ITEM_SLOTS );
				for ( var iSlot = 0; iSlot < cItemsToAdd; ++iSlot )
				{
					var iItemKeyIndex = parseInt( Math.random() * 1000 ) % cItems;
					this.m_MatchItems[nTeam][iPlayer].push( g_rgItemData[ rgItemDataKeys[iItemKeyIndex] ].key );
				}

				cItemsToAdd = Math.max( 2, parseInt( Math.random() * 1000 ) % DOTA_CONSTS.NUM_ITEM_SLOTS );
				for ( var iSlot = 0; iSlot < cItemsToAdd; ++iSlot )
				{
					var iItemKeyIndex = parseInt( Math.random() * 1000 ) % cItems;
					this.m_MatchStashItems[nTeam][iPlayer].push( g_rgItemData[ rgItemDataKeys[iItemKeyIndex] ].key );
				}

				this.m_MatchShoppingItems[nTeam][iPlayer] = [];
				var cShoppingItems = 17 + parseInt( Math.random() * 5 );
				var nSeconds = parseInt( 10 + 60 * Math.random() );
				for ( var iItem = 0; iItem < cShoppingItems; ++iItem )
				{
					var iItemKeyIndex = parseInt( 10000 * Math.random() ) % cItems;
					this.m_MatchShoppingItems[nTeam][iPlayer].push( {
						time: sprintf( "%d:%02d", nSeconds/60, nSeconds%60 ),
						sold: Math.random() < 0.15,
						id: g_rgItemData[ rgItemDataKeys[iItemKeyIndex] ].key
					} );

					if ( iItem >= 6 )
					{
						nSeconds += parseInt( Math.random() * 60 * 5 );
					}
					else
					{
						nSeconds += parseInt( Math.random() * 2 );
					}
				}
			}
		}
	};

	VStreamSimulator.prototype =
	{
		constructor: VStreamSimulator,

		SimulateStream: function( flCurTime, flElapsed )
		{
			//g_Tournament.Simulate( flCurTime, flElapsed );

			this.SimualteMatchMetaData( flCurTime, flElapsed );
			//this.SimulateChat( flCurTime, flElapsed );
			this.SimulatePlayerData( flCurTime, flElapsed );
			this.SimulateBuildingData( flCurTime, flElapsed );
		},

		SimualteMatchMetaData: function( flCurTime, flElapsed )
		{
			if ( undefined !== this.m_flNextMatchMetaDataTime && ( flCurTime < this.m_flNextMatchMetaDataTime ) )
				return;

			var flTeamSwapInterval = 5;	// Swap the teams for testing

			this.m_nRadiantTeamID = ( flCurTime % flTeamSwapInterval ) < flTeamSwapInterval/2 ? 1 : 0; 
			this.m_nDireTeamID = this.m_nRadiantTeamID == 0 ? 1 : 0;
		
			// Simulate data
			var Data  = {
				starttime: this.m_flMatchStartTime,
				endtime: -1,
				time: parseInt( 3600 + flCurTime - this.m_flMatchStartTime ),
				teamid_radiant: this.m_nRadiantTeamID,
				teamid_dire: this.m_nDireTeamID,
				teamname_radiant: g_Tournament.GetTeamName( this.m_nRadiantTeamID ),
				teamname_dire: g_Tournament.GetTeamName( this.m_nDireTeamID ),
				picks: [],
				bans: []
			};

			for ( var i = 0; i < 10; ++i )
			{
				var nTeam = ( i % 2 == 0 ) ? DOTA_CONSTS.TEAM_RADIANT : DOTA_CONSTS.TEAM_DIRE;
				Data.bans.push( { team: nTeam, hero: GetRandomHeroID() } );
				Data.picks.push( { team: nTeam, hero: GetRandomHeroID() } );
			}

			this.SetChunkData( 'match', Data );

			// Schedule next match meta data simulate
			this.m_flNextMatchMetaDataTime = flCurTime + 1;
		},

		SimulateChat: function( flCurTime, flElapsed )
		{
			if ( undefined !== this.m_flNextChatTime && ( flCurTime < this.m_flNextChatTime ) )
				return;
		
			// Simulate new chat message
			this.SetChunkData(
				'chat',
				{ channel_id: 1, matchtime: this.GetMatchTime(), user: this.GetRandomChatUser(), message: this.GetRandomChatMessage() }
			);

			// Schedule next chat message
			this.m_flNextChatTime = flCurTime + 0.05 + Math.random() * 0.5;
		},

		SimulatePlayerData: function( flCurTime, flElapsed )
		{
			if ( undefined !== this.m_flNextPlayerUpdateTime && ( flCurTime < this.m_flNextPlayerUpdateTime ) )
				return;

			var EventData = {};
			var flNoiseTime = flCurTime * 0.009;

			for ( var nTeam = DOTA_CONSTS.TEAM_RADIANT; nTeam <= DOTA_CONSTS.TEAM_DIRE; ++nTeam )
			{
				EventData[nTeam] = EventData[nTeam] || {};
				for ( var iPlayer = 0; iPlayer < DOTA_CONSTS.PLAYERS_PER_TEAM; ++iPlayer )
				{
					var flX = .4 * g_Noise.noise( 100 * nTeam + 1000 * iPlayer + flNoiseTime, 100 * nTeam + 8000 * iPlayer + flNoiseTime );
					var flY = .4 * g_Noise.noise( 300 * nTeam + 3000 * iPlayer + flNoiseTime, 600 * nTeam + 5000 * iPlayer + flNoiseTime );
					var nPlayerLevel = 1 + 2 * nTeam * iPlayer;
					var nHeroID = this.m_MatchHeroIDs[nTeam][iPlayer];
					EventData[nTeam][iPlayer] = {
						heroid: nHeroID,
						alive: true,
						has_buyback: Math.random() < 0.5,
						x: flX,
						y: flY,
						team: nTeam,
						healthpoints: parseInt( 50 * flCurTime ) % 1000,
						maxhealthpoints: 1000,
						healthregenrate: 2.23,
						manapoints: parseInt( 50 * flCurTime ) % 500,
						maxmanapoints: 500,
						manaregenrate: 5.323,
						level: nPlayerLevel,
						name: this.m_PlayerNames[nTeam][iPlayer],
						intelligence: 10,
						agility: 10,
						strength: 10,
						damage: 10,
						movespeed: 10,
						armor: 10,
						kill_count: 10 * ( iPlayer + 1 ),
						death_count: 1 * ( iPlayer + 1 ),
						assists_count: 10 * ( iPlayer + 1 ),
						gold_per_min: 320 * ( iPlayer + 1 ),
						xp_per_min: 300 * ( iPlayer + 1 ),
						lh_count: 30 * ( iPlayer + 1 ),
						denies_count: 20 * ( iPlayer + 1 ),
						net_gold: 7000 * ( iPlayer + 1 ),
						hero_damage: 1500 * ( iPlayer + 1 ),
						tower_damage: 300 * ( iPlayer + 1 ),
						hero_healing: 20 * ( iPlayer + 1 ),
						accountid: 100 * nTeam + iPlayer,
						gold: parseInt( Math.random() * 10000 ),
						items: {},
						stashitems: {},
						abilitylevels: [],
						levelpoints: [],
						itemshoppinglist: []
					};

					for ( var iSlot = 0; iSlot < DOTA_CONSTS.NUM_ITEM_SLOTS; ++iSlot )
					{
						EventData[nTeam][iPlayer].items[iSlot] = this.m_MatchItems[nTeam][iPlayer][iSlot];
						EventData[nTeam][iPlayer].stashitems[iSlot] = this.m_MatchStashItems[nTeam][iPlayer][iSlot];
					}

					var cHeroAbilities = g_rgHeroData[nHeroID].abilities.length;
					for ( var iAbility = 0; iAbility < cHeroAbilities; ++iAbility )
					{
						var nLevel = parseInt( Math.random() * 1000 ) % 4;
						EventData[nTeam][iPlayer].abilitylevels.push( nLevel );
					}

					// Randomly distribute level points into abilities
					for ( var nLevel = 1; nLevel <= nPlayerLevel; ++nLevel )
					{
						var iAbility = parseInt( Math.random() * 1000 ) % cHeroAbilities;

						if ( undefined === g_rgHeroData[nHeroID].abilities[iAbility] )
						{
							console.log( 'Debug me: hero ID = ' + nHeroID + '; ability = ' + iAbility );
						}

						EventData[nTeam][iPlayer].levelpoints.push( g_rgHeroData[nHeroID].abilities[iAbility].name );
					}

					var cShoppingItems = this.m_MatchShoppingItems[nTeam][iPlayer].length;
					for ( var iItem = 0; iItem < cShoppingItems; ++iItem )
					{
						EventData[nTeam][iPlayer].itemshoppinglist.push( this.m_MatchShoppingItems[nTeam][iPlayer][iItem] );
					}
				}
			}

			this.SetChunkData( 'players', EventData );

			// Schedule next player message
			this.m_flNextPlayerUpdateTime = flCurTime + 0.1 + Math.random() * 0.05;
		},

		SimulateBuildingData: function( flCurTime, flElapsed )
		{
			if ( undefined !== this.m_flNextBuildingUpdateTime && ( flCurTime < this.m_flNextBuildingUpdateTime ) )
				return

			var rgBuildings = {};

			var strTowerType = 'tower';

			for ( var nTeam = DOTA_CONSTS.TEAM_RADIANT; nTeam <= DOTA_CONSTS.TEAM_DIRE; ++nTeam )
			{
				// Populate the event with building data
				var bRadiant = nTeam == DOTA_CONSTS.TEAM_RADIANT;
				var flSign = bRadiant ? 1 : -1;
				var bDestroyed = false;
				var strLane;

				// Mid
				strLane = 'mid';
				this.AddBuildingData( rgBuildings, nTeam, strTowerType, strLane, 1, bDestroyed, flSign * -0.05, flSign * -0.05, Math.random() );
				this.AddBuildingData( rgBuildings, nTeam, strTowerType, strLane, 2, bDestroyed, flSign * -0.20, flSign * -0.20, Math.random() );
				this.AddBuildingData( rgBuildings, nTeam, strTowerType, strLane, 3, bDestroyed, flSign * -0.29, flSign * -0.29, Math.random() );

				// Bottom (for radiant)
				var strLane = bRadiant ? 'bottom' : 'top';
				this.AddBuildingData( rgBuildings, nTeam, strTowerType, strLane, 1, bDestroyed, flSign *  0.36, flSign * -0.40, Math.random() );
				this.AddBuildingData( rgBuildings, nTeam, strTowerType, strLane, 2, bDestroyed, flSign * -0.03, flSign * -0.44, Math.random() );
				this.AddBuildingData( rgBuildings, nTeam, strTowerType, strLane, 3, bDestroyed, flSign * -0.23, flSign * -0.42, Math.random() );

				// Top (for radiant )
				strLane = bRadiant ? 'top' : 'bottom';
				this.AddBuildingData( rgBuildings, nTeam, strTowerType, strLane, 1, bDestroyed, flSign * -0.43, flSign *  0.17, Math.random() );
				this.AddBuildingData( rgBuildings, nTeam, strTowerType, strLane, 2, bDestroyed, flSign * -0.43, flSign * -0.08, Math.random() );
				this.AddBuildingData( rgBuildings, nTeam, strTowerType, strLane, 3, bDestroyed, flSign * -0.44, flSign * -0.23, Math.random() );

				// TODO: Tier4's, Barracks, ancient
			}

			this.SetChunkData( 'buildings', rgBuildings );

			// Schedule next player message
			this.m_flNextBuildingUpdateTime = flCurTime + 0.1 + Math.random() * 0.05;
		},

		AddBuildingData: function( rgBuildings, nTeam, strType, strLane, nTier, bDestroyed, flX, flY, flHeading )
		{
			rgBuildings[nTeam] = rgBuildings[nTeam] || [];
			rgBuildings[nTeam].push( { type: strType, lane: strLane, tier: nTier, x: flX, y: flY, destroyed: bDestroyed, heading: flHeading } );
		},

		SendChatMessage: function( nChannelID, strMessage )
		{
			var This = this;
			setTimeout(
				function()
				{
					g_Chat.AddMessage( nChannelID, This.GetMatchTime(), "Me", strMessage );
				},
				300 + 300 * Math.random()
			);
		},

		SetChunkData: function( strType, Data )
		{
			this.m_Data[strType] = Data;
		},

		GetStreamTime: function()
		{
			return VUtils.GetTime() - this.m_flStreamStartTime;
		},

		GetMatchTime: function()
		{
			// Gets the number of seconds since the match started
			return ( VUtils.GetTime() - this.m_flMatchStartTime );
		},

		GetRandomChatUser: function()
		{
			var rgUsers = [
				"Henrique2511",
				"Edgejob",
				"Jocker",
				"Vinvin510",
				"Tehharness",
				"Barracudathundernuts",
				"Cowara",
				"Lallen7",
				"Ja3491",
				"Q!",
				"sacrito"
			];

			return rgUsers[ parseInt( Math.random() * 1000 ) % rgUsers.length ];
		},

		GetRandomChatMessage: function()
		{
			var rgMessages = [ "" ];

			// Add some emoticons
			var strEmoticons = "";
			if ( Math.random() < 0.5 )
			{
				var cEmoticons = 3 + Math.ceil( Math.random() * 3 );
				for ( var i = 0; i < cEmoticons; ++i )
				{
					strEmoticons += this.GetRandomEmoticon();
				}
			}

			return rgMessages[ parseInt( Math.random() * 1000 ) % rgMessages.length ] + strEmoticons;
		},

		GetRandomEmoticon: function()
		{
			this.rgKeys_ = this.rgKeys_ || Object.keys( g_rgEmoticonData );
			var unEmoticonID = this.rgKeys_[ parseInt( Math.random() * 1000 ) % this.rgKeys_.length ];
			return ':' + g_rgEmoticonData[unEmoticonID].aliases[0] + ':';
		},

		BShouldTransmit: function()
		{
			return !this.m_flNextTransmitTime || ( VUtils.GetTime() >= this.m_flNextTransmitTime );
		},

		Transmit: function( Processor )
		{
			Processor.ProcessDataReceived( this.m_Data );

			// Clear and schedule
			this.m_Data.events = [];
			this.m_flNextTransmitTime += 0.1 + Math.random() * 0.15;
		}
	};

	//--------------------------------------------------------------------------------------------

	var VEmoticonsPanel = function()
	{
		this.$m_Panel = $( '#EmoticonsPanel' );
		this.$m_ImageContainer = $( '#EmoticonsPanel_Emoticons' );
		this.$m_Spinner = this.$m_Panel.find( '#EmoticonsPanelSpinner' );
		this.$m_RefreshButton = this.$m_Panel.find( '.RefreshButton' );
		this.$m_NoEmoticonsMsg = $( '#EmoticonsPanel_NoEmoticonsMsg' );
		this.$m_LoginMsg = $( '#EmoticonsPanel_LoginMsg' );
		this.m_bRequiresUpdate = true;

		var This = this;
		this.$m_RefreshButton.click(
			function()
			{
				This.Refresh();
			}
		);
	}

	VEmoticonsPanel.prototype =
	{
		constructor: VEmoticonsPanel,

		ToggleVisibility: function( $Button )
		{
			if ( this.$m_Panel.hasClass( 'Hidden' ) )
			{
				// We're about to show it
				this.$m_Panel.css( 'left', $Button.offset().left - this.$m_Panel.width() );
				this.$m_Panel.css( 'top', $Button.offset().top - $Button.height() - this.$m_Panel.height() - 10 );

				if ( this.m_bRequiresUpdate )
				{
					this.Refresh();
				}
			}
			else
			{
				// We're about to hide it
			}

			this.$m_Panel.toggleClass( 'Hidden' );
		},

		Hide: function()
		{
			this.$m_Panel.addClass( 'Hidden' );
		},

		ShowSpinner: function()
		{
			this.$m_Spinner.addClass( 'Loaded_js' );
		},

		HideSpinner: function()
		{
			this.$m_Spinner.removeClass( 'Loaded_js' );
		},

		Refresh: function()
		{
			// Remove all images from the panel
			this.$m_RefreshButton.hide();
			this.$m_ImageContainer.empty();

			this.ShowSpinner();
			this.$m_NoEmoticonsMsg.hide();
			this.$m_LoginMsg.hide();

			var This = this;
			$.get(
				g_strGetEmoticonsForUserURL,
				function( json )
				{
					This.HideSpinner();
					This.$m_RefreshButton.show();

					if ( !json.success )
					{
						if ( json.error !== undefined && json.error.not_logged_in )
						{
							This.$m_LoginMsg.fadeIn();
						}
						return;
					}

					var cEmoticons = json.access.length;
					if ( cEmoticons > 0 )
					{
						for ( var i = 0; i < cEmoticons; ++i )
						{
							var unEmoticonID = json.access[i];
							if ( undefined === g_rgEmoticonData[ unEmoticonID ] )
								continue;

							var rgCurEmoticonData = g_rgEmoticonData[ unEmoticonID ];
							var Emoticon = new VEmoticon( unEmoticonID );
							var Elem = Emoticon.GetElement();
							Elem.attr(
								'alt', rgCurEmoticonData.aliases[0]
							);

							This.$m_ImageContainer.append(
								$( '<a>' ).attr(
									'href',
									'javascript:void(0);'
								).data(
									'emoticonid',
									unEmoticonID
								).append( Elem )
							);
						}

						// Add a click handler for all emoticons added
						$( '#EmoticonsPanel_Emoticons' ).children().click(
							function()
							{
								var unEmoticonID = $( this ).data( 'emoticonid' );
								g_Chat.InsertText(
									g_Chat.GetActiveChannelID(),
									":" + g_rgEmoticonData[ unEmoticonID ].aliases[0] + ":"
								);
							}
						);
					}
					else
					{
						// Show a message
						This.$m_NoEmoticonsMsg.fadeIn();
					}

					This.m_bRequiresUpdate = false;
				}
			);
		}
	};

	//--------------------------------------------------------------------------------------------

	function BIsValidEmoticon( unEmoticonID )
	{
		return ( undefined !== g_rgEmoticonData[unEmoticonID] );
	}

	//
	// Before creating one of these, make sure it's valid (this is really just a check to make sure
	// we have emoticon data, which can potentially fail to load.
	//
	var VEmoticon = function( unEmoticonID )
	{
		this.m_unEmoticonID = unEmoticonID;

		var $Dummy = $( '#DummyEmoticon' );
		var rgEmoticonInfo = g_rgEmoticonData[unEmoticonID];
		var strAnimName = 'PlayEmoticonAnimation_' + unEmoticonID + '_' + $Dummy.width() + 'px';

		// Create an element
		var strBackgroundSize = $Dummy.width() * rgEmoticonInfo.frame_count + 'px ' + $Dummy.height() + 'px';
		this.$m_Element = $Dummy.clone().removeAttr(
			'id'
		).css(
			'background-image',
			'url("' + rgEmoticonInfo.image_url + '")'
		).css(
			'background-size',
			strBackgroundSize
		).playSpriteSheet(
			strAnimName,
			( rgEmoticonInfo.frame_count * rgEmoticonInfo.ms_per_frame / 1000 ) + 's',
			-1,	// Infinite
			$.keyframe.spriteSheet(
				{
					name: strAnimName,
					rows: 1,
					cols: rgEmoticonInfo.frame_count,
					width: 32 * rgEmoticonInfo.frame_count,
					height: 32,
					offsetX: 0,
					offsetY: 0,
					count: rgEmoticonInfo.frame_count
				}
			)
		);
	};

	VEmoticon.prototype =
	{
		constructor: VEmoticon,

		GetElement: function()
		{
			return this.$m_Element;
		},

		// For testing
		CreateSheetImage: function()
		{
			return CreateImage( g_rgEmoticonData[this.m_unEmoticonID].image_url );
		},

		CreateInfo: function()
		{
			return $( "<span>" ).html( "FRAMES: " + g_rgEmoticonData[this.m_unEmoticonID].frame_count );
		}
	};

	//--------------------------------------------------------------------------------------------

	var CGraphData = function()
	{
		this.m_KillData = null;
		this.m_RaxData = null;
		this.m_TowerData = null;
		this.m_GoldData = null;
		this.m_XPData = null;
		this.m_rgAllKills = null;
		this.m_GoldLocationData = null;
	};

	CGraphData.prototype =
	{
		Init: function( GoldData, KillData, RaxData, TowerData, XPData, GoldLocationData )
		{
			this.m_KillData = KillData;
			this.m_RaxData = RaxData;
			this.m_TowerData = TowerData;
			this.m_GoldData = GoldData;
			this.m_XPData = XPData;
			this.m_GoldLocationData = GoldLocationData;
		},

		SetKills: function( rgAllKills )
		{
			this.m_rgAllKills = rgAllKills;
		},

		ComposeObjectForGraphSystem: function()
		{
			var Data = {
				kills: [],
				buildings: [],
				gold: [],
				xp: [],
				radiant_kills: [],
				dire_kills: [],
				gold_location: [ [], [] ],
				match_time: g_Match.GetMatchTime()
			};

			// Guarantee that we always send 128 samples for each type of data.
			for ( var i = 0; i < DOTA_CONSTS.NUM_GRAPH_SAMPLES; ++i )
			{
				Data.kills.push( 1000 * ( this.m_KillData[i] || 0 ) );
				Data.buildings.push( 3000 * ( this.m_TowerData[i] || 0 ) + 5000 * ( this.m_RaxData[i] || 0 ) );
				Data.gold.push( this.m_GoldData[i] || 0 );
				Data.xp.push( this.m_XPData[i] || 0 );

				// The data for lane performance comes in a little weird - de-interleave the stats for each team.
				for ( var nTeam = DOTA_CONSTS.TEAM_RADIANT; nTeam <= DOTA_CONSTS.TEAM_DIRE; ++nTeam )
				{
					var nTeamIdx = ( nTeam == DOTA_CONSTS.TEAM_RADIANT ) ? 0 : 1;
					
					var rgLocations = [];
					for ( var nLocation = 0; nLocation < DOTA_CONSTS.NUM_STAT_LOCATIONS; ++nLocation )
					{
						var rgLocationStats = [];
						for ( var nLocationStatType = 0; nLocationStatType < DOTA_CONSTS.NUM_STAT_LOCATION_TYPES; ++nLocationStatType )
						{
							rgLocationStats.push( this.m_GoldLocationData[(nTeamIdx + 2*i)].loc_stats[nLocation].stats[nLocationStatType] || 0 );
						}
						rgLocations.push( rgLocationStats );
					}
					Data.gold_location[nTeamIdx].push( rgLocations );
				}

			}

			// Add kills
			if ( null !== this.m_rgAllKills )
			{
				// Build a list of players indexed by player id. We can't cache this trivially elsewhere given the transient nature
				// of watch but we'll do it here.

				var PlayerIDToPlayerMap = {};
				for ( var nTeam = DOTA_CONSTS.TEAM_RADIANT; nTeam <= DOTA_CONSTS.TEAM_DIRE; ++nTeam )
				{
					for ( var iPlayer = 0; iPlayer < DOTA_CONSTS.PLAYERS_PER_TEAM; ++iPlayer )
					{
						var Player = g_Match.GetPlayer( nTeam, iPlayer );
						PlayerIDToPlayerMap[Player.GetPlayerID()] = Player;
					}
				}

				for ( var i = 0, cLen = this.m_rgAllKills.length; i < cLen; ++i )
				{
					var nKilledPlayerID = this.m_rgAllKills[i].player_id;
					var Player = PlayerIDToPlayerMap[nKilledPlayerID];
					var CurKillData = { heroid: Player.GetHeroID(), time: this.m_rgAllKills[i].death_time };

					if ( Player.GetTeam() === DOTA_CONSTS.TEAM_RADIANT )
					{
						Data.radiant_kills.push( CurKillData );
					}
					else
					{
						Data.dire_kills.push( CurKillData );
					}
				}
			}

			return Data;
		}
	};

	//--------------------------------------------------------------------------------------------

	var CChat = function()
	{
		this.$m_Chat = $( '#Chat' );
		this.m_ChannelData = {};
		this.m_EmoticonsPanel = new VEmoticonsPanel();
		this.m_ChannelIDs = [];
		this.m_nActiveChannelID = -1;
		this.m_cChannels = 0;

		// Go through all emoticons and create a mapping from each alias to its emoticon ID for faster lookup
		this.m_EmoticonAliasToIDMap = {};

		for ( var unEmoticonID in g_rgEmoticonData )
		{
			var rgCurEmoticonData = g_rgEmoticonData[unEmoticonID];
			for ( var iAlias = 0; iAlias < rgCurEmoticonData.aliases.length; ++iAlias )
			{
				this.m_EmoticonAliasToIDMap[ rgCurEmoticonData.aliases[iAlias] ] = unEmoticonID;
			}
		}
	};

	CChat.prototype =
	{
		constructor: CChat,

		Init: function()
		{
			// TODO
			this.m_nActiveChannelID = 1;
			this.AddChannel( this.m_nActiveChannelID, "All Chat" );
		},

		OnBroadcastIDChanged: function( strBroadcastID )
		{
			SendMessageToIFrame( this.$m_Chat, g_strSteamBroadcastOrigin, { msg: 'OnVideoIFrameBroadcastIDChanged', broadcastid: strBroadcastID } );
		},

		GetChannelElement: function( nChannelID )
		{
			return $( '#ChatChannel_' + nChannelID );
		},

		GetActiveChannelID: function()
		{
			return this.m_nActiveChannelID;
		},

		AddChannel: function( nChannelID, strChannelDisplayName )
		{
			var $Elem = $( '#DummyChatChannel' ).clone().attr( 'id', 'ChatChannel_' + nChannelID );

			this.m_ChannelData[nChannelID] = {
				display_name: strChannelDisplayName,
				elem: $Elem
			};

			var $MessageBoxText = $Elem.find( '.MessageBoxText' );
			$MessageBoxText.data( 'channel_id', nChannelID );

			this.$m_Chat.append( $Elem );

			// Bind some events to the text area for sending messages
			var This = this;
			$MessageBoxText.focus(
				function()
				{
					This.ClearActiveChannelTextIfDefault();
				}
			).blur(
				function()
				{
					var $This = $( this );
					if ( !$This.val().length )
					{
						$This.val( $This.data( 'defaulttext' ) );
					}
				}
			).keypress(
				function( e )
				{
					if ( e.which != 13 )
						return;
					
					var $This = $( this );
					This.SendMessage( $This.data( 'channel_id' ), $This.val() );
					$This.val( "" );

					e.preventDefault();
				}
			).click(
				function()
				{
					This.m_EmoticonsPanel.Hide();
				}
			);

			$Elem.find( '.EmoticonsButton' ).click(
				function()
				{
					This.m_EmoticonsPanel.ToggleVisibility( $( this ) );
				}
			);

			return this.m_ChannelIDs.push( this.m_cChannels++ );
		},

		SendMessage: function( nChannelID, strMessage )
		{
			// TODO
			g_StreamSimulator.SendChatMessage( nChannelID, strMessage );
		},

		GetActiveChannelTextAreaElement: function()
		{
			return this.GetChannelElement( this.GetActiveChannelID() ).find( '.MessageBoxText' );
		},

		InsertText: function( nChannelID, strText )
		{
			this.ClearActiveChannelTextIfDefault();

			var $TextArea = this.GetActiveChannelTextAreaElement();
			var nPos = $TextArea.prop( 'selectionStart' ); 
			if ( nPos )
			{
				var strCurrent = $TextArea.val();
				$TextArea.val( strCurrent.substring( 0, nPos ) + strText + strCurrent.substring( nPos ) );

				// Set the focus back to the text area to the expected position, so subsequent clicks will place the emoticons in order,
				// where the cursor originally was.
				var nNewPos = nPos + strText.length;
				SetSelectionRange( $TextArea[0], nNewPos, nNewPos );
			}
			else
			{
				$TextArea.val( strText );
			}
		},

		ClearActiveChannelTextIfDefault: function()
		{
			var $Elem = this.GetActiveChannelTextAreaElement();
			if ( $Elem.data( 'defaulttext' ) !== $Elem.val() )
				return;

			$Elem.val( "" );
		},

		ReplaceEmoticonAliases: function( strMessage )
		{
			if ( strMessage.indexOf( ':' ) === -1 )
				return strMessage;

			var iMatched = 0;
			var cMaxMatch = 10;

			var strResult = strMessage;

			for ( var strAlias in this.m_EmoticonAliasToIDMap )
			{
				do
				{
					var strFind = ':' + strAlias + ':';
					if ( -1 === strResult.indexOf( strFind ) )
						break;

					var strReplace = '<div class="Emoticon" data-emoticonid="' + this.m_EmoticonAliasToIDMap[strAlias] + '"></div>';
					strResult = strResult.replace( strFind, strReplace );
					++iMatched;
				}
				while ( iMatched < cMaxMatch );

				// Don't do more than a handful
				if ( iMatched >= cMaxMatch )
					break;
			}

			return strResult;
		},

		AddMessage: function( nChannelID, flTimestamp, strUsername, strMessage )
		{
			// TODO: Optimize pruning and anything else here.
			var Channel = this.GetChannelData( nChannelID );

			var $MessageList = Channel.elem.find( '.MessageList' );	// This is a <ul>
			var $DummyChatMessage = $( '#DummyChatMessage' );

			var $LI = $DummyChatMessage.clone().removeAttr( 'id' );
			$LI.find( '.Timestamp' ).html( VUtils.FormatTimestamp( flTimestamp ) );
			$LI.find( '.Username' ).html( strUsername + ":" );
			$LI.html( $LI.html() + this.ReplaceEmoticonAliases( strMessage ) );
			$LI.find( 'div' ).each(
				function()
				{
					var $This = $( this );
					var unEmoticonID = $This.data( 'emoticonid' );
					if ( undefined === unEmoticonID )
						return;

					var Emoticon = new VEmoticon( unEmoticonID );
					$This.append( Emoticon.GetElement() );
				}
			);
			$LI.appendTo( $MessageList );

			// Scroll to bottom, unless the user has scrolled up
			var $ChannelMessageText = Channel.elem.find( '.Messages' );
			$ChannelMessageText.scrollTop( $ChannelMessageText[0].scrollHeight );

			// Prune old chat messages
			var cMaxMessages = 200;
			var cMessages = $MessageList.children().length;
			if ( cMessages >= cMaxMessages )
			{
				$MessageList.children().filter( ":lt(" + ( cMessages - cMaxMessages ) + ")" ).remove();
			}
		},

		GetChannelData: function( nChannelID )
		{
			return this.m_ChannelData[nChannelID];
		}
	};

	//--------------------------------------------------------------------------------------------

	var CRect = function()
	{
		this.m_nX = null;
		this.m_nY = null;
		this.m_nW = null;
		this.m_nH = null;
	};

	CRect.prototype =
	{
		constructor: CRect,

		Set: function( nX, nY, nW, nH )
		{
			this.m_nX = nX;
			this.m_nY = nY;
			this.m_nW = nW;
			this.m_nH = nH;
		},

		X: function() { return this.m_nX; },
		Y: function() { return this.m_nY; },
		W: function() { return this.m_nW; },
		H: function() { return this.m_nH; },

		BIsPointInRect: function( nX, nY )
		{
			return nX >= this.m_nX &&
			       nX <= ( this.m_nX + this.m_nW ) &&
			       nY >= this.m_nY &&
			       nY <= ( this.m_nY + this.m_nH );
		}
	};

	//--------------------------------------------------------------------------------------------

	var CMinimap = function()
	{
		this.$m_Minimap = $( '#Minimap' );
		this.$m_Canvas = $( '#MinimapCanvas' );
		this.$m_TempCanvas = $( '#MinimapCanvas_Temp' );
		this.$m_Background = this.$m_Minimap.find( '.Background' );

		this.m_flMinimapScale = null;
		this.m_flMinimapWidth = null;
		this.m_flMinimapHeight = null;

		this.$m_TowerImages = {};
		this.$m_BarracksImages = {};
		this.$m_AncientImage = {};

		this.m_flInitTime = -1;

		this.m_Data = {
			heroes: {},
			buildings: {}
		};

		this.m_Data.heroes[DOTA_CONSTS.TEAM_RADIANT] = {};
		this.m_Data.heroes[DOTA_CONSTS.TEAM_DIRE] = {};

		this.$m_HeroImages = {};
		this.m_HeroBoxes = {};

		for ( var nTeam = DOTA_CONSTS.TEAM_RADIANT; nTeam <= DOTA_CONSTS.TEAM_DIRE; ++nTeam )
		{
			this.$m_HeroImages[nTeam] = [];
			this.m_HeroBoxes[nTeam] = []
			for ( var iHero = 0; iHero < DOTA_CONSTS.PLAYERS_PER_TEAM; ++iHero )
			{
				// Image DOM element for the mini-hero image
				this.$m_HeroImages[nTeam].push( $( '#DummyMiniHeroImage' ).clone().attr( 'id', '#MinimapMiniHero_' + nTeam + '_' + iHero ) );
				this.m_HeroBoxes[nTeam].push( new CRect() );
			}

			var strTeamName = GetRadiantDireFromTeam( nTeam );

			var $Tower = $( '#' + strTeamName + 'MinimapTower' );
			var $TowerAngled = $( '#' + strTeamName + 'MinimapTowerAngled' );
			var $Barracks = $( '#' + strTeamName + 'MinimapBarracks' );
			var $BarracksAngled = $( '#' + strTeamName + 'MinimapBarracksAngled' );
			var $Ancient = $( '#' + strTeamName + 'MinimapAncient' );

			this.$m_TowerImages[nTeam] = {};
			this.$m_TowerImages[nTeam][DOTA_CONSTS.DOTA_LANE_TOP] = $Tower;
			this.$m_TowerImages[nTeam][DOTA_CONSTS.DOTA_LANE_MIDDLE] = $TowerAngled;
			this.$m_TowerImages[nTeam][DOTA_CONSTS.DOTA_LANE_BOTTOM] = $Tower;

			this.$m_BarracksImages[nTeam] = {};
			this.$m_BarracksImages[nTeam][DOTA_CONSTS.DOTA_LANE_TOP] = $Barracks;
			this.$m_BarracksImages[nTeam][DOTA_CONSTS.DOTA_LANE_MIDDLE] = $BarracksAngled;
			this.$m_BarracksImages[nTeam][DOTA_CONSTS.DOTA_LANE_BOTTOM] = $Barracks;

			this.$m_AncientImage[nTeam] = $Ancient;
		}

		this.m_MouseHoverHeroData = null;
		this.m_nHeroIconSize = null;

		this.m_flNextRenderTime = 0;
	};

	CMinimap.prototype =
	{
		constructor: CMinimap,

		Init: function()
		{
			this.SetupMouseHandlers();

			// Fade in the minimap once the background image has loaded
			var This = this;
			CallCallbackOnImageLoad(
				this.$m_Background,
				function( $Img )
				{
					FadeInLoadedContent( This.$m_Minimap );
				}
			);
		},

		X_: function( flX ) { return 1.1 * ( this.m_flMinimapScale * -25 + VUtils.Lerp( 0.5 + flX, 0, this.m_flMinimapWidth ) ); },
		Y_: function( flY ) { return 1.1 * ( this.m_flMinimapScale * -8 + VUtils.Lerp( 0.5 + flY, this.m_flMinimapHeight, 0 ) ); },

		SetupMouseHandlers: function()
		{
			var This = this;

			this.$m_Minimap.click(
				function()
				{
					if ( This.m_MouseHoverHeroData === null )
						return;

					g_UIManager.ShowPlayerDetailsPanel( This.m_MouseHoverHeroData.team, This.m_MouseHoverHeroData.player_index );
				}
			).mousemove(
				function( e )
				{
					var nRelX = e.pageX - $( this ).offset().left;
					var nRelY = e.pageY - $( this ).offset().top;

					var HoverHero = null;
					var flClosestHeroDistSquaredToMouse = Number.MAX_VALUE;

					// Go through all heroes on the minimap and see if we are within its bounds.
					// We go through all heroes, since heroes can overlap and we need to select
					// the one closest to the mouse.
					for ( var nTeam = DOTA_CONSTS.TEAM_RADIANT; nTeam <= DOTA_CONSTS.TEAM_DIRE; ++nTeam )
					{
						for ( var iPlayer = 0; iPlayer < DOTA_CONSTS.PLAYERS_PER_TEAM; ++iPlayer )
						{
							var Box = This.m_HeroBoxes[nTeam][iPlayer];
							if ( Box.BIsPointInRect( nRelX, nRelY ) )
							{
								// Get distance squared to mouse
								var nDx = nRelX - Box.X();
								var nDy = nRelY - Box.Y();
								var flDistSq = ( nDx * nDx ) + ( nDy * nDy );

								if ( flDistSq < flClosestHeroDistSquaredToMouse )
								{
									HoverHero = { team: nTeam, player_index: iPlayer };
								}
							}
						}
					}

					if ( !HoverHero )
					{
						This.m_MouseHoverHeroData = null;
						$( this ).removeClass( 'PointerCursor' );
						return;
					}

					// Figure out which
					This.m_MouseHoverHeroData = HoverHero;
					$( this ).addClass( 'PointerCursor' );
				}
			);
		},

		RenderBuilding_: function( Building, Context )
		{
			this.rgPos_ = this.rgPos_ || [ null, null ];
			Building.GetPosition( this.rgPos_ );
			var nPosX = this.X_( this.rgPos_[0] );
			var nPosY = this.Y_( this.rgPos_[1] );
			var nSize = 7;

			Context.save();
			Context.translate( nPosX, nPosY );

			var nType = Building.GetType();
			var nTeam = Building.GetTeam();
			var nLane = Building.GetLane();
			var $Img = null;
			var flScale = 1;

			switch( nType )
			{
			case 0:	// Towers
				$Img = this.$m_TowerImages[nTeam][nLane];
				break;

			case 1:	// Barracks
				$Img = this.$m_BarracksImages[nTeam][nLane];
				break;

			case 2:	// Ancients
				flScale = 2.0;
				$Img = this.$m_AncientImage[nTeam];
				break;

			default:
				VUtils.AssertMsg( 0, "Invalid building type " + nType );
				break;
			}

			var nSize = flScale * this.m_nBuildingSize;
			var nOffset = -nSize * 0.5;

			if ( $Img )
			{
				Context.drawImage( $Img[0], nOffset, nOffset, nSize, nSize );
			}

			Context.restore();
		},

		BShouldUpdate: function( flCurTime )
		{
			return ( 0 === this.m_flNextRenderTime ) || ( this.m_flNextRenderTime <= flCurTime );
		},

		Think: function( flCurTime, flElapsed )
		{
			var rgPos = [ null, null ];

			// Update the src attribute for the mini-hero's image if necessary
			for ( var nTeam = DOTA_CONSTS.TEAM_RADIANT; nTeam <= DOTA_CONSTS.TEAM_DIRE; ++nTeam )
			{
				var bRadiant = nTeam == DOTA_CONSTS.TEAM_RADIANT;

				for ( var iPlayer = 0; iPlayer < DOTA_CONSTS.PLAYERS_PER_TEAM; ++iPlayer )
				{
					var Player = g_Match.GetPlayer( nTeam, iPlayer );
					if ( !Player.BIsValid() )
						continue;

					var $Elem = this.$m_HeroImages[nTeam][iPlayer];
					var strSrcURL = $Elem.attr( 'src' );
					var nElemHeroIDData = $Elem.data( 'heroid' );
					var nHeroID = Player.GetHeroID();
					var bHeroIDAttributeInvalid = !nElemHeroIDData || ( nElemHeroIDData !== nHeroID );

					if ( !strSrcURL || !strSrcURL.length || bHeroIDAttributeInvalid )
					{
						$Elem.attr(
							'src', 
							GetMiniHeroIconURL( nHeroID )
						).data(
							'heroid',
							nHeroID
						);
					}

					// Update positions, used for mouse interaction and rendering
					if ( Player.BIsAlive() && Player.BIsValid() )
					{
						var img = this.$m_HeroImages[nTeam][iPlayer][0];
						if ( img.complete )
						{
							Player.GetPosition( rgPos );

							var flX = this.X_( rgPos[0] );
							var flY = this.Y_( rgPos[1] );
							var nSize = this.m_nHeroIconSize;
							this.m_HeroBoxes[nTeam][iPlayer].Set( flX, flY, nSize, nSize );
						}
					}
				}
			}

			this.m_flNextRenderTime = flCurTime + DOTA_CONSTS.MINIMAP_UPDATE_INTERVAL;
		},

		Render: function()
		{
			var Canvas = this.$m_Canvas[0];
			var Context = Canvas.getContext( '2d' );
			var TempCanvas = this.$m_TempCanvas[0];
			var TempContext = TempCanvas.getContext( '2d' );

			var strGrayColor = '#414142';

			Context.clearRect( 0, 0, Canvas.width, Canvas.height );

			// Draw all buildings
			var rgBuildings = g_Match.GetBuildings();
			for ( var strBuildingKey in rgBuildings )
			{
				var Building = rgBuildings[strBuildingKey];

				Context.beginPath();
				this.RenderBuilding_( Building, Context );
				Context.fillStyle = Building.destroyed ? strGrayColor : ( Building.team == DOTA_CONSTS.TEAM_RADIANT ? DOTA_CONSTS.COLOR_RADIANT : DOTA_CONSTS.COLOR_DIRE );
				Context.closePath();
				Context.fill();
			}

			// Draw heroes on minimap, unless they're dead
			for ( var nTeam = DOTA_CONSTS.TEAM_RADIANT; nTeam <= DOTA_CONSTS.TEAM_DIRE; ++nTeam )
			{
				var bRadiant = nTeam == DOTA_CONSTS.TEAM_RADIANT;

				for ( var iPlayer = 0; iPlayer < DOTA_CONSTS.PLAYERS_PER_TEAM; ++iPlayer )
				{
					var Player = g_Match.GetPlayer( nTeam, iPlayer );
					if ( !Player.BIsAlive() || !Player.BIsValid() )
						continue;

					var img = this.$m_HeroImages[nTeam][iPlayer][0];
					if ( !img.complete )
						continue;

					// Draw a stroke using the source image
					var bHoverHero = this.m_MouseHoverHeroData && this.m_MouseHoverHeroData.team === nTeam && this.m_MouseHoverHeroData.player_index === iPlayer;
					TempContext.save();
					TempContext.fillStyle = bHoverHero ? DOTA_CONSTS.COLOR_MINIMAP_HOVER_STROKE : ( bRadiant ? DOTA_CONSTS.COLOR_RADIANT : DOTA_CONSTS.COLOR_DIRE );
					TempContext.fillRect( 0, 0, TempCanvas.width, TempCanvas.height );

					TempContext.globalCompositeOperation = 'destination-atop';
					TempContext.drawImage( img, 0, 0, TempCanvas.width, TempCanvas.height );
					TempContext.restore();

					Context.globalAlpha = 1;
					var Box = this.m_HeroBoxes[nTeam][iPlayer];
					var nImageWidth = Box.W();	// NOTE: 1:1 aspect ratio
					var nStrokeImageSize = nImageWidth * 1.2;
					var nBgOffset = ( nStrokeImageSize - nImageWidth ) * 0.5;
					var nImgSizeHalf = nImageWidth * 0.5;

					// Render the stroke
					Context.drawImage(
						TempCanvas,
						Box.X() - nBgOffset - nImgSizeHalf,
						Box.Y() - nBgOffset - nImgSizeHalf,
						nStrokeImageSize,
						nStrokeImageSize
					);

					// Render the hero
					Context.drawImage(
						img,
						Box.X() - nImgSizeHalf,
						Box.Y() - nImgSizeHalf,
						Box.W(),
						Box.H()
					);
				}
			}
		},

		OnWindowResize: function()
		{
			this.m_flMinimapWidth = this.$m_Minimap.width();
			this.m_flMinimapHeight = this.m_flMinimapWidth;
			this.m_flMinimapScale = this.m_flMinimapWidth / 400;
			this.$m_Canvas.attr( 'width', this.m_flMinimapWidth ).attr( 'height', this.m_flMinimapWidth );
			this.$m_TempCanvas.attr( 'width', parseInt( this.$m_Minimap.width()/10 ) ).attr( 'height', parseInt( this.$m_Minimap.height()/10 ) );
			this.m_nHeroIconSize = parseInt( this.$m_Minimap.width() / 12 );
			this.m_nBuildingSize = parseInt( this.m_nHeroIconSize / 2 );
		}
	};

	//--------------------------------------------------------------------------------------------

	var CItem = function()
	{
		// Indexes into g_rgItemData
		this.m_strKey = null;
	};

	CItem.prototype =
	{
		constructor: CItem,

		SetKey: function( strKey )
		{
			this.m_strKey = strKey;
		},

		GetKey: function()
		{
			return this.m_strKey;
		},

		ClearItem: function()
		{
			this.m_strKey = null;
		}
	};

	//--------------------------------------------------------------------------------------------

	var VShoppingItem = function( flTime, bSold, nItemID )
	{
		this.m_strTime = VUtils.FormatTimestamp( flTime );
		this.m_bSold = bSold;
		this.m_nItemID = nItemID;
	};

	VShoppingItem.prototype =
	{
		constructor: VShoppingItem,

		GetTime: function()
		{
			return this.m_strTime;
		},

		BWasSold: function()
		{
			return this.m_bSold;
		},

		GetItemID: function()
		{
			return this.m_nItemID;
		}
	};

	//--------------------------------------------------------------------------------------------

	var CPlayer = function( iPlayer )
	{
		this.m_iPlayer = iPlayer;	// In [0,4]

		this.m_nPlayerID = null;	// Unique across all 10 players
		this.m_nTeam = null;
		this.m_nHeroID = null;
		this.m_nLevel = null;
		this.m_strName = null;
		this.m_unAccountID = null;
		this.m_rgHealthPoints = new Float32Array( 2 );	// Current, target
		this.m_nMaxHealthPoints = null;
		this.m_flHealthRegenRate = null;
		this.m_rgManaPoints = new Float32Array( 2 );	// Current, target
		this.m_nMaxManaPoints = null;
		this.m_flManaRegenRate = null;
		this.m_nRespawnTime = null;
		this.m_bHasBuyback = null;

		this.m_nBaseIntelligence = null;
		this.m_nBaseAgility = null;
		this.m_nBaseStrength = null;
		this.m_nBaseDamage = null;
		this.m_nBaseMoveSpeed = null;
		this.m_nBaseArmor = null;
		this.m_nIntelligence = null;
		this.m_nAgility = null;
		this.m_nStrength = null;
		this.m_nDamage = null;
		this.m_nMoveSpeed = null;
		this.m_nArmor = null;

		this.m_cKills = null;
		this.m_cDeaths = null;
		this.m_nGoldPerMin = null;
		this.m_nXPPerMin = null;
		this.m_cLastHits = null;
		this.m_cDenies = null;
		this.m_nNetGold = null;
		this.m_nHeroDamage = null;
		this.m_nTowerDamage = null;
		this.m_nHealingProvided = null;
		this.m_bHasUlt = null;
		this.m_bHasUltMana = null;
		this.m_nUltCooldown = null;

		this.m_rgPos = [
			new Float32Array( 2 ),	// X current, X target
			new Float32Array( 2 )	// Y current, Y target
		];

		this.m_rgItems = [];
		this.m_rgStashItems = [];
		for ( var iSlot = 0; iSlot < DOTA_CONSTS.NUM_ITEM_SLOTS; ++iSlot )
		{
			this.m_rgItems.push( new CItem() );
			this.m_rgStashItems.push( new CItem() );
		}

		this.m_rgAbilityLevels = [];
		for ( var iAbility = 0; iAbility < DOTA_CONSTS.MAX_HERO_ABILITIES_INCLUDING_ATTRIBUTE_BONUS; ++iAbility )
		{
			this.m_rgAbilityLevels.push( null );
		}

		this.m_rgLevelPoints = [];
		for ( var iLevel = 0; iLevel < DOTA_CONSTS.MAX_HERO_LEVELS; ++iLevel )
		{
			this.m_rgLevelPoints.push( null );
		}
	}

	CPlayer.prototype =
	{
		constructor: CPlayer,

		BIsValid: function()
		{
			return	null !== this.m_nPlayerID &&
				null !== this.m_nTeam &&
				null !== this.m_nHeroID &&
				null !== this.m_nLevel &&
				null !== this.m_strName &&
				null !== this.m_unAccountID &&
				null !== this.m_nMaxHealthPoints &&
				null !== this.m_flHealthRegenRate &&
				null !== this.m_nMaxManaPoints &&
				null !== this.m_flManaRegenRate &&
				null !== this.m_bHasBuyback &&
				null !== this.m_nBaseIntelligence &&
				null !== this.m_nBaseAgility &&
				null !== this.m_nBaseStrength &&
				null !== this.m_nBaseDamage &&
				null !== this.m_nBaseMoveSpeed &&
				null !== this.m_nBaseArmor &&
				null !== this.m_nIntelligence &&
				null !== this.m_nAgility &&
				null !== this.m_nStrength &&
				null !== this.m_nDamage &&
				null !== this.m_nMoveSpeed &&
				null !== this.m_nArmor &&
				null !== this.m_cKills &&
				null !== this.m_cDeaths &&
				null !== this.m_nGoldPerMin &&
				null !== this.m_nXPPerMin &&
				null !== this.m_cLastHits &&
				null !== this.m_cDenies &&
				null !== this.m_nNetGold &&
				null !== this.m_nHeroDamage &&
				null !== this.m_nTowerDamage &&
				null !== this.m_nHealingProvided &&
				null !== this.m_bHasUlt &&
				null !== this.m_bHasUltMana &&
				null !== this.m_nUltCooldown &&
				null !== this.m_rgPos[0][0] &&
				null !== this.m_rgPos[1][0] &&
				null !== this.m_rgPos[0][1] &&
				null !== this.m_rgPos[1][1];
		},

		SetPlayerID: function( nPlayerID )
		{
			this.m_nPlayerID = nPlayerID;
		},

		GetPlayerID: function()
		{
			return this.m_nPlayerID;
		},

		SetTeam: function( nTeam )
		{
			this.m_nTeam = nTeam;
		},

		GetTeam: function()
		{
			return this.m_nTeam;
		},

		SetLevel: function( nLevel )
		{
			this.m_nLevel = nLevel;
		},

		GetLevel: function()
		{
			return this.m_nLevel;
		},

		SetName: function( strName )
		{
			this.m_strName = strName;
		},

		GetName: function()
		{
			return this.m_strName;
		},

		SetAccountID: function( nAccountID )
		{
			this.m_unAccountID = nAccountID;
		},

		GetAccountID: function()
		{
			return this.m_unAccountID;
		},

		SetHealthPoints: function( nHealthPoints )
		{
			// Sets target
			this.m_rgHealthPoints[1] = nHealthPoints;

			if ( 0.0 === this.m_rgHealthPoints[0] )
			{
				this.m_rgHealthPoints[0] = nHealthPoints;
			}
		},

		GetHealthPoints: function()
		{
			// Returns smoothed
			return this.m_rgHealthPoints[0];
		},

		SetMaxHealthPoints: function( nMaxHealthPoints )
		{
			this.m_nMaxHealthPoints = nMaxHealthPoints;
		},

		GetMaxHealthPoints: function()
		{
			return this.m_nMaxHealthPoints;
		},

		SetHealthRegenRate: function( flRegenRate )
		{
			this.m_flHealthRegenRate = flRegenRate;
		},

		GetHealthRegenRate: function()
		{
			return this.m_flHealthRegenRate;
		},

		GetHealthPointsPercent: function()
		{
			return 100 * this.GetHealthPoints() / this.m_nMaxHealthPoints;
		},

		SetManaPoints: function( nManaPoints )
		{
			// Sets target
			this.m_rgManaPoints[1] = nManaPoints;
		},

		GetManaPoints: function()
		{
			// Returns smoothed
			return this.m_rgManaPoints[0];
		},

		SetMaxManaPoints: function( nMaxManaPoints )
		{
			this.m_nMaxManaPoints = nMaxManaPoints;
		},

		GetMaxManaPoints: function()
		{
			return this.m_nMaxManaPoints;
		},

		SetManaRegenRate: function( flRegenRate )
		{
			this.m_flManaRegenRate = flRegenRate;
		},

		GetManaRegenRate: function()
		{
			return this.m_flManaRegenRate;
		},

		GetManaPointsPercent: function()
		{
			return 100 * this.m_rgManaPoints[0] / this.m_nMaxManaPoints;
		},

		BHasBuyback: function()
		{
			return this.m_bHasBuyback;
		},

		SetHasBuyback: function( bHasBuyback )
		{
			this.m_bHasBuyback = bHasBuyback;
		},

		BIsAlive: function()
		{
			return this.m_nRespawnTime === undefined || this.m_nRespawnTime === 0;
		},

		GetRespawnTime: function()
		{
			return this.m_nRespawnTime;
		},

		SetRespawnTime: function( nRespawnTime )
		{
			this.m_nRespawnTime = nRespawnTime;
		},

		GetHeroID: function()
		{
			return this.m_nHeroID;
		},

		BHasHero: function()
		{
			return BIsValidHero( this.m_nHeroID );
		},

		SetHeroID: function( nHeroID )
		{
			VUtils.Assert( nHeroID > 0 );
			this.m_nHeroID = nHeroID;
		},

		GetBaseIntelligence: function()
		{
			return this.m_nBaseIntelligence;
		},

		GetBaseAgility: function()
		{
			return this.m_nBaseAgility;
		},

		GetBaseStrength: function()
		{
			return this.m_nBaseStrength;
		},

		GetBaseDamage: function()
		{
			return this.m_nBaseDamage;
		},

		GetBaseMoveSpeed: function()
		{
			return this.m_nBaseMoveSpeed;
		},

		GetBaseArmor: function()
		{
			return this.m_nBaseArmor;
		},

		GetIntelligence: function()
		{
			return this.m_nIntelligence;
		},

		GetAgility: function()
		{
			return this.m_nAgility;
		},

		GetStrength: function()
		{
			return this.m_nStrength;
		},

		GetDamage: function()
		{
			return this.m_nDamage;
		},

		GetMoveSpeed: function()
		{
			return this.m_nMoveSpeed;
		},

		GetArmor: function()
		{
			return this.m_nArmor;
		},

		SetBaseIntelligence: function( nVal )
		{
			this.m_nBaseIntelligence = nVal;
		},

		SetBaseAgility: function( nVal )
		{
			this.m_nBaseAgility = nVal;
		},

		SetBaseStrength: function( nVal )
		{
			this.m_nBaseStrength = nVal;
		},

		SetBaseDamage: function( nVal )
		{
			this.m_nBaseDamage = nVal;
		},

		SetBaseMoveSpeed: function( nVal )
		{
			this.m_nBaseMoveSpeed = nVal;
		},

		SetBaseArmor: function( nVal )
		{
			this.m_nBaseArmor = nVal;
		},

		SetIntelligence: function( nVal )
		{
			this.m_nIntelligence = nVal;
		},

		SetAgility: function( nVal )
		{
			this.m_nAgility = nVal;
		},

		SetStrength: function( nVal )
		{
			this.m_nStrength = nVal;
		},

		SetDamage: function( nVal )
		{
			this.m_nDamage = nVal;
		},

		SetMoveSpeed: function( nVal )
		{
			this.m_nMoveSpeed = nVal;
		},

		SetArmor: function( nVal )
		{
			this.m_nArmor = nVal;
		},

		GetPosition: function( out_rgPos )
		{
			// This gets the smoothed/interpolated position
			out_rgPos[0] = this.m_rgPos[0][0];
			out_rgPos[1] = this.m_rgPos[1][0];
		},

		SetPosition: function( flX, flY )
		{
			// This sets the target
			this.m_rgPos[0][1] = flX;
			this.m_rgPos[1][1] = flY;

			if ( null === this.m_rgPos[0][0] || null === this.m_rgPos[1][0] )
			{
				this.m_rgPos[0][0] = flX;
				this.m_rgPos[1][0] = flY;
			}
		},

		GetHeroBaseAttributeValue: function( strAttribute )
		{
			switch( strAttribute )
			{
				case 'str':	return this.GetBaseStrength();
				case 'int':	return this.GetBaseIntelligence();
				case 'agi':	return this.GetBaseAgility();
				case 'attack':	return this.GetBaseDamage();
				case 'speed':	return this.GetBaseMoveSpeed();
				case 'defense':	return this.GetBaseArmor();
			}

			VUtils.AssertMsg( false, "Should never get here" );
			return 0;
		},

		GetHeroBonusAttributeValue: function( strAttribute )
		{
			switch( strAttribute )
			{
				case 'str':	return ( this.GetStrength() - this.GetBaseStrength() );
				case 'int':	return ( this.GetIntelligence() - this.GetBaseIntelligence() );
				case 'agi':	return ( this.GetAgility() - this.GetBaseAgility() );
				case 'attack':	return ( this.GetDamage() - this.GetBaseDamage() );
				case 'speed':	return ( this.GetMoveSpeed() - this.GetBaseMoveSpeed() );
				case 'defense':	return ( this.GetArmor() - this.GetBaseArmor() );
			}

			VUtils.AssertMsg( false, "Should never get here" );
			return 0;
		},

		GetAbilityLevel: function( iAbility )
		{
			return this.m_rgAbilityLevels[iAbility];
		},

		SetAbilityLevel: function( iAbility, nLevel )
		{
			this.m_rgAbilityLevels[iAbility] = nLevel;
		},

		GetKillCount: function()
		{
			return this.m_cKills;
		},

		SetKillCount: function( nVal )
		{
			this.m_cKills = nVal;
		},

		GetDeathCount: function()
		{
			return this.m_cDeaths;
		},

		SetDeathCount: function( nVal )
		{
			this.m_cDeaths = nVal;
		},

		GetAssistsCount: function()
		{
			return this.m_cAssists;
		},

		SetAssistsCount: function( nVal )
		{
			this.m_cAssists = nVal;
		},

		SetGold: function( nGold )
		{
			this.m_nGold = nGold;
		},

		GetGold: function()
		{
			return this.m_nGold;
		},

		GetGoldPerMinute: function()
		{
			return this.m_nGoldPerMin;
		},

		SetGoldPerMinute: function( nVal )
		{
			this.m_nGoldPerMin = nVal;
		},

		GetXPPerMinute: function()
		{
			return this.m_nXPPerMin;
		},

		SetXPPerMinute: function( nVal )
		{
			this.m_nXPPerMin = nVal;
		},

		GetLastHitsCount: function()
		{
			return this.m_cLastHits;
		},

		SetLastHitsCount: function( nVal )
		{
			this.m_cLastHits = nVal;
		},

		GetDeniesCount: function()
		{
			return this.m_cDenies;
		},

		SetDeniesCount: function( nVal )
		{
			this.m_cDenies = nVal;
		},

		GetNetGold: function()
		{
			return this.m_nNetGold;
		},

		SetNetGold: function( nVal )
		{
			this.m_nNetGold = nVal;
		},

		GetHeroDamage: function()
		{
			return this.m_nHeroDamage;
		},

		SetHeroDamage: function( nVal )
		{
			this.m_nHeroDamage = nVal;
		},

		GetTowerDamage: function()
		{
			return this.m_nTowerDamage;
		},

		SetTowerDamage: function( nVal )
		{
			this.m_nTowerDamage = nVal;
		},

		GetHealingProvided: function()
		{
			return this.m_nHealingProvided;
		},

		SetHealingProvided: function( nVal )
		{
			this.m_nHealingProvided = nVal;
		},

		BHasUlt: function()
		{
			return this.m_bHasUlt;
		},

		BHasEnoughManaForUlt: function()
		{
			return this.m_bHasUltMana;
		},

		GetUltCooldown: function()
		{
			return this.m_nUltCooldown;
		},

		SetUltimateStatus: function( bHasUlt, bHasUltMana, nCooldown )
		{
			this.m_bHasUlt = bHasUlt;
			this.m_bHasUltMana = bHasUltMana;
			this.m_nUltCooldown = nCooldown;
		},

		// NOTE: This can be different from current hero level. You can be level 1 but have not assigned any points.
		GetLevelPointCount: function()
		{
			return this.m_rgLevelPoints.length;
		},

		// NOTE: nLevel needs to be in [1, 25]
		GetLevelPointAbilities: function( nLevel )
		{
			return this.m_rgLevelPoints[nLevel - 1];
		},

		// NOTE: nLevel needs to be in [1, 25]
		SetLevelPointToAbilities: function( nLevel, rgAbilityIDs )
		{
			this.m_rgLevelPoints[nLevel - 1] = rgAbilityIDs;
		},

		GetItem: function( iSlot )
		{
			return this.m_rgItems[iSlot];
		},

		GetStashItem: function( iSlot )
		{
			return this.m_rgStashItems[iSlot];
		},

		ClearItemShoppingList: function()
		{
			this.m_rgShoppingList = [];
		},

		AddItemToShoppingList: function( strTime, bSold, nItemID )
		{
			this.m_rgShoppingList.push( new VShoppingItem( strTime, bSold, nItemID ) );
		},

		GetShoppingListCount: function()
		{
			return this.m_rgShoppingList.length;
		},

		GetShoppingListItemAtIndex: function( iIndex )
		{
			return this.m_rgShoppingList[iIndex];
		},

		ClearHeroToHeroStats: function()
		{
			this.m_HeroToHeroStats = {};

			for ( var iType = 0; iType < DOTA_CONSTS.HERO_TO_HERO_TYPE_COUNT; ++iType )
			{
				this.m_HeroToHeroStats[iType] = {};
			}
		},

		SetHeroToHeroStatData: function( nType, nEnemyPlayerID, nVal )
		{
			this.m_HeroToHeroStats[nType][nEnemyPlayerID] = nVal;
		},

		GetHeroToHeroStatData: function( nType, nEnemyPlayerID )
		{
			if ( undefined === this.m_HeroToHeroStats[nType][nEnemyPlayerID] )
				return 0;

			return this.m_HeroToHeroStats[nType][nEnemyPlayerID];
		},

		GetKillCountOnEnemyPlayer: function( nEnemyPlayerID )
		{
			return this.GetHeroToHeroStatData( DOTA_CONSTS.HERO_TO_HERO_KILLS, nEnemyPlayerID );
		},

		GetAssistedKillCountOnEnemyPlayer: function( nEnemyPlayerID )
		{
			return this.GetHeroToHeroStatData( DOTA_CONSTS.HERO_TO_HERO_ASSISTS, nEnemyPlayerID );
		},

		//
		// Helpers
		//
		GetHeroName: function()
		{
			return GetLocalizedHeroName( this.m_nHeroID );
		},

		GetAbilityCount: function()
		{
			VUtils.Assert( BIsValidHero( this.m_nHeroID ) );
			return g_rgHeroData[ this.m_nHeroID ].abilities.length;
		},

		GetAbilityName: function( iAbility )
		{
			return g_rgLocalizedHeroData[ this.m_nHeroID ].abilities[ iAbility ].name;
		},

		GetAbilityImageURL: function( iAbility )
		{
			return g_strBaseImageURL + g_rgHeroData[ this.m_nHeroID ].abilities[ iAbility ].relative_image_url;
		},

		GetAbilityID: function( iAbility )
		{
			return g_rgHeroData[ this.m_nHeroID ].abilities[ iAbility ].id;
		},

		GetAbilityNameInternal: function( iAbility )
		{
			return g_rgHeroData[ this.m_nHeroID ].abilities[ iAbility ].name;
		},

		GetMaxAbilityLevel: function( iAbility )
		{
			return g_rgHeroData[ this.m_nHeroID ].abilities[ iAbility ].maxlevel;
		},

		GetAbilityManaCostForLevel: function( iAbility, nLevel )
		{
			if ( undefined === g_rgHeroData[ this.m_nHeroID ].abilities[ iAbility ].manacosts[ nLevel ] )
				return 0;

			return parseInt( g_rgHeroData[ this.m_nHeroID ].abilities[ iAbility ].manacosts[ nLevel ] );
		},

		GetHeroPrimaryAttribute: function()
		{
			return g_rgHeroData[ this.m_nHeroID ].attrgroup;
		},

		Think: function( flElapsed )
		{
			if ( !this.BIsValid() )
				return;

			// Smooth position
			var flInterpSpeed = 20 * flElapsed;
			this.m_rgPos[0][0] = VUtils.LerpClamped( flInterpSpeed, this.m_rgPos[0][0], this.m_rgPos[0][1] );
			this.m_rgPos[1][0] = VUtils.LerpClamped( flInterpSpeed, this.m_rgPos[1][0], this.m_rgPos[1][1] );

			this.m_rgHealthPoints[0] = VUtils.LerpClamped( flInterpSpeed, this.m_rgHealthPoints[0], this.m_rgHealthPoints[1] );
			this.m_rgManaPoints[0] = VUtils.LerpClamped( flInterpSpeed, this.m_rgManaPoints[0], this.m_rgManaPoints[1] );
		}
	};

	//--------------------------------------------------------------------------------------------

	var CBuilding = function( nTeam, nLane, strType, nTier )
	{
		this.m_nTeam = nTeam;
		this.m_nLane = nLane;
		this.m_strType = strType;
		this.m_nTier = nTier;

		this.m_rgPos = [ null, null ];
		this.m_flHeading = null;
	};

	CBuilding.prototype =
	{
		GetPosition: function( out_rgPos )
		{
			out_rgPos[0] = this.m_rgPos[0];
			out_rgPos[1] = this.m_rgPos[1];
		},

		SetPosition: function( flX, flY )
		{
			this.m_rgPos[0] = flX;
			this.m_rgPos[1] = flY;
		},

		GetType: function()
		{
			return this.m_strType;
		},

		GetLane: function()
		{
			return this.m_nLane;
		},

		BIsDestroyed: function()
		{
			return this.m_bIsDestroyed;
		},

		GetHeading: function()
		{
			return this.m_flHeading;
		},

		SetHeading: function( flHeading )
		{
			this.m_flHeading = flHeading;
		},

		GetTeam: function()
		{
			return this.m_nTeam;
		}
	};

	//--------------------------------------------------------------------------------------------

	var VPickBan = function( nTeam, bPick, nHeroID )
	{
		this.m_nTeam = nTeam;
		this.m_bPick = bPick;
		this.m_nHeroID = nHeroID;
	};

	VPickBan.prototype =
	{
		constructor: VPickBan,

		GetTeam: function() { return this.m_nTeam },
		BIsPick: function() { return this.m_bPick },
		GetHeroID: function() { return this.m_nHeroID }
	};

	//--------------------------------------------------------------------------------------------

	var CTournament = function()
	{
		this.m_unPrizePool = null;
		this.m_unLeagueID = null;
		this.m_strTournamentName = null;
		this.m_rgLogoImageURLs = null;
	};

	//
	// All data for a tournament. Dynamic data will need to be updated via AJAX calls to the
	// web cluster, while static data will be avialable on template render and passed into Init.
	//
	CTournament.prototype =
	{
		constructor: CTournament,

		Init: function( unLeagueID, Data )
		{
			this.m_unLeagueID = unLeagueID;
			this.m_strTournamentName = Data.name;
			this.m_rgLogoImageURLs = Data.logos;
			this.m_rgTeamData = Data.teams;

			g_UIManager.ShowTournamentPanels( true );

			// Attempt to get all team info for the tournament


		},

		GetLeagueID: function()
		{
			return this.m_unLeagueID;
		},

		GetTeamLogoURL: function( nTeamID, bSmall )
		{
			VUtils.Assert( undefined !== this.m_rgTeamData[nTeamID] &&
				       undefined !== this.m_rgTeamData[nTeamID].team_logo_small &&
				       undefined !== this.m_rgTeamData[nTeamID].team_logo_large );

			return bSmall ? this.m_rgTeamData[nTeamID].team_logo_small: this.m_rgTeamData[nTeamID].team_logo_large;
		},

		GetTeamName: function( nTeamID )
		{
			VUtils.Assert( undefined !== this.m_rgTeamData[nTeamID] && undefined !== this.m_rgTeamData[nTeamID].name )

			return this.m_rgTeamData[nTeamID].name;
		},

		GetLogoImageURLs: function()
		{
			return this.m_rgLogoImageURLs;
		},

		GetTeamPrimaryColor: function( nTeamID )
		{
			return this.m_rgTeamData[nTeamID].primary_color;
		},

		Think: function( flCurTime, flElapsed )
		{
			if ( g_bIsSimulation )
			{
				this.Simulate( flCurTime, flElapsed );
				return;
			}

			// TODO: Hit the web cluster for dynamic data, such as prize pool and viewer count
		},

		Simulate: function( flCurTime, flElapsed )
		{
			if ( undefined !== this.m_flNextSimulateTime && ( flCurTime < this.m_flNextSimulateTime ) )
				return;
		
			this.m_unViewerCount = parseInt( flCurTime );
			this.m_unPrizePool = 1600000 + parseInt( flCurTime * 100 );

			// Schedule next simulate
			this.m_flNextTournamentDataTime = flCurTime + 1;
		}
	};

	//--------------------------------------------------------------------------------------------

	var CMatch = function( strMatchID )
	{
		this.m_strMatchID = strMatchID;

		this.m_flMatchTime = null;

		this.m_bIsStreamerMode = null;
		this.m_nStreamerTeam = null;

		this.m_rgBans = [];
		this.m_rgPicks = [];

		this.m_rgBuildings = [];

		this.m_TeamIDs = {};
		this.m_TeamIDs[DOTA_CONSTS.TEAM_RADIANT] = null;
		this.m_TeamIDs[DOTA_CONSTS.TEAM_DIRE] = null;

		this.m_TeamNames = {};
		this.m_TeamNames[DOTA_CONSTS.TEAM_RADIANT] = null;
		this.m_TeamNames[DOTA_CONSTS.TEAM_DIRE] = null;

		this.m_Players = {};
		this.m_Players[DOTA_CONSTS.TEAM_RADIANT] = {};
		this.m_Players[DOTA_CONSTS.TEAM_DIRE] = {};

		this.m_TeamCheers = {};
		this.m_cCheerPeak = null;
		this.m_cCheerScaleMax = DOTA_CONSTS.CHEER_STARTING_SCALE_MAX;

		for ( var nTeam = DOTA_CONSTS.TEAM_RADIANT; nTeam <= DOTA_CONSTS.TEAM_DIRE; ++nTeam )
		{
			this.m_TeamCheers[nTeam] = 0;

			for ( var iPlayer = 0; iPlayer < DOTA_CONSTS.PLAYERS_PER_TEAM; ++iPlayer )
			{
				this.m_Players[nTeam][iPlayer] = new CPlayer( iPlayer );
			}
		}

		this.m_TeamScores = {};
		this.m_TeamScores[DOTA_CONSTS.TEAM_RADIANT] = null;
		this.m_TeamScores[DOTA_CONSTS.TEAM_DIRE] = null;

		this.m_strServerSteamID = null;
		this.m_flBroadcastTime = null;
		this.m_flTimeOfDay = null;
	};

	//
	// All data for a match. Updated by the stream and queried by the UI.
	//
	CMatch.prototype =
	{
		constructor: CMatch,

		Init: function()
		{
		},

		BIsStreamerMode: function()
		{
			return this.m_bIsStreamerMode;
		},

		SetIsStreamerMode: function( b )
		{
			this.m_bIsStreamerMode = b;
		},

		BIsStreamerTeam: function( nTeam )
		{
			return this.m_nStreamerTeam === nTeam;
		},

		SetStreamerTeam: function( nTeam )
		{
			this.m_nStreamerTeam = nTeam;
		},

		GetPlayer: function( nTeam, iPlayer )
		{
			VUtils.Assert( nTeam !== undefined );
			VUtils.Assert( iPlayer !== undefined );
			VUtils.Assert( this.m_Players[nTeam] !== undefined );
			VUtils.Assert( this.m_Players[nTeam][iPlayer] !== undefined );

			return this.m_Players[nTeam][iPlayer];
		},

		BAllPlayersHaveHeroes: function()
		{
			for ( var nTeam = DOTA_CONSTS.TEAM_RADIANT; nTeam <= DOTA_CONSTS.TEAM_DIRE; ++nTeam )
			{
				for ( var iPlayer = 0; iPlayer < DOTA_CONSTS.PLAYERS_PER_TEAM; ++iPlayer )
				{
					var Player = this.GetPlayer( nTeam, iPlayer );
					if ( !Player || !Player.BHasHero() )
						return false;
				}
			}

			return true;
		},

		ClearBuildings: function()
		{
			this.m_rgBuildings = [];
		},

		GetBuildings: function()
		{
			return this.m_rgBuildings;
		},

		AddBuilding: function( nTeam, nLane, strType, nTier )
		{
			VUtils.Assert( undefined !== nTeam );
			VUtils.Assert( undefined !== strType );
			VUtils.Assert( undefined !== nLane );
			VUtils.Assert( undefined !== nTier );

			var Building = new CBuilding( nTeam, nLane, strType, nTier );
			this.m_rgBuildings.push( Building );
			
			return Building;
		},

		GetMatchTime: function()
		{
			return this.m_flMatchTime;
		},

		SetMatchTime: function( flTime )
		{
			this.m_flMatchTime = flTime;
		},

		SetTeamName: function( nTeam, strName )
		{
			if ( this.m_TeamNames[nTeam] === strName )
				return;

			this.m_TeamNames[nTeam] = strName;

			// Let the UI know
			g_UIManager.OnTeamNameChanged( nTeam, strName );
		},

		SetTeamScore: function( nTeam, nScore )
		{
			this.m_TeamScores[nTeam] = nScore;
		},

		SetTeamCheers: function( nTeam, cCheers )
		{
			this.m_TeamCheers[nTeam] = cCheers;
		},

		GetTeamCheers: function( nTeam )
		{
			return this.m_TeamCheers[nTeam];
		},

		GetCheerPeak: function()
		{
			return this.m_cCheerPeak;
		},

		SetCheerPeak: function( cPeak )
		{
			this.m_cCheerPeak = cPeak;

			if ( cPeak >= this.m_cCheerScaleMax )
			{
				// Rescale based on new peak
				this.m_cCheerScaleMax = DOTA_CONSTS.CHEER_RENORMALIZE_FACTOR * cPeak;
			}
		},

		GetCheerScaleMax: function()
		{
			return this.m_cCheerScaleMax;
		},

		GetServerSteamID: function()
		{
			return this.m_strServerSteamID;
		},

		SetServerSteamID: function( strID )
		{
			this.m_strServerSteamID = strID;
		},

		GetMatchID: function()
		{
			return this.m_strMatchID;
		},

		GetBroadcastTime: function()
		{
			return this.m_flBroadcastTime;
		},

		SetBroadcastTime: function( flTime )
		{
			this.m_flBroadcastTime = flTime;
		},

		SetTimeOfDay: function( flTime )
		{
			VUtils.Assert( flTime >= 0.0 && flTime <= 1.0 );
			this.m_flTimeOfDay = flTime;
		},

		GetTimeOfDay: function()
		{
			return this.m_flTimeOfDay;
		},

		GetTeamID: function( nTeam )
		{
			return this.m_TeamIDs[nTeam];
		},

		SetTeamID: function( nTeam, nTeamID )
		{
			if ( !g_Tournament || this.m_TeamIDs[nTeam] === nTeamID )
				return;

			this.m_TeamIDs[nTeam] = nTeamID;

			// Let the UI know
			g_UIManager.OnTeamIDChanged( nTeam, nTeamID );
		},

		GetTeamName:function( nTeam )
		{
			return this.m_TeamNames[nTeam];
		},

		GetPicks: function()
		{
			return this.m_rgPicks;
		},

		SetPick: function( iIndex, nTeam, nHeroID )
		{
			if ( iIndex < this.m_rgPicks.length )
				return;

			this.m_rgPicks.push( new VPickBan( nTeam, true, nHeroID ) );
		},

		GetBans: function()
		{
			return this.m_rgBans;
		},

		SetBan: function( iIndex, nTeam, nHeroID )
		{
			if ( iIndex < this.m_rgBans.length )
				return;

			this.m_rgBans.push( new VPickBan( nTeam, true, nHeroID ) );
		},

		GetTeamScore: function( nTeam )
		{
			return this.m_TeamScores[nTeam];
		},

		Think: function( flCurTime, flElapsed )
		{
			// Let players think
			for ( var nTeam = DOTA_CONSTS.TEAM_RADIANT; nTeam <= DOTA_CONSTS.TEAM_DIRE; ++nTeam )
			{
				for ( var iPlayer = 0; iPlayer < DOTA_CONSTS.PLAYERS_PER_TEAM; ++iPlayer )
				{
					this.GetPlayer( nTeam, iPlayer ).Think( flElapsed );
				}
			}
		}
	};

	//--------------------------------------------------------------------------------------------

	// NOTE: Used for mana as well, if bIsHealthBar is false
	var CHealthBar = function( Options )
	{
		this.$m_Panel = Options.panel;
		this.$m_Progress = this.$m_Panel.find( '.HealthBarProgress' );
		this.$m_Points = Options.current_points_panel;
		this.$m_MaxPoints = Options.max_points_panel;
		this.$m_PointsSplitter = Options.points_splitter_panel;
		this.$m_RegenRate = Options.regen_rate_panel;
		this.$m_LeftmostText = this.$m_Panel.find( '.LeftmostText' )

		// Maintain this to avoid .css()'ing and .html()'ing every frame, which is costly
		this.m_nCurrentPercentageValue = null;
		this.m_nCurrentPointValue = null;

		this.m_rgTextElements = [ this.$m_Points, this.$m_MaxPoints, this.$m_PointsSplitter, this.$m_RegenRate ];

		this.m_bIsHealthBar = Options.is_health_bar;
		this.m_nTeam = null;

		this.m_flNextUpdateTime = 0;
	};

	CHealthBar.prototype =
	{
		constructor: CHealthBar,

		SetTeam: function( nTeam )
		{
			if ( this.m_nTeam == nTeam )
				return;

			if ( !this.m_bIsHealthBar )
				return;

			this.m_nTeam = nTeam;

			var bRadiant = DOTA_CONSTS.TEAM_RADIANT == nTeam;

			// Health bar colors change based on team
			var $DummyColors = $( '#DummyColors_js' ).find( bRadiant ? '.Radiant' : '.Dire' );
			var strTextColor = $DummyColors.css( 'color' );

			// NOTE: When retrieving a border-color CSS property, we need to be more specific than border-color, since that actually covers
			// 4 properties (top/right/bottom/left)
			this.$m_Panel.css( 'border-color', $DummyColors.css( 'border-top-color' ) );
			this.$m_Points.css( 'color', strTextColor );

			if ( this.$m_PointsSplitter )
			{
				this.$m_PointsSplitter.css( 'color', strTextColor );
			}

			if ( this.$m_MaxPoints )
			{
				this.$m_MaxPoints.css( 'color', strTextColor );
			}

			if ( this.$m_LeftmostText )
			{
				this.$m_LeftmostText.css( 'color', $DummyColors.css( 'background-color' ) );
			}

			if ( this.$m_RegenRate )
			{
				this.$m_RegenRate.css( 'color', strTextColor );
			}

			if ( bRadiant )
			{
				this.$m_Progress.removeClass( 'RedRadialGradient' );
				this.$m_Progress.addClass( 'GreenRadialGradient' );
			}
			else
			{
				this.$m_Progress.removeClass( 'GreenRadialGradient' );
				this.$m_Progress.addClass( 'RedRadialGradient' );
			}
		},

		Update: function( Player )
		{
			var flCurTime = VUtils.GetTime();
			if ( this.m_flNextUpdateTIme !== 0 && this.m_flNextUpdateTime > flCurTime )
				return;

			var nPercent, nPoints, nMaxPoints, flRegenRate;

			if ( this.m_bIsHealthBar )
			{
				nPercent = Player.GetHealthPointsPercent();
				nPoints = Player.GetHealthPoints();
				nMaxPoints = Player.GetMaxHealthPoints();
				flRegenRate = Player.GetHealthRegenRate();
			}
			else
			{
				nPercent = Player.GetManaPointsPercent();
				nPoints = Player.GetManaPoints();
				nMaxPoints = Player.GetMaxManaPoints();
				flRegenRate = Player.GetManaRegenRate();
			}

			nPoints = parseInt( nPoints );

			if ( this.m_nCurrentPercentageValue != nPercent )
			{
				this.$m_Progress.css( 'width', nPercent + '%' );
				this.m_nCurrentPercentageValue = nPercent;
			}

			if ( this.m_nCurrentPointValue != nPoints )
			{
				this.$m_Points.html( nPoints );
				this.m_nCurrentPointValue = nPoints;
			}

			if ( this.$m_MaxPoints )
			{
				this.$m_MaxPoints.html( parseInt( nMaxPoints ) );
			}

			if ( this.$m_RegenRate )
			{
				this.$m_RegenRate.html( '+' + sprintf( '%.1f', flRegenRate ) );
			}

			for ( var i = 0, cTextElements = this.m_rgTextElements.length; i < cTextElements; ++i )
			{
				if ( !this.m_rgTextElements[i] )
					continue;

				this.m_rgTextElements[i].css( 'line-height', this.$m_Panel.outerHeight() + 'px' );
			}

			this.m_flNextUpdateTime = flCurTime + DOTA_CONSTS.HEALTHBAR_REFRESH_INTERVAL;
		}
	};

	//--------------------------------------------------------------------------------------------

	var CBasePanel = function( strDivName, PanelGroup )
	{
		this.$m_Panel = $( strDivName );		VUtils.Assert( this.$m_Panel.length );
		this.m_PanelGroup = PanelGroup;
		this.$m_LoadedContent = this.$m_Panel.find( '.Content' );
		this.m_nAnimDuration = 650;	// For showing/hiding
		this.m_bDirty = false;
		this.m_flNextUpdateTime = 0;
		this.m_bWaitingForData = null;	// Default to panels waiting for data before displaying

		this.$m_LoadingContainer = $( '<div>' ).addClass( 'LoadingContainer' );
		this.$m_LoadingContainer.insertBefore( this.$m_LoadedContent );
		this.$m_WaitingPanel = $( '<div>' ).addClass( 'WaitingPanel' ).addClass( 'FadeAnimation' ).append( $( '<div>' ) );
		this.$m_LoadingContainer.append( this.$m_WaitingPanel );	// This needs to go first.

		this.m_bHaveWaitPanel = !this.$m_Panel.data( 'nowaitpanel' );
	};

	CBasePanel.prototype =
	{
		constructor: CBasePanel,

		Init: function()
		{
			if ( this.$m_Panel.data( 'nofade', 0 ) === 0 )
			{
				this.$m_Panel.addClass( 'FadeAnimation' );
			}

			this.SetWaitingForData( this.m_bHaveWaitPanel );
		},

		GetPanel: function()
		{
			return this.$m_Panel;
		},

		GetPanelGroup: function()
		{
			return this.m_PanelGroup;
		},

		OnNewMatch: function()
		{
		},

		OnInitTournament: function( unLeagueID )
		{
		},

		BIsHidden: function()
		{
			return this.$m_Panel.css( 'opacity' ) === '0' || this.$m_Panel.css( 'display' ) == 'none';
		},

		// Should return whether the panel is ready to be displayed or not.
		BPreShow: function()
		{
			// Indicates the panel is ready and not waiting for data to display properly
			return !this.m_bWaitingForData;
		},

		Show: function()
		{
			this.$m_Panel.addClass(
				'Opaque'
			).parent().parent().css(
				'z-index',
				1
			);

			this.OnShow( true );
		},

		Hide: function()
		{
			// Hide and move to the back
			this.$m_Panel.removeClass(
				'Opaque'
			).parent().parent().css(
				'z-index',
				-1
			);

			this.OnShow( false );
		},

		OnShow: function( bShow )
		{
		},

		OnPrePop: function( bPopped )
		{
		},

		OnPostPop: function( bPopped )
		{
		},

		BShouldThink: function()
		{
			return !this.BIsHidden();
		},

		Think: function( flCurTime, flElapsed )
		{
			// Only update the UI at some interval
			if ( !this.m_bDirty || this.m_flNextUpdateTime > flCurTime )
				return;

			this.UpdateFromData();
			this.m_bDirty = false;
			this.m_flNextUpdateTime = flCurTime + this.GetUpdateInterval();
		},

		SetWaitingForData: function( bWaiting )
		{
			if ( null !== this.m_bWaitingForData && this.m_bWaitingForData == bWaiting )
				return;

			this.m_bWaitingForData = bWaiting;

			// Let derived class handle this to add or remove a spinner, etc.
			this.OnWaitModeChanged( bWaiting );
		},

		// Calls to this method are scheduled so that we don't necessarily update a panel every time we get new data -- the
		// given panel can implement its own GetUpdateInterval() to decide that.
		UpdateFromData: function()
		{
		},

		GetUpdateInterval: function()
		{
			return 1.0;	// 1hz -- derived panels can override
		},

		OnDataReceived: function()
		{
			this.m_bDirty = true;
		},

		OnTeamIDChanged: function( nTeam, nTeamID )
		{
		},

		ResizeFonts: function()
		{
		},

		OnWindowResize: function()
		{
			this.ResizeFonts();
			this.ResizeWaitingPanel();
		},

		ResizeWaitingPanel: function()
		{
			// Get the panel we'll use as a reference for dimensions
			var $WaitingPanelReferencePanel = this.GetWaitingPanelReferencePanel();

			//this.$m_WaitingPanel.css( 'width', $WaitingPanelReferencePanel.actual( 'width' ) + 'px' );
			//this.$m_WaitingPanel.css( 'height', $WaitingPanelReferencePanel.actual( 'height' ) + 'px' );
		},

		GetWaitingPanelReferencePanel: function()
		{
			return this.$m_Panel;
		},

		OnWaitModeChanged: function( bWaiting )
		{
			var This = this;

			if ( bWaiting )
			{
				This.$m_Panel.removeClass( 'Opaque' );

				// If it's scheduled, cancel the timer that will hide the waiting panel and show the main panels.
				if ( undefined !== This.m_WaitingPanelHideTimerID )
				{
					clearTimeout( This.m_WaitingPanelHideTimerID );
				}

				// Resize and fade in the waiting panel.
				This.ResizeWaitingPanel();

				This.$m_WaitingPanel.show();	// Shows with opacity 0
				This.$m_WaitingPanel.addClass( 'Opaque' );
			}
			else
			{
				// This fades out the waiting panel
				this.$m_WaitingPanel.removeClass( 'Opaque' );

				// Hide the panel when it's done fading out so the UI will be interactive
				this.m_WaitingPanelHideTimerID = setTimeout(
					function()
					{
						This.$m_WaitingPanel.hide();
						This.$m_Panel.addClass( 'Opaque' );
						This.$m_LoadedContent.addClass( 'Opaque' );	// Only need to do this once, on first time showing
					},
					250
				);
			}
		}
	};

	//--------------------------------------------------------------------------------------------

	var CSpectatorStatsPanel = function()
	{
		CBasePanel.call( this, '#' + DOTA_CONSTS.DIV_ID_SPECTATOR_STATS );

		this.$m_Panels = {};
		this.$m_HeroIconPanel = {};
		this.$m_RespawnTimePanel = {};
		this.$m_Label_PlayerName = {};
		this.$m_Label_Stat = {};
		this.m_bUpdatePlayerNames = null;

		for ( var nTeam = DOTA_CONSTS.TEAM_RADIANT; nTeam <= DOTA_CONSTS.TEAM_DIRE; ++nTeam )
		{
			this.$m_Panels[nTeam] = this.$m_Panels[nTeam] || {};
			this.$m_HeroIconPanel[nTeam] = this.$m_HeroIconPanel[nTeam] || {};
			this.$m_RespawnTimePanel[nTeam] = this.$m_RespawnTimePanel[nTeam] || {};
			this.$m_Label_PlayerName[nTeam] = this.$m_Label_PlayerName[nTeam] || {};
			this.$m_Label_Stat[nTeam] = this.$m_Label_Stat[nTeam] || {};

			for ( var iPlayer = 0; iPlayer < DOTA_CONSTS.PLAYERS_PER_TEAM; ++iPlayer )
			{
				this.$m_Panels[nTeam][iPlayer] = this.$m_Panel.find( '.Panel_' + GetRadiantDireFromTeam( nTeam ) + '_' + iPlayer + '_js' );
				this.$m_HeroIconPanel[nTeam][iPlayer] = this.$m_Panels[nTeam][iPlayer].find( '.ImageBackground' );
				this.$m_RespawnTimePanel[nTeam][iPlayer] = this.$m_Panels[nTeam][iPlayer].find( '.RespawnTime' );
				this.$m_Label_PlayerName[nTeam][iPlayer] = this.$m_Panels[nTeam][iPlayer].find( '.PlayerName' );
				this.$m_Label_Stat[nTeam][iPlayer] = this.$m_Panels[nTeam][iPlayer].find( '.Stat' );
			}
		}

		this.$m_ComboBox = this.$m_Panel.find( '.ComboBox' );
		this.$m_ComboDropdown = this.$m_Panel.find( '.ComboDropdown' );
		this.m_strSelectedStatType = null;

		var This = this;

		this.$m_ComboDropdownElem = {};
		this.$m_ComboDropdown.children().each(
			function()
			{
				var $This = $( this );
				var strType = $This.data( 'type' );
				This.$m_ComboDropdownElem[strType] = $This;
			}
		);

		this.$m_ComboBox.click(
			function()
			{
				This.$m_ComboDropdown.toggle();
			}
		);
		
		this.$m_ComboDropdown.children().click(
			function()
			{
				var $This = $( this );
				var strType = $This.data( 'type' );	// Desired stat type

				This.SetSelectedStatType( strType );

				This.$m_ComboDropdown.hide();
			}
		);

		function OnClick()
		{
			var $This = $( this );

			var nTeam = GetTeamFromString( $This.data( 'teamname' ) );
			var iPlayer = $This.data( 'playerindex' );

			g_UIManager.ShowPlayerDetailsPanel( nTeam, iPlayer );
		}

		// Hook up hero icon click handler.
		for ( var nTeam = DOTA_CONSTS.TEAM_RADIANT; nTeam <= DOTA_CONSTS.TEAM_DIRE; ++nTeam )
		{
			for ( var iPlayer = 0; iPlayer < DOTA_CONSTS.PLAYERS_PER_TEAM; ++iPlayer )
			{
				this.$m_Panels[nTeam][iPlayer].click( OnClick );
			}
		}
	};

	CSpectatorStatsPanel.prototype = Object.create( CBasePanel.prototype );
	CSpectatorStatsPanel.prototype.constructor = CSpectatorStatsPanel;

	CSpectatorStatsPanel.prototype.Init = function()
	{
		CBasePanel.prototype.Init.apply( this, arguments );
	};

	CSpectatorStatsPanel.prototype.OnNewMatch = function()
	{
		this.m_bUpdatePlayerNames = true;
	};

	CSpectatorStatsPanel.prototype.OnDataReceived = function()
	{
		CBasePanel.prototype.OnDataReceived.apply( this, arguments );
	};

	CSpectatorStatsPanel.prototype.GetUpdateInterval = function()
	{
		return 1.0;	// 1hz
	};

	CSpectatorStatsPanel.prototype.Think = function( flCurTime, flElapsed )
	{
		CBasePanel.prototype.Think.apply( this, arguments );

		var rgStatCache = [];
		var bIsReady = null != g_Match;

		if ( bIsReady )
		{
			for ( var nTeam = DOTA_CONSTS.TEAM_RADIANT; nTeam <= DOTA_CONSTS.TEAM_DIRE; ++nTeam )
			{
				for ( var iPlayer = 0; iPlayer < DOTA_CONSTS.PLAYERS_PER_TEAM; ++iPlayer )
				{
					var Player = g_Match.GetPlayer( nTeam, iPlayer );
					if ( !Player || !Player.BIsValid() )
					{
						bIsReady = false;
						break;
					}

					if ( g_Match.BIsStreamerMode() && !g_Match.BIsStreamerTeam( nTeam ) )
					{
						this.$m_Panels[nTeam][iPlayer].hide();
						continue;
					}

					this.$m_Panels[nTeam][iPlayer].show();

					var nRespawnTime = Player.GetRespawnTime();
					if ( nRespawnTime )
					{
						this.$m_RespawnTimePanel[nTeam][iPlayer].html( nRespawnTime );
					}

					var nHeroID = Player.GetHeroID();

					var CurStatData = {
						heroid: nHeroID,
						player_index: iPlayer,
						team: nTeam,
						player: Player,

						hl: Player.GetLevel(),
						k: Player.GetKillCount(),
						a: Player.GetAssistsCount(),
						d: Player.GetDeathCount(),
						lh: Player.GetLastHitsCount(),
						den: Player.GetDeniesCount(),
						xppm: Player.GetXPPerMinute(),
						gpm: Player.GetGoldPerMinute(),
						cg: Player.GetGold(),
						ng: Player.GetNetGold(),
						bb: Player.BHasBuyback()
					};

					if ( g_bIsDev )
					{
						for ( var strProp in CurStatData )
						{
							VUtils.Assert( CurStatData[strProp] !== undefined );
						}
					}

					rgStatCache.push( CurStatData );

					// Update hero icon if necessary
					var nCachedHeroID = this.$m_HeroIconPanel[nTeam][iPlayer].data( 'heroid' );
					if ( undefined === nCachedHeroID || nHeroID != nCachedHeroID )
					{
						var strHeroImageURL = GetHeroImageURL( nHeroID );

						this.$m_HeroIconPanel[nTeam][iPlayer].empty();
						this.$m_HeroIconPanel[nTeam][iPlayer].append( CreateImage( strHeroImageURL ) );

						this.$m_HeroIconPanel[nTeam][iPlayer].data( 'heroid', nHeroID );
					}

					this.$m_Panels[nTeam][iPlayer].attr( 'data-dead', Player.BIsAlive() ? 0 : 1 );
				}
			}
		}

		this.SetWaitingForData( !bIsReady );

		if ( !bIsReady )
			return;

		if ( null === this.m_strSelectedStatType )
		{
			this.SetSelectedStatType( DOTA_CONSTS.STATS_SORTING_DEFAULT );
		}

		// Update the ordering of the rows via flexbox/order.
		var rgSortFields = null;	// Fields to sort on
		switch( this.m_strSelectedStatType )
		{
			case DOTA_CONSTS.STATS_SORTING_KDA:
				rgSortFields = [ 'k', 'd', 'a' ];
				break;

			case DOTA_CONSTS.STATS_SORTING_LHD:
				rgSortFields = [ 'lh', 'den' ];
				break;

			case DOTA_CONSTS.STATS_SORTING_HEROLEVEL:
				rgSortFields = [ 'hl' ];
				break;

			case DOTA_CONSTS.STATS_SORTING_XPPERMINUTE:
				rgSortFields = [ 'xppm' ];
				break;

			case DOTA_CONSTS.STATS_SORTING_CURRENTGOLD:
				rgSortFields = [ 'cg' ];
				break;

			case DOTA_CONSTS.STATS_SORTING_NETWORTH:
				rgSortFields = [ 'ng' ];
				break;

			case DOTA_CONSTS.STATS_SORTING_GOLDPERMINUTE:
				rgSortFields = [ 'gpm' ];
				break;

			case DOTA_CONSTS.STATS_SORTING_BUYBACKSTATUS:
				rgSortFields = [ 'bb' ];
				break;

			default:
				VUtils.Assert( false );
				break;
		}

		// Sort now
		rgStatCache.sort(
			function( A, B )
			{
				for ( var iField = 0, cFields = rgSortFields.length; iField < cFields; ++iField )
				{
					var strField = rgSortFields[iField];

					if ( A[strField] < B[strField] )
						return -1;

					if ( A[strField] > B[strField] )
						return 1;

					VUtils.Assert( A[strField] == B[strField] );
				}

				return 0;
			}
		);

		var fnFormat = function( Stat )
		{
			var strResult = "";
			for ( var iField = 0, cFields = rgSortFields.length; iField < cFields; ++iField )
			{
				var strField = rgSortFields[iField];
				var Val = Stat[strField];
				var strVal = "";

				if ( $.isNumeric( Val ) )
				{
					strVal = VUtils.FormatIntWithCommas( Stat[strField] );
				}
				else if ( $.type( Val ) === 'boolean' )
				{
					strVal = g_Localization.Localize( Val ? 'DotaTV_BuybackStatus_Yes' : 'DotaTV_BuybackStatus_No' );
				}
				else
				{
					strVal = Stat[strField];
				}

				strResult += strVal;

				if ( iField < cFields - 1 )
				{
					strResult += " / ";
				}
			}

			return strResult;
		};

		// Now re-order the panels based on the sorted results
		for ( var i = 0, cStats = rgStatCache.length; i < cStats; ++i )
		{
			var CurStat = rgStatCache[i];
			var nTeam = CurStat.team;
			var iPlayer = CurStat.player_index;
			var Player = CurStat.player;

			var $Panel = this.$m_Panels[CurStat.team][CurStat.player_index];
			$Panel.css( 'order', cStats - i );	// Display in descending order

			if ( i == cStats - 1 )
			{
				$Panel.addClass( 'BorderBottom' );
			}
			else
			{
				$Panel.removeClass( 'BorderBottom' );
			}

			if ( this.m_bUpdatePlayerNames )
			{
				this.$m_Label_PlayerName[nTeam][iPlayer].text( Player.GetName() );
			}

			this.$m_Label_Stat[nTeam][iPlayer].text( fnFormat( CurStat ) );
		}

		this.m_bUpdatePlayerNames = false;
	};

	CSpectatorStatsPanel.prototype.OnWindowResize = function()
	{
		CBasePanel.prototype.OnWindowResize.apply( this, arguments );
	};

	CSpectatorStatsPanel.prototype.SetSelectedStatType = function( strType )
	{
		this.m_strSelectedStatType = strType;

		var $DropdownElem = this.$m_ComboDropdownElem[strType];
		//this.$m_ComboBox.find( '.Shortcut' ).text( $DropdownElem.find( '.Shortcut' ).text() );
		this.$m_ComboBox.find( '.Text' ).text( $DropdownElem.find( '.Desc' ).text() );
	};

	//--------------------------------------------------------------------------------------------

	var CCheerPanel = function( PanelGroup )
	{
		CBasePanel.call( this, '#' + DOTA_CONSTS.DIV_ID_TOURNAMENT_CHEER, PanelGroup );

		this.m_flNextCheerRequestTime = null;

		this.m_CheerCounts = {};
		this.$m_TeamRows = {};
		this.$m_CheerButtons = {};
		this.$m_rgBarContainers = {};
		this.$m_ColoredSubBars = {};
		this.$m_PeakBars = {};
		this.m_TeamPeaks = {};

		this.m_bSendCheersRequestInFlight = false;

		this.m_flPercentOfPeak = {};
		this.m_cPeak = 1000;	// Starting peak

		// Initialize all the DOM elements
		for ( var nTeam = DOTA_CONSTS.TEAM_RADIANT; nTeam <= DOTA_CONSTS.TEAM_DIRE; ++nTeam )
		{
			this.$m_TeamRows[nTeam] = $( '.TeamRow_' + GetRadiantDireFromTeam( nTeam ) + '_js' );
			this.$m_CheerButtons[nTeam] = this.$m_TeamRows[nTeam].find( '.Button' );
			this.$m_rgBarContainers[nTeam] = this.$m_TeamRows[nTeam].find( '.BarContainer' );
			this.$m_ColoredSubBars[nTeam] = [];
			this.$m_PeakBars[nTeam] = [];
			this.m_flPercentOfPeak[nTeam] = [ 0, 0 ];
			this.m_TeamPeaks[nTeam] = 0;

			var strTeam = GetRadiantDireFromTeam( nTeam );
			for ( var i = 0; i < DOTA_CONSTS.CHEER_BAR_COUNT; ++i )
			{
				var $Bar = $( '<span>' ).addClass( 'Bar' );
				var $ColoredSubBar = $( '<span>' ).addClass( 'Active_' + strTeam + '_' + ( i + 1 ) );
				var $PeakIndicator = $( '<span>' ).addClass( 'PeakIndicator' ).addClass( strTeam + 'Peak' );

				$Bar.append( $ColoredSubBar ).append( $PeakIndicator );
				//$ColoredSubBar.css( 'opacity', Math.random() );

				this.$m_rgBarContainers[nTeam].append( $Bar );
				this.$m_ColoredSubBars[nTeam].push( $ColoredSubBar );
				this.$m_PeakBars[nTeam].push( $PeakIndicator );
			}
		}

		var This = this;

		this.$m_MessagePanel = this.$m_Panel.find( '.MessagePanel' );
		this.$m_LoginContainer = this.$m_MessagePanel.find( '.LoginContainer' );
		this.$m_NotLiveMsg = this.$m_MessagePanel.find( '.NotLiveMsgContainer' );

		// Hook up close button for overlay
		this.$m_MessagePanel.find( '.CloseButton' ).click(
			function()
			{
				This.$m_MessagePanel.hide();
			}
		);

		this.$m_LoginContainer.find( '.Button' ).click(
			function()
			{
				RedirectToLogin();
			}
		);

		// Handle cheer/login
		this.$m_Panel.find( '.Button' ).click(
			function()
			{
				if ( !g_bIsLoggedIn )
				{
					This.DisplayMessageOverlay_( This.$m_LoginContainer );
				}
				else
				{
					This.Cheer( GetTeamFromString( $( this ).attr( 'data-team' ) ) );
				}
			}
		);

		// Setup hide/show buttons
		var $HideContainer = this.$m_Panel.find( '.Container' );
		var $HideShowButtons = this.$m_Panel.find( '.HideShowButtons' );
		$HideShowButtons.find( '.HideButton' ).click(
			function()
			{
				This.$m_Panel.addClass( 'MinimalMode' );
			}
		);

		$HideShowButtons.find( '.ShowButton' ).click(
			function()
			{
				This.$m_Panel.removeClass( 'MinimalMode' );
			}
		);

	};

	CCheerPanel.prototype = Object.create( CBasePanel.prototype );
	CCheerPanel.prototype.constructor = CCheerPanel;

	CCheerPanel.prototype.Init = function()
	{
		CBasePanel.prototype.Init.apply( this, arguments );

		this.ClearCheers_();
	};

	CCheerPanel.prototype.OnInitTournament = function( unLeagueID )
	{
		CBasePanel.prototype.OnInitTournament.apply( this, arguments );

		// Get initial values now.
		this.m_flNextCheerRequestTime = VUtils.GetTime();
	};

	CCheerPanel.prototype.OnNewMatch = function()
	{
		CBasePanel.prototype.OnNewMatch.apply( this, arguments );

		if ( !g_Tournament )
			return;

		this.ClearCheers_();
	};

	CCheerPanel.prototype.DisplayMessageOverlay_ = function( $Container )
	{
		this.$m_LoginContainer.hide();
		this.$m_NotLiveMsg.hide();

		$Container.show();

		this.$m_MessagePanel.show();
	};

	CCheerPanel.prototype.ClearCheers_ = function()
	{
		for ( var nTeam = DOTA_CONSTS.TEAM_RADIANT; nTeam <= DOTA_CONSTS.TEAM_DIRE; ++nTeam )
		{
			this.m_CheerCounts[nTeam] = 0;
		}
	};

	CCheerPanel.prototype.ScheduleNextCheerRequestTime_ = function()
	{
		// Already scheduled?
		if ( this.m_flNextCheerRequestTime > VUtils.GetTime() )
			return;

		this.m_flNextCheerRequestTime = VUtils.GetTime() + DOTA_CONSTS.CHEEER_SEND_INTERVAL;
	};

	CCheerPanel.prototype.OnDataReceived = function()
	{
		CBasePanel.prototype.OnDataReceived.apply( this, arguments );
	};

	CCheerPanel.prototype.Cheer = function( nTeam )
	{
		++this.m_CheerCounts[nTeam];

//		this.m_cPeak = Math.max( this.m_cPeak, this.m_CheerCounts[DOTA_CONSTS.TEAM_RADIANT], this.m_CheerCounts[DOTA_CONSTS.TEAM_DIRE] );

		// Only schedule if we don't have one already
		this.ScheduleNextCheerRequestTime_();
	};

	CCheerPanel.prototype.OnTeamIDChanged = function( nTeam, nTeamID )
	{
		CBasePanel.prototype.OnTeamIDChanged.apply( this, arguments );

		// Update all logos for the given team
		var strLogoURL = g_Tournament.GetTeamLogoURL( nTeamID, false );
		var $ImageContainer = this.$m_CheerButtons[nTeam].find( '.ImageBackground' );
		$ImageContainer.empty();
		$ImageContainer.append( CreateImage( strLogoURL ) );

		var This = this;
		ProcessWhenTournamentDataReady(
			function()
			{
				//This.m_rgBarContainers[nTeam].css( 'background', g_Tournament.GetTeamPrimaryColor( nTeamID ) );
			}
		);
	};

	CCheerPanel.prototype.GetUpdateInterval = function()
	{
		return 0.1;
	};

	CCheerPanel.prototype.SendCheers = function()
	{
		if ( this.m_bSendCheersRequestInFlight )
		{
			// Post is already in flight, but we can schedule the next send, if one has not been already scheduled.
			this.ScheduleNextCheerRequestTime_();

			return;
		}

		VUtils.Assert( g_Match );

		var This = this;

		// Don't allow multiple simultaneous posts.
		this.m_bSendCheersRequestInFlight = true;

		// Send cheers now
		$.post(
			g_strPostAndGetCheersWebAPIURL,
			{
				matchid: g_Match.GetMatchID(),
				serversteamid: g_Match.GetServerSteamID(),
				teamid_radiant: g_Match.GetTeamID( DOTA_CONSTS.TEAM_RADIANT ),
				cheers_radiant: this.m_CheerCounts[DOTA_CONSTS.TEAM_RADIANT],
				teamid_dire: g_Match.GetTeamID( DOTA_CONSTS.TEAM_DIRE ),
				cheers_dire: this.m_CheerCounts[DOTA_CONSTS.TEAM_DIRE] 
			},
			function( json )
			{
				// In dev, get results from the WebAPI -- otherwise get them from the Stream itself
				if ( g_bIsDev && !g_DevConfig['cheer_use_stream_values'] )
				{
					var bFailed = undefined == json.result || undefined === json.result.team_1 || undefined === json.result.team_2 || undefined === json.result.team_2;
					if ( !bFailed )
					{
						var bFake = false;
						if ( bFake )
						{
							var cCheers = Math.floor( ( 0.5 + 0.5 * Math.sin( VUtils.GetTime() * .2 ) ) * 1000 );

							g_Match.SetTeamCheers( DOTA_CONSTS.TEAM_RADIANT, cCheers );
							g_Match.SetTeamCheers( DOTA_CONSTS.TEAM_DIRE, cCheers );
							g_Match.SetCheerPeak( Math.max( cCheers, g_Match.GetCheerPeak() ) );
						}
						else
						{
							g_Match.SetTeamCheers( DOTA_CONSTS.TEAM_RADIANT, json.result.team_1 );
							g_Match.SetTeamCheers( DOTA_CONSTS.TEAM_DIRE, json.result.team_2 );
							g_Match.SetCheerPeak( json.result.peak );
						}
					}
				}

				This.m_bSendCheersRequestInFlight = false;

				This.ScheduleNextCheerRequestTime_();
			}
		);

		// Clear cheers right away
		this.ClearCheers_();
	};

	CCheerPanel.prototype.MapCheerCountToScale = function( n )
	{
		return VUtils.Clamp( n / g_Match.GetCheerScaleMax(), 0, 1 );
	};

	CCheerPanel.prototype.MapPercentToBarIndex = function( t )
	{
		return Math.floor( VUtils.Clamp( t * ( DOTA_CONSTS.CHEER_BAR_COUNT - 1 ), 0, DOTA_CONSTS.CHEER_BAR_COUNT - 1 ) );
	};

	CCheerPanel.prototype.UpdateCheerMeters = function( flElapsed )
	{
		var flWeightPerBar = DOTA_CONSTS.CHEER_BAR_COUNT / 100;

		for ( var nTeam = DOTA_CONSTS.TEAM_RADIANT; nTeam <= DOTA_CONSTS.TEAM_DIRE; ++nTeam )
		{
			var cCheers = g_Match.GetTeamCheers( nTeam );

			// Update peaks for team
			this.m_TeamPeaks[nTeam] = Math.max( this.m_TeamPeaks[nTeam], cCheers );

			// Set a new target
			this.m_flPercentOfPeak[nTeam][1] = this.MapCheerCountToScale( cCheers );

			// Move towards the target
			this.m_flPercentOfPeak[nTeam][0] = VUtils.LerpClamped( flElapsed * 10.0, this.m_flPercentOfPeak[nTeam][0], this.m_flPercentOfPeak[nTeam][1] );

			var cActiveBars = Math.floor( this.m_flPercentOfPeak[nTeam][0] * DOTA_CONSTS.CHEER_BAR_COUNT );
			var flRemainder = Math.max( 0, this.m_flPercentOfPeak[nTeam][0] * DOTA_CONSTS.CHEER_BAR_COUNT - cActiveBars );

			for ( var i = 0; i < cActiveBars - 1; ++i )
			{
				this.$m_ColoredSubBars[nTeam][i].css( 'opacity', '1.0' );
				this.$m_PeakBars[nTeam][i].css( 'opacity', '0.0' );
			}

			// Manually calculate the bar on the cusp
			if ( cActiveBars > 0 )
			{
				this.$m_ColoredSubBars[nTeam][cActiveBars - 1].css( 'opacity', VUtils.Clamp( flRemainder / flWeightPerBar, 0, 1 ) );
				this.$m_PeakBars[nTeam][cActiveBars - 1].css( 'opacity', '0.0' );
			}

			for ( var i = cActiveBars; i < DOTA_CONSTS.CHEER_BAR_COUNT; ++i )
			{
				this.$m_ColoredSubBars[nTeam][i].css( 'opacity', '0.0' );
				this.$m_PeakBars[nTeam][i].css( 'opacity', '0.0' );
			}

			// Show peak bar
			var cPeakForTeam = this.m_TeamPeaks[nTeam];
			if ( cPeakForTeam > 0 )
			{
				var iPeakBar = this.MapPercentToBarIndex( this.MapCheerCountToScale( cPeakForTeam ) );
				this.$m_PeakBars[nTeam][iPeakBar].css( 'opacity', '1.0' );
			}
		}
	};

	CCheerPanel.prototype.Think = function( flCurTime, flElapsed )
	{
		CBasePanel.prototype.Think.apply( this, arguments );

		if ( null !== this.m_flNextCheerRequestTime && this.m_flNextCheerRequestTime <= flCurTime )
		{
			this.SendCheers();
		}

		this.UpdateCheerMeters( flElapsed );
	};

	CCheerPanel.prototype.OnWindowResize = function()
	{
		CBasePanel.prototype.OnWindowResize.apply( this, arguments );
	};

	//--------------------------------------------------------------------------------------------

	var CTournamentBox = function( PanelGroup )
	{
		CBasePanel.call( this, '#' + DOTA_CONSTS.DIV_ID_TOURNAMENT_AD, PanelGroup );

		this.$m_DummyGameListing = $( '#DummyGameListing' ).clone();
		this.$m_GamesInProgress = this.$m_Panel.find( '.GamesInProgress' );
		this.$m_GamesComingUp = this.$m_Panel.find( '.GamesComingUp' );
		this.$m_GamesInProgressList = this.$m_GamesInProgress.find( '.GameList' );
		this.$m_GamesComingUpList = this.$m_GamesComingUp.find( '.GameList' );
		this.$m_HeaderText = this.$m_Panel.find( 'h1' );
		this.m_flNextPollTime = null;
	};

	CTournamentBox.prototype = Object.create( CBasePanel.prototype );
	CTournamentBox.prototype.constructor = CTournamentBox;

	CTournamentBox.prototype.OnDataReceived = function()
	{
		CBasePanel.prototype.OnDataReceived.apply( this, arguments );
	};

	CTournamentBox.prototype.OnInitTournament = function( unLeagueID )
	{
		CBasePanel.prototype.OnInitTournament.apply( this, arguments );

		// Get data on next Think().
		this.m_flNextPollTime = VUtils.GetTime();

		// Do an initial font sizing based on panel width.
		this.ResizeFonts();
	};

	CTournamentBox.prototype.ScheduleNextPoll = function()
	{
		this.m_flNextPollTime = VUtils.GetTime() + DOTA_CONSTS.TOURNAMENT_SCHEDULE_UPDATE_INTERVAL;
	};

	CTournamentBox.prototype.BShouldThink = function()
	{
		return null !== g_Tournament;
	};

	CTournamentBox.prototype.Think = function( flCurTime, flElapsed )
	{
		CBasePanel.prototype.Think.apply( this, arguments );

		if ( null !== this.m_flNextPollTime && this.m_flNextPollTime <= VUtils.GetTime() )
		{
			this.UpdateData();
		}
	};

	CTournamentBox.prototype.UpdateData = function()
	{
		var This = this;
		$.get(
			g_strLeaguesBaseURL + "getliveandupcominggames",
			{
				league_id: g_Tournament.GetLeagueID(),
				stream_language: g_strStreamLanguage
			},
			function( json )
			{
//				console.log(json);

				if ( !json.success )
					return;

				This.$m_GamesInProgressList.empty();
				This.$m_GamesComingUpList.empty();

				var cLiveGamesAdded = 0;
				var nMaxInProgress = 2;
				for ( var i = 0, cLen = json.live_games.length; i < cLen; ++i )
				{
					var bIsMatchBeingViewed = false;
					for ( var iMatch = 0, cMatches = json.live_games[i].matches.length; iMatch < cMatches; ++iMatch )
					{
						if ( g_Match.GetMatchID() == json.live_games[i].matches[iMatch].match_id )
						{
							bIsMatchBeingViewed = true;
							break;
						}
					}

					if ( bIsMatchBeingViewed )
						continue;

					This.$m_GamesInProgressList.append( This.CreateGameListElement( json.live_games[i] ) );

					if ( ++cLiveGamesAdded >= nMaxInProgress )
						break;
				}

				if ( cLiveGamesAdded > 0 )
				{
					This.$m_GamesInProgress.show();
				}
				else
				{
					This.$m_GamesInProgress.hide();
				}

				This.$m_GamesInProgressList.find( 'li' ).click(
					function()
					{
						var strURL = $( this ).attr( 'data-linkurl' );
						window.location.href = strURL;
					}
				);

				var cUpcomingAdded = 0;
				for ( var i = 0, cLen = Math.min( 3 - cLiveGamesAdded, json.upcoming_series.length ); i < cLen; ++i )
				{
					This.$m_GamesComingUpList.append( This.CreateGameListElement( json.upcoming_series[i] ) );
					++cUpcomingAdded;
				}

				if ( cUpcomingAdded > 0 )
				{
					This.$m_GamesComingUp.show();
				}
				else
				{
					This.$m_GamesComingUp.hide();
				}

				This.SetWaitingForData( false );

				if ( 0 === cLiveGamesAdded && 0 === cUpcomingAdded )
				{
					This.$m_Panel.hide();
				}
				else
				{
					This.$m_Panel.show();
				}
			}
		);

		this.ScheduleNextPoll();
	};

	CTournamentBox.prototype.CreateGameListElement = function( GameData )
	{
		var $LI = this.$m_DummyGameListing.clone().removeAttr( 'id' );

		if ( undefined !== GameData.watch_url )
		{
			$LI.attr( 'data-linkurl', GameData.watch_url );
		}
		$LI.find( '.Team1' ).append( CreateImage( GameData.team1_logo_url_large ) );
		$LI.find( '.Team2' ).append( CreateImage( GameData.team2_logo_url_large ) );

		return $LI;
	}

	CTournamentBox.prototype.OnWindowResize = function()
	{
		CBasePanel.prototype.OnWindowResize.apply( this, arguments );
	};

	CTournamentBox.prototype.ResizeFonts = function()
	{
		CBasePanel.prototype.ResizeFonts.apply( this, arguments );

		var flBaseFontSize = this.$m_Panel.actual( 'width' ) * .0037;
		this.$m_HeaderText.css( 'font-size', flBaseFontSize + 'em' );
	};

	//--------------------------------------------------------------------------------------------

	var COverviewHeaderPanel = function( PanelGroup )
	{
		CBasePanel.call( this, '#' + DOTA_CONSTS.DIV_ID_OVERVIEW_HEADER, PanelGroup );

		// NOTE: All match times are handled by the UI Manager.

		this.$m_LogoSquare = this.$m_Panel.find( '.Panel_OverviewHeader_LogoSquare' ).find( '.ImageBackground' );
		this.$m_LogoWide = this.$m_Panel.find( '.Panel_OverviewHeader_LogoWide' ).find( '.ImageBackground' );
		this.$m_TournamentName = this.$m_Panel.find( '.TournamentName' );
		this.$m_MatchDescription = this.$m_Panel.find( '.MatchDescription' );

		this.$m_TeamKillCounts = {};
		this.$m_TeamNames = {};

		this.m_TeamIDs = {};

		this.$m_DayNightController = $( '#DayNightController' );

		// Initialize all the DOM elements
		for ( var nTeam = DOTA_CONSTS.TEAM_RADIANT; nTeam <= DOTA_CONSTS.TEAM_DIRE; ++nTeam )
		{
			this.$m_TeamKillCounts[nTeam] = $( '.TeamKills_' + GetRadiantDireFromTeam( nTeam ) + '_js' );
			this.$m_TeamNames[nTeam] = $( '.TeamName_' + GetRadiantDireFromTeam( nTeam ) + '_js' );

			this.m_TeamIDs[nTeam] = null;
		}

		// Load the tournament images
		//if ( g_Tournament )
		//{
			//this.$m_LogoSquare.append( CreateImage( g_Tournament.GetLogoImageURLs().logo_square_small ) );
			//this.$m_LogoWide.append( CreateImage( g_Tournament.GetLogoImageURLs().logo_wide ) );
		//}
	};

	COverviewHeaderPanel.prototype = Object.create( CBasePanel.prototype );
	COverviewHeaderPanel.prototype.constructor = COverviewHeaderPanel;

	COverviewHeaderPanel.prototype.OnDataReceived = function()
	{
		CBasePanel.prototype.OnDataReceived.apply( this, arguments );

		if ( g_Match )
		{
			for ( var nTeam = DOTA_CONSTS.TEAM_RADIANT; nTeam <= DOTA_CONSTS.TEAM_DIRE; ++nTeam )
			{
				var bRadiant = nTeam == DOTA_CONSTS.TEAM_RADIANT;

				this.$m_TeamKillCounts[nTeam].html( g_Match.GetTeamScore( nTeam ) );
			}
		}

		if ( this.$m_DayNightController.length )
		{
			var flTimeOfDay = g_Match.GetTimeOfDay();
			var nRotation = parseInt( -90 + flTimeOfDay * 360 );
			this.$m_DayNightController.css( 'transform', 'rotate(' + nRotation + 'deg)' );
		}
	};

	COverviewHeaderPanel.prototype.BRequiresWaitingPanel = function()
	{
		return false;
	};

	COverviewHeaderPanel.prototype.Think = function( flCurTime, flElapsed )
	{
		CBasePanel.prototype.Think.apply( this, arguments );
	};

	COverviewHeaderPanel.prototype.OnWindowResize = function()
	{
		CBasePanel.prototype.OnWindowResize.apply( this, arguments );
	};

	//--------------------------------------------------------------------------------------------

	var CPlayerListPanel = function( PanelGroup )
	{
		CBasePanel.call( this, '#' + DOTA_CONSTS.DIV_ID_STATSPANEL_PLAYERS, PanelGroup );

		this.$m_ChildPanels = {};
		this.$m_RespawnTimePanels = {};
		this.m_HealthBars = {};
		this.m_ManaBars = {};
		this.m_ItemContainers = {};
		this.$m_PlayerNames = {};
		this.$m_HeroImages = {};
		this.$m_Levels = {};
		this.$m_CurGold = {};
		this.$m_NetGold = {};
		this.$m_UltContainers = {};
		this.$m_UltCooldownText = {};
		this.m_HeroIDs = {};

		// Initialize all the DOM elements
		var $Dummy = $( '#Panel_Players_DummyInstance' );
		for ( var iPlayer = 0; iPlayer < DOTA_CONSTS.PLAYERS_PER_TEAM; ++iPlayer )
		{
			for ( var nTeam = DOTA_CONSTS.TEAM_RADIANT; nTeam <= DOTA_CONSTS.TEAM_DIRE; ++nTeam )
			{
				this.m_ItemContainers[nTeam] = this.m_ItemContainers[nTeam] || {};
				this.$m_ChildPanels[nTeam] = this.$m_ChildPanels[nTeam] || {};
				this.$m_RespawnTimePanels[nTeam] = this.$m_RespawnTimePanels[nTeam] || {};
				this.$m_PlayerNames[nTeam] = this.$m_PlayerNames[nTeam] || {};
				this.$m_HeroImages[nTeam] = this.$m_HeroImages[nTeam] || {};
				this.$m_Levels[nTeam] = this.$m_Levels[nTeam] || {};
				this.$m_CurGold[nTeam] = this.$m_CurGold[nTeam] || {};
				this.$m_NetGold[nTeam] = this.$m_NetGold[nTeam] || {};
				this.$m_UltContainers[nTeam] = this.$m_UltContainers[nTeam] || {};
				this.$m_UltCooldownText[nTeam] = this.$m_UltCooldownText[nTeam] || {};
				this.m_HealthBars[nTeam] = this.m_HealthBars[nTeam] || {};
				this.m_ManaBars[nTeam] = this.m_ManaBars[nTeam] || {};
				this.m_HeroIDs[nTeam] = this.m_HeroIDs[nTeam] || {};

				var $CurPanel = $Dummy.clone().removeAttr(
					'id'
				).data(
					'team',
					nTeam
				).data(
					'playerindex',
					iPlayer
				).appendTo(
					this.$m_LoadedContent
				);

				$CurPanel.addClass( 'Transparent' );	// Default to hidden until we know there is valid data for the given player.

				this.$m_ChildPanels[nTeam][iPlayer] = $CurPanel;
				this.$m_RespawnTimePanels[nTeam][iPlayer] = $CurPanel.find( '.RespawnTime' );
				this.$m_PlayerNames[nTeam][iPlayer] = $CurPanel.find( '.PlayerName' );
				this.$m_HeroImages[nTeam][iPlayer] = $CurPanel.find( '.HeroImage' );
				this.$m_Levels[nTeam][iPlayer] = $CurPanel.find( '.Level' );
				this.$m_CurGold[nTeam][iPlayer] = $CurPanel.find( '.CurGold' ).find( '.Gold' );
				this.$m_NetGold[nTeam][iPlayer] = $CurPanel.find( '.NetGold' ).find( '.Gold' );
				this.$m_UltContainers[nTeam][iPlayer] = $CurPanel.find( '.UltStatusContainer' );
				this.$m_UltCooldownText[nTeam][iPlayer] = this.$m_UltContainers[nTeam][iPlayer].find( '.Text' );

				this.m_HealthBars[nTeam][iPlayer] = new CHealthBar( {
					panel: $CurPanel.find( '.HealthContainer' ),
					current_points_panel: $CurPanel.find( '.HealthPoints' ),
					is_health_bar: true
				} );

				this.m_ManaBars[nTeam][iPlayer] = new CHealthBar( {
					panel: $CurPanel.find( '.ManaContainer' ),
					current_points_panel: $CurPanel.find( '.ManaPoints' ),
					is_health_bar: false
				} );

				this.m_HeroIDs[nTeam][iPlayer] = null;

				this.m_ItemContainers[nTeam][iPlayer] = new VItemContainer( this.$m_ChildPanels[nTeam][iPlayer].find( '.Items' ), [ 'TransparentBackground' ] );
			}

			this.$m_LoadedContent.append( '<div style="clear: both;"></div>' );
		}

		$( '.Panel_Players_Instance' ).click(
			function()
			{
				var nTeam = $( this ).data( 'team' );
				var iPlayer = $( this ).data( 'playerindex' );

				if ( !g_Match || ( g_Match && g_Match.BIsStreamerMode() && !g_Match.BIsStreamerTeam( nTeam ) ) )
				{
					PlayErrorSound();
					return;
				}
		
				// Since player details require all players to have assigned heroes, we only allow you to click through if all players have heroes
				if ( !g_Match.BAllPlayersHaveHeroes() )
				{
					PlayErrorSound();
					return;
				}

				g_UIManager.ShowPlayerDetailsPanel( nTeam, iPlayer );
			}
		);
	};

	CPlayerListPanel.prototype = Object.create( CBasePanel.prototype );
	CPlayerListPanel.prototype.constructor = CPlayerListPanel;

	CPlayerListPanel.prototype.OnNewMatch = function()
	{
		CBasePanel.prototype.OnNewMatch.apply( this, arguments );

		for ( var nTeam = DOTA_CONSTS.TEAM_RADIANT; nTeam <= DOTA_CONSTS.TEAM_DIRE; ++nTeam )
		{
			var bRadiant = nTeam == DOTA_CONSTS.TEAM_RADIANT;
			for ( var iPlayer = 0; iPlayer < DOTA_CONSTS.PLAYERS_PER_TEAM; ++iPlayer )
			{
				if ( g_Match.BIsStreamerMode() )
				{
					var $CurPanel = this.$m_ChildPanels[nTeam][iPlayer];

					if ( !g_Match.BIsStreamerTeam( nTeam ) )
					{
						$CurPanel.addClass( 'NonStreamerTeam' );
					}
					else
					{
						$CurPanel.removeClass( 'NonStreamerTeam' );
					}
				}
			}
		}
	}

	CPlayerListPanel.prototype.OnDataReceived = function()
	{
		CBasePanel.prototype.OnDataReceived.apply( this, arguments );

		var cPlayersAdded = 0;
		for ( var nTeam = DOTA_CONSTS.TEAM_RADIANT; nTeam <= DOTA_CONSTS.TEAM_DIRE; ++nTeam )
		{
			var bRadiant = nTeam == DOTA_CONSTS.TEAM_RADIANT;
			for ( var iPlayer = 0; iPlayer < DOTA_CONSTS.PLAYERS_PER_TEAM; ++iPlayer )
			{
				var $CurPanel = this.$m_ChildPanels[nTeam][iPlayer];
				var Player = g_Match.GetPlayer( nTeam, iPlayer );
				if ( !Player || !Player.BIsValid() )
				{
					// We've received data but the given player has not been picked yet or otherwise is invalid in some way
					this.$m_ChildPanels[nTeam][iPlayer].addClass( 'Transparent' );
					continue;
				}

				this.$m_PlayerNames[nTeam][iPlayer].text( Player.GetName() );

				// Update the hero image if it's changed
				var nPlayerHeroID = Player.GetHeroID();
				if ( this.m_HeroIDs[nTeam][iPlayer] != nPlayerHeroID )
				{
					var strHeroImageURL = GetHeroImageURL( nPlayerHeroID );
					this.$m_HeroImages[nTeam][iPlayer].attr( 'src', strHeroImageURL );

					this.m_HeroIDs[nTeam][iPlayer] = nPlayerHeroID;

					if ( g_bIsDev )
					{
						console.log( "Loading new hero image, " + strHeroImageURL );
					}
				}

				this.$m_Levels[nTeam][iPlayer].html( Player.GetLevel() );

				this.$m_CurGold[nTeam][iPlayer].html( Player.GetGold() );
				this.$m_NetGold[nTeam][iPlayer].html( Player.GetNetGold() );

				var HealthBar = this.m_HealthBars[nTeam][iPlayer];
				HealthBar.SetTeam( nTeam );
				HealthBar.Update( Player );

				this.m_ManaBars[nTeam][iPlayer].Update( Player );

				if ( g_UIManager.BIsSlimMode() )
				{
					if ( cPlayersAdded < 2 * DOTA_CONSTS.PLAYER_PER_TEAM - 1 )
					{
						$CurPanel.addClass( 'BottomBorder_js' );
					}
				}
				else if ( iPlayer < DOTA_CONSTS.PLAYERS_PER_TEAM - 1 )
				{
					$CurPanel.addClass( 'BottomBorder_js' );
				}

				this.$m_ChildPanels[nTeam][iPlayer].removeClass( 'Transparent' );

				// Update alive state
				this.$m_ChildPanels[nTeam][iPlayer].attr( 'data-dead', Player.BIsAlive() ? 0 : 1 );

				// Update respawn time
				var nRespawnTime = Player.GetRespawnTime();
				if ( nRespawnTime )
				{
					this.$m_RespawnTimePanels[nTeam][iPlayer].html( nRespawnTime );
				}

				// Update their items
				for ( var iSlot = 0; iSlot < DOTA_CONSTS.NUM_ITEM_SLOTS; ++iSlot )
				{
					this.m_ItemContainers[nTeam][iPlayer].SetSlotToItem( iSlot, Player.GetItem( iSlot ) );
				}

				// Update ultimate status
				if ( Player.BHasUlt() )
				{
					var nCooldown = Player.GetUltCooldown();
					if ( nCooldown > 0 )
					{
						this.$m_UltCooldownText[nTeam][iPlayer].html( nCooldown );
						this.$m_UltContainers[nTeam][iPlayer].attr( 'data-ultstatus', 'oncooldown' );
					}
					else
					{
						if ( Player.BHasEnoughManaForUlt() )
						{
							this.$m_UltContainers[nTeam][iPlayer].attr( 'data-ultstatus', 'ultready' );
						}
						else
						{
							this.$m_UltContainers[nTeam][iPlayer].attr( 'data-ultstatus', 'notenoughmana' );
						}
					}
				}

				++cPlayersAdded;
			}

			this.SetWaitingForData( cPlayersAdded == 0 );
		}
	};

	CPlayerListPanel.prototype.Think = function( flCurTime, flElapsed )
	{
		CBasePanel.prototype.Think.apply( this, arguments );
	};

	CPlayerListPanel.prototype.OnWindowResize = function()
	{
		CBasePanel.prototype.OnWindowResize.apply( this, arguments );
	};

	//--------------------------------------------------------------------------------------------

	//
	// Simple helper for creating 6-slot item display for a player's items/stash
	//
	var VItemContainer = function( $Container, rgAdditionalBackgroundStyles )
	{
		this.$m_Container = $Container;
		this.$m_ItemContainer = $( '<div>' ).addClass( 'Items' );
		$Container.append( this.$m_ItemContainer );

		this.$m_Items = [];
		this.$m_Images = [];
		this.$m_ImageBackgrounds = [];
		this.m_ItemKeys = [];

		for ( var iSlot = 0; iSlot < DOTA_CONSTS.NUM_ITEM_SLOTS; ++iSlot )
		{
			var $Item = $( '<div>' ).addClass( 'Item' );
			var $ImageBackground = $( '<div>' ).addClass( 'ImageBackground' ).addClass( 'ImageBackground4x3' );

			this.$m_Items.push( $Item );
			this.$m_ImageBackgrounds.push( $ImageBackground );
			this.$m_Images.push( null );
			this.m_ItemKeys.push( null );

			if ( rgAdditionalBackgroundStyles )
			{
				for ( var iStyle = 0; iStyle < rgAdditionalBackgroundStyles.length; ++iStyle )
				{
					$ImageBackground.addClass( rgAdditionalBackgroundStyles[iStyle] );
				}
			}

			$Item.append( $ImageBackground );

			this.$m_ItemContainer.append( $Item );
		}
	};

	VItemContainer.prototype =
	{
		constructor: VItemContainer,

		SetSlotToItem: function( iSlot, Item )
		{
			var strKey = Item.GetKey();

			// No need to update if they're the same.
			if ( strKey == this.m_ItemKeys[iSlot] )
				return;

			var $ImageBackground = this.$m_ImageBackgrounds[iSlot];

			if ( null === strKey )
			{
				this.ClearItemImageForSlot( iSlot );
			}
			else
			{
				// If we don't have an image yet, create it now
				var strImageURL = GetItemImageURL( strKey, false );
				var $Img = this.$m_Images[iSlot];
				if ( !$Img )
				{
					var bEnableTooltips = this.$m_Container.attr( 'data-enabletooltips' );
					$Img = CreateItemImage( null, Item, bEnableTooltips );
					$ImageBackground.append( $Img );

					this.$m_Images[iSlot] = $Img;
				}

				// Set the image's source URL
				$Img.attr( 'src', strImageURL );
			}

			// Update the cache
			this.m_ItemKeys[iSlot] = strKey;
		},

		ClearItemImageForSlot: function( iSlot )
		{
			if ( !this.$m_Images[iSlot] )
				return;

			this.$m_Images[iSlot].remove();
			this.$m_Images[iSlot] = null;
			this.m_ItemKeys[iSlot] = null;
		},

		ClearItemImages: function()
		{
			for ( var iSlot = 0; iSlot < DOTA_CONSTS.NUM_ITEM_SLOTS; ++iSlot )
			{
				this.ClearItemImageForSlot( iSlot );
			}
		}
	};

	//--------------------------------------------------------------------------------------------

	var CPlayerDetailsStatsPanel = function( PanelGroup )
	{
		CBasePanel.call( this, '#' + DOTA_CONSTS.DIV_ID_STATSPANEL_PLAYERDETAILS, PanelGroup );

		var $TopRow = this.$m_Panel.find( '#Panel_PlayerDetails_RowA' );

		this.m_iPlayer = null;
		this.m_nPlayerID = null;
		this.m_nTeam = null;

		this.$m_PlayerName = this.$m_Panel.find( '.PlayerName' );
		this.$m_HeroImage = this.$m_Panel.find( '.HeroImage' );
		this.$m_RespawnTimePanel = this.$m_Panel.find( '.RespawnTime' );
		this.$m_LevelTextContainer = $TopRow.find( '.ColumnB' ).find( '.Heading' );
		this.$m_LevelText = this.$m_Panel.find( '.LevelText' );
		this.$m_Level = this.$m_LevelText.find( '.Level' );
		this.$m_HeroName = this.$m_Panel.find( '.HeroName' );
		this.$m_BuybackStatus = this.$m_Panel.find( '.BuybackStatus' );

		this.$m_Attributes = this.$m_Panel.find( '.Attributes' );

		this.$m_GoldTextContainer = $TopRow.find( '.ColumnC' ).find( '.Header' );
		this.$m_Gold = this.$m_Panel.find( '.Gold' );
		this.$m_GoldAbbrev = this.$m_Panel.find( '.GoldAbbrev' );
		this.$m_ItemContainer = this.$m_Panel.find( '#Panel_PlayerDetails_ItemContainer' );
		this.$m_StashItemContainer = this.$m_Panel.find( '#Panel_PlayerDetails_StashItemContainer' );

		this.m_ItemContainer = new VItemContainer( this.$m_ItemContainer, [ 'InnerShadow', 'DarkGrayBackgroundColor' ] );
		this.m_StashItemContainer = new VItemContainer( this.$m_StashItemContainer, [ 'InnerShadow' ] );

		this.$m_Kills = this.$m_Panel.find( '.Kills' );
		this.$m_Deaths = this.$m_Panel.find( '.Deaths' );
		this.$m_Assists = this.$m_Panel.find( '.Assists' );

		this.$m_GoldPerMin = this.$m_Panel.find( '.GoldPerMin' );
		this.$m_XPPerMin = this.$m_Panel.find( '.XPPerMin' );

		this.$m_LastHits = this.$m_Panel.find( '.LastHits' );
		this.$m_Denies = this.$m_Panel.find( '.Denies' );

		this.$m_NetGold = this.$m_Panel.find( '.NetGold' );
		this.$m_HeroDamage = this.$m_Panel.find( '.HeroDamage' );

		this.$m_TowerDamage = this.$m_Panel.find( '.TowerDamage' );
		this.$m_HealingProvided = this.$m_Panel.find( '.HealingProvided' );

		var $HealthContainer = this.$m_Panel.find( '.HealthContainer' );
		this.m_HealthBar = new CHealthBar(
			{
				panel: $HealthContainer,
				current_points_panel: $HealthContainer.find( '.Points' ),
				max_points_panel: $HealthContainer.find( '.MaxPoints' ),
				points_splitter_panel: $HealthContainer.find( '.PointsSplitter' ),
				regen_rate_panel: $HealthContainer.find( '.RegenRate' ),
				is_health_bar: true
			}
		);

		var $ManaContainer = this.$m_Panel.find( '.ManaContainer' );
		this.m_ManaBar = new CHealthBar(
			{
				panel: $ManaContainer,
				current_points_panel: $ManaContainer.find( '.Points' ),
				max_points_panel: $ManaContainer.find( '.MaxPoints' ),
				regen_rate_panel: $ManaContainer.find( '.RegenRate' ),
				is_health_bar: false
			}
		);

		// Create all ability elements from a dummy
		var $AbilitiesContainer = this.$m_Panel.find( '.AbilitiesContainer' );
		this.$m_Abilities = $( '#DummyPlayerDetails_Ability' ).children().each(
			function()
			{
				$AbilitiesContainer.append( $( this ).clone() );
			}
		);
		this.$m_Abilities = $AbilitiesContainer;
		this.$m_AbilityDetails = $( '#Panel_PlayerDetails_RowC' );
		this.$m_AbilityBlocksDummy = $( '#DummyAbilityLevelBlocks' );

		// This is a list of all block elements we maintain for resizing fonts on window size
		this.$m_Blocks = {};
		this.$m_rgBlocksContainers = [];

		this.$m_ShoppingListContainer = $( '#Panel_PlayerDetails_RowD' );
		this.$m_ShoppingListItems = this.$m_ShoppingListContainer.find( '.Items' );
	};

	CPlayerDetailsStatsPanel.prototype = Object.create( CBasePanel.prototype );
	CPlayerDetailsStatsPanel.prototype.constructor = CPlayerDetailsStatsPanel;

	CPlayerDetailsStatsPanel.prototype.SetTeam = function( nTeam )
	{
		this.m_nTeam = nTeam;
	};

	CPlayerDetailsStatsPanel.prototype.SetPlayer = function( iPlayer )
	{
		this.m_iPlayer = iPlayer;
	};

	CPlayerDetailsStatsPanel.prototype.BPreShow = function()
	{
		if ( !g_Match )
			return false;

		// This is stuff we only need to once, when the player's been selected
		var Player = g_Match.GetPlayer( this.m_nTeam, this.m_iPlayer );
		if ( !Player || !Player.BIsValid() )
			return false;

		this.m_ItemContainer.ClearItemImages();
		this.m_StashItemContainer.ClearItemImages();

		this.m_HealthBar.SetTeam( this.m_nTeam );

		VUtils.AssertMsg( undefined !== g_rgHeroData[ Player.GetHeroID() ], "No hero data for hero " + Player.GetHeroID() );

		this.$m_PlayerName.html( Player.GetName() );
		this.$m_HeroImage.attr( 'src', g_strBaseImageURL + 'heroes/' + g_rgHeroData[ Player.GetHeroID() ].key + '_vert.jpg' );
		this.$m_Level.html( Player.GetLevel() );
		this.$m_HeroName.html( Player.GetHeroName() );
		
		// Create 25 blocks for each ability and their containers
		this.$m_AbilityDetails.empty();

		// Clear the block containers array
		this.$m_rgBlocksContainers = [];
		this.$m_Blocks = {};

		// Setup abilities
		var cAbilities = Player.GetAbilityCount();
		for ( var iAbility = 0; iAbility < DOTA_CONSTS.MAX_HERO_ABILITIES_INCLUDING_ATTRIBUTE_BONUS; ++iAbility )
		{
			var $Ability = this.$m_Abilities.find( '.AbilityContainer_' + iAbility );
			if ( iAbility >= cAbilities || BIsValidAbilityName( Player.GetAbilityNameInternal( iAbility ) ) )
			{
				// Hide it if it isn't already hidden
				$Ability.addClass( 'Transparent' );
				continue;
			}

			var strAbilityName = Player.GetAbilityNameInternal( iAbility );

			$Ability.removeClass( 'Transparent' );

			var $ImageContainer = $Ability.find( '.ImageBackground' );
			$ImageContainer.empty();
			var $Img = CreateImage( Player.GetAbilityImageURL( iAbility ) );
			$Img.addClass( 'abilityIconWithTooltip' ).attr( 'abilityname', strAbilityName );
			$ImageContainer.append( $Img );

			if ( iAbility < DOTA_CONSTS.MAX_HERO_ABILITIES_INCLUDING_ATTRIBUTE_BONUS - 1 )
			{
				$Ability.addClass( 'AbilityRightPadding' );
			}

			$Ability.show();

			// Create the block container with 25 blocks for this ability
			var $AbilityBlockContainer = this.$m_AbilityBlocksDummy.clone().removeAttr( 'id' );
			$AbilityBlockContainer.find( '.Name' ).html( Player.GetAbilityName( iAbility ) );

			$Img = CreateImage( Player.GetAbilityImageURL( iAbility ) );
			$Img.addClass( 'abilityIconWithTooltip' ).attr( 'abilityname', strAbilityName );
			$AbilityBlockContainer.find( '.ImageBackground' ).append( $Img );

			// Only show relevant levels
			var $BlocksContainer = $AbilityBlockContainer.find( '.Blocks' );
			var $Blocks = {};
			var This = this;
			$BlocksContainer.children().each(
				function()
				{
					// Add all to the list of blocks
					var $This = $( this );
					var nLevel = $This.data( 'level' );

					var $CurBlock = $This.find( ':nth-child(1)' );
					$Blocks[nLevel] = $CurBlock;
				}
			);

			// Quick reference to each block by ability index / level
			var nAbilityID = Player.GetAbilityID( iAbility );
			This.$m_Blocks[nAbilityID] = $Blocks;

			// Also add to the list of blocks for font-resizing
			This.$m_rgBlocksContainers.push( $BlocksContainer );

			this.$m_AbilityDetails.append( $AbilityBlockContainer );
		}

		// Go through and set up values for attributes
		this.$m_Attributes.children().each(
			function()
			{
				var $This = $( this );
				var strAttribute = $This.data( 'attribute' );
				var $PrimaryIcon = $This.find( '.PrimaryIcon' );
				if ( Player.GetHeroPrimaryAttribute() === strAttribute )
				{
					$PrimaryIcon.removeClass( 'Hidden' );
				}
				else
				{
					$PrimaryIcon.addClass( 'Hidden' );
				}
			}
		);

		this.UpdateAbilityBlocks( Player );
		this.UpdateAttributes( Player );
		this.UpdateDeathState( Player );

		this.$m_KDAStatsContainer = $( '#Panel_PlayerDetails_RowA_ColumnD' );
		this.$m_KDAStatsAbbreviations = this.$m_KDAStatsContainer.find( '.Abbrev' );
		this.$m_KDAStatsFirstRow = $( '#Panel_PlayerDetails_RowA_ColumnD_FirstRow' );
		this.$m_KDAStatsFirstRowAbbreviations = this.$m_KDAStatsFirstRow.find( '.Abbrev' );

		var $RowB = $( '#Panel_PlayerDetails_RowB' );
		this.$m_RowB = $RowB;

		var nEnemyTeam = GetEnemyTeam( this.m_nTeam );

		this.$m_Farm = $RowB.find( '.FarmPercent' );
		this.$m_Damage = $RowB.find( '.DamagePercent' );
		this.$m_Fight = $RowB.find( '.FightPercent' );
		this.$m_Dead = $RowB.find( '.DeadPercent' );
		this.$m_SelfKillsOnEnemy = [];
		this.$m_SelfAssistsOnEnemy = [];
		this.$m_EnemyKillsOnSelf = [];
		this.$m_EnemyAssistsOnSelf = [];
		this.$m_EnemyHeroIcons = [];
		for ( var iEnemyPlayer = 0; iEnemyPlayer < DOTA_CONSTS.PLAYERS_PER_TEAM; ++iEnemyPlayer )
		{
			var $PlayerColumn = $RowB.find( '.Player_' + iEnemyPlayer );
			var $SelfToEnemy = $PlayerColumn.find( '.SelfKillsAndAssistsOnEnemy' );
			this.$m_SelfKillsOnEnemy.push( $SelfToEnemy.find( '.Kills' ) );
			this.$m_SelfAssistsOnEnemy.push( $SelfToEnemy.find( '.Assists' ) );

			var $EnemyToSelf = $PlayerColumn.find( '.EnemyKillsAndAssistsOnSelf' );
			this.$m_EnemyKillsOnSelf.push( $EnemyToSelf.find( '.Kills' ) );
			this.$m_EnemyAssistsOnSelf.push( $EnemyToSelf.find( '.Assists' ) );

			// Set enemy hero icon
			var EnemyPlayer = g_Match.GetPlayer( nEnemyTeam, iEnemyPlayer );
			var $HeroIcon = $PlayerColumn.find( '.HeroIcon' );
			$HeroIcon.empty();
			$HeroIcon.append( CreateImage( GetMiniHeroIconURL( EnemyPlayer.GetHeroID() ) ) );
			this.$m_EnemyHeroIcons.push( $HeroIcon );
		}

		this.UpdateShoppingListItems();

		return true;
	};

	CPlayerDetailsStatsPanel.prototype.UpdateShoppingListItems = function()
	{
		var Player = g_Match.GetPlayer( this.m_nTeam, this.m_iPlayer );
		if ( !Player || !Player.BIsValid() )
			return;

		// Clear all shopping items and start over
		this.$m_ShoppingListItems.empty();

		this.m_cCachedShoppingList = 0;

		// Go through and add all shopping items
		var cShoppingItems = Player.GetShoppingListCount();
		var $DummyShoppingItem = $( '#DummyPlayerDetails_ShoppingItem' );
		var cItemsPerRow = 16;
		var iLastRow = parseInt( cShoppingItems / cItemsPerRow );
		for ( var iItem = 0; iItem < cShoppingItems; ++iItem )
		{
			var CurShoppingItem = Player.GetShoppingListItemAtIndex( iItem );

			var $NewElem = $DummyShoppingItem.clone().removeAttr( 'id' );
			$NewElem.find( '.Time' ).html( CurShoppingItem.GetTime() );

			var strImageURL = GetItemImageURL( CurShoppingItem.GetItemID(), false );
			var $ImageContainer = $NewElem.find( '.ImageBackground' );
			$ImageContainer.append( CreateImage( strImageURL ) );

			if ( CurShoppingItem.BWasSold() )
			{
				$ImageContainer.find( '.ShoppingItemSoldOverlay' ).removeClass( 'Hidden' );
			}

			var iRow = parseInt( iItem / cItemsPerRow );
			if ( iRow < iLastRow )
			{
				// Add bottom margin if not the last row
				$NewElem.addClass( 'ShoppingItemContainerBottomMargin' );
			}

			if ( ( iItem + 1 ) % cItemsPerRow != 0 )
			{
				// Add right margin
				$NewElem.addClass( 'ShoppingItemContainerRightMargin' );
			}

			this.$m_ShoppingListItems.append( $NewElem );

			++this.m_cCachedShoppingList;
		}
	};

	CPlayerDetailsStatsPanel.prototype.UpdateAbilityBlocks = function( Player )
	{
		var cAbilities = Player.GetAbilityCount();
		var cAbilityPointsAssigned = Player.GetLevelPointCount();
		for ( var iLevelPoint = 0; iLevelPoint < cAbilityPointsAssigned; ++iLevelPoint )
		{
			var nLevel = iLevelPoint + 1;
			var rgAbilityIDs = Player.GetLevelPointAbilities( nLevel );

			for ( var iAbility = 0, cAbilitiesForLevel = rgAbilityIDs.length; iAbility < cAbilitiesForLevel; ++iAbility )
			{
				var nAbilityID = rgAbilityIDs[iAbility];

				// Some abilities we don't care about will come through here.
				if ( undefined === this.$m_Blocks[nAbilityID] )
					continue;

				// Set the number on the appropriate block, give it a border
				this.$m_Blocks[nAbilityID][nLevel].html( nLevel );
				this.$m_Blocks[nAbilityID][nLevel].addClass( 'Leveled' );

				// Set all ability blocks in the given column to the level-reached background color
				for ( var nOtherAbilityID in this.$m_Blocks )
				{
					this.$m_Blocks[nOtherAbilityID][nLevel].addClass( 'LevelReached' );
				}
			}
		}
	};

	CPlayerDetailsStatsPanel.prototype.OnDataReceived = function()
	{
		CBasePanel.prototype.OnDataReceived.apply( this, arguments );

		var Player = g_Match.GetPlayer( this.m_nTeam, this.m_iPlayer );
		if ( !Player || !Player.BIsValid() )
			return;

		for ( var iSlot = 0; iSlot < DOTA_CONSTS.NUM_ITEM_SLOTS; ++iSlot )
		{
			this.m_ItemContainer.SetSlotToItem( iSlot, Player.GetItem( iSlot ) );
			this.m_StashItemContainer.SetSlotToItem( iSlot, Player.GetStashItem( iSlot ) );
		}

		this.UpdateAbilityBlocks( Player );

		if ( this.m_cCachedShoppingList !== Player.GetShoppingListCount() )
		{
			this.UpdateShoppingListItems();
		}
	};

	CPlayerDetailsStatsPanel.prototype.Think = function( flCurTime, flElapsed )
	{
		CBasePanel.prototype.Think.apply( this, arguments );

		if ( !g_Match )
			return;

		// These have their own internal render framerate applied
		var Player = g_Match.GetPlayer( this.m_nTeam, this.m_iPlayer );
		this.m_HealthBar.Update( Player );
		this.m_ManaBar.Update( Player );
	};

	CPlayerDetailsStatsPanel.prototype.UpdateFromData = function()
	{
		CBasePanel.prototype.UpdateFromData.apply( this, arguments );

		var Player = g_Match.GetPlayer( this.m_nTeam, this.m_iPlayer );
		if ( !Player || !Player.BIsValid() )
			return;

		this.UpdateAbilities( Player );
		this.UpdateAttributes( Player );

		this.$m_Gold.html( Player.GetGold() );

		// Update K/D/A/GPM/XPM/...
		this.$m_Kills.html( Player.GetKillCount() );
		this.$m_Deaths.html( Player.GetDeathCount() );
		this.$m_Assists.html( Player.GetAssistsCount() );

		this.$m_GoldPerMin.html( VUtils.AbbreviateNumber( Player.GetGoldPerMinute() ) );
		this.$m_XPPerMin.html( VUtils.AbbreviateNumber( Player.GetXPPerMinute() ) );

		this.$m_LastHits.html( Player.GetLastHitsCount() );
		this.$m_Denies.html( Player.GetDeniesCount() );

		this.$m_NetGold.html( VUtils.AbbreviateNumber( Player.GetNetGold() ) );
		this.$m_HeroDamage.html( VUtils.AbbreviateNumber( Player.GetHeroDamage() ) );

		this.$m_TowerDamage.html( VUtils.AbbreviateNumber( Player.GetTowerDamage() ) );
		this.$m_HealingProvided.html( VUtils.AbbreviateNumber( Player.GetHealingProvided() ) );

		// NOTE: We're not using these currently.
		// Update second row, which includes kills and assists on enemies, as well as their kills/assists on the display player
		//this.$m_Farm.html( sprintf( "%.02f", Math.random() * 10 ) );
		//this.$m_Damage.html( sprintf( "%.02f", Math.random() * 10 ) );
		//this.$m_Fight.html( sprintf( "%.02f", Math.random() * 10 ) );
		//this.$m_Dead.html( sprintf( "%.02f", Math.random() * 10 ) );

		var nPlayerID = Player.GetPlayerID();
		var nEnemyTeam = GetEnemyTeam( this.m_nTeam );
		for ( var iEnemyPlayer = 0; iEnemyPlayer < DOTA_CONSTS.PLAYERS_PER_TEAM; ++iEnemyPlayer )
		{
			var nEnemyPlayerID = g_Match.GetPlayer( nEnemyTeam, iEnemyPlayer ).GetPlayerID();
			this.$m_SelfKillsOnEnemy[iEnemyPlayer].html( Player.GetKillCountOnEnemyPlayer( nEnemyPlayerID ) );
			this.$m_SelfAssistsOnEnemy[iEnemyPlayer].html( Player.GetAssistedKillCountOnEnemyPlayer( nEnemyPlayerID ) );

			var EnemyPlayer = g_Match.GetPlayer( nEnemyTeam, iEnemyPlayer );
			this.$m_EnemyKillsOnSelf[iEnemyPlayer].html( EnemyPlayer.GetKillCountOnEnemyPlayer( nPlayerID ) );
			this.$m_EnemyAssistsOnSelf[iEnemyPlayer].html( EnemyPlayer.GetAssistedKillCountOnEnemyPlayer( nPlayerID ) );
		}

		this.UpdateDeathState( Player );
	};

	CPlayerDetailsStatsPanel.prototype.UpdateDeathState = function( Player )
	{
		this.$m_Panel.attr( 'data-dead', Player.BIsAlive() ? 0 : 1 );

		// Update respawn time
		var nRespawnTime = Player.GetRespawnTime();
		if ( nRespawnTime )
		{
			this.$m_RespawnTimePanel.html( nRespawnTime );
		}
	};

	CPlayerDetailsStatsPanel.prototype.UpdateAbilities = function()
	{
		var Player = g_Match.GetPlayer( this.m_nTeam, this.m_iPlayer );

		var cAbilities = Player.GetAbilityCount();
		for ( var iAbility = 0; iAbility < cAbilities; ++iAbility )
		{
			var $Ability = this.$m_Abilities.find( '.AbilityContainer_' + iAbility );
			var $Levels = $Ability.find( '.Levels' );

			var nAbilityLevel = Player.GetAbilityLevel( iAbility );
			var nMaxAbilityLevel = Player.GetMaxAbilityLevel( iAbility );
			for ( var nLevel = 0; nLevel < nMaxAbilityLevel; ++nLevel )
			{
				var $Level = $Levels.find( '.AbilityLevel_' + nLevel );
				if ( null !== nAbilityLevel && nLevel < nAbilityLevel )
				{
					$Level.removeClass( 'EmptyLevel' ).addClass( 'LeveledLevel' );
				}
				else
				{
					$Level.removeClass( 'LeveledLevel' ).addClass( 'EmptyLevel' );
				}
			}

			// Set mana cost text
			var nManaCost = Player.GetAbilityManaCostForLevel( iAbility, nAbilityLevel );
			$Ability.find( '.ManaCost' ).html( nManaCost === 0 ? "&nbsp;" : nManaCost );
		}
	};

	CPlayerDetailsStatsPanel.prototype.UpdateAttributes = function( Player )
	{
		this.$m_Attributes.children().each(
			function()
			{
				var $This = $( this );
				var $Values = $This.find( '.Values' );
				var strAttribute = $This.data( 'attribute' );
				var strValue = Player.GetHeroBaseAttributeValue( strAttribute );
				var nBonus = Player.GetHeroBonusAttributeValue( strAttribute );
				if ( nBonus > 0 )
				{
					strValue += "+" + nBonus;
				}

				$Values.html( strValue );
			}
		);
	};

	CPlayerDetailsStatsPanel.prototype.ResizeFonts = function()
	{
		CBasePanel.prototype.ResizeFonts.apply( this, arguments );

		if ( !this.$m_rgBlocksContainers.length )
			return;

		// Get the width of the first block container's first block and use that to calculate various font-size and line-height values.
		// Constrain it to a max of 16 pixels so the fonts don't get too large.
		var nBaseKeyHeight = this.$m_rgBlocksContainers[0].children( ':nth-child(1)' ).children( ':nth-child(1)' ).actual( 'width' );
		var flBaseKeyEm = nBaseKeyHeight / 16;

		for ( var i = 0; i < this.$m_rgBlocksContainers.length; ++i )
		{
			var $CurBlockContainer = this.$m_rgBlocksContainers[i];
			$CurBlockContainer.css( 'font-size', .6 * flBaseKeyEm + 'em' );
			$CurBlockContainer.css( 'line-height', nBaseKeyHeight + 'px' );
		}

		var flKeyEm = Math.min( 1.6, Math.max( 1.3, $( window ).width() / 750 ) );
		var flKDAStatsAllRowsFontSize = 0.75 * flKeyEm;	// Applies to all rows, but then we override the font size for the first row
		var strKDAStatsFirstRowFontSize = flKDAStatsAllRowsFontSize * 1.1 + 'em';
		var strPlayerNameFontSize = 1.2 * flKeyEm + 'em';

		this.$m_ShoppingListContainer.css( 'font-size', .6 * flKeyEm + 'em' );
		this.$m_GoldTextContainer.css( 'line-height', strPlayerNameFontSize );
		this.$m_Gold.css( 'font-size', strKDAStatsFirstRowFontSize );
		this.$m_GoldAbbrev.css( 'font-size', 0.8 * flKDAStatsAllRowsFontSize + 'em' );
		this.$m_PlayerName.css( 'font-size', strPlayerNameFontSize );
		this.$m_LevelText.css( 'font-size', strKDAStatsFirstRowFontSize );
		this.$m_LevelTextContainer.css( 'line-height', strPlayerNameFontSize );
		this.$m_HeroName.css( 'font-size', 0.65 * flKeyEm + 'em' );
		this.$m_Attributes.css( 'font-size', 0.5 * flKeyEm + 'em' );
		this.$m_Abilities.children().css( 'font-size', 0.6 * flKeyEm + 'em' );
		this.$m_RespawnTimePanel.css( 'font-size', 2 * 0.8 * flKeyEm + 'em' );

		this.$m_RowB.css( 'font-size', flKeyEm * .65 + 'em' );

		var flAbbrevToStatTextRatio = 0.4;

		this.$m_KDAStatsContainer.css( 'font-size', flKDAStatsAllRowsFontSize + 'em' );
		this.$m_KDAStatsAbbreviations.css( 'font-size', flAbbrevToStatTextRatio * flKeyEm + 'em' );

		this.$m_KDAStatsFirstRow.css( 'font-size', strKDAStatsFirstRowFontSize );
		this.$m_KDAStatsFirstRowAbbreviations.css( 'font-size', flAbbrevToStatTextRatio * flKDAStatsAllRowsFontSize + 'em' );
	};

	CPlayerDetailsStatsPanel.prototype.OnWindowResize = function()
	{
		CBasePanel.prototype.OnWindowResize.apply( this, arguments );
	};

	//--------------------------------------------------------------------------------------------

	var CMatchStatsPanel = function( PanelGroup, strIFrameDivName )
	{
		CBasePanel.call( this, '#' + DOTA_CONSTS.DIV_ID_STATSPANEL_MATCHSTATS, PanelGroup );

		this.m_flNextRenderTime = null;	// Don't render yet
		this.$m_IFrame = $( '#' + strIFrameDivName );
		this.$m_ComboBox = $( '#GraphComboBoxContainer' );
		this.$m_ComboBoxText = this.$m_ComboBox.find( '.Text' );
		this.$m_ComboDropdown = this.$m_ComboBox.find( '.ComboDropdown' );

		var This = this;
		this.$m_ComboBox.click(
			function()
			{
				This.$m_ComboDropdown.toggle();
			}
		);

		this.m_strCurrentGraphType = null;
		this.m_rgGraphDisplayStrings = {};

		VUtils.AssertMsg( this.$m_IFrame.length, "Could not find IFrame div with ID " + strIFrameDivName );
	};

	CMatchStatsPanel.prototype = Object.create( CBasePanel.prototype );
	CMatchStatsPanel.prototype.constructor = CMatchStatsPanel;

	CMatchStatsPanel.prototype.OnTeamIDChanged = function( nTeam, nTeamID )
	{
		CBasePanel.prototype.OnTeamIDChanged.apply( this, arguments );

		// Update all logo for the given team
		var strLogoURL = g_Tournament.GetTeamLogoURL( nTeamID, false );
		this.SendMessageToIFrame( 'UpdateTeamLogo', { team: GetRadiantDireFromTeam( nTeam ), url: strLogoURL } );
	};

	CMatchStatsPanel.prototype.BPreShow = function()
	{
		return ( null !== this.m_flNextRenderTime );
	};

	CMatchStatsPanel.prototype.Show = function()
	{
		CBasePanel.prototype.Show.apply( this, arguments );

		this.$m_ComboBox.show();
		this.ResizeIFrameAndRender();
	};

	CMatchStatsPanel.prototype.Hide = function()
	{
		CBasePanel.prototype.Hide.apply( this, arguments );

		this.$m_ComboBox.hide();
	};

	CMatchStatsPanel.prototype.RenderGraph = function()
	{
		if ( !g_Match )
			return;

		// Send a message across the fence to render.
		var Data = g_GraphData.ComposeObjectForGraphSystem();
		this.SendMessageToIFrame( 'RenderGraph', Data );

		// Schedule next render
		this.m_flNextRenderTime = VUtils.GetTime() + DOTA_CONSTS.GRAPH_REFRESH_INTERVAL;
	};

	CMatchStatsPanel.prototype.SwitchToNewGraphType = function( strDesiredType )
	{
		// Don't do anything if we're current already
		if ( this.m_strCurrentGraphType === strDesiredType )
			return;

		// Switch to the new graph type
		this.SendMessageToIFrame( 'InitGraph', { graph_name: strDesiredType } );

		// Set the combo box text
		this.$m_ComboBoxText.html( this.m_rgGraphDisplayStrings[ strDesiredType ] );

		// Cache off the type
		this.m_strCurrentGraphType = strDesiredType;
	};

	CMatchStatsPanel.prototype.OnDataReceived = function()
	{
		CBasePanel.prototype.OnDataReceived.apply( this, arguments );

		var flCurTime = VUtils.GetTime();
		if ( this.m_flNextRenderTime > flCurTime )
			return;

		// Ready to render
		this.SetWaitingForData( false );

		// Tell the IFrame to render the graph
		this.RenderGraph();
	};

	CMatchStatsPanel.prototype.PopulateGraphComboBox = function( rgGraphs )
	{
		for ( var i = 0, cGraphs = rgGraphs.length; i < cGraphs; ++i )
		{
			var strName = rgGraphs[i].name;
			var strDisplay = rgGraphs[i].display;

			var $Elem = $( '#DummyComboDropdownElement' ).clone().removeAttr( 'id' );
			$Elem.attr( 'data-graphname', strName );
			$Elem.find( '.Desc' ).html( strDisplay );

			this.$m_ComboDropdown.append( $Elem );

			// Cache this off
			this.m_rgGraphDisplayStrings[strName] = strDisplay;
		}

		var This = this;
		this.$m_ComboDropdown.find( 'li' ).click(
			function()
			{
				var strDesiredGraph = $( this ).attr( 'data-graphname' );
				This.SwitchToNewGraphType( strDesiredGraph );
			}
		);
	};

	CMatchStatsPanel.prototype.SendMessageToIFrame = function( strMessage, Data )
	{
		SendMessageToIFrame( this.$m_IFrame, g_strDotaIFrameOriginURL, { msg: strMessage, data: Data } );
	};

	CMatchStatsPanel.prototype.Think = function( flCurTime, flElapsed )
	{
		CBasePanel.prototype.Think.apply( this, arguments );
	};

	CMatchStatsPanel.prototype.UpdateFromData = function()
	{
		CBasePanel.prototype.UpdateFromData.apply( this, arguments );
	};

	CMatchStatsPanel.prototype.OnPrePop = function( bPopped )
	{
		CBasePanel.prototype.OnPrePop.apply( this, arguments );

		// Animate the graph from opaque to transparent
		this.$m_IFrame.attr( 'data-popping', '1' );
	};

	CMatchStatsPanel.prototype.OnPostPop = function( bPopped )
	{
		CBasePanel.prototype.OnPostPop.apply( this, arguments );

		this.ResizeIFrameAndRender();

		// Animate the graph back to opaque from transparent
		this.$m_IFrame.attr( 'data-popping', '0' );
	};

	CMatchStatsPanel.prototype.ResizeIFrameAndRender = function()
	{
		this.$m_IFrame.css( 'height', this.$m_Panel.parent().height() + 'px' );

		// Need to explicitly re-render, since hero icons/kill icons will not render when we resize
		this.RenderGraph();
	}

	CMatchStatsPanel.prototype.OnWindowResize = function()
	{
		CBasePanel.prototype.OnWindowResize.apply( this, arguments );

		this.ResizeIFrameAndRender();
	};

	CMatchStatsPanel.prototype.OnIFrameGraphSystemUIInit = function( Options )
	{
		// We'll render the first time we get data in OnDataReceived() now.
		this.m_flNextRenderTime = VUtils.GetTime();

		// Add checkboxes to the nav
		var $OptionsPanel = g_UIManager.GetMiniNavOptionsPanel();
		$OptionsPanel.empty();

		var This = this;
		for ( var strKey in Options )
		{
			var Option = Options[strKey];
			var strDivID = DOTA_CONSTS.DIV_ID_STATSPANEL_MATCHSTATS + '_' + strKey;
			var $Checkbox = g_UIManager.CreateCheckbox( strDivID, Option.display_name, Option.value );

			$Checkbox.data( 'option-name', strKey );

			$Checkbox.find( 'input' ).on(
				'change',
				function()
				{
					var strOptionName = $( this ).parent().data( 'option-name' );
					var bOptionValue = $( this ).is( ':checked' ) != 0;

					// Update data and render again
					This.SendMessageToIFrame( 'ModifyGraphOption', { option_name: strOptionName, option_value: bOptionValue } );
					This.RenderGraph();
				}
			);

			$OptionsPanel.append( $Checkbox );
		}
	};

	CMatchStatsPanel.prototype.GetWaitingPanelReferencePanel = function()
	{
		return this.$m_Panel.parent();
	};

	CMatchStatsPanel.prototype.OnShow = function( bShow )
	{
		CBasePanel.prototype.OnShow.apply( this, arguments );

		var $OptionsPanel = g_UIManager.GetMiniNavOptionsPanel();
		if ( bShow )
		{
			$OptionsPanel.show();
		}
		else
		{
			$OptionsPanel.hide();
		}
	}

	//--------------------------------------------------------------------------------------------

	var CDraftStatsPanel = function( PanelGroup )
	{
		CBasePanel.call( this, '#' + DOTA_CONSTS.DIV_ID_STATSPANEL_DRAFT, PanelGroup );

		var $Bans = this.$m_Panel.find( '.Bans' );
		var $Picks = this.$m_Panel.find( '.Picks' );

		this.$m_DummyItem = $( '#DummyDraft_Item' );
		this.$m_BansHeader = $Bans.find( 'h1' );
		this.$m_PicksHeader = $Picks.find( 'h1' );
		this.$m_BanItems = $Bans.find( '.Items' );
		this.$m_PickItems = $Picks.find( '.Items' );
		this.$m_Legend = this.$m_Panel.find( '.Legend' ); 
		this.$m_RadiantTeamName = this.$m_Legend.find( '.TeamName_Radiant_js' );
		this.$m_DireTeamName = this.$m_Legend.find( '.TeamName_Dire_js' );
		this.$m_Block = this.$m_Legend.find( '.Block' ); // We only care about one of these blocks

		this.$m_RadiantLabel = $( this.$m_Legend.find( '.RadiantDireLabel' )[0] );
		this.$m_DireLabel = $( this.$m_Legend.find( '.RadiantDireLabel' )[1] );

		this.m_PicksBansData = {
			bans: { label_base_key: 'DotaTV_Ban', get_data_func: function() { return g_Match.GetBans() }, panel: this.$m_BanItems, count: 0 },
			picks: { label_base_key: 'DotaTV_Pick', get_data_func: function() { return g_Match.GetPicks() }, panel: this.$m_PickItems, count: 0 }
		};
	};

	CDraftStatsPanel.prototype = Object.create( CBasePanel.prototype );
	CDraftStatsPanel.prototype.constructor = CDraftStatsPanel;

	CDraftStatsPanel.prototype.OnNewMatch = function()
	{
		CBasePanel.prototype.OnNewMatch.apply( this, arguments );

		this.Clear_();
	};

	CDraftStatsPanel.prototype.Clear_ = function()
	{
		for ( var strBansPicks in this.m_PicksBansData )
		{
			var BansOrPicksMetaData = this.m_PicksBansData[strBansPicks];

			// Emtpy everything out
			BansOrPicksMetaData.panel.empty();
			BansOrPicksMetaData.count = 0;
			BansOrPicksMetaData.items = [];
		}
	};

	CDraftStatsPanel.prototype.BPreShow = function()
	{
		if ( !g_Match )
			return false;

		VUtils.AssertMsg( g_Tournament, "User should never be able to show this panel unless we are in a tournament game." );

		this.Clear_();

		for ( var strBansPicks in this.m_PicksBansData )
		{
			var BansOrPicksMetaData = this.m_PicksBansData[strBansPicks];

			// Create all elements
			var $Panel = BansOrPicksMetaData.panel;
			var rgPicksOrBansData = BansOrPicksMetaData.get_data_func();	// Assumes g_Match is valid.
			var strBaseKey = BansOrPicksMetaData.label_base_key;
			var cLen = rgPicksOrBansData.length;	// # of picks or bans

			// Only add the ones we care about.
			for ( var i = 0; i < 10; ++i )
			{
				var $Item = this.$m_DummyItem.clone().removeAttr( 'id' ).addClass( 'PickBanItem ' ).addClass( 'Transparent' );
				$Item.find( '.PickBanLabel' ).html( g_Localization.Localize( strBaseKey + String( i + 1 ) ) );
				$Panel.append( $Item );
				BansOrPicksMetaData.items.push( $Item );
			}
		}

		// Update with fresh data
		this.UpdatePicksBans();

		return true;
	};

	CDraftStatsPanel.prototype.UpdatePicksBans = function()
	{
		for ( var strBansPicks in this.m_PicksBansData )
		{
			var BansOrPicksMetaData = this.m_PicksBansData[strBansPicks];
			var rgPicksOrBansData = BansOrPicksMetaData.get_data_func();	// Assumes g_Match is valid.
			var cLen = rgPicksOrBansData.length;	// # of picks or bans

			// Only add the ones we care about.
			for ( var i = BansOrPicksMetaData.count; i < cLen; ++i )
			{
				var $Item = BansOrPicksMetaData.items[i];
				var nHeroID = rgPicksOrBansData[i].GetHeroID();
				var strHeroImageURL = GetHeroImageURL_LargeWide( nHeroID );
				var nTeam = rgPicksOrBansData[i].GetTeam();

				// Update with hero image
				var $ImageBg = $Item.find( '.ImageBackground' );
				$ImageBg.empty();
				$ImageBg.append( CreateImage( strHeroImageURL ) );

				$Item.find( '.HeroNameLabel' ).text( GetLocalizedHeroName( nHeroID ) );

				// Set the correct team
				$Item.find( '.TeamGradiant' ).addClass( 'TeamGradiant' + GetRadiantDireFromTeam( nTeam ) );

				// Show it
				$Item.removeClass( 'Transparent' );
			}

			BansOrPicksMetaData.count = cLen;
		}
	};

	CDraftStatsPanel.prototype.OnDataReceived = function()
	{
		CBasePanel.prototype.OnDataReceived.apply( this, arguments );

		this.UpdatePicksBans();
	};

	CDraftStatsPanel.prototype.Think = function( flCurTime, flElapsed )
	{
		CBasePanel.prototype.Think.apply( this, arguments );
	};

	CDraftStatsPanel.prototype.UpdateFromData = function()
	{
		CBasePanel.prototype.UpdateFromData.apply( this, arguments );
	};

	CDraftStatsPanel.prototype.OnPrePop = function( bPopped )
	{
		CBasePanel.prototype.OnPrePop.apply( this, arguments );

		this.ResizeFonts();
	};

	CDraftStatsPanel.prototype.ResizeFonts = function()
	{
		CBasePanel.prototype.ResizeFonts.apply( this, arguments );

		var nBaseKeyHeight = this.$m_Block.actual( 'width' );	// NOTE: 1:1 aspect on this element
		var flBaseKeyEm = nBaseKeyHeight / 16;

		// NOTE: The font size is automatically increased in 'popped' mode, since the .Block style's size is increased, and the font size is based on that.

		var strHeaderFontSize = ( 1.5 * flBaseKeyEm ) + 'em';

		this.$m_BansHeader.css( 'font-size', strHeaderFontSize );
		this.$m_PicksHeader.css( 'font-size', strHeaderFontSize );

		this.$m_Legend.css( 'line-height', nBaseKeyHeight + 'px' );
		this.$m_RadiantTeamName.css( 'font-size', strHeaderFontSize );
		this.$m_DireTeamName.css( 'font-size', strHeaderFontSize );

		var strBansPicksSize = ( 0.70 * flBaseKeyEm ) + 'em';
		this.$m_BanItems.css( 'font-size', strBansPicksSize );
		this.$m_PickItems.css( 'font-size', strBansPicksSize );

		var strRadiantDireLabelFontSize = flBaseKeyEm * 1.3 + 'em';
		this.$m_RadiantLabel.css( 'font-size', strRadiantDireLabelFontSize );
		this.$m_DireLabel.css( 'font-size', strRadiantDireLabelFontSize );
	};

	CDraftStatsPanel.prototype.OnWindowResize = function()
	{
		CBasePanel.prototype.OnWindowResize.apply( this, arguments );
	};

	//--------------------------------------------------------------------------------------------

	// Maintain a set of panels with one that can be active at a time.
	var CPanelGroup = function()
	{
		this.m_ActivePanel = null;
	};

	CPanelGroup.prototype =
	{
		BIsActivePanel: function( Panel )
		{
			return Panel && ( this.m_ActivePanel == Panel );
		},

		SetActivePanel: function( Panel )
		{
			this.m_ActivePanel = Panel;
		},

		HideActivePanel: function()
		{
			if ( !this.m_ActivePanel )
				return;

			this.m_ActivePanel.Hide();
		}
	};

	//--------------------------------------------------------------------------------------------

	var CUIManager = function()
	{
		// Panel groups
		var MainPanelGroup = new CPanelGroup();

		this.m_PanelGroupMap = {}
		this.m_PanelGroupMap[DOTA_CONSTS.PANELGROUP_ID_MAIN] = MainPanelGroup;

		// Panels
		this.m_PanelMap = {};
		this.m_PanelMap[DOTA_CONSTS.DIV_ID_SPECTATOR_STATS] = new CSpectatorStatsPanel();

		this.m_PanelMap[DOTA_CONSTS.DIV_ID_TOURNAMENT_AD] = new CTournamentBox( MainPanelGroup );
		this.m_PanelMap[DOTA_CONSTS.DIV_ID_TOURNAMENT_CHEER] = new CCheerPanel( MainPanelGroup );

		this.m_PanelMap[DOTA_CONSTS.DIV_ID_OVERVIEW_HEADER] = new COverviewHeaderPanel( MainPanelGroup );
		this.m_PanelMap[DOTA_CONSTS.DIV_ID_STATSPANEL_PLAYERS] = new CPlayerListPanel( MainPanelGroup );
		this.m_PanelMap[DOTA_CONSTS.DIV_ID_STATSPANEL_PLAYERDETAILS] = new CPlayerDetailsStatsPanel( MainPanelGroup );
		this.m_PanelMap[DOTA_CONSTS.DIV_ID_STATSPANEL_MATCHSTATS] = new CMatchStatsPanel( MainPanelGroup, DOTA_CONSTS.DIV_ID_IFRAME_MATCHSTATS );
		this.m_PanelMap[DOTA_CONSTS.DIV_ID_STATSPANEL_DRAFT] = new CDraftStatsPanel( MainPanelGroup );

		// DOM elements
		this.$m_Window = $( window );
		this.$m_MiniNav = $( '#MiniNav' );
		this.$m_MiniNavOptions = $( '#MiniNavOptions' );
		this.$m_MiniNavLinkContainer = this.$m_MiniNav.find( '.Links' );
		this.$m_ViewerCount = this.$m_MiniNav.find( '.Count' );
		this.$m_MatchTime = $( '.MatchTime' );
		this.$m_DummyCheckbox = $( '#DummyCheckbox' );
		this.$m_VideoIFrame = $( '#' + DOTA_CONSTS.DIV_ID_VIDEO_IFRAME );
		this.$m_StreamDataPanelContainer = $( '#StreamDataPanelContainer' );
		this.$m_PopBottomPanelsButton = $( '#PopBottomPanelsButton' );

		// Other data members
		this.m_bIsSlimMode = false;
		this.m_bPopped = false;
		this.m_cUniqueIDs = 0;
		this.m_bShouldProcessNewMatch = false;
	};

	CUIManager.prototype =
	{
		constructor: CUIManager,

		Init: function()
		{
			// Hide all tournament panels by default
			this.ShowTournamentPanels( false );

			// Init all panels
			for ( var strPanelID in  this.m_PanelMap )
			{
				this.m_PanelMap[strPanelID].Init();
			}

			// Click handlers
			$( '#MiniNav .Links .NavLink' ).click(
				function()
				{
					var bDisabled = $( this ).attr( 'data-disabled' );
					if ( bDisabled )
					{
						PlayErrorSound();
						return;
					}

					g_UIManager.ShowStatsPanelByDivName( $( this ).data( 'divname' ) );
				}
			);

			var This = this;
			this.$m_PopBottomPanelsButton.click(
				function()
				{
					This.TogglePopped();
				}
			);

			$( '.LoginLink' ).click(
				function()
				{
					// TODO: Bring up an overlay for login
					alert( "This will bring up an overlay for logging in. For now, we just redirect." );

					RedirectToLogin();
				}
			);

			$( '.ToggleColumnVisibility_js' ).click(
				function()
				{
					var $Button = $( this );
					var $Parent = $Button.parent();
					var $Selector = $( $Button.data( 'selector' ) );
					var strAnimationClass = 'FlexColumnHideAnimation';

					$Selector.toggleClass( strAnimationClass );
					$Button.attr( 'data-hidden', parseInt( $Button.attr( 'data-hidden' ) ) ? '0' : '1' );

					// Toggle a class on the parent based on what was clicked
					var strClassToApplyToParent = $Button.data( 'parentclass' );
					$Parent.toggleClass( strClassToApplyToParent );

					if ( $Parent.hasClass( 'NoLeftMargin' ) && $Parent.hasClass( 'NoRightMargin' ) )
					{
						$Parent.attr( 'data-bothhidden', '1' );
					}
					else
					{
						$Parent.attr( 'data-bothhidden', '0' );
					}
				}
			);

			$( '.CheckboxDropdownItems_js' ).each(
				function()
				{
					var $This = $( this );
					var $Checkbox = g_UIManager.CreateCheckbox( null, "", true );
					$This.append( $Checkbox );
				}
			);

			$( '.CheckboxDropdownItems_js :checkbox' ).click(
				function( e )
				{
					e.preventDefault();
					return false;
				}
			);

			var $FullscreenButtons = $( '.BrowserFullscreenToggle' );
			var $FullscreenButton_Enter = $FullscreenButtons.find( '.EnterButton' );
			var $FullscreenButton_Exit = $FullscreenButtons.find( '.ExitButton' );

			function UpdateFullscreenIcons()
			{
				if ( VUtils.BIsInFullscreen() )
				{
					$FullscreenButton_Enter.addClass( 'Hidden' );
					$FullscreenButton_Exit.removeClass( 'Hidden' );
				}
				else
				{
					$FullscreenButton_Enter.removeClass( 'Hidden' );
					$FullscreenButton_Exit.addClass( 'Hidden' );
				}
			}

			UpdateFullscreenIcons();

			$( document ).on(
				'webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange',
				function()
				{
					UpdateFullscreenIcons();
				}
			);

			$( '.BrowserFullscreenToggle' ).click(
				function()
				{
					if ( VUtils.BIsInFullscreen() )
					{
						VUtils.ExitFullscreen();
					}
					else
					{
						VUtils.RequestFullscreen();
					}
				}
			);

			$( document ).keyup(
				function( e )
				{
					// Escape key
					switch ( e.keyCode )
					{
						case 27:
							if ( This.BIsPopped() )
							{
								This.TogglePopped();
							}
							break;
					}
				}
			);

			this.SetupCSSAnimationEventHooks_();
		},

		ShowTournamentPanels: function( bShow )
		{
			// Show or hide DRAFT and any other elements with the TournamentOnly style
			// based on whether or not this is a tournament game.
			var $TournamentOnlyElements = $( '.TournamentOnly' );

			if ( bShow )
			{
				$TournamentOnlyElements.each(
					function()
					{
						var $Panel = $( this );
						if ( undefined === $Panel.attr( 'data-isdevonly' ) || g_bIsDev )
						{
							$Panel.attr( 'data-istournamentgame', '1' );
						}
					}
				);
			}
			else
			{
				$TournamentOnlyElements.attr( 'data-istournamentgame', '0' );
			}
		},

		SetupCSSAnimationEventHooks_: function()
		{
			var This = this;

			// Any div with this class on it will hit this callback, which currently does nothing
			/*$( '.ListenForAnimationEndEvent_js' ).bind(
				'animationend',
				function( e )
				{
				}
			);*/
		},

		OnNewMatch: function()
		{
			// Make a note that we should notify all panels. We'll want to make sure to do this after all data for the curren frame
			// has been parsed, so that when panels can have data to work with when OnNewMatch() is actually called.
			this.m_bShouldProcessNewMatch = true;
		},

		ProcessNewMatch: function()
		{
			if ( !g_Match )
				return;

			// Notify all panels
			for ( var strPanelID in  this.m_PanelMap )
			{
				this.m_PanelMap[strPanelID].OnNewMatch();
			}

			// Show the players overview panel
			g_UIManager.ShowStatsPanelByDivName( DOTA_CONSTS.DIV_ID_STATSPANEL_PLAYERS );

			// We're done.
			this.m_bShouldProcessNewMatch = false;
		},

		OnInitTournament: function( unLeagueID )
		{
			for ( var strPanelID in this.m_PanelMap )
			{
				this.m_PanelMap[strPanelID].OnInitTournament( unLeagueID );
			}
		},

		GenerateUniqueID: function()
		{
			return 'UID_' + this.m_cUniqueIDs++;
		},

		CreateCheckbox: function( strID, strDisplayName, bDefaultValue )
		{
			var $Result = this.$m_DummyCheckbox.clone();

			if ( !strID || strID.length === 0 )
			{
				strID = this.GenerateUniqueID();
			}

			$Result.attr( 'id', strID );

			$Result.children( 'input' ).attr( 'id', strID + '_' ).prop( 'checked', bDefaultValue );	// Hook up the ID to the label's 'for'
			$Result.children( 'label' ).attr( 'for', strID + '_' ).html( strDisplayName );

			return $Result;
		},

		BIsPopped: function()
		{
			return this.m_bPopped;
		},

		TogglePopped: function()
		{
			if ( this.m_bPopped )
			{
				this.$m_MiniNav.css( 'margin-top', 0 );
				this.$m_MiniNav.removeClass( 'Popped' );
				this.$m_StreamDataPanelContainer.removeClass( 'Popped' );
			}
			else
			{
				this.$m_MiniNav.css( 'margin-top', -this.$m_VideoIFrame.height() + 'px' );
				this.$m_MiniNav.addClass( 'Popped' );
				this.$m_StreamDataPanelContainer.addClass( 'Popped' );
			}

			this.m_bPopped = !this.m_bPopped;

			// Let the active panel now
			this.m_PanelGroupMap[DOTA_CONSTS.PANELGROUP_ID_MAIN].m_ActivePanel.OnPrePop( this.m_bPopped );

			var This = this;
			setTimeout(
				function()
				{
					This.m_PanelGroupMap[DOTA_CONSTS.PANELGROUP_ID_MAIN].m_ActivePanel.OnPostPop( this.m_bPopped );
				},
				DOTA_CONSTS.POP_ANIMATION_DURATION * 2
			);
		},

		BIsSlimMode: function()
		{
			return this.m_bIsSlimMode;
		},

		GetMiniNavOptionsPanel: function()
		{
			return this.$m_MiniNavOptions;
		},

		GetMatchStatsPanel: function()
		{
			return this.m_PanelMap[DOTA_CONSTS.DIV_ID_STATSPANEL_MATCHSTATS];
		},

		GetOverviewPanel: function()
		{
			return this.m_PanelMap[DOTA_CONSTS.DIV_ID_OVERVIEW_HEADER];
		},

		OnDataReceived: function()
		{
			// For now, just update all panels
			for ( var strPanelID in this.m_PanelMap )
			{
				var CurPanel = this.m_PanelMap[strPanelID];
				if ( CurPanel.BIsHidden() )
					continue;

				var CurPanelGroup = CurPanel.GetPanelGroup();
				if ( CurPanelGroup && !CurPanelGroup.BIsActivePanel( CurPanel ) )
					continue;

				CurPanel.OnDataReceived();
			}
		},

		OnTeamIDChanged: function( nTeam, nTeamID )
		{
			// If this isn't a tournament game, we don't care
			if ( !g_Tournament )
				return;

			if ( nTeamID <= 0 || null == nTeamID )
				return;

			// Update all panels
			for ( var strPanelID in this.m_PanelMap )
			{
				var CurPanel = this.m_PanelMap[strPanelID];
				CurPanel.OnTeamIDChanged( nTeam, nTeamID );
			}
		},

		OnTeamNameChanged: function( nTeam, strNewName )
		{
			// Update all team name labels with the new team name
			var strRadiantDire = GetRadiantDireFromTeam( nTeam );
			$( '.TeamName_' + strRadiantDire + '_js' ).html( strNewName );
		},

		Think: function( flCurTime, flElapsed )
		{
			// NOTE: This must happen before panels are allowed to think
			if ( this.m_bShouldProcessNewMatch )
			{
				this.ProcessNewMatch();
			}

			for ( var strPanelID in this.m_PanelMap )
			{
				var CurPanel = this.m_PanelMap[strPanelID];
				if ( !CurPanel.BShouldThink() )
					continue;

				CurPanel.Think( flCurTime, flElapsed );
			}

			// Update viewer count
			if ( g_nViewerCount !== null )
			{
				this.$m_ViewerCount.html( VUtils.FormatIntWithCommas( g_nViewerCount ) );
			}

			if ( g_Match )
			{
				if ( g_Minimap.BShouldUpdate( flCurTime ) )
				{
					g_Minimap.Think( flElapsed );
					g_Minimap.Render();
				}

				// Update match time
				this.$m_MatchTime.html( VUtils.FormatTimestamp( g_Match.GetMatchTime() ) );
			}
		},

		ShowPlayerDetailsPanel: function( nTeam, iPlayer )
		{
			// Remove the glow from the PLAYERS item.
			g_UIManager.ActivateMiniNavLink( DOTA_CONSTS.DIV_ID_STATSPANEL_PLAYERDETAILS );

			var $Panel = this.m_PanelMap[DOTA_CONSTS.DIV_ID_STATSPANEL_PLAYERDETAILS];

			$Panel.SetTeam( nTeam );
			$Panel.SetPlayer( iPlayer );

			this._ShowPanelInternal( $Panel );
		},

		ShowSpectatorStatsPanel: function()
		{
			var $Panel = this.m_PanelMap[DOTA_CONSTS.DIV_ID_SPECTATOR_STATS];
			this._ShowPanelInternal( $Panel );
		},

		ActivateMiniNavLink: function( strDivName )
		{
			this.$m_MiniNavLinkContainer.children().each(
				function()
				{
					if ( $( this ).data( 'divname' ) == strDivName )
					{
						$( this ).addClass( 'Glow' );
						return;
					}

					$( this ).removeClass( 'Glow' );
				}
			);
		},

		// Show a specific panel in the main area with PLAYERS / STATS / DRAFT / ETC
		ShowStatsPanelByDivName: function( strDivName )
		{
			this.ActivateMiniNavLink( strDivName );	// Styling only
			this._ShowPanelInternal( this.m_PanelMap[strDivName] );
		},

		OnWindowResize: function()
		{
			var flViewAspect = $( window ).width() / $( window ).height();

			g_Minimap.OnWindowResize();

			for ( var strPanelID in this.m_PanelMap )
			{
				var CurPanel = this.m_PanelMap[strPanelID];
				if ( CurPanel.BIsHidden() )
					continue;

				CurPanel.OnWindowResize();
			}

			// NOTE: Calling $( window ).width() constantly is brutal in FF, so we cache this on window resize
			this.m_bIsSlimMode = this.$m_Window.width() < DOTA_CONSTS.BROWSER_WIDTH_SLIM;
		},

		// PRIVATE:
		_ShowPanelInternal: function( Panel )
		{
			if ( !Panel )
				return;
			
			// Attempt to setup the UI. On failure, set to waiting state and show the panel anyway.
			var bReady = Panel.BPreShow();
			Panel.SetWaitingForData( !bReady );

			var PanelGroup = Panel.GetPanelGroup();
			if ( PanelGroup )
			{
				PanelGroup.HideActivePanel();
			}

			Panel.ResizeFonts();
			Panel.Show();
			
			if ( PanelGroup )
			{
				PanelGroup.SetActivePanel( Panel );
			}
		}
	};

	//--------------------------------------------------------------------------------------------

	function InitNewMatch( strMatchID )
	{
		g_Match = new CMatch( strMatchID );
		g_Match.Init();

		g_UIManager.OnNewMatch();
	}

	function InitTournament( unLeagueID )
	{
		VUtils.Assert( null === g_Tournament );

		$.get(
			g_strGetTournamentDataURL,
			{ league_id: unLeagueID },
			function( json )
			{
				g_Tournament = new CTournament();
				g_Tournament.Init( unLeagueID, json );

				// Let any panels update based on the newly initialized tournament data
				g_UIManager.OnInitTournament( unLeagueID );

				// Go through and let anyone who wants to know that tournament data is now ready
				for ( var i = 0, cLen = g_rgTournamentDataReadyCallbacks.length; i < cLen; ++i )
				{
					g_rgTournamentDataReadyCallbacks[i]();
				}

				g_rgTournamentDataReadyCallbacks = [];
			}
		);
	}

	function ProcessWhenTournamentDataReady( fnCallback )
	{
		// Do we already have tournament data?
		if ( g_Tournament )
		{
			fnCallback();
			return;
		}

		g_rgTournamentDataReadyCallbacks.push( fnCallback );
	}

	//--------------------------------------------------------------------------------------------

	function Init( Data )
	{
		// Initialize a bunch of data/vars handed down from the controller and piped through.
		g_bIsDev = Data.is_dev;
		g_bIsMobile = Data.is_mobile;
		g_bIsLoggedIn = Data.is_logged_in;
		g_strStreamLanguage = Data.stream_language;
		g_bIsSimulation = Data.simulation;
		g_Localization = Data.localization;
		g_strDotaIFrameOriginURL = Data.dota_iframe_origin_url;
		g_strBaseImageURL = Data.base_img_url;
		g_strBaseAudioURL = Data.base_audio_url;
		g_strSteamBroadcastOrigin = Data.steam_broadcast_origin;
		g_rgHeroData = Data.hero_data;
		g_rgLocalizedHeroData = Data.hero_data_localized;
		g_rgItemData = Data.item_data;
		g_rgEmoticonData = Data.emoticon_data;
		g_strGetEmoticonsForUserURL = Data.emoticon_url_for_userdata;
		g_strLoginURL = Data.login_url;
		g_strPostAndGetCheersWebAPIURL = Data.post_and_get_cheers_webapi_url;
		g_strGetTournamentDataURL = Data.get_tournament_data_url;
		g_strLeaguesBaseURL = Data.leagues_base_url;
		g_Noise = Data.noise;
		g_Localization = Data.localization;
		g_strCurrency = Data.currency;

		var g_flPrevTime = VUtils.GetTime();

		g_rgHeroDataKeys = Object.keys( g_rgHeroData );

		g_StreamSimulator = new VStreamSimulator();

		g_GraphData = new CGraphData();

		g_Chat = new CChat();
		g_Chat.Init();

		g_Minimap = new CMinimap();
		g_Minimap.Init();

		g_UIManager = new CUIManager();
		g_UIManager.Init();

		// Local vars
		var StreamProcessor = new VStreamProcessor();

		function OnWindowResize()
		{
			g_UIManager.OnWindowResize();
		}

		$( window ).resize( OnWindowResize );

		setTimeout(
			function()
			{
				// This needs to happen after some delay, since some divs don't have heights right on load.
				OnWindowResize();

				// Show the players overview panel
				g_UIManager.ShowStatsPanelByDivName( DOTA_CONSTS.DIV_ID_STATSPANEL_PLAYERS );

				// Show the spectator stats panel along the left-hand side
				g_UIManager.ShowSpectatorStatsPanel();
				
				// Fade in any svg's, which can pop in at their original size before scaling.
				$( '.AutoLoad' ).addClass( 'Loaded_js' );
			},
			100
		);

		// Listen to message from child IFrame video
		$( window ).on(
			"message",
			function( e )
			{
				if ( [ g_strSteamBroadcastOrigin, g_strDotaIFrameOriginURL ].indexOf( e.originalEvent.origin ) === -1 )
					return;

				var Msg = e.originalEvent.data;

				switch ( Msg.msg )
				{
					case 'OnGameDataReceived':

						if ( !g_bIsSimulation )
						{
							StreamProcessor.ProcessDataReceived( Msg.data );
							g_UIManager.OnDataReceived();
						}

						break;

					case 'OnBroadcastIDChanged':

						g_Chat.OnBroadcastIDChanged( Msg.broadcastid );

						break;

					case 'OnBroadcastInfoChanged':

						if ( Msg.viewer_count !== undefined )
						{
							g_nViewerCount = Msg.viewer_count;
						}

						break;

					case 'DoRedirectToLogin':
					case 'OnLoginButtonClicked':

						RedirectToLogin();

						break;

					case 'OpenNewTab':

						window.open( Msg.url, '_blank' );

						break;

					case 'OnGraphSystemReady':

						// The page is ready -- tell it what kind of graph to visualize
						var MatchStatsPanel = g_UIManager.GetMatchStatsPanel();
						MatchStatsPanel.PopulateGraphComboBox( Msg.graphs );
						MatchStatsPanel.SwitchToNewGraphType( 'Gold' );

						break;

					case 'InitGraphUI':

						// The graph has been created in the IFrame and it's reporting back with what UI it needs on our end
						g_UIManager.GetMatchStatsPanel().OnIFrameGraphSystemUIInit( Msg.graph_options );

						break;
				}

				if ( g_bIsDev && g_DevConfig['spew_events'] )
				{
					console.log( e.originalEvent.data );
				}
			}
		);   

		// Fade in images on load
		$( document.body ).imagesLoaded().progress(
			function( Instance, Image )
			{
				if ( !Image.isLoaded )
					return;

				FadeInLoadedContent( $( Image.img ) );
			}
		);

		// Fade in any new images that get loaded (like hero images, which we create on the fly)
		$( 'img' ).load(
			function()
			{
				FadeInLoadedContent( $( this ) );
			}
		);

		function Think()
		{
			var flCurTime = VUtils.GetTime();
			var flElapsed = flCurTime - g_flPrevTime;
			g_flPrevTime = flCurTime;

			if ( g_bIsSimulation )
			{
				g_StreamSimulator.SimulateStream( flCurTime, flElapsed );

				if ( g_StreamSimulator.BShouldTransmit() )
				{
					g_StreamSimulator.Transmit( StreamProcessor );
					g_UIManager.OnDataReceived();
				}
			}

			if ( g_Tournament )
			{
				g_Tournament.Think( flCurTime, flElapsed );
			}

			if ( g_Match )
			{
				g_Match.Think( flCurTime, flElapsed );
			}

			g_UIManager.Think( flCurTime, flElapsed );

			window.requestAnimationFrame( Think );
		}

		window.requestAnimationFrame( Think );
	}

	window.TV = { Init: Init };
})();

