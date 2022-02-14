typedef enum EConnectivityTestResult
{
    k_EConnectivityTestResultUnknown = 0,
    k_EConnectivityTestResultConnected = 1,
    k_EConnectivityTestResultCaptivePortal = 2,
    k_EConnectivityTestResultTimedOut = 3,
    k_EConnectivityTestResultFailed = 4,
    k_EConnectivityTestResultWifiDisabled = 5,
    k_EConnectivityTestResultNoLAN = 6,
} EConnectivityTestResult;
