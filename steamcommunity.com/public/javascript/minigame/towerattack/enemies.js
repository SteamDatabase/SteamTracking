
var g_rgNamesMap = {
	'spawner_01': [ 'Spawner' ],
	'stadium_01': [ 'Redzone', 'Mazzie', 'Spencer', 'Pigskin' ],
	'stadium_02': [ 'Clipper', 'Blitz', 'Tackle', 'Interceptor', 'Shotgun Jerry' ],
	'stadium_03': [ 'The Beast', 'Mode Seven', 'Blue 22', 'Rusher', 'Lynch' ],
	'stadium_06': [ 'The Wall', 'Handsy', 'Red Card', 'Howard', 'Timmy' ],
	'stadium_05': [ 'Sonic', 'Pudget', 'Palmer', 'Corner Kick', 'Needle' ],
	'stadium_04': [ 'Brock', 'Slade', 'Vincent', 'Victor', 'Casper' ],
	'stadium_08': [ 'Edgar', 'Martinez', 'Grand Slam', 'Baseline', 'The Ancient Mariner' ],
	'stadium_07': [ 'Rembrandt', 'Southpaw', 'Wild Thing', 'Jobu', 'Vaughn' ],
	'stadium_09': [ 'The Law', 'Carlton', 'Softy', 'Bagman', 'Judgement' ],
	'stadium_10': [ 'Flipper', 'Lindy', 'Mikey', 'Pike', 'Ecco' ],
	'stadium_11': [ 'Apollo', 'Hermes', 'Simmons', 'Dash', 'Achilles' ],
	'stadium_12': [ 'Biff', 'Blaine', 'Blake', 'Moose', 'Ogre' ],
	'stadium_13': [ 'Lance', 'Windbreaker', 'Jacques', 'Pierre', 'Trixie' ],
	'stadium_14': [ 'Suplex', 'Horowitz', 'Shooting Star', 'Brainbustaaaaaaa', 'Enhancement Talent'],
	'stadium_boss': ['Z-Lo, The 5th Horseman'],
	'city_destroyed_01': [ 'Daryl', 'Sam', 'Earl', 'Doc', 'Carl' ],
	'city_destroyed_04': [ 'Barbra', 'Aunt Debbie', 'Cheryl', 'Zelda', 'Myrtle' ],
	'city_destroyed_03': [ 'Danny', 'Kinickie', 'Dean', 'Seth', 'Slobbery Pete' ],
	'city_destroyed_19': [ 'Jack', 'Bones', 'Yorick', 'Edgar', 'Horatio' ],
	'city_destroyed_09': [ 'Prom King', 'Channing', 'Chase', 'Kenny', 'Embalmed Ned' ],
	'city_destroyed_02': [ 'Unlikeable Stu', 'Helmers', 'Flat-top', 'Table Head', 'Grim David' ],
	'city_destroyed_07': [ 'Poindexter', 'Liam', 'Mercer', 'Harvey', 'Backup Dancer' ],
	'city_destroyed_08': [ 'Barry', 'Chris', 'Leon', 'Lex', 'Clark' ],
	'city_destroyed_12': [ 'Greyscale', 'Gargoyle', 'Stonehead', 'Tombstone', 'Epitaph' ],
	'city_destroyed_10': [ 'Michael', 'Bubbles', 'Spacewalker', 'Vincent', 'Midnight Hour' ],
	'city_destroyed_05': [ 'Gordon', 'Alyx', 'Crabbie', 'Chell', 'Johnson' ],
	'city_destroyed_06': [ 'Ring Barer', 'The Pinkerton', 'Well Dweller', 'Jonas', 'Juon' ],
	'city_destroyed_11': [ 'Ceda', 'Zoe', 'Dustin', 'The Infected', 'Boomer'],
	'city_destroyed_13': [ 'Sierra', 'Hotel', 'Echo', 'Lima', 'Delta'],
	'city_destroyed_14': [ 'Foxtrot', 'Whiskey', 'Tango', 'Beta', 'Alpha'],
	'city_destroyed_15': [ 'King', 'Scorpion', 'Mad Dog', 'Bill', 'Lance'],
	'city_destroyed_16': [ 'Paul', 'Vince', 'Ralf', 'Clark', 'Bunny'],
	'city_destroyed_17': [ 'Code Red', 'Jaffey', 'Jessup', 'Dawson', 'Barnes'],
	'city_destroyed_18': [ 'The Operator', 'Spec Ops Stan', 'Cody', 'Rudy', 'Willy James'],
	'city_destroyed_boss': [ 'Blitzkrieg, The Zombie Tank Officer' ],
	'volcano_01': [ 'Thad The Discouraged', 'Rakzar The Pensive', 'Killgen The Lackey', 'Uzzaq The Cannon Fodder', 'Claire The Body Piercer'],
	'volcano_02': [ 'One Horn', 'Broken Tusk', 'Fubor The Conscientious Objector', 'Blood Tooth', 'Gnasher'],
	'volcano_03': [ 'The Undying Gorn', 'Macehead', 'Steel Eye', 'Cyborc', 'Bix Halfskull'],
	'volcano_04': [ 'Parallax', 'Horus', 'Ra', 'Cyclops Bob', 'The Red Rider'],
	'volcano_05': [ 'The Duke of War', 'Kane', 'Heart Stone', 'Dragon Knight', 'Trixie The Lich'],
	'volcano_06': [ 'Tammy The Mirror Averse', 'Gorgona', 'Slither', 'Serpenta', 'Medusa'],
	'volcano_07': [ 'The Legend', 'Wadsworth', 'Curry Man', 'Nicky', 'Hexus'],
	'volcano_08': [ 'The Abbot', 'Square Face', 'Desade', 'Crom', 'Thulsa'],
	'volcano_09': [ 'Voodoo Child', 'Jareth', 'Aladdin', 'The King', 'Ziggy'],
	'volcano_10': [ 'Eldritch Eddy', 'Epoch', 'Geas', 'The Warlock', 'Hex'],
	'volcano_boss': ['Dire Frog, The Tyrant King'],
	'desert_01': [ 'Hugeasor', 'Monstronious', 'Avatar Hawk', 'Archon Animal', 'Dominator Blaster' ],
	'desert_02': [ 'Frankie One Shoulder', 'Gimpy', 'Speed Freak', 'Battle Boy', 'Chrome Face' ],
	'desert_03': [ 'Yuri', 'Pinkie', 'Scorch', 'Ravage', 'Ripper' ],
	'desert_04': [ 'Grim Skull', 'Ear Worm', 'Face Ripper', 'Bunny Ear Hell Machine', 'Zippy' ],
	'desert_05': [ 'Maxwell', 'Sally Skullheadband', 'Spike', 'Shoulds Mc Shoulder', 'One Pad Larry' ],
	'desert_06': [ 'Elmer', 'Liberty', 'Blue Skull', 'The Carrion Man', 'Face Eater' ],
	'desert_07': [ 'Son of Face Eater', 'Steel Teeth', 'Skull Face', 'Spike Head', 'The Maw of Death' ],
	'desert_08': [ 'Cyborg', 'Mandible', 'Sally Steel Chin', 'Chatterbox', 'Fracture Bot' ],
	'desert_09': [ 'Jason', 'The Boss', 'Wasteland Rebel', 'Lord Ginormous', 'Dead Eyes' ],
	'desert_10': [ 'Specs', 'Commander Goggles', 'Rangefinder', 'Little Ms Peepers', 'Red Eye' /*, 'You Got Peeped!'*/ ],
	'desert_11': [ 'Shock', 'Awe', 'Whaaaa', 'The Scream', 'Ghostface' ],
	'desert_12': [ 'Chippy', 'Mr. Mohawk', 'Mosh', 'Thrash', 'Socrates' ],
	'desert_13': [ 'Athena', 'Zealot', 'Truthseeker', 'Widow-Maker', 'Mantis' ],
	'desert_14': [ 'Iron Maiden', 'Lockjaw', 'Manowar', 'Steelheart', 'Straw Fan 4' ],
	'desert_15': [ 'Shifty', 'Imperion', 'Angryosa', 'Charlize', 'Bechdel' ],
	'desert_boss': ['Cerulean Carmouth, The Cen-Car'],
	'city_day_01': [ 'Manny', 'Jim', 'Hard Hat', 'Wiley', 'Wyatt' ],
	'city_day_02': [ 'Tumer', 'Lopert', 'Roper', 'Brownout', 'Hazard' ],
	'city_day_03': [ 'Villa', 'Norm', 'Taylor', 'Timmy', 'Borland' ],
	'city_day_04': [ 'McCauley', 'Shiherlis', 'Mann', 'Bodhi', 'Warchild' ],
	'city_day_05': [ 'Roach', 'Utah', 'Toretto', 'Han', 'O\'Conner' ],
	'city_day_06': [ 'Frank', 'Cookie', 'Adrien', 'Wizzo', 'Burt' ],
	'city_day_07': [ 'Napier', 'Jack', 'Heath', 'Leto', 'Ceaser' ],
	'city_day_08': [ 'Sparticus', 'Maximus', 'Cladius', 'Nero', 'Leonidas' ],
	'city_day_09': [ 'Uncle Dean-o', 'Sleazo', 'Frankie Red Nose', 'Bennie', 'The Nose' ],
	'city_day_10': [ 'Fisher', 'Felix', 'Taven', 'Rama', 'Stansfield' ],
	'city_day_11': [ 'Harry', 'Alonzo', 'Wayland', 'Vic', 'Lowery' ],
	'city_day_boss': [ 'Bob, The Helldozer'],
	'undersea_01': [ 'Johnny No-Neck', 'Smiling Jack', 'Francis', 'Pirate King', 'Jolly Rodger' ],
	'undersea_02': [ 'Burton', 'Skullface', 'Lord of Bones', 'Ryu', 'Mr. Scurvy' ],
	'undersea_03': [ 'Bandana Pete', 'One Eyed Nate', 'Crossbones', 'Desmond', 'The Cardinal' ],
	'undersea_04': [ 'Squidface', 'Captain Calimari', 'Ink-Eye', 'Claude', 'Wiggly Jack' ],
	'undersea_05': [ 'Jeffe', 'Mr Barnacles', 'Squinty Nick', 'Barnabus', 'Ahab' ],
	'undersea_06': [ 'Sugar Beard', 'Soupcatcher', 'Swabby', 'Jimmy Face-Mob', 'Mr. Soho' ],
	'undersea_07': [ 'Mr. Collins', 'Captain Lavender', 'Bristle-Face', 'Brillow Pad Paul', 'Mr. Soho' ],
	'undersea_08': [ 'Simon Parrot Face', 'Kiki & Bones', 'Emma\'s Pet Skeleton', 'Mark', 'Sunshine Larry' ],
	'undersea_09': [ 'Bobby the Starfish', 'Oblivious Jerry', 'Captain Starface', 'Erosion Stan', 'Lupe' ],
	'undersea_10': [ 'Nautilus', 'The Ghost of Australia', 'Sydney', 'Fish-Hat Jones', 'Sammi Fishbones' ],
	'ocean_floor_boss': [ 'Crusta-Sean, The Pirate King Necromancer'],
	'snow_01': [ 'Yukon', 'Cornelius', 'Alpine', 'K2', 'Rainer'],
	'snow_02': [ 'Snow Crab', 'Ice Thing', 'Blood Test', 'Kurt', 'Arctic Spider Dog'],
	'snow_05': [ 'Moses', 'Ursos', 'The Bear', 'Genome', 'Frostbite'],
	'snow_04': [ 'Rasputin', 'Sleet', 'Whiteout', 'Blizzard', 'Tundra'],
	'snow_06': [ 'Hale', 'Hayter', 'Shadow', 'Russell', 'Crowe'],
	'snow_08': [ 'Donner', 'Dragonblood', 'Storm Chaser', 'Magnus', 'Nord'],
	'snow_09': [ 'Rabbie', 'Walker', 'Steel Born', 'The Troll Slayer', 'Asger'],
	'snow_10': [ 'Gabor', 'Kaapo', 'Daan\', Cade', 'Lachlan'],
	'snow_07': [ 'Flippy', 'Happy Jake', 'Maudlin Sam', 'Quietly Content Richard', 'Zip-Zip'],
	'snow_03': [ 'Bear Mouth Larry', 'The Pelt Fiend', 'Teddy', 'Honey Bear', 'Rug Head'],
	'snow_boss': [ 'Dansky, The Wrath of Winter' ],
	'city_night_10': [ 'Murphy', 'Verhoven', 'Ed', 'Nuke', 'Cain' ],
	'city_night_09': [ 'Reese', 'Kyle', 'Arnold', 'Tee-800', 'Fisher' ],
	'city_night_08': [ 'Paxton', 'Lost Boy', 'Pigsticker', 'David', 'Spike' ],
	'city_night_07': [ 'Dragon Force', 'White Tiger', 'Fury', 'Maniac', 'Patrick' ],
	'city_night_06': [ 'Mr. Mister', 'The Gentleman', 'Boris', 'Black Tie', 'Al' ],
	'city_night_05': [ 'The Colonel', 'Clucky', 'Ned', 'Chicken Stan', 'Billy Chicken Head' ],
	'city_night_04': [ 'Bender', 'Sporto', 'Brian', 'The Bull', 'The Horns'],
	'city_night_03': [ 'Shades', 'Dwayne', 'The Wolf', 'Fox', 'Jordie'],
	'city_night_02': [ 'Marty', 'Doc', 'Morty', 'Rick', 'Biff'],
	'city_night_01': [ 'Huxley', 'Kelly', 'Xavier', 'Silverman', 'Pierce'],
	'city_night_15': [ 'The Baddest', 'The Prettiest', 'The Meanest', 'The Shogun', 'The Glow'],
	'city_night_12': [ 'Cole', 'Slicker', 'Aden', 'The Hood', 'Ezzie' ],
	'city_night_11': [ 'Parker', 'Louis', 'Dunn', 'Mr Glass', 'Enzo' ],
	'city_night_13': [ 'Sheet Face', 'Crasher', 'Arthur', 'Bors', 'Galahad' ],
	'city_night_14': [ 'Burton', '7 Demon Bag', 'Pork Chop', 'Mr. Reflexes', 'Jack'],


	'city_night_boss': [ 'Dominic, The Mobile Apocalypse'],
	'island_09': [ 'Roughneck', 'Rasczak', 'Pyle', 'Raine'],
	'island_08': [ 'Joker', 'Mother', 'Rico', 'Blain', 'Willard'],
	'island_06': [ 'Dillon', 'Mac', 'Billy', 'The Soil', 'Dutch'],
	'island_01': [ 'The Watchdog', 'Aiden', 'Sneaky', 'Slim Jim', 'Box Cutter'],
	'island_04': [ 'Muldoon', 'Wisconsin Jake', 'Sean,', 'Carnahan', 'Rick'],
	'island_05': [ 'Spitter', 'Jurassic Vince', 'Hammond', 'Vee', 'The Gecko'],
	'island_07': [ 'Jonny', 'Samson', 'Hank', 'Dean', 'Race'],
	'island_02': [ 'Banky', 'The Hood', 'Che', 'Revolutionary Ralph', 'Lenny'],
	'island_10': [ 'John', 'The One Man Army', 'Sterling', 'Militia Matt', 'Patrick'],
	'island_03': [ 'Vass', 'Brody', 'Hoyt', 'Ramsay', 'Volker'],
	'island_boss': [ 'Sigmond, The Terror-Dactyl'],
	'space_01': [ 'Gordon', 'Duo', 'The Khan', 'Cortex', 'Ming'],
	'space_02': [ 'Trooper', 'Tie', 'Hicks', 'Apone', 'Foehammer'],
	'space_03': [ 'Bluegrass', 'Goose', 'Niko', 'Chimera', 'Squid Ship Gerald'],
	'space_04': [ 'Orbit', 'Comet', 'Constellation Sal', 'Lore', 'Jean-Luc'],
	'space_05': [ 'Ryker', 'Mace', 'Troy', 'Dizz', 'Fleet'],
	'space_06': [ 'Wick', 'Yutani', 'Wayland', 'Hunter', 'Maximillion'],
	'space_07': [ 'Kyron', 'Miria', 'Bernard', 'Rook', 'Rand'],
	'space_08': [ 'Lancer', 'Dancer', 'Spacy', 'Global', 'Hayes'],
	'space_09': [ 'Lowe', 'Blazer', 'Galaxy Ranger', 'Black Hole', 'Starman'],
	'space_10': [ 'Commander Keyes', 'Major Bretai', 'Seraf', 'Korenen', 'Major Batou'],
	'space_11': [ 'Schawrtz', 'Lonestar', 'Candy', 'Kazoo', 'Marvin'],
	'space_boss': [ 'Gold Helm, The Spice Lord'],
	'tf_01': ['Explosives Guy', 'Demolition Man', 'One Eyed Jack', 'Lucky', 'Monoclops'],
	'tf_02': ['Engineer', 'Dell', 'Dr. Conagher', 'Roughneck', 'Nope'],
	'tf_03': ['Medic', 'Doctor', 'Doc.', 'Bonesaw', 'Uberman'],
	'tf_04': ['Pauling', 'Miss P.', 'Miss Pauling'],
	'tf_05': ['Mmph mmmph', 'Pyro', 'Pyromaniac', 'Ash', 'Flamesmith'],
	'tf_06': ['Saxton', 'Mr. Hale'],
	'tf_07': ['Scooter', 'Scout', 'Pain Train', 'Boston Basher'],
	'tf_08': ['Sniper', 'Sydney', 'The Huntsman', 'Gunman', 'Triggerman'],
	'tf_09': ['Solly', 'Soldier', 'The Patrios', 'Mister J. Doe', 'Rocket Man'],
	'tf_10': ['Spy', '???????', 'Mentlegen', 'Agent S.', 'Mole'],
	'tf_11': ['Heavy', 'Heavy Weapons Guy', 'Misha', 'Mikhail', 'Bear'],
	'tf_b_01': ['Explosives Guy', 'Demolition Man', 'One Eyed Jack', 'Lucky', 'Monoclops'],
	'tf_b_02': ['Engineer', 'Dell', 'Dr. Conagher', 'Roughneck', 'Nope'],
	'tf_b_03': ['Heavy', 'Heavy Weapons Guy', 'Misha', 'Mikhail', 'Bear'],
	'tf_b_04': ['Medic', 'Doctor', 'Doc.', 'Bonesaw', 'Uberman'],
	'tf_b_05': ['Mmph mmmph', 'Pyro', 'Pyromaniac', 'Ash', 'Flamesmith'],
	'tf_b_06': ['Scooter', 'Scout', 'Pain Train', 'Boston Basher'],
	'tf_b_07': ['Sniper', 'Sydney', 'The Huntsman', 'Gunman', 'Triggerman'],
	'tf_b_08': ['Solly', 'Soldier', 'The Patrios', 'Mister J. Doe', 'Rocket Man'],
	'tf_b_09': ['Spy', '???????', 'Mentlegen', 'Agent S.', 'Mole'],


};

