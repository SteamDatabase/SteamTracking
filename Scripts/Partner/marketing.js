var EFFECT_DURATION = 0.25;

function MsgRowOnMouseOverTB( msgRow, event )
{
	if (! msgRow.active )
	{
		if ( msgRow.effect ) msgRow.effect.cancel();
		if ( msgRow.tbeffect ) msgRow.tbeffect.cancel();
		msgRow.effect = new Effect.Highlight( msgRow, {startcolor: '#000000', endcolor: '#333333', restorecolor: '#333333', duration: EFFECT_DURATION} );
		msgRow.style.cursor = 'pointer';
		var downElement = $(msgRow).down('.toolbar_contents');
		if ( downElement )
		{
			msgRow.tbeffect = Effect.Appear( downElement, {duration: EFFECT_DURATION} );//style.visibility = 'visible';
		}
		msgRow.active = true;
	}
}

function MsgRowOnMouseOutTB( msgRow, event )
{
	if (!event) var event = window.event;
/*	var target = (window.event) ? event.srcElement : event.target;
	if (target != msgRow)
		return;*/

	// if the mouse is still over a child of the msgrow, then return (ie, mouseout from a child element
	var reltarget = (event.relatedTarget) ? event.relatedTarget : event.toElement;
	if ( reltarget && (reltarget == msgRow || $(reltarget).up('.msgrow') == msgRow ))
		return;

	if ( msgRow.active )
	{
		if ( msgRow.effect ) msgRow.effect.cancel();
		if ( msgRow.tbeffect ) msgRow.tbeffect.cancel();
		msgRow.effect = new Effect.Highlight( msgRow, {startcolor: '#333333', endcolor: '#000000', restorecolor: '#000000', duration: EFFECT_DURATION} );
		msgRow.style.cursor = null;
		var downElement = $(msgRow).down('.toolbar_contents');
		if ( downElement )
		{
			msgRow.tbeffect = Effect.Fade( downElement, {duration: EFFECT_DURATION} ) //.style.visibility = 'hidden';
		}
		msgRow.active = false;
	}
}

function MsgRowOnMouseOver( msgRow, event )
{
	if (! msgRow.active )
	{
		if ( msgRow.effect ) msgRow.effect.cancel();
		msgRow.effect = new Effect.Highlight( msgRow, {startcolor: '#000000', endcolor: '#333333', restorecolor: '#333333', duration: EFFECT_DURATION} );
		msgRow.active = true;
	}
}

function MsgRowOnMouseOut( msgRow, event )
{
	if (!event) var event = window.event;

	// if the mouse is still over a child of the msgrow, then return (ie, mouseout from a child element
	var reltarget = (event.relatedTarget) ? event.relatedTarget : event.toElement;
	if ( reltarget && (reltarget == msgRow || $(reltarget).up('.msgrow') == msgRow ))
		return;

	if ( msgRow.active )
	{
		if ( msgRow.effect ) msgRow.effect.cancel();
		msgRow.effect = new Effect.Highlight( msgRow, {startcolor: '#333333', endcolor: '#000000', restorecolor: '#000000', duration: EFFECT_DURATION} );
		msgRow.active = false;
	}
}

function MsgRowClick( url )
{
	window.location = url;
}

// Toolbar buttons are links, but we have to stop the event from propogating to the msgrow's onClick
function ToolBarClick( event )
{
	if ( !event ) var event = window.event;
	
	event.cancelBubble = true;
	if ( event.stopPropagation ) event.stopPropagation();
}

function TabSelect( tab, bNoXFade, bSubTab )
{
	var id = $(tab).id;
	var content = $(id + '_content');

	var parent = content.parentNode;
	if ( parent.id == 'secondary_tab_contents' )
		parent = $('all_tab_contents');
	
	// Find previous tab
	var last = $(parent).down('.active_content');
	if ( !last && parent.id == 'all_tab_contents' && $('secondary_tab_contents') )
		last = $('secondary_tab_contents').down('.active_content');
	
	// determine if in transition
	if ( (last && last.effect && last.effect.state != 'finished')
		|| (content && content.effect && content.effect.state != 'finished'))
		return false;
	
	// Set the new tab as active and store it in the form for posting
	$(tab).siblings().invoke( 'removeClassName', 'activetab')
	$(tab).addClassName( 'activetab' );
	if ( !bSubTab )
		$('activetab') && ( $( 'activetab' ).value = id );	
	
	if (last == content)
		return;
	
	// Set the content div for the tab as active
	$(parent).childElements().invoke( 'removeClassName', 'active_content');
	if ( parent.id == 'all_tab_contents' && $('secondary_tab_contents') )
		$('secondary_tab_contents').childElements().invoke( 'removeClassName', 'active_content');
	content.addClassName( 'active_content' );

	if (last && !bNoXFade)
	{
		XFade( content, last );
	}
	else
	{
		if ( last == content )
			return;
		if ( last )
			last.hide();
		content.show();
	}
	
}

