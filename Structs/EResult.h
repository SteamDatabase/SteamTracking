typedef enum EResult
{
    k_EResultOK = 1, // OK
    k_EResultFailure, // Failure
    k_EResultNoConnection, // No Connection
    k_EResultInvalidPassword = 5, // Invalid Password
    k_EResultLoggedInElsewhere, // Logged In Elsewhere
    k_EResultInvalidProtocol, // Invalid Protocol
    k_EResultInvalidParameter, // Invalid Parameter
    k_EResultFileNotFound, // File Not Found
    k_EResultBusy, // Busy
    k_EResultInvalidState, // Invalid State
    k_EResultInvalidName, // Invalid Name
    k_EResultInvalidEmail, // Invalid Email
    k_EResultDuplicateName, // Duplicate Name
    k_EResultAccessDenied, // Access Denied
    k_EResultTimeout, // Timeout
    k_EResultBanned, // Banned
    k_EResultAccountNotFound, // Account Not Found
    k_EResultInvalidSteamID, // Invalid Steam ID
    k_EResultServiceUnavailable, // Service Unavailable
    k_EResultNotLoggedOn, // Not Logged On
    k_EResultPending, // Pending
    k_EResultEncryptionFailure, // Encryption Failure
    k_EResultInsufficientPrivilege, // Insufficient Privilege
    k_EResultLimitExceeded, // Limit exceeded
    k_EResultRequestRevoked, // Request revoked
    k_EResultLicenseExpired, // License expired
    k_EResultAlreadyRedeemed, // Already Redeemed
    k_EResultDuplicatedRequest, // Duplicated Request
    k_EResultAlreadyOwned, // Already Owned
    k_EResultIPAddressNotFound, // IP Address Not Found
    k_EResultPersistenceFailed, // Persistence Failed
    k_EResultLockingFailed, // Locking Failed
    k_EResultSessionReplaced, // Session Replaced
    k_EResultConnectionFailed, // Connection Failed
    k_EResultHandshakeFailed, // Handshake Failed
    k_EResultIOOperationFailed, // I/O Operation Failed
    k_EResultDisconnectedByRemoteHost, // Disconnected By Remote Host
    k_EResultShoppingCartNotFound, // Shopping Cart Not Found
    k_EResultBlocked, // Blocked
    k_EResultIgnored, // Ignored
    k_EResultNoMatch, // No match
    k_EResultAccountDisabled, // Account Disabled
    k_EResultServiceReadOnly, // Service Read Only
    k_EResultAccountNotFeatured, // Account Not Featured
    k_EResultAdministratorOK, // Administrator OK
    k_EResultContentVersion, // Content Version
    k_EResultTryAnotherCM, // Try another CM
    k_EResultPasswordRequiredToKickSession, // Password required to kick session
    k_EResultAlreadyLoggedInElsewhere, // Already Logged In Elsewhere
    k_EResultRequestSuspendedpaused, // Request suspended/paused
    k_EResultRequestHasBeenCanceled, // Request has been canceled
    k_EResultCorruptedOrUnrecoverableDataError, // Corrupted or unrecoverable data error
    k_EResultNotEnoughFreeDiskSpace, // Not enough free disk space
    k_EResultRemoteCallFailed, // Remote call failed
    k_EResultPasswordIsNotSet, // Password is not set
    k_EResultExternalAccountIsNotLinkedToASteamAccount, // External Account is not linked to a Steam account
    k_EResultPSNTicketIsInvalid, // PSN Ticket is invalid
    k_EResultExternalAccountLinkedToAnotherSteamAccount, // External Account linked to another Steam account
    k_EResultRemoteFileConflict, // Remote File Conflict
    k_EResultIllegalPassword, // Illegal password
    k_EResultSameAsPreviousValue, // Same as previous value
    k_EResultAccountLogonDenied, // Account Logon Denied
    k_EResultCannotUseOldPassword, // Cannot Use Old Password
    k_EResultInvalidLoginAuthCode, // Invalid Login Auth Code
    k_EResultAccountLogonDeniedNoMailSent, // Account Logon Denied no mail sent
    k_EResultHardwareNotCapableOfIPT, // Hardware not capable of IPT
    k_EResultIPTInitError, // IPT init error
    k_EResultOperationFailedDueToParentalControlRestrictionsForCurrentUser, // Operation failed due to parental control restrictions for current user
    k_EResultFacebookQueryReturnedAnError, // Facebook query returned an error
    k_EResultExpiredLoginAuthCode, // Expired Login Auth Code
    k_EResultIPLoginRestrictionFailed, // IP Login Restriction Failed
    k_EResultAccountLockedDown, // Account Locked Down
    k_EResultAccountLogonDeniedVerifiedEmailRequired, // Account Logon Denied Verified Email Required
    k_EResultNoMatchingURL, // No matching URL
    k_EResultBadResponse, // Bad response
    k_EResultPasswordReentryRequired, // Password reentry required
    k_EResultValueIsOutOfRange, // Value is out of range
    k_EResultUnexpectedError, // Unexpected error
    k_EResultFeatureDisabled, // Feature Disabled
    k_EResultInvalidCEGSubmission, // Invalid CEG Submission
    k_EResultRestrictedDevice, // Restricted device
    k_EResultRegionLocked, // Region Locked
    k_EResultRateLimitExceeded, // Rate Limit Exceeded
    k_EResultAccountLogonDeniedNeedTwofactorCode, // Account logon denied, need two-factor code
    k_EResultItemOrEntryHasBeenDeleted, // Item or entry has been deleted
    k_EResultTooManyLogonAttempts, // Too many logon attempts
    k_EResultTwofactorCodeMismatch, // Two-factor code mismatch
    k_EResultTwofactorActivationCodeMismatch, // Two-factor activation code mismatch
    k_EResultAccountAssociatedWithMultiplePlayers, // Account associated with multiple players
    k_EResultNotModified, // Not Modified
    k_EResultNoMobileDeviceAvailable, // No mobile device available
    k_EResultTimeIsOutOfSync, // Time is out of sync
    k_EResultSMSCodeFailed, // SMS code failed
    k_EResultTooManyAccountsAccessThisResource, // Too many accounts access this resource
    k_EResultTooManyChangesToThisAccount, // Too many changes to this account
    k_EResultTooManyChangesToThisPhoneNumber, // Too many changes to this phone number
    k_EResultYouMustRefundThisTransactionToWallet, // You must refund this transaction to wallet
    k_EResultSendingOfAnEmailFailed, // Sending of an email failed
    k_EResultPurchaseNotYetSettled, // Purchase not yet settled
    k_EResultNeedsCaptcha, // Needs captcha
    k_EResultGameserverLoginTokenDenied, // Gameserver login token denied
    k_EResultGameserverLoginTokenOwnerDenied, // Gameserver login token owner denied
    k_EResultInvalidItemType, // Invalid item type
    k_EResultIPAddressBanned, // IP Address Banned
    k_EResultGameserverLoginTokenExpired, // Gameserver login token expired
    k_EResultInsufficientFunds, // Insufficient funds
    k_EResultTooManyPending, // Too many pending
    k_EResultNoSiteLicensesFound, // No site licenses found
    k_EResultNetworkSendExceeded, // Network send exceeded
    k_EResultAccountsNotFriends, // Accounts not friends
    k_EResultLimitedUserAccount, // Limited user account
} EResult;
