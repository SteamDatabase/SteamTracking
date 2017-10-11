class ISteamMatchmakingServers002
{
public:
    virtual unknown_ret RequestInternetServerList(unsigned int, MatchMakingKeyValuePair_t**, unsigned int, ISteamMatchmakingServerListResponse*) = 0;
    virtual unknown_ret RequestLANServerList(unsigned int, ISteamMatchmakingServerListResponse*) = 0;
    virtual unknown_ret RequestFriendsServerList(unsigned int, MatchMakingKeyValuePair_t**, unsigned int, ISteamMatchmakingServerListResponse*) = 0;
    virtual unknown_ret RequestFavoritesServerList(unsigned int, MatchMakingKeyValuePair_t**, unsigned int, ISteamMatchmakingServerListResponse*) = 0;
    virtual unknown_ret RequestHistoryServerList(unsigned int, MatchMakingKeyValuePair_t**, unsigned int, ISteamMatchmakingServerListResponse*) = 0;
    virtual unknown_ret RequestSpectatorServerList(unsigned int, MatchMakingKeyValuePair_t**, unsigned int, ISteamMatchmakingServerListResponse*) = 0;
    virtual unknown_ret ReleaseRequest(void*) = 0;
    virtual unknown_ret GetServerDetails(void*, int) = 0;
    virtual unknown_ret CancelQuery(void*) = 0;
    virtual unknown_ret RefreshQuery(void*) = 0;
    virtual unknown_ret IsRefreshing(void*) = 0;
    virtual unknown_ret GetServerCount(void*) = 0;
    virtual unknown_ret RefreshServer(void*, int) = 0;
    virtual unknown_ret PingServer(unsigned int, unsigned short, ISteamMatchmakingPingResponse*) = 0;
    virtual unknown_ret PlayerDetails(unsigned int, unsigned short, ISteamMatchmakingPlayersResponse*) = 0;
    virtual unknown_ret ServerRules(unsigned int, unsigned short, ISteamMatchmakingRulesResponse*) = 0;
    virtual unknown_ret CancelServerQuery(int) = 0;
};
