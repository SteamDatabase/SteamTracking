
function Cluster( args )
{
	this.nCurCap = 0;
	this.bInScroll = false;
	this.bSuppressScrolling = false;
	this.bUseActiveClass = false;
	this.rgCapsToLoad = [];
	this.onChangeCB = null;

	this.cCapCount = args.cCapCount;
	this.nCapWidth = args.nCapWidth;

	if ( args.bUseActiveClass ) {
		this.bUseActiveClass = true;
	}

	this.nCapsulesToPreload = args.nCapsulesToPreload || 1;

	this.elClusterArea = $JFromIDOrElement( args.elClusterArea );
	this.elScrollArea = args.elScrollArea ? $JFromIDOrElement( args.elScrollArea ) : this.elClusterArea.find('.cluster_scroll_area');
	this.elScrollLeftBtn = args.elScrollLeftBtn ? $JFromIDOrElement( args.elScrollLeftBtn ) : this.elClusterArea.find('.cluster_control_left');
	this.elScrollRightBtn = args.elScrollRightBtn ? $JFromIDOrElement( args.elScrollRightBtn ) : this.elClusterArea.find('.cluster_control_right');
	this.onChangeCB = args.onChangeCB;

	if ( !this.elScrollArea.css( 'left' ) )
		this.elScrollArea.css( 'left', '0px' );

	this.elSlider = $JFromIDOrElement( args.elSlider );
	this.elHandle = args.elHandle ? $JFromIDOrElement( args.elHandle ) : this.elSlider.find('.handle');

	var _this = this;
	this.elScrollLeftBtn.on( 'click', function( event ) { _this.scrollLeft( event ); } );
	this.elScrollRightBtn.on( 'click', function( event ) { _this.scrollRight( event, false ); } );

	this.elClusterArea.on( 'mouseover', function( event ) { _this.mouseOver( event ); } );
	this.elClusterArea.on( 'mouseout', function( event ) { _this.mouseOut( event ); } );

	this.rgCapsToLoad = $J(this.elScrollArea).find('.cluster_capsule');

	this.initSlider();
	this.ensureImagesLoaded();
	this.onCapsuleFullyVisible();

	$J( function() { _this.startTimer(); } );
}

Cluster.prototype.setCaps = function( cCapCount, rgImageURLs )
{
	this.cCapCount = cCapCount;
	this.rgCapsToLoad = $J(this.elScrollArea).find('.cluster_capsule');
	this.slider.SetRange( 0, this.nCapWidth * ( this.cCapCount - 1 ), 0 );
	this.sliderOnChange( 0, true );	// force back to the start
};

Cluster.prototype.initSlider = function()
{
	var _this = this;
	this.slider = new CSlider( this.elSlider, this.elHandle, {
		min: 0,
		max: this.nCapWidth * ( this.cCapCount - 1 ),
		value: 0,
		fnOnChange: function( value, bInDrag ) { _this.sliderOnChange( value, bInDrag ); }
	});
}

Cluster.prototype.startTimer = function()
{
	this.clearInterval();
	var _this = this;
	this.interval = window.setInterval( function() { _this.scrollRight( null, true ); }, 5000 );
}

Cluster.prototype.clearInterval = function()
{
	if ( this.interval )
	{
		window.clearInterval( this.interval );
		this.interval = false;
	}
}

Cluster.prototype.mouseOver = function( event )
{
	this.clearInterval();

	if ( this.bUseActiveClass )
	{
		var bInDeadZone = false;

		if ( event )
		{
			var ancestors = $J( event.toElement ).parents();

			if ( $J( event.toElement ).hasClass( 'main_cap_content' ) )
			{
				bInDeadZone = true;
			}
		}
		else
		{
			var ancestors = $J();
		}

		if ( !bInDeadZone && !ancestors.is( this.elScrollLeftBtn ) && !ancestors.is( '.main_cap_content' ) )
		{
			this.elScrollRightBtn.addClass('active');
		}
		else
		{
			this.elScrollRightBtn.removeClass('active');
		}

		if ( !bInDeadZone && !ancestors.is( this.elScrollRightBtn ) && !ancestors.is( '.main_cap_content' ) )
		{
			this.elScrollLeftBtn.addClass('active');
		}
		else
		{
			this.elScrollLeftBtn.removeClass('active');
		}
	}
	else
	{
		ShowWithFade( this.elScrollLeftBtn );
		ShowWithFade( this.elScrollRightBtn );
	}
}

