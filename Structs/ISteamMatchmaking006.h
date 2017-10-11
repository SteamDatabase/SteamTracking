class ISteamMatchmaking006
{
public:
    virtual unknown_ret GetFavoriteGameCount() = 0;
    virtual unknown_ret GetFavoriteGame(int, unsigned int*, unsigned int*, unsigned short*, unsigned short*, unsigned int*, unsigned int*) = 0;
    virtual unknown_ret AddFavoriteGame(unsigned int, unsigned int, unsigned short, unsigned short, unsigned int, unsigned int) = 0;
    virtual unknown_ret RemoveFavoriteGame(unsigned int, unsigned int, unsigned short, unsigned short, unsigned int) = 0;
    virtual unknown_ret RequestLobbyList() = 0;
    virtual unknown_ret AddRequestLobbyListFilter(char const*, char const*) = 0;
    virtual unknown_ret AddRequestLobbyListNumericalFilter(char const*, int, int) = 0;
    virtual unknown_ret AddRequestLobbyListNearValueFilter(char const*, int) = 0;
    virtual unknown_ret GetLobbyByIndex(int) = 0;
    virtual unknown_ret CreateLobby(ELobbyType) = 0;
    virtual unknown_ret JoinLobby(CSteamID) = 0;
    virtual unknown_ret LeaveLobby(CSteamID) = 0;
    virtual unknown_ret InviteUserToLobby(CSteamID, CSteamID) = 0;
    virtual unknown_ret GetNumLobbyMembers(CSteamID) = 0;
    virtual unknown_ret GetLobbyMemberByIndex(CSteamID, int) = 0;
    virtual unknown_ret GetLobbyData(CSteamID, char const*) = 0;
    virtual unknown_ret SetLobbyData(CSteamID, char const*, char const*) = 0;
    virtual unknown_ret GetLobbyMemberData(CSteamID, CSteamID, char const*) = 0;
    virtual unknown_ret SetLobbyMemberData(CSteamID, char const*, char const*) = 0;
    virtual unknown_ret SendLobbyChatMsg(CSteamID, void const*, int) = 0;
    virtual unknown_ret GetLobbyChatEntry(CSteamID, int, CSteamID*, void*, int, EChatEntryType*) = 0;
    virtual unknown_ret RequestLobbyData(CSteamID) = 0;
    virtual unknown_ret SetLobbyGameServer(CSteamID, unsigned int, unsigned short, CSteamID) = 0;
    virtual unknown_ret GetLobbyGameServer(CSteamID, unsigned int*, unsigned short*, CSteamID*) = 0;
    virtual unknown_ret SetLobbyMemberLimit(CSteamID, int) = 0;
    virtual unknown_ret GetLobbyMemberLimit(CSteamID) = 0;
    virtual unknown_ret SetLobbyType(CSteamID, ELobbyType) = 0;
    virtual unknown_ret GetLobbyOwner(CSteamID) = 0;
};
