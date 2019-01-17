

	// Code to run a soft check on VAT IDs

	// Keep this list in sync with $rgVatIdFormats in shared\config\config_country_list.php
	var g_rgVatIdCountries = {
		'AT': { 'fmt':'U99999999',		'min':'9',  'max':'9' },		// Austria
		'BE': { 'fmt':'0999999999',		'min':'10', 'max':'10' },		// Belgium
		'BG': { 'fmt':'999999999',		'min':'9',  'max':'10' },		// Bulgaria
		'HR': { 'fmt':'99999999999',	'min':'11', 'max':'11' },		// Croatia
		'CY': { 'fmt':'99999999L', 		'min':'9',  'max':'9' },		// Cyprus
		'CZ': { 'fmt':'999999999',		'min':'8',  'max':'10' },		// Czech Republic
		'DK': { 'fmt':'99999999',		'min':'8',  'max':'8' },		// Denmark
		'EE': { 'fmt':'999999999', 		'min':'9',  'max':'9' },		// Estonia
		'FI': { 'fmt':'99999999', 		'min':'8',  'max':'8' },		// Finland
		'FR': { 'fmt':'XX999999999',	'min':'11', 'max':'11' },		// France
		'DE': { 'fmt':'999999999', 		'min':'9',  'max':'11' },		// Germany
		'GR': { 'fmt':'999999999', 		'min':'9',  'max':'9' },		// Greece
		'HU': { 'fmt':'99999999', 		'min':'8',  'max':'8' },		// Hungary
		'IE': { 'fmt':'9999999WI', 		'min':'8',  'max':'9' },		// Ireland
		'IT': { 'fmt':'99999999999',	'min':'11', 'max':'11' },		// Italy
		'LV': { 'fmt':'99999999999', 	'min':'11', 'max':'11' },		// Latvia
		'LT': { 'fmt':'999999999', 		'min':'9',  'max':'12' },		// Lithuania
		'LU': { 'fmt':'99999999', 		'min':'8',  'max':'8' },		// Luxembourg
		'MT': { 'fmt':'99999999', 		'min':'8',  'max':'8' },		// Malta
		'NL': { 'fmt':'999999999B99', 	'min':'12', 'max':'12' },		// Netherlands
		'PL': { 'fmt':'9999999999', 	'min':'10', 'max':'10' },		// Poland
		'PT': { 'fmt':'999999999', 		'min':'9',  'max':'9' },		// Portugal
		'RO': { 'fmt':'999999999', 		'min':'2',	'max':'10' },		// Romania
		'SK': { 'fmt':'9999999999', 	'min':'10', 'max':'10' },		// Slovakia
		'SI': { 'fmt':'99999999', 		'min':'8',  'max':'8' },		// Slovenia
		'ES': { 'fmt':'X9999999X', 		'min':'9',  'max':'9' },		// Spain
		'SE': { 'fmt':'999999999999', 	'min':'12', 'max':'12' },		// Sweden
		'GB': { 'fmt':'9999999999', 	'min':'9',  'max':'9' },		// United Kingdom

		// Non-EU countries
		'AU': { 'fmt':'99999999999', 	'min':'11', 'max':'12' },		// Australia
		'BY': { 'fmt':'999999999', 		'min':'9',  'max':'9' },		// Belarus
		'IS': { 'fmt':'999999', 		'min':'5',  'max':'7' },		// Iceland
		'IN': { 'fmt':'9999XXX99999XX9','min':'12', 'max':'15' },		// India
		'JP': { 'fmt':'9999999999999',	'min':'13', 'max':'13' },		// Japan
		'NZ': { 'fmt':'99999999', 		'min':'8',	'max':'9' },		// New Zealand
		'NO': { 'fmt':'999999999MVA', 	'min':'12', 'max':'12' },		// Norway
		'RU': { 'fmt':'9999999999', 	'min':'10', 'max':'12' },		// Russia
		'SA': { 'fmt':'999999999999999','min':'15', 'max':'15' },		// Saudi Arabia
		'RS': { 'fmt':'999999999', 		'min':'9',  'max':'9' },		// Serbia
		'ZA': { 'fmt':'9999999999', 	'min':'10', 'max':'11' },		// South Africa
		'KR': { 'fmt':'9999999999', 	'min':'10', 'max':'10' },		// South Korea
		'CH': { 'fmt':'999999999TVA', 	'min':'12', 'max':'13' },		// Switzerland
		'TW': { 'fmt':'99999999', 		'min':'8',  'max':'8' },		// Taiwan
		'TR': { 'fmt':'999999999', 		'min':'10', 'max':'10' },		// Turkey
		'AE': { 'fmt':'999999999999999','min':'15', 'max':'15' },		// United Arab Emirates
		'US': { 'fmt':'999999999',		'min':'9',  'max':'9' },		// United States
	};

	var gValidFieldNumericRegex = /^[0-9]+$/
	var gValidFieldAlphaRegex = /^[A-Za-z]+$/
	var gValidFieldAlphaNumericRegex = /^[A-Za-z0-9]+$/

	function is_type( str, regex )
	{
		return regex.test( str );
	}

	function VatIDSoftCheck_BIsProperlyFormatted( strCountryCode, strVatID )
	{
		if ( !( strCountryCode in g_rgVatIdCountries ) )
			return false;

		// Clean up the string for checks
		strVatID = strVatID.toUpperCase();
		strVatID = strVatID.replace( /[^a-zA-Z0-9]/g, '' );		// Strip out anything other than letters or numbers

		// If the first two characters are the country code, strip those
		if ( strVatID.substr( 0, 2 ) == strCountryCode )
		{
			strVatID = strVatID.substr( 2 );
		}

		// Basic length validation
		var len = strVatID.length;
		if ( len < g_rgVatIdCountries[strCountryCode]['min'] || len > g_rgVatIdCountries[strCountryCode]['max'] )
			return false;

		var bValid = false;
		switch( strCountryCode )
		{
			default:
				// Most countries require just a numeric check
				bValid = is_type( strVatID, gValidFieldNumericRegex );
				break;

			case 'AT':
				// 9 characters, the first character is always a ‘U’
				bValid = ( strVatID.substr( 0, 1 ) == 'U' && is_type( strVatID.substr( 1 ), gValidFieldNumericRegex ) );
				break;
			case 'CY':
				// 9 characters, the last character must always be a letter
				bValid = ( is_type( strVatID.substr( 0, 8 ), gValidFieldNumericRegex ) && is_type( strVatID.substr( 8, 1 ), gValidFieldAlphaRegex ) );
				break;
			case 'FR':
				// 11 characters, may include alphabetical characters (any except O or I) as first or second or first and second characters
				bValid = ( is_type( strVatID.substr( 0, 2 ), gValidFieldAlphaNumericRegex ) && is_type( strVatID.substr( 2 ), gValidFieldNumericRegex ) );
				break;
			case 'IE':
				// 8 or 9 characters, includes one or two alphabetical characters (last, or second to last, or last 2)
				bValid = ( is_type( strVatID.substr( 0, len-2 ), gValidFieldNumericRegex ) && is_type( strVatID.substr( len-2 ), gValidFieldAlphaRegex ) );
				break;
			case 'IN':
				// Not sure what the actual format is so only do length checks
				bValid = true;
				break;
			case 'LT':
				// 9 or 12 characters
				bValid = is_type( strVatID, gValidFieldNumericRegex ) && ( len == g_rgVatIdCountries[strCountryCode]['min'] || len == g_rgVatIdCountries[strCountryCode]['max'] );
				break;
			case 'NL':
				// 12 characters, the 10th character is always B
				bValid = ( is_type( strVatID.substr( 0, 9 ), gValidFieldNumericRegex ) && strVatID.substr( 9, 1 ) == 'B' && is_type( strVatID.substr( 10 ), gValidFieldNumericRegex ) );
				break;
			case 'NO':
				// 9 digits and the letters 'MVA' to indicate VAT registration
				bValid = ( is_type( strVatID.substr( 0, 9 ), gValidFieldNumericRegex ) && strVatID.substr( 9, 3 ) == 'MVA' );
				break;
			case 'ES':
				// 9 characters, includes 1 or 2 alphabetical characters (first or last or first and last)
				bValid = ( is_type( strVatID.substr( 0, 1 ), gValidFieldAlphaNumericRegex ) && is_type( strVatID.substr( 1, 7 ), gValidFieldNumericRegex ) && is_type( strVatID.substr( 8, 1 ), gValidFieldAlphaNumericRegex ) );
				break;
			case 'CH':
				// 9 numbers plus MWST/TVA/IVA
				var sfx = strVatID.substr( 9 );
				bValid = ( is_type( strVatID.substr( 0, 9 ), gValidFieldNumericRegex ) && ( sfx == 'MWST' || sfx == 'TVA' || sfx == 'IVA' ) );
				break;
		}

		return bValid;
	}


