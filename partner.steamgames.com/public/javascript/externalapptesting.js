

function BuildReportDetails( appid, report, report_date )
{
	var content = $J( '<div/>' );

	// misc
	{
		content.append( $J( '<h2/>', { text: 'Report Details' } ) );
		content.append( $J( '<div/>', { class: 'grayRule' } ) );
		var reportDetails = $J( '<div/>', { class: 'landingTable' } );

		var row = null;

		row = $J( '<div/>', { class: 'tr highlightHover ' } );
		row.append( $J( '<div/>', { class: 'td', text: 'Title' } ) );
		var tdtemp = $J( '<div/>', { class: 'td' } );
		tdtemp.append( $J( '<a/>', { href: "https://partner.steamgames.com//apps/landing/" + appid, text: report['name'] } ) );
		row.append( tdtemp );
		reportDetails.append( row );

		row = $J( '<div/>', { class: 'tr highlightHover ' } );
		row.append( $J( '<div/>', { class: 'td', text: 'Result' } ) );
		row.append( $J( '<div/>', { class: 'td', text: report['result'] } ) );
		reportDetails.append( row );

		row = $J( '<div/>', { class: 'tr highlightHover ' } );
		row.append( $J( '<div/>', { class: 'td', text: 'Report Date' } ) );
		row.append( $J( '<div/>', { class: 'td', text: report_date } ) );
		reportDetails.append( row );

		row = $J( '<div/>', { class: 'tr highlightHover ' } );
		row.append( $J( '<div/>', { class: 'td', text: 'Score' } ) );
		row.append( $J( '<div/>', { class: 'td', text: report['score'] } ) );
		reportDetails.append( row );

		row = $J( '<div/>', { class: 'tr highlightHover ' } );
		row.append( $J( '<div/>', { class: 'td', text: 'Testers' } ) );
		row.append( $J( '<div/>', { class: 'td', text: report['testers'] } ) );
		reportDetails.append( row );

		row = $J( '<div/>', { class: 'tr highlightHover ' } );
		row.append( $J( '<div/>', { class: 'td', text: 'Platforms' } ) );
		row.append( $J( '<div/>', { class: 'td', text: report['platforms_tested'] } ) );
		reportDetails.append( row );

		if ( report.hasOwnProperty( 'additional_notes' ) && report['additional_notes'].trim() != '' )
		{
			row = $J( '<div/>', { class: 'tr highlightHover ' } );
			row.append( $J( '<div/>', { class: 'td', text: 'Additional Notes' } ) );
			row.append( $J( '<div/>', { class: 'td newlines', text: report['additional_notes'] } ) );
			reportDetails.append( row );
		}

		if ( Array.isArray( report['related_issues'] ) && report['related_issues'].length != 0 )
		{
			row = $J( '<div/>', { class: 'tr highlightHover ' } );
			row.append( $J( '<div/>', { class: 'td', text: 'Related Issues' } ) );
			var relatedIssues = $J( '<div/>', { class: 'td' } );
			relatedIssues.append( report['related_issues'].join('<br>' ) );
			row.append( relatedIssues );
			reportDetails.append( row );
		}

		if ( report.hasOwnProperty( 'valve_action_needed' ) && report['valve_action_needed'].trim() != '' )
		{
			row = $J( '<div/>', { class: 'tr highlightHover valve_action_needed' } );
			row.append( $J( '<div/>', { class: 'td', text: 'Valve Action Needed' } ) );
			row.append( $J( '<div/>', { class: 'td newlines', text: report['valve_action_needed'] } ) );
			reportDetails.append( row );
		}

		if ( report.hasOwnProperty( 'help_request_reference_code' ) && report['help_request_reference_code'].trim() != '')
		{
			row = $J( '<div/>', { class: 'tr highlightHover' } );
			row.append( $J( '<div/>', { class: 'td', text: 'Help Request' } ) );
			row.append( $J( '<div/>', { class: 'td', html: '<a href="' + 'https://help.steampowered.com/en/ticketmaster/ticket/' + report['help_request_reference_code'] + '">' + report['help_request_reference_code'] + '</a>' } ) );
			reportDetails.append( row );
		}

		content.append( reportDetails );
	}

	content.append( "<br><br>" );

	// test details
	{
		content.append( $J( '<h2/>', { text: 'Test Details' } ) );
		content.append( $J( '<div/>', { class: 'grayRule' } ) );
		var testDetails = $J( '<div/>', { class: 'landingTable' } );
		// test details header
		{
			var row = $J( '<div/>', { class: 'tr' } );
			var testName = $J( '<div/>', { class: 'th', text: 'Test Name' } );
			row.append( testName );
			var testResult = $J( '<div/>', { class: 'th', text: 'Result' } );
			row.append( testResult );
			var testComment = $J( '<div/>', { class: 'th', text: 'Comment' } );
			row.append( testComment );
			testDetails.append( row );
		}

		// data
		if ( report.test_details ) {
			for (var i = 0; i < report.test_details.length; ++i) {
				var test = report.test_details[i];

				var passed = test['result'].toUpperCase() == 'PASS' || test['result'].toUpperCase() == 'N/A';

				var row = $J('<div/>', {class: 'tr highlightHover ' + ( passed ? '' : 'released' )});
				var testName = $J('<div/>', {class: 'td', text: test['name']});
				row.append(testName);
				var testResult = $J('<div/>', {class: 'td', text: test['result']});
				row.append(testResult);
				var testComment = $J('<div/>', {class: 'td newlines', text: test['comment']});
				row.append(testComment);
				testDetails.append(row);
			}
		}

		content.append(testDetails);
	}

	return content;
}

