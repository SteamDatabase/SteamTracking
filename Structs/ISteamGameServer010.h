class ISteamGameServer010
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
    virtual unknown_ret SetGameTags(char const*) = 0;
    virtual unknown_ret GetGameplayStats() = 0;
    virtual unknown_ret GetServerReputation() = 0;
    virtual unknown_ret RequestUserGroupStatus(CSteamID, CSteamID) = 0;
    virtual unknown_ret GetPublicIP() = 0;
    virtual unknown_ret SetGameData(char const*) = 0;
    virtual unknown_ret UserHasLicenseForApp(CSteamID, unsigned int) = 0;
    virtual unknown_ret GetAuthSessionTicket(void*, int, unsigned int*) = 0;
    virtual unknown_ret BeginAuthSession(void const*, int, CSteamID) = 0;
    virtual unknown_ret EndAuthSession(CSteamID) = 0;
    virtual unknown_ret CancelAuthTicket(unsigned int) = 0;
};
