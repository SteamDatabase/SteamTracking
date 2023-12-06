

GSteamBroadcasts = {
		Init: function( fnFilterFunction, tagid, genreid, categoryid, maxBroadcasts, bAutoPlayingFeaturedBroadcast )
	{
		if ( tagid === undefined ) {
			tagid = 0;
		}

		if ( genreid === undefined ) {
			genreid = 0;
		}

		if( categoryid === undefined ) {
			categoryid = 0;
		}

		if ( maxBroadcasts === undefined ) {
			maxBroadcasts = 6;
		}

		if( bAutoPlayingFeaturedBroadcast === undefined ) {
			bAutoPlayingFeaturedBroadcast = false;
		}

		GSteamBroadcasts.m_fnFilterItemToDisplayFunction = fnFilterFunction;
		GSteamBroadcasts.m_tagid = tagid;
		GSteamBroadcasts.m_genreid = genreid;
		GSteamBroadcasts.m_categoryid = categoryid;
		GSteamBroadcasts.m_nMaxBroadcasts = maxBroadcasts;
		GSteamBroadcasts.m_bAutoPlayingFeaturedBroadcast = bAutoPlayingFeaturedBroadcast;

		// If we have zero maxBroadcast, it means we should be disable
		if( GSteamBroadcasts.m_nMaxBroadcasts > 0 )
		{
			GSteamBroadcasts.Render();
		}
	},


	CreateBroadcastCapsule: function( oItem, bAddTitleBar )
	{
		var params = { 'class': 'store_capsule broadcast_capsule responsive_scroll_snap_start', 'href': oItem.app_link };

		var rgItemData = GStoreItemData.GetCapParams( 'live_broadcast', oItem.appid, 0, null, params );
		var $CapCtn = $J('<a/>', params );

		var $ImgCtn = $J('<div class="capsule headerv5" id="broadcast_capsule_appid_' + oItem.appid +  '"/>');

		var rgImageProperties = { src: oItem.thumbnail_http_address };
		var rgDefaultImageProperties = { src: oItem.app_capsule_image };

		$ImgCtn.append( $J('<img/>', rgDefaultImageProperties ) );
		$ImgCtn.append( $J('<img/>', rgImageProperties ) );
		$CapCtn.append( $ImgCtn );

		var rgPlayIconProperties = { src: 'https://store.cloudflare.steamstatic.com/public/shared/images/apphubs/play_icon80.png', class: "live_stream_play_icon" };
		$ImgCtn.append( $J('<img/>', rgPlayIconProperties ) );

		if( bAddTitleBar )
		{
			$CapCtn.append( GSteamBroadcasts.CreateBroadcastGameTitleAndViewer( oItem, false ) );
		}

		$CapCtn.append(
			$J('<div/>', {'class': 'broadcast_live_stream_icon' } ).append( 'Live')
		);

		GDynamicStore.DecorateDynamicItems( $CapCtn );
		GStoreItemData.BindHoverEvents( $CapCtn,  oItem.appid  );

		return $CapCtn;
	},

	CreateBroadcastGameTitleAndViewer: function( oItem, bSurroundWithAnchor )
	{
		$Contents = $J('<div/>', {'class': 'title' } );
		$Contents.append( $J('<span/>', {'class': 'live_stream_app' } ).html( oItem.app_name ) );
		$Contents.append( $J('<span/>', {'class': 'live_steam_viewers' } ).html( Number( oItem.viewer_count ).toLocaleString() ) );

		if( bSurroundWithAnchor )
		{
			var params = { 'class': 'broadcast_footer', 'href': oItem.app_link };

			var rgItemData = GStoreItemData.GetCapParams( 'live_broadcast', oItem.appid, 0, null, params );
			var $CapCtn = $J('<a/>', params );
			$CapCtn.append( $Contents );

			return $CapCtn;
		}
		else
			return $Contents;
	},

	Render: function()
	{
		if ($J('.live_streams_ctn').length == 0 ) {
			return;
		}

		// do an ajax call to get the broadcasters
		$J.ajax( {
			url: "https:\/\/store.steampowered.com\/broadcast\/ajaxgetpopularpartnerbroadcasts\/",
			data: {
				'minviews' : 1, // We ask for all streams with a viewer so we can decorate the 'live' tags on all of the capsules on the page.
				'tagid' : GSteamBroadcasts.m_tagid,
				'genreid' : GSteamBroadcasts.m_genreid,
				'categoryid' : GSteamBroadcasts.m_categoryid,
				'maxbroadcasts' : GSteamBroadcasts.m_nMaxBroadcasts * 2, // We might need to filter some results out based on the users preference so ask for a few more
			},
			dataType: 'json',
			type: 'GET'
		}).done(function( data ) {

			if ( data.success == 1 && data.filtered.length > 0 )
			{
				for( var i = 0; i < data.filtered.length; i++ )
				{
					var rgAppInfo = GStoreItemData.rgAppData[ data.filtered[i].appid ];
					if ( rgAppInfo )
					{
						rgAppInfo.has_live_broadcast = true;

						// update all broadcast capsules to have live tag
						var $Capsules = $J('.broadcast_capsule[data-ds-appid=' + data.filtered[i].appid + ']' ).each( function()
						{
							$Icon = $J('<div/>', {'class': 'broadcast_live_stream_icon' } ).append( 'Live');
							$J(this).append( $Icon );
						});
					}
				}

				GStoreItemData.AddStoreItemData( data.rgAppData );

				// Filter the apps based on the users preference. Do not reduce the full list size, as we need to
				// pull the random stream from the entire set of possible 'popular/hub-popular streams'
				var rgFiltered = data.filtered;
				if( GSteamBroadcasts.m_fnFilterItemToDisplayFunction )
				{
					rgFiltered = GSteamBroadcasts.m_fnFilterItemToDisplayFunction(
						data.filtered, 'home', 1, data.filtered.length, { displayed_elsewhere: true }
					);
				}

				var rgFiltered2 = [];
				for ( var i = 0; i < rgFiltered.length; i++ )
				{
										if ( rgFiltered[i].popular ||
						( ( GSteamBroadcasts.m_genreid > 0 || GSteamBroadcasts.m_tagid > 0 ) && rgFiltered[i].hub_popular ) )
					{
						rgFiltered2.push( rgFiltered[i] );
					}
				}

				var nNumToShowInCarousel = GSteamBroadcasts.m_nMaxBroadcasts;

								var bShow = false;
				if( $J('#live_stream_featured').length == 1 && rgFiltered2.length > 0 )
				{
					var nFeatured = Math.floor( Math.random( ) *  rgFiltered2.length );
					var oItem = rgFiltered2[nFeatured];
					var strBroadcastSteamID = oItem.broadcaststeamid;
					var $CapCtn = GSteamBroadcasts.CreateBroadcastCapsule( oItem, false );
					var $elFeaturedContainer = $J('<div>', { 'class': 'focus carousel_broadcast_featured' } );
					$elFeaturedContainer.append( $CapCtn );
					var $elContainerForScreenshotAndAutoPlay = $J('<div>', { 'class': 'broadcast_screenshot_and_autoplay' } );
					$elContainerForScreenshotAndAutoPlay.append( $elFeaturedContainer );
					$J('#live_stream_featured').append( $elContainerForScreenshotAndAutoPlay );
					var $elTitleAndViewer = GSteamBroadcasts.CreateBroadcastGameTitleAndViewer( oItem, true );

										if( GSteamBroadcasts.m_bAutoPlayingFeaturedBroadcast &&
						( GDynamicStore.s_preferences['hide_store_broadcast'] === undefined || !GDynamicStore.s_preferences['hide_store_broadcast'] ) )
					{
						// Since the user cannot see the screenshot, then markup the title bar with the interactivity.
						GDynamicStore.DecorateDynamicItems( $elTitleAndViewer );
						GStoreItemData.BindHoverEvents( $elTitleAndViewer, oItem.appid );

						$elContainerForScreenshotAndAutoPlay.append(
							"<div class='broadcast_iframe_ctn'>"  +
								"<iframe class='broadcast_iframe' src='https://steamcommunity.com/broadcast/watch/" + strBroadcastSteamID + "?iframe=1&muted=1&enablevideo=1&origin=https://store.steampowered.com/' allowfullscreen frameborder='0' data-allow='autoplay'>" +
								"</iframe>" +
							"</div>" );
					}

					$J('#live_stream_featured').append( $elTitleAndViewer );
					bShow = true;

					// We stole one of the broadcast, so show one less on the capsule
					nNumToShowInCarousel -= 1;

					// Remove the item we featured from the rest of the list if the list is too long
					if( rgFiltered2.length > GSteamBroadcasts.m_nMaxBroadcasts )
					{
						rgFiltered2.splice( nFeatured, 1 );
					}
				}

				if ( rgFiltered2.length > 0 )
				{
					$elTarget = $J('#live_streams_carousel');
					var $elCapsuleTarget = $J('.carousel_items', $elTarget);

					var $elPageContainer = $J('<div>', { 'class': 'focus' } );

					for ( var i = 0; i < rgFiltered2.length && i < nNumToShowInCarousel; i++ )
					{
						var oItem = rgFiltered2[i];
						var $CapCtn = GSteamBroadcasts.CreateBroadcastCapsule( oItem, true );
						$elPageContainer.append( $CapCtn );
					}

					$elCapsuleTarget.append($elPageContainer);
					bShow = true;
				}

				if( bShow )
				{
					$J('.live_streams_ctn').show();
				}
			}

		});

		return;
	}
};

