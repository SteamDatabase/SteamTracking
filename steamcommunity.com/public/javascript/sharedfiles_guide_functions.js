
function IntervalDistance( amin, amax, bmin, bmax )
{
	return Math.max( 0, Math.max( bmin - amax, amin - bmax ) );
}

function CheckForVisibleYouTubeVideos()
{
	var videos = $$( 'div.sharedFilePreviewYouTubeVideo' );
	var scrollOffsets = document.viewport.getScrollOffsets();
	var docViewTop = scrollOffsets.top;
	var docViewBottom = docViewTop + document.viewport.getHeight();

	for ( var i = 0; i < videos.length; ++i )
	{
		var video = videos[i];
		var offsets = video.cumulativeOffset();
		var elemTop = offsets.top;
		var elemBottom = elemTop + video.getHeight();
		var bVisible = IntervalDistance( docViewTop, docViewBottom, elemTop, elemBottom ) == 0;
		if ( bVisible )
		{
			if ( video.embeddedVideo == null || typeof video.embeddedVideo == "undefined" )
			{
				var videoSizeImg = $J('<img/>', {src: 'https://community.cloudflare.steamstatic.com/public/shared/images/responsive/youtube_16x9_placeholder.gif', 'class': 'placeholder_img'});
				var videoSrc = "https://www.youtube.com/embed/" + video.id + "?showinfo=0&autohide=1&fs=1&hd=1&modestbranding=1&rel=0&showsearch=0&wmode=direct";
				video.embeddedVideo = new Element( 'iframe', { 'class' : video.classNames().toString(), 'src' : videoSrc, 'frameborder' : 0, 'allowfullscreen' : '1' } );
				$J(video).append( videoSizeImg, video.embeddedVideo );
			}
			video.embeddedVideo.show();
		}
		else
		{
			if ( video.embeddedVideo != null && typeof video.embeddedVideo != "undefined" )
			{
				//video.removeChild( video.embeddedVideo );
				//video.embeddedVideo = null;
				video.embeddedVideo.hide();
			}
		}
	}
}


function OnScrollChangeGuideSection()
{
	var rgSections = $$('div.subSection' );
	rgSections.push( $('-1') );

	// determine how much the user has scrolled and break up the pages into subsection ranges
	// and test to see if the user is "in" that section
	var docHeight = document.documentElement.scrollHeight;
	var currentScrollPercentage = GetCurrentScrollPercentage();

	for ( var i = 0; i < rgSections.length; ++i )
	{
		var section = rgSections[i];
		var offsets = section.cumulativeOffset();
		var elemTop = offsets.top;
		var elemBottom = elemTop + section.getHeight();
		var percentageTop = ( elemTop / docHeight ) * 100;
		var percentageBottom = ( elemBottom / docHeight ) * 100;
		var sectionID = section.id;
		var bSelectSection = false;
		if ( i == 0 && percentageTop >= currentScrollPercentage )
		{
			sectionID = '0';
			bSelectSection = true;
		}
		else if ( percentageTop <= currentScrollPercentage && percentageBottom >= currentScrollPercentage )
		{
			bSelectSection = true;
		}

		if ( bSelectSection  )
		{
			if ( sectionID != currentSectionID )
			{
				SelectGuideSection( sectionID, 'none' );
			}
			break;
		}
	}
}

function SelectGuideSection( sectionID, scrollType )
{
	var sectionElemID = "guideSectionSelection_" + sectionID;
	var rgChildElements = $( 'GuideTableOfContents').childElements().grep( new Selector( "div.guideSubSectionSelection" ) );
	for ( var i = 0; i < rgChildElements.length; i++ )
	{
		var elChild = rgChildElements[i];
		if ( elChild.id == sectionElemID )
			elChild.addClassName( 'selected' );
		else
			elChild.removeClassName( 'selected' );
	}

	switch ( scrollType )
	{
		case 'changeHash':
			if ( sectionID == '0' )
			{
				window.scrollTo( 0, 0 );
			}
			else
			{
				ScrollToIfNotInView( sectionID, 0, 60 );
			}
			break;
		case 'scrollTo':
			if ( sectionID == '0' )
			{
				$J('html, body').animate({scrollTop: 0 }, 'fast');
			}
			else
			{
				ScrollToIfNotInView( sectionID, 0, 60, 'fast' );
			}
			break;
	}

	currentSectionID = sectionID;
	SaveGuideSection( publishedfileid, sectionID );

	// fix for Chrome not painting the table of contents properly when it is fixed and changing the location.hash
	$('GuideTableOfContents').style.display = 'none';
	$('GuideTableOfContents').offsetHeight; // no need to store this anywhere, the reference is enough
	$('GuideTableOfContents').style.display = 'block';
}

