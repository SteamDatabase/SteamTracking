class IClientCompat
{
public:
    virtual unknown_ret BIsCompatLayerEnabled() = 0;
    virtual unknown_ret EnableCompat(bool) = 0;
    virtual unknown_ret GetAvailableCompatTools(CUtlVector<CUtlString, CUtlMemory<CUtlString> >*) = 0;
    virtual unknown_ret GetAvailableCompatToolsFiltered(CUtlVector<CUtlString, CUtlMemory<CUtlString> >*, ERemoteStoragePlatform) = 0;
    virtual unknown_ret GetAvailableCompatToolsForApp(CUtlVector<CUtlString, CUtlMemory<CUtlString> >*, unsigned int) = 0;
    virtual unknown_ret SpecifyCompatTool(unsigned int, char const*, char const*, int) = 0;
    virtual unknown_ret BIsCompatibilityToolEnabled(unsigned int) = 0;
    virtual unknown_ret GetCompatToolName(unsigned int) = 0;
    virtual unknown_ret GetCompatToolMappingPriority(unsigned int) = 0;
    virtual unknown_ret GetCompatToolDisplayName(char const*) = 0;
    virtual unknown_ret GetWhitelistedGameList(CUtlVector<AppWhitelistSetting_t, CUtlMemory<AppWhitelistSetting_t> >*) = 0;
    virtual unknown_ret GetControllerConfigOverrides(CUtlVector<AppControllerConfigOverride_t, CUtlMemory<AppControllerConfigOverride_t> >*) = 0;
    virtual unknown_ret StartSession(unsigned int) = 0;
    virtual unknown_ret ReleaseSession(unsigned int, unsigned long long) = 0;
    virtual unknown_ret DeleteCompatData(unsigned int) = 0;
};
