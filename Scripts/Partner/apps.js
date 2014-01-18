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
function SetAppEconomyInfo( appid, assetURL, assetKey, apiLevel, assetClassVersion, privateMode, hasItemServer )
{
    AppsAjaxRequest( g_szBaseURL + '/apps/seteconomyinfo/' + appid,
		{ 'assetURL' : assetURL, 'assetKey' : assetKey, 'apiLevel' : apiLevel, 'assetClassVersion': assetClassVersion, 'privateMode' : privateMode, 'hasItemServer' : hasItemServer },
		function( results )
		{
			// now reflect results
			CommonSetHandler( results );
		},
		"POST"
		);
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
					ReplaceStat( appid, results[ 'stat' ] );
				}
				// leave it in edit mode otherwise
			},
			'post'
			);
		};

	return theClosure;
}

function BAchievementFieldLocalized( achievement, field )
{
	return typeof( achievement[ field ] ) != "string";
}


function LocalizedAchievementField( achievement, field, fallback, language )
{
	// fallback is used only for loc tokens, as they are required where
	// language strings are not.

	var results = {};
	if ( typeof( achievement[ field ] ) == "string" )
	{
		// non-localized field: treat it as the english field.
		// emit bPresent iff we are asking for english.
		// if we're asking for loc tokens, emit the fallback token.
		// otherwise emit the fallback english string.

		if ( language == "token" )
		{
			results[ 'bPresent' ] = false;
			results[ 'string' ] = fallback;
		}
		else
		{
			results[ 'bPresent' ] = ( language == "english" );
			results[ 'string' ] = achievement[ field ];
		}
	}
	else if ( language in achievement[ field ] )
	{
		// have this language; emit the localized field.
		results[ 'bPresent' ] = true;
		results[ 'string' ] = achievement[ field ][ language ];
	}
	else
	{
		// don't have this language; emit the English string instead,
		// or the fallback string if we're doing loc tokens, or the
		// empty string otherwise.

		results[ 'bPresent' ] = false;
		if ( 'english' in achievement[ field ] )
			results[ 'string' ] = achievement[ field ][ 'english' ];
		else if ( language == 'token' )
			results[ 'string' ] = fallback;
		else
			results[ 'string' ] = '';
	}
	
	return results;
}


function AchievementSpan( achievement, field, fallback, language )
{
	data = LocalizedAchievementField( achievement, field, fallback, language );
	
	var text = "";
	var newSpan = document.createElement( "span" );

	if ( data[ 'bPresent' ] )
	{
		newSpan.innerHTML = data[ 'string' ];
	}
	else
	{
		// don't display "fallback" english text for the loc token
		if ( language != "token" )
		{
			var firstSpan = document.createElement( "span" );
			firstSpan.innerHTML = data[ 'string' ];
			newSpan.appendChild( firstSpan );
		}
		
		var secondSpan = document.createElement( "span" );

		if ( language == "english" )
			secondSpan.innerHTML = " [no English string]";
		else if ( language == "token" )
			secondSpan.innerHTML = "[no localization token]";
		else
			secondSpan.innerHTML = " [fallback English string]";
		secondSpan.className = 'outputNeutral';
		newSpan.appendChild( secondSpan );
	}
		
	return newSpan;
}


