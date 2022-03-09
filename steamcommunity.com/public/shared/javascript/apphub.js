
var SMALL = 1;
var MEDIUM = 2;
var LARGE = 4;
var WIDE = 8;
var TALL = 16;
var MEDIUM_RESIZABLE = 32;
var LARGE_RESIZABLE = 64;
var TALL_RESIZABLE = 128;

var gDebugging = 0;

function GetCardCategoryString( category )
{
	var categoryString = '';
	if ( category & SMALL )
	{
		categoryString += 'S';
	}
	if ( category & MEDIUM )
	{
		categoryString += 'M';
	}
	if ( category & LARGE )
	{
		categoryString += 'L';
	}
	if ( category & WIDE )
	{
		categoryString += 'W';
	}
	if ( category & TALL )
	{
		categoryString += 'T';
	}
	if ( category & MEDIUM_RESIZABLE )
	{
		categoryString += 'Mr';
	}
	if ( category & LARGE_RESIZABLE )
	{
		categoryString += 'Lr';
	}
	if ( category & TALL_RESIZABLE )
	{
		categoryString += 'Tr';
	}
	return categoryString;
}

var g_rgTemplateData = {};
function ConstructDefaultRowTemplates( pageWidth, cardMargins )
{
	var fullWidth = pageWidth - cardMargins;
	var halfWidth = ( pageWidth / 2 ) - cardMargins;
	var thirdWidth = ( pageWidth / 3 ) - cardMargins;
	var twoThirdsWidth = ( pageWidth - pageWidth / 3 ) - cardMargins;

	var nTallHeight = Math.max( 400, Math.floor( 628 / 960 * pageWidth ) );
	var nTallHalfHeight = Math.floor( ( nTallHeight - 108 ) / 2 );

	var largeSmall = {
		name: 'largeSmall',
		fixedHeight: false,
		category: LARGE,
		cardTemplates: [ { width: twoThirdsWidth, category: LARGE_RESIZABLE }, { width: thirdWidth, category: SMALL } ]
	};
	var smallLarge = {
		name: 'smallLarge',
		fixedHeight: false,
		category: SMALL,
		cardTemplates: [ { width: thirdWidth, category: SMALL }, { width: twoThirdsWidth, category: LARGE_RESIZABLE } ]
	};
	var twoLarge = {
		name: 'twoLarge',
		fixedHeight: false,
		category: MEDIUM | LARGE,
		cardTemplates: [ { width: halfWidth, category: MEDIUM_RESIZABLE | LARGE_RESIZABLE }, { width: halfWidth, category: MEDIUM_RESIZABLE | LARGE_RESIZABLE } ]
	};
	var twoSmall = {
		name: 'twoSmall',
		fixedHeight: false,
		category: SMALL | MEDIUM,
		cardTemplates: [ { width: halfWidth, category: SMALL | MEDIUM_RESIZABLE }, { width: halfWidth, category: SMALL | MEDIUM_RESIZABLE } ]
	};
	var threeSmall = {
		name: 'threeSmall',
		fixedHeight: false,
		category: SMALL | MEDIUM,
		cardTemplates: [ { width: thirdWidth, category: SMALL | MEDIUM_RESIZABLE }, { width: thirdWidth, category: SMALL | MEDIUM_RESIZABLE }, { width: thirdWidth, category: SMALL | MEDIUM_RESIZABLE } ]
	};
	var threeLarge = {
		name: 'threeLarge',
		fixedHeight: false,
		category: LARGE,
		cardTemplates: [ { width: thirdWidth, category: LARGE }, { width: thirdWidth, category: LARGE }, { width: thirdWidth, category: LARGE } ]
	};
	var tallLeft = {
		name: 'tallLeft',
		fixedHeight: true,
		category: TALL,
		cardTemplates: [ { width: twoThirdsWidth, height: nTallHeight, category: TALL }, { width: thirdWidth, height: nTallHalfHeight, category: SMALL | MEDIUM_RESIZABLE | LARGE_RESIZABLE | TALL_RESIZABLE }, { width: thirdWidth, height: nTallHalfHeight + 1, category: SMALL | MEDIUM_RESIZABLE | LARGE_RESIZABLE | TALL_RESIZABLE }  ]
	};
	var tallRight = {
		name: 'tallRight',
		fixedHeight: true,
		category: TALL,
		cardTemplates: [ { width: twoThirdsWidth, height: nTallHeight, category: TALL, float: 'right' }, { width: thirdWidth, height: nTallHalfHeight, category: SMALL | MEDIUM_RESIZABLE | LARGE_RESIZABLE | TALL_RESIZABLE }, { width: thirdWidth, height: nTallHalfHeight + 1, category: SMALL | MEDIUM_RESIZABLE | LARGE_RESIZABLE | TALL_RESIZABLE }  ]
	};
	var tallLarge = {
		name: 'tallLarge',
		fixedHeight: false,
		category: TALL,
		cardTemplates: [ { width: halfWidth, category: TALL }, { width: halfWidth, category: MEDIUM | LARGE } ]
	};
	var superWide = {
		name: 'superWide',
		fixedHeight: true,
		category: WIDE,
		cardTemplates: [ { width: fullWidth, category: WIDE }  ]
	};
	// fallbacks
	var fallback = {
		name: 'fallback',
		fixedHeight: false,
		category: SMALL | MEDIUM | LARGE | WIDE | TALL,
		cardTemplates: [ { width: fullWidth, category: SMALL | MEDIUM | LARGE | WIDE | TALL } ]
	};
	var twoTall = {
		name: 'twoTall',
		fixedHeight: true,
		category: TALL,
		cardTemplates: [ { width: halfWidth, height: halfWidth, category: TALL }, { width: halfWidth, height: halfWidth, category: TALL } ]
	};
	var smallFallback = {
		name: 'smallFallback',
		fixedHeight: false,
		category: SMALL,
		cardTemplates: [ { width: fullWidth, category: SMALL } ]
	};
	var mediumFallback = {
		name: 'mediumFallback',
		fixedHeight: false,
		category: MEDIUM,
		cardTemplates: [ { width: fullWidth, category: MEDIUM } ]
	};
	var largeFallback = {
		name: 'largeFallback',
		fixedHeight: false,
		category: LARGE,
		cardTemplates: [ { width: fullWidth, category: LARGE } ]
	};
	var tallFallback = {
		name: 'tallFallback',
		fixedHeight: false,
		category: TALL,
		cardTemplates: [ { width: fullWidth, category: TALL } ]
	};

	var rowTemplates = [ tallLeft, superWide, twoSmall, largeSmall, tallRight, threeSmall, twoLarge, smallLarge ];
	var fallbackTemplates = [ twoTall, tallLarge, threeLarge, smallFallback, mediumFallback, largeFallback, tallFallback, fallback ];

	for ( var i = 0; i < rowTemplates.length; i++ )
		g_rgTemplateData[ rowTemplates[i].name ] = rowTemplates[i];
	for ( var i = 0; i < fallbackTemplates.length; i++ )
		g_rgTemplateData[ fallbackTemplates[i].name ] = fallbackTemplates[i];

	return { rowTemplates : rowTemplates, fallbackTemplates : fallbackTemplates };
}

