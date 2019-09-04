
/**
 * @returns CModal
 */
function ShowBlockingWaitDialog( strTitle, strDescription )
{
    var deferred = new jQuery.Deferred();
    var fnOK = function() { deferred.resolve(); };

    var container = $J('<div/>', {'class': 'waiting_dialog_container'} );
    var throbber = $J('<div/>', {'class': 'waiting_dialog_throbber'} );
    container.append( throbber );
    container.append( strDescription );

    var Modal = _BuildDialog( strTitle, container, [], fnOK, { bExplicitDismissalOnly: true } );
    deferred.always( function() { Modal.Dismiss(); } );
    Modal.Show();

    // attach the deferred's events to the modal
    deferred.promise( Modal );

    return Modal;
}

function onCottageDoorClick(event) {
    let openClass = "cottage_door_open";
    let target = $J( event.target );
    let doorset = $J(this);
    let timeNow = event.data.timeNow;

    // figure out which door
    let door_index = doorset.data("door-id");

    // head check on door
    if ( door_index < 0 || door_index >= 14 )
    {
        console.log(`bogus door index ${door_index}`);
        return;
    }


    // check door state
    let doorAlreadyOpen = doorset.hasClass(openClass);
    
    if ( doorAlreadyOpen ) {
        return;
    }

    
    var $WaitDialog = ShowBlockingWaitDialog( 'Opening your gift...' );


    // issue ajax request to open door
    $J.post( "https://store.steampowered.com/promotion/opencottagedoorajax", {
            sessionid: g_sessionID,
            door_index: door_index,
            t: timeNow,
            open_door: !doorAlreadyOpen
    }).done(function() {
    }).fail(function() {
    }).success(function(data) {
        if ( data.html ) {
            ShowConfirmDialog('Extremely Cozy Cottage of Surprises', data.html, 'View in Inventory', 'Close').done( function() {
                document.location = 'https://steamcommunity.com/my/inventory';
            });
        }

        // success? toggle door to open, animate results
        doorset.toggleClass(openClass, !doorAlreadyOpen);
    }).always( function()
    {
        $WaitDialog.Dismiss();
    });

}

