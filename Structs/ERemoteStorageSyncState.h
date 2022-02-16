typedef enum ERemoteStorageSyncState
{
    k_ERemoteStorageSyncStateDisabled = 0,
    k_ERemoteStorageSyncStateUnknown = 1,
    k_ERemoteStorageSyncStateSynchronized = 2,
    k_ERemoteStorageSyncStateInprogress = 3,
    k_ERemoteStorageSyncStateChangesincloud = 4,
    k_ERemoteStorageSyncStateChangeslocally = 5,
    k_ERemoteStorageSyncStateChangesincloudandlocally = 6,
    k_ERemoteStorageSyncStateConflictingchanges = 7,
    k_ERemoteStorageSyncStateNotinitialized = 8,
} ERemoteStorageSyncState;
