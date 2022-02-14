class IClientHTTPMap
{
public:
    virtual unknown_ret CreateHTTPRequest(void*,void*) = 0;
    virtual unknown_ret SetHTTPRequestContextValue(void*,void*,void*) = 0;
    virtual unknown_ret SetHTTPRequestNetworkActivityTimeout(void*,void*) = 0;
    virtual unknown_ret SetHTTPRequestHeaderValue(void*,void*,void*) = 0;
    virtual unknown_ret SetHTTPRequestGetOrPostParameter(void*,void*,void*) = 0;
    virtual unknown_ret SendHTTPRequest(void*,void*) = 0;
    virtual unknown_ret SendHTTPRequestAndStreamResponse(void*,void*) = 0;
    virtual unknown_ret DeferHTTPRequest(void*) = 0;
    virtual unknown_ret PrioritizeHTTPRequest(void*) = 0;
    virtual unknown_ret CancelHTTPRequest(void*) = 0;
    virtual unknown_ret GetHTTPResponseHeaderSize(void*,void*,void*) = 0;
    virtual unknown_ret GetHTTPResponseHeaderValue(void*,void*,void*,void*) = 0;
    virtual unknown_ret GetHTTPResponseBodySize(void*,void*) = 0;
    virtual unknown_ret GetHTTPResponseBodyData(void*,void*,void*) = 0;
    virtual unknown_ret GetHTTPStreamingResponseBodyData(void*,void*,void*,void*) = 0;
    virtual unknown_ret ReleaseHTTPRequest(void*) = 0;
    virtual unknown_ret GetHTTPDownloadProgressPct(void*,void*) = 0;
    virtual unknown_ret SetHTTPRequestRawPostBody(void*,void*,void*,void*) = 0;
    virtual unknown_ret CreateCookieContainer(void*) = 0;
    virtual unknown_ret ReleaseCookieContainer(void*) = 0;
    virtual unknown_ret SetCookie(void*,void*,void*,void*) = 0;
    virtual unknown_ret SetHTTPRequestCookieContainer(void*,void*) = 0;
    virtual unknown_ret SetHTTPRequestUserAgentInfo(void*,void*) = 0;
    virtual unknown_ret SetHTTPRequestRequiresVerifiedCertificate(void*,void*) = 0;
    virtual unknown_ret SetHTTPRequestAbsoluteTimeoutMS(void*,void*) = 0;
    virtual unknown_ret GetHTTPRequestWasTimedOut(void*,void*) = 0;
    virtual unknown_ret SetHTTPRequestRedirectsEnabled(void*,void*) = 0;
};
