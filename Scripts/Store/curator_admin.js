
var g_rgAppsCurated = [];


function CreateListFromForm( elForm, fnOnComplete )
{
	CallFunctionFromForm( elForm, [ 'listid', 'title', 'description', 'visibility', 'appids', 'type', 'background' ], EditList, fnOnComplete);
}


function EditList( listid, title, blurb, state, appids, type, background, fnOnComplete )
{

	$J.ajax ( {
		url: g_strCuratorBaseURL + 'ajaxeditlist/',
		data: {
			listid: listid,
			title: title,
			blurb: blurb,
			state: state,
			appids: appids,
			type: type,
			background: background,
			sessionid: g_sessionID
		},
		dataType: 'json',
		type: 'POST'
	} ).done( function ( data )
	{
		if( data.listid )
			document.getElementById('listid').value = data.listid;

		if( fnOnComplete )
			fnOnComplete ( data.listid );

	}).fail( function( data ){
		var response = JSON.parse(data.responseText);
		ShowAlertDialog( "Oops!", "We were unable to save your changes ( %1$s )".replace(/%1\$s/, response.success ) );
	});
	if( event )
		event.preventDefault();

}

function CreateReviewFromForm( elForm, fnOnComplete )
{
	CallFunctionFromForm( elForm, [ 'appid', 'blurb', 'link_url', 'recommendation_state', 'received_compensation', 'received_for_free' ], CreateReview, fnOnComplete);
}

function CreateReview( appid, blurb, link_url, recommendation_state, received_compensation, received_for_free, fnOnComplete )
{

	$J.ajax ( {
		url: g_strCuratorBaseURL + 'ajaxcreatereview/',
		data: {
			appid: appid,
			blurb: blurb,
			link_url: link_url,
			recommendation_state: recommendation_state,
			received_compensation: received_compensation,
			received_for_free: received_for_free,
			sessionid: g_sessionID
		},
		dataType: 'json',
		type: 'POST'
	} ).done( function ( data )
	{
		if( fnOnComplete )
			fnOnComplete();

	}).fail( function( data ){
		var response = JSON.parse(data.responseText);
		ShowAlertDialog( "Oops!", "We were unable to save your changes ( %1$s )".replace(/%1\$s/, response.success ) );
	});

}

function UpdateCuratorFromForm( elForm, fnOnComplete, bAsync  )
{
	if( bAsync !== false )
		bAsync = true;

	var rgPreferredTags = [];
	$J( '#tags_preferred > .tag_preferred' ).each( function( i, ele ){
		rgPreferredTags.push( ele.textContent );
	})

	CallFunctionFromForm( elForm, [ 'description', 'google_id', 'platform_windows', 'platform_mac', 'platform_linux', 'vr_content', 'website_title', 'website_url', 'discussions_url', 'show_broadcast' ],
		UpdateCurator.bind(null, bAsync), fnOnComplete, rgPreferredTags );
}

function UpdateCurator( bAsync, description, google_id, platform_windows, platform_mac, platform_linux, vr_content, website_title, website_url, discussions_url, show_broadcast, ...rgPreferredTags )
{
	$J.ajax ( {
		url: g_strCuratorBaseURL + 'ajaxupdatecuratordetails/',
		data: {
			description: description,
			google_id: google_id,
			platform_windows: platform_windows,
			platform_mac: platform_mac,
			platform_linux: platform_linux,
			vr_content: vr_content,
			website_title: website_title,
			website_url: website_url,
			discussions_url: discussions_url,
			show_broadcast: show_broadcast,
			tags_preferred: rgPreferredTags,
			sessionid: g_sessionID,
			async: bAsync,
		},
		dataType: 'json',
		type: 'POST',
		async: bAsync
	} ).done( function ( data ) { }).fail( function( data ){
		var response = JSON.parse(data.responseText);
		ShowAlertDialog( "Oops!", "We were unable to save your changes ( %1$s )".replace(/%1\$s/, response.success ) );
	});
}

var g_unMaxTags = 5;
function AddTag( $elDisplayTarget, strTagName )
{
	if( $elDisplayTarget.children().length > g_unMaxTags )
		return;

	var $elTagInner = $J('<div/>').text(strTagName);
	var $elTag = $J('<div/>').addClass('tag_preferred').append( $elTagInner );
	var $elRemoveButton = $J( '<span>' ).click(function(){
		$elTag.remove();
		UpdateTagCount( $J( '#tags_preferred' ) );
		$J( '#listform' ).trigger('saveform');
	});

	$elTagInner.append($elRemoveButton);

	$elDisplayTarget.append( $elTag );

	UpdateTagCount($elDisplayTarget);
	$J( '#listform' ).trigger('saveform');
}

