class IClientProductBuilderMap
{
public:
    virtual unknown_ret SignInstallScript(void*,void*,void*) = 0;
    virtual unknown_ret DRMWrap(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret CEGWrap(void*,void*,void*,void*) = 0;
};
