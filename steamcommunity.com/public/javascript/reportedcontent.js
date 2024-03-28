
var gItems = Array();

function AddContentDescriptors( id, add )
{
	$J.post(
		'https://steamcommunity.com/sharedfiles/ajaxupdatecontentdescriptors/',
		{ sessionid: g_sessionID, publishedfileid: id, add: add, remove: [] },
	).done( function( json ) {
		ShowWithFade( $( 'blurred_' + id ) );
		$J( '#item_' + id ).addClass( 'blurred' );
	} );
}

function ModeratorEditContentDescriptors( id )
{
	function fn( publishedfileid )
	{
		ShowWithFade( $( 'blurred_' + id ) );
		$J( '#item_' + id ).addClass( 'blurred' );
	}
	EditContentDescriptors( id, fn );
}

function BanItem( id )
{
	UpdateBanState( id, true );
}

function UnBanItem( id )
{
	UpdateBanState( id, false );
}

function UpdateBanState( id, bBan )
{
	var item = gItems[id];
	var appid = item['consumer_appid'];
	var title = V_EscapeHTML( item['title'] );
	var ban = bBan ? 1 : 0;
	var options = {
		method: 'post',
		postBody: 'id=' + id + '&appid=' + appid + '&sessionid=' + g_sessionID + '&IsBanned=' + bBan,
		onComplete: (function(id){
			return function(transport)
			{
				if ( bBan )
				{
					ShowWithFade($('banned_' + id));
					$J('#item_' + id).addClass('banned');
			}
				else
				{
					$J('#item_' + id).removeClass('banned');
				}
			}
		}(id))
	};
	new Ajax.Request(
		'https://steamcommunity.com/sharedfiles/ban',
		options
	);
}

function VoteBanUsers( id )
{
	var item = gItems[id];
	var appid = item['consumer_appid'];
	var title = V_EscapeHTML( item['title'] );
	var options = {
		method: 'post',
		postBody: 'id=' + id + '&sessionid=' + g_sessionID,
		onComplete: (function(id){
			return function(transport)
			{
				ShowWithFade( $( 'banned_voters_' + id ) );
				$J( '#item_' + id ).addClass( 'vote_banned' );
			}
		}(id))
	};
	new Ajax.Request(
		'https://steamcommunity.com/sharedfiles/banupvoters',
	options
);
}

function MarkIncompatible( id )
{
	var item = gItems[id];
	var appid = item['consumer_appid'];
	var title = V_EscapeHTML( item['title'] );
	var options = {
		method: 'post',
		postBody: 'id=' + id + '&appid=' + appid + '&sessionid=' + g_sessionID + '&incompatible=1',
		onComplete: (function(id){
			return function(transport)
			{
				ShowWithFade( $( 'incompatible_' + id ) );
				$J( '#item_' + id ).addClass( 'incompatible' );
			}
		}(id))
	};
	new Ajax.Request(
		'https://steamcommunity.com/sharedfiles/updateincompatible',
		options
	);
}

function ResetReports( id )
{
	var item = gItems[id];
	var appid = item['consumer_appid'];
	var options = {
		method: 'post',
		postBody: 'id=' + id + '&appid=' + appid + '&sessionid=' + g_sessionID,
		onComplete: (function(id){
			return function(transport)
			{
				$J( "#ModerationControls_" + id ).html( '<span style="color: green">Reports Cleared!</span>' );
			}
		}(id))
	};
	new Ajax.Request(
		'https://steamcommunity.com/sharedfiles/resetreportedcount',
		options
	);
}

function UGCClearContentCheckFlag( id )
{
	var item = gItems[id];
	var appid = item['consumer_appid'];
	var options = {
		method: 'post',
		postBody: 'id=' + id + '&appid=' + appid + '&sessionid=' + g_sessionID + '&suspicious=0',
		onComplete: (function(id){
			return function(transport)
			{
				$J( "#ModerationControls_" + id ).html( '<span style="color: green">Cleared Content Check Result</span>' );
			}
		}(id))
	};
	new Ajax.Request(
		'https://steamcommunity.com/sharedfiles/markassuspicious/',
		options
	);
}

