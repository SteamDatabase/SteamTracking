
var g_strBuffer = '';
var g_bCapture = false;



jQuery( document ).ready(function( $ )
{

	$( document ).keypress(function(e)
	{

		if( e.key == "Enter" || e.keyCode == 13)
		{
			if( g_strBuffer.trim().toUpperCase() == 'SEARCH' )
			{
				g_strBuffer == '';
				var strPassword = prompt();
				if( !strPassword )
				{
					return;
				}

				$J.ajax({
					url: "https:\/\/store.steampowered.com\/store\/actions\/clues",
					dataType: "json",
					cache: false,
					data: {key: strPassword}
				}).done(function( result ) {
					if( result && result.url )
						window.location = result.url;
					else if( result.response )
						alert(result.response);
				});
			}
			g_strBuffer = '';
		}

		if( e.key )
			g_strBuffer += e.key;
		else if( e.charCode )
			g_strBuffer += String.fromCharCode(e.charCode);


	});
});