function UpdateTagCount($elTarget)
{
	if( $elTarget.children().length >= g_unMaxTags )
	{
		$J('#app_tag_form').hide();
	}
	else
	{
		$J('#app_tag_form').show();
	}
}

function ShowAppSuggestForm( elTarget, bOnlyCreatedApps, fnDoneAction )
{
	var $elInput = $J("#review_suggest_input");
	var nAppId = 0;

	var modal = ShowPromptDialog( "Add to list", "Type the name of the item you'd like to add to this list." );
	modal.done( function(){
		if( nAppId > 0 )
		{
			fnDoneAction( nAppId );
			modal.Dismiss();
		}
	} );

	var $elDialogContent = $J('input', modal.m_$Content);

	modal.Show();
	$elInput.focus();

	var TextSuggest = new CTextInputSuggest( $elDialogContent,
		function(term, fnResponse)
		{
			var localeTerm = term.toLocaleLowerCase();
			var rgMatches = [];
			for( var i=0; i<g_rgAppsCurated.length && rgMatches.length < 10; i++)
			{
				if( ( !bOnlyCreatedApps || g_rgAppsCurated[i].curated == false ) &&
					g_rgAppsCurated[i].app_name.toLocaleLowerCase().indexOf( localeTerm ) !== -1 )
				{
					rgMatches.push(g_rgAppsCurated[i].app_name);
				}
			}
			fnResponse( rgMatches );
		},
		function( suggestion )
		{
			for( var i=0; i<g_rgAppsCurated.length; i++)
			{
				if( ( !bOnlyCreatedApps || g_rgAppsCurated[i].curated == false ) &&
					g_rgAppsCurated[i].app_name == suggestion )
				{
					nAppId = g_rgAppsCurated[i].appid;
					return;
				}
			}

		}
	);
}


function ShowAppSuggestFormForList( elTarget, listid )
{
	if( !listid )
		return CreateListFromForm( document.getElementById('listform'), ShowAppSuggestFormForList.bind( this, elTarget ) );

	ShowAppSuggestForm( elTarget, false, function( nAppID ){
		if( nAppID > 0 )
		{
			ListEdit_AddApp ( elTarget, listid, nAppID );
		}
	});
}

function ShowAppSuggestFormForManageMyGames( elTarget )
{
	ShowAppSuggestForm( elTarget, true, function( nAppID ){
		if( nAppID > 0 )
		{
			g_PageController.Navigate ( 'mygames_manage/' + nAppID );
		}
	});
}


function ListEdit_AddAppElement( elTarget, appid, blurb, listid )
{
	var appInfo = false;
	for( var i=0; i<g_rgAppsCurated.length; i++ )
	{
		if( g_rgAppsCurated[i].appid == appid )
			appInfo = g_rgAppsCurated[i];
	}

	var strHTML = "\r\n\t\r\n\t<div id=\"app_%4$s\">\r\n\t\t<div class=\"capsule\">\r\n\t\t\t<img  src=\"%1$s\" >\r\n\t\t<\/div>\r\n\t\t<div class=\"description\">\r\n\t\t\t<h2>%5$s<\/h2>\r\n\t\t<\/div>\r\n\t\t<div class=\"controls\">\r\n\t\t\t<a href=\"#\" onclick=\"ListEdit_RemoveApp(%3$s, %4$s); return false;\" class=\"remove_item_from_list\"><img src=\"https:\/\/steamstore-a.akamaihd.net\/public\/images\/v6\/curator_delete_section.png\"><\/a>\r\n\t\t\t<input type=\"hidden\" name=\"appids\" value=\"%4$s\">\r\n\t\t<\/div>\r\n\t<\/div>\r\n\t".replace(/%1\$s/, 'http://cdn.edgecast.steamstatic.com/steam/apps/'+appid+'/header_292x136.jpg?t=1487329718' )
		.replace(/%2\$s/, V_EscapeHTML( blurb ) ).replace(/%3\$s/, listid).replace(/%4\$s/g, appid)
		.replace(/%5\$s/g, V_EscapeHTML( appInfo.app_name ) );



	elTarget.appendChild( $J(strHTML)[0] );

	$J('#list_public').removeAttr('disabled');
	$J('#list_featured').removeAttr('disabled');

	$J( elTarget ).sortable("refresh");
}

function ListEdit_AddApp( elTarget, listid, appid, blurb )
{

	$J.ajax ( {
		url: g_strCuratorBaseURL + 'ajaxaddtolist/',
		data: {
			listid: listid,
			appid: appid,
			blurb: blurb,
			sessionid: g_sessionID
		},
		dataType: 'json',
		type: 'POST'
	} ).done( function ( data )
	{
		ListEdit_AddAppElement( elTarget, appid, blurb, listid );
	}).fail( function( data ){
		var response = JSON.parse(data.responseText);
		ShowAlertDialog( "Oops!", "We were unable to save your changes ( %1$s )".replace(/%1\$s/, response.success ) );
	});
}

