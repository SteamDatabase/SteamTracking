class IClientCompatMap
{
public:
    virtual unknown_ret BIsCompatLayerEnabled() = 0;
    virtual unknown_ret EnableCompat(void*) = 0;
    virtual unknown_ret GetAvailableCompatTools(void*) = 0;
    virtual unknown_ret GetAvailableCompatToolsFiltered(void*,void*) = 0;
    virtual unknown_ret GetAvailableCompatToolsForApp(void*,void*) = 0;
    virtual unknown_ret SpecifyCompatTool(void*,void*,void*,void*) = 0;
    virtual unknown_ret BIsCompatibilityToolEnabled(void*) = 0;
    virtual unknown_ret GetCompatToolName(void*) = 0;
    virtual unknown_ret GetCompatToolMappingPriority(void*) = 0;
    virtual unknown_ret GetCompatToolDisplayName(void*) = 0;
    virtual unknown_ret GetWhitelistedGameList(void*) = 0;
    virtual unknown_ret GetControllerConfigOverrides(void*) = 0;
    virtual unknown_ret StartSession(void*) = 0;
    virtual unknown_ret ReleaseSession(void*,void*,void*) = 0;
    virtual unknown_ret BIsLauncherServiceEnabled(void*) = 0;
    virtual unknown_ret DeleteCompatData(void*) = 0;
    virtual unknown_ret GetCompatibilityDataDiskSize(void*) = 0;
    virtual unknown_ret BNeedsUnlockH264(void*) = 0;
};
