
var g_elActiveSticker = false;
var g_elStickerContainer = null;
var g_rgDragState = false;
var g_nBaseScaleFactor = 1.0;

var CStickerManager = function( elContainer, bEditMode ){
	this.unWidthActual = 940;
	this.fScaleFactor =  this.unWidthActual / 2100; // Sprite scale
	this.elContainer = elContainer;
	this.rgOwnedStickers = [];
	this.bEditMode = bEditMode || false;
	this.rgNewStickersCount = {};

	if( this.bEditMode )
		this.ShowEditHandles();


	this.rgStickerDefinitions = g_rgStickerDefs;

	// Build some maps
	for( var key in this.rgStickerDefinitions )
	{
		this.rgStickerToIdMap.push( key );
		if( this.rgSceneToIdMap.indexOf( this.rgStickerDefinitions[key].texture ) === -1 )
			this.rgSceneToIdMap.push(this.rgStickerDefinitions[key].texture);

	}

	// Make horrible assumptions about filenames
	for( var i=0; i<this.rgSceneToIdMap.length; i++ )
	{

		CStickerManager.prototype.rgStickerTextures[this.rgSceneToIdMap[i]] = 'https://community.fastly.steamstatic.com/public/images/promo/summer2017/stickers/'+this.rgSceneToIdMap[i]+'_sprites.png?v=22';
		CStickerManager.prototype.rgBackgroundTextures[this.rgSceneToIdMap[i]] = 'https://community.fastly.steamstatic.com/public/images/promo/summer2017/stickers/'+this.rgSceneToIdMap[i]+'.jpg?v=22';
	}


	window.addEventListener('resize', this.HandleResize.bind(this));
	this.HandleResize();

}

CStickerManager.prototype.HandleResize = function() {
	// BUCKLE UP
	var fScaleFactor = this.elContainer.parentNode.clientWidth / this.unWidthActual;

	this.elContainer.style.transform = "scale( "+fScaleFactor+", "+fScaleFactor+" )";

	this.fLocalScale = fScaleFactor;

	this.elContainer.style.width = this.unWidthActual + "px";

	var rgBackgrounds = this.elContainer.getElementsByClassName('sticker_background');
	rgBackgrounds[0].style.width = this.unWidthActual + "px";

	// Now do the logo animation

	if ( document.getElementById('logo_anim') )
	{
		document.getElementById('logo_anim').style.transform = "scale( "+fScaleFactor+", "+fScaleFactor+" )";
	}
}

CStickerManager.prototype.rgStickerTextures = {

}

CStickerManager.prototype.rgBackgroundTextures = {

}

CStickerManager.prototype.rgStickerToIdMap = [

];

CStickerManager.prototype.rgSceneToIdMap = [

];

CStickerManager.prototype.rgSceneData = {

};

CStickerManager.prototype.rgStickerDefinitions = {
};


CStickerManager.prototype.RegisterSprites = function(strTexture, strMap, strPlacementMap)
{
	return;
	var rgLines = strMap.split("\n");
	for( var i=0; i<rgLines.length; i++ )
	{
		var rgv = rgLines[i].trim().split(',');
		if( rgv.length != 5 )
			continue;

		this.rgStickerDefinitions[rgv[0]] = {
			texture: strTexture,
			name: rgv[0],
			x: rgv[1],
			y: rgv[2],
			w: rgv[3],
			h: rgv[4]
		}
	}

	var rgLines = strPlacementMap.split("\n");
	for( var i=0; i<rgLines.length; i++ )
	{
		var rgv = rgLines[i].trim().split(',');
		if( rgv.length != 3 && rgv.length != 4 )
			continue;

		this.rgStickerDefinitions[rgv[0]].dx = rgv[1];
		this.rgStickerDefinitions[rgv[0]].dy = rgv[2];
		this.rgStickerDefinitions[rgv[0]].dz = rgv[3] || false;


	}
}

