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

	// ensure session ID is present if we're posting
	if ( requestMethod.toLowerCase() == 'post' ) {
		if ( !( 'sessionid' in hashParms ) ) {
			hashParms[ 'sessionid' ] = g_sessionID;
		}
	}

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

		if ( !results[ 'success' ] )
			document.getElementById(elementName).scrollIntoView();

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


function SetAppField( section, appid, varName, value )
{
	var data = { section: section, varName: varName, value: value };
	AppsAjaxRequest( 'https://partner.steamgames.com/apps/ajaxsetappfield/' + appid,
		data,
		function ( results )
		{
			CommonSetHandler( results );
		}
	);
}


//
// Common output setter for some of the app management calls.
// Pretty thin wrapper around StandardCallback.
//
function CommonSetHandler( results )
{
	StandardCallback( results, 'infoOutput' );
}

function SetAppCouponState( appid, enabled, discountPct )
{
	AppsAjaxRequest( 'https://partner.steamgames.com/apps/ajaxsetcouponstate',
		{ appid : appid, enable : Boolean( enabled ) ? 1 : 0, discount : discountPct },
		function (results)
		{
			CommonSetHandler( results );
		}
	)
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
// Set whether the we record coplay for this game
//
function SetDoNotRecordCoplay( appid, checkState )
{
	AppsAjaxRequest( g_szBaseURL + '/apps/setdontrecordcoplay/' + appid,
		{ 'coplay_do_not_record' : checkState },
		CommonSetHandler
		);
}


//
// Set whether the we record coplay for this game
//
function SetDoNotPublishCoplay( appid, checkState )
{
	AppsAjaxRequest( g_szBaseURL + '/apps/setdontpublishcoplay/' + appid,
		{ 'coplay_do_not_publish' : checkState },
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
// Set whether refunds ignore playtime for the app
//
function SetRefundsIgnorePlaytime( appid, ignorePlaytime )
{
	AppsAjaxRequest( g_szBaseURL + '/apps/setrefundsignoreplaytime/' + appid,
		{ 'refundsignoreplaytime' : ignorePlaytime },
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
// flush asset appearance cache
//
function EconomyFlushAssetAppearanceCache( appid )
{
	$J.post( g_szBaseURL + '/apps/economyflushappearance/' + appid, { 'sessionid' : g_sessionID } ).done( function( data ) {
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
function SetRequestKeys( appid, requests, fnOnSuccess, fnOnFailure )
{
	AppsAjaxRequest( g_szBaseURL + '/apps/requestkeys/' + appid,
		{
			'keys': Object.toJSON( requests ),
			'sessionid': g_sessionID
		},
		function( results )
		{
			if ( results[ 'success' ] )
			{
				// no error, reload page
				if( fnOnSuccess )
				{
					fnOnSuccess()
				}
				else
				{
					$('AjaxOutput').innerHTML = "Reloading...";
					RefreshCallback(results);
				}
			}
			else
			{
				if ( fnOnFailure )
				{
					fnOnFailure();
				}
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

function AppMigrate( appidSrc, appidDest, bForce, bMergeLite, bStatsOnly )
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
			'lite': bMergeLite,
			'statsonly' : bStatsOnly
		},
		function( results )
		{
			StandardCallback( results, 'migrateOutput' );
		}
	);
}

function AppMigrateFromSelector( appidSrc, bForce, bMergeLite, selector, bStatsOnly )
{
	var appidDest = selector.options[ selector.selectedIndex ].value;

	if ( appidDest == -1 )
	{
		alert( "Please select a game first." );
		return;
	}

	AppMigrate( appidSrc, appidDest, bForce, bMergeLite, bStatsOnly );
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
			if ( results['success'] == 1 )
			{
				$('max_statid_used').innerHTML = results[ 'maxstatid' ];
				$('max_bitid_used').innerHTML = results[ 'maxbitid' ];
				NewAchievement( appid, results[ 'achievement' ] );
				var id = EditAchievement( appid, results[ 'achievement' ] );
				location.hash = id + "_edit";
			}
			else
			{
				ShowAlertDialog( 'Error', results['error'] );
			}
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
				if ( results['success'] != 1 )
				{
					ShowAlertDialog( 'Error', results['error'] );
					return;
				}
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
	var newSpan = $J( '<span>' );

	if ( data[ 'bPresent' ] )
	{
		newSpan.text( data[ 'string' ] );
	}
	else
	{
		// don't display "fallback" english text for the loc token
		if ( language != "token" )
		{
			var firstSpan = $J( '<span>' );
			firstSpan.text( data['string'] );
			newSpan.append( firstSpan );
		}

		var secondSpan = $J( '<span>' );

		if ( language == "english" )
			secondSpan.text( " [no English string]" );
		else if ( language == "token" )
			secondSpan.text( "[no localization token]" );
		else
			secondSpan.text( " [fallback English string]" );
		secondSpan.addClass( 'outputNeutral' );
		newSpan.append( secondSpan );
	}

	return newSpan;
}


//
// helper for jamming new cells into stat/achievement rows safely
//
function addCell( tr, txt )
{
	var theCell = $J( '<td>' );

	if ( typeof( txt ) == "string" ) {
		theCell.text( txt );
	} else {
		theCell.append( txt );
	}

	tr.append( theCell );
	return theCell;
}



//
// pokes a given achievement into a given DOM element for its TR.
//
// assumes the row is empty at entry.
//
function SetAchievement( appid, destRow, achievement )
{
	var row = $J( destRow );

	var nameCell = $J( '<td>' );
	nameCell.text( achievement[ "api_name" ] );
	nameCell.append( $J( '<br>' ) );

	// Add the achievement progress stat line
	if ( typeof achievement[ 'progress' ] === 'object' )
	{
		// currently only support direct stat value mapping
		var progressSpan = $J( '<span>' );
		progressSpan.text( achievement.progress.value.operand1 + ' (' + achievement.progress.min_val + '-' + achievement.progress.max_val + ')' );

		nameCell.append( progressSpan );
		nameCell.append( $J( '<br>' ) );
	}
	row.append( nameCell );

	// TODO need to do the below shenanigans for the display name as well.
	// obviously some kind of helper would be handy here. maybe it could just
	// return the span DOM object instead of going through the parser.
	var descCell = $J( '<td>' );

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
			var prefixSpan = $J( '<span>' );
			prefixSpan.text( "[" + rgLanguageDisplay[ language ] + "] " );
			descCell.append( prefixSpan );
		}
		descCell.append( AchievementSpan( achievement, "display_name", achievement.api_name + '_NAME', language ) );
		descCell.append( $J( '<br>' ) );
	}

	// TODO Commonify description and display name
	for ( language in languages )
	{
		if ( bPrefix )
		{
			var prefixSpan = $J( '<span>' ).text( "[" + rgLanguageDisplay[ language ] + "] " );
			descCell.append( prefixSpan );
		}
		descCell.append( AchievementSpan( achievement, "description", achievement.api_name + '_DESC', language ) );
		descCell.append( $J( '<br>' ) );
	}
	row.append( descCell );

	switch ( achievement[ "permission" ] )
	{
	case "1": addCell( row, "GS" ); break;
	case "2": addCell( row, "Official GS" ); break;

	case "0":
	default:
		addCell( row, "Client" );
	}

	addCell( row, ( achievement[ "hidden" ] != 0 ) ? "Yes" : "" );

	// TODO jqueryize the rest here
	var newImg = document.createElement( "img" );
	newImg.src = achievement[ "icon" ];
	newImg.height = 64;
	newImg.width = 64;
	addCell( row, "" ).append( newImg );

	newImg = document.createElement( "img" );
	newImg.src = achievement[ "icon_gray" ];
	newImg.height = 64;
	newImg.width = 64;
	addCell( row, "" ).append( newImg );

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
	theRow = $J( theRow );
	theRow.removeClass( 'dirty' );
	theRow.empty();
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
		var subItem = $J( '<input>' );

		if ( ( g_language == "all" && language in g_rgEditingLanguages ) )
		{
			// viewing all languages and this is a lang we're editing; add a prefix
			var subPrefix = $J( '<span>' );
			subPrefix.innerHTML = "[" + languages[ language ] + "] ";
			$J( form ).append( subPrefix );
			subItem.css( "width", "100%" );
			subItem.attr( 'size', '30' );
		}
		else if ( language == g_language )
		{
			// this is the selected language; it's already an edit control, so we're done
			subItem.css( "width", "100%" );
			subItem.attr( 'size', '30' );
		}
		else
		{
			// not our language -> hidden form control
			subItem.attr( 'type', 'hidden' );
		}

		subItem.attr( 'name', language );
		data = LocalizedAchievementField( achievement, field, achievement.api_name + fallbackSuffix, language );
		if ( data.bPresent || language == "token" )
		{
			subItem.val( data.string );
		}

		$J( form ).append( subItem );
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
	values = new Array(
		"Client",
		"GS",
		"Official GS"
	);
	for ( i = 0; i < values.length; i++ )
	{
		var option = document.createElement( "option" );
		option.text = values[i];
		option.value = i;
		AddOptionToSelect( itemSelect, option );
	}

	return itemSelect;
}


function DirtyRowClosure( row )
{
	return function DirtyRow()
	{
		$J( row ).addClass( 'dirty' );
	};
}

function StatsNavigateWarning()
{
	if ( $J( 'tr.dirty' ).size() )
		return "There are unsaved changes on this page."
}


//
// fills in a given row of the achievement table, in edit mode
//
function EditAchievement( appid, achievement )
{
	// TODO clone a <tr> from the static area of the template to ease the transition here;
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
		textSpan.innerHTML = "Progress Stat" + ' ';
		nameCell.appendChild( textSpan );

		var progressSelect = document.createElement( "select" );
		progressSelect.onchange = DirtyRowClosure( row );
		progressSelect.id = id + "_progress";
		var noProgressOption = document.createElement( "option" );
		noProgressOption.text = "["+"Loading"+"]";
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
		nameCell.insert( { 'bottom' : "Min value:" + ' ' } );
		theInput = new Element( 'input', { 'size' : '10', 'value' : minVal, 'id' : id + '_minval' } );
		theInput.onchange = DirtyRowClosure( row );
		nameCell.insert( theInput );
		nameCell.insert( { 'bottom' : "Max:"+' ' } );
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

		// TODO Commonify description and display name
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
			elt.update( "<b>"+"Yes"+"</b>" );
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
	var row = $J( destRow );

	addCell( row, stat.stat_id );
	addCell( row, FetchAlternate( stat, "type", "" ) );
	addCell( row, FetchAlternate( stat, "name", "" ) );

	switch ( stat[ "permission" ] )
	{
	case "1": addCell( row, "GS" ); break;
	case "2": addCell( row, "Official GS" ); break;

	case "0":
	default:
		addCell( row, "Client" ); break;
	}

	var incrementVal = "";
	if ( "incrementonly" in stat && stat[ "incrementonly" ] != 0 )
	{
		incrementVal = "Yes";
	}
	addCell( row, incrementVal );
	addCell( row, FetchAlternate( stat, "maxchange", "" ) );
	addCell( row, FetchAlternate( stat, "min", "" ) );
	addCell( row, FetchAlternate( stat, "max", "" ) );
	addCell( row, FetchAlternate( stat, "windowsize", "" ) );
	addCell( row, FetchAlternate( stat, "default", "" ) );
	var aggregateVal = "";
	if ( "aggregated" in stat && stat[ "aggregated" ] != 0 )
	{
		aggregateVal = "Yes";
	}
	addCell( row, aggregateVal );

	var displayName = "";
	if ( "display" in stat )
	{
		if ( "name" in stat["display"] )
		{
			displayName = stat["display"]["name"];
		}
	}
	addCell( row, displayName );

	var btnCell = $J( destRow.insertCell( -1 ) );

	var btn = document.createElement( "input" );
	btn.type= "submit";
 	btn.onclick = EditStatClosure( appid, stat[ "stat_id" ] );
	btn.value = "Edit";
	btnCell.append( btn );

	var theSpan = document.createElement( "span" );
	theSpan.innerHTML = "&nbsp;";
	btnCell.append( theSpan );

	var btn2 = document.createElement( "input" );
	btn2.type = "submit"
 	btn2.onclick = DeleteStatClosure( appid, stat[ "stat_id" ], stat[ "bit_id" ] );
	btn2.value = "Delete";
	btnCell.append( btn2 );
}


function EditStat( appid, stat )
{
	// TODO XSS
	var statRow = document.getElementById( "s" + stat[ "stat_id" ] );
	if ( typeof( statRow ) == "object" )
	{
		var id = "stat" + stat[ 'stat_id' ];
		var row = $J( statRow ); // less typing
		var item;

		ClearRow( row );
		row.className = "selected";

		var doubleCell = $J( '<td>' );
		doubleCell.innerHTML = stat[ "stat_id" ];

		item = $J( '<a>' );
		var newHash = id + "_edit";
		item.attr( 'name', newHash );
		doubleCell.append( item );
		addCell( row, item );

		item = $J( '<select>' );
		item.css( "width", "6em" );
		item.attr( 'id', id + "_stattype" );

		$J.each( { "INT": "INT", "FLOAT": "FLOAT", "AVGRATE": "AVGRATE" },
			function addOption( statType, unused ) {
				item.append( $J('<option>', { value: statType } )
							 .text( statType ) )
				} );

		item.val( stat[ 'type' ] );

		// onchange closure for item type; hides/shows the windowsize edit control
		// and fills in a value if necessary.
		var itemType = item;
		item.change( function()
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

			bAvgRate = itemType.val() == 'AVGRATE';
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
		});

		addCell( row, item );

		item = $J( "<input>" );
		item.css( "width", "100%" );
		item.attr( 'id', id + "_statapiname" );
		item.val( FetchAlternate( stat, "name", "stat_" + stat[ 'stat_id' ] ) );
		item.change( DirtyRowClosure( row ) );
		addCell( row, item );

		item = $J( CreateStatPermissionSelect( id ) );
		item.val( stat[ "permission" ] );
		item.change( DirtyRowClosure( row ) );
		addCell( row, item );

		item = $J( "<input>" );
		item.attr( 'type', "checkbox" );
		item.attr( 'id', id + "_incrementonly" );
		if ( "incrementonly" in stat && stat[ "incrementonly" ] != 0 )
		{
			item.attr( 'checked', true );
		}
		item.click( DirtyRowClosure( row ) );
		addCell( row, item );

		item = $J( "<input>" );
		item.css( "width", "4em" );
		item.attr( 'id', id + "_maxchange" );
		item.val( FetchAlternate( stat, "maxchange", "" ) );
		item.change( DirtyRowClosure( row ) );
		addCell( row, item );

		item = $J( "<input>" );
		item.css( "width", "4em" );
		item.attr( 'id', id + "_min" );
		item.val( FetchAlternate( stat, "min", "" ) );
		item.change( DirtyRowClosure( row ) );
		addCell( row, item );

		item = $J( "<input>" );
		item.css( "width", "4em" );
		item.attr( 'id', id + "_max" );
		item.val( FetchAlternate( stat, "max", "" ) );
		item.change( DirtyRowClosure( row ) );
		addCell( row, item );

		// stats of type 'avgrate' get a window size parameter; others do not. we
		// show the UI all the time, and enable/disable it on the fly.
		item = $J( "<input>" );
		item.css( "width", "4em" );
		item.attr( 'id', id + "_windowsize" );
		item.val( FetchAlternate( stat, "windowsize", "" ) );
		item.change( DirtyRowClosure( row ) );
		addCell( row, item );

		item = $J( "<input>" );
		item.css( "width", "4em" );
		item.attr( 'id', id + "_default" );
		item.val( FetchAlternate( stat, "default", "" ) );
		item.change( DirtyRowClosure( row ) );
		addCell( row, item );

		item = $J( "<input>" );
		item.attr( 'type', "checkbox" );
		item.attr( 'id', id + "_aggregated" );
		if ( "aggregated" in stat && stat[ "aggregated" ] === "1" )
		{
			item.attr( 'checked', true );
		}
		item.click( DirtyRowClosure( row ) );
		addCell( row, item );

		item = $J( "<input>" );
		item.css( "width", "100%" );
		item.attr( 'id', id + "_displayname" );
		var displayName = "";
		if ( "display" in stat )
		{
			if ( "name" in stat["display"] )
			{
				displayName = stat["display"]["name"];
			}
		}
		item.val( displayName );
		item.change( DirtyRowClosure( row ) );
		addCell( row, item );

		var btnCell = addCell( row, "" );

		var btn = $J( "<input>" );
		btn.attr( 'type', 'submit' );
		btn.click( RevertStatClosure( appid, stat[ "stat_id" ] ) );
		btn.val( "Cancel" );
		btnCell.append( btn );

		var theSpan = $J( "<span>" );
		theSpan.innerHTML = "&nbsp;";
		btnCell.append( btn );

		btn = $J( "<input>" );
		btn.attr( 'type', 'submit' );
		btn.click( SaveStatClosure( appid, stat[ "stat_id" ] ) );
		btn.val( "Save" );
		btnCell.append( btn );

		// Apply initial visibility
		itemType.change();

		return id;
	}
}


//
// pretty printer for DRM wrap flags, should match template
//
function FlagsToString( flags )
{
	if ( flags == 544 ) return 'Static, simple check';
	if ( flags == 559 ) return 'Static, all checks';
	if ( flags == 527 ) return 'Dynamic, generic checks';
	if ( flags == 783 ) return 'Dynamic, machine specific';
	if ( flags == 128 ) return 'SDK DRM';
	if ( flags == 38 ) return 'Compatibility Mode + Skip Debugger Check';
	if ( flags == 32 ) return 'Skip Debugger Check';
	if ( flags == 6 ) return 'Compatibility Mode';
	if ( flags == 0 ) return 'Standard Mode';

	return flags;
}


//
// pokes a given stat into a given DOM element for its TR.
//
// assumes the row is empty at entry.
//
function SetDrmModule( appid, destRow, drmModule )
{
	var d=new Date();
	d.setTime( drmModule[ 'date' ]*1000 );

	destRow.insertCell( -1 ).innerHTML = drmModule[ 'buildcrc' ];

	if ( drmModule[ 'download' ] !== undefined )
	{
		// insert a cell; figure out what to put there
		var downloadlink = 'Not available';
		if ( drmModule[ 'download' ] )
		{
			downloadlink = '<a href="'+ encodeURI( drmModule[ 'download' ] )+ '">' + drmModule[ 'module' ] + '</a>';
		}
		destRow.insertCell( -1).innerHTML = downloadlink;
	}

	if ( drmModule[ 'download_orig' ] !== undefined )
	{
		// insert a cell; figure out what to put there
		var downloadoriglink = 'Not available';
		if ( drmModule[ 'download_orig' ] )
		{
			downloadoriglink = '<a href="'+ encodeURI( drmModule[ 'download_orig' ] )+ '">' + drmModule[ 'module' ] + '</a>';
		}
		destRow.insertCell( -1).innerHTML = downloadoriglink;
	}

	// rack based uploads have a modtype field
	// (old ones done by the partner site will not)
    if ( drmModule[ 'modtype' ] !== undefined )
    {
        destRow.insertCell( -1 ).innerHTML = drmModule[ 'modtype' ];
    }
    else
    {
	    // otherwise, must be a drmtool upload, which means
	    // it will always be PE32
        destRow.insertCell( -1 ).innerHTML = "32-bit Windows PE";
    }
    destRow.insertCell( -1 ).innerHTML = FlagsToString( drmModule[ 'flags' ] );
	destRow.insertCell( -1 ).innerHTML = d.toLocaleString();
}

function EditDrmModule( drmModule )
{

}

//
//flip the state of whether an app uses items
//
function SetInstallscriptOverride( appid, bOverride )
{
	$('overrideOutput').innerHTML = 'Saving...';

	callback = function( results )
		{
			StandardCallback( results, 'overrideOutput' );
		}

	AppsAjaxRequest(
		g_szBaseURL + '/apps/setinstallscriptoverride/' + appid,
		{ 'override' : bOverride ? "1" : "0" },
		callback
		);
}


//
// set which tab is active on the items page
//

function ItemsPageSetActiveTab( tabName )
{
	tabs = new Array( "basicSettings", "qualityDefs", "itemDefs", "attributeDefs", "timeRewards", "dailyRewards", "itemAdmin" );
	for ( i = 0; i < tabs.length; i++ )
	{
		curTabDiv = $( tabs[i] + 'Tab' );
		curTabBody = $( tabs[i] );

		if ( tabName == tabs[i] )
		{
			curTabDiv.className = 'tab activetab';
			curTabBody.style.display = 'block';
		}
		else
		{
			curTabDiv.className = 'tab';
			curTabBody.style.display = 'none';
		}
	}
}


//
// set the official server IPs for this app
//
function SetOfficialGameServers( appid, serverIPs )
{
	AppsAjaxRequest(
		g_szBaseURL + '/apps/setofficialgs/' + appid,
		{ 'officialGSs' : serverIPs },
		CommonSetHandler,
		'post'
		);
}

//
//
function SetDedicatedGameServers( appid, gamedir, versions, message, serverbrowsername )
{
	AppsAjaxRequest(
		g_szBaseURL + '/apps/setdedicatedgs/' + appid,
		{
			'gamedir' : gamedir,
			'versions' : versions,
			'message' : message,
			'serverbrowsername' : serverbrowsername
		},
		CommonSetHandler
		);
}

function GetSelectValue( name )
{
	var selectElem = document.getElementById( name );
	return selectElem.options[ selectElem.selectedIndex ].value;
}

function GetElementValue( name )
{
	return document.getElementById( name ).value;
}

function ResetElement( name )
{
	document.getElementById( name ).innerHTML = '';
}

function ResetInput ( name )
{
	document.getElementById( name ).value = '';
}

function EnableElement( name )
{
	document.getElementById( name ).disabled = false;
}

function DisableElement( name )
{
	document.getElementById( name ).disabled = false;
}

function HideElement( name )
{
	document.getElementById( name ).style.display = 'none';
}

function ShowElement( name )
{
	document.getElementById( name ).style.display = 'block';
}

function ElementVisible( name )
{
	return document.getElementById( name ).style.display == 'block';
}


function GetandClearElement( name )
{
	value = GetElementValue( name );
	ResetElement( name );
	return value;
}

function GetUserName()
{
	return GetElementValue( 'hiddenUser' );
}

function ImageUploadCallback(jsonResponse)
{
	var results = jsonResponse.evalJSON(true);

	// poke in results
	StandardCallback( results, 'upload_response' );

	// look for any new images we can replace in the DOM. because we
	// get these data out of the DOM (our image uploader stashes them
	// in an iframe) we need to decode them. first, we figure out
	// where in the DOM the results need to go.
	if ( 'images' in results )
	{
		var imageType;
		for ( imageType in results[ 'images' ] )
		{
			var id = false;
			switch ( imageType )
			{
			case "logo":
				id = "appLogo";
				break;
			case "logo_small":
				id = "appLogoSmall";
				break;
			case "icon":
				id = "appIconFull";
				break;
			case "icon_medium":
				id = "appIconMedium";
				break;
			case "icon_small":
				id = "appIcon";
				break;
			case "clienticon":
				id = "appIco";
				break;
			case "workshop_header":
				id = "workshop_header";
				break;
			}
			if ( id )
			{
				var url = unescape( results[ 'images' ][ imageType ] );
				var elt = document.getElementById( id );
				if ( elt )
					elt.src = url;
			}
		}
	}
}

function AsyncNotificationsLocCallbackClosure( appid )
{
	theClosure = function( jsonResponse )
	{
		// the json is wrapped in a <pre> tag, so we must unwrap it.
		var div = new Element("div");
		div.innerHTML = jsonResponse;
		var results = div.childElements()[0].innerHTML.evalJSON(true);

		// poke in results
		StandardCallback( results, 'loc_upload_response' );
		return false;
	};

	return theClosure;
}

function AchievementLocCallbackClosure( appid )
{
	theClosure = function( jsonResponse )
		{
			// the json is wrapped in a <pre> tag, so we must unwrap it.
			var div = new Element("div");
			div.innerHTML = jsonResponse;
			var results = div.childElements()[0].innerHTML.evalJSON(true);

			// poke in results
			StandardCallback( results, 'loc_upload_response' );
			return false;
		};

	return theClosure;
}

function RichPresenceLocCallbackClosure( appid )
{
	theClosure = function( jsonResponse )
	{
		// the json is wrapped in a <pre> tag, so we must unwrap it.
		var div = new Element("div");
		div.innerHTML = jsonResponse;
		var results = div.childElements()[0].innerHTML.evalJSON(true);

		// poke in results
		StandardCallback( results, 'loc_upload_response' );
		return false;
	};

	return theClosure;
}

function BroadcastGameDataLocCallbackClosure( appid )
{
	theClosure = function( jsonResponse )
	{
		// the json is wrapped in a <pre> tag, so we must unwrap it.
		var div = new Element("div");
		console.log( jsonResponse );
		div.innerHTML = jsonResponse;
		var results = div.childElements()[0].innerHTML.evalJSON(true);

		// poke in results
		StandardCallback( results, 'loc_upload_response' );
		return false;
	};

	return theClosure;
}


function BroadcastGameDataCallbackClosure( appid )
{
	theClosure = function( jsonResponse )
	{
		// the json is wrapped in a <pre> tag, so we must unwrap it.
		var div = new Element("div");
		console.log( jsonResponse );
		div.innerHTML = jsonResponse;
		var results = div.childElements()[0].innerHTML.evalJSON(true);

		// poke in results
		StandardCallback( results, 'game_data_upload_response' );
		return false;
	};

	return theClosure;
}


function AchievementImageUploadCallbackClosure( appid, statid, bitid, gray )
{
	theClosure = function( jsonResponse )
		{
			var response = jsonResponse.evalJSON(true);
			StandardCallback( response, 'achievement_upload_response' );

			AppsAjaxRequest( g_szBaseURL + "/apps/fetchachievement/" + appid + "/" + statid + "/" + bitid,
				{},
				function( results )
				{
					var val = gray ? "icon_gray" : "icon";
					$( IDFromAchievement( statid, bitid) + "_" + val ).src = results[ val ];

					fn = DirtyRowClosure( $( IDFromAchievement( statid, bitid ) ) );
					fn();
				}
				);
		};

	return theClosure;
}

function SteamworksDRMCallback(appid, jsonResponse)
{
	var results = jsonResponse.evalJSON(true);

	StandardCallback( results, 'steamwork_drm_response' );

}

function InstallScriptUploadCallback(appid, jsonResponse)
{
	var results = jsonResponse.evalJSON(true);

	StandardCallback( results, 'installscript_upload_response' );
	LoadInstallScript( appid );
}

function ShowHideDiff( bShow )
{
	if ( bShow )
	{
		ShowElement( "appDiff" )
	}
	else
	{
		HideElement( "appDiff" );
	}
}


function ShowHideOutput( bShow )
{
	if ( bShow )
	{
		ShowElement( "appOutput" )
	}
	else
	{
		HideElement( "appOutput" );
	}
}


function PrepareApp( appid, section )
{
	$('appOutput').innerHTML = "";
	ShowHideDiff( false );
	ShowHideOutput( true );
	AppsAjaxRequest( g_szBaseURL + "/apps/prepare/" + appid,
					{ 'section': section },
					function( results )
					{
						StandardCallback( results, 'appOutput' );
						if ( results[ 'success' ] )
						{
							$('publishHidden').show();
                            $('publishbtn').show();
						}
					}
				);
}


function CDNApp( appid )
{
	ShowHideDiff( false );
	ShowHideOutput( true );
	$('appOutput').innerHTML = "Publishing app images...";

	AppsAjaxRequest( g_szBaseURL + "/apps/cdnpush/" + appid,
					{},
					function( results )
					{
						StandardCallback( results, 'appOutput' );
					}
				);
}


function DiffApp( appid, section )
{
	$('appOutput').innerHTML = '';
	$('appDiff').innerHTML = '';
	ShowHideDiff( true );
	ShowHideOutput( false );
	AppsAjaxRequest( g_szBaseURL + "/apps/diff/" + appid,
					{ 'section': section },
					function( results )
					{
						theDiffs = results[ 'opened' ] + results[ 'diff' ];
						if ( theDiffs == "" )
						{
							theDiffs = "[No changes detected.]";
						}
						$('appDiff').innerHTML = "<pre>" + theDiffs + "</pre>";
					}
				);
}

function RevertApp( appid, section )
{
	if ( !confirm( "Revert all unpublished changes?" ) )
	{
		return;
	}

	$('appOutput').innerHTML = "";
	ShowHideDiff( false );
	ShowHideOutput( true );
	$('appDiff').innerHTML = '';
	$('publishbtn').style.display = 'none';

	AppsAjaxRequest( g_szBaseURL + "/apps/revert/" + appid,
					{ 'section': section },
					function( results )
					{
						StandardCallback( results, 'appOutput' );
					}
				);
}

//
// chunked uploads to cross-domain server once we have acquired an upload token
//
function startChunkUploads( inputItem, progressItem, onFinish )
{
    return function ( initResults )
    {
        // check and fire up the actual upload
        var blob = inputItem.files[0];
        // lol, const.
        var BYTES_PER_CHUNK = 2 * 1024 * 1024; // 2MB chunk sizes.
        var SIZE = blob.size;
        var start = 0;
        var end = start + BYTES_PER_CHUNK;
        var status = {
            'pending': Math.ceil( SIZE / BYTES_PER_CHUNK ),
            'succeeded': 0,
            'failed': 0,
            totalUploaded: 0
        };

        // reset upload bar
        jQuery( progressItem ).addClass( 'display').val( 0 ).attr( 'max', SIZE );

        // keep these synchronous for now; the back end server does not take kindly to
        // multiple outstanding requests
        while ( start < SIZE ) {
            end = Math.min( end, SIZE );
            jQuery.ajax( initResults[ 'location' ], {
                async: true,
                accepts: 'application/json',
                type: 'POST',
                error: function( jqXHR, textStatus, errorThrown ) {
                    // handle bogus chrome errors
                    if ( jqXHR.readyState == 0 ) {
                        return;
                    }
                    jqXHR.bChunkFailed = true;
                },
                complete: function( jqXHR, textStatus ) {
                    var cCurrent = --status.pending;
                    // because of some bogus chrome errors, we cannot rely on success being called.
                    if ( jqXHR.bChunkFailed )
                    {
                        status.failed++;
                    }
                    else
                    {
                        status.succeeded++;
                        status.totalUploaded += ( end - start );
                        jQuery( progressItem ).val( status.totalUploaded );
                    }
                     // see if we need to fire the "all done" callback
                    if ( cCurrent == 0 )
                    {
                        onFinish( initResults, status );
                        jQuery( progressItem ).removeClass( 'display' );
                    }
                },
                headers: {
                    'Content-Type': 'application/octet-stream',
                    'Content-Range': 'bytes ' + start + '-' + ( end - 1 ) + '/' + SIZE
                },
                data: blob.slice( start, end ),
                processData: false
            } );
            start = end;
            end = start + BYTES_PER_CHUNK;
        }
    }
}


//
// sets up the language UI in the achievements page
//
// preselect English if available, or the first if not
//
function PopulateAchievementLanguages( appid, languages )
{
	langSelect = $('languageSelect');

	// mutate languages global to include our loc tokens item
	g_rgLanguages[ 'token' ] = 'Localization Token';

	// select the english language if it is available; otherwise
	// pick the first one in the list.
	var victim = "english"
	if ( !( "english" in languages ) )
	{
		victim = Object.keys(languages)[ 0 ];
	}
	g_language = victim;

	var cLanguages = 0;
	var i = 2;								// leave two holes - for "all" and "tokens"
	for ( lang in languages )
	{
		// add language to language selector
		langSelect.options[i] = new Option( g_rgLanguages[lang], lang);
		langSelect.options[i].id = "opt" + lang;

		if ( lang == victim )
		{
			langSelect.options[i].selected = true;
		}

		// add language to list of current editing languages
		g_rgEditingLanguages[ lang ] = 1;
		i++;
		cLanguages++;
	}

	// this routine is also side effecting through the g_bLocalized global,
	// which indicates whether the app supports more than one language (thus
	// enabling a bunch of localization-related UI).
	if ( cLanguages > 1 )
	{
		$( 'languageDiv' ).style.display = '';
		g_bLocalized = true;
	}

}


//
// handler for selecting a language while editing achievements.
// re-fetches achievements; when they display, they will pick up
// the new language.
//
function LanguageSelect( appid )
{
	var langSelect = $('languageSelect');
	g_language = langSelect.options[ langSelect.selectedIndex ].value;

	// issue ajax request to fetch achievements,
	// then when they come back, poke them into the document

	$('appAchievementDisplay').innerHTML = "Loading achievements...";

	AppsAjaxRequest( g_szBaseURL + "/apps/fetchachievements/" + appid,
		{},
		function( results )
		{
			SetAchievements( appid, results[ 'achievements' ] );
		}, 'get'
		);
}


//
// startup function for the achievements page
//
function LoadAchievements( appid )
{
	// issue ajax request to fetch achievements,
	// then when they come back, poke them into the document

	$('appAchievementDisplay').innerHTML = "Loading achievements...";

	AppsAjaxRequest( g_szBaseURL + "/apps/fetchachievements/" + appid,
		{},
		function( results )
		{
			// this operation needs to happen before the other AJAX
			// requests are initiated, so the languages dropdown
			// and current language are populated prior to examining
			// or populating the achievements.
			PopulateAchievementLanguages( appid, results[ 'languages' ] );

 			LoadAchievementCounts( appid );
			SetAchievements( appid, results[ 'achievements' ] );
 		}, 'get'
		);
}


//
// startup function for the stats page
//
function LoadStats( appid )
{
	// issue ajax request to fetch stats,
	// then when they come back, poke them into the document

	$('appStatDisplay').innerHTML = "Loading gameplay stats...";

	AppsAjaxRequest( g_szBaseURL + "/apps/fetchstats/" + appid,
		{},
		function( results )
		{
			SetStats( appid, results );
		}, 'get'
		);
}

//
// startup function for the DRM page
//
function LoadDRM( appid )
{
	// issue ajax request to fetch DRM modules,
	// then when they come back, poke them into the document

	$('appDrmDisplay').innerHTML = "Loading application DRM information...";

	AppsAjaxRequest( g_szBaseURL + "/apps/fetchdrm/" + appid,
		{},
		function( results )
		{
			SetDrmModules( appid, results );
		}, 'get'
		);
}

//
// function for the install script page to re-render install script
// after an upload
//
function LoadInstallScript( appid )
{
	// issue ajax request to fetch install script,
	// then poke it into the document

	AppsAjaxRequest( g_szBaseURL + "/installscript/fetch/" + appid,
		{},
		function( results )
		{
			if ( results[ 'success' ] == false )
			{
				$('installScriptNotPopulated').style.display = '';
				$('installScriptPopulated').style.display = 'none';
			}
			else
			{
				$('installScriptNotPopulated').style.display = 'none';
				$('installScriptPopulated').style.display = '';
				$('appInstallScriptDisplay').innerHTML = results[ 'installscript' ];
			}
		}, 'get'
		);
}


//
// startup function for the signing page
//
function LoadSigningInfo( appid )
{
	// issue ajax request to fetch signing info,
	// then when they come back, poke them into the document

	$('signinginfo_display').innerHTML = "Loading signing info...";
	AppsAjaxRequest( g_szBaseURL + "/apps/fetchsigninginfo/" + appid,
		{},
		function( results )
		{
		    var signatureCheckOnLaunchWindows = [];
		    if( results['signaturescheckedonlaunch'] && results['signaturescheckedonlaunch']['windows'] )
		    {
		        signatureCheckOnLaunchWindows = results['signaturescheckedonlaunch']['windows'];
		    }
		    var signatureCheckOnLaunchOSX = [];
		    if( results['signaturescheckedonlaunch'] && results['signaturescheckedonlaunch']['osx'] )
		    {
		        signatureCheckOnLaunchOSX = results['signaturescheckedonlaunch']['osx'];
		    }

	            for( var filename in results['signedfiles'] )
	            {
	                var row = AddSigningRow();
	                row['file'].value = filename;
	                row['key'].value = results['signedfiles'][filename];
	                if( -1 != signatureCheckOnLaunchWindows.indexOf(filename) )
	                {
	                    row['checkonlaunch']['windows'].checked = true;
	                }
			if( -1 != signatureCheckOnLaunchOSX.indexOf(filename) )
			{
				row['checkonlaunch']['osx'].checked = true;
			}
	            }

		    $('signinginfo_display').innerHTML = "";
		}, 'get'
		);
}

//
// startup function for the community page
//
function LoadScreens( appid )
{
	// issue ajax request to fetch screen shots,
	// then when they come back, poke them into the document

	$('screenshots').innerHTML = "Loading screen shots...";

	AppsAjaxRequest( g_szBaseURL + "/apps/fetchscreens/" + appid,
		{},
		function( results )
		{
			SetScreens( appid, results[ 'screens' ] );
 		}, 'get'
		);
}

// Given the hash + suffix portion, return the URL
function AvatarURL( fn )
{
    return 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/' + fn.substring( 0, 2 ) + '/' + fn + '.jpg';
}

// populate document from set of avatars
function SetAvatars( appid, avatars )
{
	if ( avatars.length == 0 )
	{
		$('avatars').innerHTML = 'Your group has no community avatars. You can upload some above.';
		return;
	}

	$('avatars').innerHTML = '';

	for ( var id = 0; id < avatars.length; id++ )
	{
		var divAvatar = document.createElement( 'div' );
		divAvatar.className = 'avatar';

		var anchor = document.createElement( 'a' );
		anchor.href = '#';
		anchor.onclick = avatarPopupClosure(appid, avatars[id]);

		var imgMed = document.createElement( 'img' );
		imgMed.src = AvatarURL( avatars[id]['avatar_medium'] );
		imgMed.border = 0;
		anchor.appendChild( imgMed );

		divAvatar.appendChild( anchor );
		divAvatar.appendChild( document.createElement( 'br' ) );

		var anchor2 = document.createElement( 'a' );
		anchor2.onclick = DeleteAvatarClosure( appid, id );
		var deleteUrl = g_szBaseURL + "/apps/deleteavatar/" + appid + "/" + id;
		anchor2.href = deleteUrl;
		anchor2.innerHTML = "Delete";

		divAvatar.appendChild( anchor2 );

		$('avatars').appendChild( divAvatar );
	}
}

function avatarPopupClosure(appid, avatar)
{
	var func=function(event) {avatarPopup(event, appid , avatar ); return false;};
	return func;
}

function avatarPopup(event, appid, avatar)
{
	var e=event;
	if (! e )
		e=window.event; // Microsoft-style

	var w=360;
	var h=250;

	var win = window.open('','avatar','height=' + h + ',width=' + w + ',left=' + (e.screenX-225) + ',top=' + (e.screenY-175) + ',toolbar=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no');
	win.document.write('<html><head><title>Avatar Preview</title>');
	win.document.write('<link href="' + g_szBaseURL + '/public/css/styles_global.css" rel="stylesheet" type="text/css" />'); // TODO AFARNSWORTH
	win.document.write('</head><body style="padding: 20px; cursor: pointer;" onclick="window.close()" onload="document.getElementById(\'root\').style.display=\'block\'">');
	win.document.write('<div id="root" style="display: none;">');

    win.document.write('<div id="avatarBlockFull"><img src="' + AvatarURL( avatar['avatar_full'] ) + '" /><p class="avatarSizeDesc">184px</p></div>');
	win.document.write('<div id="avatarBlockMedium"><img src="' + AvatarURL( avatar['avatar_medium'] ) + '" /><p class="avatarSizeDesc">64px</p></div>');
	win.document.write('<div id="avatarBlockIcon"><img src="' + AvatarURL( avatar['avatar_icon'] ) + '" /><p class="avatarSizeDesc">32px</p></div>');
	win.document.write('<br clear="all" />click anywhere to close');
	win.document.write('</div>');
	win.document.write('</body></html>');
	win.document.close();
	win.focus();

}

function LoadAvatars( appid )
{
	$('avatars').innerHTML = "Loading avatars...";

	AppsAjaxRequest( g_szBaseURL + "/apps/fetchavatars/" + appid,
		{},
		function( results )
		{
			SetAvatars( appid, results[ 'avatars' ] );
		}, 'get'
		);
}


function AvatarUploadCallback(appid, jsonResponse)
{
	var results = jsonResponse.evalJSON( true );

	StandardCallback( results, 'avatar_upload_response' );
	document.forms['avatar_upload_form'].reset();

	LoadAvatars( appid );
}


function DeleteAvatarClosure( appid, screenid )
{
	var theClosure =
	function()
		{
			AppsAjaxRequest( g_szBaseURL + "/apps/deleteavatar/" + appid + "/" + screenid,
				{},
				function( results )
				{
					StandardCallback( results, 'avatar_upload_response' );
					LoadAvatars( appid );
				} );
			return false;
		};
	return theClosure;
}


// handler for saving app language list
//
function SetAppLanguages( appid )
{
	AppsAjaxRequest( g_szBaseURL + '/apps/savelanguages/' + appid,
		$('languages_form').serialize(true),
		function( results )
		{
			StandardCallback( results, 'locOutput' );
		}
		);
}

function SetAppDrmGuid( appid )
{
	AppsAjaxRequest( g_szBaseURL + '/apps/setdrmguid/' + appid,
					$('drmguid_selection_form').serialize(true),
					function(results )
					{
						StandardCallback(results, 'setguidoutput') ;
					}
					) ;
}

function UpdateCEGEnabledStatus( appid, enabledflag, versionset, uniqueid )
{

	AppsAjaxRequest( g_szBaseURL + '/apps/updatecegenabledstatus/' + appid,
					{ appid: appid, enabledflag: enabledflag, versionset: versionset},
					function(results )
					{
						StandardCallback(results, uniqueid) ;
					}
					) ;
}

function GetCEGPropStatus( versionset, appid, uniqueid )
{

	AppsAjaxRequest( g_szBaseURL + '/apps/getcegpropstatus/' + appid,
					{ versionset: versionset, appid: appid},
					function(results )
					{
						StandardCallback(results, uniqueid) ;
					}, 'get'
					) ;
}


function AddGameAndChallengeGroup( appid, groupname )
{
    $('addgameandchallengegroupoutput').innerHTML = "Talking to Anti-Cheat servers...";
	AppsAjaxRequest( g_szBaseURL + '/apps/addgameandchallengegroup/' + appid,
					{ groupname: groupname },
					function(results )
					{
						RefreshCallback(results) ;
					}
					) ;
}

function AddChallengeForChallengeGroup( appid, groupid, challengetype )
{
    $('addchallengeforchallengegroupoutput').innerHTML = "Talking to Anti-Cheat servers...";
	AppsAjaxRequest( g_szBaseURL + '/apps/addchallengeforchallengegroup/' + appid,
					{ groupid: groupid, challengetype: challengetype },
					function(results )
					{
						RefreshCallback(results) ;
					}
					) ;
}

function AddModuleForChallengeGroup( appid, groupid, modulename )
{
    $('addmoduleforchallengegroupoutput').innerHTML = "Talking to Anti-Cheat servers...";
	AppsAjaxRequest( g_szBaseURL + '/apps/addmoduleforchallengegroup/' + appid,
					{ groupid: groupid, modulename: modulename },
					function(results )
					{
						RefreshCallback(results) ;
					}
					) ;
}

//
// achievements tab helper; fills in achievement
// localization counts
//
function LoadAchievementCounts( appid )
{
	AppsAjaxRequest( g_szBaseURL + '/apps/getachievementcounts/' + appid,
		{},
		function( results )
		{
			var cAchievements = results[ 'total' ];
			$('achievementCount').innerHTML = cAchievements;
			delete results[ 'total' ];
			var unlocalized = results[ 'unlocalized' ];
			delete results[ 'unlocalized' ];

			if ( 0 && ( unlocalized[ 'descs' ] != 0 || unlocalized[ 'names' ] != 0 ) )
			{
				var elt = $( 'missing_unlocalized' );
				var text = '';
				if ( unlocalized[ 'names' ] )
				{
					text += "%1$s names are completely unlocalized.".replace(/%1\$s/, unlocalized[ 'names' ].toString() );
				}
				if ( unlocalized[ 'descs' ] )
				{
					text += "%1$s descriptions are completely unlocalized.".replace(/%1\$s/, unlocalized[ 'descs' ].toString() );
				}
				elt.innerHTML = text;
				elt.style.display = '';
				elt.className = "outputNeutral";

			}

			for ( lang in results )
			{
				var langName = g_rgLanguages[ lang ];
				if ( lang == 'token' )
					langName = 'localization tokens';
				var elt = $( 'missing_' + lang );

				if ( elt != null )
				{
					var text = '';
					var cNames = results[ lang ][ 'names' ];
					var cDescs = results[ lang ][ 'descs' ];

					if ( lang == "english" )
					{
						cNames += unlocalized[ 'names' ];
						cDescs += unlocalized[ 'descs' ];
					}

					if ( cNames < cAchievements )
					{
						text = "Missing %1$s names in %2$s.".replace(/%1\$s/, ( cAchievements - cNames ) ).replace(/%2\$s/, langName ) + " ";
					}
					if ( cDescs < cAchievements )
					{
						text = text + "Missing %1$s descriptions in %2$s.".replace(/%1\$s/, ( cAchievements - cDescs ) ).replace(/%2\$s/, langName )  + " ";
					}

					if ( text != '' )
					{
						elt.style.display = '';
						elt.innerHTML = text;
						elt.className = "outputNeutral";
					}
					else if ( lang != 'token' )
					{
						elt.style.display = '';
						elt.innerHTML = "%1$s is fully localized.".replace(/%1\$s/, g_rgLanguages[ lang ]);
						elt.className = "outputSuccess";
					}
				}
			}
		}, 'get'
		);
}

//
// cross-branch munging for admins
//
function CrossBranchApp( appid )
{
	if ( !confirm( "Perform cross-branch merge/checkin for this app?" ) )
	{
		return false;
	}

	AppsAjaxRequest(
		g_szBaseURL + '/apps/crossbranch/' + appid,
		{},
		function( results )
		{
			StandardCallback( results, 'appOutput' );
		}
		);

}

//
// community OGG form uploader
//
function CreateCommunityGroup( appid )
{
	if ( !confirm( 'Are you sure you want to create your Community Hub? It will be hidden until your store page is visible.' ) )
	{
		return false;
	}

	AppsAjaxRequest(
		g_szBaseURL + '/apps/createogg/' + appid, {},
		function( results )
		{
			if ( results.success == false )
			{
				StandardCallback( results, "new_ogg_response" );
			}
			else
			{
				window.location.reload( true );
			}
		}
		);
}

function CancelEvent( event )
{
	if ( !event ) var event = window.event;

	event.cancelBubble = true;
	if ( event.stopPropagation ) event.stopPropagation();
}

//
// Get leaderboard entries
// element - ID of element to update with progress & results
// template - html template for each row
// dataRequest - 0 = global, 1 = global around specified user, 2 = friends of user
// onReceivedEntries - callback reporting new total entries in leaderboard (params: leaderboardid, totalCount)
//
function GetLeaderboardEntries( target, template, onReceivedEntries, appid, leaderboardid, dataRequest, rangeStart, rangeEnd, steamid )
{
	var element = $( target );
	element.innerHTML = 'Loading...';

	AppsAjaxRequest(
		g_szBaseURL + '/apps/getleaderboardentries/' + appid,
		{
			'leaderboardid' : leaderboardid,
			'dataRequest' : dataRequest,
			'rangeStart' : rangeStart,
			'rangeEnd' : rangeEnd,
			'steamid' : steamid
		},
		function ( results )
		{
			if ( !results[ 'success' ] )
			{
				element.innerHTML = 'Unable to load entries';
				return;
			}

			if ( results[ 'entries' ].length == 0 )
			{
				element.innerHTML = 'No entries in this leaderboard';
				return;
			}

			element.innerHTML = '';
			for (var i = 0; i < results[ 'entries' ].length; i++)
			{
				var rank = results['entries'][i]['rank'];
				var steamid = results['entries'][i]['steamid'];
				var score = results['entries'][i]['score'];
				var personaname = results['entries'][i]['personaname'];
				var details = results['entries'][i]['details'];

				var deletename = EscapeHTML( personaname.replace( /'/g, "\\'" ) ); // Escape any HTML and any single-quotes in the personaname
				var html = template.evaluate( { score: score, steamid: steamid, rank: rank, leaderboardid: leaderboardid, personaname: personaname, details: details, deletename: deletename } );
				element.insert( html );
			}

			onReceivedEntries( leaderboardid, results['totalEntries'] );
		}, 'get'
		);
}

//
// Draws a page control the target element
//
// Params:
// target - element to set html for
// onChange - function called when user clicks a page link [def: onChange( context, page ) ]
// context - passed as first param to onChange
// currentPage - selected page
// maxPage - last page that can be selected. If 0, target is left blank
//
function RenderPageControl( target, onChange, context, currentPage, maxPage )
{
	// special case for no results found
	if ( maxPage == 0 )
	{
		$( target ).innerHTML = '';
		return;
	}

	// setup config
	var startEllipsis = false;
	var startPage = 1;
	var endEllipsis = false;
	var endPage = maxPage;

	if ( maxPage > 7 )
	{
		if ( currentPage - 3 > 1 )
		{
			startEllipsis = true;
			startPage = currentPage - 2;
		}

		if ( currentPage + 3 < maxPage )
		{
			endEllipsis = true;
			endPage = currentPage + 2;
		}
	}

	function CreateLink( page, inner )
	{
		return '<a href="javascript:' + onChange + '( ' + context + ', ' + page + ');">' + inner + '</a>';
	}

	// build HTML
	var html = '';
	if ( currentPage > 1 )
		html += CreateLink( currentPage - 1, "&lt;&lt;" ) + ' ';

	html += 'Page: ';

	if ( startEllipsis )
		html += CreateLink( 1, 1 ) + ' &nbsp;...&nbsp; ';

	for ( var i = startPage; i <= endPage; i++ )
	{
		if ( i > startPage )
		{
			html += '&nbsp;|&nbsp;';
		}
		if ( i == currentPage )
		{
			html += i;
		}
		else
		{
			html += CreateLink( i, i );
		}
	}

	if ( endEllipsis )
	{
		html += ' &nbsp;...&nbsp; ' + CreateLink( maxPage, maxPage );
	}

	if ( currentPage < maxPage )
	{
		html += ' ' + CreateLink( currentPage + 1, '&gt;&gt;' );
	}

	// set it
	$( target ).innerHTML = html;
}

function DeleteLeaderboardEntry( onDelete, appid, leaderboardid, steamid, personaname )
{
	if ( !confirm( "Are you sure you want to delete the leaderboard entry for: %1$s?".replace('%1$s', personaname ) ) )
		return;

	AppsAjaxRequest(
		g_szBaseURL + '/apps/deleteleaderboardentry/' + appid,
		{
			'leaderboardid' : leaderboardid,
			'steamid' : steamid
		},
		function ( results )
		{
			if ( !results[ 'success' ] )
			{
				alert( results['message'] );
			}

			onDelete( leaderboardid );
		}
		);
}


//
// Change community settings
//
function SetAppCommunityFriendlyName( appid, friendlyname )
{
	AppsAjaxRequest( g_szBaseURL + '/apps/setcommunityfriendlyname/' + appid,
		{ 'friendlyname' : friendlyname },
		function(results) {
			if ( StandardCallback( results, 'community_stats_save_output' ) )
			{
				if ( friendlyname )
					$('community_friendly_name_clear_btn').show();
				else
					$('community_friendly_name_clear_btn').hide();
			}
		}
	);
}

function SetAppCommunityStatsHidden( appid, statshidden )
{
	AppsAjaxRequest( g_szBaseURL + '/apps/setcommunitystatshidden/' + appid,
		{ 'statshidden' : statshidden },
		function(results) { StandardCallback( results, 'community_stats_save_output' ); }
	);
}


function DisplayDivOnClick( button, div )
{
	if ( $(button) )
		$(button).hide();

	if ( $(div) )
		new Effect.BlindDown( $(div), {duration: 0.25} );
}

function DisplayCreateCommunityItemForm( eItemClass, strDisplayName )
{
	document.forms['create_item_form'].elements['item[class]'].value = eItemClass;
	$('create_item_form_submit').update( 'Create ' + strDisplayName );
	DisplayDivOnClick( 'create_communityitems_actions', 'create_item_form_ctn' );
}

function DisplayGrantCommunityItemForm( eItemClass, strDisplayName )
{
	document.forms['grant_items_form'].elements['item_class'].value = eItemClass;
	document.forms['grant_items_form'].elements['grant_item_type'].value = 0;
	$('grant_items_form_submit').update( 'Grant ' + strDisplayName );
	DisplayDivOnClick( 'grant_communityitems_actions', 'grant_items_form_ctn' );
}

function CreateGameProfile( appID )
{
	const $dialog = ShowPromptDialog( 'Create New Game Profile', 'Please enter a unique name for this game profile. This name cannot be changed and will be visible to users.', 'Create' );

	$dialog.done( function( strName )
	{
		AppsAjaxRequest( g_szBaseURL + '/apps/ajaxcreategameprofile/' + appID,
			{ 'name' : strName },
			function( data ) {
				if ( data.success == 1 )
				{
					location.href = g_szBaseURL + '/apps/communityitems/' + appID + '/' + data.item_type;
				}
				else
				{
					const errorDialog = ShowAlertDialog( 'Create New Game Profile', 'We ran into an issue creating this game profile. Please try again or check for partial creation. (%1$s)'.replace('%1$s', data.success ) );
					errorDialog.done( function() { location.reload(); } );
				}
			}
		);
	} );
}

function DeleteGameProfile( appID, item_type, bDelete )
{
	const $dialog = ShowConfirmDialog( 'Delete Game Profile', 'Are you sure you want to delete this game profile bundle and its associated items? This cannot be undone.', 'Delete' );

	$dialog.done( function()
	{
		AppsAjaxRequest( g_szBaseURL + '/apps/ajaxdeletegameprofile/' + appID,
			{ 'type' : item_type, 'delete' : bDelete },
			function( data ) {
				if ( data.success == 1 )
				{
					location.href = g_szBaseURL + '/apps/communityitems/' + appID;
				}
			else
				{
					const errorDialog = ShowAlertDialog( 'Delete Game Profile', 'We ran into an issue deleting this game profile. Please try again later or contact Steamworks support. (%1$s)'.replace('%1$s', data.success ) );
					errorDialog.done( function() { location.reload(); } );
				}
			}
		);
	} );
}

//
// Tags
//
function AddTagCategory( tagCategories )
{
	var parent = $( tagCategories );
	var index = parent.children.length;
	var arrayKey = tagCategories + '[' + index + ']';
	var div = new Element( 'div', { 'id' : tagCategories + '_' + index } );
	div.innerHTML = "New - Category Name (can be empty):";
	var inputEnglish = new Element( 'input', { 'name': arrayKey + '[english]' } );
	div.appendChild( inputEnglish );
	var inputHTMLElement = new Element( 'input', { 'name' : arrayKey + '[htmlelement]', 'type' : 'hidden', 'value' : 'checkbox' } );
	div.appendChild( inputHTMLElement );
	parent.appendChild( div );
	$('TagsForm').submit();
}

function RemoveTagCategory( id )
{
	$( id ).remove();
	$('TagsForm').submit();
}

function RemoveTag( tagID )
{
	$( tagID ).remove();
	$('TagsForm').submit();
}

function AddTag( htmlID, addTagButton, tagCategories, category )
{
	var parent = $( tagCategories + '_' + category );
	var index = parent.children.length;
	var name = tagCategories + '[' + category + '][tags][' + index + ']';
	var input = new Element( 'input', { 'name' : name, 'id' : name } );

	parent.appendChild( new Element( 'br' ) );
	var span = new Element( 'span' );
	span.innerHTML = "New:&nbsp;";
	parent.insertBefore( span, $( addTagButton ) );
	parent.insertBefore( input, $( addTagButton ) );
	parent.insertBefore( new Element( 'br' ), $( addTagButton ) );
}

function OnChangeTagCategoryType( htmlID )
{
	var selectOption = $( htmlID + '[htmlelement]' );
	if ( selectOption.value == 'external_url' )
	{
		$( htmlID + '[external_url_container]' ).show();
	}
	else
	{
		$( htmlID + '[external_url_container]' ).hide();
	}
}

function UpdateReleaseRequest( nAppId, rgChanges, bReload )
{
	// ensure session ID is present
	if ( !( 'sessionid' in rgChanges ) ) {
		rgChanges[ 'sessionid' ] = g_sessionID;
	}

	if ( bReload == undefined )
	{
		bReload = true;
	}

	$J.ajax({
		url: 'https://partner.steamgames.com/apprelease/ajaxupdatereleaserequest/' + nAppId,
		cache: false,
		type: "POST",
		data: rgChanges,
		error: function() {
			alert("Unknown error. Changes have not been saved.");
		},
		success: function( response )
		{
			if( response.success == 1 ) {
				if ( bReload ) {
					location.reload();
				}
			} else {
				alert("Update failed (Error code: " + response.error_message);
			}
		}
	});
}

function ShowBanAppDialog( appid, callbackFunc )
{
	var dialog = ShowPromptWithTextAreaDialog( "Ban app", '', null, null, 1000 );

	var text_area = $J( dialog.m_$Content ).find( "textarea" );
	var ban_checkbox = document.createElement( "input" );
	ban_checkbox.id = "retireapp_mark_banned";
	ban_checkbox.type = "checkbox";
	ban_checkbox.checked = true;
	var ban_label = document.createElement( "label" );
	ban_label.htmlFor = "retireapp_mark_banned";
	ban_label.textContent = 'Mark as banned internally - ignored in game count, hidden for non-owners in community profile.';

	text_area.before( $J( "<div/>", { html: "This will ban the appID from Steam. This includes the following actions:<br><br><ul><li>Hide the store page<li>Hide all store packages that the appID is in<li>Disable key requests<li>Disable in-game transactions<li>Set free on-demand packages to not available<li>Remove the appID from the trading card coupon program<li>Mark any trading cards or Inventory Service items as unmarketable<\/ul><br>Please leave a note below on why this app is being banned, which will be saved in the internal notes field.", style: "font-size: 16px; padding-bottom: 10px" } ),
		ban_checkbox,
		ban_label);
	text_area.css({ height: '200px' });

	dialog.done( function( data ) {
		data = v_trim( data );

		var rgChanges = { sessionid: g_sessionID, notes: data };
		var bBanned = $J( ban_checkbox ).prop('checked');

		UpdateReleaseRequest( appid, rgChanges, false ); // This will set the internal notes field with the text from data

		$J.ajax({
			url: 'https://partner.steamgames.com/apps/banapp/' + appid,
			cache: false,
			data: { sessionid: g_sessionID, notes: data, banned: bBanned ? 1 : 0},
			type: "POST",
			error: onAjaxFail,
			success: function( response )
			{
				if( response.success == 1 )
				{
					if ( callbackFunc )
					{
						callbackFunc();
					}
					else
					{
						location.reload();
					}
				}
				else
				{
					ShowAlertDialog( 'Error', response.errors );
				}

			}
		});
	} );
}

var rgUrls = [];
var nFailureCount = 0;

function CreatePHPDateFromObject( d )
{
	dateData = {}
	dateData['year'] = d.getUTCFullYear();
	dateData['month'] = d.getUTCMonth() + 1; // :spazhorror:
	dateData['day'] = d.getUTCDate();
	dateData['hour'] = d.getUTCHours();
	dateData['minute'] = d.getUTCMinutes();

	return dateData;
}

function VerifyReleasePrepurchase( appid, data )
{
	VerifyReleaseCommon(
		appid,
		data,
		ReleaseGamePrepurchase,
		"Confirm Pre-Purchase",
		"If you are ready to start pre-purchase, please type the phrase \"%1$s\" into the box below.",
		"Start my prepurchase",
		"Start Pre-Purchase"	);
}

function VerifyReleasePreload( appid, data )
{
	VerifyReleaseCommon(
		appid,
		data,
		ReleaseGamePreload,
		"Confirm Preload",
		"If you are ready to start a preload, please type the phrase \"%1$s\" into the box below.",
		"Start my preload",
		"Start Preload"	);
}

function VerifyReleaseGame( appid, data )
{
	VerifyReleaseCommon(
		appid,
		data,
		ReleaseGame,
		"Confirm App Release",
		"If you are ready to release your app and make it available to customers immediately, please type the phrase \"%1$s\" into the box below.",
		"Release my app",
		"Release Now"	);
}

function VerifyReleaseGameChina( appid, data )
{
	VerifyReleaseCommonChina(
		appid,
		data,
		ReleaseGameChina,
		"Confirm App Release",
		"If you are ready to release your app and make it available to customers immediately, please type the phrase \"%1$s\" into the box below.",
		"Release my app",
		"Release Now"	);
}

function VerifyReleaseLimitedLaunch( appid, data )
{
	VerifyReleaseCommon(
		appid,
		data,
		ReleaseGame,
		"Confirm Limited Launch",
		"If you are ready to start your Limited Launch, please type the phrase \"%1$s\" into the box below.",
		"Start my Limited Launch",
		"Start Limited Launch"	);
}


function VerifyReleaseCommon( appid, data, fnRelease, strConfirmTitle, strConfirmText, strAcceptString, strButtonText )
{
	var dialog = ShowPromptDialog( strConfirmTitle, strConfirmText.replace('%1$s', strAcceptString), strButtonText, null );

	var input = $J( dialog.m_$Content ).find( "input" );
	var releasebtn = $J( dialog.m_$Content ).find( "button" );
	releasebtn.prop('disabled', true);


	input.on('keyup', function(event){
		if( input.val().toLowerCase() == strAcceptString.toLowerCase() )
			releasebtn.prop('disabled', false);
		else if( input.val().localeCompare( strAcceptString, "standard", { sensitivity: 'base' } ) === 0 )
			releasebtn.prop('disabled', false);
		else
			releasebtn.prop('disabled', true);
	})

	dialog.done( function( )
	{
		fnRelease( appid, data );
	} );

	dialog.fail( function() {
		$J("#publish_button").show();
		$J("#publish_button").show();
		$J('#publish_status').hide();
	})
}

function VerifyReleaseCommonChina( appid, data, fnRelease, strConfirmTitle, strConfirmText, strAcceptString, strButtonText )
{
	var dialog = ShowPromptDialog( strConfirmTitle, strConfirmText.replace('%1$s', strAcceptString), strButtonText, null );

	var input = $J( dialog.m_$Content ).find( "input" );
	var releasebtn = $J( dialog.m_$Content ).find( "button" );
	releasebtn.prop('disabled', true);


	input.on('keyup', function(event){
		if( input.val().toLowerCase() == strAcceptString.toLowerCase() )
			releasebtn.prop('disabled', false);
		else if( input.val().localeCompare( strAcceptString, "standard", { sensitivity: 'base' } ) === 0 )
			releasebtn.prop('disabled', false);
		else
			releasebtn.prop('disabled', true);
	})

	dialog.done( function( )
	{
		fnRelease( appid, data );
	} );

	dialog.fail( function() {
		$J("#publish_button_china").show();
		$J("#publish_button_china").show();
		$J('#publish_status_china').hide();
	})
}

function ReleaseGamePrepurchase( appid, data )
{
	ReleaseGameCommon( 'https://partner.steamgames.com/apps/releaseappprepurchase/' + appid, data );
}

function ReleaseGamePreload( appid, data )
{
	ReleaseGameCommon( 'https://partner.steamgames.com/apps/releaseapppreload/' + appid, data );
}

function ReleaseGame( appid, data )
{
	ReleaseGameCommon( 'https://partner.steamgames.com/apps/releaseapp/' + appid, data );
}

function ReleaseGameChina( appid, data )
{
	ReleaseGameCommonChina( 'https://partner.steamgames.com/apps/ajaxreleaseappsteamchina/' + appid, data );
}

function ReleaseGameCommon( url, data )
{
	jQuery.ajax({
		dataType: "json",
		url: url,
		type: 'POST',
		data: data,
		success: function(data)
		{
			if( data.message )
				$J('#publish_status_log').append(  $J( '<span>' + data.message + '</span><br>' ) );

			if( data['success'] != 1 )
			{
				$J('#publish_status_log').append( $J('<p><b>ERROR '+data['success']+'</b><br>Please refresh and try again. If problems persist, <a href="https://partner.steamgames.com/home/contact_steam">contact Steam Publishing</a></p>') );
				$J('#publish_status_log').show();
				$J('#publish_status').hide();
				$J('#publish_button').show();
			} else {
				$J('#publish_status').hide();
				$J('#release_details_container').hide();

				if ( data['release_action'] && data['release_action'] == 'preload' )
				{
					$J('#publish_success_preload').show();
				}
				else
				{
					$J('#publish_success').show();
				}
			}

			// refresh the send demo wishlist emails button
			window?.AppLandingRefreshCallbacks?.Dispatch();
		},
		error: function( response )
		{
			$J('#publish_status_log').append( $J('<p><b>Request failed with an unknown error.</b></p><p>Please refresh and try again. If problems persist, <a href="https://partner.steamgames.com/home/contact_steam">contact Steam Publishing</a></p>') );
			$J('#publish_status_log').show();
			$J('#publish_status').hide();
			$J('#publish_button').show();
		}
	});
}

function ReleaseGameCommonChina( url, data ) //TODO: PIETERW - had to create this because the publish_status_china things are unique to the Steam China DIVS
{
	jQuery.ajax({
		dataType: "json",
		url: url,
		type: 'POST',
		data: data,
		success: function(data)
		{
			if( data.message )
				$J('#publish_status_log_china').append(  $J( '<span>' + data.message + '</span><br>' ) );

			if( data['success'] != 1 )
			{
				$J('#publish_status_log_china').append( $J('<p><b>ERROR '+data['success']+'</b><br>Please refresh and try again. If problems persist, <a href="https://partner.steamgames.com/home/contact_steam">contact Steam Publishing</a></p>') );
				$J('#publish_status_log_china').show();
				$J('#publish_status_china').hide();
				$J('#publish_button-china').show();
			} else {
				$J('#publish_status_china').hide();
				$J('#release_details_container_china').hide();
				$J('#publish_success_china').show();
			}

			// refresh the send demo wishlist emails button
			window?.AppLandingRefreshCallbacks?.Dispatch();
		},
		error: function( response )
		{
			console.log('error', arguments);
			$J('#publish_status_log_china').append( $J('<p><b>Request failed with an unknown error.</b></p><p>Please refresh and try again. If problems persist, <a href="https://partner.steamgames.com/home/contact_steam">contact Steam Publishing</a></p>') );
			$J('#publish_status_log_china').show();
			$J('#publish_status_china').hide();
			$J('#publish_button_china').show();
		}
	});
}

function SetToolFreeToDownload( appid, bAdd )
{
	$J.ajax({
		type: "POST",
		url: "https://partner.steamgames.com/apps/ajaxsettoolfreetodownload/"+appid,
		dataType: "json",
		data: {
			'add' : bAdd,
			'sessionid' : g_sessionID,
		},
		success: function( response )
		{
			if ( response.success != 1 )
			{
				ShowAlertDialog( 'Failed to update Dedicated Server package', response.messages );
			}
		},
		error: function ( response )
		{
			ShowAlertDialog( 'Failed to update Dedicated Server package', response.messages );
		}
	});
}

// Helper for passing around CreateNewAppHelper options
class CAppCreationOptions
{
	m_bF2P = false;
	m_bF2PText = false;
	m_bAddPartnerAppReporting = false;
	m_bStandaloneDemoStorePage = false;
	m_bCDKeyBeta = false;
}

function CreateDemo( parentId, demoName, bStandaloneDemoStorePage )
{
	const appOptions = new CAppCreationOptions();
	appOptions.m_bAddPartnerAppReporting = true;
	appOptions.m_bStandaloneDemoStorePage = bStandaloneDemoStorePage;
	CreateNewAppHelper( 0, parentId, demoName, 'Demo', 10, appOptions );
}

function CreateTool( parentId, strName )
{
	const appOptions = new CAppCreationOptions();
	appOptions.m_bAddPartnerAppReporting = true;
	CreateNewAppHelper( 0, parentId, strName, 'Tool', 10, appOptions );
}

function CreateBetaApp( pubId, parentId, appName, bCDKeyOnly )
{
	const appOptions = new CAppCreationOptions();
	appOptions.m_bAddPartnerAppReporting = true;
	appOptions.m_bCDKeyBeta = bCDKeyOnly;
	CreateNewAppHelper( pubId, parentId, appName, 'Beta', 10, appOptions );
}

function CreateNewApp( pubId, appName, appType, bF2P, reservedRange, bAddPartnerAppReporting, bF2PText )
{
	const appOptions = new CAppCreationOptions();
	appOptions.m_bF2P = bF2P;
	appOptions.m_bAddPartnerAppReporting = bAddPartnerAppReporting;
	appOptions.m_bF2PText = bF2PText;
	CreateNewAppHelper( pubId, 0, appName, appType, reservedRange, appOptions );
}

function CreateNewAppHelper( pubId, parentId, appName, appType, reservedRange, appOptions /* CAppCreationOptions */ )
{
	var progressDialog = ShowProgressDialog( 'Create New App', 'Creating New App' );
	progressDialog.done( function() { top.location.reload(); } );

	var progressMessages = $J( '#ProgressMessagesContainer' );
	progressMessages.append( '<div class="add_dlc_msg parent">' + 'Requesting AppID For: ' + appName + '</div>' );

	// add initial one to create the range
	$J.post( 'https://partner.steamgames.com/apps/ajaxcreatenewapp/',
		{
			'name' : appName,
			'type' : appType,
			'range' : reservedRange,
			'add_partner_app_reporting' : appOptions.m_bAddPartnerAppReporting ? 1 : 0,
			'publisherid' : pubId,
			'parentid' : parentId,
			'f2p' : appOptions.m_bF2P ? 1 : 0,
			'f2ptext' : appOptions.m_bF2PText,
			'sessionid' : g_sessionID,
			'standalonestore' : appOptions.m_bStandaloneDemoStorePage ? true : undefined,
			'cdkeybeta' : appOptions.m_bCDKeyBeta ? 1 : 0
		}
	).done(
		function( response ) {
			if ( response.success == 1 )
			{
				var divDone = $J('<div/>', { 'style' : 'font-weight: bold; color: white;' } );
				divDone.append( 'Done creating new app!' );
				$J( "#WaitingContainer" ).html( divDone );

				if ( response.messages )
				{
					for ( var i = 0; i < response.messages.length; ++i )
					{
						progressMessages.append( '<div class="add_dlc_msg">' + response.messages[i] + '</div>' );
					}
				}
				progressMessages.animate({"scrollTop": progressMessages.scrollHeight}, "slow");

				progressMessages.append( '<div class="add_dlc_msg parent">Done!</div>' );
				progressMessages.animate({"scrollTop": progressMessages.scrollHeight}, "slow");
				return;
			}
			else
			{
				if ( !response.messages )
				{
					progressMessages.append( '<div class="add_dlc_error_msg">' + response + '</div>' );
					return;
				}
				if ( response.messages )
				{
					for ( var i = 0; i < response.messages.length; ++i )
					{
						progressMessages.append( '<div class="add_dlc_error_msg">' + response.messages[i] + '</div>' );
					}
				}
				progressMessages.animate({"scrollTop": progressMessages.scrollHeight}, "slow");
			}
		}
	).fail(
		function( jqxhr ) {
			progressDialog.Dismiss();
			ShowAlertDialog( 'Failed to create new app', jqxhr.responseText );
		}
	);
}

function CreateNewVideoApp( pubId, strVideoName, strVideoType, bF2P, b360Video, bAssociatedApp )
{
	var progressDialog = ShowProgressDialog( 'Create New App', 'Creating New App' );
	progressDialog.done( function() { top.location.reload(); } );

	var progressMessages = $J( '#ProgressMessagesContainer' );
	progressMessages.append( '<div class="add_dlc_msg parent">' + 'Requesting AppID For: ' + strVideoName + '</div>' );

	$J.ajax({
		type: "POST",
		url: "https://partner.steamgames.com/apps/ajaxcreatevideoseries",
		dataType: "json",
		data: {
			'SeriesName': strVideoName,
			'CreateFreePackage' : bF2P,
			'CreateFilesApp' : bAssociatedApp,
			'Set360VideoFormat' : b360Video,
			'VideoType' : strVideoType,
			'Publisherid' : pubId,
			'sessionid' : g_sessionID,
		},
		success: function( response )
		{
			if ( response.result == 1 )
			{
				var divDone = $J('<div/>', { 'style' : 'font-weight: bold; color: white;' } );
				divDone.append( 'Done creating new app!' );
				$J( "#WaitingContainer" ).html( divDone );

				if ( response.messages )
				{
					for ( var i = 0; i < response.messages.length; ++i )
					{
						progressMessages.append( '<div class="add_dlc_msg">' + response.messages[i] + '</div>' );
					}
				}
				progressMessages.animate({"scrollTop": progressMessages.scrollHeight}, "slow");

				progressMessages.append( '<div class="add_dlc_msg parent">Done!</div>' );
				progressMessages.animate({"scrollTop": progressMessages.scrollHeight}, "slow");
				return;
			}
			else
			{
				if ( !response.messages )
				{
					progressMessages.append( '<div class="add_dlc_error_msg">' + response + '</div>' );
					return;
				}
				if ( response.messages )
				{
					for ( var i = 0; i < response.messages.length; ++i )
					{
						progressMessages.append( '<div class="add_dlc_error_msg">' + response.messages[i] + '</div>' );
					}
				}
				progressMessages.animate({"scrollTop": progressMessages.scrollHeight}, "slow");
			}
		},
		error: function ( response )
		{
			ShowAlertDialog( 'Failed to create new app', response.responseText );
		}
	});
}

function ShowProgressDialog( strTitle, strDescription )
{
	var deferred = new jQuery.Deferred();
	var fnOK = function() { deferred.resolve(); };

	var progress_container = $J('<div/>', {'class': 'progress_container', 'id' : 'ProgressMessagesContainer' } );

	var throbber_container = $J('<div/>', {'class': 'waiting_dialog_container', 'id' : 'WaitingContainer' } );
	var throbber = $J('<div/>', {'class': 'waiting_dialog_throbber'} );
	throbber_container.append( throbber );
	throbber_container.append( strDescription );

	progress_container.append( throbber_container );

	var Modal = _BuildDialog( strTitle, progress_container, [], fnOK );
	deferred.always( function() { Modal.Dismiss(); } );
	Modal.Show();

	// attach the deferred's events to the modal
	deferred.promise( Modal );

	return Modal;
}

function UpgradeGreenlightItem( item )
{
	var prompt = ShowPromptDialog( "Import Application", "You can choose to rename your application if you wish." );
	var input = prompt.m_$Content.find( 'input' );
	input.val( item['title'] );
	input.select();

	input.after(
		'<div>'+"Product Type:"+'</div><div><select name="appTypeGreenlight" id="appTypeGreenlight" style="width: 100px;"><option value="Game">'+"Game"+'</option><option value="Application">'+"Application"+'</option></select></div>'
	);

	var content = prompt.m_$Content;
	var appTypeElem = prompt.m_$Content.find( "#appTypeGreenlight");

	prompt.done( function( appName ) {
		var appType = appTypeElem.val();
		var waitingDialog = ShowBlockingWaitDialog( 'Converting', 'Please wait...' );
			$J.ajax(
				{
					type: "POST",
					url: 'https://partner.steamgames.com/apps/ajaxupgradegreenlightentry/',
					data: { 'publishedfileid' : item['publishedfileid'], 'name' : appName, 'type' : appType, 'sessionid' : g_sessionID },
					success: function ( response ) {
						if ( response.success == 1 )
						{
							waitingDialog.Dismiss();
							var dialog = ShowAlertDialog( 'Converted!', 'We have successfully converted your product to a full Steamworks application! The appid is: ' + response.appid );
							dialog.done(function() {
								top.location.href = "https://partner.steamgames.com/apps/landing/" + response.appid;
							});
						}
						else
						{
							waitingDialog.Dismiss();
							ShowAlertDialog( 'Error', 'An error was encountered while processing your request: ' + response.success );
						}
					}
				}
			);
	} );

}

function onAjaxFail( xhr )
{
	var msg = "An error has occurred. Please try again later";
	try{
		var data = $J.parseJSON( xhr.responseText );
		if( data.message )
			msg = data.message;

	} catch(e) {};
	ShowAlertDialog( "Error", msg );
}



var g_ConsumerAppID = 0;

function AddMMPartnerAppId()
{
	var appid = $('add_mmpartner_app_id').value;

	if ( appid == '' || isNaN( appid ) )
	{
		alert( $('add_mmpartner_app_id').value + ' is not a valid app id' );
		return;
	}

	try
	{
		new Ajax.Request('https://partner.steamgames.com/apps/addmmpartnerapp/' + g_ConsumerAppID,
			{
				method:'post',
				parameters: { 'mmpartner_app_id' : appid, 'sessionid': g_sessionID },
				onSuccess: function(transport)
				{
					if ( transport.responseText ){
						try {
							var result = transport.responseText.evalJSON(true);
						} catch ( e ) {
							// Failure
							OnAddMMPartnerAppIdFailure( transport.responseText );
						}

						// Success...
						if ( result.success == 1 )
						{
							OnAddMMPartnerAppIdSuccess( appid )
							return;
						}
						else
						{
							OnAddMMPartnerAppIdFailure( transport.responseText );
							return;
						}
					}

								},
				onFailure: function()
				{
					OnAddMMPartnerAppIdFailure( transport.responseText );
				}
			});
	}
	catch(e)
	{
		OnAddMMPartnerAppIdFailure( transport.responseText );
	}
}

function OnAddMMPartnerAppIdSuccess( appid )
{
	appid = parseInt(appid, 10);
	var app_row = $('mmpartner_app_' + appid );
	if ( !app_row )
	{
		var app_table = $('mmpartner_app_table');
		var app_row = app_table.insertRow();
		var cell1 = app_row.insertCell(0);
		var cell2 = app_row.insertCell(1);
		cell1.innerHTML = appid;
		cell2.innerHTML = '<a href="javascript:RemoveMMPartnerAppId(' + appid + ');">Remove</a>';
	}
}

function OnAddMMPartnerAppIdFailure( sErrorText )
{
	alert( 'error adding new app publish permission'+sErrorText );
}

function RemoveMMPartnerAppId( appid )
{
	try
	{

		new Ajax.Request('https://partner.steamgames.com/apps/removemmpartnerapp/' + g_ConsumerAppID,
			{
				method:'post',
				parameters: { 'mmpartner_app_id' : appid, 'sessionid': g_sessionID },
				onSuccess: function(transport)
				{
					if ( transport.responseText ){
						try {
							var result = transport.responseText.evalJSON(true);
						} catch ( e ) {
							// Failure
							OnRemoveMMPartnerAppIdFailure( transport.responseText );
						}
						// Success...
						if ( result.success == 1 )
						{
							OnRemoveMMPartnerAppIdSuccess( appid )
							return;
						}
						else
						{
							OnRemoveMMPartnerAppIdFailure( transport.responseText );
							return;
						}
					}

								},
				onFailure: function()
				{
					OnRemoveMMPartnerAppIdFailure( transport.responseText );
				}
			});
	}
	catch(e)
	{
		OnRemoveMMPartnerAppIdFailure( transport.responseText );
	}
}

function OnRemoveMMPartnerAppIdSuccess( appid )
{
	var app_table = $('mmpartner_app_table');
	for ( var i = 0; i < app_table.rows.length; i++ )
	{
		if ( app_table.rows[i].id == 'mmpartner_app_' + appid )
		{
			app_table.deleteRow( i );
			return;
		}
	}
}

function SetCurrentAppBuild( appid, betakey, buildid, description, nomerge, confirmation='' )
{
	if ( betakey <= 0 )
	{
		$('SetCurrentAppBuildOutput').innerHTML = 'Please select a beta branch';
		$('SetCurrentAppBuildOutput').className = "outputFailure";
	}
	else
	{
		// on the partner page we say 'default' instead of 'public'.
		var betaname = ( betakey == 'public' ) ? 'default' : betakey;

		if( confirm( 'Set build '+buildid+' live for branch "' + betaname + '" ?' ) )
		{
			$('SetCurrentAppBuildOutput').innerHTML = 'Working...';
			AppsAjaxRequest( 'https://partner.steamgames.com/apps/setappbuildid/' + appid,
				{ 'betakey' : betakey, 'buildid' : buildid, 'description' : description, 'nomerge' : nomerge, 'confirmation' : confirmation },
				function( results )
				{
					StandardCallback( results, 'SetCurrentAppBuildOutput' );

					if ( results[ 'success' ] )
					{
						// no error, go back to builds overview
						$('SetCurrentAppBuildOutput').innerHTML = 'Reloading...';

						//Build information for this branch for the patch note editor
						buildParams = '?submittedbuild=' + buildid;
						if ( betakey !== 'default' )
						{
							buildParams = buildParams + '&buildbranch=' + betakey;

							//TEMP: Right now we don't want any branches other than the main build submitting patch notes,
							//so just clear out the build params for these other branches. To enable other branches
							//to have patch notes, just delete the line below
							buildParams = '';
						}

						window.location.href = 'https://partner.steamgames.com/apps/builds/' + appid + buildParams;
					}
					else
					{
						if ( results[ 'eresult' ] == 22 )
						{
							if ( results[ 'require_sms' ] == true )
							{
								ShowPromptDialog( 'Confirm setting this build live', 'Please enter the code texted to your mobile device', 'Confirm build change' , null, { bExplicitDismissalOnly: true } )
							.done( function( confValue ) {
								SetCurrentAppBuild( appid, betakey, buildid, description, nomerge, confValue );
							} );
							}
							else if ( results[ 'require_confirmation' ] == true )
							{
								// show mobile conf dialog + example
								var $DialogContents = $J( '#mobileconf_example' ).clone();
								ShowAlertDialog( 'Confirm setting this build live', $DialogContents.show() ).done( function() {
								//Build information for this branch for the patch note editor
								buildParams = '?submittedbuild=' + buildid;
								if ( betakey !== 'public' )
								{
									buildParams = buildParams + '&buildbranch=' + betakey;

									//TEMP: Right now we don't want any branches other than the main build submitting patch notes,
									//so just clear out the build params for these other branches. To enable other branches
									//to have patch notes, just delete the line below
									buildParams = '';
								}

								window.location.href = 'https://partner.steamgames.com/apps/builds/' + appid + buildParams;
							} );
							}
						}
					else if ( results[ 'eresult' ] == 123 )
						{
							ShowAlertDialog( 'Verified Phone Or Mobile Authenticator Required', 'In order to set this build to the default branch for this released app you must confirm the action with an sms sent to a registered phone number or a confirmation from a mobile authenticator. You may add a phone number to your account <a href="https://store.steampowered.com/phone/manage" target="_blank" rel="noreferrer">here</a>.  We highly reccomend <a href="https://store.steampowered.com/mobile" target="_blank" rel="noreferrer">downloading the Steam mobile app</a> to add an authenticator as well as, or instead of registering a phone number to avoid the need to receive SMS messages which can have delivery problems in some areas.' );
						}
					else if ( results['eresult'] == 15 )
						{
							ShowAlertDialog( 'Recent Security Change', 'Due to a recent change to your accounts security you will be unable to set the default branch on released apps for 72 hours from your last change in phone number, authenticator or email address.  If you made these security changes yourself and need to ship a build urgently, please <a href="https://help.steampowered.com//wizard/HelpWithBuildChanges" target="_blank" rel="noreferrer">contact Steam Support here.</a>' );
						}
					}
				}
			);
		}
	}
}

function OnRemoveMMPartnerAppIdFailure( errortext )
{
	alert( 'error removing app partner'+errortext );
}


