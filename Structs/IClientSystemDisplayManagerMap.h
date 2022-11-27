class IClientSystemDisplayManagerMap
{
public:
    virtual unknown_ret IsInterfaceValid() = 0;
    virtual unknown_ret GetState(void*) = 0;
    virtual unknown_ret SetMode(void*) = 0;
    virtual unknown_ret ClearModeOverride(void*) = 0;
    virtual unknown_ret SetCompatibilityMode(void*) = 0;
};
