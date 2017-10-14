typedef enum EAppOwnershipFlags
{
    k_EAppOwnershipFlagsNone, // None
    k_EAppOwnershipFlagsSubscribed, // Subscribed
    k_EAppOwnershipFlagsFree, // Free
    k_EAppOwnershipFlagsRegionRestricted = 4, // Region restricted
    k_EAppOwnershipFlagsLowViolence = 8, // Low Violence
    k_EAppOwnershipFlagsInvalidPlatform = 16, // Invalid Platform
    k_EAppOwnershipFlagsBorrowed = 32, // Borrowed
    k_EAppOwnershipFlagsFreeWeekend = 64, // Free Weekend
    k_EAppOwnershipFlagsRetail = 128, // Retail
    k_EAppOwnershipFlagsLocked = 256, // Locked
    k_EAppOwnershipFlagsPending = 512, // Pending
    k_EAppOwnershipFlagsExpired = 1024, // Expired
    k_EAppOwnershipFlagsPermanent = 2048, // Permanent
    k_EAppOwnershipFlagsRecurring = 4096, // Recurring
    k_EAppOwnershipFlagsCanceled = 8192, // Canceled
    k_EAppOwnershipFlagsAutoGrant = 16384, // Auto Grant
} EAppOwnershipFlags;
