// <script>
"use strict";

const k_UIWhite = 0xfdfdfd;

const k_CrosshairLength = 12;
const k_CrosshairWidth = 1.5;

const k_BoxTitleBaseHeight = 18;
const k_ProgressBarHeight = 11;

const k_TextStyleBold = {
		fontFamily: k_FontType,
		fontSize: 14,
		fill: "white",
		fontWeight: 'bold',
		align: 'center'
	};
const k_TextStyleDefault = {
		fontFamily: k_FontType,
		fontSize: 14,
		fill: "white",
		fontWeight: 'normal',
		align: 'center'
	};
const k_TextStyleItalics = {
	fontFamily: k_FontType,
	fontSize: 14,
	fill: "white",
	fontWeight: 'normal',
	align: 'center',
	fontStyle: 'italic',
};
const k_TextStyleSmallBold = {
	fontFamily: k_FontType,
	fontSize: 12,
	fill: "white",
	fontWeight: 'bold',
	align: 'center',
};
const k_TextStyleSmallerBold = {
	fontFamily: k_FontType,
	fontSize: 10,
	fill: "white",
	fontWeight: 'bold',
	align: 'center',
};
const k_TextStyleHugeBold = {
	fontFamily: k_FontType,
	fontSize: 24,
	fill: "white",
	fontWeight: 'bold',
	align: 'center',
};
const k_TextStyleSmallBoldLeft = {
	fontFamily: k_FontType,
	fontSize: 12,
	fill: "white",
	fontWeight: 'bold',
	align: 'left',
};
const k_TextStyleZoneRemaining = {
	fontFamily: k_FontType,
	fontSize: 10,
	fill: "white",
	align: 'center',
};
	
//////////////////////////////////////////////////////////
// UI Box - useful for poppits and popups as a background.
function CUIBox(width, height)
{
	// finally superconstructor
	PIXI.Container.call(this);

	this.m_TitleBGColor = k_UIWhite;
	this.m_BGColor = 0x000000;
	this.m_BGAlpha = .6;	
	
	this.m_Graphics = new PIXI.Graphics();
	this.addChild(this.m_Graphics);

	this.m_Title = new PIXI.Text( '' );
	this.m_Title.anchor.set( 0.5, 0.5 );
	this.m_TitleStyle = k_TextStyleBold;
	this.m_Title.tint = 0x3a3a3a;
	this.addChild( this.m_Title );
	
	this.m_Width = 0;
	this.m_Height = 0;
	this.m_TitleHeight = k_BoxTitleBaseHeight;
	this.m_TitleText = '';

	// if no position defined, it won't draw
	this.m_HasTail = false;
	this.m_TailPos = 0;

	// whether or not this box cares about mouseover / out
	this.m_HasRolloverBox = false;
	this.m_HitRect = { x: 0, y: 0, w: 1, h: 1};
	this.m_IsMouseOverThis = false;

	this.SetSize(width, height);
}
CUIBox.prototype = Object.create(PIXI.Container.prototype);
CUIBox.prototype.constructor = CUIBox;

CUIBox.prototype.destroy = function()
{
	this.m_Graphics.destroy();
};

CUIBox.prototype.SetSize = function(w, h)
{
	this.m_Width = w;
	this.m_Height = h;
	this._Layout();
};

CUIBox.prototype.SetTitleHeight = function(height)
{
	this.m_TitleHeight = height;
	this._Layout();
};

CUIBox.prototype.SetTitleText = function( strText )
{
	this.m_TitleText = strText;
	this._Layout();
};

CUIBox.prototype.SetTitleStyle = function(style)
{
	this.m_TitleStyle = style;
	this._Layout();
}

CUIBox.prototype.GetWidth = function()
{
	return Math.max(this.m_Width, this.m_Title.width + 8);	
}

