//<script>
"use strict";

var KeyRequestWizard = function()
{
	this.m_key_default_type = 0;
	this.m_key_override_type = 1;
	this.m_key_dev_type = 2;

	this.m_reason = 1;
	this.m_key_type = this.m_key_default_type; // one of the three above default, override or dev
	this.m_key_type_desc_array = []; // Data loaded at the start of the page.
	this.m_key_to_row_class = [ '.default_row', '.override_row', '.dev_row' ];
	this.m_key_to_bg_color_class = [ 'keywiz_default_color', 'keywiz_override_color', 'keywiz_dev_color' ];
	this.m_selected_package_id = 0;
	this.m_package_desc = []; // array of arrays. First indexed by packageid string. Second is 'name', 'appids', 'activated', 'total', 'game_code'
	this.m_key_quantity = 0;
	this.m_bUseHistoryAPI = !!(window.history && window.history.pushState);
	this.m_bReachedRequestComplete = false;

	if( this.m_bUseHistoryAPI )
	{
		var _keywiz = this;
		$J(window).on("popstate", function( e ) {
			var oState = e.originalEvent.state;
			var wiznav = oState && oState.wiznav;
			if( wiznav )
			{
				_keywiz.KeyWizardTab(wiznav);
			}
		});
	}
};

KeyRequestWizard.prototype.KeyWizardRestart = function()
{
	this.m_reason = 1;
	this.m_key_type = this.m_key_default_type;
	this.m_selected_package_id = 0;
	this.m_key_quantity = 0;
	this.KeyWizardTab( 'keywiz_seltype' );
	$J('#keywiz_quantity_request_input').val( '' );
	$J('#keywiz_note' ).val('');
	$J('#keywiz_tag_select').val('').trigger('change');
	this.m_bReachedRequestComplete = false;
};

KeyRequestWizard.prototype.KeyWizardReasonChange = function()
{
	// Hide and unset the checked boxes.
	$J( ".keywiz_confirm_checkbox" ).hide();
	$J( "input[name=keywiz_confirm_checkbox_group]:checkbox" ).prop("checked", false );

	if( this.m_reason >= 1 && this.m_reason <= 5 )
	{
		$J("#keywiz_confirm_1").show();
		$J("#keywiz_confirm_2").show();
		$J("#keywiz_confirm_3").show();
	}

	if( this.m_reason == 3 ) 	{
		$J("#keywiz_confirm_4").show();
	}

	if( this.m_reason >= 6 && this.m_reason <= 8 )
	{
		$J("#keywiz_confirm_5").show();
		$J("#keywiz_confirm_6").show();
	}

	if( this.m_reason == 9 )  	{
		$J("#keywiz_confirm_7").show();
	}
};

