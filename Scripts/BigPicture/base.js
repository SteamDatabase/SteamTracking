
/*!
 * jquery.base64.js 0.1 - https://github.com/yckart/jquery.base64.js
 * Makes Base64 en & -decoding simpler as it is.
 *
 * Based upon: https://gist.github.com/Yaffle/1284012
 *
 * Copyright (c) 2012 Yannick Albert (http://yckart.com)
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
 * 2013/02/10
 **/
;(function($) {

    var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        a256 = '',
        r64 = [256],
        r256 = [256],
        i = 0;

    var UTF8 = {

        /**
         * Encode multi-byte Unicode string into utf-8 multiple single-byte characters
         * (BMP / basic multilingual plane only)
         *
         * Chars in range U+0080 - U+07FF are encoded in 2 chars, U+0800 - U+FFFF in 3 chars
         *
         * @param {String} strUni Unicode string to be encoded as UTF-8
         * @returns {String} encoded string
         */
        encode: function(strUni) {
            // use regular expressions & String.replace callback function for better efficiency
            // than procedural approaches
            var strUtf = strUni.replace(/[\u0080-\u07ff]/g, // U+0080 - U+07FF => 2 bytes 110yyyyy, 10zzzzzz
            function(c) {
                var cc = c.charCodeAt(0);
                return String.fromCharCode(0xc0 | cc >> 6, 0x80 | cc & 0x3f);
            })
            .replace(/[\u0800-\uffff]/g, // U+0800 - U+FFFF => 3 bytes 1110xxxx, 10yyyyyy, 10zzzzzz
            function(c) {
                var cc = c.charCodeAt(0);
                return String.fromCharCode(0xe0 | cc >> 12, 0x80 | cc >> 6 & 0x3F, 0x80 | cc & 0x3f);
            });
            return strUtf;
        },

        /**
         * Decode utf-8 encoded string back into multi-byte Unicode characters
         *
         * @param {String} strUtf UTF-8 string to be decoded back to Unicode
         * @returns {String} decoded string
         */
        decode: function(strUtf) {
            // note: decode 3-byte chars first as decoded 2-byte strings could appear to be 3-byte char!
            var strUni = strUtf.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g, // 3-byte chars
            function(c) { // (note parentheses for precence)
                var cc = ((c.charCodeAt(0) & 0x0f) << 12) | ((c.charCodeAt(1) & 0x3f) << 6) | (c.charCodeAt(2) & 0x3f);
                return String.fromCharCode(cc);
            })
            .replace(/[\u00c0-\u00df][\u0080-\u00bf]/g, // 2-byte chars
            function(c) { // (note parentheses for precence)
                var cc = (c.charCodeAt(0) & 0x1f) << 6 | c.charCodeAt(1) & 0x3f;
                return String.fromCharCode(cc);
            });
            return strUni;
        }
    };

    while(i < 256) {
        var c = String.fromCharCode(i);
        a256 += c;
        r256[i] = i;
        r64[i] = b64.indexOf(c);
        ++i;
    }

    function code(s, discard, alpha, beta, w1, w2) {
        s = String(s);
        var buffer = 0,
            i = 0,
            length = s.length,
            result = '',
            bitsInBuffer = 0;

        while(i < length) {
            var c = s.charCodeAt(i);
            c = c < 256 ? alpha[c] : -1;

            buffer = (buffer << w1) + c;
            bitsInBuffer += w1;

            while(bitsInBuffer >= w2) {
                bitsInBuffer -= w2;
                var tmp = buffer >> bitsInBuffer;
                result += beta.charAt(tmp);
                buffer ^= tmp << bitsInBuffer;
            }
            ++i;
        }
        if(!discard && bitsInBuffer > 0) result += beta.charAt(buffer << (w2 - bitsInBuffer));
        return result;
    }

    var Plugin = $.base64 = function(dir, input, encode) {
            return input ? Plugin[dir](input, encode) : dir ? null : this;
        };


    Plugin.btoa = Plugin.encode = function(plain, utf8encode) {
        plain = Plugin.raw === false || Plugin.utf8encode || utf8encode ? UTF8.encode(plain) : plain;
        plain = code(plain, false, r256, b64, 8, 6);
        return plain + '===='.slice((plain.length % 4) || 4);
    };

    Plugin.atob = Plugin.decode = function(coded, utf8decode) {
        coded = String(coded).split('=');
        var i = coded.length;
        do {--i;
            coded[i] = code(coded[i], true, r64, a256, 6, 8);
        } while (i > 0);
        coded = coded.join('');
        return Plugin.raw === false || Plugin.utf8decode || utf8decode ? UTF8.decode(coded) : coded;
    };
}(panorama));

