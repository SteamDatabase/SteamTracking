
function InventoryHistory_BindTooltips( $new, rgDescriptions )
{
	$new.find('.economy_item_hoverable').each( function( index ) {
		var rgAppDescriptions = rgDescriptions[$J(this).data('appid')];
		if ( rgAppDescriptions )
		{
			var rgItemDescription = rgDescriptions[$J( this ).data( 'appid' )][$J( this ).data( 'classid' ) + '_' + $J( this ).data( 'instanceid' )];
			if ( rgItemDescription )
			{
				rgItem = {
					appid: $J(this).data( 'appid' ),
					contextid: $J(this).data( 'contextid' ),
					amount: $J(this).data( 'amount' ),
					description: Object.clone( rgItemDescription )
				};

				if ( $J(this).data( 'currencyid' ) )
				{
					rgItem.currency = true;
					rgItem.currencyid = $J(this).data( 'currencyid' );
				}
				else
				{
					rgItem.is_stackable = rgItem.amount > 1;
				}

				AddItemHoverToElement( $J(this).attr( 'id' ), rgItem );
			}
		}
	} );
}

function InventoryHistory_LoadMore()
{
	$J('#load_more_button').hide();
	if ( g_historyCursor == null )
		return;

	var request_data = {
		ajax: 1,
		cursor: g_historyCursor,
		sessionid: g_sessionID
	};

	if ( g_rgFilterApps && g_rgFilterApps.length > 0 )
	{
		request_data.app = g_rgFilterApps;
	}

	var prevCursor = g_historyCursor;
	g_historyCursor = null;

	$J('#inventory_history_loading').show();
	$J.ajax({
		type: "GET",
		url: g_strProfileURL + "/inventoryhistory/",
		data: request_data
	}).done( function( data ) {
		if ( data.success )
		{
			for ( var appid in data.apps )
			{
				g_rgAppContextData[appid] = data.apps[appid];
			}

			$J('#inventory_history_count').text( parseInt( $J('#inventory_history_count').text() ) + data.num );

			if ( data.html )
			{
				var elem_prev = $J('#inventory_history_table').children().last();

				$J('#inventory_history_table').append( data.html );

				var new_elems = elem_prev.nextAll();
				new_elems.hide();
				new_elems.fadeIn( 500 );

				InventoryHistory_BindTooltips( new_elems, data.descriptions );
			}

			if ( data.cursor )
			{
				g_historyCursor = data.cursor;
				$J( '#load_more_button' ).fadeIn( 50 );
			}
			else
			{
				$J( '#load_more_button' ).hide();
			}
		}
		else
		{
			g_historyCursor = prevCursor;
			$J( '#load_more_button' ).fadeIn( 50 );

			if ( data.error )
			{
				ShowAlertDialog( 'Error', data.error, 'OK' );
			}
		}
	}).fail( function( jqXHR ) {
		g_historyCursor = prevCursor;
		$J( '#load_more_button' ).fadeIn( 50 );

		if ( jqXHR.status == 429 )
		{
			ShowAlertDialog( 'Error', 'You\'ve made too many requests recently. Please wait and try your request again later.', 'OK' );
		}
		else
		{
			ShowAlertDialog( 'Error', 'There was a problem loading your inventory history.', 'OK' );
		}
	}).always( function() {
		$J('#inventory_history_loading').hide();
	} );
}

function InventoryHistory_InitMessages()
{
	$J('.inventory_history_message').each( function( index ) {
		var $elMessage = $J(this);
		var $elDetails = $J(this).find('.inventory_history_message_more');
		if ( $elDetails.length > 0 )
		{
			var $elMore = $J( '<div class="showmore"><span>Show more</span></div>' );
			$elMore.click( function ()
			{
				$elMore.slideUp();
				$elDetails.slideDown();
			} );
			$elMessage.append( $elMore );
		}

		if (typeof(Storage) == "undefined" || !$elMessage.hasClass('dismissable') )
		{
			$elMessage.show();
		}
		else
		{
			// Check local storage to see if the user has dismissed this recently.
			var strLocalStorageKey = 'dismissed_' + $elMessage.attr( 'id' );
			var rtNow = Date.now()/1000;
			var rtDismissed = parseInt( localStorage.getItem( strLocalStorageKey ) );
			if ( rtDismissed === null || isNaN( rtDismissed ) || rtNow > rtDismissed + (60 * 60 * 24 * 180) )
			{
				// Add a dismiss option
				var $elDismiss = $J('<div class="dismiss"></div>');
				$elDismiss.click( function() {
					localStorage.setItem( strLocalStorageKey, rtNow );
					$elMessage.slideUp();
				} );
				$elMessage.prepend( $elDismiss );
				$elMessage.show();
			}
		}
	} );
}

HistoryFiltersDialog = {
	m_bInitialized: false,

	m_fnDocumentKeyHandler: null,
	m_modal: null,

	Initialize: function() {
	},

	Show: function () {
		if ( !this.m_bInitialized )
			this.Initialize();

		this.m_fnDocumentKeyHandler = this.OnDocumentKeyPress.bindAsEventListener( this );
		$(document).observe( 'keydown', this.m_fnDocumentKeyHandler );

		var _this = this;
		this.m_modal = ShowDialog( 'Filter options', $J('#inventory_history_filters_dialog' ).show() );
		this.m_modal.SetRemoveContentOnDismissal( false );
		this.m_modal.always( function() { _this.Dismiss(); } );
		$('inventory_history_filters_dialog').focus();
	},

	Dismiss: function() {
		$(document).stopObserving( 'keydown', this.m_fnDocumentKeyHandler );
		if ( this.m_modal )
		{
			this.m_modal.Dismiss();
			this.m_modal = null;
		}
	},

	OnCancel: function( event ) {
		this.Dismiss();
		event.stop();
	},

	OnDocumentKeyPress: function( event ) {
		if ( event.keyCode == Event.KEY_ESC )
		{
			this.Dismiss();
			event.stop();
		}
	}
};

function ShowHistoryFilterOptions()
{
	HistoryFiltersDialog.Show();
}

function ResetHistoryFilterOptions()
{
	$J('.econ_tag_filter_container input[type="checkbox"]').attr("checked", false);
	$J('.econ_tag_filter_category select').val( 'any' );
}


