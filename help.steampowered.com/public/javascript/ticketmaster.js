"use strict";

var g_strRawQuicktextInput = "";

function ClaimTickerCategoryHelper( elButton, ulCategoryID, strUrl, strCategoryName, bRequestElevated, strError, strEmpty )
{
	// replace with throbber, save old html
	var $Button = $J( elButton );
	var $Throbber = $J( "<div class=\"throbber\">\r\n\t\t\t\t\t<div><\/div>\r\n\t\t\t\t\t<div><\/div>\r\n\t\t\t\t\t<div><\/div>\r\n\t\t\t\t<\/div>" );
	var oldHTML = $Button.html();
	$Button.html( $Throbber );
	$Throbber.addClass( 'loading' );

	// disable all buttons
	$Button.closest( '.ticker_buckets' ).find( '.ticker_bucket_claim' ).css( 'pointer-events', 'none' );

	$J.ajax({
		type: "POST",
		url: strUrl,
		data: {
			category: ulCategoryID,
			request_elevated: bRequestElevated ? 1 : 0
		}
	})
	.fail( function( xhr )
	{
		ShowAlertDialog( 'Ticketmaster', strError.replace( /%s/, strCategoryName ) ).done( function() { location.reload(); } );
	})
	.done( function( data )
	{
		if ( data.num_assigned > 0 )
		{
			location.reload();
		}
		else if ( bRequestElevated )
		{
			var strBody = 'There are no more pending, escalated %s tickets.<br><br>Would you like to claim a few non-elevated tickets?'.replace( /%s/, strCategoryName );
			var $Dialog = ShowConfirmDialog( 'Ticketmaster', strBody, 'Claim Tickets', 'Cancel' )
			.done( function()
			{
				ClaimTickerCategoryRequests( elButton, ulCategoryID, strCategoryName, false );
			});
		}
		else
		{
			ShowAlertDialog( 'Ticketmaster', strEmpty.replace( /%s/, strCategoryName ) ).done( function() { location.reload(); } );
		}
	})
	.always( function( data )
	{
		$Button.html( oldHTML );
		$Button.closest( '.ticker_buckets' ).find( '.ticker_bucket_claim' ).css( 'pointer-events', 'auto' );
	});

	return false;
}

function ClaimTickerCategoryRequests( elButton, ulCategoryID, strCategoryName, bRequestElevated )
{
	return ClaimTickerCategoryHelper( elButton, ulCategoryID, 'https://help.steampowered.com/ticketmaster/AjaxClaimTicketCategory/', strCategoryName, bRequestElevated, 'An error occurred while retrieving %s tickets. Please try again.', 'There are no more pending %s tickets. Please select another category.' )
}

function ClaimTickerCategoryForReview( elButton, ulCategoryID, strCategoryName, bRequestElevated )
{
	return ClaimTickerCategoryHelper( elButton, ulCategoryID, 'https://help.steampowered.com/ticketmaster/AjaxClaimTicketCategoryForReview/', strCategoryName, false, 'An error occurred while retrieving %s tickets for review. Please try again.', 'There are no more tickets in %s waiting for review. Please select another category.' )
}

function SubmitFormAndCallFunction( form , fnFunction )
{
	var $Form = $J( form );
	$Form.find( 'button' ).addClass( 'btn_disabled' ).prop( 'disabled', true );

	$J.ajax({
		type: $Form.attr( 'method' ),
		url: $Form.attr( 'action' ),
		data: $Form.serialize()
	})
	.fail( function( xhr )
	{
		ShowAlertDialog( 'Ticketmaster', 'An error occurred while submitting your response. Please try again.' );
	})
	.done( fnFunction )
	.always( function()
	{
		$Form.find( 'button' ).removeClass( 'btn_disabled' ).prop( 'disabled', false );
	});

}

function SubmitFormAndReload( form )
{
	SubmitFormAndCallFunction( form, function(data) { location.reload(); } );
}

function SubmitFormAndRedirect( form, funcDataToUrl )
{
	SubmitFormAndCallFunction( form, function (data) { document.location = funcDataToUrl(data); } );
}


function SubmitFormAndCallFunction_WaitDialog( form, strHeader, strWaiting, strError, fFunction )
{
	var $Form = $J( form );
	var $WaitDialog = ShowBlockingWaitDialog( strHeader, strWaiting );

	$J.ajax({
		type: $Form.attr( 'method' ),
		url: $Form.attr( 'action' ),
		data: $Form.serialize()
	})
	.fail( function( xhr )
	{
		var jsonError = null;
		if ( xhr.responseText )
			jsonError = jQuery.parseJSON( xhr.responseText );

		if ( jsonError && jsonError.error && jsonError.eresult )
		{
			var strErrorMsg = jsonError.error + '<br>EResult: ' + jsonError.eresult;
			ShowAlertDialog( 'Ticketmaster', strErrorMsg );
		}
		else
		{
			ShowAlertDialog( 'Ticketmaster', strError );
		}
	})
	.done( fFunction )
	.always( function()
	{
		$WaitDialog.Dismiss();
	});
}

function SubmitFormAndCallFunction_CustomDialog( strDialogID, strHeader, strWaiting, strError, fFunction )
{
	var $DialogContents = $J( strDialogID );
	var $OriginalParent = $DialogContents.parent();
	var $Dialog = ShowConfirmDialog( strHeader, $DialogContents.show(), 'Submit', 'Cancel' )
	.done( function()
	{
		var $Form = $DialogContents.find( 'form' );
		SubmitFormAndCallFunction_WaitDialog( $Form, strHeader, strWaiting, strError, fFunction );
	}).always( function() {
		$OriginalParent.append( $DialogContents.hide() );
	});

	$Dialog.GetContent().find( 'form input[type="text"], form textarea' ).first().focus();
}

function SubmitFormAndReload_WaitDialog( form, strHeader, strWaiting, strError )
{
	SubmitFormAndCallFunction_WaitDialog( form, strHeader, strWaiting, strError,
		function( data )
		{
			var $Form = $J( form );
			if ( $Form.data( 'next' ) )
				document.location = $Form.data( 'next' );
			else
				location.reload();
		});
}

function SubmitFormAndReload_ConfirmDialog( form, strDialog, strHeader, strWaiting, strError )
{
	var $Dialog = ShowConfirmDialog( strHeader, strDialog, 'Submit', 'Cancel' )
	.done( function()
	{
		SubmitFormAndReload_WaitDialog( form, strHeader, strWaiting, strError );
	});
}

function ShowCustomAlertDialog( strDialogID, strHeader )
{
	var $DialogContents = $J( strDialogID ).clone();
	var $Dialog = ShowAlertDialog( strHeader, $DialogContents.show() );
}

function SubmitFormAndReload_CustomDialog( strDialogID, strHeader, strWaiting, strError )
{

	SubmitFormAndCallFunction_CustomDialog( strDialogID, strHeader, strWaiting, strError, function( data )
	{
		var $Form = $J( strDialogID ).find( 'form' );
		if ( $Form.data( 'next' ) )
			document.location = $Form.data( 'next' );
		else
			location.reload();
	});
}


function TranslateHelpRequest( strHelpRequestReference, strFrom )
{
	$J.ajax({
		type: "POST",
		url: "https://help.steampowered.com/ticketmaster/AjaxTranslateHelpRequest",
		data: { reference_code: strHelpRequestReference, from: strFrom },
		dataType: "json"
	}).done( function( result )
	{
		// If we succeeded then stick the translation in, otherwise give an error
		location.reload();
	}).fail(function( result )
	{
		ShowAlertDialog( 'Failed to translate help request', 'Failed to translate help request', 'OK' );
	});
}

function ShowEditMessageBox( strEditContainerID )
{
	$J( strEditContainerID ).slideDown(); //show the edit message dialog for the appropriate message
	$J( strEditContainerID ).prev( '.ticket_msg_body').slideUp();
}

function CloseEditMessageBox( element )
{
	$J( element ).slideUp();
	$J( element ).prev( '.ticket_msg_body' ).slideDown();
}

function ShowTicketControls()
{
	$J( '.ticket_msg_controls' ).slideDown();
	$J( '#show_ticket_controls' ).slideUp();
}

function SubmitReplyForm( form )
{
	// if ticket is held, want to prompt for changing state
	var $HeldDialog = $J( '#held_ticket_form' );
	var strExtraParams = '';
	if ( $HeldDialog.length > 0 )
	{
		var $DialogContents = $HeldDialog.clone();
		var $Dialog = ShowConfirmDialog( 'Ticketmaster', $DialogContents.show(), 'Submit', 'Cancel' )
		$Dialog.done( function()
		{
			var strSerialized = $DialogContents.first().serialize();
			SubmitReplyForm_Internal( form, strSerialized );
		});

		return;
	}

	SubmitReplyForm_Internal( form, '' );
}

