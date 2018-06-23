//<script>
"use strict";

var k_NumMapTilesW = 12;
var k_NumMapTilesH = 8;
var k_GridLineWidth = 2;
var k_MapWidth = 808;
var k_MapHeight = 500;
var k_MapCrosshairOffset = 7;

//////////////////////////////////////////////////////////
// Battle Select - a big grid that allows players to pick
//   where they would like to attack on a map (and see
//   status about which areas are already defeated).
function CBattleSelect(resources, container)
{
	this.m_Resources = resources;
	this.m_Container = container;
	this.m_Graphics = new PIXI.Graphics();
	
	this.m_Tiles = [];
		
	this.width = k_MapWidth;
	this.height = k_MapHeight;
	this.x = 0;
	this.y = 0;
	
	let g = this.m_Graphics;

	var instance = this;

	g.beginFill(0xffffff, 0.28);
	
	var tileSizeX = (this.width - k_GridLineWidth) / k_NumMapTilesW;
	var tileSizeY = (this.height - k_GridLineWidth) / k_NumMapTilesH;
	this.m_TileSizeX = tileSizeX;
	this.m_TileSizeY = tileSizeY;
	
	// first draw a box around the outside
	g.drawRect(this.x, this.y, this.width, k_GridLineWidth);
	g.drawRect(this.x, this.y + k_GridLineWidth, k_GridLineWidth, this.height - k_GridLineWidth);
	g.drawRect(this.x + k_GridLineWidth, this.y + this.height - k_GridLineWidth, this.width - 2 * k_GridLineWidth, k_GridLineWidth);
	g.drawRect(this.x + this.width - k_GridLineWidth, this.y + k_GridLineWidth, k_GridLineWidth, this.height - k_GridLineWidth);

	// now draw some horizontal lines
	for(var tileY = 1; tileY < k_NumMapTilesH; tileY++)
	{
		g.drawRect(this.x + k_GridLineWidth, this.y + tileY * tileSizeY, this.width - 2 * k_GridLineWidth, k_GridLineWidth); 
	}

	// and sadly the verticals need to draw each bit in between those horizontal lines (otherwise we get
	//  blended overlaps at the intersections);
	var sliverH = tileSizeY - k_GridLineWidth;
	for(var tileX = 1; tileX < k_NumMapTilesW; tileX++)
	{
		for(var tileY = 0; tileY < k_NumMapTilesH; tileY++)
		{
			var left = this.x + tileX * tileSizeX;
			var top = this.y + tileY * tileSizeY;
			
			g.drawRect(left, top + k_GridLineWidth, k_GridLineWidth, sliverH);
		}
	}
	g.endFill();
	
	
	// large invisible box to trap mouse events
	g.beginFill(0xffffff, 0.0);
	g.drawRect(this.x, this.y, this.width, this.height);
	g.endFill();
	g.interactive = true;

	this.m_Container.addChild(this.m_Graphics);

	this.m_InfoBox = new CUIBox(260, 80);
	this.m_InfoBox.SetTitleStyle(k_TextStyleDefault);
	this.m_InfoBox.SetTitleTailPosition(this.m_InfoBox.GetWidth() + 2);
	this.m_InfoBox.AddRolloverBox(function() {
		instance.m_MouseOverInfo = true;
	},
	function() {
		instance.m_MouseOverInfo = false;
	});

	this.m_InfoBoxClaimedContainer = new PIXI.Container();
	this.m_InfoBoxUnclaimedContainer = new PIXI.Container();

	this.m_InfoBoxProgress = new CProgressBar(102);
	this.m_InfoBoxProgress.x = 131;
	this.m_InfoBoxProgress.y = 51;

	this.m_InfoBoxProgressLabel = new PIXI.Text('Community Progress'.toUpperCase());
	this.m_InfoBoxProgressLabel.style = k_TextStyleSmallerBold;
	this.m_InfoBoxProgressLabel.anchor.set(0.5,0);
	this.m_InfoBoxProgressLabel.x = this.m_InfoBoxProgress.x + this.m_InfoBoxProgress.m_Width / 2;
	this.m_InfoBoxProgressLabel.y = this.m_InfoBoxProgress.y - 17;

	this.m_InfoBoxThreatLevelLabel = new PIXI.Text('Threat level'.toUpperCase());
	this.m_InfoBoxThreatLevelLabel.style = k_TextStyleSmallBold;
	this.m_InfoBoxThreatLevelLabel.anchor.set(0.5,0);
	this.m_InfoBoxThreatLevelLabel.x = 64;
	this.m_InfoBoxThreatLevelLabel.y = 22;

	this.m_InfoBoxThreatLevel = new PIXI.Text('Low'.toUpperCase());
	this.m_InfoBoxThreatLevel.style = k_TextStyleHugeBold;
	this.m_InfoBoxThreatLevel.anchor.set(0.5, 0);
	this.m_InfoBoxThreatLevel.x = 64;
	this.m_InfoBoxThreatLevel.y = 36;

	this.m_InfoBoxClanContainer = new PIXI.Container();

	this.m_InfoBoxPrimaryClan = null;

	this.m_InfoBoxUnclaimedContainer.addChild(this.m_InfoBoxThreatLevel);
	this.m_InfoBoxUnclaimedContainer.addChild(this.m_InfoBoxProgressLabel);
	this.m_InfoBoxUnclaimedContainer.addChild(this.m_InfoBoxProgress);
	this.m_InfoBoxUnclaimedContainer.addChild(this.m_InfoBoxThreatLevelLabel);

	this.m_InfoBoxWithHelpLabel = new PIXI.Text('With help from'.toUpperCase() + ":");
	this.m_InfoBoxWithHelpLabel.style = k_TextStyleSmallBoldLeft;
	this.m_InfoBoxWithHelpLabel.anchor.set(0,0);
	this.m_InfoBoxWithHelpLabel.x = 64;
	this.m_InfoBoxWithHelpLabel.y = 22;

	this.m_InfoBoxPrimaryClan = null;
	this.m_InfoBoxSecondaryClans = null;

	this.m_InfoBoxClanContainer.addChild(this.m_InfoBoxWithHelpLabel);

	// now make a crosshair
	this.m_Crosshair = new CCrosshair(tileSizeX + 2 - (2*k_MapCrosshairOffset), tileSizeY - (2*k_MapCrosshairOffset));
	this.m_Container.addChild(this.m_Crosshair);
	
	this.m_SelectedTileX = -1;
	this.m_SelectedTileY = -1;

	g.pointertap = function()
	{
		if(null != instance.click)
		{
			instance.click(instance.m_SelectedTileX, instance.m_SelectedTileY);
		}
	};
}