function ListEdit_UpdateSort( elContainer, unListId )
{
	var rgInputs = elContainer.querySelectorAll('input[name="appids"]');
	var rgAppIds = [];

	for( var i=0; i<rgInputs.length; i++)
	{
		rgAppIds.push( rgInputs[i].value );
	}

	$J.ajax ( {
		url: g_strCuratorBaseURL + 'ajaxupdatesortorder/',
		data: {
			listid: unListId,
			appids: rgAppIds,
			sessionid: g_sessionID
		},
		dataType: 'json',
		type: 'POST'
	} ).done( function ( data )
	{
		
	}).fail( function( data ){
		var response = JSON.parse(data.responseText);
		ShowAlertDialog( "Oops!", "We were unable to save your changes ( %1$s )".replace(/%1\$s/, response.success ) );
	});
}


function ListEdit_RemoveApp( unListId, unAppId )
{
	$J.ajax ( {
		url: g_strCuratorBaseURL + 'ajaxremovefromlist/',
		data: {
			listid: unListId,
			appid: unAppId,
			sessionid: g_sessionID
		},
		dataType: 'json',
		type: 'POST'
	} ).done( function ( data )
	{
		$J('#app_' + unAppId).hide();
	}).fail( function( data ){
		var response = JSON.parse(data.responseText);
		ShowAlertDialog( "Oops!", "We were unable to save your changes ( %1$s )".replace(/%1\$s/, response.success ) );
	});
}

function ReviewsManage_UpdatePage( rgData, unPage )
{
	if( unPage )
		g_PageController.Navigate ( 'reviews_manage/' + unPage, false, true );

	var elTarget = document.getElementById('reviews_container');
	$J(elTarget).empty();

	for( var i=0; i<rgData.length; i++ )
	{
		var recommendationInfo = rgData[i];

		var elContainer = document.createElement('label');

		var strRecommendationIcon = '';
		var strRecommendationString = '';

		switch( recommendationInfo.recommendation.recommendation_state )
		{
			case 0:
				strRecommendationIcon = "<img src='https://steamstore-a.akamaihd.net/public/images/v6/ico/ico_curator_up.png'>";
				strRecommendationString = "<span class='color_recommended'>Recommended<span>";
				break;
			case 1:
				strRecommendationIcon = "<img src='https://steamstore-a.akamaihd.net/public/images/v6/ico/ico_curator_dn.png'>";
				strRecommendationString = "<span class='color_not_recommended'>steam_curator_notrecommended<span>";
				break;
			case 2:
				strRecommendationIcon = "<img src='https://steamstore-a.akamaihd.net/public/images/v6/ico/ico_curator_info.png'>";
				strRecommendationString = "<span class='color_informational'>Informational<span>";
				break;
		}


		elContainer.innerHTML = "\r\n\t\t\t<div>\r\n\t\t\t\t<input type=\"checkbox\" name=\"apps\" value=\"%1$s\">\r\n\t\t\t<\/div>\r\n\t\t\t<div class=\"desc\">\r\n\t\t\t\t<h3>%4$s %2$s<\/h3>\r\n\t\t\t\t<p>%3$s<\/p>\r\n\t\t\t<\/div>\r\n\t\t\t<div class=\"controls\">\r\n\t\t\t\t<a class=\"edit_list_icon ttip\" data-navid=\"review_create\/%1$s\" data-tooltip-text=\"Edit this list\"><img src=\"https:\/\/steamstore-a.akamaihd.net\/public\/images\/v6\/curator_edit_section.png\"><\/a>\r\n\t\t\t\t<a class=\"delete_btn ttip\" data-tooltip-text=\"Delete this list\"><img src=\"https:\/\/steamstore-a.akamaihd.net\/public\/images\/v6\/curator_delete_section.png\"><\/a>\r\n\t\t\t<\/div>\r\n\t\t\t\r\n\t\t".replace(/%1\$s/g,recommendationInfo.appid).replace(/%2\$s/, V_EscapeHTML( recommendationInfo.app_name ) )
			.replace(/%3\$s/, V_EscapeHTML( recommendationInfo.recommendation.blurb ) )
			.replace(/%4\$s/, strRecommendationIcon );

		$J('.delete_btn', elContainer).on('click', function( rec, elRow ){

			var modal = ShowConfirmDialog("Delete this review?", "Are you sure you want to delete your review of %1$s?".replace(/%1\$s/g, V_EscapeHTML( rec.app_name ) ) );

			modal.done(function(  ){

				$J.ajax ( {
					url: g_strCuratorBaseURL + 'ajaxdeletereview/',
					data: {
						appid: rec.appid,
						sessionid: g_sessionID
					},
					dataType: 'json',
					type: 'POST'
				} ).done( function ( data )
				{
					$J(elRow).hide();
				}).fail( function( data ){
					var response = JSON.parse(data.responseText);
					ShowAlertDialog( "Oops!", "We were unable to save your changes ( %1$s )".replace(/%1\$s/, response.success ) );
				});

			});
		}.bind(null, recommendationInfo, elContainer));

		g_PageController.InstrumentLinks( elContainer );

		$J('input', elContainer).each(function(key, val){
			val.addEventListener('change', function(){
				if( this.checked )
					this.parentNode.parentNode.classList.add('checked');
				else
					this.parentNode.parentNode.classList.remove('checked');
			})
		});

		elTarget.appendChild(elContainer);
	}
}

