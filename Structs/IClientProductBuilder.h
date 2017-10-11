class IClientProductBuilder
{
public:
    virtual unknown_ret SignInstallScript(unsigned int, char const*, char const*) = 0;
    virtual unknown_ret DRMWrap(unsigned int, char const*, char const*, char const*, unsigned int) = 0;
    virtual unknown_ret CEGWrap(unsigned int, char const*, char const*, char const*) = 0;
};
