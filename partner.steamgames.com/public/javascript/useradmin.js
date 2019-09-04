/* <script type="text/javascript"> */


/* Adds a confirmation message at the top of the next page load.
 * optionally pass class to make it not a happy green box.
 */
function SetNotice(title, message, css)
{
	val = { 'title': title, 'message': message, 'css': css };
	return $J.cookie('loadnotice', JSON.stringify(val), {'path': '/'} );
}

function DisplayPendingNotice()
{
	var notice = JSON.parse( jQuery.cookie('loadnotice') );
	if( !notice )
		return;

	var scope = $J('#UANotice');
	$J('.title', scope).text( notice.title );
	$J('.message', scope).html( notice.message );

	if( notice.css )
		scope.addClass( notice.css );

	scope.show();
	$J.cookie('loadnotice', null, {'path': '/'}  );
}

function SetAppRightsFromResponse( rgResponse, prefix )
{
	if( rgResponse.rights.rightsbreakdown )
	{
		$J.each(rgResponse.rights.rightsbreakdown, function (i, j) {
			if( rgResponse.actorrights.rightsbreakdown != undefined && !rgResponse.actorrights.rightsbreakdown[i] )
				$J('#' + prefix + i).hide().next().hide().next().hide();
			else
				$J('#' + prefix + i).show().next().show().next().show();
				
			$J('#' + prefix + i).prop('checked', j);
		});
	}
	else
		$J('.a_rightsCheckboxes.').prop('checked', false);
}

