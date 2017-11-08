class IClientDeviceAuth
{
public:
    virtual unknown_ret AuthorizeLocalDevice(char const*, unsigned int) = 0;
    virtual unknown_ret DeauthorizeDevice(unsigned long long) = 0;
    virtual unknown_ret RequestAuthorizationInfos() = 0;
    virtual unknown_ret GetDeviceAuthorizations(unsigned long long*, unsigned int, bool) = 0;
    virtual unknown_ret GetDeviceAuthorizationInfo(unsigned long long, unsigned int*, unsigned int*, unsigned int*, bool*, char*, int, char*, int, char*, int, unsigned int*) = 0;
    virtual unknown_ret GetAuthorizedBorrowers(unsigned int*, unsigned int) = 0;
    virtual unknown_ret GetLocalUsers(unsigned int*, unsigned int) = 0;
    virtual unknown_ret GetBorrowerInfo(unsigned int, char*, int, bool*) = 0;
    virtual unknown_ret UpdateAuthorizedBorrowers(unsigned int const*, unsigned int, bool) = 0;
    virtual unknown_ret GetSharedLibraryLockedBy(unsigned int) = 0;
    virtual unknown_ret GetSharedLibraryOwners(unsigned int*, unsigned int) = 0;
};