//
// pokes a given achievement into a given DOM element for its TR.
//
// assumes the row is empty at entry.
// 
function SetAchievement( appid, destRow, achievement )
{
	destRow.insertCell( -1 ).innerHTML = achievement[ "stat_id" ] + "/" + achievement[ "bit_id" ];
	var nameCell = destRow.insertCell( -1 );
	nameCell.innerHTML = achievement[ "api_name" ];
	nameCell.appendChild( document.createElement( "br" ) );
	
	// Add the achievement progress stat line
	if ( typeof achievement[ 'progress' ] === 'object' )
	{
		// currently only support direct stat value mapping
		progressSpan = document.createElement( 'span' );
		progressSpan.innerHTML = achievement.progress.value.operand1 + ' (' + achievement.progress.min_val + '-' + achievement.progress.max_val + ')';
		
		nameCell.appendChild( progressSpan );
		nameCell.appendChild( document.createElement( "br" ) );
	}

	// TODO MRHOTEN need to do the below shenanigans for the display name as well.
	// obviously some kind of helper would be handy here. maybe it could just
	// return the span DOM object instead of going through the parser.
	var descCell = destRow.insertCell( -1 );
	
	var rgLanguageDisplay = g_rgLanguages;
	
	var bPrefix = false;
	var languages;
	if ( g_language == "all" )
	{
		languages = g_rgEditingLanguages;
		bPrefix = true;
	}
	else
	{
		languages = {};
		languages[ g_language ] = 1;
	}

	for ( language in languages )
	{
		if ( bPrefix )
		{
			var prefixSpan = document.createElement( "span" );
			prefixSpan.innerHTML = "[" + rgLanguageDisplay[ language ] + "] ";
			descCell.appendChild( prefixSpan );
		}
		descCell.appendChild( AchievementSpan( achievement, "display_name", achievement.api_name + '_NAME', language ) );
		descCell.appendChild( document.createElement( "br" ) );
	}
	
	// TODO mrhoten Commonify description and display name
	for ( language in languages )
	{
		if ( bPrefix )
		{
			var prefixSpan = document.createElement( "span" );
			prefixSpan.innerHTML = "[" + rgLanguageDisplay[ language ] + "] ";
			descCell.appendChild( prefixSpan );
		}
		descCell.appendChild( AchievementSpan( achievement, "description", achievement.api_name + '_DESC', language ) );
		descCell.appendChild( document.createElement( "br" ) );
	}
	
	switch ( achievement[ "permission" ] )
	{
	case "1": destRow.insertCell( -1 ).innerHTML = "GS"; break;
	case "2": destRow.insertCell( -1 ).innerHTML = "Official GS"; break;

	case "0": 
	default: 
		destRow.insertCell( -1 ).innerHTML = "Client";
	}
	
	destRow.insertCell( -1 ).innerHTML = ( achievement[ "hidden" ] != 0 ) ? "<b>Yes</b>" : "";

	var newImg = document.createElement( "img" );
	newImg.src = achievement[ "icon" ];
	newImg.height = 64;
	newImg.width = 64;
	destRow.insertCell( -1 ).appendChild( newImg );

	newImg = document.createElement( "img" );
	newImg.src = achievement[ "icon_gray" ];
	newImg.height = 64;
	newImg.width = 64;
	destRow.insertCell( -1 ).appendChild( newImg );

	var btnCell = destRow.insertCell( -1 );

	var btn = document.createElement( "input" );
	btn.type= "submit";
 	btn.onclick = EditAchievementClosure( appid, achievement[ "stat_id" ], achievement[ "bit_id" ] );
	btn.value = "Edit";
	btnCell.appendChild( btn );

	btnCell.appendChild( document.createElement( "br" ) );

	var btn2 = document.createElement( "input" );
	btn2.type = "submit";
 	btn2.onclick = DeleteAchievementClosure( appid, achievement[ "stat_id" ], achievement[ "bit_id" ], achievement[ "api_name" ] );
	btn2.value = "Delete";
	btnCell.appendChild( btn2 );

	delete btn;
	delete btn2;
	delete btnCell;
	delete destRow;
	delete newImg;
	delete achievement;
}


//
// server callback - here's a new stat we need to add
//
// would be nice to commonify this with the SetItemsWorker code path
// 
function NewStat( appid, stat )
{
	var parentDiv = document.getElementById( "appStatDisplay" );
	var sourceDiv = document.getElementById( "statTableSource" );
	theTable = parentDiv.firstChild;

	var newRow = theTable.tBodies[ 0 ].insertRow( -1 );
	newRow.vAlign = "top";

	newRow.id = "s" + stat[ "stat_id" ];

	SetStat( appid, newRow, stat );
}


//
// server callback - here's a new achievement we need to add
//
// would be nice to commonify this with the SetItemsWorker code path
// 
function NewAchievement( appid, achievement )
{
	var parentDiv = document.getElementById( "appAchievementDisplay" );
	var sourceDiv = document.getElementById( "achievementTableSource" );
	theTable = parentDiv.firstChild;

	var newRow = theTable.tBodies[ 0 ].insertRow( -1 );
	newRow.vAlign = "top";

	newRow.id = "a" + achievement[ "stat_id" ] + "_" + achievement[ "bit_id" ];

	SetAchievement( appid, newRow, achievement );
}


// utility/compatibility routine
function ClearRow( theRow )
{
	if ( theRow.style.backgroundColor )
	{
		theRow.style.backgroundColor = "";
		gDirtyRows--;
	}		
		
	var count = theRow.cells.length;

	for ( var i = 0; i < count; i++ )
	{
		theRow.deleteCell( 0 );
	}
}


//
// pokes a given achievement back into the achievements table - used
// for "revert edited achievement" case.
//
function ReplaceAchievement( appid, achievement )
{
	var achievementRow = document.getElementById( "a" + achievement[ "stat_id" ] + "_" + achievement[ "bit_id" ] );
	ReplaceWorker( appid, achievement, achievementRow, SetAchievement );
}