CUIBox.prototype.Update = function(delta)
{
	if(this.m_HasRolloverBox)
	{
		var mousePosition = gApp.renderer.plugins.interaction.mouse.global;

		// convert to local space so we can see if the mouse is over this box
		mousePosition = this.toLocal(mousePosition);

		var mouseOver = false;
		if(mousePosition.x > this.m_HitRect.x && mousePosition.y > this.m_HitRect.y &&
		   mousePosition.x <= this.m_HitRect.x + this.m_HitRect.w &&
		   mousePosition.y <= this.m_HitRect.y + this.m_HitRect.h)
		{
			mouseOver = true;
		}

		if(mouseOver && !this.m_IsMouseOverThis)
		{
			// fire mouse over event
			this.m_IsMouseOverThis = true;
			this.m_OnMouseOver();
		}
		else if(!mouseOver && this.m_IsMouseOverThis)
		{
			// fire mouse out
			this.m_IsMouseOverThis = false;
			this.m_OnMouseOut();
		}
	}
}

CUIBox.prototype._Layout = function()
{
	this.m_Title.style = this.m_TitleStyle;
	this.m_Title.text = this.m_TitleText;

	var validWidth = this.GetWidth();

	this.m_Title.x = validWidth / 2;
	this.m_Title.y = this.m_TitleHeight / 2;

	let g = this.m_Graphics;

	g.cacheAsBitmap = false;
	g.clear();

	// first draw the bg color
	g.beginFill(this.m_BGColor, this.m_BGAlpha);
	g.drawRect(0, this.m_TitleHeight, validWidth, this.m_Height - this.m_TitleHeight);
	g.endFill();

	// now draw the title bar
	g.beginFill(this.m_TitleBGColor, 1.0);
	g.drawRect(0, 0, validWidth, this.m_TitleHeight);
	g.endFill();

	var tailBoundsX = 0;
	var tailBoundsY = 0;
	var tailBoundsW = 16;
	var tailBoundsH = 7;

	if (this.m_HasTail)
	{
		g.beginFill(this.m_TitleBGColor, 1.0);

		if(this.m_TailPos <= 0)
		{
			tailBoundsX = -16;
			tailBoundsY = 0;

			// points left
			g.drawPolygon([-16, 0,// right
				0, 7, // bottom
				0, 0]); // top
		}
		else if(this.m_TailPos > validWidth)
		{
			tailBoundsX = validWidth;
			tailBoundsY = 0;

			// points right
			g.drawPolygon([validWidth + 16, 0,// right
				validWidth, 7, // bottom
				validWidth, 0]); // top
		}
		else
		{
			tailBoundsX = this.m_TailPos - 6;
			tailBoundsY = -16;
			tailBoundsW = 12;
			tailBoundsH = 16;

			// points up
			g.drawPolygon([this.m_TailPos, -16,// top
				this.m_TailPos + 6, 0, // right
				this.m_TailPos - 6, 0]); // left
		}
		g.endFill();
	}

	// rollover box used to help us track when the mouse enters and exits this thing
	if(this.m_HasRolloverBox)
	{
		var xMin = 0;
		var yMin = 0;
		var xMax = validWidth;
		var yMax = this.m_Height;

		// add the tail to the hit rect
		xMin = Math.min(xMin, tailBoundsX);
		yMin = Math.min(yMin, tailBoundsY);
		xMax = Math.max(xMax, tailBoundsX + tailBoundsW);
		yMax = Math.max(yMax, tailBoundsY + tailBoundsH);

		this.m_HitRect.x = xMin;
		this.m_HitRect.y = yMin;
		this.m_HitRect.w = xMax - xMin;
		this.m_HitRect.h = yMax - yMin;

		/*
		g.beginFill(0xff0000, 1.0);
		{
			g.drawRect(this.m_HitRect.x, this.m_HitRect.y, this.m_HitRect.w, this.m_HitRect.h);
		}
		g.endFill();
		*/

		g.beginFill(0x00ff00, 0.0);

		// first draw around the tail
		if(this.m_HasTail)
		{
			g.drawRect(tailBoundsX, tailBoundsY, tailBoundsW + 1, tailBoundsH + 1);
		}

		// now draw around our box
		g.drawRect(0, 0, validWidth, this.m_Height);
		g.endFill();
		g.interactive = true;
	}
	else
	{
		g.interactive = false;
	}

	g.cacheAsBitmap = true;
};

