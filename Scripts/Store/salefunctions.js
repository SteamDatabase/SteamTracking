
function InitSaleCountdown( idTimer, tsServerEnd )
{
	var $elCountdown = $J('#' + idTimer );
	if ( $elCountdown.length )
	{
		$elCountdown.css( 'width', $elCountdown.width() + 5 );
		$elCountdown.addClass( 'countdown' );
		InitDailyDealTimer( $elCountdown[0], tsServerEnd );
	}
}

function InitVoting( rgVoteOrder, appid_voted )
{
	var $OptsCtn = $J( '.vote_options' );
	var $Opts =  $J( '.vote_app_options', $OptsCtn );

	if ( !appid_voted )
	{
		$Opts.each( function() {
			var $Opt = $J(this);
			var voteid = $Opt.data('voteid');
			var appid = $Opt.data('appid');

			var $VoteBtn = $J('.btn_vote', $Opt);

			$VoteBtn.click(
				function() { OnVoteClick( voteid, appid ) }
			);
		});
	}
	else
	{
		HighlightSelectedVote( appid_voted );
	}

	if ( window.location.hash == '#summersale_communitychoice' && g_AccountID )
		ShowVoteDialog();

	/*
	for ( var i = 0; i < rgVoteOrder.length; i++ )
	{
		if ( rgVoteOrder[i] < $Opts.length )
			$OptsCtn.prepend( $Opts[ rgVoteOrder[i] ] );
	}
	*/
}

var g_bVoteInFlight = false;
function OnVoteClick( voteid, appid )
{
	if ( !g_AccountID )
	{
		// propmt for login
		ShowConfirmDialog( 'Community\'s Choice',
			'You need to log in first before you can vote.',
			'Login'
		).done( function() {
				window.location = 'https://store.steampowered.com/login/?redir=%23summersale_communitychoice';
			});
	}
	else
	{
		if ( g_bVoteInFlight )
			return;

		g_bVoteInFlight = true;
		$J.post(
			'http://store.steampowered.com/salevote',
			{sessionid: g_sessionID, voteid: voteid, appid: appid }
		).done( function (data) {
				// update display
				HighlightSelectedVote( appid );
				if ( data )
				{
					$J('#communitychoice_vote_output').html( data );
				}
				else
				{
					// show something generic
					ShowAlertDialog( 'Community\'s Choice', 'Thanks for voting!' );
				}
			}).fail( function() {
				ShowAlertDialog(
					'Community\'s Choice',
					'There was a problem recording your vote.  Please try again later.'
				).done( function() { window.location.reload(); } );
			}).always( function() {
				g_bVoteInFlight = false;
			});
	}
}

function HighlightSelectedVote( appid )
{
	var $OptsCtn = $J( '.vote_options' );
	var $Opts =  $J( '.vote_app_options', $OptsCtn );

	$Opts.each( function() {
		var $Opt = $J(this);
		if ( $Opt.data('appid') == appid )
			$Opt.addClass( 'voted your_vote' );
		else
			$Opt.addClass( 'voted not_your_vote' );
	} );
}

var g_$VoteDialog;
function ShowVoteDialog()
{
	if ( g_AccountID )
	{
		if ( !g_$VoteDialog )
			g_$VoteDialog = $J('#communitychoice_votedialog');

		if ( g_$VoteDialog && g_$VoteDialog.length )
		{
			g_$VoteDialog.show();
			window.location.replace( '#summersale_communitychoice' );
			ShowDialog( 'Community\'s Choice', g_$VoteDialog)
			.done( function() {
				window.location.replace( '#z' );
			} );
		}
	}
	else
	{
		// propmt for login
		ShowConfirmDialog( 'Community\'s Choice',
			'You need to log in first before you can vote.',
			'Login'
		).done( function() {
				window.location = 'https://store.steampowered.com/login/?redir=%23summersale_communitychoice';
		});
	}
}