function AchievementEditLocalizeHelper( container, form, achievement, field, fallbackSuffix )
{
	var languages = g_rgLanguages;

	for ( language in languages )
	{
		var subItem = document.createElement( "input" );
		
		if ( ( g_language == "all" && language in g_rgEditingLanguages ) )
		{
			// viewing all languages and this is a lang we're editing; add a prefix
			var subPrefix = document.createElement( "span" );
			subPrefix.innerHTML = "[" + languages[ language ] + "] ";
			form.appendChild( subPrefix );
			subItem.style.width = "100%";
			subItem.size = 30;
		}
		else if ( language == g_language )
		{
			// this is the selected language; it's already an edit control, so we're done
			subItem.style.width = "100%";
			subItem.size = 30;
		}
		else
		{
			// not our language -> hidden form control
			subItem.type = "hidden"; 
		}

		subItem.name = language;
		data = LocalizedAchievementField( achievement, field, achievement.api_name + fallbackSuffix, language );
		if ( data.bPresent || language == "token" )
		{
			subItem.value = data.string;
		}
		
		form.appendChild( subItem ); 
	}
}

//
// Adds an option item to a select
//  Gets around a dom-difference in IE (grr...)
//
function AddOptionToSelect( select, option )
{
	try
	{
		// Standards-compliant
		select.add( option, null );
	}
	catch ( ex )
	{
		// IE non-compliant
		select.add( option );
	}
}


//
// Builds the stat permission drop-down 
//
function CreateStatPermissionSelect( id )
{
	itemSelect = document.createElement( "select" );
	itemSelect.style.width = "auto";
	itemSelect.id = id + "_permission";
	values = new Array( "Client", "GS", "Offical GS" );
	for ( i = 0; i < values.length; i++ )
	{
		var option = document.createElement( "option" );
		option.text = values[i];
		option.value = i;
		AddOptionToSelect( itemSelect, option );
	}
	
	return itemSelect;
}


var gDirtyRows = 0;

function DirtyRowClosure( row )
{
	return function()
	{
		if ( !row.style.backgroundColor )
		{
			row.style.backgroundColor = '#464646';
			gDirtyRows++;
		}
	};
}

function StatsNavigateWarning()
{
	if ( gDirtyRows )
		return "There are unsaved changes on this page."
}


