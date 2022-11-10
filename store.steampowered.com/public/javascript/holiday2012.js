
var holtman=function(){function g(){var a={wrenchCount:35,wrenchColor:"#ffffff",wrenchIndex:999999,minSize:1,maxSize:2,minSpeed:1,maxSpeed:5,round:!1,shadow:!1,collection:!1,image:!1,collectionHeight:40},b={},c=[],g=0,m=0,j=0,k=0,l=0,h=0,f=0,e=function(a,b){return Math.round(a+Math.random()*(b-a))},n=function(a,b){for(var c in b)a.style[c]=b[c]+("width"==c||"height"==c||0<=c.indexOf("radius")?"px":"")},r=function(d,b,c,g,f){this.id=f;this.x=d+l;this.y=b+k;this.size=c;this.speed=g;this.step=0;this.stepSize=
	e(1,10)/100;a.collection&&(this.target=canvasCollection[e(0,canvasCollection.length-1)]);d=null;a.image?(d=new Image,d.src=a.image):(d=document.createElement("div"),n(d,{background:a.wrenchColor}));d.className="engineerfall-wrenchs";d.setAttribute("id","wrench-"+this.id);n(d,{width:this.size,height:this.size,position:"absolute",top:this.y,left:this.x,fontSize:0,zIndex:a.wrenchIndex});a.round&&(d.style,n(d,{"-moz-border-radius":a.maxSize,"-webkit-border-radius":a.maxSize,borderRadius:a.maxSize}));a.shadow&&
n(d,{"-moz-box-shadow":"1px 1px 1px #555","-webkit-box-shadow":"1px 1px 1px #555",boxShadow:"1px 1px 1px #555"});document.body.appendChild(d);this.element=d;this.update=function(){this.y+=this.speed;this.y>k+m-(this.size+6)&&this.reset();this.element.style.top=this.y+"px";this.element.style.left=~~this.x+"px";this.step+=this.stepSize;this.x+=Math.cos(this.step);(this.x>l+j-h||this.x<h)&&this.reset()};this.reset=function(){this.y=k;this.x=l+e(h,j-h);this.stepSize=e(1,10)/100;this.size=e(100*a.minSize,
	100*a.maxSize)/100;this.speed=e(a.minSpeed,a.maxSpeed)}},q=function(){for(var a=0;a<c.length;a+=1)c[a].update();f=setTimeout(function(){q()},30)};return{engineer:function(d,p){for(var f in p)a.hasOwnProperty(f)&&(a[f]=p[f]);b=d;m=b.clientHeight;j=b.offsetWidth;k=b.offsetTop;l=b.offsetLeft;b.engineer=this;"body"===b.tagName.toLowerCase()&&(h=25);window.onresize=function(){m=b.clientHeight;j=b.offsetWidth;k=b.offsetTop;l=b.offsetLeft};for(i=0;i<a.wrenchCount;i+=1)g=c.length,c.push(new r(e(h,j-h),e(0,m),e(100*
	a.minSize,100*a.maxSize)/100,e(a.minSpeed,a.maxSpeed),g));q()},clear:function(){for(var a=null,a=b.getElementsByClassName?b.getElementsByClassName("engineerfall-wrenchs"):b.querySelectorAll(".engineerfall-wrenchs"),e=a.length;e--;)b.removeChild(a[e]);c=[];clearTimeout(f)}}}return{engineer:function(a,b){if("string"==typeof b)if(0<a.length)for(var c=0;c<a.length;c++)a[c].engineer&&a[c].engineer.clear();else a.engineer.clear();else if(0<a.length)for(c=0;c<a.length;c++)(new g).engineer(a[c],b);else(new g).engineer(a,b)}}}();

var menutabdelay = 500;
var timedelay;
var mouseActive = false;

function showsubmenutrigger() {
	var tabs = $$('ul#menu > li');
	for(numberoftabs=1; numberoftabs<=tabs.length; numberoftabs++){
		$$('ul#menu > li:nth-child('+numberoftabs+')').each(function(element){
			var menutabnumber = numberoftabs;
			showsubmenu(element, menutabnumber);
		});
	}
}

