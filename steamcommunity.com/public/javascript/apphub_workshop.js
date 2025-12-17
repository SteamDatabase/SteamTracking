
function TabSelect( name )
{
	var tab = $J( "#Tab" + name );
	tab.siblings().removeClass( 'active' );
	tab.addClass( 'active' );

	var tabContent = $J( "#TabContent" + name );
	tabContent.siblings().hide();
	tabContent.show();
}

/* slider */
function CSlider( $Container, $Grabber, args )
{
	this.m_$Container = $Container;
	this.m_$Grabber = $Grabber;
	this.m_nMinVal = args.min || 0;
	this.m_nMaxVal = args.max || 100;
	this.m_nValue = args.value || 0;
	this.m_fnOnChange = args.fnOnChange || function( value, bInDrag ) {};

	this.m_$Grabber.css( 'position', 'absolute' );
	this.SetValue( this.m_nValue );

	var _this = this;
	this.m_$Container.on( 'mousedown', function( event ) {
		_this.CalcRatios();

		if ( !_this.m_$Grabber.is( event.target ) )
		{
			// jump the grabber to this position and start the drag
			var nPosition = event.pageX - _this.m_$Container.offset().left;
			// we want the grabber centered under the mosue if possible
			nPosition -= Math.floor( _this.m_$Grabber.width() / 2 );
			var nNewPosition = Math.min( Math.max( nPosition, 0 ), _this.m_nWidth );

			_this.m_$Grabber.css('left', nNewPosition + 'px' );
			_this.m_nValue = nNewPosition / _this.m_flRatio;
			_this.m_fnOnChange( _this.m_nValue, true );
		}
		var nInitialPosition = parseInt( _this.m_$Grabber.css('left') );
		var nStartDragX = event.pageX;

		$J(document).on( 'mousemove.CSlider', function( event ) {
			var nDelta = event.pageX - nStartDragX;

			var nNewPosition = Math.min( Math.max( nInitialPosition + nDelta, 0 ), _this.m_nWidth );

			_this.m_$Grabber.css('left', nNewPosition + 'px' );
			_this.m_nValue = nNewPosition / _this.m_flRatio;
			_this.m_fnOnChange( _this.m_nValue, true );
		});
		$J(document).on( 'mouseup.CSlider', function( event ) {
			$J(document).off('.CSlider');
			_this.m_fnOnChange( _this.m_nValue, false );
		})
	});
}

CSlider.prototype.CalcRatios = function()
{
	var nGrabberWidth = this.m_$Grabber.width();
	this.m_nWidth = this.m_$Container.width() - nGrabberWidth;

	this.m_flRatio = this.m_nWidth / ( this.m_nMaxVal - this.m_nMinVal );
}

CSlider.prototype.SetValue = function( nValue, nAnimationSpeed )
{
	this.CalcRatios();

	this.m_nValue = Math.min( Math.max( nValue, this.m_nMinVal ), this.m_nMaxVal );

	var nNewPosition = Math.floor( ( this.m_nValue - this.m_nMinVal ) * this.m_flRatio );

	this.m_$Grabber.stop();
	if ( nAnimationSpeed )
		this.m_$Grabber.animate( {left: nNewPosition }, nAnimationSpeed );
	else
		this.m_$Grabber.css( 'left',  nNewPosition + 'px' );
}

CSlider.prototype.SetRange = function( nMinVal, nMaxVal, nValue )
{
	this.m_nMinVal = nMinVal;
	this.m_nMaxVal = nMaxVal;
	if ( typeof nValue != 'undefined' )
		this.m_nValue = nValue;
	this.SetValue( this.m_nValue );
}

/* slideshow*/
function CSlideShow( $TopLevelContainer, $Container, rgParams )
{
	rgParams = rgParams || {};

	this.m_$TopLevelContainer = $TopLevelContainer;
	this.m_$ScrolledArea = $Container;
	this.m_elemSlider = $J( rgParams.slider );
	this.m_elemHandle = rgParams.sliderHandle ? $J( rgParams.sliderHandle ) : this.m_elemSlider.find('.handle');
	this.m_elemScrollLeftBtn = rgParams.scrollLeftBtn ? $J( rgParams.scrollLeftBtn ) : null;
	this.m_elemScrollRightBtn = rgParams.scrollRightBtn ? $J( rgParams.scrollRightBtn ) : null;
	this.m_rgSlideshowImageURLs = rgParams.rgSlideshowImageURLs;
	this.m_itemClass = rgParams.itemClass;
	this.m_children = this.m_$ScrolledArea.children( "." + this.m_itemClass );
	this.m_activeElem = null;
	this.m_bInScroll = false;

	if ( this.m_children.length != 0 )
	{
		this.InitSlider();
		this.HighlightItem( $J( this.m_children[0] ), 0 );
		this.StartTimer();

		var _this = this;
		this.m_$TopLevelContainer.on( 'mouseover', function( event ) { _this.OnMouseOver( event ); } );
		this.m_$TopLevelContainer.on( 'focusin', function( event ) { _this.OnMouseOver( event ); } );
		this.m_$TopLevelContainer.on( 'mouseout', function( event ) { _this.OnMouseOut( event ); } );
		this.m_$TopLevelContainer.on( 'focusout', function( event ) { _this.OnMouseOut( event ); } );

		for ( var i = 0; i < this.m_children.length; ++i )
		{
			var elem = $J( this.m_children[i] );
			elem.on( 'focusin',
				function( event )
				{
					_this.HighlightItem( $J( this ), 0 );
				}
			);
		}

		if ( this.m_elemScrollLeftBtn && this.m_elemScrollRightBtn )
		{
			this.m_elemScrollLeftBtn.on( 'click', function( event ) { _this.ScrollLeft( event ); } );
			this.m_elemScrollRightBtn.on( 'click', function( event ) { _this.ScrollRight( event, false ); } );
		}
	}
}

