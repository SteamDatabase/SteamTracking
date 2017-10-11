class ISteamVideo001
{
public:
    virtual unknown_ret GetVideoURL(unsigned int) = 0;
    virtual unknown_ret IsBroadcasting(int*) = 0;
};
