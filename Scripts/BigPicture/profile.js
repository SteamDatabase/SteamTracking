
function SetTabButton( btnName )
{
	// Need to escape context out into parent layout to set focus to a tab button
	// First find inner panel, we may use this helper in various circumstances so
	// check a bunch, then escape up a few parent levels.
	pProfile = $.GetContextPanel();
	while ( pProfile && pProfile.id != 'ProfileWrapper' )
		pProfile = pProfile.GetParent();

	p = pProfile.FindChildTraverse( btnName );
	if ( p )
		p.SetFocus();
}
function SetFocusProfileButton() { SetTabButton( 'ShowProfileButton' ); }
function SetFocusFriendActivityButton() { SetTabButton( 'FriendActivityButton' ); }

g_LastActivated = null;
function UpdateRightColumn( strLayoutXMLBase64 )
{
	pRightColumn = $('#RightDetailsColumn');

	// Mark old panels for deletion
	for( var i=0; i<pRightColumn.GetChildCount(); i++)
	{
		var oTarget = pRightColumn.GetChild(i);
		if( oTarget.BHasClass('Deleting'))
			continue;

		oTarget.AddClass('Deleting');
		oTarget.DeleteAsync(1.0);
	}

	var oContainer = $.CreatePanel( 'Panel', pRightColumn, '' );
	oContainer.AddClass('RightColumnContentContainer');
	$.Schedule( 0.1, function()
	{
		oContainer.AddClass('Appearing');
	});

	oContainer.tabindex = "auto";
	oContainer.selectionposition = "auto";

	CPanelUtils.MoveToTop(oContainer);


	$.DispatchEvent( 'LoadLayoutFromBase64XMLStringAsync', oContainer, strLayoutXMLBase64, true );
	pRightColumn.ScrollToTop();


	if ( g_LastActivated && g_LastActivated.IsValid() )
	{
		g_LastActivated.RemoveClass( 'current_selection' );
	}
}

function FocusRightColumn( panelActivated )
{
	pRightColumn = $('#RightDetailsColumn');
	if ( pRightColumn )
		pRightColumn.SetFocus();

	pLastFocus = $( '#'+panelActivated );
	if ( pLastFocus )
	{
		pLastFocus.AddClass( 'current_selection' );
		g_LastActivated = pLastFocus;
	}
}

function RestoreLeftColumnFocus()
{
	if  (g_LastActivated && g_LastActivated.IsValid() )
		g_LastActivated.SetFocus()
	else
	{
		$( '#RightDetailsColumn' ).GetParent().FindChildTraverse( 'LeftActivityColumn' ).SetFocus();
	}
}

function UpdateLeftSelection( panelActivated )
{
	p = $( '#'+panelActivated );
	if ( !p )
		p = $( '#RightDetailsColumn' ).GetParent().FindChildTraverse( panelActivated );
	
	if ( p && g_LastActivated == p )
	{
		// Just make sure it's set anyway...
		p.AddClass( 'current_selection' );
		return;
	}

	if ( g_LastActivated && g_LastActivated.IsValid() )
	{
		g_LastActivated.RemoveClass( 'current_selection' );
	}

	if ( p )
	{
		p.AddClass( 'current_selection' );
		g_LastActivated = p;
	}
}

function LoadNextActivityFeedPage( strURL, oPanel )
{
	oPanel.ClearPanelEvent( "ondescendantfocus" );
	$('#ThrobberContainer').RemoveClass('Invisible');
	$.AsyncWebRequest(strURL,
		{
			type: 'GET',
			success: function( data )
			{
				var oPanel = $.CreatePanel( 'Panel', $('#LeftActivityColumn'), '');
				oPanel.BLoadLayoutFromString( data, false, true );
				CPanelUtils.AppendChildrenToOther(oPanel, $('#LeftActivityColumn') );
				$('#ThrobberContainer').AddClass('Invisible');
				CPanelUtils.MoveToBottom( $('#ThrobberContainer') );
			}
		}
	);
}

function OnCommentPostComplete( bSuccess, name, data )
{
	if ( bSuccess && data.success )
	{
		textentry = $( '#commentthread_'+name+'_textarea' );
		if ( textentry )
			textentry.text = '';

		if ( data.comments_html )
		{
			posts = $( '#commentthread_'+name+'_posts' );
			posts.LoadLayoutFromStringAsync( data.comments_html, true, true );
		}

		if ( data.votetext )
		{
			votelabel = $( '#blotter_vote_count_'+name );
			if ( votelabel )
			{
				votelabel.html = true;
				votelabel.text = data.votetext;
			}
		}
	}
	else
	{
		if ( data.error )
		{
			errorlabel = $( '#commentthread_'+name+'_entry_error_label' );
			if ( errorlabel )
				errorlabel.text = data.error;
		}
	}
}

