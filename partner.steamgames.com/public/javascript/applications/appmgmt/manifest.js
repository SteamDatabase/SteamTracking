/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8556783";
(() => {
  "use strict";
  var e,
    a,
    n,
    s,
    c,
    r,
    d,
    i = {},
    b = {};
  function o(e) {
    var a = b[e];
    if (void 0 !== a) return a.exports;
    var n = (b[e] = { id: e, loaded: !1, exports: {} });
    return i[e].call(n.exports, n, n.exports, o), (n.loaded = !0), n.exports;
  }
  (o.m = i),
    (e = []),
    (o.O = (a, n, s, c) => {
      if (!n) {
        var r = 1 / 0;
        for (t = 0; t < e.length; t++) {
          for (var [n, s, c] = e[t], d = !0, i = 0; i < n.length; i++)
            (!1 & c || r >= c) && Object.keys(o.O).every((e) => o.O[e](n[i]))
              ? n.splice(i--, 1)
              : ((d = !1), c < r && (r = c));
          if (d) {
            e.splice(t--, 1);
            var b = s();
            void 0 !== b && (a = b);
          }
        }
        return a;
      }
      c = c || 0;
      for (var t = e.length; t > 0 && e[t - 1][2] > c; t--) e[t] = e[t - 1];
      e[t] = [n, s, c];
    }),
    (o.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return o.d(a, { a }), a;
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (o.t = function (e, s) {
      if ((1 & s && (e = this(e)), 8 & s)) return e;
      if ("object" == typeof e && e) {
        if (4 & s && e.__esModule) return e;
        if (16 & s && "function" == typeof e.then) return e;
      }
      var c = Object.create(null);
      o.r(c);
      var r = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var d = 2 & s && e; "object" == typeof d && !~a.indexOf(d); d = n(d))
        Object.getOwnPropertyNames(d).forEach((a) => (r[a] = () => e[a]));
      return (r.default = () => e), o.d(c, r), c;
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
        61: "sales_russian-json",
        77: "sales_vietnamese-json",
        101: "sales_dutch-json",
        402: "libraries~a16dd2641",
        584: "sales_koreana-json",
        647: "main_czech-json",
        698: "main_dutch-json",
        727: "main_japanese-json",
        744: "libraries~0ce70989d",
        799: "main_german-json",
        819: "marketing_turkish-json",
        874: "marketing_dutch-json",
        903: "marketing_russian-json",
        1012: "sales_romanian-json",
        1043: "sales_schinese-json",
        1117: "main_french-json",
        1162: "shared_thai-json",
        1164: "sales_norwegian-json",
        1313: "shared_bulgarian-json",
        1722: "sales_czech-json",
        1805: "chunk~76b1d4b20",
        2029: "shared_sc_schinese-json",
        2120: "libraries~65c77a859",
        2136: "events",
        2268: "chunk~ba97af24b",
        2431: "shared_arabic-json",
        2443: "shared_latam-json",
        2448: "marketing_polish-json",
        2522: "logoedtior",
        2529: "pricingtool",
        2537: "shared_schinese-json",
        2581: "marketing_danish-json",
        2601: "marketing_spanish-json",
        2681: "sales_indonesian-json",
        2706: "libraries~b58ccb787",
        2767: "main_polish-json",
        2824: "marketing_german-json",
        2844: "shared_japanese-json",
        2848: "main_ukrainian-json",
        2942: "main_tchinese-json",
        2996: "chunk~0693b010b",
        3112: "shared_french-json",
        3135: "marketing_schinese-json",
        3174: "sales_spanish-json",
        3185: "main_swedish-json",
        3233: "chunk~81f8b292a",
        3252: "shared_polish-json",
        3277: "main_romanian-json",
        3313: "sales_finnish-json",
        3323: "main_danish-json",
        3359: "main_bulgarian-json",
        3453: "marketing_czech-json",
        3557: "shared_finnish-json",
        3599: "adminpromoreviewdashboard",
        3634: "sales_bulgarian-json",
        3685: "sales_german-json",
        3768: "main_finnish-json",
        3786: "libraries~5ef33371c",
        4033: "chunk~b65c73781",
        4108: "shared_norwegian-json",
        4166: "sales_thai-json",
        4171: "marketing_koreana-json",
        4189: "shared_czech-json",
        4199: "marketing_french-json",
        4238: "marketing_thai-json",
        4248: "sales_polish-json",
        4297: "shared_greek-json",
        4309: "libraries~53a792fe2",
        4447: "sales_greek-json",
        4458: "marketing_brazilian-json",
        4535: "login",
        4601: "broadcast",
        4682: "sales_latam-json",
        4722: "main_koreana-json",
        4812: "sales_brazilian-json",
        4823: "shared_romanian-json",
        4860: "main_russian-json",
        4929: "marketing_english-json",
        4935: "sdrconnections",
        4961: "sales_danish-json",
        4964: "shared_vietnamese-json",
        5117: "libraries~511d96142",
        5257: "marketing_portuguese-json",
        5414: "sales_portuguese-json",
        5438: "shared_turkish-json",
        5559: "chunk~3359e354c",
        5625: "shared_swedish-json",
        5676: "steamlearn",
        5785: "libraries~3359e354c",
        5849: "shared_portuguese-json",
        5855: "sales_swedish-json",
        5875: "chunk~53a792fe2",
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
        6608: "chunk~6682e6e75",
        6693: "sales_italian-json",
        6699: "steamdeck",
        6739: "libraries~76b1d4b20",
        6762: "sales_sc_schinese-json",
        6808: "resquemsg",
        6815: "main_english-json",
        6817: "main_spanish-json",
        6846: "marketing_vietnamese-json",
        7072: "main_indonesian-json",
        7082: "marketing_japanese-json",
        7094: "sales_japanese-json",
        7099: "libraries~b65c73781",
        7181: "sales_tchinese-json",
        7236: "main_portuguese-json",
        7241: "chunk~98cd0a490",
        7510: "chunk~414b0edad",
        7602: "shared_tchinese-json",
        7724: "sales_french-json",
        7762: "steamml",
        7781: "shared_ukrainian-json",
        7871: "marketing_greek-json",
        7890: "main_thai-json",
        7934: "sales_ukrainian-json",
        7942: "marketing_finnish-json",
        7951: "main_norwegian-json",
        7952: "sales_english-json",
        7975: "shared_english-json",
        8001: "marketing_italian-json",
        8051: "main_hungarian-json",
        8155: "main_italian-json",
        8168: "main_vietnamese-json",
        8195: "libraries~4cf17e494",
        8385: "shared_brazilian-json",
        8389: "libraries~0693b010b",
        8399: "marketing_indonesian-json",
        8754: "shared_indonesian-json",
        8767: "sales_turkish-json",
        8774: "marketing_romanian-json",
        8794: "libraries~680aad936",
        8960: "marketing_bulgarian-json",
        8974: "storeadmin",
        8993: "sales_hungarian-json",
        8994: "marketing_hungarian-json",
        9035: "contenthub",
        9062: "shared_russian-json",
        9192: "chunk~cfc0808c3",
        9431: "main_brazilian-json",
        9568: "main_greek-json",
        9584: "libraries~1940416b2",
        9603: "libraries~82d50d904",
        9663: "main_turkish-json",
        9749: "libraries~ba97af24b",
        9753: "shared_danish-json",
        9899: "marketing_latam-json",
        9903: "marketing_tchinese-json",
        9919: "marketing_sc_schinese-json",
        9980: "main_schinese-json",
      }[e] +
      ".js?contenthash=" +
      {
        61: "e4abdacf020b8fb31acb",
        77: "53df2ac51f849143f844",
        101: "269f3e2c47ac53517ef6",
        402: "9d2f8ab1aaa61a64b999",
        584: "f3d28405fd30e2bb307e",
        647: "600401d598d22e382846",
        698: "036125f628878f0e69cc",
        727: "77ab24408c785a21d0f6",
        744: "4ea3faff3d41597cd403",
        799: "b4fc7140def639009282",
        819: "b50a42ce377a87047fb8",
        874: "4e3ce49314102df0f4a3",
        903: "ca9449ca175b9bc6b966",
        1012: "380c599f1a2e06282764",
        1043: "69dcb474a8e7d99105b2",
        1117: "f0cb3e49a9676e9c5959",
        1162: "45f6eae63731957e0882",
        1164: "cbba7f62e995b41fa8ad",
        1313: "0fc9501162ac41ba333d",
        1722: "c0ec414a6d030deff568",
        1805: "a970c2b1f00308aa10f5",
        2029: "3b5dcda8c7a499cf4b87",
        2120: "e02f02063dada506965c",
        2136: "439bf541df8094236c0a",
        2268: "6214a04f8669afabe7f0",
        2431: "145183afb5a012b6f5f7",
        2443: "adca39c2d7dcf145110d",
        2448: "114487fb8ad79d93bc8c",
        2522: "cc82f2831f9c9630e437",
        2529: "df137be8312b887b3125",
        2537: "06c77171d58bee615b57",
        2581: "5d4acfbfe8d128f10750",
        2601: "566edca03484f406cbf5",
        2681: "d91ed940d4a53fd07db6",
        2706: "a69e9e43f4632f138c8f",
        2767: "7916cb37d91f7ff1ea2f",
        2824: "b05db549f9c36c29a475",
        2844: "f142b8194525689c7ec8",
        2848: "c15f7f28d409b22acdf8",
        2942: "d7280ee3c730e95d5e9d",
        2996: "c52992f0de707f5cb519",
        3112: "90786df11d3a9ea92d11",
        3135: "056e019d3370451bb38f",
        3174: "21a19b1defbe11538711",
        3185: "5a2d706da00989c6043c",
        3233: "330aebbc07274af22a66",
        3252: "57bcdee50f6a864b03fe",
        3277: "481f9123b9b58a2bfd7e",
        3313: "f6f01db9824b52f459fb",
        3323: "d0c0851b6ba4c5e8ce51",
        3359: "8fd101c603e6ed82336d",
        3453: "0aa76c397fbd91e95d87",
        3557: "8d998228becd6b9a99ee",
        3599: "e8b0081f53550e18ff74",
        3634: "626e69c32c4ce51958de",
        3685: "1e58f503ed766a93d3b3",
        3768: "91982942cb16d284e468",
        3786: "8dbf30eebdcd3f2166f9",
        4033: "3f5a8ef39b86d0812153",
        4108: "0787f74e0876776a43ca",
        4166: "d2f687e5ce5eea089f40",
        4171: "5c20e0e36380516858bb",
        4189: "d31731dc308ebf2dea43",
        4199: "0953d262d7d2cba2ca1f",
        4238: "1c6143dcf871c54f7833",
        4248: "0442859453253dfb653b",
        4297: "4870d8b701bcde24318c",
        4309: "3a67b6c4de9156577a5b",
        4447: "d7eaad6f30c37011a8db",
        4458: "6e5fffb47d12bd468bf0",
        4535: "47b75cc853c9bb4e287b",
        4601: "9677a86eb84de15ca84f",
        4682: "7d2ebbb473a6588a33e0",
        4722: "f7e4b30b1145090603f0",
        4812: "bf9987070c055ed32244",
        4823: "9ab7df5d2123bc41fb91",
        4860: "0a567c4ea9c8c5ee666e",
        4929: "90453f550424f367c751",
        4935: "5d911a60ebf73ee91077",
        4961: "f4a40521c925fadc017e",
        4964: "987415e84b91b79d4c85",
        5117: "9a8af461f2a350a04606",
        5257: "1e9a43dbf2ee53e3b4c1",
        5414: "d9a042e0a4a5fc990bea",
        5438: "8ef79085b7081a10aef2",
        5559: "e58097ce2399920708a9",
        5625: "caa36454d1f88050feb1",
        5676: "b8d350e7a707a42d4404",
        5785: "e7c52fce246dff083061",
        5849: "422bdae5a7b2f76a0cc7",
        5855: "dff5c115f67bda8f87b7",
        5875: "987af9c991114a409c63",
        5925: "ea95469f54cc32b724e7",
        5933: "c6e215363deffa6e1a84",
        5948: "0d6bf3e4af8fffd639a1",
        6007: "45ff0bb52737d9e8dfd7",
        6019: "86ae1d38d2c232eba4cb",
        6035: "2167519dc120a8f5b363",
        6087: "14fb334c38309627e8f3",
        6169: "34b3cead7035056c2ec4",
        6492: "82dd1f408cc2ab78bb6b",
        6542: "dc619454e689e27b4474",
        6608: "186a6548b05a1d5f5785",
        6693: "200f9b6a0445494e4950",
        6699: "2b2668585893837c21e0",
        6739: "f9383d3456404ab1a360",
        6762: "93d45062b7906f56e432",
        6808: "e5448ac8d1ba2d79fa07",
        6815: "edca4a2c6280959ef92d",
        6817: "db435a4b908c9f5b5778",
        6846: "86c5592107dba7d5d848",
        7072: "075ddc340994a443889b",
        7082: "0a3883c171314ac4f506",
        7094: "4503509a535a98501ac5",
        7099: "e06a248a0c6056968d76",
        7181: "de6548fd5d4f1884c3d8",
        7236: "5adc82ad843524467f8a",
        7241: "5cea451ccccd2d929507",
        7510: "16d66769d4552f4a84c7",
        7602: "30bf8a940e3b6cd93c2c",
        7724: "b1eabb0a6db911620e34",
        7762: "9d8b728250c2a1c321f5",
        7781: "102161e3136be2d6c975",
        7871: "cd2baf253e36e1257531",
        7890: "fd967edafb0f6a1e5b76",
        7934: "14b9fe76ff02de232b5f",
        7942: "80323e3c4dbb542b546a",
        7951: "a30019f81f0962ba4374",
        7952: "7b985fd9678a82a569c8",
        7975: "a3cd5d2f0611ab03edad",
        8001: "aaabd9cb62d16d3f8472",
        8051: "6790adc89ad2394de7bc",
        8155: "34f9583bf4873eddff3d",
        8168: "119b260fac13bcb2de10",
        8195: "afc1ea3c6cd4e250b3fc",
        8385: "b83fcac38730fbca2e3d",
        8389: "6d6eae62833c34112b8f",
        8399: "fc279e43fd4c1db9a44e",
        8754: "3c8f5b593df6d2449870",
        8767: "b3b25790afa8cb094572",
        8774: "3b6d945f4c2441ae680a",
        8794: "d491c17738d061a2dbdd",
        8960: "04e58e3d9562a450af9d",
        8974: "1ac6ef551fc59ae523e7",
        8993: "5142c42d524523abde59",
        8994: "2148db1be59468c22e0f",
        9035: "9b49528f8f6672d4c141",
        9062: "91c9191701b6f947c461",
        9192: "52721a5bc062a53677a2",
        9431: "66af4f3590f8f0132852",
        9568: "865453576e246f91a5a2",
        9584: "dbf32ee66244233ff80b",
        9603: "70d0f62f08165378e9de",
        9663: "f8f937f235fce5789499",
        9749: "7b9be0ea8c5b28598422",
        9753: "800d0828d363b1f77a86",
        9899: "e4e017070b15fb5c2023",
        9903: "cf62f710d3b29d88fa53",
        9919: "874525ecdd1d0ef57e63",
        9980: "e4c02f9923ab0a481285",
      }[e]),
    (o.miniCssF = (e) =>
      "css/applications/appmgmt/" +
      {
        1805: "chunk~76b1d4b20",
        2136: "events",
        2268: "chunk~ba97af24b",
        2522: "logoedtior",
        2529: "pricingtool",
        3599: "adminpromoreviewdashboard",
        4033: "chunk~b65c73781",
        4309: "libraries~53a792fe2",
        4535: "login",
        4601: "broadcast",
        4935: "sdrconnections",
        5676: "steamlearn",
        6699: "steamdeck",
        6808: "resquemsg",
        7762: "steamml",
        8974: "storeadmin",
        9192: "chunk~cfc0808c3",
      }[e] +
      ".css?contenthash=" +
      {
        1805: "fa7d547654a0f408af2c",
        2136: "80f8683ae7f85df71a98",
        2268: "e19d6dbf0f6ae66012be",
        2522: "3a52d13476b669588bd8",
        2529: "074d37fe9cc54cb857a5",
        3599: "37883bb918433d9a98b6",
        4033: "69a82b046c15b044e9ea",
        4309: "f38ba98b44af4fc0288a",
        4535: "be2d8061908540c37d56",
        4601: "da717847514be2f17d39",
        4935: "59890b790fbf2cc93831",
        5676: "d0287df8605cf5ca6ca3",
        6699: "3a19f92cb04178af6cdb",
        6808: "92299797c12c2782de13",
        7762: "d61f93a707d7e363fa5a",
        8974: "825b270dd8c8d93d8925",
        9192: "2960968d3708947d3c90",
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
    (s = {}),
    (c = "appmgmt-storeadmin:"),
    (o.l = (e, a, n, r) => {
      if (s[e]) s[e].push(a);
      else {
        var d, i;
        if (void 0 !== n)
          for (
            var b = document.getElementsByTagName("script"), t = 0;
            t < b.length;
            t++
          ) {
            var f = b[t];
            if (
              f.getAttribute("src") == e ||
              f.getAttribute("data-webpack") == c + n
            ) {
              d = f;
              break;
            }
          }
        d ||
          ((i = !0),
          ((d = document.createElement("script")).charset = "utf-8"),
          (d.timeout = 120),
          o.nc && d.setAttribute("nonce", o.nc),
          d.setAttribute("data-webpack", c + n),
          (d.src = e)),
          (s[e] = [a]);
        var l = (a, n) => {
            (d.onerror = d.onload = null), clearTimeout(h);
            var c = s[e];
            if (
              (delete s[e],
              d.parentNode && d.parentNode.removeChild(d),
              c && c.forEach((e) => e(n)),
              a)
            )
              return a(n);
          },
          h = setTimeout(
            l.bind(null, void 0, { type: "timeout", target: d }),
            12e4,
          );
        (d.onerror = l.bind(null, d.onerror)),
          (d.onload = l.bind(null, d.onload)),
          i && document.head.appendChild(d);
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
          "Automatic publicPath is not supported in this browser",
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (o.p = e + "../../../");
    })(),
    (r = (e) =>
      new Promise((a, n) => {
        var s = o.miniCssF(e),
          c = o.p + s;
        if (
          ((e, a) => {
            for (
              var n = document.getElementsByTagName("link"), s = 0;
              s < n.length;
              s++
            ) {
              var c =
                (d = n[s]).getAttribute("data-href") || d.getAttribute("href");
              if ("stylesheet" === d.rel && (c === e || c === a)) return d;
            }
            var r = document.getElementsByTagName("style");
            for (s = 0; s < r.length; s++) {
              var d;
              if ((c = (d = r[s]).getAttribute("data-href")) === e || c === a)
                return d;
            }
          })(s, c)
        )
          return a();
        ((e, a, n, s) => {
          var c = document.createElement("link");
          (c.rel = "stylesheet"),
            (c.type = "text/css"),
            (c.onerror = c.onload =
              (r) => {
                if (((c.onerror = c.onload = null), "load" === r.type)) n();
                else {
                  var d = r && ("load" === r.type ? "missing" : r.type),
                    i = (r && r.target && r.target.href) || a,
                    b = new Error(
                      "Loading CSS chunk " + e + " failed.\n(" + i + ")",
                    );
                  (b.code = "CSS_CHUNK_LOAD_FAILED"),
                    (b.type = d),
                    (b.request = i),
                    c.parentNode.removeChild(c),
                    s(b);
                }
              }),
            (c.href = a),
            document.head.appendChild(c);
        })(e, c, a, n);
      })),
    (d = { 6700: 0 }),
    (o.f.miniCss = (e, a) => {
      d[e]
        ? a.push(d[e])
        : 0 !== d[e] &&
          {
            1805: 1,
            2136: 1,
            2268: 1,
            2522: 1,
            2529: 1,
            3599: 1,
            4033: 1,
            4309: 1,
            4535: 1,
            4601: 1,
            4935: 1,
            5676: 1,
            6699: 1,
            6808: 1,
            7762: 1,
            8974: 1,
            9192: 1,
          }[e] &&
          a.push(
            (d[e] = r(e).then(
              () => {
                d[e] = 0;
              },
              (a) => {
                throw (delete d[e], a);
              },
            )),
          );
    }),
    (() => {
      var e = { 6700: 0 };
      (o.f.j = (a, n) => {
        var s = o.o(e, a) ? e[a] : void 0;
        if (0 !== s)
          if (s) n.push(s[2]);
          else if (/^(6700|9192)$/.test(a)) e[a] = 0;
          else {
            var c = new Promise((n, c) => (s = e[a] = [n, c]));
            n.push((s[2] = c));
            var r = o.p + o.u(a),
              d = new Error();
            o.l(
              r,
              (n) => {
                if (o.o(e, a) && (0 !== (s = e[a]) && (e[a] = void 0), s)) {
                  var c = n && ("load" === n.type ? "missing" : n.type),
                    r = n && n.target && n.target.src;
                  (d.message =
                    "Loading chunk " + a + " failed.\n(" + c + ": " + r + ")"),
                    (d.name = "ChunkLoadError"),
                    (d.type = c),
                    (d.request = r),
                    s[1](d);
                }
              },
              "chunk-" + a,
              a,
            );
          }
      }),
        (o.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var s,
            c,
            [r, d, i] = n,
            b = 0;
          if (r.some((a) => 0 !== e[a])) {
            for (s in d) o.o(d, s) && (o.m[s] = d[s]);
            if (i) var t = i(o);
          }
          for (a && a(n); b < r.length; b++)
            (c = r[b]), o.o(e, c) && e[c] && e[c][0](), (e[c] = 0);
          return o.O(t);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
