
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
	top.location.href = 'http://steamcommunity.com/app/' + rgAppData.appid;
}

function OnLoad()
{
	gSearchField_Apps = new SearchFieldWithText( 'appHubsSearchText', "#CommunityHome_SearchForApps", ShowAppSuggestions, null );
	gSearchField_Players = new SearchFieldWithText( 'SearchPlayers', "#Community_SearchPGLink", null, null );

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