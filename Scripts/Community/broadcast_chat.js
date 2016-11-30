"use strict";

var CBroadcastChat = function( broadcastSteamID )
{
	this.m_broadcastSteamID = broadcastSteamID;
	this.m_ulBroadcastID = 0;

	this.m_strPersonaName = '';
	this.m_steamID = '';
	this.m_unInstanceID = Math.floor( Math.random() * 4294967296 );
	this.m_webapi = null;

	this.m_ulChatID = 0;
	this.m_tsFirstRequest = null;
	this.m_nFromFirstRequestMS = 0;
	this.m_nNextChatTS = 0;
	this.m_cConsecutiveErrors = 0;
	this.m_bReconnecting = false;
	this.m_regexUserEmoticons = null;

	this.m_bAutoScroll = true;
	this.m_nLastHeight = 0;
	this.m_mapMutedUsers = {};

	var _chat = this;
	$J( document ).on( 'keydown.BroadcastChat', function( e )
	{
		if ( e.keyCode == 27 && $J( '#ChatMessageMenuBackground' ).is( ':visible' ) )
			_chat.HideChatMessageMenu();
	});

	$J(window).resize(function(event){
		_chat.UpdateScroll();
		$J('.scrollbar').perfectScrollbar('update');
	});

	$J('#ChatBox').scroll(function(){
		// If our viewport wasn't just resized, lets take a look at the new scrollheight and see
		// if maybe the user doesn't want to be at the bottom
		if( _chat.m_nLastHeight == this.offsetHeight )
		{
			var nDelta = this.scrollTop - (this.scrollHeight - this.offsetHeight);
			_chat.m_bAutoScroll = Math.abs( nDelta ) < 6;
		}
	});
};

CBroadcastChat.s_MessageRetryMax = 4;
CBroadcastChat.s_MessageRetryDelay = 500;
CBroadcastChat.s_regexEmoticons = new RegExp( '\u02D0([^\u02D0]*)\u02D0', 'g' );
CBroadcastChat.s_regexLinks = new RegExp( '(^|[^=\\]\'"])(https?://[^ \'"<>]*)', 'gi' );
CBroadcastChat.s_regexDomain = new RegExp( '^(?:https?://)?([^/?#]+?\\.)?(([^/?#.]+?)\\.([^/?#]+?))(?=[/?#]|$)', 'i' );
CBroadcastChat.s_regexValveDomains = new RegExp( '^https?://(?:[^/?#]+?\\.)?(?:valvesoftware|steamcommunity|steampowered)\\.com(?:/?#|$)', 'i' );
CBroadcastChat.m_rgWhitelistedDomains = ["vimeo.com","youtu.be","youtube.com","digg.com","facebook.com","google.com","reddit.com","twitter.com","developconference.com","diygamer.com","gdconf.com","indiecade.com","kickstarter.com","indiegogo.com","moddb.com","oculusvr.com","tigsource.com","indiedb.com","gdcvault.com","1up.com","destructoid.com","engadget.com","escapistmagazine.com","gametrailers.com","gizmodo.com","guardiannews.com","guardian.co.uk","ifanzine.com","igf.com","ign.com","indiegamemag.com","kotaku.com","mobot.net","modojo.com","pcgamer.com","rockpapershotgun.com","shacknews.com","toucharcade.com","wired.com","wired.co.uk","imageshack.com","imageshack.us","games-workshop.com","steamcontroller.buka.ru","steamlink.buka.ru","e-clubmalaysia.com","gameplanet.com","degica.com"];

CBroadcastChat.prototype.GetChatID = function()
{
	return this.m_ulChatID;
};

CBroadcastChat.prototype.SetOwnedEmoticons = function( rgEmoticons )
{
	var rgEmoticonsStripped = [];
	for ( var i = 0; i < rgEmoticons.length; i++ )
	{
		var strEmoticon = rgEmoticons[i];
		if ( strEmoticon.length >= 2 && strEmoticon[0] == ':' )
			rgEmoticonsStripped.push( strEmoticon.substr( 1, strEmoticon.length - 2 ) );
		else
			rgEmoticonsStripped.push( strEmoticon );	//dunno
	}
	var strRegex = ':(' + rgEmoticonsStripped.join( '|' ) + '):';
	this.m_regexUserEmoticons = new RegExp( strRegex, 'g' );
};

