class ISteamApps005
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
    virtual unknown_ret RequestAppProofOfPurchaseKey(unsigned int) = 0;
    virtual unknown_ret GetCurrentBetaName(char*, int) = 0;
    virtual unknown_ret MarkContentCorrupt(bool) = 0;
    virtual unknown_ret GetInstalledDepots(unsigned int*, unsigned int) = 0;
    virtual unknown_ret GetAppInstallDir(unsigned int, char*, unsigned int) = 0;
    virtual unknown_ret BIsAppInstalled(unsigned int) = 0;
};
