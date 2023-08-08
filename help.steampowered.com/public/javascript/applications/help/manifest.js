/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8250256";
(() => {
  "use strict";
  var a,
    e,
    n,
    o,
    i,
    t,
    r,
    l = {},
    c = {};
  function s(a) {
    var e = c[a];
    if (void 0 !== e) return e.exports;
    var n = (c[a] = { id: a, loaded: !1, exports: {} });
    return l[a].call(n.exports, n, n.exports, s), (n.loaded = !0), n.exports;
  }
  (s.m = l),
    (a = []),
    (s.O = (e, n, o, i) => {
      if (!n) {
        var t = 1 / 0;
        for (d = 0; d < a.length; d++) {
          for (var [n, o, i] = a[d], r = !0, l = 0; l < n.length; l++)
            (!1 & i || t >= i) && Object.keys(s.O).every((a) => s.O[a](n[l]))
              ? n.splice(l--, 1)
              : ((r = !1), i < t && (t = i));
          if (r) {
            a.splice(d--, 1);
            var c = o();
            void 0 !== c && (e = c);
          }
        }
        return e;
      }
      i = i || 0;
      for (var d = a.length; d > 0 && a[d - 1][2] > i; d--) a[d] = a[d - 1];
      a[d] = [n, o, i];
    }),
    (s.n = (a) => {
      var e = a && a.__esModule ? () => a.default : () => a;
      return s.d(e, { a: e }), e;
    }),
    (n = Object.getPrototypeOf
      ? (a) => Object.getPrototypeOf(a)
      : (a) => a.__proto__),
    (s.t = function (a, o) {
      if ((1 & o && (a = this(a)), 8 & o)) return a;
      if ("object" == typeof a && a) {
        if (4 & o && a.__esModule) return a;
        if (16 & o && "function" == typeof a.then) return a;
      }
      var i = Object.create(null);
      s.r(i);
      var t = {};
      e = e || [null, n({}), n([]), n(n)];
      for (var r = 2 & o && a; "object" == typeof r && !~e.indexOf(r); r = n(r))
        Object.getOwnPropertyNames(r).forEach((e) => (t[e] = () => a[e]));
      return (t.default = () => a), s.d(i, t), i;
    }),
    (s.d = (a, e) => {
      for (var n in e)
        s.o(e, n) &&
          !s.o(a, n) &&
          Object.defineProperty(a, n, { enumerable: !0, get: e[n] });
    }),
    (s.f = {}),
    (s.e = (a) =>
      Promise.all(Object.keys(s.f).reduce((e, n) => (s.f[n](a, e), e), []))),
    (s.u = (a) =>
      "javascript/applications/help/" +
      {
        27: "localization/shared_japanese-json",
        113: "localization/main_romanian-json",
        131: "localization/shared_english-json",
        146: "localization/shared_indonesian-json",
        301: "localization/main_russian-json",
        617: "localization/main_portuguese-json",
        755: "localization/shared_schinese-json",
        1133: "localization/main_bulgarian-json",
        1195: "localization/main_tchinese-json",
        1261: "localization/shared_norwegian-json",
        1311: "localization/main_greek-json",
        1579: "localization/shared_ukrainian-json",
        1953: "localization/shared_finnish-json",
        2138: "localization/shared_thai-json",
        2351: "localization/main_swedish-json",
        2557: "localization/main_ukrainian-json",
        2738: "localization/shared_turkish-json",
        2822: "localization/shared_greek-json",
        3038: "localization/main_french-json",
        3068: "greenenvelope",
        3298: "localization/shared_brazilian-json",
        3602: "localization/shared_dutch-json",
        4097: "localization/shared_spanish-json",
        4183: "localization/shared_danish-json",
        4358: "localization/shared_sc_schinese-json",
        4445: "localization/shared_german-json",
        4469: "localization/shared_koreana-json",
        4487: "localization/shared_swedish-json",
        4513: "localization/shared_italian-json",
        4729: "localization/shared_french-json",
        5012: "localization/main_italian-json",
        5277: "localization/main_latam-json",
        5279: "localization/shared_hungarian-json",
        5493: "localization/main_thai-json",
        5757: "localization/main_norwegian-json",
        6091: "localization/main_koreana-json",
        6403: "localization/shared_russian-json",
        6415: "localization/main_brazilian-json",
        6457: "localization/main_turkish-json",
        6844: "localization/shared_polish-json",
        6962: "localization/main_dutch-json",
        7629: "localization/main_schinese-json",
        7660: "localization/shared_romanian-json",
        7769: "localization/main_german-json",
        7781: "localization/shared_bulgarian-json",
        7832: "localization/shared_arabic-json",
        7901: "localization/main_vietnamese-json",
        8085: "localization/shared_czech-json",
        8274: "localization/main_hungarian-json",
        8282: "localization/main_czech-json",
        8291: "localization/main_polish-json",
        8427: "localization/main_finnish-json",
        8433: "localization/shared_vietnamese-json",
        8525: "localization/main_spanish-json",
        8592: "localization/main_danish-json",
        9233: "localization/main_japanese-json",
        9389: "localization/main_sc_schinese-json",
        9547: "localization/shared_tchinese-json",
        9665: "localization/main_english-json",
        9854: "localization/shared_portuguese-json",
        9951: "localization/shared_latam-json",
      }[a] +
      ".js?contenthash=" +
      {
        27: "ab52a79aff3be761d3ff",
        113: "822fcdd700aa77daf2bd",
        131: "4ea344fe9ab706289f0b",
        146: "70b1c7f5c29a1e04cc5c",
        301: "b1eae3daff01ab50bf48",
        617: "1f71f187baa58391b374",
        755: "a864cc6b46defce2a081",
        1133: "1f180f9d971dc082ff52",
        1195: "5d661717bf1d9d321097",
        1261: "db8fa5669aaacd10ed4e",
        1311: "98c05e52210648f67493",
        1579: "5336b13d5a73787b7908",
        1953: "b97fa80bd4aaaefc4cdb",
        2138: "5e090bc9927fcf0cd5f2",
        2351: "72a3310eecbe3ddbba36",
        2557: "4bdf7616c1c0bc3114c3",
        2738: "b5319adbe936f6fa9e66",
        2822: "e25e38b913d04dfd7def",
        3038: "9e21854409f35a2c8ef0",
        3068: "239239aee84a69c465dc",
        3298: "70b75a1e63d1eca26569",
        3602: "bc413d6dc05b260869f3",
        4097: "1f2e549aaa8e131ec432",
        4183: "b4b4c898a8a04e6658f0",
        4358: "bf15f811898cbdcc264d",
        4445: "49ccf67392d825e01427",
        4469: "4623ca6ef4a2e46ab2d5",
        4487: "0f24ca94e03b78f0a516",
        4513: "98248a8e5f4729888074",
        4729: "bea6adcfff3ae5fb799f",
        5012: "b641db8c2db12bf23552",
        5277: "bc5c66bdd263f13ad983",
        5279: "34d02a286100eb29daef",
        5493: "f475ac11d01b1544414d",
        5757: "aa844e0df57e6b35f205",
        6091: "044ee68e7da5bac87bbc",
        6403: "8081de7b936381cdb159",
        6415: "351320ae9c1ec9200049",
        6457: "a3ca1f4f79461f89de4a",
        6844: "9e1bf37a5a97ccbe205c",
        6962: "9463e7f4f5b8dbac9286",
        7629: "57b6ede2ef20c8b78b52",
        7660: "df39bee4b4ce6b54c313",
        7769: "3fe8873444848b9bbf44",
        7781: "84e781bd9cd0edb3f889",
        7832: "29fd6d9d173a1c6e1379",
        7901: "204bac8daff5e6c8baf0",
        8085: "22d2d58f509bfcbb2e6c",
        8274: "385a32610906070f8cae",
        8282: "c9f687ef9093270f2299",
        8291: "f3cb47e340941e0ab218",
        8427: "42488d37bd7b9256e2d4",
        8433: "f5b73a762812a3fe154b",
        8525: "202995421e71702b964a",
        8592: "291ed448ec34b5ebff45",
        9233: "807fba00fd79ad940d94",
        9389: "0fcd23b9bc465ffbf783",
        9547: "abe7bdd88a3cb6dcc834",
        9665: "5e042a69bdde05d584cf",
        9854: "7ec788c367059ffd5c62",
        9951: "68fa83e0cd7e518b056b",
      }[a]),
    (s.miniCssF = (a) =>
      "css/applications/help/greenenvelope.css?contenthash=ef5f0a736fe8b753606c"),
    (s.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (a) {
        if ("object" == typeof window) return window;
      }
    })()),
    (s.o = (a, e) => Object.prototype.hasOwnProperty.call(a, e)),
    (o = {}),
    (i = "Help:"),
    (s.l = (a, e, n, t) => {
      if (o[a]) o[a].push(e);
      else {
        var r, l;
        if (void 0 !== n)
          for (
            var c = document.getElementsByTagName("script"), d = 0;
            d < c.length;
            d++
          ) {
            var f = c[d];
            if (
              f.getAttribute("src") == a ||
              f.getAttribute("data-webpack") == i + n
            ) {
              r = f;
              break;
            }
          }
        r ||
          ((l = !0),
          ((r = document.createElement("script")).charset = "utf-8"),
          (r.timeout = 120),
          s.nc && r.setAttribute("nonce", s.nc),
          r.setAttribute("data-webpack", i + n),
          (r.src = a)),
          (o[a] = [e]);
        var h = (e, n) => {
            (r.onerror = r.onload = null), clearTimeout(b);
            var i = o[a];
            if (
              (delete o[a],
              r.parentNode && r.parentNode.removeChild(r),
              i && i.forEach((a) => a(n)),
              e)
            )
              return e(n);
          },
          b = setTimeout(
            h.bind(null, void 0, { type: "timeout", target: r }),
            12e4,
          );
        (r.onerror = h.bind(null, r.onerror)),
          (r.onload = h.bind(null, r.onload)),
          l && document.head.appendChild(r);
      }
    }),
    (s.r = (a) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(a, "__esModule", { value: !0 });
    }),
    (s.nmd = (a) => ((a.paths = []), a.children || (a.children = []), a)),
    (() => {
      var a;
      s.g.importScripts && (a = s.g.location + "");
      var e = s.g.document;
      if (!a && e && (e.currentScript && (a = e.currentScript.src), !a)) {
        var n = e.getElementsByTagName("script");
        n.length && (a = n[n.length - 1].src);
      }
      if (!a)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      (a = a
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (s.p = a + "../../../");
    })(),
    (t = (a) =>
      new Promise((e, n) => {
        var o = s.miniCssF(a),
          i = s.p + o;
        if (
          ((a, e) => {
            for (
              var n = document.getElementsByTagName("link"), o = 0;
              o < n.length;
              o++
            ) {
              var i =
                (r = n[o]).getAttribute("data-href") || r.getAttribute("href");
              if ("stylesheet" === r.rel && (i === a || i === e)) return r;
            }
            var t = document.getElementsByTagName("style");
            for (o = 0; o < t.length; o++) {
              var r;
              if ((i = (r = t[o]).getAttribute("data-href")) === a || i === e)
                return r;
            }
          })(o, i)
        )
          return e();
        ((a, e, n, o) => {
          var i = document.createElement("link");
          (i.rel = "stylesheet"),
            (i.type = "text/css"),
            (i.onerror = i.onload =
              (t) => {
                if (((i.onerror = i.onload = null), "load" === t.type)) n();
                else {
                  var r = t && ("load" === t.type ? "missing" : t.type),
                    l = (t && t.target && t.target.href) || e,
                    c = new Error(
                      "Loading CSS chunk " + a + " failed.\n(" + l + ")",
                    );
                  (c.code = "CSS_CHUNK_LOAD_FAILED"),
                    (c.type = r),
                    (c.request = l),
                    i.parentNode.removeChild(i),
                    o(c);
                }
              }),
            (i.href = e),
            document.head.appendChild(i);
        })(a, i, e, n);
      })),
    (r = { 6700: 0 }),
    (s.f.miniCss = (a, e) => {
      r[a]
        ? e.push(r[a])
        : 0 !== r[a] &&
          { 3068: 1 }[a] &&
          e.push(
            (r[a] = t(a).then(
              () => {
                r[a] = 0;
              },
              (e) => {
                throw (delete r[a], e);
              },
            )),
          );
    }),
    (() => {
      var a = { 6700: 0 };
      (s.f.j = (e, n) => {
        var o = s.o(a, e) ? a[e] : void 0;
        if (0 !== o)
          if (o) n.push(o[2]);
          else if (6700 != e) {
            var i = new Promise((n, i) => (o = a[e] = [n, i]));
            n.push((o[2] = i));
            var t = s.p + s.u(e),
              r = new Error();
            s.l(
              t,
              (n) => {
                if (s.o(a, e) && (0 !== (o = a[e]) && (a[e] = void 0), o)) {
                  var i = n && ("load" === n.type ? "missing" : n.type),
                    t = n && n.target && n.target.src;
                  (r.message =
                    "Loading chunk " + e + " failed.\n(" + i + ": " + t + ")"),
                    (r.name = "ChunkLoadError"),
                    (r.type = i),
                    (r.request = t),
                    o[1](r);
                }
              },
              "chunk-" + e,
              e,
            );
          } else a[e] = 0;
      }),
        (s.O.j = (e) => 0 === a[e]);
      var e = (e, n) => {
          var o,
            i,
            [t, r, l] = n,
            c = 0;
          if (t.some((e) => 0 !== a[e])) {
            for (o in r) s.o(r, o) && (s.m[o] = r[o]);
            if (l) var d = l(s);
          }
          for (e && e(n); c < t.length; c++)
            (i = t[c]), s.o(a, i) && a[i] && a[i][0](), (a[i] = 0);
          return s.O(d);
        },
        n = (self.webpackChunkHelp = self.webpackChunkHelp || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();
