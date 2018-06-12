
function ToggleManageFriends()
{
	if ( g_bSearch )
		ToggleSearchBar();

	g_bManage = !g_bManage;
	if ( g_bManage )
	{
		$J( '#manage_friends' ).addClass( 'manage' );
		$J( '#manage_friends_control' ).addClass( 'btn_active' );
		$J( '#search_results>.selectable' ).addClass( 'manage' );
		$J( '#button_manage_image' ).html( '<img src="https://steamcommunity-a.akamaihd.net/public/images/skin_1/icon_manage_on.png" >' );
		$J( '.selectable_overlay' ).on( 'click.manage_friends', function( event ) {
			if ( !event.which || event.which == 1 )
			{
				event.preventDefault();
				$J( this ).siblings('.select_friend' ).find('input[type=checkbox]' ).prop( 'checked', function( i, v ) { return !v; } );
				$J( this ).parent().toggleClass( 'selected' );
				UpdateSelection();
			}
		});
	}
	else
	{
		$J( '#button_manage_image' ).html(  '<img src="https://steamcommunity-a.akamaihd.net/public/images/skin_1/icon_manage_off.png" >' );
		$J( '#manage_friends' ).removeClass( 'manage' );
		$J( '#manage_friends_control' ).removeClass( 'btn_active' );
		$J( '#search_results>.selectable.manage' ).removeClass( 'manage' );
		$J( '#search_results>.selectable' ).removeClass( 'groupInviteFailed' );
		$J( '.selectable_overlay' ).off( 'click.manage_friends' );
	}
}

function ToggleSearchBar()
{
	if ( g_bManage )
		ToggleManageFriends();

	g_bSearch = !g_bSearch;

	if ( g_bSearch )
	{
		$J( '#manage_search_control' ).addClass( 'active' );
		$J( '#search_text_box.search_your_friends' ).addClass( 'btn_active active' );
		$J( '#button_search_image' ).html( '<img src="https://steamcommunity-a.akamaihd.net/public/images/skin_1/icon_search_on.png" >' );
	}
	else
	{
		$J( '#manage_search_control' ).removeClass( 'active' );
		$J( '#search_text_box.search_your_friends' ).removeClass( 'btn_active active' );
		$J( '#button_search_image' ).html( '<img src="https://steamcommunity-a.akamaihd.net/public/images/skin_1/icon_search_off.png" >' );
	}
}

function SelectedCount( nCount )
{
	$J( '#selected_msg_err' ).addClass( 'hidden' );
	$J( '#selected_msg' ).removeClass( 'hidden' );
	$J( '#selected_count' ).html( nCount );
}

function SelectedError( txt )
{
	$J( '#selected_msg').addClass( 'hidden' );
	$J( '#selected_msg_err' ).removeClass( 'hidden' ).html( txt );
}

function SelectedNone( txt )
{
	$J( '#selected_msg').addClass( 'hidden' );
	$J( '#selected_msg_err' ).addClass( 'hidden' );
}

function GetCheckedAccounts( selector )
{
	var rgAccounts = [];
	$J(selector).each(function (i, ele) {
		rgAccounts.push($J(ele).data('steamid'));
	});

	return rgAccounts;
}

function MassApplyFriendAction( action, navid, selector )
{
	var rgAccounts = GetCheckedAccounts( selector );

	if ( rgAccounts.length < 1 ) { SelectedError( 'You have not selected any friends.' ); return; }

	// special cases:
	if ( action === 'group_invite' )
	{
		PresentGroupInviteOptions( rgAccounts );
		return;
	}

	$J.ajax({
		url:  g_rgProfileData['url'] + 'friends/action',
		type: 'POST',
		data: {
			sessionid: g_sessionID,
			steamid: g_steamID,
			ajax: 1,
			action: action,
			steamids: rgAccounts
		}
	}).fail(function (jqxhr) {
		SelectedError( 'Sorry, something went wrong.' ); return;
	}).done(function (data) {
		if ( data.success == 1 )
		{
			if ( data.rgCounts )
			{
				g_rgCounts = data.rgCounts;
				UpdateCounts();
			}

			SelectNone();
			g_PageController.Navigate( navid );
		}
	});
}