function SubmitReplyForm_Internal( form, strExraParams )
{
	var $Form = $J( form );
	var strReply = ConvertEditableContentToBBCode( $Form.find( 'div[name=reply_body]' )[0] );

	var regexReplacementText = /(?:^| )#[\w\-]+(?: |$)/i;

	if ( regexReplacementText.exec( strReply ) )
	{
		ShowAlertDialog( 'Ticketmaster', 'There is still incomplete replacement text in your reply.  Please remove or correct the replacement text.' );
		return;
	}

		$Form.find( 'button' ).addClass( 'btn_disabled' ).prop( 'disabled', true );

		var strData = $Form.serialize() + "&" + $J.param( { reply_body: strReply } );
	if ( strExraParams )
		strData = strData + "&" + strExraParams;

	$J.ajax({
		type: $Form.attr( 'method' ),
		url: $Form.attr( 'action' ),
		data: strData
	})
	.fail( function( xhr )
	{
		ShowAlertDialog( 'Ticketmaster', 'An error occurred while submitting your response. Please try again.' );
	})
	.done( function( data )
	{
		if ( data.eresult == 1 )
		{
			if ( typeof StopAndClearSaveDraft !== "undefined" )
				StopAndClearSaveDraft( 'reply_text' );

			if ( $Form.data( 'next' ) )
				document.location = $Form.data( 'next' );
			else
				location.reload();
		}
		else if ( data.eresult == 93 )
		{
			ShowConfirmDialog( 'Ticketmaster', 'A new message has been submitted to this help request since you last refreshed this page.  You should refresh your page first before responding.', 'Refresh Help Request', 'Cancel', 'Send My Response Anyways' )
			.done( function( strButton )
			{
				if ( strButton == 'OK' )
				{
					location.reload();
				}
    			else if ( strButton == 'SECONDARY' )
    			{
					$Form.find( 'input[name="refresh_messageid"]' ).remove();
					SubmitReplyForm( form );
    			}
			})
		}
		else if ( data.eresult == 99 )
		{
			ShowAlertDialog( 'Ticketmaster', 'There was an error sending email.' );
		}
		else if ( data.eresult == 8 )
		{
			ShowAlertDialog( 'Ticketmaster', 'There was an error due to an invalid parameter.' );
		}
		else if ( data.eresult == 15 )
		{
			ShowAlertDialog( 'Ticketmaster', 'Access was denied.' );
		}
		else
		{
			ShowAlertDialog( 'Ticketmaster', 'An error occurred while submitting your response. Please try again.' );
		}
	})
	.always( function()
	{
		$Form.find( 'button' ).removeClass( 'btn_disabled' ).prop( 'disabled', false );
	});
}

function SubmitReview( form )
{
	console.log( 'Submit review' );
	var $Form = $J( form );
	var strData = $Form.serialize();

	var elState = $Form.find("input[name='state']:checked");
	if ( !elState.length )
	{
		// No state selected
		ShowAlertDialog( 'Ticketmaster', 'Please choose a review state.' );
	}
	else if ( $Form.find("textarea").val() == '' && elState.val() == 2 )
	{
		// No comment on mishandled ticket
		ShowAlertDialog( 'Ticketmaster', 'Negative reviews require a comment.' );
	}
	else
	{
		$J.ajax({
			type: $Form.attr( 'method' ),
			url: $Form.attr( 'action' ),
			data: strData
		})
			.fail( function( xhr )
			{
				ShowAlertDialog( 'Ticketmaster', 'An error occurred while submitting your response. Please try again.' );
			})
			.done( function( data )
			{
				if ( data.eresult == 1 )
				{
						location.reload();
				}
				else
				{
					ShowAlertDialog( 'Ticketmaster', 'An error occurred while submitting your response. Please try again.' );
				}
			});
	}
}

function ShowAddFeedbackDialog( strAgentName, targettype, targetid, bUpvoted, bUrgent, strComment )
{
	var strHeader = 'Add Feedback';
	var strWaiting = 'Updating Ticket';
	var strError = 'Failed to add feedback';

	var $DialogContents = $J( '#request_addfeedback_dialog' ).clone();
	var $Form = $DialogContents.find( 'form' );
	$Form.find( '.agent_name' ).text( strAgentName );
	$Form.find( 'input[name="targettype"]' ).val(targettype);
	$Form.find( 'input[name="targetid"]' ).val( targetid );
	$Form.find( 'input[name="upvoted"]' ).prop( 'checked', bUpvoted );
	$Form.find( 'textarea[name="comment"]' ).val( strComment );
	$Form.find( 'input[name="urgent"]' ).prop( 'checked', bUrgent );

	var $Dialog = ShowConfirmDialog( strHeader, $DialogContents.show(), 'Submit', 'Cancel' )
		.done( function()
		{
			var $Form = $DialogContents.find( 'form' );

			SubmitFormAndReload_WaitDialog( $Form, strHeader, strWaiting, strError );
		});

	$Dialog.GetContent().find( 'form input[type="text"], form textarea' ).first().focus();
}

function SetFeedback( strHelpRequestReference, targettype, targetid, bUpvoted, strComment )
{
	$J.ajax({
		type: "POST",
		url: "https://help.steampowered.com/ticketmaster/AjaxAddFeedback/",
		data: {
			reference_code: strHelpRequestReference,
			targettype: targettype,
			targetid: targetid,
			upvoted: bUpvoted,
			comment: strComment
		}
	})
		.fail( function( xhr )
		{
			console.log( xhr );
			ShowAlertDialog( 'Ticketmaster', '#Help_AddFeedback_Error' ).done( function() { location.reload(); } );
		})
		.done( function( data )
		{
			location.reload();
		});

}

function ShowRejectFeedbackDialog( strHelpRequestReference, feedbackid, strMessageAgentName, strFeedbackAgentName )
{
	var strHeader = 'Reject Feedback';
	var strWaiting = 'Updating Ticket';
	var strError = 'Failed to reject feedback';
	var strContents = 'Reject feedback from <span class="feedback_agent_name"></span>. Your comment here will be returned to <span class="feedback_agent_name"></span> and their feedback will never be visible to <span class="message_agent_name"></span>. A comment is required.';

	var $DialogContents = $J( '#request_approvefeedback_dialog' ).clone();
	var $Form = $DialogContents.find( 'form' );
	$Form.find( '.ticket_msg_reply_header').html( strContents );
	$Form.find( '.feedback_agent_name' ).text( strFeedbackAgentName );
	$Form.find( '.message_agent_name' ).text( strMessageAgentName );
	$Form.find( 'input[name="desired_state"]' ).val( 2 );
	$Form.find( 'input[name="reference_code"]' ).val( strHelpRequestReference );
	$Form.find( 'input[name="feedbackid"]' ).val( feedbackid );

	var $Dialog = ShowConfirmDialog( strHeader, $DialogContents.show(), 'Submit', 'Cancel' )
		.done( function()
		{
			var $Form = $DialogContents.find( 'form' );

			SubmitFormAndReload_WaitDialog( $Form, strHeader, strWaiting, strError );
		});

	$Dialog.GetContent().find( 'form input[type="text"], form textarea' ).first().focus();
}

function ShowApproveFeedbackForCoachingDialog( strHelpRequestReference, feedbackid, strMessageAgentName, strFeedbackAgentName )
{
	var strHeader = 'Approve for Coaching';
	var strWaiting = 'Updating Ticket';
	var strError = 'An error occurred attempting to approve this feedback. Please try again.';
	var strContents = 'Approve feedback from <span class="feedback_agent_name"></span> for coaching. Your optional comment here will be displayed to <span class="message_agent_name"></span> in a special section on their feedback page and will remain until acknowledged.';

	var $DialogContents = $J( '#request_approvefeedback_dialog' ).clone();
	var $Form = $DialogContents.find( 'form' );
	$Form.find( '.ticket_msg_reply_header').html( strContents );
	$Form.find( '.feedback_agent_name' ).text( strFeedbackAgentName );
	$Form.find( '.message_agent_name' ).text( strMessageAgentName );
	$Form.find( 'input[name="desired_state"]' ).val( 6 );
	$Form.find( 'input[name="reference_code"]' ).val( strHelpRequestReference );
	$Form.find( 'input[name="feedbackid"]' ).val( feedbackid );

	var $Dialog = ShowConfirmDialog( strHeader, $DialogContents.show(), 'Submit', 'Cancel' )
		.done( function()
		{
			var $Form = $DialogContents.find( 'form' );

			SubmitFormAndReload_WaitDialog( $Form, strHeader, strWaiting, strError );
		});

	$Dialog.GetContent().find( 'form input[type="text"], form textarea' ).first().focus();
}

function ApproveFeedback( strHelpRequestReference, feedbackID, eState )
{
	$J.ajax({
		type: "POST",
		url: "https://help.steampowered.com/ticketmaster/AjaxApproveFeedback/",
		data: {
			reference_code: strHelpRequestReference,
			feedbackid: feedbackID,
			desired_state: eState
		}
	})
		.fail( function( xhr )
		{
			console.log( xhr );
			ShowAlertDialog('Ticketmaster', 'An error occurred attempting to approve this feedback. Please try again.' ).done( function() { location.reload(); } );
		})
		.done( function( data )
		{
			location.reload();
		} );
}

function AcknowledgeFeedback( strHelpRequestReference, feedbackID, eCurrentState )
{
	$J.ajax({
		type: "POST",
		url: "https://help.steampowered.com/ticketmaster/AjaxAcknowledgeFeedback/",
		data: {
			reference_code: strHelpRequestReference,
			feedbackid: feedbackID,
			current_state: eCurrentState
		}
	})
		.fail( function( xhr )
		{
			console.log( xhr );
			ShowAlertDialog('Ticketmaster', 'An error occurred attempting to approve this feedback. Please try again.' ).done( function() { location.reload(); } );
		})
		.done( function( data )
		{
			location.reload();
		} );
}

function ShowChangeAppDialog( strAppName, unAppID )
{
    var strHeader = 'Change App';
    var strWaiting = 'Updating Ticket';
    var strError = 'Failed to load app list';

    var $DialogContents = $J( '#request_appid_dialog' ).clone();
    var $Dialog = ShowConfirmDialog( strHeader, $DialogContents.show(), 'Submit', 'Cancel' )
    .done( function()
    {
        var $Form = $DialogContents.find( 'form' );

                unAppID = $Form.find( 'input[name="appid"]' ).val();
        strAppName = $Form.find( 'input[name="app_name"]' ).val();

        if ( unAppID == 0 )
        {
            ShowAlertDialog( strHeader, 'Please select a different app.' ).done( function()
            {
                ShowChangeAppDialog( strAppName, unAppID );
            });

            return;
        }

                SubmitFormAndReload_WaitDialog( $Form, strHeader, strWaiting, strError );
    });

    InitAutoComplete( $Dialog.GetContent().find( 'input[name="app_name"]'), AppNameAutoComplete, AppNameSelected );
    $Dialog.GetContent().find( 'form input[type="text"], form textarea' ).first().focus();
}

