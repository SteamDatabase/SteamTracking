
// Custom error reporting to use whenever prototype is included
function ReportError( uri, identifier, message )
{
	new Ajax.Request('https://store.steampowered.com/jserrorreport/',
	{
	    method:'post',
	    parameters: { 
	    	'identifier' : identifier,
			'error' : message, 
			'uri' : uri
		},
	    onSuccess: function(transport){
	    	//alert( 'error ok' );
			return;
	    },
	    onFailure: function(){
	    	//alert( 'error fail' );
			return;
		}
	});
}



