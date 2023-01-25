
function UserReview_Award( bLoggedIn, loginURL, recommendationID, callbackFunc, selectedAward )
{
	if ( bLoggedIn )
	{
		fnLoyalty_ShowAwardModal( recommendationID, 1, callbackFunc, undefined, selectedAward );
	}
	else
	{
		var dialog = ShowConfirmDialog( 'Error', 'You must be logged in to perform that action.', 'Sign In' );
		dialog.done( function() {
			top.location.href = loginURL;
		} );
	}
}

function UserReview_ShowMoreAwards( elem )
{
	elem = $J( elem );
	var container = elem.closest( ".review_award_ctn" );
	container.addClass( "show_all_awards" );
}

function UserReview_Rate( recommendationID, bRateUp, baseURL, callback )
{
	$J.post( baseURL + '/userreviews/rate/' + recommendationID,{
				'rateup' : bRateUp,
				'sessionid' : g_sessionID
	}).done( function( results ) {
		if ( results.success == 1 )
		{
			callback( results );
		}
		else if ( results.success == 21 )
		{
			ShowAlertDialog( 'Error', 'You must be logged in to perform that action.' );
		}
		else if ( results.success == 15 )
		{
			ShowAlertDialog( 'Error', 'Your account does not have sufficient privileges to perform this action.' );
		}
		else if ( results.success == 24 )
		{
			ShowAlertDialog( 'Error', 'Your account does not meet the requirements to use this feature. <a class="whiteLink" href="https://help.steampowered.com/en/wizard/HelpWithLimitedAccount" target="_blank" rel="noreferrer">Visit Steam Support</a> for more information.' );
		}
		else
		{
			ShowAlertDialog( 'Error', 'There was an error trying to process your request: ' + results.success );
		}
	} );
}

function UserReview_VoteTag( recommendationID, tagID, bRateUp, baseURL, callback )
{
	$J.post( baseURL + '/userreviews/votetag/' + recommendationID,{
		'tagid' : tagID,
		'rateup' : bRateUp,
		'sessionid' : g_sessionID
	}).done( function( results ) {
		if ( results.success == 1 )
		{
			callback( results );
		}
		else if ( results.success == 21 )
		{
			ShowAlertDialog( 'Error', 'You must be logged in to perform that action.' );
		}
		else if ( results.success == 15 )
		{
			ShowAlertDialog( 'Error', 'Your account does not have sufficient privileges to perform this action.' );
		}
		else if ( results.success == 24 )
		{
			ShowAlertDialog( 'Error', 'Your account does not meet the requirements to use this feature. <a class="whiteLink" href="https://help.steampowered.com/en/wizard/HelpWithLimitedAccount" target="_blank" rel="noreferrer">Visit Steam Support</a> for more information.' );
		}
		else
		{
			ShowAlertDialog( 'Error', 'There was an error trying to process your request: ' + results.success );
		}
	} );
}

function UserReview_Report( recommendationID, baseURL, callback )
{
	var dialog = ShowPromptWithTextAreaDialog( 'Report Review', '', null, null, 1000 );
	var explanation = $J('<div/>', { 'class': 'user_review_report_dialog_explanation' } );
	explanation.html( 'Please enter the reason why you are reporting this review for violating the Steam Terms of Service or Online Conduct Rules. This cannot be undone.' );

	var textArea = dialog.m_$Content.find( 'textarea' );
	textArea.addClass( "user_review_report_dialog_text_area" );
	textArea.parent().before( explanation );

	dialog.done( function( note ) {
		if ( !note )
		{
			return;
		}
		note = v_trim( note );
		if ( note.length < 1 )
		{
			return;
		}
		$J.post( baseURL + '/userreviews/report/' + recommendationID, {
					'reportnote' : note,
					'sessionid' : g_sessionID
		}).done( function( results ) {
			if ( results.success == 1 )
			{
				callback( results );
			}
			else if ( results.success == 21 )
			{
				ShowAlertDialog( 'Error', '##UserReviews_Error_NotLoggedIn_Text' );
			}
			else
			{
				ShowAlertDialog( 'Error', 'There was an error trying to process your request: ' + results.success );
			}
		} );
	} );
}

function UserReview_ShowUpdateReviewDialog( recommendationID, existingText, baseURL )
{
	var dialog = ShowPromptWithTextAreaDialog( 'Update Your Review', existingText, null, null, 4096 );

	dialog.done( function( note ) {
		if ( !note )
		{
			return;
		}
		note = v_trim( note );
		if ( note.length < 1 )
		{
			return;
		}
		UserReview_Update_Text( recommendationID, note, baseURL, function( results ) { top.location.reload(); } );
	} );
}

function UserReview_Update( recommendationID, params, baseURL, callback )
{
	params['sessionid'] = g_sessionID;
	$J.post( baseURL + '/userreviews/update/' + recommendationID, params )
	.done( function( results ) {
		if ( results.success == 1 )
		{
			if ( callback )
			{
				callback( results );
			}
		}
		else
		{
			ShowAlertDialog( 'Error', 'There was an error trying to process your request: ' + results.success );
		}
	} );
}

