
function RemoveSelectedSuggestions( appid )
{
	var checkboxes = $J( "#suggested_service_providers" ).find('input[type="checkbox"]');
	if ( checkboxes.length == 0 )
	{
		return;
	}

	var suggestions_to_remove = Array();
	for ( var i = 0; i < checkboxes.length; ++i )
	{
		var checkbox = checkboxes[i];
		if ( checkbox.checked )
		{
			suggestions_to_remove.push( checkbox.value );
		}
	}

	if ( suggestions_to_remove.length == 0 )
	{
		return;
	}

	$J.post( 'https://steamcommunity.com/workshop/ajaxmanagesuggestedserviceproviders', {
			'appid' : appid,
			'sessionid' : g_sessionID,
			'suggestions_to_remove' : suggestions_to_remove
		}
	).done( function( response ) {
		top.location.reload();
	} ).fail( function( jqxhr ) {
		var rgResults = jqxhr.responseText.evalJSON();
		ShowAlertDialog( 'Error', 'An error was encountered while processing your request:' + ' ' + rgResults['success'] );
	});
}

function AddNewServiceProviderSuggestion( appid )
{
	var suggestion = v_trim( $J( "#suggest_new_service_provider" ).val() );
	if ( suggestion.length == 0 )
	{
		return;
	}

	$J.post( 'https://steamcommunity.com/workshop/ajaxmanagesuggestedserviceproviders', {
			'appid' : appid,
			'sessionid' : g_sessionID,
			'suggestion' : suggestion
		}
	).done( function( response ) {
		top.location.reload();
	} ).fail( function( jqxhr ) {
		var rgResults = jqxhr.responseText.evalJSON();
		switch ( rgResults['success'] )
		{
			case 25:
				ShowAlertDialog( 'Error', 'You\'ve reached the limit of how many third party service providers you can suggest for this Workshop.' );
				break;
			case 8:
				ShowAlertDialog( 'Error', 'You\'ve entered an invalid URL.' );
				break;
			default:
				ShowAlertDialog( 'Error', 'An error was encountered while processing your request:' + ' ' + rgResults['success'] );
				break;
		}
	});
}