function ReviewsManage_UpdateReviews( rgUpdateFields, strConfirmMsg )
{
	var unItems = document.querySelectorAll('input[name="apps"]:checked').length;

	ShowConfirmDialog("Update multiple reviews", strConfirmMsg.replace(/%1\$s/,unItems) ).done(function(){
		var elForm = document.getElementById('app_form');
		CallFunctionFromForm( elForm, [ 'apps' ], UpdateMultipleReviews, false, [ rgUpdateFields ] );
	});

}

function ReviewsManage_AddToList()
{
	var unListId = false;
	var strListName = false;

	var modal = ShowAutocompleteDialog( "Select list", "Type below to select the list you wish to feature in this section.<br><br>You can only select public lists.",
		function(term, fnResponse)
		{
			var localeTerm = term.toLocaleLowerCase();
			var rgMatches = [];
			for( var i=0; i<g_rgListData.length && rgMatches.length < 5; i++)
			{
				if( g_rgListData[i].title.toLocaleLowerCase().indexOf( localeTerm ) !== -1 )
				{
					rgMatches.push(g_rgListData[i].title);
				}
			}
			fnResponse( rgMatches );
		},
		function( suggestion )
		{

			for( var i=0; i<g_rgListData.length; i++)
			{
				if( g_rgListData[i].title == suggestion )
				{
					unListId = g_rgListData[i].listid;
					strListName = g_rgListData[i].title;
					modal.EnableInput();
					return;
				}
			}
		},
		function(){
			if( !unListId )
				return;

			var elForm = document.getElementById('app_form');
			CallFunctionFromForm( elForm, [ 'apps' ], AddReviewsToList, function(){ modal.Dismiss(); }, [ {'listid': unListId} ] );

		},
		function( )
		{
			unListId = false;
		}
	);

	LoadListData();
}


function AddReviewsToList( rgAppIds, rgFieldsToUpdate, fnOnComplete, somearg )
{
	var rgData = rgFieldsToUpdate;
	rgData['appids'] = Array.isArray( rgAppIds ) ? rgAppIds : [ rgAppIds ];
	rgData['sessionid'] = g_sessionID;


	$J.ajax ( {
		url: g_strCuratorBaseURL + 'ajaxaddtolist/',
		data: rgData,
		dataType: 'json',
		type: 'POST'
	} ).done( function ( data )
	{
		fnOnComplete();
	}).fail( function( data ){
		var response = JSON.parse(data.responseText);
		ShowAlertDialog( "Oops!", "We were unable to save your changes ( %1$s )".replace(/%1\$s/, response.success ) );
	});
}

function UpdateMultipleReviews( rgAppIds, rgFieldsToUpdate )
{

	var rgData = rgFieldsToUpdate;
	rgData['appids'] = rgAppIds;
	rgData['sessionid'] = g_sessionID;

	$J.ajax ( {
		url: g_strCuratorBaseURL + 'ajaxupdatemultiplecurations/',
		data: rgData,
		dataType: 'json',
		type: 'POST'
	} ).done( function ( data )
	{

	}).fail( function( data ){
		var response = JSON.parse(data.responseText);
		ShowAlertDialog( "Oops!", "We were unable to save your changes ( %1$s )".replace(/%1\$s/, response.success ) );
	});
}

function RespondOffer( elem, unClanId, unAppId, strAction )
{
	$J.ajax ( {
		url: g_strCuratorBaseURL + 'ajaxrespondoffer',
		data: {
			sessionid: g_sessionID,
			clanid: unClanId,
			appid: unAppId,
			action: strAction
		},
		dataType: 'json',
		type: 'POST'
	} ).done( function ( data )
	{
		if( data.success == 1)
		{
			$J( elem ).hide();
		}
		else if ( data.message )
		{
			ShowAlertDialog( data.message );
		}
	}).fail( function( jqXHR ) {
		var data = $J.parseJSON( jqXHR.responseText );
		if ( data.message )
		{
			ShowAlertDialog( 'Something went wrong', data.message );
		}
	}).always( function (data ) {
		$J( elem ).hide();
	});
}

