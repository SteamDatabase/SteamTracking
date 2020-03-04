function BSubmitNewAccount( sPublisherName )
{
	sAccountName = document.getElementById( 'accountname' ).value;
	sRealName = document.getElementById( 'realname' ).value;
	sEmail = document.getElementById( 'emailaddr' ).value;

	if(!sAccountName)
	{
		alert('Please enter a Steam account name.');
		return false;
	}
	if(!sRealName)
	{
		alert('Please enter the User\'s full name.');
		return false;
	}
	if(!sEmail)
	{
		alert('Please enter a valid email address.');
		return false;
	}

	sConfirmTxt = 'Are you sure you want to add account ' + sAccountName + ' to ' + sPublisherName + '?';
	return confirm(sConfirmTxt);
}

function BSubmitNewGroup( sPublisherName )
{
	sGroupName = document.getElementById( 'groupname' ).value;
	sConfirmTxt = 'Are you sure you want to add a new group called "' + sGroupName + '" to ' + sPublisherName + '?';
	return confirm(sConfirmTxt);
}

function BVerifyGroupDelete( sGroupName )
{
	sConfirmTxt = 'Are you sure you want to delete the group called "' + sGroupName + '"?';
	return confirm(sConfirmTxt);
}

function BVerifyAccountDelete( sAccountName, sPublisherName )
{
	return confirm( 'Are you sure you want to remove ' + sAccountName + ' from ' + sPublisherName + '?' );
}

// Validate data and submit form for new publisher autogrant
function BSubmitNewAutogrant( sPublisherName )
{
	unPackageID = document.getElementById( 'packageid' ).value;

	sConfirmTxt = 'Are you sure you want all users from ' + sPublisherName +' to own package ' + unPackageID + '?';
	return confirm(sConfirmTxt);
}

function BVerifyAutograntDelete( unPackageID, sPublisherName )
{
	return confirm( 'Are you sure you want to remove licenses for ' + unPackageID + ' for users from ' + sPublisherName + '?' );
}

function BVerifyPromote( sAccountName, sPublisherName )
{
	return confirm( 'Are you sure you want to allow Steam user ' + sAccountName + ' to manage users in ' + sPublisherName + '?' );
}

function BVerifyDemote( sAccountName, sPublisherName )
{
	return confirm( 'Are you sure you want to remove Steam user ' + sAccountName + '\'s ability to manage users in ' + sPublisherName + '?' );
}

function SubmitPrices()
{

	if( g_bHasPricingWarnings && !$J('#pricewarningcheck').prop( "checked" ) )
	{
		ShowAlertDialog( "Pricing error", "You must confirm you have reviewed all pricing warnings before submitting these prices" );
		return;
	}

	if( g_bHasRaisedPrices && !confirm( "You are raising your price on one or more packages. This will prevent you from setting a discount or participating in any sales with these packages for %1$s days. Do you want to continue?".replace('%1$s',30)) )
		return;

	ShowConfirmDialog("Submit Prices?", "Are you sure you want to submit these prices?").done( function()
	{
		$J('#submitbutton').hide();
		var rgForms = $J('.proposal_form');
		g_strErrors = '';

		for ( var i = 0; i < rgForms.length; i += g_nBatchSize )
		{
			var rgBatch = rgForms.slice(i, i + g_nBatchSize);
			var strdata = $J(rgBatch).serialize();

			$J.ajax({
				url: 'https://partner.steamgames.com/packages/proposemultipleprices/',
				data: strdata + '&sessionid=' + g_sessionID,
				type: 'POST',
				dataType: 'json'
			}).done(function (result)
			{
				g_nBatchesFinished++;
				g_nBatchesWorking--;
				if( result.errors.length > 0 )
					g_strErrors += result.errors.join("<br>") + "<br>";
			}).fail(function(){
				g_strErrors += "Batch submission failed." + "<br>";
				g_nBatchesWorking--;
			});

			g_nBatchesWorking++;
		}
		g_modalWorking = ShowDialog('Processing', 'Submitting Prices...');
		setTimeout(CheckFinished, 100);
	});
}

