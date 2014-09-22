
var g_rgFriendDataByApp = null;
function InitFriendRecommendations( rgApps, target, navcontext )
{
	new Ajax.Request(
		'http://store.steampowered.com/friends/frienddata',
		{
			method: 'get',
			parameters: { u: g_AccountID },
			onSuccess: function ( transport ) {
				if ( transport.responseJSON )
				{
					g_rgFriendDataByApp = transport.responseJSON;
					UpdateFriendRecommendations( rgApps, target, navcontext );
				}
			}
		}
	)
}

function UpdateFriendRecommendations( rgApps, target, navcontext )
{
	if ( !g_rgFriendDataByApp )
	{
		return;
	}
	
	var rgAppData = new Object();
	for ( var i = 0; i < rgApps.length; i++ )
	{
		var appid = rgApps[i];
		if ( g_rgFriendDataByApp[ appid ] )
			rgAppData[ appid ] = g_rgFriendDataByApp[ appid ];
	}
	
	if ( Object.keys( rgAppData ).length > 0 )
	{
		new Ajax.Updater(
				target,
				'http://store.steampowered.com/friends/renderfriendactivity',
				{ parameters: { rgAppData: Object.toJSON( rgAppData ), navcontext: navcontext }, method: 'post' }
			);
	}
}

