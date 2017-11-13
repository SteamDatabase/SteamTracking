
// State for AJAX add to cart calls
g_nLastAjaxAddToCartResultTimestamp = 0;
g_nPendingAddToCartAjaxCalls  = 0;

//----------------------------------------------------------------------------------------------------------------------

function d( str )
{
	console.log( str );
}

function DoRedirect( strURL )
{
	window.location.href = strURL;
}

function DoHashRedirect( strKey, strValue )
{
	var state = {};
	state[ strKey ] = strValue;
	$.bbq.pushState( state, 0 );
}

function DoHashStateRedirect( state )
{
	$.bbq.pushState( state, 2 );
}

function BIsStringEmpty( str )
{
	return !str || str.length == 0;
}

function BIsBundle( nDefIndex )
{
	var rgAssetInfo = g_rgItemInfo[nDefIndex];
	return rgAssetInfo.bundle != undefined &&
		   parseInt( rgAssetInfo.bundle ) > 0;
}

function BIsPackBundle( nDefIndex )
{
	if ( !BIsBundle( nDefIndex ) )
		return false;

	var rgAssetInfo = g_rgItemInfo[nDefIndex];
	return rgAssetInfo.bundle_info.is_pack_bundle != undefined &&
	       parseInt( rgAssetInfo.bundle_info.is_pack_bundle ) > 0;
}

function RenderDropdownLabels()
{
	// Update dropdown labels
	var unDropdownPrefabID = GetDropdownPrefabIDForSelectedCategory();

	// This is fine -- the home tab has no dropdowns
	if ( unDropdownPrefabID === undefined )
		return;
	
	var DropdownConfig = g_rgDropdownData.prefabs[ unDropdownPrefabID ].config;

	for ( var iDropdown = 0; iDropdown < DropdownConfig.length; iDropdown++ )
	{
		var strDropdownID = DropdownConfig[ iDropdown ].dropdown_id;
		var strText = g_rgDropdownData.dropdowns[ strDropdownID ].label_text;

		$g_rgDropdownLabelElements[ strDropdownID ].text( strText );
	}
}

function GetHighlightColor( nDefIndex )
{
	return '#' + g_rgItemInfo[nDefIndex].highlight_color;
}

function UpdateItemCellBorder( $Cell, bActive )
{
	if ( !$Cell.data( 'shouldhighlight' ) )
		return;

	var nDefIndex = $Cell.data( 'defindex' );
	var $Border = $Cell.children( '.ItemImage' );

		var bIsImageLoaded = $Border.data( 'image-loaded' ) != 0;
	if ( !bIsImageLoaded )
		return;

	// Set the border color
	var strHighlightColor = GetHighlightColor( nDefIndex );
	var strToColor = '#262a2d';
	if ( bActive )
	{
		$Border.removeClass( 'ItemDetailsMiniPopupBorderInactive' );
		$Border.addClass( 'ItemDetailsMiniPopupBorderActive' );
		$Border.css( 'border-top-color', strHighlightColor );
		$Border.css( 'background-image', '-webkit-gradient(linear, 0 0, 0 100%, from(' + strHighlightColor + '), to(' + strToColor + '))' );
		$Border.css( 'background-image', '-webkit-linear-gradient(' + strHighlightColor + ', ' + strToColor + ')' );
		$Border.css( 'background-image', '-moz-linear-gradient(' + strHighlightColor + ', ' + strToColor + '), -moz-linear-gradient(' + strHighlightColor + ', ' + strToColor + ')' );
		$Border.css( 'background-image', '-o-linear-gradient(' + strHighlightColor + ', ' + strToColor + '), -o-linear-gradient(' + strHighlightColor + ', ' + strToColor + ')' );
		$Border.css( 'background-image', 'linear-gradient(' + strHighlightColor + ', ' + strToColor + '), linear-gradient(' + strHighlightColor + ', ' + strToColor + ')' );
	}
	else
	{
		$Border.removeClass( 'ItemDetailsMiniPopupBorderActive' );
		$Border.addClass( 'ItemDetailsMiniPopupBorderInactive' );

		$Border.css( 'border-top-color', '' );
		$Border.css( 'background-image', 'none' );
	}
}