function UGCMarkAsSuspicious( id )
{
	var item = gItems[id];
	var appid = item['consumer_appid'];
	var options = {
		method: 'post',
		postBody: 'id=' + id + '&appid=' + appid + '&sessionid=' + g_sessionID + '&suspicious=1',
		onComplete: (function(id){
			return function(transport)
			{
				$J( "#ModerationControls_" + id ).html( '<span style="color: red">Marked as Suspicious</span>' );
			}
		}(id))
	};
	new Ajax.Request(
		'https://steamcommunity.com/sharedfiles/markassuspicious/',
		options
	);
}

function ViewReports( id )
{
	var item = gItems[id];
	var appid = item['consumer_appid'];
	var title = V_EscapeHTML( item['title'] );
	$( 'reportsTitle' ).update( 'All Reports for: ' + title );
	$( 'reports' ).update("<div style='width: 100%; text-align: center;'>Loading</div>");
	new Ajax.Updater( "reports", "https://steamcommunity.com/sharedfiles/getreports/?id=" + id + "&appid=" + appid );
	showModal( 'reportsModal', false );
}

function UpdateSelectedItems()
{
	$J( '#NumItemsSelected' ).text( $J( '.reported_item_checkbox:checked').length );

	$J( '.reported_item_checkbox' ).each( function( index, elem ) {
		elem = $J( elem );
		var publishedFileID = elem.data( 'dsPublishedfileid' );
		var parent = $J( "#item_" + publishedFileID );
		if ( elem.prop( 'checked' ) )
		{
			parent.css( 'background-color', 'rgba( 84, 133, 183, 0.4)' );
		}
		else
		{
			parent.css( 'background-color', 'rgba( 0,0,0,.3)' );
		}
	} );
}

function SelectAllItems()
{
	$J( '.reported_item_checkbox' ).prop( 'checked', true );
	UpdateSelectedItems();
}

function DeselectAllItems()
{
	$J( '.reported_item_checkbox' ).prop( 'checked', false );
	UpdateSelectedItems();
}

function ApplyFuncOnSelectedItems( func )
{
	$J( '.reported_item_checkbox' ).each( function( index, elem ) {
		elem = $J( elem );
		if ( elem.prop( 'checked' ) )
		{
			var itemid = elem.data( 'itemid' );
			func( itemid );
		}
	} );
}

function SelectedItems_ApplyContentDescriptors()
{
	var rgCheckboxes = $J( "input:checkbox", $J( "#content_descriptors" ) );

	var add = [];

	for ( var i = 0; i < rgCheckboxes.length; ++i )
	{
		let checkbox = rgCheckboxes[i];
		if ( checkbox.checked && !checkbox.disabled )
		{
			add.push( checkbox.value );
		}
	}

	if ( add.length == 0 )
		return;

	function fn( id )
	{
		AddContentDescriptors( id, add );
	}
	ApplyFuncOnSelectedItems( fn );
}

function SelectedItems_Ban()
{
	ApplyFuncOnSelectedItems( BanItem );
}

function SelectedItems_UnBan()
{
	ApplyFuncOnSelectedItems( UnBanItem );
}

function SelectedItems_VoteBanUsers()
{
	ApplyFuncOnSelectedItems( VoteBanUsers );
}

function SelectedItems_MarkIncompatible()
{
	ApplyFuncOnSelectedItems( MarkIncompatible );
}

function SelectedItems_ResetReports()
{
	ApplyFuncOnSelectedItems( ResetReports );
}

function SelectedItems_ClearContentCheckAndReports()
{
	ApplyFuncOnSelectedItems( ResetReports );
	ApplyFuncOnSelectedItems( UGCClearContentCheckFlag );
}

function SelectedItems_MarkAsSuspicious()
{
	ApplyFuncOnSelectedItems( UGCMarkAsSuspicious );
}

