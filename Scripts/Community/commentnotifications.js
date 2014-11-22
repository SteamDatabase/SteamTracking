
g_rgBrowseTypes = [ 'all', 'owned', 'subscribed' ];
g_strActiveFilter = 'all';
g_rgCommentNotifications = null;
g_strNotificationURL = '';

function InitCommentNotifications( rgCommentNotifications, cPageSize, url )
{
	g_rgCommentNotifications = rgCommentNotifications;
	g_strNotificationURL = url;

	NotificationPaging.Init( cPageSize );
	// this will do our initial page control render
	ApplyCommentNotificationFilters();
}

function CommentNotificationClick( el )
{
	$(el).removeClassName( 'unread' );
	$(el).down('.commentnotification_newposts').update('&nbsp;');

	var elFriend = $(el).down('.commentnotification_friendpost');
	if ( elFriend )
		elFriend.hide();
}

function CommentNotificationIndexFromID( el )
{
	return parseInt( el.id.replace( /^commentnotification_/, '' ) );
}

g_bMarkAllReadInFlight = false;
function MarkAllRead()
{
	if ( g_bMarkAllReadInFlight )
		return;

	g_bMarkAllReadInFlight = true;
	new Ajax.Request( g_strNotificationURL, {
				method: 'post',
				parameters: { action: 'markallread' },
				onSuccess: function() {

					// this will mark each post as read
					$$('.commentnotification.unread').each( CommentNotificationClick );

					// hide the box at the top
					$('commentnotification_newcommentcount_area').hide();

					// clear the mailbox icon if we're on the web
					RefreshNotificationArea();
				},
				onFailure: function() {
					alert( '' );
				},
				onComplete: function() { g_bMarkAllReadInFlight = false; }
	} );
}

function FilterCommentNotifications( filtertype )
{
	for ( var i=0; i < g_rgBrowseTypes.length; i++ )
	{
		var type = g_rgBrowseTypes[i];
		var el = $('browseoption_' + type );
		if( !el ) continue;

		if ( type == filtertype )
			el.addClassName( 'active' );
		else
			el.removeClassName( 'active' );
	}

	g_strActiveFilter = filtertype;
	ApplyCommentNotificationFilters();
}

function ApplyCommentNotificationFilters()
{
	var fnFilter = FilterAll;
	if ( g_strActiveFilter == 'all' )
		fnFilter = FilterAll;
	else if ( g_strActiveFilter == 'owned' )
		fnFilter = FilterOwned;
	else if ( g_strActiveFilter == 'subscribed' )
		fnFilter = FilterSubscribed;

	var oCheckboxStates = {};
	var bAnyTypeFilters = false;
	if ( window.document.forms['browse_types'] )
	{
		var checkboxes = document.forms['browse_types'].elements;
		for( var i=0; i < checkboxes.length; i++ )
		{
			if ( checkboxes[i].checked )
			{
				bAnyTypeFilters = true;
				oCheckboxStates[ checkboxes[i].name ] = true;
			}
		}
	}

	var rgVisibleSet = [];
	for ( var id=0; id < g_rgCommentNotifications.length; id++ )
	{
		var el = $('commentnotification_' + id );
		var bShow = !g_rgCommentNotifications[id].is_removed && fnFilter( g_rgCommentNotifications[id] );

		if ( bAnyTypeFilters && bShow )
			bShow = oCheckboxStates[ g_rgCommentNotifications[id].type ];

		if ( bShow )
		{
			el.filtered = false;
			rgVisibleSet.push( id );
		}
		else
		{
			el.filtered = true;
			el.hide();
		}
	}
	NotificationPaging.SetVisibleSet( rgVisibleSet );
}

function FilterAll( notification )
{
	return true;
}

function FilterOwned( notification )
{
	return notification.is_owner;
}

function FilterSubscribed( notification )
{
	return notification.is_subscribed;
}

