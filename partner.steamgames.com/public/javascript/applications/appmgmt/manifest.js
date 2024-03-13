/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "0";
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
        for (o = 0; o < e.length; o++) {
          for (var [n, s, d] = e[o], r = !0, b = 0; b < n.length; b++)
            (!1 & d || c >= d) && Object.keys(f.O).every((e) => f.O[e](n[b]))
              ? n.splice(b--, 1)
              : ((r = !1), d < c && (c = d));
          if (r) {
            e.splice(o--, 1);
            var i = s();
            void 0 !== i && (a = i);
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
        746: "libraries~eae36f74a",
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
        2715: "chunk~eae36f74a",
        2767: "main_polish-json",
        2824: "marketing_german-json",
        2844: "shared_japanese-json",
        2848: "main_ukrainian-json",
        2942: "main_tchinese-json",
        3112: "shared_french-json",
        3135: "marketing_schinese-json",
        3174: "sales_spanish-json",
        3185: "main_swedish-json",
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
        6513: "chunk~8815b8fb8",
        6542: "shared_koreana-json",
        6693: "sales_italian-json",
        6699: "steamdeck",
        6739: "libraries~76b1d4b20",
        6762: "sales_sc_schinese-json",
        6808: "resquemsg",
        6815: "main_english-json",
        6817: "main_spanish-json",
        6846: "marketing_vietnamese-json",
        7072: "main_indonesian-json",
        7076: "chunk~1f533e04e",
        7082: "marketing_japanese-json",
        7094: "sales_japanese-json",
        7099: "libraries~b65c73781",
        7181: "sales_tchinese-json",
        7236: "main_portuguese-json",
        7241: "chunk~98cd0a490",
        7439: "libraries~3759fa48a",
        7485: "chunk~38155a7b8",
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
        8313: "libraries~de73425d7",
        8385: "shared_brazilian-json",
        8389: "libraries~0693b010b",
        8399: "marketing_indonesian-json",
        8754: "shared_indonesian-json",
        8767: "sales_turkish-json",
        8774: "marketing_romanian-json",
        8794: "libraries~680aad936",
        8930: "chunk~3759fa48a",
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
        584: "3561588509dac5a54650",
        647: "120110f19d7c617d44a1",
        698: "c26c3e13d2a343e26fab",
        727: "7647b87fad5b0f37013c",
        744: "b2eb126703f9fe6065d1",
        746: "5a7513fecd9bdaee8705",
        799: "976e2ed0f1de82698bfd",
        819: "9472529856bf633b5fcd",
        874: "5c127b6d24c35e4ae7c9",
        903: "b8e64b9b625474ff0d66",
        1012: "cd34b9e69ca63cd859f6",
        1043: "67358837711bdb3e33f1",
        1117: "27c81ea27cbe7c0250f1",
        1162: "52fe0373b9d84fd4176e",
        1164: "a48d9240c4c95529fe49",
        1313: "231c7bfc5f9f5e24c2dd",
        1722: "a09a5952d109985c9106",
        1805: "1429d7ad726f4a88c2b2",
        2029: "7f4e3c73174298905e7d",
        2120: "8c4eb14d65368d9c0085",
        2136: "45b92a36218f70e439e8",
        2268: "5d14dad3a953211adac1",
        2431: "de41d0131bbeada53419",
        2443: "1c9b1ff56327feb9bc9c",
        2448: "743c8e0ad442797b6e0e",
        2522: "0aa9b8265216f22b1a0b",
        2529: "3a03c10755b2c688b2b7",
        2537: "7b504eba885b076c4b51",
        2581: "5ed691b92ad826d491f3",
        2601: "d4b29b1e3d3b125fe7c2",
        2681: "fadf7f88b3029182b517",
        2706: "43d72cb6093c38e097be",
        2715: "0dd5bb94072709a1f497",
        2767: "9d14ec4ca98a8cc23564",
        2824: "7f690b55de0fa463c1ec",
        2844: "1238f44043501a861867",
        2848: "6523e1021f45659f5a3b",
        2942: "ca9ee9f0268ecd85e24d",
        3112: "e9924bfa563633f4e273",
        3135: "c4ebdb0465a0571f295a",
        3174: "d7319e43c1cf6fa93a69",
        3185: "4e895a68a77e535cb433",
        3252: "f65ec8311d7f29bb7348",
        3277: "d6c4a032343f38361d3d",
        3313: "75916691cd50a5ee904a",
        3323: "fbae4b03e1bcb42bf1b2",
        3359: "bbd91c3379d5d6405312",
        3453: "bd608781f3ae642b15e5",
        3557: "276880d3fdb895e7d64d",
        3599: "bd509959d3955d3fa34b",
        3634: "07a1d2a7be304000faa8",
        3685: "417adc7a0da962b77143",
        3768: "72c2f3323ff57c7b5020",
        3786: "7e127868d30287e84b12",
        3863: "edf0b30fffee6ebf01f5",
        4033: "4a6906bab3bd83d41274",
        4103: "5515c83fdb596d3e8ef8",
        4108: "5cf38baf8f406b951fdb",
        4166: "104c6858278065c52533",
        4171: "1e513021c9ded93886ba",
        4189: "e7aa375b57acf9a95808",
        4199: "d447a63ffb471a6f8f11",
        4238: "579da8baedd0d44f21a4",
        4248: "a86abc4f1cf6d2ee6dcf",
        4297: "12a23a688dd79d075cc8",
        4309: "fb635429e8efaff10cb6",
        4447: "950d88f1ec76d6e334a2",
        4458: "feff7d52ddcd030e183c",
        4535: "de99d324f7d8ec873e0c",
        4601: "296b97693fb2a9dea334",
        4682: "a3cc60a12d95e62911e7",
        4722: "0f287452340fc8ee8b17",
        4812: "4eda14403a7d9fbc8737",
        4823: "8fc0fec7578920b961b1",
        4860: "068414c7a58ba095299a",
        4929: "556eb408a8992c259a7e",
        4935: "69582c31d7c0237bbbec",
        4961: "b63cd8a980584ef7640f",
        4964: "2d4b673743c65b2c4377",
        5117: "3d76f414ba0406cd6afa",
        5257: "e358cd383fbc3263b248",
        5414: "ff7f460141f91212cdfb",
        5438: "a77f0f1724f7227383b9",
        5559: "c22d83810a7277c619e3",
        5625: "5cd6311d59713daaac8d",
        5676: "b35f33214583e3321e68",
        5785: "7d99fabbe26152b1cae4",
        5849: "aaf7acf6a1fe23d08b92",
        5855: "fda7dfcefb7723df2d28",
        5875: "19530bffe513089c72f3",
        5925: "1abc849b24d7024923d2",
        5933: "f9a98281e7e49920e456",
        5948: "cbd04baf6fede61547fc",
        6007: "1c6eec6bc115693182c8",
        6019: "3e3fdeefce987f245673",
        6035: "14c48be038f435a46304",
        6087: "e93f68d3421db6213827",
        6169: "9321a4a9be103f193c30",
        6492: "ac36a05975220c2ad91e",
        6513: "59106dba7a1860bc6a17",
        6542: "d0a8999885ae4dd013de",
        6693: "60444b25443b1d303b1d",
        6699: "08af4a66e4d1adb91717",
        6739: "7d91f081f36a966508cd",
        6762: "ecff8691b44833ac7359",
        6808: "a66236defa2830a5d3f5",
        6815: "fed562b555a624b8f0e4",
        6817: "62728c44ccbcf3de1ca5",
        6846: "3a8b524190219972f2e9",
        7072: "f6aacd3c9a6dfd0fea0f",
        7076: "5d6f437479f5ca22dd77",
        7082: "56657504987a4710341b",
        7094: "2505154bdb5c77561ee7",
        7099: "a7dd0d51a798df1ffecb",
        7181: "364396e7717d7935a693",
        7236: "193ea6f358acd3171138",
        7241: "f0a0dda0d172f67535b2",
        7439: "793ff8436a7c505bd786",
        7485: "9a909245420119bc3edc",
        7510: "673ca972d67a51f6b402",
        7602: "3afdf0b85c995e746479",
        7724: "8c6f2a95b923f88b331b",
        7762: "03d0ec80c9ee251c8d08",
        7781: "a122b4a24841d9c6182b",
        7871: "5da71088f3f3dd8baa49",
        7890: "96d05f864ece75cb4e5c",
        7934: "771264eb73f5070297f4",
        7942: "83acf6711867d79dd2bf",
        7951: "30a206b34b7c97c4347f",
        7952: "2c781fab6cc8a0871941",
        7975: "5d343ae0a7ac6b386088",
        8001: "45d9b3e08849b4643cfd",
        8051: "bc80c09d5dad33317862",
        8155: "36cf2a6279ba132318bd",
        8168: "90686a7b4ea623dc3b08",
        8313: "17fbc24d14a9998eec98",
        8385: "66b4a34e0fbb542dfe36",
        8389: "d3db9925be521b8dcd3c",
        8399: "bfad9327a77105ecf3c9",
        8754: "7d5fb432a9d5466049b7",
        8767: "2f96c5a80a4927665b04",
        8774: "8bbb893e31c9773bf018",
        8794: "e4dcd75cd0e8daee78f9",
        8930: "1fb950a985c6c13e5ce9",
        8960: "0f757aaf913c44953bcb",
        8974: "068b127c38615630aed7",
        8993: "509110d6359585434f24",
        8994: "6a1004e4d11c0c57b301",
        9035: "918ee0340237eeff91d8",
        9062: "14c504b88f12637eb3b2",
        9192: "6bf013004a85f395b907",
        9431: "b3775e97640f1b3f4611",
        9568: "973a9591e476333a8148",
        9584: "ccb37a2660d07b601b3a",
        9603: "58dc9699173af188e298",
        9663: "f636b3ecc9829ccf8b76",
        9749: "02ed46325afdd6d0ffee",
        9753: "5eeee8b4fd9d00714147",
        9899: "8cddfacd0777b328faf7",
        9903: "e95dbf7d704d0b087712",
        9919: "d21ec559578b5ffeac9c",
        9980: "aac63568fd755fe7104a",
      }[e]),
    (f.miniCssF = (e) =>
      "css/applications/appmgmt/" +
      {
        746: "libraries~eae36f74a",
        1805: "chunk~76b1d4b20",
        2136: "events",
        2268: "chunk~ba97af24b",
        2522: "logoedtior",
        2529: "pricingtool",
        3599: "adminpromoreviewdashboard",
        3863: "publisherdashboard",
        4033: "chunk~b65c73781",
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
        746: "d885e31859d50e4d4824",
        1805: "0047390d9c4d1d8a8ff0",
        2136: "c0e57114df4f2ba954d2",
        2268: "7ff338c64d97ebd01ec0",
        2522: "addc7c7496e84873d7e4",
        2529: "f1570c51d428fa60ef7f",
        3599: "37883bb918433d9a98b6",
        3863: "0be651cfd636b77b2d67",
        4033: "4d4b35cc668147a223b2",
        4601: "424387bdd790c3d82c34",
        4935: "778b864386916389b7f7",
        5676: "aef17f96547567159950",
        6699: "68a190ec50213eceb0c6",
        6808: "abba0f539ad4aacf41d2",
        7762: "a646e69fa0b46e77d520",
        8974: "93eb3ead90e5d6336768",
        9192: "d088fbe935a9cce7104a",
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
        var r, b;
        if (void 0 !== n)
          for (
            var i = document.getElementsByTagName("script"), o = 0;
            o < i.length;
            o++
          ) {
            var t = i[o];
            if (
              t.getAttribute("src") == e ||
              t.getAttribute("data-webpack") == d + n
            ) {
              r = t;
              break;
            }
          }
        r ||
          ((b = !0),
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
          b && document.head.appendChild(r);
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
                          b = new Error(
                            "Loading CSS chunk " +
                              e +
                              " failed.\n(" +
                              r +
                              ": " +
                              f +
                              ")",
                          );
                        (b.name = "ChunkLoadError"),
                          (b.code = "CSS_CHUNK_LOAD_FAILED"),
                          (b.type = r),
                          (b.request = f),
                          c.parentNode && c.parentNode.removeChild(c),
                          d(b);
                      }
                    }),
                  (c.href = a),
                  n
                    ? n.parentNode.insertBefore(c, n.nextSibling)
                    : document.head.appendChild(c);
              })(e, d, null, a, n);
            }),
          a = { 6700: 0 };
        f.f.miniCss = (n, s) => {
          a[n]
            ? s.push(a[n])
            : 0 !== a[n] &&
              {
                746: 1,
                1805: 1,
                2136: 1,
                2268: 1,
                2522: 1,
                2529: 1,
                3599: 1,
                3863: 1,
                4033: 1,
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
          else if (/^(6700|746|9192)$/.test(a)) e[a] = 0;
          else {
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
          }
      }),
        (f.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var s,
            d,
            [c, r, b] = n,
            i = 0;
          if (c.some((a) => 0 !== e[a])) {
            for (s in r) f.o(r, s) && (f.m[s] = r[s]);
            if (b) var o = b(f);
          }
          for (a && a(n); i < c.length; i++)
            (d = c[i]), f.o(e, d) && e[d] && e[d][0](), (e[d] = 0);
          return f.O(o);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