var TAB_XFADE_DURATION = 0.2;
// Crossfade from div 'last' to div 'content'
// only makes sense if both are children of a common parent div (or otherwise adjacent in the dom)
// There is a brief moment where neither div is in the flow- recommended that these divs be children of a fixed-height div
function XFade( content, last )
{
	if (last == content )
		return;
	if ( last )
	{
		if ( last.effect ) last.effect.cancel();
		last.style.display='block';
		Element.absolutize( last );
		last.effect = Effect.Fade( last, {duration: TAB_XFADE_DURATION} );
	}
	if ( content.effect ) content.effect.cancel();
	content.style.display='none';
	content.style.position = 'static';
	content.style.width = '';
	content.style.height = '';
	content.effect = Effect.Appear( content, {duration: TAB_XFADE_DURATION } );
}

// Finds a visible sibling of the target div and hides it, makes the target div visible
function ModalSelect( targetDiv )
{
	$(targetDiv).siblings().invoke( 'hide' );
	$(targetDiv).show();
}

// When a user has selected a value in an autoselect, find the key corresponding to it and
// stores it in the form.  Also fires any onchange event declared for the target input element
function AutocompleteHandler( targetInput, rgKeyValues, selectedValue )
{
	var newID = "";
	var value = selectedValue.value;
	for (var key in rgKeyValues)
	{
		if (value == rgKeyValues[key])
		{
			newID=key;
			break;
		} 
	}
	var target = $(targetInput);
	target.value=newID;
	if ( target.onchange )
		target.onchange();
}

function AjaxAutocompleteHandler( targetInput, selectedElement )
{
	var matches = $(selectedElement).id.match( /[^_]*$/ );
	if ( matches && matches[0] )
	{
		var target = $(targetInput);
		target.value = matches[0];
		if ( target.onchange )
			target.onchange();
	}
	else if ( $(selectedElement).id == "" )
	{
		var target = $(targetInput);
		target.value = $(selectedElement).innerHTML;
		if ( target.onchange )
			target.onchange();
	}
}

function AutocompleteHandlerClosure( targetInput, rgKeyValues )
{
	var closure_targetInput = targetInput;
	var closure_rgKeyValues = rgKeyValues;
	return function(element, selectedElement) {
		AutocompleteHandler( closure_targetInput, closure_rgKeyValues, element );
	};
}

function AjaxAutocompleteHandlerClosure( targetInput )
{
	var closure_targetInput = targetInput;
	return function(element, selectedElement) {
		AjaxAutocompleteHandler( closure_targetInput, selectedElement );
	};
}


function AutocompleteHandlerSetKV( targetInput, rgKeyValues )
{
	var closure_targetInput = targetInput;
	var closure_rgKeyValues = rgKeyValues;
	return function(element, selectedElement) {
		var newID = "";
		var key = element.value;
		if ( key && closure_rgKeyValues[key] )
			value = closure_rgKeyValues[key];
		else
			value = '';

		var target = $(closure_targetInput);
		target.value=value;
		if ( target.onchange )
			target.onchange();
	};
}

// A one-time on focus event to clear out any existing value
function AutocompleteOnFocus( input )
{
	input.value='';
	input.onfocus='';
}

// Takes a hash of fields and values to set and posts them to the server.
function SubmitQuickMessageUpdate( rgFields )
{
	var updateForm = $('quick_message_update');
	if ( $('activetab') )
		updateForm.appendChild( new Element('input', {type: 'hidden', name: 'activetab', value: $('activetab').value}));
	for (var key in rgFields )
	{
		updateForm.appendChild( new Element( 'input', {type: 'hidden', name: key, value: rgFields[key]} ) );
	}
	updateForm.submit();
}

