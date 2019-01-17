
function SelectBackground()
{
	var rgOptions = [];
	for( var i=0; i<g_rgProfileBackgrounds.length; i++)
	{
		var bg = g_rgProfileBackgrounds[i]; // @TODO: Escape ????
		var strXML = '<Panel class="ProfileSelectionWrapper">' +
			'<Image src="' + EscapePanoramaText( GetBackgroundURL( bg.image_large, '140x90' ) ) + '"></Image>' +
			'<Panel class="ProfileSelectionText">' +
			'<Label text="' + EscapePanoramaText( bg.name ) + '" ></Label>' +
			'<Label text="' + EscapePanoramaText( g_rgProfileBackgroundAppNames[bg.appid] ) + '" ></Label>' +
			'</Panel>' +
			'</Panel>';

		var onActivate = function( bg ) {
			return function() {
				$('#SelectedBackgroundImage').SetImage( GetBackgroundURL( bg.image_large, '140x90' ) );
				$('#SelectedBackgroundName').text = bg.name ;
				$('#SelectedBackgroundGame').text = g_rgProfileBackgroundAppNames[bg.appid] ;
				$('#SelectedBackground').SetAttributeString( 'selected-background-id', bg.communityitemid );

				CloseBigPicturePopup();
			}
		}(bg);

		rgOptions.push({ content_xml: strXML, onactivate: onActivate, css_classes: [ 'Button', 'ImageSelectionButton' ] });
	}

	ShowPopupMenu(rgOptions, { additional_css_includes: [ '<include src="https://steamcommunity-a.akamaihd.net/public/css/bigpicture/profile.css" />' ] });
}

function ShowAvatarPicker()
{
	$.AsyncWebRequest( "https:\/\/steamcommunity.com\/actions\/GameAvatars\/?json=1",
		{
			type: 'GET',
			success: function(rgData)
			{
				ShowAvatarDialog( rgData );
			},
			complete: function()
			{
				g_bGridItemsLoading = false;
				//$('#ContentLoading').RemoveClass('Visible');

			}

		}
	);


}


function GetImageLinkFromHash( baseURL, hash, size )
{
	if( hash.length == 44) // hash with extension included
	{
		var ext = hash.substr( -4 );
		hash = hash.substr( 0, -4 );
	}
	else // no extension assume jpg
	{
		ext = '.jpg';
	}

	var subDir = hash.substr( 0, 2 );

	if ( size == 'full' )
	{
		ext = '_full' + ext;
	}
	else if ( size == 'medium' )
	{
		ext = '_medium' + ext;
	}

	// this is https-aware base url
	return baseURL + subDir + '/' + hash + ext;
}

function ShowAvatarDialog( rgData )
{
	var rgOptions = [];
	var n = 0;
	var baseURL = rgData.baseAvaLink;

	var rgBuckets = [ rgData.rgRecentGames, rgData.rgOwnedGames, rgData.rgOtherGames ];
	var rgCallbackMap = {};

	var onActivate = function ( avatar, game, baseURL )
	{
		return function()
		{
			//$.Msg(avatar.ordinal);
			//$.Msg(game.appid);
			//$.Msg('https://steamcommunity.com/games/' + game.appid + '/selectAvatar/');

			$('#AvatarFull').SetImage(GetImageLinkFromHash(baseURL, avatar.avatar_hash, 'full'));
			$('#AvatarMedium').SetImage(GetImageLinkFromHash(baseURL, avatar.avatar_hash, 'medium'));
			$('#AvatarSmall').SetImage(GetImageLinkFromHash(baseURL, avatar.avatar_hash));
			CloseBigPicturePopup();

			$.AsyncWebRequest( 'https://steamcommunity.com/games/' + game.appid + '/selectAvatar/',
				{
					type: 'POST',
					data: {
						sessionid: g_sessionID,
						selectedAvatar: avatar.ordinal,
						json: 1
					}
				}
			);
		}
	}


	for( var h=0; h<rgBuckets.length; h++)
	{
		var rgBucket = rgBuckets[h];
		for ( var i = 0; i < rgBucket.length; i++ )
		{
			var strXML = '<Panel class="Button AvatarOptionGame">' +
				'<Label class="StdLabel" text="' + EscapePanoramaText(rgBucket[i].name) + '"></Label>' +
				'<Panel class="AvatarOptions">';

			var oPanel = $.CreatePanel( 'Panel', $('#Scratch'), '' );
			oPanel.AddClass('Button');
			oPanel.AddClass('AvatarOptionGame');
			oPanel.selectionpos_x="auto";
			oPanel.selectionpos_y="auto";
			oPanel.tabindex="auto";

			var oLabel = $.CreatePanel( 'Label', oPanel, '' );
			oLabel.text = rgBucket[i].name;

			var oContainer = $.CreatePanel( 'Panel', oPanel, '' );
			oContainer.AddClass('AvatarOptions');


			for ( var j = 0; j < rgBucket[i].avatars.length; j++ )
			{
				var avatar = rgBucket[i].avatars[j];
				//strXML += '<Button id="' + avatar.avatar_hash + '" selectionpos="auto" tabindex="auto"><Image src="' + EscapePanoramaText(GetImageLinkFromHash(baseURL, avatar.avatar_hash, 'medium')) + '"></Image></Button>'
				var oButton = $.CreatePanel('Button', oContainer, '');
				oButton.tabindex="auto";
				oButton.selectionpos_x="auto";
				oButton.selectionpos_y="auto";
				$.RegisterEventHandler('Activated', oButton, onActivate( avatar, rgBucket[i], baseURL ));

				var oImage = $.CreatePanel('Image', oButton, '');
				oImage.SetImage(GetImageLinkFromHash(baseURL, avatar.avatar_hash, 'full'));

			}



			rgOptions.push({
				content_panel: oPanel, wrapper_tag: 'Panel'
			});
			//$.Msg(strXML);

			//if( n++ > 2)
			//	break;

		}
	}

	ShowPopupMenu(rgOptions, { callback_map: rgCallbackMap } );

}

