"friends/ChatRoomDlgFriend.res"
{
	controls
	{
		"ChatRoomDlg"
		{
			"ControlName"		"CChatRoomDlg"
			"title"		"#Friends_Chat_Title"
		}
		"TextEntry"
		{
			"ControlName"		"TextEntry"
			"tabPosition"		"1"
			"editable"		"1"
			"maxchars"		"2048"
			"unicode"		"1"
			style="textentryfocus_chat"
		}
		"ChatHistory"
		{
			"ControlName"		"RichText"
			"maxchars"		"-1"
			"ScrollBar"		"1"
			style="ChatListPanel"
		}
		"SendButton"
		{
			"ControlName"		"Button"
			"tabPosition"		"2"
			"paintbackground"		"1"
			"labelText"		"#Friends_Chat_Send"
			"textAlignment"		"west"
			"Default"		"1"
			style="button"
		}
		"StatusLabel"
		{
			"ControlName"		"Label"
			"labelText"			""
		}
		"TitlePanel"
		{
			"ControlName"		"CFriendPanel"
			"zpos"		"-2"
			paintbackgroundenabled=0
			
		}
		"VoiceBar"
		{
			"ControlName"		"CVoiceBar"
		}
		"VoiceChat"
		{
			"ControlName"		"Button"
			style="controlbutton"
			minimum-width="120"
		}
		"GameInviteBar"
		{
			"ControlName"		"GameInviteBar"
		}
		"EmoticonButton"
		{
			"ControlName"		"CEmoticonButton"
		}
	}	

	styles
	{
	
		label
		{
		font-size=14
		}
		
		controlbutton
		{
			minimum-width=120
		}
		
		Textentryfocus_chat
		{
			// opaque bgcolor for rendering optimization during typing
			bgcolor=DialogBG
			render
			{
				// lines around
				0="fill( x0, y0, x0 + 1, y1, ButtonBorderDisabled )"
				1="fill(  x1 - 1, y0 + 1, x1, y1 - 1, ButtonBorderDisabled )"
				2="fill( x0 + 1, y0, x1, y0 + 1, ButtonBorderDisabled )"
				3="fill( x0, y1 - 1, x1, y1, ButtonBorderDisabled )"	
			}     

			font-size=16
		}

		CEmoticonButton
		{
			padding-left=4
			image="graphics/icon_emoticon"
			render_bg
			{
				// lines around
				0="fill( x0, y0, x0 + 1, y1, ButtonBorderDisabled )"
				1="fill(  x1 - 1, y0 + 1, x1, y1 - 1, ButtonBorderDisabled )"
				2="fill( x0 + 1, y0, x1, y0 + 1, ButtonBorderDisabled )"
				3="fill( x0, y1 - 1, x1, y1, ButtonBorderDisabled )"	
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

		GridMenu
		{
			font-size=16
		}
	}
	
	layout
	{
		place { control="VoiceChat,ChatActionsButton" y=6 width=36 margin-right=8 align=right spacing=8 dir=right }
		place { control="TitlePanel" margin-left=6 y=2 height=50 width=max margin-right=6 end-right=VoiceChat }
		place { control="VoiceBar" y=34 height=24 width=max margin-left=8 margin-right=52 }
		place { control="GameInviteBar,TradeInviteBar,ChatInfoBar,BIBar,BABar" height=54 }
		
		place { control="TradeInviteBar,GameInviteBar,ChatInfoBar,BIBar,BABar,ChatHistory" y=60 margin-left=8 margin-right=8 width=max height=max align=right dir=down margin-bottom=74 spacing=3 }

		region { name="chathistorybottom" y=60 margin-left=8 margin-right=8 width=max height=234 align=bottom margin-bottom=74 }
		
		region { name=bottomrow align=bottom height=76 }
		place { control="EmoticonButton,SendButton" region=bottomrow spacing=8 height=42 align=right margin-top=8 margin-right=8 }
		place { control="TextEntry" region=bottomrow end-right="EmoticonButton" height=42 width=max margin-right=8 margin-right=8 margin-left=8 margin-top=8 }
		place { control="StatusLabel" region=bottomrow align=bottom width=max margin-left=8 margin-bottom=7 }
	}
}
