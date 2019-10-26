

function toggleDetail( className )
{
	d = document.getElementById( className + 'Extended' );
	if ( d.style.display == 'block' )
	{
		d.style.display = 'none';
		document.getElementById( className + 'MoreDetailIcon' ).style.display = 'block';
		document.getElementById( className + 'MoreDetailLink' ).style.display = 'block';
		document.getElementById( className + 'LessDetailIcon' ).style.display = 'none';
		document.getElementById( className + 'LessDetailLink' ).style.display = 'none';
	}
	else
	{
		d.style.display = 'block';
		document.getElementById( className + 'MoreDetailIcon' ).style.display = 'none';
		document.getElementById( className + 'MoreDetailLink' ).style.display = 'none';
		document.getElementById( className + 'LessDetailIcon' ).style.display = 'block';
		document.getElementById( className + 'LessDetailLink' ).style.display = 'block';
	}
}
function switchTab( sectionName )
{
	if ( sectionName == 'records' )
	{
		document.getElementById( 'personalAchieve' ).style.display = 'none';
		document.getElementById( 'records' ).style.display = 'block';
		document.getElementById( 'recordsTabOn' ).style.display = 'block';
		document.getElementById( 'recordsTabOff' ).style.display = 'none';
		document.getElementById( 'personalAchieveTabOff' ).style.display = 'block';
		document.getElementById( 'personalAchieveTabOn' ).style.display = 'none';
	}
	else if ( sectionName == 'personalAchieve' )
	{
		document.getElementById( 'personalAchieve' ).style.display = 'block';
		document.getElementById( 'records' ).style.display = 'none';
		document.getElementById( 'recordsTabOn' ).style.display = 'none';
		document.getElementById( 'recordsTabOff' ).style.display = 'block';
		document.getElementById( 'personalAchieveTabOff' ).style.display = 'none';
		document.getElementById( 'personalAchieveTabOn' ).style.display = 'block';
	}
}


function WeaponHover( event, divHover )
{
	if (!event) var event = window.event;
	
	var hover = $(divHover);
	if ( !hover.visible() || hover.hiding )
	{
		//if ( hover.effect ) hover.effect.cancel();
		//hover.effect = Effect.Appear( hover, {duration: 0.2} );
		hover.show();
	}
	//hover.style.left = event.pageX + 10 + 'px';
	//hover.style.top = event.pageY + 20 + 'px';
	hover.style.left = Event.pointerX(event)+ 10 + 'px';
	hover.style.top = Event.pointerY(event) + 20 + 'px';
}

function HideWeaponHover( row, event, divHover )
{
	if (!event) var event = window.event;
	var reltarget = (event.relatedTarget) ? event.relatedTarget : event.toElement;
	if ( reltarget && $(reltarget).up( row.id ) )
		return;
	
	var hover = $(divHover);
	//if ( hover.effect ) hover.effect.cancel();
	if ( hover.visible() )
	{
		//hover.effect = Effect.Fade( hover, {duration: 0.2} );
		hover.hide();
	}
}

var fetchedDetails = new Array();
function getDetails( steamid64 )
{
	detailDiv = document.getElementById( 'lbRD_' + steamid64 );
	if ( !detailDiv )
	{
		return;
	}
	detailDiv.style.display = 'block';
	document.getElementById( 'lbrdShow_' + steamid64 ).style.display = 'none';
	document.getElementById( 'lbrdHide_' + steamid64 ).style.display = 'inline';
	// is it already populated?
	for( x = 0; x < fetchedDetails.length; x++ )
	{
		if ( fetchedDetails[x] == steamid64 )
		{
			// yep, bail out
			return;
		}
	}
	// go get our details html
	var postData = {
		"lbentry": steamid64,
		"lbid": currentLbID,
		"tab": 'leaderboards'
	};
	createQuery2( lbDetailURL, receiveLBDetails, postData );
}

function hideDetails( steamid64 )
{
	detailDiv = document.getElementById( 'lbRD_' + steamid64 );
	if ( !detailDiv )
	{
		return;
	}
	detailDiv.style.display = 'none';
	document.getElementById( 'lbrdShow_' + steamid64 ).style.display = 'inline';
	document.getElementById( 'lbrdHide_' + steamid64 ).style.display = 'none';
}	

function receiveLBDetails()
{
	if ( req.readyState == 4 )
	{
		if ( req.status == 200 )
		{
			updateInProgress = false;
//			alert( req.responseText );
			if ( req.responseText.indexOf( 'FAIL' ) == 0 )
			{
				// bad id or bad lookup or world ended
				return;
			}
			breakPos = req.responseText.indexOf( '|' );
			steamid64 = req.responseText.substring( 0, breakPos );
			detailDiv = document.getElementById( 'lbRD_' + steamid64 );
			if ( !detailDiv )
			{
				// unknown failure
				return;
			}
			// should already be displayed but doesnt hurt
			detailDiv.style.display = 'block';
			detailDiv.innerHTML = req.responseText.substring( breakPos + 1 );
			fetchedDetails.push( steamid64 );
		}
	}

}

//addEvent(window, "load", setupMemberTooltips, false);