//
// fills in a given row of the achievement table, in edit mode
//
function EditAchievement( appid, achievement )
{
	// TODO MRHOTEN clone a <tr> from the static area of the template to ease the transition here;
	// could set it up templatized (like we do the upload forms) or we could templatize the IDs
	// then access it via $().
	//
	// this will, one hopes, be cleaner than all this DOM munging herein.
	//
	// Was the IE table model brokenness the reason we had to do all this in script? be sure
	// to test this mechanism in IE before going very far with it.
	var achievementRow = document.getElementById( "a" + achievement[ "stat_id" ] + "_" + achievement[ "bit_id" ] );

	if ( typeof( achievementRow ) == "object" )
	{
		var id = "ach" + achievement[ 'stat_id' ] + "_" + achievement[ 'bit_id' ];
		var row = achievementRow; // less typing
		var item;
		var newHash;

		ClearRow( row );

		row.className = "selected";

		var firstCell = row.insertCell( -1 );
		firstCell.innerHTML = achievement[ "stat_id" ] + "/" + achievement[ "bit_id" ];
		item = document.createElement( "a" );
		newHash = id + "_edit";
		item.name = newHash;
		firstCell.appendChild( item );

		item = document.createElement( "input" );
		item.id = id + "_apiname";
		item.style.width = "100%";
		item.size = 30;
		item.value = achievement[ 'api_name' ];
		item.onchange = DirtyRowClosure( row );
		var nameCell = row.insertCell( -1 );
		// ensure nameCell is extended
		Element.extend( nameCell );
		nameCell.appendChild( item );
		
		// achievement progress
		// insert some descriptive text and a select
		nameCell.appendChild( document.createElement( 'br' ) );
		textSpan = document.createElement( "span" );
		textSpan.innerHTML = "Progress stat ";
		nameCell.appendChild( textSpan );
		
		var progressSelect = document.createElement( "select" );
		progressSelect.onchange = DirtyRowClosure( row );
		progressSelect.id = id + "_progress";
		var noProgressOption = document.createElement( "option" );
		noProgressOption.text = "[Loading]";
		noProgressOption.value = "-1";
		AddOptionToSelect( progressSelect, noProgressOption );
		progressSelect.selectedIndex = 0;
		nameCell.appendChild( progressSelect );

		var minVal = 0;
		var maxVal = 0;
		if ( typeof achievement.progress === 'object' )
		{
			minVal = achievement.progress.min_val;
			maxVal = achievement.progress.max_val;
		}
		
		var theInput;
		nameCell.insert( new Element( 'br' ) );
		nameCell.insert( { 'bottom' : 'Min value: ' } );
		theInput = new Element( 'input', { 'size' : '10', 'value' : minVal, 'id' : id + '_minval' } );
		theInput.onchange = DirtyRowClosure( row );
		nameCell.insert( theInput );
		nameCell.insert( { 'bottom' : 'Max: ' } );
		theInput = new Element( 'input', { 'size' : '10', 'value' : maxVal, 'id' : id + '_maxval' } );
		nameCell.insert( theInput );

		// fetch gameplay stats and feed them to a closure to jam them into the progress select
		AppsAjaxRequest(
				g_szBaseURL + '/apps/fetchstats/' + appid,
				{},
				function FetchProgressClosure( results )
				{
					var elt = $( progressSelect.id );
					var statThisOne = null;
					if ( typeof achievement.progress === 'object' )
					{
						// here we hardcode that we only support direct stat access;
						// later when we do the expression-evaluator thing we'll redo this.
						statThisOne = achievement.progress.value.operand1;
					}
					
					results.sort(
						function( statLeft, statRight )
							{
								if ( statLeft.name < statRight.name )
								{
									return -1;
								}
								else if ( statLeft.name > statRight.name )
								{
									return 1;
								}
								else
								{
									return 0;
								}
							}
						);

					for ( i = 0; i < results.length; i++ )
					{
						option = document.createElement( "option" );
						option.text = results[i]['name'];
						option.value = results[i]['name'];
						
						AddOptionToSelect( elt, option );
						
						if ( results[i].name === statThisOne )
						{
							option.selected = true;
						}
					}
					
					noProgressOption.text = "None";
				},
				'get'
			);
		
		// we use a form to contain each localizable field;
		// this gives us a convenient json serialization path
		// through prototype.
		doubleCell = row.insertCell( -1 );

		item = document.createElement( "form" );
		item.onchange = DirtyRowClosure( row );
		item.id = id + "_displayname";
		doubleCell.appendChild( item );
		AchievementEditLocalizeHelper( doubleCell, item, achievement, 'display_name', '_NAME' );

		item = document.createElement( "form" );
		item.onchange = DirtyRowClosure( row );
		item.id = id + "_description";
		doubleCell.appendChild( item );
		AchievementEditLocalizeHelper( doubleCell, item, achievement, 'description', '_DESC' );

		item = CreateStatPermissionSelect( id );
		item.onchange = DirtyRowClosure( row );
		item.selectedIndex = achievement[ "permission" ];
		row.insertCell( -1 ).appendChild( item );

		item = document.createElement( "input" );
		item.onclick = DirtyRowClosure( row );
		item.type = "checkbox";
		item.id = id + "_hidden";
		if ( achievement[ "hidden" ] != 0 )
		{
			item.checked = true;
		}
		row.insertCell( -1 ).appendChild( item );

		var achievementID = "a" + achievement[ "stat_id" ] + "_" + achievement[ "bit_id" ];

		// image upload forms
		formText = $('stock_upload_form').innerHTML;
		formText = formText.replace( /APPID/g, appid );
		formText = formText.replace( /STATID/g, achievement[ 'stat_id' ] );
		formText = formText.replace( /ACHIEVEMENTID/g, achievement[ 'bit_id' ] );
		formText = formText.replace( /REQUEST_TYPE/g, "achievement" );
		formText = formText.replace( /sxxxrc/g, "src" );
		formText = formText.replace( /IMAGE_SOURCE/g, achievement[ "icon" ] );
		formText = formText.replace( /IMAGE_ID/g, achievementID + "_icon" );
		formText = formText.replace( /GRAY/g, false );
		
		row.insertCell( -1 ).innerHTML = formText;

		formText = $('stock_upload_form').innerHTML;
		formText = formText.replace( /APPID/g, appid );
		formText = formText.replace( /STATID/g, achievement[ 'stat_id' ] );
		formText = formText.replace( /ACHIEVEMENTID/g, achievement[ 'bit_id' ] );
		formText = formText.replace( /REQUEST_TYPE/g, "achievement_gray" );
		formText = formText.replace( /sxxxrc/g, "src" );
		formText = formText.replace( /IMAGE_SOURCE/g, achievement[ "icon_gray" ] );
		formText = formText.replace( /IMAGE_ID/g, achievementID + "_icon_gray" );
		formText = formText.replace( /GRAY/g, true );

		row.insertCell( -1 ).innerHTML = formText;

		var btnCell = row.insertCell( -1 );

		var btn = document.createElement( "input" );
		btn.type= "submit";
		btn.onclick = RevertAchievementClosure( appid, achievement[ "stat_id" ], achievement[ "bit_id" ] );
		btn.value = "Cancel";
		btnCell.appendChild( btn );

		btnCell.appendChild( document.createElement( "br" ) );

		btn = document.createElement( "input" );
		btn.type= "submit";
		btn.onclick = SaveAchievementClosure( appid,
								   achievement[ "stat_id" ],
								   achievement[ "bit_id" ] );
		btn.value = "Save";
		btnCell.appendChild( btn );
		return id;
	}
}


