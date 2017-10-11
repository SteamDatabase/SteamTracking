class ISteamUserStats001
{
public:
    virtual unknown_ret GetNumStats(CGameID) = 0;
    virtual unknown_ret GetStatName(CGameID, unsigned int) = 0;
    virtual unknown_ret GetStatType(CGameID, char const*) = 0;
    virtual unknown_ret GetNumAchievements(CGameID) = 0;
    virtual unknown_ret GetAchievementName(CGameID, unsigned int) = 0;
    virtual unknown_ret GetNumGroupAchievements(CGameID) = 0;
    virtual unknown_ret GetGroupAchievementName(CGameID, unsigned int) = 0;
    virtual unknown_ret RequestCurrentStats(CGameID) = 0;
    virtual unknown_ret GetStat(CGameID, char const*, int*) = 0;
    virtual unknown_ret GetStat(CGameID, char const*, float*) = 0;
    virtual unknown_ret SetStat(CGameID, char const*, int) = 0;
    virtual unknown_ret SetStat(CGameID, char const*, float) = 0;
    virtual unknown_ret UpdateAvgRateStat(CGameID, char const*, float, double) = 0;
    virtual unknown_ret GetAchievement(CGameID, char const*, bool*) = 0;
    virtual unknown_ret GetGroupAchievement(CGameID, char const*, bool*) = 0;
    virtual unknown_ret SetAchievement(CGameID, char const*) = 0;
    virtual unknown_ret SetGroupAchievement(CGameID, char const*) = 0;
    virtual unknown_ret StoreStats(CGameID) = 0;
    virtual unknown_ret ClearAchievement(CGameID, char const*) = 0;
    virtual unknown_ret ClearGroupAchievement(CGameID, char const*) = 0;
    virtual unknown_ret GetAchievementIcon(CGameID, char const*) = 0;
    virtual unknown_ret GetAchievementDisplayAttribute(CGameID, char const*, char const*) = 0;
};
