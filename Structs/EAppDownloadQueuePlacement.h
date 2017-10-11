typedef enum EAppDownloadQueuePlacement
{
    k_EAppDownloadQueuePlacementPriorityNone = 0, // Priority None
    k_EAppDownloadQueuePlacementPriorityFirst, // Priority First
    k_EAppDownloadQueuePlacementPriorityUserInitiated, // Priority User Initiated
    k_EAppDownloadQueuePlacementPriorityUp, // Priority Up
    k_EAppDownloadQueuePlacementPriorityDown, // Priority Down
    k_EAppDownloadQueuePlacementPriorityLast, // Priority Last
    k_EAppDownloadQueuePlacementPriorityPaused, // Priority Paused
} EAppDownloadQueuePlacement;
