class ISteamController001
{
public:
    virtual unknown_ret Init(char const*) = 0;
    virtual unknown_ret Shutdown() = 0;
    virtual unknown_ret RunFrame() = 0;
    virtual unknown_ret GetControllerState(unsigned int, SteamControllerState001_t*) = 0;
    virtual unknown_ret TriggerHapticPulse(unsigned int, ESteamControllerPad, unsigned short) = 0;
    virtual unknown_ret SetOverrideMode(char const*) = 0;
};
