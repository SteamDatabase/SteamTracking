
function showNotification(className, message, sub)
{
	notificationArea = $('NotificationArea');
	notificationArea.update( '' );
	notificationArea.addClassName( className );

	messageP = document.createElement( 'p' );
	messageTN = document.createTextNode( message );
	messageP.appendChild( messageTN );
	notificationArea.appendChild( messageP );

	if(sub)
	{
		subP = document.createElement('span');
		$(subP).addClassName('note');
		subTN = document.createTextNode(sub);
		subP.appendChild(subTN);
		messageP.appendChild(subP);
	}
	
	Effect.BlindDown( notificationArea, { duration: 0.5, afterFinish: iefixNotification } );

}

function iefixNotification()
{
	// Fixes IE being IE.
	$('NotificationArea').setStyle( {color: '#000'} );
}

function ajaxAddFriend()
{
	$('AddFriendItem').setStyle( {visibility: 'hidden'} );

	new Ajax.Request( ajaxFriendUrl, {
		method: 'post',
		parameters: { 	sessionID: sessionID,
						steamid: invitee },
		onSuccess: ajaxFriendResponse,
		onFailure: ajaxFriendResponse
	} );
}

function ajaxFriendResponse(transport)
{
	var bFound = false;
	$('AddFriendItem').hide();
	if( !transport.responseJSON )
	{
		showNotification( 'notificationNegative', 'Error adding friend. Please try again.');
		$('AddFriendItem').show();
		return;
	}

	$H( transport.responseJSON['invited'] ).each( function( pair ) {
		if( pair.value == invitee )
		{
			showNotification('notificationPositive', 'Friend invite sent. They will appear as a friend once they have accepted your invite.');
			bFound = true;
		}
	});
	
	if( bFound )
		return;

	switch( transport.responseJSON['failed_invites_result'][0] )
	{

		case 25:
			showNotification( 'notificationNegative', 'Your friends list is full.', 'New invites cannot be sent until you make room for those new friends.' );
			break;

		case 15:
			showNotification( 'notificationNegative', 'This user\'s friends list is full.','New invites cannot be sent at this time.' );
			break;

		case 40:
		case 41:
		default:
			showNotification( 'notificationNegative','Error adding friend. Please try again.' );
			$('AddFriendItem').show();
			$('AddFriendItem').setStyle( {visibility: 'visible'} );
	}
}

function showAliasPopup(e)
{
	ShowMenu( e, 'NamePopup', 'left' );

	if( AliasesLoaded )
		return true;

	aliasContainer = $( 'NamePopupAliases' );

	throbber = document.createElement( 'img' );
	throbber.src = 'https://steamcommunity-a.akamaihd.net/public/images/login/throbber.gif';
	aliasContainer.appendChild( throbber );

	new Ajax.Request( ajaxAliasUrl, {
		method: 'post',
		parameters: { },
		onSuccess: ajaxAliasResponse,
		onFailure: function( transport ) { alert( 'Please try again later' ); }
	} );
}

function ajaxAliasResponse(transport)
{
	Aliases = transport.responseJSON;

	aliasContainer = $( 'NamePopupAliases' );

	if( !aliasContainer )
		return;

	aliasContainer.update('');

	if( !Aliases || Aliases.length == 0 )
		Aliases.push( {newname: "This user has no known aliases"} );

	for( x=0; x<Aliases.length; x++ )
	{
		c = Aliases[x];

		curSpan = document.createElement( 'p' );
		curATN = document.createTextNode( c['newname'] );
		curSpan.appendChild( curATN );
		aliasContainer.appendChild( curSpan );
	}

	AliasesLoaded = true;

}