$.html_entity_decode = function( string ) {
	string = string.replace(new RegExp("&(\\w+);", "g"), function( p1, p2 ) 
	{ 
		return $.entity_table[p2] != undefined ? String.fromCharCode( $.entity_table[p2] ) : p1;
	} );
	string = string.replace(new RegExp("&#(x?)(\\d+);", "g"), function( p1, p2 ) { return String.fromCharCode(((p1 == 'x') ? parseInt(p2, 16) : p2)); } );
	string = string.replace(new RegExp('&amp;', "g"), String.fromCharCode(38));
	return string;
}

$.entity_table = {
	quot: 34,     // Quotation mark. Not required
//	amp:  38,        // Ampersand. Applied before everything else in the application
	lt:  60,     // Less-than sign
	gt:  62,     // Greater-than sign
	nbsp:  160,      // Non-breaking space
	iexcl:  161,     // Inverted exclamation mark
	cent:  162,      // Cent sign
	pound:  163,     // Pound sign
	curren:  164,    // Currency sign
	yen:  165,       // Yen sign
	brvbar:  166,    // Broken vertical bar
	sect:  167,      // Section sign
	uml:  168,       // Diaeresis
	copy:  169,      // Copyright sign
	ordf:  170,      // Feminine ordinal indicator
	laquo:  171,     // Left-pointing double angle quotation mark
	not:  172,       // Not sign
	shy:  173,       // Soft hyphen
	reg:  174,       // Registered sign
	macr:  175,      // Macron
	deg:  176,       // Degree sign
	plusmn:  177,    // Plus-minus sign
	sup2:  178,      // Superscript two
	sup3:  179,      // Superscript three
	acute:  180,     // Acute accent
	micro:  181,     // Micro sign
	para:  182,      // Pilcrow sign
	middot:  183,    // Middle dot
	cedil:  184,     // Cedilla
	sup1:  185,      // Superscript one
	ordm:  186,      // Masculine ordinal indicator
	raquo:  187,     // Right-pointing double angle quotation mark
	frac14:  188,    // Vulgar fraction one-quarter
	frac12:  189,    // Vulgar fraction one-half
	frac34:  190,    // Vulgar fraction three-quarters
	iquest:  191,    // Inverted question mark
	Agrave:  192,    // A with grave
	Aacute:  193,    // A with acute
	Acirc:  194,     // A with circumflex
	Atilde:  195,    // A with tilde
	Auml:  196,      // A with diaeresis
	Aring:  197,     // A with ring above
	AElig:  198,     // AE
	Ccedil:  199,    // C with cedilla
	Egrave:  200,    // E with grave
	Eacute:  201,    // E with acute
	Ecirc:  202,     // E with circumflex
	Euml:  203,      // E with diaeresis
	Igrave:  204,    // I with grave
	Iacute:  205,    // I with acute
	Icirc:  206,     // I with circumflex
	Iuml:  207,      // I with diaeresis
	ETH:  208,       // Eth
	Ntilde:  209,    // N with tilde
	Ograve:  210,    // O with grave
	Oacute:  211,    // O with acute
	Ocirc:  212,     // O with circumflex
	Otilde:  213,    // O with tilde
	Ouml:  214,      // O with diaeresis
	times:  215,     // Multiplication sign
	Oslash:  216,    // O with stroke
	Ugrave:  217,    // U with grave
	Uacute:  218,    // U with acute
	Ucirc:  219,     // U with circumflex
	Uuml:  220,      // U with diaeresis
	Yacute:  221,    // Y with acute
	THORN:  222,     // Thorn
	szlig:  223,     // Sharp s. Also known as ess-zed
	agrave:  224,    // a with grave
	aacute:  225,    // a with acute
	acirc:  226,     // a with circumflex
	atilde:  227,    // a with tilde
	auml:  228,      // a with diaeresis
	aring:  229,     // a with ring above
	aelig:  230,     // ae. Also known as ligature ae
	ccedil:  231,    // c with cedilla
	egrave:  232,    // e with grave
	eacute:  233,    // e with acute
	ecirc:  234,     // e with circumflex
	euml:  235,      // e with diaeresis
	igrave:  236,    // i with grave
	iacute:  237,    // i with acute
	icirc:  238,     // i with circumflex
	iuml:  239,      // i with diaeresis
	eth:  240,       // eth
	ntilde:  241,    // n with tilde
	ograve:  242,    // o with grave
	oacute:  243,    // o with acute
	ocirc:  244,     // o with circumflex
	otilde:  245,    // o with tilde
	ouml:  246,      // o with diaeresis
	divide:  247,    // Division sign
	oslash:  248,    // o with stroke. Also known as o with slash
	ugrave:  249,    // u with grave
	uacute:  250,    // u with acute
	ucirc:  251,     // u with circumflex
	uuml:  252,      // u with diaeresis
	yacute:  253,    // y with acute
	thorn:  254,     // thorn
	yuml:  255,      // y with diaeresis
	OElig:  338,     // Latin capital ligature OE
	oelig:  339,     // Latin small ligature oe
	Scaron:  352,    // Latin capital letter S with caron
	scaron:  353,    // Latin small letter s with caron
	Yuml:  376,      // Latin capital letter Y with diaeresis
	fnof:  402,      // Latin small f with hook, function, florin
	circ:  710,      // Modifier letter circumflex accent
	tilde:  732,     // Small tilde
	Alpha:  913,     // Alpha
	Beta:  914,      // Beta
	Gamma:  915,     // Gamma
	Delta:  916,     // Delta
	Epsilon:  917,   // Epsilon
	Zeta:  918,      // Zeta
	Eta:  919,       // Eta
	Theta:  920,     // Theta
	Iota:  921,      // Iota
	Kappa:  922,     // Kappa
	Lambda:  923,    // Lambda
	Mu:  924,        // Mu
	Nu:  925,        // Nu
	Xi:  926,        // Xi
	Omicron:  927,   // Omicron
	Pi:  928,        // Pi
	Rho:  929,       // Rho
	Sigma:  931,     // Sigma
	Tau:  932,       // Tau
	Upsilon:  933,   // Upsilon
	Phi:  934,       // Phi
	Chi:  935,       // Chi
	Psi:  936,       // Psi
	Omega:  937,     // Omega
	alpha:  945,     // alpha
	beta:  946,      // beta
	gamma:  947,     // gamma
	delta:  948,     // delta
	epsilon:  949,   // epsilon
	zeta:  950,      // zeta
	eta:  951,       // eta
	theta:  952,     // theta
	iota:  953,      // iota
	kappa:  954,     // kappa
	lambda:  955,    // lambda
	mu:  956,        // mu
	nu:  957,        // nu
	xi:  958,        // xi
	omicron:  959,   // omicron
	pi:  960,        // pi
	rho:  961,       // rho
	sigmaf:  962,    // sigmaf
	sigma:  963,     // sigma
	tau:  964,       // tau
	upsilon:  965,   // upsilon
	phi:  966,       // phi
	chi:  967,       // chi
	psi:  968,       // psi
	omega:  969,     // omega
	thetasym:  977,  // Theta symbol
	upsih:  978,     // Greek upsilon with hook symbol
	piv:  982,       // Pi symbol
	ensp:  8194,     // En space
	emsp:  8195,     // Em space
	thinsp:  8201,   // Thin space
	zwnj:  8204,     // Zero width non-joiner
	zwj:  8205,      // Zero width joiner
	lrm:  8206,      // Left-to-right mark
	rlm:  8207,      // Right-to-left mark
	ndash:  8211,    // En dash
	mdash:  8212,    // Em dash
	lsquo:  8216,    // Left single quotation mark
	rsquo:  8217,    // Right single quotation mark
	sbquo:  8218,    // Single low-9 quotation mark
	ldquo:  8220,    // Left double quotation mark
	rdquo:  8221,    // Right double quotation mark
	bdquo:  8222,    // Double low-9 quotation mark
	dagger:  8224,   // Dagger
	Dagger:  8225,   // Double dagger
	bull:  8226,     // Bullet
	hellip:  8230,   // Horizontal ellipsis
	permil:  8240,   // Per mille sign
	prime:  8242,    // Prime
	Prime:  8243,    // Double Prime
	lsaquo:  8249,   // Single left-pointing angle quotation
	rsaquo:  8250,   // Single right-pointing angle quotation
	oline:  8254,    // Overline
	frasl:  8260,    // Fraction Slash
	euro:  8364,     // Euro sign
	weierp:  8472,   // Script capital
	image:  8465,    // Blackletter capital I
	real:  8476,     // Blackletter capital R
	trade:  8482,    // Trade mark sign
	alefsym:  8501,  // Alef symbol
	larr:  8592,     // Leftward arrow
	uarr:  8593,     // Upward arrow
	rarr:  8594,     // Rightward arrow
	darr:  8595,     // Downward arrow
	harr:  8596,     // Left right arrow
	crarr:  8629,    // Downward arrow with corner leftward. Also known as carriage return
	lArr:  8656,     // Leftward double arrow. ISO 10646 does not say that lArr is the same as the 'is implied by' arrow but also does not have any other character for that function. So ? lArr can be used for 'is implied by' as ISOtech suggests
	uArr:  8657,     // Upward double arrow
	rArr:  8658,     // Rightward double arrow. ISO 10646 does not say this is the 'implies' character but does not have another character with this function so ? rArr can be used for 'implies' as ISOtech suggests
	dArr:  8659,     // Downward double arrow
	hArr:  8660,     // Left-right double arrow
	// Mathematical Operators
	forall:  8704,   // For all
	part:  8706,     // Partial differential
	exist:  8707,    // There exists
	empty:  8709,    // Empty set. Also known as null set and diameter
	nabla:  8711,    // Nabla. Also known as backward difference
	isin:  8712,     // Element of
	notin:  8713,    // Not an element of
	ni:  8715,       // Contains as member
	prod:  8719,     // N-ary product. Also known as product sign. Prod is not the same character as U+03A0 'greek capital letter pi' though the same glyph might be used for both
	sum:  8721,      // N-ary summation. Sum is not the same character as U+03A3 'greek capital letter sigma' though the same glyph might be used for both
	minus:  8722,    // Minus sign
	lowast:  8727,   // Asterisk operator
	radic:  8730,    // Square root. Also known as radical sign
	prop:  8733,     // Proportional to
	infin:  8734,    // Infinity
	ang:  8736,      // Angle
	and:  8743,      // Logical and. Also known as wedge
	or:  8744,       // Logical or. Also known as vee
	cap:  8745,      // Intersection. Also known as cap
	cup:  8746,      // Union. Also known as cup
	int:  8747,      // Integral
	there4:  8756,   // Therefore
	sim:  8764,      // tilde operator. Also known as varies with and similar to. The tilde operator is not the same character as the tilde, U+007E, although the same glyph might be used to represent both
	cong:  8773,     // Approximately equal to
	asymp:  8776,    // Almost equal to. Also known as asymptotic to
	ne:  8800,       // Not equal to
	equiv:  8801,    // Identical to
	le:  8804,       // Less-than or equal to
	ge:  8805,       // Greater-than or equal to
	sub:  8834,      // Subset of
	sup:  8835,      // Superset of. Note that nsup, 'not a superset of, U+2283' is not covered by the Symbol font encoding and is not included.
	nsub:  8836,     // Not a subset of
	sube:  8838,     // Subset of or equal to
	supe:  8839,     // Superset of or equal to
	oplus:  8853,    // Circled plus. Also known as direct sum
	otimes:  8855,   // Circled times. Also known as vector product
	perp:  8869,     // Up tack. Also known as orthogonal to and perpendicular
	sdot:  8901,     // Dot operator. The dot operator is not the same character as U+00B7 middle dot
	// Miscellaneous Technical
	lceil:  8968,    // Left ceiling. Also known as an APL upstile
	rceil:  8969,    // Right ceiling
	lfloor:  8970,   // left floor. Also known as APL downstile
	rfloor:  8971,   // Right floor
	lang:  9001,     // Left-pointing angle bracket. Also known as bra. Lang is not the same character as U+003C 'less than'or U+2039 'single left-pointing angle quotation mark'
	rang:  9002,     // Right-pointing angle bracket. Also known as ket. Rang is not the same character as U+003E 'greater than' or U+203A 'single right-pointing angle quotation mark'
	// Geometric Shapes
	loz:  9674,      // Lozenge
	// Miscellaneous Symbols
	spades:  9824,   // Black (filled) spade suit
	clubs:  9827,    // Black (filled) club suit. Also known as shamrock
	hearts:  9829,   // Black (filled) heart suit. Also known as shamrock
	diams:  9830   // Black (filled) diamond suit
};

