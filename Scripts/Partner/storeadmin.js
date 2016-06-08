
function UpdateMetacriticLink( name, metacritic )
{
	var elemMetacritic = $(metacritic);
	if ( g_rgMetacriticURLs && g_rgMetacriticURLs[name] )
	{
		elemMetacritic.href = g_rgMetacriticURLs[name];
		elemMetacritic.show();
	}
	else
	{
		elemMetacritic.hide();
	}
}

function OnBlurMetacritic( name )
{
	if ( g_rgMetacriticURLs && g_rgMetacriticURLs[name] )
		return;

	// invalid metacritic name.. clear
	$( 'app_game_metacritic_metacritic_name__target' ).value = '';
	$( 'app_game_metacritic_metacritic_name__compl' ).value = '';
	UpdateMetacriticLink( '', 'metacritic_link' );

}

function UpdateAdminLink( elem, urlpath, value )
{
	var elemLink = $(elem);
	if ( value )
	{
		elemLink.href = g_szBaseUrl  + urlpath + value;
		elemLink.show();
	}
	else
	{
		elemLink.hide();
	}
}

function OnFreeGameCheck( checkbox, appid )
{
	if ( checkbox.value )
	{
		$('alt_appid_input').value = appid;
		new Effect.BlindDown( 'free_game_settings', {duration: 0.25} );
	}
	else
	{
		$('alt_appid_input').value = '';
		new Effect.BlindUp( 'free_game_settings', {duration: 0.25} );
	}
}

function PopulatePackageAppLists( rgIncludedItemIds )
{
	var elemAllApps = $('package_available_app_list');
	var elemIncludedApps = $('package_included_app_list');

	for ( var i = 0; i < rgIncludedItemIds.length; i++ )
	{
		var itemId = rgIncludedItemIds[i];
		var rgItemData = g_rgReferencedItems[itemId] || {};
		var opt = new Element('option', {value: itemId, 'class': rgItemData['cssClass'] } );
		opt.innerHTML = rgItemData['name'] || ( '{unknown item ' + itemId + '}' );
		elemIncludedApps.appendChild(opt);
	}
}

var g_rgstrLastSearch = "";
var g_nFindPackageTimer = 0;
function PopulatePackageListsAJAX( elemAutoCompleteName, elemListName, bStorePackagesOnly )
{
	if ( g_nFindPackageTimer )
		window.clearTimeout( g_nFindPackageTimer );

	g_nFindPackageTimer = setTimeout( function() {
		var matchText = $J( "#" + elemAutoCompleteName ).val();

		if ( matchText.length < 3 )
			return;

		if ( g_rgstrLastSearch != matchText )
		{
			g_rgstrLastSearch = matchText;
		}

		var params = {
			term : matchText,
			sessionid: g_sessionID
		};
		if ( bStorePackagesOnly )
			params['store_packages_only'] = 1;

		new Ajax.Request( 'https://partner.steamgames.com/admin/store/suggestpackagejson/', {
			method: 'post',
			parameters: params,
			onSuccess: function( transport ) {
				if ( g_rgstrLastSearch != matchText )
					return;
				var matchingItems = transport.responseJSON || [];
				var list = $J( "#" + elemListName );
				list.find("option").remove();
				for ( var i = 0; i < matchingItems.length; ++i )
				{
					var option = matchingItems[i];
					var name = option['name'];
					if ( option['notes'] )
					{
						name += " [" + option['notes'] + "]";
					}
					list.append( $J('<option>', { 'class' : option['cssClass'], value : option['packageid'], text : name } ) );
				}
			}
		} );
	} );
}