function AppNameAutoComplete( $Input, strSearch, fnSetContents )
{
    $J.ajax({
        type: "POST",
        url: "https://help.steampowered.com/ticketmaster/AjaxSearchForAppByName",
        data: { partial: strSearch }
    })
        .fail( function( xhr )
        {
            ShowAlertDialog( 'Ticketmaster', 'Failed to load app list' );
        })
        .done( function( data )
        {
            // build results
            var $Results = $J();
            if ( data.matches )
            {
                for ( var i = 0; i < data.matches.length; i++ )
                {
                    $Results = $Results.add( '<div class="agent_name" data-suggestion="' + data.matches[i].app_name + '" data-appid="' + data.matches[i].appid + '">' + data.matches[i].app_name + '</div>' );
                }
            }

            fnSetContents( $Results );
        });
}

function AppNameSelected( $Input, $Selection )
{
    var unAppID = 0;
    if ( $Selection != null )
        unAppID = $Selection.data( 'appid' );

    $Input.closest( 'form' ).find( "input[name='appid']" ).val( unAppID );
}

function AppNameSelectedForQuickTextEditor( $Input, $Selection )
{
	var unAppID = 0;
	if ( $Selection != null )
		unAppID = $Selection.data('appid');

	$Input.prev( 'input[name="appid[]"]' ).val( unAppID );
}

function ShowAssignDialog( strAgentName, nAgentAccountID, strNote )
{
	var strHeader = 'Change Assignment';
	var strWaiting = 'Updating Ticket';
	var strError = 'Failed to assign ticket. Please try again.';

	var $DialogContents = $J( '#assign_dialog' ).clone();
	var $Dialog = ShowConfirmDialog( strHeader, $DialogContents.show(), 'Submit', 'Cancel' )
	.done( function()
	{
		var $Form = $DialogContents.find( 'form' );

				nAgentAccountID = $Form.find( 'input[name="agent_accountid"]' ).val();
		strAgentName = $Form.find( 'input[name="agent_name"]' ).val();
		strNote = $Form.find( 'textarea[name="note_body"]' ).val();

		if ( nAgentAccountID == 0 )
		{
			ShowAlertDialog( strHeader, 'Please choose a support agent.' ).done( function()
			{
				ShowAssignDialog( strAgentName, nAgentAccountID, strNote );
			});

			return;
		}

				SubmitFormAndReload_WaitDialog( $Form, strHeader, strWaiting, strError );
	});

		var $Contents = $Dialog.GetContent();
	var $Form = $Contents.find( 'form' );
	if ( strAgentName )
		$Form.find( 'input[name="agent_name"]' ).val( strAgentName );

	if ( nAgentAccountID )
		$Form.find( 'input[name="agent_accountid"]' ).val( nAgentAccountID );

	if ( strNote )
		 $Form.find( 'textarea[name="note_body"]' ).val( strNote );


	InitAutoComplete( $Dialog.GetContent().find( 'input[name="agent_name"]'), AgentNameAutoComplete, AgentNameSelected );
	$Dialog.GetContent().find( 'form input[type="text"], form textarea' ).first().focus();
}

function AgentNameAutoComplete( $Input, strSearch, fnSetContents )
{
	$J.ajax({
		type: "POST",
		url: "https://help.steampowered.com/ticketmaster/AjaxSearchForAgentByName",
		data: { partial: strSearch }
	})
	.fail( function( xhr )
	{
		ShowAlertDialog( 'Ticketmaster', 'Failed to load user list' );
	})
	.done( function( data )
	{
		// build results
		var $Results = $J();
		if ( data.matches )
		{
			for ( var i = 0; i < data.matches.length; i++ )
			{
				$Results = $Results.add( '<div class="agent_name" data-suggestion="' + data.matches[i].full_name + '" data-accountid="' + data.matches[i].accountid + '">' + data.matches[i].full_name + '</div>' );
			}
		}

		fnSetContents( $Results );
	});
}

function AgentNameSelected( $Input, $Selection )
{
	var unAccountID = 0;
	if ( $Selection != null )
		unAccountID = $Selection.data( 'accountid' );

	$Input.closest( 'form' ).find( "input[name='agent_accountid']" ).val( unAccountID );
}

function InsertQuickText( elButton, strText, unQuickTextID, bRequiresUpdate )
{
    var fnInsert = function()
    {
		var $Form = $J( elButton ).closest( 'form' );
		var $TextArea = $Form.find( '#reply_text' );

		var $AutoComplete = $TextArea.data( 'textautocomplete' );
		$AutoComplete.InsertTextAndFocus( strText );
		if ( unQuickTextID != -1 )
			$Form.find( 'input[name="quicktext_id"]' ).val( unQuickTextID );
    };

    var fnInsertEnglish = function( cancel )
    {
		// if close button, do nothing.
		if ( !cancel )
			return;

        $J.ajax({
    		type: "GET",
            url: "https://help.steampowered.com/ticketmaster/AjaxGetQuickText/",
            data: "id="+unQuickTextID
    	})
    	.fail( function( xhr )
    	{
    		ShowAlertDialog( "Get Quick Text", "There was an error loading the Quick Text." );
    	})
    	.done( function( data )
    	{
    		InsertQuickText( elButton, data.quicktext.content.content, data.quicktext.quicktext_id, false );
    	});
    }

    if ( bRequiresUpdate )
    {
        var strLink = '<a target="_blank" href="https://help.steampowered.com/ticketmaster/editquicktext?id='+unQuickTextID+'">'+elButton.textContent+'</a>';
        var $Dialog = ShowConfirmDialog( 'Out of date', strLink + ' is out of date.', 'Use it anyway', 'Use English' )
        	.done( fnInsert )
        	.fail( fnInsertEnglish );
    }
    else
    {
        fnInsert();
    }
}

function PerformTicketAction( elSelect )
{
	var $Select = $J( elSelect );
	var strSelected = $Select.val();
	$Select.val( '--' );

	if ( strSelected == 'release' )
	{
		var strHeader = 'Release Ticket';
		var strUpdate = 'Updating Ticket';
		var strFailed = 'Failed to release ticket. Please try again.';
		SubmitFormAndReload_WaitDialog( '#release_form', strHeader, strUpdate, strFailed );
	}
	else if ( strSelected == 'assign' )
	{
		ShowAssignDialog();
	}
	else if ( strSelected == 'close' )
	{
		var strCloseTicket = 'Close Ticket';
		var strCloseConfirm = 'Are you sure you want to close this ticket?';
		var strCloseSendMessage = '';
		if ( $J('[contenteditable]').text() )
		{
			strCloseSendMessage = 'Close and send my response'
		}
		var $Dialog = ShowConfirmDialog( strCloseTicket, strCloseConfirm, strCloseTicket, 'Cancel', strCloseSendMessage )
		.done( function( andSend )
		{
			if ( andSend == 'SECONDARY' )
			{
				SubmitReplyForm_Internal( $J( '.RespondToTicketForm' ), 'close=1' );
			}
			else
			{
				var $Form = $J( '#close_form' );
				var strUpdate = 'Updating Ticket';
				var strFailed = 'Failed to close ticket. Please try again.';
				SubmitFormAndReload_WaitDialog( $Form, strCloseTicket, strUpdate, strFailed );
			}

		});
	}
	else if ( strSelected == 'issuecooldown' )
	{
		var strIssueCooldown = 'Issue Cooldown';
		var strConfirm = 'Are you sure you want to prevent this user submitting new help requests (excluding refunds) for 30 days?';
		var strIssueCooldownAndClose = 'Issue and close ticket';
		var strCloseSendMessage = '';
		if ( $J('[contenteditable]').text() )
		{
			strCloseSendMessage = 'Issue, send response, and close ticket';
		}
		var $Dialog = ShowConfirmDialog( strIssueCooldown, strConfirm, strIssueCooldownAndClose, 'Cancel', strCloseSendMessage )
		.done( function( andSend )
		{
			if ( andSend == 'SECONDARY' )
			{
				SubmitReplyForm_Internal( $J( '.RespondToTicketForm' ), 'issue_cooldown=1&close=1' );
			}
			else
			{
				var $Form = $J( '#close_form' );
				$Form.find( 'input[name="issue_cooldown"]' ).val( "1" );
				var strUpdate = 'Updating Ticket';
				var strFailed = 'Failed to close ticket. Please try again.';
				SubmitFormAndReload_WaitDialog( $Form, strIssueCooldown, strUpdate, strFailed );
			}

		});
	}
	else if ( strSelected == 'markheld' || strSelected == 'removeholdticket' )
	{
		var strHeader = 'Hold Ticket';
		var strUpdate = 'Updating Ticket';
		var strFailed = 'Failed to mark ticket as held. Please try again.';
		if ( $J('[contenteditable]').text() && strSelected == 'markheld' )
		{
			var $Dialog = ShowConfirmDialog( strHeader, 'Hold Ticket?', 'Hold Ticket', 'Cancel', 'Hold and send my response' )
				.done( function( andSend )
				{
					if ( andSend == 'SECONDARY' )
					{
						SubmitFormAndCallFunction_WaitDialog('#togglemarkheld_form', strHeader, strUpdate, strFailed, function (){
							SubmitReplyForm_Internal( $J( '.RespondToTicketForm' ) );
						});
					}
					else
					{
						SubmitFormAndReload_WaitDialog('#togglemarkheld_form', strHeader, strUpdate, strFailed);
					}

				});
		}
		else
		{
			SubmitFormAndReload_WaitDialog('#togglemarkheld_form', strHeader, strUpdate, strFailed);
		}
	}
	else if ( strSelected == 'waitingforuser' || strSelected == 'waitingforagent' )
	{
		// update form
		var $Form = $J( '#changestate_form' );
		$Form.find( 'input[name="new_state"]' ).val( strSelected );

		var strHeader = 'Changing Ticket State';
		var strUpdate = 'Updating Ticket';
		var strFailed = 'Failed to change ticket state. Please try again.';
		SubmitFormAndReload_WaitDialog( '#changestate_form', strHeader, strUpdate, strFailed );
	}
}

function SetSearchHistoryState( $Form, strSearchParams )
{
	var strURL = location.protocol + '//' + location.host + location.pathname + '?' + strSearchParams;
	history.replaceState( {}, "Ticket Search", strURL );
}