// included data: strCode, eCurrencyCode, strSymbol, bSymbolIsPrefix, bWholeUnitsOnly
$.currency_data = {"USD":{"strCode":"USD","eCurrencyCode":1,"strSymbol":"$","bSymbolIsPrefix":true,"bWholeUnitsOnly":false},"GBP":{"strCode":"GBP","eCurrencyCode":2,"strSymbol":"\u00a3","bSymbolIsPrefix":true,"bWholeUnitsOnly":false},"EUR":{"strCode":"EUR","eCurrencyCode":3,"strSymbol":"\u20ac","bSymbolIsPrefix":false,"bWholeUnitsOnly":false},"CHF":{"strCode":"CHF","eCurrencyCode":4,"strSymbol":"Fr.","bSymbolIsPrefix":false,"bWholeUnitsOnly":false},"RUB":{"strCode":"RUB","eCurrencyCode":5,"strSymbol":"p\u0443\u0431.","bSymbolIsPrefix":false,"bWholeUnitsOnly":true},"BRL":{"strCode":"BRL","eCurrencyCode":7,"strSymbol":"R$","bSymbolIsPrefix":true,"bWholeUnitsOnly":false},"JPY":{"strCode":"JPY","eCurrencyCode":8,"strSymbol":"\u00a5","bSymbolIsPrefix":true,"bWholeUnitsOnly":true},"NOK":{"strCode":"NOK","eCurrencyCode":9,"strSymbol":"kr","bSymbolIsPrefix":false,"bWholeUnitsOnly":false},"IDR":{"strCode":"IDR","eCurrencyCode":10,"strSymbol":"Rp","bSymbolIsPrefix":true,"bWholeUnitsOnly":true},"MYR":{"strCode":"MYR","eCurrencyCode":11,"strSymbol":"RM","bSymbolIsPrefix":true,"bWholeUnitsOnly":false},"PHP":{"strCode":"PHP","eCurrencyCode":12,"strSymbol":"P","bSymbolIsPrefix":true,"bWholeUnitsOnly":false},"SGD":{"strCode":"SGD","eCurrencyCode":13,"strSymbol":"S$","bSymbolIsPrefix":true,"bWholeUnitsOnly":false},"THB":{"strCode":"THB","eCurrencyCode":14,"strSymbol":"\u0e3f","bSymbolIsPrefix":true,"bWholeUnitsOnly":false},"VND":{"strCode":"VND","eCurrencyCode":15,"strSymbol":"\u20ab","bSymbolIsPrefix":false,"bWholeUnitsOnly":true},"KRW":{"strCode":"KRW","eCurrencyCode":16,"strSymbol":"\u20a9","bSymbolIsPrefix":true,"bWholeUnitsOnly":true},"TRY":{"strCode":"TRY","eCurrencyCode":17,"strSymbol":"TL","bSymbolIsPrefix":false,"bWholeUnitsOnly":false},"UAH":{"strCode":"UAH","eCurrencyCode":18,"strSymbol":"\u20b4","bSymbolIsPrefix":false,"bWholeUnitsOnly":true},"MXN":{"strCode":"MXN","eCurrencyCode":19,"strSymbol":"Mex$","bSymbolIsPrefix":true,"bWholeUnitsOnly":false},"CAD":{"strCode":"CAD","eCurrencyCode":20,"strSymbol":"CDN$","bSymbolIsPrefix":true,"bWholeUnitsOnly":false},"AUD":{"strCode":"AUD","eCurrencyCode":21,"strSymbol":"A$","bSymbolIsPrefix":true,"bWholeUnitsOnly":false},"NZD":{"strCode":"NZD","eCurrencyCode":22,"strSymbol":"NZ$","bSymbolIsPrefix":true,"bWholeUnitsOnly":false},"PLN":{"strCode":"PLN","eCurrencyCode":6,"strSymbol":"z\u0142","bSymbolIsPrefix":false,"bWholeUnitsOnly":false},"CNY":{"strCode":"CNY","eCurrencyCode":23,"strSymbol":"\u00a5","bSymbolIsPrefix":true,"bWholeUnitsOnly":true},"INR":{"strCode":"INR","eCurrencyCode":24,"strSymbol":"\u20b9","bSymbolIsPrefix":true,"bWholeUnitsOnly":true},"CLP":{"strCode":"CLP","eCurrencyCode":25,"strSymbol":"CLP$","bSymbolIsPrefix":true,"bWholeUnitsOnly":true},"PEN":{"strCode":"PEN","eCurrencyCode":26,"strSymbol":"S\/.","bSymbolIsPrefix":true,"bWholeUnitsOnly":false},"COP":{"strCode":"COP","eCurrencyCode":27,"strSymbol":"COL$","bSymbolIsPrefix":true,"bWholeUnitsOnly":true},"ZAR":{"strCode":"ZAR","eCurrencyCode":28,"strSymbol":"R","bSymbolIsPrefix":true,"bWholeUnitsOnly":false},"HKD":{"strCode":"HKD","eCurrencyCode":29,"strSymbol":"HK$","bSymbolIsPrefix":true,"bWholeUnitsOnly":false},"TWD":{"strCode":"TWD","eCurrencyCode":30,"strSymbol":"NT$","bSymbolIsPrefix":true,"bWholeUnitsOnly":false},"SAR":{"strCode":"SAR","eCurrencyCode":31,"strSymbol":"SR","bSymbolIsPrefix":false,"bWholeUnitsOnly":false},"AED":{"strCode":"AED","eCurrencyCode":32,"strSymbol":"DH","bSymbolIsPrefix":false,"bWholeUnitsOnly":false},"RMB":{"strCode":"RMB","eCurrencyCode":9000,"strSymbol":"\u5200\u5e01","bSymbolIsPrefix":false,"bWholeUnitsOnly":true},"NXP":{"strCode":"NXP","eCurrencyCode":9001,"strSymbol":"\uc6d0","bSymbolIsPrefix":false,"bWholeUnitsOnly":true}};


