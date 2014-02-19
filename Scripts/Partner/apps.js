// <script type="text/javascript">
// programmatic name of language the user is editing
var g_language = '';

// list of programmatic names of languages the user has indicated the app supports
var g_rgEditingLanguages = {'token': 1};

// is there more than one editing language?
var g_bLocalized = false;

//
// Common client side request handler for apps AJAX calls. This routine
// exists to encapsulate the MIME type checking, GET/POST method, results
// cracking (as far as it goes), etc.
//
function AppsAjaxRequest( requestUrl, hashParms, successClosure, requestMethod )
{
	if ( requestMethod == null ) requestMethod = 'post';
	new Ajax.Request( requestUrl,
		{
			requestHeaders: { 'Accept': 'application/json' },
			method: requestMethod,
			parameters: hashParms,
			onSuccess: function( transport )
			{
				var results = transport.responseJSON;
				if ( results )
				{
					successClosure( results );
				}
			}
		} );
}


//
// many of our AJAX actions send back JSON with two items in it:
// - message: text to put into an element
// - success: whether it succeeded
// this callback writes the text into the specified element, and applies
// a CSS class based on the success code.  Additionally it will display a
// message indicating that a publish is required to commit changes.
//
function StandardCallback( results, elementName )
{
	elt = $(elementName);
	
	// check type of elt
	if ( typeof( elt ) == "object" )
	{
		elt.innerHTML = '';
		var message = [];
		// see if we have a multiline result or a single piece of text
		if ( typeof ( results[ 'message' ] ) == "string" )
		{
			message[0] = [ results[ 'message' ] ];
		}
		else
		{
			message = results[ 'message' ];
		}
		if( message )
		{
			for ( i = 0; i < message.length; i++ )
			{
				// poke in results
				eltSpan = document.createElement( 'span' );
				eltSpan.innerHTML = message[ i ];
				elt.appendChild( eltSpan );
				elt.appendChild( document.createElement( 'br' ) );
			}
		}

		// set style based on returned success code
		elt.className = results[ 'success' ] ? "outputSuccess" : "outputFailure";

		ShowUnpublishedChangesWarningIfNeeded();
		
		return true;
	}
	else
	{
		return false;
	}
}

// similar callback, only it just refreshes the whole page on completion no matter what
function RefreshCallback( results )
{
	window.location.reload( true );
}

function ShowUnpublishedChangesWarningIfNeeded()
{
	var elNeedsPublish = $('needs_publishing_msg')
	if ( elNeedsPublish && !elNeedsPublish.visible() )
	{
		AppsAjaxRequest( g_szBaseURL + "/apps/diff/" + g_AppId,
				{},
				function( results )
				{
					if ( results[ 'opened' ] )
					{
						elNeedsPublish.show();
					}
				}
			);
	}
}


//
// Common output setter for some of the app management calls.
// Pretty thin wrapper around StandardCallback.
//
function CommonSetHandler( results )
{
	StandardCallback( results, 'infoOutput' );
}


//
// Set the app's 'released' state, which affects visibility to non-owners
// for playtime, community, etc.
//
function SetAppReleaseState( appid, checkState )
{
	AppsAjaxRequest( g_szBaseURL + '/apps/setreleased/' + appid,
		{ 'released' : Boolean( checkState ) },
		CommonSetHandler
		);
}


//
// Set the app's marketing data locked state, which can prevent users
// from modifying certain game metadata that should not be adjusted
// after we have approved and applied it
//
function SetAppMktgLockedState( appid, checkState )
{
	AppsAjaxRequest( g_szBaseURL + '/apps/setmktglocked/' + appid,
		{ 'mktglocked' : Boolean( checkState ) },
		CommonSetHandler
		);
}


//
// Set whether the lobby APIs should be enabled for this game
//
function SetAppUsesLobbies( appid, lobbyState )
{
	AppsAjaxRequest( g_szBaseURL + '/apps/setuseslobbies/' + appid,
		{ 'useslobbies' : lobbyState },
		CommonSetHandler
		);
}


//
// Set whether the frenemy matchmaking ( friend blocking ) should be enabled for this game
//
function SetAppUsesFrenemies( appid, frenemyState )
{
	AppsAjaxRequest( g_szBaseURL + '/apps/setusesfrenemies/' + appid,
		{ 'usesfrenemies' : frenemyState },
		CommonSetHandler
		);
}

