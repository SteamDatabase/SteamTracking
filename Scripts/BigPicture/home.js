
var CStoreHome = function( navigation )
{
	this.m_navigation = navigation;
	this.m_rgHomeSections = { not_implemented: '' };

	var _store = this;

	// UnreadyForDisplay is only in beta client
	try
	{
		$.RegisterEventHandler( 'UnreadyForDisplay', $.GetContextPanel(), function (pPanel) { _store.OnUnreadyForDisplay(pPanel); });
	}
	catch ( e )
	{
	}

	this.m_hShoppingCartChanged = $.RegisterForUnhandledEvent( 'ShoppingCartChanged', function () { _store.OnShoppingCartChanged(); });
	this.m_hClearShoppingCart = $.RegisterForUnhandledEvent( 'ClearShoppingCart', function () { _store.OnClearShoppingCart(); });
}

CStoreHome.prototype.SetSectionNotImplementedTemplate = function( strTemplate )
{
	this.SetSectionTemplate( 'not_implemented', strTemplate );
}

CStoreHome.prototype.SetSectionTemplate = function( strID, strTemplate )
{
	this.m_rgHomeSections[ strID ] = strTemplate;
}

CStoreHome.prototype.GetSectionTemplate = function( strID )
{
	if ( this.m_rgHomeSections[ strID ] )
		return this.m_rgHomeSections[ strID ];

	return this.m_rgHomeSections[ 'not_implemented' ];
}

CStoreHome.prototype.ShowStoreSection = function( strSection )
{
	var strID = 'Section_' + strSection;
	var pContent = $( '#LoadedContent' );

	// create panel if it doesn't exist
	var pSection = pContent.FindChild( strID );
	if ( !pSection )
	{
		pSection = $.CreatePanel( 'EdgeScroller', pContent, strID );
		if ( !pSection.BLoadLayoutFromString( this.GetSectionTemplate( strSection ), true, false ) )
		{
			$.Msg( 'Failed to load layout file: ' + strSection );
			return;
		}

		pSection.AddClass( 'NxRightContentContainer' );
	}

	this.m_navigation.ShowPanel( pSection );
}

CStoreHome.prototype.OnUnreadyForDisplay = function( pPanel )
{
	var pLeft = $('#LeftColumn');
	for( var i = 0; i < pLeft.GetChildCount(); i++ )
	{
		var pChild = pLeft.GetChild( i );
		if ( pChild.IsSelected() )
			continue;

		var strSection = pChild.GetAttributeString( 'section-id', '' );
		if ( strSection.length <= 0 )
			continue;

		var pSection = $('#Section_' + strSection);
		if ( !pSection )
			continue;

		pSection.DeleteAsync( 0.0 );
	}

	return true;
}

CStoreHome.prototype.ShowShoppingCartBtn = function( bShow )
{
	var pPanel = $( '#ShoppingCartBtn');
	if ( pPanel )
		pPanel.visible = bShow;
}

CStoreHome.prototype.OnCartButtonFocused = function()
{
	var pPanel = $('#ShoppingCartBtn');
	if ( pPanel.visible )
	{
		StoreHome.ShowStoreSection( 'featured' );
	}
	else
	{
		var pFeatured = $('#FeaturedBtn');
		if ( pFeatured )
		{
			$.DispatchEventAsync( 0.0, 'SetInputFocus', pFeatured );
		}
	}
}

CStoreHome.prototype.OnShoppingCartChanged = function()
{
	var _store = this;
	$.AsyncWebRequest( 'https://store.steampowered.com/cart/getcartstate',
	{
		type: 'GET',
		success: function( data )
		{
			if ( data.itemcount )
				_store.ShowShoppingCartBtn( true );
			else
				_store.ShowShoppingCartBtn( false );
		}
	});
}

CStoreHome.prototype.OnClearShoppingCart = function()
{
	ShowShoppingCartBtn( false );
}

CStoreHome.prototype.Refresh = function()
{
	$.GetContextPanel().Refresh();
	$.GetContextPanel().SetFocus();
}

CStoreHome.prototype.InitSettingsPage = function()
{
	var pAllGames = $('#FeatureAllGames');
	if ( pAllGames )
	{
		try
		{
			pAllGames.SetSelected( $.BGetStoreFeatureAllGames() );
		}
		catch( e )
		{
		}
	}
}

CStoreHome.prototype.ToggleFeatureAllGames = function()
{
	try
	{
		$.SetStoreFeatureAllGames( !$.BGetStoreFeatureAllGames() );
	}
	catch( e )
	{
	}

	$.GetContextPanel().SetAttributeInt( 'reloadfromallgames', 1 );
	this.Refresh();
}

