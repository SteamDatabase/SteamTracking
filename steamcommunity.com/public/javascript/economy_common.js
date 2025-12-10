
function CurrencyIsWalletFunds( currency )
{
	return currency.appid == 753 && currency.contextid == 4;
}

function ConvertToTheirCurrency( amount )
{
	var flAmount = amount * g_rgWalletInfo['wallet_conversion_rate'];
		var nAmount = Math.floor( isNaN(flAmount) ? 0 : flAmount );

	return Math.max( nAmount, 0 );
}

function ConvertToOurCurrency( amount )
{
		var flAmount = g_rgWalletInfo['wallet_inverse_conversion_rate'] * ( amount  );

	var nAmount = Math.ceil( isNaN(flAmount) ? 0 : flAmount );
	nAmount = Math.max( nAmount, 0 );

	// verify the amount. we may be off by a cent.
	if ( ConvertToTheirCurrency( nAmount ) != amount )
	{
		var i;
		for ( i = nAmount - 2; i <= nAmount + 2; i++ )
		{
			if ( ConvertToTheirCurrency( i ) == amount )
			{
				nAmount = i;
				break;
			}
		}
	}

	return nAmount;
}

function ConvertToOurCurrencyForDisplay( amount )
{
	var flAmount = amount * g_rgWalletInfo['wallet_inverse_conversion_rate'];
		var nAmount = Math.floor( isNaN(flAmount) ? 0 : flAmount );

	return Math.max( nAmount, 0 );
}

function CalculateFeeAmount( amount, publisherFee )
{
	if ( !g_rgWalletInfo['wallet_fee'] )
		return 0;

	publisherFee = ( typeof publisherFee == 'undefined' ) ? 0 : publisherFee;

	// Since CalculateFeeAmount has a Math.floor, we could be off a cent or two. Let's check:
	var iterations = 0; // shouldn't be needed, but included to be sure nothing unforseen causes us to get stuck
	var nEstimatedAmountOfWalletFundsReceivedByOtherParty = parseInt( ( amount - parseInt( g_rgWalletInfo['wallet_fee_base'] ) ) / ( parseFloat( g_rgWalletInfo['wallet_fee_percent'] ) + parseFloat( publisherFee ) + 1 ) );

	var bEverUndershot = false;
	var fees = CalculateAmountToSendForDesiredReceivedAmount( nEstimatedAmountOfWalletFundsReceivedByOtherParty, publisherFee );
	while ( fees.amount != amount && iterations < 10 )
	{
		if ( fees.amount > amount )
		{
			if ( bEverUndershot )
			{
				fees = CalculateAmountToSendForDesiredReceivedAmount( nEstimatedAmountOfWalletFundsReceivedByOtherParty - 1, publisherFee );
				fees.steam_fee += ( amount - fees.amount );
				fees.fees += ( amount - fees.amount );
				fees.amount = amount;
				break;
			}
			else
			{
				nEstimatedAmountOfWalletFundsReceivedByOtherParty--;
			}
		}
		else
		{
			bEverUndershot = true;
			nEstimatedAmountOfWalletFundsReceivedByOtherParty++;
		}

		fees = CalculateAmountToSendForDesiredReceivedAmount( nEstimatedAmountOfWalletFundsReceivedByOtherParty, publisherFee );
		iterations++;
	}

	// fees.amount should equal the passed in amount

	return fees;
}

function CalculateAmountToSendForDesiredReceivedAmount( receivedAmount, publisherFee )
{
	if ( !g_rgWalletInfo['wallet_fee'] )
	{
		return receivedAmount;
	}

	publisherFee = ( typeof publisherFee == 'undefined' ) ? 0 : publisherFee;

	var nSteamFee = parseInt( Math.floor( Math.max( receivedAmount * parseFloat( g_rgWalletInfo['wallet_fee_percent'] ), g_rgWalletInfo['wallet_fee_minimum'] ) + parseInt( g_rgWalletInfo['wallet_fee_base'] ) ) );
	var nPublisherFee = parseInt( Math.floor( publisherFee > 0 ? Math.max( receivedAmount * publisherFee, 1 ) : 0 ) );
	var nAmountToSend = receivedAmount + nSteamFee + nPublisherFee;

	return {
		steam_fee: nSteamFee,
		publisher_fee: nPublisherFee,
		fees: nSteamFee + nPublisherFee,
		amount: parseInt( nAmountToSend )
	};
}

