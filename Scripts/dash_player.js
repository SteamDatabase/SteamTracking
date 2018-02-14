
// Logs messages to the console
function PlayerLog()
{
	var args = [ '%c[video]%c', 'color: cornflowerblue;', '' ].concat( Array.prototype.slice.call(arguments) );
		console.log.apply( console, args );
};

/////////////////////////////////////////////////////////////////
// DASH video player
/////////////////////////////////////////////////////////////////
function CDASHPlayer( elVideoPlayer )
{
	this.m_elVideoPlayer = elVideoPlayer;
	this.m_strMPD = '';
	this.m_loaders = [];
	this.m_mediaSource = null;
	this.m_tsLiveContentStarted = 0;
	this.m_rtVODResumeAtTime = 0;
	this.m_schUpdateMPD = null;
	this.m_xhrUpdateMPD = null;

	// info used in playback
	this.m_nVideoRepresentationIndex = -1;
	this.m_nAudioRepresentationIndex = 0;
	this.m_strAudioAdaptationID = null;
	this.m_strVideoAdaptationID = null;
	this.m_nPlayerHeight = 0;
	this.m_nCurrentDownloadBitRate = 0;
	this.m_nSavedPlaybackRate = 1.0;
	this.m_nLastDecodedFrames = 0;
	this.m_nLastDecodedFrameTime = 0;
	this.m_nCurrentFramerate = 0;
	this.m_strUniqueId = "";
	this.m_fCurrentRepresentationBandwidth = 0;
	this.m_nCurrentDownloadResolution = 0;
	this.m_nTrackBufferMS = CDASHPlayer.TRACK_BUFFER_MS;

	// EME-related
	this.m_tsLastEncryptedEvent = 0;
	this.m_bIsEmeActive = false;
	this.m_sKeySystemInUse = "";
	this.m_oActiveMediaKeysSession = null;
	this.m_bEMECapableHost = false;

	// player states
	this.m_bIsBuffering = true;
	this.m_bIsPlayingInUI = true;
	this.m_bExiting = false;
	this.m_nCurrentSeekTime = -1;
	this.m_nRepChangeTargetHeight = 0;

	// Logging
	this.m_nVideoBuffer = 0;
	this.m_nAudioBuffer = 0;
	this.m_nPlaybackWidth = 0;
	this.m_nPlaybackHeight = 0;
	this.m_nAudioBitRate = 0;
	this.m_nVideoBitRate = 0;
	this.m_nDownloadVideoWidth = 0;
	this.m_nDownloadVideoHeight = 0;
	this.m_bVideoLogVerbose = false;

	// For Server Event Logging
	this.m_nBandwidthTotal = 0;
	this.m_nBandwidthEntries = 0;
	this.m_nBandwidthMinimum = 0;
	this.m_nBandwidthMaximum = 0;

	// Captions
	this.m_VTTCaptionLoader = null;

	// Game state data
	this.m_fLastGameDataEventTriggerTime = 0;
	this.m_nLastGameDataEventArrayIndex = 0;
	this.m_schGameDataEventTimer = null;
	this.m_fGameDataEventTriggerPerf = 0;

	// dropped frames
	this.m_schDroppedFrames = null;
	this.m_nPrevDroppedFrames = 0;
	this.m_rgDroppedFrames = [];
	this.m_bDroppingFrames = false;
	this.m_tsDropFramesDetected = 0;
	this.m_tsLastWindowResize = 0;

	// Playback from reading HLS Manifest.
	this.m_bUseHLSManifest = false;
}

CDASHPlayer.TRACK_BUFFER_MS = 8000;
CDASHPlayer.TRACK_BUFFER_MAX_SEC = 4 * 60;
CDASHPlayer.TRACK_BUFFER_VOD_LOOKAHEAD_MS = 3 * 60 * 1000;
CDASHPlayer.DOWNLOAD_RETRY_MS = 500;
CDASHPlayer.MANIFEST_RETRY_MS = 2000;
CDASHPlayer.MANIFEST_MAX_RETRY_MS = 30 * 1000;
CDASHPlayer.GAMEDATA_TRIGGER_MS = 200;

CDASHPlayer.HAVE_NOTHING = 0;
CDASHPlayer.HAVE_METADATA = 1;
CDASHPlayer.HAVE_CURRENT_DATA = 2;
CDASHPlayer.HAVE_FUTURE_DATA = 3;
CDASHPlayer.HAVE_ENOUGH_DATA = 4;

CDASHPlayer.MAX_STANDARD_FRAMERATE = 30;

CDASHPlayer.prototype.StopDownloads = function()
{
	this.m_bExiting = true;
	for ( var i = 0; i < this.m_loaders.length; i++ )
	{
		this.m_loaders[i].Close();
	}

	if ( this.m_schUpdateMPD )
	{
		clearTimeout( this.m_schUpdateMPD );
		this.m_schUpdateMPD = null;
	}

	if ( this.m_xhrUpdateMPD )
	{
		this.m_xhrUpdateMPD.abort();
		this.m_xhrUpdateMPD = null;
	}
}

CDASHPlayer.prototype.Close = function()
{
	this.StopDownloads();

	this.m_loaders = [];
	if ( this.m_mediaSource )
	{
		$J( this.m_mediaSource ).off( '.DASHPlayerEvents' );
		if ( this.m_mediaSource.readyState != 'closed' )
			this.m_mediaSource.endOfStream();

		this.m_mediaSource = null;
	}

	$J( this.m_elVideoPlayer ).off( '.DASHPlayerEvents' );

	this.m_strMPD = '';
	this.m_tsLiveContentStarted = 0;
	this.m_rtVODResumeAtTime = 0;
	this.m_bIsBuffering = true;
	// Keep previously play state... If we were paused, remain paused, and if we were playing, then continue playing when we restart.
	// this.m_bIsPlayingInUI = true;
	this.m_nCurrentSeekTime = -1;
	this.m_nSavedPlaybackRate = 1.0;
	this.m_bExiting = false;
	this.m_nRepChangeTargetHeight = 0

	// For Server Event Logging
	this.m_nBandwidthTotal = 0;
	this.m_nBandwidthEntries = 0;
	this.m_nBandwidthMinimum = 0;
	this.m_nBandwidthMaximum = 0;

	// Stop game data triggering events
	if ( this.m_schGameDataEventTimer )
	{
		clearTimeout(this.m_schGameDataEventTimer);
		this.m_schGameDataEventTimer = null;
	}

	this.m_fLastGameDataEventTriggerTime = 0;
	this.m_nLastGameDataEventArrayIndex = 0;

	if ( this.m_VTTCaptionLoader )
	{
		this.m_VTTCaptionLoader.Close();
		this.m_VTTCaptionLoader = null;
	}

	if ( this.m_schDroppedFrames )
	{
		clearTimeout( this.m_schDroppedFrames );
		this.m_schDroppedFrames = null;
	}
	this.m_nPrevDroppedFrames = 0;
	this.m_rgDroppedFrames = [];
	this.m_bDroppingFrames = false;
	this.m_tsDropFramesDetected = 0;
	this.m_tsLastWindowResize = 0;

	if ( this.m_bIsEmeActive )
	{
		this.m_tsLastEncryptedEvent = 0;
		this.m_bIsEmeActive = false;
		this.m_sKeySystemInUse = "";
		if ( this.m_oActiveMediaKeysSession )
		{
			this.m_oActiveMediaKeysSession.close();
		}
		this.m_oActiveMediaKeysSession = null;
		this.m_nLicenseRenewalCount = 0;
	}
}

CDASHPlayer.prototype.CloseWithError = function( errorToTrigger, extraParameters )
{
	this.Close();
	$J( this.m_elVideoPlayer ).trigger( errorToTrigger || 'playbackerror', extraParameters || [] );
}

CDASHPlayer.prototype.SetUniqueId = function( strUniqueId )
{
	this.m_strUniqueId = strUniqueId.toString();
}

CDASHPlayer.prototype.PlayMPD = function( strURL, bUseMpdRelativePathForSegments, tsFirstAttempt )
{
	this.m_strMPD = strURL;

	if ( !tsFirstAttempt )
		tsFirstAttempt = performance.now();

	// load video player then init & parse
	var _player = this;
	this.m_xhrUpdateMPD = $J.ajax(
	{
		url: strURL,
		type: 'GET'
	})
	.done( function( data, status, xhr )
	{
		_player.m_xhrUpdateMPD = null;
		if ( _player.m_bExiting )
			return;

		// parse MPD file
		_player.m_mpd = new CMPDParser();
		if ( !_player.m_mpd.BParse( data, bUseMpdRelativePathForSegments, strURL ) )
		{
			PlayerLog( 'Failed to parse MPD file' );
			_player.CloseWithError( 'playbackerror', 'Parse MPD File Failure' );
			return;
		}

		// special handling for dynamic content
		if ( _player.BIsLiveContent() )
		{
			// schedule mpd reload
			if ( _player.m_mpd.minimumUpdatePeriod > 0 )
			{
				_player.m_schUpdateMPD = setTimeout( function() { _player.UpdateMPD(); }, _player.m_mpd.minimumUpdatePeriod * 1000 );
			}

			// calculate when the video started relative to system clock
			var strServerTime = xhr.getResponseHeader( 'date' );
			var nServerTimeMS = strServerTime ? new Date( strServerTime ).getTime() : Date.now();
			_player.m_tsLiveContentStarted = performance.now() - (nServerTimeMS - _player.m_mpd.availabilityStartTime.getTime());
			PlayerLog( 'server time: ' + strServerTime );
		}

		// HLS override: We only want the initial MPD loading, and the scheduling of future MPD readings.
		// This scheduled MPD reading will keep the viewer id fresh and will be use to determine if we need
		// to re-read the HLS master manifest if the servers to alter the bitrates it creates.
		//
		// Indicate the player is initialized and bail for the rest of the logic.
		if( _player.m_bUseHLSManifest )
		{
			_player.SetVideoPlayerInitialized();
			return;
		}

		// Initialize DRM if neccessary
		if ( _player.m_mpd.hasProtectedRepresentations )
		{
			if ( _player.m_bEMECapableHost )
				_player.InitializeEME();
			else
				_player.CloseWithError( 'drmerrordownload', 'PlayMPD DRM Init Failure' );
		}
		else
		{
			if ( !_player.BCreateLoaders() )
			{
				PlayerLog( 'Failed to create segment loaders' );
				_player.CloseWithError( 'playbackerror', 'Create Segment Loaders Failure' );
				return;
			}

			// can now init video controls and start playback
			_player.InitVideoControl();
		}
	})
	.fail( function()
	{
		_player.m_xhrUpdateMPD = null;
		if ( performance.now() - tsFirstAttempt > CDASHPlayer.MANIFEST_MAX_RETRY_MS )
		{
			PlayerLog( 'Failed to download: ' + _player.m_strMPD );
			return;
		}

		// retry
		PlayerLog( 'Failed to download, will retry: ' + _player.m_strMPD );
		_player.m_schUpdateMPD = setTimeout( function() { _player.PlayMPD( strURL, bUseMpdRelativePathForSegments, tsFirstAttempt ); }, CDASHPlayer.MANIFEST_RETRY_MS );
	});
}

CDASHPlayer.prototype.SetEMECapableHost = function ( bCapable )
{
	this.m_bEMECapableHost = bCapable;
}

//The DashPlayer is deeply intertwined with UI used for broadcast. However, most of the
// broadcast UI works for HLS playback. If this is set to true, we strategically skip out of certain
// Dash specific code.
CDASHPlayer.prototype.SetUseHLSManifest = function ( bUseHLSManifest ) {
	this.m_bUseHLSManifest = bUseHLSManifest;
};

CDASHPlayer.prototype.InitializeEME = function()
{
	var _player = this;

	// Merge all configurations into a single array per system
	var keySystemConfigurations = {};
	for ( var i = 0; i < _player.m_mpd.periods.length; ++i )
	{
		var period = _player.m_mpd.periods[i];
		for ( var j = 0; j < period.adaptationSets.length; ++j )
		{
			var adaptationSet = period.adaptationSets[j];
			if ( adaptationSet.isCencEncrypted )
			{
				for ( var system in adaptationSet.keySystems )
				{
					if ( !( system in keySystemConfigurations ) )
						keySystemConfigurations[ system ] = {
							distinctiveIdentifier: 'optional',
							persistentState: 'optional',
							initDataTypes: [ 'cenc' ],
							audioCapabilities: [],
							videoCapabilities: [],
						};

					adaptationSet.representations.forEach( function( representation ) {
						var robustnesses = [ 'HW_SECURE_DECODE', 'SW_SECURE_DECODE' ];
						if ( adaptationSet.containsAudio ) {
							robustnesses.push( 'SW_SECURE_CRYPTO' )
						}
						for ( var k = 0; k < robustnesses.length; ++k  ) {
							var capability = { contentType: representation.mimeType + '; codecs="' + representation.codecs + '"', robustness: robustnesses[ k ] };

							if ( adaptationSet.containsAudio ) {
								keySystemConfigurations[ system ].audioCapabilities.push( capability );
							} else if ( adaptationSet.containsVideo ) {
								keySystemConfigurations[ system ].videoCapabilities.push( capability );
							}
						}
					});
				}
			}
		}
	}

	var nTimeBetweenRetriesMs = 500;
	var nMaxRetries = 10;
	var nRetries = 0;
	var _init = function() {
		// Attempt to initialize systems
		var nKeySystemsToTry = Object.keys( keySystemConfigurations ).length;
		var _requestMediaKeyAccess = function( system )
		{
			navigator.requestMediaKeySystemAccess( system, [ keySystemConfigurations[ system ] ] ).then(
				function( keySystemAccess ) {
					PlayerLog( 'Browser video robustness capability', keySystemAccess.getConfiguration().videoCapabilities[ 0 ].robustness );
					return keySystemAccess.createMediaKeys();
				}
			).then(
				function( createdMediaKeys ) {
					PlayerLog( 'Initialized media key system', system );
					_player.m_elVideoPlayer.addEventListener( 'encrypted', function( event ) { _player.OnEncrypted( event ) }, false );
					_player.m_elVideoPlayer.setMediaKeys( createdMediaKeys );
					_player.m_bIsEmeActive = true;
					_player.m_sKeySystemInUse = system;

					$J( _player.m_elVideoPlayer ).trigger( 'completedwidevine' );
					if ( !_player.BCreateLoaders() )
					{
						PlayerLog( 'Failed to create segment loaders' );
						_player.CloseWithError( 'playbackerror', 'Create DRM Segment Loaders Failure' );
						return;
					}

					_player.InitVideoControl();
				}
			).catch(
				function(error) {
					PlayerLog( 'Failed to initialize EME: ', error.message );
					if ( error.message == 'Unsupported keySystem' ) {
						$J( _player.m_elVideoPlayer ).trigger( 'waitingforwidevine' );
						if ( --nKeySystemsToTry === 0 ) {
							if ( ++nRetries >= nMaxRetries ) {
								PlayerLog( 'Failed to initialize EME after ' + nMaxRetries + ' retries, giving up and erroring.' );
								_player.CloseWithError( 'drmerrordownload', 'Initialize EME' );
							} else {
								PlayerLog( 'Failed to initialize EME, retrying initialization in ' + nTimeBetweenRetriesMs + 'ms' );
								setTimeout( _init, nTimeBetweenRetriesMs );
							}
						}
					} else {
						_player.CloseWithError( 'drmerror', [ 'Initialize EME: ' + error.message ] );
					}
				}
			);
		};

		for ( var system in keySystemConfigurations )
		{
			_requestMediaKeyAccess( system );
		}
	};
	_init();
}

CDASHPlayer.prototype.OnEncrypted = function( event )
{
	var _player = this;

	// We can get a dupicate event for the audio and video track starting, but we only want to send one license request.
	if ( event.timestamp == _player.m_tsLastEncryptedEvent)
	{
		return;
	}
	_player.m_tsLastEncryptedEvent = event.timestamp;

	PlayerLog( 'Found encrypted content.' );

		try
	{

			// From CEF/Chrome 59 on, we need to pass in the Widevine License Server Cert for Validated Media Path to work.
			// setServerCertificate is valid from Chrome 42, so this will function just fine for older Steam Clients.
			// This needs to happen before mediaKeys.createSession, but after the mediaKeys have been created.
			var xhrWidevineCert = new XMLHttpRequest();
			xhrWidevineCert.open( 'GET', 'https://store.steampowered.com/public/data/widevine/cert_license_widevine_com.bin' );
			xhrWidevineCert.timeout = 15000;
			xhrWidevineCert.send();
			xhrWidevineCert.responseType = 'arraybuffer';
			xhrWidevineCert.addEventListener( 'readystatechange', function ()
			{
				if ( xhrWidevineCert.readyState == xhrWidevineCert.DONE )
				{
					_player.m_elVideoPlayer.mediaKeys.setServerCertificate( xhrWidevineCert.response ).then(
						function()
						{

	
				var session = _player.m_elVideoPlayer.mediaKeys.createSession();
				_player.m_oActiveMediaKeysSession = session;
				session.addEventListener( 'message', function ( event ) { _player.OnMessage( session, event ) }, false );
				session.generateRequest( event.initDataType, event.initData ).catch(
					function ( error )
					{
						PlayerLog( 'Failed to generate a license request', error );
						_player.CloseWithError( 'drmerror', [ 'Generate License Request Failure: ' + error.message ] );
					}
				);

	
						}
					).catch(
						function(error)
						{
							PlayerLog( 'Failed to set the Widevine Server Certificate', error );
							_player.CloseWithError( 'drmerror', [ 'Widevine Server Certificate Failure: ' + error.message ] );
						}
					);
				}
			}, false );
		}
		catch ( e )
		{
			PlayerLog( 'Failed to download the Widevine Server Certificate', e );
			_player.CloseWithError( 'drmerror', [ 'Widevine Server Certificate Download Failure: ' + e ] );
		}

	
}

CDASHPlayer.prototype.OnMessage = function( session, event )
{
	var _player = this;
	PlayerLog( 'Requesting license.' );

	var xhr = new XMLHttpRequest();

			xhr.open( 'POST', 'https://store.steampowered.com/video/license/' + this.m_strUniqueId, true );
		xhr.responseType = 'arraybuffer';
	var payload = btoa(String.fromCharCode.apply( null, new Uint8Array( event.message ) ) );
	xhr.send( payload );
	xhr.addEventListener( 'readystatechange', function ()
	{
		if ( xhr.readyState == xhr.DONE )
		{
			PlayerLog( 'License request completed.' );
			session.update( xhr.response ).then(function () {
				// Check media key statuses
				session.keyStatuses.forEach( function( keyId, status ) {
					// Some implementations pass these parameters backwards, check for that.
					if ( typeof keyId === 'string' )
					{
						var tmp = keyId;
						keyId = status;
						status = tmp;
					}

					if ( status !== 'usable' && status !== 'status-pending' && status !== 'output-downscaled' )
					{
						PlayerLog( "Couldn't use an encryption key.", btoa(String.fromCharCode.apply(null, new Uint8Array(keyId))), status );
						var errType = ( status === 'output-restricted' || status === 'output-not-allowed' ) ? 'hdcperror' : 'drmerror';
						_player.CloseWithError( errType, 'Invalid Encryption Key' );
					}
				});

				_player.m_nLicenseRenewalCount = 0;

			},function( reason ) {

				var msg = 'Update DRM Session Failure: ' + reason + ' [HTTP:' + xhr.status + ']';
				if ( xhr.status == 500 )
				{
					try {
						var jsonResult = JSON.parse( String.fromCharCode.apply( null, new Uint8Array( xhr.response ) ) );
						msg += ' [EResult:' + jsonResult.result + ']';
					}
					catch ( e ) { }
				}

				PlayerLog( 'Failed to update DRM session: ', msg );

				// only stop playback if it's an initial license request
				if ( event.messageType == 'license-request' )
					_player.CloseWithError( 'drmerror', [ msg ] );

				// otherwise give the EME a few attempts to try to renew
				if ( event.messageType == 'license-renewal' )
				{
					_player.m_nLicenseRenewalCount++;
					if ( _player.m_nLicenseRenewalCount > 12 )
						_player.CloseWithError( 'drmerror', [ msg + ' [Renewal Failure]' ] );
				}
			});
		}
	});
}

CDASHPlayer.prototype.UpdateMPD = function()
{
	this.m_schUpdateMPD = null;
	if ( this.m_bExiting )
		return;

	// load video player then init & parse
	var _player = this;
	this.m_xhrUpdateMPD = $J.ajax(
	{
		url: _player.m_strMPD,
		type: 'GET'
	})
	.done( function( data, status, xhr )
	{
		_player.m_xhrUpdateMPD = null;
		if ( _player.m_bExiting )
			return;

		var numRepresentations = _player.m_mpd.GetMPDRepresentationCount();

		// parse MPD file
		if ( !_player.m_mpd.BUpdate( data ) )
		{
			PlayerLog( 'Failed to update MPD file' );
			_player.CloseWithError( 'playbackerror', 'Update MPD File Failure' );
			return;
		}

		// If the number of representation changes, then we need to reload the HLS player, which
		// cause it to re-fetch the master manifest updating its versions of representations.
		//
		// The difference in count is sufficient, because we don't tinker with their bitrates unless if
		// we are adding or remove. We don't alter in-flight representations in anyway for broadcast. This is only
		// for live playback.
		if( _player.m_bUseHLSManifest && (numRepresentations !== _player.m_mpd.GetMPDRepresentationCount() ) && _player.BIsLiveContent() )
		{
			_player.m_elVideoPlayer.load();
			_player.m_elVideoPlayer.play();
		}

		// if dynamic, schedule mpd reload
		if ( _player.BIsLiveContent() && _player.m_mpd.minimumUpdatePeriod > 0 )
			_player.m_schUpdateMPD = setTimeout( function() { _player.UpdateMPD(); }, _player.m_mpd.minimumUpdatePeriod * 1000 );

	})
	.fail( function()
	{
		_player.m_xhrUpdateMPD = null;
		PlayerLog( 'Failed to download: ' + _player.m_strMPD );
		_player.m_schUpdateMPD = setTimeout( function() { _player.UpdateMPD(); }, CDASHPlayer.MANIFEST_RETRY_MS );
	});
}

CDASHPlayer.prototype.BCreateLoaders = function()
{
	// only support 1 period
	if ( this.m_mpd.periods.length == 0 )
		return false;

	var period = this.m_mpd.periods[0];

	var bNeedVideo = true;
	var bNeedAudio = true;

	// validate saved video track
	var adaptationVideo = this.GetAdaptationByTrackID( this.m_strVideoAdaptationID );
	if ( !adaptationVideo || !adaptationVideo.containsVideo )
		this.m_strVideoAdaptationID = null;

	// validate saved audio track
	var adaptationAudio = this.GetAdaptationByTrackID( this.m_strAudioAdaptationID );
	if ( !adaptationAudio || !adaptationAudio.containsAudio )
		this.m_strAudioAdaptationID = null;

	for ( var i = 0; i < period.adaptationSets.length; i++ )
	{
		var adaptation = period.adaptationSets[i];

		// tracks could be in same adaptation set
		var keep = null;
		if ( bNeedVideo && adaptation.containsVideo )
		{
			// restore video adaptation if appropriate
			if ( this.m_strVideoAdaptationID != null )
			{
				if ( this.m_strVideoAdaptationID == adaptation.id )
				{
					keep = adaptation;
					bNeedVideo = false;
				}
			}
			else if ( adaptation.roles.length == 0 || ( adaptation.roles.length > 0 && adaptation.roles[0] == 'main' ) )
			{
				// if there are roles, find the first main video track
				keep = adaptation;
				bNeedVideo = false;
				this.m_strVideoAdaptationID = adaptation.id;
			}
		}

		if ( bNeedAudio && adaptation.containsAudio )
		{
			// restore audio adaptation if appropriate
			if ( this.m_strAudioAdaptationID != null )
			{
				if ( this.m_strAudioAdaptationID == adaptation.id )
				{
					keep = adaptation;
					bNeedAudio = false;
				}
			}
			else if ( adaptation.roles.length == 0 || ( adaptation.roles.length > 0 && adaptation.roles[0] == 'main' ) )
			{
				keep = adaptation;
				bNeedAudio = false;
				this.m_strAudioAdaptationID = adaptation.id;
			}
		}

		if ( keep )
		{
			var loader = new CSegmentLoader( this, keep );
			this.m_loaders.push( loader );
		}

		if ( !bNeedVideo && !bNeedAudio )
			break;
	}

	for ( var i = 0; i < period.adaptationSets.length; i++ )
	{
		var adaptation = period.adaptationSets[i];
		if ( adaptation.containsGame )
		{
			var loader = new CSegmentLoader( this, adaptation );
			this.m_loaders.push( loader );

			// ensure no existing event timer
			if ( this.m_schGameDataEventTimer )
				clearTimeout( this.m_schGameDataEventTimer );

			var _player = this;
			this.m_schGameDataEventTimer = setTimeout( function() { _player.GameDataEventTrigger(); }, CDASHPlayer.GAMEDATA_TRIGGER_MS );

			break;
		}
	}

	// want to always play video
	return !bNeedVideo;
}

CDASHPlayer.prototype.GameDataEventTrigger = function()
{
	var start = performance.now();
	var _player = this;
	var nCurrentTime = _player.m_elVideoPlayer.currentTime;
	// PlayerLog( 'GameDataEventTrigger at ' + nCurrentTime );

	// get the video buffer start for clearing data shortly
	var nStartVideoTime = 0;
	for (var i = 0; i < _player.m_loaders.length; i++)
	{
		if ( _player.m_loaders[i].ContainsVideo() )
		{
			nStartVideoTime = _player.m_loaders[i].GetBufferedStart();
			break;
		}
	}

	// now trigger events with the data that needs to be broadcast
	for (var i = 0; i < _player.m_loaders.length; i++)
	{
		if ( _player.m_loaders[i].ContainsGame() )
		{
			// clear out of range frames and then get the up to date set
			var nFramesRemoved = _player.m_loaders[i].ClearGameDataFramesBefore( nStartVideoTime );
			var rgGameFrames = _player.m_loaders[i].GetGameDataFrames();

			// start at last frame checked unless watcher skipped back in time
			var g = 0;
			if ( _player.m_fLastGameDataEventTriggerTime < nCurrentTime )
			{
				g = Math.max( _player.m_nLastGameDataEventArrayIndex - nFramesRemoved, 0 );

				// make sure we are scanning a valid array range
				if ( g >= rgGameFrames.length )
					_player.m_nLastGameDataEventArrayIndex = g = 0;
			}

			var triggerFrame = null;
			for ( g ; g < rgGameFrames.length; g++ )
			{
				_player.m_nLastGameDataEventArrayIndex = g;
				if ( ( rgGameFrames[g].pts / 1000 ) < nCurrentTime )
				{
					triggerFrame = rgGameFrames[g];
				}
				else
				{
					break;
				}
			}

			if ( triggerFrame != null )
			{
				// PlayerLog( 'Found GameData to Trigger: ' + triggerFrame.pts  / 1000 + ', ' + nCurrentTime );
				$J( _player.m_elVideoPlayer ).trigger( 'gamedataupdate', [ triggerFrame.pts, triggerFrame.gamedata ] );
			}
		}
	}

	_player.m_fLastGameDataEventTriggerTime = nCurrentTime;
	this.m_schGameDataEventTimer = setTimeout( function() { _player.GameDataEventTrigger(); }, CDASHPlayer.GAMEDATA_TRIGGER_MS );

	this.m_fGameDataEventTriggerPerf = performance.now() - start;
}

CDASHPlayer.prototype.InitVideoControl = function()
{
	// create the media source
	var mediaSource = new window.MediaSource();
	var mediaURL = URL.createObjectURL(mediaSource);
	this.m_elVideoPlayer.pause();
	this.m_elVideoPlayer.src = mediaURL;
	this.m_mediaSource = mediaSource;

	// need to wait for the source to open then can add buffers
	var _player = this;
	$J( mediaSource ).on( 'sourceopen.DASHPlayerEvents', function() { _player.OnMediaSourceOpen(); });
	$J( mediaSource ).on( 'sourceended.DASHPlayerEvents', function( e ) { _player.OnMediaSourceEnded( e ); });
	$J( mediaSource ).on( 'sourceclose.DASHPlayerEvents', function( e ) { _player.OnMediaSourceClose( e ); });

	$J( this.m_elVideoPlayer ).on( 'stalled.DASHPlayerEvents', function() { _player.OnVideoStalled(); });
	$J( this.m_elVideoPlayer).on( 'error.DASHPlayerEvents', function( e ) { _player.OnVideoError( e ); });
	$J( window ).on( 'resize.DASHPlayerEvents', function() { _player.OnWindowResize(); });

	$J( this.m_elVideoPlayer ).on( 'changeuiplayingstate.DASHPlayerEvents', function( e, playing ) { _player.SavePlaybackStateFromUI( playing ); } );
}

CDASHPlayer.prototype.OnMediaSourceOpen = function()
{
	for ( var i = 0; i < this.m_loaders.length; i++ )
	{
		this.m_loaders[i].SetMediaSource( this.m_mediaSource );
	}

	this.BeginPlayback();
}

CDASHPlayer.prototype.OnMediaSourceEnded = function( e )
{
	PlayerLog( 'Media source ended' );
}

CDASHPlayer.prototype.OnMediaSourceClose = function( e )
{
		PlayerLog( 'Media source closed' );
	this.Close();
}

CDASHPlayer.prototype.SetVODResumeTime = function( nTime )
{
	this.m_rtVODResumeAtTime = nTime;
}

CDASHPlayer.prototype.BeginPlayback = function()
{
	var unStartTime = 0;

	if ( this.BIsLiveContent() )
	{
		this.m_nTrackBufferMS = CMPDParser.GetSegmentDuration( this.GetCurrentVideoAdaptation() );
		unStartTime = Math.floor( performance.now() - this.m_tsLiveContentStarted - this.m_nTrackBufferMS );
	}
	else
	{
		this.m_nTrackBufferMS = CDASHPlayer.TRACK_BUFFER_MS;
		var unVideoDuration = Math.floor( this.m_mpd.GetPeriodDuration(0) ) - ( this.GetTrackBufferMS() / 1000 );
		if ( 0 < this.m_rtVODResumeAtTime && this.m_rtVODResumeAtTime < unVideoDuration )
		{
			unStartTime = this.m_rtVODResumeAtTime * 1000;
		}
	}

	for ( var i = 0; i < this.m_loaders.length; i++ )
	{
		this.m_loaders[i].BeginPlayback( unStartTime );
	}

	this.SetVideoPlayerInitialized();
	this.m_nLastDecodedFrameTime = performance.now();
}

CDASHPlayer.prototype.SetVideoPlayerInitialized = function()
{
	$J( this.m_elVideoPlayer ).trigger( 'dash_player_initialized' );
}

CDASHPlayer.prototype.OnVideoBufferProgress = function()
{
	if ( !this.BIsBuffering() )
		return;

	if ( this.m_nCurrentSeekTime != -1 )
		this.m_elVideoPlayer.currentTime = this.m_nCurrentSeekTime;

	// when all loaders have enough buffered data, play
	var bPlay = ( this.m_loaders.length > 0 );
	var nStartPlayback = ( this.m_nCurrentSeekTime != -1 ) ? this.m_nCurrentSeekTime : 0;
	for ( var i = 0; i < this.m_loaders.length; i++ )
	{
		if ( this.m_loaders[i].m_bSeekInProgress || !this.m_loaders[i].BIsLoaderBuffered() )
		{
			bPlay = false;
			break;
		}

		nStartPlayback = Math.max( nStartPlayback, this.m_loaders[i].GetBufferedStart() );
	}

	if ( bPlay && this.m_elVideoPlayer.readyState != CDASHPlayer.HAVE_NOTHING )
	{
		this.m_bIsBuffering = false;
		this.m_nCurrentSeekTime = -1;

		this.m_elVideoPlayer.currentTime = nStartPlayback;

		if ( this.m_bIsPlayingInUI )
		{
			this.m_elVideoPlayer.play();
		}

		this.m_elVideoPlayer.playbackRate = this.m_nSavedPlaybackRate;

		$J( this.m_elVideoPlayer ).trigger( 'bufferingcomplete' );

		if ( !this.m_schDroppedFrames )
		{
			var _player = this;
			this.m_schDroppedFrames = setTimeout( function() { _player.MeasureDroppedFrames(); }, 1000 );
		}
	}
}

CDASHPlayer.prototype.MeasureDroppedFrames = function()
{
	var _player = this;
	this.m_schDroppedFrames = setTimeout( function() { _player.MeasureDroppedFrames(); }, 1000 );
	var tsNow = performance.now();

	var nDroppedTotal = ( this.m_elVideoPlayer.webkitDroppedFrames || this.m_elVideoPlayer.webkitDroppedFrameCount );
	var bExceededLimit = false;
	var nDropped = nDroppedTotal - this.m_nPrevDroppedFrames;
	if ( this.m_nPrevDroppedFrames > 0 && nDropped > 1 && (tsNow - this.m_tsLastWindowResize) > 2000 )
		bExceededLimit = true;

	this.m_nPrevDroppedFrames = nDroppedTotal;
	this.m_rgDroppedFrames.push( bExceededLimit );
	if ( this.m_rgDroppedFrames.length <= 6 )
		return;

	this.m_rgDroppedFrames.splice(0, this.m_rgDroppedFrames.length - 6 );
	if ( this.m_bDroppingFrames && tsNow - this.m_tsDropFramesDetected < 5 * 60 * 1000 )
		return;

	var cRecentDrops = 0;
	for ( var i = 0; i < this.m_rgDroppedFrames.length; i++ )
	{
		if ( this.m_rgDroppedFrames[i] )
			cRecentDrops++;
	}

	//console.log( 'Dropped - total=' + nDroppedTotal + ' new=' + nDropped + ' exceed=' + bExceededLimit + ' length=' + this.m_rgDroppedFrames.length + ' recentdrops=' + cRecentDrops );

	if ( cRecentDrops >= 3 )
	{
		this.m_bDroppingFrames = true;
		this.m_tsDropFramesDetected = tsNow;
		console.log( 'dropped too many' );
	}
	else
	{
		this.m_bDroppingFrames = false;
	}
}

CDASHPlayer.prototype.OnWindowResize = function()
{
	this.m_tsLastWindowResize = performance.now();
}

CDASHPlayer.prototype.OnVideoStalled = function()
{
	if ( !this.BIsBuffering() )
	{
		this.UpdateStats();
		for ( var i = 0; i < this.m_loaders.length; i++ )
		{
			if ( this.m_loaders[i].BIsLoaderStalling() )
			{
				if ( !this.BIsLiveContent() )
					this.SavePlaybackStateForBuffering( this.m_elVideoPlayer.currentTime );

				$J( this.m_elVideoPlayer ).trigger( 'playbackstalled', [ this.m_loaders[i].ContainsVideo() ] );

				break;
			}
		}

		// increase increase buffer to try and prevent future stalls
		this.m_nTrackBufferMS += CMPDParser.GetSegmentDuration( this.GetCurrentVideoAdaptation() );
		this.m_nTrackBufferMS = Math.min( this.m_nTrackBufferMS, CDASHPlayer.TRACK_BUFFER_MS );
	}
}

CDASHPlayer.prototype.OnVideoError = function( e )
{
	var nCode = 0;
	if ( this.m_elVideoPlayer.error )
		nCode = this.m_elVideoPlayer.error.code;

	var strError = 'unknown';
	if ( nCode == MediaError.MEDIA_ERR_ABORTED )
		strError = 'aborted';
	else if ( nCode == MediaError.MEDIA_ERR_DECODE )
		strError = 'decode';
	else if ( nCode == MediaError.MEDIA_ERR_NETWORK )
		strError = 'network';
	else if ( nCode == MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED )
		strError = 'not supported';
	else
		strError = nCode;

	console.log( 'Video player error: ' + strError );
	this.CloseWithError( 'mediaelementerror', nCode );
}

