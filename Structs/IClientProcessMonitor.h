class IClientProcessMonitor
{
public:
    virtual unknown_ret RegisterProcess(unsigned int) = 0;
    virtual unknown_ret UnregisterProcess(unsigned int) = 0;
    virtual unknown_ret TerminateProcess(unsigned int) = 0;
};
