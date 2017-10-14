typedef enum EBroadcastUploadResult
{
    k_EBroadcastUploadResultNone, // None
    k_EBroadcastUploadResultOK, // OK
    k_EBroadcastUploadResultInitFailed, // Init Failed
    k_EBroadcastUploadResultFrameFailed, // Frame Failed
    k_EBroadcastUploadResultTimeout, // Timeout
    k_EBroadcastUploadResultBandwidthExceeded, // Bandwidth Exceeded
    k_EBroadcastUploadResultLowFPS, // Low FPS
    k_EBroadcastUploadResultMissingKeyFrames, // Missing Key Frames
    k_EBroadcastUploadResultNoConnection, // No Connection
    k_EBroadcastUploadResultRelayFailed, // Relay Failed
    k_EBroadcastUploadResultSettingsChanged, // Settings Changed
    k_EBroadcastUploadResultMissingAudio, // Missing Audio
    k_EBroadcastUploadResultTooFarBehind, // Too Far behind
    k_EBroadcastUploadResultTranscodeBehind, // Transcode Behind
} EBroadcastUploadResult;
