"use strict";


function ShowEmbedWidget( )
{
	$J('#widget_create').show();
	$J('#widget_finished').hide();

	var $Content = $J('#EmbedModal');
	$Content.detach();
	$Content.show();

	var deferred = new jQuery.Deferred();
	var fnOK = function() { deferred.resolve(); };

	var Modal = _BuildDialog( "Create Widget to Embed", $Content, [], fnOK, {} );
	deferred.always( function() { Modal.Dismiss(); } );
	Modal.Show();

	// attach the deferred's events to the modal
	deferred.promise( Modal );

	Modal.always(
		function() {
			// save it away again for later
			$Content.hide();
			$J(document.body).append( $Content );
		}
	);
}

function CreateWidget( nAppId )
{
	$J('#widget_create').hide();

	var nSubId = $J('input[name=w_subid]').val();
	if( !nSubId )
		nSubId = $J('input:radio[name=w_rsubid]:checked').val();

	var strDesc = $J('textarea[name=w_text]').val();

	var strWidgetURL;
	if( nSubId )
		strWidgetURL = 'https://store.steampowered.com/widget/' + nAppId + '/' + nSubId + '/';
	else
		strWidgetURL = 'https://store.steampowered.com/widget/' + nAppId + '/';

	if( strDesc )
		strWidgetURL = strWidgetURL + '?t=' + encodeURIComponent( strDesc );

	var strWidgetCode = '<iframe src="' + strWidgetURL + '" frameborder="0" width="646" height="190"></iframe>';

	var $iframe = $J(strWidgetCode);

	$J('#widget_container').empty();
	$J('#widget_container').append($iframe);
	$J('#widget_code').val( strWidgetCode );

	$J('#widget_finished').show();
}

