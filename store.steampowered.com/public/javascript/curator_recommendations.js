
var g_bInHashChange = false;
var g_rgMyOtherCreatorHomes = null;
var g_rgListDetails = null;
var g_strCuratorSteamID = null;

function SetMyOtherCreatorHomes( rgCreatorHome )
{
	g_rgMyOtherCreatorHomes = rgCreatorHome;
};

function CuratorSetListDetails( rgListDetails )
{
	g_rgListDetails = rgListDetails;
};

function SetCuratorSteamID( strSteamID )
{
	g_strCuratorSteamID = strSteamID;
}

function OnRecommendationsRendered()
{
	var bHaveUser = ( g_AccountID != 0 );
	if ( !bHaveUser )
	{
		return;
	}

	GDynamicStore.DecorateDynamicItems();
}

function FollowCurator( clanID, bFollow )
{
	var bHaveUser = ( g_AccountID != 0 );
	if ( !bHaveUser )
	{
		ShowAlertDialog("Please log in", "You must be logged in to follow a curator");
		return;
	}

	$J.post(
		'https://store.steampowered.com/curators/ajaxfollow',
		{ 'clanid' : clanID, 'sessionid' : g_sessionID, 'follow' : bFollow ? 1 : 0 },
		function( data )
		{
			if ( bFollow )
			{
				UpdateFormattedNumber( $J( "#CuratorNumFollowers_" + clanID ), 1 );
				$J( "#CuratorFollowBtn_" + clanID).hide();
				$J( "#CuratorUnFollowBtn_" + clanID).show();
                		if ( data && data.nSaleTaskCompleted ) { NewStickerPackModal( 'Follow a Curator' ); }
			}
			else
			{
				UpdateFormattedNumber( $J( "#CuratorNumFollowers_" + clanID ), -1 );
				$J( "#CuratorFollowBtn_" + clanID).show();
				$J( "#CuratorUnFollowBtn_" + clanID).hide();
			}
		},
		'json'
	).fail( function()
		{
			ShowAlertDialog( 'Error', 'There was a problem trying to follow the Steam Curator. Possible issues:<ul><li>You cannot follow a curator you already ignore.</li><li>You can only follow upto 100 curators at a time</li><li>Limited accounts cannot follow a curator</li></ul>' );
		}
	);
	return false;
}

function FollowDLCPage( appid, clanID, bFollow )
{
	var bHaveUser = ( g_AccountID != 0 );
	if ( !bHaveUser )
	{
		ShowAlertDialog("Please log in", "You must be logged in to follow a game");
		return;
	}

	$J.post(
		'https://store.steampowered.com/explore/followgame/', {
			'appid' : appid,
			'sessionid' : g_sessionID,
			'unfollow' : bFollow ? 0 : 1
		},
		function( data )
		{
			if ( bFollow )
			{
				UpdateFormattedNumber( $J( "#CuratorNumFollowers_" + clanID ), 1 );
				$J( "#CuratorFollowBtn_" + clanID).hide();
				$J( "#CuratorUnFollowBtn_" + clanID).show();
			}
			else
			{
				UpdateFormattedNumber( $J( "#CuratorNumFollowers_" + clanID ), -1 );
				$J( "#CuratorFollowBtn_" + clanID).show();
				$J( "#CuratorUnFollowBtn_" + clanID).hide();
			}
		},
		'json'
	).fail( function()
		{
			ShowAlertDialog( 'Error', 'There was a problem trying to following this game. Please try again later.' );
		}
	);
	return false;
}

function IgnoreCurator( clanID, bIgnore )
{
	IgnoreCuratorWithCallback( clanID, bIgnore, function( bIgnored ){
		$J( "#IgnoreControls" ).toggleClass( "ignored", bIgnored );
		if( bIgnored )
		{
			$J( "#curator_header_ignore").hide();
			$J( "#curator_header_unignore").show();
		}
		else
		{
			$J( "#curator_header_ignore").show();
			$J( "#curator_header_unignore").hide();
		}
	});

	HideMenu( )
}

var g_oInfiniteScrollController = null;
InitInfiniteScroll.bEnabled = true;

// Returns the infinite scroll object.
// The CAjaxInfiniteScrollingControls will automatically unhook the old scroll handler when we make a new one.
function InitInfiniteScroll()
{
	if (! InitInfiniteScroll.bEnabled)
		return;

	// Stop old scroller; this is a no-op if we weren't InfiniScrolling.
	StopInfiniteScroll();

    var oScrollOptions = {
        "pagesize":    g_pagingData['pagesize'],
        "total_count": g_pagingData['total_count'],
        "prefix":      g_pagingData['prefix'],
    };

    var endpoint = g_strCuratorBaseURL + 'ajaxgetfilteredrecommendations';
    g_oInfiniteScrollController = new CAjaxInfiniteScrollingControls( oScrollOptions, endpoint );

    g_oInfiniteScrollController.SetStaticParameters( GetRecommendationFilterData() );

    if ( GDynamicStore !== null ) {
        g_oInfiniteScrollController.SetPageChangedHandler(function( iPageNo, oUpdatedDom ) {
            GDynamicStore.DecorateDynamicItems( $J(oUpdatedDom) );
        });
    }

    // Hide the static pager control.
    $J("#pager").hide();

}

function StopInfiniteScroll()
{
	if ( g_oInfiniteScrollController !== null )
	{
		g_oInfiniteScrollController.Stop();
		g_oInfiniteScrollController = null;
	}
}

