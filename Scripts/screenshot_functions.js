
var screenshots = [];

// maps appid to # of screenshots not displayed
var remainders = {};
function setRemainderCount( appid, count ) {
	remainders[appid] = count;
}

function _sortScreenshotsByMap( map ) {
	var parent = $('screenshot_list');
	parent.childElements().each( Element.remove );

	for ( var key in map ) {
		var div = new Element('div');
		div.setStyle({ clear: "left" });
		if ( key.length > 0 ) {
			div.insert( '<div class="hr_ss"><div class="hr_title">' + key + '</div><img src="https://steamcommunity-a.akamaihd.net/public/images/skin_1/hr_ss.png" width="895" height="11" border="0" /></div>' );
		}

		var list = map[key];
		list.each(function(screenshot){
			div.insert(screenshot.el);
		});

		var appid = list[0].appid;
		var appcountkey = 'app_' + appid;
		/*
		if( g_rgScreenshotCountByApp[appcountkey] ) {
			var remaining = g_rgScreenshotCountByApp[appcountkey] - list.length;
			if ( remaining > 0 )
			{
				var currentParams = window.location.search.toQueryParams();

				var query = {
					filter: appcountkey,
					tab: currentParams.tab
				};

				var remaindertext = '%d more screenshots';
				remaindertext = remaindertext.replace("%d", remaining);
				div.insert( '<div class="screenshot_thumb_area morelink"><a href="?' + Object.toQueryString(query) + '">' +  remaindertext + '</a></div>' );
			}
		}
		*/
		parent.insert(div);
	}
}

function setScreenshotViewGrid() {
	_sortScreenshotsByMap({ "" : screenshots });
}

function setScreenshotViewByApp() {

	var map = {};
	screenshots.each(function(screenshot){
		if ( !map[screenshot.appname] ) {
			map[screenshot.appname] = [screenshot];
		} else {
			map[screenshot.appname].push( screenshot );
		}
	});

	_sortScreenshotsByMap( map );
}

function setScreenshotViewByDay() {

	var map = {};
	screenshots.each(function(screenshot){
		var d = screenshot.datecreated;
		if ( !map[d] ) {
			map[d] = [screenshot];
		} else {
			map[d].push( screenshot );
		}
	});

	_sortScreenshotsByMap( map );
}


function findScreenshotById( screenshotid ) {
	var rv = null;
	screenshots.each(function(screenshot){
		if ( screenshot.id == screenshotid ) {
			rv = screenshot;
		}
	});
	return rv;
}

var _screenshotHoverId = null;
var _screenshotHoverTimer = null;
function screenshotStopHover() {
	if ( _screenshotHoverTimer ) {
		clearTimeout( _screenshotHoverTimer );
		_screenshotHoverTimer = null;
	}
}

function screenshotStartHover(screenshotid) {
	screenshotStopHover();
	_screenshotHoverId = screenshotid;

	if (  $("screenshot_editor").visible() && !$('screenshot_editor_published').visible() ) {
		// If the editor is already visible, then just switch immediately
		// if they haven't typed anything, and don't switch at all
		// if they have.
		if ( screenshot_editor_locked )
			return;
		var input = $('screenshot_editor_caption_input');
		if ( input.visible() && input.value!="" ) {
			return;
		} else {
			screenshotOnHover();
		}
	} else {
		// If the editor is not visible, wait for the hover threshold to show it.
		_screenshotHoverTimer = setTimeout( screenshotOnHover, 150 );
	}
}

function screenshotOnHover() {
	var screenshot = findScreenshotById( _screenshotHoverId );
	if ( screenshot ) {
		setScreenshotEditor( screenshot );
	}
}

function screenshotUpdateCharsLeft() {
	
	var charsallowed = 140;

	var text = '%d characters left';
	if ( $('screenshot_editor_caption_input').value == currentHoverSSCaption )
	{
		var charsleft = charsallowed;
	}
	else
	{
		var charsleft = charsallowed - $('screenshot_editor_caption_input').value.length;
	}
	text = text.replace("%d", charsleft);

	var el = $('screenshot_editor_chars_left');
	el.innerHTML = text;
	if ( $('screenshot_editor_caption_input').value == currentHoverSSCaption )
	{
		toggleCancelDeleteCharCount( false );
		return;
	}
	toggleCancelDeleteCharCount( true );

	if ( charsleft < 0 ) {
		el.addClassName('too_many_chars');
	} else {
		el.removeClassName('too_many_chars');
	}

}