function PopulateItemListAJAX( elemAutoCompleteName, elemListName, packageCollection, grantor )
{
	var matchText = $J( "#" + elemAutoCompleteName ).val();

	if ( matchText.length < 1 )
		return;

	var params = {
		term : matchText,
		sessionid: g_sessionID,
		max_suggestions: 100
	};
	new Ajax.Request( 'https://partner.steamgames.com/admin/store/suggestitemjson/', {
		method: 'post',
		parameters: params,
		onSuccess: function( transport ) {
			var matchingItems = transport.responseJSON || [];
			var list = $J( "#" + elemListName );
			list.find("option").remove();
			for ( var i = 0; i < matchingItems.length; ++i )
			{
				var option = matchingItems[i];
				var name = option['name'];
				if ( option['notes'] )
				{
					name += " [" + option['notes'] + "]";
				}
				list.append( $J('<option>', { 'class' : option['cssClass'], value : option['itemid'], text : name } ) );
			}
		}
	} );
}
function AjaxChangeClusterFilter( strMatchTag, elemListID, clusterName, clusterType, bShowDLC )
{
	if( strMatchTag == undefined || strMatchTag.length < 1 )
		return;

	var params = {
		tag : strMatchTag,
		showdlc : bShowDLC,
		type : clusterType,
		sessionid: g_sessionID
	}
	new Ajax.Request( 'https://partner.steamgames.com/admin/store/gettaggedpackages/', {
		method: 'post',
		parameters: params,
		onSuccess: function( transport ) {
			var matchingItems = transport.responseJSON || [];
			var list = $J( "#" + elemListID );
			list.find("div").remove();
			for ( var i = 0; i < matchingItems.length; ++i )
			{
				var option = matchingItems[i];
				var name = option['name'];

				var newElement = null;
				if ( option['packageid'] )
				{
					newElement = $J('<div/>', {id: clusterName + '_clusterpackage_' + option['packageid'], 'class': option['cssClass'], text : name } );
				}
				else if ( option['itemid'] )
				{
					newElement = $J('<div/>', {id: clusterName + '_clusteritem_' + option['itemid'], 'class': option['cssClass'], text : name } );
				}
				if ( newElement )
				{
					list.append( newElement );
				}
			}
		}
	} );
}
function AjaxPopulateClusterList( elemValue, elemListID, clusterName, clusterType )
{
	var matchText = elemValue;

	var params = {
		term : matchText,
		type : clusterType,
		sessionid: g_sessionID,
		max_suggestions: 100
	};
	new Ajax.Request( 'https://partner.steamgames.com/admin/store/suggestclusteritemsjson/', {
		method: 'post',
		parameters: params,
		onSuccess: function( transport ) {
			var matchingItems = transport.responseJSON || [];
			var list = $J( "#" + elemListID );
			list.find("div").remove();
			for ( var i = 0; i < matchingItems.length; ++i )
			{
				var option = matchingItems[i];
				var name = option['name'];

				var newElement = null;
				if ( option['packageid'] )
				{
					newElement = $J('<div/>', {id: clusterName + '_clusterpackage_' + option['packageid'], 'class': option['cssClass'], text : name } );
				}
				else if ( option['itemid'] )
				{
					newElement = $J('<div/>', {id: clusterName + '_clusteritem_' + option['itemid'], 'class': option['cssClass'], text : name } );
				}
				else if ( option['bundleid'] )
				{
					newElement = $J('<div/>', {id: clusterName + '_clusterbundle_' + option['bundleid'], 'class': option['cssClass'], text : name } );
				}
				if ( newElement )
				{
					list.append( newElement );
				}
			}
		}
	} );
}

