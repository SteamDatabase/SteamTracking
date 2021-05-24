class IClientSystemManager
{
public:
    virtual unknown_ret ShutdownSystem() = 0;
    virtual unknown_ret SuspendSystem() = 0;
    virtual unknown_ret RestartSystem() = 0;
};
