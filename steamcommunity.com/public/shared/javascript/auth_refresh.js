
document.addEventListener( "DOMContentLoaded", InitRefresh );

function InitRefresh()
{
	if ( typeof window.g_wapit === 'string' || typeof window.g_wapitExpiry === 'number' )
	{
		try
		{
			var expiry;

			if ( typeof window.g_wapit === 'string' )
			{
				var body = JSON.parse( atob( window.g_wapit.split( '.' )[1] ) );
				if ( typeof body.exp === 'number' )
				{
					expiry = body.exp;
				}
			}
			else
			{
				expiry = window.g_wapitExpiry;
			}

						var offset = Math.floor( Math.random() * 600 ) + 1800;
			var timeout = ( expiry - offset ) * 1000 - Date.now();
						window.setTimeout( AutoRefresh, timeout );
		}
		catch ( err ) {}
	}
}

function AutoRefresh()
{
		if ( window.g_wapitRefreshEnabled )
		Refresh();
}

function Refresh( onRefreshed )
{
	
	$J.ajax( {
		type: 'POST',
		url: 'https://login.steampowered.com/jwt/ajaxrefresh',
		data: { redir: window.location.href },
		crossDomain: true,
		xhrFields: { withCredentials: true },
	} ).done( function( response )
	{
		
		if ( !response.success )
			return;

		$J.ajax( {
			type: 'POST',
			url: response.login_url,
			data: Object.assign( response, { prior: window.g_wapit } ),
		} ).done( function( response )
		{
			
			if ( response.result === 1 && response.token )
			{
				window.g_wapit = response.token;
				window.g_wapitExpiry = response.rtExpiry;
				InitRefresh();

				if ( typeof onRefreshed === 'function' )
					onRefreshed( response.token );
			}
		} );
	} );
}

window.g_wapitRefresh = Refresh;
window.g_wapitRefreshEnabled = true;