//
// this function handles the grunt work of poking a stat or
// achievement into the document. It's just for doing the table grunt
// work and iterating; the item-specific stuff is handled by function
// references.
//
// it takes a bunch of data, and a couple of helper functions.
// fIdMaker turns the item into an id in the DOM. fSetter pokes the
// item into the row in question.
//
// 
function SetItemsWorker( appid, items, parentDivID, sourceDivID, newTableID, fIdMaker, fSetter )
{
	var parentDiv = document.getElementById( parentDivID );
	var sourceDiv = document.getElementById( sourceDivID );
	var count = items.length;

	parentDiv.innerHTML = sourceDiv.innerHTML;

	// firstChild is dangerous, fails if we change formatting ion table template
	theTable = parentDiv.firstChild;
	theTable.id = newTableID;
	
	// we need to find the tbody in the table, so our rows
	// go in the right place
	var insertionParent = theTable;

	// use the first tbody we found, or just stick everything in table if we couldn't find one
	if ( theTable.tBodies.length != 0 )
	{
		insertionParent = theTable.tBodies[ 0 ];
	}
	
	// crack parameter and iterate achievements/stats
	for ( var index = 0; index < count; index++ )
	{
		var theItem = items[ index ];

		// append ID-laden achievement to our shiny new table
		var newRow = insertionParent.insertRow( -1 );
		newRow.vAlign = "top";

		newRow.id = fIdMaker( theItem );
		fSetter( appid, newRow, theItem );
	}
}


//
// sets up achievement table with given achievements
//
function SetAchievements( appid, achievements )
{
	SetItemsWorker( appid,
				achievements,
				"appAchievementDisplay",
				"achievementTableSource",
				"achievementTable",
				function( theItem ) { return "a" + theItem[ "stat_id" ] + "_" + theItem[ "bit_id" ]; },
				SetAchievement
				);
}


