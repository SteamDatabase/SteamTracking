/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8893189";
(() => {
  "use strict";
  var a,
    e,
    n,
    o,
    i,
    t = {},
    r = {};
  function l(a) {
    var e = r[a];
    if (void 0 !== e) return e.exports;
    var n = (r[a] = { id: a, loaded: !1, exports: {} });
    return t[a].call(n.exports, n, n.exports, l), (n.loaded = !0), n.exports;
  }
  (l.m = t),
    (a = []),
    (l.O = (e, n, o, i) => {
      if (!n) {
        var t = 1 / 0;
        for (d = 0; d < a.length; d++) {
          for (var [n, o, i] = a[d], r = !0, s = 0; s < n.length; s++)
            (!1 & i || t >= i) && Object.keys(l.O).every((a) => l.O[a](n[s]))
              ? n.splice(s--, 1)
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
    (l.n = (a) => {
      var e = a && a.__esModule ? () => a.default : () => a;
      return l.d(e, { a: e }), e;
    }),
    (n = Object.getPrototypeOf
      ? (a) => Object.getPrototypeOf(a)
      : (a) => a.__proto__),
    (l.t = function (a, o) {
      if ((1 & o && (a = this(a)), 8 & o)) return a;
      if ("object" == typeof a && a) {
        if (4 & o && a.__esModule) return a;
        if (16 & o && "function" == typeof a.then) return a;
      }
      var i = Object.create(null);
      l.r(i);
      var t = {};
      e = e || [null, n({}), n([]), n(n)];
      for (var r = 2 & o && a; "object" == typeof r && !~e.indexOf(r); r = n(r))
        Object.getOwnPropertyNames(r).forEach((e) => (t[e] = () => a[e]));
      return (t.default = () => a), l.d(i, t), i;
    }),
    (l.d = (a, e) => {
      for (var n in e)
        l.o(e, n) &&
          !l.o(a, n) &&
          Object.defineProperty(a, n, { enumerable: !0, get: e[n] });
    }),
    (l.f = {}),
    (l.e = (a) =>
      Promise.all(Object.keys(l.f).reduce((e, n) => (l.f[n](a, e), e), []))),
    (l.u = (a) =>
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
        4103: "navevents",
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
        27: "989a2b665a0e80edfd7a",
        113: "04d211162c0d634381ac",
        131: "d49ba20507cb066e0762",
        146: "fec13fed73085e391262",
        301: "2daa59681187a0fb9380",
        617: "ea0e28a083ae282a7166",
        755: "b86d4ebf657aa745de1c",
        1133: "7508284aa15f9feda7b4",
        1195: "2599eb626a57fea4efe1",
        1261: "f40ccab89e34d13d93a5",
        1311: "3f48c6ed4e9504b4f22b",
        1579: "b90e5ae60c4e347ca852",
        1953: "7f8b28bc0b4ccf3bf4fe",
        2138: "1266080e63d8b73f6de5",
        2351: "3dbf1f076e419b4cef2b",
        2557: "c9ddd0e32375f21c07c8",
        2603: "957eb65c3c4ef4355bbb",
        2738: "e7e5de6d48fe4b8c2b79",
        2822: "5d97df39feba14a00ae9",
        3038: "8f11ed70c3b534e2e3be",
        3068: "ce29289ee53ac9fd079a",
        3298: "9c1ba9c146dc76e314f7",
        3602: "0a0501dd3b0542644625",
        4097: "5fe1e9a8ea8bcdb2b855",
        4103: "cf0004edb985fd35c866",
        4183: "835d2bd40589770e452f",
        4358: "a1598f5c756cdca36a0f",
        4445: "ba3c51bfc6e486a36d23",
        4469: "3bda0ce5d6d557104bdf",
        4487: "31f0ff7359dab5e44916",
        4513: "3d2f0030770e51a9452a",
        4729: "b52bda842fde03d12f9a",
        5012: "24d64d5f1c5fdf741ba7",
        5277: "1e6e86daad6d11f66abc",
        5279: "7bcc246b5de1d1619e6c",
        5425: "91539164ab7d063f6ba6",
        5493: "103ef57595fbbad913a4",
        5757: "562f71e094ee0aa70461",
        6091: "e807957db51f0a032792",
        6403: "ab59b42cfdc780d77d8d",
        6415: "eb7db7e273a57adbf411",
        6457: "f3a9a6823f2eada65b63",
        6844: "60495f757428aa1a54a8",
        6962: "479f054df0a1060ab464",
        7629: "11cc5488d8ddd79f0121",
        7660: "919139375872116ba766",
        7769: "1e65045799e6138aeb1e",
        7781: "e5ed6ce151c265145bcd",
        7832: "02d91cc5ea14d8c45156",
        7901: "4a0db4401c1ee9895ddd",
        8085: "3a8f703d8c5c8fd1f794",
        8274: "a200203d63130e761a24",
        8282: "daf2b3b0983db3c141c8",
        8291: "b6a72feeffd3976e0ce8",
        8427: "07a6831cb05fd7b23751",
        8433: "bbf8c623e0bbcc8d98f3",
        8525: "ddf8eee70919f0b25ba8",
        8592: "e9d3774c28f4fad6d0ac",
        9233: "c1530be2d61f2d0e169a",
        9389: "09e9ffd9a36a17a15bef",
        9547: "9aa4378ba6564ee870d3",
        9665: "726d3a88f1fdefb0f85c",
        9854: "81940fc6ff598ffb4fc4",
        9951: "51de44c531869db96f8b",
      }[a]),
    (l.miniCssF = (a) =>
      "css/applications/help/greenenvelope.css?contenthash=3d4d6b19dcf9ba69e58a"),
    (l.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (a) {
        if ("object" == typeof window) return window;
      }
    })()),
    (l.o = (a, e) => Object.prototype.hasOwnProperty.call(a, e)),
    (o = {}),
    (i = "Help:"),
    (l.l = (a, e, n, t) => {
      if (o[a]) o[a].push(e);
      else {
        var r, s;
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
          ((s = !0),
          ((r = document.createElement("script")).charset = "utf-8"),
          (r.timeout = 120),
          l.nc && r.setAttribute("nonce", l.nc),
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
          s && document.head.appendChild(r);
      }
    }),
    (l.r = (a) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(a, "__esModule", { value: !0 });
    }),
    (l.nmd = (a) => ((a.paths = []), a.children || (a.children = []), a)),
    (l.p = ""),
    (() => {
      if ("undefined" != typeof document) {
        var a = (a) =>
            new Promise((e, n) => {
              var o = l.miniCssF(a),
                i = l.p + o;
              if (
                ((a, e) => {
                  for (
                    var n = document.getElementsByTagName("link"), o = 0;
                    o < n.length;
                    o++
                  ) {
                    var i =
                      (r = n[o]).getAttribute("data-href") ||
                      r.getAttribute("href");
                    if ("stylesheet" === r.rel && (i === a || i === e))
                      return r;
                  }
                  var t = document.getElementsByTagName("style");
                  for (o = 0; o < t.length; o++) {
                    var r;
                    if (
                      (i = (r = t[o]).getAttribute("data-href")) === a ||
                      i === e
                    )
                      return r;
                  }
                })(o, i)
              )
                return e();
              ((a, e, n, o, i) => {
                var t = document.createElement("link");
                (t.rel = "stylesheet"),
                  (t.type = "text/css"),
                  (t.onerror = t.onload =
                    (n) => {
                      if (((t.onerror = t.onload = null), "load" === n.type))
                        o();
                      else {
                        var r = n && n.type,
                          l = (n && n.target && n.target.href) || e,
                          s = new Error(
                            "Loading CSS chunk " +
                              a +
                              " failed.\n(" +
                              r +
                              ": " +
                              l +
                              ")",
                          );
                        (s.name = "ChunkLoadError"),
                          (s.code = "CSS_CHUNK_LOAD_FAILED"),
                          (s.type = r),
                          (s.request = l),
                          t.parentNode && t.parentNode.removeChild(t),
                          i(s);
                      }
                    }),
                  (t.href = e),
                  n
                    ? n.parentNode.insertBefore(t, n.nextSibling)
                    : document.head.appendChild(t);
              })(a, i, null, e, n);
            }),
          e = { 6700: 0 };
        l.f.miniCss = (n, o) => {
          e[n]
            ? o.push(e[n])
            : 0 !== e[n] &&
              { 3068: 1 }[n] &&
              o.push(
                (e[n] = a(n).then(
                  () => {
                    e[n] = 0;
                  },
                  (a) => {
                    throw (delete e[n], a);
                  },
                )),
              );
        };
      }
    })(),
    (() => {
      var a = { 6700: 0 };
      (l.f.j = (e, n) => {
        var o = l.o(a, e) ? a[e] : void 0;
        if (0 !== o)
          if (o) n.push(o[2]);
          else if (6700 != e) {
            var i = new Promise((n, i) => (o = a[e] = [n, i]));
            n.push((o[2] = i));
            var t = l.p + l.u(e),
              r = new Error();
            l.l(
              t,
              (n) => {
                if (l.o(a, e) && (0 !== (o = a[e]) && (a[e] = void 0), o)) {
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
        (l.O.j = (e) => 0 === a[e]);
      var e = (e, n) => {
          var o,
            i,
            [t, r, s] = n,
            c = 0;
          if (t.some((e) => 0 !== a[e])) {
            for (o in r) l.o(r, o) && (l.m[o] = r[o]);
            if (s) var d = s(l);
          }
          for (e && e(n); c < t.length; c++)
            (i = t[c]), l.o(a, i) && a[i] && a[i][0](), (a[i] = 0);
          return l.O(d);
        },
        n = (self.webpackChunkHelp = self.webpackChunkHelp || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();
