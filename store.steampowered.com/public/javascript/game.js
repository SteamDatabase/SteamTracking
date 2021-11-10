"use strict";


function ShowEmbedWidget( )
{
	$J('#widget_create').show();
	$J('#widget_finished').hide();

	var $Content = $J('#EmbedModal');
	$Content.detach();
	$Content.show();

	var deferred = new jQuery.Deferred();
	var fnOK = function() { deferred.resolve(); };

	var Modal = _BuildDialog( "Create Widget to Embed", $Content, [], fnOK, {} );
	deferred.always( function() { Modal.Dismiss(); } );
	Modal.Show();

	// attach the deferred's events to the modal
	deferred.promise( Modal );

	Modal.always(
		function() {
			// save it away again for later
			$Content.hide();
			$J(document.body).append( $Content );
		}
	);
}

function ShowShareDialog( )
{
	var $Content = $J('#ShareModal');
	$Content.detach();
	$Content.show();

	ShowAlertDialog( "Share", $Content).always(
		function() {
			// if results field exists clear it
			$Content.find('#shareDialogResult').text('');

			// save it away again for later
			$Content.hide();
			$J(document.body).append( $Content );
		}
	);

}

function CreateWidget( nAppId )
{
	$J('#widget_create').hide();

	var nSubId = $J('input[name=w_subid]').val();
	if( !nSubId )
		nSubId = $J('input:radio[name=w_rsubid]:checked').val();

	var strDesc = $J('textarea[name=w_text]').val();

	var strWidgetURL;
	if( nSubId )
		strWidgetURL = 'https://store.steampowered.com/widget/' + nAppId + '/' + nSubId + '/';
	else
		strWidgetURL = 'https://store.steampowered.com/widget/' + nAppId + '/';

	if( strDesc )
		strWidgetURL = strWidgetURL + '?t=' + encodeURIComponent( strDesc );

	var strWidgetCode = '<iframe src="' + strWidgetURL + '" frameborder="0" width="646" height="190"></iframe>';

	var $iframe = $J(strWidgetCode);

	$J('#widget_container').empty();
	$J('#widget_container').append($iframe);
	$J('#widget_code').val( strWidgetCode );

	$J('#widget_finished').show();
}

function InitQueueControls( store_appid, steamworks_appid, next_in_queue_appid, snr )
{
	var $FollowBtn = $J('.queue_control_button.queue_btn_follow .queue_btn_inactive');
	var $UnFollowBtn = $J('.queue_control_button.queue_btn_follow .queue_btn_active');
	var $IgnoreBtn = $J('.queue_control_button.queue_btn_ignore .queue_btn_inactive');
	var $UnIgnoreBtn = $J('.queue_control_button.queue_btn_ignore .queue_btn_active');

	var $IgnoreMenuBtn = $J('#queue_ignore_menu_arrow');
	var $IgnoreMenu = $J('#queue_btn_ignore_menu');
	var $IgnoreMenuOption_NotInterested = $J('#queue_ignore_menu_option_not_interested' );
	var $IgnoreMenuOption_OwnedElsewhere = $J('#queue_ignore_menu_option_owned_elsewhere' );

	var funcUpdateIgnoredReasonClasses = function() {
		$IgnoreMenu.removeClass( "not_interested owned_elsewhere" );
		var curIgnoredReason = $IgnoreMenu.data( "ignoredreason" );
		if ( curIgnoredReason !== undefined )
		{
			$IgnoreMenuBtn.removeClass( "queue_btn_inactive" );
			$IgnoreMenuBtn.addClass( "queue_btn_active" );
			switch( curIgnoredReason )
			{
				case 0:
					$IgnoreMenu.addClass( "not_interested" );
					break;
				case 2:
					$IgnoreMenu.addClass( "owned_elsewhere" );
					break;
			}
		}
	};
	funcUpdateIgnoredReasonClasses();

	var funcIgnoreGame = function( ignore_reason ) {
		$J.post( 'https://store.steampowered.com/recommended/ignorerecommendation/', {
			sessionid: g_sessionID,
			appid: store_appid,
			snr: snr,
			ignore_reason: ignore_reason
		}).done( function( data ) {
			$IgnoreBtn.hide();
			$UnIgnoreBtn.show();

			$IgnoreMenu.data( "ignoredreason", ignore_reason );
			funcUpdateIgnoredReasonClasses();

			GDynamicStore.InvalidateCache();
			if ( data && data.nSaleTaskCompleted ) { NewStickerPackModal( 'Mark something Not Interested' ); } // SummerSale2017
		}).fail( function( jqXHR ) {
			ShowAlertDialog( 'Ignore App', 'There was a problem saving your changes.  Please try again later.' );
		});
	};

	$IgnoreBtn.click( function() {
		funcIgnoreGame( 0 );
	} );
	$IgnoreMenuOption_NotInterested.click( function() {
		funcIgnoreGame( 0 );
	} );
	$IgnoreMenuOption_OwnedElsewhere.click( function() {
		funcIgnoreGame( 2 );
	} );

	$UnIgnoreBtn.click( function() {
		$J.post( 'https://store.steampowered.com/recommended/ignorerecommendation/', {
			sessionid: g_sessionID,
			appid: store_appid,
			snr: snr,
			remove: 1
		}).done( function() {
			$IgnoreBtn.show();
			$UnIgnoreBtn.hide();
			$IgnoreMenu.removeClass( "not_interested owned_elsewhere" );
			$IgnoreMenuBtn.removeClass( "queue_btn_active" );
			$IgnoreMenuBtn.addClass( "queue_btn_inactive" );
			GDynamicStore.InvalidateCache();
		}).fail( function() {
			ShowAlertDialog( 'Ignore App', 'There was a problem saving your changes.  Please try again later.' );
		});
	});

	$FollowBtn.click( function() {
		$J.post( 'https://store.steampowered.com/explore/followgame/', {
			sessionid: g_sessionID,
			appid: steamworks_appid
		}).done( function() {
			$FollowBtn.hide();
			$UnFollowBtn.show();
		}).fail( function() {
			ShowAlertDialog( 'Follow', 'There was a problem saving your changes.  Please try again later.' );
		});
	});

	$UnFollowBtn.click( function() {
		$J.post( 'https://store.steampowered.com/explore/followgame/', {
			sessionid: g_sessionID,
			appid: steamworks_appid,
			unfollow: 1
		}).done( function() {
			$FollowBtn.show();
			$UnFollowBtn.hide();
		}).fail( function() {
			ShowAlertDialog( 'Follow', 'There was a problem saving your changes.  Please try again later.' );
		});
	});

	// discovery queue settings dialog
	var bQueueIsValid = true;
	var $NextInQueueBtn = $J('.btn_next_in_queue_trigger');

	$NextInQueueBtn.click( function() {
		if ( bQueueIsValid )
			$J('#next_in_queue_form').submit();
		else
			window.location = 'https://store.steampowered.com/explore/startnew';
	});

	$J('a.dq_settings_link').click( function() {
		CDiscoveryQueue.ShowCustomizeDialog( function( data ) {
			if ( data && data.queue && ( data.queue.indexOf( store_appid ) == -1 ||
				( next_in_queue_appid && data.queue.indexOf( next_in_queue_appid ) == -1 ) ) )
			{
				ShowConfirmDialog( 'Customize Your Discovery Queue', 'We\'ve built you a new Discovery Queue by applying your customizations.  What would you like to do?',
					'Start exploring the new Queue','Stay here'
				).done( function() {
					window.location = 'https://store.steampowered.com/explore/startnew/' + g_eDiscoveryQueueType + '/';
				});
				bQueueIsValid = false;
			}
			else
			{
				bQueueIsValid = true;
			}
		}, g_eDiscoveryQueueType );
	} );
}


function InitAutocollapse()
{
	$J('.game_page_autocollapse').each( function() {
		var content = this;
		var $Content = $J(content);
		$Content.wrap( $J('<div/>', {'class': 'game_page_autocollapse_ctn' } ) );

		var $Container = $Content.parent();

		var $ReadMore = $J('<div/>', {'class': 'game_page_autocollapse_readmore' }).text( 'READ MORE' );
		var $Fade = $J('<div/>', {'class': 'game_page_autocollapse_fade' } ).append( $ReadMore );
		$Container.append( $Fade );

		var nInterval = 0;
		var nMaxHeight = parseInt( $Content.css('max-height') );
		var bMaxHeightSet = true;

		$Content.on( 'gamepage_autocollapse_expand', function() {
			if ( $Container.hasClass( 'collapsed' ) )
			{
				$Container.removeClass( 'collapsed' );
				$Container.addClass( 'expanded' );

				if ( bMaxHeightSet )
				{
					$Content.animate( {'max-height': content.scrollHeight + 20 + 'px'}, 'fast', null, function() { $Content.css('max-height', 'none' ); } );
				}
				window.clearInterval( nInterval );
			}
		});

		$ReadMore.click( function() { $Content.trigger('gamepage_autocollapse_expand'); } );

		var fnCheckHeight = function ()	{
			if ( content.scrollHeight > nMaxHeight + 30 )
			{
				$Content.css( 'max-height', nMaxHeight + 'px' );
				$Container.addClass( 'collapsed' );
				window.clearInterval( nInterval );
				bMaxHeightSet = true;
			}
			else if ( bMaxHeightSet )
			{
				$Content.css( 'max-height', 'none' );
				bMaxHeightSet = false;
			}
		};

		nInterval = window.setInterval( fnCheckHeight, 250 );
		fnCheckHeight();

	});
}

function DefaultRecScoreFactory( nOwnedPenalty )
{
	return function DefaultRecScore( i, unAppID )
	{
		if ( GDynamicStore.BIsAppIgnored( unAppID ) )
			return null;
		else if ( GDynamicStore.BIsAppOwned( unAppID, false ) )
			return nOwnedPenalty + i;
		else
			return i;
	};
}