// takes an integer
function v_currencyformat( valueInCents, currencyCode, countryCode )
{
	var currencyFormat = (valueInCents / 100).toFixed(2);
	switch( currencyCode )
	{
		case 'EUR':
			return (currencyFormat + GetCurrencySymbol( currencyCode )).replace( '.', ',' ).replace( ',00', ',--' );
		case 'GBP':
			return GetCurrencySymbol( currencyCode ) + currencyFormat;
		case 'USD':
			if ( typeof(countryCode) != 'undefined' && countryCode != 'US' )
				return GetCurrencySymbol( currencyCode ) + currencyFormat + ' USD';
			else
				return GetCurrencySymbol( currencyCode ) + currencyFormat;
		case 'RUB':
			return currencyFormat.replace( '.', ',' ).replace( ',00', '' ) + ' ' + GetCurrencySymbol( currencyCode );
		case 'JPY':
			return GetCurrencySymbol( currencyCode ) + ' ' + currencyFormat.replace( '.00', '' );
		case 'BRL':
		case 'COP':
			return GetCurrencySymbol( currencyCode ) + ' ' + currencyFormat.replace( '.', ',' );
		case 'CLP':
			return GetCurrencySymbol( currencyCode ) + ' ' + currencyFormat.replace( '.00', '' ).replace( '.', ',' );
		case 'NOK':
		case 'PLN':
			return currencyFormat.replace( '.', ',' ) + ' ' + GetCurrencySymbol( currencyCode );
		case 'SAR':
		case 'AED':
		case 'CHF':
			return currencyFormat + ' ' + GetCurrencySymbol( currencyCode );
		case 'IDR':
			return GetCurrencySymbol( currencyCode ) + ' ' + currencyFormat;
		case 'MYR':
		case 'PHP':
		case 'SGD':
		case 'THB':
		case 'CNY':
		case 'INR':
		case 'ZAR':
			return GetCurrencySymbol( currencyCode ) + currencyFormat;
		case 'KRW':
			return GetCurrencySymbol( currencyCode ) + currencyFormat.replace( '.00', '' );
		case 'MXN':
		case 'CAD':
		case 'AUD':
		case 'NZD':
		case 'PEN':
		case 'HKD':
		case 'TWD':
			return GetCurrencySymbol( currencyCode ) + ' ' + currencyFormat;
		case 'VND':
			return currencyFormat.replace( '.00', '' ) + GetCurrencySymbol( currencyCode );
		default:
			return currencyFormat + ' ' + currencyCode;
	}
}