function _GetTileIdx(tileX, tileY)
{
	return tileX + ( tileY * k_NumMapTilesW );
}

CBattleSelect.prototype.SetTile = function(tileX, tileY, tileInfo)
{
	var tileIdx = _GetTileIdx(tileX, tileY);
	
	if(tileIdx < this.m_Tiles.length && null != this.m_Tiles[tileIdx])
	{
		var oldTile = this.m_Tiles[tileIdx];
		oldTile.SetData(tileInfo);
	}
	else
	{	
		var tile = new CBattleTile(this.m_Resources, tileInfo );
		this.m_Tiles[tileIdx] = tile;
		this.m_Container.addChild(tile);
		
		tile.x = 1 + this.m_TileSizeX * tileX;
		tile.y = 1 + this.m_TileSizeY * tileY;
	}
}

CBattleSelect.prototype.Update = function(delta)
{
	var mousePosition = gApp.renderer.plugins.interaction.mouse.global;
	
	// convert to local coordinates
	mousePosition = this.m_Container.toLocal(mousePosition);

	if(null != this.m_InfoBox)
	{
		this.m_InfoBox.Update(delta);
	}

	var tileX = Math.floor(mousePosition.x / this.m_TileSizeX);
	var tileY = Math.floor(mousePosition.y / this.m_TileSizeY);

	// persist our info box if the player is hovering on it
	if(this.m_MouseOverInfo)
	{
		tileX = this.m_SelectedTileX;
		tileY = this.m_SelectedTileY;
	}

	if(this.m_SelectedTileX != tileX || this.m_SelectedTileY != tileY)
	{	
		var tileIdx = _GetTileIdx(tileX, tileY);
		var tile = this.m_Tiles[tileIdx];

		// may be invalid values!
		this.m_SelectedTileX = tileX;
		this.m_SelectedTileY = tileY;

		if(tileX >= 0 && tileX < k_NumMapTilesW && 
		   tileY >= 0 && tileY < k_NumMapTilesH)
		{
			this.m_Container.addChild(this.m_Crosshair); // move back to top of the display list
			this.m_Crosshair.x = k_MapCrosshairOffset + tileX * this.m_TileSizeX;
			this.m_Crosshair.y = k_MapCrosshairOffset + tileY * this.m_TileSizeY;
			
			this.m_Container.addChild(this.m_InfoBox);

			if(null != tile)
			{
				var tileData = tile.Info;
				if(tileData.captured)
				{
					this.m_InfoBox.removeChild(this.m_InfoBoxUnclaimedContainer);
					this.m_InfoBox.addChild(this.m_InfoBoxClaimedContainer);

					this.m_InfoBox.SetSize(186, 80);
					this.m_InfoBoxProgress.SetValue(1.0);
					this.m_InfoBox.SetTitleText('Claimed'.toUpperCase());

					this._RefreshInfoTeamImages( tileData );
				}
				else
				{
					this.m_InfoBox.removeChild(this.m_InfoBoxClaimedContainer);
					this.m_InfoBox.addChild(this.m_InfoBoxUnclaimedContainer);

					this.m_InfoBox.SetSize(260, 80);

					var progress = tileData.progress;
					this.m_InfoBoxProgress.SetValue(progress);

					this.m_InfoBox.SetTitleText('Unclaimed'.toUpperCase());

					switch(tileData.difficulty)
					{
						case 3:
						{
							this.m_InfoBoxThreatLevel.text = 'High'.toUpperCase();
							this.m_InfoBoxThreatLevel.tint = 0xf07b13;
							break;
						}
						case 2:
						{
							this.m_InfoBoxThreatLevel.text = 'Medium'.toUpperCase();
							this.m_InfoBoxThreatLevel.tint = 0xe9d35a;
							break;
						}
						default:
						{
							this.m_InfoBoxThreatLevel.text = 'Low'.toUpperCase();
							this.m_InfoBoxThreatLevel.tint = 0x75e95a;
							break;
						}
					}

					this._RefreshInfoTeamImages( tileData );
				}
			}

			this.m_InfoBox.x = this.m_Crosshair.x - this.m_InfoBox.GetWidth();
			this.m_InfoBox.y = this.m_Crosshair.y + this.m_TileSizeY - 36;

			this.m_InfoBox.SetTitleTailPosition(this.m_InfoBox.GetWidth() + 2);
		}
		else
		{
			this.m_Container.removeChild(this.m_Crosshair);
			this.m_Container.removeChild(this.m_InfoBox);
		}
	}
}

