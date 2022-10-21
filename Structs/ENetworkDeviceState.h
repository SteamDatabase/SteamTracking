typedef enum ENetworkDeviceState
{
    k_ENetworkDeviceStateNotPresent = 0,
    k_ENetworkDeviceStateFailed = 1,
    k_ENetworkDeviceStateDisconnected = 2,
    k_ENetworkDeviceStateDisconnecting = 3,
    k_ENetworkDeviceStateConnecting = 4,
    k_ENetworkDeviceStateConnected = 5,
    k_ENetworkDeviceStateRetrying = 6,
} ENetworkDeviceState;
