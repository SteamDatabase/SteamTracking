
var CCountSelectorSlider = (function()
{
	function CCountSelectorSlider( title, min, max, oncomplete, oncancel )
	{
		this.m_title = title;
		this.m_min = min;
		this.m_max = max;
		this.m_oncomplete = oncomplete;
		this.m_oncancel = oncancel;

		this.m_popup = undefined;
	};

	CCountSelectorSlider.prototype.Show = function()
	{
		var layout =
			'<root>' +
				'<styles>' +
					'<include src="file://{resources}/styles/steamstyles.css" />' +
					'<include src="file://{resources}/styles/msgbox.css" />' +
					'<include src="https://steamcommunity-a.akamaihd.net/public/css/bigpicture/profile.css?v=valveisgoodatcaching&amp;l=english" />' +
					'<include src="https://steamcommunity-a.akamaihd.net/public/css/bigpicture/tradeoffer.css?v=valveisgoodatcaching" />' +
				'</styles>' +
				'<scripts>' +
					'<include src="https://steamcommunity-a.akamaihd.net/public/shared/javascript/bigpicture/base.js?v=valveisgoodatcaching&amp;l=english" />' +
				'</scripts>' +
				'<Panel defaultfocus="Count" >' +
					'<Panel id="InnerContent">' +
						'<Label id="Header" class="Header" />' +
						'<TextEntry id="Count" selectionpos="auto" tabindex="auto" text="1" />' +
						'<Slider id="CountSlider" direction="horizontal" selectionpos="auto" tabindex="auto" />' +
						'<Button id="OK" class="ActionColumnButton" selectionpos="auto" tabindex="auto" onactivate="$.DispatchEvent( \'ButtonOK\' );" >' +
							'<Label text="OK" />' +
						'</Button>' +
					'</Panel>' +
				'</Panel>' +
			'</root>';

		var popup = DisplayPopup( "CountSelectorPopup", layout );

		popup.FindChildTraverse("Header").text = this.m_title;

		var textentry = popup.FindChildTraverse( "Count" );
		textentry.RaiseChangeEvents( true );

		var slider = popup.FindChildTraverse( "CountSlider" );
		slider.min = this.m_min;
		slider.max = this.m_max;
		slider.increment = 1;

		var that = this;

		$.RegisterEventHandler( 'SliderValueChanged', popup, function() {
			if ( slider.value % 1 != 0 )
			{
				// Clamp to integer
				slider.value -= slider.value % 1;
			}

			if ( textentry.text != slider.value && textentry.text != '' )
			{
				textentry.text = slider.value;
			}
		} );

		$.RegisterEventHandler( 'TextEntryChanged', popup, function() {
			var val = Number(textentry.text);
			if ( val < that.m_min )
			{
				val = that.m_min;
			}
			if ( val > that.m_max )
			{
				val = that.m_max;
			}
			slider.value = val;
		} );

		$.RegisterEventHandler( 'TextEntrySubmit', popup, function() {
			var button = popup.FindChildTraverse( 'OK' );
			if ( button.enabled )
			{
				button.SetFocus();
			}
		} );


		slider.SetPanelEvent( 'onfocus', function() {
			textentry.text = slider.value;
		} );


		$.RegisterEventHandler( 'ButtonOK', popup, function() {
			var val = slider.value;
			that.m_oncomplete( val );
			ClosePopup('CountSelectorPopup');
			return true;
		} );

		$.RegisterEventHandler( 'Cancelled', popup, function() {
			that.m_oncancel();
			ClosePopup('CountSelectorPopup');
			return true;
		} );

		popup.SetFocus();

		this.m_popup = popup;

		return popup;
	};
	
	CCountSelectorSlider.prototype.SetValue = function( val )
	{
		if ( this.m_popup != undefined )
		{
			var slider = this.m_popup.FindChildTraverse( "CountSlider" );
			slider.value = val;
		}
	};

	return CCountSelectorSlider;
})();


