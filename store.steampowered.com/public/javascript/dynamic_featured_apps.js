
var gFeaturedApps = {};
var gLargeCapApps = {};

var gDynamicLargeCapApps = [];
var gDynamicFeaturedApps = {};
var gDynamicUpdatedApps = [];

var gNumDynamicMainCapApps = 0;

function ReplaceDynamicMainCapsule()
{
		var mainCapsule = $J( "#main_cluster_scroll" );
	var children = mainCapsule.children( 'a' );
	if ( gDynamicLargeCapApps.length > 0 )
	{
		var prevChild = children.length > 0 ? $J( children[0] ) : null;
		for ( var i = 0; i < gDynamicLargeCapApps.length; ++i )
		{
			var appid = gDynamicLargeCapApps[i];
			if( gLargeCapApps[appid] === true )
			{
				continue;
			}
			++gNumDynamicMainCapApps;

			gLargeCapApps[appid] = true;
			var dynamicApp = $J( "#main_cluster_dynamic_app_" + appid );
			if ( prevChild )
			{
				prevChild.after( dynamicApp );
				prevChild = dynamicApp;
			}
			else
			{
								prevChild = dynamicApp;
				mainCapsule.append( dynamicApp );
				var lastDynamicApp = dynamicApp.clone();
				lastDynamicApp.attr( "id", "main_cluster_cap_last" );
				mainCapsule.append( lastDynamicApp );
			}
		}

				children = mainCapsule.children( 'a' );
		var idx = 0;
		for ( var i = 0; i < children.length; ++i )
		{
			var child = $J( children[i] );
			if ( child.attr( "id" ) != "main_cluster_cap_last" )
			{
				child.attr( "id", "main_cluster_cap_" + idx );
				++idx;
			}
		}

				$J( "#main_cluster_scroll").width( ( ( 616 + 4 ) * ( idx + 1 ) ) + 'px' );
	}
}

function ReplaceDynamicFeaturedApps( platform )
{
	var count = 0;
	var dynamicItems = gDynamicFeaturedApps[platform];
	if ( typeof dynamicItems == 'undefined' )
	{
		return;
	}

	for ( var i = 0; i < dynamicItems.length; ++i )
	{
		var appid = dynamicItems[i];
		if ( gFeaturedApps[platform][appid] !== true &&
		     gLargeCapApps[appid] !== true )
		{
			var originalID = '#small_cap_' + platform + '_' + count;
			var dynamicID = '#small_cap_dynamic_' + platform + '_' + count;
			$J( '#small_cap_' + platform + '_' + count ).replaceWith( $J( dynamicID ) );
			$J( dynamicID ).attr( "id", originalID );
		}
		++count;
	}
	$J( "#dynamic_featured_apps_" + platform ).remove();
}

function ReplaceDynamicUpdatedApps()
{
	// remove any dupes from the fallback
	for ( var i = 0; i < gDynamicUpdatedApps.length; ++i )
	{
		var appid = gDynamicUpdatedApps[i];
		$J( "#featured_updated_app_" + appid ).remove();
	}

	var numDynamicUpdatedApps = gDynamicUpdatedApps.length;
	var container = $J( "#updated_apps_container" );
	while ( container.children().length > 0 &&
		    ( container.children().length + numDynamicUpdatedApps ) > 3 )
	{
		var children = container.children();
		var firstChild = children[0];
		firstChild.remove();
	}

	// copy over dynamic apps
	var dynamicApps = $J( "#dynamic_updated_apps" );
	dynamicApps.children().each( function() { container.append( this ); } );
	$J( "#dynamic_updated_apps" ).remove();

	if ( container.children().length > 0 )
	{
		$J( "#dynamic_updated_apps").show();
		$J( "#updated_apps_block" ).show();
		$J( "#updated_apps_container" ).append( '<div style="clear: left"></div>' );
	}
}