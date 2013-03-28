"use strict";

function CWebAPI( strWebAPIHost, strSecureWebAPIHost, strOAuth2Token )
{
	this.m_strHost = strWebAPIHost;
	this.m_strSecureWebAPIHost = strSecureWebAPIHost;
	this.m_strOAuth2Token = strOAuth2Token;
}

CWebAPI.prototype.BuildURL = function( strInterface, strMethod, bSecure, strVersion )
{
	if ( !strVersion )
		strVersion = 'v0001';

	var strURL = ( bSecure ? this.m_strSecureWebAPIHost : this.m_strHost );
	strURL += strInterface + '/' + strMethod + '/' + strVersion + '/';

	return strURL;
}

CWebAPI.prototype.ExecJSONP = function( strInterface, strMethod, rgParams, bSecure, strVersion, cTimeoutSecs )
{
	rgParams.access_token = this.m_strOAuth2Token;

	var rgJQueryParams = {
		url: this.BuildURL( strInterface, strMethod, bSecure, strVersion ),
		dataType: 'jsonp',
		jsonp: 'jsonp',				data: rgParams
	};

	if ( cTimeoutSecs )
		rgJQueryParams['timeout'] = cTimeoutSecs * 1000;

	return $J.ajax( rgJQueryParams );

	/*
	// using jsonp plugin instead of built-in jquery jsonp handling.  this library supposedly
	//	works around the firefox "waiting for host..." issue, but it doesn't work.
	return $J.jsonp({
		url: this.BuildURL( strInterface, strMethod, bSecure, strVersion ),
		callbackParameter: 'jsonp',				data: rgParams
	});
	*/
};

CWebAPI.prototype.ExecPOST = function( strInterface, strMethod, rgParams, bSecure, strVersion )
{
	rgParams.access_token = this.m_strOAuth2Token;
	rgParams.format = 'json';

	return $J.ajax( {
		url: this.BuildURL( strInterface, strMethod, bSecure, strVersion ),
		type: 'POST',
		data: rgParams
	});
};


function CChatFriend( rgFriendData, fnOnClick )
{
	this.m_unAccountID = rgFriendData.m_unAccountID;
	this.m_ulSteamID = rgFriendData.m_ulSteamID;
	this.m_tsLastMessage = rgFriendData.m_tsLastMessage ? new Date( rgFriendData.m_tsLastMessage * 1000 ) : null;
	this.m_tsLastView = rgFriendData.m_tsLastView ? new Date( rgFriendData.m_tsLastView * 1000 ) : null;
	this.m_cUnreadMessages = rgFriendData.m_cUnreadMessages ? rgFriendData.m_cUnreadMessages : 0;
	this.m_strNickname = rgFriendData.m_strNickname ? rgFriendData.m_strNickname : null;

	this.ReadPersonaFields( rgFriendData );

	this.m_bChatHistoryLoaded = false;
	this.m_rgChatLog = null;

	this.m_fnOnClick = fnOnClick;

	this.m_rgUnreadMessageElements = [];
	this.m_rgPersonaNameElements = [];
	this.m_rgPersonaStatusDescriptionElements = [];
	this.m_rgPersonaStatusElements = [];

	this.m_rgPersonaStateChangeListeners = [];
}

CChatFriend.s_rgPersonaElementTypes = [ 'UnreadMessageElements', 'PersonaNameElements', 'PersonaStatusDescriptionElements', 'PersonaStatusElements' ];

CChatFriend.prototype.ReadPersonaFields = function( rgFriendData )
{
	this.m_strName = rgFriendData.m_strName;
	this.m_strNameNormalized = this.m_strName.toLowerCase();


	this.m_ePersonaState = rgFriendData.m_ePersonaState;
	this.m_strAvatarHash = rgFriendData.m_strAvatarHash;
	this.m_nInGameAppID = rgFriendData.m_nInGameAppID;
	this.m_strInGameName = rgFriendData.m_strInGameName;
}

// callbacks will be passed a reference to this object when persona state changes
CChatFriend.prototype.RegisterOnPersonaStateChange = function ( fnOnChange )
{
	this.m_rgPersonaStateChangeListeners.push( fnOnChange );
}

CChatFriend.prototype.Refresh = function()
{
	var _friend = this;
	$J.ajax( {
		url: 'http://steamcommunity.com/chat/friendstate/' + this.m_unAccountID,
		type: 'GET'
	}).done( function( data ) { _friend.OnRefreshedData( data ); } );
}

CChatFriend.prototype.OnRefreshedData = function( data )
{
	if ( data )
	{
		this.ReadPersonaFields( data );
		this.OnPersonaStateChange();
	}
}

CChatFriend.prototype.OnPersonaStateChange = function()
{
	this.UpdateDisplayForPersonaState();
	for( var i=0; i < this.m_rgPersonaStateChangeListeners.length; i++ )
	{
		this.m_rgPersonaStateChangeListeners[i]( this );
	}
}

CChatFriend.prototype.Render = function( target, bCurrentUser )
{
	var elUnreadCount;
	if ( !bCurrentUser )
	{
		elUnreadCount = $J('<div/>', {'class': 'unread_message_count'}).hide();
		elUnreadCount.append( $J('<div/>', {'class': 'unread_message_count_value' } ) );
		elUnreadCount.append( $J('<div/>', {'class': 'message_count_flash' }).hide() );
	}

	// display the avatar
	var elAvatar = $J('<div/>');

	var strAvatarSize = ( bCurrentUser ? 'medium' : '' );

	elAvatar.append( '<img src="' + this.GetAvatarURL( strAvatarSize ) + '">' );

	// to display "Online", "Away" status
	var elStatusLine = $J('<div/>');

	// display the user's name
	var elName = $J('<span class="linkFriend">' + this.m_strName + '</span>');

	// the block itself
	var elMemberBlock = $J('<div/>');
	elMemberBlock.append( elName, elStatusLine );

	var elFriend;
	// put it together
	if ( !bCurrentUser )
	{
		elFriend = $J('<div/>', {'class': 'friendslist_entry'}).append( elUnreadCount, elAvatar, elMemberBlock );
		elFriend.click( this.m_fnOnClick );
	}
	else
	{
		elFriend = $J('<div/>', {'class': ''}).append( elAvatar, elMemberBlock );
	}

	this.RegisterPersonaElement( elFriend, 'PersonaNameElements', elName );
	this.RegisterPersonaElement( elFriend, 'PersonaStatusElements', { 'class': 'playerAvatar ' + strAvatarSize, element: elAvatar } );
	this.RegisterPersonaElement( elFriend, 'PersonaStatusElements', {'class': 'friendslist_entry_content persona', element: elMemberBlock } );
	this.RegisterPersonaElement( elFriend, 'PersonaStatusDescriptionElements', elStatusLine );
	if ( elUnreadCount )
		this.RegisterPersonaElement( elFriend, 'UnreadMessageElements', elUnreadCount );

	// set colors and online string based on status
	this.UpdateDisplayForPersonaState();
	this.UpdateUnreadMessageDisplay();

	if ( target )
		target.append( elFriend );

	return elFriend;
};

