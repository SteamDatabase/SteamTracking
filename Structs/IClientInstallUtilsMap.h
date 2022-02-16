class IClientInstallUtilsMap
{
public:
    virtual unknown_ret SetUniverse(void*) = 0;
    virtual unknown_ret AddShortcut(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret RemoveShortcut(void*) = 0;
    virtual unknown_ret AddUninstallEntry(void*,void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret RemoveUninstallEntry(void*) = 0;
    virtual unknown_ret AddToFirewall(void*,void*) = 0;
    virtual unknown_ret RemoveFromFirewall(void*) = 0;
    virtual unknown_ret RegisterSteamProtocolHandler(void*,void*) = 0;
    virtual unknown_ret AddInstallScriptToWhiteList(void*,void*) = 0;
    virtual unknown_ret RunInstallScript(void*,void*,void*) = 0;
    virtual unknown_ret GetInstallScriptExitCode() = 0;
    virtual unknown_ret ConfigureNetworDeviceIPAddresses(void*,void*,void*,void*,void*,void*,void*) = 0;
};
