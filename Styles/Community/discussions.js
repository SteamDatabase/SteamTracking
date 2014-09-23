

function InitDiscussionsPage()
{
	BindOnHashChange( OnDiscussionHashChange );
	OnDiscussionHashChange( window.location.hash );
}

function OnDiscussionHashChange( hash )
{
	var strTab = 'general';
	var url='';
	if ( hash.length > 1 )
	{
		hash = hash.substr(1);	// skip the #
		var rgMatches = hash.match( /^[^\^]*/ );

		if ( rgMatches && rgMatches[0] )
		{
			url = rgMatches[0];
			strTab = url.match( /^[a-zA-Z]*/ )[0];
		}
	}

	var elTabContent = $('forum_list_' + strTab );
	var elTab = $('tab_' + strTab );
	if ( elTab && elTabContent )
	{
		elTabContent.siblings().invoke('hide');
		elTabContent.show();
		elTab.siblings().each( function(e) {e.removeClassName('active') } );
		elTab.addClassName( 'active' );

		if ( strTab == 'games' && !elTabContent.bLoaded )
		{
			elTabContent.bLoaded = true;
			new Ajax.Updater( elTabContent, 'https://steamcommunity.com/discussions/games/', {method: 'GET', evalScripts: true} );
		}
	}
}

function GameSearchSelect( elSelection, rgJSON )
{
	window.location = 'https://steamcommunity.com/app/' + rgJSON['appid'] + '/discussions/';
}
function InitGameNameSearch()
{
	if ( $('associate_game' ) && $('game_select_suggestions_ctn') && $('game_select_suggestions') )
	{
		g_GameSelector = new CGameSelector( $('associate_game'), $('game_select_suggestions_ctn'), $('game_select_suggestions'), GameSearchSelect );
	}
}

function RenderGameForumList( listType, page, bLoggedIn )
{
	// hide the menu that popped this up
	HideMenu( $('quicklistselect'), $('quicklistselect_options') );

	var text = "";
	switch ( listType )
	{
		case 'popular':
			text = "Most Popular (this week)";
			break;
		case 'recent':
			text = "Your Recently Played Games";
			break;
		case 'allowned':
			text = "My Games";
			break;
		case 'wishlist':
			text = "Wishlist";
			break;
		case 'recommended':
			text = "Recommended";
			break;
		case 'visited':
			text = "Your Recently Viewed Hubs";
			break;
	}

	if ( !bLoggedIn )
	{
		showModal( 'NotLoggedInWarning', true );
		return;
	}

	$( 'quicklistselect_active' ).innerHTML = text;

	$('game_results_area').update( '<div class="discussiontab_loading"><img src="https://steamcommunity-a.akamaihd.net/public/images/login/throbber.gif"></div>');

	var params = { results: 1, type: listType };
	new Ajax.Updater( $('game_results_area'), 'https://steamcommunity.com/discussions/games/', {method: 'GET', evalScripts: true, parameters: params } );

}

g_strSearchInFlight = '';
function GameForumSearch()
{

	$('game_results_area').update( '<div class="discussiontab_loading"><img src="https://steamcommunity-a.akamaihd.net/public/images/login/throbber.gif"></div>');

	var params = { results: 1, type: 'searchallapps', searchquery: $('associate_game').value };
	new Ajax.Updater( $('game_results_area'), 'https://steamcommunity.com/discussions/games/', {method: 'GET', evalScripts: true, parameters: params } );
}

function GameForumSearchKeyDown( event )
{
	if ( !event )
		event = window.event;
	if ( $(event).keyCode == Event.KEY_RETURN )
	{
		if ( g_strSearchInFlight != $('associate_game').value )
		{
			g_strSearchInFlight = $('associate_game').value;
			GameForumSearch();
			g_GameSelector.HideSuggestions();
		}
		$(event).stop();
	}
}