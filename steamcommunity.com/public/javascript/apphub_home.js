
var currentPage = 1;
var doneScrolling = false;
var modalDialogVisible = false;
var waitingForContent = false;
var hasAdminPrivileges = false;
var g_AppID = 0;

window.onbeforeunload = function()
{
	if ( window.history && window.history.replaceState )
	{
		var scrollOffset = document.viewport.getScrollOffsets();
		var scrollTop = scrollOffset.top;
		window.history.replaceState( {}, document.title, '#scrollTop=' + scrollTop );
	}
}

function PerformSearch()
{
	var searchText = v_trim( $( 'appHubsSearchText' ).value );
	if ( searchText.length < 3 && searchText.length > 0 )
	{
		$( 'appHubsSearchText' ).focus();
		alert( 'The search text must be at least 3 characters long.' );
		$( 'appHubsSearchText' ).value = searchText;
		return;
	}
	$('AppHubSearch').submit();
}

function PerformSearchOnKeypress( e )
{
	var e = e || event;
	var keyCode = e.keyCode;
	switch ( keyCode )
	{
		case Event.KEY_RETURN:
		{
			PerformSearch();
			Event.stop( e );
			return false;
		}
		break;
	}
	return true;
}

function ScrollToLastCancel()
{
	doneScrolling = true;
	hideModal( 'loadingPageModal' );
}

function ScrollToLast()
{
	if ( doneScrolling )
		return;

	if ( window.location.hash.length <= 1 )
		return;

	var hash = window.location.hash.substr(1);
	var params = hash.toQueryParams();
	var scrollTopPrevious = params['scrollTop'];
	if ( scrollTopPrevious && scrollTopPrevious > 0 )
	{
		var viewport = document.viewport.getDimensions(); // Gets the viewport as an object literal
		var windowHeight = viewport.height; // Usable window height
		var bodyHeight = $(document.body).getHeight();
		if ( scrollTopPrevious < bodyHeight - windowHeight )
		{
			window.scrollTo( 0, scrollTopPrevious) ;
			doneScrolling = true;
			hideModal( 'loadingPageModal' );
		}
		else
		{
			if ( !modalDialogVisible )
			{
				modalDialogVisible = true;
				showModal( 'loadingPageModal', true, false );
			}
		CheckForMoreContent();
		// continue scrolling, in case the user sees something interesting and wants to cancel
		window.scrollTo( 0, scrollTopPrevious );
		}
	}
}

function DisplayWaitingForContent()
{
	waitingForContent = true;
	$( 'GetMoreContentBtn' ).hide();
	$( 'action_wait' ).show();
}

function DoneWaitingForContent()
{
	ApplyAdultContentPreferences();

	waitingForContent = false;
	ScrollToLast();
	if ( !$( 'MoreContentForm' + currentPage ) )
	{
		HideWithFade( $( 'GetMoreContentBtn' ) );
		ShowWithFade( $( 'NoMoreContent' ) );
	}
	else
	{
		$('GetMoreContentBtn').show();
	}
	$( 'action_wait' ).hide();
}

function CheckForMoreContent()
{
	if ( waitingForContent )
		return;

	if ( !$( 'MoreContentForm' + currentPage ) )
		return;

	DisplayWaitingForContent();

	$( 'MoreContentForm' + currentPage ).request( {
		onComplete: function( transport )
		{
			RecordAJAXPageView( transport.request.url );
			RecordAppImpression( g_AppID, g_SNR );
		},
		onFailure: function()
		{
			DoneWaitingForContent();
		},
		onException: function()
		{
			DoneWaitingForContent();
		},
		onSuccess: function( transport )
		{
			AddContentToPage( $J(transport.responseText) );
		}
	} );
}

function AddContentToPage( $Content )
{
	currentPage++;

	$J( '#AppHubCards' ).append( $Content );
	WaitForContentToLoad( currentPage );
}

function InfiniteScrollingCheckForMoreContent()
{
	var viewport = document.viewport.getDimensions(); // Gets the viewport as an object literal
	var windowHeight = viewport.height; // Usable window height

	var scrollOffset = document.viewport.getScrollOffsets();
	var scrollTop = scrollOffset.top;

	var bodyHeight = $(document.body).getHeight();

	// number of pixels from the bottom before checking for more content
	// this should be about two rows of content
	var buffer = 600;
	if ( scrollTop + buffer > bodyHeight - windowHeight )
	{
		CheckForMoreContent();
	}

	CalculateBackToTopButtonVisibility();
}

