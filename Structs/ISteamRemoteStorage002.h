class ISteamRemoteStorage002
{
public:
    virtual unknown_ret FileWrite(char const*, void const*, int) = 0;
    virtual unknown_ret GetFileSize(char const*) = 0;
    virtual unknown_ret FileRead(char const*, void*, int) = 0;
    virtual unknown_ret FileExists(char const*) = 0;
    virtual unknown_ret GetFileCount() = 0;
    virtual unknown_ret GetFileNameAndSize(int, int*) = 0;
    virtual unknown_ret GetQuota(int*, int*) = 0;
};
