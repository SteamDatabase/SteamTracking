//
// Functions used to dynamically create the layout for editing cost
// <script>

var packages = { };

var strDefaultExplodeCountryCodeText = 'Enter country codes';
var strDefaultExplodeCountryCostText = 'Cost';
var strDefaultExplodeCountryDiscountText = 'Discount';
var g_nextElementID = 0;
var g_AllDiscounts = new Object();

function SetDefaultText( target, defaultText )
{
	var text = $(target).value;
	if ( text == '' )
	{
		$(target).value = defaultText;
		$(target).setStyle( {color: '#656565', fontStyle: 'italic'});			
	}
}

function ClearDefaultText( target, defaultText )
{
	var text = $(target).value;
	if ( text == defaultText )
	{
		$(target).value = '';
		$(target).setStyle( {color: '', fontStyle: ''});
	}
}

function AddLineBreak( target )
{
	var breakElement = document.createElement( "br" );
	target.appendChild( breakElement );
	breakElement.style.clear = 'both';
	return breakElement;
}

function AddText( target, text )
{
	var span = document.createElement( "span" );
	span.innerHTML = text;
	target.appendChild( span );
	return span;
}

function AddDiv( target, text )
{
	var div = document.createElement( "div" );
	div.innerHTML = text;
	target.appendChild( div );
	return div;
}

function GetLabelForCurrencyCode( currency )
{
	if ( currency == 'USD' )
		return '$ USD';
	else if ( currency == 'GBP' )
		return '&pound; GBP';
	else if ( currency == 'EUR' )
		return '&euro; EUR';
	else
		return currency;
}

function ConvertValueToShortString( currency, value )
{
	value = GetFinalPrice( value, currency );
	if ( currency == 'USD' )
		return '$' + value;
	else if ( currency == 'GBP' )
		return value + '&pound;';
	else if ( currency == 'EUR' )
		return '&euro;' + value;
	else if ( currency == 'RUB' )
		return value + ' R';
	else
		return value + ' ' + currency;
}

var templ_CurrencyInput = new Template( ''
	+ '	<div style="margin-left:100px;float:left">'
	+ '		<input style="float:left" class="costInput" type="text" name="#{id}" id="#{id}" value="#{value}" #{disabled} onchange="DisplaySalePricesNotUpdated();"/>'
	+ '		<span style="float:left" class="OverrideCurrency">#{label}</span>'
	+ '	</div>');
var templ_ComparedToBase = new Template('<div style="margin-left:138px;float:left" class="FinalPrice">#{value}</div><div style="margin-left:470px" class="PercentPrice">#{percent}%</div>');

// target = target html element to append to
// id = string prepended to id of input boxes
// reqCurrencies = array of required currency codes
// initValues = map of initial values (currency code => value)
function CreateRequiredCurrencyBlock( target, id, reqCurrencies, initValues )
{
	$(target).insert( GetRequiredCurrencyBlock( id, reqCurrencies, initValues, false, false ) );
}

function GetFinalPrice( finalPrice, currency )
{
	if ( isNaN( finalPrice ) )
	{
		// Check if we can cast it to an int, as sometimes, we are passing '-'
		return finalPrice;
	}
	else
	{
		finalPrice /= 100;
		return finalPrice.toFixed( 2 );
	}
}

function GetRequiredCurrencyBlock( id, reqCurrencies, initValues, isDiscount, isDisabled )
{
	var strRequiredCurrency = '';

	var initialCosts = null;
	if ( isDiscount )
	{
		initialCosts = GetInitialCosts();
	}
	
	for ( var currency in reqCurrencies )
	{
		var discount = '';
		if ( initValues != null && initValues[currency] != null )
			discount = initValues[currency];
		
		var label = GetLabelForCurrencyCode( currency );
		if ( reqCurrencies[currency].required == 0 )
		{
			label += "<span class=\"CurrencyNotRequired\">*</span>";
		}
		
		var disabledTag = isDisabled ? 'disabled="disabled"' : '';
		var innerHtml = templ_CurrencyInput.evaluate( {id: id + "[" + currency + "]", value: discount, label: label, disabled: disabledTag } );
		if ( initialCosts && initialCosts.base && initialCosts.base[ currency ] )
		{
			var finalPrice = GetFinalPrice( initialCosts.base[ currency ] - discount, currency );
			var percent = -Math.round( ( discount / initialCosts.base[ currency ] ) * 100.0 );
			innerHtml += templ_ComparedToBase.evaluate( { value: finalPrice + ' ' + label, percent: percent } );
		}

		strRequiredCurrency += '<div class="tightformrow">' + innerHtml + '</div>';
		strRequiredCurrency += '<div style="clear: both;"></div>';
	}
	
	return strRequiredCurrency;
}

var templ_RegionOverrideInput = new Template( ''
		+ '	<div style="width:100px;float:left">#{region}:</div>'
		+ '	<input style="float:left" class="costInput" type="text" name="#{id}[value]" id="#{id}_CurrencyInput" value="#{value}" #{disabled} onchange="DisplaySalePricesNotUpdated();"/>'
		+ '	<input type="hidden" name="#{id}[currency]" id="#{id}_CurrencyHidden" value="#{currency}" #{disabled}/>'
		+ '	<span style="float:left" class="OverrideCurrency">#{label}</span>'
		);
var templ_RegionComparedToBase = new Template('<div style="margin-left:136px;float:left" class="FinalPrice">#{value}</div><div style="margin-left:470px" class="PercentPrice">#{percent}%</div>');