function InitSearchFilters()
{
	var g_rgTabs = [];
	var g_rgTabParams = {};
	var g_activeSort = 'recent';

	var fnOnFilterChange = function()
	{
		var rgParams = {};
		for ( var filter in g_rgTabParams )
		{
			var rgParamValues = g_rgTabParams[filter];
			if ( rgParamValues && rgParamValues.length )
			{
				rgParamValues.sort();
				for ( var i = 0; i < rgParamValues.length; i++ )
				{
					rgParams[ filter + '[' + i + ']' ] = rgParamValues[i].toString();
				}
			}
		}

		rgParams['sort'] = g_activeSort;

		$J('#' + g_oRecommendations.m_strElementPrefix + 'Rows').empty();

		g_oRecommendations.m_rgStaticParams = rgParams;
		g_oRecommendations.LoadPage( 0, true );

		InitInfiniteScroll();
	};

	var fnAddFilter = function( strParam, value, $Checkbox )
	{
		if ( !$Checkbox )
			$Checkbox = $J('.tab_filter_control[data-param=' + strParam + '][data-value=' + value + ']');

		$Checkbox.addClass( 'checked' );

		if ( !g_rgTabParams[strParam] )
			g_rgTabParams[strParam] = [];
		g_rgTabParams[strParam].push( value );

		var $Filter = $J('<div/>', {'class': 'tab_filter' } );
		$Filter.attr( 'data-param', strParam );
		$Filter.attr( 'data-value', value );
		$Filter.text( $Checkbox.text() );
		$Filter.append( $J('<div/>', {'class': 'tab_filter_remove' }).html('&nbsp;').click( function() { fnRemoveFilter( strParam, value, $Checkbox, $Filter ); } ) );
		$J('.tab_filters').append( $Filter );
		$J('.tab_filter_ctn').show( 'fast' );

		fnOnFilterChange();
	};

	var fnRemoveFilter = function( strParam, value, $Checkbox, $Filter )
	{
		if ( !$Checkbox )
			$Checkbox = $J('.tab_filter_control[data-param=' + strParam + '][data-value=' + value + ']');
		if ( !$Filter )
			$Filter = $J('.tab_filter[data-param=' + strParam + '][data-value=' + value + ']');

		$Checkbox.removeClass('checked');

		if ( g_rgTabParams[strParam] )
			g_rgTabParams[strParam] = g_rgTabParams[strParam].filter( function( val ) { return val != value; } );

		$Filter.remove();
		if ( !$J('.tab_filters').children().length )
		{
			$J('.tab_filter_ctn').hide( 'fast' );
		}

		fnOnFilterChange();
	};

	$J('.tab_filter_control').each( function() {
		var $Control = $J(this);
		var strParam = $Control.data('param');
		var value = $Control.data('value');
		$Control.click( function() {
			if ( !$Control.hasClass( 'checked' ) )
			{
				fnAddFilter( strParam, value, $Control );
			}
			else
			{
				fnRemoveFilter( strParam, value, $Control );
			}
		});
	});

	$J('.tab').each( function() {
		var $Control = $J(this);
		var value = $Control.data('value');

		g_rgTabs.push( $Control );

		$Control.click( function() {
			if ( !$Control.hasClass( 'active' ) )
			{
				g_activeSort = value;
				$Control.addClass('active');

				for (var i = 0; i < g_rgTabs.length; ++i)
				{
					var $OtherTab = g_rgTabs[i];
					if ( $OtherTab != $Control )
					{
						$OtherTab.removeClass('active');
					}
				}

				fnOnFilterChange();
			}

		});
	});
}

function InitPagingControls( oPagingData )
{
	g_oRecommendations = new CAjaxInfiniteScrollingControls( oPagingData, 'https://store.steampowered.com/curator/' + oPagingData['clanid'] + '/ajaxgetcuratorrecommendations/' );
	g_oRecommendations.SetResponseHandler( function( response ) {
		OnRecommendationsRendered();
		$J( "#" + this.m_strElementPrefix + "Rows").InstrumentLinks();
	});

	InitSearchFilters();
}

function CuratorChangeTabs( elNode, strValue, bCreatorHome )
{
	if( bCreatorHome )
	{
		if( strValue == 'recent' )
		{
			$J('#filtercuration_container').show();
			$J('#filtertype_container').hide();
			$J('.curator_filter_tag_count').hide()
		}
		else
		{
			$J('#filtercuration_container').hide();
			$J('#filtertype_container').show();
			$J('.curator_filter_tag_count').show()
		}
	}

	ResetFieldNode( $J('#filtercuation_all'));
	ResetFieldNode( $J('#filter_app_type_all'));
	ResetFieldNode( $J('#tagid_filteration_all'));

	CuratorFieldToggle( elNode, strValue, true );
};

function ResetFieldNode( elNode )
{
	if( elNode )
	{
		$J('input', elNode.parentNode).each(function(i, j){
			$J(j).val('');
		});

		$J('a', elNode.parentNode).each(function(i, j){
			$J(j).removeClass('selected');
		});
	}
	$J('a.all', elNode.parentNode).each(function(i, j){
		$J(j).addClass('selected');
	});

}

function CuratorFieldToggle( elNode, strValue, bForceReset = false )
{
	var bReset = elNode.classList.contains('all') || bForceReset;
	if( bReset )
	{
				ResetFieldNode( elNode );
	}
	else
	{
		$J('a.all', elNode.parentNode).each(function(i, j){
			$J(j).removeClass('selected');
		});
	}

	var elInput = elNode.querySelector('input');
	if( elInput.value === strValue )
	{
		elNode.classList.remove('selected');
		elInput.value = '';
	}
	else
	{
		elNode.classList.add('selected');
		elInput.value = strValue;
	}

	var rgSelected = $J('input[value!=\'\']', elNode.parentNode);
	if( rgSelected.length == 0 )
	{
		$J('a.all', elNode.parentNode).each(function(i, j){
			j.classList.add('selected');
		});
	}

	UpdateRecommendationFilterData( true, bForceReset );
}

