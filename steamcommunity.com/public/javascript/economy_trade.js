


var TRADE_UPDATE_INTEVRAL = 1000;
var MESSAGE_TRADE_PARTNER_ABSENSE_TIME = 5;
var g_bWalletBalanceWouldBeOverMax = false;
var g_nItemsFromContextWithNoPermissionToReceive = 0;
var g_rgnItemsExpiringBeforeEscrow = [0,0];
var GTradeStateManager = null;
var Tutorial = null;
var g_bWarnOnReady = false;
var g_dateEscrowEnd = null;
var g_bWarnedAboutPlaytime = false;
var g_bWarnedAboutUnvettedApp = false;
var g_bTradeProtected = undefined;      // undefined: indeterminate (no items). false or true: actual status

function BeginTrading( bShowTutorial )
{
	g_bAllowHighDPIItemImages = $J('html').hasClass('responsive');

	if ( !GTradeStateManager )
		GTradeStateManager = CTradeStateManager;

	if ( !Tutorial )
		Tutorial = new CTradeTutorial();

	if ( bShowTutorial && !Economy_UseResponsiveLayout() )
		Tutorial.Init();

	INVENTORY_PAGE_ITEMS = 16;	//4 x 4 grid
	INVENTORY_PAGE_WIDTH = 104 * 4;
	g_bIsTrading = true;
	g_bShowTradableItemsOnly = true;
	g_ActiveUser = UserYou;

	SizeWindow();

	
	if ( g_bTradePartnerProbation )
	{
		var elEvent = new Element( 'div', {'class': 'logevent' } );
		elEvent.update(
				'<%1$s>Warning:<%2$s> %3$s was recently trade banned and is currently on probation. %4$s may not be trustworthy.'
					.replace( '%1$s', 'span class="warning"' )
					.replace( '%2$s', '/span' )
					.replace( '%3$s', g_strTradePartnerPersonaName )
					.replace( '%4$s', g_strTradePartnerPersonaName ) );
		$('log').appendChild( elEvent );
	}

	// set up inventory and drag drop
	Droppables.add( $('trade_yours'), {hoverclass: 'readyForDrop', onDrop: OnDropItemInTrade } );
	if ( g_bTradeOffer )
		Droppables.add( $('trade_theirs'), {hoverclass: 'readyForDrop', onDrop: OnDropItemInTrade } );

	InitResponsiveTradeControls();
	// set up the filter control
	Filter.InitFilter( $('filter_control') );

	Event.observe( window, 'resize', SizeWindow );
	Event.observe( window, 'unload', TradingUnloaded );

	if ( !g_bTradeOffer )
	{
		//set up chat controls
		var elChatEntry = $('chat_text_entry');
		elChatEntry.observe( 'keypress', OnChatKeypress );
		elChatEntry.observe( 'keyup', OnChatKeyup );
		elChatEntry.observe( 'paste', OnChatUpdate );
		elChatEntry.observe( 'cut', OnChatUpdate );
		$('chat_send_btn').observe( 'click', DoChat );

		// if the user starts typing in the trade dialog, move the focus to the chat control
		$(document).observe( 'keypress', TransferFocusToChat );

		RedrawCurrentTradeStatus();
		RequestTradeStatusUpdate();
	}


	var appid = 0;
	var contextid = 0;

	// If the document says to use a specific inventory, do so
	if ( typeof( force_appid ) !== 'undefined' ) {
		appid = force_appid[ 'appid' ];
		contextid = force_appid[ 'contextid' ];
	}

	// Otherwise default to the last used inventory
	if ( appid == 0 ) {
		var oCookieParams = ReadInventoryCookie( GetCookie( 'strTradeLastInventoryContext' ) );
		if ( BValidateHashParams( oCookieParams ) ) {
			appid = oCookieParams.appid;
			contextid = oCookieParams.contextid;
		}
	}

	// Select an app's inventory if we know which one to pick
	if ( appid != 0 ) {
		TradePageSelectInventory( UserYou, appid, contextid );
	}
}

function InitResponsiveTradeControls()
{
	var $ItemArea = $J('.trade_left');
	var $OfferArea = $J('.trade_right');


	var TRADE_MODE_OFFER = 0, TRADE_MODE_YOUR_ITEMS = 1, TRADE_MODE_THEIR_ITEMS = 2;
	var nCurrentTradeMode = TRADE_MODE_OFFER;
	var rgScrollTopByMode = [ 0, 0, 0 ];

	window.ResponsiveTrade_SwitchMode = function( nTargetTradeMode )
	{
		if ( nCurrentTradeMode != nTargetTradeMode )
			rgScrollTopByMode[nCurrentTradeMode] = $J(window).scrollTop();

		if ( nTargetTradeMode == TRADE_MODE_OFFER )
		{
			$OfferArea.show();
			$ItemArea.hide();
		}
		else
		{
			$OfferArea.hide();
			$ItemArea.show();
			if ( nTargetTradeMode == TRADE_MODE_YOUR_ITEMS )
				$J('#inventory_select_your_inventory').click();
			else
				$J('#inventory_select_their_inventory').click();
		}
		nCurrentTradeMode = nTargetTradeMode;
		$J(window).scrollTop( rgScrollTopByMode[nCurrentTradeMode] );

		// even if we didn't scroll, we want to update fixed position stuff based on current displayed elements
		// and also dynamic sizing
		$J(window).trigger('resize');
	};

	InitDynamicInventoryItemAutosizing( $J('.trade_offer .trade_item_box'), '.trade_offer .trade_item_box' );
	InitDynamicInventoryItemAutosizing( $J('#inventories'), '#inventories' );

	var $ResponsiveTradeOfferItems = $J('.responsive_trade_offersection');
	var bResponsiveMode;
	$J(window ).on('resize.TradeWindow', function() {
		var bNewResponsiveMode = Economy_UseResponsiveLayout();
		if ( bNewResponsiveMode == bResponsiveMode )
			return;

		bResponsiveMode = bNewResponsiveMode;

		if ( bResponsiveMode )
		{
			// enable the current mode again
			$J('#responsivetrade_itemfilters').append( $J('#nonresponsivetrade_itemfilters').children() );
			ResponsiveTrade_SwitchMode(nCurrentTradeMode);
		}
		else
		{
			$J('#nonresponsivetrade_itemfilters').append( $J('#responsivetrade_itemfilters').children() );
			$ItemArea.show();
			$OfferArea.show();
		}

		RedrawCurrentTradeStatus();

		$ResponsiveTradeOfferItems.each( function() {
			var $Item = $J(this);
			if ( !$Item.data('originalPositionWrapper') )
			{
				$Item.wrap('<div/>', {'class': 'responsive_element_placeholder'} );
				$Item.data( 'originalPositionWrapper', $Item.parent() );
			}

			if ( bResponsiveMode )
			{
				if ( $Item.hasClass('top') )
					$OfferArea.prepend( $Item );
				else
					$OfferArea.append( $Item );
			}
			else
			{
				var $Wrapper = $Item.data('originalPositionWrapper');
				$Wrapper && $Wrapper.append( $Item );
			}
		});
	} ).trigger('resize.TradeWindow');


	$J('#trade_yours').on( 'click', '.trade_slot:not(.has_item)', function() {
		if ( Economy_UseResponsiveLayout() && !$J('#trade_yours').hasClass('ready') )
			ResponsiveTrade_SwitchMode( TRADE_MODE_YOUR_ITEMS );
	});

	if ( g_bTradeOffer )
	{
		$J('#trade_theirs' ).on( 'click', '.trade_slot:not(.has_item)', function() {
			if ( Economy_UseResponsiveLayout() && !$J('#trade_theirs' ).hasClass('ready') )
				ResponsiveTrade_SwitchMode( TRADE_MODE_THEIR_ITEMS );
		});
	}

	$J('#responsivetrade_backtooffer' ).click( function() { ResponsiveTrade_SwitchMode( TRADE_MODE_OFFER ); } );

	$J('#responsive_tab_select_yourinventory select' ).on('change', function() {
		if ( $J(this ).val() )
			TradePageSelectInventory( UserYou, $J(this ).val() );
	});
	$J('#responsive_tab_select_yourcontexts select' ).on('change', function() {
		TradePageSelectInventory( UserYou, $J(this ).data('appid'), $J(this ).val() );
	});
	if ( g_bTradeOffer )
	{
		$J('#responsive_tab_select_theirinventory select' ).on('change', function() {
			if ( $J(this ).val() )
				TradePageSelectInventory( UserThem, $J(this ).val() );
		});
		$J('#responsive_tab_select_theircontexts select' ).on('change', function() {
			TradePageSelectInventory( UserThem, $J(this ).data('appid'), $J(this ).val() );
		});
	}
}

CUserThem = Class.create( CUser, {

	GetContext: function( appid, contextid ) {
		if ( g_bTradeOffer )
		{
			return this.rgContexts[appid] && this.rgContexts[appid][contextid];
		}
		else
		{
			// TODO: load trade partner app contexts
			if ( !this.rgContexts[appid] )
				this.rgContexts[appid] = {};
			if ( !this.rgContexts[appid][contextid] )
				this.rgContexts[appid][contextid] = { inventory: null };
			return this.rgContexts[appid][contextid];
		}
	},

	loadInventory: function( appid, contextid ) {
		this.LoadForeignAppContextData( g_ulTradePartnerSteamID, appid, contextid );
	},

	/*
	 *		Trading Partner's Inventory
	 */

	LoadForeignAppContextData: function( steamid, appid, contextid )
	{
		this.cLoadsInFlight++;
		this.addInventory( new CForeignInventoryPending( this, appid, contextid, null, null ) );
		var thisClosure = this;

		if ( g_bTradeOffer )
		{
			RequestFullInventory(
					g_strTradePartnerInventoryLoadURL,
					{
						sessionid:	g_sessionID,
						partner: 	steamid,
						appid:		appid,
						contextid:	contextid
					},
					function( transport ) { thisClosure.OnLoadInventoryComplete( transport, appid, contextid ); },
					function( transport ) { thisClosure.OnInventoryLoadFailed( transport, appid, contextid ) },
					null
			);
		}
		else
		{
			RequestFullInventory(
					'https://steamcommunity.com/trade/' + g_ulTradePartnerSteamID + '/foreigninventory/',
					{
						sessionid:	g_sessionID,
						steamid: 	steamid,
						appid:		appid,
						contextid:	contextid
					},
					function( transport ) { thisClosure.OnLoadForeignAppContextData( transport, appid, contextid ); },
					null,
					null
			);
		}
		return true;
	},

	OnLoadForeignAppContextData: function( transport, appid, contextid )
	{
		this.cLoadsInFlight--;
		if ( transport.responseJSON && transport.responseJSON.success )
		{
			var rgAppInfo = transport.responseJSON.rgAppInfo;
			// see if this is a new app the current user didn't know about
			if ( !g_rgAppContextData[appid] )
			{
				g_rgAppContextData[appid] = Object.clone(rgAppInfo);
			}

			for ( var itemid in transport.responseJSON.rgInventory )
			{
				var rgItem = transport.responseJSON.rgInventory[itemid];
				rgItem.is_their_item = true;
			}

			// replace the pending inventory object with the real inventory
			var inventory = new CInventory( this, appid, contextid, transport.responseJSON.rgInventory, transport.responseJSON.rgCurrency );

			this.addInventory( inventory );

			RedrawCurrentTradeStatus();
		}
		else
		{
			// erase the pending inventory object so it will be reloaded
			this.GetContext( appid, contextid ).inventory = null;
		}
	}
});

var UserThem = new CUserThem();

var templActiveApp = new Template( '<img src="#{icon}"> #{name}' );
var templAllContextName = new Template( 'All #{appname} Items');

function TradePageSelectNoInventory( user )
{
	Filter.ApplyFilter( '' );
	HideTagFilters();
	$('filter_tag_show').hide();
	$('filter_tag_hide').hide();
	$('inventories').childElements().invoke( 'hide' );
	$('appselect_activeapp').update( templActiveApp.evaluate( {icon:'https://community.fastly.steamstatic.com/public/images/economy/blank_gameicon.gif', name: 'Select an inventory to view items you can trade.' } ) );
}

