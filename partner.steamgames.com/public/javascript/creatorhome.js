//<script>
"use strict";

class CreatorHomeBatchUpdater
{
	constructor( creatorHome, withSettings, bRemove = false, bUpdate = false )
	{
				this.m_bRemove = bRemove;
		this.m_bUpdate = bUpdate;
		this.m_withSettings = withSettings;

		this.m_batchSize = 50;
		this.m_createrHome = creatorHome;
		
				this.m_processedCount = 0;
		this.m_totalCount = 0;
		this.m_cSuccessCount = 0;
		this.m_strFirstErrMsg = null;
		this.m_modalDialog = null;
	}

		GetAppCountInDevLinks( devLinks )
	{
		var count = 0;
		for( var i = 0; i < devLinks.length; ++i )
		{
			count += devLinks[i].appIDs.length;
		}
		return count;
	}


		ProcessEditRequest( start, end, bDoRemoveNow, bDoUpdateNow )
	{
		var devLinks = this.ExtractDevLinksToChange( bDoUpdateNow, start, end );
		if( devLinks === undefined || devLinks.length == 0 )
			return;

		var someAppID = devLinks[0].appIDs[0];
		var _CreatorHomeBatchUpdater = this;

		$J.ajax({
				type: "POST",
				url: 'https://partner.steamgames.com/creatorhome/ajaxsavelinks',
				data: {
					'sessionid' : g_sessionID,
					'devpagelinks' : devLinks,
					'appid': someAppID, 					'bremove': bDoRemoveNow,
					'timeout': 5000,
					'flush_app' : !bDoUpdateNow,
				},
				dataType: 'json',

		}).done( function( data ) {
			if( !data.success && !_CreatorHomeBatchUpdater.m_strFirstErrMsg )
			{
				_CreatorHomeBatchUpdater.m_strFirstErrMsg = data.eresult;
			}
			
			if( bDoUpdateNow ) 			{
				_CreatorHomeBatchUpdater.ProcessEditRequest( start, end, false, false );
			}
			else
			{
				if( !isNaN( data.cSuccess )) {
					_CreatorHomeBatchUpdater.m_cSuccessCount += data.cSuccess;
				}
				_CreatorHomeBatchUpdater.Recurse();
			}
		} ).fail( function( data ) {
			if( !_CreatorHomeBatchUpdater.m_strFirstErrMsg )
			{
				_CreatorHomeBatchUpdater.m_strFirstErrMsg = data.eresult;
			}
			
			if( bDoUpdateNow ) 			{
				_CreatorHomeBatchUpdater.ProcessEditRequest( start, end, false, false );
			}
			else
			{
				if( !isNaN( data.cSuccess )) {
					_CreatorHomeBatchUpdater.m_cSuccessCount += data.cSuccess;
				}
				_CreatorHomeBatchUpdater.Recurse();
			}
		});
	}

	Recurse( )
	{
		var template = "Completed the %1$s of %2$s";
		if( this.m_processedCount < this.m_totalCount )
		{
			$J( '#update_dialog_increment' ).text( template.replace( '%1$s', this.m_processedCount ).replace( '%2$s', this.m_totalCount ) );
			var start = this.m_processedCount;
			var end =  this.m_processedCount + this.m_batchSize;
			this.m_processedCount += this.m_batchSize;
			
			this.ProcessEditRequest( start, end, this.m_bRemove, this.m_bUpdate );
		}
		else 		{
			$J( '#update_dialog_increment' ).text( template.replace( '%1$s', this.m_cSuccessCount ).replace( '%2$s', this.m_totalCount ) );
			$J( '#updating_dialog_throbber').hide();
			$J( '#update_dialog_done').show();

						if( this.m_strFirstErrMsg )
			{
				$J('#update_dialog_error_msg').text( this.m_strFirstErrMsg );
				$J('#update_dialog_error').show();
			}

			this.m_modalDialog.SetDismissOnBackgroundClick( true );
		}
	}

