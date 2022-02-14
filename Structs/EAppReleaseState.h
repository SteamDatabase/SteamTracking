typedef enum EAppReleaseState
{
    k_EAppReleaseStateUnknown = 0,
    k_EAppReleaseStateUnavailable = 1,
    k_EAppReleaseStatePrerelease = 2,
    k_EAppReleaseStatePreloadonly = 3,
    k_EAppReleaseStateReleased = 4,
    k_EAppReleaseStateDisabled = 5,
} EAppReleaseState;