function ShowAddToCartButton( $Cell, nDefIndex, bShow )
{
	var $HoverContentElem = $Cell.children( '.HoverContentContainer' )

	// Don't display the button if there is a spinner up
	var nBusy = $HoverContentElem.parent().data( 'busy' );
	if ( nBusy != undefined && nBusy != 0 )
		return;

	$TextElem = $Cell.children( '.ItemText' );

	if ( bShow )
	{
		$TextElem.hide();
		$HoverContentElem.show();
	}
	else
	{
		$TextElem.show();
		$HoverContentElem.hide();
	}
}


var g_ItemTooltip = {
	Init: function()
	{
		this.$m_Popup = $( '#ItemDetailsMiniPopup' );
		this.$m_LeftArrow = $( '#ItemDetailsMiniPopupBorderLeftArrow' );
		this.$m_RightArrow = $( '#ItemDetailsMiniPopupBorderRightArrow' );
		this.$m_ItemName = this.$m_Popup.find( '.Name' );
		this.$m_ItemDescription = this.$m_Popup.find( '#ItemDetailsMiniPopupDescription' );
		this.$m_ItemRarityGradient = this.$m_Popup.find( '.RarityCell' );
		this.$m_ItemRarityText = this.$m_ItemRarityGradient.find( '.Rarity' );
		this.$m_ItemUsageInfoText_UsedBy = this.$m_Popup.find( '.UsageInfo_UsedBy' );
		this.$m_ItemUsageInfoText_Slot = this.$m_Popup.find( '.UsageInfo_Slot' );
		this.$m_Portrait = this.$m_Popup.find( '.Portrait' );
		this.$m_Limited = this.$m_Popup.find( '.NoticeInfo' );
		this.$m_LimitedUseQuantity = this.$m_Limited.find( '.LimitedUseQuantity' );
		this.$m_SetInfo = this.$m_Popup.find( '.SetInfo' );
		this.$m_SetName = this.$m_Popup.find( '.SetName' );
		this.$m_SetItemCount = this.$m_Popup.find( '.SetItemCount' );
		this.$m_ItemAttributePrizePool = this.$m_Popup.find( '.ItemAttribute.PrizePool' );
		this.$m_ItemAttributeCompendium = this.$m_Popup.find( '.ItemAttribute.Compendium' );
		this.$m_ItemAttributeFantasy = this.$m_Popup.find( '.ItemAttribute.Fantasy' );
	},

		Hide: function()
	{
		this.$m_Popup.hide();
		this.$m_LeftArrow.hide();
		this.$m_RightArrow.hide();
	},

	Show: function( $Cell, nDefIndex )
	{
		if ( !$Cell.length )	// Checking $Cell existence here since it can be invalid sometimes
			return;

		$ItemImage = $Cell.find( '.ItemImage' );
		if ( !$ItemImage.length )
			return;

		var posItem = $ItemImage.offset();
		var strHighlightColor = GetHighlightColor( nDefIndex );

		// Build up the HTML for the popup and set it
		var rgItemInfo = g_rgItemInfo[nDefIndex];
		var rgDescriptions = rgItemInfo.localized.desc;
		var nPlayerClassID = rgItemInfo.player_class_ids[0];
		var strPlayerClassName = "All heroes";
		var strPortraitURL = g_strAllClassPortraitURL;
		var strSetName = rgItemInfo.localized.item_set != undefined ? rgItemInfo.localized.item_set : null;
		var strSetItemCount = rgItemInfo.set_item_count != undefined ? rgItemInfo.set_item_count : null;
		var flPrizePoolContributingAmount = rgItemInfo.prize_pool_contributing_usd_per_sale != undefined ? rgItemInfo.prize_pool_contributing_usd_per_sale : 0;

		// Setup set details
		if ( null != strSetName && null != strSetItemCount )
		{
			this.$m_SetName.html( strSetName );
			this.$m_SetItemCount.html( strSetItemCount );
			this.$m_SetInfo.show();
		}
		else
		{
			this.$m_SetInfo.hide();
		}

		if ( nPlayerClassID >= 0 &&
			 g_rgPlayerClassData[ nPlayerClassID ] != undefined )
		{
			if ( g_rgPlayerClassData[ nPlayerClassID ].portrait_url != undefined )
			{
				strPortraitURL = g_rgPlayerClassData[ nPlayerClassID ].portrait_url;
			}

			if ( g_rgPlayerClassData[ nPlayerClassID ].localized_text != undefined )
			{
				strPlayerClassName = g_rgPlayerClassData[ nPlayerClassID ].localized_text;
			}
		}

		this.$m_ItemName.html( rgItemInfo.localized.name );

		if ( rgItemInfo.limited )
		{
			this.$m_ItemDescription.html( GetDescriptionsHTML( nDefIndex, false, false ) );
			this.$m_ItemDescription.show();
		}
		else
		{
			this.$m_ItemDescription.hide();
		}

		var strRarity = rgItemInfo.rarity;
		var strRarityStyles = "RarityCell Rarity" + strRarity.substring(0,1).toUpperCase() + strRarity.substring(1);

		this.$m_ItemRarityGradient.removeClass().addClass( strRarityStyles );
		this.$m_ItemRarityText.html( rgItemInfo.localized.rarity );
		this.$m_ItemUsageInfoText_UsedBy.html( strPlayerClassName );

		var bIsBundle = BIsBundle( nDefIndex );
		var bHasSlot = rgItemInfo.localized.slot.length > 0;
		if ( !bIsBundle && bHasSlot )
		{
			this.$m_ItemUsageInfoText_Slot.html( rgItemInfo.localized.slot );
		}

		if ( strPortraitURL.length > 0 )
		{
			this.$m_Portrait.css( "background-image", "url( '" + strPortraitURL + "' )" );
		}

		
		if ( rgItemInfo.limited )
		{
			var nQuantity = rgItemInfo.quantity != undefined ? rgItemInfo.quantity : 1;
			this.$m_LimitedUseQuantity.html( nQuantity );
			this.$m_Limited.show();
		}
		else
		{
			this.$m_Limited.hide();
		}

		if ( flPrizePoolContributingAmount > 0 )
		{

			this.$m_ItemAttributePrizePool.find( '.ContributionAmount' ).html( FormatCurrency( 100 * flPrizePoolContributingAmount, 'USD', '.' ) );
			this.$m_ItemAttributePrizePool.show();
		}
		else
		{
			this.$m_ItemAttributePrizePool.hide();
		}

		if ( rgItemInfo.compendium_enabled )
		{
			this.$m_ItemAttributeCompendium.show();
		}
		else
		{
			this.$m_ItemAttributeCompendium.hide();
		}

		if ( rgItemInfo.fantasy_enabled )
		{
			this.$m_ItemAttributeFantasy.show();
		}
		else
		{
			this.$m_ItemAttributeFantasy.hide();
		}

		// Position the popup to the left or right?
		var nPopupX = posItem.left + $ItemImage.width() + 18;
		var $Arrow = this.$m_LeftArrow;
		var $OtherArrow = this.$m_RightArrow;
		var nArrowXPos = nPopupX - $Arrow.width() + 1;

		// Position to the left?
		if ( nPopupX > $( document ).width() / 2 )
		{
			nPopupX = Math.max( 20, $ItemImage.offset().left - this.$m_Popup.outerWidth() - 15 );	// TODO: Should be in CSS
			$Arrow = this.$m_RightArrow;	// Use the right arrow
			$OtherArrow = this.$m_LeftArrow;
			nArrowXPos = nPopupX + this.$m_Popup.outerWidth() - 1;
		}

		// Position the popup
		var nVerticalOffset = 0;
		this.$m_Popup.css(
			{
				'left': nPopupX,
				'top': posItem.top + nVerticalOffset
			}
		);

		// Position the arrow
		$Arrow.css(
			{
				'left': nArrowXPos,
				'top': posItem.top + nVerticalOffset + 20
			}
		);

		$OtherArrow.hide();	// Hide the other arrow

		this.$m_Popup.fadeIn( 100 );
		$Arrow.fadeIn( 100 );
	}
};