function IsCurrencySymbolBeforeValue( currencyCode )
{
	return $.currency_data[currencyCode] && $.currency_data[currencyCode].bSymbolIsPrefix;
}

function IsCurrencyWholeUnits( currencyCode )
{
		return $.currency_data[currencyCode] && $.currency_data[currencyCode].bWholeUnitsOnly && currencyCode != 'RUB';
}

// Return the symbol to use for a currency
function GetCurrencySymbol( currencyCode )
{
	return $.currency_data[currencyCode] ? $.currency_data[currencyCode].strSymbol : currencyCode + ' ';
}

function GetCurrencyCode( currencyId )
{
	for ( var code in $.currency_data )
	{
		if ( $.currency_data[code].eCurrencyCode == currencyId )
			return code;
	}
	return 'Unknown';
}

/*
 * Display a generic popup panel in community
 */
function DisplayBigPicturePopup( layout, panelid, callbackFunc )
{
	var popup = $.CreatePanel( 'Panel', $.TenfootController( $.GetContextPanel() ).AccessMainMenu(), 'CommunityAppHubPopup' );
	$.RegisterEventHandler( 'LoadAsyncComplete', popup, function( p, bSuccess, eDetail, bPartial )
	{
		if ( bSuccess )
		{
			DebugOut( "LoadAsyncComplete" );

			SetupPopupForPanel( panelid, popup );

			callbackFunc( bSuccess, panelid, popup );

			$.RegisterKeyBind( popup, "pad_b,steampad_b", function() { CloseBigPicturePopup(); } );
			$.RegisterFooterButton( popup, "pad_b", 'DISMISS' );
		}
		else
		{
			callbackFunc( bSuccess, panelid, popup );

			popup.AddClass( "Destructing" );
			$.DispatchEvent( 'MessageBoxClose', popup );
			popup.DeleteAsync( 0.4 );
		}
	} );

	popup.BLoadLayoutFromString(
		'<root><styles><include src="file://{resources}/styles/steamstyles.css" /><include src="file://{resources}/styles/community/community.css" /></styles><script>' +
			CloseBigPicturePopup.toString() +
			'</script><Panel oncancel="CloseBigPicturePopup();"><Button id="CommunityAppHubPopupWrapperButton" style="height: 100%; width: 100%;" ><LoadingThrobber id="Throbber" style="vertical-align: center; horizontal-align: center; z-index: -1;" /><Panel id="CommunityAppHubPopupInner"/></Button></Panel></root>',
		true,
		false
	);

	popup.FindChildTraverse("CommunityAppHubPopupInner").LoadLayoutFromStringAsync( layout, true, false );
	$.TenfootController( $.GetContextPanel() ).ShowModalDialog( popup, '' );
}

