class IClientNetworkDeviceManager
{
public:
    virtual unknown_ret IsInterfaceValid() = 0;
    virtual unknown_ret RefreshDevices() = 0;
    virtual unknown_ret EnumerateNetworkDevices(unsigned int, unsigned int*) = 0;
    virtual unknown_ret GetDeviceType(unsigned int) = 0;
    virtual unknown_ret IsCurrentDevice(unsigned int) = 0;
    virtual unknown_ret IsCurrentlyConnected(unsigned int) = 0;
    virtual unknown_ret GetDeviceIP4(unsigned int, unsigned int, unsigned int*) = 0;
    virtual unknown_ret GetDeviceBroadcastIP4(unsigned int, unsigned int, unsigned int*) = 0;
    virtual unknown_ret GetDeviceVendor(unsigned int) = 0;
    virtual unknown_ret GetDeviceProduct(unsigned int) = 0;
    virtual unknown_ret GetMacAddress(unsigned int) = 0;
    virtual unknown_ret GetSubnetMaskBitCount(unsigned int, unsigned int, unsigned int*) = 0;
    virtual unknown_ret GetRouterAddressIP4(unsigned int, unsigned int, unsigned int*) = 0;
    virtual unknown_ret GetDNSResolversIP4(unsigned int, unsigned int, unsigned int*) = 0;
    virtual unknown_ret GetDeviceState(unsigned int) = 0;
    virtual unknown_ret GetDevicePluggedState(unsigned int) = 0;
    virtual unknown_ret EnumerateWirelessEndpoints(unsigned int, unsigned int, unsigned int*) = 0;
    virtual unknown_ret GetConnectedWirelessEndpointSSID(unsigned int) = 0;
    virtual unknown_ret GetWirelessSecurityCapabilities(unsigned int) = 0;
    virtual unknown_ret GetWirelessEndpointSSIDUserDisplayString(unsigned int, unsigned int) = 0;
    virtual unknown_ret GetWirelessEndpointStrength(unsigned int, unsigned int) = 0;
    virtual unknown_ret IsSecurityRequired(unsigned int, unsigned int) = 0;
    virtual unknown_ret GetCachedWirelessCredentials(unsigned int, unsigned int) = 0;
    virtual unknown_ret DisconnectFromDevice(unsigned int, bool) = 0;
    virtual unknown_ret SetCustomIPSettings(unsigned int, unsigned int, unsigned int, unsigned int, unsigned int, unsigned int) = 0;
    virtual unknown_ret ConnectToDevice(unsigned int, unsigned int, char const*, char const*, unsigned int, bool, bool) = 0;
    virtual unknown_ret IsWirelessEndpointForgettable(unsigned int, unsigned int) = 0;
    virtual unknown_ret ForgetWirelessEndpointAutoconnect(unsigned int, unsigned int) = 0;
    virtual unknown_ret IsUsingDHCP(unsigned int) = 0;
    virtual unknown_ret GetCustomIPSettings(unsigned int, unsigned int*, unsigned int*, unsigned int*, unsigned int*, unsigned int*) = 0;
};
