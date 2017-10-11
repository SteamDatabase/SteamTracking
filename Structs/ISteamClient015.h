class ISteamClient015
{
public:
    virtual unknown_ret CreateSteamPipe() = 0;
    virtual unknown_ret BReleaseSteamPipe(int) = 0;
    virtual unknown_ret ConnectToGlobalUser(int) = 0;
    virtual unknown_ret CreateLocalUser(int*, EAccountType) = 0;
    virtual unknown_ret ReleaseUser(int, int) = 0;
    virtual unknown_ret GetISteamUser(int, int, char const*) = 0;
    virtual unknown_ret GetISteamGameServer(int, int, char const*) = 0;
    virtual unknown_ret SetLocalIPBinding(unsigned int, unsigned short) = 0;
    virtual unknown_ret GetISteamFriends(int, int, char const*) = 0;
    virtual unknown_ret GetISteamUtils(int, char const*) = 0;
    virtual unknown_ret GetISteamMatchmaking(int, int, char const*) = 0;
    virtual unknown_ret GetISteamMatchmakingServers(int, int, char const*) = 0;
    virtual unknown_ret GetISteamGenericInterface(int, int, char const*) = 0;
    virtual unknown_ret GetISteamUserStats(int, int, char const*) = 0;
    virtual unknown_ret GetISteamGameServerStats(int, int, char const*) = 0;
    virtual unknown_ret GetISteamApps(int, int, char const*) = 0;
    virtual unknown_ret GetISteamNetworking(int, int, char const*) = 0;
    virtual unknown_ret GetISteamRemoteStorage(int, int, char const*) = 0;
    virtual unknown_ret GetISteamScreenshots(int, int, char const*) = 0;
    virtual unknown_ret RunFrame() = 0;
    virtual unknown_ret GetIPCCallCount() = 0;
    virtual unknown_ret SetWarningMessageHook(void (*)(int, char const*)) = 0;
    virtual unknown_ret BShutdownIfAllPipesClosed() = 0;
    virtual unknown_ret GetISteamHTTP(int, int, char const*) = 0;
    virtual unknown_ret GetISteamUnifiedMessages(int, int, char const*) = 0;
    virtual unknown_ret GetISteamController(int, int, char const*) = 0;
    virtual unknown_ret GetISteamUGC(int, int, char const*) = 0;
    virtual unknown_ret GetISteamAppList(int, int, char const*) = 0;
    virtual unknown_ret GetISteamMusic(int, int, char const*) = 0;
    virtual unknown_ret GetISteamMusicRemote(int, int, char const*) = 0;
};
