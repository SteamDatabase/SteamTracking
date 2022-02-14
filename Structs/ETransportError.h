typedef enum ETransportError
{
    k_ETransportErrorOK = 1,
    k_ETransportErrorRequestNotSent = 2,
    k_ETransportErrorResponseNotReceived = 3,
    k_ETransportErrorIncorrectParameter = 4,
    k_ETransportErrorMethodNotFound = 100,
    k_ETransportErrorCallMismatch = 101,
    k_ETransportErrorSetupError = 102,
    k_ETransportErrorInternalError = 103,
    k_ETransportErrorNotSupported = 104,
} ETransportError;