CBattleSelect.prototype._RefreshInfoTeamImages = function( tileData )
{
	this.m_InfoBoxClaimedContainer.removeChild( this.m_InfoBoxClanContainer );
	this.m_InfoBoxUnclaimedContainer.removeChild( this.m_InfoBoxClanContainer );

	if ( this.m_InfoBoxPrimaryClan !== null )
	{
		this.m_InfoBoxPrimaryClan.destroy();
	}

	if ( this.m_InfoBoxSecondaryClans !== null )
	{
		this.m_InfoBoxSecondaryClans.destroy();
	}

	this.m_InfoBoxWithHelpLabel.visible = false;

	if ( tileData.clanavatar === null )
		return;

	this.m_InfoBoxPrimaryClan = new PIXI.Sprite.fromImage( tileData.clanavatar );
	this.m_InfoBoxPrimaryClan.scale.set( 1.2, 1.2 );
	this.m_InfoBoxPrimaryClan.anchor.set( 0.5, 0.5 );
	this.m_InfoBoxPrimaryClan.x = 32;
	this.m_InfoBoxPrimaryClan.y = 50;
	this.m_InfoBoxPrimaryClan.interactive = true;
	this.m_InfoBoxPrimaryClan.buttonMode = true;
	this.m_InfoBoxPrimaryClan.pointertap = function() {
		window.open( 'https://steamcommunity.com/groups/'+tileData.clanurl, '_blank' );
	};
	this.m_InfoBoxClanContainer.addChild( this.m_InfoBoxPrimaryClan );

	if ( tileData.clans.length > 1 )
	{
		this.m_InfoBoxWithHelpLabel.visible = true;
		this.m_InfoBoxSecondaryClans = new PIXI.Container();
		var instance = this;
		var curx = -k_GameBoxPadding;
		var bIncludeSecondary = false;
		tileData.clans.forEach( function( clan ) {
			if ( tileData.clanurl == clan.url )
			{
				return;
			}
			bIncludeSecondary = true;
			var sprite = new PIXI.Sprite.fromImage( 'clanavatar_' + clan.accountid );
			sprite.interactive = true;
			sprite.buttonMode = true;
			sprite.pointertap = function() {
				window.open( 'https://steamcommunity.com/groups/'+clan.url, '_blank' );
			};
			sprite.x = curx + k_GameBoxPadding;
			curx = sprite.x + sprite.width;
			instance.m_InfoBoxSecondaryClans.addChild( sprite );
		});

		if ( bIncludeSecondary )
		{
			this.m_InfoBoxWithHelpLabel.visible = true;
			this.m_InfoBoxClanContainer.addChild( this.m_InfoBoxSecondaryClans );
			this.m_InfoBoxSecondaryClans.x = this.m_InfoBoxPrimaryClan.x + this.m_InfoBoxPrimaryClan.width - 5;
			this.m_InfoBoxSecondaryClans.y = 40;
		}
	}

	if ( tileData.captured )
	{
		this.m_InfoBoxClanContainer.x = 0;
		this.m_InfoBoxClanContainer.y = 0;
		this.m_InfoBoxClaimedContainer.addChild( this.m_InfoBoxClanContainer );
		this.m_InfoBox.SetSize( this.m_InfoBoxPrimaryClan.width + this.m_InfoBoxClanContainer.width + k_GameBoxPadding, 80);
	}
	else
	{
		this.m_InfoBoxClanContainer.x = this.m_InfoBoxProgress.x + this.m_InfoBoxProgress.width + k_GameBoxPadding;
		this.m_InfoBoxClanContainer.y = 0;
		this.m_InfoBoxUnclaimedContainer.addChild( this.m_InfoBoxClanContainer );
		this.m_InfoBox.SetSize(260 + this.m_InfoBoxClanContainer.width + k_GameBoxPadding, 80);
	}
};


