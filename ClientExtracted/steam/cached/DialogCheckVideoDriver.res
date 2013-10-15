"steam/cached/DialogCheckVideoDriver.res"
{
	controls
	{
		DialogCheckVideoDriver
		{
			ControlName		CDialogCheckVideoDriver
			wide			460
			tall			200
			title			"#Steam_CheckForVideoDriverUpdates_Title"
		}
		ProgressBar
		{
			ControlName		ProgressBar
		}
		CloseButton
		{
			ControlName		Button
			labelText		"#vgui_close"
			Command			Close
		}
		InstallNowButton
		{
			ControlName		Button
			visible			0
			labelText		"#Steam_InstallVideoDriverNow"
			Command			Install
			Default			0
		}
		BytesDownloaded
		{
			ControlName		Label
			labelText		""
			fieldName		BytesDownloaded
			xpos			30
			ypos			90
			wide			400
			tall			24
			AutoResize		0
			PinCorner		0
			visible			1
			enabled			1
			tabPosition		0
			paintbackground	1
			textAlignment	east
			wrap			0
		}
	}
	
	layout
	{
		place { control=DialogCheckVideoDriver width=460 height=518 }
		place { control=ProgressBar x=24 y=115 width=408 height=24 }
		place { control=InfoLabel x=24 y=30 width=408 height=40 }
		place { control=InstallNowButton,CloseButton align=right x=24 y=146 height=24 width=100 spacing=5 margin-right=28 }

	}
}
