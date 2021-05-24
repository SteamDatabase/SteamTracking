class ISteamNetworkingUtils004
{
public:
    virtual unknown_ret AllocateMessage(int) = 0;
    virtual unknown_ret GetRelayNetworkStatus(SteamRelayNetworkStatus_t*) = 0;
    virtual unknown_ret GetLocalPingLocation(SteamNetworkPingLocation_t&) = 0;
    virtual unknown_ret EstimatePingTimeBetweenTwoLocations(SteamNetworkPingLocation_t const&, SteamNetworkPingLocation_t const&) = 0;
    virtual unknown_ret EstimatePingTimeFromLocalHost(SteamNetworkPingLocation_t const&) = 0;
    virtual unknown_ret ConvertPingLocationToString(SteamNetworkPingLocation_t const&, char*, int) = 0;
    virtual unknown_ret ParsePingLocationString(char const*, SteamNetworkPingLocation_t&) = 0;
    virtual unknown_ret CheckPingDataUpToDate(float) = 0;
    virtual unknown_ret GetPingToDataCenter(unsigned int, unsigned int*) = 0;
    virtual unknown_ret GetDirectPingToPOP(unsigned int) = 0;
    virtual unknown_ret GetPOPCount() = 0;
    virtual unknown_ret GetPOPList(unsigned int*, int) = 0;
    virtual unknown_ret GetLocalTimestamp() = 0;
    virtual unknown_ret SetDebugOutputFunction(ESteamNetworkingSocketsDebugOutputType, void (*)(ESteamNetworkingSocketsDebugOutputType, char const*)) = 0;
    virtual unknown_ret GetIPv4FakeIPType(unsigned int) = 0;
    virtual unknown_ret GetRealIdentityForFakeIP(SteamNetworkingIPAddr const&, SteamNetworkingIdentity*) = 0;
    virtual unknown_ret SetConfigValue(ESteamNetworkingConfigValue, ESteamNetworkingConfigScope, long, ESteamNetworkingConfigDataType, void const*) = 0;
    virtual unknown_ret GetConfigValue(ESteamNetworkingConfigValue, ESteamNetworkingConfigScope, long, ESteamNetworkingConfigDataType*, void*, unsigned long*) = 0;
    virtual unknown_ret GetConfigValueInfo(ESteamNetworkingConfigValue, ESteamNetworkingConfigDataType*, ESteamNetworkingConfigScope*) = 0;
    virtual unknown_ret IterateGenericEditableConfigValues(ESteamNetworkingConfigValue, bool) = 0;
    virtual unknown_ret SteamNetworkingIPAddr_ToString(SteamNetworkingIPAddr const&, char*, unsigned long, bool) = 0;
    virtual unknown_ret SteamNetworkingIPAddr_ParseString(SteamNetworkingIPAddr*, char const*) = 0;
    virtual unknown_ret SteamNetworkingIPAddr_GetFakeIPType(SteamNetworkingIPAddr const&) = 0;
    virtual unknown_ret SteamNetworkingIdentity_ToString(SteamNetworkingIdentity const&, char*, unsigned long) = 0;
    virtual unknown_ret SteamNetworkingIdentity_ParseString(SteamNetworkingIdentity*, char const*) = 0;
};
