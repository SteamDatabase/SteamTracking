class IClientGameNotificationsMap
{
public:
    virtual unknown_ret EnumerateNotifications(void*) = 0;
    virtual unknown_ret GetNotificationCount(void*) = 0;
    virtual unknown_ret GetNotification(void*,void*,void*) = 0;
    virtual unknown_ret RemoveSession(void*,void*,void*) = 0;
    virtual unknown_ret UpdateSession(void*,void*,void*) = 0;
};
