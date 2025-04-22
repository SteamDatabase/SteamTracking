
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
				'spanish': 'Spanish - Spain',
				'schinese': 'Simplified Chinese',
				'tchinese': 'Traditional Chinese',
				'russian': 'Russian',
				'thai': 'Thai',
				'japanese': 'Japanese',
				'portuguese': 'Portuguese - Portugal',
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
				'vietnamese': 'Vietnamese',
				'latam': 'Spanish - Latin America',
				'sc_schinese': 'SteamChina - Simplified Chinese',
				'indonesian': 'Indonesian',
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
		{ name: 'Header Capsule', width: 920, height: 430, path: strHeaderPath + '|header|assets|' + strHeaderPath + '|image', localized: true, overrideable: true, confirmation_required: true },
		{ name: 'Small Capsule', width: 462, height: 174, path: 'small_capsule|capsule|assets|small_capsule|image', localized: true, overrideable: true, confirmation_required: true },
		{ name: 'Main Capsule', width: 1232, height: 706, path: 'main_capsule|capsule_616x353|assets|main_capsule|image', localized: true, overrideable: true, confirmation_required: true },
		{ name: 'Package Header', width: 1414, height: 464, path: 'header_image|header|assets|header_image|image', localized: true, confirmation_required: true },
		{ name: 'Vertical Capsule', width: 748, height: 896, path: 'hero_capsule|hero_capsule|assets|hero_capsule|image', localized: true, overrideable: true, confirmation_required: true },
		{ name: 'Page Background', width: 1438, height: 810, path: 'asset|page_bg.jpg|assets|page_background', localized: false },

		{ name: 'Broadcast Left Side Panel', width: 155, height: 337, path: 'broadcast|broadcast_left_panel|assets|broadcast_left_panel|image', localized: false },
		{ name: 'Broadcast Right Side Panel', width: 155, height: 337, path: 'broadcast|broadcast_right_panel|assets|broadcast_right_panel|image', localized: false },

		{ name: 'Library Hero', width: 3840, height: 1240, path: 'library_hero|library_hero|assets|library_hero|image', localized: true, overrideable: false, confirmation_required: true },
		{ name: 'Library Capsule', width: 600, height: 900, path: 'library_capsule|library_600x900|assets|library_capsule|image', localized: true, overrideable: false, confirmation_required: true },
		{ name: 'Library Header', width: 920, height: 430, path: 'library_header|library_header|assets|library_header|image', localized: true, overrideable: false, confirmation_required: true },
		{ name: 'Library Logo', width: 1280, height: 720, path: 'library_logo|logo|assets|library_logo|image', localized: true, overrideable: false, contained: true, confirmation_required: true },

		// Keep last for list priority ordering
		{ name: 'Screenshot', width: 1920, height: 1080, path: 'screenshot|assets|screenshots|', localized: false, enforce_min: true },
		{ name: 'ScreenshotLocalized', width: 0, height: 0, path: 'screenshot_localized|assets|screenshots|', localized: true, hidden: true, enforce_min: true },
	];
}

function AddAdditonalImageTypes( rgExtraTypes )
{
	for ( var i = 0; i < rgExtraTypes.length; i++ )
		g_ImageTypes.push( rgExtraTypes[i] );
}

// called when an image is dragged into drop box
function OnImageDragEnter( evt )
{
	evt.stopPropagation();
	evt.preventDefault();
	var t = $J( evt.currentTarget );
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
	if ( $J( evt.currentTarget ).is(':hover') )
		return;

	$J( evt.currentTarget ).removeClass( 'drag_over' );
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

	$J( evt.currentTarget ).removeClass( 'drag_over' );
	LoadImageFilesForUpload( files );
}

// Screenshot specific drag/drop


