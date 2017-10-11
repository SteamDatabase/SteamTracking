class ISteamApps004
{
public:
    virtual unknown_ret BIsSubscribed() = 0;
    virtual unknown_ret BIsLowViolence() = 0;
    virtual unknown_ret BIsCybercafe() = 0;
    virtual unknown_ret BIsVACBanned() = 0;
    virtual unknown_ret GetCurrentGameLanguage() = 0;
    virtual unknown_ret GetAvailableGameLanguages() = 0;
    virtual unknown_ret BIsSubscribedApp(unsigned int) = 0;
    virtual unknown_ret BIsDlcInstalled(unsigned int) = 0;
    virtual unknown_ret GetEarliestPurchaseUnixTime(unsigned int) = 0;
    virtual unknown_ret BIsSubscribedFromFreeWeekend() = 0;
    virtual unknown_ret GetDLCCount() = 0;
    virtual unknown_ret BGetDLCDataByIndex(int, unsigned int*, bool*, char*, int) = 0;
    virtual unknown_ret InstallDLC(unsigned int) = 0;
    virtual unknown_ret UninstallDLC(unsigned int) = 0;
};