function SearchForTickets( elForm, $SearchContents, strSort, nPage )
{
	var $Form = $J( elForm );
	$Form.find( 'button' ).addClass( 'btn_disabled' ).prop( 'disabled', true );

		var rgRawParams = $Form.serializeArray();
	var rgParams = [];
	for ( var i = 0; i < rgRawParams.length; i++ )
	{
						if ( rgRawParams[i].value && (rgRawParams[i].value != 0 || rgRawParams[i].name == 'languages[]' || rgRawParams[i].name == 'escalation_level[]') && rgRawParams[i].name != 'quicktext' )
		{
			rgParams.push( rgRawParams[i] );
		}
	}

	var strSearchParams = $J.param( rgParams ) + "&" + $J.param( { sort: strSort, page: nPage }  );
	SetSearchHistoryState( $Form, strSearchParams );

	var $Throbber = $J( "<div class=\"throbber\">\r\n\t\t\t\t\t<div><\/div>\r\n\t\t\t\t\t<div><\/div>\r\n\t\t\t\t\t<div><\/div>\r\n\t\t\t\t<\/div>" );
	$SearchContents.html( $Throbber );
	$Throbber.addClass( 'loading' );

	$J.ajax({
		type: $Form.attr( 'method' ),
		url: $Form.attr( 'action' ),
		data: strSearchParams,
		dataType: "json"
	})
	.fail( function( xhr )
	{
		$SearchContents.html( '<div class="no_search_results">Search failed</div>' );

		if ( xhr && xhr.responseText )
		{
			var data = V_ParseJSON( xhr.responseText );
			if ( data && data.perf_data )
				$SearchContents.append( data.perf_data );
		}
	})
	.done( function( data )
	{
		$SearchContents.html( data.html );
		if ( data.perf_data )
			$SearchContents.append( data.perf_data );
	})
	.always( function()
	{
		$Form.find( 'button' ).removeClass( 'btn_disabled' ).prop( 'disabled', false );
	});
}

function GenerateQuickTextEditorLink( quicktext )
{
    return $J('<div class="qt_link"> <a href="https://help.steampowered.com/ticketmaster/editquicktext?id='+quicktext.quicktext_id+'">'+quicktext.title+'['+quicktext.button_text+']</a> </div>');
}

function GenerateQuickTextExport( quicktext )
{
	if ( $J( '#exportqt_' + quicktext.quicktext_id ).length )
	{
		return $J(); // already set to export
	}

	return $J('<div class="qt_link"> ' +
				'<a data-quicktextid="' + quicktext.quicktext_id + '"  data-title="' + quicktext.title + '" onclick="AddQuicktextForExport( this )" class="add_export_quicktext">+</a> ' +
				'<a target="_blank" href="https://help.steampowered.com/ticketmaster/editquicktext?id='+quicktext.quicktext_id+'">'+quicktext.title+'['+quicktext.button_text+']</a>' +
			'</div>');
}

function GenerateQuickTextInsertLink( quicktext )
{
    var link = '<div class="qt_link">' +
		' <a onclick="InsertQuickText(this, this.getAttribute(\'data-content\'),'+quicktext.quicktext_id+','+quicktext.requires_update+'); return false;" href="javascript:void(0);">'+quicktext.title+'['+quicktext.button_text+']</a>';
	if ( quicktext.fallback_language )
		link += ' <a onclick="InsertQuickText(this, this.getAttribute(\'data-content\'),'+quicktext.quicktext_id+', false ); return false;" href="javascript:void(0);">('+quicktext.fallback_language+')</a>';
	link += ' </div>';
	link = $J(link);
	if ( quicktext.fallback_language )
		link.find('a:last').attr( 'data-content', quicktext.content.agent_language );
	link.find('a:first').attr( 'data-content', quicktext.content.content );
	link.find('a').attr( 'data-help-tooltip', quicktext.content.agent_language );
	BindHelpTooltip( link.find('a') );
    return link;
}


function TicketDetailsSearchBoxKeyUp( event, strLanguage )
{
	var $Selected = $J( '#search_select > option:selected' );
	if ( $Selected.val() == 0 )
	{
		$J( '#escalation_level').show();
		QuickTextSearchBoxKeyUp( event, GenerateQuickTextInsertLink, strLanguage );
	}
	else
	{
		$J( '#escalation_level').hide();
		SearchBoxKeyUp( event, DoFAQSearch, function( data )
		{
			var link = $J('<div class="qt_link"> <a onclick="InsertQuickText(this, this.getAttribute(\'data-content\'), -1, false); return false;" href="javascript:void(0);">'+data.title+'</a> </div>');
			var url = '[url=https://support.steampowered.com/kb_article.php?ref='+data.ref+']'+data.title+'[/url]';
			link.find('a').attr( 'data-content', url );
			return link;
		},
		strLanguage );
	}
}

function SearchBoxKeyUp( event, searchFunction, funcLinkGenerator, strLanguage )
{
	// clear
	if( $J('#quicktext_search').val().length == 0 )
	{
		g_strRawQuicktextInput = "";
		$J("#qt_search").hide();
		return;
	}

	if ( event != null )
	{
		if ( event.which == 8 )
		{
			g_strRawQuicktextInput = g_strRawQuicktextInput.slice( 0, -1 );
		}
		else if ( event.which >= 32 && event.which < 127 )
		{
			g_strRawQuicktextInput += String.fromCharCode( event.which );
		}
	}

	var time_now_ms = $J.now();
	$J('#quicktext_search').data( 'last-keyup', time_now_ms );

	if ($J('.throbber').length == 0)
	{
		var $Throbber = $J( "<div class=\"throbber\">\r\n\t\t\t\t\t<div><\/div>\r\n\t\t\t\t\t<div><\/div>\r\n\t\t\t\t\t<div><\/div>\r\n\t\t\t\t<\/div>" );
		$J('#request_type_search').html($Throbber);
		$Throbber.addClass('loading');
	}
	$J("#qt_search").show();
	$J("#request_type_search").toggle( true );
	$J("#request_input_search").attr( 'checked', 'checked' );

	if ( event == null || event.which == 13 )
		searchFunction( time_now_ms, funcLinkGenerator, strLanguage );	// ENTER key triggers immediately
	else
		setTimeout( function() { searchFunction(time_now_ms, funcLinkGenerator, strLanguage ); }, 400 );
}

function QuickTextSearchBoxKeyUp( event, funcLinkGenerator, strLanguage )
{
	SearchBoxKeyUp( event, DoSearch, funcLinkGenerator, strLanguage )
}

function DoFAQSearch( last_key_up, funcLinkGenerator, strLanguage )
{
	// clear
	if( $J('#quicktext_search').val().length == 0 )
	{
		$J("#qt_search").hide();
		return;
	}

	if ( last_key_up != $J('#quicktext_search').data( 'last-keyup') )
		return;

	var strSearch = $J('#quicktext_search').val();
	$J.ajax({
		type: "GET",
		dataType: "json",
		url: "https://help.steampowered.com/ticketmaster/AjaxSearchFAQs",
		data: $J.param( {
			search: strSearch,
			language: strLanguage
		} )
	})
	.fail( function()
	{
		if ( strSearch != $J('#quicktext_search').val() )
			return;

		$J('#request_type_search').html( '<div class="qt_link">Search Error</div>' );
	})
	.done( function( data )
	{
		if ( strSearch != $J('#quicktext_search').val() )
			return;

		var result_div = $J('#request_type_search');
		var links = [];
		data.forEach(function ( faq )
		{
			links.push( funcLinkGenerator( faq ) );
		});
		if( data.length == 0 )
		{
			links.push( $J('<div class="' +
				'qt_link">No Quick Texts found</div>') );
		}
		result_div.empty();
		result_div.append( links );
	});
}


function DoSearch( last_key_up, funcLinkGenerator, strLanguage )
{
	$J( '.help_tooltip' ).remove(); // remove any old tooltips.
    // clear
    if( $J('#quicktext_search').val().length == 0 )
    {
        $J("#qt_search").hide();
        return;
    }
    var eEscalationLevel = $J( '#escalation_level > option:selected' ).val();
    if ( last_key_up != $J('#quicktext_search').data( 'last-keyup') )
        return;

	var strSearch = $J('#quicktext_search').val();
    $J.ajax({
        type: "GET",
        url: "https://help.steampowered.com/ticketmaster/AjaxSearchQuicktexts/",
        data: {
            search: strSearch,
            altsearch: g_strRawQuicktextInput,
			escalation_level: eEscalationLevel,
            lang: strLanguage
        }
    })
    .fail( function()
    {
		if ( strSearch != $J('#quicktext_search').val() )
			return;

        $J('#request_type_search').html( '<div class="qt_link">Search Error</div>' );
    })
    .done( function( data )
    {
		if ( strSearch != $J('#quicktext_search').val() )
			return;

        var result_div = $J('#request_type_search');
        var links = new Array();
        data.quicktext.forEach(function ( quicktext )
        {
            links.push( funcLinkGenerator( quicktext ) );
        });
        if( data.quicktext.length == 0 )
        {
            links.push( $J('<div class="qt_link">No Quick Texts found</div>') );
        }
        result_div.empty();
        result_div.append( links );
    });
}

function FindSimilarTickets( strReferenceCode, strTargetElementSelector )
{
	var $Target = $J( strTargetElementSelector );

	$Target.children('.similar_tickets_results').empty();
	$Target.addClass('waiting').show();

	$J.get( 'https://help.steampowered.com/ticketmaster/AjaxFindSimilarTickets/' + strReferenceCode )
	.done( function( data ) {
		$Target.children('.similar_tickets_results').html( data.html );
	}).fail( function() {
		ShowAlertDialog( "Find Similar Tickets", "There was an error loading similar tickets" );
	}).always( function() {
		$Target.removeClass('waiting');
	});
}

function RotateImage( image, direction )
{
    image.data('rotation', (image.data('rotation') + 90 * direction) % 360);
    ApplyImageTransform( image );

    var delta = (image.width() - image.height())/2;
    if (image.data('rotation') % 180 )
    {
        if (delta < 0)
            image.css({'margin-left': -delta});
        else
            image.css({'padding-top': delta});
    }
    else
    {
        image.css({'margin-left': 0});
        image.css({'padding-top': 0});
    }
}

