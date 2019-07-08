class IClientRemotePlay
{
public:
    virtual unknown_ret GetSessionCount() = 0;
    virtual unknown_ret GetSessionID(int) = 0;
    virtual unknown_ret GetSessionSteamID(unsigned int) = 0;
    virtual unknown_ret GetSessionClientName(unsigned int) = 0;
    virtual unknown_ret GetSessionClientFormFactor(unsigned int) = 0;
    virtual unknown_ret BGetSessionClientResolution(unsigned int, int*, int*) = 0;
};