function GetPriceValueAsInt( strAmount )
{
	var nAmount;
	if ( !strAmount )
	{
		return 0;
	}

	// Users may enter either comma or period for the decimal mark and digit group separators.
	strAmount = strAmount.replace( /,/g, '.' );

	// strip the currency symbol, set .-- to .00
	strAmount = strAmount.replace( GetCurrencySymbol( GetCurrencyCode( g_rgWalletInfo['wallet_currency'] ) ), '' ).replace( '.--', '.00');

	// strip spaces
	strAmount = strAmount.replace( / /g, '' );

	// Remove all but the last period so that entries like "1,147.6" work
	if ( strAmount.indexOf( '.' ) != -1 )
	{
		var splitAmount = strAmount.split( '.' );
		var strLastSegment = splitAmount[splitAmount.length-1];

		if ( !isNaN( strLastSegment ) && strLastSegment.length == 3 && splitAmount[splitAmount.length-2] != '0' )
		{
			// Looks like the user only entered thousands separators. Remove all commas and periods.
			// Ensures an entry like "1,147" is not treated as "1.147"
			//
			// Users may be surprised to find that "1.147" is treated as "1,147". "1.147" is either an error or the user
			// really did mean one thousand one hundred and forty seven since no currencies can be split into more than
			// hundredths. If it was an error, the user should notice in the next step of the dialog and can go back and
			// correct it. If they happen to not notice, it is better that we list the item at a higher price than
			// intended instead of lower than intended (which we would have done if we accepted the 1.147 value as is).
			strAmount = splitAmount.join( '' );
		}
		else
		{
			strAmount = splitAmount.slice( 0, -1 ).join( '' ) + '.' + strLastSegment;
		}
	}

	var flAmount = parseFloat( strAmount ) * 100;
	nAmount = Math.floor( isNaN(flAmount) ? 0 : flAmount + 0.000001 ); // round down

	nAmount = Math.max( nAmount, 0 );
	return nAmount;
}

function GetMarketHashName( rgDescriptionData )
{
	if ( typeof rgDescriptionData.market_hash_name != 'undefined' )
		return rgDescriptionData.market_hash_name;
	else if ( typeof rgDescriptionData.market_name != 'undefined' )
		return rgDescriptionData.market_name;
	else
		return rgDescriptionData.name;
}



function ToValidMarketPrice( nPrice, rgWallet )
{
	var nFloor = parseInt( rgWallet[ 'wallet_market_minimum' ] ?? 1 );
	var nIncrement = parseInt( rgWallet[ 'wallet_currency_increment' ] ?? 1 );

	if ( nPrice <= nFloor )
	{
		return nFloor;
	}
	if ( nPrice <= nIncrement )
	{
		return nIncrement;
	}
	if ( nIncrement > 1 )
	{
		var dAmount = nPrice / nIncrement;
		var dSign = dAmount < 0 ? -1 : 1;
		dAmount = (dSign * Math.floor(Math.abs(dAmount) + 0.5)) * nIncrement;
		return dAmount;
	}
	return nPrice;
}

function CalculateFee( base_amt, pct, rgWallet )
{
	if ( pct > 0 )
	{
		return ToValidMarketPrice( Math.floor( base_amt * pct ), rgWallet );
	}
	return 0;
}

function GetTotalWithFees( base_amt, ppct, spct, rgWallet )
{
	var nBase = ToValidMarketPrice( base_amt, rgWallet );
	var nPubFee = CalculateFee( base_amt, ppct, rgWallet );
	var nSteamFee = CalculateFee( base_amt, spct, rgWallet );
	return nBase + nPubFee + nSteamFee;
}

function GetItemPriceFromTotal( nTotal, rgWallet )
{
		var ppct = parseFloat( rgWallet[ 'wallet_publisher_fee_percent_default' ] ?? 0.10 );
	var spct = parseFloat( rgWallet[ 'wallet_fee_percent' ] ?? 0.05 );
	var nIncrement = parseInt( rgWallet[ 'wallet_currency_increment' ] ?? 1 );
	var nFloor = parseInt( rgWallet[ 'wallet_market_minimum' ] ?? 1 );

	var nInitialGuess = Math.floor( nTotal / ( 1.0 + ppct + spct )  );
	var nMaxBase = nTotal - (2 * nFloor );

	// we are at or under the right guess now
	var nBase = ToValidMarketPrice( Math.min( nInitialGuess, nMaxBase ), rgWallet );

	for ( var i = 0; i < 3; i ++ )
	{
		var nCalculated = GetTotalWithFees( nBase, ppct, spct, rgWallet );
		if ( nCalculated == nTotal )
		{
			return nBase;
		}
		if ( nCalculated < nTotal )
		{
			nBase += nIncrement;
		}
		else
		{
			nBase -= nIncrement;
			break;
		}
	}

	return Math.max( nFloor, nBase );
}
