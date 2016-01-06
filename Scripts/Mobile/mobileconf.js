
function runLocalUrl(url)
{
	var iframe = document.createElement("IFRAME");
	iframe.setAttribute("src", url);
	document.documentElement.appendChild(iframe);
	iframe.parentNode.removeChild(iframe);
	iframe = null;
}


var g_interval = null;
var g_callInProgress = false;




//	[status, data], status='ok' / 'error' / 'fatal'
function GetValueFromLocalURL( url, timeout, success, error, fatal )
{
					
	
	g_callInProgress = true;
	runLocalUrl( url );

	if ( ! timeout )
	{
		timeout = 5;
	}

	var timeoutTime = Date.now() + 1000 * timeout;

	if ( g_interval != null )
	{
		window.clearInterval( g_interval );
		g_interval = null;
	}

	g_interval = window.setInterval( function() {

		
		if ( Date.now() > timeoutTime )
		{
			g_callInProgress = false;
			if ( g_interval )
				window.clearInterval( g_interval );

			fatal( 'timeout', -1 );
		}

	}, 100 );
	}


function SendMobileConfirmationOp( op, confirmationID, confirmationKey, success, error )
{
	GetValueFromLocalURL( 'steammobile://steamguard?op=conftag&arg1=' + op, 5,
		function( data ) {

			queryString = "op=" + op + "&" + data;
			queryString += "&cid=" + confirmationID;
			queryString += "&ck=" + confirmationKey;
		
			$J.ajax( {
				url: 'https://steamcommunity.com/mobileconf/ajaxop',

				data: queryString,

				success: function( data, textStatus, jqXHR ) {
					 if ( data && data.success )
					 {
						 success( data );
					 }
					 else
					 {
						 if ( error )
							 error( data );
					 }
				},

				error: function( jqXHR, textStatus ) {
					if ( error )
						error( null );
					 }
			});
		},
		error,
		error
	);
}


function RemoveConfirmationFromList( confirmationID )
{
	$J('#conf' + confirmationID).remove();
	$J('#conf' + confirmationID + '_copy').remove();
}

function ConfirmFromDetails( confirmationID, confirmationKey )
{
	SendMobileConfirmationOp( 'allow', confirmationID, confirmationKey,
		function( data )
		{
			// Delete the selected confirmation item from the list
			RemoveConfirmationFromList( confirmationID );

			// Go back to the list
			setTimeout( function() { window.history.back(); }, 1 );
		},

		function( data )
		{
			if ( typeof data != 'undefined' && data && typeof data.message != 'undefined' )
			{
				ShowAlertDialog(
						'Confirmation Error',
						data.message,
						'OK'
				);

				return;
			}

			ShowAlertDialog(
					'Confirmation Error',
					'There was a problem canceling that confirmation. Please try your request again later.',
					'OK'
			);
		}
	);
}


function CancelFromDetails( confirmationID, confirmationKey )
{
	SendMobileConfirmationOp( 'cancel', confirmationID, confirmationKey,
		function( data )
		{
			// Delete the selected confirmation item from the list
			RemoveConfirmationFromList( confirmationID );

			// Go back to the list
			setTimeout( function() { window.history.back(); }, 1 );
		},

		function( data )
		{
			if ( typeof data != 'undefined' && data && typeof data.message != 'undefined' )
			{
				ShowAlertDialog(
						'Confirmation Error',
						data.message,
						'OK'
				);

				return;
			}

			ShowAlertDialog(
					'Confirmation Error',
					'There was a problem canceling that confirmation. Please try your request again later.',
					'OK'
			);
		}
	);
}

