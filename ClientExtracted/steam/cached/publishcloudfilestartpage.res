"steam/cached/PublishCloudFileStartPage.res"
{
	controls
	{
		PublishCloudFileStartPage
		{
			"ControlName"		"CPublishCloudFileStartPage"
		}
		
		Label1
		{
			"ControlName"		"Label"
			"labelText"		"#Steam_PublishFile_Description"
		}
		
		Label2
		{
			"ControlName"		"Label"
			"labelText"		"#Steam_PublishFile_TitleLabel"
			style="TextEntryLabelStyle"
		}
		
		TitleTextEntry
		{
			"ControlName"		"TextEntry"
			"editable"		"1"
			"maxchars"		"128"
			"NumericInputOnly"		"0"
			"unicode"		"0"
		}
	
		Label3
		{
			"ControlName"		"Label"
			"labelText"		"#Steam_PublishFile_DescriptionLabel"
			style="TextEntryLabelStyle"
		}
		
		DescriptionLabel
		{
			"ControlName"		"TextEntry"
			"editable"		"1"
			"maxchars"		"256"
			"NumericInputOnly"		"0"
			"unicode"		"0"
		}	
		
		TargetAppLabel
		{
			"ControlName"		"Label"
			"labelText"		"#Steam_PublishFile_TargetAppLabel"
			style="TextEntryLabelStyle"
		}		

		TargetAppCombo
		{
			"ControlName"		"ComboBox"
			"AutoResize"		"0"
			"PinCorner"		"0"
			"wide" "400"
			"visible"		"1"
			"enabled"		"1"
			"editable"		"0"
			"maxchars"		"-1"
			"NumericInputOnly"		"0"
			"unicode"		"0"
		}	
	}

	styles
	{
		TextEntryLabelStyle
		{
			minimum-width=100
		}
	}
	
	layout
	{
		place { control="Label1" x=20 y=0 width=320 height=48 dir=right }
		place { control="TargetAppLabel,TargetAppCombo" x=20 y=40 margin-right=10 height=24 dir=right }
		place { control="Label2,TitleTextEntry" x=20 y=75 margin-right=10 height=24 width=max dir=right }
		place { control="Label3" x=20 y=110 height=24 width=max dir=right }
		place { control="DescriptionLabel" x=120 margin-right=10  y=110 height=96 width=max dir=right }
	}
}