function ZoomImage( image, slider )
{
	var ScaleFactor = slider.value;
	if ( isNaN( ScaleFactor ) )
	{
		ScaleFactor = 100;
	}
	image.data('scale', ScaleFactor );
	ApplyImageTransform( image );
}

function ApplyImageTransform( image )
{
	var Rotation = image.data('rotation');
	if ( isNaN( Rotation ) )
	{
		Rotation = 0;
	}

	var ScaleFactor = image.data( 'scale' )
	if ( isNaN( ScaleFactor ) )
	{
		ScaleFactor = 100;
	}
	image.css({'zoom': ScaleFactor+'%', 'transform': 'rotate(' + Rotation + 'deg)'});
}

function LoadFullQuickTextHistory( button, id, language )
{
    $J.ajax({
        type: "GET",
        url: "https://help.steampowered.com/ticketmaster/AjaxGetQuickTextRevisionHistory/",
        data: "id="+id+"&lang="+language
    })
	.fail( function()
	{
		ShowAlertDialog( "View Quick Text History", "There was an error loading history." );
	})
	.done( function( data )
	{
		$J(button).parent().html(data['html']);

	});
}

function CTextAutoComplete( elTarget, rgPlaceholders, strLanguage, strDeskproLanguage )
{
	if ( strDeskproLanguage == "Portuguese-Brazil" )
		strDeskproLanguage = "Brazilian"; // faqs in deskpro are like this.

	this.m_$Target = $J( elTarget );
	this.m_strLanguage = strLanguage;
	this.m_strDeskproLanguage = strDeskproLanguage;
	this.m_$Popup = null;
	this.m_strLastPopupWord = '';
	this.m_savedSelection = null;

	this.m_rgPlaceholders = rgPlaceholders;
	this.m_rgSortedKeys = Object.keys( this.m_rgPlaceholders );
	this.m_rgSortedKeys.sort();
	this.m_rePlaceholders = new RegExp( this.m_rgSortedKeys.join( '|' ), 'g' );

		if ( this.m_$Target.parent().css( 'position' ) != 'relative' )
		this.m_$Target.wrap( '<div style="position: relative"></div>' );

	var _this = this;
	this.m_$Target.on( 'keydown.autocomplete', function( event ) { _this.OnInputKeyDown( event ); } );
	this.m_$Target.on( 'keyup.autocomplete', function( event ) { _this.OnInputKeyUp( event ); } );
	this.m_$Target.on( 'blur.autocomplete', function( event ) { _this.OnInputBlur( event ); } );
	this.m_$Target.on( 'paste.autocomplete', function( event ) { _this.OnPaste( event ); } );

	// Try to capture selection events - but the user may lift the mouse outside of our area, so we need to listen on the document.
	$J(document).on( 'mouseup.autocomplete', function( event ) { _this.OnMouseUp() } );

		this.m_$Target.on( 'click.links', 'a', function( event )
	{
		event.preventDefault();
		if ( event.ctrlKey )
			window.open( $J( event.target ).prop( 'href' ), '_blank' );
	});
}

CTextAutoComplete.KEY_ENTER = 13;
CTextAutoComplete.KEY_UP = 38;
CTextAutoComplete.KEY_DOWN = 40;
CTextAutoComplete.KEY_TAB = 9;
CTextAutoComplete.KEY_CTRL = 17;

CTextAutoComplete.prototype.ReplacePlaceholders = function( strText )
{
	var _this = this;
	return strText.replace( this.m_rePlaceholders, function( strMatched ){ return _this.m_rgPlaceholders[ strMatched ]; } );
};

CTextAutoComplete.prototype.InsertTextAndFocus = function( strText )
{
	this.RestoreSelection();
	strText = this.ReplacePlaceholders( strText );

	if ( window.getSelection )
	{
		if ( window.getSelection().toString().replace(/\s/g, "") == this.m_$Target.text().replace(/\s/g, "") )
			this.m_$Target.closest( 'form' ).find( 'input[name="quicktext_id"]' ).val( 0 );

		document.execCommand("insertHTML", false, strText);
		this.SaveSelection();
	}
};

CTextAutoComplete.prototype.SaveSelection = function()
{
	if ( window.getSelection )
		this.m_savedSelection = window.getSelection().getRangeAt( 0 );
};

CTextAutoComplete.prototype.RestoreSelection = function()
{
	this.m_$Target.focus();
	if ( this.m_savedSelection != null && window.getSelection )
	{
		var selection = window.getSelection();
		selection.removeAllRanges();
		selection.addRange( this.m_savedSelection );
	}
};

CTextAutoComplete.prototype.GetFAQDictionary = function( hits, rgFAQNames, rgFAQLinks )
{
	for ( var i = 0; i < hits.length; ++i )
	{
		var faq = hits[i];
		rgFAQNames.push( faq.title );
		rgFAQLinks.push( '[url=https://support.steampowered.com/kb_article.php?ref=' + faq.ref +']' + faq.title + '[/url]' );
	}
};

CTextAutoComplete.prototype.FAQSearch = function( strWord )
{
	var _this = this;
	var now = $J.now();
	_this.m_nLastTryShowPopup = now;
	setTimeout( function()
	{
		if (_this.m_nLastTryShowPopup > now || strWord.length == 1 )
		{
			return;
		}
		$J.ajax({
			type: "GET",
			dataType: "json",
			url: "https://help.steampowered.com/ticketmaster/AjaxSearchFAQs",
			data: $J.param( {
				search: strWord.slice(1),
				language: _this.m_strDeskproLanguage
			} )
		})
		.done( function( data )
		{
			var rgFAQNames = [];
			var rgFAQContent = [];
			_this.GetFAQDictionary( data, rgFAQNames, rgFAQContent );
			if ( rgFAQNames.length > 0 )
			{
				_this.SetPopupContents( rgFAQNames, rgFAQContent );
				_this.m_$Target.after( _this.m_$Popup );
			}
		} );
	}, 200);
};

CTextAutoComplete.prototype.QuickTextSearch = function( strWord )
{
	var _this = this;
	var now = $J.now();
	_this.m_nLastTryShowPopup = now;
	setTimeout( function()
	{
		if (_this.m_nLastTryShowPopup > now || strWord.length == 1 )
		{
			return;
		}
			$J.ajax({
			type: "GET",
			url: "https://help.steampowered.com/ticketmaster/AjaxSearchQuicktexts/",
			data: "search="+strWord.slice(1)+'&lang='+_this.m_strLanguage
		})
		.done( function( data )
		{
			var rgQts = [];
			var rgQtsContent = [];
			_this.m_rgQuickTexts = {};
			for ( var i = 0; i < data.quicktext.length; ++i )
			{
				rgQts.push( data.quicktext[i].button_text );
				rgQtsContent.push( _this.ReplacePlaceholders( data.quicktext[i].content.content ) );
			}
			if (rgQts.length > 0)
			{
				_this.SetPopupContents( rgQts, rgQtsContent );
				_this.m_$Target.after( _this.m_$Popup );
			}
		} );
	}, 200);

};

CTextAutoComplete.prototype.TryShowPopup = function()
{
	var wordRange = GetWordRangeAtCaret();
	var strWord = wordRange ? wordRange.range.toString() : '';
	if ( !strWord )
	{
		this.ClosePopup();
		return;
	}

		if ( strWord == this.m_strLastPopupWord )
		return;

		this.ClosePopup();
	this.m_strLastPopupWord = strWord;

		var rgMatches = [];
	var rgMatchesContent = [];
	for ( var i = 0; i < this.m_rgSortedKeys.length; i++ )
	{
		var strKey = this.m_rgSortedKeys[i];
		strKey = strKey.substr(0, strWord.length);
		if (strKey == strWord)
		{
			rgMatches.push(this.m_rgSortedKeys[i]);
			rgMatchesContent.push( this.m_rgPlaceholders[this.m_rgSortedKeys[i]] );
		}
	}

	if ( rgMatches.length == 0 && !strWord.startsWith("~") && !strWord.startsWith("^") )
		return;

			var elWordWrap = document.createElement( 'span' );
	wordRange.range.insertNode( elWordWrap );
	var $WordWrap = $J( elWordWrap );

		var strName = this.m_$Target.data( 'autocomplete-style' );
	if ( !strName )
		strName = 'unknown_autocomplete';

		this.m_$Popup = $J ( '<div class="' + strName + '"></div>' );
	var nLeft = $WordWrap.offset().left - this.m_$Target.parent().offset().left;
	var nTop = $WordWrap.offset().top - this.m_$Target.parent().offset().top;
	nTop += $WordWrap.height();
	this.m_$Popup.css( 'left', nLeft + 'px' );
	this.m_$Popup.css( 'top', nTop + 'px' );
	$WordWrap.remove();

		if ( strWord.startsWith( "~" ) )
	{
		this.QuickTextSearch( strWord );
	}
		else if ( strWord.startsWith( "^" ) )
	{
		this.FAQSearch( strWord );
	}
	else
	{
				this.SetPopupContents( rgMatches, rgMatchesContent );
		this.m_$Target.after( this.m_$Popup );
	}
}

CTextAutoComplete.prototype.SetPopupContents = function( rgMatches, rgMatchesContent )
{
	if ( this.m_$Popup == null )
		return;

	this.m_$Popup.html( '' );
	for ( var i = 0; i < rgMatches.length; i++ )
	{
		var $Suggestion = $J( '<div data-content="' + escape( rgMatchesContent[i] ) + '" data-placeholder="' + rgMatches[i] + '">' + rgMatches[i] + '</div>' );
		if ( i == 0 )
			$Suggestion.addClass( 'focus' );

		this.m_$Popup.append( $Suggestion );
	}

	var _this = this;
	this.m_$Popup.children().on( 'click.autocomplete', function( event )
	{
		_this.RestoreSelection();
		_this.SelectSuggestion( $J( this ) );
	});
}

CTextAutoComplete.prototype.ClosePopup = function()
{
	if ( this.m_$Popup )
	{
		this.m_$Popup.remove();
		this.m_$Popup = null;
	}

	this.m_strLastPopupWord = '';
}

