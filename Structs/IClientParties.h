class IClientParties
{
public:
    virtual unknown_ret GetNumActiveBeacons() = 0;
    virtual unknown_ret GetBeaconByIndex(unsigned int) = 0;
    virtual unknown_ret GetBeaconDetails(unsigned long long, CSteamID*, SteamPartyBeaconLocation_t*, char*, int) = 0;
    virtual unknown_ret JoinParty(unsigned long long) = 0;
    virtual unknown_ret GetNumAvailableBeaconLocations(unsigned int*) = 0;
    virtual unknown_ret GetAvailableBeaconLocations(SteamPartyBeaconLocation_t*, unsigned int) = 0;
    virtual unknown_ret CreateBeacon(unsigned int, SteamPartyBeaconLocation_t*, int, char const*, char const*) = 0;
    virtual unknown_ret OnReservationCompleted(unsigned long long, CSteamID) = 0;
    virtual unknown_ret CancelReservation(unsigned long long, CSteamID) = 0;
    virtual unknown_ret ChangeNumOpenSlots(unsigned long long, unsigned int) = 0;
    virtual unknown_ret DestroyBeacon(unsigned long long) = 0;
    virtual unknown_ret ReservePartySlot(unsigned int, unsigned long long) = 0;
};
