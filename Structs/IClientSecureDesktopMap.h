class IClientSecureDesktopMap
{
public:
    virtual unknown_ret BStartStreaming() = 0;
    virtual unknown_ret StopStreaming() = 0;
    virtual unknown_ret SendSAS() = 0;
};
