
var g_oRecommendations = null;
var g_rgListData = [];

function ShowAutocompleteDialog( strTitle, strDesc, fnSuggest, fnSelect, fnDone, fnFieldModified )
{
	var modal = ShowPromptDialog( strTitle, strDesc, "OK", "Cancel", { 'bNoPromiseDismiss': true } );
	modal.done( fnDone );

	modal.fail( function(){
		modal.Dismiss();
	});

	var $btnOk = $J($J('.newmodal_buttons button', modal.GetContent())[0]);

	modal.DisableInput = function(){
		fnFieldModified( );
		$btnOk.addClass('btn_disabled');
	};

	modal.EnableInput = function(){
		$btnOk.removeClass('btn_disabled');
	};


	var $elDialogContent = $J('input', modal.m_$Content);
	$elDialogContent.on('input', function(){
		modal.DisableInput();
	});

	new CTextInputSuggest( $elDialogContent ,
		fnSuggest,
		fnSelect
	);

	modal.DisableInput();
	modal.Show();

	return modal;
}


function CallFunctionFromForm( elForm, rgFields, fnFunc, fnOnComplete, rgAdditionalFields )
{
	var rgArgs = [];
	for (var i=0; i<rgFields.length; i++ )
	{
		var rgTargets = elForm.querySelectorAll('*[name="'+rgFields[i]+'"]');

		var rgValues = [];
		for( var j=0; j<rgTargets.length; j++ )
		{
			if( ( rgTargets[j].type == "radio" || rgTargets[j].type == "checkbox" ) )
			{
				if( rgTargets[j].checked )
				{
					rgValues.push ( rgTargets[ j ].value );
				}
			}
			else
			{
				rgValues.push( rgTargets[j].value )
			}
		}

		// @todo chrisk consider always returning array for foo[] and never for foo?
		rgArgs.push( rgValues.length > 1 ? rgValues : rgValues[0] );

	}

	if( rgAdditionalFields )
	{
		rgArgs = rgArgs.concat ( rgAdditionalFields );
	}

	if( fnOnComplete )
		rgArgs.push(fnOnComplete);

	fnFunc.apply(null, rgArgs);
}


function LoadListData()
{
	console.log(this);
	console.log(this.bListDataLoading);
	if( this.bListDataLoading )
		return;
	this.bListDataLoading = true;

		console.log(g_strCuratorBaseURL + 'ajaxgetlists/');

	$J.ajax ( {
		url: g_strCuratorBaseURL + 'ajaxgetlists/',
		data: {
			sessionid: g_sessionID,
			count: 250
		},
		type: 'POST'
	} ).done( function ( data )
	{
		g_rgListData = data.list_details;
		console.log(g_rgListData);
	});

}

