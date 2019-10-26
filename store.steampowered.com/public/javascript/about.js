
$J( document ).ready(
	function( )
	{
		console.log('ready');

		function elFadeIn(selected_el)
		{
			var windowHeight = $J( window ).height();
			$J( selected_el ).each(
				function()
				{
					var thisPos = $J( this ).offset().top;
					var topOfWindow = $J( window ).scrollTop();

					if ( topOfWindow + windowHeight - 200 > thisPos )
					{
						$J( this ).find( 'img:not(.visible)' ).each(
							function(idx, img)
							{
								$J(img).addClass('visible');
							}
						);
					}
				}
			);
		}

		var $slick_slider = $J( '#about_steam_features_grid' );

		var settings = {
			centerMode: true,
			centerPadding: '10vw',
			slidesToShow: 1,
			dots: true,
			arrows: false,
			infinite: true
		}

		if ( $J( window ).width() < 750 )
		{
			$slick_slider.slick( settings ).on(
				'setPosition',
				function ( event, slick )
				{
					slick.$slides.css( 'height', slick.$slideTrack.height() + 'px ');
				}
			);
		}

		$J( window ).on(
			'resize',
			function()
			{
				if ( $J( window ).width() > 750 )
				{
					if ( $slick_slider.hasClass( 'slick-initialized' ) )
					{
						$slick_slider.slick( 'unslick' ).off();
						$J( '#about_steam_features_grid .feature' ).css( 'height', 'auto' );
					}

					return;
				}

				if ( !$slick_slider.hasClass( 'slick-initialized' ) )
				{
					return $slick_slider.slick( settings ).on(
						'setPosition',
						function ( event, slick )
						{
							slick.$slides.css('height', slick.$slideTrack.height() + 'px');
						}
					)
				}
			}
		);


		$J( ".smooth_scroll" ).click(
			function( event )
			{
				event.preventDefault();
				$J( 'html,body' ).animate(
					{
						scrollTop: $J( this.hash ).offset().top
					},
					1000
				);
			}
		);

		$J (window ).on(
			'scroll resize',
			function()
			{
				elFadeIn( '#about_ctas_area .cta_hero' );
			}
		);

		elFadeIn( '#about_ctas_area  .cta_hero' );

		if ( $J( window ).width() > 750 )
		{
			var rellax = new Rellax(
				'.game_image',
				{
					center: true,
					callback: function()
					{
						elFadeIn( '.game_image' );
					}
				}
			);
		}
	}
);