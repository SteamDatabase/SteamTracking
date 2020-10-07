var CStoreLocalizationHelper = function( nCurrentLanguage )
{
	this.m_nCurrentLanguage = nCurrentLanguage;
};

CStoreLocalizationHelper.prototype.UpdateHighlights = function( rgFieldNames )
{
	for( var language=0; language < 30; language++ )
	{
		var bHasLanguage = false;
		for( var j = 0; j < rgFieldNames.length; ++j )
		{
			var strFieldName = rgFieldNames[ j ];

			if( $J('#' + language + '_' + strFieldName).val() )
			{
				bHasLanguage = true;
				break;
			}
		}

		if( bHasLanguage )
			$J('#' + language + '_opt').addClass('has_localization');
		else
			$J('#' + language + '_opt').removeClass('has_localization');
	}
};

CStoreLocalizationHelper.prototype.SaveFields = function( rgFieldNames )
{
	for( var i = 0; i < rgFieldNames.length; ++i )
	{
		var strFieldName = rgFieldNames[ i ];
		var strFieldValue = $J('#' + strFieldName ).val();

				if( $J( '#' + this.m_nCurrentLanguage + '_' + strFieldName ).val() != strFieldValue )
		{
			$J( '#' + this.m_nCurrentLanguage + '_' + strFieldName ).val( strFieldValue );
		}
	}

	this.UpdateHighlights( rgFieldNames );
};

CStoreLocalizationHelper.prototype.SwapLanguageFields = function( rgFieldNames, nNewLanguage )
{
		this.SaveFields( rgFieldNames );

		this.m_nCurrentLanguage = nNewLanguage;

	for( var i = 0; i < rgFieldNames.length; ++i )
	{
		var strFieldName = rgFieldNames[ i ];

		var strFieldValue = $J('#' + this.m_nCurrentLanguage + '_' + strFieldName ).val();

		$J('#' + strFieldName ).val( strFieldValue );
	}
};

