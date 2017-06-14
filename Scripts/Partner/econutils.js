var g_sBaseURL = "";
var g_sEconCategory = "";
var g_sUserSteamID = "";
var g_sUniverse = "";
var oContexts = {};

function InitEconUtils( sBaseURL, sCategory, sUserSteamID, sUniverse )
{
	g_sBaseURL = sBaseURL;
	g_sEconCategory = sCategory;
	g_sUserSteamID = sUserSteamID;
	g_sUniverse = sUniverse;
}

function BIsHistory()
{
	return g_sEconCategory == 'history';
}

function BuildAssetDetailURL( unAppID, sContextID, sAssetID )
{
	return g_sBaseURL + "/economy/assetdetail"
		+ "?appid=" + unAppID
		+ "&assetid=" + sAssetID
		+ "&contextid=" + sContextID;
}


function ArrayHasElement( arr, obj )
{
	for( e in arr )
	{
		if( arr[e] == obj )
			return true;
	}
	return false;
}

function GetRootContextForApp( unAppID )
{
	if( unAppID in oContexts )
	{
		if( 0 in oContexts[ unAppID ] )
		{
			return oContexts[unAppID][0];
		}
	}

	return null;
}


function BIsSupervisorForApp( unAppID )
{
	var oRootContext = GetRootContextForApp( unAppID );
	if( oRootContext )
	{
		return 'supervisor' in oRootContext ? oRootContext.supervisor : false;
	}
	return false;
}


function BIsAdminForApp( unAppID )
{
	var oRootContext = GetRootContextForApp( unAppID );
	if( oRootContext )
	{
		return 'admin' in oRootContext ? oRootContext.admin : false;
	}
	return false;
}


function ShouldOpenContext( rSelectedContexts, oContext )
{
	if( !rSelectedContexts )
		return false;

	for( kContext in rSelectedContexts )
	{
		var oSelection = rSelectedContexts[ kContext ];
		if( oSelection.appid == oContext.appid &&
				( oSelection.contextid == oContext.id || oContext.id == 0 ) )
			return true;
	}

	return false;
}

function RefreshContextData( bRefresh )
{
	if ( bRefresh )
	{
		RefreshContexts();
	}
	UpdateShownContextCookie();
}

function CheckRefreshSettings( sCheckbox )
{
	sRefreshCookie = $.cookie("auto-refresh");
	if (typeof sRefreshCookie === 'undefined' || !sRefreshCookie )
	{
		$.cookie( "auto-refresh", 0 );
	}
	bRefresh = parseInt( $.cookie( "auto-refresh" ) );
	$( '#'+sCheckbox ).prop( 'checked', bRefresh );
}

function SetRefreshSettings( bRefresh )
{
	//console.log( bRefresh );
	if( bRefresh )
	{
		$.cookie( "auto-refresh", 1 );
	}
	else
	{
		$.cookie( "auto-refresh", 0 );
	}
}


function GetEconCookieOptions()
{
	var oCookieOptions =
	{
		'path': BIsHistory() ? "/economy/history" : "/economy/assets"
	};

	
	return oCookieOptions;
}


function UpdateShownContextCookie()
{
	var rShown = []
	for( kApp in oContexts )
	{
		var rAppContexts = oContexts[ kApp ];
		for( kContext in rAppContexts )
		{
			var oContext = rAppContexts[ kContext ];
			if( !oContext.show )
				continue;

			rShown.push({
				'appid' : oContext.appid,
				'contextid' : oContext.id
			})
		}
	}


	$.cookie( "selected_contexts", JSON.stringify( rShown ), GetEconCookieOptions() );
}

g_nLoadingCount = 0;
function IncrementLoadingCount(appid, contextId)
{
	// Run once
	var oHeader = $('#account-header');
	if (oHeader.length)
	{
		$('#loadingDialog')
			.css('top', (oHeader.height() + 50) + 'px');
	};

	// Reassign for subsequent loads
	IncrementLoadingCount = function(appid, contextId)
	{
		$( "#loadingDialog" ).show();
		g_nLoadingCount++;

		$('#loadingDialog_text').text( 'Loading... (' + g_nLoadingCount + ')' );

		if (appid)
		{
			var load_detail_el = $('<li />', {
				'class': 'load-detail',
				text: 'Loading: '+appid+'-'+contextId
			});
			var list = $('#loadingDialog_list');

			list.append(load_detail_el);
			load_detail_el.data('appid', appid);
			load_detail_el.data('contextid', contextId);

			if (list.children().length)
			{
				list.show();
			}
		};

		$('.load-detail').each(function(){
			var target = $(this);
			if (target.data('appid'))
			{
				var appTitle = $('#cs-'+target.data('appid')+'-0').parent().contents()[0].textContent;

				if (target.data('contextid'))
				{
					var contextTitle = $('[for="contextCheckbox'+target.data('appid')+'-'+target.data('contextid')+'"]').text()
				};
			};

			if (appTitle && contextTitle)
			{
				target.text('Loading: '+appTitle+' '+contextTitle);
			}
			else if (appTitle)
			{
				target.text('Loading '+appTitle);
			}
		});

		if (load_detail_el) return load_detail_el;
	};

	// Run main body during run-once segment
	return IncrementLoadingCount(appid, contextId);
}

function DecrementLoadingCount(load_detail_el)
{
	$(load_detail_el).remove();

	g_nLoadingCount--;
	if ( g_nLoadingCount <= 0 )
	{
		g_nLoadingCount = 0;
		$( "#loadingDialog" ).hide();
		return true;
	}
	$('#loadingDialog_text').text( 'Loading... (' + g_nLoadingCount + ')' );
	if ($('#loadingDialog_list').children.length === 0)
	{
		$('#loadingDialog_list').hide();
	}
	return false;
}

