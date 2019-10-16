/*! This file includes third-party software, governed by the licenses described here: https://steamcommunity.com/public/javascript/webui/profile.licenses.txt */

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
!(function(s) {
  function e(e) {
    for (
      var t, n, r = e[0], o = e[1], i = e[2], c = 0, a = [];
      c < r.length;
      c++
    )
      (n = r[c]), u[n] && a.push(u[n][0]), (u[n] = 0);
    for (t in o) Object.prototype.hasOwnProperty.call(o, t) && (s[t] = o[t]);
    for (p && p(e); a.length; ) a.shift()();
    return m.push.apply(m, i || []), l();
  }
  function l() {
    for (var e, t = 0; t < m.length; t++) {
      for (var n = m[t], r = !0, o = 1; o < n.length; o++) {
        var i = n[o];
        0 !== u[i] && (r = !1);
      }
      r && (m.splice(t--, 1), (e = c((c.s = n[0]))));
    }
    return e;
  }
  var n = {},
    u = { 7: 0 },
    m = [];
  function c(e) {
    if (n[e]) return n[e].exports;
    var t = (n[e] = { i: e, l: !1, exports: {} });
    return s[e].call(t.exports, t, t.exports, c), (t.l = !0), t.exports;
  }
  (c.m = s),
    (c.c = n),
    (c.d = function(e, t, n) {
      c.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (c.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (c.t = function(t, e) {
      if ((1 & e && (t = c(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (c.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          c.d(
            n,
            r,
            function(e) {
              return t[e];
            }.bind(null, r)
          );
      return n;
    }),
    (c.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return c.d(t, "a", t), t;
    }),
    (c.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (c.p = "");
  var t = (window.webpackJsonp = window.webpackJsonp || []),
    r = t.push.bind(t);
  (t.push = e), (t = t.slice());
  for (var o = 0; o < t.length; o++) e(t[o]);
  var p = r;
  m.push(["WC1h", 0]), l();
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
  "/IDK": function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
      return o;
    }),
      n.d(t, "e", function() {
        return i;
      }),
      n.d(t, "d", function() {
        return c;
      }),
      n.d(t, "a", function() {
        return a;
      }),
      n.d(t, "p", function() {
        return s;
      }),
      n.d(t, "k", function() {
        return l;
      }),
      n.d(t, "h", function() {
        return u;
      }),
      n.d(t, "n", function() {
        return m;
      }),
      n.d(t, "m", function() {
        return p;
      }),
      n.d(t, "i", function() {
        return h;
      }),
      n.d(t, "j", function() {
        return d;
      }),
      n.d(t, "l", function() {
        return f;
      }),
      n.d(t, "b", function() {
        return v;
      }),
      n.d(t, "o", function() {
        return _;
      }),
      n.d(t, "g", function() {
        return y;
      }),
      n.d(t, "f", function() {
        return b;
      });
    var r = n("UqDm");
    n("XaMz");
    function o(e) {
      if (!(e.clientX || e.clientY || e.screenX || e.screenY)) return !0;
      if (e.relatedTarget) return !i(e.currentTarget, e.relatedTarget);
      var t = e.currentTarget.getBoundingClientRect();
      return (
        (e.clientX <= t.left ||
          e.clientX >= t.right ||
          e.clientY <= t.top ||
          e.clientY >= t.bottom) &&
        (console.log(
          e.clientX +
            " <= " +
            t.left +
            " || " +
            e.clientX +
            " >= " +
            t.right +
            " ||\n\t\t\t\t" +
            e.clientY +
            " <= " +
            t.top +
            " || " +
            e.clientY +
            " >= " +
            t.bottom
        ),
        !0)
      );
    }
    function i(e, t) {
      for (; t; ) {
        if (
          (t.parentNode.nodeType == Node.DOCUMENT_FRAGMENT_NODE &&
            (t = t.parentNode.host),
          t == e)
        )
          return !0;
        t = t.parentElement;
      }
      return !1;
    }
    function c(e, t) {
      for (; t; ) if ((t = t.parentElement) == e) return !0;
      return !1;
    }
    function a(e) {
      if (!window.getSelection) return !1;
      for (var t = window.getSelection(), n = 0, r = 0; r < t.rangeCount; r++) {
        var o = t.getRangeAt(r);
        if (o.startOffset != o.endOffset)
          i(e, o.commonAncestorContainer) && n++;
      }
      return 0 < t.rangeCount && t.rangeCount == n;
    }
    function s(e, t) {
      var n = e.offsetTop;
      e.offsetParent != t && (n -= t.offsetTop),
        n < t.scrollTop
          ? e.scrollIntoView(!0)
          : n + e.offsetHeight > t.scrollTop + t.offsetHeight &&
            e.scrollIntoView(!1);
    }
    function l(e, t, n) {
      var r = 0,
        o = 0;
      return (
        t < e.left ? (r = e.left - t) : t > e.right && (r = t - e.right),
        n < e.top ? (o = e.top - n) : n > e.bottom && (o = n - e.bottom),
        Math.sqrt(r * r + o * o)
      );
    }
    function u(e, t) {
      return {
        width: t.width,
        height: t.height,
        top: e.screenTop + t.top,
        bottom: e.screenTop + t.bottom,
        left: e.screenLeft + t.left,
        right: e.screenLeft + t.right
      };
    }
    function m(e) {
      var t = void 0;
      return (
        e && e.currentTarget && (t = e.currentTarget.ownerDocument.defaultView),
        t
      );
    }
    function p(e) {
      var t = void 0;
      return e && (t = e.ownerDocument.defaultView), t;
    }
    function h(e) {
      var t = document.createElement("textarea");
      (t.textContent = e),
        (t.style.position = "fixed"),
        document.body.appendChild(t),
        t.select();
      try {
        document.execCommand("copy");
      } catch (e) {
        console.warn("Copy to clipboard failed.", e);
      } finally {
        document.body.removeChild(t);
      }
    }
    function d(e) {
      var t = "steam://openurl/";
      e.startsWith(t) && (e = e.slice(t.length)), h(e);
    }
    function f(e) {
      return e
        ? 0 == e.clipboardData.files.length
          ? null
          : e.clipboardData.types.some(function(e) {
              return (
                ("text" == e || e.startsWith("text/")) && "text/html" !== e
              );
            })
          ? null
          : e.clipboardData.files[0]
        : null;
    }
    function v(e) {
      var t = e.ownerDocument;
      return (
        t.fullscreen ||
        t.webkitIsFullScreen ||
        t.mozFullScreen ||
        t.msFullscreenElement
      );
    }
    function _(e, t) {
      var n = e;
      n.requestFullscreen
        ? n.requestFullscreen()
        : n.webkitRequestFullscreen
        ? n.webkitRequestFullscreen()
        : t && t.webkitSetPresentationMode
        ? t.webkitSetPresentationMode("fullscreen")
        : n.mozRequestFullScreen
        ? n.mozRequestFullScreen()
        : n.msRequestFullscreen && n.msRequestFullscreen();
    }
    function y(e) {
      var t = e.ownerDocument;
      t.cancelFullscreen
        ? t.cancelFullscreen()
        : t.webkitCancelFullScreen
        ? t.webkitCancelFullScreen()
        : t.mozCancelFullScreen
        ? t.mozCancelFullScreen()
        : t.msExitFullscreen && t.msExitFullscreen();
    }
    var b = (function() {
      function e(e) {
        var i = this;
        (this.m_bNeedSort = !1),
          (this.m_bOffsetsInvalidated = !1),
          (this.m_rgChildren = []),
          (this.RecomputeVisibility = function() {
            var e = i.m_elParent.scrollTop - i.m_nBufferPx,
              t =
                i.m_elParent.scrollTop +
                i.m_elParent.clientHeight +
                i.m_nBufferPx;
            i.EnsureSort();
            for (var n = 0, r = i.m_rgChildren; n < r.length; n++) {
              var o = r[n];
              if (!(o.yOffset < e)) {
                if (o.yOffset > t) break;
                o.fnCallback(!0);
              }
            }
            (i.m_nLastYMin = e), (i.m_nLastYMax = t);
          }),
          (this.m_nBufferPx = e);
      }
      return (
        (e.prototype.SetParent = function(e) {
          this.m_elParent &&
            this.m_elParent.ownerDocument.defaultView.removeEventListener(
              "resize",
              this.RecomputeVisibility
            ),
            (this.m_elParent = e),
            this.m_elParent &&
              this.m_elParent.ownerDocument.defaultView.addEventListener(
                "resize",
                this.RecomputeVisibility
              );
        }),
        (e.prototype.InvalidateOffsetsAndRecompute = function() {
          (this.m_bOffsetsInvalidated = !0), this.RecomputeVisibility();
        }),
        (e.prototype.EnsureSort = function() {
          if (this.m_bOffsetsInvalidated) {
            for (var e = 0; e < this.m_rgChildren.length; e++)
              this.m_rgChildren[e].yOffset = this.m_rgChildren[
                e
              ].element.offsetTop;
            this.m_bOffsetsInvalidated = !1;
          }
          this.m_bNeedSort &&
            (this.m_rgChildren.sort(function(e, t) {
              return e.yOffset - t.yOffset;
            }),
            (this.m_bNeedSort = !1));
        }),
        (e.prototype.RegisterChild = function(e, t) {
          this.m_rgChildren.push({
            element: e,
            yOffset: e.offsetTop,
            fnCallback: t
          }),
            (this.m_bNeedSort = !0),
            void 0 !== this.m_nLastYMin &&
              void 0 !== this.m_nLastYMax &&
              e.offsetTop >= this.m_nLastYMin &&
              e.offsetTop <= this.m_nLastYMax &&
              t(!0);
        }),
        (e.prototype.UnregisterChild = function(t) {
          r.d(this.m_rgChildren, function(e) {
            return e.element == t;
          });
        }),
        e
      );
    })();
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
      n.d(t, "o", function() {
        return a;
      }),
      n.d(t, "p", function() {
        return s;
      }),
      n.d(t, "h", function() {
        return l;
      }),
      n.d(t, "i", function() {
        return u;
      }),
      n.d(t, "n", function() {
        return m;
      }),
      n.d(t, "j", function() {
        return p;
      }),
      n.d(t, "k", function() {
        return h;
      }),
      n.d(t, "m", function() {
        return d;
      }),
      n.d(t, "l", function() {
        return f;
      }),
      n.d(t, "e", function() {
        return v;
      }),
      n.d(t, "g", function() {
        return _;
      }),
      n.d(t, "f", function() {
        return y;
      }),
      n.d(t, "c", function() {
        return b;
      }),
      n.d(t, "d", function() {
        return E;
      });
    var i,
      c,
      a = 1,
      s = 4,
      l = 750,
      u = 799,
      m = 7,
      p = 250820,
      h = 330050,
      d = 358510,
      f = 366490,
      v = "18446744073709551615",
      _ = 0,
      y = 2147483647;
    function b(e, t) {
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
          return "korean";
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
        default:
          return t;
      }
    }
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
    ((c = i || (i = {}))[(c.k_EOtherEvent = 1)] = "k_EOtherEvent"),
      (c[(c.k_EGameEvent = 2)] = "k_EGameEvent"),
      (c[(c.k_EPartyEvent = 3)] = "k_EPartyEvent"),
      (c[(c.k_EMeetingEvent = 4)] = "k_EMeetingEvent"),
      (c[(c.k_ESpecialCauseEvent = 5)] = "k_ESpecialCauseEvent"),
      (c[(c.k_EMusicAndArtsEvent = 6)] = "k_EMusicAndArtsEvent"),
      (c[(c.k_ESportsEvent = 7)] = "k_ESportsEvent"),
      (c[(c.k_ETripEvent = 8)] = "k_ETripEvent"),
      (c[(c.k_EChatEvent = 9)] = "k_EChatEvent"),
      (c[(c.k_EGameReleaseEvent = 10)] = "k_EGameReleaseEvent"),
      (c[(c.k_EBroadcastEvent = 11)] = "k_EBroadcastEvent"),
      (c[(c.k_ESmallUpdateEvent = 12)] = "k_ESmallUpdateEvent"),
      (c[(c.k_ERegularUpdateEvent = 13)] = "k_ERegularUpdateEvent"),
      (c[(c.k_EMajorUpdateEvent = 14)] = "k_EMajorUpdateEvent"),
      (c[(c.k_EFutureReleaseEvent = 16)] = "k_EFutureReleaseEvent"),
      (c[(c.k_EESportTournamentStreamEvent = 17)] =
        "k_EESportTournamentStreamEvent"),
      (c[(c.k_EDevStreamEvent = 18)] = "k_EDevStreamEvent"),
      (c[(c.k_EFamousStreamEvent = 19)] = "k_EFamousStreamEvent"),
      (c[(c.k_EGameSalesEvent = 20)] = "k_EGameSalesEvent"),
      (c[(c.k_EGameItemSalesEvent = 21)] = "k_EGameItemSalesEvent"),
      (c[(c.k_EInGameBonusXPEvent = 22)] = "k_EInGameBonusXPEvent"),
      (c[(c.k_EInGameLootEvent = 23)] = "k_EInGameLootEvent"),
      (c[(c.k_EInGamePerksEvent = 24)] = "k_EInGamePerksEvent"),
      (c[(c.k_EInGameChallengeEvent = 25)] = "k_EInGameChallengeEvent"),
      (c[(c.k_EInGameContestEvent = 26)] = "k_EInGameContestEvent"),
      (c[(c.k_EIRLEvent = 27)] = "k_EIRLEvent"),
      (c[(c.k_ENewsEvent = 28)] = "k_ENewsEvent"),
      (c[(c.k_EBetaReleaseEvent = 29)] = "k_EBetaReleaseEvent"),
      (c[(c.k_EFreeTrial = 31)] = "k_EFreeTrial"),
      (c[(c.k_ESeasonRelease = 32)] = "k_ESeasonRelease"),
      (c[(c.k_ECrosspostEvent = 34)] = "k_ECrosspostEvent");
    var g, w;
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
      i.k_ECrosspostEvent;
    ((w = g || (g = {}))[(w.k_ELaunchSource_None = 0)] =
      "k_ELaunchSource_None"),
      (w[(w.k_ELaunchSource_2ftLibraryDetails = 100)] =
        "k_ELaunchSource_2ftLibraryDetails"),
      (w[(w.k_ELaunchSource_2ftLibraryListView = 101)] =
        "k_ELaunchSource_2ftLibraryListView"),
      (w[(w.k_ELaunchSource_2ftLibraryGrid = 103)] =
        "k_ELaunchSource_2ftLibraryGrid"),
      (w[(w.k_ELaunchSource_InstallSubComplete = 104)] =
        "k_ELaunchSource_InstallSubComplete"),
      (w[(w.k_ELaunchSource_DownloadsPage = 105)] =
        "k_ELaunchSource_DownloadsPage"),
      (w[(w.k_ELaunchSource_RemoteClientStartStreaming = 106)] =
        "k_ELaunchSource_RemoteClientStartStreaming"),
      (w[(w.k_ELaunchSource_2ftMiniModeList = 107)] =
        "k_ELaunchSource_2ftMiniModeList"),
      (w[(w.k_ELaunchSource_10ft = 200)] = "k_ELaunchSource_10ft"),
      (w[(w.k_ELaunchSource_DashAppLaunchCmdLine = 300)] =
        "k_ELaunchSource_DashAppLaunchCmdLine"),
      (w[(w.k_ELaunchSource_DashGameIdLaunchCmdLine = 301)] =
        "k_ELaunchSource_DashGameIdLaunchCmdLine"),
      (w[(w.k_ELaunchSource_RunByGameDir = 302)] =
        "k_ELaunchSource_RunByGameDir"),
      (w[(w.k_ELaunchSource_SubCmdRunDashGame = 303)] =
        "k_ELaunchSource_SubCmdRunDashGame"),
      (w[(w.k_ELaunchSource_SteamURL_Launch = 400)] =
        "k_ELaunchSource_SteamURL_Launch"),
      (w[(w.k_ELaunchSource_SteamURL_Run = 401)] =
        "k_ELaunchSource_SteamURL_Run"),
      (w[(w.k_ELaunchSource_SteamURL_JoinLobby = 402)] =
        "k_ELaunchSource_SteamURL_JoinLobby"),
      (w[(w.k_ELaunchSource_SteamURL_RunGame = 403)] =
        "k_ELaunchSource_SteamURL_RunGame"),
      (w[(w.k_ELaunchSource_SteamURL_RunGameIdOrJumplist = 404)] =
        "k_ELaunchSource_SteamURL_RunGameIdOrJumplist"),
      (w[(w.k_ELaunchSource_SteamURL_RunSafe = 405)] =
        "k_ELaunchSource_SteamURL_RunSafe"),
      (w[(w.k_ELaunchSource_TrayIcon = 500)] = "k_ELaunchSource_TrayIcon"),
      (w[(w.k_ELaunchSource_LibraryLeftColumnContextMenu = 600)] =
        "k_ELaunchSource_LibraryLeftColumnContextMenu"),
      (w[(w.k_ELaunchSource_LibraryLeftColumnDoubleClick = 601)] =
        "k_ELaunchSource_LibraryLeftColumnDoubleClick"),
      (w[(w.k_ELaunchSource_Dota2Launcher = 700)] =
        "k_ELaunchSource_Dota2Launcher"),
      (w[(w.k_ELaunchSource_IRunGameEngine = 800)] =
        "k_ELaunchSource_IRunGameEngine"),
      (w[(w.k_ELaunchSource_DRMFailureResponse = 801)] =
        "k_ELaunchSource_DRMFailureResponse"),
      (w[(w.k_ELaunchSource_DRMDataRequest = 802)] =
        "k_ELaunchSource_DRMDataRequest"),
      (w[(w.k_ELaunchSource_CloudFilePanel = 803)] =
        "k_ELaunchSource_CloudFilePanel"),
      (w[(w.k_ELaunchSource_DiscoveredAlreadyRunning = 804)] =
        "k_ELaunchSource_DiscoveredAlreadyRunning"),
      (w[(w.k_ELaunchSource_GameActionJoinParty = 900)] =
        "k_ELaunchSource_GameActionJoinParty"),
      (w[(w.k_ELaunchSource_AppPortraitContextMenu = 1e3)] =
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
    function c() {
      return !!window.document;
    }
    n.d(t, "b", function() {
      return i;
    }),
      n.d(t, "f", function() {
        return a;
      }),
      n.d(t, "a", function() {
        return s;
      }),
      n.d(t, "c", function() {
        return m;
      }),
      n.d(t, "e", function() {
        return p;
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
        LOCAL_HOSTNAME: "",
        WEBAPI_BASE_URL: "",
        TOKEN_URL: "",
        BUILD_TIMESTAMP: 0,
        PAGE_TIMESTAMP: 0,
        get SESSIONID() {
          return (function() {
            if (!c()) return o || (o = m()), o;
            var e = (function(e) {
              if (!c() || !window.document.cookie) return null;
              var t = document.cookie.match("(^|; )" + e + "=([^;]*)");
              return t && t[2] ? decodeURIComponent(t[2]) : null;
            })("sessionid");
            e || (e = m());
            return e;
          })();
        },
        get BASE_URL() {
          var e = window.location.href;
          return e.startsWith(this.STORE_BASE_URL)
            ? this.STORE_BASE_URL
            : e.startsWith(this.COMMUNITY_BASE_URL)
            ? this.COMMUNITY_BASE_URL
            : e.startsWith(this.PARTNER_BASE_URL)
            ? this.PARTNER_BASE_URL
            : e.startsWith(this.HELP_BASE_URL)
            ? this.HELP_BASE_URL
            : "";
        },
        FRIENDSUI_BETA: !1,
        STEAM_TV: !1,
        DEV_MODE: !1,
        OFFLINE_MODE: !1
      },
      a = {
        logged_in: !1,
        steamid: "",
        accountid: 0,
        account_name: "",
        token: void 0,
        token_use_id: void 0,
        webapi_token: "",
        authwgtoken: "",
        is_support: !1,
        short_url: ""
      },
      s = { steamid: "", clanid: 0, listid: 0 },
      l = {
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
      u = "webui_config";
    function m() {
      var e = (function() {
        for (var e = "", t = 0; t < 24; t++)
          e += Object(r.b)(0, 35).toString(36);
        return e;
      })();
      return (
        (function(e, t, n, r) {
          if (c()) {
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
    function p(e) {
      void 0 === e && (e = u);
      var t = h("config", e);
      t && (delete t.SESSIONID, Object.assign(i, t));
      var n = h("userinfo", e);
      n && Object.assign(a, n);
      var r = h("broadcast", e);
      r && Object.assign(s, r);
      var o = h("community", e);
      o && Object.assign(l, o);
    }
    function h(e, t) {
      var n;
      if (
        (void 0 === t && (t = u),
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
  "7Vyq": function(e, t, n) {
    e.exports = {
      ContextMenuMouseOverlay: "contextmenu_ContextMenuMouseOverlay_3H7og",
      ContextMenuFocusContainer: "contextmenu_ContextMenuFocusContainer_2thYU",
      contextMenu: "contextmenu_contextMenu_3_a2Z",
      ContextMenuPopup: "contextmenu_ContextMenuPopup_1exss",
      contextMenuContents: "contextmenu_contextMenuContents_1yyTu",
      contextMenuItem: "contextmenu_contextMenuItem_CBC-y",
      active: "contextmenu_active_3vYUp",
      MenuSectionHeader: "contextmenu_MenuSectionHeader_x3Kot",
      StrongerSeparation: "contextmenu_StrongerSeparation_31Tii",
      UpperCase: "contextmenu_UpperCase_2T9by",
      PopoutSubMenu: "contextmenu_PopoutSubMenu_29Zea",
      PopoutSubMenuItems: "contextmenu_PopoutSubMenuItems_1cXx5"
    };
  },
  "8o0Y": function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
      return s;
    }),
      n.d(t, "a", function() {
        return u;
      }),
      n.d(t, "b", function() {
        return m;
      });
    var r = n("mrSG"),
      o = n("q1tI"),
      i = n("/IDK"),
      c = n("EGkk"),
      l = n("G+3Z"),
      a = n("2vnA"),
      s = (function() {
        function e() {}
        return (
          (e.GetBrowserInfoForPopup = function(e) {
            return null;
          }),
          (e.prototype.SetTakeFocus = function(e) {
            this.m_fnTakeFocus = e;
          }),
          e
        );
      })();
    function u(e, t, n) {
      var r,
        o = void 0,
        i = void 0,
        c = t;
      if (c.preventDefault && c.stopPropagation) {
        if (c.shiftKey) return null;
        c.preventDefault(),
          c.stopPropagation(),
          (r = c.currentTarget),
          (o = c.clientX),
          (i = c.clientY);
      } else r = t;
      var a = new h(e, r, o, i, n);
      return a.Show(), a;
    }
    function m(e, t, n, r) {
      var o = new h(e, t, n, r, { bForcePopup: !0, bScreenCoordinates: !0 });
      return o.Show(), o;
    }
    var p = (function(n) {
        function e(e) {
          var t = n.call(this) || this;
          return (
            (t.m_bVisible = !1),
            (t.m_elSubmenuItem = null),
            (t.m_timerHideSubMenu = 0),
            (t.m_ownerWindow = e),
            t
          );
        }
        return (
          Object(r.d)(e, n),
          (e.prototype.Init = function(e, t) {
            (e.options.bForcePopup || this.m_ownerWindow.innerWidth) < 400 &&
            this.m_ownerWindow.SteamClient &&
            this.m_ownerWindow.SteamClient.Window
              ? (this.m_popupContextMenu = new c.a(
                  e,
                  t,
                  s.GetBrowserInfoForPopup(this.m_ownerWindow)
                ))
              : ((this.m_embeddedElementInstance = Object(l.b)(
                  this.m_ownerWindow.document
                )),
                (this.m_rctElement = o.createElement(c.g, e, t)));
          }),
          (e.prototype.SetOnHideCallback = function(e) {
            this.m_fnOnHideCallback = e;
          }),
          (e.prototype.Show = function() {
            this.m_rctElement
              ? this.m_embeddedElementInstance.Show(this.m_rctElement)
              : this.m_popupContextMenu.Show(),
              (this.m_bVisible = !0);
          }),
          (e.prototype.Hide = function() {
            this.InternalHide();
          }),
          (e.prototype.HideIfNotInFocus = function() {
            this.BHasFocus() || this.BIsFocusInChildHierarchy() || this.Hide();
          }),
          (e.prototype.InternalHide = function() {
            this.m_bVisible &&
              ((this.m_bVisible = !1),
              this.InternalHideSubMenu(),
              this.m_fnOnHideCallback && this.m_fnOnHideCallback(),
              this.m_embeddedElementInstance
                ? this.m_embeddedElementInstance.Hide(300)
                : this.m_popupContextMenu.Close());
          }),
          Object.defineProperty(e.prototype, "visible", {
            get: function() {
              return this.m_bVisible;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "options", {
            get: function() {
              return this.m_options;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "owner_window", {
            get: function() {
              return this.m_ownerWindow;
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.ShowSubMenu = function(e, t) {
            return this.m_elSubmenuItem == e
              ? (this.CancelHideSubMenuTimer(),
                this.m_submenu.TakeFocus(),
                null)
              : (this.InternalHideSubMenu(),
                (this.m_elSubmenuItem = e),
                (this.m_submenu = new d(this, t(), e)),
                this.m_submenu.Show(),
                this.m_submenu);
          }),
          (e.prototype.CancelHideSubMenuTimer = function() {
            0 < this.m_timerHideSubMenu &&
              (clearTimeout(this.m_timerHideSubMenu),
              (this.m_timerHideSubMenu = 0));
          }),
          (e.prototype.HideSubMenu = function() {
            var e = this;
            if (this.m_submenu) {
              if (!(0 < this.m_timerHideSubMenu)) {
                this.m_timerHideSubMenu = window.setTimeout(function() {
                  e.InternalHideSubMenu(), (e.m_timerHideSubMenu = 0);
                }, 150);
              }
            } else this.CancelHideSubMenuTimer();
          }),
          (e.prototype.InternalHideSubMenu = function() {
            this.CancelHideSubMenuTimer(),
              this.m_submenu &&
                (this.BIsFocusInChildHierarchy() && this.TakeFocus(),
                (this.m_elSubmenuItem = null),
                this.m_submenu.InternalHide(),
                (this.m_submenu = null));
          }),
          (e.prototype.TakeFocus = function() {
            this.m_popupContextMenu && this.m_popupContextMenu.Focus(),
              this.m_fnTakeFocus && this.m_fnTakeFocus();
          }),
          (e.prototype.BInternalElementInParentHierarchy = function(e) {
            return (
              this.m_parentInstance &&
              (this.m_parentInstance.BIsChildElement(e) ||
                this.m_parentInstance.BInternalElementInParentHierarchy(e))
            );
          }),
          (e.prototype.BInternalElementInChildHierarchy = function(e) {
            return (
              this.m_submenu &&
              (this.m_submenu.BIsChildElement(e) ||
                this.m_submenu.BInternalElementInChildHierarchy(e))
            );
          }),
          (e.prototype.BIsChildElement = function(e) {
            return this.m_embeddedElementInstance
              ? this.m_embeddedElementInstance.BIsChildElement(e)
              : i.e(this.m_popupContextMenu.root_element, e);
          }),
          (e.prototype.BHasFocus = function() {
            return this.m_embeddedElementInstance
              ? this.m_embeddedElementInstance.BIsChildElement(
                  this.m_ownerWindow.document.activeElement
                )
              : this.m_popupContextMenu.focused;
          }),
          (e.prototype.BIsFocusInChildHierarchy = function() {
            return (
              this.m_submenu &&
              (this.m_submenu.BHasFocus() ||
                this.m_submenu.BIsFocusInChildHierarchy())
            );
          }),
          (e.prototype.BIsElementInMenuHierarchy = function(e) {
            return (
              this.BInternalElementInParentHierarchy(e) ||
              this.BInternalElementInChildHierarchy(e)
            );
          }),
          (e.prototype.BIsSubMenuVisible = function() {
            return !!this.m_submenu;
          }),
          Object(r.c)([a.x], e.prototype, "m_bVisible", void 0),
          e
        );
      })(s),
      h = (function(a) {
        function s(e, t, n, r, o) {
          var i = a.call(this, t.ownerDocument.defaultView) || this;
          s.sm_iActiveContextMenuInstance &&
            s.sm_iActiveContextMenuInstance.Hide(),
            ((s.sm_iActiveContextMenuInstance = i).m_options = o || {});
          var c = {
            element: t,
            clientX: n,
            clientY: r,
            instance: i,
            options: i.m_options,
            fnOnMenuItemSelected: function() {
              i.Hide();
            }
          };
          return i.Init(c, e), i;
        }
        return (
          Object(r.d)(s, a),
          (s.prototype.Show = function() {
            this.m_options.bDisableMouseOverlay ||
              s.sm_mapEmbeddedMouseOverlays.ShowElement(
                this.m_ownerWindow.document,
                o.createElement(c.f),
                this
              ),
              a.prototype.Show.call(this);
          }),
          (s.prototype.Hide = function() {
            this.m_options.bDisableMouseOverlay ||
              s.sm_mapEmbeddedMouseOverlays.HideElement(
                this.m_ownerWindow.document,
                this
              ),
              a.prototype.Hide.call(this);
          }),
          (s.sm_mapEmbeddedMouseOverlays = new l.a("ContextMenuMouseOverlay")),
          s
        );
      })(p),
      d = (function(i) {
        function e(e, t, n) {
          var r = i.call(this, n.ownerDocument.defaultView) || this;
          (r.m_parentInstance = e),
            (r.m_options = {
              bOverlapVertical: !0,
              bUseWebStyles: e.options.bUseWebStyles,
              strClassName: e.options.strClassName,
              bFitToWindow: e.options.bFitToWindow,
              bShiftToFitWindow: e.options.bShiftToFitWindow
            });
          var o = {
            element: n,
            clientX: null,
            clientY: null,
            instance: r,
            options: r.m_options,
            fnOnMenuItemSelected: function() {
              r.Hide();
            },
            bSubmenu: !0
          };
          return r.Init(o, t), r;
        }
        return (
          Object(r.d)(e, i),
          (e.prototype.Hide = function() {
            var e = this;
            this.m_popupContextMenu
              ? window.setTimeout(function() {
                  e.m_parentInstance.HideIfNotInFocus();
                }, 10)
              : this.m_parentInstance.Hide();
          }),
          e
        );
      })(p);
  },
  EGkk: function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
      return _;
    }),
      n.d(t, "d", function() {
        return y;
      }),
      n.d(t, "b", function() {
        return b;
      }),
      n.d(t, "e", function() {
        return E;
      }),
      n.d(t, "g", function() {
        return g;
      }),
      n.d(t, "a", function() {
        return w;
      }),
      n.d(t, "f", function() {
        return S;
      }),
      n.d(t, "i", function() {
        return k;
      }),
      n.d(t, "h", function() {
        return M;
      }),
      n.d(t, "j", function() {
        return C;
      });
    var c = n("mrSG"),
      r = n("okNM"),
      a = n("q1tI"),
      s = n("i8i4"),
      l = n("8o0Y"),
      u = n("JtU4"),
      B = n("/IDK"),
      o = n("1VtQ"),
      i = n("e2SU"),
      m = n("WpBz"),
      p = n("oh5H"),
      h = n("1n9R"),
      d = n("7Vyq"),
      f = n.n(d),
      v = n("QHER"),
      _ = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(c.d)(t, e),
          (t.prototype.render = function() {
            var e = this.props,
              t = e.children,
              n = e.className,
              r = Object(c.f)(e, ["children", "className"]),
              o =
                this.context.contextMenuInstance &&
                this.context.contextMenuInstance.options.bUseWebStyles
                  ? "popup_menu popup_body"
                  : f.a.contextMenuContents;
            return (
              n && (o += " " + n),
              a.createElement("div", Object(c.a)({}, r, { className: o }), t)
            );
          }),
          (t.contextTypes = {
            contextMenuInstance: function() {
              return null;
            }
          }),
          t
        );
      })(a.PureComponent),
      y = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(c.d)(t, e),
          (t.prototype.OnClick = function(e) {
            this.props.disabled ||
              (this.props.onClick && this.props.onClick(e),
              this.props.bInteractableItem ||
                (this.props.onSelected && this.props.onSelected(e),
                this.context.contextMenuInstance &&
                  this.context.contextMenuInstance.Hide()));
          }),
          (t.prototype.OnMouseEnter = function(e) {
            this.context.contextMenuInstance &&
              this.context.contextMenuInstance.HideSubMenu();
          }),
          (t.prototype.render = function() {
            var e = this.props,
              t = (e.onSelected,
              e.bInteractableItem,
              Object(c.f)(e, ["onSelected", "bInteractableItem"])),
              n = [];
            return (
              this.context.contextMenuInstance &&
              this.context.contextMenuInstance.options.bUseWebStyles
                ? n.push("popup_menu_item")
                : n.push(f.a.contextMenuItem, "contextMenuItem"),
              this.props.className && n.push(this.props.className),
              this.props.disabled && n.push("disabled"),
              a.createElement(
                "div",
                Object(c.a)({ onMouseEnter: this.OnMouseEnter }, t, {
                  onClick: this.OnClick,
                  unselectable: this.props.unselectable,
                  className: v.a.apply(void 0, n)
                }),
                this.props.children
              )
            );
          }),
          (t.contextTypes = {
            contextMenuInstance: function() {
              return null;
            }
          }),
          Object(c.c)([o.a], t.prototype, "OnClick", null),
          Object(c.c)([o.a], t.prototype, "OnMouseEnter", null),
          t
        );
      })(a.PureComponent),
      b = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(c.d)(t, e),
          (t.prototype.render = function() {
            var e = this.props,
              t = e.bChecked,
              n = e.children,
              r = e.className,
              o = Object(c.f)(e, ["bChecked", "children", "className"]);
            return a.createElement(
              y,
              Object(c.a)({}, o, {
                className: Object(v.a)(r, t && "menuChecked")
              }),
              a.createElement("div", { className: "contextMenuCheckMark" }),
              n
            );
          }),
          t
        );
      })(a.PureComponent),
      E = (function(n) {
        function e(e) {
          var t = n.call(this, e) || this;
          return (t.state = { bActive: !1 }), t;
        }
        return (
          Object(c.d)(e, n),
          (e.prototype.OnSubMenuMouseEnter = function() {
            this.context.contextMenuInstance.CancelHideSubMenuTimer();
          }),
          (e.prototype.RenderSubMenu = function() {
            return a.createElement(
              _,
              { onMouseEnter: this.OnSubMenuMouseEnter },
              this.props.children
            );
          }),
          (e.prototype.OnMouseEnter = function(e) {
            var t = this;
            if (this.context.contextMenuInstance) {
              var n = this.context.contextMenuInstance.ShowSubMenu(
                e.currentTarget,
                this.RenderSubMenu
              );
              n &&
                (this.setState({ bActive: !0 }),
                n.SetOnHideCallback(function() {
                  t.setState({ bActive: !1 });
                }));
            }
          }),
          (e.prototype.OnClick = function(e) {
            this.OnMouseEnter(e), this.props.onClick && this.props.onClick(e);
          }),
          (e.prototype.render = function() {
            var e = this.props,
              t = e.label,
              n = (e.children, e.className),
              r = Object(c.f)(e, ["label", "children", "className"]);
            return (
              this.state.bActive && (n = (n || "") + " " + f.a.active),
              a.createElement(
                y,
                Object(c.a)({}, r, {
                  onClick: this.OnClick,
                  className: n,
                  onMouseEnter: this.OnMouseEnter,
                  onSelected: null,
                  bInteractableItem: !0
                }),
                t,
                " ",
                a.createElement(i.o, null)
              )
            );
          }),
          (e.contextTypes = {
            contextMenuInstance: function() {
              return null;
            }
          }),
          Object(c.c)([o.a], e.prototype, "OnSubMenuMouseEnter", null),
          Object(c.c)([o.a], e.prototype, "RenderSubMenu", null),
          Object(c.c)([o.a], e.prototype, "OnMouseEnter", null),
          Object(c.c)([o.a], e.prototype, "OnClick", null),
          e
        );
      })(a.PureComponent),
      g = (function(n) {
        function e(e) {
          var t = n.call(this, e) || this;
          return (
            (t.m_elMenu = void 0),
            (t.m_cReenteranceGuard = 1),
            (t.state = {
              ready: !1,
              menuLeft: void 0,
              menuTop: void 0,
              menuRight: void 0,
              menuBottom: void 0,
              menuWidth: void 0,
              menuHeight: void 0
            }),
            (t.m_mutationObserver = new MutationObserver(t.OnMenuMutation)),
            t
          );
        }
        return (
          Object(c.d)(e, n),
          (e.prototype.BindMenuElement = function(e) {
            var t = this;
            this.m_elMenu &&
              (this.m_mutationObserver.disconnect(),
              this.props.popup ||
                this.m_elMenu.ownerDocument.defaultView.removeEventListener(
                  "resize",
                  this.OnWindowResize
                )),
              e &&
                (this.m_mutationObserver.observe(e, {
                  childList: !0,
                  subtree: !0
                }),
                this.props.popup ||
                  e.ownerDocument.defaultView.addEventListener(
                    "resize",
                    this.OnWindowResize
                  )),
              (this.m_elMenu = e || void 0),
              this.PositionMenu(),
              this.state.ready ||
                (this.props.instance.SetTakeFocus(this.TakeFocus.bind(this)),
                this.setState({ ready: !0 }, function() {
                  t.TakeFocus();
                }));
          }),
          (e.prototype.OnMenuMutation = function(e, t) {
            this.PositionMenu();
          }),
          (e.prototype.OnWindowResize = function() {
            this.PositionMenu();
          }),
          (e.prototype.OnBlur = function(e) {
            (e.relatedTarget && B.e(e.currentTarget, e.relatedTarget)) ||
              (e.relatedTarget &&
                this.props.instance.BIsElementInMenuHierarchy(
                  e.relatedTarget
                )) ||
              this.props.instance.BIsSubMenuVisible() ||
              (this.state.ready &&
                this.props.instance.visible &&
                this.props.instance.Hide());
          }),
          (e.prototype.OnKeyDown = function(e) {
            27 == e.keyCode &&
              this.state.ready &&
              (this.props.instance.Hide(),
              e.preventDefault(),
              e.stopPropagation());
          }),
          (e.prototype.getChildContext = function() {
            return { contextMenuInstance: this.props.instance };
          }),
          (e.prototype.componentDidUpdate = function() {
            0 < this.m_cReenteranceGuard--
              ? this.PositionMenu()
              : (this.m_cReenteranceGuard = 2);
          }),
          (e.prototype.TakeFocus = function() {
            if (
              this.m_elMenu &&
              this.state.ready &&
              this.props.instance.visible &&
              (this.props.popup ||
                !B.e(this.m_elMenu, this.m_elMenu.ownerDocument.activeElement))
            ) {
              var e = this.m_elMenu.querySelector(".ContextMenuAutoFocus");
              e && e.focus ? e.focus() : this.m_elMenu.focus();
            }
          }),
          (e.prototype.PositionMenu = function() {
            var e = this.m_elMenu,
              t = this.props.element;
            if (e && t) {
              var n = t.ownerDocument.defaultView;
              e.ownerDocument.defaultView.CtxUpdate = this.PositionMenu.bind(
                this
              );
              var r = t.getBoundingClientRect(),
                o = e.getBoundingClientRect(),
                i = null != this.props.popup,
                c = this.props.options,
                a = {
                  menuLeft: void 0,
                  menuRight: void 0,
                  menuTop: void 0,
                  menuBottom: void 0,
                  menuWidth: void 0,
                  menuHeight: void 0
                },
                s = this.props.clientX,
                l = this.props.clientY,
                u = n.innerWidth,
                m = n.innerHeight;
              if (i) {
                this.props.options.bScreenCoordinates ||
                  ((s += n.screenLeft), (l += n.screenTop)),
                  (r = B.h(n, r));
                var p = n.screen,
                  h = 0,
                  d = 0;
                p.availLeft && (h = p.availLeft),
                  p.availTop && (d = p.availTop),
                  (u = h + p.availWidth),
                  (m = d + p.availHeight);
              }
              (c.bOverlapHorizontal || c.bOverlapVertical) && (s = l = void 0);
              var f = s || r.left,
                v = s || r.right,
                _ = o.width;
              c.bMatchWidth && ((_ = v - f), (a.menuWidth = _));
              var y = (c.bOverlapHorizontal ? v : f) - _,
                b = 0 < y,
                E = u - (c.bOverlapHorizontal ? f : v) - _,
                g = 0 < E,
                w = (c.bPreferPopLeft || !g) && b;
              b ||
                g ||
                ((w = g < b),
                c.bFitToWindow && ((_ += (w ? y : E) - 8), (a.menuWidth = _))),
                (!c.bPreferPopLeft && g) || !b
                  ? (a.menuLeft = c.bOverlapHorizontal ? f : v)
                  : (a.menuRight = u - (c.bOverlapHorizontal ? v : f));
              var S = l || r.top,
                k = l || r.bottom,
                x = o.height;
              c.bMatchHeight && ((x = k - S), (a.menuHeight = x));
              var M = (c.bOverlapVertical ? k : S) - x,
                C = 0 < M,
                P = m - (c.bOverlapVertical ? S : k) - x,
                L = 0 < P,
                O = (c.bPreferPopTop || !L) && C && !c.bDisablePopTop;
              if (!C && !L) {
                var I =
                  void 0 !== c.bShiftToFitWindow
                    ? c.bShiftToFitWindow
                    : c.bFitToWindow && !c.bOverlapHorizontal;
                (O = P < M),
                  I && (O ? (a.menuTop = 4) : (a.menuBottom = 4)),
                  c.bFitToWindow &&
                    (I ? (x = Math.min(x, m - 8)) : (x += O ? M : P),
                    (a.menuHeight = x - 8));
              }
              void 0 === a.menuBottom &&
                void 0 === a.menuTop &&
                (O
                  ? (a.menuBottom = m - (c.bOverlapVertical ? k : S))
                  : (a.menuTop = c.bOverlapVertical ? S : k)),
                i
                  ? (a.menuHeight || (a.menuHeight = o.height),
                    a.menuWidth || (a.menuWidth = o.width),
                    a.menuBottom &&
                      !a.menuTop &&
                      ((a.menuTop = m - a.menuBottom - a.menuHeight),
                      (a.menuBottom = void 0)),
                    a.menuRight &&
                      !a.menuLeft &&
                      ((a.menuLeft = u - a.menuRight - a.menuWidth),
                      (a.menuRight = void 0)))
                  : (a.menuLeft && (a.menuLeft += n.scrollX),
                    a.menuTop && (a.menuTop += n.scrollY),
                    a.menuBottom &&
                      (a.menuBottom +=
                        n.document.body.scrollHeight -
                        n.scrollY -
                        n.innerHeight),
                    a.menuRight &&
                      (a.menuRight +=
                        n.document.body.scrollWidth -
                        n.scrollX -
                        n.innerWidth)),
                (a.menuLeft === this.state.menuLeft &&
                  a.menuRight === this.state.menuRight &&
                  a.menuTop === this.state.menuTop &&
                  a.menuBottom === this.state.menuBottom &&
                  a.menuWidth === this.state.menuWidth &&
                  a.menuHeight === this.state.menuHeight) ||
                  this.setState(a);
            }
          }),
          (e.prototype.render = function() {
            var o = this,
              e = { visibility: this.state.ready ? "visible" : "hidden" };
            if (this.props.popup) {
              var i = this.props.element.ownerDocument.defaultView;
              void 0 !== this.state.menuLeft &&
                void 0 !== this.state.menuTop &&
                void 0 !== this.state.menuWidth &&
                void 0 !== this.state.menuHeight &&
                i.SteamClient.Window.GetWindowRestoreDetails(function(e) {
                  var t = o.props.popup.window,
                    n = o.state.menuLeft - i.screenX,
                    r = o.state.menuTop - i.screenY;
                  try {
                    t.SteamClient.Window.PositionWindowRelative(
                      e,
                      n,
                      r,
                      o.state.menuWidth,
                      o.state.menuHeight
                    );
                  } catch (e) {
                    console.error(e);
                  }
                });
            } else
              void 0 !== this.state.menuTop
                ? (e.top = this.state.menuTop)
                : void 0 !== this.state.menuBottom &&
                  (e.bottom = this.state.menuBottom),
                void 0 !== this.state.menuLeft
                  ? (e.left = this.state.menuLeft)
                  : void 0 !== this.state.menuRight &&
                    (e.right = this.state.menuRight),
                void 0 !== this.state.menuHeight &&
                  (e.height = this.state.menuHeight),
                void 0 !== this.state.menuWidth &&
                  (e.width = this.state.menuWidth);
            var t =
              this.props.options.strClassName ||
              (this.props.options.bUseWebStyles
                ? "popup_block_new popup_block_hidden_until_visible"
                : f.a.contextMenu);
            return (
              this.props.instance.visible &&
                this.state.ready &&
                (t += " visible"),
              (t += " " + f.a.ContextMenuFocusContainer),
              a.createElement(
                "div",
                {
                  className: t,
                  ref: this.BindMenuElement,
                  style: e,
                  onBlur: this.OnBlur,
                  onKeyDown: this.OnKeyDown,
                  tabIndex: 0
                },
                this.props.children
              )
            );
          }),
          (e.childContextTypes = {
            contextMenuInstance: function() {
              return null;
            },
            context: function() {
              return null;
            }
          }),
          Object(c.c)([o.a], e.prototype, "BindMenuElement", null),
          Object(c.c)(
            [o.a, Object(m.a)(100)],
            e.prototype,
            "OnMenuMutation",
            null
          ),
          Object(c.c)([o.a], e.prototype, "OnWindowResize", null),
          Object(c.c)([o.a], e.prototype, "OnBlur", null),
          Object(c.c)([o.a], e.prototype, "OnKeyDown", null),
          (e = Object(c.c)([r.a], e))
        );
      })(a.Component),
      w = (function(o) {
        function i(e, t, n) {
          var r =
            o.call(this, "contextmenu_" + i.sm_iContextMenuInstance++, {
              title: "Menu",
              html_class: f.a.ContextMenuPopup + " client_chat_frame",
              body_class: "ContextMenuPopupBody",
              replace_existing_popup: !1,
              target_browser: n,
              eCreationFlags: u.c.ContextMenu
            }) || this;
          return (r.m_menuProps = e), (r.m_children = t), r;
        }
        return (
          Object(c.d)(i, o),
          (i.prototype.UpdateParamsBeforeShow = function(e) {
            if (this.m_menuProps.options.bScreenCoordinates)
              e.dimensions = {
                left: this.m_menuProps.clientX,
                top: this.m_menuProps.clientY,
                width: 350,
                height: 1
              };
            else {
              var t = B.h(
                this.m_menuProps.element.ownerDocument.defaultView,
                this.m_menuProps.element.getBoundingClientRect()
              );
              e.dimensions = {
                left: t.right,
                top: t.top,
                width: 350,
                height: 1
              };
            }
            return (
              (e.availscreenwidth = this.m_menuProps.element.ownerDocument.defaultView.screen.availWidth),
              (e.availscreenheight = this.m_menuProps.element.ownerDocument.defaultView.screen.availHeight),
              e
            );
          }),
          (i.prototype.Render = function(e, t) {
            s.render(
              a.createElement(
                g,
                Object(c.a)({}, this.m_menuProps, { popup: this }),
                this.m_children
              ),
              t
            );
          }),
          (i.prototype.OnBlur = function() {}),
          (i.prototype.OnFocus = function() {}),
          (i.prototype.OnLoad = function() {}),
          (i.prototype.OnResize = function() {}),
          (i.prototype.OnClose = function() {}),
          (i.sm_iContextMenuInstance = 0),
          i
        );
      })(u.a);
    function S(e) {
      return a.createElement("div", { className: f.a.ContextMenuMouseOverlay });
    }
    function k(e) {
      var t = [],
        n = B.n(e),
        r = n.getSelection(),
        o = r && 0 < r.rangeCount && 0 < r.toString().length,
        i = e.target,
        c = !1;
      if (
        (i &&
          "tagName" in i &&
          (("INPUT" != i.tagName && "TEXTAREA" != i.tagName) || (c = !0)),
        (n.document.queryCommandEnabled("cut") || (o && c)) &&
          t.push(
            a.createElement(
              y,
              {
                key: "cut",
                onSelected: function() {
                  n.document.execCommand("cut");
                }
              },
              Object(p.c)("#ContextMenu_Cut")
            )
          ),
        (document.queryCommandEnabled("copy") || o) &&
          t.push(
            a.createElement(
              y,
              {
                key: "copy",
                onSelected: function() {
                  n.document.execCommand("copy");
                }
              },
              Object(p.c)("#ContextMenu_Copy")
            )
          ),
        h.b.IN_CLIENT &&
          c &&
          t.push(
            a.createElement(
              y,
              {
                key: "paste",
                onSelected: function() {
                  i.focus(), n.SteamClient._internal.Paste();
                }
              },
              Object(p.c)("#ContextMenu_Paste")
            )
          ),
        t.length)
      )
        Object(l.a)(a.createElement(_, null, t), e);
      else {
        if (e.shiftKey) return;
        e.preventDefault(), e.stopPropagation();
      }
    }
    var x = "DEBUG_StickyContextMenus";
    function M() {
      return (
        window.sessionStorage && "true" == window.sessionStorage.getItem(x)
      );
    }
    function C(e) {
      e
        ? window.sessionStorage.setItem(x, "true")
        : window.sessionStorage.removeItem(x);
    }
  },
  "G+3Z": function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
      return c;
    }),
      n.d(t, "a", function() {
        return s;
      });
    var r = n("i8i4"),
      o = n("/IDK"),
      i = (function() {
        return function(e) {
          this.instance = new a(e, !1);
        };
      })();
    function c(e) {
      return new a(e.body, !0);
    }
    var a = (function() {
        function e(e, t) {
          void 0 === t && (t = !0),
            (this.m_parent = e),
            (this.m_window = e.ownerDocument.defaultView),
            (this.m_bRemoveOnHide = t);
        }
        return (
          (e.prototype.Show = function(n, r) {
            var o = this;
            return (
              this.CancelShowInterval(),
              r
                ? new Promise(function(t, e) {
                    o.iIntervalShow = o.m_window.setTimeout(function() {
                      var e = o.m_parent.ownerDocument;
                      e.defaultView &&
                        !e.defaultView.closed &&
                        (o.InternalShow(n), t());
                    }, r);
                  })
                : (this.InternalShow(n), Promise.resolve())
            );
          }),
          (e.prototype.InternalShow = function(e) {
            this.m_container ||
              ((this.m_container = this.m_parent.ownerDocument.createElement(
                "div"
              )),
              this.m_parent.appendChild(this.m_container)),
              r.render(e, this.m_container);
          }),
          (e.prototype.Hide = function(e) {
            var t = this;
            this.CancelShowInterval(),
              e
                ? (this.iIntervalShow = this.m_window.setTimeout(function() {
                    t.InternalHide();
                  }, e))
                : this.InternalHide();
          }),
          (e.prototype.InternalHide = function() {
            this.m_container &&
              (r.unmountComponentAtNode(this.m_container),
              this.m_bRemoveOnHide &&
                (this.m_parent.removeChild(this.m_container),
                (this.m_container = null)));
          }),
          (e.prototype.CancelShowInterval = function() {
            void 0 !== this.iIntervalShow &&
              (this.m_window.clearInterval(this.iIntervalShow),
              (this.iIntervalShow = void 0));
          }),
          (e.prototype.BIsChildElement = function(e) {
            return this.m_container && o.e(this.m_container, e);
          }),
          e
        );
      })(),
      s = (function() {
        function e(e) {
          (this.m_mapEmbeddedHovers = new WeakMap()), (this.m_strUniqueID = e);
        }
        return (
          (e.prototype.ShowElementDelayed = function(e, t, n, r) {
            var o = this.GetEmbeddedElement(e);
            return (o.activeObject = r), o.instance.Show(n, t);
          }),
          (e.prototype.ShowElement = function(e, t, n) {
            var r = this.GetEmbeddedElement(e);
            (r.activeObject = n), r.instance.Show(t);
          }),
          (e.prototype.HideElement = function(e, t, n) {
            var r = this.GetEmbeddedElement(e);
            r.activeObject == t &&
              ((r.activeObject = void 0), r.instance.Hide(n));
          }),
          (e.prototype.GetEmbeddedElement = function(e) {
            var t = this.m_mapEmbeddedHovers.get(e);
            return (
              t || ((t = new i(e.body)), this.m_mapEmbeddedHovers.set(e, t)), t
            );
          }),
          e
        );
      })();
  },
  JtU4: function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
      return s;
    }),
      n.d(t, "a", function() {
        return f;
      }),
      n.d(t, "b", function() {
        return v;
      }),
      n.d(t, "d", function() {
        return y;
      });
    var s,
      r,
      o = n("mrSG"),
      i = n("2vnA"),
      c = n("i8i4"),
      a = n("UqDm"),
      l = n("WpBz"),
      u = n("1VtQ"),
      m = n("hEDq"),
      p = n("oh5H"),
      h = n("1n9R");
    ((r = s || (s = {}))[(r.Minimized = 1)] = "Minimized"),
      (r[(r.Hidden = 2)] = "Hidden"),
      (r[(r.Tooltip = 4)] = "Tooltip"),
      (r[(r.ContextMenu = 8)] = "ContextMenu"),
      (r[(r.Resizable = 16)] = "Resizable");
    var d = (function() {
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
              a.c(this.m_rgLoadingLinks, e.currentTarget),
              0 == this.m_rgLoadingLinks.length &&
                (this.m_fnRender(), (this.m_fnRender = void 0));
          }),
          Object(o.c)([u.a], e.prototype, "OnLinkLoad", null),
          e
        );
      })(),
      f = (function() {
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
                (this.m_rgParams.eCreationFlags |= s.Hidden),
              this.m_rgParams.eCreationFlags & s.Tooltip && (e = !1),
              this.BIsValid() &&
                (this.BIsClosed()
                  ? ((this.m_popup = void 0), (this.m_element = void 0))
                  : e && this.Focus(t));
            var o,
              i,
              c,
              a = y.GetExistingPopup(this.m_strName);
            (a && !this.m_rgParams.replace_existing_popup) ||
              ((this.m_rgParams = this.UpdateParamsBeforeShow(this.m_rgParams)),
              a
                ? ((i = a.m_element),
                  (o = a.m_popup),
                  a.ReleasePopup(),
                  (c = a.m_renderWhenReady),
                  y.RemoveTrackedPopup(a),
                  o.removeEventListener("beforeunload", a.OnBeforeUnloadEvent),
                  o.removeEventListener("unload", a.OnUnload),
                  o.removeEventListener("resize", a.OnResizeEvent),
                  o.removeEventListener("focus", this.OnFocusInternal),
                  o.removeEventListener("blur", this.OnBlurInternal),
                  o.removeEventListener("drop", a.OnDrop),
                  o.removeEventListener("dragover", a.OnDragOver),
                  o.removeEventListener("message", this.OnMessage))
                : ((o = (n = _.CreatePopup(this.m_strName, this.m_rgParams))
                    .popup),
                  (i = n.element),
                  (c = new d(o, i))),
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
                h.b.LANGUAGE &&
                  o.document.documentElement.setAttribute(
                    "lang",
                    p.a[h.b.LANGUAGE]
                  ),
                (this.m_popup = o),
                (this.m_element = i),
                (this.m_renderWhenReady = c),
                this.m_renderWhenReady.SetTarget(function() {
                  return r.RenderInternal(r.m_popup, r.m_element, e);
                })),
              y.AddTrackedPopup(this),
              a && e && this.Focus());
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
                m.f.EBrowserType_OpenVROverlay ||
                r.m_eBrowserType == m.f.EBrowserType_OpenVROverlay_Dashboard) &&
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
              y.RemoveTrackedPopup(this),
              this.OnClose(),
              c.unmountComponentAtNode(this.m_element);
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
          Object(o.c)([i.x], e.prototype, "m_bFocused", void 0),
          Object(o.c)([u.a], e.prototype, "OnMessage", null),
          Object(o.c)([u.a], e.prototype, "OnResizeEvent", null),
          Object(o.c)([u.a], e.prototype, "OnBeforeUnloadEvent", null),
          Object(o.c)([u.a], e.prototype, "OnUnload", null),
          Object(o.c)([u.a], e.prototype, "OnFocusInternal", null),
          Object(o.c)([u.a], e.prototype, "OnBlurInternal", null),
          e
        );
      })(),
      v = (function(i) {
        function e(e, t, n, r) {
          var o = i.call(this, e, n) || this;
          return o.SetSavedDimensionsKey(t), (o.m_bExpires = r), o;
        }
        return (
          Object(o.d)(e, i),
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
                  y.SetRestoreDetails(
                    this.m_strInitialSavedDimensionsKey,
                    e.strRestoreDetails,
                    this.m_bExpires
                  ))
                : ((this.m_strInitialSavedDimensionsKey = this.GetSavedDimensionsKey()),
                  (e.strRestoreDetails = y.GetRestoreDetails(
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
                    (y.SetRestoreDetails(r, e, n.m_bExpires),
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
            y.SetRestoreDetails(this.GetSavedDimensionsKey(), e, !1),
              (this.m_rgParams.strRestoreDetails = e);
          }),
          Object(o.c)([u.a], e.prototype, "QueryAndStoreWindowPosition", null),
          e
        );
      })(f),
      _ = (function() {
        function e() {
          var c = this;
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
                c.m_bShuttingDown = !0;
                for (
                  var t = 0, n = c.m_rgShutdownCallbacks;
                  t < n.length;
                  t++
                ) {
                  (0, n[t])();
                }
                var r = [];
                c.m_mapPopups.forEach(function(e) {
                  e.BIsValid() && !e.BIsClosed() && r.push(e);
                });
                for (var o = 0, i = r; o < i.length; o++) {
                  i[o].Close();
                }
                c.m_bSaveRequired && c.SaveSavedDimensionStore(),
                  c.m_mapPopups.clear();
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
              c = "width=" + r + ",height=" + o;
            void 0 !== n.left && (c += ",left=" + n.left),
              void 0 !== n.top && (c += ",top=" + n.top),
              (c += ",resizeable,status=0,toolbar=0,menubar=0,location=0");
            var a = "about:blank",
              s = [];
            s.push("createflags=" + t.eCreationFlags),
              t.minWidth && s.push("minwidth=" + t.minWidth),
              t.minHeight && s.push("minheight=" + t.minHeight),
              t.target_browser &&
                (s.push("pid=" + t.target_browser.m_unPID),
                s.push("browser=" + t.target_browser.m_nBrowserID),
                s.push("browserType=" + t.target_browser.m_eBrowserType),
                t.availscreenwidth &&
                  t.availscreenheight &&
                  (s.push("screenavailwidth=" + t.availscreenwidth),
                  s.push("screenavailheight=" + t.availscreenheight))),
              t.strRestoreDetails &&
                s.push("restoredetails=" + t.strRestoreDetails),
              s && (a += "?" + s.join("&"));
            var l = (t.owner_window || window).open(a, e, c, !0);
            if (!l)
              return (
                console.log(
                  "Failed to create popup.. browser popup blocker enabled?"
                ),
                {}
              );
            var u = "";
            t.html_class && (u = 'class="' + t.html_class + '"');
            var m = "";
            t.body_class && (m = 'class="' + t.body_class + '"');
            var p =
              "<!DOCTYPE html><html " +
              u +
              "><head><title></title></head><body " +
              m +
              '><div id="popup_target"></div></body></html>';
            l.document.write(p), (l.document.title = i);
            for (
              var h = l.document.getElementsByTagName("head")[0],
                d = document.getElementsByTagName("link"),
                f = 0;
              f < d.length;
              f++
            ) {
              var v = d[f];
              if ("stylesheet" == v.rel) {
                for (
                  var _ = l.document.createElement("link"), y = 0;
                  y < v.attributes.length;
                  y++
                ) {
                  var b = v.attributes.item(y);
                  _.setAttribute(b.name, b.value);
                }
                h.appendChild(_);
              }
            }
            return {
              popup: l,
              element: l.document.getElementById("popup_target")
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
                      c = Array.from(this.m_mapRestoreDetails.keys());
                    i < c.length;
                    i++
                  ) {
                    var a = c[i],
                      s = this.m_mapRestoreDetails.get(a);
                    s.last_used < o &&
                      s.bExpires &&
                      ((o = s.last_used), (r = a));
                  }
                  r && this.m_mapRestoreDetails.delete(r);
                }
                var l = {
                  strRestoreDetails: t,
                  last_used: Date.now(),
                  bExpires: n
                };
                this.m_mapRestoreDetails.set(e, l);
              } else this.m_mapRestoreDetails.delete(e);
              (this.m_bSaveRequired = !0),
                this.m_bShuttingDown
                  ? this.SaveSavedDimensionStore()
                  : this.DebouncedSaveSavedDimensionStore();
            }
          }),
          Object(o.c)(
            [u.a, Object(l.a)(100)],
            e.prototype,
            "DebouncedSaveSavedDimensionStore",
            null
          ),
          e
        );
      })(),
      y = new _();
  },
  QHER: function(e, t, n) {
    "use strict";
    function r(n) {
      return Object.keys(n).reduce(function(e, t) {
        return n[t] ? (e ? e + " " + t : t) : e;
      }, "");
    }
    t.a = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return e.reduce(function(e, t) {
        return t
          ? "string" == typeof t
            ? e
              ? e + " " + t
              : t
            : "object" == typeof t
            ? e
              ? e + " " + r(t)
              : r(t)
            : e
          : e;
      }, "");
    };
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
        return c;
      }),
      n.d(t, "a", function() {
        return a;
      }),
      n.d(t, "f", function() {
        return s;
      }),
      n.d(t, "g", function() {
        return l;
      }),
      n.d(t, "h", function() {
        return u;
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
    function c(e, o) {
      return e.reduce(function(e, t, n, r) {
        return e + (o(t, n, r) ? 1 : 0);
      }, 0);
    }
    function a(e, t) {
      return e.filter(function(e) {
        return t !== e;
      });
    }
    function s(e, t) {
      if (e.length != t.length) return !1;
      for (var n = 0; n < e.length; n++) if (e[n] != t[n]) return !1;
      return !0;
    }
    function l(e, t, n) {
      for (var r = 0, o = e.length - 1; r <= o; ) {
        var i = Math.floor((r + o) / 2),
          c = n(e[i], t);
        if (c < 0) r = i + 1;
        else if (0 < c) o = i - 1;
        else {
          if (o == i) return i;
          if (i == r) return i < o && n(t, e[i + 1]) < 0 ? i : i + 1;
          r = i;
        }
      }
      return o;
    }
    function u(e, t, n) {
      var r = l(e, t, n);
      e.splice(r + 1, 0, t);
    }
  },
  WC1h: function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("q1tI"),
      r = n("i8i4"),
      c = n("tkkQ"),
      a = n("oh5H"),
      o = n("XaMz"),
      s = (n("Y3TG"), n("mrSG")),
      l = n("2vnA"),
      u = n("vDqi"),
      m = n.n(u),
      p = { ProfileURL: "" };
    function h(e) {
      switch (e) {
        case 1:
          return Object(a.c)("#Privacy_Private");
        case 2:
          return Object(a.c)("#Privacy_FriendsOnly");
        case 3:
          return Object(a.c)("#Privacy_Public");
        default:
          return "";
      }
    }
    function d(e, t) {
      return e < t ? e : t;
    }
    var f = (function() {
        function e(e, t) {
          (this.m_eSaveStateByKey = new Map()),
            (this.m_eCommentSaveState = 0),
            (this.m_PrivacySettings = e),
            (this.m_eCommentPermission = t);
        }
        return (
          (e.prototype.GetPrivacySetting = function(e) {
            return "PrivacyOwnedGames" == e
              ? d(
                  this.m_PrivacySettings.PrivacyProfile,
                  this.m_PrivacySettings.PrivacyOwnedGames
                )
              : "PrivacyPlaytime" == e
              ? d(
                  this.GetPrivacySetting("PrivacyOwnedGames"),
                  this.m_PrivacySettings.PrivacyPlaytime
                )
              : "PrivacyInventory" == e
              ? d(
                  this.m_PrivacySettings.PrivacyProfile,
                  this.m_PrivacySettings.PrivacyInventory
                )
              : "PrivacyInventoryGifts" == e
              ? d(
                  this.GetPrivacySetting("PrivacyInventory"),
                  this.m_PrivacySettings.PrivacyInventoryGifts
                )
              : "PrivacyFriendsList" == e
              ? d(
                  this.m_PrivacySettings.PrivacyProfile,
                  this.m_PrivacySettings.PrivacyFriendsList
                )
              : this.m_PrivacySettings[e];
          }),
          Object.defineProperty(e.prototype, "CommentPermission", {
            get: function() {
              return this.m_eCommentPermission;
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.GetSaveState = function(e) {
            return this.m_eSaveStateByKey.get(e) || 0;
          }),
          (e.prototype.GetCommentSaveState = function() {
            return this.m_eCommentSaveState;
          }),
          (e.prototype.ChangePrivacySetting = function(e, t, n) {
            var r = this;
            if (this.m_PrivacySettings[e] != t) {
              this.m_PrivacySettings[e] = t;
              var o = this.SavePrivacy(),
                i = n || e;
              o
                ? (this.m_eSaveStateByKey.set(i, 1),
                  o.then(function(e) {
                    e
                      ? r.m_eSaveStateByKey.set(i, 2)
                      : r.m_eSaveStateByKey.set(i, 3);
                  }))
                : this.m_eSaveStateByKey.set(i, 0);
            }
          }),
          (e.prototype.ChangeCommentPermission = function(e) {
            var t = this;
            if (this.m_eCommentPermission != e) {
              this.m_eCommentPermission = e;
              var n = this.SavePrivacy();
              n
                ? ((this.m_eCommentSaveState = 1),
                  n.then(function(e) {
                    t.m_eCommentSaveState = e ? 2 : 3;
                  }))
                : (this.m_eCommentSaveState = 0);
            }
          }),
          (e.prototype.SavePrivacy = function() {
            var r = this,
              e = new FormData();
            return (
              e.append("sessionid", c.a.SESSIONID),
              e.append("Privacy", JSON.stringify(this.m_PrivacySettings)),
              e.append(
                "eCommentPermission",
                JSON.stringify(this.m_eCommentPermission)
              ),
              m.a
                .post(p.ProfileURL + "ajaxsetprivacy/", e)
                .then(function(e) {
                  var t = e.data;
                  if (1 != t.success)
                    return (
                      ShowAlertDialog(
                        Object(a.c)("#Error_Error"),
                        Object(a.c)("#Error_CommentEditFailed")
                      ),
                      !1
                    );
                  var n = t.Privacy;
                  return (
                    n &&
                      n.PrivacySettings &&
                      n.eCommentPermission &&
                      Object(l.A)(function() {
                        (r.m_PrivacySettings = n.PrivacySettings),
                          (r.m_eCommentPermission = n.eCommentPermission);
                      }),
                    !0
                  );
                })
                .catch(function(e) {
                  return (
                    ShowAlertDialog(
                      Object(a.c)("#Error_Error"),
                      Object(a.c)("#Error_CommentEditFailed")
                    ),
                    !1
                  );
                })
            );
          }),
          Object(s.c)([l.x], e.prototype, "m_PrivacySettings", void 0),
          Object(s.c)([l.x], e.prototype, "m_eCommentPermission", void 0),
          Object(s.c)([l.x], e.prototype, "m_eSaveStateByKey", void 0),
          Object(s.c)([l.x], e.prototype, "m_eCommentSaveState", void 0),
          e
        );
      })(),
      v = n("1VtQ"),
      _ = n("8o0Y"),
      y = n("EGkk"),
      b = n("okNM"),
      E = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(s.d)(t, e),
          (t.prototype.render = function() {
            var e = this.props.PrivacyStore;
            return i.createElement(
              "div",
              { className: "ProfilePrivacyRoot" },
              i.createElement(
                g,
                {
                  PrivacyStore: e,
                  strLabel: Object(a.c)("#ProfilePrivacy_BasicDetails"),
                  strReadOnlySetting: h(3)
                },
                Object(a.c)("#ProfilePrivacy_BasicDetails_Desc")
              ),
              i.createElement("div", { className: "ProfilePrivacyHR" }),
              i.createElement(
                g,
                {
                  PrivacyStore: e,
                  strLabel: Object(a.c)("#ProfilePrivacy_Profile"),
                  PrivacyKey: "PrivacyProfile"
                },
                i.createElement(
                  "p",
                  null,
                  Object(a.c)("#ProfilePrivacy_Profile_Desc")
                ),
                i.createElement(
                  "p",
                  null,
                  Object(a.c)("#ProfilePrivacy_Profile_Desc2")
                )
              ),
              i.createElement(
                "div",
                { className: "ProfilePrivacyRoot_Indent" },
                i.createElement(
                  g,
                  {
                    PrivacyStore: e,
                    strLabel: Object(a.c)("#ProfilePrivacy_GameLibrary"),
                    PrivacyKey: "PrivacyOwnedGames",
                    LimitPrivacyKey: "PrivacyProfile"
                  },
                  Object(a.c)("#ProfilePrivacy_GameLibrary_Desc"),
                  1 != e.GetPrivacySetting("PrivacyOwnedGames") &&
                    i.createElement(
                      M,
                      {
                        PrivacyStore: e,
                        PrivacyKey: "PrivacyPlaytime",
                        LimitPrivacyKey: "PrivacyOwnedGames"
                      },
                      Object(a.c)("#ProfilePrivacy_Playtime")
                    )
                ),
                i.createElement("div", { className: "ProfilePrivacyHR" }),
                i.createElement(
                  g,
                  {
                    PrivacyStore: e,
                    strLabel: Object(a.c)("#ProfilePrivacy_FriendsList"),
                    PrivacyKey: "PrivacyFriendsList",
                    LimitPrivacyKey: "PrivacyProfile"
                  },
                  Object(a.c)("#ProfilePrivacy_FriendsList_Desc")
                ),
                i.createElement("div", { className: "ProfilePrivacyHR" }),
                i.createElement(
                  g,
                  {
                    PrivacyStore: e,
                    strLabel: Object(a.c)("#ProfilePrivacy_Inventory"),
                    PrivacyKey: "PrivacyInventory",
                    LimitPrivacyKey: "PrivacyProfile"
                  },
                  Object(a.e)(
                    "#ProfilePrivacy_Inventory_Desc",
                    i.createElement(
                      "a",
                      { href: p.ProfileURL + "inventory/" },
                      Object(a.c)("#ProfilePrivacy_Inventory_Inventory")
                    ),
                    i.createElement(
                      "a",
                      { href: p.ProfileURL + "inventory/#753_6" },
                      Object(a.c)("#ProfilePrivacy_Inventory_TradingCards")
                    )
                  ),
                  1 != e.GetPrivacySetting("PrivacyInventory") &&
                    i.createElement(
                      M,
                      {
                        PrivacyStore: e,
                        PrivacyKey: "PrivacyInventoryGifts",
                        LimitPrivacyKey: "PrivacyInventory"
                      },
                      Object(a.c)("#ProfilePrivacy_Gifts")
                    )
                ),
                i.createElement("div", { className: "ProfilePrivacyHR" }),
                i.createElement(
                  w,
                  null,
                  Object(a.c)("#ProfilePrivacy_Comments"),
                  ":",
                  i.createElement(C, { PrivacyStore: e })
                ),
                i.createElement("div", { className: "ProfilePrivacyHR" }),
                i.createElement(
                  g,
                  {
                    PrivacyStore: e,
                    strLabel: Object(a.c)("#ProfilePrivacy_UGC"),
                    strReadOnlySetting: Object(a.c)("#Privacy_PerItem")
                  },
                  Object(a.e)(
                    "#ProfilePrivacy_UGC_Desc",
                    i.createElement(
                      "a",
                      { href: p.ProfileURL + "screenshots/" },
                      Object(a.c)("#ProfilePrivacy_UGC_Desc_Screenshots")
                    ),
                    i.createElement(
                      "a",
                      { href: p.ProfileURL + "myworkshopfiles/" },
                      Object(a.c)("#ProfilePrivacy_UGC_Desc_WorkshopItems")
                    )
                  )
                )
              )
            );
          }),
          (t = Object(s.c)([b.a], t))
        );
      })(i.Component);
    function g(e) {
      var t;
      return (
        (t = e.strReadOnlySetting
          ? i.createElement(P, { strLabel: e.strReadOnlySetting })
          : i.createElement(k, {
              PrivacyStore: e.PrivacyStore,
              PrivacyKey: e.PrivacyKey,
              LimitPrivacyKey: e.LimitPrivacyKey
            })),
        i.createElement(
          i.Fragment,
          null,
          i.createElement(w, null, e.strLabel, ":", t),
          i.createElement(S, null, e.children)
        )
      );
    }
    function w(e) {
      return i.createElement(
        "div",
        { className: "ProfilePrivacyHeader" },
        e.children
      );
    }
    function S(e) {
      return i.createElement(
        "div",
        { className: "ProfilePrivacyDesc" },
        e.children
      );
    }
    var k = (function(e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        Object(s.d)(t, e),
        (t.prototype.OnClick = function(e) {
          var t = this.props.PrivacyStore.GetPrivacySetting(
            this.props.PrivacyKey
          );
          Object(_.a)(
            i.createElement(L, {
              OnChange: this.OnSettingChanged,
              eCurrentPrivacy: t,
              eMinPrivacy: this.GetMinPrivacy()
            }),
            e,
            { bOverlapHorizontal: !0 }
          );
        }),
        (t.prototype.OnSettingChanged = function(e) {
          this.props.PrivacyStore.ChangePrivacySetting(
            this.props.PrivacyKey,
            e
          );
        }),
        (t.prototype.GetMinPrivacy = function() {
          if (this.props.LimitPrivacyKey)
            return this.props.PrivacyStore.GetPrivacySetting(
              this.props.LimitPrivacyKey
            );
        }),
        (t.prototype.render = function() {
          var e = h(
            this.props.PrivacyStore.GetPrivacySetting(this.props.PrivacyKey)
          );
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(
              "div",
              { className: "ProfilePrivacyDropDown", onClick: this.OnClick },
              e,
              i.createElement("img", {
                className: "ProfilePrivacyDropDown_Arrow",
                src:
                  c.a.COMMUNITY_CDN_URL +
                  "public/images/skin_1/actionArrowDnWhite.gif"
              })
            ),
            i.createElement(x, {
              eSaveState: this.props.PrivacyStore.GetSaveState(
                this.props.PrivacyKey
              )
            })
          );
        }),
        Object(s.c)([v.a], t.prototype, "OnClick", null),
        Object(s.c)([v.a], t.prototype, "OnSettingChanged", null),
        (t = Object(s.c)([b.a], t))
      );
    })(i.Component);
    function x(e) {
      switch (e.eSaveState) {
        case 1:
          return i.createElement(
            "div",
            { className: "PrivacySaveNotice Saving" },
            Object(a.c)("#Shared_Saving")
          );
        case 3:
          return i.createElement(
            "div",
            { className: "PrivacySaveNotice Error" },
            Object(a.c)("#Error_Error")
          );
        case 2:
          return i.createElement(
            "div",
            { className: "PrivacySaveNotice Saved" },
            Object(a.c)("#Shared_Saved")
          );
        case 0:
        default:
          return null;
      }
    }
    var M = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(s.d)(t, e),
          (t.prototype.OnCheckboxChecked = function(e) {
            var t = e.currentTarget.checked ? 1 : 3;
            this.props.PrivacyStore.ChangePrivacySetting(
              this.props.PrivacyKey,
              t,
              this.props.LimitPrivacyKey
            );
          }),
          (t.prototype.render = function() {
            var e =
              1 ==
              this.props.PrivacyStore.GetPrivacySetting(this.props.PrivacyKey);
            return i.createElement(
              "div",
              { className: "ProfilePrivacyCheckbox" },
              i.createElement(
                "label",
                null,
                i.createElement("input", {
                  className: "ProfilePrivacyCheckbox_Input",
                  type: "checkbox",
                  checked: e,
                  onChange: this.OnCheckboxChecked
                }),
                i.createElement(
                  "div",
                  { className: "ProfilePrivacyCheckbox_Desc" },
                  this.props.children
                )
              )
            );
          }),
          Object(s.c)([v.a], t.prototype, "OnCheckboxChecked", null),
          (t = Object(s.c)([b.a], t))
        );
      })(k),
      C = (function(n) {
        function e(e) {
          var t = n.call(this, e) || this;
          return (t.state = { eSaveState: 0 }), t;
        }
        return (
          Object(s.d)(e, n),
          (e.prototype.OnClick = function(e) {
            var t = this.props.PrivacyStore.CommentPermission;
            Object(_.a)(
              i.createElement(O, {
                OnChange: this.OnSettingChanged,
                eCurrentPermission: t,
                eMinPrivacy: this.props.PrivacyStore.GetPrivacySetting(
                  "PrivacyProfile"
                )
              }),
              e,
              { bOverlapHorizontal: !0 }
            );
          }),
          (e.prototype.OnSettingChanged = function(e) {
            this.props.PrivacyStore.ChangeCommentPermission(e);
          }),
          (e.prototype.render = function() {
            var e,
              t,
              n = this.props.PrivacyStore.CommentPermission,
              r = this.props.PrivacyStore.GetPrivacySetting("PrivacyProfile"),
              o = (function(e) {
                switch (e) {
                  case 0:
                    return Object(a.c)("#Privacy_FriendsOnly");
                  case 1:
                    return Object(a.c)("#Privacy_Public");
                  case 2:
                    return Object(a.c)("#Privacy_Private");
                  default:
                    return "";
                }
              })(((e = n), 1 == (t = r) ? 2 : 2 == t && 1 == e ? 0 : e));
            return i.createElement(
              i.Fragment,
              null,
              i.createElement(
                "div",
                { className: "ProfilePrivacyDropDown", onClick: this.OnClick },
                o,
                i.createElement("img", {
                  className: "ProfilePrivacyDropDown_Arrow",
                  src:
                    c.a.COMMUNITY_CDN_URL +
                    "public/images/skin_1/actionArrowDnWhite.gif"
                })
              ),
              i.createElement(x, {
                eSaveState: this.props.PrivacyStore.GetCommentSaveState()
              })
            );
          }),
          Object(s.c)([v.a], e.prototype, "OnClick", null),
          Object(s.c)([v.a], e.prototype, "OnSettingChanged", null),
          (e = Object(s.c)([b.a], e))
        );
      })(i.Component);
    function P(e) {
      return i.createElement(
        "div",
        { className: "ProfilePrivacyDropDown readonly" },
        e.strLabel
      );
    }
    var L = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(s.d)(t, e),
          (t.prototype.render = function() {
            var e = this,
              t = this.props.eMinPrivacy;
            return i.createElement(
              y.c,
              null,
              (!t || 3 <= t) &&
                i.createElement(
                  y.d,
                  {
                    onSelected: function() {
                      return e.props.OnChange(3);
                    }
                  },
                  Object(a.c)("#Privacy_Public")
                ),
              (!t || 2 <= t) &&
                i.createElement(
                  y.d,
                  {
                    onSelected: function() {
                      return e.props.OnChange(2);
                    }
                  },
                  Object(a.c)("#Privacy_FriendsOnly")
                ),
              i.createElement(
                y.d,
                {
                  onSelected: function() {
                    return e.props.OnChange(1);
                  }
                },
                Object(a.c)("#Privacy_Private")
              )
            );
          }),
          t
        );
      })(i.Component),
      O = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(s.d)(t, e),
          (t.prototype.render = function() {
            var e = this,
              t = this.props.eMinPrivacy;
            return i.createElement(
              y.c,
              null,
              (!t || 3 <= t) &&
                i.createElement(
                  y.d,
                  {
                    onSelected: function() {
                      return e.props.OnChange(1);
                    },
                    title: Object(a.c)("#Profile_CommentPermission_Public_Desc")
                  },
                  Object(a.c)("#Privacy_Public")
                ),
              (!t || 2 <= t) &&
                i.createElement(
                  y.d,
                  {
                    onSelected: function() {
                      return e.props.OnChange(0);
                    },
                    title: Object(a.c)(
                      "#Profile_CommentPermission_FriendsOnly_Desc"
                    )
                  },
                  Object(a.c)("#Privacy_FriendsOnly")
                ),
              i.createElement(
                y.d,
                {
                  onSelected: function() {
                    return e.props.OnChange(2);
                  },
                  title: Object(a.c)("#Profile_CommentPermission_Private_Desc")
                },
                Object(a.c)("#Privacy_Private")
              )
            );
          }),
          t
        );
      })(i.Component);
    n("s4p+");
    function I(e) {
      var t;
      try {
        t = JSON.parse(e.getAttribute("data-privacysettings"));
      } catch (e) {}
      var n = new f(t.PrivacySettings, t.eCommentPermission);
      r.render(i.createElement(E, { PrivacyStore: n }), e);
    }
    (window.AssertMsg = o.a),
      document.addEventListener("DOMContentLoaded", function() {
        var e;
        Object(c.c)(),
          (e = Object(c.b)("config", "profile_config")) && Object.assign(p, e),
          (function() {
            for (
              var e = document.querySelectorAll(".ProfileReactRoot"), t = 0;
              t < e.length;
              t++
            ) {
              var n = e[t],
                r = n.getAttribute("data-component");
              switch (r) {
                case "ProfilePrivacySettings":
                  I(n);
                  break;
                default:
                  Object(o.a)(!1, 'unknown component: "' + r + '"');
              }
            }
          })();
      }),
      (window.LocalizationManifestReady = function(e, t, n) {
        Object(o.a)("manifest" === t, 'Expected manifest not "' + t + '"'),
          a.b.InitDirect(n);
      });
  },
  WpBz: function(e, t, n) {
    "use strict";
    function r(c) {
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
                }, c)))
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
    n.d(t, "a", function() {
      return r;
    });
    var o = n("mrSG");
    function r(e, t) {
      for (var n = [], r = 2; r < arguments.length; r++)
        n[r - 2] = arguments[r];
      console.assert
        ? 0 == n.length
          ? console.assert(!!e, t)
          : console.assert.apply(console, Object(o.g)([!!e, t], n))
        : e || console.warn.apply(console, Object(o.g)([t], n));
    }
  },
  Y3TG: function(e, t, n) {
    "use strict";
    n("vDqi"), n("JtU4");
  },
  e2SU: function(e, t, n) {
    "use strict";
    n.d(t, "z", function() {
      return s;
    }),
      n.d(t, "X", function() {
        return l;
      }),
      n.d(t, "g", function() {
        return u;
      }),
      n.d(t, "j", function() {
        return m;
      }),
      n.d(t, "o", function() {
        return p;
      }),
      n.d(t, "E", function() {
        return h;
      }),
      n.d(t, "H", function() {
        return d;
      }),
      n.d(t, "p", function() {
        return f;
      }),
      n.d(t, "db", function() {
        return v;
      }),
      n.d(t, "S", function() {
        return _;
      }),
      n.d(t, "Q", function() {
        return y;
      }),
      n.d(t, "ob", function() {
        return b;
      }),
      n.d(t, "pb", function() {
        return E;
      }),
      n.d(t, "mb", function() {
        return g;
      }),
      n.d(t, "fb", function() {
        return w;
      }),
      n.d(t, "w", function() {
        return S;
      }),
      n.d(t, "v", function() {
        return k;
      }),
      n.d(t, "N", function() {
        return x;
      }),
      n.d(t, "P", function() {
        return M;
      }),
      n.d(t, "a", function() {
        return C;
      }),
      n.d(t, "t", function() {
        return P;
      }),
      n.d(t, "B", function() {
        return L;
      }),
      n.d(t, "L", function() {
        return O;
      }),
      n.d(t, "nb", function() {
        return I;
      }),
      n.d(t, "K", function() {
        return B;
      }),
      n.d(t, "k", function() {
        return N;
      }),
      n.d(t, "O", function() {
        return T;
      }),
      n.d(t, "M", function() {
        return G;
      }),
      n.d(t, "ab", function() {
        return D;
      }),
      n.d(t, "h", function() {
        return R;
      }),
      n.d(t, "l", function() {
        return V;
      }),
      n.d(t, "f", function() {
        return H;
      }),
      n.d(t, "D", function() {
        return F;
      }),
      n.d(t, "gb", function() {
        return W;
      }),
      n.d(t, "kb", function() {
        return z;
      }),
      n.d(t, "A", function() {
        return j;
      }),
      n.d(t, "c", function() {
        return A;
      }),
      n.d(t, "b", function() {
        return U;
      }),
      n.d(t, "n", function() {
        return K;
      }),
      n.d(t, "eb", function() {
        return Y;
      }),
      n.d(t, "F", function() {
        return X;
      }),
      n.d(t, "I", function() {
        return q;
      }),
      n.d(t, "T", function() {
        return J;
      }),
      n.d(t, "Z", function() {
        return Q;
      }),
      n.d(t, "R", function() {
        return Z;
      }),
      n.d(t, "hb", function() {
        return $;
      }),
      n.d(t, "ib", function() {
        return ee;
      }),
      n.d(t, "W", function() {
        return te;
      }),
      n.d(t, "r", function() {
        return ne;
      }),
      n.d(t, "s", function() {
        return re;
      }),
      n.d(t, "m", function() {
        return oe;
      }),
      n.d(t, "G", function() {
        return ie;
      }),
      n.d(t, "cb", function() {
        return ce;
      }),
      n.d(t, "bb", function() {
        return ae;
      }),
      n.d(t, "lb", function() {
        return se;
      }),
      n.d(t, "u", function() {
        return le;
      }),
      n.d(t, "U", function() {
        return ue;
      }),
      n.d(t, "V", function() {
        return me;
      }),
      n.d(t, "y", function() {
        return pe;
      }),
      n.d(t, "Y", function() {
        return he;
      }),
      n.d(t, "d", function() {
        return de;
      }),
      n.d(t, "J", function() {
        return fe;
      }),
      n.d(t, "jb", function() {
        return ve;
      }),
      n.d(t, "C", function() {
        return _e;
      }),
      n.d(t, "q", function() {
        return ye;
      }),
      n.d(t, "qb", function() {
        return be;
      }),
      n.d(t, "e", function() {
        return Ee;
      }),
      n.d(t, "i", function() {
        return ge;
      }),
      n.d(t, "x", function() {
        return we;
      });
    var r = n("mrSG"),
      o = n("q1tI"),
      i = n("twdX"),
      c = n.n(i),
      a = n("QHER");
    n("/7KC"), n("vvG3");
    function s() {
      return o.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Hyperlink",
          "data-name": "Layer 1",
          viewBox: "0 0 100 100",
          x: "0px",
          y: "0px"
        },
        o.createElement(
          "g",
          { "data-name": "Group" },
          o.createElement("path", {
            "data-name": "Path",
            d:
              "M50.86,20.23l-9,9,4.24,4.24,9-9c6.35-6.35,16.09-6.93,21.73-1.3s5,15.38-1.3,21.73l-9,9,4.24,4.24,9-9c8.69-8.69,9.27-22.24,1.3-30.21S59.55,11.55,50.86,20.23Z"
          }),
          o.createElement("path", {
            "data-name": "Path",
            d:
              "M44.89,75.53a17.22,17.22,0,0,1-11.28,5.13A13.23,13.23,0,0,1,19.34,66.39a17.22,17.22,0,0,1,5.13-11.28l9-9-4.24-4.24-9,9a23.21,23.21,0,0,0-6.88,15.22c0,.37,0,.74,0,1.11A19.19,19.19,0,0,0,33.91,86.66a23.21,23.21,0,0,0,15.22-6.88l9-9-4.24-4.24Z"
          }),
          o.createElement("rect", {
            "data-name": "Path",
            className: "Link1",
            x: "28.75",
            y: "47",
            width: "42.48",
            height: "6",
            transform: "translate(-20.71 50) rotate(-45)"
          })
        )
      );
    }
    function l() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Settings",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "-305.5 396.5 256 256",
          enableBackground: "new -305.5 396.5 256 256"
        },
        o.createElement("path", {
          d:
            "M-232.755,589.942l3.103,2.408c5.78,4.492,11.973,8.18,18.409,10.959l3.581,1.547l2.276,33.783 c0.089,1.33,1.385,2.54,2.715,2.54h48.62c1.355,0,2.745-1.273,2.852-2.621l2.74-33.284l3.602-1.496 c6.406-2.656,12.646-6.262,18.554-10.707l3.137-2.366l30.578,15.009c1.155,0.571,2.924,0.017,3.563-1.087l24.303-42.1 c0.674-1.173,0.265-3.014-0.852-3.785l-27.872-19.309l0.469-3.832c0.495-4.032,0.725-7.395,0.725-10.57 c0-3.129-0.227-6.5-0.687-10.307l-0.469-3.896l28.699-19.253c1.112-0.741,1.509-2.473,0.84-3.627l-24.3-42.104 c-0.657-1.139-2.502-1.727-3.7-1.155l-31.208,14.748l-3.091-2.341c-5.571-4.224-11.466-7.688-17.522-10.306l-3.58-1.548 l-2.34-34.887c-0.089-1.33-1.381-2.536-2.715-2.536h-48.617c-1.355,0-2.74,1.274-2.851,2.626l-2.834,34.371l-3.593,1.501 c-6.082,2.535-12.028,5.924-17.667,10.071l-3.124,2.302l-31.392-15.413c-1.168-0.575-2.924-0.025-3.559,1.074l-24.309,42.107 c-0.678,1.172-0.264,3.014,0.848,3.781l28.068,19.444l-0.524,3.883c-0.592,4.378-0.865,8.018-0.865,11.462 c0,2.988,0.179,6.065,0.55,9.403l0.431,3.853l-28.528,19.125c-1.108,0.742-1.509,2.468-0.84,3.632l24.308,42.1 c0.656,1.142,2.489,1.726,3.7,1.154L-232.755,589.942z M-177.498,560.051c-19.311,0-35.02-15.709-35.02-35.02 s15.709-35.02,35.02-35.02s35.02,15.709,35.02,35.02S-158.188,560.051-177.498,560.051z"
        })
      );
    }
    function u() {
      return o.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_ChatSettings",
          version: "1.1",
          x: "0px",
          y: "0px",
          viewBox: "0 0 600 600"
        },
        o.createElement(
          "g",
          null,
          o.createElement("path", {
            d:
              "M256,0C126.6,0,21.3,104.7,21.3,233.7c0,65.9,26.5,125.4,74.7,168.3v99.3c0,3.8,2,7.4,5.3,9.2c1.7,1,3.5,1.5,5.3,1.5   c1.8,0,3.7-0.5,5.4-1.5l85.8-50.3c18.9,4.8,38.4,7.3,58.1,7.3c129.4,0,234.7-104.9,234.7-233.7C490.7,104.7,385.4,0,256,0z    M405.3,254.1L370,260c-3,13.5-8.3,26-15.5,37.3l20.8,29.2L347.8,354l-29.2-20.8c-11.3,7.2-23.8,12.5-37.3,15.5l-5.9,35.3h-39   l-5.9-35.3c-13.5-3-26-8.3-37.3-15.5L164.2,354l-27.5-27.5l20.8-29.2C150.3,286,145,273.5,142,260l-35.3-5.9v-39l35.3-5.9   c3-13.5,8.3-26,15.5-37.3l-20.8-29.2l27.5-27.5l29.2,20.8c11.3-7.2,23.8-12.5,37.3-15.5l5.9-35.3h39l5.9,35.3   c13.5,3,26,8.3,37.3,15.5l29.2-20.8l27.5,27.5L354.5,172c7.2,11.3,12.5,23.8,15.5,37.3l35.3,5.9V254.1z"
          }),
          o.createElement("circle", { cx: "256", cy: "234.6", r: "45.9" })
        )
      );
    }
    function m() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          className: "SVGIcon_Button SVGIcon_CopyToClipboard",
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("polyline", {
          fill: "none",
          className: "line",
          strokeWidth: "12",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
          points:
            "178.25,197.25 247,197.25 247,82.5 175,10.25 111.5,10.25 111.5,56 "
        }),
        o.createElement("polygon", {
          fill: "none",
          className: "line",
          strokeWidth: "12",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
          points: "155,133 83,60.75 11,60.75 11,247.75 155,247.75 "
        }),
        o.createElement("polyline", {
          fill: "none",
          className: "line",
          strokeWidth: "12",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
          points: "83,60.75 83,133 155,133 "
        }),
        o.createElement("polyline", {
          fill: "none",
          className: "line",
          strokeWidth: "12",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
          points: "175,10.25 175,82.5 247,82.5 "
        })
      );
    }
    function p() {
      return o.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_DownArrowContextMenu",
          "data-name": "Layer 1",
          viewBox: "0 0 128 128",
          x: "0px",
          y: "0px"
        },
        o.createElement("polygon", {
          points:
            "50 59.49 13.21 22.89 4.74 31.39 50 76.41 95.26 31.39 86.79 22.89 50 59.49"
        })
      );
    }
    function h() {
      return o.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_MagnifyingGlass",
          version: "1.1",
          x: "0px",
          y: "0px",
          viewBox: "0 0 100 100"
        },
        o.createElement(
          "g",
          { transform: "translate(0,-952.36218)" },
          o.createElement("path", {
            className: "ColorSelector",
            d:
              "m 40.99855,964.36216 c -15.9798,0 -28.9986,13.01864 -28.9986,28.99862 0,15.97992 13.0188,28.99862 28.9986,28.99862 6.9189,0 13.2881,-2.4349 18.2803,-6.4997 l 23.5927,23.6239 c 1.1714,1.1714 3.0784,1.1715 4.2498,0 1.1716,-1.1715 1.1716,-3.0783 0,-4.2498 l -23.6239,-23.5926 c 4.0649,-4.9923 6.4997,-11.3615 6.4997,-18.28042 0,-15.97998 -13.0187,-28.99862 -28.9986,-28.99862 z m 0,5.99972 c 12.7374,0 22.9989,10.26145 22.9989,22.9989 0,12.73732 -10.2615,22.99892 -22.9989,22.99892 -12.7374,0 -22.9989,-10.2616 -22.9989,-22.99892 0,-12.73745 10.2615,-22.9989 22.9989,-22.9989 z",
            fill: "#ffffff",
            fillOpacity: "1",
            stroke: "none",
            visibility: "visible",
            display: "inline",
            overflow: "visible"
          })
        )
      );
    }
    function d(e) {
      var t = "SVGIcon_Button SVGIcon_Microphone";
      return (
        e.className && (t += " " + e.className),
        o.createElement(
          "svg",
          {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "-127.5 664.5 256 256"
          },
          o.createElement(
            "g",
            { className: "MicBase" },
            o.createElement(
              "g",
              null,
              o.createElement(
                "g",
                null,
                o.createElement("path", {
                  d:
                    "M-64.7,826.3c-0.5-2.9-0.8-5.8-0.8-8.7v-38.2h11.2v36.5L-64.7,826.3z"
                }),
                o.createElement("path", {
                  d:
                    "M-54.8,779.9v35.8l-9.6,9.6c-0.4-2.6-0.6-5.1-0.6-7.6v-37.7H-54.8 M-53.8,778.9H-66v38.7c0,3.3,0.4,6.5,1,9.7l11.2-11.2 V778.9L-53.8,778.9z"
                })
              ),
              o.createElement(
                "g",
                null,
                o.createElement("path", {
                  d:
                    "M56.8,817.6c0,24.7-24.8,44.9-55.3,44.9c-16.6,0-31.6-6-41.7-15.5l-8.6,8.6c11.1,10.5,26.7,17.5,44.2,18.8v25.1h-35.2 c-2.1,0-3.8,2.7-3.8,6.1c0,3.4,1.7,6.1,3.8,6.1h35.5H7.3h35.5c2.1,0,3.8-2.7,3.8-6.1c0-3.4-1.7-6.1-3.8-6.1H7.6v-25.1 C42,871.8,69,847.3,69,817.6v-38.7H56.8V817.6z"
                }),
                o.createElement("path", {
                  d:
                    "M69,778.9H56.8v38.7c0,24.7-24.8,44.9-55.3,44.9c-16.6,0-31.6-6-41.7-15.5l-8.6,8.6c11.1,10.5,26.7,17.5,44.2,18.8v25.1 h-35.2c-2.1,0-3.8,2.7-3.8,6.1c0,3.4,1.7,6.1,3.8,6.1h35.5H7.3h35.5c2.1,0,3.8-2.7,3.8-6.1c0-3.4-1.7-6.1-3.8-6.1H7.6v-25.1 C42,871.8,69,847.3,69,817.6V778.9L69,778.9z"
                })
              )
            ),
            o.createElement(
              "g",
              null,
              o.createElement("path", {
                d:
                  "M40.6,712.5c0-21.6-17.5-39.1-39.1-39.1c-21.6,0-39.1,17.5-39.1,39.1v87.4l10-10v-72.4h0v-5c0-16.1,13.1-29.1,29.1-29.1 c16.1,0,29.1,13.1,29.1,29.1v5v14.1l10-10V712.5z"
              })
            ),
            o.createElement(
              "g",
              null,
              o.createElement("path", {
                d:
                  "M-4.7,835.4c-2.2-0.5-4.4-1.2-6.4-2.2C-9.1,834.2-6.9,834.9-4.7,835.4z"
              }),
              o.createElement("path", {
                d: "M-0.1,836c-0.2,0-0.4,0-0.6,0C-0.6,836-0.4,836-0.1,836z"
              }),
              o.createElement("path", {
                d: "M30.6,806.9C30.6,806.9,30.6,806.9,30.6,806.9v-16.6"
              }),
              o.createElement("path", {
                d:
                  "M-11.9,832.8c0.2,0.1,0.5,0.2,0.7,0.3C-11.4,833-11.7,832.9-11.9,832.8L-11.9,832.8z"
              }),
              o.createElement("path", {
                d:
                  "M-1.7,835.9c-0.3,0-0.5-0.1-0.8-0.1C-2.3,835.8-2,835.8-1.7,835.9z"
              }),
              o.createElement("path", {
                d:
                  "M-3.3,835.7c-0.3-0.1-0.6-0.1-1-0.2C-3.9,835.6-3.6,835.6-3.3,835.7z"
              }),
              o.createElement("path", {
                d:
                  "M30.6,776.1v14.1v16.6c0,0,0,0,0,0s0,0,0,0c0,16.1-13,29.1-29.1,29.1c-0.5,0-1.1,0-1.6,0c-0.2,0-0.4,0-0.6,0 c-0.3,0-0.6,0-1-0.1c-0.3,0-0.5-0.1-0.8-0.1c-0.2,0-0.5-0.1-0.7-0.1c-0.3-0.1-0.6-0.1-1-0.2c-0.2,0-0.3-0.1-0.5-0.1 c-2.2-0.5-4.4-1.2-6.4-2.2c0,0-0.1,0-0.1,0c-0.2-0.1-0.5-0.2-0.7-0.3l0,0c-3-1.6-5.7-3.6-8-6.1l-7.1,7.1 c7.1,7.6,17.3,12.3,28.5,12.3c21.6,0,39.1-17.5,39.1-39.1v-40.8L30.6,776.1z"
              }),
              o.createElement("path", {
                d:
                  "M-0.8,836c-0.3,0-0.6-0.1-1-0.1C-1.4,835.9-1.1,835.9-0.8,836z"
              }),
              o.createElement("path", {
                d: "M1.5,836.1c-0.5,0-1.1,0-1.6,0C0.4,836,0.9,836.1,1.5,836.1z"
              }),
              o.createElement("path", {
                d:
                  "M-2.6,835.8c-0.2,0-0.5-0.1-0.7-0.1C-3,835.7-2.8,835.7-2.6,835.8z"
              }),
              o.createElement("path", {
                d:
                  "M1.5,836.1c16.1,0,29.1-13,29.1-29.1c0,0,0,0,0,0C30.6,823,17.6,836.1,1.5,836.1z"
              }),
              o.createElement("path", {
                d:
                  "M-4.2,835.5c-0.2,0-0.3-0.1-0.5-0.1C-4.5,835.4-4.4,835.5-4.2,835.5z"
              }),
              o.createElement("path", {
                d:
                  "M-11.1,833.2C-11.1,833.2-11.2,833.2-11.1,833.2C-11.2,833.2-11.1,833.2-11.1,833.2z"
              })
            )
          ),
          o.createElement(
            "g",
            { className: "MicFill" },
            o.createElement(
              "g",
              null,
              o.createElement("path", {
                d:
                  "M-53.8,816.1L-65,827.3c2.2,10.8,7.9,20.5,16.2,28.3l8.6-8.6c-8.5-7.9-13.6-18.2-13.6-29.4V816.1L-53.8,816.1z"
              })
            ),
            o.createElement(
              "g",
              null,
              o.createElement("path", {
                d:
                  "M1.5,834.6c-15.2,0-27.6-12.4-27.6-27.6v-94.5c0-15.2,12.4-27.6,27.6-27.6c15.2,0,27.6,12.4,27.6,27.6v94.5 C29.1,822.2,16.7,834.6,1.5,834.6z"
              }),
              o.createElement("path", {
                d:
                  "M1.5,696.3c8.9,0,16.1,7.2,16.1,16.1v94.5c0,8.9-7.2,16.1-16.1,16.1c-8.9,0-16.1-7.2-16.1-16.1v-94.5 C-14.6,703.6-7.4,696.3,1.5,696.3 M1.5,673.3c-21.6,0-39.1,17.5-39.1,39.1v94.5c0,21.6,17.5,39.1,39.1,39.1s39.1-17.5,39.1-39.1 v-94.5C40.6,690.8,23.1,673.3,1.5,673.3L1.5,673.3z"
              })
            )
          ),
          o.createElement(
            "g",
            { className: "MicStrike", fill: "none", strokeWidth: "1" },
            o.createElement("line", {
              x1: "-82.5",
              y1: "866.5",
              x2: "83.5",
              y2: "700.4"
            })
          )
        )
      );
    }
    function f() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Emoticon",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("circle", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "12",
          strokeMiterlimit: "10",
          cx: "128",
          cy: "128",
          r: "107.5"
        }),
        o.createElement("path", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "12",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          d:
            "M74.484,145.945 c0,0,12.996,37.533,53.514,37.533c38.084,0,53.499-37.533,53.499-37.533"
        }),
        o.createElement("line", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "12",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          x1: "94.5",
          y1: "97.5",
          x2: "94.5",
          y2: "109.5"
        }),
        o.createElement("line", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "12",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          x1: "160.5",
          y1: "97.5",
          x2: "160.5",
          y2: "109.5"
        })
      );
    }
    function v() {
      return o.createElement(
        "svg",
        {
          fill: "#FFFFFF",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Submit",
          version: "1.1",
          x: "0px",
          y: "0px",
          viewBox: "0 0 100 100"
        },
        o.createElement(
          "g",
          { transform: "translate(0,-952.36218)" },
          o.createElement("path", {
            d:
              "m 92.115057,974.14842 a 2.0001999,2.0001999 0 0 0 -1.96764,2.02965 l 0.0376,31.19553 -77.475501,0 16.161909,-15.73013 a 2.0002746,2.0002746 0 1 0 -2.790355,-2.8667 L 6.3913393,1007.9405 a 2.0001999,2.0001999 0 0 0 -0.0011,2.8646 l 19.6896957,19.2036 a 2.0002671,2.0002671 0 1 0 2.792551,-2.8646 l -16.170767,-15.771 79.153048,0 a 2.0001999,2.0001999 0 0 0 1.72959,-0.5437 2.0001999,2.0001999 0 0 0 0.0598,-0.058 2.0001999,2.0001999 0 0 0 0.54259,-1.7218 l -0.0388,-32.87638 a 2.0001999,2.0001999 0 0 0 -2.03297,-2.02522 z",
            fill: "#FFFFFF",
            fillOpacity: "1",
            fillRule: "evenodd",
            stroke: "none",
            visibility: "visible",
            display: "inline",
            overflow: "visible"
          })
        )
      );
    }
    function _() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_ResizeIcon",
          x: "0px",
          y: "0px",
          viewBox: "0 0 256 256"
        },
        o.createElement(
          "g",
          null,
          o.createElement("path", {
            fill: "#020202",
            d:
              "M115.512,137.263l21.6-21.6c0,0,25.5,25.5,45.8,45.8l35-35v91.6h-91.6l35-35 C141.012,162.763,115.512,137.263,115.512,137.263z"
          }),
          o.createElement("path", {
            fill: "#020202",
            d:
              "M108.312,129.763c-20.3-20.3-35.8-35.8-35.8-35.8l21.6-21.601c0,0,15.5,15.5,35.8,35.801L108.312,129.763z"
          }),
          o.createElement("path", {
            fill: "#020202",
            d:
              "M54.312,75.763c-20.3-20.3-15.8-15.8-15.8-15.8l21.6-21.601c0,0-4.5-4.5,15.8,15.801L54.312,75.763z"
          })
        )
      );
    }
    function y() {
      return o.createElement(
        "svg",
        {
          fill: "#FFFFFF",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Popout",
          viewBox: "0 0 8 8",
          x: "0px",
          y: "0px"
        },
        o.createElement("path", {
          d:
            "M0 0v8h8v-2h-1v1h-6v-6h1v-1h-2zm4 0l1.5 1.5-2.5 2.5 1 1 2.5-2.5 1.5 1.5v-4h-4z"
        })
      );
    }
    function b(e) {
      return o.createElement(
        "svg",
        Object(r.a)(
          {
            fill: "#FFFFFF",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_X",
            version: "1.1",
            x: "0px",
            y: "0px",
            viewBox: "-165 95 100 100"
          },
          e
        ),
        o.createElement(
          "g",
          null,
          o.createElement("polygon", {
            points:
              "-74.9,117.2 -102.2,145 -74.9,172.8 -89.1,186.8 -116.2,159.3 -143.2,186.8 -157.5,172.8 -130.2,145 -157.5,117.2 -143.2,103.2 -116.2,130.7 -89.1,103.2"
          })
        )
      );
    }
    function E() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_X_Line",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("line", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "45",
          strokeMiterlimit: "10",
          x1: "212",
          y1: "212",
          x2: "44",
          y2: "44"
        }),
        o.createElement("line", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "45",
          strokeMiterlimit: "10",
          x1: "44",
          y1: "212",
          x2: "212",
          y2: "44"
        })
      );
    }
    function g(e) {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_VoiceRoom",
          x: "0px",
          y: "0px",
          width: "64px",
          height: "64px",
          viewBox: "0 0 64 64",
          enableBackground: "new 0 0 64 64"
        },
        !e.exitOnly &&
          o.createElement(
            "g",
            null,
            o.createElement("path", {
              className: "Bubble",
              fill: "none",
              strokeMiterlimit: "1",
              strokeWidth: "2.5px",
              d:
                "M60.1,32.3c0,15.1-12.3,27.3-27.4,27.3 c-5,0-9.7-1.4-13.8-3.7c-1.8-1.1-15,5.4-13.8,3.4c1.7-2.9,5.9-10.3,4.7-12C7,43,5.3,37.8,5.3,32.3C5.3,17.2,17.6,5,32.7,5 C47.8,5,60.1,17.2,60.1,32.3z"
            })
          ),
        !e.exitOnly &&
          o.createElement(
            "g",
            null,
            o.createElement("path", {
              className: "AudioLines",
              opacity: "0",
              strokeWidth: "1px",
              d:
                "M37.2,51.1c-0.5,0-1-0.1-1.3-0.4c-0.7-0.5-0.7-1.3,0-1.8c6.3-4.4,9.8-10.2,9.8-16.4c0-6.2-3.5-12-9.8-16.4 c-0.7-0.5-0.7-1.3,0-1.8s1.9-0.5,2.6,0c7.1,4.9,10.9,11.4,10.9,18.3c0,6.9-3.9,13.4-10.9,18.3C38.2,51,37.7,51.1,37.2,51.1 M21.4,40.2c0.5,0,0.9-0.1,1.3-0.4c2.8-2,4.3-4.6,4.3-7.3s-1.5-5.4-4.3-7.3c-0.7-0.5-1.9-0.5-2.6,0c-0.7,0.5-0.7,1.3,0,1.8 c2.1,1.5,3.3,3.4,3.3,5.5c0,2.1-1.2,4-3.3,5.5c-0.7,0.5-0.7,1.3,0,1.8C20.4,40.1,20.9,40.2,21.4,40.2 M29.3,45.7 c0.5,0,1-0.1,1.3-0.4c4.9-3.4,7.7-7.9,7.7-12.7c0-4.8-2.7-9.3-7.7-12.7c-0.7-0.5-1.9-0.5-2.6,0c-0.7,0.5-0.7,1.3,0,1.8 c4.2,2.9,6.6,6.8,6.6,10.9c0,4.1-2.3,8-6.6,10.9c-0.7,0.5-0.7,1.3,0,1.8C28.4,45.5,28.8,45.7,29.3,45.7"
            })
          ),
        o.createElement(
          "g",
          { className: "Arrow", opacity: e.exitOnly ? 1 : 0 },
          o.createElement("polyline", {
            fill: "none",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            points: "41,30.7 14.5,30.7 23.5,19.4 "
          }),
          o.createElement("polyline", {
            fill: "none",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            points: "41,30.7 14.5,30.7 23.5,42 "
          })
        ),
        o.createElement(
          "g",
          null,
          o.createElement("polyline", {
            className: "ExitDoor",
            opacity: e.exitOnly ? 1 : 0,
            strokeLinecap: "round",
            strokeMiterlimit: "1",
            strokeWidth: "2px",
            fill: "none",
            points:
              "32.5,22.1 32.5,17.7 47.7,17.7 47.7,43.8 32.5,43.8 32.5,39.5"
          })
        ),
        !e.exitOnly &&
          o.createElement(
            "g",
            { className: "Microphone" },
            o.createElement("path", {
              d:
                "M40.971,28.593v6.278c0,4.007-4.023,7.284-8.971,7.284c-2.693,0-5.126-0.974-6.765-2.516 c-1.379-1.28-2.207-2.952-2.207-4.769v-6.278l0,0H21.05v6.278c0,0.536,0.064,1.055,0.162,1.573 c0.357,1.752,1.281,3.325,2.627,4.592c1.801,1.702,4.332,2.839,7.17,3.049v4.072H25.3c-0.341,0-0.616,0.438-0.616,0.989 c0,0.552,0.275,0.99,0.616,0.99h5.759h1.882H38.7c0.341,0,0.616-0.438,0.616-0.99c0-0.551-0.275-0.989-0.616-0.989h-5.71v-4.072 c5.58-0.422,9.96-4.396,9.96-9.214v-6.278H40.971z"
            }),
            o.createElement(
              "g",
              null,
              o.createElement("path", {
                d:
                  "M32,39.841c-3.493,0-6.343-2.344-6.343-5.213v-17.85c0-2.871,2.85-5.213,6.343-5.213s6.343,2.342,6.343,5.213v17.85,C38.343,37.497,35.493,39.841,32,39.841z"
              })
            )
          )
      );
    }
    function w() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_TextRoom",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
          stroke: "#000",
          strokeWidth: "10px"
        },
        o.createElement(
          "g",
          { className: "ScratchPad" },
          o.createElement("path", {
            fill: "none",
            strokeWidth: "0",
            strokeMiterlimit: "10",
            d:
              "M179.751,40.994h14.869 c8.388,0,15.25,6.862,15.25,15.25v141.193c0,8.388-6.862,15.25-15.25,15.25H57.37c-8.388,0-15.25-6.862-15.25-15.25V56.244 c0-8.388,6.862-15.25,15.25-15.25h14.869H179.751z"
          }),
          o.createElement("line", {
            fill: "none",
            strokeWidth: "0",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            x1: "74.495",
            y1: "27.313",
            x2: "74.495",
            y2: "54.063"
          }),
          o.createElement("line", {
            fill: "none",
            strokeWidth: "0",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            x1: "124.495",
            y1: "27.313",
            x2: "124.495",
            y2: "54.063"
          }),
          o.createElement("line", {
            fill: "none",
            strokeWidth: "0",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            x1: "174.745",
            y1: "27.313",
            x2: "174.745",
            y2: "54.063"
          })
        ),
        o.createElement("line", {
          className: "TextLines",
          x1: "71.6",
          y1: "115.4",
          x2: "179.4",
          y2: "115.4"
        }),
        o.createElement("line", {
          className: "TextLines",
          x1: "71.6",
          y1: "145.8",
          x2: "143.3",
          y2: "145.8"
        }),
        o.createElement("line", {
          className: "TextLines",
          x1: "71.6",
          y1: "175.9",
          x2: "179.4",
          y2: "175.9"
        }),
        o.createElement("line", {
          className: "TextLines",
          x1: "73.7",
          y1: "82.7",
          x2: "166.8",
          y2: "82.7"
        })
      );
    }
    function S(e) {
      var t = "SVGIcon_Button SVGIcon_Headphones";
      return (
        e.className && (t += " " + e.className),
        o.createElement(
          "svg",
          {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "-305.5 396.5 256 256"
          },
          o.createElement(
            "g",
            { className: "HeadPhonesBase" },
            o.createElement(
              "g",
              null,
              o.createElement("path", {
                fill: "none",
                d:
                  "M-176.5,418.7c-37,0-69.5,30.2-69.5,64.5v25.3c11.3,2.3,19.9,12.3,19.9,24.3v8.6l100.9-100.9 C-138.2,427.3-156.7,418.7-176.5,418.7z"
              }),
              o.createElement("path", {
                d:
                  "M-226.2,532.9c0-12-8.5-22-19.9-24.3v-25.3c0-34.4,32.5-64.5,69.5-64.5c19.8,0,38.3,8.6,51.2,21.9l6.9-6.9 c-14.8-15.1-35.7-24.9-58.2-24.9c-42.3,0-79.4,34.8-79.4,74.5v25.3c-11.3,2.3-19.9,12.3-19.9,24.3v29.8c0,7.8,3.6,14.7,9.2,19.3 l40.5-40.5V532.9z"
              }),
              o.createElement("path", {
                d:
                  "M-97.1,508.6v-25.3c0-7.5-1.3-14.8-3.8-21.8l-7.9,7.9c1.2,4.5,1.8,9.1,1.8,13.9v25.3c-11.3,2.3-19.9,12.3-19.9,24.3v29.8 c0,13.7,11.1,24.8,24.8,24.8c13.7,0,24.8-11.1,24.8-24.8v-29.8C-77.2,520.9-85.8,510.9-97.1,508.6z"
              })
            )
          ),
          o.createElement(
            "g",
            { className: "HeadphonesStrike" },
            o.createElement("line", {
              fill: "none",
              x1: "-260.5",
              y1: "598.5",
              x2: "-94.5",
              y2: "432.4"
            })
          ),
          o.createElement(
            "g",
            { className: "HeadPhonesFill" },
            o.createElement("path", {
              d:
                "M-226.2,562.7v-21.2l-40.5,40.5c4.3,3.5,9.7,5.6,15.6,5.6C-237.3,587.5-226.2,576.4-226.2,562.7z"
            }),
            o.createElement("path", {
              d:
                "M-118.3,433.7l-6.9,6.9c7.9,8.1,13.7,18,16.5,28.8l7.9-7.9C-104.5,451.1-110.5,441.6-118.3,433.7z"
            })
          )
        )
      );
    }
    function k() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_5",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Group",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement(
          "g",
          { transform: "translate(0,-952.36218)" },
          o.createElement("path", {
            d:
              "M58.6,970.4c-15.4,0-28.1,12.7-28.1,28.1c0,15.4,12.7,28.1,28.1,28.1s28.1-12.7,28.1-28.1\tC86.7,983,74,970.4,58.6,970.4z M202.1,970.4c-15.4,0-28.1,12.7-28.1,28.1c0,15.4,12.7,28.1,28.1,28.1s28.1-12.7,28.1-28.1 C230.2,983,217.6,970.4,202.1,970.4z M130.4,986c-15.4,0-28.1,12.7-28.1,28.1c0,15.4,12.7,28.1,28.1,28.1s28.1-12.7,28.1-28.1 C158.5,998.6,145.8,986,130.4,986z M242.8,1110.6c0-0.1,0-17.9,0-18l-0.1-16.1c0-22.4-18.2-40.6-40.6-40.6 c-17.8,0-30,7.7-36.3,18.8c-2,3.5-3.4,7.3-4.5,11.1c-7.5-8.7-18.6-14.3-31-14.3s-23.5,5.6-31,14.3c-1.1-3.9-2.5-7.6-4.5-11.1 c-6.3-11.1-18.4-18.8-36.3-18.8c-22.4,0-40.6,18.2-40.6,40.6v46.8c0,3.4,2.8,6.2,6.2,6.2h12.5v31.2c0,3.4,2.8,6.2,6.2,6.2h31.2 c3.4,0,6.2-2.8,6.2-6.2v-31.2h9.4v9.4c0,3.4,2.8,6.2,6.2,6.2h12.5v31.2c0,3.4,2.8,6.2,6.2,6.2H146c3.4,0,6.2-2.8,6.2-6.2v-31.2 h12.5c3.4,0,6.2-2.8,6.2-6.2v-9.4h9.4v31.2c0,3.4,2.8,6.2,6.2,6.2h31.2c3.4,0,6.2-2.8,6.2-6.2v-31.2h12.5c3.4,0,6.3-2.7,6.3-6.2\tV1110.6z"
          })
        )
      );
    }
    function x(e) {
      var t = "SVGIcon_Button SVGIcon_Pin";
      return (
        e.bPinned && (t += " Pinned"),
        o.createElement(
          "svg",
          {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          o.createElement("path", {
            className: "point",
            d:
              "M134.787,129.241v52.051v26.025c0.041,4.334-0.092,8.677,0.094,13.009c-1.493,4.332-3.129,8.675-5.239,13.009 c-2.109-4.334-3.734-8.677-5.237-13.009c0.186-4.333,0.05-8.677,0.092-33.009v-26.025v-32.051v-5.146h10.291V129.241z"
          }),
          o.createElement("path", {
            className: "head",
            d:
              "M186.55,151.049H73.351l-5.146-5.146c0-23.791,11.186-40.359,30.871-46.091V39.394 c-6.843-3.478-17.164-10.034-17.154-27.312l5.146-5.146h85.167l5.146,5.146c0,17.227-9.828,23.803-16.537,27.292v60.521 c19.664,6.062,30.852,22.609,30.852,46.01L186.55,151.049z"
          }),
          o.createElement("line", {
            className: "ground",
            opacity: e.bPinned ? 1 : 0,
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "16",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            x1: "33.833",
            y1: "238.5",
            x2: "221.834",
            y2: "238.5"
          })
        )
      );
    }
    function M(e) {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_PlusCircle",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        !e.nocircle &&
          o.createElement("circle", {
            fill: "none",
            strokeWidth: "10",
            strokeMiterlimit: "10",
            cx: "128",
            cy: "128",
            r: "95.333"
          }),
        o.createElement("line", {
          className: "horizontalLine",
          fill: "none",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          x1: "73.333",
          y1: "128",
          x2: "183.333",
          y2: "128"
        }),
        !e.minus &&
          o.createElement("line", {
            className: "verticalLine",
            fill: "none",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            x1: "128.333",
            y1: "73.335",
            x2: "128.333",
            y2: "183.333"
          })
      );
    }
    function C() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_AddFriend",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement(
          "g",
          {
            className: "friendHead",
            transform: "matrix(1.34048,0,0,1.34048,-10.0942,-5.50445)"
          },
          o.createElement("circle", { cx: "86.296", cy: "47.419", r: "33.526" })
        ),
        o.createElement("path", {
          className: "friendBody",
          d:
            "M100.353,170.882c0-23.589,10.397-44.736,26.842-59.152c-3.352-0.423-6.773-0.649-10.257-0.649H94.231\tc-39.775,0-56.481,28.271-56.481,63.099v41.88c0,0-0.3,16.369,35.917,21.813c36.217,5.444,73.651,5,73.651,5 C119.666,230.681,100.353,203.044,100.353,170.882z"
        }),
        o.createElement("path", {
          className: "plusCircle",
          d:
            "M179.01,103.892c-36.998,0-66.99,29.992-66.99,66.99s29.994,66.989,66.99,66.989c36.997,0,66.99-29.991,66.99-66.989 S216.008,103.892,179.01,103.892z M217.893,175.882h-33.647v33.882c0,2.762-2.239,5-5,5s-5-2.238-5-5v-33.882h-33.647 c-2.762,0-5-2.238-5-5c0-2.763,2.238-5,5-5h33.647V132.47c0-2.762,2.239-5,5-5s5,2.238,5,5v33.412h33.647c2.762,0,5,2.237,5,5 C222.893,173.643,220.654,175.882,217.893,175.882z"
        })
      );
    }
    function P() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_4",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_FriendRequest",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement(
          "g",
          {
            className: "friendHead",
            transform: "matrix(1.34048,0,0,1.34048,-10.0942,-5.50445)"
          },
          o.createElement("circle", { cx: "85.923", cy: "47.419", r: "33.526" })
        ),
        o.createElement("path", {
          className: "friendBody",
          d:
            "M100.353,170.882c0-23.589,10.397-44.736,26.842-59.152c-3.352-0.423-6.773-0.649-10.257-0.649H94.231\tc-39.775,0-56.481,28.271-56.481,63.099v41.88c0,0-0.3,16.369,35.917,21.813c36.217,5.444,73.651,5,73.651,5 C119.666,230.681,100.353,203.044,100.353,170.882z"
        }),
        o.createElement("path", {
          className: "friendBodyFull",
          d:
            "M176.504,217.922v-42.624c0-35.443-17.002-64.217-57.483-64.217H106.96h-1.017H94.898 c-40.48,0.001-57.484,28.774-57.484,64.217v42.624c0,0,0,22.197,69.544,22.197C177.521,240.121,176.504,217.922,176.504,217.922z"
        }),
        o.createElement("path", {
          className: "friendArm",
          d:
            "M18.167,63.833c6.53-0.734,39.348,39.127,50.007,47.647s21.327,16.686,15.16,25.353s-20.646,16.74-36.167,2.5 S-1.349,90.532,0,85.333S8.599,64.909,18.167,63.833z"
        }),
        o.createElement("path", {
          className: "redCircle",
          d:
            "M178.51,103.892c-36.998,0-66.99,29.992-66.99,66.99s29.994,66.99,66.99,66.99c36.997,0,66.99-29.992,66.99-66.99 S215.508,103.892,178.51,103.892z"
        })
      );
    }
    function L() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_5",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Invite",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "255.999px",
          viewBox: "0 0 256 255.999"
        },
        o.createElement("path", {
          d:
            "M165.678,20.535c-17.251,0-31.386,14.135-31.386,31.386c0,17.252,14.135,31.386,31.386,31.386 c17.251,0,31.386-14.134,31.386-31.386C197.063,34.67,182.929,20.535,165.678,20.535z"
        }),
        o.createElement("path", {
          d:
            "M165.678,93.121c24.995,0,45.335,20.34,45.335,45.335v52.31c0,3.853-3.123,6.975-6.975,6.975h-13.95v34.874 c0,3.852-3.123,6.974-6.974,6.975h-34.874c-3.852-0.001-6.974-3.123-6.975-6.975v-34.874h-13.95c-3.852,0-6.974-3.123-6.974-6.975 v-52.31C120.343,113.461,140.683,93.121,165.678,93.121z"
        }),
        o.createElement(
          "g",
          { className: "invitePlus" },
          o.createElement("line", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "22",
            strokeMiterlimit: "10",
            x1: "14",
            y1: "128",
            x2: "101.5",
            y2: "128"
          }),
          o.createElement("line", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "22",
            strokeMiterlimit: "10",
            x1: "57.75",
            y1: "84.25",
            x2: "57.75",
            y2: "171.75"
          })
        )
      );
    }
    function O() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_5",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Paperclip",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("path", {
          fill: "none",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          d:
            "M167.768,62.647 l-0.012,123.052c0,24.729-19.334,44.856-43.096,44.866c-23.765-0.006-43.099-20.134-43.096-44.872L81.557,48.851 c0-15.345,14.483-27.827,29.83-27.83c15.342,0.003,27.827,12.488,27.833,27.833l-0.002,139.245 c0.003,6.376-8.546,12.925-14.925,12.925c0,0-13.929-0.166-13.929-12.928l0.003-124.839"
        })
      );
    }
    function I(e) {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Volume",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "255.999px",
          viewBox: "0 0 256 255.999"
        },
        o.createElement(
          "g",
          { className: "Speaker" },
          o.createElement("path", {
            d:
              "M93.785,52.265c-0.946,0-2.357,0.63-3.304,1.577L40.284,98.022c-0.947,0.789-2.831,1.578-4.093,1.578H9.367 C8.104,99.6,7,100.706,7,101.967v52.069c0,1.264,1.104,2.367,2.367,2.367H36.19c1.262,0,3.146,0.632,4.093,1.578l50.197,44.181 c0.947,0.789,2.516,1.578,3.304,1.578s1.578-1.104,1.578-2.367V54.631C95.363,53.369,94.731,52.265,93.785,52.265z"
          })
        ),
        !e.muted &&
          o.createElement(
            "g",
            { className: "SoundWaves" },
            o.createElement("path", {
              className: "SoundWavesHighest",
              d:
                "M193.826,30.402c24.959,24.958,40.349,59.403,40.349,97.604c0,38.199-15.388,72.645-40.349,97.603l9.916,9.916 c28.067-28.067,44.263-64.673,44.263-107.521c0-42.847-16.196-79.455-44.263-107.521"
            }),
            o.createElement("path", {
              className: "SoundWavesHigh",
              d:
                "M175.737,47.628l-8.924,8.924c18.271,18.27,29.536,43.484,29.536,71.448s-11.264,53.178-29.536,71.448l8.924,8.924 c20.546-20.546,33.234-49.008,33.234-80.374c0-31.366-12.688-59.829-33.234-80.374V47.628z"
            }),
            o.createElement("path", {
              className: "SoundWavesMed",
              d:
                "M148.913,74.454l-8.925,8.925c11.488,11.488,18.491,27.236,18.491,44.624c0,17.388-7.054,33.281-18.491,44.575l8.875,8.975 c13.811-13.635,22.239-32.753,22.239-53.55c0-20.797-8.432-39.793-22.189-53.55V74.454z"
            }),
            o.createElement("path", {
              className: "SoundWavesLow",
              d:
                "M121.989,101.229l-8.778,9.073c4.641,4.516,7.397,10.706,7.397,17.702c0,6.995-2.755,13.186-7.397,17.702l8.778,9.073 c7.035-6.844,11.243-16.413,11.243-26.775C133.232,117.643,129.024,108.075,121.989,101.229z"
            })
          ),
        o.createElement(
          "g",
          { className: "SoundX" },
          o.createElement("line", {
            fill: "none",
            strokeWidth: e.muted ? 10 : 0,
            stroke: "#fff",
            strokeMiterlimit: "10",
            x1: "137",
            y1: "170.667",
            x2: "223.167",
            y2: "84.5"
          }),
          o.createElement("line", {
            fill: "none",
            strokeWidth: e.muted ? 10 : 0,
            stroke: "#fff",
            strokeMiterlimit: "10",
            x1: "137",
            y1: "84.5",
            x2: "223.167",
            y2: "170.667"
          })
        )
      );
    }
    function B() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_NewChatGroup",
          x: "0px",
          y: "0px",
          viewBox: "0 0 256 256"
        },
        o.createElement("path", {
          className: "Bubble",
          strokeWidth: "12",
          strokeMiterlimit: "10",
          d:
            "M127.393,10.833 c64.854,0,117.46,52.609,117.46,117.013c0,24.035-7.254,45.804-19.5,63.943c-4.99,7.711,13.15,39.457,20.408,51.705 c4.989,8.612-51.701-19.05-59.412-14.514c-17.233,9.979-37.188,15.872-58.957,15.872c-64.859,0-117.465-52.607-117.465-117.008 C9.928,63.442,62.534,10.833,127.393,10.833z"
        }),
        o.createElement("line", {
          strokeWidth: "22",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          x1: "83.5",
          y1: "128.886",
          x2: "176.184",
          y2: "128.886"
        }),
        o.createElement("line", {
          strokeWidth: "22",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          x1: "129.842",
          y1: "82.544",
          x2: "129.842",
          y2: "175.228"
        })
      );
    }
    function N() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Crown",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement(
          "g",
          null,
          o.createElement("path", {
            d:
              "M239.874,94.963l-31.115,21.325c-18.18,12.586-43.351,5.594-52.44-14.333l-23.772-50.692c-2.099-4.194-8.041-4.194-9.789,0 l-23.074,50.343c-9.439,20.627-35.31,27.27-53.49,13.983L16.128,93.565c-4.195-3.147-10.139,1.049-8.391,6.293l31.464,106.628 c0.35,1.049,1.398,1.397,2.098,1.397h173.752c1.049,0,1.749-0.698,2.098-1.397l31.115-104.53 C250.012,96.36,244.068,91.816,239.874,94.963z"
          })
        )
      );
    }
    function T() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Play",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("path", {
          className: "playTriangle",
          d:
            "M65.321,33.521c-11.274-6.615-20.342-1.471-20.342,11.52V210.96c0,12.989,9.068,18.135,20.342,11.521l137.244-82.348 c11.274-6.618,11.274-17.646,0-24.509L65.321,33.521z"
        })
      );
    }
    function G() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Pause",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("path", {
          d:
            "M44.979,219.364c0,3.3,2.7,6,6,6h49.753c3.3,0,6-2.7,6-6V36.5c0-3.3-2.7-6-6-6H50.979c-3.3,0-6,2.7-6,6V219.364z"
        }),
        o.createElement("path", {
          d:
            "M149.267,219.364c0,3.3,2.7,6,6,6h49.753c3.3,0,6-2.7,6-6V36.5c0-3.3-2.7-6-6-6h-49.753c-3.3,0-6,2.7-6,6V219.364z"
        })
      );
    }
    function D(e) {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_SortBy",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        e.bytime
          ? o.createElement(
              "g",
              { className: "time" },
              o.createElement("circle", {
                fill: "none",
                strokeWidth: "10",
                strokeMiterlimit: "10",
                cx: "91.735",
                cy: "128.014",
                r: "64"
              }),
              o.createElement("polyline", {
                fill: "none",
                strokeWidth: "10",
                strokeLinecap: "round",
                strokeMiterlimit: "10",
                points: "91.735,90.833 91.735,128.014 116.58,152.086 \t"
              })
            )
          : o.createElement(
              "g",
              { className: "alphabet" },
              o.createElement("polyline", {
                fill: "none",
                strokeWidth: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: "10",
                points: "70.268,109.934 94.483,63.635 119.77,109.934"
              }),
              o.createElement("line", {
                fill: "none",
                strokeWidth: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: "10",
                x1: "77.458",
                y1: "97.861",
                x2: "112.135",
                y2: "97.861"
              }),
              o.createElement("polyline", {
                fill: "none",
                strokeWidth: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: "10",
                points:
                  "70.045,145.379 119.547,145.379 70.045,192.032 119.547,192.032"
              })
            ),
        o.createElement(
          "g",
          { className: "Arrow" },
          o.createElement("polyline", {
            fill: "none",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            points: "199.735,63.66 199.735,192.366 171.207,163.675"
          }),
          o.createElement("polyline", {
            fill: "none",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            points: "199.735,63.66 199.735,192.366 228.266,163.675"
          })
        )
      );
    }
    function R() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "base",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Check",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("polyline", {
          fill: "none",
          stroke: "#fff",
          strokeWidth: "24",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
          points: "49.5,147.75 95,210.75 206.5,45.25 "
        })
      );
    }
    function V(e) {
      var t = e.highlightColor || "#00ccff",
        n = e.color || "#2d73ff";
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "base",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_DialogCheck",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement(
          "defs",
          null,
          o.createElement(
            "linearGradient",
            { id: "linear", x1: "0%", y1: "0%", x2: "100%", y2: "100%" },
            o.createElement("stop", {
              id: "stop0",
              offset: "0%",
              stopColor: t
            }),
            o.createElement("stop", {
              id: "stop1",
              offset: "100%",
              stopColor: n
            })
          ),
          o.createElement(
            "filter",
            { id: "f1", x: "0", y: "0", width: "200%", height: "200%" },
            o.createElement("feOffset", {
              result: "offOut",
              in: "SourceAlpha",
              dx: "20",
              dy: "20"
            }),
            o.createElement("feGaussianBlur", {
              result: "blurOut",
              in: "offOut",
              stdDeviation: "10"
            }),
            o.createElement("feBlend", {
              in: "SourceGraphic",
              in2: "blurOut",
              mode: "normal"
            })
          )
        ),
        o.createElement("path", {
          fill: "none",
          stroke: "url(#linear)",
          strokeWidth: "24",
          strokeLinecap: "round",
          strokeLinejoin: "miter",
          strokeMiterlimit: "10",
          d: "M206.5,45.25L95,210.75l-45.5-63",
          strokeDasharray: "365.19 365.19",
          strokeDashoffset: "0.00"
        }),
        o.createElement("path", {
          fill: "none",
          opacity: ".2",
          filter: "url(#f1)",
          stroke: "url(#linear)",
          strokeWidth: "24",
          strokeLinecap: "round",
          strokeLinejoin: "miter",
          strokeMiterlimit: "10",
          d: "M206.5,45.25L95,210.75l-45.5-63",
          strokeDasharray: "365.19 365.19",
          strokeDashoffset: "0.00"
        })
      );
    }
    function H() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Caution",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement(
          "g",
          { className: "triangle" },
          o.createElement("path", {
            stroke: "#020202",
            strokeWidth: "16",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            d: "M127.9,76.632"
          }),
          o.createElement("path", {
            fill: "none",
            stroke: "#020202",
            strokeWidth: "11",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "5",
            d:
              "M128.001,226.606c42.507,0,81.538,0,87.756,0c31.222,0,36.95-14.974,24.045-34.771c-6.921-10.617-78.297-122.962-89.163-140.254\tC141.859,37.613,138.542,29.393,128,29.393l0,0c-10.543,0-13.86,8.222-22.639,22.189C94.495,68.874,23.119,181.219,16.198,191.836 c-12.905,19.797-7.175,34.771,24.045,34.771C46.463,226.606,85.494,226.606,128.001,226.606"
          }),
          o.createElement("path", { fill: "#020202", d: "M127.9,208.12" })
        ),
        o.createElement(
          "g",
          { className: "exclamation" },
          o.createElement("line", {
            fill: "none",
            stroke: "#020202",
            strokeWidth: "16",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            x1: "127.9",
            y1: "76.632",
            x2: "127.9",
            y2: "160.07"
          }),
          o.createElement("path", {
            fill: "#020202",
            d:
              "M127.9,208.12c-6.377,0-11.548-5.17-11.548-11.548c0-6.377,5.17-11.547,11.548-11.547 c6.377,0,11.547,5.17,11.547,11.547C139.447,202.95,134.277,208.12,127.9,208.12"
          })
        )
      );
    }
    function F() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Lock",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("path", {
          className: "topLock",
          d:
            "M203.553,197.794c0,21.929-17.778,39.706-39.706,39.706H92.154c-21.929,0-39.706-17.777-39.706-39.706v-71.693 c0-21.928,17.778-39.706,39.706-39.706h71.692c21.928,0,39.706,17.778,39.706,39.706V197.794z M128.001,129.664 c-8.941,0-16.19,7.248-16.19,16.189c0,5.589,2.833,10.518,7.137,13.427c2.066,1.395,0.318,23.508,0.318,32.842 c0,2.292-0.078,3.65,8.734,3.65c8.676,0,8.75-1.221,8.75-3.654c0-9.348-1.708-31.469,0.368-32.886 c4.269-2.916,7.071-7.821,7.071-13.38C144.191,136.912,136.941,129.664,128.001,129.664z"
        }),
        o.createElement("path", {
          className: "baseLock",
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "22",
          strokeMiterlimit: "10",
          d:
            "M84.813,172.74V73.688l0,0 c0-23.85,19.335-43.188,43.187-43.188l0,0c23.852,0,43.188,19.337,43.188,43.188l0,0v23.885"
        })
      );
    }
    function W(e) {
      var t = "SVGIcon_Button SVGIcon_Throbber ";
      return (
        e.className && (t += e.className),
        o.createElement(
          "svg",
          {
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          o.createElement(
            "g",
            { className: c.a.partCircle },
            o.createElement("path", {
              className: c.a.roundOuter,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895"
            }),
            o.createElement("path", {
              className: c.a.roundOuter,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M201.432,101.166"
            }),
            o.createElement("path", {
              className: c.a.roundOuter,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754"
            })
          ),
          o.createElement(
            "g",
            { className: c.a.mainOutline },
            o.createElement("path", {
              className: c.a.roundFill,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            o.createElement("path", {
              className: c.a.roundOuterOutline,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            o.createElement("path", {
              className: c.a.roundThrobber01,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            o.createElement("path", {
              className: c.a.roundThrobber02,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            o.createElement("path", {
              className: c.a.roundThrobber03,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            o.createElement("path", {
              className: c.a.roundThrobber04,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            o.createElement("path", {
              className: c.a.roundThrobber05,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            o.createElement("path", {
              className: c.a.roundThrobber06,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            o.createElement("path", {
              className: c.a.roundThrobber07,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            o.createElement("path", {
              className: c.a.roundThrobber08,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            o.createElement("path", {
              className: c.a.roundThrobber09,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            o.createElement("path", {
              className: c.a.roundThrobber10,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            o.createElement("path", {
              className: c.a.roundThrobber11,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            o.createElement("path", {
              className: c.a.roundThrobber12,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            o.createElement("path", {
              className: c.a.roundThrobber13,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            o.createElement("path", {
              className: c.a.roundThrobber14,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            o.createElement("path", {
              className: c.a.roundThrobber15,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            })
          ),
          o.createElement(
            "g",
            { className: c.a.bottomCircle },
            o.createElement("path", {
              fill: "#ffffff",
              d:
                "M89.226,181.579L76.5,176.321c2.256,4.696,6.159,8.628,11.339,10.786 c11.197,4.668,24.11-0.647,28.779-11.854c2.259-5.425,2.274-11.405,0.033-16.841c-2.237-5.436-6.46-9.675-11.886-11.938 c-5.384-2.24-11.151-2.156-16.22-0.244l13.146,5.436c8.261,3.443,12.166,12.93,8.725,21.189 C106.976,181.115,97.486,185.022,89.226,181.579"
            })
          ),
          o.createElement(
            "g",
            { className: c.a.topCircle },
            o.createElement("circle", {
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              cx: "161.731",
              cy: "101.274",
              r: "23.019"
            })
          )
        )
      );
    }
    function z() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "base",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Video",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("path", {
          className: "videoPlayButton",
          d:
            "M165.399,124.063L109.118,92.06c-1.399-0.797-3.118-0.787-4.508,0.026c-1.39,0.805-2.25,2.295-2.25,3.905v64.008 c0,1.609,0.86,3.1,2.25,3.913c0.705,0.412,1.491,0.613,2.277,0.613c0.768,0,1.546-0.191,2.241-0.596l56.283-32.003 c1.416-0.806,2.285-2.306,2.285-3.934C167.694,126.368,166.816,124.869,165.399,124.063z"
        }),
        o.createElement("path", {
          d:
            "M238.069,40.646H214.25h-28.82h-28.82h-28.458h-0.36H99.333H70.536H41.727h-23.82c-3.184,0-5.773,2.59-5.773,5.772v23.856 v120.441v18.867c0,3.184,2.589,5.771,5.773,5.771h2.415h21.394h28.82h28.82h28.459h0.361h28.457h28.82h28.82h23.82 c3.184,0,5.773-2.589,5.773-5.771v-18.867V70.274V46.418C243.844,43.223,241.254,40.646,238.069,40.646z M191.215,47.181h17.273  V64.5h-17.273V47.181L191.215,47.181z M162.396,47.181h17.272V64.5h-17.272V47.181z M133.938,47.181h16.912V64.5h-16.912V47.181z\tM105.128,47.181h16.912V64.5h-16.912V47.181z M76.309,47.181h17.273V64.5H76.309V47.181z M47.488,47.181h17.273V64.5H47.488V47.181 z M18.681,47.181h17.273V64.5H18.681V47.181z M35.954,208.811H18.681v-17.319h17.273V208.811z M64.763,208.811H47.489v-17.319 h17.273V208.811L64.763,208.811z M93.583,208.811H76.31v-17.319h17.273V208.811z M122.041,208.811h-16.912v-17.319h16.912V208.811z M150.849,208.811h-16.912v-17.319h16.912V208.811z M179.668,208.811h-17.272v-17.319h17.272V208.811z M208.488,208.811h-17.273 v-17.319h17.273V208.811z M237.297,208.811h-17.273v-17.319h17.273V208.811L237.297,208.811z M237.297,184.943H214.25h-28.819 h-28.82h-28.458h-0.361H99.333H70.537H41.728H18.682V71.047h23.046h28.82h28.82h28.458h0.36h28.458h28.82h28.82h23.045v113.896 H237.297z M237.297,64.5h-17.273V47.181h17.273V64.5L237.297,64.5z"
        })
      );
    }
    function j() {
      return o.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          version: "1.1",
          className: "SVGIcon_Button SVGIcon_Image",
          x: "0px",
          y: "0px",
          viewBox: "0 0 100 100",
          enableBackground: "new 0 0 100 100"
        },
        o.createElement("path", {
          stroke: "#ffffff",
          fill: "#ffffff",
          d:
            "M83.086,12.091H16.913C10.344,12.091,5,17.435,5,24.004v51.992l0.005,0.102c0.056,6.514,5.396,11.813,11.908,11.813h66.173  c6.531,0,11.874-5.314,11.906-11.764L95,24.004C95,17.435,89.654,12.091,83.086,12.091z M83.086,82.989H16.913  c-3.516,0-6.488-2.653-6.93-6.106l18.899-20.615c1.226-1.34,2.85-2.076,4.574-2.076c1.723,0,3.347,0.736,4.574,2.078l19.611,21.393  c0.885,0.961,2.508,1.029,3.473,0.148c1-0.916,1.068-2.476,0.152-3.478l-4.113-4.485l8.406-8.918  c1.258-1.332,2.926-2.064,4.696-2.064c1.772,0,3.44,0.732,4.696,2.064l15.061,15.973C89.564,80.346,86.594,82.989,83.086,82.989z   M90.08,69.801L78.532,57.555c-2.194-2.328-5.132-3.609-8.275-3.609c-3.142,0-6.08,1.281-8.272,3.609l-8.164,8.656l-12.162-13.27  c-2.171-2.366-5.084-3.67-8.201-3.67c-3.119,0-6.031,1.304-8.202,3.67L9.92,69.673V24.004c0-3.856,3.137-6.994,6.993-6.994h66.173  c3.857,0,6.994,3.137,6.994,6.994V69.801z"
        }),
        o.createElement("path", {
          stroke: "#ffffff",
          fill: "#ffffff",
          d:
            "M68.907,22.489c-6.569,0-11.914,5.344-11.914,11.914c0,6.569,5.345,11.913,11.914,11.913  c6.567,0,11.913-5.344,11.913-11.913C80.82,27.833,75.477,22.489,68.907,22.489z M68.907,41.396c-3.856,0-6.993-3.137-6.993-6.993  s3.137-6.994,6.993-6.994c3.854,0,6.991,3.138,6.991,6.994S72.764,41.396,68.907,41.396z"
        })
      );
    }
    function A() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "base",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Bell",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("path", {
          d:
            "M107.785,33.965c-34.875,8.972-60.644,40.618-60.644,78.308v53.903c0,4.965-4.035,8.99-8.975,8.99 c-9.929,0-17.978,8.066-17.978,17.971c0,9.924,8.059,17.969,18.013,17.969h179.598c9.948,0,18.014-8.066,18.014-17.969 c0-9.926-8.087-17.971-17.979-17.971c-4.956,0-8.975-3.993-8.975-8.99v-53.903c0-37.676-25.763-69.333-60.644-78.308v-9.281 c0-11.193-9.052-20.219-20.215-20.219c-11.143,0-20.215,9.052-20.215,20.219V33.965L107.785,33.965z M96.554,220.09h62.891 c0,17.366-14.079,31.445-31.445,31.445C110.633,251.535,96.554,237.458,96.554,220.09z"
        })
      );
    }
    function U(e) {
      return o.createElement(
        "svg",
        {
          style: { transform: "rotate(" + e.angle + "deg)" },
          version: "1.1",
          id: "arrowBase",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Arrow",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("polyline", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
          points: "128,247.688 128,8.313 181.061,61.674 "
        }),
        o.createElement("polyline", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
          points: "128,247.688 128,8.313 74.939,61.674 "
        })
      );
    }
    function K(e) {
      return o.createElement(
        "svg",
        {
          style: { transform: "rotate(" + e.angle + "deg)" },
          version: "1.1",
          id: "arrowBase",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_DoubleArrow",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("polyline", {
          className: "Arrow1",
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "23",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          points: "135.65,21.667 30.081,127.235 137.18,234.333 "
        }),
        !e.singlearrow &&
          o.createElement("polyline", {
            className: "Arrow2",
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "23",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            points: "224.389,21.667 118.821,127.235 225.92,234.333 "
          })
      );
    }
    function Y() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "arrowBase",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_DoubleArrow",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("polyline", {
          className: "Arrow1",
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "23",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          points: "135.65,21.667 30.081,127.235 137.18,234.333 "
        }),
        o.createElement("polyline", {
          className: "Arrow2",
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "23",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          points: "224.389,21.667 118.821,127.235 225.92,234.333 "
        })
      );
    }
    function X() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "base",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Maximize",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("rect", {
          x: "24",
          y: "42.167",
          fill: "none",
          stroke: "rgb(120, 138, 146)",
          strokeWidth: "18",
          strokeMiterlimit: "10",
          width: "208",
          height: "171.667"
        }),
        o.createElement("line", {
          fill: "none",
          stroke: "rgb(120, 138, 146)",
          strokeWidth: "42",
          strokeMiterlimit: "10",
          x1: "24",
          y1: "54.01",
          x2: "232",
          y2: "54.01"
        })
      );
    }
    function q() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "base",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Minimize",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("line", {
          fill: "none",
          stroke: "rgb(120, 138, 146)",
          strokeWidth: "18",
          strokeMiterlimit: "10",
          x1: "24",
          y1: "209.01",
          x2: "232",
          y2: "209.01"
        })
      );
    }
    function J() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Restore",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("polyline", {
          fill: "none",
          stroke: "rgb(120, 138, 146)",
          strokeWidth: "12",
          strokeMiterlimit: "10",
          points: "83,90.861 83,42.167 232,42.167 232,165.14 173,165.14 "
        }),
        o.createElement("rect", {
          x: "24",
          y: "90.861",
          fill: "none",
          stroke: "rgb(120, 138, 146)",
          strokeWidth: "18",
          strokeMiterlimit: "10",
          width: "149",
          height: "122.973"
        })
      );
    }
    function Q() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "base",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_SingleWindowToggle",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement(
          "g",
          { className: "mainBox" },
          o.createElement("rect", {
            x: "90",
            y: "42.167",
            fill: "none",
            stroke: "rgb(120, 138, 146)",
            strokeWidth: "18",
            strokeMiterlimit: "10",
            width: "142",
            height: "171.667"
          }),
          o.createElement("line", {
            fill: "none",
            stroke: "rgb(120, 138, 146)",
            strokeWidth: "42",
            strokeMiterlimit: "10",
            x1: "90",
            y1: "54.01",
            x2: "232",
            y2: "54.01"
          })
        ),
        o.createElement(
          "g",
          { className: "leftBox" },
          o.createElement("rect", {
            x: "28",
            y: "42.167",
            fill: "none",
            stroke: "rgb(120, 138, 146)",
            strokeWidth: "18",
            strokeMiterlimit: "10",
            width: "62",
            height: "171.667"
          }),
          o.createElement("line", {
            fill: "none",
            stroke: "rgb(120, 138, 146)",
            strokeWidth: "42",
            strokeMiterlimit: "10",
            x1: "28",
            y1: "54.01",
            x2: "90",
            y2: "54.01"
          })
        )
      );
    }
    function Z() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Reload",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("path", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "30",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          d:
            "M229.809,147.639 c-9.178,47.863-51.27,84.027-101.809,84.027c-57.253,0-103.667-46.412-103.667-103.666S70.747,24.334,128,24.334 c34.107,0,64.368,16.472,83.261,41.895"
        }),
        o.createElement("polygon", {
          points: "147.639,108.361 245.755,10.166 245.834,108.361 "
        })
      );
    }
    function $() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Trade",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("path", {
          d:
            "M132.025,162.943h40.246c0,0,3.219,56.879-31.303,79.599c-12.298,8.094,71.103-6.708,75.574-79.599h35.775l-60.146-74.681 L132.025,162.943z"
        }),
        o.createElement("path", {
          d:
            "M123.975,93.056H83.729c0,0-3.219-56.879,31.303-79.599c12.298-8.094-71.103,6.708-75.574,79.599H3.682l60.146,74.681 L123.975,93.056z"
        })
      );
    }
    function ee() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Trash",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement(
          "g",
          { className: "base" },
          o.createElement("path", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d:
              "M216.773,43.909 l-7.399,177.589c-0.37,8.893-7.919,16.1-16.812,16.1H63.437c-8.914,0-16.442-7.24-16.812-16.1L39.226,43.909"
          })
        ),
        o.createElement(
          "g",
          { className: "lines" },
          o.createElement("path", {
            className: "line1",
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M128,68.12v137.197"
          }),
          o.createElement("path", {
            className: "line2",
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M83.613,68.12 l4.035,137.197"
          }),
          o.createElement("path", {
            className: "line3",
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M172.387,68.12 l-4.035,137.197"
          })
        ),
        o.createElement(
          "g",
          { className: "lid" },
          o.createElement("path", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M27.121,38.577H228.88"
          }),
          o.createElement("path", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            d:
              "M87.648,38.577l4.319-10.796c2.072-5.181,8.292-9.379,13.84-9.379h44.386 c5.572,0,11.761,4.18,13.841,9.379l4.319,10.796"
          })
        )
      );
    }
    function te() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Scroll",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement(
          "g",
          { transform: "translate(0,-952.36215)" },
          o.createElement("path", {
            d:
              "M49.624,963.362c-20.72,0-37.667,14.78-37.667,32.806c0,3.589,3.353,6.499,7.486,6.499l52.407-0.305v162.5 c0,18.134,17.404,32.5,38.018,32.5h96.508c20.612,0,37.667-14.475,37.667-32.5c0-3.59-3.354-6.499-7.486-6.5H217.84V996.168 c0-18.024-16.947-32.806-37.667-32.806H49.624z M49.624,976.362h2.223c0.569,0.162,1.158,0.265,1.754,0.306 c8.159,1.274,14.426,6.085,16.962,12.694l-42.112,0.306C31.513,981.897,39.656,976.362,49.624,976.362z M79.337,976.362h100.836 c12.587,0,22.694,8.77,22.694,19.806v162.194H139.23c-4.135,0.001-7.486,2.91-7.488,6.5c0,4.609-1.43,7.796-4.21,10.765 c-2.78,2.972-7.203,5.757-13.686,7.923c-0.624,0.201-1.214,0.476-1.755,0.813h-2.223c-12.695,0-23.044-8.573-23.044-19.5v-169 C86.824,988.529,84.023,981.812,79.337,976.362z M108.582,1005.611c-4.135,0.169-7.33,3.216-7.135,6.807 c0.193,3.59,3.702,6.363,7.837,6.194h71.123c4.135,0.051,7.535-2.817,7.592-6.407c0.059-3.591-3.246-6.542-7.381-6.594 c-0.069,0-0.141,0-0.211,0h-71.123C109.05,1005.603,108.816,1005.603,108.582,1005.611z M108.582,1044.612 c-4.135,0.169-7.33,3.215-7.135,6.807c0.193,3.588,3.702,6.362,7.837,6.192h71.123c4.135,0.051,7.535-2.816,7.592-6.407 c0.059-3.59-3.246-6.542-7.381-6.592c-0.069,0-0.141,0-0.211,0h-71.123C109.05,1044.603,108.816,1044.603,108.582,1044.612z M108.582,1083.612c-4.135,0.169-7.33,3.216-7.135,6.806c0.193,3.589,3.702,6.363,7.837,6.193h71.123 c4.135,0.052,7.535-2.816,7.592-6.407c0.059-3.59-3.246-6.541-7.381-6.592c-0.069-0.001-0.141-0.001-0.211,0h-71.123 C109.05,1083.602,108.816,1083.602,108.582,1083.612z M108.582,1122.611c-4.135,0.17-7.33,3.216-7.135,6.806 c0.193,3.591,3.702,6.364,7.837,6.195h71.123c4.135,0.05,7.535-2.818,7.592-6.408c0.059-3.591-3.246-6.541-7.381-6.593 c-0.069,0-0.141,0-0.211,0h-71.123C109.05,1122.602,108.816,1122.602,108.582,1122.611z M145.547,1171.363h82.002 c-3.09,7.604-11.189,12.999-21.173,12.999h-67.849c0.196-0.197,0.512-0.306,0.703-0.509 C142.576,1180.277,144.436,1175.973,145.547,1171.363z"
          })
        )
      );
    }
    function ne(e) {
      return o.createElement(
        "svg",
        {
          style: { transform: "rotate(" + e.angle + "deg)" },
          version: "1.1",
          id: "base",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_FlatArrow",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("polygon", {
          points: "13.913,141 128,59 242.087,141 ",
          fill: "#ffffff"
        })
      );
    }
    function re(e) {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className:
            "SVGIcon_Button SVGIcon_FriendIcon" +
            (e.bPending ? " SVGIcon_FriendIcon_Pending" : ""),
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement(
          "g",
          { className: "Outline" },
          o.createElement(
            "g",
            { transform: "matrix(1.34048,0,0,1.34048,-10.0942,-5.50445)" },
            o.createElement("path", {
              d:
                "M102.239,90.394c-22.556,0-40.906-18.351-40.906-40.906c0-22.556,18.35-40.906,40.906-40.906s40.906,18.35,40.906,40.906 C143.145,72.043,124.795,90.394,102.239,90.394z"
            })
          ),
          o.createElement("path", {
            d:
              "M127.453,250.212c-30.208,0-52.086-4.188-65.028-12.45c-12.507-7.983-13.141-17.484-13.141-19.308v-41.781 c0-20.554,5.356-38.104,15.489-50.754c11.63-14.519,29.216-22.193,50.858-22.194h23.646c21.643,0,39.229,7.674,50.858,22.193 c10.133,12.65,15.488,30.201,15.488,50.754v41.751c0.011,2.202-0.586,8.058-6.43,14.175 c-11.164,11.687-35.301,17.613-71.732,17.613C127.458,250.212,127.458,250.212,127.453,250.212z"
          }),
          o.createElement("path", {
            className: "WavingArm",
            opacity: e.bPending ? "1" : "0",
            d:
              "M87.625,170.102c-5.877,0-14.85-1.804-24.219-10.4c-8.677-7.961-20.959-20.438-30.563-31.048 c-18.766-20.732-21.125-26.658-19.522-32.832c1.463-5.64,10.288-27.077,26.729-28.926c0.429-0.048,0.867-0.072,1.303-0.072 c7.609,0,14.543,6.335,38.063,31.516c7.141,7.645,14.524,15.549,18.002,18.33l0.803,0.641c5.551,4.432,11.291,9.015,15.104,14.136 c8.477,11.383,3.634,20.705,1.158,24.185C108.034,164.692,97.995,170.102,87.625,170.102z"
          })
        ),
        o.createElement(
          "g",
          { className: "foreground" },
          o.createElement(
            "g",
            { transform: "matrix(1.34048,0,0,1.34048,-10.0942,-5.50445)" },
            o.createElement("circle", {
              fill: "#FFFFFF",
              cx: "102.239",
              cy: "49.488",
              r: "33.446"
            })
          ),
          o.createElement("path", {
            fill: "#FFFFFF",
            d:
              "M195.624,218.454v-41.781c0-34.743-16.666-62.948-56.347-62.948h-11.822h-0.997h-10.826 c-39.68,0.001-56.348,28.205-56.348,62.948v41.781c0,0,0,21.758,68.169,21.758C196.62,240.214,195.624,218.454,195.624,218.454z"
          }),
          o.createElement("path", {
            className: "WavingArm",
            opacity: e.bPending ? "1" : "0",
            d:
              "M41.167,76.833c6.53-0.734,39.348,39.127,50.007,47.647c10.659,8.52,21.327,16.686,15.16,25.353 s-20.646,16.74-36.167,2.5 s-48.516-48.801-47.167-54S31.599,77.909,41.167,76.833z"
          })
        )
      );
    }
    function oe() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_DoNotDisturb",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("circle", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "24",
          strokeMiterlimit: "10",
          cx: "128",
          cy: "128",
          r: "101.5"
        }),
        o.createElement("line", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "24",
          strokeMiterlimit: "10",
          x1: "73",
          y1: "128",
          x2: "183",
          y2: "128"
        })
      );
    }
    function ie(e) {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          style: { transform: "scaleX(" + (e.bFlipHorizontal ? -1 : 1) + ")" },
          className: "SVGIcon_Button SVGIcon_MediaControls",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("path", {
          className: "Arrow",
          d:
            "M77.003,54.763h32.784c3.794,0,9.113,2.181,11.814,4.848l63.604,62.773c2.703,2.667,2.727,7.054,0.05,9.748 l-63.705,64.206c-2.674,2.693-7.968,4.898-11.763,4.898H77.003"
        }),
        o.createElement("polyline", {
          className: "preArrowBox",
          opacity: e.bHidePreArrow ? "0" : "1",
          points: "6.833,54.763 46.71,54.763 46.71,201.236 6.833,201.236 \t"
        }),
        o.createElement("polyline", {
          className: "jumpAheadBox",
          opacity: e.bShowJumpAheadBox ? "1" : "0",
          points: "6.833,54.764 86.386,54.764 86.386,201.236 6.833,201.236 \t"
        }),
        o.createElement("polyline", {
          className: "postArrowBox",
          opacity: e.bHidePostArrow ? "0" : "1",
          points:
            "209.29,54.763 249.167,54.763 249.167,201.236 209.29,201.236 \t"
        })
      );
    }
    function ce() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_SteamTV",
          x: "0px",
          y: "0px",
          width: "1024px",
          height: "256px",
          viewBox: "0 0 1024 256"
        },
        o.createElement(
          "defs",
          null,
          o.createElement(
            "linearGradient",
            { id: "gradient", x1: "0%", y1: "0%", x2: "100%", y2: "0%" },
            o.createElement("stop", {
              offset: "0%",
              stopColor: "rgb(55, 102, 251)"
            }),
            o.createElement("stop", {
              offset: "100%",
              stopColor: "rgb(91, 106, 219)"
            })
          ),
          o.createElement(
            "linearGradient",
            { id: "gradientText", x1: "0%", y1: "0%", x2: "100%", y2: "0%" },
            o.createElement("stop", {
              offset: "0%",
              stopColor: "rgb(91, 106, 219)"
            }),
            o.createElement("stop", {
              offset: "100%",
              stopColor: "rgb(125, 110, 188)"
            })
          )
        ),
        o.createElement("circle", {
          className: "logoBG",
          opacity: "0",
          fill: "#000000",
          cx: "156.586",
          cy: "128",
          r: "125.914"
        }),
        o.createElement(
          "g",
          { id: "logo" },
          o.createElement("path", {
            fill: "url(#gradient)",
            d:
              "M156.374,5.355c-64.404,0-117.167,49.661-122.18,112.77l65.712,27.171 c5.567-3.808,12.293-6.032,19.53-6.032c0.649,0,1.294,0.016,1.934,0.051l29.226-42.355c0-0.202-0.005-0.399-0.005-0.598 c0-25.496,20.74-46.241,46.237-46.241c25.498,0,46.239,20.745,46.239,46.241c0,25.494-20.741,46.241-46.239,46.241 c-0.352,0-0.698-0.01-1.047-0.021l-41.68,29.741c0.022,0.546,0.041,1.095,0.041,1.644c0,19.14-15.569,34.707-34.706,34.707 c-16.796,0-30.843-11.991-34.026-27.87l-46.993-19.429c14.55,51.464,61.831,89.19,117.957,89.19 c67.713,0,122.605-54.893,122.605-122.604C278.978,60.244,224.086,5.355,156.374,5.355"
          }),
          o.createElement("path", {
            fill: "rgb(67, 104, 241)",
            d:
              "M111.026,191.387l-15.061-6.22c2.67,5.56,7.285,10.208,13.418,12.767 c13.25,5.521,28.531-0.771,34.054-14.028c2.674-6.416,2.694-13.5,0.04-19.929c-2.646-6.431-7.64-11.451-14.063-14.129 c-6.371-2.648-13.196-2.552-19.198-0.291l15.561,6.436c9.776,4.074,14.396,15.299,10.324,25.072 C132.031,190.841,120.801,195.464,111.026,191.387"
          }),
          o.createElement("path", {
            fill: "rgb(79, 105, 230)",
            d:
              "M227.639,96.359c0-16.987-13.82-30.809-30.809-30.809c-16.987,0-30.812,13.821-30.812,30.809 c0,16.988,13.824,30.806,30.812,30.806C213.818,127.165,227.639,113.347,227.639,96.359 M173.736,96.306 c0-12.783,10.364-23.142,23.145-23.142c12.783,0,23.145,10.359,23.145,23.142c0,12.783-10.361,23.142-23.145,23.142 C184.1,119.447,173.736,109.089,173.736,96.306"
          })
        ),
        o.createElement(
          "g",
          { id: "steam" },
          o.createElement("path", {
            fill: "rgb(92, 106, 218)",
            d:
              "M404.52,91.9l-7.968,14.006c-6.138-4.287-14.455-6.862-21.717-6.862c-8.299,0-13.437,3.43-13.437,9.586 c0,7.473,9.124,9.212,22.682,14.082c14.574,5.149,22.948,11.21,22.948,24.558c0,18.264-14.359,28.519-34.998,28.519 c-10.063,0-22.195-2.595-31.53-8.265l5.815-15.539c7.579,4.008,16.644,6.381,24.722,6.381c10.897,0,16.071-4.021,16.071-9.96 c0-6.802-7.893-8.843-20.641-13.06c-14.521-4.856-24.586-11.213-24.586-25.992c0-16.658,13.34-26.225,32.538-26.225 C387.797,83.128,398.551,87.367,404.52,91.9"
          }),
          o.createElement("polygon", {
            fill: "rgb(99, 107, 211)",
            points:
              "468.163,100.753 468.163,174.252 449.402,174.252 449.402,100.753 422.166,100.753 422.166,84.663 495.315,84.663 495.315,100.753 \t"
          }),
          o.createElement("polygon", {
            fill: "rgb(108, 108, 203)",
            points:
              "533.512,100.706 533.512,120.896 569.417,120.896 569.417,136.982 533.512,136.982 533.512,158.014 575.173,158.014 575.173,174.253 514.757,174.253 514.757,84.665 575.173,84.665 575.173,100.706"
          }),
          o.createElement("path", {
            fill: "rgb(117, 109, 195)",
            d:
              "M617.054,156.857l-5.932,17.396h-19.67l33.593-89.594h18.888l34.539,89.594h-20.336l-6.061-17.396H617.054z M634.378,106.035l-12.23,35.87h24.723L634.378,106.035z"
          }),
          o.createElement("polygon", {
            fill: "rgb(125, 110, 188)",
            points:
              "773.403,119.291 748.888,171.645 738.302,171.645 714.182,119.758 714.182,174.253 696.212,174.253 696.212,84.665 714.138,84.665 744.251,149.33 773.285,84.665 791.374,84.665 791.374,174.253 773.406,174.253"
          })
        ),
        o.createElement(
          "g",
          { id: "tv" },
          o.createElement("polygon", {
            fill: "rgb(125, 110, 188)",
            points:
              "853.961,92.664 823.506,92.664 823.506,84.147 893.835,84.147 893.835,92.664 863.51,92.664 863.51,174.479 853.961,174.479"
          }),
          o.createElement("polygon", {
            fill: "rgb(125, 110, 188)",
            points:
              "909.835,84.147 920.286,84.147 950.612,165.831 980.033,84.147 990.487,84.147 956.421,174.479 944.159,174.479"
          })
        )
      );
    }
    function ae(e) {
      var t = Object(a.a)(
        "SVGIcon_Button",
        "SVGIcon_SteamLogo",
        e && e.className
      );
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: t,
          x: "0px",
          y: "0px",
          viewBox: "0 0 256 256"
        },
        o.createElement("path", {
          fill: "#ffffff",
          d:
            "M127.374,5.355c-64.404,0-117.167,49.661-122.18,112.77l65.712,27.171 c5.567-3.808,12.293-6.032,19.53-6.032c0.649,0,1.294,0.017,1.934,0.051l29.226-42.354c0-0.202-0.005-0.399-0.005-0.598 c0-25.496,20.74-46.241,46.237-46.241c25.498,0,46.238,20.745,46.238,46.241c0,25.494-20.74,46.242-46.238,46.242 c-0.352,0-0.698-0.011-1.047-0.021l-41.68,29.741c0.022,0.546,0.041,1.095,0.041,1.644c0,19.141-15.569,34.707-34.706,34.707 c-16.796,0-30.843-11.99-34.026-27.869l-46.993-19.43c14.55,51.464,61.831,89.189,117.957,89.189 c67.713,0,122.604-54.893,122.604-122.604C249.979,60.244,195.086,5.355,127.374,5.355"
        }),
        o.createElement("path", {
          fill: "#ffffff",
          d:
            "M82.026,191.387l-15.061-6.22c2.67,5.56,7.285,10.208,13.418,12.767 c13.25,5.521,28.531-0.771,34.054-14.027c2.674-6.416,2.694-13.5,0.04-19.93c-2.646-6.431-7.64-11.451-14.063-14.129 c-6.371-2.647-13.196-2.552-19.198-0.291l15.561,6.437c9.776,4.073,14.396,15.299,10.324,25.071 C103.031,190.841,91.801,195.464,82.026,191.387"
        }),
        o.createElement("path", {
          fill: "#ffffff",
          d:
            "M198.639,96.359c0-16.987-13.82-30.809-30.809-30.809c-16.987,0-30.813,13.821-30.813,30.809 c0,16.988,13.824,30.806,30.813,30.806S198.639,113.347,198.639,96.359 M144.736,96.306c0-12.783,10.363-23.142,23.145-23.142 c12.783,0,23.145,10.359,23.145,23.142c0,12.783-10.36,23.142-23.145,23.142C155.1,119.447,144.736,109.089,144.736,96.306"
        })
      );
    }
    function se() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Viewers",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("path", {
          className: "frontGuy",
          fill: "#666666",
          d:
            "M181.732,53.151c-17.255,0-31.321,13.316-31.321,32.634v25.132 c0,18.005,24.006,21.006,24.382,21.381c-10.691,2.813-30.947,8.252-40.888,15.566c-8.252,6.003-11.44,18.005-13.128,22.882 c-0.75,2.063-1.688,5.064-1.688,7.127c0,0,0,9.94,0,19.881s12.941,16.505,18.005,16.505h89.65c4.877,0,18.006-5.627,18.006-16.505 s0-19.881,0-19.881c0-2.251-0.938-5.627-1.688-7.689c-4.313-10.878-4.688-16.316-13.315-22.319 c-9.941-6.939-30.009-12.19-40.512-15.004c0.374-0.563,24.193-4.127,24.193-22.131V85.785 C213.053,66.467,198.986,53.151,181.732,53.151L181.732,53.151z"
        }),
        o.createElement("path", {
          className: "backGuy",
          fill: "rgb(144, 153, 161)",
          d:
            "M84.204,34.396c-20.068,0-36.385,15.38-36.385,38.074v29.258c0,20.818,27.945,24.382,28.32,24.944 c-12.378,3.189-36.01,9.565-47.638,18.006c-9.753,7.127-13.504,21.006-15.379,26.632c-0.75,2.251-1.876,6.002-1.876,8.253  c0,0,0,11.44,0,23.257c0,11.815,15.004,19.13,20.819,19.13h104.279c5.814,0,20.818-6.564,20.818-19.13c0-12.566,0-23.257,0-23.257 c0-2.438-1.125-6.564-2.063-8.815c-5.063-12.566-5.438-18.942-15.566-26.069c-11.628-8.065-34.885-14.067-47.076-17.443 c0.375-0.563,28.133-4.876,28.133-25.695V72.469C120.59,49.775,104.272,34.396,84.204,34.396L84.204,34.396z"
        })
      );
    }
    function le() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_5",
          className: "SVGIcon_Button SVGIcon_Globe",
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          viewBox: "0 0 64 64"
        },
        o.createElement(
          "g",
          null,
          o.createElement("path", {
            d:
              "M32.5,5C17.9,5,6,16.9,6,31.5C6,46.1,17.9,58,32.5,58S59,46.1,59,31.5C59,16.9,47.1,5,32.5,5 M32.5,54.7c-1.2,0-2.5-0.1-3.7-0.3c-1.1-1.1-2.1-2.8-3-4.8c-0.8-1.8-1.4-3.8-2-6c2.7-0.3,5.6-0.5,8.6-0.5c3,0,5.9,0.2,8.6,0.5c-0.5,2.2-1.2,4.2-2,6c-0.9,2-1.9,3.7-3,4.8C35,54.6,33.7,54.7,32.5,54.7 M32.5,41.4c-3.2,0-6.2,0.2-9,0.5c-0.6-3-0.9-6.2-1-9.6h19.9c0,3.4-0.4,6.6-1,9.6C38.7,41.6,35.7,41.4,32.5,41.4 M32.5,8.3c1.2,0,2.5,0.1,3.7,0.3c1.1,1.1,2.1,2.8,3,4.8c0.8,1.8,1.4,3.8,2,6c-2.7,0.3-5.6,0.5-8.6,0.5c-3,0-5.9-0.2-8.6-0.5c0.5-2.2,1.2-4.2,2-6c0.9-2,1.9-3.7,3-4.8C30,8.4,31.3,8.3,32.5,8.3 M32.5,21.6c3.2,0,6.2-0.2,9-0.5c0.6,3,0.9,6.2,1,9.6H22.6c0-3.4,0.4-6.6,1-9.6C26.3,21.4,29.3,21.6,32.5,21.6 M44.1,30.7c0-3.5-0.4-6.8-1-9.8c3.4-0.5,6.4-1.1,8.8-2c2.3,3.5,3.6,7.5,3.7,11.8H44.1z M20.9,30.7H9.3c0.1-4.2,1.4-8.3,3.7-11.8c2.5,0.8,5.5,1.5,8.8,2C21.3,23.9,21,27.2,20.9,30.7 M20.9,32.3c0,3.5,0.4,6.8,1,9.8c-3.4,0.5-6.4,1.1-8.8,2c-2.3-3.5-3.6-7.5-3.7-11.8H20.9z M44.1,32.3h11.6c-0.1,4.2-1.4,8.3-3.7,11.8c-2.5-0.8-5.5-1.5-8.8-2C43.7,39.1,44,35.8,44.1,32.3 M51,17.5c-0.1,0-0.2,0.1-0.3,0.1c-2.3,0.7-5,1.3-7.9,1.7c-0.9-4.1-2.3-7.6-4-10.1c3.8,1.1,7.3,3.1,10.2,5.9C49.6,15.9,50.3,16.6,51,17.5 M26.3,9.2c-1.7,2.5-3.1,6-4,10.1c-2.9-0.4-5.6-1-7.9-1.7c-0.1,0-0.2-0.1-0.3-0.1c0.6-0.8,1.3-1.6,2.1-2.4C19,12.2,22.5,10.2,26.3,9.2 M14,45.5c0.1,0,0.2-0.1,0.3-0.1c2.3-0.7,5-1.3,7.9-1.7c0.9,4.1,2.3,7.6,4,10.1c-3.8-1.1-7.3-3.1-10.2-5.9C15.4,47.1,14.7,46.4,14,45.5 M38.7,53.8c1.7-2.5,3.1-6,4-10.1c2.9,0.4,5.6,1,7.9,1.7c0.1,0,0.2,0.1,0.3,0.1c-0.6,0.8-1.3,1.6-2.1,2.4C46,50.8,42.5,52.8,38.7,53.8"
          })
        )
      );
    }
    function ue() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_STVTimelineGrabber",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement(
          "g",
          { className: "leftarrow", opacity: "0" },
          o.createElement("polygon", {
            points: "127.817,4.403 4,128 127.817,251.598"
          })
        ),
        o.createElement(
          "g",
          { className: "rightarrow", opacity: "0" },
          o.createElement("polygon", {
            points: "127.816,4.403 251.633,128 127.816,251.598"
          })
        ),
        o.createElement(
          "g",
          { className: "grabber" },
          o.createElement("polygon", {
            points:
              "145.692,22.132 145.692,234.361 127.817,251.598 110.307,234.361 110.307,22.132 127.817,4.403"
          })
        )
      );
    }
    function me() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_STVTimelineMarker",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("polygon", {
          className: "pointer",
          points:
            "128,154.979 46.374,230.548 46.374,253.333 209.626,253.333 209.626,230.548 \t"
        }),
        o.createElement("rect", {
          className: "line",
          x: "116.271",
          y: "3.168",
          width: "23.459",
          height: "137.332"
        })
      );
    }
    function pe(e) {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_HideShowChat",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement(
          "g",
          { id: "hidechat", opacity: e.showChat ? "0" : "1" },
          ">",
          o.createElement("polyline", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            points:
              "156.001,189.834 116.375,189.834 67.31,222.538 67.31,189.834 39.834,189.834 39.834,59.011 59.25,59.011"
          }),
          o.createElement("polyline", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            points: "109.427,59.011 225.299,59.011 225.299,189.834 207,189.834"
          }),
          o.createElement("line", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            x1: "49.786",
            y1: "15.012",
            x2: "214.409",
            y2: "233.723"
          })
        ),
        o.createElement(
          "g",
          { id: "showchat", opacity: e.showChat ? "1" : "0" },
          o.createElement("polygon", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            points:
              "116.375,189.834 67.31,222.538 67.31,189.834 39.834,189.834 39.834,59.011 225.299,59.011 225.299,189.834"
          })
        ),
        o.createElement(
          "g",
          { id: "textlines", opacity: e.showChat ? "1" : "0" },
          o.createElement("line", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeMiterlimit: "10",
            x1: "72.333",
            y1: "124.75",
            x2: "194.167",
            y2: "124.75"
          }),
          o.createElement("line", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeMiterlimit: "10",
            x1: "72.333",
            y1: "155.75",
            x2: "194.167",
            y2: "155.75"
          }),
          o.createElement("line", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeMiterlimit: "10",
            x1: "72.333",
            y1: "93.75",
            x2: "179.926",
            y2: "93.75"
          }),
          o.createElement("polyline", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            points:
              "156.001,189.834 116.375,189.834 67.31,222.538 67.31,189.834 39.834,189.834 39.834,59.011 59.25,59.011 "
          }),
          o.createElement("polyline", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            points: "109.427,59.011 225.299,59.011 225.299,189.834 207,189.834"
          })
        )
      );
    }
    function he() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_ShowBothChats",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("circle", {
          opacity: "0",
          fill: "#FFFFFF",
          strokeWidth: "0",
          cx: "166.241",
          cy: "161.906",
          r: "75.259"
        }),
        o.createElement("polyline", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "8",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          points:
            "92.367,155.634 51.311,183 51.311,150.296 23.834,150.296 23.834,19.473 140.5,19.473 140.5,91.5"
        }),
        o.createElement("line", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "8",
          strokeMiterlimit: "10",
          x1: "48.529",
          y1: "82.167",
          x2: "113.379",
          y2: "82.167"
        }),
        o.createElement("line", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "8",
          strokeMiterlimit: "10",
          x1: "48.529",
          y1: "113.167",
          x2: "113.379",
          y2: "113.167"
        }),
        o.createElement("line", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "8",
          strokeMiterlimit: "10",
          x1: "48.529",
          y1: "51.167",
          x2: "99.138",
          y2: "51.167"
        }),
        o.createElement("path", {
          d:
            "M166.241,82.167c-43.933,0-79.74,35.807-79.74,79.74c0,43.932,35.808,79.739,79.74,79.739 c43.932,0,79.739-35.808,79.739-79.739C245.98,117.975,210.173,82.167,166.241,82.167 M166.241,231.717 c-3.611,0-7.522-0.301-11.134-0.902c-3.31-3.311-6.318-8.426-9.027-14.444c-2.407-5.416-4.212-11.434-6.018-18.054  8.124-0.902,16.851-1.505,25.878-1.505c9.026,0,17.753,0.603,25.877,1.505c-1.504,6.62-3.61,12.638-6.018,18.054 c-2.708,6.019-5.718,11.134-9.027,14.444C173.764,231.416,169.852,231.717,166.241,231.717 M166.241,191.696 c-9.629,0-18.656,0.602-27.082,1.505c-1.805-9.027-2.708-18.656-3.009-28.887h59.88c0,10.23-1.203,19.859-3.009,28.887 C184.896,192.298,175.87,191.696,166.241,191.696 M166.241,92.097c3.61,0,7.522,0.301,11.133,0.903 c3.311,3.31,6.319,8.425,9.027,14.443c2.407,5.416,4.213,11.435,6.019,18.055c-8.125,0.902-16.851,1.504-25.878,1.504  s-17.753-0.602-25.878-1.504c1.505-6.62,3.611-12.639,6.019-18.055c2.708-6.018,5.717-11.133,9.026-14.443 \tC158.719,92.398,162.63,92.097,166.241,92.097 M166.241,132.117c9.629,0,18.655-0.602,27.081-1.504 \tc1.806,9.026,2.708,18.655,3.009,28.887h-59.88c0-10.231,1.204-19.86,3.01-28.887 \tC147.585,131.516,156.612,132.117,166.241,132.117 M201.146,159.5c0-10.532-1.203-20.462-3.009-29.488 c10.23-1.505,19.258-3.311,26.479-6.019c6.921,10.531,10.833,22.567,11.134,35.507H201.146z M131.336,159.5H96.432 c0.301-12.639,4.212-24.976,11.133-35.507c7.522,2.407,16.55,4.514,26.479,6.019C132.54,139.038,131.637,148.968,131.336,159.5 M131.336,164.314c0,10.531,1.204,20.461,3.01,29.488c-10.231,1.505-19.259,3.31-26.48,6.018 c-6.921-10.531-10.832-22.567-11.133-35.506H131.336z M201.146,164.314h34.905c-0.301,12.638-4.213,24.975-11.134,35.506 c-7.522-2.406-16.55-4.513-26.479-6.018C199.942,184.775,200.845,174.846,201.146,164.314 M221.908,119.78 c-0.301,0-0.602,0.301-0.903,0.301c-6.92,2.106-15.045,3.912-23.771,5.115c-2.708-12.337-6.921-22.868-12.036-30.391 c11.434,3.31,21.966,9.328,30.691,17.753C217.695,114.966,219.802,117.072,221.908,119.78 M147.585,94.806 c-5.115,7.522-9.328,18.054-12.036,30.391c-8.727-1.203-16.851-3.009-23.771-5.115c-0.301,0-0.602-0.301-0.902-0.301 c1.805-2.407,3.911-4.814,6.318-7.222C125.619,103.833,136.15,97.814,147.585,94.806 M110.574,204.033 c0.301,0,0.602-0.301,0.902-0.301c6.921-2.106,15.045-3.912,23.771-5.115c2.708,12.337,6.921,22.869,12.036,30.392 c-11.435-3.311-21.966-9.328-30.692-17.754C114.786,208.848,112.68,206.742,110.574,204.033 M184.896,229.009 c5.116-7.522,9.329-18.055,12.036-30.392c8.727,1.203,16.852,3.009,23.771,5.115c0.301,0,0.603,0.301,0.903,0.301 c-1.806,2.407-3.912,4.814-6.319,7.222C206.863,219.981,196.331,226,184.896,229.009"
        })
      );
    }
    function de() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_BigPicture",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("path", {
          fill: "#ffffff",
          d:
            "M213.771,68.659c-4.108-7.066-46.007-7.231-49.293-7.231H128H91.522c-3.286,0-45.186,0.165-49.293,7.231 c-19.555,29.248-27.385,100.263-27.276,104.01c0.238,8.294,2.11,24.583,16.595,35.162c9.201,6.72,22.183,8.709,29.083,3.614 c4.989-3.682,11.995-19.224,19.061-32.204c7.064-12.981,9.202-11.174,12.98-12.159c3.78-0.986,36.066-0.74,36.066-0.74 s30.809-0.247,34.588,0.74c3.777,0.985,5.915-0.822,12.98,12.159c7.064,12.98,14.07,28.522,19.061,32.204 c6.9,5.095,19.882,3.106,29.083-3.614c14.485-10.58,16.356-26.868,16.595-35.162C241.154,168.922,233.325,97.906,213.771,68.659z M67.251,128.14c-14.974,0-27.112-12.137-27.112-27.111c0-14.975,12.137-27.112,27.112-27.112 c14.973,0,27.111,12.137,27.111,27.112C94.362,116.003,82.224,128.14,67.251,128.14z M188.749,128.14 c-14.974,0-27.111-12.137-27.111-27.111c0-14.975,12.138-27.112,27.111-27.112c14.973,0,27.111,12.137,27.111,27.112 C215.86,116.003,203.722,128.14,188.749,128.14z"
        })
      );
    }
    function fe() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_MobilePhone",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("path", {
          d:
            "M165.693,45.186H91.368c-7.963,0-14.41,6.447-14.41,14.41V210.9c0,7.964,6.447,14.41,14.41,14.41h74.134 c7.965,0,14.41-6.447,14.41-14.41V59.596C180.102,51.633,173.657,45.186,165.693,45.186z M113.172,57.509h30.717 c1.707,0,3.223,1.327,3.223,3.224c0,1.896-1.328,3.223-3.223,3.223h-30.717c-1.707,0-3.223-1.328-3.223-3.223 C109.949,58.837,111.465,57.509,113.172,57.509z M128.529,213.554c-4.551,0-8.152-3.603-8.152-8.153c0-4.55,3.604-8.152,8.152-8.152 s8.151,3.603,8.151,8.152C136.682,209.761,133.081,213.554,128.529,213.554z M169.105,186.819h-81.15V74.384h81.15V186.819 L169.105,186.819z"
        })
      );
    }
    function ve() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_VR",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("path", {
          d:
            "M224.389,62.411H31.613c-10.147,0-18.36,8.214-18.36,18.36v94.453c0,10.147,8.215,18.359,18.36,18.359h192.775 c10.146,0.241,18.358-7.968,18.358-18.116V80.771C242.747,70.625,234.534,62.411,224.389,62.411z M92.317,175.026H71.646 L35.472,79.832h21.895l25.022,72.484l24.343-72.484h21.895L92.317,175.026z M195.264,175.026l-19.175-32.095h-2.176h-14.279 v32.095h-19.991V79.832h35.63c13.056,0,22.664,2.607,28.831,7.819c6.164,5.215,9.247,12.49,9.247,21.827 c0,7.343-1.61,13.463-4.828,18.359c-3.219,4.896-7.729,8.614-13.531,11.151l22.575,36.038H195.264z"
        }),
        o.createElement("path", {
          d:
            "M187.784,100.298c-2.812-2.312-7.391-3.468-13.735-3.468h-14.415v28.966h15.639c5.257,0,9.36-1.336,12.308-4.012 c2.945-2.673,4.42-6.368,4.42-11.083C192,106.078,190.593,102.61,187.784,100.298z"
        })
      );
    }
    function _e() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_LargeMobilePhone",
          x: "0px",
          y: "0px",
          width: "128px",
          height: "255px",
          viewBox: "0 0 128 255"
        },
        o.createElement("rect", {
          className: "screen",
          x: "7.756",
          y: "5.518",
          fill: "#292D33",
          width: "112.144",
          height: "234.357"
        }),
        o.createElement("path", {
          className: "frame",
          fill: "#3C414B",
          d:
            "M40.334,15.72h47.237c3.957,0,7.164-3.259,7.164-7.28c0-1.113,0.889-2.017,1.984-2.017h9.746 c7.417,0,13.432,6.108,13.432,13.646v206.156c0,7.538-6.015,13.647-13.431,13.647H21.459c-7.417,0-13.429-6.109-13.429-13.647 V20.071c0-7.536,6.013-13.646,13.429-13.646h9.728c1.096,0,1.983,0.903,1.983,2.017C33.17,12.461,36.377,15.72,40.334,15.72 M107.057,0.001H20.87c-9.922,0-17.965,8.174-17.965,18.256v217.505c0,10.082,8.043,18.256,17.965,18.256h86.188 c9.923,0,17.966-8.174,17.966-18.256V18.257C125.022,8.175,116.979,0.001,107.057,0.001"
        }),
        o.createElement("path", {
          fill: "#3C414B",
          d:
            "M0.826,33.349C0.369,33.349,0,33.725,0,34.189v7.616c0,0.464,0.37,0.84,0.826,0.84s0.827-0.376,0.827-0.84 v-7.617C1.653,33.725,1.283,33.349,0.826,33.349"
        }),
        o.createElement("path", {
          fill: "#3C414B",
          d:
            "M0.826,51.56C0.369,51.56,0,51.936,0,52.4v16.8c0,0.465,0.37,0.841,0.826,0.841s0.827-0.376,0.827-0.841 V52.4C1.653,51.936,1.283,51.56,0.826,51.56"
        }),
        o.createElement("path", {
          fill: "#3C414B",
          d:
            "M0.826,75.304C0.369,75.304,0,75.68,0,76.144v15.904c0,0.464,0.37,0.84,0.826,0.84s0.827-0.376,0.827-0.84 V76.144C1.653,75.68,1.283,75.304,0.826,75.304"
        }),
        o.createElement("path", {
          fill: "#3C414B",
          d:
            "M127.617,58.056c-0.457,0-0.827,0.376-0.827,0.84v27.328c0,0.464,0.37,0.84,0.827,0.84 c0.456,0,0.826-0.376,0.826-0.84V58.896C128.443,58.432,128.073,58.056,127.617,58.056"
        })
      );
    }
    function ye() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Envelope",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("polygon", {
          fill: "#3C414B",
          points: "3.167,48.809 127.22,128 252.833,48.809 "
        }),
        o.createElement("polygon", {
          fill: "#3C414B",
          points: "252.833,203.68 252.833,55.439 185.151,99.131 "
        }),
        o.createElement("polygon", {
          fill: "#3C414B",
          points:
            "247.958,207.191 180.47,101.472 128.001,134.24 75.142,101.472 7.849,207.191 "
        }),
        o.createElement("polygon", {
          fill: "#3C414B",
          points: "3.167,203.682 3.167,55.441 70.851,99.132 "
        })
      );
    }
    function be() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_YouTube",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("path", {
          d:
            "M243.402,70.101c-2.775-10.309-10.906-18.439-21.217-21.217c-18.838-5.152-94.185-5.152-94.185-5.152 s-75.348,0-94.185,4.957c-10.112,2.775-18.44,11.104-21.216,21.413C7.644,88.94,7.644,128,7.644,128s0,39.257,4.957,57.896 c2.775,10.313,10.905,18.439,21.216,21.219c19.036,5.154,94.185,5.154,94.185,5.154s75.347,0,94.185-4.957 c10.311-2.771,18.441-10.906,21.217-21.217c4.953-18.838,4.953-57.898,4.953-57.898S248.557,88.94,243.402,70.101z M104.008,164.088 V91.912L166.668,128L104.008,164.088z"
        })
      );
    }
    function Ee() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_CSGO",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d:
            "M236.979,138.059c0.548,0.078,6.91,0.101,7.772,0.032 c1.215-0.095,1.396,0.068,1.388,0.708c-0.01,0.397,0.012,3.039-2.365,7.32c-3.301,5.948-12.079,10.436-12.55,10.672 c-0.47,0.233-0.53,0.484-0.136,0.75c0.434,0.295,8.068,1.454,9.084,1.611c1.017,0.154,0.637,1.001,0.637,1.001 s-0.704,2.621-2.895,5.36c-2.189,2.738-9.311,6.123-8.583,6.123c0.731,0,7.187,0.159,6.181,1.422 c-3.019,3.786-13.603,9.528-18.43,13.813c-13.388,11.885-13.217,12.864-15.52,15.09c-0.983-3.298-3.02-12.658-3.02-12.658 l-6.105-11.467c4.413,0.18,6.364,0.081,8.952,0.081c9.214,0,17.525-2.185,22.234-5.841l2.371-1.843l-2.911-0.728 c-2.131-0.528-7.121-1.782-11.896-2.979c2.184-0.104,10.803-1.299,14.413-5.339c0.136-0.151,0.276-0.321,0.406-0.494l1.245-1.664 l-2.404-0.735c-2.607-0.799-5.948-1.682-8.517-2.335c3.173-1.572,7.585-3.942,10.048-6.088c4.83-4.203,7.226-9.709,7.322-9.943 l0.9-2.098l-10.772,0.318c1.503-1.483,3.218-3.197,3.939-3.991c1.43-1.571,4.053-6.221,4.198-9.896l0.072-1.787l-1.763,0.288 c-1.979,0.322-5.301,1.279-8.179,2.173c2.025-2.193,4.296-4.767,5.46-6.484c2.687-3.964,2.76-8.371,2.597-12.916l-0.104-2.881 l-2.261,1.79c-2.559,2.028-7.595,5.031-11.097,7.047c1.538-3.644,3.54-8.752,3.813-11.276c0.5-4.681-0.248-10.196-0.248-10.196 l-10.76,9.394c0.885-1.953,1.684-4.013,2.117-5.832c1.735-7.29,0.055-17.892-0.021-18.338l-0.452-2.807l-7.777,7.739 c0.722-3.535,1.465-8.253,1.23-11.789c-0.426-6.321-2.278-10.517-2.359-10.694l-1.01-2.251l-6.465,8.577 c0.231-4.285,0.27-10.24-0.948-13.547c-1.934-5.262-3.651-8.007-3.723-8.121l-1.232-1.958l-3.057,4.85 c0.018-2.967-0.11-6.475-0.69-8.68c-1.202-4.543-2.825-6.396-3.002-6.592l-1.325-1.433l-1.623,2.705 c-0.278-3.19-1.112-7.084-3.343-9.478l-0.814-0.872l-1.012,0.623c-0.327,0.201-0.714,0.497-1.104,0.823 c-0.154-1.135-0.365-2.451-0.639-3.691c0.563-4.733,1.186-10.03,1.206-10.452c0.027-0.547,0.274-0.767,1.017-0.391 c0.898,0.452,3.156,2.064,5.187,6.133c2.036,4.067,3.132,11.324,3.117,12.044c-0.009,0.383,0.291,0.757,0.438,0.151 c0.145-0.607,0.478-7.591,0.623-8.312c0.081-0.383,0.199-0.484,0.737-0.212c0.496,0.249,2.959,2.181,4.899,6.463 c1.179,2.599,1.634,11.946,1.574,12.653c-0.106,1.278,0.313,0.891,0.339,0.883c-0.009,0.013-0.025,0.04-0.03,0.049 c0.03-0.041,0.036-0.049,0.03-0.049c0.573-0.841,4.21-8.99,4.519-9.377c0.313-0.39,0.521-0.395,0.835,0.002 c0.262,0.33,2.095,1.717,4.049,10.088c1.902,8.135,1.949,11.542,1.848,12.682c-0.08,0.86,0.339,0.993,0.731,0.524 c0.389-0.47,5.104-9.201,5.497-9.515c0.389-0.313,0.613-0.309,0.927,0.161c0.312,0.469,2.718,4.762,3.684,11.448 c0.861,5.947,0.608,13.599,0.375,14.381c-0.235,0.782-0.135,1.077,0.493,0.53c0.623-0.548,10.299-8.412,11.004-9.038 c0.703-0.627,1.18-0.65,1.34-0.046c0.172,0.654,0.822,8.654,0.275,15.225c-0.549,6.571-2.626,12.752-2.94,13.145 c-0.312,0.391,0.087,0.712,0.478,0.555c0.394-0.157,11.902-10.018,12.645-10.402c0.711-0.367,1.043,0.005,1.105,0.507 c0.068,0.544,0.966,3.098-0.419,11.269c-0.959,5.65-3.54,11.876-3.855,12.033c-0.313,0.157-0.077,0.336,0.234,0.259 c0.315-0.079,8.324-3.488,8.872-3.567c0.546-0.079,0.671,0.339,0.514,0.808c-0.158,0.469-0.458,6.273-2.534,11.639 c-2.603,6.732-6.056,11.001-6.056,11.001s-0.252,0.519,0.217,0.519s9.266-0.186,9.813-0.263c0.547-0.079,0.627,0.156,0.547,0.704 c-0.077,0.547,0.858,9.116-8.624,14.601C236.524,137.734,236.432,137.979,236.979,138.059z M174.473,24.823 c1.981,3.34,2.018,9.248,1.836,11.469l-0.52,6.238l5.25-8.744c0.395,0.843,0.85,2.003,1.25,3.524 c1.02,3.877,0.422,13.082,0.417,13.173l-0.384,5.752l6.435-10.212c0.628,1.27,1.45,3.097,2.32,5.459 c1.466,3.983,0.772,13.806,0.381,17.257l-0.602,5.308l9.568-12.69c0.493,1.707,1.058,4.21,1.259,7.227 c0.39,5.821-2.272,15.731-2.299,15.83l-1.428,5.26l11.125-11.068c0.377,3.586,0.772,9.774-0.304,14.302 c-1.2,5.057-5.778,12.588-5.823,12.664l-1.806,3.992l16.878-14.09c-0.116,1.366-0.262,2.944-0.423,4.435 c-0.312,2.935-3.954,11.389-5.335,14.399l-1.827,4.002l3.856-2.115c0.381-0.208,8.027-4.41,12.979-7.778 c-0.039,3.484-0.537,6.042-2.139,8.4c-2.189,3.234-9.05,10.198-9.118,10.268l-4.352,4.408l5.861-2.004 c0.08-0.025,6.868-2.34,11.188-3.41c-0.675,2.445-2.208,5.125-3.11,6.118c-1.319,1.449-6.429,6.429-6.48,6.482l-2.682,2.614 l13.475-0.404c-1.06,1.837-2.89,4.549-5.457,6.783c-3.727,3.244-12.956,7.341-13.048,7.383l-3.952,1.746l4.201,1.008 c0.062,0.015,5.637,1.354,10.266,2.67c-3.412,2.191-9.291,3.081-10.948,3.138c-2.06,0.072-11.075,0.125-11.075,0.125l-11.51,0.069 l11.162,2.804c0,0,12.587,3.164,19.486,4.894c-4.398,2.216-10.717,3.493-17.657,3.493c-3.102,0-10.335-0.284-15.048-0.483 c4.064,6.069,7.041,11.004,7.992,13.681c2.813,7.915,6.777,28.269,6.889,48.907c0.039,6.572-1.081,11.649-9.022,11.649 c-0.288,0-0.597-0.038-0.908-0.092c-1.846,0.339-4.351,0.595-5.438-0.095c-1.805-1.149-3.163-2.627-3.544-3.957 c-0.383-1.334-1.146-9.374-3.106-20.675c-1.92-11.046-4.038-19.431-4.237-19.525c-1.535-0.731-9.358-18.45-9.358-18.45 l-37.23-47.615c0,0-20.737,23.917-37.455,47.8c-0.867,1.235-5.994,11.251-9.275,17.989c-0.212,0.437-0.181,0.475-0.281,0.808 c-0.604,2.015-2.396,9.525-4.039,18.994c-1.962,11.301-2.725,19.341-3.105,20.675c-0.384,1.33-1.74,2.808-3.546,3.957 c-1.085,0.689-3.592,0.434-5.437,0.095c-0.313,0.054-0.621,0.092-0.909,0.092c-7.941,0-9.061-5.077-9.024-11.649 c0.114-20.639,4.078-40.992,6.892-48.907c0.95-2.677,3.926-7.611,7.993-13.681c-4.714,0.199-11.946,0.483-15.051,0.483 c-6.939,0-13.26-1.277-17.653-3.493c6.896-1.729,19.486-4.894,19.486-4.894l11.159-2.804l-11.508-0.069 c0,0-9.019-0.053-11.076-0.125c-1.66-0.057-7.537-0.946-10.949-3.138c4.629-1.315,10.202-2.655,10.264-2.67l4.201-1.008l-3.95-1.746 c-0.094-0.042-9.324-4.139-13.049-7.383c-2.566-2.234-4.397-4.946-5.458-6.783l13.477,0.404l-2.684-2.614 c-0.05-0.054-5.16-5.033-6.48-6.482c-0.9-0.993-2.436-3.673-3.108-6.118c4.319,1.069,11.108,3.384,11.188,3.41l5.861,2.004 l-4.352-4.408c-0.069-0.069-6.928-7.033-9.12-10.268c-1.601-2.358-2.099-4.916-2.139-8.4c4.953,3.368,12.601,7.57,12.98,7.778 l3.858,2.115l-1.829-4.002c-1.379-3.011-5.022-11.465-5.334-14.399c-0.161-1.491-0.305-3.068-0.421-4.435l16.877,14.09l-1.806-3.992 c-0.046-0.076-4.622-7.607-5.821-12.664c-1.078-4.528-0.682-10.716-0.307-14.302L58.57,89.672l-1.426-5.26 c-0.025-0.098-2.688-10.008-2.3-15.83c0.203-3.017,0.767-5.52,1.26-7.227l9.566,12.69l-0.601-5.308 c-0.391-3.451-1.083-13.274,0.381-17.257c0.871-2.362,1.693-4.189,2.32-5.459l6.435,10.212l-0.382-5.752 c-0.006-0.091-0.604-9.295,0.416-13.173c0.401-1.521,0.854-2.681,1.251-3.524l5.249,8.744l-0.52-6.238 c-0.181-2.221-0.144-8.129,1.836-11.469c0.596,0.522,1.248,1.148,1.67,1.575l2.215,2.245l0.276-3.142 c0.162-1.838,0.783-7.003,1.703-8.813c1.342-2.635,4.69-3.91,7.104-4.505c-6.691,13.614-36.889,77.59-36.889,122.937 c0,23.658,16.206,23.931,16.368,23.931c4.881,0,6.947-7.914,6.947-11.063V133.45c0-2.744,1.148-2.744,1.835-2.744 c5.807,0,10.48,3.196,13.855,6.69c8.813-11.615,15.81-20.526,15.81-20.526s0.16-0.182,0.248-0.345 c-1.03-2.443-7.165-16.995-7.165-16.995l1.708-43.717c0,0-0.278-3.797,1.044-6.052c1.314-2.245,4.247-3.175,4.247-3.175 l13.307,41.443c0,0-4.107,0.866-4.107,5.585c0,2.982,2.658,4.99,6.227,5.013c3.572-0.022,6.227-2.031,6.227-5.013 c0-4.719-4.109-5.585-4.109-5.585l13.311-41.443c0,0,2.93,0.93,4.245,3.175c1.322,2.255,1.043,6.052,1.043,6.052l1.709,43.717 l-7.309,17.34c0,0,6.997,8.911,15.809,20.526c3.375-3.494,8.048-6.69,13.855-6.69c0.687,0,1.833,0,1.833,2.744v14.538 c0,3.148,2.068,11.063,6.95,11.063c0.159,0,16.367-0.272,16.367-23.931c0-45.347-30.197-109.322-36.888-122.937 c2.412,0.595,5.761,1.87,7.104,4.505c0.92,1.809,1.541,6.975,1.705,8.813l0.275,3.142l2.213-2.245 C173.226,25.972,173.875,25.345,174.473,24.823z M176.157,181.396c-1.644-2.189-41.07-55.856-41.07-55.856l-6.723,8.809 l-0.946-1.233l-0.829-1.082l-5.053-6.594l-0.095,0.101c0,0-39.427,53.667-41.07,55.856c-1.643,2.191-4.777,6.708-6.058,9.322 c-1.279,2.614-8.946,39.306-8.946,42.592c0,2.005,0.041,8.618,0.071,13.47c1.536,0.2,3.411,0.761,4.357,0.125 c1.624-1.093,2.363-2.323,2.491-3.372c0.128-1.048,1.367-12.969,2.69-20.812c1.779-10.547,4.571-19.005,4.415-18.97 c3.213-6.672,8.966-17.938,9.887-19.252c17.808-25.439,38.994-49.947,38.994-49.947s21.166,24.502,38.978,49.947 c0.921,1.313,6.672,12.58,9.888,19.252c-0.158-0.035,2.635,8.423,4.414,18.97c1.322,7.843,2.562,19.764,2.688,20.812 c0.131,1.049,0.87,2.279,2.493,3.372c0.944,0.636,2.818,0.075,4.355-0.125c0.032-4.852,0.073-11.465,0.073-13.47 c0-3.286-7.667-39.978-8.948-42.592C180.936,188.104,177.801,183.588,176.157,181.396z M82.538,21.517l-1.014-0.623l-0.813,0.872 c-2.231,2.394-3.063,6.287-3.342,9.478l-1.624-2.705l-1.323,1.433c-0.179,0.197-1.801,2.049-3.004,6.592 c-0.581,2.205-0.709,5.712-0.689,8.68l-3.057-4.85l-1.234,1.958c-0.072,0.114-1.787,2.859-3.722,8.121 c-1.22,3.307-1.179,9.262-0.949,13.547l-6.463-8.577l-1.012,2.251c-0.08,0.177-1.934,4.373-2.359,10.694 c-0.234,3.536,0.51,8.253,1.231,11.789l-7.778-7.739l-0.453,2.807c-0.073,0.446-1.754,11.048-0.02,18.338 c0.433,1.819,1.231,3.879,2.117,5.832l-10.759-9.394c0,0-0.749,5.515-0.248,10.196c0.271,2.523,2.272,7.632,3.813,11.276 c-3.503-2.016-8.539-5.019-11.099-7.047l-2.259-1.79l-0.106,2.881c-0.162,4.545-0.087,8.952,2.6,12.916 c1.161,1.717,3.433,4.291,5.459,6.484c-2.877-0.894-6.201-1.851-8.179-2.173l-1.763-0.288l0.071,1.787 c0.148,3.675,2.771,8.324,4.198,9.896c0.723,0.794,2.436,2.508,3.941,3.991L21.93,137.83l0.896,2.098 c0.1,0.234,2.493,5.74,7.324,9.943c2.464,2.146,6.876,4.516,10.047,6.088c-2.57,0.653-5.908,1.536-8.518,2.335l-2.402,0.735 l1.246,1.664c0.13,0.173,0.27,0.343,0.407,0.494c3.608,4.04,12.229,5.234,14.412,5.339c-4.774,1.197-9.767,2.451-11.896,2.979 l-2.911,0.728l2.371,1.843c4.708,3.656,13.02,5.841,22.233,5.841c2.588,0,4.539,0.099,8.954-0.081l-6.105,11.467 c0,0-2.038,9.36-3.02,12.658c-2.304-2.226-2.133-3.205-15.52-15.09c-4.829-4.284-15.411-10.026-18.429-13.813 c-1.005-1.263,5.449-1.422,6.179-1.422c0.73,0-6.393-3.385-8.582-6.123c-2.191-2.739-2.895-5.36-2.895-5.36s-0.38-0.847,0.637-1.001 c1.018-0.157,8.65-1.316,9.084-1.611c0.395-0.266,0.332-0.517-0.137-0.75c-0.469-0.236-9.248-4.724-12.548-10.672 c-2.375-4.281-2.357-6.923-2.364-7.32c-0.01-0.64,0.17-0.803,1.385-0.708c0.862,0.068,7.226,0.046,7.774-0.032 c0.546-0.08,0.453-0.324,0.019-0.576c-9.483-5.484-8.546-14.054-8.624-14.601c-0.079-0.548,0-0.783,0.548-0.704 c0.546,0.077,9.342,0.263,9.812,0.263c0.469,0,0.218-0.519,0.218-0.519s-3.452-4.27-6.056-11.001 c-2.077-5.366-2.377-11.169-2.533-11.639c-0.157-0.469-0.034-0.887,0.514-0.808c0.549,0.079,8.558,3.488,8.87,3.567 c0.313,0.077,0.548-0.103,0.235-0.259c-0.314-0.157-2.896-6.383-3.855-12.033c-1.384-8.17-0.488-10.725-0.42-11.269 c0.063-0.502,0.397-0.874,1.105-0.507c0.743,0.385,12.255,10.245,12.646,10.402c0.391,0.157,0.79-0.164,0.477-0.555 c-0.313-0.392-2.392-6.574-2.938-13.145c-0.548-6.571,0.1-14.571,0.274-15.225c0.161-0.604,0.635-0.581,1.339,0.046 c0.704,0.626,10.381,8.489,11.006,9.038c0.625,0.547,0.727,0.252,0.492-0.53c-0.235-0.782-0.484-8.435,0.375-14.381 c0.965-6.686,3.372-10.979,3.685-11.448s0.536-0.474,0.927-0.161c0.391,0.313,5.106,9.045,5.497,9.515 c0.391,0.469,0.809,0.336,0.732-0.524c-0.104-1.14-0.057-4.547,1.845-12.682c1.956-8.371,3.789-9.758,4.052-10.088 c0.313-0.396,0.521-0.392,0.833-0.002c0.309,0.387,3.945,8.536,4.519,9.377c-0.005,0,0,0.008,0.031,0.049 c-0.007-0.009-0.022-0.036-0.031-0.049c0.025,0.008,0.446,0.395,0.34-0.883c-0.058-0.707,0.396-10.055,1.574-12.653 c1.941-4.282,4.404-6.214,4.899-6.463c0.54-0.272,0.658-0.171,0.737,0.212c0.146,0.721,0.478,7.705,0.625,8.312 c0.146,0.606,0.444,0.232,0.437-0.151c-0.015-0.72,1.081-7.977,3.115-12.044c2.033-4.069,4.292-5.681,5.188-6.133 c0.742-0.376,0.989-0.156,1.018,0.391c0.022,0.422,0.645,5.719,1.206,10.452c-0.272,1.24-0.484,2.556-0.639,3.691 C83.251,22.014,82.866,21.718,82.538,21.517z M127.35,141.814c-1.158,12.032-4.978,23.045-6.326,29.486 c-1.643,7.849-4.788,18.061-6.793,20.931c-4.433,6.343-18.036,18.547-20.403,19.732c-1.094,0.547-6.376-4.115-6.56-4.846 c-0.182-0.728,2.883-3.993,2.154-3.627c-0.731,0.364-4.104,0.906-5.06,0.87c-0.753-0.026,0.633-2.728,0.633-2.728 s-1.484,2.217-3.021,2.947c-0.03,0.015,9.433-18.119,9.433-18.119S127.52,140.043,127.35,141.814z M119.7,169.39l3.104-10.647 l-1.869-0.559l-3.152,10.656L119.7,169.39z M114.072,167.242l4.687-10.051l-1.764-0.838l-4.735,10.055L114.072,167.242z  M126.961,159.319l-0.82,11.06l-1.991-0.139l0.867-11.079L126.961,159.319z M131.727,170.391l-1.986,0.167l-0.828-11.078 l1.944-0.144L131.727,170.391z M164.422,186.462c0,0,9.463,18.134,9.434,18.119c-1.54-0.73-3.021-2.947-3.021-2.947 s1.384,2.701,0.633,2.728c-0.957,0.036-4.33-0.506-5.06-0.87c-0.731-0.366,2.334,2.899,2.153,3.627 c-0.185,0.73-5.467,5.393-6.56,4.846c-2.368-1.186-15.973-13.39-20.404-19.732c-2.007-2.87-5.149-13.082-6.792-20.931 c-1.349-6.441-4.621-17.127-5.778-29.16C128.854,140.373,164.422,186.462,164.422,186.462z M142.029,167.242l1.813-0.834 l-4.735-10.055l-1.762,0.838L142.029,167.242z M136.402,169.39l1.917-0.55l-3.152-10.656l-1.868,0.559L136.402,169.39z"
        })
      );
    }
    function ge() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_ClosedCaption",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("path", {
          className: "CCBox",
          fill: "none",
          stroke: "#000000",
          strokeWidth: "10",
          strokeMiterlimit: "10",
          d:
            "M238,210c0,6.627-5.373,12-12,12H30 c-6.627,0-12-5.373-12-12V46c0-6.627,5.373-12,12-12h196c6.627,0,12,5.373,12,12V210z"
        }),
        o.createElement("path", {
          className: "C1",
          d:
            "M90.505,173.207c11.431,0,22.338-4.276,30.72-12.036c2.6-2.407,2.753-6.47,0.347-9.068c-2.41-2.604-6.47-2.757-9.072-0.349 c-5.998,5.559-13.811,8.62-21.995,8.62c-17.852,0-32.373-14.524-32.373-32.372c0-17.849,14.521-32.373,32.373-32.373 c8.177,0,15.981,3.055,21.979,8.603c2.603,2.407,6.662,2.25,9.072-0.353c2.407-2.602,2.249-6.662-0.353-9.068 c-8.375-7.751-19.276-12.019-30.694-12.019c-24.931,0-45.209,20.281-45.209,45.209C45.3,152.93,65.574,173.207,90.505,173.207z"
        }),
        o.createElement("path", {
          className: "C1",
          d:
            "M177.926,173.207c11.431,0,22.338-4.276,30.721-12.036c2.6-2.407,2.754-6.47,0.347-9.068 c-2.41-2.604-6.47-2.757-9.072-0.349c-5.998,5.559-13.812,8.62-21.995,8.62c-17.852,0-32.372-14.524-32.372-32.372 c0-17.849,14.521-32.373,32.372-32.373c8.178,0,15.981,3.055,21.979,8.603c2.604,2.407,6.663,2.25,9.072-0.353 c2.407-2.602,2.25-6.662-0.353-9.068c-8.375-7.751-19.277-12.019-30.694-12.019c-24.932,0-45.209,20.281-45.209,45.209 C132.721,152.93,152.996,173.207,177.926,173.207z"
        })
      );
    }
    function we() {
      return o.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Hidden",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        o.createElement("path", {
          fill: "none",
          stroke: "#FFFFFF",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          d: "M62.499,172.263 c-32.755-16.197-47.415-39.509-47.415-39.509"
        }),
        o.createElement("path", {
          fill: "none",
          stroke: "#FFFFFF",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          d:
            "M177.948,85.392 c48.213,14.998,68.451,47.362,68.451,47.362s-36.393,54.737-115.689,54.737c-17.938,0-33.591-2.671-47.096-6.832"
        }),
        o.createElement("path", {
          fill: "none",
          stroke: "#FFFFFF",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          d:
            "M15.084,132.754 c0,0,32.933-56.576,115.674-54.785c8.505,0.185,16.486,0.913,23.96,2.072"
        }),
        o.createElement("path", {
          fill: "none",
          stroke: "#FFFFFF",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          d:
            "M93.981,141.131 c-0.475-2.385-0.725-4.852-0.725-7.377c0-20.711,16.789-37.5,37.5-37.5c2.42,0,4.787,0.229,7.08,0.668"
        }),
        o.createElement("path", {
          fill: "none",
          stroke: "#FFFFFF",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          d:
            "M156.528,106.512 c7.223,6.836,11.729,16.513,11.729,27.242c0,20.711-16.789,37.5-37.5,37.5c-10.609,0-20.189-4.405-27.012-11.487"
        }),
        o.createElement("line", {
          fill: "none",
          stroke: "#FFFFFF",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          x1: "53.007",
          y1: "210.504",
          x2: "208.507",
          y2: "55.004"
        })
      );
    }
  },
  hEDq: function(e, t, n) {
    "use strict";
    n.d(t, "j", function() {
      return c;
    }),
      n.d(t, "b", function() {
        return a;
      }),
      n.d(t, "d", function() {
        return s;
      }),
      n.d(t, "f", function() {
        return l;
      }),
      n.d(t, "a", function() {
        return m;
      }),
      n.d(t, "g", function() {
        return p;
      }),
      n.d(t, "i", function() {
        return d;
      }),
      n.d(t, "c", function() {
        return y;
      }),
      n.d(t, "e", function() {
        return v;
      }),
      n.d(t, "h", function() {
        return b;
      });
    var r = n("mrSG"),
      o = n("0N1H");
    n.d(t, "k", function() {
      return o.d;
    });
    var i = n("2vnA"),
      c = (function() {
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
      a = (function() {
        return function() {
          (this.broadcastid = "0"),
            (this.nViewers = 0),
            (this.nRequests = 0),
            (this.bIsBroadcasting = !1),
            (this.bIsRecordingDesktop = !1),
            (this.bBroadcastCapable = !1);
        };
      })();
    function s() {
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
        featuresEnabled: {}
      };
    }
    var l, u;
    function m(e) {
      return (
        e == l.EBrowserType_OpenVROverlay ||
        e == l.EBrowserType_OpenVROverlay_Dashboard
      );
    }
    ((u = l || (l = {}))[(u.EBrowserType_OffScreen = 0)] =
      "EBrowserType_OffScreen"),
      (u[(u.EBrowserType_OpenVROverlay = 1)] = "EBrowserType_OpenVROverlay"),
      (u[(u.EBrowserType_OpenVROverlay_Dashboard = 2)] =
        "EBrowserType_OpenVROverlay_Dashboard"),
      (u[(u.EBrowserType_DirectHWND = 3)] = "EBrowserType_DirectHWND"),
      (u[(u.EBrowserType_DirectHWND_Borderless = 4)] =
        "EBrowserType_DirectHWND_Borderless"),
      (u[(u.EBrowserType_DirectHWND_Hidden = 5)] =
        "EBrowserType_DirectHWND_Hidden"),
      (u[(u.EBrowserType_ChildHWNDNative = 6)] =
        "EBrowserType_ChildHWNDNative"),
      (u[(u.EBrowserType_Transparent_Toplevel = 7)] =
        "EBrowserType_Transparent_Toplevel"),
      (u[(u.EBrowserType_OffScreen_SharedTexture = 8)] =
        "EBrowserType_OffScreen_SharedTexture"),
      (u[(u.EBrowserType_OffScreen_GameOverlay = 9)] =
        "EBrowserType_OffScreen_GameOverlay"),
      (u[(u.EBrowserType_OffScreen_GameOverlay_SharedTexture = 10)] =
        "EBrowserType_OffScreen_GameOverlay_SharedTexture"),
      (u[(u.EBrowserType_Offscreen_FriendsUI = 11)] =
        "EBrowserType_Offscreen_FriendsUI"),
      (u[(u.EBrowserType_MAX = 12)] = "EBrowserType_MAX");
    var p, h, d, f;
    ((h = p || (p = {}))[(h.k_EClientUINotificationGroupChatMessage = 1)] =
      "k_EClientUINotificationGroupChatMessage"),
      (h[(h.k_EClientUINotificationFriendChatMessage = 2)] =
        "k_EClientUINotificationFriendChatMessage"),
      (h[(h.k_EClientUINotificationFriendPersonaState = 3)] =
        "k_EClientUINotificationFriendPersonaState"),
      ((f = d || (d = {}))[(f.k_EComputerActiveStateInvalid = 0)] =
        "k_EComputerActiveStateInvalid"),
      (f[(f.k_EComputerActiveStateActive = 1)] =
        "k_EComputerActiveStateActive"),
      (f[(f.k_EComputerActiveStateIdle = 2)] = "k_EComputerActiveStateIdle");
    var v,
      _,
      y = (function() {
        return function() {};
      })();
    ((_ = v || (v = {}))[(_.k_EPending = 0)] = "k_EPending"),
      (_[(_.k_EAccepted = 1)] = "k_EAccepted"),
      (_[(_.k_ERejected = 2)] = "k_ERejected");
    var b, E;
    ((E = b || (b = {}))[(E.k_EClientUsedInputTypeKeyboard = 0)] =
      "k_EClientUsedInputTypeKeyboard"),
      (E[(E.k_EClientUsedInputTypeMouse = 1)] = "k_EClientUsedInputTypeMouse"),
      (E[(E.k_EClientUsedInputTypeController = 2)] =
        "k_EClientUsedInputTypeController"),
      (E[(E.k_EClientUsedInputTypeMax = 3)] = "k_EClientUsedInputTypeMax");
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
        return c;
      }),
      n.d(t, "c", function() {
        return a;
      }),
      n.d(t, "b", function() {
        return s;
      }),
      n.d(t, "e", function() {
        return l;
      }),
      n.d(t, "g", function() {
        return u;
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
    function c(e, t) {
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
    function a(e, t, n, r) {
      var o,
        i = arguments.length,
        c =
          i < 3
            ? t
            : null === r
            ? (r = Object.getOwnPropertyDescriptor(t, n))
            : r;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        c = Reflect.decorate(e, t, n, r);
      else
        for (var a = e.length - 1; 0 <= a; a--)
          (o = e[a]) &&
            (c = (i < 3 ? o(c) : 3 < i ? o(t, n, c) : o(t, n)) || c);
      return 3 < i && c && Object.defineProperty(t, n, c), c;
    }
    function s(i, c, a, s) {
      return new (a || (a = Promise))(function(e, t) {
        function n(e) {
          try {
            o(s.next(e));
          } catch (e) {
            t(e);
          }
        }
        function r(e) {
          try {
            o(s.throw(e));
          } catch (e) {
            t(e);
          }
        }
        function o(t) {
          t.done
            ? e(t.value)
            : new a(function(e) {
                e(t.value);
              }).then(n, r);
        }
        o((s = s.apply(i, c || [])).next());
      });
    }
    function l(n, r) {
      var o,
        i,
        c,
        e,
        a = {
          label: 0,
          sent: function() {
            if (1 & c[0]) throw c[1];
            return c[1];
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
            for (; a; )
              try {
                if (
                  ((o = 1),
                  i &&
                    (c =
                      2 & t[0]
                        ? i.return
                        : t[0]
                        ? i.throw || ((c = i.return) && c.call(i), 0)
                        : i.next) &&
                    !(c = c.call(i, t[1])).done)
                )
                  return c;
                switch (((i = 0), c && (t = [2 & t[0], c.value]), t[0])) {
                  case 0:
                  case 1:
                    c = t;
                    break;
                  case 4:
                    return a.label++, { value: t[1], done: !1 };
                  case 5:
                    a.label++, (i = t[1]), (t = [0]);
                    continue;
                  case 7:
                    (t = a.ops.pop()), a.trys.pop();
                    continue;
                  default:
                    if (
                      !(c = 0 < (c = a.trys).length && c[c.length - 1]) &&
                      (6 === t[0] || 2 === t[0])
                    ) {
                      a = 0;
                      continue;
                    }
                    if (3 === t[0] && (!c || (t[1] > c[0] && t[1] < c[3]))) {
                      a.label = t[1];
                      break;
                    }
                    if (6 === t[0] && a.label < c[1]) {
                      (a.label = c[1]), (c = t);
                      break;
                    }
                    if (c && a.label < c[2]) {
                      (a.label = c[2]), a.ops.push(t);
                      break;
                    }
                    c[2] && a.ops.pop(), a.trys.pop();
                    continue;
                }
                t = r.call(n, a);
              } catch (e) {
                (t = [6, e]), (i = 0);
              } finally {
                o = c = 0;
              }
            if (5 & t[0]) throw t[1];
            return { value: t[0] ? t[1] : void 0, done: !0 };
          })([t, e]);
        };
      }
    }
    function u() {
      for (var e = 0, t = 0, n = arguments.length; t < n; t++)
        e += arguments[t].length;
      var r = Array(e),
        o = 0;
      for (t = 0; t < n; t++)
        for (var i = arguments[t], c = 0, a = i.length; c < a; c++, o++)
          r[o] = i[c];
      return r;
    }
  },
  oh5H: function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
      return a;
    }),
      n.d(t, "e", function() {
        return s;
      }),
      n.d(t, "d", function() {
        return m;
      }),
      n.d(t, "f", function() {
        return p;
      }),
      n.d(t, "a", function() {
        return h;
      }),
      n.d(t, "b", function() {
        return d;
      });
    var l = n("mrSG"),
      u = n("q1tI"),
      r = (n("Gp1o"), n("XaMz"), n("ujHl")),
      o = n("0N1H"),
      i = n("1n9R"),
      c = (function() {
        function e() {
          (this.m_mapTokens = new Map()),
            (this.m_mapFallbackTokens = new Map());
        }
        return (
          (e.prototype.InitFromObjects = function(n, r, o, i, e) {
            var c = this;
            e || this.m_mapTokens.clear(),
              o &&
                Object.keys(o).forEach(function(e, t) {
                  c.m_mapTokens.set(e, o[e]);
                }),
              Object.keys(n).forEach(function(e, t) {
                c.m_mapTokens.set(e, n[e]);
              }),
              r &&
                Object.keys(r).forEach(function(e, t) {
                  c.m_mapTokens.has(e) || c.m_mapTokens.set(e, r[e]),
                    c.m_mapFallbackTokens.set(e, r[e]);
                }),
              i &&
                Object.keys(i).forEach(function(e, t) {
                  c.m_mapTokens.has(e) || c.m_mapTokens.set(e, i[e]),
                    c.m_mapFallbackTokens.has(e) ||
                      c.m_mapFallbackTokens.set(e, i[e]);
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
              t.push(Object(o.d)(i.b.LANGUAGE)),
              (i.b.SUPPORTED_LANGUAGES || []).forEach(function(e) {
                e.value != i.b.LANGUAGE && t.push(Object(o.d)(e.value));
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
    function a(e) {
      for (var r = [], t = 1; t < arguments.length; t++)
        r[t - 1] = arguments[t];
      var n = d.LocalizeString(e);
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
    function s(e) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      var r = d.LocalizeString(e);
      if (!r) return e;
      for (var o, i = [], c = /(.*?)%(\d+)\$s/g, a = 0; (o = c.exec(r)); ) {
        (a += o[0].length), i.push(o[1]);
        var s = parseInt(o[2]);
        1 <= s && s <= t.length && i.push(t[s - 1]);
      }
      return (
        i.push(r.substr(a)),
        u.createElement.apply(u, Object(l.g)([u.Fragment, null], i))
      );
    }
    function m(e, t) {
      for (var n = [], r = 2; r < arguments.length; r++)
        n[r - 2] = arguments[r];
      return a.apply(
        void 0,
        1 === t || "1" === t
          ? Object(l.g)([e, t], n)
          : Object(l.g)([e + "_Plural", t], n)
      );
    }
    function p(e, t) {
      void 0 === t && (t = !1);
      var n = t ? "#TimeInterval_" : "#TimeSince_";
      return e >= 2 * r.b.PerYear
        ? a(n + "XYears", Math.floor(e / r.b.PerYear))
        : e >= r.b.PerYear
        ? (e -= r.b.PerYear) >= 2 * r.b.PerMonth
          ? a(n + "1YearXMonths", Math.floor(e / r.b.PerMonth))
          : a(n + "1Year")
        : e >= 2 * r.b.PerMonth
        ? a(n + "XMonths", Math.floor(e / r.b.PerMonth))
        : e >= 2 * r.b.PerWeek
        ? a(n + "XWeeks", Math.floor(e / r.b.PerWeek))
        : e >= r.b.PerWeek
        ? a(n + "1Week", Math.floor(e / r.b.PerWeek))
        : e >= 2 * r.b.PerDay
        ? a(n + "XDays", Math.floor(e / r.b.PerDay))
        : e >= r.b.PerDay
        ? (e -= r.b.PerDay) >= 2 * r.b.PerHour
          ? a(n + "1DayXHours", Math.floor(e / r.b.PerHour))
          : a(n + "1Day")
        : e >= 2 * r.b.PerHour
        ? a(n + "XHours", Math.floor(e / r.b.PerHour))
        : e >= r.b.PerHour
        ? (e -= r.b.PerHour) >= 2 * r.b.PerMinute
          ? a(n + "1HourXMinutes", Math.floor(e / r.b.PerMinute))
          : a(n + "1Hour")
        : e >= 2 * r.b.PerMinute
        ? a(n + "XMinutes", Math.floor(e / r.b.PerMinute))
        : e >= r.b.PerMinute
        ? a(n + "1Minute")
        : a(n + "LessThanAMinute");
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
      d = new c();
    window.LocalizationManager = d;
  },
  "s4p+": function(e, t, n) {
    "use strict";
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
  twdX: function(e, t, n) {
    e.exports = {
      LoadingWrapper: "throbber_LoadingWrapper_9UFR8",
      Static: "throbber_Static_2qWST",
      none: "throbber_none_3yGk4",
      bottomCircle: "throbber_bottomCircle_1XTvd",
      noString: "throbber_noString_2uxjb",
      Throbber: "throbber_Throbber_1Y6Da",
      throbber_small: "throbber_throbber_small_21jHr",
      throbber_medium: "throbber_throbber_medium_1nACb",
      throbber_large: "throbber_throbber_large_3hJM_",
      throbber_center_wrapper: "throbber_throbber_center_wrapper_1Dn-N",
      ThrobberText: "throbber_ThrobberText_3r290",
      blur: "throbber_blur_3cMTP",
      ThrobberRoundLoop: "throbber_ThrobberRoundLoop_3iwJU",
      roundOuterOutline: "throbber_roundOuterOutline_1yAiX",
      roundOuter: "throbber_roundOuter_3LNze",
      roundFill: "throbber_roundFill_3dnp9",
      ThrobberFillLoop: "throbber_ThrobberFillLoop_1e442",
      topCircle: "throbber_topCircle_3Zy4H",
      circlePulse: "throbber_circlePulse_17mrs",
      ThrobberTopCircleLoop: "throbber_ThrobberTopCircleLoop_RFW6m",
      ThrobberBottomCircleLoop: "throbber_ThrobberBottomCircleLoop_1AigW",
      roundThrobber15: "throbber_roundThrobber15_Ty6Px",
      roundThrobber14: "throbber_roundThrobber14_T03GA",
      roundThrobber13: "throbber_roundThrobber13_2YjHq",
      roundThrobber12: "throbber_roundThrobber12_39ueX",
      roundThrobber11: "throbber_roundThrobber11_ze_zC",
      roundThrobber10: "throbber_roundThrobber10_jIdSr",
      roundThrobber09: "throbber_roundThrobber09_3R4dR",
      roundThrobber08: "throbber_roundThrobber08_2WJ-s",
      roundThrobber07: "throbber_roundThrobber07_2UhCH",
      roundThrobber06: "throbber_roundThrobber06_gkW0p",
      roundThrobber05: "throbber_roundThrobber05_20j9w",
      roundThrobber04: "throbber_roundThrobber04_3TMdv",
      roundThrobber03: "throbber_roundThrobber03_3aNO_",
      roundThrobber02: "throbber_roundThrobber02_1m8h_",
      roundThrobber01: "throbber_roundThrobber01_2h6Ph",
      ThrobberRoundLoopThickness: "throbber_ThrobberRoundLoopThickness_1YJDV",
      throbber_xlarge: "throbber_throbber_xlarge_iO6_X",
      throbber_xxlarge: "throbber_throbber_xxlarge_3KPYp"
    };
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
    function i(t) {
      return new Promise(function(e) {
        return setTimeout(e, t);
      });
    }
  },
  vvG3: function(e, t, n) {}
});
