
var Cluster = Class.create( {
		cCapCount: 0,
		nCapWidth: 0,
		
		nCurCap: 0,
		bInScroll: false,
		bSuppressScrolling: false,
		nCapsulesToPreload: 1,
		bUseActiveClass: false,
		rgCapsToLoad: [],
		onChangeCB: null,
		
		initialize: function( args )
		{
			this.cCapCount = args.cCapCount;
			this.nCapWidth = args.nCapWidth;

			if ( args.bUseActiveClass ) {
				this.bUseActiveClass = true;
			}

			this.nCapsulesToPreload = args.nCapsulesToPreload || 1;
			
			this.elClusterArea = args.elClusterArea;
			this.elScrollArea = args.elScrollArea || this.elClusterArea.down('.cluster_scroll_area');
			this.elScrollLeftBtn = args.elScrollLeftBtn || this.elClusterArea.down('.cluster_control_left');
			this.elScrollRightBtn = args.elScrollRightBtn  || this.elClusterArea.down('.cluster_control_right');
			this.onChangeCB = args.onChangeCB;

			if ( !this.elScrollArea.style.left )
				this.elScrollArea.style.left = '0px';

			this.elSlider = args.elSlider;
			this.elHandle = args.elHandle || this.elSlider.down('.handle');
			
			this.elScrollLeftBtn.observe( 'click', this.scrollLeft.bindAsEventListener( this ) );
			this.elScrollRightBtn.observe( 'click', this.scrollRight.bindAsEventListener( this, false ) );

			this.elClusterArea.observe( 'mouseover', this.mouseOver.bindAsEventListener( this ) );
			this.elClusterArea.observe( 'mouseout', this.mouseOut.bindAsEventListener( this ) );

			this.rgCapsToLoad = $J(this.elScrollArea).find('.cluster_capsule');

			this.initSlider();
			this.ensureImagesLoaded();
			this.onCapsuleFullyVisible();
	     	
	     	Event.observe( window, 'dom:loaded', this.startTimer.bind( this ) );
		},

		setCaps: function( cCapCount, rgImageURLs )
		{
			this.cCapCount = cCapCount;
			this.rgCapsToLoad = $J(this.elScrollArea).find('.cluster_capsule');
			this.slider.dispose();
			this.initSlider();
			this.sliderOnSlide( 0 );
		},

		initSlider: function()
		{
			this.slider = new Control.Slider( this.elHandle, this.elSlider, {
				range: $R(0, this.nCapWidth * ( this.cCapCount - 1 ) ),
				sliderValue: 0,
				onSlide: this.sliderOnSlide.bind( this ),
				onChange: this.sliderOnChange.bind( this )
			});
		},

		startTimer: function()
		{
			this.clearInterval();
			this.interval = window.setInterval( this.scrollRight.bindAsEventListener( this, true ), 5000 );
		},

		clearInterval: function()
		{
			if ( this.interval )
			{
				window.clearInterval( this.interval );
				this.interval = false;
			}
		},

		mouseOver: function()
		{
			this.clearInterval();

			if ( this.bUseActiveClass )
			{
				var strLeftBtnId = this.elScrollLeftBtn.id;
				var strRightBtnId = this.elScrollRightBtn.id;
				var bInDeadZone = false;

				if ( window.event )
				{
					var ancestors = $( window.event.toElement ).ancestors();

					if ( $( window.event.toElement ).hasClassName( 'main_cap_content' ) )
					{
						bInDeadZone = true;
					}
				}
				else
				{
					var ancestors = [];
				}

				if ( !bInDeadZone && !ancestors.any( function( n ) { return n.id === strLeftBtnId || n.hasClassName( 'main_cap_content' ) } ) )
				{
					this.elScrollRightBtn.addClassName('active');
				}
				else
				{
					this.elScrollRightBtn.removeClassName('active');
				}

				if ( !bInDeadZone && !ancestors.any( function( n ) { return n.id === strRightBtnId || n.hasClassName( 'main_cap_content' ) } ) )
				{
					this.elScrollLeftBtn.addClassName('active');
				}
				else
				{
					this.elScrollLeftBtn.removeClassName('active');
				}
			}
			else
			{
				ShowWithFade( this.elScrollLeftBtn );
				ShowWithFade( this.elScrollRightBtn );
			}


		},

		mouseOut: function( event )
		{
	    	var reltarget = (event.relatedTarget) ? event.relatedTarget : event.toElement;
	    	if ( reltarget && $(reltarget).up( '#' + this.elClusterArea.id ) )
	    		return;

			if ( this.bUseActiveClass )
			{
				this.elScrollLeftBtn.removeClassName('active');
				this.elScrollRightBtn.removeClassName('active');
			}
			else
			{
				HideWithFade( this.elScrollLeftBtn );
				HideWithFade( this.elScrollRightBtn );
			}

    		this.startTimer();
		},
		
		scrollRight: function( event, bAutoScroll )
		{
			if ( this.bSuppressScrolling && bAutoScroll )
				return;
			this.nCurCap++;
			this.bInScroll = true;
			var nDuration = bAutoScroll ? 0.4 : 0.4;
			if ( this.nCurCap < this.cCapCount )
			{
				if ( this.elScrollArea.effect ) this.elScrollArea.effect.cancel();
				var cb = function() { this.onCapsuleFullyVisible() };
				this.elScrollArea.effect = new Effect.Morph( this.elScrollArea, { style: 'left: -' + (this.nCurCap * this.nCapWidth) + 'px;', duration: nDuration, fps: 60, afterFinish: cb.bind( this ) } );
			}
			else
			{							
				this.nCurCap = 0;
				if ( this.elScrollArea.effect ) this.elScrollArea.effect.cancel();
				var elScrollArea = this.elScrollArea;
				var cb = function(elScrollArea) { elScrollArea.style.left = '0px'; this.onCapsuleFullyVisible() };
				this.elScrollArea.effect = new Effect.Morph( this.elScrollArea, { style: 'left: -' + ( (this.cCapCount ) * this.nCapWidth) + 'px;', duration: nDuration, fps: 60, afterFinish: cb.bind( this, elScrollArea ) } );
			}
			this.slider.setValue( this.nCurCap * this.nCapWidth );
			this.ensureImagesLoaded();
			this.bInScroll = false;
		},
		
		scrollLeft: function()
		{
			this.nCurCap--;
			this.bInScroll = true;
			if ( this.nCurCap >= 0 )
			{
				if ( this.elScrollArea.effect ) this.elScrollArea.effect.cancel();
				var cb = function() { this.onCapsuleFullyVisible() };
				this.elScrollArea.effect = new Effect.Morph( this.elScrollArea, { style: 'left: -' + (this.nCurCap * this.nCapWidth) + 'px;', duration: 0.4, afterFinish: cb.bind( this ) } );
			}
			else
			{							
				this.nCurCap = this.cCapCount - 1;
				if ( this.elScrollArea.effect ) this.elScrollArea.effect.cancel();
				this.elScrollArea.style.left = '-' + ( ( this.cCapCount ) * this.nCapWidth ) + 'px';
				var cb = function() { this.onCapsuleFullyVisible() };
				this.elScrollArea.effect = new Effect.Morph( this.elScrollArea, { style: 'left: -' + ( ( this.cCapCount - 1 ) * this.nCapWidth) + 'px;', duration: 0.4, afterFinish: cb.bind( this ) } );
			}
			this.slider.setValue( this.nCurCap * this.nCapWidth );
			this.ensureImagesLoaded();
			this.bInScroll = false;
		},
		
		sliderOnSlide: function( value )
		{
			this.nCurCap = Math.round( value / this.nCapWidth );
			this.ensureImagesLoaded();
			
        	if ( this.elScrollArea.effect ) this.elScrollArea.effect.cancel();
        	this.elScrollArea.style.left = '-' + Math.round( value ) + 'px';
		},
		
		sliderOnChange: function( value )
		{
			if ( !this.bInScroll )
			{
				this.nCurCap = Math.round( value / this.nCapWidth );
		        var nSnapValue = this.nCurCap * this.nCapWidth;
		        if ( nSnapValue != value )
		        {
		        	this.slider.setValue( nSnapValue );
				}

				var nTravelDist = Math.abs( nSnapValue + parseInt( this.elScrollArea.style.left ) );
				if ( nTravelDist )
				{
					this.ensureImagesLoaded();
					var cb = function() { this.onCapsuleFullyVisible() };
		        	this.elScrollArea.effect = new Effect.Morph( this.elScrollArea, {style: 'left: -' + nSnapValue + 'px;', duration: Math.min( 0.8, Math.max( 0.2, nTravelDist / 2500 ) ), afterFinish: cb.bind( this ) } );
		        }
			}
		},

		ensureImagesLoaded: function()
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
		},

		onCapsuleFullyVisible: function()
		{
			if ( this.onChangeCB )
			{
				this.onChangeCB( this );
			}
		}
} );

