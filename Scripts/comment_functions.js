
var postCommentText = "#Comments_Post_Comment_Here";

function checkCommentInput()
{
	tbox = document.getElementById( 'commentInput' );
	var savebutton = document.getElementById( 'commentSave' );
	if ( !tbox )
	{
		if ( savebutton )
			savebutton.style.display = 'none';
		return;
	}
	if ( tbox.value.length > 1000 )
	{
		tbox.value = tbox.value.slice( 0, 999 );
	}
	if ( tbox.value != '' && tbox.value != postCommentText )
	{
		savebutton.style.display = 'block';
	}
	else
	{
		savebutton.style.display = 'none';
	}
	curRows = tbox.rows;
	newRows = 1;
	c = 0;
	for ( x = 0; x < tbox.value.length; x++ )
	{
		if ( tbox.value.charAt( x ) == "\n" )
		{
			c = 0;
			newRows++;
			continue;
		}
		c++;
		if ( c >= tbox.cols )
		{
			c = 0;
			newRows++;
			continue;
		}
	}
	if ( newRows != curRows )
	{
		tbox.rows = newRows;
	}
}

function checkCommentLength()
{
	tbox = document.getElementById( 'commentInput' );
	if ( tbox.value.length > 1000 || tbox.value.length < 1 )
	{
		alert( '#Error_CommentLength' );
		return false;
	}
	return true;
}

function clearCommentInput()
{
	tbox = document.getElementById( 'commentInput' );
	if ( tbox.value == postCommentText )
	{
		tbox.value = '';
	}
}

function restoreCommentInput()
{
	tbox = document.getElementById( 'commentInput' );
	if ( tbox.value == '' )
	{
		tbox.value = postCommentText;
	}
}

function validateCommentSubmit()
{
	tbox = document.getElementById( 'commentInput' );
	if ( !checkCommentLength() )
	{
		return false;
	}
	if ( tbox.value == postCommentText || tbox.value == '' )
	{
		return false;
	}
	doCommentSubmit();
}

function doCommentSubmit()
{
	tbox = document.getElementById( 'commentInput' );
	subURL = document.getElementById( 'formSubURL' ).value;
	el_val_dt = document.getElementById( 'val_dt' );
	if ( el_val_dt )
	{
		el_val_gid = document.getElementById( 'val_gid' );
		var postData = {
			"json": 1,
			"xml": 1,
			"adding": 1,
			"dt": el_val_dt.value,
			"gid": el_val_gid.value,
			"comment": tbox.value,
			"sessionID": $('commentSessionID').value
		};
		vb = document.getElementById( 'val_verbose' );
		if ( vb )
		{
			postData.verbose = vb.value;
		}
	}
	else
	{			
		var postData = {
			"json": 1,
			"xml": 1,
			"adding": 1,
			"comment": tbox.value,
			"sessionID": $('commentSessionID').value
		};
	}
	createQuery2( subURL, handleCommentResponse, postData );
	tbox.disabled = true;
	document.getElementById( 'commentSave' ).style.display = 'none';
}

function handleCommentResponse()
{
	if ( req.readyState == 4 )
	{
		if ( req.status == 200 )
		{
			//alert( req.responseText );
			var data = eval( '(' + req.responseText + ')' );
			if ( !data.success )
			{
				alert( data.errorText );
				document.getElementById( 'commentSave' ).style.display = 'block';
				document.getElementById( 'commentInput' ).disabled = false;
				return false;
			}
			else
			{
				location.href = '?';
			}
		}
	}
}

addEvent(window, "load", checkCommentInput, false);