// add a tail to the titlebar of this box. If x < 0, it adds the tail to the left.
//  if it's > this.GetWidth(), it adds it to the far right
CUIBox.prototype.SetTitleTailPosition = function(x)
{
	this.m_HasTail = true;
	this.m_TailPos = x;
	this._Layout();
}

// add a box that detects if the mouse is over this box or not
CUIBox.prototype.AddRolloverBox = function(onMouseOver, onMouseOut)
{
	this.m_HasRolloverBox = true;
	this.m_OnMouseOver = onMouseOver;
	this.m_OnMouseOut = onMouseOut;

	this._Layout();
};

CUIBox.prototype.RemoveRollOverBox = function()
{
	this.m_HasRolloverBox = false;
	this.m_OnMouseOver = null;
	this.m_OnMouseOut = null;

	this._Layout();
};

//////////////////////////////////////////////////////////
// UI Button - simple button with some text that you can click
//  and get a callback.
function CUIButton(width, height, text)
{
	// finally superconstructor
	PIXI.Container.call(this);		
	
	this.click = function(btn) { }
	
	this.m_BGColor = 0x010103;
	this.m_TextColor = 0xababab;
	this.m_BorderColor = 0x434343;
	
	this.m_Graphics = new PIXI.Graphics();
	
	// first draw the border
	this.m_Graphics.beginFill(this.m_BorderColor);
	this.m_Graphics.drawRect(0, 0, width, height);
	this.m_Graphics.endFill();
	
	// now draw the fill
	this.m_Graphics.beginFill(this.m_BGColor);
	this.m_Graphics.drawRect(1, 1, width - 2, height - 2);
	this.m_Graphics.endFill();
	
	this.m_Graphics.interactive = true;
	this.m_Graphics.buttonMode = true;
	this.m_Graphics.cacheAsBitmap = true;
	
	this.m_Highlight = new PIXI.Graphics();
	this.m_Highlight.beginFill(0xffffff, 0.12);
	this.m_Highlight.drawRect(1, 1, width - 2, height - 2);
	this.m_Highlight.endFill();
	this.m_Highlight.alpha = 0.0;
	
	var instance = this;
	this.m_Graphics.click = function()
	{
		instance.click(instance);
	};

	this.m_Graphics.tap = function()
	{
		instance.click(instance);
	};

	this.m_Graphics.mouseover = function()
	{
		instance.m_Highlight.alpha = 1.0;
	}
	this.m_Graphics.mouseout = function()
	{
		instance.m_Highlight.alpha = 0.0;
	}
	
	this.m_Text = new PIXI.Text(text);
	this.m_Text.anchor.set( 0.5, 0.5 );
	this.m_Text.x = width / 2;
	this.m_Text.y = height / 2;
	this.m_Text.style = k_TextStyleBold;
	this.m_Text.tint = this.m_TextColor;
	
	this.addChild(this.m_Graphics);
	this.addChild(this.m_Highlight);
	this.addChild(this.m_Text);
}
CUIButton.prototype = Object.create(PIXI.Container.prototype);
CUIButton.prototype.constructor = CUIButton;

CUIButton.prototype.destroy = function()
{
	this.m_Text.destroy();
	this.m_Graphics.destroy();
	this.m_Highlight.destroy();
}

//////////////////////////////////////////////////////////
// Progress Bar - fill up a bar from 0 --> 1.0
function CProgressBar(width)
{
	// finally superconstructor
	PIXI.Container.call(this);		
	
	this.m_BGGraphics = new PIXI.Graphics();
	this.m_FillGraphics = new PIXI.Graphics();
	this.m_MaskGraphics = new PIXI.Graphics();
	
	this.addChild(this.m_BGGraphics);
	this.addChild(this.m_FillGraphics);
	this.addChild(this.m_MaskGraphics);
	
	this.m_Value = 0.5;
	this.SetWidth(width);
}
CProgressBar.prototype = Object.create(PIXI.Container.prototype);
CProgressBar.prototype.constructor = CProgressBar;

