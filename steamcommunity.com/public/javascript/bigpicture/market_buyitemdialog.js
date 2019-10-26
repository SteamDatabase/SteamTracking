
function BuyItem( listingid )
{
	$.Msg( "BuyItem( " + listingid + " )" );
	var elError = $( '#BuyDialogError' );
	var elSSAButton = $( '#SSAButton' );

	$.GetContextPanel().RemoveClass( 'ErrorTextVisible' );
	elSSAButton.RemoveClass( 'FailedValidation' );

		if ( !elSSAButton.checked )
	{
		elSSAButton.AddClass( 'FailedValidation' );
		DisplayError( 'You must agree to the terms of the Steam Subscriber Agreement to sell this item.' );
		return;
	}

	$.AsyncWebRequest( 'https://steamcommunity.com/market/buylisting/' + listingid,
			{
				type: 'POST',
				data: {
					sessionid: g_SessionID,
					currency: g_rgWalletInfo['wallet_currency'],
					subtotal: g_nSubTotal,
					fee: g_nFee,
					total: g_nTotal,
					quantity: 1
				},
				success: function( data ) {
					$.Msg("Success!");
					$.DispatchEventAsync(0.0, 'MarketListingRemoved', listingid);
					$.DispatchEvent( 'NavigateTenfootBack' );
					$.DispatchEvent( 'TruncateBackStack' );

				},
				error: function( jqxhr ) {
					$.Msg( "Error: " + jqxhr.responseText );
					var data = JSON.parse( jqxhr.responseText.replace( '\u0000', '' ) );  // BUGBUG: Why does this have a unicode null in it?
					$.Msg( data );
					if ( data && data.message )
					{
						DisplayError( data.message )
					}
				}
			}
	);
}

function DisplayError( error )
{
	$.Msg( error );
	var elError = $( '#BuyDialogError' );
	$.GetContextPanel().AddClass( 'ErrorTextVisible' );
	elError.text = error;
}

$.Schedule( 0.0, function()
{
	$.GetContextPanel().RemoveClass( 'ErrorTextVisible' );

	PopulateDetails( g_rgAsset, $( '#RightDetail' ), true, g_rgAppContextData );

	if ( $("#CommunityMarketContent").BHasClass( "Inactive" ) ) {
		$.DispatchEventAsync(0.0, 'MarketListingRemoved', g_listing.listingid);
	}

	SetupAddFundsButton();
});

