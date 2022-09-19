class IClientShaderMap
{
public:
    virtual unknown_ret BIsShaderManagementEnabled() = 0;
    virtual unknown_ret BIsShaderBackgroundProcessingEnabled() = 0;
    virtual unknown_ret EnableShaderManagement(void*) = 0;
    virtual unknown_ret EnableShaderBackgroundProcessing(void*) = 0;
    virtual unknown_ret GetShaderDepotsTotalDiskUsage() = 0;
    virtual unknown_ret GetShaderCacheDiskSize(void*) = 0;
    virtual unknown_ret StartShaderScan(void*,void*) = 0;
    virtual unknown_ret StartPipelineBuild(void*,void*) = 0;
    virtual unknown_ret StartShaderConversion(void*,void*,void*,void*) = 0;
    virtual unknown_ret StartShaderPruning() = 0;
    virtual unknown_ret ProcessShaderCache(void*) = 0;
    virtual unknown_ret GetShaderCacheProcessingCompletion() = 0;
    virtual unknown_ret GetShaderCacheProcessingAppID() = 0;
    virtual unknown_ret SkipShaderProcessing(void*) = 0;
    virtual unknown_ret BAppHasPendingShaderContentDownload(void*) = 0;
    virtual unknown_ret GetAppPendingShaderDownloadSize(void*) = 0;
    virtual unknown_ret GetBucketManifest(void*,void*,void*) = 0;
    virtual unknown_ret GetStaleBucket(void*,void*) = 0;
    virtual unknown_ret ReportExternalBuild(void*,void*,void*,void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret PrepopulatePrecompiledCache(void*,void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret WritePrecompiledCache(void*,void*,void*,void*) = 0;
    virtual unknown_ret CompileShaders(void*,void*,void*,void*) = 0;
    virtual unknown_ret GetShaderBucketForGraphicsAPI(void*,void*) = 0;
    virtual unknown_ret EnableShaderManagementSystem(void*) = 0;
};