// appid_for_follow can be different than store_appid in cases such as when viewing a standalone demo page where we want the follow button to follow the parent app
function InitQueueControls( store_appid, appid_for_follow, next_in_queue_appid, snr )
{
	var $FollowBtn = $J('.queue_control_button.queue_btn_follow .queue_btn_inactive');
	var $UnFollowBtn = $J('.queue_control_button.queue_btn_follow .queue_btn_active');
	var $IgnoreBtn = $J('.queue_control_button.queue_btn_ignore .queue_btn_inactive');
	var $UnIgnoreBtn = $J('.queue_control_button.queue_btn_ignore .queue_btn_active');

	var $IgnoreMenuBtn = $J('#queue_ignore_menu_arrow');
	var $IgnoreMenu = $J('#queue_btn_ignore_menu');
	var $IgnoreMenuContent = $J('#ignore_menu_flyout > div');
	var $IgnoreMenuOption_NotInterested = $J('#queue_ignore_menu_option_not_interested' );
	var $IgnoreMenuOption_OwnedElsewhere = $J('#queue_ignore_menu_option_owned_elsewhere' );

	var funcUpdateIgnoredReasonClasses = function() {
		$IgnoreMenu.removeClass( "not_interested owned_elsewhere" );
		var curIgnoredReason = $IgnoreMenu.data( "ignoredreason" );
		if ( curIgnoredReason !== undefined )
		{
			$IgnoreMenuBtn.removeClass( "queue_btn_inactive" );
			$IgnoreMenuBtn.addClass( "queue_btn_active" );
			switch( curIgnoredReason )
			{
				case 0:
					$IgnoreMenu.addClass( "not_interested" );
					break;
				case 2:
					$IgnoreMenu.addClass( "owned_elsewhere" );
					break;
			}
		}
	};
	funcUpdateIgnoredReasonClasses();

	var funcIgnoreGame = function( ignore_reason ) {
		$J.post( 'https://store.steampowered.com/recommended/ignorerecommendation/', {
			sessionid: g_sessionID,
			appid: store_appid,
			snr: snr,
			ignore_reason: ignore_reason
		}).done( function( data ) {
			const bWasFocused = document.activeElement === $IgnoreBtn[0];
			$IgnoreBtn.hide();
			$UnIgnoreBtn.show();
			$IgnoreMenuBtn.attr( 'aria-expanded', false );
			if ( bWasFocused )
			{
				$UnIgnoreBtn.focus();
			}

			$IgnoreMenu.data( "ignoredreason", ignore_reason );
			funcUpdateIgnoredReasonClasses();

			GDynamicStore.InvalidateCache();
			if ( data && data.nSaleTaskCompleted ) { NewStickerPackModal( 'Mark something Not Interested' ); } // SummerSale2017
		}).fail( function( jqXHR ) {
			ShowAlertDialog( 'Ignore App', 'There was a problem saving your changes.  Please try again later.' );
		});
	};

	$IgnoreBtn.click( function() {
		funcIgnoreGame( 0 );
	} );
	$IgnoreMenuOption_NotInterested.click( function() {
		var curIgnoredReason = $IgnoreMenu.data( "ignoredreason" );
		if ( curIgnoredReason === 0 )
		{
			$UnIgnoreBtn.click();
			$IgnoreMenuBtn.attr( 'aria-expanded', false );
		}
		else
		{
			funcIgnoreGame( 0 );
		}
	} );
	$IgnoreMenuOption_OwnedElsewhere.click( function() {
		var curIgnoredReason = $IgnoreMenu.data( "ignoredreason" );
		if ( curIgnoredReason === 2 )
		{
			$UnIgnoreBtn.click();
			$IgnoreMenuBtn.attr( 'aria-expanded', false );
		}
		else
		{
			funcIgnoreGame( 2 );
		}
	} );

	$IgnoreMenuBtn.click( function() {
		const bIsExpanded = $IgnoreMenuBtn.attr( 'aria-expanded' ) == "true";
		$IgnoreMenuBtn.attr( 'aria-expanded', !bIsExpanded );
		if ( !bIsExpanded )
		{
			$IgnoreMenuContent[0].children[0].focus();
		}
	} );
	$IgnoreMenuContent.focusout( function(e) {
		if ( !$IgnoreMenuContent[0].contains( e.relatedTarget ) )
		{
			$IgnoreMenuBtn.attr( 'aria-expanded', false );
		}
	} );

	$UnIgnoreBtn.click( function() {
		$J.post( 'https://store.steampowered.com/recommended/ignorerecommendation/', {
			sessionid: g_sessionID,
			appid: store_appid,
			snr: snr,
			remove: 1
		}).done( function() {
			const bWasFocused = document.activeElement === $UnIgnoreBtn[0];
			$IgnoreBtn.show();
			$UnIgnoreBtn.hide();
			if ( bWasFocused )
			{
				$IgnoreBtn.focus();
			}
			$IgnoreMenu.removeClass( "not_interested owned_elsewhere" );
			$IgnoreMenuBtn.removeClass( "queue_btn_active" );
			$IgnoreMenuBtn.addClass( "queue_btn_inactive" );
			GDynamicStore.InvalidateCache();
		}).fail( function() {
			ShowAlertDialog( 'Ignore App', 'There was a problem saving your changes.  Please try again later.' );
		});
	});

	$FollowBtn.click( function() {
		$J.post( 'https://store.steampowered.com/explore/followgame/', {
			sessionid: g_sessionID,
			appid: appid_for_follow
		}).done( function() {
			const bWasFocused = document.activeElement === $FollowBtn[0];
			$FollowBtn.hide();
			$UnFollowBtn.show();
			if ( bWasFocused )
			{
				$UnFollowBtn.focus();
			}
		}).fail( function() {
			ShowAlertDialog( 'Follow', 'There was a problem saving your changes.  Please try again later.' );
		});
	});

	$UnFollowBtn.click( function() {
		$J.post( 'https://store.steampowered.com/explore/followgame/', {
			sessionid: g_sessionID,
			appid: appid_for_follow,
			unfollow: 1
		}).done( function() {
			const bWasFocused = document.activeElement === $UnFollowBtn[0];
			$FollowBtn.show();
			$UnFollowBtn.hide();
			if ( bWasFocused )
			{
				$FollowBtn.focus();
			}
		}).fail( function() {
			ShowAlertDialog( 'Follow', 'There was a problem saving your changes.  Please try again later.' );
		});
	});

	// discovery queue settings dialog
	var bQueueIsValid = true;
	var $NextInQueueBtn = $J('.btn_next_in_queue_trigger');

	$NextInQueueBtn.click( function() {
		if ( bQueueIsValid )
			$J('#next_in_queue_form').submit();
		else
			window.location = 'https://store.steampowered.com/explore/startnew';
	});

	$J('a.dq_settings_link').click( function() {
		CDiscoveryQueue.ShowCustomizeDialog( function( data ) {
			if ( data && data.queue && ( data.queue.indexOf( store_appid ) == -1 ||
				( next_in_queue_appid && data.queue.indexOf( next_in_queue_appid ) == -1 ) ) )
			{
				ShowConfirmDialog( 'Customize Your Discovery Queue', 'We\'ve built you a new Discovery Queue by applying your customizations.  What would you like to do?',
					'Start exploring the new Queue','Stay here'
				).done( function() {
					window.location = 'https://store.steampowered.com/explore/startnew/' + g_eDiscoveryQueueType + '/';
				});
				bQueueIsValid = false;
			}
			else
			{
				bQueueIsValid = true;
			}
		}, g_eDiscoveryQueueType );
	} );
}

