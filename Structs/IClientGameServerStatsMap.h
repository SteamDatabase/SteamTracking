class IClientGameServerStatsMap
{
public:
    virtual unknown_ret RequestUserStats(void*,void*,void*) = 0;
    virtual unknown_ret GetUserStat(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret GetUserStat(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret GetUserAchievement(void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret SetUserStat(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret SetUserStat(void*,void*,void*,void*) = 0;
    virtual unknown_ret UpdateUserAvgRateStat(void*,void*,void*,void*) = 0;
    virtual unknown_ret SetUserAchievement(void*,void*,void*,void*) = 0;
    virtual unknown_ret ClearUserAchievement(void*,void*,void*,void*) = 0;
    virtual unknown_ret StoreUserStats(void*,void*,void*) = 0;
    virtual unknown_ret SetMaxStatsLoaded(void*) = 0;
};
