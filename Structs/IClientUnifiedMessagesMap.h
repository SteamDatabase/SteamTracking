class IClientUnifiedMessagesMap
{
public:
    virtual unknown_ret SendMethod(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret GetMethodResponseInfo(void*,void*,void*,void*) = 0;
    virtual unknown_ret GetMethodResponseData(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret ReleaseMethod(void*,void*) = 0;
    virtual unknown_ret SendNotification(void*,void*,void*) = 0;
};