CDASHPlayer.prototype.OnTimeUpdate = function()
{
	if ( this.BIsBuffering() )
		return;

	if ( this.m_elVideoPlayer.paused )
		return;

	var nCurrentTime = this.m_elVideoPlayer.currentTime;
	var nPrevTime = nCurrentTime;
	var loader = this.GetVideoLoader();
	if ( loader && loader.GetNumBuffers() > 1 )
		nCurrentTime = loader.GetNextBufferedTime( nCurrentTime );

	loader = this.GetAudioLoader();
	if ( loader && loader.GetNumBuffers() > 1 )
		nCurrentTime = loader.GetNextBufferedTime( nCurrentTime );

	if ( nCurrentTime != nPrevTime )
	{
		console.log('not in buffered range, advance time: ' + nCurrentTime );
		this.SeekTo( nCurrentTime );
	}
}

CDASHPlayer.prototype.OnSegmentDownloaded = function()
{
	this.UpdateStats();
	this.UpdateVideoRepresentation( this.m_nVideoRepresentationIndex, false );
	$J( this.m_elVideoPlayer ).trigger( 'bufferedupdate' );
	this.OnVideoBufferProgress();
}

CDASHPlayer.prototype.OnSegmentDownloadFailed = function( strReason )
{
		this.StopDownloads();
	$J( this.m_elVideoPlayer ).trigger( 'downloadfailed', strReason );
}

CDASHPlayer.prototype.BIsBuffering = function()
{
	return this.m_bIsBuffering || this.m_elVideoPlayer.readyState == CDASHPlayer.HAVE_NOTHING;
}

CDASHPlayer.prototype.BIsLiveContent = function()
{
	if (this.m_mpd)
	{
		return (this.m_mpd.type == 'dynamic');
	}
	else
	{
		return true;
	}
}

CDASHPlayer.prototype.GetTrackBufferMS = function()
{
	return this.m_nTrackBufferMS;
}

CDASHPlayer.prototype.GetPercentBuffered = function()
{
	var unVideoBuffered = 0;
	var unAudioBuffered = 0 ;

	for ( var i = 0; i < this.m_loaders.length; i++ )
	{
		if ( this.m_loaders[i].m_bSeekInProgress )
			return 0;

		if ( this.m_loaders[i].ContainsVideo() )
		{
			unVideoBuffered = Math.min( this.m_nVideoBuffer * 100 / this.GetTrackBufferMS(), 100 );
		}

		if ( this.m_loaders[i].ContainsAudio() && !this.m_loaders[i].ContainsVideo() )
		{
			unAudioBuffered = Math.min( this.m_nAudioBuffer * 100 / this.GetTrackBufferMS(), 100 );
		}
	}

	return Math.min( unVideoBuffered, unAudioBuffered ).toFixed(0);
}

CDASHPlayer.prototype.GetLiveBufferWindow = function()
{
	return CDASHPlayer.TRACK_BUFFER_MAX_SEC;
}

CDASHPlayer.prototype.SeekToBufferedEnd = function()
{
	var nStartPlayback = null;
	for ( var i = 0; i < this.m_loaders.length; i++ )
	{
		if ( this.m_loaders[i].ContainsGame() )
			continue;

		if ( nStartPlayback == null )
		{
			nStartPlayback = this.m_loaders[i].GetBufferedEnd();
			continue;
		}

		nStartPlayback = Math.min( nStartPlayback, this.m_loaders[i].GetBufferedEnd() );
	}

	if ( nStartPlayback == null )
		return;

	nStartPlayback -= ( this.GetTrackBufferMS() / 1000 );
	if ( nStartPlayback > 0 )
		this.m_elVideoPlayer.currentTime = nStartPlayback;
}

CDASHPlayer.prototype.SeekTo = function( nTime )
{
	// bounds check the seek request
	var minSeek = 0.0;
	var maxSeek = Number.MAX_VALUE;
	if ( this.BIsLiveContent() )
	{
		for ( var i = 0; i < this.m_loaders.length; i++ )
		{
			if ( this.m_loaders[i].ContainsVideo() || this.m_loaders[i].ContainsAudio() )
			{
				minSeek = Math.max( this.m_loaders[i].GetBufferedStart() + ( this.GetTrackBufferMS() / 1000 ), minSeek );
				maxSeek = Math.min( this.m_loaders[i].GetBufferedEnd() - ( this.GetTrackBufferMS() / 1000 ), maxSeek );
			}
		}
	}
	else
	{
		maxSeek = this.m_mpd.GetPeriodDuration(0) - 1;
	}

	if ( minSeek > nTime )
		nTime = minSeek;
	else if ( nTime > maxSeek )
		nTime = maxSeek;

	// now do the seek
	var bCanSeekImmediately = true;
	for (var i = 0; i < this.m_loaders.length; i++)
	{
		bCanSeekImmediately &= this.m_loaders[i].SeekToSegment( nTime, false );
	}

	if ( bCanSeekImmediately )
	{
		this.m_elVideoPlayer.currentTime = nTime;
	}
	else
	{
		this.SavePlaybackStateForBuffering( nTime );
	}

	// return the actual time seeked to
	return nTime;
}

CDASHPlayer.prototype.SkipTime = function( nTimeDelta )
{
	var nTime = this.m_elVideoPlayer.currentTime + nTimeDelta;
	return this.SeekTo( nTime );
}

CDASHPlayer.prototype.BIsLiveEdge = function( nTime )
{
	// return true time passed in is within the live edge period and currently playing
	if ( this.BIsLiveContent() && this.m_bIsPlayingInUI )
	{
		for ( var i = 0; i < this.m_loaders.length; i++ )
		{
			if ( this.m_loaders[i].ContainsVideo() )
			{
				if ( this.m_loaders[i].GetBufferedEnd() - nTime < ( this.GetTrackBufferMS() / 1000 ) * 2 )
					return true;
			}
		}
	}

	return false;
}

CDASHPlayer.prototype.SavePlaybackStateFromUI = function ( bPlaying )
{
	this.m_bIsPlayingInUI = bPlaying;
}

CDASHPlayer.prototype.SavePlaybackStateForBuffering = function( nSeekTime )
{
	this.m_elVideoPlayer.pause();
	this.m_nCurrentSeekTime = nSeekTime;
	this.m_bIsBuffering = true;
}

CDASHPlayer.prototype.GetClosedCaptionsArray = function()
{
	var period = this.m_mpd.periods[0];
	var rgClosedCaptions = [];

	for ( var i = 0; i < period.adaptationSets.length; i++ )
	{
		var adaptation = period.adaptationSets[i];
		if ( adaptation.isClosedCaption )
		{
			var language = {
				code: adaptation.language,
				display: adaptation.language,
				url: adaptation.representations[0].closedCaptionFile,
				roles: adaptation.roles,
			};

			for ( var lang in CVTTCaptionLoader.LanguageCountryCodes )
			{
				if ( lang.toUpperCase() == language.code.toUpperCase() )
				{
					language.display = CVTTCaptionLoader.LanguageCountryCodes[lang].displayName;
				}
			}

			rgClosedCaptions.push(language);
		}
	}

	return rgClosedCaptions;
}

CDASHPlayer.prototype.GetAllAudioAdaptations = function()
{
	var period = this.m_mpd.periods[0];
	var rgAudioAdaptations = [];

	for ( var i = 0; i < period.adaptationSets.length; i++ )
	{
		var adaptation = period.adaptationSets[i];
		if ( adaptation.containsAudio )
		{
			rgAudioAdaptations.push( adaptation );
		}
	}

	return rgAudioAdaptations;
}

CDASHPlayer.prototype.GetAllVideoAdaptations = function()
{
	var period = this.m_mpd.periods[0];
	var rgVideoAdaptations = [];

	for ( var i = 0; i < period.adaptationSets.length; i++ )
	{
		var adaptation = period.adaptationSets[i];
		if ( adaptation.containsVideo )
		{
			rgVideoAdaptations.push( adaptation );
		}
	}

	return rgVideoAdaptations;
}

CDASHPlayer.prototype.GetCurrentAudioAdaptation = function()
{
	return this.GetAdaptationByTrackID( this.m_strAudioAdaptationID );
}

CDASHPlayer.prototype.GetCurrentVideoAdaptation = function()
{
	return this.GetAdaptationByTrackID( this.m_strVideoAdaptationID );
}

CDASHPlayer.prototype.GetRepresentationsArray = function ( bVideo )
{
	var rgRespresentations = [];

	if ( this.m_loaders )
	{
		for (var i = 0; i < this.m_loaders.length; i++)
		{
			if ( bVideo && this.m_loaders[i].ContainsVideo() )
			{
				for (var b = 0; b < this.m_loaders[i].GetRepresentationsCount(); b++)
				{
					var representation = {
						height: 0,
						bandwidth: 0,
						frameRate: 0,
					};

					if (this.m_loaders[i].m_adaptation.representations[b].height != null)
					{
						representation.height = this.m_loaders[i].m_adaptation.representations[b].height;
					}

					representation.bandwidth = this.m_loaders[i].m_adaptation.representations[b].bandwidth;
					representation.frameRate = this.m_loaders[i].m_adaptation.representations[b].frameRate;

					rgRespresentations.push( representation );
				}
			}
			else if ( !bVideo && this.m_loaders[i].ContainsAudio() )
			{
				for (var b = 0; b < this.m_loaders[i].GetRepresentationsCount(); b++)
				{
					var representation = {
						audioChannels: this.m_loaders[i].m_adaptation.representations[b].audioChannels,
						bandwidth: this.m_loaders[i].m_adaptation.representations[b].bandwidth,
					}

					rgRespresentations.push( representation );
				}
			}
		}
	}

	return rgRespresentations;
}

CDASHPlayer.prototype.GetVideoLoader = function()
{
	for ( var i = 0; i < this.m_loaders.length; i++ )
	{
		if ( this.m_loaders[i].ContainsVideo() )
			return this.m_loaders[i];
	}

	return null;
}

CDASHPlayer.prototype.GetAudioLoader = function()
{
	for ( var i = 0; i < this.m_loaders.length; i++ )
	{
		if ( this.m_loaders[i].ContainsAudio() )
			return this.m_loaders[i];
	}

	return null;
}

CDASHPlayer.prototype.GetAdaptationByTrackID = function( strAdaptationID )
{
	var period = this.m_mpd.periods[0];
	for ( var i = 0; i < period.adaptationSets.length; i++ )
	{
		if ( strAdaptationID == period.adaptationSets[i].id )
			return period.adaptationSets[i];
	}

	return null;
}

CDASHPlayer.prototype.SetAudioAdaptationIndex = function ( strAdaptationID )
{
	if ( typeof this.m_mpd !== 'undefined' && this.GetAdaptationByTrackID( strAdaptationID ) != null )
		this.m_strAudioAdaptationID = strAdaptationID;
	else if ( strAdaptationID != null )
		this.m_strAudioAdaptationID = strAdaptationID;
}

CDASHPlayer.prototype.UpdateAudioAdaptationSet = function ( strAdaptationID )
{
	if ( strAdaptationID == this.m_strAudioAdaptationID )
		return;

	// find the adaptation based on the track id passed in
	var adaptation = this.GetAdaptationByTrackID( strAdaptationID );
	if ( adaptation && adaptation.containsAudio )
	{
		this.m_strAudioAdaptationID = strAdaptationID;
		this.GetAudioLoader().ChangeAdaptationSet( adaptation );
		this.UpdateAudioRepresentation( this.m_nAudioRepresentationIndex, true );

		if ( adaptation.forceSub )
		{
			this.UpdateClosedCaption( adaptation.forceSub, CVTTCaptionLoader.s_Subtitle );
		}
		else
		{
			// if the current caption is not set or FN, call update to see if the FN lang should change
			var vttCurInfo = this.m_VTTCaptionLoader.GetCurrentVTTInfo();
			if ( vttCurInfo.role == null || vttCurInfo.role == CVTTCaptionLoader.s_ForcedNarrative )
			{
				this.UpdateClosedCaption( CDASHPlayerUI.CLOSED_CAPTIONS_NONE, CVTTCaptionLoader.s_ForcedNarrative );
			}
		}

	}
}

CDASHPlayer.prototype.UpdateAudioRepresentation = function( nRepresentationIndex, forceUpdate )
{
	// skip if user selected representation and hasn't changed
	if ( this.m_nAudioRepresentationIndex == nRepresentationIndex && !forceUpdate )
		return;

	// no auto for audio.. don't change anything
	if ( nRepresentationIndex < 0 )
		return;

	var loader = this.GetAudioLoader();
	if ( !loader )
		return;

	// user selected representation
	this.m_nAudioRepresentationIndex = nRepresentationIndex;
	loader.ChangeRepresentationByIndex( this.m_nAudioRepresentationIndex );
	loader.SeekToSegment( this.m_elVideoPlayer.currentTime, !this.BIsLiveContent() );

	if ( !this.BIsLiveContent() )
		this.SavePlaybackStateForBuffering( this.m_elVideoPlayer.currentTime );
}

CDASHPlayer.prototype.SetVideoAdaptationIndex = function ( strAdaptationID )
{
	if ( typeof this.m_mpd !== 'undefined' && this.GetAdaptationByTrackID( strAdaptationID ) != null )
		this.m_strVideoAdaptationID = strAdaptationID;
	else if ( strAdaptationID != null )
		this.m_strVideoAdaptationID = strAdaptationID;
}

CDASHPlayer.prototype.UpdateVideoAdaptationSet = function ( strAdaptationID )
{
	if ( strAdaptationID == this.m_strVideoAdaptationID )
		return;

	// find the adaptation based on the track id passed in
	var adaptation = this.GetAdaptationByTrackID( strAdaptationID );
	if ( adaptation && adaptation.containsVideo )
	{
		this.m_strVideoAdaptationID = strAdaptationID;
		this.GetVideoLoader().ChangeAdaptationSet( adaptation );
		this.UpdateVideoRepresentation( this.m_nVideoRepresentationIndex, true );
	}
}

CDASHPlayer.prototype.GetLiveDesiredBitrate = function( nHeight )
{
	if ( nHeight < 360 )
		return 1000 * 1000;
	if ( nHeight < 480 )
		return 2000 * 1000;
	if ( nHeight < 720 )
		return 4000 * 1000;

	return 12000 * 1000;
}

CDASHPlayer.prototype.UpdateVideoRepresentation = function( nRepresentationIndex, forceUpdate )
{
	// skip if user selected representation and hasn't changed
	if ( nRepresentationIndex >= 0 && this.m_nVideoRepresentationIndex == nRepresentationIndex && !forceUpdate )
		return;

	var loader = this.GetVideoLoader();
	if ( !loader )
		return;

	// user selected representation
	if ( nRepresentationIndex >= 0 )
	{
		this.m_nVideoRepresentationIndex = nRepresentationIndex;
		loader.ChangeRepresentationByIndex( this.m_nVideoRepresentationIndex );
		loader.SeekToSegment( this.m_elVideoPlayer.currentTime, !this.BIsLiveContent() );
		this.m_nRepChangeTargetHeight = loader.m_adaptation.representations[this.m_nVideoRepresentationIndex].height;
		this.UpdateStatsForBandwidthDisplay( loader, this.m_nVideoRepresentationIndex );

		$J( this.m_elVideoPlayer ).trigger( 'logevent', [ 'Video Quality', this.m_nRepChangeTargetHeight.toString() ] );

		if ( !this.BIsLiveContent() )
			this.SavePlaybackStateForBuffering( this.m_elVideoPlayer.currentTime );

		return;
	}

	/////////////////////
	// adaptive streaming

	// don't automatically shift bit rates while waiting on the player
	if ( this.BIsBuffering() )
		return;

	// check for only 1 representation
	var iMaxRepresentation = loader.GetRepresentationsCount() - 1;
	if ( iMaxRepresentation == 0 )
	{
		this.m_nVideoRepresentationIndex = iMaxRepresentation;
		this.UpdateStatsForBandwidthDisplay( loader, this.m_nVideoRepresentationIndex );
		return;
	}

	// loop through sorted representations, lowest to highest
	var iNewRepresentation = iMaxRepresentation;
	for ( var i = iMaxRepresentation - 1; i >= 0; i-- )
	{
		// proposed new video bit rate + current audio bit rate modified by playback rate, plus 20% overhead
		var nRequiredBitRate = ( ( loader.m_adaptation.representations[i].bandwidth + this.m_nAudioBitRate ) * this.m_elVideoPlayer.playbackRate ) * 1.2;
		if ( this.m_nCurrentDownloadBitRate < nRequiredBitRate )
			continue;

		// for broadcasts that may have 60FPS reps, only switch up to it if the player is keeping up with 30FPS
		var nRepFrameRate = loader.m_adaptation.representations[i].frameRate ? loader.m_adaptation.representations[i].frameRate : 0;
		if ( this.BIsLiveContent() && nRepFrameRate > CDASHPlayer.MAX_STANDARD_FRAMERATE )
		{
			if ( this.m_bDroppingFrames || Math.ceil( this.m_nCurrentFramerate ) < (CDASHPlayer.MAX_STANDARD_FRAMERATE - 1) )
				continue;
		}

		// player height needs to be more than the video height of the smaller representation (e.g. 800 height should use 1080, not 720)
		var nNewRepHeight = loader.m_adaptation.representations[ iNewRepresentation ].height ? loader.m_adaptation.representations[ iNewRepresentation ].height : 0;
		var nRepHeight = loader.m_adaptation.representations[ i ].height ? loader.m_adaptation.representations[ i ].height : 0;
		if ( nRepHeight != 0 && nRepHeight > nNewRepHeight && nNewRepHeight > this.m_nPlayerHeight )
		{
			// bigger than selected and selected filled player
			var nNewRepBitRate = loader.m_adaptation.representations[ iNewRepresentation ].bandwidth;
			if ( !this.BIsLiveContent() || nNewRepBitRate > this.GetLiveDesiredBitrate( this.m_nPlayerHeight ) )
				break;
		}

		// this is best representation so far
		iNewRepresentation = i;
	}

	// set
	this.m_nVideoRepresentationIndex = -1;
	this.UpdateStatsForBandwidthDisplay( loader, iNewRepresentation );
	loader.ChangeRepresentationByIndex( iNewRepresentation );

	// for alternate video tracks, switch immediately
	if ( forceUpdate && !this.BIsLiveContent() )
	{
		loader.SeekToSegment( this.m_elVideoPlayer.currentTime, !this.BIsLiveContent() );
		this.m_nRepChangeTargetHeight = loader.m_adaptation.representations[ iNewRepresentation ].height;
		this.SavePlaybackStateForBuffering( this.m_elVideoPlayer.currentTime );
	}
}

CDASHPlayer.prototype.UpdateStatsForBandwidthDisplay = function( loader, nRepresentation )
{
	this.m_fCurrentRepresentationBandwidth = ( ( loader.m_adaptation.representations[ nRepresentation ].bandwidth + this.m_nAudioBitRate ) * this.m_elVideoPlayer.playbackRate ) * 1.2;
	this.m_nCurrentDownloadResolution = loader.m_adaptation.representations[ nRepresentation ].height ? loader.m_adaptation.representations[ nRepresentation ].height : 0;
}

CDASHPlayer.prototype.BIsRepresentationChanging = function()
{
	return ( this.m_nRepChangeTargetHeight != 0 );
}

CDASHPlayer.prototype.UpdateClosedCaption = function ( closedCaptionCode, ccRole )
{
	if ( !this.m_VTTCaptionLoader )
	{
		this.m_VTTCaptionLoader = new CVTTCaptionLoader( this.m_elVideoPlayer, this.GetClosedCaptionsArray() );
	}

	if ( typeof ccRole === 'undefined' || ccRole == '' )
		ccRole = CVTTCaptionLoader.s_Subtitle;

	// forced narrative check: uses NONE/Subtitle if it exists or Audio Track + FN sub.
	if ( closedCaptionCode == CDASHPlayerUI.CLOSED_CAPTIONS_NONE )
	{
		var rgCaps = this.GetClosedCaptionsArray();
		var bNoneSubtitleFound = false;
		for ( var i = 0; i < rgCaps.length; i++ )
		{
			if ( rgCaps[i].code == CDASHPlayerUI.CLOSED_CAPTIONS_NONE &&
				 rgCaps[i].roles == CVTTCaptionLoader.s_Subtitle )
			{
				bNoneSubtitleFound = true;
				break;
			}
		}

		if ( !bNoneSubtitleFound )
		{
			var adapSet = this.GetAdaptationByTrackID( this.m_strAudioAdaptationID );
			if ( adapSet )
			{
				closedCaptionCode = adapSet.language;
				ccRole = CVTTCaptionLoader.s_ForcedNarrative;
			}
		}
	}

	this.m_VTTCaptionLoader.SwitchToTextTrack( closedCaptionCode, ccRole );
}

CDASHPlayer.prototype.SetPlaybackRate = function ( unRate )
{
	if ( unRate )
		this.m_elVideoPlayer.playbackRate = this.m_nSavedPlaybackRate = unRate;
}

CDASHPlayer.prototype.GetPlaybackRate = function()
{
	return this.m_elVideoPlayer.playbackRate;
}

CDASHPlayer.prototype.GetPlaybackTimeInSeconds = function()
{
	return parseInt( this.m_elVideoPlayer.currentTime );
}

CDASHPlayer.prototype.GetLanguageForCurrentAudioTrack = function()
{
	for ( var i = 0; i < this.m_loaders.length; i++ )
	{
		if ( this.m_loaders[i].ContainsAudio() )
		{
			return this.m_loaders[i].m_adaptation.language;
		}
	}

	return null;
}

CDASHPlayer.prototype.GetAudioTrackIDForLanguage = function( strCode )
{
	// find a main or dub audio track for language code passed in
	var rgAudioAdaptations = this.GetAllAudioAdaptations();
	for ( var i = 0; i < rgAudioAdaptations.length; i++ )
	{
		if ( rgAudioAdaptations[ i ].roles[ 0 ] == 'main' || rgAudioAdaptations[ i ].roles[ 0 ] == 'dub' )
			if ( rgAudioAdaptations[ i ].language == strCode )
			{
				return rgAudioAdaptations[ i ].id;
			}
	}

	return -1;
}

CDASHPlayer.prototype.GetVideoTrackIDForLanguage = function( strCode )
{
	// find a main or dub video track for language code passed in
	var rgVideoAdaptations = this.GetAllVideoAdaptations();
	for ( var i = 0; i < rgVideoAdaptations.length; i++ )
	{
		if ( rgVideoAdaptations[ i ].roles[ 0 ] == 'main' || rgVideoAdaptations[ i ].roles[ 0 ] == 'dub' )
			if ( rgVideoAdaptations[ i ].language == strCode )
			{
				return rgVideoAdaptations[ i ].id;
			}
	}

	return -1;
}

CDASHPlayer.prototype.GetThumbnailInfoForVideo = function()
{
	for ( var i = 0; i < this.m_loaders.length; i++ )
	{
		if ( this.m_loaders[i].ContainsVideo() )
		{
			if ( this.m_loaders[i].m_adaptation.thumbnails )
				return this.m_loaders[i].m_adaptation.thumbnails;
		}
	}

	return null;
}

CDASHPlayer.prototype.BPlayingAudio = function()
{
	for ( var i = 0; i < this.m_loaders.length; i++ )
	{
		if ( this.m_loaders[i].ContainsAudio() )
			return true;
	}

	return false;
}

CDASHPlayer.prototype.UpdateStats = function()
{
	this.m_nCurrentDownloadBitRate = 0;
	var nBandwidthCount = 0;

	for (var i = 0; i < this.m_loaders.length; i++)
	{
		if (this.m_loaders[i].ContainsVideo())
		{
			// logging
			this.m_nVideoBuffer = this.m_loaders[i].GetAmountBufferedInPlayer();
			this.m_nPlaybackWidth = this.m_elVideoPlayer.videoWidth;

			// if changing representations, reset the target height if showing the requested height
			if ( this.m_nRepChangeTargetHeight == this.m_elVideoPlayer.videoHeight )
				this.m_nRepChangeTargetHeight = 0;

			this.m_nPlaybackHeight = this.m_elVideoPlayer.videoHeight;
			this.m_nVideoBitRate = this.m_loaders[i].m_representation.bandwidth;
			this.m_nDownloadVideoWidth = (this.m_loaders[i].m_representation.width != null) ? this.m_loaders[i].m_representation.width : 0;
			this.m_nDownloadVideoHeight = (this.m_loaders[i].m_representation.height != null) ? this.m_loaders[i].m_representation.height : 0;

			// used for playback
			this.m_nPlayerHeight = this.StatsGetVideoPlayerHeight();
			this.m_nCurrentDownloadBitRate += this.m_loaders[i].GetBandwidthRate();
			nBandwidthCount++;

			this.m_nCurrentFramerate = this.StatsAverageFramerate();
		}

		if (this.m_loaders[i].ContainsAudio())
		{
			this.m_nAudioBuffer = this.m_loaders[i].GetAmountBufferedInPlayer();

			// if a muxed audio stream, mark audio bitrate as zero
			// otherwise bandwidth needed will be calculated as double.
			if (this.m_loaders[i].ContainsVideo())
			{
				this.m_nAudioBitRate = 0;
			}
			else
			{
				this.m_nAudioBitRate = this.m_loaders[i].m_representation.bandwidth;
				this.m_nCurrentDownloadBitRate += this.m_loaders[i].GetBandwidthRate();
				nBandwidthCount++;
			}
		}
	}

	// Get average download rate across all loaders
	if ( nBandwidthCount > 1 )
	{
		this.m_nCurrentDownloadBitRate /= nBandwidthCount;
	}

	// For Server Event Logging
	this.m_nBandwidthTotal += this.m_nCurrentDownloadBitRate;
	this.m_nBandwidthEntries++;
	this.m_nBandwidthMinimum = ( this.m_nBandwidthMinimum == 0 ? this.m_nCurrentDownloadBitRate : ( this.m_nCurrentDownloadBitRate < this.m_nBandwidthMinimum ? this.m_nCurrentDownloadBitRate : this.m_nBandwidthMinimum ) );
	this.m_nBandwidthMaximum = ( this.m_nBandwidthMaximum == 0 ? this.m_nCurrentDownloadBitRate : ( this.m_nCurrentDownloadBitRate > this.m_nBandwidthMaximum ? this.m_nCurrentDownloadBitRate : this.m_nBandwidthMaximum ) );
}

CDASHPlayer.prototype.StatsGetVideoPlayerHeight = function()
{
	return this.m_elVideoPlayer.clientHeight;
}

CDASHPlayer.prototype.StatsVideoBuffer = function()
{
	return (this.m_nVideoBuffer / 1000).toFixed(2);
}

CDASHPlayer.prototype.StatsAudioBuffer = function()
{
	return (this.m_nAudioBuffer / 1000).toFixed(2);
}

CDASHPlayer.prototype.StatsPlaybackWidth = function()
{
	return this.m_nPlaybackWidth;
}

CDASHPlayer.prototype.StatsPlaybackHeight = function()
{
	return this.m_nPlaybackHeight;
}

CDASHPlayer.prototype.StatsAudioBitRate = function()
{
	return (this.m_nAudioBitRate / 1000).toFixed(2);
}

CDASHPlayer.prototype.StatsVideoBitRate = function()
{
	return (this.m_nVideoBitRate / 1000).toFixed(2);
}

CDASHPlayer.prototype.StatsAudioChannels = function()
{
	for (var i = 0; i < this.m_loaders.length; i++)
	{
		if ( this.m_loaders[i].ContainsAudio() && this.m_loaders[i].m_representation.audioChannels )
		{
			return this.m_loaders[i].m_representation.audioChannels;
		}
	}

	return 0;
}

CDASHPlayer.prototype.StatsDownloadVideoWidth = function()
{
	return this.m_nDownloadVideoWidth;
}

CDASHPlayer.prototype.StatsDownloadVideoHeight = function()
{
	return this.m_nDownloadVideoHeight;
}

CDASHPlayer.prototype.StatsCurrentDownloadBitRate = function()
{
	return (this.m_nCurrentDownloadBitRate / 1000).toFixed(2);
}

CDASHPlayer.prototype.StatsCurrentRepresentationBandwidth = function()
{
	return this.m_fCurrentRepresentationBandwidth;
}

CDASHPlayer.prototype.StatsDownloadResolution = function()
{
	return this.m_nCurrentDownloadResolution;
}

CDASHPlayer.prototype.StatsBufferInfo = function()
{
	var bufferString = "";

	for (var i = 0; i < this.m_loaders.length; i++)
	{
		if ( !this.m_loaders[i].m_sourceBuffer )
			continue;

		if ( this.m_loaders[i].ContainsVideo() )
		{
			for (var v = 0; v < this.m_loaders[i].m_sourceBuffer.buffered.length; v++)
			{
				bufferString += "Video Buffer " + v + ": " + SecondsToTime(this.m_loaders[i].m_sourceBuffer.buffered.start(v)) + " - " + SecondsToTime(this.m_loaders[i].m_sourceBuffer.buffered.end(v)) + "<br>";
			}
		}

		if ( this.m_loaders[i].ContainsAudio() )
		{
			for (var a = 0; a < this.m_loaders[i].m_sourceBuffer.buffered.length; a++)
			{
				bufferString += "Audio Buffer " + a + ": " + SecondsToTime(this.m_loaders[i].m_sourceBuffer.buffered.start(a)) + " - " + SecondsToTime(this.m_loaders[i].m_sourceBuffer.buffered.end(a)) + "<br>";
			}
		}
	}

	if (bufferString == "")
		bufferString = "No Buffers";

	return bufferString;
}

CDASHPlayer.prototype.StatsProperties = function()
{
	return "Error: " + ( (this.m_elVideoPlayer.error) ? this.m_elVideoPlayer.error.code : "None" ) + ", Network: " + this.m_elVideoPlayer.networkState;
}

CDASHPlayer.prototype.StatsSegmentInfo = function()
{
	var bufferString = "";
	for (var i = 0; i < this.m_loaders.length; i++)
	{
		if (this.m_loaders[i].ContainsVideo())
		{
			bufferString += "Video " + (this.m_loaders[i].m_nNextSegment);
			if (!this.BIsLiveContent())
				bufferString += "/" + (this.m_loaders[i].m_nTotalSegments );
			bufferString += ", ";
		}

		if (this.m_loaders[i].ContainsAudio())
		{
			bufferString += "Audio " + (this.m_loaders[i].m_nNextSegment);
			if (!this.BIsLiveContent())
				bufferString += "/" + (this.m_loaders[i].m_nTotalSegments );
			bufferString += " ";
		}
	}

	return bufferString;
}

CDASHPlayer.prototype.StatsDownloadHost = function()
{
	for (var i = 0; i < this.m_loaders.length; i++)
	{
		if ( this.m_loaders[i].ContainsVideo() )
		{
			var parser = document.createElement('a');
			parser.href = CMPDParser.GetInitSegmentURL( this.m_loaders[i].m_adaptation, this.m_loaders[i].m_representation );
			return parser.hostname;
		}
	}

	return '';
}

CDASHPlayer.prototype.StatsAllBytesReceived = function()
{
	var bytes = 0;
	for (var i = 0; i < this.m_loaders.length; i++)
	{
		bytes += this.m_loaders[i].GetBytesReceived();
	}

	return bytes;
}

CDASHPlayer.prototype.StatsAllFailedSegmentDownloads = function()
{
	var segments = 0;
	for (var i = 0; i < this.m_loaders.length; i++)
	{
		segments += this.m_loaders[i].GetFailedSegmentDownloads();
	}

	return segments;
}

CDASHPlayer.prototype.StatsBandwidthRates = function( bResetStats )
{
	var bw_stats = {};

	if ( this.m_nBandwidthEntries > 0 )
	{
		bw_stats = {
			'bw_avg': this.m_nBandwidthTotal / this.m_nBandwidthEntries,
			'bw_min': this.m_nBandwidthMinimum,
			'bw_max': this.m_nBandwidthMaximum,
		}
	}
	else
	{
		bw_stats = {
			'bw_avg': 0,
			'bw_min': 0,
			'bw_max': 0,
		}
	}

	if ( bResetStats )
	{
		this.m_nBandwidthTotal = 0;
		this.m_nBandwidthEntries = 0;
		this.m_nBandwidthMinimum = 0;
		this.m_nBandwidthMaximum = 0;
	}

	return bw_stats;
}

CDASHPlayer.prototype.StatsSegmentDownloadTimes = function( bResetStats )
{
	for (var i = 0; i < this.m_loaders.length; i++)
	{
		// for now, just video download time stats
		if ( this.m_loaders[i].ContainsVideo() )
			return this.m_loaders[i].GetSegmentDownloadTimeStats( bResetStats );
	}

	return {
		'seg_avg': 0,
		'seg_min': 0,
		'seg_max': 0,
	};
}

CDASHPlayer.prototype.StatsRecentSegmentDownloads = function( bVideo )
{
	var stats = {
		'last_segment_number': 0,
		'last_segment_response': 200
	};

	for (var i = 0; i < this.m_loaders.length; i++)
	{
		if ( bVideo && this.m_loaders[i].ContainsVideo() ||
			!bVideo && !this.m_loaders[i].ContainsVideo() && this.m_loaders[i].ContainsAudio() )
		{
			var downloadLog = this.m_loaders[i].GetDownloadLog();
			stats['last_segment_number'] = this.m_loaders[i].m_nNextSegment - 1;
			stats['last_segment_response'] = this.m_loaders[i].m_nLastSegmentDownloadStatus;

			var segNum = 1;
			for ( var l = downloadLog.length - 1; l >= 0; l-- )
			{
				stats['segment' + segNum + '_bytes'] = downloadLog[l].dataSizeBytes;
				stats['segment' + segNum + '_time'] = downloadLog[l].downloadTime / 1000;

				if ( ++segNum > 3 )
					break;
			}

			break;
		}
	}

	return stats;
}

CDASHPlayer.prototype.StatsGameDataBufferCount = function()
{
	for (var i = 0; i < this.m_loaders.length; i++)
	{
		if ( this.m_loaders[i].ContainsGame() )
			return this.m_loaders[i].GetGameDataFrames().length;
	}

	return 0;
}

CDASHPlayer.prototype.StatsLastGameDataBuffer = function()
{
	for (var i = 0; i < this.m_loaders.length; i++)
	{
		if ( this.m_loaders[i].ContainsGame() )
			return this.m_loaders[i].m_statsGameData;
	}

	return null;
}

CDASHPlayer.prototype.StatsLastGameDataEventTriggerPerf = function()
{
	return this.m_fGameDataEventTriggerPerf.toFixed(3);
}

CDASHPlayer.prototype.StatsLastGameDataEventTriggerFrame = function()
{
	return this.m_nLastGameDataEventArrayIndex + 1;
}

CDASHPlayer.prototype.StatsAverageFramerate = function()
{
	if ( this.m_elVideoPlayer.paused )
		return this.m_nCurrentFramerate;

	var ele = this.m_elVideoPlayer;

	var nTotalFrames = ( ele.mozDecodedFrames || ele.webkitDecodedFrames || ele.webkitDecodedFrameCount );
	var nDeltaFrames = nTotalFrames - this.m_nLastDecodedFrames;

	var fDeltaTime = ( performance.now() - this.m_nLastDecodedFrameTime ) / 1000;
	if ( fDeltaTime == 0 )
		return this.m_nCurrentFramerate;

	this.m_nLastDecodedFrames = nTotalFrames;
	this.m_nLastDecodedFrameTime = performance.now();

	var nAvgFramerate = nDeltaFrames / fDeltaTime;
	return ( nAvgFramerate != 0 ? nAvgFramerate : this.m_nCurrentFramerate );
}

CDASHPlayer.prototype.BLogVideoVerbose = function()
{
	return this.m_bVideoLogVerbose;
}