function BanReview( id )
{
	UserReview_Moderate_SetBanStatus( id, 1, 'https://steamcommunity.com',
		function( results ) {
			ShowWithFade( $( 'banned_' + id ) );
		},
		'Mass banned from reported content page'
	);
}

function UnbanReview( id )
{
	UserReview_Moderate_SetBanStatus( id, 0, 'https://steamcommunity.com',
		function( results ) {
			ShowWithFade( $( 'unbanned_' + id ) );
		},
		'Mass unbanned from reported content page'
	);
}

function SetReviewQualities( id, qualities )
{
	UserReview_Moderate_SetQualities( id, qualities, 'https://steamcommunity.com',
		function( results ) {
			if ( qualities.length != 0)
				ShowWithFade( $( 'qualities_' + id ) );
			else
				$( 'qualities_' + id ).hide();
		}
	);
}

function BanReviewVoters( id )
{
	UserReview_Moderate_VoteBanUsers( id, 'https://steamcommunity.com',
		function( results ) {
			ShowWithFade( $( 'banned_voters_' + id ) );
		}
	);
}

function ClearReviewDevFlag( id )
{
	UserReview_ClearDeveloperFlag( id, 'https://steamcommunity.com',
		function( results ) {
			ShowWithFade( $( 'incompatible_' + id ) );
		}
	);
}

function ClearReviewReports( id )
{
	UserReview_Moderate( id, { 'clear_reports' : 1 }, 'https://steamcommunity.com',
		function( results ) {
			$( 'report_score_' + id ).update( '0' );
		}
	);
}

function ClearContentCheckFlag( id )
{
	$J.post( 'https://steamcommunity.com/userreviews/clearcontentcheckresults/' + id, { sessionid: g_sessionID } )
	.done( function( data ) {
		$J( "#ban_check_result_" + id ).text( 'Reset' );
	});
}

function MarkAsSuspicious( id )
{
	$J.post( 'https://steamcommunity.com/userreviews/markassuspicious/' + id, { sessionid: g_sessionID } )
	.done( function( data ) {
		$J( "#ban_check_result_" + id ).text( 'Marked as Suspicious' );
	});
}

function ViewReviewReports( id )
{
	UserReview_ShowReportsDialog( id, 'https://steamcommunity.com' );
}

function SelectedReviews_Ban()
{
	ApplyFuncOnSelectedItems( BanReview );
}

function SelectedReviews_Unban()
{
    ApplyFuncOnSelectedItems( UnbanReview );
}

function SelectedReviews_BanVoters()
{
	ApplyFuncOnSelectedItems( BanReviewVoters );
}

function SelectedReviews_ClearReports()
{
	ApplyFuncOnSelectedItems( ClearReviewReports );
}

function SelectedReviews_ClearReviewDevFlag()
{
	ApplyFuncOnSelectedItems( ClearReviewDevFlag );
}

function SelectedReviews_ClearContentCheckResult()
{
	ApplyFuncOnSelectedItems( ClearContentCheckFlag );
}

function SelectedReviews_MarkAsSuspicious()
{
	ApplyFuncOnSelectedItems( MarkAsSuspicious );
}