function screenshotEditorMouseOut(event) {
	if ( bEnableEdit && ( screenshot_editor_locked || ( $('screenshot_editor_caption_input').value != '' && $('screenshot_editor_caption_input').value != currentHoverSSCaption ) ) )
		return;
	var toElement = event.toElement || event.relatedTarget;

	var ed = $('screenshot_editor');
	if ( !toElement || !getGoodElement( $(toElement), 'div', 'screenshotEditor', 0 ) )
	{
		ed.hide();
	}
}

document.observe( 'scroll', 
	function() 
	{ 
		if ( $('screenshot_editor_caption_input') )
		{
			if ( screenshot_editor_locked || ( $('screenshot_editor_caption_input').value != '' && $('screenshot_editor_caption_input').value != currentHoverSSCaption ) )
				return;
			$('screenshot_editor').hide();
		}
	} 
);

var screenshot_editor_caption_input_default_str = 'Add a caption';
var screenshot_editor_locked = false;
function checkEditorCaptionInput( focusorblur )
{
	el = $('screenshot_editor_caption_input');
	if ( focusorblur == 'f' )
	{
		if ( el.value == screenshot_editor_caption_input_default_str )
		{
			el.value = '';
		}
		screenshot_editor_locked = true;
		toggleCancelDeleteCharCount( true );
		screenshotUpdateCharsLeft();
	}
	else if ( focusorblur == 'b' )
	{
		if ( ( el.value == '' && currentHoverSSCaption == screenshot_editor_caption_input_default_str ) || el.value == currentHoverSSCaption )
		{
			el.value = currentHoverSSCaption;
			toggleCancelDeleteCharCount( false );
		}
		screenshot_editor_locked = false;
	}
}

function toggleCancelDeleteCharCount( bShowCancel )
{
	if ( bShowCancel )
	{
		$('screenshot_editor_cancel_button').show();
		$('screenshot_editor_chars_left').show();
		$('screenshot_editor_delete_button').hide();
	}
	else
	{
		$('screenshot_editor_cancel_button').hide();
		$('screenshot_editor_chars_left').hide();
		$('screenshot_editor_delete_button').show();
		screenshot_editor_locked = false;
	}
}
var currentHoverSSVisibility = '';
var currentHoverSSCaption = '';

function checkEditorState( returnState )
{
	screenshotUpdateCharsLeft();
	bIsChanged = false;
	if ( $('screenshot_editor_caption_input').value != currentHoverSSCaption && !( $('screenshot_editor_caption_input').value == '' && currentHoverSSCaption == screenshot_editor_caption_input_default_str ) )
	{
		bIsChanged = true;
	}
	if ( $('screenshot_visibility_select').selectedIndex != currentHoverSSVisibility )
	{
		bIsChanged = true;
	}
	if ( returnState )
		return bIsChanged;
	if ( bIsChanged ) 
	{
		$('screenshot_editor_save_button').addClassName( 'btn_green' );
		$('screenshot_editor_save_button').removeClassName( 'btn_inactive' );
	}
	else
	{
		$('screenshot_editor_save_button').addClassName( 'btn_inactive' );
		$('screenshot_editor_save_button').removeClassName( 'btn_green' );
	}
}

