/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8142059";
(() => {
  "use strict";
  var a,
    e,
    n,
    o,
    i,
    t = {},
    c = {};
  function r(a) {
    var e = c[a];
    if (void 0 !== e) return e.exports;
    var n = (c[a] = { id: a, loaded: !1, exports: {} });
    return t[a].call(n.exports, n, n.exports, r), (n.loaded = !0), n.exports;
  }
  (r.m = t),
    (a = []),
    (r.O = (e, n, o, i) => {
      if (!n) {
        var t = 1 / 0;
        for (d = 0; d < a.length; d++) {
          for (var [n, o, i] = a[d], c = !0, l = 0; l < n.length; l++)
            (!1 & i || t >= i) && Object.keys(r.O).every((a) => r.O[a](n[l]))
              ? n.splice(l--, 1)
              : ((c = !1), i < t && (t = i));
          if (c) {
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
    (r.n = (a) => {
      var e = a && a.__esModule ? () => a.default : () => a;
      return r.d(e, { a: e }), e;
    }),
    (n = Object.getPrototypeOf
      ? (a) => Object.getPrototypeOf(a)
      : (a) => a.__proto__),
    (r.t = function (a, o) {
      if ((1 & o && (a = this(a)), 8 & o)) return a;
      if ("object" == typeof a && a) {
        if (4 & o && a.__esModule) return a;
        if (16 & o && "function" == typeof a.then) return a;
      }
      var i = Object.create(null);
      r.r(i);
      var t = {};
      e = e || [null, n({}), n([]), n(n)];
      for (var c = 2 & o && a; "object" == typeof c && !~e.indexOf(c); c = n(c))
        Object.getOwnPropertyNames(c).forEach((e) => (t[e] = () => a[e]));
      return (t.default = () => a), r.d(i, t), i;
    }),
    (r.d = (a, e) => {
      for (var n in e)
        r.o(e, n) &&
          !r.o(a, n) &&
          Object.defineProperty(a, n, { enumerable: !0, get: e[n] });
    }),
    (r.f = {}),
    (r.e = (a) =>
      Promise.all(Object.keys(r.f).reduce((e, n) => (r.f[n](a, e), e), []))),
    (r.u = (a) =>
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
        27: "cfd61e1fdedc91da3914",
        113: "e86de1159efdce57e44a",
        131: "3c87306bf861817cc2eb",
        301: "9cd085edb5f5e4b19b85",
        617: "fd7deda6e7cc4405b934",
        755: "f3b5795dcdfcf3d77433",
        1133: "06d65b9439d650bb8575",
        1195: "8053766247d071c431b3",
        1261: "e5c1814e06484fe66fde",
        1311: "ecac0ee4ad254d82730b",
        1579: "170ef271cee07790224c",
        1953: "d66531ae94c236d45147",
        2138: "4fc6d4aa46fc5553389d",
        2351: "05d553cb9b7d1ae31aa3",
        2557: "96fa7cab2b34849ec59f",
        2738: "ca30e2ff84d55606d489",
        2822: "0b3f1c316afa6f303d0d",
        3038: "8a06c4d4d07656849275",
        3298: "b3613534a0f79eb838a1",
        3602: "32f7bd94f5523c9a00a0",
        4097: "cafb2ed7b5df923c7d7e",
        4183: "82386771d2da73857a14",
        4358: "f77eb3dc24f1df8e3bd9",
        4445: "968cdfe9f50f967c454e",
        4469: "7f394540c2f5e9a4849d",
        4487: "e844da7a865f07efb6c9",
        4513: "86783de38df71f787d70",
        4729: "6512963ad355eaa2d099",
        5012: "6e98c9390697707d0944",
        5277: "ea668e369a715c13a2bd",
        5279: "50bbb50b9536117ac0d2",
        5493: "d3fa6014de1722e6e09a",
        5757: "052c8042dd3fa7619fc4",
        6091: "624f65ae55bc2f31514c",
        6403: "15fbf22b1d7de9e8d295",
        6415: "0d60dab91ec59b5da718",
        6457: "3039b23d9afd441b37b0",
        6844: "a4e9d40d4daef0938cbf",
        6962: "9b3e33f8ebc47bb15a04",
        7629: "c9bad19cc96d9ae03ac0",
        7660: "930aa87a4fa1bbfa8e65",
        7769: "3395af88c46efb45a67e",
        7781: "b9fc0b562da9483f185a",
        7832: "a8bf24b794cbbe2f153b",
        7901: "5b1dc708dc855937f171",
        8085: "276885e3646ecbb39c1f",
        8274: "fbccea51d60236a5a91f",
        8282: "779f40e7ecee3ea21e36",
        8291: "0ff5a2cadcb893bfd660",
        8427: "0cc956d4d8bc314f6484",
        8433: "bbcb40a6a671a4008fb8",
        8525: "0dee3f88158a9897a61a",
        8592: "e4ac57a118909b34617b",
        9233: "417d91eef5cd03c09f39",
        9389: "a015700c874d7d6746a9",
        9547: "f4ba19558bfc67493389",
        9665: "0504405b7b896748f52f",
        9854: "688335daee5e3a9f4543",
        9951: "0c04cf7d47bc56bf350e",
      }[a]),
    (r.miniCssF = (a) => {}),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (a) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.o = (a, e) => Object.prototype.hasOwnProperty.call(a, e)),
    (o = {}),
    (i = "Help:"),
    (r.l = (a, e, n, t) => {
      if (o[a]) o[a].push(e);
      else {
        var c, l;
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
              c = f;
              break;
            }
          }
        c ||
          ((l = !0),
          ((c = document.createElement("script")).charset = "utf-8"),
          (c.timeout = 120),
          r.nc && c.setAttribute("nonce", r.nc),
          c.setAttribute("data-webpack", i + n),
          (c.src = a)),
          (o[a] = [e]);
        var b = (e, n) => {
            (c.onerror = c.onload = null), clearTimeout(h);
            var i = o[a];
            if (
              (delete o[a],
              c.parentNode && c.parentNode.removeChild(c),
              i && i.forEach((a) => a(n)),
              e)
            )
              return e(n);
          },
          h = setTimeout(
            b.bind(null, void 0, { type: "timeout", target: c }),
            12e4
          );
        (c.onerror = b.bind(null, c.onerror)),
          (c.onload = b.bind(null, c.onload)),
          l && document.head.appendChild(c);
      }
    }),
    (r.r = (a) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(a, "__esModule", { value: !0 });
    }),
    (r.nmd = (a) => ((a.paths = []), a.children || (a.children = []), a)),
    (() => {
      var a;
      r.g.importScripts && (a = r.g.location + "");
      var e = r.g.document;
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
        (r.p = a + "../../../");
    })(),
    (() => {
      var a = { 6700: 0 };
      (r.f.j = (e, n) => {
        var o = r.o(a, e) ? a[e] : void 0;
        if (0 !== o)
          if (o) n.push(o[2]);
          else if (6700 != e) {
            var i = new Promise((n, i) => (o = a[e] = [n, i]));
            n.push((o[2] = i));
            var t = r.p + r.u(e),
              c = new Error();
            r.l(
              t,
              (n) => {
                if (r.o(a, e) && (0 !== (o = a[e]) && (a[e] = void 0), o)) {
                  var i = n && ("load" === n.type ? "missing" : n.type),
                    t = n && n.target && n.target.src;
                  (c.message =
                    "Loading chunk " + e + " failed.\n(" + i + ": " + t + ")"),
                    (c.name = "ChunkLoadError"),
                    (c.type = i),
                    (c.request = t),
                    o[1](c);
                }
              },
              "chunk-" + e,
              e
            );
          } else a[e] = 0;
      }),
        (r.O.j = (e) => 0 === a[e]);
      var e = (e, n) => {
          var o,
            i,
            [t, c, l] = n,
            s = 0;
          if (t.some((e) => 0 !== a[e])) {
            for (o in c) r.o(c, o) && (r.m[o] = c[o]);
            if (l) var d = l(r);
          }
          for (e && e(n); s < t.length; s++)
            (i = t[s]), r.o(a, i) && a[i] && a[i][0](), (a[i] = 0);
          return r.O(d);
        },
        n = (self.webpackChunkHelp = self.webpackChunkHelp || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();
