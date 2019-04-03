class ISteamNetworkingSockets003
{
public:
    virtual unknown_ret CreateListenSocketIP(SteamNetworkingIPAddr const&) = 0;
    virtual unknown_ret ConnectByIPAddress(SteamNetworkingIPAddr const&) = 0;
    virtual unknown_ret CreateListenSocketP2P(int) = 0;
    virtual unknown_ret ConnectP2P(SteamNetworkingIdentity const&, int) = 0;
    virtual unknown_ret AcceptConnection(unsigned int) = 0;
    virtual unknown_ret CloseConnection(unsigned int, int, char const*, bool) = 0;
    virtual unknown_ret CloseListenSocket(unsigned int) = 0;
    virtual unknown_ret SetConnectionUserData(unsigned int, long long) = 0;
    virtual unknown_ret GetConnectionUserData(unsigned int) = 0;
    virtual unknown_ret SetConnectionName(unsigned int, char const*) = 0;
    virtual unknown_ret GetConnectionName(unsigned int, char*, int) = 0;
    virtual unknown_ret SendMessageToConnection(unsigned int, void const*, unsigned int, int) = 0;
    virtual unknown_ret FlushMessagesOnConnection(unsigned int) = 0;
    virtual unknown_ret ReceiveMessagesOnConnection(unsigned int, SteamNetworkingMessage_t**, int) = 0;
    virtual unknown_ret ReceiveMessagesOnListenSocket(unsigned int, SteamNetworkingMessage_t**, int) = 0;
    virtual unknown_ret GetConnectionInfo(unsigned int, SteamNetConnectionInfo_t*) = 0;
    virtual unknown_ret GetQuickConnectionStatus(unsigned int, SteamNetworkingQuickConnectionStatus*) = 0;
    virtual unknown_ret GetDetailedConnectionStatus(unsigned int, char*, int) = 0;
    virtual unknown_ret GetListenSocketAddress(unsigned int, SteamNetworkingIPAddr*) = 0;
    virtual unknown_ret CreateSocketPair(unsigned int*, unsigned int*, bool, SteamNetworkingIdentity const*, SteamNetworkingIdentity const*) = 0;
    virtual unknown_ret GetIdentity(SteamNetworkingIdentity*) = 0;
    virtual unknown_ret ReceivedRelayAuthTicket(void const*, int, SteamDatagramRelayAuthTicket*) = 0;
    virtual unknown_ret FindRelayAuthTicketForServer(SteamNetworkingIdentity const&, int, SteamDatagramRelayAuthTicket*) = 0;
    virtual unknown_ret ConnectToHostedDedicatedServer(SteamNetworkingIdentity const&, int) = 0;
    virtual unknown_ret GetHostedDedicatedServerPort() = 0;
    virtual unknown_ret GetHostedDedicatedServerPOPID() = 0;
    virtual unknown_ret GetHostedDedicatedServerAddress(SteamDatagramHostedAddress*) = 0;
    virtual unknown_ret CreateHostedDedicatedServerListenSocket(int) = 0;
    virtual unknown_ret GetHostedServerAppBackendLogin(SteamDatagramHostedServerAppBackendLogin*, int*, void*) = 0;
};