function PopulateClusterLists( rgIncludedItems, clusterName, elemAvailableList, elemIncludedList, clusterType )
{
	var elemAllApps = $(elemAvailableList);
	var elemIncludedApps = $(elemIncludedList);
	
	var rgIncludedItemIds = {};
	var rgIncludedPackageIds = {};
	if ( rgIncludedItems )
	{
		rgIncludedItems.each( function ( rgItem ) { 
			if ( rgItem.itemid ) 
				rgIncludedItemIds[ rgItem.itemid ] = true; 
			else if ( rgItem.packageid ) 
				rgIncludedPackageIds[ rgItem.packageid ] = true; 
		} );
	}

	$J(elemAllApps).on( 'dblclick', MoveClusterItem.bind( null, elemAllApps, elemIncludedApps, true ) )
	$J(elemIncludedApps).on( 'dblclick', MoveClusterItem.bind( null, elemAllApps, elemIncludedApps, false ) )

	Event.observe( elemAllApps.up('form'), 'submit', SerializeClusterToForm.bindAsEventListener( null, elemAllApps.up('form'), 'capsule_lists[' + clusterName + ']', elemIncludedApps ) );
	
	// is the list of included apps an empty array?
	if ( !rgIncludedItems || rgIncludedItems.length == 0 )
		return;
	for ( var i = 0; i < rgIncludedItems.length; i++ )
	{
		var rgItem = rgIncludedItems[i];
		if ( rgItem.itemid )
		{
			var opt = new Element('div', {id: clusterName + '_clusteritem_' + rgItem.itemid, 'class': g_rgReferencedItems[rgItem.itemid]['cssClass'] } );
			opt.innerHTML = g_rgReferencedItems[rgItem.itemid]['name'];
			elemIncludedApps.appendChild(opt);
		} 
		else if ( rgItem.packageid )
		{
			var opt = new Element('div', {id: clusterName + '_clusterpackage_' + rgItem.packageid, 'class': 'app_Package' } );
			opt.innerHTML = g_rgReferencedPackages[rgItem.packageid];
			elemIncludedApps.appendChild(opt);
		}
		else if ( rgItem.bundleid )
		{
			var opt = new Element('div', {id: clusterName + '_clusterbundle_' + rgItem.bundleid, 'class': 'app_Package' } );
			opt.innerHTML = g_rgReferencedBundles[rgItem.bundleid];
			elemIncludedApps.appendChild(opt);
		}
	}
	
	CreateClusterSortable( elemIncludedApps );
}

function SerializeClusterToForm( event, form, inputName, elemIncludedApps )
{
	var rgItems = GetClusterItemsAsArray( elemIncludedApps );
	var value = Object.toJSON( rgItems );
	form.appendChild( new Element( 'input', {type: 'hidden', value: value, name: inputName } ) );
	return true;
}

function GetClusterItemsAsArray( elemIncludedApps )
{
	var rgItems = [];
	elemIncludedApps.childElements().each( function( e ) {
		var id = e.id;
		var rgMatch = id.match( /cluster(item|package|bundle)_([0-9]*)/ );
		if ( rgMatch )
		{
			if ( rgMatch[1] == 'item' )
				rgItems.push( { itemid: rgMatch[2] } );
			else if ( rgMatch[1] == 'package' )
				rgItems.push( { packageid: rgMatch[2] } );
			else if ( rgMatch[1] == 'bundle' )
				rgItems.push( { bundleid: rgMatch[2] } );
		}
	});
	return rgItems;
}

function MoveClusterItem( elemAvailable, elemIncluded, bAdding, event )
{
	var elemFrom = bAdding ? $(elemAvailable) : $(elemIncluded);
	var elemTo = bAdding ? $(elemIncluded) : $(elemAvailable);
	var elem = event.target;

	if ( elem && $J.contains( elemFrom, elem ) )
	{
		$J(elemTo).append( $J(elem).detach() );
	}
	CreateClusterSortable( elemIncluded );
}

function MoveAll( elSrc, elDest )
{
	$J.each(elSrc.children(), function(i, j) {
		elDest.append( $J(j).detach() );
	});
	CreateClusterSortable( elDest[0] );
}

function CreateClusterSortable( elem )
{
	Sortable.destroy( elem );
	Position.includeScrollOffsets = true;
	Sortable.create( elem, {tag: 'div', scroll: $(elem).up('.appselect_list_ctn') } );
}

function PreviewCapsules( strSize, elemIncluded )
{
	var rgItems = GetClusterItemsAsArray( $(elemIncluded) );

	var url = g_szBaseUrl + '/admin/store/pagecapsulepreview/?'; 
	url += Object.toQueryString( { strCapsuleJSON: Object.toJSON( rgItems ), strCapsuleSize: strSize } );
	
	var win = window.open(url,'capsule_preview','height=584,width=724,resize=yes,scrollbars=yes');
	win.focus();
}

