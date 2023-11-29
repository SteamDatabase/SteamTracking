/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8528848";
(() => {
  "use strict";
  var a,
    e,
    n,
    o,
    i,
    t,
    r,
    c = {},
    l = {};
  function s(a) {
    var e = l[a];
    if (void 0 !== e) return e.exports;
    var n = (l[a] = { id: a, loaded: !1, exports: {} });
    return c[a].call(n.exports, n, n.exports, s), (n.loaded = !0), n.exports;
  }
  (s.m = c),
    (a = []),
    (s.O = (e, n, o, i) => {
      if (!n) {
        var t = 1 / 0;
        for (d = 0; d < a.length; d++) {
          for (var [n, o, i] = a[d], r = !0, c = 0; c < n.length; c++)
            (!1 & i || t >= i) && Object.keys(s.O).every((a) => s.O[a](n[c]))
              ? n.splice(c--, 1)
              : ((r = !1), i < t && (t = i));
          if (r) {
            a.splice(d--, 1);
            var l = o();
            void 0 !== l && (e = l);
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
        2603: "localization/main_indonesian-json",
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
        5425: "libraries~c11312a05",
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
        27: "ae0818d5eceb3e9929f7",
        113: "b16e26a14d5531e43837",
        131: "5ead82d909d8451d6d7a",
        146: "7b49080864716b3606dd",
        301: "8abe04a681c01a65a242",
        617: "0d49650675e6dd573482",
        755: "96f4a019f9c07322c2f7",
        1133: "78eac575318e1a21cce8",
        1195: "b2ad2c3df7cd203a4111",
        1261: "3478f15ab00aed58c04a",
        1311: "e9ac820f4822ab73e420",
        1579: "ddc02b009401eea4088f",
        1953: "5ec21fe9d25d0dae73b9",
        2138: "48912ce19be6659a783b",
        2351: "2dad26d01985ee8f810c",
        2557: "9764f2b0363fd6191184",
        2603: "d46f052b1d13e965dddb",
        2738: "b541d578591260159e5b",
        2822: "0fef7352ca3c5b0a60dc",
        3038: "c5a3913e9629cdd84817",
        3068: "33fdf5a4995b21c63db8",
        3298: "60d612ba64a08202daea",
        3602: "da8793acf9d9258124a4",
        4097: "cebcdb0bf174d4190d43",
        4183: "6892977d2573ab1fc3b7",
        4358: "e14986b3b25ab8969ee5",
        4445: "e9d0dd01e4dfaa3c40ff",
        4469: "c0da49b214f4a054340b",
        4487: "a9843ffd0ec3df985bc3",
        4513: "d212bd4479076a97baf2",
        4729: "52b99797602df8ce4bf9",
        5012: "95ff1f0234cabfc6724e",
        5277: "4ac7cb6313e8ee7efc82",
        5279: "039a0b7fa339430bf061",
        5425: "6cbee89c00e2998bcba9",
        5493: "78df680ac5cbaaf0c30c",
        5757: "048bf8dee9a76824a535",
        6091: "624f65ae55bc2f31514c",
        6403: "06802dd86dd789a3ba93",
        6415: "5c294e187de9a7e12c35",
        6457: "360be7809239f928e8a0",
        6844: "fafea93b422b437e8b96",
        6962: "497d50338582152c683a",
        7629: "d8dc047b99929e123470",
        7660: "0a19faeed4e518c0010f",
        7769: "8e9fd533b6f84e767ed6",
        7781: "bf97409880c6f90c26ba",
        7832: "a8bf24b794cbbe2f153b",
        7901: "5afbccf615a39ed8a46c",
        8085: "d0ca68c825dc3b46d7e2",
        8274: "89643864b7f5ee19f017",
        8282: "d34244b08bbfa955f5ee",
        8291: "778cfdd3a73b7d97f794",
        8427: "1a3190b4191e078e8ce9",
        8433: "e561748b8e887eecda5d",
        8525: "428c9a4eec5d719b5ca1",
        8592: "7e182b170da760f4b2bc",
        9233: "b6baccda743acd8fb1b0",
        9389: "4fdb6f672649e2208e7b",
        9547: "28e1c9c0f1e1d8f193fc",
        9665: "0504405b7b896748f52f",
        9854: "f3a6b9cbe15471bd5117",
        9951: "27c5080d6655dc193b3b",
      }[a]),
    (s.miniCssF = (a) =>
      "css/applications/help/greenenvelope.css?contenthash=7a07022f9d922a4df973"),
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
        var r, c;
        if (void 0 !== n)
          for (
            var l = document.getElementsByTagName("script"), d = 0;
            d < l.length;
            d++
          ) {
            var f = l[d];
            if (
              f.getAttribute("src") == a ||
              f.getAttribute("data-webpack") == i + n
            ) {
              r = f;
              break;
            }
          }
        r ||
          ((c = !0),
          ((r = document.createElement("script")).charset = "utf-8"),
          (r.timeout = 120),
          s.nc && r.setAttribute("nonce", s.nc),
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
            12e4,
          );
        (r.onerror = b.bind(null, r.onerror)),
          (r.onload = b.bind(null, r.onload)),
          c && document.head.appendChild(r);
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
                    c = (t && t.target && t.target.href) || e,
                    l = new Error(
                      "Loading CSS chunk " + a + " failed.\n(" + c + ")",
                    );
                  (l.code = "CSS_CHUNK_LOAD_FAILED"),
                    (l.type = r),
                    (l.request = c),
                    i.parentNode.removeChild(i),
                    o(l);
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
            [t, r, c] = n,
            l = 0;
          if (t.some((e) => 0 !== a[e])) {
            for (o in r) s.o(r, o) && (s.m[o] = r[o]);
            if (c) var d = c(s);
          }
          for (e && e(n); l < t.length; l++)
            (i = t[l]), s.o(a, i) && a[i] && a[i][0](), (a[i] = 0);
          return s.O(d);
        },
        n = (self.webpackChunkHelp = self.webpackChunkHelp || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();
