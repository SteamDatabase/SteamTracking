
function UserReview_Rate( recommendationID, bRateUp, baseURL, callback )
{
	new Ajax.Request( baseURL + '/userreviews/rate/' + recommendationID,
		{
			method: 'POST',
			parameters: {
				'rateup' : bRateUp,
				'sessionid' : g_sessionID
			},
			onSuccess: function( transport )
			{
				var results = transport.responseJSON;
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
					ShowAlertDialog( 'Error', 'Your account does not have sufficient privileges to perform this action. To access all features of Steam, simply purchase a game from the Steam store, redeem a Gift on Steam, complete a microtransaction, or activate a retail game on Steam.' );
				}
				else
				{
					ShowAlertDialog( 'Error', 'There was an error trying to process your request: ' + results.success );
				}
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
		new Ajax.Request( baseURL + '/userreviews/report/' + recommendationID,
			{
				method: 'POST',
				parameters: {
					'reportnote' : note,
					'sessionid' : g_sessionID
				},
				onSuccess: function( transport )
				{
					var results = transport.responseJSON;
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
	new Ajax.Request( baseURL + '/userreviews/update/' + recommendationID,
		{
			method: 'POST',
			parameters: params,
			onSuccess: function( transport )
			{
				var results = transport.responseJSON;
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

function UserReview_Moderate( recommendationID, params, baseURL, callback )
{
	params['sessionid'] = g_sessionID;
	new Ajax.Request( baseURL + '/userreviews/moderate/' + recommendationID,
		{
			method: 'POST',
			parameters: params,
			onSuccess: function( transport )
			{
				var results = transport.responseJSON;
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
			}
		} );
}

function UserReview_ClearDeveloperFlag( recommendationID, baseURL, callback )
{
	var dialog = ShowConfirmDialog( 'Clear Developer Flag Reason', 'This review was flagged by the developer. Are you sure you want to clear this status?' );
	dialog.done( function() {
		new Ajax.Request( baseURL + '/userreviews/cleardeveloperflag/' + recommendationID,
			{
				method: 'POST',
				parameters: {
					'sessionid' : g_sessionID
				},
				onSuccess: function( transport )
				{
					var results = transport.responseJSON;
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
		new Ajax.Request( baseURL + '/userreviews/setdeveloperresponse/' + recommendationID,
			{
				method: 'POST',
				parameters: {
					'developer_response' : note,
					'sessionid' : g_sessionID
				},
				onSuccess: function( transport )
				{
					var results = transport.responseJSON;
					if ( results.success == 1 )
					{
						callback( results );
					}
					else
					{
						ShowAlertDialog( 'Error', 'There was an error trying to process your request: ' + results.success );
					}
				}
			} );
	} );
}

function UserReview_ShowReportsDialog( recommendationID, baseURL )
{
	new Ajax.Request( baseURL + '/userreviews/ajaxgetreports/' + recommendationID,
		{
			method: 'POST',
			parameters: {
				'sessionid' : g_sessionID
			},
			onSuccess: function( transport )
			{
				var results = transport.responseJSON;
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
							var divClear = $J('<div/>', {'style': 'clear: left' } );
							reportDiv.append( divClear );
						container.append( reportDiv );
					}
					var dialog = ShowAlertDialog( 'Clear Reports', container );
				}
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

function UserReview_Moderate_SetBanStatus( recommendationID, force_hidden, baseURL, callback )
{
	UserReview_Moderate( recommendationID, { 'force_hidden' : force_hidden }, baseURL, callback );
}

function UserReview_Moderate_SetDeveloperFlag( recommendationID, flagged_by_developer, baseURL, callback )
{
	UserReview_Moderate( recommendationID, { 'flagged_by_developer' : flagged_by_developer }, baseURL, callback );
}