/*! This file includes third-party software, governed by the licenses described here: https://steamcommunity.com/public/javascript/webui/chathelpers.licenses.txt */

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
!(function(u) {
  function e(e) {
    for (
      var t, n, r = e[0], o = e[1], i = e[2], a = 0, s = [];
      a < r.length;
      a++
    )
      (n = r[a]), p[n] && s.push(p[n][0]), (p[n] = 0);
    for (t in o) Object.prototype.hasOwnProperty.call(o, t) && (u[t] = o[t]);
    for (m && m(e); s.length; ) s.shift()();
    return l.push.apply(l, i || []), c();
  }
  function c() {
    for (var e, t = 0; t < l.length; t++) {
      for (var n = l[t], r = !0, o = 1; o < n.length; o++) {
        var i = n[o];
        0 !== p[i] && (r = !1);
      }
      r && (l.splice(t--, 1), (e = a((a.s = n[0]))));
    }
    return e;
  }
  var n = {},
    p = { 3: 0 },
    l = [];
  function a(e) {
    if (n[e]) return n[e].exports;
    var t = (n[e] = { i: e, l: !1, exports: {} });
    return u[e].call(t.exports, t, t.exports, a), (t.l = !0), t.exports;
  }
  (a.m = u),
    (a.c = n),
    (a.d = function(e, t, n) {
      a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (a.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (a.t = function(t, e) {
      if ((1 & e && (t = a(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (a.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          a.d(
            n,
            r,
            function(e) {
              return t[e];
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
  var t = (window.webpackJsonp = window.webpackJsonp || []),
    r = t.push.bind(t);
  (t.push = e), (t = t.slice());
  for (var o = 0; o < t.length; o++) e(t[o]);
  var m = r;
  l.push(["qM/t", 0]), c();
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
        return c;
      }),
      n.d(t, "o", function() {
        return p;
      }),
      n.d(t, "g", function() {
        return l;
      }),
      n.d(t, "h", function() {
        return m;
      }),
      n.d(t, "m", function() {
        return h;
      }),
      n.d(t, "i", function() {
        return d;
      }),
      n.d(t, "j", function() {
        return _;
      }),
      n.d(t, "l", function() {
        return f;
      }),
      n.d(t, "k", function() {
        return v;
      }),
      n.d(t, "d", function() {
        return E;
      }),
      n.d(t, "f", function() {
        return S;
      }),
      n.d(t, "e", function() {
        return b;
      }),
      n.d(t, "c", function() {
        return g;
      });
    var i,
      a,
      s,
      u,
      c = 1,
      p = 4,
      l = 750,
      m = 799,
      h = 7,
      d = 250820,
      _ = 330050,
      f = 358510,
      v = 366490,
      E = "18446744073709551615",
      S = 0,
      b = 2147483647;
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
        default:
          return t;
      }
    }
    ((a = i || (i = {}))[(a.k_EOtherEvent = 1)] = "k_EOtherEvent"),
      (a[(a.k_EGameEvent = 2)] = "k_EGameEvent"),
      (a[(a.k_EPartyEvent = 3)] = "k_EPartyEvent"),
      (a[(a.k_EMeetingEvent = 4)] = "k_EMeetingEvent"),
      (a[(a.k_ESpecialCauseEvent = 5)] = "k_ESpecialCauseEvent"),
      (a[(a.k_EMusicAndArtsEvent = 6)] = "k_EMusicAndArtsEvent"),
      (a[(a.k_ESportsEvent = 7)] = "k_ESportsEvent"),
      (a[(a.k_ETripEvent = 8)] = "k_ETripEvent"),
      (a[(a.k_EChatEvent = 9)] = "k_EChatEvent"),
      (a[(a.k_EGameReleaseEvent = 10)] = "k_EGameReleaseEvent"),
      (a[(a.k_EBroadcastEvent = 11)] = "k_EBroadcastEvent"),
      (a[(a.k_ESmallUpdateEvent = 12)] = "k_ESmallUpdateEvent"),
      (a[(a.k_ERegularUpdateEvent = 13)] = "k_ERegularUpdateEvent"),
      (a[(a.k_EMajorUpdateEvent = 14)] = "k_EMajorUpdateEvent"),
      (a[(a.k_EFutureReleaseEvent = 16)] = "k_EFutureReleaseEvent"),
      (a[(a.k_EESportTournamentStreamEvent = 17)] =
        "k_EESportTournamentStreamEvent"),
      (a[(a.k_EDevStreamEvent = 18)] = "k_EDevStreamEvent"),
      (a[(a.k_EFamousStreamEvent = 19)] = "k_EFamousStreamEvent"),
      (a[(a.k_EGameSalesEvent = 20)] = "k_EGameSalesEvent"),
      (a[(a.k_EGameItemSalesEvent = 21)] = "k_EGameItemSalesEvent"),
      (a[(a.k_EInGameBonusXPEvent = 22)] = "k_EInGameBonusXPEvent"),
      (a[(a.k_EInGameLootEvent = 23)] = "k_EInGameLootEvent"),
      (a[(a.k_EInGamePerksEvent = 24)] = "k_EInGamePerksEvent"),
      (a[(a.k_EInGameChallengeEvent = 25)] = "k_EInGameChallengeEvent"),
      (a[(a.k_EInGameContestEvent = 26)] = "k_EInGameContestEvent"),
      (a[(a.k_EIRLEvent = 27)] = "k_EIRLEvent"),
      (a[(a.k_ENewsEvent = 28)] = "k_ENewsEvent"),
      (a[(a.k_EBetaReleaseEvent = 29)] = "k_EBetaReleaseEvent"),
      (a[(a.k_EFreeTrial = 31)] = "k_EFreeTrial"),
      (a[(a.k_ESeasonRelease = 32)] = "k_ESeasonRelease"),
      ((u = s || (s = {}))[(u.k_ELaunchSource_None = 0)] =
        "k_ELaunchSource_None"),
      (u[(u.k_ELaunchSource_2ftLibraryDetails = 100)] =
        "k_ELaunchSource_2ftLibraryDetails"),
      (u[(u.k_ELaunchSource_2ftLibraryListView = 101)] =
        "k_ELaunchSource_2ftLibraryListView"),
      (u[(u.k_ELaunchSource_2ftLibraryGrid = 103)] =
        "k_ELaunchSource_2ftLibraryGrid"),
      (u[(u.k_ELaunchSource_InstallSubComplete = 104)] =
        "k_ELaunchSource_InstallSubComplete"),
      (u[(u.k_ELaunchSource_DownloadsPage = 105)] =
        "k_ELaunchSource_DownloadsPage"),
      (u[(u.k_ELaunchSource_RemoteClientStartStreaming = 106)] =
        "k_ELaunchSource_RemoteClientStartStreaming"),
      (u[(u.k_ELaunchSource_2ftMiniModeList = 107)] =
        "k_ELaunchSource_2ftMiniModeList"),
      (u[(u.k_ELaunchSource_10ft = 200)] = "k_ELaunchSource_10ft"),
      (u[(u.k_ELaunchSource_DashAppLaunchCmdLine = 300)] =
        "k_ELaunchSource_DashAppLaunchCmdLine"),
      (u[(u.k_ELaunchSource_DashGameIdLaunchCmdLine = 301)] =
        "k_ELaunchSource_DashGameIdLaunchCmdLine"),
      (u[(u.k_ELaunchSource_RunByGameDir = 302)] =
        "k_ELaunchSource_RunByGameDir"),
      (u[(u.k_ELaunchSource_SubCmdRunDashGame = 303)] =
        "k_ELaunchSource_SubCmdRunDashGame"),
      (u[(u.k_ELaunchSource_SteamURL_Launch = 400)] =
        "k_ELaunchSource_SteamURL_Launch"),
      (u[(u.k_ELaunchSource_SteamURL_Run = 401)] =
        "k_ELaunchSource_SteamURL_Run"),
      (u[(u.k_ELaunchSource_SteamURL_JoinLobby = 402)] =
        "k_ELaunchSource_SteamURL_JoinLobby"),
      (u[(u.k_ELaunchSource_SteamURL_RunGame = 403)] =
        "k_ELaunchSource_SteamURL_RunGame"),
      (u[(u.k_ELaunchSource_SteamURL_RunGameIdOrJumplist = 404)] =
        "k_ELaunchSource_SteamURL_RunGameIdOrJumplist"),
      (u[(u.k_ELaunchSource_SteamURL_RunSafe = 405)] =
        "k_ELaunchSource_SteamURL_RunSafe"),
      (u[(u.k_ELaunchSource_TrayIcon = 500)] = "k_ELaunchSource_TrayIcon"),
      (u[(u.k_ELaunchSource_LibraryLeftColumnContextMenu = 600)] =
        "k_ELaunchSource_LibraryLeftColumnContextMenu"),
      (u[(u.k_ELaunchSource_LibraryLeftColumnDoubleClick = 601)] =
        "k_ELaunchSource_LibraryLeftColumnDoubleClick"),
      (u[(u.k_ELaunchSource_Dota2Launcher = 700)] =
        "k_ELaunchSource_Dota2Launcher"),
      (u[(u.k_ELaunchSource_IRunGameEngine = 800)] =
        "k_ELaunchSource_IRunGameEngine"),
      (u[(u.k_ELaunchSource_DRMFailureResponse = 801)] =
        "k_ELaunchSource_DRMFailureResponse"),
      (u[(u.k_ELaunchSource_DRMDataRequest = 802)] =
        "k_ELaunchSource_DRMDataRequest"),
      (u[(u.k_ELaunchSource_CloudFilePanel = 803)] =
        "k_ELaunchSource_CloudFilePanel"),
      (u[(u.k_ELaunchSource_DiscoveredAlreadyRunning = 804)] =
        "k_ELaunchSource_DiscoveredAlreadyRunning"),
      (u[(u.k_ELaunchSource_GameActionJoinParty = 900)] =
        "k_ELaunchSource_GameActionJoinParty"),
      (u[(u.k_ELaunchSource_AppPortraitContextMenu = 1e3)] =
        "k_ELaunchSource_AppPortraitContextMenu");
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
    function a() {
      return !!window.document;
    }
    n.d(t, "b", function() {
      return i;
    }),
      n.d(t, "f", function() {
        return s;
      }),
      n.d(t, "a", function() {
        return u;
      }),
      n.d(t, "c", function() {
        return l;
      }),
      n.d(t, "e", function() {
        return m;
      }),
      n.d(t, "d", function() {
        return h;
      });
    var o,
      i = {
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
        LOCAL_HOSTNAME: "",
        WEBAPI_BASE_URL: "",
        TOKEN_URL: "",
        BUILD_TIMESTAMP: 0,
        PAGE_TIMESTAMP: 0,
        get SESSIONID() {
          return (function() {
            if (!a()) return o || (o = l()), o;
            var e = (function(e) {
              if (!a() || !window.document.cookie) return null;
              var t = document.cookie.match("(^|; )" + e + "=([^;]*)");
              return t && t[2] ? decodeURIComponent(t[2]) : null;
            })("sessionid");
            e || (e = l());
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
        is_support: !1
      },
      u = { steamid: "", clanid: 0, listid: 0 },
      c = {
        CLANSTEAMID: "",
        CLANACCOUNTID: 0,
        IMG_URL: "",
        CLANURLNAME: "",
        APPID: 0
      },
      p = "webui_config";
    function l() {
      var e = (function() {
        for (var e = "", t = 0; t < 24; t++)
          e += Object(r.b)(0, 35).toString(36);
        return e;
      })();
      return (
        (function(e, t, n, r) {
          if (a()) {
            r || (r = "/");
            var o = "";
            if (void 0 !== n && n) {
              var i = new Date();
              i.setTime(i.getTime() + 864e5 * n),
                (o = "; expires=" + i.toUTCString());
            }
            document.cookie =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(t) +
              o +
              ";path=" +
              r;
          }
        })("sessionid", e, 0),
        e
      );
    }
    function m(e) {
      void 0 === e && (e = p);
      var t = h("config", e);
      t && (delete t.SESSIONID, Object.assign(i, t));
      var n = h("userinfo", e);
      n && Object.assign(s, n);
      var r = h("broadcast", e);
      r && Object.assign(u, r);
      var o = h("community", e);
      o && Object.assign(c, o);
    }
    function h(e, t) {
      var n;
      if (
        (void 0 === t && (t = p),
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
          r.c([o.x], e.prototype, "m_bReady", void 0),
          r.c([o.g], e.prototype, "InitInvalid", null),
          r.c([o.g], e.prototype, "InitDirectInvite", null),
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
      return u;
    }),
      n.d(t, "a", function() {
        return m;
      }),
      n.d(t, "b", function() {
        return h;
      }),
      n.d(t, "d", function() {
        return _;
      });
    var u,
      r,
      o = n("mrSG"),
      i = n("2vnA"),
      a = n("i8i4"),
      s = n("UqDm"),
      c = n("WpBz"),
      p = n("1VtQ");
    ((r = u || (u = {}))[(r.Minimized = 1)] = "Minimized"),
      (r[(r.Hidden = 2)] = "Hidden"),
      (r[(r.Tooltip = 4)] = "Tooltip"),
      (r[(r.ContextMenu = 8)] = "ContextMenu"),
      (r[(r.Resizable = 16)] = "Resizable");
    var l = (function() {
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
          o.c([p.a], e.prototype, "OnLinkLoad", null),
          e
        );
      })(),
      m = (function() {
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
              r = this;
            void 0 === e && (e = !0),
              void 0 === t && (t = !1),
              window.SteamClient &&
                (this.m_rgParams.eCreationFlags |= u.Hidden),
              this.m_rgParams.eCreationFlags & u.Tooltip && (e = !1),
              this.BIsValid() &&
                (this.BIsClosed()
                  ? ((this.m_popup = void 0), (this.m_element = void 0))
                  : e && this.Focus(t));
            var o,
              i,
              a,
              s = _.GetExistingPopup(this.m_strName);
            (s && !this.m_rgParams.replace_existing_popup) ||
              ((this.m_rgParams = this.UpdateParamsBeforeShow(this.m_rgParams)),
              s
                ? ((i = s.m_element),
                  (o = s.m_popup),
                  s.ReleasePopup(),
                  (a = s.m_renderWhenReady),
                  _.RemoveTrackedPopup(s),
                  o.removeEventListener("beforeunload", s.OnBeforeUnloadEvent),
                  o.removeEventListener("unload", s.OnUnload),
                  o.removeEventListener("resize", s.OnResizeEvent),
                  o.removeEventListener("focus", this.OnFocusInternal),
                  o.removeEventListener("blur", this.OnBlurInternal),
                  o.removeEventListener("drop", s.OnDrop),
                  o.removeEventListener("dragover", s.OnDragOver),
                  o.removeEventListener("message", this.OnMessage))
                : ((o = (n = d.CreatePopup(this.m_strName, this.m_rgParams))
                    .popup),
                  (i = n.element),
                  (a = new l(o, i))),
              o &&
                i &&
                ((o.document.title = this.m_strTitle),
                o.addEventListener("beforeunload", this.OnBeforeUnloadEvent),
                o.addEventListener("unload", this.OnUnload),
                o.addEventListener("resize", this.OnResizeEvent),
                o.addEventListener("focus", this.OnFocusInternal),
                o.addEventListener("blur", this.OnBlurInternal),
                o.addEventListener("drop", this.OnDrop),
                o.addEventListener("dragover", this.OnDragOver),
                o.addEventListener("message", this.OnMessage),
                (this.m_popup = o),
                (this.m_element = i),
                (this.m_renderWhenReady = a),
                this.m_renderWhenReady.SetTarget(function() {
                  return r.RenderInternal(r.m_popup, r.m_element, e);
                })),
              _.AddTrackedPopup(this),
              s && e && this.Focus());
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
              _.RemoveTrackedPopup(this),
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
            var n = this;
            return this.m_popup &&
              !this.m_popup.closed &&
              this.m_popup.SteamClient
              ? new Promise(function(t, e) {
                  n.m_popup.SteamClient.Window.GetWindowRestoreDetails(function(
                    e
                  ) {
                    t(e);
                  });
                })
              : Promise.resolve("");
          }),
          (e.prototype.IsMinimized = function() {
            var n = this;
            return this.m_popup &&
              !this.m_popup.closed &&
              this.m_popup.SteamClient &&
              this.m_popup.SteamClient.Window &&
              this.m_popup.SteamClient.Window.IsWindowMinimized
              ? new Promise(function(t, e) {
                  n.m_popup.SteamClient.Window.IsWindowMinimized(function(e) {
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
          o.c([i.x], e.prototype, "m_bFocused", void 0),
          o.c([p.a], e.prototype, "OnMessage", null),
          o.c([p.a], e.prototype, "OnResizeEvent", null),
          o.c([p.a], e.prototype, "OnBeforeUnloadEvent", null),
          o.c([p.a], e.prototype, "OnUnload", null),
          o.c([p.a], e.prototype, "OnFocusInternal", null),
          o.c([p.a], e.prototype, "OnBlurInternal", null),
          e
        );
      })(),
      h = (function(i) {
        function e(e, t, n, r) {
          var o = i.call(this, e, n) || this;
          return o.SetSavedDimensionsKey(t), (o.m_bExpires = r), o;
        }
        return (
          o.d(e, i),
          (e.prototype.BIsInOverlay = function() {
            return (
              this.browser_info &&
              this.browser_info != { m_unPID: 0, m_nBrowserID: -1 }
            );
          }),
          (e.prototype.SetSavedDimensionsKey = function(e) {
            this.m_strSavedDimensionsKey = e;
          }),
          (e.prototype.UpdateParamsBeforeShow = function(e) {
            return (
              !this.m_strSavedDimensionsKey ||
              e.bIgnoreSavedDimensions ||
              e.strRestoreDetails
                ? e.strRestoreDetails &&
                  ((this.m_strInitialSavedDimensionsKey = this.GetSavedDimensionsKey()),
                  _.SetRestoreDetails(
                    this.m_strInitialSavedDimensionsKey,
                    e.strRestoreDetails,
                    this.m_bExpires
                  ))
                : ((this.m_strInitialSavedDimensionsKey = this.GetSavedDimensionsKey()),
                  (e.strRestoreDetails = _.GetRestoreDetails(
                    this.m_strInitialSavedDimensionsKey
                  ))),
              e
            );
          }),
          (e.prototype.OnLoad = function() {
            var t = this;
            this.GetWindowRestoreDetails().then(function(e) {
              (t.m_strInitialRestoreDetails = e), t.OnResizeComplete(e);
            });
          }),
          (e.prototype.OnResize = function() {
            this.QueryAndStoreWindowPosition();
          }),
          (e.prototype.OnResizeComplete = function(e) {}),
          (e.prototype.QueryAndStoreWindowPosition = function() {
            var n = this;
            if (this.m_strInitialRestoreDetails) {
              var r = this.GetSavedDimensionsKey();
              this.m_popup.setTimeout(function() {
                n.GetWindowRestoreDetails().then(function(e) {
                  var t =
                    n.m_strInitialRestoreDetails == e &&
                    r == n.m_strInitialSavedDimensionsKey;
                  n.m_popup &&
                    n.m_strSavedDimensionsKey &&
                    e &&
                    !t &&
                    (_.SetRestoreDetails(r, e, n.m_bExpires),
                    (n.m_rgParams.strRestoreDetails = e),
                    (n.m_strInitialSavedDimensionsKey = r),
                    n.OnResizeComplete(e));
                });
              }, 30);
            }
          }),
          (e.prototype.OnBeforeUnload = function() {
            this.QueryAndStoreWindowPosition(),
              i.prototype.OnBeforeUnload.call(this);
          }),
          (e.prototype.OnClose = function() {}),
          (e.prototype.SaveWindowPosition = function(e) {
            _.SetRestoreDetails(this.GetSavedDimensionsKey(), e, !1),
              (this.m_rgParams.strRestoreDetails = e);
          }),
          o.c([p.a], e.prototype, "QueryAndStoreWindowPosition", null),
          e
        );
      })(m),
      d = (function() {
        function e() {
          var a = this;
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
              window.addEventListener("beforeunload", function(e) {
                a.m_bShuttingDown = !0;
                for (
                  var t = 0, n = a.m_rgShutdownCallbacks;
                  t < n.length;
                  t++
                ) {
                  (0, n[t])();
                }
                var r = [];
                a.m_mapPopups.forEach(function(e) {
                  e.BIsValid() && !e.BIsClosed() && r.push(e);
                });
                for (var o = 0, i = r; o < i.length; o++) {
                  i[o].Close();
                }
                a.m_bSaveRequired && a.SaveSavedDimensionStore(),
                  a.m_mapPopups.clear();
              });
        }
        return (
          (e.prototype.SetCurrentLoggedInAccountID = function(e) {
            (this.m_unCurrentAccountID = e)
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
          (e.prototype.ClosePopupsOwnedByBrowser = function(t) {
            this.m_mapPopups.forEach(function(e) {
              e.browser_info &&
                e.browser_info.m_nBrowserID == t.m_nBrowserID &&
                e.browser_info.m_unPID == t.m_unPID &&
                e.Close();
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
                t.availscreenwidth &&
                  t.availscreenheight &&
                  (u.push("screenavailwidth=" + t.availscreenwidth),
                  u.push("screenavailheight=" + t.availscreenheight))),
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
            var p = "";
            t.html_class && (p = 'class="' + t.html_class + '"');
            var l = "";
            t.body_class && (l = 'class="' + t.body_class + '"');
            var m =
              "<!DOCTYPE html><html " +
              p +
              "><head><title></title></head><body " +
              l +
              '><div id="popup_target"></div></body></html>';
            c.document.write(m), (c.document.title = i);
            for (
              var h = c.document.getElementsByTagName("head")[0],
                d = document.getElementsByTagName("link"),
                _ = 0;
              _ < d.length;
              _++
            ) {
              var f = d[_];
              if ("stylesheet" == f.rel) {
                for (
                  var v = c.document.createElement("link"), E = 0;
                  E < f.attributes.length;
                  E++
                ) {
                  var S = f.attributes.item(E);
                  v.setAttribute(S.name, S.value);
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
                if (50 < this.m_mapRestoreDetails.size) {
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
          o.c(
            [p.a, Object(c.a)(100)],
            e.prototype,
            "DebouncedSaveSavedDimensionStore",
            null
          ),
          e
        );
      })(),
      _ = new d();
  },
  UqDm: function(e, t, n) {
    "use strict";
    n.d(t, "e", function() {
      return r;
    }),
      n.d(t, "c", function() {
        return o;
      }),
      n.d(t, "d", function() {
        return i;
      }),
      n.d(t, "b", function() {
        return a;
      }),
      n.d(t, "a", function() {
        return s;
      }),
      n.d(t, "f", function() {
        return u;
      }),
      n.d(t, "g", function() {
        return c;
      }),
      n.d(t, "h", function() {
        return p;
      });
    n("XaMz");
    function r(e, t, n) {
      t < 0 ||
        n < 0 ||
        (n >= e.length && (e[n] = void 0), e.splice(n, 0, e.splice(t, 1)[0]));
    }
    function o(e, t) {
      return i(e, function(e) {
        return t == e;
      });
    }
    function i(e, t) {
      var n = e.findIndex(t);
      return 0 <= n && (e.splice(n, 1), !0);
    }
    function a(e, o) {
      return e.reduce(function(e, t, n, r) {
        return e + (o(t, n, r) ? 1 : 0);
      }, 0);
    }
    function s(e, t) {
      return e.filter(function(e) {
        return t !== e;
      });
    }
    function u(e, t) {
      if (e.length != t.length) return !1;
      for (var n = 0; n < e.length; n++) if (e[n] != t[n]) return !1;
      return !0;
    }
    function c(e, t, n) {
      for (var r = 0, o = e.length - 1; r <= o; ) {
        var i = Math.floor((r + o) / 2),
          a = n(e[i], t);
        if (a < 0) r = i + 1;
        else if (0 < a) o = i - 1;
        else {
          if (o == i) return i;
          if (i == r) return i < o && n(t, e[i + 1]) < 0 ? i : i + 1;
          r = i;
        }
      }
      return o;
    }
    function p(e, t, n) {
      var r = c(e, t, n);
      e.splice(r + 1, 0, t);
    }
  },
  WpBz: function(e, t, n) {
    "use strict";
    function r(a) {
      return function(e, o, t) {
        var i = t.value;
        t.value = function() {
          for (var e = this, t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
          var r = this[o + "_DebounceProperties"];
          void 0 === r &&
            (r = this[o + "_DebounceProperties"] = {
              hTimer: void 0,
              nPending: 0
            }),
            void 0 === r.hTimer
              ? (i.apply(this, t),
                (r.hTimer = window.setInterval(function() {
                  0 < r.nPending
                    ? (i.apply(e, t), (r.nPending = 0))
                    : (window.clearInterval(r.hTimer), (r.hTimer = void 0));
                }, a)))
              : (r.nPending += 1);
        };
      };
    }
    n.d(t, "a", function() {
      return r;
    });
  },
  XaMz: function(e, t, n) {
    "use strict";
    function r(e, t) {
      for (var n = [], r = 2; r < arguments.length; r++)
        n[r - 2] = arguments[r];
      console.assert
        ? 0 == n.length
          ? console.assert(!!e, t)
          : console.assert.apply(console, [!!e, t].concat(n))
        : e || console.warn.apply(console, [t].concat(n));
    }
    n.d(t, "a", function() {
      return r;
    });
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
          (e.prototype.BIsSubscribedApp = function(n) {
            var r = this;
            if (this.m_mapCacheSubscribedApp.has(n))
              return Promise.resolve(this.m_mapCacheSubscribedApp.get(n));
            var e = { message: "IsSubscribedApp", appid: n };
            return this.GenericEResultCall(e).then(function(e) {
              if (!e.connect_failed) {
                var t = 1 == e.result;
                return r.m_mapCacheSubscribedApp.set(n, t), t;
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
          (e.prototype.SendMsgAndAwaitResponse = function(r) {
            var o = this;
            return new Promise(function(e, t) {
              var n = o.m_iCallSeq++;
              o.BSendMsg(r, n)
                ? o.m_mapWaitingCallbacks.set(n, {
                    iSeq: n,
                    fnCallback: e,
                    fnError: t
                  })
                : t();
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
            var r = this;
            if (this.m_bReady && this.m_socket.readyState == WebSocket.OPEN)
              return Promise.resolve();
            if (this.m_promiseConnect) return this.m_promiseConnect;
            var e = new Promise(function(t, n) {
              try {
                r.m_socket = new WebSocket(
                  "ws://127.0.0.1:27060/clientsocket/"
                );
              } catch (e) {
                return (r.m_bSecurityException = !0), void n(e);
              }
              (r.m_socket.onerror = function(e) {
                n();
              }),
                (r.m_socket.onmessage = r.OnSocketMessage.bind(r)),
                (r.m_socket.onopen = function(e) {
                  r.SendMsgAndAwaitResponse({ message: "GetClientInfo" })
                    .then(function(e) {
                      1 == e.success
                        ? ((r.m_ClientInfo.ulVersion = e.clientversion),
                          (r.m_ClientInfo.bFriendsUIEnabled = !!e.friendsui),
                          (r.m_ClientInfo.unAccountID = e.accountid),
                          e.supported_messages &&
                            (r.m_ClientInfo.rgSupportedMessages =
                              e.supported_messages),
                          t())
                        : n();
                    })
                    .catch(n);
                });
            });
            return (
              (this.m_promiseConnect = e),
              this.m_promiseConnect
                .then(function() {
                  (r.m_bReady = !0), (r.m_promiseConnect = void 0);
                })
                .catch(function() {
                  (r.m_bClientConnectionFailed = !0),
                    (r.m_promiseConnect = void 0);
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
          t.indexOf(r[o]) < 0 && (n[r[o]] = e[r[o]]);
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
        for (var s = e.length - 1; 0 <= s; s--)
          (o = e[s]) &&
            (a = (i < 3 ? o(a) : 3 < i ? o(t, n, a) : o(t, n)) || a);
      return 3 < i && a && Object.defineProperty(t, n, a), a;
    }
    function u(i, a, s, u) {
      return new (s || (s = Promise))(function(e, t) {
        function n(e) {
          try {
            o(u.next(e));
          } catch (e) {
            t(e);
          }
        }
        function r(e) {
          try {
            o(u.throw(e));
          } catch (e) {
            t(e);
          }
        }
        function o(t) {
          t.done
            ? e(t.value)
            : new s(function(e) {
                e(t.value);
              }).then(n, r);
        }
        o((u = u.apply(i, a || [])).next());
      });
    }
    function c(n, r) {
      var o,
        i,
        a,
        e,
        s = {
          label: 0,
          sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1];
          },
          trys: [],
          ops: []
        };
      return (
        (e = { next: t(0), throw: t(1), return: t(2) }),
        "function" == typeof Symbol &&
          (e[Symbol.iterator] = function() {
            return this;
          }),
        e
      );
      function t(t) {
        return function(e) {
          return (function(t) {
            if (o) throw new TypeError("Generator is already executing.");
            for (; s; )
              try {
                if (
                  ((o = 1),
                  i &&
                    (a =
                      2 & t[0]
                        ? i.return
                        : t[0]
                        ? i.throw || ((a = i.return) && a.call(i), 0)
                        : i.next) &&
                    !(a = a.call(i, t[1])).done)
                )
                  return a;
                switch (((i = 0), a && (t = [2 & t[0], a.value]), t[0])) {
                  case 0:
                  case 1:
                    a = t;
                    break;
                  case 4:
                    return s.label++, { value: t[1], done: !1 };
                  case 5:
                    s.label++, (i = t[1]), (t = [0]);
                    continue;
                  case 7:
                    (t = s.ops.pop()), s.trys.pop();
                    continue;
                  default:
                    if (
                      !(a = 0 < (a = s.trys).length && a[a.length - 1]) &&
                      (6 === t[0] || 2 === t[0])
                    ) {
                      s = 0;
                      continue;
                    }
                    if (3 === t[0] && (!a || (t[1] > a[0] && t[1] < a[3]))) {
                      s.label = t[1];
                      break;
                    }
                    if (6 === t[0] && s.label < a[1]) {
                      (s.label = a[1]), (a = t);
                      break;
                    }
                    if (a && s.label < a[2]) {
                      (s.label = a[2]), s.ops.push(t);
                      break;
                    }
                    a[2] && s.ops.pop(), s.trys.pop();
                    continue;
                }
                t = r.call(n, s);
              } catch (e) {
                (t = [6, e]), (i = 0);
              } finally {
                o = a = 0;
              }
            if (5 & t[0]) throw t[1];
            return { value: t[0] ? t[1] : void 0, done: !0 };
          })([t, e]);
        };
      }
    }
  },
  oh5H: function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
      return s;
    }),
      n.d(t, "d", function() {
        return u;
      }),
      n.d(t, "c", function() {
        return p;
      }),
      n.d(t, "e", function() {
        return l;
      }),
      n.d(t, "a", function() {
        return m;
      });
    var c = n("q1tI"),
      r = (n("Gp1o"), n("XaMz"), n("ujHl")),
      o = n("0N1H"),
      i = n("1n9R"),
      a = (function() {
        function e() {
          (this.m_mapTokens = new Map()),
            (this.m_mapFallbackTokens = new Map());
        }
        return (
          (e.prototype.InitFromObjects = function(n, r, o, i) {
            var a = this;
            this.m_mapTokens.clear(),
              Object.keys(o).forEach(function(e, t) {
                a.m_mapTokens.set(e, o[e]);
              }),
              Object.keys(n).forEach(function(e, t) {
                a.m_mapTokens.set(e, n[e]);
              }),
              r &&
                Object.keys(r).forEach(function(e, t) {
                  a.m_mapTokens.has(e) || a.m_mapTokens.set(e, r[e]),
                    a.m_mapFallbackTokens.set(e, r[e]);
                }),
              i &&
                Object.keys(i).forEach(function(e, t) {
                  a.m_mapTokens.has(e) || a.m_mapTokens.set(e, i[e]),
                    a.m_mapFallbackTokens.has(e) ||
                      a.m_mapFallbackTokens.set(e, i[e]);
                });
          }),
          (e.prototype.InitDirect = function(n, r) {
            var o = this;
            this.m_mapTokens.clear(),
              this.m_mapFallbackTokens.clear(),
              Object.keys(n).forEach(function(e, t) {
                o.m_mapTokens.set(e, n[e]);
              }),
              r &&
                Object.keys(r).forEach(function(e, t) {
                  o.m_mapTokens.has(e) || o.m_mapTokens.set(e, r[e]),
                    o.m_mapFallbackTokens.set(e, r[e]);
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
            var t = new Array();
            return (
              t.push(Object(o.c)(i.b.LANGUAGE)),
              (i.b.SUPPORTED_LANGUAGES || []).forEach(function(e) {
                e.value != i.b.LANGUAGE && t.push(Object(o.c)(e.value));
              }),
              t
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
    function s(e) {
      for (var r = [], t = 1; t < arguments.length; t++)
        r[t - 1] = arguments[t];
      var n = m.LocalizeString(e);
      return n
        ? (0 < r.length &&
            (n = n.replace(/%(\d+)\$s/g, function(e, t) {
              if (t <= r.length && 1 <= t) {
                var n = r[t - 1];
                return String(null == n ? "" : n);
              }
              return e;
            })),
          n)
        : e;
    }
    function u(e) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      var r = m.LocalizeString(e);
      if (!r) return e;
      for (var o, i = [], a = /(.*?)%(\d+)\$s/g, s = 0; (o = a.exec(r)); ) {
        (s += o[0].length), i.push(o[1]);
        var u = parseInt(o[2]);
        1 <= u && u <= t.length && i.push(t[u - 1]);
      }
      return (
        i.push(r.substr(s)),
        c.createElement.apply(c, [c.Fragment, null].concat(i))
      );
    }
    function p(e, t) {
      for (var n = [], r = 2; r < arguments.length; r++)
        n[r - 2] = arguments[r];
      return s.apply(
        void 0,
        1 === t || "1" === t ? [e, t].concat(n) : [e + "_Plural", t].concat(n)
      );
    }
    function l(e, t) {
      void 0 === t && (t = !1);
      var n = t ? "#TimeInterval_" : "#TimeSince_";
      return e >= 2 * r.a.PerYear
        ? s(n + "XYears", Math.floor(e / r.a.PerYear))
        : e >= r.a.PerYear
        ? (e -= r.a.PerYear) >= 2 * r.a.PerMonth
          ? s(n + "1YearXMonths", Math.floor(e / r.a.PerMonth))
          : s(n + "1Year")
        : e >= 2 * r.a.PerMonth
        ? s(n + "XMonths", Math.floor(e / r.a.PerMonth))
        : e >= 2 * r.a.PerWeek
        ? s(n + "XWeeks", Math.floor(e / r.a.PerWeek))
        : e >= r.a.PerWeek
        ? s(n + "1Week", Math.floor(e / r.a.PerWeek))
        : e >= 2 * r.a.PerDay
        ? s(n + "XDays", Math.floor(e / r.a.PerDay))
        : e >= r.a.PerDay
        ? (e -= r.a.PerDay) >= 2 * r.a.PerHour
          ? s(n + "1DayXHours", Math.floor(e / r.a.PerHour))
          : s(n + "1Day")
        : e >= 2 * r.a.PerHour
        ? s(n + "XHours", Math.floor(e / r.a.PerHour))
        : e >= r.a.PerHour
        ? (e -= r.a.PerHour) >= 2 * r.a.PerMinute
          ? s(n + "1HourXMinutes", Math.floor(e / r.a.PerMinute))
          : s(n + "1Hour")
        : e >= 2 * r.a.PerMinute
        ? s(n + "XMinutes", Math.floor(e / r.a.PerMinute))
        : e >= r.a.PerMinute
        ? s(n + "1Minute")
        : s(n + "LessThanAMinute");
    }
    new Map(), new Map();
    new Map(), new Map(), new Map(), new Map();
    var m = new a();
    window.LocalizationManager = m;
  },
  "qM/t": function(e, t, n) {
    "use strict";
    n.r(t);
    var o = n("q1tI"),
      r = n("i8i4"),
      i = n("tkkQ"),
      a = n("fGPn"),
      s = (n("Y3TG"), n("oh5H")),
      u = n("XaMz"),
      c = n("mrSG"),
      p = n("2vnA"),
      l = n("okNM"),
      m = n("J0bI"),
      h = n("s+DT");
    var d = n("1VtQ"),
      _ = n("K4CH"),
      f = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          c.d(t, e),
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
          c.c([p.g], t.prototype, "InitFromPHPInviteLinkInfo", null),
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
            !(function(n) {
              var r = window.open("", "SteamWebChat", "");
              if (r) {
                var e = !1;
                try {
                  e = "about:blank" == r.location.href;
                } catch (e) {}
                if (e) {
                  if (n) {
                    var o = function(e) {
                      var t = i.a.COMMUNITY_BASE_URL.replace(
                        /(https?:\/\/[^/]*).*$/,
                        "$1"
                      );
                      e.source == r &&
                        "FriendsUIReady" == e.data &&
                        e.origin == t &&
                        (r.postMessage(n, i.a.COMMUNITY_BASE_URL),
                        window.removeEventListener("message", o));
                    };
                    window.addEventListener("message", o);
                  }
                  r.location.href = i.a.COMMUNITY_BASE_URL + "chat/";
                } else n && r.postMessage(n, i.a.COMMUNITY_BASE_URL);
                r.focus();
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
            var t = this;
            this.m_invite.BIsValid() &&
              !this.m_invite.BIsExpired() &&
              ((this.m_bConnectingToClient = !0),
              a.b
                .ShowChatRoomGroupInvite(this.m_invite.GetInviteCode())
                .then(function(e) {
                  Object(p.A)(function() {
                    (t.m_bConnectingToClient = !1),
                      (t.m_connectResult = e),
                      console.log(e);
                  });
                }));
          }),
          c.c([p.x], e.prototype, "m_bConnectingToClient", void 0),
          c.c([p.x], e.prototype, "m_connectResult", void 0),
          e
        );
      })(),
      E = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          c.d(t, e),
          (t.prototype.render = function() {
            return o.createElement(
              "div",
              { className: "InviteLandingRoot" },
              this.props.controller.BIsInviteValid()
                ? o.createElement(S, { controller: this.props.controller })
                : o.createElement(b, { controller: this.props.controller })
            );
          }),
          (t = c.c([l.a], t))
        );
      })(o.Component),
      S = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this;
          return (e.m_bTriedToLaunchSteam = !1), e;
        }
        return (
          c.d(e, t),
          (e.prototype.LaunchWebChat = function() {
            this.props.controller.LaunchWebChat();
          }),
          (e.prototype.OpenInSteamIgnoreAccount = function() {
            this.props.controller.LaunchSteamIgnoreAccount();
          }),
          (e.prototype.LaunchSteamClient = function() {
            var e = this;
            this.props.controller.ForceLaunchSteamClient(),
              window.setTimeout(function() {
                e.m_bTriedToLaunchSteam = !0;
              }, 1e3);
          }),
          (e.prototype.IsMobileDevice = function() {
            switch (new _.UAParser(navigator.userAgent).getResult().os.name) {
              case "iOS":
              case "Android":
              case "BlackBerry":
                return !0;
            }
            return !1;
          }),
          (e.prototype.render = function() {
            if (this.props.controller.BIsConnectingToClient())
              return o.createElement(
                "div",
                { className: "ChatMessageInvite RequestingInfo NoColumns" },
                o.createElement(
                  "div",
                  { className: "postedExpiredInvite" },
                  Object(s.b)("#bbcode_invite_requesting_info")
                )
              );
            var e = this.props.controller.GetConnectResults(),
              t = this.props.controller.GetInvite(),
              n = (i.a.COMMUNITY_BASE_URL, this.IsMobileDevice()),
              r = "inviteButton inviteButtonJoinChat";
            return (
              t.BIsVoiceChatInvite() && (r += " inviteButtonJoinVoice"),
              e.success
                ? o.createElement(
                    "div",
                    { className: "ChatMessageInvite NoColumns" },
                    o.createElement(
                      "div",
                      { className: "groupName" },
                      Object(s.b)("#InviteLanding_SentToSteam")
                    ),
                    o.createElement(
                      "div",
                      { className: "inviteLabel" },
                      Object(s.d)(
                        "#InviteLanding_SentToSteam_Desc",
                        o.createElement(
                          "a",
                          {
                            href: "javascript:void(0);",
                            onClick: this.LaunchWebChat
                          },
                          Object(s.b)(
                            "#InviteLanding_SentToSteam_Desc_LaunchWebChat"
                          )
                        )
                      )
                    )
                  )
                : e.account_mismatch
                ? o.createElement(
                    g,
                    { render: this.props.controller.GetPreRenderedHTML() },
                    o.createElement(
                      "div",
                      { className: "inviteLabel" },
                      Object(s.b)("#InviteLanding_AccountMismatch")
                    ),
                    o.createElement(
                      "div",
                      { className: "inviteLabel" },
                      o.createElement(
                        "button",
                        {
                          className: r,
                          type: "button",
                          onClick: this.OpenInSteamIgnoreAccount
                        },
                        Object(s.b)("#InviteLanding_OpenInSteam")
                      ),
                      o.createElement(
                        "button",
                        {
                          className: r,
                          type: "button",
                          onClick: this.LaunchWebChat
                        },
                        Object(s.b)("#InviteLanding_OpenInWebChat")
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
                      Object(s.b)("#InviteLanding_SentToSteam")
                    ),
                    o.createElement(
                      "div",
                      { className: "inviteLabel" },
                      Object(s.d)(
                        "#InviteLanding_SentToSteam_Desc",
                        o.createElement(
                          "a",
                          {
                            href: "javascript:void(0);",
                            onClick: this.LaunchWebChat
                          },
                          Object(s.b)(
                            "#InviteLanding_SentToSteam_Desc_LaunchWebChat"
                          )
                        )
                      )
                    )
                  )
                : o.createElement(
                    g,
                    { render: this.props.controller.GetPreRenderedHTML() },
                    o.createElement(
                      "div",
                      { className: "inviteLabel inviteLabelButtons" },
                      !n &&
                        o.createElement(
                          "button",
                          {
                            className: r,
                            type: "button",
                            onClick: this.LaunchSteamClient
                          },
                          Object(s.b)("#InviteLanding_OpenInSteam")
                        ),
                      o.createElement(
                        "button",
                        {
                          className: r,
                          type: "button",
                          onClick: this.LaunchWebChat
                        },
                        Object(s.b)("#InviteLanding_OpenInWebChat")
                      )
                    ),
                    this.m_bTriedToLaunchSteam &&
                      o.createElement(
                        "div",
                        { className: "inviteLabel inviteLabelLaunchPrompt" },
                        Object(s.b)("#InviteLanding_OpenInSteam_Help")
                      )
                  )
            );
          }),
          c.c([p.x], e.prototype, "m_bTriedToLaunchSteam", void 0),
          c.c([d.a], e.prototype, "LaunchWebChat", null),
          c.c([d.a], e.prototype, "OpenInSteamIgnoreAccount", null),
          c.c([d.a], e.prototype, "LaunchSteamClient", null),
          (e = c.c([l.a], e))
        );
      })(o.Component),
      b = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          c.d(t, e),
          (t.prototype.render = function() {
            return o.createElement(
              "div",
              { className: "ChatMessageInvite" },
              o.createElement(
                "div",
                { className: "postedExpiredInvite" },
                Object(s.b)("#InviteLanding_ExpiredOrInvalid")
              )
            );
          }),
          t
        );
      })(o.Component);
    function g(e) {
      return o.createElement(
        "div",
        { className: "ChatMessageInvite" },
        o.createElement("div", {
          className: "leftInviteContainer",
          dangerouslySetInnerHTML: { __html: e.render.strAvatarHTML }
        }),
        o.createElement(
          "div",
          { className: "rightInviteContainer" },
          o.createElement(
            "div",
            { className: "inviteLabel" },
            Object(s.d)(
              "#bbcode_invite_description",
              o.createElement("span", {
                dangerouslySetInnerHTML: {
                  __html: e.render.strInviterNameLinkHTML
                }
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
    window.AssertMsg = u.a;
    var y,
      I,
      L,
      C = new a.a();
    function k(e) {
      var t;
      try {
        t = JSON.parse(e.getAttribute("data-inviteinfo"));
      } catch (e) {}
      v.sm_rtTimeCur = t.rtTimeCur;
      var n = new v(t);
      r.render(o.createElement(E, { controller: n }), e);
    }
    (window.ClientConnectionAPI = C),
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
                  k(n);
                  break;
                default:
                  Object(u.a)(!1, 'unknown component: "' + r + '"');
              }
            }
          })();
      }),
      (window.LocalizationReady = function(e, t, n) {
        if ("english" !== t)
          "friendsui" == e ? (y = n) : "shared" == e && (I = n);
        else if ("shared" == e) L = n;
        else {
          var r = void 0,
            o = null,
            i = void 0,
            a = null;
          void 0 !== y ? ((r = y), (o = n)) : (r = n),
            void 0 !== I ? ((i = I), (a = L)) : (i = L),
            s.a.InitFromObjects(r, o, i, a),
            (L = I = y = void 0);
        }
      });
  },
  "s+DT": function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return o;
    });
    var r = n("2lpH"),
      a = n.n(r),
      i = n("0N1H"),
      s = n("1n9R"),
      o = (function() {
        function o(e, t, n, r) {
          void 0 === e && (e = 0),
            e instanceof o
              ? (this.m_ulSteamID = e.m_ulSteamID)
              : "string" == typeof e
              ? (this.m_ulSteamID = a.a.fromString(e, !0))
              : t && n && void 0 !== r
              ? this.SetFromComponents(e, r, n, t)
              : (this.m_ulSteamID = e ? a.a.fromNumber(e, !0) : a.a.UZERO);
        }
        return (
          (o.InitFromAccountID = function(e) {
            return new o(e, s.b.EUNIVERSE, 1, i.n);
          }),
          (o.InitFromClanID = function(e) {
            return new o(e, s.b.EUNIVERSE, 7, 0);
          }),
          (o.prototype.GetAccountID = function() {
            return this.m_ulSteamID.getLowBitsUnsigned();
          }),
          (o.prototype.GetInstance = function() {
            return 1048575 & this.m_ulSteamID.getHighBitsUnsigned();
          }),
          (o.prototype.GetAccountType = function() {
            return (this.m_ulSteamID.getHighBitsUnsigned() >> 20) & 15;
          }),
          (o.prototype.GetUniverse = function() {
            return (this.m_ulSteamID.getHighBitsUnsigned() >> 24) & 255;
          }),
          (o.prototype.ConvertTo64BitString = function() {
            return this.m_ulSteamID.toString();
          }),
          (o.prototype.Render = function() {
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
          (o.prototype.BIsValid = function() {
            var e = this.GetAccountType();
            if (e <= 0 || 11 <= e) return !1;
            var t = this.GetUniverse();
            if (t <= 0 || 5 <= t) return !1;
            if (1 == e) {
              if (0 == this.GetAccountID() || this.GetInstance() > i.o)
                return !1;
            } else if (7 == e) {
              if (0 == this.GetAccountID() || 0 != this.GetInstance())
                return !1;
            } else if (3 == e && 0 == this.GetAccountID()) return !1;
            return !0;
          }),
          (o.prototype.BIsIndividualAccount = function() {
            return 1 == this.GetAccountType();
          }),
          (o.prototype.BIsClanAccount = function() {
            return 7 == this.GetAccountType();
          }),
          (o.prototype.SetAccountID = function(e) {
            this.m_ulSteamID = new a.a(
              e,
              this.m_ulSteamID.getHighBitsUnsigned(),
              !0
            );
          }),
          (o.prototype.SetInstance = function(e) {
            this.SetFromComponents(
              this.GetAccountID(),
              e,
              this.GetAccountType(),
              this.GetUniverse()
            );
          }),
          (o.prototype.SetAccountType = function(e) {
            this.SetFromComponents(
              this.GetAccountID(),
              this.GetInstance(),
              e,
              this.GetUniverse()
            );
          }),
          (o.prototype.SetUniverse = function(e) {
            this.SetFromComponents(
              this.GetAccountID(),
              this.GetInstance(),
              this.GetAccountType(),
              e
            );
          }),
          (o.prototype.SetFromComponents = function(e, t, n, r) {
            var o = ((255 & r) << 24) + ((15 & n) << 20) + (1048575 & t),
              i = 4294967295 & e;
            this.m_ulSteamID = new a.a(i, o, !0);
          }),
          o
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
        return r.f;
      }),
      n.d(t, "c", function() {
        return r.e;
      }),
      n.d(t, "b", function() {
        return r.d;
      });
  },
  ujHl: function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return r;
    }),
      n.d(t, "b", function() {
        return o;
      });
    var r = {
      PerYear: 31536e3,
      PerMonth: 2628e3,
      PerWeek: 604800,
      PerDay: 86400,
      PerHour: 3600,
      PerMinute: 60
    };
    function o(t) {
      return new Promise(function(e) {
        return setTimeout(e, t);
      });
    }
  }
});
