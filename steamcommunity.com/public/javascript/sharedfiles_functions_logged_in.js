
"use strict";

// I know what you're thinking. No, it won't work.
function WorkshopSetAccepted(item_id)
{
	if(!confirm("Are you sure you want to promote this item to Accepted? This is difficult to undo and should only be done" +
		"if you are REALLY REALLY sure you want to do this."))
		return;

	$J.post( 'https://steamcommunity.com/sharedfiles/setaccepted', { id: item_id, sessionid: g_sessionID } )
	.done( function( json ) {
		switch ( json.success )
		{
			case 1:
				window.location.reload();
				break;
			default:
				ShowAlertDialog( 'Error', json.error );
		}
	} );
}

// Still won't work.
function WorkshopSetPending(item_id)
{
	if(!confirm("Are you sure you want to promote this item to Pending? This is difficult to undo and should only be done" +
		"if you are REALLY REALLY sure you want to do this."))
		return;

	var options = {
		method: 'post',
		postBody: 'id=' + item_id + '&sessionid=' + g_sessionID,
		onComplete: (function(item_id){
			return function(transport)
			{
				window.location.reload();
			}
		}(item_id))
	};
	new Ajax.Request(
		'https://steamcommunity.com/sharedfiles/setpending',
		options
	);
}

function CheckVoteResults( transport )
{
	var json = transport.responseText.evalJSON();
	return CheckVoteResultsJSON( json );
}

function CheckVoteResultsJSON( json )
{
	switch ( json['success'] )
	{
		case 16:
			ShowAlertDialog( 'Error', 'There was a problem submitting your request to our servers. Please try again.' );
			return false;
		case 112:
			ShowAlertDialog( 'Error', 'Your account does not meet the requirements to use this feature. <a class="whiteLink" href="https://help.steampowered.com/en/wizard/HelpWithLimitedAccount" target="_blank" rel="">Visit Steam Support</a> for more information.' );
			return false;
		case 21:
			ShowAlertDialog( 'Error', 'You must be logged in to perform that action.' );
			return false;
		case 15:
			ShowAlertDialog( 'Error', 'Your account does not have sufficient privileges to perform this action. Please make sure that you own this game and that your account is in good standing.' );
			return false;
		case 17:
			ShowAlertDialog( 'Error', 'You cannot vote on this item because of an active game ban or VAC ban on your account.' );
			return false;
		case 24:
			ShowAlertDialog( 'Error', 'You must <a href="https://store.steampowered.com/twofactor/manage" target="_blank" rel="">enable Steam Guard</a> before you can vote.' );
			return false;
		case 20:
			ShowAlertDialog( 'Error', 'Voting on this item has ended. ' );
			return false;
		case 44:
			ShowAlertDialog( 'Error', 'Due to a recent password or email change on your account, you will not be able to vote on content. Usually this restriction will expire in 5 days, but can last up to 30 days if the account has been inactive recently.' );
			return false;
		case 41:
			ShowAlertDialog( 'Error', 'Your account recently upvoted an item that was banned for violating Steam\'s Terms of Service. Because of this, you\'ll be temporarily unable to vote on some user-generated content.' );
			return false;
		case 1:
			return true;
		default:
			ShowAlertDialog( 'Error', 'There was a problem submitting your request.' );
			return false;
	}
}

// Find a button for a given item_id, or use a fallback.
// This can still return an empty result if neither exist.
function FindButton( item_id, prefix, fallback, bUseFallback = true )
{
    const button = $(prefix + item_id);

    if (button == null && bUseFallback)
    {
        return $(fallback);
    }

    return button;
}

// Locate our various buttons, so we don't need to care if we're on
// a page with one item, or many.
// TODO: All this functionality should be in a class, and lazily evaluated.

function FindVoteButtons(item_id, bUseFallback = true)
{
	return {
        voteUp:    FindButton( item_id, 'vote_up_',     'VoteUpBtn'  ,      bUseFallback ),
        voteDown:  FindButton( item_id, 'vote_down_',   'VoteDownBtn',      bUseFallback ),
        favorite:  FindButton( item_id, 'favorite_',    'FavoriteItemBtn',  bUseFallback ),
        wait:      FindButton( item_id, 'action_wait_', 'action_wait',      bUseFallback ),
        subscribe: FindButton( item_id, 'subscribed_',  'SubscribeItemBtn', bUseFallback )
    };
}

// Sets or unsets the 'toggled' class on the given element.
// Returns the *new* item state.
function ToggleElement( element )
{
    if (element.hasClassName('toggled')) {
        element.removeClassName('toggled');
        return false;
    }
    else
    {
        element.addClassName('toggled');
        return true;
    }
}

function ToggleChildItemVoteBtns( transport, bVotedUp )
{
	const json = transport.responseText.evalJSON();
	if ( json['items'] )
	{
		for ( let i = 0; i < json['items'].length; ++i )
		{
            const id = json['items'][i];

            const buttons  = FindVoteButtons(id, false);
            const voteUp   = buttons.voteUp;
            const voteDown = buttons.voteDown;

            if ( voteUp && voteDown )
            {
                (bVotedUp ? voteUp   : voteDown).addClassName( 'btn_active');
                (bVotedUp ? voteDown : voteUp).removeClassName('btn_active');
			}
		}
	}
}

