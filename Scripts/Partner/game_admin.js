
//-----------------------------------------------------------------------------
// Checks if browser supports FormData
//-----------------------------------------------------------------------------
function BBrowserSupportsFormData()
{
	return (typeof FormData != 'undefined');
}

//-----------------------------------------------------------------------------
// Returns javascript function of supported languages
//-----------------------------------------------------------------------------
function GetSupportedLanguages()
{
	var languages = {
			'english': 'English',
				'german': 'German',
				'french': 'French',
				'italian': 'Italian',
				'koreana': 'Korean',
				'spanish': 'Spanish',
				'schinese': 'Simplified Chinese',
				'tchinese': 'Traditional Chinese',
				'russian': 'Russian',
				'thai': 'Thai',
				'japanese': 'Japanese',
				'portuguese': 'Portuguese',
				'polish': 'Polish',
				'danish': 'Danish',
				'dutch': 'Dutch',
				'finnish': 'Finnish',
				'norwegian': 'Norwegian',
				'swedish': 'Swedish',
				'hungarian': 'Hungarian',
				'czech': 'Czech',
				'romanian': 'Romanian',
				'turkish': 'Turkish',
				'arabic': 'Arabic',
				'brazilian': 'Portuguese-Brazil',
				'bulgarian': 'Bulgarian',
				'greek': 'Greek',
				'ukrainian': 'Ukrainian',
			};
	return languages;
}


//-----------------------------------------------------------------------------
// Drag related code
//-----------------------------------------------------------------------------
var g_RegisteredSortables = [];
var g_CancelDrag = false;

// Registers for listening to the escape key and canceling drag
function RegisterCancelDrag()
{
	// Handle the user pressing 'escape' to cancel a drag
	jQuery('body').keyup( function(event) {
		if ( event.which == 27 ) {
			event.preventDefault();

			// Cancelling will call the "Update" function, so we need to give it some context about this operation
			g_CancelDrag = true;
			for ( var i = 0; i < g_RegisteredSortables.length; i++ ) {
				jQuery(g_RegisteredSortables[i]).sortable("cancel");
			}
			g_CancelDrag = false;
		}
	});
}

// Adds a draggable group (used for DLC, etc.)
function addDraggableGroup( container, dataPath )
{
	// Setup the sortable list
	jQuery(container).sortable({
		items: ".sortable",
		handle: ".titleDragHandle",
		placeholder: "dragAndDropHighlight",
		cursor: "move",
		forcePlaceholderSize: true,
		forceHelperSize: true,
		opacity: 0.5,
		tolerance: "pointer",
		containment: "parent",
		start: function( event, ui ) {
			// Record where we started from
			jQuery(ui.item).data("startIndex", jQuery(ui.item).index() );
		},
		update: function( event, ui ) {
			if ( g_CancelDrag ) {
				return;
			}
			// Now, move the item to the new position
			var oldIndex = jQuery(ui.item).data("startIndex");
			var newIndex = jQuery(ui.item).index();
			ArraySwap( dataPath, oldIndex, newIndex );
		}
	});

	g_RegisteredSortables.push( jQuery(container) );
}

// Adds a draggable image group
function AddDraggableImageGroup( itemID, container, processing, dataPath )
{
	// Setup the sortable list
	jQuery(container).sortable({
		items: ".sortable",
		handle: ".image_drag_handle",
		cursor: "move",
		forcePlaceholderSize: true,
		forceHelperSize: true,
		opacity: 0.5,
		tolerance: "pointer",
		containment: "parent",
		start: function( event, ui ) {
			// Record where we started from
			jQuery(ui.item).data("startIndex", jQuery(ui.item).index() );
		},
		update: function( event, ui ) {
			if ( g_CancelDrag )
				return;

			// Now, move the item to the new position
			var oldIndex = jQuery(ui.item).data("startIndex");
			var newIndex = jQuery(ui.item).index();

			processing.addClass( 'screenshotprocessing' );
			var onComplete = function( bSuccess )
			{
				if ( !bSuccess )
					alert( 'Failed to update' );

				processing.removeClass( 'screenshotprocessing' );
			};

			ArraySwapAjax( 'https://partner.steamgames.com/admin/game/quickupdateajax/' + itemID, dataPath, oldIndex, newIndex, onComplete );
		}
	});

	g_RegisteredSortables.push( jQuery(container) );
}


//-----------------------------------------------------------------------------
// Screenshots
//-----------------------------------------------------------------------------

// delete specified screenshot
function DeleteScreenshot( itemID, sortableID, processingID )
{
	var onComplete = function( bSuccess )
	{
		if ( !bSuccess )
		{
			alert( 'Failed to update' );
		}
		else
		{
			var sortable = jQuery( sortableID );
			var sortableParent = sortable.parent();
			sortable.remove();
			var sortableChildren = sortableParent.find( '.screenshot_actual' );
			if ( sortableChildren.length == 0 )
				sortableParent.text( 'No screenshots have been uploaded' );
		}

		jQuery( processingID ).removeClass( 'screenshotprocessing' );
	};

	var key = 'app[assets][screenshots][' + jQuery( sortableID ).index() + ']';
	var params = {};
	params[key] = '';

	jQuery( processingID ).addClass( 'screenshotprocessing' );
	SubmitQuickMessageUpdateAjax( 'https://partner.steamgames.com/admin/game/quickupdateajax/' + itemID, params, onComplete );
}

