/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8350899";
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
        27: "95e074541270cb7d8571",
        113: "f7d3d65afc7b0e267a79",
        131: "29a1b442fc284eadd850",
        146: "8ea660eaf52f94d649ad",
        301: "39a0e736242a5c0a21bb",
        617: "0037e02f40fd8079dd8d",
        755: "292b5507a0a15ff60543",
        1133: "3dec3f5c468b415d08e2",
        1195: "18c451f2e2cd70e89fc8",
        1261: "8889bfc6c33f359727e3",
        1311: "afe19b4ccbb10fc9e943",
        1579: "4a775fed3f3f87bdfd64",
        1953: "7ec16a362a9837d5a28b",
        2138: "2aac0f6bcecc737d1f5c",
        2351: "c9632a3a1bfdb307a1d9",
        2557: "eb5bd7a4caf4dd05fcf9",
        2603: "6dd6f22ab89ad8ba0b78",
        2738: "314ad3ea7d47498d0205",
        2822: "2275da7e3c35879b5aef",
        3038: "34388b715f750eaeb721",
        3068: "8465111ee344073a0e30",
        3298: "c557829a3114136b368c",
        3602: "c3b09df89c9c180eb793",
        4097: "ec547021f41841b9b6c5",
        4183: "2704a3cdbaa1f365b120",
        4358: "6c6197fe3b5cf018021e",
        4445: "58310917faba470796df",
        4469: "5a6f8020165cdbde9873",
        4487: "6869e9eb364de1ba5cd8",
        4513: "3b736d659c17b08b548c",
        4729: "a63cb3d2a130b0575ce4",
        5012: "388fe80aa4bcea5a2d07",
        5277: "720c1b788fec0f79ace8",
        5279: "b689f294f61a2551b4a7",
        5493: "c3b4c90f7952bcbededa",
        5757: "e95d37642dd762d0bb9d",
        6091: "044ee68e7da5bac87bbc",
        6403: "47a9d2223e2ba6c60e3a",
        6415: "0260cb14a0168b2882b2",
        6457: "e59a1ac7a964b774d2c7",
        6844: "854c65e7cce7b9a452cf",
        6962: "6178035caddad9ad6cd9",
        7629: "9376d43b96c2261850f8",
        7660: "71bb5778678dcb992688",
        7769: "3e3fa97d5f6152d2502c",
        7781: "f958c6cfdc95664f61a5",
        7832: "29fd6d9d173a1c6e1379",
        7901: "ff1b71649ff6ce41491d",
        8085: "5cbff949cf8ec4a1207d",
        8274: "f0e5a42e065306b306ff",
        8282: "52bc2fa22c99ca2f8cb9",
        8291: "1aa5b9663522880da476",
        8427: "7775180bc1df54afec62",
        8433: "961ca879d0e78d35f7b9",
        8525: "9e09063cb2becf8dc415",
        8592: "f0cff1d2329d13ad7556",
        9233: "cd3dd761267e89820a23",
        9389: "7819710f483b4651448b",
        9547: "bb5b8983b2b057de60aa",
        9665: "5e042a69bdde05d584cf",
        9854: "9c7a3ff61416c45ea86a",
        9951: "2afc38b306cb9133f6c3",
      }[e]),
    (s.miniCssF = (e) =>
      "css/applications/help/greenenvelope.css?contenthash=0fcd8a05f7753c894cd0"),
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