function VoteUp(item_id)
{
	const buttons = FindVoteButtons(item_id);

	if ( ! buttons.voteUp.hasClassName( 'toggled' ) )
	{
		buttons.wait.show();
		var options = {
			method: 'post',
			postBody: 'id=' + item_id + '&sessionid=' + g_sessionID,
			onSuccess: (function(item_id){
				return function(transport)
				{
					buttons.wait.hide();

					if ( !CheckVoteResults( transport ) )
						return;

					ToggleChildItemVoteBtns( transport, true );

					var votesUpCount = $('VotesUpCount');
					if ( votesUpCount )
					{
						UpdateFormattedNumber( votesUpCount, 1 );
						$('VotesUpCountContainer').show();
					}

					buttons.voteUp.addClassName('toggled');
					buttons.voteDown.removeClassName('toggled');

					var voteLaterBtn = $('VoteLaterBtn');
					if ( voteLaterBtn )
					{
						voteLaterBtn.hide();
					}

					var blurb = $('rated_blurb');
					if( blurb != null )
						blurb.show();

					var next = $('voteNext');
					if( next != null )
						next.show();
				}
			}(item_id))
		};
		new Ajax.Request(
			'https://steamcommunity.com/sharedfiles/voteup',
			options
		);
	}
	return false;
}

function VoteDown(item_id)
{
	const buttons = FindVoteButtons(item_id);

	if ( ! buttons.voteDown.hasClassName( "toggled" ) )
	{
		var blurb = $('rated_blurb');
		if( blurb != null )
			blurb.hide();

        buttons.wait.show();

		var options = {
			method: 'post',
			postBody: 'id=' + item_id + '&sessionid=' + g_sessionID,
			onSuccess: (function(item_id){
				return function(transport)
				{
					buttons.wait.hide();

					if ( !CheckVoteResults( transport ) )
						return;

					ToggleChildItemVoteBtns( transport, false );

					var votesUpCount = $('VotesUpCount');
					if ( votesUpCount && buttons.voteUp.hasClassName( 'toggled' ) )
					{
						UpdateFormattedNumber( votesUpCount, -1 );
						if ( parseInt( votesUpCount.innerHTML ) == 0 )
						{
							$('VotesUpCountContainer').hide();
						}
					}

					buttons.voteUp.removeClassName('toggled');
					buttons.voteDown.addClassName('toggled');

					var voteLaterBtn = $('VoteLaterBtn');
					if ( voteLaterBtn )
					{
						voteLaterBtn.hide();
					}

					var next = $('voteNext');
					if( next != null )
						next.show();
				}
			}(item_id))
		};
		new Ajax.Request(
			'https://steamcommunity.com/sharedfiles/votedown',
			options
		);
	}

	return false;
}

function PublishedFileAward( id, fileType, currentSelection )
{
	function callbackFunc( id, award )
	{
		var rewardsCtn = $J.find( ".review_award_ctn" );
		if ( rewardsCtn.length != 0 )
		{
			rewardsCtn = $J( rewardsCtn[0] );
			var bFoundExisting = false;
			var rewards = rewardsCtn.find( ".review_award" );
			for ( var j = 0; j < rewards.length; ++j )
			{
				var reward = $J( rewards[j] );
				if ( reward.data( "reaction" ) == award )
				{
					bFoundExisting = true;

					var count = parseInt( reward.data( "reactioncount" ) );
					var countElem = reward.find( ".review_award_count" );
					countElem.text( count + 1 );
					countElem.removeClass( "hidden" );

					reward.data( "reactioncount", count + 1 );
					break;
				}
			}

			if ( !bFoundExisting )
			{
				var reward = $J( "<span>", { class: "review_award" } );
				var img = $J( "<img>", { class: "review_award_icon tooltip", src: "https://store.fastly.steamstatic.com/public/images/loyalty/reactions/still/" + award + ".png" } );
				reward.append( img );

				var countElem = $J( "<span>", { class: "review_award_count hidden", text: "1" } );
				reward.append( countElem );
				reward.data( "reaction", award );
				reward.data( "reactioncount", 1 );

				let moreBtn = rewardsCtn.find( ".review_award.more_btn" );
				if ( moreBtn?.length )
				{
					moreBtn.before( reward );
				}
				else
				{
					rewardsCtn.append( reward );
				}
			}
		}
	};

	fnLoyalty_ShowAwardModal( id, 2, callbackFunc, fileType, currentSelection );
}

function ToggleItemState(item_id, app_id, buttonType, activate, deactivate) {
    const buttons = FindVoteButtons(item_id);

    buttons.wait.show();

    const clickedButton = buttons[buttonType];

    const options = {
        method: 'post',
        parameters: {
            'id': item_id,
            'appid': app_id,
            'sessionid': g_sessionID
        },
        onSuccess: function () {
            buttons.wait.hide();
            const buttonNowOn = ToggleElement(clickedButton);

            // If the button is now on, and there's a panel to switch in...
            if (clickedButton.hasClassName("panelSwitch") && ! buttonNowOn)
            {
                $("Unsubscribed" + item_id).show();
                $("Subscription" + item_id).hide();
            }
        }
    };

    let endpoint = "https://steamcommunity.com";
    endpoint += clickedButton.hasClassName("toggled") ? deactivate : activate;

    new Ajax.Request(endpoint, options);
}

