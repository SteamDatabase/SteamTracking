<?php
declare(strict_types=1);

new ClientExtractor();

class ClientExtractor
{
	private const ROOT_DIR = __DIR__ . '/..';
	private const SUPPORT_DIR = self::ROOT_DIR . '/.support';
	private const CLIENT_EXTRACTED_DIR = self::ROOT_DIR . '/ClientExtracted';
	private const CLIENT_CLEAN_DIR = self::ROOT_DIR . '/c/ClientExtracted';
	private const LINUX_BINS_DIR = self::SUPPORT_DIR . '/linux_bins';
	private const LINUX_ARCHIVES_DIR = self::SUPPORT_DIR . '/linux_archives';
	private const PROTOBUFS_DIR = self::ROOT_DIR . '/Protobufs';
	private const STRINGS_DIR = self::ROOT_DIR . '/Strings';

	private int $AppStart;

	public function __construct()
	{
		$this->AppStart = hrtime( true );

		$this->BuildTools();
		$this->CleanupExistingFiles();
		$this->ExtractArchives();
		$this->DumpProtobufs();
		$this->DumpStrings();
		$this->ProcessJavascript();
		$this->FixEncodings();
		$this->DeleteDirectory( self::LINUX_BINS_DIR );

		$this->Log( '{green}Done extracting client' );
	}

	private function BuildTools() : void
	{
		$this->Log( 'Building tools' );

		$ProtobufDumperProject = __DIR__ . '/SteamKit/Resources/ProtobufDumper/ProtobufDumper/ProtobufDumper.csproj';

		$Runtime = PHP_OS_FAMILY === 'Windows' ? 'win-x64' : 'linux-x64';

		$this->RunCommand( 'dotnet clean --configuration Release ' . escapeshellarg( $ProtobufDumperProject ) );
		$this->RunCommand( 'dotnet publish --configuration Release -p:PublishSingleFile=true --runtime ' . $Runtime . ' --self-contained ' . escapeshellarg( $ProtobufDumperProject ) );

		$DumpStringsDir = __DIR__ . '/DumpStrings';

		$this->RunCommand( 'cd ' . escapeshellarg( $DumpStringsDir ) . ' && go build' );
	}

	private function RunCommand( string $Command ) : void
	{
		system( $Command, $ReturnCode );

		if( $ReturnCode !== 0 )
		{
			throw new RuntimeException( 'Command failed with code ' . $ReturnCode . ': ' . $Command );
		}
	}

	private function DeleteDirectory( string $Dir ) : void
	{
		if( !file_exists( $Dir ) )
		{
			return;
		}

		if( !is_dir( $Dir ) )
		{
			unlink( $Dir );
			return;
		}

		$Items = new RecursiveIteratorIterator(
			new RecursiveDirectoryIterator( $Dir, RecursiveDirectoryIterator::SKIP_DOTS ),
			RecursiveIteratorIterator::CHILD_FIRST
		);

		/** @var \SplFileInfo $Item */
		foreach( $Items as $Item )
		{
			if( $Item->isDir() )
			{
				rmdir( $Item->getPathname() );
			}
			else
			{
				unlink( $Item->getPathname() );
			}
		}
	}

	private function CleanupExistingFiles() : void
	{
		$this->Log( 'Deleting existing files' );

		$this->DeleteDirectory( self::LINUX_BINS_DIR );
		$this->DeleteDirectory( self::CLIENT_EXTRACTED_DIR );
		$this->DeleteDirectory( self::CLIENT_CLEAN_DIR );
		$this->DeleteDirectory( self::PROTOBUFS_DIR );
	}

