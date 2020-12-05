class IClientGameServerPacketHandler
{
public:
    virtual unknown_ret HandleIncomingPacket(void const*, int, unsigned int, unsigned short) = 0;
    virtual unknown_ret GetNextOutgoingPacket(void*, int, unsigned int*, unsigned short*) = 0;
};