function setupGroupInvite()
{
	anchors = document.getElementsByTagName('a');
	for(x=0;x<anchors.length;x++)
	{
		cn = ' ' + anchors[x].className + ' ';
		if( cn.indexOf( ' inviteGroupListLink ' ) != -1 )
		{
			addEvent(anchors[x], 'click', ajaxInviteGroup);
		}
	}
}
function ajaxInviteGroup(e)
{
	pickEl = $( 'groupInviteListPopup' );
	if(pickEl)
	{
		pickEl.parentNode.removeChild(pickEl);
	}

	pickEl = document.createElement('div');
	pickEl.id = 'groupInviteListPopup';
	pickEl.style.position = 'absolute';
	addEvent(pickEl, 'mouseout', hideInviteGroup);

	popTL = getPopPos(e, pickEl.clientWidth, pickEl.clientHeight, -6);
	pickEl.style.top = popTL[0] + 'px';
	pickEl.style.left = popTL[1] + 'px';

	throbber = document.createElement('img');
	throbber.src = 'https://steamcommunity-a.akamaihd.net/public/images/login/throbber.gif';
	pickEl.appendChild(throbber);

	document.getElementsByTagName('body')[0].appendChild(pickEl);


	new Ajax.Request( ajaxInviteUrl, {
		method: 'post',
		parameters: { },
		onSuccess: selectInviteGroup,
		onFailure: function( transport ) { alert('Please try again later'); }
	} );
}
function selectInviteGroup(transport)
{
	invitableGroups = [];

	if ( !(transport.responseJSON instanceof Array) )
	{
		$H(transport.responseJSON).each(function(pair)
		{
			invitableGroups.push(pair.value);
		});
	}
	else
	{
		invitableGroups = transport.responseJSON;
	}

	pickEl = $('groupInviteListPopup');

	if(!pickEl)
		return;

	pickEl.update('');

	if(!invitableGroups || invitableGroups.length == 0)
	{
		curA = document.createElement('span');
		curATN = document.createTextNode("This user has already joined or been invited to all of your groups.");
		curA.appendChild(curATN);
		pickEl.appendChild(curA);
	}
	else
	{
		for(x=0;x<invitableGroups.length;x++)
		{
			c = invitableGroups[x];
			curA = document.createElement('a');
			curA.className = 'groupInviteLink';
			curA.href = "javascript:void(0)";
			curA.id = 'c_'+c[0];
			addEvent(curA, 'click', doGroupInvite);
			curATN = document.createTextNode(c[1]);
			curA.appendChild(curATN);
			pickEl.appendChild(curA);
		}
	}
}
function hideInviteGroup(e)
{
	pickEl = document.getElementById('groupInviteListPopup');
	if(pickEl)
	{
		mx = e.clientX + winDim('w', 's');
		my = e.clientY + winDim('h', 's');
		pl = parseInt(pickEl.style.left) + 2;
		pr = pl + pickEl.clientWidth + 1;
		pt = parseInt(pickEl.style.top) + 2;
		pb = pt + pickEl.clientHeight + 1;
		if(mx < pl || mx > pr || my < pt || my > pb)
		{
			pickEl.parentNode.removeChild(pickEl);
		}
	}
}	
function doGroupInvite(e)
{
	var srcEl = window.event ? window.event.srcElement : e ? e.target : null;
	if(!srcEl)
	{
		return;
	}
	groupInvLink = getGoodElement(srcEl, 'a', 'groupInviteLink',0);
	if(groupInvLink)
	{
		groupId = groupInvLink.id.slice(2);
		var postData = {
			"xml": 1,
			"type": "groupInvite",
			"inviter": inviter,
			"invitee": invitee,
			"group": groupId,
			"sessionID": sessionID
		};
		createQuery2(inviteUrl, receiveGroupInvite, postData);
	}
	pickEl = document.getElementById('groupInviteSelect');
	if(pickEl)
	{
		pickEl.parentNode.removeChild(pickEl);
	}
}
function receiveGroupInvite()
{
	if(req.readyState == 4)
	{
		if(req.status == 200)
		{
			response = req.responseXML.documentElement;
			results = response.getElementsByTagName('results')[0].firstChild.nodeValue;
			updateInProgress = false;
			if( results == 'OK' )
			{
				groupId = response.getElementsByTagName('groupId')[0].firstChild.nodeValue;
				var newInvitableGroups = new Array();
				for(x=0;x<invitableGroups.length;x++)
				{
					if(invitableGroups[x][0] != groupId)
					{
						newInvitableGroups.push(invitableGroups[x]);
					}
				}
				invitableGroups = newInvitableGroups;
				if(invitableGroups.length == 0)
				{
					a2c = document.getElementById('groupInviteListPopup');
					a2c.parentNode.removeChild(a2c);
				}
				alert( "Invitation Sent!" );
			}
			else
			{
				alert( results );
			}
		}
	}
}

