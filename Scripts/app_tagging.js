
function TagLink( tag, language )
{
	var url = 'http://store.steampowered.com/tag/';
	if ( language )
		url += language + '/';
	else
		url += 'en/';

	url += encodeURIComponent( tag ).replace( /%2F/g, '/' ) + '/';
	return url;
}

function InitAppTagModal( appid, rgAppTags, rgUserTags, strTagLinkSNR, strYourTagSNR, rgAddtlReportOptions )
{
	var $AppTagModal = $J('#app_tagging_modal');
	var $AppTagForm = $J('#app_tag_form');
	var $AppTagInput = $AppTagForm.find('input[name=tag]');
	var $AppTagButton = $AppTagForm.find('button');
	var TextSuggest = null;

	var $PopularTags = $AppTagModal.find( '.app_tags.popular_tags' );
	var $YourTags = $AppTagModal.find( '.app_tags.your_tags' );
	var $FrequentTags = $AppTagModal.find( '.app_tags.previous_tags' );
	var $FrequentTagCtn = $AppTagModal.find( '.previous_tags_ctn' ).hide();

	var rgUserTagsByTagID = {};
	for ( var i= 0; i < rgUserTags.length; i++ )
	{
		rgUserTagsByTagID[ rgUserTags[i].tagid ] = rgUserTags[i];
	}

	var rgYourPopularTags = null;
	var rgGlobalPopularTags = null;
	var bYourPopularTagsRequested = false;

	var fnUpdateTagButtonState = function() {
		if ( $AppTagInput.val().length > 0 )
			$AppTagButton.removeClass( 'btn_disabled' );
		else
			$AppTagButton.addClass( 'btn_disabled' );
	};

	var fnSetCheckboxTooltip = function( $Checkbox )
	{
		if ( $Checkbox.hasClass('checked') )
			$Checkbox.data('store-tooltip', 'You have applied this tag.  Click to remove.' );
		else
			$Checkbox.data('store-tooltip', 'Click here to apply this tag.' );
	};

	var fnSetReportTooltip = function( $ReportFlag )
	{
		if ( $ReportFlag.hasClass('reported') )
			$ReportFlag.data('store-tooltip', 'You have reported this tag.' );
		else
			$ReportFlag.data('store-tooltip', 'Click to enter a report for this tag.' );
	};

	var fnCheckboxClick = function( checkbox, tag, bPopular )
	{
		var bWithdraw = $J(checkbox).hasClass('checked');
		fnApplyTag( tag, bWithdraw, bPopular );
	};

	var fnMakeTag = function( tagid, tag, checked, bPopular, bReported )
	{
		var $Tag = $J('<div/>', {'class': 'app_tag_control', 'data-tagid': tagid } );

		var $Checkbox = $J('<div/>', {'data-store-tooltip': '', 'class': 'app_tag_checkbox' + ( checked && !bReported ? ' checked' : '' ) }).click( function() { fnCheckboxClick( this, tag, bPopular ); });
		BindStoreTooltip( $Checkbox );
		fnSetCheckboxTooltip( $Checkbox );

		$Tag.append( $Checkbox );

		if ( bPopular )
		{
			$Tag.addClass( 'popular' );

			// only if logged in
			if ( $YourTags.length )
			{
				var $Report = $J('<div/>', {'class': 'app_tag_report' + ( bReported ? ' reported' : '' ) } );
				BindStoreTooltip( $Report );
				fnSetReportTooltip( $Report );
				$Tag.append( $Report );

				$Report.click( function() { if ( !$Report.hasClass('reported') ) { fnReportTag( tag ); } } );
			}
		}

		var $Link = $J('<a/>', {'class': 'app_tag', 'href': TagLink( tag ) + '?snr=' + strTagLinkSNR } ).text( tag );
		$Link.InstrumentLinks();
		$Tag.append( $Link );

		return $Tag;
	};

	var fnMakeFrequentTag = function( tagid, tag )
	{
		var $Tag = $J('<div/>', {'class': 'app_tag previous_tag', 'data-tagid': tagid, 'data-store-tooltip': 'Click here to apply this tag.' }).text( tag ).click( function() { fnApplyTag( tag ) } );
		BindStoreTooltip( $Tag );
		return $Tag;
	};

	var fnCheckTagBox = function( $Elements, withdraw, reported )
	{
		var $Checkbox = $Elements.find( '.app_tag_checkbox' );

		if ( withdraw || reported )
		{
			$Checkbox.removeClass( 'checked' );
		}
		else
		{
			$Checkbox.addClass( 'checked' );
		}
		fnSetCheckboxTooltip( $Checkbox );

		var $ReportFlag = $Elements.find( '.app_tag_report' );
		if ( reported )
			$ReportFlag.addClass( 'reported' );
		else
			$ReportFlag.removeClass( 'reported' );
		fnSetReportTooltip( $ReportFlag );
	};

	var fnFlashTag = function( $Tag )
	{
		$Tag.addClass('tag_control_flash');
		window.setTimeout( function() { $Tag.removeClass( 'tag_control_flash' ) }, 1100 );
	};

	var fnBuildTagDisplay = function( Modal )
	{
		$PopularTags.empty();
		$YourTags.empty();
		$FrequentTags.empty();

		for ( var i = 0; i < rgAppTags.length; i++ )
		{
			var tagid = rgAppTags[i].tagid;
			var $AppTag = fnMakeTag( tagid, rgAppTags[i].name, rgUserTagsByTagID[tagid], true, rgUserTagsByTagID[tagid] && rgUserTagsByTagID[tagid].is_reported );

			$PopularTags.append( $AppTag );
		}

		if ( !$YourTags.length )
			return;	//not logged in case

		if ( rgYourPopularTags === null )
		{
			$YourTags.html( '<div class="yourtags_throbber"><img src="http://cdn.store.steampowered.com/public/images/login/throbber.gif"></div>' );
			if ( !bYourPopularTagsRequested )
			{
				bYourPopularTagsRequested = true;

				var url = 'http://store.steampowered.com/tagdata/myfrequenttags';
				var mytag_version = WebStorage.GetLocal( 'mytag_version', true );
				if ( mytag_version )
					url += '?v=' + parseInt( mytag_version );

				$J.get( url ).done( function( data ) {
					rgYourPopularTags = data || [];
					fnBuildTagDisplay();
					Modal.AdjustSizing();
				}).fail( function() {
					rgYourPopularTags = [];
					fnBuildTagDisplay();
					Modal.AdjustSizing();
				}).always( function() {
					fnRemoveYourTagsFromGlobalTags();
				});

				// also load the global popular tags, to populate the autocomplete with
				$J.get( 'http://store.steampowered.com/tagdata/populartags/english').done( function ( data ) {
					rgGlobalPopularTags = data || [];
					fnRemoveYourTagsFromGlobalTags();
				});
			}
		}
		else
		{
			var rgYourTagsSeen = {};
			for ( var i = 0; i < rgUserTags.length; i++ )
			{
				var tagid = rgUserTags[i].tagid;
				rgYourTagsSeen[tagid] = true;

				if ( rgUserTagsByTagID[tagid] && rgUserTagsByTagID[tagid].is_reported )
					continue;

				var $AppTag = fnMakeTag( tagid, rgUserTags[i].name, rgUserTagsByTagID[tagid] );

				$YourTags.append( $AppTag );
			}

			if ( $YourTags.children().length == 0 )
			{
				$YourTags.append( $J('<div/>', {'class': 'app_tag_control no_tags_yet'}).text('No tags entered yet' ) );
			}

			var cPopularTagsToDisplay = 16;
			for ( var i = 0; i < rgYourPopularTags.length; i++ )
			{
				var tagid = rgYourPopularTags[i].tagid;

				if ( rgYourTagsSeen[tagid] )
					continue;

				var $AppTag = fnMakeFrequentTag( tagid, rgYourPopularTags[i].name );

				$FrequentTags.append( $AppTag );
				$FrequentTagCtn.show();

				if ( --cPopularTagsToDisplay <= 0 )
					break;
			}
		}
	};

	var fnUpdateUserTagsOnPage = function()
	{
		var $YourTagsOnPage = $J('.your_tags[data-appid=' + appid + ']');
		$YourTagsOnPage.children( '.app_tag:not(.add_button)').remove();
		if ( rgUserTags.length )
		{
			$YourTagsOnPage.children( '.app_tag.add_your_own').hide();
			$YourTagsOnPage.children( '.app_tag.add_more').show();
			for ( var i = 0; i < rgUserTags.length; i++ )
			{
				if ( rgUserTags[i].is_reported )
					continue;

				var $AppTag = $J('<a/>', {'class': 'app_tag', 'href': TagLink( rgUserTags[i].name ) + '?snr=' + strYourTagSNR }).text( rgUserTags[i].name );
				$AppTag.InstrumentLinks();
				$YourTagsOnPage.prepend( $AppTag, ' ' );
			}
			AdjustVisibleAppTags( $YourTagsOnPage );
		}
		else
		{
			$YourTagsOnPage.children( '.app_tag.add_your_own').show();
			$YourTagsOnPage.children( '.app_tag.add_more').hide();
		}
	}

	var fnApplyTag = function( tag, withdraw, bPopularClick, eReportType )
	{
		var rgParams = {
			appid: appid,
			sessionid: g_sessionID,
			tag: tag
		};
		if ( withdraw )
			rgParams['withdraw'] = 1;
		else if ( eReportType )
			rgParams['reporttype'] = eReportType;

		$J.post( 'http://store.steampowered.com/tagdata/tagapp', rgParams ).done( function( data ) {

			var strControlSelector = '.app_tag_control[data-tagid=' + data.tagid + ']';
			var $AppTag = $PopularTags.find( strControlSelector );
			var $YourTag = $YourTags.find( strControlSelector );

			if ( !$YourTag.length && !data.withdraw && !data.reported )
			{
				$YourTag = fnMakeTag( data.tagid, data.name );
				$YourTags.append( $YourTag );
				$YourTags.children('.no_tags_yet').hide();
			}

			var iExistingTag;
			for ( iExistingTag = 0; iExistingTag < rgUserTags.length; iExistingTag++ )
			{
				if ( rgUserTags[iExistingTag].tagid == data.tagid )
				{
					break;
				}
			}

			if ( data.withdraw )
			{
				delete rgUserTagsByTagID[ data.tagid ];
				if ( iExistingTag < rgUserTags.length )
					rgUserTags.splice( iExistingTag, 1 );

				fnCheckTagBox( $YourTag, true );
			}
			else
			{
				rgUserTagsByTagID[ data.tagid ] = data;
				if ( iExistingTag >= rgUserTags.length )
				{
					rgUserTags.push( data );
				}

				// remove from the frequent tag box
				$FrequentTags.find( '[data-tagid=' + data.tagid + ']' ).hide();
				if ( $FrequentTags.children().length == 0 )
					$FrequentTagCtn.hide();

				// make sure it's checked
				if ( data.is_reported )
				{
					$YourTag.remove();
				}
				else
				{
					fnCheckTagBox( $YourTag );
				}
			}

			fnCheckTagBox( $AppTag, data.withdraw, data.is_reported );

			// highlight the popular tag to show it has changed
			if ( !bPopularClick && !data.withdraw && $AppTag.length )
			{
				fnFlashTag( $AppTag );
			}

			// roll "mytag_version" variable which will force a reload of user's frequent tags
			WebStorage.SetLocal( 'mytag_version', parseInt( WebStorage.GetLocal( 'mytag_version', true ) || 0 ) + 1, true );

		}).fail( function() {
			ShowAlertDialog( 'View and edit tags for this product', 'There was a problem adding your tag.' );
		});
	};

	var fnOnSubmit = function(event) {
		event.preventDefault();

		if ( $AppTagInput.val().length == 0 )
			return;

		fnApplyTag( $AppTagInput.val(), false );
		$AppTagInput.val('');
		$AppTagInput.change();
	};

	var fnReportTag = function( tag ) {
		var $Dialog = $J('<div/>', {'class': 'app_tag_report_dialog' } );
		$Dialog.append( $J('<div/>', {'class': 'app_tag_report_dialog_intro' } ).text('Please pick a reason that you are reporting this tag on this product.') );

		var rgReportOptions = {
			1: 'Offensive/abusive tag',
			2: 'Not appropriate for this product',
			3: 'Not a helpful tag',
			4: 'Spoiler'
		};

		if ( rgAddtlReportOptions )
		{
			$J.extend( rgReportOptions, rgAddtlReportOptions );
		}

		var fnDoReport= function( eReportTypeSelected ) { fnApplyTag( tag, false, true, eReportTypeSelected ); };

		var Modal = null;
		for ( var eReportType in rgReportOptions )
		{
			var $ReportOption = $J('<div/>', {'class': 'app_tag_report_dialog_option' } );
			$ReportOption.append( $J('<input/>', {'type': 'radio', 'name':'report_type', 'value': eReportType, 'id': 'report_type_' + eReportType } ) );
			$ReportOption.append( $J('<label/>', {'for': 'report_type_' + eReportType }).html( rgReportOptions[eReportType] ) );
			$ReportOption.dblclick( (function( eReportType ) { return function() { Modal.Dismiss(); fnDoReport( eReportType ); }; })(eReportType) );
			$Dialog.append( $ReportOption );
		}

		Modal = ShowConfirmDialog( 'Report a Tag', $Dialog, 'Report').done( function() {
			var eReportTypeSelected = $Dialog.find( 'input[type=radio]:checked' ).val();
			if ( eReportTypeSelected )
			{
				fnDoReport( eReportTypeSelected )
			}
			else
			{
				ShowAlertDialog( 'Report a Tag', 'You must select a report reason.').done( function() { fnReportTag( tag ); } );
			}
		});
	};

	var fnRemoveYourTagsFromGlobalTags = function()
	{
		if ( rgYourPopularTags && rgYourPopularTags.length && rgGlobalPopularTags && rgGlobalPopularTags.length )
		{
			var rgYourTagHash = {};
			for ( var i = 0; i < rgYourPopularTags.length; i++ )
			{
				rgYourTagHash[ rgYourPopularTags[i].tagid ] = true;
			}

			var i = 0;
			while ( i < rgGlobalPopularTags.length )
			{
				if ( rgYourTagHash[ rgGlobalPopularTags[i].tagid ] )
					rgGlobalPopularTags.splice( i, 1 );
				else
					i++;
			}
		}
	};

	var fnMatchTags = function( rgRegex, rgTags, rgSuggestions )
	{
		var regexNormalize = new RegExp( /\W/g );
		if ( rgTags && rgTags.length )
		{
			for ( var i = 0; i < rgTags.length; i++ )
			{
				var strNameNormalized = rgTags[i].name_normalized
				if ( !strNameNormalized )
				{
					strNameNormalized = rgTags[i].name_normalized = rgTags[i].name.replace( regexNormalize, '').toLowerCase();
				}

				var bMatch = true;
				for ( var iRegex = 0; iRegex < rgRegex.length; iRegex++ )
				{
					if ( !rgRegex[iRegex].match( strNameNormalized ) )
					{
						bMatch = false;
						break;
					}
				}
				if ( bMatch )
				{
					rgSuggestions.push( rgTags[i].name );
					if ( rgSuggestions.length >= 10 )
						break;
				}
			}
		}
	};

	var fnSuggestTerms = function( value, fnSetSuggestions )
	{
		var rgSuggestions = [];
		if ( value )
		{
			var rgTerms = value.toLowerCase().split( ' ' );
			var rgRegex = [];
			for ( var iTerm = 0; iTerm < rgTerms.length; iTerm++ )
			{
				var term = RegExp.escape( rgTerms[iTerm] );	// prototype-specific function
				rgRegex.push( new RegExp( term ) );
			}

			fnMatchTags( rgRegex, rgYourPopularTags, rgSuggestions );
			if ( rgSuggestions.length < 10 )
				fnMatchTags( rgRegex, rgGlobalPopularTags, rgSuggestions );

			rgSuggestions.sort();
		}

		fnSetSuggestions( rgSuggestions );
	};

	window.ShowAppTagModal = function( appid )
	{

		$AppTagModal.show();
		var Modal = ShowAlertDialog( 'View and edit tags for this product', $AppTagModal, 'Close' );
		Modal.GetContent().addClass( 'app_tag_modal_frame');
		fnBuildTagDisplay( Modal );

		Modal.always( function() {
			if ( TextSuggest )
			{
				TextSuggest.Destroy();
				TextSuggest = null;
			}

			fnUpdateUserTagsOnPage();
		} );

		// in the "you need to log in" case, we don't have a form to display
		if ( $AppTagForm.length )
		{
			$AppTagInput.val('');
			$AppTagInput.change( fnUpdateTagButtonState );
			$AppTagInput.keyup( fnUpdateTagButtonState );
			fnUpdateTagButtonState();
			$AppTagInput.focus();

			$AppTagForm.submit( fnOnSubmit );
			$AppTagForm.keyup( function( event ) { if ( event.which == 13 ) event.stopPropagation() } );

			TextSuggest = new CTextInputSuggest( $AppTagInput, fnSuggestTerms );

			// hack to size the input control correctly
			$AppTagForm.find( '.gray_bevel').css( 'margin-right', ( $AppTagButton.width() + 12 ) + 'px' );
		}
	};



	AdjustVisibleAppTags( $J('.popular_tags[data-appid=' + appid + ']') );
	fnUpdateUserTagsOnPage();
}

