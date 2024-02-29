/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8735421";
(() => {
  "use strict";
  var e,
    a,
    n,
    o,
    i,
    t = {},
    r = {};
  function c(e) {
    var a = r[e];
    if (void 0 !== a) return a.exports;
    var n = (r[e] = { id: e, loaded: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, c), (n.loaded = !0), n.exports;
  }
  (c.m = t),
    (e = []),
    (c.O = (a, n, o, i) => {
      if (!n) {
        var t = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [n, o, i] = e[d], r = !0, l = 0; l < n.length; l++)
            (!1 & i || t >= i) && Object.keys(c.O).every((e) => c.O[e](n[l]))
              ? n.splice(l--, 1)
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
    (c.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return c.d(a, { a }), a;
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (c.t = function (e, o) {
      if ((1 & o && (e = this(e)), 8 & o)) return e;
      if ("object" == typeof e && e) {
        if (4 & o && e.__esModule) return e;
        if (16 & o && "function" == typeof e.then) return e;
      }
      var i = Object.create(null);
      c.r(i);
      var t = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var r = 2 & o && e; "object" == typeof r && !~a.indexOf(r); r = n(r))
        Object.getOwnPropertyNames(r).forEach((a) => (t[a] = () => e[a]));
      return (t.default = () => e), c.d(i, t), i;
    }),
    (c.d = (e, a) => {
      for (var n in a)
        c.o(a, n) &&
          !c.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: a[n] });
    }),
    (c.f = {}),
    (c.e = (e) =>
      Promise.all(Object.keys(c.f).reduce((a, n) => (c.f[n](e, a), a), []))),
    (c.u = (e) =>
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
        27: "50c2547cab9334a6aced",
        113: "b5d4caf90f7caf0dee3b",
        131: "d8c447d72c8083857616",
        146: "ab09c1f32d36ab29f63f",
        301: "ea4c812ec8282d437757",
        617: "4678b8cee7575f7fa84a",
        755: "3241df749da65054e5f4",
        1133: "33d9bf43d15fd73fbf73",
        1195: "4d2f66789f588b62683d",
        1261: "9e39a071caae57176cd8",
        1311: "e26a4bb1bbfb0dc024b8",
        1579: "1e6d7bad37145c49e093",
        1953: "a053de39d993f9279294",
        2138: "b156a15ec101d22a8b4d",
        2351: "acbd46339c93c36bf74b",
        2557: "04a0663e0331ad0d65c5",
        2603: "5a8cc9124d7289832f3c",
        2738: "b63099bab789b22d1a38",
        2822: "35b0de3883a2fd0b8605",
        3038: "6311b223247f38dbe6cc",
        3068: "fbbaf5dbf1ccac4d8fad",
        3298: "41ad67be056fa6453d8b",
        3602: "49a1a9fe3275c75e7d5d",
        4097: "b979091a428ae651f3c5",
        4103: "531763b9b78ce879c9b3",
        4183: "3e5a942f6b962842e44e",
        4358: "72a16fc22cb26ece5906",
        4445: "c1d63dbf70a581d50acf",
        4469: "38abc0d1e283987170b5",
        4487: "f89738b88cdd0f1fc452",
        4513: "a5aa22f5d5dd75f0d556",
        4729: "ab06f125ccab11da3000",
        5012: "11b95c260960a9af6590",
        5277: "8e70831c6929afa88988",
        5279: "507419dcd20900778b8c",
        5425: "e88faa436575e9926ef2",
        5493: "949cac5aab217e9966a6",
        5757: "84b638c8c296bf52b473",
        6091: "2d2e4607238e1455bd16",
        6403: "5b1776b1dbba71539770",
        6415: "1351821a2bbd22685664",
        6457: "5c75ce3bb435ae00fc75",
        6844: "8f34e56828110312c674",
        6962: "e16f5bf8336bcd62fbfa",
        7629: "4a52863903a9e3d15d9a",
        7660: "cfea21a4a1440ac0a2b6",
        7769: "c8096602e4d0e164f8b2",
        7781: "09a93c4c6d2bc3434097",
        7832: "bed76caaf847ceaf2942",
        7901: "5864c68067f747108df8",
        8085: "841e90b2cd8d7c8579cc",
        8274: "84388749081deb350892",
        8282: "0b677400cb632c3cfa80",
        8291: "28f9ab007bda4bfb1683",
        8427: "6f4423620fd93e072168",
        8433: "a0812946f605837f5719",
        8525: "e4cd8e1869c63e25464f",
        8592: "e45fe9f89bd7fdbd1e7d",
        9233: "0c32af143443c3f3401f",
        9389: "0dc5fcaf507611027d14",
        9547: "d582c8eab91ff97fc24d",
        9665: "210f1d37285a5dda7678",
        9854: "618c3fed3d95ec4604d8",
        9951: "d4f16c0d78092e96de7e",
      }[e]),
    (c.miniCssF = (e) =>
      "css/applications/help/greenenvelope.css?contenthash=2dba4a369c04ed7ece15"),
    (c.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (c.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
    (o = {}),
    (i = "Help:"),
    (c.l = (e, a, n, t) => {
      if (o[e]) o[e].push(a);
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
          c.nc && r.setAttribute("nonce", c.nc),
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
    (c.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (c.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      var e;
      c.g.importScripts && (e = c.g.location + "");
      var a = c.g.document;
      if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
        var n = a.getElementsByTagName("script");
        if (n.length) for (var o = n.length - 1; o > -1 && !e; ) e = n[o--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (c.p = e + "../../../");
    })(),
    (() => {
      if ("undefined" != typeof document) {
        var e = (e) =>
            new Promise((a, n) => {
              var o = c.miniCssF(e),
                i = c.p + o;
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
                          c = (n && n.target && n.target.href) || a,
                          l = new Error(
                            "Loading CSS chunk " +
                              e +
                              " failed.\n(" +
                              r +
                              ": " +
                              c +
                              ")",
                          );
                        (l.name = "ChunkLoadError"),
                          (l.code = "CSS_CHUNK_LOAD_FAILED"),
                          (l.type = r),
                          (l.request = c),
                          t.parentNode && t.parentNode.removeChild(t),
                          i(l);
                      }
                    }),
                  (t.href = a),
                  n
                    ? n.parentNode.insertBefore(t, n.nextSibling)
                    : document.head.appendChild(t);
              })(e, i, null, a, n);
            }),
          a = { 6700: 0 };
        c.f.miniCss = (n, o) => {
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
      (c.f.j = (a, n) => {
        var o = c.o(e, a) ? e[a] : void 0;
        if (0 !== o)
          if (o) n.push(o[2]);
          else if (6700 != a) {
            var i = new Promise((n, i) => (o = e[a] = [n, i]));
            n.push((o[2] = i));
            var t = c.p + c.u(a),
              r = new Error();
            c.l(
              t,
              (n) => {
                if (c.o(e, a) && (0 !== (o = e[a]) && (e[a] = void 0), o)) {
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
        (c.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var o,
            i,
            [t, r, l] = n,
            s = 0;
          if (t.some((a) => 0 !== e[a])) {
            for (o in r) c.o(r, o) && (c.m[o] = r[o]);
            if (l) var d = l(c);
          }
          for (a && a(n); s < t.length; s++)
            (i = t[s]), c.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return c.O(d);
        },
        n = (self.webpackChunkHelp = self.webpackChunkHelp || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
