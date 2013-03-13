<?php
	$Data = File_Get_Contents( 'urls.txt' );
	$Data = Explode( "\n", $Data );
	
	$URLs = Array( );
	
	foreach( $Data as $Line )
	{
		$Line = Trim( $Line );
		
		if( Empty( $Line ) || $Line[ 0 ] == '#' )
		{
			continue;
		}
		
		$Line = Explode( '|', $Line );
		
		$URLs[ ] = Array(
			'URL'  => $Line[ 1 ],
			'File' => $Line[ 0 ]
		);
	}
	
	Get( $URLs, Trim( File_Get_Contents( 'apikey.txt' ) ) );
	
	function HandleData( $File, $Data )
	{
		File_Put_Contents( __DIR__ . '/' . $File, $Data );
	}
	
	function Get( $URLs, $APIKey )
	{
		$Options = Array(
			CURLOPT_USERAGENT      => '',
			CURLOPT_HEADER         => 0,
			CURLOPT_AUTOREFERER    => 0,
			CURLOPT_RETURNTRANSFER => 1,
			CURLOPT_FOLLOWLOCATION => 0,
			CURLOPT_TIMEOUT        => 10,
			CURLOPT_CONNECTTIMEOUT => 10,
			
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
			
			$Options[ CURLOPT_URL ] = Str_Replace( '*APIKEY*', $APIKey, $URL[ 'URL' ] );
			
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
				
				if( isset( $Done[ 'error' ] ) || $Code !== 200 )
				{
					if( !isset( $Done[ 'error' ] ) )
					{
						echo $URL . ' - HTTP Error ' . $Code . PHP_EOL;
					}
					else
					{
						echo $URL . ' - cURL Error: ' . $Done[ 'error' ] . PHP_EOL;
					}
				}
				else
				{
					HandleData( $Request, $Data );
					
					echo $URL . ' - Fetched' . PHP_EOL;
				}
				
				if( Count( $URLs ) )
				{
					$SlaveNew = cURL_Init( );
					
					$URL = Array_Shift( $URLs );
					
					$Options[ CURLOPT_URL ] = Str_Replace( '*APIKEY*', $APIKey, $URL[ 'URL' ] );
					
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