// called when mouse releases file on drop box
function OnScreenshotDrop( evt )
{
	evt.stopPropagation();
	evt.preventDefault();

	var files = evt.originalEvent.dataTransfer.files; // FileList object.

	$J( evt.currentTarget ).removeClass( 'drag_over' );

	var parent = $J(evt.currentTarget).parent().parent();
	var target = $J('.screenshot_loc_upload', parent );
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

		const elFilename =  $J( '<div/>', { 'class': 'image_file_name' } ).text(  filename );
		targetDiv.append( elFilename );

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
		var ImageType = g_ImageTypes[iImageType];

		if ( ImageType.width == 0 )
			continue;

		if ( !IsImageTypeValid( image, ImageType ) )
			continue;

		return ImageType.name;
	}

	return '';
}


function IsImageTypeValid( image, ImageType )
{
	var bSupports2X = ImageType.supports2x;

	// Some image types like screenshots just have a min
	if ( ImageType.enforce_min )
	{
		if ( ImageType.width !== 0 && image.width < ImageType.width )
			return false;

		if ( ImageType.height !== 0 && image.height < ImageType.height )
			return false;
	}
	else if ( ImageType.contained )
	{
		if ( image.width !== ImageType.width && image.height !== ImageType.height )
			return false;
	}
	else
	{
		if ( ImageType.width != 0 && ImageType.width != image.width &&
			( !bSupports2X || ImageType.width * 2 != image.width ) )
			return false;

		// some image types don't have a set height (background)
		if ( ImageType.height != 0 && ImageType.height != image.height &&
			( !bSupports2X || ImageType.height * 2 != image.height ) )
			return false;
	}

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

	var sectionAllAgesAppropriate = $J( target ).parent().find( 'div[id=screenshot_appropriate_section]' );
	if(target.value == "Screenshot" )
		sectionAllAgesAppropriate.show();
	else
		sectionAllAgesAppropriate.hide();

	return false;
}

