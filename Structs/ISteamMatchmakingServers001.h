class ISteamMatchmakingServers001
{
public:
    virtual unknown_ret RequestInternetServerList(unsigned int, MatchMakingKeyValuePair_t**, unsigned int, _ISteamMatchmakingServerListResponse_v001*) = 0;
    virtual unknown_ret RequestLANServerList(unsigned int, _ISteamMatchmakingServerListResponse_v001*) = 0;
    virtual unknown_ret RequestFriendsServerList(unsigned int, MatchMakingKeyValuePair_t**, unsigned int, _ISteamMatchmakingServerListResponse_v001*) = 0;
    virtual unknown_ret RequestFavoritesServerList(unsigned int, MatchMakingKeyValuePair_t**, unsigned int, _ISteamMatchmakingServerListResponse_v001*) = 0;
    virtual unknown_ret RequestHistoryServerList(unsigned int, MatchMakingKeyValuePair_t**, unsigned int, _ISteamMatchmakingServerListResponse_v001*) = 0;
    virtual unknown_ret RequestSpectatorServerList(unsigned int, MatchMakingKeyValuePair_t**, unsigned int, _ISteamMatchmakingServerListResponse_v001*) = 0;
    virtual unknown_ret GetServerDetails(_EMatchMakingType_v001, int) = 0;
    virtual unknown_ret CancelQuery(_EMatchMakingType_v001) = 0;
    virtual unknown_ret RefreshQuery(_EMatchMakingType_v001) = 0;
    virtual unknown_ret IsRefreshing(_EMatchMakingType_v001) = 0;
    virtual unknown_ret GetServerCount(_EMatchMakingType_v001) = 0;
    virtual unknown_ret RefreshServer(_EMatchMakingType_v001, int) = 0;
    virtual unknown_ret PingServer(unsigned int, unsigned short, ISteamMatchmakingPingResponse*) = 0;
    virtual unknown_ret PlayerDetails(unsigned int, unsigned short, ISteamMatchmakingPlayersResponse*) = 0;
    virtual unknown_ret ServerRules(unsigned int, unsigned short, ISteamMatchmakingRulesResponse*) = 0;
    virtual unknown_ret CancelServerQuery(int) = 0;
};