function CreateRegionOverridesBlock( target, id, regionCurrencies, initValues, isDiscount, isDisabled )
{
	var initialCosts = null;
	if ( isDiscount )
	{
		initialCosts = GetInitialCosts();
	}

	var cRegions = regionCurrencies.length;
	var strHTML = '';
	
	for ( var strRegion in regionCurrencies )
	{
		var currency = regionCurrencies[ strRegion ];
		var value = '';
		if ( initValues != null && initValues[ strRegion ] != null )
		{
			value = initValues[ strRegion ][ 'value' ];
			
			// check if currency matches current. If not, show error. This will very rarely (if ever?) happen
			if ( initValues[ strRegion ][ 'currency' ] != currency )
			{
				value = '';
				alert( 'WARNING:\n\nCurrency for region ' + strRegion + ' (' +  initValues[ strRegion ][ 'currency' ] + ') does not match current currency for this region (' + currency + ').\n\nThe value for this region override has been deleted!' );				
			}
		}
		
		var label = GetLabelForCurrencyCode( currency );
		var disabledTag = isDisabled ? 'disabled="disabled"' : '';
		var innerHtml = templ_RegionOverrideInput.evaluate( {id: id + "[" + strRegion + "]", value: value, label: label, currency: currency, region: strRegion, disabled: disabledTag} );
		if ( initialCosts && initialCosts.region && initialCosts.region[ strRegion ] )
		{
			var finalPrice = GetFinalPrice( initialCosts.region[ strRegion ].value - value, currency );
			var percent = -Math.round( ( value / initialCosts.region[ strRegion ].value ) * 100.0 );
			innerHtml += templ_RegionComparedToBase.evaluate( { value: finalPrice + ' ' + label, percent: percent } );
		}
		innerHtml = '<div class="tightformrow">' + innerHtml + '</div>';
		innerHtml += '<div style="clear: both;"></div>';
		strHTML += innerHtml;
	}

	$(target).insert( strHTML );
}

var templ_CountryOverride = new Template( ''
		+ '	<div id="#{OverrideId}_countryOverrideDiv" class="CountryOverrideRow">'
		+ '		<div style="float: left;width:1000px">'
		+ '			<select style="float:left" id="#{OverrideId}_Select" class="CountryOverrideCountryListColumn" name="#{OverrideId}[country]"></select>'
		+ '			<input style="float:left" id="#{OverrideId}_Cost" class="CountryOverrideCostColumn" name="#{OverrideId}[cost]" value="#{InitValue}" onchange="DisplaySalePricesNotUpdated();" />'
		+ '			<span style="float:left" id="#{OverrideId}_CurrencyText" class="OverrideCurrency"></span>'
		+ '			<input style="float:left" id="#{OverrideId}_CurrencyInput" class="CountryOverrideDelete" type="hidden" name="#{OverrideId}[currency]" value="" />'
		+ '			#{InnerDiscountHtml}'
		+ '			<input style="margin-left:3px;float:left" id="#{OverrideId}_DeleteBtn" type="submit" value="Delete" class="CountryOverrideButton" />'
		+ '		</div>'
		+ '		<div style="clear: both;"></div>'
		+ '	</div>'		
		);

var templ_CountryOverrideComparedToBase = new Template('<div style="margin-left:33px;float:left" class="FinalPrice">#{value}</div>' +
		'<div style="margin-left:14px;float:left;" class="PercentPrice">#{percent}%</div>');

// target = target html element to append to
// id =
// initCountry = iso country code (2 char)
// initValue = int or null
// initCurrency = currency code (3 char)
function CreateCountryOverride( target, id, initCountry, initValue, initCurrency, isDiscount, isDisabled )
{
	if ( initValue == null )
		initValue = '';

	var initialCosts = null;
	if ( isDiscount )
	{
		initialCosts = GetInitialCosts();
	}

	// add template. We will need to do some fixing up after.
	var currencyLabel = GetLabelForCurrencyCode( initCurrency );
	var innerDiscountHtml = '';
	if ( initialCosts && initialCosts.country && initialCosts.country[ initCountry ] )
	{
		var finalPrice = GetFinalPrice( initialCosts.country[ initCountry ].value - initValue, initCurrency );
		var percent = -Math.round( ( initValue / initialCosts.country[ initCountry ].value ) * 100.0 );
		innerDiscountHtml = templ_CountryOverrideComparedToBase.evaluate( { value: finalPrice + ' ' + currencyLabel, percent: percent } );
	}
	var strHtml = templ_CountryOverride.evaluate( { OverrideId: id, InitValue: initValue, InnerDiscountHtml: innerDiscountHtml } );

	target.insert( strHtml );

	// setup country dropdown
	var select = $( id + "_Select" );	
	for ( var i in g_CountryCodes )
	{
		var option = document.createElement( "option" );
		option.text = g_CountryCodes[i];
		option.value = i;
		
		// select country if needed
		if (initCountry != null && initCountry == i )
			option.selected = true;
			
		select.options.add( option );
	}

	// text showing currency
	if ( initCurrency == null )
		initCurrency = g_CountryCurrencies[select.value];

	var currencyText = $( id + '_CurrencyText' );
	currencyText.innerHTML = ' ' + currencyLabel + ' ';

	// hidden input for currency
	var inputHidden = $( id + '_CurrencyInput' );
	inputHidden.value = initCurrency;
	
	// onchange, update currency fields
	select.onchange = function()
						{
							currencyText.innerHTML = ' ' + GetLabelForCurrencyCode(g_CountryCurrencies[select.value]) + ' ';
							inputHidden.value = g_CountryCurrencies[select.value];
							DisplaySalePricesNotUpdated();
						};

	// delete button
	var container = $( id + '_countryOverrideDiv' );
	var btn = $(id + '_DeleteBtn');
	btn.onclick = function()
					{
						container.parentNode.removeChild( container );
						DisplaySalePricesNotUpdated();
					};
	if ( isDisabled )
	{
		$( id + '_Cost' ).disabled = true;
		select.disabled = true;
		btn.style.display = 'none';
	}
}

// target = target html element to append to
// id =
// initValue = int or null
function CreateRequiredPackage( target, id, initValue )
{
	// div which is removed when delete is pressed (contains all controls for this item)
	var containerid = id + "_requiredPackageDiv";
	var container = document.createElement( "div" );
	container.className = 'tightformrow';
	container.id = containerid;
	target.appendChild( container );
	
	// input box
	var inputBox = document.createElement( "input" );
	inputBox.name = id;
	if ( initValue != null )
		inputBox.value = initValue;
	
	container.appendChild( inputBox );
	
	// delete button
	var btn = document.createElement( "input" );
	btn.type = "submit";
	btn.onclick = function()
					{
						container.parentNode.removeChild( container );
					};
	btn.value = "Delete";
	btn.style.marginLeft = '4px';
	container.appendChild( btn );
}