function ToggleFavorite(item_id, app_id)
{
    ToggleItemState(item_id, app_id, 'favorite', '/sharedfiles/favorite', '/sharedfiles/unfavorite');
}

function ToggleSubscribed(item_id, app_id)
{
    ToggleItemState(item_id, app_id, 'subscribe', '/sharedfiles/subscribe', '/sharedfiles/unsubscribe');
}

function VoteLater(item_id)
{
	if ( !$('VoteLaterBtn').hasClassName( "toggled" ) )
	{
		var blurb = $('rated_blurb');
		if( blurb != null )
			blurb.hide();

		$('action_wait').show();

		var options = {
			method: 'post',
			postBody: 'id=' + item_id + '&sessionid=' + g_sessionID,
			onSuccess: (function(item_id){
				return function(transport)
				{
					$('action_wait').hide();

					if ( !CheckVoteResults( transport ) )
						return;

					$('VoteLaterBtn').addClassName('toggled');

					var next = $('voteNext');
					if( next != null )
						next.show();
				}
			}(item_id))
		};
		new Ajax.Request(
			'https://steamcommunity.com/sharedfiles/votelater',
			options
		);
	}

	return false;
}

/* used for collection votes for now */
function ValidateVoteSuccess( transport )
{
	if ( !transport.responseJSON )
	{
		ShowAlertDialog( 'Error', 'An error was encountered while processing your request: unknown' );
	}
	else if ( transport.responseJSON.success == 21 )
	{
		ShowAlertDialog( 'Error', 'You must be logged in to perform that action.' );
	}
	else if ( transport.responseJSON.success == 24 )
	{
		ShowAlertDialog( 'Error', 'Your account does not meet the requirements to use this feature. <a class="whiteLink" href="https://help.steampowered.com/en/wizard/HelpWithLimitedAccount" target="_blank" rel="">Visit Steam Support</a> for more information.' );
	}
	else if ( transport.responseJSON.success == 16 )
	{
		ShowAlertDialog( 'Error', 'There was a problem submitting your request to our servers. Please try again.' );
	}
	else if ( transport.responseJSON.success == 41 )
	{
		ShowAlertDialog( 'Error', 'Your account recently upvoted an item that was banned for violating Steam\'s Terms of Service. Because of this, you\'ll be temporarily unable to vote on some user-generated content.' );
	}
	else if ( transport.responseJSON.success != 1 )
	{
		ShowAlertDialog( 'Error', 'An error was encountered while processing your request: ' + transport.responseJSON.success );
	}

	return transport.responseJSON && transport.responseJSON.success == 1;
}

function PublishedFileVoteUp( id )
{
	if ( !$('vote_up_' + id).hasClassName( 'btn_active' ) )
	{
		var options = {
			method: 'post',
			postBody: 'id=' + id + '&sessionid=' + g_sessionID,
			onComplete: (function(id){
				return function(transport)
				{
					if ( ValidateVoteSuccess( transport ) )
					{
						$('vote_up_' + id).addClassName('btn_active');
						$('vote_down_' + id).removeClassName('btn_active');
					}
				}
			}(id))
		};
		new Ajax.Request(
			'https://steamcommunity.com/sharedfiles/voteup',
			options
		);
	}
}

function PublishedFileVoteDown( id )
{
	if ( !$('vote_down_' + id).hasClassName( 'btn_active' ) )
	{
		var options = {
			method: 'post',
			postBody: 'id=' + id + '&sessionid=' + g_sessionID,
			onComplete: (function(id){
				return function(transport)
				{
					if ( ValidateVoteSuccess( transport ) )
					{
						$('vote_up_' + id).removeClassName('btn_active');
						$('vote_down_' + id).addClassName('btn_active');
					}
				}
			}(id))
		};
		new Ajax.Request(
			'https://steamcommunity.com/sharedfiles/votedown',
			options
		);
	}
}