function ShuffleRecScore( i, unAppID )
{
	var nScore = 0;
	var nOwnedPenalty = 5;

	if ( GDynamicStore.BIsAppIgnored( unAppID ) )
		return null;

	if ( GDynamicStore.BIsAppOwned( unAppID, false ) )
		nScore += nOwnedPenalty;

	// shuffle a little
	nScore += ( Math.sqrt(i) + 2 ) * Math.random();
	nScore += Math.sqrt( i );

	return nScore;
}


function RenderRecommendBlock( rgRecommendedAppIDs, strAppURL, elTarget, fnRecScore )
{
	var rgRecommendationsToShow = [];
	var fnScore = fnRecScore || DefaultRecScoreFactory( 3 );

	for ( var i = 0; i < rgRecommendedAppIDs.length; i++ )
	{
		var unAppID = rgRecommendedAppIDs[i];
		var nScore = fnScore( i, unAppID );

		if ( nScore !== null )
			rgRecommendationsToShow.push( { score: nScore, appid: unAppID, orig: i } );
	}

	rgRecommendationsToShow.sort( function( a, b ) { return a.score - b.score; } );

	rgRecommendationsToShow = rgRecommendationsToShow.slice( 0, 12 );

	for ( var i = 0; i < rgRecommendationsToShow.length; i++ )
	{
		var unAppID = rgRecommendationsToShow[i].appid;
		var rgItemData = GStoreItemData.rgAppData[ unAppID ];
		if ( !rgItemData )
			continue;

		var params = {'class': 'small_cap',
			'data-ds-appid': unAppID,
			'href': GStoreItemData.GetAppURL( unAppID, strAppURL )
		};
		if ( rgItemData['steam_deck_compat_category'] !== undefined )
		{
			params['data-ds-steam-deck-compat-category'] = rgItemData['steam_deck_compat_category'];
		}

		var $CapCtn = $J('<a/>', params );
		GStoreItemData.BindHoverEvents( $CapCtn, unAppID, null );

		$CapCtn.append( $J('<img/>', {src: rgItemData.small_capsulev5, 'class': 'small_cap_img' } ) );
		$CapCtn.append( $J('<h4/>').html( rgItemData.name ) );
		$CapCtn.append( $J(rgItemData.discount_block).addClass( 'discount_block_inline') );

		elTarget.append( $CapCtn );
	}
	GDynamicStoreHelpers.AddSNRDepthParamsToCapsuleList( elTarget.children() );
	GDynamicStore.DecorateDynamicItems( elTarget );
	elTarget.append( $J('<div/>', { style: 'clear: left;' } ) );
	elTarget.trigger('v_contentschanged');
}

function RenderMoreLikeThisBlock( rgRecommendedAppIDs, bUseShuffle )
{
	if ( !rgRecommendedAppIDs || !rgRecommendedAppIDs.length > 0 || !$J('#recommended_block_content').length )
	{
		$J('#recommended_block').hide();
		return;
	}

	RenderRecommendBlock( rgRecommendedAppIDs, 'recommended', $J('#recommended_block_content'), bUseShuffle ? ShuffleRecScore : DefaultRecScoreFactory( 15 ) );
}
					
function RenderAccessoriesBlock( rgAccessoryAppIDs )
{
	if ( !rgAccessoryAppIDs || !rgAccessoryAppIDs.length > 0 || !$J('#accessory_block_content').length )
	{
		$J('#accessory_block').hide();
		return;
	}

	RenderRecommendBlock( rgAccessoryAppIDs, 'accessories', $J('#accessory_block_content') );

	function scrollToAccessoriesIfNeeded()
	{
		if ( window.location.hash == "#accessories" )
		{
			document.querySelector( "#accessory_block" ).scrollIntoView( {
				behavior: 'smooth',
				block: 'center',
				inline: 'center',
			} );

			document.querySelector( "#accessory_block" ).classList.add( "highlighted" );
		}
		else
		{
			document.querySelector( "#accessory_block" ).classList.remove( "highlighted" );
		}
	}

	window.addEventListener( "hashchange", scrollToAccessoriesIfNeeded, false );
	window.addEventListener( "load", scrollToAccessoriesIfNeeded, false );
}

function RenderFranchiseAppBlock( rgFranchiseAppIDs )
{
		rgFranchiseAppIDs = rgFranchiseAppIDs.filter( function( appid ) { return !!GStoreItemData.rgAppData[appid]; } )
	if( !rgFranchiseAppIDs || !rgFranchiseAppIDs.length > 0 || !$J('#franchise_app_block_content').length )
	{
		$J('#franchise_block').hide();
		return;
	}

	RenderRecommendBlock( rgFranchiseAppIDs, 'recommend_franchise', $J('#franchise_app_block_content') );
}

function RenderMoreDLCFromBaseGameBlock( rgMoreDLCsFromBaseGameAppIDs )
{
	if( !rgMoreDLCsFromBaseGameAppIDs || !rgMoreDLCsFromBaseGameAppIDs.length > 0 || !$J('#moredlcfrombasegame_block_content').length )
	{
		$J('#moredlcfrombasegame_block').hide();
		return;
	}

	RenderRecommendBlock( rgMoreDLCsFromBaseGameAppIDs, 'other_dlc', $J('#moredlcfrombasegame_block_content') );
}


function ShowEULA( elLink )
{
	var win = window.open( elLink.href,'eula','height=584,width=475,resize=yes,scrollbars=yes');
	win.focus();
}


// formerly user_reviews_store.js

var g_recommendationContents = [ 'friend', 'summary', 'recent_short', 'all', 'positive', 'negative', 'recent', 'funny' ];


function OnRecommendationVotedUp( recommendationid )
{
	for ( var i = 0; i < g_recommendationContents.length; ++i )
	{
		$J( '#RecommendationVoteUpBtn' + g_recommendationContents[i] + recommendationid ).addClass( 'btn_active' );
		$J( '#RecommendationVoteDownBtn' + g_recommendationContents[i] + recommendationid ).removeClass( "btn_active" );
		$J( '#RecommendationVoteTagBtn' + g_recommendationContents[i] + recommendationid + '_' + 1 ).removeClass( 'btn_active' );
	}
}

function OnRecommendationVotedDown( recommendationid )
{
	for ( var i = 0; i < g_recommendationContents.length; ++i )
	{
		$J( '#RecommendationVoteUpBtn' + g_recommendationContents[i] + recommendationid ).removeClass( 'btn_active' );
		$J( '#RecommendationVoteDownBtn' + g_recommendationContents[i] + recommendationid ).addClass( "btn_active" );
		$J( '#RecommendationVoteTagBtn' + g_recommendationContents[i] + recommendationid + '_' + 1 ).removeClass( 'btn_active' );
	}
}

function OnRecommendationVotedTag( recommendationid, tagID, bRateUp )
{
	for ( var i = 0; i < g_recommendationContents.length; ++i )
	{
		if ( bRateUp )
		{
			$J( '#RecommendationVoteTagBtn' + g_recommendationContents[i] + recommendationid + '_' + tagID ).addClass( 'btn_active' );
			$J( '#RecommendationVoteUpBtn' + g_recommendationContents[i] + recommendationid ).removeClass( 'btn_active' );
			$J( '#RecommendationVoteDownBtn' + g_recommendationContents[i] + recommendationid ).removeClass( "btn_active" );
		}
		else
		{
			$J( '#RecommendationVoteTagBtn' + g_recommendationContents[i] + recommendationid + '_' + tagID ).removeClass( 'btn_active' );
		}
	}
}

function OnRecommendationAward( recommendationid, award )
{
	for ( var i = 0; i < g_recommendationContents.length; ++i )
	{
		var review = $J( "#ReviewContent" + g_recommendationContents[i] + recommendationid );
		var rewardsCtn = review.find( ".review_award_ctn" );
		if ( rewardsCtn.length != 0 )
		{
			var bFoundExisting = false;
			var rewards = rewardsCtn.find( ".review_award" );
			for ( var j = 0; j < rewards.length; ++j )
			{
				var reward = $J( rewards[j] );
				if ( reward.data( "reaction" ) == award )
				{
					bFoundExisting = true;

					var count = parseInt( reward.data( "reactioncount" ) );
					var countElem = reward.find( ".review_award_count" );
					countElem.text( count + 1 );

					reward.data( "reactioncount", count + 1 );
					break;
				}
			}

			if ( !bFoundExisting )
			{
				var reward = $J( "<div>", { class: "review_award" } );
				var img = $J( "<img>", { class: "review_award_icon tooltip", src: "https://store.cloudflare.steamstatic.com/public/images/loyalty/reactions/still/" + award + ".png" } );
				reward.append( img );

				var countElem = $J( "<span>", { class: "review_award_count", text: "1" } );
				reward.append( countElem );

				reward.data( "reaction", award );
				reward.data( "reactioncount", 1 );

				rewardsCtn.append( reward );
				review.find( ".vote_info" ).show();
			}
		}
	}
}

function RequestCurrentUserRecommendationVotes( recommendationIDs )
{
	if ( recommendationIDs.length == 0 )
	{
		return;
	}

	$J.post( 'https://store.steampowered.com//userreviews/ajaxgetvotes/', {
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
					if ( vote.voted_funny )
					{
						OnRecommendationVotedTag( vote.recommendationid, 1, true );
					}
				}
			}
		} );
}

function UserReviewVoteUp( bLoggedIn, strLoginURL, id )
{
	if ( !bLoggedIn )
	{
		var dialog = ShowConfirmDialog( 'Error', 'You must be logged in to perform that action.', 'Sign In' );
		dialog.done( function() {
			top.location.href = strLoginURL;
		} );
		return;
	}

	UserReview_Rate( id, true, 'https://store.steampowered.com/',
		function( rgResults ) {
			if ( rgResults.nSaleTaskCompleted ) { NewStickerPackModal( 'Mark a Review as Helpful ... or not');}
			OnRecommendationVotedUp( id );
		}
	);
}

function UserReviewVoteDown( bLoggedIn, strLoginURL, id )
{
	if ( !bLoggedIn )
	{
		var dialog = ShowConfirmDialog( 'Error', 'You must be logged in to perform that action.', 'Sign In' );
		dialog.done( function() {
			top.location.href = strLoginURL;
		} );
		return;
	}

	UserReview_Rate( id, false, 'https://store.steampowered.com/',
		function( rgResults ) {
			if ( rgResults.nSaleTaskCompleted ) { NewStickerPackModal( 'Mark a Review as Helpful ... or not');}
			OnRecommendationVotedDown( id );
		}
	);
}