	private function ExtractArchives() : void
	{
		$this->Log( 'Extracting archives' );

		$FileListings = [];

		if( is_dir( self::LINUX_ARCHIVES_DIR ) )
		{
			$Iterator = new FilesystemIterator( self::LINUX_ARCHIVES_DIR, FilesystemIterator::SKIP_DOTS );

			/** @var \SplFileInfo $Archive */
			foreach( $Iterator as $Archive )
			{
				if( !$Archive->isFile() || $Archive->getExtension() !== 'zip' )
				{
					continue;
				}

				$Zip = new ZipArchive();
				$Filename = $Archive->getFilename();

				if( $Zip->open( $Archive->getPathname() ) !== true )
				{
					$this->Log( '{lightred}Failed to open archive: ' . $Filename );
					continue;
				}

				$IsBinsArchive = str_contains( $Filename, 'bins' ) || str_contains( $Filename, 'runtime_' );

				if( $IsBinsArchive )
				{
					$ExtractDir = self::LINUX_BINS_DIR;
				}
				else
				{
					$ExtractDir = self::CLIENT_EXTRACTED_DIR;
				}

				if( !is_dir( $ExtractDir ) )
				{
					mkdir( $ExtractDir, 0755, true );
				}

				$Zip->extractTo( $ExtractDir );

				for( $i = 0; $i < $Zip->numFiles; $i++ )
				{
					$Stat = $Zip->statIndex( $i );

					if( $Stat === false )
					{
						continue;
					}

					if( str_contains( $Stat[ 'name' ], '\\' ) )
					{
						$OldPath = $ExtractDir . '/' . $Stat[ 'name' ];
						$FixedName = str_replace( '\\', '/', $Stat[ 'name' ] );
						$NewPath = $ExtractDir . '/' . $FixedName;

						if( file_exists( $OldPath ) )
						{
							$NewDir = dirname( $NewPath );

							if( !is_dir( $NewDir ) )
							{
								mkdir( $NewDir, 0755, true );
							}

							rename( $OldPath, $NewPath );
							$this->Log( 'Fixed backslash path: ' . $Stat[ 'name' ] );
						}
					}

					$FileListings[] = $Stat;
				}

				$Zip->close();
			}
		}

		usort( $FileListings, function( $a, $b )
		{
			return strcmp( $a[ 'name' ], $b[ 'name' ] );
		} );

		$Output = [];

		foreach( $FileListings as $Stat )
		{
			$Output[] = sprintf( '%08x %s', $Stat[ 'crc' ], $Stat[ 'name' ] );
		}

		$ListingFile = self::CLIENT_EXTRACTED_DIR . '/ClientContentLinux.txt';
		file_put_contents( $ListingFile, implode( PHP_EOL, $Output ) . PHP_EOL );
	}

	private function DumpProtobufs() : void
	{
		$this->Log( 'Dumping protobufs' );

		$ProtobufDumper = __DIR__ . '/SteamKit/Resources/ProtobufDumper/ProtobufDumper/bin/Release/linux-x64/publish/ProtobufDumper';

		if( PHP_OS_FAMILY === 'Windows' )
		{
			$ProtobufDumper = __DIR__ . '/SteamKit/Resources/ProtobufDumper/ProtobufDumper/bin/Release/win-x64/publish/ProtobufDumper.exe';
		}

		$Binaries =
		[
			self::LINUX_BINS_DIR . '/steamrt64/steamui.so',
			self::LINUX_BINS_DIR . '/steamrt64/steamclient.so',
		];

		if( !file_exists( $ProtobufDumper ) )
		{
			$this->Log( '{yellow}ProtobufDumper not found' );
			return;
		}

		if( !is_dir( self::PROTOBUFS_DIR ) )
		{
			mkdir( self::PROTOBUFS_DIR, 0755, true );
		}

		foreach( $Binaries as $Binary )
		{
			if( !file_exists( $Binary ) )
			{
				$this->Log( '{yellow}Binary not found: ' . $Binary );
				continue;
			}

			$Command = escapeshellarg( $ProtobufDumper ) . ' ' . escapeshellarg( $Binary ) . ' ' . escapeshellarg( self::PROTOBUFS_DIR );
			exec( $Command, $Output, $ReturnCode );

			if( $ReturnCode !== 0 )
			{
				$this->Log( '{lightred}Failed to dump protobufs from: ' . $Binary );
			}
		}
	}