function ReportItem()
{
	if ( $('ReportItemBtn') && $('ReportItemBtn').hasClassName( "toggled" ) )
		return;

	var dialog = ShowPromptWithTextAreaDialog( 'Report this item', '', null, null, 1000 );
	var explanation = $J('<div/>', { 'class': 'report_dialog_explanation' } );
	explanation.html( 'Please describe the way in which this item is in violation of the Steam Terms of Service. Please include any relevant information or links. Filing this report cannot be undone.' );

	var dmcaLink = $J('<div/>', { 'class': 'report_dialog_explanation' } );
	dmcaLink.html( 'If you\'d like to report Copyright Infringement and are the copyright holder, please proceed to our DMCA compliant notice of copyright infringement form <a href="https://steamcommunity.com/dmca/create/" target="_blank">here</a>.' );
	var actualLink = dmcaLink.find( "a" )[0];
	actualLink.href += publishedfileid;

	var trademarkLink = $J('<div/>', { 'class': 'report_dialog_explanation' } );
	trademarkLink.html( 'If you\'d like to file a Trademark complaint, please file one <a href="https://steamcommunity.com/trademark/createtrademarkcomplaint/" target="_blank">here</a>.' );
	var actualLink2 = trademarkLink.find( "a" )[0];
	actualLink2.href += publishedfileid;

	var textArea = dialog.m_$Content.find( 'textarea' );
	textArea.addClass( "report_dialog_text_area" );
	textArea.parent().before( explanation );
	textArea.parent().after( trademarkLink );
	textArea.parent().after( dmcaLink );

	dialog.done( function( data ) {
		data = v_trim( data );
		if ( data.length < 1 )
		{
			alert( 'Please enter a valid reason.')
			return;
		}
		$J.post( 'https://steamcommunity.com/sharedfiles/reportitem', {
				'id' : publishedfileid,
				'description' : data,
				'sessionid' : g_sessionID
			}
		).done( function( json ) {
				if ( !CheckVoteResultsJSON( json ) )
					return;

				$('ReportItemBtn').className = "general_btn report toggled";
		} );
	} );
}

function SharedFiles_BlockAuthorModal( author, strPersonaName )
{
	ShowConfirmDialog( 'Block All Communication',
		'You are about to block all communication with %s.'.replace( /%s/, V_EscapeHTML( strPersonaName ) ),
		'Yes, block them'
	).done( function() {
		$J.post(
			'https://steamcommunity.com/actions/BlockUserAjax',
			{sessionID: g_sessionID, steamid: author, block: 1 }
		).done( function() {
			ShowAlertDialog( 'Block All Communication',
				'You have blocked all communications with this player.'
			).done( function() {
				window.top.location.reload();
			} );
		} ).fail( function() {
			ShowAlertDialog( 'Block All Communication',
				'Error processing your request. Please try again.'
			);
		} );
	} );
}

function HideSharePoup()
{
	$('SharePopup').hide();
	$('ShareItemBtn').removeClassName( 'toggled' );
}

function SendSubscribeItemRequest( id, appID, bIncludeDependencies )
{
	$('action_wait').show();

	var params = {
		id: id,
		appid: appID,
		include_dependencies: bIncludeDependencies,
		sessionid: g_sessionID
	};

	$J.post( "https://steamcommunity.com/sharedfiles/subscribe", params )
	.done( function( data )
	{
		switch( data.success )
		{
			case 1:
			{
				if ($('JustSubscribed') !== null )
				{
					$('JustSubscribed').show();
				}
				$('SubscribeItemBtn').addClassName("toggled");
				$('SubscribeItemOptionAdd').className = "subscribeOption add";
				$('SubscribeItemOptionSubscribed').className = "subscribeOption subscribed selected";
			}
			break;

			case 15:
			{
				ShowAlertDialog( "Error", "You do not have permission to subscribe to this item." );
			}
			break;

			case 25:
			{
				ShowAlertDialog( "Error", "You cannot subscribe to this item because you have reached the limit of 15,000 subscriptions across all products on Steam." );
			}
			break;

			default:
			{
				ShowAlertDialog( "Error", "There was a problem trying to subscribe to this item. Please try again later." );
			}
			break;
		}

		$('action_wait').hide();
	} );

}

function SubscribeItem( id, appID )
{
	if ( !$('SubscribeItemBtn').hasClassName( "toggled" ) )
	{
		var requiredItems = $J( "#RequiredItems" ).clone();
		var subscribedRequiredItems = $J( requiredItems ).find( "[data-subscribed=0]" );
		if ( subscribedRequiredItems.length != 0 )
		{
			requiredItems.prepend( 'This item requires all of the following other items in order to function properly.<br><br>You can click on each one here to learn more about and subscribe to the item before proceeding.<br><br>You can also choose to subscribe to all these required items (and all the items they in turn require), but be warned that could include many more items.<br><br>' );
			var dialog = ShowConfirmDialog( 'Additional Required Items', requiredItems, 'Subscribe to Just This Item', undefined, 'Subscribe to All' );
			dialog.done( function( action ) {
				SendSubscribeItemRequest( id, appID, action == 'SECONDARY' );
			} );
		}
		else
		{
			SendSubscribeItemRequest( id, appID, false );
		}
	}
	else
	{
		var params = {
			id: id,
			appid: appID,
			sessionid: g_sessionID
		};
		$('action_wait').show();
		$J.post( "https://steamcommunity.com/sharedfiles/unsubscribe", params )
		.done( function( data )
		{
			if ( data.success == 1 )
			{
				if ($('JustSubscribed') !== null )
				{
					$('JustSubscribed').hide();
				}
				$('SubscribeItemBtn').removeClassName("toggled");
				$('SubscribeItemOptionAdd').className = "subscribeOption add selected";
				$('SubscribeItemOptionSubscribed').className = "subscribeOption subscribed";
				$('action_wait').hide();
			}
		} );
	}
}


