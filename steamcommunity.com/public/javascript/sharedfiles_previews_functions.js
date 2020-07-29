
var publishedfileid = 0;
var gPreviewImages = new Array();

function AddYouTubePreview()
{
	$( 'PreviewFileYouTube' ).youtubeurl.value.strip();
	if ( $( 'PreviewFileYouTube' ).youtubeurl.value.length == 0 ||
		( $( 'PreviewFileYouTube' ).youtubeurl.value.indexOf( "youtube.com") == - 1 &&
			$( 'PreviewFileYouTube' ).youtubeurl.value.indexOf( "youtu.be" ) == - 1 ) )
	{
		alert( 'Please enter a valid YouTube™ URL.' );
		return;
	}
	$('PreviewFileYouTube').submit();
}

function AddSketchfabPreview()
{
	$( 'PreviewFileSketchfab' ).sketchfaburl.value.strip();
	if ( $( 'PreviewFileSketchfab' ).sketchfaburl.value.length == 0 ||
		( $( 'PreviewFileSketchfab' ).sketchfaburl.value.indexOf( "sketchfab.com") == - 1 &&
			$( 'PreviewFileSketchfab' ).sketchfaburl.value.indexOf( "models" ) == - 1 ) )
	{
		alert( '#SharedFiles_PreviewSketchfab_NoURL' );
		return;
	}
	$('PreviewFileSketchfab').submit();
}

function UploadPreviewFile( publishedFileID )
{
	// validate that the user chose a file
	if ( $( 'PreviewFileUpload' ).file.value.length == 0 )
	{
		alert( 'Please choose a preview file to upload.' );
		return false;
	}
	// validate that the file is an image (may have multiple files)
	var input = $( 'PreviewFileUpload' ).file;
	var bValidExtension = false;
	var validExtensions = new Array( "jpg", "jpeg", "gif", "png" );
	for ( var i = 0; i < input.files.length; ++i )
	{
		var filename = input.files[i].name;
		var length = filename.length;
		var pos = filename.lastIndexOf( "." ) + 1;
		var ext = filename.substring( pos, length ).toLowerCase();
		for ( var j = 0; j < validExtensions.length; ++j )
		{
			if ( validExtensions[j] == ext )
			{
				bValidExtension = true;
				break;
			}
		}
		if ( !bValidExtension )
		{
			alert( 'Previews can only be jpeg, gif, or png image files.' );
			return false;
		}

		if ( typeof FileReader !== "undefined" )
		{
			var size = input.files[i].size;
			if ( size > 2097152 )
			{
				alert( 'Preview images cannot be larger than 2 MB. This image is too large: ' + filename );
				return false;
			}
		}
	}

	// this is a prefix
	$('PreviewFileUpload').cloudfilenameprefix.value = publishedFileID + '_preview_';

	$('PreviewFileUpload').submit();
	return true;
}

/* New sorting */
function OnPreviewReorder( elContainer, formName )
{
	var rgChildElements = elContainer.childElements().grep( new Selector( "div.manageSortablePreview" ) );
	for ( var i = 0; i < rgChildElements.length; i++ )
	{
		var elChild = rgChildElements[i];
		var elInput = elChild.down( '.preview_input' );
		elInput.value = i;
		var elNumber = elChild.down( '.manageSortablePreviewIndex' );
		if ( elNumber )
		{
			elNumber.update( i + 1 );
		}
	}

	$(formName).request(
		{
			onSuccess: function( transport )
			{
				var json = transport.responseText.evalJSON();
				switch ( json['success'] )
				{
					case 1:
						break;
					default:
						alert( "Failure code: " + json['success'] );
						break;
				}
			}
		}
	);
}

function RemovePreviewForPublishedFile( elemID, publishedFileID, previewID )
{
	var options = {
		method: 'post',
		postBody: 'id=' + publishedFileID + '&sessionid=' + g_sessionID + '&previewid=' + previewID + '&ajax=true',
		onSuccess: function(transport)
		{
			var json = transport.responseText.evalJSON();
			switch ( json['success'] )
			{
				case 1:
					$( elemID ).remove();
					break;
				default:
					alert( "Failure code: " + json['success'] );
					break;
			}
		}
	};
	new Ajax.Request(
		'https://steamcommunity.com/sharedfiles/removepreview',
		options
	);
}

/* uploading */

function ListSelectedPreviewFiles()
{
	var input = $( 'files' );
	var list = $( 'FileList' );

	while ( list.hasChildNodes() )
	{
		list.removeChild(list.firstChild);
	}

	if ( input.files.length >= 1 )
	{
		// for every file...
		for ( var i = 0; i < input.files.length; ++i )
		{
			//add to list
			var li = document.createElement('li');
			li.textContent = 'File  ' + (i + 1) + ':  ' + input.files[i].name;
			list.appendChild(li);
		}
	}
}

function StartPreviewFileUpload()
{
	if ( UploadPreviewFile( publishedfileid ) )
	{
		$( 'PreviewFileUploadProgress' ).show();
		$( 'PreviewFileUpload' ).hide();
	}
}