// sets specified date control to the current time
function SetDateControlToNow( id )
{
	// always set to Pacific time
	var now = new Date();
	var final = now.getTime() + (now.getTimezoneOffset() * 60000) + (g_pacificTimeOffset * 1000);
	now = new Date( final );

	$( id + '[year]' ).value = now.getFullYear();
	$( id + '[month]' ).value = now.getMonth() + 1;	// javascript uses 0-11 for months
	$( id + '[day]' ).value = now.getDate();
	$( id + '[hour]' ).value = now.getHours();
	$( id + '[minute]' ).value = 0;
}

// template for the date control
var templ_DateControl = new Template( ''
		+ '	<div id="#{ControlId}_datecontrol" style="white-space: nowrap">'
		+ '		<select class="yearselect" id="#{ControlId}[year]" name="#{ControlId}[year]"><option value=""></option></select>'
		+ '		<select class="monthselect" id="#{ControlId}[month]" name="#{ControlId}[month]"><option value=""></option></select>'
		+ '		<select class="dayselect" id="#{ControlId}[day]" name="#{ControlId}[day]"><option value=""></option></select>'
		+ '		&nbsp;&nbsp;&nbsp;'
		+ '		<select class="hourselect" id="#{ControlId}[hour]" name="#{ControlId}[hour]"><option value=""></option></select>:'
		+ '		<select class="minuteselect" id="#{ControlId}[minute]" name="#{ControlId}[minute]"><option value=""></option></select>'
		+ '		<a href="#" onclick="SetDateControlToNow( \'#{ControlId}\' ); return false;">now</a>'
		+ '		<a href="#" onclick="$(this).adjacent(\'select\').invoke(\'clear\'); return false;">clear</a>'
		+ '	</div>'
		);

// helper to add an option to a select box
function CreateOption( target, value, text, selected )
{
	var opt = document.createElement( "option" );
	opt.value = value;
	opt.text = text;
	opt.selected = selected;
		
	target.options.add( opt );
}

// creates a date control and adds it to target
function CreateDateControl( target, id, initValue )
{
	// convert unix epoch
	if ( initValue == null )
		initValue = 0;

	// always set to Pacific time
	var now = new Date();
	var initDate = new Date( initValue * 1000 );
	initDate = new Date( initDate.getTime() + (now.getTimezoneOffset() * 60000) + (g_pacificTimeOffset * 1000) );
	
	var dateBlock = templ_DateControl.evaluate( { ControlId: id } );
	target.insert( dateBlock );
		
	// year
	var yearSelect = $( id + '[year]' );
	var now = new Date();
	var fullYear = Math.min( initDate.getFullYear(), now.getFullYear() );

	for ( var i = (now.getFullYear() + 4); i >= fullYear ; i-- )
	{
		var selected = ( initValue != 0 && i == initDate.getFullYear() );
		CreateOption( yearSelect, i, i, selected );	
	}
	
	// month
	var months = new Array( "Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec" );	
	var monthSelect = $( id + '[month]' );
	var month = initDate.getMonth();
	for ( var i = 0; i < months.length; i++ )
	{		
		var selected = ( initValue != 0 && i == month );
		CreateOption( monthSelect, i + 1, months[i], selected );
	}
	
	// days
	var daySelect = $( id + '[day]' );
	var day = initDate.getDate();
	for ( var i = 1; i <= 31; i++ )
	{
		var selected = ( initValue != 0 && i == day );
		CreateOption( daySelect, i, i, selected );
	}
	
	// hours
	var hourSelect = $( id + '[hour]' );
	var hour = initDate.getHours();
	for ( var i = 0; i < 24; i++ )
	{
		var selected = ( initValue != 0 && i == hour );
		CreateOption( hourSelect, i, i, selected );
	}
	
	// minutes
	var minuteSelect = $( id + '[minute]' );
	var minute = initDate.getMinutes();
	for ( var i = 0; i < 60; i++ )
	{
		var val = ( i < 10 ) ? '0' + i : i;
		var selected = ( initValue != 0 && i == minute );
		CreateOption( minuteSelect, i, val, selected );		
	}
}

