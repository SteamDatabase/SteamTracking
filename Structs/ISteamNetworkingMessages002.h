class ISteamNetworkingMessages002
{
public:
    virtual unknown_ret SendMessageToUser(SteamNetworkingIdentity const&, void const*, unsigned int, int, int) = 0;
    virtual unknown_ret ReceiveMessagesOnChannel(int, SteamNetworkingMessage_t**, int) = 0;
    virtual unknown_ret AcceptSessionWithUser(SteamNetworkingIdentity const&) = 0;
    virtual unknown_ret CloseSessionWithUser(SteamNetworkingIdentity const&) = 0;
    virtual unknown_ret CloseChannelWithUser(SteamNetworkingIdentity const&, int) = 0;
    virtual unknown_ret GetSessionConnectionInfo(SteamNetworkingIdentity const&, SteamNetConnectionInfo_t*, SteamNetworkingQuickConnectionStatus*) = 0;
};
