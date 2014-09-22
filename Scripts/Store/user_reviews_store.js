
var g_recommendationContents = [ 'friend', 'all', 'positive', 'negative' ];


function OnRecommendationVotedUp( recommendationid )
{
	for ( var i = 0; i < g_recommendationContents.length; ++i )
	{
		$J( '#RecommendationVoteUpBtn' + g_recommendationContents[i] + recommendationid ).addClass( 'btn_active' );
		$J( "#RecommendationVoteDownBtn" + g_recommendationContents[i] + recommendationid ).removeClass( "btn_active" );
	}
}

function OnRecommendationVotedDown( recommendationid )
{
	for ( var i = 0; i < g_recommendationContents.length; ++i )
	{
		$J( '#RecommendationVoteUpBtn' + g_recommendationContents[i] + recommendationid ).removeClass( 'btn_active' );
		$J( "#RecommendationVoteDownBtn" + g_recommendationContents[i] + recommendationid ).addClass( "btn_active" );
	}
}

function RequestCurrentUserRecommendationVotes( recommendationIDs )
{
	if ( recommendationIDs.length == 0 )
	{
		return;
	}

	$J.post( 'http://store.steampowered.com//userreviews/ajaxgetvotes/', {
			'recommendationids' : recommendationIDs
		}
	).done( function( response ) {
			if ( response.success == 1 )
			{
				var votes = response.votes;
				for ( var i = 0; i < votes.length; ++i )
				{
					var vote = votes[i];
					if ( vote.voted_up )
					{
						OnRecommendationVotedUp( vote.recommendationid );
					}
					else if ( vote.voted_down )
					{
						OnRecommendationVotedDown( vote.recommendationid );
					}
				}
			}
		} );
}

function UserReviewVoteUp( id )
{
	UserReview_Rate( id, true, 'http://store.steampowered.com/',
		function( rgResults ) {
			OnRecommendationVotedUp( id );
		}
	);
}

function UserReviewVoteDown( id )
{
	UserReview_Rate( id, false, 'http://store.steampowered.com/',
		function( rgResults ) {
			OnRecommendationVotedDown( id );
		}
	);
}

function UserReviewShowMore( id, context )
{
	$J('#ReviewContent'+context+id).parent().removeClass('partial');
	$J('#ReviewContent'+context+id).parent().addClass('expanded');
}

function LoadMoreReviews( appid, startOffset, dayRange, context, language )
{
	$J( "#ViewAllReviews" + context ).remove();
	$J( "#LoadMoreReviews" + context ).remove();
	$J( "#LoadingMoreReviews" + context ).show();

	var container = $J( "#Reviews_" + context );

	new Ajax.Request( 'http://store.steampowered.com//appreviews/' + appid,
		{
			method: 'GET',
			parameters: {
				'start_offset' : startOffset,
				'day_range' : dayRange,
				'filter' : context,
				'language' : language
			},
			onSuccess: function( transport )
			{
				if ( transport.responseJSON.success == 1 )
				{
					$J( "#LoadingMoreReviews" + context ).remove();

					// remove duplicates
					var recommendationIDs = [];
					var temp = $J('<div></div>');
					temp.append( transport.responseJSON.html );
					for ( var i = 0; i < transport.responseJSON.recommendationids.length; ++i )
					{
						var recommendationid = transport.responseJSON.recommendationids[i];
						var elemID = "#ReviewContent" + context + recommendationid;
						if ( $J( elemID ).length != 0 )
						{
							temp.find( elemID ).parent().remove();
						}
						else
						{
							recommendationIDs.push( recommendationid );
						}
					}

					container.append( temp.children() );

					// all dupes, request more
					if ( transport.responseJSON.recommendationids.length != 0 && recommendationIDs.length == 0 )
					{
						LoadMoreReviews(appid, startOffset + transport.responseJSON.recommendationids.length, transport.responseJSON.dayrange, context, language );
					}
					else
					{
						CollapseLongReviews();
						RequestCurrentUserRecommendationVotes( recommendationIDs );
					}
				}
			}
		} );
}

function SelectReviews( appid, context, reviewDayRange, language )
{
	$J( "#ReviewsTab_all" ).removeClass( "active" );
	$J( "#ReviewsTab_positive" ).removeClass( "active" );
	$J( "#ReviewsTab_negative" ).removeClass( "active" );
	$J( "#ReviewsTab_" + context ).addClass( "active" );

	$J( "#Reviews_all" ).hide();
	$J( "#Reviews_positive" ).hide();
	$J( "#Reviews_negative" ).hide();
	$J( "#Reviews_" + context ).show();

	var container = $J( "#Reviews_" + context );
	if ( container.children().length == 0 )
	{
		LoadMoreReviews( appid, 0, reviewDayRange, context, language );
	}
}

function CollapseLongReviews()
{
	$J('.review_box').each( function(j, i){
		if( $J(i).outerHeight() > 400 )
		{
			if ( !$J(i).hasClass('expanded') )
			{
				$J(i).addClass('partial')
			}
		}
	});
}


