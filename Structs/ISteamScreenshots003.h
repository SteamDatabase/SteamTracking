class ISteamScreenshots003
{
public:
    virtual unknown_ret WriteScreenshot(void*, unsigned int, int, int) = 0;
    virtual unknown_ret AddScreenshotToLibrary(char const*, char const*, int, int) = 0;
    virtual unknown_ret TriggerScreenshot() = 0;
    virtual unknown_ret HookScreenshots(bool) = 0;
    virtual unknown_ret SetLocation(unsigned int, char const*) = 0;
    virtual unknown_ret TagUser(unsigned int, CSteamID) = 0;
    virtual unknown_ret TagPublishedFile(unsigned int, unsigned long long) = 0;
    virtual unknown_ret IsScreenshotsHooked() = 0;
    virtual unknown_ret AddVRScreenshotToLibrary(EVRScreenshotType, char const*, char const*) = 0;
};