g_rgNamePrefixes = ['Mega ', 'Dr. ', 'Super ', 'Ultra ', 'The Original ', 'The One True ', 'King ', 'Prince ', 'General ', 'The Ultimate ', 'The Smelliest ', 'The Strongest '];

window.CEnemy = function( game, nLane, nID, data )
{
	this.m_Game = game;
	this.m_nLane = nLane;
	this.m_nID = nID;
	this.m_data = data;
	this.m_flDisplayedHP = this.m_data.hp;
	this.m_bIsDestroyed = false;
	this.m_nLastTick = false;

	this.m_nSpriteWidth = 100;

	this.m_easingHP = new CEasingPrediction( CEasingLinear, this.m_data.hp, g_msTickRate, 0, this.m_data.max_hp );

	if( window.FixTextures )
		FixTextures();

	this.BuildSprite();

	this.m_Sprite.interactive = true;

	// Graphics instance for HP bars
	//this.m_Graphics = new PIXI.Graphics();

	// Click handlers
	var instance = this;
	this.m_Sprite.click = this.m_Sprite.tap = function( event ){
		instance.m_Game.TryChangeTarget( instance.m_nID );
	}

	this.m_Game.m_containerEnemies.addChild( this.m_Sprite );
	SortContainerByY(this.m_Game.m_containerEnemies);
	//this.m_Game.m_containerEnemies.addChild( this.m_Graphics );
}

