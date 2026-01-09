
HelpWizard = {
	m_sCurrentPage: null,
	m_steamid: '',
	m_bUseHistoryAPI: false,
	m_bInSearch: false,

	LoadPageFromHash: function( fresh_page_load, url, link_click, search_text ) {
		var wizard_url = url;
		if ( !wizard_url )
		{
			if ( window.location.hash.length < 2 )
				wizard_url = 'Home';
			else
				wizard_url = window.location.hash.replace( /^#!?/,'');
		}

				if ( wizard_url.toLowerCase().startsWith('login') )
		{
			window.location = "https://help.steampowered.com/login" + wizard_url.slice( 5 );
			return;
		}

		var page_url = wizard_url;
		var iQueryString = wizard_url.indexOf( '?' );
		if ( iQueryString >= 0 )
		{
			// strip search term out of wizard_url
			var rgQueryParams = iQueryString >= 0 ? $J.deparam( wizard_url.substr( iQueryString + 1 ) ) : {};

			if ( rgQueryParams.text )
			{
				page_url = wizard_url.substr( 0, iQueryString );
				search_text = rgQueryParams.text;
				delete rgQueryParams.text;
				var strQuery = $J.param( rgQueryParams );
				if ( strQuery )
					page_url += '?' + strQuery;
			}
		}

		if ( page_url == this.m_sCurrentPage )
		{
			$J('#help_search_support_input').val( search_text ).change();
			return;
		}
		this.m_sCurrentPage = page_url;

		// hide any tooltips that were visible
		$J('#wizard_contents [data-help-tooltip]' ).each( function() { $J(this ).v_tooltip('hide'); } );

		// fade the page out
		$J( '#page_content' ).removeClass( 'page_loaded page_error' );

		$J( '#loading_throbber' ).removeClass('page_loaded');

		if ( HelpWizard.m_bUseHistoryAPI )
		{
			if ( link_click )
				history.pushState( {wizard_url: wizard_url}, '', wizard_url == 'Home' ? 'https://help.steampowered.com/' : 'https://help.steampowered.com/wizard/' + wizard_url );
			else
				history.replaceState( {wizard_url: wizard_url, search_term: search_text }, '', wizard_url == 'Home' ? 'https://help.steampowered.com/' : 'https://help.steampowered.com/wizard/' + wizard_url );
		}

		try
		{
			// https://developers.google.com/analytics/devguides/collection/analyticsjs/single-page-applications
			ga( 'set', 'page', HelpWizard.m_bUseHistoryAPI ? window.location.pathname + window.location.search : '/wizard/' + wizard_url );
			if ( link_click )
				ga( 'send', 'pageview' );
		}
		catch ( e )
		{
		}


		$J.ajax( {
			url: 'https://help.steampowered.com/wizard/' + wizard_url,
			type: 'GET',
			data: $J.extend( {}, g_rgDefaultWizardPageParams, {
			} )
		} ).fail( function( jqxhr ) {
			HelpWizard.ShowPageError();
		} ).done( function( data ) {
			if ( typeof Valve_OnHelpWizardNavigate != 'undefined' )
				Valve_OnHelpWizardNavigate( data );

			if ( data.redirect )
			{
				if ( data.replace )
					window.location.replace( data.redirect );
				else
					window.location = data.redirect;
				return;
			}

			document.title = data.title || 'Steam Support';

			if ( !data.html )
			{
				HelpWizard.ShowPageError();
				return;
			}

			if ( HelpWizard.m_steamid != data.steamid )
			{
				HelpWizard.UpdateMenuGlobalActions();
				HelpWizard.m_steamid = data.steamid;
			}

			HelpWizard.SetPageContent( data.html );
			HelpWizard.FinishPageLoad();

			// TODO: really only want this when navigating forward, back would remember where you left off otherwise
			if ( !HelpWizard.m_bUseHistoryAPI || link_click )
				$J(window ).scrollTop( 0 );

		} ).always( function() {
			HelpWizard.m_bSearchBoxMoved = false;

			if ( search_text )
			{
				$J('#help_search_support_input').val( search_text ).change();
			}

       		$J( '#loading_throbber' ).addClass( 'page_loaded' );
		} );
	},

	SetPageContent: function( strHTML ) {
		$J('#wizard_contents').html( '<div class="wizard_content_wrapper">' + strHTML + '</div>' );
	},

	FinishPageLoad: function() {
		$J( '#page_content' ).addClass( 'page_loaded' );

		this.BindSearchInputs();

		BindHelpTooltip($J('#wizard_contents [data-help-tooltip]'));

		if ( g_rgDefaultWizardPageParams.gamepad )
		{
		    $J( '.help_wizard_button' ).each(
		        function( index ) {
		            if ( index === 0 )
		            {
		                $J( this ).attr( "data-panel","{\"autoFocus\":true}" );
		            }
		            else
		            {
		                $J( this ).attr( "data-panel","[]" );
		            }
		        }
		    );
		}
	},

	InitStaticPage: function()
	{
		this.FinishPageLoad();

		var wizard_url = this.GetWizardURL( window.location.href );
		var page_url = wizard_url;
		var search_text = null;

		var iQueryString = wizard_url.indexOf( '?' );
		if ( iQueryString >= 0 )
		{
			// strip search term out of wizard_url
			var rgQueryParams = iQueryString >= 0 ? $J.deparam( wizard_url.substr( iQueryString + 1 ) ) : {};

			if ( rgQueryParams.text )
			{
				page_url = wizard_url.substr( 0, iQueryString );
				search_text = rgQueryParams.text;
				delete rgQueryParams.text;
				var strQuery = $J.param( rgQueryParams );
				if ( strQuery )
					page_url += '?' + strQuery;
			}
		}

		this.m_sCurrentPage = page_url;
		if ( search_text )
			$J('#help_search_support_input').val( search_text ).change();
	},

	GetWizardURL: function( href ) {
		var base = 'https://help.steampowered.com/';
		// chop off base url if it's prefixed on the link
		if ( href.substr( 0, base.length ) == base )
		{
			// help site url
			href = href.substr( base.length );
		}

		if ( href.match( 'ViewAttachment' ) )
        {
            return null;
        }

		var matches = href.match( /^\/*(?:#!?|wizard)\/*/ );
		if ( matches )
		{
			href = href.substr( matches[0].length );

			// does this wizard url have a hash component in it?  This happens when things use the old
			//	hash change method of navigation
			var iHash = href.indexOf( '#' );
			if ( iHash > 0 && iHash + 1 < href.length )
			{
				href = href.substr( iHash + 1 );
			}

			return href;
		}
		else if ( href.length == 0 || href[0] == '?' )
		{
			return 'Home' + href;
		}
		else
		{
			return null;
		}
	},

	// cludgy global to use because browsers seem to take a while to actually update window.history ?
	m_bInPopState: false,

	HookOnHashChange: function() {
		HelpWizard.m_bUseHistoryAPI = !!(window.history && window.history.pushState);
		this.m_sCurrentPage = HelpWizard.GetWizardURL( window.location.href );

		// used to avoid redundant calls to LoadPageFromHash when navigating through hash URLs (still used for search)
		var strPoppedStateHash;

		if ( HelpWizard.m_bUseHistoryAPI )
		{
			$J(document).on('click', 'a', function(e) {
				var wizard_url = HelpWizard.GetWizardURL( $J(this).attr('href') );

				if ( wizard_url !== null )
				{
					e.preventDefault();
					HelpWizard.LoadPageFromHash( false, wizard_url, true );
				}

			});
			$J(window).on('popstate', function( e ) {
				HelpWizard.m_bInPopState = true;
				var oState = e.originalEvent.state;

				var wizard_url = oState && oState.wizard_url;
				if ( !wizard_url )
					wizard_url = HelpWizard.GetWizardURL( window.location.href );
				HelpWizard.LoadPageFromHash( false, wizard_url, false, oState && oState.search_text );

				strPoppedStateHash = window.location.hash;
				HelpWizard.m_bInPopState = false;
			});
		}

		$J(window).on( 'hashchange', function() {

			if ( strPoppedStateHash !== window.location.hash )
				HelpWizard.LoadPageFromHash( false );
		});
	},

	ShowPageError: function()
	{
		try
		{
			ga( 'send', 'pageview', '/wizard/PageError/' );
		}
		catch ( e )
		{
		}

		$J( '#page_content' ).removeClass( 'page_loaded' );
		$J( '#page_content' ).addClass( 'page_error' );
	},

	PromptLogin: function( need_password )
	{
		var strQuery = '?';
		if ( need_password === true )
			strQuery += 'need_password=1&';
		var redirect = window.location.pathname;
		if ( window.location.search )
			redirect += window.location.search;
		if ( window.location.hash && window.location.hash.length > 2 )
			redirect += '#' + window.location.hash;

		HelpWizard.LoadPageFromHash( false, 'login' + strQuery + 'redir=' + encodeURIComponent( redirect ) );
	},

	SubmitRefundRequest: function( help_issue, appid, transid, gid_line_item, refund_to_wallet, spoofing ) {

		if ( this.m_bLoadingRefundDialog )
			return;	// don't submit while we are potentially loading new data

		var explanation = $J('#refund_text_input').val();
		explanation = explanation.substring(0,4000);	// don't send up too many characters

		if ( spoofing )
		{
			alert( 'you cannot submit a ticket because you are spoofing as another user' );
			return;
		}

		try
		{
			ga( 'send', 'pageview', '/wizard/AjaxSubmitRefundRequest/' );
		}
		catch ( e )
		{
		}

		$J.ajax( {
			url: 'https://help.steampowered.com/wizard/AjaxSubmitRefundRequest/',
			type: 'POST',
			data: $J.extend( {}, g_rgDefaultWizardPageParams, {
				help_issue_origin: help_issue,
				help_issue: $J('#refund_reason_selector').val(),
				contact_email: $J('#contact_email').data( 'email' ),
				issue_text: explanation,
				issue_appid: appid,
				issue_transid: transid,
				issue_line_item: gid_line_item,
				refund_to_wallet: refund_to_wallet,
				action_id: HelpWizard.m_ulActionID,
				serial_number: $J('#hardware_serial_entry').val()
			} )
		} ).fail( function( jqxhr ) {
			$J('#help_refund_request_dialog').html( 'failed to load' );
		} ).done( function( data ) {
			if ( data.need_password )
			{
								HelpWizard.PromptLogin( true );
			}

			if ( data.ref )
			{
				HelpWizard.LoadPageFromHash( false, 'HelpRequest/' + data.ref, false );
				return;
			}

			if ( !data.html )
			{
				HelpWizard.ShowPageError();
				return;
			}

			$J( '#help_refund_request_dialog' ).html( data.html );

		} ).always( function() {
		} );
	},

	CancelHelpRequest: function( reference_code, transid, gid_line_item )
	{
		ShowConfirmDialog(
				'Cancel your refund request',
				'<div class="help_page_title">Are you sure?</div>' +
					'You can cancel this refund request if you\'d like to keep your purchase. You can submit a new refund request in the future.' +
					'<div id="help_cancel_refund_request_receipt" class="help_purchase_detail_box help_purchase_package">' +
					"<div class=\"LoadingWrapper\">\n\t\t\t\t\t<div class=\"LoadingThrobber\">\n\t\t\t\t\t\t<div class=\"Bar Bar1\"><\/div>\n\t\t\t\t\t\t<div class=\"Bar Bar2\"><\/div>\n\t\t\t\t\t\t<div class=\"Bar Bar3\"><\/div>\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/div>" +
					'</div>',
				'Cancel refund request',
				'I\'d like a refund'
		).done( function() {
			$J.ajax( {
				url: 'https://help.steampowered.com/wizard/AjaxCancelHelpRequest/' + reference_code,
				type: 'POST',
				data: $J.extend( {}, g_rgDefaultWizardPageParams, {
					reference_code: reference_code
				} )
			} ).fail( function( jqxhr ) {
				ShowAlertDialog( 'Cancel your refund request', 'There was a problem canceling your request. Please try again.' );
			} ).done( function( data ) {
				if ( data.success )
				{
					ShowAlertDialog( 'Cancel your refund request',
							'Your refund request has been canceled.'
					).done( function() {
						$J('#help_refund_request_active').remove();
					} );
				}
				else
				{
					ShowAlertDialog( 'Cancel your refund request',
							'There was a problem canceling your request. Please try again.'
					);
				}
			} );
		} );

		$J.ajax( {
			url: 'https://help.steampowered.com/wizard/AjaxPackagePurchaseReceipt/',
			type: 'GET',
			data: $J.extend( {}, g_rgDefaultWizardPageParams, {
				transid: transid,
				line_item: gid_line_item
			} )
		} ).done( function( data ) {
			if ( data.html )
			{
				$J('#help_cancel_refund_request_receipt').html( data.html );
			}
			else
			{
				$J('#help_cancel_refund_request_receipt').remove();
			}
		} );
	},

	BindSearchInputs: function()
	{
		var _this = this;
		$J( '#help_search_support_input' ).each( function() {
			var $Term = $J(this);
			if ( $Term.data('searchBound') )
				return;

			$Term.data( 'searchBound', true );

			var method = $Term.data('method') || 'Home';

			// how long we wait after the first keypress after a search or page load
			var k_nStartSearchTimeoutMS = 400;

			// how long we extend the wait after each keypress.  We always time out at 3x the base search timeout ms
			var k_nSearchKeypressTimeoutExtensionMS = 125;

			var sLastVal = $Term.val();
			var nTermTimer = 0;
			var tsScheduledTimer = 0;
			var tsLastSearch = 0;

			var bPushedSearchState = false;

			var strSearchBaseURL = null;
			var rgSearchBaseURLParams = {};

			$Term.on( 'keyup paste change', function( event ) {
				var sNewVal = $Term.val();
				if ( sNewVal != sLastVal )
				{
					if ( HelpWizard.m_bUseHistoryAPI )
					{
						if ( !bPushedSearchState )
						{
							strSearchBaseURL = HelpWizard.GetWizardURL( window.location.href );
							var iQueryString = strSearchBaseURL.indexOf( '?' );
							if ( iQueryString >= 0 )
							{
								rgSearchBaseURLParams = iQueryString >= 0 ? $J.deparam( strSearchBaseURL.substr( iQueryString + 1 ) ) : {};
								strSearchBaseURL = strSearchBaseURL.substr( 0, iQueryString );
							}

							// if we already have the search text in the url, we have already pushed state
							if ( rgSearchBaseURLParams.text && rgSearchBaseURLParams.text == sNewVal )
							{
								bPushedSearchState = true;
							}
						}

						rgSearchBaseURLParams.text = sNewVal;
						var strQuery = '?' + $J.param( rgSearchBaseURLParams );
						var strWizardURL = strSearchBaseURL + strQuery;
						var strFullURL = ( strSearchBaseURL == 'Home' ? 'https://help.steampowered.com/' : 'https://help.steampowered.com/wizard/' + strSearchBaseURL ) + strQuery;

						if ( !bPushedSearchState && sNewVal )
						{
							history.pushState( {wizard_url: strWizardURL, search_text: sNewVal }, '', strFullURL );
							bPushedSearchState = true;
						}
						else if ( bPushedSearchState && sNewVal )
						{
							history.replaceState( { wizard_url: strWizardURL, search_text: sNewVal }, '', strFullURL );
						}
						else if ( bPushedSearchState && !sNewVal )
						{
							bPushedSearchState = false;

							// user erased search text, go back (otherwise blank new val might mean they hit the back button)
							if ( history.state && history.state.search_text && !HelpWizard.m_bInPopState )
							{
								history.back();
							}
						}
					}

					_this.MoveUpSearchBox();

					var tsChange = $J.now();
					var msDelayBeforeTimeout = k_nStartSearchTimeoutMS;
					if ( !tsLastSearch )
						tsLastSearch = tsChange;

					if ( nTermTimer && tsScheduledTimer - tsChange < k_nSearchKeypressTimeoutExtensionMS && tsChange - tsLastSearch < 3 * k_nStartSearchTimeoutMS )
					{
						// we have one scheduled within 50ms, just bump it out a little
						msDelayBeforeTimeout = k_nSearchKeypressTimeoutExtensionMS;
						window.clearTimeout( nTermTimer );
						nTermTimer = 0;
					}

					if ( !nTermTimer )
					{
						tsScheduledTimer = $J.now() + msDelayBeforeTimeout;
						nTermTimer = window.setTimeout( function() {
							nTermTimer = 0;
							tsLastSearch = 0;
							sLastVal = $Term.val();
							_this.SearchSupportFAQs( v_trim( sLastVal ), method );
						}, msDelayBeforeTimeout);
					}
				}
			});

		});
	},

	UserSearchKeyUp: function( e, appid )
	{
		var time_now_ms = $J.now();
		this.m_nLastKeyPressTimeMS = time_now_ms;
		if ( e.which == 13 )
			HelpWizard.DoUserSearch( time_now_ms, appid );	// ENTER key triggers immediately
		else
			setTimeout( function() { HelpWizard.DoUserSearch( time_now_ms, appid ); }, 400 );

	},
	DoUserSearch: function( time_last_keyup, appid )
    	{
    		if ( time_last_keyup == this.m_nLastKeyPressTimeMS )
    		{
    			var text = $J( '#help_usersearch_input' ).val();
    			$J.ajax({
                			type: "GET",
                			url: "https://help.steampowered.com/wizard/ScamUserSearch/",
                			data: $J.extend( {}, g_rgDefaultWizardPageParams, {
                				text: text,
                				appid: appid
                			} )
                		}).done( function( data ) {
                			$J('#user_search_results').html( data.html );
                		}).fail( function() {
                			$J('#user_search_results').html( '' );
                		}).always( function() {

                		} );
    		}
    	},


	m_bSearchBoxMoved: false,
	MoveUpSearchBox: function() {
		if ( $J('#help_search_support_input').val().length > 0 )
		{
			if ( !this.m_bSearchBoxMoved )
			{
				if ( this.m_bInPopState )
					$J('#help_home_block').hide();
				else
				{
					$J('#help_home_block').slideUp( 200 );
					$J('#help_home_block').hide( 200 );
				}
				$J('#search_breadcrumbs').show();
			}
			this.m_bSearchBoxMoved = true;
		}
		else
		{
			if ( this.m_bSearchBoxMoved )
			{
				if ( this.m_bInPopState )
					$J('#help_home_block').show();
				else
					$J('#help_home_block').show( 100 );

				$J('#faqs_search_results').html( '' );
				$J('#search_breadcrumbs').hide();
				this.m_bSearchBoxMoved = false;
			}
			this.m_sSearchResultDisplayed = null;
		}
	},

	SearchSupportFAQs: function( text, method )
	{
		if ( !text )
		{
			$J('#faqs_search_results').empty();
			return;
		}

		try
		{
			ga( 'send', 'pageview', '/wizard/AjaxSearchResults/?text=' + encodeURIComponent(text) );
		}
		catch ( e )
		{
		}

		$J( '#loading_throbber' ).removeClass('page_loaded');
		$J.ajax({
			type: "GET",
			url: "https://help.steampowered.com/wizard/AjaxSearchResults/",
			data: $J.extend( {}, g_rgDefaultWizardPageParams, {
				text: text,
				method: method,
				l: g_strLanguage
			} )
		}).done( function( data ) {
			if ( typeof Valve_OnHelpWizardNavigate != 'undefined' )
				Valve_OnHelpWizardNavigate( data );

			// update the text if the search term hasn't changed since we got the result
			$J('#faqs_search_results').html( data.html );
			$J('#faqs_search_results').fadeTo( 0, 1 );
		}).always( function() {
			$J( '#loading_throbber').addClass('page_loaded');
		} );
	},

	m_bLoadingRefundDialog: false,
	m_nRefundAppID: null,
	m_nRefundPackageID: null,
	m_nRefundIssueID: null,
	m_nRefundTransID: null,

	m_ulActionID: 0,
	m_bActionConfirmed: false,
	CheckConfirmationState: function() {
		$J.ajax({
			type: "GET",
			url: "https://help.steampowered.com/wizard/AjaxRefundRequestConfirmation",
			data: $J.extend({}, g_rgDefaultWizardPageParams, {
				action_id: this.m_ulActionID,
				action_type: 13
			})
		}).fail( function() {
			this.m_ulActionID = null;
		}).done( function( data ) {
			switch ( data.state )
			{
			case 1:
				HelpWizard.m_ulActionID = data.action_id;
				if ( data.html && data.html.length )
				{
					if ($J('#refund_request_button'))
						$J('#refund_request_button').hide();
					$J( '#help_refund_request_form' ).html(data.html);
				}
				setTimeout(function () {
					HelpWizard.CheckConfirmationState();
				}, 2000);
				break;

			case 2:
				HelpWizard.m_bActionConfirmed = true;

				$J('#help_refund_request_form').html('<div class="help_refund_request_area"><h1>Checking refund eligibility for this purchase...</h1><br><span style="margin:auto"><img src="https://help.steampowered.com/public/shared/images/login/throbber.gif" alt=""></span></div>');
				HelpWizard.ShowRefundRequestForm( HelpWizard.m_nRefundIssueID, HelpWizard.m_nRefundAppID, HelpWizard.m_nRefundPackageID, HelpWizard.m_nRefundTransID, $J('#refund_wallet_selector').val(), $J('#refund_info_box') );
				break;

			case 3:
			case 4:
			case 5:
				this.m_ulActionID = null;
				if ( data.html && data.html.length )
				{
					$J( '#help_refund_request_form' ).html(data.html);
				}
				else
				{
					$J('#help_refund_request_form').html('<div class="error_bg"><div id="error_description">We were unable to load information about this purchase. Please try again later. We apologize for the inconvenience.</div></div>' );
				}
				break;
			}
		});
	},

	ShowRefundRequestForm: function( issueid, appid, packageid, transid, refund_to_wallet, loading_div ) {
		if ( this.m_bLoadingRefundDialog )
			return;

		if ( $J('#help_hardware_return_form') )
		{
			$J('#help_hardware_return_form').html('');
		}

		if ( loading_div )
		{
			loading_div.html('<span style="margin:auto"><img src="https://help.steampowered.com/public/shared/images/login/throbber.gif" alt=""></span>');
		}
		else
		{
			$J('#help_refund_request_form').html('<div class="help_refund_request_area"><h1>Checking refund eligibility for this purchase...</h1><br><span style="margin:auto"><img src="https://help.steampowered.com/public/shared/images/login/throbber.gif" alt=""></span></div>');
		}

		try
		{
			ga( 'send', 'pageview', '/wizard/AjaxRefundRequestForm/?issueid=' + issueid + '&appid=' + appid + '&transid=' + transid + '&wallet=' + refund_to_wallet );
		}
		catch ( e )
		{
		}

		this.m_nRefundAppID = appid;
		this.m_nRefundPackageID = packageid;
		this.m_nRefundIssueID = issueid;
		this.m_nRefundTransID = transid;

		if (!this.m_bActionConfirmed )
		{
			this.CheckConfirmationState();
			return;
		}

		this.m_bLoadingRefundDialog = true;
		$J.ajax({
			type: "GET",
			url: "https://help.steampowered.com/wizard/AjaxRefundRequestForm",
			data: $J.extend({}, g_rgDefaultWizardPageParams, {
				issueid: issueid,
				appid: appid,
				packageid: packageid,
				transid: transid,
				wallet: refund_to_wallet
			})
		}).fail(function () {
			$J('#help_refund_request_form').html('<div class="error_bg"><div id="error_description">We were unable to load information about this purchase. Please try again later. We apologize for the inconvenience.</div></div>'
		)
			;
		}).done(function (data) {
			if (data.html && $J('#help_refund_request_form')) {
				if ($J('#refund_request_button'))
					$J('#refund_request_button').hide();
				if ($J('#refund_gift_request_button'))
					$J('#refund_gift_request_button').show();
				$J('#help_refund_request_form').html(data.html);

				if (data.perf_data)
					$J('#help_refund_request_form').append(data.perf_data);
			} else if (data.need_login) {
				HelpWizard.PromptLogin(true);
			} else {
				$J('#help_refund_request_form').html('<div class="error_bg"><div id="error_description">Sorry! An unexpected error has occurred while processing your request. Please try again.</div></div>'
			)
				;
			}
		}).always(function () {
			HelpWizard.m_bLoadingRefundDialog = false;
		});
	},

	UpdateRefundSelector: function() {
		var transid = $J('#refund_selector').val();
		var refund_to_wallet = $J('#refund_wallet_selector').val();
		this.ShowRefundRequestForm( this.m_nRefundIssueID, this.m_nRefundAppID, this.m_nRefundPackageID, transid, refund_to_wallet, $J('#refund_info_box') );
	},

	ShowSubmitRefundArea: function() {
		$J('#refund_text_input').show();
		$J('#refund_submit_area').show();
		$J('#refund_submit_area_extra').show();
	},

	ShowGiftRefundRequestForm: function( gid_guestpass ) {
		this.m_bLoadingRefundDialog = true;
		$J.ajax({
			type: "GET",
			url: "https://help.steampowered.com/wizard/AjaxGiftRefundRequestForm",
			data: $J.extend( {}, g_rgDefaultWizardPageParams, {
				gid_guestpass: gid_guestpass
			} )
		}).fail( function() {
			$J('#help_refund_request_form').html('<div class="error_bg"><div id="error_description">We were unable to load information about this purchase. Please try again later. We apologize for the inconvenience.</div></div>');
		}).done( function( data ) {
			if ( data.html && $J('#help_refund_request_form') )
			{
				if ( $J('#refund_request_button') )
					$J('#refund_request_button').show();
				if ( $J('#refund_gift_request_button') )
					$J('#refund_gift_request_button').hide();
				$J('#help_refund_request_form').html( data.html );
			}
			else
			{
				$J('#help_refund_request_form').html('<div class="error_bg"><div id="error_description">Sorry! An unexpected error has occurred while processing your request. Please try again.</div></div>');
			}
		}).always( function() {
			HelpWizard.m_bLoadingRefundDialog = false;
		} );
	},

	MarkGiftRefundableChange: function( gid_guestpass, gid_giftcard ) {
		var mark_refundable = $J('#gift_refundable').prop('checked');

		if ( gid_giftcard === undefined ) {
			gid_giftcard = null;
		}

		$J.ajax( {
			url: 'https://help.steampowered.com/wizard/AjaxMarkGiftRefundable/',
			type: 'POST',
			data: $J.extend( {}, g_rgDefaultWizardPageParams, {
				gid_guestpass: gid_guestpass,
				gid_giftcard: gid_giftcard,
				mark_refundable: mark_refundable ? 1 : 0
			} )
		} ).fail( function( jqxhr ) {
			$J('#help_refund_request_dialog').html( 'failed to load' );
		} ).done( function( data ) {
			if ( data.marked_refundable )
				$J('#gift_refundable_notes').show();
			else
				$J('#gift_refundable_notes').hide();

		} ).always( function() {
		} );
	},

	// password reset related
	m_strLastPassword: '',
	m_timerCheckPassword: null,
	m_timerCheckReenterPassword: null,
	m_bPasswordAvailable: false,

	SetPasswordTag: function( strTagID, strClass, strText )
	{
		if ( strText.length == 0 )
		{
			$J( strTagID ).removeClass( 'visible' );
			return;
		}

		$J( strTagID ).text( strText );
		$J( strTagID ).removeClass( 'error warning' );
		$J( strTagID ).addClass( strClass );
		$J( strTagID ).addClass( 'visible' );
	},

	CheckPasswordStrength: function( strLogin ) {
		var strPassword = $J( '#password_reset' ).val();
		if ( strPassword == this.m_strLastPassword )
			return;

		this.m_bPasswordAvailable = false;
		this.m_strLastPassword = strPassword;
		if ( this.m_timerCheckPassword )
		{
			clearTimeout( this.m_timerCheckPassword );
			this.m_timerCheckPassword = null;
		}

		this.m_timerCheckPassword = setTimeout( function() { HelpWizard.CheckPasswordAvailable( strLogin ); }, 250 );
	},

	IsPasswordProhibited: function( strLogin, strPassword ) {
		if ( strPassword.length < 8 )
			return 'Password must be at least 8 characters long';

		if ( strPassword.search( /[^\x00-\x7F]/g ) >= 0 )
			return 'Password can only contain ASCII characters';

		if ( strLogin.toLowerCase() == strPassword.toLowerCase() )
			return "Can't use your user name as your password";

		return null;
	},

	// returns null if no error, an error string if there is one
	CheckPasswordValid: function( strLogin, strPassword ) {

		if ( strPassword == '' )
			return '';

		if ( strLogin.length > 0 && strLogin.toLowerCase() == strPassword.toLowerCase() )
			return 'Can\'t use your user name as your password';

		if ( strPassword.length < 7 )
			return 'Password must contain at least 7 characters';

		var iInvalidChar = strPassword.search( /[^\x00-\x7F]/g );
		if ( iInvalidChar >= 0 )
			return '%s can\'t be used in passwords'.replace( /%s/, strPassword.charAt( iInvalidChar ) );

		return null;
	},

	CheckPasswordAvailable: function( strLogin ) {
		this.m_timerCheckPassword = null;
		var strPassword = $J( '#password_reset' ).val();

		var strError = HelpWizard.CheckPasswordValid( strLogin, strPassword );
		if ( strError === '' )
			return HelpWizard.SetPasswordTag( '#password_tag', '', '' );
		if ( strError !== null )
			return HelpWizard.SetPasswordTag( '#password_tag', 'error', strError );

		var _this = this;
		$J.ajax({
			type: "POST",
			url: "https://help.steampowered.com/wizard/AjaxCheckPasswordAvailable/",
			data: $J.extend( {}, g_rgDefaultWizardPageParams, {
				password: strPassword
			} )
		}).done( function( data ) {
			$J( '#password_strength_display' ).removeClass( 'unchecked notallowed weak ok strong' );
			if ( !data.available )
			{
				_this.m_bPasswordAvailable = false;
				HelpWizard.SetPasswordTag( '#password_tag', 'error', 'Choose a less commonly used password' );
			}
			else
			{
				_this.m_bPasswordAvailable = true;
				var strStrength = HelpWizard.CalculatePasswordStrength( strPassword );
				if ( strPassword.length == 0 )
					HelpWizard.SetPasswordTag( '#password_tag', '', '' );
				else if ( strStrength == 'strong' )
					HelpWizard.SetPasswordTag( '#password_tag', 'good', '' );
				else
					HelpWizard.SetPasswordTag( '#password_tag', 'warning', 'Include a-z, A-Z, 0-9 or symbols for a stronger password' );
			}

			HelpWizard.CheckPasswordsMatch();
		});
	},

		CalculatePasswordStrength: function( pass ) {
		var bHasUppercase = false;
		var bHasLowercase = false;
		var bHasNumbers = false;
		var bHasSymbols = false;

		for( var i = 0; i < pass.length; ++i )
		{
			if ( pass.charAt(i) >= 'a' && pass.charAt(i) <= 'z' )
				bHasLowercase = true;
			else if ( pass.charAt(i) >= 'A' && pass.charAt(i) <= 'Z' )
				bHasUppercase = true;
			else if ( pass.charAt(i) >= '0' && pass.charAt(i) <= '9' )
				bHasNumbers = true;
			else
				bHasSymbols = true;
		}

		var nTypesOfChars = 0;
		if ( bHasUppercase ) nTypesOfChars++;
		if ( bHasLowercase ) nTypesOfChars++;
		if ( bHasNumbers ) nTypesOfChars++;
		if ( bHasSymbols ) nTypesOfChars++;

		if ( nTypesOfChars >= 3 )
		{
						return 'strong';
		}
		else if ( (nTypesOfChars < 2 && !bHasSymbols )  )
		{
						return 'weak';
		}

				return 'ok';
	},

	CheckReenterPassword: function()
	{
		HelpWizard.SetPasswordTag( '#reenter_tag', '', '' );
		if ( this.m_timerCheckReenterPassword )
			window.clearTimeout( this.m_timerCheckReenterPassword );

		this.m_timerCheckReenterPassword = window.setTimeout( this.CheckPasswordsMatch, 1000 );
	},

	CheckPasswordsMatch: function()
	{
		var strPassword = $J( '#password_reset' ).val();
		var strReenter = $J( '#password_reset_confirm' ).val();
		if ( strPassword.length > 0 && strReenter.length > 0 && strPassword != strReenter )
			HelpWizard.SetPasswordTag( '#reenter_tag', 'error', 'Passwords do not match' );
		else
			HelpWizard.SetPasswordTag( '#reenter_tag', '', '' );
	},

	SubmitPasswordChange: function( strSessionID, nAccountID, strLogin ) {
		var elError = $J( '#changepw_error_msg' );
		var strPassword = $J( '#password_reset' ).val();
		elError.hide();
		if ( strPassword != $J( '#password_reset_confirm' ).val() )
		{
			elError.text( 'Passwords do not match' ).slideDown();
			return;
		}

		if ( !this.m_bPasswordAvailable )
		{
			elError.text( 'The entered password is invalid' ).slideDown();
			return;
		}

		$J( '#change_password_form' ).addClass( 'loading' );
		$J.ajax({
			type: "POST",
			url: "https://help.steampowered.com/login/getrsakey/",
			data: $J.extend( {}, g_rgDefaultWizardPageParams, {
				username: strLogin
			} )
		}).fail( function( xhr ) {
			elError.text( 'An error occurred trying to handle that request. Please give us a few minutes and try again.' ).slideDown();
			$J( '#change_password_form' ).removeClass( 'loading' );
		}).done( function( data ) {
			HelpWizard.SubmitPasswordChangeRSA( strSessionID, nAccountID, data );
		});
	},

	SubmitPasswordChangeRSA: function( strSessionID, nAccountID, rsa ) {
		var elError = $J( '#changepw_error_msg' );
		if ( !rsa.publickey_mod || !rsa.publickey_exp || !rsa.timestamp )
		{
			elError.text( 'An error occurred trying to handle that request. Please give us a few minutes and try again.' ).slideDown();
			$J( '#change_password_form' ).removeClass( 'loading' );
			return;
		}

		var strPassword = $J( '#password_reset' ).val();

		var pubKey = RSA.getPublicKey( rsa.publickey_mod, rsa.publickey_exp );
		var strPasswordEncrypted = RSA.encrypt( strPassword, pubKey );

		try
		{
			ga( 'send', 'pageview', '/wizard/AjaxAccountRecoveryChangePassword/' );
		}
		catch ( e )
		{
		}

		$J.ajax({
			type: "POST",
			url: "https://help.steampowered.com/wizard/AjaxAccountRecoveryChangePassword/",
			data: $J.extend( {}, g_rgDefaultWizardPageParams, {
				s: strSessionID,
				account: nAccountID,
				password: strPasswordEncrypted,
				rsatimestamp: rsa.timestamp
			} )
		}).fail( function( xhr ) {
			elError.text( 'An error occurred trying to handle that request. Please give us a few minutes and try again.' ).slideDown();
		}).done( function( data ) {
			if ( data.hash )
			{
				window.location = 'https://help.steampowered.com/' + data.hash;
			}
			else if ( data.html )
			{
				HelpWizard.SetPageContent( data.html );
				return;
			}
			else
			{
				elError.text( data.errorMsg ).show();
			}
		}).always( function() {
			$J( '#change_password_form' ).removeClass( 'loading' );
		});
	},

	SubmitEmailChange: function( strSessionID, nAccountID ) {
		var elError = $J( '#changepw_error_msg' );
		var strEmail = $J( '#email_reset' ).val();
		elError.hide();

		$J( '#change_email_form' ).addClass( 'loading' );
		$J( "#email_reset" ).prop("readonly", true);

		try
		{
			ga( 'send', 'pageview', '/wizard/AjaxAccountRecoveryChangeEmail/' );
		}
		catch ( e )
		{
		}

		$J.ajax({
			type: "POST",
			url: "https://help.steampowered.com/wizard/AjaxAccountRecoveryChangeEmail/",
			data: $J.extend( {}, g_rgDefaultWizardPageParams, {
				s: strSessionID,
				account: nAccountID,
				email: strEmail
			} )
		}).fail( function( xhr ) {
			elError.text( 'An error occurred trying to handle that request. Please give us a few minutes and try again.' ).slideDown();
			$J( "#email_reset" ).prop("readonly", false);
		}).done( function( data ) {
			if ( data.show_confirmation )
			{
				$J('#change_email_area').hide();
				$J('#confirm_email_form').show();
			}
			else if ( data.hash )
			{
				window.location = 'https://help.steampowered.com/' + data.hash;
			}
			else if ( data.html )
			{
				HelpWizard.SetPageContent( data.html );
				return;
			}
			else
			{
				elError.text( data.errorMsg ).show();
				$J( "#email_reset" ).prop("readonly", false);
			}
		}).always( function() {
			$J( '#change_email_form' ).removeClass( 'loading' );
		});
	},

	ConfirmEmailChange: function( strSessionID, nAccountID ) {
		var elError = $J( '#changepw_error_msg' );
		var strEmail = $J( '#email_reset' ).val();
		var strEmailChangeCode = v_trim( $J( '#email_change_code' ).val() );
		elError.hide();

		$J( '#confirm_email_form' ).addClass( 'loading' );

		try
		{
			ga( 'send', 'pageview', '/wizard/AjaxAccountRecoveryConfirmChangeEmail/' );
		}
		catch ( e )
		{
		}

		$J.ajax({
			type: "POST",
			url: "https://help.steampowered.com/wizard/AjaxAccountRecoveryConfirmChangeEmail/",
			data: $J.extend( {}, g_rgDefaultWizardPageParams, {
				s: strSessionID,
				account: nAccountID,
				email: strEmail,
				email_change_code: strEmailChangeCode
			} )
		}).fail( function( xhr ) {
			elError.text( 'An error occurred trying to handle that request. Please give us a few minutes and try again.' ).slideDown();
		}).done( function( data ) {
			if ( data.hash )
			{
				window.location = 'https://help.steampowered.com/' + data.hash;
			}
			else if ( data.html )
			{
				HelpWizard.SetPageContent( data.html );
				return;
			}
			else
			{
				elError.text( data.errorMsg ).show();
			}
		}).always( function() {
			$J( '#confirm_email_form' ).removeClass( 'loading' );
		});
	},

	ResetPhoneNumber: function( strSessionID, nAccountID ) {

		$J( '#reset_phonenumber_form' ).addClass( 'loading' );

		var elError = $J( '#form_submit_error' );

		try
		{
			ga( 'send', 'pageview', '/wizard/AjaxAccountRecoveryResetPhoneNumber/' );
		}
		catch ( e )
		{
		}

		$J.ajax({
			type: "POST",
			url: "https://help.steampowered.com/wizard/AjaxAccountRecoveryResetPhoneNumber/",
			data: {
				sessionid: g_sessionID,
				s: strSessionID,
				account: nAccountID
			}
		}).fail( function( xhr ) {
			elError.text( 'An error occurred trying to handle that request. Please give us a few minutes and try again.' ).slideDown();
		}).done( function( data ) {
			if ( data.hash )
			{
				window.location = 'https://help.steampowered.com/' + data.hash;
			}
			else if ( data.html )
			{
				HelpWizard.SetPageContent( data.html );
				return;
			}
			else
			{
				elError.text( data.errorMsg ).show();
			}
		}).always( function() {
			$J( '#reset_phonenumber_form' ).removeClass( 'loading' );
		});
	},

	SubmitPhoneChange: function( strSessionID, nAccountID ) {
		var elError = $J( '#form_submit_error' );
		var strPhoneNumber = $J( '#phone_number_input' ).val();
		elError.hide();

		$J( '#change_phone_form' ).addClass( 'loading' );
		$J( "#phone_number_input" ).prop("readonly", true);

		try
		{
			ga( 'send', 'pageview', '/wizard/AjaxAccountRecoveryChangePhone/' );
		}
		catch ( e )
		{
		}

		$J.ajax({
			type: "POST",
			url: "https://help.steampowered.com/wizard/AjaxAccountRecoveryChangePhone/",
			data: $J.extend( {}, g_rgDefaultWizardPageParams, {
				s: strSessionID,
				account: nAccountID,
				phone_number: strPhoneNumber
			} )
		}).fail( function( xhr ) {
			elError.text( 'An error occurred trying to handle that request. Please give us a few minutes and try again.' ).slideDown();
			$J( "#phone_change_number" ).prop("readonly", false);
		}).done( function( data ) {
			if ( data.show_confirmation )
			{
				$J('#change_phone_area').hide();
				$J('#confirm_phone_form').show();
			}
			else if ( data.hash )
			{
				window.location = 'https://help.steampowered.com/' + data.hash;
			}
			else if ( data.html )
			{
				HelpWizard.SetPageContent( data.html );
				return;
			}
			else
			{
				elError.text( data.errorMsg ).show();
				$J( "#phone_number_input" ).prop("readonly", false);
			}
		}).always( function() {
			$J( '#change_phone_form' ).removeClass( 'loading' );
		});
	},

	ConfirmPhoneChange: function( strSessionID, nAccountID ) {
		var elError = $J( '#form_submit_error' );
		var strPhoneNumber = $J( '#phone_number_input' ).val();
		var strPhoneChangeCode = v_trim( $J( '#phone_change_code' ).val() );
		elError.hide();

		$J( '#confirm_phone_form' ).addClass( 'loading' );

		try
		{
			ga( 'send', 'pageview', '/wizard/AjaxAccountRecoveryConfirmChangePhone/' );
		}
		catch ( e )
		{
		}

		$J.ajax({
			type: "POST",
			url: "https://help.steampowered.com/wizard/AjaxAccountRecoveryConfirmChangePhone/",
			data: $J.extend( {}, g_rgDefaultWizardPageParams, {
				s: strSessionID,
				account: nAccountID,
				phone_number: strPhoneNumber,
				phone_change_code: strPhoneChangeCode
			} )
		}).fail( function( xhr ) {
			elError.text( 'An error occurred trying to handle that request. Please give us a few minutes and try again.' ).slideDown();
		}).done( function( data ) {
			if ( data.hash )
			{
				window.location = 'https://help.steampowered.com/' + data.hash;
			}
			else if ( data.html )
			{
				HelpWizard.SetPageContent( data.html );
				return;
			}
			else
			{
				elError.text( data.errorMsg ).show();
			}
		}).always( function() {
			$J( '#confirm_phone_form' ).removeClass( 'loading' );
		});
	},

	UpdatePhoneChina: function( strSessionID, nAccountID, strUpdateToken ) {
		var elError = $J( '#form_submit_error' );
		elError.hide();

		$J( '#confirm_phone_form' ).addClass( 'loading' );

		try
		{
			ga( 'send', 'pageview', '/wizard/AjaxAccountRecoveryUpdatedPhoneChina/' );
		}
		catch ( e )
		{
		}

		$J.ajax({
			type: "POST",
			url: "https://help.steampowered.com/wizard/AjaxAccountRecoveryUpdatedPhoneChina/",
			data: $J.extend( {}, g_rgDefaultWizardPageParams, {
				s: strSessionID,
				account: nAccountID,
				token: strUpdateToken
			} )
		}).fail( function( xhr ) {
			elError.text( 'An error occurred trying to handle that request. Please give us a few minutes and try again.' ).slideDown();
		}).done( function( data ) {
			if ( data.hash )
			{
				window.location = 'https://help.steampowered.com/' + data.hash;
			}
			else if ( data.html )
			{
				HelpWizard.SetPageContent( data.html );
				return;
			}
			else
			{
				elError.text( data.errorMsg ).show();
			}
		}).always( function() {
			$J( '#confirm_phone_form' ).removeClass( 'loading' );
		});
	},

	ResetTwoFactor: function( strSessionID, nAccountID, nLost )
	{
		$J( '#reset_twofactor_submit' ).addClass( 'loading' );
		$J( '#form_submit_error' ).hide();

		var elError = $J( '#form_submit_error' );
		var strTwoFactorCode = $J( '#twofactor_resetcode' ).val(); // may be empty

		try
		{
			ga( 'send', 'pageview', '/wizard/AjaxAccountRecoveryResetTwoFactor/' );
		}
		catch ( e )
		{
		}

		$J.ajax({
			type: "POST",
			url: "https://help.steampowered.com/wizard/AjaxAccountRecoveryResetTwoFactor/",
			data: {
				sessionid: g_sessionID,
				s: strSessionID,
				account: nAccountID,
				lost: nLost,
				twofactor: strTwoFactorCode
			}
		}).fail( function( xhr ) {
			elError.text( 'An error occurred trying to handle that request. Please give us a few minutes and try again.' ).slideDown();
		}).done( function( data ) {
			if ( data.hash )
			{
				window.location = 'https://help.steampowered.com/' + data.hash;
			}
			else if ( data.html )
			{
				HelpWizard.SetPageContent( data.html );
				return;
			}
			else
			{
				elError.text( data.errorMsg ).show();
			}
		}).always( function( data ) {
			$J( '#reset_twofactor_submit' ).removeClass( 'loading' );
		});
	},

	VerifyPassword: function( strSessionID, strLogin, eReset, nLost )
	{
		$J( '#verify_password_submit' ).addClass( 'loading' );
		$J( '#form_submit_error' ).hide();
		$J.ajax({
			type: "POST",
			url: "https://help.steampowered.com/login/getrsakey/",
			data: {
				sessionid: g_sessionID,
				username: strLogin
			}
		}).fail( function( xhr ) {
			$J( '#form_submit_error' ).text( 'An error occurred trying to handle that request. Please give us a few minutes and try again.' ).slideDown();
			$J( '#verify_password_submit' ).removeClass( 'loading' );
		}).done( function( data ) {
			HelpWizard.VerifyPasswordRSA( strSessionID, data, eReset, nLost );
		});
	},

	VerifyPasswordRSA: function( strSessionID, rsa, eReset, nLost )
	{
		var elError = $J( '#form_submit_error' );
		if ( !rsa.publickey_mod || !rsa.publickey_exp || !rsa.timestamp )
		{
			$J( '#verify_password_submit' ).removeClass( 'loading' );
			elError.text( 'An error occurred trying to handle that request. Please give us a few minutes and try again.' ).slideDown();
			return;
		}

		var strPassword = $J( '#verify_password' ).val();
		var strPasswordEncrypted = '';

		if ( strPassword )
		{
			var pubKey = RSA.getPublicKey(rsa.publickey_mod, rsa.publickey_exp);
			strPasswordEncrypted = RSA.encrypt(strPassword, pubKey);
		}

		$J.ajax({
			type: "POST",
			url: "https://help.steampowered.com/wizard/AjaxAccountRecoveryVerifyPassword/",
			data: {
				sessionid: g_sessionID,
				s: strSessionID,
				lost: nLost,
				reset: eReset,
				password: strPasswordEncrypted,
				rsatimestamp: rsa.timestamp
			}
		}).fail( function( xhr ) {
			elError.text( 'An error occurred trying to handle that request. Please give us a few minutes and try again.' ).slideDown();
		}).done( function( data ) {
			if ( data.hash )
			{
				window.location = 'https://help.steampowered.com/' + data.hash;
			}
			else if ( data.html )
			{
				HelpWizard.SetPageContent( data.html );
				return;
			}
			else
			{
				elError.text( data.errorMsg ).show();
			}
		}).always( function( data ) {
			$J( '#verify_password_submit' ).removeClass( 'loading' );
		});
	},

	VerifyCDKey: function( strSessionID, eReset, nLost )
	{
		$J( '#verify_cdkey_submit' ).addClass( 'loading' );
		$J( '#form_submit_error' ).hide();

		var elError = $J( '#form_submit_error' );
		var strCDKey = $J( '#verify_cdkey' ).val();

		$J.ajax({
			type: "POST",
			url: "https://help.steampowered.com/wizard/AjaxVerifyAccountRecoveryCode/",
			data: {
				sessionid: g_sessionID,
				s: strSessionID,
				lost: nLost,
				reset: eReset,
				method: 64, // k_EAccountRecoveryMethodCDKey
				code: strCDKey
			}
		}).fail( function( xhr ) {
			elError.text( 'An error occurred trying to handle that request. Please give us a few minutes and try again.' ).slideDown();
		}).done( function( data ) {
			if ( data.hash )
			{
				window.location = 'https://help.steampowered.com/' + data.hash;
			}
			else if ( data.html )
			{
				HelpWizard.SetPageContent( data.html );
				return;
			}
			else
			{
				elError.text( data.errorMsg ).show();
			}
		}).always( function( data ) {
			$J( '#verify_cdkey_submit' ).removeClass( 'loading' );
		});
	},

	FormRequestAndRedirect: function( form ) {
		var form = $J( form );
		var elError = $J( '#form_submit_error' );
		form.addClass( 'loading' );
		elError.hide();

		$J.ajax({
			type: form.attr( 'method' ),
			url: form.attr( 'action' ),
			data: form.serialize() + "&" + $J.param( g_rgDefaultWizardPageParams )
		}).fail( function( xhr ) {
			elError.text( 'An error occurred trying to handle that request. Please give us a few minutes and try again.' ).slideDown();
		}).done( function( data ) {
			if ( data.hash )
			{
				window.location = 'https://help.steampowered.com/' + data.hash;
			}
			else if ( data.html )
			{
				HelpWizard.SetPageContent( data.html );
			}
			else
			{
				elError.text( data.errorMsg ).slideDown();
			}
		}).always( function() {
			form.removeClass( 'loading' );
		});

		return false;
	},

	LoginInfoSearch: function( form ) {
		var form = $J( form );
		var elError = $J( '#form_submit_error' );
		var elSearchError = $J( '#form_submit_search_error' );
		form.addClass( 'loading' );
		elError.hide();
		elSearchError.hide();

		$J.ajax({
			type: form.attr( 'method' ),
			url: form.attr( 'action' ),
			data: form.serialize() + "&" + $J.param( g_rgDefaultWizardPageParams )
		}).fail( function( xhr ) {
			elError.text( 'An error occurred trying to handle that request. Please give us a few minutes and try again.' ).slideDown();
		}).done( function( data ) {
			if ( data.hash )
			{
				window.location = 'https://help.steampowered.com/' + data.hash;
			}
			else if ( data.html )
			{
				HelpWizard.SetPageContent( data.html );
			}
			else
			{
				if ( data.searchError )
				{
					elSearchError.find( '#search_error_title' ).text( data.searchErrorTitle );
					elSearchError.find( '#search_error_tip' ).text( data.searchErrorTip );

					if ( data.searchDisplayContact )
					{
						elSearchError.find( '#search_error_contact_support' ).show();
					}

					elSearchError.slideDown();

					var elInput = form.find( "input[name='searches']" );
					elInput.val( elInput.val() + 1 );
				}
				else
					elError.html( data.errorMsg ).slideDown();

				if ( data.needCaptcha )
					HelpWizard.RefreshCaptcha( 3 );
				else
					HelpWizard.UpdateCaptcha( { 'gid': -1 } );
			}
		}).always( function() {
			form.removeClass( 'loading' );
		});

		return false;
	},

		SendAccountRecoveryCode: function( strSessionID, eMethod, strLink, strErrorID, strLoadingID, strCodeResentID ) {
		var elError = $J( strErrorID );

		try
		{
			ga( 'send', 'pageview', '/wizard/AjaxSendAccountRecoveryCode/' );
		}
		catch ( e )
		{
		}

		if ( strLoadingID )
			$J( strLoadingID ).addClass( 'loading' );

		$J( '#recovery_code_resent' ).hide();
		elError.hide();
		$J.ajax({
			type: "POST",
			url: "https://help.steampowered.com/wizard/AjaxSendAccountRecoveryCode",
			data: $J.extend( {}, g_rgDefaultWizardPageParams, {
				s: strSessionID,
				method: eMethod,
				link: strLink,
				n: 1
			} )
		}).fail( function( xhr ) {
			elError.text( "An error occurred trying to handle that request. Please give us a few minutes and try again." ).slideDown();
		}).done( function( data ) {
			if ( data.success )
			{
				if ( strCodeResentID )
					$J( strCodeResentID ).slideDown();

				return;
			}

			if ( data.html )
			{
				HelpWizard.SetPageContent( data.html );
				return;
			}

			elError.text( data.errorMsg ).slideDown();
		}).always( function() {
			if ( strLoadingID )
				$J( strLoadingID ).removeClass( 'loading' );
		});
	},

	GetNextStep: function( strSessionID, nAccountID, eReset, unIssueID, unLost ) {
		$J.ajax({
			type: "POST",
			url: "https://help.steampowered.com/wizard/AjaxAccountRecoveryGetNextStep",
			data: $J.extend( {}, g_rgDefaultWizardPageParams, {
				s: strSessionID,
				account: nAccountID,
				reset: eReset,
				issueid: unIssueID,
				lost: unLost
			} )
		}).fail( function( xhr ) {

		}).done( function( data ) {
			window.location = data.redirect;
		});
	},

	BindRelated: function( strSessionID, nAccountID, eReset, unIssueID ) {
		$J.ajax({
			type: "POST",
			url: "https://help.steampowered.com/wizard/AjaxAccountRecoveryBindRelated",
			data: $J.extend( {}, g_rgDefaultWizardPageParams, {
				s: strSessionID,
				account: nAccountID,
				reset: eReset,
				issueid: unIssueID
			} )
		}).fail( function( xhr ) {

		}).done( function( data ) {
			window.location = data.redirect;
		});
	},

	SubmitProofOfPurchase: function( strSessionID, eReset, nLost ) {
		var $WaitDialog = ShowBlockingWaitDialog(
			'Proof of Purchase',
			'Verifying payment information' );

		$J.ajax({
			type: "POST",
			url: "https://checkout.steampowered.com/checkout/submitproofofpurchase",
			crossDomain:  true,
			dataType: "json",
			data: {
				s: strSessionID,
				CardNumber: $J('#card_number').val().trim(),
				CardExpirationYear: $J('#expiration_year').val(),
				CardExpirationMonth: $J('#expiration_month').val(),
				CardSecurityCode: $J('#security_code').val(),
				CardType: $J('#payment_method').val(),
				FirstName: $J('#first_name').val().trim(),
				LastName: $J('#last_name').val().trim(),
				Address: $J('#billing_address').val(),
				AddressTwo: $J('#billing_address_two').val(),
				Country: $J('#billing_country').val(),
				City: $J('#billing_city').val(),
				State: ($J('#billing_country').val() == 'US' ? $J('#billing_state_select').val() : $J('#billing_state_text').val() ),
				PostalCode: $J('#billing_postal_code').val().trim() ,
				Phone: $J('#billing_phone').val()
			}
		}).fail(function (xhr) {

		}).done(function (data) {
			if ( data.success )
			{
				window.location = "https://help.steampowered.com/wizard/HelpWithLoginInfoReset/?s=" + strSessionID +
					"&account=" + data.accountid + "&reset=" + eReset + "&lost=" + nLost;
			}
			else
			{
				var elError = $J( '#form_submit_error' );
				elError.text( data.errorMsg ).slideDown();

				if ( data.stop )
				{
					$J( '#form_verify_pop').hide();
				}
			}
		})
		.always( function()
		{
			$WaitDialog.Dismiss();
		});
	},

	RefreshCaptcha: function( nUsage, bIsRecoverySearch = false )
	{
		var _wizard = this;
		return new Promise( ( resolve ) => {
			const fnRefreshCaptchaWhenReady = () => {
				// Wait for captcha JS to be initialized before attempting to refresh it. The HelpWizard pulls pages in via ajax conditionally can load scripts in different ways depending on the scenario.
				if ( ( typeof hcaptcha === 'undefined' || typeof hcaptcha.render === 'undefined' ) && ( typeof grecaptcha === 'undefined' || typeof grecaptcha.enterprise === 'undefined' || typeof grecaptcha.enterprise.render === 'undefined' ) )
				{
					setTimeout( fnRefreshCaptchaWhenReady, 100 );
					return;
				}

				if ( typeof nUsage === 'undefined' )
					nUsage = 1;

				let hCaptcha = 0;
				if ( nUsage == 3 && typeof hcaptcha !== 'undefined' )
					hCaptcha = 1;

				$J.ajax({
					type: "POST",
					url: "https://help.steampowered.com/wizard/RefreshCaptcha",
					data: $J.extend( {}, g_rgDefaultWizardPageParams, { usage: nUsage, hCaptcha: hCaptcha, is_search: bIsRecoverySearch ? 1 : 0 } )
				}).done( function( data ) {
					_wizard.UpdateCaptcha( data );

					// Resolve after rendering the captcha so we can steal focus back or do other post-captcha work
					resolve();
				});
			};

			fnRefreshCaptchaWhenReady();
		} );
	},

		RenderRecaptcha: function( parent_sel, gid, sitekey, s )
	{
		var render_div_id = 'recaptcha_render_' + gid;
		$J( parent_sel ).empty();
		$J( parent_sel ).append('<div id="' + render_div_id + '"></div>');
		grecaptcha.enterprise.render( render_div_id, {
			'sitekey': sitekey,
			'theme': 'dark',
			'callback': function(n){},
			's': s
		});
	},

	RenderHCaptcha: function( parent_sel, gid, sitekey )
	{
		var render_div_id = 'recaptcha_render_' + gid;
		$J( parent_sel ).empty();
		$J( parent_sel ).append('<div id="' + render_div_id + '"></div>');
		hcaptcha.render( render_div_id, {
			'sitekey': sitekey,
			'theme': 'dark',
			'callback': function(n){}
		});
	},

	UpdateCaptcha: function( data )
	{
		var _wizard = this;
		if ( data.gid != -1 )
		{
			$J( '#captcha_entry' ).show();
			$J( '#input_captcha' ).val( '' );
			if ( data.type == 1 ) {
				$J( '#captcha_entry_text' ).show();
				$J( '#captcha_entry_recaptcha' ).hide();
				$J( '#captchaImg' ).attr( 'src', 'https://help.steampowered.com/login/rendercaptcha/?gid=' + data.gid );
			} else if ( data.type == 2 ) {
				$J( '#captcha_entry_text' ).hide();
				$J( '#captcha_entry_recaptcha' ).show();
				_wizard.RenderRecaptcha( '#captcha_entry_recaptcha', data.gid, data.sitekey, data.s );
			} else if ( data.type == 3 ) {
				$J( '#captcha_entry_text' ).hide();
				$J( '#captcha_entry_recaptcha' ).show();
				_wizard.RenderHCaptcha( '#captcha_entry_recaptcha', data.gid, data.sitekey );
			}

			$J( '#input_captcha_gid' ).val( data.gid );
		}
		else
		{
			$J( '#captcha_entry' ).hide();
			$J( '#captcha_entry_recaptcha' ).empty();
			$J( '#input_captcha' ).val( '' );
			$J( '#input_captcha_gid' ).val( '' );
		}
	},

	UpdateMenuGlobalActions: function()
	{
		$J.ajax({
			url: 'https://help.steampowered.com/login/getmenuactions/',
			type: 'GET',
			data: g_rgDefaultWizardPageParams
		}).fail( function( jqxhr ) {
		}).done( function( data ) {
			if ( data.html )
				$J('#global_header').replaceWith( data.html );
		});
	},
	SubmitScamReportForm: function( form )
	{
		var $Form = $J( form );
		$Form.find( 'button' ).addClass( 'btn_disabled' ).prop( 'disabled', true );

		$J.ajax({
			type: $Form.attr( 'method' ),
			url: $Form.attr( 'action' ),
			data: $Form.serialize()
		})
		.fail( function( xhr )
		{
			ShowAlertDialog( 'Steam Support', 'There was an error submitting the form.' );
			$Form.find( 'button' ).removeClass( 'btn_disabled' ).prop( 'disabled', false );
		})
		.done( function( data )
		{
			ShowAlertDialog( 'Steam Support', 'Thank you for your report. You will be notified if any action is taken against this user.' )
			.done( function()
			{
				HelpWizard.LoadPageFromHash( false, data.redirect );
			}
			);
		} );
	},
	CheckScamReportLength: function( event, element )
	{
		if ( $J(element).val().length > 5 )
		{
			$J('.scam_report_button').removeClass( 'btn_disabled' ).prop( 'disabled', false );
		}
		else
		{
			$J('.scam_report_button').addClass( 'btn_disabled' ).prop( 'disabled', true );
		}

	},
	SetPublisherAccount: function( element, accountid )
	{
		V_SetCookie( 'steamPublisherAccount' + accountid, $J( element ).val(), 0, '/' );
        window.location.reload();
	},
	VerifyEmail: function( form )
	{
		var $Form = $J( form );
		$Form.find( 'button' ).addClass( 'btn_disabled' ).prop( 'disabled', true );

		$J.ajax({
			type: $Form.attr( 'method' ),
			url: $Form.attr( 'action' ),
			data: $Form.serialize()
		})
		.fail( function( xhr )
		{
			ShowAlertDialog( 'Steam Support', 'There was an error submitting the form.' );
			$Form.find( 'button' ).removeClass( 'btn_disabled' ).prop( 'disabled', false );
		})
		.done( function( data )
		{
			if ( data.error )
			{
				var Modal = ShowAlertDialog( 'Contact Steam Support', data.error ).done( function() { $Form.find( 'button' ).removeClass( 'btn_disabled' ).prop( 'disabled', false ); $J( 'input[name="validation_id"]' ).val( '' ); } );
				Modal.SetMaxWidth( 400 );
			}
			else if ( data.requires_validation )
			{
				var $DialogContents = $J( '#help_request_email_verification' ).clone();

				var strEmailInstructions = '';
				if ( $J( form ).find( '#create_help_request_email_address' ).length )
					strEmailInstructions = 'We just need to make sure you have access to this email address so we can show you purchase information related to it. We\'ve sent an email to:' + '<span class="help_request_email_validation_hightlight"> ' + $J( form ).find( '#create_help_request_email_address' ).val() + '</span>';

				$DialogContents.find( '#validate_email_instructions' ).append( strEmailInstructions );
				if ( data.validation_failed )
				{
					$DialogContents.find( '#validate_email_error_contents' ).text( 'Whoops!  Sorry that code wasn\'t quite right, please try again!' );
					$J( 'input[name="validation_code"]' ).val( '' );
				}

				if ( data.validation_id )
					$J( 'input[name="validation_id"]' ).val( data.validation_id );

				var $Dialog = ShowConfirmDialog( 'Contact Steam Support', $DialogContents.show(), 'Send' )
					.done( function( innerData )
					{
						$J( 'input[name="validation_code"]' ).val( $DialogContents.find( 'input[name="validation_code"]' ).val() );
						HelpWizard.VerifyEmail( form );
					})
					.fail( function( xhr )
					{
						$J( 'input[name="validation_id"]' ).val( '' );
						$Form.find( 'button' ).removeClass( 'btn_disabled' ).prop( 'disabled', false );
					});
				$Dialog.SetDismissOnBackgroundClick(false);
			}
			else if ( data.token )
			{
				HelpWizard.DoGuestAuth( data.token );
			}
		} );
	},
	DoGuestAuth: function( token )
	{
		$J.ajax( {
			type: 'POST',
			url: `https://login.steampowered.com/jwt/finalizelogin`,
			data: {
				'nonce': token,
				'redir': 'https://help.steampowered.com//wizard/HelpWithPurchase'
			},
			crossDomain: true,
			xhrFields: { withCredentials: true },
		} )
			.fail( function() {
				window.location.reload();
			})
			.done( function( data )
			{
				window.location.reload();
				if ( data && data.transfer_info )
				{
					HelpWizard.TransferLogin( data );
				}
				else
				{
					// something went wrong, but the account should have been created - redirect
					window.location = 'https://help.steampowered.com//wizard/HelpWithPurchase';
				}
			});
	},
	TransferLogin: function( data )
	{
		let posts = [];
		var nFailed = 0;
		var nTransferred = 0;
		for ( var idx = 0; idx < data.transfer_info.length; idx++ )
		{
			site = data.transfer_info[ idx ];
			prom = new Promise( (resolve, reject) => {
				$J.ajax( {
					type: 'POST',
					url: site.url,
					data: {
						steamID: data.steamID,
						auth: site.params.auth,
						nonce: site.params.nonce,
					},
					crossDomain: true,
					xhrFields: {withCredentials: true},
					success: function ( data ) {
						nTransferred++;
						resolve();
					},
					error: function ( data ) {
						nFailed++;
						resolve();
					}
				} )
			} );
			posts.push( prom );
		}

		Promise.all(posts).then(() => {
			console.log( 'transfer ' + nTransferred + '/' + nFailed );
			if ( nTransferred > 0 )
			{
				window.location = 'https://help.steampowered.com//wizard/HelpWithPurchase';
			}
		}).catch((e) => {
			// this is a weird failure
		});
	}
};

function Logout()
{
	var $Form = $J('<form/>', {'action': 'https://help.steampowered.com/login/logout/', 'method': 'POST' } );
	$Form.append( $J('<input/>', {'type': 'hidden', 'name': 'sessionid', 'value': g_sessionID } ) );
	$Form.appendTo( 'body' );
	$Form.submit();
}

function LogoutToAccountRecovery()
{
	$J.ajax({
		type: 'POST',
		url: 'https://help.steampowered.com/login/logout/',
		data: { 'sessionid': g_sessionID }
	})
	.fail( function( xhr )
	{
		ShowAlertDialog( 'Steam Support', 'Failed to log out' );
	})
	.done( function( data )
	{
		document.location = 'https://help.steampowered.com/wizard/HelpWithLogin/';
	});
}

// taken from the store
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


function ChangeLanguage( strTargetLanguage, bStayOnPage )
{
	var Modal = ShowBlockingWaitDialog( 'Change language', '' );
	$J.post( 'https://help.steampowered.com/login/setlanguage/', {language: strTargetLanguage, sessionid: g_sessionID })
		.done( function() {
			if ( bStayOnPage )
				Modal.Dismiss();
			else
			{
				if ( window.location.href.match( /[?&]l=/ ) )
					window.location = window.location.href.replace( /([?&])l=[^&]*&?/, '$1' );
				else
					window.location.reload();
			}
		}).fail( function() {
			Modal.Dismiss();
			ShowAlertDialog( 'Change language', 'There was a problem communicating with the Steam servers.  Please try again later.' );
		});
}


function ShowCancelPurchaseDialog(transid)
{
	var Modal = ShowConfirmDialog( 'Cancel this pending purchase?',
		'<div class="help_dialog_text">' + 'This purchase is still pending. Your payment provider has not yet told us if they will charge you for this transaction.<br><br>This will cancel the purchase on Steam.  If you haven\'t canceled this purchase with your payment provider, do so now to make sure they don\'t charge you.' + '</div>',
	 	'Cancel my purchase',
	 	'Close'
	 );

	Modal.SetRemoveContentOnDismissal( false );
	Modal.done( function() {
		CancelPendingPurchase( transid );
	} );
}

function CancelPendingPurchase( transid )
{
	$J.ajax( {
		url: 'https://help.steampowered.com/wizard/AjaxCancelPendingPurchase/',
		type: 'POST',
		data: $J.extend( {}, g_rgDefaultWizardPageParams, {
			transid: transid
		} )
	} ).fail( function( jqxhr ) {
		ShowAlertDialog( 'Cancel pending purchase', 'Could not contact the servers to cancel this pending purchase. Please try again later.' );
	} ).done( function( data ) {
		if ( data.success != 1 )
		{
			ShowAlertDialog( 'Cancel pending purchase', 'The Steam Servers failed to cancel this pending purchase. Please try again later. Error code: ' + data.success );
		}

		window.location.reload();
	} );
}

function CancelAccountDeletion()
{
	$J.ajax( {
		url: 'https://help.steampowered.com/wizard/AjaxCancelAccountDeletion/',
		type: 'POST',
		data: g_rgDefaultWizardPageParams,
	} ).fail( function( jqxhr ) {
		ShowAlertDialog( 'Cancel Account Deletion', 'Could not contact the servers to cancel account deletion. Please try again or <a href="https://help.steampowered.com/wizard/HelpDeleteAccountRequest" target="_blank" rel="">contact Steam Support</a>.' );
	} ).done( function( data ) {
		if ( data.success != 1 )
		{
			ShowAlertDialog( 'Cancel Account Deletion', 'Could not contact the servers to cancel account deletion. Please try again or <a href="https://help.steampowered.com/wizard/HelpDeleteAccountRequest" target="_blank" rel="">contact Steam Support</a>.' );
		}
		else
		{
			ShowAlertDialog( 'Cancel Account Deletion', 'Successfully canceled your account deletion.'  )
			.done( function() {
				window.location = 'https://help.steampowered.com/';
			});
		}
	} );
}

function CancelSteamChinaAccessDeletion()
{
	$J.ajax( {
		url: 'https://help.steampowered.com/wizard/AjaxCancelSteamChinaAccessDeletion/',
		type: 'POST',
		data: g_rgDefaultWizardPageParams,
	} ).fail( function( jqxhr ) {
		ShowAlertDialog( 'Cancel Steam China Access and Information Deletion', 'Could not contact the servers to cancel the request. Please try again or <a href="https://help.steampowered.com/wizard/HelpDeleteAccountRequest" target="_blank" rel="">contact Steam Support</a>.' );
	} ).done( function( data ) {
		if ( data.success != 1 )
		{
			ShowAlertDialog( 'Cancel Steam China Access and Information Deletion', 'Could not contact the servers to cancel the request. Please try again or <a href="https://help.steampowered.com/wizard/HelpDeleteAccountRequest" target="_blank" rel="">contact Steam Support</a>.' );
		}
		else
		{
			ShowAlertDialog( 'Cancel Steam China Access and Information Deletion', 'Successfully canceled your Steam China access and information deletion.'  )
			.done( function() {
				window.location = 'https://help.steampowered.com/';
			});
		}
	} );
}


// contains all the functions for generating hardware returns & replacements
HardwareRMA = {
	m_bDoingAjax: false,
	m_sActiveMethod: null,
	m_nRefundIssueID: null,
	m_nRefundAppID: null,
	m_nRefundPackageID: null,
	m_nRefundTransID: null,
	m_nRefundLineItemID: null,
	m_sSerialNumber: "",
	m_bReplacement: false,

	ShowReplacementForm: function( issueid, appid, packageid, transid, lineitemid ) {
		this.m_sActiveMethod = 'AjaxHardwareReplacementForm';
		this.m_nRefundIssueID = issueid;
		this.m_nRefundAppID = appid;
		this.m_nRefundPackageID = packageid;
		this.m_nRefundTransID = transid;
		this.m_nRefundLineItemID = lineitemid;
		this.m_bReplacement = true;
		this.ShowForm( this.m_sActiveMethod, issueid, appid, packageid );
	},

	ShowForm: function( method, issueid, appid, packageid, transid, refund_to_wallet, loading_div ) {
		if ( this.m_bDoingAjax )
			return;

		if ( $J('#help_refund_request_form') )
		{
			$J('#help_refund_request_form').html('');
		}

		if ( loading_div )
		{
			loading_div.html('<span style="margin:auto"><img src="https://help.steampowered.com/public/shared/images/login/throbber.gif" alt=""></span>');
		}
		else
		{
			$J('#help_hardware_return_form').html('<div class="help_refund_request_area"><h1>Checking refund eligibility for this purchase...</h1><br><span style="margin:auto"><img src="https://help.steampowered.com/public/shared/images/login/throbber.gif" alt=""></span></div>');
		}

		$J.ajax({
				type: "GET",
				url: "https://help.steampowered.com/wizard/" + method,
				data: $J.extend( {}, g_rgDefaultWizardPageParams, {
					issueid: issueid,
					appid: appid,
					packageid: packageid,
					transid: transid,
					wallet: refund_to_wallet
				} )
			}).fail( function() {
				$J('#help_hardware_return_form').html('<div class="error_bg"><div id="error_description">We were unable to load information about this purchase. Please try again later. We apologize for the inconvenience.</div></div>');
			}).done( function( data ) {
				if ( data.html && $J('#help_hardware_return_form') )
				{
					$J('#help_hardware_return_form').html( data.html );

					if ( $J('#hardware_serial_entry') && $J('#hardware_serial_entry').is(":visible") )
					{
						$J('#hardware_serial_entry').focus();
					}

					HardwareRMA.VerifySerialThenAdvance( HardwareRMA.m_sSerialNumber );
				}
				else if ( data.need_login )
				{
					HelpWizard.PromptLogin();
				}
				else
				{
					$J('#help_hardware_return_form').html('<div class="error_bg"><div id="error_description">Sorry! An unexpected error has occurred while processing your request. Please try again.</div></div>');
				}
			}).always( function() {
				HardwareRMA.m_bDoingAjax = false;
			} );
	},

	UpdateRefundSelector: function() {
		var refund_to_wallet = $J('#refund_wallet_selector').val();
		this.ShowForm( this.m_sActiveMethod, this.m_nRefundIssueID, this.m_nRefundAppID, this.m_nRefundPackageID, this.m_nRefundTransID, refund_to_wallet );
	},

	SerialNumberEntryKeyUp: function( input ) {
		var val = $J(input).val();
		var input_valid = ( val.length >= 10 && (val[0] == 'f' || val[0] == 'F') );
		if ( input_valid )
			$J('#hardware_serial_next').show();
		else
			$J('#hardware_serial_next').hide();
	},

	VerifySerialThenAdvance: function( serial_number ) {
		var input_valid = ( serial_number.length >= 10 && (serial_number[0] == 'f' || serial_number[0] == 'F') );
		if ( input_valid )
		{
			$J.ajax({
				type: "POST",
				url: "https://help.steampowered.com/wizard/AjaxVerifySerialNumber",
				data: $J.extend( {}, g_rgDefaultWizardPageParams, {
					serial_number: serial_number
					} )
			}).fail( function() {
				$J('#help_hardware_return_form').html('<div class="error_bg"><div id="error_description">We were unable to load information about this purchase. Please try again later. We apologize for the inconvenience.</div></div>');
			}).done( function( data ) {
				switch ( data.availability_reason )
				{
					case 0:
						HardwareRMA.OnVerifySerialThenAdvanceComplete( serial_number );
					break;

					case 1:
						$J('#help_hardware_return_form').html('<div class="error_bg"><div id="error_description">The serial number you\'ve provided does is not valid for any Steam hardware product.  Please verify the serial number and try again.</div></div>');
					break;

					case 2:
						$J('#help_hardware_return_form').html('<div class="error_bg"><div id="error_description">This hardware product is not available for replacement or return in your country through Steam.  Please contact your retailer for return and replacement options.</div></div>');
					break;

					default:
						$J('#help_hardware_return_form').html('<div class="error_bg"><div id="error_description">There was an error processing this request. This product cannot be returned or replaced through Steam at this time.</div></div>');
					break;
				}
			}).always( function() {
				HardwareRMA.m_bDoingAjax = false;
			} );
		}
	},


	OnVerifySerialThenAdvanceComplete: function( serial_number ) {
		var input_valid = ( serial_number.length >= 10 && (serial_number[0] == 'f' || serial_number[0] == 'F') );
		if ( input_valid )
		{
			this.m_sSerialNumber = serial_number;
			$J('#hardware_refund_serial').hide();
			$J('#hardware_refund_serial_display').text( serial_number );
			$J('#hardware_refund_payment').show();

			if ( this.m_bReplacement )
			{
				HardwareRMA.ShowShippingAddressForm();
			}

			$J('#shipping_error_display').html('');
		}
		else
		{
			HardwareRMA.ShowSerialEntryForm();
		}
		$J('#hardware_serial_next').hide();
	},

	CreateReturn: function( refund_to_wallet ) {
		if ( this.m_bDoingAjax )
			return;

		this.m_bDoingAjax = true;

		var explanation = $J('#refund_text_input').val();
		explanation = explanation.substring(0,4000);	// don't send up too many characters

		$J.ajax({
				type: "POST",
				url: "https://help.steampowered.com/wizard/AjaxHardwareCreateReturn",
				data: $J.extend( {}, g_rgDefaultWizardPageParams, {
					issueid: this.m_nRefundIssueID,
					appid: this.m_nRefundAppID,
					packageid: this.m_nRefundPackageID,
					transid: (this.m_nRefundTransID + '_' + this.m_nRefundLineItemID),
					serial_number: this.m_sSerialNumber,
					issue_text: explanation,
					wallet: refund_to_wallet
					} )
			}).fail( function() {
				$J('#help_hardware_return_form').html('<div class="error_bg"><div id="error_description">We were unable to load information about this purchase. Please try again later. We apologize for the inconvenience.</div></div>');
			}).done( function( data ) {
				if ( data.html && data.success == 1 )
				{
					$J('#help_hardware_return_form').html( data.html );
				}
				else if ( data.message )
				{
					HardwareRMA.DisplayShippingErrorMessage( data.message );
				}
				else if ( data.need_login )
				{
					HelpWizard.PromptLogin();
				}
				else
				{
					HardwareRMA.DisplayShippingErrorMessage( 'Sorry! An unexpected error has occurred while processing your request. Please try again.' );
				}

				if ( data.invalidserial )
				{
					// take them back to the serial page
					HardwareRMA.m_sSerialNumber = "";
					HardwareRMA.ShowSerialEntryForm();
				}
			}).always( function() {
				HardwareRMA.m_bDoingAjax = false;
			} );
	},

	ValidateReturnShippingAddress: function() {
		if ( this.m_bDoingAjax )
			return;

		$J('#shipping_error_display').html('');
		var rgBadFields = {};	// Shipping_VerifyAddressFields will fill this in, but it doesn't look like we use it anywhere
		var errorString = Shipping_VerifyAddressFields( rgBadFields );
		if ( errorString.length > 0 )
		{
			this.DisplayShippingErrorMessage( errorString );
		}
		else
		{
			this.m_bDoingAjax = true;
			Shipping_VerifyShippingAddress( g_sessionID, 'https://help.steampowered.com/wizard/AjaxVerifyShippingAddress', {
				onSuccess: function( result ) {
					HardwareRMA.m_bDoingAjax = false;
					// Success...
					if ( result.success == 1 )
					{
						HardwareRMA.OnVerifyShippingAddressSuccess( result );
						return;
					}
					else
					{
						HardwareRMA.OnVerifyShippingAddressFailure();
						return;
					}
				},
				onFailure: function(){
										HardwareRMA.m_bDoingAjax = false;
					HardwareRMA.OnVerifyShippingAddressFailure();
				}
			} );
		}
	},

	OnVerifyShippingAddressSuccess: function( result ) {
				if ( result.eShippingAddressVerificationDetail != 0 )
		{
						var error_text = 'We cannot ship your order to the address that you\'ve provided.';
			switch ( result.eShippingAddressVerificationDetail )
			{
				case 4:
					error_text = 'We cannot ship to the address you\'ve provided because part of your address is missing or looks invalid.';
					break;

				case 3:
					error_text = 'We cannot ship to the address you\'ve provided because part of your address is too long.  Your combined name and each of the address fields can only be up to 35 characters long.';
					break;

				case 1:
				case 5:
					error_text = 'We cannot ship your order to P.O. Box, APO, FPO, or DPO address that you\'ve provided.';
					break;

				case 6:
					error_text = 'We cannot ship your order because the postal code you provided belongs to a region outside of the 48 continental United States.';
					break;

				case 7:
					error_text = 'We cannot ship to the address you\'ve provided because it appears that your postal code is in a special region that we cannot ship to.';
					break;

				case 2:
					error_text = 'We cannot ship your order to the address that you\'ve provided because it contains characters that are not latin-based.';
					break;
			}
			this.DisplayShippingErrorMessage( error_text );
		}
		else if ( result.bValidAddress && result.bSuggestedAddressMatches )
		{
			HardwareRMA.SubmitReplacementRMA();
		}
		else
		{
			Shipping_UpdateFieldsFromVerificationCall( result );
			this.ShowShippingCorrectionsForm();
		}
	},

	OnVerifyShippingAddressFailure: function() {
		var error_text = 'Sorry! We couldn\'t verify your shipping information. Please try again later.';
		this.DisplayShippingErrorMessage( error_text );
	},

	DisplayShippingErrorMessage: function( strMessage )
	{
		$J('#shipping_error_display').html( strMessage );
		// an animate effect would be nice here
	},

	UseCorrectedShippingAddress: function() {
		Shipping_UpdateAddressWithCorrectedFields();
		HardwareRMA.ShowShippingAddressForm();
		HardwareRMA.SubmitReplacementRMA();
	},

	UseUncorrectedShippingAddress: function() {
		HardwareRMA.ShowShippingAddressForm();
		HardwareRMA.SubmitReplacementRMA();
	},

	ShowShippingAddressForm: function() {
		$J('#shipping_info_confirm').hide();
		$J('#shipping_info_entry').show();
		Shipping_UpdateStateSelectState();
	},

	ShowSerialEntryForm: function() {
		$J('#shipping_info_confirm').hide();
		$J('#shipping_info_entry').hide();
		$J('#hardware_refund_payment').hide();
		$J('#hardware_refund_serial').show();
	},

	ShowShippingCorrectionsForm: function() {
		$J('#shipping_info_confirm').show();
		$J('#shipping_info_entry').hide();
	},

	SubmitReplacementRMA: function() {
		if ( this.m_bDoingAjax )
			return;
		this.m_bDoingAjax = true;

		var explanation = $J('#refund_text_input').val();
		explanation = explanation.substring(0,4000);	// don't send up too many characters

		$J.ajax({
				type: "POST",
				url: "https://help.steampowered.com/wizard/AjaxHardwareCreateReplacementRMA",
				data: $J.extend( {}, g_rgDefaultWizardPageParams, {
					issueid: this.m_nRefundIssueID,
					appid: this.m_nRefundAppID,
					packageid: this.m_nRefundPackageID,
					transid: (this.m_nRefundTransID + '_' + this.m_nRefundLineItemID),
					issue_text: explanation,
					help_issue: $J('#refund_reason_selector').val(),
					serial_number: this.m_sSerialNumber,
					ShippingFirstName: $J('#shipping_first_name') ? $J('#shipping_first_name').val() : '',
					ShippingLastName: $J('#shipping_last_name').val(),
					ShippingAddress: $J('#shipping_address').val(),
					ShippingAddressTwo: $J('#shipping_address_two').val(),
					ShippingCountry: $J('#shipping_country').val(),
					ShippingCity: $J('#shipping_city').val(),
					ShippingState: ($J('#shipping_country').val() == 'US' ? $J('#shipping_state_select').val() : $J('#shipping_state_text').val()),
					ShippingPostalCode: $J('#shipping_postal_code').val(),
					ShippingPhone: $J('#shipping_phone').val()
					} )
			}).fail( function() {
				HardwareRMA.DisplayShippingErrorMessage( 'Sorry! An unexpected error has occurred while processing your request. Please try again.' );
			}).done( function( data ) {
				if ( data.html && data.success == 1 )
				{
					$J('#hardware_replacement_dialog').html( data.html );
				}
				else if ( data.message )
				{
					HardwareRMA.DisplayShippingErrorMessage( data.message );
				}
				else
				{
					HardwareRMA.DisplayShippingErrorMessage( 'Sorry! An unexpected error has occurred while processing your request. Please try again.' );
				}

				if ( data.invalidserial )
				{
					HardwareRMA.ShowSerialEntryForm();
				}
			}).always( function() {
				HardwareRMA.m_bDoingAjax = false;
			});
	}

};

HelpRequestPage = {

	m_strSystemReport: "",
	m_rgLogsAndDumps : undefined,

	ShowCreateHelpRequestFormOnPageLoad: function( bScrollIntoView )
	{
		if ( typeof bScrollIntoView == 'undefined' )
			bScrollIntoView = true;

		$J( document ).ready( function() {
			$J( '#cancel_create_help_request' ).remove();
			HelpRequestPage.ShowCreateHelpRequestForm( bScrollIntoView );
		});
	},

	SystemReportCallback: function( systemReport )
	{
		// Newer clients give us an object with multiple values in it
		if ( typeof systemReport  === 'object' )
		{
			HelpRequestPage.m_strSystemReport = systemReport.vdf;

			try
			{
				const encoded = systemReport.zipped_content_base64.replace(/[^A-Za-z0-9\+\/\=]/g, "");
				const decoded = window.atob( encoded );

				HelpRequestPage.m_rgLogsAndDumps = new Uint8Array( decoded.length );
				for ( var i = 0; i < decoded.length; ++i )
				{
					HelpRequestPage.m_rgLogsAndDumps[i] = decoded.charCodeAt( i );
				}
			}
			catch( e )
			{
				HelpRequestPage.m_rgLogsAndDumps = undefined;
			}
		}
		else if ( typeof systemReport === 'string' )
		{
			HelpRequestPage.m_strSystemReport = systemReport;
		}

		var $Form = $J('#create_help_request_form');
		$Form.find('button').removeClass( 'btn_disabled' ).prop( 'disabled', false );
		$J('#system_report_throbber').removeClass( 'working' );
	},

	BrowserViewHandleMessageFromParent: function( strMessage, strArguments )
	{
		if ( strMessage == 'SupportSystemReport' )
		{
			var obj = JSON.parse( strArguments );
			HelpRequestPage.SystemReportCallback( obj );
		}
	},

	CollectSystemReport: function()
	{
		// If we haven't already gathered it and the checkbox is now checked, then gather now
		if( $J('#system_report_agreed:checked').length > 0 && HelpRequestPage.m_strSystemReport.length == 0 )
		{
			var $Form = $J('#create_help_request_form');
			$Form.find('button').addClass( 'btn_disabled' ).prop( 'disabled', true );
			$J('#system_report_throbber').addClass( 'working' );
			if ( typeof window.SteamClient === 'object' )
			{
				// @note Tom Bui: this is the old way, using the method registered in CSteamAuthedHTML.
				// desktopui will use the BrowserView message passing
				if ( window.SteamClient.RequestSupportSystemReport )
				{
					SteamClient.RequestSupportSystemReport(HelpRequestPage.SystemReportCallback);
				}
				else if ( ( 'BrowserView' in window.SteamClient ) && ( 'PostMessageToParent' in window.SteamClient.BrowserView ) )
				{
					window.SteamClient.BrowserView.RegisterForMessageFromParent( HelpRequestPage.BrowserViewHandleMessageFromParent );
					window.SteamClient.BrowserView.PostMessageToParent( 'RequestSupportSystemReport', '' );
				}
			}
		}
	},

	ShowSystemReportDetails: function()
	{
		var Modal = ShowAlertDialog( 'About System Reports', $J( '#system_report_details' ).html() );
	},

	ShowCreateHelpRequestForm: function( bScrollIntoView )
	{
		if ( typeof bScrollIntoView == 'undefined' )
			bScrollIntoView = true;

		if ( !HelpWizard.m_steamid )
		{
			if ( $J( '#create_help_request_form' ).data( 'allow-anonymous' ) )
			{
				// Initialize the captcha for anonymous tickets.
				HelpWizard.RefreshCaptcha(3).then( () => {
					$J('#create_help_request_issue_text').focus();
				} );
			}
			else
			{
				HelpWizard.PromptLogin();
				return;
			}
		}

		HelpRequestPage.InitHelpRequestAttachmentUpload( $J('#create_help_request_form') );

		$J('#wizard_contents > .wizard_content_wrapper').addClass('show_create_help_request_form');
		$J('#create_help_request_issue_text').focus();
		if ( bScrollIntoView )
		{
			$J('#create_help_request_form_ctn').get(0).scrollIntoView();
		}
	},

	ShowPendingPurchaseHelpRequestForm: function( strPendingElementID )
	{
		var Modal = ShowConfirmDialog(
			'Pending purchase',
			$J( strPendingElementID ).html(),
			'I still need help from Steam Support',
			'OK, Close'
			);
		//format modal
		var content = Modal.GetContent();
		content.css( 'max-width', '700px' );
		content.find( '.newmodal_buttons' ).find( '.btn_green_white_innerfade' ).addClass( 'btn_blue_white_innerfade' ).removeClass( 'btn_green_white_innerfade' );
		content.find( '.newmodal_buttons' ).find( '.btn_blue_white_innerfade' ).clone( true ).appendTo( content.find( '.newmodal_buttons' ) );
		content.find( '.newmodal_buttons' ).find( '.btn_blue_white_innerfade' ).first().remove();

		Modal.done( function() { HelpRequestPage.ShowCreateHelpRequestForm() } );
	},

	DismissCreateHelpRequestForm: function() {
		$J('#wizard_contents > .wizard_content_wrapper').removeClass('show_create_help_request_form');
	},

	SubmitCreateHelpRequestForm: function ( form )
	{
		var $Form = $J(form);
		$Form.find('button').addClass( 'btn_disabled' ).prop( 'disabled', true );

		var oParams = {
			type: $Form.attr( 'method' ),
			url: $Form.attr( 'action' )
		};

				if( $J('#system_report_agreed').length > 0 )
		{
			if( $J('#system_report_agreed:checked').length < 1 )
			{
				var Modal = ShowAlertDialog( 'Contact Steam Support', 'You must agree to include the required system information.' );
				$Form.find('button').removeClass( 'btn_disabled' ).prop( 'disabled', false );
				return false;
			}
		}

		if ( typeof FormData != 'undefined' )
		{
			var fd = new FormData( $Form[0] );

			for ( var key in g_rgDefaultWizardPageParams )
				fd.append( key, g_rgDefaultWizardPageParams[key] );

			var cAttachments = 0;
			if ( HelpRequestPage.m_strSystemReport.length > 0 ) {
				fd.append('system_report', new Blob([HelpRequestPage.m_strSystemReport], {type: "text/plain"}));
			}

			if ( HelpRequestPage.m_rgLogsAndDumps != undefined )
			{
				fd.append( 'dumps_and_logs_zip', new Blob([HelpRequestPage.m_rgLogsAndDumps], {type: "application/zip"}));
			}

			// Add logs/dumps zip as well if present

			// do we have files to upload?
			var $FileList = $Form.find('ul.attached_file_list').children();
			$FileList.each( function() {
				++cAttachments;
				if ( $J(this).data('file') instanceof File )
					fd.append( 'attachments[]', $J(this).data('file') );
				else if ( $J(this).data('file') instanceof Blob )
					fd.append( 'attachments[]', $J(this).data('file'), $J(this).data('file').name );
			});

			oParams['data'] = fd;
			oParams['processData'] = false;
			oParams['contentType'] = false;

			if ( $Form.data('require-attachments') == 1 && cAttachments == 0 )
			{
				var dialog = ShowConfirmDialog( 'Contact Steam Support', $Form.data('attachment-dialog-contents'), 'Yes', 'No' );
				dialog.GetContent().css( 'max-width', '40%' );
				dialog.fail( function( bWasCancel )
				{
					if ( bWasCancel )
					{
						$Form.data('require-attachments', 0 );
						HelpRequestPage.SubmitCreateHelpRequestForm( form );
					}
				} );
				dialog.always( function() { $Form.find('button').removeClass( 'btn_disabled' ).prop( 'disabled', false ); } );
				return;
			}
		}
		else
		{
			//TODO: should just submit the page as normal?
			if ( HelpRequestPage.m_strSystemReport.length > 0 )
				oParams['data'] = $Form.serialize() + "&" + $J.param( g_rgDefaultWizardPageParams ) + "&system_report=" + HelpRequestPage.m_strSystemReport;
			else
				oParams['data'] = $Form.serialize() + "&" + $J.param( g_rgDefaultWizardPageParams );

			// Can't include zipped logs/dumps, should never hit this else in the client anyway
		}

		// If there are iframes, submit all the iframes, wait for them to reply that they're done
		// then submit our form.  Give them five seconds, if they aren't done by then proceed anyway.
		//
		// If there are no iframes, then just go ahead and submit.
		var $iFrame = $Form.find(".custom_form_iframe");
		if ( $iFrame.length > 0 )
		{
			var rgFrameCompleteTimeout = {};
			$iFrame.each( function( i, frame ) {
				var url = $J( frame ).attr( 'src' );
				// If we don't hear back from the frame within 5 seconds, proceed anyway.
				rgFrameCompleteTimeout[ url ] = setTimeout( function() {
					console.error( 'iframe', url, 'timed out waiting for formSubmitted' );
					MarkFrameCompleted( url );
					}, 5000 );
			} );

			function MarkFrameCompleted( context )
			{
				clearTimeout( rgFrameCompleteTimeout[ context ] );
				rgFrameCompleteTimeout[ context ] = undefined;
				var bAllFramesComplete = Object.values( rgFrameCompleteTimeout ).reduce( ( accum, val ) => accum && ( val === undefined ), true );
				if ( bAllFramesComplete )
				{
					HelpRequestPage.AjaxCreateHelpRequest( form, oParams );
				}
			}

			window.addEventListener( 'message', function( e ) {
				if ( e.data.cmd && e.data.cmd == 'formSubmitted' )
				{
					MarkFrameCompleted( e.data.context.url );
				}
			} );

			$iFrame.each( function( i, frame ) {
				var url = $J( frame ).attr( 'src' );
				var urlParse = new URL( url );
				var target = urlParse.protocol + '//' + urlParse.hostname;
				frame.contentWindow.postMessage( {cmd: 'submitForm', context: url }, target );
			} );
		}
		else
		{
			HelpRequestPage.AjaxCreateHelpRequest( form, oParams );
		}
	},

	AjaxCreateHelpRequest: function( form, oParams )
	{
		var $Form = $J( form );
		$J.ajax(
			oParams
		).done( function( data ) {
			if ( data.need_login )
			{
				HelpWizard.PromptLogin();
			}
			else if ( data.error )
			{
				HelpWizard.RefreshCaptcha(3);
				if ( data.next_page )
				{
					var Modal = ShowAlertDialog( 'Contact Steam Support', data.error ).done( function() { HelpWizard.LoadPageFromHash( false, data.next_page, true ); } );
					Modal.SetMaxWidth( 400 );
				}
				else
				{
					var Modal = ShowAlertDialog( 'Contact Steam Support', data.error ).done( function() { $J('#create_help_request_issue_text').focus(); } );
					Modal.SetMaxWidth( 400 );
				}
			}
			else if ( data.requires_validation )
			{
				var $DialogContents = $J( '#help_request_email_verification' ).clone();

				var strEmailInstructions = '';
				if ( $J( form ).find( '#create_help_request_email_address' ).length )
					strEmailInstructions = 'We just need to make sure you will receive our emails when we respond to your request.  We\'ve sent an email to:' + '<span class="help_request_email_validation_hightlight"> ' + $J( form ).find( '#create_help_request_email_address' ).val() + '</span>';
				else
					strEmailInstructions = 'We just need to validate you have access to the new email address you want to use.  We\'ve sent an email to:' + '<span class="help_request_email_validation_hightlight"> ' + $J( form ).find( '#extended_string_new_email' ).val() + '</span>';
				$DialogContents.find( '#validate_email_instructions' ).append( strEmailInstructions );
				if ( data.validation_failed )
				{
					$DialogContents.find( '#validate_email_error_contents' ).text( 'Whoops!  Sorry that code wasn\'t quite right, please try again!' );
					$J( 'input[name="validation_code"]' ).val( '' );
				}

				if ( data.validation_id )
					$J( 'input[name="validation_id"]' ).val( data.validation_id );

				var $Dialog = ShowConfirmDialog( 'Contact Steam Support', $DialogContents.show(), 'Send' )
					.done( function( innerData )
					{
						$J( 'input[name="validation_code"]' ).val( $DialogContents.find( 'input[name="validation_code"]' ).val() );
						HelpRequestPage.SubmitCreateHelpRequestForm( form );
					})
					.fail( function( xhr )
					{
						$J( 'input[name="validation_id"]' ).val( '' );
					});
				$Dialog.SetDismissOnBackgroundClick(false);
			}
			else if ( data.next_page )
			{
				HelpWizard.LoadPageFromHash( false, data.next_page, true );
				//HelpRequestPage.DismissCreateHelpRequestForm();
			}
			else if ( data.redirect )
			{
				window.location = data.redirect;
			}
		}).fail( function( xhr ) {
			ShowAlertDialog( 'Contact Steam Support', 'There was a problem submitting your help request to Steam Support. Please wait a few minutes and try again.<br><br>If you are attempting to add large attachments please try to submit without them and add them to your request after submitting.' );
		}).always( function() {
			$Form.find('button').removeClass( 'btn_disabled' ).prop( 'disabled', false );
		});
	},

	GetFormattedFilesize: function( size )
	{
		var nUnit = 0;
		var cBytes = size;
		while ( cBytes >= 1024 && nUnit < 4 )
		{
			nUnit++;
			cBytes /= 1024;
		}

		var strOutput = v_numberformat( cBytes, 1 ) + ' ';
		switch ( nUnit )
		{
			case 0:
				strOutput += 'B';
				break;
			case 1:
				strOutput += 'KB';
				break;
			case 2:
				strOutput += 'MB';
				break;
			case 3:
				strOutput += 'GB';
				break;
			case 4:
				strOutput += 'TB';
				break;
		}

		return strOutput;
	},

	ResizeImageForUpload: function( file, fnCallback ) {
		var img = document.createElement( 'img' );
		img.src = window.URL.createObjectURL( file );

		img.onerror = function()
		{
			fnCallback( null );
		};

		img.onload = function()
		{
			var nMaxWidth = 4096;
			var nMaxHeight = 2160;
			var nWidth = img.width;
			var nHeight = img.height;
			if ( nWidth > nMaxWidth )
			{
				nHeight *= nMaxWidth / nWidth;
				nWidth = nMaxWidth;
			}

			if ( nHeight > nMaxHeight )
			{
				nWidth *= nMaxHeight / nHeight;
				nHeight = nMaxHeight;
			}

						if ( nWidth == img.width && nHeight == img.height && (file.type == 'image/jpeg' || file.type == 'image/jpg') )
			{
				fnCallback( file );
				return;
			}

			var canvas = document.createElement( 'canvas' );
			canvas.width = nWidth;
			canvas.height = nHeight;
			var ctx = canvas.getContext( '2d' );
			ctx.drawImage( img, 0, 0, nWidth, nHeight );

			var fnUploadBlob = function( blob )
			{
				if ( blob )
				{
					var strName = file.name;
					var iExt = strName.lastIndexOf( '.' );
					if ( iExt > 0 )
						strName = strName.substr( 0, iExt ) + '.jpg';
					else
						strName = strName + '.jpg';

					// callback expects a file
					var newFile = new File( [blob], strName, {type: blob.type } );
					fnCallback( newFile );
				}
				else
				{
					fnCallback( null );
				}

			};

			if ( typeof canvas.toBlob === "function" )
			{
				canvas.toBlob( fnUploadBlob, 'image/jpeg', 0.95 );
			}
			else if ( typeof canvas.msToBlob === "function" )
			{
				var pngBlob = canvas.msToBlob();
				var strName = file.name;
				var iExt = strName.lastIndexOf( '.' );
				if ( iExt > 0 )
					strName = strName.substr( 0, iExt ) + '.png';
				else
					strName = strName + '.png';

				pngBlob.name = strName;
				fnCallback( pngBlob );
			}
			else
			{
				ShowAlertDialog( 'Contact Steam Support', 'There was a problem submitting your help request to Steam Support. Please wait a few minutes and try again.<br><br>If you are attempting to add large attachments please try to submit without them and add them to your request after submitting.' );
			}
		};
	},

	InitHelpRequestAttachmentUpload: function( $Form ) {
		var $AttachmentUpload = $Form.find( '.help_request_attachment_upload' );

		if ( !$AttachmentUpload.length )
			return;

		var $Overlay = $AttachmentUpload.parents('.help_request_attachment_overlay_ctn').children('.attachment_drop_overlay');

		var elDiv = $AttachmentUpload[0];

		// sniff out support
		if ( ( 'draggable' in elDiv || 'ondragstart' in elDiv ) && typeof window.FormData != 'undefined' )
		{
			$AttachmentUpload.addClass( 'formdata' );

			var bInDrag = false;
			var nDragTimeout;
			$J(document.body).on('dragover', function() {
				$J(document.body).addClass('ready_for_drop');
				bInDrag = true;
			}).on( 'dragleave drop', function(e) {

				// dragleave fires for every element, and unlike mouseout, doesn't tell you where it's headed.
				// dragover, on the other hand, fires constantly.  So we just do a timeout and if we haven't seen
				//	a dragover in 100ms then we assume it's over.

				e.preventDefault();
				bInDrag = false;
				window.clearInterval( nDragTimeout );
				nDragTimeout = window.setTimeout( function() {
					if ( !bInDrag )
						$J(document.body).removeClass('ready_for_drop');
				}, 100 );
			});

			var $List = $AttachmentUpload.find( '.attached_file_list' );
			var fnAddFileToUploadListInternal = function( file )
			{
				if ( !file )
				{
					ShowAlertDialog( 'Contact Steam Support', 'Contact Steam Support' );
					return;
				}

								var cubAttached = 0;
				var $FileList = $Form.find( 'ul.attached_file_list' ).children();
				$FileList.each( function()
				{
					cubAttached += $J(this).data( 'file' ).size;
				});

				if ( file.size + cubAttached > 10000000 )
				{
					var strError = 'Help request attachments are limited to %d megabytes.<br><br>Please resize any attachments so their total file size is under this limit.'.replace( /%d/, 10 );
					ShowAlertDialog( 'Contact Steam Support', strError );
					return;
				}

				var $Item = $J('<li/>');
				$Item.text( file.name );
				$Item.data('file', file);

				$Item.append( ' ', $J('<span/>', {'class': 'attached_file_size' } ).text( HelpRequestPage.GetFormattedFilesize( file.size ) ) );

				var $RemoveLink = $J('<a/>', {href: 'javascript:void(0);' } );
				$RemoveLink.text('remove').click( function() { $Item.remove(); } );
				$Item.append( ' ', $RemoveLink );
				$List.append( $Item );

				$List.parent().show();
			};

			var fnAddFileToUploadList = function( file )
			{
				if ( file.type.match( /image.*/ ) )
				{
					file = HelpRequestPage.ResizeImageForUpload( file, fnAddFileToUploadListInternal );
					return;
				}

				fnAddFileToUploadListInternal( file );
			};

			$Overlay.on('dragover', function(e) {
				// need to prevent default on dragover for some reason
				e.preventDefault();
			}).on('drop', function(e) {
				e.preventDefault();

				var rgFiles = e.originalEvent.dataTransfer.files;
				if ( rgFiles.length )
				{
					for ( var i = 0; i < rgFiles.length; i++ )
					{
						fnAddFileToUploadList( rgFiles[i] );
					}
				}
			});

			// hook up browsing for files
			var $FileInput = $AttachmentUpload.find( 'input.attachment_upload_browse_input');
			var $BrowseLink = $AttachmentUpload.find( '.attachment_browse_link' );
			// delegate browse link click to a click() on the file input, to open the browse dialog
			$BrowseLink.click( function(e) {
				$FileInput.click();
				e.preventDefault();
			});

			$FileInput.change( function() {
				for ( var i = 0; i < this.files.length; i++ )
				{
					fnAddFileToUploadList( this.files[i] );
				}
				$J(this).val('');
			});

		}
		else
		{
			$AttachmentUpload.addClass( 'legacy' );
		}
	},

	ShowFooterbox: function( strType ) {
		if ( strType == 'add_reply' )
		{
			// hide "did this help"
			$J('.help_request_didthishelp').slideUp();
			// show the add reply area
			$J('.help_request_footerbox.add_reply').slideDown();

			// show the "update options" box (if not visible) with the close ticket option
			$J('.help_request_footerbox.update_options').addClass('close_only').stop().fadeIn();

			$J('#create_help_request_issue_text').focus();
		}
		else if ( strType == 'update_options' )
		{
			$J('.help_request_footerbox:not(.update_options):visible').stop().slideUp();
			$J('.help_request_footerbox.update_options').removeClass('close_only').stop().fadeIn();
			$J('#create_help_request_issue_text').blur();
		}
		else if ( strType == 'didthishelp' )
		{
			$J('.help_request_footerbox.add_reply').stop().slideUp();
			$J('.help_request_footerbox.update_options').stop().fadeOut();
			$J('.help_request_didthishelp').slideDown();
			$J('#create_help_request_issue_text').blur();
		}
	},

	ShowReplyForm: function() {
		HelpRequestPage.ShowFooterbox( 'add_reply' );
	},


	SubmitReplyForm: function ( form )
	{
		var $Form = $J(form);
		$Form.find('button').addClass( 'btn_disabled' ).prop( 'disabled', true );

		var oParams = {
			type: $Form.attr( 'method' ),
			url: $Form.attr( 'action' )
		};

		if ( typeof FormData != 'undefined' )
		{
			var fd = new FormData( $Form[0] );

			for ( var key in g_rgDefaultWizardPageParams )
				fd.append( key, g_rgDefaultWizardPageParams[key] );

			// do we have files to upload?
			var $FileList = $Form.find('ul.attached_file_list').children();
			$FileList.each( function() {
				fd.append( 'attachments[]', $J(this).data('file') );
			});

			oParams['data'] = fd;
			oParams['processData'] = false;
			oParams['contentType'] = false;
		}
		else
		{
			//TODO: should just submit the page as normal?
			oParams['data'] = $Form.serialize() + "&" + $J.param( g_rgDefaultWizardPageParams );
		}


		$J.ajax(
			oParams
		).done( function( data ) {
			if ( data.need_login )
			{
				HelpWizard.PromptLogin();
			}
			else if ( data.error )
			{
				ShowAlertDialog( 'Send a reply', data.error ).done( function() { $J('#create_help_request_issue_text').focus(); } );
			}
			else
			{
				if ( data.html )
				{
					HelpWizard.SetPageContent( data.html );
					HelpWizard.FinishPageLoad();
					window.setTimeout( function() {
						$J('.help_request_message:not(.from_steam):last').addClass('new');
					}, 15 );
				}
			}
		}).always( function() {
			$Form.find('button').removeClass( 'btn_disabled' ).prop( 'disabled', false );
		});
	},
	SubmitRefundToCardForm: function( form )
	{
		var $Form = $J(form);
		$Form.find('button').addClass( 'btn_disabled' ).prop( 'disabled', true );
		var oParams = {
			type: $Form.attr( 'method' ),
			url: $Form.attr( 'action' )
			};
		oParams['data'] = $Form.serialize() + "&" + $J.param( g_rgDefaultWizardPageParams );
		ShowConfirmDialog(
				'Refund',
				'<p>Depending on your bank and payment method, it may take <b>7 or more days</b> for funds to be returned to you.</p> Are you sure you want to change your refund?',
				'Refund',
				'Cancel')
				.fail( function()
				 {
				 	$Form.find('button').removeClass( 'btn_disabled' ).prop( 'disabled', false );
				 })
				.done( function() {
        			$J.ajax(
        				oParams
        			).done( function( data ) {
        				ShowAlertDialog( 'Refund Request Updated', 'Your refund has been processed.' )
        				.done( function(){
        					HelpWizard.LoadPageFromHash( false, 'HelpRequest/' + $Form.children('input[name="reference_code"]').val(), true );
        				});
        			}).fail( function ( jqxhr )
        			{
        				if ( $J.parseJSON(jqxhr.responseText).error != 2 )
        				{
        					ShowAlertDialog( 'Error', 'Sorry! An unexpected error has occurred while processing your request. Please try again.' );
        					$Form.find('button').removeClass( 'btn_disabled' ).prop( 'disabled', false );
        				}
        				else
        				{
        					ShowAlertDialog( 'Refund Failed', 'There was an error refunding your purchase. If you need the refund to go back to the original payment method, please update your ticket and we will investigate.' )
        					.done( function(){
        							HelpRequestPage.ShowReplyForm();
        						});
        				}
        			});
        		});
	},
	CloseHelpRequest: function( reference_code )
	{
		$J.ajax( {
			url: 'https://help.steampowered.com/wizard/AjaxCancelHelpRequest/' + reference_code,
			type: 'POST',
			data: $J.extend( {}, g_rgDefaultWizardPageParams, {
				reference_code: reference_code,
				help_request_page: 1
			} )
		} ).fail( function( jqxhr ) {
			ShowAlertDialog( 'Click here if you no longer need help', 'There was a problem canceling your request. Please try again.' );
		} ).done( function( data ) {
			if ( data.need_login )
			{
				HelpWizard.PromptLogin();
			}
			else if ( data.error )
			{
				ShowAlertDialog( 'Click here if you no longer need help', data.error );
			}
			else
			{
				if ( data.html )
				{
					HelpWizard.SetPageContent( data.html );
					HelpWizard.FinishPageLoad();
				}
			}
		} );
	},
	ConfirmAndCloseHelpRequest: function( reference_code )
	{
		ShowConfirmDialog(
			'Do you want to close your help request?',
			'<div class="help_page_title">This means you will not receive a response from Steam Support.</div>' +
				'<br><p>We haven\'t had a chance to respond to your request for help yet.</p><br>' +
				'<p>Do not close the request if you still need help. We will respond to your request as soon as possible.</p><br><br>',
			'I no longer need help, close my request.',
			'I still need help!'
		).done( function() {
			HelpRequestPage.CloseHelpRequest( reference_code );
		});
	},

	ConfirmIssueResolvedHelpRequest: function( reference_code )
	{
		ShowConfirmDialog(
			'Do you want to close your help request?',
			'<div class="help_page_title">If you no longer need help from Steam, please close your request.</div>' +
				'<br><p>If you still need to give us more information or you have more questions, please leave the request open and message us again.</p><br>',
			'Yes, issue is resolved',
			'No, I need more help'
		).done( function() {
		HelpRequestPage.CloseHelpRequest( reference_code );
	});
	},

	ShowReopenHelp: function()
	{
		$J('#reopen_hint').hide();
		$J('#reopen_container').show();
	},

	RequestReopen: function( reference_code )
	{
		$J.ajax( {
			url: 'https://help.steampowered.com/wizard/AjaxReopenHelpRequest/' + reference_code,
			type: 'POST',
			data: $J.extend( {}, g_rgDefaultWizardPageParams, {
				reference_code: reference_code,
				help_request_page: 1
			} )
		} ).fail( function( jqxhr ) {
			ShowAlertDialog( 'There was a problem reopening your help request.', 'Please try again. If this error persists, create a new help request so we can assist you.' );
		} ).done( function( data ) {
			window.location.reload();
		} );
	}
};

function UpdateStateSelectState()
{
	var cc = $J('#billing_country').val();
	if ( cc == 'US' )
	{
		$J('#billing_state_label').show();
		$J('#billing_state_input').show();
		$J('#billing_state_text').hide();
		$J('#billing_state_select_dselect_container').show();
	}
	else
	{
		$J('#billing_state_label').hide();
		$J('#billing_state_input').hide();
		$J('#billing_state_text').show();
		$J('#billing_state_select_dselect_container').hide();
	}
}

function PopupCVV2Explanation()
{
	try
	{
		var method = $J('#payment_method');
		var type = 'non-amex';
		if ( method && method.val() == 3 )
		{
			type = 'amex';
		}

				window.open( 'https://store.steampowered.com/checkout/cvv2explain/?webbasedpurchasing=1&type='+type, '_blank', "height=225,width=225,toolbar=no,menubar=no,resiable=no,scrollbars=no,status=no,titlebar=no" );
	}
	catch( e )
	{

	}
}

function IsDigitOrEditKeypress( e )
{
	try
	{
		var keynum = 0;

		if( e.keyCode )
		{
			keynum = e.keyCode;
		}
		else if( e.which )
		{
			keynum = e.which;
		}

		// tab
		if ( keynum == 9 ) return true;
		// backspace
		if ( keynum == 8 ) return true;
		// delete
		if ( keynum == 46 ) return true;
		// arrows
		if ( keynum == 37 || keynum == 38 || keynum == 39 || keynum == 40 ) return true;

		// digits
		if ( keynum >= 48 && keynum <= 57 ) return true;
	}
	catch( e )
	{

	}

	return false;
}

function ItemBugRefundChange()
{
	var rgReturned = {};
	var cReturned = 0;
	var rgRemoved = {};
	var cRemoved = 0;
	var nWalletAmount = 0;
	var nWalletCurrency = -1;

	// Recalculate summary effects
	$J('input[type=checkbox]').not(':disabled').each( function() {
		var nRefundID = $J( this ).data( 'refundid' );
		var $elItemGroup = $J('#group_' + nRefundID);

		if ( $J(this).prop('checked') )
		{
			$elItemGroup.css('opacity', '1.0');

			var rgThisRefund = g_Refunds[nRefundID];
			for ( var i = 0; i < rgThisRefund.length; i++ )
			{
				if ( !rgThisRefund[i].allow_refund )
					continue;

				if ( rgThisRefund[i].refund_returns_item_to_inventory )
				{
					cReturned++;
					if ( rgThisRefund[i].item_name in rgReturned )
					{
						rgReturned[rgThisRefund[i].item_name]++;
					}
					else
					{
						rgReturned[rgThisRefund[i].item_name] = 1;
					}
				}

				if ( rgThisRefund[i].refund_removes_item_from_inventory )
				{
					cRemoved++;
					if ( rgThisRefund[i].item_name in rgReturned )
					{
						rgRemoved[rgThisRefund[i].item_name]++;
					}
					else
					{
						rgRemoved[rgThisRefund[i].item_name] = 1;
					}
				}

				if ( rgThisRefund[i].refund_amount )
				{
					if ( nWalletCurrency == -1 && nWalletAmount == 0 )
					{
						nWalletCurrency = rgThisRefund[i].refund_ecurrencycode;
					}
					else if ( nWalletCurrency != rgThisRefund[i].refund_ecurrencycode )
					{
						// Mix of wallet currencies
						nWalletCurrency = -1;
					}

					nWalletAmount += parseInt( rgThisRefund[i].refund_amount );
				}
			}
		}
		else
		{
			$elItemGroup.css('opacity', '0.5');
		}
	});

	if ( cReturned == 0 && cRemoved == 0 && nWalletAmount == 0 )
	{
		$J('#help_itembug_summaryarea').hide();
	}
	else
	{
		$J('#help_itembug_summaryarea').show();
		$J('#help_itembug_summary').empty();

		if ( cReturned )
		{
			var $elDiv = $J('<div></div>');
			var $elReturned = $J('<div></div>');
			$elReturned.text( 'The following items will be returned to your inventory:' );
			$elDiv.append( $elReturned );
			var $elList = $J('<ul class="help_itembug_list"></ul>')

			for ( var key in rgReturned )
			{
				if ( rgReturned.hasOwnProperty( key ) )
				{
					var $elListItem = $J( '<li></li>' );
					$elListItem.text( '%1$sx of %2$s'.replace( '%1$s', rgReturned[key] ).replace( '%2$s', key ) );
					$elList.append( $elListItem );
				}
			}

			$elDiv.append( $elList );

			$J('#help_itembug_summary').append( $elDiv );
		}

		if ( cRemoved )
		{
			var $elDiv = $J('<div></div>');
			var $elReturned = $J('<div></div>');
			$elReturned.text( 'The following items will be removed from your inventory:' );
			$elDiv.append( $elReturned );
			var $elList = $J('<ul class="help_itembug_list"></ul>')

			for ( var key in rgRemoved )
			{
				if ( rgRemoved.hasOwnProperty( key ) )
				{
					var $elListItem = $J( '<li></li>' );
					$elListItem.text( '%1$sx of %2$s'.replace( '%1$s', rgRemoved[key] ).replace( '%2$s', key ) );
					$elList.append( $elListItem );
				}
			}

			$elDiv.append( $elList );

			$J('#help_itembug_summary').append( $elDiv );
		}

		if ( nWalletAmount && nWalletCurrency >= 0 )
		{
			var sWalletCurrencyCode = GetCurrencyCode( nWalletCurrency );
			var sWalletAmount = v_currencyformat( nWalletAmount, sWalletCurrencyCode )

			var $elDiv = $J('<div></div>');
			var $elReturned = $J('<div></div>');
			$elReturned.html( 'Your Steam Wallet will be credited %1$s.'.replace( '%1$s', '<span class="help_itembug_currency">' + sWalletAmount + '</span>' ) );
			$elDiv.append( $elReturned );

			$J('#help_itembug_summary').append( $elDiv );
		}
	}
}

// included data: strCode, eCurrencyCode, strSymbol, bSymbolIsPrefix, bWholeUnitsOnly
var g_rgCurrencyData = {"USD":{"strCode":"USD","eCurrencyCode":1,"strSymbol":"$","bSymbolIsPrefix":true,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":""},"GBP":{"strCode":"GBP","eCurrencyCode":2,"strSymbol":"\u00a3","bSymbolIsPrefix":true,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":""},"EUR":{"strCode":"EUR","eCurrencyCode":3,"strSymbol":"\u20ac","bSymbolIsPrefix":false,"bWholeUnitsOnly":false,"strDecimalSymbol":",","strThousandsSeparator":" ","strSymbolAndNumberSeparator":""},"CHF":{"strCode":"CHF","eCurrencyCode":4,"strSymbol":"CHF","bSymbolIsPrefix":true,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":" ","strSymbolAndNumberSeparator":" "},"RUB":{"strCode":"RUB","eCurrencyCode":5,"strSymbol":"\u0440\u0443\u0431.","bSymbolIsPrefix":false,"bWholeUnitsOnly":true,"strDecimalSymbol":",","strThousandsSeparator":"","strSymbolAndNumberSeparator":" "},"BRL":{"strCode":"BRL","eCurrencyCode":7,"strSymbol":"R$","bSymbolIsPrefix":true,"bWholeUnitsOnly":false,"strDecimalSymbol":",","strThousandsSeparator":".","strSymbolAndNumberSeparator":" "},"JPY":{"strCode":"JPY","eCurrencyCode":8,"strSymbol":"\u00a5","bSymbolIsPrefix":true,"bWholeUnitsOnly":true,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":" "},"NOK":{"strCode":"NOK","eCurrencyCode":9,"strSymbol":"kr","bSymbolIsPrefix":false,"bWholeUnitsOnly":false,"strDecimalSymbol":",","strThousandsSeparator":".","strSymbolAndNumberSeparator":" "},"IDR":{"strCode":"IDR","eCurrencyCode":10,"strSymbol":"Rp","bSymbolIsPrefix":true,"bWholeUnitsOnly":true,"strDecimalSymbol":".","strThousandsSeparator":" ","strSymbolAndNumberSeparator":" "},"MYR":{"strCode":"MYR","eCurrencyCode":11,"strSymbol":"RM","bSymbolIsPrefix":true,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":""},"PHP":{"strCode":"PHP","eCurrencyCode":12,"strSymbol":"P","bSymbolIsPrefix":true,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":""},"SGD":{"strCode":"SGD","eCurrencyCode":13,"strSymbol":"S$","bSymbolIsPrefix":true,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":""},"THB":{"strCode":"THB","eCurrencyCode":14,"strSymbol":"\u0e3f","bSymbolIsPrefix":true,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":""},"VND":{"strCode":"VND","eCurrencyCode":15,"strSymbol":"\u20ab","bSymbolIsPrefix":false,"bWholeUnitsOnly":true,"strDecimalSymbol":",","strThousandsSeparator":".","strSymbolAndNumberSeparator":""},"KRW":{"strCode":"KRW","eCurrencyCode":16,"strSymbol":"\u20a9","bSymbolIsPrefix":true,"bWholeUnitsOnly":true,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":" "},"TRY":{"strCode":"TRY","eCurrencyCode":17,"strSymbol":"TL","bSymbolIsPrefix":false,"bWholeUnitsOnly":false,"strDecimalSymbol":",","strThousandsSeparator":".","strSymbolAndNumberSeparator":" "},"UAH":{"strCode":"UAH","eCurrencyCode":18,"strSymbol":"\u20b4","bSymbolIsPrefix":false,"bWholeUnitsOnly":true,"strDecimalSymbol":",","strThousandsSeparator":" ","strSymbolAndNumberSeparator":""},"MXN":{"strCode":"MXN","eCurrencyCode":19,"strSymbol":"Mex$","bSymbolIsPrefix":true,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":" "},"CAD":{"strCode":"CAD","eCurrencyCode":20,"strSymbol":"CDN$","bSymbolIsPrefix":true,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":" "},"AUD":{"strCode":"AUD","eCurrencyCode":21,"strSymbol":"A$","bSymbolIsPrefix":true,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":" "},"NZD":{"strCode":"NZD","eCurrencyCode":22,"strSymbol":"NZ$","bSymbolIsPrefix":true,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":" "},"PLN":{"strCode":"PLN","eCurrencyCode":6,"strSymbol":"z\u0142","bSymbolIsPrefix":false,"bWholeUnitsOnly":false,"strDecimalSymbol":",","strThousandsSeparator":" ","strSymbolAndNumberSeparator":""},"CNY":{"strCode":"CNY","eCurrencyCode":23,"strSymbol":"\u00a5","bSymbolIsPrefix":true,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":" "},"INR":{"strCode":"INR","eCurrencyCode":24,"strSymbol":"\u20b9","bSymbolIsPrefix":true,"bWholeUnitsOnly":true,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":" "},"CLP":{"strCode":"CLP","eCurrencyCode":25,"strSymbol":"CLP$","bSymbolIsPrefix":true,"bWholeUnitsOnly":true,"strDecimalSymbol":",","strThousandsSeparator":".","strSymbolAndNumberSeparator":" "},"PEN":{"strCode":"PEN","eCurrencyCode":26,"strSymbol":"S\/.","bSymbolIsPrefix":true,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":""},"COP":{"strCode":"COP","eCurrencyCode":27,"strSymbol":"COL$","bSymbolIsPrefix":true,"bWholeUnitsOnly":true,"strDecimalSymbol":",","strThousandsSeparator":".","strSymbolAndNumberSeparator":" "},"ZAR":{"strCode":"ZAR","eCurrencyCode":28,"strSymbol":"R","bSymbolIsPrefix":true,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":" ","strSymbolAndNumberSeparator":" "},"HKD":{"strCode":"HKD","eCurrencyCode":29,"strSymbol":"HK$","bSymbolIsPrefix":true,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":" "},"TWD":{"strCode":"TWD","eCurrencyCode":30,"strSymbol":"NT$","bSymbolIsPrefix":true,"bWholeUnitsOnly":true,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":" "},"SAR":{"strCode":"SAR","eCurrencyCode":31,"strSymbol":"SR","bSymbolIsPrefix":false,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":" "},"AED":{"strCode":"AED","eCurrencyCode":32,"strSymbol":"AED","bSymbolIsPrefix":false,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":" "},"SEK":{"strCode":"SEK","eCurrencyCode":33,"strSymbol":"kr","bSymbolIsPrefix":false,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":" "},"ARS":{"strCode":"ARS","eCurrencyCode":34,"strSymbol":"ARS$","bSymbolIsPrefix":true,"bWholeUnitsOnly":false,"strDecimalSymbol":",","strThousandsSeparator":".","strSymbolAndNumberSeparator":" "},"ILS":{"strCode":"ILS","eCurrencyCode":35,"strSymbol":"\u20aa","bSymbolIsPrefix":true,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":""},"BYN":{"strCode":"BYN","eCurrencyCode":36,"strSymbol":"Br","bSymbolIsPrefix":true,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":""},"KZT":{"strCode":"KZT","eCurrencyCode":37,"strSymbol":"\u20b8","bSymbolIsPrefix":false,"bWholeUnitsOnly":true,"strDecimalSymbol":",","strThousandsSeparator":" ","strSymbolAndNumberSeparator":""},"KWD":{"strCode":"KWD","eCurrencyCode":38,"strSymbol":"KD","bSymbolIsPrefix":false,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":" "},"QAR":{"strCode":"QAR","eCurrencyCode":39,"strSymbol":"QR","bSymbolIsPrefix":false,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":" "},"CRC":{"strCode":"CRC","eCurrencyCode":40,"strSymbol":"\u20a1","bSymbolIsPrefix":true,"bWholeUnitsOnly":true,"strDecimalSymbol":",","strThousandsSeparator":".","strSymbolAndNumberSeparator":""},"UYU":{"strCode":"UYU","eCurrencyCode":41,"strSymbol":"$U","bSymbolIsPrefix":true,"bWholeUnitsOnly":true,"strDecimalSymbol":",","strThousandsSeparator":".","strSymbolAndNumberSeparator":""},"BGN":{"strCode":"BGN","eCurrencyCode":42,"strSymbol":"\u043b\u0432","bSymbolIsPrefix":false,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":" "},"HRK":{"strCode":"HRK","eCurrencyCode":43,"strSymbol":"kn","bSymbolIsPrefix":false,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":" "},"CZK":{"strCode":"CZK","eCurrencyCode":44,"strSymbol":"K\u010d","bSymbolIsPrefix":false,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":" "},"DKK":{"strCode":"DKK","eCurrencyCode":45,"strSymbol":"kr.","bSymbolIsPrefix":false,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":" "},"HUF":{"strCode":"HUF","eCurrencyCode":46,"strSymbol":"Ft","bSymbolIsPrefix":false,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":" "},"RON":{"strCode":"RON","eCurrencyCode":47,"strSymbol":"lei","bSymbolIsPrefix":false,"bWholeUnitsOnly":false,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":" "},"RMB":{"strCode":"RMB","eCurrencyCode":9000,"strSymbol":"\u5200\u5e01","bSymbolIsPrefix":false,"bWholeUnitsOnly":true,"strDecimalSymbol":".","strThousandsSeparator":"","strSymbolAndNumberSeparator":" "},"NXP":{"strCode":"NXP","eCurrencyCode":9001,"strSymbol":"\uc6d0","bSymbolIsPrefix":false,"bWholeUnitsOnly":true,"strDecimalSymbol":".","strThousandsSeparator":",","strSymbolAndNumberSeparator":""}};

// takes an integer
function v_currencyformat( valueInCents, currencyCode, countryCode )
{
	var currencyFormat = (valueInCents / 100).toFixed(2);

	if ( g_rgCurrencyData[currencyCode] )
	{
		var currencyData = g_rgCurrencyData[currencyCode];
		if ( IsCurrencyWholeUnits( currencyCode ) )
		{
			currencyFormat = currencyFormat.replace( '.00', '' );
		}

		if ( currencyData.strDecimalSymbol != '.' )
		{
			currencyFormat = currencyFormat.replace( '.', currencyData.strDecimalSymbol );
		}

		var currencyReturn = IsCurrencySymbolBeforeValue( currencyCode ) ?
			 GetCurrencySymbol( currencyCode ) + currencyData.strSymbolAndNumberSeparator + currencyFormat
			 : currencyFormat + currencyData.strSymbolAndNumberSeparator + GetCurrencySymbol( currencyCode );

		if ( currencyCode == 'USD' && typeof(countryCode) != 'undefined' && countryCode != 'US' )
		{
			return currencyReturn + ' USD';
		}
		else if ( currencyCode == 'EUR' )
		{
			return currencyReturn.replace( ',00', ',--' );
		}
		else
		{
			return currencyReturn;
		}
	}
	else
	{
		return currencyFormat + ' ' + currencyCode;
	}
}


function IsCurrencySymbolBeforeValue( currencyCode )
{
	return g_rgCurrencyData[currencyCode] && g_rgCurrencyData[currencyCode].bSymbolIsPrefix;
}

function IsCurrencyWholeUnits( currencyCode )
{
		return g_rgCurrencyData[currencyCode] && g_rgCurrencyData[currencyCode].bWholeUnitsOnly && currencyCode != 'RUB';
}

// Return the symbol to use for a currency
function GetCurrencySymbol( currencyCode )
{
	return g_rgCurrencyData[currencyCode] ? g_rgCurrencyData[currencyCode].strSymbol : currencyCode + ' ';
}

function GetCurrencyCode( currencyId )
{
	for ( var code in g_rgCurrencyData )
	{
		if ( g_rgCurrencyData[code].eCurrencyCode == currencyId )
			return code;
	}
	return 'Unknown';
}

function ClearUpdateShippingErrors()
{
	$J('updateShippingError').text( '' );
	$J('updateShippingError').hide();
}

g_dlgEditShippingAddress = null;
function ShowUpdateShippingAddressForm()
{
	g_dlgEditShippingAddress = ShowDialog( 'Edit Shipping Address', $J( "#updateShippingAddress" ) );
	g_dlgEditShippingAddress.SetRemoveContentOnDismissal( false );

	$J('shipping_info_confirm').hide();
	$J('shipping_info_edit').show();

	ClearUpdateShippingErrors();
}

function HideUpdateShippingAddressForm()
{
	if ( g_dlgEditShippingAddress )
		g_dlgEditShippingAddress.Dismiss();

	ClearUpdateShippingErrors();
}


function SelectShippingAddressSuggestion()
{
	ShippingAddressVerified( $('shipping_info_verify_update').checked );
}

function UpdateShippingAddress()
{
		var errorString = '';

		var rgBadFields = {
		shipping_first_name : false,
		shipping_last_name : false,
		shipping_address : false,
		shipping_city : false,
		shipping_state : false,
		shipping_postal_code : false,
	}

	errorString = Shipping_VerifyAddressFields( rgBadFields );

		if ( errorString != '' )
	{
		$J('updateShippingError').text( errorString );
		$J('updateShippingError').show();
	}
	else
	{
				$J('updateShippingError').text( '' );
		$J('updateShippingError').hide();
		VerifyShippingAddress();
	}
}

var g_bVerifyShippingAddressCallRunning = false;
function VerifyShippingAddress()
{
		if( g_bVerifyShippingAddressCallRunning )
		return;

		g_bVerifyShippingAddressCallRunning = true;

	Shipping_VerifyShippingAddress( g_sessionID, 'https://help.steampowered.com/wizard/AjaxVerifyShippingAddress',
		{
			onSuccess: function( result ) {
				g_bVerifyShippingAddressCallRunning = false;
				// Success...
				if ( result.success == 1 )
				{
					OnVerifyEditShippingAddressSuccess( result );
				}
				else
				{
					OnVerifyEditShippingAddressFailure();
				}
			},
			onFailure: function(){
								g_bVerifyShippingAddressCallRunning = false;
				OnVerifyShippingAddressFailure();
			}
		});
}

function OnVerifyEditShippingAddressSuccess( result )
{
		if ( result.eShippingAddressVerificationDetail != 0 )
	{
				var error_text = 'We cannot ship your order to the address that you\'ve provided.';
		switch ( result.eShippingAddressVerificationDetail )
		{
			case 4:
				error_text = 'We cannot ship to the address you\'ve provided because part of your address is missing or looks invalid.';
				break;

			case 3:
				error_text = 'We cannot ship to the address you\'ve provided because part of your address is too long.  Your combined name and each of the address fields can only be up to 35 characters long.';
				break;

			case 1:
			case 5:
				error_text = 'We cannot ship your order to P.O. Box, APO, FPO, or DPO address that you\'ve provided.';
				break;

			case 6:
				error_text = 'We cannot ship your order because the postal code you provided belongs to a region outside of the 48 continental United States.';
				break;

			case 7:
				error_text = 'Due to the Coronavirus, carriers currently will not deliver shipments to your location.  As a result, we are unable to process your order.';
				break;

			case 2:
				error_text = 'We cannot ship your order to the address that you\'ve provided because it contains characters that are not latin-based.';
				break;
		}

		$J('updateShippingError').text( error_text );
		$J('updateShippingError').show();
	}
	else if ( result.bValidAddress || result.bSuggestedAddressMatches )
	{
		ShippingAddressVerified( false );
	}
	else
	{
		Shipping_UpdateFieldsFromVerificationCall( result );

		$('shipping_info_confirm').show();
		$('shipping_info_edit').hide();

				var error_text = 'We\'ve found a suggestion for your shipping address.';

		$J('updateShippingError').text( error_text );
		$J('updateShippingError').show();
	}
}

function ShippingAddressVerified( bUseCorrected )
{
	if ( bUseCorrected )
	{
		Shipping_UpdateAddressWithCorrectedFields();
	}

	SubmitUpdateShippingAddress();
}

function OnVerifyEditShippingAddressFailure()
{
		var error_text = '#checkout_failed_inittransaction';

	$J('updateShippingError').text( error_text );
	$J('updateShippingError').show();
}

var g_bUpdateShippingAddress = false;
function SubmitUpdateShippingAddress()
{
		if( g_bUpdateShippingAddress )
		return;

		g_bUpdateShippingAddress = true;

	$J.ajax({
		type: "POST",
		url: "https://help.steampowered.com/wizard/AjaxUpdateShippingAddress",
		method: 'post',
		data: {
			'transid': $J('transid').value,
			'shippingfirstname': $J('shipping_first_name').value,
			'shippinglastname': $J('shipping_last_name').value,
			'shippingaddress': $J('shipping_address').value,
			'shippingaddress2': $J('shipping_address_two').value,
			'shippingcountry': $J('shipping_country').value,
			'shippingcity': $J('shipping_city').value,
			'shippingstate': (g_bHasBillingStates ? $J('shipping_state_select').value : $J('shipping_state_text').value),
			'shippingpostalcode': $J('shipping_postal_code').value,
			'shippingphone': $J('shipping_phone').value,
			'sessionid': g_sessionID
		}
	}).done( function(data){
				g_bUpdateShippingAddress = false;
				// Success...
				if ( data.success == 1 )
				{
					window.location.reload();
				}
				else
				{
					OnUpdateShippingAddressFailure();
				}
	}).fail( function(){
								g_bUpdateShippingAddress = false;
				OnUpdateShippingAddressFailure();
	});
}


function OnUpdateShippingAddressFailure()
{
	$J('#updateShippingError').text( 'There was a problem updating your shipping address for this order.' );
	$J('#updateShippingError').show();
}
