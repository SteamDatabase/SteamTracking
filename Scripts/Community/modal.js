
var selStates = new Array();
var currentModal = false;
function showModal(contentEl)
{
	// hide selects, which have an infinitely high z-index in IE
	sels = document.getElementsByTagName('select');
	selStates.length = 0;
	for(x=0;x<sels.length;x++)
	{
		selStates.push((sels[x].style.visibility == undefined ? 'visible' : sels[x].style.visibility));
		sels[x].style.visibility = 'hidden';
	}
	
	bgEl = document.getElementById('modalBG');
	if(!bgEl)
	{
		bgEl = document.createElement('div');
		bgEl.id = 'modalBG';
	}
	bgEl.style.display = 'block';
	cEl = document.getElementById(contentEl);
	cEl.style.display = 'block';
	cIframe = document.getElementById(contentEl+'_iframe');
	if(cIframe)
	{
		cIframe.src = eval(contentEl+'_iframe_src');
	}	
	
	currentModal = contentEl;
	
	modalSizing();
}

function modalSizing()
{
	if(currentModal != false)
	{
		w = winDim('w','v');
		h = winDim('h','v');
		sl = winDim('w','s');
		st = winDim('h','s');

		bgEl = document.getElementById('modalBG');
		bgEl.style.top = st + 'px';
		bgEl.style.left = sl + 'px';
		bgEl.style.width = w + 'px';
		bgEl.style.height = h + 'px';

		cEl = document.getElementById(currentModal);
		cw = cEl.offsetWidth;
		ch = cEl.offsetHeight;
		t = (Math.floor((h / 2) - (ch / 2)) + st);
		l = (Math.floor((w / 2) - (cw / 2)) + sl);
		cEl.style.top = (t < 0 ? 0 : t) + 'px';
		cEl.style.left = (l < 0 ? 0 : l) + 'px';
	}
}

function hideModal(contentEl)
{
	
	sels = document.getElementsByTagName('select');
	for(x=0;x<sels.length;x++)
	{
		sels[x].style.visibility = selStates[x];
	}
	
	document.getElementById('modalBG').style.display = 'none';
	document.getElementById(contentEl).style.display = 'none';
	
	currentModal = false;
	
}

function modalAlert(msg)
{
	modalEl = document.getElementById('modalAlert');
	if(modalEl)
	{
		for(x=0;x<modalEl.childNodes.length;x++)
		{
			modalEl.removeChild(modalEl.childNodes[x]);
		}
		modalEl.parentNode.removeChild(modalEl);
	}
	
	modalEl = document.createElement('div');
	
}

addEvent(window, "resize", modalSizing, false);
addEvent(window, "scroll", modalSizing, false);