/////////////////////////////////////////////////////////////////
// Segment loader. Responsible for downloading and loading video player buffers
/////////////////////////////////////////////////////////////////
function CSegmentLoader( player, adaptationSet )
{
	this.m_player = player;
	this.m_mediaSource = null;
	this.m_sourceBuffer = null;

	this.m_adaptation = adaptationSet;
	this.m_representation = null;

	this.m_nBufferUpdate = CSegmentLoader.s_BufferUpdateNone;
	this.m_bufSegments = [];
	this.m_bNeedInitSegment = true;
	this.m_nNextSegment = 0;
	this.m_nTotalSegments = Number.MAX_VALUE;
	this.m_bRemoveBufferState = false;
	this.m_bSeekInProgress = false;

	// need to be closed
	this.m_xhr = null;
	this.m_schNextDownload = null;
	this.m_schRetryDownload = null;
	this.m_schWaitForBuffer = null;

	// bandwidth monitoring
	this.m_rgDownloadLog = [];
	this.m_nDownloadLogSize = 4;

	// for stats tracking
	this.m_nBytesReceivedTotal = 0;
	this.m_nFailedSegmentDownloads = 0;
	this.m_nSegmentDownloadTimeTotal = 0;
	this.m_nSegmentDownloadTimeEntries = 0;
	this.m_nSegmentDownloadTimeMinimum = 0;
	this.m_nSegmentDownloadTimeMaximum = 0;
	this.m_nLastSegmentDownloadStatus = 200;

	// game data storage
	this.m_rgGameDataFrames = [];
	this.m_statsGameData = {};
}

CSegmentLoader.nActiveDownloads = 0;

CSegmentLoader.s_BufferUpdateNone = 0;
CSegmentLoader.s_BufferUpdateAppend = 1;
CSegmentLoader.s_BufferUpdateRemove = 2;

CSegmentLoader.PIPELINE_NEXT_SEGMENT = true;
CSegmentLoader.PIPELINE_RANGE_BYTES = 128;

CSegmentLoader.prototype.Close = function()
{
	if ( this.m_sourceBuffer )
	{
		$J( this.m_sourceBuffer ).off( '.SegmentLoaderEvents' );
		this.m_sourceBuffer = null;
	}

	if ( this.m_xhr )
	{
		this.m_xhr.abort();
		this.m_xhr = null;
	}

	if ( this.m_schNextDownload )
	{
		clearTimeout( this.m_schNextDownload );
		this.m_schNextDownload = null;
	}

	if ( this.m_schRetryDownload )
	{
		clearTimeout( this.m_schRetryDownload );
		this.m_schRetryDownload = null;
	}

	if ( this.m_schWaitForBuffer )
	{
		clearTimeout( this.m_schWaitForBuffer );
		this.m_schWaitForBuffer = null;
	}

	this.m_player = null;
	this.m_mediaSource = null;
	this.m_sourceBuffer = null;

	this.m_adaptation = null;
	this.m_representation = null;

	this.m_nBufferUpdate = CSegmentLoader.s_BufferUpdateNone;
	this.m_bufSegments = [];
	this.m_bNeedInitSegment = true;
	this.m_nNextSegment = 0;
	this.m_nTotalSegments = Number.MAX_VALUE;
	this.m_bRemoveBufferState = false;
	this.m_bSeekInProgress = false;

	// need to be closed
	this.m_xhr = null;
	this.m_schNextDownload = null;
	this.m_schRetryDownload = null;
	this.m_schWaitForBuffer = null;

	// for stats tracking
	this.m_nBytesReceivedTotal = 0;
	this.m_nFailedSegmentDownloads = 0;
	this.m_nSegmentDownloadTimeTotal = 0;
	this.m_nSegmentDownloadTimeEntries = 0;
	this.m_nSegmentDownloadTimeMinimum = 0;
	this.m_nSegmentDownloadTimeMaximum = 0;
	this.m_nLastSegmentDownloadStatus = 200;

	// game data storage
	this.m_rgGameDataFrames = [];
	this.m_statsGameData = {};
}

CSegmentLoader.prototype.ContainsVideo = function()
{
	if ( this.m_adaptation )
		return this.m_adaptation.containsVideo;
	else
		return false;
}

CSegmentLoader.prototype.ContainsAudio = function()
{
	if ( this.m_adaptation )
		return this.m_adaptation.containsAudio;
	else
		return false;
}

CSegmentLoader.prototype.ContainsGame = function()
{
	if ( this.m_adaptation )
		return this.m_adaptation.containsGame;
	else
		return false;
}

CSegmentLoader.prototype.SetMediaSource = function( mediaSource )
{
	this.m_mediaSource = mediaSource;
}

CSegmentLoader.prototype.GetRepresentationsCount = function()
{
	return this.m_adaptation.representations.length;
}

CSegmentLoader.prototype.ChangeAdaptationSet = function( adaptation )
{
	this.m_adaptation = adaptation;
}

CSegmentLoader.prototype.GetTotalSegments = function()
{
	// Calculate total segments if appropriate
	if ( this.m_player.m_mpd.periods[0].duration )
	{
		this.m_nTotalSegments = CMPDParser.GetSegmentForTime( this.m_adaptation, this.m_player.m_mpd.periods[0].duration * 1000 );
	}

	return this.m_nTotalSegments;
}

CSegmentLoader.prototype.BeginPlayback = function( unStartTime )
{
	var nRepCounts = this.GetRepresentationsCount();
	if ( !nRepCounts )
		return false;

	this.GetTotalSegments();

	if ( this.ContainsVideo() )
	{
		this.m_nNextSegment = CMPDParser.GetSegmentForTime( this.m_adaptation, unStartTime );
		PlayerLog( 'Video Stream Starting at: ' + SecondsToTime( unStartTime / 1000 ) + ', starting segment: ' + this.m_nNextSegment );

		if ( this.m_player.m_nVideoRepresentationIndex == -1 )
		{
			// start at the highest resolution greater than video player height
			var nRepIndex = nRepCounts - 1;
			for ( nRepIndex; nRepIndex > 0; nRepIndex-- )
			{
				if ( this.m_player.StatsGetVideoPlayerHeight() <= this.m_adaptation.representations[nRepIndex].height )
				{
					break;
				}
			}

			this.ChangeRepresentationByIndex( nRepIndex );
		}
		else
		{
			this.ChangeRepresentationByIndex( this.m_player.m_nVideoRepresentationIndex );
		}

		this.DownloadNextSegment();

	}
	else if ( this.ContainsAudio() )
	{
		// alternate audio stream
		this.m_nNextSegment = CMPDParser.GetSegmentForTime( this.m_adaptation, unStartTime );
		PlayerLog( 'Audio Stream Starting at: ' + SecondsToTime( unStartTime / 1000 ) + ', starting segment: ' + this.m_nNextSegment );

		this.ChangeRepresentationByIndex( this.m_player.m_nAudioRepresentationIndex );
		this.DownloadNextSegment();
	}
	else if ( this.ContainsGame() )
	{
		// game data coming down in json
		this.m_nNextSegment = CMPDParser.GetSegmentForTime( this.m_adaptation, unStartTime );
		this.m_bNeedInitSegment = false;
		this.m_representation = this.m_adaptation.representations[0];
		PlayerLog( 'Game Data Stream Starting at: ' + SecondsToTime( unStartTime / 1000 ) + ', starting segment: ' + this.m_nNextSegment );
		this.DownloadNextSegment();
	}
}

CSegmentLoader.prototype.ChangeRepresentation = function( representation )
{
	var _loader = this;
	this.m_representation = representation;
	this.m_bNeedInitSegment = true;

	if ( !this.m_sourceBuffer )
	{
		this.m_sourceBuffer = this.m_mediaSource.addSourceBuffer( representation.mimeType + ';codecs=' + representation.codecs );
		//PlayerLog( representation.mimeType + ';codecs=' + representation.codecs );
		$J( this.m_sourceBuffer ).on( 'updateend.SegmentLoaderEvents', function() { _loader.OnSourceBufferUpdateEnd() } );
		$J( this.m_sourceBuffer ).on( 'error.SegmentLoaderEvents', function( e ) { _loader.OnSourceBufferError( e ) } );
		$J( this.m_sourceBuffer ).on( 'abort.SegmentLoaderEvents', function( e ) { _loader.OnSourceBufferAbort( e ) } );
	}
}

CSegmentLoader.prototype.ChangeRepresentationByIndex = function( representationIndex )
{
	if ( representationIndex >= 0 && representationIndex < this.GetRepresentationsCount()
		&& this.m_representation != this.m_adaptation.representations[representationIndex] )
	{
		// PlayerLog( ( this.ContainsVideo() ? "Video" : "Audio" ) + " Changing Representation to " + Math.ceil( this.m_adaptation.representations[representationIndex].bandwidth / 1000 ) + 'Kb at Segment ' + this.m_nNextSegment );
		this.ChangeRepresentation( this.m_adaptation.representations[representationIndex] );
	}
}

CSegmentLoader.prototype.BIsEndVOD = function( bCheckCurrentSegment )
{
	var nSegToCheck = bCheckCurrentSegment ? this.m_nNextSegment - 1 : this.m_nNextSegment;
	if ( nSegToCheck > this.m_nTotalSegments )
	{
		if ( this.ContainsVideo() )
			$J( this.m_player.m_elVideoPlayer ).trigger( 'voddownloadcomplete' );

		return true;
	}

	return false;
}

CSegmentLoader.prototype.DownloadSegment = function( url, nSegmentDuration, tsAttemptStarted )
{
	this.m_schRetryDownload = null;
	if ( !tsAttemptStarted )
		tsAttemptStarted = performance.now();

	if ( this.BIsEndVOD( true ) )
		return;

	// PlayerLog( Date.now() + ' downloading: ' + url );

	var _loader = this;
	var xhr = new XMLHttpRequest();
	this.m_xhr = xhr;
	xhr.open( 'GET', url );
	xhr.timeout = 15000;
	xhr.send();

	if ( !this.ContainsGame() )
		xhr.responseType = 'arraybuffer';
	else
		xhr.responseType = 'json';

	CSegmentLoader.nActiveDownloads++;
	var tsDownloadStart = performance.now();
	try
	{
		xhr.addEventListener( 'readystatechange', function ()
		{
			if ( xhr.readyState == xhr.DONE )
			{
				CSegmentLoader.nActiveDownloads--;
				if ( _loader.m_xhr == null )
					return;

				_loader.m_xhr = null;
				if ( _loader.m_bSeekInProgress )
				{
					// most likely canceled. Either way, we are seeking so throw this data out as we don't want to add it to
					// our buffers because playback time will change
					_loader.ContinueSeek();
					return;
				}

				var now = performance.now();
				var nDownloadMS = Math.floor(performance.now() - tsDownloadStart);

				_loader.m_nLastSegmentDownloadStatus = xhr.status;

				if ( xhr.status != 200 || !xhr.response )
				{
					PlayerLog( 'HTTP ' + xhr.status + ' (' + nDownloadMS + 'ms): ' + url );

					// Check if next segment will end VOD and if so, stop now
					if ( xhr.status == 404 && _loader.BIsEndVOD( false ) )
						return;

					// Keep track of this failure as part of bandwidth/representations stats
					// as we've used time but got nothing for it
					_loader.LogDownload( xhr, tsDownloadStart, 0 );

					// Send 5% of VOD failures back to better track status codes
					if ( !_loader.m_player.BIsLiveContent() )
					{
						var bSendStatus = ( ( Math.floor( Math.random() * 20 ) ) == 1 );
						var nStatus = xhr.status;

						// determine if the failure was an XHR timeout...
						if ( xhr.status == 0 )
						{
							if ( nDownloadMS >= ( xhr.timeout - 500 ) ) // roughly the timeout window
							{
								nStatus = 408;
							}
						}

						if ( bSendStatus )
							$J( _loader.m_player.m_elVideoPlayer ).trigger( 'logevent', [ 'FailedSegDLStatus', nStatus ] );
					}



					// if VOD and a 403, then the user is no longer auth'd so attempt playback restart
					if ( !_loader.m_player.BIsLiveContent() && xhr.status == 403 )
					{
						var strResponse = '';
						if ( xhr.response )
						{
							var textResponse = String.fromCharCode.apply( null, new Uint8Array( xhr.response ) );
							if ( textResponse.length > 0 )
							{
								var rgResponse = textResponse.split( '\n' );
								if ( rgResponse.length > 3 )
								{
									strResponse = $J( '<div/>' ).html( rgResponse[ 2 ] ).text();
								}
							}
						}

						_loader.DownloadFailed( xhr.status + ' [' + url + ' | ' + strResponse + ']' );
						return;
					}

					_loader.m_nFailedSegmentDownloads++;

					// determine retry for other status code issues
					var nTimeToRetry = CDASHPlayer.DOWNLOAD_RETRY_MS;

					if ( _loader.m_player.BIsLiveContent() )
						nTimeToRetry += CDASHPlayer.TRACK_BUFFER_MS;
					else
						nTimeToRetry += CDASHPlayer.TRACK_BUFFER_VOD_LOOKAHEAD_MS;

					if ( now - tsAttemptStarted > nTimeToRetry )
					{
						_loader.DownloadFailed( 'Timeout' );
						return;
					}

					_loader.m_schRetryDownload = setTimeout( function() { _loader.DownloadSegment( url, nSegmentDuration, tsAttemptStarted ); }, CDASHPlayer.DOWNLOAD_RETRY_MS );
					return;
				}

				if ( !_loader.ContainsGame() )
				{
					try
					{
						var arr = new Uint8Array(xhr.response);
						var segment = {};
						segment.duration = nSegmentDuration;
						segment.data = arr;
						_loader.m_bufSegments.push(segment);

						_loader.LogDownload(xhr, tsDownloadStart, segment.data.length);
						_loader.UpdateBuffer();

						if (_loader.m_player.BLogVideoVerbose()) {
							var nSize = segment.data.length / 1000;
							PlayerLog('HTTP ' + xhr.status + ' (' + nDownloadMS + 'ms, ' + Math.floor(nSize) + 'k): ' + url);
						}
					}
					catch (e) {
						PlayerLog('Append Buffer Exception: ' + e);
					}
				}
				else
				{
					var responseData = xhr.response;
					var rgFrames = responseData.frames;
					var cFrames = rgFrames.length;
					for ( var i = 0; i < cFrames; i++ )
					{
						_loader.m_rgGameDataFrames.push( rgFrames[i] );
					}

					var gameData = {appid: responseData.appid, broadcastrelayid: responseData.broadcastrelayid, segmentid: responseData.segmentid };
					_loader.m_statsGameData = gameData;
				}

				_loader.ScheduleNextDownload();
			}
		}, false);
	}
	catch ( e )
	{
		CSegmentLoader.nActiveDownloads--;
		PlayerLog( 'Failed to download segment: ' + e );
		return;
	}

	// Hint to the CDN to get the next segment ready for download
	if ( CSegmentLoader.PIPELINE_NEXT_SEGMENT && !this.m_player.BIsLiveContent() && this.m_nNextSegment < this.m_nTotalSegments )
	{
		var urlNext = CMPDParser.GetSegmentURL( this.m_adaptation, this.m_representation, this.m_nNextSegment );
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open( "GET" , urlNext );
		xmlhttp.setRequestHeader( "Range", "bytes=0-" + parseInt( CSegmentLoader.PIPELINE_RANGE_BYTES - 1) );
		xmlhttp.send();
	}
}

CSegmentLoader.prototype.DownloadNextSegment = function()
{
	this.m_schNextDownload = null;

	var url = '';
	var nSegmentDuration = 0;
	if ( this.m_bNeedInitSegment )
	{
		this.m_bNeedInitSegment = false;
		url = CMPDParser.GetInitSegmentURL( this.m_adaptation, this.m_representation );
		nSegmentDuration = 0;
	}
	else
	{
		url = CMPDParser.GetSegmentURL( this.m_adaptation, this.m_representation, this.m_nNextSegment );
		nSegmentDuration = CMPDParser.GetSegmentDuration( this.m_adaptation );
		this.m_nNextSegment++;
	}

	this.DownloadSegment( url, nSegmentDuration );
}

CSegmentLoader.prototype.UpdateBuffer = function()
{
	if ( this.m_nBufferUpdate != CSegmentLoader.s_BufferUpdateNone )
		return;

	if ( this.m_bRemoveBufferState )
	{
		this.RemoveAllBuffers();
		return;
	}

	// first add any queued buffers
	if ( this.m_bufSegments.length > 0 )
	{
		try
		{
			this.m_nBufferUpdate = CSegmentLoader.s_BufferUpdateAppend;
			var segment = this.m_bufSegments[0];
			// This may throw a QuotaExceededError exception if the prepareAppend call
			// can't evict enough frames from a full buffer for the data being added.
			// ref: https://code.google.com/p/chromium/codesearch#chromium/src/third_party/WebKit/Source/modules/mediasource/SourceBuffer.cpp&sq=package:chromium&rcl=1458760914&l=549
			this.m_sourceBuffer.appendBuffer( segment.data );
			this.m_bufSegments.splice( 0, 1 );
		}
		catch (e)
		{
			// No room for the new data so hold on to it and the
			// next time the download scheduler runs, it will
			// repeat the evict and append process to catch up
			if ( e.name === 'QuotaExceededError' )
			{
				this.m_nBufferUpdate = CSegmentLoader.s_BufferUpdateNone;
			}
			else
			{
				$J( this.m_player.m_elVideoPlayer ).trigger( 'logevent', [ 'UAException_' + e.name, e.message ] );
			}
		}

		return;
	}

	// check to see if we should remove any data
	// while buffering, player time might not be where we are seeking to so don't clear data
	if ( !this.m_player.BIsBuffering() )
	{
		var buffered = (this.m_sourceBuffer != null) ? this.m_sourceBuffer.buffered : [];
		if ( buffered.length > 0 && (buffered.end( 0 ) - buffered.start( 0 )) > CDASHPlayer.TRACK_BUFFER_MAX_SEC )
		{
			var nStart = Math.max( 0, buffered.start(0) - 1 );
			var nEnd = buffered.end(0) - CDASHPlayer.TRACK_BUFFER_MAX_SEC;

			// if playback is within this range, need to advance forward
			var nCurrentTime = this.m_player.m_elVideoPlayer.currentTime;
			if ( !this.m_player.m_elVideoPlayer.paused )
			{
				nEnd = Math.min( nEnd, nCurrentTime - 0.1 );
			}
			else if ( nCurrentTime > nStart && nCurrentTime < nEnd )
			{
				this.m_player.SeekTo( nEnd + 0.1 );
			}

			if ( nEnd > nStart )
			{
				try
				{
					this.m_nBufferUpdate = CSegmentLoader.s_BufferUpdateRemove;
					this.m_sourceBuffer.remove( nStart, nEnd );
					return;
				}
				catch (e)
				{
					$J( this.m_player.m_elVideoPlayer ).trigger( 'logevent', [ 'UpdateBuffer RemoveBuffer Exception: ' + e.name, e.message ] );
				}
			}
		}
	}
}

CSegmentLoader.prototype.OnSourceBufferUpdateEnd = function()
{
	var nCompletedUpdate = this.m_nBufferUpdate;
	this.m_nBufferUpdate = CSegmentLoader.s_BufferUpdateNone;

	if ( nCompletedUpdate == CSegmentLoader.s_BufferUpdateAppend )
		this.m_player.OnSegmentDownloaded();

	if ( this.m_bSeekInProgress && nCompletedUpdate == CSegmentLoader.s_BufferUpdateRemove && !this.m_bRemoveBufferState )
		this.ContinueSeek();

	this.UpdateBuffer();
}

CSegmentLoader.prototype.OnSourceBufferError = function( e )
{
	PlayerLog( 'Source buffer error' );
}

CSegmentLoader.prototype.OnSourceBufferAbort = function( e )
{
	PlayerLog( 'Source buffer update aborted' );
}

CSegmentLoader.prototype.DownloadFailed = function( strReason )
{
	this.m_player.OnSegmentDownloadFailed( strReason );
}

CSegmentLoader.prototype.ScheduleNextDownload = function( nAtTime )
{
	var _loader = this;
	if ( this.m_bNeedInitSegment )
	{
		this.DownloadNextSegment();
		return;
	}

	// if there is one already scheduled, cancel to reschedule
	if ( this.m_schNextDownload != null )
	{
		clearTimeout( this.m_schNextDownload );
		this.m_schNextDownload = null;
	}

	// check if the next segment is available
	var unDeltaMS = this.m_player.m_mpd.GetSegmentAvailableFromNow( this.m_adaptation, this.m_nNextSegment, this.m_player.m_tsLiveContentStarted );
	if ( unDeltaMS > 0 )
	{
		// not yet available
		this.m_schNextDownload = setTimeout( function() { _loader.DownloadNextSegment() }, unDeltaMS );
		return;
	}

	// check if we need to buffer. Keep downloading for dynamic content, minimum amount for VOD
	var unAmountBuffered = this.GetAmountBuffered( nAtTime );
	if ( this.m_player.BIsLiveContent() || unAmountBuffered < this.m_player.GetTrackBufferMS() )
	{
		this.DownloadNextSegment();
		return;
	}

	// if the VOD buffers are close to running out of space, wait to scheduled download of the next segment
	var nMaxBufferAvailable = ( CDASHPlayer.TRACK_BUFFER_MAX_SEC * 1000 ) - this.m_player.GetTrackBufferMS();
	if ( unAmountBuffered > nMaxBufferAvailable )
	{
		this.m_schWaitForBuffer = setTimeout( function () { _loader.ScheduleNextDownload() }, CDASHPlayer.TRACK_BUFFER_VOD_LOOKAHEAD_MS );
		return;
	}

	// if there are downloaded segments not currently in the sourcebuffer,
	// try adding those instead of downloading new ones
	if ( this.m_bufSegments.length > 0 )
	{
		this.m_schWaitForBuffer = setTimeout( function ()
			{
				_loader.UpdateBuffer();
				_loader.ScheduleNextDownload();
			},
			this.m_player.GetTrackBufferMS() / 2 );
		return;
	}

	// determine when the next segment download happens
	unDeltaMS = Math.max( unAmountBuffered - CDASHPlayer.TRACK_BUFFER_VOD_LOOKAHEAD_MS, CDASHPlayer.DOWNLOAD_RETRY_MS );
	if ( this.m_player.m_elVideoPlayer.playbackRate > 1.0 )
		unDeltaMS /= this.m_player.m_elVideoPlayer.playbackRate;

	// either start the next download or wait and check the status again soon
	if ( CSegmentLoader.nActiveDownloads == 0 )
		this.m_schNextDownload = setTimeout( function () { _loader.DownloadNextSegment() }, unDeltaMS );
	else
		this.m_schWaitForBuffer = setTimeout( function () { _loader.ScheduleNextDownload() }, unDeltaMS );
}

CSegmentLoader.prototype.BIsLoaderStalling = function()
{
	if ( !this.ContainsGame() )
		return ( this.GetAmountBufferedInPlayer() < CMPDParser.GetSegmentDuration( this.m_adaptation ) && ( this.m_nNextSegment <= this.m_nTotalSegments ) );
	else
		return false;
}

CSegmentLoader.prototype.BIsLoaderBuffered = function()
{
	if ( !this.ContainsGame() )
		return ( this.GetAmountBufferedInPlayer() >= this.m_player.GetTrackBufferMS() || this.m_nNextSegment > this.m_nTotalSegments );
	else
		return true;
}

CSegmentLoader.prototype.GetAmountBufferedInPlayer = function( nAtTime )
{
	var nBuffered = 0;
	var buffered = {};
	buffered = (this.m_sourceBuffer != null) ? this.m_sourceBuffer.buffered : [];

	if ( buffered.length > 0 )
	{
		// playback might not have started yet so need to ensure it is within the buffered area
		var nCurrentTime = this.m_player.m_elVideoPlayer.currentTime;
		if ( typeof nAtTime !== 'undefined' )
			nCurrentTime = nAtTime;

		if ( nCurrentTime < buffered.start( 0 ) )
			nCurrentTime = buffered.start( 0 );

		if ( nCurrentTime > buffered.end( 0 ) )
			nCurrentTime = buffered.end( 0 );

		nBuffered = buffered.end( 0 ) - nCurrentTime;
	}

	return Math.floor( nBuffered * 1000 );
}

CSegmentLoader.prototype.GetAmountBuffered = function( nAtTime )
{
	// include data we haven't fed to player
	var nBuffered = this.GetAmountBufferedInPlayer( nAtTime );
   	for ( var i = 0; i < this.m_bufSegments.length; i++ )
	{
		nBuffered += this.m_bufSegments[i].duration;
	}
	return nBuffered;
}

CSegmentLoader.prototype.GetNumBuffers = function()
{
	var buffered = (this.m_sourceBuffer != null) ? this.m_sourceBuffer.buffered : [];
	return buffered.length;
}

CSegmentLoader.prototype.GetNextBufferedTime = function ( nTime )
{
	var buffered = (this.m_sourceBuffer != null) ? this.m_sourceBuffer.buffered : [];
	for ( var i = 0; i < buffered.length; i++ )
	{
		if ( nTime < buffered.start( i ) )
			nTime = buffered.start( i );

		if ( nTime < buffered.end( i ) )
			return nTime;
	}

	return nTime;
}

CSegmentLoader.prototype.GetBufferedStart = function()
{
	var buffered = (this.m_sourceBuffer != null) ? this.m_sourceBuffer.buffered : [];
	if ( buffered.length == 0 )
		return 0;

	return this.m_sourceBuffer.buffered.start(0);
}

CSegmentLoader.prototype.GetBufferedEnd = function()
{
	var buffered = (this.m_sourceBuffer != null) ? this.m_sourceBuffer.buffered : [];
	if ( buffered.length == 0 )
		return 0;

	return this.m_sourceBuffer.buffered.end(0);
}

CSegmentLoader.prototype.ContinueSeek = function()
{
	if ( !this.m_bSeekInProgress )
		return;

	// need download to abort
	if ( this.m_xhr )
	{
		return;
	}

	// check if removal is done
	if ( this.m_nBufferUpdate == CSegmentLoader.s_BufferUpdateRemove || this.m_bRemoveBufferState )
	{
		return;
	}

	// done seeking
	this.m_bSeekInProgress = false;
	this.ScheduleNextDownload();
}

CSegmentLoader.prototype.SeekToSegment = function( nSeekTime, bForceBufferClear )
{
	// if seeking outside of the main buffer or forced override
	var bUnbufferedSeek = ( nSeekTime < this.GetBufferedStart() || nSeekTime > this.GetBufferedEnd() || bForceBufferClear );
	if ( this.m_bSeekInProgress || (!this.ContainsGame() && bUnbufferedSeek) )
	{
		this.m_bSeekInProgress = true;

		// stop download timeouts
		if ( this.m_schNextDownload )
		{
			clearTimeout( this.m_schNextDownload );
			this.m_schNextDownload = null;
		}

		if ( this.m_schRetryDownload )
		{
			clearTimeout( this.m_schRetryDownload );
			this.m_schRetryDownload = null;
		}

		if ( this.m_schWaitForBuffer )
		{
			clearTimeout( this.m_schWaitForBuffer );
			this.m_schWaitForBuffer = null;
		}

		// Set the next segment based on nSeekTime
		var nSegmentForTime = CMPDParser.GetSegmentForTime( this.m_adaptation, nSeekTime * 1000 );
		this.m_nNextSegment = Math.min( Math.max( nSegmentForTime, this.m_adaptation.segmentTemplate.startNumber ), this.m_nTotalSegments - 1 );

		// PlayerLog("Set Next Segment: " + this.m_nNextSegment + " at approx. " + SecondsToTime(this.m_nNextSegment * CMPDParser.GetSegmentDuration(this.m_adaptation) / 1000) + " seconds.");

		// start deleting all data in buffers
		this.m_bRemoveBufferState = true;
		this.UpdateBuffer();

		// abort any download; will wait for this to complete
		if ( this.m_xhr )
			this.m_xhr.abort();

		this.ContinueSeek();
		return false; // can't shift time just yet
	}
	else
	{
		// if a scheduled download is setup, or we're waiting for the buffered content
		// to be added, clear it all and then get a new download schedule setup
		if ( ( !this.m_xhr && this.m_schNextDownload ) || this.m_schWaitForBuffer )
		{
			clearTimeout( this.m_schNextDownload );
			this.m_schNextDownload = null;

			clearTimeout( this.m_schWaitForBuffer );
			this.m_schWaitForBuffer = null;

			this.ScheduleNextDownload( nSeekTime );
		}

		return true; // can shift time now
	}
}

CSegmentLoader.prototype.RemoveAllBuffers = function()
{
	// clear anything that hasn't been added to the player yet
	this.m_bufSegments = [];

	// clears all buffer data from the player
	var buffered = (this.m_sourceBuffer != null) ? this.m_sourceBuffer.buffered : {};
	var nMaxBuffered = 0;
	for ( var i = 0; i < buffered.length; i++ )
	{
		if ( nMaxBuffered < buffered.end( i ) )
			nMaxBuffered = buffered.end( i );
	}

	this.m_bRemoveBufferState = false;
	if ( nMaxBuffered != 0 )
	{
		this.m_nBufferUpdate = CSegmentLoader.s_BufferUpdateRemove;
		this.m_sourceBuffer.remove( 0, nMaxBuffered + 1 );
	}
	else
	{
		this.OnSourceBufferUpdateEnd();
	}
}

CSegmentLoader.prototype.GetGameDataFrames = function()
{
	return this.m_rgGameDataFrames;
}

CSegmentLoader.prototype.ClearGameDataFramesBefore = function( nBeforeTime )
{
	var spliceCount = 0;
	for ( var i = 0; i < this.m_rgGameDataFrames.length; i++ )
	{
		if ( ( this.m_rgGameDataFrames[i].pts / 1000 ) < nBeforeTime )
			spliceCount++;
		else
			break;
	}

	// PlayerLog( 'Clearing Game Data Frames earlier than ' + nBeforeTime + '. Total Frames to Clear: ' + spliceCount );
	this.m_rgGameDataFrames.splice( 0, spliceCount );
	return spliceCount;
}

CSegmentLoader.prototype.LogDownload = function ( xhr, tsStartTime, dataSizeBytes )
{
	// remove the oldest log as needed
	if ( this.m_rgDownloadLog.length > this.m_nDownloadLogSize )
	{
		this.m_rgDownloadLog.shift();
	}

	// store the download
	var logEntry = [];
	logEntry.downloadTime = performance.now() - tsStartTime;

	if ( logEntry.downloadTime > 0 )
	{
		logEntry.dataSizeBytes = dataSizeBytes;
		this.m_rgDownloadLog.push( logEntry );

		// for stats tracking
		this.m_nBytesReceivedTotal += logEntry.dataSizeBytes;
		this.m_nSegmentDownloadTimeTotal += logEntry.downloadTime;
		this.m_nSegmentDownloadTimeEntries++;
		this.m_nSegmentDownloadTimeMinimum = ( this.m_nSegmentDownloadTimeMinimum == 0 ? logEntry.downloadTime : ( logEntry.downloadTime < this.m_nSegmentDownloadTimeMinimum ? logEntry.downloadTime : this.m_nSegmentDownloadTimeMinimum ) );
		this.m_nSegmentDownloadTimeMaximum = ( this.m_nSegmentDownloadTimeMaximum == 0 ? logEntry.downloadTime : ( logEntry.downloadTime > this.m_nSegmentDownloadTimeMaximum ? logEntry.downloadTime : this.m_nSegmentDownloadTimeMaximum ) );
	}
}

CSegmentLoader.prototype.GetBandwidthRate = function ()
{
	var nTotalTime = 0;
	var nTotalDataSizeBits = 0;
	for (var i = 0; i < this.m_rgDownloadLog.length; i++)
	{
		nTotalTime +=  this.m_rgDownloadLog[i].downloadTime;
		nTotalDataSizeBits +=  this.m_rgDownloadLog[i].dataSizeBytes;
	}

	// return in bits (per second) as representation bandwidth is as well
	if (nTotalTime != 0)
	{
		return ((nTotalDataSizeBits * 8) / (nTotalTime / 1000));
	}
	else
	{
		return 0;
	}
}

CSegmentLoader.prototype.GetSegmentDownloadTimeStats = function( bResetStats )
{
	var seg_stats = {};
	if ( this.m_nSegmentDownloadTimeEntries > 0 )
	{
		seg_stats = {
			'seg_avg': ( this.m_nSegmentDownloadTimeTotal / this.m_nSegmentDownloadTimeEntries ) / 1000,
			'seg_min': this.m_nSegmentDownloadTimeMinimum / 1000,
			'seg_max': this.m_nSegmentDownloadTimeMaximum / 1000,
		}
	}
	else
	{
		seg_stats = {
			'seg_avg': 0,
			'seg_min': 0,
			'seg_max': 0,
		}
	}

	if ( bResetStats )
	{
		this.m_nSegmentDownloadTimeTotal = 0;
		this.m_nSegmentDownloadTimeEntries = 0;
		this.m_nSegmentDownloadTimeMinimum = 0;
		this.m_nSegmentDownloadTimeMaximum = 0;
	}

	return seg_stats;
}

CSegmentLoader.prototype.GetBytesReceived = function()
{
	return this.m_nBytesReceivedTotal;
}

CSegmentLoader.prototype.GetFailedSegmentDownloads = function()
{
	return this.m_nFailedSegmentDownloads;
}

CSegmentLoader.prototype.GetDownloadLog = function()
{
	return this.m_rgDownloadLog;
}

/////////////////////////////////////////////////////////////////
// MPD parser
/////////////////////////////////////////////////////////////////
function CMPDParser()
{
	this.availabilityStartTime = new Date();
	this.periods = []
}

CMPDParser.strBaseURL = '';
CMPDParser.GetBaseURL = function()
{
	return CMPDParser.strBaseURL;
}

CMPDParser.strStatsLink = '';
CMPDParser.strStalledLink = '';
CMPDParser.strEventLogLink = '';
CMPDParser.GetAnalyticsStatsLink = function()
{
	return CMPDParser.strStatsLink;
}

CMPDParser.GetAnalyticsStalledLink = function()
{
	return CMPDParser.strStalledLink;
}

CMPDParser.GetEventLogLink = function()
{
	return CMPDParser.strEventLogLink;
}

// Counts the number of representation found in the DASH MPD. Different from the other methods that use the
// representation built in the Loaders.
CMPDParser.prototype.GetMPDRepresentationCount = function()
{
	var count = 0;
	for ( var i = 0; i < this.periods[0].adaptationSets.length; i++ )
	{
		count += this.periods[0].adaptationSets[i].representations.length;
	}
	return count;
};

