// <script>
"use strict";

function IntervalDistance( min1, max1, min2, max2 )
{
	return Math.max( 0, Math.max( min2 - max1, min1 - max2 ) );
}

function DistBetweenRects( rect1, rect2 )
{
	var xdelta = IntervalDistance( rect1.x, rect1.x + rect1.width, rect2.x, rect2.x + rect2.width );
	var ydelta = IntervalDistance( rect1.y, rect1.y + rect1.height, rect2.y, rect2.y + rect2.height );
	return Math.sqrt( xdelta * xdelta + ydelta * ydelta );
}

function WeakRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var gCacheKey = '1550bld';
// cacheKey and loader are optional, will get replaced if not passed
function LoadAsset( strName, strURI, cacheKey, loader ) {
	var _cacheKey = cacheKey;
	if ( cacheKey === undefined )
	{
		_cacheKey = gCacheKey;
	}

	var _loader = loader;
	if(loader === undefined)
	{
		_loader = gLoader;
	}

	if ( !_loader.resources[strName] )
	{
				_loader.add( strName, strURI + '?v=' + _cacheKey );
	}
}

function PadZerosLeft( val, size )
{
	var strOut = val + '';
	while (strOut.length < size)
	{
		strOut = "0" + strOut;
	}
	return strOut;
}

function ShowCustomSalienDialog()
{
	$J.ajax( {
		url: 'https://steamcommunity.com/saliengame/ajaxcustomizesalien',
		type: 'GET'
	}).done( function ( data ) {
		var $CustomizationDialog = $J( data.html );
		ShowConfirmDialog( 'Customize Your Salien', $CustomizationDialog.show(), 'Save', 'Cancel' )
			.done( function () {
				var $Form = $CustomizationDialog.find( 'form' );
				$J.ajax({
					type: $Form.attr( 'method' ),
					url: $Form.attr( 'action' ),
					data: $Form.serialize()
				}).done( function( data ) {
					gSalienData.body_type = parseInt( $Form.find( "input:radio[name='salien_body']:checked" ).val() ) - 1;
					gSalienData.eyes = parseInt( $Form.find( "input:radio[name='salien_eyes']:checked" ).val() ) - 1;
					gSalienData.mouth = parseInt( $Form.find( "input:radio[name='salien_mouth']:checked" ).val() ) - 1;
					gSalienData.arms = parseInt( $Form.find( "input:radio[name='salien_arms']:checked" ).val() ) - 1;
					gSalienData.legs = parseInt( $Form.find( "input:radio[name='salien_legs']:checked" ).val() ) - 1;
					gSalienData.hat_itemid = parseInt( $Form.find( "input:radio[name='salien_hat']:checked" ).val() );
					gSalienData.hat_image = $Form.find( '#salien_hat' ).prop( 'src' );
					gSalienData.shirt_itemid = parseInt( $Form.find( "input:radio[name='salien_shirt']:checked" ).val() );
					gSalienData.shirt_image = $Form.find( '#salien_shirt' ).prop( 'src' );
					gSalien.UpdateCustomizations();
				}).fail( function( data ) {
					ShowAlertDialog( 'Customize Your Salien', 'There was an error loading your Salien, please try again in a few minutes.' );
				});
			});
	}).fail( function () {
		ShowAlertDialog( 'Customize Your Salien', 'There was an error loading your Salien, please try again in a few minutes.' );
	});
}

function GameLoadError()
{
	ShowAlertDialog( 'Game Error', 'There was an error loading required game content.  Your game will be restarted.' )
		.done( function() {  window.location.reload(); } );
}

function ZoneCaptured()
{
	ShowAlertDialog( 'Zone Captured', 'This zone has been recaptured from the Duldrumz by the Steam Community.<br>Help capture another tile and represent your favorite group to help them claim territory by clicking the flag on your Salien\'s ship!' );
}

var gCachedGroupListHTML = null;
function LoadPlayerGroupList( fnCallback )
{
	if ( !gCachedGroupListHTML )
	{
		$J.get( 'https://steamcommunity.com/profiles/' + gServer.m_strSteamID + '/ajaxgroupinvite?select_primary=1', function( html ) {
			gCachedGroupListHTML = html;
			fnCallback( html );
		} );
	}
	else
	{
		fnCallback( gCachedGroupListHTML );
	}
}

function ShowRepresentGroupDialog( callback )
{
	var Modal = ShowDialog( 'Select a group to represent', '<div class="group_invite_throbber"><img src="https://steamcommunity-a.akamaihd.net/public/images/login/throbber.gif"></div>' );
	var $ListElement = $J('<div/>', {'class': 'newmodal_content_innerbg'} );

	LoadPlayerGroupList( function( html ) {
		Modal.GetContent().find( '.newmodal_content').html('');	// erase the throbber
		Modal.GetContent().find( '.newmodal_content').append( $ListElement );
		$ListElement.html( html );
		Modal.AdjustSizing();
		$ListElement.children( '.group_list_results' ).children().each( function () {
			var groupid = this.getAttribute( 'data-groupid' );
			var strAvatarHash = this.getAttribute( '_groupavatarhash' );
			var strGroupName = $J(this).children('.group_list_groupname').text();
			if ( groupid )
			{
				$J(this).click(
					function () {
						Modal.Dismiss();
						gServer.RepresentClan(
							groupid,
							function ( response ) {
								callback( groupid, strAvatarHash );
							},
							function ( response ) {
								ShowConfirmDialog( 'Failed to represent selected group', 'Please try again in a few minutes' );
							}
						);
					}
				);
			}
		});
	});
}