CProgressBar.prototype.destroy = function()
{
	this.m_BGGraphics.destroy();
	this.m_FillGraphics.destroy();
	this.m_MaskGraphics.destroy();
}

CProgressBar.prototype.SetValue = function(value)
{
	if(null == value)
	{
		value = 0.0;
	}

	this.m_Value = value;
	
	this._Layout();
}

CProgressBar.prototype.SetWidth = function(width)
{
	this.m_Width = width;
	
	this._Layout();
}

CProgressBar.prototype._Layout = function()
{
	let bg = this.m_BGGraphics;
	let fg = this.m_FillGraphics;
	let mg = this.m_MaskGraphics;
	
	bg.clear();
	
	// draw the border	
	bg.beginFill(k_UIWhite);
	bg.drawRoundedRect(0, 0, this.m_Width, k_ProgressBarHeight, k_ProgressBarHeight*0.5);
	bg.endFill();
	
	// now draw the inner gutter
	bg.beginFill(0x000000);
	bg.drawRoundedRect(2, 2, this.m_Width - 4, k_ProgressBarHeight - 4, (k_ProgressBarHeight*0.5) - 4);
	bg.endFill();
	
	// setup our mask
	mg.clear();
	mg.beginFill(0xffffff, 1.0);
	mg.drawRect(0, 0, this.m_Width * this.m_Value, k_BoxTitleBaseHeight);
	mg.endFill();
	
	// now draw the fill... it's a masked rounded rect
	fg.clear();
	fg.beginFill(k_UIWhite);
	fg.drawRoundedRect(2, 2, this.m_Width - 4, k_ProgressBarHeight - 4, (k_ProgressBarHeight*0.5) - 4);
	fg.endFill();
	fg.mask = mg;
}


//////////////////////////////////////////////////////////
// Crosshair - just a simple box that can surround some UI 
//    element like this:
//
//
//     /----       ----\
//     |               |
//     |               |
//
//
//     |               |
//     |               |
//     \----       ----/
//
function CCrosshair(boxW, boxH)
{
	// finally superconstructor
	PIXI.Container.call(this);	
	
	this.m_Graphics = new PIXI.Graphics();
	this.addChild(this.m_Graphics);
	
	this.SetSize(boxW, boxH);
}
CCrosshair.prototype = Object.create(PIXI.Container.prototype);
CCrosshair.prototype.constructor = CCrosshair;

CCrosshair.prototype.destroy = function()
{
	this.m_Graphics.destroy();
}

CCrosshair.prototype.SetSize = function(boxW, boxH)
{
	let g = this.m_Graphics;
	
	g.clear();
	
	g.beginFill(k_UIWhite, 1.0);
	// top left
	g.drawRect(0, 0, k_CrosshairLength, k_CrosshairWidth);
	g.drawRect(0, k_CrosshairWidth, k_CrosshairWidth, k_CrosshairLength - k_CrosshairWidth);
	
	// top right
	g.drawRect(boxW - k_CrosshairLength, 0, k_CrosshairLength, k_CrosshairWidth);
	g.drawRect(boxW - k_CrosshairWidth, k_CrosshairWidth, k_CrosshairWidth, k_CrosshairLength - k_CrosshairWidth);
	
	// bottom left
	g.drawRect(0, boxH - k_CrosshairWidth, k_CrosshairLength, k_CrosshairWidth);
	g.drawRect(0, boxH - k_CrosshairLength, k_CrosshairWidth, k_CrosshairLength - k_CrosshairWidth); 
	
	// bottom right
	g.drawRect(boxW - k_CrosshairLength, boxH - k_CrosshairWidth, k_CrosshairLength, k_CrosshairWidth);
	g.drawRect(boxW - k_CrosshairWidth, boxH - k_CrosshairLength, k_CrosshairWidth, k_CrosshairLength - k_CrosshairWidth);
	
	g.endFill();	
}

