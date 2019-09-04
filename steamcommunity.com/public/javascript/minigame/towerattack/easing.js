// <script>
"use strict";

window.CEasing = function( nStart, nDelta, nDuration )
{
	this.t = 0;
	this.b = nStart;
	this.c = nDelta;
	this.d = nDuration;

	this.ts = performance.now();

	this.m_bComplete = false;
	this.m_bRanCompleteFunc = false;
	this.m_fnComplete = false;
}

CEasing.prototype.Update = function()
{
	this.t = performance.now() - this.ts;
	if( !this.m_bComplete && this.t > this.d  )
	{
		this.m_bComplete = this.m_bRanCompleteFunc = true;
		if( this.m_fnComplete )
			this.m_fnComplete();
	}
}

CEasing.prototype.GetTarget = function()
{
	return this.b + this.c;
}

CEasing.prototype.bIsDone = function()
{
	this.Update();
	return this.m_bComplete;
}


CEasing.prototype.OnComplete = function( fnOnComplete )
{
	this.m_fnComplete = fnOnComplete;
	return this; // Return jquery-style self reference
}

CEasing.prototype.Get = function()
{
	return this.b; // STUB
}

//
// Linear
//
window.CEasingLinear = function( nStart, nDelta, nDuration )
{
	CEasing.call(this, nStart, nDelta, nDuration );
}

CEasingLinear.prototype = Object.create(CEasing.prototype);

CEasingLinear.prototype.Get = function()
{
	this.Update();
	return this.c * this.t / this.d + this.b;
}

//
// Quadratic ease out
//
window.CEasingQuadOut = function( nStart, nDelta, nDuration )
{
	CEasing.call(this, nStart, nDelta, nDuration );
}

CEasingQuadOut.prototype = Object.create(CEasing.prototype);

CEasingQuadOut.prototype.Get = function()
{
	this.Update();
	var t = this.t / this.d;
	return -this.c * t * ( t - 2 ) + this.b
}

//
// Quadratic ease in
//
window.CEasingQuadIn = function( nStart, nDelta, nDuration )
{
	CEasing.call(this, nStart, nDelta, nDuration );
}

CEasingQuadIn.prototype = Object.create(CEasing.prototype);

CEasingQuadIn.prototype.Get = function()
{
	this.Update();
	var t = this.t / this.d;
	return this.c * t * t + this.b;
}


//
// Sinusoidal ease in
//
window.CEasingSinIn = function( nStart, nDelta, nDuration )
{
	CEasing.call(this, nStart, nDelta, nDuration );
}

CEasingSinIn.prototype = Object.create(CEasing.prototype);

CEasingSinIn.prototype.Get = function()
{
	this.Update();
	return -this.c * Math.cos( this.t / this.d * (Math.PI / 2) ) + this.c + this.b;
}


//
// Sinusoidal ease out
//
window.CEasingSinOut = function( nStart, nDelta, nDuration )
{
	CEasing.call(this, nStart, nDelta, nDuration );
}

CEasingSinOut.prototype = Object.create(CEasing.prototype);

CEasingSinOut.prototype.Get = function()
{
	this.Update();
	return this.c * Math.sin( this.t / this.d * (Math.PI / 2) ) + this.b;
}

// Easing wrapper that predicts one tick into the future
window.CEasingPrediction = function( clEasing, nStartValue, flRate, floor, ceil )
{
	this.m_nLastVal = nStartValue;
	this.m_nVal = nStartValue;
	this.m_clEasing = clEasing;
	this.m_flRate = flRate;
	this.m_cEaser = new this.m_clEasing(this.m_nVal, 0, flRate);
	this.m_flAverageDelta = false;

	this.m_nCeil = ceil;
	this.m_nFloor = floor;

	this.m_flDisplayVal = nStartValue;
}

CEasingPrediction.prototype.UpdateValue = function( nValue, nRate )
{
	if( nRate )
		this.m_flRate = nRate;

	this.m_nLastVal = this.m_nVal;
	this.m_nVal = nValue;

	var nRawDelta = this.m_nVal - this.m_flDisplayVal;
	var nRawExpected = this.m_nVal - nRawDelta;
	// Now factor in our displayed delta
	var nDisplayedDelta = nRawExpected - this.m_flDisplayVal;

	//if( !this.m_flAverageDelta )
	//	this.m_flAverageDelta = nDisplayedDelta/3;
	//else
	//	this.m_flAverageDelta = (nDisplayedDelta + 2*this.m_flAverageDelta)/3;

	this.m_cEaser = new this.m_clEasing(this.m_flDisplayVal, nRawDelta, this.m_flRate);
}

//CEasingPrediction.prototype.UpdateValue = function( nValue, nRate )
CEasingPrediction.prototype.UpdateAndSlamValue = function( nValue, nRate )
{
	if( nRate )
		this.m_flRate = nRate;

	var nRawDelta = nValue - this.m_nLastVal;

	this.m_nLastVal = this.m_nVal;
	this.m_nVal = nValue;


	//var nRawExpected = this.m_nVal - nRawDelta;
	this.m_flDisplayVal = nValue;
	// Now factor in our displayed delta
	//var nDisplayedDelta = nRawExpected - this.m_flDisplayVal;

	this.m_cEaser = new this.m_clEasing(this.m_flDisplayVal, nRawDelta, this.m_flRate);
}

CEasingPrediction.prototype.Get = function( nValue )
{
	this.m_flDisplayVal = Math.floor(this.m_cEaser.Get());

	// Clamp
	if(this.m_flDisplayVal > this.m_nCeil)
		this.m_flDisplayVal = this.m_nCeil;
	if( this.m_flDisplayVal < this.m_nFloor )
		this.m_flDisplayVal = this.m_nFloor;

	return this.m_flDisplayVal;
}