// Add an element to our list of elements that need updates on persona status changes/avatar changes/etc
CChatFriend.prototype.RegisterPersonaElement = function( elFriend, strElementListName, elNeedsUpdates )
{
	var thisVarName = 'm_rg' + strElementListName;
	this[thisVarName].push( elNeedsUpdates );

	// also record the element on the element we created, so if we need to clean up the element later we can find all the
	//	associated listener elements
	if ( !elFriend[thisVarName] )
		elFriend[thisVarName] = [];
	elFriend[thisVarName].push( elNeedsUpdates );
};

CChatFriend.prototype.UnregisterPersonaElements = function( elFriend )
{
	for ( var iType = 0; iType < CChatFriend.s_rgPersonaElementTypes.length; iType++ )
	{
		var strType = CChatFriend.s_rgPersonaElementTypes[iType];
		var varName = 'm_rg' + strType;

		if ( elFriend[varName] && elFriend[varName] instanceof Array )
		{
			for ( var i = 0; i < elFriend[varName].length; i++ )
			{
				var iElement = $J.inArray( elFriend[varName][i], this[varName] );
				if ( iElement != -1 )
					this[varName].splice( iElement, 1 );
			}
			delete elFriend[varName];
		}
	}
}

CChatFriend.prototype.RenderChatDialog = function()
{
	var elHeader = $J('<div/>', {'class': 'chatdialog_header'} );

	// create an avatar element
	var elChatDialogAvatar = $J('<div/>').append( '<a href="http://steamcommunity.com/profiles/' + this.m_ulSteamID + '" target="_blank"><img src="' + this.GetAvatarURL( 'medium' ) + '"></a>' );

	// create a name element (this has both status-based class and receives name updates)
	var elChatDialogName = $J('<a href="http://steamcommunity.com/profiles/' + this.m_ulSteamID + '" target="_blank"/>');

	this.RegisterPersonaElement( elHeader, 'PersonaStatusElements', { 'class': 'playerAvatar medium', element: elChatDialogAvatar } );
	this.RegisterPersonaElement( elHeader, 'PersonaStatusElements', { 'class': 'persona', element: elChatDialogName } );
	this.RegisterPersonaElement( elHeader, 'PersonaNameElements', elChatDialogName );

	elHeader.append( elChatDialogAvatar, $J('<h2/>').append( elChatDialogName ), '<div style="clear: left;"></div>' );

	this.UpdateDisplayForPersonaState();	//set the right styles on avatar and name

	return elHeader;
};

CChatFriend.prototype.UpdateDisplayForPersonaState = function()
{
	for ( var i = 0; i < this.m_rgPersonaStatusElements.length; i++ )
	{
		var element = this.m_rgPersonaStatusElements[i].element;
		var strClass = this.m_rgPersonaStatusElements[i]['class'] || '';

		element.attr( 'class', strClass + ' ' + this.GetOnlineState() );
	}
	for ( var i = 0; i < this.m_rgPersonaStatusDescriptionElements.length; i++ )
	{
		this.m_rgPersonaStatusDescriptionElements[i].html( this.GetStatusDescription() );
	}
	for ( var i = 0; i < this.m_rgPersonaNameElements.length; i++ )
	{
		this.m_rgPersonaNameElements[i].html( this.m_strName );
		if ( this.m_strNickname )
		{
			this.m_rgPersonaNameElements[i].append( ' ', $J('<span/>', {'class': 'nickname_name' } ).text( '(' + this.m_strNickname + ')' ) );
		}
	}

};

CChatFriend.prototype.ResetUnreadMessageCount = function()
{
	this.m_cUnreadMessages = 0;
	this.UpdateUnreadMessageDisplay();
};

CChatFriend.prototype.IncrementUnreadMessageCount = function()
{
	this.m_cUnreadMessages++;
	this.UpdateUnreadMessageDisplay( true /* flash display */ );
};

var g_notification;
CChatFriend.prototype.DisplayUnreadMessageTitleNag = function()
{
	CTitleManager.AddMessage( 'unread_' + this.m_unAccountID, '#WebChat_NewChatMessage_Title'.replace( /%s/, this.m_strName ) );

};

CChatFriend.prototype.UpdateUnreadMessageDisplay = function( bFlash )
{
	for ( var i=0; i < this.m_rgUnreadMessageElements.length; i++ )
	{
		var elUnreadMessages = this.m_rgUnreadMessageElements[i];
		if ( this.m_cUnreadMessages > 0 )
		{
			elUnreadMessages.children('.unread_message_count_value').text( this.m_cUnreadMessages );
			elUnreadMessages.show();
			this.FlashUnreadMessageDisplay( elUnreadMessages, 1 );
		}
		else
		{
			elUnreadMessages.hide();
		}
	}
}

CChatFriend.prototype.FlashUnreadMessageDisplay = function( elUnreadMessages, cPulses )
{
	var elFlash = elUnreadMessages.children('.message_count_flash');
	var _this = this;
	elFlash.fadeIn( 50, function() { elFlash.fadeOut( 200, function() { if ( cPulses > 1 ) _this.FlashUnreadMessageDisplay( elUnreadMessages, cPulses - 1 ); } ); } );
}

CChatFriend.prototype.BIsOnline = function()
{
	return this.m_ePersonaState != 0;
}

CChatFriend.prototype.BIsInGame = function()
{
	return this.m_nInGameAppID ? true : false;
}

