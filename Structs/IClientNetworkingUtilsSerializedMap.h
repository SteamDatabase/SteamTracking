class IClientNetworkingUtilsSerializedMap
{
public:
    virtual unknown_ret GetNetworkConfigJSON_DEPRECATED(void*,void*,void*) = 0;
    virtual unknown_ret GetLauncherType() = 0;
    virtual unknown_ret TEST_ClearCachedNetworkConfig() = 0;
    virtual unknown_ret PostConnectionStateMsg(void*,void*) = 0;
    virtual unknown_ret PostConnectionStateUpdatesForAllConnections() = 0;
};