function ShowReportDetails( appid, report, report_date )
{
	var content = BuildReportDetails( appid, report, report_date );
	var dialog = ShowConfirmDialog( 'Report for ' + report['name'] + ' (' + appid + ')', content, 'View Raw Report', 'Dismiss' );
	dialog.done( function() {
		ShowPromptWithTextAreaDialog( 'Raw Report for ' + report['name'] + ' (' + appid + ')', JSON.stringify( report, null, 4 ) )
	} );
}

function ViewLatestTestingReport( appid, test_type )
{
	$J.get(
			'https://partner.steamgames.com/externalapptesting/getlatesttestingdetails?appid=' + appid + '&test_type=' + test_type
		).done( function( json ) {
			var t = new Date( json.reports[0].report_date * 1000 );
			var formatted = t.getFullYear() + "-" + ( t.getMonth() + 1 ) + "-" + t.getDate();
			ShowReportDetails( appid, $J.parseJSON( json.reports[0].report_json ), formatted );
		}
	);
}

function ViewTestingReports( appid, test_type, start, count )
{
	$J.get(
			'https://partner.steamgames.com/externalapptesting/getlatesttestingdetails?appid=' + appid,
			{
				start: start,
				count: count,
				test_type: test_type
			}
		).done( function( json ) {
			var appName = '';

			var content = $J( '<div/>', { class: "landingTable" } );

			var header = $J( '<div/>', { class: "tr" } );
			header.append( $J( '<div/>', { class: "th", text: "Date" } ) );
			header.append( $J( '<div/>', { class: "th", text: "Result" } ) );
			header.append( $J( '<div/>', { class: "th", text: "Help Request" } ) );
			header.append( $J( '<div/>', { class: "th", text: "Notified?" } ) );
			header.append( $J( '<div/>', { class: "th", text: "" } ) );
			content.append( header );

			for ( var i = 0; i < json.reports.length; ++i )
			{
				var report = json.reports[i];
				var t = new Date( report.report_date * 1000 );
				var formatted = t.getFullYear() + "-" + ( t.getMonth() + 1 ) + "-" + t.getDate();

				var reportJSON = $J.parseJSON( report['report_json'] );
				appName = reportJSON['name'];

				var reportDiv = $J( '<div/>', { class: "tr" } );
				reportDiv.append( $J( '<div/>', { class: "td", text: formatted } ) );
				reportDiv.append( $J( '<div/>', { class: "td", text: reportJSON['result'] == 'Pass' ? 'Passed' : 'Failed' } ) );
				reportDiv.append( $J( '<div/>', { class: "td", html: reportJSON['help_request_reference_code'] ? '<a href="' + 'https://help.steampowered.com/en/ticketmaster/ticket/' + reportJSON['help_request_reference_code'] + '">' + reportJSON['help_request_reference_code'] + '</a>' : "" } ) );
				reportDiv.append( $J( '<div/>', { class: "td", text: report['notified_partner'] ? 'Y' : 'N' } ) );

				var actionsDiv = $J( '<div/>', { class: "td" });
				var btn = $J( '<span/>', { class: "btn_blue_white_innerfade btn_small_thin" } );
				btn.click(
					( function(specificReport, reportDate) {
						return function() {
							ShowReportDetails( specificReport['appid'], $J.parseJSON( specificReport.report_json ), reportDate );
						};
					} )( report, formatted )
				);
				btn.append( $J( '<span/>', { text: "Report Details" } ) );
				actionsDiv.append( btn );

				if ( i == 0 && reportJSON['result'] == 'Pass' )
				{
					var btnForceFail = $J( '<span/>', { class: "btn_blue_white_innerfade btn_small_thin", style: "margin-left:10px"  } );
					btnForceFail.click( 
						( function(specificReport, specificAppName, specificTestType ) {
							return function() {
								ForceSubmitAppTestingReport( specificReport['appid'], specificAppName, specificTestType, false, true /* force reload on success */ );
							};
						} )( report, appName, test_type )
					);
					btnForceFail.append( $J( '<span/>', { text: "Force Fail" } ) );				
					actionsDiv.append( btnForceFail );
				}
				reportDiv.append( actionsDiv );

				content.append( reportDiv );
			}

			var dialog = ShowConfirmDialog( 'External Testing Reports', content, 'Notify Partner' );
			dialog.done( function() {
				NotifyPartnerOfTestResults( appid, appName, report['test_type'] );
			} );
		}
	);
}