// known screenshots
var g_ImageTypes = null;
function InitImageTypes( type )
{
	var strHeaderPath = ( type == 'Package' || type == 'Bundle' ) ? 'header_image_ratio' : 'header_image';
	g_ImageTypes =
	[
		{ name: 'Header Image', width: 460, height: 215, path: strHeaderPath + '|header|assets|' + strHeaderPath, localized: true, overrideable: true },
		{ name: 'Small Capsule', width: 231, height: 87, path: 'small_capsule|capsule|assets|small_capsule|image', localized: true, overrideable: true },
		{ name: 'Large Capsule', width: 467, height: 181, path: 'large_capsule|capsule_467x181|assets|large_capsule|image', localized: true, overrideable: true },
		{ name: 'Main Capsule', width: 616, height: 353, path: 'main_capsule|capsule_616x353|assets|main_capsule|image', localized: true, overrideable: true },
		{ name: 'Promo Capsule', width: 220, height: 180, path: 'promo_capsule|capsule_220x180|assets|promo_capsule|image', localized: true },
		{ name: 'Hi Res Capsule', width: 940, height: 400, path: 'hi_res_capsule|capsule_940x400|assets|hi_res_capsule|image', localized: true },
		{ name: 'Hi Res Alt Capsule', width: 799, height: 340, path: 'hi_res_alt_capsule|capsule_799x340|assets|hi_res_alt_capsule|image', localized: true },
		{ name: 'Package Header', width: 707, height: 232, path: 'header_image|header|assets|header_image', localized: true },
		{ name: '(deprecated) Broadcast Left Side Panel', width: 160, height: 350, path: 'broadcast|broadcast_left_panel|assets|broadcast_left_panel|image', localized: false },
		{ name: '(deprecated) Broadcast Right Side Panel', width: 160, height: 350, path: 'broadcast|broadcast_right_panel|assets|broadcast_right_panel|image', localized: false },
		{ name: 'Broadcast Left Side Panel', width: 155, height: 337, path: 'broadcast|broadcast_left_panel|assets|broadcast_left_panel|image', localized: false },
		{ name: 'Broadcast Right Side Panel', width: 155, height: 337, path: 'broadcast|broadcast_right_panel|assets|broadcast_right_panel|image', localized: false },

		{ name: 'Background', width: 1438, height: 0, path: 'asset|page_bg.jpg|assets|page_background', localized: false },
		{ name: 'Screenshot', width: 0, height: 0, path: 'screenshot|assets|screenshots|', localized: false },
		{ name: 'ScreenshotLocalized', width: 0, height: 0, path: 'screenshot_localized|assets|screenshots|', localized: true, hidden: true },
	];
}

// called when an image is dragged into drop box
function OnImageDragEnter( evt )
{
	evt.stopPropagation();
	evt.preventDefault();
	var t = $J( evt.target );
	t.addClass( "drag_over" );
}

// called when mouse dragging a file moves out of drop box
function OnImageDragLeave( evt )
{
	evt.stopPropagation();
	evt.preventDefault();

	var t = evt.relatedTarget;
	if ( t && (t == this || jQuery.contains( this, t ) ) )
		return;

	// chrome doesn't set evt.relatedTarget.. wtf?	
	if ( $J( evt.target ).is(':hover') )
		return;

	$J( evt.target ).removeClass( 'drag_over' );
}

// called when mouse dragging over a drop box
function OnImageDragOver( evt )
{
	evt.stopPropagation();
	evt.preventDefault();
}

// called when mouse releases file on drop box
function OnImageDrop( evt )
{
	evt.stopPropagation();
	evt.preventDefault();

	var files = evt.originalEvent.dataTransfer.files; // FileList object.

	$J( evt.target ).removeClass( 'drag_over' );
	LoadImageFilesForUpload( files );
}

// Screenshot specific drag/drop


// called when mouse releases file on drop box
function OnScreenshotDrop( evt )
{

	evt.stopPropagation();
	evt.preventDefault();

	var files = evt.originalEvent.dataTransfer.files; // FileList object.

	$J( evt.target ).removeClass( 'drag_over' );

	var parent = $J(evt.target).parent().parent();
	var target = $J('.imagelanguagelist', parent );
	$J('.imagelanguagebutton', parent ).show();
	var strParentID = parent[0].id;
	var rgBits = strParentID.split('_');
	var nParentID = rgBits[1];

	parent.css( {width: 'auto' } );

	LoadImageFilesForUpload( files, OnScreenshotLoadComplete.bind( undefined, target, nParentID ) );

}

function OnScreenshotLoadComplete(target, nParentID, images )
{

	var eleTarget = $J( target );

	for ( var i = 0; i < images.length; i++ )
	{
		if ( !images[i]['image'] )
			continue;

		// make sure the upload button is enabled
		$J( '#image_upload_btn' ).show();

		var filename = images[i].filename;
		var image = images[i]['image'];

		var targetDiv = $J('<div>');
		targetDiv.appendTo( eleTarget );
		targetDiv.addClass( 'screenshot_upload_preview' );

		var screenshotDiv = $J('<div class="actual_screenshot" style="background-image: url( ' + image.src + ')"></div>');
		screenshotDiv.data( 'filename', filename );
		screenshotDiv.data( 'image', image );
		screenshotDiv.appendTo( targetDiv );

		targetDiv.append( '<br>' );

		// add type select
		var localizedType = false;
		var imageType = 'ScreenshotLocalized';
		var selectType = $J( '<input class="image_type_select" type="hidden" value="' + imageType + '">');
		selectType.appendTo( targetDiv );
		var parentIdInput = $J( '<input class="image_parent_input" type="hidden" value="' + nParentID + '">');
		parentIdInput .appendTo( targetDiv );

		targetDiv.append( '<br>' );

		// add language select
		var selectLanguage = $J( '<select class="image_language_select"></select>');
		var languages = GetSupportedLanguages();
		for ( var key in languages )
		{
			var option = $J( '<option value="' + key + '">' + languages[key] + '</option>' );
			option.appendTo( selectLanguage );

			if ( BLanguageInFileName( key, filename ) )
				option.prop( 'selected', true );
		}
		selectLanguage.appendTo( targetDiv );
		selectLanguage.show();
	}
}