CChatFriend.prototype.GetOnlineState = function()
{
	switch ( this.m_ePersonaState )
	{
		case 0:
			return 'offline';
		case 1:
		case 4:
		case 3:
		case 2:
		case 5:
		case 6:
			if ( this.m_nInGameAppID )
				return 'in-game';
			else
				return 'online';

		default:
			return 'offline';
	}
};

CChatFriend.prototype.GetStateSortValue = function()
{
	if ( this.m_nInGameAppID )
		return 2;
	else if ( this.m_ePersonaState != 0 )
		return 1;
	else
		return 0;
}

CChatFriend.prototype.GetStatusDescription = function()
{
	if ( this.m_ePersonaState != 0 && this.m_nInGameAppID )
	{
		return 'In-Game<br>' + this.m_strInGameName;
	}
	else
	{
		switch ( this.m_ePersonaState )
		{
			case 0:
				return '#Profile_Offline';
			case 1:
				return 'Online';
			case 4:
				return '#Profile_Snooze';
			case 3:
				return '#Profile_Away';
			case 2:
				return '#Profile_Busy';
			case 5:
				return '#Profile_LookingToTrade';
			case 6:
				return '#Profile_LookingToPlay';
			default:
				return 'offline';
		}
	}
}

CChatFriend.prototype.GetAvatarURL = function( size )
{
	return GetAvatarURLFromHash( this.m_strAvatarHash, size );
};

CChatFriend.LessFunc = function( a, b )
{
	var aState = a.GetStateSortValue();
	var bState = b.GetStateSortValue();
	if ( aState == bState )
	{
		// in javascript, lessthan/greaterthan on strings are effectively strcmp
		return a.m_strNameNormalized < b.m_strNameNormalized;
	}
	else
	{
		return aState > bState;
	}
};

function CFriendsList( strName, rgFriends, eFriendsListType, bStartHidden )
{
	this.m_strName = strName;

	// set visibility settings for how we show online and offline users
	this.m_bShowOfflineFriends = true;
	this.m_bShowOnlineFriends = true;

	if ( !eFriendsListType )
		eFriendsListType = CFriendsList.k_EFriendsListType_OnlineOnly;

	switch( eFriendsListType )
	{
		case CFriendsList.k_EFriendsListType_OnlineOnly:
			this.m_bShowOfflineFriends = false;
			break;
		case CFriendsList.k_EFriendsListType_OfflineOnly:
			this.m_bShowOnlineFriends = false;
			break;
		case CFriendsList.k_EFriendsListType_OnlineAndOffline:
			break;
	}

	this.m_bVisisble = !bStartHidden;

	/* build group element */
	this.m_elGroup = $J( '<div/>', { 'class': 'friendslist_group' } );

	var elGroupHandle = $J('<div/>', { 'class': 'friendslist_group_handle' } );
	this.m_elGroupToggleControl = $J('<span/>', {'class': 'friendslist_group_handle_toggle' }).text( this.m_bVisisble ? '–' : '+' );
	this.m_elGroupOnlineSummary = $J( '<span/>', {'class': 'friendlist_group_onlinesummary' } );
	elGroupHandle.append( this.m_elGroupToggleControl, this.m_strName, this.m_elGroupOnlineSummary );

	this.m_elFriendsList = $J('<div/>', {'class': 'friendslist_group_friends' } );


	var _friendslist = this;
	elGroupHandle.click( function() { _friendslist.Toggle(); } );

	if ( !this.m_bVisisble )
		this.m_elFriendsList.hide();

	this.m_elGroup.append( elGroupHandle, this.m_elFriendsList );


	/* build our list */
	this.m_Head = null;
	this.m_Tail = null;
	this.m_cOnlineFriends = 0;
	this.m_cInGameFriends = 0;
	this.m_bOnlineFriendCountDirty = true;
	for ( var i=0; i < rgFriends.length; i++ )
	{
		this.AddFriendToList( rgFriends[i] );
	}
	this.UpdateOnlineFriendCountDisplay();
}
CFriendsList.k_EFriendsListType_OnlineOnly = 0;
CFriendsList.k_EFriendsListType_OfflineOnly = 1;
CFriendsList.k_EFriendsListType_OnlineAndOffline = 2;

CFriendsList.prototype.Toggle = function()
{
	if ( !this.m_bVisisble )
	{
		this.m_elFriendsList.show( 'fast' )
		this.m_elGroupToggleControl.text( '–' );
		this.m_bVisisble = true;
	}
	else
	{
		this.m_elFriendsList.hide( 'fast' )
		this.m_elGroupToggleControl.text( '+' );
		this.m_bVisisble = false;
	}
}

CFriendsList.prototype.AddIfNotInList = function( Friend )
{
	// TODO: elements that are removed (for not passing online/offline visibility) are not checked by this
	//		this will work for recent chats because we show all members, but not for other lists

	for ( var node = this.m_Head; node != null; node = node.m_next )
	{
		if ( node.m_Friend == Friend )
			return;
	}

	this.AddFriendToList( Friend );
	this.m_bOnlineFriendCountDirty = true;
	this.UpdateOnlineFriendCountDisplay();
}

CFriendsList.prototype.AddFriendToList = function( Friend )
{
	var node = { m_Friend: Friend, m_elFriend: null, m_bWasOnline: false, m_bWasInGame: false, m_next: null, m_prev: null }
	node.m_next = node;
	node.m_prev = node;
	node.m_OnStateChangeClosure = CFriendsList.OnPersonaStateChangeClosure( this, node );

	Friend.RegisterOnPersonaStateChange( node.m_OnStateChangeClosure );

	this.Insert( node );
	this.UpdateOnlineCountsForFriend( node );
};

CFriendsList.OnPersonaStateChangeClosure = function( _friendslist, node )
{
	return function( friend ) {

		if ( !_friendslist.BIsInCorrectPosition( node ) )
		{
			// reinsert in correct position
			_friendslist.Remove( node );
			_friendslist.Insert( node );
		}

		_friendslist.UpdateOnlineCountsForFriend( node );
		_friendslist.UpdateOnlineFriendCountDisplay();
	}
};

