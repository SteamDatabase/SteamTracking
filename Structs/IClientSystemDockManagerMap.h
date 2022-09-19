class IClientSystemDockManagerMap
{
public:
    virtual unknown_ret IsInterfaceValid() = 0;
    virtual unknown_ret GetState(void*) = 0;
    virtual unknown_ret UpdateFirmware(void*) = 0;
};
