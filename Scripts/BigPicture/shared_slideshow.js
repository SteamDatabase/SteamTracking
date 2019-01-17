
var CSlideshow = function( pPanel )
{
	this.m_pPanel = pPanel;
	this.m_eMode = CSlideshow.k_eModeEmbedded;
	this.m_iFocusedChild = -1;
	this.m_bTransitioning = false;
	this.m_schNextPanel = undefined;
	this.m_bEnabled = false;
	this.m_bShowNavHintsOnFocus = true;
	this.m_schHideNavHints = undefined;

	this.Init();
}

CSlideshow.k_LeftOfFocusStyle = 'SlideshowLeftOfFocus';
CSlideshow.k_RightOfFocusStyle = 'SlideshowRightOfFocus';
CSlideshow.k_RightOfFocusImmediateStyle = 'SlideshowRightOfFocusImmediate';
CSlideshow.k_eModeEmbedded = 0;
CSlideshow.k_eModeFullscreen = 1;
CSlideshow.k_flNextPanelDelay = 5.0;

CSlideshow.prototype.Init = function()
{
	var _slideshow = this;

	this.m_pPanel.SetAcceptsFocus( true );
	$.RegisterEventHandler( 'Activated', this.m_pPanel, function( pPanel ) { return _slideshow.OnActivated( pPanel ); } );
	$.RegisterEventHandler( 'InputFocusSet', this.m_pPanel, function( pPanel ) { return _slideshow.OnFocusSet( pPanel ); } );
	$.RegisterEventHandler( 'InputFocusLost', this.m_pPanel, function( pPanel ) { return _slideshow.OnFocusLost( pPanel ); } );
	$.RegisterEventHandler( 'Cancelled', this.m_pPanel, function( pPanel ) { return _slideshow.OnCancelled( pPanel ); } );
	$.RegisterEventHandler( 'PropertyTransitionEnd', this.m_pPanel, function( pPanel, property ) { return _slideshow.OnPropertyTransitionEnd( pPanel, property ); } );
	$.RegisterEventHandler( 'MoviePlayerPlaybackEnded', this.m_pPanel, function( pPanel, eError ) { return _slideshow.OnMoviePlayerPlaybackEnded( pPanel, eError ); } );
	$.RegisterEventHandler( 'ContributeToFooterPanel', this.m_pPanel, function( pPanel, pFooter ) { return _slideshow.OnContributeToFooterPanel( pPanel, pFooter ); } );
	$.RegisterEventHandler( 'GuideButton', this.m_pPanel, function( pPanel ) { return _slideshow.OnGuideButton( pPanel ); } );
	$.RegisterEventHandler( 'GuideButtonUp', this.m_pPanel, function( pPanel ) { return _slideshow.OnGuideButton( pPanel ); } );

	$.RegisterKeyBind( this.m_pPanel, 'pad_ltrigger,steampad_ltrigger', function() { _slideshow.OnLeftShoulder(); } );
	$.RegisterKeyBind( this.m_pPanel, 'pad_rtrigger,steampad_rtrigger', function() { _slideshow.OnRightShoulder(); } );

	// init ui
	this.CreateEmbedArrows();

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

CSlideshow.prototype.ForceRightOfFocus = function( pPanel )
{
	pPanel.AddClass( CSlideshow.k_RightOfFocusImmediateStyle );
	pPanel.AddClass( CSlideshow.k_RightOfFocusStyle );
	pPanel.RemoveClass( CSlideshow.k_LeftOfFocusStyle );
	pPanel.ApplyStyles( false );
	pPanel.RemoveClass( CSlideshow.k_RightOfFocusImmediateStyle );
	pPanel.ApplyStyles( false );
}

CSlideshow.prototype.SetFocusedChild = function( iChild )
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
		if ( this.m_eMode == CSlideshow.k_eModeFullscreen )
			pMovie.SetControls( 'full' );
	}

	if ( !pMovie )
		this.ScheduleNextPanel( CSlideshow.k_flNextPanelDelay );
	else
		this.ScheduleNextPanel( 0 );
}

CSlideshow.prototype.GetChildIfMovie = function( iChild )
{
	var pChild = this.m_pPanel.GetChild( iChild );
	if ( !pChild || pChild.paneltype != 'Movie' )
		return null;

	return pChild;
}

