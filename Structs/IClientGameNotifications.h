class IClientGameNotifications
{
public:
    virtual unknown_ret EnumerateNotifications(unsigned int) = 0;
    virtual unknown_ret GetNotificationCount(unsigned int) = 0;
    virtual unknown_ret GetNotification(unsigned int, int, GameNotification_t*) = 0;
    virtual unknown_ret RemoveSession(unsigned int, unsigned long long) = 0;
    virtual unknown_ret UpdateSession(unsigned int, unsigned long long) = 0;
};
