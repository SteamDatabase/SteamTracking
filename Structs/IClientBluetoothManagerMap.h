class IClientBluetoothManagerMap
{
public:
    virtual unknown_ret IsInterfaceValid() = 0;
    virtual unknown_ret GetBluetoothDevicesData(void*) = 0;
    virtual unknown_ret EnableAllAdapters(void*) = 0;
    virtual unknown_ret SetEnabled(void*,void*) = 0;
    virtual unknown_ret SetDiscovering(void*,void*) = 0;
    virtual unknown_ret Pair(void*,void*) = 0;
    virtual unknown_ret UnPair(void*,void*) = 0;
    virtual unknown_ret Connect(void*,void*) = 0;
    virtual unknown_ret Disconnect(void*,void*) = 0;
};
