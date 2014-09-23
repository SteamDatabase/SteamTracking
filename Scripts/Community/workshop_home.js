
function ShowAppSuggestions()
{
	gGameSelector.ShowSuggestions();
	return false;
}

function InitWorkshopAppSearch()
{
	gGameSelector = new CGameSelectorWorkshopGames( $('workshopSearchText'), $('game_select_suggestions_ctn'), $('game_select_suggestions'), OnSelectGame );
}

function OnSelectGame( GameSelector, rgAppData )
{
	$( 'workshopSearchText' ).value = rgAppData.name;
	top.location.href = 'https://steamcommunity.com/app/' + rgAppData.appid + '/workshop/';
}

function OnLoad()
{
	gSearchField_Apps = new SearchFieldWithText( 'workshopSearchText', "Search for a Workshop", ShowAppSuggestions, null );
	InitWorkshopAppSearch();
}