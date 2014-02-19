function bytesToHumanUnit(bytes)
{
    var currentUnit = 'B';
    var units = ['KiB', 'MiB', 'GiB'];
    for ( var i = 0; i < units.length; ++i )
    {
        if ( bytes / 1024.0 >= 1.0 )
        {
            currentUnit = units[i];
            bytes = bytes / 1024.0;
        }
        else
            return bytes.toFixed(1) + ' ' + currentUnit;
    }

    return bytes.toFixed(1) + ' ' + currentUnit;
}

$(function() {
    $( '#gamesListEmpty' ).css( 'display', 'none' );
    // TODO: Show loading indicator.

    $.get( '/steam/games/' )
        // TODO: .always( function () { /* Hide loading indicator. */ } )
        .fail( function (jqXHR, textStatus, errorThrown) {
            /* TODO. */
            console.error( 'Unable to get list contents: ' + textStatus + ', ' + errorThrown );
        } )
        .done( function (response) {
            var list = $( '#gamesList' );
            list.empty();

            if ( !response['success'] )
            {
                if ( window.steamremotecontrol )
                {
                    window.location = 'steam-remote-callback://error/Unable to load games list./' + response['data']['error'];
                }
                else
                {
                    alert("Failed to load games list!");
                }
            }
            else
            {
                if ( window.steamremotecontrol )
                {
                    window.location = 'steam-remote-callback://complete-loading';
                }

                var data = response['data'];
                var appids = Object.keys(data);
                if ( appids.length < 1 )
                {
                  $( '#gamesListEmpty' ).css( 'display', 'block' );
                  return;
                }

                appids.sort( function (a, b) {
                    var appA = data[a];
                    var appB = data[b];

                    var installedA = (appA['installed'] > 0);
                    var installedB = (appB['installed'] > 0);
                    if ( installedA != installedB )
                    {
                        if ( installedA )
                            return -1;
                        else
                            return 1;
                    }
                    else
                        return appA['name'].localeCompare(appB['name']);
                } );

                for ( var i = 0; i < appids.length; ++i )
                {
                    var appid = appids[i];
                    var info = data[appid];
                    var name = info['name'];
                    var logo = info['logo'];

                    var statusText = 'Not installed', statusClass = 'uninstalled';
                    if ( info['update_running'] > 0 )
                    {
                        statusClass = 'downloading';
                        statusText = 'Downloading';

                        if ( info['bytes_needed'] > 0 )
                        {
                            var percent = info['bytes_downloaded']/info['bytes_needed'] * 100.0;
                            if ( percent >= 0 )
                            {
                                statusText += ' - ' + percent.toFixed() + "%, ";
                                statusText += bytesToHumanUnit(info['bytes_downloaded']) + " / " + bytesToHumanUnit(info['bytes_needed']);
                            }
                        }
                    }
                    else if ( info['installed'] > 0 )
                    {
                        statusText = 'Installed';
                        if ( info.hasOwnProperty('minutes_played') && info['minutes_played']['forever'] > 0 )
                        {
                            var timePlayed = info['minutes_played']['forever'] ;
                            if ( timePlayed >= 2 * 60 )
                                timePlayed = (timePlayed / 60.0).toFixed() + " hours";
                            else
                                timePlayed = timePlayed.toFixed() + " minutes";

                            statusText += ' - Played ' + timePlayed;
                        }
                        statusClass = 'installed';
                    }
                    else
                    {
                        if ( info['estimated_disk_bytes'] > 0 )
                        {
                            statusText += " - ~" + bytesToHumanUnit(info['estimated_disk_bytes']);
                        }
                    }

                    var html = '<div class="gameRow ' + statusClass + '">';

                    html += '<div class="gamesLogoBlock">'
                    if ( logo )
                        html += '<img class="gamesLogo" src="' + logo + '"/>';
                    html += '</div><div class="gamesDescription"><p class="gamesTitle">' + name + '</p>';

                    html += '<span class="gamesStatus">' + statusText + '</span></div>';
                    html += '</div>';

                    var row = $( html );
                    row.data( 'appid', appid );
                    row.click( function () {
                        var appid = $(this).data( 'appid' );
                        var info = data[appid];
                        var prompt = 'Do you wish to launch ' + info['name'] + ' now?';
                        if ( !confirm(prompt) )
                            return;

                        $.post( '/steam/games/' + appid + '/run' )
                            .fail( function (jqXHR, textStatus, errorThrown) {
                                /* TODO. */
                                console.error( 'Unable to send game run request: ' + textStatus + ', ' + errorThrown );
                            } )
                            .always( function () { 
                                if ( window.steamremotecontrol )
                                {
                                    window.location = "steam-remote-callback-dismiss://log-event/GameLaunch/appid/" + appid;
                                }
                            } )
                    } );
                    row.appendTo( list );

                    $( "img.gamesLogo" ).error(function(evt) {
                        evt.target.remove();
                        return true;
                    });
                }
            }
        } );
});