CEnemy.prototype.BuildSprite = function()
{
	this.m_Sprite = new PIXI.spine.Spine( g_rgSkeletonCache.creep.data.spineData );
	this.m_Sprite.y = 450 + ( this.m_nID == 2 ? 50 : 0 );
	this.m_Sprite.x = 390 + g_nLaneScrollAmount * this.m_nLane + 125 * this.m_nID;

	//this.m_Sprite.skeleton.setSkinByName('space_0' + Math.floor( Math.random() * 10 ) );
	this.m_Sprite.skeleton.setSlotsToSetupPose();
	this.m_Sprite.state.setAnimationByName(0, 'appear', false);
	this.m_Sprite.state.addAnimationByName(0, 'idle', true, 0);
	this.m_Sprite.desiredScale = this.m_Sprite.scale.x = this.m_Sprite.scale.y = 2;
	//SetRandomSkin( this.m_Sprite.skeleton, g_rgSkeletonCache.creep_space.data.spineData );
	this.ApplyLevelSkin( this.m_Game.m_strLevelName );

	//this.m_Sprite.tint = 0xFF0000;

	this.m_Emitter = false;

	// Hook up events

	var instance = this;
}

CEnemy.prototype.SetAttachment = function(strSlot, strItem)
{
	this.m_Sprite.skeleton.setAttachment( strSlot, strItem );
}