CTextAutoComplete.prototype.SelectSuggestion = function( $Suggestion, bAddTrailingSpace )
{
	if ( $Suggestion.length == 0 )
		return;

	var strPlaceholder = $Suggestion.data( 'placeholder' );

	if ( !strPlaceholder )
		return;

	var strValue = unescape( $Suggestion.data( 'content' ) );
	if ( bAddTrailingSpace )
		strValue += String.fromCharCode( 160 );

	ReplaceWordAtCaret( strValue );
	this.SaveSelection();

	this.ClosePopup();
	this.m_$Target.focus();
}

CTextAutoComplete.prototype.MakeLinksClickable = function( bEnabled )
{
	this.m_$Target.find( 'a' ).prop( 'contenteditable', !bEnabled );
}

CTextAutoComplete.prototype.OnPaste = function( event )
{
		event.preventDefault();
	event = event.originalEvent;

	var strText = '';
	if ( event.clipboardData && event.clipboardData.getData )
	{
		strText = event.clipboardData.getData( 'text/plain' );
	}
	else if ( window.clipboardData && window.clipboardData.getData )
	{
		strText = window.clipboardData.getData( 'Text' );
	}

	var $TmpDiv = $J( '<div>' );
	$TmpDiv.html( strText );
	strText = $TmpDiv[0].innerText;
	strText = strText.replace( /\n/g, '<br>' );

	this.InsertTextAndFocus( strText );
}

CTextAutoComplete.prototype.OnInputBlur = function( event )
{
		setTimeout( $J.proxy( this.ClosePopup, this ), 100 );
	this.MakeLinksClickable( false );
}

CTextAutoComplete.prototype.OnMouseUp = function( event )
{
	var elTarget = this.m_$Target.get( 0 );
	if ( !elTarget || elTarget != document.activeElement )
		return;

	this.SaveSelection();
}

CTextAutoComplete.prototype.OnInputKeyDown = function( event )
{
	if ( event.keyCode == CTextAutoComplete.KEY_CTRL )
		this.MakeLinksClickable( true );

	if ( !this.m_$Popup )
		return;

	var $CurSuggestion = this.m_$Popup.children( '.focus' );
	var $NewSuggestion = $J();

	if ( event.keyCode == CTextAutoComplete.KEY_TAB )
	{
		this.SelectSuggestion( $CurSuggestion, true );
		event.preventDefault();
		return;
	}

	if ( event.keyCode == CTextAutoComplete.KEY_ENTER )
	{
		this.SelectSuggestion( $CurSuggestion );
		event.preventDefault();
		return;
	}

	if ( event.keyCode == CTextAutoComplete.KEY_UP || event.keyCode == CTextAutoComplete.KEY_DOWN )
	{
		if ( event.keyCode == CTextAutoComplete.KEY_UP )
		{
			if ( $CurSuggestion.length )
				$NewSuggestion = $CurSuggestion.prev();
			if ( !$NewSuggestion.length )
				$NewSuggestion = this.m_$Popup.children( 'div:last-child' );
		}
		else
		{
			if ( $CurSuggestion.length )
				$NewSuggestion = $CurSuggestion.next();
			if ( !$NewSuggestion.length )
				$NewSuggestion = this.m_$Popup.children( 'div:first-child' );
		}

		if ( $NewSuggestion.length  )
		{
			$CurSuggestion.removeClass( 'focus' );
			$NewSuggestion.addClass( 'focus' );
			$NewSuggestion.get(0).scrollIntoViewIfNeeded();
		}

				event.preventDefault();
	}
}

CTextAutoComplete.prototype.OnInputKeyUp = function( event )
{
	if ( this.m_$Target.text().length == 0 )
		this.m_$Target.closest( 'form' ).find( 'input[name="quicktext_id"]' ).val( 0 );

	if ( event.keyCode == CTextAutoComplete.KEY_CTRL )
		this.MakeLinksClickable( false );

		this.TryShowPopup();
	this.SaveSelection();
}

function AddNoteFromAjax(data)
{
	var elDiv = $J(data['strHTML']);
	$J('#ticket_msgs').append( elDiv );
	elDiv.hide();
	elDiv.slideDown("fast");
	$J('#note_body').val( '' );
}

function PreviewBBCode( strDialogID )
{
	var strContent = $J( strDialogID ).val() ? $J( strDialogID ).val() : ConvertEditableContentToBBCode( $J( strDialogID )[0] );
	$J.ajax({
		type: "GET",
		url: "https://help.steampowered.com/ticketmaster/AjaxFormatBBCode/",
		data: $J.param({str: strContent})
	})
	.fail( function( xhr )
	{
		ShowAlertDialog( 'Ticketmaster', 'An error occurred while submitting your response. Please try again.' );
	})
	.done( function( data )
	{
		var rgReplacements = {
			'#username': 'usersaccountname',
			'#navlink': 'www.steampowered.com',
			'#gamename': 'Half-Life 2',
			'#gamestorelink': 'store.steampowered.com',
			'#gamesupport' : 'Tech Help Page Link',
			'#ticketnumber' : 'HT-QK5R-B8K6-58K8'
			};
		var elPreview = $J('.bbcode_preview');
		var $AutoComplete = new CTextAutoComplete( elPreview.next('#bbcode_formatted_message'), rgReplacements );
		$J('#bbcode_formatted_message').html( $AutoComplete.ReplacePlaceholders( data['str'] ) );
		elPreview.slideDown();
	});
}

function ToggleSearchResultSelection()
{
	var state = $J( '#select_all_checkbox' ).prop( 'checked' );
	$J( 'input[name="help_requests[]"]' ).each( function() {
		$J( this ).prop( 'checked', state );
	});
}

function DeleteAttachment( strRefCode, strAttachmentID )
{
	var $ConfirmDialog = ShowConfirmDialog( 'Ticketmaster', 'Are you sure you want to delete this attachment?', 'Delete', 'Cancel' )
	.done( function()
	{
		var $WaitDialog = ShowBlockingWaitDialog( 'header', 'waiting' );
		$J.ajax({
			type: "POST",
			url: "https://help.steampowered.com/ticketmaster/AjaxDeleteAttachment",
			data: { reference_code: strRefCode, attachment_id: strAttachmentID }
		})
		.fail( function( xhr )
		{
			ShowAlertDialog( 'Ticketmaster', 'An error occurred trying to handle that request. Please give us a few minutes and try again.' );
		})
		.done( function( data )
		{
			location.reload();
		})
		.always( function()
		{
			$WaitDialog.Dismiss();
		});
	});
}

var CreateTicket = {
	m_nLastKeyPressTimeMS: null,
	m_nAppID:0,
	m_nSteamID:0,
	m_nHelpIssue:0,
	m_nEmailAddress:null,
	m_sContactMethod:'steamid',
	m_nLastFormRequestTimeMS:0,
	Initialize: function( steamID )
	{
		this.m_sContactMethod = 'steamid';
		this.m_nSteamID = steamID;
	},
	ScheduleRequestTicketForm: function()
	{
		$J( '#contact_form' ).fadeOut();
		var time_now_ms = $J.now();
		this.m_nLastFormRequestTimeMS = time_now_ms;
		setTimeout( function() { CreateTicket.RequestTicketForm( time_now_ms ); }, 400 );

	},
	RequestTicketForm: function( time )
	{
		if ( time == this.m_nLastFormRequestTimeMS )
		{
			if ( this.m_nHelpIssue &&
				( ( this.m_sContactMethod == 'email' && this.m_sEmailAddress ) || ( this.m_sContactMethod == 'steamid' && this.m_nSteamID ))
			   )
			{
				var params = { appid: this.m_nAppID, helpissue: this.m_nHelpIssue };
				if ( this.m_sContactMethod == 'email' )
				{
					params.email = this.m_sEmailAddress;
				}
				if ( this.m_sContactMethod == 'steamid' )
				{
					params.steamid = this.m_nSteamID;
				}
				$J.ajax({
                		type: "GET",
                		url: "https://help.steampowered.com/ticketmaster/AjaxGetTicketSubmissionForm/",
                		data: $J.param( params )
                	})
                	.done( function ( data )
                	{
                		$J( '#contact_form' ).html( data.html );
                		$J( '#contact_form' ).fadeIn();
                	} );
			}
		}
	},
	ContactChanged: function( radio )
	{
		var $radio = $J(radio);
		this.m_sContactMethod = $radio.val();
		this.ScheduleRequestTicketForm();
	},
	EmailChanged: function( input )
	{
		this.m_sEmailAddress = $J( input ).val();
		this.m_sContactMethod = 'email';
		this.ScheduleRequestTicketForm();
	},
	SelectHelpIssue: function( select )
	{
		this.m_nHelpIssue = $J( select ).find('option:selected').val();
		this.ScheduleRequestTicketForm();
	},
	AppSearchKeyUp: function( e )
	{
		var time_now_ms = $J.now();
		this.m_nLastKeyPressTimeMS = time_now_ms;
		if ( e.which == 13 )
			CreateTicket.DoAppSearch( time_now_ms );	// ENTER key triggers immediately
		else
			setTimeout( function() { CreateTicket.DoAppSearch( time_now_ms ); }, 400 );
	},
	DoAppSearch: function( time_last_keyup )
	{
		var strSearch = $J( '#help_app_search_input' ).val();
		if ( time_last_keyup == this.m_nLastKeyPressTimeMS && strSearch )
		{
			$J.ajax({
				type: "GET",
				url: "https://help.steampowered.com/ticketmaster/AjaxSearchForAppByName",
				data: { partial: strSearch }
			})
				.fail( function( xhr )
				{
					$J( '#help_search_applist').html( '<div>Failed to load app list</div>' );
				})
				.done( function( data )
				{
					// build results
					var $Results = $J();
					if ( data.matches && data.matches.length )
					{
						for ( var i = 0; i < data.matches.length; i++ )
						{
							$Results = $Results.add( '<div onclick="CreateTicket.SelectApp( this ); return false;" href="javascript:void(0);" class="create_ticket_app_name" data-suggestion="' + data.matches[i].app_name + '" data-appid="' + data.matches[i].appid + '">' + data.matches[i].app_name + ' ('+data.matches[i].appid+')' + '</div>' );
						}
					}
					else
					{
						$Results = $Results.add( '<div>No products found</div>' );
					}
					$J( '#help_search_applist').html( $Results );
				});
		}
	},
	SelectApp: function( element )
	{
		var $element = $J( element );
		this.m_nAppID = $element.data('appid');
		$J( '.create_ticket_app_name' ).hide();
		$J( '#help_app_search_input' ).val( $element.text() );

		this.ScheduleRequestTicketForm();
	},

	UserSearchKeyUp: function( e )
	{
		$J( '#contact_form' ).fadeOut();
		this.m_sContactMethod = 'steamid';
		var time_now_ms = $J.now();
		this.m_nLastKeyPressTimeMS = time_now_ms;
		if ( e.which == 13 )
			CreateTicket.UserSearch( time_now_ms );	// ENTER key triggers immediately
		else
			setTimeout( function() { CreateTicket.UserSearch( time_now_ms ); }, 400 );
	},
	UserSearch: function( time_last_keyup )
	{
		var strSearch = $J( '#help_user_search_input' ).val();
		var _this = this;
		if ( time_last_keyup == this.m_nLastKeyPressTimeMS )
		{
			$J.ajax({
				type: "GET",
				url: "https://help.steampowered.com/ticketmaster/AjaxFindUser",
				data: { user: strSearch }
			})
				.fail( function( xhr )
				{
					ShowAlertDialog( 'Ticketmaster', 'No user exists for this Steam Account' );
				})
				.done( function( data )
				{
					$J( '#help_user > img').attr( 'src', data.img );
					$J( '#help_user > a').attr( 'href', data.url );
					$J( '#help_user > a').text(data.account);
					$J( '#help_user' ).show();
					_this.m_nSteamID = data.steamid;
					_this.ScheduleRequestTicketForm();
				});
		}
	}
}


