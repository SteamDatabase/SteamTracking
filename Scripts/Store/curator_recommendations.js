
var g_bInHashChange = false;
var g_oRecommendations = null;
var g_rgListData = [];

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
		'http://store.steampowered.com/curators/ajaxfollow',
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
			ShowAlertDialog( 'Error', 'There was a problem trying to follow the Steam Curator.' );
		}
	);
	return false;
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
	g_oRecommendations = new CAjaxInfiniteScrollingControls( oPagingData, 'https://store.steampowered.com/curators/ajaxgetcuratorrecommendations/' + oPagingData['clanid'] + '/' );
	g_oRecommendations.SetResponseHandler( function( response ) {
		OnRecommendationsRendered();
		$J( "#" + this.m_strElementPrefix + "Rows").InstrumentLinks();
	});

	InitSearchFilters();
}

function CuratorFieldToggle( elNode, strValue )
{
	var elInput = elNode.querySelector('input');
	if( elInput.value == strValue )
	{
		elNode.classList.remove('selected');
		elInput.value = '';
	}
	else
	{
		elNode.classList.add('selected');
		elInput.value = strValue;
	}

	UpdateCurationList();
}


function UpdateCurationList( )
{
	var elForm = document.getElementById('filter_box');
	var elTarget = document.getElementById('RecommendationsTable');

	var rgTags = elForm.querySelectorAll('*[name="tagids"]');

	var rgValues = [];
	for( var j=0; j<rgTags.length; j++ )
	{
		if ( rgTags[ j ].value )
		{
			rgValues.push ( rgTags[ j ].value );
		}
	}

	var strSort = elForm.querySelector('*[name="sortby"]').value;
	var strFilter = elForm.querySelector('*[name="filter"]').value;

	$J.ajax ( {
		url: g_strCuratorBaseURL + 'ajaxgetfilteredrecommendations/',
		data: {
			tagids: rgValues,
			sort: strSort,
			filter: strFilter
		},
		type: 'GET',
		cache: true
	} ).done( function ( data )
	{
		elTarget.innerHTML = data;
	});

}

