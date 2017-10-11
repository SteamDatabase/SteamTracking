class ISteamHTTP001
{
public:
    virtual unknown_ret CreateHTTPRequest(EHTTPMethod, char const*) = 0;
    virtual unknown_ret SetHTTPRequestContextValue(unsigned int, unsigned long long) = 0;
    virtual unknown_ret SetHTTPRequestNetworkActivityTimeout(unsigned int, unsigned int) = 0;
    virtual unknown_ret SetHTTPRequestHeaderValue(unsigned int, char const*, char const*) = 0;
    virtual unknown_ret SetHTTPRequestGetOrPostParameter(unsigned int, char const*, char const*) = 0;
    virtual unknown_ret SendHTTPRequest(unsigned int, unsigned long long*) = 0;
    virtual unknown_ret DeferHTTPRequest(unsigned int) = 0;
    virtual unknown_ret PrioritizeHTTPRequest(unsigned int) = 0;
    virtual unknown_ret GetHTTPResponseHeaderSize(unsigned int, char const*, unsigned int*) = 0;
    virtual unknown_ret GetHTTPResponseHeaderValue(unsigned int, char const*, unsigned char*, unsigned int) = 0;
    virtual unknown_ret GetHTTPResponseBodySize(unsigned int, unsigned int*) = 0;
    virtual unknown_ret GetHTTPResponseBodyData(unsigned int, unsigned char*, unsigned int) = 0;
    virtual unknown_ret ReleaseHTTPRequest(unsigned int) = 0;
    virtual unknown_ret GetHTTPDownloadProgressPct(unsigned int, float*) = 0;
    virtual unknown_ret SetHTTPRequestRawPostBody(unsigned int, char const*, unsigned char*, unsigned int) = 0;
};
