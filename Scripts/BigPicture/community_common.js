
function OnCommunityMoveUpStack()
{
	$.DispatchEvent.apply( this, g_rgMoveUpEvent );

	return true;
}

$.Schedule( 0.0, function() {
	$.RegisterEventHandler( 'CommunityMoveUpStack', $.GetContextPanel(), OnCommunityMoveUpStack );
});

