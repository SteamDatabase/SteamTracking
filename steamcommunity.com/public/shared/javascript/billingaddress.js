
function BillingAddress_VerifyAddressFields( rgBadFields, bHasBillingStates, input_suffix = '' )
{
	var errorString = '';
	rgBadFields.first_name = false;
	rgBadFields.last_name = false;
	rgBadFields.billing_address = false;
	rgBadFields.billing_city = false;
	rgBadFields.billing_state_select_trigger = false;
	rgBadFields.billing_phone = false;
	rgBadFields.billing_postal_code = false;

	if ( $( 'first_name'+input_suffix ).value.length < 1 )
	{
		errorString += 'Please enter a first name for your billing information.<br/>';
		rgBadFields.first_name = true;
	}
	
	if ( $( 'last_name'+input_suffix ).value.length < 1 )
	{
		errorString += 'Please enter a last name for your billing information.<br/>';
		rgBadFields.last_name = true;
	}
	
	if ( $( 'billing_address'+input_suffix ).value.length < 1 )
	{
		errorString += 'Please enter your billing address.<br/>';
		rgBadFields.billing_address = true;
	}
		
	
	if ( $( 'billing_city'+input_suffix ).value.length < 1 )
	{
		errorString += 'Please enter your billing city.<br/>';
		rgBadFields.billing_city = true;
	}
	
		if  ( bHasBillingStates )
	{
		if ( $('billing_state_select'+input_suffix).value.length < 1 )
		{
			errorString += 'Please enter a State or Province.<br/>';
			rgBadFields.billing_state_select_trigger = true;
		}
				if ( $('billing_country'+input_suffix).value == 'US' )
		{
			if ( $('billing_state_select'+input_suffix).value == 'AE' || $('billing_state_select'+input_suffix).value == 'AP' || $('billing_state_select'+input_suffix).value == 'AA' )
			{
				if ( $('billing_city'+input_suffix).value != 'APO' && $('billing_city'+input_suffix).value != 'FPO' && $('billing_city'+input_suffix).value != 'DPO' )
				{
					errorString += 'Please enter a valid military address.<br/>';
					rgBadFields.billing_city = true;
				}
			}
		}
	}

		if ( $( 'payment_row_phone' ) && $( 'payment_row_phone' ).visible() )
	{
		if ( $( 'billing_phone'+input_suffix ).value.length < 3 )
		{
			errorString += 'Please enter your billing phone number, including area code.<br/>';
			rgBadFields.billing_phone = true;
		}
		else if  ( $( 'billing_country'+input_suffix ).value == 'US' )
		{
						var num = $( 'billing_phone'+input_suffix).value;
			var digitsFound = 0;
			for ( i = 0; i < num.length; ++i )
			{
				var c = num.charAt(i);
				if ( c >= '0' && c <= '9' )
					++digitsFound;
			}
			if ( digitsFound < 10 )
			{
				errorString += 'Please enter your billing phone number, including area code.<br/>';
				rgBadFields.billing_phone = true;
			}
		}
	}
		
	if ( $( 'billing_country'+input_suffix ).value == 'US' )
	{
		if ( $( 'billing_postal_code'+input_suffix ).value.length < 5 )
		{
			errorString += 'Please enter your zip or postal code.<br/>';
			rgBadFields.billing_postal_code = true;
		}
	}
	else if ( $( 'billing_postal_code'+input_suffix ).value.length < 1 )
	{
		errorString += 'Please enter your zip or postal code.<br/>';
		rgBadFields.billing_postal_code = true;
	}

	return errorString;
}

function BillingAddress_SaveBillingAddress( sessionID, ajax_url, callbacks )
{
	$J.ajax( {
		url: ajax_url,
		type: "POST",
		dataType: "json",
		data: {
			'sessionid': sessionID,
			'FirstName' : $J('#first_name') ? $J('#first_name').val() : '',
			'LastName' : $J('#last_name').val(),
			'Address' : $J('#billing_address').val(),
			'AddressTwo' : $J('#billing_address_two').val(),
			'Country' : $J('#billing_country').val(),
			'City' : $J('#billing_city').val(),
			'State' : ($('billing_state_select') && $('billing_state_select').visible() ? $J('#billing_state_select').val() : $J('#billing_state_text').val()),
			'PostalCode' : $J('#billing_postal_code').val(),
			'Phone' : $J('#billing_phone').val()
		}
	} ).fail( function( jqxhr ) {
		callbacks.onFailure();
	} ).done( function( data ) {
		callbacks.onSuccess( data );
	} );
}