function ShowStoreContents( strURL, strName )
{
	if ( strURL.substr( 0, 7 ) != 'http://' && strURL.substr( 0, 8 ) != 'https://' )
		strURL = 'https://store.steampowered.com/' + strURL;

	$.DispatchEvent( 'OpenRemoteContent', strURL, strName, 2  );
}

function ShowAppPage( nAppID, strName )
{
	var strURL = 'https://store.steampowered.com/app/' + nAppID;
	$.DispatchEvent( 'OpenRemoteContent', strURL, strName, 2  );
}

function ShowShoppingCart()
{
	var strURL = 'https://store.steampowered.com/cart/';
	$.DispatchEvent( 'OpenRemoteContent', strURL, 'Your Shopping Cart', 2  );
}

function OpenStoreContent( strURL, strName )
{
	$.DispatchEvent( 'OpenRemoteContent', strURL, strName, 2  );
}

function OpenProfileContent( strURL, strName )
{
	$.DispatchEvent( 'OpenRemoteContent', strURL, strName, 8  );
}

function ShowPurchaseOptions( nAppID, strAppName )
{
	var strURL = 'https://store.steampowered.com/purchaseoptions/' + nAppID + '/?ver=nx';
	var strName = 'Buy %appname%'.replace( '%appname%', strAppName );
	$.DispatchEvent( 'OpenRemoteContent', strURL, strName, 2  );
}

function ShowPackagePage( nPackageID, strPackageName )
{
	var strURL = 'https://store.steampowered.com/sub/' + nPackageID;
	$.DispatchEvent( 'OpenRemoteContent', strURL, strPackageName, 2  );
}

function ShowBundlePage( nBundleID, strName )
{
	var strURL = 'https://store.steampowered.com/bundle/' + nBundleID;
	$.DispatchEvent( 'OpenRemoteContent', strURL, strName, 2  );
}

function ShowSeasonsAndEpisodes( nAppID, strAppName )
{
	var strURL = 'https://store.steampowered.com/seasonsandepisodes/' + nAppID + '/?ver=nx';
	$.DispatchEvent( 'OpenRemoteContent', strURL, strAppName, 2  );
}

function ShowAppLibraryPage( nAppID )
{
	$.DispatchEvent( 'LibraryShowApp', nAppID );
}

function ShowDiscoveryQueuePage()
{
	var strURL = 'https://store.steampowered.com/explore/';
	$.DispatchEvent( 'OpenRemoteContent', strURL, 'Your Discovery Queue', 2  );
}

function LibraryInstallApp( nAppID )
{
	$.DispatchEvent( 'LibraryInstallApp', nAppID );
}


function SetOnlyChildVisible( pPanel, strChildID )
{
	for ( var i = 0; i < pPanel.GetChildCount(); i++ )
	{
		var pChild = pPanel.GetChild( i );
		if ( pChild.id == strChildID )
			pChild.AddClass( 'Visible' );
		else
			pChild.RemoveClass( 'Visible' );
	}
}

