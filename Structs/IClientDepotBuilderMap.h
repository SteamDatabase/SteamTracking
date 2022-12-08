class IClientDepotBuilderMap
{
public:
    virtual unknown_ret BGetDepotBuildStatus(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret VerifyChunkStore(void*,void*,void*) = 0;
    virtual unknown_ret Unknown_5641968() = 0;
    virtual unknown_ret DownloadChunk(void*,void*,void*) = 0;
    virtual unknown_ret StartDepotBuild(void*,void*,void*,void*) = 0;
    virtual unknown_ret CommitAppBuild(void*,void*,void*,void*,void*,void*) = 0;
};