//
// Set the signing info
//
function SetAppSigningInfo( appid, fileKeyMap, signaturesCheckedOnLaunch )
{	
    AppsAjaxRequest( g_szBaseURL + '/apps/setsigninginfo/' + appid,
		{ 'filekeymap': fileKeyMap, 'signaturescheckedonlaunch': signaturesCheckedOnLaunch },
		function( results )
		{
			$('signinginfo_display').innerHTML = "Saved.";
			// now reflect results
			CommonSetHandler( results );
		}
		);		
}

//
// Set the economy info
//
function SetAppEconomyInfo( appid, assetURL, assetKey, apiLevel, privateMode, hasItemServer )
{
    AppsAjaxRequest( g_szBaseURL + '/apps/seteconomyinfo/' + appid,
		{ 'assetURL' : assetURL, 'assetKey' : assetKey, 'apiLevel' : apiLevel, 'privateMode' : privateMode, 'hasItemServer' : hasItemServer },
		function( results )
		{
			// now reflect results
			CommonSetHandler( results );
		},
		"POST"
		);
}

//
// Set the economy info
//
function EconomyFlushAssetAppearanceCache( appid )
{
	$J.post( g_szBaseURL + '/apps/economyflushappearance/' + appid).done( function( data ) {
		$J('#asset_class_version').text( data );
		ShowAlertDialog( 'Flush Asset Appearance Cache', 'Asset appearance cache flushed.  The Steam servers will start generating GetAssetClassInfo calls the next time each item is displayed.' );
	}).fail( function() {
		ShowAlertDialog( 'Flush Asset Appearance Cache', 'There was a problem flushing the asset appearance cache for this game.  Please try again later.' );
	} );
}

//
// Set the workshop info
//
function SetAppWorkshopInfo( appid, hashParams )
{
    AppsAjaxRequest( g_szBaseURL + '/apps/setworkshopinfo/' + appid, hashParams,
		function( results )
		{
			// now reflect results
			CommonSetHandler( results );
		},
		"POST"
		);
}

// handler for requesting keys
function SetRequestKeys( appid, requests )
{
	AppsAjaxRequest( g_szBaseURL + '/apps/requestkeys/' + appid,
		{
			'keys': Object.toJSON( requests )
		},
		function( results )
		{
			if ( results[ 'success' ] )
			{
				// no error, reload page
				$('AjaxOutput').innerHTML = "Reloading...";
				RefreshCallback( results );
			}
			else
			{
				$('AjaxOutput').innerHTML = "<span style='color:red'>" + results.message + "</span>";
			}
		},
		'POST'
		);

}

// handler for requesting keys
function ApproveKeys( requests )
{
	AppsAjaxRequest( g_szBaseURL + '/cdkeys/approvekeys/',
		{
			'approvals': Object.toJSON( requests )
		},
		function( results )
		{
			RefreshCallback( results );
		},
		'POST'
		);

}

function EconomyInventoryLogoUploadCallback( appid, jsonResponse )
{
	var results = jsonResponse.evalJSON( true );

	StandardCallback( results, 'inventory_logo_upload_response' );

	// poke the image in there
	if ( 'images' in results )
	{
		if ( 'economy_inventory_logo' in results.images )
		{
			var url = unescape( results.images.economy_inventory_logo );
			$( 'inventory_logo' ).src = url;
		}
	}
}

//
// handler for selecting an app in the app list.
// redirects the browser to the location for the particular appid
// 
function AppSelect( controller, method )
{
	if ( controller == "" || controller == undefined )
	{
		method = "apps";
	}
	if ( method == "" || method == undefined )
	{
		method = "view";
	}
	var appSelect = $('appSelect');
	var newID = appSelect.options[ appSelect.selectedIndex ].value;
	
	if ( newID == "-1" ) return;

	var newLocation = g_szBaseURL + '/' + controller + '/' + method + '/' + newID;
	window.location = newLocation;
}


//
// handler for changing builds within error info
//
function BuildSelect( appid )
{
	var buildSelect = $( 'buildSelect' );
	var newBuild    = buildSelect.options[ buildSelect.selectedIndex ].value;

	window.location = g_szBaseURL + '/errors/viewbuild/' + appid + '/' + newBuild;  
}


