

function toggleDetail( className )
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
function switchTab( sectionName )
{
	if ( sectionName == 'records' )
	{
		document.getElementById( 'personalAchieve' ).style.display = 'none';
		document.getElementById( 'records' ).style.display = 'block';
		document.getElementById( 'recordsTabOn' ).style.display = 'block';
		document.getElementById( 'recordsTabOff' ).style.display = 'none';
		document.getElementById( 'personalAchieveTabOff' ).style.display = 'block';
		document.getElementById( 'personalAchieveTabOn' ).style.display = 'none';
	}
	else if ( sectionName == 'personalAchieve' )
	{
		document.getElementById( 'personalAchieve' ).style.display = 'block';
		document.getElementById( 'records' ).style.display = 'none';
		document.getElementById( 'recordsTabOn' ).style.display = 'none';
		document.getElementById( 'recordsTabOff' ).style.display = 'block';
		document.getElementById( 'personalAchieveTabOff' ).style.display = 'none';
		document.getElementById( 'personalAchieveTabOn' ).style.display = 'block';
	}
}
function switchBoards()
{
	URLPrefix = document.getElementById( 'boardURLPrefix' ).value;
	URLPrefix += document.getElementById( 'lbID' ).value;
	location.href = URLPrefix;
}
