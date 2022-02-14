class IClientSTARInternalMap
{
public:
    virtual unknown_ret SendSerializedMessage(void*,void*) = 0;
    virtual unknown_ret GetMessageResponse(void*,void*,void*,void*) = 0;
};