CStickerManager.prototype.AddSticker = function( nStickerId )
{
	// Do we have this sticker in the scene already??
	if( this.BSceneHasSticker( nStickerId ) )
		return;

	var rgData = this.GetSceneData();
	if( rgData.length > 50 )
	{
		ShowAlertDialog("Too many stickers!", "Whoa there! You're trying to put more than 50 stickers on this page. If you want to add more, you'll need to peel a few off first.");
		return;
	}

	var sticker = this.rgStickerDefinitions[nStickerId];
	if( sticker.texture == this.strScene )
	{
		this.CreateSticker( nStickerId,
			sticker.dx * this.fScaleFactor,
			sticker.dy * this.fScaleFactor,
			1.0,
			1.0,
			0,
			sticker.z
		);
	}
	else
		this.CreateSticker( nStickerId, 10, 10, 1.0, 1.0, 0 );

	if( !this.BSceneUnlocked(this.strScene) && this.BSceneCanBeUnlocked( this.strScene ) )
	{
		this.UnlockScene( this.strScene );
	}
}

//CStickerManager.prototype.Set

CStickerManager.prototype.PopulateStickerList = function()
{
	// Sticker list
	var unMaxWidth = 140; // @todo don't hard code this
	var unMaxHeight = 100; // @todo don't hard code this either

	var elTarget = document.getElementById('sticker_selector');

	if( !elTarget )
		return;
	while( elTarget.firstChild )
		elTarget.removeChild( elTarget.firstChild );

	// Do we have a sticker pack? If so show that first
	if( this.unStickerPacks > 0 )
	{
		var elPack = document.createElement('div');
		elPack.classList.add('sticker_item');
		var elImage = document.createElement('img');
		elImage.src = "https://community.fastly.steamstatic.com/public/images/promo/summer2017/stickers_group.png";

		elPack.addEventListener('click', this.OpenPack.bind(this));

		elPack.appendChild(elImage);
		elTarget.appendChild(elPack);
	}


	for(var key in this.rgStickerDefinitions )
	{


		var stickerDef = this.rgStickerDefinitions[key];


		if( !this.BSceneUnlocked( this.strScene ) && stickerDef.texture != this.strScene )
			continue;

		var elSticker = this.CreateScaledSticker( key, unMaxWidth, unMaxHeight, !this.BOwnsSticker( key ) );



		if( this.BOwnsSticker( key ) )
			elSticker.addEventListener('click', this.AddSticker.bind(this, key ) );

		elTarget.appendChild(elSticker);
	}

}

CStickerManager.prototype.CreateScaledSticker = function( key, unMaxWidth, unMaxHeight, bFaded )
{
	var elImage = document.createElement('div');
	var stickerDef = this.rgStickerDefinitions[key];
	var texture = this.rgStickerTextures[ stickerDef.texture ];


	var elSticker = document.createElement('div');
	elSticker.classList.add('sticker_item');

	elImage.style.width = stickerDef.w + "px";
	elImage.style.height = stickerDef.h + "px";

	if( !bFaded  )
	{
		elImage.style.background = "url('"+texture+"') no-repeat -"+stickerDef.x+"px -"+stickerDef.y+"px";
	} else {
		elImage.style.webkitMask = "url('"+texture+"') no-repeat -"+stickerDef.x+"px -"+stickerDef.y+"px";// no-repeat -"+stickerDef.x+"px -"+stickerDef.y+"px";
		elImage.style.mask = "url('"+texture+"') no-repeat -"+stickerDef.x+"px -"+stickerDef.y+"px";// no-repeat -"+stickerDef.x+"px -"+stickerDef.y+"px";

		elImage.style.backgroundColor = '#9E9E9E';
	}



	var fScale = 1.0;

	if( stickerDef.w > unMaxWidth )
		fScale = unMaxWidth / stickerDef.w;

	if( stickerDef.h > unMaxHeight && unMaxHeight / stickerDef.h < fScale )
		fScale = unMaxHeight / stickerDef.h;


	elImage.style.transform = "scale( "+fScale+", "+fScale+" )";

	elSticker.appendChild( elImage );

	if( this.BOwnsSticker( key ) )
	{
		elSticker.addEventListener ( 'click', this.AddSticker.bind ( this, key ) );
		elSticker.draggable = true;
		elSticker.addEventListener ( 'dragstart', this.DragStart.bind ( this, key ) );
	}

	return elSticker;
}