function LoadNextDiscoveryQueue( strSessionID, nViewedAppID )
{
	
	if ( !nViewedAppID )
		nViewedAppID = 0;

	var pScript = "\r\n\t\tvar nViewedAppID = %viewed_app%;\r\n\t\tvar postData = {};\r\n\t\tpostData.sessionid = %sessionid%;\r\n\t\tif ( nViewedAppID != 0 )\r\n\t\t\tpostData.appid_to_clear_from_queue = nViewedAppID;\r\n\r\n\t\t$.AsyncWebRequest( 'https:\/\/store.steampowered.com\/explore\/next',\r\n\t\t{\r\n\t\t\ttype: 'POST',\r\n\t\t\tdata: postData,\r\n\t\t\tsuccess: function (data)\r\n\t\t\t{\r\n\t\t\t\tif ( data.empty_queue )\r\n\t\t\t\t{\r\n\t\t\t\t\tvar strURL = 'https:\/\/store.steampowered.com\/explore';\r\n\t\t\t\t\t$.DispatchEvent( 'OpenRemoteContent', strURL , 'Your Discovery Queue', 2 );\r\n\t\t\t\t\treturn;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif ( !data.appid )\r\n\t\t\t\t{\r\n\t\t\t\t\t$.GetContextPanel().ShowError( 'There was an error loading your next queue item. Please try again later.');\r\n\t\t\t\t\treturn;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tvar strURL = 'https:\/\/store.steampowered.com\/app\/' + data.appid + '\/?browsingqueue=1';\r\n\t\t\t\tvar pContentParent = $.TenfootController($.GetContextPanel()).GetContentParent();\r\n\r\n\t\t\t\t$.PushBackStack( $.GetContextPanel(), 'OpenRemoteContent( ' + strURL + ', ' + data.name + ', 2 )', pContentParent );\r\n\t\t\t\t$.GetContextPanel().LoadPanelAsyncWithWebAuth( strURL, true );\r\n\t\t\t\t$.GetContextPanel().SetFocus();\r\n\t\t\t\t$.DispatchEvent( 'SetContentTitle', $.GetContextPanel(), data.name );\r\n\t\t\t},\r\n\t\t\terror: function()\r\n\t\t\t{\r\n\t\t\t\t$.GetContextPanel().ShowError( 'There was an error loading your next queue item. Please try again later.');\r\n\t\t\t}\r\n\t\t});";
	pScript = pScript.replace( '%sessionid%', strSessionID );
	pScript = pScript.replace( '%viewed_app%', nViewedAppID );

	var pContent = $.CreatePanel( 'RemoteContent', $.TenfootController($.GetContextPanel()).GetContentParent(), '' );
	$.PushBackStack( pContent, 'BackStackPlaceholder()' );

	// for back compat
	if ( !pContent.RunScriptInPanelContext )
		pContent.SetPanelEvent( 'onload', pScript );
	
	pContent.AddClass( 'ContentPanel' );
	pContent.SetAttributeString( 'content-title', 'Your Discovery Queue' );
	pContent.SetAttributeInt( 'content-delete-at-stack-depth', 1 );
	pContent.ShowLoading();
	pContent.SetFocus();

	if ( pContent.RunScriptInPanelContext )
		pContent.RunScriptInPanelContext( pScript );
}

function GenerateNewDiscoveryQueue( strSessionID, eQueueType )
{
	$( '#DiscoveryQueue' ).AddClass( 'Loading' );
	$.AsyncWebRequest( 'https://store.steampowered.com/explore/generatenewdiscoveryqueue',
	{
		type: 'POST',
		data: { sessionid: strSessionID, queuetype: eQueueType },
		complete: function()
		{
			$( '#DiscoveryQueue' ).RemoveClass( 'Loading' );
		},
		success: function( data )
		{
			$.Msg( 'ok' );
			LoadNextDiscoveryQueue( strSessionID );
		},
		error: function()
		{
			$.Msg( 'fail' );
			alert( 'There was an error loading your next queue item. Please try again later.' );
		}
	});
}

function ShowSearchDialog( eSource )
{
	var pMainMenu = $.TenfootController( $.GetContextPanel() ).AccessMainMenu();
	var pSearch = $.CreatePanel( 'SearchDialog', pMainMenu, 'StoreSearchDialog' );

	$.RegisterEventHandler( 'StoreSearchResult', pSearch, function( strType, nID, strName )
	{
		$.DispatchEventAsync( 0.0, 'Cancelled', pSearch, 'program' );
		if ( strType == 'package' )
			ShowPackagePage( nID, strName );
		else
			ShowAppPage( nID, strName );

		return true;
	});

	$.TenfootController( $.GetContextPanel() ).ShowModalDialog( pSearch, '' );

	if ( eSource == 'gamepad' )
		pSearch.ShowTextInputHandlerAfterInit();
}

function RegisterSearchDialog()
{
	var pContextPanel = $.GetContextPanel();
	$.RegisterKeyBind( pContextPanel, 'pad_x,steampad_x', function( eSource ) { ShowSearchDialog( eSource ) } );
	$.RegisterFooterButton( pContextPanel, 'pad_x', 'SEARCH' );
}

var g_bRegisteredForCart = false;
var g_cItemsInCart = 0;
function RegisterCartHotkey( cItemsInCart )
{
	if ( g_bRegisteredForCart )
		return;

	g_bRegisteredForCart = true;
	g_cItemsInCart = cItemsInCart;

	// check if old or new client
	var bRegistered = false;
	try
	{
		$.RegisterForUnhandledEvent( 'ShoppingCartItemCount', function( cItems )
		{
			g_cItemsInCart = cItems;
			$.DispatchEvent( 'QueuedInvalidateFooterPanel' );
		});

		bRegistered = true;
	}
	catch( e )
	{
	}

	if ( !bRegistered )
		return;

	// register cart button
	var pContextPanel = $.GetContextPanel();
	$.RegisterKeyBind( pContextPanel, 'pad_y,steampad_y', function( eSource )
	{
		if ( g_cItemsInCart > 0 )
			ShowShoppingCart();
	});

	$.RegisterEventHandler( 'ContributeToFooterPanel', pContextPanel, function( pPanel, pFooter )
	{
		if ( g_cItemsInCart > 0 )
			pFooter.SetButton( 'pad_y', 'CART' );

		return false;
	});
}