/** OK button handler for collapsed `game_page_autocollapse` sections. Triggers expansion of the content. */
function HandleAutoCollapseOKButton( event )
{
	var $Container = $J( event.currentTarget );
	if ( $Container.hasClass( 'collapsed' ) )
	{
		var $Content = $Container.find( '.game_page_autocollapse' );
		$Content.trigger('gamepage_autocollapse_expand');
		return true;
	}

	return false;
}


function InitAutocollapse()
{
	$J('.game_page_autocollapse').each( function() {
		var content = this;
		var $Content = $J(content);
		$Content.wrap( $J('<div/>', {'class': 'game_page_autocollapse_ctn' } ) );

		var $Container = $Content.parent();

		var $ReadMore = $J('<div/>', {'class': 'game_page_autocollapse_readmore' }).text( 'READ MORE' );
		var $Fade = $J('<div/>', {'class': 'game_page_autocollapse_fade' } ).append( $ReadMore );
		$Container.append( $Fade );

		var nInterval = 0;
		var nMaxHeight = parseInt( $Content.css('max-height') );
		var bMaxHeightSet = true;

		$Content.on( 'gamepage_autocollapse_expand', function() {
			if ( $Container.hasClass( 'collapsed' ) )
			{
				// Stop suppressing gamepad focus on the expandable content now that it is expanded
				$Content.data( 'gpFocusDisabled', false );
				$Container.removeClass( 'collapsed' );
				$Container.addClass( 'expanded' );

				if ( bMaxHeightSet )
				{
					$Content.animate( {'max-height': content.scrollHeight + 20 + 'px'}, 'fast', null, function() { $Content.css('max-height', 'none' ); } );
				}
				window.clearInterval( nInterval );
			}
		});

		$ReadMore.click( function() { $Content.trigger('gamepage_autocollapse_expand'); } );

		var fnCheckHeight = function ()	{
			if ( content.scrollHeight > nMaxHeight + 30 )
			{
				$Content.css( 'max-height', nMaxHeight + 'px' );
				$Container.addClass( 'collapsed' );
				window.clearInterval( nInterval );
				bMaxHeightSet = true;

				// The content div becomes a panel with focus temporarily disabled. This allows the container Panel to get focus and handle
				// expansion via its OK button activation. Once expanded the content panel lets focus pass through to its children (if there are any).
				if ( $Content.attr( 'data-panel' ) === undefined )
					$Content.attr( 'data-panel', '[]' );

				$Content.data( 'gpFocusDisabled', true );
				$Container.attr( 'data-panel', '{"onOKButton":"HandleAutoCollapseOKButton( event )","focusableIfEmpty":true}' );
			}
			else if ( bMaxHeightSet )
			{
				$Content.css( 'max-height', 'none' );
				bMaxHeightSet = false;
			}
		};

		nInterval = window.setInterval( fnCheckHeight, 250 );
		fnCheckHeight();

	});
}

function AddScrollToAccessoriesBlock()
{
	function scrollToAccessoriesIfNeeded()
	{
		if ( window.location.hash == "#accessories" )
		{
			document.querySelector( "#accessory_block" ).scrollIntoView( {
				behavior: 'smooth',
				block: 'center',
				inline: 'center',
			} );

			document.querySelector( "#accessory_block" ).classList.add( "highlighted" );
		}
		else
		{
			document.querySelector( "#accessory_block" ).classList.remove( "highlighted" );
		}
	}

	window.addEventListener( "hashchange", scrollToAccessoriesIfNeeded, false );
	window.addEventListener( "load", scrollToAccessoriesIfNeeded, false );
}

function ShowEULA( elLink )
{
	if ( window.UseGamepadScreenMode && window.UseGamepadScreenMode() )
	{
		// it's a better user experience on Deck if we navigate to the EULA instead of opening a new window
		window.location = elLink.href;
	}
	else
	{
		var win = window.open( elLink.href,'eula','height=584,width=648,resize=yes,scrollbars=yes');
		win && win.focus();
	}
}

//formerly app_reporting.js