CFriendsList.prototype.BIsInCorrectPosition = function( node )
{
	var bInList = ( node.m_prev != node && node.m_next != node );
	var bIsOnline = node.m_Friend.BIsOnline();
	var bShouldBeInList = ( bIsOnline && this.m_bShowOnlineFriends ) || ( !bIsOnline && this.m_bShowOfflineFriends );

	if ( bInList != bShouldBeInList )
		return false;

	// if it's not in the list, we don't care about position
	if ( !bInList )
		return true;

	return 	( node.m_prev == null || CChatFriend.LessFunc( node.m_prev.m_Friend, node.m_Friend ) ) &&
		( node.m_next == null || CChatFriend.LessFunc( node.m_Friend, node.m_next.m_Friend ) );
}

CFriendsList.prototype.Insert = function( insert )
{

	// don't show offline
	var bIsOnline = insert.m_Friend.BIsOnline();
	if ( ( bIsOnline && !this.m_bShowOnlineFriends ) ||
		( !bIsOnline && !this.m_bShowOfflineFriends ) )
	{
		return;
	}

	// should have been removed before attempting to re-insert
	if ( insert.m_next != insert || insert.m_prev != insert )
	{
		return;
	}

	var previous = null;
	var node = this.m_Head;
	for ( /* above */; node != null; previous = node, node = node.m_next )
	{
		if ( CChatFriend.LessFunc( insert.m_Friend, node.m_Friend ) )
		{
			break;
		}
	}
	// insert here
	insert.m_prev = previous;
	insert.m_next = node;

	if ( previous )
		previous.m_next = insert;
	else
		this.m_Head = insert;

	if ( node )
		node.m_prev = insert;
	else
		this.m_Tail = insert;

	// create the dom element if it doesn't exist
	if ( !insert.m_elFriend )
		insert.m_elFriend = insert.m_Friend.Render();

	// add to the list
	if ( node )
		node.m_elFriend.before( insert.m_elFriend );
	else
		this.m_elFriendsList.append( insert.m_elFriend );

};

CFriendsList.prototype.Remove = function( remove )
{
	if ( remove.m_next == remove && remove.m_prev == remove )
		return;

	if ( remove.m_prev )
		remove.m_prev.m_next = remove.m_next;
	else
		this.m_Head = remove.m_next;

	if ( remove.m_next )
		remove.m_next.m_prev = remove.m_prev;
	else
		this.m_Tail = remove.m_prev;

	remove.m_next = remove;
	remove.m_prev = remove;

	remove.m_elFriend.detach();
};

CFriendsList.prototype.UpdateOnlineCountsForFriend = function ( node )
{
	var bIsOnline = node.m_Friend.BIsOnline();
	var bIsInGame = node.m_Friend.BIsInGame();
	if ( bIsOnline != node.m_bWasOnline )
	{
		this.m_cOnlineFriends += ( bIsOnline ? 1 : -1 );
		node.m_bWasOnline = bIsOnline;
		this.m_bOnlineFriendCountDirty = true;
	}
	if ( bIsInGame != node.m_bWasInGame )
	{
		this.m_cInGameFriends += ( bIsInGame ? 1 : -1 );
		node.m_bWasInGame = bIsInGame;
		this.m_bOnlineFriendCountDirty = true;
	}
};

CFriendsList.prototype.UpdateOnlineFriendCountDisplay = function()
{
	if ( this.m_bOnlineFriendCountDirty && this.m_bShowOnlineFriends )
	{
		this.m_bOnlineFriendCountDirty = false;
		var strText = '&nbsp;&nbsp; ';

		if ( ( this.m_cOnlineFriends == 0 && !this.m_bShowOfflineFriends ) || this.m_Head == null )
			this.m_elGroup.hide();
		else
			this.m_elGroup.show();

		if ( this.m_cInGameFriends )
		{
			strText += '#WebChat_NumberOfFriendsInGameLabel'.replace( /%s/, this.m_cInGameFriends );
			strText += ', ';
		}
		if ( this.m_cOnlineFriends > 0 )
		{
			strText += '#WebChat_NumberOfFriendsOnlineLabel'.replace( /%s/, this.m_cOnlineFriends );
		}

		// update
		this.m_elGroupOnlineSummary.html( strText );
	}
};

function CWebChatDialog( elDialog, elContent )
{
	this.m_elDialog = elDialog;
	this.m_elContent = elContent;
	this.m_dateLastMessage = null;
}

CWebChatDialog.s_regexLinks = new RegExp( '(^|[^=\\]\'"])(https?://\\S*)', 'gi' );

CWebChatDialog.prototype.AppendChatMessage = function( Sender, timestamp, strMessage, eMessageType )
{
	// if we're no more than 10 pixels from the bottom, we will keep the scrollbar clamped to the bottom
	var elScrollContainer = this.m_elContent[0].parentNode;
	var bScrolledToBottom = ( elScrollContainer.scrollHeight - elScrollContainer.clientHeight - 10 < elScrollContainer.scrollTop );


	if ( !this.m_dateLastMessage ||
		( timestamp.getYear() != this.m_dateLastMessage.getYear() ||
			timestamp.getMonth() != this.m_dateLastMessage.getMonth() ||
			timestamp.getDate() != this.m_dateLastMessage.getDate() ) )
	{
		// we show a timestamp if date last message is unset only if there's historical chat data,
		//	otherwise we'd just be putting today's date at the top of every chat which is a little strange
		if ( this.m_dateLastMessage || eMessageType == CWebChat.CHATMESSAGE_TYPE_HISTORICAL )
			this.m_elContent.append( $J( '<div/>', {'class': 'chat_message_system' } ).text( timestamp.toDateString() ) );

		this.m_dateLastMessage = timestamp;
	}

	var elChatMessage = this.RenderChatMessage( Sender, timestamp, strMessage, eMessageType );

	this.m_elContent.append( elChatMessage );

	if ( bScrolledToBottom )
		elScrollContainer.scrollTop = elScrollContainer.scrollHeight - elScrollContainer.clientHeight;
}

