class IClientInventory
{
public:
    virtual unknown_ret GetResultStatus(int) = 0;
    virtual unknown_ret DestroyResult(int) = 0;
    virtual unknown_ret GetResultItems(int, SteamItemDetails_t*, unsigned int, unsigned int*) = 0;
    virtual unknown_ret GetResultItemProperty(int, unsigned int, char const*, char*, unsigned int, unsigned int*) = 0;
    virtual unknown_ret GetResultTimestamp(int) = 0;
    virtual unknown_ret CheckResultSteamID(int, CSteamID) = 0;
    virtual unknown_ret SerializeResult(int, void*, unsigned int, unsigned int*) = 0;
    virtual unknown_ret DeserializeResult(int*, void const*, unsigned int, bool) = 0;
    virtual unknown_ret GetAllItems(int*) = 0;
    virtual unknown_ret GetItemsByID(int*, unsigned long long const*, unsigned int) = 0;
    virtual unknown_ret GenerateItems(int*, int const*, unsigned int, unsigned int const*, unsigned int) = 0;
    virtual unknown_ret AddPromoItems(int*, int const*, unsigned int) = 0;
    virtual unknown_ret ConsumeItem(int*, unsigned long long, unsigned int) = 0;
    virtual unknown_ret ExchangeItems(int*, int const*, unsigned int, unsigned int const*, unsigned int, unsigned long long const*, unsigned int, unsigned int const*, unsigned int) = 0;
    virtual unknown_ret TransferItemQuantity(int*, unsigned long long, unsigned int, unsigned long long) = 0;
    virtual unknown_ret SendItemDropHeartbeat() = 0;
    virtual unknown_ret TriggerItemDrop(int*, int) = 0;
    virtual unknown_ret TradeItems(int*, CSteamID, unsigned long long const*, unsigned int, unsigned int const*, unsigned int, unsigned long long const*, unsigned int, unsigned int const*, unsigned int) = 0;
    virtual unknown_ret LoadItemDefinitions() = 0;
    virtual unknown_ret GetItemDefinitionIDs(int*, unsigned int, unsigned int*) = 0;
    virtual unknown_ret GetItemDefinitionProperty(int, char const*, char*, unsigned int, unsigned int*) = 0;
    virtual unknown_ret RequestEligiblePromoItemDefinitionsIDs(CSteamID) = 0;
    virtual unknown_ret GetEligiblePromoItemDefinitionIDs(CSteamID, int*, unsigned int, unsigned int*) = 0;
    virtual unknown_ret StartPurchase(int const*, unsigned int, unsigned int const*, unsigned int) = 0;
    virtual unknown_ret RequestPrices() = 0;
    virtual unknown_ret GetNumItemsWithPrices() = 0;
    virtual unknown_ret GetItemsWithPrices(int*, unsigned long long*, unsigned long long*, unsigned int) = 0;
    virtual unknown_ret GetItemPrice(int, unsigned long long*, unsigned long long*) = 0;
    virtual unknown_ret StartUpdateProperties() = 0;
    virtual unknown_ret RemoveProperty(unsigned long long, unsigned long long, char const*) = 0;
    virtual unknown_ret SetProperty(unsigned long long, unsigned long long, char const*, char const*) = 0;
    virtual unknown_ret SetProperty(unsigned long long, unsigned long long, char const*, bool) = 0;
    virtual unknown_ret SetProperty(unsigned long long, unsigned long long, char const*, long long) = 0;
    virtual unknown_ret SetProperty(unsigned long long, unsigned long long, char const*, float) = 0;
    virtual unknown_ret SubmitUpdateProperties(unsigned long long, int*) = 0;
};