function AddPackageToCart( strSessionID, nPackageID )
{
	return AddPackageToCartInternal( strSessionID, 'subid', nPackageID )
}

function AddBundleToCart( strSessionID, nBundleID )
{
	return AddPackageToCartInternal( strSessionID, 'bundleid', nBundleID )
}

function AddPackageToCartInternal( strSessionID, strType, nItemID )
{
	
	var pScript = "\r\n\t\t$.AsyncWebRequest( 'https:\/\/store.steampowered.com\/cart\/addtocart',\r\n\t\t{\r\n\t\t\ttype: 'POST',\r\n\t\t\tdata: {\r\n\t\t\t\tsessionid: '%sessionid%',\r\n\t\t\t\taction: 'add_to_cart',\r\n\t\t\t\t%typeid%: %itemid%\r\n\t\t\t},\r\n\t\t\tsuccess: function (data)\r\n\t\t\t{\r\n\t\t\t\tvar strURL = 'https:\/\/store.steampowered.com\/cart';\r\n\t\t\t\tvar strTitle = 'Your Shopping Cart';\r\n\t\t\t\tvar pContentParent = $.TenfootController($.GetContextPanel()).GetContentParent();\r\n\r\n\t\t\t\t$.PushBackStack( $.GetContextPanel(), 'OpenRemoteContent( ' + strURL + ', ' + strTitle + ', 2 )', pContentParent );\r\n\t\t\t\t$.GetContextPanel().LoadPanelAsyncWithWebAuth( strURL, true );\r\n\t\t\t\t$.GetContextPanel().SetFocus();\r\n\t\t\t\t$.DispatchEventAsync( 0.0, 'ShoppingCartChanged' );\r\n\r\n\t\t\t\ttry\r\n\t\t\t\t{\r\n\t\t\t\t\t\/\/ new event\r\n\t\t\t\t\tvar cItems = (data && data.itemcount) ? data.itemcount : 0;\r\n\t\t\t\t\t$.DispatchEventAsync( 0.0, 'ShoppingCartItemCount', cItems );\r\n\t\t\t\t}\r\n\t\t\t\tcatch( e )\r\n\t\t\t\t{\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t\terror: function()\r\n\t\t\t{\r\n\t\t\t\t$.GetContextPanel().ShowError( 'Steam was unable to add this item to your cart. Please try again later.');\r\n\t\t\t}\r\n\t\t});";
	pScript = pScript.replace( '%sessionid%', strSessionID );
	pScript = pScript.replace( '%typeid%', strType );
	pScript = pScript.replace( '%itemid%', nItemID );

	var pContent = $.CreatePanel( 'RemoteContent', $.TenfootController($.GetContextPanel()).GetContentParent(), '' );

	// for back compat
	if ( !pContent.RunScriptInPanelContext )
		pContent.SetPanelEvent( 'onload', pScript );

	pContent.AddClass( 'ContentPanel' );
	pContent.SetAttributeString( 'content-title', 'Your Shopping Cart' );
	pContent.SetAttributeInt( 'content-delete-at-stack-depth', 1 );
	pContent.ShowLoading();
	pContent.SetFocus();

	if ( pContent.RunScriptInPanelContext )
		pContent.RunScriptInPanelContext( pScript );

	$.PushBackStack( pContent, 'BackStackPlaceholder()' );
}

function AddFreeLicense( strSessionID, strPanelID, subid, strDisplayName )
{
	var pPanel = $('#' + strPanelID );
	if ( pPanel.BHasClass( 'AddingLicense' ) )
		return;

	pPanel.AddClass( 'AddingLicense' );

	$.AsyncWebRequest( 'https://store.steampowered.com/checkout/addfreelicense/' + subid,
	{
		type: 'POST',
		data: { sessionid: strSessionID, 'ajax': true },
		complete: function()
		{
			pPanel.RemoveClass( 'AddingLicense' );
		},
		success: function( data )
		{
			alert( '%s has been added to your account.  It is now available in your Steam Library.'.replace( /%s/, strDisplayName ), strDisplayName );
			pPanel.DeleteAsync( 0.0 );
		},
		error: function( data )
		{
			if ( data && data.purchaseresultdetail == 9 )
				alert( 'This product is already available in your Steam library.', strDisplayName );
			else
				alert( 'There was a problem adding this product to your account.  Please try again later.', strDisplayName );
		}
	});
}

