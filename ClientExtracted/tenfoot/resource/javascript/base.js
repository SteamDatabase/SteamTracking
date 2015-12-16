/**
 * Helper function to add mouseover/mouseout events when hovering over a menu or content panel
 * which then adds/removes a class from an ancestor panel
 */
function SetupMenuAndContentHoverEvents( menuPanelID, menuHoverClass, contentPanelID, contentHoverClass, ancestorPanelID )
{
	var ancestorPanel = $( '#' + ancestorPanelID );

	var hoverItemStyles = {};
	hoverItemStyles[menuPanelID] = menuHoverClass;
	hoverItemStyles[contentPanelID] = contentHoverClass;

	var _this = this;
	SetupPanelsHoverEvents( hoverItemStyles, ancestorPanel, function( pPanel )
	{
		// mouse is hovering over one of the panels in hoverItemStyles. If it is the target container panel, and focus
		// is still in this context, pull focus to that panel
		var pContext = $.GetContextPanel();
		if ( !pContext.BHasKeyFocus() && !pContext.BHasDescendantKeyFocus() && !pContext.BHasClass( 'Loading' ) )
		{
			return;
		}

		if ( pPanel.id == contentPanelID && !pPanel.BHasKeyFocus() && !pPanel.BHasDescendantKeyFocus() )
		{
			pPanel.SetFocus();
		}
	} );												
}


/**
 * for a panel on mouseover add and remove classes on a parent
 */
function SetupPanelHoverEvent( panel, ancestorPanel, hoverClass, uniqueClasses, fnMouseOverCallback )
{
	panel.SetPanelEvent( 
		'onmouseover', 
		function() {
			ancestorPanel.AddClass( hoverClass ); 
			// now see what classes we need to remove
			$.Each( uniqueClasses, function( classValue ) 
			{
				if ( classValue !=  hoverClass )
				{
					ancestorPanel.RemoveClass( classValue ); 				
				}
			} );

			if ( fnMouseOverCallback )
				fnMouseOverCallback( panel );
		}
	);
	
	$.RegisterForUnhandledEvent( 'WindowCursorHidden', function() 
		{
			$.Each( uniqueClasses, function( classValue ) 
			{
				ancestorPanel.RemoveClass( classValue );
			}
		 	);
		} );
} 


function onlyUnique(value, index, self) 
{ 
    return self.indexOf(value) === index;
}

/**
 * Manages a map of panels and classes to use when that panel is hovered (and the other classes are removed)
 */
function SetupPanelsHoverEvents( hoverPanelStyleMap, ancestorPanel, fnMouseOverCallback )
{
	var hoverClasses = [];
	for( var o in hoverPanelStyleMap ) 
	{
	    hoverClasses.push(hoverPanelStyleMap[o]);
	}

	uniqueClasses = hoverClasses.filter( onlyUnique ); 
	$.Each( uniqueClasses, function( classValue ) 
	{
		ancestorPanel.RemoveClass( classValue ); 				
	} );
	
	$.Each( hoverPanelStyleMap, function( value, key ) 
	{
		SetupPanelHoverEvent( $( '#' + key ), ancestorPanel, hoverPanelStyleMap[key], uniqueClasses, fnMouseOverCallback );		
	} );
}