function ShowAppHubCards( parentID, ogCards, rowTemplates, fallbackRowTemplates, page, pageWidth, maxRows )
{
	// categorize cards
	var cards = [];
	for ( var i = 0; i < ogCards.length; ++i )
	{
		var card = ogCards[i];
		if ( !$J( card ).hasClass( 'Broadcast_Card' ) )
		{
			card.select( "a" ).each(
				function( elem )
				{
					Event.observe( elem, 'click',
						function(event)
						{
							Event.stop( event );
							top.location.href = elem.href;
						}
					);
				}
			);
		}
		CategorizeCard( card );
		cards.push( card );
		// remove from current parent, as we will re-parent in possibly a different order
		card.remove();
	}

	// now assign items to templates
	var currentRow = 0;
	var idxTemplate = ( page - 1 ) % rowTemplates.length;
	while ( cards.length > 0 )
	{
		var row = [];
		var card = cards[0];

		// find a template that matches the card and number of cards left
		idxTemplate = SelectTemplate( rowTemplates, idxTemplate, card, cards.length );
		if ( idxTemplate != -1 )
		{
			var template = rowTemplates[idxTemplate];
			idxTemplate = ( idxTemplate + 1 ) % rowTemplates.length;

			var iterations = 0;
			// fill the row--if we are unable to find anything that matches, move onto the next template
			while ( FillRow( template, cards, row ) == false )
			{
				card = cards[0];
				idxTemplate = SelectTemplate( rowTemplates, idxTemplate, card, cards.length );
				if ( idxTemplate == -1 )
				{
					break;
				}
				template = rowTemplates[idxTemplate];
				idxTemplate = ( idxTemplate + 1 ) % rowTemplates.length;

				// if we've looked at all these templates, then abort
				++iterations;
				if ( iterations > rowTemplates.length )
				{
					idxTemplate = -1;
					break;
				}
			}
		}

		// if we couldn't fill any of the preferred templates, fallback
		// this will always match something
		if ( idxTemplate == -1 )
		{
			// no template matches, fall
			var idxFallbackTemplate = 0;
			do
			{
				card = cards[0];
				idxFallbackTemplate = SelectTemplate( fallbackRowTemplates, idxFallbackTemplate, card, cards.length );
				template = fallbackRowTemplates[idxFallbackTemplate];
				idxFallbackTemplate = ( idxFallbackTemplate + 1 ) % fallbackRowTemplates.length;
			}
			while ( FillRow( template, cards, row ) == false )
			// if we used a fallback, start over
			idxTemplate = ( page - 1 ) % rowTemplates.length;
		}

		// finally, add the filled row to the document
		// if we exceed the maximum number of rows, continue just to remove the elements from the document
		// @todo should we just let the cards exist in the document, since they are hidden?
		currentRow++;
		if ( currentRow <= maxRows )
		{
			SizeCards( row, pageWidth );
			AddRow( parentID, row, page, currentRow );
		}
	}
}

