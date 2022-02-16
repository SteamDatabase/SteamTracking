typedef enum EStyleFlags
{
    k_EStyleFlags = 0,
    k_EStyleFlagsHover = 1,
    k_EStyleFlagsFocus = 2,
    k_EStyleFlagsActive = 4,
    k_EStyleFlagsDisabled = 8,
    k_EStyleFlagsEnabled = 16,
    k_EStyleFlagsInspect = 32,
    k_EStyleFlagsSelected = 64,
    k_EStyleFlagsDescendantfocus = 128,
    k_EStyleFlagsParentdisabled = 256,
    k_EStyleFlagsLayoutloading = 512,
    k_EStyleFlagsLayoutfailed = 1024,
    k_EStyleFlagsActivationdisabled = 2048,
} EStyleFlags;
