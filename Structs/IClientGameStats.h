class IClientGameStats
{
public:
    virtual unknown_ret GetNewSession(signed char, unsigned long long, int, unsigned int) = 0;
    virtual unknown_ret EndSession(unsigned long long, unsigned int, short) = 0;
    virtual unknown_ret AddSessionAttributeInt(unsigned long long, char const*, int) = 0;
    virtual unknown_ret AddSessionAttributeString(unsigned long long, char const*, char const*) = 0;
    virtual unknown_ret AddSessionAttributeFloat(unsigned long long, char const*, float) = 0;
    virtual unknown_ret AddNewRow(unsigned long long*, unsigned long long, char const*) = 0;
    virtual unknown_ret CommitRow(unsigned long long) = 0;
    virtual unknown_ret CommitOutstandingRows(unsigned long long) = 0;
    virtual unknown_ret AddRowAttributeInt(unsigned long long, char const*, int) = 0;
    virtual unknown_ret AddRowAttributeString(unsigned long long, char const*, char const*) = 0;
    virtual unknown_ret AddRowAttributeFloat(unsigned long long, char const*, float) = 0;
    virtual unknown_ret AddSessionAttributeInt64(unsigned long long, char const*, long long) = 0;
    virtual unknown_ret AddRowAttributeInt64(unsigned long long, char const*, long long) = 0;
    virtual unknown_ret ReportString(unsigned long long, int, char const*, ...) = 0;
    virtual unknown_ret _ReportString(unsigned long long, int, char const*, int, unsigned char const*) = 0;
    virtual unknown_ret ReportStringAccumulated(unsigned long long, int, char const*, ...) = 0;
    virtual unknown_ret _ReportStringAccumulated(unsigned long long, int, char const*, int, unsigned char const*) = 0;
    virtual unknown_ret ReportBugScreenshot(unsigned long long, char const*, int, unsigned char const*) = 0;
};
