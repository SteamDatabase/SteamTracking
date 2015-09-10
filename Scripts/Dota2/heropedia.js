var g_rgHeroPickerData;
var g_bHeroPickerDataReady = false;
var g_rgDisabledHeroes  = new Array();
$(document).ready(
	function() 
	{
		// see if we're on the heropicker screen
		if ( $('.heroPickerIconLink').length )
		{
			// request the hero bios
			$.ajax(
				{
					type:'GET',
					cache:true,
					url:'http://www.dota2.com/jsfeed/heropickerdata?v=2956347&l=english',
					dataType:'json',
					success:function(heroPickerJSON){ g_rgHeroPickerData = heroPickerJSON; sortHeroNameDropdown(); g_bHeroPickerDataReady = true; $('#heroBioLoading').hide(); $('#heroBioDynamic').show(); $('#heroBioName').html( 'Choose a hero' ); updateFilters(); }
				}
			);
			// setup hover handlers
			$('.heroPickerIconLink').hover( 
				// Mouse over
				function( e )
				{
					HeroIconHover( e.currentTarget.id, true );
				},
				// Mouse out
				function( e )
				{
					HeroIconHover( e.currentTarget.id, false );
				}
			);
		}
	}
);

function sortHeroNameDropdown()
{
	// save localized "HERO NAME" and "All" text and remove options
	opt1 = $('#filterName option:eq(0)').text();
	$('#filterName option:eq(0)').remove();
	opt2 = $('#filterName option:eq(0)').text();
	$('#filterName option:eq(0)').remove();
	// sort options by localized hero name
	$('#filterName').html( 
		$('#filterName option').sort( 
			function( a, b )
			{
				return $(a).text().localeCompare( $(b).text() );
			}
		)
	);
	// add back HERO NAME and All
	$('#filterName').prepend('<option value="">'+opt2+'</option>');
	$('#filterName').prepend('<option value="">'+opt1+'</option>');
	$("#filterName option:first").attr('selected','selected');
}

function HeroIconHover( heroIconLink, bShow )
{
	if ( !g_bHeroPickerDataReady )
		return;
	
	// this is the element that fired the hover
	heroName = heroIconLink.slice( 5 );
	// see if our hero is greyed out from filter selection
	if ( $.inArray( heroName, g_rgDisabledHeroes ) != -1 && bShow )
		return;
	heroIconLink = $(heroIconLink);
	
	if ( bShow )
	{
		// add bio
		$('#heroBioName').html( g_rgHeroPickerData[heroName].name );
		// build role string
		roleText = '<span class="bioTextAttack">' + g_rgHeroPickerData[heroName].atk_l + '</span>';
		if ( g_rgHeroPickerData[heroName].roles_l.length )
		{
			roleText += ' - ' + g_rgHeroPickerData[heroName].roles_l.join( ' - ' );
		}
		$('#heroBioRoles').html( roleText );

		// show hover icon
		$('#hover_'+heroName).show();
	}
	else
	{
		// dont clear text above, but hide hover icon
		$('#hover_'+heroName).hide();
	}
}

function updateFilters()
{
	if ( !g_bHeroPickerDataReady )
		return;
	strAttackFilter = $('#filterAttack option:selected').val();
	strRoleFilter = $('#filterRole option:selected').val();
	strNameFilter = $('#filterName option:selected').val();
	g_rgDisabledHeroes = [];
	$('.heroPickerIconLink').each(
		function ()
		{
			heroName = $(this).attr('id').slice( 5 );
			if ( strAttackFilter != '' && g_rgHeroPickerData[heroName].atk != strAttackFilter )
			{
				// attack filter set, not matched
				$(this).removeClass( 'filterMatchedHero' );
				$(this).addClass( 'filterUnmatchedHero' );
				$('#filterName option[value="'+heroName+'"]').attr('disabled', true).css('color','#444444');
				g_rgDisabledHeroes.push( heroName );
			}
			else // empty or matched attack filter
			{
				if ( strRoleFilter != '' && $.inArray( strRoleFilter, g_rgHeroPickerData[heroName].roles ) == -1 )
				{
					// role filter set, not matched
					$(this).removeClass( 'filterMatchedHero' );
					$(this).addClass( 'filterUnmatchedHero' );
					$('#filterName option[value="'+heroName+'"]').attr('disabled', true).css('color','#444444');
					g_rgDisabledHeroes.push( heroName );
				}
				else // empty or matched role filter
				{
					if ( strNameFilter != '' && heroName != strNameFilter )
					{
						// name filter set, not matched
						$(this).removeClass( 'filterMatchedHero' );
						$(this).addClass( 'filterUnmatchedHero' );
						
						// if name filter is the only one active, don't disable the other names in the dropdown
						if ( strAttackFilter != '' || strRoleFilter != '' )
						{
							$('#filterName option[value="'+heroName+'"]').attr('disabled', true).css('color','#444444');
						}
						else
						{
							$('#filterName option[value="'+heroName+'"]').attr('disabled', false).css('color','#999999');
						}
						g_rgDisabledHeroes.push( heroName );
					}
					else
					{
						// filter matched
						$(this).removeClass( 'filterUnmatchedHero' );
						$(this).addClass( 'filterMatchedHero' );
						$('#filterName option[value="'+heroName+'"]').attr('disabled', false).css('color','#999999');
					}
				}
			}
		}
	);
	if ( $.inArray( strNameFilter, g_rgDisabledHeroes ) != -1 )
	{
		$('#filterName').prop( 'selectedIndex', 0 );
		return updateFilters();
	}
	
}