function OnStatusPostComplete( bSuccess, data )
{
	if ( bSuccess && data.success )
	{
		textentry = $( '#poststatus_entry' );
		if ( textentry )
			textentry.text = '';

		$.DispatchEvent( 'OpenFriendActivity', true );
	}
	else
	{

		errorlabel = $( '#poststatus_entry_error' );
		if ( errorlabel )
		{
			if ( data.message )
			{
				errorlabel.text = data.message;
			}
			else
			{
				errorlabel.text = $.Localize( "#Community_PostStatusFailure" );
			}
		}
	}
}

function BAddCommonParamsToRequest( req_settings, panel )
{
	if ( !req_settings.data )
		req_settings.data = { };

	var now = new Date();
	tzOffset = now.getTimezoneOffset() * -1 * 60;
	isDST = 0;

	req_settings.data.timezoneOffset = tzOffset+','+isDST;
	req_settings.data.sessionid = panel.GetAttributeString( 'sessionid', '0' );
	req_settings.data.l = $.Language();

	return true;
}

function BAddCommentThreadParamsToRequest( req_settings, panel )
{
	if ( !req_settings.data )
		req_settings.data = { };

	if ( !BAddCommonParamsToRequest( req_settings, panel ) )
		return false;

	req_settings.data.count = panel.GetAttributeString( "pagesize", "0" );
	
	extdata = panel.GetAttributeString( "extended_data", "" );
	if ( extdata && extdata.length > 0 )
		req_settings.data.extended_data = extdata;
	
	req_settings.data.feature2 = panel.GetAttributeString( "feature2", "0" );

	if ( panel.GetAttributeInt( "oldestfirst", 0 ) )
		req_settings.data.oldestfirst = 1;

	if ( panel.GetAttributeInt( "newestfirstpagination", 0 ) )
		req_settings.data.newestfirstpagination = 1;

	lastvisit = panel.GetAttributeUInt32( "lastvisit", 0 ) ;
	if ( lastvisit )
		req_settings.data.lastvisit = lastvisit;

	return true;
}

function PostComment( id, type, name, url )
{
	panel = $( '#'+id );
	if ( !panel )
	{
		$.Msg( 'Failed to find panel '+id );
		return;
	}

	strFullURL = url+"post/"+panel.GetAttributeString( "owner", "0" )+"/"+panel.GetAttributeString( "feature", "0" )+"/";

	textentry = $( '#commentthread_'+name+'_textarea' );
	if ( !textentry )
	{
		$.Msg( 'Failed to find text entry for comment '+name );
		return;
	}

	req_settings = 
	{ 
		data: { comment: textentry.text },
		type: 'POST',
		success: function( data ) { OnCommentPostComplete( true, name, data ); },
		error: function() { OnCommentPostComplete( false, name, {} ); }
	}
	if ( !BAddCommentThreadParamsToRequest( req_settings, panel ) )
		return;

	$.AsyncWebRequest( strFullURL, req_settings );
}

function DeleteCommentFromThread( id, type, name, url, gid )
{
	panel = $( '#'+id );
	if ( !panel )
	{
		$.Msg( 'Failed to find panel '+id );
		return;
	}

	strFullURL = url+"delete/"+panel.GetAttributeString( "owner", "0" )+"/"+panel.GetAttributeString( "feature", "0" )+"/";
	
	req_settings = 
	{ 
		data: { gidcomment: gid },
		type: 'POST',
		success: function( data ) { OnCommentPostComplete( true, name, data ); },
		error: function() { OnCommentPostComplete( false, name, {} ); }
	}
	if ( !BAddCommentThreadParamsToRequest( req_settings, panel ) )
		return;

	$.AsyncWebRequest( strFullURL, req_settings );
}

function PostUserStatus( url )
{
	textentry = $( '#poststatus_entry' );
	if ( !textentry )
	{
		$.Msg( 'Failed to find text entry for post status' );
		return;
	}

	req_settings = 
	{ 
		data: { status_text: textentry.text, appid: 0 },
		type: 'POST',
		success: function( data ) { OnStatusPostComplete( true, data ); },
		error: function() { OnStatusPostComplete( false, {} ); }
	}
	if ( !BAddCommonParamsToRequest( req_settings, textentry ) )
		return;

	$.AsyncWebRequest( url, req_settings );
}