function SetLoadMoreContentProgressBar( progress, numSegments )
{
	$('LoadingProgressBar').style.width = ( ( progress / numSegments ) * 100 ) + '%';
}

function WaitForContentToLoad( page )
{
	function onPreviewImageLoaded()
	{
		numImagesLoaded++;
		SetLoadMoreContentProgressBar( numImagesLoaded, imagesLoading.length );
		if ( numImagesLoaded == imagesLoading.length )
		{
			ShowContent( page );
			SetLoadMoreContentProgressBar( 0, 1 );
		}
		else if ( numImagesLoaded > imagesLoading.length )
		{
			alert("should not happen");
		}
	}

	var imagesLoading = $$( '#page' + page + ' img.apphub_CardContentPreviewImage' );
	var numImagesLoaded = 0;
	var previewImages = [];
	for (i = 0; i < imagesLoading.length; ++i)
	{
		var img = imagesLoading[i];
		if ( img.width > 0 && img.height > 0 )
		{
			onPreviewImageLoaded( img );
		}
		else
		{
			var preview = new Image();
			preview.onload = function() { onPreviewImageLoaded.defer(); };
			preview.onerror = function() { onPreviewImageLoaded.defer(); };
			preview.src = img.src;
			img.preloadImage = preview;
			previewImages.push( preview );
		}
	}
	// if there are no images we have to wait for, just show the content on the page
	if ( imagesLoading.length == 0 )
	{
		ShowContent( page );
		SetLoadMoreContentProgressBar( 1, 1 );
	}
}

function ConstructTemplates()
{
	$J(document.body).css('overflowY','scroll');
	var pageWidth = $J('#AppHubContent').width();
	$J(document.body).css('overflowY','');
	var cardMargins = 1 * 2 + 2 * 5 + 1;
	return ConstructDefaultRowTemplates( pageWidth, cardMargins );
}

function ShowContent( page )
{
	var ogCards = $$( '#page' + page + ' div.apphub_Card' );

	var templates = ConstructTemplates();
	ShowAppHubCards( 'page' + page, ogCards, templates.rowTemplates, templates.fallbackTemplates, page, $J('#AppHubContent').width(), Number.MAX_VALUE );

	if ( hasAdminPrivileges )
	{
		$J('#page' + page + ' [id^="ban_btn_"]').show();
	}

	if ( ogCards.length )
		window.setTimeout( DoneWaitingForContent, 10 );
	else
		DoneWaitingForContent();
	ScrollToLast();
}

function CalculateBackToTopButtonVisibility()
{
	var scrollOffset = document.viewport.getScrollOffsets();
	var scrollTop = scrollOffset.top;
	// should we show the back to top button?
	var threshold = 600;
	if ( scrollTop > threshold )
	{
		ShowWithFade( $( 'BackToTop' ) );
	}
	else
	{
		HideWithFade( $( 'BackToTop' ) );
	}
}

function SelectContentFilter( url )
{
	HideMenu( $('filterselect'), $('filterselect_options') );

	window.location = url;
}

function SelectLanguageFilter( url )
{
	HideMenu( $('filterlanguage'), $('filterlanguage_options') );

	window.location = url;
}

function SelectUserReviewRatingFilter( url )
{
	HideMenu( $('filterrating'), $('filterrating_options') );

	window.location = url;
}

function RequestCurrentUserVotes( publishedFileIDs )
{
	if ( !g_steamID )
		return;

	$J.post( 'https://steamcommunity.com/sharedfiles/ajaxgetvotes/', {
			'publishedfileids' : publishedFileIDs
		}
	).done( function( response ) {
		if ( response.success == 1 )
		{
			var votes = response.votes;
			for ( var i = 0; i < votes.length; ++i )
			{
				var vote = votes[i];
				if ( vote.votesfor )
				{
					if ( $('vote_up_' + vote.publishedfileid) )
						$('vote_up_' + vote.publishedfileid).addClassName('btn_active');
				}
				else if ( vote.votesagainst )
				{
					if ( $('vote_down_' + vote.publishedfileid) )
						$('vote_down_' + vote.publishedfileid).addClassName('btn_active');
				}
			}
		}
	} );
}

