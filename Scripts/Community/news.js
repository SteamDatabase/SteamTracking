
function OnNewsLinkClicked()
{
	if ( !this.protocol.match( /^(steam|javascript):/i )
	     && this.hostname != document.location.hostname
	     && !this.hostname.match( /^(.*\.|)steam(community|powered)\.com$/i ) )
	{
		window.location = 'steam://openurl/' + this.href;
		return false;
	}
}

function WrapNewsLinks()
{
	if ( navigator.userAgent.indexOf('Valve Steam') < 0 )
		return;

	$J('.newsPostBlock a[href]:not(.steam_openurl)')
		.addClass('steam_openurl')
		.click( OnNewsLinkClicked );
}

$J( document ).ready( WrapNewsLinks );


function RateNewsPost( gid, bVoteUp )
{
	if ( bVoteUp && $J('#VoteUpBtn').hasClass( "btn_active" ) )
	{
		return;
	}
	if ( !bVoteUp && $J('#VoteDownBtn').hasClass( "btn_active" ) )
	{
		return;
	}
	
	$J.post( 'https://steamcommunity.com/news/ajaxratepost', {
			'gid' : gid,
			'voteup' : bVoteUp,
			'sessionid' : g_sessionID
		}
	).done( function( json ) {

		var votesUpCount = $J('#VotesUpCount');
		if ( votesUpCount )
		{
			var increment = 0;
			if ( bVoteUp )
			{
				increment = 1;
			}
			else if ( $J('#VoteUpBtn').hasClass( 'btn_active' ) )
			{
				increment = -1;
			}
			UpdateFormattedNumber( votesUpCount, increment );

			if ( parseInt( votesUpCount.html().replace(/,/g, '') ) == 0 )
			{
				$J('#VotesUpCountContainer').hide();
			}
			else
			{
				$J('#VotesUpCountContainer').show();
			}
		}

		if ( bVoteUp )
		{
			$J('#VoteUpBtn').addClass( "btn_active" );
			$J('#VoteDownBtn').removeClass( "btn_active" );
		}
		else
		{
			$J('#VoteDownBtn').addClass( "btn_active" );
			$J('#VoteUpBtn').removeClass( "btn_active" );
		}

	} )
	.fail( function( data ) {

		if ( data.responseJSON.success == 8 )
		{
			ShowAlertDialog( 'Error', 'You must be logged in to perform that action.' );
		}

	} );

	return false;
}

