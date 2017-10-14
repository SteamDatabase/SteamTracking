typedef enum EHTTPStatusCode
{
    k_EHTTPStatusCodeInvalid, // Invalid
    k_EHTTPStatusCodeContinue = 100, // Continue
    k_EHTTPStatusCodeSwitchingProtocols, // Switching Protocols
    k_EHTTPStatusCodeOK = 200, // OK
    k_EHTTPStatusCodeCreated, // Created
    k_EHTTPStatusCodeAccepted, // Accepted
    k_EHTTPStatusCodeNonAuthoritativeInformation, // Non-Authoritative Information
    k_EHTTPStatusCodeNoContent, // No Content
    k_EHTTPStatusCodeResetContent, // Reset Content
    k_EHTTPStatusCodePartialContent, // Partial Content
    k_EHTTPStatusCodeMultipleChoices = 300, // Multiple Choices
    k_EHTTPStatusCodeMovedPermanently, // Moved Permanently
    k_EHTTPStatusCodeFound, // Found
    k_EHTTPStatusCodeSeeOther, // See Other
    k_EHTTPStatusCodeNotModified, // Not Modified
    k_EHTTPStatusCodeUseProxy, // Use Proxy
    k_EHTTPStatusCodeTemporaryRedirect = 307, // Temporary Redirect
    k_EHTTPStatusCodeBadRequest = 400, // Bad Request
    k_EHTTPStatusCodeUnauthorized, // Unauthorized
    k_EHTTPStatusCodePaymentRequired, // Payment Required
    k_EHTTPStatusCodeForbidden, // Forbidden
    k_EHTTPStatusCodeNotFound, // Not Found
    k_EHTTPStatusCodeMethodNotAllowed, // Method Not Allowed
    k_EHTTPStatusCodeNotAcceptable, // Not Acceptable
    k_EHTTPStatusCodeProxyAuthenticationRequired, // Proxy Authentication Required
    k_EHTTPStatusCodeRequestTimeout, // Request Timeout
    k_EHTTPStatusCodeConflict, // Conflict
    k_EHTTPStatusCodeGone, // Gone
    k_EHTTPStatusCodeLengthRequired, // Length Required
    k_EHTTPStatusCodePreconditionFailed, // Precondition Failed
    k_EHTTPStatusCodeRequestEntityTooLarge, // Request Entity Too Large
    k_EHTTPStatusCodeRequestURITooLarge, // Request-URI Too Large
    k_EHTTPStatusCodeUnsupportedMediaType, // Unsupported Media Type
    k_EHTTPStatusCodeRequestedRangeNotSatisfiable, // Requested range not satisfiable
    k_EHTTPStatusCodeExpectationFailed, // Expectation Failed
    k_EHTTPStatusCodeUnknownHTTP4xx, // Unknown HTTP 4xx
    k_EHTTPStatusCodeTooManyRequests = 429, // Too Many Requests
    k_EHTTPStatusCodeInternalServerError = 500, // Internal Server Error
    k_EHTTPStatusCodeNotImplemented, // Not Implemented
    k_EHTTPStatusCodeBadGateway, // Bad Gateway
    k_EHTTPStatusCodeServiceUnavailable, // Service Unavailable
    k_EHTTPStatusCodeGatewayTimeout, // Gateway Time-out
    k_EHTTPStatusCodeHTTPVersionNotSupported, // HTTP Version not supported
    k_EHTTPStatusCodeUnknownHTTP5xx = 599, // Unknown HTTP 5xx
} EHTTPStatusCode;
