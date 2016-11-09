
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

			$J('#wizard_contents').html( data.html );
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

	FinishPageLoad: function() {
		$J( '#page_content' ).addClass( 'page_loaded' );

		this.BindSearchInputs();

		BindHelpTooltip($J('#wizard_contents [data-help-tooltip]'));
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

	PromptLogin: function()
	{
		var redirect = window.location.pathname;
		if ( window.location.search )
			redirect += window.location.search;
		if ( window.location.hash && window.location.hash.length > 2 )
			redirect += '#' + window.location.hash;

		HelpWizard.LoadPageFromHash( false, 'Login/?redir=' + encodeURIComponent( redirect ) );
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
				serial_number: $J('#hardware_serial_entry').val()
			} )
		} ).fail( function( jqxhr ) {
			$J('#help_refund_request_dialog').html( 'failed to load' );
		} ).done( function( data ) {
			
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
					"<div class=\"LoadingWrapper\">\r\n\t\t\t\t\t<div class=\"LoadingThrobber\">\r\n\t\t\t\t\t\t<div class=\"Bar Bar1\"><\/div>\r\n\t\t\t\t\t\t<div class=\"Bar Bar2\"><\/div>\r\n\t\t\t\t\t\t<div class=\"Bar Bar3\"><\/div>\r\n\t\t\t\t\t<\/div>\r\n\t\t\t\t<\/div>" +
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

		this.m_bLoadingRefundDialog = true;
		this.m_nRefundAppID = appid;
		this.m_nRefundPackageID = packageid;
		this.m_nRefundIssueID = issueid;
		$J.ajax({
			type: "GET",
			url: "https://help.steampowered.com/wizard/AjaxRefundRequestForm",
			data: $J.extend( {}, g_rgDefaultWizardPageParams, {
				issueid: issueid,
				appid: appid,
				packageid: packageid,
				transid: transid,
				wallet: refund_to_wallet
			} )
		}).fail( function() {
			$J('#help_refund_request_form').html('<div class="error_bg"><div id="error_description">We were unable to load information about this purchase. Please try again later. We apologize for the inconvenience.</div></div>');
		}).done( function( data ) {
			if ( data.html && $J('#help_refund_request_form') )
			{
				if ( $J('#refund_request_button') )
					$J('#refund_request_button').hide();
				if ( $J('#refund_gift_request_button') )
					$J('#refund_gift_request_button').show();
				$J('#help_refund_request_form').html( data.html );
			}
			else if ( data.need_login )
			{
				HelpWizard.PromptLogin();
			}
			else
			{
				$J('#help_refund_request_form').html('<div class="error_bg"><div id="error_description">Sorry! An unexpected error has occurred while processing your request. Please try again.</div></div>');
			}
		}).always( function() {
			HelpWizard.m_bLoadingRefundDialog = false;
		} );
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

	MarkGiftRefundableChange: function( gid_guestpass ) {
		var mark_refundable = $J('#gift_refundable').prop('checked');

		$J.ajax( {
			url: 'https://help.steampowered.com/wizard/AjaxMarkGiftRefundable/',
			type: 'POST',
			data: $J.extend( {}, g_rgDefaultWizardPageParams, {
				gid_guestpass: gid_guestpass,
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
			type: "GET",
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

	SubmitPasswordChange: function( strSessionID, strCode, nAccountID, strLogin ) {
		var elError = $J( '#changepw_error_msg' );
		var strPassword = $J( '#password_reset' ).val();
		var strTwoFactor = $J( '#password_twofactor' ).length ? $J( '#password_twofactor' ).val() : '';
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
			HelpWizard.SubmitPasswordChangeRSA( strSessionID, strCode, nAccountID, data );
		});
	},

	SubmitPasswordChangeRSA: function( strSessionID, strCode, nAccountID, rsa ) {
		var elError = $J( '#changepw_error_msg' );
		if ( !rsa.publickey_mod || !rsa.publickey_exp || !rsa.timestamp )
		{
			elError.text( 'An error occurred trying to handle that request. Please give us a few minutes and try again.' ).slideDown();
			$J( '#change_password_form' ).removeClass( 'loading' );
			return;
		}

		var strPassword = $J( '#password_reset' ).val();
		var strTwoFactor = $J( '#password_twofactor' ).length ? $J( '#password_twofactor' ).val() : '';

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
				code: strCode,
				accountid: nAccountID,
				password: strPasswordEncrypted,
				rsatimestamp: rsa.timestamp,
				twofactor: strTwoFactor
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
				$J('#wizard_contents').html( data.html );
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

	SubmitEmailChange: function( strSessionID, strCode ) {
		var elError = $J( '#changepw_error_msg' );
		var strEmail = $J( '#email_reset' ).val();
		elError.hide();

		$J( '#change_password_form' ).addClass( 'loading' );
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
				code: strCode,
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
				$J('#wizard_contents').html( data.html );
				return;
			}
			else
			{
				elError.text( data.errorMsg ).show();
				$J( "#email_reset" ).prop("readonly", false);
			}
		}).always( function() {
			$J( '#change_password_form' ).removeClass( 'loading' );
		});
	},

	ConfirmEmailChange: function( strSessionID, strCode ) {
		var elError = $J( '#changepw_error_msg' );
		var strEmail = $J( '#email_reset' ).val();
		var strEmailChangeCode = v_trim( $J( '#email_change_code' ).val() );
		elError.hide();

		$J( '#change_password_form' ).addClass( 'loading' );

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
				code: strCode,
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
				$J('#wizard_contents').html( data.html );
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

	ResetPhoneNumber: function( strSessionID, strCode ) {

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
				code: strCode
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
				$J('#wizard_contents').html( data.html );
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


	ResetTwoFactor: function( strSessionID, strCode, nAccountID, strLogin )
	{
		$J( '#reset_twofactor_submit' ).addClass( 'loading' );
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
			$J( '#reset_twofactor_submit' ).removeClass( 'loading' );
		}).done( function( data ) {
			HelpWizard.ResetTwoFactorRSA( strSessionID, strCode, nAccountID, data );
		});
	},

	ResetTwoFactorRSA: function( strSessionID, strCode, nAccountID, rsa )
	{
		var elError = $J( '#form_submit_error' );
		if ( !rsa.publickey_mod || !rsa.publickey_exp || !rsa.timestamp )
		{
			$J( '#reset_twofactor_submit' ).removeClass( 'loading' );
			elError.text( 'An error occurred trying to handle that request. Please give us a few minutes and try again.' ).slideDown();
			return;
		}

		var strPassword = $J( '#twofactor_password' ).val();
		var strTwoFactorCode = $J( '#twofactor_resetcode' ).val(); // may be empty

		var pubKey = RSA.getPublicKey( rsa.publickey_mod, rsa.publickey_exp );
		var strPasswordEncrypted = RSA.encrypt( strPassword, pubKey );

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
				code: strCode,
				accountid: nAccountID,
				password: strPasswordEncrypted,
				rsatimestamp: rsa.timestamp,
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
				$J('#wizard_contents').html( data.html );
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
				$J('#wizard_contents').html( data.html );
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
				$J('#wizard_contents').html( data.html );
			}
			else
			{
				if ( data.searchError )
					elSearchError.html( data.errorMsg ).slideDown();
				else
					elError.text( data.errorMsg ).slideDown();

				if ( data.needCaptcha )
					HelpWizard.RefreshCaptcha();
				else
					HelpWizard.UpdateCaptcha( -1 );
			}
		}).always( function() {
			form.removeClass( 'loading' );
		});

		return false;
	},

		SendAccountRecoveryCode: function( strSessionID, eMethod, strErrorID, strLoadingID, strCodeResentID ) {
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
				method: eMethod
			} )
		}).fail( function( xhr ) {
			elError.text( 'An error occurred trying to handle that request. Please give us a few minutes and try again.' ).slideDown();
		}).done( function( data ) {
			if ( data.success )
			{
				if ( strCodeResentID )
					$J( strCodeResentID ).slideDown();

				return;
			}

			if ( data.html )
			{
				$J('#wizard_contents').html( data.html );
				return;
			}

			elError.text( data.errorMsg ).slideDown();
		}).always( function() {
			if ( strLoadingID )
				$J( strLoadingID ).removeClass( 'loading' );
		});
	},

	UserLostAccess: function( strSessionID, strCode, strNav, unIssueID, bLostEmail, bLostPhone, bLostPayment ) {
		$J.ajax({
			type: "POST",
			url: "https://help.steampowered.com/wizard/AjaxAccountRecoveryUserLostAccess",
			data: $J.extend( {}, g_rgDefaultWizardPageParams, {
				s: strSessionID,
				code: strCode,
				nav: strNav,
				issueid: unIssueID,
				lostemail: bLostEmail ? 1 : 0,
				lostphone: bLostPhone ? 1 : 0,
				lostpayment: bLostPayment ? 1 : 0,
			} )
		}).fail( function( xhr ) {

		}).done( function( data ) {
			window.location = data.redirect;
		});
	},

	SubmitProofOfPurchase: function( strSessionID, strCode, strNav ) {
		var $WaitDialog = ShowBlockingWaitDialog(
			'Proof of Purchase',
			'Verifying payment information' );

		$J.ajax({
			type: "POST",
			url: "https://store.steampowered.com/checkout/submitproofofpurchase",
			crossDomain:  true,
			dataType: "json",
			data: {
				s: strSessionID,
				code : strCode,
				CardNumber: $J('#card_number').val(),
				CardExpirationYear: $J('#expiration_year').val(),
				CardExpirationMonth: $J('#expiration_month').val(),
				CardSecurityCode: $J('#security_code').val(),
				CardType: $J('#payment_method').val(),
				FirstName: $J('#first_name').val(),
				LastName: $J('#last_name').val(),
				Address: $J('#billing_address').val(),
				AddressTwo: $J('#billing_address_two').val(),
				Country: $J('#billing_country').val(),
				City: $J('#billing_city').val(),
				State: ($J('#billing_country').val() == 'US' ? $J('#billing_state_select').val() : $J('#billing_state_text').val() ),
				PostalCode: $J('#billing_postal_code').val(),
				Phone: $J('#billing_phone').val()
			}
		}).fail(function (xhr) {

		}).done(function (data) {
			if ( data.success )
			{
				window.location = "https://help.steampowered.com/wizard/HelpWithLoginInfoReset/?s=" + strSessionID +
					"&code=" + data.code + "&account=" + data.accountid + "&nav=" + strNav;
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

	RefreshCaptcha: function()
	{
		var _wizard = this;
		$J.ajax({
			type: "POST",
			url: "https://help.steampowered.com/wizard/RefreshCaptcha",
			data: g_rgDefaultWizardPageParams
		}).done( function( data ) {
			_wizard.UpdateCaptcha( data.gid );
		});
	},

	UpdateCaptcha: function( gid )
	{
		if ( gid != -1 )
		{
			$J( '#captcha_entry' ).show();
			$J( '#captchaImg' ).attr( 'src', 'https://help.steampowered.com/login/rendercaptcha/?gid='+gid );
			$J( '#input_captcha' ).val( '' );
			$J( '#input_captcha_gid' ).val( gid );
		}
		else
		{
			$J( '#captcha_entry' ).hide();
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
	ResetTaxForm: function( set, sessionid )
	{
		ShowConfirmDialog( 'Resubmit Tax Information',
		 	'Are you sure you want to resubmit your tax information?',
		  	'Yes, let me resubmit',
			'No, don\'t do anything')
			.done( function()
			{
				$J.ajax(
				{
					type: "POST",
					data: $J.extend( {}, g_rgDefaultWizardPageParams, {
							form_set: set,
							sessionid: sessionid
							} ),
					url: 'https://help.steampowered.com/wizard/AjaxResetTaxForm/'
				})
				.done( function( data )
				{
					window.location = 'http://store.steampowered.com/account/forms/6050w/';
				})
				.fail( function( xhr )
				{
					ShowAlertDialog(  'Unexpected Error',
						'Sorry! An unexpected error has occurred while processing your request. Please try again. If the error continues to happen, please feel free to contact Steam Support.' );
				});
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
		data: { 'sessionid': g_sessionID, }
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
				if ( result.bValidAddress && result.bSuggestedAddressMatches )
		{
			HardwareRMA.SubmitReplacementRMA();
		}
		else if ( !result.bSuggestedAddressMatches )
		{
						Shipping_UpdateFieldsFromVerificationCall( result );
			this.ShowShippingCorrectionsForm();
		}
		else
		{
			var error_text = 'This does not appear to be a valid address. Please check your city, state and postal code entries and try again.';
			this.DisplayShippingErrorMessage( error_text );
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

ChangePasswordWizard = {
	m_bDoingAjax: false,
	m_rsa: null,
	m_strPasswordEncrypted: null,
	m_bSentCode: false,

	SubmitCurrentPassword: function() {
		if ( this.m_bDoingAjax )
			return;

		$J('#change_password_error').text( '' );

		var strLogin = $J('#account_name').text();
		var current_password = $J('#current_password_input').val();
		var new_password1 = $J('#new_password_input').val();
		var new_password2 = $J('#new_password_confirm_input').val();

		if ( new_password1 !== new_password2 )
		{
			this.ShowError( 'Passwords do not match' );
			return;
		}

		if ( new_password1 == '' || new_password1.length == 0 )
		{
			this.ShowError( 'Please enter the new password you wish to use.' );
			return;
		}

		var strError = HelpWizard.CheckPasswordValid( strLogin, new_password1 );
		if ( strError !== null )
			return this.ShowError( strError );

		if ( this.m_bSentCode )				return this.SubmitChangeCode();

		this.SetLoading( true );

		$J.ajax({
			type: "POST",
			url: "https://help.steampowered.com/login/getrsakey/",
			data: $J.extend( {}, g_rgDefaultWizardPageParams, {
				username: strLogin
			} )
		}).fail( function( xhr ) {
			elError.text( 'An error occurred trying to handle that request. Please give us a few minutes and try again.' ).slideDown();
			$J( '#change_password_form' ).removeClass( 'loading' );
			ChangePasswordWizard.SetLoading( false );
		}).done( function( data ) {
			ChangePasswordWizard.SetLoading( false );
			ChangePasswordWizard.RequestPasswordChangeCode( data, current_password );
		});
	},

	RequestPasswordChangeCode: function( rsa, current_password ) {
		this.m_rsa = rsa;
		if ( !rsa.publickey_mod || !rsa.publickey_exp || !rsa.timestamp )
		{
			this.ShowError( 'An error occurred trying to handle that request. Please give us a few minutes and try again.' );
			return;
		}

		var pubKey = RSA.getPublicKey( rsa.publickey_mod, rsa.publickey_exp );
		this.m_strPasswordEncrypted = RSA.encrypt( current_password, pubKey );
		this.SetLoading( true );

		$J.ajax({
			type: "POST",
			url: "https://help.steampowered.com/change_password/AjaxRequestPasswordChange/",
			data: $J.extend( {}, g_rgDefaultWizardPageParams, {
				password_encrypted: this.m_strPasswordEncrypted,
				rsa_timestamp: this.m_rsa.timestamp
			} )
		}).fail( function( xhr ) {
			ChangePasswordWizard.ShowError( 'An error occurred trying to handle that request. Please give us a few minutes and try again.' );
			ChangePasswordWizard.SetLoading( false );
		}).done( function( data ) {
			ChangePasswordWizard.SetLoading( false );
			// show the right entry box and/or complete the function
			if ( data.error )
			{
				ChangePasswordWizard.ShowError( data.error )
			}

			if ( data.submit_immediately )
			{
				ChangePasswordWizard.SubmitChangeCode();
				return;
			}

			this.m_bSentCode = true;
			if ( data.show_code_entry )
			{
				$J('#change_password_code').show();
				$J('#change_password_request_button').hide();
			}
			else
			{
				$J('#change_password_code').hide();
				$J('#change_password_request_button').show();
			}
		}).always( function() {
		});
	},

	SubmitChangeCode: function() {
		if ( !this.m_rsa.publickey_mod || !this.m_rsa.publickey_exp || !this.m_rsa.timestamp )
		{
			this.ShowError( 'An error occurred trying to handle that request. Please give us a few minutes and try again.' );
			return;
		}

		this.SetLoading( true );

		var change_code = $J('#change_password_code_input').val();
		var new_password = $J('#new_password_input').val();
		var pubKey = RSA.getPublicKey( this.m_rsa.publickey_mod, this.m_rsa.publickey_exp );
		var strNewPasswordEncrypted = RSA.encrypt( new_password, pubKey );

		$J.ajax({
			type: "POST",
			url: "https://help.steampowered.com/change_password/AjaxSubmitPasswordChange/",
			data: $J.extend( {}, g_rgDefaultWizardPageParams, {
				password_encrypted: this.m_strPasswordEncrypted,
				new_password_encrypted: strNewPasswordEncrypted,
				rsa_timestamp: this.m_rsa.timestamp,
				change_code: change_code
			} )
		}).fail( function( xhr ) {
			ChangePasswordWizard.ShowError( 'An error occurred trying to handle that request. Please give us a few minutes and try again.' );
		}).done( function( data ) {
			// show the right entry box and/or complete the function
			if ( data.error )
			{
				ChangePasswordWizard.ShowError( data.error )
			}
			else if ( data.success == 1 )
			{
				$J('#change_password_success').show();
				$J('#change_password_p1').hide();
			}

		}).always( function() {
			ChangePasswordWizard.SetLoading( false );
		});
	},

	ShowError: function( error ) {
		$J('#change_password_error').text( error );
		$J('#page_content').removeClass( 'page_loaded' );
		$J('#page_content').addClass( 'page_error' );
	},

	SetLoading: function( loading ) {
		if ( loading )
		{
			this.m_bDoingAjax = true;
			$J('#loading_throbber').show();
		}
		else
		{
			this.m_bDoingAjax = false;
			$J('#loading_throbber').hide();
		}
	}
};

HelpRequestPage = {

	m_strSystemReport: "",

	ShowCreateHelpRequestFormOnPageLoad: function()
	{
		$J( document ).ready( function() {
			$J( '#cancel_create_help_request' ).remove();
			HelpRequestPage.ShowCreateHelpRequestForm();
		});
	},

	SystemReportCallback: function( strReport )
	{
		HelpRequestPage.m_strSystemReport = strReport;
		var $Form = $J('#create_help_request_form');
		$Form.find('button').removeClass( 'btn_disabled' ).prop( 'disabled', false );
		$J('#system_report_throbber').removeClass( 'working' );
	},

	CollectSystemReport: function()
	{
		// If we haven't already gathered it and the checkbox is now checked, then gather now
		if( $J('#system_report_agreed:checked').length > 0 && HelpRequestPage.m_strSystemReport.length == 0 )
		{
			var $Form = $J('#create_help_request_form');
			$Form.find('button').addClass( 'btn_disabled' ).prop( 'disabled', true );
			$J('#system_report_throbber').addClass( 'working' );
			SteamClient.RequestSupportSystemReport(HelpRequestPage.SystemReportCallback);
		}
	},

	ShowSystemReportDetails: function()
	{
		var Modal = ShowAlertDialog( 'About System Reports', $J( '#system_report_details' ).html() );
	},

	ShowCreateHelpRequestForm: function()
	{
		if ( !HelpWizard.m_steamid && !$J( '#create_help_request_form' ).data( 'allow-anonymous' ) )
		{
			HelpWizard.PromptLogin();
			return;
		}

		if ( !$J('#wizard_contents > .wizard_content_wrapper').length )
			$J('#wizard_contents').wrapInner( '<div class="wizard_content_wrapper"></div>');

		HelpRequestPage.InitHelpRequestAttachmentUpload( $J('#create_help_request_form') );

		$J('#wizard_contents > .wizard_content_wrapper').addClass('show_create_help_request_form');
		$J('#create_help_request_issue_text').focus();
		$J('#create_help_request_form_ctn').get(0).scrollIntoView();
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

			// do we have files to upload?
			var $FileList = $Form.find('ul.attached_file_list').children();
			$FileList.each( function() {
				++cAttachments;
				fd.append( 'attachments[]', $J(this).data('file') );
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
				var Modal = ShowAlertDialog( 'Contact Steam Support', data.error ).done( function() { $J('#create_help_request_issue_text').focus(); } );
				Modal.SetMaxWidth( 400 );
			}
			else if ( data.requires_validation )
			{
				var $DialogContents = $J( '#help_request_email_verification' ).clone();
				$DialogContents.find( '#validate_email_instructions' ).append( '<span class="help_request_email_validation_hightlight"> ' + $J( form ).find( '#create_help_request_email_address' ).val() + '</span>' );
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
			var fnAddFileToUploadList = function( file ){

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
					$J('#wizard_contents').html( data.html );
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
					$J('#wizard_contents').html( data.html );
					HelpWizard.FinishPageLoad();
				}
			}
		} );
	},
	ConfirmAndCloseHelpRequest: function( reference_code )
	{
		ShowConfirmDialog(
			'Close and cancel your help request?',
			'<div class="help_page_title">This means you will not receive a response from Steam Support.</div>' +
				'<br><p>We haven\'t had a chance to respond to your request for help yet.</p><br>' +
				'<p>If you still need help, select cancel below and we\'ll respond to your request as soon as we can.</p><br><br>',
			'Yes, I no longer need help.',
			'Cancel, I still need help!'
		).done( function() {
			HelpRequestPage.CloseHelpRequest( reference_code );
		});
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

				window.open( 'http://store.steampowered.com/checkout/cvv2explain/?webbasedpurchasing=1&type='+type, '_blank', "height=225,width=225,toolbar=no,menubar=no,resiable=no,scrollbars=no,status=no,titlebar=no" );
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

