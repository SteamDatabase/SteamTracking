class IClientModuleManagerMap
{
public:
    virtual unknown_ret LoadModule(void*,void*,void*) = 0;
    virtual unknown_ret UnloadModule(void*) = 0;
    virtual unknown_ret CallFunction(void*,void*,void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret CallFunctionAsync(void*,void*,void*,void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret PollResponseAsync(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret SetProtonEnvironment(void*,void*) = 0;
};