function EconDocumentReady()
{
	$( "#loadingDialog" ).hide();

	$( '#contextCommandOptions' ).dialog({
		modal: true,
		autoOpen: false,
		width: 400,
		height: 'auto'
	});

	var sSelectedContexts = $.cookie( "selected_contexts", GetEconCookieOptions() );
	var rSelectedContexts = [];
	if( sSelectedContexts )
		rSelectedContexts = JSON.parse( sSelectedContexts );

	OpenContextList( 0, "", rSelectedContexts );

	AutoExpandItems = new Array();
}


function CheckAutoExpandItems( )
{
	for( var kApp in oContexts )
	{
		for( var kContext in oContexts[ kApp ] )
		{
			if ( kContext == 0 )
			{
				continue;
			}

			if ( ShouldAutoExpandItems( kApp, oContexts[ kApp ][ kContext ].name ) == true )
			{
				var oContext = oContexts[ kApp ][ kContext ];
				oContext.show = true;
				var sCheckboxID = "contextCheckbox" + kApp + '-' + oContext.id;
				var Item = document.getElementById( sCheckboxID );
				Item.checked = true;
			}
		}
	}

	RefreshContextData( false );
}


function ShouldAutoExpandItems( appid, name )
{
	if (typeof AutoExpandItems === 'undefined') return false;

	for( var nIndex = AutoExpandItems.length - 1; nIndex >= 0; nIndex-- )
	{
		if ( AutoExpandItems[ nIndex ].appid == appid && AutoExpandItems[ nIndex ].name == name )
		{
			AutoExpandItems.splice( nIndex, 1 );
			return true;
		}
	}

	return false;
}


function ExpandApp( unAppID )
{
	if ( unAppID in oContexts )
	{
		var NumItems = 0;
		for( kContext in oContexts[ unAppID ] )
		{
			NumItems++;
		}

		if ( NumItems == 1 )
		{
			var elExpandApp = $( "#expandLink" + unAppID );
			if ( elExpandApp.length == 1 )
			{
				elExpandApp.click();
			}
		}
	}
}

// Cache app and context data client side to speed up support tasks. This data
// lasts until the client closes their browser. As this data rarely changes,
// no negative effects should be seen.
//
// oContextData is optional - only defining unAppId is the getter for this
// function.
//
// This function returns false if no data was retrieved from the cache or
// the data could not be set.
function ContextDataCache(unAppID, oContextData)
{
	// Check that localStorage exists before attempting to use it.
	if (typeof localStorage === 'undefined') return false;

	// Clear storage if it's a new session.
	var sSessionCookie = $.cookie('context_data');
	if (typeof sSessionCookie === 'undefined' || !sSessionCookie)
	{
		ClearContextDataCache();
		$.cookie('context_data', true, GetEconCookieOptions());
	};

	if (typeof oContextData === 'undefined')
	{
		var sCachedContextData = localStorage.getItem('ContextData');
		if (sCachedContextData === null)
		{
			return false;
		};

		var oCachedContextData = JSON.parse(sCachedContextData);
		if (typeof oCachedContextData[g_sEconCategory] === 'undefined')
		{
			return false;
		};

		return oCachedContextData[g_sEconCategory][String(unAppID)];
	};

	// We're not caching empty data, this generally implies a failure
	if (oContextData.length === 0) return false;

	var sCachedContextData = localStorage.getItem('ContextData');
	if (sCachedContextData === null)
	{
		var oCachedContextData = {};
	}
	else
	{
		var oCachedContextData = JSON.parse(sCachedContextData);
	};

	if (typeof oCachedContextData[g_sEconCategory] === 'undefined')
	{
		oCachedContextData[g_sEconCategory] = {};
	};

	oCachedContextData[g_sEconCategory][String(unAppID)] = oContextData;

	try{
		var result = localStorage.setItem('ContextData', JSON.stringify(oCachedContextData));
	} catch(e) {
		console.log(e.message);
		ClearContextDataCache();
	}


	return true;
};

// Clear all data if no unAppID is defined, or clear specific app context data
// if unAppID is defined.
function ClearContextDataCache(unAppID)
{
	// Check that localStorage exists before attempting to use it.
	if (typeof localStorage === 'undefined') return false;

	if (typeof unAppID === 'undefined')
	{
		localStorage.removeItem('ContextData');
		return;
	};

	var sCachedContextData = localStorage.getItem('ContextData');
	if (sCachedContextData === null) return; // already doesn't exist

	var oCachedContextData = JSON.parse(sCachedContextData);
	if (typeof oCachedContextData[g_sEconCategory] === 'undefined')
	{
		return;
	};

	delete oCachedContextData[g_sEconCategory][String(unAppID)];
	localStorage.setItem('ContextData', JSON.stringify(oCachedContextData));
};