function RequestTesting( appid, appName, testType )
{
	var dialog = ShowPromptWithTextAreaDialog( 'Request Testing for ' + appName );

	var text_area = $J( dialog.m_$Content ).find( "textarea" );
	text_area.before( $J( "<div/>", { text: "Enter notes for the testers below:", style: "font-size: 16px; padding-bottom: 10px" } ) );

	dialog.done( function( data ) {

		var waitDialog = ShowBlockingWaitDialog( 'Please Wait', '...' );

		$J.post(
			'https://partner.steamgames.com/externalapptesting/requesttesting/',
			{
				sessionid: g_sessionID,
				appid: appid,
				test_type: testType,
				notes: data
			}
		).success( function( data ) {
				waitDialog.Dismiss();

				if ( data.success != 1 )
				{
					ShowAlertDialog( 'Error', 'Failed to request testing for app ' + appName + ': ' + data.message );
				}
				else
				{
					top.location.reload();
				}
			}
		).fail( function( jqXHR ) {
				waitDialog.Dismiss();
				ShowAlertDialog( 'Error', jqXHR.success );
			}
		);
	} );
}

function NotifyPartnerOfTestResults( appid, name, test_type )
{
	$J.get(
			'https://partner.steamgames.com/externalapptesting/getlatesttestingdetails?appid=' + appid + '&test_type=' + test_type
		).done( function( json ) {
			var report = json.reports[0];
			var dialog = ShowPromptWithTextAreaDialog( 'Notify Partner of Test Results (' + name + ')', report.partner_message, "SEND NOW", null, 10000 );

			var t = new Date( json.reports[0].report_date * 1000 );
			var formatted = t.getFullYear() + "-" + ( t.getMonth() + 1 ) + "-" + t.getDate();

			var reportJSON = $J.parseJSON( json.reports[0].report_json );
			var content = BuildReportDetails( appid, reportJSON, formatted );
			content.css( "float", "left" );
			content.css( "width", "490px" );
			content.css( "padding-right", "14px" );

			var text_area = $J( dialog.m_$Content ).find( "textarea" );
			text_area.css( "width", "490px" );
			text_area.before( content );

			// pre-popualted dialog if applicable
			if (  reportJSON.test_details )
			{
				for ( var i = 0; i < reportJSON.test_details.length; ++i )
				{
					var test = reportJSON.test_details[i];

					var passed = test['result'].toUpperCase() == 'PASS' || test['result'].toUpperCase() == 'N/A';
					if ( !passed )
					{
						text_area.append( test['comment'] );
						text_area.append( '\n\n' );
					}
				}
			}
			text_area[0].selectionStart = 0;
			text_area[0].selectionEnd = 0;
			text_area.scrollTop( 0 );

			text_area.before( $J( "<div/>", { style: "font-size: 16px; color: #ffffff; padding-bottom: 5px;", text: "Please enter details on the failure and any instructions for the developer to follow:" } ) );
			text_area.after( $J( "<div/>", { style: "clear: left" } ) );
			text_area.after( $J( "<div/>", { style: "color: #aaaaaa; padding-top: 5px;", text: "This notification automatically includes the name of the product and a link to the product landing page" } ) );

			var parent = text_area.parent();
			parent.css( "width", "1000px" );

			if ( test_type == '0' )
			{
				var quick_text_options = [
					{ title: "<Select quick text>", text : "" },
					{ title: "Categories indicated for non-present features", text : "Please do not select categories for features that are not currently functional in your product." },
					{ title: "Full Controller Support", text : "It looks like you’ve listed \"Full controller support\" but it doesn't meet the requirements of \"Full controller support.\"<br>You can uncheck that feature and resubmit your title, or wait to resubmit until you have resolved this issue with the controller." },
					{ title: "Missing files in install directory", text : "Our testers are reporting that your game files are not being installed to your game directory.  Usually, this is caused by a setting issue in the Steamworks Admin.  You can read about the Steampipe content system here: https://partner.steamgames.com/doc/sdk/uploading" },
					{ title: "Incorrect Launch Option", text : "Our testers are reporting that your game will not launch through Steam, though they can launch it from the directory.  Usually this indicates that you have set your launch options incorrectly for the title in the Steamworks App Data Admin under Installation > General." },
					{ title: "Missing Dependency", text : "Your game requires a package that is not installed prior to launching your game.  For common dependencies, you can select them from a list under \"Edit Steamworks Settings\" > Installation > Redistributables.  For additional dependencies, you must include the installers with your package and run them using an Install script.  https://partner.steamgames.com/doc/sdk/installscripts" },
				];

				var quick_text_select = $J( "<select/>", { style: "width: 490px; margin-bottom: 10px;" } );
				for ( var i = 0; i < quick_text_options.length; ++i )
				{
					var option = quick_text_options[i];
					quick_text_select.append( $J("<option/>", { value: i, text: option.title } ) );
				}
				quick_text_select.change( function() {
					var i = $J( this ).val();
					var caretPos = text_area[0].selectionStart;
					var textAreaTxt = text_area.val();
					text_area.val( textAreaTxt.substring( 0, caretPos ) + quick_text_options[i].text + '\n\n' + textAreaTxt.substring( caretPos ) );
					text_area[0].selectionStart = caretPos + quick_text_options[i].text.length;
				} );
				quick_text_select.before( $J( "<p>", { text: "Append quick-text" } ) );
				text_area.before( quick_text_select );
			}

			dialog.AdjustSizing();

			dialog.done( function( data ) {
				data = v_trim( data );
				if ( data.length < 1 )
				{
					ShowAlertDialog( 'Error', 'Please enter in some notes for the partner telling them what they need to do before their app can be released.' );
					return;
				}
				$J.post( 'https://partner.steamgames.com/externalapptesting/notifypartneroftestresults', {
						'sessionid' : g_sessionID,
						'appid' : appid,
						'test_type': test_type,
						'notes_for_partner' : data
					}
				).done( function( json ) {
						switch ( json.success )
						{
							case 1:
								$J( "#NotifiedPartnerForApp_" + appid ).parent().addClass( "notified" );
								$J( "#NotifiedPartnerForApp_" + appid ).html( "Y" );
								break;
							case 42:
								ShowAlertDialog( 'Error', "Could not find a testing request for this app!" );
								break;
							case 32:
								ShowAlertDialog( 'Error', "Failed to save to database: " + json.message );
								break;
							default:
								ShowAlertDialog( 'Error', "An unknown error occurred: " + json.success + "(" + json.message + ")" );
								break;
						}

					} );
			} );
		}
	);
}