CBroadcastChat.prototype.RequestChatInfo = function( ulBroadcastID )
{
	var _chat = this;

	if ( ulBroadcastID == this.m_ulBroadcastID )
		return;

	this.m_ulBroadcastID = ulBroadcastID;
	this.m_cConsecutiveErrors = 0;
	this.m_bReconnecting = false;

	$J('#chatmessage').keydown(function(event)
	{
		var isShift = event.shiftKey ? true : false;
		if (!isShift && event.keyCode == 13)
		{
			_chat.ChatSubmit();
			return false;
		}
	});

	this.log( this.m_ulBroadcastID );
	$J.ajax(
	{
		url: 'http://steamcommunity.com/broadcast/getchatinfo/',
		type: 'GET',
		data: {
			steamid: this.m_broadcastSteamID,
			broadcastid: this.m_ulBroadcastID
		},
		dataType: 'json'
	})
	.done( function( rgResult )
	{
		if ( rgResult.view_url_template != undefined )
		{
			_chat.m_strChatURL = rgResult.view_url_template;
		}
		else
		{
			_chat.m_strChatURL = rgResult.view_url;
		}
		_chat.m_ulChatID = rgResult.chat_id;

				if ( rgResult.persona_name )
			_chat.m_strPersonaName = rgResult.persona_name;

		if ( rgResult.steamid )
        	_chat.m_steamID = rgResult.steamid;

		if ( rgResult.token )
			_chat.m_webapi = new CWebAPI( rgResult.webapi_host, rgResult.webapi_host_secure, rgResult.token );

		if ( rgResult.emoticons )
			_chat.SetOwnedEmoticons( rgResult.emoticons );

		_chat.log("Chat ID is now " + rgResult.chat_id );
		_chat.BeginRequestLoop();
	})
	.fail( function( rgResult )
	{
		_chat.log("Failed to get chat info!" );
	});
};

CBroadcastChat.prototype.log = function( strMsg )
{
	console.log("%c BroadcastChat: " + strMsg, 'background: #171717; color: #57cbde');
};

CBroadcastChat.prototype.BeginRequestLoop = function()
{
	var context = this;
	this.log("Beginning request loop");

	setTimeout( function() { context.RequestLoop() }, 0 );
};

