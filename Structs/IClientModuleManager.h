class IClientModuleManager
{
public:
    virtual unknown_ret LoadModule(unsigned int, void const*, unsigned int) = 0;
    virtual unknown_ret UnloadModule(unsigned int) = 0;
    virtual unknown_ret CallFunction(unsigned int, unsigned int, unsigned int, void const*, unsigned int, void*, unsigned int, unsigned int*) = 0;
    virtual unknown_ret CallFunctionAsync(unsigned int, unsigned int, unsigned int, unsigned int, unsigned int, void const*, unsigned int, unsigned int) = 0;
    virtual unknown_ret PollResponseAsync(void*, unsigned int, unsigned int*, unsigned int, unsigned int) = 0;
};
