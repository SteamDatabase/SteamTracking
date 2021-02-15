<?php
	new SteamTracker( count( $argv ) === 2 ? $argv[ 1 ] : '' );

	class SteamTracker
	{
		private string $APIKey = '';
		private float $AppStart;
		private int $CurrentTime;
		private bool $UseCache = true;
		private bool $ExtractClientArchives = false;
		private bool $SyncProtobufs = false;
		private bool $DumpWebProtobufs = false;

		/** @var array<string, string> */
		private array $ETags = [];

		/** @var array<int, string> */
		private array $Requests = [];

		/** @var array<int, array{URL: string, File: string}> */
		private array $URLsToFetch = [];

		/** @var array<string, bool> */
		private array $URLsToProtoDump = [];

		/** @var array<int, mixed> */
		private array $Options =
		[
			CURLOPT_USERAGENT      => 'SteamDB',
			CURLOPT_ENCODING       => '',
			CURLOPT_HEADER         => 1,
			CURLOPT_AUTOREFERER    => 0,
			CURLOPT_RETURNTRANSFER => 1,
			CURLOPT_FOLLOWLOCATION => 0,
			CURLOPT_TIMEOUT        => 30,
			CURLOPT_CONNECTTIMEOUT => 10,
			CURLOPT_SSL_VERIFYPEER => 0,
			CURLOPT_SSL_VERIFYHOST => 0,
		];

		public function __construct( string $Option )
		{
			$this->AppStart = microtime( true );

			if( $Option === 'force' )
			{
				$this->UseCache = false;
			}

			$ApiKeyPath = __DIR__ . '/.support/apikey.txt';
			$ETagsPath  = __DIR__ . '/.support/etags.txt';

			if( !file_exists( $ApiKeyPath ) )
			{
				$this->Log( '{lightred}Missing ' . $ApiKeyPath );

				Exit;
			}

			if( $this->UseCache && file_exists( $ETagsPath ) )
			{
				$this->ETags = json_decode( file_get_contents( $ETagsPath ), true );
			}

			$this->APIKey = trim( file_get_contents( $ApiKeyPath ) );
			$this->CurrentTime = time( );

			$this->URLsToFetch = $this->ParseUrls( );
			$this->URLsToProtoDump = $this->GetUrlsToProtoDump( );

			$Tries = 5;

			do
			{
				$URLs = $this->URLsToFetch;

				$this->Log( '{yellow}' . count( $URLs ) . ' urls to be fetched...' );

				$this->URLsToFetch = [];

				$this->Fetch( $URLs );
			}
			while( !empty( $this->URLsToFetch ) && $Tries-- > 0 );

			file_put_contents( $ETagsPath, json_encode( $this->ETags, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT ) );

			if( $this->ExtractClientArchives )
			{
				$this->Log( '{lightblue}Extracting client archives and doing voodoo magic' );
				$this->DumpWebProtobufs = true;
				$this->SyncProtobufs = true;

				system( 'bash extract_client.sh' );
			}

			if( $this->DumpWebProtobufs )
			{
				$this->SyncProtobufs = true;

				$this->Log( '{lightblue}Dumping web protobufs' );

				system( 'node protobufdumper.js' );
			}

			if( $this->SyncProtobufs )
			{
				$this->Log( '{lightblue}Syncing protobufs' );

				system( '../ValveProtobufs/update.sh' );
			}

			$this->Log( '{lightblue}Done' );
		}

		private function GenerateURL( string $URL ) : string
		{
			return str_replace(
				[ '__KEY__', '__TIME__' ],
				[ 'key=' . $this->APIKey, '_=' . $this->CurrentTime ],
				$URL
			);
		}

		private function HandleResponse( string $File, string $Data ) : bool
		{
			if( $File === 'API/SupportedAPIList.json' )
			{
				$Data = json_decode( $Data, true );

				if( !isset( $Data[ 'apilist' ][ 'interfaces' ] ) )
				{
					return false;
				}

				foreach( $Data[ 'apilist' ][ 'interfaces' ] as $Interface )
				{
					$File = __DIR__ . '/API/' . $Interface[ 'name' ] . '.json';

					$Interface = json_encode( $Interface, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES ) . PHP_EOL;

					if( !file_exists( $File ) || $Interface !== file_get_contents( $File ) )
					{
						file_put_contents( $File, $Interface );
					}
				}

				return true;
			}
			// Get archives from beta manifest
			else if( $File === 'ClientManifest/steam_client_publicbeta_osx' || $File === 'ClientManifest/steam_cmd_publicbeta_osx' )
			{
				if( preg_match_all( '/"([a-z0-9_]+\.zip)\.([a-f0-9]{40})"/', $Data, $Test ) > 0 )
				{
					foreach( $Test[ 1 ] as $Index => $Archive )
					{
						$Hash = $Test[ 2 ][ $Index ];

						if( !isset( $this->ETags[ $Archive ] ) || $this->ETags[ $Archive ] !== $Hash )
						{
							$this->Log( 'Downloading {lightblue}' . $Archive . '{normal} - checksum: ' . $Hash );

							$this->ETags[ $Archive ] = $Hash;

							$this->URLsToFetch[ ] =
							[
								'URL'  => 'https://steamcdn-a.akamaihd.net/client/' . $Archive . '.' . $Hash,
								'File' => '.support/archives/' . $Archive
							];
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
				libxml_use_internal_errors( true );

				$Data = simplexml_load_string( $Data );

				if( $Data === false || empty( $Data->members->steamID64 ) )
				{
					return false;
				}

				$Data = array_values( (array)$Data->members->steamID64 );

				sort( $Data );

				$Data = json_encode( $Data, JSON_PRETTY_PRINT );
			}
			// Prettify
			else if( $File === 'Random/Jobs.json' )
			{
				$Data = json_decode( $Data, true );
				$Data = json_encode( $Data, JSON_PRETTY_PRINT );
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
			else if( str_ends_with( $File, '.zip' ) )
			{
				$File = __DIR__ . '/' . $File;

				file_put_contents( $File, $Data );

				$Archive = substr( strrchr( $File, '/' ), 1 );

				if( sha1_file( $File ) !== $this->ETags[ $Archive ] )
				{
					$this->Log( '{lightred}Checksum mismatch for ' . $Archive );

					return false;
				}

				$this->ExtractClientArchives = true;

				return true;
			}
			// Make sure we received everything
			else if( str_ends_with( $File, '.html' ) )
			{
				if( strrpos( $Data, '</html>' ) === false )
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

					$People = array_column( $People, 'name' );
					array_multisort( $People, SORT_ASC, $People );

					if( !empty( $People ) )
					{
						file_put_contents( __DIR__ . '/Random/People.json', json_encode( $People, JSON_PRETTY_PRINT ) );
					}
				}
			}
			else if( str_ends_with( $File, '.css' ) || str_ends_with( $File, '.js' ) )
			{
				$Data = preg_replace( '/[&\?]v=[a-zA-Z0-9\.\-\_]{3,}/', '?v=valveisgoodatcaching', $Data );
			}

			if( $File === 'store.steampowered.com/public/javascript/applications/store/78.js' ) // Valve???????
			{
				$File = 'store.steampowered.com/public/javascript/applications/store/pointsshop_english-json.js';
			}

			$OriginalFile = $File;
			$File = __DIR__ . DIRECTORY_SEPARATOR . $File;

			$Folder = dirname( $File );

			if( !is_dir( $Folder ) )
			{
				$this->Log( '{lightblue}Creating ' . $Folder );

				mkdir( $Folder, 0755, true );
			}

			if( str_ends_with( $File, '.js' ) && (
				$OriginalFile === 'Scripts/WebUI/steammobile_android.js' ||
				str_contains( $OriginalFile, '/webui/' ) ||
				str_contains( $OriginalFile, '/applications/' )
			) )
			{
				$HashPath = $OriginalFile . '.unmodified';
				$Hash = hash( 'sha256', $Data );

				if( ( $this->ETags[ $HashPath ] ?? '' ) === $Hash )
				{
					return false;
				}

				$this->ETags[ $HashPath ] = $Hash;

				// Extract json so it gets pretty printed from the json.parse
				if( str_ends_with( $File, 'english-json.js' ) && preg_match( "/exports=JSON\.parse\('(.+)'\)}}]\);$/", $Data, $Matches ) )
				{
					$Data = stripcslashes( $Matches[ 1 ] );
					$Data = json_decode( $Data, true );
					$Data = json_encode( $Data, JSON_PRETTY_PRINT );

					file_put_contents( str_replace( '-json.js', '.json', $File ), $Data );

					return true;
				}

				file_put_contents( $File, $Data );

				if( isset( $this->URLsToProtoDump[ $OriginalFile ] ) )
				{
					file_put_contents( __DIR__ . '/.support/original_js/' . md5( $OriginalFile ) . '.js', $Data );
					$this->DumpWebProtobufs = true;
				}

				if( $OriginalFile === 'Scripts/WebUI/steammobile_android.js' )
				{
					$this->SyncProtobufs = true;

					system(
						'node friendsuiprotodumper.js ' . escapeshellarg( $OriginalFile ) .
						' --Oenum=Structs/enums.steamd --Oproto=../ValveProtobufs/webui/friends_mobile.proto' .
						' --filter-known-protos'
					);
				}

				system( 'npm run prettier ' . escapeshellarg( $File ) );

				return true;
			}

			if( file_exists( $File ) && $Data === file_get_contents( $File ) )
			{
				return false;
			}

			file_put_contents( $File, $Data );

			return true;
		}

		/** @param array<int, array{URL: string, File: string}> $URLs */
		private function Fetch( array $URLs ) : void
		{
			$this->Requests = [];

			$Master = curl_multi_init( );

			$WindowSize = 10;

			if( $WindowSize > count( $URLs ) )
			{
				$WindowSize = count( $URLs );
			}

			for( $i = 0; $i < $WindowSize; $i++ )
			{
				$URL = array_shift( $URLs );

				$this->CreateHandle( $Master, $URL );
			}

			unset( $URL, $WindowSize, $i );

			do
			{
				while( ( $Exec = curl_multi_exec( $Master, $Running ) ) === CURLM_CALL_MULTI_PERFORM );

				if( $Exec !== CURLM_OK )
				{
					break;
				}

				while( $Done = curl_multi_info_read( $Master ) )
				{
					$Handle = $Done[ 'handle' ];
					$URL   = curl_getinfo( $Handle, CURLINFO_EFFECTIVE_URL );
					$Code  = curl_getinfo( $Handle, CURLINFO_HTTP_CODE );
					$Data  = curl_multi_getcontent( $Handle );

					$Request = $this->Requests[ (int)$Handle ];

					$HeaderSize = curl_getinfo( $Handle, CURLINFO_HEADER_SIZE );

					$Header = substr( $Data, 0, $HeaderSize );
					$Data   = substr( $Data, $HeaderSize );

					if( isset( $Done[ 'error' ] ) )
					{
						$this->Log( '{yellow}cURL Error: {yellow}' . $Done[ 'error' ] . '{normal} - ' . $URL );

						$this->URLsToFetch[ ] =
						[
							'URL'  => $URL,
							'File' => $Request
						];
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
							$this->URLsToFetch[ ] =
							[
								'URL'  => $URL,
								'File' => $Request
							];
						}
					}
					else
					{
						$LengthExpected = curl_getinfo( $Handle, CURLINFO_CONTENT_LENGTH_DOWNLOAD );
						$LengthDownload = curl_getinfo( $Handle, CURLINFO_SIZE_DOWNLOAD );

						if( $LengthExpected !== $LengthDownload && $Request !== 'Scripts/WebUI/steammobile_android.js' )
						{
							$this->Log( '{lightred}Wrong Length {normal}(' . $LengthDownload . ' != ' . $LengthExpected . '){normal} - ' . $URL );

							$this->URLsToFetch[ ] =
							[
								'URL'  => $URL,
								'File' => $Request
							];
						}
						else
						{
							if( preg_match( '/^ETag: (.+)$/m', $Header, $Test ) === 1 )
							{
								$this->ETags[ $Request ] = trim( $Test[ 1 ] );
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

					if( !empty( $URLs ) )
					{
						$URL = array_shift( $URLs );

						$this->CreateHandle( $Master, $URL );
					}

					curl_multi_remove_handle( $Master, $Handle );
					curl_close( $Handle );

					unset( $Request, $Handle );
				}

				if( $Running )
				{
					curl_multi_select( $Master, 5 );
				}
			}
			while( $Running );

			curl_multi_close( $Master );
		}

		/** @param array{URL: string, File: string} $URL */
		private function CreateHandle( CurlMultiHandle $Master, array $URL ) : CurlHandle
		{
			$Handle = curl_init( );
			$File  = $URL[ 'File' ];

			$Options = $this->Options;

			$Options[ CURLOPT_URL ] = $this->GenerateURL( $URL[ 'URL' ] );

			$this->Requests[ (int)$Handle ] = $File;

			if( $this->UseCache )
			{
				// If we have an ETag saved, add If-None-Match header
				if( array_key_exists( $File, $this->ETags ) )
				{
					$Options[ CURLOPT_HTTPHEADER ] =
					[
						'If-None-Match: ' . $this->ETags[ $File ],
					];
				}

				// Valve appears to have broken ETags, so always supply the timestamp
				if( file_exists( $File ) )
				{
					$Options[ CURLOPT_HTTPHEADER ] =
					[
						'If-Modified-Since: ' . gmdate( 'D, d M Y H:i:s \G\M\T', filemtime( $File ) ),
					];
				}
			}

			curl_setopt_array( $Handle, $Options );

			curl_multi_add_handle( $Master, $Handle );

			return $Handle;
		}

		/** @return array<int, array{URL: string, File: string}> */
		private function ParseUrls() : array
		{
			$UrlsPath = __DIR__ . '/urls.txt';

			if( !file_exists( $UrlsPath ) )
			{
				$this->Log( '{lightred}Missing ' . $UrlsPath );

				Exit;
			}

			$Data = file_get_contents( $UrlsPath );
			$Data = explode( "\n", $Data );
			$Urls = [];

			foreach( $Data as $Line )
			{
				$Line = trim( $Line );

				if( empty( $Line ) || $Line[ 0 ] === '/' )
				{
					continue;
				}

				if( str_contains( $Line, '@' ) )
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

		/** @return array<string, bool> */
		private function GetUrlsToProtoDump() : array
		{
			$UrlsPath = __DIR__ . '/urls_protobufdumper.txt';

			if( !file_exists( $UrlsPath ) )
			{
				$this->Log( '{lightred}Missing ' . $UrlsPath );

				Exit;
			}

			$Folder = __DIR__ . '/.support/original_js/';

			if( !is_dir( $Folder ) )
			{
				$this->Log( '{lightblue}Creating ' . $Folder );

				mkdir( $Folder, 0755, true );
			}

			$Data = file_get_contents( $UrlsPath );
			$Data = explode( "\n", $Data );
			$Urls = [];

			foreach( $Data as $Line )
			{
				$Line = trim( $Line );

				if( empty( $Line ) || $Line[ 0 ] === '/' )
				{
					continue;
				}

				$Urls[ trim( $Line ) ] = true;
			}

			return $Urls;
		}

		private function Log( string $String ) : void
		{
			$Log  = '[';
			$Log .= number_format( microtime( true ) - $this->AppStart, 2 );
			$Log .= 's] ';
			$Log .= $String;
			$Log .= '{normal}';
			$Log .= PHP_EOL;

			$Log = str_replace( $this->APIKey, '{lightred}*APIKEY*{normal}', $Log );

			$Log = str_replace(
				[
					'{normal}',
					'{green}',
					'{yellow}',
					'{lightred}',
					'{lightblue}'
				],
				[
					"\033[0m",
					"\033[0;32m",
					"\033[1;33m",
					"\033[1;31m",
					"\033[1;34m"
				],
			$Log );

			echo $Log;
		}
	}
