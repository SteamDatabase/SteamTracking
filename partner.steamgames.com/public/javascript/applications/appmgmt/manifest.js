/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8682201";
(() => {
  "use strict";
  var e,
    a,
    n,
    s,
    d,
    r = {},
    c = {};
  function f(e) {
    var a = c[e];
    if (void 0 !== a) return a.exports;
    var n = (c[e] = { id: e, loaded: !1, exports: {} });
    return r[e].call(n.exports, n, n.exports, f), (n.loaded = !0), n.exports;
  }
  (f.m = r),
    (e = []),
    (f.O = (a, n, s, d) => {
      if (!n) {
        var r = 1 / 0;
        for (o = 0; o < e.length; o++) {
          for (var [n, s, d] = e[o], c = !0, i = 0; i < n.length; i++)
            (!1 & d || r >= d) && Object.keys(f.O).every((e) => f.O[e](n[i]))
              ? n.splice(i--, 1)
              : ((c = !1), d < r && (r = d));
          if (c) {
            e.splice(o--, 1);
            var b = s();
            void 0 !== b && (a = b);
          }
        }
        return a;
      }
      d = d || 0;
      for (var o = e.length; o > 0 && e[o - 1][2] > d; o--) e[o] = e[o - 1];
      e[o] = [n, s, d];
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
      var r = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var c = 2 & s && e; "object" == typeof c && !~a.indexOf(c); c = n(c))
        Object.getOwnPropertyNames(c).forEach((a) => (r[a] = () => e[a]));
      return (r.default = () => e), f.d(d, r), d;
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
        3863: "publisherdashboard",
        4033: "chunk~b65c73781",
        4103: "navevents",
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
        61: "296a5d23ed275e99f642",
        77: "5b8568a6e13d81f902f5",
        101: "f70e5b5db09cfb982542",
        402: "91b269c6d1e69aa459ac",
        584: "e0ce3de37d567b2b917a",
        647: "e322ea0fad4c41b8a96c",
        698: "4d1d48aff975e5604151",
        727: "1d2788ee2bdec88fcf58",
        744: "b2eb126703f9fe6065d1",
        799: "627c17822bef469509d2",
        819: "c80e7a014bbe4800f228",
        874: "cf075a882eb39895aee0",
        903: "413d3413d8b122365716",
        1012: "cd34b9e69ca63cd859f6",
        1043: "67358837711bdb3e33f1",
        1117: "6a374e7ac88e5f9cbe9e",
        1162: "731fd3823dd63a324052",
        1164: "a48d9240c4c95529fe49",
        1313: "fed4c952d2eb1dfdd840",
        1722: "a09a5952d109985c9106",
        1805: "60d5430f58a4b6abcd35",
        2029: "7f4e3c73174298905e7d",
        2120: "8c4eb14d65368d9c0085",
        2136: "73c53c2194060a822aff",
        2268: "d4360afa9c6370f2f5f0",
        2431: "de41d0131bbeada53419",
        2443: "937dc2597b3544f83a48",
        2448: "3b2cfb70690b1de6b72d",
        2522: "5951fbedb21d2e239d97",
        2529: "20136c133daebe95f2ba",
        2537: "5cbfbdd3f71f93e5ce09",
        2581: "b673b4cd50e81f8d63d0",
        2601: "2f98aa7418d3ae52fce2",
        2681: "fadf7f88b3029182b517",
        2706: "c26bab871ede7f835c37",
        2767: "c8a6791bdd3e9c77519f",
        2824: "52af124ef23ad7cc60cb",
        2844: "88cb68af86c1026f4c0d",
        2848: "824d946b687d00e076f9",
        2942: "b7cca0fe2a95c7308388",
        2996: "ae85605a46456b417ce9",
        3112: "1c43252a5f51e763181a",
        3135: "b61b04b21d500e657a51",
        3174: "d7319e43c1cf6fa93a69",
        3185: "4bb9397b1e2d0c9a9f9a",
        3233: "194131c7ce52d7965a51",
        3252: "9f784589aeda0ae61df2",
        3277: "b750e00e564abffd4449",
        3313: "75916691cd50a5ee904a",
        3323: "2c93562caab2266f52b3",
        3359: "b04020aac4da6882be1a",
        3453: "e32038e79163bfbd5fc6",
        3557: "f982993e4a8b27a055c0",
        3599: "bd509959d3955d3fa34b",
        3634: "2a8750ed26d05667e620",
        3685: "417adc7a0da962b77143",
        3768: "6cf982a80147fcf0f19f",
        3786: "024e990ab7086cfdf0a6",
        3863: "adbd37af91e771119ca1",
        4033: "34349e76977fc80febf6",
        4103: "2b944239f25176d4c374",
        4108: "c772bd32731b75370392",
        4166: "104c6858278065c52533",
        4171: "d1fca05cd67000b34ad7",
        4189: "3f683770f97ff12748d4",
        4199: "91ee30254a2799482461",
        4238: "768f86a0e0273ac2ec0a",
        4248: "a86abc4f1cf6d2ee6dcf",
        4297: "e776ac0e1bf87e78abc5",
        4309: "7d8e775b5b935bed714f",
        4447: "950d88f1ec76d6e334a2",
        4458: "dc9c9447c67ee94c3c55",
        4535: "de99d324f7d8ec873e0c",
        4601: "46b4edcce62b2106cfce",
        4682: "a3cc60a12d95e62911e7",
        4722: "86558d338a67e134bffb",
        4812: "4eda14403a7d9fbc8737",
        4823: "a5a476e21dc8c34d2b4b",
        4860: "746eb07e5a04b7fafb12",
        4929: "c78c2dd194b26b1337a5",
        4935: "d8495d7e508fc573c6a2",
        4961: "b63cd8a980584ef7640f",
        4964: "bc8702e7ba5558d57d96",
        5117: "26a21b5713e9b4a9db71",
        5257: "6a86fec6f8a660c48760",
        5414: "ff7f460141f91212cdfb",
        5438: "d66c39d1bd095244e25a",
        5559: "8c7c7884da3b98e1336b",
        5625: "3bfde594291f62229f10",
        5676: "23966176a6caf222a3dd",
        5785: "7d99fabbe26152b1cae4",
        5849: "c8d4b8faceb0ef5d75c5",
        5855: "fda7dfcefb7723df2d28",
        5875: "40ad2ccdeb14f57b2399",
        5925: "a0f665dd0c6e31993bfd",
        5933: "9016209be5db0b109eeb",
        5948: "9fed7c8b8a1b325344ac",
        6007: "e67d968568fb5492ac44",
        6019: "9aa85ed989e74791945e",
        6035: "0e1b7105d3c6a6a00a16",
        6087: "681f66a8dfa381bd4d02",
        6169: "15df7b5ced1f9541490a",
        6492: "1411d2ffa7a0e3c278ec",
        6542: "eaca37c64f2506234ee8",
        6608: "4d323dfabec3d007616f",
        6693: "60444b25443b1d303b1d",
        6699: "08af4a66e4d1adb91717",
        6739: "7d91f081f36a966508cd",
        6762: "ecff8691b44833ac7359",
        6808: "7cdeca7a12c8aef886a4",
        6815: "cd7058384656588792e4",
        6817: "8f77568dc91a5b3ee210",
        6846: "72742eda0e0f9dc49c87",
        7072: "715bd3bccf9d7011f6b1",
        7082: "ef551ec630dced60949c",
        7094: "2505154bdb5c77561ee7",
        7099: "07a366a7522e138265e2",
        7181: "364396e7717d7935a693",
        7236: "809c36fa4c1d95f9b4f5",
        7241: "a1bbcf19076be40c4428",
        7510: "4b40a5a33307383457af",
        7602: "74b6747dace9acfba39a",
        7724: "8c6f2a95b923f88b331b",
        7762: "bdf91f8276414b5d9ed4",
        7781: "4399821e4548c0b10282",
        7871: "29de9d263c1c86ec665a",
        7890: "5672b8c283324e8b71bf",
        7934: "771264eb73f5070297f4",
        7942: "558ea6ab2af782489dc3",
        7951: "a878199b69f86ec733f9",
        7952: "2c781fab6cc8a0871941",
        7975: "28d34c23ec3b16657547",
        8001: "a978fccb5960b471e36d",
        8051: "40d6eabcdcf6ef19307d",
        8155: "3d3762b596db5d386cf6",
        8168: "8392a7223e59f10f4b18",
        8195: "f183f1ceb129e8d18b38",
        8385: "5abc3fe0fc6ccef78acf",
        8389: "5f53dd2de607a092a4bf",
        8399: "94e2aad1eb53066e3f09",
        8754: "f4d5691a9fb835d65055",
        8767: "2f96c5a80a4927665b04",
        8774: "c16c117655edcfc1ef37",
        8794: "fc7e464223c7393be992",
        8960: "4612004cf9448b6e2af8",
        8974: "2213c127fb23663c903c",
        8993: "509110d6359585434f24",
        8994: "ad169362c6382f592c1f",
        9035: "7bd25fea5c8d91f5f1a6",
        9062: "e73ad0fabdfe2165a828",
        9192: "6bf013004a85f395b907",
        9431: "3cbd621a81026ba92802",
        9568: "bc259f9a0a9587ba9d4b",
        9584: "ccb37a2660d07b601b3a",
        9603: "59c90798918059ec7642",
        9663: "39ab27b0131f4c32e7f3",
        9749: "02ed46325afdd6d0ffee",
        9753: "fee3cd2038f5d4f05595",
        9899: "455c3cd964cb5508f466",
        9903: "ebd1041c9df508dc39bf",
        9919: "d21ec559578b5ffeac9c",
        9980: "78ea43fc7a2cb7aa34f4",
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
        3863: "publisherdashboard",
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
        1805: "53da8c71fbfaf2542536",
        2136: "512bb6e57ae64e651fa4",
        2268: "3e48e452313753a6601c",
        2522: "1420249bff1f8dc1a83c",
        2529: "ffa0fff11cafbd42daa7",
        3599: "37883bb918433d9a98b6",
        3863: "1e114bd1e564ba3c91dd",
        4033: "c0b6cd33360416bfd457",
        4309: "d885e31859d50e4d4824",
        4535: "be2d8061908540c37d56",
        4601: "5eccc9cc016726ad567b",
        4935: "59890b790fbf2cc93831",
        5676: "ac4b1465a8a4a410b3d2",
        6699: "5da20a0c7c430416da72",
        6808: "38c2197a4b8713ba2d7e",
        7762: "e3a2b8e7ea298a4cb539",
        8974: "916798b5aeacb06a2928",
        9192: "a08e27711597c74864ca",
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
    (f.l = (e, a, n, r) => {
      if (s[e]) s[e].push(a);
      else {
        var c, i;
        if (void 0 !== n)
          for (
            var b = document.getElementsByTagName("script"), o = 0;
            o < b.length;
            o++
          ) {
            var t = b[o];
            if (
              t.getAttribute("src") == e ||
              t.getAttribute("data-webpack") == d + n
            ) {
              c = t;
              break;
            }
          }
        c ||
          ((i = !0),
          ((c = document.createElement("script")).charset = "utf-8"),
          (c.timeout = 120),
          f.nc && c.setAttribute("nonce", f.nc),
          c.setAttribute("data-webpack", d + n),
          (c.src = e)),
          (s[e] = [a]);
        var l = (a, n) => {
            (c.onerror = c.onload = null), clearTimeout(h);
            var d = s[e];
            if (
              (delete s[e],
              c.parentNode && c.parentNode.removeChild(c),
              d && d.forEach((e) => e(n)),
              a)
            )
              return a(n);
          },
          h = setTimeout(
            l.bind(null, void 0, { type: "timeout", target: c }),
            12e4,
          );
        (c.onerror = l.bind(null, c.onerror)),
          (c.onload = l.bind(null, c.onload)),
          i && document.head.appendChild(c);
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
        if (n.length) for (var s = n.length - 1; s > -1 && !e; ) e = n[s--].src;
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
                      (c = n[s]).getAttribute("data-href") ||
                      c.getAttribute("href");
                    if ("stylesheet" === c.rel && (d === e || d === a))
                      return c;
                  }
                  var r = document.getElementsByTagName("style");
                  for (s = 0; s < r.length; s++) {
                    var c;
                    if (
                      (d = (c = r[s]).getAttribute("data-href")) === e ||
                      d === a
                    )
                      return c;
                  }
                })(s, d)
              )
                return a();
              ((e, a, n, s, d) => {
                var r = document.createElement("link");
                (r.rel = "stylesheet"),
                  (r.type = "text/css"),
                  (r.onerror = r.onload =
                    (n) => {
                      if (((r.onerror = r.onload = null), "load" === n.type))
                        s();
                      else {
                        var c = n && n.type,
                          f = (n && n.target && n.target.href) || a,
                          i = new Error(
                            "Loading CSS chunk " +
                              e +
                              " failed.\n(" +
                              c +
                              ": " +
                              f +
                              ")",
                          );
                        (i.name = "ChunkLoadError"),
                          (i.code = "CSS_CHUNK_LOAD_FAILED"),
                          (i.type = c),
                          (i.request = f),
                          r.parentNode && r.parentNode.removeChild(r),
                          d(i);
                      }
                    }),
                  (r.href = a),
                  n
                    ? n.parentNode.insertBefore(r, n.nextSibling)
                    : document.head.appendChild(r);
              })(e, d, null, a, n);
            }),
          a = { 6700: 0 };
        f.f.miniCss = (n, s) => {
          a[n]
            ? s.push(a[n])
            : 0 !== a[n] &&
              {
                1805: 1,
                2136: 1,
                2268: 1,
                2522: 1,
                2529: 1,
                3599: 1,
                3863: 1,
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
      var e = { 6700: 0 };
      (f.f.j = (a, n) => {
        var s = f.o(e, a) ? e[a] : void 0;
        if (0 !== s)
          if (s) n.push(s[2]);
          else if (/^(6700|9192)$/.test(a)) e[a] = 0;
          else {
            var d = new Promise((n, d) => (s = e[a] = [n, d]));
            n.push((s[2] = d));
            var r = f.p + f.u(a),
              c = new Error();
            f.l(
              r,
              (n) => {
                if (f.o(e, a) && (0 !== (s = e[a]) && (e[a] = void 0), s)) {
                  var d = n && ("load" === n.type ? "missing" : n.type),
                    r = n && n.target && n.target.src;
                  (c.message =
                    "Loading chunk " + a + " failed.\n(" + d + ": " + r + ")"),
                    (c.name = "ChunkLoadError"),
                    (c.type = d),
                    (c.request = r),
                    s[1](c);
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
            d,
            [r, c, i] = n,
            b = 0;
          if (r.some((a) => 0 !== e[a])) {
            for (s in c) f.o(c, s) && (f.m[s] = c[s]);
            if (i) var o = i(f);
          }
          for (a && a(n); b < r.length; b++)
            (d = r[b]), f.o(e, d) && e[d] && e[d][0](), (e[d] = 0);
          return f.O(o);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
