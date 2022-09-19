typedef enum EVerifyAppTask
{
    k_EVerifyAppTaskNone = 0,
    k_EVerifyAppTaskUpdatingAppInfo = 1,
    k_EVerifyAppTaskRunningInstallScript = 2,
    k_EVerifyAppTaskVerifyingFiles = 3,
    k_EVerifyAppTaskCompleted = 4,
    k_EVerifyAppTaskCancelled = 5,
    k_EVerifyAppTaskFailed = 6,
} EVerifyAppTask;