CEnemy.prototype.GetName = function()
{
	var rgNames = g_rgNamesMap[this.m_strSkinName];
	if( !rgNames )
		return "Jaegar";

	var nIndex = xorprng( this.m_nID + this.m_Game.m_rgGameData.level * 10 + this.m_nLane * 100, rgNames.length );

	if( typeof QuickFixText != 'undefined' )
		return QuickFixText( rgNames[ nIndex ] );
	return rgNames[ nIndex ]
}

CEnemy.prototype.ApplyLevelSkin = function(strSetName)
{
	var rnd = xorprng( this.m_Game.m_rgGameData.level / 10, 50 );
	if( rnd == 42 )
		strSetName = 'tf2';

	switch( strSetName )
	{
		case 'tf2':
			this.SetAttachment( 'body', 'Body' );
			this.SetAttachment( 'face_plate', 'space_face' );
			this.SetAttachment( 'steam_logo', 'Steam Logo' );
			break;

		case 'ocean_floor':
			this.SetAttachment( 'body', 'undersea_body' );
			this.SetAttachment( 'face_plate', 'undersea_face' );
			this.SetAttachment( 'steam_logo', 'undersea_steam' );
			break;

		case 'snow':
			this.SetAttachment( 'body', 'snow_body' );
			this.SetAttachment( 'face_plate', 'snow_face' );
			this.SetAttachment( 'steam_logo', 'snow_steam' );
			break;

		case 'city_day':
			this.SetAttachment( 'body', 'city_day_body' );
			this.SetAttachment( 'face_plate', 'city_day_face' );
			this.SetAttachment( 'steam_logo', 'city_day_steam' );
			break;

		case 'city_night':
			this.SetAttachment( 'body', 'city_night_body' );
			this.SetAttachment( 'face_plate', 'city_night_face' );
			this.SetAttachment( 'steam_logo', 'city_night_steam' );
			break;

		case 'desert':
			this.SetAttachment( 'body', 'desert_body' );
			this.SetAttachment( 'face_plate', 'desert_face' );
			this.SetAttachment( 'steam_logo', 'desert_steam' );
			break;

		case 'island':
			this.SetAttachment( 'body', 'island_body' );
			this.SetAttachment( 'face_plate', 'island_face' );
			this.SetAttachment( 'steam_logo', 'island_steam' );
			break;

		case 'city_destroyed':
			this.SetAttachment( 'body', 'city_destroyed_body' );
			this.SetAttachment( 'face_plate', 'city_destroyed_face' );
			this.SetAttachment( 'steam_logo', 'city_destroyed_steam' );
			break;

		case 'volcano':
			// TODO: Broken ??
			//this.SetAttachment( 'body', 'volcano_body' );
			//this.SetAttachment( 'face_plate', 'volcano_face' );
			//this.SetAttachment( 'steam_logo', 'volcano_steam' );
			break;

		case 'stadium':
			this.SetAttachment( 'body', 'stadium_body' );
			this.SetAttachment( 'face_plate', 'stadium_face' );
			this.SetAttachment( 'steam_logo', 'stadium_steam' );
			break;

		default:
		case 'space':
			this.SetAttachment( 'body', 'Body' );
			this.SetAttachment( 'face_plate', 'space_face' );
			this.SetAttachment( 'steam_logo', 'Steam Logo' );
	}
}

