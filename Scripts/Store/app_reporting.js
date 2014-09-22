
var gReportedApp = false;
function ShowReportDialog( nAppId )
{
	if ( gReportedApp )
	{
		return;
	}

	var content = $J('<div/>', {'class': 'app_report_dialog' } );

	content.append( $J('<div/>', {'class': 'app_report_dialog_intro' } ).text('Please choose a reason why you are reporting this product.') );

		var rgReportOptions = {"1":"Fraud - <span class=\"sub\">This software fraudulently attempts to gather sensitive information, such as your Steam credentials or financial data (e.g. credit card information).<\/span>","2":"Harmful - <span class=\"sub\">This software modifies a customer's computer in unexpected or harmful ways (e.g. is malware or a virus)<\/span>","3":"Hate Speech - <span class=\"sub\">Contains hate speech, i.e. speech that promotes hatred, violence or discrimination against groups or people based on ethnicity, religion, gender, age, disability or sexual orientation<\/span>","4":"Pornography - <span class=\"sub\">Contains pornography<\/span>","5":"Adult Content - <span class=\"sub\">Contains adult content that isn't appropriately labeled and age-gated<\/span>","6":"Defamatory - <span class=\"sub\">Contains Libelous or defamatory statements<\/span>","7":"Offensive - <span class=\"sub\">Contains content that is patently offensive or intended to shock or disgust viewers<\/span>","8":"Child Exploitation - <span class=\"sub\">Contains content that exploits children in any way<\/span>","11":"Legal Violation - <span class=\"sub\">Contains content that violates the laws in your jurisdiction<\/span>"};
	var rgReportOptionElements = [];
	for ( var eReportType in rgReportOptions )
	{
		var $ReportOption = $J('<div/>', {'class': 'app_report_dialog_option' } );
		$ReportOption.append( $J('<div/>', {'class': 'app_report_dialog_option_input' }).append( $J('<input/>', {'type': 'radio', 'name':'report_type', 'value': eReportType, 'id': 'report_type_' + eReportType } ) ) );
		$ReportOption.append( $J('<div/>', {'class': 'app_report_dialog_option_text' }).append( $J('<label/>', {'for': 'report_type_' + eReportType }).html( rgReportOptions[eReportType] ) ) );
		rgReportOptionElements.push( $ReportOption );
	}

	for ( var j, x, i = rgReportOptionElements.length; i; j = parseInt(Math.random() * i), x = rgReportOptionElements[--i], rgReportOptionElements[i] = rgReportOptionElements[j], rgReportOptionElements[j] = x );
	for ( var i = 0; i < rgReportOptionElements.length; ++i )
	{
		content.append( rgReportOptionElements[i] );
	}

	var textArea = $J('<textarea/>', { 'class': 'app_report_dialog_reason', 'id' : 'ReportReason',  'name' : 'report_reason' } );
	var maxReasonLength = 512;
	textArea.attr( 'maxlength', maxReasonLength );
	textArea.bind( "keyup change",
		function()
		{
			var str = $J(this).val()
			var mx = parseInt($J(this).attr('maxlength'))
			if (str.length > mx)
			{
				$J(this).val(str.substr(0, mx))
				return false;
			}
		}
	);
	content.append( $J('<div/>', {'class': 'app_report_dialog_intro' } ).text('You may enter additional information that you feel is relevant here:') );
	content.append( textArea );

	content.append( $J('<div/>', {'class': 'app_report_dialog_dmca' } ).html('If you\'d like to report Copyright Infringement and are the copyright holder, please proceed to our DMCA compliant notice of copyright infringement form <a href="http://steamcommunity.com/dmca/create/">here</a>.') );

	var dialog = ShowConfirmDialog( 'Report this Product', content, 'Report');

	dialog.done( function() {
		var eReportTypeSelected = content.find( 'input[type=radio]:checked' ).val();
		if ( eReportTypeSelected )
		{
			$J.post(
				'http://store.steampowered.com/appreport/' + nAppId + '/report/',
				{
					'report_type' : eReportTypeSelected,
					'report_reason' : content.find( 'textarea' ).val(),
					'sessionid': g_sessionID
				}
			).done( function( json ) {
					gReportedApp = true;
					$J( "#ReportAppBtn").addClass( 'btn_active' );
				}
			).fail( function( jqXHR ) {
				var json = jqXHR.responseText.evalJSON();
				if ( json.success == 29 )
				{
					ShowAlertDialog( 'Error', 'You have already reported this product!' );
					gReportedApp = true;
					$J( "#ReportAppBtn").addClass( 'btn_active' );
				}
				else
				{
					ShowAlertDialog( 'Error', 'There was a problem saving your report.  Please try again later.' );
				}

			} );
		}
		else
		{
			ShowAlertDialog( 'Error', 'You must select a reason you are reporting this product!' );
		}
	});
}

