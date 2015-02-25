
function GetFilteredDiscoveryQueue( rgAppIDs, Settings, ApplicableSettings, params )
{
	var rgItems = [];
	for ( var i = 0; i < rgAppIDs.length; i++ )
		rgItems.push( { appid: rgAppIDs[i] } );

	var rgFiltered = GStoreItemData.FilterItemsForDisplay( rgItems, Settings, ApplicableSettings, 12 );

	return new CDiscoveryQueue( 3, rgFiltered, null, params );
}

function CDiscoveryQueue( eQueueType, rgDiscoveryQueue, Settings, params )
{
	this.m_rgItems = [];
	this.m_iActiveItem = 0;
	this.m_eQueueType = eQueueType;
	this.m_Settings = Settings;

	if ( this.m_Settings && !this.m_Settings.os_win && !this.m_Settings.os_mac && !this.m_Settings.os_linux )
	{
		this.m_Settings.os_win = 1;
		this.m_Settings.os_mac = 1;
		this.m_Settings.os_linux = 1;
	}

	params = params || {};
	this.m_$QueueCtn = $J( params.queue_ctn || '.discovery_queue_ctn' );
	this.m_$Queue = $J( params.queue || '#discovery_queue' );
	this.m_strNavFeature = params.nav_feature || 'discovery_queue';

	this.m_bStatic = params.static || false;
	this.m_$Overlay = this.m_$Queue.siblings('.discovery_queue_overlay');

	this.m_strPosClassPrefix = ( this.m_bStatic ? 'dq_static_pos_' : 'dq_pos_' );

	// actually render the queue
	this.BuildQueue( rgDiscoveryQueue );
}

CDiscoveryQueue.MAX_ITEMS = 5;

CDiscoveryQueue.prototype.BuildQueue = function( rgDiscoveryQueue )
{
	this.m_rgItems = [];
	this.m_$Queue.empty();
	this.m_iActiveItem = 0;
	this.m_$Overlay.attr( 'href', 'https://store.steampowered.com/explore/next/')

	for ( var i = 0; i < rgDiscoveryQueue.length; i++ )
	{
		var unAppID = rgDiscoveryQueue[i];
		if ( unAppID instanceof Object && unAppID.appid )
			unAppID = unAppID.appid;

		var rgApp = GStoreItemData.rgAppData[ unAppID ];
		if ( !rgApp )
			continue;

		var $Item = $J('<div/>', {'class': 'dq_item'} );
		var $ColorOverlay = $J('<div/>', {'class': 'dq_item_overlay'} );
		var $Img = $J('<img/>', {'class': 'dq_item_cap', 'src': rgApp.header });
		var $Price = $J(rgApp.discount_block).addClass( 'dq_item_price discount_block_large' );
		$Item.append( $ColorOverlay, $Img );

		if ( !this.m_bStatic )
			$Item.append( $Price );

		$Item.data( 'appid', unAppID );
		$Item.data( 'name', rgApp['name'] );
		$Item.data( 'href', GStoreItemData.GetAppURL( unAppID, this.m_strNavFeature, i ) );

		$Item.data( 'hoverparams', rgApp['hoverparams'] );

		if ( !this.m_bStatic )
		{
			$Item.click( $J.proxy( this.OnItemClick, this, $Item ) );
			$Item.attr( 'data-ds-appid', unAppID );
			GDynamicStore.DecorateDynamicItems( $Item );
		}

		this.m_rgItems.push( $Item );
	}

	if ( !this.m_rgItems.length )
	{
		this.m_$QueueCtn.hide();
		this.m_$QueueCtn.siblings('.discover_queue_empty').show();
		return;
	}

	this.m_$QueueCtn.show();
	this.m_$QueueCtn.siblings('.discover_queue_empty').hide();

	this.m_$Queue.siblings('.discover_queue_empty').hide(); // in case customizing the queue caused items to appear on explore page

	if ( !this.m_bStatic )
	{
		this.m_$ActiveLink = $J('<a/>').append( $J('<img/>', {'class': 'dq_item_cap', src: 'https://steamstore-a.akamaihd.net/public/images/blank.gif' } ) );
		var activeItem = this.m_rgItems[ this.m_iActiveItem ];
		this.m_$ActiveLink.attr( 'href', activeItem.data('href') );

		GDynamicStore.AddImpression( activeItem, activeItem.data('appid'), activeItem.data('href') );

		var _this = this;
		this.m_$ActiveLink.mouseenter( function( event ) {
			if ( _this.m_iActiveItem < 0 || _this.m_iActiveItem >= _this.m_rgItems.length )
				return;

			var $Item = _this.m_rgItems[ _this.m_iActiveItem ];

			var unAppID = $Item.data('appid');
			if ( unAppID )
				GameHover( this, event, $J('#global_hover'), GStoreItemData.GetHoverParams( unAppID ) );
		});
		this.m_$ActiveLink.mouseleave( function( event ) {
			HideGameHover( this, event, $J('#global_hover') );
		});
		this.m_$ActiveLink.click( function( event ) { InstrumentedLinkOnClick( event, this ); } );

		this.m_$Queue.prepend( $J('<div/>', {'class': this.m_strPosClassPrefix + '2 dq_active_link dq_item'} ).append(this.m_$ActiveLink) );	// this got erased by the empty() above
	}
	else
	{
		this.m_$Overlay.attr('href', this.m_rgItems[0].data('href') );
	}

	for ( var i=0; i < CDiscoveryQueue.MAX_ITEMS && i < this.m_rgItems.length; i++ )
	{
		var $Item = this.m_rgItems[i];
		$Item.addClass( this.m_strPosClassPrefix + (i + 2) );
		this.m_$Queue.append( $Item );
	}
}


