<?php
declare(strict_types=1);

$KnownUrls = ParseUrls();

// Don't care about some libraries
$KnownUrls[ 'https://store.steampowered.com/public/javascript/applications/store/libraries.js?__TIME__&l=english' ] = true;
$KnownUrls[ 'https://store.steampowered.com/public/shared/css/motiva_sans.css?__TIME__' ] = true;
$KnownUrls[ 'https://store.steampowered.com/public/shared/css/ui-lightness/jquery-ui-1.7.2.custom.css?__TIME__' ] = true;
$KnownUrls[ 'https://store.steampowered.com/public/shared/javascript/dselect.js?__TIME__&l=english' ] = true;
$KnownUrls[ 'https://store.steampowered.com/public/shared/javascript/flot-0.8/jquery.flot.min.js?__TIME__&l=english' ] = true;
$KnownUrls[ 'https://store.steampowered.com/public/shared/javascript/flot-0.8/jquery.flot.resize.min.js?__TIME__&l=english' ] = true;
$KnownUrls[ 'https://store.steampowered.com/public/shared/javascript/flot-0.8/jquery.flot.selection.min.js?__TIME__&l=english' ] = true;
$KnownUrls[ 'https://store.steampowered.com/public/shared/javascript/flot-0.8/jquery.flot.time.min.js?__TIME__&l=english' ] = true;
$KnownUrls[ 'https://store.steampowered.com/public/shared/javascript/jquery-1.8.3.min.js?__TIME__&l=english' ] = true;
$KnownUrls[ 'https://store.steampowered.com/public/shared/javascript/jquery-ui-1.9.2.js?__TIME__&l=english' ] = true;
$KnownUrls[ 'https://store.steampowered.com/public/shared/javascript/tooltip.js?__TIME__&l=english' ] = true;
$KnownUrls[ 'https://steamcommunity.com/public/javascript/prototype-1.7.js?__TIME__&l=english' ] = true;
$KnownUrls[ 'https://steamcommunity.com/public/javascript/scriptaculous/_combined.js?__TIME__&l=english' ] = true;
$KnownUrls[ 'https://steamcommunity.com/public/javascript/jquery-1.11.1.min.js?__TIME__&l=english' ] = true;
$KnownUrls[ 'https://steamcommunity.com/public/javascript/applications/community/libraries.js?__TIME__&l=english' ] = true;

$Urls = [];
$Time = (string)time();

$c = curl_init( );

curl_setopt_array( $c, [
	CURLOPT_USERAGENT      => 'SteamDB',
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_TIMEOUT        => 5,
	CURLOPT_CONNECTTIMEOUT => 5,
	CURLOPT_URL            => 'https://store.steampowered.com/app/10',
] );

$Response = curl_exec( $c );

if( curl_getinfo( $c, CURLINFO_HTTP_CODE ) !== 200 )
{
	echo 'Bad response.';
	exit( 1 );
}

$FoundUrls = [];

libxml_use_internal_errors( true );

$DOM = new DOMDocument();
$DOM->loadHTML( $Response );

$Links = $DOM->getElementsByTagName( 'link' );

foreach( $Links as $Link )
{
	if( $Link->getAttribute( 'rel' ) !== 'stylesheet' )
	{
		continue;
	}

	$FoundUrls[] = $Link->getAttribute( 'href' );
}

$Scripts = $DOM->getElementsByTagName( 'script' );

foreach( $Scripts as $Script )
{
	$Url = $Script->getAttribute( 'src' );

	if( empty( $Url ) )
	{
		continue;
	}

	$FoundUrls[] = $Url;
}

echo PHP_EOL . 'New urls to add:' . PHP_EOL;

foreach( $FoundUrls as $Url )
{
	$UrlQuery = strrpos( $Url, '?' );

	if( $UrlQuery !== false )
	{
		$Url = substr( $Url, 0, $UrlQuery );
	}

	$Url = str_replace( [
		'store.cloudflare.steamstatic.com',
		'store.akamai.steamstatic.com',
		'community.cloudflare.steamstatic.com',
		'community.akamai.steamstatic.com',
	],
	[
		'store.steampowered.com',
		'store.steampowered.com',
		'steamcommunity.com',
		'steamcommunity.com',
	], $Url );

	if( str_ends_with( $Url, '.js' ) )
	{
		$Url .= '?__TIME__&l=english';
	}
	if( str_ends_with( $Url, '.css' ) )
	{
		$Url .= '?__TIME__';
	}

	if( !isset( $KnownUrls[ $Url ] )
	&& !isset( $KnownUrls[ str_replace( 'store.steampowered.com', 'steamcommunity.com', $Url ) ] )
	&& !isset( $KnownUrls[ str_replace( 'steamcommunity.com', 'store.steampowered.com', $Url ) ] )
	)
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
