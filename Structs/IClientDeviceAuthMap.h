class IClientDeviceAuthMap
{
public:
    virtual unknown_ret AuthorizeLocalDevice(void*,void*) = 0;
    virtual unknown_ret DeauthorizeDevice(void*,void*) = 0;
    virtual unknown_ret RequestAuthorizationInfos() = 0;
    virtual unknown_ret GetDeviceAuthorizations(void*,void*,void*) = 0;
    virtual unknown_ret GetDeviceAuthorizationInfo(void*,void*,void*,void*,void*,void*,void*,void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret GetAuthorizedBorrowers(void*,void*) = 0;
    virtual unknown_ret GetLocalUsers(void*,void*) = 0;
    virtual unknown_ret GetBorrowerInfo(void*,void*,void*,void*) = 0;
    virtual unknown_ret UpdateAuthorizedBorrowers(void*,void*,void*) = 0;
    virtual unknown_ret GetSharedLibraryLockedBy(void*) = 0;
    virtual unknown_ret GetSharedLibraryOwners(void*,void*) = 0;
};