CEnemy.prototype.OnDataUpdate = function()
{
	var nDuration = g_msTickRate;
	if( this.m_nLastTick )
	{
		nDuration = Date.now() - this.m_nLastTick;
	}

	this.m_nLastTick = Date.now();

	this.m_easingHP.UpdateValue(this.m_data.hp, nDuration);
	this.m_easingHP.m_nCeil = this.m_data.max_hp;
	this.m_easingHP.m_nFloor = this.m_data.hp;
	//this.m_easingHP.UpdateValue(this.m_data.hp);

	//console.log( "Easing from %s to %s", this.m_flDisplayedHP, flDelta );
}

CEnemy.prototype.Tick = function()
{
	// Are we visible?
	var nViewportLeft = -this.m_Game.m_containerEnemies.x;
	var nViewportRight = nViewportLeft + 1280; // TODO: HARD CODED CONSTANTS HISSSSSSSS
	var nViewportUI = 300;

	if( this.m_Sprite.x > nViewportRight - nViewportUI || this.m_Sprite.x + this.m_nSpriteWidth < nViewportLeft + nViewportUI )
		this.m_Sprite.visible = false;
	else
		this.m_Sprite.visible = true;

	this.m_flDisplayedHP = this.m_easingHP.Get() ;
	//this.DrawHealthBars();

	var nFootPosition = this.m_Sprite.position.y - this.m_Sprite.height;
	var nScaleRate = 1;//GetAdjustedScale( nFootPosition, 1 );

	var cLaneOffset = 360;
	var cSubLaneOffset = 135;

	var nLaneStart = ( nScaleRate * cLaneOffset ) + ( nScaleRate * ( g_nLaneScrollAmount  ) ) * this.m_nLane; // * GetAdjustedScale(nFootPosition, 3) *
	var desiredX = nLaneStart + cSubLaneOffset * this.m_nID;


	//desiredX *= nScaleRate;

	//this.m_Sprite.scale.x = this.m_Sprite.scale.y = 0.5 + GetAdjustedScale(this.m_Sprite.position.y); //1.5* nScaleRate;
	//this.m_Sprite.position.x = GetAdjustedX(nFootPosition, this.m_Game.m_containerEnemies.x)
	//this.m_Sprite.position.x = desiredX;// + GetAdjustedX(nFootPosition, this.m_Game.m_containerEnemies.x)


	//this.m_Sprite.x = GetAdjustedX( this.m_Game.m_containerEnemies.x, , this.m_Sprite.y );


}

CEnemy.prototype.TakeDamage = function()
{
	this.m_Sprite.state.setAnimationByName(0, 'flinch', false);
	this.m_Sprite.state.addAnimationByName(0, 'idle', true, 0);
}


CEnemy.prototype.Destroy = function()
{
	this.m_flDisplayedHP = 0;

	// Show +Gold if we were in that lane
	if( this.m_Game.m_rgPlayerData.current_lane == this.m_nLane && this.m_data.gold > 0 )
	{
		// Get gold multiplier
		// ?????????
		//var flMultiplier = this.m_Game.m_rgGameData.lanes[ this.m_nLane ]

		// GO HERE
		var text = new PIXI.Text("+" + FormatNumberForDisplay( this.m_data.gold, 5 ), {font: "35px 'Press Start 2P'", fill: "#e1b21e", stroke: '#000', strokeThickness: 2 });

		text.x = this.m_Sprite.x;
		text.y = this.m_Sprite.y;

		this.m_Game.m_containerParticles.addChild( text );
		text.container = this.m_Game.m_containerParticles;

		var e = new CEasingSinOut( text.y, -300, 1000 );
		e.parent = text;
		text.m_easeY = e;

		var e = new CEasingSinOut( 1.5, -1.5, 1000  );
		e.parent = text;
		text.m_easeAlpha = e;

		this.m_Game.m_rgClickNumbers.push(text);
	}

	if( !this.m_bSpawnsOwnEmitter )
	{
		this.m_Game.SpawnEmitter(g_rgEmitterCache["3coins_coins"], this.m_Sprite.x, this.m_Sprite.y);
		this.m_Game.SpawnEmitter(g_rgEmitterCache["3coins_smoke"], this.m_Sprite.x, this.m_Sprite.y);
		this.m_Game.SpawnEmitter(g_rgEmitterCache["3coins_burst"], this.m_Sprite.x, this.m_Sprite.y);
	}

	this.m_bIsDestroyed = true;




	//PlaySound('explode');
}

