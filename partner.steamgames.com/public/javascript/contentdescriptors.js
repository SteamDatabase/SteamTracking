
function ImportAndSaveSurvey( appid )
{
	$J( "#bImportRatingsQuestionnaire" ).val( 1 );
	SaveSurvey( appid );
}

var gValidURL = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

function SaveSurvey( appid )
{
	if ( $J("#categoryid_38" ).is(":checked") &&
		 $J("#categoryid_40" ).is(":checked") &&
		 $J("#categoryid_49" ).is(":checked") )
	{
		if ( v_trim( $J( "#external_service_name" ).val() ).length == 0 )
		{
			ShowAlertDialog( 'Error Saving Survey', 'Please specify the name of the external service your game connects to in order to live-generate content or code for your game.' );
			return;
		}

		if ( !gValidURL.test( $J( "#external_service_url" ).val() ) )
		{
			ShowAlertDialog( 'Error Saving Survey', 'Please specify a valid URL for the website of the external service your game connects to in order to live-generate content or code for your game.' );
			return;
		}
	}

	var checkboxAIYes = $J( '#categoryid_38' );
	var checkboxAINo = $J( '#categoryid_50' );
	if ( !checkboxAIYes.prop( 'checked' ) && !checkboxAINo.prop( 'checked' ) )
	{
		ShowAlertDialog( 'Error Saving Survey', 'Please specify whether your game uses generative artificial intelligence to generate content for the game, either pre-rendered or live-generated.' );
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
					ShowAlertDialog( 'Error Saving Survey', 'You cannot remove the \'Adult Only Sexual Content\' from your Content Survey after your game has been reviewed.<br><br>If you have truly removed this content from your game, you can file a support ticket to have your game re-reviewed.' );
					break;
				default:
					ShowAlertDialog( 'Error Saving Survey', 'There was a problem trying to save the survey. Please try again.' );
			}
		}
		else if ( response.success == 24 )
		{
			ShowAlertDialog( 'Error Saving Survey', 'You do not have permission to edit one of the selected categories after your game has been released.' );
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
	var $elem = $J( "#descriptor_" + descid );
	var checked = $elem.prop( "checked" ) && !$elem.prop( "disabled" );
	var $container = $elem.closest( '[data-parentdescid' );
	var parentDescID = $container.data( 'parentdescid' );
	var childrenDescriptors = $J( '[data-parentdescid="' + descid + '"]' );

	HandleRelatedTags( descid, bAnimate );

	if ( checked )
	{
		// check all ancestors
		if ( parentDescID )
		{
			var $parentElem = $J( '#descriptor_' + parentDescID );
			$parentElem.prop( 'checked', true );
			HandleRelatedContentDescriptors( parentDescID, bAnimate );
		}

		// make sure all related tags for children are handled
		childrenDescriptors.each( function( ) {
			var child = $J( this );
			child.find( 'input[type="checkbox"]' ).each( function() {
				HandleRelatedTags( $J( this ).data( 'descid' ), bAnimate );
			} );
		} );
	}
	else
	{
		// uncheck all children
		childrenDescriptors.each( function( ) {
			var child = $J( this );
			child.find( 'input[type="checkbox"]' ).each( function() {
				$J( this ).prop( 'checked', false );
				HandleRelatedContentDescriptors( $J( this ).data( 'descid' ), bAnimate );
			} );
		} );
	}
}

function HandleRelatedTags( descid, bAnimate )
{
	var $elem = $J( "#descriptor_" + descid );
	var checked = $elem.prop( "checked" ) && !$elem.attr( "disabled" );
	var elemTags = $J( "#related_tags_" + descid );
	if ( checked )
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
	var rgElements = [ '#customer_notes', '#dev_notes' ];
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

function HandleCategoryRelatedDivVisibility( checkbox, relatedDiv, bAnimate )
{
	var relatedDiv = $J( relatedDiv );
	checkbox = $J( checkbox );

	if ( checkbox.prop( 'checked' ) )
	{
		relatedDiv.animate( { opacity: 'show', height: 'show'}, bAnimate ? 500 : 0 );
	}
	else
	{
		relatedDiv.animate( { opacity: 'hide', height: 'hide'}, bAnimate ? 500 : 0 );
	}
}

function HandleAISurveySelection( checkbox, bAnimate )
{
	var checkboxAIYes = $J( '#categoryid_38' );
	var checkboxAINo = $J( '#categoryid_50' );

	if ( checkbox )
	{
		checkbox = $J( checkbox );
		var bIsYes = checkbox.prop( 'id' ) == checkboxAIYes.prop( 'id' );

		if ( checkbox.prop( 'checked' ) )
		{
			if ( bIsYes )
			{
				checkboxAINo.prop( 'checked', false );
			}
			else
			{
				checkboxAIYes.prop( 'checked', false );
			}
		}
		else
		{
			if ( bIsYes )
			{
				checkboxAINo.prop( 'checked', true );
			}
			else
			{
				checkboxAIYes.prop( 'checked', true );
			}
		}
	}

	var relatedDiv = $J( "#AISurvey" );
	if ( checkboxAIYes.prop( 'checked') )
	{
		relatedDiv.animate( { opacity: 'show', height: 'show'}, bAnimate ? 500 : 0 );
	}
	else
	{
		relatedDiv.animate( { opacity: 'hide', height: 'hide'}, bAnimate ? 500 : 0 );
	}
}

function CheckAOContentAndLiveGenerateAIContent()
{
	var checkboxAO = $J( '#descriptor_3' );
	var checkboxAILive = $J( '#categoryid_40' );
	if ( checkboxAO.prop( 'checked' ) && checkboxAILive.prop( 'checked' ) )
	{
		ShowAlertDialog( 'Warning', 'Steam cannot support Adult Only Sexual Content that is created with Live-Generated AI at this time. You may contact Steamworks support to request a refund of your app fee.' );
	}
}

