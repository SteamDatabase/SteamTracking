

/* returns a jquery deferred object, .done() means an invite was sent (or attempted), .fail() indicates they dismissed the modal */
function PresentGroupInviteOptions( rgFriendsToInvite )
{
	// this deferred will succeed if an invite is succesfully sent, fail if the user dismisses the modal or the invite AJAX fails
	var deferred = new jQuery.Deferred();

	var Modal = ShowDialog( 'Invite to join your group', '<div class="group_invite_throbber"><img src="http://cdn.steamcommunity.com/public/images/login/throbber.gif"></div>' );
	var $ListElement = $J('<div/>', {'class': 'newmodal_content_innerbg'} );

	var bBulkFriendInvite = false;
	var steamIDInvitee = g_rgProfileData['steamid'];
	var strProfileURL = g_rgProfileData['url'];

	// see if this is a request to bulk invite a group of friends
	if ( rgFriendsToInvite && rgFriendsToInvite instanceof Array )
	{
		if ( rgFriendsToInvite.length == 1 )
		{
			steamIDInvitee = rgFriendsToInvite[0];
			strProfileURL = 'http://steamcommunity.com/profiles/' + steamIDInvitee + '/';
		}
		else
		{
			// true bulk invite
			steamIDInvitee = rgFriendsToInvite;
			bBulkFriendInvite = true;
		}
	}

	// if the modal is dismissed , we'll cancel the deferred object.  We capture this in a closure so that we can dismiss the modal without affecting
	//	the deferred object if the user actually picks something (in which case the deferred object will be the success of the AJAX invite action)
	var fnOnModalDismiss = function() { deferred.reject() };

	$J.get( strProfileURL + 'ajaxgroupinvite?new_profile=1' + ( bBulkFriendInvite ? '&bulk=1' : '' ), function( html ) {
		Modal.GetContent().find( '.newmodal_content').html('');	// erase the throbber
		Modal.GetContent().find( '.newmodal_content').append( $ListElement );
		$ListElement.html( html );
		Modal.AdjustSizing();
		$ListElement.children( '.group_list_results' ).children().each( function () {
			var groupid = this.getAttribute( 'data-groupid' );
			if ( groupid )
			{
				$J(this).click( function() {
					fnOnModalDismiss = function() {;};	// don't resolve the deferred on modal dismiss anymore, user has picked something
					InviteUserToGroup( Modal, groupid, steamIDInvitee)
					.done( function() { deferred.resolve(); } )
					.fail( function() { deferred.reject(); } );
				} );
			}
		});
	});

	Modal.done( function() {fnOnModalDismiss();} );

	return deferred.promise();
}

function InviteUserToGroup( Modal, groupID, steamIDInvitee )
{
	var params = {
		json: 1,
		type: 'groupInvite',
		group: groupID,
		sessionID: g_sessionID
	};

	if ( steamIDInvitee instanceof Array )
		params.invitee_list = V_ToJSON( steamIDInvitee );
	else
		params.invitee = steamIDInvitee;

	return $J.ajax( { url: 'http://steamcommunity.com/actions/GroupInvite',
		data: params,
		type: 'POST'
	} ).done( function( data ) {
		Modal && Modal.Dismiss();
		var strMessage = 'Invitation Sent!';
		if ( data.duplicate )
		{
			strMessage += '<br>#Profile_SomeInvitesDupes';
		}
		ShowAlertDialog( 'Invite to join your group', strMessage );

	}).fail( function( data ) {
		Modal && Modal.Dismiss();
		ShowAlertDialog( '', data.results ? data.results : '#Error_ErrorProcessing' );
	});
}

function RemoveFriend()
{
	var steamid = g_rgProfileData['steamid'];
	var strPersonaName = g_rgProfileData['personaname'];

	ShowConfirmDialog( 'Remove friend',
		'Are you sure you want to remove %s from your friend list?'.replace( /%s/, strPersonaName ),
		'Remove friend'
	).done( function() {
		$J.post(
			'http://steamcommunity.com/actions/RemoveFriendAjax',
			{sessionID: g_sessionID, steamid: steamid }
		).done( function() {
			ShowAlertDialog( 'Remove friend',
				'#Profile_Actions_Unfriend_Succeeded'.replace( /%s/, strPersonaName )
			).done( function() {
				// reload the page when they click OK, so we update friend state
				window.location.reload();
			} );
		} ).fail( function() {
			ShowAlertDialog( 'Remove friend',
				'#Error_ErrorProcessing'
			);
		} );
	} );
}

