typedef enum EAppDownloadQueuePlacement
{
    k_EAppDownloadQueuePlacementPriorityNone = 0,
    k_EAppDownloadQueuePlacementPriorityFirst = 1,
    k_EAppDownloadQueuePlacementPriorityUserInitiated = 2,
    k_EAppDownloadQueuePlacementPriorityUp = 3,
    k_EAppDownloadQueuePlacementPriorityDown = 4,
    k_EAppDownloadQueuePlacementPriorityAutoUpdate = 5,
    k_EAppDownloadQueuePlacementPriorityPaused = 6,
    k_EAppDownloadQueuePlacementPriorityManual = 7,
} EAppDownloadQueuePlacement;
