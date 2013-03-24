<?php
	new SteamTracker;
	
	class SteamTracker
	{
		private $APIKey;
		private $CurrentTime;
		private $URLsToFetch = Array( );
		
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
			
			do
			{
				$URLs = $this->URLsToFetch;
				
				$this->URLsToFetch = Array( );
				
				echo Count( $URLs ) . ' urls to be fetched...' . PHP_EOL;
				
				$this->Fetch( $URLs );
			}
			while( !Empty( $this->URLsToFetch ) );
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
				$Data = JSON_Decode( $Data, true );
				
				if( !isset( $Data[ 'result' ][ 'items_game_url' ] ) )
				{
					echo 'Failed to fetch SchemaURL - ' . $File . PHP_EOL;
				}
				else
				{
					$this->URLsToFetch[ ] = Array(
						'URL'  => $Data[ 'result' ][ 'items_game_url' ],
						'File' => SubStr( $File, 3 ) // GetItemSchema -> ItemSchema
					);
				}
				
				return;
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
			$Options = Array(
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
			
			$Requests = Array( );
			$Master = cURL_Multi_Init( );
			
			$WindowSize = 5;
			
			if( $WindowSize > Count( $URLs ) )
			{
				$WindowSize = Count( $URLs );
			}
			
			for( $i = 0; $i < $WindowSize; $i++ )
			{
				$Slave = cURL_Init( );
				
				$URL = Array_Shift( $URLs );
				
				$Options[ CURLOPT_URL ] = $this->GenerateURL( $URL[ 'URL' ] );
				
				cURL_SetOpt_Array( $Slave, $Options );
				
				cURL_Multi_Add_Handle( $Master, $Slave );
				
				$Requests[ $Slave ] = $URL[ 'File' ];
			}
			
			unset( $URL );
			
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
					
					$Request = $Requests[ $Slave ];
					
					if( isset( $Done[ 'error' ] ) )
					{
						echo 'cURL Error: ' . $Done[ 'error' ] . ' - ' . $URL . PHP_EOL;
					}
					else if( $Code !== 200 )
					{
						echo 'HTTP Error ' . $Code . ' - ' . $URL . PHP_EOL;
					}
					else
					{
						$LengthExpected = cURL_GetInfo( $Slave, CURLINFO_CONTENT_LENGTH_DOWNLOAD );
						$LengthDownload = cURL_GetInfo( $Slave, CURLINFO_SIZE_DOWNLOAD );
						
						if( $LengthExpected !== $LengthDownload )
						{
							echo 'Wrong Length (' . $LengthDownload . ' != ' . $LengthExpected . ') - ' . $URL . PHP_EOL;
							
							$this->URLsToFetch[ ] = Array(
								'URL'  => $URL,
								'File' => $Request
							);
						}
						else
						{
							$this->HandleResponse( $Request, $Data );
							
							echo 'Fetched - ' . $URL . PHP_EOL;
						}
					}
					
					if( Count( $URLs ) )
					{
						$SlaveNew = cURL_Init( );
						
						$URL = Array_Shift( $URLs );
						
						$Options[ CURLOPT_URL ] = $this->GenerateURL( $URL[ 'URL' ]);
						
						cURL_SetOpt_Array( $SlaveNew, $Options );
						
						cURL_Multi_Add_Handle( $Master, $SlaveNew );
						
						$Requests[ $SlaveNew ] = $URL[ 'File' ];
						
						$i++;
						
						unset( $SlaveNew, $URL );
					}
					
					cURL_Multi_Remove_Handle( $Master, $Slave );
					cURL_Close( $Slave );
					
					unset( $Requests[ $Slave ], $Request, $Slave );
				}
				
				if( $Running )
				{
					cURL_Multi_Select( $Master, 5 );
				}
			}
			while( $Running );
			
			cURL_Multi_Close( $Master );
		}
	}