function TradePageSelectInventory( user, appid, contextid, bLoadCompleted )
{
	if ( g_bTradeOffer )
	{
		HideMenu( $('appselect'), $('appselect_you_options') );
		HideMenu( $('appselect'), $('appselect_them_options') );
	}
	else
	{
		HideMenu( $('appselect'), $('appselect_options') );
	}

	if ( !contextid )
	{
		if ( user.BIsSingleContextApp( appid ) )
			contextid = user.GetFirstContextForApp( appid ).id;
		else
			contextid = APPWIDE_CONTEXT;
	}

	Filter.ApplyFilter( '' );

	if ( SelectInventoryFromUser( user, appid, contextid, bLoadCompleted ) )
	{
		Filter.ReApplyFilter();

		// copy the html of the chosen game option to the app select box
		var oAppDisplay = GetEconomyDisplay( appid, contextid );
		var rgAppData = user.GetAppData( appid );

		var displayName = rgAppData ? rgAppData.name : '';

		var $ResponsiveInventorySelect = ( user == UserYou ) ?  $J('#responsive_tab_select_yourinventory select') : $J('#responsive_tab_select_theirinventory select');
		var $ResponsiveContextSelectCtn = ( user == UserYou ) ?  $J('#responsive_tab_select_yourcontexts') : $J('#responsive_tab_select_theircontexts');

		if ( !user.BIsSingleContextApp( appid ) )
		{
			displayName = displayName + ' ' + user.GetContext( appid, contextid ).name;
			var $ContextSelect = $ResponsiveContextSelectCtn.find('select');
			$ContextSelect.empty();
			$ContextSelect.data('appid', appid);

			var rgContextIDs = user.GetContextIdsForApp( appid );
			for ( var i = 0; i < rgContextIDs.length; i++ )
			{
				var rgContext = user.GetContext( appid, rgContextIDs[i] );
				var strName = rgContext.name;
				if ( rgContext.id != APPWIDE_CONTEXT )
					strName += ' (' + v_numberformat( rgContext.asset_count ) + ')';
				$ContextSelect.append( $J('<option/>', {value: rgContext.id} ).text( strName ) );
			}
			$ContextSelect.val( contextid );

			$ResponsiveContextSelectCtn.show();
		}
		else
		{
			$ResponsiveContextSelectCtn.hide();
		}

		// update the height of the spacer div based on which dropdowns are shown
		var nFixedCtnHeight = $ResponsiveInventorySelect.parents('.responsive_trade_fixedcontents' ).height();
		$ResponsiveInventorySelect.parents('.trade_nonresponsive_hidden' ).children('.responsive_trade_fixedcontents_spacer' ).css('height', nFixedCtnHeight ? nFixedCtnHeight + 'px' : '' );

		$('appselect_activeapp').update( templActiveApp.evaluate( { icon: rgAppData ? rgAppData.icon : 'https://community.fastly.steamstatic.com/public/images/economy/blank_gameicon.gif', name: displayName.escapeHTML() /* prototype! */ } ) );

		if ( user == UserYou )
		{
			$J('#responsive_tab_select_yourinventory select').val( appid );
		}
		else
		{
			$J('#responsive_tab_select_theirinventory select').val( appid );
		}

		$('trade_inventory_unavailable').hide();
		$('trade_inventory_failed').hide();

		if ( g_ActiveInventory.BIsEmptyInventory() )
		{
			var appname = displayName;

			g_ActiveInventory.hide();
			$('trade_inventory_unavailable').show();

			$('trade_inventory_message_no_inventory').hide();
			$('trade_inventory_message_not_allowed').hide();
			$('trade_inventory_pending').hide();

			if ( g_ActiveInventory.BIsPendingInventory() )
			{
				$('trade_inventory_pending').show();
			}
			else if ( !UserYou.BAllowedToTradeItems( appid, contextid ) )
			{
				$('trade_inventory_message_not_allowed').show();
				if ( UserYou.BAllowedToRecieveItems( appid, contextid ) )
				{
					$('trade_inventory_message_not_allowed_none').hide();
					$('trade_inventory_message_not_allowed_receiveonly').show();

					$J( $('trade_inventory_message_not_allowed_receiveonly').down('.gamename') ).text(appname);
				}
				else
				{
					$('trade_inventory_message_not_allowed_none').show();
					$('trade_inventory_message_not_allowed_receiveonly').hide();

					$J( $('trade_inventory_message_not_allowed_none').down('.gamename') ).text(appname);
				}
				var elAlerts = $('trade_inventory_message_not_allowed_alerts');
				elAlerts.update('');
				if ( g_rgAppContextData[appid].alerts )
				{
					for( var i = 0; i < g_rgAppContextData[appid].alerts.length; i++ )
					{
						var alert = g_rgAppContextData[appid].alerts[i];
						var elAlert = new Element( 'div' );
						if ( alert.color )
							elAlert.style.color = '#' + alert.color;
						elAlert.update( alert.text );
						elAlerts.appendChild( elAlert );
					}
				}
			}
			else
			{
				$('trade_inventory_message_no_inventory').show();
				$J( $('trade_inventory_message_no_inventory').down('.gamename') ).text(appname);
				var strHowToGet = '';
				if( oAppDisplay && oAppDisplay.howtoget )
					strHowToGet = oAppDisplay.howtoget;
				$('trade_inventory_message_no_inventory_howtoget').update( strHowToGet );
			}
		}
		else
		{
			Tutorial.OnSelectedNonEmptyInventory( user );
			SetCookie( 'strTradeLastInventoryContext', appid + '_' + contextid, 14, g_bTradeOffer ? '/tradeoffer/' : '/trade/' );
		}

		// hide the tags after we select the new inventory so
		// we can show the "show" button appropriately.
		HideTagFilters();
	}
}

/*
 *		Drag & Drop
 */


var g_bInDrag = false;

function MakeItemDraggable( element )
{
	element.style.zIndex = 3;
	new Draggable( element, {revert: 'failure', ghosting: false, onStart: StartDrag, onEnd: EndDrag } );
	Event.observe( element, 'dblclick', OnDoubleClickItem.bindAsEventListener( null, element ) );
}

function MakeCurrencyDraggable( element )
{
	element.style.zIndex = 3;
	// currency always reverts
	new Draggable( element, {revert: true, ghosting: true, onStart: StartDragCurrency, onEnd: EndDragCurrency } );
	Event.observe( element, 'dblclick', OnDoubleClickItem.bindAsEventListener( null, element ) );
}

function StartDragCurrency( draggable, event )
{
	draggable._clone.id = '';
	draggable._clone.removeClassName( 'hover' );
	StartDrag( draggable, event );

	draggable.element.addClassName( 'in_drag' );

	if ( typeof( draggable.element.drag_image ) != 'undefined' )
	{
		var elImage = draggable.element.select('img');
		if ( elImage )
		{
			draggable.element.drag_reset_image = elImage[0].src;
			elImage[0].src = draggable.element.drag_image;
		}
	}
}

function EndDragCurrency( draggable, event )
{
	// defer the end drag so our click event can operate on the g_bInDrag variable
	(function() {g_bInDrag = false;}).defer();

	draggable.element.removeClassName( 'in_drag' );

	if ( typeof( draggable.element.drag_reset_image ) != 'undefined' )
	{
		var elImage = draggable.element.select('img');
		elImage[0].src = draggable.element.drag_reset_image;
		delete draggable.element.drag_reset_image;
	}

	if ( g_bTradeOffer )
	{
		ResetTradeOfferOpacity( $('trade_yours' ) );
		ResetTradeOfferOpacity( $('trade_theirs' ) );
	}

	RemoveDroppable( $('inventories' ) );
}

function StartDrag( draggable, event )
{
	HideHover();
	if ( draggable.element.wants_hover )
		draggable.element.wants_hover = false;
	draggable.element.removeClassName( 'hover' );

	var item = draggable.element.rgItem;

	var elSlots = ( item.is_their_item ? $('their_slots') : $('your_slots') );

	elSlots.childElements().invoke( 'removeClassName', 'nextTarget' );
	if ( BIsInTradeSlot( draggable.element ) )
	{
		Droppables.add( $('inventories' ) , {hoverclass: 'readyForDrop', onDrop: OnDropItemInInventory } );
		$(draggable.element.parentNode.parentNode).down('.slot_applogo').hide();
	}
	else
	{
		if ( item.trade_stack && BIsInTradeSlot( item.trade_stack.element ) )
		{
			$(item.trade_stack.element.parentNode.parentNode).addClassName( 'nextTarget' );
		}
		else
		{
			var oSlotInfo = FindFreeSlot( elSlots );
			oSlotInfo.elSlot.addClassName( 'nextTarget' );
		}

		if ( g_bTradeOffer )
		{
			var elUnusedOffer = ( item.is_their_item ? $('trade_yours') : $('trade_theirs' ) );
			elUnusedOffer.effect && elUnusedOffer.effect.cancel();
			elUnusedOffer.effect = new Effect.Opacity( elUnusedOffer, {to: 0.3, delay: 0.1, duration: 0.15 } );
		}
	}

	g_bInDrag = true;
}

function EndDrag( draggable, event )
{
	g_bInDrag = false;
	draggable.element.style.zIndex = 5;

	if ( BIsInTradeSlot( draggable.element ) )
	{
		$(draggable.element.parentNode.parentNode).down('.slot_applogo').show();
	}

	if ( g_bTradeOffer )
	{
		ResetTradeOfferOpacity( $('trade_yours' ) );
		ResetTradeOfferOpacity( $('trade_theirs' ) );
	}

	RemoveDroppable( $('inventories' ) );
}

function ResetTradeOfferOpacity( elOffer )
{
	if ( elOffer.effect )
		elOffer.effect.cancel();

	elOffer.effect = new Effect.Opacity( elOffer, {to: 1.0, duration: 0.15 } );
}

function RemoveDroppable( element )
{
	Droppables.remove( element );
}

function CleanupDraggable( elItem )
{
	elItem.style.zIndex = 5;

	// unset scriptaculous draggable stuff
	elItem.style.left = '';
	elItem.style.top = '';
	elItem.style.opacity = 1.0;

	elItem.removeClassName( 'in_drag' );
}

function OnDoubleClickItem( event, elItem )
{
	if ( BIsInTradeSlot( elItem ) )
	{
		MoveItemToInventory( elItem );
	}
	else
	{
		MoveItemToTrade( elItem );
	}
	CancelItemHover( elItem );
}

function OnDropItemInTrade( elItem, elTarget, event )
{
	CleanupDraggable( elItem );
	MoveItemToTrade( elItem );
}

function OnDropItemInInventory( elItem, elTarget, event )
{
	CleanupDraggable( elItem );
	MoveItemToInventory( elItem );
}

function ShowStackableItemDialog( elItem )
{
	var currency = elItem.rgItem;

	if ( currency.parent_item )
		return;

	// show transfer dialog
	PresentCurrencyDialog( currency );
}

function MoveItemToTrade( elItem )
{
	var item = elItem.rgItem;
	if ( item.is_stackable )
	{
		//stackable items present a dialog first, then will call FindSlotAndSetItem
		ShowStackableItemDialog( elItem );
	}
	else
	{
		FindSlotAndSetItem( item );
	}
}


function IsTradeProtected( appid )
{
	if ( typeof( g_rgAppContextData[appid] ) != 'undefined' ) { return g_rgAppContextData[appid].secure_trades; }
	if ( typeof( UserThem.rgAppInfo[appid] ) != 'undefined' ) { return UserThem.rgAppInfo[appid].secure_trades; }
}

// returns the trade protection status of the proposed trade -
// true means trade protected, false means not, undefined means
// the trade is empty so it's not yet determined
function GetTradeProtectedStatusFromTrade( rgTradeStatus )
{
	if ( !rgTradeStatus )
	{
		return undefined;
	}

	if ( g_dateEscrowEnd != null )
	{
		return undefined;
	}

	// examine all slots in both participants' inventories;
	// figure out the trade protection status of each item's app.
	// complain if we see inconsistent data, otherwise just return
	// the computed status.

	var rgrgAsset = [ rgTradeStatus.me.assets, rgTradeStatus.them.assets ];
	var bSeenTradeProtected = false;
	var bSeenNonTradeProtected = false;

	for ( let rgAsset of rgrgAsset )
	{
		for ( let asset of rgAsset )
		{
			if ( IsTradeProtected( asset.appid ) )
			{
				bSeenTradeProtected = true;
			}
			else
			{
				bSeenNonTradeProtected = true;
			}
		}
	}

	if ( bSeenTradeProtected && bSeenNonTradeProtected )
	{
		console.log( "Error: both trade protected and non trade protected items in trade" );
		// try to be safe
		return true;
	}
	else if ( bSeenTradeProtected )
	{
		return true;
	}
	else if ( bSeenNonTradeProtected )
	{
		return false;
	}
	else
	{
		return undefined;
	}
}


