

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