function InitAutocollapse()
{
	$J('.ticketmaster_autocollapse').each( function() {
		var content = this;
		var $Content = $J(content);
		$Content.wrap( $J('<div/>', {'class': 'game_page_autocollapse_ctn ticketmaster_autocollapse_ctn' } ) );

		var $Container = $Content.parent();

		var $ReadMore = $J('<div/>', {'class': 'game_page_autocollapse_readmore' }).text( '⇓ EXPAND ⇓' );
		var $Fade = $J('<div/>', {'class': 'game_page_autocollapse_fade' } ).append( $ReadMore );
		$Container.append( $Fade );

		var nInterval = 0;
		var nMaxHeight = parseInt( $Content.css('max-height') );
		if ( !nMaxHeight )
			return;

		var bMaxHeightSet = true;

		$Content.on( 'gamepage_autocollapse_expand', function() {
			if ( $Container.hasClass( 'collapsed' ) )
			{
				$Container.removeClass( 'collapsed' );
				$Container.addClass( 'expanded' );

				if ( bMaxHeightSet )
				{
					$Content.animate( {'max-height': content.scrollHeight + 20 + 'px'}, 'fast', null, function() { $Content.css('max-height', 'none' ); } );
				}
				window.clearInterval( nInterval );
			}
		});

		$ReadMore.click( function() { $Content.trigger('gamepage_autocollapse_expand'); } );

		var fnCheckHeight = function ()	{
			if ( content.scrollHeight > nMaxHeight + 60 )
			{
				$Content.css( 'max-height', nMaxHeight + 'px' );
				$Container.addClass( 'collapsed' );
				window.clearInterval( nInterval );
				bMaxHeightSet = true;

				var $Collapse = $J('<div/>', {'class': 'game_page_autocollapse_collapse' } ). text( '⇑ COLLAPSE ⇑' );
				var $CollapseCtn = $J('<div/>', {'class': 'game_page_autocollapse_collapse_ctn' } ).append( $Collapse );
				$Content.append( $CollapseCtn );

				$Content.on( 'gamepage_autocollapse_collapse', function() {
					if ( $Container.hasClass( 'expanded' ) )
					{
						$Content.css( 'max-height', content.scrollHeight + 20 + 'px' );
						$Container.removeClass( 'expanded' );
						$Container.addClass( 'collapsed' );

						if ( bMaxHeightSet )
						{
							$Content.animate( {'max-height': nMaxHeight + 'px'}, 'fast', null, function() { $Content.css('max-height', nMaxHeight+'px' ); } );
						}
						window.clearInterval( nInterval );
					}
				});

				$Collapse.click( function() { $Content.trigger('gamepage_autocollapse_collapse'); } );

			}
			else if ( bMaxHeightSet )
			{
				$Content.css( 'max-height', 'none' );
				bMaxHeightSet = false;
			}
		};

		nInterval = window.setInterval( fnCheckHeight, 250 );
		fnCheckHeight();

	});
}

function ToggleTicketActions()
{
	var $ViewActions = $J( '.ticket_view_actions' );
	if ( $ViewActions.data( 'state' ) == 'shown' )
	{
		$J( '.ticket_msg_action' ).slideUp( 'fast' );
		$ViewActions.data( 'state', 'hidden' );
		$ViewActions.find( 'a' ).text( 'View Ticket Actions ' );
	}
	else
	{
		$J( '.ticket_msg_action' ).slideDown( 'fast' );
		$ViewActions.data( 'state', 'shown' );
		$ViewActions.find( 'a' ).text( 'Hide Ticket Actions ' );
	}
}

function InitTicketNavigators( strCurrentTicket, strTicketAction )
{
	var strNextTicket = NextPrev.GetNextRequest( strCurrentTicket );
	var strPrevTicket = NextPrev.GetPrevRequest( strCurrentTicket );

	if ( !strNextTicket && !strPrevTicket )
	{
		$J( '.ticket_navigator' ).hide();
		return;
	}

	$J( '.ticket_navigator' ).show();

	// set next buttons
	var $NextButtons = $J( '.ticket_navigator .next_ticket' );
	if ( strNextTicket )
	{
		$NextButtons.attr( 'href', 'https://help.steampowered.com/ticketmaster/' + strTicketAction + '/' + strNextTicket );
	}
	else
	{
		$NextButtons.addClass( 'disabled' );
	}

	// set prev buttons
	var $PrevButtons = $J( '.ticket_navigator .prev_ticket' );
	if ( strPrevTicket )
	{
		$PrevButtons.attr( 'href', 'https://help.steampowered.com/ticketmaster/' + strTicketAction + '/' + strPrevTicket );
	}
	else
	{
		$PrevButtons.addClass( 'disabled' );
	}
}

function SetNextTicket( strCurrentTicket )
{
	var strNextTicket = NextPrev.GetNextRequest( strCurrentTicket );
	if ( strNextTicket )
	{
		$J( '.RespondToTicketForm' ).data( 'next', 'https://help.steampowered.com/ticketmaster/ticket/' + strNextTicket );
				$J( '#elevate_dialog' ).find( 'form' ).attr( 'data-next', 'https://help.steampowered.com/ticketmaster/ticket/' + strNextTicket );
	}
}

// next/previous related functions
var NextPrev = {
	s_strKey: 'nextprev_requests',

	GetHelpRequests: function()
	{
		if ( !sessionStorage.getItem( NextPrev.s_strKey ) )
			return [];

		return JSON.parse( sessionStorage.getItem( NextPrev.s_strKey ) );
	},

	SetHelpRequests: function( vecHelpRequests )
	{
		sessionStorage.setItem( NextPrev.s_strKey, JSON.stringify( vecHelpRequests ) );
	},

	ClearHelpRequests: function()
	{
		sessionStorage.removeItem( NextPrev.s_strKey );
	},

	GetNextRequest : function( strTicket )
	{
		var vecRequests = NextPrev.GetHelpRequests();
		for ( var i = 0; i < vecRequests.length; i++ )
		{
			if ( vecRequests[i] != strTicket )
				continue;

			if ( i == vecRequests.length )
				return null;

			return vecRequests[i + 1];
		}

		return null;
	},

	GetPrevRequest: function( strTicket )
	{
		var vecRequests = NextPrev.GetHelpRequests();
		for ( var i = 0; i < vecRequests.length; i++ )
		{
			if ( vecRequests[i] != strTicket )
				continue;

			if ( i == 0 )
				return null;

			return vecRequests[i - 1];
		}

		return null;
	}
};

function WatchHelpRequest( strHelpRequestReference, bEnable )
{
	$J.ajax({
		type: "POST",
		url: "https://help.steampowered.com/ticketmaster/AjaxWatchHelpRequest/",
		data: {
			reference_code: strHelpRequestReference,
			enable: bEnable
		}
		})
	.fail( function( xhr )
	{
		console.log( xhr );
		ShowAlertDialog( 'Ticketmaster', 'An error occurred attempting to watch this ticket. Please try again.' ).done( function() { location.reload(); } );
	})
	.done( function( data )
	{
		location.reload();
	});

}

function MarkHelpRequestAsViewed( strHelpRequestReference )
{
	$J.ajax({
		type: "POST",
		url: "https://help.steampowered.com/ticketmaster/AjaxMarkHelpRequestAsViewed/",
		data: {
			reference_code: strHelpRequestReference
		}
	})
	.fail( function ( xhr )
	{
		console.log( 'AjaxMarkHelpRequestAsViewed failed with ' + xhr );
	} );
}

function ToggleEventLogDetails( strEventID )
{
	var el = $J( '#'+strEventID );
	if ( el.hasClass( 'collapsed' ) )
	{
		$J( '.event_log_detail_body' ).each( function() { $J( this ).addClass( 'collapsed' ); } );
	}
	$J( '#'+strEventID ).toggleClass( 'collapsed' );
}

function MarkAnnouncementRead( ulAnnouncementID )
{
	var strExisting = V_GetCookie( 'steamAgentAnnoucementsRead' );
	var vecExisting = (strExisting) ? strExisting.split(',') : [];

	if ( vecExisting.indexOf( ulAnnouncementID ) < 0 )
		vecExisting.push( ulAnnouncementID );

	vecExisting = vecExisting.slice( -20 );
	console.log( vecExisting );
	V_SetCookie( 'steamAgentAnnoucementsRead', vecExisting.join( ',' ), 30, '/' );
}

