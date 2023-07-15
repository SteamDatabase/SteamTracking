
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
	var successlabel = '<span style="color:green; text-weight:bold;">Success: the test passed</span>';

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

	// check if there are other issues with the link.
	// Allow steam://openurl/ at the start
	let re = new RegExp( '^(steam:\/\/openurl\/)?https?:\/\/store\.steampowered\.com\/app\/[0-9]+(\/?|\/[A-Za-z0-9_]*\/?)\\?(utm_campaign|utm_source|(utm_[A-Za-z0-9_]*=[A-Za-z0-9_]*&utm_campaign)|(utm_[A-Za-z0-9_]*=[A-Za-z0-9_]*&utm_source))=', 'i' );

	return re.test( linktotest ) ? successlabel : errorlabel + 'The link does not appear valid. If you believe the link is formatted correctly please <a target="_blank" href="https://help.steampowered.com/en/wizard/HelpWithPublishing?issueid=905">contact us</a>.';

}