function OpenContextList( unAppID, sContextID, rSelectedContexts )
{
	var sID = false;
	if ( unAppID == 0 )
	{
		IncrementLoadingCount();
		sID = "contextSelector";
	}
	else
	{
		var loading = IncrementLoadingCount(unAppID, sContextID);
		sID = "cs-" + unAppID + "-" + sContextID;
	}
	var sFullID = "#" + sID;

	var oParams =
	{
		'appid' : unAppID,
		'parent' : sContextID,
		'category' : g_sEconCategory,
		'steamid' : g_sUserSteamID
	};

	var getContext = $.Deferred();
	var cachedContext = ContextDataCache(unAppID);

	if (cachedContext)
	{
		getContext.resolve(cachedContext);
	}
	else
	{
		$.getJSON( g_sBaseURL + "/economy/getcontexts", oParams).done(
			function(contextData){
				getContext.resolve(contextData);
			});

		getContext.done(function(contextData){
			ContextDataCache(unAppID, contextData);
		});
	};

	getContext.done(function(loading){
		return function( data ){

			$( sFullID ).empty().text("");
			if ( sID === "contextSelector" && g_sEconCategory === 'history' )
			{
				var oUncheckLink = $('<a href="#" id="uncheckall">Uncheck All</a>' );
				$( '#contextSelectorLinks' ).append( oUncheckLink );
				oUncheckLink.bind( "click", { link : oUncheckLink, context: null },
					function( event )
					{
						for( kApp in oContexts )
						{
							for( kContext in oContexts[kApp] )
							{
								var oContext = oContexts[ kApp ][ kContext ];
								if( oContext.show )
								{
									oContext.show = false;
								}
							}
						}

						var Items = $( "[id^=contextCheckbox]" );
						for ( var i = 0; i < Items.length; i++ )
						{
							if ( Items[ i ].checked == true )
							{
								Items[ i ].checked = false;
							}
						}

						ReloadTransactionTableFromCache();
					});

				var oTradebacksLink = $('<a href="#">Tradebacks</a>' );
				$( '#contextSelectorLinks' ).append( "&nbsp; | &nbsp;" );
				$( '#contextSelectorLinks' ).append( oTradebacksLink );
				oTradebacksLink.bind( "click", { link : oTradebacksLink, context: null },
					function( event )
					{
						$( "#uncheckall" ).click();

						AutoExpandItems = new Array();
						AutoExpandItems.push( { appid: 440, name: "Backpack" } );
						AutoExpandItems.push( { appid: 440, name: "Trades" } );
						AutoExpandItems.push( { appid: 570, name: "Backpack" } );
						AutoExpandItems.push( { appid: 753, name: "Gifts" } );
						AutoExpandItems.push( { appid: 754, name: "Trades" } );

						ExpandApp( 440 );
						ExpandApp( 570 );
						ExpandApp( 753 );
						ExpandApp( 754 );

						CheckAutoExpandItems();
					});

				var oAccountHistoryLink = $('<a href="#">Account History</a>' );
				$( '#contextSelectorLinks' ).append( "&nbsp; | &nbsp;" );
				$( '#contextSelectorLinks' ).append( oAccountHistoryLink );
				oAccountHistoryLink.bind( "click", { link : oAccountHistoryLink, context: null },
					function( event )
					{
						$( "#uncheckall" ).click();

						AutoExpandItems = new Array();
						AutoExpandItems.push( { appid: 753, name: "HWID" } );
						AutoExpandItems.push( { appid: 753, name: "Session Login ( all )" } );
						AutoExpandItems.push( { appid: 753, name: "Session Login Password only" } );
						AutoExpandItems.push( { appid: 753, name: "Failed Login ( bad password )" } );
						AutoExpandItems.push( { appid: 753, name: "Password Reset" } );
						AutoExpandItems.push( { appid: 753, name: "Password Change" } );
						AutoExpandItems.push( { appid: 753, name: "Email Change" } );

						ExpandApp( 753 );

						CheckAutoExpandItems();
					});

				var oItemsDefaultLink = $('<a href="#">Items Default</a>' );
				$( '#contextSelectorLinks' ).append( "&nbsp; | &nbsp;" );
				$( '#contextSelectorLinks' ).append( oItemsDefaultLink );
				oItemsDefaultLink.bind( "click", { link : oItemsDefaultLink, context: null },
					function( event )
					{
						$( "#uncheckall" ).click();

						AutoExpandItems = new Array();
						AutoExpandItems.push( { appid: 440, name: "Backpack" } );
						AutoExpandItems.push( { appid: 570, name: "Backpack" } );
						AutoExpandItems.push( { appid: 753, name: "HWID" } );
						AutoExpandItems.push( { appid: 753, name: "Gifts" } );
						AutoExpandItems.push( { appid: 753, name: "Wallet" } );
						AutoExpandItems.push( { appid: 753, name: "Community" } );
						AutoExpandItems.push( { appid: 753, name: "Session Login (all)" } );
						AutoExpandItems.push( { appid: 754, name: "Trades" } );
						AutoExpandItems.push( { appid: 754, name: "Market" } );
						AutoExpandItems.push( { appid: 754, name: "Trade Offers" } );
						AutoExpandItems.push( { appid: 730, name: "Backpack" } );


						ExpandApp( 440 );
						ExpandApp( 570 );
						ExpandApp( 753 );
						ExpandApp( 754 );
						ExpandApp( 730 );

						CheckAutoExpandItems();
					});

				var oTF2DefaultLink = $( '<a href="#">TF2 Default</a>' );
				$( '#contextSelectorLinks' ).append( "&nbsp; | &nbsp;" );
				$( '#contextSelectorLinks' ).append( oTF2DefaultLink );
				oTF2DefaultLink.bind( "click", { link : oTF2DefaultLink, context: null },
					function( event )
					{
						$( "#uncheckall" ).click();

						AutoExpandItems = new Array();
						AutoExpandItems.push( { appid: 440, name: "Backpack" } );
						AutoExpandItems.push( { appid: 753, name: "HWID" } );
						AutoExpandItems.push( { appid: 754, name: "Trades" } );

						ExpandApp( 440 );
						ExpandApp( 753 );
						ExpandApp( 754 );

						CheckAutoExpandItems();
					});

				var oDotaDefaultLink = $( '<a href="#">Dota 2 Default</a> ');
				$( '#contextSelectorLinks' ).append( "&nbsp; | &nbsp;" );
				$( '#contextSelectorLinks' ).append( oDotaDefaultLink );
				oDotaDefaultLink.bind( "click", { link: oDotaDefaultLink, context: null },
					function( event )
					{
						$( "#uncheckall" ).click();

						AutoExpandItems = new Array();
						AutoExpandItems.push( { appid: 570, name: "Backpack" } );
						AutoExpandItems.push( { appid: 753, name: "HWID" } );
						AutoExpandItems.push( { appid: 754, name: "Trades" } );

						ExpandApp( 570 );
						ExpandApp( 753 );
						ExpandApp( 754 );

						CheckAutoExpandItems();
					});

				var oCsgoDefaultLink = $( '<a href="#">CS:GO Default</a> ');
				$( '#contextSelectorLinks' ).append( "&nbsp; | &nbsp;" );
				$( '#contextSelectorLinks' ).append( oCsgoDefaultLink );
				oCsgoDefaultLink.bind( "click", { link: oCsgoDefaultLink, context: null },
					function( event )
					{
						$( "#uncheckall" ).click();

						AutoExpandItems = new Array();
						AutoExpandItems.push( { appid: 730, name: "Backpack" } );
						AutoExpandItems.push( { appid: 730, name: "Competitive Infractions" } );
						AutoExpandItems.push( { appid: 730, name: "Competitive Full State" } );
						AutoExpandItems.push( { appid: 753, name: "HWID" } );
						AutoExpandItems.push( { appid: 754, name: "Trades" } );

						ExpandApp( 730 );
						ExpandApp( 753 );
						ExpandApp( 754 );

						CheckAutoExpandItems();
					});

				var oMarketplaceLink = $( '<a href="#">Community Market</a> ');
				$( '#contextSelectorLinks' ).append( "&nbsp; | &nbsp;" );
				$( '#contextSelectorLinks' ).append( oMarketplaceLink );
				oMarketplaceLink.bind( "click", { link: oMarketplaceLink, context: null },
					function( event )
					{
						$( "#uncheckall" ).click();

						AutoExpandItems = new Array();
						AutoExpandItems.push( { appid: 440, name: "Backpack" } );
						AutoExpandItems.push( { appid: 570, name: "Backpack" } );
						AutoExpandItems.push( { appid: 753, name: "Wallet" } );
						AutoExpandItems.push( { appid: 754, name: "Market" } );

						ExpandApp( 440 );
						ExpandApp( 570 );
						ExpandApp( 753 );
						ExpandApp( 754 );

						CheckAutoExpandItems();
					});

				var oManualRollbackLink = $( '<a href="#">Manual Rollback</a>' );
				$('#contextSelectorLinks' ).append( "&nbsp; | &nbsp;" );
				$('#contextSelectorLinks' ).append( oManualRollbackLink );
				oManualRollbackLink.bind( "click", { link: oManualRollbackLink, context: null },
					function( event )
					{
					   $( "#uncheckall").click();

						AutoExpandItems.push( { appid: 753, name: "HWID" } );
						AutoExpandItems.push( { appid: 753, name: "Gifts" } );
						AutoExpandItems.push( { appid: 753, name: "Community" } );
						AutoExpandItems.push( { appid: 753, name: "Session Login (all)" } );
						AutoExpandItems.push( { appid: 754, name: "Trades" } );
						AutoExpandItems.push( { appid: 754, name: "Market" } );
						AutoExpandItems.push( { appid: 754, name: "Trade Offers" } );

						ExpandApp( 753 );
						ExpandApp( 754 );

						CheckAutoExpandItems();
					});

				var oDotaPurchasesLink = $( '<a href="#">Dota Purchases</a>' );
				$('#contextSelectorLinks' ).append( "&nbsp; | &nbsp;" );
				$('#contextSelectorLinks' ).append( oDotaPurchasesLink );
				oDotaPurchasesLink.bind( "click", { link: oDotaPurchasesLink, context: null },
				function( event )
				{
					$( "#uncheckall").click();

					AutoExpandItems.push( { appid: 570, name: "Purchases" } );


					ExpandApp( 570 );

					CheckAutoExpandItems();
				});
			}

			var rContextsToOpen = [];

			//perform a quick sort to filter out valve games and put them to the top
			var aContexts = Array();
			for( kContext in data )
			{
				var oContext = data[kContext];
				var rgValveIDs = [730,440,570,753,754];
				if ( 'appid' in oContext )
				{
					if ( rgValveIDs.indexOf( oContext.appid ) !== -1 )
					{
						oContext.valve = 1;
						aContexts.push( oContext );
						delete data[kContext];
					}
				}
			}

			aContexts = aContexts.concat(data);

			for ( kContext in aContexts )
			{
				var oNewContext = aContexts[ kContext ];
				if ( BIsHistory() )
				{
					oNewContext.transactions = [];
				}

				if( !('appid' in oNewContext ) )
					oNewContext.appid = unAppID;

				if ( !( oNewContext.appid in oContexts ) )
				{
					oContexts[ oNewContext.appid ] = {};
				}
				oContexts[oNewContext.appid][oNewContext.id] = oNewContext;


				var bShouldOpen = ShouldOpenContext( rSelectedContexts, oNewContext );
				if( bShouldOpen )
				{
					rContextsToOpen.push( oNewContext );
				}

				// add a new child for this context
				var oNewContextNode = $( '<li/>',  {
					class : oNewContext.valve ? "valveapp" : "contextapp"
				});

				$( sFullID ).append( oNewContextNode );

				// if there are (or could be) children, add a checkbox
				if ( oNewContext.asset_count >= 0 )
				{
					var sCheckboxID = "contextCheckbox" + oNewContext.appid + '-' + oNewContext.id;
					var bAutoOpen = ShouldAutoExpandItems( oNewContext.appid, oNewContext.name );
					if ( bAutoOpen && !bShouldOpen )
					{
						bShouldOpen = true;
						rContextsToOpen.push( oNewContext );
					}

					oNewContext.checkboxID = sCheckboxID;
					var oCheckbox = $( '<input type="checkbox" id="' + sCheckboxID + '" />' );
					oCheckbox[0].checked = bShouldOpen;
					oNewContext.show = bShouldOpen;
					oCheckbox.bind( 'click', { 'context' : oNewContext }, function( event ) { event.data.context.show = event.target.checked; RefreshContextData( false );} );
					oNewContextNode.append( oCheckbox );

					var sLabelID = "label" + oNewContext.appid + '-' + oNewContext.name;
					oNewContextNode.append( '<label for="' + sCheckboxID + '" id="' + sLabelID + '">' + oNewContext.name + '</label>');

					if( !BIsHistory() )
					{
						oNewContextNode.append( ' - ' );

						var oRefreshData = $('<a href="javascript:void(0);">Refresh</a>' );
						oRefreshData.bind( 'click', { 'context' : oNewContext }, function( event ) { RefreshContext( event.data.context ); return false; } );
						oNewContextNode.append( oRefreshData );
					}
				}
				else
				{
					oNewContextNode.append( oNewContext.name );
				}

				// private contexts should be marked as such
				if( 'private' in oNewContext && oNewContext.private )
				{
					oNewContextNode.append( "<b>(Private)</b>")
				}

				if ( oNewContext.nested > 0 )
				{

					var oReloadLink = $('<img />', {
						id: 'reload-'+oNewContext.appid,
						alt: 'Reload',
						title: 'Reload',
						src: 'https://partner.steamgames.com/public/images/reload.png',
						style: 'position: relative; top: 3px; cursor: pointer;'
					});
					oNewContextNode.append('&nbsp;');
					oNewContextNode.append(oReloadLink);
					oReloadLink.hide();
					oReloadLink.click({
							context: oNewContext
						},
						function(event){
							ClearContextDataCache(event.data.context.appid);
							UnWarnGCMalfunction(event.data.context.appid);
							location.reload();
						});

					// make the expando-link (if we aren't going to open this link automatically)
					if( !bShouldOpen )
					{
						var sExpandID = "expandLink" + oNewContext.appid;
						var oExpandLink = $('<a href="javascript:void(0);" id="' + sExpandID + '">Expand</a>' );
						oNewContextNode.append( "&nbsp;" );
						oNewContextNode.append( oExpandLink );
						oExpandLink.bind( "click", { link : oExpandLink, context: oNewContext },
							function( event )
							{
								event.data.link.hide();
								$('#reload-'+event.data.context.appid).show();
								OpenContextList( event.data.context.appid, event.data.context.id );
							});
					}
					else
					{
						oReloadLink.show();
					}

					// make a new child list and add it to the parent
					var oList = $('<ul/>');
					oList.attr({id : "cs-" + oNewContext.appid + "-" + oNewContext.id });
					oNewContextNode.append( oList );
				}

				if( 'commands' in oNewContext )
				{
					var rCommands = oNewContext[ 'commands' ];
					for( kCommand in rCommands )
					{
						var oCommand = rCommands[kCommand];

						oCommand.appid = unAppID;
						oCommand.contextid = oNewContext.id;

						if( oCommand.asset_command )
							continue;

						var oCommandLink = $( '<a href="javascript:void(0);">' + oCommand.name + '</a>' );
						oNewContextNode.append( ' : ' );
						oNewContextNode.append( oCommandLink );

						oCommandLink.bind( 'click', oCommand, function( event ) { StartContextCommand( event.data ); return false; } );
					}

				}
			}

			// open all the contexts on our to-open context
			for( kContext in rContextsToOpen )
			{
				var oContext = rContextsToOpen[ kContext ];

				// expand first
				if( oContext.nested > 0 )
				{
					OpenContextList( oContext.appid, oContext.id, rSelectedContexts );
				}
			}

			if( DecrementLoadingCount(loading) )
			{
				RefreshContextData( true );
			}
		}; // end resolution function
	}(loading));

}

