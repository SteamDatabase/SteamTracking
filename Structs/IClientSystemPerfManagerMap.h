class IClientSystemPerfManagerMap
{
public:
    virtual unknown_ret IsInterfaceValid() = 0;
    virtual unknown_ret GetDiagnosticInfo(void*) = 0;
    virtual unknown_ret GetSettings(void*) = 0;
    virtual unknown_ret UpdateSettings(void*) = 0;
};
