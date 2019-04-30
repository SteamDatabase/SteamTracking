

GSteamBroadcasts = {
		Init: function( fnFilterFunction, tagid, genreid, maxBroadcasts )
	{
		if ( tagid === undefined )
			tagid = 0;

		if ( genreid === undefined )
			genreid = 0;

		if ( maxBroadcasts === undefined )
			maxBroadcasts = 6;


		GSteamBroadcasts.m_fnFilterItemToDisplayFunction = fnFilterFunction;
		GSteamBroadcasts.m_tagid = tagid;
		GSteamBroadcasts.m_genreid = genreid;
		GSteamBroadcasts.m_nMaxBroadcasts = maxBroadcasts;
		GSteamBroadcasts.Render();
	},

	Render: function()
	{
		if ($J('.live_streams_ctn').length == 0 ) {
			return;
		}

		$J('.live_streams_ctn').hide();

		// do an ajax call to get the broadcasters
		$J.ajax( {
			url: "https:\/\/store.steampowered.com\/broadcast\/ajaxgetpopularpartnerbroadcasts\/",
		data: {
			'minviews' : 1,
			'tagid' : GSteamBroadcasts.m_tagid,
			'genreid' : GSteamBroadcasts.m_genreid,
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
					rgAppInfo.live_broadcast = true;

					// update all broadcast capsules to have live tag
					var $Capsules = $J('.broadcast_capsule[data-ds-appid=' + data.filtered[i].appid + ']' ).each( function()
					{
						$Icon = $J('<div/>', {'class': 'broadcast_live_stream_icon' } ).append( 'Live');
						$J(this).append( $Icon );
					});
				}
			}

			GStoreItemData.AddStoreItemData( data.rgAppData );

			// This is defined by the caller for my object.
			var rgFiltered = data.filtered;
			if( GSteamBroadcasts.m_fnFilterItemToDisplayFunction )
			{
				rgFiltered = GSteamBroadcasts.m_fnFilterItemToDisplayFunction(
					data.filtered, 'home', 1, GSteamBroadcasts.m_nMaxBroadcasts, { displayed_elsewhere: true }
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

			if ( rgFiltered2.length > 0 )
			{
				$elTarget = $J('#live_streams_carousel');
				var $elCapsuleTarget = $J('.carousel_items', $elTarget);

				var $elPageContainer = $J('<div>', { 'class': 'focus' } );

				for ( var i = 0; i < rgFiltered2.length && i < GSteamBroadcasts.m_nMaxBroadcasts; i++ )
				{
					var oItem = rgFiltered2[i];

					var params = { 'class': 'store_capsule broadcast_capsule', 'href': oItem.app_link };

					var rgItemData = GStoreItemData.GetCapParams( 'live_broadcast', oItem.appid, 0, null, params );
					var $CapCtn = $J('<a/>', params );

					var $ImgCtn = $J('<div class="capsule headerv5"/>');

					var rgImageProperties = { src: oItem.thumbnail_http_address };
					var rgDefaultImageProperties = { src: oItem.app_capsule_image };

					$ImgCtn.append( $J('<img/>', rgDefaultImageProperties ) );
					$ImgCtn.append( $J('<img/>', rgImageProperties ) );
					$CapCtn.append( $ImgCtn );

					var rgPlayIconProperties = { src: 'https://steamstore-a.akamaihd.net/public/shared/images/apphubs/play_icon80.png', class: "live_stream_play_icon" };
					$ImgCtn.append( $J('<img/>', rgPlayIconProperties ) );

					$Contents = $J('<div/>', {'class': 'title' } );
					$Contents.append( $J('<span/>', {'class': 'live_stream_app' } ).html( oItem.app_name ) );
					$Contents.append( $J('<span/>', {'class': 'live_steam_viewers' } ).html( Number( oItem.viewer_count ).toLocaleString() ) );

					$CapCtn.append( $Contents );
					$CapCtn.append(
						$J('<div/>', {'class': 'broadcast_live_stream_icon' } ).append( 'Live')
				);


					$elPageContainer.append( $CapCtn );
				}

				$elCapsuleTarget.append($elPageContainer);

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

	var $AvatarCap = $J('<a href="%1$s" title="%3$s"><img src="%2$s"></a>'.replace(/\%1\$s/g, oItem.link).replace(/\%2\$s/g, GetAvatarURL( oItem.avatar_sha, '_medium' ) ).replace(/\%3\$s/g, oItem.name) );
	$AvatarsCtn.append( $AvatarCap );

	var $Actions = $J('<div class="actions" />');
	var $FollowLink = $J('<a href="#" class="btnv6_white_transparent btn_small_thin" />' );
	$FollowLink.data('ds-following', oItem.following );
	$FollowLink.bind('updateFollowState', function () {
		if ( $FollowLink.data('ds-following') )
		{
			$FollowLink.html( '<span><img src="https://steamstore-a.akamaihd.net/public/images/v6/ico/ico_selected_green.png">Following</span>' );
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

