class IClientRemotePlayMap
{
public:
    virtual unknown_ret GetSessionCount() = 0;
    virtual unknown_ret GetSessionID(void*) = 0;
    virtual unknown_ret GetSessionSteamID(void*,void*) = 0;
    virtual unknown_ret GetSessionClientName(void*) = 0;
    virtual unknown_ret GetSessionClientFormFactor(void*) = 0;
    virtual unknown_ret BGetSessionClientResolution(void*,void*,void*) = 0;
    virtual unknown_ret BSendRemotePlayTogetherInvite(void*,void*) = 0;
};