function ValidateVoteSuccess( transport )
{
	if ( !transport.responseJSON )
	{
		ShowAlertDialog( 'Error', 'An error was encountered while processing your request: unknown' );
	}
	else if ( transport.responseJSON.success == 21 )
	{
		ShowAlertDialog( 'Error', 'You must be logged in to perform that action.' );
	}
	else if ( transport.responseJSON.success == 15 )
	{
		ShowAlertDialog( 'Error', 'Your account does not have sufficient privileges to perform this action. Please make sure that you own this game and that your account is in good standing.' );
	}
	else if ( transport.responseJSON.success == 24 )
	{
		ShowAlertDialog( 'Error', 'Your account does not meet the requirements to use this feature. <a class="whiteLink" href="https://help.steampowered.com/en/wizard/HelpWithLimitedAccount" target="_blank" rel="">Visit Steam Support</a> for more information.' );
	}
	else if ( transport.responseJSON.success == 16 )
	{
		ShowAlertDialog( 'Error', 'There was a problem submitting your request to our servers. Please try again.' );
	}
	else if ( transport.responseJSON.success == 17 )
	{
		ShowAlertDialog( 'Error', 'You cannot vote on this item because of an active game ban or VAC ban on your account.' );
	}
	else if ( transport.responseJSON.success == 20 )
	{
		ShowAlertDialog( 'Error', 'Voting on this item has ended.' );
	}
	else if ( transport.responseJSON.success != 1 )
	{
		ShowAlertDialog( 'Error', 'An error was encountered while processing your request: ' + transport.responseJSON.success );
	}
	return transport.responseJSON && transport.responseJSON.success == 1;
}

function PublishedFileVoteUp( id )
{
	if ( !$('vote_up_' + id).hasClassName( 'active' ) )
	{
		var options = {
			method: 'post',
			postBody: 'id=' + id + '&sessionid=' + g_sessionID,
			onComplete: (function(id){
				return function(transport)
				{
					if ( ValidateVoteSuccess( transport ) )
					{
						$('vote_up_' + id).addClassName('btn_active');
						$('vote_down_' + id).removeClassName('btn_active');
					}
				}
			}(id))
		};
		new Ajax.Request(
			'https://steamcommunity.com/sharedfiles/voteup',
			options
		);
	}
}

function PublishedFileVoteDown( id )
{
	if ( !$('vote_down_' + id).hasClassName( 'active' ) )
	{
		var options = {
			method: 'post',
			postBody: 'id=' + id + '&sessionid=' + g_sessionID,
			onComplete: (function(id){
				return function(transport)
				{
					if ( ValidateVoteSuccess( transport ) )
					{
						$('vote_up_' + id).removeClassName('btn_active');
						$('vote_down_' + id).addClassName('btn_active');
					}
				}
			}(id))
		};
		new Ajax.Request(
			'https://steamcommunity.com/sharedfiles/votedown',
			options
		);
	}
}

function PublishedFileAward( id, fileType, currentSelection )
{
	function callbackFunc( id, award )
	{
	};

	fnLoyalty_ShowAwardModal( id, 2, callbackFunc, fileType, currentSelection );
}

function PublishedFileBan( id, appid )
{
	var options = {
		method: 'post',
		postBody: 'id=' + id + '&appid=' + appid + '&sessionid=' + g_sessionID + '&IsBanned=1&reason=""',
		onComplete: (function(id){
			return function(transport)
			{
				$J( '#ban_btn_' + id ).replaceWith( '<span style="color: #ff0000;">Banned!</span>');
			}
		}(id))
	};
	new Ajax.Request(
		'https://steamcommunity.com/sharedfiles/ban',
		options
	);
}

$J( function() {
	var nLastWidth = $J('#AppHubCards' ).width();
	$J(window ).on('resize.appHub', function() {
		var nNewWidth = $J('#AppHubCards' ).width();
		if ( nNewWidth != nLastWidth )
		{
			ConstructTemplates();
			$J('.apphub_CardRow' ).each( function() {
				this.cardData.template = g_rgTemplateData[ this.cardData.template.name ];
				// the cards copy data from the template
				SizeCards( this.cardData, nNewWidth );
			});

			nLastWidth = nNewWidth;
		}
	});
});