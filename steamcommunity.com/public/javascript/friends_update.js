
// Shameless copy/paste from main.js in store. Light modifications to make it run here (mostly just removing
// GDynamicStore references), but this is probably the harbinger

// Common glue logic for a carousel of some kind
var CGenericCarousel = function( $elContainer, nSpeed, fnOnFocus, fnOnBlur, fnClickThumb, bNoWrap )
{
	this.$elContainer = $elContainer;
	this.nSpeed = nSpeed;
	this.fnOnFocus = fnOnFocus;
	this.fnOnBlur = fnOnBlur;
	this.fnClickThumb = fnClickThumb;
	this.bNoWrap = bNoWrap;
	this.nIndex = 0;

	this.$elArrowLeft = $J('.arrow.left', this.$elContainer);
	this.$elArrowRight = $J('.arrow.right', this.$elContainer);

	this.UpdateItems();

	this.fnOnFocus( this.nIndex );

	var instance = this;

	this.fnMouseOver = function(){
		clearInterval( instance.timerAdvance );
	};

	this.fnMouseOut = function(){

		if( instance.timerAdvance )
			clearInterval( instance.timerAdvance );

		if( instance.nSpeed > 0 )
		{
			instance.timerAdvance = setInterval ( function ()
			{
				if( !instance.bIsResponsive() )
					instance.Advance ();
			}, nSpeed * 1000 );
		}
	};

	this.fnMouseOut();

	$elContainer.bind('mouseover', function(e) { instance.fnMouseOver(); } );
	$elContainer.bind('mouseout', function(e) { instance.fnMouseOut(); }  );
	// If we get a scroll event, and we're in respondive, hint all remaining images
	this.$elItems.parent().bind('scroll', function(e) { if( instance.bIsResponsive() ) PreloadImages( $elContainer ); }   );

	// Only bind a mouseover thumb event if we have one.
	if( fnClickThumb ) {

		this.$elThumbs.each(function (i, j)
		{

			$J(j).bind('click touchstart', (function( index, ele ) {
				return function() {
					instance.fnClickThumb( index, ele );
				};}(i, j) )
			);
		});
	}

	// Bind arrows (if we have them)
	this.$elArrowLeft.click( function(e){ instance.Advance(-1); e.preventDefault(); return true; });
	this.$elArrowRight.click( function(e){ instance.Advance(); e.preventDefault(); return true; });

	this.UpdateControls();

};

// Advances the carousel by one. Optionally pass in a specific index to advance to.
CGenericCarousel.prototype.UpdateControls = function( )
{
	// Only one item, so hide the arrows since they're not useful.
	if( this.nItems == 1 )
	{
		this.$elArrowLeft.hide();
		this.$elArrowRight.hide();
		return;
	}

	// Our carousel does not wrap, so conditionally show/hider arrows
	if( this.bNoWrap )
	{
		if( this.nIndex == 0 )
			this.$elArrowLeft.hide();
		else
			this.$elArrowLeft.show();

		if( this.nIndex == this.nItems-1 )
			this.$elArrowRight.hide();
		else
			this.$elArrowRight.show();

	}
	else
	{
		this.$elArrowLeft.show();
		this.$elArrowRight.show();
		return;
	}



};

// Start loading images further down the rotation.
CGenericCarousel.prototype.HintNearbyCapsules = function( )
{
	var nNextIndex = this.GetNextValidIndex();
	var elNextElement = this.$elItems[ nNextIndex ];

	PreloadImages( this.$elItems[ this.nIndex ] );

	// If we're going to auto-scroll, hint the next item.
	if( this.nSpeed > 0 )
		PreloadImages( elNextElement );
};


CGenericCarousel.prototype.UpdateItems = function()
{
	this.$elThumbs = $J('.carousel_thumbs', this.$elContainer).children();
	this.$elItems = $J('.carousel_items', this.$elContainer).children();
	this.nItems = this.$elItems.length;
	this.HintNearbyCapsules();
}

CGenericCarousel.prototype.GetNextValidIndex = function( nNewIndex )
{
	if( this.nItems == 0 )
		return false;

	var nIndex = this.nIndex;

	var rgTargets = this.$elItems;
	var nSearched = 0;

	if( nNewIndex < 0 ) // Allow index of -1 to go backwards.
	{
		// Skip hidden items
		do
		{
			nIndex = ( nIndex + nNewIndex ) % this.nItems;

			// JS's % operator doesn't wrap, so we need to fix it...
			if( nIndex < 0 )
				nIndex += this.nItems;

		}
		while( !$J( rgTargets[ nIndex ] ).is( ":visible" ) && nSearched++ < this.nItems );
	}
	else if( nNewIndex !== undefined )
	{
		if( nIndex == nNewIndex )
			return false
		return nNewIndex;
	}
	else
	{
		// Skip hidden items
		do
		{
			nIndex = ( nIndex + 1 ) % this.nItems;
		}
		while( !$J( rgTargets[ nIndex ] ).is( ":visible" ) && nSearched++ < this.nItems );

	}

	return nIndex;
}

CGenericCarousel.prototype.bIsResponsive = function( )
{
	return window.UseSmallScreenMode && window.UseSmallScreenMode();
}