// helper for LoadImageURLForUpload
function CreateImageReaderOnLoadFunc( file, loadedImages, numFiles, fnLoadComplete )
{
	return function( evt )
	{
		var img = new Image;
		img.alt = file.name;
		img.onload = function() { OnIndividualImageLoaded( file.name, img, loadedImages, numFiles, fnLoadComplete ); };
		img.onerror = function( e ) { OnIndividualImageLoaded( file.name, null, loadedImages, numFiles, fnLoadComplete ); };
		img.src = evt.target.result;
	};
}

// helper for LoadImageURLForUpload
function CreateOnIndividualImageLoadedFunc( filename, img, loadedImages, numFiles, OnScreenshotLoadComplete )
{
	if ( img == null )
		return function( e ) { OnIndividualImageLoaded( filename, null, loadedImages, numFiles, OnScreenshotLoadComplete ); };

	return function() { OnIndividualImageLoaded( filename, img, loadedImages, numFiles, OnScreenshotLoadComplete ); };
}

// loads specified image urls
function LoadImageURLForUpload( urls )
{
	var loadedImages = [];
	for ( var i = 0; i < urls.length; i++ )
	{
		var url = urls[i];
		var filename = url;
		if ( filename.indexOf( '?' ) >= 0 )
			filename = filename.substring( 0, filename.indexOf( '?' ) );
		filename = filename.substring( filename.lastIndexOf("/") + 1 );

		var img = new Image;
		img.onload = CreateOnIndividualImageLoadedFunc( filename, img, loadedImages, urls.length );
		img.onerror = CreateOnIndividualImageLoadedFunc( filename, null, loadedImages, urls.length );
		img.src = url;
	}
}

// loads specified files
function LoadImageFilesForUpload( files, fnLoadComplete )
{
	var loadedImages = [];
	for ( var i = 0; i < files.length; i++ )
	{
		var file = files[i];
		var reader = new FileReader;
		reader.onload = CreateImageReaderOnLoadFunc( file, loadedImages, files.length, fnLoadComplete );

		reader.readAsDataURL( files[i] );
	}
}

// called when an individual image is loaded
function OnIndividualImageLoaded( filename, loadedImage, loadedImages, numFiles, fnLoadComplete )
{
	var result = { 'filename': filename, 'image': loadedImage };
	var fnOnComplete = fnLoadComplete ? fnLoadComplete : OnImagesLoadComplete;
	loadedImages.push( result );

	if ( loadedImages.length == numFiles )
		fnOnComplete( loadedImages );
}

// uses supported images to determine image type
function DetermineImageType( image )
{
	for ( var iImageType = 0; iImageType < g_ImageTypes.length; iImageType++ )
	{
		if ( g_ImageTypes[iImageType].width == 0 )
			continue;

		if ( g_ImageTypes[iImageType].width != image.width )
			continue;

		// some image types don't have a set height (background)
		if ( g_ImageTypes[iImageType].height != 0 && g_ImageTypes[iImageType].height != image.height )
			continue;

		return g_ImageTypes[iImageType].name;
	}

	// default to screenshot if not found
	return 'Screenshot';
}

function IsImageTypeValid( image, type )
{
	if ( type.width && type.width != image.width  )
		return false;

	if ( type.height && type.height != image.height )
		return false;

	return true
}

// called when user changes image type
function OnImageSelectTypeChanged( target )
{
	var imageType;
	for ( var iImageType = 0; iImageType < g_ImageTypes.length; iImageType++ )
	{
		if ( g_ImageTypes[iImageType].name == target.value )
			imageType = g_ImageTypes[iImageType];
	}

	var languageSelect = $J( target ).parent().find( 'select.image_language_select' )[0];
	if ( imageType.localized )
		languageSelect.show();
	else
		languageSelect.hide();

	return false;
}

// called when images have been loaded from disk
function OnImagesLoadComplete( images )
{
	for ( var i = 0; i < images.length; i++ )
	{
		if ( !images[i]['image'] )
			continue;

		// make sure the upload button is enabled
		$J( '#image_upload_btn' ).show();

		var filename = images[i].filename;
		var image = images[i]['image'];

		var targetDiv = $J('<div>');
		targetDiv.appendTo( $J( '#game_image_drop_preview') );
		targetDiv.addClass( 'screenshot_upload_preview' );

		var screenshotDiv = $J('<div class="actual_screenshot" style="background-image: url( ' + image.src + ')"></div>');
		screenshotDiv.data( 'filename', filename );
		screenshotDiv.data( 'image', image );
		screenshotDiv.appendTo( targetDiv );

		targetDiv.append( '<br>' );

		// add type select
		var bIsAssetOverride = $J( '#alternative_asset_override_name' ).length;
		var localizedType = false;
		var imageType = DetermineImageType( image );
		var selectType = $J( '<select class="image_type_select" onchange="return OnImageSelectTypeChanged( this);"></select>');
		for ( var iImageType = 0; iImageType < g_ImageTypes.length; iImageType++ )
		{
			if( IsImageTypeValid( image, g_ImageTypes[iImageType] ) && !g_ImageTypes[iImageType].hidden  &&
				( !bIsAssetOverride || g_ImageTypes[iImageType].overrideable ) )
			{
				var option = $J ( '<option value="' + g_ImageTypes[ iImageType ].name + '">' + g_ImageTypes[ iImageType ].name + '</option>' );
				option.appendTo ( selectType );
				if ( g_ImageTypes[ iImageType ].name == imageType )
				{
					option.prop ( 'selected', true );
					localizedType = g_ImageTypes[ iImageType ].localized;
				}
			}
		}

		if( selectType.children().length == 0 ) // If nothing applied, then indicate image not applicable.
		{
			selectType.addClass( 'override_invalid_image' );
			$J( '<option value="invalid">' + "Invalid artwork override image size. This will not be saved." + '</option>' ).appendTo( selectType );
		}

		selectType.appendTo( targetDiv );

		targetDiv.append( '<br>' );

		// add language select
		var selectLanguage = $J( '<select class="image_language_select"></select>');
		var languages = GetSupportedLanguages();
		for ( var key in languages )
		{
			var option = $J( '<option value="' + key + '">' + languages[key] + '</option>' );
			option.appendTo( selectLanguage );

			if ( BLanguageInFileName( key, filename ) )
				option.prop( 'selected', true );
		}
		selectLanguage.appendTo( targetDiv );

		if ( localizedType )
			selectLanguage.show();
		else
			selectLanguage.hide();
	}
}