function ToggleWishlist( strSessionID, strPanelID, nAppID )
{
	var pPanel = $('#' + strPanelID );
	if ( pPanel.BHasClass( 'Requesting' ) )
		return;

	pPanel.AddClass( 'Requesting' );
	var bAdd = pPanel.IsSelected();
	var strURL = bAdd ? 'https://store.steampowered.com/api/addtowishlist/' : 'https://store.steampowered.com/api/removefromwishlist/';

	// insert throbber
	var pThrobber = $.CreatePanel( 'LoadingThrobber', pPanel, '' );
	pPanel.MoveChildBefore( pThrobber, pPanel.GetChild( 0 ) );

	$.AsyncWebRequest( strURL,
	{
		type: 'POST',
		data: { sessionid: strSessionID, appid: nAppID },
		complete: function()
		{
			pThrobber.DeleteAsync( 0.0 );
			pPanel.RemoveClass( 'Requesting' );
		},
		success: function( data )
		{
			if ( data.success )
			{
				pPanel.SetSelected(bAdd);
			}
			else
			{
				pPanel.SetSelected( !bAdd );
				alert( 'An error occurred while updating your wishlist. Please try again later.', 'Wishlist' );
			}
		},
		error: function( data )
		{
			pPanel.SetSelected( !bAdd );
			alert( 'An error occurred while updating your wishlist. Please try again later.', 'Wishlist' );
		}
	});
}

function ToggleIgnoreRecommendation( strSessionID, strPanelID, nAppID )
{
	var pPanel = $('#' + strPanelID );
	if ( pPanel.BHasClass( 'Requesting' ) )
		return;

	// toggle button already took care of toggling state
	pPanel.AddClass( 'Requesting' );
	var bChecked = pPanel.checked;

	// insert throbber
	var pThrobber = $.CreatePanel( 'LoadingThrobber', pPanel, '' );
	pPanel.MoveChildBefore( pThrobber, pPanel.GetChild( 0 ) );

	var rgData = { sessionid: strSessionID, appid: nAppID };
	if ( !bChecked )
		rgData.remove = 1;

	$.AsyncWebRequest( 'https://store.steampowered.com/recommended/ignorerecommendation/',
	{
		type: 'POST',
		data: rgData,
		complete: function()
		{
			pThrobber.DeleteAsync( 0.0 );
			pPanel.RemoveClass( 'Requesting' );
		},
		success: function( data )
		{
			pPanel.SetSelected( bChecked );
		},
		error: function( data )
		{
			pPanel.SetSelected( !bChecked );
			alert( 'There was a problem saving your changes.  Please try again later.', 'Not Interested' );
		}
	});
}

function AddInLibraryIcon( strImageID, unItemID, nItemType )
{
	var pImage = $('#' + strImageID );
	var pParent = pImage.GetParent();
	if ( pParent.BHasClass( 'InLibraryWrapper' ) )
		return;

	var bInLibrary = false;
	if ( nItemType == 0 )
		bInLibrary = $.BSubscribedToApp( unItemID );
	else if ( nItemType == 1 )
		bInLibrary = $.BSubscribedToPackage( unItemID );

	if ( !bInLibrary )
		return;

	var pWrapper = $.CreatePanel( 'Panel', pParent, '' );
	pWrapper.AddClass( 'InLibraryWrapper' );
	pParent.MoveChildBefore( pWrapper, pImage );
	pImage.SetParent( pWrapper );

	var pInLibraryPanel = $.CreatePanel( 'Panel', pWrapper, '' );
	pInLibraryPanel.AddClass( 'InLibraryPanel' );

	var pInLibraryIcon = $.CreatePanel( 'Panel', pInLibraryPanel, '' );
	pInLibraryIcon.AddClass( 'InLibraryIcon' );

	var pLabel = $.CreatePanel( 'Label', pInLibraryIcon, '' );
	pLabel.text = 'In Library';
}

function SetUserWebData( strKey, strValue )
{
	// old clients don't have this method so wrapping in try/catch
	try
	{
		return $.BSetUserWebData( strKey, strValue );
	}
	catch( e )
	{

	}

	return false;
}

function GetUserWebData( strKey, strDefault )
{
	// old clients don't have this method so wrapping in try/catch
	try
	{
		return $.GetUserWebData( strKey, strDefault );
	}
	catch( e )
	{

	}

	return strDefault;
}
