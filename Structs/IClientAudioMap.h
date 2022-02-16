class IClientAudioMap
{
public:
    virtual unknown_ret StartVoiceRecording() = 0;
    virtual unknown_ret StopVoiceRecording() = 0;
    virtual unknown_ret ResetVoiceRecording() = 0;
    virtual unknown_ret GetAvailableVoice(void*,void*,void*) = 0;
    virtual unknown_ret GetVoice(void*,void*,void*,void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret GetCompressedVoice(void*,void*,void*) = 0;
    virtual unknown_ret DecompressVoice(void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret GetVoiceOptimalSampleRate() = 0;
    virtual unknown_ret BAppUsesVoice(void*) = 0;
    virtual unknown_ret GetGameSystemVolume() = 0;
    virtual unknown_ret SetGameSystemVolume(void*) = 0;
};
