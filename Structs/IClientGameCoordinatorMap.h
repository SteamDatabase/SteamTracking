class IClientGameCoordinatorMap
{
public:
    virtual unknown_ret SendMessage(void*,void*,void*,void*) = 0;
    virtual unknown_ret IsMessageAvailable(void*,void*) = 0;
    virtual unknown_ret RetrieveMessage(void*,void*,void*,void*,void*) = 0;
};
