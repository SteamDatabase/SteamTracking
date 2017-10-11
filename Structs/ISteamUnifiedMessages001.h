class ISteamUnifiedMessages001
{
public:
    virtual unknown_ret SendMethod(char const*, void const*, unsigned int, unsigned long long) = 0;
    virtual unknown_ret GetMethodResponseInfo(unsigned long long, unsigned int*, EResult*) = 0;
    virtual unknown_ret GetMethodResponseData(unsigned long long, void*, unsigned int, bool) = 0;
    virtual unknown_ret ReleaseMethod(unsigned long long) = 0;
    virtual unknown_ret SendNotification(char const*, void const*, unsigned int) = 0;
};
