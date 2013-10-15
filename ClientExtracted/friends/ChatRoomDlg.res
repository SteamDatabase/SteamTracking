"friends/ChatRoomDlg.res"
{
	controls
	{
		"ChatRoomDlg"
		{
			"ControlName"		"CChatRoomDlg"
			"title"		"#Friends_Chat_Group_Title"
		}
		"TextEntry"
		{
			"ControlName"		"TextEntry"
			"tabPosition"		"1"
			"editable"		"1"
			"maxchars"		"2048"
			"unicode"		"1"
			style="Textentryfocus_chat"
		}
		"ChatHistory"
		{
			"ControlName"		"RichText"
			"maxchars"		"-1"
			"ScrollBar"		"1"
			style="listpanel"
		}
		"SendButton"
		{
			"ControlName"		"Button"
			"labelText"		"#Friends_Chat_Send"
			"Default"		"1"
		}
		"StatusLabel"
		{
			"ControlName"		"Label"
			"wrap"		"0"
		}
		"VoiceBar"
		{
			"ControlName"		"CVoiceBar"
		}
		"TitlePanel"
		{
			"ControlName"		"CChatTitlePanel"
			"zpos"		"-2"
			width=400
		}
		"UserList"
		{
			"ControlName"		"CFriendsListSubPanel"
			style="FriendsList"
			"linespacing"		"50"
			wide=200
		}
		"Splitter"
		{
			"ControlName"		"CChatSplitter"
			resizepanel="UserList"
			zpos=1
		}
		"VoiceChat"
		{
			"ControlName"		"Button"
			style="Chat_MenuButton_withChrome"
			
		}
		"EmoticonButton"
		{
			"ControlName"		"CEmoticonButton"
		}
	}
		
	styles
	{
		CChatRoomDlg
		{			
			bgcolor="DialogBG"
			render_bg
			{
				0="fill( x0, y0, x1, y0+21, DialogBG )"	
			}

		}	
		

		
		"Textentryfocus_chat"
		{
			render
			{
				// lines around
				0="fill( x0, y0 + 1, x0 + 1, y1 - 1, ButtonBorderDisabled )"
				1="fill(  x1 - 1, y0 + 1, x1, y1 - 1, ButtonBorderDisabled )"
				2="fill( x0 + 1, y0, x1 - 1, y0 + 1, ButtonBorderDisabled )"
				3="fill( x0 + 1, y1 - 1, x1 - 1, y1, ButtonBorderDisabled )"

				// single pixel fills in the corners
				4="fill( x0 + 1, y0 + 1, x0 + 2, y0 + 2, ButtonBorderDisabled )"
				5="fill( x1 - 2, y0 + 1, x1 - 1, y0 + 2, ButtonBorderDisabled )"
				6="fill( x0 + 1, y1 - 2, x0 + 2, y1 - 1, ButtonBorderDisabled )"
				7="fill( x1 - 2, y1 - 2, x1 - 1, y1 - 1, ButtonBorderDisabled )"
				11="fill( x0, y0 + 1, x0 + 1, y0 + 2, ButtonBorderDisabled2 )"
				12="fill( x1 - 1, y0 + 1, x1, y0 + 2, ButtonBorderDisabled2 )"
				13="fill( x0, y1 - 2, x0 + 1, y1 - 1, ButtonBorderDisabled2 )"
				14="fill( x1 - 1, y1 - 2, x1, y1 - 1, ButtonBorderDisabled2 )"
				15="fill( x0 + 1, y0, x0 + 2, y0 + 1, ButtonBorderDisabled2 )"
				16="fill( x1 - 2, y0, x1 - 1, y0 + 1, ButtonBorderDisabled2 )"
				17="fill( x0 + 1, y1 - 1, x0 + 2, y1, ButtonBorderDisabled2 )"
				18="fill( x1 - 2, y1 - 1, x1 - 1, y1, ButtonBorderDisabled2 )"
				
			}
			font-size=16
		}	
		
		CChatActionsButton
		{
			image="graphics/mega_btn_off"
		}
		
		CChatActionsButton:hover
		{
			image="graphics/mega_btn_on"
		}

		CChatActionsButton:selected
		{
			image="graphics/mega_btn_on"
		}

		CEmoticonButton
		{
			padding-left=4
			image="graphics/icon_emoticon"
			render_bg
			{
				// lines around
				1="fill( x0 + 2, y0, x1 - 2, y0 + 1, ButtonBorder )"  // top
				2="fill( x0 + 2, y1 - 1, x1 - 2, y1, ButtonBorder )"  // bottom
				3="fill( x0, y0 + 2, x0 + 1, y1 - 2, ButtonBorder )"  // left
				4="fill( x1 - 1, y0 + 2, x1, y1 - 2, ButtonBorder )"  // right
	
				// single pixel fills in the corners
				5="fill( x0 + 1, y0 + 1, x0 + 2, y0 + 2, ButtonBorder )"
				6="fill( x1 - 2, y0 + 1, x1 - 1, y0 + 2, ButtonBorder )"
				7="fill( x0 + 1, y1 - 2, x0 + 2, y1 - 1, ButtonBorder )"
				8="fill( x1 - 2, y1 - 2, x1 - 1, y1 - 1, ButtonBorder )"
				9="fill( x0, y0 + 1, x0 + 1, y0 + 2, ButtonFace2 )"
				10="fill( x1 - 1, y0 + 1, x1, y0 + 2, ButtonFace2 )"
				11="fill( x0, y1 - 2, x0 + 1, y1 - 1, ButtonFace2 )"
				12="fill( x1 - 1, y1 - 2, x1, y1 - 1, ButtonFace2 )"
				13="fill( x0 + 1, y0, x0 + 2, y0 + 1, ButtonFace2 )"
				14="fill( x1 - 2, y0, x1 - 1, y0 + 1, ButtonFace2 )"
				15="fill( x0 + 1, y1 - 1, x0 + 2, y1, ButtonFace2 )"
				16="fill( x1 - 2, y1 - 1, x1 - 1, y1, ButtonFace2 )"
			}
		}

		CEmoticonButton:hover
		{
			image="graphics/icon_emoticon_hover"
		}

		CEmoticonButton:selected
		{
			image="graphics/icon_emoticon_hover"
		}

		EmoticonMenuItemStyle
		{
			font-size=24
			bgcolor=none
		}
		
		EmoticonMenuItemStyle:hover
		{
			textcolor=white
			bgcolor=none
		}
		
		EmoticonMenuItemStyle:selected
		{
			textcolor=white
			bgcolor=none
		}
	}
	
	layout
	{
		place { control="VoiceChat,ChatActionsButton" y=6 width=36 margin-right=8 align=right spacing=8 dir=right }
		place { control="TitlePanel" margin-left=6 y=2 height=50 width=600 margin-right=6 end-right=VoiceChat }
		
		place { control="Splitter" width=6 }
		place { control="Splitter,UserList" align=right y=60 height=max margin-right=5 margin-bottom=76 }
		place { control="VoiceBar" y=34 height=24 width=max margin-left=8 margin-right=52 }
		place { control="ChatHistory" y=60 margin-left=8 margin-right=8 width=max height=max align=right dir=down margin-bottom=74 end-right=UserList }
		
		region { name=bottomrow align=bottom height=76 }
		place { control="EmoticonButton,SendButton" region=bottomrow spacing=8 height=42 align=right margin-top=8 margin-right=8 }
		place { control="TextEntry" region=bottomrow end-right="EmoticonButton" height=42 width=max margin-right=8 margin-right=8 margin-left=8 margin-top=8 }
		place { control="StatusLabel" region=bottomrow align=bottom width=max margin-left=8 margin-bottom=7 }
	}
}
