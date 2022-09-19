typedef enum EAppUpdateState
{
    k_EAppUpdateStateNone = 0,
    k_EAppUpdateStateRunningUpdate = 1,
    k_EAppUpdateStateReconfiguring = 2,
    k_EAppUpdateStateValidating = 4,
    k_EAppUpdateStatePreallocating = 16,
    k_EAppUpdateStateDownloading = 32,
    k_EAppUpdateStateStaging = 64,
    k_EAppUpdateStateVerifying = 128,
    k_EAppUpdateStateCommitting = 256,
    k_EAppUpdateStateRunningScript = 512,
    k_EAppUpdateStateStopping = 1024,
} EAppUpdateState;