CDiscoveryQueue.prototype.OnItemClick = function( $Item )
{
	var rgPosClass = $Item.attr('class').match( /dq_pos_(\w)*/ );
	if ( rgPosClass.length == 2 && rgPosClass[1] )
	{
		var delta = parseInt( rgPosClass[1] ) - 2;
		if ( delta >= -1 && delta <= 3 )
			this.Transition( delta );
	}
}


CDiscoveryQueue.prototype.Transition = function( delta )
{
	if ( this.m_iActiveItem + delta >= this.m_rgItems.length
		|| this.m_iActiveItem + delta < 0 || delta == 0 )
		return;

	for ( var pos = Math.min( 0, 0 + delta ); pos <= Math.max( CDiscoveryQueue.MAX_ITEMS, CDiscoveryQueue.MAX_ITEMS + delta ); pos++ )
	{
		var i = this.m_iActiveItem + pos - 2;
		if ( i < 0 || i >= this.m_rgItems.length )
			continue;

		var $Item = this.m_rgItems[i];

		if ( pos >= CDiscoveryQueue.MAX_ITEMS )
		{
			this.m_$Queue.append( $Item );
		}

		var rgAnimClasses = $Item.attr('class').match( /dq_trans_\w*/g);
		if ( rgAnimClasses )
			$Item.removeClass( rgAnimClasses.join(' ') );

		var nAdjPos = Math.min( Math.max( pos, 0 ), CDiscoveryQueue.MAX_ITEMS + 1 );
		var nAdjPosTarget = Math.min( Math.max( pos - delta, 0 ), CDiscoveryQueue.MAX_ITEMS + 1 );

		// start animation
		$Item.addClass( 'dq_trans_' + nAdjPos + '_' + nAdjPosTarget );

		// update position classes to their final state
		$Item.removeClass( this.m_strPosClassPrefix + nAdjPos ).addClass( this.m_strPosClassPrefix + nAdjPosTarget );
	}

	this.m_iActiveItem += delta;
	// set the link target
	var activeItem = this.m_rgItems[ this.m_iActiveItem ];
	this.m_$ActiveLink.attr( 'href', activeItem.data('href') );
	GDynamicStore.AddImpression( activeItem, activeItem.data('appid'), activeItem.data('href') );
}


CDiscoveryQueue.prototype.RenderCustomizeButton = function()
{
	var $Btn = $J('<div/>', {'class': 'home_btn home_customize_btn' } ).text( '#home_viewsettings_Customize' );
	$Btn.click( $J.proxy( this.DisplayCustomizePopup, this, $Btn ) );
	return $Btn;
};

