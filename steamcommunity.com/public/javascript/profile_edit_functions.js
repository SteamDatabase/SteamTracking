// <script>

function BindAvatarUploadControls()
{
	var $UploadInput = $J('#avatar_upload_input');
	if ( !$UploadInput.length )
		return;

	// make sure it doesn't get submitted with the main form
	$J('#editForm' ).on('submit', function() { $UploadInput.remove(); } );

	$J('#avatar_upload_button' ).click( function() {
		var $UploadForm = $J('#avatar_upload_form');
		var $UploadInputParent = $UploadInput.parent();
		var $UploadCtn = $J('#avatar_upload_ctn' );

		var $IFrame = $J('#avatar_upload_iframe');
		$IFrame.one( 'load', function() {
			$UploadInputParent.append( $UploadInput );
			$UploadCtn.removeClass('uploading');

			var rgJSON = V_ParseJSON( $IFrame.contents().text() );
			if ( !rgJSON || !rgJSON.success )
			{
				ShowAlertDialog( 'Upload your avatar' ,
					rgJSON && rgJSON.message ? rgJSON.message : 'There was an error processing your upload.  There may be an issue with the image file you selected.' );
			}
			else
			{
				if ( rgJSON.images && rgJSON.images[0] )
				{
					// upper-right corner block
					$J('.user_avatar.playerAvatar img').attr( 'src', rgJSON.images[0] );
					// avatar edit block
					$J('#avatar_icon_img' ).attr( 'src', rgJSON.images[0] );
				}
				if ( rgJSON.images && rgJSON.images['medium'] )
				{
					// upper-left corner block
					$J('.profile_small_header_avatar .playerAvatar img').attr( 'src', rgJSON.images['medium'] );
					// avatar edit block
					$J('#avatar_medium_img' ).attr( 'src', rgJSON.images['medium'] );
				}
				if ( rgJSON.images && rgJSON.images['full'] )
				{
					// avatar edit block
					$J('#avatar_full_img' ).attr( 'src', rgJSON.images['full'] );
				}
			}
		});

		$UploadCtn.addClass('uploading');
		$UploadForm.append( $UploadInput );
		$UploadForm.submit();
	});
}

g_rgShowcasePreviews = {};
g_rgShowcaseStyles = {};
g_rgShowcaseSelects = [];
function InitShowcaseEditors( cSlots )
{
	// store off the showcase preview elements that have been embedded in the page
	//	these will be displayed by the dropdowns when chosen.
	$J('#showcase_previews').children().each( function() {
		var eShowcaseType = this.getAttribute( 'data-eshowcasetype' );
		var nShowcasePurchaseID = this.getAttribute( 'data-purchaseid' );
		g_rgShowcasePreviews[eShowcaseType + '_' + nShowcasePurchaseID] = this;
		g_rgShowcaseStyles[eShowcaseType + '_' + nShowcasePurchaseID] = $J(this).children('.showcase_style_select_ctn').detach();
	});

	// bind all the select and next/previous events
	for ( var i=0; i < cSlots; i++ )
	{
		InitShowcaseEditor( 'showcase_' + i, i );
	}

	// fire all the onchange events for the dropdowns to make sure we have the right
	//	preview displayed and they have disabled the option in the other selects
	for ( var i = 0; i < g_rgShowcaseSelects.length; i++ )
	{
		g_rgShowcaseSelects[i].change();
	}

	InitSortables();
}

function InitSortables()
{
	$J("#showcases").sortable({
		items: ".sortable",
		handle: ".profile_showcase_drag_handle",
		placeholder: "profile_showcase_drag_and_drop_highlight",
		cursor: "move",
		forcePlaceholderSize: true,
		forceHelperSize: true,
		opacity: 0.5,
		tolerance: "pointer",
		containment: "parent"
	});
}

function OnChangeShowcasePosition( elem, bMovePrev )
{
	var showcase = $J( elem ).parents( '.profile_showcase_selector' );
	var parent = showcase.parent();

	if ( bMovePrev )
	{
		var prev = showcase.prev();
		if ( prev.length != 0 )
		{
			showcase.insertBefore( prev );
		}
	}
	else
	{
		var next = showcase.next();
		if ( next.length != 0 )
		{
			showcase.insertAfter( next );
		}
	}
}

function InitShowcaseEditor( strSelectID, iSlot )
{
	strSelectID = '#' + strSelectID;
	var $Select = $J( strSelectID + '_select' );
	var $PrevButton = $J( strSelectID + '_prev' );
	var $NextButton = $J( strSelectID + '_next' );
	var $StyleCtn = $J( strSelectID + '_style' );
	var $Previews = $J( strSelectID + '_previews' );
	var $PreviewsNone = $J( strSelectID + '_previews_none' );

	if ( !$Select.length )
		return;

	var fnOnSelectChange = function() { OnSelectChange( $Previews, $PreviewsNone, $StyleCtn, $Select, iSlot ); };
	$Select.change( fnOnSelectChange );
	$PrevButton.click( function( event ) {
		ChangeSelectedIndex( $Select, -1 );
		fnOnSelectChange();
		event.preventDefault();
	} );
	$NextButton.click( function( event ) {
		ChangeSelectedIndex( $Select, 1 );
		fnOnSelectChange();
		event.preventDefault();
	} );

	g_rgShowcaseSelects.push( $Select );
	$Select.data( 'lastval', -1 );
}

function OnSelectChange( $Previews, $PreviewsNone, $StyleCtn, $Select, iSlot )
{
	$Previews.children().detach();
	$StyleCtn.children().detach();

	var eShowcase = $Select.val();
	var eShowcasePrevious = $Select.data( 'lastval' );
	var nShowcasePurchaseID = $Select.find(":selected").data( 'purchaseid' );

	var nShowcaseSlot = $Select.data( 'slot' );
	var parent = $Select.parent();
    var targetClass = parent.parent();
	var elemPurchaseID = parent.find( '#showcase_' + nShowcaseSlot + '_purchaseid' );
	elemPurchaseID.val( nShowcasePurchaseID );

	if ( eShowcase != eShowcasePrevious )
	{
		for ( var i = 0; i < g_rgShowcaseSelects.length; i++ )
		{
			var $OtherSelect = g_rgShowcaseSelects[i];
			if ( $OtherSelect != $Select )
			{
				if ( eShowcasePrevious != 0 )
					SetSelectOptionDisabled( $OtherSelect, eShowcasePrevious, nShowcasePurchaseID, false );
				if ( eShowcase != 0 )
					SetSelectOptionDisabled( $OtherSelect, eShowcase, nShowcasePurchaseID, true );
			}
		}

		if ( eShowcase == 0 )
		{
            targetClass.removeClass( "has_showcase" );
			$PreviewsNone.show();
			$Previews.hide();
		}
		else
		{
            targetClass.addClass( "has_showcase" );
			$Previews.append( g_rgShowcasePreviews[ eShowcase + '_' + nShowcasePurchaseID ] );
			$StyleCtn.append( g_rgShowcaseStyles[ eShowcase + '_' + nShowcasePurchaseID ] );

			$PreviewsNone.hide();
			$Previews.show();
		}
		$Select.data( 'lastval', eShowcase );
	}
}