function MarkTickerAnnouncementRead( elButton, ulAnnouncementID )
{
	MarkAnnouncementRead( ulAnnouncementID );
	$J( elButton ).closest( '.ticker_announcement' ).remove();
}

function OnAnnouncementPlacementChange( elSelect )
{
	var $Select = $J( elSelect );
	var ePlacement = $Select.val();

	var $Form = $Select.closest( 'form' );
	if ( ePlacement == 2 )
		$Form.find( '.ticket_details_only' ).show();
	else
		$Form.find( '.ticket_details_only' ).hide();
}

function OnClickAnnouncementPlacementSpan( elSpan )
{
	var $Prev = $J( elSpan ).prev();
	$Prev.attr( 'checked', 'checked' ).change();
}

function CheckAllChildCheckboxes( $Parent, bCheck )
{
	$Parent.find( 'input[type="checkbox"]' ).prop( 'checked', bCheck );
	OnRequestTypeFilterDialogChange();
}

function OnRequestTypeFilterDialogChange()
{
	// determine if all checkboxes are checked
	var $Form = $J( '#reqesttype_filter_form' );
	var vecCheckboxes = $Form.find( 'input[type="checkbox"]' );
	var vecChecked = vecCheckboxes.filter( function() { return $J( this ).prop( 'checked' ) } );
	$Form.find( '.all_checked' ).val( vecCheckboxes.length == vecChecked.length ? 1 : 0 );

	// if nothing is checked, hide submit button
	// would like this supported by the modal.. to add later
	if ( vecChecked.length == 0 )
	{
		$Form.closest( '.newmodal_content' ).find( '.btn_green_white_innerfade.btn_medium' ).hide();
	}
	else
	{
		$Form.closest( '.newmodal_content' ).find( '.btn_green_white_innerfade.btn_medium' ).show();
	}
}

function OnLanguageRuleChanged( elSelect, ulTickerCategoryID, eEscalationLevel, eLanguage )
{
	var $Select = $J( elSelect );
	$Select.prop( 'disabled', 'disabled' );

	var eRule = $Select.val();
	$J.ajax({
		type: "POST",
		url: "https://help.steampowered.com/ticketmaster/AjaxSetLanguageRule/",
		data: {
			ticker_category_id: ulTickerCategoryID,
			escalation_level: eEscalationLevel,
			language: eLanguage,
			rule: eRule
		}
	})
	.done( function( data )
	{

	})
	.fail( function ( xhr )
	{
		alert( 'Failed to set langauge rule' );
	})
	.always( function()
	{
		$Select.prop( 'disabled', false );
	});
}

function ShowChangeLanguageDialog( strReferenceCode, eCurrentLanguage, eHelpRequestType, eEscalationLevel )
{
	// create dialog with throbber
	var $DialogContents = $J( '<div class="ticket_language_dialog"></div>' );
	var $Throbber = $J( "<div class=\"throbber\">\r\n\t\t\t\t\t<div><\/div>\r\n\t\t\t\t\t<div><\/div>\r\n\t\t\t\t\t<div><\/div>\r\n\t\t\t\t<\/div>" );
	$DialogContents.html( $Throbber );
	$Throbber.addClass( 'loading' );

	var $Dialog = ShowConfirmDialog( 'Language', $DialogContents, 'Submit', 'Cancel' )
	.done( function()
	{
		var $Form = $DialogContents.find( 'form' );
		SubmitFormAndReload_WaitDialog( $Form, 'Language', 'Updating Ticket', 'Failed to update ticket. Please try again.' );
	});

	// hide the submit button until loaded
	$Dialog.GetContent().find( '.btn_green_white_innerfade.btn_medium' ).hide();

	// grab contents from backend. This dialog makes backend requests for each ticket type, so just grab the HTML when needed
	$J.ajax({
		type: "GET",
		url: "https://help.steampowered.com/ticketmaster/AjaxSetTicketLanguageDialog/",
		data:
		{
			reference_code: strReferenceCode,
			current_language: eCurrentLanguage,
			help_request_type: eHelpRequestType,
			escalation_level: eEscalationLevel
		}
	})
	.done( function( data )
	{
		$DialogContents.html( data.html );
		$Dialog.GetContent().find( '.btn_green_white_innerfade.btn_medium' ).show();
	})
	.fail( function ( xhr )
	{
		$DialogContents.text( 'Failed to load' );
	});
}

function UpdateAccountRecoveryQuickText( strFormID )
{
	var names = [];
	var $form = $J( strFormID );
	$form.find('input[type=checkbox]:checked').each( function( idx, element ){
		names.push( element.getAttribute('name') );
	});

	var purpose = null;
	if ( names.indexOf( 'reset_password') > -1 && names.indexOf( 'change_email') > -1 )
	{
		purpose = 'emailandpassword';
	}
	if ( names.indexOf( 'reset_password') > -1 && names.indexOf( 'change_email') == -1 )
	{
		purpose = 'passwordonly';
	}
	if ( names.indexOf( 'reset_password') == -1 && names.indexOf( 'change_email') == -1 && names.indexOf( 'remove_account_security' ) > -1 )
	{
		purpose = 'security';
	}

	$J( '.recovery_quicktext').hide();
	$J( '#recovery_quicktext_'+purpose ).show();
	$form.attr( 'data-quicktext', $J( '#recovery_quicktext_'+purpose ).data( 'content' ) );
	$form.attr( 'data-quicktextid', $J( '#recovery_quicktext_'+purpose ).data( 'quicktextid' ) );
}

function SubmitFormAndPopulateQuickTextEntryBox( strDialogID, strHeader, strWaiting, strError, strSteamID, bOpenSuportTool )
{
	var _strDialogID = strDialogID;
	SubmitFormAndCallFunction_CustomDialog( strDialogID, strHeader, strWaiting, strError, function (data)
	{
		var content = $J( _strDialogID ).attr( 'data-quicktext' );
		var id = $J( _strDialogID ).attr( 'data-quicktextid' );

		if ( content )
			InsertQuickText( '#ticket_reply_button', content, id, false );

		var bCanceledRefunds = $J( _strDialogID ).find( 'input[name="cancel_pending_refunds"]' ).prop("checked");
		if ( bCanceledRefunds )
		{
			var $TextArea = $J( '#reply_text' );

			var $AutoComplete = $TextArea.data( 'textautocomplete' );
			$AutoComplete.InsertTextAndFocus( '#cancelrefunds' );
		}


		// refresh the account page
		if ( bOpenSuportTool )
			window.open( 'https://steamsupport.valvesoftware.com/account_support.php?steamID='+strSteamID, 'TicketMaster-SupportToolWindow' );
	});
}

function AddQuicktextForExport( elQuicktext )
{
	var $Quicktext = $J( elQuicktext );
	var $ExportForm = $J( '#export_qt_form' );

	var unQuickTextID = $Quicktext.data( 'quicktextid' );
	var strQuickTextTitle = $Quicktext.data( 'title' );

	if ( $J( '#exportqt_' + unQuickTextID ).length )
	{
		return; // already appended
	}

	$ExportForm.prepend( '<div><input id="exportqt_' + unQuickTextID + '" type="hidden" name="quicktexts[]" value="' + unQuickTextID + '">' +
						'<a target="_blank" href="https://help.steampowered.com/ticketmaster/editquicktext?id='+ unQuickTextID +'">'+strQuickTextTitle+'</a> ' +
						'<a onclick="$J( this ).parent().remove()" class="remove_export_quicktext">X</a></div>' );
	$Quicktext.parent().remove();
}

function DeleteQuickTextExport( unExportID )
{
	$J.ajax({
		type: "GET",
		url: "https://help.steampowered.com/ticketmaster/AjaxDeleteQuickTextExport/",
		data:
		{
			exportid: unExportID
		}
	}).done( function( data )
	{
		location.reload();
	})
	.fail( function ( xhr )
	{
		ShowAlertDialog( 'Ticketmaster', 'An error occurred while submitting your response. Please try again.' );
	});
}

function AcceptOrRejectEdit( bAcceptEdit, unPendingEditID )
{
	if ( !bAcceptEdit )
	{
		var $DialogContents = $J( '#reject_pending_edit' ).clone();

		var $Dialog = ShowConfirmDialog( 'Provide Feedback for rejected edit', $DialogContents.show(), 'Submit', 'Cancel' )
			.done( function()
			{
				var $TextArea = $DialogContents.find( '#feedback' );

								var strFeedback = $TextArea.val();

				$J.ajax({
					type: "GET",
					url: "https://help.steampowered.com/ticketmaster/AjaxApproveRejectQuickTextEdit/",
					data: {
						approved: bAcceptEdit,
						editid: unPendingEditID,
						feedback: strFeedback
					}
				}).done(function (data) {
					location.reload();
				})
					.fail(function (xhr) {
						ShowAlertDialog('Ticketmaster', 'An error occurred while submitting your response. Please try again.');
				});
			});
	}
	else
	{
		$J.ajax({
			type: "GET",
			url: "https://help.steampowered.com/ticketmaster/AjaxApproveRejectQuickTextEdit/",
			data: {
				approved: bAcceptEdit,
				editid: unPendingEditID
			}
		}).done(function (data) {
			location.reload();
		})
			.fail(function (xhr) {
				ShowAlertDialog('Ticketmaster', 'An error occurred while submitting your response. Please try again.');
			});
	}
}

function RequestLanguageRuleChanges()
{
	$J( '.language_rule_changes_show' ).remove();
	$J( '.language_rules_changes_content' ).show();

	$J.ajax(
	{
		type: "GET",
		url: "https://help.steampowered.com/ticketmaster/AjaxGetLanguageRuleChanges/"
	})
	.done(function (data)
	{
		$J( '.language_rules_change_response' ).html( data.html );
	})
	.fail(function (xhr)
	{
		$J( '.language_rules_change_response' ).html( 'Error' );
	});
}