CStickerManager.prototype.DragStart = function( key, event )
{

	event.dataTransfer.setData("key", key);
	event.dataTransfer.dropEffect = "copy";
	console.log(event);

}
CStickerManager.prototype.PopulateSelectors = function( )
{

	// Scene list
	var elTarget = document.getElementById('scene_selector');
	if( !elTarget )
		return;

	while( elTarget.firstChild )
		elTarget.removeChild( elTarget.firstChild );

	for( var key in this.rgBackgroundTextures )
	{

		var elContainer = document.createElement('div');
		var elImage = document.createElement('img');
		var texture = this.rgBackgroundTextures[ key ];

		elImage.src = texture;
		elContainer.classList.add('item');
		elContainer.id = key + "_select_icon";

		var nSceneId = this.rgSceneToIdMap.indexOf(key);

		elImage.addEventListener('click', this.SetScene.bind(this, nSceneId ) );

		// Text counts
		var rgCounts = this.GetStickerCounts( key );
		var elText = document.createElement('div');
		elText.textContent = "%1$s of %2$s stickers".replace(/%1\$s/,rgCounts[0]).replace(/%2\$s/,rgCounts[1])

		elContainer.appendChild(elImage);
		elContainer.appendChild(elText);


		// New counts
		var nNewStickers = this.rgNewStickersCount[key];
		if( nNewStickers )
		{
			var elNew = document.createElement('div');
			elNew.classList.add('new');
			elNew.textContent = nNewStickers;

			elContainer.appendChild(elNew);
		}

		if( this.rgOwnership.scenes[nSceneId] )
		{
			var elNew = document.createElement('div');
			elNew.classList.add('new');
			elNew.classList.add('unlocked');
			elNew.textContent = '✔';

			elContainer.appendChild(elNew);
		}


		if( nNewStickers )
			elTarget.insertBefore(elContainer, elTarget.firstChild);
		else
			elTarget.appendChild(elContainer);
	}

}

CStickerManager.prototype.GetStickerCounts = function( strScene )
{
	var unStickersTotal = 0;
	var unStickersOwned= 0;

	for( var key in this.rgStickerDefinitions )
	{
		var sticker = this.rgStickerDefinitions[ key ];
		if ( sticker.texture == strScene )
		{
			unStickersTotal++;
			if( this.BOwnsSticker( key ) )
				unStickersOwned++;
		}
	}
	return [ unStickersOwned, unStickersTotal ];
}

CStickerManager.prototype.BOwnsSticker = function( strStickerID )
{

	var nStickerId = this.rgStickerToIdMap.indexOf( strStickerID );
	return this.rgOwnership.stickers[ nStickerId ];
};

CStickerManager.prototype.BSceneUnlocked = function( strScene )
{
	var nSceneId = this.rgSceneToIdMap.indexOf(strScene);
	return this.rgOwnership.scenes[nSceneId];
}

CStickerManager.prototype.BSceneCanBeUnlocked = function( strScene )
{
	var rgSceneData = this.GetSceneData();

	for( var key in this.rgStickerDefinitions )
	{
		var sticker = this.rgStickerDefinitions[ key ];

		if ( sticker.texture == strScene )
		{
			var bFound = false;
			for( var i=0; i<rgSceneData.length; i++ )
			{
				if( rgSceneData[i].id == key )
				{
					bFound = true;
					break;
				}
			}
			if(!bFound)
				return false;
		}
	}
	return true;
}

CStickerManager.prototype.ResetScene = function()
{
	var rgStickers = this.elContainer.getElementsByClassName('sticker');
	for( var i=rgStickers.length - 1; i >= 0; i-- )
	{
		this.elContainer.removeChild( rgStickers[i] );
	}
}

CStickerManager.prototype.GetDefaultScene = function( strScene )
{
	var rgScene = [];

	for( var key in this.rgStickerDefinitions )
	{
		var sticker = this.rgStickerDefinitions[key];
		if( sticker.texture == strScene )
		{
			rgScene.push({
				id: key,
				x: sticker.dx * this.fScaleFactor,
				y: sticker.dy * this.fScaleFactor,
				sx: 1.0,
				sy: 1.0,
				r: 0,
				z: sticker.z
			});
		}
	}

	return rgScene;
}

CStickerManager.prototype.PreloadScene = function()
{
	// pass
}

CStickerManager.prototype.CreateSticker = function(id, x, y, sx, sy, r, z)
{
	var elSticker = document.createElement('div');
	var stickerDef = this.rgStickerDefinitions[id];
	var texture = this.rgStickerTextures[ stickerDef.texture ];

	elSticker.sticker = {
		id: id,
		x: x,
		y: y,
		sx: sx,
		sy: sy,
		r: r,
		z: z
	};

	elSticker.style.width = stickerDef.w + "px";
	elSticker.style.height = stickerDef.h + "px";
	elSticker.style.background = "url('"+texture+"') no-repeat -"+stickerDef.x+"px -"+stickerDef.y+"px";

	this.elContainer.appendChild(elSticker);

	//elSticker.addEventListener('click',  );
	var _this = this;
	elSticker.addEventListener('mousedown', function( event ){
		_this.SetStickerActive( elSticker );
		_this.StickerDragStart('x', 'y', false, event );
	});

	elSticker.addEventListener('touchstart', function( event ){
		_this.SetStickerActive( elSticker );
		_this.StickerDragStart('x', 'y', false, event );
	});

	this.UpdateStickerState( elSticker );

	elSticker.classList.add("sticker");




}