function FilterTypes( oTable, oFilter, oCount )
{
	var rFilter = $(oFilter).val().toLowerCase().split( ' ' );
	var nTypes = 0;
	$( oTable ).find( 'tr' ).each( function(){
		var sThisData = $(this).attr( 'data' );
		var bAllPresent = true;
		for( kFilter in rFilter )
		{
			if( -1 == sThisData.indexOf( rFilter[kFilter] ) )
			{
				bAllPresent = false;
				break;
			}
		}
		var bShow = false;
		if( bAllPresent )
		{
			nTypes++;
			if( nTypes <= 15 )
			{
				bShow = true;
			}
		}

		if( bShow )
			$(this).show();
		else
		{
			$(this).hide();

			// make sure the hidden thing isn't checked
			$(this).find( "input" ).attr( "checked", false );
		}
	});

	if( nTypes <= 15 )
	{
		$(oCount).text( '' );
	}
	else
	{
		$(oCount).text( '15 shown of ' + nTypes );
	}
}


function StartContextCommand( oCommand, oAsset )
{
	// get the context command form
	$('#contextCommandOptionsForm input[name=appid]' ).val( oCommand.appid );
	$('#contextCommandOptionsForm input[name=contextid]' ).val( oCommand.contextid );
	$('#contextCommandOptionsForm input[name=command]' ).val( oCommand.name );
	$('#contextCommandOptionsForm input[name=url]' ).val( '/economy/assets/' + g_sUserSteamID );

	if( 'record_note' in oCommand && oCommand.record_note == 0 )
	{
		$('#confirmNoteBlock').hide();
	}
	else
	{
		$('#confirmNoteBlock').show();
	}

	// clear all the extra params from last time
	$( "#contextCommandExtraOptions" ).empty();

	// maybe set the asset ID
	if( oAsset )
	{
		$( '#contextCommandExtraOptions' ).append( '<input type="hidden" name="arg_assetid" value="' + oAsset.id + '"></input>' )
			.append( oAsset.fullname + '<br/>' );
	}

	$( '#contextCommandConfirm' ).unbind();
	$( '#contextCommandConfirm' ).bind( "click", oCommand, function (event) { CompleteContextCommand( event.data ); } );

	$( '#contextCommandDescription' ).text( 'description' in oCommand ? oCommand.description : "" );

	// we create the dialog THEN add the options, to prevent some Jquery code that does a bunch of sorting
	// to try and find what the first tabbable element is for focus
	$( '#contextCommandOptions' ).dialog( "option", "title", oCommand.name );
	$( '#contextCommandOptions' ).dialog( "open" );


	// add our new extra options
	if( 'options' in oCommand )
	{
		for( kOption in oCommand.options )
		{
			var oOption = oCommand.options[ kOption ];
			var sName = 'arg_' + oOption.name;

			if( 'supervisor_only' in oOption && oOption.supervisor_only && !BIsSupervisorForApp( oCommand.appid ) )
				continue;
			if( 'admin_only' in oOption && oOption.admin_only && !BIsAdminForApp( oCommand.appid ) )
				continue;

			if( oOption.type == "checkbox" )
			{
				var bChecked = 'default' in oOption ? oOption[ 'default' ] != 0 : false;
				$( "#contextCommandExtraOptions" ).append( '<input type="checkbox" name="' + sName + '" value="1" ' + ( bChecked ? "checked" : "" ) + '" id="' + sName + '" /> ' );
				$( "#contextCommandExtraOptions" ).append( '<label for="' + sName + '" >' + oOption.name + '</label><br/>' );
			}
			else if( oOption.type == "dropdown" )
			{
				var oSelect = $('<select name="' + sName + '" />');

				$( "#contextCommandExtraOptions" ).append( oOption.name + ': ' )
						.append( oSelect )
						.append( '<br/>' );

				for( kValue in oOption.values )
				{
					var oValue = oOption.values[kValue];
					oSelect.append( '<option value="' + oValue.value + '"' + (oValue.name == oOption[ 'default' ] ? ' selected="selected" ' : '' ) + '>' + oValue.name + '</option>' );
				}
			}
			else if( oOption.type == "numeric" || oOption.type == "string" )
			{
				var oInput = $('<input name="' + sName + '" type="text"  />');

				if( 'default' in oOption )
				{
					oInput.attr( "value", oOption[ 'default' ] );
				}

				if( oOption.type == "numeric" )
				{
					oInput.numeric();
				}

				$( "#contextCommandExtraOptions" ).append( oOption.name + ': ' )
						.append( oInput )
						.append( '<br/>' );

			}
			else if( oOption.type == "type_picker" )
			{
				var oFilter = $('<input type="text"/>');
				var oFilterCount = $('<span/>');
				oFilter.attr( 'id', sName + '_filter' );
				$( '#contextCommandExtraOptions' ).append( oOption.name + ': Filter:')
					.append( oFilter ).append( oFilterCount );

				var oTable = $( '<table />');
				oTable.attr( 'id', sName + '_table' );
				oFilter.bind( 'keyup', { table: oTable[0], count: oFilterCount[0] }, function ( event )
						{
					FilterTypes( event.data.table, this, event.data.count );
					} );
				$( '#contextCommandExtraOptions' ).append( oTable );
				for( kTypeOption in oOption.types )
				{
					var oType = oOption.types[ kTypeOption ];
					var oRow = $('<tr/>');
					oTable.append( oRow );
					var sTypeID = sName + '_' + oType.value;
					var sFilterData = oType.name + ' ';

					oRow.append( '<td><input name="' + sName + '" type="radio" id="' + sTypeID + '" value="' + oType.value + '" /> </td>' );

					if( 'icon_url' in oType )
					{
						oRow.append( '<td><img src="' + oType.icon_url + '" height="36" width="36" /></td>' );
					}

					var oDesc = $( '<label for="' + sTypeID + '" />' );
					oRow.append( oDesc );
					oDesc.wrap( '<td/>' );
					oDesc.append( oType.name + '<br/>' );
					if( oType.tags )
					{
						oDesc.append( oType.tags.join( '<br/>' ) );
						sFilterData += oType.tags.join( ' ' );
					}

					oRow.attr( "data", sFilterData.toLowerCase() );
				}

				// filter the first time
				FilterTypes( oTable[0], oFilter[0], oFilterCount[0] );
			}
		}
	}

	// reposition the dialog now that we added stuff to it
	$( '#contextCommandOptions' ).dialog( "option", "position", $('#contextCommandOptions').dialog( 'option', 'position' ) );
}