function AdjustVisibleAppTags( $TagCtn )
{
	var $AddButton = $TagCtn.children('.app_tag.add_button');

	var k_nSpacing = 5;
	var nSpaceRemaining = $TagCtn.width() - $AddButton.outerWidth();

	var bAnyHidden = false;
	$TagCtn.children( '.app_tag:not(.add_button)').each( function() {
		var $Element = $J(this);
		var nWidth = $Element.outerWidth() + k_nSpacing;
		if ( nWidth > nSpaceRemaining )
		{
			$Element.hide();
			bAnyHidden = true;
		}
		else
		{
			nSpaceRemaining -= nWidth;
			$Element.show();
		}
	});

	// we will hide the "+" on popular tags if we've displayed all the tags (there will always be a "+" under your own tags)
	if ( $TagCtn.hasClass( 'popular_tags' ) )
	{
		$AddButton.toggle( bAnyHidden );
	}
}

function InitTagTabs( strURL, cc, rgTabNames, rgInitialParams )
{
	var g_rgTabs = {};
	var g_strTabRequestURL = strURL;
	var g_rgTabBaseParams = {
		cc: cc,
		l: 'english',
		v: 4
	};
	var g_rgTabParams = {};
	var g_strActiveTab = null;


	var fnOnTabFilterChange = function()
	{
		for ( var strTab in g_rgTabs )
		{
			var Tab = g_rgTabs[strTab];
			Tab.m_iStart = 0;
			Tab.m_nLoaded = 0;
			Tab.m_$Items.css( 'top', '0px' );
		}
		UpdateTabDisplay();
	};

	var fnAddFilter = function( strParam, value, $Checkbox )
	{
		if ( !$Checkbox )
			$Checkbox = $J('.tab_filter_control[data-param=' + strParam + '][data-value=' + value + ']');

		$Checkbox.addClass( 'checked' );

		if ( !g_rgTabParams[strParam] )
			g_rgTabParams[strParam] = [];
		g_rgTabParams[strParam].push( value );

		var $Filter = $J('<div/>', {'class': 'tab_filter' } );
		$Filter.attr( 'data-param', strParam );
		$Filter.attr( 'data-value', value );
		$Filter.text( $Checkbox.text() );
		$Filter.append( $J('<div/>', {'class': 'tab_filter_remove' }).html('&nbsp;').click( function() { fnRemoveFilter( strParam, value, $Checkbox, $Filter ); } ) );
		$J('.tab_filters').append( $Filter );
		$J('.tab_filter_ctn').show( 'fast' );

		fnOnTabFilterChange();
	};

	var fnRemoveFilter = function( strParam, value, $Checkbox, $Filter )
	{
		if ( !$Checkbox )
			$Checkbox = $J('.tab_filter_control[data-param=' + strParam + '][data-value=' + value + ']');
		if ( !$Filter )
			$Filter = $J('.tab_filter[data-param=' + strParam + '][data-value=' + value + ']');

		$Checkbox.removeClass('checked');

		if ( g_rgTabParams[strParam] )
			g_rgTabParams[strParam] = g_rgTabParams[strParam].filter( function( val ) { return val != value; } );

		$Filter.remove();
		if ( !$J('.tab_filters').children().length )
			$J('.tab_filter_ctn').hide( 'fast' );

		fnOnTabFilterChange();
	};


	var InitTabEvents = function( Tab )
	{
		Tab.m_$Select.click( function() {
			UpdateTabDisplay( Tab.m_strName );
		} );

		Tab.m_$Next.css( 'visibility', 'visible' );
		Tab.m_$NextLink.attr( 'href', '#' );
		Tab.m_$NextLink.click( function( event ) {
			event.preventDefault();
			if ( !Tab.m_bRequestInFlight && !Tab.m_bAnimating )
				DoTabScroll( Tab, 10 );
		});


		Tab.m_$Prev.css( 'visibility', 'visible' );
		Tab.m_$PrevLink.attr( 'href', '#' );
		Tab.m_$PrevLink.click( function( event ) {
			event.preventDefault();
			if ( !Tab.m_bRequestInFlight && !Tab.m_bAnimating )
				DoTabScroll( Tab, -10 );
		});
	}

	var UpdateTabDisplay = function( strActiveTab )
	{
		if ( !strActiveTab )
			strActiveTab = g_strActiveTab;
		else
			g_strActiveTab = strActiveTab;

		for ( var strTabName in g_rgTabs )
		{
			var Tab = g_rgTabs[strTabName];
			if ( strTabName == strActiveTab )
			{
				Tab.m_$Select.addClass( 'active' );
				Tab.m_$Content.show();
				if ( Tab.m_nLoaded == 0 )
				{
					Tab.m_$Items.empty();
					LoadTab( Tab );
				}
			}
			else
			{
				Tab.m_$Select.removeClass( 'active' );
				Tab.m_$Content.hide();
			}
		}
	}

	var DoTabScroll = function( Tab, delta )
	{
		if ( Tab.m_iStart + delta + 10 > Tab.m_nLoaded )
			LoadTab( Tab, delta );
		else
			TagScrollTabTo( Tab, Tab.m_iStart + delta );
	}

	var LoadTab = function( Tab, delta )
	{
		if ( Tab.m_bRequestInFlight )
			return;

		if ( !delta )
			delta = 0;

		Tab.m_bNeedsReload = false;
		var url = g_strTabRequestURL + Tab.m_strName;
		var rgParams = $J.extend( {
			'start': Tab.m_iStart + delta
		}, g_rgTabBaseParams );

		for ( var filter in g_rgTabParams )
		{
			var rgParamValues = g_rgTabParams[filter];
			if ( rgParamValues && rgParamValues.length )
			{
				rgParamValues.sort();
				for ( var i = 0; i < rgParamValues.length; i++ )
				{
					rgParams[ filter + '[' + i + ']' ] = rgParamValues[i];
				}
			}
		}

		$J.getJSON( url, rgParams).done( function( data ) {
			Tab.m_bRequestInFlight = false;

			Tab.m_$Items.append( data.html );
			Tab.m_nTotal = data.total;
			Tab.m_nLoaded = data.start + data.count;

			TagScrollTabTo( Tab, data.start );
		});
	}

	var UpdateTabPagingDisplay = function( Tab )
	{
		if ( Tab.m_iStart > 0 )
			Tab.m_$Prev.show();
		else
			Tab.m_$Prev.hide();

		if ( Tab.m_iStart + 10 < Math.min( Tab.m_nTotal, 100 ) )
			Tab.m_$Next.show();
		else
			Tab.m_$Next.hide();

		Tab.m_$CountStart.text( Tab.m_iStart + 1 );
		Tab.m_$CountEnd.text( Math.min( Tab.m_iStart + 10, Tab.m_nTotal ) );
		Tab.m_$CountTotal.text( Tab.m_nTotal );
	}

	var TagScrollTabTo = function( Tab, iStart )
	{
		var delta = iStart - Tab.m_iStart;
		Tab.m_iStart = iStart;
		UpdateTabPagingDisplay( Tab );

		if ( delta != 0 )
		{
			var nItemHeight = Tab.m_$Items.children(':first-child').height() + 1;

			Tab.m_bAnimating = true;
			Tab.m_$Items.css( 'position', 'relative' );
			var nTop = parseInt( Tab.m_$Items.css('top') ) || 0;
			Tab.m_$Items.animate( {top: (nTop - (delta * nItemHeight)) + 'px' }, 750, function() {
				Tab.m_bAnimating = false;
			} );
		}
	}

	// perform initialization

	for ( var i = 0 ; i < rgTabNames.length; i++ )
	{
		var strName = rgTabNames[i];
		var Tab = {
			m_strName: strName,
			m_$Select: $J('#tab_select_' + strName ),
			m_$Content: $J('#tab_' + strName + '_content' ),
			m_$Items: $J('#tab_' + strName + '_items' ),
			m_$Prev: $J('#tab_' + strName + '_prev' ),
			m_$PrevLink: $J('#tab_' + strName + '_prev > a' ),
			m_$Next: $J('#tab_' + strName + '_next' ),
			m_$NextLink: $J('#tab_' + strName + '_next > a' ),
			m_$CountStart: $J('#tab_' + strName + '_count_start' ),
			m_$CountEnd: $J('#tab_' + strName + '_count_end' ),
			m_$CountTotal: $J('#tab_' + strName + '_count_total' ),
			m_iStart: 0,
			m_nTotal: parseInt( $J('#tab_' + strName + '_count_total').text() ) || 0,
			m_nLoaded: 10,

			m_bAnimating: false,
			m_bRequestInFlight: false
		};

		UpdateTabPagingDisplay( Tab );
		InitTabEvents( Tab );

		g_rgTabs[ strName ] = Tab;
	}

	UpdateTabDisplay( rgTabNames[0] );

	$J('.tab_filter_control').each( function() {
		var $Control = $J(this);
		var strParam = $Control.data('param');
		var value = $Control.data('value');
		$Control.click( function() {
			if ( !$Control.hasClass( 'checked' ) )
			{
				fnAddFilter( strParam, value, $Control );
			}
			else
			{
				fnRemoveFilter( strParam, value, $Control );
			}
		});
	});

	// due to php, this might be an empty array, or an object.  on an object, length will be undefined
	if ( rgInitialParams.length !== 0 )
	{
		for ( var param in rgInitialParams )
		{
			var rgValues = rgInitialParams[param];
			for ( var i = 0; i < rgValues.length; i++ )
			{
				$J('.tab_filter_ctn').show();	// when showing initially, skip the animation that fnAddFilter would run
				fnAddFilter( param, rgValues[i] );
			}
		}
	}
}


