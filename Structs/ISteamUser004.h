class ISteamUser004
{
public:
    virtual unknown_ret GetHSteamUser() = 0;
    virtual unknown_ret LogOn(CSteamID) = 0;
    virtual unknown_ret LogOff() = 0;
    virtual unknown_ret BLoggedOn() = 0;
    virtual unknown_ret GetLogonState() = 0;
    virtual unknown_ret BConnected() = 0;
    virtual unknown_ret GetSteamID() = 0;
    virtual unknown_ret IsVACBanned(int) = 0;
    virtual unknown_ret RequireShowVACBannedMessage(int) = 0;
    virtual unknown_ret AcknowledgeVACBanning(int) = 0;
    virtual unknown_ret NClientGameIDAdd(int) = 0;
    virtual unknown_ret RemoveClientGame(int) = 0;
    virtual unknown_ret SetClientGameServer(int, unsigned int, unsigned short) = 0;
    virtual unknown_ret SetSteam2Ticket(unsigned char*, int) = 0;
    virtual unknown_ret AddServerNetAddress(unsigned int, unsigned short) = 0;
    virtual unknown_ret SetEmail(char const*) = 0;
    virtual unknown_ret GetSteamGameConnectToken(void*, int) = 0;
    virtual unknown_ret SetRegistryString(EConfigSubTree, char const*, char const*) = 0;
    virtual unknown_ret GetRegistryString(EConfigSubTree, char const*, char*, int) = 0;
    virtual unknown_ret SetRegistryInt(EConfigSubTree, char const*, int) = 0;
    virtual unknown_ret GetRegistryInt(EConfigSubTree, char const*, int*) = 0;
    virtual unknown_ret InitiateGameConnection(void*, int, CSteamID, int, unsigned int, unsigned short, bool) = 0;
    virtual unknown_ret TerminateGameConnection(unsigned int, unsigned short) = 0;
    virtual unknown_ret SetSelfAsPrimaryChatDestination() = 0;
    virtual unknown_ret IsPrimaryChatDestination() = 0;
    virtual unknown_ret RequestLegacyCDKey(unsigned int) = 0;
};
