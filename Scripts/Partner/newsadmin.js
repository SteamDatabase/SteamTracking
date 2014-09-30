
function UpdatePostPreview()
{
	$('news_preview_title').update( $('news_input_title').value );
	$('news_preview_content').update( $('news_input_content').value.replace( /\n/g, '<br>' ) );
}

var g_rgItemData = {};
function SelectAssoc( elem, itemid )
{
	if ( !elem.parentNode )
		return;
	elem.siblings().invoke( 'removeClassName', 'selected' );
	elem.addClassName( 'selected' );
	$('news_assoc_actions').show();
	$('news_assoc_asset_details').hide();
	$('news_assoc_hint').hide();

	if ( g_rgItemData[itemid] )
		SelectAssocFillMenu( g_rgItemData[itemid] )
	else
	{
		$('news_assoc_asset_actions').update('<li>Loading...</li>');
		new Ajax.Request( 
				g_szBaseUrl + '/admin/game/json/' + itemid, 
				{ 
					method: 'get', 
					onSuccess: SelectAssocAjaxComplete.bind( null, elem, itemid )
				} 
			);
	}
}

function RemoveAssociation( elemItem )
{
	if ( elemItem.hasClassName( 'selected') )
	{
		$('news_assoc_actions').hide();
		$('news_assoc_asset_details').hide();
	}
	
	elemItem.parentNode.removeChild( elemItem );
	return true;
}

function OnAssociationAdded()
{
	var itemid = $('add_association_target').value;
	if ( itemid )
	{
		var params = {
			itemid : itemid
		};
		new Ajax.Request( 'https://partner.steamgames.com/admin/store/getitemdisplaydetailsjson/', {
			method: 'post',
			parameters: params,
			onSuccess: function( transport ) {
				var details = transport.responseJSON || [];

				var div = new Element( 'div', { 'class': 'news_assoc_item' } );
				div.observe( 'click', SelectAssoc.bind( null, div, itemid ) );
				div.appendChild( new Element( 'input', { type: 'hidden', name: 'rgItems[]', value: itemid } ) );

				var removeLink = new Element( 'a', { 'href': '#' } );
				removeLink.observe( 'click', RemoveAssociation.bind( null, div ) );
				removeLink.appendChild( new Element( 'img', { src: g_szBaseUrl + '/public/images/marketing_tb_delete.gif' } ) );
				div.appendChild( removeLink );

				var span = new Element( 'span', { 'class': details['cssClass'] } );
				span.update( ' ' + details['name'] );
				div.appendChild( span );
				$('news_assoc_items').appendChild( div );
			}
		} );
	}
	$('add_association_target').value = '';
	$('add_association_compl').value = '';
}

function SelectAssocAjaxComplete( elem, itemid, transport )
{
	g_rgItemData[itemid] = transport.responseJSON;		
	if ( elem.hasClassName( 'selected' ) )
		SelectAssocFillMenu( g_rgItemData[itemid] )
}

function SelectAssocFillMenu( item )
{
	var rgAssetTypes = { header_image: 'Header', small_capsule: 'Small Capsule', large_capsule: 'Large Capsule', main_capsule: 'Main Capsule', screenshots: 'Screenshots' };
	$('news_assoc_asset_actions').update('');
	for ( var assetType in rgAssetTypes )
	{
		if ( !item.assets[assetType] )
			continue;

		var asset = item.assets[assetType];
		if ( asset.image )
			asset = asset.image;
		
		var link = new Element( 'a', {href: '#'} );
		link.update( rgAssetTypes[assetType] );
		
		var li = new Element( 'li', { id: 'asset_' + assetType + '_link' } );
		li.appendChild( link );

		li.observe( 'click', DisplayAssetOptions.bind( null, li, assetType, asset, item.legacy_appid ) );

		if ( assetType != 'screenshots' )
		{
			var filename = asset.english;
			if ( !filename )
				continue;
			var url = g_szStoreGfxUrl + 'apps/' + item.legacy_appid + '/' + filename;
			li.observe( 'mouseover', ImageHoverPreview.bindAsEventListener( null, 'asset_preview', url ) );
			li.observe( 'mouseout', HideImageHover.bindAsEventListener( null, 'asset_preview', li ) );
		}
		$('news_assoc_asset_actions').appendChild( li );
	}
}

var g_strAssetType;
var g_rgCurrentAsset;
var g_rgCurrentAssetAppId;
var g_strAssetBaseURL;

function DisplayAssetOptions( link, assetType, asset, appid )
{
	link.siblings().invoke( 'removeClassName', 'selected' );
	link.addClassName( 'selected' );
	g_strAssetType = assetType;
	g_rgCurrentAsset = asset;
	g_rgCurrentAssetAppId = appid;
	g_strAssetBaseURL = 'http://cdn.akamai.steamstatic.com/steam/apps/' + appid + '/';

	if ( assetType == 'screenshots' )
	{
		$('screenshot_preview_area').update('');
		for ( var i = 0; i < asset.length; i++ )
		{
			var screenshot = asset[i];
			var url = g_szStoreGfxUrl + 'apps/' + appid + '/' + GetSizedScreenshotFilename( screenshot.filename, '.116x65' );
			var imgElem = new Element( 'img', {src: url, 'class': 'screenshot_preview', id: screenshot.filename } );
			imgElem.observe( 'click', DisplayScreenshotHTML.bind( null, screenshot.filename ) );

			$('screenshot_preview_area').appendChild( imgElem );
			if ( (i+1) % 3 == 0 )
				$('screenshot_preview_area').appendChild( new Element( 'br' ) );
		}
		$('screenshot_preview_area').show();
	}
	else
	{
		$('screenshot_preview_area').hide();
	}
	
	DisplayAssetHTML();
	
	$('news_assoc_asset_details').show();
	return false;
} 

