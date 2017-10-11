class IClientInstallUtils
{
public:
    virtual unknown_ret SetUniverse(EUniverse) = 0;
    virtual unknown_ret AddShortcut(char const*, char const*, char const*, char const*, char const*) = 0;
    virtual unknown_ret RemoveShortcut(char const*) = 0;
    virtual unknown_ret AddUninstallEntry(int, char const*, char const*, char const*, char const*, char const*, char const*) = 0;
    virtual unknown_ret RemoveUninstallEntry(int) = 0;
    virtual unknown_ret AddToFirewall(char const*, char const*) = 0;
    virtual unknown_ret RemoveFromFirewall(char const*) = 0;
    virtual unknown_ret RegisterSteamProtocolHandler(bool) = 0;
    virtual unknown_ret AddInstallScriptToWhiteList(char const*, char const*) = 0;
    virtual unknown_ret RunInstallScript(char const*, unsigned int, bool) = 0;
    virtual unknown_ret GetInstallScriptExitCode() = 0;
    virtual unknown_ret ConfigureNetworDeviceIPAddresses(char const*, bool, unsigned int, unsigned int, unsigned int, unsigned int, unsigned int) = 0;
};