var CTradeOfferSelection = (function()
{
	function CTradeOfferSelection( containerID )
	{
		this.m_containerID = containerID;
		this.m_pGrid = $("#" + this.m_containerID );

		this.m_rgItems = [];

		this.SetItemCount();
	}

	CTradeOfferSelection.prototype.FindItem = function( item )
	{
		//$.Msg( "Appid: " + item.appid + ", Contextid: " + item.contextid + ", ID: " + item.id );
		for ( var i = 0; i < this.m_rgItems.length; i++ )
		{
			var rgAsset = this.m_rgItems[i];
			//$.Msg( "Appid: " + rgAsset.appid + ", Contextid: " + rgAsset.contextid + ", ID: " + rgAsset.id );
			if ( rgAsset.appid == item.appid && rgAsset.contextid == item.contextid && rgAsset.id == item.id )
			{
				return i;
			}
		}
		return -1;
	};

	CTradeOfferSelection.prototype.AddItem = function( item, inventory, amount )
	{
		var i = this.FindItem( item );
		if ( i == -1 )
		{
			if ( item.is_stackable && amount == undefined )
			{
				var that = this;
				var title = 'Add %1$s from %2$s:'.replace( '%1$s', item.name).replace( '%2$s', inventory.GetContextName(item.appid, item.contextid) );
				var popup = new CCountSelectorSlider( title, 1, Number( item.amount ), function( val ) {
					that.AddItem( item, inventory, val ); }, function() {} );
				popup.Show();
				return;
			}

			var id = "Item_" + item.id;
			var p = CreateInventoryItemPanel( item, this.m_pGrid );

			var that = this;
			$.RegisterFooterButton( p, 'pad_a', 'REMOVE FROM TRADE' );
			p.SetPanelEvent( 'onactivate', function()
			{
				that.RemoveItem( item, inventory );
			} );

			p.SetPanelEvent( 'onfocus', function()
			{
				//$.Msg( JSON.stringify( item ) );
				var name_row = p.FindChildrenWithClassTraverse( "InventoryItemName" )[0];
				if ( name_row.IsValid() )
					if ( name_row.contentwidth > name_row.actuallayoutwidth )
						name_row.AddClass( 'Fade' );
			} );

			$.RegisterFooterButton( p, "pad_y", 'VIEW DETAILS' );
			$.RegisterKeyBind( p, 'pad_y,steampad_y', function()
			{
				var oDetail = $( '#RightDetail' );
				PopulateDetails( item, oDetail, true, inventory.m_rgAppContextData );
				ShowDetails( item, p, oDetail, false );
			} );

			if ( item.is_stackable )
			{
				SetAmountForStack( p, item, amount );
				item.amountintrade = amount;
			}


			var pInventory = inventory.m_pItemGrid.FindChild( id );
			if ( pInventory )
			{
				pInventory.AddClass( "Selected" );

				if ( item.is_stackable )
				{
					SetAmountForStack( pInventory, item, item.amount - amount );
				}
			}

			this.m_rgItems.push( item );


		}

		if ( this.GetItemCount() != 0 )
		{
			this.m_pGrid.GetParent().RemoveClass( "Empty" );
		}

		this.SetItemCount();

		ClearConfirm();
	};

	CTradeOfferSelection.prototype.RemoveItem = function( item, inventory )
	{
		var bConfirmed = $("#ConfirmButton").checked;
		var bLocked = $("#TradeOffer").BHasClass( "ViewOffer" ) || bConfirmed;
		if ( bLocked )
			return;

		var i = this.FindItem( item );
		if ( i != -1 )
		{
			var id = "Item_" + item.id;
			var p = this.m_pGrid.FindChild( id );
			if ( p != undefined )
			{
				p.DeleteAsync( 0.0 );
			}

			var pInventory = inventory.m_pItemGrid.FindChild( id );
			if ( pInventory )
			{
				pInventory.RemoveClass( "Selected" );

				if ( item.is_stackable )
				{
					SetAmountForStack( pInventory, item, item.amount );
					item.amountintrade = 0;
				}
			}

			this.m_rgItems.splice( i, 1 );
		}

		if ( this.GetItemCount() == 0 )
		{
			this.m_pGrid.GetParent().AddClass( "Empty" );
		}

		this.SetItemCount();

		ClearConfirm();
	};

	CTradeOfferSelection.prototype.BHasItem = function( item )
	{
		return this.FindItem( item ) != -1;
	};

	CTradeOfferSelection.prototype.GetItemCount = function()
	{
		return this.m_rgItems.length;
	};

	CTradeOfferSelection.prototype.SetItemCount = function()
	{
		this.m_pGrid.GetParent().GetParent().SetDialogVariableInt( "itemcount", this.GetItemCount() );
	};

	CTradeOfferSelection.prototype.GetItem = function( i )
	{
		return this.m_rgItems[i];
	};

	return CTradeOfferSelection;
})();

