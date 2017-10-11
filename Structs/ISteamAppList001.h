class ISteamAppList001
{
public:
    virtual unknown_ret GetNumInstalledApps() = 0;
    virtual unknown_ret GetInstalledApps(unsigned int*, unsigned int) = 0;
    virtual unknown_ret GetAppName(unsigned int, char*, int) = 0;
    virtual unknown_ret GetAppInstallDir(unsigned int, char*, int) = 0;
    virtual unknown_ret GetAppBuildId(unsigned int) = 0;
};
