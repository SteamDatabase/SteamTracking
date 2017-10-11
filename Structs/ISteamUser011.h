class ISteamUser011
{
public:
    virtual unknown_ret GetHSteamUser() = 0;
    virtual unknown_ret BLoggedOn() = 0;
    virtual unknown_ret GetSteamID() = 0;
    virtual unknown_ret InitiateGameConnection(void*, int, CSteamID, unsigned int, unsigned short, bool) = 0;
    virtual unknown_ret TerminateGameConnection(unsigned int, unsigned short) = 0;
    virtual unknown_ret TrackAppUsageEvent(CGameID, int, char const*) = 0;
    virtual unknown_ret GetUserDataFolder(char*, int) = 0;
    virtual unknown_ret StartVoiceRecording() = 0;
    virtual unknown_ret StopVoiceRecording() = 0;
    virtual unknown_ret GetCompressedVoice(void*, unsigned int, unsigned int*) = 0;
    virtual unknown_ret DecompressVoice(void*, unsigned int, void*, unsigned int, unsigned int*) = 0;
};
