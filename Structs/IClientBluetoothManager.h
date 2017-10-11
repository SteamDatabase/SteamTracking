class IClientBluetoothManager
{
public:
    virtual unknown_ret SetDiscovering(bool) = 0;
    virtual unknown_ret EnumerateDevice(unsigned int) = 0;
    virtual unknown_ret GetDeviceType(char const*) = 0;
    virtual unknown_ret GetDeviceName(char const*) = 0;
    virtual unknown_ret IsConnected(char const*) = 0;
    virtual unknown_ret IsPaired(char const*) = 0;
    virtual unknown_ret Pair(char const*) = 0;
    virtual unknown_ret UnPair(char const*) = 0;
    virtual unknown_ret Connect(char const*) = 0;
    virtual unknown_ret Disconnect(char const*) = 0;
    virtual unknown_ret IsAvailable() = 0;
};
