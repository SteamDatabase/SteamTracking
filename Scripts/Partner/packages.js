//
// Functions used to dynamically create the layout for editing cost
//

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

function IsCurrencyWhole( currency )
{
	// Currently RUB is the only whole unit currency. TODO: Improve this so we can receive the list from the back-end.
	return ( currency == 'RUB' );
}

function GetFinalPrice( finalPrice, currency )
{
	if ( IsCurrencyWhole( currency ) || isNaN( finalPrice ) )
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
	$( id + '[minute]' ).value = now.getMinutes();
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
	var initDate = new Date( initValue * 1000 );
	initDate = new Date( initDate.getTime() + (initDate.getTimezoneOffset() * 60000) + (g_pacificTimeOffset * 1000) );
	
	var dateBlock = templ_DateControl.evaluate( { ControlId: id } );
	target.insert( dateBlock );
		
	// year
	var yearSelect = $( id + '[year]' );
	var now = new Date();
	var fullYear = Math.min( initDate.getFullYear(), now.getFullYear() );
	for ( var i = fullYear; i < (now.getFullYear() + 4); i++ )
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
		+ '	<div class="boxlist_item" id="#{DiscountId}_discountDiv">'
		+ '		<div class="boxlist_title">'
		+ '			<div class="boxlist_controls">'
		+ '				<input style="float: right;" value="Delete Discount" type="submit" onclick="OnClickDeleteDiscount( \'#{DiscountId}\' ); return false;">'
		+ '			</div>'
		+ '			<div style="clear: both;"></div>'
		+ '		</div>'
		+ '		<div class="boxlist_content">'
		+ '			<div class="formrow">'
		+ '				<div class="formlabel">Name: </div>'
		+ '				<div class="formdata"><input name="#{DiscountId}[name]" value