// Submits an "ArraySwap" update, used by game admin to reorder entries in the keyvalue map
function ArraySwap( path, src, target )
{
	SubmitQuickMessageUpdate( {'ArraySwap[Array]': path, 'ArraySwap[src]': src, 'ArraySwap[target]': target } );
}

// Posts small change for store app data to server
function SubmitQuickMessageUpdateAjax( url, params, completeCallback )
{
	// ensure session ID is present
	if ( !( 'sessionid' in params ) ) {
		params[ 'sessionid' ] = g_sessionID;
	}

	new Ajax.Request( url, {
		method: 'post',
		requestHeaders: { 'Accept': 'application/json' },
		parameters: params,
		onSuccess: function( transport )
		{
			var results = transport.responseJSON;
			if ( results && results.success )
			{
				if ( completeCallback )
					completeCallback( true );
			}
		},
		onFailure: function( transport )
		{
			if ( completeCallback )
				completeCallback( false );
		}
	});
}

// Submits an ajax array swap
function ArraySwapAjax( url, path, src, target, completeCallback )
{
	SubmitQuickMessageUpdateAjax( url, {
		'ArraySwap[Array]': path,
		'ArraySwap[src]': src,
		'ArraySwap[target]': target,
		'sessionid': g_sessionID },
			completeCallback );
}

// Adds the passed Array of values to a comma seperated list in input target
function AddToList( target, values )
{
	var currentValues = $(target).value.split(',');
	currentValues = currentValues.without('');
	$(target).value = currentValues.concat(values).uniq().join(',');
}

// Finds an input field and highlights it, changing tab if necessary
function HighlightInput( inputName )
{
	var input = $(inputName + '_entry');
	if ( ! input )
	{
		var form = $('messageform');
		input = form[inputName];
	}
	if ( ! input )
		return;
	/* See if this looks like a radio input */
	if (  input.length && input.length > 0  && input[0].type=='radio'  )
		input = input[0].parentNode;
	
	/* find the tab the input is on */
	var tab = $(input).up('.tab_content');
	if ( tab && tab.id )
	{
		var tabName = tab.id;
		/* remove "_content" */
		tabName = tabName.substring(0, tabName.length - 8);
		TabSelect( tabName );
	}
	var tabeffect = Effect.Queue.effects.length > 0 ? Effect.Queue.effects[0] : false;  
	new Effect.Highlight( input, {endcolor: '#262626', queue: 'end' } );	
	if ( tabeffect )
	{
		// need to wait until after tab transition to scroll
		tabeffect.options.afterFinish = function() { Effect.ScrollTo(input, {offset: -200, duration: .5} ); };
	}
	else
	{
		Effect.ScrollTo(input, {offset: -200, duration: .5} );
	}
}

//Helper method to grab a value of the messageform, including radio button handling
function GetFormValue( inputName )
{
	var input = $('messageform')[ inputName ];
	if ( input && input.length && input.length > 0  && input[0].type=='radio' )
	{
		//radio buttons
		input = $A(input).find( function ( r ) { return r.checked; } );
	}
	if ( input )
		return $F( input );
	else
		return null;
}

// User has changed associated app/package, request restrictions/etc from server
function OnAssociationChange()
{
	var associationType = GetFormValue( 'message[associationtype]' );
	var hashParams = { 
			associationType: 	associationType,
			association:  		GetFormValue( 'association_' + associationType ),
			messageType:		GetFormValue( 'message[marketingmessagetype]' )
	};
	new Ajax.Request(szBaseUrl + '/marketing/fetchmessageassociationdefaults', {
		method: 'get',
		requestHeaders: { 'Accept': 'application/json' },
		parameters: hashParams,
		onSuccess: function( transport )
		{
			var results = transport.responseJSON;
			if ( results )
			{
				ReadAssociationValues( results );
			}
		}
	});
}

function ClearMustLaunchApp()
{
	$('messageform')[ 'message[musthavelaunchedappid]' ].value = '';
	$('message[musthavelaunchedappid]_compl').value = '';
}

