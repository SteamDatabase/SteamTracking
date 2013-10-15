function popup( url, x, y, s, r ) 
{
	day = new Date();
	id = day.getTime();
	window.open(url, id, 'scrollbars=' + s + 'resizable=' + r + ',width=' + x + ',height=' + y);
}

function popup_id( url, x, y, id, s, r ) 
{
	day = new Date();
	window.open(url, id, 'scrollbars=' + s + 'resizable=' + r + ',width=' + x + ',height=' + y);
}

function HiLiteRow( id, color )
{
	document.getElementById(id).bgColor = color;
}

function clearSelect( select_id )
{
	var selected = document.getElementById( select_id );
	selected.selectedIndex = -1;
}

// Function to add a package to a cart, assumes form setup on the page
function addToCart( subid )
{
	try
	{
		document.forms['add_to_cart_'+subid].submit();
	}
	catch( e )
	{
			}
}

function addAllDlcToCart()
{
	try
	{
		document.forms['add_all_dlc_to_cart'].submit();
	}
	catch( e )
	{
	}
}

function removeFromCart( gid )
{
	try
	{
		document.getElementById('line_item_to_remove_gid').value = gid;
		document.forms['remove_line_item'].submit();
	} 
	catch( e )
	{
			}
}

function dropdownSelectOption( dropdownName, subId, inCart )
{
	try
	{
				$('add_to_cart_' + dropdownName + '_value').value = subId;
		$('add_to_cart_' + dropdownName + '_selected_text').innerHTML = $('add_to_cart_' + dropdownName + '_menu_option_' + subId).innerHTML;
		$('add_to_cart_' + dropdownName + '_description_text').innerHTML = $('add_to_cart_' + dropdownName + '_menu_option_description_' + subId).innerHTML;
		$('add_to_cart_' + dropdownName + '_add_button').style.display = inCart ? 'none' : 'block';
		$('add_to_cart_' + dropdownName + '_in_cart_button').style.display = inCart ? 'block' : 'none';
		HideMenu('add_to_cart_' + dropdownName + '_pulldown', 'add_to_cart_' + dropdownName + '_menu');
	}
	catch( e)
	{
			}
}

function dropdownAddToCart( dropdownName )
{
	try
	{
				if ($('add_to_cart_' + dropdownName + '_value').value == '')
		{
			 ShowMenu( $('add_to_cart_' + dropdownName + '_pulldown'), 'add_to_cart_' + dropdownName + '_menu' );
		}
		else
		{
			addToCart( dropdownName );
		}
	}
	catch( e)
	{
			}
}

