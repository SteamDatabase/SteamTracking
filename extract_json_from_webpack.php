<?php
declare(strict_types=1);

// This script extracts JSON from webpack modules that use JSON.parse string optimization

if( count( $argv ) !== 2 || !file_exists( $argv[ 1 ] ) )
{
	echo 'Input file required' . PHP_EOL;
	exit( 1 );
}

$Filename = $argv[ 1 ];
$Data = file_get_contents( $Filename );

if( preg_match( "/exports=JSON\.parse\('(?<code>.+)'\)}}]\);(?:\r?\n\/\/# sourceMappingURL=(.+)\.map)?$/", $Data, $Matches ) !== 1 )
{
	exit( 0 );
}

$NewFilename = preg_replace( '/(-json)?\.js$/', '.json', $Filename );

echo 'Saving to "' . $NewFilename . '"' . PHP_EOL;

$Data = stripcslashes( $Matches[ 1 ] );
$Data = json_decode( $Data, true, 512, JSON_THROW_ON_ERROR );
$Data = json_encode( $Data, JSON_PRETTY_PRINT ) . PHP_EOL;

if( file_put_contents( $NewFilename, $Data ) === false )
{
	throw new Exception( 'Failed to write' );
}

unlink( $Filename );

exit( 200 );