var gReportedApp = false;
function ShowReportDialog( nAppId )
{
	if ( gReportedApp )
	{
		return;
	}

	var content = $J('<div/>', {'class': 'app_report_dialog' } );

	content.append( $J('<div/>', {'class': 'app_report_dialog_intro' } ).text('Please choose a reason why you are reporting this product.') );

		var rgReportOptions = {"1":"Fraud - <span class=\"sub\">This software fraudulently attempts to gather sensitive information, such as your Steam credentials or financial data (e.g. credit card information).<\/span>","2":"Harmful - <span class=\"sub\">This software modifies a customer's computer in unexpected or harmful ways (e.g. is malware or a virus)<\/span>","5":"Adult Content - <span class=\"sub\">Contains adult content that isn't appropriately labeled and age-gated<\/span>","6":"Defamatory - <span class=\"sub\">Contains Libelous or defamatory statements<\/span>","8":"Child Exploitation - <span class=\"sub\">Contains content that exploits children in any way<\/span>","11":"Legal Violation - <span class=\"sub\">Contains content that violates the laws in your jurisdiction<\/span>","13":"Broken - <span class=\"sub\">Does not download, launch, or run correctly, even on a machine that meets the minimum system requirements.<\/span>"};
	var rgReportOptionElements = [];
	for ( var eReportType in rgReportOptions )
	{
		var $ReportOption = $J('<div/>', {'class': 'app_report_dialog_option' } );
		$ReportOption.append( $J('<div/>', {'class': 'app_report_dialog_option_input' }).append( $J('<input/>', {'type': 'radio', 'name':'report_type', 'value': eReportType, 'id': 'report_type_' + eReportType } ) ) );
		$ReportOption.append( $J('<div/>', {'class': 'app_report_dialog_option_text' }).append( $J('<label/>', {'for': 'report_type_' + eReportType }).html( rgReportOptions[eReportType] ) ) );
		rgReportOptionElements.push( $ReportOption );
	}

	for ( var j, x, i = rgReportOptionElements.length; i; j = parseInt(Math.random() * i), x = rgReportOptionElements[--i], rgReportOptionElements[i] = rgReportOptionElements[j], rgReportOptionElements[j] = x );
	for ( var i = 0; i < rgReportOptionElements.length; ++i )
	{
		content.append( rgReportOptionElements[i] );
	}

	var textArea = $J('<textarea/>', { 'class': 'app_report_dialog_reason grey_bevel fullwidth', 'id' : 'ReportReason',  'name' : 'report_reason' } );
	var maxReasonLength = 512;
	textArea.attr( 'maxlength', maxReasonLength );
	textArea.bind( "keyup change",
		function()
		{
			var str = $J(this).val()
			var mx = parseInt($J(this).attr('maxlength'))
			if (str.length > mx)
			{
				$J(this).val(str.substr(0, mx))
				return false;
			}
		}
	);
	content.append( $J('<div/>', {'class': 'app_report_dialog_intro' } ).text('You may enter additional information that you feel is relevant here:') );
	content.append( textArea );

	content.append( $J('<div/>', {'class': 'app_report_dialog_dmca' } ).html('If you\'d like to report Copyright Infringement and are the copyright holder, please proceed to our DMCA compliant notice of copyright infringement form <a href="https://steamcommunity.com/dmca/create/">here</a>.') );
	content.append( $J('<div/>', {'class': 'app_report_dialog_dmca' } ).html('If you\'d like to file a Trademark complaint, please fill out the form <a href="https://steamcommunity.com/trademark/createtrademarkcomplaint/">here</a>.') );

	var dialog = ShowConfirmDialog( 'Report this Product', content, 'Report');

	dialog.done( function() {
		var eReportTypeSelected = content.find( 'input[type=radio]:checked' ).val();
		if ( eReportTypeSelected )
		{
			$J.post(
				'https://store.steampowered.com/appreport/' + nAppId + '/report/',
				{
					'report_type' : eReportTypeSelected,
					'report_reason' : content.find( 'textarea' ).val(),
					'sessionid': g_sessionID
				}
			).done( function( json ) {
					gReportedApp = true;
					$J( "#ReportAppBtn").addClass( 'btn_active' );
				}
			).fail( function( jqXHR ) {
					var json = jqXHR.responseText.evalJSON();
					if ( json.success == 29 )
					{
						ShowAlertDialog( 'Error', 'You have already reported this product!' );
						gReportedApp = true;
						$J( "#ReportAppBtn").addClass( 'btn_active' );
					}
					else
					{
						ShowAlertDialog( 'Error', 'There was a problem saving your report.  Please try again later.' );
					}

				} );
		}
		else
		{
			ShowAlertDialog( 'Error', 'You must select a reason you are reporting this product!' );
		}
	});
}

function ShowNavigatorShare()
{
	if ( typeof navigator === 'object' && typeof navigator.share === 'function' )
	{
		navigator.share( { url: window.location.href } );
	}
	else if ( 'ReactNativeWebView' in window && typeof window.ReactNativeWebView === 'object' && typeof window.ReactNativeWebView.postMessage === 'function' )
	{
		window.ReactNativeWebView.postMessage( JSON.stringify( { event_name: 'share', link: window.location.href } ) );
	}
}

