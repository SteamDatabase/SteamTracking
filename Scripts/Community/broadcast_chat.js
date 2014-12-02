"use strict"

var CBroadcastChat = function( broadcastSteamID )
{
	this.m_broadcastSteamID = broadcastSteamID;
	this.m_ulBroadcastID = 0;

	this.m_strPersonaName = '';
	this.m_steamID = ''
	this.m_unInstanceID = Math.floor( Math.random() * 4294967296 );
	this.m_webapi = null;

	this.m_ulChatID = 0;
	this.m_rtFirstRequest = 0;
	this.m_nFromFirstRequestMS = 0;
	this.m_nNextChatTS = 0;
	this.m_cConsecutiveErrors = 0;
	this.m_bReconnecting = false;
	this.m_regexUserEmoticons = null;

	this.m_bAutoScroll = true;
	this.m_nLastHeight = 0;

	var context = this;

	$J(window).resize(function(event){
		context.UpdateScroll();
		$J('.scrollbar').perfectScrollbar('update');
	});

	$J('#ChatBox').scroll(function(){
		// If our viewport wasn't just resized, lets take a look at the new scrollheight and see
		// if maybe the user doesn't want to be at the bottom
		if( context.m_nLastHeight == this.offsetHeight )
			context.m_bAutoScroll = this.scrollTop == (this.scrollHeight - this.offsetHeight);
	});
};

CBroadcastChat.s_MessageRetryMax = 4;
CBroadcastChat.s_MessageRetryDelay = 500;
CBroadcastChat.s_regexEmoticons = new RegExp( '\u02D0([^\u02D0]*)\u02D0', 'g' );
CBroadcastChat.s_regexLinks = new RegExp( '(^|[^=\\]\'"])(https?://[^ \'"<>]*)', 'gi' );
CBroadcastChat.s_regexDomain = new RegExp( 'https?://[^/?]*?((?:[^/?]+\.)?([^/?]+\.[^/?]+))(?:[/?]|$)', 'i' );
CBroadcastChat.s_regexValveDomains = new RegExp( '^https?://[^/?]*(?:valvesoftware|steamcommunity|steampowered)\.com(?:/|$)', 'i' );
CBroadcastChat.m_rgWhitelistedDomains = ["vimeo.com","youtu.be","youtube.com","digg.com","facebook.com","google.com","reddit.com","twitter.com","developconference.com","diygamer.com","gdconf.com","indiecade.com","kickstarter.com","indiegogo.com","moddb.com","oculusvr.com","tigsource.com","indiedb.com","1up.com","destructoid.com","engadget.com","escapistmagazine.com","gametrailers.com","gizmodo.com","guardiannews.com","guardian.co.uk","ifanzine.com","igf.com","ign.com","indiegamemag.com","kotaku.com","mobot.net","modojo.com","pcgamer.com","rockpapershotgun.com","shacknews.com","toucharcade.com","wired.com","wired.co.uk"];

CBroadcastChat.prototype.GetChatID = function()
{
	return this.m_ulChatID;
}

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
}

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
		_chat.m_strChatURL = rgResult.view_url;
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
}

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
	if( _chat.m_nNextChatTS > 0 )
		rgRequest.t = _chat.m_nNextChatTS;

	$J.ajax(
	{
		url: this.m_strChatURL,
		type: 'GET',
		data: rgRequest,
		dataType: 'text'
	})
	.done( function( result )
	{
		var rgResponse = $J.parseJSON( result );
		_chat.m_cConsecutiveErrors = 0;

		// add any messages we received
		if ( rgResponse.messages )
		{
			for( var i = 0; i < rgResponse.messages.length; i++ )
			{
				if( rgResponse.messages[i].steamid == _chat.m_steamID && rgResponse.messages[i].instance_id == _chat.m_unInstanceID )
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
				var strMsg = ( rgResponse.muted[i].muted == _chat.m_steamID ) ? 'You has been muted and cannot post messages to this chat' : '%s has been muted';
				_chat.DisplayChatNotification( strMsg.replace( /%s/, rgResponse.muted[i].persona_name ) );
			}
		}

		// check if first request or we received initial_delay which will allow us to resync time
		var nSleepMS = 0;
		if( _chat.m_rtFirstRequest == 0 || _chat.m_nNextChatTS == 0 || rgResponse.initial_delay )
		{
			if ( rgResponse.initial_delay === 'undefined' )
			{
				_chat.log( 'Need initial_delay to know when to request first chat message' );
				return;
			}

			_chat.m_rtFirstRequest = Date.now() + rgResponse.initial_delay;
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

			nSleepMS = (_chat.m_rtFirstRequest + _chat.m_nFromFirstRequestMS) - Date.now();
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
			if ( _chat.m_rtFirstRequest == 0 )
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
	this.m_rtFirstRequest = 0;
	this.m_nFromFirstRequestMS = 0;
	this.m_nNextChatTS = 0;
}

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

			// nested for-loops instead of indexOf or filter for compatibility with IE <9
			for ( var i = rgTLDCandidates.length - 1; i >= 1; --i )
			{
				for ( var j = CBroadcastChat.m_rgWhitelistedDomains.length - 1; j >= 0; --j )
				{
					if ( CBroadcastChat.m_rgWhitelistedDomains[j] == rgTLDCandidates[i].toLowerCase() )
						return true;
				}
			}
			return false;
		}();

		if ( bTrustedDomain )
			return ( s1 + '<a href="' + s2 + '" class="whiteLink" target="_blank">' + s2 + '</a>' );
		else
			return ( s1 + '<a href="https://steamcommunity.com/linkfilter/' + s2 + '" class="whiteLink" target="_blank">' + s2 + '</a>' );
	} );

	return strHTML;
}

