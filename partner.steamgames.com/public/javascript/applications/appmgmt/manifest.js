/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8576837";
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
    f = {};
  function o(e) {
    var a = f[e];
    if (void 0 !== a) return a.exports;
    var n = (f[e] = { id: e, loaded: !1, exports: {} });
    return i[e].call(n.exports, n, n.exports, o), (n.loaded = !0), n.exports;
  }
  (o.m = i),
    (e = []),
    (o.O = (a, n, s, c) => {
      if (!n) {
        var r = 1 / 0;
        for (b = 0; b < e.length; b++) {
          for (var [n, s, c] = e[b], d = !0, i = 0; i < n.length; i++)
            (!1 & c || r >= c) && Object.keys(o.O).every((e) => o.O[e](n[i]))
              ? n.splice(i--, 1)
              : ((d = !1), c < r && (r = c));
          if (d) {
            e.splice(b--, 1);
            var f = s();
            void 0 !== f && (a = f);
          }
        }
        return a;
      }
      c = c || 0;
      for (var b = e.length; b > 0 && e[b - 1][2] > c; b--) e[b] = e[b - 1];
      e[b] = [n, s, c];
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
        61: "1984d76aa576938dd470",
        77: "36e441e5a33a753fcb9c",
        101: "c59982fd2e8785987a1d",
        402: "9d2f8ab1aaa61a64b999",
        584: "d750670935793fd313f1",
        647: "35b5442c8e0dc848c532",
        698: "d6711fa0592922a4d9e4",
        727: "f777f1faa0f5ea551a98",
        744: "4ea3faff3d41597cd403",
        799: "ff3788383623b7865776",
        819: "b50a42ce377a87047fb8",
        874: "4e3ce49314102df0f4a3",
        903: "ca9449ca175b9bc6b966",
        1012: "801478cfa59864e9880e",
        1043: "6cb7302cc091540bf8aa",
        1117: "7f61b85052e709689410",
        1162: "e2fc5965f8f43ad493fe",
        1164: "38fe6da18e2291d3ac9c",
        1313: "6edc349dc90b601e67c1",
        1722: "b4ce638320909b4ad54a",
        1805: "809f9d1728f9593ca141",
        2029: "3b5dcda8c7a499cf4b87",
        2120: "e02f02063dada506965c",
        2136: "e8aa0b9cfdd95303fc08",
        2268: "36a42f84d7d21faee1ed",
        2431: "145183afb5a012b6f5f7",
        2443: "d75b2daf6a5ae62e784b",
        2448: "114487fb8ad79d93bc8c",
        2522: "cc82f2831f9c9630e437",
        2529: "df137be8312b887b3125",
        2537: "b87be4b187b53b3f0ce5",
        2581: "5d4acfbfe8d128f10750",
        2601: "566edca03484f406cbf5",
        2681: "6bdc25e27ce8001ff3b7",
        2706: "a69e9e43f4632f138c8f",
        2767: "3cdc40fc2ba64e4318ee",
        2824: "b05db549f9c36c29a475",
        2844: "7ace5f4f1366a8b81157",
        2848: "5405f04c4d17807f2cbe",
        2942: "44d31357215fab2b9713",
        2996: "c52992f0de707f5cb519",
        3112: "6de9a4335b45fda6f5fd",
        3135: "056e019d3370451bb38f",
        3174: "2733ce1709318d14e67c",
        3185: "8eda8a940bcac8e87bd5",
        3233: "330aebbc07274af22a66",
        3252: "3bb12f159d3cf017aeee",
        3277: "a4d09c625faf34901cac",
        3313: "b744fc81ec973e527ae0",
        3323: "a299c776aaad083688da",
        3359: "36ac6fd7a2c33a1c4955",
        3453: "0aa76c397fbd91e95d87",
        3557: "62d2ae8a601a6475e0b7",
        3599: "e8b0081f53550e18ff74",
        3634: "a249aa69a1a02741f4c8",
        3685: "3f3703d8b1af979f6016",
        3768: "be4d21e48a0c89621218",
        3786: "8dbf30eebdcd3f2166f9",
        4033: "70523c8c19c748f1fd16",
        4108: "8c42455ff4b36e825829",
        4166: "472ad8b925f627949832",
        4171: "5c20e0e36380516858bb",
        4189: "0df86905fb33c4753830",
        4199: "0953d262d7d2cba2ca1f",
        4238: "1c6143dcf871c54f7833",
        4248: "3e8268e8ae52f7c65c3d",
        4297: "037f64472c3c77f3b85b",
        4309: "3a67b6c4de9156577a5b",
        4447: "71789c5bd686fbdc5004",
        4458: "6e5fffb47d12bd468bf0",
        4535: "47b75cc853c9bb4e287b",
        4601: "9677a86eb84de15ca84f",
        4682: "bbaa9045d650162a1983",
        4722: "d24dd89fec2cec8a7986",
        4812: "279877db8300924a0e2e",
        4823: "b31c6be95de4cb8890e9",
        4860: "552a2e6b2b10f0ea28fb",
        4929: "90453f550424f367c751",
        4935: "5d911a60ebf73ee91077",
        4961: "0a6f23a918e0c1ba7d2a",
        4964: "5d289f3b0a797bbcf20e",
        5117: "3966a05f503c1965d639",
        5257: "1e9a43dbf2ee53e3b4c1",
        5414: "0af4d4aacf25229fe054",
        5438: "968ebeacf237a898d0f6",
        5559: "e58097ce2399920708a9",
        5625: "f8c0a6c44da7700d51d3",
        5676: "a97fde026228a41cfb89",
        5785: "e7c52fce246dff083061",
        5849: "1fd897bfe69d113b212b",
        5855: "d5b84056a30ef6f43313",
        5875: "987af9c991114a409c63",
        5925: "754bf6ee5306a343db22",
        5933: "a0bd9296e2ba101a503b",
        5948: "0a880c3003ffb5ed0333",
        6007: "81e47d80e3591a7825d4",
        6019: "86ae1d38d2c232eba4cb",
        6035: "2167519dc120a8f5b363",
        6087: "c6d93113004105220fa7",
        6169: "34b3cead7035056c2ec4",
        6492: "60664d02d5b3755e71e3",
        6542: "86f7e4f7382a871c6fae",
        6608: "186a6548b05a1d5f5785",
        6693: "8273af4327d4846dc1f7",
        6699: "2b2668585893837c21e0",
        6739: "f9383d3456404ab1a360",
        6762: "a707f6d85fa7076725dd",
        6808: "e5448ac8d1ba2d79fa07",
        6815: "cfa5c2c9b34e06ce58dd",
        6817: "9b1bd62b7f718988fb62",
        6846: "86c5592107dba7d5d848",
        7072: "1146ff9ed531f9998daf",
        7082: "0a3883c171314ac4f506",
        7094: "255219d230601f542ba8",
        7099: "ef1bff6826699ad303b7",
        7181: "749b9827f0069c0faff1",
        7236: "437c6bf70a60b1f6be90",
        7241: "5cea451ccccd2d929507",
        7510: "16d66769d4552f4a84c7",
        7602: "dbba302711cd8a4d2dd0",
        7724: "002451d2b70dadae024b",
        7762: "9d8b728250c2a1c321f5",
        7781: "6593ac8db1420429cec6",
        7871: "cd2baf253e36e1257531",
        7890: "908e01484500a734e4a9",
        7934: "3f0844ce5e346dd9d781",
        7942: "80323e3c4dbb542b546a",
        7951: "53bc50c7cb9aa7f94901",
        7952: "21a721ad0c5c7224a769",
        7975: "0f54bddbdd6cb13fdadb",
        8001: "aaabd9cb62d16d3f8472",
        8051: "d9deee155427bea36334",
        8155: "935c9bddc7f93f6cc3e8",
        8168: "75824a4b3b45e43b9a68",
        8195: "afc1ea3c6cd4e250b3fc",
        8385: "f7847a63f05ce4ba32da",
        8389: "6d6eae62833c34112b8f",
        8399: "fc279e43fd4c1db9a44e",
        8754: "ba214bc1dd3eb2863001",
        8767: "ae7a592ae49d567a4b45",
        8774: "3b6d945f4c2441ae680a",
        8794: "d491c17738d061a2dbdd",
        8960: "04e58e3d9562a450af9d",
        8974: "1ac6ef551fc59ae523e7",
        8993: "dfefad927a776ed0709e",
        8994: "2148db1be59468c22e0f",
        9035: "9b49528f8f6672d4c141",
        9062: "9effbb8d901e2f6ad951",
        9192: "52721a5bc062a53677a2",
        9431: "81fefbfa15ef34621196",
        9568: "65853b813c07847f1cf9",
        9584: "dbf32ee66244233ff80b",
        9603: "58c81dec9f0a85bf82c5",
        9663: "d76c4e075764d05256fb",
        9749: "7b9be0ea8c5b28598422",
        9753: "a12aa4087d34ac2436f4",
        9899: "e4e017070b15fb5c2023",
        9903: "cf62f710d3b29d88fa53",
        9919: "874525ecdd1d0ef57e63",
        9980: "92e75a2c35ca93b6fac2",
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
        1805: "ed4c9c6f92e3ebb946b0",
        2136: "80f8683ae7f85df71a98",
        2268: "e19d6dbf0f6ae66012be",
        2522: "3a52d13476b669588bd8",
        2529: "074d37fe9cc54cb857a5",
        3599: "37883bb918433d9a98b6",
        4033: "499c3b7ee2189aa46380",
        4309: "f38ba98b44af4fc0288a",
        4535: "be2d8061908540c37d56",
        4601: "da717847514be2f17d39",
        4935: "59890b790fbf2cc93831",
        5676: "9f7d4d99577c3316bc8d",
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
            var f = document.getElementsByTagName("script"), b = 0;
            b < f.length;
            b++
          ) {
            var t = f[b];
            if (
              t.getAttribute("src") == e ||
              t.getAttribute("data-webpack") == c + n
            ) {
              d = t;
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
                    f = new Error(
                      "Loading CSS chunk " + e + " failed.\n(" + i + ")",
                    );
                  (f.code = "CSS_CHUNK_LOAD_FAILED"),
                    (f.type = d),
                    (f.request = i),
                    c.parentNode.removeChild(c),
                    s(f);
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
            f = 0;
          if (r.some((a) => 0 !== e[a])) {
            for (s in d) o.o(d, s) && (o.m[s] = d[s]);
            if (i) var b = i(o);
          }
          for (a && a(n); f < r.length; f++)
            (c = r[f]), o.o(e, c) && e[c] && e[c][0](), (e[c] = 0);
          return o.O(b);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