// updates UI for specified trade protected status
function ApplyTradeProtectedStatus( statusNew )
{
	if ( statusNew != g_bTradeProtected )
	{
		g_bTradeProtected = statusNew;
		$J('.trade_protected_status_callout').toggleClass( 'active', !!g_bTradeProtected );
	}

	// Show or hide a warning about intermixing, if applicable:
	// - must have an active inventory to figure out whether it has trade protection
	// - trade protection status of the trade must be defined already
	// - trade protection status of the inventory must differ from that of the trade
	// - if all are true, show warning, otherwise hide it
	var bWarn = g_ActiveInventory && g_ActiveInventory.appid && g_ActiveInventory.appid != -1 &&
		g_bTradeProtected != undefined &&
		IsTradeProtected( g_ActiveInventory.appid ) != g_bTradeProtected;

	bWarn = !!bWarn;
	$J( '.trade_protected_potential_conflict' ).toggleClass( 'active', bWarn );
}


// updates UI to match trade protected status of current roster of items
function RecomputeTradeProtectedStatus( rgTradeStatus )
{
	var statusNew = GetTradeProtectedStatusFromTrade( rgTradeStatus );
	ApplyTradeProtectedStatus( statusNew );
}


function FindSlotAndSetItem( item, xferAmount )
{
	var elItem = item.element;
	var bStackable = item.is_stackable;
	var bTheirItem = item.is_their_item;
	var elSlots = ( bTheirItem ? $('their_slots') : $('your_slots') );
	if ( bStackable )
	{
		var stack = GetTradeItemStack( bTheirItem ? UserThem : UserYou, item );
		elItem = stack.element;

		if ( xferAmount == 0 )
		{
			GTradeStateManager.RemoveItemFromTrade( item );
			return;
		}
	}

	
	if ( g_bTradeProtected != undefined && IsTradeProtected( item.appid ) != g_bTradeProtected )
	{
		// the user is trying to intermingle trade protected items and non trade protected items.
        // FUTURE we could show an error here if just failing the drop proves to be confusing due to the user
        // not noticing the intermixing warning.
		GTradeStateManager.RemoveItemFromTrade( item );
		return;
	}

	
	var iSlot = 0;

	// find a slot to drop this item in
	if ( !BIsInTradeSlot( elItem ) )
	{
		var oSlotInfo = FindFreeSlot( elSlots );
		ReserveSlot( oSlotInfo.elSlot );
		iSlot = oSlotInfo.iSlot;
	}
	else
	{
		// stackable items will reuse their current slot
		iSlot = GetCurrentSlot( elItem );
	}

	item.homeElement.down('.slot_actionmenu_button').hide();

	if ( !BIsInTradeSlot( elItem ) || bStackable )
	{
		if ( Economy_UseResponsiveLayout() && window.ResponsiveTrade_SwitchMode )
			ResponsiveTrade_SwitchMode(0);

		// commit the update
		GTradeStateManager.SetItemInTrade( item, iSlot, xferAmount );
	}
}

function MoveItemToInventory( elItem )
{
	var item = elItem.rgItem;
	if ( BIsInTradeSlot( elItem ) )
	{
		CleanupSlot( elItem.parentNode.parentNode );
	}

	if ( item.is_stackable )
	{
		// stackable items are fully removed by this call
		SetStackableItemInTrade( item, 0 );
		return;
	}

	RevertItem( item );

	item.homeElement.down('.slot_actionmenu_button').show();

	GTradeStateManager.RemoveItemFromTrade( item );
}

CTradeStateManager = {

	RemoveItemFromTrade: function( item )
	{
		CancelTradeStatusPoll();
		new Ajax.Request( 'https://steamcommunity.com/trade/' + g_ulTradePartnerSteamID + '/removeitem/', {
			method: 'post',
			parameters: {
				sessionid: g_sessionID,
				appid: item.appid,
				contextid: item.contextid,
				itemid: item.id
			},
			onComplete: HandleDropFailure
		} );
	},

	SetCurrencyInTrade: function( currency, xferAmount )
	{
		CancelTradeStatusPoll();
		new Ajax.Request( 'https://steamcommunity.com/trade/' + g_ulTradePartnerSteamID + '/setcurrency/', {
				method: 'post',
				parameters: {
					sessionid: g_sessionID,
					appid: currency.appid,
					contextid: currency.contextid,
					currencyid: currency.id,
					amount: xferAmount
				},
				onSuccess: OnTradeStatusUpdate,
				onFailure: RequestTradeStatusUpdate
		} );
	},

	SetItemInTrade: function( item, slot, xferAmount )
	{
		CancelTradeStatusPoll();

		var params = {
					sessionid: g_sessionID,
					appid: item.appid,
					contextid: item.contextid,
					itemid: item.id,
					slot: slot
				};

		if ( xferAmount )
			params.amount = xferAmount;

		new Ajax.Request( 'https://steamcommunity.com/trade/' + g_ulTradePartnerSteamID + '/additem/', {
				method: 'post',
				parameters: params,
				onComplete: function( transport ) { HandleDropFailure( transport ); }
		} );
	},

	ToggleReady: function( bReady )
	{
		CancelTradeStatusPoll();
		new Ajax.Request( 'https://steamcommunity.com/trade/' + g_ulTradePartnerSteamID + '/toggleready/', {
			method: 'post',
			parameters: {
				sessionid: g_sessionID,
				ready: bReady,
				version: g_rgLastFullTradeStatus.version
			},
			onSuccess: OnTradeStatusUpdate,
			onFailure: RequestTradeStatusUpdate
		} );
	},

	UpdateConfirmButtonStatus: function()
	{
		if ( g_bConfirmPending )
		{
			$('trade_confirm_message').update( 'Waiting for the other party to confirm...' );
			$('trade_confirmbtn').hide();
			$('trade_confirm_throbber').show();
		}
		else
		{
			$('trade_confirmbtn').show();
			$('trade_confirm_throbber').hide();
			if ( UserYou.bReady && UserThem.bReady )
			{
				$('trade_confirmbtn').addClassName( 'active' );
				$('trade_confirm_message').update( 'Both parties are ready.' );
			}
			else
			{
				$('trade_confirmbtn').removeClassName( 'active' );
				$('trade_confirm_message').update( 'Waiting for both parties to check the ready box.' );
			}
		}
	}
};

function SetStackableItemInTrade( item, xferAmount )
{
	if ( item.is_currency )
		GTradeStateManager.SetCurrencyInTrade( item, xferAmount );
	else
		FindSlotAndSetItem( item, xferAmount );
}

// callback that handles SetItem or RemoveItem returning failure and puts the item back where it was
function HandleDropFailure( transport, fnOnFail )
{
	if ( !transport || !transport.responseJSON || !transport.responseJSON.success )
	{
		if ( fnOnFail )
			fnOnFail();
		RequestTradeStatusUpdate();
	}
	else
		OnTradeStatusUpdate( transport );
}

function RevertItem( item )
{
	if ( item.is_stackable )
	{
		// remove the currency from the trade by setting the amount in-trade to 0.
		SetStackableItemInTrade( item, 0 );
	}
	else
	{
		item.homeElement.appendChild( item.element.remove() );
		// if the inventory view is filtered, make sure the item applies
		if ( g_ActiveInventory && g_ActiveInventory.appid == item.appid && g_ActiveInventory.contextid == item.contextid )
			Filter.ApplyFilter( $('filter_control').value, item.element );
	}
}

/*
 * 		Trade slots
 */


function BIsInTradeSlot( element )
{
	return element.parentNode && $(element.parentNode).hasClassName( 'slot_inner' );
}

function GetCurrentSlot( element )
{
	if ( element.parentNode && element.parentNode.parentNode && $(element.parentNode.parentNode).hasClassName( 'trade_slot' ) )
	{
		return element.parentNode.parentNode.iSlot;
	}
	return 0;
}

function CreateCurrencyTradeSlot( bIsYourSlot, currency )
{
	var elSlotContainer = bIsYourSlot ? $('your_slots_currency') : $('their_slots_currency');
	var currencyId = currency.appid + '_' + currency.contextid + '_' + currency.id;
	var id = bIsYourSlot ? 'your_slot_currency_' + currencyId : 'their_slot_currency_' + currencyId;
	var elSlot = CreateSlotElement( id );
	elSlotContainer.appendChild( elSlot );
	return elSlot;
}

function CreateTradeSlot( bIsYourSlot, iSlot )
{
	var elSlotContainer = bIsYourSlot ? $('your_slots') : $('their_slots');
	var id = bIsYourSlot ? 'your_slot_' + iSlot : 'their_slot_' + iSlot;
	var elSlot = CreateSlotElement( id );
	elSlot.iSlot = iSlot;
	elSlotContainer.appendChild( elSlot );
	return elSlot;
}

function CreateSlotElement( id )
{
	var elSlot = new Element( 'div', { id: id, 'class': 'itemHolder trade_slot' } );
	elSlot.appendChild( new Element( 'div', {'class': 'slot_inner' } ) );

	var elAppLogo = new Element( 'div', {'class': 'slot_applogo' } );
	elAppLogo.style.display = 'none';
	elAppLogo.appendChild( new Element( 'img', {'class': 'slot_applogo_img' } ) );
	elSlot.appendChild( elAppLogo );

	var elActionMenuButton = new Element( 'a', {'id': id + '_actionmenu_button', 'class': 'slot_actionmenu_button' } );
	elActionMenuButton.style.display = 'none';
	elActionMenuButton.href = "javascript:void(0)";
	elSlot.appendChild( elActionMenuButton );

	var elFraudWarningIcon = new Element( 'div', {'class': 'slot_app_fraudwarning' } );
	elFraudWarningIcon.style.display = 'none';
	elSlot.appendChild( elFraudWarningIcon );
	return elSlot;
}

function FindFreeSlot( slotHolder )
{
	var slots = slotHolder.childElements();
	var slot = null;
	var elSlot = null;
	var iLastSlotInUse = 0;
	for ( var i = 0; i < slots.length; i++ )
	{
		if ( !slots[i].hasItem )
		{
			if ( !elSlot )
			{
				elSlot = slots[i];
				slot = i;
			}
		}
		else
		{
			iLastSlotInUse = Math.max( iLastSlotInUse, i );
		}
	}
	return { elSlot: elSlot, iSlot: slot, iLastSlotInUse: iLastSlotInUse };
}

function EnsureSufficientTradeSlots( bYourSlots, cSlotsInUse, cCurrencySlotsInUse )
{
	var elSlotContainer = bYourSlots ? $('your_slots') : $('their_slots');


	var cTotalSlotsInUse = cSlotsInUse + cCurrencySlotsInUse;

	var cDesiredSlots;
	if ( Economy_UseResponsiveLayout() )
		cDesiredSlots = cTotalSlotsInUse + 1;
	else
		cDesiredSlots = Math.max( Math.floor( ( cTotalSlotsInUse + 5 ) / 4 ) * 4, 8 );

	var cDesiredItemSlots = cDesiredSlots - cCurrencySlotsInUse;

	var cCurrentItemSlots = elSlotContainer.childElements().length;
	var cCurrentSlots = cCurrentItemSlots + cCurrencySlotsInUse;

	var $ContainerParent = $J( elSlotContainer.parentNode );
	$ContainerParent.css( 'height', $ContainerParent.height() + 'px' );
	$ContainerParent.css('overflow','hidden');

	var bElementsChanged = false;
	var fnOnAnimComplete = null;
	if ( cDesiredSlots > cCurrentSlots )
	{
		for( var i = cCurrentItemSlots; i < cDesiredItemSlots; i++ )
		{
			CreateTradeSlot( bYourSlots, i );
		}
		bElementsChanged = true;
	}
	else if ( cDesiredSlots < cCurrentSlots )
	{
		// going to compact
		var prefix = bYourSlots ? 'your_slot_' : 'their_slot_';
		var rgElementsToRemove = new Array();
		for ( var i = cDesiredItemSlots; i < cCurrentItemSlots; i++)
		{
			var element = $(prefix + i );
			element.id='';
			$(elSlotContainer.parentNode).appendChild( element.remove() );
			rgElementsToRemove.push( element );
		}
		fnOnAnimComplete = function() { rgElementsToRemove.invoke('remove') };
		bElementsChanged = true;
	}

	if ( bElementsChanged )
	{
		if ( cCurrentSlots )
		{
			var iNewHeight = $ContainerParent[0].scrollHeight - parseInt( $ContainerParent.css('paddingTop') );

			$ContainerParent.stop();
			$ContainerParent.animate( { height: iNewHeight + 'px' }, 250, 'swing', function() {
				if ( fnOnAnimComplete )
				{
					fnOnAnimComplete();
				}
				$ContainerParent.css( 'height', '' ).css( 'overflow', '' );
			} );
		}
		else
		{
			$ContainerParent.css( 'height', '' ).css( 'overflow', '' );
			fnOnAnimComplete && fnOnAnimComplete();
		}
	}
	else
	{
		$ContainerParent.css( 'height', '' ).css( 'overflow', '' );
	}
}