function ShowGotSteamModal( strSteamURL, strAppName, strPlayLaunchVerb )
{
		var $ModalContent = $J("<dialog class=\"gotsteamModal\">\n\t<div class=\"got_steam_ctn\">\n\t<div class=\"got_steam_box\">\n\t\t<h1>Got Steam?<\/h1>\n\t\t<p>You need to have the <a href=\"https:\/\/store.steampowered.com\/about\/\">Steam desktop application<\/a> installed before you can install and launch <strong class=\"gotSteam_AppName\"><\/strong>. Do you have Steam installed on this computer?<\/p>\n\t\t<div class=\"gotsteam_buttons\">\n\t\t\t<a class=\"gotSteam_SteamURL btn_blue leftbtn\" href=\"\">\n\t\t\t\t<h3>Yes, Steam is installed<\/h3>\n\t\t\t\t<h5 class=\"gotsteam_action\"><\/h5>\n\t\t\t<\/a>\n\t\t\t<a href=\"https:\/\/store.steampowered.com\/about\/\" class=\"btn_blue\">\n\t\t\t\t<h3>No, I need Steam<\/h3>\n\t\t\t\t<h5>Read about and download Steam<\/h5>\n\t\t\t<\/a>\n\t\t\t<div style=\"clear: left;\"><\/div>\n\t\t<\/div>\n\t\t<div class=\"got_steam_low_block\">\n\t\t\t<div class=\"gotsteam_steam_ico\"><img src=\"https:\/\/store.fastly.steamstatic.com\/public\/images\/v6\/steam_ico.png\" width=\"40\" height=\"40\" border=\"0\" \/><\/div>\n\t\t\tSteam is the premiere desktop gaming platform. It's free to join and easy to use. <a href=\"https:\/\/store.steampowered.com\/about\/\">Learn more about Steam.<\/a>\n\t\t<\/div><\/div>\n\t<\/div>\n<\/dialog>");
	$ModalContent.find('.gotSteam_AppName').text( strAppName );
	$ModalContent.find('.gotsteam_action').text( strPlayLaunchVerb );
	$ModalContent.find( '.gotSteam_SteamURL').attr( 'href', strSteamURL );
	var Modal = new CModal( $ModalContent );
	Modal.Show();
	//ShowDialog( 'Got Steam?', $ModalContent );
}

function ChangeSeason( el, season )
{
	// switch active season indicator
	$J( '.series_seasons .season_selector .season_name' ).removeClass( 'active' );
	$J( el ).addClass( 'active' );

	// switch which episodes are shown
	$J( '.season_episode_list_wrapper .season_episode_list' ).removeClass( 'active' );
	$J( '.season_episode_list_wrapper .season_episode_list[data-season="' + season + '"]' ).addClass( 'active' );

	// load the images
	$J( '.season_episode_list.active .episode_image_col img').each( function( index, value )
	{
		$J( this ).attr( 'src', $J( this ).data( 'src' ) );
	});
}

function ShowRecommendedMoreInfoModal()
{
	var strTemplate = "<div class=\"recommended_more_info_modal\">\n\t\t\t\t\t\t\t\t<p class=\"intro\">You've found something that doesn't look like other things you've used in the past. Steam will learn about your preferences from the games you play, movies you watch, and software you use on Steam. We will use this activity to tailor your recommendations to your tastes.<\/p>\n\t\t\t\t\t\t\t\t<h2>Like this item?<\/h2>\n\t\t\t\t\t\t\t\t<p>If you like this item and go on to purchase and play it, we'll take that into account when making future recommendations<\/p>\n\t\t\t\t\t\t\t\t<h2>Not interested in things like this?<\/h2>\n\t\t\t\t\t\t\t\t<p>You can also configure your store preferences to tell Steam about tags or types of products that you aren't interested in. <a href=\"https:\/\/store.steampowered.com\/account\/preferences\/\">Visit store preferences<\/a>.<\/p>\n\t\t\t\t\t\t\t<\/div>";
	ShowAlertDialog( "More about recommendations", strTemplate);

}

function CollapseLongStrings( strSelector )
{

	$J(strSelector).each(function(i, j){
		var $target = $J(j);
		if( j.scrollWidth >  $target.innerWidth() )
		{
			//$target.css({ 'overflow': 'hidden', 'white-space': 'nowrap', 'text-overflow': 'ellipsis' });
			var elMoreBtn = document.createElement('div');

			elMoreBtn.classList.add('more_btn');
			elMoreBtn.textContent = '+';
			elMoreBtn.addEventListener('click', function($target, elButton, event){

				$target.css({'overflow': 'visible', 'white-space': 'normal'});
				elButton.remove();

			}.bind(null, $target, elMoreBtn ));

			j.parentNode.appendChild(elMoreBtn);
		}
	})
}