function MovePackageApp( from, to )
{
	var elemFrom = $(from);
	var elemTo = $(to);
	var valuesMoved = null;

/*
 * This code works well for single selection, not multi-selection
	if ( elemFrom.selectedIndex >= 0 )
	{
		var opt = $(elemFrom.options[elemFrom.selectedIndex]);
		elemTo.appendChild( opt.remove() );
	}
*/
	// Here is the multi-selection friendly (will be slower than above in case there are many items).
	for ( var i = 0; i < elemFrom.options.length ; )
	{
		var opt = elemFrom.options[i];
		if ( opt.selected )
		{
			elemTo.appendChild( opt.remove() );
			// If we move from one to the other, we are actually not increasing the counter,
			// otherwise we would skip the test for the next item (it would have the same index as the current index).
			if ( valuesMoved == null )
			{
				valuesMoved = {};
			}
			valuesMoved[ opt.value ] = true;
		}
		else
		{
			++i;
		}
	}
	return valuesMoved;
}

function BuildPackageAppList( form )
{
	var elemIncludedApps = $('package_included_app_list');
	var strAppList = '';
	var bFirst = true;
	for ( var i = 0; i < elemIncludedApps.options.length; i++ )
	{
		if ( !bFirst )
			strAppList += ',';
		else
			bFirst = false;
		strAppList += elemIncludedApps.options[i].value;
	}
	
	form.appendChild( new Element( 'input', {type: 'hidden', name: 'package_included_apps', value: strAppList } ) );

	return true;
}

var lastFilters = new Object();
function FilterList( target, str )
{
	if( Prototype.Browser.Gecko ||  $(target).tagName == "DIV" )
		return FilterListFast( target, str );

	// @note Tom Bui: this doesn't work at all for contracting, since we don't just filter apps with this function anymore

	var lastFilter = lastFilters[target];
	if ( !lastFilter )
		lastFilter = '';

	str = str.toLowerCase();
	if ( str == lastFilter )
		return false;

	var expanding = false;
	var contracting = false;
	if ( str.length > lastFilter.length && str.startsWith( lastFilter ) )
		expanding = true;
	if ( !str || str.length < lastFilter.length && lastFilter.startsWith( str ) )
		contracting = true;

	var strParts = str.split(/\W/);

	var elemTarget = $(target);
	var elemParent = elemTarget.parentNode;
	elemParent.removeChild( elemTarget );

	rgChildren = elemTarget.childElements();

	for ( var i = 0; i < rgChildren.length; i++ )
	{
		var child = rgChildren[i];
		//if ( child.nodeType != child.ELEMENT_NODE )
		//	continue;

		if ( !child.lcText )
			child.lcText = (child.innerText || child.textContent).toLowerCase();

		var text = child.lcText;
		var show = true;
		for ( var iPart = 0; show && iPart < strParts.length; iPart++ )
			if ( !text.include( strParts[iPart] ) )
				show=false;

		if ( !show )
			elemTarget.removeChild( child );
	}

	lastFilters[target] = str;
	elemParent.appendChild( elemTarget );
	return true;
}

function FilterListFast( target, str )
{
	var lastFilter = lastFilters[target];
	if ( !lastFilter )
		lastFilter = '';
	
	str = str.toLowerCase();
	if ( str == lastFilter )
		return false;

	var expanding = false;
	var contracting = false;
	if ( str.length > lastFilter.length && str.startsWith( lastFilter ) )
		expanding = true;
	if ( !str || str.length < lastFilter.length && lastFilter.startsWith( str ) )
		contracting = true;

	var strParts = str.split(/\W/);

	var elemTarget = $(target);
	var elemParent = elemTarget.parentNode;
	elemParent.removeChild( elemTarget );
	
	var rgChildren = elemTarget.childNodes;
	for ( var i = 0; i < rgChildren.length; i++ )
	{
		var child = rgChildren[i];
		if ( child.nodeType != child.ELEMENT_NODE )
			continue;
		if ( expanding && child.style.display=='none' || contracting && child.style.display != 'none' )
			continue;
		if ( !child.lcText )
			child.lcText = (child.innerText || child.textContent).toLowerCase();
		
		var text = child.lcText;
		var show = true;
		for ( var iPart = 0; show && iPart < strParts.length; iPart++ )
			if ( !text.include( strParts[iPart] ) )
				show=false;
		
		if ( show )
			child.style.display = '';
		else
			child.style.display = 'none';
	}
	lastFilters[target] = str;
	elemParent.appendChild( elemTarget );
	return true;
}

