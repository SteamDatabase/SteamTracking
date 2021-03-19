class IClientNetworkingUtilsSerialized
{
public:
    virtual unknown_ret GetNetworkConfigJSON_DEPRECATED(void*, unsigned int, char const*) = 0;
    virtual unknown_ret GetLauncherType() = 0;
    virtual unknown_ret TEST_ClearCachedNetworkConfig() = 0;
    virtual unknown_ret PostConnectionStateMsg(void const*, unsigned int) = 0;
};
