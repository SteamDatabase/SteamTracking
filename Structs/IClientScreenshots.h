class IClientScreenshots
{
public:
    virtual unknown_ret GetShortcutDisplayName(CGameID) = 0;
    virtual unknown_ret SetShortcutDisplayName(CGameID, char const*) = 0;
    virtual unknown_ret WriteScreenshot(CGameID, void*, unsigned int, int, int) = 0;
    virtual unknown_ret AddScreenshotToLibrary(CGameID, EVRScreenshotType, char const*, char const*, char const*, int, int) = 0;
    virtual unknown_ret TriggerScreenshot(CGameID) = 0;
    virtual unknown_ret RequestScreenshotFromGame(unsigned int) = 0;
    virtual unknown_ret SetLocation(CGameID, unsigned int, char const*) = 0;
    virtual unknown_ret TagUser(CGameID, unsigned int, CSteamID) = 0;
    virtual unknown_ret TagPublishedFile(CGameID, unsigned int, unsigned long long) = 0;
    virtual unknown_ret ResolvePath(CGameID, unsigned int, EScreenshotFile, char*, unsigned int) = 0;
    virtual unknown_ret GetSizeOnDisk(CGameID, unsigned int) = 0;
    virtual unknown_ret GetSizeInCloud(CGameID, unsigned int) = 0;
    virtual unknown_ret IsPersisted(CGameID, unsigned int) = 0;
    virtual unknown_ret GetNumGamesWithLocalScreenshots() = 0;
    virtual unknown_ret GetGameWithLocalScreenshots(int) = 0;
    virtual unknown_ret GetLocalScreenshotCount(CGameID) = 0;
    virtual unknown_ret GetLocalScreenshot(CGameID, int, unsigned int*, int*, int*, unsigned int*, EUCMFilePrivacyState*, unsigned long long*, char*, unsigned int, bool*) = 0;
    virtual unknown_ret GetLocalScreenshotByHandle(CGameID, unsigned int, int*, int*, unsigned int*, EUCMFilePrivacyState*, unsigned long long*, char*, unsigned int, bool*) = 0;
    virtual unknown_ret SetLocalScreenshotCaption(CGameID, unsigned int, char const*) = 0;
    virtual unknown_ret SetLocalScreenshotPrivacy(CGameID, unsigned int, EUCMFilePrivacyState) = 0;
    virtual unknown_ret SetLocalScreenshotSpoiler(CGameID, unsigned int, bool) = 0;
    virtual unknown_ret StartBatch(CGameID) = 0;
    virtual unknown_ret AddToBatch(unsigned int) = 0;
    virtual unknown_ret UploadBatch(EUCMFilePrivacyState) = 0;
    virtual unknown_ret DeleteBatch(bool) = 0;
    virtual unknown_ret CancelBatch() = 0;
    virtual unknown_ret RecoverOldScreenshots() = 0;
    virtual unknown_ret GetTaggedUserCount(CGameID, unsigned int) = 0;
    virtual unknown_ret GetTaggedUser(CGameID, unsigned int, int) = 0;
    virtual unknown_ret GetLocation(CGameID, unsigned int, char*, unsigned int) = 0;
    virtual unknown_ret GetTaggedPublishedFileCount(CGameID, unsigned int) = 0;
    virtual unknown_ret GetTaggedPublishedFile(CGameID, unsigned int, int) = 0;
    virtual unknown_ret GetScreenshotVRType(CGameID, unsigned int) = 0;
    virtual unknown_ret BGetUserScreenshotDirectory(char*, unsigned int) = 0;
};