function ImageHoverPreview( event, divHover, url )
{
	if (!event) var event = window.event;
	
	var hover = $(divHover);
	if ( hover.parentNode != document.documentElement )
	{
		document.documentElement.appendChild( hover.remove() );
	}
	if ( !hover.visible() || hover.hiding )
	{
		hover.hiding = false;
		if ( hover.effect ) hover.effect.cancel();
		hover.effect = Effect.Appear( hover, {duration: 0.2} );
	}
	hover.style.left = event.pageX + 10 + 'px';
	hover.style.top = event.pageY + 20 + 'px';
	hover.down('img').src = url;
}

function HideImageHover( event, divHover, elem )
{
	if (!event) var event = window.event;
	var reltarget = (event.relatedTarget) ? event.relatedTarget : event.toElement;
	if ( reltarget && ( $(reltarget).up( '#' + elem.identify() ) /* || $(reltarget).up( '#' + divHover.id ) */ ) )
		return;
	
	var hover = $(divHover);
	if ( hover.effect ) hover.effect.cancel();
	if ( hover.visible() )
	{
		hover.effect = Effect.Fade( hover, {duration: 0.2} );
		hover.hiding = true;
	}
}

function FlushStoreHome( elemStatus )
{
	$(elemStatus).update( 'Flushing the home page now...' );

	new Ajax.Updater( 
			elemStatus, 
			g_szBaseUrl + '/admin/store/flushstorehome', 
			{ parameters: { sessionid: g_sessionID } } );
}

function OnGenreSelect( checkbox, id, name )
{
	var elemPrimary = $('primary_genre_select');
	if ( checkbox.value )
	{
		var elemOpt = new Element( 'option', { value: id } );
		elemOpt.update( name );
		elemPrimary.appendChild( elemOpt );
		
		if ( !elemPrimary.value )
			elemPrimary.value = id;
	}
	else
	{
		var bWasSelected = (elemPrimary.value == id);
		var elemOpt = null;
		for ( var i = 0; i < elemPrimary.options.length && !elemOpt; i++ )
		{
			if ( elemPrimary.options[i].value == id )
				elemOpt = elemPrimary.options[i];
		}
		if ( elemOpt )
		{
			elemPrimary.removeChild( elemOpt );
			if ( bWasSelected )
			{
				elemPrimary.value = elemPrimary.options[ elemPrimary.options.length > 1 ? 1 : 0 ].value;
			}
		}
	}
}

function MoveSelectItemUp( element )
{
	var list = $( element );
	var options = list.select('option');

	for ( var i = 1; i < options.length; i++ )
	{
		var o = options[i];

		if ( o.selected )
		{
			list.removeChild( o );
			list.insertBefore( o, options[ i - 1 ] );
		}
	}
}

function MoveSelectItemDown( element )
{
	var list = $( element );
	var options = list.select('option');

	for ( var i = options.length - 2; i >= 0; i-- )
	{
		var o = options[i];

		if ( o.selected )
		{
			var nextOpt = options[i + 1];
			o = list.removeChild(o);
			nextOpt = list.replaceChild(o, nextOpt);
			list.insertBefore(nextOpt, o);
		}
	}
}

function ReenableSubmitInput( matchingValue, newValue )
{
	var inputElements = document.getElementsByTagName( 'input' );
	for ( var i = 0 ; i < inputElements.length ; ++i )
	{
		var inputElement = inputElements[ i ];
		if ( inputElement.type != 'submit' )
		{
			continue;		// Only interested in 'submit' elements
		}
		if ( inputElement.value != matchingValue )
		{
			continue;		// No point sending data that don't have any particular values
		}
		inputElement.value = newValue;
		inputElement.disabled = null;
	}
}