function SubscribeInlineItem( id, appID )
{
	$J('#action_wait_' + id).show();

	var params = {
		id: id,
		appid: appID,
		sessionid: g_sessionID
	};

	if ( !$J('#SubscribeItemBtn' + id ).hasClass( "toggled" ) )
	{
		$J.post( "https://steamcommunity.com/sharedfiles/subscribe", params )
		.done( function( data ) {
			$J('#SubscribeItemBtn' + id).addClass( "toggled" );
			$J('#user_action_history_icon_subscribed' + id ).show();
			$J('#action_wait_' + id).hide();
		} );
	}
	else
	{
		$J.post( "https://steamcommunity.com/sharedfiles/unsubscribe", params )
		.done( function( data ) {
			$J('#SubscribeItemBtn' + id).removeClass( "toggled" );
			$J('#user_action_history_icon_subscribed' + id ).hide();
			$J('#action_wait_' + id).hide();
		} );
	}
}


function FavoriteItem()
{
	$('action_wait').show();
	if ( !$('FavoriteItemBtn').hasClassName( "toggled" ) )
	{
		$('PublishedFileFavorite').request( {
			onComplete: function()
			{
				$('JustFavorited').show();
				$('FavoriteItemBtn').className = "general_btn favorite toggled";
				$('FavoriteItemOptionAdd').className = "favoriteOption addfavorite";
				$('FavoriteItemOptionFavorited').className = "favoriteOption favorited selected";
				$('action_wait').hide();
			}
		} );
	}
	else
	{
		$('PublishedFileUnfavorite').request( {
			onComplete: function()
			{
				$('JustFavorited').hide();
				$('FavoriteItemBtn').className = "general_btn favorite";
				$('FavoriteItemOptionAdd').className = "favoriteOption addfavorite selected";
				$('FavoriteItemOptionFavorited').className = "favoriteOption favorited";
				$('action_wait').hide();
			}
		} );
	}
}

function FollowItem(item_id, app_id)
{
	$('action_wait').show();

	var bShouldFollow = !$('FollowItemBtn').hasClassName('toggled');

	var options = {
		method: 'post',
		parameters: {
			'id' : item_id,
			'appid' : app_id,
			'sessionid' : g_sessionID,
			'follow' : bShouldFollow ? '1' : '0'
		},
		onSuccess: (function(item_id){
			return function(transport)
			{
				$('action_wait').hide();

				if ( !CheckVoteResults( transport ) )
					return;

				if ( bShouldFollow )
				{
					$('FollowItemBtn').addClassName('toggled');
					$('FollowItemOptionAdd').removeClassName('selected');
					$('FollowItemOptionFollowed').addClassName('selected');
				}
				else
				{
					$('FollowItemBtn').removeClassName('toggled');
					$('FollowItemOptionAdd').addClassName('selected');
					$('FollowItemOptionFollowed').removeClassName('selected');
				}
			}
		}(item_id))
	};
	new Ajax.Request(
		'https://steamcommunity.com/sharedfiles/followitem',
		options
	);
}

function SubscribeCollectionHelper( id, appID, add_only )
{
	var params = {
		id: id,
		appid: appID,
		sessionid: g_sessionID,
		add_only: add_only,
	};
	var dialog = ShowBlockingWaitDialog( 'Please Wait', add_only ? 'Adding all items in this collection to your subscriptions...' : 'Overwriting your subscriptions to contain only the contents of this collection...' );
	$J.post( "https://steamcommunity.com/sharedfiles/subscribecollection", params )
	.done( function ( data )
	{
		top.location.reload();
	} );
}

function SubscribeCollection( id, appID )
{
	ShowConfirmDialog(
		'Subscribe to all',
		'Do you want to add the items in this collection to your subscriptions, or overwrite your subscriptions to contain only items from this collection?',
		'Add Only',
		undefined,
		'Overwrite My Subscriptions'
	).done( function( action )
	{
		var bAddOnly = action == 'OK';
		if ( !bAddOnly )
		{
			ShowConfirmDialog(
				'Overwrite My Subscriptions',
				'Are you absolutely sure you want to overwrite your subscriptions?<br><br>This will remove all your current subscriptions and replace them with the contents of this collection.<br><br>You may want to save your current subscriptions to a collection first.',
				'Yes, Overwrite My Subscriptions',
				undefined,
				'Save Current Subscriptions to a Collection'
			).done( function( action2 )
			{
				if ( action2 == 'OK' )
				{
					SubscribeCollectionHelper( id, appID, false );
				}
				else
				{
					SaveSubscriptionToCollection( appID );
				}
			} );
		}
		else
		{
			SubscribeCollectionHelper( id, appID, true );
		}
	} );
}

function UnsubscribeCollection( id )
{
	var dialog = ShowBlockingWaitDialog( 'Please Wait', 'Removing all items in this collection from your subscriptions...' );
	$J.post(
		'https://steamcommunity.com/sharedfiles/unsubscribecollection',
		{
			publishedfileid: id,
			sessionid: g_sessionID,
		}
	).done( function( json ) {
			top.location.reload();
		}
	);
}

function CloseNotification( notification )
{
	$( notification ).hide();
}