Event.observe(window, 'load', showsubmenutrigger);

function ScrollMainCap( target, absolute )
{
	if( ScrollMainCap.Index == undefined )
	{
		ScrollMainCap.Index = 0;
		ScrollMainCap.LastIndex = 0;
	}

	$$('div.squarecap').each(function(e){
		e.removeClassName('active');
	});

	target = parseInt(target); // because 2 + "1" is "21". THANKS FLEXIBLE TYPES!.

	var width = 952;
	var effectWidth = 794;

	var elem = $('main_scroll_container');
	var elemLeft = $('main_scroll_container_left');
	var elemRight = $('main_scroll_container_right');

	if( elem.effect )
		return; // Nothing to do.

	if( absolute == true )
	{
		ScrollMainCap.Index = target;
	} else {
		ScrollMainCap.Index += target;
	}

	if( ScrollMainCap.Index >= numCaps )
	{
		elem.setStyle({
			'left': 0 + 'px'
		});
		elemLeft.setStyle({
			'left': 0 + 'px'
		});
		elemRight.setStyle({
			'left': 0 + 'px'
		});
		ScrollMainCap.Index = 0;
		ScrollMainCap.LastIndex = -1;
	}

	if( ScrollMainCap.Index < 0 )
	{
		elem.setStyle({
			'left': -width - width * numCaps + 'px'
		});
		elemLeft.setStyle({
			'left': -effectWidth - effectWidth * numCaps + 'px'
		});
		elemRight.setStyle({
			'left': -effectWidth - effectWidth * numCaps + 'px'
		});
		ScrollMainCap.Index = numCaps - 1;
		ScrollMainCap.LastIndex = numCaps;
	}

	var delta = ScrollMainCap.Index - ScrollMainCap.LastIndex;

	ScrollMainCap.LastIndex = ScrollMainCap.Index;

	var targetLeft = delta * width;
	var effectTargetLeft = delta * effectWidth;

	$('squarecap_' + ScrollMainCap.Index).addClassName('active');

	elem.effect = new Effect.Move( elem, {x: -targetLeft, afterFinish: function() { elem.effect = false; }, duration: 0.4 } );
	elemLeft.effect = new Effect.Move( elemLeft, {x: -effectTargetLeft, afterFinish: function() { elemLeft.effect = false; }, duration: 0.4 } );
	elemRight.effect = new Effect.Move( elemRight, {x: -effectTargetLeft, afterFinish: function() { elemRight.effect = false; }, duration: 0.4 } );
}

function ScrollPromoCaps( name, delta, pageSize, totalCount, params )
{
	var targetid = 'sm_cap_' + name + '_scroll';
	var elem = $( targetid );
	if ( elem.effect )
		return;

	if ( !elem.curPos )
	{
		elem.curPos = 0;
	}
	if ( !elem.maxLoaded )
	{
		elem.maxLoaded = 0;
	}

	elem.curPos += delta;
	if ( elem.curPos > elem.maxLoaded )
	{
		elem.effect = true;
		elem.maxLoaded++;
		elem.style.width = ( ( elem.maxLoaded + 2 ) * 980 ) + 'px';

		if ( !params )
			params = {};
		params.tab = name;
		params.start = elem.curPos * pageSize + pageSize; // we are always loading one page ahead
		params.count = pageSize;
		params.country = 'US';
		new Ajax.Updater(
			targetid,
			'https://store.steampowered.com/store/search/tab',
			{ parameters: params, method: 'get', insertion: 'bottom', onComplete: UpdateSmallCapControl.bind( window, targetid, delta, pageSize, totalCount ) } );
	}
	else
	{
		UpdateSmallCapControl( targetid, delta, pageSize, totalCount );
	}
}

function ShowPop( event, id )
{
	event.stopPropagation(); //cancel bubbling

	$('pop_' + id).show();
}

function HidePop( event, id )
{
	event.stopPropagation(); //cancel bubbling
	$('pop_' + id).hide();
}

function MakeHoltmanHappy()
{
	holtman.engineer(document.body, {round : true, minSize: 5, maxSize:8});
}