function UpdateFilterTagCounts( rgFacets, strFacet, strElementIDPrefix, nCountOverride = 0 )
{
		if( !( strFacet in rgFacets ) )
	{
		$J( '[id^=' + strElementIDPrefix + ']' ).text( '' );
		return;
	}

	var rgFacetToCounts = rgFacets[strFacet];
	var nTotalCount = 0;

	for (var facetIndex in rgFacetToCounts ) {
		$J( '#' + strElementIDPrefix + facetIndex ).text( nCountOverride && rgFacetToCounts[facetIndex] > nCountOverride ? nCountOverride : rgFacetToCounts[facetIndex] );

		nTotalCount += parseInt( rgFacetToCounts[facetIndex] );
	}

	$J( '#' + strElementIDPrefix +"all").text( nCountOverride ? nCountOverride : nTotalCount );
}

function UpdateRecommendationFilterData( refresh = false, bForceReset = false )
{
    g_oPagingControls.SetStaticParameters( GetRecommendationFilterData( bForceReset ) );

    if( refresh )
    {
        g_oPagingControls.GoToPage(0,true);
    }

    InitInfiniteScroll();
}

function GetRecommendationFilterData( bForceReset = false )
{
	var elForm = document.getElementById('filter_box');
	var elTarget = document.getElementById('RecommendationsTable');

	var rgTags = elForm.querySelectorAll('*[name="tagids"]');
	var rgAppTypes = elForm.querySelectorAll('*[name="app_types"]');     	var rgCurations = elForm.querySelectorAll('*[name="curations"]'); 	var rgSorts = elForm.querySelectorAll('*[name="sort"]');

	var rgValues = [];
	for( var j=0; j<rgTags.length; j++ )
	{
		if ( rgTags[ j ].value )
		{
			rgValues.push ( rgTags[ j ].value );
		}
	}

	var rgCurationValues = [];
	for( var j=0; j< rgCurations.length; j++ )
	{
		if ( rgCurations[ j ].value.length > 0 )
		{
			rgCurationValues.push ( rgCurations[ j ].value );
		}
	}

	var rgAppTypeValues = [];
	for( var j=0; j < rgAppTypes.length; j++ )
	{
		if ( rgAppTypes[ j ].value.length > 0 )
		{
			rgAppTypeValues.push ( rgAppTypes[ j ].value );
		}
	}

	var strSort = 'recent';
	for( var j=0; j<rgSorts.length; j++ )
	{
		if( rgSorts[j].value )
			strSort = rgSorts[j].value;
	}

	return {
		"tagids": rgValues.join(','),
		"sort": strSort,
		"app_types": rgAppTypeValues.join(','),
		"curations": rgCurationValues.join(','),
		"reset": bForceReset.toString(),
	};
}

function GetPresentationStyle( rgNodeData, sectionType )
{
	if( rgNodeData.type == sectionType && rgNodeData.presentation )
		return rgNodeData.presentation;

	switch( sectionType )
	{
		case 'featured_recommendations':
		case 'featured_creations':
		case 'featured_single_creation':
			return 'featuredcarousel';
		case 'featured_list':
			return 'bigthengrid';
		default:
	}

	return 'circularlist';
}

