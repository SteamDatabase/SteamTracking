class ISteamParentalSettings001
{
public:
    virtual unknown_ret BIsParentalLockEnabled() = 0;
    virtual unknown_ret BIsParentalLockLocked() = 0;
    virtual unknown_ret BIsAppBlocked(unsigned int) = 0;
    virtual unknown_ret BIsAppInBlockList(unsigned int) = 0;
    virtual unknown_ret BIsFeatureBlocked(EParentalFeature) = 0;
    virtual unknown_ret BIsFeatureInBlockList(EParentalFeature) = 0;
};
