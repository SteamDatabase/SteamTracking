class ISteamFriends005
{
public:
    virtual unknown_ret GetPersonaName() = 0;
    virtual unknown_ret SetPersonaName(char const*) = 0;
    virtual unknown_ret GetPersonaState() = 0;
    virtual unknown_ret GetFriendCount(int) = 0;
    virtual unknown_ret GetFriendByIndex(int, int) = 0;
    virtual unknown_ret GetFriendRelationship(CSteamID) = 0;
    virtual unknown_ret GetFriendPersonaState(CSteamID) = 0;
    virtual unknown_ret GetFriendPersonaName(CSteamID) = 0;
    virtual unknown_ret GetFriendAvatar(CSteamID, int) = 0;
    virtual unknown_ret GetFriendGamePlayed(CSteamID, FriendGameInfo_t*) = 0;
    virtual unknown_ret GetFriendPersonaNameHistory(CSteamID, int) = 0;
    virtual unknown_ret HasFriend(CSteamID, int) = 0;
    virtual unknown_ret GetClanCount() = 0;
    virtual unknown_ret GetClanByIndex(int) = 0;
    virtual unknown_ret GetClanName(CSteamID) = 0;
    virtual unknown_ret GetFriendCountFromSource(CSteamID) = 0;
    virtual unknown_ret GetFriendFromSourceByIndex(CSteamID, int) = 0;
    virtual unknown_ret IsUserInSource(CSteamID, CSteamID) = 0;
    virtual unknown_ret SetInGameVoiceSpeaking(CSteamID, bool) = 0;
    virtual unknown_ret ActivateGameOverlay(char const*) = 0;
    virtual unknown_ret ActivateGameOverlayToUser(char const*, CSteamID) = 0;
    virtual unknown_ret ActivateGameOverlayToWebPage(char const*) = 0;
    virtual unknown_ret ActivateGameOverlayToStore(unsigned int) = 0;
    virtual unknown_ret SetPlayedWith(CSteamID) = 0;
};
