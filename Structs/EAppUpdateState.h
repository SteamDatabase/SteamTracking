typedef enum EAppUpdateState
{
    k_EAppUpdateStateNone, // None
    k_EAppUpdateStateRunning, // Running
    k_EAppUpdateStateReconfiguring, // Reconfiguring
    k_EAppUpdateStateVerifyingFiles = 4, // VerifyingFiles
    k_EAppUpdateStateAddingFiles = 8, // AddingFiles
    k_EAppUpdateStatePreallocating = 16, // Preallocating
    k_EAppUpdateStateDownloading = 32, // Downloading
    k_EAppUpdateStateStaging = 64, // Staging
    k_EAppUpdateStateVerifyingUpdate = 128, // VerifyingUpdate
    k_EAppUpdateStateCommitting = 256, // Committing
    k_EAppUpdateStateStopping = 512, // Stopping
} EAppUpdateState;