function setScreenshotEditor( screenshot ) {

	//setShareVariables( screenshot.link, screenshot.caption, screenshot.caption );

	// Never show the editor while in the 'managing' UI.
	if ( $('manage_screenshot_area') && $('manage_screenshot_area').visible() ) {
		return;
	}

	$('screenshot_editor_link').writeAttribute('href', screenshot.link);
	$('screenshot_editor_game').innerHTML = screenshot.appname.escapeHTML();
	$('screenshot_editor_date').innerHTML = screenshot.datecreated;
	$('screenshot_editor_width').innerHTML = screenshot.width;
	$('screenshot_editor_height').innerHTML = screenshot.height;
	$('screenshot_editor_screenshotid').value = screenshot.id;
	if ( !bEnableEdit )
	{
		$('screenshot_visibility_setting').hide();
		if ( screenshot.caption != '' )
		{
			$('screenshot_published_caption').innerHTML = screenshot.caption.escapeHTML();
			$('screenshot_published_caption').show();
		}
		else
		{
			$('screenshot_published_caption').hide();
		}
		$('screenshot_editor_published').show();
		$('screenshot_editor_unpublished').hide();
	}
	else
	{
		$('screenshot_editor_unpublished').show();
		$('screenshot_visibility_setting').show();
		currentHoverSSCaption = ( screenshot.caption != '' ? screenshot.caption : screenshot_editor_caption_input_default_str );
		selIndex = ( screenshot.privacy == 'public' ? 0 : ( screenshot.privacy == 'friendsonly' ? 1 : 2 ) );
		currentHoverSSVisibility = selIndex;
		$('screenshot_visibility_select').selectedIndex = selIndex;
		$('screenshot_editor_caption_input').value = currentHoverSSCaption;
		toggleCancelDeleteCharCount( false );
		checkEditorState();
	}

	var img = $('screenshot_editor_thumbnail');
	img.writeAttribute('src', screenshot.thumburl);
	img.writeAttribute('width', 288);
	img.writeAttribute('height', screenshot.height * 288 / screenshot.width);
	
	var el = screenshot.el;
	var offset = el.cumulativeOffset();
	var center_x = offset.left + el.getWidth()/2;
	var center_y = offset.top + el.getHeight()/2;

	var ed = $('screenshot_editor');
	var leftpos = center_x-ed.getWidth()/2;
	var rightedge = document.viewport.getDimensions().width;
	if ( leftpos < 1 )
	{
		leftpos = 1;
	}
	else if ( ( leftpos + ed.getWidth() + 8 ) > rightedge ) //+8px for scrollbar allowance
	{
		leftpos = rightedge - ed.getWidth() - 8;
	}
	bottom_px = center_y + ed.getHeight() / 2;
	top_px = center_y - ed.getHeight() / 2;
	scrollTop = document.viewport.getScrollOffsets().top;
	scrollBottom = document.viewport.getDimensions().height + scrollTop;
	topDiff = 0;
	botDiff = 0;
	if ( top_px < scrollTop )
	{
		topDiff = scrollTop - top_px;
	}
	if ( bottom_px > scrollBottom )
	{
		botDiff = bottom_px - scrollBottom;
	}
	if ( topDiff || botDiff )
	{
		if ( topDiff > botDiff )
		{
			top_px = scrollTop;
		}
		else
		{
			top_px = scrollBottom - ed.getHeight() - 5;
		}
	}
	
	ed.setStyle({ 
		left: leftpos+"px",
		top: top_px+"px"
	});
	ed.show();
}

var batchCount = 0;
var originalDeleteText = null;
function screenshotUpdateBatchCount() {
	var checked = 0;
	$$('.screenshot_checkbox').each(function(checkbox){
		if(checkbox.checked) {
			++checked;
		}
	});
	var button = $('button_manage_submit');
	var linkText = 'Delete screenshot';
	var replaceText = linkText + ( batchCount > 0 ? ' (' + batchCount + ')' : '' );
	batchCount = checked;
	var deleteLink = $('button_submit_manage');
	deleteLink.innerHTML = deleteLink.innerHTML.replace( replaceText, ( batchCount ? linkText + ' (' + batchCount + ')' : linkText ) );
}

function confirmBatchAction( action )
{
	if ( batchCount )
	{
		$('batchformaction').value = action;
		if ( batchCount == 1 )
		{
			countText = '1 ' + 'item';
		}
		else
		{
			countText = batchCount + ' ' + 'items';
		}
		$$('.ss_batch_count').each( function(c) { c.innerHTML = countText; } );
		if ( action == 'delete' )
		{
			$('batchModal_h1_privacy').hide();
			$('modalWarningText_privacy').hide();
			$('batchModal_h1_delete').show();
			$('modalWarningText_delete').show();
		}
		else
		{
			if ( action == 'public' )
			{
				$('batchModalPrivacyType').innerHTML = 'Public';
			}
			else if ( action == 'friendsonly' )
			{
				$('batchModalPrivacyType').innerHTML = 'Friends Only';
			}
			else if ( action == 'private' )
			{
				$('batchModalPrivacyType').innerHTML = 'Private';
			}
			$('batchModal_h1_delete').hide();
			$('modalWarningText_delete').hide();
			$('batchModal_h1_privacy').show();
			$('modalWarningText_privacy').show();
		}
		showModal( 'confirmBatchModal' );
	}
	else
	{
		showModal( 'noSelectedShotsModal' );
	}
}