// 
// ajax requestor to ping the cser and ask it to load more minidumps for the given error
//
function RequestTenMoreMinidumps( errorid )
{
	$('requestOutput').innerHTML = '';
	AppsAjaxRequest( g_szBaseURL + '/errors/moreminidumps/' + errorid,
		{
		},
		function( results )
		{
			StandardCallback( results, 'requestOutput' );
		}
		);
}



//
// onchange handler, fixes up the anchor in the "go publish target app"
// link when user selects a new target app.
//
function MigrateTargetFixup( migrateSelect )
{
	if ( migrateSelect == null )
	{
		return;
	}
		
	var victimID = migrateSelect.options[ migrateSelect.selectedIndex ].value;
	
	if ( victimID > 0 )
	{
		$('publish_anchor').href = g_szBaseURL + "/apps/publishing/" + victimID;
	} 
}

function AppMigrate( appidSrc, appidDest, bForce, bMergeLite )
{
	if ( isNaN( appidDest ) )
	{
		alert( 'Destination app is not valid! ' + appidDest );
		return;
	}

	if ( !confirm( "Are you sure you want to migrate from appid: " + appidSrc + " to appid: " + appidDest + "?") )
	{
		return;
	}

	AppsAjaxRequest( g_szBaseURL + '/apps/migrate/' + appidSrc + '/' + appidDest ,
		{
			'force': bForce,
			'lite': bMergeLite
		},
		function( results )
		{
			StandardCallback( results, 'migrateOutput' );
		}
	);
}

function AppMigrateFromSelector( appidSrc, bForce, bMergeLite, selector )
{
	var appidDest = selector.options[ selector.selectedIndex ].value;
	
	if ( appidDest == -1 )
	{
		alert( "Please select a game first." );
		return;
	}

	AppMigrate( appidSrc, appidDest, bForce, bMergeLite );
}




function PerformNewAchievement( appid )
{
	AppsAjaxRequest( g_szBaseURL + '/apps/newachievement/' + appid,
		{
			'maxstatid' : $('max_statid_used').innerHTML,
			'maxbitid' : $('max_bitid_used').innerHTML
		},
		function( results )
		{
			$('max_statid_used').innerHTML = results[ 'maxstatid' ];
			$('max_bitid_used').innerHTML = results[ 'maxbitid' ];
			NewAchievement( appid, results[ 'achievement' ] );
			var id = EditAchievement( appid, results[ 'achievement' ] );
			location.hash = id + "_edit";
		}
		);
}


function PerformNewStat( appid )
{
	AppsAjaxRequest( g_szBaseURL + '/apps/newstat/' + appid,
		{
			'maxstatid' : $('max_statid_used').innerHTML
		},
		function( results )
		{
			$('max_statid_used').innerHTML = results[ 'maxstatid' ];
			NewStat( appid, results[ 'stat' ] );
			var id = EditStat( appid, results[ 'stat' ] );
			location.hash = id + "_edit";
		}
		);
}


function EditAchievementClosure( appid, statid, bitid )
{
	theClosure = function()
		{
		AppsAjaxRequest( g_szBaseURL + "/apps/fetchachievement/" + appid + "/" + statid + "/" + bitid,
			{},
			function( results )
			{
				EditAchievement( appid, results );
			}
			);
		};

	return theClosure;
}


function EditStatClosure( appid, statid )
{
	theClosure = function()
		{
		AppsAjaxRequest( g_szBaseURL + "/apps/fetchstat/" + appid + "/" + statid,
			{},
			function( results )
			{
				EditStat( appid, results );
			}
			);
		};

	return theClosure;
}


function IDFromAchievement( statid, bitid )
{
	return "a" + statid + "_" + bitid;
}

function IDFromStat( statid )
{
	return "s" + statid;
}


function DeleteAchievementRow( statid, bitid )
{
	var theRow = $( IDFromAchievement( statid, bitid ) );
	theRow.parentNode.removeChild( theRow );
}

function DeleteStatRow( statid )
{
	var theRow = $( IDFromStat( statid ) );
	theRow.parentNode.removeChild( theRow );
}


function DeleteAchievementClosure( appid, statid, bitid, apiname )
{
	theClosure = function()
		{
		if ( !confirm( "Delete achievement " + apiname + " (" + statid + "/" + bitid + ")?" ) )
		{
			return;
		}
		AppsAjaxRequest( g_szBaseURL + "/apps/deleteachievement/" + appid + "/" + statid + "/" + bitid,
			{},
			function( results )
			{
				if ( results[ 'deleted' ] )
				{
					DeleteAchievementRow( statid, bitid );
				}
			}
			);
		};

	return theClosure;
}


