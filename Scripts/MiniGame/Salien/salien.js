// <script>
"use strict";

	
const BODY_TYPES = ["slime", "beast", "psychic"];
const ARM_TYPES = ["slime-skinny", "slime-drippy", "slime-tentacle",
				   "beast-wings", "beast-chimp", "beast-cat",					   
				   "psychic-strong", "psychic-wispy", "psychic-skinny"];
const LEG_TYPES = ["slime-manytentacles", "slime-twotentacles", "slime-frog",
				   "beast-elephant", "beast-hoof", "beast-beast",
				   "psychic-wispy", "psychic-taper", "psychic-strong"];   
const EYE_TYPES = ["slime-many", "slime-snail", "slime-squishy", "slime-biggreen",
				   "beast-owl", "beast-cutest", "beast-snake", "beast-egg",
				   "psychic-one", "psychic-smile", "psychic-scary"];
const MOUTH_TYPES = ["slime-fishfrown", "slime-fishbigsmile", "slime-squid",
				   "beast-sharpest", "beast-dogtongue", "beast-smallfangs", 
				   "beast-snarl", "beast-catsnout", "beast-smallsmile",
				   "psychic-ooo", "psychic-open", "psychic-wavy"];
const SALIEN_SCALE = 0.12;
const SALIEN_ATTACH_SCALE = 2.56; // arbitrary?
const DEG_TO_RAD = Math.PI / 180;

const HAT_OFFSET_X = -28;
const HAT_OFFSET_Y = -216;
const SHIRT_OFFSET_X = 2;
const SHIRT_OFFSET_Y = -80;

//////////////////////////////////////////////////////////
// Salien - a blob of a guy with customizable parts who 
//  uses a Spine animation.
function CSalien(resources)
{
	// these assets must be loaded first!
	const rawSkeletonData = resources['saliens_rig_anim'].data;
    const rawAtlasData = resources['saliens_rig_atlas'].data;

    this.m_Atlas = new PIXI.spine.core.TextureAtlas(rawAtlasData, function (line, callback) 
	{
        callback(PIXI.BaseTexture.from('saliens_rig'));
    });

    const spineAtlasLoader = new PIXI.spine.core.AtlasAttachmentLoader(this.m_Atlas);
    const spineJsonParser = new PIXI.spine.core.SkeletonJson(spineAtlasLoader);

	spineJsonParser.scale = 1.0;

	this.m_SkeletonData = spineJsonParser.readSkeletonData(rawSkeletonData);

	// finally superconstructor
	PIXI.spine.Spine.call(this, this.m_SkeletonData);
	
	// now build a dictionary so it's easy for us to customize parts
	this._BuildSlotDictionary();
	
	// small hack, our art is too large for what we're displaying.
	this.scale.set(SALIEN_SCALE, SALIEN_SCALE);

	var instance = this;
	this.m_DynamicLoader = new PIXI.loaders.Loader();
	this.m_DynamicLoader.on('complete', (loader, resources) =>
	{
		if ( instance.m_HatId != 0 )
		{
			instance.AttachHat('salien_hat_' + this.m_HatId);
		}

		if ( instance.m_ShirtId != 0 )
		{
			instance.AttachShirt('salien_shirt_' + this.m_ShirtId);
		}

		this.Update();
	});

	this.m_HatId = -1;
	this.m_ShirtId = -1;
	this.m_HatSprite = null;
	this.m_ShirtSprite = null;

	this.UpdateCustomizations();

	this.PlayAnim('idle');
}
CSalien.prototype = Object.create(PIXI.spine.Spine.prototype);
CSalien.prototype.constructor = CSalien;

CSalien.prototype.PlayAnim = function(animId, looping, trackIdx, callback)
{
	var _looping = true;
	if ( looping !== undefined )
	{
		_looping = looping;
	}

	var _trackIdx = 0;
	if ( trackIdx !== undefined )
	{
		_trackIdx = trackIdx;
	}

	this.state.setAnimation(_trackIdx, animId, _looping);

	if ( callback !== undefined )
	{
		this.state.onComplete = callback;
	}
	else
	{
		this.state.onComplete = null;
	}
};

CSalien.prototype.ClearAnimCallback = function()
{
	this.state.onComplete = null;
};

