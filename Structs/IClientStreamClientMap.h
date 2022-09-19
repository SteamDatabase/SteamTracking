class IClientStreamClientMap
{
public:
    virtual unknown_ret Launched(void*) = 0;
    virtual unknown_ret FocusGained(void*,void*) = 0;
    virtual unknown_ret FocusLost(void*) = 0;
    virtual unknown_ret Finished(void*,void*) = 0;
    virtual unknown_ret BGetStreamingClientConfig(void*) = 0;
    virtual unknown_ret BSaveStreamingClientConfig(void*) = 0;
    virtual unknown_ret SetQualityOverride(void*) = 0;
    virtual unknown_ret SetBitrateOverride(void*) = 0;
    virtual unknown_ret ShowOnScreenKeyboard() = 0;
    virtual unknown_ret BQueueControllerConfigMessageForLocal(void*) = 0;
    virtual unknown_ret BGetControllerConfigMessageForRemote(void*) = 0;
    virtual unknown_ret GetSystemInfo() = 0;
    virtual unknown_ret StartStreamingSession(void*) = 0;
    virtual unknown_ret ReportStreamingSessionEvent(void*,void*) = 0;
    virtual unknown_ret FinishStreamingSession(void*,void*,void*) = 0;
};
