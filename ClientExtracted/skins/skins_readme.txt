This is a primer on how to create skins for Steam. The information below is extracted from the Valve internal document on how to edit, so it may in some cases be wrong or reference tools that don't exist.

To make a skin, you need to take a copy of resource/styles/steam.styles file and copy it to skins/<your skin name here>/resource/styles/steam.styes. The existance of that file will make Steam put that skin as an option in the settings->interface dialog (Steam will need to be restarted for it to show). From there you can start editing. 
You can put new files or existing steam files you want to replace under your skins folder. Good luck!


== Tools ==

Hitting 'F6' key when running the Steam client toggles the VGUI editing dialog. You need to run Steam with the '-dev' command line parameter to have this work (running with -dev makes the Steam client run slower). When enabled, no other dialog can be interacted with; instead you can selected controls on any active dialog and get details on the selection. 

There are several sets of information available about a selection. In the top-right is a link to the layout file which associated with the currently selected control, that you can click to edit. 

* '''Layout'''

The current layout script that is being applied to the control. This lists the script that applies to all controls in the current dialog or subpanel. You can edit the layout script with the link in the top-right of the dialog. 

* '''Details'''

Has information about the currently selected control. Under 'Styles' it has the list of style keys that this control searches for in the styles files. Under 'Parents' is the list of parent control names that this child is under, which is also used to determine which styles should apply. 

* '''Styles'''

Shows all the current styles that are merged together to form the final style that is applied to a control, and from what file the style was loaded. The time item in the list is the merged version that is being applied. 

* '''Localization'''

This is a shortcut set of links to all the localized text. It's not affected by the currently selected control. 

* '''Errors'''

This tab only shows if there is an error parsing the current layout or styles files. It will display details on what you've done wrong with a file. 

Clicking on any file link will open it in an editor. If a file is opening, you'll need to associate the file with an editor by right-clicking on the file in explorer (right click-&gt;properties-&gt;Opens with-&gt;change). 


== Styles ==

VGUI Controls (also called elements, or panels) have how they draw be described by styles. It works in a similar but more limited version of the web Cascading Style Sheets (CSS), where you can override how a control looks based on the current state it's in, or by what parent controls it's part of. The Styles tab in the VGUI edit tool shows you all the styles that are being applied to a control. Styles can be set in the .styles files (e.g. Steam.styles) or directly in the .layout file for a dialog. 

The following keys can be set in a a style: 

* '''textcolor''' 
** The color to use to draw any text elements, in RGBA (e.g. "255 0 0 255" for red), or the name of a pre-defined color (colors can be defined at the top of the styles file under the "colors" key). 
* '''bgcolor''' 
** Background color fill. Can be set to 'none' to draw nothing. If 'render_bg' is set, this key is ignored. 
* '''shadowtextcolor''' 
** A extra color to draw the background of text - used typically to do a receded effect on disabled button. Also overloaded to set the cursor color in TextEntry controls. 
* '''selectedtextcolor''' 
** The color to draw selected text in a TextEntry (text box) control. 
* '''selectedbgcolor''' 
** The color to draw the background of selected text in a TextEntry control. 
* '''render''' 
** A set of render commands to draw custom imagery/gradients/colors on the control. Drawn after the control has drawn any sub-elements. More details below. 
* '''render_bg''' 
** Just like 'render', but is drawn in the background before any sub-elements are drawn. 
* '''padding''', '''padding-left''', '''padding-right''', '''padding-top''', '''padding-bottom''' 
** Extends the size of Label or Button based control by the specified sizes. This doesn't apply to all controls right now, let a dev know if it doesn't control something you need. 
* '''inset''' 
** Takes 4 numbers, e.g. "0 0 0 0". Specifies how sub-controls should be positioned within the control, and exactly what area "bgcolor" should draw in. Number are left, top, right, bottom 
* '''image''' 
** Sets the image to draw instead of any text. Works with Label or Button base controls. If set, replaces any text on the button. 
* '''font-family''' 
** The name of the font ("Tahoma", "Verdana", etc.). Only one font name can be specified. If the font isn't present on the users system, it will always fall back to Tahoma. 
* '''font-weight''' 
** A number from 0 to 1000 the describes how bold the font draws. 0 is thinner than normal, 400 is standard, 700 is bold, 1000 is extra bold. The exact steps can differ per font. 
* '''font-size''' 
** The height, in pixels, of the font. 
* '''font-style''' 
** A list of flags to apply to the font. This is a list of flags, seperated by semicolons. Possible flags are "italic", "underline", "strikeout", "symbol", "antialias", "dropshadow", "outline", "rotary", "additive", "uppercase", "lowercase" (some of these only apply in the in-game overlay) 
* '''corner_rounding''' 
** The number of pixels by which corners should be rounded. This setting is passed through to the OS, and only applies to dialogs (Frame) or Menu controls.

