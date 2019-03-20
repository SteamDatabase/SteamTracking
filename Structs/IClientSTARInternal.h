class IClientSTARInternal
{
public:
    virtual unknown_ret SendSerializedMessage(void*, unsigned int) = 0;
    virtual unknown_ret GetMessageResponse(unsigned long long, void*, unsigned int) = 0;
};