function registerCheckboxClick( href_id, bToggle )
{
	screenshotid = href_id.replace( /thumb_link_/, '' );
	cb = $('screenshot_checkbox_'+screenshotid);
	bChecked = bToggle ? cb.checked : !cb.checked;
	if ( bChecked )
	{
		cb.checked = false;
		$(href_id).removeClassName( 'thumb_link_checked' );
	}
	else
	{
		cb.checked = true;
		$(href_id).addClassName( 'thumb_link_checked' );
	}
	screenshotUpdateBatchCount();
}

var highlightedThumb = false;
function setManagingScreenshots( managing ) {
 
	// Reset the state of the checkboxes/delete button.
	$$('.screenshot_checkbox').each(function(checkbox){ 
		checkbox.checked = false;
		if ( managing )
		{
			checkbox.observe( 'mouseover',
				function(event)
				{
					if ( highlightedThumb )
					{
						$(highlightedThumb).removeClassName( 'thumb_link_manage_hover' );
						highlightedThumb = false;
					}
					anchor = $('thumb_link_' + this.id.replace( /screenshot_checkbox_/, '' ));
					if ( anchor.hasClassName('thumb_link_checked') )
					{
						return;
					}
					else
					{
						anchor.addClassName( 'thumb_link_manage_hover' );
						highlightedThumb = anchor.id;
					}
				}
			);
			checkbox.observe( 'mouseoout',
				function(event)
				{
					anchor = $('thumb_link_' + this.id.replace( /screenshot_checkbox_/, '' ));
					anchor.removeClassName( 'thumb_link_manage_hover' );
					highlightedThumb = false;
				}
			);
		}
		else
		{
			checkbox.stopObserving( 'mouseout' );
			checkbox.stopObserving( 'mouseover' );
		}
	});
	if ( originalDeleteText ) {
		$('button_manage_submit').value = originalDeleteText;
	}

	// Toggle showing either checkboxes or commentcount
	$$('.screenshot_checkbox').each( managing ? Element.show : Element.hide );


	// Override links when managing 
	$$('.screenshot_thumb_link').each(function(link){
		if ( managing ) {
			link.stopObserving( 'click' );
			link.observe( 'click', 
				function(event) 
				{
					registerCheckboxClick( this.id, 1 );
					event.stop();
				}
			);
			link.observe( 'mouseover',
				function(event)
				{
					if ( highlightedThumb )
					{
						$(highlightedThumb).removeClassName( 'thumb_link_manage_hover' );
						highlightedThumb = false;
					}
					if ( this.hasClassName( 'thumb_link_checked' ) )
					{
						return;
					}
					else
					{
						this.addClassName( 'thumb_link_manage_hover' );
						highlightedThumb = this.id;
					}
				}
			);
			link.observe( 'mouseout',
				function(event)
				{
					this.removeClassName( 'thumb_link_manage_hover' );
					highlightedThumb = false;
				}
			);
			link.setStyle({cursor: 'default'});
		}
		else 
		{
			link.removeClassName( 'thumb_link_checked' );
			link.stopObserving( 'click' );
			link.stopObserving( 'mouseout' );
			link.stopObserving( 'mouseover' );
			link.setStyle({cursor: ''});
		}
	});

	// Hide or show the managament UI.
	if ( managing ) {
		$('screenshot_editor').hide();
		$('manage_screenshot_area').show();
		$('manage_start_button').hide();
		$('manage_cancel_button').show();
		$('manage_screenshots_link').addClassName( 'manage_screenshots_link_on' );
	} else {
		$('manage_screenshot_area').hide();
		$('manage_cancel_button').hide();
		$('manage_start_button').show();
		$('manage_screenshots_link').removeClassName( 'manage_screenshots_link_on' );
	}
}

function addScreenshot( screenshot ) {
	// For convenience
	screenshot.datecreated = (new Date(screenshot.timecreated*1000)).toLocaleDateString();
	screenshot.el = $('screenshot_' + screenshot.id);
	screenshots.push( screenshot );
}