function VoteCommentThreadUp( id, type, pageid, url )
{
	panel = $( '#'+id );
	if ( !panel )
	{
		$.Msg( 'Failed to find panel for vote comment thread up' );
		return;
	}

	strFullURL = url+"voteup/"+panel.GetAttributeString( "owner", "0" )+"/"+panel.GetAttributeString( "feature", "0" )+"/";
	
	req_settings = 
	{ 
		data: { vote: 1 },
		type: 'POST',
		success: function( data ) { OnCommentPostComplete( true, pageid, data ); },
		error: function() { OnCommentPostComplete( false, pageid, {} ); }
	}
	if ( !BAddCommentThreadParamsToRequest( req_settings, panel ) )
		return;

	$.AsyncWebRequest( strFullURL, req_settings );
}
	
function OnMoveUpToMenu( button )
{
	var panel = $.GetContextPanel().GetParent();
	var menu = panel.FindChild( "ProfileMenu" );
	$.GetContextPanel().AddClass( "ProfileInvisible" );
	$.GetContextPanel().RemoveClass( "ProfileVisible" );

	menu.AddClass( "ProfileVisible" );
	menu.RemoveClass( "ProfileInvisible" );
	
	$.DispatchEvent( "SetMainMenuStackDepth", 2 );

	menu.FindChildTraverse( button ).SetFocus();
}

function DisplayFullscreenImage( parentpanelid, url )
{
	var layout =
			'<root>' +
			'<styles>' +
			'<include src="file://{resources}/styles/steamstyles.css" />' +
			'<include src="file://{resources}/styles/msgbox.css" />' +
			'<include src="https://steamcommunity-a.akamaihd.net/public/css/bigpicture/profile.css?v=P09xFr-np6UC" />' +
'</styles>' +
'<scripts>' +
'<include src="https://steamcommunity-a.akamaihd.net/public/javascript/bigpicture/base.js?v=k8VvpZPSHllS&amp;l=english" />' +
'<include src="https://steamcommunity-a.akamaihd.net/public/javascript/bigpicture/profile.js?v=b2958157&amp;l=english" />' +
'</scripts>' +
'<Panel defaultfocus="ImageButton" class="FullscreenImagePopup" oncancel="CloseFullscreenImage( \'FullscreenImagePopup\' );" >' +
'<Image id="BackgroundImage" scaling="stretch-to-cover-preserve-aspect" src="' + url + '" />' +
'<Button id="ImageButton" >' +
'<Image id="PreviewImage" scaling="stretch-to-fit-preserve-aspect" src="' + url + '" />' +
'</Button>' +
'</Panel>' +
'</root>';

	var popup = $.CreatePanel( 'Panel', $.TenfootController($.GetContextPanel() ).AccessMainMenu(), 'FullscreenImagePopup', layout );
	var panel = $(parentpanelid);

	var offsets = ComputeXAndY( panel );

	var x = offsets.x + ( panel.actuallayoutwidth / 2 ) - ( offsets.mainwidth / 2 );
	var y = offsets.y + ( panel.actuallayoutheight / 2 ) - ( offsets.mainheight / 2 );
	popup.SetAttributeInt( "x", x );
	popup.SetAttributeInt( "y", y );

	popup.style.transform = 'translate3d( ' + popup.GetAttributeInt( "x", 0 ) + 'px, ' + popup.GetAttributeInt( "y", 0 ) + 'px, 0px )';


	popup.style.preTransformScale2d = '0.0';


	$.RegisterEventHandler( 'LoadAsyncComplete', popup, function( p, bSuccess, eDetail, bPartial )
	{
		var target = popup.FindChildTraverse( "ImageButton" );
		$.RegisterFooterButton( target, 'pad_b', 'EXIT FULLSCREEN' );
		$.RegisterFooterButton( target, 'pad_a', '' );

		$.DispatchEventAsync( 0.1, 'SetInputFocus', target );

		popup.style.opacity = 1;
		popup.style.preTransformScale2d = '1.0';
		popup.style.transform='translatex( 0px )';



	});



	popup.LoadLayoutFromStringAsync( layout, true, false );

	$.TenfootController($.GetContextPanel()).ShowModalDialog( popup, '' );
}

function ComputeXAndY( panel )
{
	mainwidth = 0;
	mainheight = 0;
	x = 0;
	y = 0;

	while ( true )
	{
		x = x + panel.actualxoffset + panel.scrolloffset_x;
		y = y + panel.actualyoffset + panel.scrolloffset_y;

		panel = panel.GetParent();

		if ( panel.id == 'MainMenu' || panel.id == 'OverlayBasePanel' )
		{
			mainwidth = panel.actuallayoutwidth;
			mainheight = panel.actuallayoutheight;
			break;
		}
	}

	return { x: x, y: y, mainwidth: mainwidth, mainheight: mainheight };
}