//
// Creep
//


window.CEnemyCreep  = function( game, nLane, nID, data )
{
	CEnemy.call(this, arguments[0], arguments[1], arguments[2], arguments[3]);
}

CEnemyCreep.prototype = Object.create(CEnemy.prototype);

CEnemyCreep.prototype.Destroy = function()
{
	CEnemy.prototype.Destroy.call(this);

	this.m_Sprite.state.setAnimationByName(0, 'death', false);
	g_AudioManager.play( 'explode' );



	//this.m_Graphics.clear();

	var instance = this;
	this.m_Sprite.state.tracks[0].onComplete = function()
	{
		instance.m_Sprite.visible = false;
		instance.m_Game.m_containerEnemies.removeChild( instance.m_Sprite );
	}
}

CEnemyCreep.prototype.Tick = function()
{
	CEnemy.prototype.Tick.call(this);

	// Random chance to chatter
	if( this.m_Game.m_rgPlayerData.current_lane == this.m_nLane && Math.floor( Math.random() * 1000 ) == 50 )
	{
		var nChatterSound = 1 + Math.floor( Math.random() * 11 );
		g_AudioManager.play( 'creep_' + nChatterSound );
		this.m_Sprite.state.setAnimationByName(1, 'attack', false);

	}
}

CEnemyCreep.prototype.ApplyLevelSkin = function(strSetName)
{
	CEnemy.prototype.ApplyLevelSkin.call(this, arguments[0] );

	var strIndex = 1 + this.m_data.id % 10;// Math.floor( 1 + ( Math.random() * 10 ) )
	if( strIndex < 10 )
		strIndex = "0" + strIndex;

	var rnd = xorprng( this.m_Game.m_rgGameData.level / 10, 50 );
	if( rnd == 42 )
		strSetName = 'tf2';

	switch( strSetName )
	{
		case 'tf2': // ???
			var nKey = this.m_nID + this.m_Game.m_rgGameData.level * 10 + this.m_nLane * 100
			var nIndex = 1 + xorprng( nKey, 11 );
			var bBlue = xorprng( nKey, 2 ) == 1;
			if( nIndex < 10 )
				strIndex = "0" + nIndex;
			else
				strIndex = nIndex;

			this.m_strSkinName = 'tf_' + strIndex;
			if( bBlue && nIndex <= 9 )
				this.m_strSkinName  = 'tf_b_' + strIndex;

			this.m_Sprite.skeleton.setSkinByName( this.m_strSkinName );

			break;

		case 'ocean_floor':
			this.m_Sprite.skeleton.setSkinByName('undersea_' + strIndex);
			this.m_strSkinName = 'undersea_' + strIndex;
			break;

		case 'snow':
			this.m_Sprite.skeleton.setSkinByName('snow_' + strIndex);
			this.m_strSkinName = 'snow_' + strIndex;
			break;

		case 'city_day':
			strIndex = 1 + this.m_data.id % 11;// Math.floor( 1 + ( Math.random() * 10 ) )
			if( strIndex < 10 )
				strIndex = "0" + strIndex;
			this.m_Sprite.skeleton.setSkinByName('city_day_' + strIndex);
			this.m_strSkinName = 'city_day_' + strIndex;
			break;

		case 'city_night':
			strIndex = 1 + this.m_data.id % 15;// Math.floor( 1 + ( Math.random() * 10 ) )
			if( strIndex < 10 )
				strIndex = "0" + strIndex;
			this.m_Sprite.skeleton.setSkinByName('city_night_' + strIndex);
			this.m_strSkinName = 'city_night_' + strIndex;
			break;

		case 'desert':
			strIndex = 1 + this.m_data.id % 15;// Math.floor( 1 + ( Math.random() * 10 ) )
			if( strIndex < 10 )
				strIndex = "0" + strIndex;

			this.m_Sprite.skeleton.setSkinByName('desert_' + strIndex);
			this.m_strSkinName = 'desert_' + strIndex;
			break;

		case 'island':
			this.m_Sprite.skeleton.setSkinByName('island_' + strIndex);
			this.m_strSkinName = 'island_' + strIndex;
			break;

		case 'city_destroyed':
			strIndex = 1 + this.m_data.id % 19;// Math.floor( 1 + ( Math.random() * 10 ) )
			if( strIndex < 10 )
				strIndex = "0" + strIndex;

			this.m_Sprite.skeleton.setSkinByName('city_destroyed_' + strIndex);
			this.m_strSkinName = 'city_destroyed_' + strIndex;
			break;

		case 'volcano':
			this.m_Sprite.skeleton.setSkinByName('volcano_' + strIndex);
			this.m_strSkinName = 'volcano_' + strIndex;
			break;

		case 'stadium':
			strIndex = 1 + this.m_data.id % 14;// Math.floor( 1 + ( Math.random() * 10 ) )
			if( strIndex < 10 )
				strIndex = "0" + strIndex;

			this.m_Sprite.skeleton.setSkinByName('stadium_' + strIndex);
			this.m_strSkinName = 'stadium_' + strIndex;
			break;

		default:
		case 'space':
			strIndex = 1 + this.m_data.id % 11;// Math.floor( 1 + ( Math.random() * 10 ) )
			if( strIndex < 10 )
				strIndex = "0" + strIndex;
			this.m_Sprite.skeleton.setSkinByName('space_' + strIndex);
			this.m_strSkinName = 'space_' + strIndex;
	}
}

