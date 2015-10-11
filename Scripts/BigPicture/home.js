
var CStoreHome = function( navigation )
{
	this.m_navigation = navigation;
	this.m_rgHomeSections = { not_implemented: '' };
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
		pSection = $.CreatePanel( 'Panel', pContent, strID );
		if ( !pSection.BLoadLayoutFromString( this.GetSectionTemplate( strSection ), true, false ) )
		{
			$.Msg( 'Failed to load layout file: ' + strSection );
			return;
		}

		pSection.AddClass( 'NxRightContentContainer' );
	}

	this.m_navigation.ShowPanel( pSection );
}

CStoreHome.prototype.FocusDiscoveryQueue = function()
{
	// set button into focus to create section
	$( '#ExploreBtn').SetFocus();

	// find queue button
	var pContent = $( '#LoadedContent' );
	for ( var i = 0; i < pContent.GetChildCount(); i++ )
	{
		var pChild = pContent.GetChild( i );
		if ( !pChild.BHasClass( 'HomeExplore' ) )
			continue;

		var pQueue = pChild.FindChildInLayoutFile( 'DiscoveryQueue' );
		$.DispatchEventAsync( 0.1, 'SetInputFocus', pQueue );
	}
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

function ShowAppLibraryPage( nAppID )
{
	$.DispatchEvent( 'LibraryShowApp', nAppID );
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

	var pScript = "\r\n\t\tvar nViewedAppID = %viewed_app%;\r\n\t\tvar postData = {};\r\n\t\tpostData.sessionid = %sessionid%;\r\n\t\tif ( nViewedAppID != 0 )\r\n\t\t\tpostData.appid_to_clear_from_queue = nViewedAppID;\r\n\r\n\t\t$.AsyncWebRequest( 'https:\/\/store.steampowered.com\/explore\/next',\r\n\t\t{\r\n\t\t\ttype: 'POST',\r\n\t\t\tdata: postData,\r\n\t\t\tsuccess: function (data)\r\n\t\t\t{\r\n\t\t\t\tif ( data.empty_queue )\r\n\t\t\t\t{\r\n\t\t\t\t\tvar strURL = 'https:\/\/store.steampowered.com\/bigpicture\/home\/?focus=discovery_queue';\r\n\t\t\t\t\t$.DispatchEvent( 'OpenRemoteContent', strURL , 'Store', 2 );\r\n\t\t\t\t\treturn;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif ( !data.appid )\r\n\t\t\t\t{\r\n\t\t\t\t\t$.GetContextPanel().ShowError( 'There was an error loading your next queue item. Please try again later.');\r\n\t\t\t\t\treturn;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tvar strURL = 'https:\/\/store.steampowered.com\/app\/' + data.appid;\r\n\t\t\t\tvar pContentParent = $.TenfootController($.GetContextPanel()).GetContentParent();\r\n\r\n\t\t\t\t$.PushBackStack( $.GetContextPanel(), 'OpenRemoteContent( ' + strURL + ', ' + data.name + ', 2 )', pContentParent );\r\n\t\t\t\t$.GetContextPanel().LoadPanelAsyncWithWebAuth( strURL, true );\r\n\t\t\t\t$.DispatchEvent( 'SetContentTitle', $.GetContextPanel(), data.name );\r\n\t\t\t},\r\n\t\t\terror: function()\r\n\t\t\t{\r\n\t\t\t\t$.GetContextPanel().ShowError( 'There was an error loading your next queue item. Please try again later.');\r\n\t\t\t}\r\n\t\t});";
	pScript = pScript.replace( '%sessionid%', strSessionID );
	pScript = pScript.replace( '%viewed_app%', nViewedAppID );

	var pContent = $.CreatePanel( 'RemoteContent', $.TenfootController($.GetContextPanel()).GetContentParent(), '' );
	pContent.SetPanelEvent( 'onload', pScript );
	pContent.AddClass( 'ContentPanel' );
	pContent.SetAttributeString( 'content-title', 'Your Discovery Queue' );
	pContent.SetAttributeInt( 'content-delete-at-stack-depth', 1 );
	pContent.ShowLoading();
	pContent.SetFocus();

	$.PushBackStack( pContent, 'BackStackPlaceholder()' );
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
	$.RegisterFooterButton( pContextPanel, 'pad_x', 'Search' );
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
	
	var pScript = "\r\n\t\t$.AsyncWebRequest( 'https:\/\/store.steampowered.com\/cart\/addtocart',\r\n\t\t{\r\n\t\t\ttype: 'POST',\r\n\t\t\tdata: {\r\n\t\t\t\tsessionid: '%sessionid%',\r\n\t\t\t\taction: 'add_to_cart',\r\n\t\t\t\t%typeid%: %itemid%\r\n\t\t\t},\r\n\t\t\tsuccess: function (data)\r\n\t\t\t{\r\n\t\t\t\tvar strURL = 'https:\/\/store.steampowered.com\/cart';\r\n\t\t\t\tvar strTitle = 'Your Shopping Cart';\r\n\t\t\t\tvar pContentParent = $.TenfootController($.GetContextPanel()).GetContentParent();\r\n\r\n\t\t\t\t$.PushBackStack( $.GetContextPanel(), 'OpenRemoteContent( ' + strURL + ', ' + strTitle + ', 2 )', pContentParent );\r\n\t\t\t\t$.GetContextPanel().LoadPanelAsyncWithWebAuth( strURL, true );\r\n\t\t\t},\r\n\t\t\terror: function()\r\n\t\t\t{\r\n\t\t\t\t$.GetContextPanel().ShowError( 'Steam was unable to add this item to your cart. Please try again later.');\r\n\t\t\t}\r\n\t\t});";
	pScript = pScript.replace( '%sessionid%', strSessionID );
	pScript = pScript.replace( '%typeid%', strType );
	pScript = pScript.replace( '%itemid%', nItemID );

	var pContent = $.CreatePanel( 'RemoteContent', $.TenfootController($.GetContextPanel()).GetContentParent(), '' );
	pContent.SetPanelEvent( 'onload', pScript );
	pContent.AddClass( 'ContentPanel' );
	pContent.SetAttributeString( 'content-title', 'Your Shopping Cart' );
	pContent.SetAttributeInt( 'content-delete-at-stack-depth', 1 );
	pContent.ShowLoading();
	pContent.SetFocus();

	$.PushBackStack( pContent, 'BackStackPlaceholder()' );
}


/////////////////////
// Slideshow
/////////////////////
var CStoreSlideshow = function( pPanel, strFullscreenLayout )
{
	this.m_pPanel = pPanel;
	this.m_eMode = CStoreSlideshow.k_eModeEmbedded;
	this.m_iFocusedChild = -1;
	this.m_strFullscreenLayout = strFullscreenLayout;
	this.m_bTransitioning = false;
	this.m_schNextPanel = null;

	this.Init();
}

CStoreSlideshow.k_LeftOfFocusStyle = 'SlideshowLeftOfFocus';
CStoreSlideshow.k_RightOfFocusStyle = 'SlideshowRightOfFocus';
CStoreSlideshow.k_RightOfFocusImmediateStyle = 'SlideshowRightOfFocusImmediate';
CStoreSlideshow.k_eModeEmbedded = 0;
CStoreSlideshow.k_eModeFullscreen = 1;
CStoreSlideshow.k_flNextPanelDelay = 5.0;

CStoreSlideshow.prototype.Init = function()
{
	var _slideshow = this;

	this.m_pPanel.SetAcceptsFocus( true );
	$.RegisterEventHandler( 'Activated', this.m_pPanel, function( pPanel ) { return _slideshow.OnActivated( pPanel ); } );
	$.RegisterEventHandler( 'InputFocusSet', this.m_pPanel, function( pPanel ) { return _slideshow.OnFocusSet( pPanel ); } );
	$.RegisterEventHandler( 'Cancelled', this.m_pPanel, function( pPanel ) { return _slideshow.OnCancelled( pPanel ); } );
	$.RegisterEventHandler( 'PropertyTransitionEnd', this.m_pPanel, function( pPanel, property ) { return _slideshow.OnPropertyTransitionEnd( pPanel, property ); } );
	$.RegisterEventHandler( 'MoviePlayerPlaybackEnded', this.m_pPanel, function( pPanel, eError ) { return _slideshow.OnMoviePlayerPlaybackEnded( pPanel, eError ); } )

	$.RegisterKeyBind( this.m_pPanel, 'pad_left_shoulder,steampad_lshoulder', function() { _slideshow.OnLeftShoudler(); } );
	$.RegisterKeyBind( this.m_pPanel, 'pad_right_shoulder,steampad_rshoulder', function() { _slideshow.OnRightShoudler(); } );

	// initialize child positions
	for ( var i = 0; i < this.m_pPanel.GetChildCount(); i++ )
	{
		var pChild = this.m_pPanel.GetChild( i );
		pChild.SetAcceptsFocus( true );
		$.RegisterEventHandler( 'MoveLeft', pChild, function( pPanel ) { return _slideshow.OnMoveLeft(); } );
		$.RegisterEventHandler( 'MoveRight', pChild, function( pPanel ) { return _slideshow.OnMoveRight(); } );

		if ( i > 0 )
			this.ForceRightOfFocus( pChild );
	}

	this.SetFocusedChild( 0 );
}

CStoreSlideshow.prototype.ForceRightOfFocus = function( pPanel )
{
	pPanel.AddClass( CStoreSlideshow.k_RightOfFocusImmediateStyle );
	pPanel.AddClass( CStoreSlideshow.k_RightOfFocusStyle );
	pPanel.RemoveClass( CStoreSlideshow.k_LeftOfFocusStyle );
	pPanel.ApplyStyles( false );
	pPanel.RemoveClass( CStoreSlideshow.k_RightOfFocusImmediateStyle );
	pPanel.ApplyStyles( false );
}

CStoreSlideshow.prototype.SetFocusedChild = function( iChild )
{
	if ( this.m_iFocusedChild == iChild )
		return;

	if ( iChild < 0 || iChild >= this.m_pPanel.GetChildCount() )
		return;

	// if this was a movie, need to pause
	var pMovie = this.GetChildIfMovie( this.m_iFocusedChild );
	if ( pMovie )
	{
		// hiding controls prevents player from showing UI on pause
		pMovie.SetControls( 'none' );
		pMovie.Pause();
	}

	for ( var i = 0; i < this.m_pPanel.GetChildCount(); i++ )
		this.SetChildStyle( i, iChild );

	this.m_iFocusedChild = iChild;

	// play new movie
	pMovie = this.GetChildIfMovie( this.m_iFocusedChild );
	if ( pMovie )
	{
		pMovie.Play();
		if ( this.m_eMode == CStoreSlideshow.k_eModeFullscreen )
			pMovie.SetControls( 'full' );
	}

	if ( !pMovie )
		this.ScheduleNextPanel( CStoreSlideshow.k_flNextPanelDelay );
	else
		this.ScheduleNextPanel( 0 );
}

CStoreSlideshow.prototype.GetChildIfMovie = function( iChild )
{
	var pChild = this.m_pPanel.GetChild( iChild );
	if ( !pChild || pChild.paneltype != 'Movie' )
		return null;

	return pChild;
}

CStoreSlideshow.prototype.SetChildStyle = function( iChild, iNewFocus )
{
	var pChild = this.m_pPanel.GetChild( iChild );
	if ( !pChild )
		return;

	if ( iChild < iNewFocus )
	{
		pChild.AddClass( CStoreSlideshow.k_LeftOfFocusStyle );
		pChild.RemoveClass( CStoreSlideshow.k_RightOfFocusStyle );
	}
	else if ( iChild > iNewFocus )
	{
		pChild.AddClass( CStoreSlideshow.k_RightOfFocusStyle  );
		pChild.RemoveClass( CStoreSlideshow.k_LeftOfFocusStyle );
	}
	else
	{
		pChild.RemoveClass( CStoreSlideshow.k_LeftOfFocusStyle );
		pChild.RemoveClass( CStoreSlideshow.k_RightOfFocusStyle );
	}
}

CStoreSlideshow.prototype.ScheduleNextPanel = function( nDelay )
{
	if ( this.m_schNextPanel != undefined )
	{
		$.CancelScheduled( this.m_schNextPanel );
		this.m_schNextPanel = undefined;
	}

	if ( nDelay == 0 )
		return;

	var _slideshow = this;
	this.m_schNextPanel = $.Schedule( nDelay, function() { _slideshow.OnScheduledNextPanel() } );
}

CStoreSlideshow.prototype.OnScheduledNextPanel = function()
{
	this.m_schNextPanel = undefined;

	// don't navigate away if user is watching a movie and adjusting the movie volume
	var pMovie = this.GetChildIfMovie( this.m_iFocusedChild );
	if ( pMovie && pMovie.BAdjustingVolume() )
	{
		this.ScheduleNextPanel( CStoreSlideshow.k_flNextPanelDelay );
		return;
	}

	// at far right? Move to first child
	var cChildren = this.m_pPanel.GetChildCount();
	if ( this.m_iFocusedChild >= (cChildren - 1) && cChildren > 1 )
	{
		// force children but this one to be to the right
		for ( var i = 0; i < cChildren; i++ )
		{
			if ( i == this.m_iFocusedChild )
				continue;

			var pChild = this.m_pPanel.GetChild( i );
			this.ForceRightOfFocus( pChild );
		}

		this.SetFocusedChild( 0 );

		// make last child go to the left
		var pLast = CPanelUtils.GetLastChild( this.m_pPanel );
		pLast.AddClass( CStoreSlideshow.k_LeftOfFocusStyle );
		pLast.RemoveClass( CStoreSlideshow.k_RightOfFocusStyle );

		return;
	}

	this.MoveRight();
}

CStoreSlideshow.prototype.MoveLeft = function()
{
	if ( this.m_iFocusedChild <= 0 || this.m_pPanel.GetChildCount() <= 1 )
		return;

	this.SetFocusedChild( this.m_iFocusedChild - 1 );

	if ( this.m_pPanel.BHasDescendantKeyFocus() || this.m_pPanel.BHasKeyFocus() )
	{
		var pChild = this.m_pPanel.GetChild( this.m_iFocusedChild );
		pChild.SetFocus();
	}
}

CStoreSlideshow.prototype.MoveRight = function()
{
	var cChildren = this.m_pPanel.GetChildCount();
	if ( this.m_iFocusedChild >= (cChildren - 1) || cChildren <= 1 )
		return;

	this.SetFocusedChild( this.m_iFocusedChild + 1 );

	if ( this.m_pPanel.BHasDescendantKeyFocus() || this.m_pPanel.BHasKeyFocus() )
	{
		var pChild = this.m_pPanel.GetChild( this.m_iFocusedChild );
		pChild.SetFocus();
	}
}

CStoreSlideshow.prototype.GetFocusedChild = function()
{
	if ( this.m_iFocusedChild < 0 || this.m_iFocusedChild >= this.m_pPanel.GetChildCount() )
		return null;

	return this.m_pPanel.GetChild( this.m_iFocusedChild );
}

CStoreSlideshow.prototype.OnFocusSet = function( pPanel )
{
	if ( !pPanel )
		return false;

	// if set to us, set forward to child
	if ( pPanel == this.m_pPanel )
	{
		var pFocusedChild = this.GetFocusedChild();
		if ( pFocusedChild )
		{
			$.DispatchEventAsync( 0.0, 'SetInputFocus', pFocusedChild );
			return true;
		}
	}

	// get direct child
	while ( pPanel && pPanel.GetParent() != this.m_pPanel )
		pPanel = pPanel.GetParent();

	if ( !pPanel )
		return false;

	this.SetFocusedChild( this.m_pPanel.GetChildIndex( pPanel ) );
}

CStoreSlideshow.prototype.OnActivated = function( pPanel )
{
	if ( this.m_eMode != CStoreSlideshow.k_eModeEmbedded )
		return false;

	if ( this.m_bTransitioning )
		return true;

	this.m_bTransitioning = true;

	// go fullscreen
	var pos = this.m_pPanel.GetPositionWithinWindow();
	var width = this.m_pPanel.actuallayoutwidth;
	var height = this.m_pPanel.actuallayoutheight;

	// add a child to hold input focus in this input context
	this.m_pHoldingFocus = $.CreatePanel( 'Panel', this.m_pPanel.GetParent(), this.m_pPanel.id );
	this.m_pHoldingFocus.SetAcceptsFocus( true );
	this.m_pHoldingFocus.SetFocus();

	var pContainer = this.CreateFullscreenContainer();
	pContainer.SetTopOfInputContext( true );
	this.m_pPanel.SetParent( pContainer );

	var flRatioWidth = width / 1920;
	var flRatioHeight = height / 1080;
	this.m_pPanel.style.transform = 'scale3d( ' + flRatioWidth + ', ' + flRatioHeight + ', 1.0 ) translate3d( ' + pos.x + 'px, ' + pos.y + 'px, ' + ' 0px )';
	this.m_pPanel.ApplyStyles( false );

	this.m_pPanel.AddClass( 'Transitioning' );
	this.m_pPanel.ApplyStyles( false );

	this.m_pPanel.style.transform = 'none';
	this.m_pPanel.SetFocus();

	return true;
}

CStoreSlideshow.prototype.CreateFullscreenContainer = function()
{
	var pContainer = $.CreatePanel( 'Panel', $.TenfootController( $.GetContextPanel() ).AccessMainMenu(), 'StoreSlideshowContainer' );
	pContainer.BLoadLayoutFromString( this.m_strFullscreenLayout, true, false );

	return pContainer;
}

CStoreSlideshow.prototype.OnMoveLeft = function()
{
	if ( this.m_bTransitioning )
		return true;

	if ( this.m_eMode == CStoreSlideshow.k_eModeEmbedded )
		return false;

	this.MoveLeft();
	return true;
}

CStoreSlideshow.prototype.OnMoveRight = function()
{
	if ( this.m_bTransitioning )
		return true;

	if ( this.m_eMode == CStoreSlideshow.k_eModeEmbedded )
		return false;

	this.MoveRight();
	return true;
}

CStoreSlideshow.prototype.OnLeftShoudler = function()
{
	if ( this.m_eMode == CStoreSlideshow.k_eModeEmbedded )
		this.MoveLeft();
}

CStoreSlideshow.prototype.OnRightShoudler = function()
{
	if ( this.m_eMode == CStoreSlideshow.k_eModeEmbedded )
		this.MoveRight();
}

CStoreSlideshow.prototype.OnCancelled = function()
{
	if ( this.m_bTransitioning )
		return true;

	if ( this.m_eMode != CStoreSlideshow.k_eModeFullscreen )
		return false;

	this.m_bTransitioning = true;

	// start transition back
	var pos = this.m_pHoldingFocus.GetPositionWithinWindow();
	var width = this.m_pHoldingFocus.actuallayoutwidth;
	var height = this.m_pHoldingFocus.actuallayoutheight;
	var flRatioWidth = width / 1920;
	var flRatioHeight = height / 1080;
	this.m_pPanel.style.transform = 'scale3d( ' + flRatioWidth + ', ' + flRatioHeight + ', 1.0 ) translate3d( ' + pos.x + 'px, ' + pos.y + 'px, ' + ' 0px )';

	return true;
}

CStoreSlideshow.prototype.OnPropertyTransitionEnd = function( pPanel, property )
{
	if ( property != 'transform' || !pPanel )
		return false;

	// for the last panel, need to force it to the right after transition
	if ( pPanel.GetParent() == this.m_pPanel )
	{
		var iLastChild = this.m_pPanel.GetChildCount() - 1;
		if ( this.m_pPanel.GetChildIndex( pPanel ) == iLastChild && this.m_iFocusedChild != iLastChild )
			this.ForceRightOfFocus( pPanel );

		return;
	}

	// rest of function handles slideshow transitioning between fullscreen
	if ( pPanel != this.m_pPanel || !this.m_bTransitioning )
		return false;

	this.m_bTransitioning = false;
	if ( this.m_eMode == CStoreSlideshow.k_eModeFullscreen )
	{
		this.m_eMode = CStoreSlideshow.k_eModeEmbedded;

		this.m_pPanel.RemoveClass( 'Transitioning' );
		this.m_pPanel.ApplyStyles( false );
		this.m_pPanel.style.transform = 'none';

		var pContainer = this.m_pPanel.GetParent();
		this.m_pPanel.SetParent( this.m_pHoldingFocus.GetParent() );
		this.m_pPanel.SetFocus();

		pContainer.DeleteAsync( 0.0 );
		this.m_pHoldingFocus.DeleteAsync( 0.0 );
		this.m_pHoldingFocus = null;
	}
	else
	{
		this.m_eMode = CStoreSlideshow.k_eModeFullscreen;
	}

	// update movie control states
	var strMode = (this.m_eMode == CStoreSlideshow.k_eModeFullscreen) ? 'full' : 'none';
	for ( var i = 0; i < this.m_pPanel.GetChildCount(); i++ )
	{
		pMovie = this.GetChildIfMovie( i );
		if ( pMovie )
			pMovie.SetControls( strMode );
	}

	return false;
}

CStoreSlideshow.prototype.OnMoviePlayerPlaybackEnded = function( pPanel, eError )
{
	if ( pPanel.GetParent() != this.m_pPanel )
		return false;

	if ( this.m_pPanel.GetChildIndex( pPanel ) != this.m_iFocusedChild )
		return false;

	// if there was a playback error.. treat this like an image so user can see error
	var flDelay = (eError == 0)? 0.01 : 0;
	this.ScheduleNextPanel( flDelay );
}