function DebugOut( message )
{
	$.Msg( message );
}

function CloseBigPicturePopup()
{
	var popup = $.TenfootController( $.GetContextPanel() ).AccessMainMenu().FindChildTraverse( "CommunityAppHubPopup" );

	popup.AddClass( "Destructing" );
	$.DispatchEvent( 'MessageBoxClose', popup );
	popup.DeleteAsync( 0.4 );

	var button = popup.FindChildTraverse( "CommunityAppHubPopupButton" );
	if ( button )
	{
		button.style.preTransformScale2d = '1.0';
		button.style.transform='translatex( 0px )';

		$.Schedule( 0.01, function() {
			button.style.transform = 'translate3d( ' + popup.GetAttributeInt( "x", 0 ) + 'px, ' + popup.GetAttributeInt( "y", 0 ) + 'px, 0px )';
			button.style.preTransformScale2d = '0.0';
		} );
	}
}

function SetupPopupForPanel( panelid, popup )
{
	var panel = $(panelid);

	var offsets = ComputeXAndY( panel );
	DebugOut( "Main width = " + offsets.mainwidth + ", Main height = " + offsets.mainheight );
	DebugOut( "Offsets x = " + offsets.x + ", y = " + offsets.y );
	DebugOut( "Width = " + panel.actuallayoutwidth + ", height = " + panel.actuallayoutheight );

	var x = offsets.x + ( panel.actuallayoutwidth / 2 ) - ( offsets.mainwidth / 2 );
	var y = offsets.y + ( panel.actuallayoutheight / 2 ) - ( offsets.mainheight / 2 );
	popup.SetAttributeInt( "x", x );
	popup.SetAttributeInt( "y", y );

	popup.SetAttributeString( "sourcepanel", panelid );
}