function ReserveSlot( elSlot )
{
	$J(elSlot).addClass('has_item');
	elSlot.hasItem = true;
}

function PutItemInSlot( elItem, elSlot )
{
	var item = elItem.rgItem;
	if ( elItem.parentNode && elItem.parentNode.nodeType != Node.DOCUMENT_FRAGMENT_NODE /* IE cruft */ )
	{
		$(elItem.parentNode).down('.slot_actionmenu_button').hide();
		elItem.remove();
	}
	elSlot.down('.slot_inner').appendChild( elItem );

	if ( item && item.appid && g_rgAppContextData[item.appid] )
	{
		var rgAppData = g_rgAppContextData[item.appid];
		elSlot.down('.slot_applogo_img').src = rgAppData.icon;
		elSlot.down('.slot_applogo').show();

		if ( typeof(g_rgPlayedApps) != 'undefined' && g_rgPlayedApps !== false && !g_rgPlayedApps[item.appid] )
		{
			var strWarning = 'You\'ve never played the game this item is from.';
			if ( !item.fraudwarnings )
			{
				item.fraudwarnings = [ strWarning ];
			}
			else
			{
				// Don't push the NoPlaytime warning over and over.
				if ( item.fraudwarnings.indexOf( strWarning ) == -1 )
				{
					item.fraudwarnings.push( strWarning );
				}
			}
		}

		if ( item.id && item.fraudwarnings )
		{
			elSlot.down('.slot_app_fraudwarning').show();
		}
		else
		{
			elSlot.down('.slot_app_fraudwarning').hide();
		}
	}
	else
	{
		elSlot.down('.slot_applogo').hide();
		elSlot.down('.slot_app_fraudwarning').hide();
	}

	var elActionMenuButton = elSlot.down('.slot_actionmenu_button');
	elActionMenuButton.show();
	$J('#' + elActionMenuButton.id).click( function() {
		HandleTradeActionMenu( elActionMenuButton, item, item.is_their_item ? UserThem : UserYou )
	} );

	$J(elSlot).addClass('has_item');
	elSlot.hasItem = true;
}

function CleanupSlot( elSlot )
{
	$J('#' + elSlot.id).unbind();

	elSlot.down('.slot_applogo').hide();
	elSlot.down('.slot_actionmenu_button').hide();
	elSlot.down('.slot_app_fraudwarning').hide();
	$J(elSlot).removeClass('has_item');
	elSlot.hasItem = false;
}

/*
 *		Update polling
 */

var g_bPollInFlight = false;
var g_bPeriodicPollCancelledInFlight = false;
var g_cTradePollFailures = 0;
var g_iNextLogPos = 0;

var g_timerTradePoll = null;
var g_rgLastFullTradeStatus = null;
var g_cMyItemsInTrade = 0;
var g_cTheirItemsInTrade = 0;
var g_cCurrenciesInTrade = 0;

function RequestTradeStatusUpdate()
{
	GetTradeStatus();
}

function GetTradeStatus()
{
	if ( g_bPollInFlight )
		return;

	CancelTradeStatusPoll();
	g_bPollInFlight = true;
	new Ajax.Request( 'https://steamcommunity.com/trade/' + g_ulTradePartnerSteamID + '/tradestatus/', {
			method: 'post',
			parameters: { sessionid: g_sessionID, logpos: g_iNextLogPos, version: g_rgLastFullTradeStatus.version },
			onSuccess: OnPeriodicTradeStatusUpdate,
			onFailure: OnTradeStatusFailure
		}
	);
}

function OnPeriodicTradeStatusUpdate( transport )
{
	// if we got cancelled in flight because some other user-action (added item to trade, readied, etc)
	//	then don't process this update, the user action will return the latest status
	g_bPollInFlight = false;
	if ( g_bPeriodicPollCancelledInFlight )
	{
		g_bPeriodicPollCancelledInFlight = false;
		QueueNextTradeStatusUpdateRequest();
		return;
	}
	else
	{
		OnTradeStatusUpdate( transport );
	}
}

function OnTradeStatusUpdate( transport )
{
	try {
		if ( transport.responseJSON && transport.responseJSON.success )
		{
			var rgNewTradeStatus = transport.responseJSON;

			if ( rgNewTradeStatus.trade_status == 1 ||rgNewTradeStatus.trade_status == 6 )
			{
				// we're done here
				Tutorial.OnCompletedTutorial();
				StopWatchingForUnload();

				if ( rgNewTradeStatus.trade_status == 6 )
				{
					window.location = 'https://steamcommunity.com/my/tradeoffers/view/' + rgNewTradeStatus.tradeid + '?partner=' + g_ulTradePartnerSteamID;
				}
				else
				{
					window.location = 'https://steamcommunity.com/trade/' + rgNewTradeStatus.tradeid + '/receipt/';
				}

				return;
			}
			else if ( rgNewTradeStatus.trade_status == 3 )
			{
				var url = 'https://steamcommunity.com/trade/' + g_ulTradePartnerSteamID + '/cancelled/';
				if ( g_bRequestedCancel )
					url += '?requestedCancel=1';
				StopWatchingForUnload();
				window.location =  url;
				return;
			}
			else if ( rgNewTradeStatus.trade_status == 4 )
			{
				var url = 'https://steamcommunity.com/trade/' + g_ulTradePartnerSteamID + '/';
				if ( $('trade_theirs_timeout').visible() )
					url += '?partnerTimeout=1';
				StopWatchingForUnload();
				window.location = url;
				return;
			}
			else if ( rgNewTradeStatus.trade_status == 5 )
			{
				var url = 'https://steamcommunity.com/trade/' + rgNewTradeStatus.tradeid + '/failed/';
				StopWatchingForUnload();
				window.location = url;
				return;
			}
			else if ( rgNewTradeStatus.trade_status != 0 || !rgNewTradeStatus.me || !rgNewTradeStatus.them )
			{
				// missing expected data- treat this as a failure
				OnTradeStatusFailure();
				return;
			}

			RefreshTradeStatus( rgNewTradeStatus );
			g_rgCurrentTradeStatus = rgNewTradeStatus;
			g_cTradePollFailures = 0;
		}
		else
		{
			OnTradeStatusFailure();
		}
	}
	catch ( e )
	{
		// error updating trade status
		OnTradeStatusFailure();
	}
	QueueNextTradeStatusUpdateRequest();
}

function OnTradeStatusFailure()
{
	g_bPollInFlight = false;

	if ( g_cTradePollFailures++ > 3 )
	{
		StopWatchingForUnload();
		window.location = window.location;
	}

	QueueNextTradeStatusUpdateRequest();
}

function CancelTradeStatusPoll()
{
	if ( g_timerTradePoll )
	{
		window.clearTimeout( g_timerTradePoll );
		g_timerTradePoll = null;
	}
	if ( g_bPollInFlight )
	{
		// tell the in-flight poll to ignore its results as they'll be stale
		g_bPeriodicPollCancelledInFlight = true;
	}
}

function QueueNextTradeStatusUpdateRequest()
{
	CancelTradeStatusPoll();
	g_timerTradePoll = window.setTimeout( GetTradeStatus, TRADE_UPDATE_INTEVRAL );
}

function ElementCount( obj )
{
	if ( !obj )
		return 0;
	else if ( obj instanceof Array )
		return obj.length;
	else
		return Object.keys( obj ).length;
}

function RedrawCurrentTradeStatus()
{
	RefreshTradeStatus( g_rgCurrentTradeStatus, true );
}

function RefreshTradeStatus( rgTradeStatus, bForce )
{
	if ( rgTradeStatus.newversion || bForce )
	{
		var rgTradeStatusForSlots = rgTradeStatus;
		if ( bForce && !rgTradeStatus.newversion )
		{
			// if we are forcing an update (such ass after loading partner's inventory),
			//	 use the last full update for putting items in the slots
			rgTradeStatusForSlots = g_rgLastFullTradeStatus;
		}

		g_cMyItemsInTrade = ElementCount( rgTradeStatusForSlots.me.assets ) + rgTradeStatusForSlots.me.currency.length;
		g_cTheirItemsInTrade = ElementCount( rgTradeStatusForSlots.them.assets ) + rgTradeStatusForSlots.them.currency.length;
		RefreshTradeEscrowDisplay();

		UpdateSlots( rgTradeStatusForSlots.me.assets, rgTradeStatusForSlots.me.currency, true, UserYou, rgTradeStatusForSlots.version );

		UpdateSlots( rgTradeStatusForSlots.them.assets, rgTradeStatusForSlots.them.currency, false, UserThem, rgTradeStatusForSlots.version );

				RecomputeTradeProtectedStatus( rgTradeStatus );
		
		if ( rgTradeStatus.newversion )
			g_rgLastFullTradeStatus = rgTradeStatus;

		g_cCurrenciesInTrade = rgTradeStatusForSlots.me.currency.length + rgTradeStatusForSlots.them.currency.length;
		if ( g_cMyItemsInTrade + g_cTheirItemsInTrade > 0 )
			Tutorial.OnUserAddedItemsToTrade( g_cMyItemsInTrade, g_cTheirItemsInTrade );
	}
	if ( rgTradeStatus.me.ready && !UserYou.bReady || !rgTradeStatus.me.ready && UserYou.bReady )
	{
		UserYou.bReady = rgTradeStatus.me.ready;
		if ( !UserYou.bReady ) // you were unreadied by a trade change
			$('notready_tradechanged_message').show();
	}
	if ( rgTradeStatus.them.ready && !UserThem.bReady || !rgTradeStatus.them.ready && UserThem.bReady )
	{
		UserThem.bReady = rgTradeStatus.them.ready;
	}
	if ( rgTradeStatus.them.connection_pending || ( rgTradeStatus.them.sec_since_touch && rgTradeStatus.them.sec_since_touch > MESSAGE_TRADE_PARTNER_ABSENSE_TIME ) )
	{
		$('trade_theirs_timeout').show();
	}
	else
	{
		$('trade_theirs_timeout').hide();
	}

	g_bConfirmPending = rgTradeStatus.me.confirmed;

	UpdateReadyButtons();

	// only update the event log if we have all the data about the other user's inventory
	if ( rgTradeStatus.events && !UserThem.BIsLoadingInventoryData() && !UserYou.BIsLoadingInventoryData() )
	{
		UpdateEventLog( rgTradeStatus.events );
	}

}

