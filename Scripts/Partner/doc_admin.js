
var g_rgLanguageNames = {"english":"English","german":"German","french":"French","italian":"Italian","koreana":"Korean","spanish":"Spanish","schinese":"Simplified Chinese","tchinese":"Traditional Chinese","russian":"Russian","thai":"Thai","japanese":"Japanese","portuguese":"Portuguese","polish":"Polish","danish":"Danish","dutch":"Dutch","finnish":"Finnish","norwegian":"Norwegian","swedish":"Swedish","hungarian":"Hungarian","czech":"Czech","romanian":"Romanian","turkish":"Turkish","arabic":"Arabic","brazilian":"Portuguese-Brazil","bulgarian":"Bulgarian","greek":"Greek","ukrainian":"Ukrainian"};

function updateArticleSummary( articleSummary ) {
	$J( '#articleSummaryUrlSlug' ).text( articleSummary.url_slug );
	$J( '#articleSummaryVisible' ).text( articleSummary.visible ? 'Yes' : 'No' );
	$J( '#articleSummaryMakeVisible span' ).text( articleSummary.visible ? 'Make Hidden' : 'Make Visible' );
	$J( '#articleSummaryMakeVisible' ).data( 'currentVisibility', articleSummary.visible );
	$J( '#articleSummaryHideFromToc' ).prop( 'checked', articleSummary.hide_from_toc );
	$J( '#articleSummaryHideFromSearch' ).prop( 'checked', articleSummary.hide_from_search );
	$J( '#articleSummaryLocalizeDraft' ).prop( 'checked', articleSummary.localize_draft );
	$J( '#articleSummaryPriority' ).val( articleSummary.priority );
	if ( !Array.isArray( articleSummary.required_partner_capabilities ) || articleSummary.required_partner_capabilities.length == 0 )
	{
		$J( '#articleSummaryCapabilitiesRequiredNo' ).prop( 'checked', true );
		$J( '#articleSummaryCapabilityList input' ).prop( 'checked', false );
		$J( '#articleSummaryCapabilityList' ).slideUp( 250 );
	}
	else 
	{
		$J( '#articleSummaryCapabilitiesRequiredYes' ).prop( 'checked', true );
		$J( '#articleSummaryCapabilityList input' ).prop( 'checked', false );
		for ( i = 0; i < articleSummary.required_partner_capabilities.length; ++i )
		{
			$J( '#articleSummaryCapability' + articleSummary.required_partner_capabilities[i] ).prop( 'checked', true );
		}

		$J( '#articleSummaryCapabilityList' ).slideDown( 250 );
	}
	//$J( '#articleSummaryPermissionsRequired' ).val( articleSummary.permissions_required );
	$J( '#articleSummaryArticleId' ).text( articleSummary.articleid );
	var $liveVersions = $J( '#articleSummaryLiveVersions' );
	var $betaVersions = $J( '#articleSummaryBetaVersions' );
	
	$liveVersions.children( 'tbody' ).empty();
	$betaVersions.children( 'tbody' ).empty();

	$J( '#articleSummaryMakeVisible' ).hide();

	var lang = $J( '#articleSummary' ).data( 'language' );
	var dateFormat = { 'month': 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' };

	if ( articleSummary.live_content.length > 0 )
	{
		$liveVersions.show();
		$J( '#articleSummaryMakeVisible' ).show();
		for ( var i = 0 ; i < articleSummary.live_content.length; ++i )
		{
			var version = articleSummary.live_content[ i ];
			var $row = $J( '<tr></tr>' );

			var $link = $J( '<a></a>' );
			$link.attr( 'href', 'https://partner.steamgames.com/doc/' + articleSummary.url_slug + "?language=" + version[ 'language' ] );
			$link.text( g_rgLanguageNames[ version[ 'language' ] ] );
			$row.append( $J( '<td></td>' ).append( $link ) );
			$row.append( $J( '<td></td>' ).text( version[ 'version' ] ) );
			$row.append( $J( '<td></td>' ).text( new Date( version[ 'timestamp' ] * 1000 ).toLocaleDateString( lang, dateFormat ) ) );
			$row.append( $J( '<td></td>' ).append( $J( '<a></a>' ).attr( 'href', version[ 'editor_url' ] ).text( version[ 'editor_name' ] ) ) );
			$liveVersions.append( $row );
		}
	}
	else
	{
		$liveVersions.hide();
	}

	if ( articleSummary.beta_content.length > 0 )
	{
		$betaVersions.show();
		for ( i = 0 ; i < articleSummary.beta_content.length; ++i )
		{
			version = articleSummary.beta_content[ i ];
			$row = $J( '<tr></tr>' );
			$link = $J( '<a></a>' );
			$link.attr( 'href', 'https://partner.steamgames.com/doc/' + articleSummary.url_slug + "?beta=1&language=" + version[ 'language' ] );
			$link.text( g_rgLanguageNames[ version[ 'language' ] ] );
			$row.append( $J( '<td></td>' ).append( $link ) );
			$row.append( $J( '<td></td>' ).text( new Date( version[ 'timestamp' ] * 1000 ).toLocaleDateString( lang, dateFormat ) ) );
			$row.append( $J( '<td></td>' ).append( $J( '<a></a>' ).attr( 'href', version[ 'editor_url' ] ).text( version[ 'editor_name' ] ) ) );
			$link = $J( '<a href="#" class="btn_small_thin btn_blue_white_innerfade"><span>Publish</span></a>' ).data( 'language', version[ 'language' ] );
			$link.click( function() {
				articleSummaryAjax( 'publish', { 'languages': $J( this ).data( 'language' ) } );
				return false;
			});
			$row.append( $J( '<td></td>' ).append( $link ) );
			$betaVersions.append( $row );
		}
	}
	else
	{
		$betaVersions.hide();
	}
}

function articleSummaryAjax( method, data, successCallback, failureCallback )
{
	data[ 'sessionid' ] = g_sessionID;
	$J.ajax({
		'type': 'POST',
		'url': 'https://partner.steamgames.com/docadmin/' + method + '/' + $J('#articleSummaryUrlSlug').text(),
		'data': data,
		'success': function( resp )
		{
			var $publishResult = $J( '#articleSummaryPublishResult' );
			$publishResult.removeClass();
			if ( resp.success )
			{
				if ( resp.hasOwnProperty( 'articleSummary' ) )
					updateArticleSummary( resp.articleSummary );

				$publishResult.text( 'Saved successfully!' );
				$publishResult.addClass( 'successmsg' );
				setTimeout( function() {
					$publishResult.slideUp( 250 );
				}, 2000 );
				if ( successCallback != null )
					successCallback( data );
			}
			else
			{
				$publishResult.text( 'Error Saving: ' + resp.error );
				$publishResult.addClass( 'errormsg' );
				if ( failureCallback != null )
					failureCallback( data );
			}
			$publishResult.slideDown( 250 );
		}
	});
}

function updateVisibility( bChangeVisibility ) {
	var currentVisibility = $J( '#articleSummaryMakeVisible' ).data( 'currentVisibility' );
	articleSummaryAjax( 'visibility', {
		visibility: bChangeVisibility ? !currentVisibility : currentVisibility,
		hideFromToc: $J( '#articleSummaryHideFromToc' ).is( ':checked' ),
		hideFromSearch: $J( '#articleSummaryHideFromSearch' ).is( ':checked' ),
		localizeDraft: $J( '#articleSummaryLocalizeDraft' ).is( ':checked' ),
	} );
}

$J( document ).ready( function(){
	$J( '#articleSummaryMakeVisible' ).click( function() {
		if ( $J( this ).data( 'currentVisibility' ) == 0 || confirm( 'Are you sure you want to hide this visible article?' ) )
			updateVisibility( true );
	} );
	$J( '#articleSummaryHideFromToc, #articleSummaryHideFromSearch, #articleSummaryLocalizeDraft' ).change( function() { updateVisibility( false ); } );

	$J( '#articleSummaryAccess input[name=required]' ).change( function() {
		if ( this.value == 0 )
		{
			$J( '#articleSummaryCapabilityList' ).slideUp( 250 );
			$J( '#articleSummaryCapabilityList input' ).prop( 'checked', false );
		}
		else
		{
			$J( '#articleSummaryCapabilityList' ).slideDown( 250 );
		}
	});

	$J( '#articleSummaryPriority' ).on( 'change keyup', function() {
		articleSummaryAjax( 'priority', { 'priority': this.value } );
	});

	$J( '#adminControlsLanguage' ).change( function() {
		var selected = this.options[ this.selectedIndex ];
		window.location.href = 'https://partner.steamgames.com/doc/' + this.dataset.slug + '?language=' + selected.value + '&beta=' + selected.dataset.beta;
		//window.location.href = 'https://partner.steamgames.com/doc/' + this.dataset.slug + '?language=' + this.dataset.language + '&beta=' + ( this.checked ? 1 : 0 );
	});

	$J( '#docTocShowAdminView' ).change( function() {
		document.cookie = "docShowAdminToc=" + this.checked + '; path=/';
		location.reload();
	});

	$J( '#articleSummaryAccess input' ).change( function() {
		var required = $J( '#articleSummaryAccess input[name=required]:checked' ).val();
		var numChecked = $J( '#articleSummaryAccess input[name=capabilities\\[\\]]:checked' ).length;

		// Changing the radio button to "restricted" doesn't actually restrict until one or more checkboxes is checked
		// Only fire AJAX if "restricted" was disabled or a checkbox was changed.
		if ( required == 0 || ( numChecked > 0 || this.type == 'checkbox' ) )
			articleSummaryAjax( 'access', $J( '#articleSummaryAccess' ).serialize() )
	});
});