CStickerManager.prototype.UpdateStickerState = function( elSticker )
{
	elSticker.style.transform = "rotate("+elSticker.sticker.r+"deg) scale("+(elSticker.sticker.sx*this.fScaleFactor)+", "+(elSticker.sticker.sy*this.fScaleFactor)+")";

	var rect = elSticker.getBoundingClientRect();

	elSticker.style.left = elSticker.sticker.x+"px";
	elSticker.style.top = elSticker.sticker.y+"px";

	if( elSticker.sticker.z )
		elSticker.style.zIndex = elSticker.sticker.z;


}

CStickerManager.prototype.SetScene = function( nSceneId )
{

	// Save off old scene if we were on one
	if( this.strScene )
	{

		var nOldSceneId = this.rgSceneToIdMap.indexOf( this.strScene );
		this.rgSceneData[nOldSceneId] = this.GetSceneData();
	}

	this.strScene = this.rgSceneToIdMap[ nSceneId ];

	var rgBackgrounds = this.elContainer.getElementsByClassName('sticker_background');
	rgBackgrounds[0].src =this.rgBackgroundTextures[this.strScene];

	this.Render( this.rgSceneData[ nSceneId ] );

	// Update handles
	var rgMatches = document.querySelectorAll('.background_selection_container .item');

	for( var i=0; i < rgMatches.length; i++)
	{
		rgMatches[i].classList.remove('selected');
	}

	var elTarget  = document.getElementById(this.strScene  + "_select_icon");
	if( elTarget )
		elTarget.classList.add('selected');

	this.PopulateStickerList();

	if( this.bEditMode )
	{
		if ( !this.BSceneUnlocked ( this.strScene ) )
		{
			document.getElementById ( 'r_handle' ).style.display = "none";
			document.getElementById ( 's_handle' ).style.display = "none";
			document.getElementById ( 'feature_on_profile' ).style.display = "none";

		}
		else
		{
			document.getElementById ( 'r_handle' ).style.display = "block";
			document.getElementById ( 's_handle' ).style.display = "block";
			document.getElementById ( 'feature_on_profile' ).style.display = "inline-block";
		}
	}

};

CStickerManager.prototype.Render = function( rgSceneData )
{
	this.ResetScene();


	for( var i=0; i<rgSceneData.length; i++)
	{
		var sticker = rgSceneData[i];
		this.CreateSticker( sticker.id, sticker.x, sticker.y, sticker.sx, sticker.sy, sticker.r, sticker.z );
	}

	this.DeactivateSticker();
}

CStickerManager.prototype.MoveDot = function( dot, x, y )
{
	var dot = document.getElementById(dot);
	dot.style.top = y + "px";
	dot.style.left = x + "px";
}


CStickerManager.prototype.SetStickerActive = function( sticker )
{

	this.DeactivateSticker();

	this.elActiveSticker = sticker;
	sticker.classList.add('active');
	var elEditBox = document.getElementById('edit_box');
	elEditBox.classList.add('active');

	this.UpdateStickerHandles();

}

// Deselect any active sticker
CStickerManager.prototype.DeactivateSticker = function( )
{
	// Deactivate other sticker
	if( this.elActiveSticker )
	{
		this.elActiveSticker.classList.remove('active');
		var elEditBox = document.getElementById('edit_box');
		elEditBox.classList.remove('active');
	}
}

CStickerManager.prototype.UpdateStickerHandles = function()
{
	var elEditBox = document.getElementById('edit_box'); // @todo chrisk switch to class of elContainer if we ever need to have two editable boxes on one page

	var rect = this.elActiveSticker.getBoundingClientRect();
	var parentRect = this.elContainer.getBoundingClientRect();


	elEditBox.style.left =  1/this.fLocalScale * ( rect.left -  parentRect.left )  + "px";
	elEditBox.style.top = 1/this.fLocalScale * ( rect.top -  parentRect.top ) + "px";
	elEditBox.style.width = 1/this.fLocalScale * rect.width+ "px";
	elEditBox.style.height = 1/this.fLocalScale * rect.height+ "px";
}