function ShowEditHandles( bIsCreatorHome, bIsDLCPage )
{
	$J('.editable > .page_section:not(.editing):not(.header_area)').each(function( i, j ){

		$J('.navigation_bar > a').removeClass('selected');
		$J('.navigation_bar > a:last-child').addClass('selected');

		var $container = $J(j);
		$container.addClass('editing');

		var elOverlay = $J('<div class="edit_overlay"></div>');

		var elButton = $J('<div class="edit_button"><img src="https://store.cloudflare.steamstatic.com/public/images/v6/curator_edit_section.png"></div>');

		var rgNodeData = $container.data('sectionConfig');
		if( !rgNodeData )
			return;

		elButton.click( function(){
			elOptions.show();
		});

		elOverlay.append( elButton );
		$container.append( elOverlay );

		var elOptions = $J('<form class="edit_options"></form>');

		var elTypeSelect = null;
		if( !bIsCreatorHome )
		{
			elTypeSelect = $J("\r\n\t\t\t\t<select name=\"type\">\r\n\t\t\t\t\t<option value=\"none\">None<\/option>\r\n\t\t\t\t\t<option value=\"featured_recommendations\">Games You've Recommended<\/option>\r\n\t\t\t\t\t<option value=\"featured_list\">Feature A List<\/option>\r\n\t\t\t\t\t<option value=\"featured_tag\">Feature A Tag<\/option>\r\n\t\t\t\t\t<option value=\"lists_block\">Lists block<\/option>\r\n\t\t\t\t\t<option value=\"discounted_curations\">Discounted<\/option>\r\n\t\t\t\t<\/select>");
		}
		else if ( bIsDLCPage )
		{
			elTypeSelect = $J("\r\n\t\t\t\t<select name=\"type\">\r\n\t\t\t\t<option value=\"none\">None<\/option>\r\n\t\t\t\t<option value=\"featured_creations\">Games DLCs<\/option>\r\n\t\t\t\t<option value=\"featured_single_creation\">Feature Single DLC<\/option>\r\n\t\t\t\t<option value=\"featured_list\">Feature A List<\/option>\r\n\t\t\t\t<option value=\"featured_tag_creation\">Feature A Tag<\/option>\r\n\t\t\t\t<option value=\"lists_block\">Lists block<\/option>\r\n\t\t\t\t<option value=\"link_homepages\">Link your Homepages<\/option>\r\n\t\t\t\t<option value=\"discounted_creations\">Discounted<\/option>\r\n\t\t\t<\/select>");
		}
		else
		{
			elTypeSelect = $J("\r\n\t\t\t\t<select name=\"type\">\r\n\t\t\t\t\t<option value=\"none\">None<\/option>\r\n\t\t\t\t\t<option value=\"featured_creations\">Games You've Made<\/option>\r\n\t\t\t\t\t<option value=\"featured_recommendations\">Games You've Recommended<\/option>\r\n\t\t\t\t\t<option value=\"featured_single_creation\">Feature A Single Games You've Made<\/option>\r\n\t\t\t\t\t<option value=\"featured_list\">Feature A List<\/option>\r\n\t\t\t\t\t<option value=\"featured_tag_creation\">Featured Tag For Games You've Made<\/option>\r\n\t\t\t\t\t<option value=\"featured_tag\">Featured Tag For Games You've Recommended<\/option>\r\n\t\t\t\t\t<option value=\"lists_block\">Lists block<\/option>\r\n\t\t\t\t\t<option value=\"link_homepages\">Link your Homepages<\/option>\r\n\t\t\t\t\t<option value=\"discounted_creations\">Discounted Games You've Made<\/option>\r\n\t\t\t\t\t<option value=\"discounted_curations\">Discounted Games You've Recommended<\/option>\r\n\t\t\t\t<\/select>");

		}
		elTypeSelect.val( rgNodeData.type );

		var elRecSortSelect = $J("\r\n\t\t\t<select name=\"sort\">\r\n\t\t\t\t<option value=\"recent\">Recent reviews<\/option>\r\n\t\t\t\t<option value=\"topsellers\">Top Sellers<\/option>\r\n\t\t\t\t<option value=\"newreleases\">Release Date<\/option>\r\n\t\t\t<\/select>");

		var elCreatedSortSelect = null;
		if( bIsDLCPage )
		{
			elCreatedSortSelect = $J("\r\n\t\t\t\t<select name=\"sort\">\r\n\t\t\t\t\t<option value=\"app_dlc_rank\">DLC order from Store Edit Special Setting<\/option>\r\n\t\t\t\t\t<option value=\"topsellers\">Top Sellers<\/option>\r\n\t\t\t\t\t<option value=\"newreleases\">Release Date<\/option>\r\n\t\t\t\t<\/select>");
		}
		else
		{
			elCreatedSortSelect = $J("\r\n\t\t\t\t<select name=\"sort\">\r\n\t\t\t\t\t<option value=\"topsellers\">Top Sellers<\/option>\r\n\t\t\t\t\t<option value=\"newreleases\">Release Date<\/option>\r\n\t\t\t\t<\/select>");
		}

		elRecSortSelect.val( rgNodeData.type == 'featured_recommendations' ? rgNodeData.sort : 'recent' );
		elCreatedSortSelect.val( rgNodeData.type == 'featured_creations' ? rgNodeData.sort : 'newreleases' );

		var elPresentationSelect = $J("\r\n\t\t\t<select name=\"presentation\">\r\n\t\t\t\t<option value=\"featuredcarousel\">Carousel with custom video or screenshot grid<\/option>\r\n\t\t\t\t<option value=\"circularlist\">List of four small capsules<\/option>\r\n\t\t\t\t<option value=\"bigthengrid\">Large capsule followed by four small capsule grid<\/option>\r\n\t\t\t<\/select>");

		var elLinkTitleSelect = $J( "\r\n\t\t\t<select name=\"linktitle\">\r\n\t\t\t\t<option value=\"franchise\">Our Franchises<\/option>\r\n\t\t\t\t<option value=\"developer\">Our Developers<\/option>\r\n\t\t\t\t<option value=\"publisher\">Our Publishers<\/option>\r\n\t\t\t\t<option value=\"homepage\">Our Homepages<\/option>\r\n\t\t\t<\/select>" );

		var elSelectHomepages = null;
		if( g_rgMyOtherCreatorHomes && Object.keys( g_rgMyOtherCreatorHomes ).length > 0 )
		{
			var rgSelectedHomes = [];
			if(rgNodeData.linkedhomepages  )
			{
				rgSelectedHomes = JSON.parse( rgNodeData.linkedhomepages );
			}
			elSelectHomepages = $J( '<div class="creator_checkbox_container">' );
			for (var clanid in g_rgMyOtherCreatorHomes)
			{
				if( g_rgMyOtherCreatorHomes.hasOwnProperty( clanid ) )
				{
					var groupInfo = g_rgMyOtherCreatorHomes[clanid];
					elSelectHomepages.append( '<label class="creator_linked_label"><input type="checkbox" name="homepages" value="' + clanid +
						'"' + ( rgSelectedHomes.indexOf( clanid ) != -1 ? ' checked ' : '' ) + '>' + groupInfo['group_name'] + '</label><br>');
				}
			}
		}
		else
		{
			elSelectHomepages = $J( "<div>You do not own or are an officer of any other creator homepages (developer\/publisher\/franchises). Nothing available to link. <\/div>" );
		}

		elLinkTitleSelect.val( rgNodeData.title );

		elPresentationSelect.val( GetPresentationStyle( rgNodeData, rgNodeData.type ) );

				var elListSelect = $J( '<select name="list_sel_option"><option></option></select>');
		for( var listindex = 0; listindex < g_rgListDetails.length; ++listindex )
		{
			var title = g_rgListDetails[listindex]['title'];
			var listid = g_rgListDetails[listindex]['listid'];
			var list_state = g_rgListDetails[listindex]['list_state'];

			if( list_state == 0 )
			{
				title += ' (' + "Unlisted" + ')';
			}

			elListSelect.append( $J('<option value="' + listid + '">' + title + '</option>' ) );
		}
		elListSelect.val( rgNodeData.listid );

		var elListName = $J('<span class="fieldvalue"></span>').text( rgNodeData.listid_label ? rgNodeData.listid_label : "Select..." );
		var elListEditButton = $J('<img src="https://store.cloudflare.steamstatic.com/public/images/v6/curator_edit_section.png">');

		var elTagName = $J('<span class="fieldvalue"></span>').text( rgNodeData.tagid_label ? rgNodeData.tagid_label : "Select..." );
		var elTagEditButton = $J('<img src="https://store.cloudflare.steamstatic.com/public/images/v6/curator_edit_section.png">');

		var elAppName = $J('<span class="fieldvalue"></span>').text( rgNodeData.app_name ? rgNodeData.app_name : "Select..." );
		var elTagAppButton = $J('<img src="https://store.cloudflare.steamstatic.com/public/images/v6/curator_edit_section.png">');

		var elListId = $J('<input type="hidden" name="listid">').val( rgNodeData.listid );
		var elTagId = $J('<input type="hidden" name="tagid">').val( rgNodeData.tagid );
		var elAppID = $J('<input type="hidden" name="appid">').val( rgNodeData.appid );

		elListSelect.on( 'change', function( ){
			var unListId = elListSelect.val();
			if( unListId )
			{
				elListId.val( unListId );
			}
			else
			{
				elListId.val( '' );
			}
		});


		var elSave = $J('<a class="btnv6_blue_hoverfade btn_small btn_uppercase"><span>'+"Update"+'</span></a>');
		var elCancel = $J('<a class="btnv6_blue_hoverfade btn_small btn_uppercase cancelbtn"><span>'+"Cancel"+'</span></a>');

		var elListBlockDesc = $J('<span class="fieldvaluedescription">' + "This will show all of the visible lists which are not already featured elsewhere on the page. The list order can be edited <a href='%1$s' target='_blank'>here<\/a>. ".replace ( /%1\$s/, 'admin/lists_manage' ) +
			( bIsCreatorHome ? "They will show the background image assigned to the list or a random screenshot suitable for all ages at the block artwork." :'') + '</p>');

		elTypeSelect.on('change',function(){
						elRecSortSelect.parent().addClass('hidden');
			elCreatedSortSelect.parent().addClass('hidden');
			elPresentationSelect.parent().addClass('hidden');
			elLinkTitleSelect.parent().addClass( 'hidden' );
			elListContainer.addClass('hidden');
			elTagContainer.addClass('hidden');
			elSelectHomepages.parent().addClass('hidden' );
			elListBlockDesc.parent().addClass( 'hidden' );
			elListSelect.parent().addClass( 'hidden' );
			elAppContainer.addClass( 'hidden' );

			switch( elTypeSelect.val() )
			{
				case 'featured_recommendations':
					elRecSortSelect.parent().removeClass('hidden');
					elPresentationSelect.parent().removeClass('hidden');
					break;
				case 'featured_single_creation':
					elAppContainer.removeClass( 'hidden' );
					break;
				case 'featured_creations':
					elCreatedSortSelect.parent().removeClass('hidden');
					elPresentationSelect.parent().removeClass('hidden');
					break;
				case 'featured_list':
					elPresentationSelect.parent().removeClass('hidden');
					if( g_rgListDetails && g_rgListDetails.length < 50 )
					{
						elListSelect.parent().removeClass( 'hidden' );
					}
					else
					{
						elListContainer.removeClass('hidden');
					}
					break;
				case 'featured_tag':
				case 'featured_tag_creation':
					elPresentationSelect.parent().removeClass('hidden');
					elTagContainer.removeClass('hidden');
					break;
				case 'discounted_curations':
				case 'discounted_creations':
					elPresentationSelect.parent().removeClass('hidden');
					break;
				case 'link_homepages':
					elLinkTitleSelect.parent().removeClass( 'hidden' );
					elSelectHomepages.parent().removeClass( 'hidden' );
					break;
				case 'lists_block':
					elListBlockDesc.parent().removeClass( 'hidden' );
					break;
				default:
					break;
			}

						elPresentationSelect.val( GetPresentationStyle( rgNodeData, elTypeSelect.val() ) );
		});

		elSave.click( function(){
			var elForm = elOptions[0];

						var linkedhomepages = [];
			elSelectHomepages.find( 'input:checkbox:checked').each( function() {
				linkedhomepages.push( $J(this).val() );
			});

			var inputSort = elTypeSelect.val() == 'featured_creations' ? elCreatedSortSelect.val() : elRecSortSelect.val();

			var requestData = {
				sessionid: g_sessionID,
				type: elTypeSelect.val(),
				listid: elListId.val(),
				tagid: elTagId.val(),
				sort: inputSort,
				linktitle: elLinkTitleSelect.val(),
				linkedhomepages: JSON.stringify( linkedhomepages ),
				tagid_label: elTagName.text(),
				listid_label: elListName.text(),
				presentation: elPresentationSelect.val(),
				index: elForm.parentNode.dataset.index,
				appid: elAppID.val()
			};

			var elUpdating = $J("\r\n\t\t\t\t<div class=\"visible edit_overlay updating_section\">\r\n\t\t\t\t\t<h2 style=\"color:white;\">Saving...<\/h2>\r\n\t\t\t\t\t<img src=\"https:\/\/store.cloudflare.steamstatic.com\/public\/images\/login\/throbber.gif\">\r\n\t\t\t\t<\/div>" );
			elOverlay.replaceWith( elUpdating );
			elOptions.hide();

			$J.ajax ( {
				url: g_strCuratorAdminURL + 'ajaxupdatepagesection/',
				data: requestData,
				type: 'POST',
				cache: true
			} ).done( function ( data )
			{
				$container.replaceWith( data );
				ShowEditHandles( g_bIsCreatorHome, g_bIsDLCPage );
			} ).fail(function(xhr, status, thrown)
			{
				data = $J.parseJSON( xhr.responseText );
				ShowAlertDialog( 'Error', 'Error attempting to update with following message:<br/>%1$s'.replace( /%1\$s/g, data.msg ) );
				ShowEditHandles( g_bIsCreatorHome, g_bIsDLCPage );
			} );

			return false;

		});

		elCancel.on('click', function(){
			elOptions.hide();
		});

		elListEditButton.on('click', function(){
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

					elListId.val( unListId );
					elListName.text( strListName );
					modal.Dismiss();
				},
				function( )
				{
					unListId = false;
				}
			);

			LoadListData();

		});

		elTagEditButton.on('click', function(){
			var unTagId = false;
			var strTagName = false;

			var modal = ShowAutocompleteDialog( "Select tag", "Type below to select the tag you wish to feature in this section",
				GetTagSuggestFunc( g_rgGlobalPopularTags ),
				function( suggestion )
				{
					for( var i=0; i<g_rgGlobalPopularTags.length; i++)
					{
						if( g_rgGlobalPopularTags[i].name == suggestion )
						{
							unTagId = g_rgGlobalPopularTags[i].tagid;
							strTagName = suggestion;
							modal.EnableInput();
							return;
						}
					}
				},
				function(){
					if( !unTagId )
						return;

					elTagId.val(unTagId);
					elTagName.text(strTagName);
					modal.Dismiss();
				},
				function( )
				{
					unTagId = false;
				}
			);

			CTagAutoComplete.prototype.LoadPopularTags(false);
		});

		elTagAppButton.on( 'click', function() {
			var unAppID = false;
			var strAppName = false;
			var loading = false;

						var modal = ShowAutocompleteDialog( "Select An App Name or AppID", "Type Appid of the Game or DLC to have it singularly featured. Incorrent Appid will not appear on the page.",
				function(term, fnResponse)
				{
					if( g_mapAppIDToAppNameSearch )
					{
						var lowerTerm = term.toLocaleLowerCase();
						var rgMatches = [];
						for( var key in g_mapAppIDToAppNameSearch )
						{
							if( g_mapAppIDToAppNameSearch.hasOwnProperty( key ) )
							{
								var testTerm = g_mapAppIDToAppNameSearch[key].toLocaleLowerCase();
								if( key.indexOf( lowerTerm ) != -1 || testTerm.indexOf( lowerTerm ) != -1 )
								{
									rgMatches.push( g_mapAppIDToAppNameSearch[key] + ' (appid:' + key + ')' );
								}
							}
						}
						fnResponse( rgMatches );
					}
					else if( !loading )
					{
						loading = true;
						$J.ajax ( {
							url: g_strCuratorAdminURL + 'ajaxgetassociatedappslist/',
							data: {
								sessionid: g_sessionID,
								count: 25,
								term: term,
							},
							type: 'POST'
						} ).done( function ( data )
						{
							loading = false;
							var rgMatches = [];
							var rgAppsCurated = data.recommendations;
							for( var i = 0; i < rgAppsCurated.length; ++i )
							{
								rgMatches.push( rgAppsCurated[i].app_name + ' (appid:' + rgAppsCurated[i].appid + ')' );
							}
							fnResponse( rgMatches );
						})


					}

				},
				function( suggestion )
				{
					if( suggestion )
					{
						var match = suggestion.match( /(.*) \(appid:(\d+)\)$/ );
						if( match )
						{
							strAppName = match[1];
							unAppID = match[2];
							modal.EnableInput();
							return;
						}
					}
				},
				function(){
					if( !unAppID )
						return;

					elAppID.val(unAppID);
					elAppName.text(strAppName);
					modal.Dismiss();
				},
				function( )
				{
					unAppID = false;
				}
		);

			CTagAutoComplete.prototype.LoadPopularTags(false);

		});

		var elListContainer = WrapFormFieldWithLabel( "Featured list", $J('<div></div>').append(elListName, elListEditButton) );
		var elTagContainer = WrapFormFieldWithLabel( "Featured tag", $J('<div></div>').append(elTagName, elTagEditButton) );
		var elAppContainer = WrapFormFieldWithLabel( "Featured Game", $J('<div></div>').append(elAppName, elTagAppButton) );

		elOptions.append( WrapFormFieldWithLabel( "Section type", elTypeSelect ));
		elOptions.append( WrapFormFieldWithLabel( "Title", elLinkTitleSelect ));
		elOptions.append( WrapFormFieldWithLabel( "Sort", elRecSortSelect ));
		elOptions.append( WrapFormFieldWithLabel( "Sort", elCreatedSortSelect ));
		elOptions.append( WrapFormFieldWithLabel( "Homepages", elSelectHomepages ));
		elOptions.append( WrapFormFieldWithLabel( "Presentation Style", elPresentationSelect ));
		elOptions.append( WrapFormFieldWithLabel( "Description", elListBlockDesc ));
		elOptions.append( WrapFormFieldWithLabel( "Featured list", elListSelect ));
		elOptions.append( elListContainer );
		elOptions.append( elTagContainer );
		elOptions.append( elAppContainer );
		elOptions.append( WrapFormFieldWithLabel( '', $J('<div></div>').append( elSave ).append(elCancel) ) );
		elOptions.append( elListId );
		elOptions.append( elTagId );
		elOptions.append( elAppID );
		elOptions.hide();

		elTypeSelect.trigger('change');

		$container.append(elOptions);


		// Force style recalc
		var foo = elOverlay[0].offsetWidth;
		elOverlay.addClass('visible');

	});


	CTagAutoComplete.prototype.LoadPopularTags(false);

	if( g_bCanUploadHeader )
	{
		ShowHeaderImageHandle();
	}
	if( g_bCanUpdateAvatar )
	{
		ShowAvatarHandle();
	}
}