function CategorizeCard( card )
{
	var image = card.down('img.apphub_CardContentPreviewImage');
	if ( image )
	{
		var width = image.width == 0 ? image.preloadImage.width : image.width;
		var height = image.height == 0 ? image.preloadImage.height : image.height;
		if ( image.src.indexOf( 'youtube.com' ) && width == 480 && height == 360 )
		{
			card.forceYouTubeThumbnailHeight = true;
			height = 270;
		}
		image.aspectRatio = height == 0 ? 1 : width / height;

		if ( image.aspectRatio > 2 )
		{
			card.category = WIDE;
		}
		else if ( image.aspectRatio > 1.4 )
		{
			card.category = LARGE | LARGE_RESIZABLE;
			if ( width >= 1024 )
			{
				card.category |= WIDE;
			}
		}
		else if ( image.aspectRatio > 1.33 )
		{
			card.category = MEDIUM | MEDIUM_RESIZABLE;
		}
		else
		{
			card.category = SMALL;
			if ( image.aspectRatio <= 1 && width >= 512 )
			{
				card.category |= TALL | TALL_RESIZABLE;
				card.preferredCategory |= TALL | TALL_RESIZABLE;
			}
		}
	}
	else
	{
		image = card.down( '.apphub_CardTextContent img');
		var textSection = card.down( '.apphub_CardTextContent' );
		var textLength = textSection ? textSection.innerHTML.length : 0;
		if ( ( image && textLength > 1200 ) || textLength > 1500 )
		{
			card.category = TALL;
			card.preferredCategory = TALL;
		}
		else if ( image || textLength > 700 )
		{
			card.category = MEDIUM | LARGE;
			card.preferredCategory = LARGE;
		}
		else if ( textLength > 300 )
		{
			card.category = MEDIUM;
			card.preferredCategory = MEDIUM;
		}
		else
		{
			card.category = SMALL | MEDIUM;
			card.preferredCategory = SMALL;
		}
	}

	if ( $J( card ).hasClass( 'Announcement_Card' ) || $J( card).hasClass( 'News_Card' ) )
	{
		card.category |= SMALL | MEDIUM_RESIZABLE;
		card.preferredCategory |= SMALL | MEDIUM_RESIZABLE;
	}

	if ( gDebugging )
	{
		var contentType = card.down( '.apphub_CardContentType' );
		var textSection = card.down( '.apphub_CardTextContent' );
		if ( contentType )
		{
			contentType.innerHTML = '[' + ( typeof card.preferredCategory != "undefined" ? ( GetCardCategoryString( card.preferredCategory ) + ',' ) : '' ) + GetCardCategoryString( card.category ) + '] ' + contentType.innerHTML;
		}
		else if ( textSection )
		{
			textSection.innerHTML = '[' + ( typeof card.preferredCategory != "undefined" ? ( GetCardCategoryString( card.preferredCategory ) + ',' ) : '' ) + GetCardCategoryString( card.category ) + '] ' + textSection.innerHTML;
		}
	}
}

