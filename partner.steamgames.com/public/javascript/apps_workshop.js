
var g_ConsumerAppID = 0;

function OnTagReorder( elContainer )
{
	var rgChildElements = elContainer.childElements().grep( new Selector( "div.tag_container" ) );
	for ( var i = 0; i < rgChildElements.length; i++ )
	{
		var elChild = rgChildElements[i];
		var elInput = elChild.down( '.tag_input' );
		var n = elInput.name.lastIndexOf( "[" );
		elInput.name = elInput.name.substring( 0, n ) + '[' + i + ']';
	}
}

function OnServiceProviderReorder( elContainer )
{
	var rgChildElements = elContainer.childElements().grep( new Selector( "div.tag_container" ) );
	for ( var i = 0; i < rgChildElements.length; i++ )
	{
		var elChild = rgChildElements[i];
		var elInput_steamid = elChild.down( '.service_provider_input_steamid' );
		var elInput_url = elChild.down( '.service_provider_input_url' );
		var elInput_desc = elChild.down( '.service_provider_input_description' );

		var n = elInput_steamid.name.lastIndexOf( "[" );
		elInput_steamid.name = elInput1.name.substring( 0, n ) + '[' + i + '][steamid]';

		var n = elInput_url.name.lastIndexOf( "[" );
		elInput_url.name = elInput2.name.substring( 0, n ) + '[' + i + '][url]';

		var n = elInput_desc.name.lastIndexOf( "[" );
		elInput_desc.name = elInput2.name.substring( 0, n ) + '[' + i + '][description]';
	}
}

function AddServiceProviderCategory()
{
	var parent = $( 'service_provider_categories' );
	var index = parent.children.length;
	var arrayKey = 'service_provider_categories[' + index + ']';
	var div = new Element( 'div', { 'id' : 'service_provider_categories_' + index } );
	div.innerHTML = "New - Category Name (can be empty):";
	var inputEnglish = new Element( 'input', { 'name': arrayKey + '[category_name]' } );
	div.appendChild( inputEnglish );
	parent.appendChild( div );
	$('ServiceProvidersForm').submit();
}

function RemoveServiceProviderCategory( id )
{
	$( id ).remove();
	$('ServiceProvidersForm').submit();
}

function RemoveServiceProvider( id )
{
	$( id ).remove();
	$('ServiceProvidersForm').submit();
}

function AddServiceProvider( htmlID, addServiceProviderButton, category )
{
	var steamid = prompt( 'Please enter the organization\'s 64 bit Steam ID', '' );
	if ( !steamid )
	{
		return;
	}
	var url = prompt( 'Please enter the organization\'s website' );
	if ( !url )
	{
		return;
	}

	var parent = $( 'service_provider_categories_' + category );
	var index = parent.children.length;
	var name = 'service_provider_categories[' + category + '][service_providers][' + index + ']';
	var input1 = new Element( 'input', { 'name' : name + '[steamid]', 'id' : name + '[steamid]', 'value' : steamid } );
	var input2 = new Element( 'input', { 'name' : name + '[url]', 'id' : name + '[url]', 'value' : url } );
	var input3 = new Element( 'input', { 'name' : name + '[description]', 'id' : name + '[description]', 'value' : '' } );

	parent.appendChild( new Element( 'br' ) );
	var span = new Element( 'span' );
	span.innerHTML = "New:&nbsp;";
	parent.insertBefore( span, $( addServiceProviderButton ) );
	parent.insertBefore( input1, $( addServiceProviderButton ) );
	parent.insertBefore( input2, $( addServiceProviderButton ) );
	parent.insertBefore( input3, $( addServiceProviderButton ) );
	parent.insertBefore( new Element( 'br' ), $( addServiceProviderButton ) );
	$('ServiceProvidersForm').submit();
}

function AddCreatorAppId()
{
	var appid = $('add_creator_app_id').value;

	if ( appid == '' || isNaN( appid ) )
	{
		alert( $('add_creator_app_id').value + ' is not a valid app id' );
		return;
	}

	try
	{
		new Ajax.Request('https://partner.steamgames.com/apps/addworkshopcreatorapp/' + g_ConsumerAppID,
			{
				method:'post',
				parameters: { 'creator_app_id' : appid, 'sessionid': g_sessionID },
				onSuccess: function(transport)
				{
					if ( transport.responseText ){
						try {
							var result = transport.responseText.evalJSON(true);
						} catch ( e ) {
							// Failure
							OnAddCreatorAppIdFailure();
						}

						// Success...
						if ( result.success == 1 )
						{
							OnAddCreatorAppIdSuccess( appid )
							return;
						}
						else
						{
							OnAddCreatorAppIdFailure();
							return;
						}
					}

								},
				onFailure: function()
				{
					OnAddCreatorAppIdFailure();
				}
			});
	}
	catch(e)
	{
		OnAddCreatorAppIdFailure();
	}
}

function OnAddCreatorAppIdSuccess( appid )
{
	appid = parseInt(appid, 10);
	var app_row = $('creator_app_' + appid );
	if ( !app_row )
	{
		var app_table = $('creator_app_table');
		var app_row = app_table.insertRow();
		var cell1 = app_row.insertCell(0);
		var cell2 = app_row.insertCell(1);
		cell1.innerHTML = appid;
		cell2.innerHTML = '<a href="javascript:RemoveCreatorAppId(' + appid + ');">Remove</a>';
	}
}

function OnAddCreatorAppIdFailure()
{
	alert( 'error adding new app publish permission' );
}

function RemoveCreatorAppId( appid )
{
	try
	{
		new Ajax.Request('https://partner.steamgames.com/apps/removeworkshopcreatorapp/' + g_ConsumerAppID,
			{
				method:'post',
				parameters: { 'creator_app_id' : appid, 'sessionid': g_sessionID },
				onSuccess: function(transport)
				{
					if ( transport.responseText ){
						try {
							var result = transport.responseText.evalJSON(true);
						} catch ( e ) {
							// Failure
							OnRemoveCreatorAppIdFailure();
						}
						// Success...
						if ( result.success == 1 )
						{
							OnRemoveCreatorAppIdSuccess( appid )
							return;
						}
						else
						{
							OnRemoveCreatorAppIdFailure();
							return;
						}
					}

								},
				onFailure: function()
				{
					OnRemoveCreatorAppIdFailure();
				}
			});
	}
	catch(e)
	{
		OnRemoveCreatorAppIdFailure();
	}
}

function OnRemoveCreatorAppIdSuccess( appid )
{
	var app_table = $('creator_app_table');
	for ( var i = 0; i < app_table.rows.length; i++ )
	{
		if ( app_table.rows[i].id == 'creator_app_' + appid )
		{
			app_table.deleteRow( i );
			return;
		}
	}
}

function OnRemoveCreatorAppIdFailure()
{
	alert( 'error removing app publish permission' );
}

function SetAdminTagsVisibility( appid, elem )
{
	$J( "#AppAdminTagsVisibilityAjaxOutput" ).html( '' );

	AppsAjaxRequest( 'https://partner.steamgames.com/apps/ajaxsetadmintagsvisibility/' + appid,
		{
			'admin_tags_visible': $J( elem ).attr( 'checked') ? 1 : 0,
			'sessionid': g_sessionID
		},
		function ( results )
		{
			// now reflect results
			StandardCallback( results, 'AppAdminTagsVisibilityAjaxOutput' );
		}
	);
}

