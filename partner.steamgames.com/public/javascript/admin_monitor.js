
// Keywords for fishy items
// Must be lowercase.
g_rgFishyItemNames = [
	"<script",
	'dragon claw',
	'dragonclaw',
	'dragon lore',
	'dragonlore',
	'asiimov',
	'roshan',
	'strange unusual',
	'★ stattrak™',
	'★ specialist',
	"lucky alpine stalker",
	"manifold paradox",
	"dark artistry",
];


/* App monitor */
function SoundLikeHighValueApp( strCmp )
{
	var rgTests = [
		Soundex( 'dota 2'),
		Soundex( 'artifact'),
		Soundex( 'team fortress 2'),
		Soundex( 'counter strike'),
		Soundex( 'counter strike: global offensive'),
		Soundex( 'csgo'),
		Soundex( 'pubg'),
		Soundex( 'playerunknown\'s battlegrounds')
	];

	var strNeedle = Soundex(strCmp);

	for( var i=0; i<rgTests.length; i++)
	{
		if( rgTests[i] == strNeedle  )
			return true;
	}

	return false;
}

function Soundex( s ) {
	var a = s.toLowerCase().split(''),
		f = a.shift(),
		r = '',
		codes = {
			a: '', e: '', i: '', o: '', u: '',
			b: 1, f: 1, p: 1, v: 1,
			c: 2, g: 2, j: 2, k: 2, q: 2, s: 2, x: 2, z: 2,
			d: 3, t: 3,
			l: 4,
			m: 5, n: 5,
			r: 6
		};

	r = f +
		a
			.map(function (v, i, a) { return codes[v] })
			.filter(function (v, i, a) {
				return ((i === 0) ? v !== codes[f] : v !== a[i - 1]);
			})
			.join('');

	return (r + '000').slice(0, 4).toUpperCase();
}

