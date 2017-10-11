class ISteamUser007
{
public:
    virtual unknown_ret GetHSteamUser() = 0;
    virtual unknown_ret LogOn(CSteamID) = 0;
    virtual unknown_ret LogOff() = 0;
    virtual unknown_ret BLoggedOn() = 0;
    virtual unknown_ret GetSteamID() = 0;
    virtual unknown_ret SetRegistryString(EConfigSubTree, char const*, char const*) = 0;
    virtual unknown_ret GetRegistryString(EConfigSubTree, char const*, char*, int) = 0;
    virtual unknown_ret SetRegistryInt(EConfigSubTree, char const*, int) = 0;
    virtual unknown_ret GetRegistryInt(EConfigSubTree, char const*, int*) = 0;
    virtual unknown_ret InitiateGameConnection(void*, int, CSteamID, CGameID, unsigned int, unsigned short, bool, void*, int) = 0;
    virtual unknown_ret TerminateGameConnection(unsigned int, unsigned short) = 0;
    virtual unknown_ret TrackAppUsageEvent(CGameID, int, char const*) = 0;
    virtual unknown_ret RefreshSteam2Login() = 0;
};