function UserReview_Update_Visibility( recommendationID, is_public, baseURL, callback )
{
	UserReview_Update( recommendationID, { 'is_public' : is_public }, baseURL, callback );
}

function UserReview_Update_Language( recommendationID, language, baseURL, callback )
{
	UserReview_Update( recommendationID, { 'language' : language }, baseURL, callback );
}

function UserReview_Update_CommentStatus( recommendationID, bCommentsDisabled, baseURL, callback )
{
	UserReview_Update( recommendationID, { 'comments_disabled' : bCommentsDisabled }, baseURL, callback );
}

function UserReview_Moderate( recommendationID, params, baseURL, callback )
{
	params['sessionid'] = g_sessionID;
	$J.post( baseURL + '/userreviews/moderate/' + recommendationID, params )
		.done( function( results ) {
			if ( results.success != 1 )
			{
				var dialog = ShowAlertDialog( 'Error', 'There was an error trying to process your request: ' + results.success );
				dialog.done( function() {
					if ( callback )
					{
						callback( results );
					}
				} );
			}
			else
			{
				if ( callback )
				{
					callback( results );
				}
			}
		} );
}

function UserReview_ClearDeveloperFlag( recommendationID, baseURL, callback )
{
	var dialog = ShowConfirmDialog( 'Clear Developer Flag Reason', 'This review was flagged by the developer. Are you sure you want to clear this status?' );
	dialog.done( function() {
		$J.post( baseURL + '/userreviews/cleardeveloperflag/' + recommendationID, {'sessionid' : g_sessionID} )
		.done( function( results ) {
			if ( results.success == 1 )
			{
				if ( callback )
				{
					callback( results );
				}
			}
			else
			{
				ShowAlertDialog( 'Error', 'There was an error trying to process your request: ' + results.success );
			}
		} );
	});
}

function UserReview_SetDeveloperResponse( recommendationID, recommendation, baseURL, callback )
{
	var dialog = ShowPromptWithTextAreaDialog( 'Write a response', recommendation.developer_response, null, null, 8000 );
	var explanation = $J('<div/>', { 'class': 'user_review_report_dialog_explanation' } );
	explanation.html( 'You can choose to respond to this review in an official capacity. This response will be visible to anyone who can see this review and will be marked as from the developer.' );

	var textArea = dialog.m_$Content.find( 'textarea' );
	textArea.addClass( "user_review_report_dialog_text_area" );
	textArea.parent().before( explanation );

	dialog.done( function( note ) {
		$J.post( baseURL + '/userreviews/setdeveloperresponse/' + recommendationID,{
					'developer_response' : note,
					'sessionid' : g_sessionID
		}).done( function( results ) {
			if ( results.success == 1 )
			{
				callback( results );
			}
			else
			{
				ShowAlertDialog( 'Error', 'There was an error trying to process your request: ' + results.success );
			}
		} );
	} );
}

function UserReview_ShowReportsDialog( recommendationID, baseURL )
{
	$J.post( baseURL + '/userreviews/ajaxgetreports/' + recommendationID,{ 'sessionid' : g_sessionID } )
	.done( function( results ) {
		if ( results.success == 1 )
		{
			var container = $J('<div/>', {'class': 'review_reports' } );
			var reports = results.reports;

			{
				var reportDiv = $J('<div/>', {'class': 'review_report header' } );
				var divReporter = $J('<div/>', {'class': 'review_report_data' } ).append( 'Reporter' );
				reportDiv.append( divReporter );
				var divDescription = $J('<div/>', {'class': 'review_report_data description' } ).append( 'Report Description' );
				reportDiv.append( divDescription );
				var divWeight = $J('<div/>', {'class': 'review_report_data' } ).append( 'Weight' );
				reportDiv.append( divWeight );
				var divWasReset = $J('<div/>', {'class': 'review_report_data' } ).append( 'Cleared?' );
				reportDiv.append( divWasReset );
				var divTime = $J('<div/>', {'class': 'review_report_data' } ).append( 'Date' );
				reportDiv.append( divTime );
				var divReviewText = $J('<div/>', {'class': 'review_report_data review_text' } ).append( 'Review Text At Report Time' );
				reportDiv.append( divReviewText );
				var divClear = $J('<div/>', {'style': 'clear: left' } );
				reportDiv.append( divClear );
				container.append( reportDiv );
			}

			for ( var i = 0; i < reports.length; ++i )
			{
				var report = reports[i];

				var reportDiv = $J('<div/>', {'class': 'review_report' } );
					var divReporter = $J('<div/>', {'class': 'review_report_data' } ).append( $J('<a/>', {'href': report.reporter_url, 'text': report.reporter, 'target': '_blank' } ) );
					reportDiv.append( divReporter );
					var divDescription = $J('<div/>', {'class': 'review_report_data description' } ).append( report.description );
					reportDiv.append( divDescription );
					var divWeight = $J('<div/>', {'class': 'review_report_data' } ).append( report.weight );
					reportDiv.append( divWeight );
					var divWasReset = $J('<div/>', {'class': 'review_report_data' } ).append( report.was_reset ? 'Yes' : 'No' );
					reportDiv.append( divWasReset );
					var divTime = $J('<div/>', {'class': 'review_report_data' } ).append( report.time_string );
					reportDiv.append( divTime );
					var divReviewText = $J('<div/>', {'class': 'review_report_data review_text' } ).append( report.review_text );
					reportDiv.append( divReviewText );
					var divClear = $J('<div/>', {'style': 'clear: left' } );
					reportDiv.append( divClear );
				container.append( reportDiv );
			}
			var dialog = ShowAlertDialog( 'Clear Reports', container );
		}
	} );
}

