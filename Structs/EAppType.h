typedef enum EAppType
{
    k_EAppTypeDepotonly = -2147483648, // depotonly
    k_EAppTypeInvalid = 0, // invalid
    k_EAppTypeGame, // game
    k_EAppTypeApplication, // application
    k_EAppTypeTool = 4, // tool
    k_EAppTypeDemo = 8, // demo
    k_EAppTypeMedia = 16, // media
    k_EAppTypeDlc = 32, // dlc
    k_EAppTypeGuide = 64, // guide
    k_EAppTypeDriver = 128, // driver
    k_EAppTypeConfig = 256, // config
    k_EAppTypeHardware = 512, // hardware
    k_EAppTypeFranchise = 1024, // franchise
    k_EAppTypeVideo = 2048, // video
    k_EAppTypePlugin = 4096, // plugin
    k_EAppTypeMusic = 8192, // music
    k_EAppTypeSeries = 16384, // series
    k_EAppTypeComic = 32768, // comic
    k_EAppTypeShortcut = 1073741824, // shortcut
} EAppType;
