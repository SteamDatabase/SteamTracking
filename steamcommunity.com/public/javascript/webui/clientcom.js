/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7945021";
(() => {
  "use strict";
  function e(e) {
    if (!t() || !window.document.cookie) return null;
    let n = document.cookie.match("(^|; )" + e + "=([^;]*)");
    return n && n[2] ? decodeURIComponent(n[2]) : null;
  }
  function t() {
    return !!window.document;
  }
  const n = {
      EUNIVERSE: 0,
      WEB_UNIVERSE: "",
      LANGUAGE: "english",
      SUPPORTED_LANGUAGES: [],
      COUNTRY: "",
      AVATAR_BASE_URL: "",
      MEDIA_CDN_COMMUNITY_URL: "",
      MEDIA_CDN_URL: "",
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
          if (!t()) return r || (r = l()), r;
          let n = e("sessionid");
          n || (n = l());
          return n;
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
    },
    o = {
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
    a = {
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
    _ = { ANNOUNCEMENT_GID: "", TAKEOVER_ANNOUNCEMENT_GID: "" },
    s = "webui_config";
  let r;
  function l() {
    let e = (function () {
      let e = "";
      for (let o = 0; o < 24; o++)
        e += ((t = 0),
        (n = 35),
        (t = Math.ceil(t)),
        (n = Math.floor(n)),
        Math.floor(Math.random() * (n - t + 1)) + t).toString(36);
      var t, n;
      return e;
    })();
    return (
      (function (e, n, o, i) {
        if (!t()) return;
        i || (i = "/");
        let a = "";
        if (void 0 !== o && o) {
          let e = new Date();
          e.setTime(e.getTime() + 864e5 * o),
            (a = "; expires=" + e.toUTCString());
        }
        document.cookie =
          encodeURIComponent(e) +
          "=" +
          encodeURIComponent(n) +
          a +
          ";path=" +
          i;
      })("sessionid", e, 0),
      e
    );
  }
  function c(r = s) {
    const l = {},
      c = E("config", r);
    c && (delete c.SESSIONID, Object.assign(n, c), (l.config = !0));
    const m = E("userinfo", r);
    m &&
      (Object.assign(o, m),
      (l.userConfig = !0),
      o.is_support &&
        (function () {
          let n = null;
          t() && (n = e(u));
          return Boolean(n && 1 === Number.parseInt(n));
        })() &&
        (o.is_support = !1));
    const S = E("broadcast", r);
    S && (Object.assign(i, S), (l.broadcastConfig = !0));
    const p = E("community", r);
    p && (Object.assign(a, p), (l.communityConfig = !0));
    const d = E("event", r);
    return d && (Object.assign(_, d), (l.eventConfig = !0)), l;
  }
  function E(e, t = s) {
    return m(e, t, !0);
  }
  function m(e, t = s, n) {
    let o;
    if (
      ((o =
        "string" == typeof t
          ? !{
              NODE_ENV: "production",
              STEAM_BUILD: "buildbot",
              VALVE_BUILD: "false",
            }.MOBILE_BUILD && document.getElementById(t)
          : t),
      o)
    )
      try {
        if (o.hasAttribute("data-" + e)) {
          return JSON.parse(o.getAttribute("data-" + e));
        }
        return null;
      } catch (e) {
        console.error("Failed to parse config", e);
      }
    else n && console.error("Missing config element #", t);
  }
  const u = "presentation_mode";
  var S, p, d, k, C, g, I, A, y, h, R, M, T, P;
  !(function (e) {
    (e[(e.k_EConnectivityTestResult_Unknown = 0)] =
      "k_EConnectivityTestResult_Unknown"),
      (e[(e.k_EConnectivityTestResult_Connected = 1)] =
        "k_EConnectivityTestResult_Connected"),
      (e[(e.k_EConnectivityTestResult_CaptivePortal = 2)] =
        "k_EConnectivityTestResult_CaptivePortal"),
      (e[(e.k_EConnectivityTestResult_TimedOut = 3)] =
        "k_EConnectivityTestResult_TimedOut"),
      (e[(e.k_EConnectivityTestResult_Failed = 4)] =
        "k_EConnectivityTestResult_Failed"),
      (e[(e.k_EConnectivityTestResult_WifiDisabled = 5)] =
        "k_EConnectivityTestResult_WifiDisabled"),
      (e[(e.k_EConnectivityTestResult_NoLAN = 6)] =
        "k_EConnectivityTestResult_NoLAN");
  })(S || (S = {})),
    (function (e) {
      (e[(e.k_ENetFakeLocalSystemState_Normal = 0)] =
        "k_ENetFakeLocalSystemState_Normal"),
        (e[(e.k_ENetFakeLocalSystemState_NoLAN = 1)] =
          "k_ENetFakeLocalSystemState_NoLAN"),
        (e[(e.k_ENetFakeLocalSystemState_CaptivePortal_Redirected = 2)] =
          "k_ENetFakeLocalSystemState_CaptivePortal_Redirected"),
        (e[(e.k_ENetFakeLocalSystemState_CaptivePortal_InPlace = 3)] =
          "k_ENetFakeLocalSystemState_CaptivePortal_InPlace"),
        (e[(e.k_ENetFakeLocalSystemState_NoInternet = 4)] =
          "k_ENetFakeLocalSystemState_NoInternet"),
        (e[(e.k_ENetFakeLocalSystemState_NoSteam = 5)] =
          "k_ENetFakeLocalSystemState_NoSteam");
    })(p || (p = {})),
    (function (e) {
      (e[(e.k_ESuspendResumeProgressState_Invalid = 0)] =
        "k_ESuspendResumeProgressState_Invalid"),
        (e[(e.k_ESuspendResumeProgressState_Complete = 1)] =
          "k_ESuspendResumeProgressState_Complete"),
        (e[(e.k_ESuspendResumeProgressState_CloudSync = 2)] =
          "k_ESuspendResumeProgressState_CloudSync"),
        (e[(e.k_ESuspendResumeProgressState_LoggingIn = 3)] =
          "k_ESuspendResumeProgressState_LoggingIn"),
        (e[(e.k_ESuspendResumeProgressState_WaitingForApp = 4)] =
          "k_ESuspendResumeProgressState_WaitingForApp"),
        (e[(e.k_ESuspendResumeProgressState_Working = 5)] =
          "k_ESuspendResumeProgressState_Working");
    })(d || (d = {})),
    (function (e) {
      (e[(e.k_EFloatingGamepadTextInputModeModeSingleLine = 0)] =
        "k_EFloatingGamepadTextInputModeModeSingleLine"),
        (e[(e.k_EFloatingGamepadTextInputModeModeMultipleLines = 1)] =
          "k_EFloatingGamepadTextInputModeModeMultipleLines"),
        (e[(e.k_EFloatingGamepadTextInputModeModeEmail = 2)] =
          "k_EFloatingGamepadTextInputModeModeEmail"),
        (e[(e.k_EFloatingGamepadTextInputModeModeNumeric = 3)] =
          "k_EFloatingGamepadTextInputModeModeNumeric");
    })(k || (k = {})),
    (function (e) {
      (e[(e.k_EAppUpdateContentType_Content = 0)] =
        "k_EAppUpdateContentType_Content"),
        (e[(e.k_EAppUpdateContentType_Workshop = 1)] =
          "k_EAppUpdateContentType_Workshop"),
        (e[(e.k_EAppUpdateContentType_Shader = 2)] =
          "k_EAppUpdateContentType_Shader"),
        (e[(e.k_EAppUpdateContentType_Max = 3)] =
          "k_EAppUpdateContentType_Max");
    })(C || (C = {})),
    (function (e) {
      (e[(e.k_EOverlayToStoreFlag_None = 0)] = "k_EOverlayToStoreFlag_None"),
        (e[(e.k_EOverlayToStoreFlag_AddToCart = 1)] =
          "k_EOverlayToStoreFlag_AddToCart"),
        (e[(e.k_EOverlayToStoreFlag_AddToCartAndShow = 2)] =
          "k_EOverlayToStoreFlag_AddToCartAndShow");
    })(g || (g = {})),
    (function (e) {
      (e[(e.k_EActivateGameOverlayToWebPageMode_Default = 0)] =
        "k_EActivateGameOverlayToWebPageMode_Default"),
        (e[(e.k_EActivateGameOverlayToWebPageMode_Modal = 1)] =
          "k_EActivateGameOverlayToWebPageMode_Modal");
    })(I || (I = {})),
    (function (e) {
      (e[(e.k_EGamingDeviceType_Unknown = 0)] = "k_EGamingDeviceType_Unknown"),
        (e[(e.k_EGamingDeviceType_StandardPC = 1)] =
          "k_EGamingDeviceType_StandardPC"),
        (e[(e.k_EGamingDeviceType_Console = 256)] =
          "k_EGamingDeviceType_Console"),
        (e[(e.k_EGamingDeviceType_PS3 = 272)] = "k_EGamingDeviceType_PS3"),
        (e[(e.k_EGamingDeviceType_Steambox = 288)] =
          "k_EGamingDeviceType_Steambox"),
        (e[(e.k_EGamingDeviceType_Handheld = 512)] =
          "k_EGamingDeviceType_Handheld"),
        (e[(e.k_EGamingDeviceType_Phone = 528)] = "k_EGamingDeviceType_Phone"),
        (e[(e.k_EGamingDeviceType_SteamDeck = 544)] =
          "k_EGamingDeviceType_SteamDeck");
    })(A || (A = {})),
    (function (e) {
      (e[(e.k_ELoginUIStyleOld = 0)] = "k_ELoginUIStyleOld"),
        (e[(e.k_ELoginUIStyleNewWithoutQRCode = 1)] =
          "k_ELoginUIStyleNewWithoutQRCode"),
        (e[(e.k_ELoginUIStyleNew = 2)] = "k_ELoginUIStyleNew");
    })(y || (y = {})),
    (function (e) {
      (e[(e.k_ECommunityProfileItemProperty_ImageSmall = 0)] =
        "k_ECommunityProfileItemProperty_ImageSmall"),
        (e[(e.k_ECommunityProfileItemProperty_ImageLarge = 1)] =
          "k_ECommunityProfileItemProperty_ImageLarge"),
        (e[(e.k_ECommunityProfileItemProperty_InternalName = 2)] =
          "k_ECommunityProfileItemProperty_InternalName"),
        (e[(e.k_ECommunityProfileItemProperty_Title = 3)] =
          "k_ECommunityProfileItemProperty_Title"),
        (e[(e.k_ECommunityProfileItemProperty_Description = 4)] =
          "k_ECommunityProfileItemProperty_Description"),
        (e[(e.k_ECommunityProfileItemProperty_AppID = 5)] =
          "k_ECommunityProfileItemProperty_AppID"),
        (e[(e.k_ECommunityProfileItemProperty_TypeID = 6)] =
          "k_ECommunityProfileItemProperty_TypeID"),
        (e[(e.k_ECommunityProfileItemProperty_Class = 7)] =
          "k_ECommunityProfileItemProperty_Class"),
        (e[(e.k_ECommunityProfileItemProperty_MovieWebM = 8)] =
          "k_ECommunityProfileItemProperty_MovieWebM"),
        (e[(e.k_ECommunityProfileItemProperty_MovieMP4 = 9)] =
          "k_ECommunityProfileItemProperty_MovieMP4"),
        (e[(e.k_ECommunityProfileItemProperty_MovieWebMSmall = 10)] =
          "k_ECommunityProfileItemProperty_MovieWebMSmall"),
        (e[(e.k_ECommunityProfileItemProperty_MovieMP4Small = 11)] =
          "k_ECommunityProfileItemProperty_MovieMP4Small");
    })(h || (h = {})),
    (function (e) {
      (e[(e.k_ERaiseGameWindowResult_NotRunning = 1)] =
        "k_ERaiseGameWindowResult_NotRunning"),
        (e[(e.k_ERaiseGameWindowResult_Success = 2)] =
          "k_ERaiseGameWindowResult_Success"),
        (e[(e.k_ERaiseGameWindowResult_Failure = 3)] =
          "k_ERaiseGameWindowResult_Failure");
    })(R || (R = {})),
    (function (e) {
      (e[(e.k_EPositionInvalid = -1)] = "k_EPositionInvalid"),
        (e[(e.k_EPositionTopLeft = 0)] = "k_EPositionTopLeft"),
        (e[(e.k_EPositionTopRight = 1)] = "k_EPositionTopRight"),
        (e[(e.k_EPositionBottomLeft = 2)] = "k_EPositionBottomLeft"),
        (e[(e.k_EPositionBottomRight = 3)] = "k_EPositionBottomRight");
    })(M || (M = {})),
    (function (e) {
      (e[(e.k_EAppReleaseState_Unknown = 0)] = "k_EAppReleaseState_Unknown"),
        (e[(e.k_EAppReleaseState_Unavailable = 1)] =
          "k_EAppReleaseState_Unavailable"),
        (e[(e.k_EAppReleaseState_Prerelease = 2)] =
          "k_EAppReleaseState_Prerelease"),
        (e[(e.k_EAppReleaseState_PreloadOnly = 3)] =
          "k_EAppReleaseState_PreloadOnly"),
        (e[(e.k_EAppReleaseState_Released = 4)] =
          "k_EAppReleaseState_Released"),
        (e[(e.k_EAppReleaseState_Disabled = 5)] =
          "k_EAppReleaseState_Disabled");
    })(T || (T = {})),
    (function (e) {
      (e[(e.k_EInstallMgrStateNone = 0)] = "k_EInstallMgrStateNone"),
        (e[(e.k_EInstallMgrStateSetup = 1)] = "k_EInstallMgrStateSetup"),
        (e[(e.k_EInstallMgrStateWaitLicense = 2)] =
          "k_EInstallMgrStateWaitLicense"),
        (e[(e.k_EInstallMgrStateFreeLicense = 3)] =
          "k_EInstallMgrStateFreeLicense"),
        (e[(e.k_EInstallMgrStateShowCDKey = 4)] =
          "k_EInstallMgrStateShowCDKey"),
        (e[(e.k_EInstallMgrStateWaitAppInfo = 5)] =
          "k_EInstallMgrStateWaitAppInfo"),
        (e[(e.k_EInstallMgrStateShowPassword = 6)] =
          "k_EInstallMgrStateShowPassword"),
        (e[(e.k_EInstallMgrStateShowConfig = 7)] =
          "k_EInstallMgrStateShowConfig"),
        (e[(e.k_EInstallMgrStateShowEULAs = 8)] =
          "k_EInstallMgrStateShowEULAs"),
        (e[(e.k_EInstallMgrStateCreateApps = 9)] =
          "k_EInstallMgrStateCreateApps"),
        (e[(e.k_EInstallMgrStateReadFromMedia = 10)] =
          "k_EInstallMgrStateReadFromMedia"),
        (e[(e.k_EInstallMgrStateShowChangeMedia = 11)] =
          "k_EInstallMgrStateShowChangeMedia"),
        (e[(e.k_EInstallMgrStateWaitLegacyCDKeys = 12)] =
          "k_EInstallMgrStateWaitLegacyCDKeys"),
        (e[(e.k_EInstallMgrStateShowSignup = 13)] =
          "k_EInstallMgrStateShowSignup"),
        (e[(e.k_EInstallMgrStateComplete = 14)] = "k_EInstallMgrStateComplete"),
        (e[(e.k_EInstallMgrStateFailed = 15)] = "k_EInstallMgrStateFailed"),
        (e[(e.k_EInstallMgrStateCanceled = 16)] = "k_EInstallMgrStateCanceled");
    })(P || (P = {}));
  let N = { success: !0, result: 1 };
  class f {
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
      return new Promise((t, n) => {
        let o = this.m_iCallSeq++;
        this.BSendMsg(e, o)
          ? this.m_mapWaitingCallbacks.set(o, {
              iSeq: o,
              fnCallback: t,
              fnError: n,
            })
          : n();
      });
    }
    BSendMsg(e, t) {
      if (!this.m_socket || this.m_socket.readyState != WebSocket.OPEN)
        return !1;
      let i = Object.assign({}, e, {
        universe: n.EUNIVERSE,
        accountid: o.accountid,
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
              .then((n) => {
                1 == n.success
                  ? ((this.m_ClientInfo.ulVersion = n.clientversion),
                    (this.m_ClientInfo.bFriendsUIEnabled = !!n.friendsui),
                    (this.m_ClientInfo.unAccountID = n.accountid),
                    n.supported_messages &&
                      (this.m_ClientInfo.rgSupportedMessages =
                        n.supported_messages),
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
  let L = new (class {
    constructor() {
      (this.m_connection = new f()),
        (this.m_bAllowAccountMismatch = !1),
        (this.m_mapCacheSubscribedApp = new Map());
    }
    FailureResult(e = 2) {
      let t = { success: !1, result: e };
      return (
        this.m_connection &&
          !this.m_connection.browser_supported &&
          (t.browser_unsupported = !0),
        this.m_connection &&
          !this.m_connection.connected_to_client &&
          (t.connect_failed = !0),
        7 == e && (t.call_unsupported = !0),
        t
      );
    }
    SetAllowAccountMismatch(e) {
      this.m_bAllowAccountMismatch = e;
    }
    BClientConnected() {
      return this.m_connection.Connect().then(
        () => N,
        () => this.FailureResult()
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
      let n = { message: "ShowChatRoomGroupDialog", chat_group_id: e };
      return t && (n.chat_room_id = t), this.GenericEResultCall(n);
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
        let n = 1 == t.result;
        return this.m_mapCacheSubscribedApp.set(e, n), n;
      });
    }
    OpenFriendsDialog() {
      return this.GenericEResultCall({ message: "OpenFriendsDialog" });
    }
    BClientAccountMatches() {
      return (
        !o.logged_in || o.accountid == this.m_connection.ClientInfo.unAccountID
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
                  1 === e.success ? N : this.FailureResult(e.success)
                )
            : { success: !1, result: 19, account_mismatch: !0 }
        )
        .catch(() => this.FailureResult());
    }
  })();
  (window.ClientConnectionAPI = L),
    document.addEventListener("DOMContentLoaded", function () {
      c(), (window.ClientConnectionAPI = L);
    });
})();