	private function DumpStrings() : void
	{
		$this->Log( 'Dumping strings' );

		$DumpStrings = __DIR__ . '/DumpStrings/DumpStrings' . ( PHP_OS_FAMILY === 'Windows' ? '.exe' : '' );
		$SteamRTDir = self::LINUX_BINS_DIR . '/steamrt64';
		$SteamBinaries =
		[
			self::CLIENT_EXTRACTED_DIR . '/steamrt64/steam',
			self::LINUX_BINS_DIR . '/steamrt64/steam-launch-wrapper',
			self::LINUX_BINS_DIR . '/steamrt64/steam_monitor',
			self::LINUX_BINS_DIR . '/steamrt64/steamsysinfo',
			self::LINUX_BINS_DIR . '/steamrt64/steamwebhelper',
			self::LINUX_BINS_DIR . '/steamrt64/streaming_client'
		];

		if( !file_exists( $DumpStrings ) )
		{
			$this->Log( '{yellow}DumpStrings not found' );
			return;
		}

		if( !is_dir( self::STRINGS_DIR ) )
		{
			mkdir( self::STRINGS_DIR, 0755, true );
		}

		if( is_dir( $SteamRTDir ) )
		{
			$Iterator = new RecursiveIteratorIterator(
				new RecursiveDirectoryIterator( $SteamRTDir, RecursiveDirectoryIterator::SKIP_DOTS )
			);

			/** @var \SplFileInfo $File */
			foreach( $Iterator as $File )
			{
				if( $File->isFile() && $File->getExtension() === 'so' && !str_contains( $File->getPath(), 'pv-runtime' )  )
				{
					$Name = $File->getBasename( '.so' );
					$this->Log( 'Dumping ' . $File->getFilename() );

					$Command = escapeshellarg( $DumpStrings ) . ' -target elf -binary ' . escapeshellarg( $File->getPathname() );
					exec( $Command, $Output, $ReturnCode );

					if( $ReturnCode !== 0 )
					{
						$this->Log( '{lightred}Failed to dump strings from: ' . $File->getFilename() );
						continue;
					}

					$Strings = array_unique( $Output );
					sort( $Strings );

					file_put_contents( self::STRINGS_DIR . '/' . $Name . '.txt', implode( PHP_EOL, $Strings ) . PHP_EOL );
					$Output = [];
				}
			}
		}

		foreach( $SteamBinaries as $SteamBinary )
		{
			if( file_exists( $SteamBinary ) )
			{
				$Name = basename( $SteamBinary );
				$Command = escapeshellarg( $DumpStrings ) . ' -target elf -binary ' . escapeshellarg( $SteamBinary );
				exec( $Command, $Output, $ReturnCode );

				if( $ReturnCode !== 0 )
				{
					$this->Log( '{lightred}Failed to dump strings from: ' . $Name );
					continue;
				}
				$Strings = array_unique( $Output );
				sort( $Strings );

				file_put_contents( self::STRINGS_DIR . '/'. $Name . '.txt', implode( PHP_EOL, $Strings ) . PHP_EOL );
				$Output = [];
			}
		}
	}

	private function ExtractJsonFromWebpack( string $Filename ) : bool
	{
		$Data = file_get_contents( $Filename );

		if( $Data === false )
		{
			return false;
		}

		if( ( preg_match( "/exports=JSON\.parse\('(?<code>.+)'\)}}]\);(?:\r?\n\/\/# sourceMappingURL=(.+)\.map)?$/", $Data, $Matches ) !== 1 ) && ( preg_match( "/exports=JSON\.parse\(`(.*)`\)/", $Data, $Matches ) !== 1 ) && ( preg_match( "/exports=JSON\.parse\('(.*)'\)/", $Data, $Matches ) !== 1 ) )
		{
			return false;
		}

		$NewFilename = preg_replace( '/(-json)?\.js$/', '.json', $Filename );


		$Data = preg_replace_callback( '/\\\\(\\\\|x[0-9A-Fa-f]{2}|\'|\`|u\{[0-9a-fA-F]+\})/',
				function( $m )
				{
					$esc = $m[ 1 ];

					if( $esc === '\\' )
					{
						return '\\';
					}

					if( $esc[ 0 ] === 'x' )
					{
						return '\u00' . substr( $esc, 1 );
					}

					if( $esc[ 0 ] === 'u' )
					{
						return mb_chr(hexdec(substr( $esc, 2, -1 )), 'UTF-8');
					}

					if( $esc === '`' )
					{
						return '`';
					}

					if( $esc === "'" )
					{
						return "'";
					}

					throw new Exception( "Unknown escape sequence: $esc" );
				},
				$Matches[ 1 ] 
        );

		$Data = json_decode( $Data, true, 512, JSON_THROW_ON_ERROR );
		$Data = json_encode( $Data, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT ) . PHP_EOL;

		if( file_put_contents( $NewFilename, $Data ) === false )
		{
			return false;
		}

		unlink( $Filename );

		return true;
	}

