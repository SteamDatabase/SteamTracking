class IClientConfigStore
{
public:
    virtual unknown_ret IsSet(EConfigStore, char const*) = 0;
    virtual unknown_ret GetBool(EConfigStore, char const*, bool) = 0;
    virtual unknown_ret GetInt(EConfigStore, char const*, int) = 0;
    virtual unknown_ret GetUint64(EConfigStore, char const*, unsigned long long) = 0;
    virtual unknown_ret GetFloat(EConfigStore, char const*, float) = 0;
    virtual unknown_ret GetString(EConfigStore, char const*, char const*) = 0;
    virtual unknown_ret GetBinary(EConfigStore, char const*, unsigned char*, unsigned int) = 0;
    virtual unknown_ret GetBinary(EConfigStore, char const*, CUtlBuffer*) = 0;
    virtual unknown_ret GetBinaryWatermarked(EConfigStore, char const*, unsigned char*, unsigned int) = 0;
    virtual unknown_ret SetBool(EConfigStore, char const*, bool) = 0;
    virtual unknown_ret SetInt(EConfigStore, char const*, int) = 0;
    virtual unknown_ret SetUint64(EConfigStore, char const*, unsigned long long) = 0;
    virtual unknown_ret SetFloat(EConfigStore, char const*, float) = 0;
    virtual unknown_ret SetString(EConfigStore, char const*, char const*) = 0;
    virtual unknown_ret SetBinary(EConfigStore, char const*, unsigned char const*, unsigned int) = 0;
    virtual unknown_ret SetBinaryWatermarked(EConfigStore, char const*, unsigned char const*, unsigned int) = 0;
    virtual unknown_ret RemoveKey(EConfigStore, char const*) = 0;
    virtual unknown_ret GetKeySerialized(EConfigStore, char const*, unsigned char*, int) = 0;
    virtual unknown_ret FlushToDisk(bool) = 0;
};
