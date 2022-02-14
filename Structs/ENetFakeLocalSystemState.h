typedef enum ENetFakeLocalSystemState
{
    k_ENetFakeLocalSystemStateNormal = 0,
    k_ENetFakeLocalSystemStateNoLAN = 1,
    k_ENetFakeLocalSystemStateCaptivePortal_Redirected = 2,
    k_ENetFakeLocalSystemStateCaptivePortal_InPlace = 3,
    k_ENetFakeLocalSystemStateNoInternet = 4,
    k_ENetFakeLocalSystemStateNoSteam = 5,
} ENetFakeLocalSystemState;