CStickerManager.prototype.ShowEditHandles = function()
{

	document.getElementById('d_handle').addEventListener('mouseup', this.StickerDelete.bind(this ) );
	document.getElementById('s_handle').addEventListener('mousedown', this.StickerDragStart.bind(this, 'sx', 'sy', false ) );
	document.getElementById('r_handle').addEventListener('mousedown', this.StickerDragStart.bind(this, 'r', 'r', false) );

	this.elContainer.addEventListener('mousemove', this.StickerDragMove.bind(this) );
	this.elContainer.addEventListener('mouseup', this.StickerDragStop.bind(this) );

	// phones
	document.getElementById('d_handle').addEventListener('touchend', this.StickerDelete.bind(this  ) );
	document.getElementById('s_handle').addEventListener('touchstart', this.StickerDragStart.bind(this, 'sx', 'sy', false ) );
	document.getElementById('r_handle').addEventListener('touchstart', this.StickerDragStart.bind(this, 'r', 'r', false) );

	this.elContainer.addEventListener('touchmove', this.StickerDragMove.bind(this) );

	this.elContainer.addEventListener('touchend', this.StickerDragStop.bind(this) );
	this.elContainer.addEventListener('touchcancel', this.StickerDragStop.bind(this) );

	this.elContainer.addEventListener('drop', this.StickerDragDrop.bind(this) );
	this.elContainer.addEventListener('dragover', this.StickerDrag.bind(this) );

}

CStickerManager.prototype.StickerDragDrop = function( event )
{
	if( event.dataTransfer.getData('key') )
		this.AddSticker( event.dataTransfer.getData('key') );


}

CStickerManager.prototype.StickerDrag = function( event )
{

	event.preventDefault();
}

CStickerManager.prototype.StickerDelete = function(  )
{
	this.elActiveSticker.parentNode.removeChild(this.elActiveSticker);
	this.DeactivateSticker();
}

CStickerManager.prototype.StickerDragStart = function( propertyX, propertyY, propertyR, event )
{
	event.target.parentNode.classList.add('active');

	this.rgDragState = {
		x: event.screenX || event.touches[0].screenX,
		y: event.screenY || event.touches[0].screenY,
		property_x: propertyX,
		property_y: propertyY,
		property_r: propertyR
	};

	event.preventDefault();
};

CStickerManager.prototype.StickerDragStop = function( )
{
	this.rgDragState = false;
	event.preventDefault();

	var rgElements = document.querySelectorAll('#edit_box > div');

	for( var i=0; i<rgElements.length; i++)
		rgElements[i].classList.remove('active');


}



CStickerManager.prototype.StickerDragMove = function( event )
{
	//console.log(event);
	if ( !this.rgDragState )
		return;

	if( !this.BSceneUnlocked( this.strScene ) )
		return;
	var nTouchX = event.screenX || event.touches[0].screenX;
	var nTouchY = event.screenY || event.touches[0].screenY;

	var nTouchPageX = event.pageX || event.touches[0].pageX;
	var nTouchPageY = event.pageY || event.touches[0].pageY;

	if( this.rgDragState.property_x )
	{
		var xdelta  = nTouchX - this.rgDragState.x;

		if( this.rgDragState.property_x == "sx")
		{

			this.elActiveSticker.sticker.sx += xdelta / this.rgStickerDefinitions[ this.elActiveSticker.sticker.id ].w;

		}
		else
		{
			this.elActiveSticker.sticker[this.rgDragState.property_x] += xdelta;
		}


	}

	if( this.rgDragState.property_y )
	{
		var ydelta  = nTouchY - this.rgDragState.y;

		if( this.rgDragState.property_y == "sy")
		{
			this.elActiveSticker.sticker.sy += ydelta / this.rgStickerDefinitions[ this.elActiveSticker.sticker.id ].h;

		}
		else
			this.elActiveSticker.sticker[this.rgDragState.property_y] += ydelta;

	}

	// Balance sx/sy
	this.elActiveSticker.sticker.sx = this.elActiveSticker.sticker.sy;


	if( this.rgDragState.property_r )
	{


		var rect = this.elActiveSticker.getBoundingClientRect();
		var parentRect = this.elActiveSticker.getBoundingClientRect();

		var x = rect.left - parentRect.left + rect.width / 2;
		var y = rect.top - parentRect.top + rect.height / 2;


		var mousex = nTouchPageX - parentRect.left;
		var mousey = nTouchPageY - parentRect.top ;



		var angle = Math.atan2( mousey - y, mousex - x ) * 180 / Math.PI;


		this.elActiveSticker.sticker[this.rgDragState.property_r] = angle;

	}


	this.rgDragState.x = nTouchX;
	this.rgDragState.y = nTouchY;

	this.UpdateStickerState( this.elActiveSticker );
	this.UpdateStickerHandles();

	event.preventDefault();

}