function WrapFormFieldWithLabel( strLabel, elFormField )
{
	var elContainer = $J('<div></div>');
	var elLabel = $J('<div class="label">'+strLabel+'</div>');

	elContainer.append(elLabel);
	elContainer.append(elFormField);

	return elContainer
}



function ShowAddFeaturedTagModal()
{
	var unTagId = false;

	var modal = ShowAutocompleteDialog ( "Add a tag", "Type the name of the tag you'd like to add to this list.",
		GetTagSuggestFunc ( g_rgGlobalPopularTags ),
		function ( suggestion )
		{
			for ( var i = 0; i < g_rgGlobalPopularTags.length; i++ )
			{
				if ( g_rgGlobalPopularTags[ i ].name == suggestion )
				{
					unTagId = g_rgGlobalPopularTags[ i ].tagid;
					modal.EnableInput ();
					return;
				}
			}
		},
		function ()
		{
			$J.ajax ( {
				url: g_strCuratorAdminURL + 'ajaxedittagfilters/',
				data: {
					sessionid: g_sessionID,
					add_tagid: unTagId
				},
				type: 'POST',
				cache: true
			} ).done ( function ( data )
			{
				$J( '#filtertags_container' ).replaceWith( data );
				$J ( '.tag_edit_control' ).show ();
				modal.Dismiss ();
			} ).fail(function(xhr, status, thrown)
			{
				data = $J.parseJSON( xhr.responseText );
				ShowAlertDialog( 'Error', 'Error attempting to update with following message:<br/>%1$s'.replace( /%1\$s/g, data.msg ) );
				$J ( '.tag_edit_control' ).show ();
				modal.Dismiss ();
			} );
		},
		function ()
		{
			unTagId = false;
		}
	);

	CTagAutoComplete.prototype.LoadPopularTags ( false );
}