function SetupCartConfirmDlg()
{
	$( '#CartConfirmModal' ).overlay(
		{
			mask:
			{
				color: '#000',
				loadSpeed: 'fast'
			},
			closeOnClick: true,
			closeOnEsc: true,
			speed: 'fast',
			top: 'center',
			close: false
		}
	);
}

function CloseCartConfirmDlg()
{
	$( '#CartConfirmModal' ).overlay().close();
}

function Store_AddToCartAjax( Button, nDefIndex, strSourceHistory, strSessionID )
{
	var strContainerId = 'AddToCartButtonContainer_' + nDefIndex;
	var AddToCartButtonContainer = $( '#' + strContainerId );
	var $Cell = Button.parent();

	// Display the spinner
	ShowCartButtonSpinner( true, true );

	// Hide the button
	ShowAddToCartButton( $Cell, nDefIndex, false );

	// Hide the text, show the spinner
	if ( g_nPendingAddToCartAjaxCalls == 0 )
	{
		$( '#CartButtonText' ).hide();
	}

	g_nPendingAddToCartAjaxCalls++;

	// Set busy flag so we don't display the button on mouse over until we're done
	AddToCartButtonContainer.data( 'busy', 1 );

	// Hide the popup
	g_ItemTooltip.Hide();

	// Show the spinner div in the modal before we display the overlay
	$( '#CartConfirmModalSuccess' ).hide();
	$( '#CartConfirmSpinner' ).show();

	// Display the cart/continue shopping overlay
	$( "#CartConfirmModal" ).overlay().load();
	$( ".js_HasBorders" ).removeClass( "ItemDetailsMiniPopupBorderActive" );

	// Setup the spinner
	var opts = {
		lines: 11, // The number of lines to draw
		length: 8, // The length of each line
		width: 5, // The line thickness
		radius: 14, // The radius of the inner circle
		rotate: 0, // The rotation offset
		color: '#fff', // #rgb or #rrggbb
		speed: 1, // Rounds per second
		trail: 60, // Afterglow percentage
		shadow: false, // Whether to render a shadow
		hwaccel: true, // Whether to use hardware acceleration
		className: 'spinner', // The CSS class to assign to the spinner
		zIndex: 2e9, // The z-index (defaults to 2000000000)
		top: 'auto', // Top position relative to parent in px
		left: 'auto' // Left position relative to parent in px
	};
	
	$( '#CartConfirmSpinner' ).spin( opts );

	Common_AddToCartAjax(
		nDefIndex,
		strSourceHistory,
		strSessionID,
		function( json, strError )
		{
			var bSuccess = ( strError == undefined );

			// One less request pending
			g_nPendingAddToCartAjaxCalls--;

			// Hide the spinner
			ShowCartButtonSpinner( false );

			// Clear the busy flag - needs to happen before we can show the button again, if we need to
			AddToCartButtonContainer.data( 'busy', 0 );

			// ...update the item count in the cart button, even if aren't going to display the text yet
			if ( json != null )
			{
				var nTimestamp = json.timestamp;
				if ( nTimestamp >= g_nLastAjaxAddToCartResultTimestamp )
				{
					// Update timestamp
					g_nLastAjaxAddToCartResultTimestamp = nTimestamp;

					// Update the text - this is the most current data
					UpdateNumItemsInCartAbsolute( json.item_count );

					// Update the style to reflect an active cart
					$( '#CartButton' ).removeClass( 'NoItems' ).addClass( 'HasItems' );
				}
			}

			// If this is the last pending request, hide the spinner and show the text
			if ( g_nPendingAddToCartAjaxCalls == 0 )
			{
				$( '#CartButtonText' ).show();

				$( '#CartConfirmSpinner' ).fadeOut(
					'fast',
					function()
					{
						$( '#CartConfirmModalSuccess' ).fadeIn();
					}
				);
			}

			// Display any error message
			if ( !bSuccess )
			{
				CloseCartConfirmDlg();
				setTimeout(
					function()
					{
						GenericDialog.ShowErrorDialog( strError );
					},
					500
				);
			}
		}
	);
}

