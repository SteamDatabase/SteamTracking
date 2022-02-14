class IClientBillingMap
{
public:
    virtual unknown_ret PurchaseWithActivationCode(void*) = 0;
    virtual unknown_ret HasActiveLicense(void*) = 0;
    virtual unknown_ret GetLicenseInfo(void*,void*,void*,void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret EnableTestLicense(void*) = 0;
    virtual unknown_ret DisableTestLicense(void*) = 0;
    virtual unknown_ret GetAppsInPackage(void*,void*,void*) = 0;
    virtual unknown_ret RequestFreeLicenseForApps(void*,void*) = 0;
};
