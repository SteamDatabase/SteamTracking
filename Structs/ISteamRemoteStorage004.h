class ISteamRemoteStorage004
{
public:
    virtual unknown_ret FileWrite(char const*, void const*, int) = 0;
    virtual unknown_ret FileRead(char const*, void*, int) = 0;
    virtual unknown_ret FileForget(char const*) = 0;
    virtual unknown_ret FileDelete(char const*) = 0;
    virtual unknown_ret FileShare(char const*) = 0;
    virtual unknown_ret SetSyncPlatforms(char const*, ERemoteStoragePlatform) = 0;
    virtual unknown_ret FileExists(char const*) = 0;
    virtual unknown_ret FilePersisted(char const*) = 0;
    virtual unknown_ret GetFileSize(char const*) = 0;
    virtual unknown_ret GetFileTimestamp(char const*) = 0;
    virtual unknown_ret GetSyncPlatforms(char const*) = 0;
    virtual unknown_ret GetFileCount() = 0;
    virtual unknown_ret GetFileNameAndSize(int, int*) = 0;
    virtual unknown_ret GetQuota(int*, int*) = 0;
    virtual unknown_ret IsCloudEnabledForAccount() = 0;
    virtual unknown_ret IsCloudEnabledForApp() = 0;
    virtual unknown_ret SetCloudEnabledForApp(bool) = 0;
    virtual unknown_ret UGCDownload(unsigned long long) = 0;
    virtual unknown_ret GetUGCDetails(unsigned long long, unsigned int*, char**, int*, CSteamID*) = 0;
    virtual unknown_ret UGCRead(unsigned long long, void*, int) = 0;
    virtual unknown_ret GetCachedUGCCount() = 0;
    virtual unknown_ret GetCachedUGCHandle(int) = 0;
};
