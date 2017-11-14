


// Called when page is ready
$(
	function()
	{
		// This is the dialog that appears when a user clicks add to cart
		SetupCartConfirmDlg();
		
		// Handle mouse move and capture mouse position
		$( '.StoreContainer' ).on(
			'mouseenter',
			'.ItemContainerCell',
			function( e )
			{
				var $Cell = $( this );
				var nDefIndex = $Cell.data( 'defindex' );

				ShowAddToCartButton( $Cell, nDefIndex, true );
				$Cell.data( 'hovering', 1 );

				// Highlight the border immediately
				UpdateItemCellBorder( $Cell, true );

				// Set a timeout for hover popup
				var nTimeoutID = setTimeout(
					function()
					{
						g_ItemTooltip.Show( $Cell, nDefIndex );
					},
					MINI_POPUP_DELAY * 1000
				);

				$Cell.data( 'hovertimeout', nTimeoutID );
			}
		).on(
			'mouseleave',
			'.ItemContainerCell',
			function( e )
			{
				var $Cell = $( this );
				var nDefIndex = $Cell.data( 'defindex' );

				ShowAddToCartButton( $Cell, nDefIndex, false );
				$Cell.data( 'hovering', 0 );

				// Deactivate border
				UpdateItemCellBorder( $Cell, false );

				// Hide the mini popup and clear the timeout
				g_ItemTooltip.Hide();
				clearTimeout( $Cell.data( 'hovertimeout' ) );
			}
		);

		$( '.StoreContainer' ).on(
			'click',
			'.HoverAddToCartButton',
			function( e )
			{
				var $Button = $( this );
				var nDefIndex = $Button.parent().parent().data( 'defindex' );
				var strSourceHistory = $Button.parent().parent().data( 'sourcehistory' );

				Store_AddToCartAjax( $Button, nDefIndex, strSourceHistory, g_SessionID );
			}
		);
	}
);

