"steam/cached/appdownloadpanel.res"
{
	"appdownloadpanel"
	{
		"ControlName"		"CAppDownloadPanel"
		"fieldName"		"appdownloadpanel"
		"xpos"		"0"
		"ypos"		"0"
		"wide"		"800"
		"tall"		"100"
		"PinCorner"		"0"
		"visible"		"1"
		"enabled"		"1"
		"tabPosition"		"0"
		"paintbackground"		"1"
	}
	"bgimage1"
	{
		"controlname"	"ImagePanel"
		"filedName"	"bgimage1"
		"xpos"		"0"
		"ypos"		"0"
		"wide"		"800"
		"tall"		"100"
		"AutoResize"		"3"
		"PinCorner"		"0"
		"visible"		"1"
		"enabled"		"1"
		"tabPosition"		"0"
		"paintbackground"		"1"
		"zpos" "-1"
		"fillcolor"		"black"
	}
	
	// top row
	
	"namelabel"
	{
		"ControlName"		"Label"
		"fieldName"		"namelabel"
		"xpos"		"16"
		"ypos"		"6"
		"wide"		"160"
		"tall"		"24"
		"visible"		"1"
		"enabled"		"1"
		"tabPosition"		"0"
		"paintbackground"		"1"
		"labelText"		"%name_upper%"
		"textAlignment"		"north-west"
		"flow_right"	"readylabel"
	}
	"readylabel"
	{
		"ControlName"		"Label"
		"fieldName"		"readylabel"
		"xpos"		"4"
		"ypos"		"6"
		"wide"		"160"
		"tall"		"24"
		"visible"		"1"
		"enabled"		"1"
		"tabPosition"		"0"
		"paintbackground"		"1"
		"labelText"		"#steam_downloads_ready"
		"textAlignment"		"north-west"
	}

	// second row
		
	"gameimage"
	{
		"controlname"	"ImagePanel"
		"filedName"	"gameimage"
		"xpos"		"10"
		"ypos"		"32"
		"wide"		"184"
		"tall"		"69"
		"AutoResize"		"0"
		"PinCorner"		"0"
		"visible"		"1"
		"enabled"		"1"
		"tabPosition"		"0"
		"paintbackground"		"1"
		"fillcolor"		"24 140 24 255"
	}
	"downloadcompletelabel"
	{
		"ControlName"		"Label"
		"fieldName"		"downloadcompletelabel"
		"xpos"		"200"
		"ypos"		"32"
		"wide"		"160"
		"tall"		"24"
		"visible"		"1"
		"enabled"		"1"
		"tabPosition"		"0"
		"paintbackground"		"1"
		"labelText"		"#steam_downloads_downloadcompleted"
		"textAlignment"		"north-west"
		"flow_right"	"downloadcompletefield"
	}
	"downloadcompletefield"
	{
		"ControlName"		"Label"
		"fieldName"		"downloadcompletefield"
		"xpos"		"4"
		"ypos"		"40"
		"wide"		"160"
		"tall"		"24"
		"visible"		"1"
		"enabled"		"1"
		"tabPosition"		"0"
		"paintbackground"		"1"
		"labelText"		"%time_completed%"
		"textAlignment"		"north-west"
	}
	
	// bottom row
	
	"sessiontotallabel"
	{
		"ControlName"		"Label"
		"fieldName"		"sessiontotallabel"
		"xpos"		"200"
		"ypos"		"60"
		"wide"		"160"
		"tall"		"24"
		"visible"		"1"
		"enabled"		"1"
		"tabPosition"		"0"
		"paintbackground"		"1"
		"labelText"		"#steam_downloads_sessiontotal"
		"textAlignment"		"north-west"
		"flow_right" "sessiontotalfield"
	}
	"sessiontotalfield"
	{
		"ControlName"		"Label"
		"fieldName"		"sessiontotalfield"
		"xpos"		"4"
		"ypos"		"40"
		"wide"		"160"
		"tall"		"24"
		"visible"		"1"
		"enabled"		"1"
		"tabPosition"		"0"
		"paintbackground"		"1"
		"labelText"		"%total_downloaded%"
		"textAlignment"		"north-west"
	}
	
	
	
	// right pane - hidden
	"graphpanel"
	{
		"ControlName"		"GraphPanel"
		"fieldName"		"graphpanel"
		"xpos"		"500"
		"ypos"		"40"
		"wide"		"288"
		"tall"		"80"
		"autoresize" "1"
		"visible"		"0"
		"enabled"		"1"
		"tabPosition"		"0"
		"paintbackground"		"1"
	}
}