function CompleteContextCommand( oCommand )
{
	var bRequireNote = !( 'record_note' in oCommand && oCommand.record_note == 0 );
	if( bRequireNote && $('#contextCommandNote').val() == "" )
	{
		alert( "Please enter a note for the activity history" );
		return false;
	}

	var data = $( '#contextCommandOptionsForm' ).serialize();
	$.post( g_sBaseURL + "/economy/contextcommand", data, function(json)
			{
				if( json['success'] != 1 )
				{
					alert( oCommand.name + " failed: "+ json['error'] );
				}
				else
				{
					if( $( '#dismiss_command_dialog' ).is(':checked') )
					{
						$( '#contextCommandOptions' ).dialog( "close" );
					}
					RefreshContextData( true );
				}
			}, "json");
}

function v_trim( str )
{
	if ( str.trim )
		return str.trim();
	else
	{
		return str.replace(/^\s+/, '').replace(/\s+$/, '');
	}
}


function ImageURL( imageName, x, y )
{
	if( imageName.substr( 0, 4 ).toLowerCase() == "http" )
		return imageName;

	if ( imageName )
	{
		x = x ? x : 0;
		y = y ? y : 0;
		var strSize = '';
		if ( x != 0 || y != 0 )
			strSize = '/' + x + 'x' + y;
		return 'https://steamcommunity-a.akamaihd.net/economy/image/' + v_trim(imageName) + strSize;
	}
	else
		return 'https://partner.steamgames.com/public/images/trans.gif';
}