function ApplyFriendAction( action, steamid, elem, fnCallback )
{
	$J.ajax({
		url:  g_rgProfileData['url'] + 'friends/action',
		type: 'POST',
		data: {
			sessionid: g_sessionID,
			steamid: g_steamID,
			ajax: 1,
			action: action,
			steamids: [steamid]
		}
	}).fail(function (jqxhr) {

	}).done(function (data) {
		if ( data.success == 1 )
		{
			$J( elem ).slideUp();
			if ( data.rgCounts )
			{
				g_rgCounts = data.rgCounts;
				UpdateCounts();
			}
		}
	else
		{

		}
	}).always( function () {
		if ( fnCallback ) { fnCallback(); }

	});
}

function ConfirmLeaveGroup( steamid, strGroupName, elem )
{
	ShowConfirmDialog( strGroupName, 'Are you sure you want to leave this group?', 'Leave Group' )
		.done( function( ){
			ApplyFriendAction( 'leave_group', steamid, elem, UpdateGroupList );
		} );
}

function ExecFriendAction( action, navid )
{
	return MassApplyFriendAction( action, navid, '#search_results>.selectable.selected:visible' );
}
function IgnoreAllInvites()
{
	return MassApplyFriendAction( 'ignore_invite', 'friends/pending', '#search_results>.selectable:visible' );
}

// selection functions
function UpdateSelection()
{
	var cSelected = $J( '#search_results>.selectable.selected:visible' ).length;
	if ( cSelected > 0 )
	{
		SelectedCount( cSelected );
	}
	else
	{
		SelectedNone();
	}
}
function SelectAll()
{
	$J( '#search_results>.selectable' ).addClass( 'selected' );
	$J( '#search_results .select_friend_checkbox' ).prop( 'checked', true );
	UpdateSelection();
}
function SelectNone()
{
	$J( '#search_results>.selectable' ).removeClass( 'selected' );
	$J( '#search_results .select_friend_checkbox' ).prop( 'checked', false );
	UpdateSelection();
}
function SelectInverse()
{
	$J( '#search_results>.selectable' ).toggleClass( 'selected' );
	$J( '#search_results .select_friend_checkbox' ).prop( 'checked', function(_, checked) { return !checked; } );
	UpdateSelection();
}
function ToggleSelectFriend( elem )
{
	$J( elem ).toggleClass( 'selected' );
	UpdateSelection();
}

