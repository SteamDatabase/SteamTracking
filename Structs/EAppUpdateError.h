typedef enum EAppUpdateError
{
    k_EAppUpdateErrorNoError = 0, // No Error
    k_EAppUpdateErrorUnspecifiedError, // Unspecified Error
    k_EAppUpdateErrorPaused, // Paused
    k_EAppUpdateErrorCanceled, // Canceled
    k_EAppUpdateErrorSuspended, // Suspended
    k_EAppUpdateErrorNoSubscription, // No subscription
    k_EAppUpdateErrorNoConnection, // No connection
    k_EAppUpdateErrorConnectionTimeout, // Connection timeout
    k_EAppUpdateErrorMissingDecryptionKey, // Missing decryption key
    k_EAppUpdateErrorMissingConfiguration, // Missing configuration
    k_EAppUpdateErrorDiskReadFailure, // Disk read failure
    k_EAppUpdateErrorDiskWriteFailure, // Disk write failure
    k_EAppUpdateErrorNotEnoughDiskSpace, // Not enough disk space
    k_EAppUpdateErrorCorruptGameFiles, // Corrupt game files
    k_EAppUpdateErrorWaitingForDisk, // Waiting for disk
    k_EAppUpdateErrorInvalidInstallPath, // Invalid install path
    k_EAppUpdateErrorApplicationRunning, // Application running
    k_EAppUpdateErrorDependencyFailure, // Dependency failure
    k_EAppUpdateErrorNotInstalled, // Not installed
    k_EAppUpdateErrorUpdateRequired, // Update required
    k_EAppUpdateErrorStillBusy, // Still busy
    k_EAppUpdateErrorNoConnectionToContentServers, // No connection to content servers
    k_EAppUpdateErrorInvalidApplicationConfiguration, // Invalid application configuration
    k_EAppUpdateErrorInvalidContentConfiguration, // Invalid content configuration
    k_EAppUpdateErrorManifestUnavailable, // Manifest unavailable
    k_EAppUpdateErrorNotReleased, // Not released
    k_EAppUpdateErrorRegionRestricted, // Region restricted
    k_EAppUpdateErrorCorruptDepotCache, // Corrupt depot cache
    k_EAppUpdateErrorMissingExecutable, // Missing executable
    k_EAppUpdateErrorInvalidPlatform, // Invalid platform
    k_EAppUpdateErrorInvalidFileSystem, // Invalid file system
    k_EAppUpdateErrorCorruptUpdateFiles, // Corrupt update files
    k_EAppUpdateErrorDownloadDisabled, // Download disabled
    k_EAppUpdateErrorSharedLibraryLocked, // Shared library locked
    k_EAppUpdateErrorPurchasePending, // Purchase pending
    k_EAppUpdateErrorOtherSessionPlaying, // Other session playing
    k_EAppUpdateErrorCorruptDownload, // Corrupt download
    k_EAppUpdateErrorCorruptDisk, // Corrupt disk
    k_EAppUpdateErrorMissingFilePermissions, // Missing file permissions
    k_EAppUpdateErrorFileLocked, // File locked
    k_EAppUpdateErrorContentUnavailable, // Content unavailable
    k_EAppUpdateErrorRequires64bitOperatingSystem, // Requires 64bit operating system
    k_EAppUpdateErrorMissingUpdateFiles, // Missing update files
    k_EAppUpdateErrorNotEnoughDiskQuota, // Not enough disk quota
    k_EAppUpdateErrorSiteLicenseLocked, // Site License locked
    k_EAppUpdateErrorParentalControlBlocked, // Parental control blocked
    k_EAppUpdateErrorCreateProcessFailed, // Create process failed
    k_EAppUpdateErrorSteamClientOutOfDate, // Steam client out of date
} EAppUpdateError;