function SetSelectOptionDisabled( $Select, value, purchaseid, bDisable )
{
	var elSelect = $Select[0];
	for ( var i=0; i < elSelect.options.length; i++ )
	{
		var option = elSelect.options[i];
		var optionPurchaseID = $J( option ).data( 'purchaseid' );
		if ( option.value == value && purchaseid == optionPurchaseID )
		{
			option.disabled = bDisable;
			break;
		}
	}
}

function ChangeSelectedIndex( $Select, delta )
{
	var elSelect = $Select[0];

	do {
		elSelect.selectedIndex = ( elSelect.selectedIndex + elSelect.options.length + delta ) % elSelect.options.length;
	} while ( elSelect.options[elSelect.selectedIndex].disabled );
}

/* params should be object of appid, publishedfileid, etc */
function SetShowcaseConfig( eShowcase, purchaseid, iSlot, params )
{
	var rgParams = params || {};
	rgParams.customization_type = eShowcase;
	rgParams.purchaseid = purchaseid;
	rgParams.slot = iSlot;
	rgParams.sessionid = g_sessionID;

	return $J.post( g_rgProfileData['url'] + 'ajaxsetshowcaseconfig', rgParams );
}

function ShowcaseGatherSlots( eShowcase, purchaseid )
{
	var rgSlots = {};
	$J(g_rgShowcasePreviews[eShowcase + '_' + purchaseid]).find('[data-slotjson]').each( function() {
		var json = this.getAttribute( 'data-slotjson' );
		if ( json )
		{
			var SlotData = V_ParseJSON( json );
			rgSlots[ SlotData.slot ] = SlotData;
		}
	});
	return rgSlots;
}

function PreviewShowcaseConfigWithSlotChange( eShowcase, purchaseid, level, iSlot, rgSlot )
{
	// read the slot metadata embedded in the page
	var rgSlots = ShowcaseGatherSlots( eShowcase, purchaseid );
	rgSlots[iSlot] = rgSlot;
	PreviewShowcaseConfig( eShowcase, purchaseid, level, rgSlots );
}

function ShowcaseSetStyle( eShowcase, purchaseid, level, eShowcaseStyle )
{
	// PreviewShowcaseConfig will read the style
	PreviewShowcaseConfig( eShowcase, purchaseid, level, ShowcaseGatherSlots( eShowcase, purchaseid ) );
}

/* params should be object of appid, publishedfileid, etc */
function PreviewShowcaseConfig( eShowcase, purchaseid, level, rgSlotData )
{
	var rgParams = {};
	rgParams.customization_type = eShowcase;
	rgParams.purchaseid = purchaseid;
	rgParams.level = level;
	rgParams.sessionid = g_sessionID;
	rgParams.slot_data = V_ToJSON( rgSlotData );

	// if this showcase has styles, include that in the preview
	var $StyleSelect = $J('#showcase_style_' + eShowcase + '_' + purchaseid );
	if ( $StyleSelect.length )
		rgParams.customization_style = $StyleSelect.val();

	var key = eShowcase + '_' + purchaseid;

	$J.post( g_rgProfileData['url'] + 'ajaxpreviewshowcase', rgParams)
	.done( function( data ) {
		$J(g_rgShowcasePreviews[ key ]).html( data );
		g_rgShowcaseStyles[key] = $J(g_rgShowcasePreviews[key]).children('.showcase_style_select_ctn').detach();
	} ).fail( function() {
		ShowAlertDialog( 'Error', 'There was an error communicating with the network. Please try again later.');
	} );
}

function ShowcaseGamePicker( elSlot, eShowcase, purchaseid, level, iSlot, fnOnChange, rgFilteredGames )
{
	var $DialogContent = $J('<div/>', {'class': '' });
	$DialogContent.append( $J('<div/>', {'class': 'featured_game_dialog_header' }).text( 'Select one of your games to display as a Featured Game on your profile.' ) );
	$DialogContent.append( $J('<p/>', {'class': '' }).text( 'Enter the game\'s name' ) );
	var $Input = $J( '<input/>', {type: 'text', value: '', placeholder: 'Search games' } );
	$Input.attr( 'size', '45' );	/* jquery constructor ignores size for some reason, needs to be set here */
	$DialogContent.append( $Input );
	$Input.wrap( $J('<div/>', {'class': 'gray_bevel for_text_input' } ) );

	var Modal = ShowDialog( 'Select Featured Game', $DialogContent );
	$Input.focus();

	if ( !fnOnChange )
		fnOnChange = SetShowcaseGame;

	var fnOnSelect = function( Selector, game ) { fnOnChange( elSlot, eShowcase, purchaseid, level, iSlot, game ); Modal.Dismiss(); };
	var GameSelector = new CGameSelectorProfileShowcaseGames( $Input[0], null, null, fnOnSelect, rgFilteredGames );
}

function ShowcaseSalienCustomization()
{
	$J.ajax( {
		url: 'https://steamcommunity.com/saliengame/ajaxcustomizesalien',
		type: 'GET'
	}).done( function ( data ) {
		var $CustomizationDialog = $J( data.html );
		ShowConfirmDialog( 'Customize Your Salien', $CustomizationDialog.show(), 'Save', 'Cancel' )
			.done( function () {
				var $Form = $CustomizationDialog.find( 'form' );
				$J.ajax({
					type: $Form.attr( 'method' ),
					url: $Form.attr( 'action' ),
					data: $Form.serialize()
				}).done( function( data ) {
					$J( '#showcase_salien_body' ).prop( 'src', $Form.find( '#salien_body' ).prop( 'src' ) );
					$J( '#showcase_salien_eyes' ).prop( 'src', $Form.find( '#salien_eyes' ).prop( 'src' ) );
					$J( '#showcase_salien_mouth' ).prop( 'src', $Form.find( '#salien_mouth' ).prop( 'src' ) );
					$J( '#showcase_salien_arms' ).prop( 'src', $Form.find( '#salien_arms' ).prop( 'src' ) );
					$J( '#showcase_salien_legs' ).prop( 'src', $Form.find( '#salien_legs' ).prop( 'src' ) );
					if ( parseInt( $Form.find( "input:radio[name='salien_hat']:checked" ).val() ) != 0 )
					{
						if ( $J( '#showcase_salien_hat' ).length )
						{
							$J( '#showcase_salien_hat' ).prop( 'src', $Form.find( '#salien_hat' ).prop( 'src' ) );
						}
						else
						{
							$J( '#showcase_salien_mouth' ).after( '<img id="showcase_salien_hat" src="' + $Form.find( '#salien_hat' ).prop( 'src' ) + '">' );
						}
					}
					if ( parseInt( $Form.find( "input:radio[name='salien_hat']:checked" ).val() ) != 0 )
					{
						if ( $J( '#showcase_salien_shirt' ).length )
						{
							$J( '#showcase_salien_shirt' ).prop( 'src', $Form.find( '#salien_shirt' ).prop( 'src' ) );
						}
						else
						{
							$J( '#showcase_salien_mouth' ).after( '<img id="showcase_salien_shirt" src="' + $Form.find( '#salien_shirt' ).prop( 'src' ) + '">' );
						}
					}
				}).fail( function( data ) {
					ShowAlertDialog( 'Customize Your Salien', 'There was an error loading your Salien, please try again in a few minutes.' );
				});
			});
	}).fail( function () {
		ShowAlertDialog( 'Customize Your Salien', 'There was an error loading your Salien, please try again in a few minutes.' );
	});
}