function ForceSubmitAppTestingReport( appid, appName, testType, bPass, bReloadOnSuccess = false )
{
	var dialog = ShowPromptWithTextAreaDialog( 'Force ' + ( bPass ? 'Pass' : 'Fail' ) + ' Testing Report for App: ' + appName, "", "OK", null, 5000 );

	var text_area = $J( dialog.m_$Content ).find( "textarea" );
	text_area.before( $J( "<div/>", { text: "Enter the reason below.  This will be shared with the partner in the build review support ticket.", style: "font-size: 16px; padding-bottom: 10px" } ) );
	
	dialog.done( function( data ) {
		data = v_trim( data );
		if ( data.length < 1 )
		{
			ShowAlertDialog( 'Error', 'Please enter a reason to force ' + ( bPass ? 'pass' : 'fail' ) + ' this app.' );
			return;
		}

		$J.post( 'https://partner.steamgames.com/externalapptesting/' + ( bPass ? 'forcepassapp/' : 'forcefailapp/' ), {
				'sessionid' : g_sessionID,
				'appid' : appid,
				'test_type' : testType,
				'notes' : data
			}
		).done( function( json ) {
			switch ( json.success )
			{
				case 1:
					if ( bReloadOnSuccess )
					{
						window.location.reload();
					}
					break;
				default:
					ShowAlertDialog( 'Error', "An unknown error occurred." );
					break;
			}
		} );

	} );
}

