/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
!(function(c) {
  function e(e) {
    for (
      var t, n, r = e[0], i = e[1], o = e[2], s = 0, a = [];
      s < r.length;
      s++
    )
      (n = r[s]), d[n] && a.push(d[n][0]), (d[n] = 0);
    for (t in i) Object.prototype.hasOwnProperty.call(i, t) && (c[t] = i[t]);
    for (m && m(e); a.length; ) a.shift()();
    return u.push.apply(u, o || []), l();
  }
  function l() {
    for (var e, t = 0; t < u.length; t++) {
      for (var n = u[t], r = !0, i = 1; i < n.length; i++) {
        var o = n[i];
        0 !== d[o] && (r = !1);
      }
      r && (u.splice(t--, 1), (e = h((h.s = n[0]))));
    }
    return e;
  }
  var n = {},
    p = { 89: 0 },
    d = { 89: 0 },
    u = [];
  function h(e) {
    if (n[e]) return n[e].exports;
    var t = (n[e] = { i: e, l: !1, exports: {} });
    return c[e].call(t.exports, t, t.exports, h), (t.l = !0), t.exports;
  }
  (h.e = function(u) {
    var e = [];
    p[u]
      ? e.push(p[u])
      : 0 !== p[u] &&
        { 2: 1, 5: 1, 6: 1, 91: 1, 92: 1 }[u] &&
        e.push(
          (p[u] = new Promise(function(e, r) {
            for (
              var t =
                  "..\\..\\..\\css\\applications\\community\\" +
                  ({
                    1: "localization/shared_english-json",
                    2: "events~profile",
                    3: "localization/main_english-json",
                    5: "broadcast",
                    6: "events",
                    7: "localization/main_brazilian-json",
                    8: "localization/main_bulgarian-json",
                    9: "localization/main_czech-json",
                    10: "localization/main_danish-json",
                    11: "localization/main_dutch-json",
                    12: "localization/main_finnish-json",
                    13: "localization/main_french-json",
                    14: "localization/main_german-json",
                    15: "localization/main_greek-json",
                    16: "localization/main_hungarian-json",
                    17: "localization/main_italian-json",
                    18: "localization/main_japanese-json",
                    19: "localization/main_koreana-json",
                    20: "localization/main_latam-json",
                    21: "localization/main_norwegian-json",
                    22: "localization/main_polish-json",
                    23: "localization/main_portuguese-json",
                    24: "localization/main_romanian-json",
                    25: "localization/main_russian-json",
                    26: "localization/main_schinese-json",
                    27: "localization/main_spanish-json",
                    28: "localization/main_swedish-json",
                    29: "localization/main_tchinese-json",
                    30: "localization/main_thai-json",
                    31: "localization/main_turkish-json",
                    32: "localization/main_ukrainian-json",
                    33: "localization/main_vietnamese-json",
                    61: "localization/shared_arabic-json",
                    62: "localization/shared_brazilian-json",
                    63: "localization/shared_bulgarian-json",
                    64: "localization/shared_czech-json",
                    65: "localization/shared_danish-json",
                    66: "localization/shared_dutch-json",
                    67: "localization/shared_finnish-json",
                    68: "localization/shared_french-json",
                    69: "localization/shared_german-json",
                    70: "localization/shared_greek-json",
                    71: "localization/shared_hungarian-json",
                    72: "localization/shared_italian-json",
                    73: "localization/shared_japanese-json",
                    74: "localization/shared_koreana-json",
                    75: "localization/shared_latam-json",
                    76: "localization/shared_norwegian-json",
                    77: "localization/shared_polish-json",
                    78: "localization/shared_portuguese-json",
                    79: "localization/shared_romanian-json",
                    80: "localization/shared_russian-json",
                    81: "localization/shared_schinese-json",
                    82: "localization/shared_spanish-json",
                    83: "localization/shared_swedish-json",
                    84: "localization/shared_tchinese-json",
                    85: "localization/shared_thai-json",
                    86: "localization/shared_turkish-json",
                    87: "localization/shared_ukrainian-json",
                    88: "localization/shared_vietnamese-json",
                    91: "profile",
                    92: "vendors~events"
                  }[u] || u) +
                  ".css?chunkhash=" +
                  {
                    1: "2cf4b0f7e20ded039b45",
                    2: "bfe2795201d05091d6f9",
                    3: "c32f2923f8a0c106f7cd",
                    5: "9693ff5081e311a28834",
                    6: "b465018d32381d48d193",
                    7: "9c44a8ad325566baf2b8",
                    8: "5530f384aa994a0b2b9c",
                    9: "f2739b054c504a474af4",
                    10: "5d4a86d4a06fbd7274f3",
                    11: "adfdcbe9e9285ced13bd",
                    12: "e8e37882b34d36017888",
                    13: "2345f30e9903ac6baad9",
                    14: "ec93525fee4fdd02a3ed",
                    15: "0a0ea7519138a35da03a",
                    16: "fc9f4c52b1ccd0634189",
                    17: "b634c8125584fda7e803",
                    18: "e4aba7fe0096502113ac",
                    19: "392e4f0de7ac2eb2da17",
                    20: "43b76916441ca79cb32f",
                    21: "537c2a2f01e1f392252c",
                    22: "05ed19c19f72fda83d5b",
                    23: "6678182edd70a67eb742",
                    24: "25dd9e5afa95d04ccfba",
                    25: "ae35b39bcc7c8468e03f",
                    26: "271571eb6c89a5af6d7e",
                    27: "af42416fb17523409262",
                    28: "6bd63f066a0ef0ba38c4",
                    29: "38e35e619e2b8891bda6",
                    30: "3ed07e9f3cac5c7ca1d3",
                    31: "df943a32e665aed80f12",
                    32: "e394d8d694a821cc3ae7",
                    33: "b936ac75c429fa883162",
                    61: "02ecafcb6b89b9a45e93",
                    62: "ce1f5bc4b9f1512ddc52",
                    63: "9930f1f43d0e742cc274",
                    64: "6522aa2c73db6c0ba600",
                    65: "84aac49f391658853cb4",
                    66: "62f2c1252c62a65b5d62",
                    67: "6d86ff2e42df1f801d74",
                    68: "6db5175151aba79b8f74",
                    69: "de993f66da7baec405cc",
                    70: "4b642a24ca3c604e02c1",
                    71: "4a3db84b209d30ec41b2",
                    72: "0d72b056be461657ea96",
                    73: "72601c6a4a00fa67e9e2",
                    74: "d3c92c80e9690d129ac5",
                    75: "3a84c1d66a22dfe5bbe1",
                    76: "03b9eb89dc13f59bdac1",
                    77: "e43fa5290560ea699498",
                    78: "6aa2a9656a90a4787f3c",
                    79: "f77f8b9e6cd286ef4d36",
                    80: "d03b00820e59c4848f51",
                    81: "97943c2dfced0d9f226f",
                    82: "ef83561ce8e90b8711be",
                    83: "66e08f583b4f3e119acd",
                    84: "61f56def6d00b03ee618",
                    85: "d8738d77d930eab69531",
                    86: "64325527a752371c1a2c",
                    87: "fc715b57c1d9bd3b7306",
                    88: "959332969a296bb81238",
                    91: "f92addad9199064130b9",
                    92: "02db113f865ed074cdf0"
                  }[u],
                i = h.p + t,
                n = document.getElementsByTagName("link"),
                o = 0;
              o < n.length;
              o++
            ) {
              var s =
                (c = n[o]).getAttribute("data-href") || c.getAttribute("href");
              if ("stylesheet" === c.rel && (s === t || s === i)) return e();
            }
            var a = document.getElementsByTagName("style");
            for (o = 0; o < a.length; o++) {
              var c;
              if ((s = (c = a[o]).getAttribute("data-href")) === t || s === i)
                return e();
            }
            var l = document.createElement("link");
            (l.rel = "stylesheet"),
              (l.type = "text/css"),
              (l.onload = e),
              (l.onerror = function(e) {
                var t = (e && e.target && e.target.src) || i,
                  n = new Error(
                    "Loading CSS chunk " + u + " failed.\n(" + t + ")"
                  );
                (n.code = "CSS_CHUNK_LOAD_FAILED"),
                  (n.request = t),
                  delete p[u],
                  l.parentNode.removeChild(l),
                  r(n);
              }),
              (l.href = i),
              document.getElementsByTagName("head")[0].appendChild(l);
          }).then(function() {
            p[u] = 0;
          }))
        );
    var n = d[u];
    if (0 !== n)
      if (n) e.push(n[2]);
      else {
        var t = new Promise(function(e, t) {
          n = d[u] = [e, t];
        });
        e.push((n[2] = t));
        var r,
          o = document.createElement("script");
        (o.charset = "utf-8"),
          (o.timeout = 120),
          h.nc && o.setAttribute("nonce", h.nc),
          (o.src = (function(e) {
            return (
              h.p +
              "" +
              ({
                1: "localization/shared_english-json",
                2: "events~profile",
                3: "localization/main_english-json",
                5: "broadcast",
                6: "events",
                7: "localization/main_brazilian-json",
                8: "localization/main_bulgarian-json",
                9: "localization/main_czech-json",
                10: "localization/main_danish-json",
                11: "localization/main_dutch-json",
                12: "localization/main_finnish-json",
                13: "localization/main_french-json",
                14: "localization/main_german-json",
                15: "localization/main_greek-json",
                16: "localization/main_hungarian-json",
                17: "localization/main_italian-json",
                18: "localization/main_japanese-json",
                19: "localization/main_koreana-json",
                20: "localization/main_latam-json",
                21: "localization/main_norwegian-json",
                22: "localization/main_polish-json",
                23: "localization/main_portuguese-json",
                24: "localization/main_romanian-json",
                25: "localization/main_russian-json",
                26: "localization/main_schinese-json",
                27: "localization/main_spanish-json",
                28: "localization/main_swedish-json",
                29: "localization/main_tchinese-json",
                30: "localization/main_thai-json",
                31: "localization/main_turkish-json",
                32: "localization/main_ukrainian-json",
                33: "localization/main_vietnamese-json",
                61: "localization/shared_arabic-json",
                62: "localization/shared_brazilian-json",
                63: "localization/shared_bulgarian-json",
                64: "localization/shared_czech-json",
                65: "localization/shared_danish-json",
                66: "localization/shared_dutch-json",
                67: "localization/shared_finnish-json",
                68: "localization/shared_french-json",
                69: "localization/shared_german-json",
                70: "localization/shared_greek-json",
                71: "localization/shared_hungarian-json",
                72: "localization/shared_italian-json",
                73: "localization/shared_japanese-json",
                74: "localization/shared_koreana-json",
                75: "localization/shared_latam-json",
                76: "localization/shared_norwegian-json",
                77: "localization/shared_polish-json",
                78: "localization/shared_portuguese-json",
                79: "localization/shared_romanian-json",
                80: "localization/shared_russian-json",
                81: "localization/shared_schinese-json",
                82: "localization/shared_spanish-json",
                83: "localization/shared_swedish-json",
                84: "localization/shared_tchinese-json",
                85: "localization/shared_thai-json",
                86: "localization/shared_turkish-json",
                87: "localization/shared_ukrainian-json",
                88: "localization/shared_vietnamese-json",
                91: "profile",
                92: "vendors~events"
              }[e] || e) +
              ".js?chunkhash=" +
              {
                1: "2cf4b0f7e20ded039b45",
                2: "bfe2795201d05091d6f9",
                3: "c32f2923f8a0c106f7cd",
                5: "9693ff5081e311a28834",
                6: "b465018d32381d48d193",
                7: "9c44a8ad325566baf2b8",
                8: "5530f384aa994a0b2b9c",
                9: "f2739b054c504a474af4",
                10: "5d4a86d4a06fbd7274f3",
                11: "adfdcbe9e9285ced13bd",
                12: "e8e37882b34d36017888",
                13: "2345f30e9903ac6baad9",
                14: "ec93525fee4fdd02a3ed",
                15: "0a0ea7519138a35da03a",
                16: "fc9f4c52b1ccd0634189",
                17: "b634c8125584fda7e803",
                18: "e4aba7fe0096502113ac",
                19: "392e4f0de7ac2eb2da17",
                20: "43b76916441ca79cb32f",
                21: "537c2a2f01e1f392252c",
                22: "05ed19c19f72fda83d5b",
                23: "6678182edd70a67eb742",
                24: "25dd9e5afa95d04ccfba",
                25: "ae35b39bcc7c8468e03f",
                26: "271571eb6c89a5af6d7e",
                27: "af42416fb17523409262",
                28: "6bd63f066a0ef0ba38c4",
                29: "38e35e619e2b8891bda6",
                30: "3ed07e9f3cac5c7ca1d3",
                31: "df943a32e665aed80f12",
                32: "e394d8d694a821cc3ae7",
                33: "b936ac75c429fa883162",
                61: "02ecafcb6b89b9a45e93",
                62: "ce1f5bc4b9f1512ddc52",
                63: "9930f1f43d0e742cc274",
                64: "6522aa2c73db6c0ba600",
                65: "84aac49f391658853cb4",
                66: "62f2c1252c62a65b5d62",
                67: "6d86ff2e42df1f801d74",
                68: "6db5175151aba79b8f74",
                69: "de993f66da7baec405cc",
                70: "4b642a24ca3c604e02c1",
                71: "4a3db84b209d30ec41b2",
                72: "0d72b056be461657ea96",
                73: "72601c6a4a00fa67e9e2",
                74: "d3c92c80e9690d129ac5",
                75: "3a84c1d66a22dfe5bbe1",
                76: "03b9eb89dc13f59bdac1",
                77: "e43fa5290560ea699498",
                78: "6aa2a9656a90a4787f3c",
                79: "f77f8b9e6cd286ef4d36",
                80: "d03b00820e59c4848f51",
                81: "97943c2dfced0d9f226f",
                82: "ef83561ce8e90b8711be",
                83: "66e08f583b4f3e119acd",
                84: "61f56def6d00b03ee618",
                85: "d8738d77d930eab69531",
                86: "64325527a752371c1a2c",
                87: "fc715b57c1d9bd3b7306",
                88: "959332969a296bb81238",
                91: "f92addad9199064130b9",
                92: "02db113f865ed074cdf0"
              }[e]
            );
          })(u)),
          (r = function(e) {
            (o.onerror = o.onload = null), clearTimeout(s);
            var t = d[u];
            if (0 !== t) {
              if (t) {
                var n = e && ("load" === e.type ? "missing" : e.type),
                  r = e && e.target && e.target.src,
                  i = new Error(
                    "Loading chunk " + u + " failed.\n(" + n + ": " + r + ")"
                  );
                (i.type = n), (i.request = r), t[1](i);
              }
              d[u] = void 0;
            }
          });
        var s = setTimeout(function() {
          r({ type: "timeout", target: o });
        }, 12e4);
        (o.onerror = o.onload = r), document.head.appendChild(o);
      }
    return Promise.all(e);
  }),
    (h.m = c),
    (h.c = n),
    (h.d = function(e, t, n) {
      h.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (h.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (h.t = function(t, e) {
      if ((1 & e && (t = h(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (h.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          h.d(
            n,
            r,
            function(e) {
              return t[e];
            }.bind(null, r)
          );
      return n;
    }),
    (h.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return h.d(t, "a", t), t;
    }),
    (h.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (h.p = ""),
    (h.oe = function(e) {
      throw (console.error(e), e);
    });
  var t = (window.webpackJsonp = window.webpackJsonp || []),
    r = t.push.bind(t);
  (t.push = e), (t = t.slice());
  for (var i = 0; i < t.length; i++) e(t[i]);
  var m = r;
  u.push(["gfbn", 0]), l();
})({
  "+jbA": function(e, t, n) {
    e.exports = {
      ContextMenuMouseOverlay: "contextmenu_ContextMenuMouseOverlay_3Knd7",
      ContextMenuFocusContainer: "contextmenu_ContextMenuFocusContainer_1S6CC",
      contextMenu: "contextmenu_contextMenu_PP7LM",
      ContextMenuPopup: "contextmenu_ContextMenuPopup_14wqd",
      contextMenuContents: "contextmenu_contextMenuContents_2EstN",
      contextMenuItem: "contextmenu_contextMenuItem_1n7Wl",
      active: "contextmenu_active_18z-3",
      MenuSectionHeader: "contextmenu_MenuSectionHeader_2Bb4J",
      StrongerSeparation: "contextmenu_StrongerSeparation_1BNck",
      UpperCase: "contextmenu_UpperCase_uz1Xm",
      SubMenu: "contextmenu_SubMenu_2RlEO",
      Label: "contextmenu_Label_2qdHl",
      Arrow: "contextmenu_Arrow_114nF",
      PopoutSubMenu: "contextmenu_PopoutSubMenu_Baq37",
      PopoutSubMenuItems: "contextmenu_PopoutSubMenuItems_2fZ_e"
    };
  },
  "2i24": function(e, t, n) {
    e.exports = {
      LoadingWrapper: "throbber_LoadingWrapper_2wAKy",
      Static: "throbber_Static_1Qfwp",
      none: "throbber_none_1F0lz",
      bottomCircle: "throbber_bottomCircle_2qjZm",
      noString: "throbber_noString_1Sy0p",
      Throbber: "throbber_Throbber_lYUEj",
      throbber_small: "throbber_throbber_small_2zbyh",
      throbber_medium: "throbber_throbber_medium_2CphU",
      throbber_large: "throbber_throbber_large_1x18v",
      throbber_center_wrapper: "throbber_throbber_center_wrapper_3IYPz",
      ThrobberText: "throbber_ThrobberText_21nVi",
      blur: "throbber_blur_1ctjA",
      ThrobberRoundLoop: "throbber_ThrobberRoundLoop_1O-cW",
      roundOuterOutline: "throbber_roundOuterOutline_1Vv--",
      roundOuter: "throbber_roundOuter_2K0Lz",
      roundFill: "throbber_roundFill_3sQFk",
      ThrobberFillLoop: "throbber_ThrobberFillLoop_ofdi9",
      topCircle: "throbber_topCircle_1LZff",
      circlePulse: "throbber_circlePulse_1XN6Z",
      ThrobberTopCircleLoop: "throbber_ThrobberTopCircleLoop_1jALk",
      ThrobberBottomCircleLoop: "throbber_ThrobberBottomCircleLoop_1KvOg",
      roundThrobber15: "throbber_roundThrobber15_2LGHp",
      roundThrobber14: "throbber_roundThrobber14_2FGCn",
      roundThrobber13: "throbber_roundThrobber13_1X-5j",
      roundThrobber12: "throbber_roundThrobber12_1pj1Q",
      roundThrobber11: "throbber_roundThrobber11_xFmZa",
      roundThrobber10: "throbber_roundThrobber10_3MGYo",
      roundThrobber09: "throbber_roundThrobber09_ktVJ4",
      roundThrobber08: "throbber_roundThrobber08_3s_7m",
      roundThrobber07: "throbber_roundThrobber07_11MVp",
      roundThrobber06: "throbber_roundThrobber06_2cl-m",
      roundThrobber05: "throbber_roundThrobber05_3-JE0",
      roundThrobber04: "throbber_roundThrobber04_1xNIK",
      roundThrobber03: "throbber_roundThrobber03_1S17y",
      roundThrobber02: "throbber_roundThrobber02_1-oUJ",
      roundThrobber01: "throbber_roundThrobber01_2tXge",
      ThrobberRoundLoopThickness: "throbber_ThrobberRoundLoopThickness_1fs4R",
      throbber_xlarge: "throbber_throbber_xlarge_1gYeZ",
      throbber_xxlarge: "throbber_throbber_xxlarge_3j-p4"
    };
  },
  "6Y59": function(e, t, n) {
    "use strict";
    n.d(t, "x", function() {
      return a;
    }),
      n.d(t, "g", function() {
        return c;
      }),
      n.d(t, "m", function() {
        return l;
      }),
      n.d(t, "h", function() {
        return u;
      }),
      n.d(t, "z", function() {
        return p;
      }),
      n.d(t, "F", function() {
        return d;
      }),
      n.d(t, "D", function() {
        return h;
      }),
      n.d(t, "r", function() {
        return m;
      }),
      n.d(t, "E", function() {
        return f;
      }),
      n.d(t, "t", function() {
        return _;
      }),
      n.d(t, "s", function() {
        return g;
      }),
      n.d(t, "d", function() {
        return v;
      }),
      n.d(t, "f", function() {
        return b;
      }),
      n.d(t, "l", function() {
        return y;
      }),
      n.d(t, "A", function() {
        return E;
      }),
      n.d(t, "a", function() {
        return M;
      }),
      n.d(t, "n", function() {
        return w;
      }),
      n.d(t, "p", function() {
        return O;
      }),
      n.d(t, "u", function() {
        return S;
      }),
      n.d(t, "j", function() {
        return k;
      }),
      n.d(t, "o", function() {
        return C;
      }),
      n.d(t, "y", function() {
        return D;
      }),
      n.d(t, "C", function() {
        return F;
      }),
      n.d(t, "v", function() {
        return I;
      }),
      n.d(t, "w", function() {
        return x;
      }),
      n.d(t, "b", function() {
        return L;
      }),
      n.d(t, "q", function() {
        return j;
      }),
      n.d(t, "B", function() {
        return R;
      }),
      n.d(t, "k", function() {
        return T;
      }),
      n.d(t, "i", function() {
        return B;
      }),
      n.d(t, "c", function() {
        return N;
      }),
      n.d(t, "e", function() {
        return A;
      });
    n("mrSG");
    var r = n("q1tI"),
      i = n("2i24"),
      o = n.n(i),
      s = n("exH9");
    n("YyVH"), n("Z7Ow");
    function a() {
      return r.createElement(
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
        r.createElement("path", {
          d:
            "M-232.755,589.942l3.103,2.408c5.78,4.492,11.973,8.18,18.409,10.959l3.581,1.547l2.276,33.783 c0.089,1.33,1.385,2.54,2.715,2.54h48.62c1.355,0,2.745-1.273,2.852-2.621l2.74-33.284l3.602-1.496 c6.406-2.656,12.646-6.262,18.554-10.707l3.137-2.366l30.578,15.009c1.155,0.571,2.924,0.017,3.563-1.087l24.303-42.1 c0.674-1.173,0.265-3.014-0.852-3.785l-27.872-19.309l0.469-3.832c0.495-4.032,0.725-7.395,0.725-10.57 c0-3.129-0.227-6.5-0.687-10.307l-0.469-3.896l28.699-19.253c1.112-0.741,1.509-2.473,0.84-3.627l-24.3-42.104 c-0.657-1.139-2.502-1.727-3.7-1.155l-31.208,14.748l-3.091-2.341c-5.571-4.224-11.466-7.688-17.522-10.306l-3.58-1.548 l-2.34-34.887c-0.089-1.33-1.381-2.536-2.715-2.536h-48.617c-1.355,0-2.74,1.274-2.851,2.626l-2.834,34.371l-3.593,1.501 c-6.082,2.535-12.028,5.924-17.667,10.071l-3.124,2.302l-31.392-15.413c-1.168-0.575-2.924-0.025-3.559,1.074l-24.309,42.107 c-0.678,1.172-0.264,3.014,0.848,3.781l28.068,19.444l-0.524,3.883c-0.592,4.378-0.865,8.018-0.865,11.462 c0,2.988,0.179,6.065,0.55,9.403l0.431,3.853l-28.528,19.125c-1.108,0.742-1.509,2.468-0.84,3.632l24.308,42.1 c0.656,1.142,2.489,1.726,3.7,1.154L-232.755,589.942z M-177.498,560.051c-19.311,0-35.02-15.709-35.02-35.02 s15.709-35.02,35.02-35.02s35.02,15.709,35.02,35.02S-158.188,560.051-177.498,560.051z"
        })
      );
    }
    function c() {
      return r.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_DownArrowContextMenu",
          "data-name": "Layer 1",
          viewBox: "0 0 128 128",
          x: "0px",
          y: "0px"
        },
        r.createElement("polygon", {
          points:
            "50 59.49 13.21 22.89 4.74 31.39 50 76.41 95.26 31.39 86.79 22.89 50 59.49"
        })
      );
    }
    function l(e) {
      var t = "SVGIcon_Button SVGIcon_MagnifyingGlass";
      return (
        e.className && (t += " " + e.className),
        r.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            version: "1.1",
            x: "0px",
            y: "0px",
            viewBox: "0 0 100 100"
          },
          r.createElement(
            "g",
            { transform: "translate(0,-952.36218)" },
            r.createElement("path", {
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
        )
      );
    }
    function u() {
      return r.createElement(
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
        r.createElement("circle", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "12",
          strokeMiterlimit: "10",
          cx: "128",
          cy: "128",
          r: "107.5"
        }),
        r.createElement("path", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "12",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          d:
            "M74.484,145.945 c0,0,12.996,37.533,53.514,37.533c38.084,0,53.499-37.533,53.499-37.533"
        }),
        r.createElement("line", {
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
        r.createElement("line", {
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
    function p() {
      return r.createElement(
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
        r.createElement(
          "g",
          { transform: "translate(0,-952.36218)" },
          r.createElement("path", {
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
    function d() {
      return r.createElement(
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
        r.createElement("line", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "45",
          strokeMiterlimit: "10",
          x1: "212",
          y1: "212",
          x2: "44",
          y2: "44"
        }),
        r.createElement("line", {
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
    function h(e) {
      return r.createElement(
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
          r.createElement(
            "g",
            null,
            r.createElement("path", {
              className: "Bubble",
              fill: "none",
              strokeMiterlimit: "1",
              strokeWidth: "2.5px",
              d:
                "M60.1,32.3c0,15.1-12.3,27.3-27.4,27.3 c-5,0-9.7-1.4-13.8-3.7c-1.8-1.1-15,5.4-13.8,3.4c1.7-2.9,5.9-10.3,4.7-12C7,43,5.3,37.8,5.3,32.3C5.3,17.2,17.6,5,32.7,5 C47.8,5,60.1,17.2,60.1,32.3z"
            })
          ),
        !e.exitOnly &&
          r.createElement(
            "g",
            null,
            r.createElement("path", {
              className: "AudioLines",
              opacity: "0",
              strokeWidth: "1px",
              d:
                "M37.2,51.1c-0.5,0-1-0.1-1.3-0.4c-0.7-0.5-0.7-1.3,0-1.8c6.3-4.4,9.8-10.2,9.8-16.4c0-6.2-3.5-12-9.8-16.4 c-0.7-0.5-0.7-1.3,0-1.8s1.9-0.5,2.6,0c7.1,4.9,10.9,11.4,10.9,18.3c0,6.9-3.9,13.4-10.9,18.3C38.2,51,37.7,51.1,37.2,51.1 M21.4,40.2c0.5,0,0.9-0.1,1.3-0.4c2.8-2,4.3-4.6,4.3-7.3s-1.5-5.4-4.3-7.3c-0.7-0.5-1.9-0.5-2.6,0c-0.7,0.5-0.7,1.3,0,1.8 c2.1,1.5,3.3,3.4,3.3,5.5c0,2.1-1.2,4-3.3,5.5c-0.7,0.5-0.7,1.3,0,1.8C20.4,40.1,20.9,40.2,21.4,40.2 M29.3,45.7 c0.5,0,1-0.1,1.3-0.4c4.9-3.4,7.7-7.9,7.7-12.7c0-4.8-2.7-9.3-7.7-12.7c-0.7-0.5-1.9-0.5-2.6,0c-0.7,0.5-0.7,1.3,0,1.8 c4.2,2.9,6.6,6.8,6.6,10.9c0,4.1-2.3,8-6.6,10.9c-0.7,0.5-0.7,1.3,0,1.8C28.4,45.5,28.8,45.7,29.3,45.7"
            })
          ),
        r.createElement(
          "g",
          { className: "Arrow", opacity: e.exitOnly ? 1 : 0 },
          r.createElement("polyline", {
            fill: "none",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            points: "41,30.7 14.5,30.7 23.5,19.4 "
          }),
          r.createElement("polyline", {
            fill: "none",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            points: "41,30.7 14.5,30.7 23.5,42 "
          })
        ),
        r.createElement(
          "g",
          null,
          r.createElement("polyline", {
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
          r.createElement(
            "g",
            { className: "Microphone" },
            r.createElement("path", {
              d:
                "M40.971,28.593v6.278c0,4.007-4.023,7.284-8.971,7.284c-2.693,0-5.126-0.974-6.765-2.516 c-1.379-1.28-2.207-2.952-2.207-4.769v-6.278l0,0H21.05v6.278c0,0.536,0.064,1.055,0.162,1.573 c0.357,1.752,1.281,3.325,2.627,4.592c1.801,1.702,4.332,2.839,7.17,3.049v4.072H25.3c-0.341,0-0.616,0.438-0.616,0.989 c0,0.552,0.275,0.99,0.616,0.99h5.759h1.882H38.7c0.341,0,0.616-0.438,0.616-0.99c0-0.551-0.275-0.989-0.616-0.989h-5.71v-4.072 c5.58-0.422,9.96-4.396,9.96-9.214v-6.278H40.971z"
            }),
            r.createElement(
              "g",
              null,
              r.createElement("path", {
                d:
                  "M32,39.841c-3.493,0-6.343-2.344-6.343-5.213v-17.85c0-2.871,2.85-5.213,6.343-5.213s6.343,2.342,6.343,5.213v17.85,C38.343,37.497,35.493,39.841,32,39.841z"
              })
            )
          )
      );
    }
    function m() {
      return r.createElement(
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
        r.createElement("path", {
          fill: "none",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          d:
            "M167.768,62.647 l-0.012,123.052c0,24.729-19.334,44.856-43.096,44.866c-23.765-0.006-43.099-20.134-43.096-44.872L81.557,48.851 c0-15.345,14.483-27.827,29.83-27.83c15.342,0.003,27.827,12.488,27.833,27.833l-0.002,139.245 c0.003,6.376-8.546,12.925-14.925,12.925c0,0-13.929-0.166-13.929-12.928l0.003-124.839"
        })
      );
    }
    function f(e) {
      return r.createElement(
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
        r.createElement(
          "g",
          { className: "Speaker" },
          r.createElement("path", {
            d:
              "M93.785,52.265c-0.946,0-2.357,0.63-3.304,1.577L40.284,98.022c-0.947,0.789-2.831,1.578-4.093,1.578H9.367 C8.104,99.6,7,100.706,7,101.967v52.069c0,1.264,1.104,2.367,2.367,2.367H36.19c1.262,0,3.146,0.632,4.093,1.578l50.197,44.181 c0.947,0.789,2.516,1.578,3.304,1.578s1.578-1.104,1.578-2.367V54.631C95.363,53.369,94.731,52.265,93.785,52.265z"
          })
        ),
        !e.muted &&
          r.createElement(
            "g",
            { className: "SoundWaves" },
            r.createElement("path", {
              className: "SoundWavesHighest",
              d:
                "M193.826,30.402c24.959,24.958,40.349,59.403,40.349,97.604c0,38.199-15.388,72.645-40.349,97.603l9.916,9.916 c28.067-28.067,44.263-64.673,44.263-107.521c0-42.847-16.196-79.455-44.263-107.521"
            }),
            r.createElement("path", {
              className: "SoundWavesHigh",
              d:
                "M175.737,47.628l-8.924,8.924c18.271,18.27,29.536,43.484,29.536,71.448s-11.264,53.178-29.536,71.448l8.924,8.924 c20.546-20.546,33.234-49.008,33.234-80.374c0-31.366-12.688-59.829-33.234-80.374V47.628z"
            }),
            r.createElement("path", {
              className: "SoundWavesMed",
              d:
                "M148.913,74.454l-8.925,8.925c11.488,11.488,18.491,27.236,18.491,44.624c0,17.388-7.054,33.281-18.491,44.575l8.875,8.975 c13.811-13.635,22.239-32.753,22.239-53.55c0-20.797-8.432-39.793-22.189-53.55V74.454z"
            }),
            r.createElement("path", {
              className: "SoundWavesLow",
              d:
                "M121.989,101.229l-8.778,9.073c4.641,4.516,7.397,10.706,7.397,17.702c0,6.995-2.755,13.186-7.397,17.702l8.778,9.073 c7.035-6.844,11.243-16.413,11.243-26.775C133.232,117.643,129.024,108.075,121.989,101.229z"
            })
          ),
        r.createElement(
          "g",
          { className: "SoundX" },
          r.createElement("line", {
            fill: "none",
            strokeWidth: e.muted ? 10 : 0,
            stroke: "#fff",
            strokeMiterlimit: "10",
            x1: "137",
            y1: "170.667",
            x2: "223.167",
            y2: "84.5"
          }),
          r.createElement("line", {
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
    function _() {
      return r.createElement(
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
        r.createElement("path", {
          className: "playTriangle",
          d:
            "M65.321,33.521c-11.274-6.615-20.342-1.471-20.342,11.52V210.96c0,12.989,9.068,18.135,20.342,11.521l137.244-82.348 c11.274-6.618,11.274-17.646,0-24.509L65.321,33.521z"
        })
      );
    }
    function g() {
      return r.createElement(
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
        r.createElement("path", {
          d:
            "M44.979,219.364c0,3.3,2.7,6,6,6h49.753c3.3,0,6-2.7,6-6V36.5c0-3.3-2.7-6-6-6H50.979c-3.3,0-6,2.7-6,6V219.364z"
        }),
        r.createElement("path", {
          d:
            "M149.267,219.364c0,3.3,2.7,6,6,6h49.753c3.3,0,6-2.7,6-6V36.5c0-3.3-2.7-6-6-6h-49.753c-3.3,0-6,2.7-6,6V219.364z"
        })
      );
    }
    function v() {
      return r.createElement(
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
        r.createElement("polyline", {
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
    function b(e) {
      var t = e.highlightColor || "#00ccff",
        n = e.color || "#2d73ff";
      return r.createElement(
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
        r.createElement(
          "defs",
          null,
          r.createElement(
            "linearGradient",
            { id: "linear", x1: "0%", y1: "0%", x2: "100%", y2: "100%" },
            r.createElement("stop", {
              id: "stop0",
              offset: "0%",
              stopColor: t
            }),
            r.createElement("stop", {
              id: "stop1",
              offset: "100%",
              stopColor: n
            })
          ),
          r.createElement(
            "filter",
            { id: "f1", x: "0", y: "0", width: "200%", height: "200%" },
            r.createElement("feOffset", {
              result: "offOut",
              in: "SourceAlpha",
              dx: "20",
              dy: "20"
            }),
            r.createElement("feGaussianBlur", {
              result: "blurOut",
              in: "offOut",
              stdDeviation: "10"
            }),
            r.createElement("feBlend", {
              in: "SourceGraphic",
              in2: "blurOut",
              mode: "normal"
            })
          )
        ),
        r.createElement("path", {
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
        r.createElement("path", {
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
    function y() {
      return r.createElement(
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
        r.createElement("path", {
          className: "topLock",
          d:
            "M203.553,197.794c0,21.929-17.778,39.706-39.706,39.706H92.154c-21.929,0-39.706-17.777-39.706-39.706v-71.693 c0-21.928,17.778-39.706,39.706-39.706h71.692c21.928,0,39.706,17.778,39.706,39.706V197.794z M128.001,129.664 c-8.941,0-16.19,7.248-16.19,16.189c0,5.589,2.833,10.518,7.137,13.427c2.066,1.395,0.318,23.508,0.318,32.842 c0,2.292-0.078,3.65,8.734,3.65c8.676,0,8.75-1.221,8.75-3.654c0-9.348-1.708-31.469,0.368-32.886 c4.269-2.916,7.071-7.821,7.071-13.38C144.191,136.912,136.941,129.664,128.001,129.664z"
        }),
        r.createElement("path", {
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
    function E(e) {
      var t = "SVGIcon_Button SVGIcon_Throbber ";
      return (
        e.className && (t += e.className),
        r.createElement(
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
          r.createElement(
            "g",
            { className: o.a.partCircle },
            r.createElement("path", {
              className: o.a.roundOuter,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895"
            }),
            r.createElement("path", {
              className: o.a.roundOuter,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M201.432,101.166"
            }),
            r.createElement("path", {
              className: o.a.roundOuter,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754"
            })
          ),
          r.createElement(
            "g",
            { className: o.a.mainOutline },
            r.createElement("path", {
              className: o.a.roundFill,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: o.a.roundOuterOutline,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: o.a.roundThrobber01,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: o.a.roundThrobber02,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: o.a.roundThrobber03,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: o.a.roundThrobber04,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: o.a.roundThrobber05,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: o.a.roundThrobber06,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: o.a.roundThrobber07,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: o.a.roundThrobber08,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: o.a.roundThrobber09,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: o.a.roundThrobber10,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: o.a.roundThrobber11,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: o.a.roundThrobber12,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: o.a.roundThrobber13,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: o.a.roundThrobber14,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: o.a.roundThrobber15,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            })
          ),
          r.createElement(
            "g",
            { className: o.a.bottomCircle },
            r.createElement("path", {
              fill: "#ffffff",
              d:
                "M89.226,181.579L76.5,176.321c2.256,4.696,6.159,8.628,11.339,10.786 c11.197,4.668,24.11-0.647,28.779-11.854c2.259-5.425,2.274-11.405,0.033-16.841c-2.237-5.436-6.46-9.675-11.886-11.938 c-5.384-2.24-11.151-2.156-16.22-0.244l13.146,5.436c8.261,3.443,12.166,12.93,8.725,21.189 C106.976,181.115,97.486,185.022,89.226,181.579"
            })
          ),
          r.createElement(
            "g",
            { className: o.a.topCircle },
            r.createElement("circle", {
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
    function M(e) {
      return r.createElement(
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
        r.createElement("polyline", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
          points: "128,247.688 128,8.313 181.061,61.674 "
        }),
        r.createElement("polyline", {
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
    function w() {
      return r.createElement(
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
        r.createElement("rect", {
          x: "24",
          y: "42.167",
          fill: "none",
          stroke: "rgb(120, 138, 146)",
          strokeWidth: "18",
          strokeMiterlimit: "10",
          width: "208",
          height: "171.667"
        }),
        r.createElement("line", {
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
    function O() {
      return r.createElement(
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
        r.createElement("line", {
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
    function S() {
      return r.createElement(
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
        r.createElement("polyline", {
          fill: "none",
          stroke: "rgb(120, 138, 146)",
          strokeWidth: "12",
          strokeMiterlimit: "10",
          points: "83,90.861 83,42.167 232,42.167 232,165.14 173,165.14 "
        }),
        r.createElement("rect", {
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
    function k(e) {
      return r.createElement(
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
        r.createElement("polygon", {
          points: "13.913,141 128,59 242.087,141 ",
          fill: "#ffffff"
        })
      );
    }
    function C(e) {
      return r.createElement(
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
        r.createElement("path", {
          className: "Arrow",
          d:
            "M77.003,54.763h32.784c3.794,0,9.113,2.181,11.814,4.848l63.604,62.773c2.703,2.667,2.727,7.054,0.05,9.748 l-63.705,64.206c-2.674,2.693-7.968,4.898-11.763,4.898H77.003"
        }),
        r.createElement("polyline", {
          className: "preArrowBox",
          opacity: e.bHidePreArrow ? "0" : "1",
          points: "6.833,54.763 46.71,54.763 46.71,201.236 6.833,201.236 \t"
        }),
        r.createElement("polyline", {
          className: "jumpAheadBox",
          opacity: e.bShowJumpAheadBox ? "1" : "0",
          points: "6.833,54.764 86.386,54.764 86.386,201.236 6.833,201.236 \t"
        }),
        r.createElement("polyline", {
          className: "postArrowBox",
          opacity: e.bHidePostArrow ? "0" : "1",
          points:
            "209.29,54.763 249.167,54.763 249.167,201.236 209.29,201.236 \t"
        })
      );
    }
    function D(e) {
      var t = Object(s.a)(
        "SVGIcon_Button",
        "SVGIcon_SteamLogo",
        e && e.className
      );
      return r.createElement(
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
        r.createElement("path", {
          fill: "#ffffff",
          d:
            "M127.374,5.355c-64.404,0-117.167,49.661-122.18,112.77l65.712,27.171 c5.567-3.808,12.293-6.032,19.53-6.032c0.649,0,1.294,0.017,1.934,0.051l29.226-42.354c0-0.202-0.005-0.399-0.005-0.598 c0-25.496,20.74-46.241,46.237-46.241c25.498,0,46.238,20.745,46.238,46.241c0,25.494-20.74,46.242-46.238,46.242 c-0.352,0-0.698-0.011-1.047-0.021l-41.68,29.741c0.022,0.546,0.041,1.095,0.041,1.644c0,19.141-15.569,34.707-34.706,34.707 c-16.796,0-30.843-11.99-34.026-27.869l-46.993-19.43c14.55,51.464,61.831,89.189,117.957,89.189 c67.713,0,122.604-54.893,122.604-122.604C249.979,60.244,195.086,5.355,127.374,5.355"
        }),
        r.createElement("path", {
          fill: "#ffffff",
          d:
            "M82.026,191.387l-15.061-6.22c2.67,5.56,7.285,10.208,13.418,12.767 c13.25,5.521,28.531-0.771,34.054-14.027c2.674-6.416,2.694-13.5,0.04-19.93c-2.646-6.431-7.64-11.451-14.063-14.129 c-6.371-2.647-13.196-2.552-19.198-0.291l15.561,6.437c9.776,4.073,14.396,15.299,10.324,25.071 C103.031,190.841,91.801,195.464,82.026,191.387"
        }),
        r.createElement("path", {
          fill: "#ffffff",
          d:
            "M198.639,96.359c0-16.987-13.82-30.809-30.809-30.809c-16.987,0-30.813,13.821-30.813,30.809 c0,16.988,13.824,30.806,30.813,30.806S198.639,113.347,198.639,96.359 M144.736,96.306c0-12.783,10.363-23.142,23.145-23.142 c12.783,0,23.145,10.359,23.145,23.142c0,12.783-10.36,23.142-23.145,23.142C155.1,119.447,144.736,109.089,144.736,96.306"
        })
      );
    }
    function F() {
      return r.createElement(
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
        r.createElement("path", {
          className: "frontGuy",
          fill: "#666666",
          d:
            "M181.732,53.151c-17.255,0-31.321,13.316-31.321,32.634v25.132 c0,18.005,24.006,21.006,24.382,21.381c-10.691,2.813-30.947,8.252-40.888,15.566c-8.252,6.003-11.44,18.005-13.128,22.882 c-0.75,2.063-1.688,5.064-1.688,7.127c0,0,0,9.94,0,19.881s12.941,16.505,18.005,16.505h89.65c4.877,0,18.006-5.627,18.006-16.505 s0-19.881,0-19.881c0-2.251-0.938-5.627-1.688-7.689c-4.313-10.878-4.688-16.316-13.315-22.319 c-9.941-6.939-30.009-12.19-40.512-15.004c0.374-0.563,24.193-4.127,24.193-22.131V85.785 C213.053,66.467,198.986,53.151,181.732,53.151L181.732,53.151z"
        }),
        r.createElement("path", {
          className: "backGuy",
          fill: "rgb(144, 153, 161)",
          d:
            "M84.204,34.396c-20.068,0-36.385,15.38-36.385,38.074v29.258c0,20.818,27.945,24.382,28.32,24.944 c-12.378,3.189-36.01,9.565-47.638,18.006c-9.753,7.127-13.504,21.006-15.379,26.632c-0.75,2.251-1.876,6.002-1.876,8.253  c0,0,0,11.44,0,23.257c0,11.815,15.004,19.13,20.819,19.13h104.279c5.814,0,20.818-6.564,20.818-19.13c0-12.566,0-23.257,0-23.257 c0-2.438-1.125-6.564-2.063-8.815c-5.063-12.566-5.438-18.942-15.566-26.069c-11.628-8.065-34.885-14.067-47.076-17.443 c0.375-0.563,28.133-4.876,28.133-25.695V72.469C120.59,49.775,104.272,34.396,84.204,34.396L84.204,34.396z"
        })
      );
    }
    function I() {
      return r.createElement(
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
        r.createElement(
          "g",
          { className: "leftarrow", opacity: "0" },
          r.createElement("polygon", {
            points: "127.817,4.403 4,128 127.817,251.598"
          })
        ),
        r.createElement(
          "g",
          { className: "rightarrow", opacity: "0" },
          r.createElement("polygon", {
            points: "127.816,4.403 251.633,128 127.816,251.598"
          })
        ),
        r.createElement(
          "g",
          { className: "grabber" },
          r.createElement("polygon", {
            points:
              "145.692,22.132 145.692,234.361 127.817,251.598 110.307,234.361 110.307,22.132 127.817,4.403"
          })
        )
      );
    }
    function x() {
      return r.createElement(
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
        r.createElement("polygon", {
          className: "pointer",
          points:
            "128,154.979 46.374,230.548 46.374,253.333 209.626,253.333 209.626,230.548 \t"
        }),
        r.createElement("rect", {
          className: "line",
          x: "116.271",
          y: "3.168",
          width: "23.459",
          height: "137.332"
        })
      );
    }
    function L() {
      return r.createElement(
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
        r.createElement("path", {
          fill: "#ffffff",
          d:
            "M213.771,68.659c-4.108-7.066-46.007-7.231-49.293-7.231H128H91.522c-3.286,0-45.186,0.165-49.293,7.231 c-19.555,29.248-27.385,100.263-27.276,104.01c0.238,8.294,2.11,24.583,16.595,35.162c9.201,6.72,22.183,8.709,29.083,3.614 c4.989-3.682,11.995-19.224,19.061-32.204c7.064-12.981,9.202-11.174,12.98-12.159c3.78-0.986,36.066-0.74,36.066-0.74 s30.809-0.247,34.588,0.74c3.777,0.985,5.915-0.822,12.98,12.159c7.064,12.98,14.07,28.522,19.061,32.204 c6.9,5.095,19.882,3.106,29.083-3.614c14.485-10.58,16.356-26.868,16.595-35.162C241.154,168.922,233.325,97.906,213.771,68.659z M67.251,128.14c-14.974,0-27.112-12.137-27.112-27.111c0-14.975,12.137-27.112,27.112-27.112 c14.973,0,27.111,12.137,27.111,27.112C94.362,116.003,82.224,128.14,67.251,128.14z M188.749,128.14 c-14.974,0-27.111-12.137-27.111-27.111c0-14.975,12.138-27.112,27.111-27.112c14.973,0,27.111,12.137,27.111,27.112 C215.86,116.003,203.722,128.14,188.749,128.14z"
        })
      );
    }
    function j() {
      return r.createElement(
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
        r.createElement("path", {
          d:
            "M165.693,45.186H91.368c-7.963,0-14.41,6.447-14.41,14.41V210.9c0,7.964,6.447,14.41,14.41,14.41h74.134 c7.965,0,14.41-6.447,14.41-14.41V59.596C180.102,51.633,173.657,45.186,165.693,45.186z M113.172,57.509h30.717 c1.707,0,3.223,1.327,3.223,3.224c0,1.896-1.328,3.223-3.223,3.223h-30.717c-1.707,0-3.223-1.328-3.223-3.223 C109.949,58.837,111.465,57.509,113.172,57.509z M128.529,213.554c-4.551,0-8.152-3.603-8.152-8.153c0-4.55,3.604-8.152,8.152-8.152 s8.151,3.603,8.151,8.152C136.682,209.761,133.081,213.554,128.529,213.554z M169.105,186.819h-81.15V74.384h81.15V186.819 L169.105,186.819z"
        })
      );
    }
    function R() {
      return r.createElement(
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
        r.createElement("path", {
          d:
            "M224.389,62.411H31.613c-10.147,0-18.36,8.214-18.36,18.36v94.453c0,10.147,8.215,18.359,18.36,18.359h192.775 c10.146,0.241,18.358-7.968,18.358-18.116V80.771C242.747,70.625,234.534,62.411,224.389,62.411z M92.317,175.026H71.646 L35.472,79.832h21.895l25.022,72.484l24.343-72.484h21.895L92.317,175.026z M195.264,175.026l-19.175-32.095h-2.176h-14.279 v32.095h-19.991V79.832h35.63c13.056,0,22.664,2.607,28.831,7.819c6.164,5.215,9.247,12.49,9.247,21.827 c0,7.343-1.61,13.463-4.828,18.359c-3.219,4.896-7.729,8.614-13.531,11.151l22.575,36.038H195.264z"
        }),
        r.createElement("path", {
          d:
            "M187.784,100.298c-2.812-2.312-7.391-3.468-13.735-3.468h-14.415v28.966h15.639c5.257,0,9.36-1.336,12.308-4.012 c2.945-2.673,4.42-6.368,4.42-11.083C192,106.078,190.593,102.61,187.784,100.298z"
        })
      );
    }
    function T() {
      return r.createElement(
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
        r.createElement("rect", {
          className: "screen",
          x: "7.756",
          y: "5.518",
          fill: "#292D33",
          width: "112.144",
          height: "234.357"
        }),
        r.createElement("path", {
          className: "frame",
          fill: "#3C414B",
          d:
            "M40.334,15.72h47.237c3.957,0,7.164-3.259,7.164-7.28c0-1.113,0.889-2.017,1.984-2.017h9.746 c7.417,0,13.432,6.108,13.432,13.646v206.156c0,7.538-6.015,13.647-13.431,13.647H21.459c-7.417,0-13.429-6.109-13.429-13.647 V20.071c0-7.536,6.013-13.646,13.429-13.646h9.728c1.096,0,1.983,0.903,1.983,2.017C33.17,12.461,36.377,15.72,40.334,15.72 M107.057,0.001H20.87c-9.922,0-17.965,8.174-17.965,18.256v217.505c0,10.082,8.043,18.256,17.965,18.256h86.188 c9.923,0,17.966-8.174,17.966-18.256V18.257C125.022,8.175,116.979,0.001,107.057,0.001"
        }),
        r.createElement("path", {
          fill: "#3C414B",
          d:
            "M0.826,33.349C0.369,33.349,0,33.725,0,34.189v7.616c0,0.464,0.37,0.84,0.826,0.84s0.827-0.376,0.827-0.84 v-7.617C1.653,33.725,1.283,33.349,0.826,33.349"
        }),
        r.createElement("path", {
          fill: "#3C414B",
          d:
            "M0.826,51.56C0.369,51.56,0,51.936,0,52.4v16.8c0,0.465,0.37,0.841,0.826,0.841s0.827-0.376,0.827-0.841 V52.4C1.653,51.936,1.283,51.56,0.826,51.56"
        }),
        r.createElement("path", {
          fill: "#3C414B",
          d:
            "M0.826,75.304C0.369,75.304,0,75.68,0,76.144v15.904c0,0.464,0.37,0.84,0.826,0.84s0.827-0.376,0.827-0.84 V76.144C1.653,75.68,1.283,75.304,0.826,75.304"
        }),
        r.createElement("path", {
          fill: "#3C414B",
          d:
            "M127.617,58.056c-0.457,0-0.827,0.376-0.827,0.84v27.328c0,0.464,0.37,0.84,0.827,0.84 c0.456,0,0.826-0.376,0.826-0.84V58.896C128.443,58.432,128.073,58.056,127.617,58.056"
        })
      );
    }
    function B() {
      return r.createElement(
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
        r.createElement("polygon", {
          fill: "#3C414B",
          points: "3.167,48.809 127.22,128 252.833,48.809 "
        }),
        r.createElement("polygon", {
          fill: "#3C414B",
          points: "252.833,203.68 252.833,55.439 185.151,99.131 "
        }),
        r.createElement("polygon", {
          fill: "#3C414B",
          points:
            "247.958,207.191 180.47,101.472 128.001,134.24 75.142,101.472 7.849,207.191 "
        }),
        r.createElement("polygon", {
          fill: "#3C414B",
          points: "3.167,203.682 3.167,55.441 70.851,99.132 "
        })
      );
    }
    function N() {
      return r.createElement(
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
        r.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d:
            "M236.979,138.059c0.548,0.078,6.91,0.101,7.772,0.032 c1.215-0.095,1.396,0.068,1.388,0.708c-0.01,0.397,0.012,3.039-2.365,7.32c-3.301,5.948-12.079,10.436-12.55,10.672 c-0.47,0.233-0.53,0.484-0.136,0.75c0.434,0.295,8.068,1.454,9.084,1.611c1.017,0.154,0.637,1.001,0.637,1.001 s-0.704,2.621-2.895,5.36c-2.189,2.738-9.311,6.123-8.583,6.123c0.731,0,7.187,0.159,6.181,1.422 c-3.019,3.786-13.603,9.528-18.43,13.813c-13.388,11.885-13.217,12.864-15.52,15.09c-0.983-3.298-3.02-12.658-3.02-12.658 l-6.105-11.467c4.413,0.18,6.364,0.081,8.952,0.081c9.214,0,17.525-2.185,22.234-5.841l2.371-1.843l-2.911-0.728 c-2.131-0.528-7.121-1.782-11.896-2.979c2.184-0.104,10.803-1.299,14.413-5.339c0.136-0.151,0.276-0.321,0.406-0.494l1.245-1.664 l-2.404-0.735c-2.607-0.799-5.948-1.682-8.517-2.335c3.173-1.572,7.585-3.942,10.048-6.088c4.83-4.203,7.226-9.709,7.322-9.943 l0.9-2.098l-10.772,0.318c1.503-1.483,3.218-3.197,3.939-3.991c1.43-1.571,4.053-6.221,4.198-9.896l0.072-1.787l-1.763,0.288 c-1.979,0.322-5.301,1.279-8.179,2.173c2.025-2.193,4.296-4.767,5.46-6.484c2.687-3.964,2.76-8.371,2.597-12.916l-0.104-2.881 l-2.261,1.79c-2.559,2.028-7.595,5.031-11.097,7.047c1.538-3.644,3.54-8.752,3.813-11.276c0.5-4.681-0.248-10.196-0.248-10.196 l-10.76,9.394c0.885-1.953,1.684-4.013,2.117-5.832c1.735-7.29,0.055-17.892-0.021-18.338l-0.452-2.807l-7.777,7.739 c0.722-3.535,1.465-8.253,1.23-11.789c-0.426-6.321-2.278-10.517-2.359-10.694l-1.01-2.251l-6.465,8.577 c0.231-4.285,0.27-10.24-0.948-13.547c-1.934-5.262-3.651-8.007-3.723-8.121l-1.232-1.958l-3.057,4.85 c0.018-2.967-0.11-6.475-0.69-8.68c-1.202-4.543-2.825-6.396-3.002-6.592l-1.325-1.433l-1.623,2.705 c-0.278-3.19-1.112-7.084-3.343-9.478l-0.814-0.872l-1.012,0.623c-0.327,0.201-0.714,0.497-1.104,0.823 c-0.154-1.135-0.365-2.451-0.639-3.691c0.563-4.733,1.186-10.03,1.206-10.452c0.027-0.547,0.274-0.767,1.017-0.391 c0.898,0.452,3.156,2.064,5.187,6.133c2.036,4.067,3.132,11.324,3.117,12.044c-0.009,0.383,0.291,0.757,0.438,0.151 c0.145-0.607,0.478-7.591,0.623-8.312c0.081-0.383,0.199-0.484,0.737-0.212c0.496,0.249,2.959,2.181,4.899,6.463 c1.179,2.599,1.634,11.946,1.574,12.653c-0.106,1.278,0.313,0.891,0.339,0.883c-0.009,0.013-0.025,0.04-0.03,0.049 c0.03-0.041,0.036-0.049,0.03-0.049c0.573-0.841,4.21-8.99,4.519-9.377c0.313-0.39,0.521-0.395,0.835,0.002 c0.262,0.33,2.095,1.717,4.049,10.088c1.902,8.135,1.949,11.542,1.848,12.682c-0.08,0.86,0.339,0.993,0.731,0.524 c0.389-0.47,5.104-9.201,5.497-9.515c0.389-0.313,0.613-0.309,0.927,0.161c0.312,0.469,2.718,4.762,3.684,11.448 c0.861,5.947,0.608,13.599,0.375,14.381c-0.235,0.782-0.135,1.077,0.493,0.53c0.623-0.548,10.299-8.412,11.004-9.038 c0.703-0.627,1.18-0.65,1.34-0.046c0.172,0.654,0.822,8.654,0.275,15.225c-0.549,6.571-2.626,12.752-2.94,13.145 c-0.312,0.391,0.087,0.712,0.478,0.555c0.394-0.157,11.902-10.018,12.645-10.402c0.711-0.367,1.043,0.005,1.105,0.507 c0.068,0.544,0.966,3.098-0.419,11.269c-0.959,5.65-3.54,11.876-3.855,12.033c-0.313,0.157-0.077,0.336,0.234,0.259 c0.315-0.079,8.324-3.488,8.872-3.567c0.546-0.079,0.671,0.339,0.514,0.808c-0.158,0.469-0.458,6.273-2.534,11.639 c-2.603,6.732-6.056,11.001-6.056,11.001s-0.252,0.519,0.217,0.519s9.266-0.186,9.813-0.263c0.547-0.079,0.627,0.156,0.547,0.704 c-0.077,0.547,0.858,9.116-8.624,14.601C236.524,137.734,236.432,137.979,236.979,138.059z M174.473,24.823 c1.981,3.34,2.018,9.248,1.836,11.469l-0.52,6.238l5.25-8.744c0.395,0.843,0.85,2.003,1.25,3.524 c1.02,3.877,0.422,13.082,0.417,13.173l-0.384,5.752l6.435-10.212c0.628,1.27,1.45,3.097,2.32,5.459 c1.466,3.983,0.772,13.806,0.381,17.257l-0.602,5.308l9.568-12.69c0.493,1.707,1.058,4.21,1.259,7.227 c0.39,5.821-2.272,15.731-2.299,15.83l-1.428,5.26l11.125-11.068c0.377,3.586,0.772,9.774-0.304,14.302 c-1.2,5.057-5.778,12.588-5.823,12.664l-1.806,3.992l16.878-14.09c-0.116,1.366-0.262,2.944-0.423,4.435 c-0.312,2.935-3.954,11.389-5.335,14.399l-1.827,4.002l3.856-2.115c0.381-0.208,8.027-4.41,12.979-7.778 c-0.039,3.484-0.537,6.042-2.139,8.4c-2.189,3.234-9.05,10.198-9.118,10.268l-4.352,4.408l5.861-2.004 c0.08-0.025,6.868-2.34,11.188-3.41c-0.675,2.445-2.208,5.125-3.11,6.118c-1.319,1.449-6.429,6.429-6.48,6.482l-2.682,2.614 l13.475-0.404c-1.06,1.837-2.89,4.549-5.457,6.783c-3.727,3.244-12.956,7.341-13.048,7.383l-3.952,1.746l4.201,1.008 c0.062,0.015,5.637,1.354,10.266,2.67c-3.412,2.191-9.291,3.081-10.948,3.138c-2.06,0.072-11.075,0.125-11.075,0.125l-11.51,0.069 l11.162,2.804c0,0,12.587,3.164,19.486,4.894c-4.398,2.216-10.717,3.493-17.657,3.493c-3.102,0-10.335-0.284-15.048-0.483 c4.064,6.069,7.041,11.004,7.992,13.681c2.813,7.915,6.777,28.269,6.889,48.907c0.039,6.572-1.081,11.649-9.022,11.649 c-0.288,0-0.597-0.038-0.908-0.092c-1.846,0.339-4.351,0.595-5.438-0.095c-1.805-1.149-3.163-2.627-3.544-3.957 c-0.383-1.334-1.146-9.374-3.106-20.675c-1.92-11.046-4.038-19.431-4.237-19.525c-1.535-0.731-9.358-18.45-9.358-18.45 l-37.23-47.615c0,0-20.737,23.917-37.455,47.8c-0.867,1.235-5.994,11.251-9.275,17.989c-0.212,0.437-0.181,0.475-0.281,0.808 c-0.604,2.015-2.396,9.525-4.039,18.994c-1.962,11.301-2.725,19.341-3.105,20.675c-0.384,1.33-1.74,2.808-3.546,3.957 c-1.085,0.689-3.592,0.434-5.437,0.095c-0.313,0.054-0.621,0.092-0.909,0.092c-7.941,0-9.061-5.077-9.024-11.649 c0.114-20.639,4.078-40.992,6.892-48.907c0.95-2.677,3.926-7.611,7.993-13.681c-4.714,0.199-11.946,0.483-15.051,0.483 c-6.939,0-13.26-1.277-17.653-3.493c6.896-1.729,19.486-4.894,19.486-4.894l11.159-2.804l-11.508-0.069 c0,0-9.019-0.053-11.076-0.125c-1.66-0.057-7.537-0.946-10.949-3.138c4.629-1.315,10.202-2.655,10.264-2.67l4.201-1.008l-3.95-1.746 c-0.094-0.042-9.324-4.139-13.049-7.383c-2.566-2.234-4.397-4.946-5.458-6.783l13.477,0.404l-2.684-2.614 c-0.05-0.054-5.16-5.033-6.48-6.482c-0.9-0.993-2.436-3.673-3.108-6.118c4.319,1.069,11.108,3.384,11.188,3.41l5.861,2.004 l-4.352-4.408c-0.069-0.069-6.928-7.033-9.12-10.268c-1.601-2.358-2.099-4.916-2.139-8.4c4.953,3.368,12.601,7.57,12.98,7.778 l3.858,2.115l-1.829-4.002c-1.379-3.011-5.022-11.465-5.334-14.399c-0.161-1.491-0.305-3.068-0.421-4.435l16.877,14.09l-1.806-3.992 c-0.046-0.076-4.622-7.607-5.821-12.664c-1.078-4.528-0.682-10.716-0.307-14.302L58.57,89.672l-1.426-5.26 c-0.025-0.098-2.688-10.008-2.3-15.83c0.203-3.017,0.767-5.52,1.26-7.227l9.566,12.69l-0.601-5.308 c-0.391-3.451-1.083-13.274,0.381-17.257c0.871-2.362,1.693-4.189,2.32-5.459l6.435,10.212l-0.382-5.752 c-0.006-0.091-0.604-9.295,0.416-13.173c0.401-1.521,0.854-2.681,1.251-3.524l5.249,8.744l-0.52-6.238 c-0.181-2.221-0.144-8.129,1.836-11.469c0.596,0.522,1.248,1.148,1.67,1.575l2.215,2.245l0.276-3.142 c0.162-1.838,0.783-7.003,1.703-8.813c1.342-2.635,4.69-3.91,7.104-4.505c-6.691,13.614-36.889,77.59-36.889,122.937 c0,23.658,16.206,23.931,16.368,23.931c4.881,0,6.947-7.914,6.947-11.063V133.45c0-2.744,1.148-2.744,1.835-2.744 c5.807,0,10.48,3.196,13.855,6.69c8.813-11.615,15.81-20.526,15.81-20.526s0.16-0.182,0.248-0.345 c-1.03-2.443-7.165-16.995-7.165-16.995l1.708-43.717c0,0-0.278-3.797,1.044-6.052c1.314-2.245,4.247-3.175,4.247-3.175 l13.307,41.443c0,0-4.107,0.866-4.107,5.585c0,2.982,2.658,4.99,6.227,5.013c3.572-0.022,6.227-2.031,6.227-5.013 c0-4.719-4.109-5.585-4.109-5.585l13.311-41.443c0,0,2.93,0.93,4.245,3.175c1.322,2.255,1.043,6.052,1.043,6.052l1.709,43.717 l-7.309,17.34c0,0,6.997,8.911,15.809,20.526c3.375-3.494,8.048-6.69,13.855-6.69c0.687,0,1.833,0,1.833,2.744v14.538 c0,3.148,2.068,11.063,6.95,11.063c0.159,0,16.367-0.272,16.367-23.931c0-45.347-30.197-109.322-36.888-122.937 c2.412,0.595,5.761,1.87,7.104,4.505c0.92,1.809,1.541,6.975,1.705,8.813l0.275,3.142l2.213-2.245 C173.226,25.972,173.875,25.345,174.473,24.823z M176.157,181.396c-1.644-2.189-41.07-55.856-41.07-55.856l-6.723,8.809 l-0.946-1.233l-0.829-1.082l-5.053-6.594l-0.095,0.101c0,0-39.427,53.667-41.07,55.856c-1.643,2.191-4.777,6.708-6.058,9.322 c-1.279,2.614-8.946,39.306-8.946,42.592c0,2.005,0.041,8.618,0.071,13.47c1.536,0.2,3.411,0.761,4.357,0.125 c1.624-1.093,2.363-2.323,2.491-3.372c0.128-1.048,1.367-12.969,2.69-20.812c1.779-10.547,4.571-19.005,4.415-18.97 c3.213-6.672,8.966-17.938,9.887-19.252c17.808-25.439,38.994-49.947,38.994-49.947s21.166,24.502,38.978,49.947 c0.921,1.313,6.672,12.58,9.888,19.252c-0.158-0.035,2.635,8.423,4.414,18.97c1.322,7.843,2.562,19.764,2.688,20.812 c0.131,1.049,0.87,2.279,2.493,3.372c0.944,0.636,2.818,0.075,4.355-0.125c0.032-4.852,0.073-11.465,0.073-13.47 c0-3.286-7.667-39.978-8.948-42.592C180.936,188.104,177.801,183.588,176.157,181.396z M82.538,21.517l-1.014-0.623l-0.813,0.872 c-2.231,2.394-3.063,6.287-3.342,9.478l-1.624-2.705l-1.323,1.433c-0.179,0.197-1.801,2.049-3.004,6.592 c-0.581,2.205-0.709,5.712-0.689,8.68l-3.057-4.85l-1.234,1.958c-0.072,0.114-1.787,2.859-3.722,8.121 c-1.22,3.307-1.179,9.262-0.949,13.547l-6.463-8.577l-1.012,2.251c-0.08,0.177-1.934,4.373-2.359,10.694 c-0.234,3.536,0.51,8.253,1.231,11.789l-7.778-7.739l-0.453,2.807c-0.073,0.446-1.754,11.048-0.02,18.338 c0.433,1.819,1.231,3.879,2.117,5.832l-10.759-9.394c0,0-0.749,5.515-0.248,10.196c0.271,2.523,2.272,7.632,3.813,11.276 c-3.503-2.016-8.539-5.019-11.099-7.047l-2.259-1.79l-0.106,2.881c-0.162,4.545-0.087,8.952,2.6,12.916 c1.161,1.717,3.433,4.291,5.459,6.484c-2.877-0.894-6.201-1.851-8.179-2.173l-1.763-0.288l0.071,1.787 c0.148,3.675,2.771,8.324,4.198,9.896c0.723,0.794,2.436,2.508,3.941,3.991L21.93,137.83l0.896,2.098 c0.1,0.234,2.493,5.74,7.324,9.943c2.464,2.146,6.876,4.516,10.047,6.088c-2.57,0.653-5.908,1.536-8.518,2.335l-2.402,0.735 l1.246,1.664c0.13,0.173,0.27,0.343,0.407,0.494c3.608,4.04,12.229,5.234,14.412,5.339c-4.774,1.197-9.767,2.451-11.896,2.979 l-2.911,0.728l2.371,1.843c4.708,3.656,13.02,5.841,22.233,5.841c2.588,0,4.539,0.099,8.954-0.081l-6.105,11.467 c0,0-2.038,9.36-3.02,12.658c-2.304-2.226-2.133-3.205-15.52-15.09c-4.829-4.284-15.411-10.026-18.429-13.813 c-1.005-1.263,5.449-1.422,6.179-1.422c0.73,0-6.393-3.385-8.582-6.123c-2.191-2.739-2.895-5.36-2.895-5.36s-0.38-0.847,0.637-1.001 c1.018-0.157,8.65-1.316,9.084-1.611c0.395-0.266,0.332-0.517-0.137-0.75c-0.469-0.236-9.248-4.724-12.548-10.672 c-2.375-4.281-2.357-6.923-2.364-7.32c-0.01-0.64,0.17-0.803,1.385-0.708c0.862,0.068,7.226,0.046,7.774-0.032 c0.546-0.08,0.453-0.324,0.019-0.576c-9.483-5.484-8.546-14.054-8.624-14.601c-0.079-0.548,0-0.783,0.548-0.704 c0.546,0.077,9.342,0.263,9.812,0.263c0.469,0,0.218-0.519,0.218-0.519s-3.452-4.27-6.056-11.001 c-2.077-5.366-2.377-11.169-2.533-11.639c-0.157-0.469-0.034-0.887,0.514-0.808c0.549,0.079,8.558,3.488,8.87,3.567 c0.313,0.077,0.548-0.103,0.235-0.259c-0.314-0.157-2.896-6.383-3.855-12.033c-1.384-8.17-0.488-10.725-0.42-11.269 c0.063-0.502,0.397-0.874,1.105-0.507c0.743,0.385,12.255,10.245,12.646,10.402c0.391,0.157,0.79-0.164,0.477-0.555 c-0.313-0.392-2.392-6.574-2.938-13.145c-0.548-6.571,0.1-14.571,0.274-15.225c0.161-0.604,0.635-0.581,1.339,0.046 c0.704,0.626,10.381,8.489,11.006,9.038c0.625,0.547,0.727,0.252,0.492-0.53c-0.235-0.782-0.484-8.435,0.375-14.381 c0.965-6.686,3.372-10.979,3.685-11.448s0.536-0.474,0.927-0.161c0.391,0.313,5.106,9.045,5.497,9.515 c0.391,0.469,0.809,0.336,0.732-0.524c-0.104-1.14-0.057-4.547,1.845-12.682c1.956-8.371,3.789-9.758,4.052-10.088 c0.313-0.396,0.521-0.392,0.833-0.002c0.309,0.387,3.945,8.536,4.519,9.377c-0.005,0,0,0.008,0.031,0.049 c-0.007-0.009-0.022-0.036-0.031-0.049c0.025,0.008,0.446,0.395,0.34-0.883c-0.058-0.707,0.396-10.055,1.574-12.653 c1.941-4.282,4.404-6.214,4.899-6.463c0.54-0.272,0.658-0.171,0.737,0.212c0.146,0.721,0.478,7.705,0.625,8.312 c0.146,0.606,0.444,0.232,0.437-0.151c-0.015-0.72,1.081-7.977,3.115-12.044c2.033-4.069,4.292-5.681,5.188-6.133 c0.742-0.376,0.989-0.156,1.018,0.391c0.022,0.422,0.645,5.719,1.206,10.452c-0.272,1.24-0.484,2.556-0.639,3.691 C83.251,22.014,82.866,21.718,82.538,21.517z M127.35,141.814c-1.158,12.032-4.978,23.045-6.326,29.486 c-1.643,7.849-4.788,18.061-6.793,20.931c-4.433,6.343-18.036,18.547-20.403,19.732c-1.094,0.547-6.376-4.115-6.56-4.846 c-0.182-0.728,2.883-3.993,2.154-3.627c-0.731,0.364-4.104,0.906-5.06,0.87c-0.753-0.026,0.633-2.728,0.633-2.728 s-1.484,2.217-3.021,2.947c-0.03,0.015,9.433-18.119,9.433-18.119S127.52,140.043,127.35,141.814z M119.7,169.39l3.104-10.647 l-1.869-0.559l-3.152,10.656L119.7,169.39z M114.072,167.242l4.687-10.051l-1.764-0.838l-4.735,10.055L114.072,167.242z  M126.961,159.319l-0.82,11.06l-1.991-0.139l0.867-11.079L126.961,159.319z M131.727,170.391l-1.986,0.167l-0.828-11.078 l1.944-0.144L131.727,170.391z M164.422,186.462c0,0,9.463,18.134,9.434,18.119c-1.54-0.73-3.021-2.947-3.021-2.947 s1.384,2.701,0.633,2.728c-0.957,0.036-4.33-0.506-5.06-0.87c-0.731-0.366,2.334,2.899,2.153,3.627 c-0.185,0.73-5.467,5.393-6.56,4.846c-2.368-1.186-15.973-13.39-20.404-19.732c-2.007-2.87-5.149-13.082-6.792-20.931 c-1.349-6.441-4.621-17.127-5.778-29.16C128.854,140.373,164.422,186.462,164.422,186.462z M142.029,167.242l1.813-0.834 l-4.735-10.055l-1.762,0.838L142.029,167.242z M136.402,169.39l1.917-0.55l-3.152-10.656l-1.868,0.559L136.402,169.39z"
        })
      );
    }
    function A() {
      return r.createElement(
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
        r.createElement("path", {
          className: "CCBox",
          fill: "none",
          stroke: "#000000",
          strokeWidth: "10",
          strokeMiterlimit: "10",
          d:
            "M238,210c0,6.627-5.373,12-12,12H30 c-6.627,0-12-5.373-12-12V46c0-6.627,5.373-12,12-12h196c6.627,0,12,5.373,12,12V210z"
        }),
        r.createElement("path", {
          className: "C1",
          d:
            "M90.505,173.207c11.431,0,22.338-4.276,30.72-12.036c2.6-2.407,2.753-6.47,0.347-9.068c-2.41-2.604-6.47-2.757-9.072-0.349 c-5.998,5.559-13.811,8.62-21.995,8.62c-17.852,0-32.373-14.524-32.373-32.372c0-17.849,14.521-32.373,32.373-32.373 c8.177,0,15.981,3.055,21.979,8.603c2.603,2.407,6.662,2.25,9.072-0.353c2.407-2.602,2.249-6.662-0.353-9.068 c-8.375-7.751-19.276-12.019-30.694-12.019c-24.931,0-45.209,20.281-45.209,45.209C45.3,152.93,65.574,173.207,90.505,173.207z"
        }),
        r.createElement("path", {
          className: "C1",
          d:
            "M177.926,173.207c11.431,0,22.338-4.276,30.721-12.036c2.6-2.407,2.754-6.47,0.347-9.068 c-2.41-2.604-6.47-2.757-9.072-0.349c-5.998,5.559-13.812,8.62-21.995,8.62c-17.852,0-32.372-14.524-32.372-32.372 c0-17.849,14.521-32.373,32.372-32.373c8.178,0,15.981,3.055,21.979,8.603c2.604,2.407,6.663,2.25,9.072-0.353 c2.407-2.602,2.25-6.662-0.353-9.068c-8.375-7.751-19.277-12.019-30.694-12.019c-24.932,0-45.209,20.281-45.209,45.209 C132.721,152.93,152.996,173.207,177.926,173.207z"
        })
      );
    }
  },
  AvbV: function(e, t, r) {
    var i = {
      "./main_brazilian.json": ["TFAN", 7],
      "./main_bulgarian.json": ["c2SO", 8],
      "./main_czech.json": ["peP3", 9],
      "./main_danish.json": ["0bnV", 10],
      "./main_dutch.json": ["wcLc", 11],
      "./main_english.json": ["/rNK", 3],
      "./main_finnish.json": ["iywU", 12],
      "./main_french.json": ["Xnpc", 13],
      "./main_german.json": ["pmKi", 14],
      "./main_greek.json": ["mTRv", 15],
      "./main_hungarian.json": ["WkHb", 16],
      "./main_italian.json": ["Jz5U", 17],
      "./main_japanese.json": ["3Dk9", 18],
      "./main_koreana.json": ["neQD", 19],
      "./main_latam.json": ["6oHD", 20],
      "./main_norwegian.json": ["2OvS", 21],
      "./main_polish.json": ["3pwE", 22],
      "./main_portuguese.json": ["hY40", 23],
      "./main_romanian.json": ["Q95+", 24],
      "./main_russian.json": ["bsPT", 25],
      "./main_schinese.json": ["B/Zz", 26],
      "./main_spanish.json": ["U6iL", 27],
      "./main_swedish.json": ["4uPU", 28],
      "./main_tchinese.json": ["rgC9", 29],
      "./main_thai.json": ["87dp", 30],
      "./main_turkish.json": ["yMpO", 31],
      "./main_ukrainian.json": ["zTWm", 32],
      "./main_vietnamese.json": ["wqiy", 33]
    };
    function n(t) {
      var n = i[t];
      return n
        ? r.e(n[1]).then(function() {
            var e = n[0];
            return r.t(e, 3);
          })
        : Promise.resolve().then(function() {
            var e = new Error("Cannot find module '" + t + "'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          });
    }
    (n.keys = function() {
      return Object.keys(i);
    }),
      (n.id = "AvbV"),
      (e.exports = n);
  },
  CdLH: function(e, t, n) {
    "use strict";
    n.d(t, "e", function() {
      return r;
    }),
      n.d(t, "b", function() {
        return i;
      }),
      n.d(t, "c", function() {
        return o;
      }),
      n.d(t, "d", function() {
        return s;
      }),
      n.d(t, "f", function() {
        return a;
      }),
      n.d(t, "a", function() {
        return c;
      });
    var r = {
      PerYear: 31536e3,
      PerMonth: 2628e3,
      PerWeek: 604800,
      PerDay: 86400,
      PerHour: 3600,
      PerMinute: 60
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
    function s(e) {
      return new Date(e.getFullYear(), e.getMonth(), 1, 0, 0, 0, 0);
    }
    function a(t) {
      return new Promise(function(e) {
        return setTimeout(e, t);
      });
    }
    function c() {
      return Math.floor(Date.now() / 1e3);
    }
  },
  D4wO: function(e, t, n) {
    "use strict";
    function r(s) {
      return function(e, i, t) {
        var o = t.value;
        t.value = function() {
          for (var e = this, t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
          var r = this[i + "_DebounceProperties"];
          void 0 === r &&
            (r = this[i + "_DebounceProperties"] = {
              hTimer: void 0,
              nPending: 0
            }),
            void 0 === r.hTimer
              ? (o.apply(this, t),
                (r.hTimer = window.setInterval(function() {
                  0 < r.nPending
                    ? (o.apply(e, t), (r.nPending = 0))
                    : (window.clearInterval(r.hTimer), (r.hTimer = void 0));
                }, s)))
              : (r.nPending += 1);
        };
      };
    }
    n.d(t, "a", function() {
      return r;
    });
  },
  "IjL/": function(e, t, n) {
    "use strict";
    var i = n("mrSG"),
      s = n("q1tI"),
      r = n("bxiW"),
      a = n("bxBv"),
      o = n("hRO2");
    var c,
      l,
      u = (function(n) {
        function r(e) {
          void 0 === e && (e = null);
          var t = n.call(this) || this;
          return o.Message.initialize(t, e, 0, -1, void 0, null), t;
        }
        return (
          Object(i.d)(r, n),
          (r.prototype.raw_version = function() {
            return o.Message.getField(this, 1);
          }),
          (r.prototype.set_raw_version = function(e) {
            o.Message.setField(this, 1, e);
          }),
          (r.prototype.requested_interface_type = function() {
            return o.Message.getField(this, 2);
          }),
          (r.prototype.set_requested_interface_type = function(e) {
            o.Message.setField(this, 2, e);
          }),
          (r.prototype.toObject = function(e) {
            return void 0 === e && (e = !1), r.toObject(e, this);
          }),
          (r.toObject = function(e, t) {
            var n = {
              raw_version: o.Message.getField(t, 1),
              requested_interface_type: o.Message.getField(t, 2)
            };
            return e && (n.$jspbMessageInstance = t), n;
          }),
          (r.fromObject = function(e) {
            var t = new r();
            return (
              t.set_raw_version(e.raw_version),
              t.set_requested_interface_type(e.requested_interface_type),
              t
            );
          }),
          (r.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e),
              n = new r();
            return r.deserializeBinaryFromReader(n, t);
          }),
          (r.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  e.set_raw_version(t.readString());
                  break;
                case 2:
                  e.set_requested_interface_type(t.readString());
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
          (r.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter();
            return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }),
          (r.serializeBinaryToWriter = function(e, t) {
            var n;
            void 0 !== (n = o.Message.getField(e, 1)) && t.writeString(1, n),
              void 0 !== (n = o.Message.getField(e, 2)) && t.writeString(2, n);
          }),
          (r.prototype.getClassName = function() {
            return "CClientMetrics_AppInterfaceCreation";
          }),
          r
        );
      })(o.Message),
      p = (function(n) {
        function r(e) {
          void 0 === e && (e = null);
          var t = n.call(this) || this;
          return o.Message.initialize(t, e, 0, -1, void 0, null), t;
        }
        return (
          Object(i.d)(r, n),
          (r.prototype.interface_name = function() {
            return o.Message.getField(this, 1);
          }),
          (r.prototype.set_interface_name = function(e) {
            o.Message.setField(this, 1, e);
          }),
          (r.prototype.method_name = function() {
            return o.Message.getField(this, 2);
          }),
          (r.prototype.set_method_name = function(e) {
            o.Message.setField(this, 2, e);
          }),
          (r.prototype.call_count = function() {
            return o.Message.getField(this, 3);
          }),
          (r.prototype.set_call_count = function(e) {
            o.Message.setField(this, 3, e);
          }),
          (r.prototype.toObject = function(e) {
            return void 0 === e && (e = !1), r.toObject(e, this);
          }),
          (r.toObject = function(e, t) {
            var n = {
              interface_name: o.Message.getField(t, 1),
              method_name: o.Message.getField(t, 2),
              call_count: o.Message.getField(t, 3)
            };
            return e && (n.$jspbMessageInstance = t), n;
          }),
          (r.fromObject = function(e) {
            var t = new r();
            return (
              t.set_interface_name(e.interface_name),
              t.set_method_name(e.method_name),
              t.set_call_count(e.call_count),
              t
            );
          }),
          (r.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e),
              n = new r();
            return r.deserializeBinaryFromReader(n, t);
          }),
          (r.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  e.set_interface_name(t.readString());
                  break;
                case 2:
                  e.set_method_name(t.readString());
                  break;
                case 3:
                  e.set_call_count(t.readUint32());
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
          (r.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter();
            return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }),
          (r.serializeBinaryToWriter = function(e, t) {
            var n;
            void 0 !== (n = o.Message.getField(e, 1)) && t.writeString(1, n),
              void 0 !== (n = o.Message.getField(e, 2)) && t.writeString(2, n),
              void 0 !== (n = o.Message.getField(e, 3)) && t.writeUint32(3, n);
          }),
          (r.prototype.getClassName = function() {
            return "CClientMetrics_AppInterfaceMethodCounts";
          }),
          r
        );
      })(o.Message),
      d = (o.Message,
      (function(n) {
        function r(e) {
          void 0 === e && (e = null);
          var t = n.call(this) || this;
          return o.Message.initialize(t, e, 0, -1, void 0, null), t;
        }
        return (
          Object(i.d)(r, n),
          (r.prototype.protocol_tested = function() {
            return o.Message.getField(this, 1);
          }),
          (r.prototype.set_protocol_tested = function(e) {
            o.Message.setField(this, 1, e);
          }),
          (r.prototype.connectivity_state = function() {
            return o.Message.getField(this, 2);
          }),
          (r.prototype.set_connectivity_state = function(e) {
            o.Message.setField(this, 2, e);
          }),
          (r.prototype.toObject = function(e) {
            return void 0 === e && (e = !1), r.toObject(e, this);
          }),
          (r.toObject = function(e, t) {
            var n = {
              protocol_tested: o.Message.getField(t, 1),
              connectivity_state: o.Message.getField(t, 2)
            };
            return e && (n.$jspbMessageInstance = t), n;
          }),
          (r.fromObject = function(e) {
            var t = new r();
            return (
              t.set_protocol_tested(e.protocol_tested),
              t.set_connectivity_state(e.connectivity_state),
              t
            );
          }),
          (r.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e),
              n = new r();
            return r.deserializeBinaryFromReader(n, t);
          }),
          (r.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  e.set_protocol_tested(t.readUint32());
                  break;
                case 2:
                  e.set_connectivity_state(t.readUint32());
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
          (r.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter();
            return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }),
          (r.serializeBinaryToWriter = function(e, t) {
            var n;
            void 0 !== (n = o.Message.getField(e, 1)) && t.writeUint32(1, n),
              void 0 !== (n = o.Message.getField(e, 2)) && t.writeUint32(2, n);
          }),
          (r.prototype.getClassName = function() {
            return "CClientMetrics_IPv6Connectivity_Result";
          }),
          r
        );
      })(o.Message)),
      h = (o.Message,
      (function(n) {
        function r(e) {
          void 0 === e && (e = null);
          var t = n.call(this) || this;
          return o.Message.initialize(t, e, 0, -1, [3], null), t;
        }
        return (
          Object(i.d)(r, n),
          (r.prototype.product = function() {
            return o.Message.getField(this, 1);
          }),
          (r.prototype.set_product = function(e) {
            o.Message.setField(this, 1, e);
          }),
          (r.prototype.version = function() {
            return o.Message.getField(this, 2);
          }),
          (r.prototype.set_version = function(e) {
            o.Message.setField(this, 2, e);
          }),
          (r.prototype.errors = function() {
            return o.Message.getRepeatedWrapperField(this, m, 3);
          }),
          (r.prototype.set_errors = function(e) {
            o.Message.setRepeatedWrapperField(this, 3, e);
          }),
          (r.prototype.add_errors = function(e, t) {
            return o.Message.addToRepeatedWrapperField(this, 3, e, m, t);
          }),
          (r.prototype.toObject = function(e) {
            return void 0 === e && (e = !1), r.toObject(e, this);
          }),
          (r.toObject = function(e, t) {
            var n = {
              product: o.Message.getField(t, 1),
              version: o.Message.getField(t, 2),
              errors: o.Message.toObjectList(t.errors(), m.toObject, e)
            };
            return e && (n.$jspbMessageInstance = t), n;
          }),
          (r.fromObject = function(e) {
            var t = new r();
            return (
              t.set_product(e.product),
              t.set_version(e.version),
              t.set_errors(
                (Array.isArray(e.errors) ? e.errors : []).map(function(e) {
                  return m.fromObject(e);
                })
              ),
              t
            );
          }),
          (r.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e),
              n = new r();
            return r.deserializeBinaryFromReader(n, t);
          }),
          (r.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  e.set_product(t.readString());
                  break;
                case 2:
                  e.set_version(t.readString());
                  break;
                case 3:
                  var n = new m();
                  t.readMessage(n, m.deserializeBinaryFromReader),
                    e.add_errors(n);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
          (r.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter();
            return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }),
          (r.serializeBinaryToWriter = function(e, t) {
            var n;
            void 0 !== (n = o.Message.getField(e, 1)) && t.writeString(1, n),
              void 0 !== (n = o.Message.getField(e, 2)) && t.writeString(2, n),
              0 < (n = e.errors()).length &&
                t.writeRepeatedMessage(3, n, m.serializeBinaryToWriter);
          }),
          (r.prototype.getClassName = function() {
            return "CClientMetrics_ReportClientError_Notification";
          }),
          r
        );
      })(o.Message)),
      m = (function(n) {
        function r(e) {
          void 0 === e && (e = null);
          var t = n.call(this) || this;
          return o.Message.initialize(t, e, 0, -1, void 0, null), t;
        }
        return (
          Object(i.d)(r, n),
          (r.prototype.identifier = function() {
            return o.Message.getField(this, 1);
          }),
          (r.prototype.set_identifier = function(e) {
            o.Message.setField(this, 1, e);
          }),
          (r.prototype.message = function() {
            return o.Message.getField(this, 2);
          }),
          (r.prototype.set_message = function(e) {
            o.Message.setField(this, 2, e);
          }),
          (r.prototype.count = function() {
            return o.Message.getField(this, 3);
          }),
          (r.prototype.set_count = function(e) {
            o.Message.setField(this, 3, e);
          }),
          (r.prototype.toObject = function(e) {
            return void 0 === e && (e = !1), r.toObject(e, this);
          }),
          (r.toObject = function(e, t) {
            var n = {
              identifier: o.Message.getField(t, 1),
              message: o.Message.getField(t, 2),
              count: o.Message.getField(t, 3)
            };
            return e && (n.$jspbMessageInstance = t), n;
          }),
          (r.fromObject = function(e) {
            var t = new r();
            return (
              t.set_identifier(e.identifier),
              t.set_message(e.message),
              t.set_count(e.count),
              t
            );
          }),
          (r.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e),
              n = new r();
            return r.deserializeBinaryFromReader(n, t);
          }),
          (r.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  e.set_identifier(t.readString());
                  break;
                case 2:
                  e.set_message(t.readString());
                  break;
                case 3:
                  e.set_count(t.readUint32());
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
          (r.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter();
            return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }),
          (r.serializeBinaryToWriter = function(e, t) {
            var n;
            void 0 !== (n = o.Message.getField(e, 1)) && t.writeString(1, n),
              void 0 !== (n = o.Message.getField(e, 2)) && t.writeString(2, n),
              void 0 !== (n = o.Message.getField(e, 3)) && t.writeUint32(3, n);
          }),
          (r.prototype.getClassName = function() {
            return "CClientMetrics_ReportClientError_Notification_Error";
          }),
          r
        );
      })(o.Message),
      f = (function(n) {
        function r(e) {
          void 0 === e && (e = null);
          var t = n.call(this) || this;
          return o.Message.initialize(t, e, 0, -1, void 0, null), t;
        }
        return (
          Object(i.d)(r, n),
          (r.prototype.type = function() {
            return o.Message.getField(this, 1);
          }),
          (r.prototype.set_type = function(e) {
            o.Message.setField(this, 1, e);
          }),
          (r.prototype.num_ops = function() {
            return o.Message.getField(this, 2);
          }),
          (r.prototype.set_num_ops = function(e) {
            o.Message.setField(this, 2, e);
          }),
          (r.prototype.num_bytes = function() {
            return o.Message.getField(this, 3);
          }),
          (r.prototype.set_num_bytes = function(e) {
            o.Message.setField(this, 3, e);
          }),
          (r.prototype.busy_time_ms = function() {
            return o.Message.getField(this, 4);
          }),
          (r.prototype.set_busy_time_ms = function(e) {
            o.Message.setField(this, 4, e);
          }),
          (r.prototype.idle_time_ms = function() {
            return o.Message.getField(this, 5);
          }),
          (r.prototype.set_idle_time_ms = function(e) {
            o.Message.setField(this, 5, e);
          }),
          (r.prototype.sum_run_time_ms = function() {
            return o.Message.getField(this, 6);
          }),
          (r.prototype.set_sum_run_time_ms = function(e) {
            o.Message.setField(this, 6, e);
          }),
          (r.prototype.sum_wait_time_ms = function() {
            return o.Message.getField(this, 7);
          }),
          (r.prototype.set_sum_wait_time_ms = function(e) {
            o.Message.setField(this, 7, e);
          }),
          (r.prototype.toObject = function(e) {
            return void 0 === e && (e = !1), r.toObject(e, this);
          }),
          (r.toObject = function(e, t) {
            var n = {
              type: o.Message.getField(t, 1),
              num_ops: o.Message.getField(t, 2),
              num_bytes: o.Message.getField(t, 3),
              busy_time_ms: o.Message.getField(t, 4),
              idle_time_ms: o.Message.getField(t, 5),
              sum_run_time_ms: o.Message.getField(t, 6),
              sum_wait_time_ms: o.Message.getField(t, 7)
            };
            return e && (n.$jspbMessageInstance = t), n;
          }),
          (r.fromObject = function(e) {
            var t = new r();
            return (
              t.set_type(e.type),
              t.set_num_ops(e.num_ops),
              t.set_num_bytes(e.num_bytes),
              t.set_busy_time_ms(e.busy_time_ms),
              t.set_idle_time_ms(e.idle_time_ms),
              t.set_sum_run_time_ms(e.sum_run_time_ms),
              t.set_sum_wait_time_ms(e.sum_wait_time_ms),
              t
            );
          }),
          (r.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e),
              n = new r();
            return r.deserializeBinaryFromReader(n, t);
          }),
          (r.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  e.set_type(t.readEnum());
                  break;
                case 2:
                  e.set_num_ops(t.readUint32());
                  break;
                case 3:
                  e.set_num_bytes(t.readUint64String());
                  break;
                case 4:
                  e.set_busy_time_ms(t.readUint64String());
                  break;
                case 5:
                  e.set_idle_time_ms(t.readUint64String());
                  break;
                case 6:
                  e.set_sum_run_time_ms(t.readUint64String());
                  break;
                case 7:
                  e.set_sum_wait_time_ms(t.readUint64String());
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
          (r.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter();
            return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }),
          (r.serializeBinaryToWriter = function(e, t) {
            var n;
            void 0 !== (n = o.Message.getField(e, 1)) && t.writeEnum(1, n),
              void 0 !== (n = o.Message.getField(e, 2)) && t.writeUint32(2, n),
              void 0 !== (n = o.Message.getField(e, 3)) &&
                t.writeUint64String(3, n),
              void 0 !== (n = o.Message.getField(e, 4)) &&
                t.writeUint64String(4, n),
              void 0 !== (n = o.Message.getField(e, 5)) &&
                t.writeUint64String(5, n),
              void 0 !== (n = o.Message.getField(e, 6)) &&
                t.writeUint64String(6, n),
              void 0 !== (n = o.Message.getField(e, 7)) &&
                t.writeUint64String(7, n);
          }),
          (r.prototype.getClassName = function() {
            return "CClientMetrics_SteamPipeWorkStats_Operation";
          }),
          r
        );
      })(o.Message);
    o.Message;
    ((l = c || (c = {})).ClientAppInterfaceStatsReport = function(e, t) {
      return e.SendNotification(
        "ClientMetrics.ClientAppInterfaceStatsReport#1",
        t
      );
    }),
      (l.ClientIPv6ConnectivityReport = function(e, t) {
        return e.SendNotification(
          "ClientMetrics.ClientIPv6ConnectivityReport#1",
          t
        );
      }),
      (l.SteamPipeWorkStatsReport = function(e, t) {
        return e.SendNotification(
          "ClientMetrics.SteamPipeWorkStatsReport#1",
          t
        );
      }),
      (l.ReportClientError = function(e, t) {
        return e.SendNotification("ClientMetrics.ReportClientError#1", t);
      });
    var _,
      g = [],
      v = function(e, t) {
        return g.push({ error: e, cCallsitesToIgnore: t });
      },
      b = console.assert;
    console.assert = function(e, t) {
      for (var n = [], r = 2; r < arguments.length; r++)
        n[r - 2] = arguments[r];
      e || v(new Error(M.apply(void 0, Object(i.g)([t], n))), 2),
        b.apply(console, Object(i.g)([e, t], n));
    };
    var y = console.error;
    (console.error = function(e) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      v(new Error(M.apply(void 0, Object(i.g)([e], t))), 1),
        y.apply(console, Object(i.g)([e], t));
    }),
      (_ = window.setTimeout(function() {
        (g = []), (v = function() {});
      }, 3e4));
    var E = (function() {
      function e(e) {
        var r = this;
        void 0 === e && (e = !0),
          (this.m_transport = null),
          (this.m_rgErrorQueue = []),
          (this.m_bEnabled = !0),
          (this.m_bInitialized = !1),
          (v = e
            ? (g.forEach(function(e) {
                var t = e.error,
                  n = e.cCallsitesToIgnore;
                return r.ReportError(t, n);
              }),
              function(e, t) {
                return r.ReportError(e, t);
              })
            : function() {}),
          (g = []),
          clearTimeout(_),
          window.setTimeout(function() {
            r.m_bInitialized || ((r.m_bEnabled = !1), (r.m_rgErrorQueue = []));
          }, 3e4);
      }
      return (
        (e.prototype.Init = function(e, t, n) {
          (this.m_bInitialized = !0),
            (this.m_strProduct = e),
            (this.m_strVersion = t),
            (this.m_transport = n),
            this.m_bEnabled ||
              (console.error(
                "Error reporting was initialized after being disabled, possibly dropping errors."
              ),
              (this.m_bEnabled = !0)),
            this.m_rgErrorQueue.length &&
              (this.SendErrorReports(this.m_rgErrorQueue),
              (this.m_rgErrorQueue = []));
        }),
        (e.prototype.ReportError = function(e, t) {
          if ((void 0 === t && (t = 0), this.m_bEnabled)) {
            0;
            var n = (function(e, t) {
              void 0 === t && (t = 0);
              try {
                return e.stack && e.stack.match(O)
                  ? (function(e, t) {
                      void 0 === t && (t = 0);
                      var n = e.stack.split("\n").filter(function(e) {
                          return !!e.match(O);
                        })[t],
                        r = n.lastIndexOf("?");
                      if (-1 === r) return n;
                      var i = n.indexOf(":", r);
                      return -1 === i ? n : n.slice(0, r) + n.slice(i);
                    })(e, t)
                  : e.stack && e.stack.match(S)
                  ? (function(e, t) {
                      void 0 === t && (t = 0);
                      return null;
                    })(0, t)
                  : null;
              } catch (e) {
                return (
                  console.warn("Failed to normalize error stack: " + e), null
                );
              }
            })(e, t);
            if (n) {
              var r = { identifier: n, message: e.stack };
              this.SendErrorReport(r);
            }
          }
        }),
        (e.prototype.SendErrorReport = function(e) {
          this.m_transport
            ? this.SendErrorReports([e])
            : this.m_rgErrorQueue.push(e);
        }),
        (e.prototype.SendErrorReports = function(e) {
          if (e && e.length) {
            var t = a.a.Init(h),
              o = e.reduce(function(e, t) {
                return (
                  e[t.identifier]
                    ? e[t.identifier].count++
                    : (e[t.identifier] = { report: t, count: 1 }),
                  e
                );
              }, {}),
              n = Object.keys(o).map(function(e) {
                var t = o[e],
                  n = t.report,
                  r = t.count,
                  i = new m();
                return (
                  i.set_count(r),
                  i.set_identifier(n.identifier),
                  i.set_message(n.message),
                  i
                );
              });
            t.Body().set_product(this.m_strProduct),
              t.Body().set_version(this.m_strVersion),
              t.Body().set_errors(n),
              c.ReportClientError(this.m_transport, t);
          }
        }),
        e
      );
    })();
    function M(e) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      return "string" == typeof e && 0 === t.length
        ? e
        : Object(i.g)([e], t)
            .map(function(e) {
              try {
                return String(e);
              } catch (e) {
                return "[Stringify Error]";
              }
            })
            .join(", ");
    }
    var w,
      O = /^\s*at .*(\S+:\d+|\(native\))/m,
      S = /(^|@)\S+:\d+/;
    n.d(t, "a", function() {
      return k;
    });
    var k = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this;
          return (e.state = {}), e;
        }
        return (
          Object(i.d)(e, t),
          (e.prototype.componentDidCatch = function(e, t) {
            var n = (w || (w = new E()), w);
            n
              ? n.ReportError(e)
              : console.warn("No ErrorReportingStore to report errors with!"),
              this.setState({ error: { error: e, info: t } });
          }),
          (e.prototype.Reset = function() {
            this.setState({ error: null });
          }),
          (e.prototype.render = function() {
            var e = this.props,
              t = e.children,
              n = e.fallback,
              r = this.state.error;
            return r
              ? n
                ? "function" == typeof n
                  ? n(r.error)
                  : n
                : s.createElement(C, { error: r, onDismiss: this.Reset })
              : t;
          }),
          Object(i.c)([r.a], e.prototype, "Reset", null),
          e
        );
      })(s.Component),
      C = function(e) {
        var t = e.error,
          n = e.onDismiss,
          r = t.error ? t.error.stack : "Stack missing",
          i = t.info ? t.info.componentStack : "",
          o = (t.error && t.error.message) || "unknown error";
        return s.createElement(
          "div",
          { style: { overflow: "auto" } },
          s.createElement(
            "h1",
            {
              style: {
                marginTop: "15px",
                marginLeft: "15px",
                color: "white",
                fontSize: "20px",
                display: "inline-block"
              }
            },
            'Error: "',
            o,
            '"'
          ),
          "   ",
          s.createElement(
            "span",
            {
              style: { textDecoration: "underline", cursor: "pointer" },
              onClick: n
            },
            "(x) Dismiss"
          ),
          s.createElement("br", null),
          s.createElement(
            "pre",
            {
              style: {
                marginTop: "15px",
                marginLeft: "15px",
                color: "white",
                fontSize: "16px"
              }
            },
            r
          ),
          s.createElement(
            "pre",
            {
              style: {
                marginTop: "15px",
                marginLeft: "15px",
                color: "white",
                fontSize: "16px"
              }
            },
            "The error occurred while rendering:",
            i
          )
        );
      };
  },
  "JJA/": function(e, t, n) {
    e.exports = {
      BodyNoScroll: "modals_BodyNoScroll_32ZiC",
      BodyNoScrollDialog: "modals_BodyNoScrollDialog_105OB",
      OverlayModal: "modals_OverlayModal_1yDps"
    };
  },
  JMS6: function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
      return l;
    }),
      n.d(t, "a", function() {
        return f;
      }),
      n.d(t, "c", function() {
        return g;
      });
    var l,
      r,
      i = n("mrSG"),
      o = n("2vnA"),
      s = n("i8i4"),
      a = n("Kw0F"),
      c = n("D4wO"),
      u = n("bxiW"),
      p = n("kyHq"),
      d = n("TLQK"),
      h = n("lkRc");
    ((r = l || (l = {}))[(r.Minimized = 1)] = "Minimized"),
      (r[(r.Hidden = 2)] = "Hidden"),
      (r[(r.Tooltip = 4)] = "Tooltip"),
      (r[(r.ContextMenu = 8)] = "ContextMenu"),
      (r[(r.Resizable = 16)] = "Resizable");
    var m = (function() {
        function e(e, t) {
          (this.m_rgLoadingLinks = []), (this.m_rgLoadingLinks = []);
          for (
            var n = e.document.getElementsByTagName("link"), r = 0;
            r < n.length;
            r++
          ) {
            var i = n[r];
            i.addEventListener("load", this.OnLinkLoad),
              this.m_rgLoadingLinks.push(i);
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
              a.b(this.m_rgLoadingLinks, e.currentTarget),
              0 == this.m_rgLoadingLinks.length &&
                (this.m_fnRender(), (this.m_fnRender = void 0));
          }),
          Object(i.c)([u.a], e.prototype, "OnLinkLoad", null),
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
                (this.m_rgParams.eCreationFlags |= l.Hidden),
              this.m_rgParams.eCreationFlags & l.Tooltip && (e = !1),
              this.BIsValid() &&
                (this.BIsClosed()
                  ? ((this.m_popup = void 0), (this.m_element = void 0))
                  : e && this.Focus(t));
            var i = g.GetExistingPopup(this.m_strName);
            if (!i || this.m_rgParams.replace_existing_popup) {
              var o, s, a;
              if (
                ((this.m_rgParams = this.UpdateParamsBeforeShow(
                  this.m_rgParams
                )),
                i
                  ? ((s = i.m_element),
                    (o = i.m_popup),
                    i.ReleasePopup(),
                    (a = i.m_renderWhenReady),
                    g.RemoveTrackedPopup(i),
                    o.removeEventListener(
                      "beforeunload",
                      i.OnBeforeUnloadEvent
                    ),
                    o.removeEventListener("unload", i.OnUnload),
                    o.removeEventListener("resize", i.OnResizeEvent),
                    o.removeEventListener("focus", this.OnFocusInternal),
                    o.removeEventListener("blur", this.OnBlurInternal),
                    o.removeEventListener("drop", i.OnDrop),
                    o.removeEventListener("dragover", i.OnDragOver),
                    o.removeEventListener("message", this.OnMessage))
                  : ((o = (n = _.CreatePopup(this.m_strName, this.m_rgParams))
                      .popup),
                    (s = n.element),
                    (a = new m(o, s))),
                o && s)
              ) {
                if (
                  ((o.document.title = this.m_strTitle),
                  o.addEventListener("beforeunload", this.OnBeforeUnloadEvent),
                  o.addEventListener("unload", this.OnUnload),
                  o.addEventListener("resize", this.OnResizeEvent),
                  o.addEventListener("focus", this.OnFocusInternal),
                  o.addEventListener("blur", this.OnBlurInternal),
                  o.addEventListener("drop", this.OnDrop),
                  o.addEventListener("dragover", this.OnDragOver),
                  o.addEventListener("message", this.OnMessage),
                  h.b.LANGUAGE)
                ) {
                  var c = "koreana" == h.b.LANGUAGE ? "korean" : h.b.LANGUAGE;
                  o.document.documentElement.setAttribute("lang", d.b[c]);
                }
                (this.m_popup = o),
                  (this.m_element = s),
                  (this.m_renderWhenReady = a),
                  this.m_renderWhenReady.SetTarget(function() {
                    return r.RenderInternal(r.m_popup, r.m_element, e);
                  });
              }
              g.AddTrackedPopup(this), i && e && this.Focus();
            }
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
            this.browser_info &&
              (function(e) {
                return (
                  e.m_eBrowserType == p.b.EBrowserType_OpenVROverlay ||
                  e.m_eBrowserType == p.b.EBrowserType_OpenVROverlay_Dashboard
                );
              })(this.browser_info) &&
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
              g.RemoveTrackedPopup(this),
              this.OnClose(),
              s.unmountComponentAtNode(this.m_element);
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
          Object(i.c)([o.w], e.prototype, "m_bFocused", void 0),
          Object(i.c)([u.a], e.prototype, "OnMessage", null),
          Object(i.c)([u.a], e.prototype, "OnResizeEvent", null),
          Object(i.c)([u.a], e.prototype, "OnBeforeUnloadEvent", null),
          Object(i.c)([u.a], e.prototype, "OnUnload", null),
          Object(i.c)([u.a], e.prototype, "OnFocusInternal", null),
          Object(i.c)([u.a], e.prototype, "OnBlurInternal", null),
          e
        );
      })(),
      _ = (function() {
        function e() {
          var s = this;
          (this.m_bShuttingDown = !1),
            (this.m_mapPopups = new Map()),
            (this.m_rgShutdownCallbacks = []),
            (this.m_rgPopupCreatedCallbacks = []),
            (this.m_unCurrentAccountID = 0),
            (this.m_mapRestoreDetails = new Map()),
            (this.m_bSaveRequired = !1),
            Object({ NODE_ENV: "production", STEAM_BUILD: "buildbot" })
              .MOBILE_BUILD ||
              window.addEventListener("beforeunload", function(e) {
                s.m_bShuttingDown = !0;
                for (
                  var t = 0, n = s.m_rgShutdownCallbacks;
                  t < n.length;
                  t++
                ) {
                  (0, n[t])();
                }
                var r = [];
                s.m_mapPopups.forEach(function(e) {
                  e.BIsValid() && !e.BIsClosed() && r.push(e);
                });
                for (var i = 0, o = r; i < o.length; i++) {
                  o[i].Close();
                }
                s.m_bSaveRequired && s.SaveSavedDimensionStore(),
                  s.m_mapPopups.clear();
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
              i = n.height || 300,
              o = t.title,
              s = "width=" + r + ",height=" + i;
            void 0 !== n.left && (s += ",left=" + n.left),
              void 0 !== n.top && (s += ",top=" + n.top),
              (s += ",resizeable,status=0,toolbar=0,menubar=0,location=0");
            var a = "about:blank",
              c = [];
            c.push("createflags=" + t.eCreationFlags),
              t.minWidth && c.push("minwidth=" + t.minWidth),
              t.minHeight && c.push("minheight=" + t.minHeight),
              t.target_browser &&
                (c.push("pid=" + t.target_browser.m_unPID),
                c.push("browser=" + t.target_browser.m_nBrowserID),
                c.push("browserType=" + t.target_browser.m_eBrowserType),
                t.availscreenwidth &&
                  t.availscreenheight &&
                  (c.push("screenavailwidth=" + t.availscreenwidth),
                  c.push("screenavailheight=" + t.availscreenheight))),
              t.strVROverlayKey && c.push("vrOverlayKey=" + t.strVROverlayKey),
              t.strRestoreDetails &&
                c.push("restoredetails=" + t.strRestoreDetails),
              c && (a += "?" + c.join("&"));
            var l = (t.owner_window || window).open(a, e, s, !0);
            if (!l)
              return (
                console.log(
                  "Failed to create popup.. browser popup blocker enabled?"
                ),
                {}
              );
            var u = "";
            t.html_class && (u = 'class="' + t.html_class + '"');
            var p = "";
            t.body_class && (p = 'class="' + t.body_class + '"');
            var d =
              "<!DOCTYPE html><html " +
              u +
              "><head><title></title></head><body " +
              p +
              '><div id="popup_target"></div></body></html>';
            l.document.write(d), (l.document.title = o);
            for (
              var h = l.document.getElementsByTagName("head")[0],
                m = document.getElementsByTagName("link"),
                f = 0;
              f < m.length;
              f++
            ) {
              var _ = m[f];
              if ("stylesheet" == _.rel) {
                for (
                  var g = l.document.createElement("link"), v = 0;
                  v < _.attributes.length;
                  v++
                ) {
                  var b = _.attributes.item(v);
                  g.setAttribute(b.name, b.value);
                }
                h.appendChild(g);
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
                      i = Date.now(),
                      o = 0,
                      s = Array.from(this.m_mapRestoreDetails.keys());
                    o < s.length;
                    o++
                  ) {
                    var a = s[o],
                      c = this.m_mapRestoreDetails.get(a);
                    c.last_used < i &&
                      c.bExpires &&
                      ((i = c.last_used), (r = a));
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
          Object(i.c)(
            [u.a, Object(c.a)(100)],
            e.prototype,
            "DebouncedSaveSavedDimensionStore",
            null
          ),
          e
        );
      })(),
      g = new _();
  },
  "Jqb/": function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return g;
    }),
      n.d(t, "g", function() {
        return v;
      }),
      n.d(t, "h", function() {
        return b;
      }),
      n.d(t, "c", function() {
        return y;
      }),
      n.d(t, "d", function() {
        return E;
      }),
      n.d(t, "e", function() {
        return M;
      }),
      n.d(t, "b", function() {
        return w;
      }),
      n.d(t, "f", function() {
        return S;
      });
    var l = n("mrSG"),
      u = n("q1tI"),
      i = n("X3Ds"),
      p = n("TLQK"),
      d = n("Mgs7"),
      o = n("IjL/"),
      r = n("bxiW"),
      s = n("6Y59"),
      a = n("okNM"),
      c = n("exH9"),
      h = n("JJA/"),
      m = n.n(h),
      f = n("r64O");
    var _ = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(l.d)(t, e),
          (t.prototype.componentWillUnmount = function() {
            this.HideModal();
          }),
          (t.prototype.HideModal = function() {
            this.m_ModalHandle && this.m_ModalHandle.Close(),
              (this.m_ModalHandle = null);
          }),
          (t.prototype.render = function() {
            var e = this.props,
              t = e.active,
              n = e.children;
            return (
              t
                ? this.m_ModalHandle
                  ? this.m_ModalHandle.Update(n)
                  : (this.m_ModalHandle = S(window).ShowModal(n))
                : this.HideModal(),
              null
            );
          }),
          t
        );
      })(u.Component),
      g = function(e) {
        var t = e.active,
          n = e.onDismiss,
          r = e.className,
          i = e.modalClassName,
          o = e.children;
        return u.createElement(
          _,
          { active: t },
          u.createElement(
            v,
            { onEscKeypress: n, className: i },
            u.createElement(d.f, { className: r }, o)
          )
        );
      };
    function v(t) {
      var e,
        n = {};
      t.onEscKeypress &&
        ((n.tabIndex = 0),
        (n.onKeyDown = function(e) {
          27 == e.keyCode && t.onEscKeypress();
        }),
        (n.onMouseDown = function(e) {
          e.currentTarget !== e.target ||
            t.bDisableBackgroundDismiss ||
            t.onEscKeypress();
        }),
        (e = function(e) {
          e && (i.c(e, e.ownerDocument.activeElement) || e.focus());
        }));
      var r = ["ModalPosition"];
      return (
        t.className && r.push(t.className),
        t.bDestructiveWarning && r.push("Destructive"),
        u.createElement(
          "div",
          Object(l.a)({ className: r.join(" ") }, n, { ref: e }),
          u.createElement(
            "div",
            { className: "ModalPosition_Content" },
            !t.hideTopBar &&
              u.createElement("div", { className: "ModalPosition_TopBar" }),
            t.onEscKeypress &&
              !t.bHideCloseIcon &&
              u.createElement(
                "div",
                { className: "ModalPosition_Dismiss" },
                u.createElement(
                  "div",
                  { className: "closeButton", onClick: t.onEscKeypress },
                  u.createElement(s.F, null)
                )
              ),
            u.createElement(o.a, null, t.children)
          )
        )
      );
    }
    var b = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this;
          return (
            (e.state = { bShowModal: !1 }), (e.m_refParent = u.createRef()), e
          );
        }
        return (
          Object(l.d)(e, t),
          (e.prototype.componentDidMount = function() {
            var e = this.GetBodyElement();
            e && e.classList.add(m.a.BodyNoScroll);
          }),
          (e.prototype.componentWillUnmount = function() {
            var e = this.GetBodyElement();
            e && e.classList.remove(m.a.BodyNoScroll);
          }),
          (e.prototype.GetBodyElement = function() {
            return this.m_refParent.current
              ? this.m_refParent.current.closest("body")
              : null;
          }),
          (e.prototype.render = function() {
            return u.createElement(
              "div",
              {
                ref: this.m_refParent,
                className: m.a.OverlayModal + " " + this.props.className
              },
              this.props.children
            );
          }),
          e
        );
      })(u.Component),
      y = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(l.d)(t, e),
          (t.prototype.Cancel = function() {
            this.props.onCancel && this.props.onCancel(),
              this.props.closeModal && this.props.closeModal();
          }),
          (t.prototype.render = function() {
            var e = this.props,
              t = e.strTitle,
              n = e.strDescription,
              r = e.strOKButtonText,
              i = e.strCancelButtonText,
              o = e.bAlertDialog,
              s = e.children,
              a = Object(l.f)(e, [
                "strTitle",
                "strDescription",
                "strOKButtonText",
                "strCancelButtonText",
                "bAlertDialog",
                "children"
              ]),
              c = r || Object(p.d)("#Button_Close");
            return u.createElement(
              E,
              Object(l.a)({}, a),
              u.createElement(d.l, null, " ", t, " "),
              u.createElement(
                d.b,
                null,
                u.createElement(d.c, null, n, s),
                u.createElement(
                  d.j,
                  null,
                  o
                    ? u.createElement(d.r, null, c)
                    : u.createElement(d.o, {
                        bOKDisabled: this.props.bOKDisabled,
                        strOKText: r,
                        onCancel: this.Cancel,
                        strCancelText: i
                      })
                )
              )
            );
          }),
          Object(l.c)([r.a], t.prototype, "Cancel", null),
          (t = Object(l.c)([a.a], t))
        );
      })(u.Component),
      E = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(l.d)(t, e),
          (t.prototype.Cancel = function() {
            this.props.onCancel && this.props.onCancel(),
              this.props.closeModal && this.props.closeModal();
          }),
          (t.prototype.OK = function() {
            this.props.bOKDisabled ||
              (this.props.onOK && this.props.onOK(),
              this.props.closeModal && this.props.closeModal());
          }),
          (t.prototype.render = function() {
            return u.createElement(
              v,
              {
                onEscKeypress: this.Cancel,
                bDestructiveWarning: this.props.bDestructiveWarning,
                bDisableBackgroundDismiss: this.props.bDisableBackgroundDismiss
              },
              u.createElement(
                d.g,
                {
                  classNameContent: Object(c.a)(
                    "GenericConfirmDialog",
                    this.props.bAllowFullSize && "DialogContentFullSize",
                    this.props.className
                  ),
                  onSubmit: this.OK,
                  bCenterVertically: !0
                },
                this.props.children
              )
            );
          }),
          Object(l.c)([r.a], t.prototype, "Cancel", null),
          Object(l.c)([r.a], t.prototype, "OK", null),
          (t = Object(l.c)([a.a], t))
        );
      })(u.Component),
      M = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(l.d)(t, e),
          (t.prototype.render = function() {
            var e = Object(l.a)(
              {
                strTitle: Object(p.d)("#Error_FailureNotice"),
                strDescription: Object(p.d)("#Error_GenericFailureDescription"),
                bAlertDialog: !0,
                bDestructiveWarning: !0,
                onOK: function() {},
                onCancel: function() {}
              },
              this.props
            );
            return u.createElement(y, Object(l.a)({}, e));
          }),
          (t = Object(l.c)([a.a], t))
        );
      })(u.Component),
      w = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(l.d)(t, e),
          (t.prototype.componentDidUpdate = function() {
            var e = this.props.ModalManager.modals;
            e && e.length
              ? document.body.classList.add(m.a.BodyNoScrollDialog)
              : document.body.classList.remove(m.a.BodyNoScrollDialog);
          }),
          (t.prototype.componentDidMount = function() {
            this.props.ModalManager.RegisterOverlay(this);
          }),
          (t.prototype.componentWillUnmount = function() {
            this.props.ModalManager.UnregisterOverlay(this);
          }),
          (t.prototype.OnActiveRef = function(e) {
            if (e) {
              var t = e.firstChild;
              t && t.focus && t.focus();
            }
          }),
          (t.prototype.render = function() {
            var i = this,
              e = this.props.ModalManager.modals;
            if (!e || !e.length) return null;
            var o = this.props.ModalManager.active_modal,
              t = e.map(function(e, t) {
                var n = e == o,
                  r = n ? "active" : "inactive";
                return u.createElement(
                  "div",
                  {
                    className: Object(c.a)("ModalOverlayContent", r),
                    key: "modal-" + t,
                    ref: n ? i.OnActiveRef : null,
                    tabIndex: -1
                  },
                  e.element
                );
              });
            return u.createElement(
              "div",
              { className: "FullModalOverlay" },
              u.createElement("div", {
                className: "ModalOverlayContent ModalOverlayBackground"
              }),
              t
            );
          }),
          t
        );
      })(u.Component),
      O = (function() {
        function e() {
          (this.m_bUsePopups = !0),
            (this.m_rgModals = []),
            (this.m_ActiveOverlay = null);
        }
        return (
          (e.prototype.RegisterOverlay = function(e) {
            Object(f.a)(!this.m_ActiveOverlay, "Registering second overlay"),
              (this.m_ActiveOverlay = e);
          }),
          (e.prototype.UnregisterOverlay = function(e) {
            Object(f.a)(this.m_ActiveOverlay == e, "Active overlay mismatch"),
              this.m_ActiveOverlay == e && (this.m_ActiveOverlay = null);
          }),
          (e.prototype.ForceUpdate = function() {
            var e = this;
            this.m_ActiveOverlay
              ? window.setTimeout(function() {
                  return e.m_ActiveOverlay.forceUpdate();
                }, 1)
              : Object(f.a)(
                  !1,
                  "Modal action was taken, but there is no <DialogOverlay> element to show it in"
                );
          }),
          Object.defineProperty(e.prototype, "modals", {
            get: function() {
              return this.m_rgModals;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "active_modal", {
            get: function() {
              return this.m_rgModals.length
                ? this.m_rgModals[this.m_rgModals.length - 1]
                : void 0;
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.ShowModal = function(e) {
            var t = this,
              n = { element: e };
            return (
              this.m_rgModals.push(n),
              this.ForceUpdate(),
              {
                Close: function() {
                  var e = t.m_rgModals.indexOf(n);
                  -1 != e && t.m_rgModals.splice(e, 1), t.ForceUpdate();
                },
                Update: function(e) {
                  (n.element = e), t.ForceUpdate();
                }
              }
            );
          }),
          (e.prototype.SetUsePopups = function(e) {
            this.m_bUsePopups = e;
          }),
          (e.prototype.BUsePopups = function() {
            return this.m_bUsePopups;
          }),
          e
        );
      })();
    function S(e) {
      var t = k.get(e);
      return t || ((t = new O()), k.set(e, t)), t;
    }
    var k = new WeakMap();
  },
  Kw0F: function(e, t, n) {
    "use strict";
    n.d(t, "g", function() {
      return r;
    }),
      n.d(t, "e", function() {
        return i;
      }),
      n.d(t, "b", function() {
        return o;
      }),
      n.d(t, "c", function() {
        return s;
      }),
      n.d(t, "a", function() {
        return a;
      }),
      n.d(t, "h", function() {
        return c;
      }),
      n.d(t, "f", function() {
        return l;
      }),
      n.d(t, "d", function() {
        return u;
      });
    n("r64O");
    function r(e) {
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
      return s(e, function(e) {
        return t == e;
      });
    }
    function s(e, t) {
      var n = e.findIndex(t);
      return 0 <= n && (e.splice(n, 1), !0);
    }
    function a(e, t) {
      return e.filter(function(e) {
        return t !== e;
      });
    }
    function c(e, t, n) {
      for (var r = 0, i = e.length - 1; r <= i; ) {
        var o = Math.floor((r + i) / 2),
          s = n(e[o], t);
        if (s < 0) r = o + 1;
        else if (0 < s) i = o - 1;
        else {
          if (i == o) return o;
          if (o == r) return o < i && n(t, e[o + 1]) < 0 ? o : o + 1;
          r = o;
        }
      }
      return i;
    }
    function l(e, t, n) {
      return (
        e ||
          console.error(
            "array should be defined for us to fill in the missing indexes"
          ),
        e.concat(Array(t - e.length).fill(n))
      );
    }
    function u(e, t) {
      if (t)
        for (var n = e.length - 1; 0 <= n; --n) {
          var r = e[n];
          if (t(r, n, e)) return r;
        }
    }
  },
  Mgs7: function(e, t, n) {
    "use strict";
    var m = n("mrSG"),
      f = n("q1tI"),
      i = n.n(f),
      _ = n("6Y59"),
      g = n("TLQK"),
      r = n("bxiW"),
      c = n("exH9"),
      o = n("umRa"),
      s = n.n(o),
      a = function(e) {
        var t = e.value,
          n = e.onChange,
          r = e.disabled;
        return i.a.createElement(
          "div",
          {
            className: Object(c.a)(s.a.Toggle, r && s.a.Disabled),
            onClick: function() {
              return !r && n(!t);
            }
          },
          i.a.createElement("div", { className: s.a.ToggleRail }),
          i.a.createElement("div", {
            className: Object(c.a)(
              s.a.ToggleRail,
              s.a.Highlight,
              t ? s.a.On : s.a.Off
            )
          }),
          i.a.createElement("div", {
            className: Object(c.a)(s.a.ToggleSwitch, t ? s.a.On : s.a.Off)
          })
        );
      },
      l = R("DialogHeader"),
      u = R("DialogSubHeader"),
      p = R("DialogFooter"),
      d = R("DialogLabel _DialogLayout"),
      h = R("DialogBodyText"),
      v = R("DialogBody"),
      b = (R("DialogInnerBody"), R("DialogBodyNotificationBar")),
      y = R("DialogTwoColLayout _DialogColLayout"),
      E = R("DialogThreeColLayout _DialogColLayout");
    R("DialogTwoThirdColLayout _DialogColLayout"),
      R("DialogColumn _DialogLayout");
    function M(e) {
      var t = e.children,
        n = e.bCenterVertically,
        r = Object(m.f)(e, ["children", "bCenterVertically"]),
        i =
          "DialogContent _DialogLayout" +
          (e.className ? " " + e.className : "");
      return (
        n && (i += " _DialogCenterVertically"),
        f.createElement(
          "div",
          Object(m.a)({}, r, { className: i }),
          f.createElement("div", { className: "DialogContent_InnerWidth" }, t)
        )
      );
    }
    var w = (function(e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        Object(m.d)(t, e),
        (t.prototype.OnSubmit = function(e) {
          e.preventDefault(), this.props.onSubmit && this.props.onSubmit(e);
        }),
        (t.prototype.render = function() {
          return f.createElement(
            "form",
            Object(m.a)({}, this.props, { onSubmit: this.OnSubmit })
          );
        }),
        Object(m.c)([r.a], t.prototype, "OnSubmit", null),
        t
      );
    })(f.Component);
    function O(e) {
      var t = e.classNameContent,
        n = e.bCenterVertically,
        r = Object(m.f)(e, ["classNameContent", "bCenterVertically"]);
      return f.createElement(
        M,
        { className: t, bCenterVertically: n },
        f.createElement(w, Object(m.a)({}, r))
      );
    }
    function S(e) {
      e.svgicon;
      var t,
        n = Object(m.f)(e, ["svgicon"]),
        r =
          "DialogButton _DialogLayout Primary" +
          (e.className ? " " + e.className : ""),
        i = void 0 !== e.svgicon;
      return (
        i && ((r += " hasSVGIcon"), (t = e.svgicon)),
        f.createElement(
          "button",
          Object(m.a)({ type: e.onClick ? "button" : "submit" }, n, {
            className: r
          }),
          i && f.createElement(t, null),
          e.children
        )
      );
    }
    function k(e) {
      e.svgicon;
      var t,
        n = Object(m.f)(e, ["svgicon"]),
        r =
          "DialogButton _DialogLayout Secondary" +
          (e.className ? " " + e.className : ""),
        i = void 0 !== e.svgicon;
      return (
        i && ((r += " hasSVGIcon"), (t = e.svgicon)),
        f.createElement(
          "button",
          Object(m.a)({ type: "button" }, n, { className: r }),
          i && f.createElement(t, null),
          e.children
        )
      );
    }
    function C(e) {
      e.svgicon;
      var t,
        n = Object(m.f)(e, ["svgicon"]),
        r =
          "DialogButton _DialogLayout Small" +
          (e.className ? " " + e.className : ""),
        i = void 0 !== e.svgicon;
      return (
        i && ((r += " hasSVGIcon"), (t = e.svgicon)),
        f.createElement(
          "button",
          Object(m.a)({ type: "button" }, n, { className: r }),
          i && f.createElement(t, null),
          e.children
        )
      );
    }
    function D(e) {
      var t = "DialogHBar" + (e.className ? " " + e.className : "");
      return f.createElement("div", Object(m.a)({}, e, { className: t }));
    }
    function F(e) {
      return f.createElement(
        y,
        null,
        f.createElement(
          S,
          { onClick: e.onOK, disabled: e.bOKDisabled },
          e.strOKText || Object(g.d)("#Button_Confirm"),
          " "
        ),
        f.createElement(
          k,
          { onClick: e.onCancel },
          e.strCancelText || Object(g.d)("#Button_Cancel")
        )
      );
    }
    function I(e) {
      return f.createElement(
        E,
        null,
        f.createElement(
          S,
          { onClick: e.onOK, disabled: e.bOKDisabled },
          e.strOKText || Object(g.d)("#Button_Confirm"),
          " "
        ),
        f.createElement(
          S,
          { onClick: e.onUpdate, disabled: e.bUpdateDisabled },
          e.strUpdateText || Object(g.d)("#Button_Update"),
          " "
        ),
        f.createElement(
          k,
          { onClick: e.onCancel },
          e.strCancelText || Object(g.d)("#Button_Cancel")
        )
      );
    }
    var x = (function(n) {
        function e(e) {
          var t = n.call(this, e) || this;
          return (t.state = { checked: e.checked, disabled: e.disabled }), t;
        }
        return (
          Object(m.d)(e, n),
          (e.prototype.componentDidUpdate = function(e) {
            e.checked != this.props.checked &&
              this.props.checked != this.state.checked &&
              this.setState({ checked: this.props.checked }),
              e.disabled != this.props.disabled &&
                this.props.disabled != this.state.disabled &&
                this.setState({ disabled: this.props.disabled });
          }),
          (e.prototype.shouldComponentUpdate = function(e, t) {
            return (
              e.label != this.props.label ||
              e.description != this.props.description ||
              e.onChange != this.props.onChange ||
              e.disabled != this.props.disabled ||
              e.checked != this.state.checked ||
              t.checked != this.state.checked
            );
          }),
          Object.defineProperty(e.prototype, "checked", {
            get: function() {
              return this.state.checked;
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.GetElementProps = function() {
            return {
              tabIndex: this.props.tabIndex || 0,
              onClick: this.Toggle,
              onKeyDown: this.KeyDown
            };
          }),
          (e.prototype.Toggle = function() {
            if (!this.props.disabled) {
              var e = !this.state.checked;
              this.setState({ checked: e }),
                this.props.onChange && this.props.onChange(e);
            }
          }),
          (e.prototype.KeyDown = function(e) {
            32 == e.keyCode &&
              (this.Toggle(), e.preventDefault(), e.stopPropagation());
          }),
          Object(m.c)([r.a], e.prototype, "Toggle", null),
          Object(m.c)([r.a], e.prototype, "KeyDown", null),
          e
        );
      })(f.Component),
      L = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(m.d)(t, e),
          (t.prototype.render = function() {
            var e = "DialogCheckbox" + (this.state.checked ? " Active" : "");
            return (
              1 == this.state.disabled && (e += " Disabled"),
              this.props.label
                ? f.createElement(
                    "div",
                    Object(m.a)(
                      {
                        className:
                          "DialogCheckbox_Container _DialogLayout " +
                          (this.props.classname ? this.props.classname : "")
                      },
                      this.GetElementProps()
                    ),
                    f.createElement(
                      "div",
                      { className: e },
                      f.createElement(_.f, {
                        color: this.props.color,
                        highlightColor: this.props.highlightColor
                      })
                    ),
                    f.createElement(
                      "div",
                      { className: "DialogToggle_Label" },
                      f.createElement("span", null, this.props.label),
                      this.props.tooltip &&
                        f.createElement(
                          "span",
                          { "data-tooltip-text": this.props.tooltip },
                          " (?)"
                        )
                    ),
                    f.createElement("div", { style: { clear: "left" } }),
                    this.props.description &&
                      f.createElement(
                        "div",
                        { className: "DialogToggle_Description" },
                        this.props.description
                      )
                  )
                : f.createElement(
                    "div",
                    Object(m.a)({ className: e }, this.GetElementProps()),
                    f.createElement(_.f, null)
                  )
            );
          }),
          t
        );
      })(x),
      j = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(m.d)(t, e),
          (t.prototype.OnOffKeyDown = function(e) {
            (37 == e.keyCode && this.state.checked) ||
            (39 == e.keyCode && !this.state.checked)
              ? (this.Toggle(), e.preventDefault(), e.stopPropagation())
              : this.KeyDown(e);
          }),
          (t.prototype.OnNewUIToggle = function(e) {
            e !== this.state.checked && this.Toggle();
          }),
          (t.prototype.render = function() {
            var e =
              "DialogOnOffToggle _DialogInputContainer _DialogLayout " +
              (this.props.classname ? this.props.classname : "");
            return (
              this.props.disabled && (e += " Disabled"),
              f.createElement(
                "div",
                {
                  className: e,
                  tabIndex: this.props.tabIndex || 0,
                  onKeyDown: this.OnOffKeyDown
                },
                f.createElement(
                  "div",
                  { className: "displayColumn alignSelfCenter" },
                  f.createElement(
                    "div",
                    { className: "DialogToggle_Label" },
                    f.createElement("span", null, this.props.label),
                    this.props.tooltip &&
                      f.createElement(
                        "span",
                        { "data-tooltip-text": this.props.tooltip },
                        " (?)"
                      )
                  ),
                  this.props.description &&
                    f.createElement(
                      "div",
                      { className: "DialogToggle_Description" },
                      this.props.description
                    ),
                  this.props.children
                ),
                this.props.useToggleRail
                  ? f.createElement(
                      "div",
                      { className: "DialogOnOffToggle_NewUIContainer" },
                      f.createElement(a, {
                        onChange: this.OnNewUIToggle,
                        value: this.state.checked
                      })
                    )
                  : f.createElement(
                      "div",
                      {
                        className: "DialogOnOffToggle_Control",
                        onClick: this.Toggle
                      },
                      f.createElement(
                        "div",
                        {
                          className:
                            "DialogOnOffToggle_Option Off" +
                            (this.state.checked ? "" : " Active")
                        },
                        Object(g.d)("#Dialog_Off")
                      ),
                      f.createElement(
                        "div",
                        {
                          className:
                            "DialogOnOffToggle_Option On" +
                            (this.state.checked ? " Active" : "")
                        },
                        Object(g.d)("#Dialog_On")
                      )
                    )
              )
            );
          }),
          Object(m.c)([r.a], t.prototype, "OnOffKeyDown", null),
          Object(m.c)([r.a], t.prototype, "OnNewUIToggle", null),
          t
        );
      })(x);
    function R(n) {
      return function(e) {
        var t = n + (e.className ? " " + e.className : "");
        return f.createElement("div", Object(m.a)({}, e, { className: t }));
      };
    }
    var T = n("hJxo"),
      B = n("r64O"),
      N = (function(n) {
        function e(e) {
          var t = n.call(this, e) || this;
          return (
            t.CheckProps(e),
            (t.state = {
              m_CopiedYPos: 0,
              m_bPlayingCopiedAnimation: !1,
              m_bCompletedCopiedAnimation: !1,
              m_bNumberBelowMinRange: !1,
              m_bNumberAboveMaxRange: !1,
              m_bIsNotNumeric: !1,
              m_bIsInvalidURL: !1,
              m_bIsInvalidEmail: !1
            }),
            t
          );
        }
        return (
          Object(m.d)(e, n),
          (e.prototype.componentDidUpdate = function(e) {
            this.CheckProps(this.props);
          }),
          (e.prototype.OnInputRef = function(e) {
            (this.m_elInput = e),
              this.m_elInput &&
                this.props.focusOnMount &&
                this.m_elInput.focus();
          }),
          Object.defineProperty(e.prototype, "element", {
            get: function() {
              return this.m_elInput;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "value", {
            get: function() {
              return this.m_elInput && this.m_elInput.value;
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.validateUrl = function(e) {
            return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
              e
            );
          }),
          (e.validateEmail = function(e) {
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
              e.toLowerCase()
            );
          }),
          (e.prototype.Validate = function() {
            this.setState({
              m_bNumberBelowMinRange:
                null !== this.props.rangeMin &&
                void 0 !== this.props.rangeMin &&
                Number(this.m_elInput.value) < this.props.rangeMin,
              m_bNumberAboveMaxRange:
                null !== this.props.rangeMax &&
                void 0 !== this.props.rangeMax &&
                Number(this.m_elInput.value) > this.props.rangeMax,
              m_bIsNotNumeric:
                1 == this.props.mustBeNumeric &&
                isNaN(Number(this.m_elInput.value)),
              m_bIsInvalidURL:
                1 == this.props.mustBeURL &&
                !e.validateUrl(this.m_elInput.value),
              m_bIsInvalidEmail:
                1 == this.props.mustBeEmail &&
                !e.validateEmail(this.m_elInput.value)
            });
          }),
          (e.prototype.OnChanged = function(e) {
            this.props.onChange && this.props.onChange(e), this.Validate();
          }),
          (e.prototype.OnCopyClick = function(e) {
            var t = this;
            if (this.m_elInput) {
              this.m_elInput.select();
              var n = this.m_elInput.ownerDocument;
              if (n.queryCommandEnabled("copy")) {
                n.execCommand("copy"),
                  e.currentTarget.focus(),
                  this.m_CopiedAnimation && this.m_CopiedAnimation.Cancel();
                this.setState({ m_bCompletedCopiedAnimation: !1 }),
                  this.setState({ m_CopiedYPos: -4 }, function() {
                    (t.m_CopiedAnimation = new T.b(
                      t,
                      { m_CopiedYPos: -24 },
                      {
                        msDuration: 300,
                        timing: "sine",
                        setStateOnComplete: { m_bCompletedCopiedAnimation: !0 }
                      }
                    )),
                      t.m_CopiedAnimation.Start();
                  });
              }
            }
          }),
          (e.prototype.OnClearClick = function(e) {
            this.m_elInput &&
              this.m_elInput.value &&
              (Object.getOwnPropertyDescriptor(
                window.HTMLInputElement.prototype,
                "value"
              ).set.call(this.m_elInput, ""),
              this.m_elInput.dispatchEvent(
                new Event("input", { bubbles: !0 })
              ));
          }),
          (e.prototype.CheckProps = function(e) {
            Object(B.a)(
              !(e.bShowClearAction || e.bAlwaysShowClearAction) || e.onChange,
              "In order for bShowClearAction to work correctly, you should be handling onChange and passing value to the Dialog.Input."
            );
          }),
          (e.prototype.render = function() {
            var e = this.props,
              t = e.label,
              n = e.explainer,
              r = (e.requiredLabel, e.bShowCopyAction),
              i = e.bShowClearAction,
              o = e.bAlwaysShowClearAction,
              s = e.bIsPassword,
              a = (e.rangeMin,
              e.rangeMax,
              e.mustBeNumeric,
              e.mustBeURL,
              e.mustBeEmail,
              e.focusOnMount,
              e.tooltip,
              Object(m.f)(e, [
                "label",
                "explainer",
                "requiredLabel",
                "bShowCopyAction",
                "bShowClearAction",
                "bAlwaysShowClearAction",
                "bIsPassword",
                "rangeMin",
                "rangeMax",
                "mustBeNumeric",
                "mustBeURL",
                "mustBeEmail",
                "focusOnMount",
                "tooltip"
              ])),
              c =
                "DialogInput DialogInputPlaceholder DialogTextInputBase" +
                (a.className ? " " + a.className : ""),
              l = "copiedAnimation",
              u = this.state.m_bCompletedCopiedAnimation;
            this.m_CopiedAnimation && (l = "copiedAnimation animationPlaying"),
              u && (l = "copiedAnimation animationComplete");
            var p = {};
            void 0 !== this.state.m_CopiedYPos &&
              (p.transform = "translateY(" + this.state.m_CopiedYPos + "px)");
            var d = void 0;
            n &&
              (d = f.createElement(
                "div",
                { className: "DialogLabelExplainer" },
                n
              ));
            var h = f.createElement(
              f.Fragment,
              null,
              f.createElement(
                "div",
                { className: "DialogInput_Wrapper _DialogLayout" },
                f.createElement(
                  "input",
                  Object(m.a)({ type: s ? "password" : "text" }, a, {
                    className: c,
                    ref: this.OnInputRef,
                    onChange: this.OnChanged
                  })
                ),
                r &&
                  f.createElement(
                    "div",
                    { className: "displayRow" },
                    f.createElement(
                      k,
                      {
                        className: "DialogInput_CopyAction Primary",
                        onClick: this.OnCopyClick
                      },
                      Object(g.d)("#Button_CopyLink")
                    ),
                    f.createElement(
                      "div",
                      { style: p, className: l },
                      "Link Copied"
                    )
                  ),
                (o || (i && a.value)) &&
                  f.createElement(
                    "div",
                    {
                      className: "DialogInput_ClearAction",
                      onClick: this.OnClearClick
                    },
                    f.createElement(_.F, null)
                  )
              ),
              d
            );
            return t
              ? f.createElement(
                  "div",
                  { className: "DialogInputLabelGroup _DialogLayout " },
                  f.createElement(
                    "label",
                    null,
                    f.createElement(
                      "div",
                      { className: "DialogLabel" },
                      t,
                      " ",
                      this.props.tooltip &&
                        f.createElement(
                          "span",
                          { "data-tooltip-text": this.props.tooltip },
                          " (?)"
                        ),
                      f.createElement(
                        "span",
                        { className: "DialogInputRequirementLabel" },
                        this.props.requiredLabel
                      ),
                      " "
                    ),
                    h,
                    this.state.m_bNumberBelowMinRange
                      ? f.createElement(
                          "div",
                          null,
                          " ",
                          Object(g.d)("#Input_Error_NumberTooSmall"),
                          " "
                        )
                      : null,
                    this.state.m_bNumberAboveMaxRange
                      ? f.createElement(
                          "div",
                          null,
                          " ",
                          Object(g.d)("#Input_Error_NumberTooLarge"),
                          " "
                        )
                      : null,
                    this.state.m_bIsInvalidURL
                      ? f.createElement(
                          "div",
                          null,
                          " ",
                          Object(g.d)("#Input_Error_MustBeURL"),
                          " "
                        )
                      : null,
                    this.state.m_bIsInvalidEmail
                      ? f.createElement(
                          "div",
                          null,
                          " ",
                          Object(g.d)("#Input_Error_MustBeEmail"),
                          " "
                        )
                      : null,
                    this.state.m_bIsNotNumeric
                      ? f.createElement(
                          "div",
                          null,
                          " ",
                          Object(g.d)("#Input_Error_MustBeNumber"),
                          " "
                        )
                      : null
                  )
                )
              : h;
          }),
          Object(m.c)([r.a], e.prototype, "OnInputRef", null),
          Object(m.c)([r.a], e.prototype, "OnChanged", null),
          Object(m.c)([r.a], e.prototype, "OnCopyClick", null),
          Object(m.c)([r.a], e.prototype, "OnClearClick", null),
          e
        );
      })(f.PureComponent),
      A = (function(n) {
        function e(e) {
          var t = n.call(this, e) || this;
          return (t.state = { value: t.ClampValue(e.value) }), t;
        }
        return (
          Object(m.d)(e, n),
          Object.defineProperty(e.prototype, "value", {
            get: function() {
              return this.state.value;
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.ClampValue = function(e) {
            return void 0 === e || isNaN(e) || e < this.props.min
              ? this.props.min
              : e > this.props.max
              ? this.props.max
              : e;
          }),
          (e.prototype.BPropsValid = function() {
            return this.props.max > this.props.min;
          }),
          (e.prototype.shouldComponentUpdate = function(e, t) {
            return (
              t.value != this.state.value ||
              (e.max !== this.props.max ||
                e.min !== this.props.min ||
                (e.value !== this.state.value &&
                  e.value !== this.props.value) ||
                e.onChange !== this.props.onChange)
            );
          }),
          (e.prototype.componentDidUpdate = function(e) {
            e.value != this.props.value &&
              this.setState({ value: this.props.value });
          }),
          (e.prototype.OnMouseDown = function(e) {
            (this.m_elSlider = e.currentTarget),
              (this.m_rectSlider = this.m_elSlider.getBoundingClientRect()),
              this.AdjustSliderForClientX(e.clientX),
              this.m_elSlider.ownerDocument.defaultView.addEventListener(
                "mousemove",
                this.OnMouseMove
              ),
              this.m_elSlider.ownerDocument.defaultView.addEventListener(
                "mouseup",
                this.OnMouseUp
              );
          }),
          (e.prototype.OnMouseMove = function(e) {
            this.AdjustSliderForClientX(e.clientX);
          }),
          (e.prototype.OnMouseUp = function(e) {
            this.m_elSlider.ownerDocument.defaultView.removeEventListener(
              "mousemove",
              this.OnMouseMove
            ),
              this.m_elSlider.ownerDocument.defaultView.removeEventListener(
                "mouseup",
                this.OnMouseUp
              );
          }),
          (e.prototype.OnTouchStart = function(e) {
            (this.m_elSlider = e.currentTarget),
              (this.m_rectSlider = this.m_elSlider.getBoundingClientRect()),
              this.AdjustSliderForClientX(e.touches[0].clientX),
              this.m_elSlider.ownerDocument.defaultView.addEventListener(
                "touchmove",
                this.OnTouchMove
              ),
              this.m_elSlider.ownerDocument.defaultView.addEventListener(
                "touchend",
                this.OnTouchEnd
              );
          }),
          (e.prototype.OnTouchMove = function(e) {
            this.AdjustSliderForClientX(e.touches[0].clientX);
          }),
          (e.prototype.OnTouchEnd = function(e) {
            this.m_elSlider.ownerDocument.defaultView.removeEventListener(
              "touchmove",
              this.OnTouchMove
            ),
              this.m_elSlider.ownerDocument.defaultView.removeEventListener(
                "touchend",
                this.OnTouchEnd
              );
          }),
          (e.prototype.OnKeyDown = function(e) {
            var t = 1;
            e.ctrlKey &&
              (t = Math.max(
                1,
                Math.floor(0.1 * (this.props.max - this.props.min) + 0.5)
              )),
              37 == e.keyCode
                ? (this.IncrementValue(-1 * t), e.preventDefault())
                : 39 == e.keyCode &&
                  (this.IncrementValue(1 * t), e.preventDefault());
          }),
          (e.prototype.AdjustSliderForClientX = function(e) {
            var t =
              ((e - this.m_rectSlider.left) /
                (this.m_rectSlider.right - this.m_rectSlider.left)) *
                (this.props.max - this.props.min) +
              this.props.min;
            t = Math.floor(t + 0.5);
            var n = this.ClampValue(t);
            n != this.state.value &&
              (this.setState({ value: n }),
              this.props.onChange && this.props.onChange(n));
          }),
          (e.prototype.IncrementValue = function(e) {
            var t = this.ClampValue(this.state.value + e);
            t != this.state.value &&
              (this.setState({ value: t }),
              this.props.onChange && this.props.onChange(t));
          }),
          (e.prototype.render = function() {
            var e = {},
              t = {};
            if (this.BPropsValid()) {
              var n =
                (100 * (this.state.value - this.props.min)) /
                  (this.props.max - this.props.min) +
                "%";
              (e.width = n), (t.left = n);
            }
            var r = this.props,
              i = r.label,
              o = r.explainer,
              s = r.tooltip,
              a = (Object(m.f)(r, ["label", "explainer", "tooltip"]), void 0);
            return (
              o &&
                (a = f.createElement(
                  "div",
                  { className: "DialogLabelExplainer" },
                  o
                )),
              f.createElement(
                "div",
                {
                  className:
                    "DialogSlider_Container _DialogInputContainer _DialogLayout" +
                    (this.props.classname ? " " + this.props.classname : ""),
                  onKeyDown: this.OnKeyDown,
                  tabIndex: this.props.tabIndex || 0
                },
                i &&
                  f.createElement(
                    "div",
                    { className: "DialogLabel" },
                    i,
                    Boolean(s) &&
                      f.createElement(
                        "span",
                        { "data-tooltip-text": s },
                        " (?)"
                      )
                  ),
                f.createElement(
                  "div",
                  {
                    className: "DialogSlider_Slider",
                    onMouseDown: this.OnMouseDown,
                    onTouchStart: this.OnTouchStart
                  },
                  f.createElement("div", {
                    className: "DialogSlider_Value",
                    style: e
                  }),
                  f.createElement("div", {
                    className: "DialogSlider_Grabber",
                    style: t
                  })
                ),
                this.props.bShowValue
                  ? f.createElement(
                      "div",
                      { className: "DialogLabelExplainer" },
                      this.state.value
                    )
                  : null,
                a
              )
            );
          }),
          Object(m.c)([r.a], e.prototype, "OnMouseDown", null),
          Object(m.c)([r.a], e.prototype, "OnMouseMove", null),
          Object(m.c)([r.a], e.prototype, "OnMouseUp", null),
          Object(m.c)([r.a], e.prototype, "OnTouchStart", null),
          Object(m.c)([r.a], e.prototype, "OnTouchMove", null),
          Object(m.c)([r.a], e.prototype, "OnTouchEnd", null),
          Object(m.c)([r.a], e.prototype, "OnKeyDown", null),
          e
        );
      })(f.Component),
      P = n("TtDX"),
      U = (function(n) {
        function e(e) {
          var t = n.call(this, e) || this;
          return (
            (t.m_bRebuildMenu = !1),
            (t.state = {
              iSelectedOption: t.FindActiveOptionIndex(e.selectedOption),
              bOpened: !1
            }),
            t
          );
        }
        return (
          Object(m.d)(e, n),
          (e.prototype.FindAndSetActiveOption = function(e) {
            var t = this.FindActiveOptionIndex(e);
            t !== this.state.iSelectedOption &&
              this.setState({ iSelectedOption: t });
          }),
          (e.prototype.FindActiveOptionIndex = function(e) {
            for (var t = 0; t < this.props.rgOptions.length; t++)
              if (this.props.rgOptions[t].data === e) return t;
          }),
          Object.defineProperty(e.prototype, "value", {
            get: function() {
              return void 0 !== this.state.iSelectedOption
                ? this.props.rgOptions[this.state.iSelectedOption]
                : void 0;
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.SetSelectedOption = function(e) {
            null != e
              ? this.FindAndSetActiveOption(e)
              : this.setState({ iSelectedOption: void 0 });
          }),
          (e.prototype.shouldComponentUpdate = function(e, t, n) {
            if (e.selectedOption != this.props.selectedOption) {
              this.FindActiveOptionIndex(e.selectedOption);
              if (this.state.iSelectedOption !== t.iSelectedOption) return !0;
            }
            if (e.disabled != this.props.disabled) return !0;
            if (e.postDropdownElement != this.props.postDropdownElement)
              return !0;
            if (e.postOptionElement != this.props.postOptionElement) return !0;
            if (
              t.bOpened !== this.state.bOpened ||
              t.iSelectedOption !== this.state.iSelectedOption
            )
              return !0;
            for (
              var r = 0,
                i = [
                  "label",
                  "tooltip",
                  "selectedOption",
                  "tabIndex",
                  "onChange",
                  "strDefaultLabel"
                ];
              r < i.length;
              r++
            ) {
              var o = i[r];
              if (e[o] !== this.props[o]) return !0;
            }
            return !(!this.state.bOpened || !this.DoOptionsDiffer(e.rgOptions));
          }),
          (e.prototype.DoOptionsDiffer = function(e) {
            if (e.length != this.props.rgOptions.length) return !0;
            for (var t = 0; t < e.length; t++)
              if (e[t].label !== this.props.rgOptions[t].label) return !0;
            return !1;
          }),
          (e.prototype.componentDidUpdate = function(e) {
            e.selectedOption !== this.props.selectedOption &&
              this.FindAndSetActiveOption(this.props.selectedOption),
              this.DoOptionsDiffer(e.rgOptions) &&
                this.state.bOpened &&
                (this.m_iMenuInstance.SetOnHideCallback(null),
                this.m_iMenuInstance.Hide(),
                (this.m_iMenuInstance = void 0),
                this.BuildMenu());
          }),
          (e.prototype.OnInputRef = function(e) {
            this.m_elInput = e;
          }),
          (e.prototype.ToggleMenu = function() {
            this.state.bOpened ? this.HideMenu() : this.ShowMenu();
          }),
          (e.prototype.OnItemSelected = function(e, t) {
            this.HideMenu(),
              this.setState({ iSelectedOption: e }),
              this.props.onChange &&
                this.props.onChange(
                  void 0 !== e ? this.props.rgOptions[e] : void 0,
                  this
                );
          }),
          (e.prototype.BuildMenu = function() {
            var e = "DialogMenuPosition";
            this.props.strDropDownClassName &&
              (e += " " + this.props.strDropDownClassName);
            var t = Object(m.a)(
              {
                bOverlapHorizontal: !0,
                bMatchWidth: !0,
                bFitToWindow: !0,
                strClassName: e,
                bDisableMouseOverlay: this.props.bDisableMouseOverlay
              },
              this.props.contextMenuPositionOptions
            );
            (this.m_iMenuInstance = Object(P.a)(
              f.createElement(G, {
                rgOptions: this.props.rgOptions,
                fnOnItemSelected: this.OnItemSelected,
                strDropDownItemClassName: this.props.strDropDownItemClassName,
                renderMenuContainer: this.props.renderMenuContainer,
                renderMenuItem: this.props.renderMenuItem
              }),
              this.m_elInput,
              t
            )),
              this.m_iMenuInstance.SetOnHideCallback(this.HideMenu);
          }),
          (e.prototype.ShowMenu = function() {
            this.m_iMenuInstance
              ? this.m_iMenuInstance.Show()
              : this.BuildMenu(),
              this.props.onMenuOpened && this.props.onMenuOpened(),
              this.setState({ bOpened: !0 });
          }),
          (e.prototype.HideMenu = function() {
            this.m_iMenuInstance && this.m_iMenuInstance.Hide(),
              this.setState({ bOpened: !1 });
          }),
          (e.prototype.render = function() {
            var e =
                void 0 !== this.state.iSelectedOption &&
                this.props.rgOptions[this.state.iSelectedOption],
              t = e ? e.label : this.props.strDefaultLabel,
              n = "DialogDropDown _DialogInputContainer",
              r = "DialogInputLabelGroup _DialogLayout";
            this.state.bOpened && (n += " Active"),
              this.props.disabled && (n += " Disabled"),
              this.props.strClassName && (r += " " + this.props.strClassName);
            var i = f.createElement(
              f.Fragment,
              null,
              this.props.postDropdownElement,
              !this.props.disabled &&
                f.createElement(
                  "div",
                  { className: "DialogDropDown_Arrow" },
                  f.createElement(_.g, null)
                ),
              this.props.postOptionElement,
              f.createElement(
                "div",
                { className: "DialogDropDown_CurrentDisplay" },
                t
              )
            );
            return f.createElement(
              "div",
              { className: r },
              this.props.label &&
                f.createElement(
                  "div",
                  { className: "DialogLabel" },
                  this.props.label,
                  Boolean(this.props.tooltip) &&
                    f.createElement(
                      "span",
                      { "data-tooltip-text": this.props.tooltip },
                      " (?)"
                    )
                ),
              this.props.fnRenderControl
                ? this.props.fnRenderControl({
                    className: n,
                    tabIndex: this.props.tabIndex || 0,
                    onClick: this.props.disabled ? void 0 : this.ToggleMenu,
                    htmlElementRef: this.OnInputRef,
                    children: i
                  })
                : f.createElement(
                    "div",
                    {
                      className: n,
                      tabIndex: this.props.tabIndex || 0,
                      onClick: this.props.disabled ? void 0 : this.ToggleMenu,
                      ref: this.OnInputRef
                    },
                    i
                  )
            );
          }),
          Object(m.c)([r.a], e.prototype, "OnInputRef", null),
          Object(m.c)([r.a], e.prototype, "ToggleMenu", null),
          Object(m.c)([r.a], e.prototype, "OnItemSelected", null),
          Object(m.c)([r.a], e.prototype, "ShowMenu", null),
          Object(m.c)([r.a], e.prototype, "HideMenu", null),
          e
        );
      })(f.Component),
      G = (function(n) {
        function e(e) {
          var t = n.call(this, e) || this;
          return (t.state = { iFocus: 0 }), t;
        }
        return (
          Object(m.d)(e, n),
          (e.prototype.OnItemClicked = function(e) {
            var t = parseInt(
              e.currentTarget.getAttribute("data-dropdown-index")
            );
            (t || 0 === t) &&
              0 <= t &&
              t < this.props.rgOptions.length &&
              this.props.fnOnItemSelected(t, this.props.rgOptions[t]);
          }),
          (e.prototype.render = function() {
            var n = this,
              r = "DialogDropDownMenu_Item";
            this.props.strDropDownItemClassName &&
              (r += " " + this.props.strDropDownItemClassName);
            var i = this.props.renderMenuItem || "div",
              e = this.props.rgOptions.map(function(e, t) {
                return f.createElement(
                  i,
                  {
                    className: r + " " + e.strOptionClass,
                    key: t,
                    "data-dropdown-index": t,
                    onClick: n.OnItemClicked
                  },
                  e.label
                );
              }),
              t = this.props.renderMenuContainer || "div";
            return f.createElement(
              t,
              { className: "DialogDropDownMenu _DialogInputContainer" },
              e
            );
          }),
          Object(m.c)([r.a], e.prototype, "OnItemClicked", null),
          e
        );
      })(f.Component),
      z = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this;
          return (e.state = { rgOptions: void 0 }), e;
        }
        return (
          Object(m.d)(e, t),
          (e.prototype.OnMenuOpened = function() {
            return Object(m.b)(this, void 0, void 0, function() {
              var t;
              return Object(m.e)(this, function(e) {
                switch (e.label) {
                  case 0:
                    return this.state.rgOptions
                      ? [3, 2]
                      : [4, this.props.fnLoadOptions()];
                  case 1:
                    (t = e.sent()),
                      this.setState({ rgOptions: t }),
                      (e.label = 2);
                  case 2:
                    return [2];
                }
              });
            });
          }),
          (e.prototype.componentDidMount = function() {}),
          (e.prototype.render = function() {
            var e = this.props,
              t = (e.fnLoadOptions, e.strInitialDisplay),
              n = e.initialValue,
              r = Object(m.f)(e, [
                "fnLoadOptions",
                "strInitialDisplay",
                "initialValue"
              ]),
              i = this.state.rgOptions;
            return (
              void 0 === i &&
                (t || n
                  ? ((i = [{ label: t, data: n }]), (r.selectedOption = n))
                  : (i = [])),
              f.createElement(
                U,
                Object(m.a)({}, r, {
                  rgOptions: i,
                  onMenuOpened: this.OnMenuOpened
                })
              )
            );
          }),
          Object(m.c)([r.a], e.prototype, "OnMenuOpened", null),
          e
        );
      })(f.Component),
      H = n("2vnA"),
      W = n("sUmc"),
      V = n("Kw0F"),
      Y = n("YyVH"),
      K = n("UPxs");
    f.Component;
    function X(e, t, n, r) {
      return r
        ? n && e > n.left && e < n.right && t > n.top && t < n.bottom
        : n && e >= n.left && e <= n.right && t >= n.top && t <= n.bottom;
    }
    var q = (function() {
        function e() {
          (this.m_embeddedElement = new W.a("DragGhosts")),
            (this.m_rgDropRegions = []),
            (this.m_rgActiveDropRegions = []);
        }
        return (
          (e.prototype.RegisterDropRegion = function(e) {
            this.m_rgDropRegions.push(e),
              this.m_activeDraggable &&
                e.BAcceptDraggable(this.m_activeDraggable) &&
                (e.OnDragStarted(this.m_activeDraggable),
                this.m_rgActiveDropRegions.push(e));
          }),
          (e.prototype.UnregisterDropRegion = function(e) {
            V.b(this.m_rgDropRegions, e),
              V.b(this.m_rgActiveDropRegions, e),
              this.m_activeDropRegion == e &&
                ((this.m_activeDropRegion = void 0),
                this.m_activeDraggable && this.ShowDragGhost());
          }),
          (e.prototype.OnDragGhostRef = function(e) {
            this.m_dragGhost = e;
          }),
          (e.prototype.ShowDragGhost = function() {
            var e = this.m_activeDraggable.renderDragGhost(),
              t = Object(c.a)(
                e.props.className,
                !!this.m_activeDropRegion && "DraggedOverActiveDrop"
              ),
              n = f.cloneElement(e, { ref: this.OnDragGhostRef, className: t });
            this.m_embeddedElement.ShowElement(
              this.m_activeDraggable.GetDragDocument(),
              n,
              this.m_activeDraggable
            );
          }),
          (e.prototype.HideDragGhost = function() {
            this.m_embeddedElement.HideElement(
              this.m_activeDraggable.GetDragDocument(),
              this.m_activeDraggable
            );
          }),
          (e.prototype.OnDragStart = function(e) {
            (this.m_activeDraggable = e), (this.m_rgActiveDropRegions = []);
            for (var t = 0, n = this.m_rgDropRegions; t < n.length; t++) {
              var r = n[t];
              r.BAcceptDraggable(e) &&
                (r.OnDragStarted(e), this.m_rgActiveDropRegions.push(r));
            }
            this.ShowDragGhost();
          }),
          (e.prototype.EndDrag = function() {
            if (this.m_activeDraggable) {
              this.HideDragGhost(),
                this.m_activeDropRegion &&
                  this.m_activeDropRegion.OnDrop(this.m_activeDraggable);
              for (
                var e = 0, t = this.m_rgActiveDropRegions;
                e < t.length;
                e++
              ) {
                t[e].OnDragEnded(this.m_activeDraggable);
              }
              (this.m_activeDraggable = void 0),
                (this.m_dropGhost = void 0),
                (this.m_rgActiveDropRegions = []);
            }
          }),
          (e.prototype.FindBestActiveDropRegionForPoint = function(e, t) {
            var n,
              r = this.m_activeDraggable.GetDragDocument();
            if ("elementsFromPoint" in r) n = r.elementsFromPoint(e, t);
            else if ("msElementsFromPoint" in r) {
              var i = r.msElementsFromPoint;
              n = Array.from(i(e, t));
            }
            if (n) {
              var o = new Map();
              this.m_rgActiveDropRegions.forEach(function(e) {
                return o.set(e.GetElement(), e);
              });
              for (var s = 0, a = n; s < a.length; s++) {
                var c = a[s],
                  l = o.get(c);
                if (l) return l;
              }
            } else {
              if (
                this.m_activeDropRegion &&
                this.m_activeDropRegion.BDraggableInRegion(
                  e,
                  t,
                  this.m_activeDraggable
                )
              )
                return this.m_activeDropRegion;
              for (var u = this.m_rgActiveDropRegions.length - 1; 0 <= u; u--) {
                var p = this.m_rgActiveDropRegions[u];
                if (p.BDraggableInRegion(e, t, this.m_activeDraggable))
                  return p;
              }
            }
            return null;
          }),
          (e.prototype.OnDrag = function(e, t, n) {
            var r = this,
              i = void 0 === t ? 0 : t - this.m_dragGhost.state.clientX,
              o = void 0 === n ? 0 : n - this.m_dragGhost.state.clientY;
            if (
              (e.props.bEnableHTMLDrag &&
                this.m_dragOffWindowTimer &&
                window.clearTimeout(this.m_dragOffWindowTimer),
              this.m_dragGhost &&
                (this.m_dragGhost.setState({
                  clientX: t,
                  clientY: n,
                  clientXDelta: i,
                  clientYDelta: o,
                  bVisible: !0
                }),
                e.props.bEnableHTMLDrag && (i || o)))
            ) {
              var s = t + i,
                a = n + o,
                c = e.GetDragDocument().body.getBoundingClientRect();
              if (X(t, n, c) && !X(s, a, c, !0)) {
                var l = Y.c(s, c.left, c.right, c.left - 200, c.right + 200),
                  u = Y.c(a, c.top, c.bottom, c.top - 100, c.bottom + 100);
                this.m_dragOffWindowTimer = window.setTimeout(function() {
                  e == r.m_activeDraggable && r.OnDrag(e, l, u);
                }, 50);
              }
            }
            var p = this.FindBestActiveDropRegionForPoint(t, n);
            !!this.m_activeDropRegion != !!p &&
              (this.ShowDragGhost(),
              this.m_dropGhost ||
                (this.m_dropGhost = this.m_activeDraggable.renderDropGhost())),
              this.m_activeDropRegion &&
                this.m_activeDropRegion != p &&
                this.m_activeDropRegion.OnDragLeave(this.m_activeDraggable),
              p &&
                this.m_activeDropRegion != p &&
                p.OnDragEnter(this.m_activeDraggable, this.m_dropGhost),
              (this.m_activeDropRegion = p),
              this.m_activeDropRegion &&
                this.m_activeDropRegion.OnDragMove(
                  t,
                  n,
                  this.m_activeDraggable
                );
          }),
          Object(m.c)([r.a], e.prototype, "OnDragGhostRef", null),
          e
        );
      })(),
      J = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this;
          return (
            (e.m_DragInfo = {
              bStarted: !1,
              startClientX: void 0,
              startClientY: void 0,
              startOffsetX: void 0,
              startOffsetY: void 0,
              startWidth: void 0,
              startHeight: void 0,
              ownerWin: void 0
            }),
            (e.m_divRef = f.createRef()),
            e
          );
        }
        return (
          Object(m.d)(e, t),
          (e.prototype.GetDragDocument = function() {
            return (
              this.m_DragInfo.ownerWin && this.m_DragInfo.ownerWin.document
            );
          }),
          (e.prototype.RecordDragStart = function(e, t, n) {
            (this.m_DragInfo.startClientX = t),
              (this.m_DragInfo.startClientY = n);
            var r = e.getBoundingClientRect();
            (this.m_DragInfo.startOffsetX = t - r.left),
              (this.m_DragInfo.startOffsetY = n - r.top),
              (this.m_DragInfo.startWidth = r.width),
              (this.m_DragInfo.startHeight = r.height),
              (this.m_DragInfo.ownerWin = e.ownerDocument.defaultView);
          }),
          (e.prototype.ProcessDragMove = function(e) {
            var t = (function(e) {
                if ("touches" in e) {
                  var t = e;
                  return [t.touches[0].clientX, t.touches[0].clientY];
                }
                return [e.clientX, e.clientY];
              })(e),
              n = t[0],
              r = t[1];
            if (this.m_DragInfo.bStarted) {
              if (this.props.bEnableHTMLDrag && 0 == n && 0 == r) return;
              this.props.coordinator.OnDrag(this, n, r);
            } else
              25 <=
                Math.pow(n - this.m_DragInfo.startClientX, 2) +
                  Math.pow(r - this.m_DragInfo.startClientY, 2) &&
                ((this.m_DragInfo.bStarted = !0),
                this.forceUpdate(),
                this.props.fnOnDragStart && this.props.fnOnDragStart(),
                this.props.coordinator.OnDragStart(this),
                this.props.coordinator.OnDrag(this, n, r));
          }),
          (e.prototype.OnMouseDown = function(e) {
            this.m_DragInfo.bStarted ||
              0 != e.button ||
              (this.RecordDragStart(e.currentTarget, e.clientX, e.clientY),
              this.m_DragInfo.ownerWin.addEventListener(
                "mousemove",
                this.ProcessDragMove
              ),
              this.m_DragInfo.ownerWin.addEventListener(
                "mouseup",
                this.OnMouseUp
              ));
          }),
          (e.prototype.OnMouseUp = function(e) {
            this.m_DragInfo.ownerWin.removeEventListener(
              "mousemove",
              this.ProcessDragMove
            ),
              this.m_DragInfo.ownerWin.removeEventListener(
                "mouseup",
                this.OnMouseUp
              ),
              this.ResetDragState();
          }),
          (e.prototype.OnTouchStart = function(e) {
            this.m_DragInfo.bStarted ||
              (this.RecordDragStart(
                e.currentTarget,
                e.touches[0].clientX,
                e.touches[0].clientY
              ),
              this.m_DragInfo.ownerWin.addEventListener(
                "touchmove",
                this.ProcessDragMove
              ),
              this.m_DragInfo.ownerWin.addEventListener(
                "touchend",
                this.OnTouchEnd
              ));
          }),
          (e.prototype.OnTouchEnd = function(e) {
            this.m_DragInfo.ownerWin.removeEventListener(
              "touchmove",
              this.ProcessDragMove
            ),
              this.m_DragInfo.ownerWin.removeEventListener(
                "touchend",
                this.OnTouchEnd
              ),
              this.ResetDragState();
          }),
          (e.prototype.ResetDragState = function() {
            this.m_DragInfo.bStarted &&
              (this.props.coordinator.EndDrag(),
              this.props.fnOnDragEnd && this.props.fnOnDragEnd()),
              (this.m_DragInfo.bStarted = !1),
              (this.m_DragInfo.startClientX = void 0),
              (this.m_DragInfo.startClientY = void 0),
              (this.m_DragInfo.startOffsetX = void 0),
              (this.m_DragInfo.startOffsetY = void 0),
              (this.m_DragInfo.ownerWin = void 0),
              this.forceUpdate();
          }),
          (e.prototype.OnHTMLDragStart = function(n) {
            (n.dataTransfer.effectAllowed = "copyMove"),
              this.props.strHTMLDragData &&
                this.props.strHTMLDragData.forEach(function(e, t) {
                  return n.dataTransfer.setData(t, e);
                }),
              n.dataTransfer.getData("text/plain") ||
                n.dataTransfer.setData(
                  "text/plain",
                  this.props.data.toString()
                );
            var e = new Image();
            n.dataTransfer.setDragImage(e, 0, 0),
              this.RecordDragStart(n.currentTarget, n.clientX, n.clientY);
          }),
          (e.prototype.OnHTMLDragEnd = function() {
            this.ResetDragState();
          }),
          (e.prototype.render = function() {
            var e = this.props,
              t = (e.coordinator, e.data, e.bEnableHTMLDrag),
              n = (e.strHTMLDragData,
              e.fnOnDragStart,
              e.fnOnDragEnd,
              e.fnRenderDragGhost,
              e.fnRenderDropGhost,
              e.className),
              r = e.strActiveClassName,
              i = e.children,
              o = Object(m.f)(e, [
                "coordinator",
                "data",
                "bEnableHTMLDrag",
                "strHTMLDragData",
                "fnOnDragStart",
                "fnOnDragEnd",
                "fnRenderDragGhost",
                "fnRenderDropGhost",
                "className",
                "strActiveClassName",
                "children"
              ]),
              s = {},
              a = n || "DialogDraggable";
            return (
              this.m_DragInfo.bStarted
                ? ((a = Object(c.a)(a, r || "DraggedOut")),
                  t &&
                    (s = {
                      onDrag: this.ProcessDragMove,
                      onDragEnd: this.OnHTMLDragEnd
                    }))
                : (s = t
                    ? {
                        onDragStart: this.OnHTMLDragStart,
                        onDrag: this.ProcessDragMove,
                        onDragEnd: this.OnHTMLDragEnd
                      }
                    : {
                        onMouseDown: this.OnMouseDown,
                        onTouchStart: this.OnTouchStart
                      }),
              f.createElement(
                "div",
                Object(m.a)({ ref: this.m_divRef, className: a }, s, o, {
                  draggable: t
                }),
                i
              )
            );
          }),
          (e.prototype.renderDropGhost = function() {
            return this.props.fnRenderDropGhost
              ? this.props.fnRenderDropGhost()
              : f.createElement(Q, { elContent: this.GetClone() });
          }),
          (e.prototype.renderDragGhost = function() {
            return this.props.fnRenderDragGhost
              ? this.props.fnRenderDragGhost()
              : f.createElement(Z, {
                  elContent: this.GetClone(),
                  offsetX: this.m_DragInfo.startOffsetX,
                  offsetY: this.m_DragInfo.startOffsetY,
                  width: this.m_DragInfo.startWidth,
                  height: this.m_DragInfo.startHeight
                });
          }),
          (e.prototype.GetClone = function() {
            var e,
              t = this.m_divRef.current;
            if (t && t.childElementCount)
              if (1 == t.childElementCount)
                e = t.firstElementChild.cloneNode(!0);
              else {
                e = document.createElement("div");
                for (var n = t.firstChild; n; n = n.nextSibling)
                  e.appendChild(n.cloneNode(!0));
              }
            return e;
          }),
          Object(m.c)([r.a], e.prototype, "ProcessDragMove", null),
          Object(m.c)([r.a], e.prototype, "OnMouseDown", null),
          Object(m.c)([r.a], e.prototype, "OnMouseUp", null),
          Object(m.c)([r.a], e.prototype, "OnTouchStart", null),
          Object(m.c)([r.a], e.prototype, "OnTouchEnd", null),
          Object(m.c)([H.f], e.prototype, "ResetDragState", null),
          Object(m.c)([r.a], e.prototype, "OnHTMLDragStart", null),
          Object(m.c)([r.a], e.prototype, "OnHTMLDragEnd", null),
          e
        );
      })(f.Component),
      Q = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(m.d)(t, e),
          (t.prototype.OnRef = function(e) {
            e && e.appendChild(this.props.elContent);
          }),
          (t.prototype.render = function() {
            return f.createElement("div", {
              className: "DialogDraggable_DropGhost",
              ref: this.OnRef
            });
          }),
          Object(m.c)([r.a], t.prototype, "OnRef", null),
          t
        );
      })(f.Component),
      Z = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this;
          return (
            (e.state = {
              clientX: void 0,
              clientY: void 0,
              bVisible: !0,
              clientXDelta: void 0,
              clientYDelta: void 0
            }),
            e
          );
        }
        return (
          Object(m.d)(e, t),
          (e.prototype.OnRef = function(e) {
            e && e.appendChild(this.props.elContent);
          }),
          (e.prototype.CalculateRotationDegrees = function(e) {
            return !e || Math.abs(e) < 4
              ? 0
              : (0 < e ? 7.5 : -7.5) * Math.sqrt(Math.abs(e));
          }),
          (e.prototype.render = function() {
            if (
              !this.state.bVisible ||
              void 0 === this.state.clientX ||
              void 0 === this.state.clientY
            )
              return f.createElement("div", null);
            var e = {
                left: this.state.clientX - (this.props.offsetX || 0),
                top: this.state.clientY - (this.props.offsetY || 0),
                width: this.props.width || "auto",
                height: this.props.height || "auto",
                perspective: "600px"
              },
              t = Y.c(
                this.CalculateRotationDegrees(this.state.clientYDelta),
                -90,
                90,
                2,
                0
              ),
              n = {
                transform:
                  "rotateX(" +
                  this.CalculateRotationDegrees(-1 * this.state.clientYDelta) +
                  "deg) rotateY( " +
                  this.CalculateRotationDegrees(this.state.clientXDelta) +
                  "deg)",
                transition: "transform .16s ease-out, filter .16s ease-out",
                filter: "brightness(" + t + ")"
              },
              r = this.props.className || "DialogDraggable_DragGhost";
            return f.createElement(
              "div",
              { className: r, style: e },
              f.createElement("div", { ref: this.OnRef, style: n })
            );
          }),
          Object(m.c)([r.a], e.prototype, "OnRef", null),
          e
        );
      })(f.Component),
      $ = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(m.d)(t, e),
          (t.prototype.BDraggableInRegion = function(e, t, n) {
            var r = this.GetClientRect();
            return (
              !!r &&
              (e >= r.left &&
                e <= r.right &&
                t >= r.top - 20 &&
                t <= r.bottom + 20)
            );
          }),
          t
        );
      })(
        (function(n) {
          function e(e) {
            var t = n.call(this, e) || this;
            return (t.m_divRef = f.createRef()), (t.state = {}), t;
          }
          return (
            Object(m.d)(e, n),
            (e.prototype.componentDidMount = function() {
              this.props.coordinator.RegisterDropRegion(this);
            }),
            (e.prototype.componentWillUnmount = function() {
              this.props.coordinator.UnregisterDropRegion(this);
            }),
            (e.prototype.OnDragStarted = function(e) {
              this.setState({ bDraggableActive: !0 });
            }),
            (e.prototype.OnDragEnded = function(e) {
              this.setState({ bDraggableActive: !1 });
            }),
            (e.prototype.OnDragEnter = function(e, t) {
              this.setState({ dropGhost: t }),
                this.props.fnOnDragEnter && this.props.fnOnDragEnter(e);
            }),
            (e.prototype.OnDragLeave = function(e) {
              this.setState({ dropGhost: void 0 }),
                this.props.fnOnDragLeave && this.props.fnOnDragLeave(e);
            }),
            (e.prototype.OnDragMove = function(e, t, n) {}),
            (e.prototype.OnDrop = function(e) {
              this.setState({ dropGhost: void 0 }), this.props.fnOnDrop(e);
            }),
            (e.prototype.BAcceptDraggable = function(e) {
              return (
                !this.props.fnBAcceptDraggable ||
                this.props.fnBAcceptDraggable(e)
              );
            }),
            (e.prototype.BDraggableInRegion = function(e, t, n) {
              return X(e, t, this.GetClientRect());
            }),
            (e.prototype.GetElement = function() {
              return this.m_divRef.current;
            }),
            (e.prototype.GetClientRect = function() {
              return (
                this.m_divRef.current &&
                this.m_divRef.current.getBoundingClientRect()
              );
            }),
            (e.prototype.render = function() {
              var e = this.props,
                t = (e.coordinator,
                e.fnBAcceptDraggable,
                e.fnOnDrop,
                e.fnOnDragEnter,
                e.fnOnDragLeave,
                e.className),
                n = e.strActiveClassName,
                r = e.children,
                i = Object(m.f)(e, [
                  "coordinator",
                  "fnBAcceptDraggable",
                  "fnOnDrop",
                  "fnOnDragEnter",
                  "fnOnDragLeave",
                  "className",
                  "strActiveClassName",
                  "children"
                ]),
                o = Object(c.a)(
                  t || "DialogDropRegion",
                  this.state.bDraggableActive && (n || "Active")
                );
              return f.createElement(
                K.a,
                Object(m.a)(
                  {
                    navStop: !!i.onClick,
                    htmlElementRef: this.m_divRef,
                    className: o
                  },
                  i
                ),
                this.state.dropGhost,
                r
              );
            }),
            e
          );
        })(f.Component)
      ),
      ee = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return Object(m.d)(t, e), t;
      })(f.Component),
      te = (f.Component,
      (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this;
          return (
            (e.m_refTextArea = f.createRef()),
            (e.m_cEntryLength = Number.MAX_VALUE),
            e
          );
        }
        return (
          Object(m.d)(e, t),
          Object.defineProperty(e.prototype, "textarea", {
            get: function() {
              return this.m_refTextArea.current;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "value", {
            get: function() {
              return (
                this.m_refTextArea.current && this.m_refTextArea.current.value
              );
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.focus = function() {
            this.m_refTextArea.current.focus();
          }),
          (e.prototype.InternalOnInput = function() {
            var e,
              t = this.m_refTextArea.current,
              n = this.GetMinHeight(),
              r = this.GetMaxHeight(),
              i = t.value.length;
            if (
              (void 0 === this.m_nTextAreaPadding && this.CalculatePadding(),
              i < this.m_cEntryLength &&
                ((e = window.scrollY), (t.style.height = n + "px")),
              t.scrollHeight > r)
            )
              (t.style.height = r + "px"), (t.style.overflow = "auto");
            else if (t.scrollHeight != t.clientHeight) {
              var o = Math.max(t.scrollHeight, n);
              (t.style.height = o - this.m_nTextAreaPadding + "px"),
                "auto" == t.style.overflow && (t.style.overflow = "hidden");
            }
            void 0 !== e && window.scrollTo(window.scrollX, e),
              (this.m_cEntryLength = i);
          }),
          (e.prototype.CalculatePadding = function() {
            var e = getComputedStyle(this.m_refTextArea.current);
            this.m_nTextAreaPadding =
              parseFloat(e.paddingTop) + parseFloat(e.paddingBottom);
          }),
          (e.prototype.GetMinHeight = function() {
            return this.props.nMinHeight || 20;
          }),
          (e.prototype.GetMaxHeight = function() {
            return this.props.nMaxHeight || 500;
          }),
          (e.prototype.DeferredInternalOnInput = function() {
            window.setTimeout(this.InternalOnInput, 1);
          }),
          (e.prototype.OnKeyUp = function(e) {
            this.InternalOnInput(), this.props.onKeyUp && this.props.onKeyUp(e);
          }),
          (e.prototype.OnBlur = function(e) {
            this.DeferredInternalOnInput(),
              this.props.onBlur && this.props.onBlur(e);
          }),
          (e.prototype.OnClick = function(e) {
            this.InternalOnInput(), this.props.onClick && this.props.onClick(e);
          }),
          (e.prototype.OnPaste = function(e) {
            this.DeferredInternalOnInput(),
              this.props.onPaste && this.props.onPaste(e);
          }),
          (e.prototype.OnCut = function(e) {
            this.InternalOnInput(), this.props.onCut && this.props.onCut(e);
          }),
          (e.prototype.componentDidMount = function() {
            (this.m_refTextArea.current.style.overflow = "hidden"),
              (this.m_refTextArea.current.style.resize = "none"),
              this.InternalOnInput();
          }),
          (e.prototype.componentDidUpdate = function(e) {
            (e.nMinHeight == this.props.nMinHeight &&
              e.nMaxHeight == this.props.nMaxHeight) ||
              (this.m_cEntryLength = Number.MAX_VALUE),
              this.m_refTextArea.current.value.length != this.m_cEntryLength &&
                this.InternalOnInput();
          }),
          (e.prototype.render = function() {
            var e = this.props,
              t = (e.nMinHeight,
              e.nMaxHeight,
              Object(m.f)(e, ["nMinHeight", "nMaxHeight"]));
            return f.createElement(
              "textarea",
              Object(m.a)({}, t, {
                ref: this.m_refTextArea,
                onKeyUp: this.OnKeyUp,
                onBlur: this.OnBlur,
                onClick: this.OnClick,
                onPaste: this.OnPaste,
                onCut: this.OnCut
              })
            );
          }),
          Object(m.c)([r.a], e.prototype, "InternalOnInput", null),
          Object(m.c)([r.a], e.prototype, "OnKeyUp", null),
          Object(m.c)([r.a], e.prototype, "OnBlur", null),
          Object(m.c)([r.a], e.prototype, "OnClick", null),
          Object(m.c)([r.a], e.prototype, "OnPaste", null),
          Object(m.c)([r.a], e.prototype, "OnCut", null),
          e
        );
      })(f.Component));
    n.d(t, "l", function() {
      return l;
    }),
      n.d(t, "u", function() {
        return u;
      }),
      n.d(t, "j", function() {
        return p;
      }),
      n.d(t, "n", function() {
        return d;
      }),
      n.d(t, "c", function() {
        return h;
      }),
      n.d(t, "b", function() {
        return v;
      }),
      n.d(t, "f", function() {
        return M;
      }),
      n.d(t, "g", function() {
        return O;
      }),
      n.d(t, "r", function() {
        return S;
      }),
      n.d(t, "d", function() {
        return k;
      }),
      n.d(t, "t", function() {
        return C;
      }),
      n.d(t, "k", function() {
        return D;
      }),
      n.d(t, "o", function() {
        return F;
      }),
      n.d(t, "p", function() {
        return I;
      }),
      n.d(t, "e", function() {
        return L;
      }),
      n.d(t, "q", function() {
        return j;
      }),
      n.d(t, "m", function() {
        return N;
      }),
      n.d(t, "s", function() {
        return A;
      }),
      n.d(t, "h", function() {
        return U;
      }),
      n.d(t, "i", function() {
        return z;
      }),
      n.d(t, "a", function() {
        return te;
      });
  },
  "RD/U": function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
      return r;
    }),
      n.d(t, "d", function() {
        return s;
      }),
      n.d(t, "a", function() {
        return a;
      }),
      n.d(t, "b", function() {
        return l;
      });
    var i = n("mrSG"),
      o = n("hRO2");
    var r = (function(n) {
        function r(e) {
          void 0 === e && (e = null);
          var t = n.call(this) || this;
          return o.Message.initialize(t, e, 0, -1, void 0, null), t;
        }
        return (
          Object(i.d)(r, n),
          (r.prototype.v4 = function() {
            return o.Message.getField(this, 1);
          }),
          (r.prototype.set_v4 = function(e) {
            o.Message.setField(this, 1, e);
          }),
          (r.prototype.v6 = function() {
            return o.Message.getField(this, 2);
          }),
          (r.prototype.set_v6 = function(e) {
            o.Message.setField(this, 2, e);
          }),
          (r.prototype.toObject = function(e) {
            return void 0 === e && (e = !1), r.toObject(e, this);
          }),
          (r.toObject = function(e, t) {
            var n = {
              v4: o.Message.getField(t, 1),
              v6: o.Message.getField(t, 2)
            };
            return e && (n.$jspbMessageInstance = t), n;
          }),
          (r.fromObject = function(e) {
            var t = new r();
            return t.set_v4(e.v4), t.set_v6(e.v6), t;
          }),
          (r.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e),
              n = new r();
            return r.deserializeBinaryFromReader(n, t);
          }),
          (r.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  e.set_v4(t.readFixed32());
                  break;
                case 2:
                  e.set_v6(t.readBytes());
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
          (r.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter();
            return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }),
          (r.serializeBinaryToWriter = function(e, t) {
            var n;
            void 0 !== (n = o.Message.getField(e, 1)) && t.writeFixed32(1, n),
              void 0 !== (n = o.Message.getField(e, 2)) && t.writeBytes(2, n);
          }),
          (r.prototype.getClassName = function() {
            return "CMsgIPAddress";
          }),
          r
        );
      })(o.Message),
      s = (o.Message,
      (function(n) {
        function r(e) {
          void 0 === e && (e = null);
          var t = n.call(this) || this;
          return o.Message.initialize(t, e, 0, -1, [27], null), t;
        }
        return (
          Object(i.d)(r, n),
          (r.prototype.steamid = function() {
            return o.Message.getField(this, 1);
          }),
          (r.prototype.set_steamid = function(e) {
            o.Message.setField(this, 1, e);
          }),
          (r.prototype.client_sessionid = function() {
            return o.Message.getField(this, 2);
          }),
          (r.prototype.set_client_sessionid = function(e) {
            o.Message.setField(this, 2, e);
          }),
          (r.prototype.routing_appid = function() {
            return o.Message.getField(this, 3);
          }),
          (r.prototype.set_routing_appid = function(e) {
            o.Message.setField(this, 3, e);
          }),
          (r.prototype.jobid_source = function() {
            return o.Message.getFieldWithDefault(
              this,
              10,
              "18446744073709551615"
            );
          }),
          (r.prototype.set_jobid_source = function(e) {
            o.Message.setField(this, 10, e);
          }),
          (r.prototype.jobid_target = function() {
            return o.Message.getFieldWithDefault(
              this,
              11,
              "18446744073709551615"
            );
          }),
          (r.prototype.set_jobid_target = function(e) {
            o.Message.setField(this, 11, e);
          }),
          (r.prototype.target_job_name = function() {
            return o.Message.getField(this, 12);
          }),
          (r.prototype.set_target_job_name = function(e) {
            o.Message.setField(this, 12, e);
          }),
          (r.prototype.seq_num = function() {
            return o.Message.getField(this, 24);
          }),
          (r.prototype.set_seq_num = function(e) {
            o.Message.setField(this, 24, e);
          }),
          (r.prototype.eresult = function() {
            return o.Message.getFieldWithDefault(this, 13, 2);
          }),
          (r.prototype.set_eresult = function(e) {
            o.Message.setField(this, 13, e);
          }),
          (r.prototype.error_message = function() {
            return o.Message.getField(this, 14);
          }),
          (r.prototype.set_error_message = function(e) {
            o.Message.setField(this, 14, e);
          }),
          (r.prototype.ip = function() {
            return o.Message.getField(this, 15);
          }),
          (r.prototype.set_ip = function(e) {
            o.Message.setField(this, 15, e);
          }),
          (r.prototype.ip_v6 = function() {
            return o.Message.getField(this, 29);
          }),
          (r.prototype.set_ip_v6 = function(e) {
            o.Message.setField(this, 29, e);
          }),
          (r.prototype.auth_account_flags = function() {
            return o.Message.getField(this, 16);
          }),
          (r.prototype.set_auth_account_flags = function(e) {
            o.Message.setField(this, 16, e);
          }),
          (r.prototype.token_source = function() {
            return o.Message.getField(this, 22);
          }),
          (r.prototype.set_token_source = function(e) {
            o.Message.setField(this, 22, e);
          }),
          (r.prototype.admin_spoofing_user = function() {
            return o.Message.getField(this, 23);
          }),
          (r.prototype.set_admin_spoofing_user = function(e) {
            o.Message.setField(this, 23, e);
          }),
          (r.prototype.transport_error = function() {
            return o.Message.getFieldWithDefault(this, 17, 1);
          }),
          (r.prototype.set_transport_error = function(e) {
            o.Message.setField(this, 17, e);
          }),
          (r.prototype.messageid = function() {
            return o.Message.getFieldWithDefault(
              this,
              18,
              "18446744073709551615"
            );
          }),
          (r.prototype.set_messageid = function(e) {
            o.Message.setField(this, 18, e);
          }),
          (r.prototype.publisher_group_id = function() {
            return o.Message.getField(this, 19);
          }),
          (r.prototype.set_publisher_group_id = function(e) {
            o.Message.setField(this, 19, e);
          }),
          (r.prototype.sysid = function() {
            return o.Message.getField(this, 20);
          }),
          (r.prototype.set_sysid = function(e) {
            o.Message.setField(this, 20, e);
          }),
          (r.prototype.trace_tag = function() {
            return o.Message.getField(this, 21);
          }),
          (r.prototype.set_trace_tag = function(e) {
            o.Message.setField(this, 21, e);
          }),
          (r.prototype.webapi_key_id = function() {
            return o.Message.getField(this, 25);
          }),
          (r.prototype.set_webapi_key_id = function(e) {
            o.Message.setField(this, 25, e);
          }),
          (r.prototype.is_from_external_source = function() {
            return o.Message.getField(this, 26);
          }),
          (r.prototype.set_is_from_external_source = function(e) {
            o.Message.setField(this, 26, e);
          }),
          (r.prototype.forward_to_sysid = function() {
            return o.Message.getField(this, 27);
          }),
          (r.prototype.set_forward_to_sysid = function(e) {
            o.Message.setField(this, 27, e);
          }),
          (r.prototype.add_forward_to_sysid = function(e, t) {
            o.Message.addToRepeatedField(this, 27, e, t);
          }),
          (r.prototype.cm_sysid = function() {
            return o.Message.getField(this, 28);
          }),
          (r.prototype.set_cm_sysid = function(e) {
            o.Message.setField(this, 28, e);
          }),
          (r.prototype.wg_token = function() {
            return o.Message.getField(this, 30);
          }),
          (r.prototype.set_wg_token = function(e) {
            o.Message.setField(this, 30, e);
          }),
          (r.prototype.launcher_type = function() {
            return o.Message.getFieldWithDefault(this, 31, 0);
          }),
          (r.prototype.set_launcher_type = function(e) {
            o.Message.setField(this, 31, e);
          }),
          (r.prototype.realm = function() {
            return o.Message.getFieldWithDefault(this, 32, 0);
          }),
          (r.prototype.set_realm = function(e) {
            o.Message.setField(this, 32, e);
          }),
          (r.prototype.toObject = function(e) {
            return void 0 === e && (e = !1), r.toObject(e, this);
          }),
          (r.toObject = function(e, t) {
            var n = {
              steamid: o.Message.getField(t, 1),
              client_sessionid: o.Message.getField(t, 2),
              routing_appid: o.Message.getField(t, 3),
              jobid_source: o.Message.getFieldWithDefault(
                t,
                10,
                "18446744073709551615"
              ),
              jobid_target: o.Message.getFieldWithDefault(
                t,
                11,
                "18446744073709551615"
              ),
              target_job_name: o.Message.getField(t, 12),
              seq_num: o.Message.getField(t, 24),
              eresult: o.Message.getFieldWithDefault(t, 13, 2),
              error_message: o.Message.getField(t, 14),
              ip: o.Message.getField(t, 15),
              ip_v6: o.Message.getField(t, 29),
              auth_account_flags: o.Message.getField(t, 16),
              token_source: o.Message.getField(t, 22),
              admin_spoofing_user: o.Message.getField(t, 23),
              transport_error: o.Message.getFieldWithDefault(t, 17, 1),
              messageid: o.Message.getFieldWithDefault(
                t,
                18,
                "18446744073709551615"
              ),
              publisher_group_id: o.Message.getField(t, 19),
              sysid: o.Message.getField(t, 20),
              trace_tag: o.Message.getField(t, 21),
              webapi_key_id: o.Message.getField(t, 25),
              is_from_external_source: o.Message.getField(t, 26),
              forward_to_sysid: o.Message.getField(t, 27),
              cm_sysid: o.Message.getField(t, 28),
              wg_token: o.Message.getField(t, 30),
              launcher_type: o.Message.getFieldWithDefault(t, 31, 0),
              realm: o.Message.getFieldWithDefault(t, 32, 0)
            };
            return e && (n.$jspbMessageInstance = t), n;
          }),
          (r.fromObject = function(e) {
            var t = new r();
            return (
              t.set_steamid(e.steamid),
              t.set_client_sessionid(e.client_sessionid),
              t.set_routing_appid(e.routing_appid),
              t.set_jobid_source(e.jobid_source),
              t.set_jobid_target(e.jobid_target),
              t.set_target_job_name(e.target_job_name),
              t.set_seq_num(e.seq_num),
              t.set_eresult(e.eresult),
              t.set_error_message(e.error_message),
              t.set_ip(e.ip),
              t.set_ip_v6(e.ip_v6),
              t.set_auth_account_flags(e.auth_account_flags),
              t.set_token_source(e.token_source),
              t.set_admin_spoofing_user(e.admin_spoofing_user),
              t.set_transport_error(e.transport_error),
              t.set_messageid(e.messageid),
              t.set_publisher_group_id(e.publisher_group_id),
              t.set_sysid(e.sysid),
              t.set_trace_tag(e.trace_tag),
              t.set_webapi_key_id(e.webapi_key_id),
              t.set_is_from_external_source(e.is_from_external_source),
              t.set_forward_to_sysid(e.forward_to_sysid),
              t.set_cm_sysid(e.cm_sysid),
              t.set_wg_token(e.wg_token),
              t.set_launcher_type(e.launcher_type),
              t.set_realm(e.realm),
              t
            );
          }),
          (r.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e),
              n = new r();
            return r.deserializeBinaryFromReader(n, t);
          }),
          (r.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  e.set_steamid(t.readFixed64String());
                  break;
                case 2:
                  e.set_client_sessionid(t.readInt32());
                  break;
                case 3:
                  e.set_routing_appid(t.readUint32());
                  break;
                case 10:
                  e.set_jobid_source(t.readFixed64String());
                  break;
                case 11:
                  e.set_jobid_target(t.readFixed64String());
                  break;
                case 12:
                  e.set_target_job_name(t.readString());
                  break;
                case 24:
                  e.set_seq_num(t.readInt32());
                  break;
                case 13:
                  e.set_eresult(t.readInt32());
                  break;
                case 14:
                  e.set_error_message(t.readString());
                  break;
                case 15:
                  e.set_ip(t.readUint32());
                  break;
                case 29:
                  e.set_ip_v6(t.readBytes());
                  break;
                case 16:
                  e.set_auth_account_flags(t.readUint32());
                  break;
                case 22:
                  e.set_token_source(t.readUint32());
                  break;
                case 23:
                  e.set_admin_spoofing_user(t.readBool());
                  break;
                case 17:
                  e.set_transport_error(t.readInt32());
                  break;
                case 18:
                  e.set_messageid(t.readUint64String());
                  break;
                case 19:
                  e.set_publisher_group_id(t.readUint32());
                  break;
                case 20:
                  e.set_sysid(t.readUint32());
                  break;
                case 21:
                  e.set_trace_tag(t.readUint64String());
                  break;
                case 25:
                  e.set_webapi_key_id(t.readUint32());
                  break;
                case 26:
                  e.set_is_from_external_source(t.readBool());
                  break;
                case 27:
                  e.add_forward_to_sysid(t.readUint32());
                  break;
                case 28:
                  e.set_cm_sysid(t.readUint32());
                  break;
                case 30:
                  e.set_wg_token(t.readString());
                  break;
                case 31:
                  e.set_launcher_type(t.readUint32());
                  break;
                case 32:
                  e.set_realm(t.readUint32());
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
          (r.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter();
            return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }),
          (r.serializeBinaryToWriter = function(e, t) {
            var n;
            void 0 !== (n = o.Message.getField(e, 1)) &&
              t.writeFixed64String(1, n),
              void 0 !== (n = o.Message.getField(e, 2)) && t.writeInt32(2, n),
              void 0 !== (n = o.Message.getField(e, 3)) && t.writeUint32(3, n),
              void 0 !== (n = o.Message.getField(e, 10)) &&
                t.writeFixed64String(10, n),
              void 0 !== (n = o.Message.getField(e, 11)) &&
                t.writeFixed64String(11, n),
              void 0 !== (n = o.Message.getField(e, 12)) &&
                t.writeString(12, n),
              void 0 !== (n = o.Message.getField(e, 24)) && t.writeInt32(24, n),
              void 0 !== (n = o.Message.getField(e, 13)) && t.writeInt32(13, n),
              void 0 !== (n = o.Message.getField(e, 14)) &&
                t.writeString(14, n),
              void 0 !== (n = o.Message.getField(e, 15)) &&
                t.writeUint32(15, n),
              void 0 !== (n = o.Message.getField(e, 29)) && t.writeBytes(29, n),
              void 0 !== (n = o.Message.getField(e, 16)) &&
                t.writeUint32(16, n),
              void 0 !== (n = o.Message.getField(e, 22)) &&
                t.writeUint32(22, n),
              void 0 !== (n = o.Message.getField(e, 23)) && t.writeBool(23, n),
              void 0 !== (n = o.Message.getField(e, 17)) && t.writeInt32(17, n),
              void 0 !== (n = o.Message.getField(e, 18)) &&
                t.writeUint64String(18, n),
              void 0 !== (n = o.Message.getField(e, 19)) &&
                t.writeUint32(19, n),
              void 0 !== (n = o.Message.getField(e, 20)) &&
                t.writeUint32(20, n),
              void 0 !== (n = o.Message.getField(e, 21)) &&
                t.writeUint64String(21, n),
              void 0 !== (n = o.Message.getField(e, 25)) &&
                t.writeUint32(25, n),
              void 0 !== (n = o.Message.getField(e, 26)) && t.writeBool(26, n),
              void 0 !== (n = o.Message.getField(e, 27)) &&
                t.writeRepeatedUint32(27, n),
              void 0 !== (n = o.Message.getField(e, 28)) &&
                t.writeUint32(28, n),
              void 0 !== (n = o.Message.getField(e, 30)) &&
                t.writeString(30, n),
              void 0 !== (n = o.Message.getField(e, 31)) &&
                t.writeUint32(31, n),
              void 0 !== (n = o.Message.getField(e, 32)) &&
                t.writeUint32(32, n);
          }),
          (r.prototype.getClassName = function() {
            return "CMsgProtoBufHeader";
          }),
          r
        );
      })(o.Message)),
      a = (o.Message,
      o.Message,
      o.Message,
      (function(n) {
        function r(e) {
          void 0 === e && (e = null);
          var t = n.call(this) || this;
          return o.Message.initialize(t, e, 0, -1, void 0, null), t;
        }
        return (
          Object(i.d)(r, n),
          (r.prototype.appid = function() {
            return o.Message.getField(this, 1);
          }),
          (r.prototype.set_appid = function(e) {
            o.Message.setField(this, 1, e);
          }),
          (r.prototype.name = function() {
            return o.Message.getField(this, 2);
          }),
          (r.prototype.set_name = function(e) {
            o.Message.setField(this, 2, e);
          }),
          (r.prototype.icon = function() {
            return o.Message.getField(this, 3);
          }),
          (r.prototype.set_icon = function(e) {
            o.Message.setField(this, 3, e);
          }),
          (r.prototype.logo = function() {
            return o.Message.getField(this, 4);
          }),
          (r.prototype.set_logo = function(e) {
            o.Message.setField(this, 4, e);
          }),
          (r.prototype.logo_small = function() {
            return o.Message.getField(this, 5);
          }),
          (r.prototype.set_logo_small = function(e) {
            o.Message.setField(this, 5, e);
          }),
          (r.prototype.tool = function() {
            return o.Message.getField(this, 6);
          }),
          (r.prototype.set_tool = function(e) {
            o.Message.setField(this, 6, e);
          }),
          (r.prototype.demo = function() {
            return o.Message.getField(this, 7);
          }),
          (r.prototype.set_demo = function(e) {
            o.Message.setField(this, 7, e);
          }),
          (r.prototype.media = function() {
            return o.Message.getField(this, 8);
          }),
          (r.prototype.set_media = function(e) {
            o.Message.setField(this, 8, e);
          }),
          (r.prototype.community_visible_stats = function() {
            return o.Message.getField(this, 9);
          }),
          (r.prototype.set_community_visible_stats = function(e) {
            o.Message.setField(this, 9, e);
          }),
          (r.prototype.friendly_name = function() {
            return o.Message.getField(this, 10);
          }),
          (r.prototype.set_friendly_name = function(e) {
            o.Message.setField(this, 10, e);
          }),
          (r.prototype.propagation = function() {
            return o.Message.getField(this, 11);
          }),
          (r.prototype.set_propagation = function(e) {
            o.Message.setField(this, 11, e);
          }),
          (r.prototype.has_adult_content = function() {
            return o.Message.getField(this, 12);
          }),
          (r.prototype.set_has_adult_content = function(e) {
            o.Message.setField(this, 12, e);
          }),
          (r.prototype.toObject = function(e) {
            return void 0 === e && (e = !1), r.toObject(e, this);
          }),
          (r.toObject = function(e, t) {
            var n = {
              appid: o.Message.getField(t, 1),
              name: o.Message.getField(t, 2),
              icon: o.Message.getField(t, 3),
              logo: o.Message.getField(t, 4),
              logo_small: o.Message.getField(t, 5),
              tool: o.Message.getField(t, 6),
              demo: o.Message.getField(t, 7),
              media: o.Message.getField(t, 8),
              community_visible_stats: o.Message.getField(t, 9),
              friendly_name: o.Message.getField(t, 10),
              propagation: o.Message.getField(t, 11),
              has_adult_content: o.Message.getField(t, 12)
            };
            return e && (n.$jspbMessageInstance = t), n;
          }),
          (r.fromObject = function(e) {
            var t = new r();
            return (
              t.set_appid(e.appid),
              t.set_name(e.name),
              t.set_icon(e.icon),
              t.set_logo(e.logo),
              t.set_logo_small(e.logo_small),
              t.set_tool(e.tool),
              t.set_demo(e.demo),
              t.set_media(e.media),
              t.set_community_visible_stats(e.community_visible_stats),
              t.set_friendly_name(e.friendly_name),
              t.set_propagation(e.propagation),
              t.set_has_adult_content(e.has_adult_content),
              t
            );
          }),
          (r.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e),
              n = new r();
            return r.deserializeBinaryFromReader(n, t);
          }),
          (r.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  e.set_appid(t.readUint32());
                  break;
                case 2:
                  e.set_name(t.readString());
                  break;
                case 3:
                  e.set_icon(t.readString());
                  break;
                case 4:
                  e.set_logo(t.readString());
                  break;
                case 5:
                  e.set_logo_small(t.readString());
                  break;
                case 6:
                  e.set_tool(t.readBool());
                  break;
                case 7:
                  e.set_demo(t.readBool());
                  break;
                case 8:
                  e.set_media(t.readBool());
                  break;
                case 9:
                  e.set_community_visible_stats(t.readBool());
                  break;
                case 10:
                  e.set_friendly_name(t.readString());
                  break;
                case 11:
                  e.set_propagation(t.readString());
                  break;
                case 12:
                  e.set_has_adult_content(t.readBool());
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
          (r.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter();
            return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }),
          (r.serializeBinaryToWriter = function(e, t) {
            var n;
            void 0 !== (n = o.Message.getField(e, 1)) && t.writeUint32(1, n),
              void 0 !== (n = o.Message.getField(e, 2)) && t.writeString(2, n),
              void 0 !== (n = o.Message.getField(e, 3)) && t.writeString(3, n),
              void 0 !== (n = o.Message.getField(e, 4)) && t.writeString(4, n),
              void 0 !== (n = o.Message.getField(e, 5)) && t.writeString(5, n),
              void 0 !== (n = o.Message.getField(e, 6)) && t.writeBool(6, n),
              void 0 !== (n = o.Message.getField(e, 7)) && t.writeBool(7, n),
              void 0 !== (n = o.Message.getField(e, 8)) && t.writeBool(8, n),
              void 0 !== (n = o.Message.getField(e, 9)) && t.writeBool(9, n),
              void 0 !== (n = o.Message.getField(e, 10)) &&
                t.writeString(10, n),
              void 0 !== (n = o.Message.getField(e, 11)) &&
                t.writeString(11, n),
              void 0 !== (n = o.Message.getField(e, 12)) && t.writeBool(12, n);
          }),
          (r.prototype.getClassName = function() {
            return "CCDDBAppDetailCommon";
          }),
          r
        );
      })(o.Message)),
      c = (o.Message,
      o.Message,
      o.Message,
      (function(n) {
        function r(e) {
          void 0 === e && (e = null);
          var t = n.call(this) || this;
          return o.Message.initialize(t, e, 0, -1, void 0, null), t;
        }
        return (
          Object(i.d)(r, n),
          (r.prototype.clanid = function() {
            return o.Message.getField(this, 1);
          }),
          (r.prototype.set_clanid = function(e) {
            o.Message.setField(this, 1, e);
          }),
          (r.prototype.event_gid = function() {
            return o.Message.getField(this, 2);
          }),
          (r.prototype.set_event_gid = function(e) {
            o.Message.setField(this, 2, e);
          }),
          (r.prototype.announcement_gid = function() {
            return o.Message.getField(this, 3);
          }),
          (r.prototype.set_announcement_gid = function(e) {
            o.Message.setField(this, 3, e);
          }),
          (r.prototype.rtime_start = function() {
            return o.Message.getField(this, 4);
          }),
          (r.prototype.set_rtime_start = function(e) {
            o.Message.setField(this, 4, e);
          }),
          (r.prototype.rtime_end = function() {
            return o.Message.getField(this, 5);
          }),
          (r.prototype.set_rtime_end = function(e) {
            o.Message.setField(this, 5, e);
          }),
          (r.prototype.priority_score = function() {
            return o.Message.getField(this, 6);
          }),
          (r.prototype.set_priority_score = function(e) {
            o.Message.setField(this, 6, e);
          }),
          (r.prototype.type = function() {
            return o.Message.getField(this, 7);
          }),
          (r.prototype.set_type = function(e) {
            o.Message.setField(this, 7, e);
          }),
          (r.prototype.clamp_range_slot = function() {
            return o.Message.getField(this, 8);
          }),
          (r.prototype.set_clamp_range_slot = function(e) {
            o.Message.setField(this, 8, e);
          }),
          (r.prototype.appid = function() {
            return o.Message.getField(this, 9);
          }),
          (r.prototype.set_appid = function(e) {
            o.Message.setField(this, 9, e);
          }),
          (r.prototype.rtime32_last_modified = function() {
            return o.Message.getField(this, 10);
          }),
          (r.prototype.set_rtime32_last_modified = function(e) {
            o.Message.setField(this, 10, e);
          }),
          (r.prototype.toObject = function(e) {
            return void 0 === e && (e = !1), r.toObject(e, this);
          }),
          (r.toObject = function(e, t) {
            var n = {
              clanid: o.Message.getField(t, 1),
              event_gid: o.Message.getField(t, 2),
              announcement_gid: o.Message.getField(t, 3),
              rtime_start: o.Message.getField(t, 4),
              rtime_end: o.Message.getField(t, 5),
              priority_score: o.Message.getField(t, 6),
              type: o.Message.getField(t, 7),
              clamp_range_slot: o.Message.getField(t, 8),
              appid: o.Message.getField(t, 9),
              rtime32_last_modified: o.Message.getField(t, 10)
            };
            return e && (n.$jspbMessageInstance = t), n;
          }),
          (r.fromObject = function(e) {
            var t = new r();
            return (
              t.set_clanid(e.clanid),
              t.set_event_gid(e.event_gid),
              t.set_announcement_gid(e.announcement_gid),
              t.set_rtime_start(e.rtime_start),
              t.set_rtime_end(e.rtime_end),
              t.set_priority_score(e.priority_score),
              t.set_type(e.type),
              t.set_clamp_range_slot(e.clamp_range_slot),
              t.set_appid(e.appid),
              t.set_rtime32_last_modified(e.rtime32_last_modified),
              t
            );
          }),
          (r.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e),
              n = new r();
            return r.deserializeBinaryFromReader(n, t);
          }),
          (r.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  e.set_clanid(t.readUint32());
                  break;
                case 2:
                  e.set_event_gid(t.readFixed64String());
                  break;
                case 3:
                  e.set_announcement_gid(t.readFixed64String());
                  break;
                case 4:
                  e.set_rtime_start(t.readUint32());
                  break;
                case 5:
                  e.set_rtime_end(t.readUint32());
                  break;
                case 6:
                  e.set_priority_score(t.readUint32());
                  break;
                case 7:
                  e.set_type(t.readUint32());
                  break;
                case 8:
                  e.set_clamp_range_slot(t.readUint32());
                  break;
                case 9:
                  e.set_appid(t.readUint32());
                  break;
                case 10:
                  e.set_rtime32_last_modified(t.readUint32());
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
          (r.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter();
            return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }),
          (r.serializeBinaryToWriter = function(e, t) {
            var n;
            void 0 !== (n = o.Message.getField(e, 1)) && t.writeUint32(1, n),
              void 0 !== (n = o.Message.getField(e, 2)) &&
                t.writeFixed64String(2, n),
              void 0 !== (n = o.Message.getField(e, 3)) &&
                t.writeFixed64String(3, n),
              void 0 !== (n = o.Message.getField(e, 4)) && t.writeUint32(4, n),
              void 0 !== (n = o.Message.getField(e, 5)) && t.writeUint32(5, n),
              void 0 !== (n = o.Message.getField(e, 6)) && t.writeUint32(6, n),
              void 0 !== (n = o.Message.getField(e, 7)) && t.writeUint32(7, n),
              void 0 !== (n = o.Message.getField(e, 8)) && t.writeUint32(8, n),
              void 0 !== (n = o.Message.getField(e, 9)) && t.writeUint32(9, n),
              void 0 !== (n = o.Message.getField(e, 10)) &&
                t.writeUint32(10, n);
          }),
          (r.prototype.getClassName = function() {
            return "CClanEventUserNewsTuple";
          }),
          r
        );
      })(o.Message)),
      l = (function(n) {
        function r(e) {
          void 0 === e && (e = null);
          var t = n.call(this) || this;
          return o.Message.initialize(t, e, 0, -1, [4], null), t;
        }
        return (
          Object(i.d)(r, n),
          (r.prototype.rtime_before = function() {
            return o.Message.getField(this, 1);
          }),
          (r.prototype.set_rtime_before = function(e) {
            o.Message.setField(this, 1, e);
          }),
          (r.prototype.rtime_after = function() {
            return o.Message.getField(this, 2);
          }),
          (r.prototype.set_rtime_after = function(e) {
            o.Message.setField(this, 2, e);
          }),
          (r.prototype.qualified = function() {
            return o.Message.getField(this, 3);
          }),
          (r.prototype.set_qualified = function(e) {
            o.Message.setField(this, 3, e);
          }),
          (r.prototype.events = function() {
            return o.Message.getRepeatedWrapperField(this, c, 4);
          }),
          (r.prototype.set_events = function(e) {
            o.Message.setRepeatedWrapperField(this, 4, e);
          }),
          (r.prototype.add_events = function(e, t) {
            return o.Message.addToRepeatedWrapperField(this, 4, e, c, t);
          }),
          (r.prototype.toObject = function(e) {
            return void 0 === e && (e = !1), r.toObject(e, this);
          }),
          (r.toObject = function(e, t) {
            var n = {
              rtime_before: o.Message.getField(t, 1),
              rtime_after: o.Message.getField(t, 2),
              qualified: o.Message.getField(t, 3),
              events: o.Message.toObjectList(t.events(), c.toObject, e)
            };
            return e && (n.$jspbMessageInstance = t), n;
          }),
          (r.fromObject = function(e) {
            var t = new r();
            return (
              t.set_rtime_before(e.rtime_before),
              t.set_rtime_after(e.rtime_after),
              t.set_qualified(e.qualified),
              t.set_events(
                (Array.isArray(e.events) ? e.events : []).map(function(e) {
                  return c.fromObject(e);
                })
              ),
              t
            );
          }),
          (r.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e),
              n = new r();
            return r.deserializeBinaryFromReader(n, t);
          }),
          (r.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  e.set_rtime_before(t.readUint32());
                  break;
                case 2:
                  e.set_rtime_after(t.readUint32());
                  break;
                case 3:
                  e.set_qualified(t.readUint32());
                  break;
                case 4:
                  var n = new c();
                  t.readMessage(n, c.deserializeBinaryFromReader),
                    e.add_events(n);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
          (r.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter();
            return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }),
          (r.serializeBinaryToWriter = function(e, t) {
            var n;
            void 0 !== (n = o.Message.getField(e, 1)) && t.writeUint32(1, n),
              void 0 !== (n = o.Message.getField(e, 2)) && t.writeUint32(2, n),
              void 0 !== (n = o.Message.getField(e, 3)) && t.writeUint32(3, n),
              0 < (n = e.events()).length &&
                t.writeRepeatedMessage(4, n, c.serializeBinaryToWriter);
          }),
          (r.prototype.getClassName = function() {
            return "CClanMatchEventByRange";
          }),
          r
        );
      })(o.Message),
      u = (function(n) {
        function r(e) {
          void 0 === e && (e = null);
          var t = n.call(this) || this;
          return o.Message.initialize(t, e, 0, -1, [9], null), t;
        }
        return (
          Object(i.d)(r, n),
          (r.prototype.gid = function() {
            return o.Message.getField(this, 1);
          }),
          (r.prototype.set_gid = function(e) {
            o.Message.setField(this, 1, e);
          }),
          (r.prototype.clanid = function() {
            return o.Message.getField(this, 2);
          }),
          (r.prototype.set_clanid = function(e) {
            o.Message.setField(this, 2, e);
          }),
          (r.prototype.posterid = function() {
            return o.Message.getField(this, 3);
          }),
          (r.prototype.set_posterid = function(e) {
            o.Message.setField(this, 3, e);
          }),
          (r.prototype.headline = function() {
            return o.Message.getField(this, 4);
          }),
          (r.prototype.set_headline = function(e) {
            o.Message.setField(this, 4, e);
          }),
          (r.prototype.posttime = function() {
            return o.Message.getField(this, 5);
          }),
          (r.prototype.set_posttime = function(e) {
            o.Message.setField(this, 5, e);
          }),
          (r.prototype.updatetime = function() {
            return o.Message.getField(this, 6);
          }),
          (r.prototype.set_updatetime = function(e) {
            o.Message.setField(this, 6, e);
          }),
          (r.prototype.body = function() {
            return o.Message.getField(this, 7);
          }),
          (r.prototype.set_body = function(e) {
            o.Message.setField(this, 7, e);
          }),
          (r.prototype.commentcount = function() {
            return o.Message.getField(this, 8);
          }),
          (r.prototype.set_commentcount = function(e) {
            o.Message.setField(this, 8, e);
          }),
          (r.prototype.tags = function() {
            return o.Message.getField(this, 9);
          }),
          (r.prototype.set_tags = function(e) {
            o.Message.setField(this, 9, e);
          }),
          (r.prototype.add_tags = function(e, t) {
            o.Message.addToRepeatedField(this, 9, e, t);
          }),
          (r.prototype.language = function() {
            return o.Message.getField(this, 10);
          }),
          (r.prototype.set_language = function(e) {
            o.Message.setField(this, 10, e);
          }),
          (r.prototype.hidden = function() {
            return o.Message.getField(this, 11);
          }),
          (r.prototype.set_hidden = function(e) {
            o.Message.setField(this, 11, e);
          }),
          (r.prototype.forum_topic_id = function() {
            return o.Message.getField(this, 12);
          }),
          (r.prototype.set_forum_topic_id = function(e) {
            o.Message.setField(this, 12, e);
          }),
          (r.prototype.event_gid = function() {
            return o.Message.getField(this, 13);
          }),
          (r.prototype.set_event_gid = function(e) {
            o.Message.setField(this, 13, e);
          }),
          (r.prototype.voteupcount = function() {
            return o.Message.getField(this, 14);
          }),
          (r.prototype.set_voteupcount = function(e) {
            o.Message.setField(this, 14, e);
          }),
          (r.prototype.votedowncount = function() {
            return o.Message.getField(this, 15);
          }),
          (r.prototype.set_votedowncount = function(e) {
            o.Message.setField(this, 15, e);
          }),
          (r.prototype.toObject = function(e) {
            return void 0 === e && (e = !1), r.toObject(e, this);
          }),
          (r.toObject = function(e, t) {
            var n = {
              gid: o.Message.getField(t, 1),
              clanid: o.Message.getField(t, 2),
              posterid: o.Message.getField(t, 3),
              headline: o.Message.getField(t, 4),
              posttime: o.Message.getField(t, 5),
              updatetime: o.Message.getField(t, 6),
              body: o.Message.getField(t, 7),
              commentcount: o.Message.getField(t, 8),
              tags: o.Message.getField(t, 9),
              language: o.Message.getField(t, 10),
              hidden: o.Message.getField(t, 11),
              forum_topic_id: o.Message.getField(t, 12),
              event_gid: o.Message.getField(t, 13),
              voteupcount: o.Message.getField(t, 14),
              votedowncount: o.Message.getField(t, 15)
            };
            return e && (n.$jspbMessageInstance = t), n;
          }),
          (r.fromObject = function(e) {
            var t = new r();
            return (
              t.set_gid(e.gid),
              t.set_clanid(e.clanid),
              t.set_posterid(e.posterid),
              t.set_headline(e.headline),
              t.set_posttime(e.posttime),
              t.set_updatetime(e.updatetime),
              t.set_body(e.body),
              t.set_commentcount(e.commentcount),
              t.set_tags(e.tags),
              t.set_language(e.language),
              t.set_hidden(e.hidden),
              t.set_forum_topic_id(e.forum_topic_id),
              t.set_event_gid(e.event_gid),
              t.set_voteupcount(e.voteupcount),
              t.set_votedowncount(e.votedowncount),
              t
            );
          }),
          (r.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e),
              n = new r();
            return r.deserializeBinaryFromReader(n, t);
          }),
          (r.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  e.set_gid(t.readUint64String());
                  break;
                case 2:
                  e.set_clanid(t.readUint64String());
                  break;
                case 3:
                  e.set_posterid(t.readUint64String());
                  break;
                case 4:
                  e.set_headline(t.readString());
                  break;
                case 5:
                  e.set_posttime(t.readUint32());
                  break;
                case 6:
                  e.set_updatetime(t.readUint32());
                  break;
                case 7:
                  e.set_body(t.readString());
                  break;
                case 8:
                  e.set_commentcount(t.readInt32());
                  break;
                case 9:
                  e.add_tags(t.readString());
                  break;
                case 10:
                  e.set_language(t.readInt32());
                  break;
                case 11:
                  e.set_hidden(t.readBool());
                  break;
                case 12:
                  e.set_forum_topic_id(t.readFixed64String());
                  break;
                case 13:
                  e.set_event_gid(t.readFixed64String());
                  break;
                case 14:
                  e.set_voteupcount(t.readInt32());
                  break;
                case 15:
                  e.set_votedowncount(t.readInt32());
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
          (r.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter();
            return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }),
          (r.serializeBinaryToWriter = function(e, t) {
            var n;
            void 0 !== (n = o.Message.getField(e, 1)) &&
              t.writeUint64String(1, n),
              void 0 !== (n = o.Message.getField(e, 2)) &&
                t.writeUint64String(2, n),
              void 0 !== (n = o.Message.getField(e, 3)) &&
                t.writeUint64String(3, n),
              void 0 !== (n = o.Message.getField(e, 4)) && t.writeString(4, n),
              void 0 !== (n = o.Message.getField(e, 5)) && t.writeUint32(5, n),
              void 0 !== (n = o.Message.getField(e, 6)) && t.writeUint32(6, n),
              void 0 !== (n = o.Message.getField(e, 7)) && t.writeString(7, n),
              void 0 !== (n = o.Message.getField(e, 8)) && t.writeInt32(8, n),
              void 0 !== (n = o.Message.getField(e, 9)) &&
                t.writeRepeatedString(9, n),
              void 0 !== (n = o.Message.getField(e, 10)) && t.writeInt32(10, n),
              void 0 !== (n = o.Message.getField(e, 11)) && t.writeBool(11, n),
              void 0 !== (n = o.Message.getField(e, 12)) &&
                t.writeFixed64String(12, n),
              void 0 !== (n = o.Message.getField(e, 13)) &&
                t.writeFixed64String(13, n),
              void 0 !== (n = o.Message.getField(e, 14)) && t.writeInt32(14, n),
              void 0 !== (n = o.Message.getField(e, 15)) && t.writeInt32(15, n);
          }),
          (r.prototype.getClassName = function() {
            return "CCommunity_ClanAnnouncementInfo";
          }),
          r
        );
      })(o.Message);
    o.Message, o.Message;
  },
  TLQK: function(e, t, n) {
    "use strict";
    n.d(t, "d", function() {
      return a;
    }),
      n.d(t, "h", function() {
        return c;
      }),
      n.d(t, "f", function() {
        return p;
      }),
      n.d(t, "j", function() {
        return d;
      }),
      n.d(t, "e", function() {
        return h;
      }),
      n.d(t, "i", function() {
        return m;
      }),
      n.d(t, "g", function() {
        return f;
      }),
      n.d(t, "b", function() {
        return g;
      }),
      n.d(t, "a", function() {
        return v;
      }),
      n.d(t, "c", function() {
        return b;
      });
    var l = n("mrSG"),
      u = n("q1tI"),
      r = (n("Gp1o"), n("r64O"), n("CdLH")),
      i = n("mgoM"),
      o = n("lkRc"),
      s = (function() {
        function e() {
          (this.m_mapTokens = new Map()),
            (this.m_mapFallbackTokens = new Map());
        }
        return (
          (e.prototype.InitFromObjects = function(e, t, n, r, i) {
            i || this.m_mapTokens.clear();
            var o = Object(l.a)(Object(l.a)({}, n || {}), e),
              s = Object(l.a)(Object(l.a)({}, r || {}), t || {});
            this.AddTokens(o, s);
          }),
          (e.prototype.InitDirect = function(e, t) {
            this.m_mapTokens.clear(),
              this.m_mapFallbackTokens.clear(),
              this.AddTokens(e, t);
          }),
          (e.prototype.AddTokens = function(t, n) {
            var r = this;
            Object.keys(t).forEach(function(e) {
              r.m_mapTokens.set(e, t[e]);
            }),
              n &&
                Object.keys(n).forEach(function(e) {
                  r.m_mapTokens.has(e) || r.m_mapTokens.set(e, n[e]),
                    r.m_mapFallbackTokens.set(e, n[e]);
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
              t.push(Object(i.d)(o.b.LANGUAGE)),
              (o.b.SUPPORTED_LANGUAGES || []).forEach(function(e) {
                e.value != o.b.LANGUAGE && t.push(Object(i.d)(e.value));
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
      var n = b.LocalizeString(e);
      return n
        ? (0 < r.length &&
            (n = n.replace(/%(?:(\d+)\$)?s/g, function(e, t) {
              if (t <= r.length && 1 <= t) {
                var n = r[t - 1];
                return String(null == n ? "" : n);
              }
              return e;
            })),
          n)
        : e;
    }
    function c(e) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      var r = b.LocalizeString(e);
      if (!r) return e;
      for (var i, o = [], s = /(.*?)%(\d+)\$s/g, a = 0; (i = s.exec(r)); ) {
        (a += i[0].length), o.push(i[1]);
        var c = parseInt(i[2]);
        1 <= c && c <= t.length && o.push(t[c - 1]);
      }
      return (
        o.push(r.substr(a)),
        u.createElement.apply(u, Object(l.g)([u.Fragment, null], o))
      );
    }
    function p(e, t) {
      for (var n = [], r = 2; r < arguments.length; r++)
        n[r - 2] = arguments[r];
      return a.apply(
        void 0,
        1 === t || "1" === t
          ? Object(l.g)([e, t], n)
          : Object(l.g)([e + "_Plural", t], n)
      );
    }
    function d(e, t) {
      void 0 === t && (t = !1);
      var n = t ? "#TimeInterval_" : "#TimeSince_";
      return e >= 2 * r.e.PerYear
        ? a(n + "XYears", Math.floor(e / r.e.PerYear))
        : e >= r.e.PerYear
        ? (e -= r.e.PerYear) >= 2 * r.e.PerMonth
          ? a(n + "1YearXMonths", Math.floor(e / r.e.PerMonth))
          : a(n + "1Year")
        : e >= 2 * r.e.PerMonth
        ? a(n + "XMonths", Math.floor(e / r.e.PerMonth))
        : e >= 2 * r.e.PerWeek
        ? a(n + "XWeeks", Math.floor(e / r.e.PerWeek))
        : e >= r.e.PerWeek
        ? a(n + "1Week", Math.floor(e / r.e.PerWeek))
        : e >= 2 * r.e.PerDay
        ? a(n + "XDays", Math.floor(e / r.e.PerDay))
        : e >= r.e.PerDay
        ? (e -= r.e.PerDay) >= 2 * r.e.PerHour
          ? a(n + "1DayXHours", Math.floor(e / r.e.PerHour))
          : a(n + "1Day")
        : e >= 2 * r.e.PerHour
        ? a(n + "XHours", Math.floor(e / r.e.PerHour))
        : e >= r.e.PerHour
        ? (e -= r.e.PerHour) >= 2 * r.e.PerMinute
          ? a(n + "1HourXMinutes", Math.floor(e / r.e.PerMinute))
          : a(n + "1Hour")
        : e >= 2 * r.e.PerMinute
        ? a(n + "XMinutes", Math.floor(e / r.e.PerMinute))
        : e >= r.e.PerMinute
        ? a(n + "1Minute")
        : a(n + "LessThanAMinute");
    }
    function h(e, t) {
      var n = {
        weekday: "short",
        month: "long",
        day: "numeric",
        year: t ? void 0 : "numeric"
      };
      return new Date(1e3 * e).toLocaleDateString(b.GetPreferredLocales(), n);
    }
    function m(e) {
      var t = new Date(1e3 * e),
        n = t.setHours(0, 0, 0, 0),
        r = _.get(n);
      if (r) return r;
      return (
        (r = t.toLocaleDateString(b.GetPreferredLocales(), {
          year: "numeric",
          month: "short",
          day: "numeric"
        })),
        _.set(n, r),
        r
      );
    }
    function f(e) {
      return new Date(1e3 * e).toLocaleTimeString(b.GetPreferredLocales(), {
        hour: "numeric",
        minute: "numeric"
      });
    }
    var _ = new Map();
    new Map();
    new Map(), new Map(), new Map(), new Map();
    var g = {
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
    };
    function v() {
      var e = "koreana" == o.b.LANGUAGE ? "korean" : o.b.LANGUAGE;
      return g[e] || null;
    }
    var b = new s();
    window.LocalizationManager = b;
  },
  TtDX: function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return u;
    });
    var r = n("mrSG"),
      i = n("q1tI"),
      o = n("X3Ds"),
      s = n("y+6m"),
      l = n("sUmc"),
      a = n("2vnA"),
      c = (function() {
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
        i = void 0,
        o = void 0,
        s = t;
      if (s.preventDefault && s.stopPropagation) {
        if (s.shiftKey) return null;
        s.preventDefault(),
          s.stopPropagation(),
          (r = s.currentTarget),
          (i = s.clientX),
          (o = s.clientY);
      } else r = t;
      var a = new d(e, r, i, o, n);
      return a.Show(), a;
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
              ? (this.m_popupContextMenu = new s.a(
                  e,
                  t,
                  c.GetBrowserInfoForPopup(this.m_ownerWindow)
                ))
              : ((this.m_embeddedElementInstance = Object(l.b)(
                  this.m_ownerWindow.document
                )),
                (this.m_rctElement = i.createElement(s.f, e, t)));
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
                (this.m_submenu = new h(this, t(), e)),
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
              : o.c(this.m_popupContextMenu.root_element, e);
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
          Object(r.c)([a.w], e.prototype, "m_bVisible", void 0),
          e
        );
      })(c),
      d = (function(a) {
        function c(e, t, n, r, i) {
          var o = a.call(this, t.ownerDocument.defaultView) || this;
          c.sm_iActiveContextMenuInstance &&
            c.sm_iActiveContextMenuInstance.Hide(),
            ((c.sm_iActiveContextMenuInstance = o).m_options = i || {});
          var s = {
            element: t,
            clientX: n,
            clientY: r,
            instance: o,
            options: o.m_options,
            fnOnMenuItemSelected: function() {
              o.Hide();
            }
          };
          return o.Init(s, e), o;
        }
        return (
          Object(r.d)(c, a),
          (c.prototype.Show = function() {
            this.m_options.bDisableMouseOverlay ||
              ((this.m_embeddedElementInstanceOverlay = Object(l.b)(
                this.m_ownerWindow.document
              )),
              this.m_embeddedElementInstanceOverlay.Show(i.createElement(s.e))),
              a.prototype.Show.call(this);
          }),
          (c.prototype.Hide = function() {
            this.m_embeddedElementInstanceOverlay &&
              this.m_embeddedElementInstanceOverlay.Hide(0),
              a.prototype.Hide.call(this);
          }),
          c
        );
      })(p),
      h = (function(o) {
        function e(e, t, n) {
          var r = o.call(this, n.ownerDocument.defaultView) || this;
          (r.m_parentInstance = e),
            (r.m_options = {
              bOverlapVertical: !0,
              bUseWebStyles: e.options.bUseWebStyles,
              strClassName: e.options.strClassName,
              bFitToWindow: e.options.bFitToWindow,
              bShiftToFitWindow: e.options.bShiftToFitWindow
            });
          var i = {
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
          return r.Init(i, t), r;
        }
        return (
          Object(r.d)(e, o),
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
  UPxs: function(e, t, n) {
    "use strict";
    var c = n("mrSG"),
      l = n("q1tI"),
      r = n("okNM"),
      u = n("exH9"),
      i = n("bxiW"),
      B = { x: "y", y: "x" };
    function x(e, t) {
      return e.x * t.x + e.y * t.y;
    }
    function N(e, t) {
      return { x: t.x - e.x, y: t.y - e.y };
    }
    function A(e, t) {
      return { x: e.x + t.x, y: e.y + t.y };
    }
    function P(e, t) {
      return { x: e.x * t, y: e.y * t };
    }
    function o(e) {
      return (e.min + e.max) / 2;
    }
    function U(e, t) {
      return !(e.max < t.min || t.max < e.min);
    }
    var L = n("Kw0F"),
      G = n("X3Ds");
    n.d(t, "a", function() {
      return O;
    });
    var h,
      s,
      m,
      a,
      z,
      p,
      d = "Focusable",
      f = "FocusGroup",
      _ = "NavArea";
    function H(e) {
      return null != e && void 0 !== e.focus;
    }
    function W(e) {
      return (function(e) {
        return {
          x: { min: e.left, max: e.right },
          y: { min: e.top, max: e.bottom }
        };
      })(e.getBoundingClientRect());
    }
    function V(e) {
      return (function(e) {
        return { x: o(e.x), y: o(e.y) };
      })(W(e));
    }
    function g(e, t) {
      e && ("function" == typeof e ? e(t) : (e.current = t));
    }
    function v(e, t, n) {
      var r = e,
        i = null != r.getAttribute("data-nav"),
        o = i ? r.getAttribute("data-nav-scroll-axes") : void 0;
      if (i && o !== m.XY && o !== t) return h.None;
      var s =
          "x" === t
            ? [r.scrollLeft, r.scrollWidth, r.clientWidth]
            : [r.scrollTop, r.scrollHeight, r.clientHeight],
        a = s[0],
        c = s[1],
        l = s[2],
        u = -1 === n ? Math.abs(a) < 1 : Math.abs(a + l - c) <= 1;
      if (i) return u ? h.AtEnd : h.Scrollable;
      if (!u && c <= l) return h.None;
      var p = getComputedStyle(r),
        d = "x" === t ? p.overflowX : p.overflowY;
      return "auto" === d || "scroll" === d
        ? u
          ? h.AtEnd
          : h.Scrollable
        : h.None;
    }
    ((s = h || (h = {}))[(s.None = 2)] = "None"),
      (s[(s.Scrollable = 1)] = "Scrollable"),
      (s[(s.AtEnd = 3)] = "AtEnd"),
      ((a = m || (m = {})).X = "x"),
      (a.Y = "y"),
      (a.XY = "xy"),
      ((p = z || (z = {})).Area = "area"),
      (p.Group = "group"),
      (p.Stop = "stop");
    var b = (function() {
        function t() {}
        return (
          Object.defineProperty(t, "IsNavEnabled", {
            get: function() {
              return t.s_bIsNavEnabled;
            },
            set: function(e) {
              t.s_bIsNavEnabled = e;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(t, "IsPointerVisible", {
            get: function() {
              return !1;
            },
            enumerable: !0,
            configurable: !0
          }),
          (t.s_bIsNavEnabled = !1),
          t
        );
      })(),
      y = l.createContext(null),
      E = (function() {
        function e() {}
        return (
          (e.prototype.Initialize = function(e) {
            this.m_document = e;
          }),
          (e.prototype.GetFocus = function() {
            return void 0 !== this.m_document &&
              H(this.m_document.activeElement)
              ? this.m_document.activeElement
              : null;
          }),
          (e.prototype.Focus = function(e, t) {
            null != e
              ? e.focus(t)
              : H(document.activeElement) && document.activeElement.blur();
          }),
          (e.prototype.Click = function(e) {
            e.click();
          }),
          (e.prototype.FocusableElementAttributes = function(e) {
            var t = {};
            return (
              b.IsNavEnabled && e.navStop && (t.tabIndex = -2),
              "number" == typeof e.tabStop && (t.tabIndex = e.tabStop),
              !0 === e.tabStop && (t.tabIndex = 0),
              t
            );
          }),
          e
        );
      })(),
      M = (function() {
        function e() {}
        return (
          (e.Attributes = function(e, t) {
            var n = {};
            if (
              (b.IsNavEnabled &&
                (e.navStop && (n["data-nav"] = z.Stop),
                e.preferredNavStop && (n["data-nav-preferred"] = "true"),
                e.scrollToX && (n["data-nav-scroll-x"] = e.scrollToX),
                e.scrollToY && (n["data-nav-scroll-y"] = e.scrollToY)),
              !t)
            )
              return n;
            var r = t.FocusableElementAttributes(e);
            return r ? Object(c.a)(Object(c.a)({}, n), r) : n;
          }),
          Object.defineProperty(e, "navStopClass", {
            get: function() {
              return b.IsNavEnabled ? d : void 0;
            },
            enumerable: !0,
            configurable: !0
          }),
          e
        );
      })(),
      w = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(c.d)(t, e),
          (t.prototype.SetRef = function(e) {
            (this.m_htmlElement = e), g(this.props.htmlElementRef, e);
          }),
          (t.prototype.assembleAttributes = function() {
            var e = this.props,
              t = (e.navStop,
              e.preferredNavStop,
              e.tabStop,
              e.scrollToX,
              e.scrollToY,
              e.startFocused),
              n = e.htmlElementRef,
              r = e.className,
              i = (e.children,
              Object(c.f)(e, [
                "navStop",
                "preferredNavStop",
                "tabStop",
                "scrollToX",
                "scrollToY",
                "startFocused",
                "htmlElementRef",
                "className",
                "children"
              ]));
            return null != this.context && b.IsNavEnabled
              ? Object(c.a)(
                  Object(c.a)(
                    Object(c.a)({}, M.Attributes(this.props, this.context)),
                    {
                      className: Object(u.a)(M.navStopClass, r),
                      ref: t ? this.SetRef : n
                    }
                  ),
                  i
                )
              : Object(c.a)({ className: r, ref: n }, i);
          }),
          (t.prototype.componentDidMount = function() {
            this.props.startFocused &&
              this.m_htmlElement &&
              this.context &&
              this.context.Focus(this.m_htmlElement);
          }),
          (t.prototype.render = function() {
            return l.createElement(
              this.m_elementType,
              this.assembleAttributes(),
              this.props.children
            );
          }),
          (t.contextType = y),
          (t.defaultProps = { navStop: !1, tabStop: !1 }),
          Object(c.c)([i.a], t.prototype, "SetRef", null),
          t
        );
      })(l.Component),
      O = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this;
          return (e.m_elementType = "div"), e;
        }
        return Object(c.d)(e, t), (e = Object(c.c)([r.a], e));
      })(w),
      S = (l.Component,
      (function(n) {
        function e(e) {
          var t = n.call(this, e) || this;
          return (
            (t.m_navAreaDivRef = l.createRef()),
            (t.m_lastFocusedHtmlElement = null),
            (t.m_focusPos = null),
            (t.m_focusPosOffsetFromAnchorElement = null),
            (t.m_focusPosPointerRef = l.createRef()),
            void 0 !== e && (t.m_htmlDomFocusController = new E()),
            t
          );
        }
        var I;
        return (
          Object(c.d)(e, n),
          ((I = e).FocusWithin = function(e) {
            if (b.IsNavEnabled) {
              var t = I.sm_navAreaStack;
              if (0 !== t.length) {
                var n = t[t.length - 1],
                  r = n.m_navAreaDivRef.current;
                if (r && r.contains(e)) {
                  var i = n.FindBestNavStopFocus(e);
                  i && n.SetFocus(i.htmlElement, i.pos);
                }
              }
            }
          }),
          (e.prototype.GetFocusController = function() {
            return this.props.focusController || this.m_htmlDomFocusController;
          }),
          (e.prototype.SetFocus = function(e, t) {
            this.UpdateFocus(e, t);
            var n = e.getAttribute("data-nav-scroll-x"),
              r = e.getAttribute("data-nav-scroll-y");
            if (n || r) {
              this.GetFocusController().Focus(e, { preventScroll: !0 });
              var i = { behavior: "auto" };
              n && (i.inline = n), r && (i.block = r), e.scrollIntoView(i);
            } else this.GetFocusController().Focus(e);
          }),
          (e.prototype.UpdateFocus = function(e, t) {
            var n = I.FindAnchorElement(e);
            if (n) {
              var r = V(n);
              this.m_focusPosOffsetFromAnchorElement = N(r, t);
            } else this.m_focusPosOffsetFromAnchorElement = null;
            (this.m_focusPos = t),
              (this.m_lastFocusedHtmlElement = e),
              this.UpdatePointer();
          }),
          (e.prototype.UpdatePointer = function() {
            var e = this.m_focusPos,
              t = this.m_focusPosPointerRef.current,
              n = this.m_navAreaDivRef.current;
            e &&
              t &&
              n &&
              ((t.style.left = e.x + "px"), (t.style.top = e.y + "px"));
          }),
          (e.prototype.GetFocusPos = function() {
            var e = this.m_navAreaDivRef.current,
              t = this.m_lastFocusedHtmlElement,
              n = this.m_focusPosOffsetFromAnchorElement;
            if (e && t && e.contains(t) && n) {
              var r = I.FindAnchorElement(t);
              if (r) return A(V(r), n);
            }
            return this.m_focusPos;
          }),
          (e.FindAnchorElement = function(e) {
            return e;
          }),
          (e.prototype.FindBestNavStopFocus = function(e, t, n) {
            if (!e) return null;
            var r = e.ownerDocument;
            if (!r) return null;
            var i = this.m_lastFocusedHtmlElement,
              o = this.GetFocusPos();
            if (
              i &&
              r.contains(i) &&
              e.contains(i) &&
              i.getAttribute("data-nav") === z.Stop
            )
              return { htmlElement: i, pos: o || V(i) };
            var s = Object(G.k)(e, "data-nav").filter(function(e) {
              return H(e) && "true" === e.getAttribute("data-nav-preferred");
            });
            if (0 < s.length) {
              var a = s[0],
                c = a.getAttribute("data-nav");
              if (c === z.Group) {
                var l = this.FindBestNavStopFocus(a, t, n);
                if (l) return l;
              } else if (c === z.Stop) {
                return { htmlElement: a, pos: V(a) };
              }
            }
            var u = Array.from(
              e.querySelectorAll("[data-nav='" + z.Stop + "']")
            ).filter(function(e) {
              return H(e);
            });
            if (!u || 0 === u.length) return null;
            var p = I.sm_navAreaStack;
            if (p.length < 1) return null;
            var d = p[p.length - 1];
            if (
              d.m_navAreaDivRef.current &&
              d.props.initFromBoundary &&
              void 0 !== t &&
              void 0 !== n
            ) {
              for (
                var h = -1 === n ? "max" : "min",
                  m = null,
                  f = 1 / 0,
                  _ = 0,
                  g = u;
                _ < g.length;
                _++
              ) {
                var v = n * W((k = g[_]))[t][h];
                v < f && ((f = v), (m = k));
              }
              if (null !== m) return { htmlElement: m, pos: V(m) };
            }
            var b,
              y = Object(L.d)(p, function(e) {
                return null !== e.m_focusPos;
              });
            if (y) {
              for (
                var E = y.m_focusPos,
                  M = Number.POSITIVE_INFINITY,
                  w = null,
                  O = 0,
                  S = u;
                O < S.length;
                O++
              ) {
                var k,
                  C = V((k = S[O])),
                  D = (void 0, (b = N(E, C)), Math.sqrt(x(b, b)));
                D < M && ((M = D), (w = k));
              }
              if (w) return { htmlElement: w, pos: V(w) };
            }
            var F = u[0];
            return F ? { htmlElement: F, pos: V(F) } : null;
          }),
          (e.prototype.GetScrollOffset = function(e, t, n) {
            var r = e,
              i = r.getAttribute("data-nav-enter-as-scrolled-axes");
            if (i === m.XY || i === t) return null;
            var o = null != r.getAttribute("data-nav"),
              s = o ? r.getAttribute("data-nav-scroll-axes") : void 0;
            return o && s !== m.XY && s !== t
              ? null
              : "x" === t
              ? { x: r.scrollLeft, y: 0 }
              : { x: 0, y: r.scrollTop };
          }),
          (e.prototype.FindNextNavStopInContainer = function(
            c,
            e,
            l,
            u,
            p,
            t,
            n
          ) {
            for (
              var d = this,
                h = n ? this.GetScrollOffset(c, u, p) : null,
                r = h ? P(h, -1) : null,
                m = r ? A(l, r) : l,
                i = B[u],
                o = -1 === ({ x: 0, y: 0 }[u] = p) ? "max" : "min",
                s = { min: m[i], max: m[i] },
                a =
                  t && H(e)
                    ? (function(e, t) {
                        return {
                          min: e.min < t.min ? e.min : t.min,
                          max: e.max > t.max ? e.max : t.max
                        };
                      })(s, W(e)[i])
                    : s,
                f = null,
                _ = null,
                g = 1 / 0,
                v = [],
                b = 0,
                y = Object(G.k)(c, "data-nav");
              b < y.length;
              b++
            ) {
              if ((R = y[b]) !== e && R.getAttribute("data-nav") !== z.Area) {
                n &&
                  null === f &&
                  "true" === R.getAttribute("data-nav-preferred") &&
                  (f = R);
                var E = W(R),
                  M = m[u],
                  w = p * (E[u][o] - M);
                if (!(w < 0)) {
                  var O = m[i],
                    S = E[i].min,
                    k = E[i].max,
                    C = O < S ? O - S : k < O ? O - k : 0;
                  if (t) if (!U(a, { min: S, max: k })) continue;
                  var D = { x: 0, y: 0 };
                  (D[u] = E[u][o]), (D[i] = O + C);
                  var F = N(m, D),
                    I = (w * w + C * C) / Math.abs(F[u]);
                  I < g && ((g = I), (_ = R)), v.push({ score: I, element: R });
                }
              }
            }
            var x = function(e, t) {
              void 0 === t && (t = !1);
              var n = e.getAttribute("data-nav");
              if (n === z.Stop) {
                if (H(e)) {
                  var r = e,
                    i = V(r),
                    o = !l || t ? i : { x: l.x, y: l.y };
                  o[u] = i[u];
                  var s = { htmlElement: r, pos: o };
                  return h && (s.onscreenTestElement = c), s;
                }
                return null;
              }
              if (n === z.Group) {
                var a = d.FindNextNavStopInContainer(e, null, m, u, p, !1, !0);
                if (a) return a;
              }
              return null;
            };
            if (f && (L = x(f, !0))) return L;
            if (_) {
              var L;
              if ((L = x(_))) return L;
              v.sort(function(e, t) {
                return e.score - t.score;
              });
              for (var j = 0; j < v.length; ++j) {
                var R;
                if ((R = v[j].element) !== _) {
                  var T = x(R);
                  if (T) return T;
                }
              }
            }
            return null;
          }),
          (e.prototype.FindNextNavStopWithinAndAcrossContainers = function(
            e,
            t,
            n,
            r,
            i
          ) {
            for (var o = t; ; ) {
              var s = Object(G.j)(e, o, "data-nav"),
                a = this.FindNextNavStopInContainer(s, o, n, r, i, !0, !1);
              if (null !== a) return a;
              if (s === e) return null;
              for (var c = o.parentElement; c && c !== s; ) {
                if (v(c, r, i) === h.Scrollable) return null;
                c = c.parentElement;
              }
              if (!c) return null;
              if (c === s && v(c, r, i) === h.Scrollable) return null;
              o = s;
            }
          }),
          (e.prototype.FindNextNavStop = function(e, t) {
            var n = this.m_navAreaDivRef.current;
            if (!n) return null;
            var r = n.ownerDocument;
            if (!r || r !== this.m_document) return null;
            var i = null,
              o = this.GetFocusController().GetFocus();
            if (H(o) && o !== n && n.contains(o)) {
              var s =
                  (null !== this.m_focusPos &&
                    this.m_lastFocusedHtmlElement === o &&
                    this.GetFocusPos()) ||
                  V(o),
                a = this.FindNextNavStopWithinAndAcrossContainers(
                  n,
                  o,
                  s,
                  e,
                  t
                );
              if (!a) {
                var c = V(o);
                a = this.FindNextNavStopWithinAndAcrossContainers(
                  n,
                  o,
                  c,
                  e,
                  t
                );
              }
              a && (i = a);
            } else
              i = this.FindBestNavStopFocus(this.m_navAreaDivRef.current, e, t);
            if (null !== i) {
              var l = r.defaultView;
              if (!l) return null;
              if (
                (function(e, t) {
                  return U(e.x, t.x) && U(e.y, t.y);
                })(
                  {
                    x: { min: -40, max: l.innerWidth + 40 },
                    y: { min: -40, max: l.innerHeight + 40 }
                  },
                  W(i.onscreenTestElement || i.htmlElement)
                )
              )
                return i;
            }
            return null;
          }),
          (e.prototype.HandleKeyDown = function(e) {
            if (b.IsNavEnabled) {
              var t = this.m_navAreaDivRef.current;
              if (t) {
                var n = I.k_KeyNavigationDirections[e.key];
                if (n) {
                  var r = n[0],
                    i = n[1],
                    o = this.FindNextNavStop(r, i);
                  o &&
                    (this.SetFocus(o.htmlElement, o.pos),
                    e.stopPropagation(),
                    e.preventDefault());
                } else if ("Enter" === e.key) {
                  var s = t.ownerDocument;
                  if (!s || s !== this.m_document) return;
                  var a = this.GetFocusController().GetFocus();
                  a &&
                    a.getAttribute("data-nav") === z.Stop &&
                    H(a) &&
                    (this.GetFocusController().Click(a),
                    e.preventDefault(),
                    e.stopPropagation());
                }
              }
            }
          }),
          (e.HandleDocumentKeyDown = function(e) {
            if (b.IsNavEnabled) {
              var t = I.sm_navAreaStack;
              if (0 !== t.length) {
                var n = t[t.length - 1],
                  r = n.m_navAreaDivRef.current;
                if (r) {
                  var i = I.k_KeyNavigationDirections[e.key];
                  if (i) {
                    var o = r.ownerDocument;
                    if (o && o === n.m_document) {
                      var s = n.GetFocusController().GetFocus();
                      if (s) {
                        var a = n.m_navAreaDivRef.current;
                        if (!a || a.contains(s)) return;
                      }
                      var c = i[0],
                        l = i[1],
                        u = n.FindNextNavStop(c, l);
                      u &&
                        (n.SetFocus(u.htmlElement, u.pos),
                        e.stopPropagation(),
                        e.preventDefault());
                    }
                  } else
                    "Escape" === e.key
                      ? n.props.onGoBack &&
                        (n.props.onGoBack(),
                        e.stopPropagation(),
                        e.preventDefault())
                      : "`" === e.key &&
                        n.props.onHome &&
                        (n.props.onHome(),
                        e.stopPropagation(),
                        e.preventDefault());
                }
              }
            }
          }),
          (e.prototype.HandleFocusCapture = function(e) {
            var t = e.target;
            if (t && t !== this.m_lastFocusedHtmlElement) {
              var n = V(t);
              this.UpdateFocus(t, n);
            }
          }),
          (e.prototype.HandleScrollCapture = function() {
            var e = this.m_focusPos,
              t = this.GetFocusPos();
            e !== t && ((this.m_focusPos = t), this.UpdatePointer());
          }),
          (e.prototype.HandleMouseDownCapture = function(e) {
            this.props.focusController &&
              this.props.focusController.HandleNavStopClick &&
              (H(e.target) && e.preventDefault());
          }),
          (e.prototype.HandleClickCapture = function(e) {
            var t =
              this.props.focusController &&
              this.props.focusController.HandleNavStopClick;
            if (t) {
              var n = e.target;
              if (H(n)) {
                var r = n;
                r.getAttribute("data-nav") === z.Stop && t(e, r);
              }
            }
          }),
          (e.prototype.ClickFocusedElement = function() {
            this.m_lastFocusedHtmlElement &&
              this.GetFocusController().Click(this.m_lastFocusedHtmlElement);
          }),
          (e.prototype.Blur = function() {
            (this.m_lastFocusedHtmlElement = null),
              (this.m_focusPos = null),
              (this.m_focusPosOffsetFromAnchorElement = null);
            var e = this.m_navAreaDivRef.current;
            if (e) {
              var t = e.ownerDocument;
              t &&
                t === this.m_document &&
                this.GetFocusController().Focus(null);
            }
          }),
          (e.prototype.componentDidMount = function() {
            if (b.IsNavEnabled) {
              if (!this.m_navAreaDivRef.current) return;
              var e = this.m_navAreaDivRef.current.ownerDocument;
              if (!e) return;
              (this.m_document && this.m_document === e) ||
                ((this.m_document = e),
                this.m_htmlDomFocusController &&
                  this.m_htmlDomFocusController.Initialize(e)),
                0 === I.sm_navAreaStack.length &&
                  (e.addEventListener("scroll", this.HandleScrollCapture, !0),
                  this.props.focusController ||
                    e.addEventListener("keydown", I.HandleDocumentKeyDown, !1));
            }
            this.props.focusController || I.sm_navAreaStack.push(this);
          }),
          (e.prototype.componentWillUnmount = function() {
            if (
              ((I.sm_navAreaStack = Object(L.a)(I.sm_navAreaStack, this)),
              0 === I.sm_navAreaStack.length)
            ) {
              if (!this.m_navAreaDivRef.current) return;
              var e = this.m_document;
              if (!e) return;
              e.removeEventListener("scroll", this.HandleScrollCapture, !0),
                e.removeEventListener("keydown", I.HandleDocumentKeyDown, !1);
            }
          }),
          (e.prototype.render = function() {
            var e = this.props,
              t = e.className,
              n = e.children,
              r = (e.initFromBoundary, e.onGoBack, e.onHome, e.focusController),
              i = Object(c.f)(e, [
                "className",
                "children",
                "initFromBoundary",
                "onGoBack",
                "onHome",
                "focusController"
              ]),
              o = b.IsNavEnabled,
              s = b.IsPointerVisible,
              a = o
                ? {
                    onKeyDown: this.HandleKeyDown,
                    onFocusCapture: this.HandleFocusCapture
                  }
                : {};
            return (
              r &&
                r.HandleNavStopClick &&
                ((a.onMouseDownCapture = this.HandleMouseDownCapture),
                (a.onClickCapture = this.HandleClickCapture)),
              o
                ? l.createElement(
                    y.Provider,
                    { value: r || this.m_htmlDomFocusController || null },
                    l.createElement(
                      "div",
                      Object(c.a)(
                        {
                          "data-nav": z.Area,
                          ref: this.m_navAreaDivRef,
                          className: Object(u.a)(_, t)
                        },
                        i,
                        a
                      ),
                      o &&
                        s &&
                        l.createElement("div", {
                          ref: this.m_focusPosPointerRef,
                          style: {
                            position: "fixed",
                            background:
                              "linear-gradient( -45deg, rgba( 0, 0, 0, 0 ) 0%, rgba( 0, 0, 0, 0 ) 50%, rgba( 255, 64, 0, 0.75 ) 100% )",
                            width: "20px",
                            height: "20px",
                            zIndex: 1e3
                          }
                        }),
                      n
                    )
                  )
                : l.createElement(
                    "div",
                    Object(c.a)({ ref: this.m_navAreaDivRef, className: t }, i),
                    n
                  )
            );
          }),
          (e.sm_navAreaStack = []),
          (e.k_KeyNavigationDirections = {
            ArrowLeft: ["x", -1],
            ArrowRight: ["x", 1],
            ArrowUp: ["y", -1],
            ArrowDown: ["y", 1]
          }),
          Object(c.c)([i.a], e.prototype, "HandleKeyDown", null),
          Object(c.c)([i.a], e.prototype, "HandleFocusCapture", null),
          Object(c.c)([i.a], e.prototype, "HandleScrollCapture", null),
          Object(c.c)([i.a], e.prototype, "HandleMouseDownCapture", null),
          Object(c.c)([i.a], e.prototype, "HandleClickCapture", null),
          Object(c.c)([i.a], e, "HandleDocumentKeyDown", null),
          (e = I = Object(c.c)([r.a], e))
        );
      })(l.Component));
  },
  X3Ds: function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
      return i;
    }),
      n.d(t, "b", function() {
        return o;
      }),
      n.d(t, "g", function() {
        return s;
      }),
      n.d(t, "m", function() {
        return a;
      }),
      n.d(t, "l", function() {
        return c;
      }),
      n.d(t, "h", function() {
        return l;
      }),
      n.d(t, "i", function() {
        return u;
      }),
      n.d(t, "a", function() {
        return p;
      }),
      n.d(t, "n", function() {
        return d;
      }),
      n.d(t, "f", function() {
        return h;
      }),
      n.d(t, "e", function() {
        return m;
      }),
      n.d(t, "d", function() {
        return f;
      }),
      n.d(t, "j", function() {
        return _;
      }),
      n.d(t, "k", function() {
        return g;
      });
    var r = n("Kw0F");
    n("r64O");
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
    function o(e, t) {
      for (; t; ) if ((t = t.parentElement) == e) return !0;
      return !1;
    }
    function s(e, t) {
      return {
        width: t.width,
        height: t.height,
        top: e.screenTop + t.top,
        bottom: e.screenTop + t.bottom,
        left: e.screenLeft + t.left,
        right: e.screenLeft + t.right
      };
    }
    function a(e) {
      var t = void 0;
      return (
        e && e.currentTarget && (t = e.currentTarget.ownerDocument.defaultView),
        t
      );
    }
    function c(e) {
      var t = void 0;
      return e && (t = e.ownerDocument.defaultView), t;
    }
    function l(e) {
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
    function u(e) {
      var t = "steam://openurl/";
      e.startsWith(t) && (e = e.slice(t.length)), l(e);
    }
    function p(e) {
      var t = e.ownerDocument;
      return (
        t.fullscreen ||
        t.webkitIsFullScreen ||
        t.mozFullScreen ||
        t.msFullscreenElement
      );
    }
    function d(e, t) {
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
    function h(e) {
      var t = e.ownerDocument;
      t.cancelFullscreen
        ? t.cancelFullscreen()
        : t.webkitCancelFullScreen
        ? t.webkitCancelFullScreen()
        : t.mozCancelFullScreen
        ? t.mozCancelFullScreen()
        : t.msExitFullscreen && t.msExitFullscreen();
    }
    var m = (function() {
      function e(e) {
        var o = this;
        (this.m_bNeedSort = !1),
          (this.m_bOffsetsInvalidated = !1),
          (this.m_rgChildren = []),
          (this.RecomputeVisibility = function() {
            var e = o.m_elParent.scrollTop - o.m_nBufferPx,
              t =
                o.m_elParent.scrollTop +
                o.m_elParent.clientHeight +
                o.m_nBufferPx;
            o.EnsureSort();
            for (var n = 0, r = o.m_rgChildren; n < r.length; n++) {
              var i = r[n];
              if (!(i.yOffset < e)) {
                if (i.yOffset > t) break;
                i.fnCallback(!0);
              }
            }
            (o.m_nLastYMin = e), (o.m_nLastYMax = t);
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
          r.c(this.m_rgChildren, function(e) {
            return e.element == t;
          });
        }),
        e
      );
    })();
    function f(e, t) {
      var n = e;
      return (
        (n.lastModifiedDate = new Date()),
        (n.name = t || Date.now().toString()),
        e
      );
    }
    function _(e, t, n) {
      for (var r = t.parentElement; r && r !== e && !r.hasAttribute(n); )
        r = r.parentElement;
      return r || e;
    }
    function g(e, t) {
      for (var n = [], r = [e]; 0 < r.length; )
        for (var i = r.pop().children, o = 0; o < i.length; ++o) {
          var s = i[o];
          s.hasAttribute(t) ? n.push(s) : r.push(s);
        }
      return n;
    }
  },
  YyVH: function(e, t, n) {
    "use strict";
    function r(e, t) {
      return (
        (e = Math.ceil(e)),
        (t = Math.floor(t)),
        Math.floor(Math.random() * (t - e + 1)) + e
      );
    }
    function i(e, t, n) {
      return Math.max(t, Math.min(n, e));
    }
    function o(e, t, n, r, i) {
      return r + ((i - r) * (e - t)) / (n - t);
    }
    n.d(t, "b", function() {
      return r;
    }),
      n.d(t, "a", function() {
        return i;
      }),
      n.d(t, "c", function() {
        return o;
      });
  },
  Z7Ow: function(e, t, n) {
    e.exports = {
      EmoticonBow: "shared_svg_library_EmoticonBow_2Llzt",
      EmoticonBow_st0: "shared_svg_library_EmoticonBow_st0_Fw2WG",
      EmoticonBow_st1: "shared_svg_library_EmoticonBow_st1_luj0t"
    };
  },
  bxBv: function(e, t, n) {
    "use strict";
    var r = n("mrSG"),
      o = n("mC9v"),
      s = n("hRO2");
    var a = n("RD/U");
    n("kLLr");
    n.d(t, "a", function() {
      return i;
    });
    var i = (function(i) {
      function n(e, t, n, r) {
        return void 0 === t && (t = 0), i.call(this, t, n, e, r) || this;
      }
      return (
        Object(r.d)(n, i),
        (n.InitFromPacket = function(e, t) {
          return new n(e, 0, t);
        }),
        (n.InitFromMsg = function(e, t) {
          return new n(e, void 0, void 0, t);
        }),
        (n.Init = function(e, t) {
          return new n(e, t);
        }),
        (n.prototype.Body = function() {
          return i.prototype.Body.call(this);
        }),
        (n.prototype.SetBodyFields = function(e) {
          var n = this,
            t = function(t) {
              Array.isArray(e[t])
                ? r.Body()["add_" + t] &&
                  e[t].forEach(function(e) {
                    n.Body()["add_" + t](e);
                  })
                : r.Body()["set_" + t] && r.Body()["set_" + t](e[t]);
            },
            r = this;
          for (var i in e) t(i);
        }),
        n
      );
    })(
      (function() {
        function t(e, t, n, r, i) {
          if (r)
            (this.m_eMsg = r.m_eMsg),
              (this.m_bValid = r.m_bValid),
              this.m_bValid &&
                ((this.m_netPacket = r.m_netPacket),
                (this.m_cubHeader = r.m_cubHeader),
                (this.m_header = r.m_header),
                this.InitForType(n));
          else {
            if (((this.m_header = new a.d(null)), (this.m_bValid = !0), t))
              if (
                ((this.m_netPacket = t),
                this.m_netPacket.SeekGetHead(),
                (this.m_eMsg = this.m_netPacket.GetUint32()),
                2147483648 & this.m_eMsg)
              ) {
                (this.m_eMsg = 2147483647 & this.m_eMsg),
                  (this.m_cubHeader = this.m_netPacket.GetUint32());
                try {
                  a.d.deserializeBinaryFromReader(
                    this.m_header,
                    new s.BinaryReader(
                      this.m_netPacket.GetPacket(),
                      this.m_netPacket.TellGet(),
                      this.m_cubHeader
                    )
                  ),
                    this.m_netPacket.SeekGetCurrent(this.m_cubHeader),
                    n && this.InitForType(n);
                } catch (e) {
                  console.error("Exception deserializing protobuf", e),
                    (this.m_bValid = !1);
                }
              } else this.m_bValid = !1;
            else e && (this.m_eMsg = e), n && (this.m_body = new n());
            i && this.m_header.set_jobid_target(i.Hdr().jobid_target());
          }
        }
        return (
          (t.InitHeaderFromPacket = function(e) {
            return new t(void 0, e);
          }),
          (t.prototype.InitForType = function(e) {
            if (((this.m_body = new e()), this.m_netPacket)) {
              this.m_netPacket.SeekGetHead(8 + this.m_cubHeader);
              try {
                e.deserializeBinaryFromReader(
                  this.m_body,
                  new s.BinaryReader(
                    this.m_netPacket.GetPacket(),
                    this.m_netPacket.TellGet(),
                    this.m_netPacket.GetCountBytesRemaining()
                  )
                );
              } catch (e) {
                (this.m_bValid = !1),
                  console.error(
                    "Exception parsing protobuf message body.  Definitions may be out of sync with server version."
                  ),
                  console.log(e.stack || e);
              }
            }
          }),
          (t.prototype.BIsValid = function() {
            return this.m_bValid;
          }),
          (t.prototype.Body = function() {
            return this.m_body;
          }),
          (t.prototype.SetBodyJSON = function(e) {
            (e.toObject = function() {
              return e;
            }),
              (this.m_body = e);
          }),
          (t.prototype.Hdr = function() {
            return this.m_header;
          }),
          (t.prototype.GetEMsg = function() {
            return this.m_eMsg;
          }),
          (t.prototype.SetEMsg = function(e) {
            this.m_eMsg = e;
          }),
          (t.prototype.GetEResult = function() {
            return this.Hdr().eresult();
          }),
          (t.prototype.Serialize = function() {
            var e = this.m_header.serializeBinary(),
              t = this.m_body.serializeBinary(),
              n = 2147483648 | this.m_eMsg,
              r = new Uint8Array(8 + e.length + t.length),
              i = new o.a(r);
            return (
              i.PutUint32(n),
              i.PutUint32(e.length),
              i.PutBytes(e),
              i.PutBytes(t),
              r
            );
          }),
          (t.prototype.SerializeBody = function() {
            var e = this.m_body.serializeBinary(),
              t = new Uint8Array(e.length);
            return new o.a(t).PutBytes(e), t;
          }),
          (t.prototype.DEBUG_ToObject = function() {
            return {};
          }),
          (t.prototype.DEBUG_LogToConsole = function() {}),
          t
        );
      })()
    );
  },
  bxiW: function(e, t, n) {
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
    function i(e, t, n) {
      return [e, t, n];
    }
    n.d(t, "a", function() {
      return r;
    }),
      n.d(t, "b", function() {
        return i;
      });
  },
  exH9: function(e, t, n) {
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
  gfbn: function(e, t, f) {
    "use strict";
    f.r(t);
    var n,
      _ = f("mrSG"),
      r = f("q1tI"),
      i = f.n(r),
      o = f("55Ip"),
      s = f("Ty5D"),
      a = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(_.d)(t, e),
          (t.prototype.render = function() {
            var t = document.getElementById(this.props.strConfigID);
            if (!t) return null;
            var n = new Array();
            return (
              t.getAttributeNames().forEach(function(e) {
                e.toLocaleLowerCase().startsWith("data-") &&
                  (n.push(r.createElement("h1", { key: "header-" + e }, e)),
                  n.push(
                    r.createElement(c, {
                      key: "body-" + e,
                      data: JSON.parse(t.getAttribute(e))
                    })
                  ));
              }),
              r.createElement("div", null, n)
            );
          }),
          t
        );
      })(r.Component),
      c = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(_.d)(t, e),
          (t.prototype.render = function() {
            return r.createElement(
              "div",
              null,
              r.createElement(
                "pre",
                null,
                JSON.stringify(this.props.data, null, 2)
              )
            );
          }),
          t
        );
      })(r.Component),
      l = f("Jqb/"),
      u = f("lkRc"),
      p = f("sUmc"),
      d = i.a.lazy(function() {
        return Promise.all([f.e(0), f.e(2), f.e(91)]).then(
          f.bind(null, "GEPe")
        );
      }),
      h = i.a.lazy(function() {
        return Promise.all([f.e(0), f.e(92), f.e(2), f.e(6)]).then(
          f.bind(null, "IY+y")
        );
      }),
      m = function() {
        return u.a.IS_CREATOR_HOME || u.a.IS_CURATOR ? "groups" : "games";
      },
      g = function(e) {
        return "/" + m() + "/" + e + "/(partnerevents|events|announcements)";
      },
      v = function(e) {
        return "/app/" + e + "(/workshop/)?";
      },
      b = function(e) {
        return "/groups/" + e + "/";
      },
      y = function(e) {
        return "/id/" + e + "/";
      },
      E = function(e) {
        return "/profiles/" + e + "/";
      },
      M = function() {
        return "/" + m() + "/:anything*/diagdata";
      },
      w = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(_.d)(t, e),
          (t.prototype.componentDidMount = function() {
            n ||
              (n = Object(p.b)(document)).Show(
                i.a.createElement(l.b, { ModalManager: Object(l.f)(window) })
              );
          }),
          (t.prototype.render = function() {
            return i.a.createElement(
              o.a,
              {
                basename: (function() {
                  var e = document.createElement("a");
                  e.href = u.b.COMMUNITY_BASE_URL;
                  var t = e.pathname;
                  t.endsWith("/") || (t += "/");
                  return t;
                })()
              },
              i.a.createElement(
                i.a.Suspense,
                { fallback: i.a.createElement("div", null) },
                i.a.createElement(
                  s.e,
                  null,
                  i.a.createElement(s.c, {
                    path: g(":appid_or_vanity_str"),
                    render: function(e) {
                      return i.a.createElement(h, null);
                    }
                  }),
                  i.a.createElement(s.c, {
                    path: v(":appid"),
                    render: function(e) {
                      return i.a.createElement(h, null);
                    }
                  }),
                  i.a.createElement(s.c, {
                    path: b(":groupid_or_vanity_str"),
                    render: function(e) {
                      return i.a.createElement(h, null);
                    }
                  }),
                  i.a.createElement(s.c, {
                    path: y(":vanity_url"),
                    render: function(e) {
                      return i.a.createElement(d, Object(_.a)({}, e));
                    }
                  }),
                  i.a.createElement(s.c, {
                    path: E(":steamid"),
                    render: function(e) {
                      return i.a.createElement(d, Object(_.a)({}, e));
                    }
                  }),
                  i.a.createElement(s.c, {
                    exact: !0,
                    path: M(),
                    render: function(e) {
                      return i.a.createElement(
                        a,
                        Object(_.a)({}, e, {
                          key: e.match.params.gid,
                          strConfigID: "application_config"
                        })
                      );
                    }
                  }),
                  i.a.createElement(s.c, { component: O })
                )
              )
            );
          }),
          t
        );
      })(i.a.Component);
    function O(e) {
      return i.a.createElement(s.b, { push: !0, to: u.b.COMMUNITY_BASE_URL });
    }
    var S = f("i8i4"),
      k = f.n(S),
      C = (f("mRR+"), f("TLQK")),
      D = f("r64O");
    document.addEventListener("DOMContentLoaded", function() {
      return Object(_.b)(this, void 0, void 0, function() {
        return Object(_.e)(this, function(e) {
          switch (e.label) {
            case 0:
              return (
                document.getElementById("application_config")
                  ? Object(u.f)("application_config")
                  : Object(u.f)(),
                (f.p =
                  u.b.COMMUNITY_CDN_URL +
                  "public/javascript/applications/community/"),
                [
                  4,
                  (function(m) {
                    return Object(_.b)(this, void 0, void 0, function() {
                      var t, n, r, i, o, s, a, c, l, u, p, d, h;
                      return Object(_.e)(this, function(e) {
                        switch (e.label) {
                          case 0:
                            return (
                              (t = f("rCDf")("./shared_" + m + ".json").then(
                                function(e) {
                                  return e.default;
                                }
                              )),
                              (n = f("AvbV")("./main_" + m + ".json").then(
                                function(e) {
                                  return e.default;
                                }
                              )),
                              "english" !== m &&
                                ((r = f
                                  .e(1)
                                  .then(f.t.bind(null, "TYjx", 3))
                                  .then(function(e) {
                                    return e.default;
                                  })),
                                (i = f
                                  .e(3)
                                  .then(f.t.bind(null, "/rNK", 3))
                                  .then(function(e) {
                                    return e.default;
                                  }))),
                              [4, n]
                            );
                          case 1:
                            return (o = e.sent()), [4, t];
                          case 2:
                            return (s = e.sent()), (c = i) ? [4, i] : [3, 4];
                          case 3:
                            (c = e.sent()), (e.label = 4);
                          case 4:
                            return (a = c), (u = r) ? [4, r] : [3, 6];
                          case 5:
                            (u = e.sent()), (e.label = 6);
                          case 6:
                            for (
                              l = u,
                                C.c.InitFromObjects(o, a, s, l),
                                p = 0,
                                d = F;
                              p < d.length;
                              p++
                            )
                              (h = d[p]), C.c.AddTokens(h);
                            return (F = void 0), [2];
                        }
                      });
                    });
                  })(u.b.LANGUAGE)
                ]
              );
            case 1:
              return (
                e.sent(),
                document.getElementById("application_root") &&
                  k.a.render(
                    i.a.createElement(w, {}),
                    document.getElementById("application_root")
                  ),
                [2]
              );
          }
        });
      });
    });
    var F = [];
    window.LocalizationManifestReady = function(e, t, n) {
      Object(D.a)("manifest" === t, 'Expected manifest not "' + t + '"'),
        void 0 !== F ? F.push(n) : C.c.AddTokens(n);
    };
  },
  hJxo: function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return a;
    }),
      n.d(t, "b", function() {
        return c;
      });
    var r = n("mrSG"),
      o = n("i8i4"),
      s = n("X3Ds"),
      i = (function() {
        function e(e, t) {
          (this.m_bActive = !1),
            (this.m_fnBoundAnimationFunc = void 0),
            (this.m_window = e),
            (this.m_options = Object.assign({ timing: "sine" }, t));
        }
        return (
          (e.prototype.Start = function() {
            var e;
            switch (
              ((this.m_msStart = performance.now()),
              (this.m_msEnd = this.m_msStart + this.m_options.msDuration),
              this.m_options.timing)
            ) {
              case "linear":
                e = function(e) {
                  return e;
                };
                break;
              case "cubic-in-out":
                e = function(e) {
                  return e < 0.5
                    ? 4 * e * e * e
                    : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
                };
                break;
              case "sine":
              default:
                e = function(e) {
                  return 0.5 - Math.cos(e * Math.PI) / 2;
                };
            }
            (this.m_bActive = !0),
              (this.m_fnBoundAnimationFunc = this.OnInterval.bind(this, e)),
              this.m_window.requestAnimationFrame(this.m_fnBoundAnimationFunc);
          }),
          (e.prototype.BIsActive = function() {
            return this.m_bActive;
          }),
          (e.prototype.End = function() {
            this.m_bActive &&
              (this.Update(1), this.ClearInterval(), this.FireOnComplete());
          }),
          (e.prototype.FireOnComplete = function() {
            this.m_options.onComplete && this.m_options.onComplete();
          }),
          (e.prototype.Cancel = function() {
            this.m_bActive = !1;
          }),
          (e.prototype.OnInterval = function(e) {
            if (this.m_bActive) {
              var t = performance.now() - this.m_msStart;
              if (t >= this.m_options.msDuration) this.End();
              else {
                var n = t / this.m_options.msDuration;
                this.Update(e(n)),
                  this.m_window.requestAnimationFrame(
                    this.m_fnBoundAnimationFunc
                  );
              }
            }
          }),
          (e.prototype.ClearInterval = function() {
            this.m_bActive = !1;
          }),
          e
        );
      })(),
      a = (function(i) {
        function e(e, t, n) {
          var r = i.call(this, s.l(e), n) || this;
          return (r.m_props = {}), (r.m_object = e), (r.m_propTargets = t), r;
        }
        return (
          Object(r.d)(e, i),
          (e.prototype.Start = function() {
            for (var e in ((this.m_props = {}), this.m_propTargets)) {
              var t = parseFloat(this.m_object[e]) || 0,
                n = this.m_propTargets[e];
              t != n && (this.m_props[e] = { start: t, end: n });
            }
            i.prototype.Start.call(this);
          }),
          (e.prototype.Update = function(e) {
            for (var t in this.m_props) {
              var n = this.m_props[t],
                r = n.start + (n.end - n.start) * e;
              this.m_object[t] = r;
            }
          }),
          e
        );
      })(i),
      c = (function(i) {
        function e(e, t, n) {
          var r = i.call(this, s.l(o.findDOMNode(e)), n) || this;
          return (
            (r.m_props = {}),
            (r.m_component = e),
            (r.m_propTargets = t),
            (r.m_setStateOnComplete = n.setStateOnComplete),
            r
          );
        }
        return (
          Object(r.d)(e, i),
          (e.prototype.Start = function() {
            for (var e in ((this.m_props = {}), this.m_propTargets)) {
              var t = parseFloat(this.m_component.state[e]) || 0,
                n = this.m_propTargets[e];
              t != n && (this.m_props[e] = { start: t, end: n });
            }
            i.prototype.Start.call(this);
          }),
          (e.prototype.Update = function(e) {
            var t = {};
            for (var n in this.m_props) {
              var r = this.m_props[n],
                i = r.start + (r.end - r.start) * e;
              t[n] = i;
            }
            this.m_component.setState(t);
          }),
          (e.prototype.FireOnComplete = function() {
            i.prototype.FireOnComplete.call(this),
              this.m_setStateOnComplete &&
                this.m_component.setState(this.m_setStateOnComplete);
          }),
          e
        );
      })(i);
  },
  kLLr: function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return i;
    });
    var r = n("2lpH"),
      s = n.n(r),
      o = n("mgoM"),
      a = n("lkRc"),
      i = (function() {
        function i(e, t, n, r) {
          void 0 === e && (e = 0),
            e instanceof i
              ? (this.m_ulSteamID = e.m_ulSteamID)
              : "string" == typeof e
              ? (this.m_ulSteamID = s.a.fromString(e, !0))
              : t && n && void 0 !== r
              ? this.SetFromComponents(e, r, n, t)
              : (this.m_ulSteamID = e ? s.a.fromNumber(e, !0) : s.a.UZERO);
        }
        return (
          (i.InitFromAccountID = function(e) {
            return new i(Number(e), a.b.EUNIVERSE, 1, o.f);
          }),
          (i.InitFromClanID = function(e) {
            return new i(Number(e), a.b.EUNIVERSE, 7, 0);
          }),
          (i.prototype.GetAccountID = function() {
            return this.m_ulSteamID.getLowBitsUnsigned();
          }),
          (i.prototype.GetInstance = function() {
            return 1048575 & this.m_ulSteamID.getHighBitsUnsigned();
          }),
          (i.prototype.GetAccountType = function() {
            return (this.m_ulSteamID.getHighBitsUnsigned() >> 20) & 15;
          }),
          (i.prototype.GetUniverse = function() {
            return (this.m_ulSteamID.getHighBitsUnsigned() >> 24) & 255;
          }),
          (i.prototype.ConvertTo64BitString = function() {
            return this.m_ulSteamID.toString();
          }),
          (i.prototype.Render = function() {
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
          (i.prototype.BIsValid = function() {
            var e = this.GetAccountType();
            if (e <= 0 || 11 <= e) return !1;
            var t = this.GetUniverse();
            if (t <= 0 || 5 <= t) return !1;
            if (1 == e) {
              if (0 == this.GetAccountID() || this.GetInstance() > o.g)
                return !1;
            } else if (7 == e) {
              if (0 == this.GetAccountID() || 0 != this.GetInstance())
                return !1;
            } else if (3 == e && 0 == this.GetAccountID()) return !1;
            return !0;
          }),
          (i.prototype.BIsIndividualAccount = function() {
            return 1 == this.GetAccountType();
          }),
          (i.prototype.BIsClanAccount = function() {
            return 7 == this.GetAccountType();
          }),
          (i.prototype.SetAccountID = function(e) {
            this.m_ulSteamID = new s.a(
              e,
              this.m_ulSteamID.getHighBitsUnsigned(),
              !0
            );
          }),
          (i.prototype.SetInstance = function(e) {
            this.SetFromComponents(
              this.GetAccountID(),
              e,
              this.GetAccountType(),
              this.GetUniverse()
            );
          }),
          (i.prototype.SetAccountType = function(e) {
            this.SetFromComponents(
              this.GetAccountID(),
              this.GetInstance(),
              e,
              this.GetUniverse()
            );
          }),
          (i.prototype.SetUniverse = function(e) {
            this.SetFromComponents(
              this.GetAccountID(),
              this.GetInstance(),
              this.GetAccountType(),
              e
            );
          }),
          (i.prototype.SetFromComponents = function(e, t, n, r) {
            var i = ((255 & r) << 24) + ((15 & n) << 20) + (1048575 & t),
              o = 4294967295 & e;
            this.m_ulSteamID = new s.a(o, i, !0);
          }),
          i
        );
      })();
  },
  kyHq: function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
      return i;
    }),
      n.d(t, "a", function() {
        return d;
      });
    n("mrSG");
    var r = n("mgoM");
    n.d(t, "c", function() {
      return r.a;
    }),
      n.d(t, "d", function() {
        return r.d;
      });
    n("2vnA");
    var i, o;
    ((o = i || (i = {}))[(o.EBrowserType_OffScreen = 0)] =
      "EBrowserType_OffScreen"),
      (o[(o.EBrowserType_OpenVROverlay = 1)] = "EBrowserType_OpenVROverlay"),
      (o[(o.EBrowserType_OpenVROverlay_Dashboard = 2)] =
        "EBrowserType_OpenVROverlay_Dashboard"),
      (o[(o.EBrowserType_DirectHWND = 3)] = "EBrowserType_DirectHWND"),
      (o[(o.EBrowserType_DirectHWND_Borderless = 4)] =
        "EBrowserType_DirectHWND_Borderless"),
      (o[(o.EBrowserType_DirectHWND_Hidden = 5)] =
        "EBrowserType_DirectHWND_Hidden"),
      (o[(o.EBrowserType_ChildHWNDNative = 6)] =
        "EBrowserType_ChildHWNDNative"),
      (o[(o.EBrowserType_Transparent_Toplevel = 7)] =
        "EBrowserType_Transparent_Toplevel"),
      (o[(o.EBrowserType_OffScreen_SharedTexture = 8)] =
        "EBrowserType_OffScreen_SharedTexture"),
      (o[(o.EBrowserType_OffScreen_GameOverlay = 9)] =
        "EBrowserType_OffScreen_GameOverlay"),
      (o[(o.EBrowserType_OffScreen_GameOverlay_SharedTexture = 10)] =
        "EBrowserType_OffScreen_GameOverlay_SharedTexture"),
      (o[(o.EBrowserType_Offscreen_FriendsUI = 11)] =
        "EBrowserType_Offscreen_FriendsUI"),
      (o[(o.EBrowserType_MAX = 12)] = "EBrowserType_MAX");
    var s, a, c, l;
    ((a = s || (s = {}))[(a.k_EClientUINotificationGroupChatMessage = 1)] =
      "k_EClientUINotificationGroupChatMessage"),
      (a[(a.k_EClientUINotificationFriendChatMessage = 2)] =
        "k_EClientUINotificationFriendChatMessage"),
      (a[(a.k_EClientUINotificationFriendPersonaState = 3)] =
        "k_EClientUINotificationFriendPersonaState"),
      ((l = c || (c = {}))[(l.k_EComputerActiveStateInvalid = 0)] =
        "k_EComputerActiveStateInvalid"),
      (l[(l.k_EComputerActiveStateActive = 1)] =
        "k_EComputerActiveStateActive"),
      (l[(l.k_EComputerActiveStateIdle = 2)] = "k_EComputerActiveStateIdle");
    var u, p;
    ((p = u || (u = {}))[(p.k_EPending = 0)] = "k_EPending"),
      (p[(p.k_EAccepted = 1)] = "k_EAccepted"),
      (p[(p.k_ERejected = 2)] = "k_ERejected");
    function d(e) {
      return "game" === e || "dlc" === e || "software" === e || "music" == e;
    }
    var h, m, f, _;
    ((m = h || (h = {}))[(m.k_EClientUsedInputTypeKeyboard = 0)] =
      "k_EClientUsedInputTypeKeyboard"),
      (m[(m.k_EClientUsedInputTypeMouse = 1)] = "k_EClientUsedInputTypeMouse"),
      (m[(m.k_EClientUsedInputTypeController = 2)] =
        "k_EClientUsedInputTypeController"),
      (m[(m.k_EClientUsedInputTypeMax = 3)] = "k_EClientUsedInputTypeMax"),
      ((_ = f || (f = {}))[(_.k_ERemoteClientLaunchOK = 1)] =
        "k_ERemoteClientLaunchOK"),
      (_[(_.k_ERemoteClientLaunchFail = 2)] = "k_ERemoteClientLaunchFail"),
      (_[(_.k_ERemoteClientLaunchRequiresUI = 3)] =
        "k_ERemoteClientLaunchRequiresUI"),
      (_[(_.k_ERemoteClientLaunchRequiresLaunchOption = 4)] =
        "k_ERemoteClientLaunchRequiresLaunchOption"),
      (_[(_.k_ERemoteClientLaunchRequiresEULA = 5)] =
        "k_ERemoteClientLaunchRequiresEULA"),
      (_[(_.k_ERemoteClientLaunchTimeout = 6)] =
        "k_ERemoteClientLaunchTimeout"),
      (_[(_.k_ERemoteClientLaunchStreamTimeout = 7)] =
        "k_ERemoteClientLaunchStreamTimeout"),
      (_[(_.k_ERemoteClientLaunchStreamClientFail = 8)] =
        "k_ERemoteClientLaunchStreamClientFail"),
      (_[(_.k_ERemoteClientLaunchOtherGameRunning = 9)] =
        "k_ERemoteClientLaunchOtherGameRunning"),
      (_[(_.k_ERemoteClientLaunchDownloadStarted = 10)] =
        "k_ERemoteClientLaunchDownloadStarted"),
      (_[(_.k_ERemoteClientLaunchDownloadNoSpace = 11)] =
        "k_ERemoteClientLaunchDownloadNoSpace"),
      (_[(_.k_ERemoteClientLaunchDownloadFiltered = 12)] =
        "k_ERemoteClientLaunchDownloadFiltered"),
      (_[(_.k_ERemoteClientLaunchDownloadRequiresUI = 13)] =
        "k_ERemoteClientLaunchDownloadRequiresUI"),
      (_[(_.k_ERemoteClientLaunchAccessDenied = 14)] =
        "k_ERemoteClientLaunchAccessDenied"),
      (_[(_.k_ERemoteClientLaunchNetworkError = 15)] =
        "k_ERemoteClientLaunchNetworkError"),
      (_[(_.k_ERemoteClientLaunchProgress = 16)] =
        "k_ERemoteClientLaunchProgress"),
      (_[(_.k_ERemoteClientLaunchParentalUnlockFailed = 17)] =
        "k_ERemoteClientLaunchParentalUnlockFailed"),
      (_[(_.k_ERemoteClientLaunchScreenLocked = 18)] =
        "k_ERemoteClientLaunchScreenLocked"),
      (_[(_.k_ERemoteClientLaunchUnsupported = 19)] =
        "k_ERemoteClientLaunchUnsupported"),
      (_[(_.k_ERemoteClientLaunchDisabledLocal = 20)] =
        "k_ERemoteClientLaunchDisabledLocal"),
      (_[(_.k_ERemoteClientLaunchDisabledRemote = 21)] =
        "k_ERemoteClientLaunchDisabledRemote"),
      (_[(_.k_ERemoteClientLaunchBroadcasting = 22)] =
        "k_ERemoteClientLaunchBroadcasting"),
      (_[(_.k_ERemoteClientLaunchBusy = 23)] = "k_ERemoteClientLaunchBusy"),
      (_[(_.k_ERemoteClientLaunchDriversNotInstalled = 24)] =
        "k_ERemoteClientLaunchDriversNotInstalled"),
      (_[(_.k_ERemoteClientLaunchTransportUnavailable = 25)] =
        "k_ERemoteClientLaunchTransportUnavailable"),
      (_[(_.k_ERemoteClientLaunchCanceled = 26)] =
        "k_ERemoteClientLaunchCanceled"),
      (_[(_.k_ERemoteClientLaunchInvisible = 27)] =
        "k_ERemoteClientLaunchInvisible"),
      (_[(_.k_ERemoteClientLaunchRestrictedCountry = 28)] =
        "k_ERemoteClientLaunchRestrictedCountry");
    var g, v;
    ((v = g || (g = {}))[(v.k_ESteamRealmUnknown = 0)] =
      "k_ESteamRealmUnknown"),
      (v[(v.k_ESteamRealmGlobal = 1)] = "k_ESteamRealmGlobal"),
      (v[(v.k_ESteamRealmChina = 2)] = "k_ESteamRealmChina");
    var b, y, E, M, w, O;
    ((y = b || (b = {}))[(y.Unknown = 0)] = "Unknown"),
      (y[(y.Wired = 1)] = "Wired"),
      (y[(y.Wireless = 2)] = "Wireless"),
      ((M = E || (E = {}))[(M.NotPresent = 0)] = "NotPresent"),
      (M[(M.Failed = 1)] = "Failed"),
      (M[(M.Disconnected = 2)] = "Disconnected"),
      (M[(M.Disconnecting = 3)] = "Disconnecting"),
      (M[(M.Connecting = 4)] = "Connecting"),
      (M[(M.Connected = 5)] = "Connected"),
      (M[(M.Retrying = 6)] = "Retrying"),
      ((O = w || (w = {}))[(O.None = 0)] = "None"),
      (O[(O.StaticWep = 1)] = "StaticWep"),
      (O[(O.DynamicWep = 2)] = "DynamicWep"),
      (O[(O.Wpa = 4)] = "Wpa"),
      (O[(O.WpaEnterprise = 8)] = "WpaEnterprise"),
      (O[(O.Wpa2 = 16)] = "Wpa2"),
      (O[(O.Wpa2Enterprise = 32)] = "Wpa2Enterprise"),
      (O[(O.Unsupported = 32768)] = "Unsupported");
  },
  lkRc: function(e, t, n) {
    "use strict";
    n("mrSG");
    var r = n("YyVH");
    function s() {
      return !!window.document;
    }
    n.d(t, "b", function() {
      return a;
    }),
      n.d(t, "g", function() {
        return c;
      }),
      n.d(t, "a", function() {
        return u;
      }),
      n.d(t, "f", function() {
        return d;
      }),
      n.d(t, "e", function() {
        return h;
      }),
      n.d(t, "c", function() {
        return m;
      }),
      n.d(t, "d", function() {
        return f;
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
            if (!s()) return i || (i = o()), i;
            var e = (function(e) {
              if (!s() || !window.document.cookie) return null;
              var t = document.cookie.match("(^|; )" + e + "=([^;]*)");
              return t && t[2] ? decodeURIComponent(t[2]) : null;
            })("sessionid");
            e || (e = o());
            return e;
          })();
        },
        FRIENDSUI_BETA: !1,
        STEAM_TV: !1,
        DEV_MODE: !1,
        OFFLINE_MODE: !1
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
        country_code: ""
      },
      l = { steamid: "", clanid: 0, listid: 0 },
      u = {
        CLANSTEAMID: "",
        CLANACCOUNTID: 0,
        ANNOUNCEMENT_GID: "",
        IMG_URL: "",
        APPID: 0,
        VANITY_ID: "",
        IS_CREATOR_HOME: !1,
        IS_CURATOR: !1,
        CAN_UPLOAD_IMAGES: !1,
        HEADER_IMAGE: "",
        APP_NAME: "",
        HAS_ADULT_CONTENT: !1,
        HAS_ADULT_CONTENT_SEX: !1,
        HAS_ADULT_CONTENT_VIOLENCE: !1
      },
      p = "webui_config";
    function o() {
      var e = (function() {
        for (var e = "", t = 0; t < 24; t++)
          e += Object(r.b)(0, 35).toString(36);
        return e;
      })();
      return (
        (function(e, t, n, r) {
          if (s()) {
            r || (r = "/");
            var i = "";
            if (void 0 !== n && n) {
              var o = new Date();
              o.setTime(o.getTime() + 864e5 * n),
                (i = "; expires=" + o.toUTCString());
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
    function d(e) {
      void 0 === e && (e = p);
      var t = {},
        n = h("config", e);
      n && (delete n.SESSIONID, Object.assign(a, n), (t.config = !0));
      var r = h("userinfo", e);
      r && (Object.assign(c, r), (t.userConfig = !0));
      var i = h("broadcast", e);
      i && (Object.assign(l, i), (t.broadcastConfig = !0));
      var o = h("community", e);
      return o && (Object.assign(u, o), (t.communityConfig = !0)), t;
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
    function m() {
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
    function f() {
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
  mC9v: function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return r;
    });
    var r = (function() {
      function e(e, t, n) {
        void 0 === t && (t = 0),
          (this.m_nOffset = t || 0),
          e instanceof Uint8Array || e instanceof DataView
            ? ((this.m_nLength = n || e.byteLength - this.m_nOffset),
              (this.m_nOffset += e.byteOffset),
              (this.m_viewPacket = new DataView(
                e.buffer,
                this.m_nOffset,
                this.m_nLength
              )))
            : ((this.m_nLength = n || e.byteLength - this.m_nOffset),
              (this.m_viewPacket = new DataView(
                e,
                this.m_nOffset,
                this.m_nLength
              ))),
          (this.m_rgubPacket = new Uint8Array(
            this.m_viewPacket.buffer,
            this.m_viewPacket.byteOffset,
            this.m_viewPacket.byteLength
          )),
          (this.m_iGet = 0),
          (this.m_iPut = 0);
      }
      return (
        (e.prototype.TellGet = function() {
          return this.m_iGet + this.m_viewPacket.byteOffset;
        }),
        (e.prototype.GetPacket = function() {
          return this.m_viewPacket.buffer;
        }),
        (e.prototype.GetUint8 = function() {
          return this.m_viewPacket.getUint8(this.m_iGet++);
        }),
        (e.prototype.GetUint32 = function(e) {
          void 0 === e && (e = !0);
          var t = this.m_viewPacket.getUint32(this.m_iGet, e);
          return (this.m_iGet += 4), t;
        }),
        (e.prototype.SeekGetHead = function(e) {
          void 0 === e && (e = 0), (this.m_iGet = e || 0);
        }),
        (e.prototype.SeekGetCurrent = function(e) {
          this.m_iGet += e;
        }),
        (e.prototype.TellPut = function() {
          return this.m_iPut + this.m_viewPacket.byteOffset;
        }),
        (e.prototype.TellMaxPut = function() {
          return this.m_viewPacket.byteLength;
        }),
        (e.prototype.PutUint8 = function(e) {
          this.m_viewPacket.setUint8(this.m_iPut++, e);
        }),
        (e.prototype.PutUint32 = function(e, t) {
          void 0 === t && (t = !0),
            this.m_viewPacket.setUint32(this.m_iPut, e, t),
            (this.m_iPut += 4);
        }),
        (e.prototype.PutBytes = function(e) {
          this.m_rgubPacket.set(e, this.m_iPut), (this.m_iPut += e.length);
        }),
        (e.prototype.SeekPut = function(e) {
          this.m_iPut += e;
        }),
        (e.prototype.GetCountBytesRemaining = function() {
          return this.m_viewPacket.byteLength - this.m_iGet;
        }),
        e
      );
    })();
  },
  "mRR+": function(e, t, n) {
    "use strict";
    n("vDqi"), n("JMS6");
  },
  mgoM: function(e, t, n) {
    "use strict";
    n.d(t, "f", function() {
      return o;
    }),
      n.d(t, "g", function() {
        return s;
      }),
      n.d(t, "e", function() {
        return a;
      }),
      n.d(t, "c", function() {
        return c;
      }),
      n.d(t, "b", function() {
        return l;
      }),
      n.d(t, "d", function() {
        return u;
      }),
      n.d(t, "a", function() {
        return r;
      });
    var r,
      i,
      o = 1,
      s = 4,
      a = "18446744073709551615";
    function c(e, t) {
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
        default:
          return t;
      }
    }
    function l(e, t) {
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
    function u(e, t) {
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
    ((i = r || (r = {}))[(i.k_EOtherEvent = 1)] = "k_EOtherEvent"),
      (i[(i.k_EGameEvent = 2)] = "k_EGameEvent"),
      (i[(i.k_EPartyEvent = 3)] = "k_EPartyEvent"),
      (i[(i.k_EMeetingEvent = 4)] = "k_EMeetingEvent"),
      (i[(i.k_ESpecialCauseEvent = 5)] = "k_ESpecialCauseEvent"),
      (i[(i.k_EMusicAndArtsEvent = 6)] = "k_EMusicAndArtsEvent"),
      (i[(i.k_ESportsEvent = 7)] = "k_ESportsEvent"),
      (i[(i.k_ETripEvent = 8)] = "k_ETripEvent"),
      (i[(i.k_EChatEvent = 9)] = "k_EChatEvent"),
      (i[(i.k_EGameReleaseEvent = 10)] = "k_EGameReleaseEvent"),
      (i[(i.k_EBroadcastEvent = 11)] = "k_EBroadcastEvent"),
      (i[(i.k_ESmallUpdateEvent = 12)] = "k_ESmallUpdateEvent"),
      (i[(i.k_ERegularUpdateEvent = 13)] = "k_ERegularUpdateEvent"),
      (i[(i.k_EMajorUpdateEvent = 14)] = "k_EMajorUpdateEvent"),
      (i[(i.k_EDLCReleaseEvent = 15)] = "k_EDLCReleaseEvent"),
      (i[(i.k_EFutureReleaseEvent = 16)] = "k_EFutureReleaseEvent"),
      (i[(i.k_EESportTournamentStreamEvent = 17)] =
        "k_EESportTournamentStreamEvent"),
      (i[(i.k_EDevStreamEvent = 18)] = "k_EDevStreamEvent"),
      (i[(i.k_EFamousStreamEvent = 19)] = "k_EFamousStreamEvent"),
      (i[(i.k_EGameSalesEvent = 20)] = "k_EGameSalesEvent"),
      (i[(i.k_EGameItemSalesEvent = 21)] = "k_EGameItemSalesEvent"),
      (i[(i.k_EInGameBonusXPEvent = 22)] = "k_EInGameBonusXPEvent"),
      (i[(i.k_EInGameLootEvent = 23)] = "k_EInGameLootEvent"),
      (i[(i.k_EInGamePerksEvent = 24)] = "k_EInGamePerksEvent"),
      (i[(i.k_EInGameChallengeEvent = 25)] = "k_EInGameChallengeEvent"),
      (i[(i.k_EInGameContestEvent = 26)] = "k_EInGameContestEvent"),
      (i[(i.k_EIRLEvent = 27)] = "k_EIRLEvent"),
      (i[(i.k_ENewsEvent = 28)] = "k_ENewsEvent"),
      (i[(i.k_EBetaReleaseEvent = 29)] = "k_EBetaReleaseEvent"),
      (i[(i.k_EFreeTrial = 31)] = "k_EFreeTrial"),
      (i[(i.k_ESeasonRelease = 32)] = "k_ESeasonRelease"),
      (i[(i.k_ECrosspostEvent = 34)] = "k_ECrosspostEvent"),
      (i[(i.k_EInGameEventGeneral = 35)] = "k_EInGameEventGeneral");
    var p, d;
    r.k_EOtherEvent,
      r.k_EGameEvent,
      r.k_EPartyEvent,
      r.k_EMeetingEvent,
      r.k_ESpecialCauseEvent,
      r.k_EMusicAndArtsEvent,
      r.k_ESportsEvent,
      r.k_ETripEvent,
      r.k_EChatEvent,
      r.k_EGameReleaseEvent,
      r.k_EBroadcastEvent,
      r.k_ESmallUpdateEvent,
      r.k_ERegularUpdateEvent,
      r.k_EMajorUpdateEvent,
      r.k_EDLCReleaseEvent,
      r.k_EFutureReleaseEvent,
      r.k_EESportTournamentStreamEvent,
      r.k_EDevStreamEvent,
      r.k_EFamousStreamEvent,
      r.k_EGameSalesEvent,
      r.k_EGameItemSalesEvent,
      r.k_EInGameBonusXPEvent,
      r.k_EInGameLootEvent,
      r.k_EInGamePerksEvent,
      r.k_EInGameChallengeEvent,
      r.k_EInGameContestEvent,
      r.k_EIRLEvent,
      r.k_ENewsEvent,
      r.k_EBetaReleaseEvent,
      r.k_EFreeTrial,
      r.k_ESeasonRelease,
      r.k_ECrosspostEvent,
      r.k_EInGameEventGeneral;
    ((d = p || (p = {}))[(d.k_ELaunchSource_None = 0)] =
      "k_ELaunchSource_None"),
      (d[(d.k_ELaunchSource_2ftLibraryDetails = 100)] =
        "k_ELaunchSource_2ftLibraryDetails"),
      (d[(d.k_ELaunchSource_2ftLibraryListView = 101)] =
        "k_ELaunchSource_2ftLibraryListView"),
      (d[(d.k_ELaunchSource_2ftLibraryGrid = 103)] =
        "k_ELaunchSource_2ftLibraryGrid"),
      (d[(d.k_ELaunchSource_InstallSubComplete = 104)] =
        "k_ELaunchSource_InstallSubComplete"),
      (d[(d.k_ELaunchSource_DownloadsPage = 105)] =
        "k_ELaunchSource_DownloadsPage"),
      (d[(d.k_ELaunchSource_RemoteClientStartStreaming = 106)] =
        "k_ELaunchSource_RemoteClientStartStreaming"),
      (d[(d.k_ELaunchSource_2ftMiniModeList = 107)] =
        "k_ELaunchSource_2ftMiniModeList"),
      (d[(d.k_ELaunchSource_10ft = 200)] = "k_ELaunchSource_10ft"),
      (d[(d.k_ELaunchSource_DashAppLaunchCmdLine = 300)] =
        "k_ELaunchSource_DashAppLaunchCmdLine"),
      (d[(d.k_ELaunchSource_DashGameIdLaunchCmdLine = 301)] =
        "k_ELaunchSource_DashGameIdLaunchCmdLine"),
      (d[(d.k_ELaunchSource_RunByGameDir = 302)] =
        "k_ELaunchSource_RunByGameDir"),
      (d[(d.k_ELaunchSource_SubCmdRunDashGame = 303)] =
        "k_ELaunchSource_SubCmdRunDashGame"),
      (d[(d.k_ELaunchSource_SteamURL_Launch = 400)] =
        "k_ELaunchSource_SteamURL_Launch"),
      (d[(d.k_ELaunchSource_SteamURL_Run = 401)] =
        "k_ELaunchSource_SteamURL_Run"),
      (d[(d.k_ELaunchSource_SteamURL_JoinLobby = 402)] =
        "k_ELaunchSource_SteamURL_JoinLobby"),
      (d[(d.k_ELaunchSource_SteamURL_RunGame = 403)] =
        "k_ELaunchSource_SteamURL_RunGame"),
      (d[(d.k_ELaunchSource_SteamURL_RunGameIdOrJumplist = 404)] =
        "k_ELaunchSource_SteamURL_RunGameIdOrJumplist"),
      (d[(d.k_ELaunchSource_SteamURL_RunSafe = 405)] =
        "k_ELaunchSource_SteamURL_RunSafe"),
      (d[(d.k_ELaunchSource_TrayIcon = 500)] = "k_ELaunchSource_TrayIcon"),
      (d[(d.k_ELaunchSource_LibraryLeftColumnContextMenu = 600)] =
        "k_ELaunchSource_LibraryLeftColumnContextMenu"),
      (d[(d.k_ELaunchSource_LibraryLeftColumnDoubleClick = 601)] =
        "k_ELaunchSource_LibraryLeftColumnDoubleClick"),
      (d[(d.k_ELaunchSource_Dota2Launcher = 700)] =
        "k_ELaunchSource_Dota2Launcher"),
      (d[(d.k_ELaunchSource_IRunGameEngine = 800)] =
        "k_ELaunchSource_IRunGameEngine"),
      (d[(d.k_ELaunchSource_DRMFailureResponse = 801)] =
        "k_ELaunchSource_DRMFailureResponse"),
      (d[(d.k_ELaunchSource_DRMDataRequest = 802)] =
        "k_ELaunchSource_DRMDataRequest"),
      (d[(d.k_ELaunchSource_CloudFilePanel = 803)] =
        "k_ELaunchSource_CloudFilePanel"),
      (d[(d.k_ELaunchSource_DiscoveredAlreadyRunning = 804)] =
        "k_ELaunchSource_DiscoveredAlreadyRunning"),
      (d[(d.k_ELaunchSource_GameActionJoinParty = 900)] =
        "k_ELaunchSource_GameActionJoinParty"),
      (d[(d.k_ELaunchSource_AppPortraitContextMenu = 1e3)] =
        "k_ELaunchSource_AppPortraitContextMenu");
  },
  r64O: function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return r;
    });
    var i = n("mrSG");
    function r(e, t) {
      for (var n = [], r = 2; r < arguments.length; r++)
        n[r - 2] = arguments[r];
      console.assert
        ? 0 == n.length
          ? console.assert(!!e, t)
          : console.assert.apply(console, Object(i.g)([!!e, t], n))
        : e || console.warn.apply(console, Object(i.g)([t], n));
    }
  },
  rCDf: function(e, t, r) {
    var i = {
      "./shared_arabic.json": ["d1TB", 61],
      "./shared_brazilian.json": ["Pg9r", 62],
      "./shared_bulgarian.json": ["ENge", 63],
      "./shared_czech.json": ["Ts6V", 64],
      "./shared_danish.json": ["9oiU", 65],
      "./shared_dutch.json": ["nxN4", 66],
      "./shared_english.json": ["TYjx", 1],
      "./shared_finnish.json": ["NuB8", 67],
      "./shared_french.json": ["bOPj", 68],
      "./shared_german.json": ["svuF", 69],
      "./shared_greek.json": ["eJKB", 70],
      "./shared_hungarian.json": ["T7i2", 71],
      "./shared_italian.json": ["w96W", 72],
      "./shared_japanese.json": ["XQ4S", 73],
      "./shared_koreana.json": ["4hyI", 74],
      "./shared_latam.json": ["3qrw", 75],
      "./shared_norwegian.json": ["XA4Q", 76],
      "./shared_polish.json": ["TpXn", 77],
      "./shared_portuguese.json": ["Q8UV", 78],
      "./shared_romanian.json": ["Eme1", 79],
      "./shared_russian.json": ["BUiO", 80],
      "./shared_schinese.json": ["3UpY", 81],
      "./shared_spanish.json": ["4Fxc", 82],
      "./shared_swedish.json": ["0JhB", 83],
      "./shared_tchinese.json": ["OYRc", 84],
      "./shared_thai.json": ["lhAZ", 85],
      "./shared_turkish.json": ["RSoU", 86],
      "./shared_ukrainian.json": ["lNXI", 87],
      "./shared_vietnamese.json": ["RSmC", 88]
    };
    function n(t) {
      var n = i[t];
      return n
        ? r.e(n[1]).then(function() {
            var e = n[0];
            return r.t(e, 3);
          })
        : Promise.resolve().then(function() {
            var e = new Error("Cannot find module '" + t + "'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          });
    }
    (n.keys = function() {
      return Object.keys(i);
    }),
      (n.id = "rCDf"),
      (e.exports = n);
  },
  sUmc: function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
      return s;
    }),
      n.d(t, "a", function() {
        return c;
      });
    var r = n("i8i4"),
      i = n("X3Ds"),
      o = (function() {
        return function(e) {
          this.instance = new a(e, !1);
        };
      })();
    function s(e) {
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
            var i = this;
            return (
              this.CancelShowInterval(),
              r
                ? new Promise(function(t, e) {
                    i.iIntervalShow = i.m_window.setTimeout(function() {
                      var e = i.m_parent.ownerDocument;
                      e.defaultView &&
                        !e.defaultView.closed &&
                        (i.InternalShow(n), t());
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
            return this.m_container && i.c(this.m_container, e);
          }),
          e
        );
      })(),
      c = (function() {
        function e(e) {
          (this.m_mapEmbeddedHovers = new WeakMap()), (this.m_strUniqueID = e);
        }
        return (
          (e.prototype.ShowElementDelayed = function(e, t, n, r) {
            var i = this.GetEmbeddedElement(e);
            return (i.activeObject = r), i.instance.Show(n, t);
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
              t || ((t = new o(e.body)), this.m_mapEmbeddedHovers.set(e, t)), t
            );
          }),
          e
        );
      })();
  },
  umRa: function(e, t, n) {
    e.exports = {
      Toggle: "toggle_Toggle_3POJz",
      Disabled: "toggle_Disabled_1jIKG",
      ToggleRail: "toggle_ToggleRail_3DiLY",
      Highlight: "toggle_Highlight_2FNJu",
      On: "toggle_On_3N31m",
      Off: "toggle_Off_1Qa-r",
      ToggleSwitch: "toggle_ToggleSwitch_21X4K",
      ToggleRow: "toggle_ToggleRow_NnxzA",
      Label: "toggle_Label_xK7Vv"
    };
  },
  "y+6m": function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
      return g;
    }),
      n.d(t, "d", function() {
        return v;
      }),
      n.d(t, "b", function() {
        return b;
      }),
      n.d(t, "f", function() {
        return y;
      }),
      n.d(t, "a", function() {
        return E;
      }),
      n.d(t, "e", function() {
        return M;
      }),
      n.d(t, "g", function() {
        return w;
      });
    var s = n("mrSG"),
      r = n("okNM"),
      a = n("q1tI"),
      c = n("i8i4"),
      l = n("TtDX"),
      u = n("JMS6"),
      L = n("X3Ds"),
      i = n("bxiW"),
      o = n("6Y59"),
      p = n("D4wO"),
      d = n("TLQK"),
      h = n("lkRc"),
      m = n("+jbA"),
      f = n.n(m),
      _ = n("exH9"),
      g = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(s.d)(t, e),
          (t.prototype.render = function() {
            var e = this.props,
              t = e.children,
              n = e.className,
              r = Object(s.f)(e, ["children", "className"]),
              i =
                this.context.contextMenuInstance &&
                this.context.contextMenuInstance.options.bUseWebStyles
                  ? "popup_menu popup_body"
                  : f.a.contextMenuContents;
            return (
              n && (i += " " + n),
              a.createElement("div", Object(s.a)({}, r, { className: i }), t)
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
      v = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(s.d)(t, e),
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
              Object(s.f)(e, ["onSelected", "bInteractableItem"])),
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
                Object(s.a)({ onMouseEnter: this.OnMouseEnter }, t, {
                  onClick: this.OnClick,
                  unselectable: this.props.unselectable,
                  className: _.a.apply(void 0, n)
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
          Object(s.c)([i.a], t.prototype, "OnClick", null),
          Object(s.c)([i.a], t.prototype, "OnMouseEnter", null),
          t
        );
      })(a.PureComponent),
      b = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(s.d)(t, e),
          (t.prototype.render = function() {
            var e = this.props,
              t = e.bChecked,
              n = e.children,
              r = e.className,
              i = Object(s.f)(e, ["bChecked", "children", "className"]);
            return a.createElement(
              v,
              Object(s.a)({}, i, {
                className: Object(_.a)(r, t && "menuChecked")
              }),
              a.createElement("div", { className: "contextMenuCheckMark" }),
              n
            );
          }),
          t
        );
      })(a.PureComponent),
      y = (a.PureComponent,
      (function(n) {
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
          Object(s.d)(e, n),
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
            (e.relatedTarget && L.c(e.currentTarget, e.relatedTarget)) ||
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
                !L.c(this.m_elMenu, this.m_elMenu.ownerDocument.activeElement))
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
                i = e.getBoundingClientRect(),
                o = null != this.props.popup,
                s = this.props.options,
                a = {
                  menuLeft: void 0,
                  menuRight: void 0,
                  menuTop: void 0,
                  menuBottom: void 0,
                  menuWidth: void 0,
                  menuHeight: void 0
                },
                c = this.props.clientX,
                l = this.props.clientY,
                u = n.innerWidth,
                p = n.innerHeight;
              if (o) {
                this.props.options.bScreenCoordinates ||
                  ((c += n.screenLeft), (l += n.screenTop)),
                  (r = L.g(n, r));
                var d = n.screen,
                  h = 0,
                  m = 0;
                d.availLeft && (h = d.availLeft),
                  d.availTop && (m = d.availTop),
                  (u = h + d.availWidth),
                  (p = m + d.availHeight);
              }
              (s.bOverlapHorizontal || s.bOverlapVertical) && (c = l = void 0);
              var f = c || r.left,
                _ = c || r.right,
                g = i.width;
              s.bMatchWidth && ((g = _ - f), (a.menuWidth = g));
              var v = (s.bOverlapHorizontal ? _ : f) - g,
                b = 0 < v,
                y = u - (s.bOverlapHorizontal ? f : _) - g,
                E = 0 < y,
                M = (s.bPreferPopLeft || !E) && b;
              b ||
                E ||
                ((M = E < b),
                s.bFitToWindow && ((g += (M ? v : y) - 8), (a.menuWidth = g))),
                (!s.bPreferPopLeft && E) || !b
                  ? (a.menuLeft = s.bOverlapHorizontal ? f : _)
                  : (a.menuRight = u - (s.bOverlapHorizontal ? _ : f));
              var w = l || r.top,
                O = l || r.bottom,
                S = e.scrollHeight;
              s.bMatchHeight && ((S = O - w), (a.menuHeight = S));
              var k = (s.bOverlapVertical ? O : w) - S,
                C = 0 < k,
                D = p - (s.bOverlapVertical ? w : O) - S,
                F = 0 < D,
                I = (s.bPreferPopTop || !F) && C && !s.bDisablePopTop;
              if (!C && !F) {
                var x =
                  void 0 !== s.bShiftToFitWindow
                    ? s.bShiftToFitWindow
                    : s.bFitToWindow && !s.bOverlapHorizontal;
                (I = D < k && !s.bDisablePopTop),
                  x && (I ? (a.menuTop = 4) : (a.menuBottom = 4)),
                  s.bFitToWindow &&
                    (x ? (S = Math.min(S, p - 8)) : (S += I ? k : D),
                    (a.menuHeight = S - 8));
              }
              void 0 === a.menuBottom &&
                void 0 === a.menuTop &&
                (I
                  ? (a.menuBottom = p - (s.bOverlapVertical ? O : w))
                  : (a.menuTop = s.bOverlapVertical ? w : O)),
                o
                  ? (a.menuHeight || (a.menuHeight = i.height),
                    a.menuWidth || (a.menuWidth = i.width),
                    a.menuBottom &&
                      !a.menuTop &&
                      ((a.menuTop = p - a.menuBottom - a.menuHeight),
                      (a.menuBottom = void 0)),
                    a.menuRight &&
                      !a.menuLeft &&
                      ((a.menuLeft = u - a.menuRight - a.menuWidth),
                      (a.menuRight = void 0)))
                  : (a.menuLeft && (a.menuLeft += n.scrollX),
                    a.menuTop && (a.menuTop += n.scrollY),
                    a.menuBottom &&
                      (a.menuBottom +=
                        n.document.body.clientHeight -
                        n.scrollY -
                        n.innerHeight),
                    a.menuRight &&
                      (a.menuRight +=
                        n.document.body.clientWidth -
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
            var i = this,
              e = { visibility: this.state.ready ? "visible" : "hidden" };
            if (this.props.popup) {
              var o = this.props.element.ownerDocument.defaultView;
              void 0 !== this.state.menuLeft &&
                void 0 !== this.state.menuTop &&
                void 0 !== this.state.menuWidth &&
                void 0 !== this.state.menuHeight &&
                o.SteamClient.Window.GetWindowRestoreDetails(function(e) {
                  var t = i.props.popup.window,
                    n = i.state.menuLeft - o.screenX,
                    r = i.state.menuTop - o.screenY;
                  try {
                    t.SteamClient.Window.PositionWindowRelative(
                      e,
                      n,
                      r,
                      i.state.menuWidth,
                      i.state.menuHeight
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
          Object(s.c)([i.a], e.prototype, "BindMenuElement", null),
          Object(s.c)(
            [i.a, Object(p.a)(100)],
            e.prototype,
            "OnMenuMutation",
            null
          ),
          Object(s.c)([i.a], e.prototype, "OnWindowResize", null),
          Object(s.c)([i.a], e.prototype, "OnBlur", null),
          Object(s.c)([i.a], e.prototype, "OnKeyDown", null),
          (e = Object(s.c)([r.a], e))
        );
      })(a.Component)),
      E = (function(i) {
        function o(e, t, n) {
          var r =
            i.call(this, "contextmenu_" + o.sm_iContextMenuInstance++, {
              title: "Menu",
              html_class: f.a.ContextMenuPopup + " client_chat_frame",
              body_class: "ContextMenuPopupBody",
              replace_existing_popup: !1,
              target_browser: n,
              eCreationFlags: u.b.ContextMenu
            }) || this;
          return (r.m_menuProps = e), (r.m_children = t), r;
        }
        return (
          Object(s.d)(o, i),
          (o.prototype.UpdateParamsBeforeShow = function(e) {
            if (this.m_menuProps.options.bScreenCoordinates)
              e.dimensions = {
                left: this.m_menuProps.clientX,
                top: this.m_menuProps.clientY,
                width: 350,
                height: 1
              };
            else {
              var t = L.g(
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
          (o.prototype.Render = function(e, t) {
            c.render(
              a.createElement(
                y,
                Object(s.a)({}, this.m_menuProps, { popup: this }),
                this.m_children
              ),
              t
            );
          }),
          (o.prototype.OnBlur = function() {}),
          (o.prototype.OnFocus = function() {}),
          (o.prototype.OnLoad = function() {}),
          (o.prototype.OnResize = function() {}),
          (o.prototype.OnClose = function() {}),
          (o.sm_iContextMenuInstance = 0),
          o
        );
      })(u.a);
    function M(e) {
      return a.createElement("div", { className: f.a.ContextMenuMouseOverlay });
    }
    function w(e) {
      var t = [],
        n = L.m(e),
        r = n.getSelection(),
        i = r && 0 < r.rangeCount && 0 < r.toString().length,
        o = e.target,
        s = !1;
      if (
        (o &&
          "tagName" in o &&
          (("INPUT" != o.tagName && "TEXTAREA" != o.tagName) || (s = !0)),
        (n.document.queryCommandEnabled("cut") || (i && s)) &&
          t.push(
            a.createElement(
              v,
              {
                key: "cut",
                onSelected: function() {
                  n.document.execCommand("cut");
                }
              },
              Object(d.d)("#ContextMenu_Cut")
            )
          ),
        (document.queryCommandEnabled("copy") || i) &&
          t.push(
            a.createElement(
              v,
              {
                key: "copy",
                onSelected: function() {
                  n.document.execCommand("copy");
                }
              },
              Object(d.d)("#ContextMenu_Copy")
            )
          ),
        h.b.IN_CLIENT &&
          s &&
          t.push(
            a.createElement(
              v,
              {
                key: "paste",
                onSelected: function() {
                  o.focus(), n.SteamClient._internal.Paste();
                }
              },
              Object(d.d)("#ContextMenu_Paste")
            )
          ),
        t.length)
      )
        Object(l.a)(a.createElement(g, null, t), e);
      else {
        if (e.shiftKey) return;
        e.preventDefault(), e.stopPropagation();
      }
    }
  }
});
