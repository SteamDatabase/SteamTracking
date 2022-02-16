typedef enum NMDeviceState
{
    k_NMDeviceStateUnknown = 0,
    k_NMDeviceStateUnmanaged = 10,
    k_NMDeviceStateUnavailable = 20,
    k_NMDeviceStateDisconnected = 30,
    k_NMDeviceStatePrepare = 40,
    k_NMDeviceStateConfig = 50,
    k_NMDeviceStateNeedAuth = 60,
    k_NMDeviceStateIPConfig = 70,
    k_NMDeviceStateIPCheck = 80,
    k_NMDeviceStateSecondaries = 90,
    k_NMDeviceStateActivated = 100,
    k_NMDeviceStateDeactivating = 110,
    k_NMDeviceStateFailed = 120,
} NMDeviceState;
