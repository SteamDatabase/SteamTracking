class ISteamMusic001
{
public:
    virtual unknown_ret BIsEnabled() = 0;
    virtual unknown_ret BIsPlaying() = 0;
    virtual unknown_ret GetPlaybackStatus() = 0;
    virtual unknown_ret Play() = 0;
    virtual unknown_ret Pause() = 0;
    virtual unknown_ret PlayPrevious() = 0;
    virtual unknown_ret PlayNext() = 0;
    virtual unknown_ret SetVolume(float) = 0;
    virtual unknown_ret GetVolume() = 0;
};
