/*! This file includes third-party software, governed by the licenses described here: https://steamcommunity.com/public/javascript/webui/chathelpers.licenses.txt */

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "6603895";
!(function (e) {
  function t(t) {
    for (
      var r, a, c = t[0], s = t[1], u = t[2], f = 0, d = [];
      f < c.length;
      f++
    )
      (a = c[f]),
        Object.prototype.hasOwnProperty.call(i, a) && i[a] && d.push(i[a][0]),
        (i[a] = 0);
    for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
    for (l && l(t); d.length; ) d.shift()();
    return o.push.apply(o, u || []), n();
  }
  function n() {
    for (var e, t = 0; t < o.length; t++) {
      for (var n = o[t], r = !0, c = 1; c < n.length; c++) {
        var s = n[c];
        0 !== i[s] && (r = !1);
      }
      r && (o.splice(t--, 1), (e = a((a.s = n[0]))));
    }
    return e;
  }
  var r = {},
    i = { 5: 0 },
    o = [];
  function a(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
  }
  (a.e = function (e) {
    var t = [],
      n = i[e];
    if (0 !== n)
      if (n) t.push(n[2]);
      else {
        var r = new Promise(function (t, r) {
          n = i[e] = [t, r];
        });
        t.push((n[2] = r));
        var o,
          c = document.createElement("script");
        (c.charset = "utf-8"),
          (c.timeout = 120),
          a.nc && c.setAttribute("nonce", a.nc),
          (c.src = (function (e) {
            return (
              a.p +
              "javascript/webui/" +
              ({
                9: "friendsui_arabic-json",
                10: "friendsui_brazilian-json",
                11: "friendsui_bulgarian-json",
                12: "friendsui_czech-json",
                13: "friendsui_danish-json",
                14: "friendsui_dutch-json",
                15: "friendsui_english-json",
                16: "friendsui_finnish-json",
                17: "friendsui_french-json",
                18: "friendsui_german-json",
                19: "friendsui_greek-json",
                20: "friendsui_hungarian-json",
                21: "friendsui_italian-json",
                22: "friendsui_japanese-json",
                23: "friendsui_koreana-json",
                24: "friendsui_latam-json",
                25: "friendsui_norwegian-json",
                26: "friendsui_polish-json",
                27: "friendsui_portuguese-json",
                28: "friendsui_romanian-json",
                29: "friendsui_russian-json",
                30: "friendsui_sc_schinese-json",
                31: "friendsui_schinese-json",
                32: "friendsui_spanish-json",
                33: "friendsui_swedish-json",
                34: "friendsui_tchinese-json",
                35: "friendsui_thai-json",
                36: "friendsui_turkish-json",
                37: "friendsui_ukrainian-json",
                38: "friendsui_vietnamese-json",
                39: "shared_arabic-json",
                40: "shared_brazilian-json",
                41: "shared_bulgarian-json",
                42: "shared_czech-json",
                43: "shared_danish-json",
                44: "shared_dutch-json",
                45: "shared_english-json",
                46: "shared_finnish-json",
                47: "shared_french-json",
                48: "shared_german-json",
                49: "shared_greek-json",
                50: "shared_hungarian-json",
                51: "shared_italian-json",
                52: "shared_japanese-json",
                53: "shared_koreana-json",
                54: "shared_latam-json",
                55: "shared_norwegian-json",
                56: "shared_polish-json",
                57: "shared_portuguese-json",
                58: "shared_romanian-json",
                59: "shared_russian-json",
                60: "shared_sc_schinese-json",
                61: "shared_schinese-json",
                62: "shared_spanish-json",
                63: "shared_swedish-json",
                64: "shared_tchinese-json",
                65: "shared_thai-json",
                66: "shared_turkish-json",
                67: "shared_ukrainian-json",
                68: "shared_vietnamese-json",
              }[e] || e) +
              ".js?contenthash=" +
              {
                9: "abd716bb6bb7cebbe238",
                10: "e58c8467fe35f316eaa0",
                11: "6d193daa461486fc1340",
                12: "ee62e09b74669c98db3d",
                13: "1097496cace1b964cd8c",
                14: "6e4ac9daeb66131d81ef",
                15: "3bf9a6e8d60ff85a5585",
                16: "d567945c61bd60c46b3a",
                17: "43b86664859fffeb3acb",
                18: "2a134fac026ff77c6569",
                19: "c00a15dd96bfb93ac759",
                20: "68ed1bcdbe36edb5a871",
                21: "28e2f33a17ec9205d67a",
                22: "131a7f71f0d1a0120826",
                23: "51c6d810937840ee5938",
                24: "ede78306707e4d6f826c",
                25: "dcfefa2f4d1d428f2cee",
                26: "97c86e24d9afdfeda297",
                27: "e92830cdf4622cb52e29",
                28: "4cfed9da21c1be4d9875",
                29: "f77c0185fc9f074b644f",
                30: "130ab0ff03cfdc8df1e3",
                31: "267330685299a4e3b1ac",
                32: "431acbf7e7c8a88812cd",
                33: "3e4e5a69af2bb185ae68",
                34: "a082c6e02d47d1e7c679",
                35: "fb3ad354f4108afbfe84",
                36: "cc6c55fdeeb6dbf682c8",
                37: "9f9bedba116aceef6c7c",
                38: "f3deea7a4adecbd0583b",
                39: "dd555942eeebcf691e37",
                40: "a188c551f96d0a1b1fe0",
                41: "a537a2691ab6026187d4",
                42: "c6111becf3f2736fce47",
                43: "665ada54531cc39b4bfe",
                44: "786e4380cd9cac66de5e",
                45: "cf0a36946643f9492fab",
                46: "6b8e95ddf804fc6c5b13",
                47: "f0a97528d7b78c52eff5",
                48: "d5e01124b5bfaaba06ae",
                49: "77634d5ed57a5a17eb4f",
                50: "87a325577ab1c479ed8e",
                51: "8d995ae24daa39608c75",
                52: "49d68c177b630a5d4189",
                53: "283f3a6c03d73cd16af2",
                54: "e86cc020ada62b4bd850",
                55: "b756360b9133a53b7d2b",
                56: "4d014cbccd562da2e351",
                57: "b814c4c59854b5b6e440",
                58: "5fcb09c9dc91aeb59256",
                59: "89da6a539963b818622c",
                60: "c81899f447cf840c2cbc",
                61: "de52d0b8949e222709c1",
                62: "e45411049c7f881ddff4",
                63: "b73199e3fb303fb4eafb",
                64: "f298edb087885c3ff527",
                65: "5a856aa1425b65ab4d16",
                66: "ce89e894a107dcb3e714",
                67: "e53592e221c9264c4cb2",
                68: "c0d1d046ff296e1b78cb",
              }[e]
            );
          })(e));
        var s = new Error();
        o = function (t) {
          (c.onerror = c.onload = null), clearTimeout(u);
          var n = i[e];
          if (0 !== n) {
            if (n) {
              var r = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src;
              (s.message =
                "Loading chunk " + e + " failed.\n(" + r + ": " + o + ")"),
                (s.name = "ChunkLoadError"),
                (s.type = r),
                (s.request = o),
                n[1](s);
            }
            i[e] = void 0;
          }
        };
        var u = setTimeout(function () {
          o({ type: "timeout", target: c });
        }, 12e4);
        (c.onerror = c.onload = o), document.head.appendChild(c);
      }
    return Promise.all(t);
  }),
    (a.m = e),
    (a.c = r),
    (a.d = function (e, t, n) {
      a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (a.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (a.t = function (e, t) {
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
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (a.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return a.d(t, "a", t), t;
    }),
    (a.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (a.p = ""),
    (a.oe = function (e) {
      throw (console.error(e), e);
    });
  var c = (window.webpackJsonp = window.webpackJsonp || []),
    s = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var u = 0; u < c.length; u++) t(c[u]);
  var l = s;
  o.push(["qM/t", 0]), n();
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
    function i(e, t, n) {
      return null == e || isNaN(e) ? e : Math.max(t, Math.min(n, e));
    }
    function o(e, t, n, r, i) {
      return r + ((i - r) * (e - t)) / (n - t);
    }
    n.d(t, "b", function () {
      return r;
    }),
      n.d(t, "a", function () {
        return i;
      }),
      n.d(t, "c", function () {
        return o;
      });
  },
  "0N1H": function (e, t, n) {
    "use strict";
    function r(e) {
      return 3 == e || 6 == e;
    }
    function i(e) {
      return 5 == e || 6 == e;
    }
    n.d(t, "b", function () {
      return r;
    }),
      n.d(t, "a", function () {
        return i;
      }),
      n.d(t, "q", function () {
        return o;
      }),
      n.d(t, "r", function () {
        return a;
      }),
      n.d(t, "p", function () {
        return c;
      }),
      n.d(t, "j", function () {
        return s;
      }),
      n.d(t, "k", function () {
        return u;
      }),
      n.d(t, "l", function () {
        return l;
      }),
      n.d(t, "m", function () {
        return f;
      }),
      n.d(t, "o", function () {
        return d;
      }),
      n.d(t, "n", function () {
        return h;
      }),
      n.d(t, "g", function () {
        return p;
      }),
      n.d(t, "i", function () {
        return _;
      }),
      n.d(t, "h", function () {
        return m;
      }),
      n.d(t, "d", function () {
        return b;
      }),
      n.d(t, "e", function () {
        return g;
      }),
      n.d(t, "c", function () {
        return v;
      }),
      n.d(t, "f", function () {
        return E;
      });
    var o = 1,
      a = 4,
      c = 7,
      s = 750,
      u = 799,
      l = 250820,
      f = 330050,
      d = 358510,
      h = 366490,
      p = "18446744073709551615",
      _ = 0,
      m = 2147483647;
    function b(e, t) {
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
    var g = function (e) {
      return "koreana" === e ? "korean" : e;
    };
    function v(e, t) {
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
        case "sc_schinese":
          return 29;
        default:
          return t;
      }
    }
  },
  "1VtQ": function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return o;
    }),
      n.d(t, "c", function () {
        return a;
      }),
      n.d(t, "f", function () {
        return c;
      }),
      n.d(t, "e", function () {
        return s;
      }),
      n.d(t, "d", function () {
        return u;
      });
    n("mrSG"), n("Gp1o");
    var r = n("q1tI"),
      i = n("y3Ls");
    function o(e, t, n) {
      return [e, t, n];
    }
    function a(e, t) {
      null != e && ("function" == typeof e ? e(t) : (e.current = t));
    }
    function c() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return r.useCallback(function (t) {
        for (var n = 0, r = e; n < r.length; n++) {
          a(r[n], t);
        }
      }, e);
    }
    function s() {
      var e = r.useState(0),
        t = e[0],
        n = e[1];
      return function () {
        return n(t + 1);
      };
    }
    function u(e, t) {
      r.useLayoutEffect(
        function () {
          if (t) {
            var n = e.Register(t);
            return function () {
              return n.Unregister();
            };
          }
        },
        [e, t]
      );
    }
    n.d(t, "a", function () {
      return i.a;
    });
  },
  "1n9R": function (e, t, n) {
    "use strict";
    n.d(t, "d", function () {
      return a;
    }),
      n.d(t, "k", function () {
        return c;
      }),
      n.d(t, "b", function () {
        return s;
      }),
      n.d(t, "c", function () {
        return u;
      }),
      n.d(t, "e", function () {
        return l;
      }),
      n.d(t, "h", function () {
        return f;
      }),
      n.d(t, "a", function () {
        return d;
      }),
      n.d(t, "j", function () {
        return h;
      }),
      n.d(t, "i", function () {
        return p;
      }),
      n.d(t, "f", function () {
        return _;
      }),
      n.d(t, "g", function () {
        return m;
      });
    n("mrSG");
    var r,
      i = n("/7KC"),
      o = n("YlSc"),
      a = {
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
        LOCAL_HOSTNAME: "",
        WEBAPI_BASE_URL: "",
        TOKEN_URL: "",
        BUILD_TIMESTAMP: 0,
        PAGE_TIMESTAMP: 0,
        get SESSIONID() {
          return (function () {
            if (!Object(o.a)()) return r || (r = f()), r;
            var e = Object(o.b)("sessionid");
            e || (e = f());
            return e;
          })();
        },
        FRIENDSUI_BETA: !1,
        STEAM_TV: !1,
        DEV_MODE: !1,
        IN_LIBRARY: !1,
        IN_SP: !1,
      },
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
        short_url: "",
        country_code: "",
      },
      s = { steamid: "", clanid: 0, listid: 0 },
      u = {
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
      l = { ANNOUNCEMENT_GID: "" };
    function f() {
      var e = (function () {
        for (var e = "", t = 0; t < 24; t++)
          e += Object(i.b)(0, 35).toString(36);
        return e;
      })();
      return Object(o.c)("sessionid", e, 0), e;
    }
    function d() {
      var e = null;
      return (
        Object(o.a)() && (e = Object(o.b)("presentation_mode")),
        Boolean(e && 1 === Number.parseInt(e))
      );
    }
    function h(e) {
      void 0 === e && (e = "webui_config");
      var t = {},
        n = p("config", e);
      n && (delete n.SESSIONID, Object.assign(a, n), (t.config = !0));
      var r = p("userinfo", e);
      r &&
        (Object.assign(c, r),
        (t.userConfig = !0),
        c.is_support && d() && (c.is_support = !1));
      var i = p("broadcast", e);
      i && (Object.assign(s, i), (t.broadcastConfig = !0));
      var o = p("community", e);
      o && (Object.assign(u, o), (t.communityConfig = !0));
      var f = p("event", e);
      return f && (Object.assign(l, f), (t.eventConfig = !0)), t;
    }
    function p(e, t) {
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
    function _() {
      if (!window || !window.location || !window.location.href)
        return console.warn("Unable to determine base url!"), "unknown";
      var e = window.location.href;
      return e.startsWith(a.STORE_BASE_URL)
        ? a.STORE_BASE_URL
        : e.startsWith(a.COMMUNITY_BASE_URL)
        ? a.COMMUNITY_BASE_URL
        : e.startsWith(a.CHAT_BASE_URL)
        ? a.CHAT_BASE_URL
        : e.startsWith(a.PARTNER_BASE_URL)
        ? a.PARTNER_BASE_URL
        : e.startsWith(a.HELP_BASE_URL)
        ? a.HELP_BASE_URL
        : e.startsWith(a.STEAMTV_BASE_URL)
        ? a.STEAMTV_BASE_URL
        : e.startsWith(a.STATS_BASE_URL)
        ? a.STATS_BASE_URL
        : e.startsWith(a.INTERNAL_STATS_BASE_URL)
        ? a.INTERNAL_STATS_BASE_URL
        : e.startsWith("https://steamloopback.host")
        ? "https://steamloopback.host"
        : "";
    }
    function m() {
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
  "79S0": function (e, t, n) {
    var r = {
      "./friendsui_arabic.json": ["C1RR", 9],
      "./friendsui_brazilian.json": ["s2l5", 10],
      "./friendsui_bulgarian.json": ["sXfD", 11],
      "./friendsui_czech.json": ["TcQ7", 12],
      "./friendsui_danish.json": ["lvoG", 13],
      "./friendsui_dutch.json": ["6ght", 14],
      "./friendsui_english.json": ["n/Sq", 15],
      "./friendsui_finnish.json": ["A6os", 16],
      "./friendsui_french.json": ["qtmt", 17],
      "./friendsui_german.json": ["a23T", 18],
      "./friendsui_greek.json": ["N3te", 19],
      "./friendsui_hungarian.json": ["kOaF", 20],
      "./friendsui_italian.json": ["5jaL", 21],
      "./friendsui_japanese.json": ["MoM5", 22],
      "./friendsui_koreana.json": ["omEY", 23],
      "./friendsui_latam.json": ["uDNJ", 24],
      "./friendsui_norwegian.json": ["oQbv", 25],
      "./friendsui_polish.json": ["EhcC", 26],
      "./friendsui_portuguese.json": ["bXmq", 27],
      "./friendsui_romanian.json": ["EFxq", 28],
      "./friendsui_russian.json": ["7jnr", 29],
      "./friendsui_sc_schinese.json": ["tKeK", 30],
      "./friendsui_schinese.json": ["gEsF", 31],
      "./friendsui_spanish.json": ["yMyD", 32],
      "./friendsui_swedish.json": ["w8HU", 33],
      "./friendsui_tchinese.json": ["tgEv", 34],
      "./friendsui_thai.json": ["5Ip8", 35],
      "./friendsui_turkish.json": ["1E74", 36],
      "./friendsui_ukrainian.json": ["JXOb", 37],
      "./friendsui_vietnamese.json": ["bFjG", 38],
    };
    function i(e) {
      if (!n.o(r, e))
        return Promise.resolve().then(function () {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        });
      var t = r[e],
        i = t[0];
      return n.e(t[1]).then(function () {
        return n.t(i, 3);
      });
    }
    (i.keys = function () {
      return Object.keys(r);
    }),
      (i.id = "79S0"),
      (e.exports = i);
  },
  "9Lmx": function (e, t, n) {
    var r = {
      "./shared_arabic.json": ["nqme", 39],
      "./shared_brazilian.json": ["f72x", 40],
      "./shared_bulgarian.json": ["+RpC", 41],
      "./shared_czech.json": ["R6Nw", 42],
      "./shared_danish.json": ["GK4l", 43],
      "./shared_dutch.json": ["7VLV", 44],
      "./shared_english.json": ["qlTB", 45],
      "./shared_finnish.json": ["t0Wk", 46],
      "./shared_french.json": ["KB2W", 47],
      "./shared_german.json": ["SP05", 48],
      "./shared_greek.json": ["m6XH", 49],
      "./shared_hungarian.json": ["cNDp", 50],
      "./shared_italian.json": ["82/m", 51],
      "./shared_japanese.json": ["i10C", 52],
      "./shared_koreana.json": ["+pE0", 53],
      "./shared_latam.json": ["/6Od", 54],
      "./shared_norwegian.json": ["wpCC", 55],
      "./shared_polish.json": ["dmUA", 56],
      "./shared_portuguese.json": ["AM9g", 57],
      "./shared_romanian.json": ["rCBS", 58],
      "./shared_russian.json": ["ur1L", 59],
      "./shared_sc_schinese.json": ["TcHa", 60],
      "./shared_schinese.json": ["25it", 61],
      "./shared_spanish.json": ["2NJD", 62],
      "./shared_swedish.json": ["YZF4", 63],
      "./shared_tchinese.json": ["TBOT", 64],
      "./shared_thai.json": ["4+X1", 65],
      "./shared_turkish.json": ["w87n", 66],
      "./shared_ukrainian.json": ["6eLe", 67],
      "./shared_vietnamese.json": ["AKAV", 68],
    };
    function i(e) {
      if (!n.o(r, e))
        return Promise.resolve().then(function () {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        });
      var t = r[e],
        i = t[0];
      return n.e(t[1]).then(function () {
        return n.t(i, 3);
      });
    }
    (i.keys = function () {
      return Object.keys(r);
    }),
      (i.id = "9Lmx"),
      (e.exports = i);
  },
  Ezvv: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    }),
      n.d(t, "b", function () {
        return c;
      });
    var r = n("1n9R"),
      i = { success: !0, result: 1 },
      o = (function () {
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
                return i;
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
              !r.k.logged_in ||
              r.k.accountid == this.m_connection.ClientInfo.unAccountID
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
                        return 1 === e.success ? i : t.FailureResult(e.success);
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
              var i = t.m_iCallSeq++;
              t.BSendMsg(e, i)
                ? t.m_mapWaitingCallbacks.set(i, {
                    iSeq: i,
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
              accountid: r.k.accountid,
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
      c = new o();
    window.ClientConnectionAPI = c;
  },
  J0bI: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return c;
    }),
      n.d(t, "a", function () {
        return s;
      });
    var r = n("mrSG"),
      i = n("2vnA"),
      o = n("0N1H"),
      a = n("tkkQ"),
      c = (function () {
        function e(e) {
          (this.m_bReady = !1),
            (this.m_bValid = !1),
            (this.m_strInviteCode = e);
        }
        return (
          (e.prototype.BIsReady = function () {
            return this.m_bReady;
          }),
          (e.prototype.BIsValid = function () {
            return this.m_bValid;
          }),
          (e.prototype.BIsInviteLink = function () {
            return !!this.m_strInviteCode;
          }),
          (e.prototype.GetInviteCode = function () {
            return this.m_strInviteCode;
          }),
          (e.prototype.BNeverExpires = function () {
            return this.m_rtTimeExpires == o.h;
          }),
          (e.prototype.GetChatRoomGroupID = function () {
            return this.m_ulChatRoomGroupID;
          }),
          (e.prototype.BIsVoiceChatInvite = function () {
            return !!this.m_ulChatID;
          }),
          (e.prototype.GetChatID = function () {
            return this.m_ulChatID;
          }),
          (e.prototype.GetURL = function () {
            return this.m_strInviteCode ? s(this.m_strInviteCode) : null;
          }),
          (e.prototype.BIsUserBanned = function () {
            return this.m_bIsBanned;
          }),
          (e.prototype.GetTimeKickExpires = function () {
            return this.m_rtKickExpires;
          }),
          Object.defineProperty(e.prototype, "time_expires", {
            get: function () {
              return this.m_rtTimeExpires;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.InitInvalid = function () {
            (this.m_bValid = !1), (this.m_bReady = !0);
          }),
          (e.prototype.InitDirectInvite = function (e, t, n, r) {
            void 0 === n && (n = !1),
              void 0 === r && (r = void 0),
              (this.m_ulChatRoomGroupID = e),
              (this.m_ulChatID = t),
              (this.m_bIsBanned = n),
              (this.m_rtKickExpires = r),
              (this.m_rtTimeExpires = o.h),
              (this.m_bValid = !0),
              (this.m_bReady = !0);
          }),
          Object(r.c)([i.B], e.prototype, "m_bReady", void 0),
          Object(r.c)([i.k], e.prototype, "InitInvalid", null),
          Object(r.c)([i.k], e.prototype, "InitDirectInvite", null),
          e
        );
      })();
    function s(e) {
      return "public" == a.a.WEB_UNIVERSE
        ? "https://s.team/chat/" + e
        : a.a.COMMUNITY_BASE_URL + "chat/invite/" + e;
    }
  },
  Kcgk: function (e, t, n) {
    "use strict";
    n.d(t, "j", function () {
      return c;
    }),
      n.d(t, "e", function () {
        return s;
      }),
      n.d(t, "h", function () {
        return u;
      }),
      n.d(t, "f", function () {
        return l;
      }),
      n.d(t, "g", function () {
        return d;
      }),
      n.d(t, "i", function () {
        return _;
      }),
      n.d(t, "a", function () {
        return m;
      }),
      n.d(t, "c", function () {
        return y;
      }),
      n.d(t, "b", function () {
        return C;
      }),
      n.d(t, "d", function () {
        return j;
      });
    var r = n("mrSG"),
      i = n("oh5H"),
      o = n("ujHl"),
      a = n("Gp1o");
    function c(e, t, n) {
      var a,
        c = (a =
          "boolean" == typeof t
            ? { bExcludeAgo: t, bForceSingleUnits: n, bHighGranularity: !1 }
            : Object(r.a)(
                {
                  bExcludeAgo: !1,
                  bForceSingleUnits: !1,
                  bHighGranularity: !1,
                },
                t
              )).bExcludeAgo
          ? "#TimeInterval_"
          : "#TimeSince_";
      if (e >= 2 * o.e.PerYear)
        return Object(i.f)(c + "XYears", Math.floor(e / o.e.PerYear));
      if (e >= o.e.PerYear)
        return (e -= o.e.PerYear) >= 2 * o.e.PerMonth && !a.bForceSingleUnits
          ? Object(i.f)(c + "1YearXMonths", Math.floor(e / o.e.PerMonth))
          : Object(i.f)(c + "1Year");
      if (e >= 2 * o.e.PerMonth)
        return Object(i.f)(c + "XMonths", Math.floor(e / o.e.PerMonth));
      if (e >= 2 * o.e.PerWeek)
        return Object(i.f)(c + "XWeeks", Math.floor(e / o.e.PerWeek));
      if (e >= o.e.PerWeek)
        return Object(i.f)(c + "1Week", Math.floor(e / o.e.PerWeek));
      if (e >= 2 * o.e.PerDay)
        return Object(i.f)(c + "XDays", Math.floor(e / o.e.PerDay));
      if (e >= o.e.PerDay)
        return (e -= o.e.PerDay) >= 2 * o.e.PerHour && !a.bForceSingleUnits
          ? Object(i.f)(c + "1DayXHours", Math.floor(e / o.e.PerHour))
          : Object(i.f)(c + "1Day");
      if (e >= 2 * o.e.PerHour)
        return Object(i.f)(c + "XHours", Math.floor(e / o.e.PerHour));
      if (e >= o.e.PerHour)
        return (e -= o.e.PerHour) >= 2 * o.e.PerMinute && !a.bForceSingleUnits
          ? Object(i.f)(c + "1HourXMinutes", Math.floor(e / o.e.PerMinute))
          : Object(i.f)(c + "1Hour");
      if (e >= 2 * o.e.PerMinute) {
        var s = Math.floor(e / o.e.PerMinute),
          u = e % o.e.PerMinute;
        return a.bHighGranularity && 0 != u
          ? 1 == u
            ? Object(i.f)(c + "XMinutes1Second", s)
            : Object(i.f)(c + "XMinutesXSeconds", s, u)
          : Object(i.f)(c + "XMinutes", s);
      }
      if (e >= o.e.PerMinute) {
        u = e % o.e.PerMinute;
        return a.bHighGranularity && 0 != u
          ? 1 == u
            ? Object(i.f)(c + "1Minute1Second")
            : Object(i.f)(c + "1MinuteXSeconds", u)
          : Object(i.f)(c + "1Minute");
      }
      return a.bHighGranularity
        ? 1 == e
          ? Object(i.f)(c + "1Second")
          : Object(i.f)(c + "XSeconds", e)
        : Object(i.f)(c + "LessThanAMinute");
    }
    function s(e, t) {
      var n = {
        weekday: "short",
        month: "long",
        day: "numeric",
        year: t ? void 0 : "numeric",
      };
      return new Date(1e3 * e).toLocaleDateString(i.e.GetPreferredLocales(), n);
    }
    function u(e) {
      var t = new Date(1e3 * e),
        n = t.setHours(0, 0, 0, 0),
        r = h.get(n);
      if (r) return r;
      return (
        (r = t.toLocaleDateString(i.e.GetPreferredLocales(), {
          year: "numeric",
          month: "short",
          day: "numeric",
        })),
        h.set(n, r),
        r
      );
    }
    function l(e) {
      return new Date(1e3 * e).toLocaleTimeString(i.e.GetPreferredLocales(), {
        hour: "numeric",
        minute: "numeric",
      });
    }
    var f = new Map();
    function d(e) {
      var t = new Date(1e3 * e),
        n = i.e.GetPreferredLocales(),
        r = (function (e) {
          var t = f.get(e);
          if (!0 === t || !1 === t) return t;
          var n = new Date();
          return (
            n.setHours(15),
            (t =
              n.toLocaleTimeString(e, { hour: "numeric" }) ==
              n.toLocaleTimeString(e, { hour: "numeric", hour12: !1 })),
            f.set(e, t),
            t
          );
        })(n[0]);
      return t.toLocaleTimeString(
        n,
        r
          ? { hour: "numeric", minute: "numeric" }
          : { hour: "numeric", hour12: !0 }
      );
    }
    var h = new Map(),
      p = new Map();
    function _(e, t) {
      var n = new Date(),
        r = new Date(1e3 * e);
      if (r.getFullYear() != n.getFullYear()) return u(e);
      a.c(new Date().setHours(24, 0, 0, 0) - n.getTime());
      var o = new Date();
      if ((o.setHours(0, 0, 0, 0), r >= o)) {
        if ((o.setDate(o.getDate() + 1), r < o))
          return Object(i.f)("#Time_Today");
        if ((o.setDate(o.getDate() + 1), r < o))
          return Object(i.f)("#Time_Tomorrow");
      } else if ((o.setDate(o.getDate() - 1), r >= o))
        return Object(i.f)("#Time_Yesterday");
      var c = { month: t ? "long" : "short", day: "numeric" },
        s = r.setHours(0, 0, 0, 0) + c.month,
        l = p.get(s);
      return (
        l ||
        ((l = r.toLocaleDateString(i.e.GetPreferredLocales(), c)),
        p.set(s, l),
        l)
      );
    }
    function m(e, t) {
      var n = new Date(1e3 * e),
        c = new Date(),
        u = Object(r.a)(
          {
            bGranularFutureTime: !1,
            bGranularToday: !1,
            bGranularYesterday: !1,
            bGranularPast: !1,
          },
          t
        );
      if (n > c) {
        if (!u.bGranularFutureTime)
          return (
            a.c(n.getTime() - c.getTime()),
            n.getFullYear() == c.getFullYear() ? I(n) : k(n)
          );
        a.c(new Date().setHours(24, 0, 0, 0) - c.getTime());
        var f = new Date();
        return (
          f.setHours(0, 0, 0, 0),
          f.setDate(f.getDate() + 1),
          n < f
            ? Object(i.f)("#Time_Today")
            : (f.setDate(f.getDate() + 1),
              n < f
                ? Object(i.f)("#Time_Tomorrow")
                : (f.setDate(f.getDate() + 5), n < f ? C(n) : y(n, !0)))
        );
      }
      a.c(new Date().setHours(24, 0, 0, 0) - c.getTime());
      var d = new Date();
      if ((d.setHours(0, 0, 0, 0), n >= d))
        return u.bGranularToday
          ? Object(i.f)("#Time_Today_At", l(e))
          : Object(i.f)("#Time_Today");
      if ((d.setDate(d.getDate() - 1), n >= d))
        return u.bGranularYesterday
          ? Object(i.f)("#Time_Yesterday_At", l(e))
          : Object(i.f)("#Time_Yesterday");
      if (u.bGranularPast)
        return Object(i.f)(
          "#Time_Past_At",
          s(e, n.getFullYear() == c.getFullYear()),
          l(e)
        );
      if ((d.setDate(d.getDate() - 5), n >= d))
        return Object(i.f)("#TimeSince_ThisWeek");
      var h = new Date(d);
      if (
        (d.setDate(d.getDate() - 21),
        n >= d ||
          (n.getMonth() == c.getMonth() && n.getFullYear() == c.getFullYear()))
      ) {
        var p =
          Math.floor((h.valueOf() - n.valueOf()) / (1e3 * o.e.PerWeek)) + 1;
        return 1 == p
          ? Object(i.f)("#TimeSince_1Week")
          : Object(i.f)("#TimeSince_XWeeks", p);
      }
      return n.getFullYear() == c.getFullYear() ? I(n) : k(n);
    }
    var b = new Map(),
      g = new Map(),
      v = new Map(),
      E = new Map(),
      S = new Map();
    function y(e, t) {
      void 0 === t && (t = !1);
      var n = e.getDate() + 31 * (e.getMonth() + 12 * e.getFullYear()),
        r = S.get(n);
      return (
        r ||
        ((r = e.toLocaleDateString(i.e.GetPreferredLocales(), {
          weekday: "long",
          day: "numeric",
          month: t ? "long" : "short",
        })),
        S.set(n, r),
        r)
      );
    }
    function C(e) {
      var t = b.get(e.getDay());
      return (
        t ||
        ((t = e.toLocaleDateString(i.e.GetPreferredLocales(), {
          weekday: "long",
        })),
        b.set(e.getDay(), t),
        t)
      );
    }
    function I(e) {
      var t = g.get(e.getMonth());
      return (
        t ||
        ((t = e.toLocaleDateString(i.e.GetPreferredLocales(), {
          month: "long",
        })),
        g.set(e.getMonth(), t),
        t)
      );
    }
    function j(e) {
      var t = v.get(e.getFullYear());
      return (
        t ||
        ((t = e.toLocaleDateString(i.e.GetPreferredLocales(), {
          year: "numeric",
        })),
        v.set(e.getFullYear(), t),
        t)
      );
    }
    function k(e) {
      var t = e.getMonth() + 12 * e.getFullYear(),
        n = E.get(t);
      return (
        n ||
        ((n = e.toLocaleDateString(i.e.GetPreferredLocales(), {
          month: "long",
          year: "numeric",
        })),
        E.set(t, n),
        n)
      );
    }
  },
  O0sN: function (e, t, n) {
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
  UqDm: function (e, t, n) {
    "use strict";
    n.d(t, "h", function () {
      return r;
    }),
      n.d(t, "f", function () {
        return i;
      }),
      n.d(t, "a", function () {
        return o;
      }),
      n.d(t, "d", function () {
        return a;
      }),
      n.d(t, "e", function () {
        return c;
      }),
      n.d(t, "c", function () {
        return s;
      }),
      n.d(t, "b", function () {
        return u;
      }),
      n.d(t, "i", function () {
        return l;
      }),
      n.d(t, "j", function () {
        return f;
      }),
      n.d(t, "g", function () {
        return d;
      });
    n("XaMz");
    function r(e) {
      if ((null == e ? void 0 : e.length) > 1)
        for (var t = e.length; 0 !== t; ) {
          var n = Math.floor(Math.random() * t),
            r = e[(t -= 1)];
          (e[t] = e[n]), (e[n] = r);
        }
    }
    function i(e, t, n) {
      t < 0 ||
        n < 0 ||
        (n >= e.length && (e[n] = void 0), e.splice(n, 0, e.splice(t, 1)[0]));
    }
    function o(e, t) {
      if (!e && !t) return !0;
      if (!e || !t) return !1;
      if (e.length != t.length) return !1;
      for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
      return !0;
    }
    function a(e, t) {
      return c(e, function (e) {
        return t == e;
      });
    }
    function c(e, t) {
      var n = e.findIndex(t);
      return n >= 0 && (e.splice(n, 1), !0);
    }
    function s(e, t) {
      return e.reduce(function (e, n, r, i) {
        return e + (t(n, r, i) ? 1 : 0);
      }, 0);
    }
    function u(e, t) {
      return e.filter(function (e) {
        return t !== e;
      });
    }
    function l(e, t, n) {
      for (var r = 0, i = e.length - 1; r <= i; ) {
        var o = Math.floor((r + i) / 2),
          a = n(e[o], t);
        if (a < 0) r = o + 1;
        else if (a > 0) i = o - 1;
        else {
          if (i == o) return o;
          if (o == r) return i > o && n(t, e[o + 1]) < 0 ? o : o + 1;
          r = o;
        }
      }
      return i;
    }
    function f(e, t, n) {
      var r = l(e, t, n);
      e.splice(r + 1, 0, t);
    }
    function d(e, t, n) {
      return (
        e ||
          console.error(
            "array should be defined for us to fill in the missing indexes"
          ),
        e.length < t ? e.concat(Array(t - e.length).fill(n)) : e
      );
    }
  },
  XaMz: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return i;
    });
    var r = n("mrSG");
    function i(e, t) {
      for (var n = [], i = 2; i < arguments.length; i++)
        n[i - 2] = arguments[i];
      console.assert
        ? 0 == n.length
          ? console.assert(!!e, t)
          : console.assert.apply(console, Object(r.g)([!!e, t], n))
        : e || console.warn.apply(console, Object(r.g)([t], n));
    }
  },
  Y3TG: function (e, t, n) {
    "use strict";
    n("vDqi");
  },
  YlSc: function (e, t, n) {
    "use strict";
    function r(e) {
      if (!o() || !window.document.cookie) return null;
      var t = document.cookie.match("(^|; )" + e + "=([^;]*)");
      return t && t[2] ? decodeURIComponent(t[2]) : null;
    }
    function i(e, t, n, r) {
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
    }
    function o() {
      return !!window.document;
    }
    n.d(t, "b", function () {
      return r;
    }),
      n.d(t, "c", function () {
        return i;
      }),
      n.d(t, "a", function () {
        return o;
      });
  },
  hEDq: function (e, t, n) {
    "use strict";
    n.d(t, "q", function () {
      return a;
    }),
      n.d(t, "d", function () {
        return c;
      }),
      n.d(t, "f", function () {
        return s;
      }),
      n.d(t, "h", function () {
        return f;
      }),
      n.d(t, "c", function () {
        return d;
      }),
      n.d(t, "i", function () {
        return h;
      }),
      n.d(t, "k", function () {
        return p;
      }),
      n.d(t, "e", function () {
        return m;
      }),
      n.d(t, "s", function () {
        return b;
      }),
      n.d(t, "g", function () {
        return _;
      }),
      n.d(t, "b", function () {
        return g;
      }),
      n.d(t, "j", function () {
        return v;
      }),
      n.d(t, "n", function () {
        return E;
      }),
      n.d(t, "o", function () {
        return S;
      }),
      n.d(t, "a", function () {
        return y;
      });
    var r = n("mrSG"),
      i = n("0N1H");
    n.d(t, "l", function () {
      return i.c;
    }),
      n.d(t, "m", function () {
        return i.d;
      }),
      n.d(t, "p", function () {
        return i.e;
      }),
      n.d(t, "r", function () {
        return i.f;
      });
    var o = n("2vnA"),
      a = (function () {
        function e() {
          (this.enabled = !1),
            (this.locked = !1),
            (this.features = 0),
            (this.allowallapps = !1),
            (this.baselist = void 0),
            (this.customlist = void 0);
        }
        return (
          Object(r.c)([o.B], e.prototype, "enabled", void 0),
          Object(r.c)([o.B], e.prototype, "locked", void 0),
          Object(r.c)([o.B], e.prototype, "features", void 0),
          Object(r.c)([o.B], e.prototype, "allowallapps", void 0),
          Object(r.c)([o.B], e.prototype, "baselist", void 0),
          Object(r.c)([o.B], e.prototype, "customlist", void 0),
          e
        );
      })(),
      c = (function () {
        return function () {
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
        bDisableRoomEffects: !1,
        bAnimatedAvatars: !0,
        featuresEnabled: {},
      };
    }
    var u;
    !(function (e) {
      (e[(e.Input = 0)] = "Input"),
        (e[(e.AllOutput = 1)] = "AllOutput"),
        (e[(e.Left = 2)] = "Left"),
        (e[(e.Right = 3)] = "Right"),
        (e[(e.Sub = 4)] = "Sub"),
        (e[(e.BackLeft = 5)] = "BackLeft"),
        (e[(e.BackRight = 6)] = "BackRight");
    })(u || (u = {}));
    var l;
    !(function (e) {
      (e[(e.Error = -2)] = "Error"),
        (e[(e.Invalid = -1)] = "Invalid"),
        (e[(e.UpToDate = 0)] = "UpToDate"),
        (e[(e.Checking = 1)] = "Checking"),
        (e[(e.Available = 2)] = "Available"),
        (e[(e.Downloading = 3)] = "Downloading"),
        (e[(e.Downloaded = 4)] = "Downloaded"),
        (e[(e.Applying = 5)] = "Applying"),
        (e[(e.Applied = 6)] = "Applied"),
        (e[(e.ClientRestartPending = 7)] = "ClientRestartPending"),
        (e[(e.SystemRestartPending = 8)] = "SystemRestartPending");
    })(l || (l = {}));
    var f;
    function d(e) {
      return (
        e == f.EBrowserType_OpenVROverlay ||
        e == f.EBrowserType_OpenVROverlay_Dashboard
      );
    }
    !(function (e) {
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
    })(f || (f = {}));
    var h, p;
    !(function (e) {
      (e[(e.k_EClientUINotificationGroupChatMessage = 1)] =
        "k_EClientUINotificationGroupChatMessage"),
        (e[(e.k_EClientUINotificationFriendChatMessage = 2)] =
          "k_EClientUINotificationFriendChatMessage"),
        (e[(e.k_EClientUINotificationFriendPersonaState = 3)] =
          "k_EClientUINotificationFriendPersonaState");
    })(h || (h = {})),
      (function (e) {
        (e[(e.k_EComputerActiveStateInvalid = 0)] =
          "k_EComputerActiveStateInvalid"),
          (e[(e.k_EComputerActiveStateActive = 1)] =
            "k_EComputerActiveStateActive"),
          (e[(e.k_EComputerActiveStateIdle = 2)] =
            "k_EComputerActiveStateIdle");
      })(p || (p = {}));
    var _,
      m = (function () {
        return function () {};
      })(),
      b = (function () {
        return function () {};
      })();
    !(function (e) {
      (e[(e.k_EPending = 0)] = "k_EPending"),
        (e[(e.k_EAccepted = 1)] = "k_EAccepted"),
        (e[(e.k_ERejected = 2)] = "k_ERejected");
    })(_ || (_ = {}));
    function g(e) {
      return (
        "game" === e ||
        "dlc" === e ||
        "software" === e ||
        "music" === e ||
        "application" === e ||
        "demo" === e ||
        "hardware" === e
      );
    }
    var v, E;
    !(function (e) {
      (e[(e.k_EClientUsedInputTypeKeyboard = 0)] =
        "k_EClientUsedInputTypeKeyboard"),
        (e[(e.k_EClientUsedInputTypeMouse = 1)] =
          "k_EClientUsedInputTypeMouse"),
        (e[(e.k_EClientUsedInputTypeController = 2)] =
          "k_EClientUsedInputTypeController"),
        (e[(e.k_EClientUsedInputTypeMax = 3)] = "k_EClientUsedInputTypeMax");
    })(v || (v = {})),
      (function (e) {
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
      })(E || (E = {}));
    var S;
    function y(e) {
      return e === S.k_ESteamRealmChina;
    }
    !(function (e) {
      (e[(e.k_ESteamRealmUnknown = 0)] = "k_ESteamRealmUnknown"),
        (e[(e.k_ESteamRealmGlobal = 1)] = "k_ESteamRealmGlobal"),
        (e[(e.k_ESteamRealmChina = 2)] = "k_ESteamRealmChina");
    })(S || (S = {}));
    var C, I, j, k, O, L;
    !(function (e) {
      (e[(e.Unknown = 0)] = "Unknown"),
        (e[(e.Wired = 1)] = "Wired"),
        (e[(e.Wireless = 2)] = "Wireless"),
        (e[(e.Virtual = 3)] = "Virtual");
    })(C || (C = {})),
      (function (e) {
        (e[(e.NotPresent = 0)] = "NotPresent"),
          (e[(e.Failed = 1)] = "Failed"),
          (e[(e.Disconnected = 2)] = "Disconnected"),
          (e[(e.Disconnecting = 3)] = "Disconnecting"),
          (e[(e.Connecting = 4)] = "Connecting"),
          (e[(e.Connected = 5)] = "Connected"),
          (e[(e.Retrying = 6)] = "Retrying");
      })(I || (I = {})),
      (function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Weak = 1)] = "Weak"),
          (e[(e.Ok = 2)] = "Ok"),
          (e[(e.Good = 3)] = "Good"),
          (e[(e.Excellent = 4)] = "Excellent");
      })(j || (j = {})),
      (function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.StaticWep = 1)] = "StaticWep"),
          (e[(e.DynamicWep = 2)] = "DynamicWep"),
          (e[(e.Wpa = 4)] = "Wpa"),
          (e[(e.WpaEnterprise = 8)] = "WpaEnterprise"),
          (e[(e.Wpa2 = 16)] = "Wpa2"),
          (e[(e.Wpa2Enterprise = 32)] = "Wpa2Enterprise"),
          (e[(e.Unsupported = 32768)] = "Unsupported");
      })(k || (k = {})),
      (function (e) {
        (e[(e.SystemKey0 = 0)] = "SystemKey0"),
          (e[(e.SystemKey1 = 1)] = "SystemKey1");
      })(O || (O = {})),
      (function (e) {
        (e[(e.Hidden = 0)] = "Hidden"),
          (e[(e.Notification = 1)] = "Notification"),
          (e[(e.Overlay = 2)] = "Overlay"),
          (e[(e.Opaque = 3)] = "Opaque"),
          (e[(e.OverlayKeyboard = 4)] = "OverlayKeyboard");
      })(L || (L = {}));
  },
  mrSG: function (e, t, n) {
    "use strict";
    n.d(t, "d", function () {
      return i;
    }),
      n.d(t, "a", function () {
        return o;
      }),
      n.d(t, "f", function () {
        return a;
      }),
      n.d(t, "c", function () {
        return c;
      }),
      n.d(t, "b", function () {
        return s;
      }),
      n.d(t, "e", function () {
        return u;
      }),
      n.d(t, "g", function () {
        return l;
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
    function i(e, t) {
      function n() {
        this.constructor = e;
      }
      r(e, t),
        (e.prototype =
          null === t
            ? Object.create(t)
            : ((n.prototype = t.prototype), new n()));
    }
    var o = function () {
      return (o =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
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
        var i = 0;
        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
            (n[r[i]] = e[r[i]]);
      }
      return n;
    }
    function c(e, t, n, r) {
      var i,
        o = arguments.length,
        a =
          o < 3
            ? t
            : null === r
            ? (r = Object.getOwnPropertyDescriptor(t, n))
            : r;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        a = Reflect.decorate(e, t, n, r);
      else
        for (var c = e.length - 1; c >= 0; c--)
          (i = e[c]) &&
            (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
      return o > 3 && a && Object.defineProperty(t, n, a), a;
    }
    function s(e, t, n, r) {
      return new (n || (n = Promise))(function (i, o) {
        function a(e) {
          try {
            s(r.next(e));
          } catch (e) {
            o(e);
          }
        }
        function c(e) {
          try {
            s(r.throw(e));
          } catch (e) {
            o(e);
          }
        }
        function s(e) {
          var t;
          e.done
            ? i(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(a, c);
        }
        s((r = r.apply(e, t || [])).next());
      });
    }
    function u(e, t) {
      var n,
        r,
        i,
        o,
        a = {
          label: 0,
          sent: function () {
            if (1 & i[0]) throw i[1];
            return i[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (o = { next: c(0), throw: c(1), return: c(2) }),
        "function" == typeof Symbol &&
          (o[Symbol.iterator] = function () {
            return this;
          }),
        o
      );
      function c(o) {
        return function (c) {
          return (function (o) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; a; )
              try {
                if (
                  ((n = 1),
                  r &&
                    (i =
                      2 & o[0]
                        ? r.return
                        : o[0]
                        ? r.throw || ((i = r.return) && i.call(r), 0)
                        : r.next) &&
                    !(i = i.call(r, o[1])).done)
                )
                  return i;
                switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                  case 0:
                  case 1:
                    i = o;
                    break;
                  case 4:
                    return a.label++, { value: o[1], done: !1 };
                  case 5:
                    a.label++, (r = o[1]), (o = [0]);
                    continue;
                  case 7:
                    (o = a.ops.pop()), a.trys.pop();
                    continue;
                  default:
                    if (
                      !((i = a.trys),
                      (i = i.length > 0 && i[i.length - 1]) ||
                        (6 !== o[0] && 2 !== o[0]))
                    ) {
                      a = 0;
                      continue;
                    }
                    if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                      a.label = o[1];
                      break;
                    }
                    if (6 === o[0] && a.label < i[1]) {
                      (a.label = i[1]), (i = o);
                      break;
                    }
                    if (i && a.label < i[2]) {
                      (a.label = i[2]), a.ops.push(o);
                      break;
                    }
                    i[2] && a.ops.pop(), a.trys.pop();
                    continue;
                }
                o = t.call(e, a);
              } catch (e) {
                (o = [6, e]), (r = 0);
              } finally {
                n = i = 0;
              }
            if (5 & o[0]) throw o[1];
            return { value: o[0] ? o[1] : void 0, done: !0 };
          })([o, c]);
        };
      }
    }
    function l() {
      for (var e = 0, t = 0, n = arguments.length; t < n; t++)
        e += arguments[t].length;
      var r = Array(e),
        i = 0;
      for (t = 0; t < n; t++)
        for (var o = arguments[t], a = 0, c = o.length; a < c; a++, i++)
          r[i] = o[a];
      return r;
    }
  },
  oh5H: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return l;
    }),
      n.d(t, "f", function () {
        return f;
      }),
      n.d(t, "n", function () {
        return d;
      }),
      n.d(t, "l", function () {
        return h;
      }),
      n.d(t, "a", function () {
        return p;
      }),
      n.d(t, "d", function () {
        return m;
      }),
      n.d(t, "c", function () {
        return b;
      }),
      n.d(t, "e", function () {
        return g;
      });
    var r = n("mrSG"),
      i = n("q1tI"),
      o = n("0N1H"),
      a = n("hEDq"),
      c = n("1n9R"),
      s = n("UqDm"),
      u = (n("XaMz"), n("Kcgk"));
    n.d(t, "g", function () {
      return u.a;
    }),
      n.d(t, "h", function () {
        return u.b;
      }),
      n.d(t, "j", function () {
        return u.d;
      }),
      n.d(t, "k", function () {
        return u.e;
      }),
      n.d(t, "m", function () {
        return u.f;
      }),
      n.d(t, "o", function () {
        return u.h;
      }),
      n.d(t, "p", function () {
        return u.i;
      }),
      n.d(t, "q", function () {
        return u.j;
      }),
      n.d(t, "i", function () {
        return u.c;
      });
    var l = (function () {
      function e() {
        (this.m_mapTokens = new Map()), (this.m_mapFallbackTokens = new Map());
      }
      return (
        (e.InstallErrorReportingStore = function (e) {
          this.sm_ErrorReportingStore = e;
        }),
        (e.GetLanguageFallback = function (e) {
          return "sc_schinese" === e ? "schinese" : "english";
        }),
        (e.GetELanguageFallback = function (e) {
          return 29 === e ? 6 : 0;
        }),
        (e.IsELanguageValidInRealm = function (e, t) {
          return (
            t === (29 === e ? a.o.k_ESteamRealmChina : a.o.k_ESteamRealmGlobal)
          );
        }),
        (e.GetLanguageListForRealms = function (e) {
          for (var t = new Array(), n = 0; n < 30; n++)
            for (var r = 0, i = e; r < i.length; r++) {
              var o = i[r];
              if (this.IsELanguageValidInRealm(n, o)) {
                t.push(n);
                break;
              }
            }
          return t;
        }),
        (e.prototype.InitFromObjects = function (e, t, n, i, o) {
          o || this.m_mapTokens.clear();
          var a = Object(r.a)(Object(r.a)({}, n || {}), e),
            c = Object(r.a)(Object(r.a)({}, i || {}), t || {});
          this.AddTokens(a, c);
        }),
        (e.prototype.InitDirect = function (e, t) {
          this.m_mapTokens.clear(),
            this.m_mapFallbackTokens.clear(),
            this.AddTokens(e, t);
        }),
        (e.prototype.AddTokens = function (e, t) {
          var n = this;
          Object.keys(e).forEach(function (t) {
            n.m_mapTokens.set(t, e[t]);
          }),
            t &&
              Object.keys(t).forEach(function (e) {
                n.m_mapTokens.has(e) || n.m_mapTokens.set(e, t[e]),
                  n.m_mapFallbackTokens.set(e, t[e]);
              });
        }),
        (e.prototype.GetPreferredLocales = function () {
          return this.m_rgLocalesToUse
            ? this.m_rgLocalesToUse
            : navigator && navigator.languages
            ? navigator.languages
            : ["en-US"];
        }),
        (e.prototype.GetELanguageFallbackOrder = function (t) {
          void 0 === t && (t = null);
          var n = new Array();
          (n.push(Object(o.f)(c.d.LANGUAGE)),
          (c.d.SUPPORTED_LANGUAGES || []).forEach(function (e) {
            e.value != c.d.LANGUAGE && n.push(Object(o.f)(e.value));
          }),
          t) &&
            e.GetLanguageListForRealms(t).forEach(function (e) {
              -1 == n.indexOf(e) && n.push(e);
            });
          return n;
        }),
        (e.prototype.SetPreferredLocales = function (e) {
          this.m_rgLocalesToUse = e;
        }),
        (e.prototype.LocalizeString = function (t) {
          if (t && 0 != t.length && "#" == t.charAt(0)) {
            var n = this.m_mapTokens.get(t.substring(1));
            if (void 0 !== n) return n;
            e.sm_ErrorReportingStore &&
              e.sm_ErrorReportingStore.ReportError(
                new Error(
                  "Unable to find localization token '" +
                    t +
                    "' for language '" +
                    c.d.LANGUAGE +
                    "', " +
                    this.m_mapTokens.size +
                    " tokens in map"
                ),
                { bIncludeMessageInIdentifier: !0 }
              );
          }
        }),
        (e.prototype.LocalizeStringFromFallback = function (e) {
          if (e && 0 != e.length && "#" == e.charAt(0)) {
            var t = this.m_mapFallbackTokens.get(e.substring(1));
            if (void 0 !== t) return t;
          }
        }),
        e
      );
    })();
    function f(e) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      var r = g.LocalizeString(e);
      return void 0 === r
        ? e
        : (t.length > 0 &&
            (r = r.replace(/%(?:(\d+)\$)?s/g, function (e, n) {
              if (n <= t.length && n >= 1) {
                var r = t[n - 1];
                return String(null == r ? "" : r);
              }
              return e;
            })),
          r);
    }
    function d(e) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      var o = g.LocalizeString(e);
      if (void 0 === o) return e;
      for (var a, c = [], s = /(.*?)%(\d+)\$s/g, u = 0; (a = s.exec(o)); ) {
        (u += a[0].length), c.push(a[1]);
        var l = parseInt(a[2]);
        l >= 1 && l <= t.length && c.push(t[l - 1]);
      }
      return (
        c.push(o.substr(u)),
        i.createElement.apply(i, Object(r.g)([i.Fragment, null], c))
      );
    }
    function h(e, t) {
      for (var n = [], i = 2; i < arguments.length; i++)
        n[i - 2] = arguments[i];
      return 1 === t || "1" === t
        ? f.apply(void 0, Object(r.g)([e, t], n))
        : f.apply(void 0, Object(r.g)([e + "_Plural", t], n));
    }
    var p = (function () {
        function e() {}
        return (
          (e.Set = function (e, t, n) {
            if (e.length <= t) {
              if (t >= 30) return e;
              e = Object(s.g)(e, t + 1, null);
            }
            return (e[t] = n), e;
          }),
          (e.Get = function (e, t) {
            return (e && e.length > t && e[t]) || "";
          }),
          (e.GetWithFallback = function (t, n) {
            return e.Get(t, n) || e.Get(t, l.GetELanguageFallback(n));
          }),
          e
        );
      })(),
      _ = {
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
        vietnamese: "vn",
        sc_schinese: "zh-cn",
        koreana: "ko",
      },
      m = {
        "en-US": 0,
        "de-DE": 1,
        "fr-FR": 2,
        "it-IT": 3,
        "ko-KR": 4,
        "es-ES": 5,
        "zh-CH": 6,
        "zh-CN": 7,
        "ru-RU": 8,
        "th-TH": 9,
        "ja-JP": 10,
        "pt-PT": 11,
        "pl-PL": 12,
        "da-DK": 13,
        "nl-NL": 14,
        "fi-FI": 15,
        "nb-NO": 16,
        "sv-SE": 17,
        "hu-HU": 18,
        "cs-CZ": 19,
        "ro-RO": 20,
        "tr-TR": 21,
        "pt-BR": 22,
        "bg-BG": 23,
        "el-GR": 24,
        "ar-SA": 25,
        "uk-UA": 26,
        "es-419": 27,
        "vi-VN": 28,
      };
    function b() {
      return _[c.d.LANGUAGE] || null;
    }
    var g = new l();
    window.LocalizationManager = g;
  },
  "qM/t": function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("mrSG"),
      i = (n("O0sN"), n("q1tI")),
      o = n("i8i4"),
      a = n("tkkQ"),
      c = n("Ezvv"),
      s = (n("Y3TG"), n("oh5H")),
      u = n("XaMz"),
      l = n("2vnA"),
      f = n("TyAF"),
      d = n("J0bI"),
      h = n("s+DT");
    var p = n("1VtQ"),
      _ = n("K4CH"),
      m = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(r.d)(t, e),
          (t.prototype.BIsExpired = function () {
            return b.sm_rtTimeCur >= this.m_rtTimeExpires;
          }),
          (t.prototype.InitFromPHPInviteLinkInfo = function (e) {
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
          Object(r.c)([l.k], t.prototype, "InitFromPHPInviteLinkInfo", null),
          t
        );
      })(d.b),
      b = (function () {
        function e(e) {
          (this.m_bConnectingToClient = !1),
            (this.m_invite = new m(e.strInviteCode)),
            e.Invite
              ? this.m_invite.InitFromPHPInviteLinkInfo(e.Invite)
              : this.m_invite.InitInvalid(),
            (this.m_htmlPreRendered = e.render),
            this.SendInviteToClient();
        }
        return (
          (e.prototype.BIsInviteValid = function () {
            return this.m_invite.BIsValid() && !this.m_invite.BIsExpired();
          }),
          (e.prototype.GetInvite = function () {
            return this.m_invite;
          }),
          (e.prototype.BIsConnectingToClient = function () {
            return this.m_bConnectingToClient;
          }),
          (e.prototype.GetConnectResults = function () {
            return this.m_connectResult;
          }),
          (e.prototype.GetPreRenderedHTML = function () {
            return this.m_htmlPreRendered;
          }),
          (e.prototype.LaunchWebChat = function () {
            !(function (e) {
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
                    var r = function (n) {
                      var i = a.a.COMMUNITY_BASE_URL.replace(
                        /(https?:\/\/[^/]*).*$/,
                        "$1"
                      );
                      n.source == t &&
                        "FriendsUIReady" == n.data &&
                        n.origin == i &&
                        (t.postMessage(e, a.a.COMMUNITY_BASE_URL),
                        window.removeEventListener("message", r));
                    };
                    window.addEventListener("message", r);
                  }
                  t.location.href = a.a.COMMUNITY_BASE_URL + "chat/";
                } else e && t.postMessage(e, a.a.COMMUNITY_BASE_URL);
                t.focus();
              }
            })({
              command: "ShowChatRoomGroupInvite",
              invite_code: this.m_invite.GetInviteCode(),
            });
          }),
          (e.prototype.LaunchSteamIgnoreAccount = function () {
            c.b.SetAllowAccountMismatch(!0), this.SendInviteToClient();
          }),
          (e.prototype.ForceLaunchSteamClient = function () {
            window.location.href =
              "steam://friends/ShowChatRoomGroupInvite/" +
              this.m_invite.GetInviteCode();
          }),
          (e.prototype.SendInviteToClient = function () {
            var e = this;
            this.m_invite.BIsValid() &&
              !this.m_invite.BIsExpired() &&
              ((this.m_bConnectingToClient = !0),
              c.b
                .ShowChatRoomGroupInvite(this.m_invite.GetInviteCode())
                .then(function (t) {
                  Object(l.F)(function () {
                    (e.m_bConnectingToClient = !1),
                      (e.m_connectResult = t),
                      console.log(t);
                  });
                }));
          }),
          Object(r.c)([l.B], e.prototype, "m_bConnectingToClient", void 0),
          Object(r.c)([l.B], e.prototype, "m_connectResult", void 0),
          e
        );
      })(),
      g = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(r.d)(t, e),
          (t.prototype.render = function () {
            return i.createElement(
              "div",
              { className: "InviteLandingRoot" },
              this.props.controller.BIsInviteValid()
                ? i.createElement(v, { controller: this.props.controller })
                : i.createElement(E, { controller: this.props.controller })
            );
          }),
          (t = Object(r.c)([f.a], t))
        );
      })(i.Component),
      v = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.m_bTriedToLaunchSteam = !1), t;
        }
        return (
          Object(r.d)(t, e),
          (t.prototype.LaunchWebChat = function () {
            this.props.controller.LaunchWebChat();
          }),
          (t.prototype.OpenInSteamIgnoreAccount = function () {
            this.props.controller.LaunchSteamIgnoreAccount();
          }),
          (t.prototype.LaunchSteamClient = function () {
            var e = this;
            this.props.controller.ForceLaunchSteamClient(),
              window.setTimeout(function () {
                e.m_bTriedToLaunchSteam = !0;
              }, 1e3);
          }),
          (t.prototype.IsMobileDevice = function () {
            switch (new _.UAParser(navigator.userAgent).getResult().os.name) {
              case "iOS":
              case "Android":
              case "BlackBerry":
                return !0;
            }
            return !1;
          }),
          (t.prototype.render = function () {
            if (this.props.controller.BIsConnectingToClient())
              return i.createElement(
                "div",
                { className: "ChatMessageInvite RequestingInfo NoColumns" },
                i.createElement(
                  "div",
                  { className: "postedExpiredInvite" },
                  Object(s.f)("#bbcode_invite_requesting_info")
                )
              );
            var e = this.props.controller.GetConnectResults(),
              t = this.props.controller.GetInvite(),
              n = (a.a.COMMUNITY_BASE_URL, this.IsMobileDevice()),
              r = "inviteButton inviteButtonJoinChat";
            return (
              t.BIsVoiceChatInvite() && (r += " inviteButtonJoinVoice"),
              e.success
                ? i.createElement(
                    "div",
                    { className: "ChatMessageInvite NoColumns" },
                    i.createElement(
                      "div",
                      { className: "groupName" },
                      Object(s.f)("#InviteLanding_SentToSteam")
                    ),
                    i.createElement(
                      "div",
                      { className: "inviteLabel" },
                      Object(s.n)(
                        "#InviteLanding_SentToSteam_Desc",
                        i.createElement(
                          "a",
                          {
                            href: "javascript:void(0);",
                            onClick: this.LaunchWebChat,
                          },
                          Object(s.f)(
                            "#InviteLanding_SentToSteam_Desc_LaunchWebChat"
                          )
                        )
                      )
                    )
                  )
                : e.account_mismatch
                ? i.createElement(
                    S,
                    { render: this.props.controller.GetPreRenderedHTML() },
                    i.createElement(
                      "div",
                      { className: "inviteLabel" },
                      Object(s.f)("#InviteLanding_AccountMismatch")
                    ),
                    i.createElement(
                      "div",
                      { className: "inviteLabel" },
                      i.createElement(
                        "button",
                        {
                          className: r,
                          type: "button",
                          onClick: this.OpenInSteamIgnoreAccount,
                        },
                        Object(s.f)("#InviteLanding_OpenInSteam")
                      ),
                      i.createElement(
                        "button",
                        {
                          className: r,
                          type: "button",
                          onClick: this.LaunchWebChat,
                        },
                        Object(s.f)("#InviteLanding_OpenInWebChat")
                      )
                    )
                  )
                : e.call_unsupported
                ? i.createElement(
                    "div",
                    { className: "ChatMessageInvite" },
                    i.createElement(
                      "div",
                      { className: "groupName" },
                      Object(s.f)("#InviteLanding_SentToSteam")
                    ),
                    i.createElement(
                      "div",
                      { className: "inviteLabel" },
                      Object(s.n)(
                        "#InviteLanding_SentToSteam_Desc",
                        i.createElement(
                          "a",
                          {
                            href: "javascript:void(0);",
                            onClick: this.LaunchWebChat,
                          },
                          Object(s.f)(
                            "#InviteLanding_SentToSteam_Desc_LaunchWebChat"
                          )
                        )
                      )
                    )
                  )
                : i.createElement(
                    S,
                    { render: this.props.controller.GetPreRenderedHTML() },
                    i.createElement(
                      "div",
                      { className: "inviteLabel inviteLabelButtons" },
                      !n &&
                        i.createElement(
                          "button",
                          {
                            className: r,
                            type: "button",
                            onClick: this.LaunchSteamClient,
                          },
                          Object(s.f)("#InviteLanding_OpenInSteam")
                        ),
                      i.createElement(
                        "button",
                        {
                          className: r,
                          type: "button",
                          onClick: this.LaunchWebChat,
                        },
                        Object(s.f)("#InviteLanding_OpenInWebChat")
                      )
                    ),
                    this.m_bTriedToLaunchSteam &&
                      i.createElement(
                        "div",
                        { className: "inviteLabel inviteLabelLaunchPrompt" },
                        Object(s.f)("#InviteLanding_OpenInSteam_Help")
                      )
                  )
            );
          }),
          Object(r.c)([l.B], t.prototype, "m_bTriedToLaunchSteam", void 0),
          Object(r.c)([p.a], t.prototype, "LaunchWebChat", null),
          Object(r.c)([p.a], t.prototype, "OpenInSteamIgnoreAccount", null),
          Object(r.c)([p.a], t.prototype, "LaunchSteamClient", null),
          (t = Object(r.c)([f.a], t))
        );
      })(i.Component),
      E = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(r.d)(t, e),
          (t.prototype.render = function () {
            return i.createElement(
              "div",
              { className: "ChatMessageInvite" },
              i.createElement(
                "div",
                { className: "postedExpiredInvite" },
                Object(s.f)("#InviteLanding_ExpiredOrInvalid")
              )
            );
          }),
          t
        );
      })(i.Component);
    function S(e) {
      return i.createElement(
        "div",
        { className: "ChatMessageInvite" },
        i.createElement("div", {
          className: "leftInviteContainer",
          dangerouslySetInnerHTML: { __html: e.render.strAvatarHTML },
        }),
        i.createElement(
          "div",
          { className: "rightInviteContainer" },
          i.createElement(
            "div",
            { className: "inviteLabel" },
            Object(s.n)(
              "#bbcode_invite_description",
              i.createElement("span", {
                dangerouslySetInnerHTML: {
                  __html: e.render.strInviterNameLinkHTML,
                },
              })
            )
          ),
          i.createElement(
            "div",
            { className: "groupName" },
            e.render.strChatRoomGroupName
          ),
          e.children
        )
      );
    }
    window.AssertMsg = u.a;
    var y = new c.a();
    function C(e) {
      var t;
      try {
        t = JSON.parse(e.getAttribute("data-inviteinfo"));
      } catch (e) {}
      b.sm_rtTimeCur = t.rtTimeCur;
      var n = new b(t);
      o.render(i.createElement(g, { controller: n }), e);
    }
    function I(e) {
      return Object(r.b)(this, void 0, void 0, function () {
        var t, i, o, a, c, u, l;
        return Object(r.e)(this, function (f) {
          switch (f.label) {
            case 0:
              return (
                (t = s.b.GetLanguageFallback(e)),
                (i = e === t),
                [
                  4,
                  Promise.all([
                    n("9Lmx")("./shared_" + e + ".json"),
                    n("79S0")("./friendsui_" + e + ".json"),
                    i ? {} : n("9Lmx")("./shared_" + t + ".json"),
                    i ? {} : n("79S0")("./friendsui_" + t + ".json"),
                  ]),
                ]
              );
            case 1:
              return (
                (o = f.sent()),
                (a = o[0]),
                (c = o[1]),
                (u = o[2]),
                (l = o[3]),
                s.e.AddTokens(
                  Object(r.a)(Object(r.a)({}, a), c),
                  Object(r.a)(Object(r.a)({}, u), l)
                ),
                [2]
              );
          }
        });
      });
    }
    (window.ClientConnectionAPI = y),
      document.addEventListener("DOMContentLoaded", function () {
        return Object(r.b)(this, void 0, void 0, function () {
          return Object(r.e)(this, function (e) {
            switch (e.label) {
              case 0:
                return Object(a.c)(), [4, I(a.a.LANGUAGE)];
              case 1:
                return (
                  e.sent(),
                  (function () {
                    for (
                      var e = document.querySelectorAll(".ChatReactRoot"),
                        t = 0;
                      t < e.length;
                      t++
                    ) {
                      var n = e[t],
                        r = n.getAttribute("data-component");
                      switch (r) {
                        case "ChatInvite":
                          C(n);
                          break;
                        default:
                          Object(u.a)(!1, 'unknown component: "' + r + '"');
                      }
                    }
                  })(),
                  [2]
                );
            }
          });
        });
      });
  },
  "s+DT": function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return c;
    });
    var r = n("2lpH"),
      i = n.n(r),
      o = n("0N1H"),
      a = n("1n9R"),
      c = (function () {
        function e(t, n, r, o) {
          void 0 === t && (t = 0),
            t instanceof e
              ? (this.m_ulSteamID = t.m_ulSteamID)
              : "string" == typeof t
              ? (this.m_ulSteamID = i.a.fromString(t, !0))
              : n && r && void 0 !== o
              ? this.SetFromComponents(t, o, r, n)
              : (this.m_ulSteamID = t ? i.a.fromNumber(t, !0) : i.a.UZERO);
        }
        return (
          (e.InitFromAccountID = function (t) {
            return new e(Number(t), a.d.EUNIVERSE, 1, o.q);
          }),
          (e.InitFromClanID = function (t) {
            return new e(Number(t), a.d.EUNIVERSE, 7, 0);
          }),
          (e.prototype.GetAccountID = function () {
            return this.m_ulSteamID.getLowBitsUnsigned();
          }),
          (e.prototype.GetInstance = function () {
            return 1048575 & this.m_ulSteamID.getHighBitsUnsigned();
          }),
          (e.prototype.GetAccountType = function () {
            return (this.m_ulSteamID.getHighBitsUnsigned() >> 20) & 15;
          }),
          (e.prototype.GetUniverse = function () {
            return (this.m_ulSteamID.getHighBitsUnsigned() >> 24) & 255;
          }),
          (e.prototype.ConvertTo64BitString = function () {
            return this.m_ulSteamID.toString();
          }),
          (e.prototype.Render = function () {
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
          (e.prototype.BIsValid = function () {
            var e = this.GetAccountType();
            if (e <= 0 || e >= 11) return !1;
            var t = this.GetUniverse();
            if (t <= 0 || t >= 5) return !1;
            if (1 == e) {
              if (0 == this.GetAccountID() || this.GetInstance() > o.r)
                return !1;
            } else if (7 == e) {
              if (0 == this.GetAccountID() || 0 != this.GetInstance())
                return !1;
            } else if (3 == e && 0 == this.GetAccountID()) return !1;
            return !0;
          }),
          (e.prototype.BIsIndividualAccount = function () {
            return 1 == this.GetAccountType();
          }),
          (e.prototype.BIsClanAccount = function () {
            return 7 == this.GetAccountType();
          }),
          (e.prototype.SetAccountID = function (e) {
            this.m_ulSteamID = new i.a(
              e,
              this.m_ulSteamID.getHighBitsUnsigned(),
              !0
            );
          }),
          (e.prototype.SetInstance = function (e) {
            this.SetFromComponents(
              this.GetAccountID(),
              e,
              this.GetAccountType(),
              this.GetUniverse()
            );
          }),
          (e.prototype.SetAccountType = function (e) {
            this.SetFromComponents(
              this.GetAccountID(),
              this.GetInstance(),
              e,
              this.GetUniverse()
            );
          }),
          (e.prototype.SetUniverse = function (e) {
            this.SetFromComponents(
              this.GetAccountID(),
              this.GetInstance(),
              this.GetAccountType(),
              e
            );
          }),
          (e.prototype.SetFromComponents = function (e, t, n, r) {
            var o = ((255 & r) << 24) + ((15 & n) << 20) + (1048575 & t),
              a = 4294967295 & e;
            this.m_ulSteamID = new i.a(a, o, !0);
          }),
          e
        );
      })();
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
        return r.f;
      });
  },
  ujHl: function (e, t, n) {
    "use strict";
    n.d(t, "e", function () {
      return r;
    }),
      n.d(t, "a", function () {
        return i;
      }),
      n.d(t, "b", function () {
        return o;
      }),
      n.d(t, "c", function () {
        return a;
      }),
      n.d(t, "d", function () {
        return c;
      }),
      n.d(t, "f", function () {
        return s;
      });
    var r = {
      PerYear: 31536e3,
      PerMonth: 2628e3,
      PerWeek: 604800,
      PerDay: 86400,
      PerHour: 3600,
      PerMinute: 60,
    };
    function i(e, t) {
      return (
        e.getFullYear() == t.getFullYear() &&
        e.getMonth() == t.getMonth() &&
        e.getDate() == t.getDate()
      );
    }
    function o(e, t) {
      return e.getFullYear() == t.getFullYear();
    }
    function a(e) {
      return new Date(
        e.getFullYear(),
        e.getMonth(),
        e.getDate(),
        e.getHours(),
        0,
        0,
        0
      );
    }
    function c(e) {
      return new Date(e.getFullYear(), e.getMonth(), 1, 0, 0, 0, 0);
    }
    function s(e) {
      return new Promise(function (t) {
        return setTimeout(t, e);
      });
    }
  },
  y3Ls: function (e, t, n) {
    "use strict";
    function r(e, t, n) {
      return {
        get: function () {
          var e = n.value.bind(this);
          return (
            this.hasOwnProperty(t) ||
              Object.defineProperty(this, t, { value: e }),
            e
          );
        },
      };
    }
    n.d(t, "a", function () {
      return r;
    });
  },
});
