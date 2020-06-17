
var gItems = Array();

function BlurAndHide( id )
{
	var item = gItems[id];
	var appid = item['consumer_appid'];
	var title = V_EscapeHTML( item['title'] );
	var options = {
		method: 'post',
		postBody: 'id=' + id + '&appid=' + appid + '&sessionid=' + g_sessionID + '&force_inappropriate=1',
		onComplete: (function(id){
			return function(transport)
			{
				ShowWithFade( $( 'blurred_' + id ) );
				$J( '#item_' + id ).addClass( 'blurred' );
			}
		}(id))
	};
	new Ajax.Request(
		'https://steamcommunity.com/sharedfiles/setinappropriate/',
		options
	);
}

function BanItem( id )
{
	var item = gItems[id];
	var appid = item['consumer_appid'];
	var title = V_EscapeHTML( item['title'] );
	var options = {
		method: 'post',
		postBody: 'id=' + id + '&appid=' + appid + '&sessionid=' + g_sessionID + '&IsBanned=1',
		onComplete: (function(id){
			return function(transport)
			{
				ShowWithFade( $( 'banned_' + id ) );
				$J( '#item_' + id ).addClass( 'banned' );
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
	var title = V_EscapeHTML( item['title'] );
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

function SelectedItems_Blur()
{
	ApplyFuncOnSelectedItems( BlurAndHide );
}

function SelectedItems_Ban()
{
	ApplyFuncOnSelectedItems( BanItem );
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

function BanReview( id )
{
	UserReview_Moderate_SetBanStatus( id, 1, 'https://steamcommunity.com',
		function( results ) {
			ShowWithFade( $( 'banned_' + id ) );
		},
		'Mass banned from reported content page'
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

function ViewReviewReports( id )
{
	UserReview_ShowReportsDialog( id, 'https://steamcommunity.com' );
}

function SelectedReviews_Ban()
{
	ApplyFuncOnSelectedItems( BanReview );
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