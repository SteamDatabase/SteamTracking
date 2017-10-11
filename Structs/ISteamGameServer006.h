class ISteamGameServer006
{
public:
    virtual unknown_ret LogOn() = 0;
    virtual unknown_ret LogOff() = 0;
    virtual unknown_ret BLoggedOn() = 0;
    virtual unknown_ret BSecure() = 0;
    virtual unknown_ret GetSteamID() = 0;
    virtual unknown_ret SendUserConnectAndAuthenticate(unsigned int, void const*, unsigned int, CSteamID*) = 0;
    virtual unknown_ret CreateUnauthenticatedUserConnection() = 0;
    virtual unknown_ret SendUserDisconnect(CSteamID) = 0;
    virtual unknown_ret BUpdateUserData(CSteamID, char const*, unsigned int) = 0;
    virtual unknown_ret BSetServerType(unsigned int, unsigned int, unsigned short, unsigned short, unsigned short, char const*, char const*, bool) = 0;
    virtual unknown_ret UpdateServerStatus(int, int, int, char const*, char const*, char const*) = 0;
    virtual unknown_ret UpdateSpectatorPort(unsigned short) = 0;
    virtual unknown_ret SetGameType(char const*) = 0;
    virtual unknown_ret BGetUserAchievementStatus(CSteamID, char const*) = 0;
    virtual unknown_ret GetGameplayStats() = 0;
};