function DeleteFeaturedTag( unTagId, strTagName )
{
	var modal = ShowConfirmDialog("Remove this tag?", "Are you sure you want to remove '%1$s' from your tag list?".replace(/%1\$s/, V_EscapeHTML( strTagName ) ) );
	modal.done(function(){
		$J.ajax ( {
			url: g_strCuratorAdminURL + 'ajaxedittagfilters/',
			data: {
				sessionid: g_sessionID,
				remove_tagid: unTagId
			},
			type: 'POST',
			cache: true
		} ).done( function ( data )
		{
			$J('#filtertags_container').replaceWith( data );
			$J('.tag_edit_control').show();
			modal.Dismiss();
		}).fail(function(xhr, status, thrown)
		{
			data = $J.parseJSON( xhr.responseText );
			ShowAlertDialog( 'Error', 'Error attempting to update with following message:<br/>%1$s'.replace( /%1\$s/g, data.msg ) );
			$J('.tag_edit_control').show();
			modal.Dismiss();
		} );
	});
}

function ShowAvatarHandle()
{
	var $container = $J('#curator_avatar_image');
	$container.addClass( 'editing' );

	$container.children( '.edit_overlay').remove();
	$container.children( '.edit_button').remove();

	var elOverlay = $J('<div class="edit_overlay"></div>');

	var elButton = $J('<div class="edit_button"><img src="https://store.cloudflare.steamstatic.com/public/images/v6/curator_edit_section.png"></div>');

	elButton.click( function(){
		elOptions.show();
	});

	elOverlay.append( elButton );
	$container.append( elOverlay );

	var elOptions = $J('<form class="edit_options"><p>'+"Edit your logo here, which also replaces the Steam community group Avatar. Your role must have '..edit group description and avatar?' permissions within your group to change the image.<br><br>Image should be a 184px x 184px .jpg or .png<br><br>Note: It will take a few minutes for image processing to complete before the uploaded logo appears on your page.<br><br>"+'</p></form>');

	var elClose = $J('<a class="btnv6_blue_hoverfade btn_small btn_uppercase cancelbtn"><span>'+"Close"+'</span></a>');
	elClose.on('click', function(){
		elOptions.hide();
	});

	var elUploadFrame = $J( '<iframe src="https://steamcommunity.com/actions/FileUploader?type=group_avatar_image&gId=' + g_strCuratorSteamID+ '&bgColor=262627" width="400" height="30" border="0" frameborder="no"></iframe>' );


	elOptions.hide();

	elOptions.append( WrapFormFieldWithLabel( "Avatar",  elUploadFrame ) );
	elOptions.append( WrapFormFieldWithLabel( '', $J('<div></div>').append(elClose) ) );
	$container.append(elOptions);

	// Force style recalc
	var foo = elOverlay[0].offsetWidth;
	elOverlay.addClass('visible');
}

