class IClientProcessMonitorMap
{
public:
    virtual unknown_ret RegisterProcess(void*) = 0;
    virtual unknown_ret UnregisterProcess(void*) = 0;
    virtual unknown_ret TerminateProcess(void*,void*) = 0;
    virtual unknown_ret SuspendProcess(void*) = 0;
    virtual unknown_ret ResumeProcess(void*) = 0;
};