function SetShowcaseGame( elSlot, eShowcase, purchaseid, level, iSlot, game )
{
	SetShowcaseConfig(
		eShowcase, purchaseid, iSlot, {appid: game.appid }
	).done( function( data ) {
			$J(elSlot).find('img').attr( 'src', data.logo );
			$J(elSlot).find('a').attr( 'href', 'https://steamcommunity.com/app/' + game.appid);
			$J(elSlot).find('.favorite_game_name').text( game.name );
			$J(elSlot).removeClass( 'openslot' );
	}).fail( function() {
			ShowAlertDialog( 'Select Featured Game', 'There was an error saving the featured game configuration.  Please try again later.' );
	});
}

function FavoriteGameShowcaseOnGameChange( elSlot, eShowcase, purchaseid, level, iSlot, game )
{
	// this will show for a moment before the real data loads from the backend
	$J(elSlot).find('img').attr( 'src', game.logo );
	$J(elSlot).find('a').attr( 'href', 'https://steamcommunity.com/app/' + game.appid);
	$J(elSlot).find('.favorite_game_name').text( game.name );
	$J(elSlot).removeClass( 'openslot' );

	var $Showcase = $J(elSlot).parents('.profile_customization');
	$Showcase.find('.showcase_stats_row').hide();
	$Showcase.find('.game_info_stats').hide();

	PreviewShowcaseConfigWithSlotChange( eShowcase, purchaseid, level, iSlot, { appid: game.appid } );
}

function AchievementsCompletionistGameShowcaseOnGameChange( elSlot, eShowcase, purchaseid, level, iSlot, game )
{
	SetShowcaseConfig(
		eShowcase, purchaseid, iSlot, {appid: game.appid }
	).done( function( data ) {
		$J(elSlot).find('img.game_capsule').attr( 'src', data.header );
		$J(elSlot).find('a').attr( 'href', 'https://steamcommunity.com/app/' + game.appid);
		$J(elSlot).find('.showcase_achievementscompletionist_game_num_achievements').text( game.num_achievements + ' / ' + game.num_achievements + ' Achievements' );
		$J(elSlot).removeClass( 'openslot' );
	}).fail( function() {
		ShowAlertDialog( 'Select Featured Game', 'There was an error saving the featured game configuration.  Please try again later.' );
	});
}

function OnReplayShowcaseYearChange( elForm, eShowcase, purchaseid, level, iSlot )
{
	const nYear = $J( elForm ).val();
	SetShowcaseConfig(
		eShowcase, purchaseid, iSlot, { replay_year: nYear }
	).done( function() {
		PreviewShowcaseConfigWithSlotChange( eShowcase, purchaseid, level, iSlot, { replay_year: nYear } );
	}).fail( function() {
		ShowAlertDialog( 'Year In Review', 'There was an error choosing your Year In Review. Please try again later.' );
	});
}

function ShowcaseRecommendationPicker( elSlot, eShowcase, purchaseid, level, iSlot )
{
	var Modal = ShowDialog( 'Select a Game You\'ve Publicly Reviewed', '<div class="group_invite_throbber"><img src="https://community.akamai.steamstatic.com/public/images/login/throbber.gif"></div>' );
	var $ListElement = $J('<div/>', {'class': 'newmodal_content_innerbg'} );

	var url = g_rgProfileData['url'] + 'ajaxgetrecommendedgames?public_only=1';
	$J.get( url, function( responseJSON ) {
		if ( !responseJSON || !responseJSON.success )
			return;

		Modal.GetContent().find( '.newmodal_content').html('');	// erase the throbber
		Modal.GetContent().find( '.newmodal_content').append( $ListElement );
		$ListElement.html( responseJSON.results_html );

		var rgPagingData = {
			'query': 'paging',
			'action': '',
			'total_count': responseJSON.total_count,
			'pagesize': responseJSON.pagesize,
			'prefix': 'ReviewedGames'
		};
		var gReviewedGames = new CAjaxPagingControls( rgPagingData, url );

		var funcHandleResponse = function( response ) {
			Modal.AdjustSizing();

			var rows = $ListElement.find( '.group_list_option' );
			rows.each( function () {
				var appid = this.getAttribute( 'data-appid' );
				var strAppLogoURL = this.getAttribute( 'data-applogo' );
				var strGroupName = $J(this).children('.group_list_groupname').text();
				if ( appid )
				{
					$J(this).click( function() {
						Modal.Dismiss();
						$J( elSlot ).find( '.showcase_openslot_placeholder').html('<img src="https://community.akamai.steamstatic.com/public/images/login/throbber.gif">');
						PreviewShowcaseConfigWithSlotChange( eShowcase, purchaseid, level, iSlot, { appid: appid } );
					} );
				}
			});
		};

		gReviewedGames.SetResponseHandler( funcHandleResponse );
		funcHandleResponse( responseJSON );
	});
}

