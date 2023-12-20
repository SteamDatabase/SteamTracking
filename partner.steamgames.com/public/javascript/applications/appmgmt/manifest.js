/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8599243";
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
  function f(e) {
    var a = b[e];
    if (void 0 !== a) return a.exports;
    var n = (b[e] = { id: e, loaded: !1, exports: {} });
    return i[e].call(n.exports, n, n.exports, f), (n.loaded = !0), n.exports;
  }
  (f.m = i),
    (e = []),
    (f.O = (a, n, s, c) => {
      if (!n) {
        var r = 1 / 0;
        for (o = 0; o < e.length; o++) {
          for (var [n, s, c] = e[o], d = !0, i = 0; i < n.length; i++)
            (!1 & c || r >= c) && Object.keys(f.O).every((e) => f.O[e](n[i]))
              ? n.splice(i--, 1)
              : ((d = !1), c < r && (r = c));
          if (d) {
            e.splice(o--, 1);
            var b = s();
            void 0 !== b && (a = b);
          }
        }
        return a;
      }
      c = c || 0;
      for (var o = e.length; o > 0 && e[o - 1][2] > c; o--) e[o] = e[o - 1];
      e[o] = [n, s, c];
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
        61: "c580772a189d8368aa35",
        77: "1e61fa7f195b2018281b",
        101: "7249e4d78b5d38759667",
        402: "9d2f8ab1aaa61a64b999",
        584: "0381ae37b9a9414b1da8",
        647: "891d3e6a534e2d92c513",
        698: "14a66ce72d788a68d974",
        727: "bbd1a11bd55c08192cfd",
        744: "4ea3faff3d41597cd403",
        799: "547285617be0bd49f987",
        819: "b50a42ce377a87047fb8",
        874: "4e3ce49314102df0f4a3",
        903: "ca9449ca175b9bc6b966",
        1012: "0a11d0369b1007263eb1",
        1043: "c00c61fa0e4cc8e239c6",
        1117: "b4c7a4f84e2ebf1adc08",
        1162: "5fd34a3a494615fcd73d",
        1164: "0d4583dfa5d20b94ba71",
        1313: "f7fbf1bd4d68051084c3",
        1722: "c960b778e03489cdf0fb",
        1805: "6a9882137b4fe2cb6758",
        2029: "3b5dcda8c7a499cf4b87",
        2120: "e02f02063dada506965c",
        2136: "37ecc9dfbb968db74809",
        2268: "36a42f84d7d21faee1ed",
        2431: "145183afb5a012b6f5f7",
        2443: "8d5e554d2695126da422",
        2448: "114487fb8ad79d93bc8c",
        2522: "cc82f2831f9c9630e437",
        2529: "df137be8312b887b3125",
        2537: "dde69596a599e7dc3246",
        2581: "5d4acfbfe8d128f10750",
        2601: "566edca03484f406cbf5",
        2681: "19fa584eaa61b1842b57",
        2706: "a69e9e43f4632f138c8f",
        2767: "10f0acb7a00bb8b5ace7",
        2824: "b05db549f9c36c29a475",
        2844: "b6203ebfe860be80d5b9",
        2848: "8f5a10ad5e3e20e4e0e2",
        2942: "0e1cd79d9b1197ad24fb",
        2996: "06ca837765e7bdd26acc",
        3112: "eb5712585717d2d770ca",
        3135: "056e019d3370451bb38f",
        3174: "739dd7cb4b777610e1e4",
        3185: "4e1b6c65a3b25d401cac",
        3233: "330aebbc07274af22a66",
        3252: "4bba60b538e8b5ec0334",
        3277: "9c1d2720274820363557",
        3313: "893a0e7badabbc31b295",
        3323: "607695de9cf7c993cd12",
        3359: "edb9e4c47887a543ca22",
        3453: "0aa76c397fbd91e95d87",
        3557: "294fe2f90da0ae40e71a",
        3599: "e8b0081f53550e18ff74",
        3634: "a01a50d47236c0b3b4d7",
        3685: "c633a020f357a6f56e49",
        3768: "5b5915e26cbcda650450",
        3786: "8dbf30eebdcd3f2166f9",
        4033: "d007994344ce8993f6ce",
        4108: "f6d83ec8bbab6adb8c43",
        4166: "83068c51094572bf9782",
        4171: "5c20e0e36380516858bb",
        4189: "e2af399a5ee3e8239f1d",
        4199: "0953d262d7d2cba2ca1f",
        4238: "1c6143dcf871c54f7833",
        4248: "b952a94fce85b709918f",
        4297: "c2d0d2bb39eacb2cddef",
        4309: "3a67b6c4de9156577a5b",
        4447: "f7bd8daebfbfcd25e232",
        4458: "6e5fffb47d12bd468bf0",
        4535: "47b75cc853c9bb4e287b",
        4601: "3fb06923cc527f396925",
        4682: "7d7258e50aa98d828fe3",
        4722: "d73b4008030c28ae6ac0",
        4812: "66822aa86550d36c09be",
        4823: "03fcfd747b69a124167b",
        4860: "538a5da8f93e75965c84",
        4929: "90453f550424f367c751",
        4935: "5d911a60ebf73ee91077",
        4961: "ed69c0d1b8bc5dfc98c2",
        4964: "2957ecd0b3c5dd1aba44",
        5117: "88b4eb71096be916ea92",
        5257: "1e9a43dbf2ee53e3b4c1",
        5414: "7a9751c1016241f55f40",
        5438: "fdcb6ac2dc2e1f130101",
        5559: "e58097ce2399920708a9",
        5625: "c42d83c85597cc188b54",
        5676: "5bbcb69be19b2cb80bd9",
        5785: "e7c52fce246dff083061",
        5849: "5ee618ea0e2263c43b5c",
        5855: "ee83f3295b31460d79b5",
        5875: "987af9c991114a409c63",
        5925: "67445b8f73ac09555439",
        5933: "a9535b3c63360df42d7a",
        5948: "a7b4b0bdc08a74af6b24",
        6007: "26341f2b0dcc79ee93fa",
        6019: "86ae1d38d2c232eba4cb",
        6035: "2167519dc120a8f5b363",
        6087: "d83be28de3ad202524e5",
        6169: "34b3cead7035056c2ec4",
        6492: "28587a4a33cde61a587f",
        6542: "042ba78bce51baafb02b",
        6608: "028698a069af4b3d9dc7",
        6693: "2a01051c57edd673dc5f",
        6699: "2b2668585893837c21e0",
        6739: "f9383d3456404ab1a360",
        6762: "a707f6d85fa7076725dd",
        6808: "e5448ac8d1ba2d79fa07",
        6815: "29a9009cac2ac6b269d8",
        6817: "12a41efd4e2e6466e5c6",
        6846: "86c5592107dba7d5d848",
        7072: "463512566a6b5dc89b66",
        7082: "0a3883c171314ac4f506",
        7094: "60f55432d8f9f27fd1ad",
        7099: "ef1bff6826699ad303b7",
        7181: "b90fda8a9cb079920563",
        7236: "8b0d1c9f16bf76a3fa45",
        7241: "5cea451ccccd2d929507",
        7510: "16d66769d4552f4a84c7",
        7602: "1b58c3683327e2fbd4fe",
        7724: "6a4035ff5bba5707bab1",
        7762: "9d8b728250c2a1c321f5",
        7781: "00af2b9deb2948710d54",
        7871: "cd2baf253e36e1257531",
        7890: "99c65f7fc5dbc4728c5d",
        7934: "e8ee812af9af24dbd904",
        7942: "80323e3c4dbb542b546a",
        7951: "485daf92bba9230f70ea",
        7952: "132f44afd40c5dc5e26d",
        7975: "f0177ee3506cdfe2410a",
        8001: "aaabd9cb62d16d3f8472",
        8051: "7f707a7032e5883bbd8f",
        8155: "b7ce776e0a990096fdaa",
        8168: "4100ef4e1424df4710d1",
        8195: "afc1ea3c6cd4e250b3fc",
        8385: "8b8ffdb604f71cb2a220",
        8389: "d233a11f6bbfdefc15de",
        8399: "fc279e43fd4c1db9a44e",
        8754: "a041687caf7c2cd23dfa",
        8767: "44c98107733c69d470b7",
        8774: "3b6d945f4c2441ae680a",
        8794: "d491c17738d061a2dbdd",
        8960: "04e58e3d9562a450af9d",
        8974: "388e5778770d6714e938",
        8993: "d96a2f830957cd1fd655",
        8994: "2148db1be59468c22e0f",
        9035: "9b49528f8f6672d4c141",
        9062: "b59843b4e93cbe481226",
        9192: "52721a5bc062a53677a2",
        9431: "312e11e20c54762bc72e",
        9568: "e868b3d03e2dde23315a",
        9584: "dbf32ee66244233ff80b",
        9603: "58c81dec9f0a85bf82c5",
        9663: "0d2c03275dcad4f662e1",
        9749: "7b9be0ea8c5b28598422",
        9753: "847a32b149df80fbe321",
        9899: "711e120d1cbc64803950",
        9903: "cf62f710d3b29d88fa53",
        9919: "874525ecdd1d0ef57e63",
        9980: "49f93a82cba4e9978251",
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
        1805: "f5a77810ad1854489387",
        2136: "80f8683ae7f85df71a98",
        2268: "e19d6dbf0f6ae66012be",
        2522: "3a52d13476b669588bd8",
        2529: "074d37fe9cc54cb857a5",
        3599: "37883bb918433d9a98b6",
        4033: "86851fc158be4792d3b3",
        4309: "f38ba98b44af4fc0288a",
        4535: "be2d8061908540c37d56",
        4601: "da717847514be2f17d39",
        4935: "59890b790fbf2cc93831",
        5676: "483492d6ea0c81ebc1d7",
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
            var b = document.getElementsByTagName("script"), o = 0;
            o < b.length;
            o++
          ) {
            var t = b[o];
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
            b = 0;
          if (r.some((a) => 0 !== e[a])) {
            for (s in d) f.o(d, s) && (f.m[s] = d[s]);
            if (i) var o = i(f);
          }
          for (a && a(n); b < r.length; b++)
            (c = r[b]), f.o(e, c) && e[c] && e[c][0](), (e[c] = 0);
          return f.O(o);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