var NotificationPaging = {

	m_cTotalCount: 0,
	m_iCurrentPage: 0,
	m_cPageSize: 0,
	m_rgVisibleSet: [],

	Init: function( cPageSize )
	{
		this.m_cPageSize = cPageSize;
		$('notification_pagebtn_prev').observe( 'click', this.PrevPage.bind(this) );
		$('notification_pagebtn_next').observe( 'click', this.NextPage.bind(this) );
		$('notification_fpagebtn_prev').observe( 'click', this.PrevPage.bind(this) );
		$('notification_fpagebtn_next').observe( 'click', this.NextPage.bind(this) );
	},

	SetVisibleSet: function( rgVisibleSet )
	{

		this.m_cTotalCount = rgVisibleSet.length;
		this.m_cMaxPages = Math.max( Math.ceil( this.m_cTotalCount / this.m_cPageSize ), 1 );

		// make sure our page number will be valid after this change
		if ( this.m_cPageSize * this.m_iCurrentPage >= rgVisibleSet.length )
			this.m_iCurrentPage = this.m_cMaxPages - 1;

		this.m_rgVisibleSet = rgVisibleSet;

		this.GoToPage( this.m_iCurrentPage );
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
		if ( iPage >= this.m_cMaxPages || iPage < 0 )
			return;

		var iPageStart = iPage * this.m_cPageSize;
		for ( var i = 0; i < this.m_cTotalCount; i++ )
		{
			var el = $('commentnotification_' + this.m_rgVisibleSet[i] );
			if ( i >= iPageStart && i < iPageStart + this.m_cPageSize )
				el.show();
			else
				el.hide();
		}

		this.m_iCurrentPage = iPage;
		this.UpdatePagingDisplay();
	},

	UpdatePagingDisplay: function()
	{
		var strPrefix = 'notification';

		// this element not displayed on the forum topic page
		$(strPrefix + '_totalcount') && $(strPrefix + '_totalcount').update( v_numberformat( this.m_cTotalCount ) );

		var rgPagingControls = [ strPrefix + '_page', strPrefix + '_fpage' ];
		for ( var i = 0; i < rgPagingControls.length; i++ )
		{
			var strPagePrefix = rgPagingControls[i];

			// these elements are displayed on the forum topic page
			$(strPagePrefix + 'total') && $(strPagePrefix + 'total').update( v_numberformat( this.m_cTotalCount ) );
			$(strPagePrefix + 'start') && $(strPagePrefix + 'start').update( v_numberformat( this.m_iCurrentPage * this.m_cPageSize + 1 ) );
			$(strPagePrefix + 'end') && $(strPagePrefix + 'end').update( Math.min( ( this.m_iCurrentPage + 1 ) * this.m_cPageSize, this.m_cTotalCount ) );

			if ( $(strPagePrefix + 'ctn' ) )
			{
				var bShow = this.m_cTotalCount > 0;

				// footer controls only show when > 1 page
				if ( strPagePrefix == strPrefix + '_fpage' )
					bShow = bShow && this.m_cTotalCount > this.m_cPageSize;

				if ( bShow )
					$(strPagePrefix + 'ctn' ).show();
				else
					$(strPagePrefix + 'ctn' ).hide();
			}

			if ( !$(strPagePrefix + 'controls') )
				continue;


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
		var el = new Element( 'span', {'class': 'notification_paging_pagelink' } );
		el.update( (iPage + 1) + ' ' );

		if ( iPage == this.m_iCurrentPage )
			el.addClassName( 'active' );
		else
			el.observe( 'click', this.GoToPage.bind( this, iPage ) );

		elPageLinks.insert( el );
	}
};

function RemoveCommentNotification( elLink, strCommentThreadType, steamidOwner, gidFeature, gidFeature2 )
{
	var strURL = 'https://steamcommunity.com/comment/' + strCommentThreadType + '/removenotification/' + steamidOwner + '/' + gidFeature;
	if ( gidFeature2 && gidFeature2 != -1 )
		strURL += '?feature2=' + gidFeature2;
	$J.post( strURL, {sessionid: g_sessionID} )
	.done( function() {
		RefreshNotificationArea();
		var index = CommentNotificationIndexFromID( elLink );
		g_rgCommentNotifications[index].is_removed = true;
		ApplyCommentNotificationFilters();
	}).fail( function() {
		ShowAlertDialog( '', '' );
	});
}