// call this when the body is customized!
CSalien.prototype.UpdateCustomizations = function()
{
	this.SetBodyType(BODY_TYPES[gSalienData.body_type]);
	
	var armType = ARM_TYPES[gSalienData.arms];
	this.CustomizePart("arm-left", armType);
	this.CustomizePart("arm-right", armType);
	
	var legType = LEG_TYPES[gSalienData.legs];
	this.CustomizePart("leg-left", legType);
	this.CustomizePart("leg-right", legType);
	this.CustomizePart("leg-middle", legType);		
	
	var eyeType = EYE_TYPES[gSalienData.eyes];
	this.CustomizePart("eye-left", eyeType);
	this.CustomizePart("eye-right", eyeType);
	this.CustomizePart("eye-middle", eyeType);	
	
	var mouthType = MOUTH_TYPES[gSalienData.mouth];
	this.CustomizePart("mouth", mouthType);

	// queue a load for our attachments
	this.LoadAttachments();
}

// "psychic", "slime", "beast". Note that each body type has its own list
//  of valid parts (e.g. left-arm-psychic-strong)
CSalien.prototype.SetBodyType = function(typeId)
{
	this.m_BodyType = typeId;
	this.CustomizePart("body", typeId);
}

// remap the spine animation to use a different region for a given part id.
//  This is NOT for attachments.
CSalien.prototype.CustomizePart = function(partId, imageId)
{	
	//console.log("CustomizePart: " + partId + " --> " + imageId);

	var slot = this.GetSlot(partId);
	var sceneSlot = this.skeleton.slots[slot.index];
	var slotContainer = this.slotContainers[slot.index];
	
	var attachment = sceneSlot.attachment;	
	
	// assign a new region from our atlas
	var regionId = partId + "-" + imageId;
	var region = this.GetAtlasRegion(regionId);
	attachment.setRegion(region);
}

CSalien.prototype.LoadAttachments = function()
{
	this.m_HatId = gSalienData.hat_itemid;
	this.m_ShirtId = gSalienData.shirt_itemid;

	var hatImage = gSalienData.hat_image;
	var hatImageKey = 'salien_hat_' + this.m_HatId;
	var shirtImage = gSalienData.shirt_image;
	var shirtImageKey = 'salien_shirt_' + this.m_ShirtId;

	var bLoadAssets = false;

	if ( this.m_HatId != 0 && !this.m_DynamicLoader.resources[hatImageKey] )
	{
		bLoadAssets = true;
		LoadAsset(hatImageKey, hatImage, undefined, this.m_DynamicLoader);
	}
	else if ( this.m_HatId != 0 )
	{
		this.AttachHat( hatImageKey );
	}
	else
	{
		this.RemoveHat();
	}

	if ( this.m_ShirtId != 0 && !this.m_DynamicLoader.resources[shirtImageKey] )
	{
		bLoadAssets = true;
		LoadAsset(shirtImageKey, shirtImage, undefined, this.m_DynamicLoader);
	}
	else if ( this.m_ShirtId != 0 )
	{
		this.AttachShirt(shirtImageKey);
	}
	else
	{
		this.RemoveShirt();
	}

	if ( bLoadAssets )
	{
		this.m_DynamicLoader.load();
	}
	else
	{
		this.Update();
	}
};

CSalien.prototype.AttachHat = function(imageKey)
{
	var resource = this.m_DynamicLoader.resources[imageKey];

	if(null != resource)
	{
		var w = resource.data.naturalWidth;
		var h = resource.data.naturalHeight;

		if(null != this.m_HatSprite)
		{
			this.removeChild(this.m_HatSprite);
			this.m_HatSprite.destroy();
		}
		this.m_HatSprite = new PIXI.Sprite(resource.texture);
		this.m_HatSprite.anchor.set(0.5, 0.5);
		this.m_HatSprite.width = w;
		this.m_HatSprite.height = h;
		this.m_HatSprite.scale.set(SALIEN_ATTACH_SCALE, SALIEN_ATTACH_SCALE);
		this.addChild(this.m_HatSprite);
	}
};

