/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8107164";
(() => {
  "use strict";
  var a,
    e,
    n,
    o,
    i,
    t = {},
    r = {};
  function c(a) {
    var e = r[a];
    if (void 0 !== e) return e.exports;
    var n = (r[a] = { id: a, loaded: !1, exports: {} });
    return t[a].call(n.exports, n, n.exports, c), (n.loaded = !0), n.exports;
  }
  (c.m = t),
    (a = []),
    (c.O = (e, n, o, i) => {
      if (!n) {
        var t = 1 / 0;
        for (d = 0; d < a.length; d++) {
          for (var [n, o, i] = a[d], r = !0, l = 0; l < n.length; l++)
            (!1 & i || t >= i) && Object.keys(c.O).every((a) => c.O[a](n[l]))
              ? n.splice(l--, 1)
              : ((r = !1), i < t && (t = i));
          if (r) {
            a.splice(d--, 1);
            var s = o();
            void 0 !== s && (e = s);
          }
        }
        return e;
      }
      i = i || 0;
      for (var d = a.length; d > 0 && a[d - 1][2] > i; d--) a[d] = a[d - 1];
      a[d] = [n, o, i];
    }),
    (c.n = (a) => {
      var e = a && a.__esModule ? () => a.default : () => a;
      return c.d(e, { a: e }), e;
    }),
    (n = Object.getPrototypeOf
      ? (a) => Object.getPrototypeOf(a)
      : (a) => a.__proto__),
    (c.t = function (a, o) {
      if ((1 & o && (a = this(a)), 8 & o)) return a;
      if ("object" == typeof a && a) {
        if (4 & o && a.__esModule) return a;
        if (16 & o && "function" == typeof a.then) return a;
      }
      var i = Object.create(null);
      c.r(i);
      var t = {};
      e = e || [null, n({}), n([]), n(n)];
      for (var r = 2 & o && a; "object" == typeof r && !~e.indexOf(r); r = n(r))
        Object.getOwnPropertyNames(r).forEach((e) => (t[e] = () => a[e]));
      return (t.default = () => a), c.d(i, t), i;
    }),
    (c.d = (a, e) => {
      for (var n in e)
        c.o(e, n) &&
          !c.o(a, n) &&
          Object.defineProperty(a, n, { enumerable: !0, get: e[n] });
    }),
    (c.f = {}),
    (c.e = (a) =>
      Promise.all(Object.keys(c.f).reduce((e, n) => (c.f[n](a, e), e), []))),
    (c.u = (a) =>
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
        27: "2e709acc85a4453aa048",
        113: "e86de1159efdce57e44a",
        131: "746e6cb70b859a0fe47a",
        301: "9cd085edb5f5e4b19b85",
        617: "fd7deda6e7cc4405b934",
        755: "18bcc40376c2b7be9f7e",
        1133: "06d65b9439d650bb8575",
        1195: "8053766247d071c431b3",
        1261: "1dac2ef7495d36f9d4d8",
        1311: "ecac0ee4ad254d82730b",
        1579: "a04490383f068e5da093",
        1953: "9f1f7383f04b978b6e54",
        2138: "0ee7f4de05b9fa667e39",
        2351: "05d553cb9b7d1ae31aa3",
        2557: "96fa7cab2b34849ec59f",
        2738: "d1d3d9b73eab963f095b",
        2822: "58585205077a8b1cba46",
        3038: "8a06c4d4d07656849275",
        3298: "272901ae15d3f4bc1518",
        3602: "9d03a761712d6e9bd7ae",
        4097: "87067c14b4a1c58b81f2",
        4183: "d7bc2e78aefd72cf9321",
        4358: "f77eb3dc24f1df8e3bd9",
        4445: "8dc979068d26cca1f72a",
        4469: "1e41597c1070c002f62d",
        4487: "212fd4d7a8036ddd6ceb",
        4513: "bf239b7734c3404cecbc",
        4729: "7a90f99dc7d1a34c836f",
        5012: "6e98c9390697707d0944",
        5277: "ea668e369a715c13a2bd",
        5279: "6939da233a5f82512a0d",
        5493: "d3fa6014de1722e6e09a",
        5757: "052c8042dd3fa7619fc4",
        6091: "624f65ae55bc2f31514c",
        6403: "8f5b0c62d0d49431ea5d",
        6415: "0d60dab91ec59b5da718",
        6457: "3039b23d9afd441b37b0",
        6844: "2d56354d85cd11d22283",
        6962: "9b3e33f8ebc47bb15a04",
        7629: "c9bad19cc96d9ae03ac0",
        7660: "d55fde6732b5f6c0796b",
        7769: "3395af88c46efb45a67e",
        7781: "7d59e721408866e0e13a",
        7832: "a8bf24b794cbbe2f153b",
        7901: "5b1dc708dc855937f171",
        8085: "55a9c3ddb21392045d89",
        8274: "fbccea51d60236a5a91f",
        8282: "779f40e7ecee3ea21e36",
        8291: "0ff5a2cadcb893bfd660",
        8427: "0cc956d4d8bc314f6484",
        8433: "e37cb5924e6dd4f23016",
        8525: "0dee3f88158a9897a61a",
        8592: "e4ac57a118909b34617b",
        9233: "417d91eef5cd03c09f39",
        9389: "a015700c874d7d6746a9",
        9547: "2db804bbd1754d191d60",
        9665: "0504405b7b896748f52f",
        9854: "d1356e4829af6a22a671",
        9951: "d6242c674ee54e2cb315",
      }[a]),
    (c.miniCssF = (a) => {}),
    (c.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (a) {
        if ("object" == typeof window) return window;
      }
    })()),
    (c.o = (a, e) => Object.prototype.hasOwnProperty.call(a, e)),
    (o = {}),
    (i = "Help:"),
    (c.l = (a, e, n, t) => {
      if (o[a]) o[a].push(e);
      else {
        var r, l;
        if (void 0 !== n)
          for (
            var s = document.getElementsByTagName("script"), d = 0;
            d < s.length;
            d++
          ) {
            var f = s[d];
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
          c.nc && r.setAttribute("nonce", c.nc),
          r.setAttribute("data-webpack", i + n),
          (r.src = a)),
          (o[a] = [e]);
        var b = (e, n) => {
            (r.onerror = r.onload = null), clearTimeout(h);
            var i = o[a];
            if (
              (delete o[a],
              r.parentNode && r.parentNode.removeChild(r),
              i && i.forEach((a) => a(n)),
              e)
            )
              return e(n);
          },
          h = setTimeout(
            b.bind(null, void 0, { type: "timeout", target: r }),
            12e4
          );
        (r.onerror = b.bind(null, r.onerror)),
          (r.onload = b.bind(null, r.onload)),
          l && document.head.appendChild(r);
      }
    }),
    (c.r = (a) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(a, "__esModule", { value: !0 });
    }),
    (c.nmd = (a) => ((a.paths = []), a.children || (a.children = []), a)),
    (() => {
      var a;
      c.g.importScripts && (a = c.g.location + "");
      var e = c.g.document;
      if (!a && e && (e.currentScript && (a = e.currentScript.src), !a)) {
        var n = e.getElementsByTagName("script");
        n.length && (a = n[n.length - 1].src);
      }
      if (!a)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (a = a
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (c.p = a + "../../../");
    })(),
    (() => {
      var a = { 6700: 0 };
      (c.f.j = (e, n) => {
        var o = c.o(a, e) ? a[e] : void 0;
        if (0 !== o)
          if (o) n.push(o[2]);
          else if (6700 != e) {
            var i = new Promise((n, i) => (o = a[e] = [n, i]));
            n.push((o[2] = i));
            var t = c.p + c.u(e),
              r = new Error();
            c.l(
              t,
              (n) => {
                if (c.o(a, e) && (0 !== (o = a[e]) && (a[e] = void 0), o)) {
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
              e
            );
          } else a[e] = 0;
      }),
        (c.O.j = (e) => 0 === a[e]);
      var e = (e, n) => {
          var o,
            i,
            [t, r, l] = n,
            s = 0;
          if (t.some((e) => 0 !== a[e])) {
            for (o in r) c.o(r, o) && (c.m[o] = r[o]);
            if (l) var d = l(c);
          }
          for (e && e(n); s < t.length; s++)
            (i = t[s]), c.o(a, i) && a[i] && a[i][0](), (a[i] = 0);
          return c.O(d);
        },
        n = (self.webpackChunkHelp = self.webpackChunkHelp || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();