function SetAmountForStack( p, item, amount )
{
	var imglabel = p.FindChildTraverse( "Amount" );
	imglabel.text = amount;

	var name = p.FindChildTraverse( "Name" );
	name.text = $.html_entity_decode( amount + " " + item.name );
};

function ReturnToCenter()
{
	$.GetContextPanel().RemoveClass( "TheirItemsVisible" );
	$.GetContextPanel().RemoveClass( "YourItemsVisible" );
	$.DispatchEvent( 'SetContentTitle', g_strCenterTitle );
	$("#TradeOffer").SetFocus();
	return true;
}

function OnAddYourItems()
{
	$.GetContextPanel().RemoveClass( "TheirItemsVisible" );
	$.GetContextPanel().AddClass( "YourItemsVisible" );
	$.DispatchEvent( 'SetContentTitle', 'Inventory' );
	$("#YourInventoryListingWrapper").SetFocus();
}

function OnAddTheirItems()
{
	$.GetContextPanel().RemoveClass( "YourItemsVisible" );
	$.GetContextPanel().AddClass( "TheirItemsVisible" );
	$.DispatchEvent( 'SetContentTitle', g_strFriendsInventoryTitle );
	$("#TheirInventoryListingWrapper").SetFocus();
}

function OnItemSelected( item, p, inventory )
{
	//$.Msg( "Selected item:" );
	//$.Msg( JSON.stringify( item ) );
	//$.Msg( p.id );
	//$.Msg( inventory.m_containerID );

	var tradeOffer = inventory.GetInventoryParameter( 'tradeOffer' );

	if ( p.BHasClass( "Selected" ) )
	{
		tradeOffer.RemoveItem( item, inventory );
	}
	else
	{
		tradeOffer.AddItem( item, inventory );
	}
}

function BuildTradeStatus( tradestatus, bYours, tradeoffer )
{
	var userslots = bYours ? tradestatus.me: tradestatus.them;
	var slots = userslots.assets; // BUGBUG: Currency
	slots.length = 0;

	for ( var i = 0; i < tradeoffer.GetItemCount(); i++ )
	{
		var item = tradeoffer.GetItem( i );
		$.Msg( item.id );
		var oSlot = {
			appid: item.appid,
			contextid: item.contextid,
			amount: item.is_stackable ? item.amountintrade : 1,
			assetid: item.id // BUGBUG: currency
		};
		slots.push( oSlot );
	}
}

function OnMakeOffer()
{
	SendTradeOffer();
}

function OnAcceptOffer()
{
	SendAcceptOffer();
}

function OnDeclineOfferFailure( jqHXR )
{
	$.Msg( "Fail: " + JSON.stringify( jqHXR ) );
	var data = JSON.parse( jqHXR.responseText.replace( '\u0000', '' ) );
	$.TenfootController( $.GetContextPanel() ).ShowMessageBox(
		$.TenfootMsgBox.k_EMsgBoxButton_OK,
		'Error',
		data && data.strError ? data.strError : 'There was an error modifying this trade offer.  Please try again later.' );
}

function OnDeclineOfferHelper( tradeofferid, onok )
{
	var strTitle = 'Decline Trade';
	var strText = 'Are you sure you want to decline this trade offer?';

	var pMsgBox = $.TenfootController( $.GetContextPanel() ).ShowMessageBox(
		$.TenfootMsgBox.k_EMsgBoxButton_OK | $.TenfootMsgBox.k_EMsgBoxButton_Cancel,
		strTitle,
		strText );
	$.RegisterEventHandler( 'ButtonOK', pMsgBox, onok );
}

function OnDeclineOffer( tradeofferid )
{
	OnDeclineOfferHelper( tradeofferid, function() {
		StartInProgress();
		SendDeclineOffer( tradeofferid,
				function( data ) {
					$.Msg( "Success: " + JSON.stringify( data ) );
					CloseTradeOffer();
				},
				OnDeclineOfferFailure,
				function()
				{
					EndInProgress();
				}
		);
	} );
}


function OnDeclineOfferFromList( tradeofferid )
{
	OnDeclineOfferHelper( tradeofferid, function() {
		$.GetContextPanel().AddClass( "InProgress" );
		SendDeclineOffer( tradeofferid,
			function( data ) {
				$.Msg( "Success: " + JSON.stringify( data ) );
				var offer = $("#TradeOfferList").FindChildTraverse( 'tradeofferid_' + tradeofferid );
				offer.DeleteAsync( 0 );
			},
			OnDeclineOfferFailure,
			function()
			{
				$.GetContextPanel().RemoveClass( "InProgress" );
			}
		);
	} );
}