// called when images have been loaded from disk
function OnImagesLoadComplete( images )
{
	var previews = $J( '#game_image_drop_preview div.screenshot_upload_preview' );

	for ( var i = 0; i < images.length; i++ )
	{
		if ( !images[i]['image'] )
			continue;

		// make sure the upload button is enabled
		$J( '#game_image_drop' ).addClass( 'has_files' );

		var filename = images[i].filename;
		var image = images[i]['image'];

		var targetDiv = $J('<div>');
		targetDiv.appendTo( $J( '#game_image_drop_preview') );
		targetDiv.addClass( 'screenshot_upload_preview' );

		var screenshotDiv = $J('<div class="actual_screenshot" style="background-image: url( ' + image.src + ')"></div>');
		screenshotDiv.data( 'filename', filename );
		screenshotDiv.data( 'image', image );
		screenshotDiv.appendTo( targetDiv );

		// add type select
		var bIsAssetOverride = $J( '#alternative_asset_override_name' ).length;
		var localizedType = false;
		var imageType = DetermineImageType( image );
		var selectType = $J( '<select class="image_type_select" onchange="return OnImageSelectTypeChanged( this );"></select>');
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

		if ( selectType.children().length == 0 ) // If nothing applied, then indicate image not applicable.
		{
			targetDiv.append( $J( '<div/>', { style: 'color:orange'  } ).text( "Dimensions provided do not match any known assets. This image will not be saved." ) );
		}
		else
		{
			selectType.appendTo( targetDiv );
			targetDiv.append( '<br>' );
		}

		// add all-ages appropriate radio buttons
		var divAllAgesAppropriate = $J( '<div class="image_all_ages_appropriate" id="screenshot_appropriate_section"></div>' );
		var labelAllAgesAppropriate = $J( '<div class="image_all_ages_appropriate_label">Is this screenshot suitable for all ages?</div>' );
		var radioAllAgesAppropriateYes = $J( '<input class="image_all_ages_appropriate_radio" type="radio" name="screenshot_appropriate[' + ( i + previews.length ) + ']" id="screenshot_appropriate_yes[' + ( i + previews.length ) + ']" value="yes"><label for="yes">YES</label>' );
		var radioAllAgesAppropriateNo = $J( '<input class="image_all_ages_appropriate_radio" type="radio" name="screenshot_appropriate[' + ( i + previews.length ) + ']" id="screenshot_appropriate_no[' + ( i + previews.length ) + ']" value="no"><label for="no">NO</label>' );
		labelAllAgesAppropriate.appendTo( divAllAgesAppropriate );
		radioAllAgesAppropriateYes.appendTo( divAllAgesAppropriate );
		radioAllAgesAppropriateNo.appendTo( divAllAgesAppropriate );

		divAllAgesAppropriate.appendTo( targetDiv );

		if( imageType == "Screenshot" )
			divAllAgesAppropriate.show();
		else
			divAllAgesAppropriate.hide();

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

		const elFilename =  $J( '<div/>', { 'class': 'image_file_name' } ).text( filename );
		targetDiv.append( elFilename );

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
	if ( iLangInName == -1 )
		return false;

	// check char after is whitespace or uppercase
	if ( filename.length > iLangInName + key.length )
	{
		var charAfter = filename.charAt( iLangInName + key.length );
		if ( charAfter != charAfter.toUpperCase() && jQuery.inArray( charAfter, g_rgWhiteSpace ) == -1 )
			return false;
	}

	// For languages at the start of the file name, if we passed the "next character is punctuation or upper case"
	// check, we're done. This handles cases where the file is just "german.jpg"
	if ( iLangInName == 0 )
		return true;

	// check first char before is uppercase. ex: MyImageGerman.png
	if ( filename.charAt( iLangInName ) == filename.charAt( iLangInName ).toUpperCase() )
		return true;

	// check char before is whitespace
	var charBefore = filename.charAt( iLangInName - 1 );
	if ( jQuery.inArray( charBefore, g_rgWhiteSpace ) != -1 )
		return true;

	return false;
}

function SubmitImageUpload( itemID, type, altAssetIndex, altAssetFilenamePostfix, bSkipConfirmation )
{
	var previews = $J( '#game_image_drop_preview div.screenshot_upload_preview' );
	if ( previews.length == 0 )
		return false;

	UploadImages( previews, itemID, type, altAssetIndex, altAssetFilenamePostfix, bSkipConfirmation );

	return false;
}


function SubmitScreenshotsUpload( ele, itemID, type )
{
	var previews = $J( '.screenshot_upload_preview', $J( ele ).parents( '.screenshot_thumb' ).first() );

	if ( previews.length == 0 )
		return false;

	UploadImages( previews, itemID, type, "", "", true );
}

// called when user wants to submit images
function UploadImages( previews, itemID, type, altAssetIndex, replaceAssetKeyPostfix, bSkipConfirmation )
{
    // Album image types (cover art, etc.) aren't in the list of known image types because we don't want any of the
    // other code that relies on this path (store contents, screenshots) to see or know about those types. Instead we
    // skip over all of the extra work looking for a type to match and just store what we're given.
    var isAlbumImageType = (type == 'AlbumCover' || type == 'AlbumAdditional');

	var cScreenshots = 0;
	var fd = new FormData();
	let rgImageConfirmationData = [];
	for ( var i = 0; i < previews.length; i++ )
	{
		var preview = $J( previews[i] );
		var filename = $J( preview.find( 'div.actual_screenshot' )[0] ).data( 'filename' );
		if( !filename )
			continue;
		var image = $J( preview.find( 'div.actual_screenshot' )[0] ).data( 'image' );
		var strKey = "dummy";

		if ( isAlbumImageType )
		{
			strKey = type + '_' + i;

			// if we have a language selected, route it through as additional data through the 'params' blob of the form
			var strSelectedLanguage = $J( preview.find( 'select.image_language_select :selected' )[0] ).val();
			if ( strSelectedLanguage && strSelectedLanguage != 'default' )
            {
				fd.append( 'params[' + filename + '][language]', strSelectedLanguage );
            }
		}
		else
		{
		    var strSelectedType = $J( preview.find( 'select.image_type_select :selected' )[0] ).val();
		    if( !strSelectedType )
		        strSelectedType = $J( preview.find( 'input.image_type_select' )[0] ).val();

			// Skip if no valid type
			if ( !strSelectedType )
				continue;

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
		    strKey = imageType.path;
		    if ( strSelectedType == 'Screenshot' )
			{
				strKey = strKey + cScreenshots++ + '|english[]';

				// Screenshots must specify whether they are all-ages appropriate.
				var strAllAgesAppropriate = $J( preview.find( 'input[name="screenshot_appropriate[' + i + ']"]:checked' ) ).val();
				if( strAllAgesAppropriate == 'yes' || strAllAgesAppropriate == 'no' )
				{
					var bAllAges = strAllAgesAppropriate == 'yes' ? true:false;
					fd.append( 'params[' + filename + '][all_ages]', bAllAges ? '1':'0' );
					var extension = filename.match(/\.[0-9a-z]+$/i)[0];
					var lastidx = filename.lastIndexOf(extension);
					filename = [filename.slice(0,lastidx), bAllAges ? '.AA1':'', extension].join('');
				}
				else
				{
					alert( 'Please specify whether each screenshot is suitable for all ages.' );
					return false;
				}
			}

		    if ( strSelectedType == 'ScreenshotLocalized' )
		        strKey = strKey + nParentID;

		    if ( imageType.localized )
		        strKey = strKey + '|' + strSelectedLanguage;

		    if( replaceAssetKeyPostfix !== "" && altAssetIndex !== "" )
		    {
		        // Updates the end of the filename and the key for the key-value
		        strKey = strKey.replace('|assets|', '_alt_assets_' + replaceAssetKeyPostfix + '|alt_assets|' + altAssetIndex + '|');
		    }

			if ( !bSkipConfirmation && altAssetIndex === "" && strSelectedLanguage === 'english' && type !== 'Advertising' && imageType.confirmation_required )
			{
				rgImageConfirmationData.push( { 'image_src': image.src, 'image_def': imageType } );
			}
		}

		// previously just passed file object through to this point, however because
		// we can now take images from a remote URL, to unify paths we just get the
		// image data from the loaded Image object
		AppendImageToFormData( fd, strKey, filename, image );
	}

	// Must define global fn ShowImageConfirmationDialog in webui
	if ( rgImageConfirmationData.length && ( typeof window.ShowImageConfirmationDialog !== 'undefined' ) )
	{
		window.ShowImageConfirmationDialog( rgImageConfirmationData );
		return false;
	}

	fd.append( 'sessionid', g_sessionID );
	var strPostURL = '';
	var strRedirectURL = '';
	if ( type === 'Package' )
	{
		strPostURL = 'https://partner.steamgames.com/admin/store/packagesave/' + itemID + '?activetab=tab_graphicalassets&json=1';
		strRedirectURL = 'https://partner.steamgames.com/admin/store/package/' + itemID + '?activetab=tab_graphicalassets';
	}
	else if ( type === 'Bundle' )
	{
		strPostURL = 'https://partner.steamgames.com/bundles/savestore/' + itemID + '?activetab=tab_graphicalassets&json=1';
		strRedirectURL = 'https://partner.steamgames.com/bundles/view/' + itemID + '?activetab=tab_graphicalassets';
	}
	else if ( isAlbumImageType )
	{
	    // Note that for albums, "itemID" actually means "appID". We save this image content in the Steamworks config, not
	    // the store data.
	    fd.append( 'appID', itemID );
	    fd.append( 'requestType', type );

	    strPostURL = 'https://partner.steamgames.com/images/upload/';
	    strRedirectURL = 'https://partner.steamgames.com/apps/musicalbumimages/' + itemID;
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
			let redirectURL = new URL( strRedirectURL );
			let urlSearchParams = new URLSearchParams( window.location.search );
			const subTab = urlSearchParams.get( "subtab" );
			if ( response.responseText )
			{
				try
				{
					var json = jQuery.parseJSON( response.responseText );
					if ( json.redirect )
					{
						redirectURL = new URL( json.redirect );
					}
				}
				catch(err)
				{
				}
			}

			if ( subTab )
				redirectURL.searchParams.set( "subtab", subTab );

			document.location = redirectURL;
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

function UploadToS3( itemid, movieContainer, rgParams )
{
	var progress = movieContainer.find( '.movie_upload_progress' )[0];
	var status = movieContainer.find( '.movie_upload_status' )[0];

	var queueSize = 4;
	var partSize = 5 * 1024 * 1024;

	var percentage = 0;

	var fileKey = rgParams.target_file_path;
	if ( fileKey.indexOf( '/' ) == 0 )
		fileKey = fileKey.substr( 1 );

	AWS.config.region = rgParams.target_aws_region;
	AWS.config.credentials = new AWS.Credentials( rgParams.access_key_id, rgParams.secret_access_key, rgParams.session_token );
	var uploader = new AWS.S3.ManagedUpload( {
		params: {
			Bucket: rgParams.target_s3_bucket,
			Key: fileKey,
			ServerSideEncryption: 'AES256',
			Body: movieContainer.data( 'file' )
		},
		queueSize: queueSize,
		partSize: partSize,
		service: new AWS.S3( { maxRetries: 10, httpOptions: { timeout: 240000 } } )
	} );
	uploader.on( 'httpUploadProgress', function ( aws_progress )
	{
		if ( aws_progress.hasOwnProperty( 'total' ) )
		{
			percentage = ( aws_progress.loaded / aws_progress.total ) * 100;

			if ( percentage > 100 )
				percentage = 100;

			$J( progress ).css( { 'width': percentage + '%' } );
		}
		else
		{
			$J( status ).text( 'Uploading...' )
		}
	} );
	uploader.send( function ( err, data )
	{
		if ( err )
		{
			$J( status ).text( 'S3 Upload failed: ' + err )
		}
		else
		{
			var fd = new FormData();
			fd.append( 'uploadID', rgParams.upload_id );
			fd.append( 'itemID', itemid );
			fd.append( 'appID', g_AppId );
			fd.append( 'sessionid', g_sessionID );

			jQuery.ajax( {
				url: 'https://partner.steamgames.com/admin/game/movieuploadcompletecloud/' + itemid,
				type: 'POST',
				cache: false,
				data: fd,
				contentType: false,
				processData: false
			} )
				.done( function( data ) {
					if ( data.success )
					{
						//alert( 'movieuploadbegincloud -success! ' + rgParams.upload_id );

						movieContainer.data( 'upload_name', itemid );
						movieContainer.data( 'cloud_upload_id', rgParams.upload_id );

						$J( progress ).css( { 'width': '100%' } );
						MovieUploadComplete( itemid, movieContainer );
					}
					else
					{
						//alert( 'movieuploadcompletecloud - error ' );
					}
				} )
				.fail( function( jqXHR, textStatus ) {
					//alert( 'movieuploadcompletecloud - failed' );
				} );

		}
	} );
}

function AddMovieForUpload( target, file )
{
	// associate this file with the movie group so we can get it back later
	var group = $J( target ).closest( '.movie_group' );
	group.data( 'file', file );


	var itemid = group.attr( 'itemid' );
	var appid = g_AppId;

	// hide drag & drop, show uploading
	var uploading = group.find( '.movie_uploading' )[0];
	var dragdrop = group.find( '.drag_and_drop' )[0];
	uploading.show();
	dragdrop.hide();

	// show file name and size
	var strSizeFormatted = (file.size / (1024.0 * 1024.0)).toFixed( 2 ).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
	var name = group.find( '.movie_upload_name' )[0];
	$J( name ).text( file.name + ' (' + strSizeFormatted + 'MB)' );

	var cloudData = new FormData();
	cloudData.append('appID', appid);
	cloudData.append('itemID', itemid);
	cloudData.append('file_size', file.size );
	cloudData.append('sessionid', g_sessionID);

	jQuery.ajax({
		url: 'https://partner.steamgames.com/admin/game/movieuploadbegincloud/' + itemid,
		type: 'POST',
		cache: false,
		data: cloudData,
		contentType: false,
		processData: false
	})
	.done(function (data) {
			if (data.success) {
				//alert( 'movieuploadbegincloud -success! ' + JSON.stringify(data) );
				UploadToS3(itemid, group, data);
			}
			else {
				//alert( 'movieuploadbegincloud - error ' );
			}
		})
		.fail(function (jqXHR, textStatus) {
			//alert( 'movieuploadbegincloud - failed' );
		}
	);
}

function MovieUploadComplete( itemid, movieContainer )
{
	var group = $J( movieContainer );
	var cloud_upload_id = movieContainer.data( 'cloud_upload_id' ) || 0;
	var status = movieContainer.find( '.movie_upload_status' )[0];
	$J( status ).text( 'Processing' );

	// make begin upload call
	var fd = new FormData();
	fd.append( 'sessionid', g_sessionID );
	fd.append( 'cloud_upload_id', cloud_upload_id );

	jQuery.ajax( {
		url: 'https://partner.steamgames.com/admin/game/converttrailer/' + itemid,
		type: 'POST',
		cache: false,
		data: fd,
		contentType: false,
		processData: false
	} )
	.done( function( data )
	{
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
	.fail( function( jqXHR, textStatus )
	{
		$J( status ).text( 'Failed Upload' );
		SetMovieError( group, 'An error occurred while uploading this movie', true );
	} );
}

function CheckMovieConvertStatus( movieContainer )
{
	var group = movieContainer;
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

	var bSchedule = false;
	if ( state == 'published' )
	{
		movieUploadUI.hide();
		movieUploadedUI.show();
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
		$J( '#trailer_list' ).prepend( newElements );
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
		var trailerID = select.data( 'trailerid' );

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
			if ( key == trailerID )
				return;

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

	$J( evt.currentTarget ).removeClass( 'drag_over' );

	if ( files.length != 1 )
	{
		alert( 'Please only drop 1 file for upload' );
		return;
	}

	LoadImageFilesForUpload( files, UploadMovieScreenshot.bind( undefined, evt.target ) );
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
	SetMovieConvertState( group, 'noassociation' );
	SetMovieProcessing( group, false );

	return false;
}

function UploadMovieScreenshot( target, rgFiles )
{
	var file = rgFiles[0].image;
	var filename = rgFiles[0].filename;

	if ( file.width !== 1920 || file.height !== 1080 )
	{
		ShowAlertDialog( 'Error: Incorrect Dimensions', 'The dimensions of the image provided are incorrect. Please upload a 1920px wide and 1080px tall image.' );
		return;
	}

	var group = $J( target ).closest( '.movie_group' );
	var itemid = group.attr( 'itemid' );
	var baseitemid = group.attr( 'baseitemid' );
	var screenshot = group.find( '.movie_screenshot' )[0];
	$J( screenshot ).css( { 'background-image': '' } );
	SetMovieProcessing( group, true );

	var fd = new FormData();
	AppendImageToFormData( fd, 'movie_thumb|assets|movie_screenshot|legacy', filename, file );
	fd.append( 'movieItemID', itemid );
	fd.append( 'sessionid', g_sessionID );

	jQuery.ajax( { url: 'https://partner.steamgames.com/admin/game/moviesetdata/' + baseitemid, type: 'POST', data: fd, processData: false, contentType: false } )
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

	if ( bChecked )
	{
		$J( '#checkbox_highlight_ctn_' + id ).show();
	}
	else
	{
		$J( '#checkbox_highlight_ctn_' + id ).hide();
	}
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

function ToggleRatingVisibility( rating )
{
	var bAgreedToDisclaimer = $J( "#DisclaimerCheckbox_" + rating ).attr( "checked" );
	var bHasCheckedRating = $J( "#HasRatingCheckbox_" + rating ).attr( "checked" );
	var container = $J( "#RatingDetails_" + rating );
	var elDisclaimer = $J( '#RatingDisclaimer_' + rating );
	var bHasSavedRating = container.data( "has_rating" );

	elDisclaimer.hide();

	// must agree to disclaimer first before editing rating
	if ( !bHasSavedRating && !bAgreedToDisclaimer && bHasCheckedRating )
	{
		elDisclaimer.animate( { opacity: 'show', height: 'show'}, 500 );
		return;
	}

	if ( bHasCheckedRating )
	{
		container.animate( { opacity: 'show', height: 'show'}, 500 );
	}
	else
	{
		// reset all of the data on clear to prevent incorrect save
		container.animate({opacity: 'hide', height: 'hide'}, 500);

		container.find("input[type=hidden]").each(function (i, e) {
			SetFancyCheckboxUnchecked($J(e).parent().attr("id"));
		});
		container.find("input[type=text]").each(function (i, e) {
			$J(e).val("");
		});
		container.find("textarea").each(function (i, e) {
			$J(e).val("");
		});
		container.find("select").each(function (i, e) {
			$J(e).val("");
		});
	}
}

function OnChangeChildInheritRating()
{
	var childInheritRating = $J( "input[name='app[game][child_inherit_rating_setting]']:checked" ).val();
	$J( "#tab_ratings_content" ).removeClass( "child_inherit_rating_unknown" );
	$J( "#tab_ratings_content" ).removeClass( "child_inherit_rating" );
	$J( "#tab_ratings_content" ).removeClass( "child_do_not_inherit_rating" );

	$J( "#tab_ratings_content" ).addClass( "child_" + childInheritRating );
}

function OnChangeChildInheritSysReq()
{
	var childInheritSysReq = $J( "input[name='app[game][child_inherit_system_requirements]']:checked" ).val();
	var SysReqWrapper = document.getElementById( 'SysReqWrapper'  );
	var SysReqPlatforms = document.getElementById( 'SysReqPlatforms'  );

	if ( 'inherit_sysreq' == childInheritSysReq )
	{
		SysReqWrapper.setAttribute( "hidden", "hidden" );
		SysReqPlatforms.setAttribute( "hidden", "hidden" );
	}
	else
	{
		SysReqWrapper.removeAttribute( "hidden" );
		SysReqPlatforms.removeAttribute( "hidden" );
	}
}

function CopyRatingsFromParent( itemid )
{
	var waitDialog = ShowBlockingWaitDialog( 'Please Wait', 'Please wait while we copy the ratings from this item\'s parent...' );

	var rgParams = {
		sessionid: g_sessionID
	};
	$J.post( 'https://partner.steamgames.com/admin/game/ajaxcopyratingfromparent/' + itemid, rgParams )
	.done( function( data ) {
		waitDialog.Dismiss();
		switch( data.success )
		{
			case 1:
				top.location.reload();
				break;
			default:
				ShowAlertDialog( 'Error', 'There was a problem copying over the parent item\'s ratings: ' + data.success );
				break;
		}
	} );
}

function DeclineRatingQuestionaire( ratingAgency )
{
	$J( "#HasRatingCheckbox_" + ratingAgency ).attr( "checked", false  );
	ToggleRatingVisibility( ratingAgency );
	ShowRatingQuestionaire( false );

	$J( "#ManualRating_" + ratingAgency ).hide();

	$J( "#RatingGenerated" ).fadeOut();
	$J( "#QuestionaireCurrentRating" ).fadeOut();

	$J( "#ratings_questionaire_declined_" + ratingAgency ).val( "true" );
}

function EnterRatingManually( ratingAgency )
{
	$J( "#HasRatingCheckbox_" + ratingAgency ).attr( "checked", true  );

	ToggleRatingVisibility( ratingAgency );
	ShowRatingQuestionaire( false );

	$J( "#RatingGenerated" ).fadeOut();
	$J( "#QuestionaireCurrentRating" ).fadeOut();

	$J( "#ManualRating_" + ratingAgency ).show();
	$J( "#ManualRating_" + ratingAgency )[0].scrollIntoView();
	$J( "#ratings_questionaire_declined_" + ratingAgency ).val( "" );

	var selectRating = $J( "#app_game_ratings_" + ratingAgency + "_rating__entry" );
	var currentRating = selectRating.val();
	if ( currentRating.length == 0 )
	{
		var firstOption = $J( selectRating.children()[1] );
		selectRating.val( firstOption.val() );
	}
}

function AcceptRatingQuestionaire( ratingAgency )
{
	ShowRatingQuestionaire( true );

	$J( "#ManualRating_" + ratingAgency ).hide();

	$J( "#ratings_questionaire_declined_" + ratingAgency).val( "" );
}

function ShowRatingQuestionaire( bShow )
{
	if ( bShow )
	{
		$J( "#RatingQuestionaire" ).animate( { opacity: 'show', height: 'show'}, 500 );
		$J( "#RestartQuestionaireButton" ).fadeOut();
	}
	else
	{
		$J( "#RatingQuestionaire" ).animate( { opacity: 'hide', height: 'hide'}, 500 );
	}
}

function DeselectAllQuestionaireOptions()
{
	$J("a[id^=questionaire_category_]").each( function( idx, elem ) {
		SetFancyCheckboxUnchecked( elem.id );
	});
}

function NoCategoriesApplyInQuestionaire( itemid )
{
	$J( 'a[id^=questionaire_category_]' ).each( function( idx, elem ) {
		SetFancyCheckboxUnchecked( elem.id );
	} );
	ProcessRatingQuestionaire( itemid );
}

function ProcessRatingQuestionaire( itemid )
{
	var waitingDialog = ShowBlockingWaitDialog( 'Computing Rating', 'Please wait while your final rating is computed...' );

	$J.post( 'https://partner.steamgames.com/admin/game/ajaxgeneraterating/' + itemid, $J( "#gameform" ).serialize() )
	.done( function( data ) {
		if ( data.success == 1 )
		{
			ShowRatingQuestionaire( false );
			for ( var i = 0; i < data.ratings.length; ++i )
			{
				var ratingAgencyData = data.ratings[i];
				$J( "#HasRatingCheckbox_" + ratingAgencyData.rating_agency ).attr( "checked", true  );
				ToggleRatingVisibility( ratingAgencyData.rating_agency );

				var selectRating = $J( "#app_game_ratings_" + ratingAgencyData.rating_agency + "_rating__entry" );
				selectRating.val( ratingAgencyData.rating.rating );

				var descriptors = $J( "#app_game_ratings_" + ratingAgencyData.rating_agency + "_descriptors" );
				descriptors.val( ratingAgencyData.rating.descriptors );

				var ageGateCheckboxID = "checkbox_app_game_ratings_" + ratingAgencyData.rating_agency + "_use_age_gate_";
				if ( ratingAgencyData.rating.required_age > 0 )
				{
					SetFancyCheckboxChecked( ageGateCheckboxID );
				}
				else
				{
					SetFancyCheckboxUnchecked( ageGateCheckboxID );
				}

				var requiredAge = $J( "#rating_" + ratingAgencyData.rating_agency + "_required_age" );
				requiredAge.val( ratingAgencyData.rating.required_age > 0 ? ratingAgencyData.rating.required_age : '' );

				$J( "#preview_game_rating_" + ratingAgencyData.rating_agency ).html( ratingAgencyData.preview_html );
				$J( "#preview_game_rating_" + ratingAgencyData.rating_agency ).show();
			}

			$J( "#RestartQuestionaireButton" ).fadeIn();
			$J( "#QuestionaireCurrentRating" ).fadeIn();
			$J( "#JustCompletedQuestionaireNotice" ).fadeIn();
			$J( "#RatingGenerated" ).fadeIn();
		}
		else
		{
			ShowAlertDialog( 'Error', 'There was a problem computing your rating: ' + data.success );
		}
	} )
	.always( function() {
		waitingDialog.Dismiss();
	} );
}

