class ISteamFriends002
{
public:
    virtual unknown_ret GetPersonaName() = 0;
    virtual unknown_ret SetPersonaName(char const*) = 0;
    virtual unknown_ret GetPersonaState() = 0;
    virtual unknown_ret SetPersonaState(EPersonaState) = 0;
    virtual unknown_ret GetFriendCount(int) = 0;
    virtual unknown_ret GetFriendByIndex(int, int) = 0;
    virtual unknown_ret GetFriendRelationship(CSteamID) = 0;
    virtual unknown_ret GetFriendPersonaState(CSteamID) = 0;
    virtual unknown_ret GetFriendPersonaName(CSteamID) = 0;
    virtual unknown_ret SetFriendRegValue(CSteamID, char const*, char const*) = 0;
    virtual unknown_ret GetFriendRegValue(CSteamID, char const*) = 0;
    virtual unknown_ret GetFriendGamePlayed(CSteamID, unsigned long long*, unsigned int*, unsigned short*, unsigned short*) = 0;
    virtual unknown_ret GetFriendPersonaNameHistory(CSteamID, int) = 0;
    virtual unknown_ret AddFriend(CSteamID) = 0;
    virtual unknown_ret RemoveFriend(CSteamID) = 0;
    virtual unknown_ret HasFriend(CSteamID, int) = 0;
    virtual unknown_ret AddFriendByName(char const*) = 0;
    virtual unknown_ret InviteFriendByEmail(char const*) = 0;
    virtual unknown_ret GetChatMessage(CSteamID, int, void*, int, EChatEntryType*) = 0;
    virtual unknown_ret SendMsgToFriend(CSteamID, EChatEntryType, void const*, int) = 0;
    virtual unknown_ret GetChatIDOfChatHistoryStart(CSteamID) = 0;
    virtual unknown_ret SetChatHistoryStart(CSteamID, int) = 0;
    virtual unknown_ret ClearChatHistory(CSteamID) = 0;
    virtual unknown_ret GetClanCount() = 0;
    virtual unknown_ret GetClanByIndex(int) = 0;
    virtual unknown_ret GetClanName(CSteamID) = 0;
    virtual unknown_ret InviteFriendToClan(CSteamID, CSteamID) = 0;
    virtual unknown_ret AcknowledgeInviteToClan(CSteamID, bool) = 0;
    virtual unknown_ret GetFriendCountFromSource(CSteamID) = 0;
    virtual unknown_ret GetFriendFromSourceByIndex(CSteamID, int) = 0;
};