function UpdateAppRows( rgData, id )
{
	var elContainer = $J('#' + id);
	var elChildren = elContainer.children();

	$J(elChildren).removeClass('changed');

	for( var i=0; i < rgData.length; i++)
	{
		var strKey = rgData[i].appid + rgData[i].name + rgData[i].last_updated + rgData[i].has_inventory_service + rgData[i].has_items;
		if( !elChildren[i] || elChildren[i].key != strKey )
		{
			var nFishyness = 0;
			var elTarget = $J( '#row_template' ).children().clone();

			var options = { hour: 'numeric', 'minute': '2-digit', year: 'numeric', month: 'numeric', day: 'numeric' };
			var strInfo = '&nbsp;';

			if( rgData[i].last_updated )
				strInfo = new Date(rgData[i].last_updated).toLocaleDateString('en-US', options);

			// Check if they have any capabilities other than "Publish App"
			if( !rgData[i].publisher_capabilities || rgData[i].publisher_capabilities.length < 2 )
			{
				nFishyness++;
			}



			var strCountryClass = '';

			// Check if they're from countries we can't verify well
			if( !rgData[i].publisher_country || rgData[i].publisher_country.indexOf('RU') !== -1
				|| rgData[i].publisher_country.indexOf('UA') !== -1
				|| rgData[i].publisher_country.indexOf('GE') !== -1
				|| rgData[i].publisher_country.indexOf('PL') !== -1
				|| rgData[i].publisher_country.indexOf('KZ') !== -1
			)
			{
				nFishyness++;
				strCountryClass = "unverified";
			}

			var screenshotsTooltip = 'Sample screenshots:<br>';
			if( rgData[i].screenshots )
			{
				for( var j=0; j< rgData[i].screenshots.length; j++ )
				{
					var filename = 'https://partner.steamgames.com/gfxproxy/gfx/apps/'+rgData[i].appid+'/'+ rgData[i].screenshots[j];
					filename.replace('.jpg','.800x600.jpg');
					screenshotsTooltip += '<img class="screenshot_thumb" src="'+V_EscapeHTML(filename)+'">';
				}
			}


			$J(elTarget).attr('href', 'https://partner.steamgames.com/apps/landing/'+rgData[i].appid );
			$J('.capsule', elTarget).attr('src', "https://partner.steamgames.com/gfxproxy/gfx/apps/"+rgData[i].appid+"/capsule_231x87.jpg");
			$J('.capsule', elTarget).attr('data-tooltip-html', screenshotsTooltip );
			//$J('.date', elTarget).html(strInfo);
			$J('.publisher', elTarget).html(rgData[i].publisher_name);
			$J('.country', elTarget).addClass(strCountryClass).html(rgData[i].publisher_country);
			$J('.appname', elTarget).text(  rgData[i].name );


			// Check if this app has items in its inventory service
			if( rgData[i].has_items )
			{
				$J(elTarget).addClass('show_has_items');
				nFishyness += 2;

				var strTooltip = "Sample of items:<br><table>";
				//console.log(rgData[i].item_sample.length);
				for( var j=0; j<rgData[i].item_sample.length; j++  )
				{
					var item = rgData[i].item_sample[j];
					if( !item )
						continue;
					item.icon = item.icon ? item.icon.replace("http://", "https://") : '';
					strTooltip += '<tr><td><img referrerpolicy="no-referrer" class="item_icon" src="'+ V_EscapeHTML(item.icon)+'"></td><td class="item_name">' + V_EscapeHTML(item.name) + '</td></tr>';
				}
				strTooltip += '</table>';


				$J('.has_items', elTarget).attr('data-tooltip-html', strTooltip );
			}

			// Check if it has inventory service enabled
			if( rgData[i].has_inventory_service )
			{
				$J(elTarget).addClass('show_has_inventory_service');
				nFishyness += 1;
			}

			// Is it a sole proprietorship? If so, add some fishy
			if( rgData[i].publisher_form == "Sole Proprietorship")
			{
				nFishyness++;
				elTarget.addClass('show_sole_proprietorship');
			}

			if( SoundLikeHighValueApp( rgData[i].name ) )
			{
				nFishyness+=2;
				elTarget.addClass('show_app_sounds_like');
			}

			if( rgData[i].app_credit_status )
			{

				if( rgData[i].app_credit_partner != rgData[i].publisher_id )
				{
					elTarget.addClass('show_app_credit_publisher_mismatch');
					nFishyness += 1;
					$J( '.app_credit_publisher_mismatch', elTarget ).mouseover(
						function(data){
							console.log("For appid %s, App credit creator: %s, redeemer: %s", data.appid, data.app_credit_partner, data.publisher_id );
						}.bind(null,rgData[i])
					);
				}

				if( !rgData[i].app_credit_redeemer_match )
				{
					elTarget.addClass('show_app_credit_redeemer_mismatch');
					nFishyness += 1;
					$J( '.app_credit_redeemer_mismatch', elTarget ).mouseover(
						function(data){
							console.log("For appid %s, App credit Purchaser: %s, redeemer: %s", data.appid, data.app_credit_owner, data.app_credit_redeemer );
						}.bind(null,rgData[i])
					);

				}
			} else if( id == "apps_new" && !document.getElementById('storedata').checked ) {
				nFishyness++;
				elTarget.addClass('show_no_app_credit');
			}

			if( nFishyness > 9 ) nFishyness = 9; // MAXIMUM FISHY

			if( g_rgTrustedPublishers.indexOf( rgData[i].publisher_id ) !== -1 )
				nFishyness = 0;

			elTarget.addClass('fishy_' + nFishyness);

			if( rgData[i].publisher_status == 2 )
			{
				elTarget.addClass('banned');
			} else if( rgData[i].has_fishy_items && nFishyness > 3 )
			{
				elTarget.addClass('mega_fishy');
			}

			elTarget.addClass('changed');
			setTimeout( function(elTarget){ elTarget.removeClass('changed'); }.bind(null,elTarget), 1000);
			if( elChildren[i] )
			{
				elContainer[0].replaceChild( elTarget[0], elChildren[ i ] )
			}
			else
			{
				elContainer.append( elTarget );
			}



			elContainer.children()[i].key = strKey;
		}
	}
	for( var i=50; i < elChildren.length; i++ )
	{
		elChildren[i].detach();
	}
}

