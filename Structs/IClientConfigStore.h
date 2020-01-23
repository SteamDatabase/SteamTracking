class IClientConfigStore
{
public:
    virtual unknown_ret IsSet(EConfigStore, StringView) = 0;
    virtual unknown_ret GetBool(EConfigStore, StringView, bool) = 0;
    virtual unknown_ret GetInt(EConfigStore, StringView, int) = 0;
    virtual unknown_ret GetUint64(EConfigStore, StringView, unsigned long long) = 0;
    virtual unknown_ret GetFloat(EConfigStore, StringView, float) = 0;
    virtual unknown_ret GetString(EConfigStore, StringView, StringView) = 0;
    virtual unknown_ret GetBinary(EConfigStore, StringView, unsigned char*, unsigned int) = 0;
    virtual unknown_ret GetBinary(EConfigStore, StringView, CUtlBuffer*) = 0;
    virtual unknown_ret GetBinaryWatermarked(EConfigStore, StringView, unsigned char*, unsigned int) = 0;
    virtual unknown_ret SetBool(EConfigStore, StringView, bool) = 0;
    virtual unknown_ret SetInt(EConfigStore, StringView, int) = 0;
    virtual unknown_ret SetUint64(EConfigStore, StringView, unsigned long long) = 0;
    virtual unknown_ret SetFloat(EConfigStore, StringView, float) = 0;
    virtual unknown_ret SetString(EConfigStore, StringView, StringView) = 0;
    virtual unknown_ret SetBinary(EConfigStore, StringView, unsigned char const*, unsigned int) = 0;
    virtual unknown_ret SetBinaryWatermarked(EConfigStore, StringView, unsigned char const*, unsigned int) = 0;
    virtual unknown_ret RemoveKey(EConfigStore, StringView) = 0;
    virtual unknown_ret GetKeySerialized(EConfigStore, StringView, unsigned char*, int) = 0;
    virtual unknown_ret FlushToDisk(bool) = 0;
};