CDiscoveryQueue.prototype.DisplayCustomizePopup = function( $Btn )
{
	if ( this.m_$Popup )
		return;

	this.m_$ActiveBtn = $Btn;

	this.m_$ActiveBtn.addClass( 'active' );

	this.m_$Popup = $J('<div/>', {'class': 'home_viewsettings_popup' } );
	this.m_$Popup.append( $J('<div/>', {'class': 'home_viewsettings_instructions' } ).text( '#home_viewsettings_Instructions' ) );

	this.m_$Popup.append( this.RenderCustomizeCheckbox( 'include_early_access', '#home_viewsettings_EarlyAccess' ) );
	this.m_$Popup.append( this.RenderCustomizeCheckbox( 'include_coming_soon', '#home_viewsettings_ComingSoon' ) );

	this.m_$Popup.append( this.RenderCustomizeCheckbox( 'os_win', 'Windows' ) );
	this.m_$Popup.append( this.RenderCustomizeCheckbox( 'os_mac', 'Mac OS X' ) );
	this.m_$Popup.append( this.RenderCustomizeCheckbox( 'os_linux', 'Linux' ) );

	var nOffsetTop = $Btn.position().top + $Btn.outerHeight();
	var nOffsetRight = $Btn.position().left + $Btn.outerWidth( true );

	this.m_$Popup.css( 'top', nOffsetTop + 'px' );

	$Btn.parent().append( this.m_$Popup );

	this.m_$Popup.css( 'left', ( nOffsetRight - this.m_$Popup.outerWidth() ) + 'px' );

	var _this = this;
	window.setTimeout( function() {
		$J(document).on( 'click.CDiscoveryQueue', function( event ) {
			if ( !_this.m_$Popup.has( event.target).length && !_this.m_$Popup.is( event.target ) )
				_this.DismissCustomizePopup();
		}).on( 'keyup.CDiscoveryQueue', function( event ) {
			if ( event.which == 27 )
				_this.DismissCustomizePopup();
		});
	}, 1 );
};

CDiscoveryQueue.prototype.RenderCustomizeCheckbox = function( strSettingName, strDisplayLabel )
{
	var $Row = $J('<div/>', {'class': 'home_viewsettings_checkboxrow ellipsis' } );

	var $Checkbox = $J('<div/>', {'class': 'home_viewsettings_checkbox' } );
	if ( this.m_Settings[strSettingName] )
		$Checkbox.addClass('checked');

	var $Label = $J('<div/>', {'class': 'home_viewsettings_label'} ).text( strDisplayLabel );

	$Row.append( $Checkbox, $Label );
	$Row.click( $J.proxy( this.OnCustomizeCheckboxToggle, this, strSettingName, $Checkbox ) );

	return $Row;
};

CDiscoveryQueue.prototype.OnCustomizeCheckboxToggle = function( strSettingName, $Checkbox )
{
	var bEnabled = $Checkbox.hasClass( 'checked' );

	if ( bEnabled )
		$Checkbox.removeClass( 'checked' );
	else
		$Checkbox.addClass( 'checked' );

	this.m_Settings[strSettingName] = !bEnabled;

	var _this = this;
	$J.post( 'https://store.steampowered.com/explore/updatediscoveryqueuesettings', {
		sessionid: g_sessionID,
		queuetype: this.m_eQueueType,
		settings: V_ToJSON( this.m_Settings )
	}).done( function ( data ) {
		GStoreItemData.AddStoreItemData( data.rgAppData, null );
		_this.m_Settings = data.settings;
		_this.BuildQueue( data.queue );
	}).fail( function() {
		_this.DismissCustomizePopup();
		_this.m_Settings[strSettingName] = bEnabled;	// revert
		ShowAlertDialog( '#home_viewsettings_Customize', '#home_viewsettings_Error' );
	} );
};

CDiscoveryQueue.prototype.DismissCustomizePopup = function()
{
	this.m_$Popup.remove();
	this.m_$Popup = null;
	this.m_$ActiveBtn.removeClass( 'active' );
	$J(document).off( 'click.CDiscoveryQueue' ).off( 'keyup.CDiscoveryQueue' );
};

CDiscoveryQueue.prototype.GenerateNewQueue = function()
{
	var _this = this;
	$J.post( 'https://store.steampowered.com/explore/generatenewdiscoveryqueue', {
		sessionid: g_sessionID,
		queuetype: this.m_eQueueType,
	}).done( function ( data ) {
		window.location = 'https://store.steampowered.com/explore/next';
	}).fail( function() {
		ShowAlertDialog( '#explore_refresh_queue', '#home_viewsettings_Error' );
	} );
}