CSalien.prototype.AttachShirt = function(imageKey)
{
	var resource = this.m_DynamicLoader.resources[imageKey];
	if(null != resource)
	{
		var w = resource.data.naturalWidth;
		var h = resource.data.naturalHeight;

		if(null != this.m_ShirtSprite)
		{
			this.removeChild(this.m_ShirtSprite);
			this.m_ShirtSprite.destroy();
		}
		this.m_ShirtSprite = new PIXI.Sprite(resource.texture);
		this.m_ShirtSprite.anchor.set(0.5, 0.5);
		this.m_ShirtSprite.width = w;
		this.m_ShirtSprite.height = h;
		this.m_ShirtSprite.scale.set(SALIEN_ATTACH_SCALE, SALIEN_ATTACH_SCALE);
		this.addChild(this.m_ShirtSprite);
	}
};

CSalien.prototype.RemoveShirt = function()
{
	if(null != this.m_ShirtSprite)
	{
		this.removeChild(this.m_ShirtSprite);
		this.m_ShirtSprite.destroy();
		this.m_ShirtSprite = null;
	}
};

CSalien.prototype.RemoveHat = function()
{
	if(null != this.m_HatSprite)
	{
		this.removeChild(this.m_HatSprite);
		this.m_HatSprite.destroy();
		this.m_HatSprite = null;
	}
};

CSalien.prototype.Update = function()
{
	if(null != this.m_HatSprite)
	{
		// move the attachments to the correct spot
		var hatBoneDef = this.GetBone("hat");
		var hatBone = this.skeleton.bones[hatBoneDef.index];

		//console.log(hatBone);

		this.m_HatSprite.x = hatBone.worldX + HAT_OFFSET_X;
		this.m_HatSprite.y = hatBone.worldY + HAT_OFFSET_Y;
		var rot = hatBone.getWorldRotationX() + 90;
		this.m_HatSprite.rotation = rot * DEG_TO_RAD;
	}

	if(null != this.m_ShirtSprite)
	{
		// move the attachments to the correct spot
		var shirtBoneDef = this.GetBone("shirt");
		var shirtBone = this.skeleton.bones[shirtBoneDef.index];

		//console.log(shirtBone);

		this.m_ShirtSprite.x = shirtBone.worldX + SHIRT_OFFSET_X;
		this.m_ShirtSprite.y = shirtBone.worldY + SHIRT_OFFSET_Y;
		var rot = shirtBone.getWorldRotationX() + 90;
		this.m_ShirtSprite.rotation = rot * DEG_TO_RAD;
	}
}

// search the spine for a slot with this partial name, cache results
CSalien.prototype.GetSlot = function(slotId)
{
	// spine slots are objects like this:
	//  Object { color: {…}, index: 0, name: "parts/arm-right-slime-tentacle", 
	//           boneData: {…}, attachmentName: "parts/arm-right-slime-tentacle", 
	//           blendMode: 0 }
	var slot = this.m_Slots[slotId];
	if(null != slot)
	{
		return slot;
	}
	
	var slots = this.m_SkeletonData.slots;
	for(var slotIdx in slots)
	{
		slot = slots[slotIdx];
		if(slot.name.startsWith("parts/" + slotId))
		{	
			this.m_Slots[slotId] = slot;
			return slot;
		}
	}
	return null;
}

// search the spine for a bone with this partial name, cache results
CSalien.prototype.GetBone = function(boneId)
{
	// spine bones are objects like this:
	var bone = this.m_Bones[boneId];
	if(null != bone)
	{
		return bone;
	}

	var bones = this.m_SkeletonData.bones;
	for(var boneIdx in bones)
	{
		bone = bones[boneIdx];
		if(bone.name.startsWith(boneId))
		{
			this.m_Bones[boneId] = bone;
			return bone;
		}
	}
	return null;
}

// search the atlas for a slot with this partial name, cache results
CSalien.prototype.GetAtlasRegion = function(regionId)
{
	var region = this.m_AtlasRegions[regionId];
	if(null != region)
	{
		return region;
	}
	
	// otherwise go find it
	var regions = this.m_Atlas.regions;
	for(var regionIdx in regions)
	{
		region = regions[regionIdx];
		if(region.name == "parts/" + regionId)
		{
			this.m_AtlasRegions[regionId] = region;
			return region;			
		}
	}
	return null;
}

