

function ImageWallHover( element, event, id ) {
	$("imgWallHover" + id).show();
}

function ImageWallHide( element, event, id ) {
	$("imgWallHover" + id).hide();
}

var g_bManaging = false;
function SetManagementMode( bManaging ) {
	g_bManaging = bManaging;
	if ( bManaging ) {
		$$('.screenshot_checkbox').each(
			function (e) {
				e.show();
			}
		);
		$('ScreenshotManagementControls').show();
		$('ScreenshotManagementToggle').addClassName( 'screenshotManagementToggleUp' );
	} else {
		$$('.screenshot_checkbox').each(
			function (e) {
				e.hide();
			}
		);

		if ( $('ScreenshotManagementControls') )
			$('ScreenshotManagementControls').hide();
		if ( $('ScreenshotManagementToggle') )
			$('ScreenshotManagementToggle').removeClassName( 'screenshotManagementToggleUp' );
	}
}

function ToggleManagementMode(){
	SetManagementMode(!g_bManaging);
}

function OnScreenshotClicked( event, id, itemLink, itemLinkText, itemLinkNotModal ) {
	if ( !event )
		event = window.event;
	event = $(event);
	if ( g_bManaging ) {
		SelectScreenshot( id );
	} else {
		if ( event.isLeftClick && !event.isLeftClick() )
			return true;
		ShowModalContent( itemLink, itemLinkText, itemLinkNotModal, true );
	}
	return false;
}

function SelectScreenshot( id )
{
	cb = $('screenshot_checkbox_'+id);
	cb.checked = !cb.checked;
	item = $('imgWallItem_' + id);
	if ( cb.checked )
	{
		$(item).addClassName( 'imgWallItemChecked' );
	}
	else
	{
		$(item).removeClassName( 'imgWallItemChecked' );
	}

	ScreenshotUpdateBatchCount();
}

function SelectAllScreenshots()
{
	for( var i = 0; i < g_rgLoadedScreenshots.length; ++i )
	{
		var id = g_rgLoadedScreenshots[i];
		cb = $('screenshot_checkbox_'+id);
		cb.checked = true;
		item = $('imgWallItem_' + id);
		$(item).addClassName( 'imgWallItemChecked' );
	}

	ScreenshotUpdateBatchCount();
	return false;
}

function DeselectAllScreenshots()
{
	for( var i = 0; i < g_rgLoadedScreenshots.length; ++i )
	{
		var id = g_rgLoadedScreenshots[i];
		cb = $('screenshot_checkbox_'+id);
		cb.checked = false;
		item = $('imgWallItem_' + id);
		$(item).removeClassName( 'imgWallItemChecked' );
	}

	ScreenshotUpdateBatchCount();
	return false;
}

var batchCount = 0;
var originalDeleteText = null;
function ScreenshotUpdateBatchCount() {
	var checked = 0;
	$$('.screenshot_checkbox').each(function(checkbox){
		if(checkbox.checked) {
			++checked;
		}
	});
	batchCount = checked;

	if ( checked > 0 )
	{
		if ( $('ScreenshotManagementButtonSelectAll') )
		{
			$('ScreenshotManagementButtonSelectAll').innerHTML = "Deselect all";
			$('ScreenshotManagementButtonSelectAll').onclick = DeselectAllScreenshots;
		}
	}
	else
	{
		if ( $('ScreenshotManagementButtonSelectAll') )
		{
			$('ScreenshotManagementButtonSelectAll').innerHTML = "Select all";
			$('ScreenshotManagementButtonSelectAll').onclick = SelectAllScreenshots;
		}
	}
}


function ConfirmBatchAction( action ) {

	if ( batchCount > 0 )
	{
		$('BatchScreenshotManagementAction').value = action;
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
		showModal( 'confirmBatchModal', true );
	}
	else
	{
		showModal( 'noSelectedShotsModal', true );
	}
}


var g_loadedScreenshots = {};
var g_rgLoadedScreenshots = [];
var g_mapRowIDToScreenshots = {};
var g_rowsWaiting = new Hash();
var g_rowsReady = new Hash();
function OnScreenshotLoaded( rowid, id ) {
	g_loadedScreenshots[id] = true;
	g_rgLoadedScreenshots.push(id);
	var shots = g_mapRowIDToScreenshots[rowid];
	if ( shots )
		DisplayRowOrWait( rowid, shots );
}

function OnScreenshotError( rowid, id ) {
	if ( $('imgWallItem_' + id) )
		$('imgWallItem_' + id).addClassName("loadError");
	OnScreenshotLoaded( rowid, id );
	if ( $('imgWallScreenshot_' + id) )
		$('imgWallScreenshot_' + id).remove();
}

function WaitForRow( rowid, shots ) {
	g_rowsWaiting.set(rowid, true);
	if ( !g_mapRowIDToScreenshots[rowid] ) {
		g_mapRowIDToScreenshots[rowid] = shots;
	}
	if ( $('action_wait')  )
		$('action_wait').show();

}

function DisplayReadyRows() {
	var rowidEarliest = -1;
	g_rowsWaiting.each(function(pair){
			var rowid = pair.key;
			if ( rowidEarliest == -1 || rowidEarliest > rowid ) {
				rowidEarliest = rowid;
			}
	});

	var rowsToDisplay = [];
	g_rowsReady.each(function(pair){
		var rowid = pair.key;
		if ( rowidEarliest == -1 || rowidEarliest > rowid ) {
			rowsToDisplay.push( rowid );
		}
	});

	for( var i = 0; i < rowsToDisplay.length; ++i ) {
		g_rowsReady.unset(rowsToDisplay[i]);
	}

	if ( rowidEarliest == -1 && $('action_wait') ) {
		$('action_wait').hide();
	}

	if ( rowsToDisplay.length > 0 && $('action_wait') ) {
		$('action_wait').removeClassName( "first_wait" );
	}

	for( var i = 0; i < rowsToDisplay.length; ++i ) {
		var elid = 'imgWallRow_' + rowsToDisplay[i];
		var el = $(elid);
		if ( el )
			ShowWithFade( elid, 0.02 );
	}
}

function DisplayRowOrWait( rowid, shots ) {
	for( var i = 0; i < shots.length; ++i ) {
		if ( !g_loadedScreenshots[shots[i]] ) {
			WaitForRow( rowid, shots );
			return;
		}
	}

	g_rowsWaiting.unset(rowid);
	g_rowsReady.set(rowid,true);

	DisplayReadyRows();
	return true;
}

function OnLoadedRow( rowid, shots ) {
	DisplayRowOrWait( rowid, shots );
}