CBroadcastChat.prototype.AddEmoticons = function( strHTML, steamID, bLocal )
{
	var regexEmoticons = CBroadcastChat.s_regexEmoticons
	if( bLocal )
		regexEmoticons = this.m_regexUserEmoticons;

	return strHTML.replace( regexEmoticons, '<img class="emoticon" src="https://steamcommunity-a.akamaihd.net/economy/emoticon/$1">' );
}


CBroadcastChat.prototype.DisplayChatMessage = function( strPersonaName, bInGame, steamID, strMessage, bLocal )
{
	var _chat = this;

		var elMessage = $J('#ChatMessagetemplate').clone();
	var elChatName = $J( '.tmplChatName', elMessage );
	elChatName.text( strPersonaName );
	elChatName.attr( 'href', 'http://steamcommunity.com/profiles/' + steamID );
	elChatName.data( 'miniprofile', 's' + steamID );
	BindSingleMiniprofileHover( elChatName );

	if ( bInGame )
		elChatName.parent().addClass( 'InGame' );

	if ( steamID == this.m_broadcastSteamID )
		elMessage.addClass( 'Broadcaster' );

	var elText = $J( '.tmplChatMessage', elMessage ).text( strMessage );

		var strHTML = elText.html();
	strHTML = this.AddLinks( strHTML );
	strHTML = this.AddEmoticons( strHTML, steamID, bLocal );

	elText.html( strHTML );
	elText.find( 'img.emoticon' ).each( function() { BindEmoticonHover( this ) } );

	elMessage.show();

	$J('#ChatBox').append(elMessage);

	// if text is too long, add expand button
	var elText = $J( '.tmplChatMessage', elMessage );
	if ( elText.height() > elMessage[0].clientHeight )
	{
		console.log( 'added' );
		var elExpand = $J( '<div class="ChatExpand">+</div>' );
		elMessage.append( elExpand );
		elExpand.on( 'click', function() { elMessage.addClass( 'Expand' ); _chat.UpdateScroll(); } );
	}

	this.UpdateScroll();
}

CBroadcastChat.prototype.UpdateScroll = function()
{
	if( this.m_bAutoScroll )
		$J('#ChatBox').scrollTop( $J('#ChatBox').prop("scrollHeight") );

	this.m_nLastHeight = $J('#ChatBox')[0].offsetHeight;
}

CBroadcastChat.prototype.DisplayChatError = function( strError )
{
	var eleMessage = $J( '#ChatErrorTemplate' ).clone();
	$J('.tmplChatError',eleMessage ).text( strError );
	eleMessage.show();
	$J('#ChatBox').append( eleMessage );
	$J('#ChatBox').scrollTop( $J( '#ChatBox' ).prop( "scrollHeight" ) );
}

CBroadcastChat.prototype.DisplayChatNotification = function( strNotification )
{
	var eleMessage = $J( '#ChatNotificationTemplate' ).clone();
	$J('.tmplChatNotification',eleMessage ).text( strNotification );
	eleMessage.show();
	$J('#ChatBox').append( eleMessage );
	$J('#ChatBox').scrollTop( $J( '#ChatBox' ).prop( "scrollHeight" ) );
}

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
		_chat.DisplayChatMessage( response.persona_name, response.in_game, _chat.m_steamID, strMessage, true );
	})
	.fail( function()
	{
		_chat.DisplayChatError( 'Failed to send chat message: ' + strMessage );
	});
}