/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7798238";
(() => {
  var e,
    t,
    n,
    i,
    s,
    o = {
      7681: (e, t, n) => {
        "use strict";
        function i(e, t, n, i) {
          var s,
            o = arguments.length,
            r =
              o < 3
                ? t
                : null === i
                ? (i = Object.getOwnPropertyDescriptor(t, n))
                : i;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            r = Reflect.decorate(e, t, n, i);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (s = e[a]) &&
                (r = (o < 3 ? s(r) : o > 3 ? s(t, n, r) : s(t, n)) || r);
          return o > 3 && r && Object.defineProperty(t, n, r), r;
        }
        function s(e, t, n, i) {
          return new (n || (n = Promise))(function (s, o) {
            function r(e) {
              try {
                c(i.next(e));
              } catch (e) {
                o(e);
              }
            }
            function a(e) {
              try {
                c(i.throw(e));
              } catch (e) {
                o(e);
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
                      })).then(r, a);
            }
            c((i = i.apply(e, t || [])).next());
          });
        }
        Object.create;
        Object.create;
        n(76426);
        var o = n(87363),
          r = n.n(o),
          a = n(61533);
        function c(e) {
          if (!l() || !window.document.cookie) return null;
          let t = document.cookie.match("(^|; )" + e + "=([^;]*)");
          return t && t[2] ? decodeURIComponent(t[2]) : null;
        }
        function l() {
          return !!window.document;
        }
        const _ = 2147483647;
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
        var d, h, m, p, f, E, k, g, C, v, I, S, y;
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
        })(d || (d = {})),
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
          })(h || (h = {})),
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
          })(m || (m = {})),
          (function (e) {
            (e[(e.k_EFloatingGamepadTextInputModeModeSingleLine = 0)] =
              "k_EFloatingGamepadTextInputModeModeSingleLine"),
              (e[(e.k_EFloatingGamepadTextInputModeModeMultipleLines = 1)] =
                "k_EFloatingGamepadTextInputModeModeMultipleLines"),
              (e[(e.k_EFloatingGamepadTextInputModeModeEmail = 2)] =
                "k_EFloatingGamepadTextInputModeModeEmail"),
              (e[(e.k_EFloatingGamepadTextInputModeModeNumeric = 3)] =
                "k_EFloatingGamepadTextInputModeModeNumeric");
          })(p || (p = {})),
          (function (e) {
            (e[(e.k_EAppUpdateContentType_Content = 0)] =
              "k_EAppUpdateContentType_Content"),
              (e[(e.k_EAppUpdateContentType_Workshop = 1)] =
                "k_EAppUpdateContentType_Workshop"),
              (e[(e.k_EAppUpdateContentType_Shader = 2)] =
                "k_EAppUpdateContentType_Shader"),
              (e[(e.k_EAppUpdateContentType_Max = 3)] =
                "k_EAppUpdateContentType_Max");
          })(f || (f = {})),
          (function (e) {
            (e[(e.k_EOverlayToStoreFlag_None = 0)] =
              "k_EOverlayToStoreFlag_None"),
              (e[(e.k_EOverlayToStoreFlag_AddToCart = 1)] =
                "k_EOverlayToStoreFlag_AddToCart"),
              (e[(e.k_EOverlayToStoreFlag_AddToCartAndShow = 2)] =
                "k_EOverlayToStoreFlag_AddToCartAndShow");
          })(E || (E = {})),
          (function (e) {
            (e[(e.k_EActivateGameOverlayToWebPageMode_Default = 0)] =
              "k_EActivateGameOverlayToWebPageMode_Default"),
              (e[(e.k_EActivateGameOverlayToWebPageMode_Modal = 1)] =
                "k_EActivateGameOverlayToWebPageMode_Modal");
          })(k || (k = {})),
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
          })(C || (C = {})),
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
          })(v || (v = {})),
          (function (e) {
            (e[(e.k_ERaiseGameWindowResult_NotRunning = 1)] =
              "k_ERaiseGameWindowResult_NotRunning"),
              (e[(e.k_ERaiseGameWindowResult_Success = 2)] =
                "k_ERaiseGameWindowResult_Success"),
              (e[(e.k_ERaiseGameWindowResult_Failure = 3)] =
                "k_ERaiseGameWindowResult_Failure");
          })(I || (I = {})),
          (function (e) {
            (e[(e.k_EPositionInvalid = -1)] = "k_EPositionInvalid"),
              (e[(e.k_EPositionTopLeft = 0)] = "k_EPositionTopLeft"),
              (e[(e.k_EPositionTopRight = 1)] = "k_EPositionTopRight"),
              (e[(e.k_EPositionBottomLeft = 2)] = "k_EPositionBottomLeft"),
              (e[(e.k_EPositionBottomRight = 3)] = "k_EPositionBottomRight");
          })(S || (S = {})),
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
          })(y || (y = {}));
        r().createContext({});
        const b = {
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
                if (!l()) return O || (O = D()), O;
                let e = c("sessionid");
                e || (e = D());
                return e;
              })();
            },
            FRIENDSUI_BETA: !1,
            STEAM_TV: !1,
            DEV_MODE: !1,
            IN_STEAMUI: !1,
            IN_GAMEPADUI: !1,
            IN_STEAMUI_SHARED_CONTEXT: !1,
            ONE_STEAMUI_SHARED_CONTEXT: !1,
            DECK_DISPLAY_MODE: !1,
            ON_DECK: !1,
            IN_GAMESCOPE: !1,
            IN_LOGIN: !1,
            IN_LOGIN_REFRESH: !1,
            USE_LONGEST_LOC_STRING: !1,
          },
          T = {
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
          R = { steamid: "", clanid: 0, listid: 0 },
          L = {
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
          A = { ANNOUNCEMENT_GID: "", TAKEOVER_ANNOUNCEMENT_GID: "" },
          j = "webui_config";
        let O;
        function D() {
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
              if (!l()) return;
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
        function M(e = j) {
          const t = {},
            n = w("config", e);
          n && (delete n.SESSIONID, Object.assign(b, n), (t.config = !0));
          const i = w("userinfo", e);
          i &&
            (Object.assign(T, i),
            (t.userConfig = !0),
            T.is_support &&
              (function () {
                let e = null;
                return (
                  l() && (e = c("presentation_mode")),
                  Boolean(e && 1 === Number.parseInt(e))
                );
              })() &&
              (T.is_support = !1));
          const s = w("broadcast", e);
          s && (Object.assign(R, s), (t.broadcastConfig = !0));
          const o = w("community", e);
          o && (Object.assign(L, o), (t.communityConfig = !0));
          const r = w("event", e);
          return r && (Object.assign(A, r), (t.eventConfig = !0)), t;
        }
        function N(e, t = j, n) {
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
        function w(e, t = j) {
          return N(e, t, !0);
        }
        let P = { success: !0, result: 1 };
        class U {
          constructor() {
            (this.m_connection = new G()),
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
              () => P,
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
              !T.logged_in ||
              T.accountid == this.m_connection.ClientInfo.unAccountID
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
                        1 === e.success ? P : this.FailureResult(e.success)
                      )
                  : { success: !1, result: 19, account_mismatch: !0 }
              )
              .catch(() => this.FailureResult());
          }
        }
        class G {
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
              universe: b.EUNIVERSE,
              accountid: T.accountid,
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
        let B = new U();
        window.ClientConnectionAPI = B;
        n(9669);
        var F, W, x;
        !(function (e) {
          (e[(e.Input = 0)] = "Input"), (e[(e.Output = 1)] = "Output");
        })(F || (F = {})),
          (function (e) {
            (e[(e.Input = 0)] = "Input"),
              (e[(e.AllOutput = 1)] = "AllOutput"),
              (e[(e.Left = 2)] = "Left"),
              (e[(e.Right = 3)] = "Right"),
              (e[(e.Sub = 4)] = "Sub"),
              (e[(e.BackLeft = 5)] = "BackLeft"),
              (e[(e.BackRight = 6)] = "BackRight");
          })(W || (W = {}));
        !(function (e) {
          (e[(e.k_ESteamRealmUnknown = 0)] = "k_ESteamRealmUnknown"),
            (e[(e.k_ESteamRealmGlobal = 1)] = "k_ESteamRealmGlobal"),
            (e[(e.k_ESteamRealmChina = 2)] = "k_ESteamRealmChina");
        })(x || (x = {}));
        var H;
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
        })(H || (H = {}));
        var V, z, q, $;
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
        })(V || (V = {})),
          (function (e) {
            (e[(e.SystemKey0 = 0)] = "SystemKey0"),
              (e[(e.SystemKey1 = 1)] = "SystemKey1");
          })(z || (z = {})),
          (function (e) {
            (e[(e.Hidden = 0)] = "Hidden"),
              (e[(e.Notification = 1)] = "Notification"),
              (e[(e.Overlay = 2)] = "Overlay"),
              (e[(e.Opaque = 3)] = "Opaque"),
              (e[(e.OverlayKeyboard = 4)] = "OverlayKeyboard");
          })(q || (q = {})),
          (function (e) {
            (e[(e.MainGamepadUI = 0)] = "MainGamepadUI"),
              (e[(e.OverlayGamepadUI = 1)] = "OverlayGamepadUI"),
              (e[(e.Keyboard = 2)] = "Keyboard"),
              (e[(e.ControllerConfigurator = 3)] = "ControllerConfigurator"),
              (e[(e.VR = 4)] = "VR"),
              (e[(e.SteamLibrary = 5)] = "SteamLibrary"),
              (e[(e.MainDesktopUI = 6)] = "MainDesktopUI"),
              (e[(e.DesktopLogin = 7)] = "DesktopLogin"),
              (e[(e.OverlayDesktopUI = 8)] = "OverlayDesktopUI"),
              (e[(e.SmallModeDesktopUI = 9)] = "SmallModeDesktopUI");
          })($ || ($ = {}));
        var K;
        !(function (e) {
          (e[(e.k_EPending = 0)] = "k_EPending"),
            (e[(e.k_EAccepted = 1)] = "k_EAccepted"),
            (e[(e.k_ERejected = 2)] = "k_ERejected");
        })(K || (K = {}));
        var Y, J, X;
        n(19200);
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
        })(Y || (Y = {}));
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
        })(J || (J = {}));
        !(function (e) {
          (e[(e.k_EClientUINotificationGroupChatMessage = 1)] =
            "k_EClientUINotificationGroupChatMessage"),
            (e[(e.k_EClientUINotificationFriendChatMessage = 2)] =
              "k_EClientUINotificationFriendChatMessage"),
            (e[(e.k_EClientUINotificationFriendPersonaState = 3)] =
              "k_EClientUINotificationFriendPersonaState");
        })(X || (X = {}));
        var Q, Z, ee, te, ne;
        !(function (e) {
          (e[(e.Unknown = 0)] = "Unknown"),
            (e[(e.Wired = 1)] = "Wired"),
            (e[(e.Wireless = 2)] = "Wireless"),
            (e[(e.Virtual = 3)] = "Virtual");
        })(Q || (Q = {})),
          (function (e) {
            (e[(e.NotPresent = 0)] = "NotPresent"),
              (e[(e.Failed = 1)] = "Failed"),
              (e[(e.Disconnected = 2)] = "Disconnected"),
              (e[(e.Disconnecting = 3)] = "Disconnecting"),
              (e[(e.Connecting = 4)] = "Connecting"),
              (e[(e.Connected = 5)] = "Connected"),
              (e[(e.Retrying = 6)] = "Retrying");
          })(Z || (Z = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.Weak = 1)] = "Weak"),
              (e[(e.Ok = 2)] = "Ok"),
              (e[(e.Good = 3)] = "Good"),
              (e[(e.Excellent = 4)] = "Excellent");
          })(ee || (ee = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.StaticWep = 1)] = "StaticWep"),
              (e[(e.DynamicWep = 2)] = "DynamicWep"),
              (e[(e.Wpa = 4)] = "Wpa"),
              (e[(e.WpaEnterprise = 8)] = "WpaEnterprise"),
              (e[(e.Wpa2 = 16)] = "Wpa2"),
              (e[(e.Wpa2Enterprise = 32)] = "Wpa2Enterprise"),
              (e[(e.Unsupported = 32768)] = "Unsupported");
          })(te || (te = {})),
          (function (e) {
            (e[(e.k_EHTTPProxyMode_Invalid = 0)] = "k_EHTTPProxyMode_Invalid"),
              (e[(e.k_EHTTPProxyMode_None = 1)] = "k_EHTTPProxyMode_None"),
              (e[(e.k_EHTTPProxyMode_Manual = 2)] = "k_EHTTPProxyMode_Manual"),
              (e[(e.k_EHTTPProxyMode_Automatic = 3)] =
                "k_EHTTPProxyMode_Automatic");
          })(ne || (ne = {}));
        var ie, se;
        function oe(e, t, n) {
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
        })(ie || (ie = {})),
          (function (e) {
            (e[(e.k_EClientUsedInputTypeKeyboard = 0)] =
              "k_EClientUsedInputTypeKeyboard"),
              (e[(e.k_EClientUsedInputTypeMouse = 1)] =
                "k_EClientUsedInputTypeMouse"),
              (e[(e.k_EClientUsedInputTypeController = 2)] =
                "k_EClientUsedInputTypeController"),
              (e[(e.k_EClientUsedInputTypeMax = 3)] =
                "k_EClientUsedInputTypeMax");
          })(se || (se = {}));
        class re {
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
          [oe],
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
        var ae;
        !(function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Ago = 1)] = "Ago"),
            (e[(e.Remaining = 2)] = "Remaining");
        })(ae || (ae = {}));
        new Map();
        new Map(), new Map();
        new Map(), new Map(), new Map(), new Map(), new Map(), new Map();
        class ce {
          constructor() {
            (this.m_mapTokens = new Map()),
              (this.m_mapFallbackTokens = new Map()),
              (this.m_cbkTokensChanged = new re());
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
              t === (29 === e ? x.k_ESteamRealmChina : x.k_ESteamRealmGlobal)
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
            const o = Object.assign(Object.assign({}, n || {}), e),
              r = Object.assign(Object.assign({}, i || {}), t || {});
            this.AddTokens(o, r), this.m_cbkTokensChanged.Dispatch();
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
              (t.push(u(b.LANGUAGE)),
              (b.SUPPORTED_LANGUAGES || []).forEach((e) => {
                e.value != b.LANGUAGE && t.push(u(e.value));
              }),
              e)
            ) {
              ce.GetLanguageListForRealms(e).forEach((e) => {
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
              ce.sm_ErrorReportingStore &&
              ce.sm_ErrorReportingStore.ReportError(
                new Error(
                  `Unable to find localization token '${e}' for language '${b.LANGUAGE}', ${this.m_mapTokens.size} tokens in map`
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
        function le(e, ...t) {
          let n = de.LocalizeString(e);
          return void 0 === n ? e : ue(n, ...t);
        }
        function _e(e, ...t) {
          let n = de.LocalizeString(e);
          if (void 0 === n) return e;
          let i,
            s = [],
            r = /(.*?)%(\d+)\$s/g,
            a = 0;
          for (; (i = r.exec(n)); ) {
            (a += i[0].length), s.push(i[1]);
            let e = parseInt(i[2]);
            e >= 1 && e <= t.length && s.push(t[e - 1]);
          }
          return s.push(n.substr(a)), o.createElement(o.Fragment, null, ...s);
        }
        function ue(e, ...t) {
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
        const de = new ce();
        function he(e, t, ...n) {
          console.assert
            ? 0 == n.length
              ? console.assert(!!e, t)
              : console.assert(!!e, t, ...n)
            : e || console.warn(t, ...n);
        }
        window.LocalizationManager = de;
        var me = n(22188),
          pe = n(29323);
        class fe {
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
            return this.m_rtTimeExpires == _;
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
                "public" == b.WEB_UNIVERSE
                  ? `https://s.team/chat/${e}`
                  : `${b.COMMUNITY_BASE_URL}chat/invite/${e}`)
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
              (this.m_rtTimeExpires = _),
              (this.m_bValid = !0),
              (this.m_bReady = !0);
          }
        }
        i([me.LO], fe.prototype, "m_bReady", void 0),
          i([me.aD], fe.prototype, "InitInvalid", null),
          i([me.aD], fe.prototype, "InitDirectInvite", null);
        var Ee = n(43720),
          ke = n.n(Ee);
        class ge {
          constructor(e = 0, t, n, i) {
            e instanceof ge
              ? (this.m_ulSteamID = e.m_ulSteamID)
              : "string" == typeof e
              ? (this.m_ulSteamID = ke().fromString(e, !0))
              : t && n && void 0 !== i
              ? this.SetFromComponents(e, i, n, t)
              : (this.m_ulSteamID = e ? ke().fromNumber(e, !0) : ke().UZERO);
          }
          static InitFromAccountID(e) {
            return new ge(Number(e), b.EUNIVERSE, 1, 1);
          }
          static InitFromClanID(e) {
            return new ge(Number(e), b.EUNIVERSE, 7, 0);
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
            let t = new ge();
            try {
              let [n, i, s, o, r] =
                  e.match(/\[([I|g|A|G|M|P|C|U]):(\d+):(\d+):?(\d+)?\]/) || [],
                a = Number(s),
                c = Number(o),
                l = r ? Number(r) : 1;
              switch (i) {
                case "I":
                  t.SetFromComponents(c, l, 0, a);
                case "g":
                  t.SetFromComponents(c, 0, 7, a);
                case "A":
                  t.SetFromComponents(c, l, 4, a);
                case "G":
                  t.SetFromComponents(c, l, 3, a);
                case "M":
                  t.SetFromComponents(c, l, 2, a);
                case "P":
                  t.SetFromComponents(c, l, 5, a);
                case "C":
                  t.SetFromComponents(c, l, 6, a);
                case "U":
                  t.SetFromComponents(c, l, 1, a);
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
            this.m_ulSteamID = new (ke())(
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
              o = 4294967295 & e;
            this.m_ulSteamID = new (ke())(o, s, !0);
          }
        }
        var Ce = n(42238);
        n(49031);
        class ve extends fe {
          BIsExpired() {
            return Ie.sm_rtTimeCur >= this.m_rtTimeExpires;
          }
          InitFromPHPInviteLinkInfo(e) {
            this.m_ulChatID = e.chat_id;
            let t = new ge(e.steamid_sender);
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
        i([me.aD], ve.prototype, "InitFromPHPInviteLinkInfo", null);
        class Ie {
          constructor(e) {
            (this.m_bConnectingToClient = !1),
              (this.m_invite = new ve(e.strInviteCode)),
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
                    let s = b.COMMUNITY_BASE_URL.replace(
                      /(https?:\/\/[^/]*).*$/,
                      "$1"
                    );
                    i.source == t &&
                      "FriendsUIReady" == i.data &&
                      i.origin == s &&
                      (t.postMessage(e, b.COMMUNITY_BASE_URL),
                      window.removeEventListener("message", n));
                  };
                  window.addEventListener("message", n);
                }
                t.location.href = b.COMMUNITY_BASE_URL + "chat/";
              } else e && t.postMessage(e, b.COMMUNITY_BASE_URL);
              t.focus();
            })({
              command: "ShowChatRoomGroupInvite",
              invite_code: this.m_invite.GetInviteCode(),
            });
          }
          LaunchSteamIgnoreAccount() {
            B.SetAllowAccountMismatch(!0), this.SendInviteToClient();
          }
          ForceLaunchSteamClient() {
            window.location.href = `steam://friends/ShowChatRoomGroupInvite/${this.m_invite.GetInviteCode()}`;
          }
          SendInviteToClient() {
            this.m_invite.BIsValid() &&
              !this.m_invite.BIsExpired() &&
              ((this.m_bConnectingToClient = !0),
              B.ShowChatRoomGroupInvite(this.m_invite.GetInviteCode()).then(
                (e) => {
                  (0, me.z)(() => {
                    (this.m_bConnectingToClient = !1),
                      (this.m_connectResult = e),
                      console.log(e);
                  });
                }
              ));
          }
        }
        i([me.LO], Ie.prototype, "m_bConnectingToClient", void 0),
          i([me.LO], Ie.prototype, "m_connectResult", void 0);
        let Se = class extends o.Component {
          render() {
            return o.createElement(
              "div",
              { className: "InviteLandingRoot" },
              this.props.controller.BIsInviteValid()
                ? o.createElement(ye, { controller: this.props.controller })
                : o.createElement(be, { controller: this.props.controller })
            );
          }
        };
        Se = i([pe.Pi], Se);
        let ye = class extends o.Component {
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
            switch (new Ce.UAParser(navigator.userAgent).getResult().os.name) {
              case "iOS":
              case "Android":
              case "BlackBerry":
                return !0;
            }
            return !1;
          }
          render() {
            if (this.props.controller.BIsConnectingToClient())
              return o.createElement(
                "div",
                { className: "ChatMessageInvite RequestingInfo NoColumns" },
                o.createElement(
                  "div",
                  { className: "postedExpiredInvite" },
                  le("#bbcode_invite_requesting_info")
                )
              );
            let e = this.props.controller.GetConnectResults(),
              t = this.props.controller.GetInvite(),
              n = (b.COMMUNITY_BASE_URL, this.IsMobileDevice()),
              i = "inviteButton inviteButtonJoinChat";
            return (
              t.BIsVoiceChatInvite() && (i += " inviteButtonJoinVoice"),
              e.success
                ? o.createElement(
                    "div",
                    { className: "ChatMessageInvite NoColumns" },
                    o.createElement(
                      "div",
                      { className: "groupName" },
                      le("#InviteLanding_SentToSteam")
                    ),
                    o.createElement(
                      "div",
                      { className: "inviteLabel" },
                      _e(
                        "#InviteLanding_SentToSteam_Desc",
                        o.createElement(
                          "a",
                          {
                            href: "javascript:void(0);",
                            onClick: this.LaunchWebChat,
                          },
                          le("#InviteLanding_SentToSteam_Desc_LaunchWebChat")
                        )
                      )
                    )
                  )
                : e.account_mismatch
                ? o.createElement(
                    Te,
                    { render: this.props.controller.GetPreRenderedHTML() },
                    o.createElement(
                      "div",
                      { className: "inviteLabel" },
                      le("#InviteLanding_AccountMismatch")
                    ),
                    o.createElement(
                      "div",
                      { className: "inviteLabel" },
                      o.createElement(
                        "button",
                        {
                          className: i,
                          type: "button",
                          onClick: this.OpenInSteamIgnoreAccount,
                        },
                        le("#InviteLanding_OpenInSteam")
                      ),
                      o.createElement(
                        "button",
                        {
                          className: i,
                          type: "button",
                          onClick: this.LaunchWebChat,
                        },
                        le("#InviteLanding_OpenInWebChat")
                      )
                    )
                  )
                : e.call_unsupported
                ? o.createElement(
                    "div",
                    { className: "ChatMessageInvite" },
                    o.createElement(
                      "div",
                      { className: "groupName" },
                      le("#InviteLanding_SentToSteam")
                    ),
                    o.createElement(
                      "div",
                      { className: "inviteLabel" },
                      _e(
                        "#InviteLanding_SentToSteam_Desc",
                        o.createElement(
                          "a",
                          {
                            href: "javascript:void(0);",
                            onClick: this.LaunchWebChat,
                          },
                          le("#InviteLanding_SentToSteam_Desc_LaunchWebChat")
                        )
                      )
                    )
                  )
                : o.createElement(
                    Te,
                    { render: this.props.controller.GetPreRenderedHTML() },
                    o.createElement(
                      "div",
                      { className: "inviteLabel inviteLabelButtons" },
                      !n &&
                        o.createElement(
                          "button",
                          {
                            className: i,
                            type: "button",
                            onClick: this.LaunchSteamClient,
                          },
                          le("#InviteLanding_OpenInSteam")
                        ),
                      o.createElement(
                        "button",
                        {
                          className: i,
                          type: "button",
                          onClick: this.LaunchWebChat,
                        },
                        le("#InviteLanding_OpenInWebChat")
                      )
                    ),
                    this.m_bTriedToLaunchSteam &&
                      o.createElement(
                        "div",
                        { className: "inviteLabel inviteLabelLaunchPrompt" },
                        le("#InviteLanding_OpenInSteam_Help")
                      )
                  )
            );
          }
        };
        i([me.LO], ye.prototype, "m_bTriedToLaunchSteam", void 0),
          i([oe], ye.prototype, "LaunchWebChat", null),
          i([oe], ye.prototype, "OpenInSteamIgnoreAccount", null),
          i([oe], ye.prototype, "LaunchSteamClient", null),
          (ye = i([pe.Pi], ye));
        class be extends o.Component {
          render() {
            return o.createElement(
              "div",
              { className: "ChatMessageInvite" },
              o.createElement(
                "div",
                { className: "postedExpiredInvite" },
                le("#InviteLanding_ExpiredOrInvalid")
              )
            );
          }
        }
        function Te(e) {
          return o.createElement(
            "div",
            { className: "ChatMessageInvite" },
            o.createElement("div", {
              className: "leftInviteContainer",
              dangerouslySetInnerHTML: { __html: e.render.strAvatarHTML },
            }),
            o.createElement(
              "div",
              { className: "rightInviteContainer" },
              o.createElement(
                "div",
                { className: "inviteLabel" },
                _e(
                  "#bbcode_invite_description",
                  o.createElement("span", {
                    dangerouslySetInnerHTML: {
                      __html: e.render.strInviterNameLinkHTML,
                    },
                  })
                )
              ),
              o.createElement(
                "div",
                { className: "groupName" },
                e.render.strChatRoomGroupName
              ),
              e.children
            )
          );
        }
        window.AssertMsg = he;
        let Re = new U();
        function Le(e) {
          let t;
          try {
            t = JSON.parse(e.getAttribute("data-inviteinfo"));
          } catch (e) {}
          Ie.sm_rtTimeCur = t.rtTimeCur;
          let n = new Ie(t);
          a.render(o.createElement(Se, { controller: n }), e);
        }
        (window.ClientConnectionAPI = Re),
          document.addEventListener("DOMContentLoaded", function () {
            return s(this, void 0, void 0, function* () {
              M(),
                yield (function (e) {
                  return s(this, void 0, void 0, function* () {
                    const t = ce.GetLanguageFallback(e),
                      i = e === t,
                      [s, o, r, a] = yield Promise.all([
                        n(41171)(`./shared_${e}.json`),
                        n(3119)(`./friendsui_${e}.json`),
                        i ? {} : n(91090)(`./shared_${t}.json`),
                        i ? {} : n(9014)(`./friendsui_${t}.json`),
                      ]);
                    de.AddTokens(
                      Object.assign(Object.assign({}, s), o),
                      Object.assign(Object.assign({}, r), a)
                    );
                  });
                })(b.LANGUAGE),
                (function () {
                  let e = document.querySelectorAll(".ChatReactRoot");
                  for (let t = 0; t < e.length; t++) {
                    let n = e[t],
                      i = n.getAttribute("data-component");
                    "ChatInvite" === i
                      ? Le(n)
                      : he(!1, `unknown component: "${i}"`);
                  }
                })();
            });
          });
      },
      28350: (e, t, n) => {
        "use strict";
        n.d(t, {
          Bh: () => r,
          F: () => l,
          FE: () => s,
          TA: () => c,
          Xc: () => o,
          aD: () => a,
          aR: () => u,
          l2: () => _,
        });
        var i = n(33019);
        const s = i.BinaryReader.prototype,
          o = i.BinaryWriter.prototype;
        function r(e) {
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
            o = new n();
          for (let e in s) {
            const { n, c: r, r: a, d: c, q: l } = s[e];
            if (!t.hasOwnProperty(e)) continue;
            const _ = t[e];
            r
              ? a
                ? i.Message.setRepeatedWrapperField(
                    o,
                    n,
                    Array.isArray(_) ? _.map((e) => r.fromObject(e)) : []
                  )
                : i.Message.setWrapperField(o, n, r.fromObject(_))
              : i.Message.setField(o, n, _);
          }
          return o;
        }
        function c(e, t, n) {
          const { proto: s, fields: o } = e;
          let r = {};
          for (let e in o) {
            const { n: s, c: a, r: c, d: l, q: _ } = o[e];
            if (a)
              if (c)
                r[e] = i.Message.toObjectList(
                  i.Message.getRepeatedWrapperField(n, a, s),
                  a.toObject,
                  t
                );
              else {
                const o = i.Message.getWrapperField(n, a, s, _ ? 1 : 0);
                o && (r[e] = a.toObject(t, o));
              }
            else {
              const t = i.Message.getFieldWithDefault(
                n,
                s,
                void 0 !== l ? l : null
              );
              (null !== t || _) && (r[e] = t);
            }
          }
          return t && (r.$jspbMessageInstance = n), r;
        }
        function l(e, t, n) {
          for (; n.nextField() && !n.isEndGroup(); ) {
            const s = e[n.getFieldNumber()];
            if (s) {
              const { n: e, c: o, r, d: a, q: c, br: l } = s;
              if (o) {
                const s = new o();
                n.readMessage(s, o.deserializeBinaryFromReader),
                  r
                    ? i.Message.addToRepeatedWrapperField(t, e, s, o)
                    : i.Message.setWrapperField(t, e, s);
              } else if (l) {
                const s = l.call(n);
                r
                  ? i.Message.addToRepeatedField(t, e, s)
                  : i.Message.setField(t, e, s);
              } else
                console.assert(
                  l,
                  `Reader func not set for field number ${e} in class ${o}`
                ),
                  n.skipField();
            } else n.skipField();
          }
          return t;
        }
        function _(e, t, n) {
          const { fields: s } = e;
          for (let e in s) {
            const { n: o, c: r, r: a, d: c, q: l, bw: _ } = s[e];
            if (r)
              if (a) {
                const e = i.Message.getRepeatedWrapperField(t, r, o);
                ((e && e.length) || l) &&
                  n.writeRepeatedMessage(o, e, r.serializeBinaryToWriter);
              } else {
                const e = i.Message.getWrapperField(t, r, o, l ? 1 : 0);
                e && n.writeMessage(o, e, r.serializeBinaryToWriter);
              }
            else if (_) {
              const e = i.Message.getField(t, o);
              void 0 !== e && _.call(n, o, e);
            } else
              console.assert(
                _,
                `Writer func not set for field number ${o} in class ${r}`
              );
          }
        }
        function u(e) {
          const t = e.proto;
          for (const n in e.fields) {
            const s = e.fields[n],
              { n: o, c: r, r: a, d: c, q: l } = s;
            s.hasOwnProperty("d")
              ? (t.prototype[n] = d(i.Message.getFieldWithDefault, o, c))
              : (t.prototype[n] = r
                  ? a
                    ? d(i.Message.getRepeatedWrapperField, r, o)
                    : h(r, o)
                  : d(i.Message.getField, o)),
              (t.prototype[`set_${n}`] = m(
                r
                  ? a
                    ? i.Message.setRepeatedWrapperField
                    : i.Message.setWrapperField
                  : i.Message.setField,
                o
              )),
              a && (t.prototype[`add_${n}`] = p(o, r));
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
      76426: (e, t, n) => {
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
          "./friendsui_arabic.json": [56047, 6992],
          "./friendsui_brazilian.json": [92205, 2862],
          "./friendsui_bulgarian.json": [73392, 8518],
          "./friendsui_czech.json": [57782, 4448],
          "./friendsui_danish.json": [81743, 9775],
          "./friendsui_dutch.json": [50658, 7575],
          "./friendsui_english.json": [8544, 8247],
          "./friendsui_finnish.json": [54470, 4596],
          "./friendsui_french.json": [72300, 3500],
          "./friendsui_german.json": [15318, 4989],
          "./friendsui_greek.json": [80793, 1471],
          "./friendsui_hungarian.json": [56284, 5802],
          "./friendsui_italian.json": [97336, 8815],
          "./friendsui_japanese.json": [4202, 6727],
          "./friendsui_koreana.json": [45983, 6986],
          "./friendsui_latam.json": [88984, 7651],
          "./friendsui_norwegian.json": [52055, 4716],
          "./friendsui_polish.json": [82258, 699],
          "./friendsui_portuguese.json": [46869, 4264],
          "./friendsui_romanian.json": [62368, 3182],
          "./friendsui_russian.json": [44494, 2913],
          "./friendsui_sc_schinese.json": [76373, 3140],
          "./friendsui_schinese.json": [51475, 7706],
          "./friendsui_spanish.json": [8108, 3471],
          "./friendsui_swedish.json": [42074, 9818],
          "./friendsui_tchinese.json": [735, 7340],
          "./friendsui_thai.json": [75225, 9263],
          "./friendsui_turkish.json": [77261, 5632],
          "./friendsui_ukrainian.json": [54839, 2822],
          "./friendsui_vietnamese.json": [42373, 1635],
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
          "./friendsui_arabic.json": [56047, 6992],
          "./friendsui_brazilian.json": [92205, 2862],
          "./friendsui_bulgarian.json": [73392, 8518],
          "./friendsui_czech.json": [57782, 4448],
          "./friendsui_danish.json": [81743, 9775],
          "./friendsui_dutch.json": [50658, 7575],
          "./friendsui_english.json": [8544, 8247],
          "./friendsui_finnish.json": [54470, 4596],
          "./friendsui_french.json": [72300, 3500],
          "./friendsui_german.json": [15318, 4989],
          "./friendsui_greek.json": [80793, 1471],
          "./friendsui_hungarian.json": [56284, 5802],
          "./friendsui_italian.json": [97336, 8815],
          "./friendsui_japanese.json": [4202, 6727],
          "./friendsui_koreana.json": [45983, 6986],
          "./friendsui_latam.json": [88984, 7651],
          "./friendsui_norwegian.json": [52055, 4716],
          "./friendsui_polish.json": [82258, 699],
          "./friendsui_portuguese.json": [46869, 4264],
          "./friendsui_romanian.json": [62368, 3182],
          "./friendsui_russian.json": [44494, 2913],
          "./friendsui_sc_schinese.json": [76373, 3140],
          "./friendsui_schinese.json": [51475, 7706],
          "./friendsui_spanish.json": [8108, 3471],
          "./friendsui_swedish.json": [42074, 9818],
          "./friendsui_tchinese.json": [735, 7340],
          "./friendsui_thai.json": [75225, 9263],
          "./friendsui_turkish.json": [77261, 5632],
          "./friendsui_ukrainian.json": [54839, 2822],
          "./friendsui_vietnamese.json": [42373, 1635],
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
      41171: (e, t, n) => {
        var i = {
          "./shared_arabic.json": [91967, 2431],
          "./shared_brazilian.json": [34050, 8385],
          "./shared_bulgarian.json": [81457, 1313],
          "./shared_czech.json": [96162, 4189],
          "./shared_danish.json": [69668, 9753],
          "./shared_dutch.json": [98554, 5925],
          "./shared_english.json": [84075, 7975],
          "./shared_finnish.json": [49134, 3557],
          "./shared_french.json": [79224, 3112],
          "./shared_german.json": [20057, 6007],
          "./shared_greek.json": [86417, 4297],
          "./shared_hungarian.json": [19248, 5948],
          "./shared_italian.json": [77819, 5933],
          "./shared_japanese.json": [48536, 2844],
          "./shared_koreana.json": [72400, 6542],
          "./shared_latam.json": [29185, 2443],
          "./shared_norwegian.json": [36134, 4108],
          "./shared_polish.json": [87151, 3252],
          "./shared_portuguese.json": [3630, 5849],
          "./shared_romanian.json": [51363, 4823],
          "./shared_russian.json": [60859, 9062],
          "./shared_sc_schinese.json": [6055, 2029],
          "./shared_schinese.json": [88004, 2537],
          "./shared_spanish.json": [35090, 6492],
          "./shared_swedish.json": [84447, 5625],
          "./shared_tchinese.json": [92869, 7602],
          "./shared_thai.json": [34720, 1162],
          "./shared_turkish.json": [3347, 5438],
          "./shared_ukrainian.json": [46150, 7781],
          "./shared_vietnamese.json": [12315, 4964],
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
        (s.keys = () => Object.keys(i)), (s.id = 41171), (e.exports = s);
      },
      91090: (e, t, n) => {
        var i = {
          "./shared_arabic.json": [91967, 2431],
          "./shared_brazilian.json": [34050, 8385],
          "./shared_bulgarian.json": [81457, 1313],
          "./shared_czech.json": [96162, 4189],
          "./shared_danish.json": [69668, 9753],
          "./shared_dutch.json": [98554, 5925],
          "./shared_english.json": [84075, 7975],
          "./shared_finnish.json": [49134, 3557],
          "./shared_french.json": [79224, 3112],
          "./shared_german.json": [20057, 6007],
          "./shared_greek.json": [86417, 4297],
          "./shared_hungarian.json": [19248, 5948],
          "./shared_italian.json": [77819, 5933],
          "./shared_japanese.json": [48536, 2844],
          "./shared_koreana.json": [72400, 6542],
          "./shared_latam.json": [29185, 2443],
          "./shared_norwegian.json": [36134, 4108],
          "./shared_polish.json": [87151, 3252],
          "./shared_portuguese.json": [3630, 5849],
          "./shared_romanian.json": [51363, 4823],
          "./shared_russian.json": [60859, 9062],
          "./shared_sc_schinese.json": [6055, 2029],
          "./shared_schinese.json": [88004, 2537],
          "./shared_spanish.json": [35090, 6492],
          "./shared_swedish.json": [84447, 5625],
          "./shared_tchinese.json": [92869, 7602],
          "./shared_thai.json": [34720, 1162],
          "./shared_turkish.json": [3347, 5438],
          "./shared_ukrainian.json": [46150, 7781],
          "./shared_vietnamese.json": [12315, 4964],
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
        (s.keys = () => Object.keys(i)), (s.id = 91090), (e.exports = s);
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
    r = {};
  function a(e) {
    var t = r[e];
    if (void 0 !== t) return t.exports;
    var n = (r[e] = { id: e, loaded: !1, exports: {} });
    return o[e].call(n.exports, n, n.exports, a), (n.loaded = !0), n.exports;
  }
  (a.m = o),
    (a.amdO = {}),
    (e = []),
    (a.O = (t, n, i, s) => {
      if (!n) {
        var o = 1 / 0;
        for (_ = 0; _ < e.length; _++) {
          for (var [n, i, s] = e[_], r = !0, c = 0; c < n.length; c++)
            (!1 & s || o >= s) && Object.keys(a.O).every((e) => a.O[e](n[c]))
              ? n.splice(c--, 1)
              : ((r = !1), s < o && (o = s));
          if (r) {
            e.splice(_--, 1);
            var l = i();
            void 0 !== l && (t = l);
          }
        }
        return t;
      }
      s = s || 0;
      for (var _ = e.length; _ > 0 && e[_ - 1][2] > s; _--) e[_] = e[_ - 1];
      e[_] = [n, i, s];
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
      var o = {};
      t = t || [null, n({}), n([]), n(n)];
      for (var r = 2 & i && e; "object" == typeof r && !~t.indexOf(r); r = n(r))
        Object.getOwnPropertyNames(r).forEach((t) => (o[t] = () => e[t]));
      return (o.default = () => e), a.d(s, o), s;
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
        699: "872aff8809c936ed937a",
        1162: "a12965c02583d1fc9b91",
        1313: "768fc738d13756d9f99a",
        1471: "8868b8e02467ae926cf9",
        1635: "437d2b63eda9e1b47d58",
        2029: "90a9d61a7ff50fb87151",
        2431: "11c1289e1ff0e0bdec9e",
        2443: "bf0ab82ba2a45a56e328",
        2537: "f663783ce02c265e2f45",
        2822: "037061f6d1c9dffaf079",
        2844: "d2b452913528fe52cde5",
        2862: "32a14b9093973895ca3b",
        2913: "3f983a1d5133e6a68dce",
        3112: "68f14daffd80a715014d",
        3140: "dad99a71d12b68853270",
        3182: "8a1d61f7eb1ba31aa77b",
        3252: "1dcffdbfa40342e71cd4",
        3471: "4dfa897f746606980bae",
        3500: "14dabe6b831e337ef4fa",
        3557: "08c6cc78ec4cc85918d3",
        4108: "40f13182f5034976774f",
        4189: "f738296b026881eb16f8",
        4264: "0064a35087d6d906f7b2",
        4297: "a16752cc1d902a9e2065",
        4448: "64a854027d76e9303ce6",
        4596: "e41f05574f31a6383708",
        4716: "f806c862c343a334fbe7",
        4823: "aa039a364c0f6e7ffbcf",
        4964: "f7786ea502a0df41c14c",
        4989: "323e9e40b7603218da5a",
        5438: "9c1159deb0bf60b8eab9",
        5625: "00abba1bbe1da1d5cb80",
        5632: "bb969856fbed69c0adc0",
        5802: "4cbc594c62499e0386a8",
        5849: "0eb437fedc5b51c695b2",
        5925: "a31403f6dc410c7c9105",
        5933: "38e2c4ac56d88ea86ede",
        5948: "7a795e105c10837023d9",
        6007: "19118a166522adc7c75a",
        6492: "b0657d822c35565af6bc",
        6542: "9ce05bbc4f6e845cf7ff",
        6727: "e8244e40542a7d586455",
        6986: "1a34a5e8b583d54fbb59",
        6992: "f45d52361e8e77d4706c",
        7340: "dcbb63c693b64c7e41bb",
        7575: "57a24aecb030c34aa5e7",
        7602: "7edc2be2109de0aedb6c",
        7651: "195c08e4fe2a460a82d6",
        7706: "258590154e6f57babae1",
        7781: "c9dcc41356342bdc4c39",
        7975: "84b503cb6c933b911c8d",
        8247: "faf8044df2541a2c39b5",
        8385: "bd9bf2991f1aeee88a7b",
        8518: "67222d259d0ca1f6ae22",
        8815: "d35b34b72bf3049a22bf",
        9062: "f2381ef381774bb78a0c",
        9263: "63e34749508be70153c8",
        9753: "6cd6c6e17d3387b8e187",
        9775: "406e8abf48b406b28697",
        9818: "f2788389656d987037d4",
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
    (a.l = (e, t, n, o) => {
      if (i[e]) i[e].push(t);
      else {
        var r, c;
        if (void 0 !== n)
          for (
            var l = document.getElementsByTagName("script"), _ = 0;
            _ < l.length;
            _++
          ) {
            var u = l[_];
            if (
              u.getAttribute("src") == e ||
              u.getAttribute("data-webpack") == s + n
            ) {
              r = u;
              break;
            }
          }
        r ||
          ((c = !0),
          ((r = document.createElement("script")).charset = "utf-8"),
          (r.timeout = 120),
          a.nc && r.setAttribute("nonce", a.nc),
          r.setAttribute("data-webpack", s + n),
          (r.src = e)),
          (i[e] = [t]);
        var d = (t, n) => {
            (r.onerror = r.onload = null), clearTimeout(h);
            var s = i[e];
            if (
              (delete i[e],
              r.parentNode && r.parentNode.removeChild(r),
              s && s.forEach((e) => e(n)),
              t)
            )
              return t(n);
          },
          h = setTimeout(
            d.bind(null, void 0, { type: "timeout", target: r }),
            12e4
          );
        (r.onerror = d.bind(null, r.onerror)),
          (r.onload = d.bind(null, r.onload)),
          c && document.head.appendChild(r);
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
            var o = a.p + a.u(t),
              r = new Error();
            a.l(
              o,
              (n) => {
                if (a.o(e, t) && (0 !== (i = e[t]) && (e[t] = void 0), i)) {
                  var s = n && ("load" === n.type ? "missing" : n.type),
                    o = n && n.target && n.target.src;
                  (r.message =
                    "Loading chunk " + t + " failed.\n(" + s + ": " + o + ")"),
                    (r.name = "ChunkLoadError"),
                    (r.type = s),
                    (r.request = o),
                    i[1](r);
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
            [o, r, c] = n,
            l = 0;
          if (o.some((t) => 0 !== e[t])) {
            for (i in r) a.o(r, i) && (a.m[i] = r[i]);
            if (c) var _ = c(a);
          }
          for (t && t(n); l < o.length; l++)
            (s = o[l]), a.o(e, s) && e[s] && e[s][0](), (e[s] = 0);
          return a.O(_);
        },
        n = (self.webpackChunkfriendsui = self.webpackChunkfriendsui || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var c = a.O(void 0, [3817, 5140, 5968], () => a(7681));
  c = a.O(c);
})();