function GetUpdateURL()
{
	return document.getElementById('storedata').checked ? "https://partner.steamgames.com/admin/ajaxappmonitor/" : "https://partner.steamgames.com/admin/ajaxappmonitorCDDB/";
}

function UpdateAppsModified()
{
	var slug = document.getElementById('inventory').checked ? '&inventory=1' : ''
	$J.ajax({
		url: GetUpdateURL() + "?updated=1" + slug,
		type:'GET'
	}).done(function(result) {
		if( !result.response )
			BeginError();
		else
		{
			UpdateAppRows ( result.response, 'apps_modified' );
			EndError ();
		}
	});
}

function UpdateAppsNew()
{
	var slug = document.getElementById('inventory').checked ? '?inventory=1' : ''
	$J.ajax({
		url: GetUpdateURL() + slug,
		type:'GET'
	}).done(function(result) {
		if( !result.response )
			BeginError();
		else
		{
			UpdateAppRows ( result.response, 'apps_new' );
			EndError ();
		}

	});
}

/* Item monitor */
function UpdateItemsModified( nTime )
{
	// Get all item updates inside the last minute. This is much wider than we need, but ensures we don't miss anything
	// since we can't trust clocks.

	var url = 'https://partner.steamgames.com/admin/ajaxitemmonitor/';
	if( nTime )
		url += '?mintime=' + nTime

	$J.ajax({
		url: url,
		type:'GET'
	}).done(function(result) {
		UpdateItemRows( result, 'Items_modified' );
	});
}

function GetItemFishyness( strItemName )
{
	strItemName = strItemName.toLowerCase();
	for( var i=0; i<g_rgFishyItemNames.length; i++ )
	{
		if( strItemName.indexOf( g_rgFishyItemNames[i] ) != -1 )
			return 6;

	}

	for( i=0; i<g_rgFishyItemNames.length; i++ )
	{
		if( Soundex( strItemName ) == Soundex( g_rgFishyItemNames[i] ) )
			return 1;
	}

	return 0;


}
g_rgItemUpdates = {};

function UpdateFromResults( rgData )
{
	if( !rgData )
		return;

	for( var i=0; i < rgData.length; i++)
	{
		var itemData = rgData[i];

		if( !itemData.appid )
			continue;

		if( g_rgItemUpdates[itemData.appid] )
		{
			// Merge data. Woo.
			for( var oldItem of g_rgItemUpdates[itemData.appid].items )
			{
				// Check if the old item def is still in our history. If so: skip; else add.
				var bFound = false;
				for( var newItem of itemData.items )
				{
					if( newItem.itemdefid == oldItem.itemdefid && newItem.name == oldItem.name )
						bFound=true;
				}
				if( !bFound )
					itemData.items.push( oldItem );
			}

		}
		g_rgItemUpdates[itemData.appid] = itemData;

		// Update timestamp
		var newestTime = g_rgItemUpdates[itemData.appid].timestamp_modified || 0;
		for( var newItem of g_rgItemUpdates[itemData.appid].items )
		{
			if( newItem.timestamp_modified > newestTime )
				newestTime = newItem.timestamp_modified;
		}

		g_rgItemUpdates[itemData.appid].timestamp_modified = newestTime;


	}
}

function GetItemRows()
{
	var rgRows = Object.values( g_rgItemUpdates );

	rgRows.sort(function(a, b){ return b.timestamp_modified - a.timestamp_modified });

	return rgRows;
}

