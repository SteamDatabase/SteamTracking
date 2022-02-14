class IClientScreenshotsMap
{
public:
    virtual unknown_ret GetShortcutDisplayName(void*) = 0;
    virtual unknown_ret SetShortcutDisplayName(void*,void*) = 0;
    virtual unknown_ret WriteScreenshot(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret AddScreenshotToLibrary(void*,void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret TriggerScreenshot(void*) = 0;
    virtual unknown_ret RequestScreenshotFromGame(void*) = 0;
    virtual unknown_ret SetLocation(void*,void*,void*) = 0;
    virtual unknown_ret TagUser(void*,void*,void*,void*) = 0;
    virtual unknown_ret TagPublishedFile(void*,void*,void*,void*) = 0;
    virtual unknown_ret ResolvePath(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret GetSizeOnDisk(void*,void*) = 0;
    virtual unknown_ret GetSizeInCloud(void*,void*) = 0;
    virtual unknown_ret IsPersisted(void*,void*) = 0;
    virtual unknown_ret GetNumGamesWithLocalScreenshots() = 0;
    virtual unknown_ret GetGameWithLocalScreenshots(void*,void*) = 0;
    virtual unknown_ret GetLocalScreenshotCount(void*) = 0;
    virtual unknown_ret GetLocalScreenshot(void*,void*,void*,void*,void*,void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret GetLocalScreenshotByHandle(void*,void*,void*,void*,void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret SetLocalScreenshotCaption(void*,void*,void*) = 0;
    virtual unknown_ret SetLocalScreenshotPrivacy(void*,void*,void*) = 0;
    virtual unknown_ret SetLocalScreenshotSpoiler(void*,void*,void*) = 0;
    virtual unknown_ret GetLocalLastScreenshot(void*,void*) = 0;
    virtual unknown_ret StartBatch(void*) = 0;
    virtual unknown_ret AddToBatch(void*) = 0;
    virtual unknown_ret UploadBatch(void*) = 0;
    virtual unknown_ret DeleteBatch(void*) = 0;
    virtual unknown_ret CancelBatch() = 0;
    virtual unknown_ret RecoverOldScreenshots() = 0;
    virtual unknown_ret GetTaggedUserCount(void*,void*) = 0;
    virtual unknown_ret GetTaggedUser(void*,void*,void*,void*) = 0;
    virtual unknown_ret GetLocation(void*,void*,void*,void*) = 0;
    virtual unknown_ret GetTaggedPublishedFileCount(void*,void*) = 0;
    virtual unknown_ret GetTaggedPublishedFile(void*,void*,void*) = 0;
    virtual unknown_ret GetScreenshotVRType(void*,void*) = 0;
    virtual unknown_ret BGetUserScreenshotDirectory(void*,void*) = 0;
};
