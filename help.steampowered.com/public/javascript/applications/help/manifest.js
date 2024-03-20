/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8777512";
(() => {
  "use strict";
  var e,
    a,
    n,
    o,
    i,
    t = {},
    r = {};
  function l(e) {
    var a = r[e];
    if (void 0 !== a) return a.exports;
    var n = (r[e] = { id: e, loaded: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, l), (n.loaded = !0), n.exports;
  }
  (l.m = t),
    (e = []),
    (l.O = (a, n, o, i) => {
      if (!n) {
        var t = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [n, o, i] = e[d], r = !0, c = 0; c < n.length; c++)
            (!1 & i || t >= i) && Object.keys(l.O).every((e) => l.O[e](n[c]))
              ? n.splice(c--, 1)
              : ((r = !1), i < t && (t = i));
          if (r) {
            e.splice(d--, 1);
            var s = o();
            void 0 !== s && (a = s);
          }
        }
        return a;
      }
      i = i || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > i; d--) e[d] = e[d - 1];
      e[d] = [n, o, i];
    }),
    (l.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return l.d(a, { a }), a;
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (l.t = function (e, o) {
      if ((1 & o && (e = this(e)), 8 & o)) return e;
      if ("object" == typeof e && e) {
        if (4 & o && e.__esModule) return e;
        if (16 & o && "function" == typeof e.then) return e;
      }
      var i = Object.create(null);
      l.r(i);
      var t = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var r = 2 & o && e; "object" == typeof r && !~a.indexOf(r); r = n(r))
        Object.getOwnPropertyNames(r).forEach((a) => (t[a] = () => e[a]));
      return (t.default = () => e), l.d(i, t), i;
    }),
    (l.d = (e, a) => {
      for (var n in a)
        l.o(a, n) &&
          !l.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: a[n] });
    }),
    (l.f = {}),
    (l.e = (e) =>
      Promise.all(Object.keys(l.f).reduce((a, n) => (l.f[n](e, a), a), []))),
    (l.u = (e) =>
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
      }[e] +
      ".js?contenthash=" +
      {
        27: "8180b1c183a1cf7d84a2",
        113: "b5d4caf90f7caf0dee3b",
        131: "f2676b7e0647262dd110",
        146: "ca0007c80b82b5fc1076",
        301: "ea4c812ec8282d437757",
        617: "4678b8cee7575f7fa84a",
        755: "54052542be5b3a70da14",
        1133: "33d9bf43d15fd73fbf73",
        1195: "4d2f66789f588b62683d",
        1261: "1b0de7232143b3eeaeab",
        1311: "e26a4bb1bbfb0dc024b8",
        1579: "e14958a881e682878f40",
        1953: "e8d0f94ddfc0bdce39ea",
        2138: "83f4beca91f1164489a0",
        2351: "acbd46339c93c36bf74b",
        2557: "04a0663e0331ad0d65c5",
        2603: "5a8cc9124d7289832f3c",
        2738: "4a1d611befdda792e7fa",
        2822: "f4df6e587367dfb167bb",
        3038: "6311b223247f38dbe6cc",
        3068: "1479c591b84efe8cf48c",
        3298: "9fa1a8222abb6824570d",
        3602: "79814b55596f2f124330",
        4097: "48d00d2af9f0d47d789b",
        4103: "531763b9b78ce879c9b3",
        4183: "c8fa9891f56665aa711e",
        4358: "96f7ec94aa8538666018",
        4445: "ddb7821cb08b38af5a19",
        4469: "455097cb4ebfab06b2cf",
        4487: "cd372a2f7065491a3014",
        4513: "cd83fd20f4fdc0d90093",
        4729: "f1618cb03f2b3d20da02",
        5012: "11b95c260960a9af6590",
        5277: "8e70831c6929afa88988",
        5279: "63b5ccb88d742988510b",
        5425: "0a90fe40b37baefc8e06",
        5493: "949cac5aab217e9966a6",
        5757: "84b638c8c296bf52b473",
        6091: "2d2e4607238e1455bd16",
        6403: "4b19fcd6f666599aff30",
        6415: "1351821a2bbd22685664",
        6457: "5c75ce3bb435ae00fc75",
        6844: "98f618509cdc1ef4a252",
        6962: "e16f5bf8336bcd62fbfa",
        7629: "4a52863903a9e3d15d9a",
        7660: "ae11722a52b39a30f924",
        7769: "c8096602e4d0e164f8b2",
        7781: "01c26c44d2290400345a",
        7832: "bed76caaf847ceaf2942",
        7901: "5864c68067f747108df8",
        8085: "0b088a8778ccc9bffd47",
        8274: "84388749081deb350892",
        8282: "0b677400cb632c3cfa80",
        8291: "28f9ab007bda4bfb1683",
        8427: "6f4423620fd93e072168",
        8433: "ffc315b06dfddce3ab3c",
        8525: "e4cd8e1869c63e25464f",
        8592: "e45fe9f89bd7fdbd1e7d",
        9233: "0c32af143443c3f3401f",
        9389: "0dc5fcaf507611027d14",
        9547: "6b638f079b667feed748",
        9665: "210f1d37285a5dda7678",
        9854: "7d06346fb02d831da302",
        9951: "1bfd189d2d9d934f3cfc",
      }[e]),
    (l.miniCssF = (e) =>
      "css/applications/help/greenenvelope.css?contenthash=2dba4a369c04ed7ece15"),
    (l.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (l.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
    (o = {}),
    (i = "Help:"),
    (l.l = (e, a, n, t) => {
      if (o[e]) o[e].push(a);
      else {
        var r, c;
        if (void 0 !== n)
          for (
            var s = document.getElementsByTagName("script"), d = 0;
            d < s.length;
            d++
          ) {
            var f = s[d];
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
          l.nc && r.setAttribute("nonce", l.nc),
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
    (l.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (l.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (l.p = ""),
    (() => {
      if ("undefined" != typeof document) {
        var e = (e) =>
            new Promise((a, n) => {
              var o = l.miniCssF(e),
                i = l.p + o;
              if (
                ((e, a) => {
                  for (
                    var n = document.getElementsByTagName("link"), o = 0;
                    o < n.length;
                    o++
                  ) {
                    var i =
                      (r = n[o]).getAttribute("data-href") ||
                      r.getAttribute("href");
                    if ("stylesheet" === r.rel && (i === e || i === a))
                      return r;
                  }
                  var t = document.getElementsByTagName("style");
                  for (o = 0; o < t.length; o++) {
                    var r;
                    if (
                      (i = (r = t[o]).getAttribute("data-href")) === e ||
                      i === a
                    )
                      return r;
                  }
                })(o, i)
              )
                return a();
              ((e, a, n, o, i) => {
                var t = document.createElement("link");
                (t.rel = "stylesheet"),
                  (t.type = "text/css"),
                  (t.onerror = t.onload =
                    (n) => {
                      if (((t.onerror = t.onload = null), "load" === n.type))
                        o();
                      else {
                        var r = n && n.type,
                          l = (n && n.target && n.target.href) || a,
                          c = new Error(
                            "Loading CSS chunk " +
                              e +
                              " failed.\n(" +
                              r +
                              ": " +
                              l +
                              ")",
                          );
                        (c.name = "ChunkLoadError"),
                          (c.code = "CSS_CHUNK_LOAD_FAILED"),
                          (c.type = r),
                          (c.request = l),
                          t.parentNode && t.parentNode.removeChild(t),
                          i(c);
                      }
                    }),
                  (t.href = a),
                  n
                    ? n.parentNode.insertBefore(t, n.nextSibling)
                    : document.head.appendChild(t);
              })(e, i, null, a, n);
            }),
          a = { 6700: 0 };
        l.f.miniCss = (n, o) => {
          a[n]
            ? o.push(a[n])
            : 0 !== a[n] &&
              { 3068: 1 }[n] &&
              o.push(
                (a[n] = e(n).then(
                  () => {
                    a[n] = 0;
                  },
                  (e) => {
                    throw (delete a[n], e);
                  },
                )),
              );
        };
      }
    })(),
    (() => {
      var e = { 6700: 0 };
      (l.f.j = (a, n) => {
        var o = l.o(e, a) ? e[a] : void 0;
        if (0 !== o)
          if (o) n.push(o[2]);
          else if (6700 != a) {
            var i = new Promise((n, i) => (o = e[a] = [n, i]));
            n.push((o[2] = i));
            var t = l.p + l.u(a),
              r = new Error();
            l.l(
              t,
              (n) => {
                if (l.o(e, a) && (0 !== (o = e[a]) && (e[a] = void 0), o)) {
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
        (l.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var o,
            i,
            [t, r, c] = n,
            s = 0;
          if (t.some((a) => 0 !== e[a])) {
            for (o in r) l.o(r, o) && (l.m[o] = r[o]);
            if (c) var d = c(l);
          }
          for (a && a(n); s < t.length; s++)
            (i = t[s]), l.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return l.O(d);
        },
        n = (self.webpackChunkHelp = self.webpackChunkHelp || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