function UpdateSlots( rgSlotItems, rgCurrency, bYourSlots, user, version )
{
	var slotPrefix = bYourSlots ? 'your_slot_' : 'their_slot_';
	var elSlotContainer = bYourSlots ? $('your_slots') : $('their_slots');
	var elCurrencySlotContainer = bYourSlots ? $('your_slots_currency') : $('their_slots_currency');

	// see what the last slot with an item is
	var cMaxSlotId = 0;
	if ( rgSlotItems instanceof Array )
	{
		cMaxSlotId = rgSlotItems.length;
	}
	else
	{
		for ( var slotid in rgSlotItems )
		{
			var iSlot = parseInt( slotid );
			if ( iSlot && !isNaN( iSlot ) )
				cMaxSlotId = Math.max( iSlot, cMaxSlotId );
		}
		cMaxSlotId++;
	}

	var cCurrenciesInTrade = 0;
	for ( var iCurrency = 0; iCurrency < rgCurrency.length; iCurrency++ )
	{
		var currencyUpdate = rgCurrency[iCurrency];

		// just skip pending inventories, the currency will be drawn after the inventory arrival
		var inventory = user.getInventory( currencyUpdate.appid, currencyUpdate.contextid );
		if ( !inventory || inventory.BIsPendingInventory() )
			continue;

		cCurrenciesInTrade++;

		var currency = user.FindCurrency( currencyUpdate.appid, currencyUpdate.contextid, currencyUpdate.currencyid );
		var stack = GetTradeItemStack( user, currency );

		if ( ( parseInt( stack.amount ) + parseInt( stack.fee ) ) != currencyUpdate.amount )
		{
			UpdateTradeItemStackDisplay( currency, stack, currencyUpdate.amount );
			if ( !bYourSlots && !g_bTradeOffer )
				HighlightNewlyAddedItem( stack.element );
		}

		stack.version = version;
	}
	var rgCurrencySlots = elCurrencySlotContainer.childElements();
	if ( cCurrenciesInTrade < rgCurrencySlots.length )
	{
		// there's an extra slot in the trade, remove it
		for ( var iCurrencySlot = 0; iCurrencySlot < rgCurrencySlots.length; iCurrencySlot++ )
		{
			var elSlot = rgCurrencySlots[iCurrencySlot];
			var stack = elSlot.stack;
			if ( stack.version < version )
			{
				elSlot.remove();
				var origCurrency = user.FindCurrency( stack.appid, stack.contextid, stack.id );
				origCurrency.amount = origCurrency.original_amount;
				origCurrency.trade_stack = null;
				if ( bYourSlots )
					UpdateCurrencyDisplay( origCurrency );
			}
		}
	}

	EnsureSufficientTradeSlots( bYourSlots, cMaxSlotId, cCurrenciesInTrade );

	var nNumBadItems = 0;
	var firstBadItem = null;
	var nNumExpiringItems = 0;
	var firstExpiringItem = null;
	var nFullInventoryAppId = false;
	for ( var slot = 0; slot < elSlotContainer.childElements().length; slot++ )
	{
		var elSlot = $( slotPrefix + slot );
		var elCurItem = elSlot.down('.slot_inner').firstDescendant();
		var elNewItem = null;

		var bRemoveCurItem = ( elCurItem != null );

		var bItemIsNewToTrade = false;  //lets us know if we need to indicate this item was added
		var bStackAmountChanged = false;	// if a stackable item's amount has changed, we also treat that like new

		if ( rgSlotItems[slot] )
		{
			var appid = rgSlotItems[slot].appid;
			var contextid = rgSlotItems[slot].contextid;
			var itemid = rgSlotItems[slot].assetid;
			var amount = rgSlotItems[slot].amount;

			// check that we are allowed to receive this item
			if ( !bYourSlots )
			{
				if ( !UserYou.BAllowedToRecieveItems( appid, contextid ) )
				{
					if ( !nFullInventoryAppId && UserYou.BInventoryIsFull( appid, contextid ) )
					{
						nFullInventoryAppId = appid;
					}

					if ( nNumBadItems == 0 )
					{
						firstBadItem = rgSlotItems[slot];
					}

					nNumBadItems++;
				}
			}

			var elItem = user.findAssetElement( appid, contextid, itemid );;
			if ( g_dateEscrowEnd != null && typeof elItem.rgItem.item_expiration == 'string' )
			{
				var dateExpiration = new Date( elItem.rgItem.item_expiration );
				if ( g_dateEscrowEnd >= dateExpiration )
				{
					if ( nNumExpiringItems == 0 )
					{
						firstExpiringItem = rgSlotItems[slot];
					}

					nNumExpiringItems++;
				}
			}

			if ( elCurItem && elCurItem.rgItem && elCurItem.rgItem.appid == appid && elCurItem.rgItem.contextid == contextid
					&& elCurItem.rgItem.id == itemid && !elCurItem.rgItem.unknown )
			{
				// it's already there
				bRemoveCurItem = false;

				if ( elCurItem.rgItem.is_stackable )
				{
					var stack = elCurItem.rgItem;
					bStackAmountChanged = ( amount != stack.amount );
					UpdateTradeItemStackDisplay( stack.parent_item, stack, amount );
				}
			}
			else
			{
				// it's new to the trade
				elNewItem = elItem;
				var item = elNewItem.rgItem;

				if ( !item.unknown )
				{
					bItemIsNewToTrade = true;
				}

				if ( item.is_stackable )
				{
					var stack = GetTradeItemStack( user, item );
					bStackAmountChanged = ( amount != stack.amount );
					UpdateTradeItemStackDisplay( item, stack, amount );

					elNewItem = stack.element;
				}

				if ( elNewItem && elNewItem.parentNode )
				{
					if ( $(elNewItem.parentNode).down('.slot_actionmenu_button') )
					{
						$(elNewItem.parentNode).down('.slot_actionmenu_button').hide();
					}

					if ( BIsInTradeSlot( elNewItem ) )
					{
						CleanupSlot( elNewItem.parentNode.parentNode );
						bItemIsNewToTrade = false;
					}
					elNewItem.remove();
				}
			}
		}

		if ( elCurItem && bRemoveCurItem )
		{
			if ( elCurItem.rgItem && elCurItem.rgItem.is_stackable )
			{
				var stack = elCurItem.rgItem;
				UpdateTradeItemStackDisplay( stack.parent_item, stack, 0 );
				elCurItem.remove();
			}
			else if ( elCurItem.rgItem && elCurItem.rgItem.homeElement )
				elCurItem.rgItem.homeElement.appendChild( elCurItem.remove() );
			else
				elCurItem.remove();
			CleanupSlot( elSlot );
		}

		if ( elNewItem )
		{
			PutItemInSlot( elNewItem, elSlot );
			if ( bItemIsNewToTrade && !bYourSlots && !g_bTradeOffer )
			{
				HighlightNewlyAddedItem( elNewItem );
			}
		}
		else if ( bStackAmountChanged && !bYourSlots && !g_bTradeOffer )
		{
			HighlightNewlyAddedItem( elCurItem );
		}
	}

	if ( !bYourSlots && nNumBadItems != g_nItemsFromContextWithNoPermissionToReceive && !UserThem.BIsLoadingInventoryData() )
	{
		g_nItemsFromContextWithNoPermissionToReceive = nNumBadItems;

		if ( nNumBadItems > 0 )
		{
			var strEvent = "";
			var item = user.findAsset( firstBadItem.appid, firstBadItem.contextid, firstBadItem.assetid );
			if ( item )
			{
				if ( nNumBadItems == 1 )
				{
					strEvent = 'You are not allowed to receive the item "%1$s."'
							.replace( '%1$s', item.name.escapeHTML() );
				}
				else
				{
					strEvent = 'You are not allowed to receive %1$s of the items being offered including "%2$s."'
							.replace( '%1$s', nNumBadItems )
							.replace( '%2$s', item.name.escapeHTML() );
				}
			}
			else
			{
				if ( nNumBadItems == 1 )
				{
					strEvent = 'You are not allowed to receive one of the items being offered.';
				}
				else
				{
					strEvent = 'You are not allowed to receive %1$s of the items being offered.'
							.replace( '%1$s', nNumBadItems );
				}
			}

			if ( nFullInventoryAppId )
			{
				var rgAppData = g_rgAppContextData[nFullInventoryAppId];
				var strEventAppend = 'Your inventory for %1$s is full.'
						.replace( '%1$s', rgAppData.name.escapeHTML() );

				strEvent = strEvent + ' ' + strEventAppend;
			}

			var elEvent = new Element( 'div', {'class': 'logevent' } );
			elEvent.update( strEvent );
			$('log').appendChild( elEvent );
		}
	}

	if ( nNumExpiringItems != g_rgnItemsExpiringBeforeEscrow[bYourSlots ? 0 : 1] )
	{
		g_rgnItemsExpiringBeforeEscrow[bYourSlots ? 0 : 1] = nNumExpiringItems;

		if ( nNumExpiringItems > 0 )
		{
			var strEvent = "";
			var item = user.findAsset( firstExpiringItem.appid, firstExpiringItem.contextid, firstExpiringItem.assetid );
			if ( item )
			{
				if ( nNumExpiringItems == 1 )
				{
					strEvent = 'The item "%1$s" cannot be included in this trade because it will expire before the trade hold period is over.'
						.replace( '%1$s', item.name.escapeHTML() );
				}
				else
				{
					strEvent = 'Some items, including "%1$s," cannot be included in this trade because they will expire before the trade hold period is over.'
						.replace( '%1$s', item.name.escapeHTML() );
				}
			}
			else
			{
				if ( nNumExpiringItems == 1 )
				{
					strEvent = 'One item cannot be included in this trade because it will expire before the trade hold period is over.';
				}
				else
				{
					strEvent = 'Some items cannot be included in this trade because they will expire before the trade hold period is over.';
				}
			}

			var elEvent = new Element( 'div', {'class': 'logevent' } );
			elEvent.update( strEvent );
			$('log').appendChild( elEvent );
		}
	}
}

// default border color: #3A3A3A
function HighlightNewlyAddedItem( elItem )
{

	var rgItem = elItem.rgItem;
	var slotParent = elItem.parentNode;

	slotParent.style.backgroundColor = '#ffffff';
	elItem.hide();
	new Effect.Appear( elItem, {duration: 0.6, afterFinish: function() { slotParent.style.backgroundColor = ''; } } );

}

/*
 *		Trade events log
 */

var EventLogAddYouTemplate = new Template( 'You added <span class="item" style="#{itemstyle}">#{itemname}</span>');
var EventLogAddThemTemplate = new Template( '#{theirname} added <span class="item" style="#{itemstyle}">#{itemname}</span>');
var EventLogRemoveYouTemplate = new Template( 'You removed <span class="item" style="#{itemstyle}">#{itemname}</span>');
var EventLogRemoveThemTemplate = new Template( '#{theirname} removed <span class="item" style="#{itemstyle}">#{itemname}</span>');
var EventLogReadyYouTemplate = new Template( 'You are ready' );
var EventLogReadyThemTemplate = new Template( '#{theirname} is ready');
var EventLogUnReadyYouTemplate = new Template( 'You are not ready' );
var EventLogUnReadyThemTemplate = new Template( '#{theirname} is not ready');
var EventLogIncreaseCurrencyYouTemplate = new Template( 'You increased the amount of <span class="item" style="#{itemstyle}">#{currencyname}</span> to <span style="#{itemstyle}">#{amount}</span>');
var EventLogDecreaseCurrencyYouTemplate = new Template( 'You decreased the amount of <span class="item" style="#{itemstyle}">#{currencyname}</span> to <span style="#{itemstyle}">#{amount}</span>');
var EventLogIncreaseCurrencyThemTemplate = new Template( '#{theirname} increased the amount of <span class="item" style="#{itemstyle}">#{currencyname}</span> to <span style="#{itemstyle}">#{amount}</span>');
var EventLogDecreaseCurrencyThemTemplate = new Template( '#{theirname} decreased the amount of <span class="item" style="#{itemstyle}">#{currencyname}</span> to <span style="#{itemstyle}">#{amount}</span>');