function AddTagToApp( nAppId, strTag, nTagId)
{
	if( !nTagId || !nAppId || !strTag )
		return;

	$J('#TagAddBtn').prop("disabled",true);
	$J.ajax({
		type: "POST",
		url: "https://partner.steamgames.com/apps/ajaxaddtag/" + nAppId,
		data: { tagid: nTagId, tag:strTag, appid: nAppId, sessionid: g_sessionID },
		dataType: "json"
	})
	.done(function( msg ) {

			$J('#TagList').append( $J('<li>').text(strTag) );
			$J('#tag_completer_target').val('');
			$J('#tag_completer_compl').val('');
			$J('#TagAddBtn').prop("disabled",false);

			if( $J('#TagList li').length >= 5 ) {
				$J('#AddTagDiv').hide();
			}
	});
}

function UpdateButtonGroup(key)
{
	var radioValue = $J('input:radio[name='+key+'_radio]:checked').val();
	$J('.'+key+'_input').val('');
	$J('#'+key+'_input_' + radioValue).val(true);
}


function UpdateButtonGroupValue(key)
{
	var radioValue = $J('input:radio[name='+key+'_radio]:checked').val();
	$J('#'+key+'_input').val(radioValue);
	MarkSentinal(key); // If we have one.
}

function MarkSentinal(key)
{
	$J('#'+key+'_sentinel').val("1");
}

function IsNumberKey( evt )
{
	var charCode = (evt.which) ? evt.which : event.keyCode;
	if (charCode > 31 && (charCode < 48 || charCode > 57))
		return false;

	return true;
}

function SetFreeToPlay( appid, packageid )
{
	var dialog = ShowConfirmDialog( "Free On Demand Package", "This will set your package as Free. Are you sure you wish to continue?<br><br>Select the appropriate purchase text:" );
	var input = dialog.m_$Content.find( 'input' );
	input.val( '#genre_free2play' );
	input.select();

	//var buttons = dialog.m_$Content.
	$J('<select><option value="#PurchaseButton_FreeToPlay">Free To Play</option><option value="#PurchaseButton_Free">Free</option></select>')
		.insertBefore( dialog.m_$Content.find('.newmodal_buttons') );

	//dialog.m_$Content.append(  );
	var select = dialog.m_$Content.find( 'select' );
	select.val( '#PurchaseButton_FreeToPlay' );
	select.select();

	dialog.done( function ( )
	{
		var dialogWait = ShowBlockingWaitDialog( "Please Wait", "Saving your changes...");
		new Ajax.Request( 'https://partner.steamgames.com/store/ajaxupdatef2pstore',
			{
				method: 'POST',
				parameters: {
					'appid' : appid,
					'displaytext' : select.val(),
					'sessionid' : g_sessionID
				},
				onSuccess: function( transport )
				{
					dialog.Dismiss();
					var results = transport.responseJSON;
					if ( results[ 'success' ] == 1 )
					{
						// Now change the package type
						new Ajax.Request( 'https://partner.steamgames.com/store/ajaxpackagesave/' + packageid,
							{
								method: 'POST',
								parameters: {
									'action' : 'save',
									'billing_type' : 12,
									'sessionid' : g_sessionID
								},
								onSuccess: function( transport )
								{
									var results = transport.responseJSON;
									if ( results.success == 1 )
									{
										OnAIWaitComplete(function(){
											dialog.Dismiss();
											top.location.href = 'https://partner.steamgames.com/store/packagelanding/' + packageid;
										});
									}
									else
									{
										dialog.Dismiss();
										ShowAlertDialog( "Error", "Failed to change package type: %1$s".replace('%1$s', results.success ) );
									}
								}
							} );
					}
					else
					{
						ShowAlertDialog( 'Error', "Failed to update store app page: %1$s".replace('%1$s', results[ 'success' ] ) );
					}
				}
			});
	});

}

