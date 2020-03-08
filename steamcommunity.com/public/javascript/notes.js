
function InitNoteEditor( $Content, $CommandButtons )
{
	InitContentEditToolbar( $Content, $CommandButtons );

	// make links clickable
	$Content.on( 'mousedown.Links', 'a', function(e) {
		$Content.prop( 'contenteditable', false );
	});
	$Content.on( 'click.Links', 'a', function(e) {
		window.setTimeout( function() {
			$Content.prop( 'contenteditable', true );
		}, 1 );
		return true;
	});

	var $SaveStatus = $J('#note_save_status');
	var fnUpdateSaveStatusDisplay = function( strClass )
	{
		$SaveStatus.children().hide();
		if ( strClass )
			$SaveStatus.children( strClass ).show();
	};

	var tsTimeLastSave = 0;
	var bSaveInFlight = false;
	var nSaveTimeout;
	var nMaxSaveDelayTimeout;
	// saving
	var fnSaveChanges = function( bOnUnload )
	{
		var noteid = $Content.data('noteid');
		fnUpdateSaveStatusDisplay( '.state_saving' );
		bSaveInFlight = true;

		// clear our timeouts
		window.clearInterval( nMaxSaveDelayTimeout );
		nMaxSaveDelayTimeout = null;
		window.clearInterval( nSaveTimeout );
		nSaveTimeout = null;

		var strTitle = ExtractTitle( $Content[0] );
		var strContent = ConvertEditableContentToBBCode( $Content[0] );

		var strURL = 'https://steamcommunity.com/notes/save/' + noteid;
		var rgParams = {
			sessionid: g_sessionID,
			appid: $Content.data('appid'),
			shortcut_name: $Content.data('shortcutname'),
			title: strTitle || '',
			content: strContent
		};

		if ( bOnUnload )
		{
			if ( typeof navigator.sendBeacon  != 'undefined' )
			{
				var fdParams = new FormData();
				for ( key in rgParams )
					fdParams.append( key, rgParams[key] );

				navigator.sendBeacon( strURL, fdParams );
			}
			return;
		}

		$J.post( strURL, rgParams ).done( function( data ) {
			if ( data && data.noteid )
				$Content.data( 'noteid', data.noteid );
			fnUpdateSaveStatusDisplay( '.state_saved' );

			var $NoteListEntry = $J('.notelist_entry.active' );
			var $NoteListLink = $NoteListEntry.children('a');

			if ( strTitle )
				$NoteListLink.text( strTitle );

			if ( $NoteListEntry.data('noteid') == '__new' && data && data.noteid )
			{
				$NoteListEntry.data('noteid', data.noteid );
				$NoteListLink.attr( 'href', $NoteListLink.attr( 'href' ).replace( '/__new/', '/' + data.noteid + '/' ) );
			}

		} ).fail( function() {
			fnUpdateSaveStatusDisplay( '.state_error' );
		} ).always( function() {
			bSaveInFlight = false;
		});
	};

	var SAVE_AFTER_IDLE_MS = 4000;	// we save 4s after last user input
	var MAX_DELAY_SAVE_MS = 20000;	// even if the user is actively typing, we'll save at least once every 20s

	$Content.on( 'input', function() {
		if ( !bSaveInFlight )
			fnUpdateSaveStatusDisplay();

		if ( !nMaxSaveDelayTimeout )
			nMaxSaveDelayTimeout = window.setTimeout( fnSaveChanges, MAX_DELAY_SAVE_MS );

		if ( nSaveTimeout )
			window.clearInterval( nSaveTimeout );
		nSaveTimeout = window.setTimeout( fnSaveChanges, SAVE_AFTER_IDLE_MS );
	});

	$Content.on('keydown', function(e) {
		if ( e.keyCode == 83 && e.ctrlKey )
		{
			e.preventDefault();
			window.clearInterval( nSaveTimeout );
			fnSaveChanges();
		}
	});

	$J(window ).unload( function() {
		if ( nSaveTimeout )
			fnSaveChanges( true );
	} );

	$Content.focus();
}

function ExtractTitle( el )
{
	for ( var i = 0; i < el.childNodes.length; i++ )
	{
		var node = el.childNodes[i];
		switch( node.nodeType )
		{
			case Element.TEXT_NODE:
				var strCandidate = v_trim( node.textContent ).replace( /[\r\n]/g, '' );
				if ( strCandidate.length > 4 )
					return strCandidate;
				break;
			default:
				if ( node.childNodes.length )
				{
					var strCandidate = ExtractTitle( node );
					if ( strCandidate )
						return strCandidate;
				}
		}
	}

	return null;
}
