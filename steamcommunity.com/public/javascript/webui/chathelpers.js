/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7600373";
(() => {
  var e,
    t,
    n,
    i,
    s,
    r = {
      38302: (e, t, n) => {
        "use strict";
        function i(e, t, n, i) {
          var s,
            r = arguments.length,
            o =
              r < 3
                ? t
                : null === i
                ? (i = Object.getOwnPropertyDescriptor(t, n))
                : i;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            o = Reflect.decorate(e, t, n, i);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (s = e[a]) &&
                (o = (r < 3 ? s(o) : r > 3 ? s(t, n, o) : s(t, n)) || o);
          return r > 3 && o && Object.defineProperty(t, n, o), o;
        }
        function s(e, t, n, i) {
          return new (n || (n = Promise))(function (s, r) {
            function o(e) {
              try {
                c(i.next(e));
              } catch (e) {
                r(e);
              }
            }
            function a(e) {
              try {
                c(i.throw(e));
              } catch (e) {
                r(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? s(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(o, a);
            }
            c((i = i.apply(e, t || [])).next());
          });
        }
        Object.create;
        Object.create;
        n(84890);
        var r = n(87363),
          o = n(61533);
        function a(e) {
          if (!c() || !window.document.cookie) return null;
          let t = document.cookie.match("(^|; )" + e + "=([^;]*)");
          return t && t[2] ? decodeURIComponent(t[2]) : null;
        }
        function c() {
          return !!window.document;
        }
        const l = 2147483647;
        function u(e, t = 0) {
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
        var _, d, h, m, p, f, E, g, k, C, v;
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
        })(_ || (_ = {})),
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
          })(d || (d = {})),
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
          })(h || (h = {})),
          (function (e) {
            (e[(e.k_EFloatingGamepadTextInputModeModeSingleLine = 0)] =
              "k_EFloatingGamepadTextInputModeModeSingleLine"),
              (e[(e.k_EFloatingGamepadTextInputModeModeMultipleLines = 1)] =
                "k_EFloatingGamepadTextInputModeModeMultipleLines"),
              (e[(e.k_EFloatingGamepadTextInputModeModeEmail = 2)] =
                "k_EFloatingGamepadTextInputModeModeEmail"),
              (e[(e.k_EFloatingGamepadTextInputModeModeNumeric = 3)] =
                "k_EFloatingGamepadTextInputModeModeNumeric");
          })(m || (m = {})),
          (function (e) {
            (e[(e.k_EAppUpdateContentType_Content = 0)] =
              "k_EAppUpdateContentType_Content"),
              (e[(e.k_EAppUpdateContentType_Workshop = 1)] =
                "k_EAppUpdateContentType_Workshop"),
              (e[(e.k_EAppUpdateContentType_Shader = 2)] =
                "k_EAppUpdateContentType_Shader"),
              (e[(e.k_EAppUpdateContentType_Max = 3)] =
                "k_EAppUpdateContentType_Max");
          })(p || (p = {})),
          (function (e) {
            (e[(e.k_EOverlayToStoreFlag_None = 0)] =
              "k_EOverlayToStoreFlag_None"),
              (e[(e.k_EOverlayToStoreFlag_AddToCart = 1)] =
                "k_EOverlayToStoreFlag_AddToCart"),
              (e[(e.k_EOverlayToStoreFlag_AddToCartAndShow = 2)] =
                "k_EOverlayToStoreFlag_AddToCartAndShow");
          })(f || (f = {})),
          (function (e) {
            (e[(e.k_EActivateGameOverlayToWebPageMode_Default = 0)] =
              "k_EActivateGameOverlayToWebPageMode_Default"),
              (e[(e.k_EActivateGameOverlayToWebPageMode_Modal = 1)] =
                "k_EActivateGameOverlayToWebPageMode_Modal");
          })(E || (E = {})),
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
          })(g || (g = {})),
          (function (e) {
            (e[(e.k_ELoginUIStyleOld = 0)] = "k_ELoginUIStyleOld"),
              (e[(e.k_ELoginUIStyleNewWithoutQRCode = 1)] =
                "k_ELoginUIStyleNewWithoutQRCode"),
              (e[(e.k_ELoginUIStyleNew = 2)] = "k_ELoginUIStyleNew");
          })(k || (k = {})),
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
          })(C || (C = {})),
          (function (e) {
            (e[(e.k_ERaiseGameWindowResult_NotRunning = 1)] =
              "k_ERaiseGameWindowResult_NotRunning"),
              (e[(e.k_ERaiseGameWindowResult_Success = 2)] =
                "k_ERaiseGameWindowResult_Success"),
              (e[(e.k_ERaiseGameWindowResult_Failure = 3)] =
                "k_ERaiseGameWindowResult_Failure");
          })(v || (v = {}));
        const I = {
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
            LOCAL_HOSTNAME: "",
            WEBAPI_BASE_URL: "",
            TOKEN_URL: "",
            BUILD_TIMESTAMP: 0,
            PAGE_TIMESTAMP: 0,
            FROM_WEB: !1,
            WEBSITE_ID: "Unknown",
            get SESSIONID() {
              return (function () {
                if (!c()) return R || (R = L()), R;
                let e = a("sessionid");
                e || (e = L());
                return e;
              })();
            },
            FRIENDSUI_BETA: !1,
            STEAM_TV: !1,
            DEV_MODE: !1,
            IN_STEAMUI: !1,
            IN_GAMEPADUI: !1,
            GAMEPADUI_WINDOWED: !1,
            LEGACY_GAMEPADUI_MODE: 0,
            LEGACY_CONTROLLER_CONFIG_APPID: 0,
            ON_DECK: !1,
            IN_LOGIN: !1,
            IN_LOGIN_REFRESH: !1,
          },
          y = {
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
          b = { steamid: "", clanid: 0, listid: 0 },
          S = {
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
          T = { ANNOUNCEMENT_GID: "", TAKEOVER_ANNOUNCEMENT_GID: "" };
        let R;
        function L() {
          let e = (function () {
            let e = "";
            for (let i = 0; i < 24; i++)
              e += ((t = 0),
              (n = 35),
              (t = Math.ceil(t)),
              (n = Math.floor(n)),
              Math.floor(Math.random() * (n - t + 1)) + t).toString(36);
            var t, n;
            return e;
          })();
          return (
            (function (e, t, n, i) {
              if (!c()) return;
              i || (i = "/");
              let s = "";
              if (void 0 !== n && n) {
                let e = new Date();
                e.setTime(e.getTime() + 864e5 * n),
                  (s = "; expires=" + e.toUTCString());
              }
              document.cookie =
                encodeURIComponent(e) +
                "=" +
                encodeURIComponent(t) +
                s +
                ";path=" +
                i;
            })("sessionid", e, 0),
            e
          );
        }
        function A(e = "webui_config") {
          const t = {},
            n = O("config", e);
          n && (delete n.SESSIONID, Object.assign(I, n), (t.config = !0));
          const i = O("userinfo", e);
          i &&
            (Object.assign(y, i),
            (t.userConfig = !0),
            y.is_support &&
              (function () {
                let e = null;
                return (
                  c() && (e = a("presentation_mode")),
                  Boolean(e && 1 === Number.parseInt(e))
                );
              })() &&
              (y.is_support = !1));
          const s = O("broadcast", e);
          s && (Object.assign(b, s), (t.broadcastConfig = !0));
          const r = O("community", e);
          r && (Object.assign(S, r), (t.communityConfig = !0));
          const o = O("event", e);
          return o && (Object.assign(T, o), (t.eventConfig = !0)), t;
        }
        function j(e, t = "webui_config", n) {
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
              console.error("Failed to parse config", e);
            }
          else n && console.error("Missing config element #", t);
        }
        function O(e, t = "webui_config") {
          return j(e, t, !0);
        }
        let M = { success: !0, result: 1 };
        class D {
          constructor() {
            (this.m_connection = new N()),
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
              () => M,
              () => this.FailureResult()
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
              !y.logged_in ||
              y.accountid == this.m_connection.ClientInfo.unAccountID
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
                        1 === e.success ? M : this.FailureResult(e.success)
                      )
                  : { success: !1, result: 19, account_mismatch: !0 }
              )
              .catch(() => this.FailureResult());
          }
        }
        class N {
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
              let i = this.m_iCallSeq++;
              this.BSendMsg(e, i)
                ? this.m_mapWaitingCallbacks.set(i, {
                    iSeq: i,
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
              universe: I.EUNIVERSE,
              accountid: y.accountid,
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
                  "ws://127.0.0.1:27060/clientsocket/"
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
        let w = new D();
        window.ClientConnectionAPI = w;
        n(9669);
        var P, U, G;
        !(function (e) {
          (e[(e.Input = 0)] = "Input"), (e[(e.Output = 1)] = "Output");
        })(P || (P = {})),
          (function (e) {
            (e[(e.Input = 0)] = "Input"),
              (e[(e.AllOutput = 1)] = "AllOutput"),
              (e[(e.Left = 2)] = "Left"),
              (e[(e.Right = 3)] = "Right"),
              (e[(e.Sub = 4)] = "Sub"),
              (e[(e.BackLeft = 5)] = "BackLeft"),
              (e[(e.BackRight = 6)] = "BackRight");
          })(U || (U = {}));
        !(function (e) {
          (e[(e.k_ESteamRealmUnknown = 0)] = "k_ESteamRealmUnknown"),
            (e[(e.k_ESteamRealmGlobal = 1)] = "k_ESteamRealmGlobal"),
            (e[(e.k_ESteamRealmChina = 2)] = "k_ESteamRealmChina");
        })(G || (G = {}));
        var B;
        !(function (e) {
          (e[(e.k_BluetoothDeviceType_Invalid = 0)] =
            "k_BluetoothDeviceType_Invalid"),
            (e[(e.k_BluetoothDeviceType_Unknown = 1)] =
              "k_BluetoothDeviceType_Unknown"),
            (e[(e.k_BluetoothDeviceType_Phone = 2)] =
              "k_BluetoothDeviceType_Phone"),
            (e[(e.k_BluetoothDeviceType_Computer = 3)] =
              "k_BluetoothDeviceType_Computer"),
            (e[(e.k_BluetoothDeviceType_Headset = 4)] =
              "k_BluetoothDeviceType_Headset"),
            (e[(e.k_BluetoothDeviceType_Headphones = 5)] =
              "k_BluetoothDeviceType_Headphones"),
            (e[(e.k_BluetoothDeviceType_Speakers = 6)] =
              "k_BluetoothDeviceType_Speakers"),
            (e[(e.k_BluetoothDeviceType_OtherAudio = 7)] =
              "k_BluetoothDeviceType_OtherAudio"),
            (e[(e.k_BluetoothDeviceType_Mouse = 8)] =
              "k_BluetoothDeviceType_Mouse"),
            (e[(e.k_BluetoothDeviceType_Joystick = 9)] =
              "k_BluetoothDeviceType_Joystick"),
            (e[(e.k_BluetoothDeviceType_Gamepad = 10)] =
              "k_BluetoothDeviceType_Gamepad"),
            (e[(e.k_BluetoothDeviceType_Keyboard = 11)] =
              "k_BluetoothDeviceType_Keyboard");
        })(B || (B = {}));
        var F, W, x;
        !(function (e) {
          (e[(e.EBrowserType_OffScreen = 0)] = "EBrowserType_OffScreen"),
            (e[(e.EBrowserType_OpenVROverlay = 1)] =
              "EBrowserType_OpenVROverlay"),
            (e[(e.EBrowserType_OpenVROverlay_Dashboard = 2)] =
              "EBrowserType_OpenVROverlay_Dashboard"),
            (e[(e.EBrowserType_DirectHWND = 3)] = "EBrowserType_DirectHWND"),
            (e[(e.EBrowserType_DirectHWND_Borderless = 4)] =
              "EBrowserType_DirectHWND_Borderless"),
            (e[(e.EBrowserType_DirectHWND_Hidden = 5)] =
              "EBrowserType_DirectHWND_Hidden"),
            (e[(e.EBrowserType_ChildHWNDNative = 6)] =
              "EBrowserType_ChildHWNDNative"),
            (e[(e.EBrowserType_Transparent_Toplevel = 7)] =
              "EBrowserType_Transparent_Toplevel"),
            (e[(e.EBrowserType_OffScreen_SharedTexture = 8)] =
              "EBrowserType_OffScreen_SharedTexture"),
            (e[(e.EBrowserType_OffScreen_GameOverlay = 9)] =
              "EBrowserType_OffScreen_GameOverlay"),
            (e[(e.EBrowserType_OffScreen_GameOverlay_SharedTexture = 10)] =
              "EBrowserType_OffScreen_GameOverlay_SharedTexture"),
            (e[(e.EBrowserType_Offscreen_FriendsUI = 11)] =
              "EBrowserType_Offscreen_FriendsUI"),
            (e[(e.EBrowserType_MAX = 12)] = "EBrowserType_MAX");
        })(F || (F = {})),
          (function (e) {
            (e[(e.SystemKey0 = 0)] = "SystemKey0"),
              (e[(e.SystemKey1 = 1)] = "SystemKey1");
          })(W || (W = {})),
          (function (e) {
            (e[(e.Hidden = 0)] = "Hidden"),
              (e[(e.Notification = 1)] = "Notification"),
              (e[(e.Overlay = 2)] = "Overlay"),
              (e[(e.Opaque = 3)] = "Opaque"),
              (e[(e.OverlayKeyboard = 4)] = "OverlayKeyboard");
          })(x || (x = {}));
        var H;
        !(function (e) {
          (e[(e.k_EPending = 0)] = "k_EPending"),
            (e[(e.k_EAccepted = 1)] = "k_EAccepted"),
            (e[(e.k_ERejected = 2)] = "k_ERejected");
        })(H || (H = {}));
        var V, z, q;
        n(59420);
        !(function (e) {
          (e[(e.k_EControllerBindingType_None = 0)] =
            "k_EControllerBindingType_None"),
            (e[(e.k_EControllerBindingType_Key = 1)] =
              "k_EControllerBindingType_Key"),
            (e[(e.k_EControllerBindingType_MouseButton = 2)] =
              "k_EControllerBindingType_MouseButton"),
            (e[(e.k_EControllerBindingType_Gamepad = 3)] =
              "k_EControllerBindingType_Gamepad"),
            (e[(e.k_EControllerBindingType_Mousewheel = 4)] =
              "k_EControllerBindingType_Mousewheel"),
            (e[(e.k_EControllerBindingType_Modeshift = 5)] =
              "k_EControllerBindingType_Modeshift"),
            (e[(e.k_EControllerBindingType_GameAction = 6)] =
              "k_EControllerBindingType_GameAction"),
            (e[(e.k_EControllerBindingType_ControllerAction = 7)] =
              "k_EControllerBindingType_ControllerAction");
        })(V || (V = {}));
        !(function (e) {
          (e[(e.k_ERemoteClientLaunchOK = 1)] = "k_ERemoteClientLaunchOK"),
            (e[(e.k_ERemoteClientLaunchFail = 2)] =
              "k_ERemoteClientLaunchFail"),
            (e[(e.k_ERemoteClientLaunchRequiresUI = 3)] =
              "k_ERemoteClientLaunchRequiresUI"),
            (e[(e.k_ERemoteClientLaunchRequiresLaunchOption = 4)] =
              "k_ERemoteClientLaunchRequiresLaunchOption"),
            (e[(e.k_ERemoteClientLaunchRequiresEULA = 5)] =
              "k_ERemoteClientLaunchRequiresEULA"),
            (e[(e.k_ERemoteClientLaunchTimeout = 6)] =
              "k_ERemoteClientLaunchTimeout"),
            (e[(e.k_ERemoteClientLaunchStreamTimeout = 7)] =
              "k_ERemoteClientLaunchStreamTimeout"),
            (e[(e.k_ERemoteClientLaunchStreamClientFail = 8)] =
              "k_ERemoteClientLaunchStreamClientFail"),
            (e[(e.k_ERemoteClientLaunchOtherGameRunning = 9)] =
              "k_ERemoteClientLaunchOtherGameRunning"),
            (e[(e.k_ERemoteClientLaunchDownloadStarted = 10)] =
              "k_ERemoteClientLaunchDownloadStarted"),
            (e[(e.k_ERemoteClientLaunchDownloadNoSpace = 11)] =
              "k_ERemoteClientLaunchDownloadNoSpace"),
            (e[(e.k_ERemoteClientLaunchDownloadFiltered = 12)] =
              "k_ERemoteClientLaunchDownloadFiltered"),
            (e[(e.k_ERemoteClientLaunchDownloadRequiresUI = 13)] =
              "k_ERemoteClientLaunchDownloadRequiresUI"),
            (e[(e.k_ERemoteClientLaunchAccessDenied = 14)] =
              "k_ERemoteClientLaunchAccessDenied"),
            (e[(e.k_ERemoteClientLaunchNetworkError = 15)] =
              "k_ERemoteClientLaunchNetworkError"),
            (e[(e.k_ERemoteClientLaunchProgress = 16)] =
              "k_ERemoteClientLaunchProgress"),
            (e[(e.k_ERemoteClientLaunchParentalUnlockFailed = 17)] =
              "k_ERemoteClientLaunchParentalUnlockFailed"),
            (e[(e.k_ERemoteClientLaunchScreenLocked = 18)] =
              "k_ERemoteClientLaunchScreenLocked"),
            (e[(e.k_ERemoteClientLaunchUnsupported = 19)] =
              "k_ERemoteClientLaunchUnsupported"),
            (e[(e.k_ERemoteClientLaunchDisabledLocal = 20)] =
              "k_ERemoteClientLaunchDisabledLocal"),
            (e[(e.k_ERemoteClientLaunchDisabledRemote = 21)] =
              "k_ERemoteClientLaunchDisabledRemote"),
            (e[(e.k_ERemoteClientLaunchBroadcasting = 22)] =
              "k_ERemoteClientLaunchBroadcasting"),
            (e[(e.k_ERemoteClientLaunchBusy = 23)] =
              "k_ERemoteClientLaunchBusy"),
            (e[(e.k_ERemoteClientLaunchDriversNotInstalled = 24)] =
              "k_ERemoteClientLaunchDriversNotInstalled"),
            (e[(e.k_ERemoteClientLaunchTransportUnavailable = 25)] =
              "k_ERemoteClientLaunchTransportUnavailable"),
            (e[(e.k_ERemoteClientLaunchCanceled = 26)] =
              "k_ERemoteClientLaunchCanceled"),
            (e[(e.k_ERemoteClientLaunchInvisible = 27)] =
              "k_ERemoteClientLaunchInvisible"),
            (e[(e.k_ERemoteClientLaunchRestrictedCountry = 28)] =
              "k_ERemoteClientLaunchRestrictedCountry");
        })(z || (z = {}));
        !(function (e) {
          (e[(e.k_EClientUINotificationGroupChatMessage = 1)] =
            "k_EClientUINotificationGroupChatMessage"),
            (e[(e.k_EClientUINotificationFriendChatMessage = 2)] =
              "k_EClientUINotificationFriendChatMessage"),
            (e[(e.k_EClientUINotificationFriendPersonaState = 3)] =
              "k_EClientUINotificationFriendPersonaState");
        })(q || (q = {}));
        var $, K, Y, J, X;
        !(function (e) {
          (e[(e.Unknown = 0)] = "Unknown"),
            (e[(e.Wired = 1)] = "Wired"),
            (e[(e.Wireless = 2)] = "Wireless"),
            (e[(e.Virtual = 3)] = "Virtual");
        })($ || ($ = {})),
          (function (e) {
            (e[(e.NotPresent = 0)] = "NotPresent"),
              (e[(e.Failed = 1)] = "Failed"),
              (e[(e.Disconnected = 2)] = "Disconnected"),
              (e[(e.Disconnecting = 3)] = "Disconnecting"),
              (e[(e.Connecting = 4)] = "Connecting"),
              (e[(e.Connected = 5)] = "Connected"),
              (e[(e.Retrying = 6)] = "Retrying");
          })(K || (K = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.Weak = 1)] = "Weak"),
              (e[(e.Ok = 2)] = "Ok"),
              (e[(e.Good = 3)] = "Good"),
              (e[(e.Excellent = 4)] = "Excellent");
          })(Y || (Y = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.StaticWep = 1)] = "StaticWep"),
              (e[(e.DynamicWep = 2)] = "DynamicWep"),
              (e[(e.Wpa = 4)] = "Wpa"),
              (e[(e.WpaEnterprise = 8)] = "WpaEnterprise"),
              (e[(e.Wpa2 = 16)] = "Wpa2"),
              (e[(e.Wpa2Enterprise = 32)] = "Wpa2Enterprise"),
              (e[(e.Unsupported = 32768)] = "Unsupported");
          })(J || (J = {})),
          (function (e) {
            (e[(e.k_EHTTPProxyMode_Invalid = 0)] = "k_EHTTPProxyMode_Invalid"),
              (e[(e.k_EHTTPProxyMode_None = 1)] = "k_EHTTPProxyMode_None"),
              (e[(e.k_EHTTPProxyMode_Manual = 2)] = "k_EHTTPProxyMode_Manual"),
              (e[(e.k_EHTTPProxyMode_Automatic = 3)] =
                "k_EHTTPProxyMode_Automatic");
          })(X || (X = {}));
        var Q, Z;
        function ee(e, t, n) {
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
        !(function (e) {
          (e[(e.k_EComputerActiveStateInvalid = 0)] =
            "k_EComputerActiveStateInvalid"),
            (e[(e.k_EComputerActiveStateActive = 1)] =
              "k_EComputerActiveStateActive"),
            (e[(e.k_EComputerActiveStateIdle = 2)] =
              "k_EComputerActiveStateIdle");
        })(Q || (Q = {})),
          (function (e) {
            (e[(e.k_EClientUsedInputTypeKeyboard = 0)] =
              "k_EClientUsedInputTypeKeyboard"),
              (e[(e.k_EClientUsedInputTypeMouse = 1)] =
                "k_EClientUsedInputTypeMouse"),
              (e[(e.k_EClientUsedInputTypeController = 2)] =
                "k_EClientUsedInputTypeController"),
              (e[(e.k_EClientUsedInputTypeMax = 3)] =
                "k_EClientUsedInputTypeMax");
          })(Z || (Z = {}));
        class te {
          constructor() {
            this.m_vecCallbacks = [];
          }
          Register(e) {
            this.m_vecCallbacks.push(e);
            return {
              Unregister: () => {
                var t, n;
                (t = this.m_vecCallbacks),
                  (n = e),
                  (function (e, t) {
                    let n = e.findIndex(t);
                    n >= 0 && e.splice(n, 1);
                  })(t, (e) => n == e);
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
        i(
          [ee],
          class {
            Schedule(e, t) {
              this.IsScheduled() && this.Cancel(),
                (this.m_fnCallback = t),
                (this.m_schTimer = window.setTimeout(
                  this.ScheduledInternal,
                  e
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
              let e = this.m_fnCallback;
              (this.m_fnCallback = void 0), e();
            }
          }.prototype,
          "ScheduledInternal",
          null
        );
        var ne;
        !(function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Ago = 1)] = "Ago"),
            (e[(e.Remaining = 2)] = "Remaining");
        })(ne || (ne = {}));
        new Map();
        new Map();
        new Map(), new Map();
        new Map(), new Map(), new Map(), new Map(), new Map(), new Map();
        class ie {
          constructor() {
            (this.m_mapTokens = new Map()),
              (this.m_mapFallbackTokens = new Map()),
              (this.m_cbkTokensChanged = new te());
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
              t === (29 === e ? G.k_ESteamRealmChina : G.k_ESteamRealmGlobal)
            );
          }
          static GetLanguageListForRealms(e) {
            const t = new Array();
            for (let n = 0; n < 30; n++)
              for (const i of e)
                if (this.IsELanguageValidInRealm(n, i)) {
                  t.push(n);
                  break;
                }
            return t;
          }
          InitFromObjects(e, t, n, i, s) {
            s || this.m_mapTokens.clear();
            const r = Object.assign(Object.assign({}, n || {}), e),
              o = Object.assign(Object.assign({}, i || {}), t || {});
            this.AddTokens(r, o), this.m_cbkTokensChanged.Dispatch();
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
              (t.push(u(I.LANGUAGE)),
              (I.SUPPORTED_LANGUAGES || []).forEach((e) => {
                e.value != I.LANGUAGE && t.push(u(e.value));
              }),
              e)
            ) {
              ie.GetLanguageListForRealms(e).forEach((e) => {
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
              ie.sm_ErrorReportingStore &&
              ie.sm_ErrorReportingStore.ReportError(
                new Error(
                  `Unable to find localization token '${e}' for language '${I.LANGUAGE}', ${this.m_mapTokens.size} tokens in map`
                ),
                { bIncludeMessageInIdentifier: !0 }
              );
          }
          LocalizeStringFromFallback(e) {
            if (!e || 0 == e.length || "#" != e.charAt(0)) return;
            let t = this.m_mapFallbackTokens.get(e.substring(1));
            return void 0 !== t ? t : void 0;
          }
        }
        function se(e, ...t) {
          let n = ae.LocalizeString(e);
          return void 0 === n ? e : oe(n, ...t);
        }
        function re(e, ...t) {
          let n = ae.LocalizeString(e);
          if (void 0 === n) return e;
          let i,
            s = [],
            o = /(.*?)%(\d+)\$s/g,
            a = 0;
          for (; (i = o.exec(n)); ) {
            (a += i[0].length), s.push(i[1]);
            let e = parseInt(i[2]);
            e >= 1 && e <= t.length && s.push(t[e - 1]);
          }
          return s.push(n.substr(a)), r.createElement(r.Fragment, null, ...s);
        }
        function oe(e, ...t) {
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
        const ae = new ie();
        function ce(e, t, ...n) {
          console.assert
            ? 0 == n.length
              ? console.assert(!!e, t)
              : console.assert(!!e, t, ...n)
            : e || console.warn(t, ...n);
        }
        window.LocalizationManager = ae;
        var le = n(22188),
          ue = n(29323);
        class _e {
          constructor(e) {
            (this.m_bReady = !1),
              (this.m_bValid = !1),
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
            return this.m_rtTimeExpires == l;
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
                "public" == I.WEB_UNIVERSE
                  ? `https://s.team/chat/${e}`
                  : `${I.COMMUNITY_BASE_URL}chat/invite/${e}`)
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
          InitDirectInvite(e, t, n = !1, i) {
            (this.m_ulChatRoomGroupID = e),
              (this.m_ulChatID = t),
              (this.m_bIsBanned = n),
              (this.m_rtKickExpires = i),
              (this.m_rtTimeExpires = l),
              (this.m_bValid = !0),
              (this.m_bReady = !0);
          }
        }
        i([le.LO], _e.prototype, "m_bReady", void 0),
          i([le.aD], _e.prototype, "InitInvalid", null),
          i([le.aD], _e.prototype, "InitDirectInvite", null);
        var de = n(43720),
          he = n.n(de);
        class me {
          constructor(e = 0, t, n, i) {
            e instanceof me
              ? (this.m_ulSteamID = e.m_ulSteamID)
              : "string" == typeof e
              ? (this.m_ulSteamID = he().fromString(e, !0))
              : t && n && void 0 !== i
              ? this.SetFromComponents(e, i, n, t)
              : (this.m_ulSteamID = e ? he().fromNumber(e, !0) : he().UZERO);
          }
          static InitFromAccountID(e) {
            return new me(Number(e), I.EUNIVERSE, 1, 1);
          }
          static InitFromClanID(e) {
            return new me(Number(e), I.EUNIVERSE, 7, 0);
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
            this.m_ulSteamID = new (he())(
              e,
              this.m_ulSteamID.getHighBitsUnsigned(),
              !0
            );
          }
          SetInstance(e) {
            this.SetFromComponents(
              this.GetAccountID(),
              e,
              this.GetAccountType(),
              this.GetUniverse()
            );
          }
          SetAccountType(e) {
            this.SetFromComponents(
              this.GetAccountID(),
              this.GetInstance(),
              e,
              this.GetUniverse()
            );
          }
          SetUniverse(e) {
            this.SetFromComponents(
              this.GetAccountID(),
              this.GetInstance(),
              this.GetAccountType(),
              e
            );
          }
          SetFromComponents(e, t, n, i) {
            let s = ((255 & i) << 24) + ((15 & n) << 20) + (1048575 & t),
              r = 4294967295 & e;
            this.m_ulSteamID = new (he())(r, s, !0);
          }
        }
        var pe = n(42238);
        n(34195);
        class fe extends _e {
          BIsExpired() {
            return Ee.sm_rtTimeCur >= this.m_rtTimeExpires;
          }
          InitFromPHPInviteLinkInfo(e) {
            this.m_ulChatID = e.chat_id;
            let t = new me(e.steamid_sender);
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
        i([le.aD], fe.prototype, "InitFromPHPInviteLinkInfo", null);
        class Ee {
          constructor(e) {
            (this.m_bConnectingToClient = !1),
              (this.m_invite = new fe(e.strInviteCode)),
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
                i = !1;
              try {
                n = "about:blank" == t.location.href;
              } catch (e) {
                i = !0;
              }
              if (n) {
                if (e) {
                  let n = function (i) {
                    let s = I.COMMUNITY_BASE_URL.replace(
                      /(https?:\/\/[^/]*).*$/,
                      "$1"
                    );
                    i.source == t &&
                      "FriendsUIReady" == i.data &&
                      i.origin == s &&
                      (t.postMessage(e, I.COMMUNITY_BASE_URL),
                      window.removeEventListener("message", n));
                  };
                  window.addEventListener("message", n);
                }
                t.location.href = I.COMMUNITY_BASE_URL + "chat/";
              } else e && t.postMessage(e, I.COMMUNITY_BASE_URL);
              t.focus();
            })({
              command: "ShowChatRoomGroupInvite",
              invite_code: this.m_invite.GetInviteCode(),
            });
          }
          LaunchSteamIgnoreAccount() {
            w.SetAllowAccountMismatch(!0), this.SendInviteToClient();
          }
          ForceLaunchSteamClient() {
            window.location.href = `steam://friends/ShowChatRoomGroupInvite/${this.m_invite.GetInviteCode()}`;
          }
          SendInviteToClient() {
            this.m_invite.BIsValid() &&
              !this.m_invite.BIsExpired() &&
              ((this.m_bConnectingToClient = !0),
              w
                .ShowChatRoomGroupInvite(this.m_invite.GetInviteCode())
                .then((e) => {
                  (0, le.z)(() => {
                    (this.m_bConnectingToClient = !1),
                      (this.m_connectResult = e),
                      console.log(e);
                  });
                }));
          }
        }
        i([le.LO], Ee.prototype, "m_bConnectingToClient", void 0),
          i([le.LO], Ee.prototype, "m_connectResult", void 0);
        let ge = class extends r.Component {
          render() {
            return r.createElement(
              "div",
              { className: "InviteLandingRoot" },
              this.props.controller.BIsInviteValid()
                ? r.createElement(ke, { controller: this.props.controller })
                : r.createElement(Ce, { controller: this.props.controller })
            );
          }
        };
        ge = i([ue.Pi], ge);
        let ke = class extends r.Component {
          constructor() {
            super(...arguments), (this.m_bTriedToLaunchSteam = !1);
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
            switch (new pe.UAParser(navigator.userAgent).getResult().os.name) {
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
                  se("#bbcode_invite_requesting_info")
                )
              );
            let e = this.props.controller.GetConnectResults(),
              t = this.props.controller.GetInvite(),
              n = (I.COMMUNITY_BASE_URL, this.IsMobileDevice()),
              i = "inviteButton inviteButtonJoinChat";
            return (
              t.BIsVoiceChatInvite() && (i += " inviteButtonJoinVoice"),
              e.success
                ? r.createElement(
                    "div",
                    { className: "ChatMessageInvite NoColumns" },
                    r.createElement(
                      "div",
                      { className: "groupName" },
                      se("#InviteLanding_SentToSteam")
                    ),
                    r.createElement(
                      "div",
                      { className: "inviteLabel" },
                      re(
                        "#InviteLanding_SentToSteam_Desc",
                        r.createElement(
                          "a",
                          {
                            href: "javascript:void(0);",
                            onClick: this.LaunchWebChat,
                          },
                          se("#InviteLanding_SentToSteam_Desc_LaunchWebChat")
                        )
                      )
                    )
                  )
                : e.account_mismatch
                ? r.createElement(
                    ve,
                    { render: this.props.controller.GetPreRenderedHTML() },
                    r.createElement(
                      "div",
                      { className: "inviteLabel" },
                      se("#InviteLanding_AccountMismatch")
                    ),
                    r.createElement(
                      "div",
                      { className: "inviteLabel" },
                      r.createElement(
                        "button",
                        {
                          className: i,
                          type: "button",
                          onClick: this.OpenInSteamIgnoreAccount,
                        },
                        se("#InviteLanding_OpenInSteam")
                      ),
                      r.createElement(
                        "button",
                        {
                          className: i,
                          type: "button",
                          onClick: this.LaunchWebChat,
                        },
                        se("#InviteLanding_OpenInWebChat")
                      )
                    )
                  )
                : e.call_unsupported
                ? r.createElement(
                    "div",
                    { className: "ChatMessageInvite" },
                    r.createElement(
                      "div",
                      { className: "groupName" },
                      se("#InviteLanding_SentToSteam")
                    ),
                    r.createElement(
                      "div",
                      { className: "inviteLabel" },
                      re(
                        "#InviteLanding_SentToSteam_Desc",
                        r.createElement(
                          "a",
                          {
                            href: "javascript:void(0);",
                            onClick: this.LaunchWebChat,
                          },
                          se("#InviteLanding_SentToSteam_Desc_LaunchWebChat")
                        )
                      )
                    )
                  )
                : r.createElement(
                    ve,
                    { render: this.props.controller.GetPreRenderedHTML() },
                    r.createElement(
                      "div",
                      { className: "inviteLabel inviteLabelButtons" },
                      !n &&
                        r.createElement(
                          "button",
                          {
                            className: i,
                            type: "button",
                            onClick: this.LaunchSteamClient,
                          },
                          se("#InviteLanding_OpenInSteam")
                        ),
                      r.createElement(
                        "button",
                        {
                          className: i,
                          type: "button",
                          onClick: this.LaunchWebChat,
                        },
                        se("#InviteLanding_OpenInWebChat")
                      )
                    ),
                    this.m_bTriedToLaunchSteam &&
                      r.createElement(
                        "div",
                        { className: "inviteLabel inviteLabelLaunchPrompt" },
                        se("#InviteLanding_OpenInSteam_Help")
                      )
                  )
            );
          }
        };
        i([le.LO], ke.prototype, "m_bTriedToLaunchSteam", void 0),
          i([ee], ke.prototype, "LaunchWebChat", null),
          i([ee], ke.prototype, "OpenInSteamIgnoreAccount", null),
          i([ee], ke.prototype, "LaunchSteamClient", null),
          (ke = i([ue.Pi], ke));
        class Ce extends r.Component {
          render() {
            return r.createElement(
              "div",
              { className: "ChatMessageInvite" },
              r.createElement(
                "div",
                { className: "postedExpiredInvite" },
                se("#InviteLanding_ExpiredOrInvalid")
              )
            );
          }
        }
        function ve(e) {
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
                re(
                  "#bbcode_invite_description",
                  r.createElement("span", {
                    dangerouslySetInnerHTML: {
                      __html: e.render.strInviterNameLinkHTML,
                    },
                  })
                )
              ),
              r.createElement(
                "div",
                { className: "groupName" },
                e.render.strChatRoomGroupName
              ),
              e.children
            )
          );
        }
        window.AssertMsg = ce;
        let Ie = new D();
        function ye(e) {
          let t;
          try {
            t = JSON.parse(e.getAttribute("data-inviteinfo"));
          } catch (e) {}
          Ee.sm_rtTimeCur = t.rtTimeCur;
          let n = new Ee(t);
          o.render(r.createElement(ge, { controller: n }), e);
        }
        (window.ClientConnectionAPI = Ie),
          document.addEventListener("DOMContentLoaded", function () {
            return s(this, void 0, void 0, function* () {
              A(),
                yield (function (e) {
                  return s(this, void 0, void 0, function* () {
                    const t = ie.GetLanguageFallback(e),
                      i = e === t,
                      [s, r, o, a] = yield Promise.all([
                        n(21624)(`./shared_${e}.json`),
                        n(3119)(`./friendsui_${e}.json`),
                        i ? {} : n(24626)(`./shared_${t}.json`),
                        i ? {} : n(9014)(`./friendsui_${t}.json`),
                      ]);
                    ae.AddTokens(
                      Object.assign(Object.assign({}, s), r),
                      Object.assign(Object.assign({}, o), a)
                    );
                  });
                })(I.LANGUAGE),
                (function () {
                  let e = document.querySelectorAll(".ChatReactRoot");
                  for (let t = 0; t < e.length; t++) {
                    let n = e[t],
                      i = n.getAttribute("data-component");
                    "ChatInvite" === i
                      ? ye(n)
                      : ce(!1, `unknown component: "${i}"`);
                  }
                })();
            });
          });
      },
      72713: (e, t, n) => {
        "use strict";
        n.d(t, {
          Bh: () => o,
          F: () => l,
          FE: () => s,
          TA: () => c,
          Xc: () => r,
          aD: () => a,
          aR: () => _,
          l2: () => u,
        });
        var i = n(33019);
        const s = i.BinaryReader.prototype,
          r = i.BinaryWriter.prototype;
        function o(e) {
          let t = {};
          const { fields: n } = e;
          for (let e in n) {
            const i = n[e];
            t[i.n] = i;
          }
          return t;
        }
        function a(e, t) {
          const { proto: n, fields: s } = e,
            r = new n();
          for (let e in s) {
            const { n, c: o, r: a, d: c, q: l } = s[e];
            if (!t.hasOwnProperty(e)) continue;
            const u = t[e];
            o
              ? a
                ? i.Message.setRepeatedWrapperField(
                    r,
                    n,
                    Array.isArray(u) ? u.map((e) => o.fromObject(e)) : []
                  )
                : i.Message.setWrapperField(r, n, o.fromObject(u))
              : i.Message.setField(r, n, u);
          }
          return r;
        }
        function c(e, t, n) {
          const { proto: s, fields: r } = e;
          let o = {};
          for (let e in r) {
            const { n: s, c: a, r: c, d: l, q: u } = r[e];
            if (a)
              if (c)
                o[e] = i.Message.toObjectList(
                  i.Message.getRepeatedWrapperField(n, a, s),
                  a.toObject,
                  t
                );
              else {
                const r = i.Message.getWrapperField(n, a, s, u ? 1 : 0);
                r && (o[e] = a.toObject(t, r));
              }
            else {
              const t = i.Message.getFieldWithDefault(
                n,
                s,
                void 0 !== l ? l : null
              );
              (null !== t || u) && (o[e] = t);
            }
          }
          return t && (o.$jspbMessageInstance = n), o;
        }
        function l(e, t, n) {
          for (; n.nextField() && !n.isEndGroup(); ) {
            const s = e[n.getFieldNumber()];
            if (s) {
              const { n: e, c: r, r: o, d: a, q: c, br: l } = s;
              if (r) {
                const s = new r();
                n.readMessage(s, r.deserializeBinaryFromReader),
                  o
                    ? i.Message.addToRepeatedWrapperField(t, e, s, r)
                    : i.Message.setWrapperField(t, e, s);
              } else if (l) {
                const s = l.call(n);
                o
                  ? i.Message.addToRepeatedField(t, e, s)
                  : i.Message.setField(t, e, s);
              } else
                console.assert(
                  l,
                  `Reader func not set for field number ${e} in class ${r}`
                ),
                  n.skipField();
            } else n.skipField();
          }
          return t;
        }
        function u(e, t, n) {
          const { fields: s } = e;
          for (let e in s) {
            const { n: r, c: o, r: a, d: c, q: l, bw: u } = s[e];
            if (o)
              if (a) {
                const e = i.Message.getRepeatedWrapperField(t, o, r);
                ((e && e.length) || l) &&
                  n.writeRepeatedMessage(r, e, o.serializeBinaryToWriter);
              } else {
                const e = i.Message.getWrapperField(t, o, r, l ? 1 : 0);
                e && n.writeMessage(r, e, o.serializeBinaryToWriter);
              }
            else if (u) {
              const e = i.Message.getField(t, r);
              void 0 !== e && u.call(n, r, e);
            } else
              console.assert(
                u,
                `Writer func not set for field number ${r} in class ${o}`
              );
          }
        }
        function _(e) {
          const t = e.proto;
          for (const n in e.fields) {
            const s = e.fields[n],
              { n: r, c: o, r: a, d: c, q: l } = s;
            s.hasOwnProperty("d")
              ? (t.prototype[n] = d(i.Message.getFieldWithDefault, r, c))
              : (t.prototype[n] = o
                  ? a
                    ? d(i.Message.getRepeatedWrapperField, o, r)
                    : h(o, r)
                  : d(i.Message.getField, r)),
              (t.prototype[`set_${n}`] = m(
                o
                  ? a
                    ? i.Message.setRepeatedWrapperField
                    : i.Message.setWrapperField
                  : i.Message.setField,
                r
              )),
              a && (t.prototype[`add_${n}`] = p(r, o));
          }
        }
        function d(e, ...t) {
          return function () {
            return e(this, ...t);
          };
        }
        function h(e, t) {
          return function (n = !0) {
            return i.Message.getWrapperField(this, e, t, n ? 1 : 0);
          };
        }
        function m(e, t) {
          return function (n) {
            return e(this, t, n);
          };
        }
        function p(e, t) {
          return t
            ? function (n, s) {
                return i.Message.addToRepeatedWrapperField(this, e, n, t, s);
              }
            : function (t, n) {
                i.Message.addToRepeatedField(this, e, t, n);
              };
        }
      },
      84890: (e, t, n) => {
        "use strict";
        "VALVE_PUBLIC_PATH" in window
          ? (n.p = window.VALVE_PUBLIC_PATH)
          : console.error(
              "VALVE_PUBLIC_PATH not defined; check for a call to CHTMLHelpers::WebpackConfigScriptlet"
            ),
          console.assert(
            123 === Array.from(new Set([123]))[0],
            "Should not include prototypejs."
          );
      },
      3119: (e, t, n) => {
        var i = {
          "./friendsui_arabic.json": [97981, 6992],
          "./friendsui_brazilian.json": [20553, 2862],
          "./friendsui_bulgarian.json": [75414, 8518],
          "./friendsui_czech.json": [72638, 4448],
          "./friendsui_danish.json": [18162, 9775],
          "./friendsui_dutch.json": [51999, 7575],
          "./friendsui_english.json": [63096, 8247],
          "./friendsui_finnish.json": [91741, 4596],
          "./friendsui_french.json": [96450, 3500],
          "./friendsui_german.json": [19474, 4989],
          "./friendsui_greek.json": [59413, 1471],
          "./friendsui_hungarian.json": [49870, 5802],
          "./friendsui_italian.json": [87280, 8815],
          "./friendsui_japanese.json": [16172, 6727],
          "./friendsui_koreana.json": [16273, 6986],
          "./friendsui_latam.json": [18144, 7651],
          "./friendsui_norwegian.json": [23193, 4716],
          "./friendsui_polish.json": [92042, 699],
          "./friendsui_portuguese.json": [82315, 4264],
          "./friendsui_romanian.json": [32163, 3182],
          "./friendsui_russian.json": [85755, 2913],
          "./friendsui_sc_schinese.json": [40167, 3140],
          "./friendsui_schinese.json": [95030, 7706],
          "./friendsui_spanish.json": [69859, 3471],
          "./friendsui_swedish.json": [50881, 9818],
          "./friendsui_tchinese.json": [6806, 7340],
          "./friendsui_thai.json": [23467, 9263],
          "./friendsui_turkish.json": [91405, 5632],
          "./friendsui_ukrainian.json": [48206, 2822],
          "./friendsui_vietnamese.json": [79155, 1635],
        };
        function s(e) {
          if (!n.o(i, e))
            return Promise.resolve().then(() => {
              var t = new Error("Cannot find module '" + e + "'");
              throw ((t.code = "MODULE_NOT_FOUND"), t);
            });
          var t = i[e],
            s = t[0];
          return n.e(t[1]).then(() => n.t(s, 19));
        }
        (s.keys = () => Object.keys(i)), (s.id = 3119), (e.exports = s);
      },
      9014: (e, t, n) => {
        var i = {
          "./friendsui_arabic.json": [97981, 6992],
          "./friendsui_brazilian.json": [20553, 2862],
          "./friendsui_bulgarian.json": [75414, 8518],
          "./friendsui_czech.json": [72638, 4448],
          "./friendsui_danish.json": [18162, 9775],
          "./friendsui_dutch.json": [51999, 7575],
          "./friendsui_english.json": [63096, 8247],
          "./friendsui_finnish.json": [91741, 4596],
          "./friendsui_french.json": [96450, 3500],
          "./friendsui_german.json": [19474, 4989],
          "./friendsui_greek.json": [59413, 1471],
          "./friendsui_hungarian.json": [49870, 5802],
          "./friendsui_italian.json": [87280, 8815],
          "./friendsui_japanese.json": [16172, 6727],
          "./friendsui_koreana.json": [16273, 6986],
          "./friendsui_latam.json": [18144, 7651],
          "./friendsui_norwegian.json": [23193, 4716],
          "./friendsui_polish.json": [92042, 699],
          "./friendsui_portuguese.json": [82315, 4264],
          "./friendsui_romanian.json": [32163, 3182],
          "./friendsui_russian.json": [85755, 2913],
          "./friendsui_sc_schinese.json": [40167, 3140],
          "./friendsui_schinese.json": [95030, 7706],
          "./friendsui_spanish.json": [69859, 3471],
          "./friendsui_swedish.json": [50881, 9818],
          "./friendsui_tchinese.json": [6806, 7340],
          "./friendsui_thai.json": [23467, 9263],
          "./friendsui_turkish.json": [91405, 5632],
          "./friendsui_ukrainian.json": [48206, 2822],
          "./friendsui_vietnamese.json": [79155, 1635],
        };
        function s(e) {
          if (!n.o(i, e))
            return Promise.resolve().then(() => {
              var t = new Error("Cannot find module '" + e + "'");
              throw ((t.code = "MODULE_NOT_FOUND"), t);
            });
          var t = i[e],
            s = t[0];
          return n.e(t[1]).then(() => n.t(s, 19));
        }
        (s.keys = () => Object.keys(i)), (s.id = 9014), (e.exports = s);
      },
      21624: (e, t, n) => {
        var i = {
          "./shared_arabic.json": [68568, 2431],
          "./shared_brazilian.json": [13262, 8385],
          "./shared_bulgarian.json": [86048, 1313],
          "./shared_czech.json": [41122, 4189],
          "./shared_danish.json": [52563, 9753],
          "./shared_dutch.json": [93504, 5925],
          "./shared_english.json": [29020, 7975],
          "./shared_finnish.json": [40494, 3557],
          "./shared_french.json": [28292, 3112],
          "./shared_german.json": [15502, 6007],
          "./shared_greek.json": [78865, 4297],
          "./shared_hungarian.json": [44285, 5948],
          "./shared_italian.json": [48254, 5933],
          "./shared_japanese.json": [15505, 2844],
          "./shared_koreana.json": [84137, 6542],
          "./shared_latam.json": [48284, 2443],
          "./shared_norwegian.json": [65115, 4108],
          "./shared_polish.json": [35330, 3252],
          "./shared_portuguese.json": [37943, 5849],
          "./shared_romanian.json": [16520, 4823],
          "./shared_russian.json": [56532, 9062],
          "./shared_sc_schinese.json": [86735, 2029],
          "./shared_schinese.json": [88804, 2537],
          "./shared_spanish.json": [22429, 6492],
          "./shared_swedish.json": [3648, 5625],
          "./shared_tchinese.json": [12268, 7602],
          "./shared_thai.json": [77216, 1162],
          "./shared_turkish.json": [99874, 5438],
          "./shared_ukrainian.json": [59156, 7781],
          "./shared_vietnamese.json": [77588, 4964],
        };
        function s(e) {
          if (!n.o(i, e))
            return Promise.resolve().then(() => {
              var t = new Error("Cannot find module '" + e + "'");
              throw ((t.code = "MODULE_NOT_FOUND"), t);
            });
          var t = i[e],
            s = t[0];
          return n.e(t[1]).then(() => n.t(s, 19));
        }
        (s.keys = () => Object.keys(i)), (s.id = 21624), (e.exports = s);
      },
      24626: (e, t, n) => {
        var i = {
          "./shared_arabic.json": [68568, 2431],
          "./shared_brazilian.json": [13262, 8385],
          "./shared_bulgarian.json": [86048, 1313],
          "./shared_czech.json": [41122, 4189],
          "./shared_danish.json": [52563, 9753],
          "./shared_dutch.json": [93504, 5925],
          "./shared_english.json": [29020, 7975],
          "./shared_finnish.json": [40494, 3557],
          "./shared_french.json": [28292, 3112],
          "./shared_german.json": [15502, 6007],
          "./shared_greek.json": [78865, 4297],
          "./shared_hungarian.json": [44285, 5948],
          "./shared_italian.json": [48254, 5933],
          "./shared_japanese.json": [15505, 2844],
          "./shared_koreana.json": [84137, 6542],
          "./shared_latam.json": [48284, 2443],
          "./shared_norwegian.json": [65115, 4108],
          "./shared_polish.json": [35330, 3252],
          "./shared_portuguese.json": [37943, 5849],
          "./shared_romanian.json": [16520, 4823],
          "./shared_russian.json": [56532, 9062],
          "./shared_sc_schinese.json": [86735, 2029],
          "./shared_schinese.json": [88804, 2537],
          "./shared_spanish.json": [22429, 6492],
          "./shared_swedish.json": [3648, 5625],
          "./shared_tchinese.json": [12268, 7602],
          "./shared_thai.json": [77216, 1162],
          "./shared_turkish.json": [99874, 5438],
          "./shared_ukrainian.json": [59156, 7781],
          "./shared_vietnamese.json": [77588, 4964],
        };
        function s(e) {
          if (!n.o(i, e))
            return Promise.resolve().then(() => {
              var t = new Error("Cannot find module '" + e + "'");
              throw ((t.code = "MODULE_NOT_FOUND"), t);
            });
          var t = i[e],
            s = t[0];
          return n.e(t[1]).then(() => n.t(s, 19));
        }
        (s.keys = () => Object.keys(i)), (s.id = 24626), (e.exports = s);
      },
      87363: (e) => {
        "use strict";
        e.exports = React;
      },
      61533: (e) => {
        "use strict";
        e.exports = ReactDOM;
      },
    },
    o = {};
  function a(e) {
    var t = o[e];
    if (void 0 !== t) return t.exports;
    var n = (o[e] = { id: e, loaded: !1, exports: {} });
    return r[e].call(n.exports, n, n.exports, a), (n.loaded = !0), n.exports;
  }
  (a.m = r),
    (a.amdO = {}),
    (e = []),
    (a.O = (t, n, i, s) => {
      if (!n) {
        var r = 1 / 0;
        for (u = 0; u < e.length; u++) {
          for (var [n, i, s] = e[u], o = !0, c = 0; c < n.length; c++)
            (!1 & s || r >= s) && Object.keys(a.O).every((e) => a.O[e](n[c]))
              ? n.splice(c--, 1)
              : ((o = !1), s < r && (r = s));
          if (o) {
            e.splice(u--, 1);
            var l = i();
            void 0 !== l && (t = l);
          }
        }
        return t;
      }
      s = s || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > s; u--) e[u] = e[u - 1];
      e[u] = [n, i, s];
    }),
    (a.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return a.d(t, { a: t }), t;
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (a.t = function (e, i) {
      if ((1 & i && (e = this(e)), 8 & i)) return e;
      if ("object" == typeof e && e) {
        if (4 & i && e.__esModule) return e;
        if (16 & i && "function" == typeof e.then) return e;
      }
      var s = Object.create(null);
      a.r(s);
      var r = {};
      t = t || [null, n({}), n([]), n(n)];
      for (var o = 2 & i && e; "object" == typeof o && !~t.indexOf(o); o = n(o))
        Object.getOwnPropertyNames(o).forEach((t) => (r[t] = () => e[t]));
      return (r.default = () => e), a.d(s, r), s;
    }),
    (a.d = (e, t) => {
      for (var n in t)
        a.o(t, n) &&
          !a.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (a.f = {}),
    (a.e = (e) =>
      Promise.all(Object.keys(a.f).reduce((t, n) => (a.f[n](e, t), t), []))),
    (a.u = (e) =>
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
        8815: "friendsui_italian-json",
        9062: "shared_russian-json",
        9263: "friendsui_thai-json",
        9753: "shared_danish-json",
        9775: "friendsui_danish-json",
        9818: "friendsui_swedish-json",
      }[e] +
      ".js?contenthash=" +
      {
        699: "b4ea570016c8a43308be",
        1162: "888561c4b16417586f14",
        1313: "ee82750fc0d2add1ee5a",
        1471: "3e16505fbe7dbc6bb6a5",
        1635: "d0fb212646ef8bb5b05f",
        2029: "4e0c023f0b10c2b1a44f",
        2431: "cbd2760e1ccf9ea63610",
        2443: "6433b75e36230e7d8829",
        2537: "fe3c45c737a2dfd98b08",
        2822: "e47f632abdf184379a92",
        2844: "25a5bbdbdd2bf1602622",
        2862: "303ac22c0eb5d6fdd9d9",
        2913: "760e6e788afa5dae6593",
        3112: "05ccac317832b8b8695f",
        3140: "c270affe4fba5daf7515",
        3182: "5a9e7fffc307b786e9fe",
        3252: "58f5fe84d8998cbc3e83",
        3471: "e9e521dc40692466ecac",
        3500: "e5e146367ac73a6cae16",
        3557: "32b8210c8c60b63d37a6",
        4108: "358e8c8ff1062ca5c86d",
        4189: "832faa4c8906a28209c9",
        4264: "271efc825d559e7c0c9e",
        4297: "f3cdb4c6bac1554ff2be",
        4448: "4a8c329c9773447c00b7",
        4596: "aa256702a90a3bba8981",
        4716: "c5e4c878e7efaf91dfc8",
        4823: "e3fc913a0de84ea2f710",
        4964: "f5db2839d58aa1af5750",
        4989: "b3d2f53f7317e3d3869e",
        5438: "acc9fd367a483d377610",
        5625: "c0523cbc94f336fe8f08",
        5632: "a415fa5b45989e850bf1",
        5802: "8f64087807c7b78d4ec5",
        5849: "4466216e2001f220c1e8",
        5925: "c736730f868aa630e229",
        5933: "6e37227c46b362499da3",
        5948: "0946507e0e510a361efd",
        6007: "17c17777634f2a632fa1",
        6492: "b5a2834faf5478eed330",
        6542: "eae9d584f6e1a273bb35",
        6727: "82ab501de6b4db6dfd16",
        6986: "0977e8ac65a8f08a48f9",
        6992: "6fe9e58c28cba14f3d5b",
        7340: "764daa1cc39a67cfa2f8",
        7575: "72ad17f9a7a3b5f525ca",
        7602: "c569987e8eb8886626fa",
        7651: "a3fa12a146caaf8df6ed",
        7706: "4beafe5ac6c01eeab0a4",
        7781: "cb4eb4094d50fe1c55ae",
        7975: "b0d390d6d618374567c1",
        8247: "429599fcb084845a8472",
        8385: "98a3cc9beff65da802b0",
        8518: "6a2210a54e1c17800228",
        8815: "2fdeff4ff094b62c9bf7",
        9062: "ebd68d7d982e7e48e04c",
        9263: "c289dff10c6a6a4c3c19",
        9753: "0a8a47a9ac0006ab3e6d",
        9775: "ab570ce7ac0bb97482cf",
        9818: "3eea8746855c7f3d5f10",
      }[e]),
    (a.miniCssF = (e) => {}),
    (a.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (i = {}),
    (s = "friendsui:"),
    (a.l = (e, t, n, r) => {
      if (i[e]) i[e].push(t);
      else {
        var o, c;
        if (void 0 !== n)
          for (
            var l = document.getElementsByTagName("script"), u = 0;
            u < l.length;
            u++
          ) {
            var _ = l[u];
            if (
              _.getAttribute("src") == e ||
              _.getAttribute("data-webpack") == s + n
            ) {
              o = _;
              break;
            }
          }
        o ||
          ((c = !0),
          ((o = document.createElement("script")).charset = "utf-8"),
          (o.timeout = 120),
          a.nc && o.setAttribute("nonce", a.nc),
          o.setAttribute("data-webpack", s + n),
          (o.src = e)),
          (i[e] = [t]);
        var d = (t, n) => {
            (o.onerror = o.onload = null), clearTimeout(h);
            var s = i[e];
            if (
              (delete i[e],
              o.parentNode && o.parentNode.removeChild(o),
              s && s.forEach((e) => e(n)),
              t)
            )
              return t(n);
          },
          h = setTimeout(
            d.bind(null, void 0, { type: "timeout", target: o }),
            12e4
          );
        (o.onerror = d.bind(null, o.onerror)),
          (o.onload = d.bind(null, o.onload)),
          c && document.head.appendChild(o);
      }
    }),
    (a.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (a.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (a.j = 1856),
    (() => {
      var e;
      a.g.importScripts && (e = a.g.location + "");
      var t = a.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var n = t.getElementsByTagName("script");
        n.length && (e = n[n.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (a.p = e + "../../");
    })(),
    (() => {
      var e = { 1856: 0 };
      (a.f.j = (t, n) => {
        var i = a.o(e, t) ? e[t] : void 0;
        if (0 !== i)
          if (i) n.push(i[2]);
          else {
            var s = new Promise((n, s) => (i = e[t] = [n, s]));
            n.push((i[2] = s));
            var r = a.p + a.u(t),
              o = new Error();
            a.l(
              r,
              (n) => {
                if (a.o(e, t) && (0 !== (i = e[t]) && (e[t] = void 0), i)) {
                  var s = n && ("load" === n.type ? "missing" : n.type),
                    r = n && n.target && n.target.src;
                  (o.message =
                    "Loading chunk " + t + " failed.\n(" + s + ": " + r + ")"),
                    (o.name = "ChunkLoadError"),
                    (o.type = s),
                    (o.request = r),
                    i[1](o);
                }
              },
              "chunk-" + t,
              t
            );
          }
      }),
        (a.O.j = (t) => 0 === e[t]);
      var t = (t, n) => {
          var i,
            s,
            [r, o, c] = n,
            l = 0;
          if (r.some((t) => 0 !== e[t])) {
            for (i in o) a.o(o, i) && (a.m[i] = o[i]);
            if (c) var u = c(a);
          }
          for (t && t(n); l < r.length; l++)
            (s = r[l]), a.o(e, s) && e[s] && e[s][0](), (e[s] = 0);
          return a.O(u);
        },
        n = (self.webpackChunkfriendsui = self.webpackChunkfriendsui || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var c = a.O(void 0, [3817, 5140, 5968], () => a(38302));
  c = a.O(c);
})();
