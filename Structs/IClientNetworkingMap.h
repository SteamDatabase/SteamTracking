class IClientNetworkingMap
{
public:
    virtual unknown_ret SendP2PPacket(void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret IsP2PPacketAvailable(void*,void*) = 0;
    virtual unknown_ret ReadP2PPacket(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret AcceptP2PSessionWithUser(void*,void*) = 0;
    virtual unknown_ret CloseP2PSessionWithUser(void*,void*) = 0;
    virtual unknown_ret CloseP2PChannelWithUser(void*,void*,void*) = 0;
    virtual unknown_ret GetP2PSessionState(void*,void*,void*) = 0;
    virtual unknown_ret AllowP2PPacketRelay(void*) = 0;
    virtual unknown_ret CreateListenSocket(void*,void*,void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret CreateP2PConnectionSocket(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret CreateConnectionSocket(void*,void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret DestroySocket(void*,void*) = 0;
    virtual unknown_ret DestroyListenSocket(void*,void*) = 0;
    virtual unknown_ret SendDataOnSocket(void*,void*,void*,void*) = 0;
    virtual unknown_ret IsDataAvailableOnSocket(void*,void*) = 0;
    virtual unknown_ret RetrieveDataFromSocket(void*,void*,void*,void*) = 0;
    virtual unknown_ret IsDataAvailable(void*,void*,void*) = 0;
    virtual unknown_ret RetrieveData(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret GetSocketInfo(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret GetListenSocketInfo(void*,void*,void*) = 0;
    virtual unknown_ret GetSocketConnectionType(void*) = 0;
    virtual unknown_ret GetMaxPacketSize(void*) = 0;
};
