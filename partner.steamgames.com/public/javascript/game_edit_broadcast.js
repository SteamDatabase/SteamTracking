
// TODO: Add a check to see if they have saved, to avoid leaving the page accidentally.

//<script>
"use strict";

var BroadcasterWhiteList = function( rgBroadcasters )
{
		this.m_rgBroadcasters = rgBroadcasters || [];

 	this.m_bDirty = false;
};

BroadcasterWhiteList.prototype.OnLoad= function()
{
		var container = $J('#broadcasters_table');
	container.sortable( {
		cancel: ".ui-state-disabled",
		items: "> .broadcaster_row",
		axis: "y",
		cursor: "move",
	});
	container.on( "sortupdate", function( event, ui ) {
		g_BroadcasterWhiteList.OnSortUpdate(  );
	});

	container.disableSelection(); 
	this.AddAllRows();
}

BroadcasterWhiteList.prototype.SetDirty = function( bDirty )
{
	this.m_bDirty = bDirty;

	if( bDirty )
	{
		$J( '#broadcast_dirty' ).show();
	}
	else
	{
		$J( '#broadcast_dirty' ).hide();
	}
}

BroadcasterWhiteList.prototype.OnSortUpdate = function()
{
	this.SetDirty( true );

		$J( '.broadcaster_row > .number').each( function( index ) {
		$J(this).text( index + 1 );
	});

	$J( '.broadcaster_row :input' ).each( function( index ) {
		$J(this).attr( 'name', 'app[broadcast][whitelist][' + index + '][steamid]' );
	} );
}

BroadcasterWhiteList.prototype.AddBroadcasterRow = function( idx, broadcaster )
{
	var template = "\r\n\t\t<div class=\"edit_broadcasters broadcaster_row\">\r\n\t\t\t<div class=\"grabber_img\"><img class=\"broadcasters_grabber_img\" src=\"https:\/\/partner.steamgames.com\/public\/images\/\/broadcast\/drag_handle.png\"><\/div>\r\n\t\t\t<div class=\"number\">%3$s<\/div>\r\n\t\t\t<div class=\"streamer_avatar\"><img src=\"%4$s\"><\/div>\r\n\t\t\t<div class=\"streamer_name\">%5$s<\/div>\r\n\t\t\t<div class=\"action_ctn\">\r\n\t\t\t\t<a class=\"btn_grey_grey btn_medium ttip\" target=\"_blank\" href=\"%7$s\/%2$s\" data-tooltip-text=\"Open Community Profile Page\">\r\n\t\t\t\t\t<span><img src=\"https:\/\/partner.steamgames.com\/public\/images\/broadcast\/view_broadcaster_profile.png\"><\/span>\r\n\t\t\t\t<\/a>\r\n\t\t\t\t<a class=\"btn_grey_grey btn_medium ttip\" href=\"#\" onclick=\"g_BroadcasterWhiteList.RemoveBroadcaster( this.parentNode.parentNode, %1$s ); return false;\" data-tooltip-text=\"Remove Broadcaster from White List\">\r\n\t\t\t\t\t<span><img src=\"https:\/\/partner.steamgames.com\/public\/images\/broadcast\/remove_broadcaster.png\"><\/span>\r\n\t\t\t\t<\/a>\r\n\t\t\t<\/div>\r\n\t\t\t<input type=\"hidden\" name=\"app[broadcast][whitelist][%6$s][steamid]\" value=\"%2$s\">\r\n\t\t<\/div>";

	var $table = $J('#broadcasters_table');

	var $el = $J( template.replace(/%1\$s/g, broadcaster.m_nAccountID )
		.replace(/%2\$s/g, broadcaster.m_strSteamID )
		.replace(/%3\$s/g, idx + 1 )
		.replace(/%4\$s/g, broadcaster.m_strAvatarImgURL )
		.replace(/%5\$s/g, V_EscapeHTML( JSON.stringify( broadcaster.m_strPersonaName ) ) )
		.replace(/%6\$s/g, idx )
		.replace(/%7\$s/g, 'https://steamcommunity.com//profiles' )
	);

	$table.append($el);
}

BroadcasterWhiteList.prototype.AddAllRows = function()
{
	var $table = $J('#broadcasters_table');
	$J("#broadcasters_table > *:not(.heading)").remove();

	var _this = this;
	$J.each(this.m_rgBroadcasters, function(idx, broadcaster ){
		_this.AddBroadcasterRow(idx, broadcaster);
	});

	$table.sortable( "refresh" );
}