var templ_DiscountDiv = new Template( ''
		+ '	<form id="packageDiscount#{DiscountId}Form" onsubmit="return false;">'
		+ '	<div class="boxlist_item" id="#{DiscountId}_discountDiv">'
		+ '		<input type="hidden" id="#{DiscountId}_group" name="#{DiscountId}[group]" value="#{Group}">'
		+ '		<div class="boxlist_title"><span>#{Name} (#{DiscountNumber})</span>'
		+ '			<div class="boxlist_controls visible">'
		+ '				<input style="float: right;" value="Delete Discount" type="submit" onclick="OnClickDeleteDiscount( #{PackageId}, \'#{DiscountId}\' ); return false;">'
		+ '				<input style="float: right;" value="Hide Discount" type="submit" onclick="OnClickHideDiscount( \'#{DiscountId}\' ); return false;">'
		+ '			</div>'
		+ '			<div class="boxlist_controls hidden">'
		+ '				<input style="float: right;" value="Show details" type="submit" onclick="OnClickShowDiscount( \'#{DiscountId}\' ); return false;">'
		+ '			</div>'
		+ '			<div style="clear: both;"></div>'
		+ '		</div>'
		+ '		<div class="boxlist_content">'
		+ '			<div class="formrow">'
		+ '				<div class="formlabel">Name: </div>'
		+ '				<div class="formdata"><input name="#{DiscountId}[name]" value="#{Name}" style="width: 550px"></div>'
		+ '				<div style="clear: both;"></div>'	
		+ '			</div>'
		+ '			<div class="formrow">'
		+ '				<div class="formlabel">Description: </div>'
		+ '				<div class="formdata">'
		+ '					<select id="#{DiscountId}_desc_preset" name="#{DiscountId}[description_preset]" onchange="$(\'#{DiscountId}_desc_custom\').clear()">'
		+ '						<option value=""></option>'
		+ '					</select>'
		+ '					<span>or, custom text:</span>'
		+ '					<input maxlength="250" style="width: 250px" class="Description" id="#{DiscountId}_desc_custom" name="#{DiscountId}[description]" value="#{Description}" onchange="$(\'#{DiscountId}_desc_preset\').clear()" onKeyPress="$(\'#{DiscountId}_desc_preset\').clear()">'
		+ '				</div>'
		+ '			</div>'
		+ '			<div class="formrow">'
		+ '				<div class="formlabel">Date Ranges: </div>'
		+ '				<div class="formdata">'
		+ '					<div style="padding-bottom: 5px">'
		+ '						<div style="width: 50px;float: left">Start:</div>'
		+ '						<div id="#{DiscountId}_startdateDiv"></div>'
		+ '					</div>'
		+ '					<div style="padding-bottom: 5px">'
		+ '						<div style="width: 50px;float: left">End:</div>'
		+ '						<div id="#{DiscountId}_enddateDiv"></div>'
		+ '					</div>'
		+ '					(Note: All times in PST/PDT)'
		+ '				</div>'
		+ '			</div>'
		+ '			<div class="formrow">'
		+ '				<div class="formlabel">Required Packages:</div>'
		+ '				<div class="formdata">'
		+ '					<div id="#{DiscountId}_RequiredPackages" style="float:left">'
		+ '					</div>'
		+ '					<input class="tightformrow" value="Add Package" type="submit" onclick="AddRequiredPackage( $(\'#{DiscountId}_RequiredPackages\'), \'#{DiscountId}[requiredPackages]\', null ); return false;">'
		+ '				</div>'
		+ '				<div style="clear: both;"></div>'
		+ '			</div>'
		+ '			<div class="formrow">'
		+ '				<div class="formlabel">Discount Percentage: </div>'
		+ '				<div class="formdata">'
		+ '					<input maxlength="2" style="width: 50px" class="Description" id="#{DiscountId}_discount_percent" name="#{DiscountId}[discount_percent]" value="#{DiscountPercentage}"> *A non-zero value will automatically update the discount when approving new prices through the new tool'
		+ '				</div>'
		+ '			</div>'		+ '			<div class="formrow">'
		+ '				<div class="formlabel">Discount amounts:</div>'
		+ '				<div class="formdata">'
		+ '					<div style="margin-left: 100px;float:left">Discount in cents:</div>'
		+ '					<div style="margin-left: 300px">Calculated sale prices:</div>'
		+ '					#{DiscountPrices}'
		+ '				</div>'
		+ '				<div style="clear: both;"></div>'
		+ '			</div>'
		+ '			<div class="formrow" style="margin-top: 5px;">'
		+ '				<div class="formlabel">Region Overrides:</div>'
		+ '				<div class="formdata" id="#{DiscountId}_RegionCost"></div>'
		+ '				<div style="clear: both"></div>'
		+ '			</div>'
		+ '			<div class="formrow">'
		+ '				<div class="formlabel">Country overrides:</div>'
		+ '					<div class="formdata">'
		+ '						<div class="CountryOverrideRow">'
		+ '							<div class="CountryOverrideCountryListColumn" style="font-weight: bold; float: left; text-align: center;">Country</div>'
		+ '							<div class="CountryOverrideCostColumn" style="font-weight: bold; float: left; text-align: center;">Discount</div>'
		+ '							<div style="clear: both"></div>'
		+ '						</div>'
		+ '						<div class="CountryOverrideRow">'
		+ '							<div style="float: left">'
		+ '								<input id="#{DiscountId}_explodeCountryOverrideCountries" class="CountryOverrideCountryListColumn" type="text"'
		+ '									onblur="SetDefaultText( \'#{DiscountId}_explodeCountryOverrideCountries\', strDefaultExplodeCountryCodeText )" onfocus="ClearDefaultText( \'#{DiscountId}_explodeCountryOverrideCountries\', strDefaultExplodeCountryCodeText )">'
		+ '								<input id="#{DiscountId}_explodeCountryOverrideCost" class="CountryOverrideCostColumn" type="text"'
		+ '									onblur="SetDefaultText( \'#{DiscountId}_explodeCountryOverrideCost\', strDefaultExplodeCountryDiscountText )" onfocus="ClearDefaultText( \'#{DiscountId}_explodeCountryOverrideCost\', strDefaultExplodeCountryDiscountText )">'
		+ '							</div>'
		+ '							<div style="float:right">'
		+ '							<input type="submit" value="Explode" onclick="ExplodeCountryOverride( $(\'#{DiscountId}_explodeCountryOverrideCountries\'), $(\'#{DiscountId}_explodeCountryOverrideCost\'), $(\'#{DiscountId}_CountryOverrides\'), \'#{DiscountId}[countryDiscounts]\', strDefaultExplodeCountryDiscountText, true ); return false;" class="CountryOverrideButton"/>'
		+ '						</div>'
		+ '						<div style="clear: both"></div>'
		+ '					</div>'
		+ '					<div style="clear: both"></div>'
		+ '					<div style="padding-top: 8px; padding-bottom: 8px;" align="center"><hr style="width: 75%"></div>'
		+ ''
		+ '					<div id="#{DiscountId}_CountryOverrides">'
		+ '					</div>'
		+ '					<input value="Add Country" type="submit" onclick="AddCountryOverride( $(\'#{DiscountId}_CountryOverrides\'), \'#{DiscountId}[countryDiscounts]\', null , null, \'\', true, false ); return false;">'
		+ '				</div>'
		+ '				<div style="clear: both;"></div>'
		+ '			</div>'
		+ '		<input type="hidden" name="sessionid" value="#{SessionId}" />'
		+ '		<input id="packageDiscount#{DiscountId}Submit" style="float: right;" type="submit" value="Save Discount" onclick="SetPackageCost( #{PackageId}, \'packageDiscount#{DiscountId}Form\', \'packageDiscount#{DiscountId}Submit\' ); return false;" />'
		+ '		</div>'
		+ '	</div>'
		+ '	</form>'
		);

var templ_DiscountsSummaryDiv = new Template( ''
		+ '			<div class="formrow">'
		+ '				<div class="formlabel">Discount amounts:</div>'
		+ '				<div class="formdata">'
		+ '					<div style="margin-left: 100px;float:left">Discount in cents:</div>'
		+ '					<div style="margin-left: 300px">Calculated sale prices:</div>'
		+ '					#{DiscountPrices}'
		+ '				</div>'
		+ '				<div style="clear: both;"></div>'
		+ '			</div>'
		+ '			<div class="formrow" style="margin-top: 5px;">'
		+ '				<div class="formlabel">Region Overrides:</div>'
		+ '				<div class="formdata" id="#{DiscountId}_RegionCost"></div>'
		+ '				<div style="clear: both"></div>'
		+ '			</div>'
		+ '			<div class="formrow">'
		+ '				<div class="formlabel">Country overrides:</div>'
		+ '				<div class="formdata" id="#{DiscountId}_CountryOverrides">'
		+ '				</div>'
		+ '				<div style="clear: both;"></div>'
		+ '			</div>'
		);

