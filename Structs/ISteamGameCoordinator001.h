class ISteamGameCoordinator001
{
public:
    virtual unknown_ret SendMessage(unsigned int, void const*, unsigned int) = 0;
    virtual unknown_ret IsMessageAvailable(unsigned int*) = 0;
    virtual unknown_ret RetrieveMessage(unsigned int*, void*, unsigned int, unsigned int*) = 0;
};