// Select a template that matches the size and make sure that there are enough cards to fill it
function SelectTemplate( rowTemplates, idx, card, numAvailableCards )
{
	var ogIdx = idx;
	var template = rowTemplates[idx];
	var category = typeof card.preferredCategory != "undefined" ? card.preferredCategory : card.category;
	while ( ( template.category & category ) == 0 || template.cardTemplates.length > numAvailableCards )
	{
		idx = ( idx + 1 ) % rowTemplates.length;
		template = rowTemplates[idx];
		if ( idx == ogIdx )
		{
			return -1;
		}
	}
	return idx;
}

// Find a card matching the specified size
function FindMatchingCard( cards, category )
{
	var idxBackup = -1;
	for ( var i = 0; i < cards.length; ++i )
	{
		var card = cards[i];
		// matches preferred category?
		var preferredCategory = typeof card.preferredCategory != "undefined" ? card.preferredCategory : card.category;
		if ( ( preferredCategory & category ) != 0 )
		{
			cards.splice( i, 1 );
			return card;
		}
		// otherwise, see if it matches the backup category
		if ( idxBackup == -1 && ( card.category & category ) != 0 )
		{
			idxBackup = i;
		}
	}
	// didn't match preferred category, find the backup
	if ( idxBackup != -1 )
	{
		var card = cards[idxBackup];
		cards.splice( idxBackup, 1 );
		return card;
	}
	return false;
}

// Fill the row. If no matches can be found, then return false.
function FillRow( template, cards, row )
{
	for ( var i = 0; i < template.cardTemplates.length; ++i )
	{
		var cardTemplate = template.cardTemplates[i];
		var card = FindMatchingCard( cards, cardTemplate.category );
		if ( card == false )
		{
			while ( row.length > 0 )
			{
				card = row.pop();
				cards.unshift( card );
			}
			return false;
		}
		row.push( card );
	}
	row.template = template;
	return true;
}

function AddRow( parentID, row, page, currentRow )
{
	var fadeSec = 0.2;
	var fadeSecInc = 0.5;
	var maxFadeSec = 2.0;
	var rowDiv = new Element( 'div', { 'class' : 'apphub_CardRow', 'id': "page_" + page + "_row_" + currentRow + "_template_" + ( typeof row.template != "undefined" ? row.template.name : "undefined" ) , 'data-panel': '{"flow-children":"grid","maintainX":true}' } );
	var rowDivClear = new Element( 'div', { 'class' : 'apphub_CardClear', 'style' : 'clear: left' } );
	rowDiv.appendChild( rowDivClear );
	$( parentID ).appendChild( rowDiv );
	for ( var i = 0; i < row.length; ++i )
	{
		var card = row[i];
		rowDiv.appendChild( card );
		//card.show();
		ShowWithFade( card, fadeSec );
		fadeSec = Math.min( fadeSecInc + fadeSecInc, maxFadeSec );
	}
	rowDiv.cardData = row;
}