		escapeHtml(text)
	{
		var map = {
			'&': '&amp;',
			'<': '&lt;',
			'>': '&gt;',
		};

		return text.replace(/[&<>]/g, function(m) { return map[m]; });
	}

		ExtractDevLinksToChange( bDoUpdateNow, from = 0, to = Number.MAX_VALUE )
	{
		var devLinks = [];
		var count = 0; 		var _CreatorHomeBatchUpdater = this;

		this.m_withSettings.each( function() {
						if( count >= to)
				return;

			var uniqueName = _CreatorHomeBatchUpdater.escapeHtml( $J( this )[0].hasAttribute('uniquename') ?
				$J( this ).attr( 'uniquename' ) : $J( this ).parent().attr( 'uniquename' ) );
			var clanSteamID = $J( this ).val();
			var appids = [];
			var appIDsToCopy = [];
			if( uniqueName in _CreatorHomeBatchUpdater.m_createrHome.m_unlinkedUniqueNamesToAppID )
			{
				appIDsToCopy = _CreatorHomeBatchUpdater.m_createrHome.m_unlinkedUniqueNamesToAppID[uniqueName];
			}
			else
			{
				appIDsToCopy = _CreatorHomeBatchUpdater.m_createrHome.m_linkedUniqueNamesToAppID[uniqueName];

								var exctractedClanSteamID = uniqueName.split( ':', 1 )[0];
				uniqueName = uniqueName.substring( exctractedClanSteamID.length + 1 );

								if( bDoUpdateNow )
				{
					clanSteamID = exctractedClanSteamID;
				}
			}


						var arrayLength = appIDsToCopy.length;
			for (var i = 0; i < arrayLength; i++)
			{
				if (count >= from && count < to)
				{
					appids.push(appIDsToCopy[i]);
				}
				count += 1;
			}

			if( appids.length > 0 )
			{
				var preferredName = _CreatorHomeBatchUpdater.m_createrHome.FindPopularCapitalization( uniqueName );

				devLinks.push({
					clan_steamid: clanSteamID,
					linkname: preferredName,
					appIDs: appids
				});
			}
		});

		return devLinks;
	}

		BeginBatchProcessing()
	{
		$J('#updating_dialog_throbber').show();
		$J('#update_dialog_done').hide();
		$J('#update_dialog_error').hide();
		$J('#update_dialog_desc').text( "Updating the app to homepage links in small batches of size %1$s. This may take a few minutes.".replace( '%1$s', this.m_batchSize ) );

		this.m_modalDialog = ShowDialog( "Updating App to Homepage Links", $J( '#updating_dialog').show() );
		this.m_modalDialog.SetRemoveContentOnDismissal( false );
		this.m_modalDialog.SetDismissOnBackgroundClick( false );
		this.m_modalDialog.OnDismiss( function() { location.reload(); } );

		var devLinks = this.ExtractDevLinksToChange(  );
		this.m_totalCount = this.GetAppCountInDevLinks( devLinks );

		this.Recurse();
	}
};

class CreatorHome {
	constructor( strPartnerName )
	{
		this.m_unlinkedUniqueNamesToAppID = [];
		this.m_linkedUniqueNamesToAppID = [];
		this.m_appIDToNames = [];
		this.m_strPartnerName = strPartnerName;
		this.m_linknameToClanSteamIDs = [];
		this.m_clanSteamIDToNameAndProfile = [];
		this.m_myGroupOwnOrOfficered = [];
		this.m_rgUniqueNamesToAppIds = []; 		this.m_batchProcessor = null;
	}

