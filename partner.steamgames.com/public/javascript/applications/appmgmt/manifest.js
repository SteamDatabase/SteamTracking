/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8011812";
(() => {
  "use strict";
  var e,
    a,
    n,
    r,
    d,
    s,
    c,
    t = {},
    i = {};
  function o(e) {
    var a = i[e];
    if (void 0 !== a) return a.exports;
    var n = (i[e] = { id: e, loaded: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, o), (n.loaded = !0), n.exports;
  }
  (o.m = t),
    (e = []),
    (o.O = (a, n, r, d) => {
      if (!n) {
        var s = 1 / 0;
        for (b = 0; b < e.length; b++) {
          for (var [n, r, d] = e[b], c = !0, t = 0; t < n.length; t++)
            (!1 & d || s >= d) && Object.keys(o.O).every((e) => o.O[e](n[t]))
              ? n.splice(t--, 1)
              : ((c = !1), d < s && (s = d));
          if (c) {
            e.splice(b--, 1);
            var i = r();
            void 0 !== i && (a = i);
          }
        }
        return a;
      }
      d = d || 0;
      for (var b = e.length; b > 0 && e[b - 1][2] > d; b--) e[b] = e[b - 1];
      e[b] = [n, r, d];
    }),
    (o.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return o.d(a, { a }), a;
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (o.t = function (e, r) {
      if ((1 & r && (e = this(e)), 8 & r)) return e;
      if ("object" == typeof e && e) {
        if (4 & r && e.__esModule) return e;
        if (16 & r && "function" == typeof e.then) return e;
      }
      var d = Object.create(null);
      o.r(d);
      var s = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var c = 2 & r && e; "object" == typeof c && !~a.indexOf(c); c = n(c))
        Object.getOwnPropertyNames(c).forEach((a) => (s[a] = () => e[a]));
      return (s.default = () => e), o.d(d, s), d;
    }),
    (o.d = (e, a) => {
      for (var n in a)
        o.o(a, n) &&
          !o.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: a[n] });
    }),
    (o.f = {}),
    (o.e = (e) =>
      Promise.all(Object.keys(o.f).reduce((a, n) => (o.f[n](e, a), a), []))),
    (o.u = (e) =>
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
        1254: "chunk~0deb13453",
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
        131: "d807a74e08fd4df25aee",
        145: "65a7b6c18ecf6fd095b4",
        493: "4a8040e19a3fe7df135a",
        494: "05fe723268d8d8f38ede",
        614: "8161db84d000e99e0f98",
        647: "1b73738218d73f6f8d52",
        698: "08eb7b518e24f0b90645",
        727: "cf9242511a55f924c9ed",
        799: "ba40305bb69db455b235",
        819: "72b6eed63c426e29aa75",
        874: "4ea584589b5ba89f0194",
        903: "f9da19890463e7598454",
        907: "ceedb74475dfa32296d7",
        1117: "9c8d515e7bc4eaa0d77b",
        1162: "73ef1c3352e035481e45",
        1233: "8a72bb136a319770f909",
        1254: "409b6ac2a3894146ca33",
        1313: "44dbb1b6677a11f735e9",
        2029: "6fa88893831f38394d13",
        2055: "4df3b7e309586a6961f1",
        2120: "8c072467bd791e564e8b",
        2136: "d7f89b962ac9375bd3f9",
        2431: "1d644fd6ec6f77ecb3b0",
        2443: "3baba7db3eb4b0ae6a0e",
        2448: "83825b69c43d60e4da02",
        2522: "24c9f47475b23862869a",
        2529: "03e9cca66061cd842371",
        2537: "f59fd11d30ea37b539cc",
        2581: "d2d4ae433d3bc3f70b07",
        2601: "8cdb0fb08d919f211e51",
        2767: "0d294016f984f5c9cd06",
        2824: "308649544fa00b5da11d",
        2844: "ede3baef90b438c8cf61",
        2848: "2b058d6e789b247ac45b",
        2942: "39d6d24fb10ec7aac717",
        3069: "2c30e5fa9dafa7bffeb6",
        3112: "c38256349826ef924c0f",
        3185: "1e4b1ccc882fde0b2df4",
        3252: "9f1f6405c37ad4aa1cd9",
        3277: "c407af4fcec0c07a80a4",
        3323: "a84489d88b418827b72a",
        3359: "a103d99b8df2b15530f8",
        3453: "ab9154a5ddb8680fdaa3",
        3504: "7bf7c4828e5b70595ef3",
        3557: "8b0fe3bde1e483dba9cf",
        3574: "8ead3cbaa2360a94ca2a",
        3768: "ec5d7bb49af9b966c348",
        3860: "924712e4f1e7911c2418",
        4033: "09705615feedb6c4b970",
        4108: "afc6d5ad14576f8df619",
        4171: "6c8001f2116167057fff",
        4189: "582d0453db08de594b0e",
        4199: "b05f6a41950a4073f6df",
        4238: "2676e9a545ea4cbaf48a",
        4297: "0ddda2887d595c7978a9",
        4458: "875842c0bd27ecf71a87",
        4535: "cc772e5e175135e81636",
        4601: "3979e0a30a068c53122a",
        4722: "f4aa939792c170f87640",
        4823: "3029266cc9d9162360d2",
        4860: "9a9ff04efa1a8d02234e",
        4929: "2af7f089afc6d03ece49",
        4935: "8ba61925612eef264c5a",
        4964: "8c6bea3e81c56b9c6c8c",
        5117: "915adb29dbb1653ce74c",
        5257: "1175fc3e70e13c1a0593",
        5438: "3532e4fece288ca6143a",
        5625: "888b5240196f5074dbae",
        5676: "7dc7f888b0befdd5b824",
        5849: "7424e662edf35a3e2a39",
        5925: "42ff3f8a486442fd4a9b",
        5933: "3c25c34d5074bc4d2276",
        5948: "c924d58c4e5a6847b31d",
        6007: "1edef36de1d9c48bb426",
        6019: "36a68b52e33dc8875771",
        6035: "13a4c4c1410133d8d7b7",
        6087: "8dbfbaca02ae19b38463",
        6169: "c20b160ee6a6178baa6b",
        6492: "2b6c43dde7e768e9e495",
        6542: "bd2465a0e311a3158d7e",
        6699: "e613fab55810c16dd039",
        6815: "b064daf50a0362f4770b",
        6817: "7d8781947dfd8aa70326",
        6846: "54e6d218e46a2a59cff6",
        7037: "1e8860001e715b5c2f26",
        7082: "65d502fd82cbdabd4b7e",
        7236: "d3c5ee8741b4579851d7",
        7334: "7882dd63c1974b29d531",
        7602: "46e1905915e6fc075e1c",
        7762: "bfaa9a9f1effc88208c3",
        7781: "8691c252f530a5fc2e93",
        7871: "d944abd95133354a1510",
        7890: "89951b43ac6748b0e3fb",
        7942: "d8fc0c123b66f1f05d73",
        7951: "f9738f9f902913f91141",
        7975: "08c3724faece375ae7a4",
        8001: "a8f0773110b27318f142",
        8051: "2e9d302cb83ecf4eddf3",
        8052: "f09cc2e4217ac6a17976",
        8155: "099807c36d5fbe0a32e8",
        8168: "22b01d752cfdb72f534b",
        8385: "a9490fa8ff1e795769ca",
        8774: "e89705c9b6c998ddf58f",
        8960: "36f56d76907d072b742c",
        8974: "f0c44855228c1144a5dd",
        8994: "10026647200221d8450f",
        9062: "1c847a58bd64b96f2336",
        9315: "905b3c4a6f4d01ab5b71",
        9431: "284b2831190de48ba65c",
        9568: "aac1ce88a4a0773d770d",
        9603: "a7e98b7968229d2e7ee3",
        9663: "ddc36d09798e086d9910",
        9753: "a64b8f40d658a3d0b0ff",
        9899: "12674cb2843b822a2fdf",
        9903: "b906bae3108e40ba588c",
        9919: "b7ae198176b4b754bcf7",
        9980: "26e6ec7ecc3335fdc3d9",
      }[e]),
    (o.miniCssF = (e) =>
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
        131: "3bf9f585125a457c3c89",
        493: "f38ba98b44af4fc0288a",
        2136: "999d3c14eec1c5900025",
        2522: "08508b89777d546af5ee",
        2529: "af92258c5aff3107eefb",
        3504: "8a2eded61f4347210b74",
        3860: "9c433389a43a92b06d2e",
        4601: "f441e6a81a93e0fe73fc",
        4935: "59890b790fbf2cc93831",
        5676: "390df867b5b4d66beda1",
        6699: "3a19f92cb04178af6cdb",
        7762: "d61f93a707d7e363fa5a",
        8974: "1e1fd02737b257a087cb",
      }[e]),
    (o.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (o.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
    (r = {}),
    (d = "appmgmt-storeadmin:"),
    (o.l = (e, a, n, s) => {
      if (r[e]) r[e].push(a);
      else {
        var c, t;
        if (void 0 !== n)
          for (
            var i = document.getElementsByTagName("script"), b = 0;
            b < i.length;
            b++
          ) {
            var f = i[b];
            if (
              f.getAttribute("src") == e ||
              f.getAttribute("data-webpack") == d + n
            ) {
              c = f;
              break;
            }
          }
        c ||
          ((t = !0),
          ((c = document.createElement("script")).charset = "utf-8"),
          (c.timeout = 120),
          o.nc && c.setAttribute("nonce", o.nc),
          c.setAttribute("data-webpack", d + n),
          (c.src = e)),
          (r[e] = [a]);
        var h = (a, n) => {
            (c.onerror = c.onload = null), clearTimeout(l);
            var d = r[e];
            if (
              (delete r[e],
              c.parentNode && c.parentNode.removeChild(c),
              d && d.forEach((e) => e(n)),
              a)
            )
              return a(n);
          },
          l = setTimeout(
            h.bind(null, void 0, { type: "timeout", target: c }),
            12e4
          );
        (c.onerror = h.bind(null, c.onerror)),
          (c.onload = h.bind(null, c.onload)),
          t && document.head.appendChild(c);
      }
    }),
    (o.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      var e;
      o.g.importScripts && (e = o.g.location + "");
      var a = o.g.document;
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
        (o.p = e + "../../../");
    })(),
    (s = (e) =>
      new Promise((a, n) => {
        var r = o.miniCssF(e),
          d = o.p + r;
        if (
          ((e, a) => {
            for (
              var n = document.getElementsByTagName("link"), r = 0;
              r < n.length;
              r++
            ) {
              var d =
                (c = n[r]).getAttribute("data-href") || c.getAttribute("href");
              if ("stylesheet" === c.rel && (d === e || d === a)) return c;
            }
            var s = document.getElementsByTagName("style");
            for (r = 0; r < s.length; r++) {
              var c;
              if ((d = (c = s[r]).getAttribute("data-href")) === e || d === a)
                return c;
            }
          })(r, d)
        )
          return a();
        ((e, a, n, r) => {
          var d = document.createElement("link");
          (d.rel = "stylesheet"),
            (d.type = "text/css"),
            (d.onerror = d.onload =
              (s) => {
                if (((d.onerror = d.onload = null), "load" === s.type)) n();
                else {
                  var c = s && ("load" === s.type ? "missing" : s.type),
                    t = (s && s.target && s.target.href) || a,
                    i = new Error(
                      "Loading CSS chunk " + e + " failed.\n(" + t + ")"
                    );
                  (i.code = "CSS_CHUNK_LOAD_FAILED"),
                    (i.type = c),
                    (i.request = t),
                    d.parentNode.removeChild(d),
                    r(i);
                }
              }),
            (d.href = a),
            document.head.appendChild(d);
        })(e, d, a, n);
      })),
    (c = { 6700: 0 }),
    (o.f.miniCss = (e, a) => {
      c[e]
        ? a.push(c[e])
        : 0 !== c[e] &&
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
            (c[e] = s(e).then(
              () => {
                c[e] = 0;
              },
              (a) => {
                throw (delete c[e], a);
              }
            ))
          );
    }),
    (() => {
      var e = { 6700: 0 };
      (o.f.j = (a, n) => {
        var r = o.o(e, a) ? e[a] : void 0;
        if (0 !== r)
          if (r) n.push(r[2]);
          else if (6700 != a) {
            var d = new Promise((n, d) => (r = e[a] = [n, d]));
            n.push((r[2] = d));
            var s = o.p + o.u(a),
              c = new Error();
            o.l(
              s,
              (n) => {
                if (o.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var d = n && ("load" === n.type ? "missing" : n.type),
                    s = n && n.target && n.target.src;
                  (c.message =
                    "Loading chunk " + a + " failed.\n(" + d + ": " + s + ")"),
                    (c.name = "ChunkLoadError"),
                    (c.type = d),
                    (c.request = s),
                    r[1](c);
                }
              },
              "chunk-" + a,
              a
            );
          } else e[a] = 0;
      }),
        (o.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var r,
            d,
            [s, c, t] = n,
            i = 0;
          if (s.some((a) => 0 !== e[a])) {
            for (r in c) o.o(c, r) && (o.m[r] = c[r]);
            if (t) var b = t(o);
          }
          for (a && a(n); i < s.length; i++)
            (d = s[i]), o.o(e, d) && e[d] && e[d][0](), (e[d] = 0);
          return o.O(b);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