//
//sets up a bunch of divs with given achievements
//
function SetAchievementsDiv( appid, achievements )
{
	var parentDiv = $('appAchievementDisplay');
	var theItem;
	var index;
	var items = achievements;
	var elt;
	var eltSub;
	var eltRow;
	var text;
	var newImg;
	
	parentDiv.update('');
	
	// crack parameter and iterate achievements/stats
	for ( index = 0; index < items.length; index++ )
	{
		theItem = items[ index ];

		// make a new container "row" div for the whole item
		eltRow = new Element( 'div' );
		parentDiv.insert( eltRow );
		
		var achievement = theItem;
		
		// achievement specific:
		// jam a bunch of floated-left divs in there to hold the item's fields
		elt = new Element( 'div', { 'style' : 'float: left; width: 6em' } );
		elt.update( achievement[ "stat_id" ] + "/" + achievement[ "bit_id" ] );
		eltRow.insert( elt );
		
		elt = new Element( 'div', { 'style' : 'float: left; width: 24em' } );
		elt.update( achievement[ 'api_name' ] );
		elt.insert( new Element( 'br' ) );
		// Add the achievement progress stat line
		if ( typeof achievement[ 'progress' ] === 'object' )
		{
			// currently only support direct stat value mapping
			progressSpan = new Element( 'span' );
			progressSpan.innerHTML = achievement.progress.value.operand1 + ' (' + achievement.progress.min_val + '-' + achievement.progress.max_val + ')';
			
			elt.insert( progressSpan );
		}
		eltRow.insert( elt );

		
		elt = new Element( 'div', { 'style' : 'float: left; width: 36em' } );
		var rgLanguageDisplay = g_rgLanguages;
		var bPrefix = false;
		var languages;
		if ( g_language == "all" )
		{
			languages = g_rgEditingLanguages;
			bPrefix = true;
		}
		else
		{
			languages = {};
			languages[ g_language ] = 1;
		}

		for ( language in languages )
		{
			eltSub = AchievementSpan( achievement, "display_name", achievement.api_name + '_NAME', language );
			if ( bPrefix )
			{
				eltSub.insert( { 'top' : new Element( 'span' ).update( "[" + rgLanguageDisplay[ language ] + "] ") } );
			}
			elt.insert( eltSub );
		}
		
		// TODO mrhoten Commonify description and display name
		for ( language in languages )
		{
			eltSub = AchievementSpan( achievement, "description", achievement.api_name + '_DESC', language );
			if ( bPrefix )
			{
				eltSub.insert( { 'top' : new Element( 'span' ).update( "[" + rgLanguageDisplay[ language ] + "] ") } );
			}
			elt.insert( eltSub );
		}
		eltRow.insert( elt );
		
		elt = new Element( 'div', { 'style': 'float: left; width: 5em' } );
		switch ( achievement[ "permission" ] )
		{
		case "1": elt.update( "GS" ); break;
		case "2": elt.update( "Official GS" ); break;

		case "0": 
		default: 
			elt.update( "Client" );
		}
		eltRow.insert( elt );
		
		// give this element a minimum height, since it is often empty of content and
		// would snap to zero height
		elt = new Element( 'div', { 'style': 'float: left; width: 4em; height: 1em' } );
		if ( achievement[ "hidden" ] != 0 )
		{
			elt.update( "<b>Yes</b>" );
		}
		eltRow.insert( elt );

		newImg = new Element( 'img', { 'style': 'float: left' } );
		newImg.src = achievement[ "icon" ];
		newImg.height = 64;
		newImg.width = 64;
		eltRow.insert( newImg );

		newImg = new Element( 'img' );
		newImg.src = achievement[ "icon_gray" ];
		newImg.height = 64;
		newImg.width = 64;
		eltRow.insert( newImg );
//		var btnCell = destRow.insertCell( -1 );
//
//		var btn = document.createElement( "input" );
//		btn.type= "submit";
//	 	btn.onclick = EditAchievementClosure( appid, achievement[ "stat_id" ], achievement[ "bit_id" ] );
//		btn.value = "Edit";
//		btnCell.appendChild( btn );
//
//		btnCell.appendChild( document.createElement( "br" ) );
//
//		var btn2 = document.createElement( "input" );
//		btn2.type = "submit";
//	 	btn2.onclick = DeleteAchievementClosure( appid, achievement[ "stat_id" ], achievement[ "bit_id" ] );
//		btn2.value = "Delete";
//		btnCell.appendChild( btn2 );
//
		// all done with this row
		eltRow.insert( new Element( 'div', { 'style' : 'clear: both' } ) );
	}
}


//
// sets up stats table with given stats
//
function SetStats( appid, stats )
{
	SetItemsWorker( appid,
					stats,
					"appStatDisplay",
					"statTableSource",
					"statTable",
					function( theItem ) { return "s" + theItem[ "stat_id" ]; },
					SetStat );
}

//
// sets up stats table with given stats
//
function SetDrmModules( appid, drmModules )
{
	SetItemsWorker( appid,
					drmModules,
					"appDrmDisplay",
					"drmTableSource",
					"drmTable",
					function( theItem ) { return "d" + theItem[ "buildcrc" ]; },
					SetDrmModule );
}


//
// worker function for replacement of a row in one of our tables
//
function ReplaceWorker( appid, item, itemRow, fSetter )
{
	if ( typeof( itemRow ) == "object" )
	{
		ClearRow( itemRow );
		itemRow.className = "";
		fSetter( appid, itemRow, item );
	}
}


//
// pokes a stat back into the table - used for "revert edited stat"
// case.
//
function ReplaceStat( appid, stat )
{
	var statRow = document.getElementById( "s" + stat[ "stat_id" ] );
	ReplaceWorker( appid, stat, statRow, SetStat );
}


// simple "either/or" routine to avoid a bunch of ternaries
function FetchAlternate( item, field, alternate )
{
	return field in item ? item[ field ] : alternate;
}


