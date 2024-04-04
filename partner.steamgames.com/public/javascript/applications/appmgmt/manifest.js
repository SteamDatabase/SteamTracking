/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8806171";
(() => {
  "use strict";
  var e,
    a,
    n,
    s,
    d,
    c = {},
    r = {};
  function b(e) {
    var a = r[e];
    if (void 0 !== a) return a.exports;
    var n = (r[e] = { id: e, loaded: !1, exports: {} });
    return c[e].call(n.exports, n, n.exports, b), (n.loaded = !0), n.exports;
  }
  (b.m = c),
    (e = []),
    (b.O = (a, n, s, d) => {
      if (!n) {
        var c = 1 / 0;
        for (o = 0; o < e.length; o++) {
          for (var [n, s, d] = e[o], r = !0, i = 0; i < n.length; i++)
            (!1 & d || c >= d) && Object.keys(b.O).every((e) => b.O[e](n[i]))
              ? n.splice(i--, 1)
              : ((r = !1), d < c && (c = d));
          if (r) {
            e.splice(o--, 1);
            var f = s();
            void 0 !== f && (a = f);
          }
        }
        return a;
      }
      d = d || 0;
      for (var o = e.length; o > 0 && e[o - 1][2] > d; o--) e[o] = e[o - 1];
      e[o] = [n, s, d];
    }),
    (b.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return b.d(a, { a }), a;
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (b.t = function (e, s) {
      if ((1 & s && (e = this(e)), 8 & s)) return e;
      if ("object" == typeof e && e) {
        if (4 & s && e.__esModule) return e;
        if (16 & s && "function" == typeof e.then) return e;
      }
      var d = Object.create(null);
      b.r(d);
      var c = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var r = 2 & s && e; "object" == typeof r && !~a.indexOf(r); r = n(r))
        Object.getOwnPropertyNames(r).forEach((a) => (c[a] = () => e[a]));
      return (c.default = () => e), b.d(d, c), d;
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
        61: "sales_russian-json",
        77: "sales_vietnamese-json",
        101: "sales_dutch-json",
        584: "sales_koreana-json",
        647: "main_czech-json",
        698: "main_dutch-json",
        727: "main_japanese-json",
        746: "libraries~eae36f74a",
        799: "main_german-json",
        819: "marketing_turkish-json",
        874: "marketing_dutch-json",
        903: "marketing_russian-json",
        979: "libraries~29ddc6b39",
        1012: "sales_romanian-json",
        1043: "sales_schinese-json",
        1117: "main_french-json",
        1162: "shared_thai-json",
        1164: "sales_norwegian-json",
        1313: "shared_bulgarian-json",
        1478: "libraries~46fbcd11a",
        1643: "chunk~60681c765",
        1722: "sales_czech-json",
        2029: "shared_sc_schinese-json",
        2120: "libraries~65c77a859",
        2136: "events",
        2167: "chunk~b4cf1c116",
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
        3059: "libraries~60681c765",
        3112: "shared_french-json",
        3174: "sales_spanish-json",
        3185: "main_swedish-json",
        3252: "shared_polish-json",
        3277: "main_romanian-json",
        3313: "sales_finnish-json",
        3323: "main_danish-json",
        3359: "main_bulgarian-json",
        3453: "marketing_czech-json",
        3552: "libraries~3caf4ca8a",
        3557: "shared_finnish-json",
        3599: "adminpromoreviewdashboard",
        3634: "sales_bulgarian-json",
        3685: "sales_german-json",
        3710: "chunk~9d4f35afa",
        3768: "main_finnish-json",
        3863: "publisherdashboard",
        4033: "marketing_schinese-json",
        4103: "navevents",
        4108: "shared_norwegian-json",
        4166: "sales_thai-json",
        4171: "marketing_koreana-json",
        4189: "shared_czech-json",
        4199: "marketing_french-json",
        4238: "marketing_thai-json",
        4248: "sales_polish-json",
        4297: "shared_greek-json",
        4447: "sales_greek-json",
        4458: "marketing_brazilian-json",
        4535: "login",
        4601: "broadcast",
        4650: "chunk~7c4d46a11",
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
        5612: "libraries~bb3891c52",
        5625: "shared_swedish-json",
        5676: "steamlearn",
        5706: "contenthubpages",
        5849: "shared_portuguese-json",
        5855: "sales_swedish-json",
        5925: "shared_dutch-json",
        5933: "shared_italian-json",
        5948: "shared_hungarian-json",
        6007: "shared_german-json",
        6019: "marketing_swedish-json",
        6035: "marketing_ukrainian-json",
        6087: "main_latam-json",
        6169: "marketing_norwegian-json",
        6234: "libraries~7c4d46a11",
        6375: "libraries~b4cf1c116",
        6492: "shared_spanish-json",
        6542: "shared_koreana-json",
        6630: "libraries~24bb3772d",
        6693: "sales_italian-json",
        6699: "steamdeck",
        6762: "sales_sc_schinese-json",
        6808: "resquemsg",
        6815: "main_english-json",
        6817: "main_spanish-json",
        6846: "marketing_vietnamese-json",
        6853: "chunk~ec4f762b0",
        7072: "main_indonesian-json",
        7082: "marketing_japanese-json",
        7094: "sales_japanese-json",
        7181: "sales_tchinese-json",
        7236: "main_portuguese-json",
        7240: "chunk~786255bbb",
        7485: "chunk~38155a7b8",
        7602: "shared_tchinese-json",
        7682: "chunk~2b6b77689",
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
        8385: "shared_brazilian-json",
        8399: "marketing_indonesian-json",
        8754: "shared_indonesian-json",
        8767: "sales_turkish-json",
        8774: "marketing_romanian-json",
        8960: "marketing_bulgarian-json",
        8974: "storeadmin",
        8993: "sales_hungarian-json",
        8994: "marketing_hungarian-json",
        9062: "shared_russian-json",
        9129: "libraries~9d4f35afa",
        9431: "main_brazilian-json",
        9568: "main_greek-json",
        9603: "libraries~82d50d904",
        9645: "libraries~f1126aa1a",
        9663: "main_turkish-json",
        9753: "shared_danish-json",
        9784: "chunk~0efb0496c",
        9828: "libraries~38155a7b8",
        9899: "marketing_latam-json",
        9903: "marketing_tchinese-json",
        9919: "marketing_sc_schinese-json",
        9980: "main_schinese-json",
      }[e] +
      ".js?contenthash=" +
      {
        61: "945c04a8127446ce6db2",
        77: "6079a6d571281f6beb34",
        101: "da74663f76a0906443ea",
        584: "56fd9bd9e9b1adc51711",
        647: "c0ad2b3c7e0839b4fde7",
        698: "9e9adf4ce73f092e5d81",
        727: "479aab389b47b1e488d7",
        746: "af92287c1b209dcc065e",
        799: "6cc150d03f689f57261c",
        819: "dc8a91b87276f3c2cfff",
        874: "d2b673e136c8e46b1f64",
        903: "f444d662595c58eaac4c",
        979: "08cfe5f35f3f4cf6df80",
        1012: "dea5f4c2b5599198c7c7",
        1043: "381242a9e6823fec50d6",
        1117: "65ede4e49403f2e9bfc3",
        1162: "4b85736cece5a34506d9",
        1164: "49f30f779dddbfdceef0",
        1313: "d86c533e7395f4058f51",
        1478: "cb5668a16784bd45e9b5",
        1643: "b76984cc5bf61c150e66",
        1722: "7ba499d40a4aa0bfc98b",
        2029: "0804591a1a4dee690841",
        2120: "306c9ca3d311a1b68dbe",
        2136: "8c76b66ddd5fc4409723",
        2167: "0663838c6d846d611a05",
        2431: "cc0f4be069eec8c73e0d",
        2443: "a4cc83a96e4308f1ab7d",
        2448: "a46b96d7a68a5f719e54",
        2522: "b2f5334a265a16b3ad39",
        2529: "9763c814bf77fe457cbf",
        2537: "35d667cc0e1922c525c7",
        2581: "f8a484980cbee7514fe3",
        2601: "70b66d8b084fea19855a",
        2681: "3c5fb636246b33dc1f22",
        2706: "e151261c0324bb4820bd",
        2715: "6b8953dde5b6dc82c80a",
        2767: "3b267adc24ab95e59ad0",
        2824: "1d4cf29eec7dac6a2626",
        2844: "1cd0fde3083400bf9b90",
        2848: "904ef2493afd7da95a61",
        2942: "fd7a2fe0429f620d777f",
        3059: "f897fac43d8de95dfee8",
        3112: "82049ffd9bb789ede7cf",
        3174: "406b3606dae97323b783",
        3185: "df4a5cf1df1b29ff3a6a",
        3252: "c7c29e64520b5d75b235",
        3277: "696964b1882e1fce2005",
        3313: "19c915d179f373fd1bfb",
        3323: "0f25a654f4527da239de",
        3359: "6ec3eaec744133bfcdf8",
        3453: "64949f48e456a533cb61",
        3552: "f99f2fcdf108cfa5f114",
        3557: "ddd6109db73aff10cf28",
        3599: "2596e90ec774bc304d00",
        3634: "17a78111a71998b9185a",
        3685: "da04eb5943286cbe3fd8",
        3710: "7c1436bd4d5358f6bf10",
        3768: "266516c1b686a3250e5e",
        3863: "ce4d671896d8bb1591e1",
        4033: "b063dc6907284779a572",
        4103: "5d57ffac186630d345df",
        4108: "840742331930dda0d6ad",
        4166: "1572d1a5b616cc21b861",
        4171: "077c5f26e775f1b15a0f",
        4189: "97c2657b6a738b3e935a",
        4199: "3fbc33781f4638c1517f",
        4238: "0029cda35aeaa9e55791",
        4248: "b470432081d7e5762a6f",
        4297: "d5fe56eacf80c0e10243",
        4447: "3f0121288b64ca8091f9",
        4458: "a83b4976e5ac3d40fbf8",
        4535: "c636946667a9541271d6",
        4601: "333a3c2b10fa1ffbd430",
        4650: "54b539467481f98f0684",
        4682: "d07efc659f9fd9cc8231",
        4722: "c5d8346239d7450c99eb",
        4812: "a80ef01f4a716d4d975a",
        4823: "ec72a86d64515c1699ce",
        4860: "bbe7998b01c4015481e9",
        4929: "77feb8dbbab5504e710c",
        4935: "d543ad862ab9909358b9",
        4961: "ccd66304716a04b40184",
        4964: "5414bf274e9f3a588e11",
        5117: "0503d90873c9f51d1b74",
        5257: "62d8a989d34f5a66fd6f",
        5414: "cf84c8f9d97ce7b2e7a8",
        5438: "dc45cd78499697786169",
        5612: "00fda278cf201989f5c2",
        5625: "05a9aeb01c4a84b6717f",
        5676: "232f93ed40c968e2350e",
        5706: "7b9c3c571c599dd2295b",
        5849: "97bb763960652e14faab",
        5855: "2f42079ab7e644b4deae",
        5925: "e58abd5981ddfd049781",
        5933: "cc97cfc760053c5463a8",
        5948: "23876668be11ef8d318c",
        6007: "c3fc1eb28b785464095f",
        6019: "915cc13b9f91a7178702",
        6035: "6cab508d3c8ec0323cba",
        6087: "9ce8f1f5115fec3c8eb9",
        6169: "d945c3adfaf53db3ab12",
        6234: "1cb57f14545a973a4981",
        6375: "fc74eefa9ed7236ab304",
        6492: "f8f470291e431773b87c",
        6542: "3cd55a4622d85c690c82",
        6630: "e8f384b224ef6a9be1c2",
        6693: "c32217217ca9230c70e8",
        6699: "759d1915f5948f896040",
        6762: "cbe1fb3678f0468e4718",
        6808: "711d463b144c562f71e5",
        6815: "7871b92fae715e853618",
        6817: "f0273c3e5f9eceefc9dd",
        6846: "f042a85b189c46045da8",
        6853: "9e4aa379c9c59c34a3bc",
        7072: "90c925c7c2f0c5e7cc07",
        7082: "58295fa2669d54481627",
        7094: "7b60ec072c96a84f49c7",
        7181: "e7cb696a4a1fea6ded65",
        7236: "cb3d9ad10d127c3e45bc",
        7240: "f434e08a1a10adcb7163",
        7485: "20347a7d5e11040982d8",
        7602: "667ced78966c85aac2d5",
        7682: "122350ac9b14608759db",
        7724: "bf20850cc3107b85187a",
        7762: "8cd12cded99e413ca0f9",
        7781: "897a22f7d1e0cb68ab74",
        7871: "09ff07c80fc53248411d",
        7890: "a05a676cf5da49dcaa91",
        7934: "38377bde1a994198211f",
        7942: "e4b80b156660de497535",
        7951: "47b91e0909feeb6270d5",
        7952: "651763d8708cd266e4f8",
        7975: "53385b792fa7b82aa330",
        8001: "0313968c6ce901d1cca0",
        8051: "8c88c79112dbdf60f39f",
        8155: "be496ec78ea345edc765",
        8168: "48d94493744baef565f4",
        8385: "0bee6e3594e8eb3ad1f1",
        8399: "35a36e79b15ab23cb401",
        8754: "47f2c9f1c0bb7305e474",
        8767: "98ab13e161739681b34f",
        8774: "194802e5bd99248f38ed",
        8960: "647e8b11ace4b7bb5043",
        8974: "079a45fd883f9db601a8",
        8993: "8f2eafe0187725fada7b",
        8994: "cedebcd7d07022f84289",
        9062: "8b85f88f1ba1c3584f41",
        9129: "65b82edd8bfc21a38b92",
        9431: "1038f9dfa01e03450cb3",
        9568: "873533c8374746cf12c9",
        9603: "81fcaa13dc323f117881",
        9645: "5735dd87598782d72742",
        9663: "12a38d0d2e8ccafc6b7f",
        9753: "b91be2521c38dbbfa584",
        9784: "eaf65546a5d0bef704a9",
        9828: "a37a37bf6c2fd666d47e",
        9899: "912fe6aae01264ea867a",
        9903: "d0ced838c0a767dfc1f1",
        9919: "d324e65987b1c0f66ca2",
        9980: "3d3c62f6f6049dd03ad5",
      }[e]),
    (b.miniCssF = (e) =>
      "css/applications/appmgmt/" +
      {
        746: "libraries~eae36f74a",
        1643: "chunk~60681c765",
        2136: "events",
        2522: "logoedtior",
        2529: "pricingtool",
        3599: "adminpromoreviewdashboard",
        3710: "chunk~9d4f35afa",
        3863: "publisherdashboard",
        4601: "broadcast",
        4935: "sdrconnections",
        5676: "steamlearn",
        6699: "steamdeck",
        6808: "resquemsg",
        6853: "chunk~ec4f762b0",
        7485: "chunk~38155a7b8",
        7762: "steamml",
        8974: "storeadmin",
      }[e] +
      ".css?contenthash=" +
      {
        746: "d885e31859d50e4d4824",
        1643: "be624d2620522cd797ae",
        2136: "c0e57114df4f2ba954d2",
        2522: "addc7c7496e84873d7e4",
        2529: "d8820892a6963b5261f9",
        3599: "37883bb918433d9a98b6",
        3710: "c5be49c6490edf1ec6aa",
        3863: "841ada1979684f0f3bf1",
        4601: "424387bdd790c3d82c34",
        4935: "778b864386916389b7f7",
        5676: "aef17f96547567159950",
        6699: "68a190ec50213eceb0c6",
        6808: "abba0f539ad4aacf41d2",
        6853: "5b4930a46ceeb981e028",
        7485: "cffcc4865613cbdae449",
        7762: "a646e69fa0b46e77d520",
        8974: "93eb3ead90e5d6336768",
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
    (s = {}),
    (d = "appmgmt-storeadmin:"),
    (b.l = (e, a, n, c) => {
      if (s[e]) s[e].push(a);
      else {
        var r, i;
        if (void 0 !== n)
          for (
            var f = document.getElementsByTagName("script"), o = 0;
            o < f.length;
            o++
          ) {
            var t = f[o];
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
          b.nc && r.setAttribute("nonce", b.nc),
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
    (b.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (b.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (b.p = ""),
    (() => {
      if ("undefined" != typeof document) {
        var e = (e) =>
            new Promise((a, n) => {
              var s = b.miniCssF(e),
                d = b.p + s;
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
                          b = (n && n.target && n.target.href) || a,
                          i = new Error(
                            "Loading CSS chunk " +
                              e +
                              " failed.\n(" +
                              r +
                              ": " +
                              b +
                              ")",
                          );
                        (i.name = "ChunkLoadError"),
                          (i.code = "CSS_CHUNK_LOAD_FAILED"),
                          (i.type = r),
                          (i.request = b),
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
          a = { 6700: 0 };
        b.f.miniCss = (n, s) => {
          a[n]
            ? s.push(a[n])
            : 0 !== a[n] &&
              {
                746: 1,
                1643: 1,
                2136: 1,
                2522: 1,
                2529: 1,
                3599: 1,
                3710: 1,
                3863: 1,
                4601: 1,
                4935: 1,
                5676: 1,
                6699: 1,
                6808: 1,
                6853: 1,
                7485: 1,
                7762: 1,
                8974: 1,
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
      (b.f.j = (a, n) => {
        var s = b.o(e, a) ? e[a] : void 0;
        if (0 !== s)
          if (s) n.push(s[2]);
          else if (/^6(700|853)$/.test(a)) e[a] = 0;
          else {
            var d = new Promise((n, d) => (s = e[a] = [n, d]));
            n.push((s[2] = d));
            var c = b.p + b.u(a),
              r = new Error();
            b.l(
              c,
              (n) => {
                if (b.o(e, a) && (0 !== (s = e[a]) && (e[a] = void 0), s)) {
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
        (b.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var s,
            d,
            [c, r, i] = n,
            f = 0;
          if (c.some((a) => 0 !== e[a])) {
            for (s in r) b.o(r, s) && (b.m[s] = r[s]);
            if (i) var o = i(b);
          }
          for (a && a(n); f < c.length; f++)
            (d = c[f]), b.o(e, d) && e[d] && e[d][0](), (e[d] = 0);
          return b.O(o);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
