
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
		$('add_video_button').addClassName( 'btn_green' );
		$('add_video_button').removeClassName( 'btn_inactive' );
	}
	else
	{
		$('add_vid_assoc').hide();
		$('add_video_button').addClassName( 'btn_inactive' );
		$('add_video_button').removeClassName( 'btn_green' );
	}
}