function CheckFinished()
{
	if( g_nBatchesWorking == 0 )
	{
		g_modalWorking.Dismiss();

		var strRespone = 'Finished submitting prices.';
		if( g_strErrors )
			strRespone += "<br><br>Errors:<br>" + g_strErrors;

		ShowAlertDialog( 'Price Submission Complete', strRespone );
	}
	else
	{
		setTimeout( CheckFinished, 100 );
	}
}

function ImportCSV(file)
{
	var eleTable = document.getElementById('rowcontainer');
	var eleForm = document.getElementById('formcontainer');

	eleTable.innerHTML = eleForm.innerHTML = '';
	g_rgHeader = [];
	$J('#pricewarningcheck').prop( "checked", false );


	g_modalWorking = new ShowDialog('Processing', 'Importing CSV');

	var rgRows = [];
	var bError = false;

	//var results;
	Papa.parse(file, {
		worker: true,
		dynamicTyping: true,
		step: function(row) {
			rgRows.push( row.data[0] )
		},
		complete: function(results) {

			var rgHeader = rgRows.shift();
			for( var i=0; i < rgHeader.length; i++ )
			{
				g_mapIndex[rgHeader[i]] = i;
				g_rgHeader.push( rgHeader[i] );
			}

			g_rgPricingData = rgRows;
			DisplayPriceData();

			g_modalWorking.Dismiss();


		}
	});
}

function HeaderToGuidelinesKey( strHeader )
{
	switch(strHeader)
	{
		case 'CIS - USD':
			return 'usd_cis';

		case 'SASIA - USD':
			return 'usd_sasia';

		default:
			if( strHeader.indexOf('-') !== -1 )
			{
				var rgBits = strHeader.split('-');
				strHeader = rgBits[ rgBits.length-1].trim();

				console.log("Fixed -> " + strHeader);
			}

			return strHeader.toLowerCase();
	}

}