	SetAppIDToNames( appIDToName )
	{
		this.m_appIDToNames = appIDToName;
	}
	AddUnlinkedAppIDs( uniqueName, appidArray )
	{
		this.m_unlinkedUniqueNamesToAppID[ uniqueName ] = appidArray;
	}
	AddLinkedAppIDs( uniqueName, appidArray )
	{
		this.m_linkedUniqueNamesToAppID[ uniqueName ] = appidArray;
	}
	SetLinknameToClanSteamIDs( linknameToClanSteamIDs )
	{
		this.m_linknameToClanSteamIDs = linknameToClanSteamIDs;
	}
	SetClanNamesAndProfile( clanSteamIDToNameAndProfile )
	{   		this.m_clanSteamIDToNameAndProfile = clanSteamIDToNameAndProfile;
	}
	SetUniqueNamesToAppIds( rgUniqueNamesToAppIds )
	{
		this.m_rgUniqueNamesToAppIds = rgUniqueNamesToAppIds;
	}

	FindPopularCapitalization( uniqueName )
	{
		var strBestName = uniqueName;
		var count = 0;
		var _creatorhome = this;
		Object.keys( this.m_rgUniqueNamesToAppIds ).forEach( function (key ) {
			if( key.toLowerCase() == uniqueName )
			{
				if( Object.keys( _creatorhome.m_rgUniqueNamesToAppIds[ key ] ).length > count )
				{
					count = _creatorhome.m_rgUniqueNamesToAppIds[ key ].length;
					strBestName = key;
				}
			}
		});
		return strBestName;
	}


		BatchEditRequest( withSettings, bRemove = false, bUpdate = false )
	{
		this.m_batchProcessor = new CreatorHomeBatchUpdater( this, withSettings, bRemove, bUpdate );
		this.m_batchProcessor.BeginBatchProcessing();
	}


		SaveLinks(  )
	{
				var withSettings = $J('.createhome_unlinked select option:selected').filter( function() {
			return !(this.value.length === 0 || !this.value.trim() );
		});

		if( withSettings && withSettings.length != 0 )
		{
			this.BatchEditRequest( withSettings, false /* bRemove */ );
		}
	}

		UpdateLinks()
	{
		var withSettings = $J('.createhome_linked select').filter( function() {
			return $J( this ).prop('selectedIndex') !== 0;
		});

		if( withSettings.length != 0 )
		{
			this.BatchEditRequest(  withSettings, true /* bRemove */, true /* bUpdate */ );
		}
	}

		ShowAppIDList( strLinkName, bLinked )
	{
		var strDesc = 'These are the games under %1$s that currently have developer or publisher of franchise fields set to \'%2$s\'. Select a title below if you wish to go edit that particular titles.'.replace('%1$s', this.m_strPartnerName).replace('%2$s', strLinkName);
		var appIDs = (bLinked) ? this.m_linkedUniqueNamesToAppID[strLinkName] : this.m_unlinkedUniqueNamesToAppID[strLinkName];
		this.InternalShowAppIDList( strDesc, appIDs );
	}

		ShowAppIDListUniqueName( uniqueName )
	{
		var strDesc = 'These are the games under %1$s that currently have developer or publisher of franchise fields set to \'%2$s\'. Select a title below if you wish to go edit that particular titles.'.replace('%1$s', this.m_strPartnerName).replace('%2$s', uniqueName);
		var appIDs = this.m_rgUniqueNamesToAppIds[ uniqueName ];
		this.InternalShowAppIDList( strDesc, Object.keys( appIDs ) );
	}

	InternalShowAppIDList( strDesc, appIDs )
	{
		if( appIDs )
		{
			var divDialog = $J( "<div>" ).addClass( 'creatorhome_dialog' );
			divDialog.append( $J( '<div>').addClass('creatorhome_dialog_desc').text( strDesc ) );
			var table = $J( '<table>').addClass( 'creatorhome_table' );
			divDialog.append( table );
			for( var i = 0 ; i < appIDs.length; ++i )
			{
				var appID = appIDs[i];
				var appName = this.m_appIDToNames[ appID ] ? this.m_appIDToNames[ appID ] : 'unknown name';
				appName += ' - (appid:' +appID +')';
				var aLink = $J( '<a>' ).attr( 'href', 'https://partner.steamgames.com/apps/landing/' + appID ).attr( 'target', '_blank' ).text( appName );
				table.append( $J( "<tr>").append( $J( '<td>').append( aLink ) ) );
			}

			var dialog = ShowConfirmDialog( 'Products using \'%1$s\' as developer or publisher or franchise'.replace( '%1$s', this.m_strPartnerName ), divDialog );
			dialog.done( function() { } );
		}
		else
		{
			var dialog = ShowConfirmDialog( 'Products using \'%1$s\' as developer or publisher or franchise'.replace( '%1$s', this.m_strPartnerName ), "Failed to find the apps from the link you clicked." );
			dialog.done( function() { } );
		}
	}

