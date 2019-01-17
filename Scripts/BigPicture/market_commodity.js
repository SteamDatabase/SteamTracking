

// keeps track of the state we have showing ticks
ItemActivityTicker = {
	m_llItemNameID: null,
	m_rgActivity: [],
	m_nActivityIndexNext: 0,
	m_bStartedUpdate: false,
	m_nTickerAdvanceRate: 0,
	m_rgActivityShown: [],
	m_nTimeLastLoaded: 0,
	m_bFirstUpdate: true,

	Start: function( elRightDetail, item_nameid ) {
		this.m_elRightDetail = elRightDetail;
		this.m_llItemNameID = item_nameid;
		this.Load();
	},

	Load: function() {
		if ( !this.m_elRightDetail.IsValid() || $.GetContextPanel().BHasClass('CommunityInvisible') )
		{
			// User navigated away
			return;
		}

		$.AsyncWebRequest( 'https://steamcommunity.com/market/itemordersactivity',
		{
			type: 'GET',
			data: {
				country: g_strCountryCode,
				language: g_strLanguage,
				currency: typeof( g_rgWalletInfo ) != 'undefined' && g_rgWalletInfo['wallet_currency'] != 0 ? g_rgWalletInfo['wallet_currency'] : 1,
				item_nameid: this.m_llItemNameID,
				two_factor: g_bTwoFactorSale
			},
			success: function( data ) {
				if ( data.success == 1 )
				{
					if ( data.timestamp > ItemActivityTicker.m_nTimeLastLoaded )
					{
						ItemActivityTicker.m_nTimeLastLoaded = data.timestamp;
						ItemActivityTicker.Update( data.activity );
					}
				}
			},
			complete: function() {
				$.Schedule( 5.0, function() { ItemActivityTicker.Load(); } );
			}
		} );
	},

	Update: function( rgActivity ) {
		if ( rgActivity.length == 0 )
			return;

		if ( !this.m_elRightDetail.IsValid() || $.GetContextPanel().BHasClass('CommunityInvisible') )
		{
			// User navigated away
			return;
		}

		// set the new list
		this.m_nActivityIndexNext = 0;
		this.m_rgActivity = rgActivity;

		// spread the updates out over 10 seconds
		this.m_nTickerAdvanceRate = 10000 / Math.max(rgActivity.length-2,1);

		// but no more than one every 1.5 seconds
		this.m_nTickerAdvanceRate = Math.max( this.m_nTickerAdvanceRate, 1500 );

		if ( !this.m_bStartedUpdate )
		{
			this.m_bStartedUpdate = true;
			this.AdvanceTicker();
			$('#RecentActivityWaiting').visible = false;
		}
	},

	AdvanceTicker: function() {
		if ( this.m_nActivityIndexNext >= this.m_rgActivity.length )
		{
			this.m_bStartedUpdate = false;
			return;
		}

		// hide the old item if we need to
		if ( this.m_rgActivityShown.length >= 3 )
		{
			var elOldLineItem = this.m_rgActivityShown.shift();

			// animate this item up
			elOldLineItem.RemoveClass( 'MarketActivityPosition1' );
			elOldLineItem.RemoveClass( 'MarketActivityPosition2' );
			elOldLineItem.RemoveClass( 'MarketActivityPosition3' );
			elOldLineItem.AddClass( 'MarketActivityPosition0' );
			elOldLineItem.DeleteAsync( 0.5 );

			// Give anyone still visible the correct position class
			for ( var i = 0; i < this.m_rgActivityShown.length; i++ )
			{
				var elLineItem = this.m_rgActivityShown[i];
				elLineItem.RemoveClass( 'MarketActivityPosition1' );
				elLineItem.RemoveClass( 'MarketActivityPosition2' );
				elLineItem.RemoveClass( 'MarketActivityPosition3' );
				elLineItem.AddClass( 'MarketActivityPosition' + (i+1) );
			}
		}

		// add back items
		while ( this.m_rgActivityShown.length < 3 && this.m_nActivityIndexNext < this.m_rgActivity.length )
		{
			//var elNew = jQuery.parseHTML( this.m_rgActivity[this.m_nActivityIndexNext] );
			var elNew = $.CreatePanel( 'Panel', $('#RecentActivityTicker'), '' );
			if ( this.m_bFirstUpdate )
			{
				// No transitions in the first update.
				// We control this by giving the panel its position before the class that gives it its transition property
				elNew.AddClass( 'MarketActivityPosition' + (this.m_rgActivityShown.length + 1) );
				elNew.AddClass( 'MarketActivityLineItem' );
			}
			else
			{
				elNew.AddClass( 'MarketActivityLineItem' );
				elNew.AddClass( 'MarketActivityPosition' + (this.m_rgActivityShown.length + 1) );
			}

			elNew.LoadLayoutFromStringAsync( this.m_rgActivity[this.m_nActivityIndexNext], true, false );

			this.m_nActivityIndexNext += 1;
			this.m_rgActivityShown.push( elNew );

			this.m_bFirstUpdate = false;
		}

		$.Schedule( this.m_nTickerAdvanceRate / 1000, function() { ItemActivityTicker.AdvanceTicker(); } );
	}
}

$.Schedule( 0.0, function() {
	SetupAddFundsButton();

	PopulateDetails( g_rgFirstAsset, $('#RightDetail'), true, g_rgAppContextData );
});