function ForcePassAppTestingReport( appid, appName, testType )
{
	var dialog = ShowPromptWithTextAreaDialog( 'Force Pass Testing Report for App: ' + appName, "", "OK", null, 5000 );

	dialog.done( function( data ) {
		data = v_trim( data );
		if ( data.length < 1 )
		{
			ShowAlertDialog( 'Error', 'Please enter a reason to force pass this app.' );
			return;
		}

		$J.post( 'https://partner.steamgames.com/externalapptesting/forcepassapp', {
				'sessionid' : g_sessionID,
				'appid' : appid,
				'test_type' : testType,
				'notes' : data
			}
		).done( function( json ) {
			switch ( json.success )
			{
				case 1:
					break;
				default:
					ShowAlertDialog( 'Error', "An unknown error occurred." );
					break;
			}
		} );

	} );
}

function CloseTestingRequest( appid, testType, bPassed )
{
	var dialog = bPassed ? ShowConfirmDialog( 'Mark Review as PASSED?', 'Are you sure you want to mark the review as PASSED?' ) : ShowConfirmDialog( 'Close Request as FAILED?', 'Are you sure you want to close this request as FAILED?' );
	dialog.done( function()	{
		$J.post(
			'https://partner.steamgames.com/externalapptesting/ajaxclosetestingrequest/' + appid,
			{ sessionid: g_sessionID, test_type: testType, passed: bPassed ? 1 : 0 }
		).done( function ( data )
		{
			switch ( data.success )
			{
				case 1:
					$J( "#NotifiedPartnerForApp_" + appid ).parent().addClass( "notified" );
					$J( "#NotifiedPartnerForApp_" + appid ).html( "Y" );
					break;
				default:
					ShowAlertDialog( 'Error', "There was a problem trying to mark the review: " + data.success );
					break;
			}
		} );
	} );
}

