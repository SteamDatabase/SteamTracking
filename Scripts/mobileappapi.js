
function runLocalUrl(url)
{
	var iframe = document.createElement("IFRAME");
	iframe.setAttribute("src", url);
	document.documentElement.appendChild(iframe);
	iframe.parentNode.removeChild(iframe);
	iframe = null;
}



var g_intervalMobileAPICall = null;
var g_bMobileAPICallInProgress = false;


function BIsMobileAPICallInProgress()
{
	return g_bMobileAPICallInProgress;
}


//	[status, data], status='ok' / 'error' / 'fatal'
function GetValueFromLocalURL( url, timeout, success, error, fatal )
{
	
	
	g_bMobileAPICallInProgress = true;
	runLocalUrl( url );

	if ( !timeout )
	{
		timeout = 5;
	}

	var timeoutTime = Date.now() + (1000 * timeout);

	if ( g_intervalMobileAPICall != null )
	{
		window.clearInterval( g_intervalMobileAPICall );
		g_intervalMobileAPICall = null;
	}

	g_intervalMobileAPICall = window.setInterval( function() {

					var status = window.SGHandler.getResultStatus();
			if ( status && status != 'busy' )
			{
				g_bMobileAPICallInProgress = false;
				if ( g_intervalMobileAPICall )
					window.clearInterval( g_intervalMobileAPICall );

				value = window.SGHandler.getResultValue();
				code = 0;
				try {
					code = window.SGHandler.getResultCode();
				} catch(err) {
				}

				if ( status == 'ok' )
				{
					if ( success )
					{
						success( value, code );
					}
				}
				else if ( status == 'error' )
				{
					if ( error )
					{
						error( value, code );
					}
				}
				else
				{
					if ( fatal )
					{
						fatal( value, code );
					}
				}

				return [ status, value, code ];
			}
		
		if ( Date.now() > timeoutTime )
		{
			g_bMobileAPICallInProgress = false;
			if ( g_intervalMobileAPICall )
				window.clearInterval( g_intervalMobileAPICall );

			if ( fatal )
			{
				fatal( 'timeout', -1 );
			}
		}

	}, 100 );
	}