function SelectedReviews_SetQualities()
{
	var content = $J( "<div/>" );
			var container0 = $J( "<div/>" );
		var label0 = $J( "<label/>" );
		label0.append( $J( "<input/>", { type: 'checkbox', value: 0 } ) );
		label0.append( 'Uninformative' );
		container0.append( label0 );
		content.append( container0 );
				var container1 = $J( "<div/>" );
		var label1 = $J( "<label/>" );
		label1.append( $J( "<input/>", { type: 'checkbox', value: 1 } ) );
		label1.append( 'Meme' );
		container1.append( label1 );
		content.append( container1 );
				var container2 = $J( "<div/>" );
		var label2 = $J( "<label/>" );
		label2.append( $J( "<input/>", { type: 'checkbox', value: 2 } ) );
		label2.append( 'ASCII' );
		container2.append( label2 );
		content.append( container2 );
				var container3 = $J( "<div/>" );
		var label3 = $J( "<label/>" );
		label3.append( $J( "<input/>", { type: 'checkbox', value: 3 } ) );
		label3.append( 'OffTopic' );
		container3.append( label3 );
		content.append( container3 );
				var container4 = $J( "<div/>" );
		var label4 = $J( "<label/>" );
		label4.append( $J( "<input/>", { type: 'checkbox', value: 4 } ) );
		label4.append( 'VoteOrAwardFarming' );
		container4.append( label4 );
		content.append( container4 );
				var container5 = $J( "<div/>" );
		var label5 = $J( "<label/>" );
		label5.append( $J( "<input/>", { type: 'checkbox', value: 5 } ) );
		label5.append( 'None' );
		container5.append( label5 );
		content.append( container5 );
			var dialog = ShowConfirmDialog( 'Set Qualities for Selected Reviews', content );
	dialog.done( function()
	{
		var qualities = [];
		var checkboxes = $J( content ).find( "input[type=checkbox]:checked" );
		for ( var i = 0; i < checkboxes.length; ++i )
		{
			var checkbox = $J( checkboxes[i] );
			qualities.push( checkbox.val() );
		}

		function fn( id )
		{
			SetReviewQualities( id, qualities );
		}

		ApplyFuncOnSelectedItems( fn );
	} );
}

function ResetProfileAndGroupContent( steamID )
{
	new Ajax.Request( 'https://steamcommunity.com/moderation/ajaxgetresetcontentmodal', {
		method: 'post',
		parameters: { steamid : steamID },
		onSuccess: function( jqxhr )
		{
			var results = jqxhr.responseText;

			var $modal = ShowConfirmDialog( "Reset Content", $J( results ), "Reset Content" );
			$modal.AdjustSizing();

			var $content = $modal.GetContent();

			$modal.done( function() {
				new Ajax.Request( 'https://steamcommunity.com/moderation/ajaxresetcontent', {
					method: 'post',
					parameters: $content.find( '#resetcontentform' ).serialize(),
					onSuccess: function( jqxhr2 )
					{
						results = V_ParseJSON( jqxhr2.responseText );
						if ( results.success )
						{
							location.reload();
						}
						else
						{
							ShowAlertDialog( "Reset Content Failed", results.failures.length + ' content types failed to be cleared' );
						}
					}
				} );
			} );
		}
	} );
}

function ConfirmAppUGCBan( accountid, appid )
{
	var dialog = ShowPromptWithTextAreaDialog( "Update App UGC Ban", '', null, null, 1000 );
	var text_area = $J( dialog.m_$Content ).find( "textarea" );

	var select = $J( '<select>' );
	select.append( $J( '<option>', { value: 7, text: '7 Days' } ) );
	select.append( $J( '<option>', { value: 30, text: '30 Days' } ) );
	select.append( $J( '<option>', { value: 365, text: '365 Days' } ) );
	select.append( $J( '<option>', { value: -1, text: 'Permanent' } ) );
	var container = $J( '<div>', { text: 'Ban Duration: ', style: 'margin-bottom: 10px; border: 1px solid red; padding: 5px;'} );
	container.append( select );
	container.append( $J( '<div>', { text: "Please enter a user-facing reason why this user is receiving a ban from uploading new content: " } ) );

	text_area.before( container );

	dialog.done( function( reason ) {
		reason = v_trim( reason )
		var ban_days = select.val();
		UpdateAppUGCBan( accountid, appid, ban_days, reason )
	} );
}

function UpdateAppUGCBan( accountid, appid, ban_days, reason )
{
	$J.post( 'https://steamcommunity.com/sharedfiles/updateappugcban/', { 'sessionid': g_sessionID, 'accountid': accountid, 'appid': appid, 'ban_days': ban_days, 'reason' : reason } )
	.done( function( data ) {
		if ( data.success == 1 )
		{
			top.location.reload();
		}
		else
		{
			ShowAlertDialog( "Error", "Update App UGC Ban Failed: " + data.success );
		}
	} );
}
