
var bSearching = false;
var gSearchField_Apps = null;
var gSearchField_Players = null;
var gGameSelector = null;
var timeout = null;

function InitGameHubSearch()
{
	gGameSelector = new CGameSelector( $('appHubsSearchText'), $('game_select_suggestions_ctn'), $('game_select_suggestions'), OnSelectGame );
}

function OnSelectGame( GameSelector, rgAppData )
{
	$( 'appHubsSearchText' ).value = rgAppData.name;
	top.location.href = 'https://steamcommunity.com/app/' + rgAppData.appid;
}

function OnCommunityHomeLoad()
{
	gSearchField_Apps = new SearchFieldWithText( 'appHubsSearchText', "Search for products", ShowAppSuggestions, null );
	gSearchField_Players = new SearchFieldWithText( 'SearchPlayers', "Search players and groups", null, null );

	CheckForMoreContent();
	ScrollToLast();
	InitGameHubSearch();
}

function DoneSearchingForApps()
{
	bSearching = false;
	document.body.style.cursor = 'default';
}

function ShowAppSuggestions()
{
	gGameSelector.ShowSuggestions();
	return false;
}