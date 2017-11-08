class IClientShader
{
public:
    virtual unknown_ret StartShaderScan(unsigned int, char const*) = 0;
    virtual unknown_ret ProcessShaderCache(unsigned int) = 0;
};
