class IClientSharedConnection
{
public:
    virtual unknown_ret AllocateSharedConnection() = 0;
    virtual unknown_ret ReleaseSharedConnection(unsigned int) = 0;
    virtual unknown_ret SendMessage(unsigned int, void const*, unsigned int) = 0;
    virtual unknown_ret SendMessageAndAwaitResponse(unsigned int, void const*, unsigned int) = 0;
    virtual unknown_ret RegisterEMsgHandler(unsigned int, unsigned int) = 0;
    virtual unknown_ret RegisterServiceMethodHandler(unsigned int, char const*) = 0;
    virtual unknown_ret BPopReceivedMessage(unsigned int, CUtlBuffer*, unsigned int*) = 0;
};
