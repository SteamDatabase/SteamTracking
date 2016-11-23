
function InitSaleCountdown( idTimer, tsServerEnd )
{
	var $elCountdown = $J('#' + idTimer );
	if ( $elCountdown.length )
	{
		if ( !$elCountdown.hasClass( 'nofixedwidth' ) )
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

/*
	{
	categoryid
	label
	appid	o
	writein	o
	}
 */
function InitSteamAwardNominationDialog( appid, appname, rgCategories )
{
	$J('.show_nomination_dialog').click( function() {
		var $PageElement = $J(this);
		if ( !g_AccountID )
		{
			// prompt for login
			ShowConfirmDialog( 'Community\'s Choice',
				'You need to log in first before you can vote.',
				'Login'
			).done( function() {
				window.location = 'https://store.steampowered.com/login/?redir=app%2F__APPID__'.replace( /__APPID__/, appid );
			});
			return;
		}

		var $Form = $J('<form/>', {'class': 'steamward_nominate_form'});

		var bFoundCurrentApp = false;

		for ( var i = 0; i < rgCategories.length; i++ )
		{
			var oCategory = rgCategories[i];
			var id = 'category' + oCategory.categoryid;
			var $Row = $J('<div/>', {'class': 'steamaward_nomination_row'} );

			var $Div = $J('<div/>', {'class': 'steamaward_nomination_content'} );
			var $Radio = $J('<input/>', {type: 'radio', id: id, name: 'nomination_category', value: oCategory.categoryid } );

			$Row.append( $Radio.wrap( $J('<div/>', {'class': 'radio_ctn'} ) ).parent(), $Div );

			$Div.append( $J('<label/>', {'for': id} ).html( oCategory.label ) );

			$Radio.change( function() {
				if ( $J(this).prop('checked') )
					$J(this).parents( '.steamaward_nomination_row' ).addClass('selected').siblings().removeClass('selected');
				else
					$J(this).parents( '.steamaward_nomination_row' ).removeClass('selected');
			});

			if ( oCategory.appid == appid )
			{
				$Radio.prop( 'checked', true ).change();
				bFoundCurrentApp = true;
			}

			if ( oCategory.is_writein )
			{
				var $WriteInDiv = $J('<div/>', {'class': 'writein_ctn'} );
				var $WriteInInput = $J('<input/>', {'id': id + '_writein', 'name': id + '_writein', 'type': 'text', 'value': oCategory.write_in_name || '' } );
				$WriteInDiv.append(
					$J('<label/>', {'for': id + '_writein'} ).text( 'Your category suggestion:' ),
					$J('<div/>', {'class': 'gray_bevel for_text_input' } ).append( $WriteInInput )
				);

				$Div.append( $WriteInDiv );

				$WriteInInput.keypress( function() {
					if ( $J(this).val() )
						$J(this).parents('.steamaward_nomination_row').find('input[type=radio]').prop('checked', true ).change();
				});
			}
			$Form.append( $Row );
		}

		if ( bFoundCurrentApp )
		{
			// remove option
			var id = 'category_remove';


			var $Row = $J('<div/>', {'class': 'steamaward_nomination_row remove_row'} );

			var $Div = $J('<div/>', {'class': 'steamaward_nomination_content'} );
			var $Radio = $J('<input/>', {type: 'radio', id: id, name: 'nomination_category', value: 0 } );

			$Row.append( $Radio.wrap( $J('<div/>', {'class': 'radio_ctn'} ) ).parent(), $Div );

			$Div.append( $J('<label/>', {'for': id} ).html( 'None - Withdraw nomination for %s'.replace( /%s/, appname ) ) );

			$Radio.change( function() {
				if ( $J(this).prop('checked') )
					$J(this).parents( '.steamaward_nomination_row' ).addClass('selected').siblings().removeClass('selected');
				else
					$J(this).parents( '.steamaward_nomination_row' ).removeClass('selected');
			});

			$Form.append( $Row );
		}

		// build the display
		var $Dialog = $J('<div/>');
		$Dialog.append( $J('<p/>', {'class': 'steamawards_nomination_intro'}).html( 'Which award would you like to nominate %s for?'.replace( /%s/, appname ) ) );
		$Dialog.append( $Form );
		$Dialog.append( $J('<div/>', {'class': 'steamaward_nomination_learnmore' }).append( $J('<a/>', {'href': 'http://store.steampowered.com/faq'}).text( 'Learn more about the Steam Awards' ) ) );

		var fnSubmit = function()
		{
			var categoryid = $Form.find( 'input[name=nomination_category]:checked' ).val();
			var writein = $Form.find('#category' + categoryid + '_writein').val();

			$J.post( 'https://store.steampowered.com/promotion/nominategame', {
				sessionid: g_sessionID,
				appid: appid,
				categoryid: categoryid,
				writein: writein
			} ).done( function( data ) {
				// update the metadata
				rgCategories = data.rgCategories;
				$PageElement.html( data.page_html );
			}).fail( function() {
				ShowAlertDialog( 'Error', 'There was a problem saving your changes.  Please try again later.' );
			});
		};

		var Modal = ShowConfirmDialog( 'Nominate Game', $Dialog, 'Save' )
			.done( function() {
				fnSubmit();
			});

		$Form.submit( function( e ) {
			e.preventDefault();
			Modal.Dismiss();
		});

	});
}

