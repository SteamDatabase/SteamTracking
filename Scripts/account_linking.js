function UnlinkExternalAccount( external_account_type, external_account_id, internal_account_type, internal_account_id, redirect_page_link, authwgtoken )
{
	PostToURLWithSession( 'https://steamcommunity.com/account_linking/' + internal_account_id + '/unlink/', {
		external_account_type : external_account_type,
		internal_account_type : internal_account_type,
		redirect_page : redirect_page_link,
		external_account_id : external_account_id,
		authwgtoken: authwgtoken
	} );
}

function LinkExternalAccount( external_account_type, internal_account_type, internal_account_id, redirect_page_link, authwgtoken )
{
	PostToURLWithSession( 'https://steamcommunity.com/account_linking/' + internal_account_id + '/begin_link/', {
		external_account_type : external_account_type,
		internal_account_type : internal_account_type,
		redirect_page: redirect_page_link,
		authwgtoken: authwgtoken
	} );
}

function UpdateExternalSubAccountInfo( external_account_type, external_account_id, external_user_name, external_url,
                                       internal_account_id, internal_account_type, redirect_page_link, authwgtoken )
{
	PostToURLWithSession( 'https://steamcommunity.com/account_linking/' + internal_account_id + '/update/', {
			external_account_type : external_account_type,
			external_account_id : external_account_id,
			external_user_name: external_user_name,
			external_url: external_url,
			internal_account_type : internal_account_type,
			redirect_page : redirect_page_link,
			authwgtoken: authwgtoken
	} );
}