function ShowcaseItemPicker( elSlot, eShowcase, purchaseid, iSlot, bTradableOnly )
{
	var url = g_rgProfileData['url'] + 'inventory/?modal=1&picker=1&showcase=1';

	if ( bTradableOnly )
		url += '&tradable_only=1';

	g_bModalModifyAnchorTargets = false;
	ShowModalContent( url, 'Select an item to feature on your profile', url, false );
	
	// the inventory picker dialog will call OnItemSelected when the user chooses an item in the dialog
	window.OnItemSelected = function( item ) {
		
		HideModalContent();
		
		// save the showcase config
		SetShowcaseConfig(
			eShowcase, purchaseid, iSlot, {appid: item.appid, item_contextid: item.contextid, item_assetid: item.assetid || item.id }
		).done( function() {
			var description = item.description || item;

			// we successfully set the item, so update the display
			var strImageURL = ( description.icon_url ? 'https://community.akamai.steamstatic.com/economy/image/' + v_trim( description.icon_url ) + '/96fx96f' : 'https://community.akamai.steamstatic.com/public/images/trans.gif' );
			var strBorderColor = '#' + ( description.name_color ? description.name_color : '3a3a3a' );
			var strBackgroundColor = '#' + ( description.background_color ? description.background_color : '292929' );

			$J(elSlot).find('img.item_image').attr( 'src', strImageURL ).attr( 'srcset', '' );
			$J(elSlot).css( 'border-color', strBorderColor );
			if ( eShowcase == 4 )
			{
				$J(elSlot).css( 'background-color', strBackgroundColor );
			}

			$J(elSlot).removeClass( 'openslot' );
		}).fail( function() {
			ShowAlertDialog( 'Select an item to feature on your profile', 'There was an error saving the featured item configuration.  Please try again later.' );
		});
	}
}

function ShowcaseClearItem( elSlot, eShowcase, purchaseid, iSlot )
{
	SetShowcaseConfig( eShowcase, purchaseid, iSlot, {appid: 0, item_contextid: 0, item_assetid: 0} );
	$J(elSlot).find('img.item_image').attr( 'src', 'https://community.akamai.steamstatic.com/public/images/trans.gif' ).attr( 'srcset', '' );
	$J(elSlot).css( 'border-color', '' );
	$J(elSlot).css( 'background-color', '' );
	$J(elSlot).addClass( 'openslot' );
}

function ShowcasePublishedFilePicker( elSlot, eShowcase, purchaseid, level, iSlot, strDialogTitle, strType, strDialogSubTitle )
{
	var url = g_rgProfileData['url'] + 'publishedfilebrowsepopup/' + strType + '/';

	var $Content = $J('<div/>', {'class': 'publishedfile_modal_content newmodal_sized_content' } );
	var $IFrame = $J('<iframe/>', {'class': 'publishedfile_modal_iframe', 'src': url } );
	var Modal = ShowDialog( strDialogTitle, $Content.append( $IFrame ), { strSubTitle: strDialogSubTitle } );

	$IFrame.load( Modal.GetBoundOnResizeEvent() );

	window.OnPublishedFileSelected = function( publishedfileid )
	{
		Modal.Dismiss();
		PreviewShowcaseConfigWithSlotChange( eShowcase, purchaseid, level, iSlot, { publishedfileid: publishedfileid } );
	};
}

var g_AchievementShowcaseLastApp = 0;
function ShowcaseAchievementPicker( elSlot, eShowcase, purchaseid, level, iSlot, rgGamesWithAchievements )
{
	var $Content = $J('<div/>', {'class': 'showcase_achievement_picker'} );
	var $SelectCtn = $J('<div/>', {'class': 'showcase_achievement_picker_select_ctn'});
	$SelectCtn.text( 'Game');

	var $Select = $J('<select/>', {'class': 'gray_bevel'} );
	$Select.append( $J('<option/>', {'value': 0}).text( '<None selected>' ) );
	for( var i = 0; i < rgGamesWithAchievements.length; i++ )
	{
		var $Option = $J('<option/>', { 'value': rgGamesWithAchievements[i].appid }).text( rgGamesWithAchievements[i].name );
		$Select.append( $Option );
	}

	$Select.val( g_AchievementShowcaseLastApp );


	var $SelectInstructions = $J('<div/>', {'class': 'showcase_achievement_picker_instructions' } ).text( 'Select a game to see your achievements from that game.' );

	var $AchievementCtn = $J('<div/>', {'class': 'showcase_achievement_picker_list'} );

	$Content.append( $SelectCtn.append( $Select ), $AchievementCtn.append( $SelectInstructions ) );

	var Modal = ShowAlertDialog( 'Select an achievement to feature', $Content, 'Cancel' );

	var appidCurrent = 0;
	var fnOnSelectChange = function() {
		var appid = $Select.val();
		if ( appid != appidCurrent )
		{
			g_AchievementShowcaseLastApp = appidCurrent = appid;
			if ( appid == 0 )
			{
				$AchievementCtn.children().detach();
				$AchievementCtn.append( $SelectInstructions );
			}
			else
			{
				$J.get( g_rgProfileData['url'] + 'ajaxgetachievementsforgame/' + appid, function( html ) {
					if ( appidCurrent == appid )
					{
						$AchievementCtn.children().detach();
						$AchievementCtn.append( html );

						$AchievementCtn.find( '.achievement_list_item').each( function() {
							var $Achievement = $J(this);
							$Achievement.click( function() {
								var statid = $Achievement.data('statid');
								var bit = $Achievement.data('bit');
								PreviewShowcaseConfigWithSlotChange( eShowcase, purchaseid, level, iSlot, { appid: appid, title: statid + '_' + bit } );
								Modal.Dismiss();
							} );
						});

						Modal.AdjustSizing();
					}
				} );
			}
		}
	};

	fnOnSelectChange();
	$Select.change( fnOnSelectChange );

}

function ShowcaseBadgePicker( elSlot, eShowcaseType, purchaseid, level, iSlot )
{
	ShowSelectBadgeDialog( function( Badge ) {
		var rgSlot;
		if ( Badge.appid )
		{
			rgSlot = {appid: Badge.appid, badgeid: Badge.item_type, border_color: Badge.border_color };
		}
		else
		{
			rgSlot = { appid: '', badgeid: '', border_color: '' };
			if ( !Badge.is_blank_badge )
				rgSlot.badgeid = Badge.badgeid;
		}
		PreviewShowcaseConfigWithSlotChange( eShowcaseType, purchaseid, level, iSlot, rgSlot );
	} );
}

var g_GroupListHTML = null;
function LoadPlayerGroupList( fnCallback )
{
	if ( !g_GroupListHTML )
	{
		$J.get( g_rgProfileData['url'] + 'ajaxgroupinvite?select_primary=1', function( html ) {
			g_GroupListHTML = html;
			fnCallback( html );
		} );
	}
	else
	{
		fnCallback( g_GroupListHTML );
	}
}