function InitTagBrowsePage( strTagLanguage, strCC )
{
	var rgTagResults = {};

	var rgActiveTagByOption = { global: null, yours: null, friends: null, recommended: null };
	var strActiveOption;

	var fnDisplayTag = function( unTagID, strTagName ) {
		if ( !rgTagResults[unTagID] )
		{
			var $Element = $J('<div/>', {'class': 'tag_browse_games_results'} );
			// some pending info
			var $GamesElement = $J('<div/>', {'class':'browse_tag_games'});
			$GamesElement.append($J('<h3/>').text( strTagName ) );
			$GamesElement.append( $J('<div/>', {'class': 'browse_tag_loading' }).html( '<img src="http://cdn.store.steampowered.com/public/images/login/throbber.gif">' ) )

			$Element.append( $GamesElement );
			$Element.append( $J('<div/>', {'class':'browse_tag_game_total'}).html( '&nbsp;' ) );

			$J.get( 'http://store.steampowered.com/tagdata/gettaggames/' + strTagLanguage + '/' + unTagID + '/', {
				cc: strCC,
				l: 'english',
				name: strTagName
			}).done( function ( html ) {
				$Element.html( html );
				$Element.InstrumentLinks();
			}).fail( function () {
				$GamesElement.find( '.browse_tag_loading').text( 'Sorry, there was a problem loading items.  Please try again later.' );
			});

			rgTagResults[unTagID] = $Element;
		}

		$J('#tag_browse_games_ctn').children().detach();
		$J('#tag_browse_games_ctn').append( rgTagResults[unTagID] );
	};

	var fnSelectOption = function( strOption, unTagID )
	{
		strActiveOption = strOption;
		var $Tags =	$J('#tag_browse_' + strOption);
		$Tags.siblings('.tag_browse_tags').hide();
		$Tags.show();

		var $Desc = $J('#tag_browse_description_' + strOption );
		$Desc.siblings().hide();
		$Desc.show();

		$J('.tag_browse_option').removeClass('active');
		$J('.tag_browse_option[data-browseoption=' + strOption + ']').addClass('active');

		if ( unTagID )
		{
			var $Tag = $Tags.children('[data-tagid=' + unTagID + ']');
			if ( $Tag.length )
				rgActiveTagByOption[strActiveOption] = $Tag;
		}

		// select the first tag if none selected
		if ( !rgActiveTagByOption[strActiveOption] && $Tags.children().length )
			rgActiveTagByOption[strActiveOption]  = $J($Tags.children()[0]);

		if ( rgActiveTagByOption[strActiveOption] )
			fnSelectTag( rgActiveTagByOption[strActiveOption] );
	};

	var fnSelectTag = function( $Tag )
	{
		if ( rgActiveTagByOption[ strActiveOption ] )
			rgActiveTagByOption[ strActiveOption ].removeClass('active');

		$Tag.addClass( 'active' );
		rgActiveTagByOption[ strActiveOption ] = $Tag;

		fnDisplayTag( $Tag.data('tagid'), $Tag.text() );
		window.history.replaceState( {}, '', '#' + strActiveOption + '_' + $Tag.data('tagid') );
	};

	$J('.tag_browse_option').click( function () {
		fnSelectOption( $J(this).data('browseoption') );
	});

	//TODO: for testing only
	var strEvent = window.location.href.indexOf( 'test_mouse' ) == -1 ? 'click' : 'mouseenter';
	$J('.tag_browse_tag').on( strEvent, function() {
		fnSelectTag( $J(this) );
	});

	$J(window).on( 'scroll resize', function() {
		var offsetTop = $J('.tag_browse_right_ctn').offset().top;
		var $Ctn = $J('#tag_browse_games_ctn');

		if ( offsetTop > window.scrollY )
		{
			$Ctn.css( 'position', 'absolute' );
		}
		else
		{
			$Ctn.css( 'position', 'fixed' );
		}
	});

	var fnGoToHash = function() {
		var hash = window.location.hash;
		if ( hash && hash.length > 2 )
		{
			var rgHashComponents = hash.substr(1).split('_');
			if ( rgHashComponents.length >= 1 && rgHashComponents.length <= 2 )
			{
				var option = rgHashComponents[0];
				var tagid;
				if ( rgHashComponents.length >= 2 )
					tagid = rgHashComponents[1];
				if ( rgActiveTagByOption[option] || rgActiveTagByOption[option] === null )
				{
					fnSelectOption( option, tagid );
					return;
				}
			}
		}

		fnSelectOption('global');
	};

	if ( window.location.hash.length )
		fnGoToHash();
	else
		fnSelectOption( 'global' );

	if ( g_AccountID != 0 )
	{
		// load recommended tags
		var bGotRecommendedTags = false;
		$J.get( 'http://store.steampowered.com/tagdata/recommendedtags', {games: 10, count: 25, taglang: strTagLanguage }).done( function( data ) {
			if ( data && data.length > 0 )
			{
				bGotRecommendedTags = true;
				var $Tags = $J('#tag_browse_recommended');
				for ( var i = 0; i < data.length; i++ )
				{
					var tag = data[i];
					var $Tag = $J('<div/>', {'class': 'tag_browse_tag', 'data-tagid': tag.tagid }).text( tag.name );
					$Tag.on( strEvent, function() { fnSelectTag( $J(this) ); } );
					$Tags.append( $Tag );
				}
			}
		}).always( function() {
			if ( !bGotRecommendedTags )
			{
				$J('.tag_browse_option[data-browseoption=recommended]').hide();
				if ( strActiveOption == 'recommended' )
					fnSelectOption( 'global' );
			}
			else if ( strActiveOption == 'recommended' )
			{
				if ( window.location.hash.length )
					fnGoToHash();
				else
					fnSelectOption( 'recommended' );
			}
		});
	}
}

