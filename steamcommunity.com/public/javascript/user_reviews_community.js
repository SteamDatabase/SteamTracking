
function RequestCurrentUserRecommendationVotes( recommendationIDs )
{
	if ( !g_steamID )
		return;

	$J.post( 'https://steamcommunity.com/userreviews/ajaxgetvotes/', {
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
						$J('#RecommendationVoteUpBtn' + vote.recommendationid).addClass('btn_active');
					}
					else if ( vote.voted_down )
					{
						$J('#RecommendationVoteDownBtn' + vote.recommendationid).addClass('btn_active');
					}
				}
			}
		} );
}

function UserReviewVoteUp( id )
{
	UserReview_Rate( id, true, 'https://steamcommunity.com',
		function( rgResults ) {
			$J( "#RecommendationVoteUpBtn" + id ).addClass( "btn_active" );
			$J( "#RecommendationVoteDownBtn" + id ).removeClass( "btn_active" );
			$J( "#RecommendationVoteTagBtn" + id + "_" + 1 ).removeClass( "btn_active" );
		}
	);
}

function UserReviewVoteDown( id )
{
	UserReview_Rate( id, false, 'https://steamcommunity.com',
		function( rgResults ) {
			$J( "#RecommendationVoteUpBtn" + id ).removeClass( "btn_active" );
			$J( "#RecommendationVoteDownBtn" + id ).addClass( "btn_active" );
			$J( "#RecommendationVoteTagBtn" + id + "_" + 1 ).removeClass( "btn_active" );
		}
	);
}

function UserReviewVoteTag( id, tagID, elemID )
{
	var elem = $J( "#" + elemID );
	var bRateUp = !elem.hasClass( "btn_active" );
	UserReview_VoteTag( id, tagID, bRateUp, 'https://steamcommunity.com',
		function( rgResults ) {
			if ( bRateUp )
			{
				$J( "#RecommendationVoteTagBtn" + id + "_" + tagID ).addClass( "btn_active" );
				$J( "#RecommendationVoteUpBtn" + id ).removeClass( "btn_active" );
				$J( "#RecommendationVoteDownBtn" + id ).removeClass( "btn_active" );
			}
			else
			{
				$J( "#RecommendationVoteTagBtn" + id + "_" + tagID ).removeClass( "btn_active" );
			}
		}
	);
}
