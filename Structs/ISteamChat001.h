class ISteamChat001
{
public:
    virtual unknown_ret RequestSteamGroupChatMessageNotifications(unsigned long long, unsigned long long, EChatNotificationFormat) = 0;
    virtual unknown_ret RequestSteamGroupChatMessageHistory(unsigned long long, unsigned long long, unsigned int) = 0;
    virtual unknown_ret RequestSendSteamGroupChatMessage(unsigned long long, unsigned long long, unsigned int, char const*) = 0;
};