The order the styles are listed in the file are the order they get applied to a control. To control how a . 

The following style flags (called 'pseudo classes' in CSS) can be used to change the appearance of a control based on it's state. It's specified with a colon (':') after the control name, e.g. "Button:active { textcolor=white } ". 

* '''hover''' 
** Applied when the mouse cursor is over the control 
* '''active''' 
** The left mouse button is pressed on the control 
* '''focus''' 
** The control has keyboard focus, as moved around by the TAB key 
* '''selected''' 
** The control has it's primary option enabled, the check-box checked or the radio button selected 
* '''disabled''' 
** The control has been set disabled by the code, and can't be interacted with 
* '''scrollbar''' 
** The controls has an optional scrollbar, and it's currently visible 
* '''framefocus''' 
** Used only on the controls Frame and FrameButton, set if the dialog currently has focus

You can specify multiple style flags if necessary to get very specific behaviours, for example: 
<pre>CheckButton:selected:disabled
{
	textcolor=black
}
</pre> 
will set the text color of a CheckButton to be black if the checkbox is currently checked, but the control is set to disabled. 

== Layout files ==

Layout file that are brand new have the extension '.layout' and live in the "resource/layout/" directory in the Steam client. There are still a large set of old VGUI layout files with the extension '.res', which have a more verbose form; but these can still co-exist together. Layout commands live under the key "layout" in the file, and are a set of commands to position the controls. Any control that is referenced by a layout command will ignore any original sizing or placement information and be completely overridden by the layout command. The commands are: 

* '''Place''' 
** Layouts a list of controls vertically or horizontally 
* '''Region''' 
** Describes a region in which to do layout, that can be referenced by Place commands

There is a lot of parameter to a Place and Region commands, most of which are command between the two. All the parameters are optional. 

* '''controls''' 
** A list of controls that should be layed out (Place command only). The names of control here are their instance name as defined in a layout/.res file, not the class names used in styles. 
* '''region''' 
** In a place command this is the region in which the controls should be layed out. In a region command this is the parent region of the region you are declaring, the region will be positioned relative to it's parent. 
* '''name''' 
** The name of the region being created, so it can be referred to from Place commands (Region command only) 
* '''start''' 
** The name of the control or region that we should start laying out from 
* '''dir''' 
** The direction we should lay out the commands, "down" or "right". "right" is the default. 
* '''align''' 
** Where we should align the set of controls to, may be "right", "bottom", or "top-center". The default is to align to the top-left. 
* '''margin''' 
** how much room we should allow between our controls and where we are aligning to. 
* '''margin-left''', '''margin-right''', '''margin-top''', '''margin-bottom''' 
** specific overrides for margin on different directions 
* '''spacing''' 
** how much gap to put between the controls we're laying out 
* '''overflow''' 
** What to do if the contents don't fit in the region, this is for regions only. The default is to clip the region and try to resize the contents a bit to fit in it. The options you can set are 'allow-horizontal', 'allow-vertical', 'allow-both', 'scroll-horizontal', 'scroll-vertical', or 'scroll-both'. The allow variants will prevent the contents of the region from being resized or moved and will allow them to overflow. The scroll variants will also allow overflow, but in addition will automatically place scroll bars at the edges of the region which allow scrolling the contents. The allow variants are useful for use in child regions of a parent region that has the scroll variant set. The parent will then scroll all the child regions as well. (Region only command) 
* '''x''', '''y''' 
** an absolute position to start from 
* '''width''' 
** sets a fixed width, in pixels, the controls will be. Can be set to "max", which is the full width of the container minus the margin. 
* '''height''' 
** sets a fixed height, in pixels, the controls will be. Can be set to "max", which is the full height of the container minus the margin.