function ShowAlert( strTitle, strText )
{
	var pMsgBox = $.TenfootController( $.GetContextPanel() ).ShowMessageBox(
		$.TenfootMsgBox.k_EMsgBoxButton_OK,
		strTitle,
		strText );
	var label = pMsgBox.FindChildTraverse( "MsgBoxContents");
	label.html = true;
	label.text = strText;

	return pMsgBox;
}

function StartInProgress()
{
	$.GetContextPanel().AddClass( "InProgress" );
	UpdateButtonStates();
}

function EndInProgress()
{
	$.GetContextPanel().RemoveClass( "InProgress" );
	UpdateButtonStates();
}

function SendTradeOffer()
{
	BuildTradeStatus( g_rgCurrentTradeStatus, true, g_tradeOfferYours );
	BuildTradeStatus( g_rgCurrentTradeStatus, false, g_tradeOfferTheirs );

	var rgParams = {
		sessionid: g_SessionID,
		serverid: 1,		partner: g_steamIDPartner,
		tradeoffermessage: $("#AddMessage") ? $("#AddMessage").text : '',
		json_tradeoffer: JSON.stringify( g_rgCurrentTradeStatus ),
		captcha: undefined
	};

	if ( g_TradeOffer != null )
	{
		rgParams['tradeofferid_countered'] = g_TradeOffer.tradeofferid;
	}

	if ( g_rgTradeOfferCreateParams != null )
	{
		rgParams['trade_offer_create_params'] = JSON.stringify( g_rgTradeOfferCreateParams );
	}

	StartInProgress();

	$.AsyncWebRequest( 'https://steamcommunity.com/tradeoffer/new/send',
	{
		type: 'POST',
		data: rgParams,
		success: function( data ) {
			$.Msg( "Success: " + JSON.stringify( data ) );

			var bNeedsEmailConfirmation = data && data.needs_email_confirmation;
			var bNeedsMobileConfirmation = data && data.needs_mobile_confirmation;
			var strTitle;
			var strText;
			if ( bNeedsMobileConfirmation )
			{
				strTitle = 'Additional confirmation needed';
				strText = 'In order to send this trade offer, you must verify it in your Steam Mobile app. You can verify it by launching the app and navigating to the Confirmations page from the menu.';
			}
			else if ( bNeedsEmailConfirmation )
			{
				// Show email confirmation popup and exit
				strTitle = 'Additional confirmation needed';
				strText = 'In order to send this trade offer, you must complete an additional verification step.  An email has been sent to your address (ending in "%s") with additional instructions.'.replace( /%s/, data.email_domain );
			}
			else
			{
				// Show offer sent popup and exit
				strTitle = 'Trade Offer Sent';
				strText = 'Success!  Your trade offer has been sent to %s.<br><br>You can manage your outstanding trade offers from your Sent Trade Offers page.'.replace( /%s/, g_strTradePartnerPersonaName );
			}
			var pMsgBox = ShowAlert( strTitle, strText );
			$.RegisterEventHandler( 'ButtonOK', pMsgBox, function()
			{
				CloseTradeOffer();
			} );
		},
		error: function(jqHXR)
		{
			$.Msg( "Fail: " + JSON.stringify( jqHXR ) );
			$("#TradeOffer").RemoveClass( "InProgress" );
			var data = JSON.parse( jqHXR.responseText.replace( '\u0000', '' ) );
			$.TenfootController( $.GetContextPanel() ).ShowMessageBox(
				$.TenfootMsgBox.k_EMsgBoxButton_OK,
				'Error',
				data && data.strError ? data.strError : 'There was an error sending your trade offer.  Please try again later.' );
		},
		complete: function()
		{
			EndInProgress();
		}
	} );

}