function SetHeaderBackgroundToSavedValue( elSelectImage )
{
	var $headerContainer = $J('#header_container');
	var rgNodeData = $headerContainer.data('sectionConfig');
	if( !rgNodeData )
	{
		return;
	}

	elSelectImage.val( rgNodeData.background);
	elSelectImage.trigger( 'change' );
}

function ShowHeaderImageHandle( )
{
	var $container = $J('#header_curator_details');
	$container.addClass('editing');

		$container.children( '.edit_overlay').remove();
	$container.children( '.edit_button').remove();

	var elOverlay = $J('<div class="edit_overlay"></div>');

	var elButton = $J('<div class="edit_button"><img src="https://store.cloudflare.steamstatic.com/public/images/v6/curator_edit_section.png"></div>');

	elButton.click( function(){
		elOptions.show();
	});

	elOverlay.append( elButton );
	$container.append( elOverlay );


	var elOptions = $J('<form class="edit_options"><p>'+"Pick a .jpg or .png file to set as your background. Maximum 3MB file size. For best results, use an image sized 1500px wide and 220px tall.<br><br>Images must be appropriate for all audiences and not contain offensive or illegal content."+'</p></form>');

	var elSelectImage = $J("\r\n\t\t<select name=\"selectimage\">\r\n\t\t\t<option value=\"none\">None<\/option>\r\n\t\t<\/select>\r\n\t");
	var elUpload = $J("<input type=\"file\" name=\"clanimage\" value=\"@Upload\">");

	var elSave = $J('<a class="btnv6_blue_hoverfade btn_small btn_uppercase"><span>'+"Update"+'</span></a>');
	var elCancel = $J('<a class="btnv6_blue_hoverfade btn_small btn_uppercase cancelbtn"><span>'+"Cancel"+'</span></a>');

	var fnAddImage = function( idx, rgImageData )
	{
		var elOption = document.createElement('option');
		elOption.value =  rgImageData.image_hash + '.' + EClanImageFileTypeToString( rgImageData.file_type );
		elOption.textContent = rgImageData.file_name;
		elSelectImage.append(elOption);
	}

	elUpload.change( function(){
		var elForm = elOptions[0];
		CuratorUploadClanImage( g_clanGroupsWGAuthToken, elForm, function( data ) {
			fnAddImage(0, data);
			elSelectImage.val( data.image_hash + '.' + EClanImageFileTypeToString( data.file_type ) );
			elSelectImage.trigger('change');
		} );
		return false;
	});

	elSelectImage.change( function(){
		var val = elSelectImage.val();
		$J('.background_header_ctn').css( "background-image", 'url(' + g_strCommunityCDNUrl + val + ')' );
	});

		elCancel.on('click', function(){
		elOptions.hide();

		SetHeaderBackgroundToSavedValue( elSelectImage );
	});


	elSave.click( function(){

		$J.ajax ( {
			url: g_strCuratorAdminURL + 'ajaxupdatepagesection/',
			data: {
				sessionid: g_sessionID,
				takeover: elSelectImage.val()
			},
			type: 'POST',
			cache: true
		} ).done( function ( data )
		{
			elOptions.hide();
		}).fail(function(xhr, status, thrown)
		{
			data = $J.parseJSON( xhr.responseText );
			ShowAlertDialog( 'Error', 'Error attempting to update with following message:<br/>%1$s'.replace( /%1\$s/g, data.msg ) );
		} );

		return false;

	});

	$J.ajax ( {
		url: g_strCuratorAdminURL + '/ajaxgetclanimages/',
		type: 'GET'
	} ).done( function ( data )
	{
		if( data.success == 1)
		{
			$J.each(data.images, fnAddImage );
		}
		else
		{
			ShowAlertDialog( 'Error', 'Failed to get the images associated with this page. Details:<br/>%1$s'.replace( /%1\$s/g, data.msg ) );
		}

		SetHeaderBackgroundToSavedValue( elSelectImage );
	}).fail(function(xhr, status, thrown)
	{
		data = $J.parseJSON( xhr.responseText );
		ShowAlertDialog( 'Error', 'Failed to get the images associated with this page. Details:<br/>%1$s'.replace( /%1\$s/g, data.msg ) );
	} );

	elOptions.append( WrapFormFieldWithLabel( "Background image", elSelectImage ));
	elOptions.append( WrapFormFieldWithLabel( "Upload", elUpload ));
	elOptions.append( WrapFormFieldWithLabel( '', $J('<div></div>').append( elSave ).append(elCancel) ) );
	elOptions.hide();

	$container.append(elOptions);


	// Force style recalc
	var foo = elOverlay[0].offsetWidth;
	elOverlay.addClass('visible');
}