// returns true if language is in file name
function BLanguageInFileName( key, filename )
{
	var g_rgWhiteSpace = [ ' ', '-', '_', '(', ')', '.' ];

	// Make somewhat restrictive to try and skip false positives, like partial language matches in other words
	var iLangInName = filename.toLowerCase().indexOf( key.toLowerCase() );
	if ( iLangInName < 1 )
		return false;

	// check char after is whitespace or uppercase
	if ( filename.length > iLangInName + key.length )
	{
		var charAfter = filename.charAt( iLangInName + key.length );
		if ( charAfter != charAfter.toUpperCase() && jQuery.inArray( charAfter, g_rgWhiteSpace ) == -1 )
			return false;
	}

	// check first char before is uppercase. ex: MyImageGerman.png
	if ( filename.charAt( iLangInName ) == filename.charAt( iLangInName ).toUpperCase() )
		return true;

	// check char before is whitespace
	var charBefore = filename.charAt( iLangInName - 1 );
	if ( jQuery.inArray( charBefore, g_rgWhiteSpace ) != -1 )
		return true;

	return false;
}

function SubmitImageUpload( itemID, type, altAssetIndex, altAssetFilenamePostfix )
{
	var previews = $J( '#game_image_drop_preview div.screenshot_upload_preview' );
	if ( previews.length == 0 )
		return false;

	UploadImages( previews, itemID, type, altAssetIndex, altAssetFilenamePostfix );
	
	return false;
}


function SubmitScreenshotsUpload( ele, itemID, type )
{
	var previews = $J( '.screenshot_upload_preview', $J( ele ).parent().parent().parent() );

	if ( previews.length == 0 )
		return false;

	UploadImages( previews, itemID, type, "", "" );
}

// called when user wants to submit images
function UploadImages( previews, itemID, type, altAssetIndex, replaceAssetKeyPostfix )
{
	var cScreenshots = 0;
	var fd = new FormData();
	for ( var i = 0; i < previews.length; i++ )
	{
		var preview = $J( previews[i] );
		var filename = $J( preview.find( 'div.actual_screenshot' )[0] ).data( 'filename' );
		if( !filename )
			continue;
		var image = $J( preview.find( 'div.actual_screenshot' )[0] ).data( 'image' );
		var strSelectedType = $J( preview.find( 'select.image_type_select :selected' )[0] ).val();
		if( !strSelectedType )
			strSelectedType = $J( preview.find( 'input.image_type_select' )[0] ).val();
		var nParentID = $J( preview.find( 'input.image_parent_input' )[0] ).val();
		var strSelectedLanguage = $J( preview.find( 'select.image_language_select :selected' )[0] ).val();

		// get type information
		var imageType;
		for ( var iImageType = 0; iImageType < g_ImageTypes.length; iImageType++ )
		{
			if ( g_ImageTypes[iImageType].name == strSelectedType )
				imageType = g_ImageTypes[iImageType];
		}

		// build key and append. Need to special case screenshots path.
		var strKey = imageType.path;
		if ( strSelectedType == 'Screenshot' )
			strKey = strKey + cScreenshots++ + '|english[]';
		if ( strSelectedType == 'ScreenshotLocalized' )
			strKey = strKey + nParentID;

		if ( imageType.localized )
			strKey = strKey + '|' + strSelectedLanguage;

		if( replaceAssetKeyPostfix !== "" && altAssetIndex !== "" )
		{
			// Updates the end of the filename and the key for the key-value
			strKey = strKey.replace('|assets|', '_alt_assets_' + replaceAssetKeyPostfix + '|alt_assets|' + altAssetIndex + '|');
		}

		// previously just passed file object through to this point, however because
		// we can now take images from a remote URL, to unify paths we just get the
		// image data from the loaded Image object
		AppendImageToFormData( fd, strKey, filename, image );
		//fd.append( strKey, file );
	}

	fd.append( 'sessionid', g_sessionID );
	var strPostURL = '';
	var strRedirectURL = '';
	if ( type == 'Package' )
	{
		strPostURL = 'https://partner.steamgames.com/admin/store/packagesave/' + itemID + '?activetab=tab_graphicalassets&json=1';
		strRedirectURL = 'https://partner.steamgames.com/admin/store/package/' + itemID + '?activetab=tab_graphicalassets';
	}
	else if ( type == 'Bundle' )
	{
		strPostURL = 'https://partner.steamgames.com/bundles/savestore/' + itemID + '?activetab=tab_graphicalassets&json=1';
		strRedirectURL = 'https://partner.steamgames.com/bundles/view/' + itemID + '?activetab=tab_graphicalassets';
	}
	else
	{
		strPostURL = 'https://partner.steamgames.com/admin/game/save/' + itemID + '?activetab=tab_graphicalassets&json=1';
		strRedirectURL = 'https://partner.steamgames.com/admin/game/edit/' + itemID + '?activetab=tab_graphicalassets';
	}

	// Add the alt_asset_index
	if( altAssetIndex !== "" )
	{
		strPostURL += '&alt_asset_index=' + altAssetIndex;
		strRedirectURL += '&alt_asset_index=' + altAssetIndex;
	}

	$J('#AdminLoading').show();
	$J('#AdminLoadingBG').show();

	jQuery.ajax( {
		url: strPostURL,
		cache: false,
		data: fd,
		contentType: false,
		processData: false,
		type: 'POST',
		complete: function( response )
		{
			var redirectUrl = strRedirectURL;
			if ( response.responseText )
			{
				try
				{
					var json = jQuery.parseJSON( response.responseText );
					if ( json.redirect )
						redirectUrl = json.redirect;
				}
				catch(err)
				{
				}
			}

			document.location = redirectUrl;
		}
	});

	return false;
}