function JSReportProductAction( appId, pageAction, snr )
{
	$J.post( 'https://store.steampowered.com//ajaxreportproductaction/' + appId + '/', {
			'page_action' : pageAction,
			'snr' : snr
		}
	);
}

function ToggleBannerContentVisibility( divContentID, divIconID )
{
	var $element = $J( divContentID );
	if ( $element !== null )
	{
		$element.slideToggle( 'fast' );
	}

	var $icon = $J( divIconID )
	if ( $icon !== null )
	{
		$icon.toggleClass('expanded');
	}
};

// The review detail section is simplified for mobile screens
// which requires some section moves here, and formatting changes in .css
function ReparentReviewsForSmallScreens()
{
	var bUseGamepadScreenMode = window.UseGamepadScreenMode && window.UseGamepadScreenMode();
	var fn_reparent = bUseGamepadScreenMode ? Responsive_ReparentItemsInGamepadMode : Responsive_ReparentItemsInMobileMode;

	var $MoveReviewSections = $J('.user_reviews_container');
	$MoveReviewSections.each( function() {

		// move content within each review detail section for small screen layout
		var $SummarySection = $J(this).find('[id^="ReviewContent"]');
		$SummarySection.each( function() {

			var $LeftColContent = $J(this).find('.leftcol');
			var $NewLeftLocation = $J(this).find('.responsive_review_leftcol_ctn');
			var $ReviewAwardCtn = $J(this).find('.review_award_ctn');
			var $NewAwardLocation = $J(this).find('.rightcol');

			// if we don't have the required destination containers bail (this shouldn't happen)
			if ( $NewLeftLocation.length == 0 || $NewAwardLocation.length == 0 )
				return;

			fn_reparent( '#' + $LeftColContent.attr('id'), $J( '#' + $NewLeftLocation.attr('id') ) );
			fn_reparent( '#' + $ReviewAwardCtn.attr('id'), $J( '#' + $NewAwardLocation.attr('id') ) );
		} );
	} );
}

// Share dialog calls this to copy the store page link to the clipboard
function ShareDialogCopyToClipboard()
{
	// select the text and copy to clipboard
	var $res = false;
	var $linkText = document.getElementById('shareDialogLinkStoreLink');
	if ( $linkText )
	{
		// using .select() instead causes the copy command to fail on iOS 12
		$linkText.setSelectionRange(0, $linkText.value.length);
		$res = document.execCommand( "copy" );
	}

	// report the result
	$J('#shareDialogResult').text( $res ? 'Link copied' : 'Failed copying store link to the clipboard');

	// clear the selection
	document.getSelection().removeAllRanges();
}

