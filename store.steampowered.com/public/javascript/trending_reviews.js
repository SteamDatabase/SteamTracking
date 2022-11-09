
var gCurrentRequest = null;
var gMaxHours = 100;
var gAppearanceTracker = false;

function SetAdvancedControlsVisibility( bShow )
{
	if ( bShow )
	{
		$J( "#ReviewControls" ).addClass( "show_advanced_controls" );
	}
	else
	{
		$J( "#ReviewControls" ).removeClass( "show_advanced_controls" );
	}
}

function UpdatePlaytimeSlider( minValue, maxValue )
{
	$J("#app_reviews_playtime_slider").slider('values', 0, minValue );
	$J("#app_reviews_playtime_slider").slider('values', 1, maxValue );
}

function SelectPlaytimeFilter( bCustomRange, playtimeMinHours, playtimeMaxHours )
{
	var playtimeFilterControls = $J( "#PlaytimeFilterControls" );
	if ( bCustomRange )
	{
		playtimeFilterControls.addClass( "custom_range" );
		return;
	}

	playtimeFilterControls.removeClass( "custom_range" );

	var maxHours = playtimeMaxHours || gMaxHours;
	var maxSeconds = maxHours * 60 * 60;

	UpdatePlaytimeSlider( playtimeMinHours * 60 * 60, maxSeconds );

	UpdatePlaytimeFilterValues( playtimeMinHours, maxHours );

	GetRecentReviews();
}

function UpdatePlaytimeFilterValues( hourMin, hourMax )
{
	var maxHours = gMaxHours;
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
	var maxHours = gMaxHours;
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

				GetRecentReviews();
			}
		}
	});
}

function SelectReviewFromIndex( appContainer, reviewIdx )
{
	var relatedReview = $J( "#Review" + appContainer.data( 'recommendationid_' + reviewIdx ) );
	relatedReview.siblings().removeClass( "focus" );
	relatedReview.addClass( "focus" );

	appContainer.data( "currentreviewidx", reviewIdx );
}

function SavePreferences()
{
	var playtimeFilterMin = $J( "#app_reviews_playtime_range_min" ).val();
	var playtimeFilterMax = $J( "#app_reviews_playtime_range_max" ).val();
	var reviewFilter = $J( "input[name=review_type_filter]:checked" ).val();
	var languageFilter = $J( "input[name=review_language]:checked" ).val();
	var bHideOwnedGames = $J( "#HideOwnedGamesCheckbox").prop( "checked" ) ? 1 : 0;
	var bHideWishlistedGames = $J( "#HideWishlistedGamesCheckbox").prop( "checked" ) ? 1 : 0;

	var rgTagFilters = [];
	$J('#tag_filters > .tag_filter').each(function(i, ele){
		rgTagFilters.push( $J( ele ).data( "tagid" ) );
	});

	var rgTagExclusions = [];
	$J('#tag_exclusions > .tag_filter').each(function(i, ele){
		rgTagExclusions.push( $J( ele ).data( "tagid" ) );
	});

	var rgParams = {
		review_filter: reviewFilter,
		playtime_filter_min : playtimeFilterMin,
		playtime_filter_max : playtimeFilterMax,
		tag_filters: rgTagFilters,
		tag_exclusions: rgTagExclusions,
		hide_owned_games: bHideOwnedGames,
		hide_wishlisted_games: bHideWishlistedGames,
		review_language : languageFilter,
		sessionid : g_sessionID
	};

	$J.post(
		'https://store.steampowered.com/store/communityrecommendations/ajaxsavetrendingreviewspreferences/',
		rgParams
	).done( function( data ) {
		if ( data.success == 1 )
		{
			$J( "#preferences_last_saved" ).html( data.preferences_last_updated );
			$J( "#using_preferences" ).hide();
		}
		else
		{
			ShowAlertDialog( 'Error', 'There was a problem trying to save your preferences: %1$s.'.replace( '%1$s', data.success ) );
		}
	} );
}

