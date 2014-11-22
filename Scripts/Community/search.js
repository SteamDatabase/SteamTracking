
// this object manages running community search
var CommunitySearch = {
	m_bSearchRunning: false,
	m_sSearchTextLoading: null,
	m_sSearchTextQueued: null,
	m_sSearchResultDisplayed: null,
	m_sSearchResultFilter: null,
	m_nSearchResultPage: null,
	m_nLastKeyPressTimeMS: null,
	m_sFilter: 'none',
	m_nPage: 1,
	m_sHashStringParse: null,
	m_bUpdatingHash: false,
	m_nTransitionSpeed: 500,

	OnKeyUp: function(e) {
		var time_now_ms = $J.now();
		this.m_nLastKeyPressTimeMS = time_now_ms;

		if ( e.which == 13 )
			this.CheckForSearchStart( time_now_ms );	// ENTER key triggers immediately
		else
			setTimeout( function() { CommunitySearch.CheckForSearchStart( time_now_ms ); }, 400 );
	},

	CheckForSearchStart: function( time_last_keyup ) {
		if ( time_last_keyup == this.m_nLastKeyPressTimeMS ) {
			this.UpdateHashURL();
		}
	},

	SetFilter: function( filter ) {
		if ( !filter || ['users','groups','games'].lastIndexOf( filter ) == -1 )
			filter = 'none';

		this.m_sFilter = filter;
		// update the links
		$J('.search_filters a').removeClass( 'selected' );
		$J('#search_filter_' + filter).addClass( 'selected' );
	},

	ChangeFilter: function( filter ) {
		if ( this.m_sFilter != filter )
		{
			this.SetFilter( filter );
			this.UpdateHashURL();
		}
	},

	FirstPage: function() {
		this.m_nPage = 1;
		this.UpdateHashURL();
	},

	NextPage: function() {
		this.m_nPage = this.m_nSearchResultPage+1;
		this.UpdateHashURL();
	},

	PrevPage: function() {
		this.m_nPage = this.m_nSearchResultPage-1;
		this.UpdateHashURL();
	},

	ParseHashParameters: function( reset ) {
		var hash_string = window.location.hash.replace('#','');
		if ( hash_string === this.m_sHashStringParse )
			return;	// we've handled this string already

		this.m_sHashStringParse = hash_string;

		var hash_params = $J.deparam( hash_string );

		if ( hash_params.filter || reset )
			this.SetFilter( hash_params.filter );

		if ( hash_params.page || reset )
			this.m_nPage = hash_params.page;

		if ( hash_params.text || reset )
		{
			if ( hash_params.text !== $J('#search_text_box').val().trim() )
				$J('#search_text_box').val( hash_params.text );
		}

		if ( this.m_bUpdatingHash )
			this.m_nTransitionSpeed = 500;	// we updated it, do it slow
		else
			this.m_nTransitionSpeed = 0;	// browser updated it, do it fast
		this.m_bUpdatingHash = false;

		// if there is text in the box, go
		if ( $J('#search_text_box').val().trim().length > 0 || reset )
		{
			this.Start();
		}
	},

	UpdateHashURL: function() {
		var hash_params = {};
		if ( this.m_nPage > 1 )
			hash_params.page = this.m_nPage;
		hash_params.filter = this.m_sFilter;
		hash_params.text = $J('#search_text_box').val().trim();

		var new_hash = $J.param( hash_params );
		if ( window.location.hash != new_hash )
		{
			this.m_bUpdatingHash = true;
			window.location.hash = new_hash;
			// the change of the hash will trigger the actual start
		}
	},

	Start: function() {
		var search_text = $J('#search_text_box').val().trim();

		if ( search_text == this.m_sSearchTextLoading
			&& this.m_sFilter == this.m_sSearchResultFilter
			&& this.m_nPage == this.m_nSearchResultPage )
		{
			// do nothing, we're already searching for the same text
		}
		else if ( this.m_bSearchRunning )
		{
			this.m_sSearchTextQueued = search_text;
		}
		else if ( search_text != this.m_sSearchResultDisplayed || this.m_sFilter != this.m_sSearchResultFilter || this.m_nPage != this.m_nSearchResultPage )
		{
			this.Load( search_text );
		}
	},

	Load: function( search_text ) {
		this.m_bSearchRunning = true;
		this.m_sSearchTextLoading = search_text;
		$J('#search_results').fadeTo( 500, 0.2 );	// fade out any existing results while we search
		$J.ajax( {
			url: 'https://steamcommunity.com/search/SearchCommunityAjax',
			type: 'GET',
			data: {
				text: search_text,
				filter: this.m_sFilter,
				sessionid: g_sessionID,
				steamid_user: g_steamID,
				page: this.m_nPage
			}
		} ).fail( function( jqxhr ) {
			$J('#search_results').stop( true, false );
			$J('#search_results').html( '' );
			$J('#search_results').fadeTo( 500, 1.0 );
		} ).done( function( data ) {
			if ( data.success == 1 )
			{
				// only update the text if we don't have any text queued
				if ( CommunitySearch.m_sSearchTextQueued == null )
				{
					CommunitySearch.m_sSearchResultDisplayed = data.search_text;
					CommunitySearch.m_sSearchResultFilter = data.search_filter;
					CommunitySearch.m_nSearchResultPage = parseInt( data.search_page );
					$J('#search_results').stop( true, true );
					$J('#search_results').html( data.html );
					$J('#search_results').fadeTo( CommunitySearch.m_nTransitionSpeed, 1.0 );
				}
			}
			else
			{
				$J('#search_results').stop( true, true );
				$J('#search_results').html( data.html );
				$J('#search_results').fadeTo( 500, 1.0 );
			}
		} ).always( function() {
			CommunitySearch.m_bSearchRunning = false;

			// start the search we have queued
			if ( CommunitySearch.m_sSearchTextQueued )
			{
				CommunitySearch.Load( CommunitySearch.m_sSearchTextQueued );
				CommunitySearch.m_sSearchTextQueued = null;
			}
		} );

		// reset the page, any new search will start again
		this.m_nPage = 1;
	}
}


