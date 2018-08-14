class IClientCompat
{
public:
    virtual unknown_ret BIsCompatLayerEnabled() = 0;
    virtual unknown_ret EnableCompat(bool) = 0;
    virtual unknown_ret GetAvailableCompatTools(CUtlString*, CUtlVector<CUtlString, CUtlMemory<CUtlString> >*) = 0;
    virtual unknown_ret SpecifyCompatTool(unsigned int, char const*, char const*, int) = 0;
    virtual unknown_ret BIsCompatibilityToolEnabled(unsigned int) = 0;
    virtual unknown_ret BGetCompatToolName(unsigned int, CUtlString*) = 0;
};