CBattleSelect.prototype.destroy = function()
{
	this.m_Graphics.destroy();	
	this.m_Crosshair.destroy();
};

//////////////////////////////////////////////////////////
// Battle Tile - show whether a tile is a boss fight, is conquered,
//   or is empty.
function CBattleTile(resources, tileInfo)
{
	PIXI.Container.call(this);

	this.Info = tileInfo;
	
	if( tileInfo.captured == true )
	{
		this.m_BG = new PIXI.Sprite.fromImage( 'grid_tile_complete' );
		this.addChild(this.m_BG);

		if ( tileInfo.clanavatar != null )
		{
			this.m_ClanImage = new PIXI.Sprite.fromImage( tileInfo.clanavatar );
			this.m_ClanImage.anchor.set( 0.5, 0.5 );
			this.m_ClanImage.x = 32;
			this.m_ClanImage.y = 31;
			this.addChild( this.m_ClanImage );
		}
	}
	else if(tileInfo.boss)
	{
		this.m_BG = new PIXI.Sprite.fromImage( 'grid_tile_boss' );
		this.addChild(this.m_BG);
	}
}
CBattleTile.prototype = Object.create(PIXI.Container.prototype);
CBattleTile.prototype.constructor = CBattleTile;

CBattleTile.prototype.destroy = function()
{
};
