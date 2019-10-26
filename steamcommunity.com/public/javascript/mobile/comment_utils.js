
var postCommentText = "Post a comment here...";

function checkCommentInput()
{
	var textarea = $J( '#commentInput' );
	var submitButton = $J( '#submit' );

	if ( !textarea.length || !submitButton.length )
	{
		return;
	}
	
	if ( textarea.val().length > 1000 )
	{
		textarea.val( textarea.val().slice( 0, 999 ) );
	}
	if ( textarea.val() != '' && textarea.val() != postCommentText && submitButton.hasClass( 'btn_disabled' ) )
	{
		submitButton.removeClass( 'btn_disabled' );
	}
	else if ( textarea.val() == '' || textarea.val() == postCommentText )
	{
		submitButton.addClass( 'btn_disabled' );
	}

	curRows = textarea.attr( 'rows' );
	newRows = 1;
	c = 0;
	for ( x = 0; x < textarea.val().length; x++ )
	{
		if ( textarea.val().charAt( x ) == "\n" )
		{
			c = 0;
			newRows ++;
			continue;
		}
		c++;
		if ( c >= textarea.attr( 'cols' ) )
		{
			c = 0;
			newRows ++;
			continue;
		}
	}
	if ( newRows != curRows )
	{
		textarea.attr( 'rows', newRows );
	}
}

function checkCommentLength()
{
	var textarea = $J( '#commentInput' );
	
	if ( !textarea || !textarea.val() )
	{
		return;
	}
	
	if ( textarea.val().length > 1000 || textarea.val().length < 1 )
	{
		$J( '#commentErrorText' ).html( 'Comments must be between 1 and 1000 characters in length.' );
		$J( '#commentErrorText' ).css( 'display', 'block' );
		return false;
	}
	return true;
}

function clearCommentInput()
{
	var textarea = $J( '#commentInput' );
	if ( textarea.val() == postCommentText )
	{
		textarea.val( '' );
	}
}

function restoreCommentInput()
{
	var textarea = $J( '#commentInput' );
	
	if ( !textarea || !textarea.val() )
	{
		return;
	}
	
	if ( textarea.val() == '' )
	{
		textarea.val( postCommentText );
	}
}

function validateCommentSubmit()
{
	var textarea = $J( '#commentInput' );
	
	if ( !textarea || !textarea.val() )
	{
		return;
	}
	
	if ( !checkCommentLength() )
	{
		return false;
	}
	if ( textarea.val() == postCommentText || textarea.val() == '' )
	{
		return false;
	}
	
	doCommentSubmit();
}

function doCommentSubmit()
{
	var textarea = $J( '#commentInput' );
	var submitButton = $J( '#submit' );

	if ( !textarea || !textarea.val() || !submitButton || !$J( '#formSubURL' ) )
	{
		return;
	}
	
	subURL = $J( '#formSubURL' ).val();
	
	if ( submitButton.hasClass( 'btn_disabled' ) || submitButton.hasClass( 'btn_active' ) )
		return false;

	submitButton.addClass( 'btn_disabled' );

	var objectType = $J( '#objectType' );
	if ( objectType )
	{
		var objectGID = $J( '#objectGID' );
		var postData = {
			"objectType": objectType.val(),
			"objectGID": objectGID.val(),
			"comment": textarea.val(),
			"sessionID": $J( '#commentSessionID' ).val()
		};

		$J.ajax({
			type: 'POST',
			url: subURL,
			data: postData,
			success: function( data, textStatus, jqXHR )
			{
				if ( data && 'errorText' in data )
				{
					$J( '#commentErrorText' ).html( data.errorText );
					$J( '#commentErrorText' ).css( 'display', 'block' );
				}
				else
				{
					$J( '#commentErrorText' ).html( 'Comment Posted' );
					$J( '#commentErrorText' ).css( 'display', 'block' );
				}
				submitButton.removeClass( 'btn_disabled' );
				location.href = '?'; // refresh this page
			},
			error: function( jqXHR, textStatus, errorThrown )
			{
				$J( '#commentErrorText' ).html( 'There was a problem posting your comment. Please try again.' );
				$J( '#commentErrorText' ).css( 'display', 'block' );
				submitButton.removeClass( 'btn_disabled' );
			}
		});
	}

	textarea.attr( 'disabled', 'true' );
}

function deleteComment( deleteElement, subURL, sessionID, authorID, objectType, objectGID, commentTime )
{
	var postData = {
		"objectType": objectType,
		"objectGID": objectGID,
		"sessionID": sessionID,
		"authorID": authorID,
		"commentTime": commentTime
	};

	$J.ajax({
		type: 'POST',
		url: subURL,
		data: postData,
		success: function( data, textStatus, jqXHR )
		{
			location.href = '?'; // refresh this page
			$J( deleteElement ).removeClass( 'postDeleteLinkPressed' );
		},
		error: function( jqXHR, textStatus, errorThrown )
		{
			$J( deleteElement ).removeClass( 'postDeleteLinkPressed' );
		}
	});
	$J( deleteElement ).addClass( 'postDeleteLinkPressed' );
}

function validateCommentThreadSubmit( url, steamidOwner, gidFeature, gidFeature2 )
{
	var textarea = $J( '#commentInput' );

	if ( !textarea || !textarea.val() )
	{
		return;
	}

	if ( !checkCommentLength() )
	{
		return false;
	}
	if ( textarea.val() == postCommentText || textarea.val() == '' )
	{
		return false;
	}

	doCommentThreadSubmit( url, steamidOwner, gidFeature, gidFeature2 );
}

function doCommentThreadSubmit( url, steamidOwner, gidFeature, gidFeature2 )
{
	var textarea = $J( '#commentInput' );
	var submitButton = $J( '#submit' );

	if ( !textarea || !textarea.val() || !submitButton )
	{
		return;
	}

	var actionURL = url + 'post/' + steamidOwner + '/' + gidFeature;

	if ( submitButton.hasClass( 'btn_disabled' ) || submitButton.hasClass( 'btn_active' ) )
		return false;

	submitButton.addClass( 'btn_disabled' );

	var objectType = $J( '#objectType' );
	if ( objectType )
	{
		var objectGID = $J( '#objectGID' );
		var postData = {
			"comment": textarea.val(),
			"sessionid": $J( '#commentSessionID' ).val()
		};

		if ( gidFeature2 && gidFeature2 != -1 )
			postData['feature2'] = gidFeature2;

		$J.ajax({
			type: 'POST',
			url: actionURL,
			data: postData,
			success: function( data, textStatus, jqXHR )
			{
				if ( data && 'errorText' in data )
				{
					$J( '#commentErrorText' ).html( data.errorText );
					$J( '#commentErrorText' ).css( 'display', 'block' );
				}
				else
				{
					$J( '#commentErrorText' ).html( 'Comment Posted' );
					$J( '#commentErrorText' ).css( 'display', 'block' );
				}
				submitButton.removeClass( 'btn_disabled' );
				window.location = window.location;
			},
			error: function( jqXHR, textStatus, errorThrown )
			{
				$J( '#commentErrorText' ).html( 'There was a problem posting your comment. Please try again.' );
				$J( '#commentErrorText' ).css( 'display', 'block' );
				submitButton.removeClass( 'btn_disabled' );
			}
		});
	}

	textarea.attr( 'disabled', 'true' );
}

/* TODO */
function deleteCommentThreadComment( deleteElement, subURL, sessionID, authorID, objectType, objectGID, commentTime )
{
}

