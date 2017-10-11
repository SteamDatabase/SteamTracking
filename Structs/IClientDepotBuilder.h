class IClientDepotBuilder
{
public:
    virtual unknown_ret BGetDepotBuildStatus(unsigned long long, EDepotBuildStatus*, unsigned long long*, unsigned long long*) = 0;
    virtual unknown_ret VerifyChunkStore(unsigned int, unsigned int, char const*) = 0;
    virtual unknown_ret DownloadDepot(unsigned int, unsigned int, unsigned long long, unsigned long long, unsigned long long, unsigned int) = 0;
    virtual unknown_ret StartDepotBuild(unsigned int, unsigned int, unsigned int, char const*) = 0;
    virtual unknown_ret CommitAppBuild(unsigned int, unsigned int, unsigned int const*, unsigned long long const*, char const*, char const*) = 0;
};