function SubscribeCollectionItem( id, appID )
{
	var button = $J( "#SubscribeItemBtn" + id );
	var waitThrobber = $J( '#action_wait_' + id );

	button.hide();
	waitThrobber.show();

	var params = {
		id: id,
		appid: appID,
		include_dependencies: false,
		sessionid: g_sessionID
	};

	if ( !button.hasClass( "toggled" ) )
	{
		$J.post( "https://steamcommunity.com/sharedfiles/subscribe", params )
		.done( function( data )
		{
			if ( data.success == '1' )
			{
				button.addClass( "toggled" );
				waitThrobber.hide();
				button.show();
			}
		} );
	}
	else
	{
		$J.post( "https://steamcommunity.com/sharedfiles/unsubscribe", params )
		.done( function( data )
		{
			if ( data.success == '1' )
			{
				button.removeClass( "toggled" );
				waitThrobber.hide();
				button.show();
			}
		} );
	}
}

function SaveSubscriptionToCollection( appID )
{
	var params = {
		appid: appID,
		sessionid: g_sessionID
	};

	var funcNewCollection = function() {
		var prompt = ShowPromptDialog( 'Save Subscriptions to Collection', 'Enter a name for this collection:' );
		prompt.done( function( title ) {
			title = v_trim( title );
			if ( title.length == 0 )
				return;

			params['title'] = title;
			$J.post( "https://steamcommunity.com/sharedfiles/savesubscriptionstocollection", params )
				.done( function( data )
				{
					if ( data.success == 1 )
					{
						top.location.href = "https://steamcommunity.com/sharedfiles/filedetails?id=" + data.publishedfileid;
					}
				} );
		} );
	};

	var dialog = ShowConfirmDialog(
		'Save Subscriptions to Collection',
		'Would you like to save your subscriptions to a new collection or to an existing collection?',
		'New Collection',
		undefined,
		'Existing Collection',
	);
	dialog.done( function( action ) {
		if ( action == 'OK' )
		{
			funcNewCollection();
		}
		else
		{
			// ajax request to get the user's collections
			$J.post( 'https://steamcommunity.com/sharedfiles/ajaxgetmycollections',
			{
				'appid' : appID,
				'sessionid' : g_sessionID
			} )
			.done( function( json )
			{
				// build dialog
				var all_collections = json['all_collections'];
				if ( !all_collections || all_collections.length == 0 || !all_collections['publishedfiledetails'] || all_collections['publishedfiledetails'].length == 0 )
				{
					ShowConfirmDialog( 'Save Subscriptions to Collection', 'You don\'t have any existing collections. Create a new one?' )
					.done( funcNewCollection );
					return;
				}

				var content = $J( '<div/>', { text: 'Select a collection to overwrite: ' } );
				content.append( $J( '<br/>' ) );
				content.append( $J( '<br/>' ) );
				var select = $J( '<select/>' );
				var publishedFileDetails = all_collections['publishedfiledetails'];
				for ( var i = 0; i < publishedFileDetails.length; ++i )
				{
					var details = publishedFileDetails[i];
					var option = $J( '<option/>', { value: details['publishedfileid'], text: details['title'] } );
					select.append( option );
				}
				content.append( select );

				var dialog = ShowConfirmDialog( 'Save Subscriptions to Collection', content );
				dialog.done( function ()
				{
					params['id'] = select.val();
					$J.post( "https://steamcommunity.com/sharedfiles/savesubscriptionstocollection", params )
					.done( function ( data )
					{
						if ( data.success == 1 )
						{
							top.location.href = "https://steamcommunity.com/sharedfiles/filedetails?id=" + data.publishedfileid;
						}
					} );
				} );
			} );
		}
	} );
}

function SaveCollectionToCollection( appID, srcCollectionID )
{
	var params = {
		appid: appID,
		srcCollectionID: srcCollectionID,
		sessionid: g_sessionID
	};

	var funcNewCollection = function() {
		var prompt = ShowPromptDialog( 'Overwrite Collection', 'Enter a name for this collection:' );
		prompt.done( function( title ) {
			title = v_trim( title );
			if ( title.length == 0 )
				return;

			params['title'] = title;
			$J.post( "https://steamcommunity.com/sharedfiles/savecollectiontocollection", params )
			.done( function( data )
			{
				if ( data.success == 1 )
				{
					top.location.href = "https://steamcommunity.com/sharedfiles/filedetails?id=" + data.publishedfileid;
				}
			} );
		} );
	};

	var dialog = ShowConfirmDialog(
		'Overwrite Collection',
		'Would you like to save this collection to a new collection or overwrite an existing collection?',
		'New Collection',
		undefined,
		'Existing Collection',
	);
	dialog.done( function( action ) {
		if ( action == 'OK' )
		{
			funcNewCollection();
		}
		else
		{
			// ajax request to get the user's collections
			$J.post( 'https://steamcommunity.com/sharedfiles/ajaxgetmycollections',
			{
				'appid' : appID,
				'sessionid' : g_sessionID
			} )
			.done( function( json )
			{
				// build dialog
				var all_collections = json['all_collections'];
				if ( !all_collections || all_collections.length == 0 || !all_collections['publishedfiledetails'] || all_collections['publishedfiledetails'].length == 0 )
				{
					ShowConfirmDialog( 'Overwrite Collection', 'You don\'t have any existing collections. Create a new one?' )
						.done( funcNewCollection );
					return;
				}

				var content = $J( '<div/>', { text: 'Select a collection to overwrite: ' } );
				content.append( $J( '<br/>' ) );
				content.append( $J( '<br/>' ) );
				var select = $J( '<select/>' );
				var publishedFileDetails = all_collections['publishedfiledetails'];
				for ( var i = 0; i < publishedFileDetails.length; ++i )
				{
					var details = publishedFileDetails[i];
					var option = $J( '<option/>', { value: details['publishedfileid'], text: details['title'] } );
					select.append( option );
				}
				content.append( select );

				var dialog = ShowConfirmDialog( 'Overwrite Collection', content );
				dialog.done( function ()
				{
					params['id'] = select.val();
					$J.post( "https://steamcommunity.com/sharedfiles/savecollectiontocollection", params )
					.done( function ( data )
					{
						if ( data.success == 1 )
						{
							top.location.href = "https://steamcommunity.com/sharedfiles/filedetails?id=" + data.publishedfileid;
						}
					} );
				} );
			} );
		}
	} );
}