CMPDParser.prototype.BParse = function( xmlDoc, bUseMpdRelativePathForSegments, strURL )
{
	var _mpd = this;
	var xml = $J( xmlDoc );
	_mpd.m_xml = xml;

	// get mpd
	var xmlMPD = xml.find( 'MPD' );
	if ( xmlMPD.size() == 0 )
	{
		// might be the root node, check
		xmlMPD = xml.filter(':first');
		if (xmlMPD[0].nodeName != 'MPD')
		{
			return false;
		}
	}

	xmlMPD = xmlMPD[0];
	_mpd.type = $J( xmlMPD ).attr( 'type' );
	_mpd.minBufferTime = _mpd.ParseDuration(xmlMPD, 'minBufferTime');
	_mpd.hasProtectedRepresentations = false;
	if (_mpd.type == 'dynamic')
	{
		_mpd.availabilityStartTime = _mpd.ParseDate(xmlMPD, 'availabilityStartTime');
		_mpd.publishTime = _mpd.ParseDate(xmlMPD, 'publishTime');
		_mpd.minimumUpdatePeriod = _mpd.ParseDuration(xmlMPD, 'minimumUpdatePeriod');
		_mpd.timeShiftBufferDepth = _mpd.ParseDuration(xmlMPD, 'timeShiftBufferDepth');

		if (!_mpd.availabilityStartTime || !_mpd.publishTime || !_mpd.minimumUpdatePeriod || !_mpd.minBufferTime || !_mpd.timeShiftBufferDepth )
		{
			return false;
		}
	}
	else if (_mpd.type == 'static' )
	{
		_mpd.mediaPresentationDuration = _mpd.ParseDuration(xmlMPD, 'mediaPresentationDuration');

		if ( !_mpd.minBufferTime || !_mpd.mediaPresentationDuration ) {
			PlayerLog("MPD - Missing Buffer Time or Presentation Duration");
			return false;
		}
	}

	// MPD BaseURL if set - Must be direct child of MPD
	var baseUrl = $J( xmlMPD ).find('> BaseURL');
	if ( baseUrl && baseUrl.length > 0 )
	{
		CMPDParser.strBaseURL = baseUrl.text();
	}
	else if ( bUseMpdRelativePathForSegments )
	{
		CMPDParser.strBaseURL = strURL.substr(0, strURL.lastIndexOf( '/' ) + 1 );
	}

	// stats reporting if Analytics set in MPD
	var analytics = $J( xmlMPD ).find( 'Analytics' );
	if ( analytics )
	{
		CMPDParser.strStatsLink = $J( analytics ).attr( 'statslink' );
		CMPDParser.strStalledLink = $J( analytics ).attr( 'stalledlink' );
		CMPDParser.strEventLogLink = $J( analytics ).attr( 'eventlink' );
	}

	// grab all periods.. only support 1
	var xmlPeriods = xml.find( 'Period' );
	if ( xmlPeriods.size() == 0 )
		return false;

	var xmlPeriod = xmlPeriods[0];
	var period = {};

	period.id = $J( xmlPeriod ).attr( 'id' );
	period.start = _mpd.ParseDuration( xmlPeriod, 'start' );
	if ( !period.id || period.start === null )
	{
		PlayerLog("MPD - Missing Period Information.")
		return false;
	}

	period.duration = _mpd.ParseDuration( xmlPeriod, 'duration' ); // optional on live

	// parse adaptation sets for this period
	var bError = false;
	_mpd.periods = [];
	_mpd.periods.push( period );
	_mpd.periods[0].adaptationSets = [];
	$J( xmlPeriod ).find( 'AdaptationSet' ).each( function()
	{

		var xmlAdaptation = $J( this );
		var adaptationSet = {};
		adaptationSet.segmentAlignment = _mpd.ParseBool( xmlAdaptation, 'segmentAlignment' );
		adaptationSet.isClosedCaption = ( xmlAdaptation.attr( 'mimeType' ) == "text/vtt" ? true : false );
		adaptationSet.language = xmlAdaptation.attr( 'lang' );
		adaptationSet.containsVideo = false;
		adaptationSet.containsAudio = false;
		adaptationSet.containsGame = false;
		adaptationSet.description = ( typeof xmlAdaptation.attr( 'description' ) === 'undefined' || xmlAdaptation.attr( 'description' ) == '' ) ? adaptationSet.language : xmlAdaptation.attr( 'description' );
		adaptationSet.forceSub = ( typeof xmlAdaptation.attr( 'forceSub' ) === 'undefined' || xmlAdaptation.attr( 'forceSub' ) == '' ) ? '' : xmlAdaptation.attr( 'forceSub' );
		adaptationSet.id = ( typeof xmlAdaptation.attr( 'id' ) === 'undefined' ) ? null : xmlAdaptation.attr( 'id' );

		if ( !adaptationSet.isClosedCaption )
		{
			if ( adaptationSet.segmentAlignment == null )
			{
				bError = true;
				PlayerLog("MPD - Segment Alignment Missing");
				return;
			}

			// parse components
			$J( xmlAdaptation ).find( 'ContentComponent' ).each( function()
			{
				var xmlComponent = $J( this );
				var type = $J( xmlComponent ).attr( 'contentType' );
				if ( type == 'video' )
					adaptationSet.containsVideo = true;
				if ( type == 'audio' )
					adaptationSet.containsAudio = true;
				if ( type == 'game' )
					adaptationSet.containsGame = true;
			});

			if ( adaptationSet.containsVideo )
			{
				var xmlThumbnails = $J( xmlAdaptation ).find('> Thumbnails');
				if ( xmlThumbnails.size() != 0 )
				{
					adaptationSet.thumbnails = {
						period: _mpd.ParseInt( xmlThumbnails, 'period' ),
						template: $J( xmlThumbnails ).attr( 'template' ),
						sheet: _mpd.ParseInt( xmlThumbnails, 'sheet' ),
						sheetSeconds: _mpd.ParseInt( xmlThumbnails, 'period' ) * _mpd.ParseInt( xmlThumbnails, 'sheet' )
					}
				}
			}

			// parse roles ( main, alternate, supplementary, commentary, dub )
			adaptationSet.roles = [];
			$J( xmlAdaptation ).find( 'Role' ).each( function()
			{
				var xmlComponent = $J( this );
				var type = $J( xmlComponent ).attr( 'value' );
				adaptationSet.roles.push( type );
			});

			// find segment template
			var xmlSegmentTemplates = $J( xmlAdaptation ).find( 'SegmentTemplate' );
			if ( xmlSegmentTemplates.size() == 0 )
			{
				bError = true;
				PlayerLog("MPD - Segment Template Missing");
				return;
			}

			var xmlSegmentTemplate = xmlSegmentTemplates[0];
			var segmentTemplate = {};
			segmentTemplate.timescale = _mpd.ParseInt( xmlSegmentTemplate, 'timescale' );
			segmentTemplate.duration = _mpd.ParseInt( xmlSegmentTemplate, 'duration' );
			segmentTemplate.startNumber = _mpd.ParseInt( xmlSegmentTemplate, 'startNumber' );
			segmentTemplate.media = $J( xmlSegmentTemplate ).attr( 'media' );

			if ( !adaptationSet.containsGame )
				segmentTemplate.initialization = $J( xmlSegmentTemplate ).attr( 'initialization' );
			else
				segmentTemplate.initialization = segmentTemplate.media;

			if ( !segmentTemplate.timescale || !segmentTemplate.duration || !segmentTemplate.startNumber || !segmentTemplate.media || !segmentTemplate.initialization )
			{
				bError = true;
				PlayerLog("MPD - Segment Template Data Missing");
				return false;
			}

			adaptationSet.segmentTemplate = segmentTemplate;

			// parse all representations
			adaptationSet.representations = [];
			$J( xmlAdaptation ).find( 'Representation' ).each( function()
			{
				var xmlRepresentation = $J( this );
				var representation = {};
				representation.id = $J( xmlRepresentation ).attr( 'id' );
				representation.mimeType = $J( xmlRepresentation ).attr( 'mimeType' );
				representation.codecs = $J( xmlRepresentation ).attr( 'codecs' );
				representation.bandwidth = _mpd.ParseInt( xmlRepresentation, 'bandwidth' );

				if (adaptationSet.containsVideo)
				{
					representation.width = _mpd.ParseInt( xmlRepresentation, 'width');
					representation.height = _mpd.ParseInt( xmlRepresentation, 'height');
					representation.frameRate = _mpd.ParseFramerate( xmlRepresentation, 'frameRate' );

					if ( !representation.id || !representation.mimeType || !representation.codecs || !representation.bandwidth  )
					{
						bError = true;
						PlayerLog("MPD - Representation Video Data Missing");
						return;
					}
				}
				else if (adaptationSet.containsAudio)
				{
					representation.audioSamplingRate = _mpd.ParseInt( xmlRepresentation, 'audioSamplingRate');

					// AudioChannelConfiguration to determine Audio Channels
					var xmlAudioChannelConfig = $J( xmlRepresentation ).find("AudioChannelConfiguration");
					if (xmlAudioChannelConfig)
						representation.audioChannels = _mpd.ParseInt( xmlAudioChannelConfig, 'value');

					if (!representation.audioChannels)
						representation.audioChannels = 2;

					if ( !representation.id || !representation.mimeType || !representation.codecs || !representation.bandwidth || !representation.audioSamplingRate || !representation.audioChannels)
					{
						bError = true;
						PlayerLog("MPD - Representation Audio Data Missing");
						return;
					}
				}

				adaptationSet.representations.push( representation );
			});

			// Parse DRM Configurations for adaptation set
			adaptationSet.keySystems = {};
			xmlAdaptation.find( 'ContentProtection' ).each( function()
			{
				var xmlContentProtection = $J( this );
				_mpd.hasProtectedRepresentations = true;
				switch ( xmlContentProtection.attr( 'schemeIdUri' ) )
				{
					case 'urn:mpeg:dash:mp4protection:2011':
						if ( xmlContentProtection.attr( 'value' ) === 'cenc' )
							adaptationSet.isCencEncrypted = true;
						break;

					// Widevine marker element
					case 'urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed':
						adaptationSet.keySystems[ 'com.widevine.alpha' ] = true;
						break;
				}
			});

		}
		else
		{
			// parse roles ( caption or subtitle )
			adaptationSet.roles = ['subtitle']; // default
			$J( xmlAdaptation ).find( 'Role' ).each( function()
			{
				var xmlComponent = $J( this );
				var type = $J( xmlComponent ).attr( 'value' );
				adaptationSet.roles[0] = type;
			});

			// parse each adaptation set for closed captions
			adaptationSet.representations = [];
			$J( xmlAdaptation ).find( 'Representation' ).each( function()
			{
				var xmlRepresentation = $J( this );
				var representation = {};
				representation.id = $J( xmlRepresentation ).attr( 'id' );
				representation.bandwidth = _mpd.ParseInt( xmlRepresentation, 'bandwidth' );

				var closedCaptionFile = $J( xmlAdaptation ).find( 'BaseURL' );
				if ( !closedCaptionFile )
				{
					bError = true;
					PlayerLog( "Closed Caption File has no BaseURL for (id): " + representation.id );
					return;
				}

				// parse and store the caption URL
				representation.closedCaptionFile = CMPDParser.strBaseURL + CMPDParser.ReplaceTemplateTokens( closedCaptionFile.first().text(), representation.id, 0 );

				adaptationSet.representations.push( representation );
			});
		}

		// done
		_mpd.periods[0].adaptationSets.push( adaptationSet );
	});

	return !bError;
}

CMPDParser.prototype.BUpdate = function( xmlDoc )
{
	var _mpd = this;
	var xml = $J( xmlDoc );
	_mpd.m_xml = xml;

	// make sure it is an mpd
	var xmlMPD = xml.find( 'MPD' );
	if ( xmlMPD.size() == 0 )
		return false;

	// stats reporting if Analytics set in MPD
	var analytics = $J( xmlMPD ).find( 'Analytics' );
	if ( analytics )
	{
		CMPDParser.strStatsLink = $J( analytics ).attr( 'statslink' );
		CMPDParser.strStalledLink = $J( analytics ).attr( 'stalledlink' );
		CMPDParser.strEventLogLink = $J( analytics ).attr( 'eventlink' );
	}

	// find existing period
	if ( this.periods.length == 0 )
		return false;

	var xmlPeriod;
	xml.find( 'Period' ).each( function()
	{
		var newID = $J( this ).attr( 'id' );
		var oldID = _mpd.periods[0].id;
		if ( newID == _mpd.periods[0].id )
			xmlPeriod = $J( this );
	});

	if ( !xmlPeriod )
		return false;

	// parse adapation sets for this period
	var bError = false;
	$J( xmlPeriod ).find( 'AdaptationSet' ).each( function()
	{
		var xmlAdaptation = $J( this );
		var strAdaptationID = xmlAdaptation.attr( 'id' );
		if ( !strAdaptationID )
			return;

		// find matching adaptation
		var adaptationSet = null;
		for ( var i = 0; i < _mpd.periods[0].adaptationSets; i++ )
		{
			if ( strAdaptationID == _mpd.periods[0].adaptationSets[i].id )
			{
				adaptationSet = _mpd.periods[0].adaptationSets[i];
				break;
			}
		}

		if ( !adaptationSet )
			return;

		if ( adaptationSet.containsVideo )
		{
			var xmlThumbnails = $J( xmlAdaptation ).find('> Thumbnails');
			if ( xmlThumbnails )
			{
				adaptationSet.thumbnails = {
					period: _mpd.ParseInt( xmlThumbnails, 'period' ),
					template: $J( xmlThumbnails ).attr( 'template' ),
					sheet: _mpd.ParseInt( xmlThumbnails, 'sheet' ),
					sheetSeconds: _mpd.ParseInt( xmlThumbnails, 'period' ) * _mpd.ParseInt( xmlThumbnails, 'sheet' )
				}
			}
		}

		var strMedia = $J( xmlSegmentTemplate ).attr( 'media' );
		var strInitialization = $J( xmlSegmentTemplate ).attr( 'initialization' );
		if ( !strMedia || !strInitialization )
		{
			bError = true;
			return;
		}

		var segmentTemplate = adaptationSet.segmentTemplate;
		segmentTemplate.media = strMedia;
		segmentTemplate.initialization = strInitialization;
	});

	return !bError;
}

CMPDParser.prototype.ParseDate = function( xml, strAttr )
{
	var val = $J( xml ).attr( strAttr );
	if ( !val )
		return null;

	var date = new Date( val );
	if ( Object.prototype.toString.call( date ) === '[object Date]' )
		return date;

	return null;
}

CMPDParser.prototype.ParseDuration = function( xml, strAttr )
{
	// example: PT3H50M22.33S or PT120S
	var val = $J( xml ).attr( strAttr );
	if ( !val )
		return null;

	var ret = 0;
	var match = val.match( /(\d*)H/ );
	if ( match )
		ret += parseFloat(match[1]) * 60 * 60;

	match = val.match( /(\d*)M/ );
	if ( match )
		ret += parseFloat(match[1]) * 60;

	match = val.match( /(\d*\.?\d*)S/ );
	if ( match )
		ret += parseFloat(match[1]);

	return ret;
}

CMPDParser.prototype.ParseBool = function( xml, strAttr )
{
	var val = $J( xml ).attr( strAttr );
	if ( !val )
		return null;

	val = val.toLowerCase();
	if ( val == 'true' )
		return true;
	if ( val == 'false' )
		return false;

	return null;
}

CMPDParser.prototype.ParseInt = function( xml, strAttr )
{
	var val = $J( xml ).attr( strAttr );
	if ( !val )
		return null;

	return parseInt( val );
}

CMPDParser.prototype.ParseFramerate = function( xml, strAttr )
{
	var val = $J( xml ).attr( strAttr );
	if ( !val )
		return null;

	return eval( val );
}

CMPDParser.ReplaceTemplateTokens = function( template, representationID, number )
{
	template = template.replace( '$RepresentationID$', representationID );
	template = template.replace( '$Number$', number );

	return template;
}

CMPDParser.GetInitSegmentURL = function( adaptationSet, representation )
{
	var url = CMPDParser.GetBaseURL() + adaptationSet.segmentTemplate.initialization;
	return CMPDParser.ReplaceTemplateTokens( url, representation.id, 0 );
}

CMPDParser.GetSegmentURL = function( adaptationSet, representation, nSegment )
{
	var url = CMPDParser.GetBaseURL() + adaptationSet.segmentTemplate.media;
	return CMPDParser.ReplaceTemplateTokens( url, representation.id, nSegment );
}

CMPDParser.prototype.BIsDynamic = function()
{
	return ( this.type == 'dynamic' );
}

CMPDParser.prototype.GetSegmentAvailableFromNow = function( adaptationSet, nSegment, tsMovieStart )
{
	// video player and this parser don't currently handle availability start time for static content
	if ( !this.BIsDynamic() )
		return 0;

	var unSegmentDurationMS = CMPDParser.GetSegmentDuration( adaptationSet );
	var iSegment = nSegment - adaptationSet.segmentTemplate.startNumber;

	var unAvailableMS = performance.now() - tsMovieStart;
	var unSegmentReadyAt = iSegment * unSegmentDurationMS;

	return unSegmentReadyAt - unAvailableMS;
}

CMPDParser.GetSegmentDuration = function( adaptationSet )
{
	// currently only support all segments having the same duration
	if ( adaptationSet )
		return (adaptationSet.segmentTemplate.duration / adaptationSet.segmentTemplate.timescale) * 1000;
}

CMPDParser.GetSegmentForTime = function( adaptationSet, unTime )
{
	// currently only support all segments having the same duration
	var unSegmentDuration = CMPDParser.GetSegmentDuration( adaptationSet );
	return Math.floor( unTime / unSegmentDuration ) + 1;
}

CMPDParser.prototype.GetPeriodDuration = function( unPeriod )
{
	if ( this.BIsDynamic() )
	{
		PlayerLog( 'GetPeriodDuration is unknown for live content!' );
		return 0;
	}

	if ( unPeriod < this.periods.length && this.periods[unPeriod].duration )
		return this.periods[unPeriod].duration;
	else
		return 0;
}

/////////////////////////////////////////////////////////////////
// UI
/////////////////////////////////////////////////////////////////
function CDASHPlayerUI( player, eUIMode )
{
	this.m_bHidden = false;
	this.m_player = player;
	this.m_elOverlay = null;
	this.m_elLiveBanner = null;
	this.m_elContainer = null;
	this.m_timeoutHide = null;
	this.m_bPlayingLiveEdge = true;
	this.m_elVideoTitle = null;
	this.m_elBufferingMessage = null;
	this.m_elBigPlayPauseIndicator = null;
	this.m_bIsSafariBrowser = (navigator.userAgent.toLowerCase().indexOf('safari') != -1 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1);
	this.m_bIsInternetExplorer = (navigator.appVersion.toLowerCase().indexOf('trident/') != -1);
	this.m_strUniqueSettingsID = '';
	this.m_elActiveNotification = null;
	this.m_schNotificationTimeout = null;
	this.m_ThumbnailInfo = null;
	this.m_bSettingsPanelInit = false;
	this.m_bClosedCaptionPanelInit = false;

	this.m_eUIMode = eUIMode;
	this.m_strStylePrefix = this.BInTenFoot() ? 'tenfoot_' : '';

	this.m_elSettingsPanel = null;
	this.m_elClosedCaptionsPanel = null;

	this.m_eFocusedUIPanel = CDASHPlayerUI.eUIPanelMain;
	this.m_nFocusedUIElementIndex = CDASHPlayerUI.PLAY_PAUSE_INDEX;
	this.m_fLastProgressBarScrubPerc = 0.0;

	this.m_fLastTenFootKeyDown = performance.now();
	this.m_schPrecacheTimeout = null;
	this.m_nThumbnailHeight = 0;
	this.m_nThumbnailOffset = 0;

	this.m_fPlaybackRate = 1.0;
	this.m_bEndOfVODShown = false;

	this.m_elVideoSuggest = null;
	this.m_oVideoSuggestData = {};
	this.m_bUseSDLFullScreen = false;
}

CDASHPlayerUI.CLOSED_CAPTIONS_NONE = "none";
CDASHPlayerUI.PRELOAD_THUMBNAILS = true;
CDASHPlayerUI.PRELOAD_THUMBNAILS_PRELOAD_DELAY_MS = 500;
CDASHPlayerUI.CLOSED_CAPTIONS_SELECT_EXT = "_CC";
CDASHPlayerUI.SKIP_SHORT_TIME_SECS = 15;
CDASHPlayerUI.SKIP_LONG_TIME_SECS = 300;
CDASHPlayerUI.SKIP_LEFT_PAD_SECS = 60;
CDASHPlayerUI.VOLUME_STEP_SIZE = 0.025;
CDASHPlayerUI.TENFOOT_KEYDOWN_DELAY = 200;
CDASHPlayerUI.TENFOOT_UI_FADE_MS = 100;
CDASHPlayerUI.DESKTOP_UI_FADE_MS = 200;

CDASHPlayerUI.eUIModeDesktop = 0;
CDASHPlayerUI.eUIModeTenFoot = 1;
CDASHPlayerUI.eUIModeMobile = 2;

CDASHPlayerUI.eUIPanelMain = 0;
CDASHPlayerUI.eUIPanelSettings = 1;
CDASHPlayerUI.eUIPanelCaptions = 2;

// Input to Keyboard / Controller Navigation
CDASHPlayerUI.NAVIGATE_INIT = 0;
CDASHPlayerUI.NAVIGATE_SELF = -1;

CDASHPlayerUI.LEFT_PAD_LEFT = 37;
CDASHPlayerUI.LEFT_PAD_UP = 38;
CDASHPlayerUI.LEFT_PAD_RIGHT = 39;
CDASHPlayerUI.LEFT_PAD_DOWN = 40;

CDASHPlayerUI.RIGHT_PAD_LEFT = 68;
CDASHPlayerUI.RIGHT_PAD_UP = 82;
CDASHPlayerUI.RIGHT_PAD_RIGHT = 71;
CDASHPlayerUI.RIGHT_PAD_DOWN = 70;

CDASHPlayerUI.BUTTON_A = 65;
CDASHPlayerUI.BUTTON_B = 66;
CDASHPlayerUI.BUTTON_X = 88;
CDASHPlayerUI.BUTTON_Y = 89;

CDASHPlayerUI.LEFT_GRIP = 72;
CDASHPlayerUI.LEFT_BUMPER = 74;
CDASHPlayerUI.BACK = 81;
CDASHPlayerUI.START = 32;
CDASHPlayerUI.RIGHT_BUMPER = 75;
CDASHPlayerUI.RIGHT_GRIP = 76;

// UI data-index elements
CDASHPlayerUI.NO_ELEMENT_INDEX = 0;
CDASHPlayerUI.SKIP_BACK_INDEX = 1;
CDASHPlayerUI.STOP_INDEX = 2;
CDASHPlayerUI.PLAY_PAUSE_INDEX = 3;
CDASHPlayerUI.SKIP_FORWARD_INDEX = 4;
CDASHPlayerUI.PROGRESS_BAR_INDEX = 11;
CDASHPlayerUI.NEXT_VIDEO_INDEX = 21;
CDASHPlayerUI.CLOSED_CAPTION_INDEX = 22;
CDASHPlayerUI.SETTINGS_INDEX = 23;
CDASHPlayerUI.VOLUME_CONTAINER_INDEX = 24;
CDASHPlayerUI.SETTINGS_PANEL_FIRST_INDEX = 31;
CDASHPlayerUI.SETTINGS_PANEL_LAST_INDEX = 35;
CDASHPlayerUI.CAPTIONS_PANEL_FIRST_INDEX = 41;
CDASHPlayerUI.CAPTIONS_PANEL_LAST_INDEX = 49;

CDASHPlayerUI.prototype.Init = function()
{
	var _ui = this;
	var _overlay = this.parentNode;

	this.m_elContainer = $J( this.m_player.m_elVideoPlayer.parentNode );

	this.m_elOverlay = $J( '.' + this.m_strStylePrefix + 'dash_overlay' );
	this.m_elContainer.css( {'position': 'relative', 'overflow': 'hidden' } );
	this.m_elContainer.append( this.m_elOverlay );

	this.m_elContainer.on( 'fullscreenchange', function() { _ui.OnFullScreenChange(); } );
	this.m_elContainer.on( 'mozfullscreenchange', function() { _ui.OnFullScreenChange(); } );
	this.m_elContainer.on( 'webkitfullscreenchange', function() { _ui.OnFullScreenChange(); } );
	this.m_elContainer.on( 'msfullscreenchange', function() { _ui.OnFullScreenChange(); } );

	var elVideoPlayer = $J( this.m_player.m_elVideoPlayer );
	elVideoPlayer.on( 'timeupdate', function() { _ui.OnTimeUpdatePlayer() } );
	elVideoPlayer.on( 'bufferedupdate', function() { _ui.OnTimeUpdatePlayer() } );
	elVideoPlayer.on( 'playing', function() { _ui.OnPlaying() } );
	elVideoPlayer.on( 'pause', function() { _ui.OnPause() } );
	elVideoPlayer.on( 'dash_player_initialized', function() { _ui.OnVideoInitialized(); } );
	elVideoPlayer.on( 'click', function() { _ui.TogglePlayPause() } );

	// Mobile devices you don't exactly track a mouse pointer. We will depend on touch events (clicks) to drive
	// the showing of the playback UI and then let it disappear on timeout.
	if( this.m_eUIMode !== CDASHPlayerUI.eUIModeMobile )
	{
		elVideoPlayer.on( 'mousemove', function() { _ui.OnMouseMovePlayer(); } );

		this.m_elOverlay.on( 'mouseenter', function() { _ui.OnMouseEnterOverlay() } );
		this.m_elOverlay.on( 'mouseleave', function( e ) { _ui.OnMouseLeaveOverlay( e ) } );
	}

	$J( '.live_button', _overlay ).on('click', function() { _ui.JumpToLive(); } );
	$J( '.play_button', _overlay ).on('click', function() { _ui.TogglePlayPause(); } );
	$J( '.stop_button', _overlay ).on('click', function() { _ui.StopVideo(); } );
	$J( '.volume_slider', _overlay ).on( 'click', function(e) { _ui.OnVolumeClick( e, this ); } );
	$J( '.volume_slider', _overlay ).on( 'mousedown', function(e) { _ui.OnVolumeStartDrag( e, this ); } );
	$J( '.volume_slider', _overlay ).on( 'mouseup', function(e) { _ui.OnVolumeStopDrag( e, this ); } );
	$J( '.volume_slider', _overlay ).on( 'mouseleave', function(e) { _ui.OnVolumeStopDrag( e, this ); } );

	$J( '.volume_icon', _overlay ).on( 'click', function(e) { _ui.ToggleMute( e, this ); });
	$J( '.volume_icon', _overlay ).on( 'mouseenter', function(e) { _ui.ShowVolumeBar(); });
	$J( '.volume_container', _overlay ).on( 'mouseleave', function(e) { _ui.HideVolumeBar(); });
	$J( '.fullscreen_button', _overlay ).on( 'click', function(e) { _ui.ToggleFullscreen(); });
	$J( '.progress_bar_container', _overlay ).on( 'click', function(e) { _ui.OnProgressClick( e, this ); });
	$J( '.progress_bar_container', _overlay ).on( 'mousemove', function(e) { _ui.OnProgressHover( e, this ); });
	$J( '.progress_bar_container', _overlay ).on( 'mouseleave', function(e) { _ui.OnProgressLeave( e, this ); });
	$J( '.skip_back', _overlay ).on( 'click', function(e) { _ui.OnSkipTime( -CDASHPlayerUI.SKIP_SHORT_TIME_SECS ); });
	$J( '.skip_fwd', _overlay ).on( 'click', function(e) { _ui.OnSkipTime( CDASHPlayerUI.SKIP_SHORT_TIME_SECS ); });

	$J( '.next_video', _overlay ).on( 'mouseenter', function(e) { _ui.ShowVideoSuggestion( true ) });
	$J( '.next_video', _overlay ).on( 'mouseleave', function(e) { _ui.ShowVideoSuggestion( false ) });

	this.m_elSettingsPanel = $J( '#' + this.m_strStylePrefix + 'settings_panel_wrapper' );
	this.m_elContainer.append( this.m_elSettingsPanel );
	this.m_elClosedCaptionsPanel = $J( '#' + this.m_strStylePrefix + 'closed_captions_panel_wrapper' );
	this.m_elContainer.append( this.m_elClosedCaptionsPanel );

	this.m_elLiveResSelectorPanel = $J( '.video_representation_live_video' );

	if ( this.BInTenFoot() )
	{
		$J( window ).on( 'keydown', function ( e ) { _ui.OnKeyDownTenFoot( e ); } );
		$J( window ).on( 'mousewheel', function ( e ) { _ui.OnMouseWheelTenFoot( e ); } );
	}
	else
	{
		$J( window ).on( 'keydown', function ( e ) { _ui.OnKeyDown( e ); } );
	}
	this.m_fPlaybackRate = this.m_player.GetPlaybackRate();
}

CDASHPlayerUI.prototype.BInTenFoot = function()
{
	return ( this.m_eUIMode == CDASHPlayerUI.eUIModeTenFoot );
}

// Once the video is playing, init these UI elements
CDASHPlayerUI.prototype.OnVideoInitialized = function()
{
	var _ui = this;

	this.LoadVolumeSettings();

	if ( this.m_player.BIsLiveContent() )
	{
		if ( !this.m_elLiveBanner )
		{
			this.m_elLiveBanner = $J( '.dash_video_live_banner' );
			this.m_elLiveBanner.on( 'click', function() { _ui.JumpToLive(); } );
			this.m_elContainer.append( this.m_elLiveBanner );
		}
	}
	else if ( this.m_elLiveBanner )
	{
		this.m_elLiveBanner.remove();
		this.m_elLiveBanner = null;
	}

	if ( !this.m_player.BIsLiveContent() )
	{
		if ( !this.m_elBufferingMessage )
		{
			this.m_elBufferingMessage = $J( '#' + this.m_strStylePrefix + 'dash_video_buffering_message' );
			this.m_elContainer.append( this.m_elBufferingMessage );
		}
	}

	if ( !this.BInTenFoot() && !this.m_elVideoTitle )
	{
		this.m_elVideoTitle = $J( '#dash_video_title_banner' );
		this.m_elContainer.append( this.m_elVideoTitle );
	}

	if ( !this.BInTenFoot() && !this.m_elVideoSuggest )
	{
		this.m_elVideoSuggest = $J( '#dash_video_suggest' );
		this.m_elContainer.append( this.m_elVideoSuggest );
	}

	if ( !this.BInTenFoot() && !this.m_elBigPlayPauseIndicator )
	{
		this.m_elBigPlayPauseIndicator = $J( '.dash_big_playpause_indicator' );
		this.m_elContainer.append( this.m_elBigPlayPauseIndicator );
		this.m_elBigPlayPauseIndicator.on( 'click', function() { _ui.TogglePlayPause() } );
	}

	if ( !this.m_player.BPlayingAudio() )
	{
		$J( '.control_container', this.m_elOverlay ).addClass( 'no_audio_track' );
		$J( this.m_player.m_elVideoPlayer ).one( 'bufferingcomplete', function() { _ui.DisplayNotification( 'This video does not contain any audio', 15000 ) } );
	}
	else
	{
		$J( '.control_container', this.m_elOverlay ).removeClass( 'no_audio_track' );
	}

	this.m_ThumbnailInfo = this.m_player.GetThumbnailInfoForVideo();
	if ( this.m_ThumbnailInfo && this.m_ThumbnailInfo.template && $J( '#thumbnailcache' ).length == 0 )
	{
		// update display
		$J( '.progress_time_info' ).addClass( 'thumbnails' );

		// create thumbnail cache if it's to be used
		if ( !this.m_player.BIsLiveContent() && CDASHPlayerUI.PRELOAD_THUMBNAILS )
		{
			$J( '<div/>', { id: 'thumbnailcache' } ).appendTo( 'body' );
		}

		this.PrepareThumbnailDisplay();
	}

	if ( this.BInTenFoot() )
	{
		this.InitSettingsPanelInUITenFoot();
		this.InitClosedCaptionOptionPanelTenFoot();

		document.styleSheets[document.styleSheets.length-1].addRule( '::-webkit-scrollbar', 'width:8px;' );
		document.styleSheets[document.styleSheets.length-1].addRule( '::-webkit-scrollbar-track', 'background-color:#3b526f;' );
		document.styleSheets[document.styleSheets.length-1].addRule( '::-webkit-scrollbar-thumb', 'background-color:#d9dce0;' );
	}
	else
	{
		this.InitSettingsPanelInUI();
		this.InitClosedCaptionOptionPanel();
	}
}

CDASHPlayerUI.prototype.InitSettingsPanelInUI = function()
{
	if ( this.m_bSettingsPanelInit || this.BInTenFoot() )
		return;

	var _ui = this;

	// If we are actually playing back HLS, we do not actually have any control of the adaptive bit rates
	// therefore hide the setting icons on the player's UI.
	if( this.m_player.m_bUseHLSManifest )
	{
		$J('.settings_icon').css('display', 'none');
	}

	// resolution selector for live
	if ( this.m_player.BIsLiveContent() )
	{
		$J( '#settings_icon' ).on( 'click', function ()
		{
			_ui.UpdateLiveResolutionSelector();
			_ui.m_elLiveResSelectorPanel.toggle();
		} );

		var rgRepresentation = this.m_player.GetRepresentationsArray( true );

		// show "auto" only if there is more than one representation
		if ( rgRepresentation.length > 1 )
			this.m_elLiveResSelectorPanel.append( '<span data-value="-1">Auto</span>' );

		for ( var r = 0; r < rgRepresentation.length; r++ )
		{
			if ( rgRepresentation[ r ].height.toString().length > 1 )
			{
				var strResolution = rgRepresentation[ r ].height + 'p';
				var strBandwidth = ( rgRepresentation[ r ].bandwidth / 1000000 ).toFixed( 1 ) + 'Mbps';
				var strFPS = '';

				if ( this.m_player.BIsLiveContent() && rgRepresentation[ r ].frameRate > CDASHPlayer.MAX_STANDARD_FRAMERATE )
					strFPS = rgRepresentation[ r ].frameRate; // advertise high FPS

				this.m_elLiveResSelectorPanel.append( '<span data-value="' + r + '">' + strResolution + strFPS + ' (' + strBandwidth + ') </span>' );
			}
		}

		$J( 'span', this.m_elLiveResSelectorPanel ).on( 'click', function ()
		{
			_ui.m_elLiveResSelectorPanel.fadeOut();
			_ui.m_player.UpdateVideoRepresentation( $J( this ).attr( 'data-value' ), false );
		} );

		$J( window ).resize(function() {
			_ui.UpdateLiveResolutionSelector();
		});

	}
	else
	{
		// settings panel for VOD
		$J( '#settings_icon' ).on( 'click', function ()
		{
			if ( !_ui.m_elClosedCaptionsPanel.is( ':hidden' ) )
			{
				$J( '#captions_done' ).click();
			}

			_ui.ShowSettingsPanel();

		} );

		$J( '#settings_done' ).on( 'click', function ()
		{
			_ui.m_elSettingsPanel.fadeOut( CDASHPlayerUI.DESKTOP_UI_FADE_MS );
			_ui.SaveAudioTrackSelected();
			_ui.SaveVideoTrackSelected();
			_ui.m_eFocusedUIPanel = CDASHPlayerUI.eUIPanelMain;
		} );

		$J( '#representation_select_video' ).on( 'change', function ()
		{
			_ui.m_player.UpdateVideoRepresentation( this.value, false );
			this.blur();
		} );

		// Video Tracks (dub, alternate, etc.)
		var rgVideoAdaptations = this.m_player.GetAllVideoAdaptations();
		rgVideoAdaptations = rgVideoAdaptations.sort( CDASHPlayerUI.SortAdaptationsByDescription ).sort( CDASHPlayerUI.SortAdaptationsByRole ); // first by group, then by name

		// show selector if only more than one video track
		if ( rgVideoAdaptations.length > 0 )
		{
			for ( var r = 0; r < rgVideoAdaptations.length; r++ )
			{
				var val = rgVideoAdaptations[ r ].id;
				var display = '';
				switch ( rgVideoAdaptations[ r ].roles[ 0 ].toLowerCase() )
				{
					case 'main':
					case 'dub':
						display = CVTTCaptionLoader.GetDisplayNameFromCode( rgVideoAdaptations[ r ].language );
						break;

					case 'alternate':
						if ( rgVideoAdaptations[ r ].description == rgVideoAdaptations[ r ].language )
							display = '{0} (Alternate)'.format( CVTTCaptionLoader.GetDisplayNameFromCode( rgVideoAdaptations[ r ].language ) );
						else
							display = rgVideoAdaptations[ r ].description;
						break;

					case 'supplementary': // aspect ratio
						display = '{0} Aspect Ratio'.format( rgVideoAdaptations[r].description );
						break;

					default:
						break;
				}

				$J( '#representation_select_video_track' ).append( '<option value="' + val + '">' + display + '</option>' );
			}

			$J( '.representation_video_track' ).show();

			$J( '#representation_select_video_track' ).on( 'change', function ()
			{
				// adjust which adaptation set it being played
				_ui.SwitchVideoTrackSelectedInPlayer( this.value );
				_ui.SetupVideoRepresentationsInUI();
			} );
		}

		// Audio Tracks (dub, commentary, etc.)
		var rgAudioAdaptations = this.m_player.GetAllAudioAdaptations();
		rgAudioAdaptations = rgAudioAdaptations.sort( CDASHPlayerUI.SortAdaptationsByDescription ).sort( CDASHPlayerUI.SortAdaptationsByRole ); // first by group, then by name

		// show selector if only more than one audio track
		if ( rgAudioAdaptations.length > 0 )
		{
			for ( var r = 0; r < rgAudioAdaptations.length; r++ )
			{
				var val = rgAudioAdaptations[ r ].id;
				var display = '';
				switch ( rgAudioAdaptations[ r ].roles[ 0 ].toLowerCase() )
				{
					case 'main':
					case 'dub':
						display = CVTTCaptionLoader.GetDisplayNameFromCode( rgAudioAdaptations[ r ].language );
						break;

					case 'alternate':
						if ( rgAudioAdaptations[ r ].description == rgAudioAdaptations[ r ].language )
							display = '{0} (Alternate)'.format( CVTTCaptionLoader.GetDisplayNameFromCode( rgAudioAdaptations[ r ].language ) );
						else
							display = rgAudioAdaptations[ r ].description;
						break;

					case 'supplementary':
						if ( rgAudioAdaptations[ r ].description == rgAudioAdaptations[ r ].language )
							display = '{0} (Supplementary)'.format( CVTTCaptionLoader.GetDisplayNameFromCode( rgAudioAdaptations[ r ].language ) );
						else
							display = rgAudioAdaptations[ r ].description;
						break;

					case 'commentary':
						display = '{0} Commentary'.format( CDASHPlayerUI.LocalizeCommentaryDescription( rgAudioAdaptations[ r ].description ) );
						break;

					default:
						display = rgVideoAdaptations[ r ].description;
						break;
				}

				if ( rgAudioAdaptations[ r ].forceSub )
					display = '{0} with {1} Subtitle'.format( display, CVTTCaptionLoader.GetDisplayNameFromCode( rgAudioAdaptations[ r ].forceSub ) );

				$J( '#representation_select_audio_track' ).append( '<option value="' + val + '">' + display + '</option>' );
			}

			$J( '.representation_audio_track' ).show();

			$J( '#representation_select_audio_track' ).on( 'change', function ()
			{
				// adjust which adaptation set it being played
				_ui.SwitchAudioTrackSelectedInPlayer( this.value );
				_ui.SetupAudioRepresentationsInUI();
			} );
		}

		this.SetupVideoRepresentationsInUI();
		this.SetupAudioRepresentationsInUI();

		// Video Playback Rate
		$J( '.representation_playbackRate' ).show();

		$J( '#representation_select_playbackRate' ).on( 'change', function ()
		{
			_ui.m_player.SetPlaybackRate( this.value );
		} );
	}

	this.m_bSettingsPanelInit = true;
}