CWebChatDialog.prototype.RenderChatMessage = function( Sender, timestamp, strMessage, eMessageType )
{
	if ( !eMessageType )
		eMessageType = CWebChat.CHATMESSAGE_TYPE_NORMAL;

	var strMessageClass = 'chat_message';
	if ( eMessageType == CWebChat.CHATMESSAGE_TYPE_HISTORICAL )
		strMessageClass += ' chat_message_historical';
	else if ( eMessageType == CWebChat.CHATMESSAGE_TYPE_SELF )
		strMessageClass += ' chat_message_self';
	else if ( eMessageType == CWebChat.CHATMESSAGE_TYPE_SYSTEM )
		strMessageClass += ' chat_message_system';

	var elMessage = $J( '<div/>', {'class': strMessageClass } );

	elMessage.append( '[' + timestamp.toLocaleTimeString() + '] ' );

	if ( Sender )
	{
		var elName = $J('<span/>', {'class': 'sender persona ' + Sender.GetOnlineState() }).html( Sender.m_strName );
		elMessage.append( elName, ': ' );
	}

	// insert first as text to escape html
	var elText = $J('<span/>', {'class': 'chat_message_text' }).text( strMessage );
	// then format links
	elText.html( elText.html().replace( CWebChatDialog.s_regexLinks, '$1<a href="$2" class="whiteLink" target="_blank">$2</a>' ) );

	elMessage.append( elText );

	return elMessage;
};



function CWebChat( WebAPI, rgCurrentUser, rgFriendData, rgFriendGroupData )
{
	this.m_WebAPI = WebAPI;
	this.m_steamid = g_steamID;
	this.m_bOnline = false;
	this.m_nReconnectTimer = -1;
	this.m_pollid = 0;
	this.m_nSecTimeout = CWebChat.POLL_DEFAULT_TIMEOUT;
	this.m_cConsecutivePollFailures = 0;
	this.m_nUserIdleTime = 0;
	this.m_bWindowHasFocus = true;
	this.m_bSoundEnabled = false;

	this.m_rgPlayerCache = {};

	var rgUngroupedFriends = {};
	var rgRecentChatFriends = [];
	var rgAllFriends = [];
	for ( var i=0; i < rgFriendData.length; i++ )
	{
		var Friend = new CChatFriend( rgFriendData[i], ShowFriendChatClosure( this, rgFriendData[i].m_unAccountID ) );
		this.m_rgPlayerCache[ Friend.m_unAccountID ] = Friend;

		// will be used to build the FRIENDS group out of all friends not contained in another group
		rgUngroupedFriends[ Friend.m_unAccountID ] = Friend;

		// will be used to build the OFFLINE group which is all friends (the list itself filters to show only offline friends)
		rgAllFriends.push( Friend );

		// If there's some offline messages waiting, put them in the recent chat box
		if ( rgFriendData[i].m_cUnreadMessages > 0 )
			rgRecentChatFriends.push( Friend );
	}


	// build friends lists
	this.m_rgFriendLists = [];

	// create a special group to hold friends you've recently chatted with
	this.m_RecentChatsList = new CFriendsList( '#WebChat_FriendGroup_RecentChats', rgRecentChatFriends, CFriendsList.k_EFriendsListType_OnlineAndOffline );
	this.m_rgFriendLists.push( this.m_RecentChatsList );

	rgFriendGroupData.sort( function( a, b ) { return a.name.toLowerCase() > b.name.toLowerCase(); } );
	for ( var i = 0; i < rgFriendGroupData.length; i++ )
	{
		var rgGroup = rgFriendGroupData[i];
		var rgGroupMembers = [];
		for ( var iMember = 0; iMember < rgGroup.members.length; iMember ++ )
		{
			var unAccountID = rgGroup.members[iMember];
			if ( this.m_rgPlayerCache[unAccountID] )
				rgGroupMembers.push( this.m_rgPlayerCache[unAccountID] );

			rgUngroupedFriends[ unAccountID ] = null;
		}
		this.m_rgFriendLists.push( new CFriendsList( rgGroup.name, rgGroupMembers ) );
	}

	// create one last group of everyone we didn't put into the previous groups
	var rgUngroupedFriendsGroupMembers = [];
	for ( var unAccountID in rgUngroupedFriends )
	{
		if ( !rgUngroupedFriends[unAccountID] )
			continue;
		rgUngroupedFriendsGroupMembers.push( rgUngroupedFriends[unAccountID] );
	}
	this.m_rgFriendLists.push( new CFriendsList( '#WebChat_FriendGroup_Friends', rgUngroupedFriendsGroupMembers ) );
	this.m_rgFriendLists.push( new CFriendsList( '#WebChat_FriendGroup_Offline', rgAllFriends, CFriendsList.k_EFriendsListType_OfflineOnly, true /* start hidden */ ) );

	this.m_User = new CChatFriend( rgCurrentUser );
	this.m_User.m_bChatHistoryLoaded = true;	//no history to load for self
	this.m_rgPlayerCache[ this.m_User.m_unAccountID ] = this.m_User;

	// render the header section
	this.m_User.Render( $J('#chat_page_header_user'), true /* current user display */ );

	this.m_rgChatDialogs = {};

	this.m_ActiveFriend = null;

	var _this = this;
	$J(window).focus( function() { _this.OnWindowFocus() } );
	$J(window).blur( function() { _this.OnWindowBlur() } );
}
CWebChat.CHATMESSAGE_TYPE_NORMAL = 0;
CWebChat.CHATMESSAGE_TYPE_HISTORICAL = 1;
CWebChat.CHATMESSAGE_TYPE_SELF = 2;
CWebChat.CHATMESSAGE_TYPE_SYSTEM = 3;

CWebChat.POLL_DEFAULT_TIMEOUT = 20;
CWebChat.POLL_SUCCESS_INCREMENT = 5;
CWebChat.POLL_MAX_TIMEOUT = 120;

