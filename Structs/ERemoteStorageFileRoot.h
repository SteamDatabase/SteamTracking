typedef enum ERemoteStorageFileRoot
{
    k_ERemoteStorageFileRootInvalid = -1, // Invalid
    k_ERemoteStorageFileRootDefault, // Default
    k_ERemoteStorageFileRootGameInstall, // GameInstall
    k_ERemoteStorageFileRootWinMyDocuments, // WinMyDocuments
    k_ERemoteStorageFileRootWinAppDataLocal, // WinAppDataLocal
    k_ERemoteStorageFileRootWinAppDataRoaming, // WinAppDataRoaming
    k_ERemoteStorageFileRootSteamUserBaseStorage, // SteamUserBaseStorage
    k_ERemoteStorageFileRootMacHome, // MacHome
    k_ERemoteStorageFileRootMacAppSupport, // MacAppSupport
    k_ERemoteStorageFileRootMacDocuments, // MacDocuments
    k_ERemoteStorageFileRootWinSavedGames, // WinSavedGames
    k_ERemoteStorageFileRootWinProgramData, // WinProgramData
    k_ERemoteStorageFileRootSteamCloudDocuments, // SteamCloudDocuments
    k_ERemoteStorageFileRootWinAppDataLocalLow, // WinAppDataLocalLow
    k_ERemoteStorageFileRootMacCaches, // MacCaches
    k_ERemoteStorageFileRootLinuxHome, // LinuxHome
    k_ERemoteStorageFileRootLinuxXdgDataHome, // LinuxXdgDataHome
    k_ERemoteStorageFileRootLinuxXdgConfigHome, // LinuxXdgConfigHome
} ERemoteStorageFileRoot;