//-----------------------------------------------------------------------------
// Movies
//-----------------------------------------------------------------------------

// called when mouse releases file on drop box
function OnMovieDrop( evt )
{
	evt.stopPropagation();
	evt.preventDefault();

	var files = evt.originalEvent.dataTransfer.files; // FileList object.

	$J( evt.target ).removeClass( 'drag_over' );

	if ( files.length != 1 )
	{
		alert( 'Please only drop 1 file for upload' );
		return;
	}

	AddMovieForUpload( evt.target, files[0] );
}

function AddMovieForUpload( target, file )
{
	// associate this file with the movie group so we can get it back later
	var group = $J( target ).closest( '.movie_group' );
	group.data( 'file', file );
	var status = group.find( '.movie_upload_status' )[0];

	var itemid = group.attr( 'itemid' );

	// hide drag & drop, show uploading
	var uploading = group.find( '.movie_uploading' )[0];
	var dragdrop = group.find( '.drag_and_drop' )[0];
	uploading.show();
	dragdrop.hide();

	// show file name and size
	var strSizeFormatted = (file.size / (1024.0 * 1024.0)).toFixed( 2 ).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
	var name = group.find( '.movie_upload_name' )[0];
	$J( name ).text( file.name + ' (' + strSizeFormatted + 'MB)' );

	// make begin upload call
	var fd = new FormData();
	fd.append( 'file', file.name );

	// lastModifiedData is being removed and already doesn't work on Safari
	// as a stopgap, if it's not available to use, use the current time
	// While this gets Safari working, resuming a broken download on Safari won't work.
	if ( typeof file.lastModifiedDate !== 'undefined' )
		fd.append( 'lastmodified', file.lastModifiedDate.getTime() );
	else
		fd.append( 'lastmodified', new Date().getTime() );

	fd.append( 'size', file.size );
	fd.append( 'sessionid', g_sessionID );

	jQuery.ajax( {
		url: 'https://partner.steamgames.com/admin/game/movieuploadbegin/' + itemid,
		type: 'POST',
		cache: false,
		data: fd,
		contentType: false,
		processData: false
	} )
	.done( function( data ) {
		if ( data.name )
		{
			var offset = parseInt( data.offset );
			group.data( 'upload_name', data.name );
			UploadMovieChunk( itemid, group, offset );
		}
		else
		{
			$J( status ).text( 'Failed Upload' );
			SetMovieError( group, 'An error occurred while uploading this movie.', true );
		}
	} )
	.fail( function( jqXHR, textStatus ) {
		$J( status ).text( 'Failed Upload' );
		SetMovieError( group, 'An error occurred while uploading this movie', true );
	} );
}

function UploadMovieChunk( itemid, movieContainer, offset )
{
	if ( offset === undefined )
		offset = 0;

	var group = $J( movieContainer );
	var file = movieContainer.data( 'file' );
	var uploadName = movieContainer.data( 'upload_name' );
	var progress = movieContainer.find( '.movie_upload_progress' )[0];
	var status = movieContainer.find( '.movie_upload_status' )[0];

	if ( offset >= file.size )
	{
		$J( progress ).css( { 'width': '100%' } );
		MovieUploadComplete( itemid, movieContainer );
		return;
	}

	var CHUNK_SIZE = 5 * 1024 * 1024;
	$J( status ).text( 'Uploading...' );

	// send chunk size worth
	var fd = new FormData();
	var chunk = file.slice( offset, offset + CHUNK_SIZE );
	fd.append( 'file', uploadName );
	fd.append( 'chunk', chunk, 'chunk' );
	fd.append( 'offset', offset );
	fd.append( 'sessionid', g_sessionID );

	// send
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'https://partner.steamgames.com/admin/game/movieuploadchunk/' + itemid, true);
	xhr.onload = function(e)
	{
		var response = null;
		if ( this.status == 200 )
		{
			try
			{
				response = JSON.parse( this.responseText );
			}
			catch( error )
			{
			}
		}

		if ( !response || !response.success )
		{
			$J( status ).text( 'Failed Upload' );
			SetMovieError( group, 'An error occurred while uploading this movie', true );
			return;
		}

		UploadMovieChunk( itemid, movieContainer, offset + CHUNK_SIZE );
	};
	xhr.upload.onprogress = function(e)
	{
		if ( e.lengthComputable )
		{
			var width = ((offset + e.loaded) / file.size) * 100;
			if ( width > 100 )
				width = 100;

			$J( progress ).css( { 'width': width + '%' } );
		}
	};

	xhr.send( fd );
}

