<?php
	new SteamTracker;
	
	class SteamTracker
	{
		private $APIKey;
		private $AppStart;
		private $CurrentTime;
		private $URLsToFetch = Array( );
		
		private $Options = Array(
			CURLOPT_USERAGENT      => '',
			CURLOPT_HEADER         => 0,
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
		
		public function __construct( )
		{
			if( !File_Exists( 'apikey.txt' ) )
			{
				Exit( 'Missing apikey.txt' );
			}
			else if( !File_Exists( 'urls.txt' ) )
			{
				Exit( 'Missing urls.txt' );
			}
			
			$this->APIKey = Trim( File_Get_Contents( 'apikey.txt' ) );
			$this->CurrentTime = Time( );
			$this->AppStart = MicroTime( true );
			
			$Data = File( 'urls.txt' );
			
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
			
			// Stupid store CDN keeps switching subdomains between resources
			$Data = Str_Replace( Array( 'cdn3.store.steampowered.com', 'cdn2.store.steampowered.com' ), 'cdn.store.steampowered.com', $Data );
			
			$File = __DIR__ . '/' . $File;
			
			if( File_Exists( $File ) && File_Get_Contents( $File ) === $Data )
			{
				return;
			}
			
			File_Put_Contents( $File, $Data );
		}
		
		private function Fetch( $URLs )
		{
			$Requests = Array( );
			$Master = cURL_Multi_Init( );
			
			$WindowSize = 10;
			
			if( $WindowSize > Count( $URLs ) )
			{
				$WindowSize = Count( $URLs );
			}
			
			for( $i = 0; $i < $WindowSize; $i++ )
			{
				$URL = Array_Shift( $URLs );
				
				$Slave = $this->CreateHandle( $Master, $URL );
				
				$Requests[ (int)$Slave ] = $URL[ 'File' ];
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
					
					$Request = $Requests[ (int)$Slave ];
					
					if( isset( $Done[ 'error' ] ) )
					{
						$this->Log( '{lightcyan}cURL Error: {yellow}' . $Done[ 'error' ] . '{normal} - ' . $URL );
						
						$this->URLsToFetch[ ] = Array(
							'URL'  => $URL,
							'File' => $Request
						);
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
						
						// Workarounds... It's not sending Content-Length
						$Test = SubStr( $Request, 0, 16 );
						
						if( $LengthExpected == -1 )
						{
							if( $Test === 'Scripts/Partner/' || $Test === 'Styles/Partner/s' || $Test === 'Repos/index.html' )
							{
								$LengthExpected = $LengthDownload;
							}
						}
						
						if( $LengthExpected !== $LengthDownload )
						{
							$this->Log( '{lightred}Wrong Length (' . $LengthDownload . ' != ' . $LengthExpected . '){normal} - ' . $URL );
							
							$this->URLsToFetch[ ] = Array(
								'URL'  => $URL,
								'File' => $Request
							);
						}
						else
						{
							$this->HandleResponse( $Request, $Data );
							
							$this->Log( '{green}Fetched{normal} - ' . $URL );
						}
					}
					
					if( Count( $URLs ) )
					{
						$URL = Array_Shift( $URLs );
						
						$SlaveNew = $this->CreateHandle( $Master, $URL );
						
						$Requests[ (int)$SlaveNew ] = $URL[ 'File' ];
					}
					
					cURL_Multi_Remove_Handle( $Master, $Slave );
					cURL_Close( $Slave );
					
					unset( $Requests[ (int)$Slave ], $Request, $Slave );
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
			
			$this->Options[ CURLOPT_URL ] = $this->GenerateURL( $URL[ 'URL' ] );
			
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
