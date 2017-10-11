class ISteamMusicRemote001
{
public:
    virtual unknown_ret RegisterSteamMusicRemote(char const*) = 0;
    virtual unknown_ret DeregisterSteamMusicRemote() = 0;
    virtual unknown_ret BIsCurrentMusicRemote() = 0;
    virtual unknown_ret BActivationSuccess(bool) = 0;
    virtual unknown_ret SetDisplayName(char const*) = 0;
    virtual unknown_ret SetPNGIcon_64x64(void*, unsigned int) = 0;
    virtual unknown_ret EnablePlayPrevious(bool) = 0;
    virtual unknown_ret EnablePlayNext(bool) = 0;
    virtual unknown_ret EnableShuffled(bool) = 0;
    virtual unknown_ret EnableLooped(bool) = 0;
    virtual unknown_ret EnableQueue(bool) = 0;
    virtual unknown_ret EnablePlaylists(bool) = 0;
    virtual unknown_ret UpdatePlaybackStatus(AudioPlayback_Status) = 0;
    virtual unknown_ret UpdateShuffled(bool) = 0;
    virtual unknown_ret UpdateLooped(bool) = 0;
    virtual unknown_ret UpdateVolume(float) = 0;
    virtual unknown_ret CurrentEntryWillChange() = 0;
    virtual unknown_ret CurrentEntryIsAvailable(bool) = 0;
    virtual unknown_ret UpdateCurrentEntryText(char const*) = 0;
    virtual unknown_ret UpdateCurrentEntryElapsedSeconds(int) = 0;
    virtual unknown_ret UpdateCurrentEntryCoverArt(void*, unsigned int) = 0;
    virtual unknown_ret CurrentEntryDidChange() = 0;
    virtual unknown_ret QueueWillChange() = 0;
    virtual unknown_ret ResetQueueEntries() = 0;
    virtual unknown_ret SetQueueEntry(int, int, char const*) = 0;
    virtual unknown_ret SetCurrentQueueEntry(int) = 0;
    virtual unknown_ret QueueDidChange() = 0;
    virtual unknown_ret PlaylistWillChange() = 0;
    virtual unknown_ret ResetPlaylistEntries() = 0;
    virtual unknown_ret SetPlaylistEntry(int, int, char const*) = 0;
    virtual unknown_ret SetCurrentPlaylistEntry(int) = 0;
    virtual unknown_ret PlaylistDidChange() = 0;
};
