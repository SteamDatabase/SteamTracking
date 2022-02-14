typedef enum EAppUpdateState
{
    k_EAppUpdateStateNone = 0,
    k_EAppUpdateStateRunning = 1,
    k_EAppUpdateStateReconfiguring = 2,
    k_EAppUpdateStateValidating = 4,
    k_EAppUpdateStateAddingFiles = 8,
    k_EAppUpdateStatePreallocating = 16,
    k_EAppUpdateStateDownloading = 32,
    k_EAppUpdateStateStaging = 64,
    k_EAppUpdateStateVerifying = 128,
    k_EAppUpdateStateCommitting = 256,
    k_EAppUpdateStateStopping = 512,
} EAppUpdateState;