function MovieUploadComplete( itemid, movieContainer )
{
	var group = $J( movieContainer );
	var uploadName = movieContainer.data( 'upload_name' );
	var status = movieContainer.find( '.movie_upload_status' )[0];
	$J( status ).text( 'Processing' );

	// make begin upload call
	var fd = new FormData();
	fd.append( 'file', uploadName );
	fd.append( 'sessionid', g_sessionID );

	jQuery.ajax( {
		url: 'https://partner.steamgames.com/admin/game/converttrailer/' + itemid,
		type: 'POST',
		cache: false,
		data: fd,
		contentType: false,
		processData: false
	} )
	.done( function( data ) {
		if ( data.success )
		{
			// check progress
			CheckMovieConvertStatus( movieContainer );
		}
		else
		{
			$J( status ).text( 'Failed Upload' );
			SetMovieError( group, 'An error occurred while uploading this movie', true );
		}
	} )
	.fail( function( jqXHR, textStatus ) {
		$J( status ).text( 'Failed Upload' );
		SetMovieError( group, 'An error occurred while uploading this movie', true );
	} );
}

function CheckMovieConvertStatus( movieContainer )
{
	var status = movieContainer.find( '.movie_upload_status' )[0];
	var itemid = movieContainer.attr( 'itemid' );
	jQuery.ajax( {
		url: 'https://partner.steamgames.com/admin/game/gettrailerstate/' + itemid,
		type: 'GET',
		cache: false
	} )
	.done( function( data ) {
		if ( data.success )
		{
			SetMovieConvertState( movieContainer, data.state, data.queue_pos );
			if ( data.screenshot )
			{
				var screenshot = movieContainer.find( '.movie_screenshot' )[0];
				// must clear style first as url might not change.. force browser to reload
				$J( screenshot ).css( { 'background-image': '' } );
				$J( screenshot ).css( { 'background-image': 'url(' + data.screenshot + ')' } );
			}
		}
		else
		{
			$J( status ).text( 'Failed Upload' );
			SetMovieError( group, 'An error occurred while uploading this movie. Please reload this page and try again.', false );
		}
	} )
	.fail( function( jqXHR, textStatus ) {
		$J( status ).text( 'Failed Upload' );
		SetMovieError( group, 'An error occurred while uploading this movie. Please reload this page and try again.', false );
	} );
}

function SetMovieConvertState( movieContainer, state, queue_pos )
{
	var status = movieContainer.find( '.movie_upload_status' )[0];
	var movieUploadUI = movieContainer.find( '.movie_upload_ui' )[0];
	var dragdrop = movieContainer.find( '.drag_and_drop' )[0];
	var movieUploading = movieContainer.find( '.movie_uploading' )[0];
	var movieUploadedUI = movieContainer.find( '.movie_uploaded_ui' )[0];
	var movieMoreLink = movieContainer.find( '.movie_more_link' )[0];

	var bSchedule = false;
	if ( state == 'published' )
	{
		movieUploadUI.hide();
		movieUploadedUI.show();
		movieMoreLink.show();
	}
	else if ( state == 'converting' || state == 'publishing' )
	{
		var k_SimProcessing = 2;
		var statusMsg = '';
		if ( state == 'converting' )
		{
			if ( queue_pos === undefined || queue_pos < k_SimProcessing )
				statusMsg = 'Converting...';
			else {
				if ( queue_pos > k_SimProcessing )
					statusMsg = 'Please wait... There are ' + queue_pos + ' trailers ahead in the queue.';
				else
					statusMsg = 'Please wait... This trailer is next in the queue for processing.';
			}
		}
		else {
			statusMsg = 'Publishing...';
		}

		$J( status ).text( statusMsg );
		bSchedule = true;

		movieUploadedUI.hide();
		movieMoreLink.hide();
		movieUploadUI.show();
		dragdrop.hide();
		movieUploading.show();
	}
	else
	{
		// error or noassociation
		if ( state != 'noassociation' )
			SetMovieError( movieContainer, 'An error occurred while uploading this movie', true );

		movieUploadedUI.hide();
		movieMoreLink.hide();
		movieUploadUI.show();
		dragdrop.show();
		movieUploading.hide();
	}

	// schedule refresh if necessary
	if ( bSchedule )
	{
		// clear old timeout if scheduled
		var hRefresh = movieContainer.data( 'refreshTimeout' );
		if ( hRefresh )
			clearTimeout( hRefresh );

		hRefresh = setTimeout( function() { CheckMovieConvertStatus( movieContainer ); }, 5 * 1000 );
		movieContainer.data( 'refreshTimeout', hRefresh );
	}
}

function CreateMovieForApp( strForm )
{
	$J( '#movie_list_processing' ).addClass( 'processing' );
	jQuery.ajax( {
		url: $J( strForm ).attr( 'action'),
		cache: false,
		type: 'POST',
		data: $J( strForm ).serialize()
	} )
	.done( function( data ) {
		$J( '#movie_list_processing' ).removeClass( 'processing' );
		if ( !data.itemid || !data.html )
		{
			alert( 'Failed to create new trailer. Please try again.' );
			return;
		}

		var newElements = $J( data.html );
		$J( '#trailer_list' ).append( newElements );
		RegisterMovieDragDrop();
		SetMovieConvertState( $J( '#movie_' + data.itemid ), 'noassociation' );
		var nameInput = $J( '#movie_' + data.itemid ).find( '.movie_name_input' )[0];
		SetRelatedMovieName( data.itemid, $J( nameInput ).val() );
		UpdateRelatedMovieSelects();

		// need to register tooltips

	} )
	.fail( function( jqXHR, textStatus ) {
		$J( '#movie_list_processing' ).removeClass( 'processing' );
		alert( 'Failed to create new trailer. Please check a name has been entered.');
	} );

	return false;
}

