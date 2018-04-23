class IClientSecureDesktop
{
public:
    virtual unknown_ret BStartStreaming(char const*) = 0;
    virtual unknown_ret StopStreaming() = 0;
    virtual unknown_ret SendSAS() = 0;
};
