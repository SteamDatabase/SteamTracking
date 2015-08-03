
var g_cTotalMessages;
var g_iActiveMessage;

function InitSupportMessages( cMessages )
{
	g_cTotalMessages = cMessages;
	ShowSupportMessage( 0 );
	$('supportmessage_page_prev').observe( 'click', function() { ShowSupportMessage( g_iActiveMessage - 1 ) } );
	$('supportmessage_page_next').observe( 'click', function() { ShowSupportMessage( g_iActiveMessage + 1 ) } );

	if ( BAreAllMessagesAcked() )
		$('supportmessages_closebtn').removeClassName('disabled');
}

function ShowSupportMessage( iMessage )
{
	if ( iMessage < 0 || iMessage >= g_cTotalMessages )
		return;

	var elMessage = $('message_' + iMessage );
	elMessage.siblings().invoke('hide');
	elMessage.show();

	var elCheckbox = $('checkbox_ctn_' + iMessage );
	elCheckbox.siblings().invoke('hide');
	elCheckbox.show();

	if ( g_cTotalMessages > 1 )
	{
		$('supportmessage_cur').update( iMessage + 1 );
		if ( iMessage > 0 )
			$('supportmessage_page_prev').removeClassName('disabled');
		else
			$('supportmessage_page_prev').addClassName('disabled');

		if ( iMessage < g_cTotalMessages - 1 )
			$('supportmessage_page_next').removeClassName('disabled');
		else
			$('supportmessage_page_next').addClassName('disabled');
	}
	g_iActiveMessage = iMessage;
}

function BIsMessageAcked( iMessage )
{
	return $('checkbox_' + iMessage ).checked;
}

function BAreAllMessagesAcked()
{
	for ( var i = 0; i < g_cTotalMessages; i++ )
	{
		if ( !BIsMessageAcked( i ) )
			return false;
	}
	return true;
}

function OnSupportMessageAcked( iMessage )
{
	if ( BAreAllMessagesAcked() )
		$('supportmessages_closebtn').removeClassName('disabled');
	else
		$('supportmessages_closebtn').addClassName('disabled');
}

function CloseSupportMessageWindow()
{
	if ( BAreAllMessagesAcked() )
	{
		new Ajax.Request( 'https://store.steampowered.com/supportmessages/ackmessages',
			{
			method: 'post',
			onSuccess: function( transport ) {
				if ( transport.responseJSON )
				{
					if ( transport.responseJSON.success !== 1 )
					{
						alert( 'Could not get server to acknowledge your viewing of this message! (' + transport.responseJSON.success + '). Try again later.' );
						window.location = window.location;
					}
					else
					{
						window.close();
					}
				}
				else if ( transport.responseText )
				{
					alert( 'Server failed (no server json: ' + transport.responseText + ' )' );
					window.location = window.location;
				}
				else
				{
					alert( 'Could not get server to acknowledge your viewing of this message! (no server data). Try again later.' );
					window.location = window.location;
				}
			},
			onFail: function( transport ) {
				alert( 'failed to acknowledge message (server failed to respond)' );
				window.location = window.location;
			},
			onComplete: function( transport ) {
			}
		} );
		$('supportmessages_closebtn').addClassName('disabled');
	}
	else if ( !BIsMessageAcked( g_iActiveMessage ) )
	{
		return;
	}
	else
	{
		for ( var i = g_iActiveMessage; i < g_cTotalMessages; i++ )
		{
			if ( !BIsMessageAcked(i) )
			{
				ShowSupportMessage( i );
				return;
			}
		}
		for ( var i = 0; i < g_iActiveMessage; i++ )
		{
			if ( !BIsMessageAcked(i) )
			{
				ShowSupportMessage( i );
				return;
			}
		}
	}
}