function DeleteStatClosure( appid, statid )
{
	theClosure = function()
		{
		AppsAjaxRequest( g_szBaseURL + "/apps/deletestat/" + appid + "/" + statid,
			{},
			function( results )
			{
				if ( results[ 'deleted' ] )
				{
					DeleteStatRow( statid );
				}
			}
			);
		};

	return theClosure;
}


function RevertAchievementClosure( appid, statid, bitid )
{
	theClosure = function()
		{
		AppsAjaxRequest( g_szBaseURL + "/apps/fetchachievement/" + appid + "/" + statid + "/" + bitid,
			{},
			function( results )
			{
				if ( typeof( results ) == "object" )
				{
					ReplaceAchievement( appid, results );
				}
				else
				{
					DeleteAchievementRow( statid, bitid );
				}
			}
			);
		};

	return theClosure;
}


function RevertStatClosure( appid, statid )
{
	theClosure = function()
		{
		AppsAjaxRequest( g_szBaseURL + "/apps/fetchstat/" + appid + "/" + statid,
			{},
			function( results )
			{
				if ( typeof( results ) == "object" )
				{
					ReplaceStat( appid, results );
				}
				else
				{
					DeleteStatRow( statid );
				}
			}
			);
		};

	return theClosure;
}


function FetchLocalizedForm( elt, key )
{
	var formData = elt.serialize( true );
	if ( key in formData )
	{
		// nonlocalized value; marshal as a single string
		formData = formData[ key ];
	}
	else
	{
		// form has an associative array of language => string.
		// drop languages with empty values so we don't clutter up
		// the KV.
		for ( lang in formData )
		{
			if ( formData[ lang ] == "" )
			{
				delete formData[ lang ];
			}
		}
		
		// now catch the case where there's only an english string
		// in the otherwise localized form, and back the data off
		// to a regular string
		var keysRemaining = Object.keys( formData );
		if ( keysRemaining.length == 1 && keysRemaining[ 0 ] == 'english' ) 
		{
			formData = formData[ 'english' ];
		}
	}
	// either way, marshal as JSON for convenience of the server side code
	return Object.toJSON( formData );
}


function SaveAchievementClosure( appid, statid, bitid )
{
	theClosure = function()
		{
		var id = "ach" + statid + "_" + bitid;

		var displayName = FetchLocalizedForm( $( id + '_displayname' ), 'display_name' );
		var description = FetchLocalizedForm( $( id + '_description' ), 'description' );
		var progressSelect = $( id + '_progress' );
		
		AppsAjaxRequest( g_szBaseURL + "/apps/saveachievement/" + appid,
			{
			'statid' : statid,
			'bitid' : bitid,
			'apiname' : $( id + '_apiname' ).value,
			'displayname' : displayName,
			'description' : description,
			'permission' : $( id + '_permission' ).selectedIndex,
			'hidden' : $( id + '_hidden' ).checked,
			'progressStat' : progressSelect.value,
			'progressMin' : $( id + '_minval' ).value,
			'progressMax' : $( id + '_maxval' ).value
			},
			function( results )
			{
				if ( results[ 'saved' ] )
				{
					ReplaceAchievement( appid, results[ 'achievement' ] );
				}
				// leave it in edit mode otherwise
			},
			'post'
			);
		};

	return theClosure;
}

function SaveStatClosure( appid, statid )
{
	theClosure = function()
		{
		var id = "stat" + statid;
		AppsAjaxRequest( g_szBaseURL + "/apps/savestat/" + appid,
			{
			'statid' : statid,
			'stattype' : $( id + '_stattype' ).value,
			'apiname' : $( id + '_statapiname' ).value,
			'permission' : $( id + '_permission' ).selectedIndex,
			'incrementonly' : $( id + '_incrementonly' ).checked,
			'maxchange' : $( id + '_maxchange' ).value,
			'min' : $( id + '_min' ).value,
			'max' : $( id + '_max' ).value,
			'windowsize' : $( id + '_windowsize' ).value,
			'default' : $( id + '_default' ).value,
			'aggregated' : $( id + '_aggregated' ).checked,
			'displayname' : $( id + '_displayname' ).value
			},
			function( results )
			{
				if ( results[ 'saved' ] )
				{
				