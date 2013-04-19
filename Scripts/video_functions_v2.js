
function AddVideos()
{
	if ( BAreVideosSelected() )
	{
		$('addvidform').submit();
	}
	else
	{
		return false;
	}
}

function BAreVideosSelected()
{
	var checked = 0;
	$$('.vid_cb').each( 
		function(checkbox)
		{
			if(checkbox.checked) 
			{
				++checked;
			}
		}
	);
	if ( checked > 0 )
	{
		return true;
	}
	return false;
}

function UpdateAddVideoControls()
{
	if ( BAreVideosSelected() )
	{
		$('add_vid_assoc').show();
	}
	else
	{
		$('add_vid_assoc').hide();
	}
}


function OnVideoClicked( event, id, itemLink, itemLinkText, itemLinkNotModal )
{
	if ( !event )
		event = window.event;
	event = $(event);
	if ( event.isLeftClick && !event.isLeftClick() )
		return true;
	ShowModalContent( itemLink, itemLinkText, itemLinkNotModal, false );
	return false;
}

