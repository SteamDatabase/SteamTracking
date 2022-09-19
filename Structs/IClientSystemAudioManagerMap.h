class IClientSystemAudioManagerMap
{
public:
    virtual unknown_ret IsInterfaceValid() = 0;
    virtual unknown_ret GetState(void*,void*) = 0;
    virtual unknown_ret UpdateSomething(void*) = 0;
};