function GetDescriptionsHTML( nDefIndex, bMakeLinks, bListIncludedItems, bLastDescOnlyOverride )
{	
	var rgDescriptions = g_rgItemInfo[nDefIndex].localized.desc;

	if ( bLastDescOnlyOverride )
		var strHTML = '';
	else
		var strHTML = "<p class='Description'>" + ( ( rgDescriptions.length > 0 ) ? rgDescriptions[0].value : '' ) + "</p>";
 
	if ( bListIncludedItems )
	{
		// Go through the list quickly and determine if there is any use in having a list at all
		var bMakeList = false;
		for ( var i = 1; i < rgDescriptions.length; i++ )
		{
			if ( $.trim( rgDescriptions[i].value ).length > 0 && rgDescriptions[i].app_data.limited == undefined )
			{
				bMakeList = true;
				break;
			}
		}

		if ( bMakeList )
		{
			if ( bLastDescOnlyOverride )
			{
				for ( var i = rgDescriptions.length-1; i >= 0; i-- )
				{
					var rgDescription = rgDescriptions[i];

					// We deal w/ the limited text elsewhere
					if ( rgDescription.app_data.limited != undefined )
						continue;

					// Add an empty list element if the line is blank, to maintain the intended formatting
					if ( $.trim( rgDescription.value ).length == 0 )
					{
						continue;
					}
					strHTML += '<p class="Description">' + rgDescription.value + '</p>';
					break;
				}
			}
			else
			{		
				strHTML += "<ul>";
				for ( var i = 1; i < rgDescriptions.length; i++ )
				{
					var rgDescription = rgDescriptions[i];

					// We deal w/ the limited text elsewhere
					if ( rgDescription.app_data.limited != undefined )
						continue;

					// Add an empty list element if the line is blank, to maintain the intended formatting
					if ( $.trim( rgDescription.value ).length == 0 )
					{
						strHTML += "<li><br/></li>";
					}

					strHTML += "<li>";

					var bSetName = rgDescription.app_data != undefined &&
						       rgDescription.app_data.is_itemset_name != undefined &&
						       rgDescription.app_data.is_itemset_name;

					var bShouldMakeLink = bMakeLinks &&
							      rgDescription.app_data != undefined &&
							      rgDescription.app_data.def_index != undefined &&
							      g_rgItemInfo[ rgDescription.app_data.def_index ] != undefined &&
							      g_rgItemInfo[ rgDescription.app_data.def_index].for_sale != 0;

					var strValue = '';

					if ( bShouldMakeLink )
					{
						strValue += "<a href='" + g_rgItemInfo[ rgDescription.app_data.def_index ]['item_details_url'] + "'>";
					}

					strValue += rgDescription.value;

					if ( bShouldMakeLink )
					{
						strValue += "</a>";
					}

										if ( bSetName )
					{
						strHTML += "Part of the <span class='SetName'>" + strValue;
					}
					else
					{
						strHTML += strValue;
					}

					if ( bSetName )
					{
						strHTML += "</span> set:";
					}

					strHTML += "</li>";
				}
				strHTML += "</ul>";
			}
		}
	}

	if ( bLastDescOnlyOverride && strHTML == '' )
		strHTML = "<p class='Description'>" + rgDescriptions[0].value + "</p>";

	return strHTML;
}

