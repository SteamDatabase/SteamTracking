
//-----------------------------------------------------------------------------
// Purpose: Loads in the logo for a game once it enters view in the grid.
//-----------------------------------------------------------------------------
function onReadyForDisplay( oContainer )
{
	oContainer = ToPanel( oContainer );
	var oImage = oContainer.FindChildrenWithClassTraverse('LogoImage')[0];
	if( oImage.GetAttributeInt('loaded', 0) )
		return;
	oImage.SetImage( oImage.GetAttributeString('logo', '') );
	oImage.SetAttributeInt('loaded', 1)
}


//-----------------------------------------------------------------------------
// Purpose: Hides the logo of a game when it falls out of view, to save on vram
//-----------------------------------------------------------------------------
function onDoneWithDisplay( oContainer )
{
	oContainer = ToPanel( oContainer );
	var oImage = oContainer.FindChildrenWithClassTraverse('LogoImage')[0];
	if( !oImage.GetAttributeInt('loaded', 0) )
		return;
	oImage.SetImage( '' );
	oImage.SetAttributeInt('loaded', 0)
}


//-----------------------------------------------------------------------------
// Purpose: Creates necessary panels for a game if they don't already exists.
//-----------------------------------------------------------------------------
function AddGamePanel( appid )
{
	// Check to see if the panel exists or not
	var oPanel = $( '#game_' + appid );

	if( oPanel ) // Panel exists... maybe make sure it's visible?
	{
		return true;
	}

	// Else create..
	var app = GetAppInfo( appid );
	if( !app )
		return false;

	var oParent = $('#GamesContainer');
	var oButton = $.CreatePanel('Button', oParent, 'game_' + app.appid );
	oButton.AddClass('GameRow');
	oButton.AddClass('StatsRow');

	// Logo image
	var oImage = $.CreatePanel('Image', oButton, '' );
	oImage.SetAttributeString( 'logo', app.logo );
	oImage.AddClass('LogoImage');

	$.RegisterEventHandler('ReadyPanelForDisplay', oButton, onReadyForDisplay );
	$.RegisterEventHandler('PanelDoneWithDisplay', oButton, onDoneWithDisplay );

	// Title wrapper panel
	var oWrapperPanel = $.CreatePanel('Panel', oButton, '' );
	oWrapperPanel.AddClass('TextCol');

	// Title
	var oLabel = $.CreatePanel('Label', oWrapperPanel, '' );
	oLabel.text = app.name;
	oLabel.AddClass('Title');

	// Playtime
	var oPlaytime = $.CreatePanel('Label', oWrapperPanel, '' );
	var strHrs = '';

	if( app.hours_forever )
		strHrs += app.hours_forever + " hrs on record";

	if( app.hours )
	{
		if( strHrs.length > 0 )
			strHrs += ' / ';
		strHrs += app.hours + " last two weeks";
	}

	oPlaytime.text = strHrs;
	oPlaytime.AddClass('Playtime');

	var fnContextMenu = CreateContextMenu( app, g_rgBucket );


	//$.RegisterKeyBind( oButton, 'steampad_a', fnContextMenu );
	$.RegisterEventHandler('Activated', oButton, fnContextMenu );


}


//-----------------------------------------------------------------------------
// Purpose: Removes an item from your wishlist
//-----------------------------------------------------------------------------
function RemoveFromWishlist( appid )
{

	$.AsyncWebRequest( 'https://steamcommunity.com/actions/RemoveFromWishlist',
		{
			type: 'POST',
			data: {
				sessionid: g_sessionID,
				appid: appid
			},
			error: function() {
				alert( "Failed to remove this item from your wishlist. Please try again later." );
			},
			success: function() {
				$('#game_' + appid).AddClass('Deleted');
			}
		}
	);
}

//-----------------------------------------------------------------------------
// Purpose: Stop following a group (Ie leave an OGG)
//-----------------------------------------------------------------------------
function StopFollowingApp( appid )
{

	$.AsyncWebRequest( 'https://steamcommunity.com/app/' + appid + '/stopfollowing/',
		{
			type: 'POST',
			data: {
				sessionid: g_sessionID
			},
			error: function() {
				alert( "Failed to remove this item from your following list. Please try again later." );
			},
			success: function() {
				$('#game_' + appid).AddClass('Deleted');
			}
		}
	);
}