function ShowcaseGroupPicker( elSlot, eShowcase, purchaseid, level, iSlot, fnOnChange )
{
	var Modal = ShowDialog( 'Select a Group to Feature', '<div class="group_invite_throbber"><img src="https://community.akamai.steamstatic.com/public/images/login/throbber.gif"></div>' );
	var $ListElement = $J('<div/>', {'class': 'newmodal_content_innerbg'} );

	LoadPlayerGroupList( function( html ) {
		Modal.GetContent().find( '.newmodal_content').html('');	// erase the throbber
		Modal.GetContent().find( '.newmodal_content').append( $ListElement );
		$ListElement.html( html );
		Modal.AdjustSizing();
		$ListElement.children( '.group_list_results' ).children().each( function () {
			var groupid = this.getAttribute( 'data-groupid' );
			var strAvatarHash = this.getAttribute( '_groupavatarhash' );
			var strGroupName = $J(this).children('.group_list_groupname').text();
			if ( groupid )
			{
				$J(this).click( function() {
					Modal.Dismiss();
					$J( elSlot ).find( '.showcase_openslot_placeholder').html('<img src="https://community.akamai.steamstatic.com/public/images/login/throbber.gif">');
					PreviewShowcaseConfigWithSlotChange( eShowcase, purchaseid, level, iSlot, { steamid: groupid } );
				} );
			}
		});
	});
}


function PresentPrimaryClanDialog()
{
	var Modal = ShowDialog( 'Change primary group', '<div class="group_invite_throbber"><img src="https://community.akamai.steamstatic.com/public/images/login/throbber.gif"></div>' );
	var $ListElement = $J('<div/>', {'class': 'newmodal_content_innerbg'} );

	LoadPlayerGroupList( function( html ) {
		Modal.GetContent().find( '.newmodal_content').html('');	// erase the throbber
		Modal.GetContent().find( '.newmodal_content').append( $ListElement );
		$ListElement.html( html );
		Modal.AdjustSizing();
		$ListElement.children( '.group_list_results' ).children().each( function () {
			var groupid = this.getAttribute( 'data-groupid' );
			var strAvatarHash = this.getAttribute( '_groupavatarhash' );
			var strGroupName = $J(this).children('.group_list_groupname').text();
			if ( groupid )
			{
				$J(this).click( function() { SelectPrimaryGroup( Modal, groupid, strAvatarHash, strGroupName ); } );
			}
		});
	});
}

function SelectPrimaryGroup( Modal, groupid, strAvatarHash, strGroupName )
{
	Modal.Dismiss();
	$J('#primary_group_avatar').attr( 'src', GetAvatarURLFromHash( strAvatarHash, 'medium' ) );
	$J('#primary_group_name').text( strGroupName );
	$J('#primary_group_steamid').val( groupid );
}

function GetBackgroundURL( strBackgroundImage, strSize )
{
	return 'https://community.akamai.steamstatic.com/economy/profilebackground/' + strBackgroundImage + '?size=' + strSize + '&v=2';
}

var g_rgBackgroundData;
var g_rgBackgroundAppNames;
function PresentBackgroundSelectDialog()
{
	if ( $J.isEmptyObject( g_rgBackgroundData ) )
	{
		$J.post( g_rgProfileData['url'] + 'ajaxgetplayerbackgrounds', { 'sessionid' : g_sessionID }, function( rgResults )
		{
			if ( $J.isEmptyObject( rgResults.data ) || $J.isEmptyObject( rgResults.data.profilebackgroundsowned ) )
			{
				ShowAlertDialog( 'Error', 'An error was encountered while processing your request:');
			}
			else
			{
				g_rgBackgroundData = rgResults.data.profilebackgroundsowned;
				g_rgBackgroundAppNames = rgResults.data.backgroundappnames;
				g_rgBackgroundData.unshift( { name: 'Default', is_blank_background: true } );

				RenderProfileBackgroundSelectDialog();
			}

		} )
		.fail( function( jqXHR )
		{
			switch ( jqXHR.responseJSON.success )
			{
				case 21:
					ShowAlertDialog( 'Error', 'Missing or invalid form session key');
					break;

				case 2:
					ShowAlertDialog( 'Error', 'There was an error communicating with the network. Please try again later.');
					break;

				default:
					ShowAlertDialog( 'Error', 'An error was encountered while processing your request:');

			}

		} );
	}
	else
	{
		RenderProfileBackgroundSelectDialog();
	}
}

function RenderProfileBackgroundSelectDialog()
{
	var $Content = $J('<div/>', {'class': 'profile_background_select_area'} );
	var $Row = null;
	var Modal = null;	// this will be set later, but we define up here so we can capture in closures
	var fnOnImageLoad = function() { Modal.AdjustSizing(); };
	for ( var i = 0; i < g_rgBackgroundData.length; i++ )
	{
		var Background = g_rgBackgroundData[i];
		if ( !$Row )
		{
			$Row = $J('<div/>', {'class': 'profile_background_select_row'} );
			$Content.append( $Row );
		}

		var $BackgroundOption = $J('<div/>', {'class': 'profile_background_select_option_inner'} );

		if ( Background.is_blank_background )
		{
			$BackgroundOption.append( $J('<div/>', {'class': 'profile_background_blank' } ) );
			$BackgroundOption.append( $J('<div/>').text( Background.name ) );
		}
		else
		{
			$BackgroundOption.append( $J('<img/>', {'class': 'profile_background_select_image', src: GetBackgroundURL( Background.image_large, '252x160' ) }).load( fnOnImageLoad ) );
			$BackgroundOption.append( $J('<div/>').text( Background.name ) );
			$BackgroundOption.append( $J('<div/>').text( g_rgBackgroundAppNames[Background.appid] ) );
		}

		// use a factory here so we get the present value of Background, but capture the local Modal (not set yet)
		$BackgroundOption.click( (function( _Background ) { return function() {SelectBackground( Modal, _Background );}; } )(Background) );
		$Row.append( $BackgroundOption );

		$BackgroundOption.wrap( $J('<div/>', {'class': 'profile_background_select_option'} ) );

		if ( i % 2 == 1 )
		{
			$Row.append( $J('<div/>', {style: 'clear: both;' } ) );
			$Row = null;
		}
	}
	if ( $Row )
	{
		$Row.append( $J('<div/>', {style: 'clear: both;' } ) );
	}

	Modal = ShowDialog( 'Profile Background', $Content );
}

function SelectBackground( Modal, Background )
{
	Modal.Dismiss();
	SetCurrentBackground( Background );
}

function SetCurrentBackground( Background, strAppName )
{
	if ( Background.is_blank_background )
	{
		$J('#profile_background_current').hide();
		$J('#profile_background').val( '' );
	}
	else
	{
		$J('#profile_background_current_image').attr( 'src', GetBackgroundURL( Background.image_large, '140x90' ) );
		$J('#profile_background_current_name').text( Background.name );

		if ( g_rgBackgroundAppNames && typeof( g_rgBackgroundAppNames[ Background.appid ] ) !== 'undefined' )
		{
			$J('#profile_background_current_game').text( g_rgBackgroundAppNames[ Background.appid ] );
		}
		else if ( strAppName )
		{
			$J('#profile_background_current_game').text( strAppName );
		}

		$J('#profile_background').val( Background.communityitemid );

		$J('#profile_background_current').show();
	}
}

