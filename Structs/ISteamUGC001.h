class ISteamUGC001
{
public:
    virtual unknown_ret CreateQueryUserUGCRequest(unsigned int, EUserUGCList, EUGCMatchingUGCType, EUserUGCListSortOrder, unsigned int, unsigned int, unsigned int) = 0;
    virtual unknown_ret CreateQueryAllUGCRequest(EUGCQuery, EUGCMatchingUGCType, unsigned int, unsigned int, unsigned int) = 0;
    virtual unknown_ret SendQueryUGCRequest(unsigned long long) = 0;
    virtual unknown_ret GetQueryUGCResult(unsigned long long, unsigned int, CAdapterSteamUGC001::SteamUGCDetails_t_v1*) = 0;
    virtual unknown_ret ReleaseQueryUGCRequest(unsigned long long) = 0;
    virtual unknown_ret AddRequiredTag(unsigned long long, char const*) = 0;
    virtual unknown_ret AddExcludedTag(unsigned long long, char const*) = 0;
    virtual unknown_ret SetReturnLongDescription(unsigned long long, bool) = 0;
    virtual unknown_ret SetReturnTotalOnly(unsigned long long, bool) = 0;
    virtual unknown_ret SetCloudFileNameFilter(unsigned long long, char const*) = 0;
    virtual unknown_ret SetMatchAnyTag(unsigned long long, bool) = 0;
    virtual unknown_ret SetSearchText(unsigned long long, char const*) = 0;
    virtual unknown_ret SetRankedByTrendDays(unsigned long long, unsigned int) = 0;
    virtual unknown_ret RequestUGCDetails(unsigned long long) = 0;
};
