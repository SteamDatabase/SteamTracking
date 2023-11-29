/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8531880";
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
    o = {};
  function f(e) {
    var a = o[e];
    if (void 0 !== a) return a.exports;
    var n = (o[e] = { id: e, loaded: !1, exports: {} });
    return i[e].call(n.exports, n, n.exports, f), (n.loaded = !0), n.exports;
  }
  (f.m = i),
    (e = []),
    (f.O = (a, n, s, c) => {
      if (!n) {
        var r = 1 / 0;
        for (t = 0; t < e.length; t++) {
          for (var [n, s, c] = e[t], d = !0, i = 0; i < n.length; i++)
            (!1 & c || r >= c) && Object.keys(f.O).every((e) => f.O[e](n[i]))
              ? n.splice(i--, 1)
              : ((d = !1), c < r && (r = c));
          if (d) {
            e.splice(t--, 1);
            var o = s();
            void 0 !== o && (a = o);
          }
        }
        return a;
      }
      c = c || 0;
      for (var t = e.length; t > 0 && e[t - 1][2] > c; t--) e[t] = e[t - 1];
      e[t] = [n, s, c];
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
      var c = Object.create(null);
      f.r(c);
      var r = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var d = 2 & s && e; "object" == typeof d && !~a.indexOf(d); d = n(d))
        Object.getOwnPropertyNames(d).forEach((a) => (r[a] = () => e[a]));
      return (r.default = () => e), f.d(c, r), c;
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
        61: "de407b2fabd6cb647c7e",
        77: "0df27db425d52eabb8e9",
        101: "2261adc58669a73a53b1",
        402: "a07b350b6b47714048b1",
        584: "8c34dee954c67e609d00",
        647: "7d70ca4977996de7bfd3",
        698: "985ed9b8bce3870a3614",
        727: "0182023cf3f5313e8bd6",
        744: "4ea3faff3d41597cd403",
        799: "d24650e56e0073fdb879",
        819: "b50a42ce377a87047fb8",
        874: "4e3ce49314102df0f4a3",
        903: "ca9449ca175b9bc6b966",
        1012: "cc67e5c274167185b5fc",
        1043: "ea30f62354acff8d75ea",
        1117: "a73504ab03abfb5a1873",
        1162: "e860d1ade6df1e30648c",
        1164: "84d8f18c96263cb92448",
        1313: "935054ed9e8fdf2b9304",
        1722: "08ae551c30c5bddcff3f",
        1805: "e82be6b096e56fea2e6d",
        2029: "a212dc179239241192fc",
        2120: "e02f02063dada506965c",
        2136: "e0cec94a185c2d6ef5aa",
        2268: "6214a04f8669afabe7f0",
        2431: "145183afb5a012b6f5f7",
        2443: "978af0fceebe589ccc20",
        2448: "114487fb8ad79d93bc8c",
        2522: "cc82f2831f9c9630e437",
        2529: "df137be8312b887b3125",
        2537: "f153ffd4eb5ed4606462",
        2581: "5d4acfbfe8d128f10750",
        2601: "566edca03484f406cbf5",
        2681: "4e97ad391544f068a9b2",
        2706: "a69e9e43f4632f138c8f",
        2767: "3b46fd589bce5ccd5b6b",
        2824: "b05db549f9c36c29a475",
        2844: "021f206f6e9662cd3192",
        2848: "578b130c5a3289e6cbb2",
        2942: "9154c28c030f265db7ac",
        2996: "c52992f0de707f5cb519",
        3112: "1a11b061337cd7332193",
        3135: "056e019d3370451bb38f",
        3174: "f7555390260ac7f0834b",
        3185: "5d3f7cbeaf8d97fabcda",
        3233: "330aebbc07274af22a66",
        3252: "71ad1d297805b6747b70",
        3277: "f9ed6a8316ba5edcb3d4",
        3313: "413a91100349e2cd2a02",
        3323: "dba5b06e72077f9d2454",
        3359: "7ed976c388b48ecb0746",
        3453: "0aa76c397fbd91e95d87",
        3557: "3dff1260bcefc4b6c846",
        3599: "e8b0081f53550e18ff74",
        3634: "094efe3ccfdca97011ec",
        3685: "1ba031335c30c53dc6db",
        3768: "3d75adbefaaf59757a3d",
        3786: "8dbf30eebdcd3f2166f9",
        4033: "9cdbf2f239a0defc2262",
        4108: "4a86289e64bfbcab2e2b",
        4166: "64aae7ac0902caf4a76b",
        4171: "5c20e0e36380516858bb",
        4189: "0f80345b838b894629e4",
        4199: "0953d262d7d2cba2ca1f",
        4238: "1c6143dcf871c54f7833",
        4248: "cf5b9cd51e97c6a08251",
        4297: "21571490bc5587865b7e",
        4309: "3a67b6c4de9156577a5b",
        4447: "608bb5f12bad9dcc1e28",
        4458: "6e5fffb47d12bd468bf0",
        4535: "47b75cc853c9bb4e287b",
        4601: "ddf67a2fd1128342056c",
        4682: "9e7c6ef4f85e28b33893",
        4722: "435bfcf19c4b3bf63789",
        4812: "30f6ddfd339250151026",
        4823: "04f3dd4a66fd74ea79fe",
        4860: "c395daf4e7aa0a6dc417",
        4929: "90453f550424f367c751",
        4935: "5d911a60ebf73ee91077",
        4961: "2862758c3764f67ff89b",
        4964: "39558d2273c5fdbf56f8",
        5117: "ef710975d9b95d33a5a6",
        5257: "1e9a43dbf2ee53e3b4c1",
        5414: "6275b0c233004ff638b8",
        5438: "fc539b7a45baf938f48f",
        5559: "e58097ce2399920708a9",
        5625: "e2faa24a084555cc8529",
        5676: "7eca08b06e2f5b8716c4",
        5785: "e7c52fce246dff083061",
        5849: "93ba019caea74d034e9f",
        5855: "b441cb201af998cc8cd2",
        5875: "db7a087c131a0400c1d5",
        5925: "b3d89105d3a8575f8649",
        5933: "914efc2418be2e186020",
        5948: "ebfd6788458f33246b9b",
        6007: "cdc35607187d29f63d30",
        6019: "86ae1d38d2c232eba4cb",
        6035: "2167519dc120a8f5b363",
        6087: "6b80f36882117b3a6c2b",
        6169: "34b3cead7035056c2ec4",
        6492: "592acbc673f56d0a3949",
        6542: "1c303a8af74e0f6bcaaa",
        6608: "186a6548b05a1d5f5785",
        6693: "ac32cec26ef8389614dd",
        6699: "2b2668585893837c21e0",
        6739: "f9383d3456404ab1a360",
        6762: "f1365e47a0cd0fc007ab",
        6808: "e5448ac8d1ba2d79fa07",
        6815: "ae3af6fe0fa18d64c77b",
        6817: "4518a68ed253539ad967",
        6846: "91ce799563e659d38188",
        7072: "7963bbd31d0c18fac289",
        7082: "0a3883c171314ac4f506",
        7094: "2988bcfd80817150b836",
        7099: "afd8d9f306d1269b3194",
        7181: "d99a0d91e8c17d102952",
        7236: "70bd90e86e749b03ae08",
        7241: "5cea451ccccd2d929507",
        7510: "16d66769d4552f4a84c7",
        7602: "7ed610eab317de2b2157",
        7724: "bdec0f87636e963ca654",
        7762: "9d8b728250c2a1c321f5",
        7781: "abb5195065aa9f8ac6a0",
        7871: "ab7a7f0279231f88ba50",
        7890: "495e2e5b63639c8d8439",
        7934: "9e594c33646cc5a4f5f6",
        7942: "80323e3c4dbb542b546a",
        7951: "50f8143939a42601ce79",
        7952: "789f1fad54a6e56cee32",
        7975: "afdeb1acebfd1fb07bb8",
        8001: "aaabd9cb62d16d3f8472",
        8051: "b508e5b3442e0e789be5",
        8155: "5b5a22f585393757815d",
        8168: "9a23fa9f374bce48cfc2",
        8195: "afc1ea3c6cd4e250b3fc",
        8385: "cf462ce76d222f7efcfd",
        8389: "86c80423ceec3cd92230",
        8399: "fc279e43fd4c1db9a44e",
        8754: "74ef53375f71ca04951b",
        8767: "b54352d810d4604e5ef8",
        8774: "3b6d945f4c2441ae680a",
        8794: "d491c17738d061a2dbdd",
        8960: "04e58e3d9562a450af9d",
        8974: "07373c93ec6f1e80d433",
        8993: "13ca58f2c90093b0c4de",
        8994: "2148db1be59468c22e0f",
        9035: "9b49528f8f6672d4c141",
        9062: "a7ac9835916c6a6c0cad",
        9192: "52721a5bc062a53677a2",
        9431: "13375288c7f84fdd4385",
        9568: "d073298db537c62e2314",
        9584: "dbf32ee66244233ff80b",
        9603: "7d7edece1b28c9273a22",
        9663: "c42f186cf1a6578298b6",
        9749: "7b9be0ea8c5b28598422",
        9753: "ead9d93b50dc02794d8c",
        9899: "e4e017070b15fb5c2023",
        9903: "cf62f710d3b29d88fa53",
        9919: "874525ecdd1d0ef57e63",
        9980: "400b7d2bb5b5ac71559b",
      }[e]),
    (f.miniCssF = (e) =>
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
        1805: "0c55cd1d56debc173e6a",
        2136: "80f8683ae7f85df71a98",
        2268: "e19d6dbf0f6ae66012be",
        2522: "3a52d13476b669588bd8",
        2529: "074d37fe9cc54cb857a5",
        3599: "37883bb918433d9a98b6",
        4033: "44034a55a468d36e5f50",
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
    (c = "appmgmt-storeadmin:"),
    (f.l = (e, a, n, r) => {
      if (s[e]) s[e].push(a);
      else {
        var d, i;
        if (void 0 !== n)
          for (
            var o = document.getElementsByTagName("script"), t = 0;
            t < o.length;
            t++
          ) {
            var b = o[t];
            if (
              b.getAttribute("src") == e ||
              b.getAttribute("data-webpack") == c + n
            ) {
              d = b;
              break;
            }
          }
        d ||
          ((i = !0),
          ((d = document.createElement("script")).charset = "utf-8"),
          (d.timeout = 120),
          f.nc && d.setAttribute("nonce", f.nc),
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
    (f.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (f.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      var e;
      f.g.importScripts && (e = f.g.location + "");
      var a = f.g.document;
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
        (f.p = e + "../../../");
    })(),
    (r = (e) =>
      new Promise((a, n) => {
        var s = f.miniCssF(e),
          c = f.p + s;
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
                    o = new Error(
                      "Loading CSS chunk " + e + " failed.\n(" + i + ")",
                    );
                  (o.code = "CSS_CHUNK_LOAD_FAILED"),
                    (o.type = d),
                    (o.request = i),
                    c.parentNode.removeChild(c),
                    s(o);
                }
              }),
            (c.href = a),
            document.head.appendChild(c);
        })(e, c, a, n);
      })),
    (d = { 6700: 0 }),
    (f.f.miniCss = (e, a) => {
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
      (f.f.j = (a, n) => {
        var s = f.o(e, a) ? e[a] : void 0;
        if (0 !== s)
          if (s) n.push(s[2]);
          else if (/^(6700|9192)$/.test(a)) e[a] = 0;
          else {
            var c = new Promise((n, c) => (s = e[a] = [n, c]));
            n.push((s[2] = c));
            var r = f.p + f.u(a),
              d = new Error();
            f.l(
              r,
              (n) => {
                if (f.o(e, a) && (0 !== (s = e[a]) && (e[a] = void 0), s)) {
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
        (f.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var s,
            c,
            [r, d, i] = n,
            o = 0;
          if (r.some((a) => 0 !== e[a])) {
            for (s in d) f.o(d, s) && (f.m[s] = d[s]);
            if (i) var t = i(f);
          }
          for (a && a(n); o < r.length; o++)
            (c = r[o]), f.o(e, c) && e[c] && e[c][0](), (e[c] = 0);
          return f.O(t);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
