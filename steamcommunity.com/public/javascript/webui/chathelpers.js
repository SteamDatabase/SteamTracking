/*! This file includes third-party software, governed by the licenses described here: https://steamcommunity.com/public/javascript/webui/chathelpers.licenses.txt */

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "5776248";
!(function(e) {
  function t(t) {
    for (
      var r, a, s = t[0], u = t[1], c = t[2], p = 0, m = [];
      p < s.length;
      p++
    )
      (a = s[p]), o[a] && m.push(o[a][0]), (o[a] = 0);
    for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (e[r] = u[r]);
    for (l && l(t); m.length; ) m.shift()();
    return i.push.apply(i, c || []), n();
  }
  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], r = !0, s = 1; s < n.length; s++) {
        var u = n[s];
        0 !== o[u] && (r = !1);
      }
      r && (i.splice(t--, 1), (e = a((a.s = n[0]))));
    }
    return e;
  }
  var r = {},
    o = { 3: 0 },
    i = [];
  function a(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
  }
  (a.m = e),
    (a.c = r),
    (a.d = function(e, t, n) {
      a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (a.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (a.t = function(e, t) {
      if ((1 & t && (e = a(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (a.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          a.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (a.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return a.d(t, "a", t), t;
    }),
    (a.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (a.p = "");
  var s = (window.webpackJsonp = window.webpackJsonp || []),
    u = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var c = 0; c < s.length; c++) t(s[c]);
  var l = u;
  i.push(["qM/t", 0]), n();
})({
  "/7KC": function(e, t, n) {
    "use strict";
    function r(e, t) {
      return (
        (e = Math.ceil(e)),
        (t = Math.floor(t)),
        Math.floor(Math.random() * (t - e + 1)) + e
      );
    }
    function o(e, t, n) {
      return Math.max(t, Math.min(n, e));
    }
    function i(e, t, n, r, o) {
      return r + ((o - r) * (e - t)) / (n - t);
    }
    n.d(t, "b", function() {
      return r;
    }),
      n.d(t, "a", function() {
        return o;
      }),
      n.d(t, "c", function() {
        return i;
      });
  },
  "0N1H": function(e, t, n) {
    "use strict";
    function r(e) {
      return 3 == e || 6 == e;
    }
    function o(e) {
      return 5 == e || 6 == e;
    }
    n.d(t, "b", function() {
      return r;
    }),
      n.d(t, "a", function() {
        return o;
      }),
      n.d(t, "n", function() {
        return a;
      }),
      n.d(t, "o", function() {
        return s;
      }),
      n.d(t, "g", function() {
        return u;
      }),
      n.d(t, "h", function() {
        return c;
      }),
      n.d(t, "m", function() {
        return l;
      }),
      n.d(t, "i", function() {
        return p;
      }),
      n.d(t, "j", function() {
        return m;
      }),
      n.d(t, "l", function() {
        return h;
      }),
      n.d(t, "k", function() {
        return _;
      }),
      n.d(t, "d", function() {
        return d;
      }),
      n.d(t, "f", function() {
        return f;
      }),
      n.d(t, "e", function() {
        return v;
      }),
      n.d(t, "c", function() {
        return E;
      });
    var i,
      a = 1,
      s = 4,
      u = 750,
      c = 799,
      l = 7,
      p = 250820,
      m = 330050,
      h = 358510,
      _ = 366490,
      d = "18446744073709551615",
      f = 0,
      v = 2147483647;
    function E(e, t) {
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
        default:
          return t;
      }
    }
    !(function(e) {
      (e[(e.k_EOtherEvent = 1)] = "k_EOtherEvent"),
        (e[(e.k_EGameEvent = 2)] = "k_EGameEvent"),
        (e[(e.k_EPartyEvent = 3)] = "k_EPartyEvent"),
        (e[(e.k_EMeetingEvent = 4)] = "k_EMeetingEvent"),
        (e[(e.k_ESpecialCauseEvent = 5)] = "k_ESpecialCauseEvent"),
        (e[(e.k_EMusicAndArtsEvent = 6)] = "k_EMusicAndArtsEvent"),
        (e[(e.k_ESportsEvent = 7)] = "k_ESportsEvent"),
        (e[(e.k_ETripEvent = 8)] = "k_ETripEvent"),
        (e[(e.k_EChatEvent = 9)] = "k_EChatEvent"),
        (e[(e.k_EGameReleaseEvent = 10)] = "k_EGameReleaseEvent"),
        (e[(e.k_EBroadcastEvent = 11)] = "k_EBroadcastEvent"),
        (e[(e.k_ESmallUpdateEvent = 12)] = "k_ESmallUpdateEvent"),
        (e[(e.k_ERegularUpdateEvent = 13)] = "k_ERegularUpdateEvent"),
        (e[(e.k_EMajorUpdateEvent = 14)] = "k_EMajorUpdateEvent"),
        (e[(e.k_EDLCReleaseEvent = 15)] = "k_EDLCReleaseEvent"),
        (e[(e.k_EFutureReleaseEvent = 16)] = "k_EFutureReleaseEvent"),
        (e[(e.k_EESportTournamentStreamEvent = 17)] =
          "k_EESportTournamentStreamEvent"),
        (e[(e.k_EDevStreamEvent = 18)] = "k_EDevStreamEvent"),
        (e[(e.k_EFamousStreamEvent = 19)] = "k_EFamousStreamEvent"),
        (e[(e.k_EGameSalesEvent = 20)] = "k_EGameSalesEvent"),
        (e[(e.k_EGameItemSalesEvent = 21)] = "k_EGameItemSalesEvent"),
        (e[(e.k_EInGameBonusXPEvent = 22)] = "k_EInGameBonusXPEvent"),
        (e[(e.k_EInGameLootEvent = 23)] = "k_EInGameLootEvent"),
        (e[(e.k_EInGamePerksEvent = 24)] = "k_EInGamePerksEvent"),
        (e[(e.k_EInGameChallengeEvent = 25)] = "k_EInGameChallengeEvent"),
        (e[(e.k_EInGameContestEvent = 26)] = "k_EInGameContestEvent"),
        (e[(e.k_EIRLEvent = 27)] = "k_EIRLEvent"),
        (e[(e.k_ENewsEvent = 28)] = "k_ENewsEvent"),
        (e[(e.k_EBetaReleaseEvent = 29)] = "k_EBetaReleaseEvent"),
        (e[(e.k_EFreeTrial = 31)] = "k_EFreeTrial"),
        (e[(e.k_ESeasonRelease = 32)] = "k_ESeasonRelease"),
        (e[(e.k_ECrosspostEvent = 34)] = "k_ECrosspostEvent"),
        (e[(e.k_EInGameEventGeneral = 35)] = "k_EInGameEventGeneral");
    })(i || (i = {}));
    var b;
    i.k_EOtherEvent,
      i.k_EGameEvent,
      i.k_EPartyEvent,
      i.k_EMeetingEvent,
      i.k_ESpecialCauseEvent,
      i.k_EMusicAndArtsEvent,
      i.k_ESportsEvent,
      i.k_ETripEvent,
      i.k_EChatEvent,
      i.k_EGameReleaseEvent,
      i.k_EBroadcastEvent,
      i.k_ESmallUpdateEvent,
      i.k_ERegularUpdateEvent,
      i.k_EMajorUpdateEvent,
      i.k_EDLCReleaseEvent,
      i.k_EFutureReleaseEvent,
      i.k_EESportTournamentStreamEvent,
      i.k_EDevStreamEvent,
      i.k_EFamousStreamEvent,
      i.k_EGameSalesEvent,
      i.k_EGameItemSalesEvent,
      i.k_EInGameBonusXPEvent,
      i.k_EInGameLootEvent,
      i.k_EInGamePerksEvent,
      i.k_EInGameChallengeEvent,
      i.k_EInGameContestEvent,
      i.k_EIRLEvent,
      i.k_ENewsEvent,
      i.k_EBetaReleaseEvent,
      i.k_EFreeTrial,
      i.k_ESeasonRelease,
      i.k_ECrosspostEvent,
      i.k_EInGameEventGeneral;
    !(function(e) {
      (e[(e.k_ELaunchSource_None = 0)] = "k_ELaunchSource_None"),
        (e[(e.k_ELaunchSource_2ftLibraryDetails = 100)] =
          "k_ELaunchSource_2ftLibraryDetails"),
        (e[(e.k_ELaunchSource_2ftLibraryListView = 101)] =
          "k_ELaunchSource_2ftLibraryListView"),
        (e[(e.k_ELaunchSource_2ftLibraryGrid = 103)] =
          "k_ELaunchSource_2ftLibraryGrid"),
        (e[(e.k_ELaunchSource_InstallSubComplete = 104)] =
          "k_ELaunchSource_InstallSubComplete"),
        (e[(e.k_ELaunchSource_DownloadsPage = 105)] =
          "k_ELaunchSource_DownloadsPage"),
        (e[(e.k_ELaunchSource_RemoteClientStartStreaming = 106)] =
          "k_ELaunchSource_RemoteClientStartStreaming"),
        (e[(e.k_ELaunchSource_2ftMiniModeList = 107)] =
          "k_ELaunchSource_2ftMiniModeList"),
        (e[(e.k_ELaunchSource_10ft = 200)] = "k_ELaunchSource_10ft"),
        (e[(e.k_ELaunchSource_DashAppLaunchCmdLine = 300)] =
          "k_ELaunchSource_DashAppLaunchCmdLine"),
        (e[(e.k_ELaunchSource_DashGameIdLaunchCmdLine = 301)] =
          "k_ELaunchSource_DashGameIdLaunchCmdLine"),
        (e[(e.k_ELaunchSource_RunByGameDir = 302)] =
          "k_ELaunchSource_RunByGameDir"),
        (e[(e.k_ELaunchSource_SubCmdRunDashGame = 303)] =
          "k_ELaunchSource_SubCmdRunDashGame"),
        (e[(e.k_ELaunchSource_SteamURL_Launch = 400)] =
          "k_ELaunchSource_SteamURL_Launch"),
        (e[(e.k_ELaunchSource_SteamURL_Run = 401)] =
          "k_ELaunchSource_SteamURL_Run"),
        (e[(e.k_ELaunchSource_SteamURL_JoinLobby = 402)] =
          "k_ELaunchSource_SteamURL_JoinLobby"),
        (e[(e.k_ELaunchSource_SteamURL_RunGame = 403)] =
          "k_ELaunchSource_SteamURL_RunGame"),
        (e[(e.k_ELaunchSource_SteamURL_RunGameIdOrJumplist = 404)] =
          "k_ELaunchSource_SteamURL_RunGameIdOrJumplist"),
        (e[(e.k_ELaunchSource_SteamURL_RunSafe = 405)] =
          "k_ELaunchSource_SteamURL_RunSafe"),
        (e[(e.k_ELaunchSource_TrayIcon = 500)] = "k_ELaunchSource_TrayIcon"),
        (e[(e.k_ELaunchSource_LibraryLeftColumnContextMenu = 600)] =
          "k_ELaunchSource_LibraryLeftColumnContextMenu"),
        (e[(e.k_ELaunchSource_LibraryLeftColumnDoubleClick = 601)] =
          "k_ELaunchSource_LibraryLeftColumnDoubleClick"),
        (e[(e.k_ELaunchSource_Dota2Launcher = 700)] =
          "k_ELaunchSource_Dota2Launcher"),
        (e[(e.k_ELaunchSource_IRunGameEngine = 800)] =
          "k_ELaunchSource_IRunGameEngine"),
        (e[(e.k_ELaunchSource_DRMFailureResponse = 801)] =
          "k_ELaunchSource_DRMFailureResponse"),
        (e[(e.k_ELaunchSource_DRMDataRequest = 802)] =
          "k_ELaunchSource_DRMDataRequest"),
        (e[(e.k_ELaunchSource_CloudFilePanel = 803)] =
          "k_ELaunchSource_CloudFilePanel"),
        (e[(e.k_ELaunchSource_DiscoveredAlreadyRunning = 804)] =
          "k_ELaunchSource_DiscoveredAlreadyRunning"),
        (e[(e.k_ELaunchSource_GameActionJoinParty = 900)] =
          "k_ELaunchSource_GameActionJoinParty"),
        (e[(e.k_ELaunchSource_AppPortraitContextMenu = 1e3)] =
          "k_ELaunchSource_AppPortraitContextMenu");
    })(b || (b = {}));
  },
  "1VtQ": function(e, t, n) {
    "use strict";
    function r(e, t, n) {
      return {
        get: function() {
          var e = n.value.bind(this);
          return (
            this.hasOwnProperty(t) ||
              Object.defineProperty(this, t, { value: e }),
            e
          );
        }
      };
    }
    function o(e, t, n) {
      return [e, t, n];
    }
    n.d(t, "a", function() {
      return r;
    }),
      n.d(t, "b", function() {
        return o;
      });
  },
  "1n9R": function(e, t, n) {
    "use strict";
    n("mrSG");
    var r = n("/7KC");
    function o() {
      return !!window.document;
    }
    n.d(t, "b", function() {
      return a;
    }),
      n.d(t, "h", function() {
        return s;
      }),
      n.d(t, "a", function() {
        return u;
      }),
      n.d(t, "e", function() {
        return p;
      }),
      n.d(t, "g", function() {
        return m;
      }),
      n.d(t, "f", function() {
        return h;
      }),
      n.d(t, "c", function() {
        return _;
      }),
      n.d(t, "d", function() {
        return d;
      });
    var i,
      a = {
        EUNIVERSE: 0,
        WEB_UNIVERSE: "",
        LANGUAGE: "english",
        SUPPORTED_LANGUAGES: [],
        COUNTRY: "",
        CDN_URL: "",
        MEDIA_CDN_COMMUNITY_URL: "",
        MEDIA_CDN_URL: "",
        COMMUNITY_CDN_URL: "",
        COMMUNITY_CDN_ASSET_URL: "",
        STORE_CDN_URL: "",
        PUBLIC_SHARED_URL: "",
        COMMUNITY_BASE_URL: "",
        CHAT_BASE_URL: "",
        STORE_BASE_URL: "",
        STORE_ICON_BASE_URL: "",
        IMG_URL: "",
        STEAMTV_BASE_URL: "",
        HELP_BASE_URL: "",
        PARTNER_BASE_URL: "",
        IN_CLIENT: !1,
        USE_POPUPS: !1,
        IN_MOBILE: !1,
        IN_TENFOOT: !1,
        PLATFORM: "",
        SNR: "",
        LOCAL_HOSTNAME: "",
        WEBAPI_BASE_URL: "",
        TOKEN_URL: "",
        BUILD_TIMESTAMP: 0,
        PAGE_TIMESTAMP: 0,
        get SESSIONID() {
          return (function() {
            if (!o()) return i || (i = p()), i;
            var e = (function(e) {
              if (!o() || !window.document.cookie) return null;
              var t = document.cookie.match("(^|; )" + e + "=([^;]*)");
              return t && t[2] ? decodeURIComponent(t[2]) : null;
            })("sessionid");
            e || (e = p());
            return e;
          })();
        },
        FRIENDSUI_BETA: !1,
        STEAM_TV: !1,
        DEV_MODE: !1,
        OFFLINE_MODE: !1
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
        short_url: ""
      },
      u = { steamid: "", clanid: 0, listid: 0 },
      c = {
        CLANSTEAMID: "",
        CLANACCOUNTID: 0,
        ANNOUNCEMENT_GID: "",
        IMG_URL: "",
        APPID: 0,
        VANITY_ID: "",
        IS_CREATOR_HOME: !1,
        HEADER_IMAGE: "",
        APP_NAME: "",
        HAS_ADULT_CONTENT: !1,
        HAS_ADULT_CONTENT_SEX: !1,
        HAS_ADULT_CONTENT_VIOLENCE: !1
      },
      l = "webui_config";
    function p() {
      var e = (function() {
        for (var e = "", t = 0; t < 24; t++)
          e += Object(r.b)(0, 35).toString(36);
        return e;
      })();
      return (
        (function(e, t, n, r) {
          if (o()) {
            r || (r = "/");
            var i = "";
            if (void 0 !== n && n) {
              var a = new Date();
              a.setTime(a.getTime() + 864e5 * n),
                (i = "; expires=" + a.toUTCString());
            }
            document.cookie =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(t) +
              i +
              ";path=" +
              r;
          }
        })("sessionid", e, 0),
        e
      );
    }
    function m(e) {
      void 0 === e && (e = l);
      var t = {},
        n = h("config", e);
      n && (delete n.SESSIONID, Object.assign(a, n), (t.config = !0));
      var r = h("userinfo", e);
      r && (Object.assign(s, r), (t.userConfig = !0));
      var o = h("broadcast", e);
      o && (Object.assign(u, o), (t.broadcastConfig = !0));
      var i = h("community", e);
      return i && (Object.assign(c, i), (t.communityConfig = !0)), t;
    }
    function h(e, t) {
      var n;
      if (
        (void 0 === t && (t = l),
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
    function _() {
      var e = window.location.href;
      return e.startsWith(a.STORE_BASE_URL)
        ? a.STORE_BASE_URL
        : e.startsWith(a.COMMUNITY_BASE_URL)
        ? a.COMMUNITY_BASE_URL
        : e.startsWith(a.PARTNER_BASE_URL)
        ? a.PARTNER_BASE_URL
        : e.startsWith(a.HELP_BASE_URL)
        ? a.HELP_BASE_URL
        : e.startsWith(a.STEAMTV_BASE_URL)
        ? a.STEAMTV_BASE_URL
        : "";
    }
    function d() {
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
        : "";
    }
  },
  J0bI: function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
      return s;
    }),
      n.d(t, "a", function() {
        return u;
      });
    var r = n("mrSG"),
      o = n("2vnA"),
      i = n("0N1H"),
      a = n("tkkQ"),
      s = (function() {
        function e(e) {
          (this.m_bReady = !1),
            (this.m_bValid = !1),
            (this.m_strInviteCode = e);
        }
        return (
          (e.prototype.BIsReady = function() {
            return this.m_bReady;
          }),
          (e.prototype.BIsValid = function() {
            return this.m_bValid;
          }),
          (e.prototype.BIsInviteLink = function() {
            return !!this.m_strInviteCode;
          }),
          (e.prototype.GetInviteCode = function() {
            return this.m_strInviteCode;
          }),
          (e.prototype.BNeverExpires = function() {
            return this.m_rtTimeExpires == i.e;
          }),
          (e.prototype.GetChatRoomGroupID = function() {
            return this.m_ulChatRoomGroupID;
          }),
          (e.prototype.BIsVoiceChatInvite = function() {
            return !!this.m_ulChatID;
          }),
          (e.prototype.GetChatID = function() {
            return this.m_ulChatID;
          }),
          (e.prototype.GetURL = function() {
            return this.m_strInviteCode ? u(this.m_strInviteCode) : null;
          }),
          (e.prototype.BIsUserBanned = function() {
            return this.m_bIsBanned;
          }),
          (e.prototype.GetTimeKickExpires = function() {
            return this.m_rtKickExpires;
          }),
          Object.defineProperty(e.prototype, "time_expires", {
            get: function() {
              return this.m_rtTimeExpires;
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.InitInvalid = function() {
            (this.m_bValid = !1), (this.m_bReady = !0);
          }),
          (e.prototype.InitDirectInvite = function(e, t, n, r) {
            void 0 === n && (n = !1),
              void 0 === r && (r = void 0),
              (this.m_ulChatRoomGroupID = e),
              (this.m_ulChatID = t),
              (this.m_bIsBanned = n),
              (this.m_rtKickExpires = r),
              (this.m_rtTimeExpires = i.e),
              (this.m_bValid = !0),
              (this.m_bReady = !0);
          }),
          Object(r.c)([o.x], e.prototype, "m_bReady", void 0),
          Object(r.c)([o.g], e.prototype, "InitInvalid", null),
          Object(r.c)([o.g], e.prototype, "InitDirectInvite", null),
          e
        );
      })();
    function u(e) {
      return "public" == a.a.WEB_UNIVERSE
        ? "https://s.team/chat/" + e
        : a.a.COMMUNITY_BASE_URL + "chat/invite/" + e;
    }
  },
  JtU4: function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
      return r;
    }),
      n.d(t, "a", function() {
        return _;
      }),
      n.d(t, "b", function() {
        return d;
      }),
      n.d(t, "d", function() {
        return v;
      });
    var r,
      o = n("mrSG"),
      i = n("2vnA"),
      a = n("i8i4"),
      s = n("UqDm"),
      u = n("WpBz"),
      c = n("1VtQ"),
      l = n("hEDq"),
      p = n("oh5H"),
      m = n("1n9R");
    !(function(e) {
      (e[(e.Minimized = 1)] = "Minimized"),
        (e[(e.Hidden = 2)] = "Hidden"),
        (e[(e.Tooltip = 4)] = "Tooltip"),
        (e[(e.ContextMenu = 8)] = "ContextMenu"),
        (e[(e.Resizable = 16)] = "Resizable");
    })(r || (r = {}));
    var h = (function() {
        function e(e, t) {
          (this.m_rgLoadingLinks = []), (this.m_rgLoadingLinks = []);
          for (
            var n = e.document.getElementsByTagName("link"), r = 0;
            r < n.length;
            r++
          ) {
            var o = n[r];
            o.addEventListener("load", this.OnLinkLoad),
              this.m_rgLoadingLinks.push(o);
          }
        }
        return (
          (e.prototype.SetTarget = function(e) {
            (this.m_fnRender = e),
              0 == this.m_rgLoadingLinks.length &&
                (this.m_fnRender(), (this.m_fnRender = void 0));
          }),
          (e.prototype.OnLinkLoad = function(e) {
            e.currentTarget.removeEventListener("load", this.OnLinkLoad),
              s.c(this.m_rgLoadingLinks, e.currentTarget),
              0 == this.m_rgLoadingLinks.length &&
                (this.m_fnRender(), (this.m_fnRender = void 0));
          }),
          Object(o.c)([c.a], e.prototype, "OnLinkLoad", null),
          e
        );
      })(),
      _ = (function() {
        function e(e, t) {
          (this.m_bFocused = !1),
            (this.m_strName = e),
            (this.m_rgParams = t),
            this.m_rgParams.target_browser &&
              (this.m_strName +=
                "_pid" + this.m_rgParams.target_browser.m_unPID),
            (this.m_strTitle = t.title),
            delete this.m_rgParams.title;
        }
        return (
          (e.prototype.UpdateParamsBeforeShow = function(e) {
            return e;
          }),
          (e.prototype.OnDrop = function(e) {
            console.log("Ignoring drop onto toplevel window", e),
              e.preventDefault(),
              e.stopPropagation();
          }),
          (e.prototype.OnDragOver = function(e) {
            e.preventDefault(),
              (e.dataTransfer.dropEffect = "none"),
              e.stopPropagation();
          }),
          (e.prototype.OnMessage = function(e) {
            "window_moved" == e.data && this.OnResize();
          }),
          (e.prototype.Show = function(e, t) {
            var n,
              o = this;
            void 0 === e && (e = !0),
              void 0 === t && (t = !1),
              window.SteamClient &&
                (this.m_rgParams.eCreationFlags |= r.Hidden),
              this.m_rgParams.eCreationFlags & r.Tooltip && (e = !1),
              this.BIsValid() &&
                (this.BIsClosed()
                  ? ((this.m_popup = void 0), (this.m_element = void 0))
                  : e && this.Focus(t));
            var i,
              a,
              s,
              u = v.GetExistingPopup(this.m_strName);
            (u && !this.m_rgParams.replace_existing_popup) ||
              ((this.m_rgParams = this.UpdateParamsBeforeShow(this.m_rgParams)),
              u
                ? ((a = u.m_element),
                  (i = u.m_popup),
                  u.ReleasePopup(),
                  (s = u.m_renderWhenReady),
                  v.RemoveTrackedPopup(u),
                  i.removeEventListener("beforeunload", u.OnBeforeUnloadEvent),
                  i.removeEventListener("unload", u.OnUnload),
                  i.removeEventListener("resize", u.OnResizeEvent),
                  i.removeEventListener("focus", this.OnFocusInternal),
                  i.removeEventListener("blur", this.OnBlurInternal),
                  i.removeEventListener("drop", u.OnDrop),
                  i.removeEventListener("dragover", u.OnDragOver),
                  i.removeEventListener("message", this.OnMessage))
                : ((i = (n = f.CreatePopup(this.m_strName, this.m_rgParams))
                    .popup),
                  (a = n.element),
                  (s = new h(i, a))),
              i &&
                a &&
                ((i.document.title = this.m_strTitle),
                i.addEventListener("beforeunload", this.OnBeforeUnloadEvent),
                i.addEventListener("unload", this.OnUnload),
                i.addEventListener("resize", this.OnResizeEvent),
                i.addEventListener("focus", this.OnFocusInternal),
                i.addEventListener("blur", this.OnBlurInternal),
                i.addEventListener("drop", this.OnDrop),
                i.addEventListener("dragover", this.OnDragOver),
                i.addEventListener("message", this.OnMessage),
                m.b.LANGUAGE &&
                  i.document.documentElement.setAttribute(
                    "lang",
                    p.a[m.b.LANGUAGE]
                  ),
                (this.m_popup = i),
                (this.m_element = a),
                (this.m_renderWhenReady = s),
                this.m_renderWhenReady.SetTarget(function() {
                  return o.RenderInternal(o.m_popup, o.m_element, e);
                })),
              v.AddTrackedPopup(this),
              u && e && this.Focus());
          }),
          (e.prototype.RemoveEventListeners = function() {
            this.window.removeEventListener(
              "beforeunload",
              this.OnBeforeUnloadEvent
            ),
              this.window.removeEventListener("unload", this.OnUnload),
              this.window.removeEventListener("resize", this.OnResizeEvent),
              this.window.removeEventListener("focus", this.OnFocusInternal),
              this.window.removeEventListener("blur", this.OnBlurInternal),
              this.window.removeEventListener("drop", this.OnDrop),
              this.window.removeEventListener("dragover", this.OnDragOver),
              this.window.removeEventListener("message", this.OnMessage);
          }),
          (e.prototype.RenderInternal = function(e, t, n) {
            var r;
            this.browser_info &&
              ((r = this.browser_info).m_eBrowserType ==
                l.f.EBrowserType_OpenVROverlay ||
                r.m_eBrowserType == l.f.EBrowserType_OpenVROverlay_Dashboard) &&
              (t.ownerDocument.body.className += " VR"),
              this.Render(e, t),
              this.OnLoad(),
              e.SteamClient &&
                (n
                  ? e.SteamClient.Window.BringToFront()
                  : e.SteamClient.Window.ShowWindow());
          }),
          (e.prototype.OnResizeEvent = function() {
            this.OnResize();
          }),
          (e.prototype.OnBeforeUnloadEvent = function() {
            this.OnBeforeUnload();
          }),
          (e.prototype.OnUnload = function() {
            this.RemoveEventListeners(),
              v.RemoveTrackedPopup(this),
              this.OnClose(),
              a.unmountComponentAtNode(this.m_element);
          }),
          Object.defineProperty(e.prototype, "browser_info", {
            get: function() {
              return this.m_rgParams.target_browser;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "window", {
            get: function() {
              return this.m_popup;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "root_element", {
            get: function() {
              return this.m_element;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "title", {
            get: function() {
              return this.m_strTitle;
            },
            set: function(e) {
              (this.m_strTitle = e),
                this.m_popup && (this.m_popup.document.title = this.m_strTitle);
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.Focus = function(e) {
            void 0 === e && (e = !1),
              this.m_popup &&
              void 0 !== this.m_popup.SteamClient &&
              void 0 !== this.m_popup.SteamClient.Window
                ? e
                  ? this.m_popup.SteamClient.Window.SetForegroundWindow()
                  : this.m_popup.SteamClient.Window.BringToFront()
                : this.m_popup && this.m_popup.focus();
          }),
          (e.prototype.Close = function() {
            this.m_popup && this.m_popup.close();
          }),
          (e.prototype.GetName = function() {
            return this.m_strName;
          }),
          (e.prototype.BIsValid = function() {
            return !!this.m_popup;
          }),
          (e.prototype.BIsClosed = function() {
            return !this.m_popup || this.m_popup.closed;
          }),
          (e.prototype.BIsVisible = function() {
            return (
              this.m_popup &&
              !this.m_popup.closed &&
              "visible" == this.m_popup.document.visibilityState
            );
          }),
          (e.prototype.BIsFocused = function() {
            return this.BIsVisible() && this.m_popup.document.hasFocus();
          }),
          (e.prototype.OnFocusInternal = function() {
            (this.m_bFocused = !0), this.OnFocus();
          }),
          (e.prototype.OnBlurInternal = function() {
            (this.m_bFocused = !1), this.OnBlur();
          }),
          Object.defineProperty(e.prototype, "focused", {
            get: function() {
              return this.m_bFocused;
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.GetWindowRestoreDetails = function() {
            var e = this;
            return this.m_popup &&
              !this.m_popup.closed &&
              this.m_popup.SteamClient
              ? new Promise(function(t, n) {
                  e.m_popup.SteamClient.Window.GetWindowRestoreDetails(function(
                    e
                  ) {
                    t(e);
                  });
                })
              : Promise.resolve("");
          }),
          (e.prototype.IsMinimized = function() {
            var e = this;
            return this.m_popup &&
              !this.m_popup.closed &&
              this.m_popup.SteamClient &&
              this.m_popup.SteamClient.Window &&
              this.m_popup.SteamClient.Window.IsWindowMinimized
              ? new Promise(function(t, n) {
                  e.m_popup.SteamClient.Window.IsWindowMinimized(function(e) {
                    t(e);
                  });
                })
              : Promise.resolve(!1);
          }),
          (e.prototype.ReleasePopup = function() {
            this.OnClose(), (this.m_popup = null);
          }),
          (e.prototype.OnBeforeUnload = function() {}),
          (e.prototype.OnFocus = function() {}),
          (e.prototype.OnBlur = function() {}),
          Object(o.c)([i.x], e.prototype, "m_bFocused", void 0),
          Object(o.c)([c.a], e.prototype, "OnMessage", null),
          Object(o.c)([c.a], e.prototype, "OnResizeEvent", null),
          Object(o.c)([c.a], e.prototype, "OnBeforeUnloadEvent", null),
          Object(o.c)([c.a], e.prototype, "OnUnload", null),
          Object(o.c)([c.a], e.prototype, "OnFocusInternal", null),
          Object(o.c)([c.a], e.prototype, "OnBlurInternal", null),
          e
        );
      })(),
      d = (function(e) {
        function t(t, n, r, o) {
          var i = e.call(this, t, r) || this;
          return i.SetSavedDimensionsKey(n), (i.m_bExpires = o), i;
        }
        return (
          Object(o.d)(t, e),
          (t.prototype.BIsInOverlay = function() {
            return (
              this.browser_info &&
              this.browser_info != { m_unPID: 0, m_nBrowserID: -1 }
            );
          }),
          (t.prototype.SetSavedDimensionsKey = function(e) {
            this.m_strSavedDimensionsKey = e;
          }),
          (t.prototype.UpdateParamsBeforeShow = function(e) {
            return (
              !this.m_strSavedDimensionsKey ||
              e.bIgnoreSavedDimensions ||
              e.strRestoreDetails
                ? e.strRestoreDetails &&
                  ((this.m_strInitialSavedDimensionsKey = this.GetSavedDimensionsKey()),
                  v.SetRestoreDetails(
                    this.m_strInitialSavedDimensionsKey,
                    e.strRestoreDetails,
                    this.m_bExpires
                  ))
                : ((this.m_strInitialSavedDimensionsKey = this.GetSavedDimensionsKey()),
                  (e.strRestoreDetails = v.GetRestoreDetails(
                    this.m_strInitialSavedDimensionsKey
                  ))),
              e
            );
          }),
          (t.prototype.OnLoad = function() {
            var e = this;
            this.GetWindowRestoreDetails().then(function(t) {
              (e.m_strInitialRestoreDetails = t), e.OnResizeComplete(t);
            });
          }),
          (t.prototype.OnResize = function() {
            this.QueryAndStoreWindowPosition();
          }),
          (t.prototype.OnResizeComplete = function(e) {}),
          (t.prototype.QueryAndStoreWindowPosition = function() {
            var e = this;
            if (this.m_strInitialRestoreDetails) {
              var t = this.GetSavedDimensionsKey();
              this.m_popup.setTimeout(function() {
                e.GetWindowRestoreDetails().then(function(n) {
                  var r =
                    e.m_strInitialRestoreDetails == n &&
                    t == e.m_strInitialSavedDimensionsKey;
                  e.m_popup &&
                    e.m_strSavedDimensionsKey &&
                    n &&
                    !r &&
                    (v.SetRestoreDetails(t, n, e.m_bExpires),
                    (e.m_rgParams.strRestoreDetails = n),
                    (e.m_strInitialSavedDimensionsKey = t),
                    e.OnResizeComplete(n));
                });
              }, 30);
            }
          }),
          (t.prototype.OnBeforeUnload = function() {
            this.QueryAndStoreWindowPosition(),
              e.prototype.OnBeforeUnload.call(this);
          }),
          (t.prototype.OnClose = function() {}),
          (t.prototype.SaveWindowPosition = function(e) {
            v.SetRestoreDetails(this.GetSavedDimensionsKey(), e, !1),
              (this.m_rgParams.strRestoreDetails = e);
          }),
          Object(o.c)([c.a], t.prototype, "QueryAndStoreWindowPosition", null),
          t
        );
      })(_),
      f = (function() {
        function e() {
          var e = this;
          (this.m_bShuttingDown = !1),
            (this.m_mapPopups = new Map()),
            (this.m_rgShutdownCallbacks = []),
            (this.m_rgPopupCreatedCallbacks = []),
            (this.m_unCurrentAccountID = 0),
            (this.m_mapRestoreDetails = new Map()),
            (this.m_bSaveRequired = !1),
            Object({
              NODE_ENV: "production",
              STEAM_BUILD: "buildbot",
              VALVE_BUILD: "false"
            }).MOBILE_BUILD ||
              window.addEventListener("beforeunload", function(t) {
                e.m_bShuttingDown = !0;
                for (
                  var n = 0, r = e.m_rgShutdownCallbacks;
                  n < r.length;
                  n++
                ) {
                  (0, r[n])();
                }
                var o = [];
                e.m_mapPopups.forEach(function(e) {
                  e.BIsValid() && !e.BIsClosed() && o.push(e);
                });
                for (var i = 0, a = o; i < a.length; i++) {
                  a[i].Close();
                }
                e.m_bSaveRequired && e.SaveSavedDimensionStore(),
                  e.m_mapPopups.clear();
              });
        }
        return (
          (e.prototype.SetCurrentLoggedInAccountID = function(e) {
            (this.m_unCurrentAccountID = e),
              e
                ? this.LoadSavedDimensionStore()
                : this.ClearSavedDimensionStore();
          }),
          (e.prototype.AddShutdownCallback = function(e) {
            this.m_rgShutdownCallbacks.push(e);
          }),
          (e.prototype.AddPopupCreatedCallback = function(e) {
            this.m_rgPopupCreatedCallbacks.push(e);
          }),
          (e.prototype.AddTrackedPopup = function(e) {
            this.m_mapPopups.set(e.GetName(), e);
            for (
              var t = 0, n = this.m_rgPopupCreatedCallbacks;
              t < n.length;
              t++
            ) {
              (0, n[t])(e);
            }
          }),
          (e.prototype.RemoveTrackedPopup = function(e) {
            this.m_mapPopups.delete(e.GetName());
          }),
          (e.prototype.GetExistingPopup = function(e) {
            return this.m_mapPopups.get(e);
          }),
          (e.prototype.GetPopups = function() {
            return this.m_mapPopups.values();
          }),
          (e.prototype.ClosePopupsOwnedByBrowser = function(e) {
            this.m_mapPopups.forEach(function(t) {
              t.browser_info &&
                t.browser_info.m_nBrowserID == e.m_nBrowserID &&
                t.browser_info.m_unPID == e.m_unPID &&
                t.Close();
            });
          }),
          (e.CreatePopup = function(e, t) {
            var n = t.dimensions || {},
              r = n.width || 300,
              o = n.height || 300,
              i = t.title,
              a = "width=" + r + ",height=" + o;
            void 0 !== n.left && (a += ",left=" + n.left),
              void 0 !== n.top && (a += ",top=" + n.top),
              (a += ",resizeable,status=0,toolbar=0,menubar=0,location=0");
            var s = "about:blank",
              u = [];
            u.push("createflags=" + t.eCreationFlags),
              t.minWidth && u.push("minwidth=" + t.minWidth),
              t.minHeight && u.push("minheight=" + t.minHeight),
              t.target_browser &&
                (u.push("pid=" + t.target_browser.m_unPID),
                u.push("browser=" + t.target_browser.m_nBrowserID),
                u.push("browserType=" + t.target_browser.m_eBrowserType),
                t.availscreenwidth &&
                  t.availscreenheight &&
                  (u.push("screenavailwidth=" + t.availscreenwidth),
                  u.push("screenavailheight=" + t.availscreenheight))),
              t.strVROverlayKey && u.push("vrOverlayKey=" + t.strVROverlayKey),
              t.strRestoreDetails &&
                u.push("restoredetails=" + t.strRestoreDetails),
              u && (s += "?" + u.join("&"));
            var c = (t.owner_window || window).open(s, e, a, !0);
            if (!c)
              return (
                console.log(
                  "Failed to create popup.. browser popup blocker enabled?"
                ),
                {}
              );
            var l = "";
            t.html_class && (l = 'class="' + t.html_class + '"');
            var p = "";
            t.body_class && (p = 'class="' + t.body_class + '"');
            var m =
              "<!DOCTYPE html><html " +
              l +
              "><head><title></title></head><body " +
              p +
              '><div id="popup_target"></div></body></html>';
            c.document.write(m), (c.document.title = i);
            for (
              var h = c.document.getElementsByTagName("head")[0],
                _ = document.getElementsByTagName("link"),
                d = 0;
              d < _.length;
              d++
            ) {
              var f = _[d];
              if ("stylesheet" == f.rel) {
                for (
                  var v = c.document.createElement("link"), E = 0;
                  E < f.attributes.length;
                  E++
                ) {
                  var b = f.attributes.item(E);
                  v.setAttribute(b.name, b.value);
                }
                h.appendChild(v);
              }
            }
            return {
              popup: c,
              element: c.document.getElementById("popup_target")
            };
          }),
          (e.prototype.BShuttingDown = function() {
            return this.m_bShuttingDown;
          }),
          (e.prototype.GetLocalStorageKey = function() {
            return "PopupSavedDimensions_" + this.m_unCurrentAccountID;
          }),
          (e.prototype.LoadSavedDimensionStore = function() {
            if (this.m_unCurrentAccountID) {
              var e = this.GetLocalStorageKey();
              this.m_mapRestoreDetails = void 0;
              var t = window.localStorage.getItem(e);
              if (t)
                try {
                  var n = JSON.parse(t);
                  this.m_mapRestoreDetails = new Map(n);
                } catch (e) {}
              this.m_mapRestoreDetails ||
                (this.m_mapRestoreDetails = new Map());
            }
          }),
          (e.prototype.SaveSavedDimensionStore = function() {
            if (this.m_unCurrentAccountID && this.m_bSaveRequired) {
              var e = this.GetLocalStorageKey(),
                t = JSON.stringify(Array.from(this.m_mapRestoreDetails));
              window.localStorage.setItem(e, t), (this.m_bSaveRequired = !1);
            }
          }),
          (e.prototype.DebouncedSaveSavedDimensionStore = function() {
            this.SaveSavedDimensionStore();
          }),
          (e.prototype.ClearSavedDimensionStore = function() {
            this.m_mapRestoreDetails.clear(), (this.m_bSaveRequired = !1);
          }),
          (e.prototype.GetRestoreDetails = function(e) {
            if (!this.m_mapRestoreDetails.has(e)) return "";
            var t = this.m_mapRestoreDetails.get(e);
            return (
              (t.last_used = Date.now()),
              (this.m_bSaveRequired = !0),
              t.strRestoreDetails
            );
          }),
          (e.prototype.SetRestoreDetails = function(e, t, n) {
            if (e) {
              if (t) {
                if (this.m_mapRestoreDetails.size > 50) {
                  for (
                    var r = null,
                      o = Date.now(),
                      i = 0,
                      a = Array.from(this.m_mapRestoreDetails.keys());
                    i < a.length;
                    i++
                  ) {
                    var s = a[i],
                      u = this.m_mapRestoreDetails.get(s);
                    u.last_used < o &&
                      u.bExpires &&
                      ((o = u.last_used), (r = s));
                  }
                  r && this.m_mapRestoreDetails.delete(r);
                }
                var c = {
                  strRestoreDetails: t,
                  last_used: Date.now(),
                  bExpires: n
                };
                this.m_mapRestoreDetails.set(e, c);
              } else this.m_mapRestoreDetails.delete(e);
              (this.m_bSaveRequired = !0),
                this.m_bShuttingDown
                  ? this.SaveSavedDimensionStore()
                  : this.DebouncedSaveSavedDimensionStore();
            }
          }),
          Object(o.c)(
            [c.a, Object(u.a)(100)],
            e.prototype,
            "DebouncedSaveSavedDimensionStore",
            null
          ),
          e
        );
      })(),
      v = new f();
  },
  UqDm: function(e, t, n) {
    "use strict";
    n.d(t, "g", function() {
      return r;
    }),
      n.d(t, "f", function() {
        return o;
      }),
      n.d(t, "c", function() {
        return i;
      }),
      n.d(t, "d", function() {
        return a;
      }),
      n.d(t, "b", function() {
        return s;
      }),
      n.d(t, "a", function() {
        return u;
      }),
      n.d(t, "h", function() {
        return c;
      }),
      n.d(t, "i", function() {
        return l;
      }),
      n.d(t, "e", function() {
        return p;
      });
    n("XaMz");
    function r(e) {
      for (var t = e.length; 0 !== t; ) {
        var n = Math.floor(Math.random() * t),
          r = e[(t -= 1)];
        (e[t] = e[n]), (e[n] = r);
      }
    }
    function o(e, t, n) {
      t < 0 ||
        n < 0 ||
        (n >= e.length && (e[n] = void 0), e.splice(n, 0, e.splice(t, 1)[0]));
    }
    function i(e, t) {
      return a(e, function(e) {
        return t == e;
      });
    }
    function a(e, t) {
      var n = e.findIndex(t);
      return n >= 0 && (e.splice(n, 1), !0);
    }
    function s(e, t) {
      return e.reduce(function(e, n, r, o) {
        return e + (t(n, r, o) ? 1 : 0);
      }, 0);
    }
    function u(e, t) {
      return e.filter(function(e) {
        return t !== e;
      });
    }
    function c(e, t, n) {
      for (var r = 0, o = e.length - 1; r <= o; ) {
        var i = Math.floor((r + o) / 2),
          a = n(e[i], t);
        if (a < 0) r = i + 1;
        else if (a > 0) o = i - 1;
        else {
          if (o == i) return i;
          if (i == r) return o > i && n(t, e[i + 1]) < 0 ? i : i + 1;
          r = i;
        }
      }
      return o;
    }
    function l(e, t, n) {
      var r = c(e, t, n);
      e.splice(r + 1, 0, t);
    }
    function p(e, t) {
      if (t)
        for (var n = e.length - 1; n >= 0; --n) {
          var r = e[n];
          if (t(r, n, e)) return r;
        }
    }
  },
  WpBz: function(e, t, n) {
    "use strict";
    function r(e) {
      return function(t, n, r) {
        var o = r.value;
        r.value = function() {
          for (var t = this, r = [], i = 0; i < arguments.length; i++)
            r[i] = arguments[i];
          var a = this[n + "_DebounceProperties"];
          void 0 === a &&
            (a = this[n + "_DebounceProperties"] = {
              hTimer: void 0,
              nPending: 0
            }),
            void 0 === a.hTimer
              ? (o.apply(this, r),
                (a.hTimer = window.setInterval(function() {
                  a.nPending > 0
                    ? (o.apply(t, r), (a.nPending = 0))
                    : (window.clearInterval(a.hTimer), (a.hTimer = void 0));
                }, e)))
              : (a.nPending += 1);
        };
      };
    }
    n.d(t, "a", function() {
      return r;
    });
  },
  XaMz: function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return o;
    });
    var r = n("mrSG");
    function o(e, t) {
      for (var n = [], o = 2; o < arguments.length; o++)
        n[o - 2] = arguments[o];
      console.assert
        ? 0 == n.length
          ? console.assert(!!e, t)
          : console.assert.apply(console, Object(r.g)([!!e, t], n))
        : e || console.warn.apply(console, Object(r.g)([t], n));
    }
  },
  Y3TG: function(e, t, n) {
    "use strict";
    n("vDqi"), n("JtU4");
  },
  fGPn: function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return i;
    }),
      n.d(t, "b", function() {
        return s;
      });
    var r = n("tkkQ"),
      o = { success: !0, result: 1 },
      i = (function() {
        function e() {
          (this.m_connection = new a()),
            (this.m_bAllowAccountMismatch = !1),
            (this.m_mapCacheSubscribedApp = new Map());
        }
        return (
          (e.prototype.FailureResult = function(e) {
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
          (e.prototype.SetAllowAccountMismatch = function(e) {
            this.m_bAllowAccountMismatch = e;
          }),
          (e.prototype.BClientConnected = function() {
            var e = this;
            return this.m_connection.Connect().then(
              function() {
                return o;
              },
              function() {
                return e.FailureResult();
              }
            );
          }),
          (e.prototype.BClientSupportsMessage = function(e) {
            return (
              !(
                !this.m_connection.connected_to_client ||
                !this.m_connection.ready
              ) &&
              -1 !== this.m_connection.ClientInfo.rgSupportedMessages.indexOf(e)
            );
          }),
          (e.prototype.OpenFriendChatDialog = function(e) {
            var t = { message: "ShowFriendChatDialog", steamid: e };
            return this.GenericEResultCall(t);
          }),
          (e.prototype.OpenChatRoomGroupDialog = function(e, t) {
            var n = { message: "ShowChatRoomGroupDialog", chat_group_id: e };
            return t && (n.chat_room_id = t), this.GenericEResultCall(n);
          }),
          (e.prototype.ShowChatRoomGroupInvite = function(e) {
            var t = { message: "ShowChatRoomGroupInvite", invite_code: e };
            return this.GenericEResultCall(t);
          }),
          (e.prototype.OpenJoinGameDialog = function(e) {
            var t = { message: "ShowJoinGameDialog", friend_id: e };
            return this.GenericEResultCall(t);
          }),
          (e.prototype.BIsSubscribedApp = function(e) {
            var t = this;
            if (this.m_mapCacheSubscribedApp.has(e))
              return Promise.resolve(this.m_mapCacheSubscribedApp.get(e));
            var n = { message: "IsSubscribedApp", appid: e };
            return this.GenericEResultCall(n).then(function(n) {
              if (!n.connect_failed) {
                var r = 1 == n.result;
                return t.m_mapCacheSubscribedApp.set(e, r), r;
              }
            });
          }),
          (e.prototype.ViewGameInfoForSteamID = function(e) {
            var t = { message: "ViewGameInfoForSteamID", steamid: e };
            return this.GenericEResultCall(t);
          }),
          (e.prototype.BClientAccountMatches = function() {
            return (
              !r.d.logged_in ||
              r.d.accountid == this.m_connection.ClientInfo.unAccountID
            );
          }),
          (e.prototype.GenericEResultCall = function(e) {
            var t = this;
            return this.m_connection
              .Connect()
              .then(function() {
                return t.m_bAllowAccountMismatch || t.BClientAccountMatches()
                  ? t.m_connection.SendMsgAndAwaitResponse(e).then(function(e) {
                      return 1 === e.success ? o : t.FailureResult(e.success);
                    })
                  : { success: !1, result: 19, account_mismatch: !0 };
              })
              .catch(function() {
                return t.FailureResult();
              });
          }),
          e
        );
      })(),
      a = (function() {
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
              rgSupportedMessages: []
            });
        }
        return (
          Object.defineProperty(e.prototype, "ClientInfo", {
            get: function() {
              return this.m_ClientInfo;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "ready", {
            get: function() {
              return this.m_bReady;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "browser_supported", {
            get: function() {
              return !this.m_bSecurityException;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "connected_to_client", {
            get: function() {
              return (
                this.m_socket && this.m_socket.readyState == WebSocket.OPEN
              );
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.SendMsgAndAwaitResponse = function(e) {
            var t = this;
            return new Promise(function(n, r) {
              var o = t.m_iCallSeq++;
              t.BSendMsg(e, o)
                ? t.m_mapWaitingCallbacks.set(o, {
                    iSeq: o,
                    fnCallback: n,
                    fnError: r
                  })
                : r();
            });
          }),
          (e.prototype.BSendMsg = function(e, t) {
            if (!this.m_socket || this.m_socket.readyState != WebSocket.OPEN)
              return !1;
            var n = Object.assign({}, e, {
              universe: r.a.EUNIVERSE,
              accountid: r.d.accountid
            });
            void 0 !== t && (n.sequenceid = t);
            try {
              return this.m_socket.send(JSON.stringify(n)), !0;
            } catch (e) {
              return !1;
            }
          }),
          (e.prototype.OnSocketMessage = function(e) {
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
          (e.prototype.Connect = function() {
            var e = this;
            if (this.m_bReady && this.m_socket.readyState == WebSocket.OPEN)
              return Promise.resolve();
            if (this.m_promiseConnect) return this.m_promiseConnect;
            var t = new Promise(function(t, n) {
              try {
                e.m_socket = new WebSocket(
                  "ws://127.0.0.1:27060/clientsocket/"
                );
              } catch (t) {
                return (e.m_bSecurityException = !0), void n(t);
              }
              (e.m_socket.onerror = function(e) {
                n();
              }),
                (e.m_socket.onmessage = e.OnSocketMessage.bind(e)),
                (e.m_socket.onopen = function(r) {
                  e.SendMsgAndAwaitResponse({ message: "GetClientInfo" })
                    .then(function(r) {
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
                .then(function() {
                  (e.m_bReady = !0), (e.m_promiseConnect = void 0);
                })
                .catch(function() {
                  (e.m_bClientConnectionFailed = !0),
                    (e.m_promiseConnect = void 0);
                }),
              this.m_promiseConnect
            );
          }),
          e
        );
      })(),
      s = new i();
    window.ClientConnectionAPI = s;
  },
  hEDq: function(e, t, n) {
    "use strict";
    n.d(t, "k", function() {
      return a;
    }),
      n.d(t, "b", function() {
        return s;
      }),
      n.d(t, "d", function() {
        return u;
      }),
      n.d(t, "f", function() {
        return c;
      }),
      n.d(t, "a", function() {
        return l;
      }),
      n.d(t, "g", function() {
        return p;
      }),
      n.d(t, "i", function() {
        return m;
      }),
      n.d(t, "c", function() {
        return _;
      }),
      n.d(t, "e", function() {
        return h;
      }),
      n.d(t, "h", function() {
        return d;
      }),
      n.d(t, "j", function() {
        return f;
      });
    var r = n("mrSG"),
      o = n("0N1H");
    n.d(t, "l", function() {
      return o.c;
    });
    var i = n("2vnA"),
      a = (function() {
        function e() {
          (this.enabled = !1),
            (this.locked = !1),
            (this.features = 0),
            (this.allowallapps = !1),
            (this.baselist = void 0),
            (this.customlist = void 0);
        }
        return (
          Object(r.c)([i.x], e.prototype, "enabled", void 0),
          Object(r.c)([i.x], e.prototype, "locked", void 0),
          Object(r.c)([i.x], e.prototype, "features", void 0),
          Object(r.c)([i.x], e.prototype, "allowallapps", void 0),
          Object(r.c)([i.x], e.prototype, "baselist", void 0),
          Object(r.c)([i.x], e.prototype, "customlist", void 0),
          e
        );
      })(),
      s = (function() {
        return function() {
          (this.broadcastid = "0"),
            (this.nViewers = 0),
            (this.nRequests = 0),
            (this.bIsBroadcasting = !1),
            (this.bIsRecordingDesktop = !1),
            (this.bBroadcastCapable = !1);
        };
      })();
    function u() {
      return {
        bNotifications_ShowIngame: !0,
        bNotifications_ShowOnline: !1,
        bNotifications_ShowMessage: !0,
        bNotifications_EventsAndAnnouncements: !0,
        bSounds_PlayIngame: !1,
        bSounds_PlayOnline: !1,
        bSounds_PlayMessage: !0,
        bSounds_EventsAndAnnouncements: !1,
        bAlwaysNewChatWindow: !1,
        bForceAlphabeticFriendSorting: !1,
        nChatFlashMode: 0,
        bRememberOpenChats: !0,
        bCompactQuickAccess: !1,
        bCompactFriendsList: !1,
        bNotifications_ShowChatRoomNotification: !0,
        bSounds_PlayChatRoomNotification: !0,
        bHideOfflineFriendsInTagGroups: !1,
        bHideCategorizedFriends: !1,
        bCategorizeInGameFriendsByGame: !0,
        nChatFontSize: 2,
        b24HourClock: !1,
        bDoNotDisturbMode: !1,
        bDisableEmbedInlining: !1,
        bSignIntoFriends: !0,
        bDisableSpellcheck: !1,
        bDisableRoomEffects: !1,
        featuresEnabled: {}
      };
    }
    var c;
    function l(e) {
      return (
        e == c.EBrowserType_OpenVROverlay ||
        e == c.EBrowserType_OpenVROverlay_Dashboard
      );
    }
    !(function(e) {
      (e[(e.EBrowserType_OffScreen = 0)] = "EBrowserType_OffScreen"),
        (e[(e.EBrowserType_OpenVROverlay = 1)] = "EBrowserType_OpenVROverlay"),
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
    })(c || (c = {}));
    var p, m;
    !(function(e) {
      (e[(e.k_EClientUINotificationGroupChatMessage = 1)] =
        "k_EClientUINotificationGroupChatMessage"),
        (e[(e.k_EClientUINotificationFriendChatMessage = 2)] =
          "k_EClientUINotificationFriendChatMessage"),
        (e[(e.k_EClientUINotificationFriendPersonaState = 3)] =
          "k_EClientUINotificationFriendPersonaState");
    })(p || (p = {})),
      (function(e) {
        (e[(e.k_EComputerActiveStateInvalid = 0)] =
          "k_EComputerActiveStateInvalid"),
          (e[(e.k_EComputerActiveStateActive = 1)] =
            "k_EComputerActiveStateActive"),
          (e[(e.k_EComputerActiveStateIdle = 2)] =
            "k_EComputerActiveStateIdle");
      })(m || (m = {}));
    var h,
      _ = (function() {
        return function() {};
      })();
    !(function(e) {
      (e[(e.k_EPending = 0)] = "k_EPending"),
        (e[(e.k_EAccepted = 1)] = "k_EAccepted"),
        (e[(e.k_ERejected = 2)] = "k_ERejected");
    })(h || (h = {}));
    var d, f;
    !(function(e) {
      (e[(e.k_EClientUsedInputTypeKeyboard = 0)] =
        "k_EClientUsedInputTypeKeyboard"),
        (e[(e.k_EClientUsedInputTypeMouse = 1)] =
          "k_EClientUsedInputTypeMouse"),
        (e[(e.k_EClientUsedInputTypeController = 2)] =
          "k_EClientUsedInputTypeController"),
        (e[(e.k_EClientUsedInputTypeMax = 3)] = "k_EClientUsedInputTypeMax");
    })(d || (d = {})),
      (function(e) {
        (e[(e.k_ERemoteClientLaunchOK = 1)] = "k_ERemoteClientLaunchOK"),
          (e[(e.k_ERemoteClientLaunchFail = 2)] = "k_ERemoteClientLaunchFail"),
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
          (e[(e.k_ERemoteClientLaunchBusy = 23)] = "k_ERemoteClientLaunchBusy"),
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
      })(f || (f = {}));
    var v, E, b, S;
    !(function(e) {
      (e[(e.k_ESteamRealmUnknown = 0)] = "k_ESteamRealmUnknown"),
        (e[(e.k_ESteamRealmGlobal = 1)] = "k_ESteamRealmGlobal"),
        (e[(e.k_ESteamRealmChina = 2)] = "k_ESteamRealmChina");
    })(v || (v = {})),
      (function(e) {
        (e[(e.Unknown = 0)] = "Unknown"),
          (e[(e.Wired = 1)] = "Wired"),
          (e[(e.Wireless = 2)] = "Wireless");
      })(E || (E = {})),
      (function(e) {
        (e[(e.NotPresent = 0)] = "NotPresent"),
          (e[(e.Failed = 1)] = "Failed"),
          (e[(e.Disconnected = 2)] = "Disconnected"),
          (e[(e.Disconnecting = 3)] = "Disconnecting"),
          (e[(e.Connecting = 4)] = "Connecting"),
          (e[(e.Connected = 5)] = "Connected"),
          (e[(e.Retrying = 6)] = "Retrying");
      })(b || (b = {})),
      (function(e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.StaticWep = 1)] = "StaticWep"),
          (e[(e.DynamicWep = 2)] = "DynamicWep"),
          (e[(e.Wpa = 4)] = "Wpa"),
          (e[(e.WpaEnterprise = 8)] = "WpaEnterprise"),
          (e[(e.Wpa2 = 16)] = "Wpa2"),
          (e[(e.Wpa2Enterprise = 32)] = "Wpa2Enterprise"),
          (e[(e.Unsupported = 32768)] = "Unsupported");
      })(S || (S = {}));
  },
  mrSG: function(e, t, n) {
    "use strict";
    n.d(t, "d", function() {
      return o;
    }),
      n.d(t, "a", function() {
        return i;
      }),
      n.d(t, "f", function() {
        return a;
      }),
      n.d(t, "c", function() {
        return s;
      }),
      n.d(t, "b", function() {
        return u;
      }),
      n.d(t, "e", function() {
        return c;
      }),
      n.d(t, "g", function() {
        return l;
      });
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
    var r = function(e, t) {
      return (r =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(e, t) {
            e.__proto__ = t;
          }) ||
        function(e, t) {
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
    var i = function() {
      return (i =
        Object.assign ||
        function(e) {
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
    function s(e, t, n, r) {
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
        for (var s = e.length - 1; s >= 0; s--)
          (o = e[s]) &&
            (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
      return i > 3 && a && Object.defineProperty(t, n, a), a;
    }
    function u(e, t, n, r) {
      return new (n || (n = Promise))(function(o, i) {
        function a(e) {
          try {
            u(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function s(e) {
          try {
            u(r.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function u(e) {
          e.done
            ? o(e.value)
            : new n(function(t) {
                t(e.value);
              }).then(a, s);
        }
        u((r = r.apply(e, t || [])).next());
      });
    }
    function c(e, t) {
      var n,
        r,
        o,
        i,
        a = {
          label: 0,
          sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1];
          },
          trys: [],
          ops: []
        };
      return (
        (i = { next: s(0), throw: s(1), return: s(2) }),
        "function" == typeof Symbol &&
          (i[Symbol.iterator] = function() {
            return this;
          }),
        i
      );
      function s(i) {
        return function(s) {
          return (function(i) {
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
                      !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                      (6 === i[0] || 2 === i[0])
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
          })([i, s]);
        };
      }
    }
    function l() {
      for (var e = 0, t = 0, n = arguments.length; t < n; t++)
        e += arguments[t].length;
      var r = Array(e),
        o = 0;
      for (t = 0; t < n; t++)
        for (var i = arguments[t], a = 0, s = i.length; a < s; a++, o++)
          r[o] = i[a];
      return r;
    }
  },
  oh5H: function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
      return c;
    }),
      n.d(t, "e", function() {
        return l;
      }),
      n.d(t, "d", function() {
        return p;
      }),
      n.d(t, "f", function() {
        return m;
      }),
      n.d(t, "a", function() {
        return h;
      }),
      n.d(t, "b", function() {
        return _;
      });
    var r = n("mrSG"),
      o = n("q1tI"),
      i = (n("Gp1o"), n("XaMz"), n("ujHl")),
      a = n("0N1H"),
      s = n("1n9R"),
      u = (function() {
        function e() {
          (this.m_mapTokens = new Map()),
            (this.m_mapFallbackTokens = new Map());
        }
        return (
          (e.prototype.InitFromObjects = function(e, t, n, r, o) {
            var i = this;
            o || this.m_mapTokens.clear(),
              n &&
                Object.keys(n).forEach(function(e, t) {
                  i.m_mapTokens.set(e, n[e]);
                }),
              Object.keys(e).forEach(function(t, n) {
                i.m_mapTokens.set(t, e[t]);
              }),
              t &&
                Object.keys(t).forEach(function(e, n) {
                  i.m_mapTokens.has(e) || i.m_mapTokens.set(e, t[e]),
                    i.m_mapFallbackTokens.set(e, t[e]);
                }),
              r &&
                Object.keys(r).forEach(function(e, t) {
                  i.m_mapTokens.has(e) || i.m_mapTokens.set(e, r[e]),
                    i.m_mapFallbackTokens.has(e) ||
                      i.m_mapFallbackTokens.set(e, r[e]);
                });
          }),
          (e.prototype.InitDirect = function(e, t) {
            var n = this;
            this.m_mapTokens.clear(),
              this.m_mapFallbackTokens.clear(),
              Object.keys(e).forEach(function(t, r) {
                n.m_mapTokens.set(t, e[t]);
              }),
              t &&
                Object.keys(t).forEach(function(e, r) {
                  n.m_mapTokens.has(e) || n.m_mapTokens.set(e, t[e]),
                    n.m_mapFallbackTokens.set(e, t[e]);
                });
          }),
          (e.prototype.GetPreferredLocales = function() {
            return this.m_rgLocalesToUse
              ? this.m_rgLocalesToUse
              : navigator && navigator.languages
              ? navigator.languages
              : ["en-US"];
          }),
          (e.prototype.GetELanguageFallbackOrder = function() {
            var e = new Array();
            return (
              e.push(Object(a.c)(s.b.LANGUAGE)),
              (s.b.SUPPORTED_LANGUAGES || []).forEach(function(t) {
                t.value != s.b.LANGUAGE && e.push(Object(a.c)(t.value));
              }),
              e
            );
          }),
          (e.prototype.SetPreferredLocales = function(e) {
            this.m_rgLocalesToUse = e;
          }),
          (e.prototype.LocalizeString = function(e) {
            if (!e || 0 == e.length || "#" != e.charAt(0)) return "";
            var t = this.m_mapTokens.get(e.substring(1));
            return void 0 === t ? "" : t;
          }),
          (e.prototype.LocalizeStringFromFallback = function(e) {
            if (!e || 0 == e.length || "#" != e.charAt(0)) return "";
            var t = this.m_mapFallbackTokens.get(e.substring(1));
            return void 0 === t ? "" : t;
          }),
          e
        );
      })();
    function c(e) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      var r = _.LocalizeString(e);
      return r
        ? (t.length > 0 &&
            (r = r.replace(/%(\d+)\$s/g, function(e, n) {
              if (n <= t.length && n >= 1) {
                var r = t[n - 1];
                return String(null == r ? "" : r);
              }
              return e;
            })),
          r)
        : e;
    }
    function l(e) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      var i = _.LocalizeString(e);
      if (!i) return e;
      for (var a, s = [], u = /(.*?)%(\d+)\$s/g, c = 0; (a = u.exec(i)); ) {
        (c += a[0].length), s.push(a[1]);
        var l = parseInt(a[2]);
        l >= 1 && l <= t.length && s.push(t[l - 1]);
      }
      return (
        s.push(i.substr(c)),
        o.createElement.apply(o, Object(r.g)([o.Fragment, null], s))
      );
    }
    function p(e, t) {
      for (var n = [], o = 2; o < arguments.length; o++)
        n[o - 2] = arguments[o];
      return 1 === t || "1" === t
        ? c.apply(void 0, Object(r.g)([e, t], n))
        : c.apply(void 0, Object(r.g)([e + "_Plural", t], n));
    }
    function m(e, t) {
      void 0 === t && (t = !1);
      var n = t ? "#TimeInterval_" : "#TimeSince_";
      return e >= 2 * i.b.PerYear
        ? c(n + "XYears", Math.floor(e / i.b.PerYear))
        : e >= i.b.PerYear
        ? (e -= i.b.PerYear) >= 2 * i.b.PerMonth
          ? c(n + "1YearXMonths", Math.floor(e / i.b.PerMonth))
          : c(n + "1Year")
        : e >= 2 * i.b.PerMonth
        ? c(n + "XMonths", Math.floor(e / i.b.PerMonth))
        : e >= 2 * i.b.PerWeek
        ? c(n + "XWeeks", Math.floor(e / i.b.PerWeek))
        : e >= i.b.PerWeek
        ? c(n + "1Week", Math.floor(e / i.b.PerWeek))
        : e >= 2 * i.b.PerDay
        ? c(n + "XDays", Math.floor(e / i.b.PerDay))
        : e >= i.b.PerDay
        ? (e -= i.b.PerDay) >= 2 * i.b.PerHour
          ? c(n + "1DayXHours", Math.floor(e / i.b.PerHour))
          : c(n + "1Day")
        : e >= 2 * i.b.PerHour
        ? c(n + "XHours", Math.floor(e / i.b.PerHour))
        : e >= i.b.PerHour
        ? (e -= i.b.PerHour) >= 2 * i.b.PerMinute
          ? c(n + "1HourXMinutes", Math.floor(e / i.b.PerMinute))
          : c(n + "1Hour")
        : e >= 2 * i.b.PerMinute
        ? c(n + "XMinutes", Math.floor(e / i.b.PerMinute))
        : e >= i.b.PerMinute
        ? c(n + "1Minute")
        : c(n + "LessThanAMinute");
    }
    new Map(), new Map();
    new Map(), new Map(), new Map(), new Map();
    var h = {
        english: "en",
        german: "de",
        french: "fr",
        italian: "it",
        korean: "ko",
        latam: "es-419",
        spanish: "es",
        schinese: "zh-cn",
        tchinese: "zh-tw",
        russian: "ru",
        thai: "th",
        japanese: "ja",
        brazilian: "pt-br",
        portuguese: "pt",
        polish: "pl",
        danish: "da",
        dutch: "nl",
        finnish: "fi",
        norwegian: "no",
        swedish: "sv",
        hungarian: "hu",
        czech: "cs",
        romanian: "ro",
        turkish: "tr",
        arabic: "ar",
        bulgarian: "bg",
        greek: "el",
        ukrainian: "uk",
        vietnamese: "vn"
      },
      _ = new u();
    window.LocalizationManager = _;
  },
  "qM/t": function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("q1tI"),
      o = n("i8i4"),
      i = n("tkkQ"),
      a = n("fGPn"),
      s = (n("Y3TG"), n("oh5H")),
      u = n("XaMz"),
      c = n("mrSG"),
      l = n("2vnA"),
      p = n("okNM"),
      m = n("J0bI"),
      h = n("s+DT");
    var _ = n("1VtQ"),
      d = n("K4CH"),
      f = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(c.d)(t, e),
          (t.prototype.BIsExpired = function() {
            return v.sm_rtTimeCur >= this.m_rtTimeExpires;
          }),
          (t.prototype.InitFromPHPInviteLinkInfo = function(e) {
            this.m_ulChatID = e.chat_id;
            var t = new h.a(e.steamid_sender);
            t.BIsIndividualAccount() &&
              (this.m_unAccountIDInviter = t.GetAccountID()),
              (this.m_rtTimeExpires = e.time_expires),
              (this.m_bIsBanned = e.banned),
              (this.m_rtKickExpires = e.time_kick_expire),
              e.group_summary &&
                (this.m_ulChatRoomGroupID = e.group_summary.chat_group_id),
              (this.m_bValid = !0),
              (this.m_bReady = !0);
          }),
          Object(c.c)([l.g], t.prototype, "InitFromPHPInviteLinkInfo", null),
          t
        );
      })(m.b),
      v = (function() {
        function e(e) {
          (this.m_bConnectingToClient = !1),
            (this.m_invite = new f(e.strInviteCode)),
            e.Invite
              ? this.m_invite.InitFromPHPInviteLinkInfo(e.Invite)
              : this.m_invite.InitInvalid(),
            (this.m_htmlPreRendered = e.render),
            this.SendInviteToClient();
        }
        return (
          (e.prototype.BIsInviteValid = function() {
            return this.m_invite.BIsValid() && !this.m_invite.BIsExpired();
          }),
          (e.prototype.GetInvite = function() {
            return this.m_invite;
          }),
          (e.prototype.BIsConnectingToClient = function() {
            return this.m_bConnectingToClient;
          }),
          (e.prototype.GetConnectResults = function() {
            return this.m_connectResult;
          }),
          (e.prototype.GetPreRenderedHTML = function() {
            return this.m_htmlPreRendered;
          }),
          (e.prototype.LaunchWebChat = function() {
            !(function(e) {
              var t = window.open("", "SteamWebChat", "");
              if (t) {
                var n = !1;
                try {
                  n = "about:blank" == t.location.href;
                } catch (e) {
                  !0;
                }
                if (n) {
                  if (e) {
                    var r = function(n) {
                      var o = i.a.COMMUNITY_BASE_URL.replace(
                        /(https?:\/\/[^/]*).*$/,
                        "$1"
                      );
                      n.source == t &&
                        "FriendsUIReady" == n.data &&
                        n.origin == o &&
                        (t.postMessage(e, i.a.COMMUNITY_BASE_URL),
                        window.removeEventListener("message", r));
                    };
                    window.addEventListener("message", r);
                  }
                  t.location.href = i.a.COMMUNITY_BASE_URL + "chat/";
                } else e && t.postMessage(e, i.a.COMMUNITY_BASE_URL);
                t.focus();
              }
            })({
              command: "ShowChatRoomGroupInvite",
              invite_code: this.m_invite.GetInviteCode()
            });
          }),
          (e.prototype.LaunchSteamIgnoreAccount = function() {
            a.b.SetAllowAccountMismatch(!0), this.SendInviteToClient();
          }),
          (e.prototype.ForceLaunchSteamClient = function() {
            window.location.href =
              "steam://friends/ShowChatRoomGroupInvite/" +
              this.m_invite.GetInviteCode();
          }),
          (e.prototype.SendInviteToClient = function() {
            var e = this;
            this.m_invite.BIsValid() &&
              !this.m_invite.BIsExpired() &&
              ((this.m_bConnectingToClient = !0),
              a.b
                .ShowChatRoomGroupInvite(this.m_invite.GetInviteCode())
                .then(function(t) {
                  Object(l.A)(function() {
                    (e.m_bConnectingToClient = !1),
                      (e.m_connectResult = t),
                      console.log(t);
                  });
                }));
          }),
          Object(c.c)([l.x], e.prototype, "m_bConnectingToClient", void 0),
          Object(c.c)([l.x], e.prototype, "m_connectResult", void 0),
          e
        );
      })(),
      E = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(c.d)(t, e),
          (t.prototype.render = function() {
            return r.createElement(
              "div",
              { className: "InviteLandingRoot" },
              this.props.controller.BIsInviteValid()
                ? r.createElement(b, { controller: this.props.controller })
                : r.createElement(S, { controller: this.props.controller })
            );
          }),
          (t = Object(c.c)([p.a], t))
        );
      })(r.Component),
      b = (function(e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.m_bTriedToLaunchSteam = !1), t;
        }
        return (
          Object(c.d)(t, e),
          (t.prototype.LaunchWebChat = function() {
            this.props.controller.LaunchWebChat();
          }),
          (t.prototype.OpenInSteamIgnoreAccount = function() {
            this.props.controller.LaunchSteamIgnoreAccount();
          }),
          (t.prototype.LaunchSteamClient = function() {
            var e = this;
            this.props.controller.ForceLaunchSteamClient(),
              window.setTimeout(function() {
                e.m_bTriedToLaunchSteam = !0;
              }, 1e3);
          }),
          (t.prototype.IsMobileDevice = function() {
            switch (new d.UAParser(navigator.userAgent).getResult().os.name) {
              case "iOS":
              case "Android":
              case "BlackBerry":
                return !0;
            }
            return !1;
          }),
          (t.prototype.render = function() {
            if (this.props.controller.BIsConnectingToClient())
              return r.createElement(
                "div",
                { className: "ChatMessageInvite RequestingInfo NoColumns" },
                r.createElement(
                  "div",
                  { className: "postedExpiredInvite" },
                  Object(s.c)("#bbcode_invite_requesting_info")
                )
              );
            var e = this.props.controller.GetConnectResults(),
              t = this.props.controller.GetInvite(),
              n = (i.a.COMMUNITY_BASE_URL, this.IsMobileDevice()),
              o = "inviteButton inviteButtonJoinChat";
            return (
              t.BIsVoiceChatInvite() && (o += " inviteButtonJoinVoice"),
              e.success
                ? r.createElement(
                    "div",
                    { className: "ChatMessageInvite NoColumns" },
                    r.createElement(
                      "div",
                      { className: "groupName" },
                      Object(s.c)("#InviteLanding_SentToSteam")
                    ),
                    r.createElement(
                      "div",
                      { className: "inviteLabel" },
                      Object(s.e)(
                        "#InviteLanding_SentToSteam_Desc",
                        r.createElement(
                          "a",
                          {
                            href: "javascript:void(0);",
                            onClick: this.LaunchWebChat
                          },
                          Object(s.c)(
                            "#InviteLanding_SentToSteam_Desc_LaunchWebChat"
                          )
                        )
                      )
                    )
                  )
                : e.account_mismatch
                ? r.createElement(
                    y,
                    { render: this.props.controller.GetPreRenderedHTML() },
                    r.createElement(
                      "div",
                      { className: "inviteLabel" },
                      Object(s.c)("#InviteLanding_AccountMismatch")
                    ),
                    r.createElement(
                      "div",
                      { className: "inviteLabel" },
                      r.createElement(
                        "button",
                        {
                          className: o,
                          type: "button",
                          onClick: this.OpenInSteamIgnoreAccount
                        },
                        Object(s.c)("#InviteLanding_OpenInSteam")
                      ),
                      r.createElement(
                        "button",
                        {
                          className: o,
                          type: "button",
                          onClick: this.LaunchWebChat
                        },
                        Object(s.c)("#InviteLanding_OpenInWebChat")
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
                      Object(s.c)("#InviteLanding_SentToSteam")
                    ),
                    r.createElement(
                      "div",
                      { className: "inviteLabel" },
                      Object(s.e)(
                        "#InviteLanding_SentToSteam_Desc",
                        r.createElement(
                          "a",
                          {
                            href: "javascript:void(0);",
                            onClick: this.LaunchWebChat
                          },
                          Object(s.c)(
                            "#InviteLanding_SentToSteam_Desc_LaunchWebChat"
                          )
                        )
                      )
                    )
                  )
                : r.createElement(
                    y,
                    { render: this.props.controller.GetPreRenderedHTML() },
                    r.createElement(
                      "div",
                      { className: "inviteLabel inviteLabelButtons" },
                      !n &&
                        r.createElement(
                          "button",
                          {
                            className: o,
                            type: "button",
                            onClick: this.LaunchSteamClient
                          },
                          Object(s.c)("#InviteLanding_OpenInSteam")
                        ),
                      r.createElement(
                        "button",
                        {
                          className: o,
                          type: "button",
                          onClick: this.LaunchWebChat
                        },
                        Object(s.c)("#InviteLanding_OpenInWebChat")
                      )
                    ),
                    this.m_bTriedToLaunchSteam &&
                      r.createElement(
                        "div",
                        { className: "inviteLabel inviteLabelLaunchPrompt" },
                        Object(s.c)("#InviteLanding_OpenInSteam_Help")
                      )
                  )
            );
          }),
          Object(c.c)([l.x], t.prototype, "m_bTriedToLaunchSteam", void 0),
          Object(c.c)([_.a], t.prototype, "LaunchWebChat", null),
          Object(c.c)([_.a], t.prototype, "OpenInSteamIgnoreAccount", null),
          Object(c.c)([_.a], t.prototype, "LaunchSteamClient", null),
          (t = Object(c.c)([p.a], t))
        );
      })(r.Component),
      S = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(c.d)(t, e),
          (t.prototype.render = function() {
            return r.createElement(
              "div",
              { className: "ChatMessageInvite" },
              r.createElement(
                "div",
                { className: "postedExpiredInvite" },
                Object(s.c)("#InviteLanding_ExpiredOrInvalid")
              )
            );
          }),
          t
        );
      })(r.Component);
    function y(e) {
      return r.createElement(
        "div",
        { className: "ChatMessageInvite" },
        r.createElement("div", {
          className: "leftInviteContainer",
          dangerouslySetInnerHTML: { __html: e.render.strAvatarHTML }
        }),
        r.createElement(
          "div",
          { className: "rightInviteContainer" },
          r.createElement(
            "div",
            { className: "inviteLabel" },
            Object(s.e)(
              "#bbcode_invite_description",
              r.createElement("span", {
                dangerouslySetInnerHTML: {
                  __html: e.render.strInviterNameLinkHTML
                }
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
    window.AssertMsg = u.a;
    var g,
      k,
      C,
      I = new a.a();
    function L(e) {
      var t;
      try {
        t = JSON.parse(e.getAttribute("data-inviteinfo"));
      } catch (e) {}
      v.sm_rtTimeCur = t.rtTimeCur;
      var n = new v(t);
      o.render(r.createElement(E, { controller: n }), e);
    }
    (window.ClientConnectionAPI = I),
      document.addEventListener("DOMContentLoaded", function() {
        Object(i.c)(),
          (function() {
            for (
              var e = document.querySelectorAll(".ChatReactRoot"), t = 0;
              t < e.length;
              t++
            ) {
              var n = e[t],
                r = n.getAttribute("data-component");
              switch (r) {
                case "ChatInvite":
                  L(n);
                  break;
                default:
                  Object(u.a)(!1, 'unknown component: "' + r + '"');
              }
            }
          })();
      }),
      (window.LocalizationReady = function(e, t, n) {
        if ("english" !== t)
          "friendsui" == e ? (g = n) : "shared" == e && (k = n);
        else if ("shared" == e) C = n;
        else {
          var r = void 0,
            o = null,
            i = void 0,
            a = null;
          void 0 !== g ? ((r = g), (o = n)) : (r = n),
            void 0 !== k ? ((i = k), (a = C)) : (i = C),
            s.b.InitFromObjects(r, o, i, a),
            (g = void 0),
            (k = void 0),
            (C = void 0);
        }
      });
  },
  "s+DT": function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return s;
    });
    var r = n("2lpH"),
      o = n.n(r),
      i = n("0N1H"),
      a = n("1n9R"),
      s = (function() {
        function e(t, n, r, i) {
          void 0 === t && (t = 0),
            t instanceof e
              ? (this.m_ulSteamID = t.m_ulSteamID)
              : "string" == typeof t
              ? (this.m_ulSteamID = o.a.fromString(t, !0))
              : n && r && void 0 !== i
              ? this.SetFromComponents(t, i, r, n)
              : (this.m_ulSteamID = t ? o.a.fromNumber(t, !0) : o.a.UZERO);
        }
        return (
          (e.InitFromAccountID = function(t) {
            return new e(Number(t), a.b.EUNIVERSE, 1, i.n);
          }),
          (e.InitFromClanID = function(t) {
            return new e(Number(t), a.b.EUNIVERSE, 7, 0);
          }),
          (e.prototype.GetAccountID = function() {
            return this.m_ulSteamID.getLowBitsUnsigned();
          }),
          (e.prototype.GetInstance = function() {
            return 1048575 & this.m_ulSteamID.getHighBitsUnsigned();
          }),
          (e.prototype.GetAccountType = function() {
            return (this.m_ulSteamID.getHighBitsUnsigned() >> 20) & 15;
          }),
          (e.prototype.GetUniverse = function() {
            return (this.m_ulSteamID.getHighBitsUnsigned() >> 24) & 255;
          }),
          (e.prototype.ConvertTo64BitString = function() {
            return this.m_ulSteamID.toString();
          }),
          (e.prototype.Render = function() {
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
          }),
          (e.prototype.BIsValid = function() {
            var e = this.GetAccountType();
            if (e <= 0 || e >= 11) return !1;
            var t = this.GetUniverse();
            if (t <= 0 || t >= 5) return !1;
            if (1 == e) {
              if (0 == this.GetAccountID() || this.GetInstance() > i.o)
                return !1;
            } else if (7 == e) {
              if (0 == this.GetAccountID() || 0 != this.GetInstance())
                return !1;
            } else if (3 == e && 0 == this.GetAccountID()) return !1;
            return !0;
          }),
          (e.prototype.BIsIndividualAccount = function() {
            return 1 == this.GetAccountType();
          }),
          (e.prototype.BIsClanAccount = function() {
            return 7 == this.GetAccountType();
          }),
          (e.prototype.SetAccountID = function(e) {
            this.m_ulSteamID = new o.a(
              e,
              this.m_ulSteamID.getHighBitsUnsigned(),
              !0
            );
          }),
          (e.prototype.SetInstance = function(e) {
            this.SetFromComponents(
              this.GetAccountID(),
              e,
              this.GetAccountType(),
              this.GetUniverse()
            );
          }),
          (e.prototype.SetAccountType = function(e) {
            this.SetFromComponents(
              this.GetAccountID(),
              this.GetInstance(),
              e,
              this.GetUniverse()
            );
          }),
          (e.prototype.SetUniverse = function(e) {
            this.SetFromComponents(
              this.GetAccountID(),
              this.GetInstance(),
              this.GetAccountType(),
              e
            );
          }),
          (e.prototype.SetFromComponents = function(e, t, n, r) {
            var i = ((255 & r) << 24) + ((15 & n) << 20) + (1048575 & t),
              a = 4294967295 & e;
            this.m_ulSteamID = new o.a(a, i, !0);
          }),
          e
        );
      })();
  },
  tkkQ: function(e, t, n) {
    "use strict";
    var r = n("1n9R");
    n.d(t, "a", function() {
      return r.b;
    }),
      n.d(t, "d", function() {
        return r.h;
      }),
      n.d(t, "c", function() {
        return r.g;
      }),
      n.d(t, "b", function() {
        return r.f;
      });
  },
  ujHl: function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
      return r;
    }),
      n.d(t, "a", function() {
        return o;
      }),
      n.d(t, "c", function() {
        return i;
      });
    var r = {
      PerYear: 31536e3,
      PerMonth: 2628e3,
      PerWeek: 604800,
      PerDay: 86400,
      PerHour: 3600,
      PerMinute: 60
    };
    function o(e) {
      return new Date(e.getFullYear(), e.getMonth(), 1, 0, 0, 0, 0);
    }
    function i(e) {
      return new Promise(function(t) {
        return setTimeout(t, e);
      });
    }
  }
});
