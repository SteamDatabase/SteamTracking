
$.Schedule( 0.0, function()
{
	var oContainer = $('#ContentGrid');
	if( !oContainer )
		return;

	$.RegisterEventHandler( 'Activated', oContainer, function( oTarget )
	{
		var eFileType = oTarget.GetAttributeInt( 'file-type', -1 );
		switch( eFileType )
		{
			case 3:
			case 5:
				ShowScreenshot( oTarget );
				break;

			case 4:
				DisplayVideo( oTarget );
				break;

			case 2:
			case 0:
			case 8:
			case 6:
			case 11:
			case 1:
			case 7:
			case 7:
			default:
				var nFileID = oTarget.GetAttributeInt( 'file-id', -1 );
				$.DispatchEvent( 'ShowWorkshopDetails', nFileID, true );
		}

	});

	$.RegisterEventHandler('ChildIndexSelected', oContainer, onChildIndexChanged );

	onChildIndexChanged( $('#ContentGrid'), 0 )

});

var g_bLoading = false;
var g_bMoreContent = true;
var g_nGridItemsPerPage = 16;
var g_nPage = 1;

function onChildIndexChanged( oPanel, nCurrentIndex )
{
	g_nGridItemsIndex = nCurrentIndex;

	if( g_bLoading || !g_bMoreContent )
		return;

	if( oPanel.GetChildCount() - nCurrentIndex > g_nGridItemsPerPage * 1.25 )
		return; // Don't load too far ahead

	g_bLoading = true;

	//if( g_rgSectionData[g_currentSection].page == 1 )
	$('#ContentLoading').AddClass('Visible');

	$.Msg("LOAD");

	$.AsyncWebRequest( g_strContentURL,
		{
			type: 'POST',
			data: {
				page: ++g_nPage,
				perpage: g_nGridItemsPerPage
			},
			success: function(rgData)
			{
				if( !rgData )
				{
					g_bMoreContent = false;
					return;
				}
				$('#ContentGrid').BCreateChildren( rgData );
			},

			complete: function()
			{
				g_bLoading = false;
				$('#ContentLoading').RemoveClass('Visible');
			}

		}
	);
}


