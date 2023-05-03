/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8032228";
(() => {
  "use strict";
  var e,
    a,
    n,
    r,
    d,
    s,
    t,
    c = {},
    i = {};
  function b(e) {
    var a = i[e];
    if (void 0 !== a) return a.exports;
    var n = (i[e] = { id: e, loaded: !1, exports: {} });
    return c[e].call(n.exports, n, n.exports, b), (n.loaded = !0), n.exports;
  }
  (b.m = c),
    (e = []),
    (b.O = (a, n, r, d) => {
      if (!n) {
        var s = 1 / 0;
        for (o = 0; o < e.length; o++) {
          for (var [n, r, d] = e[o], t = !0, c = 0; c < n.length; c++)
            (!1 & d || s >= d) && Object.keys(b.O).every((e) => b.O[e](n[c]))
              ? n.splice(c--, 1)
              : ((t = !1), d < s && (s = d));
          if (t) {
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
      var s = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var t = 2 & r && e; "object" == typeof t && !~a.indexOf(t); t = n(t))
        Object.getOwnPropertyNames(t).forEach((a) => (s[a] = () => e[a]));
      return (s.default = () => e), b.d(d, s), d;
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
        131: "80a72c41c47416e3216a",
        145: "e4e6becdd51d89437815",
        493: "4a8040e19a3fe7df135a",
        494: "05fe723268d8d8f38ede",
        614: "8161db84d000e99e0f98",
        647: "1b73738218d73f6f8d52",
        698: "08eb7b518e24f0b90645",
        727: "cf9242511a55f924c9ed",
        799: "13df295e477ec4b8aba6",
        819: "a25a37b2f5ac1c893277",
        874: "86198e5752a033a7c777",
        903: "d07e0254d017af7d879a",
        907: "ceedb74475dfa32296d7",
        1117: "9c8d515e7bc4eaa0d77b",
        1162: "562eb70f2a23c64de16c",
        1233: "8a72bb136a319770f909",
        1254: "409b6ac2a3894146ca33",
        1313: "178bbb7188db37eab155",
        2029: "6fa88893831f38394d13",
        2055: "c687a6257bc18b92d939",
        2120: "8c072467bd791e564e8b",
        2136: "5c4443e770713e1e858b",
        2431: "1d644fd6ec6f77ecb3b0",
        2443: "6186b4db94d76663e046",
        2448: "0d149c03e1b29553d98c",
        2522: "faf7ef510c2fcd6c7f9c",
        2529: "93442f39d6a4d2d1a0c3",
        2537: "9ddef1a83a530a666d9e",
        2581: "e0a1aaa63bb5b1d09b86",
        2601: "de763e65b664ce5083cf",
        2767: "0d294016f984f5c9cd06",
        2824: "d0b2d4ad305a487f1864",
        2844: "a068b037dc1c191c799f",
        2848: "2b058d6e789b247ac45b",
        2942: "39d6d24fb10ec7aac717",
        3069: "2c30e5fa9dafa7bffeb6",
        3112: "8ffb30892d4389b9c532",
        3185: "844bbd79a4b0b4ad02fb",
        3252: "151a32ab9e361ecfd5fe",
        3277: "c407af4fcec0c07a80a4",
        3323: "a84489d88b418827b72a",
        3359: "a103d99b8df2b15530f8",
        3453: "a87e96abc03859132858",
        3504: "53522fdeea7f0b1a278a",
        3557: "7ceccf8b77a42dbe873b",
        3574: "8ead3cbaa2360a94ca2a",
        3768: "ec5d7bb49af9b966c348",
        3860: "3d734a4f15a2c2d2f517",
        4033: "b18c7b9a93e7996a5e62",
        4108: "e59cf0e6e769e720f2c8",
        4171: "828b4f84783172993f8d",
        4189: "1323c52f8f312d65bbbd",
        4199: "b0ce6192dca11c614ca3",
        4238: "da904fef1becda2f36cc",
        4297: "324a581772bd67b444a5",
        4458: "64c9c01a42b9ed93e1da",
        4535: "cc772e5e175135e81636",
        4601: "a983522b7ec6e1fd1055",
        4722: "f4aa939792c170f87640",
        4823: "d1e080210c88f412ef17",
        4860: "9a9ff04efa1a8d02234e",
        4929: "7706977d1a657fb49318",
        4935: "150c62e9b8696fa3283e",
        4964: "0229d165b72bf7131e09",
        5117: "915adb29dbb1653ce74c",
        5257: "2e9d01fd6e126719cac6",
        5438: "2951cf7a58c5585307cd",
        5625: "f9e19a3f958af5607ee0",
        5676: "e41d2abadd3909ed542a",
        5849: "d5478ca13c481009a21b",
        5925: "682b6b25c44cac751a3a",
        5933: "157f8f8159346872a650",
        5948: "2c96b7d7f042d01fbe4d",
        6007: "3a7654c4a0af3cd1fe89",
        6019: "72cd0736f3bbc4e29758",
        6035: "3467fb688d5d8c7900a8",
        6087: "8dbfbaca02ae19b38463",
        6169: "b1463804a26551124871",
        6492: "ead119c04a4cc210bda8",
        6542: "81bb334a0ef86e75c7d8",
        6699: "e613fab55810c16dd039",
        6815: "b064daf50a0362f4770b",
        6817: "7d8781947dfd8aa70326",
        6846: "33921f447228ba13eb8b",
        7037: "1e8860001e715b5c2f26",
        7082: "719b55ecf1ee73810096",
        7236: "3b70909cd5b7cc0d05ae",
        7334: "4040185b38ca14def217",
        7602: "48e29ad0cb9854153037",
        7762: "99da34764f2fb68ec368",
        7781: "fcaa7629e18cfcfd0c2d",
        7871: "21f67210d36ecb880e7c",
        7890: "89951b43ac6748b0e3fb",
        7942: "86b67092d173f92d6b50",
        7951: "f9738f9f902913f91141",
        7975: "36549c2f5b0fac4a8978",
        8001: "41ba3e7ab79babe20831",
        8051: "2e9d302cb83ecf4eddf3",
        8052: "1c6a00eed03cccbd34c0",
        8155: "099807c36d5fbe0a32e8",
        8168: "22b01d752cfdb72f534b",
        8385: "357b8594f01127367370",
        8774: "e0551fd786c294ca1a90",
        8960: "b59ecf3ff6fdc9c61991",
        8974: "f0c44855228c1144a5dd",
        8994: "223a5a0e626fd6f60ae9",
        9062: "4f09af9b0d4486e483a6",
        9315: "905b3c4a6f4d01ab5b71",
        9431: "284b2831190de48ba65c",
        9568: "aac1ce88a4a0773d770d",
        9603: "a7e98b7968229d2e7ee3",
        9663: "ddc36d09798e086d9910",
        9753: "ee48337c4731aa749637",
        9899: "016770aadeaf14a5846b",
        9903: "ebf6c5b170b1a3c048d6",
        9919: "b7ae198176b4b754bcf7",
        9980: "26e6ec7ecc3335fdc3d9",
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
        131: "5e6766311a2f22c0a318",
        493: "f38ba98b44af4fc0288a",
        2136: "ee6809e3d3e695754016",
        2522: "08508b89777d546af5ee",
        2529: "af92258c5aff3107eefb",
        3504: "381902414efe6cc1ca29",
        3860: "886aeefd6f5a7e041aa8",
        4601: "f441e6a81a93e0fe73fc",
        4935: "59890b790fbf2cc93831",
        5676: "390df867b5b4d66beda1",
        6699: "3a19f92cb04178af6cdb",
        7762: "d61f93a707d7e363fa5a",
        8974: "c79bccbe91afd7ff7284",
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
    (b.l = (e, a, n, s) => {
      if (r[e]) r[e].push(a);
      else {
        var t, c;
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
              t = f;
              break;
            }
          }
        t ||
          ((c = !0),
          ((t = document.createElement("script")).charset = "utf-8"),
          (t.timeout = 120),
          b.nc && t.setAttribute("nonce", b.nc),
          t.setAttribute("data-webpack", d + n),
          (t.src = e)),
          (r[e] = [a]);
        var h = (a, n) => {
            (t.onerror = t.onload = null), clearTimeout(l);
            var d = r[e];
            if (
              (delete r[e],
              t.parentNode && t.parentNode.removeChild(t),
              d && d.forEach((e) => e(n)),
              a)
            )
              return a(n);
          },
          l = setTimeout(
            h.bind(null, void 0, { type: "timeout", target: t }),
            12e4
          );
        (t.onerror = h.bind(null, t.onerror)),
          (t.onload = h.bind(null, t.onload)),
          c && document.head.appendChild(t);
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
    (s = (e) =>
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
                (t = n[r]).getAttribute("data-href") || t.getAttribute("href");
              if ("stylesheet" === t.rel && (d === e || d === a)) return t;
            }
            var s = document.getElementsByTagName("style");
            for (r = 0; r < s.length; r++) {
              var t;
              if ((d = (t = s[r]).getAttribute("data-href")) === e || d === a)
                return t;
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
                  var t = s && ("load" === s.type ? "missing" : s.type),
                    c = (s && s.target && s.target.href) || a,
                    i = new Error(
                      "Loading CSS chunk " + e + " failed.\n(" + c + ")"
                    );
                  (i.code = "CSS_CHUNK_LOAD_FAILED"),
                    (i.type = t),
                    (i.request = c),
                    d.parentNode.removeChild(d),
                    r(i);
                }
              }),
            (d.href = a),
            document.head.appendChild(d);
        })(e, d, a, n);
      })),
    (t = { 6700: 0 }),
    (b.f.miniCss = (e, a) => {
      t[e]
        ? a.push(t[e])
        : 0 !== t[e] &&
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
            (t[e] = s(e).then(
              () => {
                t[e] = 0;
              },
              (a) => {
                throw (delete t[e], a);
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
            var s = b.p + b.u(a),
              t = new Error();
            b.l(
              s,
              (n) => {
                if (b.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var d = n && ("load" === n.type ? "missing" : n.type),
                    s = n && n.target && n.target.src;
                  (t.message =
                    "Loading chunk " + a + " failed.\n(" + d + ": " + s + ")"),
                    (t.name = "ChunkLoadError"),
                    (t.type = d),
                    (t.request = s),
                    r[1](t);
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
            [s, t, c] = n,
            i = 0;
          if (s.some((a) => 0 !== e[a])) {
            for (r in t) b.o(t, r) && (b.m[r] = t[r]);
            if (c) var o = c(b);
          }
          for (a && a(n); i < s.length; i++)
            (d = s[i]), b.o(e, d) && e[d] && e[d][0](), (e[d] = 0);
          return b.O(o);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
