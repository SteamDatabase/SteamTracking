//<script>
"use strict";

function ShowCreateBetaTestModal(appid)
{

	var dialog = ShowConfirmDialog( "Create a new Playtest", $J('#modal_create')[0].innerHTML, "Save" );
	dialog.SetRemoveContentOnDismissal( false );
	dialog.done( function() {
		var strPlaytestName = dialog.GetContent().find('input[name="playtest_name"]').val();
		var nPlaytestSize = dialog.GetContent().find('input[name="playtest_size"]').val();
		$J.ajax( {
			type: "POST",
			url: 'https://partner.steamgames.com/playtesting/create/' + appid,
			data: { 'sessionid' : g_sessionID, 'playtest_name': strPlaytestName, 'playtest_size': nPlaytestSize },
			dataType: 'json'

		}).done( function( data ) {

			window.location.href = 'https://partner.steamgames.com/playtesting/view/' + appid + '/' + data.testid;

		}).fail( function(xhr) {
			console.log(xhr);
			var msg = "There was an error creating your playtest.";
			try{
				var data = $J.parseJSON( xhr.responseText );
				if( data.message )
					msg = data.message;

			} catch(e) {};
			ShowAlertDialog( "Playtest creation failed", msg );
		});
	} );

	dialog.fail( function() {
		dialog.GetContent().remove();
	});

}


function ShowEditPlaytestModal(appid, testid)
{

	var dialog = ShowConfirmDialog( "Update Playtest", $J('#modal_edit')[0].innerHTML );
	dialog.SetRemoveContentOnDismissal( false );
	dialog.done( function() {
		var nPlaytestSize = dialog.GetContent().find('input[name="playtest_size"]').val();
		$J.post( 'https://partner.steamgames.com/playtesting/edit/' + appid, { 'sessionid' : g_sessionID, 'playtest_size': nPlaytestSize, 'testid': testid } ).done( function( data ) {
			location.reload();

		}).fail( function() {
			ShowAlertDialog( "Playtesting_Edit_Fail_Title", "Playtesting_Edit_Fail_Desc" );
		} );
	} );

	dialog.fail( function() {
		dialog.GetContent().remove();
	});

}


function ShowStartPlaytestModal( appid, testid )
{
	var dialog = ShowConfirmDialog( "Start Playtest?", "Are you sure you want to launch this playtest? You cannot make alterations to the survey after the playtest begins.", "Start Playtest" );
	dialog.done( function() {

		$J.post( 'https://partner.steamgames.com/playtesting/start/' + appid, { 'sessionid' : g_sessionID, 'testid': testid } ).done( function( data ) {
			location.reload();

		}).fail( function() {
			ShowAlertDialog( "Playtest creation failed", "There was an error creating your playtest." );
		} );
	} );

	dialog.fail( function() {
		dialog.GetContent().remove();
	});

}

function ShowStopPlaytestModal( appid, testid )
{
	var dialog = ShowConfirmDialog( "End Playtest", "Ending this playtest will prevent any new users from joining and close the survey. You may also remove your appid from testers' accounts." );
	dialog.done( function() {

		$J.post( 'https://partner.steamgames.com/playtesting/stop/' + appid, { 'sessionid' : g_sessionID, 'testid': testid } ).done( function( data ) {
			location.reload();

		}).fail( function() {
			ShowAlertDialog( "Playtest creation failed", "There was an error creating your playtest." );
		} );
	} );

	dialog.fail( function() {
		dialog.GetContent().remove();
	});
}

function AddQuestion(appid, testid, nQuestionType, strQuestion )
{
	var strQuestion = $J('#survey_question').val();
	var nQuestionType = $J('#survey_type').val();
	$J.post( 'https://partner.steamgames.com/playtesting/createquestion/' + appid + '/' + testid, { 'sessionid' : g_sessionID, 'type': nQuestionType, 'question': strQuestion } ).done( function( data ) {
		location.reload();
	}).fail( function() {
		ShowAlertDialog( "Playtest creation failed", "There was an error creating your playtest." );
	} );
}

function DeleteQuestion( appid, testid, questionid )
{
	ShowConfirmDialog( '', "Are you sure you want to delete this question?" ).done( function() {

		$J.post( 'https://partner.steamgames.com/playtesting/deletequestion/' + appid + '/' + testid, { 'sessionid' : g_sessionID, 'questionid': questionid} ).done( function( data ) {
			location.reload();

		}).fail( function() {
			ShowAlertDialog( "Playtest creation failed", "There was an error creating your playtest." );
		} );

	} );
}