CBroadcastChat.prototype.RequestLoop = function()
{
	var _chat = this;
	var rgRequest = {};
	var strChatURL = this.m_strChatURL.replace( "{0}", _chat.m_nNextChatTS );

	if ( strChatURL == this.m_strChatURL )
	{
		if( _chat.m_nNextChatTS > 0 )
			rgRequest.t = _chat.m_nNextChatTS;
	}

	$J.ajax(
	{
		url: strChatURL,
		type: 'GET',
		data: rgRequest,
		dataType: 'json'
	})
	.done( function( rgResponse )
	{
		_chat.m_cConsecutiveErrors = 0;

		// add any messages we received
		if ( rgResponse.messages )
		{
			for( var i = 0; i < rgResponse.messages.length; i++ )
			{
				if( rgResponse.messages[i].steamid == _chat.m_steamID && rgResponse.messages[i].instance_id == _chat.m_unInstanceID )
					continue;

				if ( _chat.IsUserMutedLocally( rgResponse.messages[i].steamid ) )
					continue;

				_chat.DisplayChatMessage( rgResponse.messages[i].persona_name, rgResponse.messages[i].in_game, rgResponse.messages[i].steamid, rgResponse.messages[i].msg, false );
			}
		}

		if ( rgResponse.joined )
		{
			for ( var i = 0; i < rgResponse.joined.length; i++ )
			{
				if( rgResponse.joined[i].steamid != _chat.m_steamID )
					_chat.DisplayChatNotification( '%s joined the chat'.replace( /%s/, rgResponse.joined[i].persona_name ) );
			}
		}

		if ( rgResponse.left )
		{
			for ( var i = 0; i < rgResponse.left.length; i++ )
			{
				if( rgResponse.left[i].steamid != _chat.m_steamID )
					_chat.DisplayChatNotification( '%s left the chat'.replace( /%s/, rgResponse.left[i].persona_name ) );
			}
		}

		if ( rgResponse.muted )
		{
			for ( var i = 0; i < rgResponse.muted.length; i++ )
			{
				var strMsg = ( rgResponse.muted[i].muted == _chat.m_steamID ) ? 'You has been muted and can not post messages to this chat' : '%s has been muted in this chatroom';
				_chat.DisplayChatNotification( strMsg.replace( /%s/, rgResponse.muted[i].persona_name ) );
			}
		}

		if ( rgResponse.remove_msgs )
		{
			for ( var i = 0; i < rgResponse.remove_msgs.length; i++ )
			{
				_chat.RemoveUserMessages( rgResponse.remove_msgs[i].steamid );
			}
		}

		_chat.TrimChat();

		// check if first request or we received initial_delay which will allow us to resync time
		var nSleepMS = 0;
		if( _chat.m_tsFirstRequest == null || _chat.m_nNextChatTS == 0 || rgResponse.initial_delay )
		{
			if ( rgResponse.initial_delay === 'undefined' )
			{
				_chat.log( 'Need initial_delay to know when to request first chat message' );
				return;
			}

			_chat.m_tsFirstRequest = performance.now() + rgResponse.initial_delay;
			_chat.m_nFromFirstRequestMS = 0;
			_chat.m_nNextChatTS = rgResponse.next_request;

			nSleepMS = rgResponse.initial_delay;
		}
		else
		{
			if ( rgResponse.next_request < _chat.m_nNextChatTS )
			{
				_chat.log( 'Next request in past' );
				return;
			}

			_chat.m_nFromFirstRequestMS += rgResponse.next_request - _chat.m_nNextChatTS;
			_chat.m_nNextChatTS = rgResponse.next_request;

			nSleepMS = (_chat.m_tsFirstRequest + _chat.m_nFromFirstRequestMS) - performance.now();
		}

		if ( _chat.m_bReconnecting )
		{
			_chat.DisplayChatNotification( 'Reconnected to chat' );
			_chat.m_bReconnecting = false;
		}

		if( nSleepMS <= 0 )
			_chat.RequestLoop();
		else
			setTimeout( function() { _chat.RequestLoop(); }, nSleepMS );
	})
	.fail( function(result)
	{
		_chat.log( 'Failed to get chat messages' );

		_chat.m_cConsecutiveErrors++;
		if ( _chat.m_cConsecutiveErrors >= CBroadcastChat.s_MessageRetryMax )
		{
			if ( _chat.m_tsFirstRequest == null )
			{
								_chat.DisplayChatError( 'Unable to join chat' );
				return;
			}

			_chat.m_cConsecutiveErrors = 0;
			_chat.m_bReconnecting = true;
			_chat.SyncChat();
		}

		setTimeout( function() { _chat.RequestLoop(); }, CBroadcastChat.s_MessageRetryDelay );
	});
};

CBroadcastChat.prototype.SyncChat = function()
{
	this.m_tsFirstRequest = null;
	this.m_nFromFirstRequestMS = 0;
	this.m_nNextChatTS = 0;
};

CBroadcastChat.prototype.AddLinks = function( strHTML )
{
	// links are tested to see if they are from trustworthy domains. Untrusted
	// domains are wrapped with the linkfilter.
	strHTML = strHTML.replace( CBroadcastChat.s_regexLinks, function( match, s1, s2 )
	{
		var bTrustedDomain = function()
		{
			if ( s2.match( CBroadcastChat.s_regexValveDomains ) )
				return true;

			var rgTLDCandidates = s2.match( CBroadcastChat.s_regexDomain );
			if ( !rgTLDCandidates )
				return false;

			for ( var j = CBroadcastChat.m_rgWhitelistedDomains.length - 1; j >= 0; --j )
			{
				if ( CBroadcastChat.m_rgWhitelistedDomains[j] == rgTLDCandidates[2].toLowerCase() )
					return true;
			}
			return false;
		}();

		if ( bTrustedDomain )
			return ( s1 + '<a href="' + s2 + '" class="whiteLink" target="_blank">' + s2 + '</a>' );
		else
			return ( s1 + '<a href="https://steamcommunity.com/linkfilter/?url=' + s2 + '" class="whiteLink" target="_blank" rel="noreferrer">' + s2 + '</a>' );
	} );

	return strHTML;
};

