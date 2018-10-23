typedef enum EBroadcastUploadResult
{
    k_EBroadcastUploadResultNone, // None
    k_EBroadcastUploadResultOK, // OK
    k_EBroadcastUploadResultInitFailed, // Init Failed
    k_EBroadcastUploadResultFrameFailed, // Frame Failed
    k_EBroadcastUploadResultUploadTimeout, // Upload Timeout
    k_EBroadcastUploadResultBandwidthExceeded, // Bandwidth Exceeded
    k_EBroadcastUploadResultLowFPS, // Low FPS
    k_EBroadcastUploadResultMissingKeyFrames, // Missing Key Frames
    k_EBroadcastUploadResultNoConnection, // No Connection
    k_EBroadcastUploadResultRelayFailed, // Relay Failed
    k_EBroadcastUploadResultSettingsChanged, // Settings Changed
    k_EBroadcastUploadResultMissingAudio, // Missing Audio
    k_EBroadcastUploadResultTooFarBehind, // Too Far behind
    k_EBroadcastUploadResultTranscodeBehind, // Transcode Behind
    k_EBroadcastUploadResultNotAllowedToPlay, // Not allowed to play
    k_EBroadcastUploadResultServerBusy, // Server Busy
    k_EBroadcastUploadResultBanned, // Banned
    k_EBroadcastUploadResultAlreadyActive, // Already Active
    k_EBroadcastUploadResultForcedOff, // Forced Off
    k_EBroadcastUploadResultAudioBehind, // Audio Behind
    k_EBroadcastUploadResultServerShutdown, // Server Shutdown
    k_EBroadcastUploadResultUploadDisconnected, // Upload Disconnected
    k_EBroadcastUploadResultVideoInitFailed, // Video Init Failed
    k_EBroadcastUploadResultAudioInitFailed, // Audio Init Failed
} EBroadcastUploadResult;