function UpdateEventLog( events )
{
	var iLastLog = g_iNextLogPos - 1;
	var bDidAppend = false;
	var bNeedInventoryLoad = false;
	for ( var i in events )
	{
		if ( i < g_iNextLogPos )
			continue;
		var event = events[i];

		var bTheirAction = ( event.steamid && event.steamid == g_ulTradePartnerSteamID );
		var elEvent = new Element( 'div', {'class': 'logevent' } );
		var strEvent = null;
		var strAfterEvent = null;
		switch ( parseInt( event.action ) )
		{
		case 0:
		case 1:
			var template = null;
			if ( event.action == 0 )
				template = bTheirAction ? EventLogAddThemTemplate : EventLogAddYouTemplate;
			else
				template = bTheirAction ? EventLogRemoveThemTemplate : EventLogRemoveYouTemplate;

			var user = bTheirAction ? UserThem : UserYou;
			var item = user.findAsset( event.appid, event.contextid, event.assetid );
			if ( !item && user.BIsLoadingInventoryData() )
			{
				bNeedInventoryLoad = true;
				break;
			}

			var itemname = ( item ) ? item.name.escapeHTML() : 'Unknown Item';
			var itemstyle = ( item && item.name_color ) ? 'color: #' + item.name_color + ';' : '';

			strEvent = template.evaluate( { theirname: g_strTradePartnerPersonaName, itemname: itemname, itemstyle: itemstyle } );

			break;
		case 2:
		case 3:
			var template = null;
			if ( event.action == 2 )
				template = bTheirAction ? EventLogReadyThemTemplate : EventLogReadyYouTemplate;
			else
				template = bTheirAction ? EventLogUnReadyThemTemplate : EventLogUnReadyYouTemplate;

			strEvent = template.evaluate( { theirname: g_strTradePartnerPersonaName } );

			break;
		case 6:
			var template = null;
			var bAmountChanged = false;
			var newAmount = parseInt( event.amount );
			var oldAmount = parseInt( event.old_amount );

			if ( event.amount == 0 )
			{
				template = bTheirAction ? EventLogRemoveThemTemplate : EventLogRemoveYouTemplate;
			}
			else if ( event.old_amount == 0 )
			{
				template = bTheirAction ? EventLogAddThemTemplate : EventLogAddYouTemplate;
			}
			else if ( newAmount > oldAmount )
			{
				bAmountChanged = true;
				template = bTheirAction ? EventLogIncreaseCurrencyThemTemplate : EventLogIncreaseCurrencyYouTemplate;
			}
			else if ( newAmount < oldAmount )
			{
				bAmountChanged = true;
				template = bTheirAction ? EventLogDecreaseCurrencyThemTemplate : EventLogDecreaseCurrencyYouTemplate;
			}

			var user = bTheirAction ? UserThem : UserYou;
			var currency = user.FindCurrency( event.appid, event.contextid, event.currencyid );
			if ( !currency && user.BIsLoadingInventoryData() )
			{
				bNeedInventoryLoad = true;
				break;
			}

			var currencyname = ( currency ) ? currency.name.escapeHTML() : 'Unknown Item';

			var itemname = v_numberformat( event.amount == 0 ? event.old_amount : event.amount ) + ' ' + currencyname;
			var itemstyle = ( currency && currency.name_color ) ? 'color: #' + currency.name_color + ';' : '';

			strEvent = template.evaluate(
					{
						theirname: g_strTradePartnerPersonaName,
						itemname: itemname,
						currencyname: currencyname,
						itemstyle: itemstyle,
						amount: v_numberformat( event.amount )
					}
			);

			break;
		case 7:
			if ( g_bSuppressChat )
				break;

			if ( bTheirAction )
				strEvent = '<span class="playerchatname">' + g_strTradePartnerPersonaName + '</span>: ';
			else
				strEvent = '<span class="playerchatname">' + g_strYourPersonaName + '</span>: ';

			strEvent += event.text ? event.text.substr( 0, 100 ).escapeHTML().replace( /\n/g, '' ) : '';

			break;
		case 4:
		case 5:
		default:
			continue;
		}
		// we need to wait for some items to load, so abort!
		if ( bNeedInventoryLoad )
			break;

		if ( strEvent )
		{
			strEvent += ' <span class="timestamp">' + ( new Date(event.timestamp * 1000).toLocaleTimeString() ) + '</span>';
			elEvent.update( strEvent );
			$('log').appendChild( elEvent );
			bDidAppend = true;
		}

		if ( strAfterEvent )
		{
			var elAfterEvent = new Element( 'div', {'class': 'logevent' } );
			elAfterEvent.update( strAfterEvent );
			$('log').appendChild( elAfterEvent );
			bDidAppend = true;
		}

		iLastLog = Math.max( iLastLog, i );
	}
	if ( bDidAppend )
	{
		$('log').scrollTop = 10000;
	}
	g_iNextLogPos = iLastLog + 1;
}

/*
 *		Ready/Confirm
 */

var g_bConfirmPending = false;

function ToggleReady( bReady )
{
	var fnReady = function() {
		UserYou.bReady = bReady;

		GTradeStateManager.ToggleReady( bReady );

		UpdateReadyButtons();
		$('notready_tradechanged_message').hide();
	};

		if ( bReady && g_cTheirItemsInTrade > 0 && !g_bWarnedAboutPlaytime && typeof(g_rgPlayedApps) != 'undefined' && g_rgPlayedApps !== false )
	{
		var strTitle = 'This trade appears suspicious';
		var strWarning = 'One or more of the items you\'re receiving in this trade come from games that you have never played:';
		var strButton = 'Yes, I want items for games I\'ve never played'.replace( /%s/, g_strTradePartnerPersonaName );

		strWarning += '<ul class="trade_warning_item_list">';
		var bShouldWarn = false;
		var rgAssets = g_bTradeOffer ? g_rgCurrentTradeStatus.them.assets : g_rgLastFullTradeStatus.them.assets;
		for ( var i = 0; i < rgAssets.length; i++ )
		{
			var rgItem = UserThem.findAsset( rgAssets[i].appid, rgAssets[i].contextid, rgAssets[i].assetid );
			if ( typeof( g_rgPlayedApps[rgAssets[i].appid] ) == 'undefined' || g_rgPlayedApps[rgAssets[i].appid] == false )
			{
				bShouldWarn = true;
				strWarning += '<li' + ( rgItem && rgItem.name_color ? ' style="color: #' + rgItem.name_color + ';"' : '' ) + '>';
				if ( rgItem )
					strWarning += rgItem.name.escapeHTML() + ' <span class="trade_warning_item_type">(' + rgItem.type.escapeHTML() + ')</span>';
				else
					strWarning += 'Unknown Item';
				strWarning += '</li>';
			}
		}
		strWarning += '</ul>';

		if ( bShouldWarn )
		{
			var elWarning = $J( '<div/>', { 'class': 'trade_warn_dialog_content' } ).html( strWarning.replace( /%s/g, g_strTradePartnerPersonaName ) );
			ShowConfirmDialog( strTitle, elWarning, strButton ).done( function () {
				g_bWarnedAboutPlaytime = true;
				ToggleReady( true );
			} );

			return;
		}
	}

	if ( bReady && g_cTheirItemsInTrade > 0 && !g_bWarnedAboutUnvettedApp )
	{
		var strTitle = 'This trade appears suspicious';
		var strWarning = 'One or more of the items you\'re receiving in this trade come from new games on Steam. Use caution with these items:';
		var strButton = 'Yes, I trust %s'.replace( /%s/, g_strTradePartnerPersonaName );

		strWarning += '<ul class="trade_warning_item_list">';
		var bShouldWarn = false;
		var rgAssets = g_bTradeOffer ? g_rgCurrentTradeStatus.them.assets : g_rgLastFullTradeStatus.them.assets;
		for ( var i = 0; i < rgAssets.length; i++ )
		{
			var rgItem = UserThem.findAsset( rgAssets[i].appid, rgAssets[i].contextid, rgAssets[i].assetid );

			if ( ( typeof( g_rgAppContextData[rgAssets[i].appid] ) != 'undefined' && g_rgAppContextData[rgAssets[i].appid].store_vetted == false ) ||
				( typeof( UserThem.rgAppInfo[rgAssets[i].appid] ) != 'undefined' && UserThem.rgAppInfo[rgAssets[i].appid].store_vetted == false ) )
			{
				bShouldWarn = true;
				strWarning += '<li' + ( rgItem && rgItem.name_color ? ' style="color: #' + rgItem.name_color + ';"' : '' ) + '>';
				if ( rgItem )
					strWarning += rgItem.name.escapeHTML() + ' <span class="trade_warning_item_type">(' + rgItem.type.escapeHTML() + ')</span>';
				else
					strWarning += 'Unknown Item';
				strWarning += '</li>';
			}
		}
		strWarning += '</ul>';

		if ( bShouldWarn )
		{
			var elWarning = $J( '<div/>', { 'class': 'trade_warn_dialog_content' } ).html( strWarning.replace( /%s/g, g_strTradePartnerPersonaName ) );
			ShowConfirmDialog( strTitle, elWarning, strButton ).done( function () {
				g_bWarnedAboutUnvettedApp = true;
				ToggleReady( true );
			} );

			return;
		}
	}

		if ( bReady && ( g_bWarnOnReady || g_cTheirItemsInTrade == 0 ) )
	{
		var strWarning = '';
		var strButton = '';
		var strTitle = 'This trade appears suspicious';
		if ( g_cTheirItemsInTrade == 0 )
		{
			if ( g_bTradeOffer && GTradeStateManager.m_eTradeOfferState == CTradeOfferStateManager.TRADE_OFFER_STATE_NEW )
			{
				strTitle =  'Warning';
				strWarning = 'You have not selected any items in exchange for yours.';
			}
			else
			{
				strWarning = '%s has not offered any items in the trade.  When this trade is completed, you will not receive anything.  If %s has promised you Steam Wallet funds, CD-Keys, or other items outside the trade window, they may be attempting to scam you.';
			}

			strWarning += '<br><br>' + 'Please confirm that you are giving your items away and expect nothing in return.';
			strButton = 'Yes, this is a gift';
		}
		else
		{
			strWarning = 'Upon completion of this trade, you will only receive the following items:';
			strWarning += '<ul class="trade_warning_item_list">';
			var rgAssets = g_bTradeOffer ? g_rgCurrentTradeStatus.them.assets : g_rgLastFullTradeStatus.them.assets;
			for ( var i = 0; i < rgAssets.length; i++ )
			{
				var rgItem = UserThem.findAsset( rgAssets[i].appid, rgAssets[i].contextid, rgAssets[i].assetid );
				strWarning += '<li' + ( rgItem && rgItem.name_color ? ' style="color: #' + rgItem.name_color + ';"' : '' ) + '>';
				if ( rgItem )
					strWarning += rgItem.name.escapeHTML() + ' <span class="trade_warning_item_type">(' + rgItem.type.escapeHTML() + ')</span>';
				else
					strWarning += 'Unknown Item';
				// afarnsworthTODO: fraud warnings!
				strWarning += '</li>';
			}
			strWarning += '</ul>';
			strWarning += '<span class="trade_warning_bold">You will not receive any other items or money.  If %s has promised you any other items, Steam Wallet funds, or CD-Keys outside the trade window, they may be attempting to scam you.</span>';
			strButton = 'Yes, I trust %s'.replace( /%s/, g_strTradePartnerPersonaName );
		}
		var elWarning = $J('<div/>', {'class': 'trade_warn_dialog_content' }).html( strWarning.replace( /%s/g, g_strTradePartnerPersonaName ) );
		ShowConfirmDialog( strTitle, elWarning, strButton ).done( fnReady );
	}
	else
	{
		fnReady();
	}
}

var g_bConfirmInFlight = false;
function ConfirmTrade()
{
	if ( g_bConfirmInFlight )
		return;

	function OnTradeConfirmFailed( data )
	{
		if ( data.eresult == 25 )
		{
			ShowAlertDialog( 'This trade cannot be completed because it would exceed the maximum number of items allowed in your inventory.' );
		}
		else
		{
			RequestTradeStatusUpdate();
		}
	}

	if ( UserYou.bReady && UserThem.bReady )
	{
		CancelTradeStatusPoll();
		g_bConfirmInFlight = true;
		new Ajax.Request( 'https://steamcommunity.com/trade/' + g_ulTradePartnerSteamID + '/confirm/', {
			method: 'post',
			parameters: {
				sessionid: g_sessionID,
				version: g_rgLastFullTradeStatus.version
			},
			onSuccess: OnTradeStatusUpdate,
			onFailure: OnTradeConfirmFailed,
			onComplete: function() { g_bConfirmInFlight = false; }
		});
	}
}