function UpdateCartButtonItemCountText()
{
	var $Elem = $( '#NumItemsInCart' );
	if ( !$Elem.length )
		return;

	// Update the header
	$Elem.html( g_nNumItemsInCart );

	$CartButton = $( '#CartButton' );
	if ( !$CartButton.length )
		return;

	if ( g_nNumItemsInCart > 0 )
	{
		$CartButton.removeClass( 'NoItems' ).addClass( 'HasItems' );
	}
	else
	{
		$CartButton.removeClass( 'HasItems' ).addClass( 'NoItems' );
	}
}
		
function UpdateNumItemsInCart( nDelta )
{
	g_nNumItemsInCart += nDelta;
	UpdateCartButtonItemCountText();
}

function UpdateNumItemsInCartAbsolute( nCount )
{
	g_nNumItemsInCart = nCount;
	UpdateCartButtonItemCountText();
}

function BIsCartEmpty()
{
	return g_nNumItemsInCart == 0;
}

function ShowItemDetails( nDefIndex, strSourceHistory )
{
	var strURL = g_rgItemInfo[ nDefIndex ].item_details_url;
	if ( strSourceHistory && strSourceHistory.length > 0 )
		strURL = URLAddParameter( strURL, 'r', strSourceHistory );
	if ( !g_bIsAppIdDefaultForUniverse )
		strURL = URLAddParameter( strURL, 'appid', g_nAppID );

	DoRedirect( strURL );
}

function RedirectToStore()
{
	DoRedirect( g_strDotaStoreURL );
}

function RedirectToCart()
{
	DoRedirect( g_strDotaCartURL );
}

function BIsSubcategory( nCategoryID )
{
	return parseInt( g_rgStoreCategories[ nCategoryID ].parent_id ) != 0;
}

// If nCategory represents a tab, return that.
// If nCategory represents a subcategory, return its parent tab.
function GetTabForCategoryID( nCategoryID )
{
	return BIsSubcategory( nCategoryID ) ? g_rgStoreCategories[ nCategoryID ].parent_id : nCategoryID;
}