function UserReview_ShowContentCheckResultsDialog( recommendationID, baseURL )
{
	$J.get( baseURL + '/userreviews/ajaxgetcontentcheckresults/' + recommendationID )
	.done( function( data ) {
		if ( data.success == 1 )
		{
			var container = $J('<div/>', {'class': 'review_reports' } );

			{
				var reportDiv = $J('<div/>', {'class': 'review_report header' } );
					var divProvider = $J('<div/>', {'class': 'review_report_data' } ).append( 'Provider' );
					reportDiv.append( divProvider );
					var divResult = $J('<div/>', {'class': 'review_report_data' } ).append( 'Result' );
					reportDiv.append( divResult );
					var divScore = $J('<div/>', {'class': 'review_report_data' } ).append( 'Score' );
					reportDiv.append( divScore );
					var divProviderResponse = $J('<div/>', {'class': 'review_report_data description' } ).append( 'Provider Response' );
					reportDiv.append( divProviderResponse );
					var divReviewText = $J('<div/>', {'class': 'review_report_data review_text' } ).append( 'Review Text At Eval Time' );
					reportDiv.append( divReviewText );
					var divTime = $J('<div/>', {'class': 'review_report_data' } ).append( 'Date' );
					reportDiv.append( divTime );
					var divClear = $J('<div/>', {'style': 'clear: left' } );
					reportDiv.append( divClear );
				container.append( reportDiv );
			}

			for ( var i = 0; i < data.results.length; ++i )
			{
				var r = data.results[i];
				var reportDiv = $J('<div/>', {'class': 'review_report' } );
					var divProvider = $J('<div/>', {'class': 'review_report_data' } ).append( r.provider == 1 ? 'Google' : 'Unknown' );
					reportDiv.append( divProvider );
					var divResult = $J('<div/>', {'class': 'review_report_data' } ).append( r.ban_check_result_string );
					reportDiv.append( divResult );
					var divScore = $J('<div/>', {'class': 'review_report_data' } ).append( r.score );
					reportDiv.append( divScore );
					var divProviderResponse = $J('<div/>', {'class': 'review_report_data description' } ).append( r.provider_response );
					reportDiv.append( divProviderResponse );
					var divReviewText = $J('<div/>', {'class': 'review_report_data review_text' } ).append( r.review_text );
					reportDiv.append( divReviewText );
			var divTime = $J('<div/>', {'class': 'review_report_data' } ).append( r.timestamp_evaluated_string );
			reportDiv.append( divTime );
					var divClear = $J('<div/>', {'style': 'clear: left' } );
					reportDiv.append( divClear );
				container.append( reportDiv );
			}
			var dialog = ShowAlertDialog( 'Suspicious Content Check Results', container );
		}
	} );
}

function UserReview_ShowClearReportsDialog( recommendationID, baseURL, callback )
{
	var dialog = ShowConfirmDialog( 'Clear Reports', 'Are you sure you want to clear all reports? This cannot be undone!' );
	dialog.done( function() {
		UserReview_Moderate( recommendationID, { 'clear_reports' : 1 }, baseURL, callback);
	});
}

function UserReview_ShowVoteBanUsersDialog( recommendationID, baseURL, callback )
{
	var dialog = ShowConfirmDialog( 'Vote Ban Users', 'Are you sure you want to vote ban users who upvoted this review? This cannot be undone!<br><br>This should only be done if this review qualifies as suspicious content.' );
	dialog.done( function() {
		UserReview_Moderate_VoteBanUsers( recommendationID, baseURL, callback);
	});
}

function UserReview_Moderate_SetBanStatus( recommendationID, force_hidden, baseURL, callback, strModerationNote )
{
	UserReview_Moderate( recommendationID, { 'force_hidden' : force_hidden, 'moderation_note' : strModerationNote }, baseURL, callback );
}

function UserReview_Moderate_SetDeveloperFlag( recommendationID, flagged_by_developer, baseURL, callback )
{
	UserReview_Moderate( recommendationID, { 'flagged_by_developer' : flagged_by_developer }, baseURL, callback );
}

function UserReview_Moderate_SetQuality( recommendationID, quality, baseURL, callback )
{
	UserReview_Moderate( recommendationID, { 'review_quality' : quality }, baseURL, callback );
}

function UserReview_Moderate_VoteBanUsers( recommendationID, baseURL, callback )
{
	UserReview_Moderate( recommendationID, { 'vote_ban_users' : 1 }, baseURL, callback );
}