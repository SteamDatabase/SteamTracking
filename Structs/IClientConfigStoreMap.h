class IClientConfigStoreMap
{
public:
    virtual unknown_ret IsSet(void*,void*) = 0;
    virtual unknown_ret GetBool(void*,void*,void*) = 0;
    virtual unknown_ret GetInt(void*,void*,void*) = 0;
    virtual unknown_ret GetUint64(void*,void*,void*,void*) = 0;
    virtual unknown_ret GetFloat(void*,void*,void*) = 0;
    virtual unknown_ret GetString(void*,void*,void*) = 0;
    virtual unknown_ret GetBinary(void*,void*,void*,void*) = 0;
    virtual unknown_ret GetBinary(void*,void*,void*) = 0;
    virtual unknown_ret GetBinaryWatermarked(void*,void*,void*,void*) = 0;
    virtual unknown_ret SetBool(void*,void*,void*) = 0;
    virtual unknown_ret SetInt(void*,void*,void*) = 0;
    virtual unknown_ret SetUint64(void*,void*,void*,void*) = 0;
    virtual unknown_ret SetFloat(void*,void*,void*) = 0;
    virtual unknown_ret SetString(void*,void*,void*) = 0;
    virtual unknown_ret SetBinary(void*,void*,void*,void*) = 0;
    virtual unknown_ret SetBinaryWatermarked(void*,void*,void*,void*) = 0;
    virtual unknown_ret RemoveKey(void*,void*) = 0;
    virtual unknown_ret GetKeySerialized(void*,void*,void*,void*) = 0;
    virtual unknown_ret FlushToDisk(void*) = 0;
};