function ReportAbuse( strAbuseID )
{

	var strModal = "\r\n\t\t<div id=\"reportAbuseModalContents\">\r\n\t\t\t<form method=\"post\" onSubmit=\"return checkAbuseSub( this );\" action=\"https:\/\/store.steampowered.com\/\/actions\/ReportAbuse\/\" id=\"abuseForm\">\r\n\t\t\t\t<input type=\"hidden\" name=\"abuseID\" value=\"%1$s\">\r\n\t\t\t\t<input type=\"hidden\" name=\"json\" value=\"1\">\r\n\t\t\t\t<input type=\"hidden\" name=\"sessionid\" value=\"%2$s\">\r\n\t\t\t\t<div class=\"halfBox\">\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<input class=\"abuseRadio\" type=\"radio\" name=\"abuseType\" id=\"abuseType1\" value=\"Offensive UGC\">\r\n\t\t\t\t\t\t\t<label for=\"abuseType1\">Offensive - <span class=\"sub\">Contains content that is patently offensive or intended to shock or disgust viewers<\/span><\/label>\r\n\t\t\t\t\t<\/div>\r\n\t\t\t\t<\/div>\r\n\t\t\t\t<div class=\"halfBox\">\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<input class=\"abuseRadio\" type=\"radio\" name=\"abuseType\" id=\"abuseType5\" value=\"Copyright Violation\">\r\n\t\t\t\t\t\t\t<label for=\"abuseType5\">Copyright - <span class=\"sub\">Contains content (such as background image or avatar) that the Curator does not own or have adequate rights to<\/span><\/label>\r\n\t\t\t\t\t<\/div>\r\n\t\t\t\t<\/div>\r\n\t\t\t\t<div style=\"clear: left;\"><\/div>\r\n\t\t\t\t<div class=\"abuseDescriptionCtn gray_bevel fullwidth\">\r\n\t\t\t\t\t<textarea name=\"abuseDescription\" id=\"abuseDescriptionArea\" rows=\"3\" cols=\"26\" placeholder=\"You may enter additional information that you feel is relevant here:\" ><\/textarea>\r\n\t\t\t\t<\/div>\r\n\t\t\t<\/form>\r\n\r\n\t\t<\/div>\r\n\r\n\t".replace('%1$s', V_EscapeHTML( strAbuseID ) ).replace('%2$s', g_sessionID);

	var modal = ShowConfirmDialog("Report", strModal, "Report" );
	var form = modal.GetContent().find('form');
	modal.done(function( foo ) {

		var rgParams = {
			type: 'POST',
			url: 'https://store.steampowered.com/actions/ReportAbuse/',
			data: form.serialize ()
		};

		$J.ajax ( rgParams ).done ( function () {
			ShowAlertDialog ( 'Thank You!', 'Thank you for reporting offensive content and helping to keep Steam clean and friendly.' );
		} ).fail ( function () {
			ShowAlertDialog ( 'Error', 'There was a problem saving your report.  Please try again later.' );
		} );
	});
}

function GetCuratorAvatarURLFromHash( hash, size )
{
    var strURL = 'https://avatars.akamai.steamstatic.com/' + hash;

	if ( size == 'full' )
		strURL += '_full.jpg';
	else if ( size == 'medium' )
		strURL += '_medium.jpg';
	else
		strURL += '.jpg';

	return strURL;
}


function CuratorUploadClanImage( wgAuthToken, elForm, fnSuccessCallback, tempname = '' )
{
		if( tempname.length > 0 )
	{
		$J('input[type=file][name=' + tempname + ']' ).attr( 'name', 'clanimage' );
	}

	var formData = new FormData(elForm);
	formData.append('sessionid', g_sessionID);
	formData.append('imagegroup', 2);
	formData.append('imagename', 'header');
	formData.append('authwgtoken', wgAuthToken );

		if( tempname.length > 0 )
	{
		$J('input[type=file][name=clanimage]' ).attr( 'name', tempname );
	}

	$J.ajax ( {
		url: g_strCuratorCommunityBaseURL + '/uploadimage/',
		data: formData,
		type: 'POST',
		cache: false,
		contentType: false,
		processData: false,
		crossDomain: true,
		xhrFields: { withCredentials: true }
	} ).done( function ( data )
	{
		if( data.success == 1 )
		{
			fnSuccessCallback( data );
		}
		else
		{
			ShowAlertDialog( 'Error', "We were unable to save your changes ( %1$s )".replace(/%1\$s/, data.success ) );
		}
	}).fail( function( data ) {
		if( data && data.responseText )
		{
			var result = JSON.parse( data.responseText );
			if( result.message )
			{
				ShowAlertDialog( 'Error', V_EscapeHTML( result.message ) );
			}
			else
			{
				ShowAlertDialog( 'Error', "We were unable to save your changes ( %1$s )".replace(/%1\$s/, data.success ) );
			}
		}
	});
}

function EClanImageFileTypeToString( $eType )
{
	switch( $eType )
	{
		case 2: return 'gif';
		case 3: return 'png';
		case 1:
		default:
			return 'jpg';
	}

}