// target = target html element to append to
// id =
// name = string
// packages = array of packages (ints) 
// discounts = map of initial discount values for base price & country overrides (currency/country code => value)
function CreateDiscount( target, id, discount, packageid )
{
	var name = (discount['name'] == null ) ? '' : discount['name'];
	var description = (discount['description'] == null ) ? '' : discount['description'];
	var amt = (discount['discount'] == null) ? new Object() : discount['discount'];
	var group = (discount['group'] == null) ? '' : discount['group'];
	var discount_percent = (discount['discount_percent'] == null ) ? 0 : discount['discount_percent'];
	var discount_number = (discount['discount_id'] == null) ? '' : discount['discount_id']; // the actual discountID used by the rack, not the HTML elementID

	// Base Discounts
	var strDiscountPrices = GetRequiredCurrencyBlock( id + '[discount]', g_RequiredCurrencies, amt['base'], true, false );

	var discountBlock = templ_DiscountDiv.evaluate( { DiscountId: id, SessionId: g_sessionID, PackageId: packageid, Name: name, DiscountNumber: discount_number, Description: description, DiscountPercentage: discount_percent, DiscountPrices: strDiscountPrices, Group: group } );
	target.insert( discountBlock );
	
	// set up start & end dates
	$startdateDiv = $( id + '_startdateDiv' );
	$enddateDiv = $( id + '_enddateDiv' );
	CreateDateControl( $startdateDiv, id + '[startdate]', discount['start_date'] );
	CreateDateControl( $enddateDiv, id + '[enddate]', discount['end_date'] );
	
	// setup description fields
	var descriptionPresetValues = [ "#discount_desc_preset_special",
	                                "#discount_desc_preset_weekend",
	                                "#discount_desc_preset_daily",
	                                "#discount_desc_preset_midweek",
									"#discount_desc_preset_promotion",
									"#discount_desc_preset_halloween",
									"#discount_desc_preset_autumn",
									"#discount_desc_preset_holiday",
									"#discount_desc_preset_summer",
									"#discount_desc_preset_publisher",
									"#discount_desc_preset_vote",
									"#discount_desc_preset_flash_6",
									"#discount_desc_preset_flash_8",
									"#discount_desc_preset_flash_10",
									"#discount_desc_preset_flash_12",
									"#discount_desc_preset_weeklong"];
	
	var descriptionPresetText = [ "SPECIAL PROMOTION! Offer ends in #",
	                              "WEEKEND DEAL! Offer ends in #",
	                              "DAILY DEAL! Offer ends in #",
	                              "MIDWEEK MADNESS! Offer ends in #",
								  "PROMOTIONAL PRICE! Offer ends in #",
								  "HALLOWEEN SALE! Offer ends in #",
								  "AUTUMN SALE! Offer ends in #",
								  "HOLIDAY SALE! Offer ends in #",
								  "SUMMER SALE! Offer ends in #",
								  "PUBLISHER PACK! Offer ends in #",
								  "VOTE PROMOTION! Offer ends in #",
								  "FLASH SALE 6H! Offer ends in #",
								  "FLASH SALE 8H! Offer ends in #",
								  "FLASH SALE 10H! Offer ends in #",
								  "FLASH SALE 12H! Offer ends in #",
								  "WEEK LONG DEAL! Offer ends in #"];
	
	var selectDescPreset = $( id + '_desc_preset' );
	var inputDescCustom = $( id + '_desc_custom' );
	
	for ( var i = 0; i < descriptionPresetValues.length; i++ )
	{
		var selected = (description == descriptionPresetValues[i]); 
		CreateOption( selectDescPreset, descriptionPresetValues[i], descriptionPresetText[i], selected );
		
		if ( selected )
			inputDescCustom.clear();
	}	

	// add countries
	var countryDiv = $( id + '_CountryOverrides');
	if ( amt['country'] != null )
	{
		for ( var i in amt['country'] )
		{
			if( !amt['country'][i]['value'] )
				continue;

			AddCountryOverride( countryDiv, id + '[countryDiscounts]', i, amt['country'][i]['value'], amt['country'][i]['currency'], true, false );
		}
	}

	// add required packages
	var packageDiv = $( id + '_RequiredPackages');
	var packages = discount['required_packages'];
	if ( packages != null && packages.length > 0 )
	{
		var count = packages.length;
		for ( var i = 0; i < count; i++ )
			AddRequiredPackage( packageDiv, id + '[requiredPackages]', packages[i] );
	}
	else
	{
		AddRequiredPackage( packageDiv, id + '[requiredPackages]', null );
	}

	// add region override
	var regionDiv = $( id + '_RegionCost' );
	CreateRegionOverridesBlock( regionDiv, id + '[regionDiscounts]', g_RegionCurrencies, amt['region'], true, false );
	
	// set default text on explode
	SetDefaultText( id + '_explodeCountryOverrideCountries', strDefaultExplodeCountryCodeText );
	SetDefaultText( id + '_explodeCountryOverrideCost', strDefaultExplodeCountryDiscountText );

	if( discount['end_date'] < Date.now() / 1000 )
	{
		var escapedID = id.replace(/[[\]]/g, "\\$&");
		$J('#' + escapedID + '_discountDiv').addClass('hidden');
	}
}

function OnClickDeleteDiscount( packageid, id )
{
	if( confirm("Please don't delete historical discount data. Set the end date to \"now\" if you just want to end a discount early. If you have questions ask Kadar\r\n\r\nDelete this discount?") )
	{
		var discountid = id.slice(10,-1);
		CreateAjaxRequest(	g_szBaseURL + "/packages/removepackagediscount/" + packageid,
			{ 'discountid' : discountid, 'sessionid' : g_sessionID },
			function( results )
			{
				if ( results[ 'success' ] )
				{
					$( id + '_discountDiv' ).remove();
					g_AllDiscounts[ id ] = undefined;
					UpdateSummaryDiscounts();
				}
			},
			'post'
		);


	}
}

function OnClickShowDiscount( id )
{
	var escapedID = id.replace(/[[\]]/g, "\\$&");
	$J('#' + escapedID + '_discountDiv').removeClass('hidden');
}

