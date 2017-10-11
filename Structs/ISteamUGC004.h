class ISteamUGC004
{
public:
    virtual unknown_ret CreateQueryUserUGCRequest(unsigned int, EUserUGCList, EUGCMatchingUGCType, EUserUGCListSortOrder, unsigned int, unsigned int, unsigned int) = 0;
    virtual unknown_ret CreateQueryAllUGCRequest(EUGCQuery, EUGCMatchingUGCType, unsigned int, unsigned int, unsigned int) = 0;
    virtual unknown_ret SendQueryUGCRequest(unsigned long long) = 0;
    virtual unknown_ret GetQueryUGCResult(unsigned long long, unsigned int, SteamUGCDetails_t*) = 0;
    virtual unknown_ret ReleaseQueryUGCRequest(unsigned long long) = 0;
    virtual unknown_ret AddRequiredTag(unsigned long long, char const*) = 0;
    virtual unknown_ret AddExcludedTag(unsigned long long, char const*) = 0;
    virtual unknown_ret SetReturnLongDescription(unsigned long long, bool) = 0;
    virtual unknown_ret SetReturnTotalOnly(unsigned long long, bool) = 0;
    virtual unknown_ret SetAllowCachedResponse(unsigned long long, unsigned int) = 0;
    virtual unknown_ret SetCloudFileNameFilter(unsigned long long, char const*) = 0;
    virtual unknown_ret SetMatchAnyTag(unsigned long long, bool) = 0;
    virtual unknown_ret SetSearchText(unsigned long long, char const*) = 0;
    virtual unknown_ret SetRankedByTrendDays(unsigned long long, unsigned int) = 0;
    virtual unknown_ret RequestUGCDetails(unsigned long long, unsigned int) = 0;
    virtual unknown_ret CreateItem(unsigned int, EWorkshopFileType) = 0;
    virtual unknown_ret StartItemUpdate(unsigned int, unsigned long long) = 0;
    virtual unknown_ret SetItemTitle(unsigned long long, char const*) = 0;
    virtual unknown_ret SetItemDescription(unsigned long long, char const*) = 0;
    virtual unknown_ret SetItemVisibility(unsigned long long, ERemoteStoragePublishedFileVisibility) = 0;
    virtual unknown_ret SetItemTags(unsigned long long, SteamParamStringArray_t const*) = 0;
    virtual unknown_ret SetItemContent(unsigned long long, char const*) = 0;
    virtual unknown_ret SetItemPreview(unsigned long long, char const*) = 0;
    virtual unknown_ret SubmitItemUpdate(unsigned long long, char const*) = 0;
    virtual unknown_ret GetItemUpdateProgress(unsigned long long, unsigned long long*, unsigned long long*) = 0;
    virtual unknown_ret SubscribeItem(unsigned long long) = 0;
    virtual unknown_ret UnsubscribeItem(unsigned long long) = 0;
    virtual unknown_ret GetNumSubscribedItems() = 0;
    virtual unknown_ret GetSubscribedItems(unsigned long long*, unsigned int) = 0;
    virtual unknown_ret GetItemState(unsigned long long) = 0;
    virtual unknown_ret GetItemInstallInfo(unsigned long long, unsigned long long*, char*, unsigned int, unsigned int*) = 0;
    virtual unknown_ret GetItemDownloadInfo(unsigned long long, unsigned long long*, unsigned long long*) = 0;
    virtual unknown_ret DownloadItem(unsigned long long, bool) = 0;
};