var g_popup = false;
var g_oCurrentScreenshot = false;
//-----------------------------------------------------------------------------
// Purpose: Fullscreen popup used by AddScreenshotElements.
//-----------------------------------------------------------------------------
function ShowScreenshot( oSource )
{
	var strScreenshotTitle = oSource.GetAttributeString('file-title', '');
	var strScreenshotDesc = oSource.GetAttributeString('file-description', '');
	var strScreenshotURL = oSource.GetAttributeString('file-image-url', '');

	g_oCurrentScreenshot = oSource;

	var strLayout = '<root>' +
		'<styles>' +
		'<include src="file://{resources}/styles/steamstyles.css" />' +
		'<include src="file://{resources}/styles/msgbox.css" />' +
		'<include src="file://{resources}/styles/movie.css" />' +
		'<include src="https://steamcommunity-a.akamaihd.net/public/css/bigpicture/profile.css?v=valveisgoodatcaching&amp;l=english" />' +
		'<include src="https://steamcommunity-a.akamaihd.net/public/css/bigpicture/remote.css?v=valveisgoodatcaching" />' +
		'</styles>' +
		'<scripts>' +
		'<include src="https://steamcommunity-a.akamaihd.net/public/shared/javascript/bigpicture/base.js?v=valveisgoodatcaching&amp;l=english" />' +
		'<include src="https://steamcommunity-a.akamaihd.net/public/javascript/bigpicture/profile.js?v=valveisgoodatcaching&amp;l=english" />' +
		'</scripts>' +
		'<Button oncancel="CloseBigPicturePopup();" class="CommunityAppHubPopup CommunityAppHubScreenshotPopup"> ' +
		'<Panel id="CommunityAppHubPopupButton" class="FullscreenImagePopup">' +
		'<Image id="BackgroundImage" class="PopupBackgroundImage" scaling="stretch-to-fit-preserve-aspect" src="' + strScreenshotURL + '" />' +
		'<Image id="BackgroundImageNext" class="PopupBackgroundImage" scaling="stretch-to-fit-preserve-aspect" src="' + strScreenshotURL + '" />' +


		'<Panel id="ImageButton" >' +
		'<Image id="PreviewImage" scaling="stretch-to-fit-preserve-aspect" src="' + strScreenshotURL + '" />' +
		'</Panel>' +
		'<Panel id="PopupBottomBar">' +
		'<Panel class="PlaybackTitleGlow" ></Panel>' +
		'<Panel class="PlaybackTitleBackground">' +
		'<Label id="AppName" class="AppName" text="" />' +
		'<Label id="Title" class="Title" text="" />' +
		'</Panel>' +
		'</Panel>' +

		'</Panel>' +
		'</Button>' +
		'</root>';


	DisplayBigPicturePopup( strLayout, oSource,
		function ( bSuccess, panelid, popup )
		{
			if ( bSuccess )
			{
				var throbber = popup.FindChildTraverse("Throbber");
				var button = popup.FindChildTraverse("CommunityAppHubPopupButton");
				var image = popup.FindChildTraverse("PreviewImage");
				var title = popup.FindChildTraverse("Title");
				var appname = popup.FindChildTraverse("AppName");
				var bottom = popup.FindChildTraverse("PopupBottomBar");
				var target = popup.FindChildTraverse( "ImageButton" );

				g_popup = popup;

				title.text = strScreenshotTitle;
				appname.text = strScreenshotDesc;

				button.style.transform = 'translate3d( ' + popup.GetAttributeInt("x", 0) + 'px, ' + popup.GetAttributeInt("y", 0) + 'px, 0px )';
				//button.style.preTransformScale2d = '0.0';

				//$.DispatchEventAsync( 0.1, 'SetInputFocus', button );

				$.RegisterKeyBind( popup, 'pad_ltrigger,steampad_ltrigger,pad_left,key_left,steampad_stick1_left,pad_stick1_left', function() { ScreenshotChange(-1, popup); } );
				$.RegisterKeyBind( popup, 'pad_rtrigger,steampad_rtrigger,pad_right,key_right,steampad_stick1_right,pad_stick1_right', function() { ScreenshotChange(1, popup); } );

				$.RegisterKeyBind( popup, 'steampad_x,steampad_a,steampad_y,key_space,key_enter', function()
				{
					bottom.ToggleClass('Hide');
				});

				$.Schedule( 3, function()
				{
					bottom.AddClass('Hide');
				} );

				$.RegisterFooterButton( popup, 'pad_b', 'EXIT FULLSCREEN' );
				$.RegisterFooterButton( popup, 'pad_a', '' );

				$.RegisterEventHandler( 'PanelLoaded', image, function()
				{

					$.DispatchEventAsync( 0.1, 'SetInputFocus', target );

					throbber.AddClass( "LoadComplete" );

					button.style.opacity = 1;
					button.style.preTransformScale2d = '1.0';
					button.style.transform='translatex( 0px )';

					image.AddClass('ImageLoaded');



				} );

			}
		}
	);
}


//-----------------------------------------------------------------------------
// Purpose: Event used in the fullscreen image popup to cycle between
// next/previous images
//-----------------------------------------------------------------------------
function ScreenshotChange(nDelta, popup)
{
	var oSource = g_oCurrentScreenshot;
	var fnNextPanel = ( nDelta > 0 ) ? CPanelUtils.GetNextSibling : CPanelUtils.GetPreviousSibling
	var oTarget = fnNextPanel( oSource );

	if( !oTarget )
		return;

	g_oCurrentScreenshot = oTarget;

	var bg = g_popup.FindChildTraverse("BackgroundImage");
	bg.SetImage( oSource.GetAttributeString('file-image-url', '') );

	oTarget.SetFocus();

	var image = g_popup.FindChildTraverse("PreviewImage");
	var bgnext = g_popup.FindChildTraverse("BackgroundImageNext");
	var throbber = g_popup.FindChildTraverse("Throbber");
	var title = popup.FindChildTraverse("Title");
	var appname = popup.FindChildTraverse("AppName");

	throbber.RemoveClass('LoadComplete');

	g_popup.SetFocus();


	image.SetImage( oTarget.GetAttributeString('file-image-url', '') );
	bgnext.SetImage( oTarget.GetAttributeString('file-thumb-url', '') );
	appname.text =  oTarget.GetAttributeString('file-app-name', '');
	title.text = oTarget.GetAttributeString('file-description', '')


	bgnext.RemoveClass('Slide');
	image.RemoveClass('Slide');


	if( nDelta > 0 )
	{
		bgnext.style.transform = 'translatex( 1920px )';
		image.style.transform = 'translatex( 1920px )';
	}
	else
	{
		bgnext.style.transform = 'translatex( -1920px )';
		image.style.transform = 'translatex( -1920px )';
	}

	image.RemoveClass('ImageLoaded');


	bgnext.AddClass('Slide');
	image.AddClass('Slide');

	bgnext.style.transform='translatex( 0px )';
	image.style.transform='translatex( 0px )';

}