function OnClickHideDiscount( id )
{
	var escapedID = id.replace(/[[\]]/g, "\\$&");
	$J('#' + escapedID + '_discountDiv').addClass('hidden');
}

// 
// Add* functions take care of generating the next ID
// 

function AddCountryOverride( target, id, country, value, currency, isDiscount, isDisabled )
{
	CreateCountryOverride( target, id + '[' + (++g_nextElementID) + ']', country, value, currency, isDiscount, isDisabled );
}

function ExplodeCountryOverride( sourceCountries, sourceCost, target, id, strCostFieldText, isDiscount )
{	
	var countries = '';
	if ( sourceCountries.value != strDefaultExplodeCountryCodeText )
		countries = sourceCountries.value.toUpperCase().split( /\W+/ );	

	// make sure all countries have a currency
	var missingCurrencies = '';
	for ( var i = 0; i < countries.length; i++ )
	{
		// remove element if empty string
		if ( countries[i].length == 0 )
		{
			countries.splice( i, 1 );
			i--;
			continue;
		}
		
		// check for currency
		if ( g_CountryCurrencies[ countries[i] ] == null )
			missingCurrencies += ' ' + countries[i];	
	}
	
	if ( countries.length == 0 )
	{
		alert( 'Please enter a list of countries' );
		return;
	}
	
	
	if ( missingCurrencies.length > 0 )
	{
		alert( 'The following countries did not have a currency:\n' + missingCurrencies );
		return;
	}
	
	var cost = parseInt( sourceCost.value );
	if ( sourceCost.value.strip() != '0' && !cost )
	{
		alert( 'Please enter a cost' );
		return;
	}
	
	// add overrides. Alert the user if all currencies don't match
	var matchCurrency = g_CountryCurrencies[ countries[0] ];
	currenciesMatch = true;
	for ( var i = 0; i < countries.length; i++ )
	{
		var currency = g_CountryCurrencies[ countries[i] ];
		if ( currency != matchCurrency )
			currenciesMatch = false;
		
		AddCountryOverride( target, id, countries[i], cost, currency, isDiscount, false );
	}

	// set default text on explode (function sets styles)
	sourceCountries.value = '';
	sourceCost.value = '';
	SetDefaultText( sourceCountries, strDefaultExplodeCountryCodeText );
	SetDefaultText( sourceCost, strCostFieldText );

	DisplaySalePricesNotUpdated();

	if ( !currenciesMatch )
		alert( 'Exploded overrides, however some currencies didn\'t match.\nPlease verify all currencies & prices are correct!' );	
}

function GetInitialCosts()
{
	var initialCost = { base: g_InitialCostsBase, country: g_InitialCostsCountry, region: g_InitialCostsRegion };
	return initialCost;
}

function AddPctgDiscount( target, pctg, packageid )
{
	if ( !pctg )
		return false;
	
	var discounts = Array();
	var discountsCountry = new Object();
	var discountsRegion = new Object();
	
	var form = $('packageCostForm');
	// Iterate over form, looking for initial costs and initial country costs to discount
	for ( var i = 0; i < form.elements.length; i++ )
	{
		// see if initial cost
		var element = form.elements[i];
		var initialCostMatches = element.name.match( /initialCosts\[(\w+)\]/ ); 
		if ( initialCostMatches )
		{
			var currency = initialCostMatches[1];
			if ( element.value != '' && element.value != '-' )
				discounts[currency] = Math.round( element.value * ( pctg / 100 ) );			
			continue;
		}
		
		// see if country override
		var countryDiscountMatches = element.name.match( /initialCostsCountry\[(\d+)\]\[cost\]/ );
		if ( countryDiscountMatches && element.value )
		{
			var countryIndex = countryDiscountMatches[1];
			var countryCurrency = form.elements['initialCostsCountry[' + countryIndex + '][currency]' ].value;
			var country = form.elements['initialCostsCountry[' + countryIndex + '][country]' ].value;
			var discount = Math.round( element.value * ( pctg / 100 ) );	
			
			discountsCountry[country] = { value: discount, currency: countryCurrency };			
			continue;
		}
		
		// see if region override
		var regionDiscountMatches = element.name.match( /initialCostsRegion\[(\w+)\]\[value\]/ );
		if ( regionDiscountMatches && element.value )
		{
			var regionIndex = regionDiscountMatches[1];
			var regionCurrency = form.elements['initialCostsRegion[' + regionIndex + '][currency]' ].value;
			var discount = Math.round( element.value * ( pctg / 100 ) );
			
			discountsRegion[regionIndex] = { value: discount, currency: regionCurrency };			
			continue;
		}
	}
	
	var discount = new Object();
	discount['discount'] = { base: discounts, country: discountsCountry, region: discountsRegion };
	discount['discount_percent'] = pctg;

	AddDiscount( target, discount, packageid, true );
	return true;
}

function AddDiscount( target, discount, packageid, updateSummary )
{
	if ( discount == null )
		discount = new Object();

	if( discount['discount_id'] == null )
	{
		CreateAjaxRequest(	g_szBaseURL + "/packages/getnewdiscountid/" + packageid,
			{},
			function( results )
			{
				if ( results[ 'success' ] )
				{
					discount['discount_id'] = results[ 'discountid' ];
					return AddDiscount( target, discount, packageid, updateSummary );
				}
			}
		);
	}
	else
	{
		var key = 'discounts' + '[' + discount['discount_id'] + ']';

		CreateDiscount(target, key, discount, packageid );

		if (discount)
		{
			g_AllDiscounts[key] = discount;
			if (updateSummary)
			{
				UpdateSummaryDiscounts($('discountSummary'), 'discountSummary', g_RequiredCurrencies);
			}
		}
		return key;
	}
}

function AddRequiredPackage( target, id, initValue )
{
	CreateRequiredPackage( target, id + '[' + (++g_nextElementID) + ']', initValue );
}

function UpdateSummaryDiscounts()
{
	AddSummaryDiscounts( $( 'discountSummary' ), 'discountSummary', g_RequiredCurrencies );
}

function DisplaySalePricesNotUpdated()
{
	// We display the message only if we are displaying at least one discount
	if ( GetNumberOfSummaryDiscounts() > 0 )
	{
		$( 'salePricesNotUpdated' ).style.display = '';
		$( 'salePricesNotUpdated2' ).style.display = '';
	}
}