function BuildCreatorCapsuleToAppend( oItem )
{
	var $CreatorsCtn = $J('<div class="recommended_creators_container" />');

	var $AvatarsCtn = $J('<div class="avatars" />');
	$CreatorsCtn.append($AvatarsCtn);

	var $AvatarCap = $J('<a href="%1$s" title="%3$s"><img src="%2$s" alt="%3$s"></a>'.replace(/\%1\$s/g, oItem.link).replace(/\%2\$s/g, GetAvatarURL( oItem.avatar_sha, '_medium' ) ).replace(/\%3\$s/g, oItem.name) );
	$AvatarsCtn.append( $AvatarCap );

	var $Actions = $J('<div class="actions" />');
	var $FollowLink = $J('<a href="#" class="btnv6_white_transparent btn_small_thin" />' );
	$FollowLink.data('ds-following', oItem.following );
	$FollowLink.bind('updateFollowState', function () {
		if ( $FollowLink.data('ds-following') )
		{
			$FollowLink.html( '<span><img src="https://store.cloudflare.steamstatic.com/public/images/v6/ico/ico_selected_green.png">Following</span>' );
			$FollowLink.addClass( "following_button" );
			$FollowLink.removeClass( "follow_button" );
		}
		else
		{
			$FollowLink.html( '<span>Follow</span>' );
			$FollowLink.removeClass( "following_button" );
			$FollowLink.addClass( "follow_button" );
		}
	});

	$FollowLink.trigger('updateFollowState');

	$FollowLink.on( 'click', function() {
		FollowCuratorWithCallback( oItem.creatorid, !$FollowLink.data('ds-following'), function(){
			$FollowLink.data('ds-following', !$FollowLink.data('ds-following') );
			$FollowLink.trigger('updateFollowState');
		});
		event.preventDefault();
	});

	$Actions.append( $FollowLink );

	$AvatarsCtn.append( $Actions );

	return $CreatorsCtn;
}