//
// pokes a given stat into a given DOM element for its TR.
//
// assumes the row is empty at entry.
// 
function SetStat( appid, destRow, stat )
{
	destRow.insertCell( -1 ).innerHTML = stat[ "stat_id" ];
	destRow.insertCell( -1 ).innerHTML = FetchAlternate( stat, "type", "" );
	destRow.insertCell( -1 ).innerHTML = FetchAlternate( stat, "name", "" );

	switch ( stat[ "permission" ] )
	{
	case "1": destRow.insertCell( -1 ).innerHTML = "GS"; break;
	case "2": destRow.insertCell( -1 ).innerHTML = "Official GS"; break;

	case "0": 
	default: 
		destRow.insertCell( -1 ).innerHTML = "Client";
	}

	var incrementVal = "";
	if ( "incrementonly" in stat && stat[ "incrementonly" ] != 0 )
	{
		incrementVal = "Yes";
	}
	destRow.insertCell( -1 ).innerHTML = incrementVal;
	destRow.insertCell( -1 ).innerHTML = FetchAlternate( stat, "maxchange", "" );
	destRow.insertCell( -1 ).innerHTML = FetchAlternate( stat, "min", "" );
	destRow.insertCell( -1 ).innerHTML = FetchAlternate( stat, "max", "" );
	destRow.insertCell( -1 ).innerHTML = FetchAlternate( stat, "windowsize", "" );
	destRow.insertCell( -1 ).innerHTML = FetchAlternate( stat, "default", "" );
	var aggregateVal = "";
	if ( "aggregated" in stat && stat[ "aggregated" ] != 0 )
	{
		aggregateVal = "Yes";
	}
	destRow.insertCell( -1 ).innerHTML = aggregateVal;

	var displayName = "";
	if ( "display" in stat )
	{	
		if ( "name" in stat["display"] )
		{
			displayName = stat["display"]["name"];
		}
	}
	destRow.insertCell( -1 ).innerHTML = displayName;

	var btnCell = destRow.insertCell( -1 );

	var btn = document.createElement( "input" );
	btn.type= "submit";
 	btn.onclick = EditStatClosure( appid, stat[ "stat_id" ] );
	btn.value = "Edit";
	btnCell.appendChild( btn );

	var theSpan = document.createElement( "span" );
	theSpan.innerHTML = "&nbsp;";
	btnCell.appendChild( theSpan );

	var btn2 = document.createElement( "input" );
	btn2.type = "submit";
 	btn2.onclick = DeleteStatClosure( appid, stat[ "stat_id" ], stat[ "bit_id" ] );
	btn2.value = "Delete";
	btnCell.appendChild( btn2 );
}


