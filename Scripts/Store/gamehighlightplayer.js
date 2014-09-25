

var g_player = null;

function OnMovieComplete()
{
	if ( g_player )
	{
		setTimeout( g_player.OnMovieComplete.bind( g_player, g_player.m_activeItem ), 2000 );
	}
}

function mute_session( bMuted )
{
	SetGameHighlightAudioEnabled( !bMuted );
}

function auto_play( bEnabled )
{
	SetGameHighlightAutoplayEnabled( bEnabled );
}

function volume_session( flVolume )
{
	SetGameHighlightPlayerVolume( flVolume );
}

function BIsUserGameHighlightAutoplayEnabled()
{
	//the cookie is stored as the inverse
	var rgMatches = document.cookie.match( /(^|; )bGameHighlightAutoplayDisabled=([^;]*)/ );
	return !( rgMatches && rgMatches[2] == "true" );
}

function SetGameHighlightAutoplayEnabled( bEnabled )
{
	var dateExpires = new Date();
	dateExpires.setTime( dateExpires.getTime() + 1000 * 60 * 60 * 24 * 365 * 10 );
	document.cookie = 'bGameHighlightAutoplayDisabled=' + (!bEnabled ? 'true' : 'false') + '; expires=' + dateExpires.toGMTString() + ';path=/';
}

var g_bUserSelectedTrailer = false;
function BIsUserGameHighlightAudioEnabled()
{
	if ( g_bUserSelectedTrailer )
	{
		return true;
	}
	else
	{
		var rgMatches = document.cookie.match(/(^|; )bGameHighlightAudioEnabled=([^;]*)/);
		return ( rgMatches && rgMatches[2] == "true" );
	}
}

function SetGameHighlightAudioEnabled( bEnabled )
{
	document.cookie = 'bGameHighlightAudioEnabled=' + (bEnabled ? 'true' : 'false') + '; path=/';
}

function GetGameHighlightPlayerVolume()
{
	var rgMatches = document.cookie.match( /(^|; )flGameHighlightPlayerVolume=([^;]*)/ );

	var flValue = rgMatches && rgMatches[2] ? rgMatches[2] : -1;

	return flValue >= 0 && flValue <= 100 ? flValue : -1;
}

function SetGameHighlightPlayerVolume( flVolume )
{
	var dateExpires = new Date();
	dateExpires.setTime( dateExpires.getTime() + 1000 * 60 * 60 * 24 * 365 * 10 );
	document.cookie = 'flGameHighlightPlayerVolume=' + flVolume + '; path=/';
}

