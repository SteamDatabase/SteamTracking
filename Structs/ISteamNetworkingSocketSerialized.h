class ISteamNetworkingSocketSerialized
{
public:
    virtual unknown_ret SendP2PRendezvous(CSteamID, unsigned int, void const*, unsigned int) = 0;
    virtual unknown_ret SendP2PConnectionFailure(CSteamID, unsigned int, unsigned int, char const*) = 0;
    virtual unknown_ret GetCertAsync() = 0;
};