// applies layout changes for mobile and gamepad screens
function ReparentAppLandingPageForSmallScreens()
{
	// on iOS use the iOS share icon.  the default is Android.
	if ( navigator.userAgent.toLowerCase().indexOf( 'iphone' ) != -1 )
	{
		$J('#shareImg').attr('src', 'https://store.fastly.steamstatic.com/public/shared/images/icon_share_ios.svg' );
	}

	var bUseGamepadScreenMode = window.UseGamepadScreenMode && window.UseGamepadScreenMode();

		var fn_reparent = bUseGamepadScreenMode ? Responsive_ReparentItemsInGamepadMode : Responsive_ReparentItemsInMobileMode;

	// move early access content into the purchase options parent
	if ( !bUseGamepadScreenMode )
	{
		fn_reparent( '.early_access_header', $J('#purchaseOptionsContent') );
	}

	// move purchase options into a new container for responsive UX
	if ( !bUseGamepadScreenMode )
	{
		fn_reparent( '#game_area_purchase', $J( '#purchaseOptionsContent' ) );
	}
	else
	{
		// Hide it
		$J( '#game_area_purchase' ).hide();
	}

	// order the action buttons
	fn_reparent( '#reportBtn', $J('#rowBtnActions') );
	fn_reparent( '#queueBtnFollow', $J('#rowBtnActions') );
	fn_reparent( '#ignoreBtn', $J('#rowBtnActions') );
	fn_reparent( '#shareBtn', $J('#rowBtnActions') );
	fn_reparent( '#rowBtnActions', $J('#queueActionsCtn') );

	// place discovery queue below the action buttons
	fn_reparent( '#nextInDiscoveryQueue', $J('#queueCtn') );

	// place banners and game details into the links and info section.  Gamepad renders that section in React.
	if ( !bUseGamepadScreenMode )
	{
//		fn_reparent( '#bannerAchievements', $J( '#appLinksAndInfo' ) );
		fn_reparent( '#bannerPointsShop', $J( '#appLinksAndInfo' ) );
		fn_reparent( '#bannerItemStore', $J( '#appLinksAndInfo' ) );
		fn_reparent( '#bannerCommunity', $J( '#appLinksAndInfo' ) );
		fn_reparent( '#appDetailsUnderlinedLinks', $J( '#appLinksAndInfo' ) );
		fn_reparent( '#genresAndManufacturer', $J( '#appLinksAndInfo' ) );
	}

	// the window resize message handler is for layout adjustements that require more logic than reparenting based on screen size
	var defaultShareFlex = $J('#shareBtn').css('flex-grow');
	var defaultFollowFlex = $J('#queueBtnFollow').css('flex-grow');
	var defaultReportFlex = $J('#reportBtn').css('flex-grow');
	var defaultLanguageTableDisplay = $J('#languageTable').css('display');

	var msgWatch = bUseGamepadScreenMode ? 'Responsive_GamepadScreenModeToggled' : 'Responsive_MobileScreenModeToggled';
	$J(window).on( msgWatch, function() {

		var bUseNewUX = ( bUseGamepadScreenMode || ( window.UseMobileScreenMode && window.UseMobileScreenMode() ) );

		// if one of the wishlist buttons are visible make the action buttons flex grow so the two rows of buttons match width.
		if ( bUseNewUX && ( $J('#add_to_wishlist_area').is(':visible')
			|| $J('#add_to_wishlist_area_success').is(':visible')
			|| $J('#add_to_wishlist_area_fail').is(':visible') ) )
		{
			$J('#shareBtn').css('flex-grow', '1');
			$J('#queueBtnFollow').css('flex-grow', '1');
			$J('#reportBtn').css('flex-grow', '1');
		}
		else
		{
			$J('#shareBtn').css('flex-grow', defaultShareFlex);
			$J('#queueBtnFollow').css('flex-grow', defaultFollowFlex);
			$J('#reportBtn').css('flex-grow', defaultReportFlex);
		}

		// if we're in a small screen layout reveal all language options within the languageTable
		// don't bother trying to re-hide these if the user later resizes outside small screen
		if ( bUseNewUX )
		{
			var $LanguageOptions = $J('#languageTable').find('tr');
			$LanguageOptions.each( function() {
				$J(this).css('display','');
			} );

			// hide the 'see all X languages" link since all languages are now visible
			$J('#languageTable').find('.all_languages').css('display', 'none');
		}

		// hide the language table on small screens since a banner is clicked to reveal it
		//
		// putting a display:none in CSS for small screen sizes doesn't work well because the
		// CSS values don't override the display state set by the language banner click handler
		$J('#languageTable').css('display', bUseNewUX ? 'none' : defaultLanguageTableDisplay );
	});
	$J(window).trigger( msgWatch );
}

function BindFocusVideoOnTablet()
{
	$J( '.highlight_movie' ).on( "focusout", function( event ) {
		this.pause();
	} );
}

function ToggleShowAllPackageContentsText( event )
{
	const elContainer = event.target.parentNode.parentNode;
	elContainer.classList.toggle( 'package_contents_collapsed');
}

function CheckClientBootProtection( strType )
{
	let element = document.querySelector( `[data-bootprotection="${ strType }"]` );
	if ( !element )
		return;

	if ( typeof SteamClient === "undefined" || !SteamClient.Compat || !SteamClient.Compat.CheckBootProtectionEnabled )
		return;

	if ( strType != 'secureboot_tpm2' )
		return;

	SteamClient.Compat.CheckBootProtectionEnabled( '2', true ).then( ( bEnabled ) => {
		if ( !bEnabled )
			element.style.display = 'block';
	} );
}