CSlideshow.prototype.SetChildStyle = function( iChild, iNewFocus )
{
	var pChild = this.m_pPanel.GetChild( iChild );
	if ( !pChild )
		return;

	if ( iChild < iNewFocus )
	{
		pChild.AddClass( CSlideshow.k_LeftOfFocusStyle );
		pChild.RemoveClass( CSlideshow.k_RightOfFocusStyle );
	}
	else if ( iChild > iNewFocus )
	{
		pChild.AddClass( CSlideshow.k_RightOfFocusStyle  );
		pChild.RemoveClass( CSlideshow.k_LeftOfFocusStyle );
	}
	else
	{
		pChild.RemoveClass( CSlideshow.k_LeftOfFocusStyle );
		pChild.RemoveClass( CSlideshow.k_RightOfFocusStyle );
	}
}

CSlideshow.prototype.ScheduleNextPanel = function( nDelay )
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

CSlideshow.prototype.OnScheduledNextPanel = function()
{
	this.m_schNextPanel = undefined;

	// don't navigate away if user is watching a movie and adjusting the movie volume
	var pMovie = this.GetChildIfMovie( this.m_iFocusedChild );
	if ( pMovie && pMovie.BAdjustingVolume() )
	{
		this.ScheduleNextPanel( CSlideshow.k_flNextPanelDelay );
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
		pLast.AddClass( CSlideshow.k_LeftOfFocusStyle );
		pLast.RemoveClass( CSlideshow.k_RightOfFocusStyle );

		return;
	}

	this.MoveRight();
}

CSlideshow.prototype.MoveLeft = function()
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

CSlideshow.prototype.MoveRight = function()
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

CSlideshow.prototype.GetFocusedChild = function()
{
	if ( this.m_iFocusedChild < 0 || this.m_iFocusedChild >= this.m_pPanel.GetChildCount() )
		return null;

	return this.m_pPanel.GetChild( this.m_iFocusedChild );
}

CSlideshow.prototype.OnFocusSet = function( pPanel )
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

	// show nav hints if necessary
	if ( this.m_bShowNavHintsOnFocus )
	{
		this.m_pPanel.AddClass( 'ShowNavHints' );
		this.ScheduleHideNavHints( 10 );
		this.m_bShowNavHintsOnFocus = false;
	}
}

CSlideshow.prototype.OnFocusLost = function( pPanel )
{
	if ( !this.m_pPanel.BHasDescendantKeyFocus() && !this.m_pPanel.BHasKeyFocus() && !this.m_bTransitioning )
	{
		this.m_pPanel.RemoveClass( 'ShowNavHints' );
		this.ScheduleHideNavHints( 0 );
		this.m_bShowNavHintsOnFocus = true;
	}
}

CSlideshow.prototype.ScheduleHideNavHints = function( nDelay )
{
	if ( this.m_schHideNavHints != undefined )
	{
		$.CancelScheduled( this.m_schHideNavHints );
		this.m_schHideNavHints = undefined;
	}

	if ( nDelay == 0 )
		return;

	var _slideshow = this;
	this.m_schHideNavHints = $.Schedule( nDelay, function() { _slideshow.m_pPanel.RemoveClass( 'ShowNavHints' ); _slideshow.m_schHideNavHints = undefined; } );
}

CSlideshow.prototype.HideNavHints = function()
{
	this.ScheduleHideNavHints(0);
	this.m_pPanel.RemoveClass('ShowNavHints');
}

