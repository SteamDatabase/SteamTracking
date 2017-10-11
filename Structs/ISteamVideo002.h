class ISteamVideo002
{
public:
    virtual unknown_ret GetVideoURL(unsigned int) = 0;
    virtual unknown_ret IsBroadcasting(int*) = 0;
    virtual unknown_ret GetOPFSettings(unsigned int) = 0;
    virtual unknown_ret GetOPFStringForApp(unsigned int, char*, int*) = 0;
};
