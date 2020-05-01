class IClientNetworkingUtilsSerialized
{
public:
    virtual unknown_ret GetNetworkConfigJSON(void*, unsigned int, char const*) = 0;
    virtual unknown_ret GetLauncherType() = 0;
    virtual unknown_ret TEST_ClearCachedNetworkConfig() = 0;
};