// show only the elements that are children of ctnElem and whose given 'attr' attribute contains the 'term' string
function ShowMatching( parentId, childClass, attr, val, fnCallback )
{
	var term = ( !val || 0 === val.length || !val.trim() ) ? '' : val.trim().replace( /"/g, '').toLowerCase();

	$J( '#' + parentId + '>.' + childClass +  ( term ? '[' + attr + '*="' + term + '"]' : '' ) + ':hidden' ).show();
	if ( term )
	{
		$J( '#' + parentId + '>.' + childClass + ':not([' + attr + '*="' + term + '"])' ).hide();
	}
	if ( fnCallback ) { fnCallback(); }
	if ( g_bManage ) { UpdateSelection(); }
}

function CopyText( txt )
{
	var textArea = document.createElement("textarea");
	textArea.style.position = 'fixed';
	textArea.style.top = 0;
	textArea.style.left = 0;
	textArea.style.width = '2em';
	textArea.style.height = '2em';
	textArea.style.padding = 0;
	textArea.style.border = 'none';
	textArea.style.outline = 'none';
	textArea.style.boxShadow = 'none';
	textArea.style.background = 'transparent';
	textArea.value = txt;
	document.body.appendChild(textArea);
	textArea.select();
	try {
		document.execCommand('copy');
	} catch (err) { }
	document.body.removeChild(textArea);
}

function CreateInvite()
{
	$J( '#invite_throbber' ).show();

	$J.ajax({
		url: 'https://steamcommunity.com/invites/ajaxcreate',
		type: 'POST',
		data: {
			sessionid: g_sessionID,
			steamid_user: g_steamID
		}
	}).fail(function (jqxhr) {
		$J( '#invite_throbber' ).hide();
	}).done(function (data) {
		$J( '#invite_throbber' ).hide();

		if ( data.success == 1 )
		{
			$J( '#invite_throbber' ).hide();
			AppendInvite( data.invite, '#invite_container'  );
		}
	});
}

// clone a row element and insert it in the correct table.
function CreateRow( invite, elem_append, elem_show )
{
	var createDate = new Date( invite.time_created * 1000 );
	var newRow  = $J('#invite_token_row').html().replace( /%s/g, invite.invite_token ).replace( /%date%/g, createDate.toLocaleDateString() );
	$J( elem_show ).show();
	$J( elem_append ).append( newRow );
}

function AppendInvite( invite, elem_append )
{
	CreateRow( invite, '#invite_container', '#token_table_header' );
}

function DisplayTokens( )
{
	for ( i=0; i < g_rgTokens.length; i++ )
	{
		if ( g_rgTokens[i].valid ) { AppendInvite( g_rgTokens[ i ] ); }
	}
}

function RevokeToken( invite_token )
{
	$J.ajax({
		url: 'https://steamcommunity.com/invites/ajaxrevoke',
		type: 'POST',
		data: {
			sessionid: g_sessionID,
			steamid: g_steamID,
			invite_token: invite_token
		}
	}).always( function() {
		$J( '#invite_token_row_' + invite_token ).remove();
	})
}

function UnlinkFacebook( from_page )
{
	PostToURLWithSession( 'https://steamcommunity.com/actions/FacebookAccountUnlink/', {from_page: from_page } );
}

function LinkFacebook( from_page )
{
	PostToURLWithSession( 'https://steamcommunity.com/actions/LinkMyFacebookProfile/', {from_page: from_page } );
}

function ToggleForEmpty( listSelector, messageElem )
{
	if ( $J( listSelector ).length ) { $J( messageElem ).hide(); } else { $J( messageElem ).show(); }
}

function UpdateFriendsList()
{
	ToggleForEmpty( '#search_results>.selectable:visible', '#search_results_empty' );
	$J( '#search_results>.state_block' ).each( function( i ) {
		es = '#search_results>.selectable.' + $J( this ).data('group') + ':visible';
		elem = $J( '#search_results>.selectable.' + $J( this ).data('group') + ':visible' );
		if ( elem.length )
		{
			this.show();
		}
		else
		{
			this.hide();
		}
	});
}
function InitFriends()
{
	g_bManage = false;
	UpdateFriendsList();
	UpdateCounts();
}
function InitPending()
{
	g_bManage = false;
	UpdateFriendsList();
	UpdateCounts();
}

function UpdatePendingList()
{
	return ToggleForEmpty( '#search_results>.invite_row:visible', '#search_results_empty' );
}

function UpdateGroupList()
{
	return ToggleForEmpty( '#search_results>.group_block:visible', '#search_results_empty' );
}

function UpdateCounts()
{
	function ApplyValueIfSet( selector, val )
	{
		if ( val )
		{
			$J( selector ).html( val ? val : '' );
			$J( selector ).show();
		}
		else
		{
			$J( selector ).hide();
		}
	}
	$J('.friends_count').html( g_rgCounts.cFriends );
	$J('.friends_limit').html( g_cFriendsLimit );
	ApplyValueIfSet('#menu_friends_ct', g_rgCounts.cFriends );
	ApplyValueIfSet('#menu_friends_pending_ct', g_rgCounts.cFriendsPending );
	ApplyValueIfSet('#menu_friends_common_ct', g_rgCounts.cFriendsCommon );
	ApplyValueIfSet('#menu_blocked_ct', g_rgCounts.cFriendsBlocked );
	ApplyValueIfSet('#menu_following_ct', g_rgCounts.cFollowing );
	ApplyValueIfSet('#menu_groups_ct', g_rgCounts.cGroups );
	ApplyValueIfSet('#menu_groups_pending_ct', g_rgCounts.cGroupsPending );
	ApplyValueIfSet('#menu_groups_common_ct', g_rgCounts.cGroupsCommon );

	if ( typeof UpdateNotificationCounts != 'undefined' )
		UpdateNotificationCounts();

}

function OnNavMenuClick( event )
{
	var $NavMenu = $J( this );
	var $NavContainer = $NavMenu.parent();

	if ( !window.UseSmallScreenMode() )
		return;

		event = event || window.event;
	var elClicked = event.target || event.srcElement;
	var rgButton = $J( elClicked ).closest( '.icon_item' );
	if ( !rgButton || rgButton.length == 0 )
		return;

	var $ClickedButton = $J( rgButton[0] );

	var bWasActive = $ClickedButton.hasClass( 'active' );
	$NavMenu.toggleClass( 'expanded' );
	if ( bWasActive )
	{
		event.stopPropagation();
		event.preventDefault();
		return;
	}
}