function DoneFileUpload( success, uploadDetailsArray )
{
	$( 'PreviewFileUploadProgress' ).hide();
	$( 'PreviewFileUpload' ).show();

	var result = '';
	switch ( success )
	{
		case "1":
			break;
		default:
			alert( "file upload failed: " + success );
			return;
	}

	var numFiles = uploadDetailsArray.length;
	for ( var i = 0; i < numFiles; ++i )
	{
		var uploadDetails = uploadDetailsArray[i];

		var htmlID = 'preview_' + uploadDetails['previewid'];

		// find existing image if it is there
		var existing = $( htmlID );
		if ( existing )
		{
			var image = existing.down( 'img' );
			image.src = uploadDetails['url'] + '?imw=256&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false';
			for ( var j = 0; j < gPreviewImages.length; ++j )
			{
				var previewImage = gPreviewImages[j];
				if ( previewImage['previewid'] == uploadDetails['previewid'] )
				{
					gPreviewImages[j] = uploadDetails;
				}
			}
			continue;
		}
		gPreviewImages.push( uploadDetails );

		var newPreview = new Element( 'div', { 'class' : 'manageSortablePreview', 'id': htmlID } );
		var divIndex = new Element( 'div', { 'class' : 'manageSortablePreviewIndex' } );
		divIndex.innerHTML = uploadDetails['sortorder'] + 1;
		newPreview.appendChild( divIndex );
		var imageDiv = new Element( 'div', { 'class' : "manageSortablePreviewImageContainer" } );
		var image = new Element( 'img', { 'src' : uploadDetails['url'] + '?imw=256&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false', 'title' : uploadDetails['filename'] } );
		imageDiv.appendChild( image );
		newPreview.appendChild( imageDiv );
		var divControls = new Element( 'div', { 'class' : 'manageSortablePreviewControls' } );
		var javascriptLink = "javascript:RemovePreviewForPublishedFile( '" + htmlID + "', publishedfileid, '" + uploadDetails['previewid'] + "' );";
		var removeLink = new Element( 'a', { 'class' : 'btn_grey_black btn_small_thin', 'href' : javascriptLink } );
		var removeImage = new Element( 'img', { 'src' : "https://community.cloudflare.steamstatic.com/public/images//sharedfiles/icons/icon_delete.png" } );
		removeLink.appendChild( removeImage );
		divControls.appendChild( removeLink );
		newPreview.appendChild( divControls );
		var inputSortOrder = new Element( 'input', { 'type' : 'hidden', 'class' : 'preview_input', 'name' : 'previews[' + uploadDetails['previewid'] + '][sort_order]', 'value' : uploadDetails['sortorder'] + 1 } );
		newPreview.appendChild( inputSortOrder );
		var divClear = new Element( 'div', { 'style' : 'clear: both' } );
		newPreview.appendChild( divClear );
		$( 'sortable_previews' ).appendChild( newPreview );
	}

	if ( $('SortablePreviewsArea') )
		$('SortablePreviewsArea').show();

	Position.includeScrollOffsets = true;
	Position.prepare();
	Sortable.create( 'sortable_previews', { tag: 'div', overlap: 'horizontal', constraint: false, onUpdate: OnPreviewReorder } );
	return true;
}

/* sorting */
function SortPreviewImages( func )
{
	if ( gPreviewImages.length == 0 )
		return;

	// sort the preview images by the func
	gPreviewImages.sort( func );
	// update the input fields
	for ( var i = 0; i < gPreviewImages.length; ++i )
	{
		var previewImage = gPreviewImages[i];
		var htmlID = 'preview_' + previewImage['previewid'];
		var elChild = $( htmlID );
		var elInput = elChild.inputField || elChild.down( '.preview_input' );
		elChild.inputField = elInput; // cache it off for future lookups
		elInput.value = i;
		var elNumber = elChild.down( '.manageSortablePreviewIndex' );
		if ( elNumber )
		{
			elNumber.update( i + 1 );
		}
	}
	// now sort the divs
	var rgChildElements = $( 'sortable_previews' ).childElements().grep( new Selector( "div.manageSortablePreview" ) );
	rgChildElements = rgChildElements.toArray();
	rgChildElements.sort(
		function( a, b )
		{
			var elInputA = a.inputField;
			var elInputB = b.inputField;
			return parseInt( elInputA.value ) - parseInt( elInputB.value );
		} );
	// and update the DOM
	for ( var i = 0; i < rgChildElements.length; ++i )
	{
		var elChild = rgChildElements[i];
		var parent = elChild.parentNode;
		parent.removeChild( elChild );
		parent.appendChild( elChild );
	}
	// finally, submit the request to the back-end
	$('PreviewsForm').request(
		{
			onSuccess: function( transport )
			{
				var json = transport.responseText.evalJSON();
				switch ( json['success'] )
				{
					case 1:
						break;
					default:
						alert( "Failure code: " + json['success'] );
						break;
				}
			}
		}
	);
}

function SortPreviewImagesByFileName()
{
	SortPreviewImages( function(a,b){ return a['filename'].localeCompare( b['filename'] ); } );
}

function SortPreviewImagesByDateUploaded()
{
	SortPreviewImages( function(a,b){ return a['previewid'].localeCompare( b['previewid'] ); } );
}

function ExpandAllImagesArea()
{
	$( 'ExpandAllImagesAreaBtn').hide();
	$('sortable_previews').addClassName( 'expanded' );
}