var HighlightPlayer = Class.create( {
	m_elemContainer: null,
	m_elemPlayerArea: null,
	m_elemStrip: null,
	m_elemStripScroll: null,
	m_elemSelector: null,
	m_slider: null,
	m_activeItem: null,
	m_rgMovieFlashvars: null,
	m_rgDefaultMovieFlashvars: null,
	m_rgScreenshotURLs: null,
	m_bVideoOnlyMode: false,
	m_bUseHTMLPlayer: false,

	m_timerInterval: false,
	m_bDisableSlider: false,
	m_bScreenshotModalActive: false,

	initialize: function( args )
	{
		this.m_elemPlayerArea = $(args.elemPlayerArea);
		this.m_elemStrip = $(args.elemStrip);
		this.m_elemStripScroll = $(args.elemStripScroll);
		this.m_rgMovieFlashvars = args.rgMovieFlashvars || new Array();
		this.m_rgScreenshotURLs = args.rgScreenshotURLs || new Array();
		this.m_rgDefaultMovieFlashvars = $H( args.rgDefaultMovieFlashvars || {} );
		this.m_bVideoOnlyMode = args.bVideoOnlyMode;
		this.m_bUseHTMLPlayer = args.bUseHTMLPlayer;

		//make all the strip items clickable
		var thisClosure = this;
		this.m_elemStrip.select( '.highlight_strip_item' ).each(
				function(elemThumb) {
					Event.observe( elemThumb, 'click', thisClosure.HighlightItem.bind( thisClosure, elemThumb, true ) );
				}
		);

		this.m_elemSelector = this.m_elemStrip.down('.highlight_selector');

		var elemSlider = $(args.elemSlider);
		var nSliderWidth = this.m_elemStripScroll.getWidth() - this.m_elemStrip.getWidth();
		if ( nSliderWidth > 0 )
		{
			this.slider = new Control.Slider( elemSlider.down('.handle'), elemSlider, {
		        range: $R( 0, nSliderWidth ),
		        sliderValue: 0,
		        onSlide: this.SliderOnChange.bind( this ),
		        onChange: this.SliderOnChange.bind( this )
	     	});
		}
		else
		{
			elemSlider.hide();
		}

		var cItems = this.m_elemPlayerArea.select( '.highlight_player_item' ).length;
		if ( cItems == 1 )
		{
						this.m_elemStrip.hide();
		}

		this.m_elemContainer = $(args.elemContainer) || this.m_elemPlayerArea.up('.highlight_ctn');
		this.m_elemContainer.observe( 'mouseover', this.mouseOver.bindAsEventListener( this ) );
		this.m_elemContainer.observe( 'mouseout', this.mouseOut.bindAsEventListener( this ) );

		var firstItem = $(args.firstItem) || this.m_elemPlayerArea.down( '.highlight_player_item' );


		if ( !this.m_bVideoOnlyMode && !BIsUserGameHighlightAutoplayEnabled() )
		{
			firstItem = this.m_elemPlayerArea.down( '.highlight_screenshot' );
		}

		this.HighlightItem( firstItem );

		RegisterSteamOnWebPanelShownHandler( this.OnWebPanelShown.bind( this ) );
		RegisterSteamOnWebPanelHiddenHandler( this.OnWebPanelHidden.bind( this ) );

		if ( $J(document.body).hasClass( 'v6' ) )
		{
			var $ScreenshotsLinks = $J(this.m_elemPlayerArea).find('.highlight_player_item.highlight_screenshot a.highlight_screenshot_link');

			var _this = this;
			$ScreenshotsLinks.click( function( event ) {
				_this.OnScreenshotClick( event, this );
			} );
		}

		g_player = this;
	},

	HighlightItem: function( elem, bUserAction )
	{
		if ( this.BIsMovie( elem ) )
			this.HighlightMovie( this.GetMovieId( elem ), bUserAction );
		else
			this.HighlightScreenshot( this.GetScreenshotId( elem ) );

		// preload the next screenshot in-order
		var nextItem = this.m_activeItem.next( '.highlight_player_item' );
		if ( nextItem && this.BIsScreenshot( nextItem ) )
			this.LoadScreenshot( this.GetScreenshotId( nextItem ) );
	},

	HighlightMovie: function( id, bUserAction )
	{
		if ( this.m_activeItem && this.BIsMovie( this.m_activeItem )
				&& this.GetMovieId( this.m_activeItem ) == id )
			return;

		if( this.m_bUseHTMLPlayer )
			this.LoadHTML5Movie( id, bUserAction );
		else
			this.LoadMovie( id, bUserAction );


		this.TransitionTo( $('highlight_movie_' + id ) );
		this.HighlightStripItem( 'thumb_movie_' + id );
	},

	HighlightScreenshot: function( id, bSkipAnimation )
	{
		this.LoadScreenshot( id );

		this.TransitionTo( $('highlight_screenshot_' + id), bSkipAnimation );
		this.HighlightStripItem( 'thumb_screenshot_' + id, bSkipAnimation );

		//after showing at least one screenshot, show only screenshots from that point onward
		this.bScreenshotsOnly = true;
		this.StartTimer();
	},
	LoadHTML5Movie: function( id, bUserAction )
	{
		var strTarget = 'movie_' + id;

		// use the global to tell the player that it should unmute this video
		g_bUserSelectedTrailer = bUserAction;

		if( $(strTarget).play )
		{
			$(strTarget).play();

			$(strTarget).addEventListener("ended",jQuery.proxy(this.Transition, this));
		}
	},
	LoadMovie: function( id, bUserAction )
	{
		var strTarget = 'movie_' + id;
		var rgFlashVars = this.m_rgDefaultMovieFlashvars.merge( this.m_rgMovieFlashvars[ 'movie_' + id ] ).toObject();

		if ( !this.m_bVideoOnlyMode )
		{
			if ( BIsUserGameHighlightAutoplayEnabled() )
				rgFlashVars.CHECKBOX_AUTOPLAY_CHECKED = 'true';
			if ( !BIsUserGameHighlightAudioEnabled() && !bUserAction )
				rgFlashVars.START_MUTE = 'true';
			var flVolume = GetGameHighlightPlayerVolume();
			if ( flVolume != -1 )
				rgFlashVars.SAVED_VOLUME = flVolume;
		}

		if ( $(strTarget) && $(strTarget).tagName == 'DIV' )
		{
			var strRequiredVersion = "9";
			if ( typeof( g_bIsOnMac ) != 'undefined' && g_bIsOnMac ) strRequiredVersion = "10.1.0";
			swfobject.embedSWF( "https://steamstore-a.akamaihd.net/public/swf/videoPlayer.swf?v=10", strTarget, rgFlashVars['STAGE_WIDTH'], rgFlashVars['STAGE_HEIGHT'], strRequiredVersion, false, rgFlashVars, {wmode: "opaque", allowScriptAccess: "always", allowFullScreen: "true" } );
			if ( $(strTarget) && $(strTarget).tagName == 'DIV' )
			{
				//looks like the user doesn't have flash, show this message
				$(strTarget).show();
			}
		}
	},

	LoadScreenshot: function( id )
	{
		var target = $( 'highlight_screenshot_' + id );
		if ( target )
		{
			var url = this.GetScreenshotURL( id, '600x338' );
			var img = target.down('img');
			if ( img.src != url )
				img.src = url;

		}
	},

	GetScreenshotURL: function( id, size )
	{
		return this.m_rgScreenshotURLs[ id ].replace( /_SIZE_/, size ? '.' + size : '' );
	},

	TransitionTo: function( elem, bSkipAnimation )
	{
		if ( this.m_activeItem )
		{
			if ( this.BIsMovie( this.m_activeItem ) )
			{
				//stop movies
				var movieid = this.GetMovieId( this.m_activeItem );
				var elemContainer = $('highlight_movie_' + movieid);

				if( this.m_bUseHTMLPlayer)
				{
					var elemVideo = $('movie_' + movieid);
					elemVideo.pause();
				} else {
					if ( elemContainer.down('.flash_ctn') )
						elemContainer = elemContainer.down('.flash_ctn');
					var strTarget = 'movie_' + movieid;
					elemContainer.innerHTML = '<div id="' + strTarget + '"></div>';
				}
				this.m_activeItem.hide();

			}
			else
			{
				//(cross) fade screenshots
				if ( $(this.m_activeItem).effect ) $(this.m_activeItem).effect.cancel();

				if ( bSkipAnimation )
					$(this.m_activeItem).hide();
				else
					$(this.m_activeItem).effect = Effect.Fade( this.m_activeItem, {duration: 0.4 } );
			}
		}

		if ( this.BIsMovie( elem ) )
		{
			elem.show();
			this.bScreenshotsOnly = false;
		}
		else
		{
			if ( elem.effect ) elem.effect.cancel();

			if ( bSkipAnimation )
				elem.show();
			else
				elem.effect = new Effect.Appear( elem, {duration: 0.4 } );
		}

		this.m_activeItem = elem;
	},

	HighlightStripItem: function( elem, bSkipAnimation )
	{
		var elem = $(elem);
		elem.siblings().invoke( 'removeClassName', 'focus' );
		elem.addClassName( 'focus' );

		//
		var nStripWidth = this.m_elemStrip.getWidth();
		var nTotalStripWidth = this.m_elemStripScroll.getWidth();
		var nScrollOffset = this.m_elemStripScroll.offsetLeft;

		var nThumbRightEdge = elem.offsetLeft + elem.getWidth()  + 2;
		var nThumbLeftEdge = elem.offsetLeft;

		var nTargetScrollOffset = null;
		var bNeedScroll = false;

		if ( nThumbRightEdge + nScrollOffset > nStripWidth )
		{
			bNeedScroll = true;
			nTargetScrollOffset = nThumbLeftEdge;
		}
		else if ( nThumbLeftEdge < -nScrollOffset )
		{
			bNeedScroll = true;
			// if we're scrolling to the left, try to scroll all the way
			//   back to the start if that will work, otherwise scroll such
			//   that the left edge is in view
			if ( nThumbRightEdge < nStripWidth )
				nTargetScrollOffset = 0;
			else
				nTargetScrollOffset = Math.max( 0, nThumbLeftEdge );
		}

		this.m_elemSelector.style.left = elem.offsetLeft + 'px';

		if ( bNeedScroll && this.slider )
		{
			if ( this.m_elemStripScroll.effect ) this.m_elemStripScroll.effect.cancel();
			if ( bSkipAnimation )
				this.slider.setValue( nTargetScrollOffset );
			else
				this.m_elemStripScroll.effect = new Effect.Tween( null, this.slider.value, nTargetScrollOffset, this.slider.setValue.bind( this.slider ) );
		}
	},

	BIsMovie: function (elem )
	{
		return elem && elem.hasClassName( 'highlight_movie' ) || elem.hasClassName( 'highlight_strip_movie' );
	},

	BIsScreenshot: function ( elem )
	{
		return elem && elem.hasClassName( 'highlight_screenshot' ) || elem.hasClassName( 'highlight_strip_screenshot' );
	},

	GetMovieId: function( elem )
	{
		return elem.id.replace( /(highlight|thumb)_movie_/, '' );
	},

	GetScreenshotId: function( elem )
	{
		return elem.id.replace( /(highlight|thumb)_screenshot_/, '' );
	},

	Transition: function()
	{
		var isFullscreen = document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen;

		if( isFullscreen || this.m_bScreenshotModalActive )
			return;

		var className = '.highlight_player_item';
		if ( this.bScreenshotsOnly )
			className = '.highlight_screenshot';

		var nextItem = this.m_activeItem.next( className );
		if ( !nextItem )
		{
			nextItem = this.m_elemPlayerArea.down( className );
		}
		if ( nextItem )
		{
			this.HighlightItem( nextItem );
		}
	},

	TransitionBack: function()
	{
		var className = '.highlight_player_item';
		if ( this.bScreenshotsOnly )
			className = '.highlight_screenshot';

		var nextItem = this.m_activeItem.previous( className );
		if ( !nextItem )
		{
			var rgItems = $J(this.m_elemPlayerArea).find( className );
			nextItem = rgItems[rgItems.length - 1];
		}
		if ( nextItem )
		{
			this.HighlightItem( nextItem );
		}
	},

	StartTimer: function()
	{
		this.ClearInterval();
		this.interval = window.setTimeout( this.Transition.bind( this ), 5000 );
	},

	ClearInterval: function()
	{
		if ( this.interval )
		{
			window.clearInterval( this.interval );
			this.interval = false;
		}
	},

	SliderOnChange: function( value )
	{
		this.m_elemStripScroll.style.left = - value + 'px';
	},

	StopCycle: function()
	{
		this.ClearInterval();
	},

	StartCycle: function()
	{
		if ( !this.BIsMovie( this.m_activeItem ) )
    		this.StartTimer();
	},

	OnMovieComplete: function( movieItem )
	{
		if ( this.m_activeItem == movieItem )
		{
			var movieid = this.GetMovieId( movieItem );
			this.Transition();

			if ( this.m_bVideoOnlyMode || BIsUserGameHighlightAudioEnabled() )
			{
				this.RecordView( movieid );
			}
		}
	},

	OnWebPanelHidden: function()
	{
		this.StopCycle();
		if ( this.m_activeItem && this.BIsMovie( this.m_activeItem ) )
		{
			var id = this.GetMovieId( this.m_activeItem );
			var movie = $('movie_' + id);
			if(this.m_bUseHTMLPlayer)
				movie.pause();
			else
				movie.callPauseVideo();
		}
	},

	OnWebPanelShown: function()
	{
		this.StartCycle();
	},

	mouseOver: function( event )
	{
		this.StopCycle();
	},

	mouseOut: function( event )
	{
    	var reltarget = (event.relatedTarget) ? event.relatedTarget : event.toElement;
    	if ( reltarget && ( $(reltarget).up( 'highlight_ctn' ) == this.m_elemContainer ) )
    		return;

		this.StartCycle();
	},

	RecordView: function( movieid )
	{
		if ( typeof g_AccountID != 'undefined' && g_AccountID )
		{
			new Ajax.Request( 'http://store.steampowered.com/videoview/' + movieid + '/' );
		}
	},

	OnScreenshotClick: function( event, element )
	{
		if ( !this.m_bScreenshotModalActive )
		{
			var $Link = $J(element);
			var screenshotid = $Link.data('screenshotid');
			this.ShowScreenshotPopup( screenshotid );
		}

		event.preventDefault();
	},

	ShowScreenshotPopup: function( screenshotid )
	{
		var rgScreenshotIDs = [];
		for( var id in this.m_rgScreenshotURLs )
		{
			rgScreenshotIDs.push( id );
		}
		var iCurIndex = -1;
		for ( var i=0; i < rgScreenshotIDs.length; i++ )
		{
			if ( rgScreenshotIDs[i] == screenshotid )
			{
				iCurIndex = i;
				break;
			}
		}

		if ( iCurIndex == -1 )
			return;

		this.m_bScreenshotModalActive = true;

		var $Modal = $J('<div/>', {'class': 'screenshot_popup_modal' } );

		var $Title = $J('<a/>' );
		if ( Steam.BIsUserInSteamClient() )
			$Title.text( 'View full-size version in browser' );
		else
			$Title.text( 'Download full-size version' );
		$Title.append( ' ', $J('<img/>', {src: 'https://steamstore-a.akamaihd.net/public/images/v5/ico_external_link.gif' } ) );

		var $TitleCtn = $J('<div/>', {'class': 'screenshot_popup_modal_title'} ).append( $Title );

		var $Img = $J('<img/>', {'src': this.GetScreenshotURL( screenshotid, '600x338' ) } );
		var $ImgPreload = $J('<img/>', {'src': 'https://steamstore-a.akamaihd.net/public/images/blank.gif', 'style': 'display: none;' } );
		var $ImgCtn = $J('<div/>', {'class': 'screenshot_img_ctn'}).append( $Img, $ImgPreload );

		var $Footer =  $J('<div/>', {'class': 'screenshot_popup_modal_footer' } );
		var $ScreenshotCount = $J('<div/>');
		$Footer.append( $ScreenshotCount );

		var $BtnPrev = $J('<div/>', {'class': 'btnv6_blue_hoverfade btn_medium previous'}).append( $J('<span/>').text( 'Prev' ) );
		var $BtnNext = $J('<div/>', {'class': 'btnv6_blue_hoverfade btn_medium next'}).append( $J('<span/>').text( 'Next' ) );

		$Footer.append( $ScreenshotCount, $BtnPrev, $BtnNext );


		$Modal.append( $J('<div/>', {'class': 'screenshot_popup_modal_content'} ).append(
			$TitleCtn,
			$ImgCtn,
			$Footer
		));

		var Modal = new CModal( $Modal );
		Modal.SetRemoveContentOnDismissal( true );
		var bModalShown = false;

		// if loading the 1920x1080 screenshot takes a while, show the popup earlier with a smaller screenshot
		//	so that the user knows we've responded to their input
		window.setTimeout( function() {
			if ( !bModalShown )
			{
				Modal.Show();
				bModalShown = true;
			}
		}, 75 );

		$Img.load( function() {
			$ImgCtn.css( 'min-width', '' );
			$ImgCtn.css( 'min-height', '' );
			$Img.stop();
			$Img.fadeTo( 'fast', 1.0 );
			if ( !bModalShown )
			{
				Modal.Show();
				bModalShown = true;
			}
			Modal.AdjustSizing();

			if ( iCurIndex + 1 < rgScreenshotIDs.length )
				$ImgPreload.attr( 'src', GameHighlightPlayer.GetScreenshotURL( rgScreenshotIDs[iCurIndex+1], '1920x1080' ) );
		} );

		var GameHighlightPlayer = this;
		var fnUpdateFooter = function()
		{
			if ( iCurIndex > 0 )
				$BtnPrev.show();
			else
				$BtnPrev.hide();

			if ( iCurIndex < rgScreenshotIDs.length - 1 )
				$BtnNext.show();
			else
				$BtnNext.hide();

			$ScreenshotCount.text( '%1$s of %2$s screenshots'.replace( /%1\$s/, iCurIndex + 1 ).replace( /%2\$s/, rgScreenshotIDs.length ) );
		};
		var fnShowScreenshot = function( screenshotid )
		{
			var strFullURL = GameHighlightPlayer.GetScreenshotURL( screenshotid );
			$Title.attr('href', strFullURL );
			Steam.LinkInNewWindow( $Title );

			$ImgCtn.css( 'min-width', $ImgCtn.width() );
			$ImgCtn.css( 'min-height', $ImgCtn.height() );
			$Img.stop();
			$Img.fadeTo( 'fast', 0.3 );
			$Img.attr( 'src', GameHighlightPlayer.GetScreenshotURL( screenshotid, '1920x1080' ) );
		};
		var fnNextScreenshot = function() {
			if ( iCurIndex < rgScreenshotIDs.length - 1 )
			{
				iCurIndex++;
				fnShowScreenshot( rgScreenshotIDs[iCurIndex] );
				fnUpdateFooter();
			}
		};
		var fnPrevScreenshot = function() {
			if ( iCurIndex > 0 )
			{
				iCurIndex--;
				fnShowScreenshot( rgScreenshotIDs[iCurIndex] );
				fnUpdateFooter();
			}
		};
		$BtnNext.click( fnNextScreenshot );
		$BtnPrev.click( fnPrevScreenshot );
		$Img.click( fnNextScreenshot );

		$J(document).on('keydown.GameHighlightScreenshots', function( event ) {
			if ( event.which == 37 /* left */ || event.which == 38 /* up */ )
			{
				fnPrevScreenshot();
				event.preventDefault();
			}
			else if ( event.which == 39 /* right */ || event.which == 40 /* down */ || event.which == 32 /* spacebar */ )
			{
				fnNextScreenshot();
				event.preventDefault();
			}
		});

		Modal.OnResize( function( nMaxWidth, nMaxHeight ) {
			$Img.css( 'max-width', nMaxWidth );
			$Img.css( 'max-height', nMaxHeight - 74 );
		} );

		Modal.OnDismiss( function() {
			GameHighlightPlayer.HighlightScreenshot( rgScreenshotIDs[iCurIndex], true );
			GameHighlightPlayer.m_bScreenshotModalActive = false;
			$J(document).off('keydown.GameHighlightScreenshots');
		} );

		fnShowScreenshot( screenshotid );
		fnUpdateFooter();
	}

} );


