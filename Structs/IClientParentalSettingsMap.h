class IClientParentalSettingsMap
{
public:
    virtual unknown_ret BIsParentalLockEnabled() = 0;
    virtual unknown_ret BIsParentalLockLocked() = 0;
    virtual unknown_ret BIsAppBlocked(void*) = 0;
    virtual unknown_ret BIsAppInBlockList(void*) = 0;
    virtual unknown_ret BIsFeatureBlocked(void*) = 0;
    virtual unknown_ret BIsFeatureInBlockList(void*) = 0;
    virtual unknown_ret BGetSerializedParentalSettings(void*) = 0;
    virtual unknown_ret BGetRecoveryEmail(void*,void*) = 0;
    virtual unknown_ret BIsLockFromSiteLicense() = 0;
};