function GetNumberOfSummaryDiscounts()
{
	var countDiscounts = 0;
	for ( var i in g_AllDiscounts )
	{
		if ( g_AllDiscounts.hasOwnProperty( i ) == false )
		{
			continue;
		}
		var oneDiscount = g_AllDiscounts[ i ];
		if ( oneDiscount == null || oneDiscount == undefined )
		{
			continue;
		}

		if ( oneDiscount.discount == null || oneDiscount.discount == undefined )
		{
			continue;
		}
		++countDiscounts;
	}
	return countDiscounts;
}


function AddSummaryDiscounts( target, id, reqCurrencies )
{
	// let's count the number of real discounts (the code is a bit too conservative)
	var countDiscounts = GetNumberOfSummaryDiscounts();
	if ( countDiscounts < 2 )
	{
		$( 'discountSummaryBlock' ).style.display = 'none';
		return;		// We display the summary only if more than one discount
	}
	$( 'discountSummaryBlock' ).style.display = '';

	// What we need is to create a discount with all the discount summed (keeping the category)
	// Then we would display that in a specific element id

	var summedDiscounts = new Object();
	summedDiscounts.discount = new Object();
	summedDiscounts.discount.base = new Object();
	summedDiscounts.discount.region = new Object();
	summedDiscounts.discount.country = new Object();

	for ( var i in g_AllDiscounts )
	{
		if ( g_AllDiscounts.hasOwnProperty( i ) == false )
		{
			continue;
		}
		var oneDiscount = g_AllDiscounts[ i ];
		if ( oneDiscount == null || oneDiscount == undefined )
		{
			continue;
		}

		if ( oneDiscount.discount == null || oneDiscount.discount == undefined )
		{
			continue;
		}

		if( oneDiscount.end_date > 0 && oneDiscount.end_date < Date.now() / 1000 )
		{
			continue;
		}

		// Sum base discounts
		var baseDiscounts = oneDiscount.discount.base;
		if ( baseDiscounts )
		{
			for (key in reqCurrencies) 
			{
 				if ( baseDiscounts[ key ] != null )
				{
					if ( summedDiscounts.discount.base[ key ] )
					{
						summedDiscounts.discount.base[ key ] += parseInt( baseDiscounts[ key ] );
					}
					else
					{
						summedDiscounts.discount.base[ key ] = parseInt( baseDiscounts[ key ] );
					}
				}
			}
		}

		// Then sum region overrides
		var regionDiscounts = oneDiscount.discount.region;
		if ( regionDiscounts )
		{
			for ( var region in regionDiscounts )
			{
				var value = regionDiscounts[ region ].value;
				if ( value )
				{
					if ( summedDiscounts.discount.region[ region ] )
					{
						summedDiscounts.discount.region[ region ].value += parseInt( value );
					}
					else
					{
						summedDiscounts.discount.region[ region ] = new Object();
						summedDiscounts.discount.region[ region ].value = parseInt( value );
						var currency = regionDiscounts[ region ].currency;
						summedDiscounts.discount.region[ region ].currency = currency;
					}
				}
			}
		}

		// Finally sum country overrides
		var countryDiscounts = oneDiscount.discount.country;
		if ( countryDiscounts )
		{
			for ( var country in countryDiscounts )
			{
				var value = countryDiscounts[ country ].value;
				if ( value )
				{
					if ( summedDiscounts.discount.country[ country ] )
					{
						summedDiscounts.discount.country[ country ].value += parseInt( value );
					}
					else
					{
						summedDiscounts.discount.country[ country ] = new Object();
						summedDiscounts.discount.country[ country ].value = parseInt( value );
						var currency = countryDiscounts[ country ].currency;
						summedDiscounts.discount.country[ country ].currency = currency;
					}
				}
			}
		}
	}
	
	while ( target.hasChildNodes() )
	{
		target.removeChild( target.firstChild );
	}

	// Now let's add the discount to the UI
	var amt = summedDiscounts.discount;
	var strDiscountPrices = GetRequiredCurrencyBlock( id + '[discount]', g_RequiredCurrencies, amt['base'], true, true );
	var discountBlock = templ_DiscountsSummaryDiv.evaluate( { DiscountId: id, DiscountPrices: strDiscountPrices } );
	target.insert( discountBlock );		// Have to insert the result so $( id + '_RegionCost' ) works as expected.

	var regionDiv = $( id + '_RegionCost' );
	CreateRegionOverridesBlock( regionDiv, id + '[regionDiscounts]', g_RegionCurrencies, summedDiscounts.discount.region, true, true );
	
	// add countries
	var countryDiv = $( id + '_CountryOverrides');
	if ( summedDiscounts.discount.country != null )
	{
		for ( var i in summedDiscounts.discount.country )
		{
			AddCountryOverride( countryDiv, id + '[countryDiscounts]', i, summedDiscounts.discount.country[ i ].value, summedDiscounts.discount.country[ i ].currency, true, true );
		}
	}
}

//
// Ajax calls
//

function CreateAjaxRequest( requestUrl, hashParms, successClosure, requestMethod )
{
	if ( requestMethod == null ) requestMethod = 'get';
	new Ajax.Request( requestUrl,
		{
			requestHeaders: { 'Accept': 'application/json' },
			method: requestMethod,
			parameters: hashParms,
			onSuccess: function( transport )
			{
				var results = transport.responseJSON;
				if ( results )
				{
					successClosure( results );
				}
			}
		} );
}

function SetPackageCost( packageid, formName, submitName )
{
	// disable submit button if passed
	submitButton = $(submitName);
	if ( submitButton != null )
	{
		submitText = submitButton.value;
		submitButton.value = 'Working...';
		EnableElement( submitName, false );
	}
	
	CreateAjaxRequest( g_szBaseURL + '/packages/setpackagecost/' + packageid,
		$(formName).serialize(true),
		function( results )
		{
			$('resultsSuccessDiv').hide();
			$('resultsErrorDiv').hide();
			if ( results['success'] )
			{
				target = $('resultsSuccessDiv');
				target.innerHTML = "";
				AddText( target, "Package cost successfully updated!" );
				target.show();
				new Effect.Highlight(target, {startcolor: '#00adee', endcolor: '#003f57'});
			}
			else
			{
				target = $('resultsErrorDiv');
				target.innerHTML = "";
				// errors should be set. Dump all into a list
				AddText( target, "Update was not saved. The following errors were found:" );
				AddLineBreak( target );
				
				errorList = document.createElement( 'ul' );
				for ( i = 0; i < results['errors'].length; i++ )
				{
					listItem = document.createElement( 'li' );
					listItem.innerHTML = results['errors'][i];
					errorList.appendChild( listItem );
				}
				
				target.appendChild( errorList );			
				target.show();
				new Effect.Highlight(target, {startcolor: '#a81a28', endcolor: '#4a0b12'});	
			}
			
			// enable submit button if passed
			if ( submitButton != null )
			{
				submitButton.value = submitText;
				EnableElement( submitName, true );			
			}
			
		}, 'post' );
}