CSlideshow.prototype.OnActivated = function( pPanel )
{
	if ( this.m_eMode != CSlideshow.k_eModeEmbedded )
		return false;

	if ( this.m_bTransitioning )
		return true;

	this.m_bTransitioning = true;

	// go fullscreen
	this.HideNavHints();
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

CSlideshow.prototype.CreateFullscreenContainer = function()
{
	var pContainer = $.CreatePanelWithCurrentContext( $.TenfootController( $.GetContextPanel() ).AccessMainMenu() );
	pContainer.AddClass( 'SlideshowContainer' );

	this.CreateHeaderBar( pContainer );

	return pContainer;
}

CSlideshow.prototype.OnMoveLeft = function()
{
	if ( this.m_bTransitioning )
		return true;

	if ( this.m_eMode == CSlideshow.k_eModeEmbedded )
		return false;

	this.MoveLeft();
	return true;
}

CSlideshow.prototype.OnMoveRight = function()
{
	if ( this.m_bTransitioning )
		return true;

	if ( this.m_eMode == CSlideshow.k_eModeEmbedded )
		return false;

	this.MoveRight();
	return true;
}

CSlideshow.prototype.OnLeftShoulder = function()
{
	this.HideNavHints();
	this.MoveLeft();
}

CSlideshow.prototype.OnRightShoulder = function()
{
	this.HideNavHints();
	this.MoveRight();
}

CSlideshow.prototype.OnCancelled = function()
{
	return this.ExitFullscreen();
}

CSlideshow.prototype.ExitFullscreen = function()
{
	if ( this.m_bTransitioning )
		return true;

	if ( this.m_eMode != CSlideshow.k_eModeFullscreen )
		return false;

	this.m_bTransitioning = true;

	// start transition back
	var pos = this.m_pHoldingFocus.GetPositionWithinWindow();
	var width = this.m_pHoldingFocus.actuallayoutwidth;
	var height = this.m_pHoldingFocus.actuallayoutheight;
	var flRatioWidth = width / 1920;
	var flRatioHeight = height / 1080;
	this.m_pPanel.style.transform = 'scale3d( ' + flRatioWidth + ', ' + flRatioHeight + ', 1.0 ) translate3d( ' + pos.x + 'px, ' + pos.y + 'px, ' + ' 0px )';

	// remove focus from children to clear focus flags
	var pContainer = this.m_pPanel.GetParent();
	pContainer.SetAcceptsFocus( true );
	pContainer.UpdateFocusInContext();

	return true;
}

CSlideshow.prototype.ExitFullscreenImmediately = function()
{
	// remove focus from children to clear focus flags
	var pContainer = this.m_pPanel.GetParent();
	pContainer.SetAcceptsFocus( true );
	pContainer.UpdateFocusInContext();

	this.CompleteExitFullscreen();
}

CSlideshow.prototype.CompleteExitFullscreen = function()
{
	this.m_bTransitioning = false;
	this.m_eMode = CSlideshow.k_eModeEmbedded;
	this.m_pPanel.RemoveClass( 'Transitioning' );
	this.m_pPanel.ApplyStyles( false );
	this.m_pPanel.style.transform = 'none';

	var pContainer = this.m_pPanel.GetParent();
	this.m_pPanel.SetParent(this.m_pHoldingFocus.GetParent());

	// only set focus if holding still has focus (pressing guide buttonn will move focus)
	var bHadFocus = ( this.m_pHoldingFocus.BHasKeyFocus() || this.m_pHoldingFocus.BHasDescendantKeyFocus() );
	if ( bHadFocus )
		this.m_pPanel.UpdateFocusInContext();

	pContainer.DeleteAsync(0.0);
	this.m_pHoldingFocus.DeleteAsync(0.0);
	this.m_pHoldingFocus = null;

	this.UpdateMovieControlStates();
}

CSlideshow.prototype.UpdateMovieControlStates = function()
{
	var strMode = (this.m_eMode == CSlideshow.k_eModeFullscreen) ? 'full' : 'none';
	for ( var i = 0; i < this.m_pPanel.GetChildCount(); i++ )
	{
		var pMovie = this.GetChildIfMovie( i );
		if ( pMovie )
			pMovie.SetControls( strMode );
	}
}

CSlideshow.prototype.OnPropertyTransitionEnd = function( pPanel, property )
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
	if ( this.m_eMode == CSlideshow.k_eModeFullscreen )
	{
		this.CompleteExitFullscreen();
	}
	else
	{
		this.m_eMode = CSlideshow.k_eModeFullscreen;
		this.UpdateMovieControlStates();
	}

	return false;
}

CSlideshow.prototype.OnMoviePlayerPlaybackEnded = function( pPanel, eError )
{
	if ( pPanel.GetParent() != this.m_pPanel )
		return false;

	if ( this.m_pPanel.GetChildIndex( pPanel ) != this.m_iFocusedChild )
		return false;

	// if there was a playback error.. treat this like an image so user can see error
	var flDelay = (eError == 0)? 0.01 : 0;
	this.ScheduleNextPanel( flDelay );
}

