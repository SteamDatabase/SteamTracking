class IClientStreamClient
{
public:
    virtual unknown_ret Launched(CGameID) = 0;
    virtual unknown_ret FocusGained(CGameID, bool) = 0;
    virtual unknown_ret FocusLost(CGameID) = 0;
    virtual unknown_ret Finished(CGameID, EResult) = 0;
    virtual unknown_ret SaveStreamingClientConfig(char const*) = 0;
    virtual unknown_ret GetFocusInfo(CGameID*, unsigned long long*) = 0;
    virtual unknown_ret GetSystemInfo() = 0;
    virtual unknown_ret StartStreamingSession(CGameID) = 0;
    virtual unknown_ret ReportStreamingSessionEvent(CGameID, char const*) = 0;
    virtual unknown_ret FinishStreamingSession(CGameID, char const*, char const*) = 0;
};