CDASHPlayerUI.LocalizeCommentaryDescription = function( strToken )
{
	switch ( strToken )
	{
		case '#DASHPlayer_Commentary_CastAndCrew':
			return 'Cast and Crew';
		case '#DASHPlayer_Commentary_Director':
			return 'Director';
		case '#DASHPlayer_Commentary_Writer':
			return 'Writer';
		case '#DASHPlayer_Commentary_Producer':
			return 'Producer';
		case '#DASHPlayer_Commentary_FanMade':
			return 'Fan Made';
		default:
			return strToken;
	}
}

CDASHPlayerUI.prototype.SetupAudioRepresentationsInUI = function()
{
	// Audio Representations
	var rgRepresentation = this.m_player.GetRepresentationsArray( false );

	$J('.representation_audio option').remove();
	for (var r = 0; r < rgRepresentation.length; r++)
	{
		var strChannelInfo;
		switch ( rgRepresentation[r].audioChannels )
		{
			case 1:
				strChannelInfo = 'Mono';
				break;
			case 2:
				strChannelInfo = 'Stereo';
				break;
			case 6:
				strChannelInfo = '5.1 Surround';
				break;
			default:
				strChannelInfo = rgRepresentation[r].audioChannels + '-Channel';
				break;
		}

		$J('#representation_select_audio').append('<option value="' + ( r ) + '">' + strChannelInfo + ' (' + Math.ceil( rgRepresentation[r].bandwidth / 1000 ) + 'Kbps)</option>');
	}

	$J('#representation_select_audio' ).val( this.m_player.m_nAudioRepresentationIndex );

	$J( '#representation_select_audio').off('change');
	$J( '#representation_select_audio').on('change', function()
	{
		_ui.m_player.UpdateAudioRepresentation( this.value, false );
		this.blur();
	} );

	$J('.representation_audio').show();
}

CDASHPlayerUI.prototype.SetupVideoRepresentationsInUI = function()
{
	// Video Representations
	var rgRepresentation = this.m_player.GetRepresentationsArray( true );

	$J('.representation_video option').remove();

	// show "auto" only if there is more than one representation
	if ( rgRepresentation.length > 1 )
		$J( '#representation_select_video' ).append( '<option selected value="-1">Auto</option>' );

	for ( var r = 0; r < rgRepresentation.length; r++ )
	{
		if ( rgRepresentation[ r ].height.toString().length > 1 )
		{
			var strResolution = rgRepresentation[ r ].height + 'p';
			var strBandwidth = ( rgRepresentation[ r ].bandwidth / 1000000 ).toFixed( 1 ) + 'Mbps';
			var strFPS = '';

			if ( this.m_player.BIsLiveContent() && rgRepresentation[ r ].frameRate > CDASHPlayer.MAX_STANDARD_FRAMERATE )
				strFPS = rgRepresentation[ r ].frameRate; // advertise high FPS

			$J( '#representation_select_video' ).append( '<option value="' + r + '">' + strResolution + strFPS + ' (' + strBandwidth + ') </option>' );
		}
	}

	$J('#representation_select_video' ).val( this.m_player.m_nVideoRepresentationIndex );

	$J( '.representation_video' ).show();
}

CDASHPlayerUI.prototype.UpdateLiveResolutionSelector = function()
{
	var paddingleft = parseInt( this.m_elLiveResSelectorPanel.css( 'padding-left' ) );
	var videoplayeroffset = $J( this.m_elContainer ).offset().left;
	this.m_elLiveResSelectorPanel.css( {'left': ( $J( '.video_quality_label' ).offset().left - paddingleft - videoplayeroffset ) + 'px'} );

	var repVideo = $J( '.video_representation_live_video' );
	var _ui = this;
	$J( 'span[data-value]' ).each( function ( index, value )
	{
		var dataValue = $J( value ).attr('data-value');
		if ( dataValue == _ui.m_player.m_nVideoRepresentationIndex )
			$J( value ).addClass('selected');
		else
			$J( value ).removeClass('selected');
	});
}

CDASHPlayerUI.prototype.InitSettingsPanelInUITenFoot = function()
{
	if ( this.m_bSettingsPanelInit || !this.BInTenFoot() )
		return;

	var _ui = this;

	$J( '#settings_icon' ).on( 'click', function()
	{
		_ui.Hide(0);
		_ui.ShowSettingsPanel();
		_ui.SwitchElementFocus( CDASHPlayerUI.NO_ELEMENT_INDEX );
	} );

	// Video Tracks (dub, alternate, etc.)
	var rgVideoAdaptations = this.m_player.GetAllVideoAdaptations();
	rgVideoAdaptations = rgVideoAdaptations.sort( CDASHPlayerUI.SortAdaptationsByDescription ).sort( CDASHPlayerUI.SortAdaptationsByRole ); // first by group, then by name

	// show selector if there is more than one video track
	if ( rgVideoAdaptations.length > 1 )
	{
		for (var r = 0; r < rgVideoAdaptations.length; r++)
		{
			var val = rgVideoAdaptations[r].id;
			var display = '';
			switch( rgVideoAdaptations[r].roles[0].toLowerCase() )
			{
				case 'main':
				case 'dub':
					display = CVTTCaptionLoader.GetDisplayNameFromCode( rgVideoAdaptations[r].language );
					break;

				case 'alternate':
					if ( rgVideoAdaptations[r].description == rgVideoAdaptations[r].language )
						display = '{0} (Alternate)'.format( CVTTCaptionLoader.GetDisplayNameFromCode( rgVideoAdaptations[r].language ) );
					else
						display = rgVideoAdaptations[r].description;
					break;

				case 'supplementary': // aspect ratio
					display = '{0} Aspect Ratio'.format( rgVideoAdaptations[r].description );
					break;

				default:
					display = rgVideoAdaptations[r].description;
					break;
			}

			if ( r == 0 )
				$J( '#representation_video_track #representation_select' ).append('<div data-value="' + val + '" class="selected">' + display + '</div>');
			else
				$J( '#representation_video_track #representation_select' ).append('<div data-value="' + val + '" class="notselected">' + display + '</div>');
		}

		$J( '#representation_video_track .panel_select .left_arrow' ).on( 'click', function() {
			var elSelect = $J( '#representation_video_track #representation_select' );
			_ui.PanelSelectShift( elSelect, false );
		} );

		$J( '#representation_video_track .panel_select .right_arrow' ).on( 'click', function() {
			var elSelect = $J( '#representation_video_track #representation_select' );
			_ui.PanelSelectShift( elSelect, true );
		} );

		$J( '#representation_video_track' ).show();
	}

	// Audio Tracks (dub, commentary, etc.)
	var rgAudioAdaptations = this.m_player.GetAllAudioAdaptations();
	rgAudioAdaptations = rgAudioAdaptations.sort( CDASHPlayerUI.SortAdaptationsByDescription ).sort( CDASHPlayerUI.SortAdaptationsByRole ); // first by group, then by name

	// show selector if there is more than one audio tracks
	if ( rgAudioAdaptations.length > 1 )
	{
		for (var r = 0; r < rgAudioAdaptations.length; r++)
		{
			var val = rgAudioAdaptations[r].id;
			var display = '';
			switch( rgAudioAdaptations[r].roles[0].toLowerCase() )
			{
				case 'main':
				case 'dub':
					display = CVTTCaptionLoader.GetDisplayNameFromCode( rgAudioAdaptations[r].language );
					break;

				case 'alternate':
					if ( rgAudioAdaptations[r].description == rgAudioAdaptations[r].language )
						display = '{0} (Alternate)'.format( CVTTCaptionLoader.GetDisplayNameFromCode( rgAudioAdaptations[r].language ) );
					else
						display = rgAudioAdaptations[r].description;
					break;

				case 'supplementary':
					if ( rgAudioAdaptations[r].description == rgAudioAdaptations[r].language )
						display = '{0} (Supplementary)'.format( CVTTCaptionLoader.GetDisplayNameFromCode( rgAudioAdaptations[r].language ) );
					else
						display = rgAudioAdaptations[r].description;
					break;

				case 'commentary':
					display = '{0} Commentary'.format( CDASHPlayerUI.LocalizeCommentaryDescription( rgAudioAdaptations[r].description ) );
					break;

				default:
					break;
			}

			if ( rgAudioAdaptations[r].forceSub )
				display = '{0} with {1} Subtitle'.format( display, CVTTCaptionLoader.GetDisplayNameFromCode( rgAudioAdaptations[ r ].forceSub ) );

			if ( r == 0 )
				$J( '#representation_audio_track #representation_select' ).append('<div data-value="' + val + '" class="selected">' + display + '</div>');
			else
				$J( '#representation_audio_track #representation_select' ).append('<div data-value="' + val + '" class="notselected">' + display + '</div>');
		}

		$J( '#representation_audio_track .panel_select .left_arrow' ).on( 'click', function() {
			var elSelect = $J( '#representation_audio_track #representation_select' );
			_ui.PanelSelectShift( elSelect, false );
		} );

		$J( '#representation_audio_track .panel_select .right_arrow' ).on( 'click', function() {
			var elSelect = $J( '#representation_audio_track #representation_select' );
			_ui.PanelSelectShift( elSelect, true );
		} );

		$J( '#representation_audio_track' ).show();
	}

	// set up representations
	this.SetupVideoRepresentationsInUITenFoot();
	this.SetupAudioRepresentationsInUITenFoot();

	// Video Playback Rate
	if ( !this.m_player.BIsLiveContent() )
	{
		$J( '#representation_playbackRate .panel_select .left_arrow' ).on( 'click', function() {
			var elSelect = $J( '#representation_playbackRate #representation_select' );
			var value = _ui.PanelSelectShift( elSelect, false );
			_ui.m_player.SetPlaybackRate( value );
		} );

		$J( '#representation_playbackRate .panel_select .right_arrow' ).on( 'click', function() {
			var elSelect = $J( '#representation_playbackRate #representation_select' );
			var value = _ui.PanelSelectShift( elSelect, true );
			_ui.m_player.SetPlaybackRate( value );
		} );

		$J('#representation_playbackRate').show();
	}

	$J( '#buttonA', this.m_elSettingsPanel ).on( 'click', function ( e ) { _ui.CloseSettingsPanelTenFoot( false, true ); } );
	$J( '#buttonB', this.m_elSettingsPanel ).on( 'click', function ( e ) { _ui.CloseSettingsPanelTenFoot( false, false ); } );

	this.m_bSettingsPanelInit = true;
}

CDASHPlayerUI.prototype.SetupAudioRepresentationsInUITenFoot = function()
{
	// Audio Representations
	var _ui = this;
	var rgRepresentation = this.m_player.GetRepresentationsArray( false );
	if ( rgRepresentation.length > 1 )
	{
		$J('#representation_audio #representation_select div').remove();

		for (var r = 0; r < rgRepresentation.length; r++)
		{
			var strChannelInfo;
			switch ( rgRepresentation[r].audioChannels )
			{
				case 1:
					strChannelInfo = 'Mono';
					break;
				case 2:
					strChannelInfo = 'Stereo';
					break;
				case 6:
					strChannelInfo = '5.1 Surround';
					break;
				default:
					strChannelInfo = rgRepresentation[r].audioChannels + '-Channel';
					break;
			}

			if ( r == 0 )
				$J( '#representation_audio #representation_select' ).append('<div data-value="' + ( r ) + '" class="selected">' + strChannelInfo + ' (' + Math.ceil( rgRepresentation[r].bandwidth / 1000 ) + 'Kbps)</div>');
			else
				$J( '#representation_audio #representation_select' ).append('<div data-value="' + ( r ) + '" class="notselected">' + strChannelInfo + ' (' + Math.ceil( rgRepresentation[r].bandwidth / 1000 ) + 'Kbps)</div>');
		}

		this.PanelSelectByValue( $J( '#representation_audio #representation_select' ), this.m_player.m_nAudioRepresentationIndex );

		$J( '#representation_audio .panel_select .left_arrow' ).off( 'click' );
		$J( '#representation_audio .panel_select .left_arrow' ).on( 'click', function() {
			var elSelect = $J( '#representation_audio #representation_select' );
			_ui.PanelSelectShift( elSelect, false );

		} );

		$J( '#representation_audio .panel_select .right_arrow' ).off( 'click' );
		$J( '#representation_audio .panel_select .right_arrow' ).on( 'click', function() {
			var elSelect = $J( '#representation_audio #representation_select' );
			_ui.PanelSelectShift( elSelect, true );
		} );

		$J( '#representation_audio' ).show();
	}
}

CDASHPlayerUI.prototype.SetupVideoRepresentationsInUITenFoot = function()
{
	// Video Representations
	var _ui = this;
	var rgRepresentation = this.m_player.GetRepresentationsArray( true );
	if ( rgRepresentation.length > 1 )
	{
		$J( '#representation_video #representation_select div' ).remove();

		$J( '#representation_video #representation_select' ).append('<div data-value="-1" class="selected">Automatic</div>');

		for (var r = 0; r < rgRepresentation.length; r++)
		{
			if ( rgRepresentation[r].height.toString().length > 1 )
			{
				var strResolution = rgRepresentation[r].height + 'p';
				$J( '#representation_video #representation_select' ).append('<div data-value="' + r + '" class="notselected">' + strResolution + ' (' + ( rgRepresentation[r].bandwidth / 1000000 ).toFixed(1) + 'Mbps)</div>');
			}
		}

		this.PanelSelectByValue( $J( '#representation_video #representation_select' ), this.m_player.m_nVideoRepresentationIndex );

		$J( '#representation_video .panel_select .left_arrow' ).off( 'click' );
		$J( '#representation_video .panel_select .left_arrow' ).on( 'click', function() {
			var elSelect = $J( '#representation_video #representation_select' );
			_ui.PanelSelectShift( elSelect, false );
		} );

		$J( '#representation_video .panel_select .right_arrow' ).off( 'click' );
		$J( '#representation_video .panel_select .right_arrow' ).on( 'click', function() {
			var elSelect = $J( '#representation_video #representation_select' );
			_ui.PanelSelectShift( elSelect, true );
		} );

		$J( '#representation_video' ).show();
	}
}

CDASHPlayerUI.prototype.SetUniqueSettingsID = function( uniqueSettingsID )
{
	this.m_strUniqueSettingsID = uniqueSettingsID.toString();
}

CDASHPlayerUI.prototype.SetPlayerPlaybackRate = function()
{
	this.m_player.SetPlaybackRate( $J( '#representation_select_playbackRate' ).val() );
}

CDASHPlayerUI.prototype.SavePlaybackRateTenFoot = function( value )
{
	this.m_fPlaybackRate = value;
}

CDASHPlayerUI.prototype.LoadPlaybackRateTenFoot = function()
{
	this.PanelSelectByValue( $J( '#representation_playbackRate', this.m_elSettingsPanel ), this.m_fPlaybackRate );
	this.m_player.SetPlaybackRate( this.m_fPlaybackRate );
}

CDASHPlayerUI.prototype.Show = function()
{
	if ( this.BInTenFoot() && this.m_eFocusedUIPanel != CDASHPlayerUI.eUIPanelMain )
		return;

	this.m_bHidden = false;
	clearTimeout( this.m_timeoutHide );
	$J( this.m_elContainer ).addClass( 'dash_show_player_ui' );

	this.OnTimeUpdatePlayer();
}

CDASHPlayerUI.prototype.Hide = function( nTime )
{
	var runTime = ( typeof nTime !== 'undefined' ) ? nTime : 3000;

	var _ui = this;
	clearTimeout( this.m_timeoutHide );

	if ( runTime == 0 )
	{
		anonHideMainUI();
	}
	else if ( this.BCanHideMenu() )
	{
		this.m_timeoutHide = setTimeout( function() { anonHideMainUI(); }, runTime );
	}

	function anonHideMainUI()
	{
		_ui.m_bHidden = true;
		$J( _ui.m_elContainer ).removeClass( 'dash_show_player_ui' );
		$J( '.volume_slider', _ui.m_elOverlay ).off( 'mousemove' );
		_ui.m_elLiveResSelectorPanel.fadeOut(100);
		_ui.OnProgressLeave();
	}
}

CDASHPlayerUI.prototype.BCanHideMenu = function()
{
	return !this.m_player.m_elVideoPlayer.paused && !this.BTenFootVideoSuggestionVisible();
}

CDASHPlayerUI.prototype.OnMouseMovePlayer = function()
{
	if ( this.BInTenFoot() && this.m_eFocusedUIPanel != CDASHPlayerUI.eUIPanelMain )
		return;

	this.Show();
	this.Hide();
}

CDASHPlayerUI.prototype.GetTimelineData = function()
{
	var elVideoPlayer = this.m_player.m_elVideoPlayer;
	var nBufferedStart = null;
	var nBufferedEnd = 0;
	for ( var i = 0; i < elVideoPlayer.buffered.length; i++ )
	{
		if ( nBufferedStart == null || elVideoPlayer.buffered.start( i ) < nBufferedStart )
			nBufferedStart = elVideoPlayer.buffered.start( i );

		if ( elVideoPlayer.buffered.end( i ) > nBufferedEnd )
			nBufferedEnd = elVideoPlayer.buffered.end( i );
	}

	if ( nBufferedStart == null )
		nBufferedStart = 0;

	var nTimeStart = 0;
	var nTimeEnd = elVideoPlayer.duration;
	if ( this.m_player.BIsLiveContent() )
	{
		nTimeStart = nBufferedStart;
		nTimeEnd = Math.max( nBufferedEnd, this.m_player.GetLiveBufferWindow() + nBufferedStart );
	}
	else
	{
		nTimeEnd = this.m_player.m_mpd.GetPeriodDuration(0);
	}

	var rgRet = {};
	rgRet.nBufferedStart = nBufferedStart;
	rgRet.nBufferedEnd = nBufferedEnd;
	rgRet.nTimeStart = nTimeStart;
	rgRet.nTimeEnd = nTimeEnd;

	return rgRet;
}

CDASHPlayerUI.prototype.ShowMainUIOnVODEnd = function()
{
	var elVideoPlayer = this.m_player.m_elVideoPlayer;
	var rgData = this.GetTimelineData();

	if ( !this.m_player.BIsLiveContent() && !this.m_bEndOfVODShown )
	{
		if ( elVideoPlayer.currentTime >= ( rgData.nTimeEnd - rgData.nTimeStart ) - 1 )
		{
			if ( !this.BInTenFoot() || this.m_eFocusedUIPanel == CDASHPlayerUI.eUIPanelMain )
			{
				this.m_bHidden = false;
				clearTimeout( this.m_timeoutHide );
				$J( this.m_elContainer ).addClass( 'dash_show_player_ui' );

				if ( this.BInTenFoot() )
				{
					if ( this.BTenFootOptionButtonVisible( '.next_video' ) )
					{
						this.SwitchElementFocus( CDASHPlayerUI.NEXT_VIDEO_INDEX );
						this.ShowVideoSuggestion( true );
					}
					else
					{
						this.SwitchElementFocus( CDASHPlayerUI.STOP_INDEX );
					}
				}

				this.m_bEndOfVODShown = true;
			}
		}
	}
}

CDASHPlayerUI.prototype.UpdateQualityDetailsInUI = function()
{
	// let the user know what resolution they are in now
	if ( !this.BInTenFoot() )
	{
		var repVideo = $J( '#representation_select_video' );
		if ( repVideo.find( 'option' ).length > 1 && !repVideo.is( ':focus' ) )
		{
			if ( repVideo.val() == -1 && this.m_player.m_nPlaybackHeight > 0 )
			{
				$J( '#representation_select_video option:first' ).text( 'Auto (' + this.m_player.m_nPlaybackHeight + 'p)' );
			}
			else
			{
				$J( '#representation_select_video option:first' ).text( 'Auto' );
			}
		}
	}

	var repVideoQualityLabel = $J( '.video_quality_label' );
	if ( repVideoQualityLabel.length != 0 )
	{
		var strChannelInfo = '';

		if ( this.BInTenFoot() )
		{
			var strChannels = this.m_player.StatsAudioChannels();
			switch ( strChannels )
			{
				case 1:
					strChannelInfo = '/Mono';
					break;
				case 2:
					strChannelInfo = '/Stereo';
					break;
				case 6:
					strChannelInfo = '/5.1';
					break;
				default:
					strChannelInfo = '/' + strChannels + '-Channel';
					break;
			}
		}

		if ( this.m_player.m_nPlaybackHeight != 0 )
			repVideoQualityLabel.text( this.m_player.m_nPlaybackHeight + 'p' + strChannelInfo );
	}

	if ( !this.BInTenFoot() )
	{
		if ( this.m_player.BIsRepresentationChanging() )
		{
			$J( '#settings_icon' ).addClass( 'settings_icon_animated' ).removeClass( 'settings_icon' );
			$J( '.video_quality_label' ).addClass( 'changing' );
		}
		else
		{
			$J( '#settings_icon' ).addClass( 'settings_icon' ).removeClass( 'settings_icon_animated' );
			$J( '.video_quality_label' ).removeClass( 'changing' );
		}
	}
}

CDASHPlayerUI.prototype.UpdateCurrentTimeProgressInUI = function()
{
	var elVideoPlayer = this.m_player.m_elVideoPlayer;
	var rgData = this.GetTimelineData();

	var nProgressPct = (( elVideoPlayer.currentTime - rgData.nTimeStart ) / (rgData.nTimeEnd - rgData.nTimeStart)) * 100;
	var nLoadedPct = (( rgData.nBufferedEnd - rgData.nTimeStart ) / (rgData.nTimeEnd - rgData.nTimeStart)) * 100;

	if ( this.m_player.BIsLiveContent() )
	{
		$J( '.live_button' ).show();

		if ( this.m_bPlayingLiveEdge )
		{
			$J( this.m_elContainer ).addClass( 'dash_live_edge' );
			nProgressPct = nLoadedPct;
		}
		else
		{
			$J( this.m_elContainer ).removeClass( 'dash_live_edge' );
		}
	}
	else
	{
		$J( '.live_button' ).hide();
	}

	$J( '.progress_bar', this.m_elOverlay ).stop().css( { 'width': nProgressPct + '%' }, 200 );
	$J( '.progress_bar_background', this.m_elOverlay ).stop().css( { 'width': nLoadedPct + '%' }, 200 );

	var strCurrentTime = SecondsToTime( elVideoPlayer.currentTime );
	var strTotalTime = SecondsToTime( rgData.nTimeEnd - rgData.nTimeStart );

	if ( this.m_player.BIsLiveContent() )
	{
		$J( '.right_time', this.m_elOverlay ).text( strCurrentTime );
	}
	else
	{
		if ( this.BInTenFoot() )
		{
			$J( '.left_time', this.m_elOverlay ).text( strCurrentTime );
			$J( '.right_time', this.m_elOverlay ).text( strTotalTime );
		}
		else
		{
			$J( '.right_time', this.m_elOverlay ).text( strCurrentTime + " / " + strTotalTime );
		}
	}
}

CDASHPlayerUI.prototype.OnTimeUpdatePlayer = function()
{
	// buffering should show/hide no matter if the UI is on screen
	this.UpdateBufferingProgress();
	this.ShowMainUIOnVODEnd();

	if ( this.m_bHidden )
		return;

	this.UpdateCurrentTimeProgressInUI();
	this.UpdateQualityDetailsInUI();
}

CDASHPlayerUI.prototype.UpdateBufferingProgress = function()
{
	if ( this.m_player.BIsLiveContent() || !this.m_elBufferingMessage )
		return;

	var elLoadingText = this.m_elBufferingMessage.find( '.loading_text' );
	if ( this.m_player.BIsBuffering() && this.m_player.m_elVideoPlayer.readyState != CDASHPlayer.HAVE_NOTHING )
	{
		if ( this.m_player.GetPercentBuffered() != 100 )
		{
			elLoadingText.text( this.m_player.GetPercentBuffered() + '%' );
			this.m_elBufferingMessage.show();
		}
	}
	else
	{
		if ( elLoadingText.text() != '' )
		{
			if ( elLoadingText.queue() == 0 )
			{
				elLoadingText.text( '100%' );
				this.m_elBufferingMessage.fadeOut(500, function()
				{
					elLoadingText.text('');
				});
			}
		}
	}
}

CDASHPlayerUI.prototype.JumpToLive = function()
{
	if ( this.m_bPlayingLiveEdge )
		return;

	this.m_player.SeekToBufferedEnd();
	this.m_bPlayingLiveEdge = true;

	if ( this.m_player.m_elVideoPlayer.paused )
		this.TogglePlayPause();

	this.OnTimeUpdatePlayer();
}

CDASHPlayerUI.prototype.OnPlaying = function()
{
	$J( '.play_button', this.m_elOverlay ).removeClass( 'play' );
	$J( '.play_button', this.m_elOverlay ).addClass( 'pause' );

	this.Hide();
}

CDASHPlayerUI.prototype.OnPause = function()
{
	this.Show();
	this.m_bPlayingLiveEdge = false;
	this.OnTimeUpdatePlayer();
}

CDASHPlayerUI.prototype.TogglePlayPause = function()
{
	// On mobile devices, there isn't a "mouse enter" to bring up the playback controls. Instead its the first
	// click with the finger / pointer. We don't want that first click to disable playback just bring up the UI.
	if( (this.m_eUIMode == CDASHPlayerUI.eUIModeMobile) && this.m_bHidden )
	{
		this.OnMouseMovePlayer();
		return;
	}

	var elVideoPlayer = this.m_player.m_elVideoPlayer;
	if( elVideoPlayer.paused )
	{
		elVideoPlayer.play();
		elVideoPlayer.playbackRate = this.m_player.GetPlaybackRate();
		$J( '.play_button', this.m_elOverlay ).addClass( 'pause' );
		$J( '.play_button', this.m_elOverlay ).removeClass( 'play' );
		this.ShowBigPlayPauseIndicator( true );
		$J( elVideoPlayer ).trigger( 'changeuiplayingstate', true );
	}
	else
	{
		elVideoPlayer.pause();
		$J( '.play_button', this.m_elOverlay ).addClass( 'play' );
		$J( '.play_button', this.m_elOverlay ).removeClass( 'pause' );
		this.ShowBigPlayPauseIndicator( false )
		$J( elVideoPlayer ).trigger( 'changeuiplayingstate', false );
	}
}

CDASHPlayerUI.prototype.StopVideo = function()
{
	if ( !this.m_player.BIsLiveContent() )
		window.close();
}