KeyRequestWizard.prototype.KeyWizardTab = function( show )
{
		switch( show )
	{
		case 'keywiz_completed':
			if( this.KeyWizardVerifyBeforeKeyRequest( ).length != 0 )	{
				show = 'keywiz_confirm';
			}
		case 'keywiz_confirm':
			if( this.m_key_quantity == 0 ) {
				show = 'keywiz_enterquant';
			}
					case 'keywiz_enterquant':
			if( this.m_selected_package_id == 0 ) {
				show = 'keywiz_selpackage';
			}
	}
	$J('#keywiz_select_reason_container').hide();
	$J('#keywiz_select_type_container').hide();
	$J('#keywiz_Select_Package_container').hide();
	$J('#keywiz_Enter_Quantity_container').hide();
	$J('#keywiz_Select_Tag_container').hide();
	$J('#keywiz_Confirmation_container').hide();
	$J('#keywiz_seltype').removeClass('keywiz_nav_link_selected');
	$J('#keywiz_selpackage').removeClass('keywiz_nav_link_selected');
	$J('#keywiz_enterquant').removeClass('keywiz_nav_link_selected');
	$J('#keywiz_seltag').removeClass('keywiz_nav_link_selected');
	$J('#keywiz_confirm').removeClass('keywiz_nav_link_selected');
	$J('#keywiz_completed').removeClass('keywiz_nav_link_selected');
	$J('#keywiz_history_container').hide();
	$J('#keywiz_loading_throbber').hide();
	$J("#keywiz_error").hide();
	if( !this.m_bReachedRequestComplete ) { 		$J('#keywiz_nav_arrow_pre_complete').hide();
		$J('#keywiz_completed').hide();
	}
	$J('#keywiz_request_complete_container').hide();
	$J( this.m_key_to_row_class.join( ', ' ) ).hide(); 
	this.KeyWizardHandleBackButton( show );
	this.KeyWizardUpdateHistory( show );

	switch (show) {
		default:
		case 'keywiz_seltype':
			$J('#keywiz_select_type_container').show();
			$J('#keywiz_seltype').addClass('keywiz_nav_link_selected');
			break;
		case 'keywiz_seltag':
			$J('#keywiz_Select_Tag_container').show();
			$J('#keywiz_tip_moveable').detach().prependTo( '#keywiz_Select_Tag_container');
			$J('#keywiz_seltag').addClass('keywiz_nav_link_selected');

							$J('#keywiz_seltag_tip_1').hide();
							$J('#keywiz_seltag_tip_2').hide();
							$J('#keywiz_seltag_tip_3').hide();
							$J('#keywiz_seltag_tip_4').hide();
							$J('#keywiz_seltag_tip_5').hide();
							$J('#keywiz_seltag_tip_6').hide();
							$J('#keywiz_seltag_tip_7').hide();
							$J('#keywiz_seltag_tip_8').hide();
							$J('#keywiz_seltag_tip_9').hide();
			
			if( this.m_reason >= 1 && this.m_reason <= 9 )
			{
				$J( '#keywiz_seltag_tip_' + this.m_reason ).show();
			}

			break;
		case 'keywiz_selpackage':
			$J('#keywiz_Select_Package_container').show();
			$J('#keywiz_tip_moveable').detach().prependTo( '#keywiz_Select_Package_container');
			$J('#keywiz_selpackage').addClass('keywiz_nav_link_selected');
			$J('#keywiz_selpackage_desc').text( this.m_key_type_desc_array[ this.m_key_type ] );
			$J( this.m_key_to_row_class[ this.m_key_type ] ).show();

			// If nothing is selected, then select the first one if it exists
			if( $J( this.m_key_to_row_class[ this.m_key_type ] + " > td > input:checked" ).length === 0 )
			{
				$J( this.m_key_to_row_class[ this.m_key_type ] + ":first > td > input" ).attr('checked', true );
			}
			$J( "#keywiz_package_select_continue" ).attr( 'disabled', $J( this.m_key_to_row_class[ this.m_key_type ] + " > td > input:checked" ).length === 0 );
			break;
		case 'keywiz_enterquant':
			if( ( "" + this.m_selected_package_id ) in this.m_package_desc )
			{
				$J( "#keywiz_history_container").show();

				if ( this.m_package_desc[ this.m_selected_package_id]['total'] > 0 )
				{
					$J( "#keywiz_previous_keyrequest").text( "" + this.m_package_desc[ this.m_selected_package_id]['total'].toLocaleString() );
					$J( "#keywiz_previous_received").text( "" + this.m_package_desc[ this.m_selected_package_id]['received'].toLocaleString() );
					$J( "#keywiz_previous_activated").text( "" + this.m_package_desc[ this.m_selected_package_id]['activated'].toLocaleString() );
				}
				else
				{
					$J( '#keywiz_history_data_container' ).hide();
				}

				$J( "#keywiz_history_title_container").removeClass( "keywiz_default_color" ).removeClass( "keywiz_override_color" )
					.removeClass( "keywiz_dev_color" ).addClass( this.m_key_to_bg_color_class[ this.m_key_type ] );
				$J( "#keywiz_history_pkgname" ).text( this.m_package_desc[ this.m_selected_package_id]['name'] );
				$J( "#keywiz_history_tagname" ).text(  $J( "#keywiz_tag_select option:selected" ).text() );
				$J( "#keywiz_history_apps").text( "Appids: " + this.m_package_desc[ this.m_selected_package_id]['appids'] );
			}

						if( this.m_key_type === this.m_key_dev_type )
			{
				$J( '#keywiz_quantity_request_input').hide();
				$J( '#keywiz_quantity_request_dropdown').show();
			}
			else
			{
				$J( '#keywiz_quantity_request_input').show();
				$J( '#keywiz_quantity_request_dropdown').hide();
			}

			$J('#keywiz_Enter_Quantity_container').show();
			$J('#keywiz_tip_moveable').detach().prependTo( '#keywiz_Enter_Quantity_container');
			$J('#keywiz_enterquant').addClass('keywiz_nav_link_selected');
			break;
		case 'keywiz_confirm':
			// Make them confirm the checkbox each time they go to the confirm page.
			this.KeyWizardReasonChange();

			$J('#keywiz_Confirmation_container').show();
			$J('#keywiz_tip_moveable').detach().prependTo( '#keywiz_Confirmation_container');
			$J('#keywiz_confirm').addClass('keywiz_nav_link_selected');

			$J( "#keywiz_confirm_title_container").removeClass( "keywiz_default_color" ).removeClass( "keywiz_override_color" )
				.removeClass( "keywiz_dev_color" ).addClass( this.m_key_to_bg_color_class[ this.m_key_type ] );
			$J( "#keywiz_confirm_pkgname" ).text( this.m_package_desc[ this.m_selected_package_id]['name'] );
			$J( "#keywiz_confirm_apps").text( 'Appids: ' + this.m_package_desc[ this.m_selected_package_id]['appids'] );
			$J( "#keywiz_confirm_requests").text( this.m_key_quantity.toLocaleString() );
			$J( "#keywiz_confirm_tag").text( $J("#keywiz_tag_select :selected").text() );
			$J( "#keywiz_submit_request" ).attr( 'disabled', false );
			break;
		case 'keywiz_completed':
			$J('#keywiz_completed').addClass('keywiz_nav_link_selected');
			$J('#keywiz_nav_arrow_pre_complete').show();
			$J('#keywiz_completed').show();
			$J('#keywiz_request_complete_container').show();
			break;
	}
};

	KeyRequestWizard.prototype.KeyWizardUpdateHistory = function( show )
{
	if( this.m_bUseHistoryAPI )
	{
		var bPushedWizardState = false;
		var strWizardBaseURL = window.location.href;
		var iParamIndex = strWizardBaseURL.indexOf( '?' );
		var rgWizBaseURLParams = iParamIndex >= 0 ? $J.deparam( strWizardBaseURL.substr( iParamIndex + 1 ) ) : {};
		if( iParamIndex > 0 )
		{
			strWizardBaseURL = strWizardBaseURL.substr( 0, iParamIndex );
		}

				bPushedWizardState = rgWizBaseURLParams.wiznav != null;

				if( rgWizBaseURLParams.wiznav && rgWizBaseURLParams.wiznav === show )
		{
			return;
		}

		rgWizBaseURLParams.wiznav = show;
		var strQueryParam = '?' + $J.param( rgWizBaseURLParams );
		var strWizardURL = strWizardBaseURL + strQueryParam;

		if( bPushedWizardState )
		{
			history.pushState( { wiznav: show }, '', strWizardURL );
		}
		else
		{
			history.replaceState( { wiznav: show }, '', strWizardURL );
		}
	}
}