var g_rgBadgeData;
function InitBadges( rgBadges )
{
	g_rgBadgeData = rgBadges;
	g_rgBadgeData.unshift( {
		badgeid: '',
		communityitemid: '',
		name: '<No Featured Badge>',
		icon: 'https://community.akamai.steamstatic.com/public/images/trans.gif',
		xp: '',
		is_blank_badge: true
	} );
}

function PresentFavoriteBadgeDialog()
{
	ShowSelectBadgeDialog( SetCurrentBadge );
}

function ShowSelectBadgeDialog( fnOnSelect )
{
	var $Content = $J('<div/>', {'class': 'group_list_results'} );
	var Modal = null;	// this will be set later, but we define up here so we can capture in closures
	var fnOnImageLoad = function() { Modal.AdjustSizing(); };
	for ( var i = 0; i < g_rgBadgeData.length; i++ )
	{
		var Badge = g_rgBadgeData[i];
		var $Row = $J('<div/>', {'class': 'group_list_option badge_option' } );
		var $Icon = $J('<img/>', {'src': Badge.icon } );
		$Row.append( $Icon );
		$Icon.wrap( $J('<div/>', {'class': 'badge_icon' } ) );
		$Row.append( $J( '<div/>', {'class': 'group_list_groupname' } ).text( Badge.name ) );


		$Content.append( $Row );

		// use a factory here so we get the present value of Background, but capture the local Modal (not set yet)
		$Row.click( (function( _Badge ) { return function() { Modal.Dismiss(); fnOnSelect( _Badge ); }; } )(Badge) );
	}
	Modal = ShowDialog( 'Choose a badge to feature', $Content );
}

function SetCurrentBadge( Badge )
{
	$J('#favorite_badge_badgeid').val( Badge.badgeid );
	$J('#favorite_badge_communityitemid').val( Badge.communityitemid );

	if ( Badge.is_blank_badge )
	{
		$J('#favorite_badge_current').hide();
		$J('#profile_background').val( '' );
	}
	else
	{
		$J('#favorite_badge_img').attr( 'src', Badge.icon );
		$J('#favorite_badge_name').text( Badge.name );
		$J('#favorite_badge_xp').text( Badge.xp );

		$J('#favorite_badge_current').show();
	}
}

/* cruft begins here (some is still in use on new page) */

var groupSpamTimer;
function updateGroup(go)
{
	if(go == 1)
	{
		var groupList = document.getElementById('primaryGroup');
		addClass( 'primaryGroup', 'disabled' );
		currentDisabled['primaryGroup'] = true;
		groupList.blur();
		var activeGroup = groupList.options[groupList.selectedIndex].value;
		var postData = {
			"xml": 1,
			"type": "groupDetails",
			"groupId": activeGroup
		};
		createQuery2(baseEditUrl, receiveGroupDetails, postData);
	}
	else
	{
		//pause before requesting group info so people can scroll through the list without pausing at each entry to do a request
		if(groupSpamTimer)
		{
			clearTimeout(groupSpamTimer);
		}
		groupSpamTimer = setTimeout("updateGroup(1)", 100);
	}
}

var currentVals = new Array();
var currentDisabled = new Array();
function setupEditors()
{
	var tags = new Array('input','textarea','select');
	for( var y=0;y<tags.length;y++)
	{
		var inputs = document.getElementsByTagName(tags[y]);
		for( var x=0;x<inputs.length;x++)
		{
			var i = inputs[x];
			var thisClass = ' '+i.className+' ';
			if(thisClass.indexOf(' dynInput ') != -1 && (i.type == 'text' || tags[y] == 'textarea' || tags[y] == 'select'))
			{
				if(tags[y] == 'select')
				{
					currentVals[i.id] = i.value;
					if(i.id == 'country' || i.id == 'state' || i.id == 'city')
					{
						// country/state/city are interlinked, they use their own check/update handler
						addEvent(i, 'change', updateLocation, false);
					}
					else 
					{
						addEvent(i, 'change', checkField, false);
						if(i.id == 'primaryGroup')
						{
							addEvent(i, 'change', updateGroup, false);
						}
					}
				}
				else
				{
					currentVals[i.id] = i.value;
					addEvent(i, 'keyup', checkField, false);
				}
				currentDisabled[i.id] = false;
				addEvent(i, 'focus', checkAllowInput, false);
				// if there's an individual save button, attach save handler and hide button
				var saveButton;
				if(i.id.indexOf('weblink_') != -1)
				{
					var thisWLink = i.id.substr(8,1);
					saveButton = document.getElementById('save_weblink_'+thisWLink);
				}
				else
				{
					saveButton = document.getElementById('save_'+i.id);
				}
				if(saveButton)
				{
					addEvent(saveButton, 'click', saveField, false);
					if(!inClient || (tags[y] != 'input' && tags[y] != 'textarea'))
					{
						if ( saveButton.id != 'save_primaryGroup' || !forcePrimarySaveButton )
						{
							saveButton.style.visibility = 'hidden';
						}
					}
				}
			}
		}
	}
}

var saveBatches = new Array();
saveBatches['mainData'] = new Array(
	'personaName',
	'real_name',
	'headline',
	'summary'
);

function batchSave(batchList)
{
	var thisList = saveBatches[batchList];
	for(var x=0;x<thisList.length;x++)
	{
		saveField(false, thisList[x]);
	}
}

function validateFields()
{
	var bOk = true;
	if ( document.getElementById( 'personaName' ) && document.getElementById( 'personaName' ).value.length < 2 )
	{
		alert( 'Your Profile Name must be at least 2 characters long.' );
		bOk = false;
	}
	if ( document.getElementById( 'headline' ) && document.getElementById( 'headline' ).value.length > 255 )
	{
		alert( 'There is a maximum length of 255 characters for headlines. Please shorten it and try again.' );
		bOk = false;
	}
	if ( document.getElementById( 'summary' ) && document.getElementById( 'summary' ).value.length > 3000 )
	{
		alert( 'There is a maximum length of 3000 characters for summaries. Please shorten it and try again.' );
		bOk = false;
	}
	for( var x=1; x <= 3; x++ )
	{
		if ( document.getElementById( 'weblink_' + x + '_title' ) && document.getElementById( 'weblink_' + x + '_title' ).value.length > 128 )
		{
			alert( 'Website link titles can only be 128 characters in length' );
			bOk = false;
		}
		if ( document.getElementById( 'weblink_' + x + '_url' ) && document.getElementById( 'weblink_' + x + '_url' ).value.length > 128 )
		{
			alert( 'Website URLs can only be 128 characters in length' );
			bOk = false;
		}
	}
	if ( bOk )
	{
		document.getElementById( 'editForm' ).submit();
	}
}