var g_bClickInProgress = false;
var g_bShowingDetails = false;
var g_strClickedId = null;
$J( function() {
	var $elDetails = $J( '#mobileconf_details' );
	$elDetails.css( 'top', $J(window).height() );
	$elDetails.css( 'position', 'fixed' );
	$elDetails.css( 'opacity', 0 );

	$J('.mobileconf_list_entry').click( function() {
		if ( g_bClickInProgress )
			return;

		var $this = $J(this);

		g_bClickInProgress = true;
		g_strClickedId = $this.attr('id');
		var nConfirmationId = $this.data('confid');
		var nConfirmationKey = $this.data('key');

		
		// Make a copy of the clicked item
		var $elCopy = $this.clone();
		$elCopy.attr( 'id', g_strClickedId + '_copy' );
		$elCopy.addClass( 'copy' );

		// We can't use history.pushState because the Android app's onPageFinished may need to know the difference
		// between the initial page load and us loading details.
		location.hash = 'conf_' + nConfirmationId;

		// Set the copy to display fixed and place it in the same location of the page
		$elCopy.css( 'position', 'fixed' );
		$elCopy.find( '.mobileconf_list_entry_sep' ).hide();
		$elCopy.css( 'top', $this.offset().top - $J(window).scrollTop() );
		$this.parent().append( $elCopy );
		$elCopy.show();
		//$elCopy.find( '.mobileconf_offers_summary_chevron' ).css( 'transform', 'rotate(90deg)' );

		// Slide the fixed copy up to the top of the page
		$elCopy.css( 'top', 0 );

		// Fade out all entries including our copy
		$J('.mobileconf_list_entry').css( 'opacity', 0 );

		// The actual clicked one immediately becomes hidden
		$this.find( '.mobileconf_list_entry_content' ).css( 'opacity', '0' );

		var $elDetails = $J( '#mobileconf_details' );
		$elDetails.html( $J('#mobileconf_throbber').html() );
		$elDetails.css( 'opacity', 0 );
		$elDetails.css( 'top', $J(window).height() + 'px' );
		$elDetails.show();
		$elDetails.css( 'top', $J('.responsive_page_template_content').offset().top );
		$elDetails.css( 'opacity', 1 );
		g_bShowingDetails = true;

		var $btnCancel = $J('#mobileconf_buttons .mobileconf_button_cancel');
		var $btnAccept = $J('#mobileconf_buttons .mobileconf_button_accept');
		$btnCancel.text( $this.data('cancel') );
		$btnAccept.text( $this.data('accept') );

		$btnCancel.click( function() {
			CancelFromDetails( nConfirmationId, nConfirmationKey );
		});

		$btnAccept.click( function() {
			ConfirmFromDetails( nConfirmationId, nConfirmationKey );
		});

		var $elButtons = $J( '#mobileconf_buttons' );
		$elButtons.css( 'bottom', -$elButtons.height() + 'px' );
		$elButtons.show();
		$elButtons.css( 'bottom', '0' );

		// Begin loading in the details
		GetValueFromLocalURL( 'steammobile://steamguard?op=conftag&arg1=details' + nConfirmationId, 5, function( httpParams )
		{
			$J.ajax( {
				url: 'https://steamcommunity.com/mobileconf/details/' + nConfirmationId,
				type: 'GET',
				data: httpParams
			} ).done( function ( responseData ) {
				if ( responseData.success )
				{
					$elDetails.html( responseData.html );
				}
				else
				{
					ShowAlertDialog(
							'Confirmation Error',
							typeof responseData.message != 'undefined' ? responseData.message : 'There was a problem loading details for that confirmation. Please try your request again later.',
							'OK'
					).always( function() {
						window.history.back();
					} );
				}
			} ).fail( function() {
				ShowAlertDialog(
						'Confirmation Error',
						'There was a problem loading details for that confirmation. Please try your request again later.',
						'OK'
				).always( function() {
					window.history.back();
				} );
			} );
		} );

		// After the animation finishes, hide the list, and position the details
		setTimeout( function() {
			// If the user has already pressed the back button, then don't do anything here.
			if ( !g_bShowingDetails )
				return;

			$elCopy.hide();
			$J( '#mobileconf_list' ).hide();
			$J( '.mobileconf_list_entry' ).css( 'opacity', 1 );

			var $elDetails = $J( '#mobileconf_details' );
			$elDetails.css( 'position', 'static' );
		}, 550)
	});

	$J(window).on('hashchange', function() {
		if ( !g_bClickInProgress )
			return;

		// This is only for going back, so ignore conf_ hashes.
		if ( location.hash.substr( 0, 6 ) == '#conf_' )
		{
			return;
		}

		// Hide the details and show the list again
		var $elDetails = $J( '#mobileconf_details' );
		$elDetails.css( 'top', $J(window).height() + 'px' );
		$elDetails.css( 'position', 'fixed' );
		$elDetails.css( 'opacity', 0 );

		var $btnCancel = $J('#mobileconf_buttons .mobileconf_button_cancel');
		var $btnAccept = $J('#mobileconf_buttons .mobileconf_button_accept');
		$btnCancel.unbind();
		$btnAccept.unbind();

		var $elButtons = $J( '#mobileconf_buttons' );
		$elButtons.css( 'bottom', -$elButtons.height() + 'px' );

		$J( '.mobileconf_list_entry' ).css( 'opacity', 1 );

		// Show the "All done" text instead of the list if applicable
		if ( $J('.mobileconf_list_entry').length == 0 )
		{
			$J( '#mobileconf_done' ).show();
		}
		else
		{
			$J( '#mobileconf_list' ).show();
		}

		g_bShowingDetails = false;

		// The copy comes back down
		var $elClicked = $J('#' + g_strClickedId);
		var $elCopy = $J('#' + g_strClickedId + '_copy');

		if ( $elCopy.length )
		{
			$elCopy.show();
			if ( $elClicked.length )
			{
				$elCopy.css( 'top', $elClicked.offset().top - $J( window ).scrollTop() + 'px' );
			}

			//$elCopy.find( '.mobileconf_offers_summary_chevron' ).css( 'transform', 'rotate(0deg)' );
		}

		setTimeout( function() {
			$J( '.mobileconf_list_entry_sep' ).show();
			$J( '.mobileconf_list_entry_content' ).css( 'opacity', 1 );
			$J( '.mobileconf_list_entry.copy' ).remove();
		}, 550 );

		// Allow for smoother animation by doing this after
		setTimeout( function() {
			$elDetails.hide();
			$elButtons.hide();

			// Allow user to click again
			g_bClickInProgress = false;
		}, 650 );
	} );
});
