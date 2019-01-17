
function Market_LoadOrderSpread( elRightDetail, item_nameid )
{
	if ( !elRightDetail.IsValid() || $.GetContextPanel().BHasClass('CommunityInvisible') )
	{
		// User navigated away
		return;
	}

	$.AsyncWebRequest( 'https://steamcommunity.com/market/itemordershistogram',
			{
				type: 'GET',
				data: {
					norender: 1,
					country: g_strCountryCode,
					language: g_strLanguage,
					currency: typeof( g_rgWalletInfo ) != 'undefined' && g_rgWalletInfo['wallet_currency'] != 0 ? g_rgWalletInfo['wallet_currency'] : 1,
					item_nameid: item_nameid,
					two_factor: g_bTwoFactorSale
				},
				success: function( data ) {
					$.Schedule( 5.0, function() {
						Market_LoadOrderSpread( elRightDetail, item_nameid );
					} );

					Market_UpdateOrderSpread( elRightDetail, item_nameid, data );
				},
				error: function() {
					$.Schedule( 5.0, function() {
						Market_LoadOrderSpread( elRightDetail, item_nameid );
					} );
				}
			}
	);
}

function Market_UpdateOrderSpread( elRightDetail, item_nameid, data )
{
	if ( data.success == 1 && elRightDetail.IsValid() )
	{
		var elBuyOrderSummary = elRightDetail.FindChildTraverse('BuyOrderSummary');
		var elSellOrderSummary = elRightDetail.FindChildTraverse('SellOrderSummary');
		if ( data.sell_order_count )
		{
			elSellOrderSummary.text = '%1$s for sale starting at %2$s'
					.replace( '%1$s', '<span class="ActionHighlight">' + data.sell_order_count + '</span>' )
					.replace( '%2$s', '<span class="ActionHighlight">' + data.sell_order_price + '</span>' );
			//elSellOrderSummary.SetDialogVariable( 'NumForSale', data.sell_order_count );
			//elSellOrderSummary.SetDialogVariable( 'SaleStartingPrice', data.sell_order_price );
		}
		else
		{
			elSellOrderSummary.text = 'There are no active listings for this item.';
		}

		if ( data.buy_order_count )
		{
			elBuyOrderSummary.text = '%1$s requests to buy at %2$s or lower'
					.replace( '%1$s', '<span class="ActionHighlight">' + data.buy_order_count + '</span>' )
					.replace( '%2$s', '<span class="ActionHighlight">' + data.buy_order_price + '</span>' );
			//elBuyOrderSummary.SetDialogVariable( 'NumBuyOrders', data.buy_order_count );
			//elBuyOrderSummary.SetDialogVariable( 'BuyMaxPrice', data.buy_order_price );
		}
		else
		{
			elBuyOrderSummary.text = 'There are no active buy orders for this item.';
		}

		var elBuyOrderTable = elRightDetail.FindChildTraverse('BuyOrderTable');
		var elSellOrderTable = elRightDetail.FindChildTraverse('SellOrderTable');

		if ( data.buy_order_table == null )
		{
			elBuyOrderTable.AddClass( "Empty" );
		}
		else
		{
			elBuyOrderTable.RemoveClass( "Empty" );;
			var iRow = 0;
			$.Each( elBuyOrderTable.FindChildrenWithClassTraverse("OrdersTableRow"), function ( elRow ) {
				if ( iRow == 0 )
				{
					iRow++;
					return true;
				}

				if ( data.buy_order_table == null || typeof data.buy_order_table[iRow-1] == 'undefined' )
				{
					elRow.style.opacity = 0;
					return true;
				}

				elRow.style.opacity = 1;

				var rgRowChildren = elRow.Children();
				rgRowChildren[0].text = data.buy_order_table[iRow-1].price;
				rgRowChildren[1].text = data.buy_order_table[iRow-1].quantity;

				iRow++;
			});
		}

		if ( data.sell_order_table == null )
		{
			elSellOrderTable.AddClass( "Empty" );
		}
		else
		{
			var iRow = 0;
			elSellOrderTable.RemoveClass( "Empty" );
			if ( g_bTwoFactorSale )
			{
				elSellOrderTable.AddClass( "Sale" );
			}

			$.Each( elSellOrderTable.FindChildrenWithClassTraverse("OrdersTableRow"), function ( elRow ) {
				if ( iRow == 0 )
				{
					iRow++;
					return true;
				}

				if ( typeof data.sell_order_table[iRow-1] == 'undefined' )
				{
					elRow.style.opacity = 0;
					return true;
				}

				elRow.style.opacity = 1;

				var rgRowChildren = elRow.Children();
				rgRowChildren[0].text = data.sell_order_table[iRow-1].price_with_fee;
				rgRowChildren[1].text = data.sell_order_table[iRow-1].price;
				rgRowChildren[2].text = data.sell_order_table[iRow-1].quantity;

				iRow++;
			});
		}
	}
}

