class ISteamNetworkingUtils001
{
public:
    virtual unknown_ret GetLocalPingLocation(SteamNetworkPingLocation_t&) = 0;
    virtual unknown_ret EstimatePingTimeBetweenTwoLocations(SteamNetworkPingLocation_t const&, SteamNetworkPingLocation_t const&) = 0;
    virtual unknown_ret EstimatePingTimeFromLocalHost(SteamNetworkPingLocation_t const&) = 0;
    virtual unknown_ret ConvertPingLocationToString(SteamNetworkPingLocation_t const&, char*, int) = 0;
    virtual unknown_ret ParsePingLocationString(char const*, SteamNetworkPingLocation_t&) = 0;
    virtual unknown_ret CheckPingDataUpToDate(float) = 0;
    virtual unknown_ret IsPingMeasurementInProgress() = 0;
    virtual unknown_ret GetPingToDataCenter(unsigned int, unsigned int*) = 0;
    virtual unknown_ret GetDirectPingToPOP(unsigned int) = 0;
    virtual unknown_ret GetPOPCount() = 0;
    virtual unknown_ret GetPOPList(unsigned int*, int) = 0;
    virtual unknown_ret GetLocalTimestamp() = 0;
    virtual unknown_ret SetDebugOutputFunction(ESteamNetworkingSocketsDebugOutputType, void (*)(ESteamNetworkingSocketsDebugOutputType, char const*)) = 0;
    virtual unknown_ret SetConfigValue(ESteamNetworkingConfigValue, ESteamNetworkingConfigScope, long, ESteamNetworkingConfigDataType, void const*) = 0;
    virtual unknown_ret GetConfigValue(ESteamNetworkingConfigValue, ESteamNetworkingConfigScope, long, ESteamNetworkingConfigDataType*, void*, unsigned long*) = 0;
    virtual unknown_ret GetConfigValueInfo(ESteamNetworkingConfigValue, char const**, ESteamNetworkingConfigDataType*, ESteamNetworkingConfigScope*, ESteamNetworkingConfigValue*) = 0;
    virtual unknown_ret GetFirstConfigValue() = 0;
};
