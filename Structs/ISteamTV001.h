class ISteamTV001
{
public:
    virtual unknown_ret IsBroadcasting(int*) = 0;
    virtual unknown_ret AddBroadcastGameData(char const*, char const*) = 0;
    virtual unknown_ret RemoveBroadcastGameData(char const*) = 0;
    virtual unknown_ret AddTimelineMarker(char const*, bool, unsigned char, unsigned char, unsigned char) = 0;
    virtual unknown_ret RemoveTimelineMarker() = 0;
    virtual unknown_ret AddRegion(char const*, char const*, SteamTVRegion_t const*, ESteamTVRegionBehavior) = 0;
    virtual unknown_ret RemoveRegion(unsigned int) = 0;
};