function BuildItemFullBoxHTML( iData )
{
	strHTML = '';
	strHTML += '<div id="itemTopRow">';
	if ( iData.created )
	{
		strHTML += '<div id="fullItemRecipeItems">';
		strHTML += '<div id="fullItemRecipeItemsTitle">Recipe:</div>';

		// Determine if the components add up to the total cost of the item. If not, it requires a recipe.
		var totalPrice = iData.cost;
		$.each( iData.components, function( i, iName ) {
			totalPrice -= g_rgItemData[iName].cost;
		});

		if ( totalPrice != 0 ) {
			strHTML += '<div style="cursor:pointer" itemname=recipe" class="floatRecipeImage itemIconWithTooltip recipeComponent"><img src="https://cdn.steamstatic.com/apps/dota2/images/items/recipe_lg.png" width="49" height="37" border="0" /></div>';
		}

		// Now, add the rest of the components
		$.each( iData.components,
			function( i, iName )
			{
				strHTML += '<div onClick="showItemInFullBox(\''+iName+'\', 1)" style="cursor:pointer" itemname="'+iName+'" class="floatRecipeImage itemIconWithTooltip recipeComponent"><img src="https://cdn.steamstatic.com/apps/dota2/images/items/'+iName+'_lg.png" width="49" height="37" border="0" /></div>';
			}
		);
		strHTML += '</div>';
	}
	strHTML += '<div class="itemName quality_'+iData.qual+'">'+iData.dname+'</div>';
	strHTML += '<div class="goldIcon"><img src="https://cdn.steamstatic.com/apps/dota2/images/tooltips/gold.png" width="25" height="17" border="0" /></div>';
	strHTML += '<div class="goldCost">'+iData.cost+'</div>';
	strHTML += '</div>';
	strHTML += '<div class="largeItemImg"><img src="https://cdn.steamstatic.com/apps/dota2/images/items/'+iData.img+'" width="182" height="138" border="0" /></div>';
	strHTML += '<div class="itemBoxDetails">';
	strHTML += '<div class="itemBoxHR"><img src="https://cdn.steamstatic.com/apps/dota2/images/heropedia/itembox_hr.png" width="646" height="1" border="0" /></div>';
	strHTML += '<div class="detailBoxCol detailBoxLore">'+iData.lore+'&nbsp;</div>';
	strHTML += '<div class="detailBoxCol detailBoxDesc">'+iData.desc+'&nbsp;</div>';
	strHTML += '<div class="detailBoxCol detailBoxAttribs">'+iData.attrib+'&nbsp;';
	if ( iData.mc || iData.cd )
	{
		strHTML += '<div class="cooldownMana">';
		if ( iData.mc )
		{
			strHTML += '<div class="mana"><img alt="Mana Cost" title="Mana Cost" class="manaImg" src="https://cdn.steamstatic.com/apps/dota2/images/tooltips/mana.png" width="22" height="22" border="0" />'+iData.mc+'</div>';
		}
		if ( iData.cd )
		{
			strHTML += '<img alt="Cooldown" title="Cooldown" class="cooldownImg" src="https://cdn.steamstatic.com/apps/dota2/images/tooltips/cooldown.png" width="22" height="22" border="0" />'+iData.cd+'<br clear="left" />';
		}
		strHTML += '<br clear="left" /></div>';
	}
	strHTML += '</div><br clear="left" /></div>';
	return strHTML;
}

function showItemInFullBox( itemName, bHideTooltip )
{
	if ( !g_bItemDataReady )
		return;

	if ( bHideTooltip ) // if clicking a recipe component in header box
	{
		$('#iconTooltip').hide();
	}
	
	iData = g_rgItemData[itemName];	
	$('#itemsHeader').html( BuildItemFullBoxHTML( iData ) );
	// setup hover handlers for components
	$('.recipeComponent').hover(
		// Mouse over
		function( e )
		{
			
			ShowTooltip( 'item', e.currentTarget, true );
		},
		// Mouse out
		function( e )
		{
			ShowTooltip( 'item', e.currentTarget, false );
		}
	);
	if ( iData.created )
	{
		$.each( iData.components, 
			function( i, iName )
			{
				$('#recipeitem_'+iName).hover( 
					// Mouse over
					function( e )
					{
						
						ShowTooltip( 'item', e.currentTarget, true );
					},
					// Mouse out
					function( e )
					{
						ShowTooltip( 'item', e.currentTarget, false );
					}
				);
			}
		);
	}
	
}



