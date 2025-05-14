
function numberWithCommas( x )
{
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function escapeRegex( x )
{
	return x.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

function OnChangePresetDateRange()
{
	var selection = $J( "#PresetDateRange" ).val();
	switch ( selection )
	{
		case "custom":
			break;
		default:
			$J( "#start_date" ).attr( 'disabled', true );
			$J( "#end_date" ).attr( 'disabled', true );
			OnSubmitFilterForm();
			break;
	}
}

$J.extend( $J.fn.dataTableExt.oSort, {
	"formatted-num-pre": function( a ) {
		a = (a === "-" || a === "") ? 0 : a.replace( /[^\d\-\.]/g, "" );
		return parseFloat( a );
	},

	"formatted-num-asc": function( a, b ) {
		return a - b;
	},

	"formatted-num-desc": function( a, b ) {
		return b - a;
	}
});


function renderUTMCellData( data, type, row )
{
	// only ellipsify what is displayed, not the underlying data
	if ( type === 'display' )
	{
		return '<span>' + data + '</span><span class=\"expanded\">' + data + '</span>';
	}
	return data;
}

// Check if the link meets UTM Analytics requirements
// This function will need to be kept up to date as UTM Analytics improves
function testUTMLink( linktotest )
{
	var errorlabel = '<span style="color:red; text-weight:bold;">Error: </span>';

	if ( linktotest.length < 1 )
	{
		return 'Please enter a link';
	}

	// check for issues where we can point them to the problem
	if ( -1 == linktotest.indexOf("store.steampowered.com/app/") )
	{
		return errorlabel + 'The link destination must be store.steampowered.com/app/YOUR_APP_ID';
	}

	if ( -1 == linktotest.indexOf("utm_campaign") && -1 == linktotest.indexOf("utm_source") )
	{
		return errorlabel + 'A utm_campaign or utm_source parameter is required';
	}

	// look for whitespace
	const whitespace = "[\\x20\\t\\r\\n\\f]";
	let rwhitespace = new RegExp( whitespace + "+", "g" );
	if ( rwhitespace.test( linktotest ) )
	{
		return errorlabel + 'The link includes spaces';
	}

	// check if there are other issues with the link.
	// allow steam://openurl/ at the start
	// the character check A-Za-z0-9$_.!*(),%\'\- is non-reserved URL characters and % to allow for url encoded characters
	let re = new RegExp( '^(steam:\/\/openurl\/)?https?:\/\/store\.steampowered\.com\/app\/[0-9]+(\/?|\/[A-Za-z0-9_]*\/?)\\?(utm_[A-Za-z]+=[A-Za-z0-9$_.!*(),%\'\-]+\&*)*(utm_source=[A-Za-z0-9$_.!*(),%\'\-]+|utm_campaign=[A-Za-z0-9$_.!*(),%\'\-]+)+', 'i' );
	if ( !re.test( linktotest ) )
		return errorlabel + 'The link does not appear valid. If you believe the link is formatted correctly please <a target="_blank" href="https://help.steampowered.com/en/wizard/HelpWithPublishing?issueid=905">contact us</a>.';

	// Success - display the parsed UTM parameters
	let searchParams = new URLSearchParams( linktotest.split('?')[1] );
	const k_utm_params = [ 'utm_source', 'utm_campaign', 'utm_medium', 'utm_term', 'utm_content' ];
	let utm_results = '<span style="">';
	for ( const utm_param of k_utm_params )
	{
		if ( searchParams.has( utm_param ) )
			utm_results += utm_param + ' = ' + encodeURIComponent( searchParams.get( utm_param ) ) + '<br>';
	}
	utm_results += '</span>';

	return '<span style="color:green;font-weight:bold;">Success! The test passed and returned:</span><br>' + utm_results;
}


