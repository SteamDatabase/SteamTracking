class IClientAppsMap
{
public:
    virtual unknown_ret GetAppData(void*,void*,void*,void*) = 0;
    virtual unknown_ret SetLocalAppConfig(void*,void*,void*) = 0;
    virtual unknown_ret GetInternalAppIDFromGameID(void*) = 0;
    virtual unknown_ret GetAllOwnedMultiplayerApps(void*,void*) = 0;
    virtual unknown_ret GetAvailableLaunchOptions(void*,void*,void*) = 0;
    virtual unknown_ret GetAppDataSection(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret GetMultipleAppDataSections(void*,void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret RequestAppInfoUpdate(void*,void*) = 0;
    virtual unknown_ret GetDLCCount(void*) = 0;
    virtual unknown_ret BGetDLCDataByIndex(void*,void*,void*) = 0;
    virtual unknown_ret GetAppType(void*) = 0;
    virtual unknown_ret GetStoreTagLocalization(void*,void*,void*,void*,void*) = 0;
};