//
// Compute the X and Y coordinates for the given panel in the
// reference frame of the main menu panel, so we can make the shot
// pop out from the correct location.
//
function ComputeXAndY( panel )
{
	mainwidth = 0;
	mainheight = 0;
	x = 0;
	y = 0;

	while ( true )
	{
		x = x + panel.actualxoffset + panel.scrolloffset_x;
		y = y + panel.actualyoffset + panel.scrolloffset_y;

		panel = panel.GetParent();

		if ( panel.id == 'MainMenu' || panel.id == 'OverlayBasePanel' )
		{
			mainwidth = panel.actuallayoutwidth;
			mainheight = panel.actuallayoutheight;
			break;
		}
	}

	return { x: x, y: y, mainwidth: mainwidth, mainheight: mainheight };
}

function DisplayYouTubeVideo( videoURL, panelid )
{
	DebugOut( $.GetContextPanel().id + ": DisplayYouTubeVideo( " + videoURL + ", " + panelid + " )" );

	var layout = '<root> \
					<styles> \
						<include src="file://{resources}/styles/steamstyles.css" /> \
						<include src="file://{resources}/styles/community/community.css" /> \
						<include src="file://{resources}/styles/movie.css" /> \
						<include src="https://steamcommunity-a.akamaihd.net/public/css/bigpicture/apphub.css?v=valveisgoodatcaching" /> \
					</styles> \
					<scripts> \
						<include src="https://steamcommunity-a.akamaihd.net/public/javascript/bigpicture/base.js?v=valveisgoodatcaching&amp;l=english" /> \
					</scripts> \
					<Panel oncancel="CloseBigPicturePopup();" class="CommunityAppHubPopup CommunityAppHubScreenshotPopup"> \
						<Button id="CommunityAppHubPopupButton" > \
							<HTML id="CommunityAppHubPopupVideoBrowser" embedded="true" /> \
						</Button> \
					</Panel> \
				</root>';

	DisplayBigPicturePopup(
		layout,
		panelid,
		function ( bSuccess, panelid, popup ) {
			if ( bSuccess )
			{
				var throbber = popup.FindChildTraverse( "Throbber" );
				var browser = popup.FindChildTraverse( "CommunityAppHubPopupVideoBrowser" );
				var button = popup.FindChildTraverse( "CommunityAppHubPopupButton" );

				button.style.transform = 'translate3d( ' + popup.GetAttributeInt( "x", 0 ) + 'px, ' + popup.GetAttributeInt( "y", 0 ) + 'px, 0px )';
				button.style.preTransformScale2d = '0.0';

				if ( browser )
				{
					browser.SetURL( videoURL );

					$.RegisterEventHandler( 'PanelLoaded', browser, function()
					{
						DebugOut( "Browser loaded" );

						throbber.AddClass( "LoadComplete" );
						{
							button.style.opacity = 1;
							button.style.preTransformScale2d = '1.0';
							button.style.transform='translatex( 0px )';
						};

						$.DispatchEventAsync( 0.1, 'SetInputFocus', button );

						$.RegisterKeyBind( button, 'pad_a,steampad_a', function() {	browser.RunJavascript( "toggleVideoPlayback();" ); } );
						$.RegisterFooterButton( button, "pad_a", "PLAY/PAUSE" );

						$.RegisterKeyBind( button, 'pad_ltrigger,steampad_ltrigger', function() {	browser.RunJavascript( "rewindVideo();" ); } );
						$.RegisterKeyBind( button, 'pad_ltrigger(up),steampad_ltrigger(up)', function() {	browser.RunJavascript( "stopSeek();" ); } );

						$.RegisterKeyBind( button, 'pad_rtrigger,steampad_rtrigger', function() { browser.RunJavascript( "fastForwardVideo();" ); } );
						$.RegisterKeyBind( button, 'pad_rtrigger(up),steampad_rtrigger(up)', function() { browser.RunJavascript( "stopSeek();" ); } );
					} );
				}
			}
		}
	);
}

