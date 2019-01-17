
//---------------------------------------------------------
// globals to keep track of the number of invite panels left
//-----------------------------------------
var nFriendsInvites = 0;
var nGroupInvites = 0;


//---------------------------------------------------------
// Purpose: helper func to remove an invite once acted upon, and clear the
//  rollup labels if needed
//---------------------------------------------------------
function CleanupPanel( oPanel, bIsFriendsInvite )
{
	oPanel.AddClass( "ActedOnRequest" );
	oPanel.DeleteAsync( 0.25 );

	if ( oPanel.GetParent().GetChild(0) == oPanel ) {
		$.DispatchEvent( 'MoveUpFromListItems' );
	}

	if ( bIsFriendsInvite )
		nFriendsInvites--;
	else
		nGroupInvites--;

	var oFriendsHeader = $( '#FriendsInviteHeader' );
	if ( oFriendsHeader && nFriendsInvites == 0 ) {
		oFriendsHeader.AddClass( "ActedOnRequest" );
		oFriendsHeader.DeleteAsync( 0.25 );
	}

	var oGroupsHeader = $( '#GroupsInviteHeader' );
	if ( oGroupsHeader && nGroupInvites == 0 ) {
		oGroupsHeader.AddClass( "ActedOnRequest" );
		oGroupsHeader.DeleteAsync( 0.25 );
	}

	if ( nFriendsInvites == 0 && nGroupInvites == 0 )
	{
		$.GetContextPanel().Refresh();
	}

	$.Msg( "CleanupPanel" );

	if ( nFriendsInvites > 0 )
	{
		// fix up the label counting how many pending invites there are
		var oFriendsInviteCountLabel = $( '#FriendsInviteCount' );
		if ( !oFriendsInviteCountLabel )
		{
			$.Msg( 'Failed to find friend invite count label' );
			return;
		}
		
		var labelContents;

		if ( nFriendsInvites > 1 )
		{
			labelContents = "You have %s friend invites";
		}	
		else
		{
			labelContents = "You have %s friend invite";
		}

		labelContents = labelContents.replace( /%s/g, "" + nFriendsInvites );

		oFriendsInviteCountLabel.text = labelContents;
	}

	if ( nGroupInvites > 0 )
	{
		// fix up the label counting how many pending invites there are
		var oGroupsInviteCountLabel = $( '#GroupsInviteCount' );
		if ( !oGroupsInviteCountLabel )
		{
			$.Msg( 'Failed to find group invite count label' );
			return;
		}
		
		var labelContents;

		if ( nGroupInvites > 1 )
		{
			labelContents = "You have %s group invites";
		}	
		else
		{
			labelContents = "You have %s group invite";
		}

		labelContents = labelContents.replace( /%s/g, "" + nGroupInvites );

		oGroupsInviteCountLabel.text = labelContents;
	}	
}


//---------------------------------------------------------
// Purpose: setup the footer functions for this friend/group entry
//---------------------------------------------------------
function SetFooters( accountID, bIsFriendsInvite )
{
	var oPanel = $( '#' + accountID );
	if ( !oPanel )
	{
		$.Msg( 'Failed to find panel for footer ' + accountID );
		return;
	}

	if ( bIsFriendsInvite )
		nFriendsInvites++;
	else
		nGroupInvites++;

	$.RegisterKeyBind( oPanel, 'pad_a,steampad_a', function() {
		$.DispatchEvent( 'AddFriendBySteamID', accountID );
		CleanupPanel( oPanel, bIsFriendsInvite );
	} );
	$.RegisterFooterButton( oPanel, 'pad_a', 'ACCEPT' );

	$.RegisterKeyBind( oPanel, 'pad_x,steampad_x', function() {
		$.DispatchEvent( 'RemoveFriendSteamID', accountID, true );
		CleanupPanel( oPanel, bIsFriendsInvite );
	} );
	$.RegisterFooterButton( oPanel, 'pad_x', 'IGNORE' );

	$.RegisterKeyBind( oPanel, 'pad_y,steampad_y', function() {
		$.DispatchEvent( 'ShowFriendsProfileDetailsBySteamID', accountID );
	} );
	$.RegisterFooterButton( oPanel, 'pad_y', 'SHOW PROFILE' );
}


//---------------------------------------------------------
// Purpose: invite all panel setup
//---------------------------------------------------------
function SetupInviteAllFriends()
{
	var oPanel = $( '#FriendInviteAll' );
	if ( !oPanel )
	{
		$.Msg( 'Failed to find accept all friend button' );
		return;
	}

	$.RegisterFooterButton( oPanel, 'pad_a', '#FriendsInvites_AcceptAllFriends_Footer' );

	$.RegisterEventHandler( 'Activated', oPanel, function( panel, src ) {
		$.DispatchEventAsync( 0.0, 'AddAllPendingFriendInvites' );
	} );
}


//---------------------------------------------------------
// Purpose: ignore all panel setup
//---------------------------------------------------------
function SetupIgnoreAllFriends( oPanelID )
{
	var oPanel = $( '#FriendIgnoreAll' );
	if ( !oPanel )
	{
		$.Msg( 'Failed to find ignore all friend button' );
		return;
	}    

	$.RegisterFooterButton( oPanel, 'pad_a', '#FriendsInvites_IgnoreAllFriends_Footer' );

	$.RegisterEventHandler( 'Activated', oPanel, function( panel, src ) {
		$.DispatchEventAsync( 0.0, 'IgnoreAllPendingFriendInvites' );
	} );
}


//---------------------------------------------------------
// Purpose: invite all panel setup
//---------------------------------------------------------
function SetupInviteAllGroups()
{
	var oPanel = $( '#GroupsInviteAll' );
	if ( !oPanel )
	{
		$.Msg( 'Failed to find accept all groups button' );
		return;
	}

	$.RegisterFooterButton( oPanel, 'pad_a', '#FriendsInvites_AcceptAllGroups_Footer' );

	$.RegisterEventHandler( 'Activated', oPanel, function( panel, src ) {
		$.DispatchEventAsync( 0.0, 'AddAllPendingGroupInvites' );
	} );  
}


//---------------------------------------------------------
// Purpose: invite all panel setup
//---------------------------------------------------------
function SetupIgnoreAllGroup()
{
	var oPanel = $( '#GroupsIgnoreAll' );
	if ( !oPanel )
	{
		$.Msg( 'Failed to find ignore all groups button' );
		return;
	}
	
	$.RegisterFooterButton( oPanel, 'pad_a', '#FriendsInvites_IgnoreAllGroups_Footer' );

	$.RegisterEventHandler( 'Activated', oPanel, function( panel, src ) {
		$.DispatchEventAsync( 0.0, 'IgnoreAllPendingGroupInvites' );
	} );
}