//server has replied with restrictions for the new association
function ReadAssociationValues( json )
{
	var hash = $H(json);

	var mustOwnType = 'none';
	if ( hash.get('message[mustownappid]') != '' )
		mustOwnType = 'app';
	else if ( hash.get('message[mustownpackageid]') != '' )
		mustOwnType = 'package';

	SelectRestrictionType( 'mustown', mustOwnType );

	var mustNotOwnType = 'none';
	if ( hash.get('message[mustnotownappid]') != '' )
		mustNotOwnType = 'app';
	else if ( hash.get('message[mustnotownpackageid]') != '' )
		mustNotOwnType = 'package';

	SelectRestrictionType( 'mustnotown', mustNotOwnType );
	
	hash.each( function( entry ) {	if ( $('messageform')[entry.key] ) $('messageform')[entry.key].value = entry.value; } );
	
	if ( $('ownership_restrictions_override').checked )
	{
		$('ownership_restrictions_override').checked=false;
		$('ownership_restrictions_override').onclick();
	}
	UpdateRestrictionDescription();
	
	if ( hash.get('message[platformmac]') )
		SetFancyCheckboxChecked( 'checkbox_message_platformmac_' );
	else
		SetFancyCheckboxUnchecked( 'checkbox_message_platformmac_' );
	
	if ( hash.get('message[platformwindows]') )
		SetFancyCheckboxChecked( 'checkbox_message_platformwindows_' );
	else
		SetFancyCheckboxUnchecked( 'checkbox_message_platformwindows_' );

	if ( hash.get('message[platformlinux]') )
		SetFancyCheckboxChecked( 'checkbox_message_platformlinux_' );
	else
		SetFancyCheckboxUnchecked( 'checkbox_message_platformlinux_' );
}

// helper for selecting one of the restriction radio buttons and making sure the correct
// div gets displayed (which would normally happen in onchange)
function SelectRestrictionType( type, subtype )
{
	var radios = $('messageform')[type + 'type'];
	$A(radios).each( function (r) { r.checked = ( r.value == subtype ); } );
	ModalSelect( type + '_' + subtype );
}

// Creates a displayable string based on current restrictions
function UpdateRestrictionDescription()
{
	var mustOwnType = GetFormValue('mustowntype');
	var mustNotOwnType = GetFormValue('mustnotowntype');
	
	if ( mustOwnType == 'app' && GetFormValue('message[mustownappid]') )
	{
		SetRestrictionDescription( 'Must own: ', $('message_mustownappid__compl').value );
	}
	else if ( mustOwnType == 'package' && GetFormValue('message[mustownpackageid]') )
	{
		SetRestrictionDescription( 'Must own: ', $('message_mustownpackageid__compl').value );
	}
	else if ( mustNotOwnType == 'app' && GetFormValue('message[mustnotownappid]') )
	{
		SetRestrictionDescription( 'Must not own: ', $('message_mustnotownappid__compl').value );
	}
	else if ( mustNotOwnType == 'package' && GetFormValue('message[mustnotownpackageid]') )
	{
		SetRestrictionDescription( 'Must not own: ', $('message_mustnotownpackageid__compl').value );
	}
	else
		SetRestrictionDescription( 'No ownership restrictions.', '');
}

// Helper method to set two divs (prefix div is styled bold)
function SetRestrictionDescription( prefix, text )
{
	$('ownership_restriction_desc_prefix').update( prefix );
	$('ownership_restriction_desc_text').update( text );
}

// Open a marketing message-sized popup window with the url.
// If a marketing message window is already open, will reuse and bring to front
function MarketingMessagePopup( url )
{
	var win = window.open(url,'marketing_message','height=584,width=616,resize=yes,scrollbars=yes');
	win.focus();
}

function ScreenshotPopup( url )
{
	var win = window.open(url,'screenshot_preview','height=616,width=816,resize=yes,scrollbars=yes');
	win.focus();
}