CStickerManager.prototype.SetOwnedStickers = function( rgOwnership )
{
	this.rgOwnership = rgOwnership;
	this.unStickerPacks = rgOwnership.stickerpacks;



	this.PopulateSelectors();
	this.PopulateStickerList();
};

CStickerManager.prototype.SetSceneData = function( rgStuff )
{
	for ( var i = 0; i < this.rgSceneToIdMap.length; i++ )
	{
		this.rgSceneData[i] = rgStuff[i] || [];
	}

}

CStickerManager.prototype.BSceneHasSticker = function( strStickerId )
{
	var rgData = this.GetSceneData();
	for ( var i=0; i<rgData.length; i++ )
		if( rgData[i].id == strStickerId )
			return true;

	return false;
}


CStickerManager.prototype.GetSceneData = function()
{
	// pass
	var rgScene = [];
	var rgStickers = document.getElementsByClassName('sticker');

	if( rgStickers )
	{

		for ( var i = 0; i < rgStickers.length; i++ )
		{
			rgScene.push ( rgStickers[ i ].sticker );
		}
	}

	return rgScene;
};

CStickerManager.prototype.SaveScene = function( bFeature, bSilent )
{
	var rgRequest = {
		scene_data: this.GetSceneData(),
		sceneid: this.rgSceneToIdMap.indexOf( this.strScene ),
		sessionid: g_sessionID,
		active: bFeature ? 1 : 0
	};

	$J.ajax({
		url: g_strProfileURL + '/stickerssave/',
		data: rgRequest,
		method: 'POST'

	}).done(function() {

		if( !bSilent )
			ShowAlertDialog( "Changes Saved", "Your sticker progress has been saved." )

		console.log("SAVED");
	});
};

CStickerManager.prototype.UnlockScene = function(  )
{
	this.SaveScene(false, true);

	var nSceneId = this.rgSceneToIdMap.indexOf(this.strScene);

	var _this = this;

	$J.ajax({
		url: g_strProfileURL + '/stickerscomplete/',
		method: 'POST',
		data: {
			scene: nSceneId
		}


	}).done(function( data )
	{
		if( data.success == 1 )
		{
			ShowAlertDialog( "Scene unlocked!", "You can now move, rotate, and scale stickers on this scene, as well as add stickers from other scenes and feature it on your profile!" );
			_this.rgOwnership.scenes[ nSceneId ] = 1;
			_this.PopulateStickerList();
		}
	});
}


