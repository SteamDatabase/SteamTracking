"friends/broadcastapprovebar.res"
{
	colors
	{
		invitebg="163 160 153 255"
	}

	controls
	{
		"BABar"			{	ControlName="BABar"	}
		"InviteLabel"		{	ControlName="Label"		labeltext="#Friends_BroadcastApprove"	mouseinputenabled=0		}
		"GameLabel"		{	ControlName="Label"		labeltext="%game%"						mouseinputenabled=0		}
		"ApproveLabel"		{	ControlName="URLLabel"		labeltext="#Friends_BroadcastApprove_Approve"	}
		"OrLabel"		{	ControlName="Label"		labeltext="#Friends_BroadcastApprove_Or"	}
		"IgnoreLabel"		{	ControlName="URLLabel"		labeltext="#Friends_BroadcastApprove_Ignore"	}
		"InviteImage"		{	ControlName="ImagePanel" image="resource/invite"				mouseinputenabled=0		}
		"CloseButton"		{	ControlName="Button"	labeltext="X"	command="Close"	}
	}
	
	styles
	{
		CBroadcastApproveBar
		{
			render_bg {
				0="fill( x0, y0 + 2, x1, y1 - 2, invitebg )"		// fill the center
				1="fill( x0 + 2, y0, x1 - 2, y0 + 2, invitebg )"	// top
				2="fill( x0 + 2, y1 - 2, x1 - 2, y1, invitebg )"	// bottom

				3="fill4( x0 + 1, y0 + 1, x0 + 2, y0 + 2, invitebg )"	// top-left
				4="fill4( x0 + 1, y0, x0 + 2, y0 + 1, invitebg, 127 )"	// 
				5="fill4( x0, y0 + 1, x0 + 1, y0 + 2, invitebg, 127 )"	// 
			}
		}
		
		Button
		{
			render {}
			render_bg { }
			bgcolor=none
			font-style=none
		}
		
		Label
		{
			textcolor="41 41 40 255"
		}
		
		Button
		{
			textcolor="41 41 40 255"
		}
		Button:hover
		{
			textcolor=white
		}
		
		URLLabel
		{
			textcolor="41 41 40 255"
		}
	}
	
	layout
	{
		place { control="InviteImage" x=2 y=2 width=50 height=50 }
		place { control="InviteLabel,GameLabel,ApproveLabel" dir=down spacing=2 margin-top=6 margin-right=2 margin-left=60 }
		place {control="OrLabel,IgnoreLabel" dir=right spacing=4 start=ApproveLabel margin-left=4 margin-top=0 margin-right=0 }
		place { control="CloseButton" align=right margin=0 width=20 height=20 }
	}
}