$J(function() {

	if( location.hash == "#edit" && g_bCanCurateApps)
	{
		ShowEditHandles ( g_bIsCreatorHome, g_bIsDLCPage );
		$J('.tag_edit_control').show();
	}


	if( typeof g_pagingData != "undefined" )
	{

		g_oPagingControls = new CAjaxPagingControls ( g_pagingData, g_strCuratorBaseURL + 'ajaxgetfilteredrecommendations/' );

		g_oPagingControls.SetPageChangingHandler ( function ( nPage )
		{
			StopInfiniteScroll();
			$J ( '#RecommendationsTable' ).addClass ( 'loading' );
		} );

		g_oPagingControls.SetPageChangedHandler ( function ( nPage )
		{
			$J ( '#RecommendationsTable' ).removeClass ( 'loading' );
			InitInfiniteScroll();
		} );

		g_oPagingControls.SetResponseHandler( function( response ) {
			g_pagingData.total_count = response.total_count;
		
			GDynamicStore.DecorateDynamicItems();

						if( ('bFiltering' in response) && !response.bFiltering && ('rgFacets' in response) ) {
				var rgFacets = $J.parseJSON(response.rgFacets);
				UpdateFilterTagCounts( rgFacets, 'type', 'filter_app_type_num_' );
				UpdateFilterTagCounts( rgFacets, 'tagids', 'filter_tagid_num_', response.total_count );
				UpdateFilterTagCounts( rgFacets, 'recommend', 'filter_recommend_type_', response.total_count );
			}

						if( 'apptypeoverride' in response && response.apptypeoverride )
			{
				$J( '#filter_app_type_' + response.apptypeoverride ).addClass('selected');
				$J( '#filter_app_type_all' ).removeClass('selected');
			}
		});

				UpdateRecommendationFilterData( false, false );
	}
});



