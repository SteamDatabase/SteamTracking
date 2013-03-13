
function Forum_CreateTopic( pageid )
{
	if ( g_rgForums[pageid] )
		g_rgForums[pageid].DisplayNewTopicForm();
}

function Forum_Subscribe( pageid )
{
	if ( g_rgForums[pageid] )
		g_rgForums[pageid].SubscribeToForum();
}

function Forum_Unsubscribe( pageid )
{
	if ( g_rgForums[pageid] )
		g_rgForums[pageid].UnsubscribeFromForum();
}

function Forum_SetTopicsPerPage( cTopicsPerPage )
{
	new Ajax.Request( 'http://steamcommunity.com/forum/0/0/setpreference', {
		parameters: {preference: 'topicsperpage', value: cTopicsPerPage, sessionid: g_sessionID },
		onComplete: function() { window.location.reload() }
	} );
}

function Forum_SetTopicRepliesPerPage( cTopicRepliesPerPage )
{
	new Ajax.Request( 'http://steamcommunity.com/forum/0/0/setpreference', {
		parameters: {preference: 'topicrepliesperpage', value: cTopicRepliesPerPage, sessionid: g_sessionID },
		onComplete: function() { window.location.reload() }
	} );
}

function Forum_CancelEvent( event )
{
	if ( !event )
		event = window.event;

	if ( event.stopPropagation )
		event.stopPropagation();
	else
		event.cancelBubble = true;
}

var g_rgForums = {};
function InitializeForum( name, rgForumData, url )
{
	g_rgForums[ name ] = new CForum( name, rgForumData, url );
}

