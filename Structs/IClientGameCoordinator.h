class IClientGameCoordinator
{
public:
    virtual unknown_ret SendMessage(unsigned int, unsigned int, void const*, unsigned int) = 0;
    virtual unknown_ret IsMessageAvailable(unsigned int, unsigned int*) = 0;
    virtual unknown_ret RetrieveMessage(unsigned int, unsigned int*, void*, unsigned int, unsigned int*) = 0;
};