function AddFriend( bRespondingToInvite )
{
	var steamid = g_rgProfileData['steamid'];
	var strPersonaName = g_rgProfileData['personaname'];

	$J.post(
		'http://steamcommunity.com/actions/AddFriendAjax',
		{sessionID: g_sessionID, steamid: steamid }
	).done( function() {
		if ( !bRespondingToInvite )
		{
			ShowAlertDialog( 'Add Friend',
				'Friend invite sent.'
			);
		}
		else
		{
			ShowAlertDialog( 'Accept Friend Request',
				'Friend request accepted'
			).done( function() { window.location.reload(); } );
		}
	} ).fail( function() {
		ShowAlertDialog( 'Add Friend',
			'Error adding friend. Please try again.'
		);
	} );
}

function ConfirmBlock()
{
	var steamid = g_rgProfileData['steamid'];
	var strPersonaName = g_rgProfileData['personaname'];

	ShowConfirmDialog( 'Block all communication',
		'#Profile_AboutToBlock'.replace( /%s/, strPersonaName ),
		'#Profile_YesBlock'
	).done( function() {
			$J.post(
				'http://steamcommunity.com/actions/BlockUserAjax',
				{sessionID: g_sessionID, steamid: steamid }
			).done( function() {
				ShowAlertDialog( 'Block all communication',
					'You have blocked all communications with this player.'
				);
			} ).fail( function() {
				ShowAlertDialog( 'Block all communication',
					'#Error_ErrorProcessing'
				);
			} );
		} );
}

function InitProfileSummary( strSummary )
{
	var $Summary = $J( '.profile_summary' );
	var $SummaryFooter = $J( '.profile_summary_footer' );

	if ( $Summary[0].scrollHeight <= 64 )
	{
		$Summary.css( 'height', 64 );
		$SummaryFooter.hide();
	}
	else
	{
		$SummaryFooter.find( 'span' ).click( function() {
			var Modal = ShowDialog( 'Info', strSummary );
			window.setTimeout( function() { Modal.AdjustSizing(); }, 1 );
		} );
	}

}

function ShowFriendsInCommon( unAccountIDTarget )
{
	ShowPlayerList( 'Friends in Common', 'friendsincommon', unAccountIDTarget );
}

function ShowFriendsInGroup( unClanIDTarget )
{
	ShowPlayerList( '#Group_FriendsInCommonList', 'friendsingroup', unClanIDTarget );
}

function ShowPlayerList( title, type, unAccountIDTarget, rgAccountIDs )
{
	var Modal = ShowAlertDialog( title, '<div class="group_invite_throbber"><img src="http://cdn.steamcommunity.com/public/images/login/throbber.gif"></div>' );
	var $ListElement = $J('<div/>', {'class': 'player_list_ctn'} );
	var $Buttons = Modal.GetContent().find('.newmodal_buttons').detach();

	Modal.GetContent().css( 'min-width', 268 );

	var rgParams = {};
	if ( type )
		rgParams['type'] = type;
	if ( unAccountIDTarget )
		rgParams['target'] = unAccountIDTarget;
	if ( rgAccountIDs )
		rgParams['accountids'] = rgAccountIDs.join( ',' );

	$J.get( 'http://steamcommunity.com/actions/PlayerList/', rgParams, function( html ) {

		$ListElement.html( html );

		var $Content = Modal.GetContent().find( '.newmodal_content');
		$Content.html(''); // erase the throbber
		$Content.append( $ListElement );
		$Content.append( $Buttons );

		Modal.AdjustSizing();
		$ListElement.append();
	});
}

function ToggleManageFriends()
{
	if ( $J('#manage_friends_actions_ctn').is( ':hidden' ) )
	{
		$J('#manage_friends_btn').find( '.btn_details_arrow').removeClass( 'down').addClass( 'up' );
		$J('#manage_friends_actions_ctn').slideDown( 'fast' );
		$J('div.manage_friend_checkbox').show();
	}
	else
	{
		$J('#manage_friends_btn').find( '.btn_details_arrow').removeClass( 'up').addClass( 'down' );
		$J('#manage_friends_actions_ctn').slideUp( 'fast' );
		$J('div.manage_friend_checkbox').hide();
	}
}

