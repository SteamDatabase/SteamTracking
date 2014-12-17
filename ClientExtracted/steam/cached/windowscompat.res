"public/windowscompat.res"
{
	controls
	{
		"WindowsCompatDialog" { ControlName="WindowsCompatDialog" fieldName="WindowsCompatDialog" wide="500" tall="240" AutoResize="0" visible="1" enabled="1" paintbackground="1" settitlebarvisible="1" title="#Steam_WindowsCompat_Title" }
		
		"Description" { ControlName="Label" fieldName="Description" wrap="1" }
		"SupportLink" { ControlName="URLLabel" labeltext="#Steam_WindowsCompat_SupportLinkDesc" URLText="#Steam_WindowsCompat_SupportLink" style="rightcolumnlink" fieldName="SupportLink" }
		"DontShowAgain" { ControlName="CheckButton" fieldName="DontShowAgain" }
		
		"ContinueBtn" { ControlName="Button" fieldName="ContinueBtn" labelText="#Steam_WindowsCompat_Continue" Command="ContinueSteam" Default="1" }
		"CloseSteamBtn" { ControlName="Button" fieldName="CloseSteamBtn" labelText="#Steam_WindowsCompat_CloseSteam" Command="CloseSteam" Default="0" }
	}
	
	layout
	{
		place { control="Description" margin-left=20 margin-right=20 margin-top=40 width=max }
		place { start="Description" control="SupportLink" dir=down margin-right=20 margin-top=20 }
		place { start="SupportLink" control="DontShowAgain" dir=down margin-right=20 margin-top=20 }
		
		place { control="CloseSteamBtn" align=bottom-right margin-right=20 margin-bottom=20 width=100 }
		place { start="CloseSteamBtn" control="ContinueBtn" align=bottom-right margin-bottom=20 margin-right=140 width=100 }
		
	}
}
