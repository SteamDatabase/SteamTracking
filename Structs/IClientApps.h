class IClientApps
{
public:
    virtual unknown_ret GetAppData(unsigned int, char const*, char*, int) = 0;
    virtual unknown_ret SetLocalAppConfig(unsigned int, unsigned char*, int) = 0;
    virtual unknown_ret GetInternalAppIDFromGameID(CGameID) = 0;
    virtual unknown_ret GetAllOwnedMultiplayerApps(unsigned int*, int) = 0;
    virtual unknown_ret GetAppDataSection(unsigned int, int, unsigned char*, int, bool) = 0;
    virtual unknown_ret RequestAppInfoUpdate(unsigned int const*, int) = 0;
    virtual unknown_ret GetDLCCount(unsigned int) = 0;
    virtual unknown_ret BGetDLCDataByIndex(unsigned int, int, unsigned int*, bool*, char*, int) = 0;
    virtual unknown_ret GetAppType(unsigned int) = 0;
    virtual unknown_ret GetStoreTagLocalization(ELanguage, unsigned int*, int, unsigned char*, int) = 0;
};