CBroadcastChat.prototype.AddEmoticons = function( strHTML, steamID, bLocal )
{
	var regexEmoticons = CBroadcastChat.s_regexEmoticons;
	if( bLocal )
		regexEmoticons = this.m_regexUserEmoticons;

	return strHTML.replace( regexEmoticons, '<img class="emoticon" src="https://steamcommunity-a.akamaihd.net/economy/emoticon/$1">' );
};


CBroadcastChat.prototype.DisplayChatMessage = function( strPersonaName, bInGame, steamID, strMessage, bLocal )
{
	var _chat = this;

		var elMessage = $J('#ChatMessageTemplate').clone();
	elMessage.attr( 'id', '' );
	elMessage.attr( 'data-steamid', steamID );

	var elChatName = $J( '.tmplChatName', elMessage );
	elChatName.text( strPersonaName );
	elChatName.attr( 'href', 'http://steamcommunity.com/profiles/' + steamID );
	elChatName.attr( 'data-miniprofile', 's' + steamID );

	if ( bInGame )
		elChatName.parent().addClass( 'InGame' );

	if ( steamID == this.m_broadcastSteamID )
		elMessage.addClass( 'Broadcaster' );

	var elText = $J( '.tmplChatMessage', elMessage ).text( strMessage );

		var strHTML = elText.html();
	strHTML = this.AddEmoticons( strHTML, steamID, bLocal );
	strHTML = this.AddLinks( strHTML );

	elText.html( strHTML );

	elMessage.show();

	$J('#ChatMessages').append(elMessage);

	// if text is too long, add expand button
	var elText = $J( '.tmplChatMessage', elMessage );
	if ( elText.height() > elMessage[0].clientHeight )
	{
		var elExpand = $J( '<div class="ChatExpand">+</div>' );
		elMessage.append( elExpand );
		elExpand.on( 'click', function() { elMessage.addClass( 'Expand' ); _chat.UpdateScroll(); } );
	}

	this.UpdateScroll();
};

CBroadcastChat.prototype.TrimChat = function()
{
	var $messages = $J('#ChatMessages');
	if ( $messages.children().length < 525 )
		return;

	var $box = $J('#ChatBox');
	var nPrevHeight = $box[0].scrollHeight;
	while ( $messages.children().length > 500 )
	{
		var $child = $messages.children().first();
		$child.remove();
	}

	$box.scrollTop( $box.scrollTop() - (nPrevHeight - $box[0].scrollHeight ) );
	$J('.scrollbar').perfectScrollbar('update');
};

CBroadcastChat.prototype.UpdateScroll = function()
{
	if ( $J( '#ChatMessageMenuBackground' ).is( ':visible' ) )
		return;

	if( this.m_bAutoScroll )
		this.ScrollToBottom();

	this.m_nLastHeight = $J('#ChatBox')[0].offsetHeight;
};

CBroadcastChat.prototype.ScrollToBottom = function()
{
	$J('#ChatBox').scrollTop( $J('#ChatBox').prop("scrollHeight") );
};

CBroadcastChat.prototype.DisplayChatError = function( strError )
{
	var eleMessage = $J( '#ChatErrorTemplate' ).clone();
	$J('.tmplChatError',eleMessage ).text( strError );
	eleMessage.show();
	$J('#ChatMessages').append( eleMessage );
	$J('#ChatBox').scrollTop( $J( '#ChatBox' ).prop( "scrollHeight" ) );
};

