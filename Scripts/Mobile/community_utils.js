
$J( document ).bind( "pageinit", function() {
    if ($J.mobile) {
	  $J.mobile.ajaxLinksEnabled = false;
	  $J.mobile.ajaxFormsEnabled = false;
	  $J.mobile.ajaxEnabled = false;
	  $J.mobile.loadingMessage = false;
	  $J.mobile.pushStateEnabled = false;
	  $J.mobile.showPageLoadingMsg = function(){};
	};
});

function respondToInvite( type, steamID, action, onComplete )
{
	var sessionID = $J( '#sessionID' ).val();
	var postData = {
		json: 1,
		xml: 1,
		action: "approvePending",
		itype: type,
		perform: action,
		id: steamID,
		sessionID: sessionID
	};
	
	$J.post(
			processURL,
			postData,
			function( data )
			{
				onComplete( data, action );
			},
			"json"
	);
}

function removeFromWishlist( url )
{
	var answer = confirm( "Are you sure?" );
	if ( answer )
		top.location.href = url;
}

function DoXmlRequest( event, subURL, postData, succFunc, errorFunc )
{
    if ( event.stopPropagation )
    {
        event.stopPropagation();
    }
    event.cancelBubble = true;

    $J.ajax({
        type: 'POST',
        url: subURL,
        data: postData,
        success: function( data, textStatus, jqXHR )
        {
            var success = false;
            if ( data && 'success' in data )
            {
                success = data.success;
                if ( success && succFunc )
                {
                    succFunc( );
                }
            }
        },
        error: function( jqXHR, textStatus, errorThrown )
        {
            if ( errorFunc )
            {
                errorFunc( jqXHR, textStatus, errorThrown );
            }
        },
    });
}

function ToggleElementHidden( element, showType, event, iconElement, iconShowUrl, iconHideUrl )
{
    if ( event )
    {
        if ( event.stopPropagation )
        {
            event.stopPropagation();
        }
        event.cancelBubble = true;
    }

    var elt = document.getElementById( element );
    if ( elt )
    {
        var icon;

        if ( iconElement )
        {
            icon = document.getElementById( iconElement );
        }

        if ( elt.style.display == 'none' )
        {
            elt.style.display = showType;
            if ( icon )
            {
                icon.src = iconShowUrl;
            }
        }
        else
        {
            elt.style.display = 'none';
            if ( icon )
            {
                icon.src = iconHideUrl;
            }
        }
    }
}

function OnElementFocus_DefaultText( element, defaultText )
{
	if ( element.value == defaultText )
	{
		element.value = '';
		element.removeClassName( 'defaultText' );
	}
}

function OnElementBlur_DefaultText( element, defaultText )
{
	if ( element.value == '' )
	{
		element.value = defaultText;
		element.addClassName( 'defaultText' );
	}
}