function RegisterMovieDragDrop()
{
	var targets = $J( '.movie_upload_ui .drag_and_drop' );
	for ( var i = 0; i < targets.length; i++ )
	{
		var target = $J( targets[i] );
		if ( target.data( 'drag_registered' ) )
			continue;

		target.bind( 'dragenter', OnImageDragEnter );
		target.bind( 'dragleave', OnImageDragLeave );
		target.bind( 'dragover', OnImageDragOver );
		target.bind( 'drop', OnMovieDrop );
		target.data( 'drag_registered', true );
	}

	var targets = $J( '.movie_screenshot .drag_and_drop' );
	for ( var i = 0; i < targets.length; i++ )
	{
		var target = $J( targets[i] );
		if ( target.data( 'drag_registered' ) )
			continue;

		target.bind( 'dragenter', OnImageDragEnter );
		target.bind( 'dragleave', OnImageDragLeave );
		target.bind( 'dragover', OnImageDragOver );
		target.bind( 'drop', OnMovieScreenshotDrop );
		target.data( 'drag_registered', true );
	}
}

function MovieExpandCollapse( link )
{
	$J( link ).siblings().find( '.movie_expanded' ).toggle();
	var divText = $J( link ).find( '.movie_more_row' )[0];
	if ( $J( divText ).text().indexOf( 'Hide' ) == -1 )
		$J( divText ).text( 'Hide' );
	else
		$J( divText ).text( 'Advanced / Replace Movie' );

	return false;
}

function SetMovieData( form )
{
	var group = $J( form ).closest( '.movie_group' );
	SetMovieProcessing( group, true );
	jQuery.ajax( {
		url: $J( form ).attr( 'action'),
		cache: false,
		type: 'POST',
		data: $J( form ).serialize()
	} )
	.done( function( data ) {
		SetMovieProcessing( group, false );
		if ( data.reloadpage )
		{
			if ( location.href.indexOf( '?activetab=tab_movies' ) == -1 )
				location.href = location.href + '?activetab=tab_movies';
			else
				location.reload();
		}
	} )
	.fail( function( jqXHR, textStatus ) {
		SetMovieError( group, 'An error occurred while saving changes to this movie. Please reload this page and try again.', false );
		SetMovieProcessing( group, false );
	} );

	return false;
}

function ConfirmDeleteTrailer( ele )
{
	var bDelete = confirm( 'Are you sure you want to delete this trailer?' );
	if ( bDelete )
	{
		// add the hidden input to indicate delete
		$J( ele ).append( '<input type="hidden" name="delete_trailer" value="delete">' );
	}

	return bDelete;
}

var g_rgRelatedMovies = {};
function SetRelatedMovieName( itemid, name )
{
	g_rgRelatedMovies[ itemid ]= name;
}

function UpdateRelatedMovieSelects()
{
	// update all dropdowns
	var selects = $J( 'select[name="app[movie][base_movie]"]' );
	for ( var i = 0; i < selects.length; i++ )
	{
		var select = $J( selects[i] );
		var origItemID = select.data( 'origitemid' );
		var origItemName = select.data( 'origitemname' );

		var selected = select.val();
		select.empty();

		var newOption = $J( '<option value=""></option>' );
		select.append( newOption );

		if ( origItemID && !g_rgRelatedMovies[ origItemID ]	 )
		{
			var newOption = $J( '<option value="' + origItemID +'">' + origItemName + '</option>' );
			if ( origItemID == selected )
				newOption.prop('selected', true);

			select.append( newOption );
		}

		$J.each( g_rgRelatedMovies, function( key, value )
		{
			var newOption = $J( '<option value="' + key +'">' + value + '</option>' );
			if ( key == selected )
				newOption.prop('selected', true);

			select.append( newOption );
		});
	}
}

function MovieNameChanged( itemid, target )
{
	
	var group = $J( target ).closest( '.movie_group' );
	var inputs = group.find( '.movie_name_input');
	for ( var i = 0; i < inputs.length; i++ )
	{
		if ( inputs[i] == target )
			continue;

		inputs[i].value = target.value;
	}

	SetRelatedMovieName( itemid, target.value );
	UpdateRelatedMovieSelects();
}

function OnMovieScreenshotDrop( evt )
{
	evt.stopPropagation();
	evt.preventDefault();

	var files = evt.originalEvent.dataTransfer.files; // FileList object.

	$J( evt.target ).removeClass( 'drag_over' );

	if ( files.length != 1 )
	{
		alert( 'Please only drop 1 file for upload' );
		return;
	}

	UploadMovieScreenshot( evt.target, files[0] );
}

function SetMovieProcessing( group, enabled )
{
	var processing = $J( group ).find( '.movie_processing' )[0];
	processing = $J( processing );

	if ( enabled )
		processing.addClass( 'processing' );
	else
		processing.removeClass( 'processing' );
}

function SetMovieError( group, text, bShowRetry )
{
	var error = $J( group ).find( '.movie_error' )[0];
	error = $J( error );

	var retry = $J( group ).find( '.movie_error_retry')[0];
	retry = $J( error );

	var errorText = error.find( '.movie_error_text')[0];
	errorText = $J( errorText );

	error.addClass( 'error' );
	errorText.text( text );

	if ( bShowRetry )
		retry.show();
	else
		retry.hide();
}

function HideMovieError( group )
{
	var error = $J( group ).find( '.movie_error' )[0];
	error = $J( error );
	error.removeClass( 'error' );
}

function ClearMovieErrorTryAgain( target )
{
	var group = $J( target ).closest( '.movie_group' );
	var itemid = group.attr( 'itemid' );
	HideMovieError( group );
	SetMovieProcessing( group, true );

	jQuery.ajax( {
		url: 'https://partner.steamgames.com/admin/game/cleartrailererror/' + itemid,
		type: 'POST',
		data: {
			sessionid : g_sessionID
		}
	} )
	.done( function( data )
	{
		SetMovieConvertState( group, 'noassociation' );
		SetMovieProcessing( group, false );
	} )
	.fail( function( jqXHR, textStatus )
	{
		SetMovieError( group, 'Failed to reset movie data' );
		SetMovieProcessing( group, false );
	} );

	return false;
}

