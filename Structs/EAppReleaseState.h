typedef enum EAppReleaseState
{
    k_EAppReleaseStateUnknown = 0, // unknown
    k_EAppReleaseStateUnavailable, // unavailable
    k_EAppReleaseStatePrerelease, // prerelease
    k_EAppReleaseStatePreloadonly, // preloadonly
    k_EAppReleaseStateReleased, // released
} EAppReleaseState;