function SendAcceptOffer()
{
	var nTradeOfferId = g_TradeOffer.tradeofferid;
	var rgParams = {
		sessionid: g_SessionID,
		serverid: 1,		tradeofferid: nTradeOfferId,
		partner: g_steamIDPartner,
		captcha: undefined
	};

	StartInProgress();
	$.AsyncWebRequest( 'https://steamcommunity.com/tradeoffer/' + nTradeOfferId + '/accept',
		{
			type: 'POST',
			data: rgParams,
			success: function( data ) {
				$.Msg( "Success: " + JSON.stringify( data ) );

				var bNeedsEmailConfirmation = data && data.needs_email_confirmation;
				var bNeedsMobileConfirmation = data && data.needs_mobile_confirmation;
				var strTitle;
				var strText;
				if ( bNeedsMobileConfirmation )
				{
					strTitle = 'Additional confirmation needed';
					strText = 'In order to complete this trade, you must verify it in your Steam Mobile app. You can verify it by launching the app and navigating to the Confirmations page from the menu.';
				}
				else if ( bNeedsEmailConfirmation )
				{
					// Show email confirmation popup and exit
					strTitle = 'Additional confirmation needed';
					strText = 'In order to complete this trade, you must complete an additional verification step.  An email has been sent to your address (ending in "%s") with additional instructions.'.replace( /%s/, data.email_domain );

					var pMsgBox = ShowAlert( strTitle, strText );
					$.RegisterEventHandler( 'ButtonOK', pMsgBox, function()
					{
						CloseTradeOffer();
					} );
				}
				else
				{
					$.Msg( JSON.stringify( data ) );
					// Display receipt
					if ( data.tradeid )
					{
						$.Msg( "Got tradeid: " + data.tradeid );
						DisplayReceipt( tradeid );
					}
					else
					{
						CloseTradeOffer();
					}
				}
			},
			error: function(jqHXR)
			{
				$.Msg( "Fail: " + JSON.stringify( jqHXR ) );
				var data = JSON.parse( jqHXR.responseText.replace( '\u0000', '' ) );
				$.TenfootController( $.GetContextPanel() ).ShowMessageBox(
					$.TenfootMsgBox.k_EMsgBoxButton_OK,
					'Error',
					data && data.strError ? data.strError : 'There was an error accepting this trade offer.  Please try again later.' );
			},
			complete: function()
			{
				EndInProgress();
			}
		} );

}

function SendDeclineOffer( nTradeOfferId, onsuccess, onerror, oncomplete )
{

	var rgParams = {
		sessionid: g_SessionID,
	};

	$.AsyncWebRequest( 'https://steamcommunity.com/tradeoffer/' + nTradeOfferId + '/decline',
		{
			type: 'POST',
			data: rgParams,
			success: onsuccess,
			error: onerror,
			complete: oncomplete
		} );
}

function ClearConfirm()
{
	var pConfirmButton = $("#ConfirmButton");
	pConfirmButton.checked = !pConfirmButton.checked;
}

function OnConfirm()
{
	var pConfirmButton = $("#ConfirmButton");
	var bChecked = pConfirmButton.checked;
	//
	// Check and pop various warnings.
	//
	var strTitle;
	var strText;

	if ( bChecked && g_tradeOfferTheirs.GetItemCount() == 0 )
	{
		// Gift warning
		strTitle = 'Warning';
		strText = 'You have not selected any items for %s to offer in exchange for yours.  If %s accepts this trade, you will lose the items you\'ve offered but will not receive any items.'.replace( /%s/g, g_strTradePartnerPersonaName );
	}

	// BUGBUG: What other warnings?

	if ( strTitle )
	{
		var pMsgBox = $.TenfootController( $.GetContextPanel() ).ShowMessageBox(
			$.TenfootMsgBox.k_EMsgBoxButton_OK | $.TenfootMsgBox.k_EMsgBoxButton_Cancel,
			strTitle,
			strText );
		$.RegisterEventHandler( 'ButtonOK', pMsgBox, function()
		{
			UpdateButtonStates();
		} );
		$.RegisterEventHandler( 'ButtonCancel', pMsgBox, function()
		{
			ClearConfirm();
		} );
	}
	else
	{
		UpdateButtonStates();
	}
}

function ClearConfirm()
{
	$("#ConfirmButton").checked = false;
	UpdateButtonStates();
}

