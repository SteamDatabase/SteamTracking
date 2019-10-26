
function SaveSurvey( appid )
{
	if ( !$J("input:radio[name='maturecontent_radio']").is(":checked") )
	{
		ShowAlertDialog( 'Please specify whether your game contains mature content or themes.', 'Please specify whether your game contains mature content or themes.' );
		return;
	}

	var form = $J( "#SaveSurveyForm" );

	$J.ajax(
		{
			type: "POST",
			url: 'https://partner.steamgames.com/contentdescriptors/ajaxsavesurvey/' + appid + '/',
			data: form.serialize()
		}
	).done( function( response ) {
		if ( response.success == 1 )
		{
			top.location.href =  'https://partner.steamgames.com/contentdescriptors/editsurvey/' + appid + '/' + response.surveyid;
		}
		else if ( response.success == 15 )
		{
			switch ( response.error )
			{
				case 'cannot_remove_adult_only_sexual_content':
					ShowAlertDialog( 'Error Saving Survey', 'You cannot remove the \'Adult Only Sexual Content\' from your Mature Content Survey after your game has been reviewed.<br><br>If you have truly removed this content from your game, you can file a support ticket to have your game re-reviewed.' );
					break;
				default:
					ShowAlertDialog( 'Error Saving Survey', 'There was a problem trying to save the survey. Please try again.' );
			}
		}
		else
		{
			ShowAlertDialog( 'Error Saving Survey', 'There was a problem trying to save the survey. Please try again.' );
		}
	} );
}

function DiscardChanges( appid )
{
	var rgParams = {
		'sessionid' : g_sessionID
	};

	$J.post(
		'https://partner.steamgames.com/contentdescriptors/ajaxdiscardchanges/' + appid + '/',
		rgParams
	).done( function( response ) {
		if ( response.success == 1 )
		{
			top.location.href = 'https://partner.steamgames.com/contentdescriptors/listsurveys/' + appid + '/';
		}
		else
		{
			ShowAlertDialog( 'Error Saving Survey', 'There was a problem trying to save the survey. Please try again.' );
		}
	} );
}

function FinishSurvey( appid )
{
	var rgParams = {
		'sessionid' : g_sessionID
	};

	var waitDialog = ShowBlockingWaitDialog( 'Publishing Changes...', 'Please wait while your changes are being published...' );

	$J.post(
		'https://partner.steamgames.com/contentdescriptors/ajaxfinishsurvey/' + appid + '/',
		rgParams
	).done( function( response ) {
		if ( response.success == 1 )
		{
			waitDialog.Dismiss();

			var dialog = ShowAlertDialog( 'Success!', 'Your changes have been successfully published to Steam. It may take a few minutes before your Store Page has been updated.' );
			dialog.done( function() {
				top.location.href = 'https://partner.steamgames.com/contentdescriptors/listsurveys/' + appid + '/';
			});
		}
		else
		{
			waitDialog.Dismiss();
			ShowAlertDialog( 'Error Publishing Changes', 'There was a problem trying to publish the changes. Please try again.' );
		}
	} );
}

function HandleRelatedContentDescriptors( descid, bAnimate )
{
	var checkboxDesc = $J( "#descriptor_" + descid );
	var childrenDescriptors = $J( '[data-parentdescid="' + descid + '"]' );

	if ( checkboxDesc.prop( "checked" ) )
	{
		childrenDescriptors.each( function( ) {
			var child = $J( this );

			child.animate( { opacity: 'show', height: 'show'}, bAnimate ? 500 : 0 );

			child.find( 'input[type="checkbox"]' ).each( function() {
				$J( this ).removeAttr( "disabled" );
			} );
		} );
	}
	else
	{
		childrenDescriptors.each( function( ) {
			var child = $J( this );

			child.animate( { opacity: 'hide', height: 'hide'}, bAnimate ? 500 : 0 );

			child.find( 'input[type="checkbox"]' ).each( function() {
				$J( this ).attr( "disabled", true );
			} );
		} );
	}
}

function HandleRelatedTags( descid, bAnimate )
{
	var checkboxDesc = $J( "#descriptor_" + descid );
	var elemTags = $J( "#related_tags_" + descid );
	if ( checkboxDesc.prop( "checked" ) )
	{
		elemTags.animate( { opacity: 'show', height: 'show'}, bAnimate ? 500 : 0 );
		elemTags.find( 'input[type="checkbox"]' ).each( function() {
			$J( this ).removeAttr( "disabled" );
		} );
	}
	else
	{
		elemTags.animate( { opacity: 'hide', height: 'hide'}, bAnimate ? 500 : 0 );
		elemTags.find( "input[type=checkbox]" ).each( function() {
			$J( this ).attr( "disabled", true );
		} );
	}
}

function HandleMatureContentChange( bMature, bAnimate )
{
	var rgElements = [ '#customer_notes', '#content_descriptors', '#dev_notes' ];
	if ( bMature )
	{
		rgElements.each( function( id ) {
			var $elem = $J( id );
			$elem.animate( { opacity: 'show', height: 'show'}, bAnimate ? 500 : 0 );
		} );
	}
	else
	{
		rgElements.each( function( id ) {
			var $elem = $J( id );
			$elem.animate( { opacity: 'hide', height: 'hide'}, bAnimate ? 500 : 0  );
		} );
	}
}