// --------------------------------------------------------------
// Purpose: Computes the HTML to show an asset
// --------------------------------------------------------------
function GetAssetDescriptionString( unAppID, ulContextID, oAsset, bDetails )
{
	var sAssetName = oAsset["fullname"];

	var sAssetInfo = "";

	if( ('icon_url' in oAsset) && oAsset['icon_url'] != "" )
	{
		sAssetInfo += '<img src="' + ImageURL( oAsset['icon_url'], 64, 64 ) + '" style="float: left" />';
	}
	if( 'name_color' in oAsset )
	{
		sAssetInfo += '<span style="color: #' + oAsset.name_color + '">' + sAssetName + '</span>';
	}
	else
	{
		sAssetInfo += sAssetName;
	}

	// add a link to the details page if appropriate
	if( bDetails )
	{
		var sDetailURL = "https://partner.steamgames.com/economy/assetdetail"
			+ "?appid=" + unAppID
			+ "&assetid=" + oAsset.id
			+ "&contextid=" + ulContextID;
		sAssetInfo += '<br><a href="' + sDetailURL + '" target="_blank"><em>Details</em></a>';

		// check for asset commands
		var oContext = oContexts[ unAppID ][ ulContextID ];
		if( 'commands' in oContext )
		{
			for( kCommand in oContext.commands )
			{
				var oCommand = oContext.commands[ kCommand ];
				if( !oCommand.asset_command )
					continue;

				sAssetInfo += '<br/><a href="#" onclick="RunAssetCommand(' + unAppID + ',\'' + ulContextID +'\', \'' + oAsset.id + '\', \'' + oCommand.name + '\'); return false;">' + oCommand.name + '</a><br/>';
			}
		}
	}

	if( oAsset.type )
	{
		sAssetInfo += '<br/>' + oAsset.type;
	}

	var aDescriptions = oAsset.descriptions;
	if( aDescriptions && aDescriptions != "" )
	{
		for( kDesc in aDescriptions )
		{
			var oDesc = aDescriptions[kDesc];
			var sPrefix = "";
			var sSuffix = "";
			if( oDesc.hasOwnProperty( "color" ) )
			{
				sPrefix = '<span style="color: #' + oDesc["color"] + '">';
				sSuffix = '</span>';
			}

			var sDescription = ( oDesc["value"] || "" ).replace(/\[date\](\d*)\[\/date\]/g, function( match, p1 ) {
				var date = new Date( p1 * 1000 );
				return date.toLocaleString();
			});

			sAssetInfo += '<br/>' + sPrefix + sDescription + sSuffix;
		}
	}

	return sAssetInfo;
}


