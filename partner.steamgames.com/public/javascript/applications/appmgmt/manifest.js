/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7902138";
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
        131: "ee8f2b1b766c9c9d1e40",
        145: "5b0d6f00f76aa1db1a86",
        493: "4a8040e19a3fe7df135a",
        494: "05fe723268d8d8f38ede",
        614: "8161db84d000e99e0f98",
        647: "9109839edb60ece4b454",
        698: "462c81108d12da64a8ef",
        727: "706846c1c2449fb1033c",
        799: "555595c0485243d22457",
        819: "72b6eed63c426e29aa75",
        874: "4ea584589b5ba89f0194",
        903: "f9da19890463e7598454",
        907: "ceedb74475dfa32296d7",
        1117: "a051f1b2a80a98a9cbf1",
        1162: "95596342a1f5cefa6f12",
        1233: "8a72bb136a319770f909",
        1313: "6b6a77fc7946449d5c3a",
        2029: "9b2f0211dd5b27ff82a8",
        2055: "af0ace21de6021a6bd15",
        2120: "8c072467bd791e564e8b",
        2136: "ecbab60248136b6f396f",
        2431: "1d644fd6ec6f77ecb3b0",
        2443: "3ec6e19edfb9455f570d",
        2448: "83825b69c43d60e4da02",
        2522: "a55ea2eef6a334b40173",
        2529: "797641efed7a47c7ad5a",
        2537: "b103e266fd1d9f3966a4",
        2581: "d2d4ae433d3bc3f70b07",
        2601: "8cdb0fb08d919f211e51",
        2767: "78fdf41532812713faca",
        2824: "308649544fa00b5da11d",
        2844: "43ef0cccb8de07ba4e85",
        2848: "97e75c24f44a21203ea2",
        2942: "2a96bf626699e79f42c3",
        3069: "2c30e5fa9dafa7bffeb6",
        3112: "6bd1c33d97351723a798",
        3185: "688f32c650d8f3f7f5e3",
        3252: "eea22f88ff031da089f7",
        3277: "d9d06fbcadeba26580ba",
        3323: "f25440880cdc8e98a01d",
        3359: "f4f3755988e051d1594e",
        3453: "ab9154a5ddb8680fdaa3",
        3504: "5a0b9adbc49fca047bea",
        3557: "cd543baa46cdd9157f9f",
        3574: "8ead3cbaa2360a94ca2a",
        3768: "c452fa6ccbc694909060",
        3860: "677d99590e8ac98286a2",
        4033: "09705615feedb6c4b970",
        4108: "6b54e8f50a8c9328e85a",
        4171: "6c8001f2116167057fff",
        4189: "c90a716dc3a58dc2af5b",
        4199: "b05f6a41950a4073f6df",
        4238: "2676e9a545ea4cbaf48a",
        4297: "2d6796f03d40dc5a9625",
        4458: "875842c0bd27ecf71a87",
        4535: "b7899a9761348ec2f181",
        4601: "d4685702bd86d8065eed",
        4722: "c3b4183e0b407fe81f56",
        4823: "0571450c4067c138ff43",
        4860: "f0ac8ed2ca0ac2eba086",
        4929: "2af7f089afc6d03ece49",
        4935: "cdfe4ffa4f15e6360fd9",
        4964: "045ac77a42ed492b57a6",
        5117: "915adb29dbb1653ce74c",
        5257: "1175fc3e70e13c1a0593",
        5438: "ef6a7480c60a73e789cf",
        5625: "63a7b93ec1c0d7f156ff",
        5676: "b80c5734677686bf0b1d",
        5849: "225631802b277db48137",
        5925: "cfd9fb9018824f9a437a",
        5933: "c126d12ab7757880aabc",
        5948: "4d83ce24758759ebb611",
        6007: "aa48f7f5fe99dfbba79f",
        6019: "36a68b52e33dc8875771",
        6035: "13a4c4c1410133d8d7b7",
        6087: "b663e6c259dc655b9d0b",
        6169: "c20b160ee6a6178baa6b",
        6492: "cb532784b2f150d49465",
        6542: "b8cfbf0c6025fe30691e",
        6699: "bf533d0de49c08855e8c",
        6815: "3ca6a4614c45d5a75ad4",
        6817: "62a1e7f58a8625eca30d",
        6846: "54e6d218e46a2a59cff6",
        7037: "1e8860001e715b5c2f26",
        7082: "65d502fd82cbdabd4b7e",
        7236: "30016061082434750d58",
        7334: "8a6cb4a150aaefd6b5cb",
        7602: "18384dd8f194e9dcb113",
        7762: "c05fdea15a2ca2a5a45d",
        7781: "e6bf178899e9b983e0ae",
        7871: "2297dfe467cbde79d6fe",
        7890: "76be7cee963898275ae0",
        7942: "d8fc0c123b66f1f05d73",
        7951: "36f2bea6fb9129f70e52",
        7975: "4247974e035ef3920573",
        8001: "a8f0773110b27318f142",
        8051: "1d28d8f34cddd363dbda",
        8052: "02ed508d94d92458d1ea",
        8155: "136902bd29b97ffea7c4",
        8168: "21d3a2308cca7591c389",
        8385: "765396bab3d39b471333",
        8774: "e89705c9b6c998ddf58f",
        8960: "fc0cfaf44c36a497b9c9",
        8974: "7d7adde86e66486a5d67",
        8994: "10026647200221d8450f",
        9062: "1e815bd497d2f4cf7fc4",
        9315: "905b3c4a6f4d01ab5b71",
        9431: "f5c6b7ce890bf1da867d",
        9568: "7979bc256cec878f1629",
        9603: "a7e98b7968229d2e7ee3",
        9663: "22ad4c67d84013b3256d",
        9753: "0fd81138cd35581e56a6",
        9899: "12674cb2843b822a2fdf",
        9903: "b906bae3108e40ba588c",
        9919: "087f1431e67bb71dfdcb",
        9980: "0321c36abdca4a59bed0",
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
        131: "8ce6e84d2f03e0715cf9",
        493: "d885e31859d50e4d4824",
        2136: "35e14980454a84ccb56a",
        2522: "00fd260513aee0ab8826",
        2529: "eb0e6d373362b2c7c3dc",
        3504: "83abb8e8ee0d8ff0026e",
        3860: "919cd65c05dbc044bdb7",
        4601: "1aa71cb83aeab19b43fd",
        4935: "b7abea9ad444fe28cc7e",
        5676: "740caf97678ca2bb5414",
        6699: "b4c5af28231aaf607a48",
        7762: "e3a2b8e7ea298a4cb539",
        8974: "c137dece0c7a1bda2224",
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
