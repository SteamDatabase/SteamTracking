
var g_bInHashChange = false;


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

function CuratorFieldToggle( elNode, strValue, bForceReset )
{
	var bReset = elNode.classList.contains('all') || bForceReset;
	if( bReset )
	{
		$J('input', elNode.parentNode).each(function(i, j){
			$J(j).val('');
		});

		$J('a', elNode.parentNode).each(function(i, j){
			$J(j).removeClass('selected');
		});
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

	UpdateRecommendationFilterData( true );
}



function UpdateRecommendationFilterData( refresh )
{
	var elForm = document.getElementById('filter_box');
	var elTarget = document.getElementById('RecommendationsTable');

	var rgTags = elForm.querySelectorAll('*[name="tagids"]');
	var rgTypes = elForm.querySelectorAll('*[name="types"]');
	var rgSorts = elForm.querySelectorAll('*[name="sort"]');


	var rgValues = [];
	for( var j=0; j<rgTags.length; j++ )
	{
		if ( rgTags[ j ].value )
		{
			rgValues.push ( rgTags[ j ].value );
		}
	}

	var rgTypeValues = [];
	for( var j=0; j<rgTypes.length; j++ )
	{
		if ( rgTypes[ j ].value.length > 0 )
		{
			rgTypeValues.push ( rgTypes[ j ].value );
		}
	}

	var strSort = 'recent';

	for( var j=0; j<rgSorts.length; j++ )
	{
		if( rgSorts[j].value )
			strSort = rgSorts[j].value;
	}

	g_oPagingControls.SetStaticParameters({
		"tagids": rgValues.join(','),
		"sort": strSort,
		"types": rgTypeValues.join(',')
	});

	if( refresh )
		g_oPagingControls.GoToPage(0,true);
/*
	$J.ajax ( {
		url: g_strCuratorBaseURL + 'ajaxgetfilteredrecommendations/',
		data: ,
		type: 'GET',
		cache: true
	} ).done( function ( data )
	{
		elTarget.innerHTML = data;
		elTarget.classList.remove('loading');
	});*/

}

function ShowEditHandles()
{
	$J('.page_section:not(.editing)').each(function( i, j ){

		var $container = $J(j);
		$container.addClass('editing');

		var elOverlay = $J('<div class="edit_overlay"></div>');

		var elButton = $J('<div class="edit_button"><img src="https://steamstore-a.akamaihd.net/public/images/v6/curator_edit_section.png"></div>');

		var rgNodeData = $container.data('sectionConfig');
		if( !rgNodeData )
			return;



		elButton.click( function(){
			elOptions.show();
		});

		elOverlay.append( elButton );
		$container.append( elOverlay );


		var elOptions = $J('<form class="edit_options"></form>');

		var elTypeSelect = $J("\r\n\t\t\t<select name=\"type\">\r\n\t\t\t\t<option value=\"none\">None<\/option>\r\n\t\t\t\t<option value=\"featured_recommendations\">Recommendations carousel<\/option>\r\n\t\t\t\t<option value=\"featured_list\">Featured List<\/option>\r\n\t\t\t\t<option value=\"featured_tag\">Featured Tag<\/option>\r\n\t\t\t\t<option value=\"lists_block\">Lists block<\/option>\r\n\t\t\t\t<option value=\"discounted_curations\">Discounted<\/option>\r\n\t\t\t<\/select>");

		elTypeSelect.val( rgNodeData.type );

		var elSortSelect = $J("\r\n\t\t\t<select name=\"sort\">\r\n\t\t\t\t<option value=\"recent\">Recent reviews<\/option>\r\n\t\t\t\t<option value=\"topsellers\">Top Sellers<\/option>\r\n\t\t\t\t<option value=\"newreleases\">Release Date<\/option>\r\n\t\t\t<\/select>");

		elSortSelect.val( rgNodeData.sort );


		var elListName = $J('<span class="fieldvalue"></span>').text( rgNodeData.listid_label ? rgNodeData.listid_label : "Select..." );
		var elListEditButton = $J('<img src="https://steamstore-a.akamaihd.net/public/images/v6/curator_edit_section.png">');

		var elTagName = $J('<span class="fieldvalue"></span>').text( rgNodeData.tagid_label ? rgNodeData.tagid_label : "Select..." );
		var elTagEditButton = $J('<img src="https://steamstore-a.akamaihd.net/public/images/v6/curator_edit_section.png">');

		var elListId = $J('<input type="hidden" name="listid">').val( rgNodeData.listid );
		var elTagId = $J('<input type="hidden" name="tagid">').val( rgNodeData.tagid );

		var elSave = $J('<a class="btnv6_blue_hoverfade btn_small btn_uppercase"><span>'+"Update"+'</span></a>');
		var elCancel = $J('<a class="btnv6_blue_hoverfade btn_small btn_uppercase cancelbtn"><span>'+"Cancel"+'</span></a>');

		elTypeSelect.on('change',function(){
			switch( elTypeSelect.val() )
			{
				case 'featured_recommendations':
					elSortSelect.parent().removeClass('hidden');
					elListContainer.addClass('hidden');
					elTagContainer.addClass('hidden');
					break;
				case 'featured_list':
					elSortSelect.parent().addClass('hidden');
					elListContainer.removeClass('hidden');
					elTagContainer.addClass('hidden');
					break;
				case 'featured_tag':
					elSortSelect.parent().addClass('hidden');
					elListContainer.addClass('hidden');
					elTagContainer.removeClass('hidden');
					break;
				default:
					elSortSelect.parent().addClass('hidden');
					elListContainer.addClass('hidden');
					elTagContainer.addClass('hidden');
					break;
			}
		});

		elSave.click( function(){
			var elForm = elOptions[0];

			$J.ajax ( {
				url: g_strCuratorBaseURL + 'ajaxupdatepagesection/',
				data: {
					sessionid: g_sessionID,
					type: elTypeSelect.val(),
					listid: elListId.val(),
					tagid: elTagId.val(),
					sort: elSortSelect.val(),
					tagid_label: elTagName.text(),
					listid_label: elListName.text(),
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

		var elListContainer = WrapFormFieldWithLabel( "Featured list", $J('<div></div>').append(elListName, elListEditButton) );
		var elTagContainer = WrapFormFieldWithLabel( "Featured tag", $J('<div></div>').append(elTagName, elTagEditButton) );

		elOptions.append( WrapFormFieldWithLabel( "Section type", elTypeSelect ));
		elOptions.append( WrapFormFieldWithLabel( "Sort", elSortSelect ));
		elOptions.append( elListContainer );
		elOptions.append( elTagContainer );
		elOptions.append( WrapFormFieldWithLabel( '', $J('<div></div>').append( elSave ).append(elCancel) ) );
		elOptions.append( elListId );
		elOptions.append( elTagId );
		elOptions.hide();

		elTypeSelect.trigger('change');

		$container.append(elOptions);


		// Force style recalc
		var foo = elOverlay[0].offsetWidth;
		elOverlay.addClass('visible');

	});


	CTagAutoComplete.prototype.LoadPopularTags(false);

	if( g_bCanUploadHeader )
		ShowHeaderImageHandle();
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

	var modal = ShowAutocompleteDialog ( "Add to list", "Type the name of the item you'd like to add to this list.",
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
				url: g_strCuratorBaseURL + 'ajaxedittagfilters/',
				data: {
					sessionid: g_sessionID,
					add_tagid: unTagId
				},
				type: 'POST',
				cache: true
			} ).done ( function ( data )
			{
				document.getElementById ( 'filtertags_container' ).parentNode.innerHTML = data;
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
			url: g_strCuratorBaseURL + 'ajaxedittagfilters/',
			data: {
				sessionid: g_sessionID,
				remove_tagid: unTagId
			},
			type: 'POST',
			cache: true
		} ).done( function ( data )
		{
			document.getElementById('filtertags_container').parentNode.innerHTML = data;
			$J('.tag_edit_control').show();
			modal.Dismiss();
		});
	});

}

function ShowHeaderImageHandle()
{

	var $container = $J('#header_container');
	$container.addClass('editing');

	var elOverlay = $J('<div class="edit_overlay"></div>');

	var elButton = $J('<div class="edit_button"><img src="https://steamstore-a.akamaihd.net/public/images/v6/curator_edit_section.png"></div>');

	var rgNodeData = $container.data('sectionConfig');



	elButton.click( function(){
		elOptions.show();
	});

	elOverlay.append( elButton );
	$container.append( elOverlay );


	var elOptions = $J('<form class="edit_options"><p>'+"Pick a .jpg or .png file to set as your background. Maximum 3MB file size. For best results, use an image with height of 261px and at least 1500px wide.<br><br>Images must be appropriate for all audiences and not contain offensive or illegal content."+'</p></form>');

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
		var formData = new FormData(elForm);
		formData.append('sessionid', g_sessionID);
		formData.append('imagegroup', 2);
		formData.append('imagename', 'header');

		$J.ajax ( {
			url: g_strCuratorCommunityBaseURL + '/uploadimage/',
			data: formData,
			type: 'POST',
			cache: false,
			contentType: false,
			processData: false,
			crossDomain: true,
			xhrFields: { withCredentials: true }
		} ).done( function ( data )
		{
			if( data.success == 1 )
			{
				fnAddImage(0, data);
				elSelectImage.val( data.image_hash + '.' + EClanImageFileTypeToString( data.file_type ) );
				elSelectImage.trigger('change');
			}
			else
			{
				ShowAlertDialog( 'Error', "An error has occurred. Please try again later." );
			}
			
		}).fail( function( data ) {
			if( data && data.responseText )
			{
				var result = JSON.parse( data.responseText );
				if( result.message )
				{
					ShowAlertDialog( 'Error', V_EscapeHTML( result.message ) );
				}
				else
				{
					ShowAlertDialog( 'Error', "An error has occurred. Please try again later." );
				}
			}

		});

		return false;

	});

	elSelectImage.on('change', function(){
		var val = elSelectImage.val();
		$J('#page_background_container').css({backgroundImage: 'url(' + g_strCommunityCDNUrl + val + ')' });
	});

	elCancel.on('click', function(){
		elOptions.hide();
	});


	elSave.click( function(){

		$J.ajax ( {
			url: g_strCuratorBaseURL + 'ajaxupdatepagesection/',
			data: {
				sessionid: g_sessionID,
				takeover: elSelectImage.val()
			},
			type: 'POST',
			cache: true
		} ).done( function ( data )
		{
			elOptions.hide();
		});

		return false;

	});

	$J.ajax ( {
		url: g_strCuratorBaseURL + '/ajaxgetclanimages/',
		type: 'GET'
	} ).done( function ( data )
	{
		if( data.success == 1)
		{
			$J.each(data.images, fnAddImage );
		}

	});



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
		ShowEditHandles ();
		$J('.tag_edit_control').show();
	}


	if( typeof g_pagingData != "undefined" )
	{

		g_oPagingControls = new CAjaxPagingControls ( g_pagingData, g_strCuratorBaseURL + 'ajaxgetfilteredrecommendations/' );
		g_oPagingControls.SetPreRequestHandler ( function ()
		{
			UpdateRecommendationFilterData ();
		} );

		g_oPagingControls.SetPageChangingHandler ( function ( nPage )
		{
			$J ( '#RecommendationsTable' ).addClass ( 'loading' );
		} );
		g_oPagingControls.SetPageChangedHandler ( function ( nPage )
		{
			$J ( '#RecommendationsTable' ).removeClass ( 'loading' );
			BindStoreTooltip( $J('[data-store-tooltip]', $J ( '#RecommendationsTable' ) ) );
		} );

		UpdateRecommendationFilterData ();
	}



});


function EClanImageFileTypeToString( $eType )
{
	switch( $eType )
	{
		case 2: return 'gif';
		case 3: return 'png';
		case 1:
		default:
			return 'jpg';
	}

}