//
// Boss
//

window.CEnemyBoss  = function( game, nLane, nID, data, strLevel )
{
	this.m_strLevel = strLevel;
	CEnemy.call(this, arguments[0], arguments[1], arguments[2], arguments[3]);

}

CEnemyBoss.prototype = Object.create(CEnemy.prototype);

CEnemyBoss.prototype.ApplyLevelSkin = function(strSetName)
{
	//CEnemy.prototype.ApplyLevelSkin.call(this, arguments[0] );

	this.m_strSkinName = this.m_strLevel+"_boss";
}

CEnemyBoss.prototype.BuildSprite = function()
{
	//console.log('boss_' + this.m_strLevel);

	var Skeleton = g_rgSkeletonCache['boss_space'];
	if( g_rgSkeletonCache['boss_' + this.m_strLevel] )
		Skeleton = g_rgSkeletonCache['boss_' + this.m_strLevel];

	this.m_Sprite = new PIXI.spine.Spine( Skeleton.data.spineData );
	this.m_Sprite.x = 360 + g_nLaneScrollAmount * this.m_nLane + 275
	this.m_Sprite.y = 475;
	//this.m_strSkinName = 'stadium_boss';

	// set current skin
	this.m_Sprite.skeleton.setSlotsToSetupPose();
	this.m_Sprite.state.setAnimationByName(0, 'idle', true);
	this.m_Sprite.desiredScale = this.m_Sprite.scale.x = this.m_Sprite.scale.y = 2;
	if( Skeleton.data.spineData.findSkin(this.m_strLevel) )
		this.m_Sprite.skeleton.setSkinByName(this.m_strLevel);

	this.m_Emitter = false;

	this.ApplyLevelSkin( this.m_Game.m_strLevelName );

	var instance = this;
}

CEnemyBoss.prototype.Destroy = function()
{
	this.m_Sprite.state.setAnimationByName(0, 'death', false);
	CEnemy.prototype.Destroy.call(this);

	g_AudioManager.play( 'explode' );

	var instance = this;
	this.m_Sprite.state.tracks[0].onComplete = function()
	{
		instance.m_Sprite.visible = false;
		instance.m_Game.m_containerEnemies.removeChild( instance.m_Sprite );
	}

}

CEnemyBoss.prototype.TakeDamage = function()
{
	this.m_Sprite.state.setAnimationByName(0, 'flinch', false);
	this.m_Sprite.state.addAnimationByName(0, 'idle', true, 0);
}


CEnemyBoss.prototype.Tick = function()
{
	CEnemy.prototype.Tick.call(this);
	// Are we visible?
	var nViewportLeft = -this.m_Game.m_containerEnemies.x;
	var nViewportRight = nViewportLeft + 1280; // TODO: HARD CODED CONSTANTS HISSSSSSSS
	var nViewportUI = 100;

	if( this.m_Sprite.x > nViewportRight - nViewportUI || this.m_Sprite.x + this.m_nSpriteWidth < nViewportLeft + nViewportUI )
		this.m_Sprite.visible = false;
	else
		this.m_Sprite.visible = true;
}
//
// Treasure
//

window.CEnemyTreasure  = function( game, nLane, nID, data )
{
	CEnemyCreep.call(this, arguments[0], arguments[1], arguments[2], arguments[3]);
}

CEnemyTreasure.prototype = Object.create(CEnemyCreep.prototype);



CEnemyTreasure.prototype.ApplyLevelSkin = function(strSetName)
{
	CEnemy.prototype.ApplyLevelSkin.call(this, arguments[0] );

	this.m_Sprite.skeleton.setSkinByName('treasure');
}

CEnemyTreasure.prototype.BuildSprite = function()
{
	CEnemyCreep.prototype.BuildSprite.call(this);

}

//
// Miniboss
//

window.CEnemyMiniBoss  = function( game, nLane, nID, data )
{
	CEnemyCreep.call(this, arguments[0], arguments[1], arguments[2], arguments[3]);
	//this.m_strSkinName = 'stadium_miniboss';
}

CEnemyMiniBoss.prototype = Object.create(CEnemyCreep.prototype);


CEnemyMiniBoss.prototype.GetName = function()
{
	var rgNames = g_rgNamesMap[this.m_strSkinName];
	if( !rgNames )
		return this.m_strSkinName;

	var nIndex = xorprng( this.m_nID + this.m_Game.m_rgGameData.level * 10 + this.m_nLane * 100, rgNames.length );
	var nPrefixIndex = xorprng( this.m_nID + this.m_Game.m_rgGameData.level * 10 + this.m_nLane * 100, g_rgNamePrefixes.length );

	var strName = rgNames[ nIndex ];

	strName = g_rgNamePrefixes[ nPrefixIndex ] + strName;

	if( typeof QuickFixText != 'undefined' )
		return QuickFixText( strName );

	return strName;
}

CEnemyMiniBoss.prototype.BuildSprite = function()
{
	this.m_Sprite = new PIXI.spine.Spine( g_rgSkeletonCache.creep.data.spineData );
	this.m_Sprite.y = 450 + ( this.m_nID == 1 ? 50 : 0 );
	this.m_Sprite.x = 380 + g_nLaneScrollAmount * this.m_nLane + 130 * (this.m_nID + 1);


	//this.m_Sprite.skeleton.setSkinByName('space_0' + Math.floor( Math.random() * 10 ) );
	this.m_Sprite.skeleton.setSlotsToSetupPose();
	this.m_Sprite.state.setAnimationByName(0, 'appear', false);
	this.m_Sprite.state.addAnimationByName(0, 'idle', true, 0);
	this.m_Sprite.desiredScale = this.m_Sprite.scale.x = this.m_Sprite.scale.y = 3;
	//SetRandomSkin( this.m_Sprite.skeleton, g_rgSkeletonCache.creep_space.data.spineData );
	this.ApplyLevelSkin( this.m_Game.m_strLevelName );
	//this.m_Sprite.tint = 0xFF0000;

	this.m_Emitter = false;

	// Hook up events

	var instance = this;

}

