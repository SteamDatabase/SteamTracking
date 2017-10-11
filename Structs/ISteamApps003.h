class ISteamApps003
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
};