Cluster.prototype.mouseOut = function( event )
{
	var reltarget = $J( event.relatedTarget );
	if ( reltarget.length && $J.contains( this.elClusterArea[0], reltarget[0] ) )
		return;

	if ( this.bUseActiveClass )
	{
		this.elScrollLeftBtn.removeClass('active');
		this.elScrollRightBtn.removeClass('active');
	}
	else
	{
		HideWithFade( this.elScrollLeftBtn );
		HideWithFade( this.elScrollRightBtn );
	}

	this.startTimer();
}

Cluster.prototype.scrollRight = function( event, bAutoScroll )
{
	if ( this.bSuppressScrolling && bAutoScroll )
		return;
	this.nCurCap++;
	this.bInScroll = true;
	var nDuration = 400;
	var bWrappedAround = false;

	var _this = this;
	this.elScrollArea.stop();
	if ( this.nCurCap < this.cCapCount )
	{
		var cb = function() { _this.onCapsuleFullyVisible() };
		this.elScrollArea.animate( { left: '-' + (this.nCurCap * this.nCapWidth) + 'px' }, nDuration, null, cb );
	}
	else
	{
		this.nCurCap = 0;
		bWrappedAround = true;
		var cb = function() { _this.elScrollArea.css( 'left', '0px' ); _this.onCapsuleFullyVisible() };
		this.elScrollArea.animate( { left: '-' + ( (this.cCapCount ) * this.nCapWidth) + 'px' }, nDuration, null, cb );
	}
	this.slider.SetValue( this.nCurCap * this.nCapWidth, bWrappedAround ? 0 : nDuration );
	this.ensureImagesLoaded();
	this.bInScroll = false;
}

Cluster.prototype.scrollLeft = function()
{
	this.nCurCap--;
	this.bInScroll = true;
	var nDuration = 400;
	var bWrappedAround = false;

	var _this = this;
	this.elScrollArea.stop();
	if ( this.nCurCap >= 0 )
	{
		var cb = function() { _this.onCapsuleFullyVisible() };
		this.elScrollArea.animate( { left: '-' + (this.nCurCap * this.nCapWidth) + 'px' }, nDuration, null, cb );
	}
	else
	{
		this.nCurCap = this.cCapCount - 1;
		bWrappedAround = true;
		this.elScrollArea.css( 'left', '-' + ( ( this.cCapCount ) * this.nCapWidth ) + 'px' );
		var cb = function() { _this.onCapsuleFullyVisible() };
		this.elScrollArea.animate( { left: '-' + ( ( this.cCapCount - 1 ) * this.nCapWidth) + 'px' }, nDuration, null, cb );
	}
	this.slider.SetValue( this.nCurCap * this.nCapWidth, bWrappedAround ? 0 : nDuration );
	this.ensureImagesLoaded();
	this.bInScroll = false;
}

Cluster.prototype.sliderOnChange = function( value, bInDrag )
{
	if ( bInDrag )
	{
		this.nCurCap = Math.round( value / this.nCapWidth );
		this.ensureImagesLoaded();

		this.elScrollArea.stop();
		this.elScrollArea.css( 'left', '-' + Math.round( value ) + 'px' );
	}
	else if ( !this.bInScroll )
	{
		this.nCurCap = Math.round( value / this.nCapWidth );
		var nSnapValue = this.nCurCap * this.nCapWidth;

		var nTravelDist = Math.abs( nSnapValue + parseInt( this.elScrollArea.css('left') ) );
		var nAnimationSpeed = Math.min( 0.8, Math.max( 0.2, nTravelDist / 2500 ) ) * 1000;

		if ( nSnapValue != value )
		{
			this.slider.SetValue( nSnapValue, nAnimationSpeed );
		}
		if ( nTravelDist )
		{
			this.ensureImagesLoaded();
			var _this = this;
			var cb = function() { _this.onCapsuleFullyVisible() };
			this.elScrollArea.animate( { left: '-' + nSnapValue + 'px' },  nAnimationSpeed, null, cb );
		}
	}
}

Cluster.prototype.ensureImagesLoaded = function()
{
	for ( var i = 0; i <= this.nCurCap + this.nCapsulesToPreload &&  i < this.rgCapsToLoad.length; i++ )
	{
		var elCap = this.rgCapsToLoad[i];
		if ( elCap )
		{
			$J(elCap).find( 'img[data-image-url]').each( function() {
				$J(this).attr('src', $J(this).data('imageUrl' ) );
			});
			this.rgCapsToLoad[i] = null;
		}
	}
}