function ExtendOffers( unClanId )
{
    $J.ajax ( {
        url: g_strCuratorBaseURL + 'ajaxextendoffer',
        data: {
            sessionid: g_sessionID,
            clanid: unClanId,
        },
        dataType: 'json',
        type: 'POST'
    } ).done( function ( data )
	{
        if (data.success == 1)
        {
            g_PageController.Navigate( 'pending', 'Pending games');
        }
        else if ( data.message )
        {
            ShowAlertDialog( data.message );
        }
    }).fail( function( jqXHR )
    {
        ShowAlertDialog( 'Oops!', 'An error occurred. Please try again later.' );
    });
}

function MarkNotInterested( elem, unAppId, snr ) {
	$J.ajax ( {
		url: 'http://store.steampowered.com/recommended/ignorerecommendation',
		data: {
			sessionid: g_sessionID,
			appid: unAppId,
			snr: '',
		},
		dataType: 'json',
		type: 'POST',
	} ).done( function ( data )
	{
		if( data.success == 1)
		{
			$J( elem ).hide();
		}
		else if ( data.message )
		{
			ShowAlertDialog( data.message );
		}
	}).fail( function( jqXHR ) {
		var data = $J.parseJSON( jqXHR.responseText );
		if ( data.message )
		{
			ShowAlertDialog( 'Something went wrong', data.message );
		}
	}).always( function (data ) {
		$J( elem ).hide();
	});
}

function UpdateCharacterLimitLabel( elSource, strId, nMaxLen )
{
	var nLength = elSource.value.length;
	var elTarget = document.getElementById( strId );

	elTarget.textContent = "%1$s characters remaining".replace(/%1\$s/, nMaxLen - nLength )
}

function LoadCuratorAssociatedApps( fnOnComplete )
{
	if( this.loading )
		return;
	if( this.loaded )
	{   		$J('#curator_createlist_app_count_throbber').hide();
		$J('#curator_createlist_app_count').text( 'There are %1$s app(s) available to use in your list.'.replace('%1$s', g_rgAppsCurated.length ) );

		if( fnOnComplete )
			fnOnComplete ();
		return;
	}

	this.bLoading = true;
	var _this = this;

	$J.ajax ( {
		url: g_strCuratorBaseURL + 'ajaxgetassociatedappslist/',
		data: {
			sessionid: g_sessionID,
			count: 1000, 		},
		type: 'POST'
	} ).done( function ( data )
	{
		_this.loading = false;
		_this.loaded = true;
		g_rgAppsCurated = data.recommendations;
		$J('#curator_createlist_app_count_throbber').hide();
		$J('#curator_createlist_app_count').text( 'There are %1$s app(s) available to use in your list.'.replace('%1$s', g_rgAppsCurated.length ) );
		if( fnOnComplete )
			fnOnComplete();
	})

}

function ListManage_DeleteList( elRow, unListId, strListName )
{
	var modal = ShowConfirmDialog("Delete this list?", "Are you sure you want to delete the list: <b>%1$s<\/b>?".replace(/%1\$s/g, V_EscapeHTML( strListName ) ) );

	modal.done(function(  ){

		$J.ajax ( {
			url: g_strCuratorBaseURL + 'ajaxdeletelist/',
			data: {
				listid: unListId,
				sessionid: g_sessionID
			},
			dataType: 'json',
			type: 'POST'
		} ).done( function ( data )
		{
			$J(elRow).hide();
		}).fail( function( data ){
			var response = JSON.parse(data.responseText);
			ShowAlertDialog( "Oops!", "We were unable to save your changes ( %1$s )".replace(/%1\$s/, response.success ) );
		});

	});
}

