
function updateSyntaxHighlighting() {
	$J( '.documentation_bbcode .bb_code' ).each( function ( i, block ) {
		hljs.highlightBlock( block );
	});
}

function bindCollapseToggles() {
	$toggles = $J( '.collapse_toggle' );
	$toggles.addClass( 'collapse_toggle_transition' );
	$toggles.off( 'click' );
	$toggles.click( function() {
		$this = $J( this );
		$this.toggleClass( 'closed' );
		$this.parent().next().slideToggle( 200 );
		return false;
	});
}

function appendRenderedSectionsToNavTree() {
	// Don't append the sections to the tree if there's only one
	if ( $J( '.bb_section, .bb_subsection' ).length > 1 ) {
		var $sections = $J( '.bb_section' );
		$J( '#docNavigation .current' ).append( '<ul></ul>' );
		$J( '#docNavigation .current > a > span.icon_page' ).addClass( 'icon_shift_right collapse_toggle' );
		var $toc = $J( '#docNavigation .current ul' ).first();
		var tocItems = '';
		$sections.each( function ( i, header )
		{
			var $subsections = $J( header ).nextUntil( '.bb_section', '.bb_subsection' );
			var tocItem = '<li class="navSection"><a href="#' + header.firstChild.name + '"><span class="icon ' + ( $subsections.length > 0 ? 'icon_single_angle_right collapse_toggle closed' : '' ) + '"></span> <span>' + header.innerText + '</span></a>';
			if ( $subsections.length > 0 ) {
				tocItem += '<ul style="display: none;">';
				$subsections.each( function ( i, header )
				{
					tocItem += '<li><a href="#' + header.firstChild.name + '"><span class="icon"></span> <span>' + header.innerText + '</span></a></li>';
				} );
				tocItem += '</ul>';
			}
			tocItem += '</li>';
			tocItems += tocItem;
		} );

		$toc.prepend( tocItems );
	}

	bindCollapseToggles();
	updateSelectedSection();
}

var fmRemoveListeners = null;

function updateSelectedSection()
{
	if ( location.hash !== '' )
	{
				if ( EscapeHTML( location.hash ) !== location.hash )
			return;

		var $toc = $J( '#docNavigation .current ul' ).first();
		$toc.find( 'a' ).parents( 'li' ).removeClass( 'currentpath' );
		var $link = $toc.find( 'a[href=' + location.hash + ']' );
		$link.parents( 'li' ).addClass( 'currentpath' );

		if ( $link[0] )
		{
			if ( $link[ 0 ].scrollIntoViewIfNeeded )
				$link[ 0 ].scrollIntoViewIfNeeded();
			else
				$link[ 0 ].scrollIntoView( { behavior: "smooth" } );
		}

		var $section = $link.closest( 'li.navSection:has(span.icon_single_angle_right)' );

		if ( $section.length > 0 )
		{
			$section.find( 'span.icon_single_angle_right' ).removeClass( 'closed' );
			$section.find( 'ul' ).show();
		}

		if ( fmRemoveListeners != null )
			fmRemoveListeners();

		var $header = $J( 'a[name=' + location.hash.substr( 1 ) + ']' ).parent();
				if ( $header.length == 0 )
			return;

		var marginTop = parseInt( $header.css( 'marginTop' ) );
		var marginBottom = parseInt( $header.css( 'marginBottom' ) );

		var $next = $header.nextAll( '.bb_section, .bb_subsection' ).first();
		var $mainDocArea = $J( '#docMainContentArea .documentation_bbcode' );

		var $div = $J( '#hashLocationHighlight' );

		var updateLocationPosition = function()
		{
			$div.css( 'top', $header.position().top + marginTop );
			$div.css( 'left', $header.position().left - 7 );
			var height = 0;
			if ( $next.length > 0 )
				height = $next.position().top - $header.position().top - ( marginTop - marginBottom );
			else
				height = $mainDocArea.position().top + $mainDocArea.height() - $header.position().top - ( marginTop - marginBottom );

			$div.css( 'height', Math.min( height + 5, document.documentElement.clientHeight - $div[0].getBoundingClientRect().top - 10 ) );
			$div.css( 'width', $mainDocArea.width() + 7 );
		};
		window.addEventListener( 'resize', updateLocationPosition );
		window.addEventListener( 'scroll', updateLocationPosition, true );

		fmRemoveListeners = function() {
			window.removeEventListener( 'resize', updateLocationPosition );
			window.removeEventListener( 'scroll', updateLocationPosition );
		};
		$J( '#docTocHideControl' ).click( updateLocationPosition );
		updateLocationPosition();
		$J( '#docMainContentArea .documentation_bbcode' ).append( $div );
	}
}

$J( function() {
	// Restrict default languages to those we often use - other languages can still be picked with [code=lang]
	hljs.configure({
		languages: [ 'cpp', 'python', 'http', 'html', 'javascript', 'css' ],
	});

	$J( '#docTocHideControl' ).click( function() {
		$J( '#docToc, #docTocHideControl' ).toggleClass( 'closed' );
		document.cookie = "docTocClosed=" + $J( '#docToc' ).hasClass( 'closed' ) + '; path=/';
	} );

	updateSyntaxHighlighting();
});