CWebChat.prototype.Initialize = function()
{
	this.LogOn();

	var _chat = this;

	// ask if we can show toasts
	if ( window.webkitNotifications && window.webkitNotifications.checkPermission() == 1 )
	{
		$J('#toast_enable').html( '#WebChat_EnableToasts' );
		$J('#toast_enable').click( function() {
			window.webkitNotifications.requestPermission();
			return false;
		} );
	}

	// enable sound if necessary
	var elAudio = document.getElementById( 'message_received_audio' );
	if ( elAudio && typeof elAudio.play == 'function' )
	{
		//html5 audio supported
		$J('#sound_enable').click( function() { _chat.ToggleSound() } );

		// if it hasn't been disabled...
		if ( !GetValueLocalStorage( 'webchat_soundmuted' ) )
			this.ToggleSound();
	}
	else
	{
		$J('#sound_toggle').hide();
	}


	for( var i=0; i < this.m_rgFriendLists.length; i++ )
	{
		var elFriendList = this.m_rgFriendLists[i].m_elGroup;
		$J('#chat_friendslist').append( elFriendList );
	}

	$J('#chatform').submit( function() { _chat.OnChatFormSubmit(); return false; } );
	$J('#chatmessage').keypress( function( event ) {
		if ( event.which == 13 )
		{
			event.preventDefault();
			if ( event.ctrlKey )
			{
				$J('#chatmessage').val( $J('#chatmessage').val() + '\n' );
			}
			else
			{
				_chat.OnChatFormSubmit();
			}
		}
		else if ( event.which == 10 )
		{
			$J('#chatmessage').val( $J('#chatmessage').val() + '\n' );
		}
	});

	// idle tracking
	$J(document).mousemove( function() { _chat.m_nUserIdleTime = 0; } );
	$J(document).keypress( function() { _chat.m_nUserIdleTime = 0; } );
	window.setInterval( function() { _chat.m_nUserIdleTime++; }, 1000 );

	var strChatStartupParam = GetValueLocalStorage( 'rgChatStartupParam' );
	if ( strChatStartupParam )
	{
		var rgChatStartupParam = V_ParseJSON( strChatStartupParam );
		this.RunStartupParam( rgChatStartupParam );
		UnsetValueLocalStorage( 'rgChatStartupParam' );
	}
};

CWebChat.prototype.SetOnline = function( bOnline )
{
	this.m_bOnline = bOnline;

	if ( this.m_bOnline )
	{
		if ( this.m_User.m_ePersonaState == 0 )
		{
			this.m_User.m_ePersonaState = 1;
			this.m_User.UpdateDisplayForPersonaState();
		}
	}
	else
	{
		this.m_User.m_ePersonaState = 0;
		this.m_User.UpdateDisplayForPersonaState();
	}
};

CWebChat.prototype.AttemptReconnect = function()
{
	if ( this.m_nReconnectTimer != -1 )
		return;

	//TODO: we always wait 5 seconds before attempting to connect again
	this.m_nReconnectTimer = window.setTimeout( $J.proxy( this.LogOn, this ), 5000 );
}

CWebChat.prototype.LogOn = function()
{
	this.m_WebAPI.ExecJSONP( 'ISteamWebUserPresenceOAuth', 'Logon', {}, true, null, 15 /* timeout */ )
		.done( $J.proxy( this.OnConnect, this ) )
		.fail( $J.proxy( this.OnConnectFail, this ) );
}

CWebChat.prototype.LogOff = function()
{
	if ( !this.m_bOnline )
		return;

	this.SetOnline( false );

	var rgParams = {
		umqid: this.m_umqid
	};
	this.m_WebAPI.ExecJSONP( 'ISteamWebUserPresenceOAuth', 'Logoff', rgParams, true ).done( $J.proxy( this.OnConnect, this ) );
};

function ShowFriendChatClosure( _chat, unAccountID )
{
	return function() { _chat.ShowFriendChat( unAccountID ); }
}

CWebChat.prototype.OnConnect = function( data )
{
	this.m_umqid = data.umqid;
	this.m_timestamp = data.timestamp;
	this.m_message = data.message;

	this.m_nReconnectTimer = -1;

	this.SetOnline( true );

	this.Poll();
};

CWebChat.prototype.OnConnectFail = function()
{
	this.m_nReconnectTimer = -1;
	this.AttemptReconnect();
};

CWebChat.prototype.Poll = function()
{
	if ( !this.m_bOnline )
		return;

	this.m_pollid++;

	var rgParams = {
		umqid: this.m_umqid,
		message: this.m_message,
		pollid: this.m_pollid,
		sectimeout: this.m_nSecTimeout,
		secidletime: this.m_nUserIdleTime,
		use_accountids: 1
	};

	var _chat = this;
	var pollid = this.m_pollid;


	this.m_WebAPI.ExecJSONP( 'ISteamWebUserPresenceOAuth', 'Poll', rgParams, true, null, this.m_nSecTimeout + 5 ).done(
		function( data ) { _chat.PollComplete( pollid, data ); }
	).fail(
		function() { _chat.PollFailed(); }
	);
};