function UpdateButtonStates()
{
	var bMsgInProgress = $.GetContextPanel().BHasClass( "InProgress" );
	var bYoursEmpty = g_tradeOfferYours.GetItemCount() == 0;
	var bTheirsEmpty = g_tradeOfferTheirs.GetItemCount() == 0;
	var bConfirmed = $("#ConfirmButton").checked;
	var bLocked = $("#TradeOffer").BHasClass( "ViewOffer" ) || bConfirmed;

	if ( bConfirmed )
	{
		$("#TradeOffer").AddClass( "Confirmed" );
	}
	else
	{
		$("#TradeOffer").RemoveClass( "Confirmed" );
	}

	$("#ConfirmButton").enabled = !bMsgInProgress && ( !bYoursEmpty || !bTheirsEmpty );
	$("#MakeOffer").enabled = !bMsgInProgress && ( !bYoursEmpty || !bTheirsEmpty ) && bConfirmed;
	$("#AcceptOffer").enabled = !bMsgInProgress && ( !bYoursEmpty || !bTheirsEmpty ) && bConfirmed;
	$("#ChangeOffer").enabled = !bMsgInProgress && !bConfirmed;

	$("#AddYourItems").enabled = !bMsgInProgress && !bLocked;
	$("#AddTheirItems").enabled = !bMsgInProgress && !bLocked;

	$("#MessageWrapper").enabled = !bMsgInProgress && !bLocked;
}

function OnChangeOffer()
{
	var pTradeOffer = $("#TradeOffer");
	pTradeOffer.AddClass( "Counteroffer" );
	pTradeOffer.RemoveClass( "ViewOffer" );

	UpdateButtonStates();

	$("#ActionColumn").SetFocus();
}

function CloseTradeOffer()
{
	$.DispatchEventAsync( 0.0, 'NavigateTenfootBack' );
	$.DispatchEventAsync( 0.0, 'TruncateBackStack' );
}

function ClosePopup( id )
{
	var popup = $.TenfootController( $.GetContextPanel() ).AccessMainMenu().FindChildTraverse( id );

	popup.AddClass( "Destructing" );
	$.DispatchEvent( 'MessageBoxClose', popup );
	popup.DeleteAsync( 0.4 );
}

function ClosePopupAndExit( id )
{
	$.Msg( "ClosePopupAndExit( " + id + " )" );

	ClosePopup( id );
	CloseTradeOffer();
}

function DisplayPopup( id, layout )
{
	var popup = $.CreatePanel( 'Panel', $.TenfootController($.GetContextPanel() ).AccessMainMenu(), id );
	popup.BLoadLayoutFromString( layout, true, false );

	$.TenfootController($.GetContextPanel()).ShowModalDialog( popup, '' );
	return popup;
}


function DisplayReceipt( tradeid )
{
	tradeid = '647741573368687841';

	var url = 'https://steamcommunity.com/trade/' + tradeid + '/receipt';
	$.Msg( url );
	var layout =
		'<root>' +
			'<styles>' +
				'<include src="file://{resources}/styles/steamstyles.css" />' +
				'<include src="file://{resources}/styles/msgbox.css" />' +
				'<include src="https://steamcommunity-a.akamaihd.net/public/css/bigpicture/profile.css?v=valveisgoodatcaching&amp;l=english" />' +
				'<include src="https://steamcommunity-a.akamaihd.net/public/css/bigpicture/tradeoffer.css?v=valveisgoodatcaching" />' +
			'</styles>' +
			'<scripts>' +
				'<include src="https://steamcommunity-a.akamaihd.net/public/shared/javascript/bigpicture/base.js?v=valveisgoodatcaching&amp;l=english" />' +
			'</scripts>' +
			'<script>' +
				ClosePopupAndExit.toString() +
				CloseTradeOffer.toString() +
			'</script>' +
			'<Panel defaultfocus="DialogInner" oncancel="ClosePopupAndExit( \'ReceiptPopup\' );" >' +
				'<Button id="DialogInner" >' +
					'<LoadingThrobber id="Throbber" />' +
					'<HTML embedded="true" manualscroll="false" url="' + url + '" />' +
				'</Button>' +
			'</Panel>' +
		'</root>';

	var popup = DisplayPopup( "ReceiptPopup", layout );
	$.RegisterEventHandler( 'HTMLFinishRequest', popup, function() {
		popup.AddClass( "LoadComplete" );
	} );
	$.RegisterFooterButton( popup, "pad_b", 'DISMISS' );
	$.RegisterKeyBind( popup, "pad_b,steampad_b", function() { ClosePopup( 'ReceiptPopup' ); } );

}


function ShowTradePartnerInfo()
{
	$.GetContextPanel().AddClass( "TradePartnerInfoView" );
	$("#TradePartnerInfo").SetFocus();
}

function CloseTradePartnerInfo()
{
	$.GetContextPanel().RemoveClass( 'TradePartnerInfoView' );
	$.GetContextPanel().SetFocus();
}