function showLinkTooltip(e)
{
	var srcEl = window.event ? window.event.srcElement : e ? e.target : null;
	if(!srcEl)
	{
		return;
	}
	linkA = getGoodElement(srcEl, 'a', 'externalLink', 0);
	if(!linkA)
	{
		return;
	}
	thisTip = document.createElement('div');
	thisTip.className = 'linkTooltip';
	linkText = document.createTextNode(linkA.href);
	linkSpan = document.createElement('span');
	linkSpan.className = 'linkTooltipText';
	linkSpan.appendChild(linkText);
	thisTip.appendChild(linkSpan);

	tooltipCreate(thisTip, e);
}

function setupLinkTooltips()
{
	anchors = document.getElementsByTagName('a');
	for(x=0;x<anchors.length;x++)
	{
		thisClass = ' '+anchors[x].className+' ';
		if(thisClass.indexOf(' externalLink ') != -1)
		{
			addEvent(anchors[x], 'mouseover', showLinkTooltip);
			addEvent(anchors[x], 'mouseout', tooltipDestroy);
		}
	}
}
	

addEvent(window, "load", setupLinkTooltips, false);
addEvent(window, "load", setupGroupInvite, false);

// modified version of valvesoftware.com's slideshow.js
// which itself is a modified version of the store's gamehighlightplayer.js

var Slideshow = Class.create( {
	m_elemContainer: null,
	m_elemSlideContainer: null,
	m_rgImageURLs: null,

	m_timerInterval: false,

	initialize: function( args )
	{
		this.m_elemContainer = $(args.elemContainer);
		this.m_elemSlideContainer = $(args.elemSlideContainer);
		this.m_rgImageURLs = $H(args.rgImageURLs);
		
		var Slideshow = this;
		var firstItem = false;
		this.m_rgImageURLs.each( function ( entry ) {
			var id = entry.key;
			var data = entry.value;
			
			var elemImg = new Element( 'img', { src: 'https://steamcommunity-a.akamaihd.net/public/images/trans.gif', width: data.width, height: data.height } );
			elemImg.className = 'slideshowSlideImg';
			var elemLink = new Element( 'a', { href: data.url, id: 'img_' + id } );
			elemLink.className = 'slideshowSlideItem';
			elemLink.appendChild( elemImg );
			Slideshow.m_elemSlideContainer.appendChild( elemLink );
			if ( !firstItem )
				firstItem = elemLink;
			else
				elemLink.hide();
		} );

		this.m_elemContainer.observe( 'mouseover', this.mouseOver.bindAsEventListener( this ) );
		this.m_elemContainer.observe( 'mouseout', this.mouseOut.bindAsEventListener( this ) );

		this.HighlightItem( firstItem );
	},

	HighlightItem: function( elem )
	{
		this.HighlightScreenshot( this.GetScreenshotId( elem ) );

		// preload the next screenshot in-order
		var nextItem = this.m_activeItem.next( '.slideshowSlideItem' );
		if ( nextItem )
			this.LoadScreenshot( this.GetScreenshotId( nextItem ) );
	},

	HighlightScreenshot: function( id )
	{
		this.LoadScreenshot( id );

		this.TransitionTo( $('img_' + id) );
		
		this.StartTimer();
	},
	
	LoadScreenshot: function( id )
	{
		var target = $( 'img_' + id );
		if ( target )
		{
			var img = target.down( 'img' );
			var url = this.m_rgImageURLs.get( id ).img;
			if ( img.src != url )
				img.src = url;
			
		}
	},

	TransitionTo: function( elem )
	{
		if ( this.m_activeItem )
		{
			//(cross) fade screenshots
			if ( $(this.m_activeItem).effect ) $(this.m_activeItem).effect.cancel();
			$(this.m_activeItem).effect = Effect.Fade( this.m_activeItem, {duration: 0.4 } );
		}
		
		if ( elem.effect ) elem.effect.cancel();
		elem.effect = new Effect.Appear( elem, {duration: 0.4 } );

		this.m_activeItem = elem;
	},

	GetScreenshotId: function( elem )
	{
		return elem.id.replace( /(ticker|img)_/, '' );
	},

	Transition: function()
	{
		var nextItem = this.m_activeItem.next( '.slideshowSlideItem' );
		if ( !nextItem )
		{
			nextItem = this.m_elemSlideContainer.down( '.slideshowSlideItem' );
		}
		if ( nextItem )
		{
			this.HighlightItem( nextItem );
		}
	},

	StartTimer: function()
	{
		this.ClearInterval();
		this.interval = window.setTimeout( this.Transition.bind( this ), 5000 );
	},

	ClearInterval: function()
	{
		if ( this.interval )
		{
			window.clearInterval( this.interval );
			this.interval = false;
		}
	},

	mouseOver: function( event )
	{
		this.ClearInterval();
	},

	mouseOut: function( event )
	{
    	var reltarget = (event.relatedTarget) ? event.relatedTarget : event.toElement;
    	if ( reltarget && ( $(reltarget).up( this.m_elemContainer.id ) == this.m_elemContainer ) )
    		return;
    	
    	this.StartTimer();
	}
} );