Cluster.prototype.onCapsuleFullyVisible = function()
{
	if ( this.onChangeCB )
	{
		this.onChangeCB( this );
	}
}

if ( typeof Class != 'undefined' ) {
	var ButtonClusterControl = Class.create({

		nButtons: 0,
		nIndex: 0,
		nCapWidth: 0,

		elContainer: null,
		Parent: null,

		initialize: function (args) {
			this.elContainer = args.elContainer;
			this.nCapWidth = args.nCapWidth;
		},

		setValue: function (value) {
			value /= this.nCapWidth;
			this.elContainer.childElements().each(function (el, i) {
				if (i == value) {
					el.addClassName('active');
				} else {
					el.removeClassName('active');
				}
			});
		},

		getValue: function () {
			this.elContainer.childElements().each(function (el, i) {
				if (el.hasClassName('active'))
					return i;
			});
		}


	});

	var ButtonCluster = Class.create(Cluster, {

		slider: null,

		initialize: function (args) {
			this.cCapCount = args.cCapCount;
			this.nCapWidth = args.nCapWidth;
			this.nCapsulesToPreload = args.nCapsulesToPreload || 1;

			this.elClusterArea = args.elClusterArea;
			this.elScrollArea = args.elScrollArea || this.elClusterArea.down('.cluster_scroll_area');
			this.elScrollLeftBtn = args.elScrollLeftBtn || this.elClusterArea.down('.cluster_control_left');
			this.elScrollRightBtn = args.elScrollRightBtn || this.elClusterArea.down('.cluster_control_right');

			this.elClusterArea.observe('mouseover', this.mouseOver.bindAsEventListener(this));
			this.elClusterArea.observe('mouseout', this.mouseOut.bindAsEventListener(this));

			this.rgImages = args.rgImages || this.elClusterArea.select('img.cluster_capsule_image');
			this.rgImageURLs = args.rgImageURLs || {};

			var elHandle = args.elHandle;

			args.elButtonContainer.childElements().each(
				(function (that) {
					return (function (el, i) {

						var callback = function (cluster, i) {
							return (function () {
								cluster.nCurCap = i;
								cluster.scroll();
							});
						};

						el.observe('click', callback(that, i));
					});
				})(this)
			);


			var obj = this;

			this.slider = new ButtonClusterControl({
				elContainer: args.elButtonContainer,
				nCapWidth: args.nCapWidth
			});

			Event.observe(window, 'load', this.startTimer.bind(this));
		},

		scrollRight: function (event, bAutoScroll) {
			this.nCurCap++;
			this.scroll(event, bAutoScroll);
		},

		scrollLeft: function () {
			this.nCurCap--;
			this.scroll(null, false);
		},

		scroll: function (event, bAutoScroll) {
			if (this.bSuppressScrolling && bAutoScroll)
				return;

			this.bInScroll = true;
			var nDuration = bAutoScroll ? 0.2 : 0.2;

			if (this.nCurCap > this.cCapCount)
				this.nCurCap = 0;

			if (this.nCurCap < 0)
				this.nCurCap = this.cCapCount;

			if (this.elScrollArea.effect) this.elScrollArea.effect.cancel();

			this.elScrollArea.newPosition = '-' + (this.nCurCap * this.nCapWidth) + 'px';

			this.elScrollArea.effect = new Effect.Fade(
				this.elScrollArea, {
					duration: nDuration,
					fps: 60,
					afterFinish: function (obj) {
						obj.element.setStyle({left: obj.element.newPosition});
						obj.element.effect = new Effect.Appear(
							obj.element, {
								duration: nDuration,
								fps: 60
							}
						);
					}
				}
			);

			this.slider.setValue(this.nCurCap * this.nCapWidth);
			this.ensureImagesLoaded();
			this.bInScroll = false;
			this.startTimer();
		},

		mouseOver: function () {
			this.clearInterval();
		},

		mouseOut: function (event) {
			var reltarget = (event.relatedTarget) ? event.relatedTarget : event.toElement;
			if (reltarget && $(reltarget).up('#' + this.elClusterArea.id))
				return;

			this.startTimer();
		}
	});
}