function UserReviewVoteTag( bLoggedIn, strLoginURL, id, tagID, elemID )
{
	if ( !bLoggedIn )
	{
		var dialog = ShowConfirmDialog( 'Error', 'You must be logged in to perform that action.', 'Sign In' );
		dialog.done( function() {
			top.location.href = strLoginURL;
		} );
		return;
	}

	var elem = $J( '#' + elemID );
	var bRateUp = !elem.hasClass( 'btn_active' );
	UserReview_VoteTag( id, tagID, bRateUp, 'https://store.steampowered.com/',
		function( rgResults ) {
			OnRecommendationVotedTag( id, tagID, bRateUp );
		}
	);
}

function UserReviewSetQuality( id )
{
	var quality = $J( "#ReviewQuality" + id ).val();
	UserReview_Moderate_SetQuality( id, quality, 'https://store.steampowered.com/',
		function( rgResults ) {
		}
	);
}

function UserReviewShowMore( id, context )
{
	$J('#ReviewContent'+context+id).parent().removeClass('partial');
	$J('#ReviewContent'+context+id).parent().addClass('expanded');
}

function LoadMoreReviews( appid, cursor, dayRange, startDate, endDate, context )
{
	$J( "#ViewAllReviews" + context ).remove();
	$J( "#LoadMoreReviews" + context ).remove();
	$J( "#LoadingMoreReviews" + context ).show();

	var container = $J( "#Reviews_" + context );

	var reviewType = $J('input[name="review_type"]:checked').val();
	var purchaseType = $J('input[name="purchase_type"]:checked').val();
	var language = $J('input[name="review_language"]:checked').val();
	var filterOfftopicActivity = $J( "#reviews_offtopic_activity_checkbox" ).is( ":checked" ) ? 1 : 0;
	var dateRangeType = $J('input[name="review_date_range"]:checked').val();
	var summaryNumPositiveReviews = $J( "#review_summary_num_positive_reviews" ).val();
	var summaryNumReviews = $J( "#review_summary_num_reviews" ).val();
	var playtimeFilterMin = $J( "#app_reviews_playtime_range_min" ).val();
	var playtimeFilterMax = $J( "#app_reviews_playtime_range_max" ).val();

	var filteredReviewScore = $J( "#user_reviews_filter_score" );
	filteredReviewScore.removeClass( "visible" );

	$J.get( 'https://store.steampowered.com/appreviews/' + appid,{
		'cursor' : cursor,
		'day_range' : dayRange,
		'start_date' : startDate,
		'end_date' : endDate,
		'date_range_type' : dateRangeType,
		'filter' : context,
		'language' : language,
		'l' : 'english',
		'review_type' : reviewType,
		'purchase_type' : purchaseType,
		'playtime_filter_min' : playtimeFilterMin,
		'playtime_filter_max' : playtimeFilterMax,
		'filter_offtopic_activity' : filterOfftopicActivity,
		'summary_num_positive_reviews' : summaryNumPositiveReviews,
		'summary_num_reviews' : summaryNumReviews
	}).done( function( data ) {

		RecordAJAXPageView( this.url );

		if ( data.success == 1 )
		{
			$J( "#Reviews_loading" ).hide();
			$J( "#Reviews_" + context ).show();

			if ( cursor == "" || cursor == "*" )
			{
				var filteredReviewScore = $J( "#user_reviews_filter_score" );
				if ( data.review_score )
				{
					filteredReviewScore.addClass( "visible" );
					filteredReviewScore.html( data.review_score );
				}
				else
				{
					filteredReviewScore.removeClass( "visible" );
				}
			}
			$J( "#LoadingMoreReviews" + context ).remove();

			// remove duplicates
			var recommendationIDs = [];
			var temp = $J('<div></div>');
			temp.append( data.html );
			for ( var i = 0; i < data.recommendationids.length; ++i )
			{
				var recommendationid = data.recommendationids[i];
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

			if ( data.date_filter_text )
			{
				var dateFilterText = $J( "#review_selected_histogram_date_range_text" );
				dateFilterText.text( data.date_filter_text );
				dateFilterText.show();
			}

			// all dupes, request more
			if ( data.recommendationids.length != 0 && recommendationIDs.length == 0 )
			{
				LoadMoreReviews(appid, data.cursor, data.dayrange, data.start_date, data.end_date, context );
			}
			else
			{
				CollapseLongReviews();
				RequestCurrentUserRecommendationVotes( recommendationIDs );
			}

			// if customer is on a mobile size screen make content changes in the reviews section  
			ReparentReviewsForSmallScreens();
		}
		else
		{
			ShowAlertDialog( 'Error', 'There was an error trying to process your request: ' + data.error );
			$J( "#Reviews_" + context ).show();
			$J( "#LoadingMoreReviews" + context ).remove();
		}
	} );
}

function SelectReviews( appid, context, reviewDayRange, startDate, endDate, forceClear )
{
	$J( "#ReviewsTab_summary" ).removeClass( "active" );
	$J( "#ReviewsTab_all" ).removeClass( "active" );
	$J( "#ReviewsTab_recent" ).removeClass( "active" );
	$J( "#ReviewsTab_positive" ).removeClass( "active" );
	$J( "#ReviewsTab_negative" ).removeClass( "active" );
	$J( "#ReviewsTab_funny" ).removeClass( "active" );
	$J( "#ReviewsTab_" + context ).addClass( "active" );

	$J( "#Reviews_summary" ).hide();
	$J( "#Reviews_all" ).hide();
	$J( "#Reviews_recent" ).hide();
	$J( "#Reviews_positive" ).hide();
	$J( "#Reviews_negative" ).hide();
	$J( "#Reviews_funny" ).hide();
	$J( "#Reviews_loading" ).show();

	var container = $J( "#Reviews_" + context );
	if ( forceClear )
	{
		container.empty()
	}
	if ( container.children().length == 0 )
	{
		LoadMoreReviews( appid, "*", reviewDayRange, startDate, endDate, context );
	}
}

function FilterReviewsToGraph( bCountAllReviews, startDate, endDate )
{
	if ( bCountAllReviews )
	{
		$J('#purchase_type_all').attr( 'checked', true );
	}
	else
	{
		$J('#purchase_type_steam').attr( 'checked', !bCountAllReviews );
	}

	$J('#review_start_date').val( startDate );
	$J('#review_end_date').val( endDate );
	if ( !$J('#review_date_range_histogram').attr( 'checked' ) && !$J('#review_date_range_exclude_histogram').attr( 'checked') )
	{
		$J('#review_date_range_histogram').attr('checked', true);
	}
	$J('#review_date_range_histogram').attr( 'disabled', false );
	$J('#review_date_range_exclude_histogram').attr( 'disabled', false );
	ShowFilteredReviews();
}

function FilterReviewsGraph( bCountAllReviews, startDate, endDate, bExclude )
{
	if ( bCountAllReviews )
	{
		$J('#purchase_type_all').attr( 'checked', true );
	}
	else
	{
		$J('#purchase_type_steam').attr( 'checked', !bCountAllReviews );
	}

	$J('#review_start_date').val( startDate );
	$J('#review_end_date').val( endDate );

	$J('#review_date_range_histogram').attr( 'disabled', false );
	$J('#review_date_range_exclude_histogram').attr( 'disabled', false );

	if ( bExclude )
	{
		$J('#review_date_range_exclude_histogram').attr( 'checked', true );
	}
	else
	{
		$J('#review_date_range_histogram').attr( 'checked', true );
	}

	ShowFilteredReviews();
}

function ClearReviewTypeFilter()
{
	$J('#review_type_all').attr( 'checked', true );
	ShowFilteredReviews();
}

function ClearReviewPurchaseTypeFilter()
{
	$J('#purchase_type_all').attr( 'checked', true );
	ShowFilteredReviews();
}

function ClearReviewLanguageFilter()
{
	$J('#review_language_all').attr( 'checked', true );
	ShowFilteredReviews();
}

function ClearReviewDateRangeFilter()
{
	$J('#review_date_range_all').attr( 'checked', true );
	ClearReviewDateFilter();
}

function EditUserReviewScorePreference()
{
	if ( g_AccountID == 0 )
	{
		ShowAlertDialog( 'Error', 'You must be logged in to perform that action.' );
		return;
	}
	
	$J.post(
		'https://store.steampowered.com/account/edituserreviewscorepreference/', { sessionid: g_sessionID }
	).done( function( response ) {
		var dialogContent = $J( response.html );
		var dialog = ShowAlertDialog( 'Review Score Settings', dialogContent, 'Cancel' );
	});
}

function SetUserReviewScorePreference( pref )
{
	if ( g_AccountID == 0 )
	{
		ShowAlertDialog( 'Error', 'You must be logged in to perform that action.' );
		return;
	}

	var rgData = {
		preference: pref,
		sessionid : g_sessionID
	};
	$J.post( 'https://store.steampowered.com/account/saveuserreviewscorepreference', rgData ).done(
		function( json )
		{
			var h = window.location.href.substr( 0, window.location.href.indexOf('#') );
			window.location.href = h + '#app_reviews_hash';
			window.location.reload( true );
		}
	).fail(
		function( json )
		{
			ShowAlertDialog( "Error", "Your preferences have not been saved. Please try again later." );
		}
	);
}

function IntervalDistance( min1, max1, min2, max2 )
{
	return Math.max( 0, Math.max( min2 - max1, min1 - max2 ) );
}

function DrawPastEvents( flotRollup, rgPastEvents )
{
	var ctx = flotRollup.getCanvas().getContext("2d");
	var rollupPoints = flotRollup.getData();
	var seriesPositive = rollupPoints[0];
	var axes = flotRollup.getAxes();
	var dateOptions = { day: 'numeric', month: 'long', year: 'numeric', timeZone: "UTC" };

	for ( var i = 0; i < rgPastEvents.length; ++i )
	{
		var event = rgPastEvents[i];
		var midDate = ( event.start_date + ( event.end_date - event.start_date ) / 2 ) * 1000;

		var o = flotRollup.pointOffset( { x: midDate, y: axes.yaxis.max } );

		var topY = seriesPositive.yaxis.p2c( event.recommendations_up );

		var eventIconID = flotRollup.getPlaceholder()[0].id + "_review_anomaly_" + event.start_date;
		var eventIcon = $J( "#" + eventIconID );
		var newStyle = {
			left: (o.left - 6) + 'px',
			top: (o.top - 10) + 'px'
		};

		if ( eventIcon.length == 0 )
		{
			eventIcon = $J( '<div/>', { id: eventIconID, class: 'review_event_graph_icon', style: JSON.stringify( newStyle ), html: '*' } );
			eventIcon.data( 'startDate', event.start_date );
			eventIcon.data( 'endDate', event.end_date );
			var startDate = new Date( event.start_date * 1000 );
			var endDate = new Date( event.end_date * 1000 );
			var strToolTip = 'Off-topic review activity detected:<br><br>' +	startDate.toLocaleDateString( undefined, dateOptions ) + " - " + endDate.toLocaleDateString( undefined, dateOptions ) + '<br><br>Click for more details.';
			eventIcon.data( 'tooltipContent', strToolTip );
			eventIcon.v_tooltip();
			flotRollup.getPlaceholder().append( eventIcon );
		}
		else
		{
			eventIcon.css( newStyle );
		}

		o.top += 10;

		ctx.beginPath();
		ctx.moveTo(o.left-1, o.top);
		ctx.lineTo(o.left, topY);
		ctx.lineTo(o.left+1, o.top);
		ctx.lineTo(o.left-1, o.top);
		ctx.fillStyle = "#fff";
		ctx.fill();
	}
}

function AddOrUpdatePastEvent( rgPastEvents, event )
{
	for ( var i = 0; i < rgPastEvents.length; ++i )
	{
		if ( rgPastEvents[i].start_date == event.start_date )
		{
			rgPastEvents[i].recommendations_up = Math.max( rgPastEvents[i].recommendations_up, event.recommendations_up );
			return;
		}
	}

	rgPastEvents.push( { start_date: event.start_date, end_date: event.end_date, recommendations_up: event.recommendations_up } );
}

function BuildReviewHistogram()
{
	if( $J( "#review_histograms_container" ).length == 0 )
		return;

	var appid = $J( "#review_appid" ).val();

	var review_score_preference = 0;
	if ( typeof GDynamicStore != 'undefined' )
	{
		review_score_preference = ( !GDynamicStore.s_preferences['review_score_preference'] ? 0 : GDynamicStore.s_preferences['review_score_preference'] );
	}

	$J.get( 'https://store.steampowered.com/appreviewhistogram/' + appid, { l: 'english', review_score_preference: review_score_preference }
	).done( function( data ) {

		$J( "#review_histograms_container" ).addClass( "has_data" );

		// remove so we can draw to the canvas
		$J( "#review_histograms_container" ).removeClass( "collapsed" );
		$J( "#reviews_filter_options" ).removeClass( "graph_collapsed" );

		var bCountAllReviews = data.count_all_reviews;
		var bExpandGraph = data.expand_graph;
		// language
		var elemLanguageBreakdown = $J( "#review_language_breakdown" );

		var numTotalDays = ( data.results.end_date - data.results.start_date ) / 86400;
		var numReviewsRecent = 0;
		for ( var i = 0; i < data.results.recent.length; ++i )
		{
			var recentDay = data.results.recent[i];
			numReviewsRecent += recentDay.recommendations_up + recentDay.recommendations_down;
		}

		if ( numTotalDays < 7 )
		{
			$J( "#app_reviews_hash" ).addClass( "graph_hidden" );
			$J( "#review_histogram_rollup_container" ).hide();
			$J( "#review_histogram_rollup_section" ).addClass( "recent" );
			$J( "#review_histogram_rollup_section" ).addClass( "hidden" );
			$J( "#review_histogram_recent_section" ).hide();
			return;
		}
		else if ( numReviewsRecent == 0 )
		{
			data.results.recent = null;
			$J( "#review_histogram_rollup_section" ).addClass( "recent" );
			$J( "#review_histogram_recent_section" ).hide();
		}
		else if ( numTotalDays < 30 )
		{
			$J( "#review_histogram_rollup_section" ).addClass( "recent" );
			$J( "#review_histogram_recent_section" ).hide();

			data.results.rollups = data.results.recent;
			data.results.recent = null;
			data.results.rollup_type = 'day';
		}

		var chartDataPositive = [];
		var chartDataNegative = [];

		var chartDataPositiveEvent = [];
		var chartDataNegativeEvent = [];
		var rgPastEventsRollup = [];
		var rgPastEventsRecent = [];

		for ( var i = 0; i < data.results.rollups.length; ++i )
		{
			var rollup = data.results.rollups[i];
			var barDataUp = [ rollup.date * 1000, rollup.recommendations_up ];
			var barDataDown = [ rollup.date * 1000, -rollup.recommendations_down ];
			chartDataPositive.push( barDataUp );
			chartDataNegative.push( barDataDown );

			if ( data.past_events && data.past_events.length != 0 )
			{
				for ( var j = 0; j < data.past_events.length; ++j )
				{
					var event = data.past_events[j];
					var rollupDateEnd = new Date( rollup.date * 1000 );
					if ( data.results.rollup_type == 'week' )
					{
						rollupDateEnd = new Date( ( rollup.date + 86400*7 - 1 ) * 1000 );
					}
					else if ( data.results.rollup_type == 'month' )
					{
						rollupDateEnd.setMonth( rollupDateEnd.getMonth() + 1 );
					}
					if ( IntervalDistance( event.start_date, event.end_date, rollup.date, rollupDateEnd.getTime() / 1000 ) == 0 )
					{
						chartDataPositiveEvent.push( barDataUp );
						chartDataNegativeEvent.push( barDataDown );

						AddOrUpdatePastEvent( rgPastEventsRollup, { start_date: event.start_date, end_date : event.end_date, recommendations_up: rollup.recommendations_up } );
						break;
					}
				}
			}
		}
		var seriesRollup = [
			{ label: "Positive", color: "#66c0f4", fillColor: "#66c0f4", data: chartDataPositive },
			{ label: "Negative", color: "#A34C25", fillColor: "#A34C25", data: chartDataNegative },
			{ label: "Positive", color: "#FFFFFF", fillColor: "#FFFFFF", data: chartDataPositiveEvent },
			{ label: "Negative", color: "#FFFFFF", fillColor: "#FFFFFF", data: chartDataNegativeEvent },
		];

		var seriesRecent = null;
		if ( data.results.recent )
		{
			chartDataPositive = [];
			chartDataNegative = [];
			chartDataPositiveEvent = [];
			chartDataNegativeEvent = [];
			for ( var i = 0; i < data.results.recent.length; ++i )
			{
				var recentDay = data.results.recent[i];
				var barDataUp = [ recentDay.date * 1000, recentDay.recommendations_up ];
				var barDataDown = [ recentDay.date * 1000, -recentDay.recommendations_down ];
				chartDataPositive.push( barDataUp );
				chartDataNegative.push( barDataDown );
				if ( data.past_events && data.past_events.length != 0 )
				{
					for ( var j = 0; j < data.past_events.length; ++j )
					{
						var event = data.past_events[j];
						if ( IntervalDistance( event.start_date, event.end_date, recentDay.date, recentDay.date + 86400 - 1 ) == 0 )
						{
							chartDataPositiveEvent.push( barDataUp );
							chartDataNegativeEvent.push( barDataDown );

							AddOrUpdatePastEvent( rgPastEventsRecent, { start_date: event.start_date, end_date : event.end_date, recommendations_up: recentDay.recommendations_up } );
							break;
						}
					}
				}
			}
			seriesRecent = [
				{ color: "#66c0f4", label: "Positive", data: chartDataPositive },
				{ color: "#A34C25", label: "Negative", data: chartDataNegative },
				{ label: "Positive", color: "#FFFFFF", fillColor: "#FFFFFF", data: chartDataPositiveEvent },
				{ label: "Negative", color: "#FFFFFF", fillColor: "#FFFFFF", data: chartDataNegativeEvent },
			];
		}

		var options = {
			series: {
				stack: 0,
				bars: {
					show: 1,
					fill: 1,
					lineWidth: 0,
					barWidth: 86400*1000 * 0.5,
					align: "left"
				},
				lines: {
					show: 0
				},
				highlightColor: 'rgb(255,255,255)'
			},
			legend: {
				show: 0
			},
			xaxis: {
				mode: "time",
				timeformat: "%b %d",
				tickLength: 0
			},
			yaxis: {
				tickFormatter : function( val, axis ) {
					return ( val < 0 ) ? -val : val;
				},
				tickLength: 0,
				tickDecimals: 0
			},
			grid: {
				hoverable: true,
				clickable: true,
				borderWidth: 0,
				margin: 0,
				mouseActiveRadius: 10,
				autoHighlight: true,
				markings: [ { yaxis: { from: 0, to: 0 }, color: "#4582A5" } ]
			},
			selection: {
				mode: "x",
				color: "#ffffff",
			}
		};

		// week/month rollup
		var rollupOptions = $J.extend( true, {}, options );
		if ( data.results.rollup_type == 'week' )
		{
			if ( numTotalDays > 365 / 2 )
			{
				rollupOptions.xaxis.timeformat = "%b";
			}
			else
			{
				rollupOptions.xaxis.timeformat = "%b %d";
			}
			rollupOptions.series.bars.barWidth = 86400*1000 * 7 * 0.5;
		}
		else if ( data.results.rollup_type == 'month' )
		{
			rollupOptions.xaxis.timeformat = numTotalDays > 365 ? "%b %Y": "%b";
			rollupOptions.series.bars.barWidth = 86400*1000 * 30 * 0.5;
		}

		rollupOptions.yaxis.autoscaleMargin = rgPastEventsRollup.length != 0 ? 0.2 : null;

		var graphRollup =  $J( "#review_histogram_rollup" );
		var flotRollup = $J.plot( graphRollup, seriesRollup, rollupOptions );

		if ( rgPastEventsRollup.length != 0 )
		{
			var funcDrawPastEvents = function() {
				DrawPastEvents( flotRollup, rgPastEventsRollup );
			};
			flotRollup.hooks.draw.push( funcDrawPastEvents );
			funcDrawPastEvents();

			$J("#review_graph_canvas").resize( funcDrawPastEvents );
		}

		// recent
		var graphRecent = null;
		if ( seriesRecent )
		{
			var recentOptions = $J.extend( true, {}, options );
			recentOptions.series.bars.barWidth = 86400*1000 * 0.5;
			recentOptions.xaxis.timeformat = "%b %d";
						recentOptions.yaxis.autoscaleMargin = rgPastEventsRecent.length != 0 ? 0.2 : null;
			var graphRecent =  $J( "#review_histogram_recent" );
			var flotRecent = $J.plot( graphRecent, seriesRecent, recentOptions );

			var recentGraphStartDate = data.results.recent[0].date * 1000;

			var rollupPoints = flotRollup.getData();
			var seriesPositive = rollupPoints[0];
			{
				var startX = seriesPositive.xaxis.p2c( recentGraphStartDate );
				var endPoint = seriesPositive.data[seriesPositive.data.length-1];
				var endX = seriesPositive.xaxis.p2c( endPoint[0] + rollupOptions.series.bars.barWidth );
				var highlightWidth = endX - startX;

				// get min/max of the yaxis
				var axes = flotRollup.getAxes();
				var startY = seriesPositive.yaxis.p2c( axes.yaxis.max );
				var endY = seriesPositive.yaxis.p2c( axes.yaxis.min );
				var highlightHeight = endY - startY;

				var funcDrawGraphOverlay = function() {

					var c = document.getElementById("review_graph_canvas");
					var ctx = c.getContext("2d");
					// resize the canvas to the same size as the element, so our drawing doesn't look blurry
					c.width = $J(c).width();
					c.height = $J(c).height();
					ctx.clearRect(0, 0, c.width, c.height);
					// these should be 1-to-1 now, but for correctness, we need to
					var scaleX = c.width / c.offsetWidth;
					var scaleY = c.height / c.offsetHeight;

					// draw rect on the graph
					ctx.fillStyle = 'rgba(148,217,255,0.2)';
					var offsets = flotRollup.getPlotOffset();
					var offsetLeft = ( offsets.left + startX ) + $J(flotRollup.getCanvas()).offsetParent().position().left;
					var offsetTop = ( offsets.top + startY ) + $J(flotRollup.getCanvas()).offsetParent().position().top;
					ctx.fillRect(offsetLeft * scaleX, offsetTop * scaleY, highlightWidth, highlightHeight);

					// now draw the "pop-out" on our other canvas
					offsetLeft = ( offsets.left + endX ) + $J(flotRollup.getCanvas()).offsetParent().position().left;
					offsetTop = ( offsets.top + startY ) + $J(flotRollup.getCanvas()).offsetParent().position().top;
					var offsetBottom = ( offsets.top + endY ) + $J(flotRollup.getCanvas()).offsetParent().position().top;
					var recentSection = $J("#review_histogram_recent_section");

					ctx.fillStyle = 'rgba(33,44,61,1)';
					ctx.beginPath();
					ctx.moveTo(offsetLeft * scaleX, offsetTop * scaleY);
					ctx.lineTo(recentSection.position().left * scaleX, recentSection.position().top * scaleY);
					ctx.lineTo(recentSection.position().left * scaleX, ( recentSection.position().top + recentSection.height() ) * scaleY);
					ctx.lineTo(offsetLeft * scaleX, offsetBottom * scaleY);
					ctx.lineTo(offsetLeft * scaleX, offsetTop * scaleY);
					ctx.fill();
				};

				var funcDrawPastEvents = function() {
					DrawPastEvents( flotRecent, rgPastEventsRecent );
				};
				flotRecent.hooks.draw.push( funcDrawPastEvents );
				funcDrawPastEvents();

				$J("#review_graph_canvas").resize( funcDrawGraphOverlay );
				$J("#review_graph_canvas").resize( funcDrawPastEvents );
				funcDrawGraphOverlay();
			}
		}

		// tooltip
		$J("<div id='review_histogram_tooltip'></div>").appendTo("body");
		var funcTooltip = function (event, pos, item) {
			var tooltip = $J("#review_histogram_tooltip");
			if ( item )
			{
				var x = item.datapoint[0].toFixed(2);
				var y = item.datapoint[1].toFixed(2);
				var numReviews = parseInt( y );
				var bNegativeReviews = numReviews < 0;
				var yDelta = bNegativeReviews ? 10 : ( -20 - tooltip.height() );
				var xDelta = 5;
				numReviews = Math.abs( numReviews );

				var date = new Date( parseInt(x) );

				var dateOptions = { day: 'numeric', month: 'long', year: 'numeric', timeZone: "UTC" };
				var strDate = date.toLocaleDateString( undefined, dateOptions );
				tooltip.html( v_numberformat( numReviews, 0 ) + " " + item.series.label + " (" + strDate + ")" );
				tooltip.css( {top: item.pageY+yDelta, left: item.pageX+xDelta} );
				tooltip.fadeIn( 10 );

				tooltip.toggleClass( "negative", bNegativeReviews );
			}
			else
			{
				tooltip.hide();
			}
		};

		// click
		var funcClick = function( plot, rollupType ) {
			return function (event, pos, item) {
				// ignore for selection
				if ( plot.getSelection() )
				{
					return;
				}

				if ( item )
				{
					var x = item.datapoint[0].toFixed(2);
					var y = item.datapoint[1].toFixed(2);
					var numReviews = parseInt( y );
					var bNegativeReviews = numReviews < 0;

					var date = new Date( parseInt(x) );
					var startDate = date.getTime() / 1000;
					var endDate = startDate + 86400;
					if ( rollupType == 'week' )
					{
						endDate = startDate + 86400 * 7;
					}
					else if ( rollupType == 'month' )
					{
						var lastDayOfMonth = new Date( date.getUTCFullYear(), date.getUTCMonth() + 1, 0 );
						endDate = lastDayOfMonth.getTime() / 1000;
					}

					$J( bNegativeReviews ? '#review_type_negative' : '#review_type_positive').attr( 'checked', true );
					FilterReviewsToGraph( bCountAllReviews, startDate, endDate );

					flotRollup.clearSelection();
					if ( flotRecent )
					{
						flotRecent.clearSelection();
					}
				}
			}
		};

		var funcSelected = function( plot ) {
			return function (event, ranges) {

				var startDate = Math.floor( ranges.xaxis.from.toFixed(1) / ( 86400 * 1000 ) ) * 86400;
				var endDate = Math.ceil( ranges.xaxis.to.toFixed(1) / ( 86400 * 1000 ) ) * 86400;

				$J( '#review_type_all' ).attr( 'checked', true );
				FilterReviewsToGraph( bCountAllReviews, startDate, endDate );
				if ( plot == flotRollup && flotRecent )
				{
					flotRecent.clearSelection();
				}
				else if ( plot == flotRecent )
				{
					flotRollup.clearSelection();
				}
			};
		};

		var funcUnSelected = function ( event ) {
			
		};

		graphRollup.bind("plothover", funcTooltip);
		graphRollup.bind("plotclick", funcClick( flotRollup, data.results.rollup_type ) );
		graphRollup.bind("plotselected", funcSelected( flotRollup ));
		graphRollup.bind("plotunselected", funcUnSelected );
		if ( graphRecent )
		{
			graphRecent.bind("plothover", funcTooltip);
			graphRecent.bind("plotclick", funcClick( flotRecent, 'day' ) );
			graphRecent.bind("plotselected", funcSelected( flotRecent ) );
			graphRecent.bind("plotunselected", funcUnSelected );
		}

		var funcViewReviewsDuringEvent = function( bCountAllReviews, startDate, endDate ) {
			$J( '#review_type_all' ).attr( 'checked', true );
			$J('#reviews_offtopic_activity_checkbox').attr( 'checked', false );
			FilterReviewsGraph( bCountAllReviews, startDate, endDate, false );
			if ( flotRecent )
			{
				flotRecent.clearSelection();
			}
			flotRollup.clearSelection();
		};

		var funcViewReviewsExcludingEvent = function( bCountAllReviews, startDate, endDate ) {
			$J( '#review_type_all' ).attr( 'checked', true );
			$J('#reviews_offtopic_activity_checkbox').attr( 'checked', false );
			FilterReviewsGraph( bCountAllReviews, startDate, endDate, true );
			if ( flotRecent )
			{
				flotRecent.clearSelection();
			}
			flotRollup.clearSelection();
		};

		// recent events
		if ( bExpandGraph )
		{
			var container = $J( "#review_recent_events_container" );
			container.show();

			flotRollup.draw();
			if ( flotRecent )
			{
				flotRecent.draw();
			}
		}
		else
		{
			$J( "#review_histograms_container" ).addClass( "collapsed" );
			$J( "#reviews_filter_options" ).addClass( "graph_collapsed" );
		}

		$J( ".review_event_graph_icon" ).each( function( index, value ) {
			var $elem = $J( value );
			$elem.click( function() {
				var startDate = $J( this ).data( 'startDate' );
				var endDate = $J( this ).data( 'endDate' );

				var startDateObj = new Date( startDate * 1000 );
				var endDateObj = new Date( endDate * 1000 );
				var dateOptions = { day: 'numeric', month: 'long', year: 'numeric', timeZone: "UTC" };
				var strDateRange = startDateObj.toLocaleDateString( undefined, dateOptions ) + " - " + endDateObj.toLocaleDateString( undefined, dateOptions );

				var dialogContent = $J( "<div/>", { class: "review_anomalous_events_dialog" } );
				dialogContent.append( $J( "<div/>", { class: 'review_anomalous_events_icon', html: '*' } ) );
				dialogContent.append( $J( "<div/>", { class: 'review_anomalous_events_title', html: strDateRange } ) );
				dialogContent.append( $J( "<div/>", { style: "clear: left" } ) );
				dialogContent.append( $J( "<div/>", { html: '<p>This time range has been marked as containing an abnormal set of reviews that we believe are largely unrelated to the likelihood that you would enjoy the product.  The reviews within this period are excluded from the Review Score by default.</p><p>You can learn more about how these time periods are selected by reading <a href="https://steamcommunity.com/games/593110/announcements/detail/1808664240333155775">our Steam blog post.</a></p><p>If you want to dig deeper, you can still read the reviews posted within this time period, or edit your preferences to always include off-topic review periods in Review Scores.</p>' } ) );
				var dialog = ShowConfirmDialog( 'Off-topic Review Activity', dialogContent, 'Read the Reviews', 'Cancel', 'Edit Preferences' );
				dialog.done( function( type ) {
					if ( type == 'OK' )
					{
						funcViewReviewsDuringEvent( bCountAllReviews, startDate, endDate );
					}
					else if ( type == 'SECONDARY' )
					{
						EditUserReviewScorePreference();
					}
				} );
			} );
		} );

	} );
}

function SetReviewsGraphVisibility( bVisible )
{
	$J( "#review_histograms_container" ).toggleClass( "collapsed", !bVisible );
	$J( "#reviews_filter_options" ).toggleClass( "graph_collapsed", !bVisible );
}

function ClearReviewDateFilter()
{
	$J('#review_start_date').val( -1 );
	$J('#review_end_date').val( -1 );
	$J('#review_date_range_histogram').attr( 'disabled', true );
	$J('#review_date_range_exclude_histogram').attr( 'disabled', true );
	$J( "#review_selected_histogram_date_range_text" ).hide();
	ShowFilteredReviews();
}

function OnLoadReviews()
{
	BuildReviewHistogram();
	ShowFilteredReviews();
}

function UpdateActiveFilters()
{
	var bAnyActiveFilters = false;
	// type
	if ( $J( "#review_type_positive" ).attr( "checked" ) )
	{
		bAnyActiveFilters = true;
		$J( "#reviews_filter_type" ).show();
		$J( "#reviews_filter_type" ).text( 'Positive' );
	}
	else if ( $J( "#review_type_negative" ).attr( "checked" ) )
	{
		bAnyActiveFilters = true;
		$J( "#reviews_filter_type" ).show();
		$J( "#reviews_filter_type" ).text( 'Negative' );
	}
	else
	{
		$J( "#reviews_filter_type" ).hide();
	}

	// purchase type
	if ( $J( "#purchase_type_steam" ).attr( "checked" ) )
	{
		bAnyActiveFilters = true;
		$J( "#reviews_filter_purchase_type" ).show();
		$J( "#reviews_filter_purchase_type" ).text( 'Steam Purchasers' );
	}
	else if ( $J( "#purchase_type_non_steam" ).attr( "checked" ) )
	{
		bAnyActiveFilters = true;
		$J( "#reviews_filter_purchase_type" ).show();
		$J( "#reviews_filter_purchase_type" ).text( 'Not Purchased on Steam' );
	}
	else
	{
		$J( "#reviews_filter_purchase_type" ).hide();
	}

	// language
	if ( $J( "#review_language_mine" ).attr( "checked" ) )
	{
		bAnyActiveFilters = true;
		$J( "#reviews_filter_language" ).show();
		$J( "#reviews_filter_language" ).text( 'Your Languages' );
	}
	else if ( false )
	{
		bAnyActiveFilters = true;
		$J( "#reviews_filter_language" ).show();
		$J( "#reviews_filter_language" ).text( 'Simplified Chinese' );
	}
	else
	{
		$J( "#reviews_filter_language" ).hide();
	}

	// graph
	if ( $J( "#review_date_range_histogram" ).attr( "checked" ) )
	{
		bAnyActiveFilters = true;
		$J( "#reviews_filter_graph" ).show();
		$J( "#review_selected_histogram_date_range_prefix" ).text( 'View Only ' );
	}
	else if ( $J( "#review_date_range_exclude_histogram" ).attr( "checked" ) )
	{
		bAnyActiveFilters = true;
		$J( "#reviews_filter_graph" ).show();
		$J( "#review_selected_histogram_date_range_prefix" ).text( 'Exclude ' );
	}
	else
	{
		$J( "#reviews_filter_graph" ).hide();
	}
	
	// off-topic review activity
	if ( $J( "#user_reviews_offtopic_activity_menu" ).is( ":visible" ) && $J( "#reviews_offtopic_activity_checkbox" ).attr( "checked" ) )
	{
		bAnyActiveFilters = true;
		$J( "#reviews_filter_offtopic_activity" ).show();
	}
	else
	{
		$J( "#reviews_filter_offtopic_activity" ).hide();
	}

	var playtimeFilterMin = $J( "#app_reviews_playtime_range_min" ).val();
	var playtimeFilterMax = $J( "#app_reviews_playtime_range_max" ).val();

	if ( playtimeFilterMin != 0 || playtimeFilterMax != 0 )
	{
		var elemPlaytimeDesc = $J( "#review_playtime_preset_text" );
		if ( playtimeFilterMax == 0 )
		{
			if ( playtimeFilterMin == 1 )
			{
				elemPlaytimeDesc.text( 'Over 1 hour' );
			}
			else
			{
				elemPlaytimeDesc.text( 'Over %2$s hours'.replace( "%2$s", playtimeFilterMin ) );
			}
		}
		else
		{
			elemPlaytimeDesc.text( '%1$s hour(s) to %2$s hours'.replace( "%1$s", playtimeFilterMin ).replace( "%2$s", playtimeFilterMax ) );
		}

		bAnyActiveFilters = true;
		$J( "#reviews_filter_playtime" ).show();
	}
	else
	{
		$J( "#reviews_filter_playtime" ).hide();
	}

	$J( "#reviews_filter_title" ).toggle( bAnyActiveFilters );
}

function ShowFilteredReviews()
{
	UpdateActiveFilters();

	if ( $J( "#review_appid" ).length == 0 )
		return;

	var appid = $J( "#review_appid" ).val();
	var context = $J( "#review_context" ).val();
	var defaultDayRange = $J( "#review_default_day_range" ).val();
	var startDate = $J( "#review_start_date" ).val();
	var endDate = $J( "#review_end_date" ).val();
	SelectReviews( appid, context, defaultDayRange, startDate, endDate, true );
}

function ChangeReviewPurchaseTypeFilter()
{
	var purchaseType = $J('input[name="purchase_type"]:checked').val();
	V_SetCookie( "review_purchase_type_filter", purchaseType, purchaseType == 'all' ? 1 : 14, "app/" );
	ShowFilteredReviews();
}

function OnReviewPlaytimeFilterSliderChanged( hourMin, hourMax, maxHours )
{
	if ( hourMin == 0 && hourMax == maxHours )
	{
		$J('input[name="review_playtime_preset"][value="0"]').attr( 'checked', true );
	}
	else
	{
		$J('input[name="review_playtime_preset"]').attr( 'checked', false );
	}

	ShowFilteredReviews();
}

function SelectPlaytimeFilterPreset( playtimeMinHours )
{
	var maxHours = 100;
	var maxSeconds = maxHours * 60 * 60;

	$J("#app_reviews_playtime_slider").slider('values', 0, playtimeMinHours * 60 * 60 );
	$J("#app_reviews_playtime_slider").slider('values', 1, maxSeconds );

	UpdatePlaytimeFilterValues( playtimeMinHours, maxHours );

	ShowFilteredReviews();
}

function ChangedOfftopicReviewActivityFilter()
{
	ShowFilteredReviews();
}

function ClearOfftopicReviewActivityFilter()
{
	$J('#reviews_offtopic_activity_checkbox').attr( 'checked', false );
	ShowFilteredReviews();
}

function ClearReviewPlaytimeFilter()
{
	$J('#review_playtime_preset_0').attr( 'checked', true );
	SelectPlaytimeFilterPreset( 0 );
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

function UpdatePlaytimeFilterValues( hourMin, hourMax )
{
	var maxHours = 100;
	$J( "#app_reviews_playtime_range_min" ).val( hourMin );
	$J( "#app_reviews_playtime_range_max" ).val( hourMax == maxHours ? 0 : hourMax );

	var strHoursMinNumber = v_numberformat( hourMin, 0 );
	var strHourMin = hourMin > 0 ? '%1$s hour(s)'.replace( /%1\$s/g, strHoursMinNumber ) : 'No minimum';
	$J( "#app_reviews_playtime_range_text_min" ).text( strHourMin );

	var strHoursMaxNumber = v_numberformat( hourMax, 0 );
	var strHourMax = hourMax > 0 && hourMax != maxHours ? '%1$s hour(s)'.replace( /%1\$s/g, strHoursMaxNumber ) : 'No maximum';
	$J( "#app_reviews_playtime_range_text_max" ).text( strHourMax );
}

function InitPlaytimeFilterSlider()
{
	var maxHours = 100;
	var maxSeconds = maxHours * 60 * 60;
	$J( "#app_reviews_playtime_slider" ).slider({
		range: true,
		min: 0,
		max: maxSeconds,
		values: [0, maxSeconds],
		step: 3600,
		slide: function (event, ui) {
			var minSecs = ui.values[0];
			var maxSecs = ui.values[1];

			var hourMin = parseInt( minSecs / ( 60 * 60 ), 10 );
			var hourMax = parseInt( maxSecs / ( 60 * 60 ), 10 );

			UpdatePlaytimeFilterValues( hourMin, hourMax );
		},
		change: function( event, ui ) {
			if ( event.originalEvent )
			{
				var minSecs = ui.values[0];
				var maxSecs = ui.values[1];

				var hourMin = parseInt( minSecs / ( 60 * 60 ), 10 );
				var hourMax = parseInt( maxSecs / ( 60 * 60 ), 10 );

				OnReviewPlaytimeFilterSliderChanged( hourMin, hourMax, maxHours );
			}
		}
	});
}

//formerly app_reporting.js

var gReportedApp = false;
function ShowReportDialog( nAppId )
{
	if ( gReportedApp )
	{
		return;
	}

	var content = $J('<div/>', {'class': 'app_report_dialog' } );

	content.append( $J('<div/>', {'class': 'app_report_dialog_intro' } ).text('Please choose a reason why you are reporting this product.') );

		var rgReportOptions = {"1":"Fraud - <span class=\"sub\">This software fraudulently attempts to gather sensitive information, such as your Steam credentials or financial data (e.g. credit card information).<\/span>","2":"Harmful - <span class=\"sub\">This software modifies a customer's computer in unexpected or harmful ways (e.g. is malware or a virus)<\/span>","5":"Adult Content - <span class=\"sub\">Contains adult content that isn't appropriately labeled and age-gated<\/span>","6":"Defamatory - <span class=\"sub\">Contains Libelous or defamatory statements<\/span>","8":"Child Exploitation - <span class=\"sub\">Contains content that exploits children in any way<\/span>","11":"Legal Violation - <span class=\"sub\">Contains content that violates the laws in your jurisdiction<\/span>","13":"Broken - <span class=\"sub\">Does not download, launch, or run correctly, even on a machine that meets the minimum system requirements.<\/span>"};
	var rgReportOptionElements = [];
	for ( var eReportType in rgReportOptions )
	{
		var $ReportOption = $J('<div/>', {'class': 'app_report_dialog_option' } );
		$ReportOption.append( $J('<div/>', {'class': 'app_report_dialog_option_input' }).append( $J('<input/>', {'type': 'radio', 'name':'report_type', 'value': eReportType, 'id': 'report_type_' + eReportType } ) ) );
		$ReportOption.append( $J('<div/>', {'class': 'app_report_dialog_option_text' }).append( $J('<label/>', {'for': 'report_type_' + eReportType }).html( rgReportOptions[eReportType] ) ) );
		rgReportOptionElements.push( $ReportOption );
	}

	for ( var j, x, i = rgReportOptionElements.length; i; j = parseInt(Math.random() * i), x = rgReportOptionElements[--i], rgReportOptionElements[i] = rgReportOptionElements[j], rgReportOptionElements[j] = x );
	for ( var i = 0; i < rgReportOptionElements.length; ++i )
	{
		content.append( rgReportOptionElements[i] );
	}

	var textArea = $J('<textarea/>', { 'class': 'app_report_dialog_reason grey_bevel fullwidth', 'id' : 'ReportReason',  'name' : 'report_reason' } );
	var maxReasonLength = 512;
	textArea.attr( 'maxlength', maxReasonLength );
	textArea.bind( "keyup change",
		function()
		{
			var str = $J(this).val()
			var mx = parseInt($J(this).attr('maxlength'))
			if (str.length > mx)
			{
				$J(this).val(str.substr(0, mx))
				return false;
			}
		}
	);
	content.append( $J('<div/>', {'class': 'app_report_dialog_intro' } ).text('You may enter additional information that you feel is relevant here:') );
	content.append( textArea );

	content.append( $J('<div/>', {'class': 'app_report_dialog_dmca' } ).html('If you\'d like to report Copyright Infringement and are the copyright holder, please proceed to our DMCA compliant notice of copyright infringement form <a href="https://steamcommunity.com/dmca/create/">here</a>.') );

	var dialog = ShowConfirmDialog( 'Report this Product', content, 'Report');

	dialog.done( function() {
		var eReportTypeSelected = content.find( 'input[type=radio]:checked' ).val();
		if ( eReportTypeSelected )
		{
			$J.post(
				'https://store.steampowered.com/appreport/' + nAppId + '/report/',
				{
					'report_type' : eReportTypeSelected,
					'report_reason' : content.find( 'textarea' ).val(),
					'sessionid': g_sessionID
				}
			).done( function( json ) {
					gReportedApp = true;
					$J( "#ReportAppBtn").addClass( 'btn_active' );
				}
			).fail( function( jqXHR ) {
					var json = jqXHR.responseText.evalJSON();
					if ( json.success == 29 )
					{
						ShowAlertDialog( 'Error', 'You have already reported this product!' );
						gReportedApp = true;
						$J( "#ReportAppBtn").addClass( 'btn_active' );
					}
					else
					{
						ShowAlertDialog( 'Error', 'There was a problem saving your report.  Please try again later.' );
					}

				} );
		}
		else
		{
			ShowAlertDialog( 'Error', 'You must select a reason you are reporting this product!' );
		}
	});
}

function ShowGotSteamModal( strSteamURL, strAppName, strPlayLaunchVerb )
{
		var $ModalContent = $J("<div class=\"gotsteamModal\">\r\n\t<div class=\"got_steam_ctn\">\r\n\t<div class=\"got_steam_box\">\r\n\t\t<h1>Got Steam?<\/h1>\r\n\t\t<p>You need to have the <a href=\"https:\/\/store.steampowered.com\/about\/\">Steam desktop application<\/a> installed before you can install and launch <strong class=\"gotSteam_AppName\"><\/strong>. Do you have Steam installed on this computer?<\/p>\r\n\t\t<div class=\"gotsteam_buttons\">\r\n\t\t\t<a class=\"gotSteam_SteamURL btn_blue leftbtn\" href=\"\">\r\n\t\t\t\t<h3>Yes, Steam is installed<\/h3>\r\n\t\t\t\t<h5 class=\"gotsteam_action\"><\/h5>\r\n\t\t\t<\/a>\r\n\t\t\t<a href=\"https:\/\/store.steampowered.com\/about\/\" class=\"btn_blue\">\r\n\t\t\t\t<h3>No, I need Steam<\/h3>\r\n\t\t\t\t<h5>Read about and download Steam<\/h5>\r\n\t\t\t<\/a>\r\n\t\t\t<div style=\"clear: left;\"><\/div>\r\n\t\t<\/div>\r\n\t\t<div class=\"got_steam_low_block\">\r\n\t\t\t<div class=\"gotsteam_steam_ico\"><img src=\"https:\/\/store.cloudflare.steamstatic.com\/public\/images\/v6\/steam_ico.png\" width=\"40\" height=\"40\" border=\"0\" \/><\/div>\r\n\t\t\tSteam is the premiere desktop gaming platform. It's free to join and easy to use. <a href=\"https:\/\/store.steampowered.com\/about\/\">Learn more about Steam.<\/a>\r\n\t\t<\/div><\/div>\r\n\t<\/div>\r\n<\/div>");
	$ModalContent.find('.gotSteam_AppName').text( strAppName );
	$ModalContent.find('.gotsteam_action').text( strPlayLaunchVerb );
	$ModalContent.find( '.gotSteam_SteamURL').attr( 'href', strSteamURL );
	var Modal = new CModal( $ModalContent );
	Modal.Show();
	//ShowDialog( 'Got Steam?', $ModalContent );
}

function ChangeSeason( el, season )
{
	// switch active season indicator
	$J( '.series_seasons .season_selector .season_name' ).removeClass( 'active' );
	$J( el ).addClass( 'active' );
	
	// switch which episodes are shown
	$J( '.season_episode_list_wrapper .season_episode_list' ).removeClass( 'active' );
	$J( '.season_episode_list_wrapper .season_episode_list[data-season="' + season + '"]' ).addClass( 'active' );

	// load the images
	$J( '.season_episode_list.active .episode_image_col img').each( function( index, value )
	{
		$J( this ).attr( 'src', $J( this ).data( 'src' ) );
	});
}

function ShowRecommendedMoreInfoModal()
{
	var strTemplate = "<div class=\"recommended_more_info_modal\">\r\n\t\t\t\t\t\t\t\t<p class=\"intro\">You've found something that doesn't look like other things you've used in the past. Steam will learn about your preferences from the games you play, movies you watch, and software you use on Steam. We will use this activity to tailor your recommendations to your tastes.<\/p>\r\n\t\t\t\t\t\t\t\t<h2>Like this item?<\/h2>\r\n\t\t\t\t\t\t\t\t<p>If you like this item and go on to purchase and play it, we'll take that into account when making future recommendations<\/p>\r\n\t\t\t\t\t\t\t\t<h2>Not interested in things like this?<\/h2>\r\n\t\t\t\t\t\t\t\t<p>You can also configure your store preferences to tell Steam about tags or types of products that you aren't interested in. <a href=\"https:\/\/store.steampowered.com\/account\/preferences\/\">Visit store preferences<\/a>.<\/p>\r\n\t\t\t\t\t\t\t<\/div>";
	ShowAlertDialog( "More about recommendations", strTemplate);

}

function CollapseLongStrings( strSelector )
{

	$J(strSelector).each(function(i, j){
		var $target = $J(j);
		if( j.scrollWidth >  $target.innerWidth() )
		{
			//$target.css({ 'overflow': 'hidden', 'white-space': 'nowrap', 'text-overflow': 'ellipsis' });
			var elMoreBtn = document.createElement('div');

			elMoreBtn.classList.add('more_btn');
			elMoreBtn.textContent = '+';
			elMoreBtn.addEventListener('click', function($target, elButton, event){

				$target.css({'overflow': 'visible', 'white-space': 'normal'});
				elButton.remove();

			}.bind(null, $target, elMoreBtn ));

			j.parentNode.appendChild(elMoreBtn);
		}
	})
}

function JSReportProductAction( appId, pageAction, snr )
{
	$J.post( 'https://store.steampowered.com//ajaxreportproductaction/' + appId + '/', {
			'page_action' : pageAction,
			'snr' : snr
		}
	);
}

function ToggleBannerContentVisibility( divContentID, divIconID )
{
	var $element = $J( divContentID );
	if ( $element !== null )
	{
		$element.is(':visible') ? $element.hide('fast') : $element.show('fast');
	}

	var $icon = $J( divIconID )
	if ( $icon !== null )
	{
		$icon.toggleClass('expanded');
	}
};

// The review detail section is simplified for mobile screens
// which requires some section moves here, and formatting changes in .css 
function ReparentReviewsForSmallScreens()
{
	var bSupportTabletMode = window.SupportTabletScreenMode && window.SupportTabletScreenMode(); 
	var fn_reparent = bSupportTabletMode ? Responsive_ReparentItemsInResponsiveMode : Responsive_ReparentItemsInMobileMode;

	var $MoveReviewSections = $J('.user_reviews_container');
	$MoveReviewSections.each( function() {

		// move content within each review detail section for small screen layout
		var $SummarySection = $J(this).find('[id^="ReviewContent"]');
		$SummarySection.each( function() {

			var $LeftColContent = $J(this).find('.leftcol');
			var $NewLeftLocation = $J(this).find('.responsive_review_leftcol_ctn');
			var $ReviewAwardCtn = $J(this).find('.review_award_ctn');
			var $NewAwardLocation = $J(this).find('.rightcol');

			// if we don't have the required destination containers bail (this shouldn't happen)
			if ( $NewLeftLocation.length == 0 || $NewAwardLocation.length == 0 )
				return;

			fn_reparent( '#' + $LeftColContent.attr('id'), $J( '#' + $NewLeftLocation.attr('id') ) );
			fn_reparent( '#' + $ReviewAwardCtn.attr('id'), $J( '#' + $NewAwardLocation.attr('id') ) );
		} );
	} );
}

// Share dialog calls this to copy the store page link to the clipboard
function ShareDialogCopyToClipboard()
{
	// select the text and copy to clipboard
	var $res = false;
	var $linkText = document.getElementById('shareDialogLinkStoreLink');
	if ( $linkText )
	{
		// using .select() instead causes the copy command to fail on iOS 12
		$linkText.setSelectionRange(0, $linkText.value.length);
		$res = document.execCommand( "copy" );
	}

	// report the result
	$J('#shareDialogResult').text( $res ? 'Store link copied to the clipboard' : 'Failed copying store link to the clipboard');

	// clear the selection
	document.getSelection().removeAllRanges();
}

// applies layout changes for mobile and tablet screen sizes
function ReparentAppLandingPageForSmallScreens()
{
	// copy the review summary content to the review details section
	// CSS will set when to make these visible
	var $appReviewsAll = $J('#appReviewsAll_responsive').clone();
	$appReviewsAll.attr( 'id', 'appReviewsAll_Detail' );
	$appReviewsAll.css( 'display', 'none' );
	$appReviewsAll.appendTo('.reviews_info_ctn');
	var $appReviewsRecent = $J('#appReviewsRecent_responsive').clone();
	$appReviewsRecent.attr( 'id', 'appReviewsRecent_Detail' );
	$appReviewsRecent.css( 'display', 'none' );
	$appReviewsRecent.appendTo('.reviews_info_ctn');

	// on iOS use the iOS share icon.  the default is Android.
	if ( navigator.userAgent.toLowerCase().indexOf( 'iphone' ) != -1 )
	{
		$J('#shareImg').attr('src', 'https://store.cloudflare.steamstatic.com/public/shared/images/icon_share_ios.svg' );
	}

	var bSupportTabletMode = window.SupportTabletScreenMode && window.SupportTabletScreenMode();

	ReparentPurchaseOptionsForTablet( '#purchaseOptionsContent' );

		var fn_reparent = bSupportTabletMode ? Responsive_ReparentItemsInResponsiveMode : Responsive_ReparentItemsInMobileMode;

	// move purchase options into a new container for responsive UX
	fn_reparent( '.early_access_header', $J('#purchaseOptionsContent') );
	fn_reparent( '#game_area_purchase', $J('#purchaseOptionsContent') );

	// order the action buttons
	fn_reparent( '#shareBtn', $J('#rowBtnActions') );
	fn_reparent( '#reportBtn', $J('#rowBtnActions') );
	fn_reparent( '#queueBtnFollow', $J('#rowBtnActions') );
	fn_reparent( '#ignoreBtn', $J('#rowBtnActions') );
	fn_reparent( '#rowBtnActions', $J('#queueActionsCtn') );
			
	// place discovery queue below the action buttons
	fn_reparent( '#nextInDiscoveryQueue', $J('#queueCtn') );

	// place banners and game details into the links and info section
	fn_reparent( '#bannerAchievements', $J( '#appLinksAndInfo' ) );
	fn_reparent( '#bannerPointsShop', $J( '#appLinksAndInfo' ) );
	fn_reparent( '#bannerItemStore', $J( '#appLinksAndInfo' ) );
	fn_reparent( '#bannerCommunity', $J( '#appLinksAndInfo' ) );
	fn_reparent( '#appDetailsUnderlinedLinks', $J( '#appLinksAndInfo' ) );

	// place the active review filter list in the review details section
	fn_reparent( '#reviews_active_filters', $J('.reviews_info_ctn') );

	// populate the reviews settings popup
	fn_reparent( '#review_histograms_container', $J( '#reviewSettingsPopupContent' ) );
	fn_reparent( '#reviews_filter_options', $J( '#reviewSettingsPopupContent' ) );

	// move some of the links and info content to the bottom 
	// testing this - we may need to move this again  
	fn_reparent( '#genresAndManufacturer', $J( '#appLinksAndInfo' ) );

	// the window resize message handler is for layout adjustements that require more logic than reparenting based on screen size
	var defaultShareFlex = $J('#shareBtn').css('flex-grow');
	var defaultFollowFlex = $J('#queueBtnFollow').css('flex-grow');
	var defaultReportFlex = $J('#reportBtn').css('flex-grow');
	var defaultLanguageTableDisplay = $J('#languageTable').css('display');

	var msgWatch = bSupportTabletMode ? 'Responsive_SmallScreenModeToggled' : 'Responsive_MobileScreenModeToggled';
	$J(window).on( msgWatch, function() {

		var bUseNewUX = ( bSupportTabletMode && window.UseSmallScreenMode && window.UseSmallScreenMode() ) || 
			( window.UseMobileScreenMode && window.UseMobileScreenMode() );

		// if one of the wishlist buttons are visible make the action buttons flex grow so the two rows of buttons match width.
		if ( bUseNewUX && ( $J('#add_to_wishlist_area').is(':visible') 
			|| $J('#add_to_wishlist_area_success').is(':visible') 
			|| $J('#add_to_wishlist_area_fail').is(':visible') ) )
		{
			$J('#shareBtn').css('flex-grow', '1');
			$J('#queueBtnFollow').css('flex-grow', '1');
			$J('#reportBtn').css('flex-grow', '1'); 
		}
		else
		{
			$J('#shareBtn').css('flex-grow', defaultShareFlex);
			$J('#queueBtnFollow').css('flex-grow', defaultFollowFlex);
			$J('#reportBtn').css('flex-grow', defaultReportFlex);
		}

		// if we're in a small screen layout reveal all language options within the languageTable
		// don't bother trying to re-hide these if the user later resizes outside small screen
		if ( bUseNewUX )
		{
			var $LanguageOptions = $J('#languageTable').find('tr');
			$LanguageOptions.each( function() {
				$J(this).css('display','');
			} );

			// hide the 'see all X languages" link since all languages are now visible
			$J('#languageTable').find('.all_languages').css('display', 'none');
		}

		// hide the language table on small screens since a banner is clicked to reveal it
		// 
		// putting a display:none in CSS for small screen sizes doesn't work well because the 
		// CSS values don't override the display state set by the language banner click handler 
		$J('#languageTable').css('display', bUseNewUX ? 'none' : defaultLanguageTableDisplay );
	});
	$J(window).trigger( msgWatch );
}

function ReparentPurchaseOptionsForTablet( idPurchaseOptions )
{
	// tablet mode has its own purchase options container (shown on right side of screen)
	if ( window.SupportTabletScreenMode && window.SupportTabletScreenMode() )
	{
		Responsive_ReparentItemsInTabletMode( idPurchaseOptions, $J('#purchaseOptionsContentTablet') );

		var $purchaseContentHeight = parseInt( window.innerHeight ) - parseInt( GetResponsiveHeaderFixedOffsetAdjustment() );
		$J('#purchaseOptionsContentTablet').css('height', $purchaseContentHeight + 'px');
		$J('#purchaseOptionsContentTablet').css('top', parseInt( GetResponsiveHeaderFixedOffsetAdjustment() ) + 'px' );
		$J('#purchaseOptionsContentTablet').css('scrollTop', 0);
	}
}


// Popup for customers to optin/out of the new mobile UX 
var g_newMobileUXPopup = null;
function ShowUseNewMobileUXPopup()
{
	var $ModalContent = $J('#popupNewMobileUX');
	if ( 0 == $ModalContent.length )
		return;

	g_newMobileUXPopup = new CModal( $ModalContent );
	g_newMobileUXPopup.Show();
}

// check if customer selection for viewing the new mobile UX has changed
function OnNewMobileUXPopupClosed()
{
	if ( typeof g_newMobileUXPopup !== 'undefined' )
		g_newMobileUXPopup.Dismiss();
}

// called by Mobile UX to show a settings dialog with Review filters
var g_reviewSettingsPopup = null;
function ShowReviewSettingsModal()
{
	// bail if we can't find the popup content, or it's not populated
	var $ModalContent = $J('#reviewSettingsPopupCtn');
	if ( 0 == $ModalContent.length || 0 == $ModalContent.find('#reviews_filter_options').length )
	{
		return;
	}

	g_reviewSettingsPopup = new CModal( $ModalContent );
	g_reviewSettingsPopup.Show();
}
function CloseReviewSettingsModal()
{
	if ( typeof g_reviewSettingsPopup !== 'undefined' )
		g_reviewSettingsPopup.Dismiss();
}

function BindFocusVideoOnTablet()
{
    $J( '.highlight_movie' ).on( "focusin", function( event ) {
    	this.play();
    } );

    $J( '.highlight_movie' ).on( "vgp_onok, click", function( event ) {
		if (!document.fullscreenElement )
		{
			this.requestFullscreen();
			this.play();
		} else if ( document.exitFullscreen )
		{
			document.exitFullscreen();
		}
    } );

    $J( '.highlight_movie' ).on( "focusout", function( event ) {
		this.pause();
    } );
}

