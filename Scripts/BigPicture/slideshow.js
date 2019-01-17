
var g_LastSlideshowXML = '';
function SetSlideShowXML( strBase64XML )
{
	//$.Msg( "SetSlideShowXML( " + strBase64XML + " )" );
	g_LastSlideshowXML = $.base64.atob( strBase64XML, true );
}

function ShowScreenshotSlideshow( defaultFocus, strClass )
{
	//$.Msg( "ShowScreenshotSlideshow( " + defaultFocus + " )" );
	strXML = g_LastSlideshowXML;
	strXML = strXML.replace( 'defaultfocus=""', 'defaultfocus="'+defaultFocus+'"' );

	slideShow = $.CreatePanel( 'Panel', $.TenfootController( $.GetContextPanel() ).AccessMainMenu(), 'ScreenshotSlideshow' );
	slideShow.AddClass( strClass );
	$.RegisterEventHandler( 'LoadAsyncComplete', slideShow, function( pPanel, bSuccess, eDetail, bPartial )
	{
		pPanel = ToPanel( pPanel );
		if ( pPanel.id != slideShow.id )
		{
			return;
		}

		if ( bSuccess )
			$.DispatchEventAsync( 0.04, 'SetInputFocus', slideShow.FindChildTraverse( 'slideshow_contents' ) );
		else
		{
			slideShow.AddClass( "Destructing" );
			$.DispatchEvent( 'MessageBoxClose', slideShow );
			slideShow.DeleteAsync( 0.4 );
		}
	} );
	slideShow.LoadLayoutFromStringAsync( strXML, true, false );
	$.TenfootController( $.GetContextPanel() ).ShowModalDialog( slideShow, '' );
}



function RegisterSlideshowSSEvents( idbutton, idimage, imagesrc )
{
	//$.Msg( "RegisterSlideshowSSEvents( " + idbutton + ", " + idimage + ", " + imagesrc );

	var p = $("#"+idbutton);
	$.RegisterFooterButton( p, 'pad_b', 'EXIT FULLSCREEN' ); 
	$.RegisterFooterButton( p, 'pad_a', '' ); 

	var pImage = $("#"+idimage);
	$.RegisterEventHandler( "StyleClassesChanged", p, function()
	{
		if ( p.BHasClass( "SlideShowFocus" ) || p.BHasClass( "SlideShowLeftOfFocus2" ) || p.BHasClass( "SlideShowLeftOfFocus1" )
			 || p.BHasClass( "SlideShowRightOfFocus1" ) || p.BHasClass( "SlideShowRightOfFocus2" ) || p.BHasClass( "SlideShowRightOfFocus3" ) )
		{
			pImage.SetImage( imagesrc );
		}
		else
		{
			pImage.SetImage( "" );
		}
	} );
}

function RegisterCarouselSSEvents( idbutton, idimage, imagesrc, bSpoilers )
{
	//$.Msg( "RegisterCarouselSSEvents( " + idbutton + ", " + idimage + ", " + imagesrc + ", " + bSpoilers );

	var p = $("#"+idbutton);
	$.RegisterFooterButton( p, 'pad_a', 'VIEW FULLSCREEN' ); 
	$.RegisterFooterButton( p, 'pad_b', '' ); 
	if ( bSpoilers )
	{
		$.RegisterKeyBind( p, 'pad_y,steampad_y,key_y', function() { $.DispatchEvent( 'ToggleStyle', p, 'HideSpoiler' ); } );
		$.RegisterFooterButton( p, 'pad_y', 'TOGGLE SPOILER' ); 
	}	

	var pImage = $("#"+idimage);
	$.RegisterEventHandler( "StyleClassesChanged", p, function()
	{
		var bVisible = p.BHasClass( "Focused" );

		var i = 0;
		while ( !bVisible && i <= g_nSlideShowVisibleLeftOfFocus )
		{
			bVisible = p.BHasClass( "LeftOfFocus" + i );
			i++;
		}

		i = 0;
		while ( !bVisible && i <= g_nSlideShowVisibleRightOfFocus )
		{
			bVisible = p.BHasClass( "RightOfFocus" + i );
			i++;
		}

		pImage.SetImage( bVisible ? imagesrc : "" );
	} );
}
