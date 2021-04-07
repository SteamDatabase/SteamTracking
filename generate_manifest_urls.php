<?php
declare(strict_types=1);

$Manifests =
[
	[
		'Manifest' => __DIR__ . '/steamcommunity.com/public/javascript/applications/community/manifest.js',
		'Paths' =>
		[
			[ 'Prepend' => 'https://steamcommunity.com/public/javascript/applications/community/', 'Append' => '.js?__TIME__&l=english' ],
			[ 'Prepend' => 'https://steamcommunity.com/public/css/applications/community/', 'Append' => '.css?__TIME__' ],
		],
	],
	[
		'Manifest' => __DIR__ . '/store.steampowered.com/public/javascript/applications/store/manifest.js',
		'Paths' =>
		[
			[ 'Prepend' => 'https://store.steampowered.com/public/javascript/applications/store/', 'Append' => '.js?__TIME__&l=english' ],
			[ 'Prepend' => 'https://store.steampowered.com/public/css/applications/store/', 'Append' => '.css?__TIME__' ],
		],
	],
];

$Urls = [];
$Time = (string)time();

$c = curl_init( );

curl_setopt_array( $c, [
	CURLOPT_USERAGENT      => 'SteamDB',
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_NOBODY         => true,
	CURLOPT_TIMEOUT        => 5,
	CURLOPT_CONNECTTIMEOUT => 5,
] );

foreach( $Manifests as $Manifest )
{
	$Data = file_get_contents( $Manifest[ 'Manifest' ] );

	preg_match_all( '/\d+: "(.+)",$/m', $Data, $Matches );

	$Matches = array_unique( $Matches[ 1 ] );

	foreach( $Matches as $Match )
	{
		if( str_ends_with( $Match, '-json' ) && !str_ends_with( $Match, '_english-json' ) )
		{
			continue;
		}

		foreach( $Manifest[ 'Paths' ] as $Path )
		{
			$Url = $Path[ 'Prepend' ] . $Match . $Path[ 'Append' ];

			curl_setopt( $c, CURLOPT_URL, str_replace( '__TIME__', $Time, $Url ) );
			curl_exec( $c );
			
			if( curl_getinfo( $c, CURLINFO_HTTP_CODE ) === 200 )
			{
				echo 'Found url: ' . $Url . PHP_EOL;
				$Urls[] = $Url;
			}
		}
	}
}

$KnownUrls = ParseUrls();

echo PHP_EOL . 'New urls to add:' . PHP_EOL;

foreach( $Urls as $Url )
{
	if( !isset( $KnownUrls[ $Url ] ) )
	{
		echo $Url . PHP_EOL;
	}
}

function ParseUrls() : array
{
	$Data = file_get_contents( __DIR__ . '/urls.txt' );
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
			$Url = trim( $Line[ 1 ] );
		}
		else
		{
			$Url = $Line;
		}

		$Urls[ $Url ] = true;
	}

	return $Urls;
}
