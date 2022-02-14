class IClientNetworkingSocketsSerializedMap
{
public:
    virtual unknown_ret SendP2PRendezvous(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret SendP2PConnectionFailureLegacy(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret GetCertAsync() = 0;
    virtual unknown_ret CacheRelayTicket(void*,void*) = 0;
    virtual unknown_ret GetCachedRelayTicketCount() = 0;
    virtual unknown_ret GetCachedRelayTicket(void*,void*,void*) = 0;
    virtual unknown_ret GetSTUNServer(void*,void*,void*) = 0;
    virtual unknown_ret AllowDirectConnectToPeerString(void*) = 0;
    virtual unknown_ret BeginAsyncRequestFakeIP(void*) = 0;
    virtual unknown_ret (void*,void*,void*) = 0;
    virtual unknown_ret SetAllowShareIPUserSetting(void*) = 0;
    virtual unknown_ret GetAllowShareIPUserSetting() = 0;
    virtual unknown_ret TEST_ClearInMemoryCachedCredentials() = 0;
};