CGenericCarousel.prototype.Advance = function( nNewIndex )
{


	if( this.nItems == 0 )
		return;

	var nNextIndex = this.GetNextValidIndex( nNewIndex );
	if( nNextIndex == this.nIndex || nNextIndex === false )
		return;

	this.fnOnBlur( this.nIndex );
	this.fnOnFocus( nNextIndex );
	this.nIndex = nNextIndex;

	this.UpdateControls();
	this.HintNearbyCapsules();
}

// Carousel which adds the 'focus' class to the active element. Can be used for fading carousels
// @todo: This needs to be detangled from CGenericCarousel a bit more to be useful in other applications.....
function CreateFadingCarousel( $elContainer, nSpeed, bNoWrap, fnOnBlur, fnCustomOnFocus )
{

	var fnOnFocus = function(  nIndex )
	{
		this.$elThumbs.removeClass( 'focus' );
		this.$elItems.removeClass( 'focus' );

		$J( this.$elThumbs[nIndex] ).addClass('focus');
		$J( this.$elItems[nIndex] ).addClass('focus');

		fnCustomOnFocus( nIndex );
	}

	var fnMouseOverThumb = function( index, element )
	{
		this.Advance(index);
	};
	if( !fnOnBlur )
		fnOnBlur = function(){};

	return new CGenericCarousel( $elContainer, nSpeed, fnOnFocus, fnOnBlur, fnMouseOverThumb, bNoWrap );

}

function PreloadImages( elElement )
{
	$J(elElement).find("*[data-background-image-url]").each(function(i, j){
		var $elTarget = $J(j);
		$elTarget.css({'background-image': 'url(' + $elTarget.data('background-image-url') + ')' });
	});

	$J(elElement).find("img[data-image-url]").each(function(i, j){
		var $elTarget = $J(j);
		$elTarget.attr('src', $elTarget.data('image-url') );
	});

}

// @todo move this to a separate JS file?
var carousel;
var videoTarget = null;
var rgVideos = [];


function UpdateVideos( )
{
	if( !rgVideos || rgVideos.length == 0 )
		return;

	for( var i=0; i<rgVideos.length; i++)
	{
		if( videoTarget == rgVideos[i] && videoTarget.paused )
		{
			rgVideos[i].play();
		}
		else if (videoTarget != rgVideos[i]   )
		{
			rgVideos[i].pause();
		}
	}
}

function VideoScrollEvent()
{

	// AAAA SCROLL EVENT LISTENERS.

	var nTop = window.scrollY || window.pageYOffset;
	var nBottom = nTop + window.innerHeight;

	for( var i=0; i<rgVideos.length; i++)
	{
		var nElTop = $J(rgVideos[i]).offset().top;
		var nElBottom = nElTop + rgVideos[i].clientHeight

		if( nElTop > nTop && nElBottom  < nBottom )
		{
			videoTarget = rgVideos[ i ];
			break;
		}
	}

	UpdateVideos();
}

$J(document ).ready(function(){
	carousel = CreateFadingCarousel( $J('.carousel'), 8, false, null, function( index ){
		var nFirstColItems = $J(".friendslist_first > div").length - 1;

		$J(".friendslist_first > div").removeClass('focus');
		$J(".friendslist_second > div").removeClass('focus');
		$J(".responsive_friendslist_second > div").removeClass('focus');

		if( index >= nFirstColItems )
		{
			index -= nFirstColItems;
			$J(".friendslist_second > div")[index].classList.add('focus');
			$J(".responsive_friendslist_second > div")[index].classList.add('focus');
		} else {
			$J(".friendslist_first > div")[index].classList.add('focus');
		}

		var targets = $J('.carousel_items .focus video');

		if( targets.length == 1)
		{
			if( targets[ 0 ].dataset.restart == "true" )
				targets[ 0 ].currentTime = 0;

			targets[ 0 ].play ();
		}

		$J('.carousel_items div:not(.focus) > video').each(function(index, element){
			element.pause();
		});

	} );

	rgVideos = $J('video.allowmodal');




	window.addEventListener('scroll', VideoScrollEvent);

	rgVideos.on('mouseenter, click', function(event){
		videoTarget = event.target;
		UpdateVideos();
	});

	rgVideos.on('mouseleave', function(event){
		VideoScrollEvent();
	});

	$J('.allowmodal').each(function(i, j){
		j.addEventListener('click', function(){

			if( window.innerWidth < 660)
				return;


			var content = $J(j).clone();
			var modal = new CModal(  content, {} );




			modal.Show();




			content[0].play ();

			content.on('click', function(){ modal.Dismiss() });
			content.on('loadeddata', function(){ modal.m_fnSizing(); modal.m_fnSizing(); });



		});
	});

	$J('.friendsfeature p, .friendsfeature span, .friendsfeature ul, .friendsfeature li, .friendsfeature img').on('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd', function(event) {
		var target = $J(event.target);
		if( !target )
		{
			return;

		}

		if( target.innerHeight() > 0)
		{
			target.css ( {'max-height': target.innerHeight() + "px" } );

		}

	});

	VideoScrollEvent();
	UpdateVideos();


});