function InitTeamStandingsAJAX( rgInitialCurScores, rgInitialNextScores )
{
	var rgCurScores = rgInitialCurScores;
	var rgBaseScores = null;
	var nBaseScoresTime = 0;
	var rgNextScores = null;
	var nNextScoresTime = 0;

	var rgTeamStandingElements = {};
	for ( var usTeamID = 1; usTeamID <= 5; usTeamID++ )
	{
		var $TeamStanding = $J('#standing_' + usTeamID );
		var $Score = $TeamStanding.find( '.score_value' );
		var $Bar = $TeamStanding.find( '.score_bar' );
		rgTeamStandingElements[usTeamID] = {
			element: $TeamStanding,
			score: $Score,
			bar: $Bar,
			width: 0
		};
	}

	var fnOnScoreUpdate = function( rgNewScores )
	{
		// some kind of bfcache issue causes this to be empty sometimes
		if ( ( rgCurScores && typeof rgCurScores[1] != 'undefined' ) || !rgBaseScores )
		{
			rgBaseScores = rgCurScores;
		}
		rgNextScores = rgNewScores;
		nBaseScoresTime = $J.now();
		nNextScoresTime = nBaseScoresTime + 4500;
		rgCurScores = {};
	}
	fnOnScoreUpdate( rgInitialNextScores );

	var fnUpdate = function()
	{
		var nNow = $J.now();
		var flInterp = (Math.min( nNow, nNextScoresTime ) - nBaseScoresTime ) / ( nNextScoresTime - nBaseScoresTime );

		var nMaxScore = 0;
		var nMinScore = Number.MAX_VALUE;
		var rgTeamScoresSorted = [];
		for ( var usTeamID = 1; usTeamID <= 5; usTeamID++ )
		{
			var nBaseScore = rgBaseScores[usTeamID] ? rgBaseScores[usTeamID] : 0;
			var nNextScore = rgNextScores[usTeamID] ? rgNextScores[usTeamID] : 0;

			var nNewScore = Math.floor( flInterp * ( nNextScore - nBaseScore ) + nBaseScore );
			rgCurScores[usTeamID] = nNewScore;
			nMaxScore = Math.max( nMaxScore, nNewScore );
			nMinScore = Math.min( nMinScore, nNewScore );
			rgTeamScoresSorted.push( { usTeamID: usTeamID, nScore: nNewScore } );
		}

		var flSpreadFraction = nMaxScore > 0 ? nMinScore / nMaxScore : 0;
		nMinScore = Math.min( nMinScore, nMaxScore /2 );

		var bNeedResort = false;
		rgTeamScoresSorted.sort( function( a, b ) { return b.nScore - a.nScore; } );
		for( var i = 0; i < rgTeamScoresSorted.length; i++ )
		{
			var usTeamID = rgTeamScoresSorted[i].usTeamID;
			if ( rgTeamStandingElements[usTeamID].iRank != i )
			{
				bNeedResort = true;
				var nRankDiff = typeof rgTeamStandingElements[usTeamID].iRank == 'undefined' ? 0 : rgTeamStandingElements[usTeamID].iRank - i;
				var oElements = rgTeamStandingElements[usTeamID];
				oElements.iRank = i;
				var nCurrentOffset = parseInt( oElements.element.css('top') );
				oElements.nRankOffset = ( nCurrentOffset ? nCurrentOffset : 0 ) + nRankDiff * 54;
				oElements.nRankAnimStart = nNow;
				oElements.nRankAnimEnd = nNow + 500;
			}
			if ( bNeedResort )
			{
				$J('#team_standings_ctn').append( rgTeamStandingElements[usTeamID].element );
				rgTeamStandingElements[usTeamID].element.css( 'top', rgTeamStandingElements.nRankOffset + 'px' );
				rgTeamStandingElements[usTeamID].element.removeClass( 'rank1 rank2 rank3 rank4 rank5' );
				rgTeamStandingElements[usTeamID].element.addClass( 'rank' + (i+1) );
				rgTeamStandingElements[usTeamID].element.find( '.rank').attr( 'class', 'rank rank' + (i+1) );
			}
		}

		for ( var usTeamID = 1; usTeamID <= 5; usTeamID++ )
		{
			var nNewScore = rgCurScores[usTeamID];
			var flScorePct;
			if ( nMaxScore - nMinScore <= 0 )
				flScorePct = 0;
			else
				flScorePct = (nNewScore - nMinScore) / ( nMaxScore - nMinScore );

			var nSpreadWidth = 250 * flSpreadFraction;
			var nNewWidth = Math.floor( 108 + ( nSpreadWidth / 2 ) + ( ( 574 - nSpreadWidth )  * flScorePct ) );

			var oElements = rgTeamStandingElements[usTeamID];
			oElements.score.text( v_numberformat( nNewScore ) );
			if ( oElements.width != nNewWidth )
			{
				oElements.width = nNewWidth;
				oElements.bar.css( 'width', nNewWidth + 'px' );
			}

			if ( oElements.nRankOffset )
			{
				var nNewOffset = 0;
				if ( nNow < oElements.nRankAnimEnd )
				{
					var flInterp = (Math.min( nNow, oElements.nRankAnimEnd ) - oElements.nRankAnimStart ) / ( oElements.nRankAnimEnd - oElements.nRankAnimStart );
					nNewOffset = oElements.nRankOffset - Math.floor( flInterp * oElements.nRankOffset );
				}
				oElements.element.css( 'top', nNewOffset + 'px' );
				if ( nNewOffset == 0 )
					oElements.nRankOffset = 0;
			}
		}
	};

	var fnPollUpdate = function()
	{
		$J.get( 'https://store.steampowered.com/promotion/summer2014teamscoreajax').done( function( data ) {
			if ( data && data[1] )
				fnOnScoreUpdate( data );
		}).always( window.setTimeout( fnPollUpdate, 4000 ) );
	}

	window.setInterval( fnUpdate, 30 );
	fnPollUpdate();
}

