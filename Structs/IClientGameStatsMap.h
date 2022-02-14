class IClientGameStatsMap
{
public:
    virtual unknown_ret GetNewSession(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret EndSession(void*,void*,void*,void*) = 0;
    virtual unknown_ret AddSessionAttributeInt(void*,void*,void*,void*) = 0;
    virtual unknown_ret AddSessionAttributeString(void*,void*,void*,void*) = 0;
    virtual unknown_ret AddSessionAttributeFloat(void*,void*,void*) = 0;
    virtual unknown_ret AddNewRow(void*,void*,void*,void*) = 0;
    virtual unknown_ret CommitRow(void*,void*) = 0;
    virtual unknown_ret CommitOutstandingRows(void*,void*) = 0;
    virtual unknown_ret AddRowAttributeInt(void*,void*,void*,void*) = 0;
    virtual unknown_ret AddRowAttributeString(void*,void*,void*,void*) = 0;
    virtual unknown_ret AddRowAttributeFloat(void*,void*,void*) = 0;
    virtual unknown_ret AddSessionAttributeInt64(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret AddRowAttributeInt64(void*,void*,void*,void*,void*) = 0;
};