// --------------------------------------------------------------
// Purpose: Computes the HTML to show currency
// --------------------------------------------------------------
function GetCurrencyDescriptionString( unAppID, ulContextID, oCurrency )
{
	var sCurrencyName = oCurrency['fullname'];

	var sCurrencyInfo = '';

	if( ('icon_url' in oCurrency) && oCurrency['icon_url'] != '' )
	{
		sCurrencyInfo += '<img src="' + ImageURL( oCurrency['icon_url'], 64, 64 ) + '" style="float: left" />';
	}
	if( 'name_color' in oCurrency )
	{
		sCurrencyInfo += '<span style="color: #' + oCurrency.name_color + '">' + sCurrencyName + '</span>';
	}
	else
	{
		sCurrencyInfo += sCurrencyName;
	}

	sCurrencyInfo += '<br>Count: ' + oCurrency.amount;


	return sCurrencyInfo;
}


// --------------------------------------------------------------
// Purpose: Constructs a link to somebody's history page or activity page depending whether they are using the support site or partner site
// --------------------------------------------------------------
function GetOwnerLink( steamID, name )
{
	if( steamID == 0 )
	{
		return "None";
	}
	else
	{
		return '<a href="https://partner.steamgames.com/economy/history/' + steamID + '" target="_Account_' + steamID + '">' + name + '</a>';
	}
}


// --------------------------------------------------------------
// Purpose: Constructs a link to somebody's history page
// --------------------------------------------------------------
function GetHWIDLink( hwid )
{
	if( hwid == 0 )
	{
		return "None";
	}
	else
	{
		return '<a href="https://partner.steamgames.com/hwid_usage.php?hwid=' + hwid + '&amp;whichaccounts=AllOfThem">' + hwid + '</a>';
	}
}


