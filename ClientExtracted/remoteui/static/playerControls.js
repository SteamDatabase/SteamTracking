$(function() {
    var volumeBar = $("#controlsVolumeBar");
    var volumeScrubber = $("#controlsVolumeScrubber");

    volumeScrubber.setVolume = function(volume)
    {
        var sliderWidth = volumeBar.width() - volumeScrubber.width();
        var relX = Math.min(Math.max(volume, 0), 1) * sliderWidth;
        volumeScrubber.css("left", relX);
    }

    volumeScrubber.setVolume(1.0);
    $.get( '/steam/music/volume' )
        .done( function (response) {
            if ( !response['success'] )
                console.error( "Unable to get volume! Error: " + response['data']['error'] );
            else
                volumeScrubber.setVolume(response['data']);
        });

    var dragging = false;
    var offsetX = 0;
    var moveHandler = function(e) {
        if (!dragging)
        {
            $(document).unbind("vmousemove", moveHandler);
            return;
        }

        var barOffset = volumeBar.offset();
        var barPaddingLeft = parseInt( volumeBar.css('padding-left') ), barPaddingRight = parseInt( volumeBar.css('padding-right') );
        var sliderWidth = volumeBar.width() - volumeScrubber.width();

        var relX = e.pageX - barOffset.left - barPaddingLeft - offsetX;
        relX = Math.min(Math.max(relX, 0), sliderWidth);
        volumeScrubber.css("left", relX);
        e.preventDefault();

        var volume = relX/sliderWidth;
        $.post( '/steam/music/volume', { volume: volume } )
            .done( function (response) {
                if ( !response['success'] )
                {
                    alert( "Unable to load list! Error: " + response['data']['error'] );
                }

                // TODO: Update slider with returned data.
            } )
            .fail( function (jqXHR, textStatus, errorThrown) {
                /* TODO. */
                console.error( 'Unable to send game run request: ' + textStatus + ', ' + errorThrown );
            } );
    }

    volumeScrubber.on("vmousedown", function(e) {
        dragging = true;
        offsetX = e.pageX - volumeScrubber.offset().left;

        var releaseHandler = function(e) {
            dragging = false;
            $(document).unbind("vmousemove", moveHandler);
            $(document).unbind("vmouseup", releaseHandler);
        };

        $(document).on("vmouseup", releaseHandler);
        $(document).on("vmousemove", moveHandler);

        e.preventDefault();
    });

    $.fn.setToggleState = function(state) {
        if (state)
        {
            $(this).removeClass('offState');
            $(this).addClass('onState');
        }
        else
        {
            $(this).addClass('offState');
            $(this).removeClass('onState');
        }
    }

    $.fn.toggleState = function() {
        return $(this).is('.onState');
    }

    $(".toggleButton").addClass('offState');
    $(".toggleButton").click( function () {
       $(this).setToggleState(!$(this).toggleState());
    });

    $("#controlsForwardTrackButton").click( function () {
        $.post( '/steam/music/next' )
            .fail( function (jqXHR, textStatus, errorThrown) {
                /* TODO. */
                console.error( 'Unable to send next track request: ' + textStatus + ', ' + errorThrown );
            } )
    } );

    $("#controlsBackTrackButton").click( function () {
        $.post( '/steam/music/previous' )
            .fail( function (jqXHR, textStatus, errorThrown) {
                /* TODO. */
                console.error( 'Unable to send previous track request: ' + textStatus + ', ' + errorThrown );
            } )
    } );

    $("#controlsShuffleButton").click( function () {
        $.post( '/steam/music/mode', { shuffled: +$(this).toggleState() } )
            .fail( function (jqXHR, textStatus, errorThrown) {
                /* TODO. */
                console.error( 'Unable to send shuffled request: ' + textStatus + ', ' + errorThrown );
            } )
    } );

    $("#controlsRepeatButton").click( function () {
        $.post( '/steam/music/mode', { looped: +$(this).toggleState() } )
            .fail( function (jqXHR, textStatus, errorThrown) {
                /* TODO. */
                console.error( 'Unable to send looped request: ' + textStatus + ', ' + errorThrown );
            } )
    } );

    $("#controlsPlayButton").click( function () {
        var url = '/steam/music/play';
        if (!$(this).toggleState())
            url = '/steam/music/pause';

        $.post( url )
            .fail( function (jqXHR, textStatus, errorThrown) {
                /* TODO. */
                console.error( 'Unable to send looped request: ' + textStatus + ', ' + errorThrown );
            } )
    } );

    (function poll(firstPoll){
        $.ajax({
            url: "/steam/state",
            data: {"long_poll": +!firstPoll, "session_name": "playerControls"},
            success: function(response){
                var music = response['data']['music'];
                var playback = music['playback'];
                volumeScrubber.setVolume(playback['volume']);
                $("#controlsRepeatButton").setToggleState(playback['looped']);
                $("#controlsShuffleButton").setToggleState(playback['shuffled']);
                $("#controlsPlayButton").setToggleState(playback['status'] == 'playing');
            },
            dataType: "json",
            complete: function() { poll(false); },
            timeout: 30000 });
    })(true);
});