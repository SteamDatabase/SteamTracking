class IClientPartiesMap
{
public:
    virtual unknown_ret GetNumActiveBeacons() = 0;
    virtual unknown_ret GetBeaconByIndex(void*) = 0;
    virtual unknown_ret GetBeaconDetails(void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret JoinParty(void*,void*) = 0;
    virtual unknown_ret GetNumAvailableBeaconLocations(void*) = 0;
    virtual unknown_ret GetAvailableBeaconLocations(void*,void*) = 0;
    virtual unknown_ret CreateBeacon(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret OnReservationCompleted(void*,void*,void*,void*) = 0;
    virtual unknown_ret CancelReservation(void*,void*,void*,void*) = 0;
    virtual unknown_ret ChangeNumOpenSlots(void*,void*,void*) = 0;
    virtual unknown_ret DestroyBeacon(void*,void*) = 0;
    virtual unknown_ret GetBeaconLocationData(void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret ReservePartySlot(void*,void*,void*) = 0;
};