function ReviewsManage_Load()
{

	var rgData = {
		sessionid: g_sessionID
	};
	$J('#throbber').show();
	$J.ajax ( {
		url: g_strCuratorBaseURL + 'ajaxgetrecommendations/',
		data: rgData,
		dataType: 'json',
		type: 'POST'
	} ).done( function ( data )
	{
		$J('#throbber').hide();
		ReviewsManage_UpdatePage( data.recommendations );

		var pagingData = {
			'prefix' : 'ReviewsManage',
			'total_count' : data.total_count,
			'pagesize' : 25,
			'action' : '',
		};

		g_oPagingControls = new CAjaxPagingControls( pagingData, g_strCuratorBaseURL + 'ajaxgetrecommendations/' );
		g_oPagingControls.SetResponseHandler( function( response ) {

			ReviewsManage_UpdatePage(response.recommendations)
		});
		g_oPagingControls.SetPageChangingHandler( function( nPage ) {
			$J('#reviews_container').hide();
			$J('#throbber').show();
		} );
		g_oPagingControls.SetPageChangedHandler( function ( nPage ) {
			$J('#reviews_container').show();
			$J('#throbber').hide();
		} );

	});


	new CTextInputSuggest( $J('#gamesearch'),
		function(term, fnResponse)
		{
			var localeTerm = term.toLocaleLowerCase();
			var rgMatches = [];
			for( var i=0; i<g_rgAppsCurated.length && rgMatches.length < 5; i++)
			{
				if( g_rgAppsCurated[i].app_name.toLocaleLowerCase().indexOf( localeTerm ) !== -1 )
				{
					rgMatches.push(g_rgAppsCurated[i].app_name);
				}
			}
			fnResponse( rgMatches );
		},
		function( suggestion )
		{
			for( var i=0; i<g_rgAppsCurated.length; i++)
			{
				if( g_rgAppsCurated[i].app_name == suggestion )
				{
					//$elField.val( g_rgAppsCurated[i].appid );
					var nAppId = g_rgAppsCurated[i].appid;
					g_PageController.Navigate ( 'review_create/' + nAppId );
					return;
				}
			}

		}
	);

	LoadCuratorAssociatedApps();
}


function InitReferralsPagingControls( oPagingData )
{
	if ( !oPagingData )
		return;

	var pagingControls = new CAjaxPagingControls( oPagingData, oPagingData['url'] );
	pagingControls.SetResponseHandler( function( response ) {
		$J('#' + this.m_strElementPrefix + 'Rows').InstrumentLinks();
	});
	pagingControls.SetPageChangingHandler( function( nPage ) {
		$J('#' + this.m_strElementPrefix + 'Rows').fadeTo( 0.1, 0.5 );
	} );
	pagingControls.SetPageChangedHandler( function ( nPage ) {
		$J('#' + this.m_strElementPrefix + 'Rows').fadeTo( 0.1, 1 );
	} );
	
	return pagingControls;
}

function InitReferralGraph()
{
	var graphContainer = $J("#stats_app_views_graph");

	var rgChartData = [];
	for ( var i = 0; i < g_StatsAppViews.length; ++i )
	{
		var rollup = g_StatsAppViews[i];
		var data = [ rollup.date * 1000, rollup.num_views ];
		rgChartData.push( data );
	}
	var seriesRollup = [ { label: "App Views Influenced", color: "#66c0f4", data: rgChartData } ];

	var options = {
		series: {
			stack: 0,
			bars: {
				show: 0,
			},
			lines: {
				show: 1
			},
			highlightColor: 'rgb(255,255,255)'
		},
		legend: {
			show: 0
		},
		xaxis: {
			mode: "time",
			timeformat: "%b %d",
			timezone: "utc",
			tickLength: 0,
			font: {
				color: "#ffffff"
			}
		},
		yaxis: {
			tickDecimals: 0,
			color: "rgba( 255, 255, 255, 0.2 )",
			font: {
				color: "#ffffff"
			}
		},
		grid: {
			hoverable: true,
			clickable: true,
			borderWidth: 0,
			margin: 0,
			mouseActiveRadius: 10,
			autoHighlight: true
		},
		selection: {
			mode: "x",
			color: "#ffffff",
		}
	};
	var flotRollup = $J.plot( graphContainer, seriesRollup, options );

	// tooltip
	$J("<div id='stats_app_views_graph_tooltip'></div>").appendTo("body");
	var funcTooltip = function (event, pos, item) {
		var tooltip = $J("#stats_app_views_graph_tooltip");
		if ( item )
		{
			var x = item.datapoint[0].toFixed(2);
			var y = item.datapoint[1].toFixed(2);
			var numViews = parseInt( y );
			var yDelta = -20 - tooltip.height();
			var xDelta = 5;

			var date = new Date( parseInt(x) );

			var strDate = ( date.getUTCMonth() + 1 ) + "/" + ( date.getUTCDate() ) + "/" + date.getUTCFullYear();
			tooltip.html( numViews + " " + item.series.label + " (" + strDate + ")" );
			tooltip.css( {top: item.pageY+yDelta, left: item.pageX+xDelta} );
			tooltip.fadeIn( 10 );
		}
		else
		{
			tooltip.hide();
		}
	};
	graphContainer.bind("plothover", funcTooltip);
}

var g_StatsAppViews = [];
var g_RecentReferralsPagingData = null;
var g_TopReferralsPagingData = null;
function Stats_Load()
{
	InitReferralsPagingControls( g_RecentReferralsPagingData );
	InitReferralsPagingControls( g_TopReferralsPagingData );
	InitReferralGraph();
}

function Overview_Load()
{
	InitReferralGraph();
}