function UpdateReadyButtons()
{
	if ( UserYou.bReady )
	{
		$('you_cantready').hide();
		$('you_notready').hide();
		$('you_ready').show();
		$('trade_area').addClassName('ready');
		$('trade_yours').addClassName('ready');
		$('inventory_box').addClassName('ready');
		Tutorial.OnUserIsReady();
	}
	else
	{
		var badOffer = g_bWalletBalanceWouldBeOverMax || g_nItemsFromContextWithNoPermissionToReceive > 0 || g_rgnItemsExpiringBeforeEscrow[0] > 0 || g_rgnItemsExpiringBeforeEscrow[1] > 0;
		if ( !badOffer && ( g_cMyItemsInTrade > 0 || g_cTheirItemsInTrade > 0 ) )
		{
			$('you_cantready').hide();
			$('you_notready').show();
		}
		else
		{
			var strMessage;
			if ( badOffer )
			{
				strMessage = 'You can\'t accept the offer. See chat.';
			}
			else
			{
				if ( g_bTradeOffer )
					strMessage = 'Waiting for you to offer one or more items.';
				else
					strMessage = 'Waiting for someone to make an offer.';
			}

			$$('#you_cantready .content').each( function( elContent ) {
				elContent.update( strMessage );
			});

			$('you_notready').hide();
			$('you_cantready').show();
		}
		$('you_ready').hide();
		$('trade_area').removeClassName('ready');
		$('trade_yours').removeClassName('ready');
		$('inventory_box').removeClassName('ready');
	}

	if ( !g_bTradeOffer )
	{
		if ( UserThem.bReady )
		{
			$('them_notready').hide();
			$('them_ready').show();
			$('trade_theirs').addClassName('ready');
		}
		else
		{
			$('them_notready').show();
			$('them_ready').hide();
			$('trade_theirs').removeClassName('ready');
		}
	}
	else
	{
		if ( g_bReadOnly )
		{
			//read only is the state where we are vieiwing a trade offer but haven't clicked on the "let's modify" button yet
			$('trade_yours').addClassName('ready');
			$('trade_theirs').addClassName('ready');
		}
		else if ( UserYou.bReady )
		{
			$('trade_theirs').addClassName('ready');
		}
		else
		{
			$('trade_theirs').removeClassName('ready');
		}
	}

	if ( !UserYou.bReady || !UserThem.bReady )
	{
		g_bConfirmPending = false;
	}

	GTradeStateManager.UpdateConfirmButtonStatus();
}

var g_bRequestedCancel = false;
var g_bTradeCancelled = false;
function CancelTrade()
{
	if ( g_bTradeCancelled )
		return;

	g_bTradeCancelled = true;
	g_bRequestedCancel = true;
	new Ajax.Request( 'https://steamcommunity.com/trade/' + g_ulTradePartnerSteamID + '/cancel/', {
		method: 'post',
		parameters: {
			sessionid: g_sessionID
		},
		onComplete: function() { g_bTradeCancelled = false; RequestTradeStatusUpdate(); }
	});
}


/* currency transfer in/out of trade */
function PresentCurrencyDialog( currency )
{
	CurrencyDialog.Show( currency );
}

function UpdateCurrencyDisplay( currency )
{
	// no display element
	if ( !currency.element )
		return;

	var elAmount = currency.element.down('.item_currency_amount');
	if ( elAmount )
	{
		if ( CurrencyIsWalletFunds( currency ) )
		{
			var bShouldConvert = typeof(g_rgWalletInfo) != 'undefined' &&
					g_rgWalletInfo['wallet_currency'] != g_rgWalletInfo['wallet_other_currency'] &&
					g_rgWalletInfo['wallet_currency'] != ( currency.id % 1000 );

			var strAmount = ( currency.owner != UserYou && bShouldConvert ?
					v_currencyformat( ConvertToOurCurrencyForDisplay( currency.amount ), GetCurrencyCode( g_rgWalletInfo['wallet_currency'] ) ) :
					v_currencyformat( currency.amount, currency.name.escapeHTML() ) );

			// Display the fee in small text underneath if applicable
			if ( currency.fee > 0 && currency.owner == UserYou )
			{
				strAmount += "<div style=\"font-size: xx-small\">" + v_currencyformat( currency.fee, currency.name.escapeHTML() ) + "</div>";
			}
			elAmount.update( strAmount );
		}
		else
		{
			elAmount.update( v_numberformat( currency.amount ) );
		}
	}
}


CurrencyDialog = {

	m_bInitialized: false,
	m_currency: null,
	m_fnDocumentKeyHandler: null,
	m_slider: null,
	m_elSliderHandle: null,
	m_elSliderProgress: null,
	m_elSliderCount: null,
	m_bIgnoreSlider: false,
	m_bIsWallet: false,

	m_$Dialog: null,
	m_Modal: null,

	Initialize: function() {

		this.m_$Dialog = $J('#trade_currency_dialog');

		this.m_elSliderProgress = this.m_$Dialog.find('#trade_currency_slider_ctn').find('.slider_progress');
		this.m_elSliderCount = this.m_$Dialog.find('#trade_currency_slider_count');


		this.m_bInitialized = true;
	},

	Show: function ( currency ) {

		if ( !this.m_bInitialized )
			this.Initialize();

		this.m_currency = currency;
		this.m_bIsWallet = CurrencyIsWalletFunds( currency );
		var idAppend = ( this.m_bIsWallet ? '_wallet' : '' );

		var stack = currency.trade_stack;

		if ( this.m_bIsWallet )
			this.m_$Dialog.addClass('trade_wallet');
		else
			this.m_$Dialog.removeClass('trade_wallet');

		if ( !this.m_bIsWallet )
		{
			this.m_$Dialog.find('#trade_currency_dialog_currencyname1').text( currency.name );
			this.m_$Dialog.find('#trade_currency_dialog_currencyname2').text( currency.name );
		}

		var rgContext = UserYou.GetContext( currency.appid, currency.contextid );
		this.m_$Dialog.find('#trade_currency_dialog_contextname').text( rgContext ? rgContext.name : '' );

		var amount = stack && stack.amount > 0 ? stack.amount : 1;

		this.m_$Dialog.find('#trade_currency_input').val( amount );

		var iconUrl = ImageURL( currency.icon_url, 42, '42f' );
		this.m_$Dialog.find('#trade_currency_dialog_symbol1').attr( 'src', iconUrl );
		this.m_$Dialog.find('#trade_currency_dialog_symbol2').attr( 'src', iconUrl );

		this.m_$Dialog.find('#trade_currency_input').css( 'color', currency.name_color ? '#' + currency.name_color : '' );
		this.m_$Dialog.find('#trade_currency_dialog_remaining_display').css( 'color', currency.name_color ? '#' + currency.name_color : '' );

		this.m_$Dialog.find('#trade_currency_dialog_error').text('');

		var maximum = this.m_currency.original_amount;

		this.m_$Dialog.find('#trade_currency_input').on( 'keypress', this.OnInputKeyPress.bindAsEventListener(this) );
		this.m_$Dialog.find('#trade_currency_input').on( 'keyup', this.OnInputKeyUp.bindAsEventListener(this) );

		this.m_Modal = ShowConfirmDialog( '', this.m_$Dialog.show() ).done( $J.proxy( this.OnAccept, this ) ).fail( $J.proxy( this.OnCancel, this ) );
		this.m_$Dialog.find('#trade_currency_input').focus();

		this.m_elSliderHandle = this.m_$Dialog.find('#trade_currency_slider').children('.handle');
		this.m_slider = new CSlider( this.m_$Dialog.find('#trade_currency_slider'), this.m_elSliderHandle, {
			min: 0,
			max: maximum,
			value: amount,
			fnOnChange: this.OnSliderSlide.bind( this ),
		});
		this.OnSliderSlide( amount );
	},

	UpdateRemainingCurrencyDisplay: function() {
		var inputValue = this.GetInputValueAsInt();
		var nAmount = inputValue;
		var nDisplayAmount = this.m_currency.original_amount;
		if ( nAmount <= this.m_currency.original_amount )
			nDisplayAmount = this.m_currency.original_amount - nAmount;

		this.m_$Dialog.find('#trade_currency_dialog_remaining_display').text( v_numberformat( nDisplayAmount ) );
	},

	DisplayError: function( error ) {
		this.m_$Dialog.find('#trade_currency_dialog_error').text( error );
		this.m_$Dialog.find('#trade_currency_dialog_error').css( 'color', '#ffffff' );
		new Effect.Morph( this.m_$Dialog.find('#trade_currency_dialog_error')[0], { style: {color: '#ff0000'}, duration: 0.25 } );
	},

	Dismiss: function() {
		this.m_Modal && this.m_Modal.Dismiss();
		this.m_Modal = null;
	},

	GetInputValueAsInt: function() {
		var nAmount;
		var strAmount = this.m_$Dialog.find('#trade_currency_input').val();

		if ( !strAmount )
		{
			return 0;
		}

		if ( this.m_bIsWallet )
		{
			nAmount = GetPriceValueAsInt( strAmount );
		}
		else
		{
			nAmount = parseInt( strAmount.replace( /[,.]/g, '' ) );
		}

		nAmount = Math.max( nAmount, 0 );
		return nAmount;
	},

	OnAccept: function() {

		var inputValue = (this.m_bIsWallet ? this.m_$Dialog.find('#trade_currency_input').val().replace( GetCurrencySymbol( this.m_currency.name.escapeHTML() ), '' ).replace( ',', '.' ).replace( '.--', '.00') : this.m_$Dialog.find('#trade_currency_input').val() );
		if ( ! inputValue.match( /^[0-9,.]*$/ ) )
		{
			this.DisplayError( 'Please enter a valid amount above.' );
			return;
		}

		var xferAmount = this.GetInputValueAsInt();

		if ( xferAmount > this.m_currency.original_amount )
		{
			this.DisplayError( 'You do not have enough ' + this.m_currency.name.escapeHTML() + '.' );
			return;
		}

		SetStackableItemInTrade( this.m_currency, xferAmount );

		this.Dismiss();
	},

	OnCancel: function() {
	},

	OnInputKeyPress: function( event ) {
		if ( event.keyCode == Event.KEY_RETURN )
		{
			this.OnAccept( event );
		}
	},

	OnInputKeyUp: function( event ) {

		var value = this.GetInputValueAsInt();

		this.UpdateRemainingCurrencyDisplay();

		this.m_bIgnoreSlider = true;
		this.m_slider.SetValue( value );
		this.m_bIgnoreSlider = false;
		this.UpdateSliderNumberDisplays( value );
	},

	UpdateSliderNumberDisplays: function( value )
	{
		var flooredValue = Math.floor( value );
		var strValue = ( this.m_bIsWallet ? v_currencyformat( flooredValue, this.m_currency.name ) : v_numberformat( flooredValue ) );

		this.m_elSliderProgress.css( 'width', this.m_elSliderHandle.css('left') );

		this.m_elSliderCount.text( strValue );
		this.m_elSliderCount.css( 'left', ( parseInt( this.m_elSliderHandle.css('left') ) - ( this.m_elSliderCount.width() / 2 ) + 12 ) + 'px' );
	},

	SetInputValuesFromSlider: function( value )
	{
		var flooredValue = Math.floor( value );
		var strValue = ( this.m_bIsWallet ? v_currencyformat( flooredValue, this.m_currency.name ) : v_numberformat( flooredValue ) );
		this.m_$Dialog.find('#trade_currency_input').val( strValue );
		this.UpdateRemainingCurrencyDisplay();
	},

	OnSliderSlide: function( value, bInDrag )
	{
		this.UpdateSliderNumberDisplays( value );

		if ( bInDrag )
		{
			this.m_elSliderHandle.addClass('active');
		}
		else
		{
			this.m_elSliderHandle.removeClass('active');
		}

		this.SetInputValuesFromSlider( value );
	}
};

WarningDialog = {

	m_bInitialized: false,
	m_fnDocumentKeyHandler: null,

	Initialize: function() {
		$('trade_currency_dialog_warning_accept').observe( 'click', this.OnAccept.bindAsEventListener(this) );

		this.m_bInitialized = true;
	},

	Show: function ( strWarning ) {

		if ( !this.m_bInitialized )
			this.Initialize();

		this.m_fnDocumentKeyHandler = this.OnDocumentKeyPress.bindAsEventListener( this );
		$(document).observe( 'keydown', this.m_fnDocumentKeyHandler );

		$('trade_currency_dialog_warning_contents').update( strWarning );
		showModal( 'trade_currency_dialog_warning', true );
	},

	Dismiss: function() {
		$(document).stopObserving( 'keydown', this.m_fnDocumentKeyHandler );
		hideModal( 'trade_currency_dialog_warning' );
	},

	OnAccept: function( event ) {

		this.Dismiss();
		event.stop();
	},

	OnDocumentKeyPress: function( event ) {
		if ( event.keyCode == Event.KEY_ESC || event.keyCode == Event.KEY_RETURN )
		{
			this.OnAccept();
		}
	}
};

