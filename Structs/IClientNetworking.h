class IClientNetworking
{
public:
    virtual unknown_ret SendP2PPacket(CSteamID, void const*, unsigned int, EP2PSend, int) = 0;
    virtual unknown_ret IsP2PPacketAvailable(unsigned int*, int) = 0;
    virtual unknown_ret ReadP2PPacket(void*, unsigned int, unsigned int*, CSteamID*, int) = 0;
    virtual unknown_ret AcceptP2PSessionWithUser(CSteamID) = 0;
    virtual unknown_ret CloseP2PSessionWithUser(CSteamID) = 0;
    virtual unknown_ret CloseP2PChannelWithUser(CSteamID, int) = 0;
    virtual unknown_ret GetP2PSessionState(CSteamID, P2PSessionState_t*) = 0;
    virtual unknown_ret AllowP2PPacketRelay(bool) = 0;
    virtual unknown_ret CreateListenSocket(int, SteamIPAddress_t, unsigned short, bool) = 0;
    virtual unknown_ret CreateP2PConnectionSocket(CSteamID, int, int, bool) = 0;
    virtual unknown_ret CreateConnectionSocket(SteamIPAddress_t, unsigned short, int) = 0;
    virtual unknown_ret DestroySocket(unsigned int, bool) = 0;
    virtual unknown_ret DestroyListenSocket(unsigned int, bool) = 0;
    virtual unknown_ret SendDataOnSocket(unsigned int, void*, unsigned int, bool) = 0;
    virtual unknown_ret IsDataAvailableOnSocket(unsigned int, unsigned int*) = 0;
    virtual unknown_ret RetrieveDataFromSocket(unsigned int, void*, unsigned int, unsigned int*) = 0;
    virtual unknown_ret IsDataAvailable(unsigned int, unsigned int*, unsigned int*) = 0;
    virtual unknown_ret RetrieveData(unsigned int, void*, unsigned int, unsigned int*, unsigned int*) = 0;
    virtual unknown_ret GetSocketInfo(unsigned int, CSteamID*, int*, SteamIPAddress_t*, unsigned short*) = 0;
    virtual unknown_ret GetListenSocketInfo(unsigned int, SteamIPAddress_t*, unsigned short*) = 0;
    virtual unknown_ret GetSocketConnectionType(unsigned int) = 0;
    virtual unknown_ret GetMaxPacketSize(unsigned int) = 0;
};
