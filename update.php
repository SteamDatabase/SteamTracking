<?php
	new SteamTracker( Count( $argv ) === 2 ? $argv[ 1 ] : '' );

	class SteamTracker
	{
		private $APIKey;
		private $AppStart;
		private $CurrentTime;
		private $UseCache = true;
		private $ExtractClientArchives = false;
		private $ETags = [];
		private $Requests = [];
		private $URLsToFetch = [];

		private $Options = Array(
			CURLOPT_USERAGENT      => 'SteamDB',
			CURLOPT_ENCODING       => '',
			CURLOPT_HEADER         => 1,
			CURLOPT_AUTOREFERER    => 0,
			CURLOPT_RETURNTRANSFER => 1,
			CURLOPT_FOLLOWLOCATION => 0,
			CURLOPT_TIMEOUT        => 30,
			CURLOPT_CONNECTTIMEOUT => 10,
			CURLOPT_BINARYTRANSFER => 1,
			CURLOPT_SSL_VERIFYPEER => 0,
			CURLOPT_SSL_VERIFYHOST => 0,
		);

		public function __construct( $Option )
		{
			$this->AppStart = MicroTime( true );

			if( $Option === 'force' )
			{
				$this->UseCache = false;
			}

			$UrlsPath   = __DIR__ . '/urls.txt';
			$ApiKeyPath = __DIR__ . '/.support/apikey.txt';
			$ETagsPath  = __DIR__ . '/.support/etags.txt';

			if( !File_Exists( $ApiKeyPath ) )
			{
				$this->Log( '{lightred}Missing ' . $ApiKeyPath );

				Exit;
			}
			else if( !File_Exists( $UrlsPath ) )
			{
				$this->Log( '{lightred}Missing ' . $UrlsPath );

				Exit;
			}

			if( $this->UseCache && File_Exists( $ETagsPath ) )
			{
				$this->ETags = JSON_Decode( File_Get_Contents( $ETagsPath ), true );
			}

			$this->APIKey = Trim( File_Get_Contents( $ApiKeyPath ) );
			$this->CurrentTime = Time( );

			$this->URLsToFetch = $this->ParseUrls( file_get_contents( $UrlsPath ) );

			$Tries = 5;

			do
			{
				$URLs = $this->URLsToFetch;

				$this->Log( '{yellow}' . Count( $URLs ) . ' urls to be fetched...' );

				$this->URLsToFetch = Array( );

				$this->Fetch( $URLs, $Tries );
			}
			while( !Empty( $this->URLsToFetch ) && $Tries-- > 0 );

			File_Put_Contents( $ETagsPath, JSON_Encode( $this->ETags, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT ) );

			if( $this->ExtractClientArchives )
			{
				$this->Log( '{lightblue}Extracting client archives and doing voodoo magic' );

				// Let's break all kinds of things! :(
				System( 'bash ' . __DIR__ . '/extract_client.sh' );
			}

			$this->Log( '{lightblue}Done' );
		}

		private function GenerateURL( $URL )
		{
			return Str_Replace(
				Array( '__KEY__', '__TIME__' ),
				Array( 'key=' . $this->APIKey, '_=' . $this->CurrentTime ),
				$URL
			);
		}

		private function HandleResponse( $File, $Data )
		{
			if( $File === 'API/SupportedAPIList.json' )
			{
				$Data = JSON_Decode( $Data, true );

				if( !isset( $Data[ 'apilist' ][ 'interfaces' ] ) )
				{
					return false;
				}

				foreach( $Data[ 'apilist' ][ 'interfaces' ] as $Interface )
				{
					$File = __DIR__ . '/API/' . $Interface[ 'name' ] . '.json';

					$Interface = JSON_Encode( $Interface, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES ) . PHP_EOL;

					if( !File_Exists( $File ) || StrCmp( File_Get_Contents( $File ), $Interface ) !== 0 )
					{
						File_Put_Contents( $File, $Interface );
					}
				}

				return true;
			}
			// Get archives from beta manifest
			else if( $File === 'ClientManifest/steam_client_publicbeta_osx' || $File === 'ClientManifest/steam_cmd_publicbeta_osx' )
			{
				if( Preg_Match_All( '/"([a-z0-9_]+\.zip)\.([a-f0-9]{40})"/', $Data, $Test ) > 0 )
				{
					foreach( $Test[ 1 ] as $Index => $Archive )
					{
						$Hash = $Test[ 2 ][ $Index ];

						if( !isset( $this->ETags[ $Archive ] ) || $this->ETags[ $Archive ] !== $Hash )
						{
							$this->Log( 'Downloading {lightblue}' . $Archive . '{normal} - checksum: ' . $Hash );

							$this->ETags[ $Archive ] = $Hash;

							$this->URLsToFetch[ ] = Array(
								'URL'  => 'https://steamcdn-a.akamaihd.net/client/' . $Archive . '.' . $Hash,
								'File' => '.support/archives/' . $Archive
							);
						}
						else
						{
							$this->Log( 'Matched {lightblue}' . $Archive . '{normal}, but we already have it cached' );
						}
					}
				}
				else
				{
					$this->Log( '{yellow}Failed to find any archives' );
				}

				unset( $Test, $Archive, $Hash, $Index );
			}
			// Convert group members to JSON
			else if( $File === 'Random/ValveGroup.json' || $File === 'Random/SteamModerators.json' || $File === 'Random/SteamDevs.json' )
			{
				LibXML_Use_Internal_Errors( true );

				$Data = SimpleXML_Load_String( $Data );

				if( $Data === false || Empty( $Data->members->steamID64 ) )
				{
					return false;
				}

				$Data = Array_Values( (Array)$Data->members->steamID64 );

				Sort( $Data );

				$Data = JSON_Encode( $Data, JSON_PRETTY_PRINT );
			}
			// Prettify
			else if( $File === 'Random/Jobs.json' )
			{
				$Data = JSON_Decode( $Data, true );
				$Data = JSON_Encode( $Data, JSON_PRETTY_PRINT );
			}
			else if( $File === 'ClientManifest/steammobile_android.json' )
			{
				$Data = json_decode( $Data, true );

				$this->URLsToFetch[ ] =
				[
					'URL'  => $Data[ 'bundleUrl' ],
					'File' => 'Scripts/WebUI/steammobile_android.js',
				];

				$Data = json_encode( $Data, JSON_PRETTY_PRINT );
			}
			// Unzip it
			else if( SubStr( $File, -4 ) === '.zip' )
			{
				$File = __DIR__ . '/' . $File;

				File_Put_Contents( $File, $Data );

				$Archive = SubStr( StrrChr( $File, '/' ), 1 );

				if( SHA1_File( $File ) !== $this->ETags[ $Archive ] )
				{
					$this->Log( '{lightred}Checksum mismatch for ' . $Archive );

					return false;
				}

				$this->ExtractClientArchives = true;

				return true;
			}
			// Make sure we received everything
			else if( SubStr( $File, -5 ) === '.html' )
			{
				if( StrrPos( $Data, '</html>' ) === false )
				{
					return false;
				}

				$Data = preg_replace( '/[&\?]v=[a-zA-Z0-9\.\-\_]{3,}/', '?v=valveisgoodatcaching', $Data );

				if( $File === 'Random/About.html' )
				{
					$Data = preg_replace( '/<section>\s+<div class="steam_section">.+?<\/section>\r\n/s', '', $Data );
				}
				else if( $File === 'Random/People.html' )
				{
					libxml_use_internal_errors( true );

					$DOM = new DOMDocument;
					$DOM->loadHTML( '<?xml encoding="UTF-8">' . $Data );
					$XPath = new DOMXPath( $DOM );

					$PeopleDivs = $XPath->evaluate( '//div[@class="row person"]' );
					$AlreadySeen = [];
					$People = [];

					foreach( $PeopleDivs as $Person )
					{
						$Name = $XPath->evaluate( 'string(.//div[@class="name"])', $Person );

						if( isset( $AlreadySeen[ $Name ] ) )
						{
							continue;
						}

						$AlreadySeen[ $Name ] = true;

						$Bio = $XPath->evaluate( 'string(.//p[@class="bio"])', $Person );
						$LinkElements = $XPath->evaluate( './/a', $Person );
						$Links = [];

						foreach( $LinkElements as $Link )
						{
							$Links[] = $Link->getAttribute( 'href' );
						}

						$Person =
						[
							'name' => trim( $Name ),
							'bio' => trim( $Bio ),
						];

						if( !empty( $Links ) )
						{
							$Person[ 'links' ] = $Links;
						}

						$People[] = $Person;
					}

					array_multisort( array_column( $People, 'name' ), SORT_ASC, $People );

					if( !empty( $People ) )
					{
						file_put_contents( __DIR__ . '/Random/People.json', json_encode( $People, JSON_PRETTY_PRINT ) );
					}
				}
			}
			else if( SubStr( $File, -4 ) === '.css' ||  SubStr( $File, -3 ) === '.js' )
			{
				$Data = preg_replace( '/[&\?]v=[a-zA-Z0-9\.\-\_]{3,}/', '?v=valveisgoodatcaching', $Data );
			}

			$OriginalFile = $File;
			$File = __DIR__ . DIRECTORY_SEPARATOR . $File;

			$Folder = dirname( $File );

			if( !is_dir( $Folder ) )
			{
				$this->Log( '{lightblue}Creating ' . $Folder );

				mkdir( $Folder, 0755, true );
			}

			if( substr( $File, -3 ) === '.js' && ( stripos( $OriginalFile, '/webui/' ) !== false || strpos( $OriginalFile, '/applications/' ) !== false ) )
			{
				$HashPath = $OriginalFile . '.unmodified';
				$Hash = hash( 'sha256', $Data );

				if( ( $this->ETags[ $HashPath ] ?? '' ) === $Hash )
				{
					return false;
				}

				file_put_contents( $File, $Data );

				$this->ETags[ $HashPath ] = $Hash;

				$WebProtobufs =
				[
					'steamcommunity.com/public/javascript/webui/steammessages.js' => 'friends',
					'steamcommunity.com/public/javascript/applications/community/main.js' => 'community',
					'store.steampowered.com/public/javascript/applications/store/main.js' => 'store',
					'store.steampowered.com/public/javascript/applications/store/curator_admin.js' => 'curator_admin',
				];

				if( isset( $WebProtobufs[ $OriginalFile ] ) )
				{
					system( 'node protobufdumper.js ' . escapeshellarg( $OriginalFile ) . ' > ' . escapeshellarg( '../ValveProtobufs/webui/' . $WebProtobufs[ $OriginalFile ] . '.proto' ) . ' && ../ValveProtobufs/update.sh' );
				}
				else if( $OriginalFile === 'Scripts/WebUI/steammobile_android.js' )
				{
					system(
						'node friendsuiprotodumper.js ' . escapeshellarg( $OriginalFile ) .
						' --Oenum=Structs/enums.steamd --Oproto=../ValveProtobufs/webui/friends_mobile.proto' .
						' --filter-known-protos && ../ValveProtobufs/update.sh'
					);
				}

				system( 'prettier --write ' . escapeshellarg( $File ) );

				return true;
			}

			if( File_Exists( $File ) && StrCmp( File_Get_Contents( $File ), $Data ) === 0 )
			{
				return false;
			}

			File_Put_Contents( $File, $Data );

			return true;
		}

		private function Fetch( $URLs, $Tries )
		{
			$this->Requests = Array( );

			$Master = cURL_Multi_Init( );

			$WindowSize = 10;

			if( $WindowSize > Count( $URLs ) )
			{
				$WindowSize = Count( $URLs );
			}

			for( $i = 0; $i < $WindowSize; $i++ )
			{
				$URL = Array_Shift( $URLs );

				$this->CreateHandle( $Master, $URL );
			}

			unset( $URL, $WindowSize, $i );

			do
			{
				while( ( $Exec = cURL_Multi_Exec( $Master, $Running ) ) === CURLM_CALL_MULTI_PERFORM );

				if( $Exec !== CURLM_OK )
				{
					break;
				}

				while( $Done = cURL_Multi_Info_Read( $Master ) )
				{
					$Slave = $Done[ 'handle' ];
					$URL   = cURL_GetInfo( $Slave, CURLINFO_EFFECTIVE_URL );
					$Code  = cURL_GetInfo( $Slave, CURLINFO_HTTP_CODE );
					$Data  = cURL_Multi_GetContent( $Slave );

					$Request = $this->Requests[ (int)$Slave ];

					$HeaderSize = cURL_GetInfo( $Slave, CURLINFO_HEADER_SIZE );

					$Header = SubStr( $Data, 0, $HeaderSize );
					$Data   = SubStr( $Data, $HeaderSize );

					if( isset( $Done[ 'error' ] ) )
					{
						$this->Log( '{yellow}cURL Error: {yellow}' . $Done[ 'error' ] . '{normal} - ' . $URL );

						$this->URLsToFetch[ ] = Array(
							'URL'  => $URL,
							'File' => $Request
						);
					}
					else if( $Code === 304 )
					{
						$this->Log( '{green}HTTP Cache  {normal} - ' . $URL );
					}
					else if( $Code !== 200 )
					{
						$this->Log( '{yellow}HTTP Error ' . $Code . '{normal} - ' . $URL );

						if( $Code !== 404 )
						{
							$this->URLsToFetch[ ] = Array(
								'URL'  => $URL,
								'File' => $Request
							);
						}
					}
					else
					{
						$LengthExpected = cURL_GetInfo( $Slave, CURLINFO_CONTENT_LENGTH_DOWNLOAD );
						$LengthDownload = cURL_GetInfo( $Slave, CURLINFO_SIZE_DOWNLOAD );

						if( $LengthExpected !== $LengthDownload && $Request !== 'Scripts/WebUI/steammobile_android.js' )
						{
							$this->Log( '{lightred}Wrong Length {normal}(' . $LengthDownload . ' != ' . $LengthExpected . '){normal} - ' . $URL );

							$this->URLsToFetch[ ] = Array(
								'URL'  => $URL,
								'File' => $Request
							);
						}
						else
						{
							if( Preg_Match( '/^ETag: (.+)$/m', $Header, $Test ) === 1 )
							{
								$this->ETags[ $Request ] = Trim( $Test[ 1 ] );
							}

							if( $this->HandleResponse( $Request, $Data ) === true )
							{
								$this->Log( '{lightblue}Fetched     {normal} - ' . $URL );
							}
							else
							{
								$this->Log( '{green}Not Modified{normal} - ' . $URL );
							}
						}
					}

					if( Count( $URLs ) )
					{
						$URL = Array_Shift( $URLs );

						$this->CreateHandle( $Master, $URL );
					}

					cURL_Multi_Remove_Handle( $Master, $Slave );
					cURL_Close( $Slave );

					unset( $Request, $Slave );
				}

				if( $Running )
				{
					cURL_Multi_Select( $Master, 5 );
				}
			}
			while( $Running );

			cURL_Multi_Close( $Master );
		}

		private function CreateHandle( $Master, $URL )
		{
			$Slave = cURL_Init( );
			$File  = $URL[ 'File' ];

			$Options = $this->Options;

			$Options[ CURLOPT_URL ] = $this->GenerateURL( $URL[ 'URL' ] );

			$this->Requests[ (int)$Slave ] = $File;

			if( $this->UseCache )
			{
				// If we have an ETag saved, add If-None-Match header
				if( Array_Key_Exists( $File, $this->ETags ) )
				{
					$Options[ CURLOPT_HTTPHEADER ] = Array( 'If-None-Match: ' . $this->ETags[ $File ] );
				}

				// Valve appears to have broken ETags, so always supply the timestamp
				if( File_Exists( $File ) )
				{
					$Options[ CURLOPT_HTTPHEADER ] = Array( 'If-Modified-Since: ' . GMDate( 'D, d M Y H:i:s \G\M\T', FileMTime( $File ) ) );
				}
			}

			cURL_SetOpt_Array( $Slave, $Options );

			cURL_Multi_Add_Handle( $Master, $Slave );

			return $Slave;
		}

		private function ParseUrls( string $Data ) : array
		{
			$Data = explode( "\n", $Data );
			$Urls = [];

			foreach( $Data as $Line )
			{
				$Line = trim( $Line );

				if( empty( $Line ) || $Line[ 0 ] === '/' )
				{
					continue;
				}

				if( strpos( $Line, '@' ) !== false )
				{
					$Line = explode( '@', $Line );
					$File = trim( $Line[ 0 ] );
					$Url = trim( $Line[ 1 ] );
				}
				else
				{
					$Url = $Line;
					$ParsedUrl = parse_url( $Url );

					if( $ParsedUrl === false )
					{
						$this->Log( $Line . ' is malformed' );
						continue;
					}

					$File = $ParsedUrl[ 'host' ] . $ParsedUrl[ 'path' ];
				}

				$Urls[] =
				[
					'URL' => $Url,
					'File' => $File,
				];
			}

			return $Urls;
		}

		private function Log( $String )
		{
			$Log  = '[';
			$Log .= Number_Format( MicroTime( true ) - $this->AppStart, 2 );
			$Log .= 's] ';
			$Log .= $String;
			$Log .= '{normal}';
			$Log .= PHP_EOL;

			$Log = Str_Replace( $this->APIKey, '{lightred}*APIKEY*{normal}', $Log );

			$Log = Str_Replace(
				Array(
					'{normal}',
					'{green}',
					'{yellow}',
					'{lightred}',
					'{lightblue}'
				),
				Array(
					"\033[0m",
					"\033[0;32m",
					"\033[1;33m",
					"\033[1;31m",
					"\033[1;34m"
				),
			$Log );

			echo $Log;
		}
	}