CStickerManager.prototype.OpenPack = function()
{
	var _this = this;

	$J.ajax({
		url: g_strProfileURL + '/stickersopen/',
		method: 'POST'

	}).done(function( data ) {

		if( data && data.success == 1 && data.stickers.length > 0 )
		{
			var elContainer = document.createElement ( 'div' );
			elContainer.classList.add ( 'openpack_container' );

			var elDesc = document.createElement ( 'p' );
			elDesc.textContent = "%1$s new stickers have been added to your collection.".
			replace ( /%1\$s/, data.stickers.length );

			elContainer.appendChild ( elDesc );


			var elStickerContainer = document.createElement ( 'div' );
			elStickerContainer.classList.add ( 'sticker_container' );


			while ( data.stickers.length )
			{

				var nStickerId = data.stickers.pop ();

				var elSticker = _this.CreateScaledSticker ( _this.rgStickerToIdMap[ nStickerId ], 140, 100, false );
				elStickerContainer.appendChild ( elSticker );
				_this.rgOwnership.stickers[ nStickerId ] = 1;

				var strStickerKey = _this.rgStickerToIdMap[ nStickerId ];
				var rgStickerDef = _this.rgStickerDefinitions[ strStickerKey ];
				var strScene = rgStickerDef.texture;

				if( _this.rgNewStickersCount[strScene] )
					_this.rgNewStickersCount[strScene]++;
				else
					_this.rgNewStickersCount[strScene] = 1;


			}

			elContainer.appendChild ( elStickerContainer );

			// Did we unlock any scenes?
			var strUnlockTexture = false;
			for ( var i = 0; i < data.stickers.length; i++ )
			{
				var stickerDef = _this.rgStickerDefinitions[ _this.rgStickerToIdMap[ i ] ];
				var strScene = stickerDef.texture;
				if ( _this.BSceneUnlocked ( strScene ) )
				{

					strUnlockTexture = _this.rgBackgroundTextures[ strScene ];
				}

			}

			if ( strUnlockTexture )
			{
				var elUnlockContainer = document.createElement ( 'div' );
				elUnlockContainer.classList.add ( 'unlock_container' );

				var elUnlockTitle = document.createElement ( 'h2' );
				elUnlockTitle.textContent = "Scene unlocked!";

				var elUnlockSceneImg = document.createElement ( 'img' );
				elUnlockSceneImg.src = strUnlockTexture;

				var elUnlockDesc = document.createElement ( 'p' );
				elUnlockDesc.textContent = "You can now move, rotate, and scale stickers on this scene, as well as add stickers from other scenes and feature it on your profile!";

				elUnlockContainer.appendChild ( elUnlockSceneImg );
				elUnlockContainer.appendChild ( elUnlockTitle );
				elUnlockContainer.appendChild ( elUnlockDesc );
				elContainer.appendChild ( elUnlockContainer );
			}

			_this.unStickerPacks = data.stickerpacks;

			var Modal = ShowAlertDialog ( "New stickers have been added to your collection!", elContainer );
		}
		_this.PopulateStickerList();
		_this.PopulateSelectors();

		var elTarget  = document.getElementById(_this.strScene  + "_select_icon");
		if( elTarget )
			elTarget.classList.add('selected');




	});
}

// =====================================================================================================================

var CTaskManager = function(){}

CTaskManager.prototype.rgTaskList = [
	//k_ESummerSaleTaskUseDiscoveryQueue = 0;
	{
		name: "Explore your Discovery Queue",
		desc: "Visit your <a href=\"https:\/\/store.steampowered.com\/explore\">personal Discovery Queue<\/a> and click through to the end. You can complete this quest once per day."	},
	//k_ESummerSaleTaskPlayAGame = 1;
	{
		name: "Play a game from your library",
		desc: "Just play any game from your Steam library! Something new, or something from your backlog..."	},
	//k_ESummerSaleTaskViewFriendActivity = 2;
	{
		name: "View your Friend Activity page",
		desc: "See what's going on with your friends on Steam at your <a href=\"https:\/\/steamcommunity.com\/my\/home\">Friend Activity<\/a> page."	},
	//k_ESummerSaleTaskAddToWishlist = 3;
	{
		name: "Add to your wishlist",
		desc: "Find a game you are interested in, and add it to your <a href=\"https:\/\/steamcommunity.com\/my\/wishlist\">Wishlist<\/a>."	},
	//k_ESummerSaleTaskReviewStorePreferences = 4;
	{
		name: "Review your Preferences",
		desc: "You can help the Steam store show you the best stuff by making sure your <a href=\"https:\/\/store.steampowered.com\/account\/preferences\/\">Store Preferences<\/a> match your interests."	},
	//k_ESummerSaleTaskEarnAchievement = 5;
	{
		name: "Earn an Achievement",
		desc: "Play any Steam game in your library, and earn an Achievement. You can check your Achievement progress for any game you own <a href=\"https:\/\/steamcommunity.com\/my\/games\">on your Games page<\/a>."	},
	//k_ESummerSaleTaskVisitBroadcastPage = 6;
	{
		name: "Visit the Broadcasts page",
		desc: "Take a look at the <a href=\"https:\/\/steamcommunity.com?subsection=broadcasts\">Broadcasts<\/a> currently running on the Community."	},
	//k_ESummerSaleTaskMarkReviewHelpful = 7;
	{
		name: "Mark a Review as Helpful ... or not",
		desc: "Did a Steam community review help you make a decision about a game? Mark any review as Helpful, Not Helpful, or Funny."	},
	//k_ESummerSaleTaskFollowCurator = 8;
	{
		name: "Follow a Curator",
		desc: "Look through the <a href=\"https:\/\/store.steampowered.com\/curators\">Steam Curators<\/a> and follow someone that will help you find the best games on Steam."	},
	//k_ESummerSaleTaskViewAProfile = 9;
	{
		name: "View a Profile",
		desc: "Take a look at what <a href=\"https:\/\/steamcommunity.com\/my\/friends\">your friends<\/a> have showcased on their Steam Community Profile."	},
	//k_ESummerSaleTaskViewATagPage = 10;
	{
		name: "Explore popular tags",
		desc: "Choose something interesting from <a href=\"https:\/\/store.steampowered.com\/tag\/browse\">the recommended tags for you<\/a>. Try a few!"	},
	//k_ESummerSaleTaskMarkNotInterested = 11;
	{
		name: "Mark something Not Interested",
		desc: "Somewhere on the store, you'll find a game that isn't for you. Click the Not Interested button - don't worry, it only affects that game."	},
	//k_ESummerSaleTaskViewVideosPage = 12;
	{
		name: "Browse the Videos on Steam",
		desc: "Visit the <a href=\"https:\/\/store.steampowered.com\/videos\">Video Hub<\/a> on Steam."	},
	//k_ESummerSaleTaskUploadAScreenshot = 13;
	{
		name: "Visit your screenshot library",
		desc: "You can take a screenshot in-game (default hotkey is F12) and upload it to Steam; go <a href=\"https:\/\/steamcommunity.com\/my\/screenshots\">visit your uploaded Screenshots<\/a> on the Steam Community."	},
	//k_ESummerSaleTaskPersonalizeProfile = 14;
	{
		name: "Personalize your Steam Community Profile",
		desc: "There are a lot of ways you can customize <a href=\"https:\/\/steamcommunity.com\/my\/profile\">your profile<\/a> - click the attractive Edit Profile button, and personalize!"	},
	//k_ESummerSaleTaskPersonalizeDiscoveryQueue = 15;
	{
		name: "Customize your Discovery Queue",
		desc: "Make sure your personalized Discovery Queue is personal \u2013 your <a href=\"https:\/\/store.steampowered.com\/account\/preferences?discoveryqueue=1\">Discovery Queue settings<\/a> should match what you want to see on Steam."	},
];