// -----------------------------------------------------------------------------
// Purpose: Creates necessary panels for a game if they don't already exists.
//-----------------------------------------------------------------------------
function GetAppInfo( appid )
{
	var container = g_rgGameData;
	if( g_rgBucket == 'wishlist' )
		container = g_rgWishlistData;
	else if( g_rgBucket == 'followed')
		container = g_rgFollowedData;

	for( var i=0; i < container.length; i++ )
	{
		if( container[i].appid == appid )
		{
			if( g_strMandatoryField && !container[i][g_strMandatoryField] )
				return false;

			return container[i];
		}
	}
	return false;
}

//-----------------------------------------------------------------------------
// Purpose: Re-sorts the games list array
//-----------------------------------------------------------------------------
function SortGamesList( fnDiff, bAscending )
{
	// Ok, we're going to trust that v8 is using a robust sorting algo
	// and just mirror what it does
	g_rgGameData.sort(fnDiff);

	$('#GamesContainer').RemoveAndDeleteChildren();
	$('#GamesContainer').ScrollToTop();
	// Now show the top items...
	for( var i=0; i < 10; i++ )
	{
		if( i > g_rgGameData.length )
			break;
		AddGamePanel( g_rgGameData[i].appid );
	}


}

function SortByName()
{
	if( g_strCurrentView == 'name')
		return;

	g_strCurrentView = 'name';
	g_strMandatoryField = false;
	SortGamesList( function(a, b){
		return strcmp(a.name, b.name);
	} );
}

function SortByPlaytimeRecent()
{
	if( g_strCurrentView == 'recent')
		return;

	g_strCurrentView = 'recent';
	g_rgBucket = 'game';

	g_strMandatoryField = 'last_played';
	SortGamesList( function(a, b){
		return (b.last_played || 0) - ( a.last_played || 0 );
	}, true );
}

function SortByWishlist()
{
	g_strMandatoryField = false;

	if( g_strCurrentView == 'name')
		return;

	g_strCurrentView = 'wishlist';
	g_rgBucket = 'wishlist';

	$('#GamesContainer').RemoveAndDeleteChildren();
	$('#GamesContainer').ScrollToTop();
	// Now show the top items...

	for( var i=0; i < 10; i++ )
	{
		if( i >= g_rgWishlistData.length )
			break;

		//$.Msg(g_rgWishlistData[i]);

		AddGamePanel( g_rgWishlistData[i].appid );
	}
}

function SortByFollowed()
{
	g_strMandatoryField = false;

	if( g_strCurrentView == 'followed')
		return;

	g_strCurrentView = 'followed';
	g_rgBucket = 'followed';

	$('#GamesContainer').RemoveAndDeleteChildren();
	$('#GamesContainer').ScrollToTop();
	// Now show the top items...

	for( var i=0; i < 10; i++ )
	{
		if( i >= g_rgFollowedData.length )
			break;

		//$.Msg(g_rgWishlistData[i]);

		AddGamePanel( g_rgFollowedData[i].appid );
	}
}

function SortByPlaytimeTotal()
{
	if( g_strCurrentView == 'all')
		return;

	g_rgBucket = 'game';

	g_strCurrentView = 'all';

	g_strMandatoryField = false;
	SortGamesList( function(a, b){
		return (b.hours_forever || 0) - ( a.hours_forever || 0 );
	}, true );
}


function strcmp(a, b)
{
	return ( a < b ) ? -1 : ( a > b ) ? 1 : 0;
}

function GridIndexChanged(id, index)
{
	// Make sure we've loaded +/- 10
	var nStart = index - 10;
	if( nStart < 0 )
		nStart = 0;

	var container = g_rgGameData;
	if( g_rgBucket == 'wishlist' )
		container = g_rgWishlistData;
	else if( g_rgBucket == 'followed')
		container = g_rgFollowedData;

	for( var i=nStart; i < nStart + 20 && i < container.length; i++)
	{
		AddGamePanel( container[i].appid );
	}
}