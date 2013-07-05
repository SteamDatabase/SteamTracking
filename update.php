<?php
	new SteamTracker( Count( $argv ) === 2 ? $argv[ 1 ] : '' );
	
	class SteamTracker
	{
		private $APIKey;
		private $AppStart;
		private $CurrentTime;
		private $UseCache = true;
		private $ETags = Array( );
		private $Requests = Array( );
		private $URLsToFetch = Array( );
		
		private $Options = Array(
			CURLOPT_USERAGENT      => '',
			CURLOPT_HEADER         => 1,
			CURLOPT_AUTOREFERER    => 0,
			CURLOPT_RETURNTRANSFER => 1,
			CURLOPT_FOLLOWLOCATION => 0,
			CURLOPT_TIMEOUT        => 120,
			CURLOPT_CONNECTTIMEOUT => 30,
			CURLOPT_COOKIESESSION  => 1,
			CURLOPT_BINARYTRANSFER => 1,
			CURLOPT_FORBID_REUSE   => 1,
			CURLOPT_FRESH_CONNECT  => 1
		);
		
		public function __construct( $Option )
		{
			$this->AppStart = MicroTime( true );
			
			$File = 'urls.txt';
			
			if( $Option === 'schema' )
			{
				$File = 'urls_schema.txt';
			}
			else if( $Option === 'force' )
			{
				$this->UseCache = false;
			}
			
			if( !File_Exists( 'apikey.txt' ) )
			{
				$this->Log( '{lightred}Missing apikey.txt' );
				
				Exit;
			}
			else if( !File_Exists( $File ) )
			{
				$this->Log( '{lightred}Missing ' . $File );
				
				Exit;
			}
			
			if( $this->UseCache && File_Exists( 'etags.txt' ) )
			{
				$this->ETags = JSON_Decode( File_Get_Contents( 'etags.txt' ), true );
			}
			
			$this->APIKey = Trim( File_Get_Contents( 'apikey.txt' ) );
			$this->CurrentTime = Time( );
			
			$Data = File( $File );
			
			foreach( $Data as $Line )
			{
				$Line = Trim( $Line );
				
				if( Empty( $Line ) || $Line[ 0 ] == '#' )
				{
					continue;
				}
				
				$Line = Explode( '|', $Line, 2 );
				
				$this->URLsToFetch[ ] = Array(
					'URL'  => $Line[ 1 ],
					'File' => $Line[ 0 ]
				);
			}
			
			unset( $Data, $Line );
			
			$Tries = 20;
			
			do
			{
				$URLs = $this->URLsToFetch;
				
				$this->URLsToFetch = Array( );
				
				USort( $URLs, function( $a, $b )
				{
					$Test = strcasecmp( $a[ 'URL' ], $b[ 'URL' ] );
					
					if( $Test == 0 )
					{
						return 0;
					}
					
					return $Test > 0 ? -1 : 1;
				} );
				
				$this->Log( '{yellow}' . Count( $URLs ) . ' urls to be fetched...' );
				
				$this->Fetch( $URLs );
			}
			while( !Empty( $this->URLsToFetch ) && $Tries-- > 0 );
			
			File_Put_Contents( 'etags.txt', JSON_Encode( $this->ETags ) );
		}
		
		private function GenerateURL( $URL )
		{
			return Str_Replace(
				Array( '*APIKEY*', '*TIMENOW*' ),
				Array( $this->APIKey, $this->CurrentTime ),
				$URL
			);
		}
		
		private function HandleResponse( $File, $Data )
		{
			// Handle item schemas differently
			if( SubStr( $File, 0, 13 ) === 'GetItemSchema' )
			{
				$DataJSON = JSON_Decode( $Data, true );
				
				$File = SubStr( $File, 3 );
				
				if( isset( $DataJSON[ 'result' ][ 'items_game_url' ] ) )
				{
					$this->URLsToFetch[ ] = Array(
						'URL'  => $DataJSON[ 'result' ][ 'items_game_url' ],
						'File' => Str_Replace( Array( 'ItemSchema/', '.json' ), Array( 'ItemSchema/API/', '.vdf' ), $File )
					);
				}
				
				unset( $DataJSON );
			}
			// Get strings_all.zip file name from beta manifest
			else if( $File === 'ClientManifest/steam_client_publicbeta_win32.manifest' )
			{
				if( Preg_Match( '/"strings_all\.zip\.([a-f0-9]{40})"/m', $Data, $Test ) === 1 )
				{
					$Test = $Test[ 1 ];
					
					if( !Array_Key_Exists( 'strings_all.zip', $this->ETags ) || $this->ETags[ 'strings_all.zip' ] !== $Test )
					{
						$this->Log( '{lightblue}Downloading new strings_all.zip.' . $Test );
						
						$this->ETags[ 'strings_all.zip' ] = $Test;
						
						$this->URLsToFetch[ ] = Array(
							'URL'  => 'http://media.steampowered.com/client/strings_all.zip.' . $Test,
							'File' => 'ClientStrings/strings_all.zip'
						);
					}
				}
				
				unset( $Test );
			}
			// Unzip it
			else if( $File === 'ClientStrings/strings_all.zip' )
			{
				$File = __DIR__ . '/' . $File;
				
				File_Put_Contents( $File, $Data );
				
				if( SHA1_File( $File ) !== $this->ETags[ 'strings_all.zip' ] )
				{
					$this->Log( '{lightred}Checksum mismatch for strings_all.zip' );
					
					return false;
				}
				
				// Let's break all kinds of things! :(
				System( 'sh ' . __DIR__ . '/ClientStrings/extract.sh' );
				
				return true;
			}
			else if( $File === 'Repos/mysterious_cards.json' )
			{
				$Data = JSON_Decode( $Data, true );
				
				if( !isset( $Data[ 'success' ] ) )
				{
					return false;
				}
				
				$Data  = $Data[ 'rgDescriptions' ];
				$Items = Array( );
				
				foreach( $Data as $ID => $Item )
				{
					if( $Item[ 'market_fee_app' ] == '245070' )
					{
						$Items[ $ID ] = $Item;
					}
				}
				
				$Data = JSON_Encode( $Items, JSON_PRETTY_PRINT );
			}
			
			// Stupid store CDN keeps switching subdomains between resources
			$Data = Str_Replace( Array( 'cdn4.store.steampowered.com', 'cdn3.store.steampowered.com', 'cdn2.store.steampowered.com' ), 'cdn.store.steampowered.com', $Data );
			
			$File = __DIR__ . '/' . $File;
			
			if( File_Exists( $File ) && StrCmp( File_Get_Contents( $File ), $Data ) === 0 )
			{
				return false;
			}
			
			File_Put_Contents( $File, $Data );
			
			return true;
		}
		
		private function Fetch( $URLs )
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
						$this->Log( '{lightcyan}cURL Error: {yellow}' . $Done[ 'error' ] . '{normal} - ' . $URL );
						
						$this->URLsToFetch[ ] = Array(
							'URL'  => $URL,
							'File' => $Request
						);
					}
					else if( $Code === 304 )
					{
						$this->Log( '{yellow}Not Modified{normal} - ' . $URL );
					}
					else if( $Code !== 200 )
					{
						$this->Log( '{lightcyan}HTTP Error ' . $Code . '{normal} - ' . $URL );
						
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
						
						// TODO: Workarounds... It's not sending Content-Length
						if( $LengthExpected == -1 )
						{
							if( SubStr( $Request, 0, 16 ) === 'Scripts/Partner/'
							||  SubStr( $Request, 0, 15 ) === 'Styles/Partner/'
							||  SubStr( $Request, 0, 6 ) === 'Repos/' )
							{
								$LengthExpected = $LengthDownload;
							}
						}
						
						if( $LengthExpected !== $LengthDownload )
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
								$this->Log( '{green}Fetched{normal} - ' . $URL );
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
			
			$this->Options[ CURLOPT_URL ] = $this->GenerateURL( $URL[ 'URL' ] );
			
			$this->Requests[ (int)$Slave ] = $File;
			
			if( $this->UseCache )
			{
				// If we have an ETag saved, add If-None-Match header
				if( Array_Key_Exists( $File, $this->ETags ) )
				{
					$this->Options[ CURLOPT_HTTPHEADER ] = Array( 'If-None-Match: ' . $this->ETags[ $File ] );
				}
				// Otherwise, check if the file exists
				else
				{
					// Item schemas are handled differently
					if( SubStr( $File, 0, 13 ) === 'GetItemSchema' )
					{
						$File = SubStr( $File, 3 );
					}
					
					if( File_Exists( $File ) )
					{
						$this->Options[ CURLOPT_HTTPHEADER ] = Array( 'If-Modified-Since: ' . GMDate( 'D, d M Y H:i:s \G\M\T', FileMTime( $File ) ) );
					}
					else
					{
						unset( $this->Options[ CURLOPT_HTTPHEADER ] );
					}
				}
			}
			
			cURL_SetOpt_Array( $Slave, $this->Options );
			
			cURL_Multi_Add_Handle( $Master, $Slave );
			
			return $Slave;
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
					'{lightblue}',
					'{lightcyan}'
				),
				Array(
					"\033[0m",
					"\033[0;32m",
					"\033[1;33m",
					"\033[1;31m",
					"\033[1;34m",
					"\033[1;36m"
				),
			$Log );
			
			echo $Log;
		}
	}
