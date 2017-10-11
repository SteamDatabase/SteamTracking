class ISteamGameServer003
{
public:
    virtual unknown_ret LogOn() = 0;
    virtual unknown_ret LogOff() = 0;
    virtual unknown_ret BLoggedOn() = 0;
    virtual unknown_ret BSecure() = 0;
    virtual unknown_ret GetSteamID() = 0;
    virtual unknown_ret GSGetSteam2GetEncryptionKeyToSendToNewClient(void*, unsigned int*, unsigned int) = 0;
    virtual unknown_ret GSSendUserConnect(unsigned int, unsigned int, unsigned short, void const*, unsigned int) = 0;
    virtual unknown_ret GSRemoveUserConnect(unsigned int) = 0;
    virtual unknown_ret GSSendUserDisconnect(CSteamID, unsigned int) = 0;
    virtual unknown_ret GSSetSpawnCount(unsigned int) = 0;
    virtual unknown_ret GSSetServerType(int, unsigned int, unsigned int, unsigned short, unsigned short, unsigned short, char const*, char const*, bool) = 0;
    virtual unknown_ret GSUpdateStatus(int, int, int, char const*, char const*, char const*) = 0;
    virtual unknown_ret GSCreateUnauthenticatedUser(CSteamID*) = 0;
    virtual unknown_ret GSSetUserData(CSteamID, char const*, unsigned int) = 0;
    virtual unknown_ret GSUpdateSpectatorPort(unsigned short) = 0;
    virtual unknown_ret GSSetGameType(char const*) = 0;
    virtual unknown_ret GSGetUserAchievementStatus(CSteamID, char const*) = 0;
};
