typedef enum EFileIOError
{
    k_EFileIOErrorNone, // None
    k_EFileIOErrorUnknown, // Unknown
    k_EFileIOErrorFileNotFound, // File Not Found
    k_EFileIOErrorDiskFull, // Disk Full
    k_EFileIOErrorTimeout, // Timeout
    k_EFileIOErrorAccessDenied, // Access Denied
    k_EFileIOErrorInvalidHandle, // Invalid Handle
    k_EFileIOErrorSeekFailed, // Seek Failed
    k_EFileIOErrorCanceled, // Canceled
    k_EFileIOErrorReadFailed, // Read Failed
    k_EFileIOErrorWriteFailed, // Write Failed
    k_EFileIOErrorEndOfFile, // End of File
    k_EFileIOErrorDeviceNotFound, // Device Not Found
    k_EFileIOErrorDeviceCorrupt, // Device Corrupt
    k_EFileIOErrorDeviceError, // Device Error
} EFileIOError;