CTaskManager.prototype.RenderTaskList = function( rgProgress )
{
	// First pass, find tasks we need to do still

	var elTaskContainer = document.getElementById('tasks_remaining_container');
	var elTaskCompleteContainer = document.getElementById('tasks_completed_container');

	var rgTaskIdsShown = {};

	var nTasksToDo = 0;

	for( var i in rgProgress.tasks_remaining )
	{
		if( rgProgress.tasks_remaining[i] > 0 )
		{
			var rgTaskInfo = this.rgTaskList[i];
			rgTaskIdsShown[ i ] = 1;

			//if( !rgTaskInfo ) // ???
			//	continue;

			var elTask = document.createElement('div');
			elTask.classList.add('task');

			var elTaskName = document.createElement('h2');
			elTaskName.innerHTML = rgTaskInfo.name;

			var elTaskDesc = document.createElement('p');
			elTaskDesc.innerHTML = rgTaskInfo.desc;

			elTask.appendChild( elTaskName );
			elTask.appendChild( elTaskDesc );

			elTaskContainer.appendChild( elTask );

			nTasksToDo++;

		}
	}

	if( nTasksToDo == 0 )
	{
		var elT = document.getElementById('tasks_none');
		if( elT )
			elT.style.display = 'inline';
	} else if( nTasksToDo == 1 )
	{
		var elT = document.getElementById('tasks_one');
		if( elT )
			elT.style.display = 'inline';
	} else
	{
		var elT = document.getElementById('tasks_many');
		if( elT )
		{
			elT.style.display = 'inline';
			var elTC = document.getElementById('task_count');
			elTC.textContent = nTasksToDo;
		}
	}

	for(var i in rgProgress.tasks_limits )
	{
		if( rgProgress.tasks_limits[i] > 0 && !rgTaskIdsShown[i] )
		{
			var rgTaskInfo = this.rgTaskList[i];

			if( !rgTaskInfo ) // ???
				continue;

			var elTask = document.createElement('div');
			elTask.classList.add('task');

			elTask.innerHTML = '✔ ' + rgTaskInfo.name;



			elTaskCompleteContainer.appendChild( elTask );

		}
	}
}