BroadcasterWhiteList.prototype.BHasBroadcaster = function( broadcaster )
{
	for( var i = 0; i < this.m_rgBroadcasters.length; ++i )
	{
		if( this.m_rgBroadcasters[i].m_nAccountID == broadcaster.m_nAccountID )
		{
			return true; 		}
	}
	return false;
}

BroadcasterWhiteList.prototype.AddBroadcaster = function( broadcaster )
{
		if( !broadcaster || this.BHasBroadcaster( broadcaster ) )
	{
		return;
	}

	this.AddBroadcasterRow( this.m_rgBroadcasters.length, broadcaster );

	this.m_rgBroadcasters.push( broadcaster );
	this.SetDirty( true );

	$J('#broadcasters_table').sortable( "refresh" );
}

BroadcasterWhiteList.prototype.AddSteamIDBroadcaster = function( broadcasterSteamID, nItemID )
{
	if (!broadcasterSteamID) {
		return;
	}

	var params = {};
	params[ 'steamid' ] = broadcasterSteamID;
	params[ 'sessionid' ] = g_sessionID;
	var _this = this;

	new Ajax.Request( 'https://partner.steamgames.com/admin/game/ajaxgetbroadcasterinfo/' + nItemID, {
		method: 'post',
		requestHeaders: { 'Accept': 'application/json' },
		parameters: params,
		onSuccess: function( transport )
		{
			$J('#choose_friend_throbber').hide();
			console.log( transport.responseJSON );
			console.log( transport.responseJSON.msg  );
			if( transport.responseJSON.success )
			{
				var broadcaster = transport.responseJSON.broadcasterinfo;
				_this.AddBroadcaster( broadcaster );
			}
			else
			{
				ShowAlertDialog( "Error",
					"Error loading your friends. Please try again later. Details:<br\/>%1$s".replace( /%1\$s/g, transport.responseJSON.msg ) );
			}
		},
		onFailure: function( transport )
		{
			ShowAlertDialog( "Error",
				"Error loading your friends. Please try again later. Details:<br\/>%1$s".replace( /%1\$s/g, transport.responseJSON.msg ) );
			$J('#choose_friend_throbber').hide();
		}
	});
	return false;
}

BroadcasterWhiteList.prototype.RemoveBroadcaster = function( elementToRemove, accountid )
{
	for( var i = 0; i < this.m_rgBroadcasters.length; ++i )
	{
		if( this.m_rgBroadcasters[i].m_nAccountID == accountid )
		{
			this.m_rgBroadcasters.splice( i, 1 ); 		}
	}

	elementToRemove.remove();
	this.SetDirty( true );

		$J( '.broadcaster_row > .number').each( function( index ) {
		$J(this).text( index + 1 );
	});


	$J('#broadcasters_table').sortable( "refresh" );
}

BroadcasterWhiteList.prototype.ClearAll = function ()
{
	if( this.m_rgBroadcasters.length != 0 )
	{
		this.m_rgBroadcasters = [];
		this.AddAllRows();
	}
}

BroadcasterWhiteList.prototype.ChooseBroadcasterFromFriends = function( mySteamID, nItemID )
{
	$J( '#choose_friend_throbber' ).show();

	var params = {};
	params['steamid'] = mySteamID;
	params[ 'sessionid' ] = g_sessionID;

	new Ajax.Request( 'https://partner.steamgames.com/admin/game/ajaxlistfriends/' + nItemID, {
		method: 'post',
		requestHeaders: { 'Accept': 'application/json' },
		parameters: params,
		onSuccess: function( transport )
		{
			$J('#choose_friend_throbber').hide();
			var dialog = ShowConfirmDialog( 'Choose broadcaster to add from Steam friends list', $J( transport.responseText ) );

			dialog.SetRemoveContentOnDismissal( false );
			dialog.done( function()
			{
				$J("input[name=friend]:checked").each( function( index ) {
					var broadcaster = $J( this ).parent().parent().data( 'broadcaster' );
					g_BroadcasterWhiteList.AddBroadcaster( broadcaster );
				});
			} );
		},
		onFailure: function( transport )
		{
			ShowAlertDialog( "Error",
				"Error loading your friends. Please try again later. Details:<br\/>%1$s".replace( /%1\$s/g, transport.responseJSON.msg ) );
			$J('#choose_friend_throbber').hide();
		}
	});
	return false;
}