function saveField(e, fId)
{
	if(!fId)
	{
		el = window.event ? window.event.srcElement : e ? e.target : null;
	}
	else
	{
		el = false;
	}
	if(el || fId)
	{
		var fieldId;
		if(!fId)
		{
			// id should be save_<associated field id>
			fieldId = el.id.substr(5);
		}
		else
		{
			fieldId = fId;
		}
		var dataField = document.getElementById(fieldId);
		if(currentDisabled[dataField.id])
		{
			return false;
		}
		if(dataField)
		{
			if(!fId)
			{
				el.value = 'Saving..';
				el.className = el.className.replace( /dynSave/, 'dynSaveDisabled' );
			}
			currentDisabled[dataField.id] = true;
			addClass( dataField.id, 'disabled' );
			dataField.blur();
			var newContent;
			if(dataField.tagName == 'SELECT')
			{
				newContent = dataField.options[dataField.selectedIndex].value;
			}
			else
			{
				newContent = dataField.value;
			}
			var postData = {
				"xml": 1,
				"type": "profile",
				"fieldId": fieldId,
				"newContent": newContent
			};
			createQuery2(baseEditUrl, receiveFieldSave, postData);
		}
	}
}

function receiveFieldSave()
{
	if(req.readyState == 4)
	{
		if(req.status == 200)
		{
			var response = req.responseXML.documentElement;
			var fieldId = response.getElementsByTagName('fieldId')[0].firstChild.nodeValue;
			var results = response.getElementsByTagName('results')[0].firstChild.nodeValue;
			updateInProgress = false;

				var dataField = document.getElementById(fieldId);
				dataField.disabled = false;
				var saveButton = document.getElementById('save_'+fieldId);
				if(saveButton)
				{
					saveButton.value = 'Save';
					saveButton.className = saveButton.className.replace( /dynSaveDisabled/, 'dynSave' );
				}
				if(results == "OK")
				{
					var newContent = response.getElementsByTagName('newContent')[0].firstChild.nodeValue;
					dataField.value = newContent;
					currentVals[fieldId] = dataField.value;
					removeClass( fieldId, 'changed' );
					removeClass( fieldId, 'disabled' );
					if(saveButton)
					{
						if(!inClient || (dataField.tagName != 'INPUT' && dataField.tagName != 'TEXTAREA'))
						{
							saveButton.style.visibility = 'hidden';
						}
					}
				}
				else
				{
					alert( "There was an error saving your changes.\\n\\nError:\\n&quot;+results+&quot;\\n\\nPlease address the error and try again." );
					addClass( dataField.id, 'changed' );
				}
				updateInProgress = false;
				currentDisabled[fieldId] = false;
		}
	}
}

function receiveGroupDetails()
{
	if(req.readyState == 4)
	{
		if(req.status == 200)
		{
			var response = req.responseXML.documentElement;
			updateInProgress = false;
			var results = response.getElementsByTagName('results')[0].firstChild.nodeValue;
			if(results == "OK")
			{
				var groupId = response.getElementsByTagName('groupId')[0].firstChild.nodeValue;
				var newGroupLink = response.getElementsByTagName('groupLink')[0].firstChild.nodeValue;
				var newGroupName = response.getElementsByTagName('groupName')[0].firstChild.nodeValue;
				var newGroupAbbreviation = response.getElementsByTagName('groupAbbreviation')[0].firstChild.nodeValue;
				var newGroupAvatar = response.getElementsByTagName('groupAvatar')[0].firstChild.nodeValue;
				
				document.getElementById('primaryGroupAvatarImage').src = newGroupAvatar;
				document.getElementById('groupLink').innerHTML = '<a href="'+newGroupLink+'">View '+newGroupName+'\'s profile</a>';
				
				var groupList = document.getElementById('primaryGroup');
				removeClass( 'primaryGroup', 'disabled' );
				if(groupList.selectedIndex == currentVals['primaryGroup'] ) 
				{
					removeClass( 'primaryGroup', 'changed' );
				}
				else
				{
					addClass( 'primaryGroup', 'changed' );
				}
				groupList.focus();
			}
			else
			{
				alert( "There was an error with your group selection.\\n\\nError:\\n&quot;+results+&quot;\\n\\nPlease address the error and try again." );
			}
			currentDisabled['primaryGroup'] = false;
		}
	}
}

function locationInteract(toggle)
{
	if(toggle == 'disable')
	{
		currentDisabled['country'] = true;
		currentDisabled['state'] = true;
		currentDisabled['city'] = true;
		document.getElementById('country').blur();
		document.getElementById('state').blur();
		document.getElementById('city').blur();
	}
	else if(toggle == 'enable')
	{
		currentDisabled['country'] = false;
		currentDisabled['state'] = false;
		currentDisabled['city'] = false;
	}
}
	
function receiveLocations()
{
	if(req.readyState == 4)
	{
		if(req.status == 200)
		{
			var response = req.responseXML.documentElement;
			updateInProgress = false;
			locationInteract('enable');
			var results = response.getElementsByTagName('results')[0].firstChild.nodeValue;
			if(results == "OK")
			{
				var countryList = document.getElementById('country');
				var stateList = document.getElementById('state');
				var cityList = document.getElementById('city');
				
				var changeType = response.getElementsByTagName('changeType')[0].firstChild.nodeValue;
				if(changeType == 'country')
				{
					countryList.focus();
					// user changed country, receiving states OR cities
					// clear existing lists
					clearList(stateList);
					clearList(cityList);
					
					// repopulate
					var newStates = populateList(stateList, response.getElementsByTagName('state'));
					var newCities = populateList(cityList, response.getElementsByTagName('city'));
					stateList.selectedIndex = 0;
					cityList.selectedIndex = 0;
					
					// see if it was states or cities we got back, adjust visibility accordingly
					if(newStates > 1)
					{
						if(countryList.value == currentVals['country'])
						{
							// we got states back, the original country is selected, re-select original state, go grab cities
							stateList.value = currentVals['state'];
							removeClass( 'state', 'disabled' );
							removeClass( 'state', 'changed' );
							if(stateList.selectedIndex > 0)
							{
								locationInteract('disable');
								var postData = {
									"xml": 1,
									"type": "locationUpdate",
									"country": countryList.options[countryList.selectedIndex].value,
									"state": stateList.options[stateList.selectedIndex].value
								};
								createQuery2(baseEditUrl, receiveLocations, postData);
							}
						}
						document.getElementById('stateContainer').style.display = '';
						document.getElementById('cityContainer').style.display = 'none';
					}
					else
					{
						if(countryList.value == currentVals['country'] && stateList.value == currentVals['state'] )
						{
							// we got cities back, the original country is selected, re-select original city
							cityList.value = currentVals['city'];
							removeClass( 'city', 'disabled' );
							removeClass( 'city', 'changed' );
						}
						document.getElementById('stateContainer').style.display = 'none';
						document.getElementById('cityContainer').style.display = '';
					}
				}
				else
				{
					stateList.focus();
					// user changed state, receiving just cities
					// clear existing list
					clearList(cityList);
					// repopulate
					newCities = populateList(cityList, response.getElementsByTagName('city'));
					cityList.selectedIndex = 0;
					if(countryList.value == currentVals['country'] && stateList.value == currentVals['state'])
					{
						// the country / state was changed back to the original, re-select original city
						cityList.value = currentVals['city'];
						removeClass( 'city', 'disabled' );
						removeClass( 'city', 'changed' );
					}
					// make visible
					document.getElementById('cityContainer').style.display = '';
				}

				currentVals['country'] = countryList.value;
				currentVals['state'] = stateList.value;
				currentVals['city'] = cityList.value;
			}
		}
	}
}
					
