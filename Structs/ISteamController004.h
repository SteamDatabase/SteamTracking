class ISteamController004
{
public:
    virtual unknown_ret Init() = 0;
    virtual unknown_ret Shutdown() = 0;
    virtual unknown_ret RunFrame() = 0;
    virtual unknown_ret GetConnectedControllers(unsigned long long*) = 0;
    virtual unknown_ret ShowBindingPanel(unsigned long long) = 0;
    virtual unknown_ret GetActionSetHandle(char const*) = 0;
    virtual unknown_ret ActivateActionSet(unsigned long long, unsigned long long) = 0;
    virtual unknown_ret GetCurrentActionSet(unsigned long long) = 0;
    virtual unknown_ret GetDigitalActionHandle(char const*) = 0;
    virtual unknown_ret GetDigitalActionData(unsigned long long, unsigned long long) = 0;
    virtual unknown_ret GetDigitalActionOrigins(unsigned long long, unsigned long long, unsigned long long, EControllerActionOrigin*) = 0;
    virtual unknown_ret GetAnalogActionHandle(char const*) = 0;
    virtual unknown_ret GetAnalogActionData(unsigned long long, unsigned long long) = 0;
    virtual unknown_ret GetAnalogActionOrigins(unsigned long long, unsigned long long, unsigned long long, EControllerActionOrigin*) = 0;
    virtual unknown_ret StopAnalogActionMomentum(unsigned long long, unsigned long long) = 0;
    virtual unknown_ret TriggerHapticPulse(unsigned long long, ESteamControllerPad, unsigned short) = 0;
    virtual unknown_ret TriggerRepeatedHapticPulse(unsigned long long, ESteamControllerPad, unsigned short, unsigned short, unsigned short, unsigned int) = 0;
    virtual unknown_ret GetGamepadIndexForController(unsigned long long) = 0;
    virtual unknown_ret GetControllerForGamepadIndex(int) = 0;
    virtual unknown_ret GetMotionData(unsigned long long) = 0;
    virtual unknown_ret ShowDigitalActionOrigins(unsigned long long, unsigned long long, float, float, float) = 0;
    virtual unknown_ret ShowAnalogActionOrigins(unsigned long long, unsigned long long, float, float, float) = 0;
};