function setSharability()
{
	if ( currentSSVisibility != 'public' )
	{
		$$('.share_link').each( function( slink )
			{
				slink.setAttribute( 'onclick', 'return false' );
				slink.observe( 'click', function( event ) { showModal( 'changeVisibilityModal' ) } );
			}
		);
	}
	else
	{
		$$('.share_link').each( function( slink )
			{
				slink.setAttribute( 'onclick', 'return true' );
				slink.stopObserving( 'click' );
			}
		);
	}
}

function updateVisibilityOrCaption( visOrCaption )
{
	var successFunc = function(response)
	{
		caption = response.responseJSON.caption;
		privacy = response.responseJSON.privacy;
		if ( privacy != null )
		{
			$('ss_vis_public').checked = false;
			$('ss_vis_friendsonly').checked = false;
			$('ss_vis_private').checked = false;
			$('ss_vis_' + privacy).checked = true;
			pstr = ( privacy == 'public' ? 'Public' : ( privacy == 'friendsonly' ? 'Friends Only' : 'Private' ) );
			$('current_visibility').innerHTML = pstr;
			currentSSVisibility = privacy;
			hideModal('changeVisibilityModal');
			setSharability();
		}
		else
		{
			cstr = ( caption ? caption : '' );
			cstr = caption.replace( /</, '&lt;' );
			cstr = cstr.replace( />/, '&gt;' );
			$('full_caption').innerHTML = cstr;
			ToggleCaptionEntryForm( false );
		}
		if ( response.responseJSON.bPrivacyFailedUnreleased !== null && response.responseJSON.bPrivacyFailedUnreleased == 1 )
		{
			hideModal('changeVisibilityModal');
			showModal( 'privacyFailedModal' );
		}
	};
	var failFunc = function(response){
		if ( response.responseJSON.bPrivacyFailedUnreleased !== null && response.responseJSON.bPrivacyFailedUnreleased == 1 )
		{
			hideModal('changeVisibilityModal');
			showModal( 'privacyFailedModal' );
		}
		return;
	}
	if ( visOrCaption == 'vis' )
	{
		form = $('updatevisibilityform');
	}
	else if ( visOrCaption == 'caption' )
	{
		form = $('updatecaptionform');
	}
	form.request({
		onSuccess: function(response){ 
			response.responseJSON.success ? successFunc(response) : failFunc(response);
		},
		onFailure: failFunc 
	});
}
		

function saveScreenshotDetails( bDelete ) {
	if ( !bDelete && !checkEditorState( true ) )
	{
		return;
	}
	var screenshot = findScreenshotById( _screenshotHoverId );
	var successFunc = function(response){
		screenshot = findScreenshotById( response.responseJSON.screenshotid );
		if ( response.responseJSON.isdelete )
		{
			location.reload( true );
			return;
		}
		newPrivacy = response.responseJSON.privacy;
		if ( screenshot.privacy != newPrivacy && current_tab != 'all' )	
		{
			location.reload( true );
			return;
		}
		screenshot.privacy = newPrivacy;
		screenshot.caption = response.responseJSON.caption;
		$('screenshot_editor').hide();
	};

	var failFunc =  function(response){
		$('screenshot_editor').hide();
		if ( response.responseJSON.bPrivacyFailedUnreleased !== null && response.responseJSON.bPrivacyFailedUnreleased == 1 )
		{
			showModal( 'privacyFailedModal' );
		}
	};

	if ( screenshot ) {
		if ( bDelete )
		{
			$('screenshot_editor_delete').value = 1;
		}
		if ( $('screenshot_editor_caption_input').value == screenshot_editor_caption_input_default_str )
		{
			$('screenshot_editor_caption_input').value = '';
		}
		var form = $('updateform');
		form.request({
			onSuccess: function(response){ 
				response.responseJSON.success ? successFunc(response) : failFunc(response);
			},
			onFailure: failFunc 
		});
	}
}

function ToggleCaptionEntryForm( bShowForm )
{
	currentCaption = $('full_caption').innerHTML;
	if ( bShowForm )
	{
		$('captionaddlink').hide();
		$('captioneditlink').hide();
		$('full_caption').hide();
		$('captioninput').value = currentCaption;
		$('captionEditForm').show();
	}
	else
	{
		$('captionEditForm').hide();
		if ( currentCaption == '' )
		{
			$('captionaddlink').show();
		}
		else
		{
			$('full_caption').show();
			$('captioneditlink').show();
		}
	}
}