function GetRecentReviews( bTreatAsFirstTimeLoad )
{
	if ( gCurrentRequest )
	{
		gCurrentRequest.abort();
	}

	var container = $J( "#reviewed_apps" );
	container.empty();
	gAppearanceTracker.ClearElements();

	$J( "#LoadingThrobber" ).addClass( "visible" );
	$J( "#NoMatchingReviews" ).removeClass( "visible" );

	var playtimeFilterMin = $J( "#app_reviews_playtime_range_min" ).val();
	var playtimeFilterMax = $J( "#app_reviews_playtime_range_max" ).val();
	var reviewFilter = $J( "input[name=review_type_filter]:checked" ).val();
	var languageFilter = $J( "input[name=review_language]:checked" ).val();
	var bHideOwnedGames = $J( "#HideOwnedGamesCheckbox").prop( "checked" ) ? 1 : 0;
	var bHideWishlistedGames = $J( "#HideWishlistedGamesCheckbox").prop( "checked" ) ? 1 : 0;

	var rgTagFilters = [];
	$J('#tag_filters > .tag_filter').each(function(i, ele){
		rgTagFilters.push( $J( ele ).data( "tagid" ) );
	});

	var rgTagExclusions = [];
	$J('#tag_exclusions > .tag_filter').each(function(i, ele){
		rgTagExclusions.push( $J( ele ).data( "tagid" ) );
	});

	var rgParams = {
		review_filter: reviewFilter,
		playtime_filter_min : playtimeFilterMin,
		playtime_filter_max : playtimeFilterMax,
		tag_filters: rgTagFilters,
		tag_exclusions: rgTagExclusions,
		hide_owned_games: bHideOwnedGames,
		hide_wishlisted_games: bHideWishlistedGames,
		review_language : languageFilter,
			};

	if ( !bTreatAsFirstTimeLoad && window.history && window.history.replaceState )
	{
		var strNewURL = 'https://store.steampowered.com/store/communityrecommendations/trendingreviews/?' + $J.param( rgParams );
		window.history.pushState( null, null, strNewURL );
	}

	gCurrentRequest = $J.get(
		'https://store.steampowered.com/store/communityrecommendations/ajaxgetrecentreviews',
		rgParams
	)
	.done( function( data ) {
		var container = $J( "#reviewed_apps" );

		var newContent = $J( data.html );

		var reviewElements = $J( newContent ).find( "div.review_box" );
		var numReviewsAdded = 0;

		for ( var i = 0; i < reviewElements.length; ++i )
		{
			var review = $J( reviewElements[i] );

			var appid = review.data( 'appid' );

			if ( GDynamicStore.BIsAppIgnored(appid) )
			{
				continue;
			}

			if ( bHideOwnedGames && GDynamicStore.BIsAppOwned( appid, false ) )
			{
				continue;
			}

			if ( bHideWishlistedGames && GDynamicStore.BIsAppOnWishlist( appid ) )
			{
				continue;
			}

			var bNewApp = false;
			let appContainer = $J( "#App" + appid );
			if ( appContainer.length == 0 )
			{
				appContainer = $J( newContent ).find( "#App" + appid );
				if ( appContainer.length == 0 )
				{
					continue;
				}
				appContainer = $J( appContainer[0] );
				container.append( appContainer );
				gAppearanceTracker.RegisterElement( appContainer[0] )

				GDynamicStore.DecorateDynamicItems( appContainer );

				var arrowLeft = appContainer.find( ".arrow.left" );
				var arrowRight = appContainer.find( ".arrow.right" );

				let pagingThumbs = appContainer.find( ".paging_thumbs" );
				let numReviewsElem = pagingThumbs.find( ".num_reviews_desc" );

				arrowLeft.click( function() {
					var numReviews = appContainer.data( "numreviews" );
					var curIdx = appContainer.data( "currentreviewidx" );
					curIdx = ( curIdx + numReviews - 1 ) % numReviews;
					var strNumReviews = '%1$s of %2$s reviews'.replace( "%1$s", curIdx + 1 ).replace( "%2$s", numReviews );
					numReviewsElem.text( strNumReviews );

					SelectReviewFromIndex( appContainer, curIdx );
				});

				arrowRight.click( function() {
					var numReviews = appContainer.data( "numreviews" );
					var curIdx = appContainer.data( "currentreviewidx" );
					curIdx = ( curIdx + 1 ) % numReviews;
					var strNumReviews = '%1$s of %2$s reviews'.replace( "%1$s", curIdx + 1 ).replace( "%2$s", numReviews );
					numReviewsElem.text( strNumReviews );

					SelectReviewFromIndex( appContainer, curIdx );
				});

				let videoElem = appContainer.find( ".microtrailer_video" );
				if ( videoElem.length != 0 )
				{
					videoElem.on( "canplay", function() {
						appContainer.addClass( "has_microtrailer" );
					} );
					videoElem.on( "playing", function() {
						appContainer.addClass( "has_microtrailer" );
					} );

					appContainer.hover(
						function () {
							videoElem[0].play();
						},

						function () {
							videoElem[0].pause();
						}
					);
				}

				bNewApp = true;
			}

			var reviewsContainer = appContainer.find( "div.reviews" );
			reviewsContainer.append( review );
			++numReviewsAdded;

			var numReviews = appContainer.data( "numreviews" );
			appContainer.data( 'recommendationid_' + numReviews, review.data( 'recommendationid' ) );
			++numReviews;
			appContainer.data( "numreviews", numReviews );

			var pagingThumbs = appContainer.find( ".paging_thumbs" );
			if ( !bNewApp )
			{
				appContainer.addClass( "has_multiple_reviews" );
				var numReviewsElem = pagingThumbs.find( ".num_reviews_desc" );
				var strNumReviews = '%1$s of %2$s reviews'.replace( "%1$s", 1 ).replace( "%2$s", numReviews );
				numReviewsElem.text( strNumReviews );
			}
			else
			{
				review.addClass( "focus" );
			}
		}

		if ( numReviewsAdded > 0 )
		{
			$J( "#NoMatchingReviews" ).removeClass( "visible" );
		}
		else
		{
			$J( "#NoMatchingReviews" ).addClass( "visible" );
		}

		gCurrentRequest = null;

		setTimeout( function()
		{
			$J( "#LoadingThrobber" ).removeClass( "visible" );

			gAppearanceTracker.CheckVisibility();

			$J.find( "div.reviewed_app" ).each( function ( elem )
			{
				$J( elem ).addClass( "visible" );
			} );
		}, 1 );

	} )
	.fail( function( jqHXR ) {
		if ( jqHXR.statusText != 'abort' )
		{
			gCurrentRequest = null;
			$J( "#LoadingThrobber" ).removeClass( "visible" );

			ShowAlertDialog( 'Oops, an error has occurred', 'An error has occurred. Please try again later.' );
		}
	});
}

