class IClientGameServerStats
{
public:
    virtual unknown_ret RequestUserStats(CSteamID, CGameID) = 0;
    virtual unknown_ret GetUserStat(CSteamID, CGameID, char const*, int*) = 0;
    virtual unknown_ret GetUserStat(CSteamID, CGameID, char const*, float*) = 0;
    virtual unknown_ret GetUserAchievement(CSteamID, CGameID, char const*, bool*, unsigned int*) = 0;
    virtual unknown_ret SetUserStat(CSteamID, CGameID, char const*, int) = 0;
    virtual unknown_ret SetUserStat(CSteamID, CGameID, char const*, float) = 0;
    virtual unknown_ret UpdateUserAvgRateStat(CSteamID, CGameID, char const*, float, double) = 0;
    virtual unknown_ret SetUserAchievement(CSteamID, CGameID, char const*) = 0;
    virtual unknown_ret ClearUserAchievement(CSteamID, CGameID, char const*) = 0;
    virtual unknown_ret StoreUserStats(CSteamID, CGameID) = 0;
    virtual unknown_ret SetMaxStatsLoaded(unsigned int) = 0;
};