		UniqifyLinknameAndClan( clan_steamid, linkname )
	{
		return '' + clan_steamid + ':' + linkname;
	}

		SetLinkedSelectsToDefault( )
	{
		if( this.m_linknameToClanSteamIDs )
		{
			for( var linkname in this.m_linknameToClanSteamIDs )
			{
				if( this.m_linknameToClanSteamIDs.hasOwnProperty( linkname ) )
				{
					var clanSteamIDArray = this.m_linknameToClanSteamIDs[linkname];
					for( var index in clanSteamIDArray )
					{
						if( clanSteamIDArray.hasOwnProperty( index ) )
						{
							var clan_steamid = clanSteamIDArray[index];
							var uniqueName = this.UniqifyLinknameAndClan( clan_steamid, linkname );
							var selected = $J('.createhome_linked select[uniqueName="' + uniqueName.toLowerCase() + '"]');
							if( selected.length == 1 )
							{
								var groupArrayData = this.m_myGroupOwnOrOfficered.slice();
								var findIndex = groupArrayData.findIndex ( x => x.id == clan_steamid );

																if( findIndex == -1 )
								{
									if( clan_steamid in this.m_clanSteamIDToNameAndProfile )
									{
										groupArrayData.unshift( { "id" : clan_steamid, "text" : this.m_clanSteamIDToNameAndProfile[clan_steamid].name,
											"store_url": this.m_clanSteamIDToNameAndProfile[clan_steamid].store_url, "group_url" : this.m_clanSteamIDToNameAndProfile[clan_steamid].group_url } );
									}
									else
									{
										groupArrayData.unshift( { "id" : clan_steamid, "text" : linkname, "store_url": "x", "group_url" : "x" } );
									}
								}
								else if( findIndex != 0 )
								{
									var temp = groupArrayData[ 0 ];
									groupArrayData[ 0 ] = groupArrayData[findIndex];
									groupArrayData[ findIndex ] = temp;
								}

								selected.select2( {
									allowClear: false,
									data: groupArrayData,
								});

																var profileURL = 'https://steamcommunity.com//gid/' + clan_steamid;
								var textForDisplay =  'Open group page';
								if( clan_steamid in this.m_clanSteamIDToNameAndProfile ) {
									profileURL = this.m_clanSteamIDToNameAndProfile[clan_steamid].store_page;
									textForDisplay =  'Preview store page';
								}
								selected.parent().append($J("<a>").addClass("creatorhome_grouplink").attr('href', profileURL)
									.attr('target', '_blank').text( textForDisplay ) );

																selected.parent().append( $J( "<a>" ).addClass("creatorhome_groupunlink").attr( 'href', '#' )
									.attr( 'onclick', 'g_creatorHome.RemoveHomepageLink( $J( this ), \'' + clan_steamid + '\', \'' + linkname + '\' ); return false;')
									.text('Unlink') );

							}
						}
					}
				}
			}
		}
	}