function SelectPrimaryGroup()
{
	var rgOptions = [];
	for( var i=0; i<g_rgGroups.length; i++)
	{
		var group = g_rgGroups[i]; // @TODO: Escape ????
		var strXML = '<Panel class="ProfileSelectionWrapper">' +
			'<Image src="' + EscapePanoramaText( group.avatar ) + '"></Image>' +
			'<Panel class="ProfileSelectionText">' +
			'<Label text="' + group.name + '" ></Label>' +
			'</Panel>' +
			'</Panel>';

		var onActivate = function( group ) {
			return function() {
				$('#PrimaryGroupImage').SetImage( group.avatar );
				$('#PrimaryGroupName').text = group.name ;
				$('#PrimaryGroup').SetAttributeString( 'primary-group-id', group.id );
				CloseBigPicturePopup();
			}
		}(group);

		rgOptions.push({ content_xml: strXML , onactivate: onActivate, css_classes: [ 'Button', 'ImageSelectionButton' ] });
	}

	ShowPopupMenu(rgOptions, { additional_css_includes: [ '<include src="https://steamcommunity-a.akamaihd.net/public/css/bigpicture/profile.css" />' ] });
}


function GetBackgroundURL( strBackgroundImage, strSize )
{
	return 'https://steamcommunity-a.akamaihd.net/economy/profilebackground/' + strBackgroundImage + '?size=' + strSize + '&v=2';
}


function onChangeCountry()
{
	var oCountryCode = $("#CountryCode").GetSelected();
	var strCountryCode = oCountryCode.GetAttributeString('countrycode', "");

	// Rebuild state options, destroy city options.
	$("#StateCode").RemoveAllOptions();
	$("#CityCode").RemoveAllOptions();

	var rgData = {
		sessionID: g_sessionID,
		type:	'locationUpdate',
		sId: g_steamID64,
		json: '1',
		country: strCountryCode
	};

	var strURL = 'https://steamcommunity.com/actions/EditProcess';

	$.AsyncWebRequest(strURL,
		{
			type: 'POST',
			data: rgData,
			success: function( data )
			{
				PopulateStates(data.state);
				PopulateCities(data.city);
			}
		}
	);

}

function onChangeState()
{

	var oCountryCode = $("#CountryCode").GetSelected();
	var strCountryCode = oCountryCode.GetAttributeString('countrycode', "");

	var oStateCode = $("#StateCode").GetSelected();
	var strStateCode = oStateCode.GetAttributeString('statecode', "");

	// Rebuild city options.
	$("#CityCode").RemoveAllOptions();

	var rgData = {
		sessionID: g_sessionID,
		type:	'locationUpdate',
		sId: g_steamID64,
		json: '1',
		country: strCountryCode,
		state: strStateCode
	};


	var strURL = 'https://steamcommunity.com/actions/EditProcess';

	$.AsyncWebRequest(strURL,
		{
			type: 'POST',
			data: rgData,
			success: function( data )
			{
				PopulateCities(data.city);
			}
		}
	);
}

