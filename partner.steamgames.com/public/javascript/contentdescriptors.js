
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
			ShowAlertDialog( '#App_ContentDescriptors_SaveError', '#App_ContentDescriptors_SaveError_AI_ExternalService_MissingName' );
			return;
		}

		if ( !gValidURL.test( $J( "#external_service_url" ).val() ) )
		{
			ShowAlertDialog( '#App_ContentDescriptors_SaveError', '#App_ContentDescriptors_SaveError_AI_ExternalService_InvalidURL' );
			return;
		}
	}

	var checkboxAIYes = $J( '#categoryid_38' );
	var checkboxAINo = $J( '#categoryid_50' );
	if ( !checkboxAIYes.prop( 'checked' ) && !checkboxAINo.prop( 'checked' ) )
	{
		ShowAlertDialog( '#App_ContentDescriptors_SaveError', '#App_ContentDescriptors_SaveError_AI_SelectOption' );
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
					ShowAlertDialog( '#App_ContentDescriptors_SaveError', '#App_ContentDescriptors_SaveError_CannotRemoveAOSex' );
					break;
				default:
					ShowAlertDialog( '#App_ContentDescriptors_SaveError', '#App_ContentDescriptors_SaveErrorDesc' );
			}
		}
		else
		{
			ShowAlertDialog( '#App_ContentDescriptors_SaveError', '#App_ContentDescriptors_SaveErrorDesc' );
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
			ShowAlertDialog( '#App_ContentDescriptors_SaveError', '#App_ContentDescriptors_SaveErrorDesc' );
		}
	} );
}

function FinishSurvey( appid )
{
	var rgParams = {
		'sessionid' : g_sessionID
	};

	var waitDialog = ShowBlockingWaitDialog( '#App_ContentDescriptors_Publishing', '#App_ContentDescriptors_PublishingDesc' );

	$J.post(
		'https://partner.steamgames.com/contentdescriptors/ajaxfinishsurvey/' + appid + '/',
		rgParams
	).done( function( response ) {
		if ( response.success == 1 )
		{
			waitDialog.Dismiss();

			var dialog = ShowAlertDialog( '#App_ContentDescriptors_PublishingSuccess', '#App_ContentDescriptors_PublishingSuccessDesc' );
			dialog.done( function() {
				top.location.href = 'https://partner.steamgames.com/contentdescriptors/listsurveys/' + appid + '/';
			});
		}
		else
		{
			waitDialog.Dismiss();
			ShowAlertDialog( '#App_ContentDescriptors_PublishError', '#App_ContentDescriptors_PublishErrorDesc' );
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
		ShowAlertDialog( '#App_ContentDescriptors_AO_AI_Realtime_Warning_Title', '#App_ContentDescriptors_AO_AI_Realtime_Warning_Desc' );
	}
}