function ReviewsCreate_Load()
{
	var rgNameToAppMap = {};
	LoadCuratorAssociatedApps();
	new CIndexedInputSuggest( $J( '#app_suggest' ),
		function(a, b)
		{
			$J.ajax ( {
				url: g_strCuratorBaseURL + 'ajaxappsearchsuggest/',
				data: {
					term: a,
					cc: g_strCC,
					language: g_strLanguage
				},
				dataType: 'json',
				type: 'POST'
			} ).done( function ( data )
			{
				var rgFormattedResults = [];
				for( var i=0; i<data.length; i++ )
				{
					rgFormattedResults.push({
						html: '<img src="https://steamcdn-a.akamaihd.net/steam/apps/'+data[i].id+'/capsule_sm_120.jpg">' + data[i].name,
						key: data[i].id
					});
					rgNameToAppMap[data[i].name] = data[i].id
				}
				b ( rgFormattedResults );
			});
		},
		function( suggestion, text )
		{
			$J('#app_suggest_id').val( suggestion );
			ReviewsCreate_RedirectIfCreated();
		},
		'popup_block_new with_capsules');
}

function ReviewsCreate_RedirectIfCreated()
{
	var appID = $J('#app_suggest_id').val();
	for( var i=0; i<g_rgAppsCurated.length; i++)
	{
		if ( g_rgAppsCurated[i].appid == appID )
		{
			var modal = ShowConfirmDialog ( "App already curated", "You've already written a review for this app. Would you like to edit that review instead?" );
			modal.done ( function () {
				g_PageController.Navigate ( 'review_create/' + appID );
			} );
		}
	}
}

function ListEdit_Onload( listid, listDetails )
{

	var g_unListId = listid;


	var elContainer = document.getElementById('apps_container');


	$J( "#apps_container" ).sortable();
	$J( "#apps_container" ).on( "sortupdate", function( event, ui ) {
		ListEdit_UpdateSort( elContainer, g_unListId );
	});
	$J( "#apps_container" ).disableSelection();

	listDetails.apps.sort( function( a, b ) {
		return Math.sign(a.sort_order - b.sort_order)
	});

	LoadCuratorAssociatedApps (function(){
		for( var i=0; i<listDetails.apps.length; i++)
		{
			var recommendation = listDetails.apps[i].recommended_app;

			ListEdit_AddAppElement( elContainer, recommendation.appid, recommendation.blurb, g_unListId  );
		}
	});



}

function ListManage_Load(  )
{
	var pageSize = 100;

	var rgData = {
		'start': 0,
		'count': pageSize,
		'all': 1
	}
	var elContainer = $J( "#lists_table" );

	$J('#throbber').show();
	elContainer.hide();
	$J.ajax ( {
		url: g_strCuratorBaseURL + 'ajaxgetlists/',
		data: rgData,
		dataType: 'json',
		type: 'GET'
	} ).done( function ( data )
	{
		$J('#throbber').hide();
		elContainer.show();


		data.list_details.sort( function( a, b ) {
			return Math.sign(a.sort_order - b.sort_order)
		});

		ListManage_AddRows( data.list_details );

		var pagingData = {
			'prefix' : 'ReviewsManage',
			'total_count' : data.total,
			'pagesize' : pageSize,
			'action' : ''
		};

		g_oPagingControls = new CAjaxPagingControls( pagingData, g_strCuratorBaseURL + 'ajaxgetlists/' );
		g_oPagingControls.SetStaticParameters({'all':"1"});
		g_oPagingControls.SetResponseHandler( function( response ) {

			ListManage_AddRows(response.list_details )
		});
		g_oPagingControls.SetPageChangingHandler( function( nPage ) {
			elContainer.hide();
			$J('#throbber').show();
		} );
		g_oPagingControls.SetPageChangedHandler( function ( nPage ) {
			elContainer.show();
			$J('#throbber').hide();
		} );
	});

		elContainer.sortable( {
		cancel: ".ui-state-disabled",
		items: "> .list_row",
		axis: "y",
		cursor: "move",
	});
	elContainer.on( "sortupdate", function( event, ui ) {
		ListManage_UpdateSort( elContainer[0] );
	});
	elContainer.disableSelection();
}

function ListManage_UpdateSort( elContainer )
{
	var rgRows = elContainer.querySelectorAll('.list_row');
	var rgListIds = [];

	for( var i=0; i<rgRows.length; i++)
	{
		rgListIds.push( rgRows[i].dataset.listId ) ;
	}



	$J.ajax ( {
		url: g_strCuratorBaseURL + 'ajaxupdatelistorder/',
		data: {
			listids: rgListIds,
			sessionid: g_sessionID
		},
		dataType: 'json',
		type: 'POST'
	} ).done( function ( data )
	{

	}).fail( function( data ){
		var response = JSON.parse(data.responseText);
		ShowAlertDialog( "Oops!", "We were unable to save your changes ( %1$s )".replace(/%1\$s/, response.success ) );
	});
}