CSalien.prototype._BuildSlotDictionary = function()
{
	this.m_Slots = new Object();
	this.m_AtlasRegions = new Object();
	this.m_Bones = new Object();

	// since these use lazy caching, no more work needed here
}

//////////////////////////////////////////////////////////
// Salien Info Box - a box showing your level and name
function CSalienInfoBox()
{
	PIXI.Container.call(this);	
	
	this.m_Graphics = new PIXI.Graphics();

	this.m_Width = 190;
	this.m_Height = 35;
	
	this.addChild(this.m_Graphics);	
	
	this.m_LevelText = new PIXI.Text();
	var levelStyle = jQuery.extend({}, k_TextStyleBold);	
	levelStyle.align = "right";
	levelStyle.fontSize = 18;
	this.m_LevelText.anchor.set( 1.0, 1.0 );
	this.m_LevelText.style = levelStyle;
	this.m_LevelText.tint = 0x000000;
	this.m_LevelText.x = this.m_Width;
	this.m_LevelText.y = 0;
	this.addChild(this.m_LevelText);
	
	this.m_NameText = new PIXI.Text();
	var nameStyle = jQuery.extend({}, k_TextStyleDefault);
	nameStyle.align = "left";
	nameStyle.fontSize = 18;
	this.m_NameText.anchor.set( 0.0, 0.5);
	this.m_NameText.style = nameStyle;
	this.m_NameText.tint = 0xa9a9a9;
	this.m_NameText.x = 8;
	this.m_NameText.y = this.m_Height / 2;
	this.addChild(this.m_NameText);
	
	this.m_XPLabelText = new PIXI.Text('Exp:'.toUpperCase());
	var smallLabelStyle = jQuery.extend({}, k_TextStyleBold);
	smallLabelStyle.align = "left";
	smallLabelStyle.fontSize = 12;
	this.m_XPLabelText.style = smallLabelStyle;
	this.m_XPLabelText.anchor.set( 0.0, 0.0);
	this.m_XPLabelText.x = 2;
	this.m_XPLabelText.y = this.m_Height;
	this.m_XPLabelText.tint = 0x000000;
	this.addChild(this.m_XPLabelText);
	
	this.m_XPValueText = new PIXI.Text();
	var xpStyle = jQuery.extend({}, k_TextStyleDefault);
	xpStyle.align = "left";
	xpStyle.fontSize = 12;
	this.m_XPValueText.style = xpStyle;
	this.m_XPValueText.anchor.set( 0.0, 0.0);
	this.m_XPValueText.x = this.m_XPLabelText.x + this.m_XPLabelText.width + 4;
	this.m_XPValueText.y = this.m_Height;
	this.m_XPValueText.tint = 0x000000;
	this.addChild(this.m_XPValueText);	
	
	this._Layout();
	
	this.SetName( gPlayerName );
	this.SetLevel( '' + gPlayerInfo.level );
	this.m_XPValueText.text = gPlayerInfo.score + " / " + gPlayerInfo.next_level_score;
}
CSalienInfoBox.prototype = Object.create(PIXI.Container.prototype);
CSalienInfoBox.prototype.constructor = CSalienInfoBox;

CSalienInfoBox.prototype.destroy = function()
{
	this.m_Graphics.destroy();
};

CSalienInfoBox.prototype.SetName = function(name)
{
	this.m_NameText.text = name;
	
	this._Layout();	
}

CSalienInfoBox.prototype.SetLevel = function(lvl)
{
	this.m_LevelText.text = 'Lv' + ": " + lvl;
}

CSalienInfoBox.prototype._Layout = function()
{
	let g = this.m_Graphics;

	this.m_Width = Math.max(180.0, 51 + this.m_NameText.x + this.m_NameText.width);
	
	this.m_LevelText.x = this.m_Width;
	
	g.beginFill(0x252525);
	g.drawRect(0, 0, this.m_Width, this.m_Height);
	g.endFill();
	
	// TODO: not sure what this box is supposed to be
	g.beginFill(0xffffff);
	g.drawRect(this.m_Width - 44.5, 1.5, 43, this.m_Height - 3);
	g.endFill();	
}

