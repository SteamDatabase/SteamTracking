/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8424875";
(() => {
  "use strict";
  function e(e) {
    if (!t() || !window.document.cookie) return null;
    let s = document.cookie.match("(^|; )" + e + "=([^;]*)");
    return s && s[2] ? decodeURIComponent(s[2]) : null;
  }
  function t() {
    return !!window.document;
  }
  const s = {
    EUNIVERSE: 0,
    WEB_UNIVERSE: "",
    LANGUAGE: "english",
    SUPPORTED_LANGUAGES: [],
    COUNTRY: "",
    AVATAR_BASE_URL: "",
    MEDIA_CDN_COMMUNITY_URL: "",
    MEDIA_CDN_URL: "",
    CLAN_CDN_ASSET_URL: "",
    COMMUNITY_CDN_URL: "",
    COMMUNITY_CDN_ASSET_URL: "",
    BASE_URL_SHARED_CDN: "",
    STORE_CDN_URL: "",
    PUBLIC_SHARED_URL: "",
    COMMUNITY_BASE_URL: "",
    CHAT_BASE_URL: "",
    STORE_BASE_URL: "",
    STORE_CHECKOUT_BASE_URL: "",
    LOGIN_BASE_URL: "",
    SUPPORT_BASE_URL: "",
    STORE_ICON_BASE_URL: "",
    IMG_URL: "",
    STEAMTV_BASE_URL: "",
    HELP_BASE_URL: "",
    PARTNER_BASE_URL: "",
    STATS_BASE_URL: "",
    INTERNAL_STATS_BASE_URL: "",
    BASE_URL_STORE_CDN_ASSETS: "",
    IN_CLIENT: !1,
    USE_POPUPS: !1,
    IN_MOBILE: !1,
    IN_MOBILE_WEBVIEW: !1,
    IN_TENFOOT: !1,
    PLATFORM: "",
    SNR: "",
    LAUNCHER_TYPE: 0,
    EREALM: 0,
    IN_CHROMEOS: !1,
    TESLA: !1,
    LOCAL_HOSTNAME: "",
    WEBAPI_BASE_URL: "",
    TOKEN_URL: "",
    BUILD_TIMESTAMP: 0,
    PAGE_TIMESTAMP: 0,
    FROM_WEB: !1,
    WEBSITE_ID: "Unknown",
    get SESSIONID() {
      return (function () {
        if (!t()) return _ || (_ = E()), _;
        let s = e("sessionid");
        s || (s = E());
        return s;
      })();
    },
    FRIENDSUI_BETA: !1,
    STEAM_TV: !1,
    DEV_MODE: !1,
    IN_STEAMUI: !1,
    IN_GAMEPADUI: !1,
    IN_STEAMUI_SHARED_CONTEXT: !1,
    DECK_DISPLAY_MODE: !1,
    ON_DECK: !1,
    ON_STEAMOS: !1,
    IN_GAMESCOPE: !1,
    IN_LOGIN: !1,
    IN_LOGIN_REFRESH: !1,
    USE_LONGEST_LOC_STRING: !1,
    SILENT_STARTUP: !1,
  };
  const n = {
      logged_in: !1,
      steamid: "",
      accountid: 0,
      account_name: "",
      token: void 0,
      token_use_id: void 0,
      webapi_token: "",
      authwgtoken: "",
      is_support: !1,
      is_limited: !1,
      is_partner_member: !1,
      short_url: "",
      country_code: "",
    },
    i = { steamid: "", clanid: 0, listid: 0 },
    l = {
      CLANSTEAMID: "",
      CLANACCOUNTID: 0,
      APPID: 0,
      VANITY_ID: "",
      IS_CREATOR_HOME: !1,
      IS_CURATOR: !1,
      IS_OGG: !1,
      CAN_UPLOAD_IMAGES: !1,
      APP_NAME: "",
      HEADER_IMAGE: "",
      HAS_ADULT_CONTENT: !1,
      HAS_ADULT_CONTENT_SEX: !1,
      HAS_ADULT_CONTENT_VIOLENCE: !1,
      IS_VALVE_GROUP: !1,
      IS_ALLOWED_SC: !1,
    },
    o = { ANNOUNCEMENT_GID: "", TAKEOVER_ANNOUNCEMENT_GID: "" },
    u = "webui_config";
  let _;
  function E() {
    let e = (function () {
      let e = "";
      for (let n = 0; n < 24; n++)
        e += ((t = 0),
        (s = 35),
        (t = Math.ceil(t)),
        (s = Math.floor(s)),
        Math.floor(Math.random() * (s - t + 1)) + t).toString(36);
      var t, s;
      return e;
    })();
    return (
      (function (e, s, n, i) {
        if (!t()) return;
        i || (i = "/");
        let l = "";
        if (void 0 !== n && n) {
          let e = new Date();
          e.setTime(e.getTime() + 864e5 * n),
            (l = "; expires=" + e.toUTCString());
        }
        document.cookie =
          encodeURIComponent(e) +
          "=" +
          encodeURIComponent(s) +
          l +
          ";path=" +
          i;
      })("sessionid", e, 0),
      e
    );
  }
  function c(_ = u) {
    const E = {},
      c = r("config", _);
    c && (delete c.SESSIONID, Object.assign(s, c), (E.config = !0));
    const R = r("userinfo", _);
    R &&
      (Object.assign(n, R),
      (E.userConfig = !0),
      n.is_support &&
        (function () {
          let s = null;
          t() && (s = e(a));
          return Boolean(s && 1 === Number.parseInt(s));
        })() &&
        (n.is_support = !1));
    const d = r("broadcast", _);
    d && (Object.assign(i, d), (E.broadcastConfig = !0));
    const k = r("community", _);
    k && (Object.assign(l, k), (E.communityConfig = !0));
    const m = r("event", _);
    return m && (Object.assign(o, m), (E.eventConfig = !0)), E;
  }
  function r(e, t = u) {
    return R(e, t, !0);
  }
  function R(e, t = u, s) {
    let i;
    if (
      ((i =
        "string" == typeof t
          ? !{
              NODE_ENV: "production",
              STEAM_BUILD: "buildbot",
              VALVE_BUILD: "false",
            }.MOBILE_BUILD && document.getElementById(t)
          : t),
      i)
    )
      try {
        if (i.hasAttribute("data-" + e)) {
          return JSON.parse(i.getAttribute("data-" + e));
        }
        return null;
      } catch (e) {
        console.error(
          "Failed to parse config for " +
            n.steamid +
            " (" +
            window.location.href +
            ")",
          e,
        );
      }
    else s && console.error("Missing config element #", t);
  }
  const a = "presentation_mode";
  var d;
  !(function (e) {
    (e[(e.k_EResultOK = 1)] = "k_EResultOK"),
      (e[(e.k_EResultFail = 2)] = "k_EResultFail"),
      (e[(e.k_EResultNoConnection = 3)] = "k_EResultNoConnection"),
      (e[(e.k_EResultInvalidPassword = 5)] = "k_EResultInvalidPassword"),
      (e[(e.k_EResultLoggedInElsewhere = 6)] = "k_EResultLoggedInElsewhere"),
      (e[(e.k_EResultInvalidProtocolVer = 7)] = "k_EResultInvalidProtocolVer"),
      (e[(e.k_EResultInvalidParam = 8)] = "k_EResultInvalidParam"),
      (e[(e.k_EResultFileNotFound = 9)] = "k_EResultFileNotFound"),
      (e[(e.k_EResultBusy = 10)] = "k_EResultBusy"),
      (e[(e.k_EResultInvalidState = 11)] = "k_EResultInvalidState"),
      (e[(e.k_EResultInvalidName = 12)] = "k_EResultInvalidName"),
      (e[(e.k_EResultInvalidEmail = 13)] = "k_EResultInvalidEmail"),
      (e[(e.k_EResultDuplicateName = 14)] = "k_EResultDuplicateName"),
      (e[(e.k_EResultAccessDenied = 15)] = "k_EResultAccessDenied"),
      (e[(e.k_EResultTimeout = 16)] = "k_EResultTimeout"),
      (e[(e.k_EResultBanned = 17)] = "k_EResultBanned"),
      (e[(e.k_EResultAccountNotFound = 18)] = "k_EResultAccountNotFound"),
      (e[(e.k_EResultInvalidSteamID = 19)] = "k_EResultInvalidSteamID"),
      (e[(e.k_EResultServiceUnavailable = 20)] = "k_EResultServiceUnavailable"),
      (e[(e.k_EResultNotLoggedOn = 21)] = "k_EResultNotLoggedOn"),
      (e[(e.k_EResultPending = 22)] = "k_EResultPending"),
      (e[(e.k_EResultEncryptionFailure = 23)] = "k_EResultEncryptionFailure"),
      (e[(e.k_EResultInsufficientPrivilege = 24)] =
        "k_EResultInsufficientPrivilege"),
      (e[(e.k_EResultLimitExceeded = 25)] = "k_EResultLimitExceeded"),
      (e[(e.k_EResultRevoked = 26)] = "k_EResultRevoked"),
      (e[(e.k_EResultExpired = 27)] = "k_EResultExpired"),
      (e[(e.k_EResultAlreadyRedeemed = 28)] = "k_EResultAlreadyRedeemed"),
      (e[(e.k_EResultDuplicateRequest = 29)] = "k_EResultDuplicateRequest"),
      (e[(e.k_EResultAlreadyOwned = 30)] = "k_EResultAlreadyOwned"),
      (e[(e.k_EResultIPNotFound = 31)] = "k_EResultIPNotFound"),
      (e[(e.k_EResultPersistFailed = 32)] = "k_EResultPersistFailed"),
      (e[(e.k_EResultLockingFailed = 33)] = "k_EResultLockingFailed"),
      (e[(e.k_EResultLogonSessionReplaced = 34)] =
        "k_EResultLogonSessionReplaced"),
      (e[(e.k_EResultConnectFailed = 35)] = "k_EResultConnectFailed"),
      (e[(e.k_EResultHandshakeFailed = 36)] = "k_EResultHandshakeFailed"),
      (e[(e.k_EResultIOFailure = 37)] = "k_EResultIOFailure"),
      (e[(e.k_EResultRemoteDisconnect = 38)] = "k_EResultRemoteDisconnect"),
      (e[(e.k_EResultShoppingCartNotFound = 39)] =
        "k_EResultShoppingCartNotFound"),
      (e[(e.k_EResultBlocked = 40)] = "k_EResultBlocked"),
      (e[(e.k_EResultIgnored = 41)] = "k_EResultIgnored"),
      (e[(e.k_EResultNoMatch = 42)] = "k_EResultNoMatch"),
      (e[(e.k_EResultAccountDisabled = 43)] = "k_EResultAccountDisabled"),
      (e[(e.k_EResultServiceReadOnly = 44)] = "k_EResultServiceReadOnly"),
      (e[(e.k_EResultAccountNotFeatured = 45)] = "k_EResultAccountNotFeatured"),
      (e[(e.k_EResultAdministratorOK = 46)] = "k_EResultAdministratorOK"),
      (e[(e.k_EResultContentVersion = 47)] = "k_EResultContentVersion"),
      (e[(e.k_EResultTryAnotherCM = 48)] = "k_EResultTryAnotherCM"),
      (e[(e.k_EResultPasswordRequiredToKickSession = 49)] =
        "k_EResultPasswordRequiredToKickSession"),
      (e[(e.k_EResultAlreadyLoggedInElsewhere = 50)] =
        "k_EResultAlreadyLoggedInElsewhere"),
      (e[(e.k_EResultSuspended = 51)] = "k_EResultSuspended"),
      (e[(e.k_EResultCancelled = 52)] = "k_EResultCancelled"),
      (e[(e.k_EResultDataCorruption = 53)] = "k_EResultDataCorruption"),
      (e[(e.k_EResultDiskFull = 54)] = "k_EResultDiskFull"),
      (e[(e.k_EResultRemoteCallFailed = 55)] = "k_EResultRemoteCallFailed"),
      (e[(e.k_EResultPasswordUnset = 56)] = "k_EResultPasswordUnset"),
      (e[(e.k_EResultExternalAccountUnlinked = 57)] =
        "k_EResultExternalAccountUnlinked"),
      (e[(e.k_EResultPSNTicketInvalid = 58)] = "k_EResultPSNTicketInvalid"),
      (e[(e.k_EResultExternalAccountAlreadyLinked = 59)] =
        "k_EResultExternalAccountAlreadyLinked"),
      (e[(e.k_EResultRemoteFileConflict = 60)] = "k_EResultRemoteFileConflict"),
      (e[(e.k_EResultIllegalPassword = 61)] = "k_EResultIllegalPassword"),
      (e[(e.k_EResultSameAsPreviousValue = 62)] =
        "k_EResultSameAsPreviousValue"),
      (e[(e.k_EResultAccountLogonDenied = 63)] = "k_EResultAccountLogonDenied"),
      (e[(e.k_EResultCannotUseOldPassword = 64)] =
        "k_EResultCannotUseOldPassword"),
      (e[(e.k_EResultInvalidLoginAuthCode = 65)] =
        "k_EResultInvalidLoginAuthCode"),
      (e[(e.k_EResultAccountLogonDeniedNoMail = 66)] =
        "k_EResultAccountLogonDeniedNoMail"),
      (e[(e.k_EResultHardwareNotCapableOfIPT = 67)] =
        "k_EResultHardwareNotCapableOfIPT"),
      (e[(e.k_EResultIPTInitError = 68)] = "k_EResultIPTInitError"),
      (e[(e.k_EResultParentalControlRestricted = 69)] =
        "k_EResultParentalControlRestricted"),
      (e[(e.k_EResultFacebookQueryError = 70)] = "k_EResultFacebookQueryError"),
      (e[(e.k_EResultExpiredLoginAuthCode = 71)] =
        "k_EResultExpiredLoginAuthCode"),
      (e[(e.k_EResultIPLoginRestrictionFailed = 72)] =
        "k_EResultIPLoginRestrictionFailed"),
      (e[(e.k_EResultAccountLockedDown = 73)] = "k_EResultAccountLockedDown"),
      (e[(e.k_EResultAccountLogonDeniedVerifiedEmailRequired = 74)] =
        "k_EResultAccountLogonDeniedVerifiedEmailRequired"),
      (e[(e.k_EResultNoMatchingURL = 75)] = "k_EResultNoMatchingURL"),
      (e[(e.k_EResultBadResponse = 76)] = "k_EResultBadResponse"),
      (e[(e.k_EResultRequirePasswordReEntry = 77)] =
        "k_EResultRequirePasswordReEntry"),
      (e[(e.k_EResultValueOutOfRange = 78)] = "k_EResultValueOutOfRange"),
      (e[(e.k_EResultUnexpectedError = 79)] = "k_EResultUnexpectedError"),
      (e[(e.k_EResultDisabled = 80)] = "k_EResultDisabled"),
      (e[(e.k_EResultInvalidCEGSubmission = 81)] =
        "k_EResultInvalidCEGSubmission"),
      (e[(e.k_EResultRestrictedDevice = 82)] = "k_EResultRestrictedDevice"),
      (e[(e.k_EResultRegionLocked = 83)] = "k_EResultRegionLocked"),
      (e[(e.k_EResultRateLimitExceeded = 84)] = "k_EResultRateLimitExceeded"),
      (e[(e.k_EResultAccountLoginDeniedNeedTwoFactor = 85)] =
        "k_EResultAccountLoginDeniedNeedTwoFactor"),
      (e[(e.k_EResultItemDeleted = 86)] = "k_EResultItemDeleted"),
      (e[(e.k_EResultAccountLoginDeniedThrottle = 87)] =
        "k_EResultAccountLoginDeniedThrottle"),
      (e[(e.k_EResultTwoFactorCodeMismatch = 88)] =
        "k_EResultTwoFactorCodeMismatch"),
      (e[(e.k_EResultTwoFactorActivationCodeMismatch = 89)] =
        "k_EResultTwoFactorActivationCodeMismatch"),
      (e[(e.k_EResultAccountAssociatedToMultiplePartners = 90)] =
        "k_EResultAccountAssociatedToMultiplePartners"),
      (e[(e.k_EResultNotModified = 91)] = "k_EResultNotModified"),
      (e[(e.k_EResultNoMobileDevice = 92)] = "k_EResultNoMobileDevice"),
      (e[(e.k_EResultTimeNotSynced = 93)] = "k_EResultTimeNotSynced"),
      (e[(e.k_EResultSmsCodeFailed = 94)] = "k_EResultSmsCodeFailed"),
      (e[(e.k_EResultAccountLimitExceeded = 95)] =
        "k_EResultAccountLimitExceeded"),
      (e[(e.k_EResultAccountActivityLimitExceeded = 96)] =
        "k_EResultAccountActivityLimitExceeded"),
      (e[(e.k_EResultPhoneActivityLimitExceeded = 97)] =
        "k_EResultPhoneActivityLimitExceeded"),
      (e[(e.k_EResultRefundToWallet = 98)] = "k_EResultRefundToWallet"),
      (e[(e.k_EResultEmailSendFailure = 99)] = "k_EResultEmailSendFailure"),
      (e[(e.k_EResultNotSettled = 100)] = "k_EResultNotSettled"),
      (e[(e.k_EResultNeedCaptcha = 101)] = "k_EResultNeedCaptcha"),
      (e[(e.k_EResultGSLTDenied = 102)] = "k_EResultGSLTDenied"),
      (e[(e.k_EResultGSOwnerDenied = 103)] = "k_EResultGSOwnerDenied"),
      (e[(e.k_EResultInvalidItemType = 104)] = "k_EResultInvalidItemType"),
      (e[(e.k_EResultIPBanned = 105)] = "k_EResultIPBanned"),
      (e[(e.k_EResultGSLTExpired = 106)] = "k_EResultGSLTExpired"),
      (e[(e.k_EResultInsufficientFunds = 107)] = "k_EResultInsufficientFunds"),
      (e[(e.k_EResultTooManyPending = 108)] = "k_EResultTooManyPending"),
      (e[(e.k_EResultNoSiteLicensesFound = 109)] =
        "k_EResultNoSiteLicensesFound"),
      (e[(e.k_EResultWGNetworkSendExceeded = 110)] =
        "k_EResultWGNetworkSendExceeded"),
      (e[(e.k_EResultAccountNotFriends = 111)] = "k_EResultAccountNotFriends"),
      (e[(e.k_EResultLimitedUserAccount = 112)] =
        "k_EResultLimitedUserAccount"),
      (e[(e.k_EResultCantRemoveItem = 113)] = "k_EResultCantRemoveItem"),
      (e[(e.k_EResultAccountDeleted = 114)] = "k_EResultAccountDeleted"),
      (e[(e.k_EResultExistingUserCancelledLicense = 115)] =
        "k_EResultExistingUserCancelledLicense"),
      (e[(e.k_EResultCommunityCooldown = 116)] = "k_EResultCommunityCooldown"),
      (e[(e.k_EResultNoLauncherSpecified = 117)] =
        "k_EResultNoLauncherSpecified"),
      (e[(e.k_EResultMustAgreeToSSA = 118)] = "k_EResultMustAgreeToSSA"),
      (e[(e.k_EResultLauncherMigrated = 119)] = "k_EResultLauncherMigrated"),
      (e[(e.k_EResultSteamRealmMismatch = 120)] =
        "k_EResultSteamRealmMismatch"),
      (e[(e.k_EResultInvalidSignature = 121)] = "k_EResultInvalidSignature"),
      (e[(e.k_EResultParseFailure = 122)] = "k_EResultParseFailure"),
      (e[(e.k_EResultNoVerifiedPhone = 123)] = "k_EResultNoVerifiedPhone"),
      (e[(e.k_EResultInsufficientBattery = 124)] =
        "k_EResultInsufficientBattery"),
      (e[(e.k_EResultChargerRequired = 125)] = "k_EResultChargerRequired"),
      (e[(e.k_EResultCachedCredentialInvalid = 126)] =
        "k_EResultCachedCredentialInvalid"),
      (e[(e.K_EResultPhoneNumberIsVOIP = 127)] = "K_EResultPhoneNumberIsVOIP");
  })(d || (d = {}));
  let k = { success: !0, result: d.k_EResultOK };
  class m {
    constructor() {
      (this.m_mapWaitingCallbacks = new Map()),
        (this.m_iCallSeq = 1),
        (this.m_bReady = !1),
        (this.m_bClientConnectionFailed = !1),
        (this.m_bSecurityException = !1),
        (this.m_ClientInfo = {
          ulVersion: "",
          bFriendsUIEnabled: !1,
          unAccountID: 0,
          rgSupportedMessages: [],
        });
    }
    get ClientInfo() {
      return this.m_ClientInfo;
    }
    get ready() {
      return this.m_bReady;
    }
    get browser_supported() {
      return !this.m_bSecurityException;
    }
    get connected_to_client() {
      return this.m_socket && this.m_socket.readyState == WebSocket.OPEN;
    }
    SendMsgAndAwaitResponse(e) {
      return new Promise((t, s) => {
        let n = this.m_iCallSeq++;
        this.BSendMsg(e, n)
          ? this.m_mapWaitingCallbacks.set(n, {
              iSeq: n,
              fnCallback: t,
              fnError: s,
            })
          : s();
      });
    }
    BSendMsg(e, t) {
      if (!this.m_socket || this.m_socket.readyState != WebSocket.OPEN)
        return !1;
      let i = Object.assign({}, e, {
        universe: s.EUNIVERSE,
        accountid: n.accountid,
      });
      void 0 !== t && (i.sequenceid = t);
      try {
        return this.m_socket.send(JSON.stringify(i)), !0;
      } catch (e) {
        return !1;
      }
    }
    OnSocketMessage(e) {
      try {
        let t = JSON.parse(e.data);
        if (t.sequenceid) {
          let e = this.m_mapWaitingCallbacks.get(t.sequenceid);
          if (e)
            return (
              this.m_mapWaitingCallbacks.delete(t.sequenceid),
              void e.fnCallback(t)
            );
        }
      } catch (e) {
        console.error("exception parsing response", e);
      }
    }
    Connect() {
      if (this.m_bReady && this.m_socket.readyState == WebSocket.OPEN)
        return Promise.resolve();
      if (this.m_promiseConnect) return this.m_promiseConnect;
      let e = new Promise((e, t) => {
        try {
          this.m_socket = new WebSocket("ws://127.0.0.1:27060/clientsocket/");
        } catch (e) {
          return (this.m_bSecurityException = !0), void t(e);
        }
        (this.m_socket.onerror = (e) => {
          t();
        }),
          (this.m_socket.onmessage = this.OnSocketMessage.bind(this)),
          (this.m_socket.onopen = () => {
            this.SendMsgAndAwaitResponse({ message: "GetClientInfo" })
              .then((s) => {
                s.success == d.k_EResultOK
                  ? ((this.m_ClientInfo.ulVersion = s.clientversion),
                    (this.m_ClientInfo.bFriendsUIEnabled = !!s.friendsui),
                    (this.m_ClientInfo.unAccountID = s.accountid),
                    s.supported_messages &&
                      (this.m_ClientInfo.rgSupportedMessages =
                        s.supported_messages),
                    e())
                  : t();
              })
              .catch(t);
          });
      });
      return (
        (this.m_promiseConnect = e),
        this.m_promiseConnect
          .then(() => {
            (this.m_bReady = !0), (this.m_promiseConnect = void 0);
          })
          .catch(() => {
            (this.m_bClientConnectionFailed = !0),
              (this.m_promiseConnect = void 0);
          }),
        this.m_promiseConnect
      );
    }
  }
  let A = new (class {
    constructor() {
      (this.m_connection = new m()),
        (this.m_bAllowAccountMismatch = !1),
        (this.m_mapCacheSubscribedApp = new Map());
    }
    FailureResult(e = d.k_EResultFail) {
      let t = { success: !1, result: e };
      return (
        this.m_connection &&
          !this.m_connection.browser_supported &&
          (t.browser_unsupported = !0),
        this.m_connection &&
          !this.m_connection.connected_to_client &&
          (t.connect_failed = !0),
        e == d.k_EResultInvalidProtocolVer && (t.call_unsupported = !0),
        t
      );
    }
    SetAllowAccountMismatch(e) {
      this.m_bAllowAccountMismatch = e;
    }
    BClientConnected() {
      return this.m_connection.Connect().then(
        () => k,
        () => this.FailureResult(),
      );
    }
    BClientSupportsMessage(e) {
      return (
        !(!this.m_connection.connected_to_client || !this.m_connection.ready) &&
        -1 !== this.m_connection.ClientInfo.rgSupportedMessages.indexOf(e)
      );
    }
    OpenFriendChatDialog(e) {
      let t = { message: "ShowFriendChatDialog", steamid: e };
      return this.GenericEResultCall(t);
    }
    OpenChatRoomGroupDialog(e, t) {
      let s = { message: "ShowChatRoomGroupDialog", chat_group_id: e };
      return t && (s.chat_room_id = t), this.GenericEResultCall(s);
    }
    ShowChatRoomGroupInvite(e) {
      let t = { message: "ShowChatRoomGroupInvite", invite_code: e };
      return this.GenericEResultCall(t);
    }
    BIsSubscribedApp(e) {
      if (this.m_mapCacheSubscribedApp.has(e))
        return Promise.resolve(this.m_mapCacheSubscribedApp.get(e));
      let t = { message: "IsSubscribedApp", appid: e };
      return this.GenericEResultCall(t).then((t) => {
        if (t.connect_failed) return;
        let s = t.result == d.k_EResultOK;
        return this.m_mapCacheSubscribedApp.set(e, s), s;
      });
    }
    OpenFriendsDialog() {
      return this.GenericEResultCall({ message: "OpenFriendsDialog" });
    }
    BClientAccountMatches() {
      return (
        !n.logged_in || n.accountid == this.m_connection.ClientInfo.unAccountID
      );
    }
    GenericEResultCall(e) {
      return this.m_connection
        .Connect()
        .then(() =>
          this.m_bAllowAccountMismatch || this.BClientAccountMatches()
            ? this.m_connection
                .SendMsgAndAwaitResponse(e)
                .then((e) =>
                  e.success === d.k_EResultOK
                    ? k
                    : this.FailureResult(e.success),
                )
            : {
                success: !1,
                result: d.k_EResultInvalidSteamID,
                account_mismatch: !0,
              },
        )
        .catch(() => this.FailureResult());
    }
  })();
  (window.ClientConnectionAPI = A),
    document.addEventListener("DOMContentLoaded", function () {
      c(), (window.ClientConnectionAPI = A);
    });
})();
