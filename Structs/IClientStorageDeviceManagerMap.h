class IClientStorageDeviceManagerMap
{
public:
    virtual unknown_ret IsInterfaceValid() = 0;
    virtual unknown_ret GetStorageDevicesData(void*) = 0;
    virtual unknown_ret Eject(void*) = 0;
    virtual unknown_ret Format(void*) = 0;
    virtual unknown_ret Unmount(void*) = 0;
    virtual unknown_ret TrimAll() = 0;
};
