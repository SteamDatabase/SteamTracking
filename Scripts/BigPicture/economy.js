


function ImageURL( imageName, x, y )
{
	if ( imageName )
	{
		x = x ? x : 0;
		y = y ? y : 0;
		var strSize = '';
		if ( x != 0 || y != 0 )
			strSize = '/' + x + 'x' + y;
		return 'https://steamcommunity-a.akamaihd.net/economy/image/' + (imageName) + strSize;
	}
	else
		return ''; //https://steamcommunity-a.akamaihd.net/public/images/trans.gif';
}

function AddActionButton( item, action, container )
{
	b = $.CreatePanel( 'Button', container, '' );
	l = $.CreatePanel( 'Label', b, '' );
	l.text = action.name;

	var strLink = action.link.replace( "%assetid%", item.id );
	strLink = strLink.replace( "%contextid%", item.contextid );
	strLink = strLink.replace( "%owner_steamid%", g_strOwnerSteamID );

	b.SetPanelEvent( 'onactivate', function()
	{
		if ( strLink.substring( 0, 5 ) == 'http:' || strLink.substring( 0, 6 ) == 'https:' )
			$.DispatchEvent( 'BrowserGoToURL', $.GetContextPanel(), strLink );
		else if( strLink.substring( 0, 6 ) == 'steam:' )
			$.DispatchEvent( 'ExecuteSteamURL', strLink );
		else
			$.Msg( 'Imeplement: '+strLink );
	} );

}

var g_LastGridFocus = null;
function PopulateDetails( item, oDetail, bAllowBorder, rgAppContextData )
{
	if ( typeof bAllowBorder === undefined )
	{
		bAllowBorder = true;
	}

	$.GetContextPanel().AddClass( 'ItemDetailView' );

	var	image_name = item.icon_url_large ? item.icon_url_large : item.icon_url;
	oDetail.FindChildrenWithClassTraverse('ItemDetailImage')[0].SetImage( ImageURL( image_name, 384, 384) );

	var oItemName = oDetail.FindChildrenWithClassTraverse('ItemName')[0];
	oItemName.text = $.html_entity_decode( item.name );

	if ( item.name_color )
	{
		oItemName.style.color = '#'+item.name_color+';'
		if ( bAllowBorder )
		{
			oDetail.style.border = '3px solid #'+item.name_color;
		}
	}
	else
	{
		oItemName.style.color = null;
		oDetail.style.border = null;
	}

	var oGameIcon = oDetail.FindChildrenWithClassTraverse('GameIcon')[0];
	var oGameName = oDetail.FindChildrenWithClassTraverse('GameName')[0];

	if ( item.appid && rgAppContextData[item.appid] )
	{
		var rgAppData = rgAppContextData[item.appid];
		oGameIcon.SetImage( rgAppData.icon );
		oGameName.text = rgAppData.name;
	}
	else
	{
		oGameIcon.SetImage( '' );
		oGameName.text = 'no ' + item.appid;
	}


	var oItemType = oDetail.FindChildrenWithClassTraverse('ItemType')[0];
	oItemType.text = $.html_entity_decode( item.type );

	dp = oDetail.FindChildrenWithClassTraverse('ItemDescriptions')[0];
	dp.RemoveAndDeleteChildren();

	if ( item.panorama_description )
	{
		dp.LoadLayoutFromStringAsync( item.panorama_description, true, true );
	}
	else
	{
		for( i in item.descriptions )
		{
			desc = item.descriptions[i];
			if ( desc.value )
			{
				l = $.CreatePanel( 'Label', dp, '' );
				if ( desc.type && desc.type == 'html' )
					l.html = true;

				if ( desc.label )
					l.text = desc.label + ': '+ desc.value;
				else
					l.text = desc.value;

				if ( desc.color )
				{
					l.style.color = '#'+desc.color+'ff;';
				}
			}
		}
	}

	fw = oDetail.FindChildrenWithClassTraverse('FraudWarnings')[0];
	fw.RemoveAndDeleteChildren();
	fw.visible = false;
	for( i in item.fraudwarnings )
	{
		fw.visible = true;
		l = $.CreatePanel( 'Label', fw, '' );
		l.text = $.html_entity_decode( item.fraudwarnings[i] );
	}

	tags = oDetail.FindChildrenWithClassTraverse('ItemTags')[0];
	var sTagList = "";
	if ( item.tags )
	{
		for ( var i = 0; i < item.tags.length; i++ )
		{
			var tag = item.tags[i];
			if ( !tag.name )
				continue;

			if( sTagList != "" )
				sTagList += ", ";
			else
				sTagList = 'Tags: ';

			sTagList += tag.name;
		}
	}
	
	tags.visible = sTagList != '' ? true : false;
	tags.text = sTagList;
}

function ShowDetails( item, p, oDetail )
{
	g_LastGridFocus = p;

	// Populate actions
	var cActions = 0;
	leftDetail = $('#LeftDetail');
	leftDetail.RemoveAndDeleteChildren();


	if ( item.actions )
	{
		for( i in item.actions )
		{
			AddActionButton( item, item.actions[i], leftDetail );
			++cActions;
		}
	}

	if ( item.owner_actions && g_bViewingOwnProfile )
	{
		for( i in item.owner_actions )
		{
			AddActionButton( item, item.owner_actions[i], leftDetail );
			++cActions;
		}
	}

	if ( cActions == 0 )
	{
		$('#RightInner').SetFocus();
		oDetail.AddClass( 'Center' );
		leftDetail.visible = false;
	}
	else
	{
		$('#DetailBody').SetFocus();
		oDetail.RemoveClass( 'Center' );
		leftDetail.visible = true;
	}
}

function CloseItemDetails()
{
	$.GetContextPanel().RemoveClass( 'ItemDetailView' );
	if ( g_LastGridFocus && g_LastGridFocus.IsValid() )
		g_LastGridFocus.SetFocus();
	else
		$('#ItemGrid').SetFocus();	
}