KeyRequestWizard.prototype.KeyWizardHandleBackButton = function( show )
{
	switch( show )
	{
		case 'keywiz_completed': 			break;
		default:
			if( this.m_selected_package_id != 0 || this.m_key_quantity != 0 ||
				( $J("#keywiz_tag_select").val() && $J("#keywiz_tag_select").val().length != 0 ) )
			{
				window.onbeforeunload = function() { return true; };
			}
			break;
	}
};

KeyRequestWizard.prototype.KeyWizardSetup = function( show, localize_key_type_desc_array )
{
	this.m_key_type_desc_array = localize_key_type_desc_array;
	this.KeyWizardTab( show );
};

KeyRequestWizard.prototype.KeyWizardSelectKeyType = function( typeSelected, reason, label )
{
	if( typeSelected < this.m_key_default_type || typeSelected > this.m_key_dev_type )
	{
		console.log( "Error: Selecting an unexpected type: " + typeSelected );
	}
	else if ( reason <= 0 || reason >= 10 )
	{
		console.log( "Error: Selecting an reason type: " + reason );
	}
	else
	{
		var strLabel = String( label ).trim().toLocaleUpperCase();
		if ( strLabel.length == 0 )
			strLabel = 'Select Type';

		$J( "#keywiz_seltype" ).text( strLabel );
		this.m_key_type = typeSelected;
		this.m_reason = reason;
		this.m_selected_package_id = 0; 		this.KeyWizardTab( 'keywiz_seltag' );
	}
};

KeyRequestWizard.prototype.KeyWiz_isNumber = function(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};

KeyRequestWizard.prototype.KeyWizardPackageSelected = function()
{
	var checked = $J( this.m_key_to_row_class[ this.m_key_type ] + " > td > input:checked" );
	if( checked.length !== 0 )
	{
		var row_package_id = checked.attr('id');
		this.m_selected_package_id = row_package_id.substring( "radio_".length );
		if( this.KeyWiz_isNumber( this.m_selected_package_id ) && this.m_selected_package_id > 0 )
		{
			var strLabel = String( this.m_package_desc[ this.m_selected_package_id]['name'] );
			if ( strLabel.trim().length == 0 )
				strLabel = 'Select Package';

			$J( "#keywiz_selpackage" ).text( strLabel );
			this.KeyWizardTab( 'keywiz_enterquant' );
		}
		else
		{
			$J("#keywiz_error").text( 'Package is not selected. Return to the first step of the wizard.' );
			$J("#keywiz_error").show();
			console.log( "Error: Package selected not parseable. " + row_package_id + " " + this.m_selected_package_id );
		}
	}
	else
	{
		console.log( "Error: No package selected, cannot continue " + this.m_key_type );
	}

}