CDASHPlayerUI.prototype.ShowBigPlayPauseIndicator = function( playing )
{
	if ( !this.m_elBigPlayPauseIndicator )
		return;

	var indicator = $J( '.dash_big_playpause_indicator' );
	var state = $J( '.dash_big_playpause_indicator_state' );

		indicator.one( 'animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function() { $J(this).removeClass( 'show' ); } );
	indicator.removeClass('show');
	FlushStyleChanges( indicator );

	if ( playing )
	{
		state.addClass('play_triangle');
		state.removeClass('pause_bars');
	}
	else
	{
		state.addClass('pause_bars');
		state.removeClass('play_triangle');
	}

	indicator.addClass('show');
}

CDASHPlayerUI.prototype.OnMouseEnterOverlay = function()
{
	clearTimeout( this.m_timeoutHide );
}

CDASHPlayerUI.prototype.OnMouseLeaveOverlay = function( e )
{
	var relTarget = e.relatedTarget ? e.relatedTarget : e.toElement;
	if ( this.m_player.m_elVideoPlayer == relTarget )
		return;

	this.Hide();
}

CDASHPlayerUI.prototype.OnVolumeClick = function( e, ele )
{
	var parentOffset = $J( ele ).offset();
	var volume = 0;

	if ( this.BInTenFoot() )
	{
		var relY = e.pageY - parentOffset.top - $J( '.volume_handle' ).height();
		volume = 1 - ( relY / 160 ); // length of well
	}
	else
	{
		var relX = e.pageX - parentOffset.left;
		volume = relX / 80;
	}

	this.SetVolume( volume );

	if( this.m_player.m_elVideoPlayer.muted )
		this.ToggleMute();
}

CDASHPlayerUI.prototype.SetVolume = function( value )
{
	value = Math.min( Math.max( value, 0 ), 1 );
	this.m_player.m_elVideoPlayer.volume = value;

	if ( this.BInTenFoot() )
	{
		var sliderY = 175 - ( value * 160 ); // 160 length, offset 15 from top
		$J( '.volume_handle', this.m_elOverlay ).css( {'top': sliderY + "px"} );
	}
	else
	{
		var sliderX = value * 80 - 2;
		$J( '.volume_handle', this.m_elOverlay ).css( {'left': sliderX + "px"} );
	}

	WebStorage.SetLocal( 'video_volume', value );

}

CDASHPlayerUI.prototype.IncrementVolume = function( nAccelerate )
{
	this.SetVolume( this.m_player.m_elVideoPlayer.volume + CDASHPlayerUI.VOLUME_STEP_SIZE * nAccelerate );
	if( this.m_player.m_elVideoPlayer.muted )
		this.ToggleMute();
}

CDASHPlayerUI.prototype.DecrementVolume = function( nAccelerate )
{
	this.SetVolume( this.m_player.m_elVideoPlayer.volume - CDASHPlayerUI.VOLUME_STEP_SIZE * nAccelerate );
	if( this.m_player.m_elVideoPlayer.muted )
		this.ToggleMute();
}

CDASHPlayerUI.prototype.OnVolumeStartDrag = function( e, ele )
{
	var _ui = this;
	$J( '.volume_slider', this.m_elOverlay ).on( 'mousemove', function(e) { _ui.OnVolumeClick( e, this ); } );
	e.originalEvent.preventDefault();
}

CDASHPlayerUI.prototype.OnVolumeStopDrag = function( e, ele )
{
	$J( '.volume_slider', this.m_elOverlay ).off( 'mousemove' );
}

CDASHPlayerUI.prototype.ToggleMute = function( e, ele )
{
	if ( !this.m_player.BPlayingAudio() )
		return;

	var elVideoPlayer = this.m_player.m_elVideoPlayer;
	elVideoPlayer.muted = !elVideoPlayer.muted;

	WebStorage.SetLocal( 'video_mute', elVideoPlayer.muted );

	if( elVideoPlayer.muted )
	{
		$J( '.volume_icon',this.m_elOverlay ).addClass( 'muted' );

		if ( this.BInTenFoot() )
		{
			$J('.volume_handle', this.m_elOverlay).css( {'top': "175px"} );
		}
		else
		{
			$J('.volume_handle', this.m_elOverlay).css( {'left': "0px"} );
		}
	}
	else
	{
		$J( '.volume_icon',this.m_elOverlay ).removeClass( 'muted' );
		this.SetVolume( elVideoPlayer.volume );
	}
}

CDASHPlayerUI.prototype.ShowVolumeBar = function()
{
	if ( this.BInTenFoot() )
	{
		$J( '.volume_slider' ).show();
		$J( '.volume_container' ).addClass( 'tenfoot_focus' );
	}
}

CDASHPlayerUI.prototype.HideVolumeBar = function()
{
	if ( this.BInTenFoot() )
	{
		$J( '.volume_slider' ).hide();
		$J( '.volume_container' ).removeClass( 'tenfoot_focus' );
	}
}

CDASHPlayerUI.prototype.LoadVolumeSettings = function()
{
	var nLastVolume = WebStorage.GetLocal( 'video_volume' );
	if( nLastVolume == null )
		nLastVolume = 1;

	// If I start out muted, actually set the volume to zero. At some point, I cannot pinpoint where,
	// the muted setting on the html video element is ignored.
	if( this.m_player.m_elVideoPlayer.muted )
	{
		nLastVolume = 0;
	}

	this.SetVolume( nLastVolume );

	var nLastMute = WebStorage.GetLocal( 'video_mute' );
	if ( nLastMute == null )
		nLastMute = false;

	if ( nLastMute != this.m_player.m_elVideoPlayer.muted )
		this.ToggleMute();
}

CDASHPlayerUI.prototype.PanelSelectShift = function( elSelect, bMoveRight )
{
	var elSelectedValue = elSelect.find( '.selected' );
	var newSelectedValue;

	if ( bMoveRight )
		newSelectedValue = elSelectedValue.next();
	else
		newSelectedValue = elSelectedValue.prev();

	if ( newSelectedValue.length == 0 )
	{
		if ( bMoveRight )
			newSelectedValue = elSelect.find( 'div' ).first();
		else
			newSelectedValue = elSelect.find( 'div' ).last();
	}

	elSelectedValue.removeClass( 'selected' ).addClass( 'notselected' );
	newSelectedValue.removeClass( 'notselected' ).addClass( 'selected' );

	return newSelectedValue.attr( 'data-value' );
}

CDASHPlayerUI.prototype.PanelSelectByValue = function ( elSelect, value )
{
	var elSelectedValue = elSelect.find( '.selected' );
	var newSelectedValue = elSelect.find( "div[data-value='" + value + "']" );
	if ( elSelectedValue.length != 0 && newSelectedValue.length != 0 )
	{
		elSelectedValue.removeClass( 'selected' ).addClass( 'notselected' );
		newSelectedValue.removeClass( 'notselected' ).addClass( 'selected' );
	}
}

CDASHPlayerUI.prototype.PanelSelectGetValue = function ( elSelect )
{
	return elSelect.find( '.selected' ).attr( 'data-value' );
}

CDASHPlayerUI.prototype.PanelSelectDisable = function( elSelect, bDisable, strSelectText )
{
	var elPanel = elSelect.find( '.panel_select' );

	if ( bDisable )
	{
		elPanel.addClass( 'disabled' );
		elPanel.find( '.left_arrow' ).css( 'visibility', 'hidden' );
		elPanel.find( '.right_arrow' ).css( 'visibility', 'hidden' );
	}
	else
	{
		elPanel.removeClass( 'disabled' );
		elPanel.find( '.left_arrow' ).css( 'visibility', 'visible' );
		elPanel.find( '.right_arrow' ).css( 'visibility', 'visible' );
	}

	if ( strSelectText )
		elPanel.find( '.selected' ).text( strSelectText );
}

CDASHPlayerUI.prototype.OnKeyDown = function( e )
{
	var keycode;
	if (window.event)
		keycode = window.event.keyCode;
	else if (e)
		keycode = e.which;

	var e = e || window.event;

	var bHandled = true;
		if ( e.target == document.body )
	{
		switch (keycode)
		{
			case 32:	// space - play / pause
				e.preventDefault();
				 $J( '.play_button' ).click();
				break;
			case 37:	// left arrow - skip back
				$J( '.skip_back' ).click();
				break;
			case 39:	// right arrow - skip forward
				$J( '.skip_fwd' ).click();
				break;
			case 34: 	// page down
				$J( '.next_video' ).click();
				break;
			default:
				bHandled = false;
				break;
		}

		// VOD desktop shortcut keys
		if ( !bHandled && !this.m_player.BIsLiveContent() )
		{
			var bHandled = true;
			switch (keycode)
			{
				case 81:	// q - stop / quit / close
					this.StopVideo();
					break;
				case 90:	// z - toggle stats
					this.ToggleStats();
					break;
				case 70:	// f - full screen
					this.ToggleFullscreen();
					break;
				case 67:	// c - captions
					this.ShowClosedCaptionsPanel();
					break;
				case 83:	// s - settings
					this.ShowSettingsPanel();
					break;
				default:
					bHandled = false;
					break;
			}
		}
	}

	if ( bHandled )
	{
		this.Show();
		this.Hide();
	}

	// determine whether to bubble or not
	return !bHandled;
}

CDASHPlayerUI.prototype.OnKeyDownTenFoot = function( e )
{
	if ( !this.BInTenFoot() )
		return;

	var keycode;
	if (window.event)
		keycode = window.event.keyCode;
	else if (e)
		keycode = e.which;

	var e = e || window.event;

	var bHandled = true;

	// slow down input for the left stick
	if ( keycode >= CDASHPlayerUI.LEFT_PAD_LEFT && keycode <= CDASHPlayerUI.LEFT_PAD_DOWN )
		if ( performance.now() - this.m_fLastTenFootKeyDown < CDASHPlayerUI.TENFOOT_KEYDOWN_DELAY )
			return;

	switch ( keycode )
	{
		case CDASHPlayerUI.START:
			e.preventDefault();
			this.ClickUIElementOnKeyDown( $J( '.play_button' ) );
			break;

		case CDASHPlayerUI.LEFT_PAD_LEFT:
			if ( this.m_nFocusedUIElementIndex != CDASHPlayerUI.PROGRESS_BAR_INDEX )
				this.NavigateUIOnKeyDown( CDASHPlayerUI.LEFT_PAD_LEFT );
			else
				this.ScrubUIOnKeyDown( CDASHPlayerUI.RIGHT_PAD_LEFT, true );
			break;
		case CDASHPlayerUI.LEFT_PAD_UP:
			if ( this.m_nFocusedUIElementIndex != CDASHPlayerUI.VOLUME_CONTAINER_INDEX )
				this.NavigateUIOnKeyDown( CDASHPlayerUI.LEFT_PAD_UP );
			else
				this.ScrubUIOnKeyDown( CDASHPlayerUI.RIGHT_PAD_UP, true );
			break;
		case CDASHPlayerUI.LEFT_PAD_RIGHT:
			if ( this.m_nFocusedUIElementIndex != CDASHPlayerUI.PROGRESS_BAR_INDEX )
				this.NavigateUIOnKeyDown( CDASHPlayerUI.LEFT_PAD_RIGHT );
			else
				this.ScrubUIOnKeyDown( CDASHPlayerUI.RIGHT_PAD_RIGHT, true );
			break;
		case CDASHPlayerUI.LEFT_PAD_DOWN:
			if ( this.m_nFocusedUIElementIndex != CDASHPlayerUI.VOLUME_CONTAINER_INDEX )
				this.NavigateUIOnKeyDown( CDASHPlayerUI.LEFT_PAD_DOWN );
			else
				this.ScrubUIOnKeyDown( CDASHPlayerUI.RIGHT_PAD_DOWN, true );
			break;

		case CDASHPlayerUI.BUTTON_A:
			this.OnPressButtonA();
			break;
		case CDASHPlayerUI.BUTTON_B:
			this.OnPressButtonB();
			break;
		case CDASHPlayerUI.BUTTON_X:
			this.OnPressButtonX();
			break;
		case CDASHPlayerUI.BUTTON_Y:
			this.OnPressButtonY();
			break;

		case CDASHPlayerUI.LEFT_BUMPER:
			this.ClickUIElementOnKeyDown( $J( '.skip_back' ) );
			break;
		case CDASHPlayerUI.RIGHT_BUMPER:
			this.ClickUIElementOnKeyDown( $J( '.skip_fwd' ) );
			break;

		case CDASHPlayerUI.LEFT_GRIP:
			this.OnSkipTime( -CDASHPlayerUI.SKIP_LONG_TIME_SECS );
			break;

		case CDASHPlayerUI.RIGHT_GRIP:
			this.OnSkipTime( CDASHPlayerUI.SKIP_LONG_TIME_SECS );
			break;

		case CDASHPlayerUI.BACK:
			this.ClickUIElementOnKeyDown( $J( '.stop_button') );
			break;

		case CDASHPlayerUI.RIGHT_PAD_LEFT:
		case CDASHPlayerUI.RIGHT_PAD_UP:
		case CDASHPlayerUI.RIGHT_PAD_RIGHT:
		case CDASHPlayerUI.RIGHT_PAD_DOWN:
			this.ScrubUIOnKeyDown( keycode, false );
			break;

		default:
			bHandled = false;
			break;
	}

	this.m_fLastTenFootKeyDown = performance.now();

	// determine whether to bubble or not
	return !bHandled;
}

CDASHPlayerUI.prototype.ClickUIElementOnKeyDown = function ( element )
{
	if ( this.BInTenFoot() )
	{
		if ( element.hasClass( 'disabled' ) || element.parent().hasClass( 'disabled' ) )
			return;

		element.trigger( 'click' );

		var _ui = this;
		element.addClass( 'tenfoot_focus' ).delay( 150 ).queue( function() {
			element.removeClass('tenfoot_focus').dequeue();

			// make sure any selected UI is still focused
			_ui.NavigateUIOnKeyDown( CDASHPlayerUI.NAVIGATE_SELF );
		});
	}
}

CDASHPlayerUI.prototype.OnPressButtonA = function ()
{
	if ( !this.BInTenFoot() )
		return;

	if ( this.m_eFocusedUIPanel == CDASHPlayerUI.eUIPanelMain )
	{
		if ( this.ShowMainPanelUI() )
			return;

		switch ( this.m_nFocusedUIElementIndex )
		{
			case CDASHPlayerUI.VOLUME_CONTAINER_INDEX:
				$J( '.volume_icon' ).click();
				break;

			case CDASHPlayerUI.PROGRESS_BAR_INDEX:
				this.m_player.SeekTo( this.m_fLastProgressBarScrubPerc * this.GetTimelineData().nTimeEnd );
				this.m_bPlayingLiveEdge = false;
				this.OnTimeUpdatePlayer();
				break;

			case CDASHPlayerUI.CLOSED_CAPTION_INDEX:
				this.Hide(0);
				this.ShowClosedCaptionsPanel();
				break;

			case CDASHPlayerUI.SETTINGS_INDEX:
				this.Hide(0);
				this.ShowSettingsPanel();
				this.NavigateUIOnKeyDown( CDASHPlayerUI.NAVIGATE_INIT );
				break;

			case CDASHPlayerUI.NEXT_VIDEO_INDEX:
				$J( '.next_video' ).click();
				break;

			default:
				$J( "div[data-index='" + this.m_nFocusedUIElementIndex + "']" ).click();
				break;
		}
	}
	else if ( this.m_eFocusedUIPanel == CDASHPlayerUI.eUIPanelSettings )
	{
		this.CloseSettingsPanelTenFoot( true, true );
	}
	else if ( this.m_eFocusedUIPanel == CDASHPlayerUI.eUIPanelCaptions )
	{
		this.CloseCaptionsPanelTenFoot( true, true );
	}
}

CDASHPlayerUI.prototype.OnPressButtonB = function ()
{
	if ( !this.BInTenFoot() )
		return;

	if ( this.m_eFocusedUIPanel == CDASHPlayerUI.eUIPanelMain )
	{
		if ( this.BIsTenFootMainUIHidden() )
		{
			this.ShowMainPanelUI();
		}
		else
		{
			this.Hide(0);
		}
	}
	else if ( this.m_eFocusedUIPanel == CDASHPlayerUI.eUIPanelSettings )
	{
		this.CloseSettingsPanelTenFoot( true, false );
	}
	else if ( this.m_eFocusedUIPanel == CDASHPlayerUI.eUIPanelCaptions )
	{
		this.CloseCaptionsPanelTenFoot( true, false );
	}
}

CDASHPlayerUI.prototype.OnPressButtonX = function()
{
	if ( !this.BInTenFoot() )
		return;

	if ( this.m_eFocusedUIPanel == CDASHPlayerUI.eUIPanelSettings )
	{
		this.ToggleStats();
	}
}

CDASHPlayerUI.prototype.OnPressButtonY = function()
{
	if ( !this.BInTenFoot() )
		return;

	if ( this.m_eFocusedUIPanel == CDASHPlayerUI.eUIPanelSettings )
	{
		this.ToggleFullscreen();
	}
}

CDASHPlayerUI.prototype.BIsTenFootMainUIHidden = function()
{
	return ( $J( '.tenfoot_dash_overlay' ).css( 'opacity') == 0 )
}

CDASHPlayerUI.prototype.ShowSettingsPanel = function()
{
	if ( this.BInTenFoot() )
	{
		this.LoadAudioTrackSelected();
		this.LoadVideoTrackSelected();
		this.LoadPlaybackRateTenFoot();
		this.m_elSettingsPanel.fadeIn( CDASHPlayerUI.TENFOOT_UI_FADE_MS );
		this.m_eFocusedUIPanel = CDASHPlayerUI.eUIPanelSettings;
	}
	else
	{
		if ( !this.m_elSettingsPanel.is( ':hidden' ) )
		{
			$J( '#settings_done' ).click();
		}
		else
		{
			this.LoadAudioTrackSelected();
			this.LoadVideoTrackSelected();
			this.m_elSettingsPanel.fadeIn( CDASHPlayerUI.DESKTOP_UI_FADE_MS );
			this.m_eFocusedUIPanel = CDASHPlayerUI.eUIPanelSettings;
		}
	}
}

CDASHPlayerUI.prototype.CloseSettingsPanelTenFoot = function( bRestoreElementFocus, bSaveChanges )
{
	this.m_elSettingsPanel.fadeOut( CDASHPlayerUI.TENFOOT_UI_FADE_MS );
	this.m_eFocusedUIPanel = CDASHPlayerUI.eUIPanelMain;

	if ( bRestoreElementFocus )
		this.SwitchElementFocus( CDASHPlayerUI.SETTINGS_INDEX );

	this.ShowMainPanelUI();

	if ( bSaveChanges )
	{
		// now commit the changes on close
		value = this.PanelSelectGetValue( $J( '#representation_video_track #representation_select' ) );
		if ( value )
		{
			this.SwitchVideoTrackSelectedInPlayer( value )
			this.SaveVideoTrackSelected();
		}

		var value = this.PanelSelectGetValue( $J( '#representation_video #representation_select' ) );
		if ( value )
		{
			this.m_player.UpdateVideoRepresentation( value, false );
		}

		value = this.PanelSelectGetValue( $J( '#representation_audio_track #representation_select' ) );
		if ( value )
		{
			this.SwitchAudioTrackSelectedInPlayer( value );
			this.SaveAudioTrackSelected();
		}

		value = this.PanelSelectGetValue( $J( '#representation_audio #representation_select' ) );
		if ( value )
		{
			this.m_player.UpdateAudioRepresentation( value, false );
		}

		value = this.PanelSelectGetValue( $J( '#representation_playbackRate #representation_select' ) );
		if ( value )
		{
			this.SavePlaybackRateTenFoot( value );
		}
	}
	else
	{
		// cancel settings - only speed is modified in the settings panel directly
		this.m_player.SetPlaybackRate( this.m_fPlaybackRate );
	}
}

CDASHPlayerUI.prototype.CloseCaptionsPanelTenFoot = function( bRestoreElementFocus, bSaveChanges )
{
	if ( bSaveChanges )
	{
		this.SaveClosedCaptionLanguage();
		this.SaveClosedCaptionOptions();
	}
	else
	{
		this.LoadClosedCaptionLanguage();
		this.LoadClosedCaptionOptions();
	}

	this.m_elClosedCaptionsPanel.fadeOut( CDASHPlayerUI.TENFOOT_UI_FADE_MS );
	this.m_eFocusedUIPanel = CDASHPlayerUI.eUIPanelMain;

	if ( bRestoreElementFocus )
		this.SwitchElementFocus( CDASHPlayerUI.CLOSED_CAPTION_INDEX );

	this.ShowMainPanelUI();
}

CDASHPlayerUI.prototype.SwitchElementFocus = function ( newIndex )
{
	if ( !this.BInTenFoot() )
		return;

	$J( "div[data-index='" + this.m_nFocusedUIElementIndex + "']" ).removeClass( 'tenfoot_focus' );
	this.m_nFocusedUIElementIndex = newIndex;
	$J( "div[data-index='" + this.m_nFocusedUIElementIndex + "']" ).addClass( 'tenfoot_focus' );

}

CDASHPlayerUI.prototype.ShowMainPanelUI = function()
{
	if ( !this.BInTenFoot() )
		return;

	if ( this.BIsTenFootMainUIHidden() )
	{
		this.Show();
		this.Hide();

		this.SwitchElementFocus( this.m_nFocusedUIElementIndex );

		if ( this.m_nFocusedUIElementIndex == CDASHPlayerUI.VOLUME_CONTAINER_INDEX )
			this.ShowVolumeBar();
		else if ( this.m_nFocusedUIElementIndex == CDASHPlayerUI.PROGRESS_BAR_INDEX )
			this.SetProgressBarPreview( -1 );

		return true;
	}

	// always show main UI
	this.Show();
	this.Hide();

	return false;
}

CDASHPlayerUI.prototype.SetTenFootOptionButtonVisible = function( elButton, bVisible )
{
	if ( !this.BInTenFoot() )
		return;

	if ( bVisible )
		$J( elButton ).css( 'visibility', 'visible' );
	else
		$J( elButton ).css( 'visibility', 'hidden' );
}

CDASHPlayerUI.prototype.BTenFootOptionButtonVisible = function( elButton )
{
	if ( this.BInTenFoot() )
		return ( ( $J( elButton ).css( 'visibility' ) != 'hidden' ) );
	else
		return false;
}

CDASHPlayerUI.prototype.FindNextEnabledOptionButton = function( nButtonIndex, bGoRight )
{
	if ( !this.BInTenFoot() )
		return;

	var rgButtons = [ '.next_video', '.customize_captions', '.settings_icon', '.volume_icon' ];
	if ( bGoRight )
	{
		for ( var i = nButtonIndex - CDASHPlayerUI.NEXT_VIDEO_INDEX; i < rgButtons.length; i++ )
		{
			if ( this.BTenFootOptionButtonVisible( rgButtons[ i ] ) )
			{
				return nButtonIndex;
			}
			else
				nButtonIndex++;
		}
	}
	else
	{
		for ( var i = nButtonIndex - CDASHPlayerUI.NEXT_VIDEO_INDEX; i >= 0; i-- )
		{
			if ( this.BTenFootOptionButtonVisible( rgButtons[ i ] ) )
			{
				return nButtonIndex;
			}
			else
				nButtonIndex--;
		}
	}

	return nButtonIndex;
}

CDASHPlayerUI.prototype.NavigateUIOnKeyDown = function ( nKeyDirection )
{
	if ( !this.BInTenFoot() )
		return;

	// handle switch through the map of UI elements
	if ( this.m_eFocusedUIPanel == CDASHPlayerUI.eUIPanelMain )
	{
		// remove the previous "focus" state
		$J( "div[data-index='" + this.m_nFocusedUIElementIndex + "']" ).removeClass( 'tenfoot_focus' );

		// volume bar
		if ( this.m_nFocusedUIElementIndex == CDASHPlayerUI.VOLUME_CONTAINER_INDEX )
			this.HideVolumeBar();
		else if ( this.m_nFocusedUIElementIndex == CDASHPlayerUI.PROGRESS_BAR_INDEX )
			this.OnProgressLeave();
		else if ( this.m_nFocusedUIElementIndex == CDASHPlayerUI.NEXT_VIDEO_INDEX )
			this.ShowVideoSuggestion( false );

		var nTopRowIndex = this.FindNextEnabledOptionButton( CDASHPlayerUI.NEXT_VIDEO_INDEX, true );

		switch ( nKeyDirection )
		{
			case CDASHPlayerUI.LEFT_PAD_LEFT:
				if ( this.m_nFocusedUIElementIndex == nTopRowIndex )
					this.m_nFocusedUIElementIndex = nTopRowIndex;
				else if ( this.m_nFocusedUIElementIndex != CDASHPlayerUI.SKIP_BACK_INDEX )
					this.m_nFocusedUIElementIndex = this.FindNextEnabledOptionButton( --this.m_nFocusedUIElementIndex, false );
				break;

			case CDASHPlayerUI.LEFT_PAD_RIGHT:
				if ( this.m_nFocusedUIElementIndex == CDASHPlayerUI.SKIP_FORWARD_INDEX )
					this.m_nFocusedUIElementIndex = CDASHPlayerUI.SKIP_FORWARD_INDEX;
				else if ( this.m_nFocusedUIElementIndex != CDASHPlayerUI.VOLUME_CONTAINER_INDEX )
					this.m_nFocusedUIElementIndex = this.FindNextEnabledOptionButton( ++this.m_nFocusedUIElementIndex, true );
				break;

			case CDASHPlayerUI.LEFT_PAD_UP:
				if ( this.m_nFocusedUIElementIndex < CDASHPlayerUI.PROGRESS_BAR_INDEX )
					this.m_nFocusedUIElementIndex = CDASHPlayerUI.PROGRESS_BAR_INDEX;
				else if ( this.m_nFocusedUIElementIndex < nTopRowIndex )
					this.m_nFocusedUIElementIndex = nTopRowIndex;
				break;

			case CDASHPlayerUI.LEFT_PAD_DOWN:
				if ( this.m_nFocusedUIElementIndex >= nTopRowIndex )
					this.m_nFocusedUIElementIndex = CDASHPlayerUI.PROGRESS_BAR_INDEX;
				else if ( this.m_nFocusedUIElementIndex >= CDASHPlayerUI.PROGRESS_BAR_INDEX )
					this.m_nFocusedUIElementIndex = CDASHPlayerUI.PLAY_PAUSE_INDEX;
				break;

			default:
				break;
		}

		// switch and show "focus" on that element
		$J( "div[data-index='" + this.m_nFocusedUIElementIndex + "']" ).addClass( 'tenfoot_focus' );

		// volume bar
		if ( this.m_nFocusedUIElementIndex == CDASHPlayerUI.VOLUME_CONTAINER_INDEX )
			this.ShowVolumeBar();
		else if ( this.m_nFocusedUIElementIndex == CDASHPlayerUI.PROGRESS_BAR_INDEX )
			this.SetProgressBarPreview( -1 );
		else if ( this.m_nFocusedUIElementIndex == CDASHPlayerUI.NEXT_VIDEO_INDEX )
			this.ShowVideoSuggestion( true );

		if ( this.ShowMainPanelUI() )
			return;
	}
	else if ( this.m_eFocusedUIPanel == CDASHPlayerUI.eUIPanelSettings )
	{
		// remove the previous "focus" state
		var selElement = $J( "div[data-index='" + this.m_nFocusedUIElementIndex + "']" );
		selElement.removeClass( 'tenfoot_focus' );

		switch ( nKeyDirection )
		{
			case CDASHPlayerUI.LEFT_PAD_LEFT:
				this.ClickUIElementOnKeyDown( $J( '.left_arrow', selElement ) );
				break;

			case CDASHPlayerUI.LEFT_PAD_RIGHT:
				this.ClickUIElementOnKeyDown( $J( '.right_arrow', selElement ) );
				break;

			case CDASHPlayerUI.LEFT_PAD_UP:
				for ( var i = this.m_nFocusedUIElementIndex - 1; i >= CDASHPlayerUI.SETTINGS_PANEL_FIRST_INDEX; i-- )
				{
					if ( $J( 'div[data-index="' + i + '"]' ).parent().is(':visible') )
					{
						this.m_nFocusedUIElementIndex = i;
						break;
					}
				}
				break;

			case CDASHPlayerUI.LEFT_PAD_DOWN:
				for ( var i = this.m_nFocusedUIElementIndex + 1; i <= CDASHPlayerUI.SETTINGS_PANEL_LAST_INDEX; i++ )
				{
					if ( $J( 'div[data-index="' + i + '"]' ).parent().is(':visible') )
					{
						this.m_nFocusedUIElementIndex = i;
						break;
					}
				}
				break;

			case CDASHPlayerUI.NAVIGATE_INIT:
				if ( this.m_nFocusedUIElementIndex <= CDASHPlayerUI.SETTINGS_PANEL_FIRST_INDEX )
				{
					for ( var i = CDASHPlayerUI.SETTINGS_PANEL_FIRST_INDEX; i <= CDASHPlayerUI.SETTINGS_PANEL_LAST_INDEX; i++ )
					{
						if ( $J( 'div[data-index="' + i + '"]' ).parent().is(':visible') )
						{
							this.m_nFocusedUIElementIndex = i;
							break;
						}
					}
				}
				break;

			default:
				break;
		}

		// switch and show "focus" on that element
		selElement = $J( "div[data-index='" + this.m_nFocusedUIElementIndex + "']" );
		selElement.addClass( 'tenfoot_focus' );

		this.ScrollToPanelSelectItem( nKeyDirection, $J( '.tenfoot_settings_panel' ), CDASHPlayerUI.SETTINGS_PANEL_FIRST_INDEX, selElement.parent().height() + parseInt( selElement.prev().css('margin-top') ) );

	}
	else if ( this.m_eFocusedUIPanel == CDASHPlayerUI.eUIPanelCaptions )
	{
		// remove the previous "focus" state
		var selElement = $J( "div[data-index='" + this.m_nFocusedUIElementIndex + "']" );
		selElement.removeClass( 'tenfoot_focus' );

		switch ( nKeyDirection )
		{
			case CDASHPlayerUI.LEFT_PAD_LEFT:
				this.ClickUIElementOnKeyDown( $J( '.left_arrow', selElement ) );
				break;

			case CDASHPlayerUI.LEFT_PAD_RIGHT:
				this.ClickUIElementOnKeyDown( $J( '.right_arrow', selElement ) );
				break;

			case CDASHPlayerUI.LEFT_PAD_UP:
				this.m_nFocusedUIElementIndex = Math.min( Math.max( --this.m_nFocusedUIElementIndex, CDASHPlayerUI.CAPTIONS_PANEL_FIRST_INDEX ), CDASHPlayerUI.CAPTIONS_PANEL_LAST_INDEX );
				break;

			case CDASHPlayerUI.LEFT_PAD_DOWN:
				this.m_nFocusedUIElementIndex = Math.min( Math.max( ++this.m_nFocusedUIElementIndex, CDASHPlayerUI.CAPTIONS_PANEL_FIRST_INDEX ), CDASHPlayerUI.CAPTIONS_PANEL_LAST_INDEX );
				break;

			case CDASHPlayerUI.NAVIGATE_INIT:
				if ( this.m_nFocusedUIElementIndex < CDASHPlayerUI.CAPTIONS_PANEL_FIRST_INDEX )
					this.m_nFocusedUIElementIndex = CDASHPlayerUI.CAPTIONS_PANEL_FIRST_INDEX;
				break;

			default:
				break;
		}

		// switch and show "focus" on that element
		selElement = $J( "div[data-index='" + this.m_nFocusedUIElementIndex + "']" );
		selElement.addClass( 'tenfoot_focus' );

		this.ScrollToPanelSelectItem( nKeyDirection, $J( '.tenfoot_dash_closed_captions_customization' ), CDASHPlayerUI.CAPTIONS_PANEL_FIRST_INDEX, selElement.parent().height() + parseInt( selElement.prev().css('margin-top') ) );
	}
}

CDASHPlayerUI.prototype.ScrollToPanelSelectItem = function( nKeyDirection, elScrollWrapper, nFirstIndex, nScrollAmount )
{
	if ( !this.BInTenFoot() )
		return;

	if ( nKeyDirection == CDASHPlayerUI.LEFT_PAD_DOWN )
	{
		// if the next element is outside of the page, scroll some amount
		var selectIndex = this.m_nFocusedUIElementIndex - nFirstIndex + 1;
		var windowBottom = elScrollWrapper.scrollTop() + elScrollWrapper.height();
		if ( windowBottom < selectIndex * nScrollAmount )
			elScrollWrapper.scrollTop( elScrollWrapper.scrollTop() + nScrollAmount );
	}
	else if ( nKeyDirection == CDASHPlayerUI.LEFT_PAD_UP )
	{
		var selectIndex = this.m_nFocusedUIElementIndex - nFirstIndex;
		var windowTop = elScrollWrapper.scrollTop();
		if ( windowTop > selectIndex * nScrollAmount )
			elScrollWrapper.scrollTop( elScrollWrapper.scrollTop() - nScrollAmount );
	}
	else if ( nKeyDirection == CDASHPlayerUI.NAVIGATE_INIT )
	{
		elScrollWrapper.scrollTop( 0 );
	}
}

CDASHPlayerUI.prototype.ScrubUIOnKeyDown = function ( nKeyDirection, bFromLeftPad )
{
	if ( !this.BInTenFoot() )
		return;

	if ( this.ShowMainPanelUI() )
		return;

	// handle switch through the map of UI elements
	switch ( nKeyDirection )
	{
		case CDASHPlayerUI.RIGHT_PAD_RIGHT:
			if ( this.m_nFocusedUIElementIndex == CDASHPlayerUI.PROGRESS_BAR_INDEX )
				if ( bFromLeftPad )
					this.IncrementProgressBarPreview( CDASHPlayerUI.SKIP_LEFT_PAD_SECS / CDASHPlayerUI.SKIP_SHORT_TIME_SECS );
				else
					this.IncrementProgressBarPreview( CDASHPlayerUI.SKIP_LONG_TIME_SECS / CDASHPlayerUI.SKIP_SHORT_TIME_SECS );
			break;

		case CDASHPlayerUI.RIGHT_PAD_LEFT:
			if ( this.m_nFocusedUIElementIndex == CDASHPlayerUI.PROGRESS_BAR_INDEX )
				if ( bFromLeftPad )
					this.DecrementProgressBarPreview( CDASHPlayerUI.SKIP_LEFT_PAD_SECS / CDASHPlayerUI.SKIP_SHORT_TIME_SECS );
				else
					this.DecrementProgressBarPreview( CDASHPlayerUI.SKIP_LONG_TIME_SECS / CDASHPlayerUI.SKIP_SHORT_TIME_SECS );
			break;

		case CDASHPlayerUI.RIGHT_PAD_UP:
			if ( this.m_nFocusedUIElementIndex == CDASHPlayerUI.VOLUME_CONTAINER_INDEX )
				this.IncrementVolume(4);
			break;

		case CDASHPlayerUI.RIGHT_PAD_DOWN:
			if ( this.m_nFocusedUIElementIndex == CDASHPlayerUI.VOLUME_CONTAINER_INDEX )
				this.DecrementVolume(4);
			break;

		default:
			break;
	}

}

CDASHPlayerUI.prototype.OnSkipTime = function( nTimeDelta )
{
	var nSeekedTime = this.m_player.SkipTime( nTimeDelta );
	this.m_bPlayingLiveEdge = this.m_player.BIsLiveEdge( nSeekedTime );
}

CDASHPlayerUI.prototype.OnMouseWheelTenFoot = function ( e )
{
	if ( !this.BInTenFoot() )
		return;

	if ( this.ShowMainPanelUI() )
		return;

	if ( this.m_nFocusedUIElementIndex == CDASHPlayerUI.VOLUME_CONTAINER_INDEX )
	{
		if ( e.originalEvent.wheelDelta > 0 )
			this.IncrementVolume(1);
		else
			this.DecrementVolume(1);
	}
	else if ( this.m_nFocusedUIElementIndex == CDASHPlayerUI.PROGRESS_BAR_INDEX )
	{
		if ( e.originalEvent.wheelDelta > 0 )
			this.IncrementProgressBarPreview(1);
		else
			this.DecrementProgressBarPreview(1);
	}

}

CDASHPlayerUI.prototype.ToggleStats = function()
{
	$J( this.m_player.m_elVideoPlayer ).trigger( 'togglestats' );
}

CDASHPlayerUI.prototype.ToggleFullscreen = function()
{
	var elContainer = this.m_elOverlay[ 0 ].parentNode;

	if ( this.m_bUseSDLFullScreen )
	{
		try
		{
			SteamAPI.SteamUtils.ToggleFullScreen();
			if ( $J( elContainer).hasClass('fullscreen') )
			{
				$J(elContainer).removeClass('fullscreen');
			}
			else
			{
				$J(elContainer).addClass('fullscreen');
			}

			return;

		}
		catch ( e ) { }
	}

	var bFullscreen = document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || this.m_player.m_elVideoPlayer.webkitDisplayingFullscreen;

	if ( !bFullscreen )
	{
		if ( elContainer.requestFullscreen )
			elContainer.requestFullscreen();
		else if ( elContainer.webkitRequestFullScreen && this.m_bIsSafariBrowser )
			elContainer.webkitRequestFullScreen();
		else if ( elContainer.webkitRequestFullScreen )
			elContainer.webkitRequestFullScreen( Element.ALLOW_KEYBOARD_INPUT );
		else if ( elContainer.mozRequestFullScreen )
			elContainer.mozRequestFullScreen();
		else if ( elContainer.msRequestFullscreen )
			elContainer.msRequestFullscreen();
		else if ( this.m_player.m_elVideoPlayer.webkitDisplayingFullscreen !== undefined ) // iOS / Safari
			this.m_player.m_elVideoPlayer.webkitEnterFullscreen();

		$J( elContainer ).addClass( 'fullscreen' );
	}
	else
	{
		if ( document.cancelFullscreen )
			document.cancelFullscreen();
		else if ( document.webkitCancelFullScreen )
			document.webkitCancelFullScreen();
		else if ( document.mozCancelFullScreen )
			document.mozCancelFullScreen();
		else if ( document.msExitFullscreen )
			document.msExitFullscreen();

		$J( elContainer ).removeClass( 'fullscreen' );
	}
}

CDASHPlayerUI.prototype.OnFullScreenChange = function()
{
	var _ui = this;
	var bFullscreen = document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement;
	if ( bFullscreen )
	{
		$J( document ).on( 'keydown', function( e )
		{
			var bFullscreen = document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement;
			if ( e.keyCode == 27 && bFullscreen )
				_ui.ToggleFullscreen();
		});
	}
	else
	{
		$J( document ).off( 'keydown' );
		$J( this.m_elContainer ).removeClass( 'fullscreen' );
	}
}

CDASHPlayerUI.prototype.OnProgressClick = function( e, ele )
{
	var elVideoPlayer = this.m_player.m_elVideoPlayer;
	var parentOffset = $J(ele).offset();
	var barWidth = $J(ele).innerWidth();
	var relX = e.pageX - parentOffset.left;
	var nPercent =  relX / barWidth;

	var rgData = this.GetTimelineData();
	var nSeekTo = ((rgData.nTimeEnd - rgData.nTimeStart) * nPercent) + rgData.nTimeStart;

	if ( this.m_player.BIsLiveContent() )
	{
		nSeekTo = Math.min( nSeekTo, rgData.nBufferedEnd );
	}

	if ( this.m_player.BIsLiveContent() && ( rgData.nBufferedEnd - nSeekTo < this.m_player.GetTrackBufferMS() / 1000 * 2 ) )
	{
		this.JumpToLive();
	}
	else
	{
		this.m_player.SeekTo( nSeekTo );
		this.m_bPlayingLiveEdge = false;
		this.OnTimeUpdatePlayer();
	}
}

CDASHPlayerUI.prototype.OnProgressHover = function( e, ele )
{
	if ( this.m_bHidden )
		return;

	var parentOffset = $J( ele ).offset();
	var barWidth = $J( ele ).innerWidth();

	var relX = Math.min( e.pageX - parentOffset.left, $J( ele ).width() );
	var fPercent =  relX / barWidth;

	this.SetProgressBarPreview( fPercent );

}

CDASHPlayerUI.prototype.OnProgressLeave = function( e, ele )
{
	$J( '.progress_time_info' ).css( 'visibility', 'hidden' );
	$J( '.progress_time_bar' ).css( 'visibility', 'hidden' );
}

CDASHPlayerUI.prototype.SetProgressBarPreview = function( fPercent )
{
	var rgData = this.GetTimelineData();

	// if -1 set preview to the current time location
	if ( fPercent == -1 )
		fPercent = this.m_player.GetPlaybackTimeInSeconds() / rgData.nTimeEnd;

	fPercent = Math.min( Math.max( fPercent, 0 ), 1 );

	var barWidth = $J( '.progress_bar_container' ).innerWidth();
	var relX = fPercent * barWidth;

	var nSeekTo = ((rgData.nTimeEnd - rgData.nTimeStart) * fPercent) + rgData.nTimeStart;
	var strTime = "";

	if ( this.m_player.BIsLiveContent() )
	{
		nSeekTo = rgData.nBufferedEnd - nSeekTo;
		if ( nSeekTo < this.m_player.GetTrackBufferMS() / 1000 * 2 )
			strTime = 'Live';
		else
			strTime = '-' + SecondsToTime( nSeekTo );
	}
	else
	{
		strTime = SecondsToTime( Math.min( Math.max( nSeekTo, 0 ), rgData.nTimeEnd ) );
	}

	if ( !this.BInTenFoot() )
	{
		var timeWidth = $J('.progress_time_info').outerWidth();
		var nTimeInfoLeft = Math.min( Math.max( relX - timeWidth / 2, 4 ), barWidth - timeWidth );
		$J('.progress_time_info').css( 'left', nTimeInfoLeft );
	}

	$J( '.progress_time_info .time_display' ).text( strTime );
	$J( '.progress_time_bar' ).css( 'left', relX );

	$J('.progress_time_bar').css('visibility', 'visible');

	// if we have thumbnails to show
	if ( this.m_ThumbnailInfo && this.m_ThumbnailInfo.template && this.m_nThumbnailHeight != 0 )
	{
		var nLastThumbnailTime = Math.floor(( rgData.nTimeEnd - this.m_ThumbnailInfo.period ) / this.m_ThumbnailInfo.period) * this.m_ThumbnailInfo.period;
		nSeekTo = Math.min(nSeekTo, nLastThumbnailTime);

		var nThumbnailSheetSeconds = Math.floor(nSeekTo / this.m_ThumbnailInfo.sheetSeconds) * this.m_ThumbnailInfo.sheetSeconds;
		var nThumbnailIndexInSheet = Math.floor(( nSeekTo - nThumbnailSheetSeconds ) / this.m_ThumbnailInfo.period);
		var nThumbnailWidth = $J('.progress_time_info.thumbnails').innerWidth();
		var strThumbnailSheetURL = this.m_ThumbnailInfo.template.replace('$Seconds$', nThumbnailSheetSeconds);
		var nXPosInSheet = -1 * nThumbnailWidth * nThumbnailIndexInSheet;

		$J('.progress_time_info').css('background-image', 'url(\'' + strThumbnailSheetURL + '\')');
		$J('.progress_time_info').css('background-position', nXPosInSheet + 'px ' + this.m_nThumbnailOffset + 'px');

		if ( !this.m_schPrecacheTimeout )
		{
			var _ui = this;
			this.m_schPrecacheTimeout = window.setTimeout( function () { _ui.PrecacheThumbnail( nThumbnailSheetSeconds, nLastThumbnailTime ) }, CDASHPlayerUI.PRELOAD_THUMBNAILS_PRELOAD_DELAY_MS );
		}
	}

	$J('.progress_time_info').css('visibility', 'visible');

	this.m_fLastProgressBarScrubPerc = fPercent;
}

CDASHPlayerUI.prototype.PrepareThumbnailDisplay = function()
{
	if ( this.m_ThumbnailInfo && this.m_ThumbnailInfo.template )
	{
		var strThumbnailSheetURL = this.m_ThumbnailInfo.template.replace( '$Seconds$', 0 );
		$J('.progress_time_info').css('background-image', 'url(\'' + strThumbnailSheetURL + '\')');

		var img = new Image;
		img.src = $J('.progress_time_info').css('background-image').replace(/url\(|\)$/ig, "").replace(/"/g,"");
		this.m_nThumbnailHeight = img.height;

		if ( this.m_nThumbnailHeight == 0 )
		{
			var _ui = this;
			window.setTimeout( function() { _ui.PrepareThumbnailDisplay(); }, 100 );
			return;
		}

		if ( this.BInTenFoot() )
			this.m_nThumbnailHeight *= 2;

		var nThumbContainerHeight = $J( '.progress_time_info.thumbnails' ).innerHeight();
		if ( !this.BInTenFoot() )
			nThumbContainerHeight -= $J( '.progress_time_info.thumbnails .time_display' ).innerHeight();

		this.m_nThumbnailOffset = Math.floor( ( nThumbContainerHeight - this.m_nThumbnailHeight ) / 2 );
		$J( '.progress_time_info' ).css( 'background-size', 'auto ' + this.m_nThumbnailHeight + 'px' );
	}
}

CDASHPlayerUI.prototype.PrecacheThumbnail = function( nTargetThumbnailSeconds, nMaxThumbnailTime )
{
	if ( !this.m_player.BIsLiveContent() && CDASHPlayerUI.PRELOAD_THUMBNAILS )
	{
		var nTargetSeconds = nTargetThumbnailSeconds + this.m_ThumbnailInfo.sheetSeconds;
		if ( nTargetSeconds <= nMaxThumbnailTime )
		{
			var image_url_fwd = this.m_ThumbnailInfo.template.replace( '$Seconds$', nTargetSeconds );
			var imageincache = $J( '#thumbnailcache img[src$="' + image_url_fwd + '"]' );
			if ( imageincache.length == 0 )
				$J( '<img />' ).attr( 'src', image_url_fwd ).appendTo( '#thumbnailcache' ).hide();
		}

		nTargetSeconds = nTargetThumbnailSeconds - this.m_ThumbnailInfo.sheetSeconds;
		if ( nTargetSeconds >= 0 )
		{
			var image_url_rew = this.m_ThumbnailInfo.template.replace( '$Seconds$', nTargetSeconds );
			var imageincache = $J( '#thumbnailcache img[src$="' + image_url_rew + '"]' );
			if ( imageincache.length == 0 )
				$J( '<img />' ).attr( 'src', image_url_rew ).appendTo( '#thumbnailcache' ).hide();
		}
	}
	this.m_schPrecacheTimeout = null;
}

CDASHPlayerUI.prototype.IncrementProgressBarPreview = function( nAccelerate )
{
	var time = CDASHPlayerUI.SKIP_SHORT_TIME_SECS * nAccelerate / this.GetTimelineData().nTimeEnd;
	this.SetProgressBarPreview( this.m_fLastProgressBarScrubPerc + time );
}

CDASHPlayerUI.prototype.DecrementProgressBarPreview = function( nAccelerate )
{
	var time = CDASHPlayerUI.SKIP_SHORT_TIME_SECS * nAccelerate / this.GetTimelineData().nTimeEnd;
	this.SetProgressBarPreview( this.m_fLastProgressBarScrubPerc - time );
}

CDASHPlayerUI.prototype.InitClosedCaptionOptionPanel = function()
{
	if ( this.m_bClosedCaptionPanelInit || this.BInTenFoot() )
		return;

	var _ui = this;
	this.m_elContainer.append( this.m_elClosedCaptionsPanel );

	// Closed Captions languages
	var rgRepresentation = this.m_player.GetClosedCaptionsArray();
	rgRepresentation = rgRepresentation.sort(CVTTCaptionLoader.SortClosedCaptionsByDisplayLanguage);

	// show selector if there is a closed caption available
	if ( rgRepresentation.length > 0 )
	{
		$J( '.representation_captions' ).show();
		for (var r = 0; r < rgRepresentation.length; r++)
		{
			if ( rgRepresentation[r].code.toUpperCase() != CDASHPlayerUI.CLOSED_CAPTIONS_NONE.toUpperCase() )
			{
				if ( rgRepresentation[r].roles[0] == CVTTCaptionLoader.s_ForcedNarrative )
					continue;

				var strClosedCaptionValue = '';
				var strClosedCaptionLabel = '';
				if ( rgRepresentation[r].roles[0] == CVTTCaptionLoader.s_Caption )
				{
					strClosedCaptionValue = CDASHPlayerUI.CLOSED_CAPTIONS_SELECT_EXT;
					strClosedCaptionLabel = ' (CC)';
				}

				$J('#representation_select_captions').append('<option value="' + rgRepresentation[r].code + strClosedCaptionValue + '">' + rgRepresentation[r].display + strClosedCaptionLabel + "</option>");
			}
		}

		$J( '#representation_select_captions' ).on( 'change', function()
		{
			_ui.SwitchClosedCaptionLanguageInPlayer( this.value );
		} );

		// customize captions link and action
		$J( '.customize_captions' ).on( 'click', function()
		{
			if ( !_ui.m_elSettingsPanel.is( ':hidden' ) )
			{
				$J( '#settings_done' ).click();
			}

			_ui.ShowClosedCaptionsPanel();
		} );

	}
	else
	{
		$J( '.customize_captions' ).css( 'display', 'none' );
	}

	// Steam/Chrome options we present, Safari captions options are controlled at the OS level, IE in the browser Internet Options
	if ( this.m_bIsSafariBrowser )
	{
		this.m_elClosedCaptionsPanel.append('<div class="cc_style_instructions"><p>For Safari</p><br/>\n                                                 <ol>\n                                                     <li>From the Apple Menu, select System Preferences</li>\n                                                     <li>Click Accessibility</li>\n                                                     <li>Click Captions</li>\n                                                     <li>Select a pre-defined style or create a custom style by clicking +</li>\n                                                 </ol></div>');
	}
	else if ( this.m_bIsInternetExplorer )
	{
		this.m_elClosedCaptionsPanel.append('<div class="cc_style_instructions"><p>For Internet Explorer</p><br/>\n                                                        <ol>\n                                                           <li>From the Tools Menu, select Internet options</li>\n                                                           <li>Click Accessibility</li>\n                                                           <li>Click Captions</li>\n                                                           <li>Turn on Ignore default caption fonts and colors</li>\n                                                           <li>Customize the font, font style and color as desired</li>\n                                                           <li>Click OK, OK, OK</li>\n                                                           <li>Restart the movie for the changes to take effect</li>\n                                                        </ol></div>');
	}
	else
	{
		$J( '.cc_select_wrapper > select' ).each( function ( index, selectid )
		{
			$J( selectid ).on( 'change', function()
			{
				CDASHPlayerUI.ChangeClosedCaptionDisplay( this.id.replace("cc-",""), this.value );
			} );

		});

		this.LoadClosedCaptionLanguage();
		this.LoadClosedCaptionOptions();
	}

	$J( '#captions_cancel' ).on('click', function()
	{
		_ui.LoadClosedCaptionLanguage();
		_ui.LoadClosedCaptionOptions();
		_ui.m_elClosedCaptionsPanel.fadeOut( CDASHPlayerUI.DESKTOP_UI_FADE_MS );
		_ui.m_eFocusedUIPanel = CDASHPlayerUI.eUIPanelMain;
	} );

	$J( '#captions_done' ).on('click', function()
	{
		_ui.SaveClosedCaptionLanguage();
		_ui.SaveClosedCaptionOptions();
		_ui.m_elClosedCaptionsPanel.fadeOut( CDASHPlayerUI.DESKTOP_UI_FADE_MS );
		_ui.m_eFocusedUIPanel = CDASHPlayerUI.eUIPanelMain;
	} );

	this.m_bClosedCaptionPanelInit = true;
}

CDASHPlayerUI.prototype.InitClosedCaptionOptionPanelTenFoot = function()
{
	if ( this.m_bClosedCaptionPanelInit || !this.BInTenFoot() )
		return;

	var _ui = this;
	this.m_elContainer.append( this.m_elClosedCaptionsPanel );

	// Closed Captions Language list
	var rgRepresentation = this.m_player.GetClosedCaptionsArray();
	rgRepresentation = rgRepresentation.sort(CVTTCaptionLoader.SortClosedCaptionsByDisplayLanguage);

	if ( rgRepresentation.length > 0 )
	{
		for (var r = 0; r < rgRepresentation.length; r++)
		{
			if ( rgRepresentation[r].code.toUpperCase() != CDASHPlayerUI.CLOSED_CAPTIONS_NONE.toUpperCase() )
			{
				if ( rgRepresentation[r].roles[0] == CVTTCaptionLoader.s_ForcedNarrative )
					continue;

				var strClosedCaptionValue = '';
				var strClosedCaptionLabel = '';
				if ( rgRepresentation[r].roles[0] == CVTTCaptionLoader.s_Caption )
				{
					strClosedCaptionValue = CDASHPlayerUI.CLOSED_CAPTIONS_SELECT_EXT;
					strClosedCaptionLabel = ' (CC)';
				}

				$J('#representation_captions_language #representation_select').append('<div data-value="' + rgRepresentation[r].code + strClosedCaptionValue + '" class="notselected">' + rgRepresentation[r].display + strClosedCaptionLabel + "</div>");
			}
		}

		$J( '#representation_captions_language .panel_select .left_arrow' ).on( 'click', function() {
			var elSelect = $J( '#representation_captions_language #representation_select' );
			var value = _ui.PanelSelectShift( elSelect, false );
			_ui.SwitchClosedCaptionLanguageInPlayer( value );
		} );

		$J( '#representation_captions_language .panel_select .right_arrow' ).on( 'click', function() {
			var elSelect = $J( '#representation_captions_language #representation_select' );
			var value = _ui.PanelSelectShift( elSelect, true );
			_ui.SwitchClosedCaptionLanguageInPlayer( value );
		} );

		$J( '#representation_video' ).show();

		// CC button event
		$J( '.customize_captions' ).on( 'click', function()
		{
			_ui.Hide(0);
			_ui.ShowClosedCaptionsPanel();
			_ui.SwitchElementFocus( CDASHPlayerUI.NO_ELEMENT_INDEX );
		} );

		$J( '#buttonA', this.m_elClosedCaptionsPanel ).on( 'click', function ( e ) { _ui.CloseCaptionsPanelTenFoot( false, true ); } );
		$J( '#buttonB', this.m_elClosedCaptionsPanel ).on( 'click', function ( e ) { _ui.CloseCaptionsPanelTenFoot( false, false ); } );

	}
	else
	{
		this.SetTenFootOptionButtonVisible( '.customize_captions', false );
	}


	// caption options
	$J( '#captions_options_wrapper > .panel_select_wrapper' ).each( function ( index, selectid )
	{
		var elPanelSelect = $J( selectid ).find( '.panel_select' );

		elPanelSelect.find( '.left_arrow' ).on( 'click', function() {
			var elSelect = $J( selectid ).find( '#representation_select' );
			var value = _ui.PanelSelectShift( elSelect, false );
			CDASHPlayerUI.ChangeClosedCaptionDisplay( selectid.id.replace("cc-",""), value );
		} );

		elPanelSelect.find( '.right_arrow' ).on( 'click', function() {
			var elSelect = $J( selectid ).find( '#representation_select' );
			var value = _ui.PanelSelectShift( elSelect, true );
			CDASHPlayerUI.ChangeClosedCaptionDisplay( selectid.id.replace("cc-",""), value );
		} );

	});

	this.LoadClosedCaptionLanguage();
	this.LoadClosedCaptionOptions();

	this.m_bClosedCaptionPanelInit = true;

}

CDASHPlayerUI.prototype.SetClosedCaptionLanguageInUI = function( strCode )
{
	var adaptation = this.m_player.GetCurrentAudioAdaptation();

	if ( this.BInTenFoot() )
	{
		this.PanelSelectByValue( $J( '#representation_captions_language', this.m_elClosedCaptionsPanel ), strCode );
		if ( adaptation && adaptation.forceSub )
		{
			this.PanelSelectDisable( $J( '#representation_captions_language', this.m_elClosedCaptionsPanel ), true,
				"{0} (Set by Audio Track)".format( CVTTCaptionLoader.GetDisplayNameFromCode( adaptation.forceSub ) ) );
		}
		else
		{
			var strRestoreLang = 'None';
			if ( strCode.toUpperCase() != CDASHPlayerUI.CLOSED_CAPTIONS_NONE.toUpperCase() )
			{
				var ccRole = endsWith( strCode, CDASHPlayerUI.CLOSED_CAPTIONS_SELECT_EXT ) ? CVTTCaptionLoader.s_Caption : CVTTCaptionLoader.s_Subtitle;
				var strCode = strCode.replace( CDASHPlayerUI.CLOSED_CAPTIONS_SELECT_EXT, '' );

				strRestoreLang = CVTTCaptionLoader.GetDisplayNameFromCode( strCode );

				if ( ccRole == CVTTCaptionLoader.s_Caption )
				{
					strRestoreLang += ' (CC)';
				}
			}

			this.PanelSelectDisable( $J( '#representation_captions_language', this.m_elClosedCaptionsPanel ), false, strRestoreLang );
		}
	}
	else
	{
		$J( "#representation_select_captions" ).val( strCode );
		if ( adaptation && adaptation.forceSub )
		{
			$J( "#representation_select_captions" ).hide();
			$J( "#select_captions_force_sub_msg" ).text( "{0} (Set by Audio Track)".format( CVTTCaptionLoader.GetDisplayNameFromCode( adaptation.forceSub ) ) ).show();
		}
		else
		{
			$J( "#representation_select_captions" ).show();
			$J( "#select_captions_force_sub_msg" ).hide();
		}
	}
}

CDASHPlayerUI.prototype.ShowClosedCaptionsPanel = function()
{
	if ( this.BInTenFoot() )
	{
		this.LoadClosedCaptionLanguage();
		this.LoadClosedCaptionOptions();
		this.m_eFocusedUIPanel = CDASHPlayerUI.eUIPanelCaptions;
		this.m_elClosedCaptionsPanel.fadeIn( CDASHPlayerUI.TENFOOT_UI_FADE_MS );
		this.NavigateUIOnKeyDown( CDASHPlayerUI.NAVIGATE_INIT );
	}
	else
	{
		if ( !this.m_elClosedCaptionsPanel.is( ':hidden' ) )
		{
			$J( '#captions_done' ).click();
		}
		else
		{
			this.LoadClosedCaptionLanguage();
			this.LoadClosedCaptionOptions();
			this.m_eFocusedUIPanel = CDASHPlayerUI.eUIPanelCaptions;
			this.m_elClosedCaptionsPanel.fadeIn( CDASHPlayerUI.DESKTOP_UI_FADE_MS );
			this.NavigateUIOnKeyDown( CDASHPlayerUI.NAVIGATE_INIT );
		}
	}
}

CDASHPlayerUI.prototype.SwitchClosedCaptionLanguageInPlayer = function( strCaptionCode )
{
	var ccRole = endsWith( strCaptionCode, CDASHPlayerUI.CLOSED_CAPTIONS_SELECT_EXT ) ? CVTTCaptionLoader.s_Caption : CVTTCaptionLoader.s_Subtitle;
	var ccCode = strCaptionCode.replace( CDASHPlayerUI.CLOSED_CAPTIONS_SELECT_EXT, '' );
	this.m_player.UpdateClosedCaption( ccCode, ccRole );

	var strCaptionURL = this.m_player.m_VTTCaptionLoader.GetClosedCaptionUrl( ccCode, ccRole );
	if ( strCaptionURL )
	{
		$J( '.download_subtitle' ).attr( 'href', strCaptionURL );
		$J( '.download_subtitle' ).attr( 'download', this.m_strUniqueSettingsID + '_' + ccCode + '_' + ccRole );
	}
}

CDASHPlayerUI.ChangeClosedCaptionDisplay = function( cueKey, cueValue )
{
	if ( window.VTTCue && document.styleSheets[document.styleSheets.length-1].addRule )
		document.styleSheets[document.styleSheets.length-1].addRule( '::cue', cueKey + ":" + cueValue );
}

CDASHPlayerUI.GetSavedClosedCaptionLanguage = function( strUniqueSettingsID )
{
	return WebStorage.GetLocal( "closed_caption_language_setting_" + strUniqueSettingsID.toString() );
}

CDASHPlayerUI.prototype.LoadClosedCaptionLanguage = function()
{
	var strCode = CDASHPlayerUI.GetSavedClosedCaptionLanguage( this.m_strUniqueSettingsID );
	if ( strCode )
	{
		this.SetClosedCaptionLanguageInUI( strCode );
		this.SwitchClosedCaptionLanguageInPlayer( strCode );
	}
}

CDASHPlayerUI.prototype.SaveClosedCaptionLanguage = function()
{
	var strCaptionCode = '';

	if ( this.BInTenFoot() )
		strCaptionCode = $J( '#representation_captions_language #representation_select .selected' ).attr( 'data-value' );
	else
		strCaptionCode = $J( '#representation_select_captions' ).find( ":selected" ).val();

	WebStorage.SetLocal( "closed_caption_language_setting_" + this.m_strUniqueSettingsID, strCaptionCode );

	if ( strCaptionCode != CDASHPlayerUI.CLOSED_CAPTIONS_NONE )
		$J( this.m_player.m_elVideoPlayer ).trigger( 'logevent', [ 'Caption Language', strCaptionCode ] );
}

CDASHPlayerUI.prototype.LoadClosedCaptionOptions = function()
{
	if ( this.BInTenFoot() )
	{
		var _ui = this;

		$J( '#captions_options_wrapper > .panel_select_wrapper', this.m_elClosedCaptionsPanel ).each( function ( index, element )
		{
			var value = WebStorage.GetLocal( element.id );
			if ( value )
			{
				_ui.PanelSelectByValue( $J( element ), value );
				CDASHPlayerUI.ChangeClosedCaptionDisplay( element.id.replace("cc-",""), value );
			}
			else
			{
				// save the default value so we have something to cancel back to
				var elementId = '#' + element.id + ' #representation_select .selected';
				WebStorage.SetLocal( element.id, $J( elementId ).attr( 'data-value' ) );
			}
		});
	}
	else
	{
		$J( '.cc_select_wrapper select', this.m_elClosedCaptionsPanel ).each( function ( index, element )
		{
			var value = WebStorage.GetLocal( element.id );
			if ( value )
			{
				$J( '#' + element.id ).val( value ).change();
			}
			else
			{
				// save the default value so we have something to cancel back to
				var elementId = '#' + element.id + ' option:selected';
				WebStorage.SetLocal( element.id, $J( elementId ).val() );
			}
		});
	}
}


CDASHPlayerUI.prototype.SaveClosedCaptionOptions = function()
{
	if ( this.BInTenFoot() )
	{
		var strCaptionCode = $J( '#representation_captions_language #representation_select .selected' ).attr( 'data-value' );

		$J( '#captions_options_wrapper > .panel_select_wrapper', this.m_elClosedCaptionsPanel ).each( function ( index, element )
		{
			var elementId = '#' + element.id + ' #representation_select .selected';
			WebStorage.SetLocal( element.id, $J( elementId ).attr( 'data-value' ) );
		});
	}
	else
	{
		$J( 'select', this.m_elClosedCaptionsPanel ).each( function ( index, element )
		{
			var elementId = '#' + element.id + ' option:selected';
			WebStorage.SetLocal( element.id, $J( elementId ).val() );
		});
	}
}

CDASHPlayerUI.prototype.SetAudioTrackSelectedInUI = function( strCode )
{
	if ( this.BInTenFoot() )
	{
		this.PanelSelectByValue( $J( '#representation_audio_track', this.m_elSettingsPanel ), strCode );
		this.SetupAudioRepresentationsInUITenFoot();
	}
	else
	{
		var uiAudioTrack = $J( '#representation_select_audio_track' );
		if ( uiAudioTrack.length )
		{
			uiAudioTrack.val( strCode );
			this.SetupAudioRepresentationsInUI();
		}
	}
}

CDASHPlayerUI.prototype.SetAudioRepresentationSelectedInUI = function()
{
	if ( this.BInTenFoot() )
		this.PanelSelectByValue( $J( '#representation_audio #representation_select' ), this.m_player.m_nAudioRepresentationIndex );
	else
		$J('#representation_select_audio' ).val( this.m_player.m_nAudioRepresentationIndex );
}

CDASHPlayerUI.GetSavedAudioTrackSelected = function( strUniqueSettingsID )
{
	var value = WebStorage.GetLocal( 'audio_track_' + strUniqueSettingsID.toString() );
	if ( typeof value !== 'undefined' )
		return value;
	else
		return null;
}

CDASHPlayerUI.prototype.SwitchAudioTrackSelectedInPlayer = function( strAudioAdaptationID )
{
	this.m_player.UpdateAudioAdaptationSet( strAudioAdaptationID );

	var adaptation = this.m_player.GetAdaptationByTrackID( strAudioAdaptationID );
	if ( adaptation && adaptation.forceSub )
	{
		WebStorage.SetLocal( "closed_caption_language_setting_" + this.m_strUniqueSettingsID, adaptation.forceSub );
	}
}

CDASHPlayerUI.prototype.LoadAudioTrackSelected = function()
{
	var strCode = CDASHPlayerUI.GetSavedAudioTrackSelected( this.m_strUniqueSettingsID );
	if ( strCode )
	{
		this.SetAudioTrackSelectedInUI( strCode );
		this.SwitchAudioTrackSelectedInPlayer( strCode );
	}
	else
	{
		// if no specific audio track, make sure reps are selected
		this.SetAudioRepresentationSelectedInUI();
	}
}

CDASHPlayerUI.prototype.SaveAudioTrackSelected = function()
{
	var strAudioTrackSelected = '';

	if ( this.BInTenFoot() )
		strAudioTrackSelected = $J( '#representation_audio_track #representation_select .selected' ).attr( 'data-value' );
	else
		strAudioTrackSelected = $J( '#representation_select_audio_track' ).find( ":selected" ).val();

	WebStorage.SetLocal( "audio_track_" + this.m_strUniqueSettingsID, strAudioTrackSelected );

	$J( this.m_player.m_elVideoPlayer ).trigger( 'logevent', [ 'Audio Track', strAudioTrackSelected ] );
}


CDASHPlayerUI.prototype.SetVideoTrackSelectedInUI = function( strCode )
{
	if ( this.BInTenFoot() )
	{
		this.PanelSelectByValue( $J( '#representation_video_track', this.m_elSettingsPanel ), strCode );
		this.SetupVideoRepresentationsInUITenFoot();
	}
	else
	{
		var uiVideoTrack = $J( '#representation_select_video_track' );
		if ( uiVideoTrack.length )
		{
			uiVideoTrack.val( strCode );
			this.SetupVideoRepresentationsInUI();
		}
	}
}

CDASHPlayerUI.prototype.SetVideoRepresentationSelectedInUI = function()
{
	if ( this.BInTenFoot() )
		this.PanelSelectByValue( $J( '#representation_video #representation_select' ), this.m_player.m_nVideoRepresentationIndex );
	else
		$J('#representation_select_video' ).val( this.m_player.m_nVideoRepresentationIndex );
}

CDASHPlayerUI.GetSavedVideoTrackSelected = function( strUniqueSettingsID )
{
	var value = WebStorage.GetLocal( 'video_track_' + strUniqueSettingsID.toString() );
	if ( typeof value !== 'undefined' )
		return value;
	else
		return null;
}

CDASHPlayerUI.prototype.SwitchVideoTrackSelectedInPlayer = function( strVideoAdaptationID )
{
	this.m_player.UpdateVideoAdaptationSet( strVideoAdaptationID );

	// reset thumbnail info
	this.m_ThumbnailInfo = this.m_player.GetThumbnailInfoForVideo();
	this.m_nThumbnailHeight = 0;
	this.m_nThumbnailOffset = 0;
	this.PrepareThumbnailDisplay();
}

CDASHPlayerUI.prototype.LoadVideoTrackSelected = function()
{
	var strCode = CDASHPlayerUI.GetSavedVideoTrackSelected( this.m_strUniqueSettingsID );
	if ( strCode )
	{
		this.SetVideoTrackSelectedInUI( strCode );
		this.SwitchVideoTrackSelectedInPlayer( strCode );
	}
	else
	{
		// if there is no track, just make sure the UI is updated
		this.SetVideoRepresentationSelectedInUI();
	}
}

CDASHPlayerUI.prototype.SaveVideoTrackSelected = function()
{
	var strVideoTrackSelected = '';

	if ( this.BInTenFoot() )
		strVideoTrackSelected = $J( '#representation_video_track #representation_select .selected' ).attr( 'data-value' );
	else
		strVideoTrackSelected = $J( '#representation_select_video_track' ).find( ":selected" ).val();

	WebStorage.SetLocal( "video_track_" + this.m_strUniqueSettingsID, strVideoTrackSelected );

	$J( this.m_player.m_elVideoPlayer ).trigger( 'logevent', [ 'Video Track', strVideoTrackSelected ] );
}

CDASHPlayerUI.prototype.DisplayNotification = function( strNotification, nDisplayTimeMS )
{
	// hide any active notification
	if ( this.m_elActiveNotification )
	{
		this.m_elActiveNotification.remove();
		this.m_elActiveNotification = null;
	}

	if ( this.m_schNotificationTimeout )
	{
		clearTimeout( this.m_schNotificationTimeout );
		this.m_schNotificationTimeout = null;
	}

	var elNotification = $J( '<div class="playback_notification"><span></span></div>' );
	elNotification.find( 'span').text( strNotification );
	this.m_elContainer.append( elNotification );
	this.m_elActiveNotification = elNotification;

		FlushStyleChanges( elNotification );
	elNotification.addClass( 'show_notification' );

	var _ui = this;
	this.m_schNotificationTimeout = setTimeout( function() { _ui.CloseNotification(); }, nDisplayTimeMS );
}

CDASHPlayerUI.prototype.CloseNotification = function()
{
	this.m_schNotificationTimeout = null;
	if ( !this.m_elActiveNotification )
		return;

	var _ui = this;
	var elNotification = this.m_elActiveNotification;
	elNotification.one( 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function()
	{
		if ( _ui.m_elActiveNotification == elNotification )
			_ui.m_elActiveNotification = null;

		elNotification.remove();
	});

	elNotification.addClass( 'close_notification' );
}

CDASHPlayerUI.prototype.SetVideoTitle = function( strTitle )
{
	$J( '#dash_video_title_banner' ).attr( 'title', strTitle );
	$J( '#dash_video_title_banner' ).text( strTitle );

}

CDASHPlayerUI.prototype.SetVideoSuggestData = function( strDialogTitle, strGroupTitle, strVideoTitle, oData )
{
	this.m_oVideoSuggestData = oData;
	var _ui = this;

	$J( '#dash_video_suggest_dialog_title' ).html( strDialogTitle );
	$J( '#dash_video_suggest_group_title' ).html( strGroupTitle );
	$J( '#dash_video_suggest' ).show();

	if ( this.BInTenFoot() )
	{
		$J( '#dash_video_suggest_video_title' ).html( '<div class="tenfoot_video_title_marquee" data-length="' + strVideoTitle.length + '">' + strVideoTitle + '</div>' );
		this.SetVideoSuggestMarquee();

		if ( this.m_player.GetClosedCaptionsArray().length == 0 )
		{
			$J( '.next_video' ).css( 'right', $J( '.customize_captions' ).css( 'right' ) );
		}

		this.SetTenFootOptionButtonVisible( '.next_video', true );
	}
	else
	{
		$J( '#dash_video_suggest_video_title' ).html( strVideoTitle );
		$J( '.next_video' ).show();
	}

	$J( '.next_video' ).on('click', function() {
		$J( _ui.m_player.m_elVideoPlayer ).trigger( 'videosuggest', [ _ui.m_oVideoSuggestData ] );
	} );
}

CDASHPlayerUI.prototype.SetVideoSuggestMarquee = function ( nWidthPixels )
{
	if ( !this.BInTenFoot() )
		return;

	var nVideoTitleWidth = $J( '.tenfoot_video_title_marquee' ).outerWidth();
	var nSuggestBoxWidth = $J( '.tenfoot_dash_overlay #dash_video_suggest' ).outerWidth();
	var nVideoTitleMargin = parseInt( $J( '.tenfoot_dash_overlay #dash_video_suggest_video_title' ).css( 'margin-left' ) ) + parseInt( $J( '.tenfoot_dash_overlay #dash_video_suggest_video_title' ).css( 'margin-right' ) );
	if ( nVideoTitleWidth > nSuggestBoxWidth - nVideoTitleMargin )
	{
		var nScrollEnd = nSuggestBoxWidth - nVideoTitleWidth - nVideoTitleMargin;

		var style = document.documentElement.appendChild( document.createElement( "style" ) ),
			rule = " marquee {\
			0%   { transform: translate3d(0, 0, 0); } \
			100% { transform: translate3d( " + nScrollEnd + "px, 0, 0); } \
		}";

		if ( CSSRule.KEYFRAMES_RULE )
		{
			style.sheet.insertRule( "@keyframes" + rule, 0 );
		}

		$J( '.tenfoot_video_title_marquee' ).css( 'animation-duration', ( Math.abs( nScrollEnd / 60 ) ) + 's' );
	}
}

CDASHPlayerUI.prototype.ShowVideoSuggestion = function( bShow )
{
	if ( bShow )
	{
		$J( '#dash_video_suggest' ).addClass( 'active' )
		$J( '.tenfoot_video_title_marquee' ).addClass( 'active' )
	}
	else
	{
		$J( '#dash_video_suggest' ).removeClass( 'active' );
		$J( '.tenfoot_video_title_marquee' ).removeClass( 'active' );
	}
}

CDASHPlayerUI.prototype.BTenFootVideoSuggestionVisible = function()
{
	if ( this.BInTenFoot() )
		return $J( '.tenfoot_video_title_marquee' ).hasClass( 'active' );
	else
		return false;
}

CDASHPlayerUI.prototype.SetUseSDLFullscreen = function( bUseSDL )
{
	this.m_bUseSDLFullScreen = bUseSDL;
}

CDASHPlayerUI.SortAdaptationsByDescription = function(a,b)
{
	// sort by description / language
	var aDescription, bDescription;
	if ( a.language == a.description )
		aDescription = CVTTCaptionLoader.GetDisplayNameFromCode( a.language );
	else
		aDescription = a.description;

	if ( a.language == a.description )
		bDescription = CVTTCaptionLoader.GetDisplayNameFromCode( b.language );
	else
		bDescription = b.description;

	if ( aDescription < bDescription )
		return -1;
	if ( aDescription > bDescription )
		return 1;

	return 0;
}

CDASHPlayerUI.SortAdaptationsByRole = function(a,b)
{
	// Sort in this order, Main, Dub, Alternate, Supplementary, Commentary
	var aRoleValue, bRoleValue;
	switch ( a.roles[0] )
	{
		case 'main':
			aRoleValue = 0;
			break;
		case 'dub':
			aRoleValue = 1;
			break;
		case 'alternate':
			aRoleValue = 2;
			break;
		case 'commentary':
			aRoleValue = 3;
			break;
		case 'supplementary':
			aRoleValue = 4;
			break;
		default:
			aRoleValue = 5;
			break;
	}

	switch ( b.roles[0] )
	{
		case 'main':
			bRoleValue = 0;
			break;
		case 'dub':
			bRoleValue = 1;
			break;
		case 'alternate':
			bRoleValue = 2;
			break;
		case 'commentary':
			bRoleValue = 3;
			break;
		case 'supplementary':
			bRoleValue = 4;
			break;
		default:
			bRoleValue = 5;
			break;
	}

	// sort by group
	if ( aRoleValue < bRoleValue )
		return -1;
	if ( aRoleValue > bRoleValue )
		return 1;

	return 0;
}

// Commonly Used Functions
function SecondsToTime( seconds )
{
	var hours = Math.floor( seconds / (60 * 60) );
	var minutes = Math.floor( seconds / 60 ) % 60;
	var seconds = Math.floor( seconds ) % 60;

	if( seconds < 10 )
		seconds = "0" + seconds;

	if ( minutes < 10 && hours > 0 )
		minutes = "0" + minutes;

	var out = (hours > 0 ) ? hours + ":" : "";
	return out + minutes + ":" + seconds;
}

function TimetoSeconds( strTime )
{
	// expecting 11:11:11.111
	var rgTimeComponents = strTime.split( ":"),
	compLength = rgTimeComponents.length - 1;

	var seconds = parseInt( rgTimeComponents[compLength-1] ) * 60 + parseFloat( rgTimeComponents[compLength] );

	if ( compLength === 2 )
	{
		seconds += parseInt( rgTimeComponents[0] ) * 3600;
	}

	return seconds;
}

function endsWith( str, suffix ) {
	return ( str.indexOf( suffix, str.length - suffix.length ) !== -1 );
}

String.prototype.format = function()
{
	var formatted = this;
	for (var i = 0; i < arguments.length; i++)
	{
		var regexp = new RegExp('\\{'+i+'\\}', 'gi');
		formatted = formatted.replace(regexp, arguments[i]);
	}
	return formatted;
};

//////////////////////////////////////////////////////////////////////////
// CVTTCaptionLoader for Parsing and Managing VTT Closed Caption Files
//////////////////////////////////////////////////////////////////////////
function CVTTCaptionLoader( elVideoPlayer, closedCaptions )
{
	this.m_elVideoPlayer = elVideoPlayer;
	this.m_rgClosedCaptions = closedCaptions;
	this.m_xhrDownloadVTT = null;
	this.m_strCurrentLangCode = null;
	this.m_strCurrentRole = null;
}

CVTTCaptionLoader.s_TrackOff = "disabled";
CVTTCaptionLoader.s_TrackHidden = "hidden";
CVTTCaptionLoader.s_TrackShowing = "showing";
CVTTCaptionLoader.s_Caption = "caption";
CVTTCaptionLoader.s_Subtitle = "subtitle";
CVTTCaptionLoader.s_ForcedNarrative = "forcednar";
CVTTCaptionLoader.s_DefaultLinePosition = 95;

CVTTCaptionLoader.prototype.Close = function()
{
	// stop any downloads
	if ( this.m_xhrDownloadVTT )
	{
		this.m_xhrDownloadVTT.abort();
		this.m_xhrDownloadVTT = null;
	}

	// clean up cues and turn off tracks
	for (var i = this.m_elVideoPlayer.textTracks.length - 1; i >= 0; i--)
	{
		if ( this.m_elVideoPlayer.textTracks[i].cues )
		{
			for (var c = this.m_elVideoPlayer.textTracks[i].cues.length - 1; c >=0; c--)
			{
				this.m_elVideoPlayer.textTracks[i].removeCue(this.m_elVideoPlayer.textTracks[i].cues[c]);
			}
		}

		this.m_elVideoPlayer.textTracks[i].mode = CVTTCaptionLoader.s_TrackOff;
	}

	this.m_rgClosedCaptions = [];
	this.m_elVideoPlayer = null;
}

CVTTCaptionLoader.prototype.SetAllTextTracksDisplay = function( trackState )
{
	for (var i = 0; i < this.m_elVideoPlayer.textTracks.length; i++ )
	{
		this.m_elVideoPlayer.textTracks[i].mode = trackState;
	}

	this.m_strCurrentLangCode = null;
	this.m_strCurrentRole = null;
}

CVTTCaptionLoader.prototype.GetTextTrackLabelAndKind = function( closedCaptionCode, role )
{
	var oLabelAndKind = {
		'kind': role + 's',
		'label': closedCaptionCode
	};

	if ( role == CVTTCaptionLoader.s_ForcedNarrative )
	{
		oLabelAndKind.kind =  CVTTCaptionLoader.s_Subtitle + 's';
		oLabelAndKind.label = closedCaptionCode + CVTTCaptionLoader.s_ForcedNarrative;
	}

	return oLabelAndKind;
}

CVTTCaptionLoader.prototype.GetTextTrackByCode = function( closedCaptionCode, role )
{
	var oLabelAndKind = this.GetTextTrackLabelAndKind( closedCaptionCode, role );
	for (var i = 0; i < this.m_elVideoPlayer.textTracks.length; i++ )
	{
		if ( this.m_elVideoPlayer.textTracks[i].label == oLabelAndKind.label && this.m_elVideoPlayer.textTracks[i].kind == oLabelAndKind.kind )
			return this.m_elVideoPlayer.textTracks[i];
	}

	return null;
}

CVTTCaptionLoader.prototype.GetClosedCaptionUrl = function( closedCaptionCode, role )
{
	for (var i = 0; i < this.m_rgClosedCaptions.length; i++)
	{
		if ( this.m_rgClosedCaptions[i].code == closedCaptionCode && this.m_rgClosedCaptions[i].roles[0] == role )
				return this.m_rgClosedCaptions[i].url;
	}

	return null;
}

CVTTCaptionLoader.prototype.GetCurrentVTTInfo = function()
{
	var current = {
		'code' : this.m_strCurrentLangCode,
		'role' : this.m_strCurrentRole
	};

	return current;
}

CVTTCaptionLoader.prototype.SwitchToTextTrack = function( closedCaptionCode, role )
{
	// turn off any current track
	this.SetAllTextTracksDisplay( CVTTCaptionLoader.s_TrackOff );

	// see if the requested text track exists, if so, turn it on
	var ccTextTrack = this.GetTextTrackByCode( closedCaptionCode, role );
	if ( ccTextTrack )
	{
		// .cues seems to only be filled in now after showing the track?
		ccTextTrack.mode = CVTTCaptionLoader.s_TrackShowing;
		if ( ccTextTrack.cues && ccTextTrack.cues.length )
		{
			this.m_strCurrentLangCode = closedCaptionCode;
			this.m_strCurrentRole = role;
			return true;
		}
		else
			ccTextTrack.mode = CVTTCaptionLoader.s_TrackHidden;
	}

	// no text track or cues are empty so go get the VTT file
	var ccUrl = this.GetClosedCaptionUrl( closedCaptionCode, role );
	if ( ccUrl )
	{
		var _loader = this;
		this.m_xhrDownloadVTT = $J.ajax(
		{
			url: ccUrl,
			type: 'GET'
		})
		.done( function( data, status, xhr )
		{
			_loader.m_xhrDownloadVTT = null;

			var newTextTrack = _loader.AddVTTCuesToNewTrack ( data, closedCaptionCode, role );
			if ( !newTextTrack )
			{
				PlayerLog( 'Failed to parse VTT file ' + ccUrl );
				return false;
			}

			// show the text track
			newTextTrack.mode = CVTTCaptionLoader.s_TrackShowing;
			_loader.m_strCurrentLangCode = closedCaptionCode;
			_loader.m_strCurrentRole = role;

		})
		.fail( function()
		{
			_loader.m_xhrDownloadVTT = null;
			PlayerLog( 'Failed to download: ' + ccUrl );
		});
	}
}

CVTTCaptionLoader.prototype.AddVTTCuesToNewTrack = function( data, closedCaptionCode, role )
{
	var browserCue = window.VTTCue || window.TextTrackCue;

	// there may be a track but the cues are empty, so try to get it first and then create if needed
	var newTextTrack = this.GetTextTrackByCode( closedCaptionCode, role );
	if ( !newTextTrack )
	{
		var oLabelAndKind = this.GetTextTrackLabelAndKind( closedCaptionCode, role );
		newTextTrack = this.m_elVideoPlayer.addTextTrack(oLabelAndKind.kind, oLabelAndKind.label, closedCaptionCode);
	}

	var rgCuesFromVTT = this.ParseVTTForCues( data );
	if (rgCuesFromVTT.length == 0)
		return null;

	for (var c = 0; c < rgCuesFromVTT.length; c++)
	{
		if ( rgCuesFromVTT[c].startTime < rgCuesFromVTT[c].endTime )
		{
			var newCue = new browserCue( rgCuesFromVTT[c].startTime, rgCuesFromVTT[c].endTime, rgCuesFromVTT[c].captionText );

			// apply layout info if there is any
			for (var i = 0; i < rgCuesFromVTT[c].layout.length; i++)
			{
				var rgKeyVal = rgCuesFromVTT[c].layout[i].split(":");
				if (rgKeyVal.length == 2)
				{
					try
					{
						// due to crbug https://bugs.chromium.org/p/chromium/issues/detail?id=652745
						// percentages on line attributes are causing position and size percentage attributes
						// to be misaligned. Adding this temporary and simple fix until CEF is updated with the real fix
						if ( rgKeyVal[0] === "line" && rgKeyVal[1].indexOf('%') != -1 )
						{
							// translate the line percentage to one of 5 locations
							// +ve numbers are at top of screen going down
							// -ve numbers are from bottom of screen going up
							var nLineNo = -1;
							var nLinePerc = parseFloat( rgKeyVal[1] );
							if ( nLinePerc < 20 )
								nLineNo = 1;
							else if ( nLinePerc < 40 )
								nLineNo = 2;
							else if ( nLinePerc < 60 )
								nLineNo = -4;
							else if ( nLinePerc < 80 )
								nLineNo = -3;
							else if ( nLinePerc < 100 )
								nLineNo = -2;

							rgKeyVal[1] = nLineNo;
						}

						// the align tag has changed from middle to center but we have a bunch of VTTs using middle
						// so convert it as needed.
						// see https://bugs.chromium.org/p/chromium/issues/detail?id=663797#c12
						if ( rgKeyVal[0] === "align" && rgKeyVal[1] === "middle" )
						{
							rgKeyVal[1] = "center";
						}

						// return this code when crbug is fixed
						// percentage screen attributes require snapToLines off
						// if ( rgKeyVal[0] === "line" && newCue.snapToLines && rgKeyVal[1].indexOf('%') != -1 )
						// {
						// 	newCue.snapToLines = false;
						// }

						// if the value is a number, then make sure the cue knows it's a number
						if ( !isNaN( parseFloat( rgKeyVal[1] ) ) )
							newCue[rgKeyVal[0]] = parseFloat( rgKeyVal[1] );
						else
							newCue[rgKeyVal[0]] = String( rgKeyVal[1] );
					}
					catch (e)
					{
						PlayerLog('VTTCue Error: ' + e.message);
						PlayerLog(rgCuesFromVTT[c]);
					}
				}
			}

			// if no line position was set, set the default
			if ( typeof newCue["line"] === "undefined" || newCue["line"] == "auto" )
			{
				newCue.snapToLines = false;
				newCue["line"] = CVTTCaptionLoader.s_DefaultLinePosition;
			}

			newTextTrack.addCue( newCue );
		}
		else
		{
			console.warn("TextTrack Cue " + c + " has a startTime (" + rgCuesFromVTT[c].startTime + ") after endTime (" + rgCuesFromVTT[c].endTime + ") and wasn't added.")
		}
	}

	return newTextTrack;
}

CVTTCaptionLoader.prototype.ParseVTTForCues = function ( cueData )
{
	var rgCues = [];

	var regExNewLine = /(?:\r\n|\r|\n)/gm,
		regExTimeSplit = /-->/,
		regExWhiteSpace = /(^[\s]+|[\s]+$)/g,
		regExInlineLayout = /{\\an[1-9]}/;

	var data = cueData.split( regExNewLine );

	for (var line = 0 ; line < data.length; line++)
	{
		var item = data[line];
		if (item.length > 0 && item !== "WEBVTT")
		{
			if (item.match( regExTimeSplit ) )
			{
				// get start and end time + optional layout information in VTT end cue section
				var cuePoints = item.split( regExTimeSplit );
				var startTime = cuePoints[0].replace(regExWhiteSpace, '');
				var rgEndCueElements = cuePoints[1].trim().split( " " );
				var endTime = rgEndCueElements[0];
				rgEndCueElements.splice( 0, 1 );
				var rgLayoutInfo = rgEndCueElements;

				// could be multiple caption text lines, get them all
				var captionLines = "";
				while ( line + 1 < data.length && data[line + 1].replace(regExWhiteSpace, "") != "")
				{
					// line break if more than one text line
					if (captionLines != "")
						captionLines += "\n";

					captionLines += data[++line];
				}

				// convert any layout info embedded in captionLines
				var rgFoundLayoutInfo = captionLines.match( regExInlineLayout );
				if ( rgFoundLayoutInfo )
				{
					captionLines = captionLines.replace( regExInlineLayout, '' );
					this.UpdateLayoutInfo( rgLayoutInfo, rgFoundLayoutInfo[0] );
				}

				var cueInfo = {
					startTime: TimetoSeconds( startTime ),
					endTime: TimetoSeconds( endTime ),
					captionText: captionLines,
					layout: rgLayoutInfo
				}

				rgCues.push( cueInfo );
			}
		}
	}

	return rgCues;
}

CVTTCaptionLoader.prototype.UpdateLayoutInfo = function( rgLayoutInfo, rgFoundLayoutInfo )
{
	// 3x3 grid, starting lower left to upper right.
	switch ( rgFoundLayoutInfo )
	{
		case "{\\an1}":
			rgLayoutInfo.push("line:" + CVTTCaptionLoader.s_DefaultLinePosition + "%");
			rgLayoutInfo.push("align:left");
			rgLayoutInfo.push("position:25%");
			break;
		case "{\\an2}":
			rgLayoutInfo.push("line:" + CVTTCaptionLoader.s_DefaultLinePosition + "%");
			rgLayoutInfo.push("align:center");
			rgLayoutInfo.push("position:50%");
			break;
		case "{\\an3}":
			rgLayoutInfo.push("line:" + CVTTCaptionLoader.s_DefaultLinePosition + "%");
			rgLayoutInfo.push("align:right");
			rgLayoutInfo.push("position:75%");
			break;
		case "{\\an4}":
			rgLayoutInfo.push("line:50%");
			rgLayoutInfo.push("align:left");
			rgLayoutInfo.push("position:25%");
			break;
		case "{\\an5}":
			rgLayoutInfo.push("line:50%");
			rgLayoutInfo.push("align:center");
			rgLayoutInfo.push("position:50%");
			break;
		case "{\\an6}":
			rgLayoutInfo.push("line:50%");
			rgLayoutInfo.push("align:right");
			rgLayoutInfo.push("position:75%");
			break;
		case "{\\an7}":
			rgLayoutInfo.push("line:10%");
			rgLayoutInfo.push("align:left");
			rgLayoutInfo.push("position:25%");
			break;
		case "{\\an8}":
			rgLayoutInfo.push("line:10%");
			rgLayoutInfo.push("align:center");
			rgLayoutInfo.push("position:50%");
			break;
		case "{\\an9}":
			rgLayoutInfo.push("line:10%");
			rgLayoutInfo.push("align:right");
			rgLayoutInfo.push("position:75%");
			break;
		default:
			break;
	}
}

CVTTCaptionLoader.SortClosedCaptionsByDisplayLanguage = function(a,b) {
	if (a.display < b.display)
		return -1;
	if (a.display > b.display)
		return 1;

	return 0;
}

CVTTCaptionLoader.GetDisplayNameFromCode = function( strCode )
{
	if( typeof CVTTCaptionLoader.LanguageCountryCodes[ strCode ] !== 'undefined' )
	{
		return CVTTCaptionLoader.LanguageCountryCodes[ strCode ].displayName;
	}
	else
	{
		return strCode;
	}
}

CVTTCaptionLoader.LanguageCountryCodes = {
    "ar-SA":{
        "displayName":"Arabic",
        "steamLanguage":"arabic"
    },
    "bg-BG":{
        "displayName":"Bulgarian",
        "steamLanguage":"bulgarian"
    },
    "cs-CZ":{
        "displayName":"Czech",
        "steamLanguage":"czech"
    },
    "da-DK":{
        "displayName":"Danish",
        "steamLanguage":"danish"
    },
    "en-US":{
        "displayName":"English",
        "steamLanguage":"english"
    },
    "fi-FI":{
        "displayName":"Finnish",
        "steamLanguage":"finnish"
    },
    "fr-FR":{
        "displayName":"French",
        "steamLanguage":"french"
    },
    "fr-CA":{
        "displayName":"French-Canada",
        "steamLanguage":"french_canada"
    },
    "de-DE":{
        "displayName":"German",
        "steamLanguage":"german"
    },
    "el-GR":{
        "displayName":"Greek",
        "steamLanguage":"greek"
    },
    "es-ES":{
        "displayName":"Spanish",
        "steamLanguage":"spanish"
    },
    "es-MX":{
        "displayName":"Spanish - Latin American",
        "steamLanguage":"mexican"
    },
    "hu-HU":{
        "displayName":"Hungarian",
        "steamLanguage":"hungarian"
    },
    "it-IT":{
        "displayName":"Italian",
        "steamLanguage":"italian"
    },
    "ja-JP":{
        "displayName":"Japanese",
        "steamLanguage":"japanese"
    },
    "ko-KR":{
        "displayName":"Korean",
        "steamLanguage":"koreana"
    },
    "nl-NL":{
        "displayName":"Dutch",
        "steamLanguage":"dutch"
    },
    "nb-NO":{
        "displayName":"Norwegian",
        "steamLanguage":"norwegian"
    },
    "pl-PL":{
        "displayName":"Polish",
        "steamLanguage":"polish"
    },
    "pt-BR":{
        "displayName":"Portuguese-Brazil",
        "steamLanguage":"brazilian"
    },
    "pt-PT":{
        "displayName":"Portuguese",
        "steamLanguage":"portuguese"
    },
    "ro-RO":{
        "displayName":"Romanian",
        "steamLanguage":"romanian"
    },
    "ru-RU":{
        "displayName":"Russian",
        "steamLanguage":"russian"
    },
    "sv-SE":{
        "displayName":"Swedish",
        "steamLanguage":"swedish"
    },
    "th-TH":{
        "displayName":"Thai",
        "steamLanguage":"thai"
    },
    "tr-TR":{
        "displayName":"Turkish",
        "steamLanguage":"turkish"
    },
    "uk-UA":{
        "displayName":"Ukrainian",
        "steamLanguage":"ukrainian"
    },
    "vi-VN":{
        "displayName":"Vietnamese",
        "steamLanguage":"vietnamese"
    },
    "zh-CH":{
        "displayName":"Simplified Chinese",
        "steamLanguage":"schinese"
	},
    "zh-CN":{
        "displayName":"Traditional Chinese",
        "steamLanguage":"tchinese"
    },
}

//////////////////////////////////////////////////
// Stats & Server Logging
//////////////////////////////////////////////////
CDASHPlayerStats = function( elVideoPlayer, videoPlayer, viewerSteamID )
{
	this.m_elVideoPlayer = elVideoPlayer;

	this.eleOverlay = $J('<div class="dash_player_playback_stats"></div>')[0];
	$J(this.m_elVideoPlayer).parent().append( this.eleOverlay );
	this.m_videoPlayer = videoPlayer;

	this.timerTick = false;
	this.nDecodedFramesPerSecond = 0;
	this.bRunning = false;

	this.strResolution = '';
	this.strVideoBuffered = '';
	this.strAudioBuffered = '';
	this.strBandwidth = '';
	this.strBuffers = '';
	this.strGameDataBuffers = '';
	this.oLastGameDataFrame = {};
	this.fGameDataTriggerPerf = 0;
	this.nBandwithRequired = 0;
	this.nDownloadResolution = 0;

	// For Server Event Logging
	this.m_bAutoLoggingEventsToServer = ( Math.random() * 100 ) < CDASHPlayerStats.LOGGING_RATE_PERC;
	this.m_xhrLogEventToServer = null;
	this.m_steamID = viewerSteamID;
	this.m_statsLastSnapshot = {
		'time': performance.now(),
		'bytes_received': 0,
		'frames_decoded': 0,
		'frames_dropped': 0,
		'failed_segments': 0,
	};

	// on screen reporting from stats report
	this.m_nStalledSegmentNumber = 0;
	this.m_nCountStalls = 0;
	this.m_strVideoDownloadHost = '...';
	this.m_nReportedPlaybackPos = 0;
	this.m_fSegmentTimeAverage = 0;
	this.m_fBandwidthAverage = 0;

	// events that trigger server event logging
	var _stats = this;
	this.m_schNextLogEvent = null;
	if ( this.m_bAutoLoggingEventsToServer )
	{
		$J( this.m_elVideoPlayer ).on( 'voddownloadcomplete.DASHPlayerStats', function() { _stats.LogEventToServer( CDASHPlayerStats.LOGTYPE_STATS, false ); });

		// set up for the first event logged
		this.m_schNextLogEvent = window.setTimeout( function() { _stats.LogEventToServer( CDASHPlayerStats.LOGTYPE_STATS, false ); }, CDASHPlayerStats.LOG_FIRST_EVENT );
	}

	// always log stalled events
	$J( this.m_elVideoPlayer ).on( 'playbackstalled.DASHPlayerStats', function( e, bVideoStalled ) { _stats.LogEventToServer( CDASHPlayerStats.LOGTYPE_STALLED, bVideoStalled ); });
}

CDASHPlayerStats.LOGGING_RATE_PERC = 100;
CDASHPlayerStats.LOG_FIRST_EVENT = 1000 * 30; 	// 30 seconds
CDASHPlayerStats.LOG_NEXT_EVENT = 1000 * 300; 	// 5 minutes
CDASHPlayerStats.SEND_LOG_TO_SERVER = true;

CDASHPlayerStats.LOGTYPE_STATS = 1;
CDASHPlayerStats.LOGTYPE_STALLED = 2;
CDASHPlayerStats.LOGTYPE_EVENT = 3;

CDASHPlayerStats.prototype.Close = function()
{
	$J( this.m_elVideoPlayer ).off( '.DASHPlayerStats' );

	clearTimeout( this.m_schNextLogEvent );

	if ( this.m_xhrLogEventToServer )
	{
		this.m_xhrLogEventToServer.abort();
		this.m_xhrLogEventToServer = null;
	}
}

CDASHPlayerStats.prototype.Reset = function()
{
	this.m_statsLastSnapshot = {
		'time': performance.now(),
		'bytes_received': 0,
		'frames_decoded': 0,
		'frames_dropped': 0,
		'failed_segments': 0,
	};
}

CDASHPlayerStats.prototype.LogEventToServer = function( nLogType, bVideoStalled, strEventName, strEventDesc )
{
	var _stats = this;

	var statsURL = null;
	switch ( nLogType )
	{
		case CDASHPlayerStats.LOGTYPE_STATS:
			statsURL = CMPDParser.GetAnalyticsStatsLink();
			break;

		case CDASHPlayerStats.LOGTYPE_STALLED:
			statsURL = CMPDParser.GetAnalyticsStalledLink();
			break;

		case CDASHPlayerStats.LOGTYPE_EVENT:
			statsURL = CMPDParser.GetEventLogLink();
			if ( !strEventName )
				strEventName = 'Unknown';
			if ( !strEventDesc )
				strEventDesc = '';
			break;

		default:
			break;
	}

	if ( statsURL )
	{
		var statsCollected = this.CollectStatsForEvent( nLogType, bVideoStalled );

		if ( nLogType == CDASHPlayerStats.LOGTYPE_EVENT )
		{
			statsCollected['event_name'] = strEventName;
			statsCollected['event_description'] = strEventDesc;
		}

		if ( Object.keys( statsCollected ).length )
		{
			// PlayerLog( statsCollected );

			if ( CDASHPlayerStats.SEND_LOG_TO_SERVER )
			{
				_stats.m_xhrLogEventToServer = $J.ajax(
				{
					url: statsURL,
					type: 'POST',
					data: statsCollected
				})
				.done( function( data, status, xhr )
				{
					_stats.m_xhrLogEventToServer = null;
				})
				.fail( function( jqXHR, textStatus, errorThrown )
				{
					_stats.m_xhrLogEventToServer = null;
				});
			}
		}

		// set up for the next log event
		if ( _stats.m_bAutoLoggingEventsToServer && nLogType == CDASHPlayerStats.LOGTYPE_STATS )
		{
			clearTimeout( _stats.m_schNextLogEvent );
			_stats.m_schNextLogEvent = window.setTimeout( function() { _stats.LogEventToServer( CDASHPlayerStats.LOGTYPE_STATS, false ); }, CDASHPlayerStats.LOG_NEXT_EVENT );
		}
	}
}

CDASHPlayerStats.prototype.CollectStatsForEvent = function( nLogType, bVideoStalled )
{
	var statsCollected = {};

	if ( nLogType == CDASHPlayerStats.LOGTYPE_STALLED )
	{
		statsCollected = this.m_videoPlayer.StatsRecentSegmentDownloads( bVideoStalled );

		// if the stalled segment is the same segment as last stall or the last segment error was 0 (request failed) or 404, no need to log.
		if ( statsCollected['last_segment_number'] == this.m_nStalledSegmentNumber || statsCollected['last_segment_response'] == 0 || statsCollected['last_segment_response'] == 404 )
			return {};

		this.m_nStalledSegmentNumber = statsCollected['segment_stalled'] = statsCollected['last_segment_number'];
		delete statsCollected['last_segment_number'];
		statsCollected['audio_stalled'] = !bVideoStalled;
		this.m_nCountStalls++;
	}
	else if ( nLogType == CDASHPlayerStats.LOGTYPE_STATS )
	{
		var statsSnapshot = {
			'time': performance.now(),
			'bytes_received': this.m_videoPlayer.StatsAllBytesReceived(),
			'frames_decoded': ( this.m_elVideoPlayer.webkitDecodedFrames || this.m_elVideoPlayer.webkitDecodedFrameCount ),
			'frames_dropped': ( this.m_elVideoPlayer.webkitDroppedFrames || this.m_elVideoPlayer.webkitDroppedFrameCount ),
			'failed_segments': this.m_videoPlayer.StatsAllFailedSegmentDownloads(),
		}

		// if the player hasn't played or downloaded since the last snapshot then nothing new to log
		if ( statsSnapshot['frames_decoded'] == this.m_statsLastSnapshot['frames_decoded'] && statsSnapshot['bytes_received'] == this.m_statsLastSnapshot['bytes_received'] )
			 return {};

		var bw_rates = this.m_videoPlayer.StatsBandwidthRates( true );
		var seg_times = this.m_videoPlayer.StatsSegmentDownloadTimes( true );

		statsCollected = {
			'video_buffer': Math.round( this.m_videoPlayer.StatsVideoBuffer() ),
			'audio_buffer': Math.round( this.m_videoPlayer.StatsAudioBuffer() ),
			'seconds_delta': Math.round( ( statsSnapshot['time'] - this.m_statsLastSnapshot['time'] ) / 1000 ),
			'bytes_received': statsSnapshot['bytes_received'] - this.m_statsLastSnapshot['bytes_received'],
			'frames_decoded': statsSnapshot['frames_decoded'] - this.m_statsLastSnapshot['frames_decoded'],
			'frames_dropped': statsSnapshot['frames_dropped'] - this.m_statsLastSnapshot['frames_dropped'],
			'failed_segments': statsSnapshot['failed_segments'] - this.m_statsLastSnapshot['failed_segments'],
			'bw_avg': Math.round( bw_rates['bw_avg'] ),
			'bw_min': Math.round( bw_rates['bw_min'] ),
			'bw_max': Math.round( bw_rates['bw_max'] ),
			'seg_time_avg': Number( seg_times['seg_avg'].toFixed(3) ),
			'seg_time_min': seg_times['seg_min'],
			'seg_time_max': seg_times['seg_max'],
		}

		// stats being displayed on screen
		this.m_fBandwidthAverage = statsCollected['bw_avg'];
		this.m_fSegmentTimeAverage = statsCollected['seg_time_avg'];
		this.m_nReportedPlaybackPos = this.m_videoPlayer.GetPlaybackTimeInSeconds();

		this.m_statsLastSnapshot = statsSnapshot;
	}

	// common for all log events
	statsCollected['steamid'] = this.m_steamID,
	statsCollected['host'] = this.m_strVideoDownloadHost = this.m_videoPlayer.StatsDownloadHost();
	statsCollected['playback_position'] = this.m_videoPlayer.GetPlaybackTimeInSeconds();
	statsCollected['playback_speed'] = this.m_videoPlayer.GetPlaybackRate();
	statsCollected['video_res'] = this.m_videoPlayer.StatsPlaybackHeight();
	statsCollected['audio_rate'] = Math.round ( this.m_videoPlayer.StatsAudioBitRate() );
	statsCollected['audio_ch'] = this.m_videoPlayer.StatsAudioChannels();

	return statsCollected;
}

//////////////////////
// On-Screen Events
//////////////////////

CDASHPlayerStats.prototype.Show = function()
{
	if( this.bRunning )
		return;

	this.bRunning = true;

	$J(this.eleOverlay).show();
	var context = this;
	this.timerTick = setInterval( function() { context.Tick() }, 1000/60 );
	this.timerCalculateTotals = setInterval(function() { context.CalculateTotals() }, 500);
}

CDASHPlayerStats.prototype.Hide = function()
{
	if( !this.bRunning )
		return;

	this.bRunning = false;

	$J(this.eleOverlay).hide();
	clearInterval(this.timerTick);
	clearInterval(this.timerCalculateTotals);
}

CDASHPlayerStats.prototype.Toggle = function()
{
	if( this.bRunning )
		this.Hide();
	else
		this.Show();
}

CDASHPlayerStats.prototype.CalculateTotals = function()
{
	// runs on a 500ms timer, so frame counts must be multiplied by 2.
	var ele = this.m_elVideoPlayer;

	this.nDecodedFramesPerSecond = 2 * ( ( ele.mozDecodedFrames || ele.webkitDecodedFrames || ele.webkitDecodedFrameCount ) - ( this.nLastDecodedFrames || 0 ) )
	this.nLastDecodedFrames = ( ele.mozDecodedFrames || ele.webkitDecodedFrames || ele.webkitDecodedFrameCount );

	this.strResolution = this.m_videoPlayer.StatsPlaybackWidth() + 'x' + this.m_videoPlayer.StatsPlaybackHeight() + ' [' + $J(this.m_elVideoPlayer).innerWidth() + 'x' + $J(this.m_elVideoPlayer).innerHeight() + ']';
	this.strVideoBuffered = this.m_videoPlayer.StatsVideoBuffer() + 's';
	this.strAudioBuffered = this.m_videoPlayer.StatsAudioBuffer() + 's';
	this.strBandwidth = this.m_videoPlayer.StatsCurrentDownloadBitRate() * 1000;
	this.nBandwithRequired = this.m_videoPlayer.StatsCurrentRepresentationBandwidth();
	this.nDownloadResolution = this.m_videoPlayer.StatsDownloadResolution();
	this.strBuffers = this.m_videoPlayer.StatsBufferInfo();
	if ( this.m_videoPlayer.StatsGameDataBufferCount() != 0 )
		this.strGameDataBuffers = this.m_videoPlayer.StatsLastGameDataEventTriggerFrame() + '/' + this.m_videoPlayer.StatsGameDataBufferCount();
	else
		this.strGameDataBuffers = '';
	this.oLastGameDataFrame = this.m_videoPlayer.StatsLastGameDataBuffer();
	this.fGameDataTriggerPerf = this.m_videoPlayer.StatsLastGameDataEventTriggerPerf();
}

CDASHPlayerStats.k_rgByteUnits = [ 'B', 'KB', 'MB', 'GB' ];
CDASHPlayerStats.k_rgBpsUnits = [ 'bps', 'Kbps', 'Mbps', 'Gbps' ];
CDASHPlayerStats.prototype.FormattingBytesToHuman = function ( nBytes, rgUnits )
{
	if( nBytes < 1000 )
		return nBytes + ' ' + rgUnits[0];
	if( nBytes < 1000000 )
		return ( nBytes / 1000 ).toFixed(2) + ' ' + rgUnits[1];

	if( nBytes < 1000000000)
		return ( nBytes / 1000000 ).toFixed(2) + ' ' + rgUnits[2];

	return (nBytes / 1000000000 ).toFixed(2) + ' ' + rgUnits[3];
}

CDASHPlayerStats.prototype.Tick = function()
{
	var ele = this.m_elVideoPlayer;
	var videoPlayer = this.m_videoPlayer;
	var _stats = this;
	var rgStatsDefinitions = [
		// Webkit
		{
			id: 'webkitAudioBytesDecoded',
			label: 'Audio Bytes Decoded',
			value: ele.webkitAudioBytesDecoded || ele.webkitAudioDecodedByteCount,
			formatFunc: function( val ) { return _stats.FormattingBytesToHuman( val, CDASHPlayerStats.k_rgByteUnits ) }
		},
		{
			id: 'webkitVideoBytesDecoded',
			label: 'Video Bytes Decoded',
			value: ele.webkitVideoBytesDecoded || ele.webkitVideoDecodedByteCount,
			formatFunc: function( val ) { return _stats.FormattingBytesToHuman( val, CDASHPlayerStats.k_rgByteUnits ) }
		},
		{
			id: 'webkitDecodedFrames',
			label: 'Decoded Frames',
			value: ele.webkitDecodedFrames || ele.webkitDecodedFrameCount
		},
		{
			id: 'webkitDroppedFrames',
			label: 'Dropped Frames',
			value: ele.webkitDroppedFrames || ele.webkitDroppedFrameCount
		},
		// Firefox
		{
			id: 'mozParsedFrames',
			label: 'Parsed Frames',
			value: ele.mozParsedFrames
		},
		{
			id: 'mozDecodedFrames',
			label: 'Decoded Frames',
			value: ele.mozDecodedFrames
		},
		{
			id: 'mozPresentedFrames',
			label: 'Presented Frames',
			value: ele.mozPresentedFrames
		},
		{
			id: 'mozPaintedFrames',
			label: 'Painted Frames',
			value: ele.mozPaintedFrames
		},
		{
			id: 'mozFrameDelay',
			label: 'Frame Delay',
			value: ele.mozFrameDelay
		},
		// Generic
		{
			id: 'decodedFramesPerSecond',
			label: 'Decoded Frames Per Second',
			value: this.nDecodedFramesPerSecond
		},
		// DASHPlayer
		{
			id: 'playbackResolution',
			label: 'Resolution',
			value: this.strResolution
		},
		{
			id: 'downloadbandwidth',
			label: 'Bandwidth Average',
			value: this.strBandwidth,
			formatFunc: function( val ) { return _stats.FormattingBytesToHuman( val, CDASHPlayerStats.k_rgBpsUnits ) }
		},
		{
			id: 'bwrequiredforrep',
			label: 'Bandwidth Required',
			value: this.nBandwithRequired,
			formatFunc: function( val ) { return _stats.FormattingBytesToHuman( val, CDASHPlayerStats.k_rgBpsUnits ) + ' (' + _stats.nDownloadResolution + 'p)' }
		},
		{
			id: 'videobuffered',
			label: 'Video Buffered',
			value: this.strVideoBuffered
		},
		{
			id: 'audiobuffered',
			label: 'Audio Buffered',
			value: this.strAudioBuffered
		},
		{
			id: 'dashbuffers',
			label: '',
			value: this.strBuffers
		},
		{
			id: 'emestatus',
			label: 'EME Active',
			value: videoPlayer.m_bIsEmeActive ? 'Yes (' + videoPlayer.m_sKeySystemInUse + ')' : 'No'
		},
		// Report Stats
		{
			id: 'stalls',
			label: 'Stalled Events',
			value: this.m_nCountStalls
		},
		{
			id: 'reportsent',
			label: 'Stats Sent',
			value: SecondsToTime( this.m_nReportedPlaybackPos )
		},
		{
			id: 'host',
			label: ' - Host',
			value: this.m_strVideoDownloadHost
		},
		{
			id: 'bandwidthavg',
			label: ' - Bandwidth Average',
			value: this.m_fBandwidthAverage,
			formatFunc:  function( val ) { return _stats.FormattingBytesToHuman( val, CDASHPlayerStats.k_rgBpsUnits ) }
		},
		{
			id: 'segmentfails',
			label: ' - Segment D/L Fails',
			value: this.m_statsLastSnapshot['failed_segments']
		},
		{
			id: 'segmenttimeaverage',
			label: ' - Segment D/L Time Average',
			value: this.m_fSegmentTimeAverage + 's'
		},
		// Game log data if available
		{
			id: 'lastgameframeappid',
			label: 'Game Frame App ID',
			value: ( this.oLastGameDataFrame != null ) ? this.oLastGameDataFrame.appid : null
		},
		{
			id: 'lastgameframerelayid',
			label: 'Game Broadcast Relay ID',
			value: ( this.oLastGameDataFrame != null ) ? this.oLastGameDataFrame.broadcastrelayid : null
		},
		{
			id: 'lastgameframesegmentid',
			label: 'Game Segment Frame ID',
			value: ( this.oLastGameDataFrame != null ) ? this.oLastGameDataFrame.segmentid : null
		},
		{
			id: 'gamedatabuffers',
			label: 'Game Frame Buffers',
			value: ( this.strGameDataBuffers != '' ) ? this.strGameDataBuffers : null
		},
		{
			id: 'gametriggerperf',
			label: 'Game Frame Perf',
			value: ( this.fGameDataTriggerPerf != 0 ) ? this.fGameDataTriggerPerf + ' ms' : null
		},
		{
			id: 'activedownloads',
			label: 'Active Downloads',
			value: CSegmentLoader.nActiveDownloads,
		},
	];

	for( var i=0; i < rgStatsDefinitions.length; i++)
	{
		var rgStatDefinition = rgStatsDefinitions[i];
		if( rgStatDefinition.value != undefined && !Number.isNaN( rgStatDefinition.value ) )
		{
			var $target = $J( '.value', $J('#' + rgStatDefinition.id) );
			// Create element if needed
			if( $target.length == 0 )
			{
				var label = ( rgStatDefinition.label == '' ) ? '' : rgStatDefinition.label + ': '
				var container = $J('<div id="'+rgStatDefinition.id+'">' + label + '<span class="value"></span></div>');
				$J(this.eleOverlay).append( container );
				$target = $J( '.value', container );
			}

			if( rgStatDefinition.formatFunc )
				$target.text( rgStatDefinition.formatFunc( rgStatDefinition.value ) );
			else
				$target.html( rgStatDefinition.value );
		}
	}
}