function ShowPopupMenu( rgOptions )
{
	var layout = "<root>\r\n\t\t\t\t\t<styles>\r\n\t\t\t\t\t\t<include src=\"file:\/\/{resources}\/styles\/steamstyles.css\" \/>\n\t\t<include src=\"https:\/\/steamcommunity-a.akamaihd.net\/public\/shared\/css\/bigpicture\/basestyles.css?v=valveisgoodatcaching\" \/>\n\r\n\t\t\t\t\t\t<include src=\"https:\/\/steamcommunity-a.akamaihd.net\/public\/css\/bigpicture\/profile.css?v=valveisgoodatcaching\" \/>\r\n\t\t\t\t\t\t<include src=\"https:\/\/steamcommunity-a.akamaihd.net\/public\/css\/bigpicture\/apphub.css?v=valveisgoodatcaching\" \/>\r\n\t\t\t\t\t<\/styles>\r\n\t\t\t\t\t<scripts>\r\n\t\t\t\t\t\t<include src=\"https:\/\/steamcommunity-a.akamaihd.net\/public\/javascript\/bigpicture\/base.js?v=valveisgoodatcaching&amp;l=english\" \/>\r\n\t\t\t\t\t<\/scripts>\r\n\t\t\t\t\t<Panel oncancel=\"CloseBigPicturePopup();\" class=\"MenuPopup\">\r\n\t\t\t\t\t\t<Panel class=\"MenuPopupButtonContainer\" selectionposboundary=\"vertical\" >\r\n\t\t\t\t\t\t<\/Panel>\r\n\t\t\t\t\t<\/Panel>\r\n\t\t\t\t<\/root>";

	var popup = $.CreatePanel( 'Panel', $.TenfootController( $.GetContextPanel() ).AccessMainMenu(), 'CommunityAppHubPopup' );
	popup.BLoadLayoutFromString( layout, true, false );

	$.TenfootController( $.GetContextPanel() ).ShowModalDialog( popup, '' );
	var oContainer = popup.FindChildrenWithClassTraverse("MenuPopupButtonContainer")[0];

	for( var i=0; i<rgOptions.length; i++)
	{
		var oButton = $.CreatePanel( 'Button', oContainer, '' );
		//oButton.AddClass('Button');

		oButton.tabindex = "auto";
		oButton.selectionpos_y = "auto";

		var oLabel = $.CreatePanel( 'Label', oButton, 'MenuPopup_' + i );

		oLabel.html = ( rgOptions[i].html == true );
		oLabel.text =  rgOptions[i].label ;
		$.RegisterEventHandler('Activated', oButton, rgOptions[i].onactivate);

	}

	$.Schedule( 0.01, function() {
		popup.AddClass('Visible');
	});

	popup.SetFocus();

}

function Confirm(strTitle, strText, fnYes, fnNo)
{
	var pMsgBox = $.TenfootController( $.GetContextPanel() ).ShowMessageBox(
		$.TenfootMsgBox.k_EMsgBoxButton_OK | $.TenfootMsgBox.k_EMsgBoxButton_Cancel,
		strTitle,
		strText );
	$.RegisterEventHandler( 'ButtonOK', pMsgBox, function()
	{
		fnYes();
	} );
	$.RegisterEventHandler( 'ButtonCancel', pMsgBox, function()
	{
		fnNo();
	} );
}
var CPanelUtils = {
	MoveToTop: function( oPanel )
	{
		var oParent = oPanel.GetParent();
		var rgChildren = oParent.Children();
		var oLastChild = rgChildren[0];
		oParent.MoveChildBefore(oPanel, oLastChild);
	},
	MoveToBottom: function( oPanel )
	{
		var oParent = oPanel.GetParent();
		var rgChildren = oParent.Children();
		var oLastChild = rgChildren[rgChildren.length - 1];
		oParent.MoveChildAfter(oPanel, oLastChild);
	},
	AppendChildrenToOther: function( oSource, oTarget )
	{
		while( oSource.GetChildCount() > 0 )
			oSource.GetChild(0).SetParent( oTarget );
	}
};


