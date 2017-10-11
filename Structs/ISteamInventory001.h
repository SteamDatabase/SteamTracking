class ISteamInventory001
{
public:
    virtual unknown_ret GetResultStatus(int) = 0;
    virtual unknown_ret GetResultItems(int, SteamItemDetails_t*, unsigned int*) = 0;
    virtual unknown_ret GetResultTimestamp(int) = 0;
    virtual unknown_ret CheckResultSteamID(int, CSteamID) = 0;
    virtual unknown_ret DestroyResult(int) = 0;
    virtual unknown_ret GetAllItems(int*) = 0;
    virtual unknown_ret GetItemsByID(int*, unsigned long long const*, unsigned int) = 0;
    virtual unknown_ret SerializeResult(int, void*, unsigned int*) = 0;
    virtual unknown_ret DeserializeResult(int*, void const*, unsigned int, bool) = 0;
    virtual unknown_ret GenerateItems(int*, int const*, unsigned int const*, unsigned int) = 0;
    virtual unknown_ret GrantPromoItems(int*) = 0;
    virtual unknown_ret AddPromoItem(int*, int) = 0;
    virtual unknown_ret AddPromoItems(int*, int const*, unsigned int) = 0;
    virtual unknown_ret ConsumeItem(int*, unsigned long long, unsigned int) = 0;
    virtual unknown_ret ExchangeItems(int*, int const*, unsigned int const*, unsigned int, unsigned long long const*, unsigned int const*, unsigned int) = 0;
    virtual unknown_ret TransferItemQuantity(int*, unsigned long long, unsigned int, unsigned long long) = 0;
    virtual unknown_ret SendItemDropHeartbeat() = 0;
    virtual unknown_ret TriggerItemDrop(int*, int) = 0;
    virtual unknown_ret TradeItems(int*, CSteamID, unsigned long long const*, unsigned int const*, unsigned int, unsigned long long const*, unsigned int const*, unsigned int) = 0;
    virtual unknown_ret LoadItemDefinitions() = 0;
    virtual unknown_ret GetItemDefinitionIDs(int*, unsigned int*) = 0;
    virtual unknown_ret GetItemDefinitionProperty(int, char const*, char*, unsigned int*) = 0;
    virtual unknown_ret RequestEligiblePromoItemDefinitionsIDs(CSteamID) = 0;
    virtual unknown_ret GetEligiblePromoItemDefinitionIDs(CSteamID, int*, unsigned int*) = 0;
};
