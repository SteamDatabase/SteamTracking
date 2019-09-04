
var g_nMarketListingCreatedEventId = 0;

$.Schedule( 0.0,
		function() {
			if ( g_bIsInMarketplace )
			{
				g_nMarketListingCreatedEventId = $.RegisterForUnhandledEvent( 'MarketListingCreated',
						function ( appid, contextid, assetid )
						{
							g_Inventory.OnMarketListingCreated( appid, contextid, assetid );
						}
				);
		}
	}
);