function SummerSaleHover( elem, event, name, desc )
{
	divHover = $('global_hover');
	if (!event) var event = window.event;
	elem = $(elem);

	var hover = $(divHover);
	if ( hover.visible() && hover.target == elem )
	{
		return;
	}
	else if ( ( !hover.visible() || hover.target != elem ) )
	{;
		hover.down('.content').update( "<h1>" + name + "</h1>" + desc );
		ShowSummerSaleHover( elem, divHover );
	}
}

function HideSummerSaleHover( elem, event )
{
	divHover = $('global_hover');
	if (!event) var event = window.event;
	var reltarget = (event.relatedTarget) ? event.relatedTarget : event.toElement;
	if ( reltarget && $(reltarget).up( '#' + elem.identify() ) )
	{
		return;
	}
	divHover.hide();
}

function ShowSummerSaleHover( elem, divHover )
{

	var hover = $(divHover);
	hover.style.visibility = 'hidden';
	hover.show();

	hover.clonePosition( elem, {setWidth: false, setHeight: false} );
	var hover_box = hover.down( '.hover_box' );
	var hover_arrow = hover.down( '.hover_arrow' );

	if ( Prototype.Browser.IE )
	{
		hover.style.paddingTop = '12px';
		hover_box.style.marginTop = '0px';
	}

	hover.style.left = ( parseInt( hover.style.left ) - 12 ) + 'px';
	hover.style.top = ( parseInt( hover.style.top ) + elem.getHeight() - (elem.hasClassName('prize') ? 20 : 10 ) ) + 'px';

	var boxTopViewport = elem.viewportOffset().top;
	if ( boxTopViewport + hover_box.getHeight() + 8 > document.viewport.getHeight() )
	{
		var nViewportAdjustment = ( hover_box.getHeight() + 8 ) - ( document.viewport.getHeight() - boxTopViewport );
				nViewportAdjustment = Math.min( hover_box.getHeight() - 74, nViewportAdjustment );
		hover.style.top = ( parseInt( hover.style.top ) - nViewportAdjustment ) + 'px';

		hover_arrow.style.top = ( 48 + nViewportAdjustment ) + 'px';
	}
	else
	{
		hover_arrow.style.top = '';
	}

	hover.style.visibility = '';

	hover.target = elem;
}

function IsValidNickname( str )
{
	return str.length == 0 || str.strip().length > 2;
}

function ShowNicknameModal( )
{
	showModal('NicknameModal');
	$('nickname_field').focus();
	$('nickname_add_button').addClassName('positive');
	$('nickname_add_button').observe('click', SubmitNickname);
}

function SubmitNickname( )
{
	var nickname = $("nickname_field").value;
	var submitUrl = profileUrl + "/ajaxsetnickname/";
	new Ajax.Request(submitUrl, {
		method:'post',
		parameters: { nickname: nickname, sessionid: g_sessionID },
		onSuccess: function(transport){
			var json = transport.responseText.evalJSON();
			if( json['success'] == 1 )
			{
				if(json['nickname'] != undefined && json['nickname'].length > 0)
				{
					$('nickname_component').update( json['nickname'].escapeHTML() );
					$('nickname_container').show();
				} else
					$('nickname_container').hide();
			}
		}
	});
	hideModal('NicknameModal');
}

function NicknameModalUpdate( )
{
	var value = $('nickname_field').getValue();
	var bIsPositive = IsValidNickname( value );

	if( bIsPositive )
	{
		$('nickname_add_button').addClassName('positive');
		$('nickname_add_button').observe('click', SubmitNickname);
	}
	else
	{
		$('nickname_add_button').removeClassName('positive');
		$('nickname_add_button').stopObserving('click');
	}
}

