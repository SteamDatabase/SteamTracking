typedef enum ETransportError
{
    k_ETransportErrorOK = 1, // OK
    k_ETransportErrorRequestNotSent, // Request Not Sent
    k_ETransportErrorResponseNotReceived, // Response Not Received
    k_ETransportErrorIncorrectParameter, // Incorrect Parameter
    k_ETransportErrorMethodNotFound = 100, // Method Not Found
    k_ETransportErrorCallMismatch, // Call Mismatch
    k_ETransportErrorSetupError, // Setup Error
    k_ETransportErrorInternalError, // Internal Error
    k_ETransportErrorNotSupported, // Not Supported
} ETransportError;