		RemoveHomepageLink( selected, clan_steamid, linkname )
	{
		var clanname = this.m_clanSteamIDToNameAndProfile[clan_steamid]['name'];
		var clanurl = this.m_clanSteamIDToNameAndProfile[clan_steamid]['group_profile'];
		var uniqueName = this.UniqifyLinknameAndClan( clan_steamid, linkname );
		var appids = this.m_linkedUniqueNamesToAppID[ uniqueName ];

		var strDesc = 'Are you sure you want to unlink the identifier \'%1$s\' from the group <a href=\'%2$s\' target=\'_blank\'>\'%3$s\'</a>? This will effects %4$s apps.'.replace( '%1$s', linkname )
			.replace( '%2$s', clanurl ).replace( '%3$s', clanname ).replace( '%4$s', appids.length );
		var divDialog = $J( '<div>').addClass('creatorhome_dialog_desc').html( strDesc )
		var dialog = ShowConfirmDialog( 'Unlink', divDialog );

		var _createrhome = this;
		dialog.done( function() {
			_createrhome.BatchEditRequest( selected.siblings( '.creatorhome_group_sel'), true /* bRemove */, false /* update */ );
		} );
	}

		ResetLinkedToDefault()
	{
		$J( ".createhome_linked select").val(0).trigger("change");
	}
	ResetUnlinked()
	{
		$J( ".createhome_unlinked select").val(0).trigger("change");
	}


		AssignOwnOrOfficerGroups( ownOrOfficerGroups )
	{
		$J( '.createhome_unlinked .creatorhome_group_sel' ).select2({
			placeholder: {
				id: '0',
				text: 'unset',
			},
			allowClear: true,
			data: ownOrOfficerGroups,
		} );

		this.m_myGroupOwnOrOfficered = ownOrOfficerGroups;
	}

		OnGroupSelectionChange( selected )
	{
				if( selected.val() )
		{
			var clan_steamid = selected.val();
			for( var index = 0 ; index < this.m_myGroupOwnOrOfficered.length; ++index )
			{
				var groupInfo = this.m_myGroupOwnOrOfficered[index];
				if( groupInfo['id'] == clan_steamid )
				{
					var existingLink = selected.siblings('a.creatorhome_grouplink');

										if( existingLink.length != 0 )
					{
						existingLink.attr( 'href', groupInfo.store_url );
					}
					else
					{
						selected.parent().append( $J( "<a>" ).addClass("creatorhome_grouplink").attr( 'href', groupInfo.store_url )
							.attr( 'target', '_blank').text('Preview store page') );
					}
					break;
				}
			}
		}
		else
		{
			selected.siblings('a.creatorhome_grouplink').remove();
		}

				if( selected.parents('.createhome_linked').length )
		{
			if( selected.prop('selectedIndex') == 0 ){
				selected.siblings('a.creatorhome_groupunlink').show();
			} else {
				selected.siblings('a.creatorhome_groupunlink').hide();
			}
		}
	}
}

function CreatorHome_PreLoadApps( url, increments, start, total )
{
		$J.post( 'https://partner.steamgames.com/creatorhome/ajaxprecacheapps', {
		'sessionid' : g_sessionID,
		'start' : start,
		'end' : start + increments
	}).done( function( data ) {
		if( data.success )
		{
			if( (start + increments) >= total )
			{
				$J( '#processing_throbber' ).hide();
				$J( '#creatorhome_process_report' ).hide()

				$J( '#creatorhome_analysis' ).text( 'Pre-loading %1$s app information is now completed. Now running analysis. This may take up to a few minutes.'.replace( '%1$s', total ) );
				$J( "#creatorhome_analysis").show();
				$J( '#analysis_throbber').show();
				window.location = url;
			}
			else
			{
				$J( '#creatorhome_process_report' ).text( 'Loading %1$s app information out of %2$s ...'.replace( '%1$s', start + increments ).replace( '%2$s', total ));
				CreatorHome_PreLoadApps( url, increments, start + increments, total );
			}
		}
		else
		{
			$J( '#processing_throbber' ).hide();
			$J( '#creatorhome_error_save').text( "Error: " + data.eresult );
			$J( '#creatorhome_error_save').show();
		}
	}).fail( function( data ) {
		$J( '#creatorhome_error_save').text( "Error: " + data.eresult );
		$J( '#creatorhome_error_save').show();
		$J( '#processing_throbber' ).hide();
	});
}