function DisplayPriceData()
{
	g_bHasPricingWarnings = false;
	g_bHasRaisedPrices = false;

	if( g_mapIndex['Package ID'] === undefined || g_mapIndex['Package ID'] !== 0 ||
		g_mapIndex['Name'] === undefined || g_mapIndex['Name'] !== 1 )
	{
		ShowConfirmDialog('Error', 'CSV is invalid. Please ensure header columns match the CSV export.' );
		return;
	}

	// Start by adding thead
	var eleTable = document.getElementById('rowcontainer');

	var eleThead = document.createElement('thead');
	var eleTr = document.createElement('tr');

	eleThead.appendChild( eleTr );
	eleTable.appendChild( eleThead );

	for( var i=0; i<g_rgHeader.length; i++ )
	{
		var eleColHeader = $J('<th>' + g_rgHeader[i] + '</td>'  );
		eleTr.appendChild(eleColHeader[0]);
	}

	var eleTbody = document.createElement('tbody');

	eleTable.appendChild(eleTbody);

	var eleFormContainer = document.getElementById('formcontainer');

	var rgPackageIDs = [];

	for( var i=0; i<g_rgPricingData.length; i++ )
	{
		var rgLine = g_rgPricingData[i]
		var packageid = rgLine[g_mapIndex['Package ID']];
		if( !packageid )
			continue;

		if( $.inArray( packageid, rgPackageIDs ) != -1 )
		{
			console.log("!!! DUPLICATE PACKAGEID !!!");
			ShowConfirmDialog('Error', 'PackageID ' + packageid + ' exists multiple times in this spreadsheet. Additional instances will be ignored; please correct the spreadsheet to ensure correct data is imported' );
			continue;
		}

		rgPackageIDs.push(packageid);

		// Get the guidelines if we have them.
		var nUSDPrice = rgLine[ g_mapIndex['USD'] ];
		var strUSDKey = 'usd' + Math.round( nUSDPrice );

		var rgGuidelines = g_rgPricingGuidelines[strUSDKey];

		// Create tr element
		var eleTr = document.createElement('tr');

		var bShouldAdd = false;
		var bRowError = false;

		var eleForm = document.createElement('form');
		eleForm.id = 'pricing_' + rgLine[g_mapIndex['Package ID']];
		eleForm.className = 'proposal_form';


		// Now loop through each column and add it.
		for( var j=0; j<g_rgHeader.length; j++ )
		{
			var strText = '';
			var strCSSClasses = 'price_entry';
			var nPrice = 0;
			var nExpectedPrice  = 0;
			var bError = false;
			if( j > 1 ) // Skip past the packageid and name columns
			{
				var strPrice = rgLine[j];
				nPrice = parseFloat( rgLine[j] );

				if (nPrice > 0 || strPrice) // We have a price
				{
					bShouldAdd = true;
					strText = nPrice.toLocaleString();

					if( nPrice != strPrice ) // Import did something screwy, notify.
					{
						//console.log("Mismatch: '%s' != '%s'", nPrice, strPrice);
						bError = bRowError = true;
						strCSSClasses += ' importpricing_error';
					}
					else
					{
						// Import went OK
						if ( rgGuidelines )
						{
							// Do pricing guidelines lookup if we have it in our table.
							nExpectedPrice = rgGuidelines[HeaderToGuidelinesKey(g_rgHeader[j])] / 100;
							if ( nExpectedPrice )
							{
								if ( nPrice == nExpectedPrice )
									strCSSClasses += ' importpricing_good';
								else if ( ( Math.abs((nPrice - nExpectedPrice) / ( ( nPrice + nExpectedPrice ) / 2 )) * 100 ) > 75 )
								{
									strCSSClasses += ' importpricing_out70';
									g_bHasPricingWarnings = true;
								}
								else
									strCSSClasses += ' importpricing_outofline';
							}
						}

						// Add a form field to submit that price
						var eleInput = document.createElement('input');
						eleInput.name = HeaderToInputField(packageid, g_rgHeader[j]);
						eleInput.value = DecimalToCents(nPrice); // Display in dollars, store in cents.
						eleInput.type = 'hidden';
						eleForm.appendChild(eleInput);


					}
				}
			}
			else
			{
				strText = rgLine[j];
			}

			var eleTd = document.createElement('td');
			eleTd.textContent = strText;
			eleTd.className = strCSSClasses;

			var rgHeaderBits = g_rgHeader[j].split('-');

			// Convert the header into a packageid_region_currency id.
			if( rgHeaderBits.length > 1 )
				eleTd.id = packageid + '_' + rgHeaderBits[0].trim() + '_' + g_mapCurrencies[rgHeaderBits[1].trim()];
			else
				eleTd.id = packageid + '_base_' + g_mapCurrencies[rgHeaderBits[0].trim()];

			if( nPrice )
				$J(eleTd).data('imported_price',nPrice);
			if( nExpectedPrice )
				$J(eleTd).data('expected_price',nExpectedPrice);


			eleTr.appendChild(eleTd);
		}

		if( bShouldAdd )
		{
			if( bRowError )
				eleTr.className += ' importpricing_rowerror';
			else
				eleFormContainer.appendChild(eleForm);

			eleTbody.appendChild(eleTr);
		}


		//console.log("Package %s: %s -- $%s", rgLine[ g_mapIndex['Package ID'] ], rgLine[ g_mapIndex['Name'] ], rgLine[ g_mapIndex['USD'] ]  );

	}

	if( g_bHasPricingWarnings )
		$J('#pricewarningcontainer').show();
	else
		$J('#pricewarningcontainer').hide();

	$J('#submitbutton').show();

	CloneHeader(eleTable);
	LoadCurrentPackagePrices( rgPackageIDs  );
}

function HeaderToInputField(packageid, strHeader)
{
	var rgHeaderBits = strHeader.split(' ');
	if( rgHeaderBits.length == 1 )
	{
		return 'proposals['+packageid+'][prices][base][' + g_mapCurrencies[rgHeaderBits[0]] + ']';
	}

	return 'proposals['+packageid+'][prices]['+ rgHeaderBits[0] +'][' + g_mapCurrencies[rgHeaderBits[2]] + ']';
}