CWebChat.prototype.PollComplete = function( pollid, data )
{
	if ( data.pollid != this.m_pollid )
	{
		// old response (possibley one that JQuery timed out but couldn't stop the script form loading)
		return;
	}

	if ( data.error == 'Timeout' )
	{
		// use the server's timeout time
		if ( data.sectimeout && data.sectimeout > CWebChat.POLL_DEFAULT_TIMEOUT )
			this.m_nSecTimeout = data.sectimeout;

		if ( this.m_nSecTimeout < CWebChat.POLL_MAX_TIMEOUT )
			this.m_nSecTimeout = Math.min( this.m_nSecTimeout + CWebChat.POLL_SUCCESS_INCREMENT, CWebChat.POLL_MAX_TIMEOUT );
	}
	else if ( data.error == 'OK' )
	{
		var messages = data.messages || [];
		var dateBaseTime = new Date();
		var nBaseMSOffset = data.timestamp;
		for ( var i = 0; i < messages.length; i++ )
		{
			var message = messages[i];
			var Friend = message.accountid_from ? this.m_rgPlayerCache[ message.accountid_from ] : null;
			if ( message.type == 'personastate' )
			{
				if ( Friend )
				{
					Friend.m_ePersonaState = message.persona_state;
					Friend.OnPersonaStateChange();

					// load new data from the server - other information like in-game state may have changed
					Friend.Refresh();
				}
			}
			else if ( message.type == 'saytext' || message.type == 'my_saytext' )
			{
				if ( Friend )
				{
					var nMSInPast = nBaseMSOffset - message.timestamp;
					var Sender = message.type == 'saytext' ? Friend : this.m_User;
					var eChatMessageType = ( message.type == 'saytext' ? CWebChat.CHATMESSAGE_TYPE_NORMAL : CWebChat.CHATMESSAGE_TYPE_SELF );

					if ( this.m_rgChatDialogs[ Friend.m_unAccountID ] )
					{
						this.m_rgChatDialogs[ Friend.m_unAccountID ].AppendChatMessage( Sender, new Date( dateBaseTime.getTime() - nMSInPast ), message.text, eChatMessageType );
					}

					if ( Sender != this.m_User )
					{
						if ( Friend != this.m_ActiveFriend || !this.m_bWindowHasFocus)
						{
							Friend.IncrementUnreadMessageCount();
							if ( this.m_bSoundEnabled )
								$J('#message_received_audio')[0].play();

							if ( window.webkitNotifications && window.webkitNotifications.checkPermission() == 0 )
							{
								var notification = window.webkitNotifications.createNotification( Friend.GetAvatarURL( 'medium' ), '#WebChat_NewChatMessage_Title'.replace( /%s/, Friend.m_strName ), message.text );
								var fnOnClick = Friend.m_fnOnClick;
								notification.onclick = function() { fnOnClick(); window.focus(); };
								notification.show();

								// chrome doesn't seem to dismiss these right now, so we'll give it 6 seconds
								window.setTimeout( function() { notification.close(); }, 6000 );
							}
						}

						this.AddToRecentChats( Friend );

						// this will not display the nag if the window has focus
						Friend.DisplayUnreadMessageTitleNag();
					}
					else
					{
						Friend.ResetUnreadMessageCount();	// this was an echo of the user's own chat from another device
					}
				}
			}
			else
			{
			}
		}

		this.m_message = data.messagelast;
	}
	else
	{
		this.PollFailed();
		return;	//PollFailed will handle failure.
	}

	this.SetOnline( true );

	this.m_cConsecutivePollFailures = 0;
	this.Poll();
};

CWebChat.prototype.PollFailed = function()
{
	this.m_cConsecutivePollFailures++;

	// display offline so the user knows something's up
	this.SetOnline( false );

	// after 1 failure, try to back off on our success increment
	if ( this.m_cConsecutivePollFailures == 1 )
	{
		if ( this.m_nSecTimeout > CWebChat.POLL_DEFAULT_TIMEOUT )
		{
			this.m_nSecTimeout -= CWebChat.POLL_SUCCESS_INCREMENT;
			this.m_nMaxTimeout = this.m_nSecTimeout;
		}
	}

	// we'll try 3 times to just poll again
	if ( this.m_cConsecutivePollFailures < 3 )
	{
		this.Poll();
	}
	else
	{
		// something bad going on
		this.AttemptReconnect();
	}
};

// this is a param from the URL that launched webchat or a url clicked in another browser while webchat was running
CWebChat.prototype.RunStartupParam = function( rgChatStartupParam )
{
	if ( rgChatStartupParam.friend )
	{
		var unAccountID = rgChatStartupParam.friend;
		if ( this.m_rgPlayerCache[unAccountID] && this.m_User.m_unAccountID != unAccountID )
		{
			this.ShowFriendChat( unAccountID );
		}
	}
};

CWebChat.prototype.ShowFriendChat = function( unAccountID, bForce )
{
	var Friend = this.m_rgPlayerCache[unAccountID];
	if ( this.m_ActiveFriend == Friend && !bForce )
		return;

	if ( this.m_ActiveFriend && this.m_rgChatDialogs[ this.m_ActiveFriend.m_unAccountID ] )
		this.m_rgChatDialogs[ this.m_ActiveFriend.m_unAccountID ].m_elDialog.hide();

	this.m_ActiveFriend = Friend;

	Friend.ResetUnreadMessageCount();
	$J('#chat_msg_area').show();
	$J('#chatmessage').focus();

	if ( this.m_rgChatDialogs[ Friend.m_unAccountID ] )
	{
		this.m_rgChatDialogs[ Friend.m_unAccountID ].m_elDialog.show();
	}
	else if ( !Friend.m_bChatHistoryLoaded )
	{
		var elDialog = $J('<div/>', {'class': 'chat_dialog'} );
		$J('#chatlog').append( elDialog )
		var elHeader = Friend.RenderChatDialog();
		var elContentWrapper = $J('<div/>', {'class': 'chat_dialog_content'} );
		var elScrollWrapper = $J('<div/>', {'class': 'chat_dialog_scroll' } );
		var elContent = $J('<div/>', {'class': 'chat_dialog_content_inner'} );
		elContent.html('<img src="http://cdn.steamcommunity.com/public/images/login/throbber.gif">');

		elDialog.append( elHeader, elContentWrapper.append( elScrollWrapper.append( elContent ) ) );
		this.m_rgChatDialogs[ Friend.m_unAccountID ] = new CWebChatDialog( elDialog, elContent );

		this.LoadChatHistory( Friend, this.m_rgChatDialogs[ Friend.m_unAccountID ] );
	}
};

CWebChat.prototype.LoadChatHistory = function( Friend, ChatDialog )
{
	if ( !Friend.m_bChatHistoryLoaded )
	{
		var _chat = this;
		$J.ajax( {
			url: 'http://steamcommunity.com/chat/chatlog/' + Friend.m_unAccountID,
			data: { sessionid: g_sessionID },
			type: 'POST'
		}).done( function( data ) { _chat.OnChatHistoryLoaded( Friend, ChatDialog, data ); } );
	}
};

CWebChat.prototype.OnChatHistoryLoaded = function ( Friend, ChatDialog, data )
{
	Friend.m_bChatHistoryLoaded = true;
	Friend.m_rgChatLog = data;

	ChatDialog.m_elContent.html('');	//clear the throbber

	var elPhishingWarning = $J( '<div/>', {'class': 'chat_message chat_message_system' } );
	elPhishingWarning.append( $J( '<a/>', {'class': 'whiteLink', href: 'https://support.steampowered.com/kb_article.php?p_faqid=301', target: '_blank' }).text( '#WebChat_NeverTellYourPassword' ) );
	ChatDialog.m_elContent.append( elPhishingWarning );

	for ( var i = 0; i < Friend.m_rgChatLog.length; i++ )
	{
		var sChatMessage = Friend.m_rgChatLog[i];

		var Sender = this.m_rgPlayerCache[ sChatMessage.m_unAccountID ];
		if ( Sender )
		{
			var timestamp = new Date( sChatMessage.m_tsTimestamp * 1000 );

			var eChatType = CWebChat.CHATMESSAGE_TYPE_NORMAL;
			if ( timestamp <= Friend.m_tsLastView )
				eChatType = CWebChat.CHATMESSAGE_TYPE_HISTORICAL;
			else if ( Sender == this.m_User )
				eChatType = CWebChat.CHATMESSAGE_TYPE_SELF;

			ChatDialog.AppendChatMessage( Sender, timestamp, sChatMessage.m_strMessage, eChatType );
		}
	}
};

