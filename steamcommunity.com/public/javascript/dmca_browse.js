
function RemoveSearchTerm( param )
{
	var url = top.location.href.split( '?' );

	var newURL = url[0];
	var queryParams = url[1].split( '&' );
	var bAddedParams = false;
	for ( var i = 0; i < queryParams.length; ++i )
	{
		if ( queryParams[i].indexOf( param + '=' ) != -1 )
			continue;
		newURL += ( !bAddedParams ? '?' : '&' ) + queryParams[i];
		bAddedParams = true;
	}
	top.location.href = newURL;
}