/*
// [ONA] Commented as it is not used and is creating a Javascript error as the class Template is not defined.
// Prototype Template for creating new titles on EJK messages
var TitleLanguageTemplate = new Template(''
		+'<div class="formrow">'
		+'	<div class="formlabelwide">#{langDescription} title:</div>'
		+'	<div class="formdata">'
		+'		<div></div>'
		+'		<input type="text" name="template[ll_title][#{langCode}]" size="65" />'
		+'	</div>'
		+'	<div style="clear: both;"></div>'
		+'</div>'	
	);

// Create a new input field for the language the user selected
function AddAdditionalTitleLanguage( selectInput )
{
	var langCode = $(selectInput).value;
	var option = $(selectInput).down('option[value=' + langCode + ']');
	var langDescription = option.innerHTML;
	
	option.remove();
	
	var template = TitleLanguageTemplate.evaluate( { langCode: langCode, langDescription: langDescription } );
	var div = new Element('div', {style: 'display: none;' }).update(template);
	$('template[ll_title]_entry').appendChild( div );
	Effect.BlindDown(div, {duration: 0.25});
}
*/

// Create a new content input text area for the language the user has selected
//   (unlike title input, these text areas are already present in the page but hidden, just displays it)
function AddAdditionalContentLanguage( selectInput, contentName )
{
	var langCode = $(selectInput).value;
	var option = $(selectInput).down('option[value=' + langCode + ']');
	var langDescription = option.innerHTML;
	
	option.remove(); //Don't allow them to select this language again

	var content = $(contentName + '[' + langCode + ']_container');
	
	// move content to end of parent div so it appears where the user's focus is
	$(contentName + '_entry').appendChild( content.remove() );  
	Effect.BlindDown(content, {duration: 0.25} );
}

function ToggleCheckbox( id )
{
	var input = $(id + '_input');
	var cb = $(id);
	var bChecked = false;
	if ( input.type == 'checkbox' )
		bChecked = input.checked;
	else
		bChecked = input.value && input.value != "false"; 
	
	if ( bChecked )
	{
		SetFancyCheckboxUnchecked( id );
	}
	else
	{
		SetFancyCheckboxChecked( id );
	}
}

function SetFancyCheckboxChecked( id )
{
	var input = $(id + '_input');
	if ( input.disabled )
		return;

	if ( input.type == 'checkbox' )
		input.checked = true;
	else
		input.value = "true";
	
	$(id + '_checked').show();
	$(id + '_unchecked').hide();
	
	if ( input.onchange )
		input.onchange();	
}

function SetFancyCheckboxUnchecked( id )
{
	var input = $(id + '_input');
	if ( input.disabled )
		return;

	if ( input.type == 'checkbox' )
		input.checked = false;
	else
		input.value = "";
	$(id + '_checked').hide();
	$(id + '_unchecked').show();
	
	if ( input.onchange )
		input.onchange();	
}

function SetFancyCheckboxEnabled( id, enable )
{
	var opacity = enable ? 1 : 0.25;
	var input = $(id + '_input');
	if ( enable )
		input.enable();
	else
		input.disable();

	$(id ).setOpacity( opacity );
}

function GetFancyCheckboxState( id )
{
	var input = $(id + '_input');
	var bChecked = false;
	if ( input.type == 'checkbox' )
		bChecked = (input.checked);
	else
		bChecked = (input.value == "true" || input.value == "1");

	return bChecked;
}


function ToggleInputEnabled( id, enable )
{
	var input = $(id);
	if ( enable )
	{
		input.enable();
		input.setOpacity( 1 );
	}
	else
	{
		input.disable();
		input.setOpacity( 0.25 );
	}
}

function SetImageSrc( id, url )
{
	$(id).src=url;
}

function AddCountryOffsitePurchaseLink( country, name, url )
{
	var $optionsTable = $J( '#offsite_purchase_options_table' );
	country = country.toLowerCase();

	var newRow = '<tr id="offsite_purchase_options_' + country + '">';
	newRow += '<td>' + country.toUpperCase() + '</td>';
	newRow += '<td><input type="text" style="width:400px;" name="app[content][offsite_purchase][countries][' + country + '][name]" value="' + name + '"></td>';
	newRow += '<td><input type="text" style="width:400px;" name="app[content][offsite_purchase][countries][' + country + '][url]" value="' + url + '"></td>';
	newRow += '<td><span tabindex="0" style="cursor: pointer;" class="icon icon_delete" onkeypress="if (event.keyCode==13) $J( this ).click();" onclick="var row = $J( \'#offsite_purchase_options_' + country + '\' ); row.find(\'input\').val(\'\'); row.hide(); row.attr(\'id\', \'\');"></span></td>';
	newRow += '</tr>';
	$J( '#offsite_purchase_options_addnew' ).before( newRow );
}