CWebChat.prototype.AddToRecentChats = function( Friend )
{
	this.m_RecentChatsList.AddIfNotInList( Friend );
};

CWebChat.prototype.OnChatFormSubmit = function()
{
	if ( !this.m_ActiveFriend )
		return;

	var strMessage = $J.trim( $J('#chatmessage').val() );

	if ( strMessage.length == 0 )
		return;

	$J('#chatmessage').val('');

	var ulSteamIDActive = this.m_ActiveFriend.m_ulSteamID;

	var rgParams = {
		umqid: this.m_umqid,
		type: 'saytext',
		steamid_dst: ulSteamIDActive,
		text: strMessage
	};

	var _chat = this;
	var Friend = this.m_ActiveFriend; //capture friend at time of sending

	this.AddToRecentChats( Friend );

	// echo immediately
	var elMessage = _chat.m_rgChatDialogs[ Friend.m_unAccountID ].AppendChatMessage( _chat.m_User, new Date(), strMessage, CWebChat.CHATMESSAGE_TYPE_SELF );
	$J('#chatmessage').focus();

	this.m_WebAPI.ExecJSONP( 'ISteamWebUserPresenceOAuth', 'Message', rgParams, true ).done( function(data) {

	}).fail( function () {
		$J('#chatmessage').val( strMessage );
		alert( 'Failed to send chat message' );
	});
}

CWebChat.prototype.OnWindowFocus = function()
{
	if ( !this.m_bWindowHasFocus )
	{
		if ( this.m_ActiveFriend )
			this.m_ActiveFriend.ResetUnreadMessageCount();
		this.m_bWindowHasFocus = true;
	}
}

CWebChat.prototype.OnWindowBlur = function()
{
	this.m_bWindowHasFocus = false;
}

CWebChat.prototype.ToggleSound = function()
{
	if ( this.m_bSoundEnabled )
	{
		this.m_bSoundEnabled = false;
		$J('#sound_enable').text( '#WebChat_Sound_Disabled' );
		SetValueLocalStorage( 'webchat_soundmuted' );
	}
	else
	{
		this.m_bSoundEnabled = true;
		$J('#sound_enable').text( '#WebChat_Sound_Enabled' );
		UnsetValueLocalStorage( 'webchat_soundmuted' );
	}
}

function InitializeChat()
{
	Chat.Initialize();

	CTitleManager.Initialize();

	$J(window).resize( OnChatWindowResize );
	$J(window).resize();

	$J(window).unload( OnChatWindowUnload );
}

function OnChatWindowResize()
{
	var height = Math.max( $J(window).height() - 140, 400 );
	$J('#chat_container').height( height );
}

function OnChatWindowUnload()
{
	if ( Chat.m_bOnline )
	{
		Chat.LogOff();

		// "this is pretty wonky"
		var iters = 0;
		var start = new Date().getMilliseconds();
		while ( iters < 10000000 && ( new Date().getMilliseconds() - start ) < 30 ) { iters++; }
	}
}

// fired by external windows when the user clicks a link to chat (eg, "Message friend" link)
function OnWebchatLaunchURL( params )
{
	Chat.RunStartupParam( params );
}

var CTitleManager = {
	m_rgCurrentMessages: [ {key: 'base', message: 'Steam Community :: #WebChat_Title' } ],
	m_nTimer: -1,
	m_iCurrentMessage: 0,
	m_bWindowHasFocus: true,

	Initialize: function()
	{
		var _this = this;
		$J(window).focus( function() { _this.OnWindowFocus(); } );
		$J(window).blur( function() { _this.OnWindowBlur(); } );
	},

	AddMessage: function( strKey, strMessageText )
	{
		if ( this.m_bWindowHasFocus )
			return;

		for ( var i=0; i < this.m_rgCurrentMessages.length; i++ )
		{
			if ( this.m_rgCurrentMessages[i].key == strKey )
			{
				this.m_rgCurrentMessages[i].message = strMessageText;
				return;
			}
		}
		this.m_rgCurrentMessages.push( { key: strKey, message: strMessageText } );

		if ( this.m_nTimer < 0 )
			this.StartInterval();

		this.UpdateTitle();
	},

	RemoveMessage: function( strKey )
	{
		var index = -1;
		for ( var i=0; i < this.m_rgCurrentMessages.length; i++ )
		{
			if ( this.m_rgCurrentMessages[i].key == strKey )
			{
				index = i;
				break;
			}
		}
		if ( index != -1 )
		{
			this.m_rgCurrentMessages.splice( index, 1 );
			this.UpdateTitle();
		}
	},

	OnWindowFocus: function()
	{
		this.m_bWindowHasFocus = true;

		// remove all messages
		this.m_rgCurrentMessages.splice( 1, this.m_rgCurrentMessages.length - 1 );
		this.UpdateTitle();	// will reset the title now that there's only one entry
	},

	OnWindowBlur: function()
	{
		this.m_bWindowHasFocus = false;
	},

	StartInterval: function()
	{
		var _this = this;
		this.m_nTimer = window.setInterval( function() { _this.UpdateTitle(); }, 2000 );
	},

	ClearInterval: function()
	{
		window.clearInterval( this.m_nTimer );
		this.m_nTimer = -1;
	},

	UpdateTitle: function()
	{
		this.m_iCurrentMessage = (this.m_iCurrentMessage + 1) % this.m_rgCurrentMessages.length;

		document.title = this.m_rgCurrentMessages[ this.m_iCurrentMessage ].message;

		if ( this.m_rgCurrentMessages.length == 1 )
			this.ClearInterval();
	}
}

