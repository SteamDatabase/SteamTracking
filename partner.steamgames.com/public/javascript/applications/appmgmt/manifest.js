/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7977024";
(() => {
  "use strict";
  var e,
    a,
    n,
    r,
    d,
    c,
    s,
    t = {},
    i = {};
  function b(e) {
    var a = i[e];
    if (void 0 !== a) return a.exports;
    var n = (i[e] = { id: e, loaded: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, b), (n.loaded = !0), n.exports;
  }
  (b.m = t),
    (e = []),
    (b.O = (a, n, r, d) => {
      if (!n) {
        var c = 1 / 0;
        for (o = 0; o < e.length; o++) {
          for (var [n, r, d] = e[o], s = !0, t = 0; t < n.length; t++)
            (!1 & d || c >= d) && Object.keys(b.O).every((e) => b.O[e](n[t]))
              ? n.splice(t--, 1)
              : ((s = !1), d < c && (c = d));
          if (s) {
            e.splice(o--, 1);
            var i = r();
            void 0 !== i && (a = i);
          }
        }
        return a;
      }
      d = d || 0;
      for (var o = e.length; o > 0 && e[o - 1][2] > d; o--) e[o] = e[o - 1];
      e[o] = [n, r, d];
    }),
    (b.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return b.d(a, { a }), a;
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (b.t = function (e, r) {
      if ((1 & r && (e = this(e)), 8 & r)) return e;
      if ("object" == typeof e && e) {
        if (4 & r && e.__esModule) return e;
        if (16 & r && "function" == typeof e.then) return e;
      }
      var d = Object.create(null);
      b.r(d);
      var c = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var s = 2 & r && e; "object" == typeof s && !~a.indexOf(s); s = n(s))
        Object.getOwnPropertyNames(s).forEach((a) => (c[a] = () => e[a]));
      return (c.default = () => e), b.d(d, c), d;
    }),
    (b.d = (e, a) => {
      for (var n in a)
        b.o(a, n) &&
          !b.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: a[n] });
    }),
    (b.f = {}),
    (b.e = (e) =>
      Promise.all(Object.keys(b.f).reduce((a, n) => (b.f[n](e, a), a), []))),
    (b.u = (e) =>
      "javascript/applications/appmgmt/" +
      {
        131: "chunk~00d94646f",
        145: "chunk~bbe83f635",
        493: "libraries~29ab6dbf5",
        494: "libraries~b79647cb4",
        614: "libraries~bee9b953c",
        647: "main_czech-json",
        698: "main_dutch-json",
        727: "main_japanese-json",
        799: "main_german-json",
        819: "marketing_turkish-json",
        874: "marketing_dutch-json",
        903: "marketing_russian-json",
        907: "chunk~441eeb0f7",
        1117: "main_french-json",
        1162: "shared_thai-json",
        1233: "libraries~dbdf8b1dd",
        1313: "shared_bulgarian-json",
        2029: "shared_sc_schinese-json",
        2055: "chunk~b79647cb4",
        2120: "libraries~65c77a859",
        2136: "events",
        2431: "shared_arabic-json",
        2443: "shared_latam-json",
        2448: "marketing_polish-json",
        2522: "logoedtior",
        2529: "pricingtool",
        2537: "shared_schinese-json",
        2581: "marketing_danish-json",
        2601: "marketing_spanish-json",
        2767: "main_polish-json",
        2824: "marketing_german-json",
        2844: "shared_japanese-json",
        2848: "main_ukrainian-json",
        2942: "main_tchinese-json",
        3069: "libraries~b3fafa6d2",
        3112: "shared_french-json",
        3185: "main_swedish-json",
        3252: "shared_polish-json",
        3277: "main_romanian-json",
        3323: "main_danish-json",
        3359: "main_bulgarian-json",
        3453: "marketing_czech-json",
        3504: "chunk~bee9b953c",
        3557: "shared_finnish-json",
        3574: "libraries~00d94646f",
        3768: "main_finnish-json",
        3860: "chunk~dbdf8b1dd",
        4033: "marketing_schinese-json",
        4108: "shared_norwegian-json",
        4171: "marketing_koreana-json",
        4189: "shared_czech-json",
        4199: "marketing_french-json",
        4238: "marketing_thai-json",
        4297: "shared_greek-json",
        4458: "marketing_brazilian-json",
        4535: "login",
        4601: "broadcast",
        4722: "main_koreana-json",
        4823: "shared_romanian-json",
        4860: "main_russian-json",
        4929: "marketing_english-json",
        4935: "sdrconnections",
        4964: "shared_vietnamese-json",
        5117: "libraries~511d96142",
        5257: "marketing_portuguese-json",
        5438: "shared_turkish-json",
        5625: "shared_swedish-json",
        5676: "steamlearn",
        5849: "shared_portuguese-json",
        5925: "shared_dutch-json",
        5933: "shared_italian-json",
        5948: "shared_hungarian-json",
        6007: "shared_german-json",
        6019: "marketing_swedish-json",
        6035: "marketing_ukrainian-json",
        6087: "main_latam-json",
        6169: "marketing_norwegian-json",
        6492: "shared_spanish-json",
        6542: "shared_koreana-json",
        6699: "steamdeck",
        6815: "main_english-json",
        6817: "main_spanish-json",
        6846: "marketing_vietnamese-json",
        7037: "libraries~d511f1559",
        7082: "marketing_japanese-json",
        7236: "main_portuguese-json",
        7334: "chunk~29ab6dbf5",
        7602: "shared_tchinese-json",
        7762: "steamml",
        7781: "shared_ukrainian-json",
        7871: "marketing_greek-json",
        7890: "main_thai-json",
        7942: "marketing_finnish-json",
        7951: "main_norwegian-json",
        7975: "shared_english-json",
        8001: "marketing_italian-json",
        8051: "main_hungarian-json",
        8052: "chunk~ce86493bf",
        8155: "main_italian-json",
        8168: "main_vietnamese-json",
        8385: "shared_brazilian-json",
        8774: "marketing_romanian-json",
        8960: "marketing_bulgarian-json",
        8974: "storeadmin",
        8994: "marketing_hungarian-json",
        9062: "shared_russian-json",
        9315: "chunk~75944c423",
        9431: "main_brazilian-json",
        9568: "main_greek-json",
        9603: "libraries~82d50d904",
        9663: "main_turkish-json",
        9753: "shared_danish-json",
        9899: "marketing_latam-json",
        9903: "marketing_tchinese-json",
        9919: "marketing_sc_schinese-json",
        9980: "main_schinese-json",
      }[e] +
      ".js?contenthash=" +
      {
        131: "8363d9ec410f8a3e9817",
        145: "18eae3092ac42be3b00b",
        493: "4a8040e19a3fe7df135a",
        494: "05fe723268d8d8f38ede",
        614: "8161db84d000e99e0f98",
        647: "082f771ede74049ad77a",
        698: "852219df6d674ddfdcd2",
        727: "bbc317f8b84c9b658c57",
        799: "3a289cb3511d6984ab81",
        819: "72b6eed63c426e29aa75",
        874: "4ea584589b5ba89f0194",
        903: "f9da19890463e7598454",
        907: "ceedb74475dfa32296d7",
        1117: "6305f21e8ee607abb3d6",
        1162: "1fafccbee2206cb25e53",
        1233: "8a72bb136a319770f909",
        1313: "c3a119882432e4de527d",
        2029: "6fa88893831f38394d13",
        2055: "21c8cb376570dafa3eb1",
        2120: "8c072467bd791e564e8b",
        2136: "5f7508ca071f64e9b50f",
        2431: "1d644fd6ec6f77ecb3b0",
        2443: "f013ab9b266631b68b94",
        2448: "83825b69c43d60e4da02",
        2522: "a55ea2eef6a334b40173",
        2529: "b33a74c820b65cd350a8",
        2537: "42161b0db849ed8aad21",
        2581: "d2d4ae433d3bc3f70b07",
        2601: "8cdb0fb08d919f211e51",
        2767: "c30d19d9d1dba461e009",
        2824: "308649544fa00b5da11d",
        2844: "d628d0a1f7fa53939857",
        2848: "9a18749858946c9a4c05",
        2942: "240753cbc3e4c4b2a59d",
        3069: "2c30e5fa9dafa7bffeb6",
        3112: "8daebb27def7497526f2",
        3185: "79760385a7cf8e93b050",
        3252: "c5f189aa462d965fc8fe",
        3277: "d7c5bf8e68c288297877",
        3323: "b533a2de767580722d2d",
        3359: "ecbfbe3fdf08618f6298",
        3453: "ab9154a5ddb8680fdaa3",
        3504: "760c8d3885dc20a77d79",
        3557: "28eef43f7e7877b2b867",
        3574: "8ead3cbaa2360a94ca2a",
        3768: "d0553ba398efd600d0be",
        3860: "86639b889e03ddbb038a",
        4033: "09705615feedb6c4b970",
        4108: "04a37577d079fc92f01e",
        4171: "6c8001f2116167057fff",
        4189: "353234c9073572b2b080",
        4199: "b05f6a41950a4073f6df",
        4238: "2676e9a545ea4cbaf48a",
        4297: "705eb527c63883b71a68",
        4458: "875842c0bd27ecf71a87",
        4535: "b7899a9761348ec2f181",
        4601: "30815b597f262fe09077",
        4722: "721bd2ed33dcd5b25a15",
        4823: "a566aead1c49c611b6a7",
        4860: "441fde01a6613185306a",
        4929: "2af7f089afc6d03ece49",
        4935: "cdfe4ffa4f15e6360fd9",
        4964: "8e0b585bf258704c41bc",
        5117: "915adb29dbb1653ce74c",
        5257: "1175fc3e70e13c1a0593",
        5438: "236acfc2a2d1689ac4bd",
        5625: "64d731de84adb5f7b09e",
        5676: "25bd11c9a6e9f6ecc809",
        5849: "a5c5b9761c86cb418dd8",
        5925: "5bb46d85b3e2ae679210",
        5933: "44e59935986b6131b104",
        5948: "70777f08ce158f80f0c0",
        6007: "ff3f27de4a491c79e661",
        6019: "36a68b52e33dc8875771",
        6035: "13a4c4c1410133d8d7b7",
        6087: "97b6f80616de4374e3e8",
        6169: "c20b160ee6a6178baa6b",
        6492: "cbd791fe58b08e71a78b",
        6542: "3fcf3987751601e7b566",
        6699: "bf533d0de49c08855e8c",
        6815: "efff7a4eca775d7e0317",
        6817: "c03ca9b35493368ceaec",
        6846: "54e6d218e46a2a59cff6",
        7037: "1e8860001e715b5c2f26",
        7082: "65d502fd82cbdabd4b7e",
        7236: "b4117a3252a38dbb0ef7",
        7334: "1b76ae38779662b74e46",
        7602: "cb7ea76716b7166dcc2d",
        7762: "c05fdea15a2ca2a5a45d",
        7781: "db485c8d8b5381f83cfc",
        7871: "d944abd95133354a1510",
        7890: "327fdbe98fbbda7ee6fa",
        7942: "d8fc0c123b66f1f05d73",
        7951: "abc99ae75e84d21a05cd",
        7975: "b19b549a8e55b1a799fe",
        8001: "a8f0773110b27318f142",
        8051: "99473ea0968e67a9eeec",
        8052: "f8f474f4ce2ef4e9b6cc",
        8155: "bd4ca998e7bed13e6d05",
        8168: "2521e357b886d310335e",
        8385: "b8ea8f5152c830bb9368",
        8774: "e89705c9b6c998ddf58f",
        8960: "e130bbaebd0ff3f0dd41",
        8974: "4c2dbb2cd4f6bafdcceb",
        8994: "10026647200221d8450f",
        9062: "34ebafc01e7260151857",
        9315: "905b3c4a6f4d01ab5b71",
        9431: "80cc7ca1e137f0d6ed04",
        9568: "1916c7bde503b8989aaf",
        9603: "a7e98b7968229d2e7ee3",
        9663: "c6c79b89948b18d84cc0",
        9753: "c19ed39b66f15024e0af",
        9899: "12674cb2843b822a2fdf",
        9903: "b906bae3108e40ba588c",
        9919: "b7ae198176b4b754bcf7",
        9980: "3779fc5ca43ca749042f",
      }[e]),
    (b.miniCssF = (e) =>
      "css/applications/appmgmt/" +
      {
        131: "chunk~00d94646f",
        493: "libraries~29ab6dbf5",
        2136: "events",
        2522: "logoedtior",
        2529: "pricingtool",
        3504: "chunk~bee9b953c",
        3860: "chunk~dbdf8b1dd",
        4601: "broadcast",
        4935: "sdrconnections",
        5676: "steamlearn",
        6699: "steamdeck",
        7762: "steamml",
        8974: "storeadmin",
      }[e] +
      ".css?contenthash=" +
      {
        131: "1766f99be9d3e4f036b0",
        493: "f38ba98b44af4fc0288a",
        2136: "061375a49e1391ba4af3",
        2522: "f7200c2653bc0de8b21b",
        2529: "af92258c5aff3107eefb",
        3504: "8a2eded61f4347210b74",
        3860: "b594b4bd87f4f17b753c",
        4601: "f441e6a81a93e0fe73fc",
        4935: "b7abea9ad444fe28cc7e",
        5676: "390df867b5b4d66beda1",
        6699: "26d85aae9e75fe8230de",
        7762: "d61f93a707d7e363fa5a",
        8974: "99c7815fc4ca8a63ab52",
      }[e]),
    (b.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (b.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
    (r = {}),
    (d = "appmgmt-storeadmin:"),
    (b.l = (e, a, n, c) => {
      if (r[e]) r[e].push(a);
      else {
        var s, t;
        if (void 0 !== n)
          for (
            var i = document.getElementsByTagName("script"), o = 0;
            o < i.length;
            o++
          ) {
            var f = i[o];
            if (
              f.getAttribute("src") == e ||
              f.getAttribute("data-webpack") == d + n
            ) {
              s = f;
              break;
            }
          }
        s ||
          ((t = !0),
          ((s = document.createElement("script")).charset = "utf-8"),
          (s.timeout = 120),
          b.nc && s.setAttribute("nonce", b.nc),
          s.setAttribute("data-webpack", d + n),
          (s.src = e)),
          (r[e] = [a]);
        var h = (a, n) => {
            (s.onerror = s.onload = null), clearTimeout(l);
            var d = r[e];
            if (
              (delete r[e],
              s.parentNode && s.parentNode.removeChild(s),
              d && d.forEach((e) => e(n)),
              a)
            )
              return a(n);
          },
          l = setTimeout(
            h.bind(null, void 0, { type: "timeout", target: s }),
            12e4
          );
        (s.onerror = h.bind(null, s.onerror)),
          (s.onload = h.bind(null, s.onload)),
          t && document.head.appendChild(s);
      }
    }),
    (b.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (b.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      var e;
      b.g.importScripts && (e = b.g.location + "");
      var a = b.g.document;
      if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
        var n = a.getElementsByTagName("script");
        n.length && (e = n[n.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (b.p = e + "../../../");
    })(),
    (c = (e) =>
      new Promise((a, n) => {
        var r = b.miniCssF(e),
          d = b.p + r;
        if (
          ((e, a) => {
            for (
              var n = document.getElementsByTagName("link"), r = 0;
              r < n.length;
              r++
            ) {
              var d =
                (s = n[r]).getAttribute("data-href") || s.getAttribute("href");
              if ("stylesheet" === s.rel && (d === e || d === a)) return s;
            }
            var c = document.getElementsByTagName("style");
            for (r = 0; r < c.length; r++) {
              var s;
              if ((d = (s = c[r]).getAttribute("data-href")) === e || d === a)
                return s;
            }
          })(r, d)
        )
          return a();
        ((e, a, n, r) => {
          var d = document.createElement("link");
          (d.rel = "stylesheet"),
            (d.type = "text/css"),
            (d.onerror = d.onload =
              (c) => {
                if (((d.onerror = d.onload = null), "load" === c.type)) n();
                else {
                  var s = c && ("load" === c.type ? "missing" : c.type),
                    t = (c && c.target && c.target.href) || a,
                    i = new Error(
                      "Loading CSS chunk " + e + " failed.\n(" + t + ")"
                    );
                  (i.code = "CSS_CHUNK_LOAD_FAILED"),
                    (i.type = s),
                    (i.request = t),
                    d.parentNode.removeChild(d),
                    r(i);
                }
              }),
            (d.href = a),
            document.head.appendChild(d);
        })(e, d, a, n);
      })),
    (s = { 6700: 0 }),
    (b.f.miniCss = (e, a) => {
      s[e]
        ? a.push(s[e])
        : 0 !== s[e] &&
          {
            131: 1,
            493: 1,
            2136: 1,
            2522: 1,
            2529: 1,
            3504: 1,
            3860: 1,
            4601: 1,
            4935: 1,
            5676: 1,
            6699: 1,
            7762: 1,
            8974: 1,
          }[e] &&
          a.push(
            (s[e] = c(e).then(
              () => {
                s[e] = 0;
              },
              (a) => {
                throw (delete s[e], a);
              }
            ))
          );
    }),
    (() => {
      var e = { 6700: 0 };
      (b.f.j = (a, n) => {
        var r = b.o(e, a) ? e[a] : void 0;
        if (0 !== r)
          if (r) n.push(r[2]);
          else if (6700 != a) {
            var d = new Promise((n, d) => (r = e[a] = [n, d]));
            n.push((r[2] = d));
            var c = b.p + b.u(a),
              s = new Error();
            b.l(
              c,
              (n) => {
                if (b.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var d = n && ("load" === n.type ? "missing" : n.type),
                    c = n && n.target && n.target.src;
                  (s.message =
                    "Loading chunk " + a + " failed.\n(" + d + ": " + c + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = d),
                    (s.request = c),
                    r[1](s);
                }
              },
              "chunk-" + a,
              a
            );
          } else e[a] = 0;
      }),
        (b.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var r,
            d,
            [c, s, t] = n,
            i = 0;
          if (c.some((a) => 0 !== e[a])) {
            for (r in s) b.o(s, r) && (b.m[r] = s[r]);
            if (t) var o = t(b);
          }
          for (a && a(n); i < c.length; i++)
            (d = c[i]), b.o(e, d) && e[d] && e[d][0](), (e[d] = 0);
          return b.O(o);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
