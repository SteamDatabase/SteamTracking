/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "9375846";
(() => {
  "use strict";
  var e,
    a,
    n,
    s,
    d,
    c = {},
    r = {};
  function f(e) {
    var a = r[e];
    if (void 0 !== a) return a.exports;
    var n = (r[e] = { id: e, loaded: !1, exports: {} });
    return c[e].call(n.exports, n, n.exports, f), (n.loaded = !0), n.exports;
  }
  (f.m = c),
    (e = []),
    (f.O = (a, n, s, d) => {
      if (!n) {
        var c = 1 / 0;
        for (b = 0; b < e.length; b++) {
          for (var [n, s, d] = e[b], r = !0, i = 0; i < n.length; i++)
            (!1 & d || c >= d) && Object.keys(f.O).every((e) => f.O[e](n[i]))
              ? n.splice(i--, 1)
              : ((r = !1), d < c && (c = d));
          if (r) {
            e.splice(b--, 1);
            var o = s();
            void 0 !== o && (a = o);
          }
        }
        return a;
      }
      d = d || 0;
      for (var b = e.length; b > 0 && e[b - 1][2] > d; b--) e[b] = e[b - 1];
      e[b] = [n, s, d];
    }),
    (f.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return f.d(a, { a }), a;
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (f.t = function (e, s) {
      if ((1 & s && (e = this(e)), 8 & s)) return e;
      if ("object" == typeof e && e) {
        if (4 & s && e.__esModule) return e;
        if (16 & s && "function" == typeof e.then) return e;
      }
      var d = Object.create(null);
      f.r(d);
      var c = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var r = 2 & s && e; "object" == typeof r && !~a.indexOf(r); r = n(r))
        Object.getOwnPropertyNames(r).forEach((a) => (c[a] = () => e[a]));
      return (c.default = () => e), f.d(d, c), d;
    }),
    (f.d = (e, a) => {
      for (var n in a)
        f.o(a, n) &&
          !f.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: a[n] });
    }),
    (f.f = {}),
    (f.e = (e) =>
      Promise.all(Object.keys(f.f).reduce((a, n) => (f.f[n](e, a), a), []))),
    (f.u = (e) =>
      "javascript/applications/appmgmt/" +
      ({
        67: "main_czech-json",
        144: "marketing_japanese-json",
        316: "libraries~65a7c0237",
        407: "marketing_indonesian-json",
        414: "sales_polish-json",
        478: "marketing_danish-json",
        494: "sales_hungarian-json",
        539: "main_finnish-json",
        614: "marketing_hungarian-json",
        725: "chunk~75ddda0b4",
        809: "marketing_thai-json",
        934: "sales_danish-json",
        976: "shared_thai-json",
        1048: "sales_japanese-json",
        1065: "marketing_brazilian-json",
        1084: "libraries~4ec87c66d",
        1101: "pricingtool",
        1134: "libraries~42ac8df17",
        1225: "shared_swedish-json",
        1227: "sales_greek-json",
        1337: "main_japanese-json",
        1351: "sales_turkish-json",
        1369: "main_vietnamese-json",
        1396: "sales_sc_schinese-json",
        1449: "shared_bulgarian-json",
        1531: "shared_italian-json",
        1543: "sales_spanish-json",
        1606: "main_brazilian-json",
        1784: "libraries~4eb095478",
        1810: "chunk~65a7c0237",
        1973: "shared_japanese-json",
        2012: "chunk~42ac8df17",
        2206: "sales_russian-json",
        2255: "libraries~452026772",
        2256: "shared_english-json",
        2320: "shared_norwegian-json",
        2435: "shared_latam-json",
        2455: "storeadmin",
        2500: "main_spanish-json",
        2543: "main_latam-json",
        2632: "shared_spanish-json",
        2702: "main_french-json",
        2708: "main_italian-json",
        2726: "marketing_polish-json",
        2749: "shared_romanian-json",
        2785: "libraries~5da2a553c",
        2842: "sales_portuguese-json",
        2855: "marketing_norwegian-json",
        2946: "libraries~01f083eeb",
        2954: "shared_ukrainian-json",
        2992: "marketing_koreana-json",
        2995: "logoedtior",
        3025: "contenthubpages",
        3216: "sales_czech-json",
        3266: "main_dutch-json",
        3350: "deadlines",
        3374: "main_schinese-json",
        3436: "marketing_finnish-json",
        3562: "sales_bulgarian-json",
        3569: "sales_thai-json",
        3701: "main_swedish-json",
        3710: "shared_arabic-json",
        3833: "marketing_ukrainian-json",
        3872: "marketing_tchinese-json",
        3912: "marketing_vietnamese-json",
        3940: "main_thai-json",
        4153: "main_romanian-json",
        4160: "chunk~bb5324543",
        4182: "sales_swedish-json",
        4226: "steamdeck",
        4262: "steamml",
        4268: "events",
        4298: "chunk~5c3391d11",
        4372: "sales_finnish-json",
        4419: "main_portuguese-json",
        4440: "chunk~b7169550c",
        4893: "main_bulgarian-json",
        4917: "main_tchinese-json",
        4985: "resquemsg",
        5018: "shared_french-json",
        5027: "sdrconnections",
        5110: "shared_dutch-json",
        5136: "recappages",
        5183: "sales_norwegian-json",
        5193: "libraries~511d96142",
        5231: "marketing_english-json",
        5232: "sales_latam-json",
        5240: "sales_tchinese-json",
        5241: "shared_tchinese-json",
        5484: "main_greek-json",
        5605: "sales_dutch-json",
        5791: "sales_indonesian-json",
        5841: "libraries~e9c7aadaf",
        5933: "steamlearn",
        6031: "shared_finnish-json",
        6060: "chunk~01f083eeb",
        6103: "sales_english-json",
        6149: "shared_vietnamese-json",
        6159: "main_koreana-json",
        6165: "shared_hungarian-json",
        6208: "shared_german-json",
        6224: "sales_vietnamese-json",
        6236: "main_german-json",
        6239: "shared_portuguese-json",
        6343: "timelinemarkers",
        6383: "sales_italian-json",
        6403: "marketing_schinese-json",
        6459: "sales_schinese-json",
        6523: "shared_danish-json",
        6542: "libraries~9d44baec0",
        6562: "shared_brazilian-json",
        6589: "main_russian-json",
        6672: "chunk~ae98f6f0a",
        6716: "marketing_sc_schinese-json",
        6728: "marketing_latam-json",
        6759: "marketing_italian-json",
        6762: "meetsteam",
        6845: "marketing_dutch-json",
        6948: "main_norwegian-json",
        6966: "login",
        6979: "main_polish-json",
        6995: "libraries~65c77a859",
        7064: "marketing_czech-json",
        7224: "chunk~b624b36e8",
        7352: "chunk~9e65e27a0",
        7383: "adminpromoreviewdashboard",
        7439: "marketing_spanish-json",
        7539: "shared_koreana-json",
        7591: "shared_czech-json",
        7625: "main_hungarian-json",
        7631: "sales_french-json",
        7633: "sales_brazilian-json",
        7681: "sales_ukrainian-json",
        7786: "shared_schinese-json",
        7796: "main_turkish-json",
        7798: "main_ukrainian-json",
        7926: "marketing_russian-json",
        8025: "shared_russian-json",
        8129: "chunk~5d3576dcd",
        8306: "shared_indonesian-json",
        8350: "chunk~4ec87c66d",
        8396: "broadcast",
        8523: "publisherdashboard",
        8585: "marketing_german-json",
        8713: "chunk~271e3841d",
        8718: "marketing_swedish-json",
        8755: "marketing_greek-json",
        8758: "chunk~4b4a4243d",
        8787: "libraries~c14e6be50",
        8801: "sales_german-json",
        8932: "libraries~4b4a4243d",
        8967: "shared_polish-json",
        8995: "chunk~5da2a553c",
        9001: "chunk~2b2881d4d",
        9017: "chunk~804e695f4",
        9027: "shared_sc_schinese-json",
        9152: "shared_turkish-json",
        9188: "main_english-json",
        9207: "marketing_french-json",
        9391: "marketing_turkish-json",
        9431: "main_danish-json",
        9566: "main_indonesian-json",
        9650: "marketing_bulgarian-json",
        9712: "shared_greek-json",
        9730: "marketing_portuguese-json",
        9812: "sales_romanian-json",
        9916: "marketing_romanian-json",
        9992: "sales_koreana-json",
      }[e] || e) +
      ".js?contenthash=" +
      {
        67: "de76d2749b0f42a54289",
        144: "827ff572cf67194596b6",
        316: "3bd4673819e3d13fc6b6",
        407: "b42ee40e4056f8e2cb05",
        414: "263cb6526fe32e85914e",
        478: "545d11683947ae492627",
        494: "1f130227a2341312bea0",
        539: "ae5dcb5ee9c391a628cb",
        614: "64f34f8e351950479bae",
        725: "261cd4f07dce5dd55581",
        809: "4b5b5f9dcd1fb0742f1c",
        934: "21e7d0241f0b6b12d75d",
        976: "7b8fb8e11cb951054a9a",
        1048: "92a8ac04594c3413b4d8",
        1065: "773cb8a4df38b917a495",
        1084: "ef29b14988df46a82617",
        1101: "765b79c89ee55314ae2f",
        1134: "01a5116402d3bbce89ac",
        1225: "395b228bb5c6852c04d9",
        1227: "cc820e9c579b44dcc355",
        1337: "17aab155d0d0d9c89b7a",
        1351: "9caa882434aebf261e0f",
        1369: "58240cb150c45af05870",
        1396: "f743fc982a08a30cfb3a",
        1449: "761fdb384c58521b85a4",
        1531: "1bdbf6c762408619d4bf",
        1543: "e9cfd40d0e58a2e1fb20",
        1606: "ec25102abbe21797021c",
        1784: "586c9bdaae198af54af0",
        1810: "22b0653a41b0ead7c771",
        1973: "5515eebb682a40306eb9",
        2012: "a44475b311676bda5fec",
        2206: "ad71569b03dcc0ed28fe",
        2255: "68d64396843529514952",
        2256: "20ce2ca158a5c3ed0723",
        2320: "1cdebf5ca524ba9e4bc0",
        2435: "482521cb406aada98fb3",
        2455: "0ecfda710949d7c8f82b",
        2500: "79514a6e56d16faa165a",
        2543: "d4643cf7322fc0431b04",
        2632: "7a3347619160f037b1c9",
        2702: "34bcb26d424452cf3d4f",
        2708: "8ca3062d2dd8e29779e0",
        2726: "918f4824accb141f8395",
        2749: "21d427f7aecdd87dc390",
        2785: "e4fc5071116d29d332bf",
        2842: "4e034d110d2067f7d118",
        2855: "3d7fdde103f14218b4f9",
        2946: "5a623db960fe744ba02a",
        2954: "053c7e7d420ffbbd3f80",
        2992: "a42bf78b49d77ba455f6",
        2995: "d9662877d5dffd11b4fa",
        3025: "ba5d7dc8d30b622de08e",
        3216: "2f3857874fde1575f2cf",
        3266: "ca49496ccc841772aabb",
        3350: "6a2f28d20d6e327f0df7",
        3374: "676355f7a741a0c4f7b6",
        3436: "d77dcd9b094e0c1430a6",
        3562: "0a5118b68b132156d17a",
        3569: "37847cebb2fa26bfde91",
        3701: "8ed4c2a34b3d230c0716",
        3710: "9f0600a2ec6513b3c14b",
        3833: "551e61bb500237f02e51",
        3872: "014e975cc8c4bcd79478",
        3912: "9f307057ba73f8966e36",
        3940: "059f11d4537ceef21006",
        4153: "5faf9338d1075bf980a2",
        4160: "d799fc500bb0085c5af2",
        4182: "e8541646305c91c544d6",
        4226: "819c6a6883f8feaa67e8",
        4262: "d34414ea8b31503ab798",
        4268: "d5cb79dd898feb60033e",
        4298: "b286164abd82e6981b0d",
        4372: "fb0ce4f2559bcf1f7f91",
        4419: "735ae6afa0dd1570c058",
        4440: "dde438ac31a13d4210e4",
        4893: "e6511dcc8ca2d2b07c56",
        4917: "aad3068ad0241e938f36",
        4985: "603897137115e9f82e1c",
        5018: "e2cfe82c55126100d935",
        5027: "8785a73df8e5dd468157",
        5110: "1986df2cbfede4f95e32",
        5136: "ab57f0b05a572319d920",
        5183: "6f61111df1ab1011f6a3",
        5193: "da42aa93a400e7ca8ff4",
        5231: "6f089bd78e949537f3d8",
        5232: "3b14af37dfda91f0dcb4",
        5240: "03e5f246cb8f0f5efd36",
        5241: "5a433beb132398ac4aaa",
        5484: "ace00652727bdf61065b",
        5605: "3283fb91e239245f3f48",
        5791: "43be9433fcca7117e62f",
        5841: "a128b8db3f9c32f5c93a",
        5933: "c99bed9aab2ac77f9e88",
        6031: "8990ef896166eee03f35",
        6060: "d7bf9e44ad28c4637d10",
        6103: "3ac53c56b99df6f8c21d",
        6149: "061bac98214060d22fe1",
        6159: "71d717e809ef276da2b3",
        6165: "46566da990230a42a92e",
        6208: "0c39617cb97026242115",
        6209: "88699811237b1258234e",
        6224: "2832ccc4c6a1e9473cc4",
        6236: "951328aea8c44a98324b",
        6239: "187806d8881f549c7368",
        6343: "57e3dc6cf79800924fbf",
        6383: "9d63b452f584841807c5",
        6403: "e934b400984d84c1c055",
        6459: "61b9d2debbe484365d11",
        6523: "fb771eeb425319db259d",
        6542: "03989cddedf4afcf7a39",
        6562: "cb3d42c72140cf5e2060",
        6589: "b58bd7d0361dd2fb8793",
        6672: "deb8b329da2c6110f430",
        6716: "830932a38d1fca0ebaf4",
        6728: "c63f315c52c96032c576",
        6759: "99800b7630bd79bb9c9d",
        6762: "f597d94a74a3f67b270d",
        6845: "3ff63ec5ff21af9dc2c4",
        6948: "ae020d8622f9e0115f52",
        6966: "fd430084bdbac1e82f17",
        6979: "c1a97a6eb3137d34bc96",
        6995: "a580480ea0c88f7c76dd",
        7064: "657d393309ecbd543238",
        7224: "f84ff8853e064347071c",
        7352: "f8eee0a672a717e23fbc",
        7383: "1cae9bcfe6993c6080d6",
        7439: "7b4952dbb83614220d9a",
        7539: "fd2a7b80a7dcfd1d1f4f",
        7591: "a09f2e00a2d3427d5bd8",
        7625: "1f46e699f239604dbe2f",
        7631: "ccfc11079db0e0599008",
        7633: "2e43591ffa0a8f7758d1",
        7681: "71d21c6eb2fea6046aa0",
        7786: "eb63f49af0998ebd32a4",
        7796: "188ce550db2fa95787a5",
        7798: "018b918aca9009961582",
        7926: "1293e20f85db3dd73b41",
        8025: "90d60419e2910ce4ea86",
        8129: "efdf6baf62c49554cc50",
        8306: "8b8b5c596b54bc3fdc33",
        8350: "4f4c85ab2afb00039709",
        8396: "35166c24f355e0df6f4f",
        8523: "9af032dc940128e22621",
        8585: "1dfdd3973a604987206d",
        8713: "004643994f8fe22b3ee7",
        8718: "0083e1c0e4d10fffcfb0",
        8755: "612a2b46663d91e681a5",
        8758: "6cdc6463fb02250c949b",
        8787: "8fc5c39fa7f88e4070ac",
        8801: "b927e351399d56183df4",
        8932: "c990afb349a3ef5e0267",
        8967: "6499d278ccfb39d92b92",
        8995: "27b53d34e55c6c52ed15",
        9001: "40c0fcb134df08c3e376",
        9017: "983f22650acea6c85e8f",
        9027: "72ef26d681628589eba0",
        9152: "373d7c521b4f3524da45",
        9188: "135f77891aab0423fde6",
        9207: "7dca08be8593242c7857",
        9391: "795463e2013572c6a592",
        9431: "44c2d855b0a9766d0dce",
        9566: "c5b5f0722ec1f47e1186",
        9650: "9c0076dbb9a594592651",
        9712: "b6700cae2f7a4df135b4",
        9730: "45a2888d302e8c42e046",
        9812: "8109729363385503a631",
        9916: "ad2c532203c3ef5cb343",
        9992: "2d3933bd375dc4c2c1bd",
      }[e]),
    (f.miniCssF = (e) =>
      "css/applications/appmgmt/" +
      {
        1101: "pricingtool",
        1810: "chunk~65a7c0237",
        2012: "chunk~42ac8df17",
        2455: "storeadmin",
        2785: "libraries~5da2a553c",
        2995: "logoedtior",
        3025: "contenthubpages",
        3350: "deadlines",
        4226: "steamdeck",
        4262: "steamml",
        4268: "events",
        4985: "resquemsg",
        5027: "sdrconnections",
        5933: "steamlearn",
        6343: "timelinemarkers",
        6762: "meetsteam",
        7383: "adminpromoreviewdashboard",
        8350: "chunk~4ec87c66d",
        8396: "broadcast",
        8523: "publisherdashboard",
      }[e] +
      ".css?contenthash=" +
      {
        1101: "0fbd0e93b254aa82d98e",
        1810: "950d1a8e1e8cb524ff25",
        2012: "3e640229d89ebac77fad",
        2455: "c5c911e9fc6e2fb79dc7",
        2785: "da3b05b688206293fc3e",
        2995: "68490a0464a23c4c13fe",
        3025: "8765d34c9db1839ace2c",
        3350: "d3441efb5954978e3de4",
        4226: "f355e2c45b0604a5b7f2",
        4262: "61877d984bfcf3e7f40f",
        4268: "4830c685d4e654129726",
        4985: "edeef71b8baf55102fb0",
        5027: "33eb9d66d0507e03ca68",
        5933: "b1fb670d5b1cdb74be47",
        6343: "1603047f79d597876269",
        6762: "ec07db432cd9212608ee",
        7383: "7d397c627b354e1a49cf",
        8350: "4e804833149ee99968ce",
        8396: "270d67397cba0f40cd94",
        8523: "eb07d2247034468af8de",
      }[e]),
    (f.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (f.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
    (s = {}),
    (d = "appmgmt-storeadmin:"),
    (f.l = (e, a, n, c) => {
      if (s[e]) s[e].push(a);
      else {
        var r, i;
        if (void 0 !== n)
          for (
            var o = document.getElementsByTagName("script"), b = 0;
            b < o.length;
            b++
          ) {
            var t = o[b];
            if (
              t.getAttribute("src") == e ||
              t.getAttribute("data-webpack") == d + n
            ) {
              r = t;
              break;
            }
          }
        r ||
          ((i = !0),
          ((r = document.createElement("script")).charset = "utf-8"),
          (r.timeout = 120),
          f.nc && r.setAttribute("nonce", f.nc),
          r.setAttribute("data-webpack", d + n),
          (r.src = e)),
          (s[e] = [a]);
        var l = (a, n) => {
            (r.onerror = r.onload = null), clearTimeout(h);
            var d = s[e];
            if (
              (delete s[e],
              r.parentNode && r.parentNode.removeChild(r),
              d && d.forEach((e) => e(n)),
              a)
            )
              return a(n);
          },
          h = setTimeout(
            l.bind(null, void 0, { type: "timeout", target: r }),
            12e4,
          );
        (r.onerror = l.bind(null, r.onerror)),
          (r.onload = l.bind(null, r.onload)),
          i && document.head.appendChild(r);
      }
    }),
    (f.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (f.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (f.p = ""),
    (() => {
      if ("undefined" != typeof document) {
        var e = (e) =>
            new Promise((a, n) => {
              var s = f.miniCssF(e),
                d = f.p + s;
              if (
                ((e, a) => {
                  for (
                    var n = document.getElementsByTagName("link"), s = 0;
                    s < n.length;
                    s++
                  ) {
                    var d =
                      (r = n[s]).getAttribute("data-href") ||
                      r.getAttribute("href");
                    if ("stylesheet" === r.rel && (d === e || d === a))
                      return r;
                  }
                  var c = document.getElementsByTagName("style");
                  for (s = 0; s < c.length; s++) {
                    var r;
                    if (
                      (d = (r = c[s]).getAttribute("data-href")) === e ||
                      d === a
                    )
                      return r;
                  }
                })(s, d)
              )
                return a();
              ((e, a, n, s, d) => {
                var c = document.createElement("link");
                (c.rel = "stylesheet"),
                  (c.type = "text/css"),
                  (c.onerror = c.onload =
                    (n) => {
                      if (((c.onerror = c.onload = null), "load" === n.type))
                        s();
                      else {
                        var r = n && n.type,
                          f = (n && n.target && n.target.href) || a,
                          i = new Error(
                            "Loading CSS chunk " +
                              e +
                              " failed.\n(" +
                              r +
                              ": " +
                              f +
                              ")",
                          );
                        (i.name = "ChunkLoadError"),
                          (i.code = "CSS_CHUNK_LOAD_FAILED"),
                          (i.type = r),
                          (i.request = f),
                          c.parentNode && c.parentNode.removeChild(c),
                          d(i);
                      }
                    }),
                  (c.href = a),
                  n
                    ? n.parentNode.insertBefore(c, n.nextSibling)
                    : document.head.appendChild(c);
              })(e, d, null, a, n);
            }),
          a = { 4556: 0 };
        f.f.miniCss = (n, s) => {
          a[n]
            ? s.push(a[n])
            : 0 !== a[n] &&
              {
                1101: 1,
                1810: 1,
                2012: 1,
                2455: 1,
                2785: 1,
                2995: 1,
                3025: 1,
                3350: 1,
                4226: 1,
                4262: 1,
                4268: 1,
                4985: 1,
                5027: 1,
                5933: 1,
                6343: 1,
                6762: 1,
                7383: 1,
                8350: 1,
                8396: 1,
                8523: 1,
              }[n] &&
              s.push(
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
      var e = { 4556: 0 };
      (f.f.j = (a, n) => {
        var s = f.o(e, a) ? e[a] : void 0;
        if (0 !== s)
          if (s) n.push(s[2]);
          else if (4556 != a) {
            var d = new Promise((n, d) => (s = e[a] = [n, d]));
            n.push((s[2] = d));
            var c = f.p + f.u(a),
              r = new Error();
            f.l(
              c,
              (n) => {
                if (f.o(e, a) && (0 !== (s = e[a]) && (e[a] = void 0), s)) {
                  var d = n && ("load" === n.type ? "missing" : n.type),
                    c = n && n.target && n.target.src;
                  (r.message =
                    "Loading chunk " + a + " failed.\n(" + d + ": " + c + ")"),
                    (r.name = "ChunkLoadError"),
                    (r.type = d),
                    (r.request = c),
                    s[1](r);
                }
              },
              "chunk-" + a,
              a,
            );
          } else e[a] = 0;
      }),
        (f.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var s,
            d,
            [c, r, i] = n,
            o = 0;
          if (c.some((a) => 0 !== e[a])) {
            for (s in r) f.o(r, s) && (f.m[s] = r[s]);
            if (i) var b = i(f);
          }
          for (a && a(n); o < c.length; o++)
            (d = c[o]), f.o(e, d) && e[d] && e[d][0](), (e[d] = 0);
          return f.O(b);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
