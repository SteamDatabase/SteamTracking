"friends/voicebar.res"
{
	controls
	{
		"VoiceBar"
		{
			"ControlName"		"CVoiceBar"
		}
		"micvolume"
		{
			"ControlName"		"CVoiceTraffic"
		}
		"SpeakerVolume"
		{
			"ControlName"		"CVoiceTraffic"
		}
		"action2"
		{
			"ControlName"		"Button"
			style="Chat_MenuButton_withChrome"
		}

		"StatusLabel"
		{
			"ControlName"		"Label"
			style="status_label"
		}
		"VoiceImage"
		{
			"ControlName"		"ImagePanel"
			style="voice_image"
		}
	}
	
	styles
	{
		settingsstyle
		{
			padding-top=4
		}
		
		status_label
		{
		inset="0 3 0 0"
		}
		voice_image
		{
		inset="0 -2 0 0"
		}
	}
	
	layout
	{
		place { control="action2" minimum-width="120" align=right }
		place { control="VoiceImage,StatusLabel,micvolume,speakervolume,action2" align=right spacing=8 margin=0  }
	}
}
