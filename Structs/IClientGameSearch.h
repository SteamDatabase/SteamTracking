class IClientGameSearch
{
public:
    virtual unknown_ret AddGameSearchParams(char const*, char const*) = 0;
    virtual unknown_ret SearchForGameWithLobby(CSteamID, int, int) = 0;
    virtual unknown_ret SearchForGameSolo(int, int) = 0;
    virtual unknown_ret AcceptGame() = 0;
    virtual unknown_ret DeclineGame() = 0;
    virtual unknown_ret RetrieveConnectionDetails(CSteamID, char*, int) = 0;
    virtual unknown_ret EndGameSearch() = 0;
    virtual unknown_ret SetGameHostParams(char const*, char const*) = 0;
    virtual unknown_ret SetConnectionDetails(char const*, int) = 0;
    virtual unknown_ret RequestPlayersForGame(int, int, int) = 0;
    virtual unknown_ret HostConfirmGameStart(unsigned long long) = 0;
    virtual unknown_ret CancelRequestPlayersForGame() = 0;
    virtual unknown_ret SubmitPlayerResult(unsigned long long, CSteamID, EPlayerResult_t) = 0;
    virtual unknown_ret EndGame(unsigned long long) = 0;
};
