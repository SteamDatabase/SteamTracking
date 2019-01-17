
function SetupCommentFooterAndBindings( panel, actorsteamid, urllabel )
{
	$.RegisterFooterButton( panel, 'pad_a', 'VIEW PROFILE' );
	if ( panel.BHasClass( "Friend" ) )
	{
		$.RegisterKeyBind( panel, 'pad_y,steampad_y,mouse_right', function() {$.Msg( actorsteamid ); $.DispatchEvent( 'ShowFriendOptionsMenu', actorsteamid ); } );
		$.RegisterFooterButton( panel, 'pad_y', 'MORE' );
	}
	if( urllabel )
		$.RegisterKeyBind( panel, 'pad_stick2', function( p ) { $.DispatchEvent( 'ShowURLChoiceDialog', urllabel ) }   );
}
