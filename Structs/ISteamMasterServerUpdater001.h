class ISteamMasterServerUpdater001
{
public:
    virtual unknown_ret SetActive(bool) = 0;
    virtual unknown_ret SetHeartbeatInterval(int) = 0;
    virtual unknown_ret HandleIncomingPacket(void const*, int, unsigned int, unsigned short) = 0;
    virtual unknown_ret GetNextOutgoingPacket(void*, int, unsigned int*, unsigned short*) = 0;
    virtual unknown_ret SetBasicServerData(unsigned short, bool, char const*, char const*, unsigned short, bool, char const*) = 0;
    virtual unknown_ret ClearAllKeyValues() = 0;
    virtual unknown_ret SetKeyValue(char const*, char const*) = 0;
    virtual unknown_ret NotifyShutdown() = 0;
    virtual unknown_ret WasRestartRequested() = 0;
    virtual unknown_ret ForceHeartbeat() = 0;
    virtual unknown_ret AddMasterServer(char const*) = 0;
    virtual unknown_ret RemoveMasterServer(char const*) = 0;
    virtual unknown_ret GetNumMasterServers() = 0;
    virtual unknown_ret GetMasterServerAddress(int, char*, int) = 0;
};