function SetImageDimensionsForFile( fileID, elemIDImageWidth, elemIDImageHeight, elemIDImage )
{
	if ( typeof FileReader !== "undefined" )
	{
		var file = $( fileID ).files[0];
		var reader = new FileReader();
		reader.onload = (function(f) {
			return function() {
				var i = new Image();
				i.onload = (function(e) {
					var height, width;
					width = e.target.width;
					height = e.target.height;
					$( elemIDImageWidth ).value = width;
					$( elemIDImageHeight ).value = height;
					var pageImage = $( elemIDImage );
					if ( pageImage )
					{
						pageImage.src = i.src;
					}
				});
				return i.src = reader.result;
			};
		})(file);
		return reader.readAsDataURL(file);
	}
}

function ShowAddToCollection( id, appID )
{
	// hide children
	$J( '#AddToCollectionDialogNoEligibleCollections' ).hide();
	var $dialogContents = $J( '#AddToCollectionDialogContents' );
	$dialogContents.hide();
	$J('#AddToCollectionDialogLoading').show();

	var waitDialog = ShowBlockingWaitDialog( 'Add to Collection', $J( '#AddToCollectionDialogLoading' ) );
	waitDialog.SetRemoveContentOnDismissal( false );

	// ajax request to get the user's collections
	$J.post( 'https://steamcommunity.com/sharedfiles/ajaxgetmycollections',
		{
			'appid' : appID,
			'publishedfileid' : id,
			'sessionid' : g_sessionID
		}
	).always( function() {
		waitDialog.Dismiss();
		$J( '#AddToCollectionDialogLoading' ).hide();
	}
	).done( function( json ) {
		// show dialog
		$( 'AddToCollectionDialog' ).show();
		var dialog = ShowConfirmDialog( 'Add to Collection', $( 'AddToCollectionDialog' ) );
		dialog.SetRemoveContentOnDismissal( false );	// we want to check what was in the array for sending diffs

		var set_parent_collections = new Array();

		var numAdded = 0;
		$dialogContents.empty();

		var all_collections = json['all_collections'];
		var parent_collections = json['parent_collections'];

		// create a set we can quickly look at
		if ( 'publishedfiledetails' in parent_collections )
		{
			var publishedFileDetails = parent_collections['publishedfiledetails'];
			for ( var i = 0; i < publishedFileDetails.length; ++i )
			{
				var details = publishedFileDetails[i];
				set_parent_collections[details['publishedfileid']] = 'in_collection';
			}
		}

		// now create the list
		if ( 'publishedfiledetails' in all_collections )
		{
			var publishedFileDetails = all_collections['publishedfiledetails'];
			for ( var i = 0; i < publishedFileDetails.length; ++i )
			{
				var details = publishedFileDetails[i];
				var publishedFileID = details['publishedfileid'];
				// don't allow the current item if it is a collection
				if ( details['result'] != 1 || publishedFileID == id )
				{
					continue;
				}
				var $container = $J('<div/>', {'class': 'add_to_collection_dialog_container'} );
				var $input = $J('<input/>', {'type' : 'checkbox', 'class': 'add_to_collection_dialog_checkbox', 'name' : 'collections[' + publishedFileID + ']', 'id' : publishedFileID, 'data-title' : details['title'] } );
				if ( set_parent_collections[publishedFileID] === "in_collection" )
				{
					$input.prop( 'checked', true );
				}
				$container.append( $input );
				var $title = ( $J('<label/>', {'class': 'add_to_collection_dialog_title', 'for' : publishedFileID } ).text( details['title'] ) );
				$container.append( $title );
				$dialogContents.append( $container );
				numAdded++;
			}
		}
		if ( numAdded == 0 )
		{
			$( 'AddToCollectionDialogNoEligibleCollections' ).show();
		}
		else
		{
			ShowWithFade( 'AddToCollectionDialogContents' );
		}

		// function for when the user clicks OK
		dialog.done( function() {
			var params = {
				'sessionID' : g_sessionID,
				'publishedfileid' : id
			};

			var inputs = $J( '.add_to_collection_dialog_checkbox' );
			for ( var i = 0; i < inputs.length; ++i )
			{
				var input = inputs[i];
				var publishedFileID = input.id;
				if ( set_parent_collections[publishedFileID] === "in_collection" )
				{
					if ( !input.checked )
					{
						params['collections[' + publishedFileID + '][remove]'] = true;
						params['collections[' + publishedFileID + '][title]'] = $J( input ).data( 'title' );
					}
				}
				else
				{
					if ( input.checked )
					{
						params['collections[' + publishedFileID + '][add]'] = true;
						params['collections[' + publishedFileID + '][title]'] = $J( input ).data( 'title' );
					}
				}
			}

			$J.post( 'https://steamcommunity.com/sharedfiles/ajaxaddtocollections',
				params
		).done( function( data ){
				dialog.Dismiss();
			}).fail( function( jqxhr ) {
				dialog.Dismiss();
				var errorText = 'There was a problem adding this item to the following collections:<br><br>';
				for ( var i = 0; i < jqxhr.responseJSON.results.length; ++i )
				{
					var title = jqxhr.responseJSON.results[i].error;
					errorText += title + '<br>';
				}
				ShowAlertDialog( 'Add to Collection', errorText );
			});
		} );
	} );
}