//
// Misc
//

function HideElement( target )
{
	var type = typeof( target );
	if ( type == 'string' )
		target = document.getElementById( target );
	
	target.style.display = 'none';
}

function ShowElement( target )
{
	var type = typeof( target );
	if ( type == 'string' )
		target = document.getElementById( target );
	
	target.style.display = 'block';
}

function EnableElement( name, enabled )
{
	document.getElementById( name ).disabled = !enabled;
}

// checks all boxes in a form. if callback is set, calls function passing each checkbox which is checked
function CheckAllBoxes( form, check, callback )
{
	var elements = $(form).getElementsByTagName( 'INPUT' );
	if ( elements == null )
		return;
	
	for (var i = 0; i < elements.length; i++)
	{  			
		if ( elements[i].type == 'checkbox' && elements[i].checked != check )
		{
			elements[i].checked = check;
			
			if ( callback != null )
				callback( elements[i] );						
		}
	}
}

// hightlights row which contains specified element
function HighlightCheckboxRow( checkbox )
{
	var clrBackground = '#262626';
	var clrHighlight = '#00658e';
	
	// find parent row. Prototype's .up('TR') takes a long time when used over 700+ rows, so do this ourselves
	var row = checkbox.parentNode;
	while ( row != null )
	{
		if ( row.nodeName == 'TR' )
			break;
			
		row = row.parentNode;
	}
	
	if ( row == null )
		return;	
		
	if ( $(checkbox).checked )
	{
		new Effect.Highlight( $(row), {startcolor: clrBackground, endcolor: clrHighlight, restorecolor: clrHighlight, duration: 0.3 } );
	}
	else
	{
		new Effect.Highlight( $(row), {startcolor: clrHighlight, endcolor: clrBackground, restorecolor: clrBackground, duration: 0.3 } );
	}
}

// hightlights row which contains specified element
function HighlightCheckboxParent( checkbox )
{
	var clrBackground = '#262626';
	var clrHighlight = '#00658e';

	var parent = checkbox.parentNode;
	if ( parent == null )
		return;

	if ( $(checkbox).checked )
	{
		new Effect.Highlight( $(parent), {startcolor: clrBackground, endcolor: clrHighlight, restorecolor: clrHighlight, duration: 0.3 } );
	}
	else
	{
		new Effect.Highlight( $(parent), {startcolor: clrHighlight, endcolor: clrBackground, restorecolor: clrBackground, duration: 0.3 } );
	}
}


//
// many of our AJAX actions send back JSON with two items in it:
// - message: text to put into an element
// - success: whether it succeeded
// this callback writes the text into the specified element, and applies
// a CSS class based on the success code.
//
function StandardCallback( results, elementName )
{
	elt = $(elementName);

	// check type of elt
	if ( typeof( elt ) == "object" )
	{
		// poke in results
		elt.innerHTML = results[ 'message' ];

		// set style based on returned success code
		elt.className = results[ 'success' ] ? "outputSuccess" : "outputFailure";
		
		return true;
	}
	else
	{
		return false;
	}
}


function CancelEvent( event )
{
	if ( !event ) var event = window.event;
	
	event.cancelBubble = true;
	if ( event.stopPropagation ) event.stopPropagation();
}

// Functions for Tooltip
packages.ToolTip_FindPos = function ToolTip_FindPos( el )
{
	// Get in absolute position
	var _x = 0;
	var _y = 0;
	while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) )
	{
		_x += el.offsetLeft;
		_y += el.offsetTop;
		el = el.offsetParent;
	}
	return { y: _y, x: _x };
};

packages.Decode = function Decode( text )
{
	text = decodeURIComponent( text );
	text = UnEscapeSQL( text );
	return text;
};

packages.Encode = function Encode( text )
{
	text = EscapeSQL( text );
	text = encodeURIComponent( text );
	return text;
};

packages.UnEscapeSQL = function UnEscapeSQL( text )
{
	// Revert the escape that has been introduced in PHP for the SQL layer
	// Javascript replace doesn't replace all occurences but only the first one, we have to use a RegEx for the multiple search and replace. !?!
	// We use the /pattern/modifier pattern instead of RegExp( "pattern", "modifier" )
	// to avoid double escaping and making the code more readable. ?!?
	// 'g' for global search and replace. I miss C# :).
	text = text.replace( /\\\\/g, "\\" );
	text = text.replace( /\\0/g, "\0" );
	text = text.replace( /\\n/g, "\n" );
	text = text.replace( /\\r/g, "\r" );
	text = text.replace( /\\Z/g, "\x1a" );
	// ' are escaped in the SQL side by using ''. SQL interprets that as '
	//text = text.replace( /''/g, "'" );
	text = text.replace( /""/g, '"' );
	return text;
};

packages.EscapeSQL = function EscapeSQL( text )
{
	text = text.replace( /\\/g, "\\\\" );
	text = text.replace( /\0/g, "\\0" );
	text = text.replace( /\n/g, "\\n" );
	text = text.replace( /\r/g, "\\r" );
	text = text.replace( /\x1a/g, "\\Z" );
	// ' are escaped in the SQL side by using ''. SQL interprets that as '
	//text = text.replace( /''/g, "'" );
	text = text.replace( /"/g, '""' );
	return text;
};

packages.Ln2Br = function Ln2Br( text )
{
	return text.replace( /\n/g, "<br/>" );
};

packages.EscapeHTML = function EscapeHTML( text )
{
	return text.replace( /&/g, "&amp;" )
				.replace( /</g, "&lt;" )
				.replace( />/g, "&gt;" )
				.replace( /"/g, "&quot;" )
				.replace( /'/g, "&#039;" );
};


