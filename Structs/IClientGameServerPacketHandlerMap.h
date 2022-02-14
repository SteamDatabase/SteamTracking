class IClientGameServerPacketHandlerMap
{
public:
    virtual unknown_ret HandleIncomingPacket(void*,void*,void*,void*) = 0;
    virtual unknown_ret GetNextOutgoingPacket(void*,void*,void*,void*) = 0;
};