function RemoveTaggedUser( publishedfileid, accountid )
{
	ShowConfirmDialog( 'Are you sure?', 'You are about to remove yourself as being tagged in this screenshot.  Are you sure?', 'Remove', 'Cancel'
	).done( function() {
		$J.post( 'https://steamcommunity.com/sharedfiles/removetaggeduser', {
			'accountid': accountid,
			'publishedfileid' : publishedfileid,
			'sessionid' : g_sessionID
			}
		).done( function( json ){
			jQuery("#friendLink_" + accountid ).remove();
		})
	});
}

function ResendItemSubmissionVerificationEmail( publishedfileid )
{
	$J.post( 'https://steamcommunity.com/sharedfiles/ajaxresendverificationemail/', {
			'sessionid' : g_sessionID,
			'id' : publishedfileid
		}
	).done( function( json ){
		ShowAlertDialog( 'Verification Email Sent', 'An email was sent to the email associated with your account.  Please click the link in there to verify you created this content.' );
	} ).fail( function( jqxhr )	{
		ShowAlertDialog( 'Error', 'There was a problem sending the verification email for this content. Please try again later.' );
	} );
}

function SelectItemVisibility( publishedfileid, value )
{
	HideMenu( $('visibilityselect'), $('visibilityselect_options') );

	var rgParams = {
		sessionid: g_sessionID,
		id: publishedfileid,
		visibility: value
	};

	$J.post(
		"https://steamcommunity.com/sharedfiles/itemsetvisibility",
		rgParams
	)
	.done( function( rgResult ) {
		$J('#visibilityNotificationPrivate').hide();
		$J('#visibilityNotificationFriendsOnly').hide();
		$J('#visibilityNotificationUnlisted').hide();
		$J('#visibilityselect_option_0_check').css( 'visibility', 'hidden' );
		$J('#visibilityselect_option_1_check').css( 'visibility', 'hidden' );
		$J('#visibilityselect_option_2_check').css( 'visibility', 'hidden' );
		$J('#visibilityselect_option_3_check').css( 'visibility', 'hidden' );

		switch ( value )
		{
			case '0':
				$J('#visibilityselect_option_0_check').css( 'visibility', 'visible' );
				break;
			case '1':
				$J('#visibilityNotificationFriendsOnly').show();
				$J('#visibilityselect_option_1_check').css( 'visibility', 'visible' );
				break;
			case '2':
				$J('#visibilityNotificationPrivate').show();
				$J('#visibilityselect_option_2_check').css( 'visibility', 'visible' );
				break;
			case '3':
				$J('#visibilityNotificationUnlisted').show();
				$J('#visibilityselect_option_3_check').css( 'visibility', 'visible' );
				break;
		}
	} )
	.fail( function( jqXHR ) {
		ShowAlertDialog( "Unable to change visibility", "There was a problem changing the visibility of this item (%1$s). Please try again later".replace('%1$s', jqXHR.responseJSON.success) );
	} );
}

function ShowPublicComments()
{
	var commentsPublic = document.getElementById( 'PublicComments' );
	var commentsDev = document.getElementById( 'DeveloperComments' );
	commentsPublic.style.display = "block";
	commentsDev.style.display = "none";

	var commentsTabPublic = document.getElementById( 'PublicCommentsTab' );
	var commentsTabDev = document.getElementById( 'DeveloperCommentsTab' );
	commentsTabPublic.className = "commentsTab active";
	commentsTabDev.className = "commentsTab";
}

function ShowDeveloperComments()
{
	var commentsPublic = document.getElementById( 'PublicComments' );
	var commentsDev = document.getElementById( 'DeveloperComments' );
	commentsPublic.style.display = "none";
	commentsDev.style.display = "block";

	var commentsTabPublic = document.getElementById( 'PublicCommentsTab' );
	var commentsTabDev = document.getElementById( 'DeveloperCommentsTab' );
	commentsTabPublic.className = "commentsTab";
	commentsTabDev.className = "commentsTab active";
}