var CForum = Class.create( {

	m_strName: null,
	m_rgForumData: null,
	m_strActionURL: null,
	m_cPageSize: null,

	m_cTotalCount: 0,
	m_iCurrentPage: 0,
	m_cMaxPages: 0,
	m_bLoading: false,
	m_bSubmittingTopic: false,


	initialize: function( name, rgForumData, url )
	{
		this.m_strName = name;
		this.m_rgForumData = rgForumData;
		this.m_strActionURL = url;

		this.m_cTotalCount = rgForumData['total_count'];
		this.m_iCurrentPage = 0;
		this.m_cPageSize = rgForumData['pagesize'];
		this.m_cMaxPages = Math.ceil( this.m_cTotalCount / this.m_cPageSize );

		var strPrefix = 'forum_' + this.m_strName;

		var elForm = $( strPrefix + '_newtopic_form' );
		if ( elForm )
		{
			elForm.observe( 'submit', this.NewTopic.bind( this ) );
		}

		this.m_elTextArea = $( strPrefix + '_textarea');

		if ( this.m_elTextArea )
		{
			new CAutoSizingTextArea( this.m_elTextArea, 40, this.OnTextInput.bind(this) );
		}

		BindOnHashChange( this.OnLocationChange.bind(this) );
		this.OnLocationChange( window.location.hash );


		$(strPrefix + '_pagebtn_prev').observe( 'click', this.PrevPage.bind( this ) );
		$(strPrefix + '_footerpagebtn_prev') && $(strPrefix + '_footerpagebtn_prev').observe( 'click', this.PrevPage.bind( this ) );
		$(strPrefix + '_pagebtn_next').observe( 'click', this.NextPage.bind( this ) );
		$(strPrefix + '_footerpagebtn_next') && $(strPrefix + '_footerpagebtn_next').observe( 'click', this.NextPage.bind( this ) );

		this.UpdatePagingDisplay();
	},

	DisplayNewTopicForm: function()
	{
		if ( !$('forum_' + this.m_strName + '_newtopic_area').visible() )
			new Effect.BlindDown( 'forum_' + this.m_strName + '_newtopic_area', { duration: 0.25 } );
	},

	OnTextInput: function( elTextArea )
	{
		if ( elTextArea.value.length > 0 )
			$('forum_' + this.m_strName + '_submit_container').show();
		else
			$('forum_' + this.m_strName + '_submit_container').hide();
	},

	NewTopic: function()
	{
		if ( this.m_bSubmittingTopic )
			return false;

		var form = $('forum_' + this.m_strName + '_newtopic_form' );
		if ( form.elements['topic'].value.length > 0 && form.elements['text'].value.length > 0 )
		{
			this.m_bSubmittingTopic = true;
			$('forum_' + this.m_strName + '_newtopic_error' ).hide();
			$('forum_' + this.m_strName + '_submit_container').hide();
			$('forum_' + this.m_strName + '_submit_throbber_container').show();

			var strName = this.m_strName;

			new Ajax.Request( this.GetActionURL( 'createtopic' ), {
					method: 'post',
					parameters: form.serialize(),
					onSuccess: this.OnNewTopicSuccess.bind( this ),
					onFailure: this.OnNewTopicFailure.bind( this ),
					onComplete: function() {
						$('forum_' + strName + '_submit_container').show();
						$('forum_' + strName + '_submit_throbber_container').hide();
					}
			} );
		}

		return false;
	},

	OnNewTopicSuccess: function( transport )
	{
		this.m_bSubmittingTopic = false;
		new Effect.BlindUp( 'forum_' + this.m_strName + '_newtopic_area', { duration: 0.25 } );
		var form = $('forum_' + this.m_strName + '_newtopic_form' );
		form.elements['topic'].value = '';
		form.elements['text'].value = '';

		this.OnResponseRenderTopics( transport, true );
	},

	OnNewTopicFailure: function( transport )
	{
		this.m_bSubmittingTopic = false;
		var rgJSON = transport.responseJSON || {};
		$('forum_' + this.m_strName + '_newtopic_error' ).update( 'There was an error creating a new topic: ' + ( rgJSON.error ? rgJSON.error : rgJSON.success ) );
		$('forum_' + this.m_strName + '_newtopic_error' ).show();
	},

	GetActionURL: function( action )
	{
		var url = this.m_strActionURL + action + '/';
		if ( this.m_rgForumData['feature'] )
			url += this.m_rgForumData['feature'] + '/';
		return url;
	},

	OnAJAXComplete: function()
	{
		this.m_bLoading = false;
	},

	OnLocationChange: function( hash )
	{
		if ( hash.match( /^#p[0-9]+$/ ) )
		{
			var iPage = parseInt( hash.substring(2) ) - 1;
			if ( this.m_iCurrentPage != iPage )
				this.GoToPage( iPage );
		}
		else if ( !hash )
		{
			// reset to initial view
			this.GoToPage( 0 );
		}
	},

	NextPage: function()
	{
		if ( this.m_iCurrentPage < this.m_cMaxPages - 1 )
			this.GoToPage( this.m_iCurrentPage + 1 );
	},

	PrevPage: function()
	{
		if ( this.m_iCurrentPage > 0 )
			this.GoToPage( this.m_iCurrentPage - 1 );
	},

	GoToPage: function( iPage )
	{
		if ( this.m_bLoading || iPage >= this.m_cMaxPages || iPage < 0 || iPage == this.m_iCurrentPage )
			return;

		var params = {
			start: this.m_cPageSize * iPage,
			count: this.m_cPageSize
		};
		if ( this.m_rgForumData['extended_data'] )
			params['extended_data'] = this.m_rgForumData['extended_data'];

		this.m_bLoading = true;
		new Ajax.Request( this.GetActionURL( 'render' ), {
			method: 'get',
			parameters: params,
			onSuccess: this.OnResponseRenderTopics.bind( this ),
			onComplete: this.OnAJAXComplete.bind( this )
		});
	},

	OnResponseRenderTopics: function( transport, bNewTopic )
	{
		if ( transport.responseJSON )
		{
			var response = transport.responseJSON;
			this.m_cTotalCount = response.total_count;
			this.m_cMaxPages = Math.ceil( response.total_count / this.m_cPageSize );
			this.m_iCurrentPage = Math.floor( response.start / this.m_cPageSize );

			if ( this.m_cTotalCount <= response.start )
			{
				// this page is no logner valid, flip back a page (deferred so that the AJAX handler exits and reset m_bLoading)
				this.GoToPage.bind( this, this.m_iCurrentPage - 1 ).defer();
				return;
			}

			var elTopics = $('forum_' + this.m_strName + '_topics' );
			var elContainer = $('forum_' + this.m_strName + '_topiccontainer' );

			elTopics.update( response.topics_html );


			if ( this.m_iCurrentPage != 0 || window.location.hash.length > 1)
			{
				if ( this.m_iCurrentPage > 0 )
					window.location.hash = 'p' + ( this.m_iCurrentPage + 1);
				else
					window.location.hash = '';
			}

			ScrollToIfNotInView($('forum_' + this.m_strName + '_area' ), 40 );

			this.UpdatePagingDisplay();
		}
	},

	UpdatePagingDisplay: function()
	{
		var strPrefix = 'forum_' + this.m_strName;


		var rgPagingControls = [ strPrefix + '_page' , strPrefix + '_footerpage' ];
		for ( var i = 0; i < rgPagingControls.length; i++ )
		{
			var strPagePrefix = rgPagingControls[i];

			// we may not always show both sets of controls
			if ( !$(strPagePrefix + 'controls' ) )
				continue;

			$(strPagePrefix + 'total').update( v_numberformat( this.m_cTotalCount ) );
			$(strPagePrefix + 'start').update( v_numberformat( this.m_iCurrentPage * this.m_cPageSize + 1 ) );
			$(strPagePrefix + 'end').update( Math.min( ( this.m_iCurrentPage + 1 ) * this.m_cPageSize, this.m_cTotalCount ) );


			if ( this.m_cMaxPages <= 1 )
			{
				$(strPagePrefix + 'controls').hide();
			}
			else
			{
				$(strPagePrefix + 'controls').show();
				if ( this.m_iCurrentPage > 0 )
					$(strPagePrefix + 'btn_prev').removeClassName('disabled');
				else
					$(strPagePrefix + 'btn_prev').addClassName('disabled');

				if ( this.m_iCurrentPage < this.m_cMaxPages - 1 )
					$(strPagePrefix + 'btn_next').removeClassName('disabled');
				else
					$(strPagePrefix + 'btn_next').addClassName('disabled');

				var elPageLinks = $(strPagePrefix + 'links');
				elPageLinks.update('');
				// we always show first, last, + 3 page links closest to current page
				var cPageLinksAheadBehind = 2;
				var firstPageLink = Math.max( this.m_iCurrentPage - cPageLinksAheadBehind, 1 );
				var lastPageLink = Math.min( this.m_iCurrentPage + (cPageLinksAheadBehind*2) + ( firstPageLink - this.m_iCurrentPage ), this.m_cMaxPages - 2 );

				if ( lastPageLink - this.m_iCurrentPage < cPageLinksAheadBehind )
					firstPageLink = Math.max( this.m_iCurrentPage - (cPageLinksAheadBehind*2) + ( lastPageLink - this.m_iCurrentPage ), 1 );

				this.AddPageLink( elPageLinks, 0 );
				if ( firstPageLink != 1 )
					elPageLinks.insert( ' ... ' );

				for ( var iPage = firstPageLink; iPage <= lastPageLink; iPage++ )
				{
					this.AddPageLink( elPageLinks, iPage );
				}

				if ( lastPageLink != this.m_cMaxPages - 2 )
					elPageLinks.insert( ' ... ' );
				this.AddPageLink( elPageLinks, this.m_cMaxPages - 1 );
			}
		}
	},

	AddPageLink: function( elPageLinks, iPage )
	{
		var el = new Element( 'span', {'class': 'forum_paging_pagelink' } );
		el.update( (iPage + 1) + ' ' );

		if ( iPage == this.m_iCurrentPage )
			el.addClassName( 'active' );
		else
			el.observe( 'click', this.GoToPage.bind( this, iPage ) );

		elPageLinks.insert( el );
	},

	SubscribeToForum: function()
	{
		var strPrefix = 'forum_' + this.m_strName;
		this.m_bLoading = true;
		new Ajax.Request( this.GetActionURL( 'subscribe' ), {
			method: 'POST',
			parameters: {sessionid: g_sessionID},
			onSuccess: function() { $(strPrefix + '_subscribe').hide(); $(strPrefix + '_unsubscribe').show(); },
			onFailure: function() { ShowForumModalSuccess( 'There was an error subscribing to this forum.', 'Please try again later.' ); },
			onComplete: this.OnAJAXComplete.bind( this )
		});
	},

	UnsubscribeFromForum: function()
	{
		var strPrefix = 'forum_' + this.m_strName;
		this.m_bLoading = true;
		new Ajax.Request( this.GetActionURL( 'unsubscribe' ), {
			method: 'POST',
			parameters: {sessionid: g_sessionID},
			onSuccess: function() { $(strPrefix + '_unsubscribe').hide(); $(strPrefix + '_subscribe').show(); },
			onFailure: function() { ShowForumModalSuccess( 'There was an error unsubscribing from this forum.', 'Please try again later.' ); },
			onComplete: this.OnAJAXComplete.bind( this )
		});
	}

} );

var g_rgForumTopics = {};
var g_rgForumTopicCommentThreads = {};
function InitializeForumTopic( rgForumData, url, gidTopic, rgRawData )
{
	g_rgForumTopics[ gidTopic ] = new CForumTopic( rgForumData, url, gidTopic, rgRawData );
}

function RegisterForumTopicCommentThread( gidTopic, CommentThread )
{
	g_rgForumTopicCommentThreads[ gidTopic ] = CommentThread;
}

function Forum_DeleteTopic( gidTopic )
{
	Forum_ConfirmAction(
		'Are you sure you want to delete this thread?',
		'This action can only be undone by a moderator.',
		Forum_DoDeleteTopic.bind( null, gidTopic ),
		'Delete Thread'
	);
}

function Forum_DoDeleteTopic( gidTopic )
{
	if ( g_rgForumTopics[ gidTopic ] )
		g_rgForumTopics[ gidTopic ].Delete();
}

function Forum_SetTopicFlag( gidTopic, flag, value )
{
	if ( g_rgForumTopics[ gidTopic ] )
		g_rgForumTopics[ gidTopic ].SetTopicFlag( flag, value );
}

function Forum_ReportPost( gidTopic, author, gidComment )
{
	if ( g_rgForumTopics[ gidTopic ] )
		g_rgForumTopics[ gidTopic ].ReportPost( author, gidComment );
}

function Forum_MoveTopic( gidTopic )
{
	if ( g_rgForumTopics[ gidTopic ] )
		g_rgForumTopics[ gidTopic ].MoveTopic();
}

function Forum_SubscribeToTopic( gidTopic )
{
	if ( g_rgForumTopics[ gidTopic ] )
		g_rgForumTopics[ gidTopic ].Subscribe( Forum_SwapSubscribeButtons.bind( null, gidTopic, true ) );
}

function Forum_UnsubscribeFromTopic( gidTopic )
{
	if ( g_rgForumTopics[ gidTopic ] )
		g_rgForumTopics[ gidTopic ].Unsubscribe( Forum_SwapSubscribeButtons.bind( null, gidTopic, false ) );
}

function Forum_ResolveReports( gidTopic )
{
	if ( g_rgForumTopics[ gidTopic ] )
		g_rgForumTopics[ gidTopic ].ResolveReports();
}

function Forum_SwapSubscribeButtons( gidForumTopic, bSubscribed )
{
	if ( bSubscribed )
	{
		$('forum_subscribe_' + gidForumTopic).hide();
		$('forum_unsubscribe_' + gidForumTopic).show();
	}
	else
	{
		$('forum_subscribe_' + gidForumTopic).show();
		$('forum_unsubscribe_' + gidForumTopic).hide();
	}
}

function Forum_SubmitReport( elForm )
{
	var gidTopic = elForm.elements['gidtopic'].value;

	if ( g_rgForumTopics[ gidTopic ] )
		g_rgForumTopics[ gidTopic ].SubmitReportPost();
}

function Forum_EditTopic( gidTopic )
{
	$('forum_op_' + gidTopic).hide();
	$('forum_topic_edit_' + gidTopic).show();

	// size the text box to the content
	if ( g_rgForumTopics[ gidTopic ] )
		g_rgForumTopics[ gidTopic ].CheckTextAreaSize();
}

function Forum_CancelEditTopic( gidTopic )
{
	$('forum_op_' + gidTopic).show();
	$('forum_topic_edit_' + gidTopic).hide();
}

function Forum_SubmitTopicChanges( gidTopic, form )
{
	var title = form.elements['topic'].value;
	var text = form.elements['text'].value;
	if ( g_rgForumTopics[ gidTopic ] )
		g_rgForumTopics[ gidTopic ].Edit( title, text );
}

function Forum_EraseNestedQuotes( strText )
{
	var strOutput = '';

	var iCur = 0;
	var nQuoteLevel = 0;
	var iNextQuote = strText.indexOf( '[quote' );
	var iNextEndQuote = strText.indexOf( '[/quote]' );
	while( iNextQuote != -1 || iNextEndQuote != -1 )
	{
		if ( iNextQuote != -1 && iNextQuote < iNextEndQuote )
		{
			if ( nQuoteLevel < 2 )
				strOutput += strText.substr( iCur, iNextQuote - iCur );
			iCur = iNextQuote;
			iNextQuote = strText.indexOf( '[quote', iCur + 1 );
			nQuoteLevel++;
		}
		else
		{
			if ( nQuoteLevel < 2 )
			{
				strOutput += strText.substr( iCur, iNextEndQuote + 8 - iCur );
			}
			iCur = iNextEndQuote + 8;	// strlen( '[/quote]' )
			iNextEndQuote = strText.indexOf( '[/quote', iCur + 1 );
			nQuoteLevel--;
		}
	}
	strOutput += strText.substr( iCur );

	return strOutput;
}

function Forum_ReplyToPost( gidTopic, gidComment )
{
	var CommentThread = g_rgForumTopicCommentThreads[gidTopic];
	var rgRawComment;
	if ( gidComment && gidComment != -1 )
	{
		rgRawComment = CommentThread.GetRawComment( gidComment );
	}
	else
	{
		// topic quoting
		rgRawComment = g_rgForumTopics[gidTopic].m_rgRawData;
	}

	var elTextArea = CommentThread.GetCommentTextEntryElement();


	if ( elTextArea.value && elTextArea.value.length > 0 )
		elTextArea.value += '\n\n';
	elTextArea.value += '[quote=' + rgRawComment.author.replace( /[\[\];]/g, '' );

	if ( gidComment && gidComment != -1 )
		elTextArea.value += ';' + gidComment;

	elTextArea.value += ']' + Forum_EraseNestedQuotes( v_trim( rgRawComment.text ) ) + ' [/quote]\n';


	elTextArea.focus();

	// resize the text area
	CommentThread.CheckTextAreaSize();

	ScrollToIfNotInView( elTextArea, 80, 40 );
}

var g_elAuthorMenu = null;
function Forum_AuthorMenu( elLink, event, bCanBan, gidTopic, gidComment, accountIDTarget, strTargetName )
{
	if ( !event )
		event = window.event;

	if ( !g_elAuthorMenu )
		g_elAuthorMenu = $('forum_user_menu');

	// reparent the author menu first, so we can make sure it's in the document
	var elParent = elLink.up('.commentthread_comment');
	if ( !elParent )
		elParent = elLink.up( '.forum_op' );

	if ( elParent )
		elParent.appendChild( g_elAuthorMenu.remove() );

	elParent.style.overflow = 'visible';


	// now set up the links
	var elProfileLink = $('forum_user_menu_viewprofile');
	var elViewPostsLink = $('forum_user_menu_viewposts');
	var elBanUserLink = $('forum_user_menu_ban');

	if ( g_rgForumTopics[ gidTopic ] )
	{
		elProfileLink.href = elLink.href;
		elViewPostsLink.href = g_rgForumTopics[ gidTopic ].GetSearchURL( { author: accountIDTarget } );

		if ( elBanUserLink )
		{
			if ( bCanBan )
			{
				elBanUserLink.href = 'javascript:Forum_BanUser( \'' + gidTopic + '\', \'' + gidComment + '\', ' + accountIDTarget + ', ' + Object.toJSON( strTargetName ) + ');';
				elBanUserLink.show();
			}
			else
			{
				elBanUserLink.hide();
			}
		}

		$('forum_user_menu_inner').style.minWidth = $(elLink).getWidth() + 'px';

		ShowMenu( elLink, g_elAuthorMenu, 'left', 'bottom', 2 );
	}

	return false;
}

function Forum_BanUser( gidTopic, gidComment, accountIDTarget, strTargetName )
{
	if ( g_rgForumTopics[ gidTopic ] )
	{
		var form = $('forum_banuser_form');
		form.elements['gidtopic'].value = gidTopic;
		form.elements['gidcomment'].value = gidComment;
		form.elements['accountidtarget'].value = accountIDTarget;
		form.elements['targetname'].value = strTargetName;
		form.elements['ban_reason'].value='';
		$('forum_banuser_targetname').update( strTargetName );
		showContentAsModal( 'forum_modal', $('forum_banuser_modal_content') );
		form.elements['ban_reason'].focus();
	}
}

function Forum_OnBanUserSubmit()
{
	var form = $('forum_banuser_form');
	var gidTopic = form.elements['gidtopic'].value;
	var gidComment = form.elements['gidcomment'].value;
	var accountIDTarget = form.elements['accountidtarget'].value;
	var strBanReason = form.elements['ban_reason'].value;
	var strTargetName = form.elements['targetname'].value;
	var nBanLengthInDays = form.elements['ban_length'].value;

	if ( g_rgForumTopics[ gidTopic ] )
	{
		g_rgForumTopics[gidTopic].BanUser( accountIDTarget, gidComment, strBanReason, strTargetName, nBanLengthInDays );
	}
}

function Forum_ShowForumAudits( gidForumTopic, gidObject )
{
	if ( g_rgForumTopics[ gidForumTopic ] )
	{
		g_rgForumTopics[ gidForumTopic ].ShowAudits( gidObject );
	}
}


function ShowForumModalSuccess( strMessage, strDetails )
{
	$('forum_success_modal_message').update( strMessage );
	$('forum_success_modal_text').update( strDetails ? strDetails : '&nbsp;' );
	showContentAsModal( 'forum_modal', $('forum_success_modal_content' ) );
}

var g_fnForumConfirmAction;
function Forum_ConfirmAction( strMessage, strDetails, fnAction, strButtonText )
{
	$('forum_confirm_message').update( strMessage );
	$('forum_confirm_text').update( strDetails ? strDetails : '&nbsp;' );
	$('forum_confirm_button').update( strButtonText ? strButtonText : 'OK' );
	showContentAsModal( 'forum_modal', $('forum_confirm_modal_content' ) );
	g_fnForumConfirmAction = fnAction;
}

function Forum_OnConfirmActionOK()
{
	g_fnForumConfirmAction();
	hideModal( 'forum_modal' );
}

CForumTopic = Class.create( {

	m_rgForumData: null,
	m_strActionURL: null,
	m_gidForumTopic: null,
	m_rgRawData: null,	//raw text and author data, for editing/quoting

	m_bAJAXInFlight: false,

	// for editing
	m_elTextArea: null,
	m_oTextAreaSizer: null,

	initialize: function( rgForumData, url, gidTopic, rgRawData )
	{
		this.m_rgForumData = rgForumData;
		this.m_strActionURL = url;
		this.m_gidForumTopic = gidTopic;
		this.m_rgRawData = rgRawData;


		this.m_elTextArea = $( 'forum_topic_edit_' + gidTopic + '_textarea');

		if ( this.m_elTextArea )
		{
			this.m_oTextAreaSizer = new CAutoSizingTextArea( this.m_elTextArea, 40 );
		}

		// render audits out of the comment thread
		// we'll defer this to make sure the comment thread is initialized before it runs
		var fn = function( thisClosure ) {
			if ( g_rgForumTopicCommentThreads[ thisClosure.m_gidForumTopic ] )
				thisClosure.RenderCommentAudits( g_rgForumTopicCommentThreads[ thisClosure.m_gidForumTopic ].m_rgRawCommentCache );
		};
		fn.defer( this );

	},

	CheckTextAreaSize: function()
	{
		this.m_oTextAreaSizer.OnTextInput();
	},

	GetActionURL: function( action )
	{
		var url = this.m_strActionURL + action + '/';
		if ( this.m_rgForumData['feature'] )
			url += this.m_rgForumData['feature'] + '/';
		return url;
	},

	ParametersWithDefaults: function( params )
	{
		if ( !params )
			params = {};

		params['gidforumtopic'] = this.m_gidForumTopic;
		params['sessionid'] = g_sessionID;

		return params;
	},

	Edit: function( title, text )
	{
		if ( this.m_bAJAXInFlight )
			return;

		this.m_bAJAXInFlight = true;

		new Ajax.Request( this.GetActionURL( 'edittopic' ), {
			method: 'post',
			parameters: this.ParametersWithDefaults( { title: title, text: text } ),
			onSuccess: function() { window.location.reload() },
			onFailure: this.OnModeratorActionFailed.bind(this)
		});
	},

	Delete: function()
	{
		if ( this.m_bAJAXInFlight )
			return;

		this.m_bAJAXInFlight = true;

		new Ajax.Request( this.GetActionURL( 'deletetopic' ), {
			method: 'post',
			parameters: this.ParametersWithDefaults(),
			onSuccess: this.RedirectToTopicListPage.bind(this),
			onFailure: this.OnModeratorActionFailed.bind(this)
		} );
	},

	SetTopicFlag: function( flag, value )
	{
		if ( this.m_bAJAXInFlight )
			return;

		this.m_bAJAXInFlight = true;

		new Ajax.Request( this.GetActionURL( 'moderatetopic' ), {
			method: 'post',
			parameters: this.ParametersWithDefaults( { action: 'setflag', flag: flag, value: value } ),
			onSuccess: function() { window.location.reload() },
			onFailure: this.OnModeratorActionFailed.bind(this)
		});
	},

	BanUser: function( accountIDTarget, gidComment, strBanReason, strTargetName, nBanLengthInDays )
	{
		new Ajax.Request( this.GetActionURL( 'banuser' ), {
			method: 'post',
			parameters: this.ParametersWithDefaults( { target: accountIDTarget, banlength: nBanLengthInDays, gidcomment: gidComment, ban_reason: strBanReason } ),
			onSuccess: this.OnBanUserSuccess.bind( this, strTargetName ),
			onFailure: this.OnBanUserFailed.bind( this, strTargetName )
		});
	},

	OnBanUserSuccess: function( strTargetName, transport )
	{
		ShowForumModalSuccess(
			'"%s" has been banned.'.replace( /%s/, strTargetName ),
			'The user\'s posting and editing privileges have been revoked.'
		);
	},

	OnBanUserFailed: function( strTargetName, transport )
	{
		ShowForumModalSuccess(
			'Failed to ban "%s"'.replace( /%s/, strTargetName ),
			'You may not have permission to ban users.  Please verify your account\'s permissions or try again later.'
		);
	},

	ReportPost: function( author, gidcomment )
	{
		var form = $('forum_reportpost_form');

		// blank out the text area if the user is making a new report
		if ( form.elements['gidcomment'].value != gidcomment )
			form.elements['report_reason'].value = '';

		form.elements['author'].value = author;
		form.elements['gidcomment'].value = gidcomment;
		form.elements['gidtopic'].value = this.m_gidForumTopic;

		showContentAsModal( 'forum_modal', $('report_modal_content') );

		form.elements['report_reason'].focus();
	},

	SubmitReportPost: function()
	{
		var form = $('forum_reportpost_form');

		var author = form.elements['author'].value;
		var gidcomment = form.elements['gidcomment'].value;
		var report = form.elements['report_reason'].value;

		if ( report && report.length > 0 )
		{
			new Ajax.Request( this.GetActionURL( 'reportpost' ), {
				method: 'post',
				parameters: this.ParametersWithDefaults( { author: author, gidcomment: gidcomment, report: report } ),
				onSuccess: this.OnReportPostSuccess.bind(this),
				onFailure: this.OnModeratorActionFailed.bind(this)
			});
		}

		hideModal( 'forum_modal' );
		form.elements['report_reason'].value='';
	},

	OnReportPostSuccess: function()
	{
		ShowForumModalSuccess( 'Thank you for your report', 'Your report has been sent to the moderators for review.' );
	},

	MoveTopic: function()
	{
		var form = $('forum_movetopic_form');

		// blank out the text area if the user is making a new report
		form.elements['gidforumtopic'].value = this.m_gidForumTopic;

		this.SetMoveTopicClan( this.m_rgForumData['owner'], null );

		if ( $('associate_game' ) && $('game_select_suggestions_ctn') && $('game_select_suggestions') && !$('associate_game').m_bInitialized )
		{
			var elAssociateGame = $('associate_game');
			elAssociateGame.m_bInitialized = true;
			new CGameSelector( $('associate_game'), $('game_select_suggestions_ctn'), $('game_select_suggestions'), this.OnMoveTopicSelectGame.bind(this) );
		}

		if ( !$('submit_move_topic_button').m_bBound )
		{
			$('submit_move_topic_button').observe( 'click', this.SubmitMoveTopic.bind(this) );
			$('submit_move_topic_button').m_bBound = true;
		}

		if ( $('forum_movetopic_globaldestinations') && !$('forum_movetopic_globaldestinations').m_bBound )
		{
			$('forum_movetopic_globaldestinations').observe( 'click', this.SetMoveTopicClan.bind( this, false, 753 ) );
			$('forum_movetopic_globaldestinations').m_bBound = true;
		}

		showContentAsModal( 'forum_modal', $('forum_movetopic_modal_content') );
	},

	SetMoveTopicClan: function( clanidowner, appidowner )
	{
		var form = $('forum_movetopic_form');
		var rgReloadParams = null;
		if ( clanidowner )
		{
			if ( form.elements['destination_clanidowner'].value != clanidowner )
			{
				form.elements['destination_clanidowner'].value = clanidowner;
				form.elements['destination_appidowner'].value = '';
				rgReloadParams = { destination_clanid: clanidowner };
			}
		}
		else if ( appidowner )
		{
			if ( form.elements['destination_appidowner'].value != appidowner )
			{
				form.elements['destination_clanidowner'].value = '';
				form.elements['destination_appidowner'].value = appidowner;
				rgReloadParams = { destination_appid: appidowner };
			}
		}

		if ( rgReloadParams )
		{
			$(form.elements['destination_gidforum']).hide();
			$('forum_movetopic_destination_throbber').show();
			$('forum_movetopic_destinationclan') && $('forum_movetopic_destinationclan').update('&nbsp;');
			$('forum_movetopic_destination_unavailable').hide();

			new Ajax.Request( this.GetActionURL( 'gettopicdestinations' ), {
				method: 'get',
				parameters: this.ParametersWithDefaults( rgReloadParams ),
				onSuccess: this.OnMoveTopicDestinations.bind( this, clanidowner, appidowner ),
				onFailure: this.OnMoveTopicDestinationsFailed.bind( this, clanidowner, appidowner )
			} );
		}
	},

	OnMoveTopicSelectGame: function( GameSelector, rgAppData )
	{
		$('associate_game').value='';

		this.SetMoveTopicClan( false, rgAppData.appid );
	},

	SubmitMoveTopic: function()
	{
		var form = $('forum_movetopic_form');
		new Ajax.Request( this.GetActionURL( 'movetopic' ), {
			method: 'post',
			parameters: this.ParametersWithDefaults( form.serialize( true ) ),
			onSuccess: this.OnMoveTopicSuccess.bind(this),
			onFailure: this.OnModeratorActionFailed.bind(this)
		});
	},

	OnMoveTopicDestinations: function( clanidowner, appidowner, transport )
	{
		var form = $('forum_movetopic_form');
		if ( ( !clanidowner || form.elements['destination_clanidowner'].value == clanidowner ) &&
			( !appidowner || form.elements['destination_appidowner'].value == appidowner ) )
		{
			$('forum_movetopic_destination_throbber').hide();
			var elSelect = $(form.elements['destination_gidforum']);
			elSelect.update('');
			var rgForums = transport.responseJSON.rgForums;
			if ( rgForums && rgForums.length > 0 )
			{
				for ( var i = 0; i < rgForums.length; i++ )
				{
					var rgForum = rgForums[i];
					var elOption = new Element( 'option', { value: rgForum.gidforum } );
					elOption.update( rgForum.name.escapeHTML() );
					elSelect.appendChild( elOption );
				}
			}
			else
			{
				this.OnMoveTopicDestinationsFailed( clanidowner, appidowner, transport );
				return;
			}

			var elName = $('forum_movetopic_destinationclan');
			if ( elName )
				elName.update( transport.responseJSON.strName );

			elSelect.show();
			elSelect.focus();
			$('submit_move_topic_button').show();
		}
	},

	OnMoveTopicDestinationsFailed: function( clanidowner, appidowner, transport )
	{
		var form = $('forum_movetopic_form');
		if ( ( !clanidowner || form.elements['destination_clanidowner'].value == clanidowner ) &&
			( !appidowner || form.elements['destination_appidowner'].value == appidowner ) )
		{
			$('forum_movetopic_destination_throbber').hide();
			$(form.elements['destination_gidforum']).hide();
			$('forum_movetopic_destination_unavailable').show();
			$('submit_move_topic_button').hide();
		}
	},

	OnMoveTopicSuccess: function( transport )
	{
		var strNewURL = null;
		if ( transport && transport.responseJSON && transport.responseJSON.newtopic )
			strNewURL = transport.responseJSON.newtopic;

		$('forum_movetopic_results_back').observe( 'click', this.RedirectToTopicListPage.bind(this) );

		if ( strNewURL )
			$('forum_movetopic_results_topic').observe( 'click', function() { window.location = strNewURL; } );
		else
			$('forum_movetopic_results_topic').hide();

		showContentAsModal( 'forum_modal', $('forum_movetopic_results') );
	},

	RedirectToTopicListPage: function()
	{
		window.location = this.m_rgForumData['forum_url'];
	},

	OnModeratorActionFailed: function( transport )
	{
		this.m_bAJAXInFlight = false;
		ShowForumModalSuccess( 'Failed to modify the topic.  Please try again later.' );
	},

	RecordTopicViewed: function( timelastpost )
	{
		// fire and forget (success sets a cookie)
		new Ajax.Request( this.GetActionURL( 'recordtopicviewed' ), {
			method: 'post',
			parameters: this.ParametersWithDefaults( { timelastpost: timelastpost ? timelastpost + 1 : 0 } )
		});
	},

	Subscribe: function( fnExternalOnSuccess )
	{
		if ( g_rgForumTopicCommentThreads[ this.m_gidForumTopic ] )
		{
			var fnSuccess = function() {
				ShowForumModalSuccess(  'You\'ve been subscribed to this discussion.', 'You\'ll receive a comment notification whenever someone replies to this discussion.' );
				fnExternalOnSuccess();
			};
			var fnFail = ShowForumModalSuccess.bind( null, 'We\'re sorry, we were unable to subscribe to this discussion.  Please try again later.');
			g_rgForumTopicCommentThreads[ this.m_gidForumTopic ].Subscribe( fnSuccess, fnFail );
		}
	},

	Unsubscribe: function( fnExternalOnSuccess )
	{
		if ( g_rgForumTopicCommentThreads[ this.m_gidForumTopic ] )
		{
			var fnSuccess = function() {
				ShowForumModalSuccess(  'You\'ve been unsubscribed from this discussion.', 'You\'ll no longer receive comment notifications from this discussion.' );
				fnExternalOnSuccess();
			};
			var fnFail = ShowForumModalSuccess.bind( null, 'We\'re sorry, we were unable to unsubscribe from this discussion.  Please try again later.');
			g_rgForumTopicCommentThreads[ this.m_gidForumTopic ].Unsubscribe( fnSuccess, fnFail );
		}
	},

	ResolveReports: function()
	{
		if ( this.m_bAJAXInFlight )
			return;

		this.m_bAJAXInFlight = true;

		var Topic = this;
		new Ajax.Request( this.GetActionURL( 'moderatetopic' ), {
			method: 'post',
			parameters: this.ParametersWithDefaults( { action: 'resolvereports' } ),
			onSuccess: function(transport) {
				var cReportsResolved = transport.responseJSON.resolved_count || 0;
				var strMessage;
				if ( cReportsResolved > 0 )
					strMessage = 'All reports associated with this topic have been marked resolved.<br>Number of reports that had to be resolved: ' + cReportsResolved;
				else
					strMessage = 'All reports associated with this topic have already been marked as resolved.';

				ShowForumModalSuccess(  'Reports resolved.', strMessage );
				Topic.m_bAJAXInFlight = false;
			},
			onFailure: this.OnModeratorActionFailed.bind(this)
		});
	},

	RenderCommentAudits: function( rgCommentRawData )
	{
		var rgCommentAudits = this.m_rgForumData.comment_audits;
		if ( !rgCommentAudits || ( rgCommentAudits instanceof Array && rgCommentAudits.length == 0 ) )
			return;

		for ( gidComment in rgCommentRawData )
		{
			if ( rgCommentAudits[ gidComment ] )
			{
				var rgAudit = rgCommentAudits[gidComment];
				var elComment = $('comment_content_' + gidComment );
				if ( rgAudit['edit'] )
				{
					elComment.insert( {after: rgAudit['edit'] } );
				}
				if ( rgAudit['delete'] )
				{
					var elDeletedComment = $('deleted_comment_' + gidComment );
					if ( elDeletedComment )
					{
						elDeletedComment.down('span.commentthread_deleted_comment_audit').update( rgAudit['delete'] );
					}
				}
			}
		}
	},

	ShowAudits: function ( gidObject )
	{
		var strURL = this.GetActionURL( 'auditlog' );
		var rgParams = { gidforumtopic: this.m_gidForumTopic, gidobject: gidObject };

		window.open( strURL + '?' + Object.toQueryString( rgParams ), 'auditlog', 'height=540,width=640,resize=yes,scrollbars=yes');
	},

	GetSearchURL: function( rgSearchParams )
	{
		var strBaseURL = this.m_rgForumData['forum_search_url'];
		if ( this.m_rgForumData['type'] == 'Workshop' )
			rgSearchParams['appid'] = this.m_rgForumData['appid'];

		return strBaseURL + '?' + Object.toQueryString( rgSearchParams );
	}

} );

CCommentThreadForumTopic = Class.create( CCommentThread, {

	m_iInitialPage: 0,

	initialize: function( $super, type, name, rgCommentData, url, quoteBoxHeight )
	{
		$super( type, name, rgCommentData, url, quoteBoxHeight );

		this.m_iInitialPage = this.m_iCurrentPage;

		// watch for incoming # urls
		BindOnHashChange( this.OnLocationChange.bind( this ) );
		this.OnLocationChange( window.location.hash );

		if ( this.m_rgCommentData && this.m_rgCommentData.lastvisit )
		{
			var rgNewComments = $$('.commentthread_newcomment');
			if ( rgNewComments.length > 0 )
			{
				ScrollToIfNotInView( rgNewComments[0], 5000, 36 );
			}
		}

		RegisterForumTopicCommentThread( this.m_rgCommentData['feature2'], this );
	},

	OnLocationChange: function( hash )
	{
		if ( hash.match( /^#c[0-9]+$/ ) )
		{
			var gidComment = hash.substring(2);
			if ( !$( 'comment_' + gidComment ) )
				this.GoToPageWithComment( gidComment );
			else
				this.UpdatePermLinkHighlight();
		}
		else if ( hash.match( /^#p[0-9]+$/ ) )
		{
			var iPage = parseInt( hash.substring(2) ) - 1;
			if ( this.m_iCurrentPage != iPage )
				this.GoToPage( iPage );
		}
		else if ( !hash )
		{
			// reset to initial view
			this.GoToPage( this.m_iInitialPage );
			this.UpdatePermLinkHighlight();
		}
	},

	UpdatePermLinkHighlight: function()
	{
		var elContainer = $('commentthread_' + this.m_strName + '_posts' );
		elContainer.childElements().invoke( 'removeClassName', 'permlinked' );

		var hash = window.location.hash;
		if ( hash && hash.length > 2 && hash.match( /#c[0-9]+/ ) )
		{
			var elComment = $('comment_' + hash.substring( 2 ));
			var elDeletedComment = $('deleted_comment_' + hash.substring( 2 ));
			if ( elComment )
			{
				if ( elDeletedComment )
				{
					elDeletedComment.hide();
					elComment.show();
				}
				elComment.addClassName( 'permlinked' );
				ScrollToIfNotInView.defer( elComment, 5000, 36 );
			}
		}
	},

	/* override to get rid of animation */
	DoTransitionToNewPosts: function( response, eRenderReason )
	{
		var strNewHTML = response.comments_html;

		var elPosts = $('commentthread_' + this.m_strName + '_posts' );
		var elContainer = $('commentthread_' + this.m_strName + '_postcontainer' );
		var elArea = $('commentthread_' + this.m_strName + '_area' );

		var topic = g_rgForumTopics[ this.m_rgCommentData['feature2'] ];

		var bNewPost = ( eRenderReason == CCommentThread.RENDER_NEWPOST );

		// new posts get an animation, anything else just gets snapped in
		elContainer.style.height = elContainer.getHeight() + 'px';

		elPosts.update( strNewHTML );

		if ( topic )
		{
			topic.RenderCommentAudits( this.m_rgRawCommentCache );
		}

		if ( eRenderReason == CCommentThread.RENDER_GOTOPAGE || eRenderReason == CCommentThread.RENDER_NEWPOST )
		{
			if ( this.m_iCurrentPage != this.m_iInitialPage || window.location.hash.length > 1)
				window.location.hash = 'p' + ( this.m_iCurrentPage + 1);
		}
		else
			this.UpdatePermLinkHighlight();

		if ( bNewPost )
		{
			if ( elContainer.effect )
				elContainer.effect.cancel();

			window.setTimeout( function() {
				elContainer.effect = new Effect.Morph( elContainer, { style: 'height: ' + elPosts.getHeight() + 'px', duration: 0.25, afterFinish: function() { elPosts.style.position = 'static'; elContainer.style.height = 'auto';  } } );
			}, 10 );
		}
		else
		{
			elContainer.style.height = '';
			if ( eRenderReason != CCommentThread.RENDER_GOTOPOST && eRenderReason != CCommentThread.RENDER_DELETEDPOST )
				ScrollToIfNotInView.defer( elArea, 80 );
		}

		if ( this.m_iCurrentPage == this.m_cMaxPages - 1 )
		{
			if ( topic )
				topic.RecordTopicViewed( response.timelastpost );
		}

	},


	DeleteComment: function( $super, gidComment )
	{
		Forum_ConfirmAction(
			'Are you sure you want to delete this post?',
			'',
			$super.bind( this, gidComment ),
			'Delete'
		);
	}

});