function ListManage_AddRows( rgLists )
{
	var template = "<div class=\"list_row\" data-list-id=\"%1$s\">\r\n\t\t\t\t\t<div>%2$s<\/div>\r\n\t\t\t\t\t<div>%3$s<\/div>\r\n\t\t\t\t\t<div class=\"visibility_state\">%4$s<\/div>\r\n\t\t\t\t\t<div class=\"action_ctn\">\r\n\t\t\t\t\t\t<a class=\"edit_list_icon ttip\" data-navid=\"lists_edit\/%1$s\"><img src=\"https:\/\/steamstore-a.akamaihd.net\/public\/images\/v6\/curator_edit_section.png\" data-tooltip-text=\"Edit this list\"><\/a>\r\n\t\t\t\t\t\t<a class=\"delete_list_icon ttip\" href=\"#\" onclick=\"ListManage_DeleteList( this.parentNode.parentNode, %1$s, '%2$s' ); return false;\" data-tooltip-text=\"Delete this list\"><img src=\"https:\/\/steamstore-a.akamaihd.net\/public\/images\/v6\/curator_delete_section.png\"><\/a>\r\n\t\t\t\t\t<\/div>\r\n\t\t\t\t<\/div>";

	var $table = $J('#lists_table');
	$J("#lists_table > *:not(.heading)").remove();

	$J.each(rgLists, function(idx, list ){

		var $el = $J(template.replace(/%1\$s/g, list.listid)
			.replace(/%2\$s/g, list.title ? V_EscapeHTML( list.title ) : "Untitled List" )
			.replace(/%3\$s/g, list.apps.length )
			.replace(/%4\$s/g, list.list_state == 0 ? "Hidden" : '' )
		);

		$table.append($el);
	});


	g_PageController.InstrumentLinks( $table );
	$J( "#lists_table" ).sortable("refresh");
}

// Edit curator page JS

var g_clanID;

function EditCurator_Load( clanID, rgTags )
{
	g_ClanID = clanID;
	// Init tag autocompleters
	new CTagAutoComplete( $J("#app_tag_form"), function( tag ) {
		AddTag($J('#tags_preferred'), tag);
	} );

	for( var i = 0; i < rgTags.length && i < g_unMaxTags; i++)
		AddTag( $J('#tags_preferred'), rgTags[i] );
}


function GetCuratorEditURL( clanID )
{
	return 'https://store.steampowered.com/curator/'+ clanID +'/admin/curator_edit';
}

function UnlinkExternalAccount( external_account_type, external_account_id, internal_account_type, internal_account_id )
{
	PostToURLWithSession( 'https://steamcommunity.com/account_linking/' + internal_account_id + '/unlink/',
		{ external_account_type : external_account_type, internal_account_type : internal_account_type, redirect_page : GetCuratorEditURL( internal_account_id ), external_account_id : external_account_id } );
}

function LinkExternalAccount( external_account_type, internal_account_type, internal_account_id, from_page )
{
	PostToURLWithSession( 'https://steamcommunity.com/account_linking/' + internal_account_id + '/begin_link/',
		{ external_account_type : external_account_type, internal_account_type : internal_account_type, redirect_page: GetCuratorEditURL( internal_account_id )  } );
}

function MyGameManage_Load( el )
{
	$J( el ).on( 'saveform', function ( e ) { console.log( 'Adil save form' ) ; console.log( e ); return false;} );
	LoadCuratorAssociatedApps();
}

function CustomizeCreatedApps( elForm )
{
	CallFunctionFromForm( elForm, [ 'appid', 'blurb', 'link_url' ], UpdateCustomizationCreatedApp );
}

function UpdateCustomizationCreatedApp( appid, blurb, link_url )
{

	$J.ajax ( {
		url: g_strCuratorBaseURL + 'ajaxupdatecustomizationcreatedapp/',
		data: {
			appid: appid,
			blurb: blurb,
			link_url: link_url,
			sessionid: g_sessionID
		},
		dataType: 'json',
		type: 'POST'
	} ).done( function ( data )
	{
		$J( '#creatorhome_managemygame_success' ).text( 'Save successful.' ).show().delay(5000).fadeOut();
	}).fail( function( data ){
		var errorText = "";
		try {
			response = JSON.parse(data.responseText);
			errorText = response.success;
		} catch ( SyntaxError ) {
			errorText = data.responseText;
		}
		ShowAlertDialog( "Oops!", "We were unable to save your changes ( %1$s )".replace(/%1\$s/, errorText ) );
	});

}