function EditStat( appid, stat )
{
	var statRow = document.getElementById( "s" + stat[ "stat_id" ] );
	if ( typeof( statRow ) == "object" )
	{
		var id = "stat" + stat[ 'stat_id' ];
		var row = statRow; // less typing
		var item;

		ClearRow( row );
		row.className = "selected";

		var doubleCell = row.insertCell( -1 );
		doubleCell.innerHTML = stat[ "stat_id" ];

		item = document.createElement( "a" );
		var newHash = id + "_edit";
		item.name = newHash;
		doubleCell.appendChild( item );

		item = document.createElement( "select" );
		item.style.width = "6em";
		item.id = id + "_stattype";
		
		var item2 = document.createElement( "option" );
		item.options.add( item2 );
		item2.innerHTML = "INT";
		item2.value = "INT";
		if ( stat[ 'type' ] == 'INT' )
		{
			item2.selected = true;
		}

		item2 = document.createElement( "option" );
		item.options.add( item2 );
		item2.innerHTML = "FLOAT";
		item2.value = "FLOAT";
		if ( stat[ 'type' ] == 'FLOAT' )
		{
			item2.selected = true;
		}

		item2 = document.createElement( "option" );
		item.options.add( item2 );
		item2.innerHTML = "AVGRATE";
		item2.value = "AVGRATE";
		if ( stat[ 'type' ] == 'AVGRATE' )
		{
			item2.selected = true;
		}

		// onchange closure for item type; hides/shows the windowsize edit control
		// and fills in a value if necessary.
		var itemType = item;
		item.onchange = function()
		{
			fn = DirtyRowClosure( row );
			fn();

			fSetEnabledState = function( subItem, bEnable )
			{
				if ( bEnable )
				{
					subItem.disabled = false;
					subItem.style.display = 'block';
				}
				else
				{
					// we don't adequately style disabled inputs; however,
					// it really makes more sense to hide this one anyway
					subItem.disabled = true;
					subItem.style.display = 'none';

					// don't destroy any value in the stat; the user
					// may flip back and we'd like to preserve the data.
				}
			};

			bAvgRate = itemType.value == 'AVGRATE';
			fSetEnabledState( $( id + '_windowsize' ), bAvgRate );
			fSetEnabledState( $( id + '_incrementonly' ), !bAvgRate );
			fSetEnabledState( $( id + '_maxchange' ), !bAvgRate );
			fSetEnabledState( $( id + '_aggregated' ), !bAvgRate );

			if ( bAvgRate )
			{
				// check value; populate if required
				subItem = $( id + '_windowsize' );
				if ( subItem.value == '' )
				{
					subItem.value = '10.0';
				}
			}
		};
		
		row.insertCell( -1 ).appendChild( item );

		item = document.createElement( "input" );
		item.style.width = "100%";
		item.id = id + "_statapiname";
		item.value = FetchAlternate( stat, "name", "stat_" + stat[ 'stat_id' ] );
		item.onchange = DirtyRowClosure( row );
		row.insertCell( -1 ).appendChild( item );

		item = CreateStatPermissionSelect( id );
		item.selectedIndex = stat[ "permission" ];
		item.onchange = DirtyRowClosure( row );
		row.insertCell( -1 ).appendChild( item );

		item = document.createElement( "input" );
		item.type = "checkbox";
		item.id = id + "_incrementonly";
		if ( "incrementonly" in stat && stat[ "incrementonly" ] != 0 )
		{
			item.checked = true;
		}
		item.onclick = DirtyRowClosure( row );
		row.insertCell( -1 ).appendChild( item );

		item = document.createElement( "input" );
		item.style.width = "4em";
		item.id = id + "_maxchange";
		item.value = FetchAlternate( stat, "maxchange", "" );
		item.onchange = DirtyRowClosure( row );
		row.insertCell( -1 ).appendChild( item );

		item = document.createElement( "input" );
		item.style.width = "4em";
		item.id = id + "_min";
		item.value = FetchAlternate( stat, "min", "" );
		item.onchange = DirtyRowClosure( row );
		row.insertCell( -1 ).appendChild( item );

		item = document.createElement( "input" );
		item.style.width = "4em";
		item.id = id + "_max";
		item.value = FetchAlternate( stat, "max", "" );
		item.onchange = DirtyRowClosure( row );
		row.insertCell( -1 ).appendChild( item );

		// stats of type 'avgrate' get a window size parameter; others do not. we
		// show the UI all the time, and enable/disable it on the fly.
		item = document.createElement( "input" );
		item.style.width = "4em";
		item.id = id + "_windowsize";
		item.value = FetchAlternate( stat, "windowsize", "" );
		item.onchange = DirtyRowClosure( row );
		row.insertCell( -1 ).appendChild( item );

		item = document.createElement( "input" );
		item.style.width = "4em";
		item.id = id + "_default";
		item.value = FetchAlternate( stat, "default", "" );
		item.onchange = DirtyRowClosure( row );
		row.insertCell( -1 ).appendChild( item );

		item = document.createElement( "input" );
		item.type = "checkbox";
		item.id = id + "_aggregated";
		if ( "aggregated" in stat && stat[ "aggregated" ] != 0 )
		{
			item.checked = true;
		}
		item.onclick = DirtyRowClosure( row );
		row.insertCell( -1 ).appendChild( item );
		
		item = document.createElement( "input" );
		item.style.width = "100%";
		item.id = id + "_displayname";
		var displayName = "";
		if ( "display" in stat )
		{	
			if ( "name" in stat["display"] )
			{
				displayName = stat["display"]["name"];
			}
		}
		item.value = displayName;
		item.onchange = DirtyRowClosure( row );
		row.insertCell( -1 ).appendChild( item );

		var btnCell = row.insertCell( -1 );

		var btn = document.createElement( "input" );
		btn.type= "submit";
		btn.onclick = RevertStatClosure( appid, stat[ "stat_id" ] );
		btn.value = "Cancel";
		btnCell.appendChild( btn );

		var theSpan = document.createElement( "span" );
		theSpan.innerHTML = "&nbsp;";
		btnCell.appendChild( theSpan );

		btn = document.createElement( "input" );
		btn.type= "submit";
		btn.onclick = SaveStatClosure( appid,
									   stat[ "stat_id" ] );
		btn.value = "Save";
		btnCell.appendChild( btn );

		// Apply initial visibility
		itemType.onchange();

		return id;
	}
}

function FlagsToString( flags )
{
	if ( flags == 544 ) return 'Static, simple check';
	if ( flags == 559 ) return 'Static, all checks';
	if ( flags == 527 ) return 'Dynamic, generic checks';
	if ( flags == 783 ) return 'Dynamic, machine specific';
	if ( flags == 128 ) ret