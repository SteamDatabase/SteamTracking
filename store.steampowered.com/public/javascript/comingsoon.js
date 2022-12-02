




function ScrollWithinParentWrapper( elemID, params ) {
	//customizable variables
	/* used too offset the window min and max for processing the scroll */
	this.threshold_offset = 100;
	/* the element to scroll */
	this.$container = $J( elemID );
	/* the element's container (which its to scroll within) */
	this.$main = this.$container.parent();
	//leave these ones.
	this.window_min = 0;
	this.window_max = 0;

	var _this = this;

	$J(window).on( 'scroll.ScrollWithinParentWrapper hashchange.ScrollWithinParentWrapper', function() { _this.handleScroll() } );
	$J(window).on( 'resize.ScrollWithinParentWrapper', function() { _this.handleScroll(); } );

	this.setLimits();
	this.containerMove();
}

ScrollWithinParentWrapper.prototype.setLimits = function() {
	//max and min container movements
	var max_move = this.$main.offset().top + this.$main.height() - this.$container.height() - 2*parseInt(this.$container.css("top") );
	var min_move = this.$main.offset().top;

	//save them
	this.$container.attr("data-min", min_move).attr("data-max",max_move);

	//window thresholds so the movement isn't called when its not needed!
	//you may wish to adjust the freshhold offset
	this.window_min = min_move - this.threshold_offset;
	this.window_max = max_move + this.$container.height() + this.threshold_offset;
}

ScrollWithinParentWrapper.prototype.handleScroll = function() {
	var $window = $J(window);
	//if the window is within the threshold, begin movements
	if( $window.scrollTop() >= this.window_min && $window.scrollTop() < this.window_max ){
		//window scroll is within range
		//reset the limits (optional)
		this.setLimits();
		//move the container
		this.containerMove();
	}
}

/**
 * Handles moving the container if needed.
 **/
ScrollWithinParentWrapper.prototype.containerMove = function() {
	var $window = $J(window);
	var wst = $window.scrollTop();

	//if the window scroll is within the min and max (the container will be "sticky"
	if ( wst >= this.$container.attr("data-min") && wst<= this.$container.attr("data-max") ){

		//work out the margin offset
		var margin_top = $window.scrollTop() - this.$container.attr("data-min");

		//margin it down!
		this.$container.css("margin-top", margin_top);

		//if the window scroll is below the minimum
	} else if ( wst <= this.$container.attr("data-min") ){

		//fix the container to the top.
		this.$container.css("margin-top",0);

		//if the window scroll is above the maximum
	} else if ( wst > this.$container.attr("data-max") ){

		//fix the container to the top
		this.$container.css("margin-top", this.$container.attr("data-max")-this.$container.attr("data-min")+"px" );

	}
}

function FilterTabs()
{
	var rgTabSections =  ['#tab_popular_comingsoon_content', '#tab_all_comingsoon_content'];

	for( var i=0; i<rgTabSections.length; i++)
	{
		var $elTabSection = $J( rgTabSections[i] );

		GDynamicStorePage.FilterCapsules( 16, 16, $elTabSection.children( '.tab_item' ), $elTabSection, { games_already_in_library: false, only_current_platform: true, prepurchase: true } )
	}
}

