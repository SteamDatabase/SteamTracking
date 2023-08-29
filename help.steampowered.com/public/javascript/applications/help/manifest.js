/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8301328";
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
        27: "190f739bba3522db3613",
        113: "f7d3d65afc7b0e267a79",
        131: "29a1b442fc284eadd850",
        146: "997f963e1d0b3cefe5e8",
        301: "39a0e736242a5c0a21bb",
        617: "0037e02f40fd8079dd8d",
        755: "335299b5ebe3c4375bca",
        1133: "3dec3f5c468b415d08e2",
        1195: "18c451f2e2cd70e89fc8",
        1261: "3a9937094024feae07e6",
        1311: "afe19b4ccbb10fc9e943",
        1579: "b8fe7be358acc5d72817",
        1953: "050d69b28b0da1cc8820",
        2138: "e272bb68c01dbf5a69e2",
        2351: "c9632a3a1bfdb307a1d9",
        2557: "eb5bd7a4caf4dd05fcf9",
        2603: "6dd6f22ab89ad8ba0b78",
        2738: "ad742825d2768fcef0e0",
        2822: "ae9d261cb182925c6e31",
        3038: "34388b715f750eaeb721",
        3068: "2a789bbb2a63d924938a",
        3298: "efd332bccdfbf668ad6c",
        3602: "deec2f4c26b5df0ef980",
        4097: "50ea7986c99a4f93efce",
        4183: "1133a62153c7f52d01a7",
        4358: "6c6197fe3b5cf018021e",
        4445: "7e31f5d7110223f74375",
        4469: "47c9b3f824f11ac9206e",
        4487: "6834af7b1804fcd32671",
        4513: "25f88da2e8ef67593ebb",
        4729: "9060de3199b952d7bbe9",
        5012: "388fe80aa4bcea5a2d07",
        5277: "720c1b788fec0f79ace8",
        5279: "34d02a286100eb29daef",
        5493: "c3b4c90f7952bcbededa",
        5757: "e95d37642dd762d0bb9d",
        6091: "044ee68e7da5bac87bbc",
        6403: "7cf8a0c7374f16ae577e",
        6415: "0260cb14a0168b2882b2",
        6457: "e59a1ac7a964b774d2c7",
        6844: "b59809c9dacf76b6ca4c",
        6962: "6178035caddad9ad6cd9",
        7629: "9376d43b96c2261850f8",
        7660: "54a19961d71d49e35f47",
        7769: "3e3fa97d5f6152d2502c",
        7781: "8caedac1fa798533ec03",
        7832: "29fd6d9d173a1c6e1379",
        7901: "ff1b71649ff6ce41491d",
        8085: "d80c0cfa9963c0460ef5",
        8274: "f0e5a42e065306b306ff",
        8282: "52bc2fa22c99ca2f8cb9",
        8291: "1aa5b9663522880da476",
        8427: "7775180bc1df54afec62",
        8433: "f5b73a762812a3fe154b",
        8525: "9e09063cb2becf8dc415",
        8592: "f0cff1d2329d13ad7556",
        9233: "cd3dd761267e89820a23",
        9389: "7819710f483b4651448b",
        9547: "c5419f6d5c95b94d9b34",
        9665: "5e042a69bdde05d584cf",
        9854: "7ec788c367059ffd5c62",
        9951: "e323ae423b064c7da755",
      }[e]),
    (s.miniCssF = (e) =>
      "css/applications/help/greenenvelope.css?contenthash=ef5f0a736fe8b753606c"),
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