function CloseFullscreenImage( id )
{

	var popup = $.TenfootController( $.GetContextPanel() ).AccessMainMenu().FindChildTraverse( id );

	popup.style.transform = 'translate3d( ' + popup.GetAttributeInt( "x", 0 ) + 'px, ' + popup.GetAttributeInt( "y", 0 ) + 'px, 0px )';
	popup.style.preTransformScale2d = '0.0';

	popup.AddClass( "Destructing" );
	$.DispatchEvent( 'MessageBoxClose', popup );
	popup.DeleteAsync( 0.4 );
}


function CloseCustomTextPopup()
{
	var popup = $.TenfootController( $.GetContextPanel() ).AccessMainMenu().FindChildTraverse( "CommunityAppHubPopup" );

	popup.AddClass( "Destructing" );
	$.DispatchEvent( 'MessageBoxClose', popup );
	popup.DeleteAsync( 0.4 );
}

function DisplayCustomTextPopup()
{
	var layout = '<root> \
					<styles> \
						<include src="file://{resources}/styles/steamstyles.css" /> \
						<include src="file://{resources}/styles/community/community.css" /> \
						<include src="https://steamcommunity-a.akamaihd.net/public/css/bigpicture/apphub.css?v=.EG_onv9W7LA9" /> \
						<include src="https://steamcommunity-a.akamaihd.net/public/css/bigpicture/community.css?v=.1AHjX1yTBFee" /> \
						<include src="https://steamcommunity-a.akamaihd.net/public/css/bigpicture/profile.css?v=P09xFr-np6UC" /> \
					</styles> \
					<script>' +
		CloseCustomTextPopup.toString() +
		'</script> \
		<Panel oncancel="CloseCustomTextPopup();" class="CommunityAppHubPopup CustomTextPopup" defaultfocus="CommunityAppHubPopupButton"> \
			<Panel class="Wrapper" tabindex="auto" selectionpos="auto"> \
				<Label id="Title" class="CustomTitle" text="" html="true" /> \
				<Button class="TextWrapperButton" tabindex="auto" selectionpos="auto"> \
					<Label id="Text" class="CustomText" text="" html="true" /> \
				</Button> \
				<Button id="CommunityAppHubPopupButton" class="Button" tabindex="auto" selectionpos="auto" onactivate="CloseCustomTextPopup();"> \
					<Label text="OK" /> \
				</Button> \
			</Panel> \
		</Panel> \
	</root>';

	var popup = $.CreatePanel( 'Panel', $.TenfootController( $.GetContextPanel() ).AccessMainMenu(), 'CommunityAppHubPopup' );
	popup.BLoadLayoutFromString( layout, true, false );
	var title = popup.FindChildTraverse( "Title" );
	title.text = g_strCustomTitle;

	var text = popup.FindChildTraverse( "Text" );
	text.text = g_strCustomText;

	/*
	$.RegisterKeyBind( popup, "pad_b,steampad_b", function() { CloseCustomTextPopup(); } );
	$.RegisterFooterButton( popup, "pad_b", 'DISMISS' );
	*/

	$.TenfootController( $.GetContextPanel() ).ShowModalDialog( popup, '' );
}

var CJSONGridFeed = function( rgOptions )
{
	this.rgData = rgOptions.data;
	this.strDataSource = rgOptions.datasource;
	this.rgDataSourceOptions = rgOptions.datasourceoptions;
	this.fnRenderRow = rgOptions.onrenderrow;
	this.oGrid = rgOptions.grid
	this.bInitialized = false;
}

CJSONGridFeed.prototype.Activate = function()
{
	if( !this.bInitialized )
	{
		// Check data source, do we need to ajax in data?
		if ( !this.rgData || this.rgData.length == 0 )
		{
			$.AsyncWebRequest(this.strDataSource,
				{
					type: 'GET',
					data: this.rgDataSourceOptions,
					success: this.onDataSourceLoaded
					// todo: Handle failure mode
				}
			);
		}
		else
			this.onDataSourceLoaded(this.rgData);

		return;
	}

	this.oGrid.AddClass('Visible');
}

CJSONGridFeed.prototype.onDataSourceLoaded = function( rgData )
{
	this.rgData = rgData;

	var nInitialRows = this.oGrid.verticalcount * this.oGrid.horizontalcount * 1.25;

	for( var i=0; i<nInitialRows; i++ )
	{
		if( i >= rgData.length)
			break;

		this.fnRenderRow( rgData[i], this.oGrid )
	}

	this.bInitialized = true;
	this.Activate();
}


