
var ytplayer = null;
		
function updateHTML(elmId, value) {
  document.getElementById(elmId).innerHTML = value;
}

function onYouTubePlayerReady(playerId) {
	var strTarget = 'movie_' + playerId;
	ytplayer = document.getElementById( strTarget );
	ytplayer.addEventListener("onStateChange", "onytplayerStateChange");
	ytplayer.addEventListener("onError", "onPlayerError");
	// for now, disable auto-play
	//if ( BIsUserGameHighlightAutoplayEnabled() )
	{
		ytplayer.playVideo();
	}
}

function onPlayerError(errorCode) {
	OnMovieComplete(); // Skip!
}

function onytplayerStateChange( state ) {
	if ( state.data == 0 )
	{
		OnMovieComplete();
	}
}

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

function BIsUserGameHighlightAutoplayEnabled()
{
	if( typeof( bSkipVideos ) != "undefined" && bSkipVideos == true )
		return false;

	// the cookie is stored as the inverse
	var rgMatches = document.cookie.match( /(^|; )bGameHighlightAutoplayDisabled=([^;]*)/ );
	return !( rgMatches && rgMatches[2] == "true" );
}

function SetGameHighlightAutoplayEnabled( bEnabled )
{
	var dateExpires = new Date();
	dateExpires.setTime( dateExpires.getTime() + 1000 * 60 * 60 * 24 * 365 * 10 );
	document.cookie = 'bGameHighlightAutoplayDisabled=' + (!bEnabled ? 'true' : 'false') + '; expires=' + dateExpires.toGMTString() + ';path=/';
}

function BIsUserGameHighlightAudioEnabled()
{
	var rgMatches = document.cookie.match( /(^|; )bGameHighlightAudioEnabled=([^;]*)/ );
	return ( rgMatches && rgMatches[2] == "true" );
}

