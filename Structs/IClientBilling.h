class IClientBilling
{
public:
    virtual unknown_ret PurchaseWithActivationCode(char const*) = 0;
    virtual unknown_ret HasActiveLicense(unsigned int) = 0;
    virtual unknown_ret GetLicenseInfo(unsigned int, unsigned int*, unsigned int*, int*, int*, EPaymentMethod*, unsigned int*, int*, char*) = 0;
    virtual unknown_ret EnableTestLicense(unsigned int) = 0;
    virtual unknown_ret DisableTestLicense(unsigned int) = 0;
    virtual unknown_ret GetAppsInPackage(unsigned int, unsigned int*, unsigned int) = 0;
    virtual unknown_ret RequestFreeLicenseForApps(unsigned int const*, unsigned int) = 0;
};
