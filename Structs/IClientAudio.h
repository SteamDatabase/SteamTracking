class IClientAudio
{
public:
    virtual unknown_ret StartVoiceRecording() = 0;
    virtual unknown_ret StopVoiceRecording() = 0;
    virtual unknown_ret ResetVoiceRecording() = 0;
    virtual unknown_ret GetAvailableVoice(unsigned int*, unsigned int*, unsigned int) = 0;
    virtual unknown_ret GetVoice(bool, void*, unsigned int, unsigned int*, bool, void*, unsigned int, unsigned int*, unsigned int) = 0;
    virtual unknown_ret GetCompressedVoice(void*, unsigned int, unsigned int*) = 0;
    virtual unknown_ret DecompressVoice(void const*, unsigned int, void*, unsigned int, unsigned int*, unsigned int) = 0;
    virtual unknown_ret GetVoiceOptimalSampleRate() = 0;
};