CSlideShow.prototype.InitSlider = function()
{
	var _this = this;
	var lastChildIdx = this.m_children.length - 1;
	var lastChild = $J( this.m_children[lastChildIdx] );
	this.m_slider = new CSlider( this.m_elemSlider, this.m_elemHandle, {
		min: 0,
		max: lastChild.position().left,
		value: 0,
		fnOnChange: function( value, bInDrag ) { _this.SliderOnChange( value, bInDrag ); }
	});
}

CSlideShow.prototype.SliderOnChange = function( value, bInDrag )
{
	if ( bInDrag )
	{
		this.EnsureImagesLoaded();

		this.m_$ScrolledArea.parent().stop();
		this.m_$ScrolledArea.parent().scrollLeft( Math.round( value ) );
	}
	else if ( !this.m_bInScroll )
	{
		var scrollLeft = value;

		var closestIdx = 0;
		var minDelta = this.m_$ScrolledArea.width();
		for ( var i = 0; i < this.m_children.length; ++i )
		{
			var elem = $J( this.m_children[i] );
			var delta = Math.abs( elem.position().left - scrollLeft );
			if ( delta < minDelta )
			{
				minDelta = delta;
				closestIdx = i;
			}
		}

		var elem = $J( this.m_children[closestIdx] );
		this.HighlightItem( elem, minDelta == 0 ? 0 : ( minDelta < 0.25 * elem.width() ? 100 : 400 ) );
	}
}

CSlideShow.prototype.EnsureImagesLoaded = function()
{
	var scrollLeft = this.m_$ScrolledArea.parent().scrollLeft();
	for ( var i = 0; i < this.m_children.length; ++i )
	{
		var elem = $J( this.m_children[i] );
		if ( elem.position().left <= scrollLeft + elem.width() )
		{
			this.LoadImage( elem );
		}
	}
}

CSlideShow.prototype.HighlightItem = function( elem, speed )
{
	this.m_activeElem = elem;
	this.LoadImage( elem );

	// scroll to it
	this.m_$ScrolledArea.parent().stop();
	this.m_$ScrolledArea.parent().animate(
		{
			'scrollLeft' : elem.position().left
		},
		speed
	);

	var nDuration = 400;
	this.m_slider.SetValue( elem.position().left, nDuration );

	// preload the next image
	var nextElem = elem.next( "." + this.m_itemClass );
	if ( nextElem.length )
	{
		this.LoadImage( nextElem );
	}

	this.StartTimer();
}

CSlideShow.prototype.LoadImage = function( elem )
{
	var imageData = this.m_rgSlideshowImageURLs[ elem.attr('id') ];
	var imageURL = imageData.imageURL;
	var imageID = imageData.imageID;

	var imageElem = $J( "#" + imageID );

	imageElem.attr( 'src', imageURL );
}

CSlideShow.prototype.Transition = function()
{
	if ( !this.m_activeElem )
	{
		return;
	}

	this.m_bInScroll = true;

	var nextElem = this.m_activeElem.next( "." + this.m_itemClass );
	if ( nextElem.length )
	{
		this.HighlightItem( nextElem, 400 );
	}
	else if ( this.m_children.length > 1 )
	{
		nextElem = $J( this.m_children[0] );
		this.HighlightItem( nextElem, 400 );
	}

	this.m_bInScroll = false;
}

CSlideShow.prototype.ScrollLeft = function()
{
	if ( !this.m_activeElem )
	{
		return;
	}
	this.m_bInScroll = true;

	var nextElem = this.m_activeElem.prev( "." + this.m_itemClass );
	if ( nextElem.length )
	{
		this.HighlightItem( nextElem, 400 );
	}
	else if ( this.m_children.length > 1 )
	{
		nextElem = $J( this.m_children[this.m_children.length-1] );
		this.HighlightItem( nextElem, 400 );
	}

	this.m_bInScroll = false;
}

CSlideShow.prototype.ScrollRight = function()
{
	this.Transition();
}

CSlideShow.prototype.StartTimer = function()
{
	// disabled in table mode
	var bUseGamepadScreenMode = window.UseGamepadScreenMode && window.UseGamepadScreenMode();
	if ( bUseGamepadScreenMode )
		return;

	this.ClearInterval();
	this.m_interval = window.setTimeout( this.Transition.bind( this ), 5000 );
}

CSlideShow.prototype.ClearInterval = function()
{
	if ( this.m_interval )
	{
		window.clearInterval( this.m_interval );
		this.m_interval = false;
	}
}

CSlideShow.prototype.StopCycle = function()
{
	this.ClearInterval();
}

CSlideShow.prototype.OnMouseOver = function( event )
{
	this.StopCycle();
}

CSlideShow.prototype.OnMouseOut = function( event )
{
	var reltarget = $J( event.relatedTarget );
	if ( reltarget.length && $J.contains( this.m_$ScrolledArea.parent()[0], reltarget[0] ) )
	{
		return;
	}

	this.StartTimer();
}

