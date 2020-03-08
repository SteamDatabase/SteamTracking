//<script>

function SurveySaveAndContinue( testid )
{
	var $eleForm = $J('#survey_questions');
	var formSerialized = $eleForm.serialize();

	$J.post( 'https://store.steampowered.com//playtesting/submitanswers/' + testid, formSerialized ).done( function( data ) {
		if( nSurveyPage >= nSurveyPages )
			window.location = 'https://store.steampowered.com/playtesting/survey/'+testid+'/';
		else
			window.location = 'https://store.steampowered.com/playtesting/survey/'+testid+'/?p=' + (1 + nSurveyPage);


	}).fail( function() {
		ShowAlertDialog( "Playtesting_Create_Fail_Title", "Playtesting_Create_Fail_Desc" );
	} );

}

