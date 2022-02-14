class IClientGameSearchMap
{
public:
    virtual unknown_ret AddGameSearchParams(void*,void*) = 0;
    virtual unknown_ret SearchForGameWithLobby(void*,void*,void*,void*) = 0;
    virtual unknown_ret SearchForGameSolo(void*,void*) = 0;
    virtual unknown_ret AcceptGame() = 0;
    virtual unknown_ret DeclineGame() = 0;
    virtual unknown_ret RetrieveConnectionDetails(void*,void*,void*,void*) = 0;
    virtual unknown_ret EndGameSearch() = 0;
    virtual unknown_ret SetGameHostParams(void*,void*) = 0;
    virtual unknown_ret SetConnectionDetails(void*,void*) = 0;
    virtual unknown_ret RequestPlayersForGame(void*,void*,void*) = 0;
    virtual unknown_ret HostConfirmGameStart(void*,void*) = 0;
    virtual unknown_ret CancelRequestPlayersForGame() = 0;
    virtual unknown_ret SubmitPlayerResult(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret EndGame(void*,void*) = 0;
};