function AddTagButton( $elTarget, tagid, strTagName )
{
	var $elTagText = $J('<div/>', { 'text': strTagName } );
	var $elTagInner = $J('<div/>' );
	$elTagInner.append( $elTagText );
	var $elTag = $J('<div/>').addClass('tag_filter').append( $elTagInner );
	$elTag.data( "tagid", tagid );
	var $elRemoveButton = $J('<span>').click(function(){
		$elTag.remove();
		GetRecentReviews();
	});

	$elTagInner.append($elRemoveButton);

	$elTarget.append( $elTag );
}

function AddTag( $elTarget, strTagName )
{
	var tagid = 0;
	for ( var i = 0; i < g_rgGlobalPopularTags.length; ++i )
	{
		var tag = g_rgGlobalPopularTags[i];
		if ( strTagName == tag.name )
		{
			tagid = tag.tagid;
			break;
		}
	}

	if ( tagid == 0 )
	{
		return;
	}

	AddTagButton( $elTarget, tagid, strTagName );

	GetRecentReviews();
}

function PromptUserToLogin( strLoginURL )
{
	var dialog = ShowConfirmDialog( 'Please log in to continue', 'You need to log in first before before you can filter this view by your owned or wishlisted games.' );
	dialog.done( function() {
		top.location.href = strLoginURL;
	} );
}

function PromptUserToLoginToSavePreferences( strLoginURL )
{
	var dialog = ShowConfirmDialog( 'Please log in to continue', 'You need to log in first before before you can save these settings as your default preferences.' );
	dialog.done( function() {
		top.location.href = strLoginURL;
	} );
}

$J( function() {
	gAppearanceTracker = new CAppearMonitor(
		function( elElement )
		{
			elElement = $J( elElement );
			if ( elElement.hasClass( "appeared" ) )
			{
				return;
			}

			elElement.addClass( "appeared" );


			var smallImage = elElement.find( "img.reviewed_app_small_image" );
			if ( smallImage.length != 0 )
			{
				smallImage.attr( "src", smallImage.data( "src" ) );
			}

			var videoElem = elElement.find( "video.microtrailer_video" );
			if ( videoElem.length != 0 )
			{
				var webm = videoElem.data( 'webm' );
				var mpeg4 = videoElem.data( 'mpeg4' );

				if ( webm && webm.length != 0 )
				{
					videoElem.append( $J( '<source>', { src: webm } ) );
				}
				if ( mpeg4 && mpeg4.length != 0 )
				{
					videoElem.append( $J( '<source>', { src: mpeg4 } ) );
				}
			}
		},
		true
	);
} );