function ChangeCategory( nNewCategoryID, bAddToHistory, rgExtraHash )
{
	var bShouldRedirect = g_bRedirectOnTabClick != undefined && g_bRedirectOnTabClick;

	if ( !bShouldRedirect && bAddToHistory != undefined && bAddToHistory )
	{
		// Cache off tab state/category in history
		var rgNewState = typeof rgExtraHash !== 'undefined' ? rgExtraHash : {};
		rgNewState[HASHHISTORYNAME_CATEGORY] = nNewCategoryID;
		DoHashStateRedirect( rgNewState );
	}

	var nOldSelectedCategoryID = g_nSelectedCategoryID;
	var nOldSelectedTabID = g_nSelectedTabID;
	var nNewTabID = GetTabForCategoryID( nNewCategoryID );

	// Update selected tab
	g_nSelectedCategoryID = nNewCategoryID;
	g_nSelectedTabID = nNewTabID;

	if ( bShouldRedirect )
	{

		// Go to the store base page with the given tab selected
		var strRedirectURL = 'https://www.dota2.com/store/';

		if ( !g_bIsAppIdDefaultForUniverse )
		{
			strRedirectURL = URLAddParameter( strRedirectURL, 'appid', g_nAppID );
		}
		
		strRedirectURL += '#' + HASHHISTORYNAME_CATEGORY + '=' + g_nSelectedCategoryID;
		if ( typeof rgExtraHash !== 'undefined' )
		{
			for ( var k in rgExtraHash )
			{
				strRedirectURL += '&' + k + '=' + rgExtraHash[k];
			}
		}
		
		DoRedirect( strRedirectURL );
	}
	else
	{
		if ( nOldSelectedTabID != nNewTabID )
		{
			// Modify the style of the selected tab so that it's no longer active
			var nNumTabs = g_rgStoreTabs.length;
			for ( var iTab = 0; iTab < nNumTabs; iTab++ )
			{
				var nCurTabID = g_rgStoreTabs[ iTab ];
				var rgCurCategoryData = g_rgStoreCategories[ nCurTabID ];
				var $Tab = $( '#StoreTab_' + nCurTabID );

				if ( nCurTabID == nOldSelectedTabID )
				{
					$Tab.removeClass( 'StoreTabActive' ).addClass( 'DarkGrayButton' ).removeClass( 'GrayButton' );
				}
				else if ( nCurTabID == g_nSelectedTabID )
				{
					$Tab.addClass( 'StoreTabActive' ).removeClass( 'DarkGrayButton' ).addClass( 'GrayButton' );
				}
			}
		}
	}

	// Hide the popup
	if ( undefined != g_ItemTooltip )
	{
		g_ItemTooltip.Hide();
	}
}

function Common_DeleteCartQuantityCookie()
{
	$.cookie( "CartQuantity", null, { path: '/' } );
}

function Common_UpdateCartQuantityCookie( nNewQuantity )
{
	$.cookie( "CartQuantity", nNewQuantity, { path: '/', expires: 1 } );	}

function Common_GetCartQuantityFromCookie()
{
	return $.cookie( "CartQuantity" );
}

// fnCallback should take a single argument, which will be the resultant json
function Common_AddToCartAjax( nDefIndex, strSourceHistory, strSessionID, fnCallback )
{
	var rgParams = {
		action: 'add_to_cart',
		appid: g_nAppID,
		item_def: nDefIndex,
		sourcehistory: strSourceHistory,
		l: g_strLanguage,
		c: g_strCurrency,
		ajax: 1,
		sessionid: strSessionID
	};

	// Add to cart via AJAX
	$.post(
		"https://www.dota2.com/store/cart/",
		rgParams,
		function( json )
		{
			if ( fnCallback != undefined )
			{
				fnCallback( json );
			}

			if ( json.success != undefined && json.success )
			{
				Common_UpdateCartQuantityCookie( json.item_count );
			}
			else
			{
				Common_DeleteCartQuantityCookie();
			}
		}
	).error(
		function( jqXHR, e )
		{
			if ( fnCallback != undefined )
			{
				fnCallback( null, 'An error occurred while attempting to add an item to your cart. Please try again in a few minutes.' );
			}
		}
	);
}

function GetAssetTagValue( nDefIndex, strTagCategory, strKey )
{
	var rgTags = g_rgItemInfo[nDefIndex].tags;
	for ( var iTag = 0; iTag < rgTags.length; iTag++ )
	{
		if ( rgTags[iTag].category.toLowerCase() == strTagCategory.toLowerCase() )
			return rgTags[iTag][strKey];
	}

	return null;
}

$(
	function()
	{
		g_ItemTooltip.Init();
	}
);

