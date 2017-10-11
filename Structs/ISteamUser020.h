class ISteamUser020
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
    virtual unknown_ret GetAvailableVoice(unsigned int*, unsigned int*, unsigned int) = 0;
    virtual unknown_ret GetVoice(bool, void*, unsigned int, unsigned int*, bool, void*, unsigned int, unsigned int*, unsigned int) = 0;
    virtual unknown_ret DecompressVoice(void const*, unsigned int, void*, unsigned int, unsigned int*, unsigned int) = 0;
    virtual unknown_ret GetVoiceOptimalSampleRate() = 0;
    virtual unknown_ret GetAuthSessionTicket(void*, int, unsigned int*) = 0;
    virtual unknown_ret BeginAuthSession(void const*, int, CSteamID) = 0;
    virtual unknown_ret EndAuthSession(CSteamID) = 0;
    virtual unknown_ret CancelAuthTicket(unsigned int) = 0;
    virtual unknown_ret UserHasLicenseForApp(CSteamID, unsigned int) = 0;
    virtual unknown_ret BIsBehindNAT() = 0;
    virtual unknown_ret AdvertiseGame(CSteamID, unsigned int, unsigned short) = 0;
    virtual unknown_ret RequestEncryptedAppTicket(void*, int) = 0;
    virtual unknown_ret GetEncryptedAppTicket(void*, int, unsigned int*) = 0;
    virtual unknown_ret GetGameBadgeLevel(int, bool) = 0;
    virtual unknown_ret GetPlayerSteamLevel() = 0;
    virtual unknown_ret RequestStoreAuthURL(char const*) = 0;
    virtual unknown_ret BIsPhoneVerified() = 0;
    virtual unknown_ret BIsTwoFactorEnabled() = 0;
    virtual unknown_ret BIsPhoneIdentifying() = 0;
    virtual unknown_ret BIsPhoneRequiringVerification() = 0;
};
