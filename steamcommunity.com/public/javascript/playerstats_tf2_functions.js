

var bPageReady = false;
function toggleDetail( className )
{
	if ( bPageReady )
	{
		d = document.getElementById( className + 'Extended' );
		if ( d.style.display == 'block' )
		{
			d.style.display = 'none';
			document.getElementById( className + 'MoreDetailIcon' ).style.display = 'block';
			document.getElementById( className + 'MoreDetailLink' ).style.display = 'block';
			document.getElementById( className + 'LessDetailIcon' ).style.display = 'none';
			document.getElementById( className + 'LessDetailLink' ).style.display = 'none';
		}
		else
		{
			d.style.display = 'block';
			document.getElementById( className + 'MoreDetailIcon' ).style.display = 'none';
			document.getElementById( className + 'MoreDetailLink' ).style.display = 'none';
			document.getElementById( className + 'LessDetailIcon' ).style.display = 'block';
			document.getElementById( className + 'LessDetailLink' ).style.display = 'block';
		}
	}
}
function pageReady()
{
	bPageReady = true;
}
addEvent(window, "load", pageReady, false);