CSlideshow.prototype.IsFullscreen = function()
{
	var bFullscreen = false;
	if ( this.m_bTransitioning && this.m_eMode == CSlideshow.k_eModeEmbedded )
		bFullscreen = true;
	if ( !this.m_bTransitioning && this.m_eMode == CSlideshow.k_eModeFullscreen )
		bFullscreen = true;

	return bFullscreen;
}

CSlideshow.prototype.OnContributeToFooterPanel = function( pPanel, pFooter )
{
	var bFullscreen = this.IsFullscreen();
	if ( bFullscreen )
		pFooter.HideAllPanels();
}

CSlideshow.prototype.SetEnabled = function( bEnabled )
{
	if ( this.m_bEnabled == bEnabled )
		return;

	this.m_bEnabled = bEnabled;

	var pMovie = this.GetChildIfMovie( this.m_iFocusedChild );
	if ( this.m_bEnabled )
	{
		if ( pMovie )
			pMovie.Play();
		else
			this.ScheduleNextPanel( CSlideshow.k_flNextPanelDelay );
	}
	else
	{
		this.ScheduleNextPanel( 0 );
		if ( pMovie )
			pMovie.Pause();
	}
}

CSlideshow.prototype.CreateEmbedArrows = function()
{
	// older clients don't support creating mouse scroll regions
	var pLeft = null;
	var pRight = null;
	try
	{
		pLeft = $.CreatePanel( 'MouseScrollRegion', this.m_pPanel, '' );
		pRight = $.CreatePanel( 'MouseScrollRegion', this.m_pPanel, '' );
	}
	catch ( e )
	{
	}

	if ( !pLeft || !pRight )
		return;

	var _slideshow = this;
	pLeft.AddClass( 'SlideshowNavHints' );
	pLeft.AddClass( 'NavHintLeft' );
	pLeft.BCreateChildren( '<Image src="file://{images}/arrow_left.png" /><Image class="NavHintButton" src="file://{images}/library/controller/api/trigger_l_pull.png" />' );
	$.RegisterEventHandler( 'MouseScroll', pLeft, function( pPanel ) { _slideshow.OnNavButtonScroll( pPanel ); });


	pRight.AddClass( 'SlideshowNavHints' );
	pRight.AddClass( 'NavHintRight' );
	pRight.BCreateChildren( '<Image class="NavHintButton" src="file://{images}/library/controller/api/trigger_r_pull.png" /><Image src="file://{images}/arrow_right.png" />' );
	$.RegisterEventHandler( 'MouseScroll', pRight, function( pPanel ) { _slideshow.OnNavButtonScroll( pPanel ); });
}


CSlideshow.prototype.CreateHeaderBar = function( pContainer )
{
	var pHeader = $.CreatePanel( 'Panel', pContainer, 'ContentFrameHeader' );
	var pBack = $.CreatePanel( 'Panel', pHeader, 'ContentMouseBackButton' );
	pBack.AddClass( 'ContentMouseBackButton' );

	var _slideshow = this;
	pBack.SetPanelEvent( 'onmouseactivate', function() { _slideshow.ExitFullscreen(); } );

	var pMenu = $.CreatePanel( 'Panel', pHeader, 'ContentHomeButton' );
	pMenu.AddClass( 'SteamLogo' );
	pMenu.AddClass( 'ContentHomeButton' );
	pMenu.SetPanelEvent( 'onmouseactivate', function() { _slideshow.ExitFullscreen(); $.DispatchEventAsync( 0.25, 'ShowMainMenu' ); } );
}


CSlideshow.prototype.OnNavButtonScroll = function( pPanel )
{
	if ( !pPanel )
		return;

	if ( pPanel.BHasClass( 'NavHintLeft' ) )
		this.OnLeftShoulder();
	else if ( pPanel.BHasClass( 'NavHintRight' ) )
		this.OnRightShoulder();
}

CSlideshow.prototype.OnGuideButton = function( pPanel )
{
	// if not fullscreen, ok to let button events bubble
	if ( !this.IsFullscreen() )
		return false;

	// minimize
	this.ExitFullscreenImmediately();
	return false;
}