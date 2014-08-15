
var DimButtonList = [];

function LoadAppTables( baseUrl )
{
    // Determine whether the client connection block is open
    // or closed so that we can preserve that state.
    var connBlock = document.getElementById( 'clientConnGameBlocks' );

    // We have to update the client connection block,
    // the most-played game list and the full game list.
    //$J('#clientConnBlock').load( baseUrl . '_clientconnblock' );

    var argPre = '?';

    // As we're updating most of the page we currently
    // just to a full refresh.
    if ( connBlock && connBlock.style.display != 'none' )
    {
        baseUrl += argPre + 'client_drop=1';
        argPre = '&';
    }

    var searchText = document.getElementById( 'searchText' );
    if ( searchText && searchText.value.length > 0 )
    {
        baseUrl += argPre + 'search=' + searchText.value;
        argPre = '&';
    }

    window.location.replace( baseUrl );
}

function DelayRefreshAppTables( baseUrl, delay )
{
    if (delay == undefined)
    {
        delay = 5000;
    }

    window.setTimeout( LoadAppTables, delay, baseUrl );
}

function ShowClientError( jqXHR, textStatus, errorThrown )
{
    RestoreDimButtons();

    var errorElt = document.getElementById( 'clientError' );
    if ( !errorElt || errorElt.style.display !== 'none' )
    {
        return;
    }

    errorElt.style.display = 'block';
}

function SearchPruneList( searchTextEltId, listItemClass, itemTextClass, displayType )
{
    var items = document.getElementsByClassName( listItemClass );
    if ( !items )
    {
        return;
    }

    var searchText = '';

    var searchTextElt = document.getElementById( searchTextEltId );
    if ( searchTextElt )
    {
        searchText = searchTextElt.value;
    }

    var searchLen = searchText.length;
    var itemsCount = items.length;
    var i;

    searchText = searchText.toLowerCase();
    for ( i = 0; i < itemsCount; i++ )
    {
        var item = items[i];
        var display = displayType;

        var textElt = item.getElementsByClassName( itemTextClass );
        if ( searchLen > 0 && textElt && textElt.length == 1 )
        {
            var text = textElt[0].innerHTML;

            if ( text.toLowerCase().indexOf( searchText ) === -1 )
            {
                display = 'none';
            }
        }

        item.style.display = display;
    }
}

function ConfirmCancel( event )
{
    RestoreDimButtons();
    ToggleElementHidden('uninstallConfirm', 'block', event);
}

function ShowConfirmPopup( event, targetElt, onClick )
{
    if ( event )
    {
        if ( event.stopPropagation )
        {
            event.stopPropagation();
        }
        event.cancelBubble = true;
    }

    var confirmElt = document.getElementById( 'uninstallConfirm' );
    if ( !confirmElt )
    {
       RestoreDimButtons();
       return;
    }

    confirmElt.style.display = 'block';
    $J(confirmElt).offset($J(targetElt).offset());
    // Subtract out the confirm border when sizing so that we don't get too big.
    confirmElt.style.width = ($J(targetElt).innerWidth() - ( $J(confirmElt).outerWidth() - $J(confirmElt).innerWidth() ) ) + 'px';
    confirmElt.style.height = ($J(targetElt).innerHeight() - ( $J(confirmElt).outerHeight() - $J(confirmElt).innerHeight() ) ) + 'px';

    var yesElt = document.getElementById( 'uninstallConfirmYes' );
    if (yesElt)
    {
        yesElt.onclick = function () { ToggleElementHidden( 'uninstallConfirm', 'block' ); onClick(); };
    }
}

function RestoreDimButtons()
{
    for (var i = 0; i < DimButtonList.length; i++)
    {
        $J(DimButtonList[i]).fadeTo(0, 1);
    }
    DimButtonList = [];
}

function DimButton( button, event, afterFunc )
{
    if ( event )
    {
        if ( event.stopPropagation )
        {
            event.stopPropagation();
        }
        event.cancelBubble = true;
    }

    // If the button has already been clicked we ignore another click.
    if ($J(button).css('opacity') < 0.95)
    {
        return;
    }

    if ( DimButtonList.indexOf(button) < 0 )
    {
        DimButtonList.push(button);
    }

    $J(button).fadeTo('slow', 0.25);
    afterFunc.call(button);
}