function CloneHeader( eleTable )
{
	var eleHeader = $J('th', eleTable);

	var eleContainer = document.createElement('div');

	eleHeader.each(function(index, ele){
		var eleCol = document.createElement('div');
		eleCol.className = 'clonedth';

		eleCol.textContent = ele.textContent;

		$J(eleCol).css({'width': $J(ele).width(), 'height': $J(ele).height()} )
		eleContainer.appendChild(eleCol);
	});

	$J('#pageContainer').append(eleContainer);
	var offset = $J(eleTable).offset();
	$J(eleContainer).css({'position': 'absolute', 'top': offset.top, 'left': offset.left, 'white-space': 'nowrap'});
	$J(eleContainer).data('top-max', offset.top);
	eleContainer.id = 'header_clone';

	$J(window).scroll(function(){
		if( $J(window).scrollTop() < $J('#header_clone').data('top-max') )
		{
			$J('#header_clone').css({'top': $J('#header_clone').data('top-max'), 'position': 'absolute' });
		}
		else
		{
			$J('#header_clone').css({'top': 0, 'position': 'fixed' });
		}
	});

}

var g_nPriceBatchSize = 100;

function LoadCurrentPackagePrices( rgPackages )
{
	while( rgPackages.length > 0 )
	{
		var rgPackageBatch = rgPackages.slice(0, g_nPriceBatchSize);
		rgPackages = rgPackages.slice(g_nPriceBatchSize);

		LoadCurrentPackageBatch(rgPackageBatch);

	}
}

// This horrifying piece of code converts a price to an interger
// by using string conversion to assure we never lose precision.
function DecimalToCents( num )
{
	if( !num )
		return 0;
	var rgBits = num.toString().split('.');
	var nOut = parseInt( rgBits[0] ) * 100;

	if( rgBits.length == 2 )
	{
		var strCents = rgBits[1];
		if( strCents.length == 1)
			strCents += '0';
		else if( strCents.length > 2 )
			strCents = strCents.substring(0,2);
		nOut += parseInt( strCents );
	}

	return nOut;
}

function LoadCurrentPackageBatch( rgPackages )
{
	$J.ajax({
		url: 'https://partner.steamgames.com/pub/ajaxgetprices/' + g_nPublisherId + '/',
		data: {
			packages: rgPackages,
			sessionid: g_sessionID
		},
		type: 'POST',
		dataType: 'json'
	}).done(function (result)
	{
		$J.each(result, function(packageid, regions){

			$J.each(regions, function(region, rgPricing){


				$J.each(rgPricing, function(currency, price)
				{
					var target = $J('#' + packageid + '_' + region + '_' + currency);





					var nImportedPrice = DecimalToCents ( target.data('imported_price') );
					var nExpectedPrice = target.data('expected_price') ;

					var strTooltipText = 'Current price: '+(price/100)+'&lt;br&gt;Suggested Price:'+nExpectedPrice;

					if( price )
					{

						if ( target.data('imported_price') > price )
						{
							var ele = $J('<span class="price_difference price_increase ttip" data-tooltip-text="' + strTooltipText + '" >▲</span>');
							g_bHasRaisedPrices = true;
						}
						else if ( nImportedPrice < price )
						{
							var ele = $J('<span class="price_difference price_decrease ttip" data-tooltip-text="' + strTooltipText + '">▼</span>');
						}
						else
						{
							var ele = $J('<span class="price_difference price_equal ttip" data-tooltip-text="' + strTooltipText + '">=</span>');
						}
					} else {
						var ele = $J('<span class="price_difference price_increase ttip" data-tooltip-text="' + strTooltipText + '" >*</span>');
					}
					//console.log("Target: " + target.data('imported_price'));

					target.append(ele);

				});


			});
		});
		console.log(result);
	}).fail(function ()
	{
		console.log("FAIL");
	});

}

