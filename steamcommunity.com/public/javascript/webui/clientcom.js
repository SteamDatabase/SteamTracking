/*! This file includes third-party software, governed by the licenses described here: https://steamcommunity.com/public/javascript/webui/clientcom.licenses.txt */

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7413055";
!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = "x0hG"));
})({
  "/7KC": function (e, t, n) {
    "use strict";
    function r(e, t) {
      return (
        (e = Math.ceil(e)),
        (t = Math.floor(t)),
        Math.floor(Math.random() * (t - e + 1)) + e
      );
    }
    function o(e, t, n) {
      return null == e || isNaN(e) ? e : Math.max(t, Math.min(n, e));
    }
    function i(e, t, n, r, o) {
      return r + ((o - r) * (e - t)) / (n - t);
    }
    n.d(t, "b", function () {
      return r;
    }),
      n.d(t, "a", function () {
        return o;
      }),
      n.d(t, "c", function () {
        return i;
      });
  },
  "0N1H": function (e, t, n) {
    "use strict";
    function r(e) {
      return 3 == e || 6 == e;
    }
    function o(e) {
      return 5 == e || 6 == e;
    }
    n.d(t, "b", function () {
      return r;
    }),
      n.d(t, "a", function () {
        return o;
      }),
      n.d(t, "q", function () {
        return i;
      }),
      n.d(t, "r", function () {
        return s;
      }),
      n.d(t, "p", function () {
        return c;
      }),
      n.d(t, "j", function () {
        return a;
      }),
      n.d(t, "k", function () {
        return u;
      }),
      n.d(t, "l", function () {
        return _;
      }),
      n.d(t, "m", function () {
        return l;
      }),
      n.d(t, "o", function () {
        return d;
      }),
      n.d(t, "n", function () {
        return E;
      }),
      n.d(t, "g", function () {
        return S;
      }),
      n.d(t, "i", function () {
        return p;
      }),
      n.d(t, "h", function () {
        return m;
      }),
      n.d(t, "d", function () {
        return f;
      }),
      n.d(t, "e", function () {
        return h;
      }),
      n.d(t, "c", function () {
        return A;
      }),
      n.d(t, "f", function () {
        return g;
      });
    const i = 1,
      s = 4,
      c = 7,
      a = 750,
      u = 799,
      _ = 250820,
      l = 330050,
      d = 358510,
      E = 366490,
      S = "18446744073709551615",
      p = 0,
      m = 2147483647;
    function f(e, t = "en") {
      switch (e) {
        case 0:
          return "en";
        case 1:
          return "de";
        case 2:
          return "fr";
        case 3:
          return "it";
        case 4:
          return "ko";
        case 5:
          return "es";
        case 6:
          return "zh-cn";
        case 7:
          return "zh-tw";
        case 8:
          return "ru";
        case 9:
          return "th";
        case 10:
          return "ja";
        case 11:
          return "pt";
        case 12:
          return "pl";
        case 13:
          return "da";
        case 14:
          return "nl";
        case 15:
          return "fi";
        case 16:
          return "no";
        case 17:
          return "sv";
        case 18:
          return "hu";
        case 19:
          return "cs";
        case 20:
          return "ro";
        case 21:
          return "tr";
        case 25:
          return "ar";
        case 22:
          return "pt-br";
        case 23:
          return "bg";
        case 24:
          return "el";
        case 26:
          return "uk";
        case 27:
          return "es-419";
        case 28:
          return "vn";
        case 29:
          return "sc-sc";
        default:
          return t;
      }
    }
    const h = (e) => ("koreana" === e ? "korean" : e);
    function A(e, t = "") {
      switch (e) {
        case 0:
          return "english";
        case 1:
          return "german";
        case 2:
          return "french";
        case 3:
          return "italian";
        case 4:
          return "koreana";
        case 5:
          return "spanish";
        case 6:
          return "schinese";
        case 7:
          return "tchinese";
        case 8:
          return "russian";
        case 9:
          return "thai";
        case 10:
          return "japanese";
        case 11:
          return "portuguese";
        case 12:
          return "polish";
        case 13:
          return "danish";
        case 14:
          return "dutch";
        case 15:
          return "finnish";
        case 16:
          return "norwegian";
        case 17:
          return "swedish";
        case 18:
          return "hungarian";
        case 19:
          return "czech";
        case 20:
          return "romanian";
        case 21:
          return "turkish";
        case 25:
          return "arabic";
        case 22:
          return "brazilian";
        case 23:
          return "bulgarian";
        case 24:
          return "greek";
        case 26:
          return "ukrainian";
        case 27:
          return "latam";
        case 28:
          return "vietnamese";
        case 29:
          return "sc_schinese";
        default:
          return t;
      }
    }
    function g(e, t = 0) {
      switch (e) {
        case "english":
          return 0;
        case "german":
          return 1;
        case "french":
          return 2;
        case "italian":
          return 3;
        case "korean":
        case "koreana":
          return 4;
        case "spanish":
          return 5;
        case "schinese":
          return 6;
        case "tchinese":
          return 7;
        case "russian":
          return 8;
        case "thai":
          return 9;
        case "japanese":
          return 10;
        case "portuguese":
          return 11;
        case "polish":
          return 12;
        case "danish":
          return 13;
        case "dutch":
          return 14;
        case "finnish":
          return 15;
        case "norwegian":
          return 16;
        case "swedish":
          return 17;
        case "hungarian":
          return 18;
        case "czech":
          return 19;
        case "romanian":
          return 20;
        case "turkish":
          return 21;
        case "arabic":
          return 25;
        case "brazilian":
          return 22;
        case "bulgarian":
          return 23;
        case "greek":
          return 24;
        case "ukrainian":
          return 26;
        case "latam":
          return 27;
        case "vietnamese":
          return 28;
        case "sc_schinese":
          return 29;
        default:
          return t;
      }
    }
    var C, R, k, T, b, N, O;
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
    })(C || (C = {})),
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
      })(R || (R = {})),
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
      })(k || (k = {})),
      (function (e) {
        (e[(e.k_EFloatingGamepadTextInputModeModeSingleLine = 0)] =
          "k_EFloatingGamepadTextInputModeModeSingleLine"),
          (e[(e.k_EFloatingGamepadTextInputModeModeMultipleLines = 1)] =
            "k_EFloatingGamepadTextInputModeModeMultipleLines"),
          (e[(e.k_EFloatingGamepadTextInputModeModeEmail = 2)] =
            "k_EFloatingGamepadTextInputModeModeEmail"),
          (e[(e.k_EFloatingGamepadTextInputModeModeNumeric = 3)] =
            "k_EFloatingGamepadTextInputModeModeNumeric");
      })(T || (T = {})),
      (function (e) {
        (e[(e.k_EAppUpdateContentType_Content = 0)] =
          "k_EAppUpdateContentType_Content"),
          (e[(e.k_EAppUpdateContentType_Workshop = 1)] =
            "k_EAppUpdateContentType_Workshop"),
          (e[(e.k_EAppUpdateContentType_Shader = 2)] =
            "k_EAppUpdateContentType_Shader"),
          (e[(e.k_EAppUpdateContentType_Max = 3)] =
            "k_EAppUpdateContentType_Max");
      })(b || (b = {})),
      (function (e) {
        (e[(e.k_EOverlayToStoreFlag_None = 0)] = "k_EOverlayToStoreFlag_None"),
          (e[(e.k_EOverlayToStoreFlag_AddToCart = 1)] =
            "k_EOverlayToStoreFlag_AddToCart"),
          (e[(e.k_EOverlayToStoreFlag_AddToCartAndShow = 2)] =
            "k_EOverlayToStoreFlag_AddToCartAndShow");
      })(N || (N = {})),
      (function (e) {
        (e[(e.k_EActivateGameOverlayToWebPageMode_Default = 0)] =
          "k_EActivateGameOverlayToWebPageMode_Default"),
          (e[(e.k_EActivateGameOverlayToWebPageMode_Modal = 1)] =
            "k_EActivateGameOverlayToWebPageMode_Modal");
      })(O || (O = {}));
  },
  "1n9R": function (e, t, n) {
    "use strict";
    n.d(t, "d", function () {
      return i;
    }),
      n.d(t, "k", function () {
        return s;
      }),
      n.d(t, "b", function () {
        return c;
      }),
      n.d(t, "c", function () {
        return a;
      }),
      n.d(t, "g", function () {
        return l;
      }),
      n.d(t, "a", function () {
        return d;
      }),
      n.d(t, "j", function () {
        return E;
      }),
      n.d(t, "h", function () {
        return p;
      }),
      n.d(t, "i", function () {
        return m;
      }),
      n.d(t, "e", function () {
        return h;
      }),
      n.d(t, "f", function () {
        return A;
      });
    n("mrSG");
    var r = n("/7KC"),
      o = n("YlSc");
    n("0N1H");
    const i = {
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
        STORE_CDN_URL: "",
        PUBLIC_SHARED_URL: "",
        COMMUNITY_BASE_URL: "",
        CHAT_BASE_URL: "",
        STORE_BASE_URL: "",
        LOGIN_BASE_URL: "",
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
        LOCAL_HOSTNAME: "",
        WEBAPI_BASE_URL: "",
        TOKEN_URL: "",
        BUILD_TIMESTAMP: 0,
        PAGE_TIMESTAMP: 0,
        FROM_WEB: !1,
        get SESSIONID() {
          return (function () {
            if (!Object(o.a)()) return _ || (_ = l()), _;
            let e = Object(o.b)("sessionid");
            e || (e = l());
            return e;
          })();
        },
        FRIENDSUI_BETA: !1,
        STEAM_TV: !1,
        DEV_MODE: !1,
        IN_LIBRARY: !1,
        IN_GAMEPADUI: !1,
        ON_DECK: !1,
        IN_LOGIN: !1,
        IN_STANDALONE_KEYBOARD: !1,
      },
      s = {
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
      c = { steamid: "", clanid: 0, listid: 0 },
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
      u = { ANNOUNCEMENT_GID: "", TAKEOVER_ANNOUNCEMENT_GID: "" };
    let _;
    function l() {
      let e = (function () {
        let e = "";
        for (let t = 0; t < 24; t++) e += Object(r.b)(0, 35).toString(36);
        return e;
      })();
      return Object(o.c)("sessionid", e, 0), e;
    }
    function d() {
      let e = null;
      return (
        Object(o.a)() && (e = Object(o.b)("presentation_mode")),
        Boolean(e && 1 === Number.parseInt(e))
      );
    }
    function E(e = "webui_config") {
      const t = {},
        n = p("config", e);
      n && (delete n.SESSIONID, Object.assign(i, n), (t.config = !0));
      const r = p("userinfo", e);
      r &&
        (Object.assign(s, r),
        (t.userConfig = !0),
        s.is_support && d() && (s.is_support = !1));
      const o = p("broadcast", e);
      o && (Object.assign(c, o), (t.broadcastConfig = !0));
      const _ = p("community", e);
      _ && (Object.assign(a, _), (t.communityConfig = !0));
      const l = p("event", e);
      return l && (Object.assign(u, l), (t.eventConfig = !0)), t;
    }
    function S(e, t = "webui_config", n) {
      let r;
      if (
        ((r =
          "string" == typeof t
            ? !Object({
                NODE_ENV: "production",
                STEAM_BUILD: "buildbot",
                VALVE_BUILD: "false",
              }).MOBILE_BUILD && document.getElementById(t)
            : t),
        r)
      )
        try {
          if (r.hasAttribute("data-" + e)) {
            return JSON.parse(r.getAttribute("data-" + e));
          }
          return null;
        } catch (e) {
          console.error("Failed to parse config", e);
        }
      else n && console.error("Missing config element #", t);
    }
    function p(e, t = "webui_config") {
      return S(e, t, !0);
    }
    function m(e, t = "webui_config") {
      return S(e, t, !1);
    }
    function f(e, t) {
      return 0 != t.length && e.startsWith(t);
    }
    function h() {
      if (!window || !window.location || !window.location.href)
        return console.warn("Unable to determine base url!"), "unknown";
      const e = window.location.href;
      return f(e, i.STORE_BASE_URL)
        ? i.STORE_BASE_URL
        : f(e, i.COMMUNITY_BASE_URL)
        ? i.COMMUNITY_BASE_URL
        : f(e, i.CHAT_BASE_URL)
        ? i.CHAT_BASE_URL
        : f(e, i.PARTNER_BASE_URL)
        ? i.PARTNER_BASE_URL
        : f(e, i.HELP_BASE_URL)
        ? i.HELP_BASE_URL
        : f(e, i.STEAMTV_BASE_URL)
        ? i.STEAMTV_BASE_URL
        : f(e, i.STATS_BASE_URL)
        ? i.STATS_BASE_URL
        : f(e, i.INTERNAL_STATS_BASE_URL)
        ? i.INTERNAL_STATS_BASE_URL
        : f(e, "https://steamloopback.host")
        ? "https://steamloopback.host"
        : "";
    }
    function A() {
      const e = window.location.href;
      return f(e, i.STORE_BASE_URL)
        ? "store"
        : f(e, i.COMMUNITY_BASE_URL)
        ? "community"
        : f(e, i.PARTNER_BASE_URL)
        ? "partnerweb"
        : f(e, i.HELP_BASE_URL)
        ? "help"
        : f(e, i.STEAMTV_BASE_URL)
        ? "steamtv"
        : f(e, i.STATS_BASE_URL) || f(e, i.INTERNAL_STATS_BASE_URL)
        ? "stats"
        : "";
    }
  },
  Ezvv: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return i;
    }),
      n.d(t, "b", function () {
        return c;
      });
    n("0N1H");
    var r = n("1n9R");
    let o = { success: !0, result: 1 };
    class i {
      constructor() {
        (this.m_connection = new s()),
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
          () => o,
          () => this.FailureResult()
        );
      }
      BClientSupportsMessage(e) {
        return (
          !(
            !this.m_connection.connected_to_client || !this.m_connection.ready
          ) &&
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
      OpenJoinGameDialog(e) {
        let t = { message: "ShowJoinGameDialog", friend_id: e };
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
      ViewGameInfoForSteamID(e) {
        let t = { message: "ViewGameInfoForSteamID", steamid: e };
        return this.GenericEResultCall(t);
      }
      OpenFriendsDialog() {
        return this.GenericEResultCall({ message: "OpenFriendsDialog" });
      }
      BClientAccountMatches() {
        return (
          !r.k.logged_in ||
          r.k.accountid == this.m_connection.ClientInfo.unAccountID
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
                    1 === e.success ? o : this.FailureResult(e.success)
                  )
              : { success: !1, result: 19, account_mismatch: !0 }
          )
          .catch(() => this.FailureResult());
      }
    }
    class s {
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
          let r = this.m_iCallSeq++;
          this.BSendMsg(e, r)
            ? this.m_mapWaitingCallbacks.set(r, {
                iSeq: r,
                fnCallback: t,
                fnError: n,
              })
            : n();
        });
      }
      BSendMsg(e, t) {
        if (!this.m_socket || this.m_socket.readyState != WebSocket.OPEN)
          return !1;
        let n = Object.assign({}, e, {
          universe: r.d.EUNIVERSE,
          accountid: r.k.accountid,
        });
        void 0 !== t && (n.sequenceid = t);
        try {
          return this.m_socket.send(JSON.stringify(n)), !0;
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
    let c = new i();
    window.ClientConnectionAPI = c;
  },
  YlSc: function (e, t, n) {
    "use strict";
    function r(e) {
      if (!i() || !window.document.cookie) return null;
      let t = document.cookie.match("(^|; )" + e + "=([^;]*)");
      return t && t[2] ? decodeURIComponent(t[2]) : null;
    }
    function o(e, t, n, r) {
      if (!i()) return;
      r || (r = "/");
      let o = "";
      if (void 0 !== n && n) {
        let e = new Date();
        e.setTime(e.getTime() + 864e5 * n),
          (o = "; expires=" + e.toUTCString());
      }
      document.cookie =
        encodeURIComponent(e) + "=" + encodeURIComponent(t) + o + ";path=" + r;
    }
    function i() {
      return !!window.document;
    }
    n.d(t, "b", function () {
      return r;
    }),
      n.d(t, "c", function () {
        return o;
      }),
      n.d(t, "a", function () {
        return i;
      });
  },
  mrSG: function (e, t, n) {
    "use strict";
    n.d(t, "c", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return o;
      }),
      n.d(t, "a", function () {
        return i;
      });
    function r(e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var o = 0;
        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
            (n[r[o]] = e[r[o]]);
      }
      return n;
    }
    function o(e, t, n, r) {
      var o,
        i = arguments.length,
        s =
          i < 3
            ? t
            : null === r
            ? (r = Object.getOwnPropertyDescriptor(t, n))
            : r;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, n, r);
      else
        for (var c = e.length - 1; c >= 0; c--)
          (o = e[c]) &&
            (s = (i < 3 ? o(s) : i > 3 ? o(t, n, s) : o(t, n)) || s);
      return i > 3 && s && Object.defineProperty(t, n, s), s;
    }
    function i(e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function s(e) {
          try {
            a(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function c(e) {
          try {
            a(r.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function a(e) {
          var t;
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(s, c);
        }
        a((r = r.apply(e, t || [])).next());
      });
    }
  },
  tkkQ: function (e, t, n) {
    "use strict";
    var r = n("1n9R");
    n.d(t, "a", function () {
      return r.d;
    }),
      n.d(t, "d", function () {
        return r.k;
      }),
      n.d(t, "c", function () {
        return r.j;
      }),
      n.d(t, "b", function () {
        return r.e;
      });
  },
  x0hG: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("tkkQ"),
      o = n("Ezvv");
    document.addEventListener("DOMContentLoaded", function () {
      Object(r.c)(), (window.ClientConnectionAPI = o.b);
    });
  },
});