	private function ProcessJavascript() : void
	{
		$this->Log( 'Prettifying javascript' );

		$GenerateClean = __DIR__ . '/generate_clean_js.mjs';
		$Directories =
		[
			self::CLIENT_EXTRACTED_DIR . '/steamui',
			self::CLIENT_EXTRACTED_DIR . '/clientui',
			self::CLIENT_EXTRACTED_DIR . '/siteserverui',
		];

		$Files = [];

		foreach( $Directories as $Dir )
		{
			if( !is_dir( $Dir ) )
			{
				continue;
			}

			$Iterator = new RecursiveIteratorIterator(
				new RecursiveDirectoryIterator( $Dir, RecursiveDirectoryIterator::SKIP_DOTS )
			);

			/** @var \SplFileInfo $File */
			foreach( $Iterator as $File )
			{
				if( $File->isFile() && in_array( $File->getExtension(), [ 'js', 'css' ] ) )
				{
					$Files[] = $File;
				}
			}
		}

		/** @var \SplFileInfo $File */
		foreach( $Files as $File )
		{
			$RelativePath = str_replace( self::CLIENT_EXTRACTED_DIR . '/', '', $File->getPathname() );
			$Extension = $File->getExtension();
			$Filename = $File->getFilename();

			if( $Extension === 'js' )
			{
				if( !str_starts_with( $Filename, 'libraries~' ) && $this->ExtractJsonFromWebpack( $File->getPathname() ) )
				{
					$this->Log( 'Extracted json from ' . $RelativePath );
					continue;
				}

				if( $Filename !== 'manifest.js' && $Filename !== 'licenses.js' )
				{
					$CleanDir = self::CLIENT_CLEAN_DIR . '/' . dirname( $RelativePath );
					$CleanFile = self::CLIENT_CLEAN_DIR . '/' . $RelativePath;

					if( !is_dir( $CleanDir ) )
					{
						mkdir( $CleanDir, 0755, true );
					}

					$Command = 'node ' . escapeshellarg( $GenerateClean ) . ' ' . escapeshellarg( $File->getPathname() ) . ' ' . escapeshellarg( $CleanFile );
					system( $Command );

					if( file_exists( $CleanFile ) )
					{
						system( 'npm run prettier ' . escapeshellarg( $CleanFile ) );
					}
				}
			}

			$this->Log( 'Prettifying ' . $RelativePath );
			system( 'npm run prettier ' . escapeshellarg( $File->getPathname() ) );
		}
	}

	private function FixEncodings() : void
	{
		$this->Log( 'Fixing encodings' );

		$Iterator = new RecursiveIteratorIterator(
			new RecursiveDirectoryIterator( self::CLIENT_EXTRACTED_DIR, RecursiveDirectoryIterator::SKIP_DOTS )
		);

		/** @var \SplFileInfo $File */
		foreach( $Iterator as $File )
		{
			if( !$File->isFile() || !in_array( $File->getExtension(), [ 'txt', 'xml', 'cfg', 'res' ] ) )
			{
				continue;
			}

			$this->ConvertFileEncoding( $File->getPathname() );
		}
	}

	private function ConvertFileEncoding( string $FileName ) : void
	{
		$Handle = fopen( $FileName, 'r' );

		if( $Handle === false )
		{
			return;
		}

		$BOM = fread( $Handle, 4 );
		fclose( $Handle );

		$Encoding = null;

		// Detect and convert UTF-16, UTF-32 to UTF-8
		if( $BOM === "\x00\x00\xFE\xFF" )
		{
			$Encoding = 'UTF-32BE';
		}
		else if( $BOM === "\xFF\xFE\x00\x00" )
		{
			$Encoding = 'UTF-32LE';
		}
		else if( substr( $BOM, 0, 2 ) === "\xFE\xFF" )
		{
			$Encoding = 'UTF-16BE';
		}
		else if( substr( $BOM, 0, 2 ) === "\xFF\xFE" )
		{
			$Encoding = 'UTF-16LE';
		}

		if( $Encoding !== null )
		{
			$RelativePath = str_replace( self::CLIENT_EXTRACTED_DIR . '/', '', $FileName );
			$this->Log( 'Converting ' . $Encoding . ' to UTF-8: ' . $RelativePath );

			$Text = file_get_contents( $FileName );

			if( $Text !== false )
			{
				$Text = mb_convert_encoding( $Text, 'UTF-8', $Encoding );
				$Text = preg_replace( '/^[\xef\xbb\xbf\xff\xfe\xfe\xff]*/', '', $Text );
				$Text = trim( $Text ) . PHP_EOL;

				file_put_contents( $FileName, $Text );
			}
		}
	}

	private function Log( string $String ) : void
	{
		$Log  = '[';
		$Log .= number_format( ( hrtime( true ) - $this->AppStart ) / 1e9, 2 );
		$Log .= 's] ';
		$Log .= $String;
		$Log .= '{normal}';
		$Log .= PHP_EOL;

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