var ButtonClusterControl = Class.create({

	nButtons: 0,
	nIndex: 0,
	nCapWidth: 0,

	elContainer: null,
	Parent: null,

	initialize: function( args )
	{
		this.elContainer = args.elContainer;
		this.nCapWidth = args.nCapWidth;
	},

	setValue: function( value )
	{
		value /= this.nCapWidth;
		this.elContainer.childElements().each(function(el, i) {
			if(i == value)
			{
				el.addClassName('active');
			} else {
				el.removeClassName('active');
			}
		});
	},

	getValue: function( )
	{
		this.elContainer.childElements().each(function(el, i) {
			if(el.hasClassName('active'))
				return i;
		});
	}


});

var ButtonCluster = Class.create(Cluster, {

	slider: null,

	initialize: function( args )
	{
		this.cCapCount = args.cCapCount;
		this.nCapWidth = args.nCapWidth;
		this.nCapsulesToPreload = args.nCapsulesToPreload || 1;

		this.elClusterArea = args.elClusterArea;
		this.elScrollArea = args.elScrollArea || this.elClusterArea.down('.cluster_scroll_area');
		this.elScrollLeftBtn = args.elScrollLeftBtn || this.elClusterArea.down('.cluster_control_left');
		this.elScrollRightBtn = args.elScrollRightBtn  || this.elClusterArea.down('.cluster_control_right');

		this.elClusterArea.observe( 'mouseover', this.mouseOver.bindAsEventListener( this ) );
		this.elClusterArea.observe( 'mouseout', this.mouseOut.bindAsEventListener( this ) );

		this.rgImages = args.rgImages || this.elClusterArea.select( 'img.cluster_capsule_image' );
		this.rgImageURLs = args.rgImageURLs || {};

		var elHandle = args.elHandle;

		args.elButtonContainer.childElements().each(
			(function(that) {
				return	(function(el, i) {

					var callback = function(cluster, i)
					{
						return (function(){
							cluster.nCurCap = i;
							cluster.scroll();
						});
					};

					el.observe('click', callback(that, i));
				});
			})(this)
		);


		var obj = this;

		this.slider = new ButtonClusterControl( {
			elContainer: args.elButtonContainer,
			nCapWidth: args.nCapWidth
		});

		Event.observe( window, 'load', this.startTimer.bind( this ) );
	},

	scrollRight: function( event, bAutoScroll )
	{
		this.nCurCap++;
		this.scroll( event, bAutoScroll );
	},

	scrollLeft: function()
	{
		this.nCurCap--;
		this.scroll(null, false);
	},

	scroll: function( event, bAutoScroll )
	{
		if ( this.bSuppressScrolling && bAutoScroll )
			return;

		this.bInScroll = true;
		var nDuration = bAutoScroll ? 0.2 : 0.2;

		if ( this.nCurCap > this.cCapCount )
			this.nCurCap = 0;

		if(this.nCurCap < 0)
			this.nCurCap = this.cCapCount;

		if ( this.elScrollArea.effect ) this.elScrollArea.effect.cancel();

		this.elScrollArea.newPosition = '-' + (this.nCurCap * this.nCapWidth) + 'px';

		this.elScrollArea.effect = new Effect.Fade(
			this.elScrollArea, {
				duration: nDuration,
				fps: 60,
				afterFinish: function( obj ) {
					obj.element.setStyle( { left: obj.element.newPosition } );
					obj.element.effect = new Effect.Appear(
						obj.element, {
							duration: nDuration,
							fps: 60
						}
					);
				}
			}
		);

		this.slider.setValue( this.nCurCap * this.nCapWidth );
		this.ensureImagesLoaded();
		this.bInScroll = false;
		this.startTimer();
	},

	mouseOver: function()
	{
		this.clearInterval();
	},

	mouseOut: function( event )
	{
		var reltarget = (event.relatedTarget) ? event.relatedTarget : event.toElement;
		if ( reltarget && $(reltarget).up( '#' + this.elClusterArea.id ) )
			return;

		this.startTimer();
	}
});

