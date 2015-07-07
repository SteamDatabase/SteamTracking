
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

function OnVideoClicked( id )
{
	if ( g_bManaging ) {
		SelectVideo( id );
		return false;
	}

	return true;
}

function SelectVideo( id )
{
	cb = $('screenshot_checkbox_'+id);
	cb.checked = !cb.checked;
	item = $('imgWallItem_' + id);
	if ( cb.checked )
	{
		$(item).addClassName( 'imgWallItemChecked' );
	}
	else
	{
		$(item).removeClassName( 'imgWallItemChecked' );
	}
	ScreenshotUpdateBatchCount();
}