function GetTradeItemStack( user, item )
{
	var stack = item.trade_stack;
	if ( !stack )
	{

		// build a virtual currency element that will represent the currency in the trade
		stack = Object.clone( item );
		stack.amount = 0;
		stack.fee = 0;
		stack.parent_item = item;
		stack.owner = user;
		var Inventory = user.getInventory( item.appid, item.contextid );
		var elStack = Inventory.BuildItemElement( stack );

		if ( typeof( elStack.drag_image ) != 'undefined' )
		{
			if ( elStack.lazyload_image )
			{
				elStack.lazyload_image = elStack.drag_image;
				delete elStack.drag_image;
			}
			else
			{
				// The image may have already been created (trade partner inventory)
				var elImage = elStack.select('img');
				if ( elImage )
				{
					elStack.drag_reset_image = elImage[0].src;
					elImage[0].src = elStack.drag_image;
				}
			}
		}

		Inventory.LoadItemImage( elStack );

		elStack.id = 'tradestack_' + stack.id;
		stack.element = elStack;
		stack.homeElement = null;

		// for currency, we make a unique slot for this element right now
		if ( item.is_currency )
		{
			var elSlot = CreateCurrencyTradeSlot( user == UserYou, item );
			PutItemInSlot( elStack, elSlot );

			elSlot.stack = stack;
		}

		if ( user == UserYou )
		{
			MakeCurrencyDraggable( elStack );
			elStack.observe( 'click', OnCurrencyInTradeClick.bind( null, item ) );
		}

		item.trade_stack = stack;
	}
	return stack;
}

function UpdateTradeItemStackDisplay( item, stack, amount )
{
	if ( amount != parseInt( stack.amount ) + parseInt( stack.fee ) )
	{
		item.amount = item.original_amount - amount;
		stack.amount = amount;
		stack.fee = 0;

		UpdateCurrencyDisplay( item );
		UpdateCurrencyDisplay( stack );
	}
}

function OnCurrencyInTradeClick( currency )
{
	if ( !g_bInDrag )
	{
		PresentCurrencyDialog( currency );
	}
}

function OnChatKeypress( event )
{
	// try not to catch any browser shortcuts
	if ( event.shiftKey )
		return;

	var keynum = event.which || event.keyCode;

	if ( keynum == Event.KEY_RETURN )
	{
		DoChat();
		event.stop();
	}
}

function OnChatKeyup( event )
{
	var elChatText = $('chat_text_entry');

	UpdateSendChatBtnState();

}

function UpdateSendChatBtnState()
{
	var elChatText = $('chat_text_entry');
	if ( elChatText && elChatText.value && v_trim( elChatText.value ).length > 0 )
		$('chat_send_btn').addClassName( 'active' );
	else
		$('chat_send_btn').removeClassName( 'active' );
}

function OnChatUpdate()
{
	UpdateSendChatBtnState.defer();
}

function DoChat()
{
	var elChatText = $('chat_text_entry');
	if ( elChatText && elChatText.value && v_trim( elChatText.value ).length > 0 )
	{
		SendChatMsg( elChatText.value );
	}
	elChatText.value = '';
	UpdateSendChatBtnState();
}

function SendChatMsg( strMessage )
{
	// send chat message will respond with the latest trade status (which should include the new message in the chat log)
	CancelTradeStatusPoll();
	new Ajax.Request( 'https://steamcommunity.com/trade/' + g_ulTradePartnerSteamID + '/chat/', {
		method: 'post',
		parameters: {
			sessionid: g_sessionID,
			message: strMessage,
			logpos: g_iNextLogPos,
			version: g_rgLastFullTradeStatus.version
		},
		onSuccess: OnTradeStatusUpdate,
		onFailure: OnTradeStatusFailure
	});
}

/*
	item filtering
 */

function TransferFocusToChat( event )
{
	if ( event.keyCode == 116 )
	{
		StopWatchingForUnload();
		return;
	}

	if ( document.activeElement.tagName == "TEXTAREA" || ( document.activeElement.tagName == "INPUT" && document.activeElement.type == "text" ) )
		return;

	// try not to catch any browser shortcuts
	if ( event.altKey || event.ctrlKey || event.metaKey )
		return;

	var c=null;
	if ( event.charCode )
		c = event.charCode;
	else
		c = event.keyCode;
	if ( c >= 65 && c <= 90 || c >= 48 && c <= 57 || c >= 97 && c <= 122 )
	{
		// this doesn't work outside of chrome, firefox has lost the keystroke by the time the control
		//		gets focus
		$('chat_text_entry').focus();
	}
}

function CTutorial( MAX_STEPS )
{
	this.bActive = false;
	this.iStep = 1;
	this.MAX_STEPS = MAX_STEPS;
}

CTutorial.prototype.Init = function() {
	this.bActive = true;
	this.UpdateStepDisplay();
};

CTutorial.prototype.UpdateStepDisplay = function() {
	for ( var i = 1; i <= this.MAX_STEPS; i++ )
	{
		var elArrow = $('tutorial_arrow_step' + i );
		var elStep = $('tutorial_message_step' + i );
		if ( elArrow )
		{
			if ( this.bActive && i == this.iStep )
			{
				elArrow.show();
				$(elArrow.parentNode).addClassName('activeArrow');
			}
			else
			{
				elArrow.hide();
				$(elArrow.parentNode).removeClassName('activeArrow');
			}
		}

		if ( elStep )
		{
			if ( i == this.iStep )
				elStep.show();
			else
				elStep.hide();
		}
	}
};

CTutorial.prototype.AdvanceToStep = function( step ) {
	if ( this.bActive && this.iStep < step )
	{
		this.iStep = step;
		this.UpdateStepDisplay();
	}
};


CTutorial.prototype.EndTutorial = function() {
	var elHeaderMessage = $('tutorial_header_message');
	if ( elHeaderMessage && elHeaderMessage.visible() )
	{
		new Effect.BlindUp( elHeaderMessage, {duration: 0.25 } );
	}
	this.bActive = false;
	// update step display will hide all step arrows when active is false
	this.UpdateStepDisplay();
	this.OnCompletedTutorial();
};

CTutorial.prototype.OnCompletedTutorial = function() {
	//SetCookie( 'bCompletedTradeTutorial', 'true', 365 * 10, g_bTradeOffer ? '/tradeoffer/' : '/trade/' );
};


CTutorial.prototype.OnSelectedNonEmptyInventory = function( user ) {

};

CTutorial.prototype.OnUserAddedItemsToTrade = function( cMyItems, cTheirItems ) {

};

CTutorial.prototype.OnUserIsReady = function() {

};

function CTradeTutorial()
{
	CTutorial.apply( this, [ 4 ] );
}
CTradeTutorial.prototype = new CTutorial;
CTradeTutorial.prototype.constructor = CTradeTutorial;

CTradeTutorial.prototype.OnSelectedNonEmptyInventory = function( user ) {
	this.AdvanceToStep( 2 );
};

CTradeTutorial.prototype.OnUserAddedItemsToTrade = function( cMyItems, cTheirItems ) {
	if ( cMyItems > 0 )
		this.AdvanceToStep( 3 );
};

CTradeTutorial.prototype.OnUserIsReady = function() {
	this.AdvanceToStep( 4 );
};

CTradeTutorial.prototype.OnCompletedTutorial = function() {
	SetCookie( 'bCompletedTradeTutorial', 'true', 365 * 10, g_bTradeOffer ? '/tradeoffer/' : '/trade/' );
};

function SeenSteamGuardWarning() {
	var elHeaderMessage = $('steamguard_header_message');
	if ( elHeaderMessage && elHeaderMessage.visible() )
	{
		new Effect.BlindUp( elHeaderMessage, {duration: 0.25 } );
	}

	SetCookie( 'bSeenSteamGuardWarning', 'true', 365 * 10, g_bTradeOffer ? '/tradeoffer/' : '/trade/' );
}

function SizeWindow()
{
	if ( !Prototype.Browser.WebKit )
	{
		return;
	}

	var flSetZoom = '';

	if ( !Economy_UseResponsiveLayout() )
	{
		var widthZoom = document.viewport.getWidth() / 976;
		var heightZoom = document.viewport.getHeight() / Math.min( $(document.body).getHeight() + 16, 1012 );
		var flSetZoom = flZoom > 0.55 ? flZoom : 0.55;
		if ( widthZoom <= 0.99 || heightZoom <= 0.99 )
		{
			var flZoom = widthZoom < heightZoom ? widthZoom : heightZoom;
			flSetZoom = flZoom > 0.55 ? flZoom : 0.55;
		}
		else
		{
			flSetZoom = 1.0;
		}
	}

	$J('#mainContent' ).css( 'zoom', flSetZoom );
	$J('#tutorial_header_message' ).css( 'zoom', flSetZoom );

	if ( !g_bTradeOffer )
		$('log').scrollTop = 10000;

		$J('#trade_recaptcha').css( 'zoom', flSetZoom ? ( 1.0 / flSetZoom ) : '' );
}

function TradingUnloaded( e )
{
	if ( g_bTradeCancelled || g_bTradeOffer )
		return;

	g_bTradeCancelled = true;
	var waiting = true;
	new Ajax.Request( 'https://steamcommunity.com/trade/' + g_ulTradePartnerSteamID + '/cancel/', {
		method: 'post',
		parameters: {
			sessionid: g_sessionID
		}
	});

	// "this is pretty wonky"
	var iters = 0;
	var start = new Date().getMilliseconds();
	while ( iters < 10000000 && ( new Date().getMilliseconds() - start ) < 30 ) { iters++; }
};

function StopWatchingForUnload()
{
	Event.stopObserving( window, 'unload', TradingUnloaded );
}

function RefreshTradeEscrowDisplay()
{
	var bWeAreSendingItems = g_cMyItemsInTrade > 0;
	var bTheyAreSendingItems = g_cTheirItemsInTrade > 0;
	var cEscrowDays = 0;

	if ( bWeAreSendingItems && bTheyAreSendingItems )
	{
		cEscrowDays = g_daysBothEscrow;
	}
	else if ( bWeAreSendingItems )
	{
		cEscrowDays = g_daysMyEscrow;
	}
	else if ( bTheyAreSendingItems )
	{
		cEscrowDays = g_daysTheirEscrow;
	}

	var $elHeader = $J('#trade_escrow_header');
	var $elNoticeNearButton = $J('#trade_escrow_notice_near_button');


	if ( cEscrowDays == 0 )
	{
		g_dateEscrowEnd = null;

		if ( $elHeader.is( ":visible" ) )
		{
			$elHeader.slideUp();
		}

		if ( $elNoticeNearButton.is( ":visible" ) )
		{
			$elNoticeNearButton.slideUp();
		}
	}
	else
	{
		g_dateEscrowEnd = new Date( Date.now() + (cEscrowDays * 86400 * 1000) );

		$J('#trade_escrow_hours').text( ( cEscrowDays ) + ( ( cEscrowDays != 1 ) ? ' days' : ' day') );
		$J('#trade_escrow_hours2').text( ( cEscrowDays ) + ( ( cEscrowDays != 1 ) ? ' days' : ' day') );

		if ( bWeAreSendingItems && g_daysMyEscrow != 0 )
		{
			$J('#trade_escrow_for_me').show();
		}
		else
		{
			$J('#trade_escrow_for_me').hide();
		}

		if ( bTheyAreSendingItems && g_daysTheirEscrow != 0 )
		{
			$J('#trade_escrow_for_them').show();
		}
		else
		{
			$J('#trade_escrow_for_them').hide();
		}

		if ( !$elHeader.is( ":visible" ) )
		{
			$elHeader.slideDown();
		}

		if ( !$elNoticeNearButton.is( ":visible" ) )
		{
			$elNoticeNearButton.slideDown();
		}
	}
}