function clearList(listEl)
{
	while(listEl.firstChild != undefined)
	{
		listEl.removeChild(listEl.firstChild);
	}
}

function populateList(listEl, listItems)
{
	for( var x=0;x<listItems.length;x++)
	{
		var thisName = listItems[x].firstChild.nodeValue;
		var thisKey = listItems[x].getAttribute('key');
		var thisOpt = new Element( 'option', {value: thisKey} );
		thisOpt.update( thisName );
		listEl.appendChild(thisOpt);
	}
	return listItems.length;
}
			
function checkAllowInput(e)
{
	el = window.event ? window.event.srcElement : e ? e.target : null;
	if(el)
	{
		if(currentDisabled[el.id])
		{
			el.blur();
		}
	}
}	

function updateLocation(e)
{
	el = window.event ? window.event.srcElement : e ? e.target : null;
	if(el)
	{
		var eCountry = document.getElementById('country');
		var eCountryC = (eCountry.value != currentVals['country']) ? true : false;
		var eState = document.getElementById('state');
		var eStateC = (eState.value != currentVals['state']) ? true : false;
		var eCity = document.getElementById('city');
		var eCityC = (eCity.value != currentVals['city']) ? true : false;

		if ( !eCountryC && !eStateC && !eCityC )
			return;

		var cVal = el.selectedIndex;
		if(el.id == 'country')
		{
			// change of country field fired this event
			if(eCountryC)
			{
				// country has changed from original, set city and state to nothin
				eState.selectedIndex = 0;
				eCity.selectedIndex = 0;
				// set styles to changed
				addClass( 'country', 'changed' );
				addClass( 'state', 'changed' );
				addClass( 'city', 'changed' );
			}
			else
			{
				// country just got changed back to its original
				removeClass( 'country', 'changed' );
			}
			if(eCountry.selectedIndex == 0)
			{
				// (Do not display) selected
				eState.selectedIndex = 0;
				eCity.selectedIndex = 0;
				document.getElementById('stateContainer').style.display = 'none';
				document.getElementById('cityContainer').style.display = 'none';
			}
			else
			{
				// go get our states or cities
				locationInteract('disable');
				var postData = {
					"xml": 1,
					"type": "locationUpdate",
					"country": eCountry.value
				};
				createQuery2(baseEditUrl, receiveLocations, postData);
			}
		}
		else if(el.id == 'state')
		{
			// change of state field fired this event
			if(eCountryC || eStateC)
			{
				// country or state are changed, so city gets set to nothin
				eCity.selectedIndex = 0;
				addClass( 'state', 'changed' );
				addClass( 'city', 'changed' );
			}
			else
			{
				// state is returning to its original value (dependent on country also being its original value)
				removeClass( 'state', 'changed' );
			}
			if(eState.selectedIndex == 0)
			{
				document.getElementById('cityContainer').style.display = 'none';
			}
			else
			{
				// go get our cities
				locationInteract('disable');
				var postData = {
					"xml": 1,
					"type": "locationUpdate",
					"country": eCountry.value,
					"state": eState.value
				};
				createQuery2(baseEditUrl, receiveLocations, postData);
			}
		}
		else // id must be 'city'	
		{
			if(eCountryC || eStateC || eCityC)
			{
				addClass( 'city', 'changed' );
			}
			else
			{
				removeClass( 'city', 'changed' );
			}
		}
		
	}
}
function checkField(e)
{
	el = window.event ? window.event.srcElement : e ? e.target : null;
	if(el)
	{
		var cVal;
		if(el.tagName == 'SELECT')
		{
			cVal = el.selectedIndex;
		}
		else
		{
			cVal = el.value;
		}

		var changed = false;
		var saveButton;
		if(el.id.indexOf('weblink_') != -1)
		{
			var thisWLink = el.id.substr(8,1);
			var wtitle = document.getElementById('weblink_'+thisWLink+'_title');
			var wurl = document.getElementById('weblink_'+thisWLink+'_url');
			if(wtitle.value != currentVals['weblink_'+thisWLink+'_title'] || wurl.value != currentVals['weblink_'+thisWLink+'_url'])
			{
				changed = true;
			}
			saveButton = document.getElementById('save_weblink_'+thisWLink);
		}
		else
		{
			if(cVal != currentVals[el.id])
			{
				changed = true;
			}
			saveButton = document.getElementById('save_'+el.id);
		}
		if(changed)
		{
			// content has changed, show individual save button if there is one
			addClass( el.id, 'changed' );
			if(saveButton)
			{
				saveButton.style.visibility = 'visible';
			}
		}
		else
		{
			// content has not changed, hide save button if there is one
			removeClass( el.id, 'changed' );
			if(!inClient && saveButton)
			{
				saveButton.style.visibility = 'hidden';
			}
		}
	}
}

function removeClass( elID, cName )
{
	el = document.getElementById( elID );
	el.className = el.className.replace( cName, '' );
	if ( el.className == ' ' )
	{
		el.className = '';
	}
}

function addClass( elID, cName )
{
	var el = document.getElementById( elID );
	var tmpClass = ' ' + el.className + ' ';
	if ( tmpClass.indexOf( cName ) != -1 )
	{
		return; // already has specified class
	}
	if ( el.className == '' )
	{
		el.className = cName;
	}
	else
	{
		el.className += ' ' + cName;
	}
}

function UnlinkFacebook( from_page )
{
	PostToURLWithSession( 'https://steamcommunity.com/actions/FacebookAccountUnlink/', {from_page: from_page } );
}

function LinkFacebook( from_page )
{
	PostToURLWithSession( 'https://steamcommunity.com/actions/LinkMyFacebookProfile/', {from_page: from_page } );
}

function SteamUniversalOpenAvatarUpload()
{
	window.parent.postMessage( "openavataruploaddialog", 'http://steamloopback.host' );
}