CBroadcastChat.prototype.DisplayChatNotification = function( strNotification )
{
	var eleMessage = $J( '#ChatNotificationTemplate' ).clone();
	$J('.tmplChatNotification',eleMessage ).text( strNotification );
	eleMessage.show();
	$J('#ChatMessages').append( eleMessage );
	$J('#ChatBox').scrollTop( $J( '#ChatBox' ).prop( "scrollHeight" ) );
};

CBroadcastChat.prototype.ChatSubmit = function()
{
	var strMessage = $J.trim( $J('#chatmessage').val() );

	if ( strMessage.length == 0 )
		return;

	$J('#chatmessage').val('');
	$J('#chatmessage').focus();

	var rgParams = {
		chat_id: this.m_ulChatID,
		message: strMessage,
		instance_id: this.m_unInstanceID
	};

	var _chat = this;
	this.m_webapi.ExecJSONP( 'IBroadcastService', 'PostChatMessage', rgParams, true, null, 15 )
	.done( function( response )
	{
		response = response.response;
		if ( response.result && response.result != 1 )
		{
			var strError = "";
			if ( response.result == 17 )
				strError = 'You has been muted and can not post messages to this chat';
			else
				strError = 'Failed to send chat message: %s'.replace( /%s/, strMessage );

			_chat.DisplayChatError( strError );
			return;
		}

		_chat.DisplayChatMessage( response.persona_name, response.in_game, _chat.m_steamID, strMessage, true );
	})
	.fail( function()
	{
		_chat.DisplayChatError( 'Failed to send chat message: %s'.replace( /%s/, strMessage ) );
	});
};

CBroadcastChat.prototype.ShowChatMessageMenu = function( elButton )
{
	var elMenu = $J( '#ChatMessageMenuBackground' );
	elMenu.show();

	var elMessage = $J( elButton ).closest( '.ChatMessage' );
	elMenu.data( 'elMessage', elMessage );
	elMessage.addClass( 'ShowingMenu' );

	// enable options
	if ( this.IsUserMutedLocally( elMessage.data( 'steamid' ) ) )
	{
		elMenu.find( '#MuteOption' ).hide();
		elMenu.find( '#UnmuteOption' ).show();
	}
	else
	{
		elMenu.find( '#MuteOption' ).show();
		elMenu.find( '#UnmuteOption' ).hide();
	}

	// position modal
	var rectBody = document.body.getBoundingClientRect();
	var rectViewerBtn = elButton.getBoundingClientRect();
	var nTop = rectViewerBtn.bottom - rectBody.top + 2;
	var nRight = rectBody.right - rectViewerBtn.right;
	$J( '#ChatMessageMenu' ).css( {top: nTop, right: nRight} );
};

CBroadcastChat.prototype.HideChatMessageMenu = function()
{
	var elMessage = $J( '#ChatMessageMenuBackground' ).data( 'elMessage' );
	elMessage.removeClass( 'ShowingMenu' );

	$J( '#ChatMessageMenuBackground' ).hide();
	this.UpdateScroll();
};

CBroadcastChat.prototype.MuteChatMessageUser = function()
{
	var elMessage = $J( '#ChatMessageMenuBackground' ).data( 'elMessage' );
	this.MuteUserByMessage( elMessage );

	this.HideChatMessageMenu();
	this.ScrollToBottom();
	this.UpdateScroll();
};

CBroadcastChat.prototype.UnmuteChatMessageUser = function()
{
	var elMessage = $J( '#ChatMessageMenuBackground' ).data( 'elMessage' );
	this.UnmuteUserByMessage( elMessage );

	this.HideChatMessageMenu();
	this.ScrollToBottom();
	this.UpdateScroll();
};

CBroadcastChat.prototype.MuteUserByMessage = function( elMessage )
{
	var steamID = elMessage.data( 'steamid' );
	var elChatName = $J( '.tmplChatName', elMessage );

	this.MuteUser( steamID, elChatName.text() );
};

CBroadcastChat.prototype.UnmuteUserByMessage = function( elMessage )
{
	var steamID = elMessage.data( 'steamid' );
	var elChatName = $J( '.tmplChatName', elMessage );

	this.UnmuteUser( steamID, elChatName.text() );
};

