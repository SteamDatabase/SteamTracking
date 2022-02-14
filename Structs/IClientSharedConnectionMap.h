class IClientSharedConnectionMap
{
public:
    virtual unknown_ret AllocateSharedConnection() = 0;
    virtual unknown_ret ReleaseSharedConnection(void*) = 0;
    virtual unknown_ret SendMessage(void*,void*,void*) = 0;
    virtual unknown_ret SendMessageAndAwaitResponse(void*,void*,void*) = 0;
    virtual unknown_ret RegisterEMsgHandler(void*,void*) = 0;
    virtual unknown_ret RegisterServiceMethodHandler(void*,void*) = 0;
    virtual unknown_ret BPopReceivedMessage(void*,void*,void*) = 0;
};
