
function SetupAddFundsButton()
{
	$.RegisterKeyBind($.GetContextPanel(), "pad_y,steampad_y", function() {
		AddFunds()
	} );
	$.RegisterFooterButton($.GetContextPanel(), 'pad_y', 'ADD FUNDS' );
}

function AddFunds()
{
	$.DispatchEvent( "StoreShowAddFundsWithAdditionalClass", "Market" );
}

