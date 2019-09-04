	var doneScrolling = false;
	var modalDialogVisible = false;

	window.onbeforeunload = function()
	{
		if ( window.history && window.history.replaceState )
		{
			var scrollOffset = document.viewport.getScrollOffsets();
			var scrollTop = scrollOffset.top;
			window.history.replaceState( {}, document.title, '#scrollTop=' + scrollTop );
		}
	}

	function ScrollToLastCancel()
	{
		doneScrolling = true;
		hideModal( 'loadingPageModal' );
	}

	function ScrollToLast()
	{
		if ( doneScrolling )
			return;

		if ( window.location.hash.length <= 1 )
			return;
		
		var hash = window.location.hash.substr(1);
		var params = hash.toQueryParams();
		var scrollTopPrevious = params['scrollTop'];
		if ( scrollTopPrevious && scrollTopPrevious > 0 )
		{
			var viewport = document.viewport.getDimensions(); // Gets the viewport as an object literal
			var windowHeight = viewport.height; // Usable window height
			var bodyHeight = $(document.body).getHeight();
			if ( scrollTopPrevious < bodyHeight - windowHeight )
			{
				window.scrollTo( 0, scrollTopPrevious) ;
				doneScrolling = true;
				hideModal( 'loadingPageModal' );
			}
			else
			{
				if ( !modalDialogVisible )
				{
					modalDialogVisible = true;
					showModal( 'loadingPageModal', true, false );
				}
				CheckForMoreContent();
                // continue scrolling, in case the user sees something interesting and wants to cancel
                window.scrollTo( 0, scrollTopPrevious );
			}
		}
	}

	function CheckForMoreContent()
	{
		if ( $( 'EndOfInfiniteContent' ) )
		{
			$J( '#MoreContentForm' ).remove();
			return;
		}

		if ( $( 'action_wait').visible() )
			return;

		$( 'action_wait' ).show();
		$( 'MoreContentForm' ).request( {
			onComplete: function()
			{
				$( 'action_wait' ).hide();
				ScrollToLast();
			},
			onSuccess: function( transport )
			{
				$( 'MoreContentPage' ).value = 1 + parseInt($( 'MoreContentPage' ).value);
				$( 'InfiniteScrollingContainer' ).insert({ bottom: transport.responseText });
				ApplyAdultContentPreferences();
			}
		} );
	}

	function InfiniteScrollingCheckForMoreContent()
	{
		var viewport = document.viewport.getDimensions(); // Gets the viewport as an object literal
		var windowHeight = viewport.height; // Usable window height

		var scrollOffset = document.viewport.getScrollOffsets();
		var scrollTop = scrollOffset.top;

		var bodyHeight = $(document.body).getHeight();

		// number of pixels from the bottom before checking for more content
		// this should be about two rows of content
		var buffer = 600;
		if ( scrollTop + buffer > bodyHeight - windowHeight )
		{
			CheckForMoreContent();
		}

        CalculateBackToTopButtonVisibility();
	}

    function CalculateBackToTopButtonVisibility()
    {
        var scrollOffset = document.viewport.getScrollOffsets();
        var scrollTop = scrollOffset.top;
        // should we show the back to top button?
        var threshold = 600;
        if ( scrollTop > threshold )
        {
            ShowWithFade( $( 'BackToTop' ) );
        }
        else
        {
            HideWithFade( $( 'BackToTop' ) );
        }
    }