CBroadcastChat.prototype.MuteUser = function( steamID, strPersonaName )
{
	if ( steamID == this.m_steamID )
		return;

	// can't mute the broadcaster
	if ( this.m_broadcastSteamID == steamID )
		return;

	var bOwner = (this.m_broadcastSteamID == this.m_steamID);
	if ( !this.m_mapMutedUsers[ steamID ] )
	{
		this.m_mapMutedUsers[ steamID ] = strPersonaName;

				var rgParams =
		{
			chat_id: this.m_ulChatID,
			user_steamid: steamID,
			muted: 1
		};

		var _chat = this;
		this.m_webapi.ExecJSONP( 'IBroadcastService', 'MuteBroadcastChatUser', rgParams, true, null, 15 )
		.done( function( response )
		{
			response = response.response;
					})
		.fail( function()
		{
						if ( bOwner )
			{
				_chat.DisplayChatError( 'Failed to mute %s. Please try again.'.replace( /%s/, strPersonaName ) );
				delete _chat.m_mapMutedUsers[ steamID ];
			}
		});
	}

		if ( !bOwner )
		this.DisplayChatNotification( '%s has been muted'.replace( /%s/, strPersonaName ) );
};

CBroadcastChat.prototype.UnmuteUser = function( steamID, strPersonaName )
{
	if ( steamID == this.m_steamID )
		return;

		if ( this.m_mapMutedUsers[ steamID ] )
		delete this.m_mapMutedUsers[ steamID ];

	var bOwner = (this.m_broadcastSteamID == this.m_steamID);
	if ( bOwner )
	{
				var rgParams =
		{
			chat_id: this.m_ulChatID,
			user_steamid: steamID,
			muted: 0
		};

		var _chat = this;
		this.m_webapi.ExecJSONP( 'IBroadcastService', 'MuteBroadcastChatUser', rgParams, true, null, 15 )
		.done( function( response )
		{
			_chat.DisplayChatNotification( '%s has been unmuted'.replace( /%s/, strPersonaName ) );
		})
		.fail( function()
		{
			_chat.DisplayChatError( 'Failed to unmute %s. Please try again.'.replace( /%s/, strPersonaName ) );
		});
	}
	else
	{
		this.DisplayChatNotification( '%s has been unmuted'.replace( /%s/, strPersonaName ) );
	}
};

CBroadcastChat.prototype.IsUserMutedLocally = function( steamID )
{
	if ( this.m_mapMutedUsers[ steamID ] )
		return true;

	return false;
};

CBroadcastChat.prototype.GetMutedUsers = function()
{
	var rgSteamID = [];
	jQuery.each( this.m_mapMutedUsers, function( i, val )
	{
		rgSteamID.push( i );
	});

	return rgSteamID;
};

CBroadcastChat.prototype.RemoveUserMessages = function( steamID )
{
	var str = ".ChatMessage[data-steamid='" + steamID + "']";
	$J( '#ChatMessages' ).find( str ).remove();

	$J('.scrollbar').perfectScrollbar('update');
};

CBroadcastChat.prototype.OnRemoveUserMessages = function()
{
	var elMessage = $J( '#ChatMessageMenuBackground' ).data( 'elMessage' );
	var steamID = elMessage.data( 'steamid' );
	var strPersonaName = $J( '.tmplChatName', elMessage ).text();

	if ( steamID == this.m_steamID )
		return;

	// send request
	var rgParams =
	{
		chat_id: this.m_ulChatID,
		user_steamid: steamID,
	};

	var _chat = this;
	this.m_webapi.ExecJSONP( 'IBroadcastService', 'RemoveUserChatText', rgParams, true, null, 15 )
	.done( function( response )
	{
			})
	.fail( function()
	{
		_chat.DisplayChatError( 'Failed to remove messages for %s. Please try again.'.replace( /%s/, strPersonaName ) );
	});

	// close menu
	this.HideChatMessageMenu();
	this.ScrollToBottom();
	this.UpdateScroll();
};