KeyRequestWizard.prototype.SavePackageDescriptor = function( rgInputPackDesc )
{
	this.m_package_desc = rgInputPackDesc;
};

KeyRequestWizard.prototype.KeyWizardQuantityEntered = function()
{
	if( this.m_key_type === this.m_key_dev_type )
	{
		this.m_key_quantity = parseInt( $J("#keywiz_quantity_request_dropdown").val() );
	}
	else
	{
		this.m_key_quantity = parseInt( $J("#keywiz_quantity_request_input").val() );
	}

	if( !this.KeyWiz_isNumber( this.m_key_quantity ) || this.m_key_quantity <= 0 )
	{
		$J("#keywiz_error").text( 'You must specify a key request quantity of 1 or more.' );
		$J("#keywiz_error").show();
	}
	else
	{
		var strLabel = this.m_key_quantity.toLocaleString();
		if ( strLabel.length == 0 )
			strLabel = 'Enter Quantity';

		$J( "#keywiz_enterquant" ).text( strLabel );
		this.KeyWizardTab( 'keywiz_confirm' );
	}
}

KeyRequestWizard.prototype.KeyWizardTagSelected = function()
{
	var strLabel = $J( "#keywiz_tag_select option:selected" ).text().trim();
	if ( strLabel.length == 0 )
		strLabel = 'Select Tag';

	$J( "#keywiz_seltag" ).text( strLabel );
	g_keyRequestWiz.KeyWizardTab( 'keywiz_selpackage' )
}

KeyRequestWizard.prototype.KeyWizardVerifyBeforeKeyRequest = function( )
{
	var errorStr = "";

	if( !this.KeyWiz_isNumber( this.m_selected_package_id ) && this.m_selected_package_id <= 0 )
	{
		errorStr += 'Package is not selected. Return to the first step of the wizard.' + '\n';
	}

	if( !this.KeyWiz_isNumber( this.m_key_quantity ) || this.m_key_quantity <= 0 )
	{
		errorStr += 'You must specify a key request quantity of 1 or more.' + '\n';
	}

	if( !this.KeyWiz_isNumber( this.m_reason ) || this.m_reason < 1 || this.m_reason > 9 )
	{
		errorStr += 'You have not chosen a reason for your key request. Cannot proceed with the Key Request.' + '\n';
	}

		if( $J('input[name=keywiz_confirm_checkbox_group]:visible:checkbox').length == 0 ||
		$J('input[name=keywiz_confirm_checkbox_group]:visible:checkbox:not(:checked)').length != 0 )
	{
		errorStr += 'You have not agreed to all terms by checking on them. Cannot proceed with the Key Request.' + '\n';
	}

	return errorStr;
}

KeyRequestWizard.prototype.KeyWizardConfirmed = function( appid )
{
	var errorStr = this.KeyWizardVerifyBeforeKeyRequest( );

	if( errorStr.length == 0  )
	{
				window.onbeforeunload = null;

		// Tags are optional
		var territoryCode = ( $J("#keywiz_tag_select").val() && $J("#keywiz_tag_select").val().length == 0 ) ? 0 : $J("#keywiz_tag_select").val();

				var requests = [];
		requests.push( {
			packageid : this.m_selected_package_id,
			game_code : this.m_package_desc[ this.m_selected_package_id]['game_code'],
			territory : territoryCode,
			key_count : this.m_key_quantity,
			notes : $J( '#keywiz_note' ).val(),
			reason : this.m_reason
		} );

		var _this = this;
		$J( "#keywiz_submit_request" ).attr( 'disabled', true );
				SetRequestKeys( appid, requests,
		function() {
			// TODO: Update the values of the successful key request.
			_this.m_bReachedRequestComplete = true;
			_this.KeyWizardTab( 'keywiz_completed' );
		},
		function() {
			$J( "#keywiz_submit_request" ).attr( 'disabled', false );
		} );
	}
	else
	{
		$J("#keywiz_error").text( errorStr );
		$J("#keywiz_error").show();
	}
};

KeyRequestWizard.prototype.KeyWizUpdateRemainingChar = function()
{
	$J("#keywiz_char_remaining").text( '' + (500 - $J("#keywiz_note").val().length ) + ' of 500 characters remaining')
};
