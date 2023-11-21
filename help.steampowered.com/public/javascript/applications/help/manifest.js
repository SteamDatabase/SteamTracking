/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8513214";
(() => {
  "use strict";
  var e,
    a,
    n,
    o,
    i,
    t,
    r,
    c = {},
    l = {};
  function s(e) {
    var a = l[e];
    if (void 0 !== a) return a.exports;
    var n = (l[e] = { id: e, loaded: !1, exports: {} });
    return c[e].call(n.exports, n, n.exports, s), (n.loaded = !0), n.exports;
  }
  (s.m = c),
    (e = []),
    (s.O = (a, n, o, i) => {
      if (!n) {
        var t = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [n, o, i] = e[d], r = !0, c = 0; c < n.length; c++)
            (!1 & i || t >= i) && Object.keys(s.O).every((e) => s.O[e](n[c]))
              ? n.splice(c--, 1)
              : ((r = !1), i < t && (t = i));
          if (r) {
            e.splice(d--, 1);
            var l = o();
            void 0 !== l && (a = l);
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
      }[e] +
      ".js?contenthash=" +
      {
        27: "256ad9e2508f91d0c7ef",
        113: "b16e26a14d5531e43837",
        131: "74ec16cd68052378c2d3",
        146: "8a838da596cf7ebb26af",
        301: "8abe04a681c01a65a242",
        617: "0d49650675e6dd573482",
        755: "fb4961a37de7065a6917",
        1133: "78eac575318e1a21cce8",
        1195: "b2ad2c3df7cd203a4111",
        1261: "9159d2c304208790145f",
        1311: "e9ac820f4822ab73e420",
        1579: "d9dcfce9033cce6debf6",
        1953: "8ac8f9d28fbd4119370f",
        2138: "7d393e5b0f7631fa252d",
        2351: "2dad26d01985ee8f810c",
        2557: "9764f2b0363fd6191184",
        2603: "d46f052b1d13e965dddb",
        2738: "c199d95523e916d5d846",
        2822: "dd560887769fca1451c6",
        3038: "c5a3913e9629cdd84817",
        3068: "950493e56f1485ffb766",
        3298: "00331eb8bc12854cfa12",
        3602: "c4ded7a41cbfac7bd8d5",
        4097: "c588946fb9a65bf4870f",
        4183: "2e68c41a8d4a05900551",
        4358: "e14986b3b25ab8969ee5",
        4445: "f8143f9eafd6cb6ccfb0",
        4469: "e6855c6b98bd05853756",
        4487: "82b1fc6289e195950501",
        4513: "ca968c2fe74cbda8a4e3",
        4729: "005c96aa0fe5c546fbf8",
        5012: "95ff1f0234cabfc6724e",
        5277: "4ac7cb6313e8ee7efc82",
        5279: "c370530ae9dc18ae8edb",
        5425: "52b9ef24f83d9432823d",
        5493: "78df680ac5cbaaf0c30c",
        5757: "048bf8dee9a76824a535",
        6091: "624f65ae55bc2f31514c",
        6403: "3dc79b26734fe577586b",
        6415: "5c294e187de9a7e12c35",
        6457: "360be7809239f928e8a0",
        6844: "182906771b8676b54134",
        6962: "497d50338582152c683a",
        7629: "d8dc047b99929e123470",
        7660: "6e069ce84accfadcd28f",
        7769: "8e9fd533b6f84e767ed6",
        7781: "d952d183493aa7aa496b",
        7832: "a8bf24b794cbbe2f153b",
        7901: "5afbccf615a39ed8a46c",
        8085: "99863da10d4927167ee8",
        8274: "89643864b7f5ee19f017",
        8282: "d34244b08bbfa955f5ee",
        8291: "778cfdd3a73b7d97f794",
        8427: "1a3190b4191e078e8ce9",
        8433: "9de8e1587c0ab79f4884",
        8525: "428c9a4eec5d719b5ca1",
        8592: "7e182b170da760f4b2bc",
        9233: "b6baccda743acd8fb1b0",
        9389: "4fdb6f672649e2208e7b",
        9547: "f771d8990f7891a5e4c1",
        9665: "0504405b7b896748f52f",
        9854: "db9773f09dc181e8fa71",
        9951: "972127f2a9d063738f73",
      }[e]),
    (s.miniCssF = (e) =>
      "css/applications/help/greenenvelope.css?contenthash=7a07022f9d922a4df973"),
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
        var r, c;
        if (void 0 !== n)
          for (
            var l = document.getElementsByTagName("script"), d = 0;
            d < l.length;
            d++
          ) {
            var f = l[d];
            if (
              f.getAttribute("src") == e ||
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
          (r.src = e)),
          (o[e] = [a]);
        var b = (a, n) => {
            (r.onerror = r.onload = null), clearTimeout(h);
            var i = o[e];
            if (
              (delete o[e],
              r.parentNode && r.parentNode.removeChild(r),
              i && i.forEach((e) => e(n)),
              a)
            )
              return a(n);
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
                    c = (t && t.target && t.target.href) || a,
                    l = new Error(
                      "Loading CSS chunk " + e + " failed.\n(" + c + ")",
                    );
                  (l.code = "CSS_CHUNK_LOAD_FAILED"),
                    (l.type = r),
                    (l.request = c),
                    i.parentNode.removeChild(i),
                    o(l);
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
            [t, r, c] = n,
            l = 0;
          if (t.some((a) => 0 !== e[a])) {
            for (o in r) s.o(r, o) && (s.m[o] = r[o]);
            if (c) var d = c(s);
          }
          for (a && a(n); l < t.length; l++)
            (i = t[l]), s.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return s.O(d);
        },
        n = (self.webpackChunkHelp = self.webpackChunkHelp || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