function ManageFriendsInviteToGroup( $Form, groupid )
{
	$Form.find('input[type="checkbox"]')
	var rgFriendSteamIDs = [];
	$Form.find( 'input[type=checkbox]' ).each( function() {
		if ( this.checked )
			rgFriendSteamIDs.push( $J(this).attr( 'data-steamid' ) );
	} );
	if ( rgFriendSteamIDs.length > 0 )
	{
		if ( groupid )
		{
			// specific group
			InviteUserToGroup( null /* no modal window */, groupid, rgFriendSteamIDs ).done( function() {
				$Form.find('input[type=checkbox]').prop( 'checked', false );
			});
		}
		else
		{
			// ask the user which group to invite to
			PresentGroupInviteOptions( rgFriendSteamIDs).done( function() {
				$Form.find('input[type=checkbox]').prop( 'checked', false );
			});
		}
	}
	else
	{
		ShowAlertDialog( 'Invite to join your group', '#BulkActions_NoFriendsSelected' );
	}
}

function ManageFriendsExecuteBulkAction( $Form, strActionName )
{
	if ( $Form.find('input[type=checkbox]:checked').length == 0 )
	{
		ShowAlertDialog( '', '#BulkActions_NoFriendsSelected' );
		return;
	}

	$Form.find('input[name=action]').val( strActionName );
	$Form.submit();
}

function ManageFriendsConfirmBulkAction( $Form, strActionName, strTitle, strSingluarDescription, strPluralDescription )
{
	var cFriendsSelected = $Form.find('input[type=checkbox]:checked').length;
	if ( cFriendsSelected == 0 )
	{
		ShowAlertDialog( strTitle, '#BulkActions_NoFriendsSelected' );
		return;
	}

	var strDescription = strSingluarDescription;
	if ( cFriendsSelected != 1 )
		strDescription = strPluralDescription.replace( /%s/, cFriendsSelected );

	ShowConfirmDialog( strTitle, strDescription).done( function() {
		ManageFriendsExecuteBulkAction( $Form, strActionName );
	});
}

function ManageFriendsBlock( $Form )
{
	ManageFriendsConfirmBulkAction( $Form, 'ignore', 'Block',
		'#BulkActions_Block_ConfirmSingular' + ' ' + '#BulkActions_BlockMsgSingular',
		'#BulkActions_Block_ConfirmPlural' + ' ' + '#BulkActions_BlockMsgPlural');
}

function ManageFriendsRemove( $Form )
{
	ManageFriendsConfirmBulkAction( $Form, 'remove', 'Remove Friend',
		'#BulkActions_Remove_ConfirmSingular' + ' ' + '#BulkActions_RemoveMsgSingular',
		'#BulkActions_Remove_ConfirmPlural' + ' ' + '#BulkActions_RemoveMsgPlural');
}




var AliasesLoaded = false;
function ShowAliasPopup(e)
{
	ShowMenu( e, 'NamePopup', 'left' );

	if( AliasesLoaded )
		return true;

	var aliasContainer = $( 'NamePopupAliases' );

	var throbber = document.createElement( 'img' );
	throbber.src = 'http://cdn.steamcommunity.com/public/images/login/throbber.gif';
	aliasContainer.appendChild( throbber );

	new Ajax.Request( g_rgProfileData['url'] + 'ajaxaliases/', {
		method: 'post',
		parameters: { },
		onSuccess: function( transport ) {

			var Aliases = transport.responseJSON;

			if( !aliasContainer )
				return;

			aliasContainer.update('');

			if( !Aliases || Aliases.length == 0 )
				Aliases.push( {newname: "This user has no known aliases"} );

			for( var x=0; x<Aliases.length; x++ )
			{
				var c = Aliases[x];

				var curSpan = document.createElement( 'p' );
				var curATN = document.createTextNode( c['newname'] );
				curSpan.appendChild( curATN );
				aliasContainer.appendChild( curSpan );
			}

			AliasesLoaded = true;
		},
		onFailure: function( transport ) { alert( 'Please try again later' ); }
	} );
}