function PopulateStates( rgRows )
{
	$.Each( rgRows, function( row )
	{
		var oStateDD = $('#StateCode');

		var strCode = row.attribs.key;
		var strLabel = row.val;

		var key = 'state_' + strCode;
		var oOpt = $.CreatePanel('Label', oStateDD, key);
		oOpt.text = strLabel;
		oOpt.SetAttributeString('statecode', strCode);
		//oOpt.SetAttributeString('hascities', g_rgStates[i].hascities);

		oStateDD.AddOption(oOpt);
	});

	var oStateDD = $('#StateCode');
	oStateDD .SetSelected( 'state_' );
}

function PopulateCities( rgRows )
{
	$.Each( rgRows, function( row )
	{
		var oCityDD = $('#CityCode');

		var strCode = row.attribs.key;
		var strLabel = row.val;

		var key = 'city_' + strCode;
		var oOpt = $.CreatePanel('Label', oCityDD, key);
		oOpt.text = strLabel;
		oOpt.SetAttributeString('cityid', strCode);
		//oOpt.SetAttributeString('hascities', g_rgStates[i].hascities);

		oCityDD.AddOption(oOpt);
	});
	var oCityDD = $('#CityCode');
	oCityDD.SetSelected( 'country_' );
}




function UpdateProfile()
{
	// First, pull out our profile values
	var strPersonaName = $('#PersonaName').text;
	var strRealName = $('#RealName').text;
	var oCountryCode = $("#CountryCode").GetSelected();
	var oStateCode = $("#StateCode").GetSelected();
	var oCityCode = $("#CityCode").GetSelected();
	var strSummary = $('#SummaryField').text;
	var strCustomURL = $('#CustomURL').text;

	var strURL = g_strProfileURL + "/edit";
	var rgData = {
		sessionID: g_sessionID,
		type:	'profileSave',
		json: '1',
		personaName: strPersonaName,
		real_name: strRealName,
		country: oCountryCode ? oCountryCode.GetAttributeString('countrycode', "") : "",
		state: oStateCode ? oStateCode.GetAttributeString('statecode', "") : "",
		city: oCityCode ? oCityCode.GetAttributeString('cityid', "") : "",
		primary_group_steamid: $('#PrimaryGroup') ? $('#PrimaryGroup').GetAttributeString('primary-group-id', 0) : 0,
		profile_background: $('#SelectedBackground') ? $('#SelectedBackground').GetAttributeString('selected-background-id', 0) : 0,
		customURL: strCustomURL,
		summary: strSummary
	};

	$.AsyncWebRequest(strURL,
		{
			type: 'POST',
			data: rgData,
			success: function( data )
			{
				if( data.success == 1 )
				{
					alert( "Changes saved.", "My Profile" );
				}
			}
		}
	);


}

function SavePrivacySettings()
{
	var rgPrivacySettings = {
		PrivacyProfile: $('#privacySetting_private').GetSelectedButton().GetAttributeString('value', ''),
		PrivacyOwnedGames: $('#gameLibraryPrivacySetting_private').GetSelectedButton().GetAttributeString('value', ''),
		PrivacyPlaytime: $('#PlaytimePrivacy').checked ? 1 : 3,
		PrivacyInventory: $('#inventoryPrivacySetting_private').GetSelectedButton().GetAttributeString('value', ''),
		PrivacyInventoryGifts: $('#InventoryGiftPrivacy').checked ? 1 : 0
	};

	var rgData = {
		sessionid: g_sessionID,
		type:	'profileSettings',
		eCommentPermission: $('#CommentPermissionRadio').GetSelectedButton().GetAttributeString('value', ''),
		Privacy: JSON.stringify( rgPrivacySettings )
	};

	var strURL = g_strProfileURL + "/ajaxsetprivacy";

	$.AsyncWebRequest(strURL,
		{
			type: 'POST',
			data: rgData,
			success: function( data )
			{
				$.Msg(data)
				if( data.success == 1 )
				{
					alert( "Changes saved.", "My Profile" );
				}
			}
		}
	);
}