Layout commands are specified as a list, evaluated in order of evaluation. You don't typically need to use the Region command except for more complex layouts. 
<pre>	"layout"
	{
		region	 { name="bottom_row" width="max" align=bottom height=30 }	// defines a 30 pixel high region along the bottom of the area we're layout out
		place	 { controls="OKButton, CancelButton" region="bottom_row" margin=6 margin-right=12 }	// places the OK and Cancel buttons in that bottom area
	}

</pre> 
== Render commands ==

The "render" and "render_bg" keys in styles specify a list of instructions to draw images or rectangles. The are done in-order. The commands all take at least 4 parameters, the coordinates within the current control to draw at. x0, x1, y0, y1 describe the left, right, top, and bottom coordinates in pixels, and then you can add or subtract numbers from that. There are several different commands that can be issued: 

* '''fill''' 
** Fills an area with a single color. Takes an extra color parameter, which needs to defined earlier in the "Colors" section of the styles file. 
* '''image''' 
** Draws an image at the area, with no scaling. Takes the file name of the image as it's last parameter. 
* '''image_scale''' 
** Draws an image at the area, scaling it to fit the specified area. Takes the file name of the image as it's last parameter. 
* '''image_proportional''' 
** Draws an image at the area, scaling proportionally to fit the specified area. Takes the file name of the image as it's last parameter. 
* '''gradient''' 
** Fills an area with color gradient, top to bottom. Takes two colors, the color to draw at the top and the color to draw at the bottom. 
* '''dashedrect''' 
** Draws a dashed rectangle with the specified color.

It's relatively easy for a dev to add more rendering commands, so if there is a common set of drawing commands needed just ask. Don't quote any of the parameters, because since the whole command is in quotes the parser will break. 

Some examples of usage, from a styles file: 
<pre>		Button
		{
			textcolor=buttontext
			bgcolor=grey
			render_bg
			{
				// gradient fill the whole background - when using RGBA color strings dir
				0="gradient( x0, y0, x1, y1, white, black )"
				
				// lines around
				0="fill( x0, y0 + 1, x0 + 1, y1 - 1, bordercolor )"
				0="fill( x1, y0 + 1, x1 - 1, y1 - 1, bordercolor )"
				0="fill( x0 + 1, y0, x1 - 1, y0 + 1, bordercolor )"
				0="fill( x0 + 1, y1 - 1, x1 - 1, y1, bordercolor )"
				
				// single pixel fills in the corners
				0="fill( x0 + 1, y0 + 1, x0 + 2, y0 + 2, DarkCorner )"
				0="fill( x1 - 1, y0 + 1, x1 - 2, y0 + 2, DarkCorner )"
				0="fill( x0 + 1, y1 - 1, x0 + 2, y1 - 2, DarkCorner )"
				0="fill( x1 - 1, y1 - 1, x1 - 2, y1 - 2, DarkCorner )"
				
				// and a crappy broken looking image
				0="image( x0, y0, x1, y1, graphics/icon_expand_over )"
			}
		}

</pre> 
The numbers on each line are just an artifact of our common parsing library; it doesn't matter what you put there, and it can all be the same. 

== Panel Zoo ==

Hitting 'F7' opens the VGUI panel zoo dialog. This dialog shows a set of different common controls in various states, and is a good place to test changes you've made to controls in general. You can use the F6 tool in this mode to get information about the various controls. 



== Editing older resource files ==

A lot of dialogs already have a layout file defined with the extension ".res". It's OK to start add in extra styles, color, or layout sections to an existing file. You can also tweak the positions of controls in older files by just changing the "x", "y", "wide", "tall" keys on the control itself, but they don't auto-reload and aren't as expressive as the layout scripts. 



== Adding new controls ==

To add a new control you just need to pick a unique name for the control, add fill in some basic fields. Below is an example of adding a URL to the vgui debugging dialog. 
<pre>"resource/layout/layoutdebugdialog.layout"
{
	controls
	{
		wiki_link { controlname="URLLabel" labeltext="VGUI editor wiki page"  urltext="https://intranet.valvesoftware.com/wiki/index.php/VGUI_Editing" }
	}
	
	layout
	{
		...
	
		place { control="wiki_link" align=bottom width="max" margin=16 margin-bottom=12 margin-right=16 }
	}

}
</pre> 
The '''controlname''' key determines the class of control to create. Typically you'll want "Label", "URLLabel", or "ImagePanel". You can also place "Button", "CheckButton", "RadioButton" controls for mocking up dialogs, that a programmer can later come along and hook up to functionality. 