//
// Spawner
//


window.CEnemySpawner  = function( game, nLane, nID, data, strLevel )
{
	this.m_strLevel = strLevel;
	CEnemy.call(this, arguments[0], arguments[1], arguments[2], arguments[3]);

	this.m_rgEnemiesAlive = [];
	this.m_strSkinName = 'spawner_01';
}

CEnemySpawner.prototype = Object.create(CEnemy.prototype);

CEnemySpawner.prototype.BuildSprite = function()
{
	this.m_Sprite = new PIXI.spine.Spine( g_rgSkeletonCache.spawner_spaceship.data.spineData );
	this.m_Sprite.x = 360 + g_nLaneScrollAmount * this.m_nLane + 275
	this.m_Sprite.y = 350;

	// set current skin
	//this.m_Sprite.skeleton.setSkinByName('goblin');
	this.m_Sprite.skeleton.setSlotsToSetupPose();
	this.m_Sprite.state.setAnimationByName(2, 'appear');
	this.m_Sprite.state.setAnimationByName(0, 'idle', true);
	this.m_Sprite.desiredScale = this.m_Sprite.scale.x = this.m_Sprite.scale.y = 2;

	this.m_Emitter = false;

	if(  g_rgSkeletonCache.spawner_spaceship.data.spineData.findSkin(this.m_strLevel) )
	{
		this.m_Sprite.skeleton.setSkinByName(this.m_strLevel);
	} else
		this.m_Sprite.skeleton.setSkinByName("city_day");

	// Hook up events

	var instance = this;
	this.m_bCanSpawn = false;
	this.m_Sprite.state.tracks[2].onComplete = function( track )
	{
		instance.m_bCanSpawn = true;
	}


	this.m_Sprite.state.tracks[0].onEvent = this.m_fnOnEvent;

	this.m_fnOnEvent = function(track, event)
	{
		switch( event.data.name )
		{
			case 'spawn_units':
				var nSpawned = 0;
				for( var i=0; i<instance.m_Game.m_rgGameData.lanes[instance.m_nLane].enemies.length; i++ )
				{
					var enemy = instance.m_Game.m_rgGameData.lanes[instance.m_nLane].enemies[i];
					var cEnemy = instance.m_Game.FindEnemyByID( enemy.id );
					if( enemy.hp > 0 && !cEnemy )
					{
						setTimeout((function(instance, i){
							return function(){
								var e = new CEnemyCreep(instance.m_Game, instance.m_nLane, i, instance.m_Game.m_rgGameData.lanes[instance.m_nLane].enemies[i] );
								instance.m_Game.m_rgEnemies.push(e);
							}
						})(instance, i), nSpawned++ * ( 100 + 150 * Math.random() ) );

					}
				}
				break;
			case 'spit_coins':

				instance.m_Game.SpawnEmitter(g_rgEmitterCache["3coins_coins"], instance.m_Sprite.x, instance.m_Sprite.y);
				instance.m_Game.SpawnEmitter(g_rgEmitterCache["3coins_smoke"], instance.m_Sprite.x, instance.m_Sprite.y);
				instance.m_Game.SpawnEmitter(g_rgEmitterCache["3coins_burst"], instance.m_Sprite.x, instance.m_Sprite.y);

				break;
			default:
				console.log("Unhandled event in CEnemySpawner: %s", event.data.name);
		}

	}


}

CEnemySpawner.prototype.Tick = function()
{
	CEnemy.prototype.Tick.call(this);

	if( !this.m_bCanSpawn )
		return;

	// Update tracked enemies
	var rgLaneEntities = this.m_Game.m_rgGameData.lanes[this.m_nLane].enemies;
	var rgFoundAlive = [];
	for( var i=0; i < rgLaneEntities.length; i++  )
	{
		if( rgLaneEntities[ i ].type == 1 && rgLaneEntities[ i ].hp > 0 )
			rgFoundAlive.push(i);
	}

	//console.log(rgLaneEntities);

	// Did we find something new?
	var instance = this;
	var rgNew = rgFoundAlive.filter( function( ele ) { return instance.m_rgEnemiesAlive.indexOf( ele ) == -1 } );
	this.m_rgEnemiesAlive = rgFoundAlive;
	if( rgNew.length > 0 )
	{
		// Play on track 1 so we don't miss the event due to flinching
		this.m_Sprite.state.setAnimationByName(1, 'spawn_monster', false);
		g_AudioManager.play( 'spawn' );

		this.m_Sprite.state.tracks[1].onEvent = this.m_fnOnEvent; // setAnimation appears to clear track events ??
	}

}

CEnemySpawner.prototype.Destroy = function()
{
	this.m_bSpawnsOwnEmitter = true;
	CEnemy.prototype.Destroy.call(this);

	this.m_Sprite.state.setAnimationByName(0, 'death', false);

	g_AudioManager.play( 'explode' );

	this.m_flDisplayedHP = 0;
	//this.DrawHealthBars();

	var instance = this;
	this.m_Sprite.state.tracks[0].onEvent = this.m_fnOnEvent;
	this.m_Sprite.state.tracks[0].onComplete = function()
	{
		instance.m_Sprite.visible = false;
		instance.m_Game.m_containerEnemies.removeChild( instance.m_Sprite );
	}

}

CEnemySpawner.prototype.TakeDamage = function()
{
	this.m_Sprite.state.setAnimationByName(0, 'flinch', false);
	this.m_Sprite.state.addAnimationByName(0, 'idle', true, 0);

}


function SetRandomSkin( skeleton, spineData )
{
	var i = Math.floor( spineData.skins.length * Math.random() );
	//skeleton.setSkinByName( spineData.skins[i].name );
}