function SizeCards( cards, nMaxWidth )
{
	var template = cards.template;
	// 5px of padding on each side
	var imageMargins = 2 * 5;
	var minContentHeight = 250;
	var minHeight = 0;

	var bUseSmallMode = nMaxWidth && nMaxWidth < 600;
	var nMaxCardHeightThisRow = 0;
	if ( bUseSmallMode )
	{
		for ( var i = 0; i < template.cardTemplates.length; i++ )
			if ( template.cardTemplates[i].height )
				nMaxCardHeightThisRow = Math.max( nMaxCardHeightThisRow, template.cardTemplates[i].height );
	}

	for ( var i = 0; i < cards.length; ++i )
	{
		var card = cards[i];
		var cardTemplate = template.cardTemplates[i];
		var width = cardTemplate.width;
		var height = cardTemplate.height || 0;

		if ( bUseSmallMode )
		{
			// in small mode we display a single column.  we fit to page width, and height will use
			//	the tallest for the row
			width = nMaxWidth;
			if ( nMaxCardHeightThisRow )
				height = nMaxCardHeightThisRow;
		}

		card.style.float = bUseSmallMode ? 'none' : ( cardTemplate.float || 'left' );
		card.tryForHeight = height;

		// set the card width
		card.style.width = bUseSmallMode ? 'auto' : ( width + 'px' );

		var image = card.down('img.apphub_CardContentPreviewImage');
		if ( image )
		{
			var newWidth = width - imageMargins;
			var newHeight = Math.floor( newWidth / image.aspectRatio );
			image.style.width = bUseSmallMode ? '100%' : newWidth + 'px';

			if ( card.forceYouTubeThumbnailHeight == true )
			{
				// normal YouTube thumbnails are 4:3, but we "made" them by 16:9 for calculations
				// set the height back to 'auto' since we are constraining by width and then calculate
				// how much of the letterbox we take off the top by using negative margins
				var ratio = ( newWidth / 480 );
				height = newHeight + imageMargins;
				var offset = Math.floor( ratio * 45 );
				image.style.height = 'auto';
				image.style.marginTop = ( -offset ) + 'px';
				image.style.marginBottom = image.style.marginTop;
			}
			else
			{
				image.style.height = 'auto';
				height = newHeight + imageMargins;
			}
		}
		else
		{
			height = minContentHeight;
		}

		if ( card.tryForHeight == 0 )
		{
			card.tryForHeight = height;
		}

		if ( minHeight == 0 )
		{
			minHeight = card.tryForHeight;
		}
		else
		{
			minHeight = Math.min( minHeight, card.tryForHeight );
		}
	}

	// now set the size and set offsets to clip top and bottom of images that are too large
	for ( var i = 0; i < cards.length; ++i )
	{
		var card = cards[i];
		var templateCardHeight = card.tryForHeight;
		var contentArea = card.down( 'div.apphub_CardContentMain' );
		var image = card.down('img.apphub_CardContentPreviewImage');

		// if fixed height, then set the card heights and make sure the contents fit
		if ( template.fixedHeight )
		{
			if ( image )
			{
				contentArea.style.height = templateCardHeight + 'px';
			}
			else
			{
				contentArea.style.height = ( templateCardHeight + 37 ) + 'px';
			}
			card.style.height = ( templateCardHeight + 95 ) + 'px';
			continue;
		}

		card.style.height = ( minHeight + 95 ) + 'px';

		if ( image )
		{
			if ( minHeight < templateCardHeight )
			{
				var halfHeight = Math.floor( ( templateCardHeight  - minHeight ) / 2 );
				image.style.top = '-' + halfHeight + 'px';
			}
			contentArea.style.height = minHeight + 'px';
		}
		else
		{
			// @note hacky magic numbers for now to make news and announcements fit
			if ( card.down( 'div.apphub_CardContentAuthorBlock.tall') )
			{
				contentArea.style.height = ( minHeight + 37 ) + 'px';
			}
			else
			{
				contentArea.style.height = ( minHeight + 52 ) + 'px';
			}
		}
	}
}

function joinOGG( appid )
{
	var url =  "https://steamcommunity.com/app/" + appid + "/joinOGG/";

	$J.post( url, {'sessionid' : g_sessionID } ).done( function( response ) {
		location.reload();
	} );
}

function leaveOGG( appid )
{
	var url =  "https://steamcommunity.com/app/" + appid + "/leaveOGG/";

	$J.post( url, {'sessionid' : g_sessionID } ).done( function( response ) {
		location.reload();
	});
}