function ShowEditHandles()
{
	$J('.page_section:not(.editing)').each(function( i, j ){

		var $container = $J(j);
		$container.addClass('editing');

		var elOverlay = $J('<div class="edit_overlay"></div>')

		var elButton = $J('<div class="edit_button"><img src="https://steamstore-a.akamaihd.net/public/images/v6/curator_edit_section.png"></div>');

		var rgNodeData = $container.data('sectionConfig');



		elButton.click( function(){
			elOptions.show();
		});

		elOverlay.append( elButton );
		$container.append( elOverlay );


		var elOptions = $J('<form class="edit_options"></form>');

		var elTypeSelect = $J("\r\n\t\t\t<select name=\"type\">\r\n\t\t\t\t<option value=\"featured_recommendations\">Recommendations carousel<\/option>\r\n\t\t\t\t<option value=\"featured_list\">Featured List<\/option>\r\n\t\t\t\t<option value=\"featured_tag\">Featured Tag<\/option>\r\n\t\t\t\t<option value=\"lists_block\">Lists block<\/option>\r\n\t\t\t<\/select>");

		elTypeSelect.val( rgNodeData.type );

		var elSortSelect = $J("\r\n\t\t\t<select name=\"sort\">\r\n\t\t\t\t<option value=\"recent\">Recent curations<\/option>\r\n\t\t\t\t<option value=\"topsellers\">Top Sellers<\/option>\r\n\t\t\t\t<option value=\"newreleases\">Release Date<\/option>\r\n\t\t\t<\/select>");

		elSortSelect.val( rgNodeData.sort );


		var elListId = $J('<input autocomplete="off" type="text" name="listid_label">').val( rgNodeData.listid_label );
		var elTagId = $J('<input autocomplete="off" type="text" name="tagid_label">').val( rgNodeData.tagid_label );

		var elListIdVal = $J('<input type="hidden" name="listid">').val( rgNodeData.listid );
		var elTagIdVal = $J('<input type="hidden" name="tagid">').val( rgNodeData.tagid );

		var elSave = $J('<a class="btnv6_blue_hoverfade btn_small btn_uppercase"><span>'+"Update"+'</span></a>');

		elTypeSelect.on('change',function(){
			switch( elTypeSelect.val() )
			{
				case 'featured_recommendations':
					elSortSelect.parent().removeClass('hidden');
					elListId.parent().addClass('hidden');
					elTagId.parent().addClass('hidden');
					break;
				case 'featured_list':
					elSortSelect.parent().addClass('hidden');
					elListId.parent().removeClass('hidden');
					elTagId.parent().addClass('hidden');
					break;
				case 'featured_tag':
					elSortSelect.parent().addClass('hidden');
					elListId.parent().addClass('hidden');
					elTagId.parent().removeClass('hidden');
					break;
				default:
					elSortSelect.parent().addClass('hidden');
					elListId.parent().addClass('hidden');
					elTagId.parent().addClass('hidden');
					break;
			}
		});

		elSave.click( function(){
			var elForm = elOptions[0];

			$J.ajax ( {
				url: g_strCuratorBaseURL + 'ajaxrenderpagesection/',
				data: {
					sessionid: g_sessionID,
					type: elForm.querySelector('*[name="type"]').value,
					listid: elForm.querySelector('*[name="listid"]').value,
					tagid: elForm.querySelector('*[name="tagid"]').value,
					sort: elForm.querySelector('*[name="sort"]').value,
					tagid_label: elForm.querySelector('*[name="tagid_label"]').value,
					listid_label: elForm.querySelector('*[name="listid_label"]').value,
					index: elForm.parentNode.dataset.index
				},
				type: 'POST',
				cache: true
			} ).done( function ( data )
			{
				$container.replaceWith( data );
				ShowEditHandles();
			});

			return false;

		});


		new CTextInputSuggest( elListId ,
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
						elListIdVal.val(g_rgListData[i].listid);
						return;
					}
				}
			}
		);

		new CTextInputSuggest( elTagId ,
			GetTagSuggestFunc( g_rgGlobalPopularTags ),
			function( suggestion )
			{
				for( var i=0; i<g_rgGlobalPopularTags.length; i++)
				{
					if( g_rgGlobalPopularTags[i].name == suggestion )
					{
						elTagIdVal.val(g_rgGlobalPopularTags[i].tagid);
						return;
					}
				}

			}
		);


		elOptions.append( WrapFormFieldWithLabel( "Section type", elTypeSelect ));
		elOptions.append( WrapFormFieldWithLabel( "Sort", elSortSelect ));
		elOptions.append( WrapFormFieldWithLabel( "Featured list", elListId ) );
		elOptions.append( WrapFormFieldWithLabel( "Featured tag", elTagId ) );
		elOptions.append( WrapFormFieldWithLabel( '', elSave ) );
		elOptions.append( elListIdVal );
		elOptions.append( elTagIdVal );
		elOptions.hide();

		elTypeSelect.trigger('change');

		$container.append(elOptions);


		// Force style recalc
		var foo = elOverlay[0].offsetWidth;
		elOverlay.addClass('visible');

	});

	LoadListData();
	CTagAutoComplete.prototype.LoadPopularTags(false);
}

function WrapFormFieldWithLabel( strLabel, elFormField )
{
	var elContainer = $J('<div></div>');
	var elLabel = $J('<div class="label">'+strLabel+'</div>');

	elContainer.append(elLabel);
	elContainer.append(elFormField);

	return elContainer
}

function LoadListData()
{
	if( this.bLoading )
		return;
	this.bLoading = true;

	$J.ajax ( {
		url: g_strCuratorBaseURL + 'ajaxgetlists/',
		data: {
			sessionid: g_sessionID,
		},
		type: 'POST'
	} ).done( function ( data )
	{
		g_rgListData = data.list_details;
	});

}

$J(function() {
	if( location.hash == "#edit")
		ShowEditHandles();
});



