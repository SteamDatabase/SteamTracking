/*! This file includes third-party software, governed by the licenses described here: https://steamcommunity.com/public/javascript/webui/clientcom.licenses.txt */

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7079032";
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
        return a;
      }),
      n.d(t, "p", function () {
        return c;
      }),
      n.d(t, "j", function () {
        return u;
      }),
      n.d(t, "k", function () {
        return s;
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
        return p;
      }),
      n.d(t, "g", function () {
        return f;
      }),
      n.d(t, "i", function () {
        return S;
      }),
      n.d(t, "h", function () {
        return m;
      }),
      n.d(t, "d", function () {
        return E;
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
    var i = 1,
      a = 4,
      c = 7,
      u = 750,
      s = 799,
      _ = 250820,
      l = 330050,
      d = 358510,
      p = 366490,
      f = "18446744073709551615",
      S = 0,
      m = 2147483647;
    function E(e, t) {
      switch ((void 0 === t && (t = "en"), e)) {
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
          return "zn-cn";
        case 7:
          return "zn-tw";
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
    var h = function (e) {
      return "koreana" === e ? "korean" : e;
    };
    function A(e, t) {
      switch ((void 0 === t && (t = ""), e)) {
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
    function g(e, t) {
      switch ((void 0 === t && (t = 0), e)) {
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
    var b, C, y, R, v, T, k;
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
    })(b || (b = {})),
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
      })(C || (C = {})),
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
            "k_ESuspendResumeProgressState_WaitingForApp");
      })(y || (y = {})),
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
      })(v || (v = {})),
      (function (e) {
        (e[(e.k_EOverlayToStoreFlag_None = 0)] = "k_EOverlayToStoreFlag_None"),
          (e[(e.k_EOverlayToStoreFlag_AddToCart = 1)] =
            "k_EOverlayToStoreFlag_AddToCart"),
          (e[(e.k_EOverlayToStoreFlag_AddToCartAndShow = 2)] =
            "k_EOverlayToStoreFlag_AddToCartAndShow");
      })(T || (T = {})),
      (function (e) {
        (e[(e.k_EActivateGameOverlayToWebPageMode_Default = 0)] =
          "k_EActivateGameOverlayToWebPageMode_Default"),
          (e[(e.k_EActivateGameOverlayToWebPageMode_Modal = 1)] =
            "k_EActivateGameOverlayToWebPageMode_Modal");
      })(k || (k = {}));
  },
  "1n9R": function (e, t, n) {
    "use strict";
    n.d(t, "d", function () {
      return a;
    }),
      n.d(t, "j", function () {
        return c;
      }),
      n.d(t, "b", function () {
        return u;
      }),
      n.d(t, "c", function () {
        return s;
      }),
      n.d(t, "g", function () {
        return l;
      }),
      n.d(t, "a", function () {
        return d;
      }),
      n.d(t, "i", function () {
        return p;
      }),
      n.d(t, "h", function () {
        return f;
      }),
      n.d(t, "e", function () {
        return m;
      }),
      n.d(t, "f", function () {
        return E;
      });
    n("mrSG");
    var r,
      o = n("/7KC"),
      i = n("YlSc"),
      a =
        (n("0N1H"),
        {
          EUNIVERSE: 0,
          WEB_UNIVERSE: "",
          LANGUAGE: "english",
          SUPPORTED_LANGUAGES: [],
          COUNTRY: "",
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
          get SESSIONID() {
            return (function () {
              if (!Object(i.a)()) return r || (r = l()), r;
              var e = Object(i.b)("sessionid");
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
        }),
      c = {
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
      u = { steamid: "", clanid: 0, listid: 0 },
      s = {
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
      _ = { ANNOUNCEMENT_GID: "" };
    function l() {
      var e = (function () {
        for (var e = "", t = 0; t < 24; t++)
          e += Object(o.b)(0, 35).toString(36);
        return e;
      })();
      return Object(i.c)("sessionid", e, 0), e;
    }
    function d() {
      var e = null;
      return (
        Object(i.a)() && (e = Object(i.b)("presentation_mode")),
        Boolean(e && 1 === Number.parseInt(e))
      );
    }
    function p(e) {
      void 0 === e && (e = "webui_config");
      var t = {},
        n = f("config", e);
      n && (delete n.SESSIONID, Object.assign(a, n), (t.config = !0));
      var r = f("userinfo", e);
      r &&
        (Object.assign(c, r),
        (t.userConfig = !0),
        c.is_support && d() && (c.is_support = !1));
      var o = f("broadcast", e);
      o && (Object.assign(u, o), (t.broadcastConfig = !0));
      var i = f("community", e);
      i && (Object.assign(s, i), (t.communityConfig = !0));
      var l = f("event", e);
      return l && (Object.assign(_, l), (t.eventConfig = !0)), t;
    }
    function f(e, t) {
      var n;
      if (
        (void 0 === t && (t = "webui_config"),
        (n = "string" == typeof t ? document.getElementById(t) : t))
      )
        try {
          return n.hasAttribute("data-" + e)
            ? JSON.parse(n.getAttribute("data-" + e))
            : null;
        } catch (e) {
          console.error("Failed to parse config", e);
        }
      else console.error("Missing config element #", t);
    }
    function S(e, t) {
      return 0 != t.length && e.startsWith(t);
    }
    function m() {
      if (!window || !window.location || !window.location.href)
        return console.warn("Unable to determine base url!"), "unknown";
      var e = window.location.href;
      return S(e, a.STORE_BASE_URL)
        ? a.STORE_BASE_URL
        : S(e, a.COMMUNITY_BASE_URL)
        ? a.COMMUNITY_BASE_URL
        : S(e, a.CHAT_BASE_URL)
        ? a.CHAT_BASE_URL
        : S(e, a.PARTNER_BASE_URL)
        ? a.PARTNER_BASE_URL
        : S(e, a.HELP_BASE_URL)
        ? a.HELP_BASE_URL
        : S(e, a.STEAMTV_BASE_URL)
        ? a.STEAMTV_BASE_URL
        : S(e, a.STATS_BASE_URL)
        ? a.STATS_BASE_URL
        : S(e, a.INTERNAL_STATS_BASE_URL)
        ? a.INTERNAL_STATS_BASE_URL
        : S(e, "https://steamloopback.host")
        ? "https://steamloopback.host"
        : "";
    }
    function E() {
      var e = window.location.href;
      return e.startsWith(a.STORE_BASE_URL)
        ? "store"
        : e.startsWith(a.COMMUNITY_BASE_URL)
        ? "community"
        : e.startsWith(a.PARTNER_BASE_URL)
        ? "partnerweb"
        : e.startsWith(a.HELP_BASE_URL)
        ? "help"
        : e.startsWith(a.STEAMTV_BASE_URL)
        ? "steamtv"
        : e.startsWith(a.STATS_BASE_URL) ||
          e.startsWith(a.INTERNAL_STATS_BASE_URL)
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
    var r = n("1n9R"),
      o = { success: !0, result: 1 },
      i = (function () {
        function e() {
          (this.m_connection = new a()),
            (this.m_bAllowAccountMismatch = !1),
            (this.m_mapCacheSubscribedApp = new Map());
        }
        return (
          (e.prototype.FailureResult = function (e) {
            void 0 === e && (e = 2);
            var t = { success: !1, result: e };
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
          }),
          (e.prototype.SetAllowAccountMismatch = function (e) {
            this.m_bAllowAccountMismatch = e;
          }),
          (e.prototype.BClientConnected = function () {
            var e = this;
            return this.m_connection.Connect().then(
              function () {
                return o;
              },
              function () {
                return e.FailureResult();
              }
            );
          }),
          (e.prototype.BClientSupportsMessage = function (e) {
            return (
              !(
                !this.m_connection.connected_to_client ||
                !this.m_connection.ready
              ) &&
              -1 !== this.m_connection.ClientInfo.rgSupportedMessages.indexOf(e)
            );
          }),
          (e.prototype.OpenFriendChatDialog = function (e) {
            var t = { message: "ShowFriendChatDialog", steamid: e };
            return this.GenericEResultCall(t);
          }),
          (e.prototype.OpenChatRoomGroupDialog = function (e, t) {
            var n = { message: "ShowChatRoomGroupDialog", chat_group_id: e };
            return t && (n.chat_room_id = t), this.GenericEResultCall(n);
          }),
          (e.prototype.ShowChatRoomGroupInvite = function (e) {
            var t = { message: "ShowChatRoomGroupInvite", invite_code: e };
            return this.GenericEResultCall(t);
          }),
          (e.prototype.OpenJoinGameDialog = function (e) {
            var t = { message: "ShowJoinGameDialog", friend_id: e };
            return this.GenericEResultCall(t);
          }),
          (e.prototype.BIsSubscribedApp = function (e) {
            var t = this;
            if (this.m_mapCacheSubscribedApp.has(e))
              return Promise.resolve(this.m_mapCacheSubscribedApp.get(e));
            var n = { message: "IsSubscribedApp", appid: e };
            return this.GenericEResultCall(n).then(function (n) {
              if (!n.connect_failed) {
                var r = 1 == n.result;
                return t.m_mapCacheSubscribedApp.set(e, r), r;
              }
            });
          }),
          (e.prototype.ViewGameInfoForSteamID = function (e) {
            var t = { message: "ViewGameInfoForSteamID", steamid: e };
            return this.GenericEResultCall(t);
          }),
          (e.prototype.OpenFriendsDialog = function () {
            return this.GenericEResultCall({ message: "OpenFriendsDialog" });
          }),
          (e.prototype.BClientAccountMatches = function () {
            return (
              !r.j.logged_in ||
              r.j.accountid == this.m_connection.ClientInfo.unAccountID
            );
          }),
          (e.prototype.GenericEResultCall = function (e) {
            var t = this;
            return this.m_connection
              .Connect()
              .then(function () {
                return t.m_bAllowAccountMismatch || t.BClientAccountMatches()
                  ? t.m_connection
                      .SendMsgAndAwaitResponse(e)
                      .then(function (e) {
                        return 1 === e.success ? o : t.FailureResult(e.success);
                      })
                  : { success: !1, result: 19, account_mismatch: !0 };
              })
              .catch(function () {
                return t.FailureResult();
              });
          }),
          e
        );
      })(),
      a = (function () {
        function e() {
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
        return (
          Object.defineProperty(e.prototype, "ClientInfo", {
            get: function () {
              return this.m_ClientInfo;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "ready", {
            get: function () {
              return this.m_bReady;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "browser_supported", {
            get: function () {
              return !this.m_bSecurityException;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "connected_to_client", {
            get: function () {
              return (
                this.m_socket && this.m_socket.readyState == WebSocket.OPEN
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.SendMsgAndAwaitResponse = function (e) {
            var t = this;
            return new Promise(function (n, r) {
              var o = t.m_iCallSeq++;
              t.BSendMsg(e, o)
                ? t.m_mapWaitingCallbacks.set(o, {
                    iSeq: o,
                    fnCallback: n,
                    fnError: r,
                  })
                : r();
            });
          }),
          (e.prototype.BSendMsg = function (e, t) {
            if (!this.m_socket || this.m_socket.readyState != WebSocket.OPEN)
              return !1;
            var n = Object.assign({}, e, {
              universe: r.d.EUNIVERSE,
              accountid: r.j.accountid,
            });
            void 0 !== t && (n.sequenceid = t);
            try {
              return this.m_socket.send(JSON.stringify(n)), !0;
            } catch (e) {
              return !1;
            }
          }),
          (e.prototype.OnSocketMessage = function (e) {
            try {
              var t = JSON.parse(e.data);
              if (t.sequenceid) {
                var n = this.m_mapWaitingCallbacks.get(t.sequenceid);
                if (n)
                  return (
                    this.m_mapWaitingCallbacks.delete(t.sequenceid),
                    void n.fnCallback(t)
                  );
              }
            } catch (e) {
              console.error("exception parsing response", e);
            }
          }),
          (e.prototype.Connect = function () {
            var e = this;
            if (this.m_bReady && this.m_socket.readyState == WebSocket.OPEN)
              return Promise.resolve();
            if (this.m_promiseConnect) return this.m_promiseConnect;
            var t = new Promise(function (t, n) {
              try {
                e.m_socket = new WebSocket(
                  "ws://127.0.0.1:27060/clientsocket/"
                );
              } catch (t) {
                return (e.m_bSecurityException = !0), void n(t);
              }
              (e.m_socket.onerror = function (e) {
                n();
              }),
                (e.m_socket.onmessage = e.OnSocketMessage.bind(e)),
                (e.m_socket.onopen = function () {
                  e.SendMsgAndAwaitResponse({ message: "GetClientInfo" })
                    .then(function (r) {
                      1 == r.success
                        ? ((e.m_ClientInfo.ulVersion = r.clientversion),
                          (e.m_ClientInfo.bFriendsUIEnabled = !!r.friendsui),
                          (e.m_ClientInfo.unAccountID = r.accountid),
                          r.supported_messages &&
                            (e.m_ClientInfo.rgSupportedMessages =
                              r.supported_messages),
                          t())
                        : n();
                    })
                    .catch(n);
                });
            });
            return (
              (this.m_promiseConnect = t),
              this.m_promiseConnect
                .then(function () {
                  (e.m_bReady = !0), (e.m_promiseConnect = void 0);
                })
                .catch(function () {
                  (e.m_bClientConnectionFailed = !0),
                    (e.m_promiseConnect = void 0);
                }),
              this.m_promiseConnect
            );
          }),
          e
        );
      })(),
      c = new i();
    window.ClientConnectionAPI = c;
  },
  YlSc: function (e, t, n) {
    "use strict";
    function r(e) {
      if (!i() || !window.document.cookie) return null;
      var t = document.cookie.match("(^|; )" + e + "=([^;]*)");
      return t && t[2] ? decodeURIComponent(t[2]) : null;
    }
    function o(e, t, n, r) {
      if (i()) {
        r || (r = "/");
        var o = "";
        if (void 0 !== n && n) {
          var a = new Date();
          a.setTime(a.getTime() + 864e5 * n),
            (o = "; expires=" + a.toUTCString());
        }
        document.cookie =
          encodeURIComponent(e) +
          "=" +
          encodeURIComponent(t) +
          o +
          ";path=" +
          r;
      }
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
    n.d(t, "d", function () {
      return o;
    }),
      n.d(t, "a", function () {
        return i;
      }),
      n.d(t, "f", function () {
        return a;
      }),
      n.d(t, "c", function () {
        return c;
      }),
      n.d(t, "b", function () {
        return u;
      }),
      n.d(t, "e", function () {
        return s;
      }),
      n.d(t, "g", function () {
        return _;
      });
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
    var r = function (e, t) {
      return (r =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        })(e, t);
    };
    function o(e, t) {
      function n() {
        this.constructor = e;
      }
      r(e, t),
        (e.prototype =
          null === t
            ? Object.create(t)
            : ((n.prototype = t.prototype), new n()));
    }
    var i = function () {
      return (i =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }).apply(this, arguments);
    };
    function a(e, t) {
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
    function c(e, t, n, r) {
      var o,
        i = arguments.length,
        a =
          i < 3
            ? t
            : null === r
            ? (r = Object.getOwnPropertyDescriptor(t, n))
            : r;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        a = Reflect.decorate(e, t, n, r);
      else
        for (var c = e.length - 1; c >= 0; c--)
          (o = e[c]) &&
            (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
      return i > 3 && a && Object.defineProperty(t, n, a), a;
    }
    function u(e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function a(e) {
          try {
            u(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function c(e) {
          try {
            u(r.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function u(e) {
          var t;
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(a, c);
        }
        u((r = r.apply(e, t || [])).next());
      });
    }
    function s(e, t) {
      var n,
        r,
        o,
        i,
        a = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (i = { next: c(0), throw: c(1), return: c(2) }),
        "function" == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function c(i) {
        return function (c) {
          return (function (i) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; a; )
              try {
                if (
                  ((n = 1),
                  r &&
                    (o =
                      2 & i[0]
                        ? r.return
                        : i[0]
                        ? r.throw || ((o = r.return) && o.call(r), 0)
                        : r.next) &&
                    !(o = o.call(r, i[1])).done)
                )
                  return o;
                switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                  case 0:
                  case 1:
                    o = i;
                    break;
                  case 4:
                    return a.label++, { value: i[1], done: !1 };
                  case 5:
                    a.label++, (r = i[1]), (i = [0]);
                    continue;
                  case 7:
                    (i = a.ops.pop()), a.trys.pop();
                    continue;
                  default:
                    if (
                      !((o = a.trys),
                      (o = o.length > 0 && o[o.length - 1]) ||
                        (6 !== i[0] && 2 !== i[0]))
                    ) {
                      a = 0;
                      continue;
                    }
                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                      a.label = i[1];
                      break;
                    }
                    if (6 === i[0] && a.label < o[1]) {
                      (a.label = o[1]), (o = i);
                      break;
                    }
                    if (o && a.label < o[2]) {
                      (a.label = o[2]), a.ops.push(i);
                      break;
                    }
                    o[2] && a.ops.pop(), a.trys.pop();
                    continue;
                }
                i = t.call(e, a);
              } catch (e) {
                (i = [6, e]), (r = 0);
              } finally {
                n = o = 0;
              }
            if (5 & i[0]) throw i[1];
            return { value: i[0] ? i[1] : void 0, done: !0 };
          })([i, c]);
        };
      }
    }
    function _() {
      for (var e = 0, t = 0, n = arguments.length; t < n; t++)
        e += arguments[t].length;
      var r = Array(e),
        o = 0;
      for (t = 0; t < n; t++)
        for (var i = arguments[t], a = 0, c = i.length; a < c; a++, o++)
          r[o] = i[a];
      return r;
    }
  },
  tkkQ: function (e, t, n) {
    "use strict";
    var r = n("1n9R");
    n.d(t, "a", function () {
      return r.d;
    }),
      n.d(t, "d", function () {
        return r.j;
      }),
      n.d(t, "c", function () {
        return r.i;
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
