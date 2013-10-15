"steam/cached/GuestPassesDialog.res"
{

controls
	{
		"GuestPassesDialog"
		{
			"ControlName"		"CDialogGuestPasses"
			"fieldName"		"GuestPassesDialog"
			"xpos"		"1049"
			"ypos"		"676"
			"wide"		"540"
			"tall"		"392"
			"AutoResize"		"0"
			"PinCorner"		"0"
			"visible"		"1"
			"enabled"		"1"
			"tabPosition"		"0"
			"paintbackground"		"1"
			"settitlebarvisible"		"1"
			"title"		"#Steam_GuestPasses_Title"
		}
		"GuestPassesList"
		{
			"ControlName"		"ListPanel"
			"fieldName"		"GuestPassesList"
			"xpos"		"12"
			"ypos"		"100"
			"wide"		"514"
			"tall"		"242"
			"AutoResize"		"0"
			"PinCorner"		"0"
			"visible"		"1"
			"enabled"		"1"
			"tabPosition"		"1"
			"paintbackground"		"1"
		}
		"sendButton"
		{
			"ControlName"		"Button"
			"fieldName"		"SendButton"
			"xpos"		"416"
			"ypos"		"354"
			"wide"		"110"
			"tall"		"24"
			"AutoResize"		"0"
			"PinCorner"		"0"
			"visible"		"1"
			"enabled"		"0"
			"tabPosition"		"0"
			"paintbackground"		"1"
			"textAlignment"		"west"
			"wrap"		"0"
			"Default"		"0"
		}
		"LabelDescription"
		{
			"ControlName"		"Label"
			"fieldName"		"LabelDescription"
			"xpos"		"12"
			"ypos"		"31"
			"wide"		"514"
			"tall"		"66"
			"AutoResize"		"0"
			"PinCorner"		"0"
			"visible"		"1"
			"enabled"		"1"
			"tabPosition"		"0"
			"paintbackground"		"1"
			"labelText"		"#Steam_GuestPasses_Description"
			"textAlignment"		"west"
			"wrap"		"1"
		}
		"url"
		{
			"ControlName"		"URLLabel"
			"fieldName"		"URL"
			"xpos"		"12"
			"ypos"		"354"
			"wide"		"417"
			"tall"		"30"
			"AutoResize"		"0"
			"PinCorner"		"0"
			"visible"		"1"
			"enabled"		"1"
			"tabPosition"		"0"
			"paintbackground"		"1"
			"labelText"		"#Steam_GuestPasses_LinkText"
			"textAlignment"		"west"
			"wrap"		"1"
			"URLText"		"#Steam_GuestPasses_LinkURL"
		}
		"GuestPassContextMenu"
		{
			"ControlName"		"Menu"
			"fieldName"		"GuestPassContextMenu"
			"xpos"		"0"
			"ypos"		"0"
			"zpos"		"1"
			"wide"		"64"
			"tall"		"24"
			"AutoResize"		"0"
			"PinCorner"		"0"
			"visible"		"0"
			"enabled"		"1"
			"tabPosition"		"0"
			"paintbackground"		"1"
		}
	}
	
	styles
	{
		ListPanelSectionHeader
		{
			inset = "2 1 0 1"
		}
	}

}
