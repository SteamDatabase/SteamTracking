/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8650318";
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
        27: "f200d56c36d00bb7ae52",
        113: "b5d4caf90f7caf0dee3b",
        131: "8396f2acbc383b2e86fb",
        146: "348f1e6088ee62368bf9",
        301: "ea4c812ec8282d437757",
        617: "4678b8cee7575f7fa84a",
        755: "4cd8cae9332dde050f56",
        1133: "33d9bf43d15fd73fbf73",
        1195: "4d2f66789f588b62683d",
        1261: "60d4defee04759563d69",
        1311: "e26a4bb1bbfb0dc024b8",
        1579: "ca6ddc70955744092fcf",
        1953: "4923c5a29da931087daa",
        2138: "9508d754217e92952c7e",
        2351: "acbd46339c93c36bf74b",
        2557: "04a0663e0331ad0d65c5",
        2603: "5a8cc9124d7289832f3c",
        2738: "6dfcc2df03f678eeea9d",
        2822: "f1cd3f80380e661703b2",
        3038: "6311b223247f38dbe6cc",
        3068: "dba8ff6c8c8e49b9092e",
        3298: "4d297333cd1fa28c4bce",
        3602: "be95e1aa323d0dc734d3",
        4097: "7b355eca486305bb5f17",
        4103: "c54af04f3affd8207380",
        4183: "88b01641e6c0611b3f86",
        4358: "72a16fc22cb26ece5906",
        4445: "fa86eb8271786af4ce0a",
        4469: "f221383a52d7c50bdd95",
        4487: "f84292fb0c465480925e",
        4513: "c970c54a37624975b253",
        4729: "b3df7c3165ad6dba6a53",
        5012: "11b95c260960a9af6590",
        5277: "8e70831c6929afa88988",
        5279: "e88acd707e1e0219952e",
        5425: "5fbe23179a508947379e",
        5493: "949cac5aab217e9966a6",
        5757: "84b638c8c296bf52b473",
        6091: "2d2e4607238e1455bd16",
        6403: "d08ded6b079d1c3a5823",
        6415: "1351821a2bbd22685664",
        6457: "5c75ce3bb435ae00fc75",
        6844: "d3174669c2d94b4fe4e4",
        6962: "e16f5bf8336bcd62fbfa",
        7629: "4a52863903a9e3d15d9a",
        7660: "5013a230918b6397875d",
        7769: "c8096602e4d0e164f8b2",
        7781: "e6e4b1483fe676b04bbd",
        7832: "bed76caaf847ceaf2942",
        7901: "5864c68067f747108df8",
        8085: "6ded2768d37df9734130",
        8274: "84388749081deb350892",
        8282: "0b677400cb632c3cfa80",
        8291: "28f9ab007bda4bfb1683",
        8427: "6f4423620fd93e072168",
        8433: "5a955cbf6b3709ecf60c",
        8525: "e4cd8e1869c63e25464f",
        8592: "e45fe9f89bd7fdbd1e7d",
        9233: "0c32af143443c3f3401f",
        9389: "0dc5fcaf507611027d14",
        9547: "0a1cb359feb0c2f5a6f1",
        9665: "210f1d37285a5dda7678",
        9854: "21041229eab3e20615e2",
        9951: "0cf5db07ec781df7da06",
      }[a]),
    (c.miniCssF = (a) =>
      "css/applications/help/greenenvelope.css?contenthash=e9bcdb1d1250ca4361ce"),
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
            12e4,
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
        if (n.length) for (var o = n.length - 1; o > -1 && !a; ) a = n[o--].src;
      }
      if (!a)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      (a = a
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (c.p = a + "../../../");
    })(),
    (() => {
      if ("undefined" != typeof document) {
        var a = (a) =>
            new Promise((e, n) => {
              var o = c.miniCssF(a),
                i = c.p + o;
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
                          c = (n && n.target && n.target.href) || e,
                          l = new Error(
                            "Loading CSS chunk " +
                              a +
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
                  (t.href = e),
                  n
                    ? n.parentNode.insertBefore(t, n.nextSibling)
                    : document.head.appendChild(t);
              })(a, i, null, e, n);
            }),
          e = { 6700: 0 };
        c.f.miniCss = (n, o) => {
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
              e,
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
