class IClientShortcutsMap
{
public:
    virtual unknown_ret GetUniqueLocalAppId() = 0;
    virtual unknown_ret GetGameIDForAppID(void*,void*) = 0;
    virtual unknown_ret GetAppIDForGameID(void*) = 0;
    virtual unknown_ret GetDevkitAppIDByDevkitGameID(void*) = 0;
    virtual unknown_ret GetShortcutAppIds(void*) = 0;
    virtual unknown_ret GetShortcutInfoByIndex(void*,void*) = 0;
    virtual unknown_ret GetShortcutInfoByAppID(void*,void*) = 0;
    virtual unknown_ret AddShortcut(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret AddTemporaryShortcut(void*,void*,void*) = 0;
    virtual unknown_ret AddOpenVRShortcut(void*,void*,void*) = 0;
    virtual unknown_ret SetShortcutFromFullpath(void*,void*) = 0;
    virtual unknown_ret SetShortcutAppName(void*,void*) = 0;
    virtual unknown_ret SetShortcutExe(void*,void*,void*) = 0;
    virtual unknown_ret SetShortcutStartDir(void*,void*) = 0;
    virtual unknown_ret SetShortcutIcon(void*,void*) = 0;
    virtual unknown_ret SetShortcutCommandLine(void*,void*) = 0;
    virtual unknown_ret ClearShortcutUserTags(void*) = 0;
    virtual unknown_ret AddShortcutUserTag(void*,void*) = 0;
    virtual unknown_ret RemoveShortcutUserTag(void*,void*) = 0;
    virtual unknown_ret ClearAndSetShortcutUserTags(void*,void*,void*) = 0;
    virtual unknown_ret SetShortcutHidden(void*,void*) = 0;
    virtual unknown_ret SetAllowDesktopConfig(void*,void*) = 0;
    virtual unknown_ret SetAllowOverlay(void*,void*) = 0;
    virtual unknown_ret SetOpenVRShortcut(void*,void*) = 0;
    virtual unknown_ret SetDevkitShortcut(void*,void*,void*) = 0;
    virtual unknown_ret SetFlatpakAppID(void*,void*) = 0;
    virtual unknown_ret RemoveShortcut(void*) = 0;
    virtual unknown_ret RemoveAllTemporaryShortcuts() = 0;
    virtual unknown_ret LaunchShortcut(void*,void*) = 0;
};