function InitTabPreview()
{
	var $elTarget = $J('#tab_preview_container');

	$J('.tab_item').each(function(i, j){
		var $el = $J(j);
		var unAppId = $el.data('ds-appid');

		if( unAppId && unAppId.toString().indexOf(',') !== -1 )
			unAppId = unAppId.split(',')[0];

		if( unAppId && GStoreItemData.rgAppData[ unAppId ] )
		{
			var rgData = GStoreItemData.rgAppData[ unAppId ];

			var $elInfoDiv = $J('<div>',{'class': 'tab_preview'});

			$elInfoDiv.append($J('<h2>').html( rgData.name ));

			if ( rgData['review_summary'] )
			{
				var reviewSummary = rgData['review_summary'];
				var $elReviewData = $J('<div>', {'class': 'tab_review_summary', "data-tooltip-html": reviewSummary['sReviewScoreTooltip'] } );
				$elReviewData.append( $J('<div>', {'class': 'title'}).text('Overall user reviews:') );
				$elReviewData.append( $J('<span>', {'class': 'game_review_summary ' + reviewSummary['sReviewSummaryClass']}).text(reviewSummary['reviewSummaryDesc']) );
				if ( reviewSummary['reviewScore'] > 0 )
				{
					$elReviewData.append( $J('<span>').html('&nbsp;(' + v_numberformat( reviewSummary['cReviews'] ) + ')') );
				}

				$elInfoDiv.append( $elReviewData );
			}

			if( rgData.tags )
			{
				var $elTagContainer = $J('<div>',{'class': 'tags'});

				for( var i=0; i<rgData.tags.length; i++)
				{
					var url = GStoreItemData.AddNavEventParamsToURL( 'https://store.steampowered.com/store/tags/en/TAGNAME/'.replace( /TAGNAME/, encodeURIComponent( rgData.tags[i] ) ), 'tab-preview' );
					$elTagContainer.append($J('<a>').attr('href',url).text( rgData.tags[i] ));
				}
				$elInfoDiv.append($elTagContainer);
			}

			if( rgData.screenshots && rgData.screenshots.length > 0 )
			{
				for( var i=0; i < rgData.screenshots.length && i < 4; i++ )
				{
					var $elScreenshot = $J('<div>', {'class': 'screenshot'}).attr( 'data-background-image-url', GetScreenshotURL( unAppId, rgData.screenshots[i].filename, '.600x338' ) );
					$elInfoDiv.append($elScreenshot);
				}
			}
			else
			{
				for( var i=0; i < 4; i++ )
				{
					var $elScreenshot = $J('<div>', {'class': 'screenshot empty'}).append("<div>").text("This screenshot may contain mature content.");
					$elInfoDiv.append($elScreenshot);
				}
			}

			$elTarget.append($elInfoDiv);

			$el.on('hover', function(){
				$J('.tab_preview', $elTarget).each(function(i, j){ $J(j).removeClass('focus') });
				$J('.tab_item.focus').each(function(i, j){ $J(j).removeClass('focus') });

				PreloadImages( $elInfoDiv );
				$el.addClass('focus');
				$elInfoDiv.addClass('focus');
			});
		}
	});

	$J('.tab_item:visible').first().trigger('mouseenter');
}

function InitFollowedCreators( rgAppCreatorRelationships )
{
	$J.each($J('.followedcreator .bucket_contents').children(), function (i, j)
	{
		var $ele = $J(j);
		var nAppId = $ele.data('ds-appid');

		if ( rgAppCreatorRelationships.hasOwnProperty( nAppId ) )
		{
			var relationships = rgAppCreatorRelationships[nAppId];
			var creatorRelationship = GDynamicStore.GetMatchingCreatorFollowed( relationships );
			if ( creatorRelationship )
			{
				var curator = GDynamicStore.GetCurator( creatorRelationship.clanid );
				if ( curator )
				{
					var $Curators = $J('<div/>', {'class': 'curated_app_curators'} );
					var clanID = creatorRelationship.clanid;

					{
						var curator = GDynamicStore.GetCurator( clanID );

						var $Curator = $J( '<div/>', {
							'class': 'steam_curator_for_app tooltip',
							'onclick': "top.location.href='" + curator.link + "'",
							"data-tooltip-text": curator.name
						} );
						var $CuratorImg = $J( '<img/>', {
							'class': 'steam_curator_for_app_img',
							'src': GetAvatarURL( curator.avatar, '' )
						} );
						$Curator.append( $CuratorImg );

						$Curators.append( $Curator );
					}

					$Curators.append( $J('<div/>', {'style': 'clear: left'} ) );
					$ele.append( $Curators );
				}
			}
		}
	});

}