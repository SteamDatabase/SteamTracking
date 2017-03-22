
function ShowCouponSuggetions( gid, gidSelectedCoupon )
{
	// highlight the currently selected coupon
	var elForm = $('select_coupon_' + gid );
	var rgRadios = elForm.elements['gidcoupon'];
	for ( var i = 0; i < rgRadios.length; i++ )
	{
		if ( ( gidSelectedCoupon && rgRadios[i].value == gidSelectedCoupon ) ||
				!gidSelectedCoupon && rgRadios[i].value == '' )
		{
			rgRadios[i].checked = true;
			rgRadios[i].is_current_coupon = true;
			break;
		}
	}

	var elRow = $('cart_row_' + gid );
	var elDialog = $('suggestedcoupons_' + gid );
	var elBackground = $('coupon_selector_bg');

	// duplicate the cart row into the dialog
	var elRowDupe = elDialog.down('.cart_row_dupe');
	elRowDupe.update( elRow.down('.cart_item').clone( true ) );

	if ( elDialog.parentNode != document.body )
		$(document.body).appendChild( elDialog.remove() );

	UpdateCouponChoiceDisplay( elDialog );

	elDialog.fnOnResize = PositionCouponSuggestions.bind( null, elRow, elDialog, elBackground );
	elDialog.fnOnResize();
	Event.observe( window, 'resize', elDialog.fnOnResize );

	new Effect.Appear( elBackground, { from: 0.0, to: 0.6, duration: 0.4 } );
	elDialog.setOpacity( 1 );
	elDialog.show();


}

function PositionCouponSuggestions( elRow, elDialog, elBackground )
{
	elBackground.style.top = 0 + 'px';
	elBackground.style.left = 0 + 'px';
	elBackground.style.width = $(document.body).getWidth() + 'px';
	elBackground.style.height = $(document.body).getHeight() + 'px';
	
	elDialog.clonePosition( elRow, {setWidth: false, setHeight: false} );
	elDialog.style.left = ( parseInt( elDialog.style.left ) - 5 ) + 'px';
	elDialog.style.top = ( parseInt( elDialog.style.top ) - 1 ) + 'px';
}

function DismissCouponSuggestions( gid )
{
	var elRow = $('cart_row_' + gid );
	var elDialog = $('suggestedcoupons_' + gid );
	var elBackground = $('coupon_selector_bg');

	new Effect.Fade( elBackground, { duration: 0.2 } );
	new Effect.Fade( elDialog, {duration: 0.2 } );

	elDialog.hide();

	Event.stopObserving( window, 'resize', elDialog.fnOnResize );
}

function CouponChoiceClick( elCouponChoice )
{
	var elRadio = $(elCouponChoice).down('input[type="radio"]');
	if ( !elRadio.checked && !elRadio.disabled )
		elRadio.checked = true;
	UpdateCouponChoiceDisplay( $(elCouponChoice).up('.cart_coupon_selector') );
}

function UpdateCouponChoiceDisplay( elCouponSelector )
{
	var rgCouponChoices =elCouponSelector.select('.coupon_choice');
	for ( var i = 0; i < rgCouponChoices.length; i++ )
	{
		var elCouponChoice = rgCouponChoices[i];
		var elRadio = elCouponChoice.down('input[type="radio"]');
		if ( elRadio && elRadio.checked )
			elCouponChoice.addClassName('active');
		else
			elCouponChoice.removeClassName('active');
	}
}

function SaveCouponSelections( gid )
{
	var elForm = $('select_coupon_' + gid );
	var bMadeChanges = false;
	var rgRadios = elForm.elements['gidcoupon'];
	for ( var i = 0; i < rgRadios.length; i++ )
	{
		if ( rgRadios[i].checked && !rgRadios[i].is_current_coupon )
		{
			bMadeChanges = true;
		}
	}

	if ( bMadeChanges )
	{
		$('coupon_save_btn_area_' + gid).update( '&nbsp;' );
		elForm.submit();
	}
	else
		DismissCouponSuggestions( gid );
}

function ForgetCart()
{
	var date = new Date();
	date.setTime(date.getTime()+(-10*24*60*60*1000));
	var expires = "expires="+date.toGMTString();
	document.cookie = 'shoppingCartGID'+"=-1; "+expires+"; path=/";
	window.location = window.location;
}