function SetGameHighlightAudioEnabled( bEnabled )
{
	document.cookie = 'bGameHighlightAudioEnabled=' + (bEnabled ? 'true' : 'false') + '; path=/';
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
	m_rgSketchfabModels: null,
	m_bVideoOnlyMode: false,

	m_timerInterval: false,
	m_bDisableSlider: false,

	initialize: function( args )
	{
		this.m_elemPlayerArea = $(args.elemPlayerArea);
		this.m_elemStrip = $(args.elemStrip);
		this.m_elemStripScroll = $(args.elemStripScroll);
		this.m_rgMovieFlashvars = args.rgMovieFlashvars || new Array();
		this.m_rgScreenshotURLs = args.rgScreenshotURLs || new Array();
		this.m_rgSketchfabModels = args.rgSketchfabModels || new Array();
		this.m_rgDefaultMovieFlashvars = $H( args.rgDefaultMovieFlashvars || {} );
		this.m_bVideoOnlyMode = args.bVideoOnlyMode;

		if ( !this.m_elemStrip )
		{
			return;
		}

		//make all the strip items clickable
		var thisClosure = this;

		this.m_elemStrip.select( '.highlight_strip_item' ).each(
				function(elemThumb) {
					Event.observe( elemThumb, 'click', thisClosure.HighlightItem.bind( thisClosure, elemThumb ) );
				}
		);

		this.m_elemSelector = this.m_elemStrip ? this.m_elemStrip.down('.highlight_selector') : null;

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

		g_player = this;
	},

	HighlightItem: function( elem )
	{
		if ( this.BIsMovie( elem ) )
			this.HighlightMovie( this.GetMovieId( elem ) );
		else if ( this.BIsScreenshot( elem ) )
			this.HighlightScreenshot( this.GetScreenshotId( elem ) );
		else if ( this.BIsSketchfabModel( elem ) )
			this.HighlightSketchfabModel( this.GetSketchfabModelId( elem ) );

		// preload the next screenshot in-order
		var nextItem = this.m_activeItem.next( '.highlight_player_item' );
		if ( nextItem && this.BIsScreenshot( nextItem ) )
			this.LoadScreenshot( this.GetScreenshotId( nextItem ) );
	},

	HighlightMovie: function( id )
	{
		if ( this.m_activeItem && this.BIsMovie( this.m_activeItem )
				&& this.GetMovieId( this.m_activeItem ) == id )
			return;
		this.LoadMovie( id );

		this.TransitionTo( $('highlight_movie_' + id ) );
		this.HighlightStripItem( 'thumb_movie_' + id );
	},

	HighlightScreenshot: function( id )
	{
		this.LoadScreenshot( id );

		this.TransitionTo( $('highlight_screenshot_' + id) );
		this.HighlightStripItem( 'thumb_screenshot_' + id );

		// after showing at least one screenshot, show only screenshots from that point onward
		this.bScreenshotsOnly = true;
		this.StartTimer();
	},

	HighlightSketchfabModel: function( id )
	{
		this.LoadSketchfabModel( id );

		this.TransitionTo( $('highlight_sketchfab_model_' + id) );
		this.HighlightStripItem( 'thumb_sketchfab_model_' + id );
	},

	LoadMovie: function( id )
	{
		var strTarget = 'movie_' + id;
		var rgFlashVars = this.m_rgDefaultMovieFlashvars.merge( this.m_rgMovieFlashvars[ 'movie_' + id ] ).toObject();

		if ( $(strTarget) && $(strTarget).tagName == 'DIV' )
		{
			player = new YT.Player(strTarget, {
				height: rgFlashVars['STAGE_HEIGHT'],
				width: rgFlashVars['STAGE_WIDTH'],
				videoId: rgFlashVars['YOUTUBE_VIDEO_ID'],
				playerVars: { 'autoplay': 1 },
				events: {
					'onStateChange': onytplayerStateChange,
					'onError': onPlayerError
				}
			});

			$(strTarget).show();
		}
	},

	LoadScreenshot: function( id )
	{
		var target = $( 'highlight_screenshot_' + id );
		if ( target )
		{
			var url = this.m_rgScreenshotURLs[ id ];
			var img = target.down('img');
			if ( img.src != url )
				img.src = url;

		}
	},

	LoadSketchfabModel: function( id )
	{
		var target = $( 'highlight_sketchfab_model_' + id );
		if ( target )
		{
			var modelid = this.m_rgSketchfabModels[ id ];
			var iframe = target.down('iframe');
			var url = "https://sketchfab.com/models/" + modelid + "/embed?autostart=1"
			if ( iframe.src != url )
				iframe.src = url;
		}
	},

	TransitionTo: function( elem )
	{
		if ( this.m_activeItem )
		{
			if ( this.BIsMovie( this.m_activeItem ) )
			{
				//stop movies
				var movieid = this.GetMovieId( this.m_activeItem );
				var elemContainer = $('highlight_movie_' + movieid);
				if ( elemContainer.down('.flash_ctn') )
					elemContainer = elemContainer.down('.flash_ctn');
				var strTarget = 'movie_' + movieid;
				elemContainer.innerHTML = '<div id="' + strTarget + '"></div>';

				this.m_activeItem.hide();
			}
			else if ( this.BIsSketchfabModel( this.m_activeItem ) )
			{
				this.m_activeItem.hide();
			}
			else
			{
				//(cross) fade screenshots
				if ( $(this.m_activeItem).effect ) $(this.m_activeItem).effect.cancel();
				$(this.m_activeItem).effect = Effect.Fade( this.m_activeItem, {duration: 0.4 } );
			}
		}

		if ( this.BIsMovie( elem ) )
		{
			elem.show();
		}
		else if ( this.BIsSketchfabModel( elem ) )
		{
			elem.show();
		}
		else
		{
			if ( elem.effect ) elem.effect.cancel();
			elem.effect = new Effect.Appear( elem, {duration: 0.4 } );
		}

		this.m_activeItem = elem;
	},

	HighlightStripItem: function( elem )
	{
		var elem = $(elem);
		if ( !elem )
			return;
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
			this.m_elemStripScroll.effect = new Effect.Tween( null, this.slider.value, nTargetScrollOffset, this.slider.setValue.bind( this.slider ) );

		}
	},

	BIsMovie: function (elem )
	{
		return elem.hasClassName( 'highlight_movie' ) || elem.hasClassName( 'highlight_strip_movie' );
	},

	BIsScreenshot: function ( elem )
	{
		return elem.hasClassName( 'highlight_screenshot' ) || elem.hasClassName( 'highlight_strip_screenshot' );
	},

	BIsSketchfabModel : function ( elem )
	{
		return elem.hasClassName( 'highlight_sketchfab_model' ) || elem.hasClassName( 'highlight_strip_sketchfab_model' );
	},

	GetMovieId: function( elem )
	{
		return elem.id.replace( /(highlight|thumb)_movie_/, '' );
	},

	GetScreenshotId: function( elem )
	{
		return elem.id.replace( /(highlight|thumb)_screenshot_/, '' );
	},

	GetSketchfabModelId: function( elem )
	{
		return elem.id.replace( /(highlight|thumb)_sketchfab_model_/, '' );
	},

	Transition: function()
	{
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
		if ( this.BIsScreenshot( this.m_activeItem ) )
    		this.StartTimer();
	},

	OnMovieComplete: function( movieItem )
	{
		if ( this.m_activeItem == movieItem )
			this.Transition();
	},

	OnWebPanelHidden: function()
	{
		this.StopCycle();
		if ( this.m_activeItem && this.BIsMovie( this.m_activeItem ) )
		{
			pause();
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
	}
} );


