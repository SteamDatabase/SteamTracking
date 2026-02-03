<?php
declare(strict_types=1);

ini_set( 'memory_limit', '1G' ); // Some files may be big

if( \function_exists( 'sys_getloadavg' ) )
{
	if( ( \sys_getloadavg()[ 1 ] ?? 0.0 ) > 5.0 )
	{
		echo 'Not running due to high cpu load';
		exit;
	}
}

// Enable error tracking
if( file_exists( '/var/www/steamdb.info/Library/Bugsnag/Autoload.php' ) )
{
	require '/var/www/steamdb.info/Library/MagicLoad.php';
	require '/var/www/steamdb.info/Library/Bugsnag/Autoload.php';
}

	new SteamTracker( isset( $argv ) && count( $argv ) === 2 ? $argv[ 1 ] : '' );

	class SteamTracker
	{
		private string $APIKey = '';
		private int $AppStart;
		private int $CurrentTime;
		private bool $UseCache = true;
		private bool $ExtractClientArchives = false;
		private bool $SyncProtobufs = false;
		private bool $DumpJavascriptFiles = false;
		private bool $UpdateManifestUrls = false;
		private bool $UpdateSSRUrls = false;

		/** @var array<string, string> */
		private array $ClientArchiveFolder =
		[
			'ClientManifest/steam_client_publicbeta_ubuntu12' => 'linux_archives',
			'ClientManifest/steam_cmd_publicbeta_linux'       => 'linux_archives',
		];

		/** @var array<string, string> */
		private array $ClientArchiveHashes = [];

		/** @var array<string, string|array<int, string>> */
		private array $ETags = [];

		/** @var array<int, string> */
		private array $Requests = [];

		/** @var array<int, array{URL: string, File: string}> */
		private array $URLsToFetch = [];

		/** @var array<string, true> */
		private array $CurrentSSRFiles = [];

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

		private CurlShareHandle $CurlShareHandle;

		public function __construct( string $Option )
		{
			$this->AppStart = hrtime( true );

			if( $Option === 'force' )
			{
				$this->UseCache = false;
			}

			$ApiKeyPath = __DIR__ . '/.support/apikey.txt';
			$ETagsPath  = __DIR__ . '/.support/etags.json';

			if( !file_exists( $ApiKeyPath ) )
			{
				$this->Log( '{lightred}Missing ' . $ApiKeyPath );

				exit( 1 );
			}

			if( $this->UseCache && file_exists( $ETagsPath ) )
			{
				$this->ETags = json_decode( file_get_contents( $ETagsPath ), true );
			}

			$this->APIKey = trim( file_get_contents( $ApiKeyPath ) );
			$this->CurrentTime = time( );

			$this->URLsToFetch = $this->ParseUrls( );
			$KnownUrls = [];

			foreach( $this->URLsToFetch as $Url )
			{
				$KnownUrls[ $Url[ 'URL' ] ] = true;
			}

			$this->CurlShareHandle = curl_share_init();
			curl_share_setopt( $this->CurlShareHandle, CURLSHOPT_SHARE, CURL_LOCK_DATA_PSL );
			curl_share_setopt( $this->CurlShareHandle, CURLSHOPT_SHARE, CURL_LOCK_DATA_DNS );

			$Tries = 5;
			$WindowSize = 10;

			do
			{
				$URLs = $this->URLsToFetch;
				$this->URLsToFetch = [];

				$this->Log( '{yellow}' . count( $URLs ) . ' urls to be fetched...' );
				$this->Fetch( $URLs, $WindowSize );
				$WindowSize = 1;
			}
			while( !empty( $this->URLsToFetch ) && $Tries-- > 0 );

			if( $this->UpdateManifestUrls )
			{
				$Tries = 5;
				$this->URLsToFetch = $this->ProcessManifests( $KnownUrls );

				do
				{
					$URLs = $this->URLsToFetch;
					$this->URLsToFetch = [];

					$this->Log( '{yellow}' . count( $URLs ) . ' urls to be fetched...' );
					$this->Fetch( $URLs, 5 );
				}
				while( !empty( $this->URLsToFetch ) && $Tries-- > 0 );
			}

			if( $this->UpdateSSRUrls && !empty( $this->CurrentSSRFiles ) )
			{
				$Tries = 5;

				do
				{
					$this->DeleteOldSSRFiles();

					$this->URLsToFetch = $this->ProcessSSRFiles();

					if( empty( $this->URLsToFetch ) )
					{
						break;
					}

					do
					{
						$URLs = $this->URLsToFetch;
						$this->URLsToFetch = [];

						$this->Log( '{yellow}' . count( $URLs ) . ' urls to be fetched...' );
						$this->Fetch( $URLs, 5 );
					}
					while( !empty( $this->URLsToFetch ) && $Tries-- > 0 );
				}
				while( $Tries >= 0 );

				$this->DeleteOldSSRFiles();
			}

			foreach( $this->ETags as &$ETags )
			{
				if( is_array( $ETags ) )
				{
					while( count( $ETags ) > 3 )
					{
						array_shift( $ETags );
					}
				}
			}

			unset( $ETags );

			file_put_contents( $ETagsPath, json_encode( $this->ETags, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT ) );

			if( $this->ExtractClientArchives )
			{
				$this->Log( '{lightblue}Extracting client archives' );
				$this->DumpJavascriptFiles = true;
				$this->SyncProtobufs = true;

				system( escapeshellarg( PHP_BINARY ) . ' tools/extract_client.php' );
			}

			if( $this->DumpJavascriptFiles )
			{
				$this->SyncProtobufs = true;

				$this->Log( '{lightblue}Dumping web protobufs' );

				system( 'node dump_javascript_protobufs.mjs' );
				system( 'node dump_javascript_urls.mjs' );
				system( 'node tools/dump_javascript_svg.mjs' );
			}

			if( $this->SyncProtobufs && DIRECTORY_SEPARATOR === '/' )
			{
				$this->Log( '{lightblue}Syncing protobufs' );

				system( 'bash ../ValveProtobufs/update.sh' );
			}

			$this->Log( '{lightblue}Done' );
		}

		private function GenerateURL( string $URL ) : string
		{
			return str_replace(
				[
					'__KEY__',
					'__TIME__',
					'__CDN__',
					'https://steamcommunity.com/',
					'https://store.steampowered.com/',
				],
				[
					'key=' . $this->APIKey,
					'_=' . $this->CurrentTime,
					'_cdn=fastly',
					'https://community.fastly.steamstatic.com/',
					'https://store.fastly.steamstatic.com/',
				],
				$URL
			);
		}

		private function HandleResponse( string $File, string $Data, string $URL ) : bool
		{
			$IsSSR = str_starts_with( $File, 'store.steampowered.com/ssr/' );

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

					$Interface = json_encode( $Interface, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT ) . PHP_EOL;

					if( !file_exists( $File ) || $Interface !== file_get_contents( $File ) )
					{
						file_put_contents( $File, $Interface );
					}
				}

				return true;
			}
			// Get archives from client manifest
			else if( isset( $this->ClientArchiveFolder[ $File ] ) )
			{
				if( preg_match_all( '/"([a-z0-9_]+\.zip)\.([a-f0-9]{40})"/', $Data, $Test ) > 0 )
				{
					foreach( $Test[ 1 ] as $Index => $Archive )
					{
						$Hash = $Test[ 2 ][ $Index ];
						$Path = '.support/' . $this->ClientArchiveFolder[ $File ] . '/' . $Archive;

						if( isset( $this->ClientArchiveHashes[ $Path ] ) )
						{
							$this->Log( 'Matched {lightblue}' . $Path . '{normal}, but it is already queued' );
							continue;
						}

						if( !file_exists( $Path ) || hash_file( 'sha1', $Path ) !== $Hash )
						{
							$this->Log( 'Downloading {lightblue}' . $Path . '{normal} - checksum: ' . $Hash );

							$this->ClientArchiveHashes[ $Path ] = $Hash;

							$this->URLsToFetch[ ] =
							[
								'URL'  => 'https://client-update.fastly.steamstatic.com/' . $Archive . '.' . $Hash,
								'File' => $Path,
							];
						}
						else
						{
							$this->Log( 'Matched {lightblue}' . $Path . '{normal}, but we already have it cached' );
						}
					}
				}
				else
				{
					$this->Log( '{yellow}Failed to find any archives' );
				}

				unset( $Test, $Archive, $Hash, $Index );
			}
			// Prettify
			else if( $File === 'Random/Jobs.json' )
			{
				$Data = json_decode( $Data, true );
				$Data = json_encode( $Data, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT );
			}
			else if( $File === 'Random/SteamMobileApks.txt' )
			{
				$ApkLinks = [];

				if( preg_match_all( '/(https:\/\/[\w.\/-]+\.apk)/', $Data, $Test ) > 0 )
				{
					$ApkLinks = $Test[ 0 ];
				}

				if( empty( $ApkLinks ) )
				{
					$this->Log( '{lightred}Failed to find apk links' );

					return false;
				}

				foreach( $ApkLinks as &$ApkLink )
				{
					$ApkLink = preg_replace( '/^https:\/\/[^\/]+\//', 'https://media.steampowered.com/', $ApkLink );

					if( preg_match( '/\/apps\/([\w-]+)\//', $ApkLink, $AppName ) === 1 )
					{
						$this->URLsToFetch[ ] =
						[
							'URL'  => $ApkLink,
							'File' => '.support/archives/' . $AppName[ 1 ] . '.apk',
						];
					}
					else if( str_contains( $ApkLink, '/steamlink/android/' ) )
					{
						$this->URLsToFetch[ ] =
						[
							'URL'  => $ApkLink,
							'File' => '.support/archives/steamlink.apk',
						];
					}
				}

				unset( $ApkLink );

				$Data = implode( "\n", $ApkLinks ) . "\n";
			}
			else if( $File === 'SSR' )
			{
				if( preg_match( "/window.SSR.clientAssets=(\{.+?\});/", $Data, $Matches ) !== 1 )
				{
					$this->Log( '{lightred}Failed to find SSR on ' . $URL );

					return false;
				}

				$SSR = json_decode( $Matches[ 1 ], true );

				if( !isset( $SSR[ 'js' ] ) )
				{
					$this->Log( '{lightred}Failed to find any SSR JS on ' . $URL );

					return false;
				}

				$AssetTypes =
				[
					'js',
					'css',
					'preload',
				];

				foreach( $AssetTypes as $AssetType )
				{
					foreach( ( $SSR[ $AssetType ] ?? [] ) as $Asset )
					{
						$File = $this->GetSSRFilepath( $Asset[ 'href' ] );

						if( $File === null )
						{
							continue;
						}

						if( isset( $this->CurrentSSRFiles[ $File ] ) )
						{
							continue;
						}

						if( str_ends_with( $File, '.css' ) )
						{
							continue; // TODO: Ignore css for now because biome doesn't format it
						}

						$this->CurrentSSRFiles[ $File ] = true;

						$this->URLsToFetch[ ] =
						[
							'URL'  => $Asset[ 'href' ],
							'File' => $File,
						];
					}
				}

				return true;
			}
			else if( $IsSSR )
			{
				$Data = preg_replace( '/^\s*const CLSTAMP = [0-9]+;\s*/', '', $Data );
			}
			else if( $File === '.support/archives/steam-android.apk' )
			{
				$this->Log( 'Dumping mobile app' );

				file_put_contents( $File, $Data );

				$Zip = new ZipArchive();
				if( $Zip->open( '.support/archives/steam-android.apk' ) === true )
				{
					$ExtractedFile = $Zip->getFromName( 'assets/index.android.bundle' );

					if( $ExtractedFile !== false )
					{
						file_put_contents( '.support/archives/index.android.bundle', $ExtractedFile );
					}

					$Zip->close();
				}

				if( file_exists( '.support/archives/index.android.bundle' ) )
				{
					system( './tools/hermes.py .support/archives/index.android.bundle Random/SteamApkStrings.txt' );
					unlink( '.support/archives/index.android.bundle' );
				}

				return true;
			}
			// Unzip it
			else if( str_ends_with( $File, '.zip' ) )
			{
				if( hash( 'sha1', $Data ) !== $this->ClientArchiveHashes[ $File ] )
				{
					$this->Log( '{lightred}Checksum mismatch for ' . $File );

					return false;
				}

				$File = __DIR__ . '/' . $File;

				file_put_contents( $File, $Data );

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
						file_put_contents( __DIR__ . '/Random/People.json', json_encode( $People, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT ) );
					}
				}
			}
			else if( str_ends_with( $File, '.css' ) || str_ends_with( $File, '.js' ) )
			{
				$Data = preg_replace( '/(\.(?:js|png|jpg|svg|css)[&\?]v=)[a-zA-Z0-9\.\-\_]{3,}/i', '$1valveisgoodatcaching', $Data );
			}

			$OriginalFile = $File;
			$File = __DIR__ . DIRECTORY_SEPARATOR . $File;

			$Folder = dirname( $File );

			if( !is_dir( $Folder ) )
			{
				$this->Log( '{lightblue}Creating ' . $Folder );

				mkdir( $Folder, 0755, true );
			}

			if(
				$IsSSR ||
				str_ends_with( $File, 'english-json.js' ) ||
				str_starts_with( $OriginalFile, 'www.dota2.com/' ) ||
				str_starts_with( $OriginalFile, 'www.counter-strike.net/' ) ||
				str_starts_with( $OriginalFile, 'www.playdeadlock.com/' ) ||
				str_contains( $OriginalFile, '/webui/' ) ||
				str_contains( $OriginalFile, '/legacy_web/' ) ||
				str_contains( $OriginalFile, '/partnermenu/' ) ||
				str_contains( $OriginalFile, '/applications/' )
			)
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
					$Data = json_encode( $Data, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT ) . PHP_EOL;

					file_put_contents( str_replace( '-json.js', '.json', $File ), $Data );

					return true;
				}

				file_put_contents( $File, $Data );

				if( $IsSSR )
				{
					$this->UpdateSSRUrls = true;
				}

				if( str_ends_with( $File, '.js' ) )
				{
					if( str_ends_with( $File, '/manifest.js' ) )
					{
						$this->UpdateManifestUrls = true;
					}
					else if( !str_contains( $OriginalFile, '/localization/' ) )
					{
						$CleanFile = __DIR__ . '/c/' . $OriginalFile;
						$CleanFolder = dirname( $CleanFile );

						if( !is_dir( $CleanFolder ) )
						{
							$this->Log( '{lightblue}Creating ' . $CleanFolder );

							mkdir( $CleanFolder, 0755, true );
						}

						system(
							'node generate_clean_js.mjs ' . escapeshellarg( $File ) . ' ' . escapeshellarg( $CleanFile ) .
							' && npm run prettier ' . escapeshellarg( $CleanFile )
						);
					}

					$this->DumpJavascriptFiles = true;
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
		private function Fetch( array $URLs, int $WindowSize ) : void
		{
			$this->Requests = [];

			$Master = curl_multi_init( );

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
				curl_multi_exec( $Master, $Running );

				while( $Done = curl_multi_info_read( $Master ) )
				{
					/** @var CurlHandle */
					$Handle = $Done[ 'handle' ];
					$URL   = curl_getinfo( $Handle, CURLINFO_EFFECTIVE_URL );
					$Code  = curl_getinfo( $Handle, CURLINFO_HTTP_CODE );

					$Request = $this->Requests[ (int)$Handle ];
					$IsSSR = $Request === 'SSR';

					if( $Code === 429 && $IsSSR )
					{
						$this->Log( '{yellow}Error ' . $Code . '{normal}    - ' . $URL . ' (but continuing)' );
						$Code = 200;
					}

					if( $Code === 304 )
					{
						$this->Log( '{green}HTTP Cache  {normal} - ' . $URL );
					}
					else if( $Code !== 200 )
					{
						$this->Log( '{yellow}Error ' . $Code . '{normal}    - ' . $URL );

						if( $Code < 100 || $Code >= 500 )
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
						$LengthExpected = curl_getinfo( $Handle, CURLINFO_CONTENT_LENGTH_DOWNLOAD_T );
						$LengthDownload = curl_getinfo( $Handle, CURLINFO_SIZE_DOWNLOAD_T );

						if( $LengthExpected !== $LengthDownload && !$IsSSR && $Request !== 'Random/SteamMobileApks.txt' )
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
							$HandleResponse = true;
							$HeaderSize = curl_getinfo( $Handle, CURLINFO_HEADER_SIZE );
							$Data = curl_multi_getcontent( $Handle );
							$Header = substr( $Data, 0, $HeaderSize );

							if( preg_match( '/^ETag: (.+)$/im', $Header, $Test ) === 1 )
							{
								$ETag = trim( $Test[ 1 ] );

								if( !isset( $this->ETags[ $Request ] ) || !in_array( $ETag, $this->ETags[ $Request ], true ) )
								{
									$this->ETags[ $Request ][ time() ] = $ETag;
								}
								else
								{
									$HandleResponse = false;
									$this->Log( '{green}ETag Matched{normal} - ' . $URL );
								}
							}

							if( $HandleResponse )
							{
								$Data = substr( $Data, $HeaderSize );

								if( $this->HandleResponse( $Request, $Data, $URL ) === true )
								{
									$this->Log( '{lightblue}Fetched     {normal} - ' . $URL );
								}
								else
								{
									$this->Log( '{green}Not Modified{normal} - ' . $URL );
								}
							}

							unset( $Data, $Header );
						}
					}

					curl_multi_remove_handle( $Master, $Handle );

					if( !empty( $URLs ) )
					{
						$URL = array_shift( $URLs );

						$this->CreateHandle( $Master, $URL );

						$Running = true;
					}

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
			$Options[ CURLOPT_SHARE ] = $this->CurlShareHandle;
			$Options[ CURLOPT_URL ] = $this->GenerateURL( $URL[ 'URL' ] );

			$this->Requests[ (int)$Handle ] = $File;

			if( $this->UseCache )
			{
				// If we have an ETag saved, add If-None-Match header
				if( isset( $this->ETags[ $File ] ) )
				{
					$Options[ CURLOPT_HTTPHEADER ] =
					[
						'If-None-Match: ' . implode( ', ', $this->ETags[ $File ] ),
						'If-Modified-Since: ' . gmdate( 'D, d M Y H:i:s \G\M\T', array_key_last( $this->ETags[ $File ] ) ),
					];
				}
				else if( file_exists( $File ) )
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

				exit( 1 );
			}

			$Data = file_get_contents( $UrlsPath );
			$Data = explode( "\n", $Data );
			$Urls = [];

			// Add sale urls for current year
			$Year = idate( 'Y' );
			$Data[] = 'store.steampowered.com/public/css/promo/autumn_year_nominations.css @ https://store.steampowered.com/public/css/promo/autumn' . $Year . '_nominations.css?__TIME__&__CDN__';
			$Data[] = 'store.steampowered.com/public/css/promo/autumn_year_sale.css @ https://store.steampowered.com/public/css/promo/autumn' . $Year . '_sale.css?__TIME__&__CDN__';
			$Data[] = 'store.steampowered.com/public/css/promo/spring_year_sale.css @ https://store.steampowered.com/public/css/promo/spring' . $Year . '_sale.css?__TIME__&__CDN__';
			$Data[] = 'store.steampowered.com/public/css/promo/summer_year_sale.css @ https://store.steampowered.com/public/css/promo/summer' . $Year . '_sale.css?__TIME__&__CDN__';
			$Data[] = 'store.steampowered.com/public/css/promo/winter_year_sale.css @ https://store.steampowered.com/public/css/promo/winter' . $Year . '_sale.css?__TIME__&__CDN__';

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

					if( $ParsedUrl === false || empty( $ParsedUrl[ 'host' ] ) || empty( $ParsedUrl[ 'path' ] ) )
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

		/**
		 * @param array<string, true> $KnownUrls
		 *
		 * @return array<int, array{URL: string, File: string}>
		 */
		private function ProcessManifests( array $KnownUrls ) : array
		{
			system( 'node generate_manifest_urls.mjs' );

			$URLsToFetch = [];
			$KnownFilenames = [];
			$ManifestUrlsPath = __DIR__ . '/.support/urls_from_manifests.txt';

			if( !file_exists( $ManifestUrlsPath ) )
			{
				throw new Exception( $ManifestUrlsPath . ' does not exist' );
			}

			$ManifestUrls = file( $ManifestUrlsPath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES );

			foreach( $KnownUrls as $Url => $Trash )
			{
				$QuestionMark = strrpos( $Url, '?' );

				if( $QuestionMark !== false && str_starts_with( $Url, 'https://' ) )
				{
					$Filename = substr( $Url, 8, $QuestionMark - 8 );
					$KnownFilenames[] = $Filename;
				}
			}

			foreach( $ManifestUrls as $Url )
			{
				if( !str_starts_with( $Url, 'https://' ) )
				{
					throw new Exception( $Url . ' does not start with https://' );
				}

				$QuestionMark = strrpos( $Url, '?' );

				if( $QuestionMark === false )
				{
					throw new Exception( $Url . ' does not contain a question mark' );
				}

				$Filename = substr( $Url, 8, $QuestionMark - 8 );

				if( isset( $KnownUrls[ $Url ] ) )
				{
					continue;
				}

				$KnownFilenames[] = $Filename;
				$URLsToFetch[] =
				[
					'URL'  => $Url,
					'File' => $Filename,
				];
			}

			// Find and delete old chunk~ files
			$Folders = [];

			$IsChunkFile = static fn( string $Filename ) : bool => preg_match( '/^(chunk~|libraries~|[0-9]+\.)/', $Filename, $Matches ) === 1;

			foreach( $KnownFilenames as $Filepath )
			{
				$Filename = basename( $Filepath );

				if( $IsChunkFile( $Filename ) )
				{
					$Folder = dirname( $Filepath );

					if( !isset( $Folders[ $Folder ] ) )
					{
						$Folders[ $Folder ] = [];
					}

					$Folders[ $Folder ][ $Filename ] = true;
				}
			}

			foreach( $Folders as $Folder => $NewChunks )
			{
				$FullFolderPath = __DIR__ . '/' . $Folder . '/';

				if( !is_dir( $FullFolderPath ) )
				{
					$this->Log( $FullFolderPath . ' does not exist' );
					continue;
				}

				foreach( new DirectoryIterator( $FullFolderPath ) as $FileInfo )
				{
					if( $FileInfo->isDot() )
					{
						continue;
					}

					$Filename = $FileInfo->getFilename();

					if( $IsChunkFile( $Filename ) && !isset( $NewChunks[ $Filename ] ) )
					{
						$FilepathOnDisk = $FileInfo->getRealPath();

						$this->Log( 'Chunk ' . $FilepathOnDisk . ' no longer exists in manifest' );

						unlink( $FilepathOnDisk );

						$TagFile = $Folder . '/' . $Filename;
						unset( $this->ETags[ $TagFile ], $this->ETags[ $TagFile . '.unmodified' ] );

						// Also delete the corresponding file in the clean directory if it exists
						$CleanFilepath = __DIR__ . '/c/' . $Folder . '/' . $Filename;

						if( file_exists( $CleanFilepath ) )
						{
							$this->Log( 'Deleting clean file ' . $CleanFilepath );
							unlink( $CleanFilepath );
						}
					}
				}
			}

			return $URLsToFetch;
		}

		/**
		 * @return array<int, array{URL: string, File: string}>
		 */
		private function ProcessSSRFiles() : array
		{
			system( 'node generate_ssr_urls.mjs' );

			$ManifestUrlsPath = __DIR__ . '/.support/urls_from_ssr.txt';

			if( !file_exists( $ManifestUrlsPath ) )
			{
				throw new Exception( $ManifestUrlsPath . ' does not exist' );
			}

			$URLsToFetch = [];
			$ManifestUrls = file( $ManifestUrlsPath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES );

			foreach( $ManifestUrls as $Url )
			{
				if( !str_starts_with( $Url, 'https://' ) )
				{
					throw new Exception( $Url . ' does not start with https://' );
				}

				$File = $this->GetSSRFilepath( $Url );

				if( $File === null || isset( $this->CurrentSSRFiles[ $File ] ) )
				{
					continue;
				}

				$this->CurrentSSRFiles[ $File ] = true;

				$URLsToFetch[] =
				[
					'URL'  => $Url,
					'File' => $File,
				];
			}

			return $URLsToFetch;
		}

		private function DeleteOldSSRFiles() : void
		{
			// Find and delete old chunk files
			$Folders = [];

			foreach( $this->CurrentSSRFiles as $Filepath => $_ )
			{
				$Folder = __DIR__ . '/' . dirname( $Filepath ) . '/';

				if( !isset( $Folders[ $Folder ] ) )
				{
					$Folders[ $Folder ] = [];
				}

				$Folders[ $Folder ][ basename( $Filepath ) ] = true;
			}

			foreach( $Folders as $Folder => $NewChunks )
			{
				foreach( new DirectoryIterator( $Folder ) as $FileInfo )
				{
					if( $FileInfo->isDot() )
					{
						continue;
					}

					$Filename = $FileInfo->getFilename();

					if( !isset( $NewChunks[ $Filename ] ) )
					{
						$FilepathOnDisk = $FileInfo->getRealPath();

						$this->Log( 'Chunk ' . $FilepathOnDisk . ' no longer exists' );

						$File = substr( dirname( $FileInfo->getPathname() ), strlen( __DIR__ . '/' ) ) . '/' . $Filename;
						unset( $this->ETags[ $File ], $this->ETags[ $File . '.unmodified' ] );

						unlink( $FilepathOnDisk );

						// Also delete the corresponding file in the clean directory if it exists
						$CleanFilepath = __DIR__ . '/c/' . $File;

						if( file_exists( $CleanFilepath ) )
						{
							$this->Log( 'Deleting clean file ' . $CleanFilepath );
							unlink( $CleanFilepath );
						}
					}
				}
			}
		}

		private function GetSSRFilepath( string $Url ) : ?string
		{
			$File = parse_url( $Url, PHP_URL_PATH );

			if( str_starts_with( $File, '/store/ssr/' ) )
			{
				return 'store.steampowered.com/ssr/' . basename( $File );
			}

			$this->Log( '{lightred}Unknown SSR path: ' . $File );

			return null;
		}

		private function Log( string $String ) : void
		{
			$Log  = '[';
			$Log .= number_format( ( hrtime( true ) - $this->AppStart ) / 1e9, 2 );
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

