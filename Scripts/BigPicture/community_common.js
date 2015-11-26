
function DisplayYouTubeVideo( videoURL, panelid )
{
	DebugOut( $.GetContextPanel().id + ": DisplayYouTubeVideo( " + videoURL + ", " + panelid + " )" );

	var layout = '<root> \
					<styles> \
						<include src="file://{resources}/styles/steamstyles.css" /> \
						<include src="file://{resources}/styles/community/community.css" /> \
						<include src="file://{resources}/styles/movie.css" /> \
						<include src="https://steamcommunity-a.akamaihd.net/public/css/bigpicture/apphub.css?v=valveisgoodatcaching" /> \
					</styles> \
					<scripts> \
						<include src="https://steamcommunity-a.akamaihd.net/public/shared/javascript/bigpicture/base.js?v=valveisgoodatcaching&amp;l=english" /> \
					</scripts> \
					<Panel oncancel="CloseBigPicturePopup();" class="CommunityAppHubPopup CommunityAppHubScreenshotPopup"> \
						<Button id="CommunityAppHubPopupButton" > \
							<HTML id="CommunityAppHubPopupVideoBrowser" embedded="true" /> \
						</Button> \
					</Panel> \
				</root>';

	var currentInstance = 0;
	function ScheduleHideFooter( panel, instance )
	{
		$.Schedule( 2, function()
		{
			$.Msg( "Hide footer " + instance + " ==? " + currentInstance );
			if ( instance == currentInstance && panel.IsValid() )
			{
				$.Msg( "Hiding footer" );
				panel.AddClass( "HideFooter" );
				$.DispatchEvent( 'QueuedInvalidateFooterPanel' );
			}
		} );
	}

	function ShowFooter( panel )
	{
		var instance = ++currentInstance;
		panel.RemoveClass( "HideFooter" );
		$.DispatchEvent( 'QueuedInvalidateFooterPanel' );
		ScheduleHideFooter( panel, instance );
	}

	DisplayBigPicturePopup(
		layout,
		panelid,
		function ( bSuccess, panelid, popup ) {
			if ( bSuccess )
			{
				var throbber = popup.FindChildTraverse( "Throbber" );
				var browser = popup.FindChildTraverse( "CommunityAppHubPopupVideoBrowser" );
				var button = popup.FindChildTraverse( "CommunityAppHubPopupButton" );

				button.style.transform = 'translate3d( ' + popup.GetAttributeInt( "x", 0 ) + 'px, ' + popup.GetAttributeInt( "y", 0 ) + 'px, 0px )';
				button.style.preTransformScale2d = '0.0';

				if ( browser )
				{
					browser.SetURL( videoURL );

					$.RegisterEventHandler( 'PanelLoaded', browser, function()
					{
						DebugOut( "Browser loaded" );

						throbber.AddClass( "LoadComplete" );
						{
							button.style.opacity = 1;
							button.style.preTransformScale2d = '1.0';
							button.style.transform='translatex( 0px )';
						};

						$.DispatchEventAsync( 0.1, 'SetInputFocus', button );

						$.RegisterKeyBind( button, 'pad_a,steampad_a', function() {	browser.RunJavascript( "toggleVideoPlayback();" ); } );
						$.RegisterFooterButton( button, "pad_a", "PLAY/PAUSE" );

						$.RegisterKeyBind( button, 'pad_ltrigger,steampad_ltrigger', function() {	browser.RunJavascript( "rewindVideo();" ); } );
						$.RegisterKeyBind( button, 'pad_ltrigger(up),steampad_ltrigger(up)', function() {	browser.RunJavascript( "stopSeek();" ); } );

						$.RegisterKeyBind( button, 'pad_rtrigger,steampad_rtrigger', function() { browser.RunJavascript( "fastForwardVideo();" ); } );
						$.RegisterKeyBind( button, 'pad_rtrigger(up),steampad_rtrigger(up)', function() { browser.RunJavascript( "stopSeek();" ); } );

						$.RegisterKeyBind( button, 'pad_up,key_up,steampad_dpad_up,steampad_stick1_up,pad_stick1_up', function() { ShowFooter( popup ); } );

						$.RegisterEventHandler( 'ContributeToFooterPanel', popup,
							function( pPanel, pFooter )
							{
								$.Msg( 'ContributeToFooter' );
								if ( popup.BHasClass( "HideFooter" ) )
								{
									$.Msg( 'ContributeToFooter - HideFooter' );
									pFooter.HideAllPanels();
								}
								return true;
							}
						);

						ScheduleHideFooter( popup, currentInstance );
					} );
				}
			}
		}
	);
}