(function( $ ){
	var settings = {};


	$.fn.videoControls = function( options ) {

		settings = $.extend( {
			'trailer': false
		}, options);

		var overlaySrc = '<div class="html5_video_overlay">' +
				'<div class="play_button play"></div>' +
				'<div class="control_container">' +
					'<div class="fullscreen_button"></div>' +
					'<div class="time"></div>' +
					'<div class="volume_icon"></div>' +
					'<div class="volume_slider">' +
						'<div class="volume_handle"></div>' +
					'</div>' +
					'<div class="autoplay_checkbox"></div>' +
					'<div class="autoplay_label">Autoplay videos</div>' +
				'</div>' +
				'<div class="progress_bar_wrapper">' +
					'<div class="progress_bar_container">' +
						'<div class="progress_bar_background"></div>' +
						'<div class="progress_bar"></div>' +
					'</div>' +
				'</div>' +
			'</div>';


		return this.each(function() {

			var wrapper = this.parentNode;
			var video = $(this); // jQuery wrapped version.
			var videoControl = this;
			var mouseoutEvent = false;
			var length = 0;
			var bIsFullscreen = false;
			var bIsHD = false;

			var bIsDraggingVolume = false;

			$(wrapper).css({'position': 'relative'});
			var overlay = $(overlaySrc);
			$(wrapper).append(overlay);

			function setup()
			{
				video.bind({
					'mouseenter': function() { show(); clearTimeout(mouseoutEvent); },
					'mouseleave': function(event) {
						var relTarget = (event.relatedTarget) ? event.relatedTarget : event.toElement;
						if ( overlay.get(0) == relTarget || $.contains( overlay.get(0),  relTarget  ) )
							return;

						hide();
					},
					'timeupdate': function() { timeUpdate(); },
					'playing': function() { eventPlay(); },
					'click': function() { playPause(); }
				});
				overlay.bind({
					'mouseleave': function(event) {
						var relTarget = (event.relatedTarget) ? event.relatedTarget : event.toElement;
						if ( videoControl == relTarget )
							return;
						hide();
					},
					'mouseenter': function() { clearTimeout(mouseoutEvent); }
				});
				$('.play_button',overlay).bind('click', function() { playPause(); });
				$('.volume_slider',overlay).bind('click', function(e) { volumeClick(e, this); });
				$('.volume_slider',overlay).bind('mousedown', function(e) { volumeStartDrag(e, this); });
				$('.volume_slider',overlay).bind('mouseup', function(e) { volumeStopDrag(e, this); });
				$('.volume_slider',overlay).bind('mouseleave', function(e) { volumeStopDrag(e, this); });

				$('.volume_icon',overlay).bind('click', function(e) { toggleMute(e, this); });
				$('.autoplay_checkbox',overlay).bind('click', function(e) { toggleAutoplay(); });
				$('.fullscreen_button',overlay).bind('click', function(e) { toggleFullscreen(); });
				$('.progress_bar_container',overlay).bind('click', function(e) { progressClick(e, this); });

				updateVolume();
			}

			// Overlay visibility

			function show()
			{
				// TODO: Cool slidey animation would give us parity with flash except chrome barfs hard. re-enable when
				// chrome learns how to animate stuff in <video> properly.
				overlay.stop().animate({'bottom': '0px'}, 200);
				//overlay.show();
				var maxWidth = $('.progress_bar_container', overlay).width();
				var progress = maxWidth * ( videoControl.currentTime / videoControl.duration);

				var nEnd = 0;
				for(var i=0; i<videoControl.buffered.length; i++)
					nEnd = videoControl.buffered.end(i) > nEnd ? videoControl.buffered.end(i) : nEnd;

				var loaded = maxWidth * ( nEnd  / videoControl.duration);

				$('.progress_bar', overlay).stop().css({'width': progress + 'px'}, 200);
				$('.progress_bar_background', overlay).stop().css({'width': loaded + 'px'}, 200);

				var timeString = SecondsToTime(videoControl.currentTime) + " / " + SecondsToTime(videoControl.duration);

				$('.time', overlay).text(timeString);
			}

			function hide()
			{
				clearTimeout(mouseoutEvent);
				mouseoutEvent = setTimeout( function(){
					overlay.stop().animate({'bottom': '-35px'}, 200);
					$('.volume_slider',overlay).unbind('mousemove');
				}, 1000 );
				// TODO: Cool slidey animation would give us parity with flash except chrome barfs hard. re-enable when
				// chrome learns how to animate stuff in <video> properly.

				//overlay.hide();
			}

			// We need to call this every time we start playback so changes between tabs and instances are always in sync.
			function updateVolume()
			{
				if( settings.trailer )
				{
					videoControl.muted = false;
					setVolume( GetGameHighlightPlayerVolume() / 100);
				}
				else
				{
					setVolume( GetGameHighlightPlayerVolume() / 100);

					if( !BIsUserGameHighlightAudioEnabled() )
					{
						videoControl.muted = true;
						$('.volume_icon',overlay).addClass('muted');
						$('.volume_handle', overlay).css({'left': "0"});
					}
					else
					{
						videoControl.muted = false;
						$('.volume_icon',overlay).removeClass('muted');
					}

					if( BIsUserGameHighlightAutoplayEnabled() )
					{
						$('.autoplay_checkbox',overlay).addClass("checked");
					}
				}
			}


			// HTML5 callbacks

			function timeUpdate(e)
			{
				var maxWidth = $('.progress_bar_container', overlay).width();
				var progress = maxWidth * ( videoControl.currentTime / videoControl.duration);

				var nEnd = 0;
				for(var i=0; i<videoControl.buffered.length; i++)
					nEnd = videoControl.buffered.end(i) > nEnd ? videoControl.buffered.end(i) : nEnd;

				var loaded = maxWidth * (  nEnd / videoControl.duration);

				$('.progress_bar', overlay).stop().animate({'width': progress + 'px'}, 200);
				$('.progress_bar_background', overlay).stop().animate({'width': loaded + 'px'}, 200);

				var timeString = SecondsToTime(videoControl.currentTime) + " / " + SecondsToTime(videoControl.duration);

				$('.time', overlay).text(timeString);
			}

			function eventPlay()
			{
				$('.play_button',overlay).removeClass('play');
				$('.play_button',overlay).addClass('pause');
				updateVolume();
			}

			// Control functions
			function playPause()
			{
				if( videoControl.paused )
				{
					videoControl.play();
				} else {
					videoControl.pause();
					$('.play_button',overlay).addClass('play');
					$('.play_button',overlay).removeClass('pause');
				}
			}

			function volumeClick(e, ele)
			{
				var parentOffset = $(ele).offset();
				var relX = e.pageX - parentOffset.left;
				var volume =  relX / 80 ;

				setVolume(volume);
				SetGameHighlightPlayerVolume(100 * volume);

				if( videoControl.muted )
					toggleMute();
			}

			function setVolume( volume )
			{
				volume = Math.min(Math.max(volume, 0), 100);
				videoControl.volume = volume;
				var sliderX = volume * 80 - 2;
				$('.volume_handle', overlay).css({'left': sliderX + "px"});
			}

			function volumeStartDrag(e, ele)
			{
				$('.volume_slider',overlay).bind('mousemove', function(e) { volumeClick(e, this); });
				e.originalEvent.preventDefault();
				SetGameHighlightAudioEnabled( true );
			}

			function volumeStopDrag(e, ele)
			{
				$('.volume_slider',overlay).unbind('mousemove');
			}

			function toggleMute(e, ele )
			{
				videoControl.muted = !videoControl.muted;
				SetGameHighlightAudioEnabled( !videoControl.muted );

				if( videoControl.muted )
				{
					$('.volume_icon',overlay).addClass('muted');
					$('.volume_handle', overlay).css({'left': "0px"});
				} else {
					$('.volume_icon',overlay).removeClass('muted');
					setVolume( GetGameHighlightPlayerVolume() / 100);
				}
			}

			function progressClick( e, ele )
			{
				var parentOffset = $(ele).offset();
				var barWidth = $(ele).innerWidth();
				var relX = e.pageX - parentOffset.left;
				var percent =  relX / barWidth;

				videoControl.currentTime = percent * videoControl.duration;
			}

			function toggleFullscreen()
			{
				var eleContainer = videoControl.parentNode;
				var isFullscreen = document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen;

				if( !isFullscreen )
				{
					if( eleContainer.requestFullscreen )
						eleContainer.requestFullscreen();
					else if( eleContainer.webkitRequestFullScreen )
						eleContainer.webkitRequestFullScreen();
					else if( eleContainer.mozRequestFullScreen )
						eleContainer.mozRequestFullScreen();

					if( !bIsHD )
					{
						// Switch to HD video
						var videoPosition = videoControl.currentTime;
						videoControl.pause();
						videoControl.preload = "metadata";

						$(videoControl).bind('loadedmetadata', function() {
							console.log("loadedmetadata");
							this.currentTime = videoPosition;
							videoControl.play();
							$(videoControl).unbind('loadedmetadata')
						});

						videoControl.src = $(videoControl).data('hd-src');
						videoControl.load();
						bIsHD = true;
					}

				} else {
					if( document.cancelFullscreen )
						document.cancelFullscreen();
					else if( document.webkitCancelFullScreen )
						document.webkitCancelFullScreen();
					else if( document.mozCancelFullScreen )
						document.mozCancelFullScreen();
				}
			}

			function toggleAutoplay()
			{
				var bAutoplay = !BIsUserGameHighlightAutoplayEnabled();
				SetGameHighlightAutoplayEnabled( bAutoplay );

				if( bAutoplay )
					$('.autoplay_checkbox',overlay).addClass("checked");
				else
					$('.autoplay_checkbox',overlay).removeClass("checked");
			}

			setup();
			hide();
		});

	};

})( jQuery );

function SecondsToTime( seconds )
{

	var hours = Math.floor(seconds / (60 * 60) );
	var minutes = Math.floor(seconds / 60 ) % 59;
	var seconds = Math.floor( seconds ) % 59;
	if( seconds < 10 )
		seconds = "0" + seconds;
	var out = (hours > 0 ) ? hours + ":" : "";
	return out + minutes + ":" + seconds;
}

function BDoesUserPreferHTML5()
{
	var rgMatches = document.cookie.match( /(^|; )bShouldUseHTML5=([^;]*)/ );
	return ( rgMatches && rgMatches[2] == 1 );
}

function SetUserPrefersHTML5( bEnabled )
{
	var dateExpires = new Date();
	dateExpires.setTime( dateExpires.getTime() + 1000 * 60 * 60 * 24 * 365 * 10 );
	document.cookie = 'bShouldUseHTML5=' + bEnabled + '; expires=' + dateExpires.toGMTString() + ';path=/';
}

