"steam/cached/PublishCloudFileCompletionPage.res"
{
	controls
	{
		PublishCloudFileCompletionPage
		{
			"ControlName"		"CPublishCloudFileCompletionPage"
		}

		LabelProgress
		{
			"ControlName"		"Label"
			"labelText"		"#Steam_PublishFile_Progress"
			"wrap"		"1"
		}

		LabelSuccess
		{
			"ControlName"		"Label"
			"labelText"		"#Steam_PublishFile_Success"
			"wrap"		"1"
			"visible" "0"
		}
		
		LabelSuccess2
		{
			"ControlName"		"Label"
			"labelText"		"#Steam_PublishFile_Success"
			"wrap"		"1"
			"visible" "0"
			style="LabelSuccess2Style"
		}
		
		LabelFailed
		{
			"ControlName"		"Label"
			"labelText"		"#Steam_PublishFile_Failed"
			"visible" "0"
		}
	}

	styles
	{
		LabelSuccess2Style
		{
			padding-top=10
		}
	}
	
	layout
	{
		place { control="LabelProgress" x=20 y=20 margin-right=20 width=max }
		place { control="LabelSuccess,LabelSuccess2" x=20 y=20 margin-right=20 width=max dir=down }
		place { control="LabelFailed" x=20 y=20 margin-right=20 width=max }
	}
}