// Go through images on the store page and add:
// - Click to play/pause for animated images.
// - Magnifying glass to zoom in when an image has a bigger version available.
$J(document).ready(function() {
	// TODO: add back initial paused state is based reduced motion preference. We were using
	// `window.matchMedia("(prefers-reduced-motion: reduce)").matches` but it turns out that this is set when users
	// don't expect it, such as if they have some animations turned off in Windows or other things. We're going to
	// add a setting to client and then we can plumb it through here, which should help.
	const bInitiallyPaused = false;
	let bPaused = bInitiallyPaused;

	function addActionBar($el) {
		const $iconArea = $J(`<div class='bb_img_icons' />`);
		$el.append($iconArea);
		return $iconArea;
	}

	function addPlayPauseIcon($outerDiv, $actionBar) {
		const strTooltip = "Your browser has a setting enabled to reduce on-screen motion, so this animated image is paused by default.";
		const strPanel = 'data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" role="button"';
		const $btnPlayPause = $J(`<div class='bb_img_play_pause' ${strPanel} data-tooltip='${strTooltip}' data-tooltip-visible=${bInitiallyPaused}>
			<img width="18" height="18" draggable="false" />
		</div>`);
		$actionBar.append($btnPlayPause);

		$btnPlayPause.on("click", function(e) {
			e.stopPropagation(); // so it doesn't double trigger outer click
			$outerDiv.trigger("click");
		});

		return $btnPlayPause;
	}

	function addExpandIcon($actionBar, $img, bigSrc) {
		const strPanel = 'data-panel="{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" role="button"';
		const $btnExpand = $J(`<div class='bb_img_expand' ${strPanel}>🔎</div>`);
		$actionBar.append($btnExpand);

		$btnExpand.on("click", function(e) {
			const newSrc = bigSrc && bigSrc.length ? bigSrc : $img.attr("src");
			window.open(newSrc, "_blank");
		});

		return $btnExpand;
	}

	function updatePlayPauseStyle($el, bPaused, bInitial) {
		$el.toggleClass("paused", bPaused);
		$el.toggleClass("playing", !bPaused);
		const $img = $el.find('img');
		$img.attr('src', bPaused ? "/public/images/ico/media_playback/play.svg" : "/public/images/ico/media_playback/pause.svg");
		$img.attr('alt', bPaused ? "Play animation" : "Pause animation");
		if (!bInitial) {
			// hide the initial tooltip, that should only show if the image started paused and has never been played
			$el.removeAttr("data-tooltip-visible");
		}
	}

	function updatePlayPauseOnAll()
	{
		bPaused = !bPaused;

		$J(".bb_img_ctn").each(function() {
			const $outerDiv = $J(this);

			const $pic = $outerDiv.find("picture");
			const $video = $outerDiv.find("video");

			const bVideoWithSources = $video.length !== 0 && $video.find("source").length > 0;

			const $btnPlayPause = $outerDiv.find('.bb_img_play_pause');

			if ($pic.length > 0) {
				// handle click-to-play for picture elements
				const $source = $pic.find("source");
				const $img = $pic.find("img");

				const pausedSrc = $img.attr("src");
				let animatedSrc = $source.attr("srcset");

				// store the source's srcset the first time we come through here so we have it after we change it
				if (!$source.data('original-srcset')) {
					$source.data('original-srcset', animatedSrc);
				} else {
					animatedSrc = $source.data('original-srcset');
				}

				// on first click, drop the media attribute so the source always applies
				if ($source.attr("media")) {
					$source.removeAttr("media");
				}

				$source.attr("srcset", bPaused ? pausedSrc : animatedSrc);
				updatePlayPauseStyle($btnPlayPause, bPaused, false);

				// force re-evaluation by replacing <img src> with a dummy and then back
				const temp = $img.attr("src");
				$img.attr("src", "").attr("src", temp);
			} else if (bVideoWithSources) {
				// handle click-to-play for video elements
				const elVideo = $video[0];

				if (bPaused) {
					elVideo.pause();
				} else {
					elVideo.play();
				}

				updatePlayPauseStyle($btnPlayPause, bPaused, false);
			}
		});
	}

	$J(".bb_img_ctn").each(function() {
		const $outerDiv = $J(this);

		const $pic = $outerDiv.find("picture");
		const $video = $outerDiv.find("video");
		const $img = $outerDiv.find("img");

		const $actionBar = addActionBar($outerDiv);

		// only imgs can have expand buttons
		let $btnExpand = null;
		const nColumnWidth = 780;
		if ($img.length !== 0 && ($img.data("big-src") !== undefined || $img.attr("width") > nColumnWidth * 1.25)) {
			$btnExpand = addExpandIcon($actionBar, $img, $img.data("big-src"));
		}

		const bVideoWithSources = $video.length !== 0 && $video.find("source").length > 0;

		// only picture and video elements have play/pause buttons
		let $btnPlayPause = null;
		if ($pic.length !== 0 || bVideoWithSources) {
			$btnPlayPause = addPlayPauseIcon($outerDiv, $actionBar);
			updatePlayPauseStyle($btnPlayPause, bPaused, true);
		}

		if ($pic.length > 0) {
			// handle click-to-play for picture elements
			$outerDiv.on("click", function() {
				updatePlayPauseOnAll();
			});
		} else if (bVideoWithSources) {
			// handle click-to-play for video elements
			const elVideo = $video[0];

			if (bPaused) {
				elVideo.removeAttribute("autoplay");
			}

			$outerDiv.on("click", function() {
				updatePlayPauseOnAll();
			});
		}
	});
});