function UploadMovieScreenshot( target, file )
{
	var group = $J( target ).closest( '.movie_group' );
	var itemid = group.attr( 'itemid' );
	var screenshot = group.find( '.movie_screenshot' )[0];
	$J( screenshot ).css( { 'background-image': '' } );
	SetMovieProcessing( group, true );

	var fd = new FormData();
	fd.append( 'movie_thumb|assets|movie_screenshot|legacy', file, file.name );
	fd.append( 'movieItemID', itemid );
	fd.append( 'sessionid', g_sessionID );

	jQuery.ajax( { url: 'https://partner.steamgames.com/admin/game/moviesetdata/' + itemid, type: 'POST', data: fd, processData: false, contentType: false } )
	.done( function( data )
	{
		$J( screenshot ).css( { 'background-image': 'url(' + data.screenshot + ')' } );
		SetMovieProcessing( group, false );
	} )
	.fail( function( jqXHR, textStatus )
	{
		SetMovieError( group, 'An error occurred while uploading this screenshot. Please reload this page and try again.' );
		SetMovieProcessing( group, false );
	} );
}

// Adds a draggable image group
function AddDraggableMovieGroup( itemID, container, dataPath )
{
	// Setup the sortable list
	jQuery(container).sortable({
		items: ".sortable",
		handle: ".titleDragHandle",
		placeholder: "dragAndDropHighlight",
		cursor: "move",
		forcePlaceholderSize: true,
		forceHelperSize: true,
		opacity: 0.5,
		tolerance: "pointer",
		containment: "parent",
		start: function( event, ui ) {
			// Record where we started from
			jQuery(ui.item).data("startIndex", jQuery(ui.item).index() );
		},
		update: function( event, ui ) {
			if ( g_CancelDrag )
				return;

			// Now, move the item to the new position
			var oldIndex = jQuery(ui.item).data("startIndex");
			var newIndex = jQuery(ui.item).index();

			$J( '#movie_list_processing' ).addClass( 'processing' );
			var onComplete = function( bSuccess )
			{
				if ( !bSuccess )
					alert( 'Failed to update' );

				$J( '#movie_list_processing' ).removeClass( 'processing' );
			};

			ArraySwapAjax( 'https://partner.steamgames.com/admin/game/quickupdateajax/' + itemID, dataPath, oldIndex, newIndex, onComplete );
		}
	});

	g_RegisteredSortables.push( jQuery(container) );
}

// updates allowed country hidden input fields
function UpdateMovieAllowedCountries( container )
{
	var select = container.find( '.movie_allowed_countries_select' )[0];
	var text = container.find( '.movie_allowed_countries_text' )[0].value;

	var hiddenAllowed = container.find( '.AllowedCountries_Hidden' )[0];
	var hiddenRestricted = container.find( '.RestrictedCountries_Hidden' )[0];

	if ( select.value == 'not' )
	{
		hiddenAllowed.value = '';
		hiddenRestricted.value = text;
	}
	else
	{
		hiddenAllowed.value = text;
		hiddenRestricted.value = '';
	}
}

// called when visibility checkbox changes
function VisibilityCheckboxChanged( id )
{
	var bChecked = GetFancyCheckboxState( 'checkbox_visibility_' + id );
	SetFancyCheckboxEnabled( 'checkbox_highlight_' + id, bChecked );
}

function DeleteRelease( req )
{
	ShowConfirmDialog( 'Delete release?', 'Are you sure?  You should usually use "Hide this package as a purchase option" instead if this release was previously public.').done( function() 
	{
		SubmitQuickMessageUpdate( req ); 
	} );
}

function DeleteAssetOverride( nAltAssetIndex, nItemID )
{
	ShowConfirmDialog( 'Delete Artwork Override',
		'Are you sure you want to delete the Artwork Override? This cannot be undone.').done( function()
	{
		$J( "#deleting_throbber").show();
		var onComplete = function( bSuccess )
		{
			$J( "#deleting_throbber").hide();
			if ( !bSuccess )
			{
				alert( 'Failed to delete artwork override. Try again later.' );
			}
			else
			{	// Return the default URL
				window.location = 'https://partner.steamgames.com/admin/game/edit/' + nItemID + '?activetab=tab_graphicalassets';
			}
		};

		var params = {};
		params['alt_asset_index'] = nAltAssetIndex;

		SubmitQuickMessageUpdateAjax( 'https://partner.steamgames.com/admin/game/ajaxdeleteassetoverride/' + nItemID, params, onComplete );
	} );
}

function ChooseFriendAsBroadcaster( steamid, nItemID )
{
	$J( '#choose_friend_throbber' ).show();

	var params = {};
	params['steamid'] = steamid;
	params[ 'sessionid' ] = g_sessionID;

	new Ajax.Request( 'https://partner.steamgames.com/admin/game/ajaxlistfriends/' + nItemID, {
		method: 'post',
		requestHeaders: { 'Accept': 'application/json' },
		parameters: params,
		onSuccess: function( transport )
		{
			$J('#choose_friend_throbber').hide();
			var dialog = ShowConfirmDialog( 'Choose a broadcaster from my Friends List', $J( transport.responseText ) );

			dialog.SetRemoveContentOnDismissal( false );
			dialog.done( function()
			{
					var chosenSteamID = $J("input[name=friend]:checked").val();
					if( chosenSteamID)
					{
						$J('#BroadcasterSteamID').val( chosenSteamID );
					}
			} );
		},
		onFailure: function( transport )
		{
			$J('#choose_friend_throbber').hide();
		}
	});
	return false;
}

