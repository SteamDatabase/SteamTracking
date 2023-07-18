/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8200422";
(() => {
  "use strict";
  var e,
    a,
    n,
    o,
    i,
    t,
    r,
    l = {},
    c = {};
  function s(e) {
    var a = c[e];
    if (void 0 !== a) return a.exports;
    var n = (c[e] = { id: e, loaded: !1, exports: {} });
    return l[e].call(n.exports, n, n.exports, s), (n.loaded = !0), n.exports;
  }
  (s.m = l),
    (e = []),
    (s.O = (a, n, o, i) => {
      if (!n) {
        var t = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [n, o, i] = e[d], r = !0, l = 0; l < n.length; l++)
            (!1 & i || t >= i) && Object.keys(s.O).every((e) => s.O[e](n[l]))
              ? n.splice(l--, 1)
              : ((r = !1), i < t && (t = i));
          if (r) {
            e.splice(d--, 1);
            var c = o();
            void 0 !== c && (a = c);
          }
        }
        return a;
      }
      i = i || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > i; d--) e[d] = e[d - 1];
      e[d] = [n, o, i];
    }),
    (s.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return s.d(a, { a }), a;
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (s.t = function (e, o) {
      if ((1 & o && (e = this(e)), 8 & o)) return e;
      if ("object" == typeof e && e) {
        if (4 & o && e.__esModule) return e;
        if (16 & o && "function" == typeof e.then) return e;
      }
      var i = Object.create(null);
      s.r(i);
      var t = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var r = 2 & o && e; "object" == typeof r && !~a.indexOf(r); r = n(r))
        Object.getOwnPropertyNames(r).forEach((a) => (t[a] = () => e[a]));
      return (t.default = () => e), s.d(i, t), i;
    }),
    (s.d = (e, a) => {
      for (var n in a)
        s.o(a, n) &&
          !s.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: a[n] });
    }),
    (s.f = {}),
    (s.e = (e) =>
      Promise.all(Object.keys(s.f).reduce((a, n) => (s.f[n](e, a), a), []))),
    (s.u = (e) =>
      "javascript/applications/help/" +
      {
        27: "localization/shared_japanese-json",
        113: "localization/main_romanian-json",
        131: "localization/shared_english-json",
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
      }[e] +
      ".js?contenthash=" +
      {
        27: "7005c991382cfc692e80",
        113: "e86de1159efdce57e44a",
        131: "08e20db07762fc066fca",
        301: "9cd085edb5f5e4b19b85",
        617: "fd7deda6e7cc4405b934",
        755: "8c6063a5d24bc21497a5",
        1133: "06d65b9439d650bb8575",
        1195: "8053766247d071c431b3",
        1261: "859defdd9dc2b15b273f",
        1311: "ecac0ee4ad254d82730b",
        1579: "0b0ac7dac8740ca0aa45",
        1953: "6cee6f63cfa0343dc3f5",
        2138: "8f80bed8a6f33e5aa577",
        2351: "05d553cb9b7d1ae31aa3",
        2557: "96fa7cab2b34849ec59f",
        2738: "33d80a3f8f469ce7e904",
        2822: "d7c2370a6df275ec5737",
        3038: "8a06c4d4d07656849275",
        3068: "2c15c4417185e336f4c8",
        3298: "28d7a186329e6143c46d",
        3602: "b9c07af8c889619cf489",
        4097: "1705d3cb734edf5bda3e",
        4183: "575f2385fb8e442455c2",
        4358: "f77eb3dc24f1df8e3bd9",
        4445: "e1994746f597c20f035b",
        4469: "4863041336868d425e1a",
        4487: "526d00d6978297b837dd",
        4513: "fc5ba4b9940b408ca6f0",
        4729: "897ac4cceaeb71756606",
        5012: "6e98c9390697707d0944",
        5277: "ea668e369a715c13a2bd",
        5279: "5fdc5cc10e5d894325ee",
        5493: "d3fa6014de1722e6e09a",
        5757: "052c8042dd3fa7619fc4",
        6091: "624f65ae55bc2f31514c",
        6403: "e3485c4fe06e2597883e",
        6415: "0d60dab91ec59b5da718",
        6457: "3039b23d9afd441b37b0",
        6844: "e55c3e937f48e68b3e83",
        6962: "9b3e33f8ebc47bb15a04",
        7629: "c9bad19cc96d9ae03ac0",
        7660: "5ed14971592bc0b979aa",
        7769: "91e5134226f1e25e0c68",
        7781: "c5f03c748bb3ebeb133c",
        7832: "a8bf24b794cbbe2f153b",
        7901: "5b1dc708dc855937f171",
        8085: "85841d14a4aa46e0a9e4",
        8274: "fbccea51d60236a5a91f",
        8282: "779f40e7ecee3ea21e36",
        8291: "0ff5a2cadcb893bfd660",
        8427: "0cc956d4d8bc314f6484",
        8433: "083cc82785094cf30afa",
        8525: "0dee3f88158a9897a61a",
        8592: "e4ac57a118909b34617b",
        9233: "417d91eef5cd03c09f39",
        9389: "a015700c874d7d6746a9",
        9547: "7f478ae6b90674e7c1aa",
        9665: "0504405b7b896748f52f",
        9854: "208e57c73de9bb3b7764",
        9951: "89e26cfa0e7b183eac22",
      }[e]),
    (s.miniCssF = (e) =>
      "css/applications/help/greenenvelope.css?contenthash=987ac2fe09d13eaf79f2"),
    (s.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (s.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
    (o = {}),
    (i = "Help:"),
    (s.l = (e, a, n, t) => {
      if (o[e]) o[e].push(a);
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
              f.getAttribute("src") == e ||
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
          (r.src = e)),
          (o[e] = [a]);
        var h = (a, n) => {
            (r.onerror = r.onload = null), clearTimeout(b);
            var i = o[e];
            if (
              (delete o[e],
              r.parentNode && r.parentNode.removeChild(r),
              i && i.forEach((e) => e(n)),
              a)
            )
              return a(n);
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
    (s.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (s.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      var e;
      s.g.importScripts && (e = s.g.location + "");
      var a = s.g.document;
      if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
        var n = a.getElementsByTagName("script");
        n.length && (e = n[n.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (s.p = e + "../../../");
    })(),
    (t = (e) =>
      new Promise((a, n) => {
        var o = s.miniCssF(e),
          i = s.p + o;
        if (
          ((e, a) => {
            for (
              var n = document.getElementsByTagName("link"), o = 0;
              o < n.length;
              o++
            ) {
              var i =
                (r = n[o]).getAttribute("data-href") || r.getAttribute("href");
              if ("stylesheet" === r.rel && (i === e || i === a)) return r;
            }
            var t = document.getElementsByTagName("style");
            for (o = 0; o < t.length; o++) {
              var r;
              if ((i = (r = t[o]).getAttribute("data-href")) === e || i === a)
                return r;
            }
          })(o, i)
        )
          return a();
        ((e, a, n, o) => {
          var i = document.createElement("link");
          (i.rel = "stylesheet"),
            (i.type = "text/css"),
            (i.onerror = i.onload =
              (t) => {
                if (((i.onerror = i.onload = null), "load" === t.type)) n();
                else {
                  var r = t && ("load" === t.type ? "missing" : t.type),
                    l = (t && t.target && t.target.href) || a,
                    c = new Error(
                      "Loading CSS chunk " + e + " failed.\n(" + l + ")",
                    );
                  (c.code = "CSS_CHUNK_LOAD_FAILED"),
                    (c.type = r),
                    (c.request = l),
                    i.parentNode.removeChild(i),
                    o(c);
                }
              }),
            (i.href = a),
            document.head.appendChild(i);
        })(e, i, a, n);
      })),
    (r = { 6700: 0 }),
    (s.f.miniCss = (e, a) => {
      r[e]
        ? a.push(r[e])
        : 0 !== r[e] &&
          { 3068: 1 }[e] &&
          a.push(
            (r[e] = t(e).then(
              () => {
                r[e] = 0;
              },
              (a) => {
                throw (delete r[e], a);
              },
            )),
          );
    }),
    (() => {
      var e = { 6700: 0 };
      (s.f.j = (a, n) => {
        var o = s.o(e, a) ? e[a] : void 0;
        if (0 !== o)
          if (o) n.push(o[2]);
          else if (6700 != a) {
            var i = new Promise((n, i) => (o = e[a] = [n, i]));
            n.push((o[2] = i));
            var t = s.p + s.u(a),
              r = new Error();
            s.l(
              t,
              (n) => {
                if (s.o(e, a) && (0 !== (o = e[a]) && (e[a] = void 0), o)) {
                  var i = n && ("load" === n.type ? "missing" : n.type),
                    t = n && n.target && n.target.src;
                  (r.message =
                    "Loading chunk " + a + " failed.\n(" + i + ": " + t + ")"),
                    (r.name = "ChunkLoadError"),
                    (r.type = i),
                    (r.request = t),
                    o[1](r);
                }
              },
              "chunk-" + a,
              a,
            );
          } else e[a] = 0;
      }),
        (s.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var o,
            i,
            [t, r, l] = n,
            c = 0;
          if (t.some((a) => 0 !== e[a])) {
            for (o in r) s.o(r, o) && (s.m[o] = r[o]);
            if (l) var d = l(s);
          }
          for (a && a(n); c < t.length; c++)
            (i = t[c]), s.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return s.O(d);
        },
        n = (self.webpackChunkHelp = self.webpackChunkHelp || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
