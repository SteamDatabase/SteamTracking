/*! This file includes third-party software, governed by the licenses described here: https://steamcommunity.com/public/javascript/webui/chathelpers.licenses.txt */

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
!(function(u) {
  function e(e) {
    for (
      var t, n, o = e[0], r = e[1], i = e[2], a = 0, s = [];
      a < o.length;
      a++
    )
      (n = o[a]), p[n] && s.push(p[n][0]), (p[n] = 0);
    for (t in r) Object.prototype.hasOwnProperty.call(r, t) && (u[t] = r[t]);
    for (m && m(e); s.length; ) s.shift()();
    return l.push.apply(l, i || []), c();
  }
  function c() {
    for (var e, t = 0; t < l.length; t++) {
      for (var n = l[t], o = !0, r = 1; r < n.length; r++) {
        var i = n[r];
        0 !== p[i] && (o = !1);
      }
      o && (l.splice(t--, 1), (e = a((a.s = n[0]))));
    }
    return e;
  }
  var n = {},
    p = { 1: 0 },
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
        for (var o in t)
          a.d(
            n,
            o,
            function(e) {
              return t[e];
            }.bind(null, o)
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
    o = t.push.bind(t);
  (t.push = e), (t = t.slice());
  for (var r = 0; r < t.length; r++) e(t[r]);
  var m = o;
  l.push(["qM/t", 0]), c();
})({
  "/7KC": function(e, t, n) {
    "use strict";
    function o(e, t) {
      return (
        (e = Math.ceil(e)),
        (t = Math.floor(t)),
        Math.floor(Math.random() * (t - e + 1)) + e
      );
    }
    function r(e, t, n) {
      return Math.max(t, Math.min(n, e));
    }
    function i(e, t, n, o, r) {
      return o + (r - o) * (e - t) / (n - t);
    }
    n.d(t, "b", function() {
      return o;
    }),
      n.d(t, "a", function() {
        return r;
      }),
      n.d(t, "c", function() {
        return i;
      });
  },
  "0N1H": function(e, t, n) {
    "use strict";
    function o(e) {
      return 3 == e || 6 == e;
    }
    function r(e) {
      return 5 == e || 6 == e;
    }
    n.d(t, "b", function() {
      return o;
    }),
      n.d(t, "a", function() {
        return r;
      }),
      n.d(t, "m", function() {
        return c;
      }),
      n.d(t, "n", function() {
        return p;
      }),
      n.d(t, "f", function() {
        return l;
      }),
      n.d(t, "g", function() {
        return m;
      }),
      n.d(t, "l", function() {
        return h;
      }),
      n.d(t, "h", function() {
        return d;
      }),
      n.d(t, "i", function() {
        return _;
      }),
      n.d(t, "k", function() {
        return f;
      }),
      n.d(t, "j", function() {
        return v;
      }),
      n.d(t, "c", function() {
        return E;
      }),
      n.d(t, "e", function() {
        return S;
      }),
      n.d(t, "d", function() {
        return b;
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
      (a[(a.k_EDLCReleaseEvent = 15)] = "k_EDLCReleaseEvent"),
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
      (a[(a.k_EInGameContentReleaseEvent = 30)] =
        "k_EInGameContentReleaseEvent"),
      (a[(a.k_EFreeTrial = 31)] = "k_EFreeTrial"),
      (a[(a.k_ESeasonRelease = 32)] = "k_ESeasonRelease"),
      (a[(a.k_ESeasonUpdate = 33)] = "k_ESeasonUpdate"),
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
        "k_ELaunchSource_GameActionJoinParty");
  },
  "1VtQ": function(e, t, n) {
    "use strict";
    function o(e, t, n) {
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
    function r(e, t, n) {
      return [e, t, n];
    }
    n.d(t, "a", function() {
      return o;
    }),
      n.d(t, "b", function() {
        return r;
      });
  },
  "1n9R": function(e, t, n) {
    "use strict";
    n("mrSG");
    var o = n("/7KC");
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
        return p;
      }),
      n.d(t, "e", function() {
        return l;
      }),
      n.d(t, "d", function() {
        return m;
      });
    var r,
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
        IN_CLIENT: !1,
        USE_POPUPS: !1,
        IN_MOBILE: !1,
        IN_TENFOOT: !1,
        WEBAPI_BASE_URL: "",
        TOKEN_URL: "",
        BUILD_TIMESTAMP: 0,
        PAGE_TIMESTAMP: 0,
        get SESSIONID() {
          return (function() {
            if (!a()) return r || (r = p()), r;
            var e = (function(e) {
              if (!a() || !window.document.cookie) return null;
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
        is_support: !1
      },
      u = { steamid: "" },
      c = "webui_config";
    function p() {
      var e = (function() {
        for (var e = "", t = 0; t < 24; t++)
          e += Object(o.b)(0, 35).toString(36);
        return e;
      })();
      return (
        (function(e, t, n, o) {
          if (a()) {
            o || (o = "/");
            var r = "";
            if (void 0 !== n && n) {
              var i = new Date();
              i.setTime(i.getTime() + 864e5 * n),
                (r = "; expires=" + i.toUTCString());
            }
            document.cookie =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(t) +
              r +
              ";path=" +
              o;
          }
        })("sessionid", e, 0),
        e
      );
    }
    function l(e) {
      void 0 === e && (e = c);
      var t = m("config", e);
      t && (delete t.SESSIONID, Object.assign(i, t));
      var n = m("userinfo", e);
      n && Object.assign(s, n);
    }
    function m(e, t) {
      void 0 === t && (t = c);
      var n = document.getElementById(t);
      if (n)
        try {
          return JSON.parse(n.getAttribute("data-" + e) || "");
        } catch (e) {
          console.error("Failed to parse config", e);
        }
      else console.error("Missing config element #" + t);
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
    var o = n("mrSG"),
      r = n("2vnA"),
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
            return this.m_rtTimeExpires == i.d;
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
          (e.prototype.InitDirectInvite = function(e, t, n, o) {
            void 0 === n && (n = !1),
              void 0 === o && (o = void 0),
              (this.m_ulChatRoomGroupID = e),
              (this.m_ulChatID = t),
              (this.m_bIsBanned = n),
              (this.m_rtKickExpires = o),
              (this.m_rtTimeExpires = i.d),
              (this.m_bValid = !0),
              (this.m_bReady = !0);
          }),
          o.c([r.x], e.prototype, "m_bReady", void 0),
          o.c([r.g], e.prototype, "InitInvalid", null),
          o.c([r.g], e.prototype, "InitDirectInvite", null),
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
      o,
      r = n("mrSG"),
      i = n("2vnA"),
      a = n("i8i4"),
      s = n("UqDm"),
      c = n("WpBz"),
      p = n("1VtQ");
    ((o = u || (u = {}))[(o.Minimized = 1)] = "Minimized"),
      (o[(o.Hidden = 2)] = "Hidden"),
      (o[(o.Tooltip = 4)] = "Tooltip"),
      (o[(o.ContextMenu = 8)] = "ContextMenu"),
      (o[(o.Resizable = 16)] = "Resizable");
    var l = (function() {
        function e(e, t) {
          (this.m_rgLoadingLinks = []), (this.m_rgLoadingLinks = []);
          for (
            var n = e.document.getElementsByTagName("link"), o = 0;
            o < n.length;
            o++
          ) {
            var r = n[o];
            r.addEventListener("load", this.OnLinkLoad),
              this.m_rgLoadingLinks.push(r);
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
          r.c([p.a], e.prototype, "OnLinkLoad", null),
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
              o = this;
            void 0 === e && (e = !0),
              void 0 === t && (t = !1),
              window.SteamClient &&
                (this.m_rgParams.eCreationFlags |= u.Hidden),
              this.m_rgParams.eCreationFlags & u.Tooltip && (e = !1),
              this.BIsValid() &&
                (this.BIsClosed()
                  ? ((this.m_popup = void 0), (this.m_element = void 0))
                  : e && this.Focus(t));
            var r,
              i,
              a,
              s = _.GetExistingPopup(this.m_strName);
            (s && !this.m_rgParams.replace_existing_popup) ||
              ((this.m_rgParams = this.UpdateParamsBeforeShow(this.m_rgParams)),
              s
                ? ((i = s.m_element),
                  (r = s.m_popup),
                  s.ReleasePopup(),
                  (a = s.m_renderWhenReady),
                  _.RemoveTrackedPopup(s),
                  r.removeEventListener("beforeunload", s.OnBeforeUnloadEvent),
                  r.removeEventListener("unload", s.OnUnload),
                  r.removeEventListener("resize", s.OnResizeEvent),
                  r.removeEventListener("focus", this.OnFocusInternal),
                  r.removeEventListener("blur", this.OnBlurInternal),
                  r.removeEventListener("drop", s.OnDrop),
                  r.removeEventListener("dragover", s.OnDragOver),
                  r.removeEventListener("message", this.OnMessage))
                : ((r = (n = d.CreatePopup(this.m_strName, this.m_rgParams))
                    .popup),
                  (i = n.element),
                  (a = new l(r, i))),
              r &&
                i &&
                ((r.document.title = this.m_strTitle),
                r.addEventListener("beforeunload", this.OnBeforeUnloadEvent),
                r.addEventListener("unload", this.OnUnload),
                r.addEventListener("resize", this.OnResizeEvent),
                r.addEventListener("focus", this.OnFocusInternal),
                r.addEventListener("blur", this.OnBlurInternal),
                r.addEventListener("drop", this.OnDrop),
                r.addEventListener("dragover", this.OnDragOver),
                r.addEventListener("message", this.OnMessage),
                (this.m_popup = r),
                (this.m_element = i),
                (this.m_renderWhenReady = a),
                this.m_renderWhenReady.SetTarget(function() {
                  return o.RenderInternal(o.m_popup, o.m_element, e);
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
          r.c([i.x], e.prototype, "m_bFocused", void 0),
          r.c([p.a], e.prototype, "OnMessage", null),
          r.c([p.a], e.prototype, "OnResizeEvent", null),
          r.c([p.a], e.prototype, "OnBeforeUnloadEvent", null),
          r.c([p.a], e.prototype, "OnUnload", null),
          r.c([p.a], e.prototype, "OnFocusInternal", null),
          r.c([p.a], e.prototype, "OnBlurInternal", null),
          r.c([i.i], e.prototype, "focused", null),
          e
        );
      })(),
      h = (function(i) {
        function e(e, t, n, o) {
          var r = i.call(this, e, n) || this;
          return r.SetSavedDimensionsKey(t), (r.m_bExpires = o), r;
        }
        return (
          r.d(e, i),
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
              var o = this.GetSavedDimensionsKey();
              this.m_popup.setTimeout(function() {
                n.GetWindowRestoreDetails().then(function(e) {
                  var t =
                    n.m_strInitialRestoreDetails == e &&
                    o == n.m_strInitialSavedDimensionsKey;
                  n.m_popup &&
                    n.m_strSavedDimensionsKey &&
                    e &&
                    !t &&
                    (_.SetRestoreDetails(o, e, n.m_bExpires),
                    (n.m_rgParams.strRestoreDetails = e),
                    (n.m_strInitialSavedDimensionsKey = o),
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
          r.c([p.a], e.prototype, "QueryAndStoreWindowPosition", null),
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
                var o = [];
                a.m_mapPopups.forEach(function(e) {
                  e.BIsValid() && !e.BIsClosed() && o.push(e);
                });
                for (var r = 0, i = o; r < i.length; r++) {
                  i[r].Close();
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
              o = n.width || 300,
              r = n.height || 300,
              i = t.title,
              a = "width=" + o + ",height=" + r;
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
                    var o = null,
                      r = Date.now(),
                      i = 0,
                      a = Array.from(this.m_mapRestoreDetails.keys());
                    i < a.length;
                    i++
                  ) {
                    var s = a[i],
                      u = this.m_mapRestoreDetails.get(s);
                    u.last_used < r &&
                      u.bExpires &&
                      ((r = u.last_used), (o = s));
                  }
                  o && this.m_mapRestoreDetails.delete(o);
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
          r.c(
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
      return o;
    }),
      n.d(t, "c", function() {
        return r;
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
    function o(e, t, n) {
      t < 0 ||
        n < 0 ||
        (n >= e.length && (e[n] = void 0), e.splice(n, 0, e.splice(t, 1)[0]));
    }
    function r(e, t) {
      return i(e, function(e) {
        return t == e;
      });
    }
    function i(e, t) {
      var n = e.findIndex(t);
      return 0 <= n && (e.splice(n, 1), !0);
    }
    function a(e, r) {
      return e.reduce(function(e, t, n, o) {
        return e + (r(t, n, o) ? 1 : 0);
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
      for (var o = 0, r = e.length - 1; o <= r; ) {
        var i = Math.floor((o + r) / 2),
          a = n(e[i], t);
        if (a < 0) o = i + 1;
        else if (0 < a) r = i - 1;
        else {
          if (r == i) return i;
          if (i == o) return i < r && n(t, e[i + 1]) < 0 ? i : i + 1;
          o = i;
        }
      }
      return r;
    }
    function p(e, t, n) {
      var o = c(e, t, n);
      e.splice(o + 1, 0, t);
    }
  },
  WpBz: function(e, t, n) {
    "use strict";
    function o(a) {
      return function(e, r, t) {
        var i = t.value;
        t.value = function() {
          for (var e = this, t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
          var o = this[r + "_DebounceProperties"];
          void 0 === o &&
            (o = this[r + "_DebounceProperties"] = {
              hTimer: void 0,
              nPending: 0
            }),
            void 0 === o.hTimer
              ? (i.apply(this, t),
                (o.hTimer = window.setInterval(function() {
                  0 < o.nPending
                    ? (i.apply(e, t), (o.nPending = 0))
                    : (window.clearInterval(o.hTimer), (o.hTimer = void 0));
                }, a)))
              : (o.nPending += 1);
        };
      };
    }
    n.d(t, "a", function() {
      return o;
    });
  },
  XaMz: function(e, t, n) {
    "use strict";
    function o(e, t) {
      for (var n = [], o = 2; o < arguments.length; o++)
        n[o - 2] = arguments[o];
      console.assert
        ? 0 == n.length
          ? console.assert(!!e, t)
          : console.assert.apply(console, [!!e, t].concat(n))
        : e || console.warn.apply(console, [t].concat(n));
    }
    n.d(t, "a", function() {
      return o;
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
    var o = n("tkkQ"),
      r = { success: !0, result: 1 },
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
                return r;
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
            var o = this;
            if (this.m_mapCacheSubscribedApp.has(n))
              return Promise.resolve(this.m_mapCacheSubscribedApp.get(n));
            var e = { message: "IsSubscribedApp", appid: n };
            return this.GenericEResultCall(e).then(function(e) {
              if (!e.connect_failed) {
                var t = 1 == e.result;
                return o.m_mapCacheSubscribedApp.set(n, t), t;
              }
            });
          }),
          (e.prototype.ViewGameInfoForSteamID = function(e) {
            var t = { message: "ViewGameInfoForSteamID", steamid: e };
            return this.GenericEResultCall(t);
          }),
          (e.prototype.BClientAccountMatches = function() {
            return (
              !o.d.logged_in ||
              o.d.accountid == this.m_connection.ClientInfo.unAccountID
            );
          }),
          (e.prototype.GenericEResultCall = function(e) {
            var t = this;
            return this.m_connection
              .Connect()
              .then(function() {
                return t.m_bAllowAccountMismatch || t.BClientAccountMatches()
                  ? t.m_connection.SendMsgAndAwaitResponse(e).then(function(e) {
                      return 1 === e.success ? r : t.FailureResult(e.success);
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
          (e.prototype.SendMsgAndAwaitResponse = function(o) {
            var r = this;
            return new Promise(function(e, t) {
              var n = r.m_iCallSeq++;
              r.BSendMsg(o, n)
                ? r.m_mapWaitingCallbacks.set(n, {
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
              universe: o.a.EUNIVERSE,
              accountid: o.d.accountid
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
            var o = this;
            if (this.m_bReady && this.m_socket.readyState == WebSocket.OPEN)
              return Promise.resolve();
            if (this.m_promiseConnect) return this.m_promiseConnect;
            var e = new Promise(function(t, n) {
              try {
                o.m_socket = new WebSocket(
                  "ws://127.0.0.1:27060/clientsocket/"
                );
              } catch (e) {
                return (o.m_bSecurityException = !0), void n(e);
              }
              (o.m_socket.onerror = function(e) {
                n();
              }),
                (o.m_socket.onmessage = o.OnSocketMessage.bind(o)),
                (o.m_socket.onopen = function(e) {
                  o
                    .SendMsgAndAwaitResponse({ message: "GetClientInfo" })
                    .then(function(e) {
                      1 == e.success
                        ? ((o.m_ClientInfo.ulVersion = e.clientversion),
                          (o.m_ClientInfo.bFriendsUIEnabled = !!e.friendsui),
                          (o.m_ClientInfo.unAccountID = e.accountid),
                          e.supported_messages &&
                            (o.m_ClientInfo.rgSupportedMessages =
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
                  (o.m_bReady = !0), (o.m_promiseConnect = void 0);
                })
                .catch(function() {
                  (o.m_bClientConnectionFailed = !0),
                    (o.m_promiseConnect = void 0);
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
      return r;
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
    var o = function(e, t) {
      return (o =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(e, t) {
            e.__proto__ = t;
          }) ||
        function(e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        })(e, t);
    };
    function r(e, t) {
      function n() {
        this.constructor = e;
      }
      o(e, t),
        (e.prototype =
          null === t
            ? Object.create(t)
            : ((n.prototype = t.prototype), new n()));
    }
    var i = function() {
      return (i =
        Object.assign ||
        function(e) {
          for (var t, n = 1, o = arguments.length; n < o; n++)
            for (var r in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e;
        }).apply(this, arguments);
    };
    function a(e, t) {
      var n = {};
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) &&
          t.indexOf(o) < 0 &&
          (n[o] = e[o]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var r = 0;
        for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
          t.indexOf(o[r]) < 0 && (n[o[r]] = e[o[r]]);
      }
      return n;
    }
    function s(e, t, n, o) {
      var r,
        i = arguments.length,
        a =
          i < 3
            ? t
            : null === o ? (o = Object.getOwnPropertyDescriptor(t, n)) : o;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        a = Reflect.decorate(e, t, n, o);
      else
        for (var s = e.length - 1; 0 <= s; s--)
          (r = e[s]) &&
            (a = (i < 3 ? r(a) : 3 < i ? r(t, n, a) : r(t, n)) || a);
      return 3 < i && a && Object.defineProperty(t, n, a), a;
    }
    function u(i, a, s, u) {
      return new (s || (s = Promise))(function(e, t) {
        function n(e) {
          try {
            r(u.next(e));
          } catch (e) {
            t(e);
          }
        }
        function o(e) {
          try {
            r(u.throw(e));
          } catch (e) {
            t(e);
          }
        }
        function r(t) {
          t.done
            ? e(t.value)
            : new s(function(e) {
                e(t.value);
              }).then(n, o);
        }
        r((u = u.apply(i, a || [])).next());
      });
    }
    function c(n, o) {
      var r,
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
            if (r) throw new TypeError("Generator is already executing.");
            for (; s; )
              try {
                if (
                  ((r = 1),
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
                t = o.call(n, s);
              } catch (e) {
                (t = [6, e]), (i = 0);
              } finally {
                r = a = 0;
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
      return r;
    }),
      n.d(t, "d", function() {
        return o;
      }),
      n.d(t, "c", function() {
        return i;
      }),
      n.d(t, "e", function() {
        return a;
      }),
      n.d(t, "a", function() {
        return _;
      });
    var c = n("q1tI");
    n("XaMz");
    function r(e) {
      for (var o = [], t = 1; t < arguments.length; t++)
        o[t - 1] = arguments[t];
      var n = _.LocalizeString(e);
      return n
        ? (0 < o.length &&
            (n = n.replace(/%(\d+)\$s/g, function(e, t) {
              if (t <= o.length && 1 <= t) {
                var n = o[t - 1];
                return String(null == n ? "" : n);
              }
              return e;
            })),
          n)
        : e;
    }
    function o(e) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      var o = _.LocalizeString(e);
      if (!o) return e;
      for (var r, i = [], a = /(.*?)%(\d+)\$s/g, s = 0; (r = a.exec(o)); ) {
        (s += r[0].length), i.push(r[1]);
        var u = parseInt(r[2]);
        1 <= u && u <= t.length && i.push(t[u - 1]);
      }
      return (
        i.push(o.substr(s)),
        c.createElement.apply(c, [c.Fragment, null].concat(i))
      );
    }
    function i(e, t) {
      for (var n = [], o = 2; o < arguments.length; o++)
        n[o - 2] = arguments[o];
      return r.apply(
        void 0,
        1 === t || "1" === t ? [e, t].concat(n) : [e + "_Plural", t].concat(n)
      );
    }
    function a(e, t) {
      return void 0 === t && (t = !1), d(e, !t);
    }
    var s = 31536e3,
      u = 2628e3,
      p = 604800,
      l = 86400,
      m = 3600,
      h = 60;
    function d(e, t, n) {
      void 0 === t && (t = !1), void 0 === n && (n = !0);
      var o = t ? "#TimeSince_" : "#TimeInterval_";
      return 2 * s <= e
        ? r(o + "XYears", Math.floor(e / s))
        : s <= e
          ? 2 * u <= (e -= s)
            ? r(o + "1YearXMonths", Math.floor(e / u))
            : r(o + "1Year")
          : 2 * u <= e
            ? r(o + "XMonths", Math.floor(e / u))
            : 2 * p <= e
              ? r(o + "XWeeks", Math.floor(e / p))
              : p <= e
                ? r(o + "1Week", Math.floor(e / p))
                : 2 * l <= e
                  ? r(o + "XDays", Math.floor(e / l))
                  : l <= e
                    ? 2 * m <= (e -= l)
                      ? r(o + "1DayXHours", Math.floor(e / m))
                      : r(o + "1Day")
                    : 2 * m <= e
                      ? r(o + "XHours", Math.floor(e / m))
                      : m <= e
                        ? 2 * h <= (e -= m) && n
                          ? r(o + "1HourXMinutes", Math.floor(e / h))
                          : r(o + "1Hour")
                        : n
                          ? 2 * h <= e
                            ? r(o + "XMinutes", Math.floor(e / h))
                            : r(h <= e ? o + "1Minute" : o + "LessThanAMinute")
                          : r(o + "LessThanAnHour");
    }
    var _ = new ((function() {
      function e() {
        (this.m_mapTokens = new Map()), (this.m_mapFallbackTokens = new Map());
      }
      return (
        (e.prototype.InitFromObjects = function(n, o, r, i) {
          var a = this;
          this.m_mapTokens.clear(),
            Object.keys(r).forEach(function(e, t) {
              a.m_mapTokens.set(e, r[e]);
            }),
            Object.keys(n).forEach(function(e, t) {
              a.m_mapTokens.set(e, n[e]);
            }),
            o &&
              Object.keys(o).forEach(function(e, t) {
                a.m_mapTokens.has(e) || a.m_mapTokens.set(e, o[e]),
                  a.m_mapFallbackTokens.set(e, o[e]);
              }),
            i &&
              Object.keys(i).forEach(function(e, t) {
                a.m_mapTokens.has(e) || a.m_mapTokens.set(e, i[e]),
                  a.m_mapFallbackTokens.has(e) ||
                    a.m_mapFallbackTokens.set(e, i[e]);
              });
        }),
        (e.prototype.InitDirect = function(n) {
          var o = this;
          this.m_mapTokens.clear(),
            this.m_mapFallbackTokens.clear(),
            Object.keys(n).forEach(function(e, t) {
              o.m_mapTokens.set(e, n[e]);
            });
        }),
        (e.prototype.GetPreferredLocales = function() {
          var e = ["en-US"];
          return (
            navigator && navigator.languages && (e = navigator.languages), e
          );
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
    })())();
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
              var o = window.open("", "SteamWebChat", "");
              if (o) {
                var e = !1;
                try {
                  e = "about:blank" == o.location.href;
                } catch (e) {}
                if (e) {
                  if (n) {
                    var r = function(e) {
                      var t = i.a.COMMUNITY_BASE_URL.replace(
                        /(https?:\/\/[^/]*).*$/,
                        "$1"
                      );
                      e.source == o &&
                        "FriendsUIReady" == e.data &&
                        e.origin == t &&
                        (o.postMessage(n, i.a.COMMUNITY_BASE_URL),
                        window.removeEventListener("message", r));
                    };
                    window.addEventListener("message", r);
                  }
                  o.location.href = i.a.COMMUNITY_BASE_URL + "chat/";
                } else n && o.postMessage(n, i.a.COMMUNITY_BASE_URL);
                o.focus();
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
            return r.createElement(
              "div",
              { className: "InviteLandingRoot" },
              this.props.controller.BIsInviteValid()
                ? r.createElement(S, { controller: this.props.controller })
                : r.createElement(b, { controller: this.props.controller })
            );
          }),
          (t = c.c([l.a], t))
        );
      })(r.Component),
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
              return r.createElement(
                "div",
                { className: "ChatMessageInvite RequestingInfo NoColumns" },
                r.createElement(
                  "div",
                  { className: "postedExpiredInvite" },
                  Object(s.b)("#bbcode_invite_requesting_info")
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
                      Object(s.b)("#InviteLanding_SentToSteam")
                    ),
                    r.createElement(
                      "div",
                      { className: "inviteLabel" },
                      Object(s.d)(
                        "#InviteLanding_SentToSteam_Desc",
                        r.createElement(
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
                  ? r.createElement(
                      g,
                      { render: this.props.controller.GetPreRenderedHTML() },
                      r.createElement(
                        "div",
                        { className: "inviteLabel" },
                        Object(s.b)("#InviteLanding_AccountMismatch")
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
                          Object(s.b)("#InviteLanding_OpenInSteam")
                        ),
                        r.createElement(
                          "button",
                          {
                            className: o,
                            type: "button",
                            onClick: this.LaunchWebChat
                          },
                          Object(s.b)("#InviteLanding_OpenInWebChat")
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
                          Object(s.b)("#InviteLanding_SentToSteam")
                        ),
                        r.createElement(
                          "div",
                          { className: "inviteLabel" },
                          Object(s.d)(
                            "#InviteLanding_SentToSteam_Desc",
                            r.createElement(
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
                    : r.createElement(
                        g,
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
                              Object(s.b)("#InviteLanding_OpenInSteam")
                            ),
                          r.createElement(
                            "button",
                            {
                              className: o,
                              type: "button",
                              onClick: this.LaunchWebChat
                            },
                            Object(s.b)("#InviteLanding_OpenInWebChat")
                          )
                        ),
                        this.m_bTriedToLaunchSteam &&
                          r.createElement(
                            "div",
                            {
                              className: "inviteLabel inviteLabelLaunchPrompt"
                            },
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
      })(r.Component),
      b = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          c.d(t, e),
          (t.prototype.render = function() {
            return r.createElement(
              "div",
              { className: "ChatMessageInvite" },
              r.createElement(
                "div",
                { className: "postedExpiredInvite" },
                Object(s.b)("#InviteLanding_ExpiredOrInvalid")
              )
            );
          }),
          t
        );
      })(r.Component);
    function g(e) {
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
            Object(s.d)(
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
      o.render(r.createElement(E, { controller: n }), e);
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
                o = n.getAttribute("data-component");
              switch (o) {
                case "ChatInvite":
                  k(n);
                  break;
                default:
                  Object(u.a)(!1, 'unknown component: "' + o + '"');
              }
            }
          })();
      }),
      (window.LocalizationReady = function(e, t, n) {
        if ("english" !== t)
          "friendsui" == e ? (y = n) : "shared" == e && (I = n);
        else if ("shared" == e) L = n;
        else {
          var o = void 0,
            r = null,
            i = void 0,
            a = null;
          void 0 !== y ? ((o = y), (r = n)) : (o = n),
            void 0 !== I ? ((i = I), (a = L)) : (i = L),
            s.a.InitFromObjects(o, r, i, a),
            (L = I = y = void 0);
        }
      });
  },
  "s+DT": function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return r;
    });
    var o = n("2lpH"),
      a = n.n(o),
      i = n("0N1H"),
      s = n("1n9R"),
      u = n("XaMz"),
      r = (function() {
        function r(e, t, n, o) {
          void 0 === e && (e = 0),
            e instanceof r
              ? (this.m_ulSteamID = e.m_ulSteamID)
              : "string" == typeof e
                ? ((this.m_ulSteamID = a.a.fromString(e, !0)),
                  Object(u.a)(
                    0 != this.m_ulSteamID.getHighBits(),
                    "String " +
                      e +
                      " was provided as a steam ID as a string, but had no high bits set. This is likely actually an account ID or was meant to be passed as a number"
                  ))
                : t && n && void 0 !== o
                  ? this.SetFromComponents(e, o, n, t)
                  : (this.m_ulSteamID = e ? a.a.fromNumber(e, !0) : a.a.UZERO);
        }
        return (
          (r.InitFromAccountID = function(e) {
            return new r(e, s.b.EUNIVERSE, 1, i.m);
          }),
          (r.InitFromClanID = function(e) {
            return new r(e, s.b.EUNIVERSE, 7, 0);
          }),
          (r.prototype.GetAccountID = function() {
            return this.m_ulSteamID.getLowBitsUnsigned();
          }),
          (r.prototype.GetInstance = function() {
            return 1048575 & this.m_ulSteamID.getHighBitsUnsigned();
          }),
          (r.prototype.GetAccountType = function() {
            return (this.m_ulSteamID.getHighBitsUnsigned() >> 20) & 15;
          }),
          (r.prototype.GetUniverse = function() {
            return (this.m_ulSteamID.getHighBitsUnsigned() >> 24) & 255;
          }),
          (r.prototype.ConvertTo64BitString = function() {
            return this.m_ulSteamID.toString();
          }),
          (r.prototype.Render = function() {
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
          (r.prototype.BIsValid = function() {
            var e = this.GetAccountType();
            if (e <= 0 || 11 <= e) return !1;
            var t = this.GetUniverse();
            if (t <= 0 || 5 <= t) return !1;
            if (1 == e) {
              if (0 == this.GetAccountID() || this.GetInstance() > i.n)
                return !1;
            } else if (7 == e) {
              if (0 == this.GetAccountID() || 0 != this.GetInstance())
                return !1;
            } else if (3 == e && 0 == this.GetAccountID()) return !1;
            return !0;
          }),
          (r.prototype.BIsIndividualAccount = function() {
            return 1 == this.GetAccountType();
          }),
          (r.prototype.BIsClanAccount = function() {
            return 7 == this.GetAccountType();
          }),
          (r.prototype.SetAccountID = function(e) {
            this.m_ulSteamID = new a.a(
              e,
              this.m_ulSteamID.getHighBitsUnsigned(),
              !0
            );
          }),
          (r.prototype.SetInstance = function(e) {
            this.SetFromComponents(
              this.GetAccountID(),
              e,
              this.GetAccountType(),
              this.GetUniverse()
            );
          }),
          (r.prototype.SetAccountType = function(e) {
            this.SetFromComponents(
              this.GetAccountID(),
              this.GetInstance(),
              e,
              this.GetUniverse()
            );
          }),
          (r.prototype.SetUniverse = function(e) {
            this.SetFromComponents(
              this.GetAccountID(),
              this.GetInstance(),
              this.GetAccountType(),
              e
            );
          }),
          (r.prototype.SetFromComponents = function(e, t, n, o) {
            var r = ((255 & o) << 24) + ((15 & n) << 20) + (1048575 & t),
              i = 4294967295 & e;
            this.m_ulSteamID = new a.a(i, r, !0);
          }),
          r
        );
      })();
  },
  tkkQ: function(e, t, n) {
    "use strict";
    var o = n("1n9R");
    n.d(t, "a", function() {
      return o.b;
    }),
      n.d(t, "d", function() {
        return o.f;
      }),
      n.d(t, "c", function() {
        return o.e;
      }),
      n.d(t, "b", function() {
        return o.d;
      });
  }
});