function UpdateItemRows( rgResults, id )
{
	if( rgResults.success != 1 )
		BeginError();
	else
		EndError();

	UpdateFromResults(rgResults.changes);
	var elContainer = $J('#' + id);
	var elChildren = elContainer.children();

	$J(elChildren).removeClass('changed');

	var rgData = GetItemRows();
	if( !rgData )
		return;

	for( var i=0; i < rgData.length; i++)
	{
		var strKey = rgData[i].appid + rgData[i].timestamp_modified + rgData[i].name + rgData[i].items.length;
		if( !elChildren[i] || elChildren[i].key != strKey )
		{
			var nFishyness = 0;

			var options = { hour: 'numeric', 'minute': '2-digit', month: 'numeric', day: 'numeric' };


			var rgItemRows = [];
			var rgFishyitemRows = [];

			// @todo: add "Show more" button. Right now we just surface the fishy stuff then fill the rest with stuff
			// at semi-random.

			for( var j=0; j< rgData[i].items.length; j++)
			{
				var item = rgData[i].items[j];
				var nItemFishy = GetItemFishyness( item.name );
				var strDate = new Date(item.timestamp_modified * 1000).toLocaleDateString('en-US', options);

				item.icon_url = item.icon_url.replace("http://", "https://");

				var elItemTarget = $J( '#item_template' ).children().clone();
				$J('.item_name', elItemTarget).text(  item.name );
				$J('.item_icon', elItemTarget).attr( 'title' , item.icon_url || "No Image");

				$J('.item_icon', elItemTarget).attr( 'src-hidden' , "https://community.akamai.steamstatic.com/economy/image/" + item.icon_url_hash + "/128fx128f");
				$J('.item_notes', elItemTarget).html( "ID: " + item.itemdefid + ", Rev: " + parseInt(item.revision) + "<br>Modified: " + strDate);

				if( nItemFishy > 0 )
					elItemTarget.addClass("fishy_" + nItemFishy);

				if( nItemFishy > 0 )
					rgFishyitemRows.push( elItemTarget );
				else
					rgItemRows.push( elItemTarget  );

				nFishyness += Math.floor( nItemFishy / 3 );
			}

			var rgItems = rgFishyitemRows;
			for( j=rgFishyitemRows.length; j<4*4 && rgItemRows.length > 0; j++)
			{
				var row = rgItemRows.pop();
				rgItems.push(row);
				$J('.item_icon', row).attr( 'src' , $J('.item_icon', row).attr( 'src-hidden' ));
			}

			var strCapsule = 'https://partner.steamgames.com/gfxproxy/gfx/apps/'+rgData[i].appid+'/' + rgData[i].capsule;
			var elTarget = $J( '#row_template' ).children().clone();

			var screenshotsTooltip = 'Sample screenshots:<br>';
			if( rgData[i].screenshots )
			{
				for( var j=0; j< rgData[i].screenshots.length; j++ )
				{
					var filename = 'https://partner.steamgames.com/gfxproxy/gfx/apps/'+rgData[i].appid+'/'+ rgData[i].screenshots[j];
					filename.replace('.jpg','.800x600.jpg');
					screenshotsTooltip += '<img class="screenshot_thumb" src="'+V_EscapeHTML(filename)+'">';
				}
			}

			var doc = new DOMParser().parseFromString(rgData[i].name , "text/html");

			$J(elTarget).attr( 'href',  'https://partner.steamgames.com/apps/landing/'+rgData[i].appid );
			$J('.appname', elTarget).text(  doc.documentElement.textContent );
			$J('.appdesc', elTarget).html( "Actor: " + V_EscapeHTML( rgData[i].actor_persona ) + "<br>" + V_EscapeHTML( rgData[i].publishers ? rgData[i].publishers.join(", ") : '' ) );
			$J('.capsule', elTarget).attr( 'src', strCapsule );
			$J('.item_changes', elTarget).append( rgItems );
			$J('.capsule', elTarget).attr('data-tooltip-html', screenshotsTooltip );


			if( elChildren[i] )
			{
				elContainer[0].replaceChild( elTarget[0], elChildren[ i ] )
			}
			else
			{
				elContainer.append( elTarget );
			}


			if( nFishyness > 9 ) nFishyness = 9; // MAXIMUM FISHY

			$J('.app_info', elTarget).addClass('fishy_' + nFishyness);
			$J('.capsule_ctn', elTarget).addClass('fishy_' + nFishyness);


			elContainer.children()[i].key = strKey;

		}
	}
	for( var i=50; i < elChildren.length; i++ )
	{
		elChildren[i].detach();
	}
}

g_elError = null;

function BeginError()
{
	if( g_elError != null )
		return;

	g_elError = $J('<div class="monitor_error"><div>Unable to fetch updates</div></div>');
	$J(document.body).append(g_elError);
}

function EndError()
{
	if( g_elError == null )
		return;
	g_elError.detach();

	g_elError = null;
}

