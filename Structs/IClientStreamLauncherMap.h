class IClientStreamLauncherMap
{
public:
    virtual unknown_ret StartStreaming(void*) = 0;
    virtual unknown_ret StopStreaming() = 0;
};
