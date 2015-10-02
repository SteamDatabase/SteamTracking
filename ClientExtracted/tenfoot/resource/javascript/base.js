/**
 * Adds/removes a class on the ancestorPanel when the given panel receives hover events
 */
function SetupPanelHoverEvents( panel, ancestorPanel, className )
{
	panel.SetPanelEvent( 
		'onmouseover', 
		function() {
			ancestorPanel.AddClass( className );
		} 
	);
	panel.SetPanelEvent( 
		'onmouseout', 
		function() {
			ancestorPanel.RemoveClass( className );
		} 
	);
}


/**
 * Helper function to add mouseover/mouseout events when hovering over a menu or content panel
 * which then adds/removes a class from an ancestor panel
 */
function SetupMenuAndContentHoverEvents( menuPanelID, menuHoverClass, contentPanelID, contentHoverClass, ancestorPanelID )
{
	var menuPanel = $( '#' + menuPanelID );
	var contentPanel = $( '#' + contentPanelID );
	var ancestorPanel = $( '#' + ancestorPanelID );

	SetupPanelHoverEvents( menuPanel, ancestorPanel, menuHoverClass );
	SetupPanelHoverEvents( contentPanel, ancestorPanel, contentHoverClass );
}