class ISteamGameServerStats001
{
public:
    virtual unknown_ret RequestUserStats(CSteamID) = 0;
    virtual unknown_ret GetUserStat(CSteamID, char const*, int*) = 0;
    virtual unknown_ret GetUserStat(CSteamID, char const*, float*) = 0;
    virtual unknown_ret GetUserAchievement(CSteamID, char const*, bool*) = 0;
    virtual unknown_ret SetUserStat(CSteamID, char const*, int) = 0;
    virtual unknown_ret SetUserStat(CSteamID, char const*, float) = 0;
    virtual unknown_ret UpdateUserAvgRateStat(CSteamID, char const*, float, double) = 0;
    virtual unknown_ret SetUserAchievement(CSteamID, char const*) = 0;
    virtual unknown_ret ClearUserAchievement(CSteamID, char const*) = 0;
    virtual unknown_ret StoreUserStats(CSteamID) = 0;
};
