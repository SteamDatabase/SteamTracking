/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "0";
(() => {
  var e,
    t,
    n,
    s,
    i,
    r = {
      3119: (e, t, n) => {
        var s = {
          "./friendsui_arabic.json": [58480, 6992],
          "./friendsui_brazilian.json": [33109, 2862],
          "./friendsui_bulgarian.json": [5242, 8518],
          "./friendsui_czech.json": [98399, 4448],
          "./friendsui_danish.json": [34581, 9775],
          "./friendsui_dutch.json": [27904, 7575],
          "./friendsui_english.json": [67927, 8247],
          "./friendsui_finnish.json": [63907, 4596],
          "./friendsui_french.json": [49877, 3500],
          "./friendsui_german.json": [90262, 4989],
          "./friendsui_greek.json": [84583, 1471],
          "./friendsui_hungarian.json": [85581, 5802],
          "./friendsui_indonesian.json": [37371, 6646],
          "./friendsui_italian.json": [31577, 8815],
          "./friendsui_japanese.json": [86521, 6727],
          "./friendsui_koreana.json": [73827, 6986],
          "./friendsui_latam.json": [13236, 7651],
          "./friendsui_norwegian.json": [19181, 4716],
          "./friendsui_polish.json": [3751, 699],
          "./friendsui_portuguese.json": [21520, 4264],
          "./friendsui_romanian.json": [85513, 3182],
          "./friendsui_russian.json": [99942, 2913],
          "./friendsui_sc_schinese.json": [64522, 3140],
          "./friendsui_schinese.json": [19456, 7706],
          "./friendsui_spanish.json": [12011, 3471],
          "./friendsui_swedish.json": [66100, 9818],
          "./friendsui_tchinese.json": [74628, 7340],
          "./friendsui_thai.json": [88902, 9263],
          "./friendsui_turkish.json": [95797, 5632],
          "./friendsui_ukrainian.json": [83292, 2822],
          "./friendsui_vietnamese.json": [39248, 1635],
        };
        function i(e) {
          if (!n.o(s, e))
            return Promise.resolve().then(() => {
              var t = new Error("Cannot find module '" + e + "'");
              throw ((t.code = "MODULE_NOT_FOUND"), t);
            });
          var t = s[e],
            i = t[0];
          return n.e(t[1]).then(() => n.t(i, 19));
        }
        (i.keys = () => Object.keys(s)), (i.id = 3119), (e.exports = i);
      },
      9014: (e, t, n) => {
        var s = {
          "./friendsui_arabic.json": [58480, 6992],
          "./friendsui_brazilian.json": [33109, 2862],
          "./friendsui_bulgarian.json": [5242, 8518],
          "./friendsui_czech.json": [98399, 4448],
          "./friendsui_danish.json": [34581, 9775],
          "./friendsui_dutch.json": [27904, 7575],
          "./friendsui_english.json": [67927, 8247],
          "./friendsui_finnish.json": [63907, 4596],
          "./friendsui_french.json": [49877, 3500],
          "./friendsui_german.json": [90262, 4989],
          "./friendsui_greek.json": [84583, 1471],
          "./friendsui_hungarian.json": [85581, 5802],
          "./friendsui_indonesian.json": [37371, 6646],
          "./friendsui_italian.json": [31577, 8815],
          "./friendsui_japanese.json": [86521, 6727],
          "./friendsui_koreana.json": [73827, 6986],
          "./friendsui_latam.json": [13236, 7651],
          "./friendsui_norwegian.json": [19181, 4716],
          "./friendsui_polish.json": [3751, 699],
          "./friendsui_portuguese.json": [21520, 4264],
          "./friendsui_romanian.json": [85513, 3182],
          "./friendsui_russian.json": [99942, 2913],
          "./friendsui_sc_schinese.json": [64522, 3140],
          "./friendsui_schinese.json": [19456, 7706],
          "./friendsui_spanish.json": [12011, 3471],
          "./friendsui_swedish.json": [66100, 9818],
          "./friendsui_tchinese.json": [74628, 7340],
          "./friendsui_thai.json": [88902, 9263],
          "./friendsui_turkish.json": [95797, 5632],
          "./friendsui_ukrainian.json": [83292, 2822],
          "./friendsui_vietnamese.json": [39248, 1635],
        };
        function i(e) {
          if (!n.o(s, e))
            return Promise.resolve().then(() => {
              var t = new Error("Cannot find module '" + e + "'");
              throw ((t.code = "MODULE_NOT_FOUND"), t);
            });
          var t = s[e],
            i = t[0];
          return n.e(t[1]).then(() => n.t(i, 19));
        }
        (i.keys = () => Object.keys(s)), (i.id = 9014), (e.exports = i);
      },
      11551: (e, t, n) => {
        "use strict";
        function s(e, t, n, s) {
          var i,
            r = arguments.length,
            a =
              r < 3
                ? t
                : null === s
                  ? (s = Object.getOwnPropertyDescriptor(t, n))
                  : s;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, n, s);
          else
            for (var o = e.length - 1; o >= 0; o--)
              (i = e[o]) &&
                (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
          return r > 3 && a && Object.defineProperty(t, n, a), a;
        }
        function i(e, t, n, s) {
          return new (n || (n = Promise))(function (i, r) {
            function a(e) {
              try {
                c(s.next(e));
              } catch (e) {
                r(e);
              }
            }
            function o(e) {
              try {
                c(s.throw(e));
              } catch (e) {
                r(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, o);
            }
            c((s = s.apply(e, t || [])).next());
          });
        }
        Object.create;
        Object.create;
        "function" == typeof SuppressedError && SuppressedError;
        n(60660);
        var r = n(27378),
          a = n(37634);
        function o(e) {
          if (!c() || !window.document.cookie) return null;
          const t = document.cookie.match("(^|; )" + e + "=([^;]*)");
          return t && t[2] ? decodeURIComponent(t[2]) : null;
        }
        function c() {
          return !!window.document;
        }
        const l = "webui_config";
        let _;
        function u() {
          const e = (function () {
            let e = "";
            for (let s = 0; s < 24; s++)
              e += ((t = 0),
              (n = 35),
              (t = Math.ceil(t)),
              (n = Math.floor(n)),
              Math.floor(Math.random() * (n - t + 1)) + t).toString(36);
            var t, n;
            return e;
          })();
          return (
            (function (e, t, n, s) {
              if (!c()) return;
              s || (s = "/");
              let i = "";
              if (void 0 !== n && n) {
                const e = new Date();
                e.setTime(e.getTime() + 864e5 * n),
                  (i = "; expires=" + e.toUTCString());
              }
              document.cookie =
                encodeURIComponent(e) +
                "=" +
                encodeURIComponent(t) +
                i +
                ";path=" +
                s;
            })("sessionid", e, 0),
            e
          );
        }
        function d(e = l) {
          const t = {},
            n = h("config", e);
          n && (delete n.SESSIONID, Object.assign(f, n), (t.config = !0));
          const s = h("userinfo", e);
          s &&
            (Object.assign(g, s),
            (t.userConfig = !0),
            g.is_support &&
              (function () {
                let e = null;
                c() && (e = o(p));
                return Boolean(e && 1 === Number.parseInt(e));
              })() &&
              (g.is_support = !1));
          const i = h("broadcast", e);
          i && (Object.assign(E, i), (t.broadcastConfig = !0));
          const r = h("community", e);
          r && (Object.assign(S, r), (t.communityConfig = !0));
          const a = h("event", e);
          return a && (Object.assign(I, a), (t.eventConfig = !0)), t;
        }
        function h(e, t = l) {
          return m(e, t, !0);
        }
        function m(e, t = l, n) {
          let s;
          if (
            ((s =
              "string" == typeof t
                ? {
                    NODE_ENV: "production",
                    STEAM_BUILD: "buildbot",
                    VALVE_BUILD: "false",
                  }.MOBILE_BUILD
                  ? null
                  : document.getElementById(t)
                : t),
            s)
          )
            try {
              if (s.hasAttribute("data-" + e)) {
                return JSON.parse(s.getAttribute("data-" + e));
              }
              return null;
            } catch (e) {
              console.error(
                "Failed to parse config for " +
                  g.steamid +
                  " (" +
                  window.location.href +
                  ")",
                e,
              );
            }
          else n && console.error("Missing config element #", t);
        }
        const p = "presentation_mode";
        const f = {
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
              if (!c()) return _ || (_ = u()), _;
              let e = o("sessionid");
              return e || (e = u()), e;
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
        const g = {
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
          E = { steamid: "", clanid: 0, listid: 0 },
          S = {
            CLANSTEAMID: "",
            CLANACCOUNTID: 0,
            APPID: 0,
            VANITY_ID: "",
            IS_CREATOR_HOME: !1,
            IS_CURATOR: !1,
            IS_OGG: !1,
            CAN_UPLOAD_IMAGES: !1,
            IS_VALVE_GROUP: !1,
            IS_ALLOWED_SC: !1,
          },
          I = { ANNOUNCEMENT_GID: "", TAKEOVER_ANNOUNCEMENT_GID: "" };
        r.createContext({});
        let k = { success: !0, result: 1 };
        class b {
          constructor() {
            (this.m_connection = new C()),
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
              () => k,
              () => this.FailureResult(),
            );
          }
          BClientSupportsMessage(e) {
            return (
              !(
                !this.m_connection.connected_to_client ||
                !this.m_connection.ready
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
              !g.logged_in ||
              g.accountid == this.m_connection.ClientInfo.unAccountID
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
                        1 === e.success ? k : this.FailureResult(e.success),
                      )
                  : { success: !1, result: 19, account_mismatch: !0 },
              )
              .catch(() => this.FailureResult());
          }
        }
        class C {
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
              let s = this.m_iCallSeq++;
              this.BSendMsg(e, s)
                ? this.m_mapWaitingCallbacks.set(s, {
                    iSeq: s,
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
              universe: f.EUNIVERSE,
              accountid: g.accountid,
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
                this.m_socket = new WebSocket(
                  "ws://127.0.0.1:27060/clientsocket/",
                );
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
        let v = new b();
        window.ClientConnectionAPI = v;
        n(14206), n(19744);
        const T = 2147483647;
        function y(e, t = 0) {
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
            case "indonesian":
              return 30;
            default:
              return t;
          }
        }
        var j, A, L, R, M, P, N, w, O, G, U, D, F, B, W, x, V;
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
        })(j || (j = {})),
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
          })(A || (A = {})),
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
          })(L || (L = {})),
          (function (e) {
            (e[(e.k_EFloatingGamepadTextInputModeModeSingleLine = 0)] =
              "k_EFloatingGamepadTextInputModeModeSingleLine"),
              (e[(e.k_EFloatingGamepadTextInputModeModeMultipleLines = 1)] =
                "k_EFloatingGamepadTextInputModeModeMultipleLines"),
              (e[(e.k_EFloatingGamepadTextInputModeModeEmail = 2)] =
                "k_EFloatingGamepadTextInputModeModeEmail"),
              (e[(e.k_EFloatingGamepadTextInputModeModeNumeric = 3)] =
                "k_EFloatingGamepadTextInputModeModeNumeric");
          })(R || (R = {})),
          (function (e) {
            (e[(e.k_EAppUpdateContentType_Content = 0)] =
              "k_EAppUpdateContentType_Content"),
              (e[(e.k_EAppUpdateContentType_Workshop = 1)] =
                "k_EAppUpdateContentType_Workshop"),
              (e[(e.k_EAppUpdateContentType_Shader = 2)] =
                "k_EAppUpdateContentType_Shader"),
              (e[(e.k_EAppUpdateContentType_Max = 3)] =
                "k_EAppUpdateContentType_Max");
          })(M || (M = {})),
          (function (e) {
            (e[(e.k_EOverlayToStoreFlag_None = 0)] =
              "k_EOverlayToStoreFlag_None"),
              (e[(e.k_EOverlayToStoreFlag_AddToCart = 1)] =
                "k_EOverlayToStoreFlag_AddToCart"),
              (e[(e.k_EOverlayToStoreFlag_AddToCartAndShow = 2)] =
                "k_EOverlayToStoreFlag_AddToCartAndShow");
          })(P || (P = {})),
          (function (e) {
            (e[(e.k_EActivateGameOverlayToWebPageMode_Default = 0)] =
              "k_EActivateGameOverlayToWebPageMode_Default"),
              (e[(e.k_EActivateGameOverlayToWebPageMode_Modal = 1)] =
                "k_EActivateGameOverlayToWebPageMode_Modal");
          })(N || (N = {})),
          (function (e) {
            (e[(e.k_EGamingDeviceType_Unknown = 0)] =
              "k_EGamingDeviceType_Unknown"),
              (e[(e.k_EGamingDeviceType_StandardPC = 1)] =
                "k_EGamingDeviceType_StandardPC"),
              (e[(e.k_EGamingDeviceType_Console = 256)] =
                "k_EGamingDeviceType_Console"),
              (e[(e.k_EGamingDeviceType_PS3 = 272)] =
                "k_EGamingDeviceType_PS3"),
              (e[(e.k_EGamingDeviceType_Steambox = 288)] =
                "k_EGamingDeviceType_Steambox"),
              (e[(e.k_EGamingDeviceType_Handheld = 512)] =
                "k_EGamingDeviceType_Handheld"),
              (e[(e.k_EGamingDeviceType_Phone = 528)] =
                "k_EGamingDeviceType_Phone"),
              (e[(e.k_EGamingDeviceType_SteamDeck = 544)] =
                "k_EGamingDeviceType_SteamDeck");
          })(w || (w = {})),
          (function (e) {
            (e[(e.k_ELoginUIStyleOld = 0)] = "k_ELoginUIStyleOld"),
              (e[(e.k_ELoginUIStyleNewWithoutQRCode = 1)] =
                "k_ELoginUIStyleNewWithoutQRCode"),
              (e[(e.k_ELoginUIStyleNew = 2)] = "k_ELoginUIStyleNew");
          })(O || (O = {})),
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
          })(G || (G = {})),
          (function (e) {
            (e[(e.k_ERaiseGameWindowResult_NotRunning = 1)] =
              "k_ERaiseGameWindowResult_NotRunning"),
              (e[(e.k_ERaiseGameWindowResult_Success = 2)] =
                "k_ERaiseGameWindowResult_Success"),
              (e[(e.k_ERaiseGameWindowResult_Failure = 3)] =
                "k_ERaiseGameWindowResult_Failure");
          })(U || (U = {})),
          (function (e) {
            (e[(e.k_EPositionInvalid = -1)] = "k_EPositionInvalid"),
              (e[(e.k_EPositionTopLeft = 0)] = "k_EPositionTopLeft"),
              (e[(e.k_EPositionTopRight = 1)] = "k_EPositionTopRight"),
              (e[(e.k_EPositionBottomLeft = 2)] = "k_EPositionBottomLeft"),
              (e[(e.k_EPositionBottomRight = 3)] = "k_EPositionBottomRight");
          })(D || (D = {})),
          (function (e) {
            (e[(e.k_EAppReleaseState_Unknown = 0)] =
              "k_EAppReleaseState_Unknown"),
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
          })(F || (F = {})),
          (function (e) {
            (e[(e.k_EGameIDTypeApp = 0)] = "k_EGameIDTypeApp"),
              (e[(e.k_EGameIDTypeGameMod = 1)] = "k_EGameIDTypeGameMod"),
              (e[(e.k_EGameIDTypeShortcut = 2)] = "k_EGameIDTypeShortcut"),
              (e[(e.k_EGameIDTypeP2P = 3)] = "k_EGameIDTypeP2P");
          })(B || (B = {})),
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
              (e[(e.k_EInstallMgrStateComplete = 14)] =
                "k_EInstallMgrStateComplete"),
              (e[(e.k_EInstallMgrStateFailed = 15)] =
                "k_EInstallMgrStateFailed"),
              (e[(e.k_EInstallMgrStateCanceled = 16)] =
                "k_EInstallMgrStateCanceled");
          })(W || (W = {})),
          (function (e) {
            (e[(e.k_EWindowBringToFrontInvalid = 0)] =
              "k_EWindowBringToFrontInvalid"),
              (e[(e.k_EWindowBringToFrontAndForceOS = 1)] =
                "k_EWindowBringToFrontAndForceOS"),
              (e[(e.k_EWindowBringToFrontWithoutForcingOS = 2)] =
                "k_EWindowBringToFrontWithoutForcingOS");
          })(x || (x = {})),
          (function (e) {
            (e[(e.k_ESteamRealmUnknown = 0)] = "k_ESteamRealmUnknown"),
              (e[(e.k_ESteamRealmGlobal = 1)] = "k_ESteamRealmGlobal"),
              (e[(e.k_ESteamRealmChina = 2)] = "k_ESteamRealmChina");
          })(V || (V = {}));
        function H(e, t) {
          return (function (e, t) {
            const n = e.findIndex(t);
            return n >= 0 && (e.splice(n, 1), !0);
          })(e, (e) => t == e);
        }
        function z(e, t, n) {
          return {
            get() {
              let e = n.value.bind(this);
              return (
                this.hasOwnProperty(t) ||
                  Object.defineProperty(this, t, { value: e }),
                e
              );
            },
          };
        }
        class $ {
          constructor() {
            this.m_vecCallbacks = [];
          }
          Register(e) {
            this.m_vecCallbacks.push(e);
            return {
              Unregister: () => {
                H(this.m_vecCallbacks, e);
              },
            };
          }
          Dispatch(...e) {
            for (const t of Array.from(this.m_vecCallbacks)) t(...e);
          }
          ClearAllCallbacks() {
            this.m_vecCallbacks = [];
          }
          CountRegistered() {
            return this.m_vecCallbacks.length;
          }
        }
        s(
          [z],
          class {
            Schedule(e, t) {
              this.IsScheduled() && this.Cancel(),
                (this.m_fnCallback = t),
                (this.m_schTimer = window.setTimeout(
                  this.ScheduledInternal,
                  e,
                ));
            }
            IsScheduled() {
              return void 0 !== this.m_schTimer;
            }
            Cancel() {
              this.m_schTimer &&
                (clearTimeout(this.m_schTimer), (this.m_schTimer = void 0));
            }
            ScheduledInternal() {
              this.m_schTimer = void 0;
              const e = this.m_fnCallback;
              (this.m_fnCallback = void 0), null == e || e();
            }
          }.prototype,
          "ScheduledInternal",
          null,
        );
        s(
          [z],
          class {
            constructor() {
              this.m_vecCallbacks = [];
            }
            Push(e) {
              this.m_vecCallbacks.push(e);
            }
            PushArrayRemove(e, t) {
              this.m_vecCallbacks.push(() => H(e, t));
            }
            Unregister() {
              for (const e of this.m_vecCallbacks) e();
              this.m_vecCallbacks = [];
            }
            GetUnregisterFunc() {
              return this.Unregister;
            }
          }.prototype,
          "Unregister",
          null,
        );
        var Y;
        !(function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Ago = 1)] = "Ago"),
            (e[(e.Remaining = 2)] = "Remaining");
        })(Y || (Y = {}));
        new Map();
        new Map(), new Map();
        new Map(), new Map(), new Map(), new Map(), new Map(), new Map();
        class K {
          constructor() {
            (this.m_mapTokens = new Map()),
              (this.m_mapFallbackTokens = new Map()),
              (this.m_cbkTokensChanged = new $());
          }
          static InstallErrorReportingStore(e) {
            this.sm_ErrorReportingStore = e;
          }
          static GetLanguageFallback(e) {
            return "sc_schinese" === e ? "schinese" : "english";
          }
          static GetELanguageFallback(e) {
            return 29 === e ? 6 : 0;
          }
          static IsELanguageValidInRealm(e, t) {
            return (
              t === (29 === e ? V.k_ESteamRealmChina : V.k_ESteamRealmGlobal)
            );
          }
          static GetLanguageListForRealms(e) {
            const t = new Array();
            for (let n = 0; n < 31; n++)
              for (const s of e)
                if (this.IsELanguageValidInRealm(n, s)) {
                  t.push(n);
                  break;
                }
            return t;
          }
          InitFromObjects(e, t, n, s, i) {
            i || this.m_mapTokens.clear();
            const r = Object.assign(Object.assign({}, n || {}), e),
              a = Object.assign(Object.assign({}, s || {}), t || {});
            this.AddTokens(r, a), this.m_cbkTokensChanged.Dispatch();
          }
          InitDirect(e, t) {
            this.m_mapTokens.clear(),
              this.m_mapFallbackTokens.clear(),
              this.AddTokens(e, t),
              this.m_cbkTokensChanged.Dispatch();
          }
          AddTokens(e, t) {
            Object.keys(e).forEach((t) => {
              this.m_mapTokens.set(t, e[t]);
            }),
              t &&
                Object.keys(t).forEach((e) => {
                  this.m_mapTokens.has(e) || this.m_mapTokens.set(e, t[e]),
                    this.m_mapFallbackTokens.set(e, t[e]);
                });
          }
          GetTokensChangedCallbackList() {
            return this.m_cbkTokensChanged;
          }
          GetPreferredLocales() {
            return this.m_rgLocalesToUse
              ? this.m_rgLocalesToUse
              : navigator && navigator.languages
                ? navigator.languages
                : ["en-US"];
          }
          GetELanguageFallbackOrder(e = null) {
            let t = new Array();
            if (
              (t.push(y(f.LANGUAGE)),
              (f.SUPPORTED_LANGUAGES || []).forEach((e) => {
                e.value != f.LANGUAGE && t.push(y(e.value));
              }),
              e)
            ) {
              K.GetLanguageListForRealms(e).forEach((e) => {
                -1 == t.indexOf(e) && t.push(e);
              });
            }
            return t;
          }
          SetPreferredLocales(e) {
            this.m_rgLocalesToUse = e;
          }
          BLooksLikeToken(e) {
            return e && e.length > 0 && "#" == e.charAt(0);
          }
          LocalizeIfToken(e, t) {
            return this.BLooksLikeToken(e) ? this.LocalizeString(e, t) : e;
          }
          LocalizeString(e, t) {
            if (!this.BLooksLikeToken(e)) return;
            let n = this.m_mapTokens.get(e.substring(1));
            if (void 0 !== n) return n;
            !t &&
              K.sm_ErrorReportingStore &&
              K.sm_ErrorReportingStore.ReportError(
                new Error(
                  `Unable to find localization token '${e}' for language '${f.LANGUAGE}', ${this.m_mapTokens.size} tokens in map`,
                ),
                { bIncludeMessageInIdentifier: !0 },
              );
          }
          LocalizeStringFromFallback(e) {
            if (!e || 0 == e.length || "#" != e.charAt(0)) return;
            let t = this.m_mapFallbackTokens.get(e.substring(1));
            return void 0 !== t ? t : void 0;
          }
        }
        function q(e, ...t) {
          let n = Q.LocalizeString(e);
          return void 0 === n ? e : Z(n, ...t);
        }
        function J(e, ...t) {
          let n = Q.LocalizeString(e);
          if (void 0 === n) return e;
          let s,
            i = [],
            a = /(.*?)%(\d+)\$s/g,
            o = 0;
          for (; (s = a.exec(n)); ) {
            (o += s[0].length), i.push(s[1]);
            let e = parseInt(s[2]);
            e >= 1 && e <= t.length && i.push(t[e - 1]);
          }
          return i.push(n.substr(o)), r.createElement(r.Fragment, null, ...i);
        }
        function Z(e, ...t) {
          return 0 == t.length
            ? e
            : (e = e.replace(/%(?:(\d+)\$)?s/g, function (e, n) {
                if (n <= t.length && n >= 1) {
                  let e = t[n - 1];
                  return String(null == e ? "" : e);
                }
                return e;
              }));
        }
        const Q = new K();
        function X(e, t, ...n) {
          console.assert
            ? 0 == n.length
              ? console.assert(!!e, t)
              : console.assert(!!e, t, ...n)
            : e || console.warn(t, ...n);
        }
        window.LocalizationManager = Q;
        var ee = n(79588),
          te = n(50649);
        class ne {
          constructor(e) {
            (this.m_bReady = !1),
              (this.m_bValid = !1),
              (0, ee.rC)(this),
              (this.m_strInviteCode = e);
          }
          BIsReady() {
            return this.m_bReady;
          }
          BIsValid() {
            return this.m_bValid;
          }
          BIsInviteLink() {
            return !!this.m_strInviteCode;
          }
          GetInviteCode() {
            return this.m_strInviteCode;
          }
          BNeverExpires() {
            return this.m_rtTimeExpires == T;
          }
          GetChatRoomGroupID() {
            return this.m_ulChatRoomGroupID;
          }
          BIsVoiceChatInvite() {
            return !!this.m_ulChatID;
          }
          GetChatID() {
            return this.m_ulChatID;
          }
          GetURL() {
            return this.m_strInviteCode
              ? ((e = this.m_strInviteCode),
                "public" == f.WEB_UNIVERSE
                  ? `https://s.team/chat/${e}`
                  : `${f.COMMUNITY_BASE_URL}chat/invite/${e}`)
              : null;
            var e;
          }
          BIsUserBanned() {
            return this.m_bIsBanned;
          }
          GetTimeKickExpires() {
            return this.m_rtKickExpires;
          }
          get time_expires() {
            return this.m_rtTimeExpires;
          }
          InitInvalid() {
            (this.m_bValid = !1), (this.m_bReady = !0);
          }
          InitDirectInvite(e, t, n = !1, s = void 0) {
            (this.m_ulChatRoomGroupID = e),
              (this.m_ulChatID = t),
              (this.m_bIsBanned = n),
              (this.m_rtKickExpires = s),
              (this.m_rtTimeExpires = T),
              (this.m_bValid = !0),
              (this.m_bReady = !0);
          }
        }
        s([ee.LO], ne.prototype, "m_bReady", void 0),
          s([ee.aD], ne.prototype, "InitInvalid", null),
          s([ee.aD], ne.prototype, "InitDirectInvite", null);
        var se = n(72080);
        class ie {
          constructor(e = 0, t, n, s) {
            e instanceof ie
              ? (this.m_ulSteamID = e.m_ulSteamID)
              : "string" == typeof e
                ? (this.m_ulSteamID = se.Z.fromString(e, !0))
                : t && n && void 0 !== s
                  ? this.SetFromComponents(null != e ? e : 0, s, n, t)
                  : (this.m_ulSteamID = e
                      ? se.Z.fromNumber(e, !0)
                      : se.Z.UZERO);
          }
          static InitFromAccountID(e) {
            return new ie(Number(e), f.EUNIVERSE, 1, 1);
          }
          static InitFromClanID(e) {
            return new ie(Number(e), f.EUNIVERSE, 7, 0);
          }
          GetAccountID() {
            return this.m_ulSteamID.getLowBitsUnsigned();
          }
          GetInstance() {
            return 1048575 & this.m_ulSteamID.getHighBitsUnsigned();
          }
          GetAccountType() {
            return (this.m_ulSteamID.getHighBitsUnsigned() >> 20) & 15;
          }
          GetUniverse() {
            return (this.m_ulSteamID.getHighBitsUnsigned() >> 24) & 255;
          }
          ConvertTo64BitString() {
            return this.m_ulSteamID.toString();
          }
          Render() {
            switch (this.GetAccountType()) {
              case 0:
                return (
                  "[I:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                );
              case 7:
                return (
                  "[g:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                );
              case 4:
                return (
                  "[A:" +
                  this.GetUniverse() +
                  ":" +
                  this.GetAccountID() +
                  ":" +
                  this.GetInstance() +
                  "]"
                );
              case 3:
                return (
                  "[G:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                );
              case 2:
                return (
                  "[M:" +
                  this.GetUniverse() +
                  ":" +
                  this.GetAccountID() +
                  ":" +
                  this.GetInstance() +
                  "]"
                );
              case 5:
                return (
                  "[P:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                );
              case 6:
                return (
                  "[C:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                );
              default:
                return (
                  "[U:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                );
            }
          }
          static InitFromString(e) {
            let t = new ie();
            try {
              let [n, s, i, r, a] =
                  e.match(/\[([I|g|A|G|M|P|C|U]):(\d+):(\d+):?(\d+)?\]/) || [],
                o = Number(i),
                c = Number(r),
                l = a ? Number(a) : 1;
              switch (s) {
                case "I":
                  t.SetFromComponents(c, l, 0, o);
                case "g":
                  t.SetFromComponents(c, 0, 7, o);
                case "A":
                  t.SetFromComponents(c, l, 4, o);
                case "G":
                  t.SetFromComponents(c, l, 3, o);
                case "M":
                  t.SetFromComponents(c, l, 2, o);
                case "P":
                  t.SetFromComponents(c, l, 5, o);
                case "C":
                  t.SetFromComponents(c, l, 6, o);
                case "U":
                  t.SetFromComponents(c, l, 1, o);
              }
            } catch (e) {}
            return t;
          }
          BIsValid() {
            let e = this.GetAccountType();
            if (e <= 0 || e >= 11) return !1;
            let t = this.GetUniverse();
            if (t <= 0 || t >= 5) return !1;
            if (1 == e) {
              if (0 == this.GetAccountID() || this.GetInstance() > 4) return !1;
            } else if (7 == e) {
              if (0 == this.GetAccountID() || 0 != this.GetInstance())
                return !1;
            } else if (3 == e && 0 == this.GetAccountID()) return !1;
            return !0;
          }
          BIsIndividualAccount() {
            return 1 == this.GetAccountType();
          }
          BIsClanAccount() {
            return 7 == this.GetAccountType();
          }
          SetAccountID(e) {
            this.m_ulSteamID = new se.Z(
              e,
              this.m_ulSteamID.getHighBitsUnsigned(),
              !0,
            );
          }
          SetInstance(e) {
            this.SetFromComponents(
              this.GetAccountID(),
              e,
              this.GetAccountType(),
              this.GetUniverse(),
            );
          }
          SetAccountType(e) {
            this.SetFromComponents(
              this.GetAccountID(),
              this.GetInstance(),
              e,
              this.GetUniverse(),
            );
          }
          SetUniverse(e) {
            this.SetFromComponents(
              this.GetAccountID(),
              this.GetInstance(),
              this.GetAccountType(),
              e,
            );
          }
          SetFromComponents(e, t, n, s) {
            let i = ((255 & s) << 24) + ((15 & n) << 20) + (1048575 & t),
              r = 4294967295 & e;
            this.m_ulSteamID = new se.Z(r, i, !0);
          }
        }
        var re = n(82989);
        class ae extends ne {
          constructor(e) {
            super(e), (0, ee.rC)(this);
          }
          BIsExpired() {
            return oe.sm_rtTimeCur >= this.m_rtTimeExpires;
          }
          InitFromPHPInviteLinkInfo(e) {
            this.m_ulChatID = e.chat_id;
            let t = new ie(e.steamid_sender);
            t.BIsIndividualAccount() &&
              (this.m_unAccountIDInviter = t.GetAccountID()),
              (this.m_rtTimeExpires = e.time_expires),
              (this.m_bIsBanned = e.banned),
              (this.m_rtKickExpires = e.time_kick_expire),
              e.group_summary &&
                (this.m_ulChatRoomGroupID = e.group_summary.chat_group_id),
              (this.m_bValid = !0),
              (this.m_bReady = !0);
          }
        }
        s([ee.aD], ae.prototype, "InitFromPHPInviteLinkInfo", null);
        class oe {
          constructor(e) {
            (this.m_bConnectingToClient = !1),
              (this.m_connectResult = void 0),
              (0, ee.rC)(this),
              (this.m_invite = new ae(e.strInviteCode)),
              e.Invite
                ? this.m_invite.InitFromPHPInviteLinkInfo(e.Invite)
                : this.m_invite.InitInvalid(),
              (this.m_htmlPreRendered = e.render),
              this.SendInviteToClient();
          }
          BIsInviteValid() {
            return this.m_invite.BIsValid() && !this.m_invite.BIsExpired();
          }
          GetInvite() {
            return this.m_invite;
          }
          BIsConnectingToClient() {
            return this.m_bConnectingToClient;
          }
          GetConnectResults() {
            return this.m_connectResult;
          }
          GetPreRenderedHTML() {
            return this.m_htmlPreRendered;
          }
          LaunchWebChat() {
            !(function (e) {
              let t = window.open("", "SteamWebChat", "");
              if (!t) return;
              let n = !1,
                s = !1;
              try {
                n = "about:blank" == t.location.href;
              } catch (e) {
                s = !0;
              }
              if (n) {
                if (e) {
                  let n = function (s) {
                    let i = f.COMMUNITY_BASE_URL.replace(
                      /(https?:\/\/[^/]*).*$/,
                      "$1",
                    );
                    s.source == t &&
                      "FriendsUIReady" == s.data &&
                      s.origin == i &&
                      (t.postMessage(e, f.COMMUNITY_BASE_URL),
                      window.removeEventListener("message", n));
                  };
                  window.addEventListener("message", n);
                }
                t.location.href = f.COMMUNITY_BASE_URL + "chat/";
              } else e && t.postMessage(e, f.COMMUNITY_BASE_URL);
              t.focus();
            })({
              command: "ShowChatRoomGroupInvite",
              invite_code: this.m_invite.GetInviteCode(),
            });
          }
          LaunchSteamIgnoreAccount() {
            v.SetAllowAccountMismatch(!0), this.SendInviteToClient();
          }
          ForceLaunchSteamClient() {
            window.location.href = `steam://friends/ShowChatRoomGroupInvite/${this.m_invite.GetInviteCode()}`;
          }
          SendInviteToClient() {
            this.m_invite.BIsValid() &&
              !this.m_invite.BIsExpired() &&
              ((this.m_bConnectingToClient = !0),
              v
                .ShowChatRoomGroupInvite(this.m_invite.GetInviteCode())
                .then((e) => {
                  (0, ee.z)(() => {
                    (this.m_bConnectingToClient = !1),
                      (this.m_connectResult = e),
                      console.log(e);
                  });
                }));
          }
        }
        s([ee.LO], oe.prototype, "m_bConnectingToClient", void 0),
          s([ee.LO], oe.prototype, "m_connectResult", void 0);
        let ce = class extends r.Component {
          render() {
            return r.createElement(
              "div",
              { className: "InviteLandingRoot" },
              this.props.controller.BIsInviteValid()
                ? r.createElement(le, { controller: this.props.controller })
                : r.createElement(_e, { controller: this.props.controller }),
            );
          }
        };
        ce = s([te.Pi], ce);
        let le = class extends r.Component {
          constructor(e) {
            super(e), (this.m_bTriedToLaunchSteam = !1), (0, ee.rC)(this);
          }
          LaunchWebChat() {
            this.props.controller.LaunchWebChat();
          }
          OpenInSteamIgnoreAccount() {
            this.props.controller.LaunchSteamIgnoreAccount();
          }
          LaunchSteamClient() {
            this.props.controller.ForceLaunchSteamClient(),
              window.setTimeout(() => {
                this.m_bTriedToLaunchSteam = !0;
              }, 1e3);
          }
          IsMobileDevice() {
            switch (new re.UAParser(navigator.userAgent).getResult().os.name) {
              case "iOS":
              case "Android":
              case "BlackBerry":
                return !0;
            }
            return !1;
          }
          render() {
            if (this.props.controller.BIsConnectingToClient())
              return r.createElement(
                "div",
                { className: "ChatMessageInvite RequestingInfo NoColumns" },
                r.createElement(
                  "div",
                  { className: "postedExpiredInvite" },
                  q("#bbcode_invite_requesting_info"),
                ),
              );
            let e = this.props.controller.GetConnectResults(),
              t = this.props.controller.GetInvite(),
              n = (f.COMMUNITY_BASE_URL, this.IsMobileDevice()),
              s = "inviteButton inviteButtonJoinChat";
            return (
              t.BIsVoiceChatInvite() && (s += " inviteButtonJoinVoice"),
              e.success
                ? r.createElement(
                    "div",
                    { className: "ChatMessageInvite NoColumns" },
                    r.createElement(
                      "div",
                      { className: "groupName" },
                      q("#InviteLanding_SentToSteam"),
                    ),
                    r.createElement(
                      "div",
                      { className: "inviteLabel" },
                      J(
                        "#InviteLanding_SentToSteam_Desc",
                        r.createElement(
                          "a",
                          { href: "#", onClick: this.LaunchWebChat },
                          q("#InviteLanding_SentToSteam_Desc_LaunchWebChat"),
                        ),
                      ),
                    ),
                  )
                : e.account_mismatch
                  ? r.createElement(
                      ue,
                      { render: this.props.controller.GetPreRenderedHTML() },
                      r.createElement(
                        "div",
                        { className: "inviteLabel" },
                        q("#InviteLanding_AccountMismatch"),
                      ),
                      r.createElement(
                        "div",
                        { className: "inviteLabel" },
                        r.createElement(
                          "button",
                          {
                            className: s,
                            type: "button",
                            onClick: this.OpenInSteamIgnoreAccount,
                          },
                          q("#InviteLanding_OpenInSteam"),
                        ),
                        r.createElement(
                          "button",
                          {
                            className: s,
                            type: "button",
                            onClick: this.LaunchWebChat,
                          },
                          q("#InviteLanding_OpenInWebChat"),
                        ),
                      ),
                    )
                  : e.call_unsupported
                    ? r.createElement(
                        "div",
                        { className: "ChatMessageInvite" },
                        r.createElement(
                          "div",
                          { className: "groupName" },
                          q("#InviteLanding_SentToSteam"),
                        ),
                        r.createElement(
                          "div",
                          { className: "inviteLabel" },
                          J(
                            "#InviteLanding_SentToSteam_Desc",
                            r.createElement(
                              "a",
                              { href: "#", onClick: this.LaunchWebChat },
                              q(
                                "#InviteLanding_SentToSteam_Desc_LaunchWebChat",
                              ),
                            ),
                          ),
                        ),
                      )
                    : r.createElement(
                        ue,
                        { render: this.props.controller.GetPreRenderedHTML() },
                        r.createElement(
                          "div",
                          { className: "inviteLabel inviteLabelButtons" },
                          !n &&
                            r.createElement(
                              "button",
                              {
                                className: s,
                                type: "button",
                                onClick: this.LaunchSteamClient,
                              },
                              q("#InviteLanding_OpenInSteam"),
                            ),
                          r.createElement(
                            "button",
                            {
                              className: s,
                              type: "button",
                              onClick: this.LaunchWebChat,
                            },
                            q("#InviteLanding_OpenInWebChat"),
                          ),
                        ),
                        this.m_bTriedToLaunchSteam &&
                          r.createElement(
                            "div",
                            {
                              className: "inviteLabel inviteLabelLaunchPrompt",
                            },
                            q("#InviteLanding_OpenInSteam_Help"),
                          ),
                      )
            );
          }
        };
        s([ee.LO], le.prototype, "m_bTriedToLaunchSteam", void 0),
          s([z], le.prototype, "LaunchWebChat", null),
          s([z], le.prototype, "OpenInSteamIgnoreAccount", null),
          s([z], le.prototype, "LaunchSteamClient", null),
          (le = s([te.Pi], le));
        class _e extends r.Component {
          render() {
            return r.createElement(
              "div",
              { className: "ChatMessageInvite" },
              r.createElement(
                "div",
                { className: "postedExpiredInvite" },
                q("#InviteLanding_ExpiredOrInvalid"),
              ),
            );
          }
        }
        function ue(e) {
          return r.createElement(
            "div",
            { className: "ChatMessageInvite" },
            r.createElement("div", {
              className: "leftInviteContainer",
              dangerouslySetInnerHTML: { __html: e.render.strAvatarHTML },
            }),
            r.createElement(
              "div",
              { className: "rightInviteContainer" },
              r.createElement(
                "div",
                { className: "inviteLabel" },
                J(
                  "#bbcode_invite_description",
                  r.createElement("span", {
                    dangerouslySetInnerHTML: {
                      __html: e.render.strInviterNameLinkHTML,
                    },
                  }),
                ),
              ),
              r.createElement(
                "div",
                { className: "groupName" },
                e.render.strChatRoomGroupName,
              ),
              e.children,
            ),
          );
        }
        window.AssertMsg = X;
        let de = new b();
        function he(e) {
          let t;
          try {
            t = JSON.parse(e.getAttribute("data-inviteinfo"));
          } catch (e) {}
          oe.sm_rtTimeCur = t.rtTimeCur;
          let n = new oe(t);
          a.s(e).render(r.createElement(ce, { controller: n }));
        }
        (window.ClientConnectionAPI = de),
          document.addEventListener("DOMContentLoaded", function () {
            return i(this, void 0, void 0, function* () {
              d(),
                yield (function (e) {
                  return i(this, void 0, void 0, function* () {
                    const t = K.GetLanguageFallback(e),
                      s = e === t,
                      [i, r, a, o] = yield Promise.all([
                        n(41171)(`./shared_${e}.json`),
                        n(3119)(`./friendsui_${e}.json`),
                        s ? {} : n(91090)(`./shared_${t}.json`),
                        s ? {} : n(9014)(`./friendsui_${t}.json`),
                      ]);
                    Q.AddTokens(
                      Object.assign(Object.assign({}, i), r),
                      Object.assign(Object.assign({}, a), o),
                    );
                  });
                })(f.LANGUAGE),
                (function () {
                  let e = document.querySelectorAll(".ChatReactRoot");
                  for (let t = 0; t < e.length; t++) {
                    let n = e[t],
                      s = n.getAttribute("data-component");
                    "ChatInvite" === s
                      ? he(n)
                      : X(!1, `unknown component: "${s}"`);
                  }
                })();
            });
          });
      },
      60660: (e, t, n) => {
        "use strict";
        "VALVE_PUBLIC_PATH" in window
          ? (n.p = window.VALVE_PUBLIC_PATH)
          : console.error(
              "VALVE_PUBLIC_PATH not defined; check for a call to CHTMLHelpers::WebpackConfigScriptlet",
            ),
          123 !== Array.from(new Set([123]))[0] &&
            console.error("Should not include prototypejs.");
      },
      41171: (e, t, n) => {
        var s = {
          "./shared_arabic.json": [78501, 2431],
          "./shared_brazilian.json": [55106, 8385],
          "./shared_bulgarian.json": [34469, 1313],
          "./shared_czech.json": [93182, 4189],
          "./shared_danish.json": [87113, 9753],
          "./shared_dutch.json": [80737, 5925],
          "./shared_english.json": [48751, 7975],
          "./shared_finnish.json": [7817, 3557],
          "./shared_french.json": [50731, 3112],
          "./shared_german.json": [54811, 6007],
          "./shared_greek.json": [90175, 4297],
          "./shared_hungarian.json": [49628, 5948],
          "./shared_indonesian.json": [46741, 8754],
          "./shared_italian.json": [90116, 5933],
          "./shared_japanese.json": [15055, 2844],
          "./shared_koreana.json": [82062, 6542],
          "./shared_latam.json": [97679, 2443],
          "./shared_norwegian.json": [33469, 4108],
          "./shared_polish.json": [13255, 3252],
          "./shared_portuguese.json": [77294, 5849],
          "./shared_romanian.json": [3850, 4823],
          "./shared_russian.json": [76440, 9062],
          "./shared_sc_schinese.json": [16386, 2029],
          "./shared_schinese.json": [65933, 2537],
          "./shared_spanish.json": [2712, 6492],
          "./shared_swedish.json": [85835, 5625],
          "./shared_tchinese.json": [85918, 7602],
          "./shared_thai.json": [63269, 1162],
          "./shared_turkish.json": [27810, 5438],
          "./shared_ukrainian.json": [32110, 7781],
          "./shared_vietnamese.json": [59201, 4964],
        };
        function i(e) {
          if (!n.o(s, e))
            return Promise.resolve().then(() => {
              var t = new Error("Cannot find module '" + e + "'");
              throw ((t.code = "MODULE_NOT_FOUND"), t);
            });
          var t = s[e],
            i = t[0];
          return n.e(t[1]).then(() => n.t(i, 19));
        }
        (i.keys = () => Object.keys(s)), (i.id = 41171), (e.exports = i);
      },
      91090: (e, t, n) => {
        var s = {
          "./shared_arabic.json": [78501, 2431],
          "./shared_brazilian.json": [55106, 8385],
          "./shared_bulgarian.json": [34469, 1313],
          "./shared_czech.json": [93182, 4189],
          "./shared_danish.json": [87113, 9753],
          "./shared_dutch.json": [80737, 5925],
          "./shared_english.json": [48751, 7975],
          "./shared_finnish.json": [7817, 3557],
          "./shared_french.json": [50731, 3112],
          "./shared_german.json": [54811, 6007],
          "./shared_greek.json": [90175, 4297],
          "./shared_hungarian.json": [49628, 5948],
          "./shared_indonesian.json": [46741, 8754],
          "./shared_italian.json": [90116, 5933],
          "./shared_japanese.json": [15055, 2844],
          "./shared_koreana.json": [82062, 6542],
          "./shared_latam.json": [97679, 2443],
          "./shared_norwegian.json": [33469, 4108],
          "./shared_polish.json": [13255, 3252],
          "./shared_portuguese.json": [77294, 5849],
          "./shared_romanian.json": [3850, 4823],
          "./shared_russian.json": [76440, 9062],
          "./shared_sc_schinese.json": [16386, 2029],
          "./shared_schinese.json": [65933, 2537],
          "./shared_spanish.json": [2712, 6492],
          "./shared_swedish.json": [85835, 5625],
          "./shared_tchinese.json": [85918, 7602],
          "./shared_thai.json": [63269, 1162],
          "./shared_turkish.json": [27810, 5438],
          "./shared_ukrainian.json": [32110, 7781],
          "./shared_vietnamese.json": [59201, 4964],
        };
        function i(e) {
          if (!n.o(s, e))
            return Promise.resolve().then(() => {
              var t = new Error("Cannot find module '" + e + "'");
              throw ((t.code = "MODULE_NOT_FOUND"), t);
            });
          var t = s[e],
            i = t[0];
          return n.e(t[1]).then(() => n.t(i, 19));
        }
        (i.keys = () => Object.keys(s)), (i.id = 91090), (e.exports = i);
      },
    },
    a = {};
  function o(e) {
    var t = a[e];
    if (void 0 !== t) return t.exports;
    var n = (a[e] = { id: e, loaded: !1, exports: {} });
    return r[e].call(n.exports, n, n.exports, o), (n.loaded = !0), n.exports;
  }
  (o.m = r),
    (o.amdO = {}),
    (e = []),
    (o.O = (t, n, s, i) => {
      if (!n) {
        var r = 1 / 0;
        for (_ = 0; _ < e.length; _++) {
          for (var [n, s, i] = e[_], a = !0, c = 0; c < n.length; c++)
            (!1 & i || r >= i) && Object.keys(o.O).every((e) => o.O[e](n[c]))
              ? n.splice(c--, 1)
              : ((a = !1), i < r && (r = i));
          if (a) {
            e.splice(_--, 1);
            var l = s();
            void 0 !== l && (t = l);
          }
        }
        return t;
      }
      i = i || 0;
      for (var _ = e.length; _ > 0 && e[_ - 1][2] > i; _--) e[_] = e[_ - 1];
      e[_] = [n, s, i];
    }),
    (o.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return o.d(t, { a: t }), t;
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (o.t = function (e, s) {
      if ((1 & s && (e = this(e)), 8 & s)) return e;
      if ("object" == typeof e && e) {
        if (4 & s && e.__esModule) return e;
        if (16 & s && "function" == typeof e.then) return e;
      }
      var i = Object.create(null);
      o.r(i);
      var r = {};
      t = t || [null, n({}), n([]), n(n)];
      for (var a = 2 & s && e; "object" == typeof a && !~t.indexOf(a); a = n(a))
        Object.getOwnPropertyNames(a).forEach((t) => (r[t] = () => e[t]));
      return (r.default = () => e), o.d(i, r), i;
    }),
    (o.d = (e, t) => {
      for (var n in t)
        o.o(t, n) &&
          !o.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (o.f = {}),
    (o.e = (e) =>
      Promise.all(Object.keys(o.f).reduce((t, n) => (o.f[n](e, t), t), []))),
    (o.u = (e) =>
      "javascript/webui/" +
      {
        699: "friendsui_polish-json",
        1162: "shared_thai-json",
        1313: "shared_bulgarian-json",
        1471: "friendsui_greek-json",
        1635: "friendsui_vietnamese-json",
        2029: "shared_sc_schinese-json",
        2431: "shared_arabic-json",
        2443: "shared_latam-json",
        2537: "shared_schinese-json",
        2822: "friendsui_ukrainian-json",
        2844: "shared_japanese-json",
        2862: "friendsui_brazilian-json",
        2913: "friendsui_russian-json",
        3112: "shared_french-json",
        3140: "friendsui_sc_schinese-json",
        3182: "friendsui_romanian-json",
        3252: "shared_polish-json",
        3471: "friendsui_spanish-json",
        3500: "friendsui_french-json",
        3557: "shared_finnish-json",
        4108: "shared_norwegian-json",
        4189: "shared_czech-json",
        4264: "friendsui_portuguese-json",
        4297: "shared_greek-json",
        4448: "friendsui_czech-json",
        4596: "friendsui_finnish-json",
        4716: "friendsui_norwegian-json",
        4823: "shared_romanian-json",
        4964: "shared_vietnamese-json",
        4989: "friendsui_german-json",
        5438: "shared_turkish-json",
        5625: "shared_swedish-json",
        5632: "friendsui_turkish-json",
        5802: "friendsui_hungarian-json",
        5849: "shared_portuguese-json",
        5925: "shared_dutch-json",
        5933: "shared_italian-json",
        5948: "shared_hungarian-json",
        6007: "shared_german-json",
        6492: "shared_spanish-json",
        6542: "shared_koreana-json",
        6646: "friendsui_indonesian-json",
        6727: "friendsui_japanese-json",
        6986: "friendsui_koreana-json",
        6992: "friendsui_arabic-json",
        7340: "friendsui_tchinese-json",
        7575: "friendsui_dutch-json",
        7602: "shared_tchinese-json",
        7651: "friendsui_latam-json",
        7706: "friendsui_schinese-json",
        7781: "shared_ukrainian-json",
        7975: "shared_english-json",
        8247: "friendsui_english-json",
        8385: "shared_brazilian-json",
        8518: "friendsui_bulgarian-json",
        8754: "shared_indonesian-json",
        8815: "friendsui_italian-json",
        9062: "shared_russian-json",
        9263: "friendsui_thai-json",
        9753: "shared_danish-json",
        9775: "friendsui_danish-json",
        9818: "friendsui_swedish-json",
      }[e] +
      ".js?contenthash=" +
      {
        699: "d287362394c66301f6a5",
        1162: "ce87c90f39c9d87592f0",
        1313: "beaa8a39130794d9fa41",
        1471: "32d2e1addd119c9a70d4",
        1635: "7fb5be12f6f106e555ae",
        2029: "4fdcd884a906cc678e8f",
        2431: "423f5ac04b6d9e2e0940",
        2443: "89ecf2e7069782684352",
        2537: "945f6687344fbb3315a2",
        2822: "499d328e9322732c7f24",
        2844: "1af1c9ec74f414ecfabf",
        2862: "70b5a10f55a9dbdc4089",
        2913: "565378b821b0f60d7f9e",
        3112: "6a14ccd94bac413afdcf",
        3140: "e2daae18faf0f0c9eae9",
        3182: "d91f1a3f65fef05cb7ff",
        3252: "7ade274d3a297474af53",
        3471: "1fa97f49b537a5fe3dc5",
        3500: "d1e224fca60b25b5aa2b",
        3557: "84dc10627f5fe61b64a1",
        4108: "0cc57d874f9e93d935b1",
        4189: "b931e078dcc06a00f008",
        4264: "28117007a2a71c0de1f3",
        4297: "5f1f0c54a64f60c51097",
        4448: "3e213de66fdb4e0ad545",
        4596: "2959bbbbf75e4d2f7018",
        4716: "98123150e52e2a64b3f9",
        4823: "3f066a831243fdadf21e",
        4964: "cab3e57ddb6241021242",
        4989: "0e8c27f0588379f5b0d7",
        5438: "511f20e3150072270f65",
        5625: "97d9982b423ea1e0cda7",
        5632: "05176cb3768918b0b14c",
        5802: "9126f152932543539600",
        5849: "b750d12845cbb7100871",
        5925: "a23c7ec9382ea1e0154e",
        5933: "ced50b7a1d39012e4316",
        5948: "2dfd72f950b0e643518a",
        6007: "ce164a182657320a64e1",
        6492: "febbbfe165a27faa0439",
        6542: "a7d93796c06fc3d83247",
        6646: "ead86708f0d676cd4c89",
        6727: "3398c84fd8a865364e2e",
        6986: "27f1b00b2abcb9e4e660",
        6992: "4ad80ddfef0256c67745",
        7340: "8eb3f934cdeab7467244",
        7575: "46fb161b176766f7c039",
        7602: "86bcd122bfaa3f47d409",
        7651: "ed21e68f4dc1763c7246",
        7706: "91b62cba38767f3b7a23",
        7781: "278d5efa9ace17efc105",
        7975: "f6f0da74cf7d386a0c73",
        8247: "d0562c540f1faa49f914",
        8385: "da3670897e4f73c98354",
        8518: "426f9ec21d5e84056226",
        8754: "1650c01fe329be3e8c80",
        8815: "e149c4b04f53fd7ac7c5",
        9062: "88c9371007fe7da9fd4e",
        9263: "079af19a372abc43f518",
        9753: "2e290be25fe11f4de471",
        9775: "7f0e8f13b0ef51741526",
        9818: "47b2f0a64053c24d7596",
      }[e]),
    (o.miniCssF = (e) => {}),
    (o.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (s = {}),
    (i = "@steam/friendsui:"),
    (o.l = (e, t, n, r) => {
      if (s[e]) s[e].push(t);
      else {
        var a, c;
        if (void 0 !== n)
          for (
            var l = document.getElementsByTagName("script"), _ = 0;
            _ < l.length;
            _++
          ) {
            var u = l[_];
            if (
              u.getAttribute("src") == e ||
              u.getAttribute("data-webpack") == i + n
            ) {
              a = u;
              break;
            }
          }
        a ||
          ((c = !0),
          ((a = document.createElement("script")).charset = "utf-8"),
          (a.timeout = 120),
          o.nc && a.setAttribute("nonce", o.nc),
          a.setAttribute("data-webpack", i + n),
          (a.src = e)),
          (s[e] = [t]);
        var d = (t, n) => {
            (a.onerror = a.onload = null), clearTimeout(h);
            var i = s[e];
            if (
              (delete s[e],
              a.parentNode && a.parentNode.removeChild(a),
              i && i.forEach((e) => e(n)),
              t)
            )
              return t(n);
          },
          h = setTimeout(
            d.bind(null, void 0, { type: "timeout", target: a }),
            12e4,
          );
        (a.onerror = d.bind(null, a.onerror)),
          (a.onload = d.bind(null, a.onload)),
          c && document.head.appendChild(a);
      }
    }),
    (o.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (o.j = 1856),
    (() => {
      var e;
      o.g.importScripts && (e = o.g.location + "");
      var t = o.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var n = t.getElementsByTagName("script");
        if (n.length) for (var s = n.length - 1; s > -1 && !e; ) e = n[s--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (o.p = e + "../../");
    })(),
    (() => {
      var e = { 1856: 0 };
      (o.f.j = (t, n) => {
        var s = o.o(e, t) ? e[t] : void 0;
        if (0 !== s)
          if (s) n.push(s[2]);
          else {
            var i = new Promise((n, i) => (s = e[t] = [n, i]));
            n.push((s[2] = i));
            var r = o.p + o.u(t),
              a = new Error();
            o.l(
              r,
              (n) => {
                if (o.o(e, t) && (0 !== (s = e[t]) && (e[t] = void 0), s)) {
                  var i = n && ("load" === n.type ? "missing" : n.type),
                    r = n && n.target && n.target.src;
                  (a.message =
                    "Loading chunk " + t + " failed.\n(" + i + ": " + r + ")"),
                    (a.name = "ChunkLoadError"),
                    (a.type = i),
                    (a.request = r),
                    s[1](a);
                }
              },
              "chunk-" + t,
              t,
            );
          }
      }),
        (o.O.j = (t) => 0 === e[t]);
      var t = (t, n) => {
          var s,
            i,
            [r, a, c] = n,
            l = 0;
          if (r.some((t) => 0 !== e[t])) {
            for (s in a) o.o(a, s) && (o.m[s] = a[s]);
            if (c) var _ = c(o);
          }
          for (t && t(n); l < r.length; l++)
            (i = r[l]), o.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return o.O(_);
        },
        n = (self.webpackChunk_steam_friendsui =
          self.webpackChunk_steam_friendsui || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var c = o.O(void 0, [5968], () => o(11551));
  c = o.O(c);
})();