function changeFilter()
{
	newFilter = $('filterSelect').getValue();
	showdate = $('filterform_showdate').checked;
	if ( newFilter == originalFilterSelection && showdate != originalShowDate )
	{
		if ( showdate )
		{
			setScreenshotViewByDay();
		}
		else
		{
			setScreenshotViewGrid();
		}
		originalShowDate = showdate;
		return;
	}
	qs = '?tab=' + $('filterform_tab').getValue() + '&showdate=' + ( showdate ? 1 : 0 );
	if ( newFilter != '' )
	{
		qs += '&filter=' + newFilter;
	}
	location.href = qs;
	return;
}

var nav_total_images = false;
var next_shot_link = false;
var prev_shot_link = false;
var current_pane = false;
var nav_total_panes = 0;
var rg_screens_abs_keyed = new Array();
var nav_pane_of_requested_shot = false;
var nav_total_images = false;
var current_shot_id = false;

function navPaneChange( offset )
{
	if ( current_pane )
	{
		new_pane_idx = current_pane + offset;
		if ( new_pane_idx > nav_total_panes )
		{
			return;
		}
		if ( new_pane_idx < 1 )
		{
			return;
		}
		leftoffset = ( new_pane_idx - 1 ) * -256;
		intloffset = $('nav_block_panes').getStyle( 'margin-left' );
		$('nav_block_panes').setStyle({ marginLeft:leftoffset+'px' });
		current_pane = new_pane_idx;
		if ( current_pane == 1 )
		{
			$('nav_previous').hide();
		}
		else
		{
			$('nav_previous').show();
		}
		if ( current_pane == nav_total_panes )
		{
			$('nav_next').hide();
		}
		else
		{
			$('nav_next').show();
		}
		AssurePanesLoaded();
	}
}
		
function AssurePanesLoaded()
{
	if ( current_pane )
	{
		if ( current_pane < nav_total_panes && !$('pane_'+(current_pane+1)) )
		{
			AddPane( current_pane + 1 );
		}
		if ( current_pane > 1 && !$('pane_'+(current_pane-1)) )
		{
			AddPane( current_pane - 1 );
		}
	}
}

function AddPane( pane_number )
{
	need_more_screens = false;
		if ( pane_number > current_pane )
	{
				last_thumb_idx = pane_number * 12 - 1; 		last_thumb_idx = Math.min ( (nav_total_images - 1), last_thumb_idx );
		if ( rg_screens_abs_keyed[last_thumb_idx] == null )
		{
						need_more_screens = true;
			
						base_thumb_for_req_idx = null;
			for ( x = last_thumb_idx; x >= 0; x-- )
			{
				if ( rg_screens_abs_keyed[x] != null )
				{
					base_thumb_for_req_idx = x;
					break;
				}
			}
		}
	}
	else 
	{
				first_thumb_idx = ( pane_number - 1 ) * 12;
		if ( rg_screens_abs_keyed[first_thumb_idx] == null )
		{
			need_more_screens = true;
			base_thumb_for_req_idx = null;
			for ( x = first_thumb_idx; x < nav_total_images; x++ )
			{
				if ( rg_screens_abs_keyed[x] != null )
				{
					base_thumb_for_req_idx = x;
					break;
				}
			}
		}
	}
	if ( need_more_screens )
	{
		$('center_screenshotid').value = rg_screens_abs_keyed[base_thumb_for_req_idx].id;
		getNavigationThumbs( false, pane_number );
		return;
	}
	newpane = AssemblePane( pane_number );
	leftoffset = ( pane_number - 1 ) * 256;
	$('nav_block_panes').appendChild( newpane );
	newpane.setStyle({ top:'0px', left:leftoffset + 'px' });
	newpane.show();
}