function GetSizedScreenshotFilename( filename, size )
{
	return filename.replace( /\.([^.]*)$/, size + '$&' );
}

function DisplayAssetHTML( assetFilename )
{
	if ( !g_rgCurrentAsset.english )
	{
		$('news_assoc_asset_html').value = '';
		return;
	}
	
	var style='';
	
	var floatType = 'none';
	if ( $('asset_float_left').checked )
		style += ' float: left; margin-right: 12px;';
	else if ( $('asset_float_right').checked )
		style += ' float: right; margin-left: 12px;';

	var width = 0, height = 0;
	if ( g_strAssetType == 'header_image' ) { width = 460; height = 215; }
	else if ( g_strAssetType == 'small_capsule' ) { width = 231; height = 87; }
	else if ( g_strAssetType == 'large_capsule' ) { width = 467; height = 181; }
	else if ( g_strAssetType == 'main_capsule' ) { width = 616; height = 353; }

	if ( height && width )
		style += ' height: ' + height + 'px; width: ' + width + 'px;';

	var strHTML = '<a href="http://store.steampowered.com/app/' + g_rgCurrentAssetAppId + '/">';
	strHTML += '<img';
	strHTML += ' src="' + g_strAssetBaseURL + g_rgCurrentAsset.english + '"';
	if ( style )
		strHTML += ' style="' + style + '"';
	strHTML += '></a>';
	$('news_assoc_asset_html').value = strHTML;

	$('news_assoc_asset_html').select();
}

function DisplayScreenshotHTML( filename )
{
	var style='border: none;';
	
	var floatType = 'none';
	if ( $('asset_float_left').checked )
		style += ' float: left; margin-right: 12px;';
	else if ( $('asset_float_right').checked )
		style += ' float: right; margin-left: 12px;';
	
	var strHTML = '<a href="' + g_strAssetBaseURL + GetSizedScreenshotFilename( filename, '.1920x1080' ) + '" target="_blank">'; 
	strHTML += '<img';
	strHTML += ' src="' + g_strAssetBaseURL + GetSizedScreenshotFilename( filename, '.600x338' ) + '"';
	if ( style )
		strHTML += ' style="' + style + '"';
	strHTML += '>';
	strHTML += '</a>';
	$('news_assoc_asset_html').value = strHTML;

	$('news_assoc_asset_html').select();
}

function InsertAssetHTML()
{
	var strHTML = $('news_assoc_asset_html').value;
	var elemContent = $('news_input_content');
	var nSelectionStart = elemContent.selectionStart;

	elemContent.value = elemContent.value.substr( 0, nSelectionStart ) + strHTML + elemContent.value.substr( nSelectionStart );

	elemContent.selectionStart = nSelectionStart + strHTML.length;

	UpdatePostPreview();
}

function OnSteamNewsCheck()
{
	if ( $('news_post_form').elements['post[nOnSteampowered]'].value )
		$('steampowered_flags').show();
	else
		$('steampowered_flags').hide();
		
}

function ReloadNewsPostImages( nId )
{
	new Ajax.Updater(
		'uploaded_images',
		g_szBaseUrl + '/admin/news/postimages/' + nId
	);
}

function DeleteNewsPostImage( nId, imageId )
{
	new Ajax.Updater(
		'uploaded_images',
		g_szBaseUrl + '/admin/news/postimagedelete/' + nId,
		{ parameters: { imageid: imageId } }
	);
}

// for news home page
function FilterByType( select )
{
	var types = new Array( 'SteamNews', 'Valvesoftware.com', 'TF2Blog', 'L4DBlog', 'SteamBlog' );
	var elemList = $('news_list');
	var elemListParent = elemList.parentNode;
	elemListParent.removeChild( elemList );

	var elemHiddenList = $('hidden_news_list');
	var elemHiddenParent = elemHiddenList.parentNode;
	elemHiddenParent.removeChild( elemHiddenList );

	var classname = select.value ? 'news_' + select.value : '';

	var rgNodesToHide = [];
	var rgNodesToShow = [];
	
	var rgChildren = elemList.childNodes;
	for ( var i = 0; i < rgChildren.length; i++ )
	{
		var child = rgChildren[i];
		if ( child.nodeType != child.ELEMENT_NODE )
			continue;
		if ( classname && !$(child).hasClassName( classname ) )
			rgNodesToHide[ rgNodesToHide.length ] = child;
	}
	rgChildren = elemHiddenList.childNodes;
	for ( i = 0; i < rgChildren.length; i++ )
	{
		var child = rgChildren[i];
		if ( child.nodeType != child.ELEMENT_NODE )
			continue;
		if ( !classname || $(child).hasClassName( classname ) )
			rgNodesToShow[ rgNodesToShow.length ] = child;
	}

	for ( i = 0; i < rgNodesToHide.length; i++ )
	{
		elemList.removeChild( rgNodesToHide[i] );
		elemHiddenList.appendChild( rgNodesToHide[i] );
	}

	for ( i = 0; i < rgNodesToShow.length; i++ )
	{
		elemHiddenList.removeChild( rgNodesToShow[i] );
		elemList.appendChild( rgNodesToShow[i] );
	}

	elemListParent.appendChild( elemList );
	elemHiddenParent.appendChild( elemHiddenList );
}

function SetDisplayAuthor( strName )
{
	var curValue = $('display_author_entry').value;
	if ( !curValue || curValue == 'Valve' || curValue == 'TF2 Team' || curValue == 'L4D Team' )
		$('display_author_entry').value = strName;
}