// --------------------------------------------------------------
// Purpose: Fills out the history tables for an asset details display
// --------------------------------------------------------------
function PopulateAssetHistory( parentNode, history, appid, contextid )
{
	if( !history )
		return;


	var oTable = $( '<table>' );
	oTable.append( [ '<thead>',
			'<tr>',
				'<th>Time</th>',
				'<th>ID</th>',
				'<th>Owner</th>',
				'<th>Action</th>',
				'<th>Note</th>',
			'</tr>',
		'</thead>'].join('') );
	var oBody = $( '<tbody>' );

	var aSteamIDs = {}; //create object with steamids for lock status

	var bIsHistoryTool = typeof g_aSteamIDs != 'undefined';


	for( kRecord in history )
	{
		var oHistory = history[ kRecord ];

		var d = new Date( oHistory.timestamp * 1000 );

		var sOwner = oHistory.owner; // use owner unless we have an account name

		aSteamIDs[oHistory.ownerid] = oHistory.ownerid; //push array with each steamid

		if ( bIsHistoryTool )
		{
			g_aSteamIDs[oHistory.ownerid] = oHistory.ownerid;
		}
		else
		{
			aSteamIDs[oHistory.ownerid] = oHistory.ownerid; //push array with each steamid
		}



		if( oHistory.ownerid )
		{
			sOwner = GetOwnerLink( oHistory.ownerid, oHistory.owner_accountname ) + ' <span class="status' + oHistory.ownerid + '"></span>';
		}

		var sID = oHistory.id;
		if ( sID == undefined || sID == 0 )
		{
			sID = '?';
		}
		else if ( appid )
		{
			sID = '<a href="https://partner.steamgames.com' + BuildAssetDetailURL( appid, contextid, sID ) + '">' + sID + '</a>';
		}

		var sAction = oHistory.action;
		if( oHistory.data )
		{
			sAction += ": " + oHistory.data;
		}
		if( oHistory.steamid )
		{
			sAction += " (" + GetOwnerLink( oHistory.steamid, oHistory.steamid_accountname ) + ")";
		}

		var oTR = $( '<tr>' );
		oTR.append( '<td>' + d.format( 'Y/m/d H:i:s' ) + '</td>' )
				.append( '<td>' + sID + '</td>' )
				.append( '<td>' + sOwner + '</td>' )
				.append( '<td>' + sAction + '</td>' );

		var sNote = "";
		if ( oHistory.shared_hwid )
		{
			sNote = 'Shared HWID ' + GetHWIDLink( oHistory.shared_hwid ) + ' with ' + GetOwnerLink( oHistory.shared_hwid_steamid, oHistory.shared_hwid_steamid_accountname ) + '<br/>';
		}

		if ( oHistory.shared_ip )
		{
			sNote += 'Shared IP <a href="https://partner.steamgames.com/search/ip/?search=' + oHistory.shared_ip + '">' + oHistory.shared_ip + '</a>' + ' with ' + GetOwnerLink( oHistory.shared_ip_steamid, oHistory.shared_ip_steamid_accountname ) + '<br/>';
		}

		oTR.append( '<td style="white-space: nowrap">' + sNote + '</td>' );

		oBody.append( oTR );
	}



	oTable.append( oBody );
	parentNode.append( '<br clear="all">' ).append( oTable );

	if ( bIsHistoryTool )
	{
		LookupAccountState();
	}
	else
	{

		if( typeof LoadAccountState === 'function' )
		{
			var sURL = "https://partner.steamgames.com/account/getaccountstate";
			var postArgs = aSteamIDs;
			LoadAccountState( sURL, postArgs, true );
		}

	}

}


// --------------------------------------------------------------
// Purpose: Return style information for the asset's containing
//			div.
// --------------------------------------------------------------
function GetAssetStyle( oAsset )
{
	var sExtraStyle = "";
	if( 'background_color' in oAsset )
	{
		sExtraStyle += "; background-color: #" + oAsset.background_color;
	}
	if( 'name_color' in oAsset )
	{
		sExtraStyle += "; border-color: #" + oAsset.name_color;
	}
	return sExtraStyle;
}

function MergeInventoryWithDescriptionsForSupportPage( rgInventory, rgCurrency, rgDescriptions )
{
	var rgMergedInventory = null;
	var rgMergedCurrency = null;
	rgDescriptions = ReindexAssetDescriptions( rgDescriptions )

	if ( rgInventory )
	{
		rgMergedInventory = {};
		for ( var itemid in rgInventory )
		{
			var rgItem = rgInventory[itemid];
			if ( rgItem )
			{
				rgMergedInventory[itemid] = $.extend( {}, rgItem, rgDescriptions[rgItem.classid + '_' + rgItem.instanceid] );

				// each item needs its own tags
				if ( rgItem.tags )
				{
					rgMergedInventory[itemid].tags = $.extend( {}, rgMergedInventory[itemid].tags );
				}
			}
		}
	}

	if ( rgCurrency )
	{
		rgMergedCurrency = {};
		for ( var itemid in rgCurrency )
		{
			var rgItem = rgCurrency[itemid];
			if ( rgItem )
			{
				rgMergedCurrency[itemid] = $.extend( {}, rgItem, rgDescriptions[rgItem.classid + '_' + 0] );

				// each item needs its own tags
				if ( rgItem.tags )
				{
					rgMergedCurrency[itemid].tags = $.extend( {}, rgMergedCurrency[itemid].tags );
				}
			}
		}
	}

	return { inventory: rgMergedInventory, currency: rgMergedCurrency };
}

function ReindexAssetDescriptions( rgDescriptions )
{
	var ret = [];
	for ( var id in rgDescriptions )
	{
		var description = rgDescriptions[id];
		var instanceId = typeof(description.instanceid) == 'undefined' ? 0 : description.instanceid;
		ret[description.classid + '_' + instanceId] = description;
	}

	return ret;
}


function WarnGCMalfunction(unAppID)
{
	if ($('#GCWarn-'+unAppID).length > 0) return;

	$('#cs-'+unAppID+'-0').before($('<span />', {
		id: 'GCWarn-'+unAppID,
		text: ' Warning: some data could not be loaded from this app.',
		style: 'color: red; font-weight: bold;'
	}));
};

function UnWarnGCMalfunction(unAppID)
{
	$('#GCWarn-'+unAppID).remove();
};