function ReorderScreensArrayAbsolute( r, requested_shot_id )
{
	nav_total_images = r.resultsavailable;
	$('browsing_total_count').innerHTML = nav_total_images;
	nav_total_panes = Math.ceil( r.resultsavailable / 12 );
	nav_pane_of_requested_shot = Math.ceil( ( r.currentposition + 1 ) / 12 );
	
	requested_shot_index = false;
	for ( x = 0; x < r.screenshots.length; x++ )
	{
		if ( r.screenshots[x].id == requested_shot_id )
		{
			requested_shot_index = x;
			break;
		}
	}
	index_diff = r.currentposition - requested_shot_index;
	totalfilledstart = 0;
	for ( x = 0; x < rg_screens_abs_keyed.length; x++ )
	{
		if ( rg_screens_abs_keyed[x] !== null )
			totalfilledstart++;
	}
	for ( x = 0; x < r.screenshots.length; x++ )
	{
		rg_screens_abs_keyed[x+index_diff] = r.screenshots[x];
	}
	totalfilledend = 0;
	for ( x = 0; x < rg_screens_abs_keyed.length; x++ )
	{
		if ( rg_screens_abs_keyed[x] !== null )
			totalfilledend++;
	}
	
}

function AssemblePane( pane_num )
{
	s_start = ( pane_num - 1 ) * 12;
	s_end = Math.min( s_start + 12, rg_screens_abs_keyed.length );
	pane_screens = rg_screens_abs_keyed.slice( s_start, s_end );
	p = new Element( 'div', { 'id': 'pane_' + pane_num, 'class': 'nav_block_pane' } );
	rowcount = 0;
	for ( x = 0; x < pane_screens.length; x++ )
	{
		rowcount = ( rowcount == 3 ? 1 : rowcount + 1 );
		thumb = pane_screens[x];
	
		var ownerAppend = viewingTagged ? ('/' + thumb.steamid) : '';
		t = new Element( 'a', { 'href': linkURL+thumb.id + ownerAppend + '/?' + linkAppend } );
		t.addClassName( 'nav_block_thumb' );
		if ( rowcount == 2 )
		{
			t.addClassName( 'thumb_row_middle' );
		}
		if ( thumb.id == current_shot_id )
		{
			t.addClassName( 'nav_block_thumb_active' );
		}
		i = new Element( 'img', { 'src': thumb.thumburl, 'width': '80', 'height': 50 } );
		t.appendChild( i );
		p.appendChild( t );
	}
	return p;
}


function getNavigationThumbs( init, addpane )
{
	var successFunc = function( response, init, addpane )
	{
		r = response.responseJSON;
		if ( init )
		{
			var prevAppend =  viewingTagged ? ('/' + r.prevsteamid) : '';
			var nextAppend =  viewingTagged ? ('/' + r.nextsteamid) : '';
			next_shot_link = ( r.nextid ? (linkURL + r.nextid + prevAppend + '/?' + linkAppend): false );
			prev_shot_link = ( r.previd ? (linkURL + r.previd + nextAppend + '/?' + linkAppend) : false );
			if ( next_shot_link )
			{
				$('main_shot_link').removeClassName( 'main_shot_inactive' );
				$('main_shot_link').addClassName( 'main_shot_active' );
			}
			else
			{
				$('main_shot_link').removeClassName( 'main_shot_active' );
				$('main_shot_link').addClassName( 'main_shot_inactive' );
			}
		}
		requested_shot_id = $('center_screenshotid').value;
		ReorderScreensArrayAbsolute( r, requested_shot_id );

		if ( init )
		{
			current_shot_id = requested_shot_id;
			current_pane = nav_pane_of_requested_shot;
			pane = AssemblePane( nav_pane_of_requested_shot );
			$('nav_block_panes').appendChild( pane );
			leftoffset = ( current_pane - 1 ) * 256;
			pane.setStyle({ top:'0px', left:leftoffset+'px' });
			$('nav_block_panes').setStyle({ marginLeft:'-'+leftoffset+'px' });
			if ( current_pane > 1 )
			{
				$('nav_previous').show();
			}
			if ( current_pane < nav_total_panes )
			{
				$('nav_next').show();
			}
			pane.show();
			AssurePanesLoaded();
		}
		else if ( addpane !== false )
		{
			AddPane( addpane );
		}
			
		return;
		
	};
	var failFunc = function( response )
	{

	};
	
	form = $('navblock_form');
	form.request({
		onSuccess: function(response){ 
			successFunc( response, init, addpane );
		},
		onFailure: failFunc 
	});

	
}

function mainShotClick()
{
	if ( next_shot_link )
	{
		location.href = next_shot_link;
	}
}
document.observe( "dom:loaded", 
	function() 
	{
		//getNavigationThumbs( true );
		if ( $('screenshot_editor') )
			$('screenshot_editor').observe( 'mouseout', screenshotEditorMouseOut );
	}
);

