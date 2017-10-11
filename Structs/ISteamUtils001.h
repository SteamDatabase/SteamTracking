class ISteamUtils001
{
public:
    virtual unknown_ret GetSecondsSinceAppActive() = 0;
    virtual unknown_ret GetSecondsSinceComputerActive() = 0;
    virtual unknown_ret GetConnectedUniverse() = 0;
    virtual unknown_ret GetServerRealTime() = 0;
    virtual unknown_ret GetIPCountry() = 0;
    virtual unknown_ret GetImageSize(int, unsigned int*, unsigned int*) = 0;
    virtual unknown_ret GetImageRGBA(int, unsigned char*, int) = 0;
};
