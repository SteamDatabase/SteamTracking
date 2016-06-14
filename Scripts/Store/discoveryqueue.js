"use strict";

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
	this.m_$Overlay.attr( 'href', 'https://store.steampowered.com/explore/next/');

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
		this.m_$ActiveLink = $J('<a/>').append( $J('<img/>', {'class': 'dq_item_cap', src: 'https://steamstore-a.akamaihd.net/public/images/v6/home/header_placeholder_460x215.gif' } ) );
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
};


CDiscoveryQueue.prototype.OnItemClick = function( $Item )
{
	var rgPosClass = $Item.attr('class').match( /dq_pos_(\w)*/ );
	if ( rgPosClass.length == 2 && rgPosClass[1] )
	{
		var delta = parseInt( rgPosClass[1] ) - 2;
		if ( delta >= -1 && delta <= 3 )
			this.Transition( delta );
	}
};


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
};

CDiscoveryQueue.prototype.HandleSettingsChanged = function( data )
{
	GStoreItemData.AddStoreItemData( data.rgAppData, null );
	this.m_Settings = data.settings;
	this.BuildQueue( data.queue );
};

CDiscoveryQueue.prototype.ShowCustomizeDialog = function()
{
	var _this = this;
	CDiscoveryQueue.ShowCustomizeDialog( function(data) { _this.HandleSettingsChanged(data); } );
};

CDiscoveryQueue.ShowCustomizeDialog = function( fnOnSettingsChanged )
{
	if ( CDiscoveryQueue.sm_bCustomizeDialogVisible )
		return;

	CDiscoveryQueue.sm_bCustomizeDialogVisible = true;

	$J.get( 'https://store.steampowered.com/explore/discoveryqueuesettings' )
	.done( function(data) {
		var rgGlobalPopularTags = data.popular_tags;

		var Modal = ShowConfirmDialog( 'Customize Your Discovery Queue', data.html );
		Modal.GetContent().css( 'width', '720px' );
		Modal.AdjustSizing();

		var $SettingsContent = Modal.GetContent().find('.dq_settings_content');

		var $AppTagInput = $SettingsContent.find( '.dq_tagsearch input[name=tag]' );
		var $AppTagButton = $SettingsContent.find( '.dq_tagsearch button' );
		var $TagsCtn = $SettingsContent.find('.dq_excluded_tags');

		$TagsCtn.children('.app_tag_control').each( function() {
			var $Tag = $J(this);
			$Tag.children( '.app_tag_checkbox').click( function() { $Tag.remove(); Modal.AdjustSizing(); } );
		});

		var fnUpdateTagButtonState = function() {
			if ( $AppTagInput.val().length > 0 )
				$AppTagButton.removeClass( 'btn_disabled' );
			else
				$AppTagButton.addClass( 'btn_disabled' );
		};

		var fnFlashTag = function( $Tag )
		{
			$Tag.addClass('tag_control_flash');
			window.setTimeout( function() { $Tag.removeClass( 'tag_control_flash' ) }, 1100 );
		};

		var fnAddExcludedTag = function( strUserTag ) {
			// find the tag
			var regexNormalize = new RegExp( /\W/g );
			var strNormalizedUserTag = strUserTag.replace( regexNormalize, '').toLowerCase();
			for ( var i = 0; i < rgGlobalPopularTags.length; i++ )
			{
				var globalTag = rgGlobalPopularTags[i];
				var strNameNormalized = globalTag.name_normalized;
				if ( !strNameNormalized )
				{
					strNameNormalized = globalTag.name_normalized = globalTag.name.replace( regexNormalize, '').toLowerCase();
				}

				if ( strNormalizedUserTag == strNameNormalized )
				{
					var $Tag = $TagsCtn.find( '.app_tag_control[data-tagid=' + globalTag.tagid +']' );
					if ( !$Tag.length )
					{
						$Tag = $J('<div/>', {'class': 'app_tag_control', 'data-tagid': globalTag.tagid } );
						$Tag.append( $J('<div/>', {'class': 'app_tag_checkbox checked'} ).click( function() { $Tag.remove(); Modal.AdjustSizing(); } ) );
						$Tag.append( $J('<a/>', {'class': 'app_tag', 'href': TagLink( globalTag.name ) } ).text( globalTag.name ) );
						$TagsCtn.append( $Tag );
						Modal.AdjustSizing();
					}

					fnFlashTag( $Tag );
				}
			}
		};

		var fnOnSubmit = function(event) {
			if ( event )
				event.preventDefault();

			if ( $AppTagInput.val().length == 0 )
				return;

			fnAddExcludedTag( $AppTagInput.val() );
			$AppTagInput.val('');
			$AppTagInput.change();
			$AppTagInput.focus();
		};

		$AppTagInput.val('');
		$AppTagInput.change( fnUpdateTagButtonState );
		$AppTagInput.keyup( fnUpdateTagButtonState );
		fnUpdateTagButtonState();
		$AppTagInput.focus();

		$AppTagInput.parents('form').submit( fnOnSubmit );
		$AppTagInput.parents('form').keyup( function( event ) { if ( event.which == 13 ) event.stopPropagation() } );

		var TextSuggest = new CTextInputSuggest( $AppTagInput, GetTagSuggestFunc( data.popular_tags ), function( suggestion ) { fnOnSubmit(); } );

		Modal.done( function() {
			// save changes
			var oSettings = {};
			oSettings.exclude_early_access = !$SettingsContent.find('#dqs_exclude_early_access_inverted').prop('checked');
			oSettings.exclude_software = !$SettingsContent.find('#dqs_exclude_software_inverted').prop('checked');
			oSettings.include_coming_soon = $SettingsContent.find('#dqs_include_comingsoon').prop('checked');

			oSettings.excluded_tagids = [];
			$TagsCtn.children('.app_tag_control').each( function() {
				oSettings.excluded_tagids.push( $J(this).data('tagid') );
			});

			$J.post( 'https://store.steampowered.com/explore/updatediscoveryqueuesettings',{
				sessionid: g_sessionID,
				settings: V_ToJSON(oSettings),
				queuetype: 0			} ).done( function( data ) {
				fnOnSettingsChanged( data );
			}).fail( function() {
				ShowAlertDialog( 'Customize Your Discovery Queue', 'There was a problem saving your preferences.  Please try again later.' );
			});
		});

		Modal.always( function() {
			CDiscoveryQueue.sm_bCustomizeDialogVisible = false;
			TextSuggest.Destroy();
		});
	})
	.fail( function() {
		CDiscoveryQueue.sm_bCustomizeDialogVisible = false;
	});

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
		ShowAlertDialog( 'Start another queue >>', 'There was a problem saving your preferences.  Please try again later.' );
	} );
};

