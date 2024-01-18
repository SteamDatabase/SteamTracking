/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8639365";
(() => {
  "use strict";
  var e,
    a,
    n,
    d,
    s,
    r = {},
    c = {};
  function i(e) {
    var a = c[e];
    if (void 0 !== a) return a.exports;
    var n = (c[e] = { id: e, loaded: !1, exports: {} });
    return r[e].call(n.exports, n, n.exports, i), (n.loaded = !0), n.exports;
  }
  (i.m = r),
    (e = []),
    (i.O = (a, n, d, s) => {
      if (!n) {
        var r = 1 / 0;
        for (f = 0; f < e.length; f++) {
          for (var [n, d, s] = e[f], c = !0, b = 0; b < n.length; b++)
            (!1 & s || r >= s) && Object.keys(i.O).every((e) => i.O[e](n[b]))
              ? n.splice(b--, 1)
              : ((c = !1), s < r && (r = s));
          if (c) {
            e.splice(f--, 1);
            var o = d();
            void 0 !== o && (a = o);
          }
        }
        return a;
      }
      s = s || 0;
      for (var f = e.length; f > 0 && e[f - 1][2] > s; f--) e[f] = e[f - 1];
      e[f] = [n, d, s];
    }),
    (i.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return i.d(a, { a }), a;
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (i.t = function (e, d) {
      if ((1 & d && (e = this(e)), 8 & d)) return e;
      if ("object" == typeof e && e) {
        if (4 & d && e.__esModule) return e;
        if (16 & d && "function" == typeof e.then) return e;
      }
      var s = Object.create(null);
      i.r(s);
      var r = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var c = 2 & d && e; "object" == typeof c && !~a.indexOf(c); c = n(c))
        Object.getOwnPropertyNames(c).forEach((a) => (r[a] = () => e[a]));
      return (r.default = () => e), i.d(s, r), s;
    }),
    (i.d = (e, a) => {
      for (var n in a)
        i.o(a, n) &&
          !i.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: a[n] });
    }),
    (i.f = {}),
    (i.e = (e) =>
      Promise.all(Object.keys(i.f).reduce((a, n) => (i.f[n](e, a), a), []))),
    (i.u = (e) =>
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
        61: "2ace52a2c83e1f4eac1f",
        77: "5b8568a6e13d81f902f5",
        101: "0a5c1e23b95e953cc412",
        402: "91b269c6d1e69aa459ac",
        584: "99d6528047323a8237fc",
        647: "6a6f6361a7b77c5d3d47",
        698: "fa0c64b9b32b9ad93e66",
        727: "ad828a49de30d73128bb",
        744: "45bc014de67e64566b0e",
        799: "0bab01aeda88cd55c40c",
        819: "c80e7a014bbe4800f228",
        874: "cf075a882eb39895aee0",
        903: "413d3413d8b122365716",
        1012: "cd34b9e69ca63cd859f6",
        1043: "67358837711bdb3e33f1",
        1117: "7625deaecf0fc86fb963",
        1162: "53b80214e42020a53407",
        1164: "a48d9240c4c95529fe49",
        1313: "6359a4d4a44b1f91d8ce",
        1722: "6dcd9455560b5e909269",
        1805: "20075c6a2f22e2dfcebb",
        2029: "90e4c0d361b7a69c9b9d",
        2120: "8c4eb14d65368d9c0085",
        2136: "4c4f51ecd8904bbe1f8a",
        2268: "5cf56a35a13172b8e337",
        2431: "de41d0131bbeada53419",
        2443: "52386f0958af4ab3d9ed",
        2448: "3b2cfb70690b1de6b72d",
        2522: "e0fa1718ed2770cf75b0",
        2529: "1082d52fc86ee2d78a3b",
        2537: "7b048c2541ab6303ba34",
        2581: "b673b4cd50e81f8d63d0",
        2601: "2f98aa7418d3ae52fce2",
        2681: "fadf7f88b3029182b517",
        2706: "5ca0d37291438462fed6",
        2767: "b63fa5ec42ed581b90c4",
        2824: "52af124ef23ad7cc60cb",
        2844: "e08f1979e2288bbcaaba",
        2848: "d9dcf4b07f20d8c5a1b3",
        2942: "d8eea349d634dc0a305b",
        2996: "9e1da98ed617f6d584ab",
        3112: "b4ac91ea32267dc60ed7",
        3135: "b61b04b21d500e657a51",
        3174: "987ac218cffeea19cf0d",
        3185: "54c82a261d5a5262a251",
        3233: "194131c7ce52d7965a51",
        3252: "29eafb056f6fa8f5e2a4",
        3277: "bf70e26ca7becaa828bf",
        3313: "7053e2109a6754cd1cdb",
        3323: "bc4239ef55f8e284c929",
        3359: "4862b636c0a92fdc695a",
        3453: "e32038e79163bfbd5fc6",
        3557: "3daf504c4e96f1516310",
        3599: "4e421cc7cf868ca2c797",
        3634: "2a8750ed26d05667e620",
        3685: "417adc7a0da962b77143",
        3768: "6ac898c7d0a74ded39e8",
        3786: "78a5be619af3c1467462",
        3863: "57c07eed5934d519e809",
        4033: "e7069edc6831d093bda0",
        4108: "c43a09bc0304249765fb",
        4166: "8576eee08cf9ea02d189",
        4171: "d1fca05cd67000b34ad7",
        4189: "725161536ceed013d0cc",
        4199: "91ee30254a2799482461",
        4238: "768f86a0e0273ac2ec0a",
        4248: "bc2e93ac889faf551a5d",
        4297: "795649a27832b44b9969",
        4309: "7d8e775b5b935bed714f",
        4447: "950d88f1ec76d6e334a2",
        4458: "dc9c9447c67ee94c3c55",
        4535: "de99d324f7d8ec873e0c",
        4601: "eb235d16ed872d16e425",
        4682: "a3cc60a12d95e62911e7",
        4722: "b1c92914ed2ea481dc1d",
        4812: "4eda14403a7d9fbc8737",
        4823: "98eb7aac3539917218c0",
        4860: "44d789329f06a5cdb118",
        4929: "c78c2dd194b26b1337a5",
        4935: "d661e2055a3a0d767808",
        4961: "b63cd8a980584ef7640f",
        4964: "87bed0975e186ef8b2ee",
        5117: "ca024ccdfb54eadaea02",
        5257: "6a86fec6f8a660c48760",
        5414: "ff7f460141f91212cdfb",
        5438: "2bd77ef1ca75e72809cc",
        5559: "23d3c26da709a2d964d6",
        5625: "a5dcff9d3138e9dcb116",
        5676: "e276adcdee6b101cd490",
        5785: "970aa9ac171e83f4c8be",
        5849: "f9861668a1fbfcbfce1f",
        5855: "fda7dfcefb7723df2d28",
        5875: "18aeef763fd91f5c7c65",
        5925: "74ca84c08931f04b0220",
        5933: "38af3c994c6b4dc5a810",
        5948: "9005eaaedb8408f32622",
        6007: "79b2f27ad44bec8bd6d5",
        6019: "9aa85ed989e74791945e",
        6035: "0e1b7105d3c6a6a00a16",
        6087: "b1333ee5c0e005a9330f",
        6169: "15df7b5ced1f9541490a",
        6492: "c70b80c481c663e20693",
        6542: "ed43bb2b56c71ea552bd",
        6608: "4d323dfabec3d007616f",
        6693: "60444b25443b1d303b1d",
        6699: "891ccccf0a435d6103a1",
        6739: "eb7391d6a345e2d9f85f",
        6762: "25c628916335c69e861f",
        6808: "fb6bdc2c701f2ca0eddc",
        6815: "8316505b94638676ba68",
        6817: "fe1c0a7c6211479ddc50",
        6846: "72742eda0e0f9dc49c87",
        7072: "d5a75d16c8ba64588f13",
        7082: "ef551ec630dced60949c",
        7094: "2505154bdb5c77561ee7",
        7099: "9648e4263c5ea5027c18",
        7181: "364396e7717d7935a693",
        7236: "91c24513dd25392608f2",
        7241: "6739d3211b2554e40d18",
        7510: "4b40a5a33307383457af",
        7602: "c592334354ced8480e5f",
        7724: "8c6f2a95b923f88b331b",
        7762: "bdf91f8276414b5d9ed4",
        7781: "2647a917b7f8989aa3cf",
        7871: "cc1565729c91742e765b",
        7890: "0a725a224640c0247b87",
        7934: "72c94aeb0aff4f934aea",
        7942: "558ea6ab2af782489dc3",
        7951: "32d3f51f031b70ed7e21",
        7952: "2c781fab6cc8a0871941",
        7975: "c2512371d936c3423e1b",
        8001: "a978fccb5960b471e36d",
        8051: "af2bf670168b77ca1a60",
        8155: "537b1b5d52a7aa256aeb",
        8168: "a18fa5ae05883efedc6c",
        8195: "627c4d805e345ccfc60e",
        8385: "55b24ffe970528890a08",
        8389: "8f270c4dd25c48b78098",
        8399: "94e2aad1eb53066e3f09",
        8754: "780e09f3c26856e0935f",
        8767: "2f96c5a80a4927665b04",
        8774: "c16c117655edcfc1ef37",
        8794: "39a113d94e43cbc145b0",
        8960: "4612004cf9448b6e2af8",
        8974: "eebfe60009a19c00402a",
        8993: "b636f140f0365b377720",
        8994: "ad169362c6382f592c1f",
        9035: "7bd25fea5c8d91f5f1a6",
        9062: "339f73bee4ca3c9e5a86",
        9192: "7a0cdeda49babb62ad4d",
        9431: "a1f2a9670fbcdf2f8fdc",
        9568: "9a723c4371d433dc1002",
        9584: "ccb37a2660d07b601b3a",
        9603: "1a75568264c9dea28db8",
        9663: "ca5ad71d62cdc9a721e7",
        9749: "6982074c8638d20f4af2",
        9753: "70e546f5ee1e679d7c09",
        9899: "455c3cd964cb5508f466",
        9903: "ebd1041c9df508dc39bf",
        9919: "d21ec559578b5ffeac9c",
        9980: "b29dc02484c7878aa810",
      }[e]),
    (i.miniCssF = (e) =>
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
        1805: "0e842df05fff87334182",
        2136: "512bb6e57ae64e651fa4",
        2268: "3e48e452313753a6601c",
        2522: "1420249bff1f8dc1a83c",
        2529: "87424d61a42768c23968",
        3599: "37883bb918433d9a98b6",
        3863: "8e701eda9fa997d9b53a",
        4033: "3c3c0305291f3f7a80f5",
        4309: "d885e31859d50e4d4824",
        4535: "be2d8061908540c37d56",
        4601: "5eccc9cc016726ad567b",
        4935: "59890b790fbf2cc93831",
        5676: "9c25633cdeb01a1062f7",
        6699: "5da20a0c7c430416da72",
        6808: "92299797c12c2782de13",
        7762: "e3a2b8e7ea298a4cb539",
        8974: "dd21fe0ad2c8db35947c",
        9192: "096d112de0e050200498",
      }[e]),
    (i.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
    (d = {}),
    (s = "appmgmt-storeadmin:"),
    (i.l = (e, a, n, r) => {
      if (d[e]) d[e].push(a);
      else {
        var c, b;
        if (void 0 !== n)
          for (
            var o = document.getElementsByTagName("script"), f = 0;
            f < o.length;
            f++
          ) {
            var t = o[f];
            if (
              t.getAttribute("src") == e ||
              t.getAttribute("data-webpack") == s + n
            ) {
              c = t;
              break;
            }
          }
        c ||
          ((b = !0),
          ((c = document.createElement("script")).charset = "utf-8"),
          (c.timeout = 120),
          i.nc && c.setAttribute("nonce", i.nc),
          c.setAttribute("data-webpack", s + n),
          (c.src = e)),
          (d[e] = [a]);
        var l = (a, n) => {
            (c.onerror = c.onload = null), clearTimeout(h);
            var s = d[e];
            if (
              (delete d[e],
              c.parentNode && c.parentNode.removeChild(c),
              s && s.forEach((e) => e(n)),
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
          b && document.head.appendChild(c);
      }
    }),
    (i.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      var e;
      i.g.importScripts && (e = i.g.location + "");
      var a = i.g.document;
      if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
        var n = a.getElementsByTagName("script");
        if (n.length) for (var d = n.length - 1; d > -1 && !e; ) e = n[d--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (i.p = e + "../../../");
    })(),
    (() => {
      if ("undefined" != typeof document) {
        var e = (e) =>
            new Promise((a, n) => {
              var d = i.miniCssF(e),
                s = i.p + d;
              if (
                ((e, a) => {
                  for (
                    var n = document.getElementsByTagName("link"), d = 0;
                    d < n.length;
                    d++
                  ) {
                    var s =
                      (c = n[d]).getAttribute("data-href") ||
                      c.getAttribute("href");
                    if ("stylesheet" === c.rel && (s === e || s === a))
                      return c;
                  }
                  var r = document.getElementsByTagName("style");
                  for (d = 0; d < r.length; d++) {
                    var c;
                    if (
                      (s = (c = r[d]).getAttribute("data-href")) === e ||
                      s === a
                    )
                      return c;
                  }
                })(d, s)
              )
                return a();
              ((e, a, n, d, s) => {
                var r = document.createElement("link");
                (r.rel = "stylesheet"),
                  (r.type = "text/css"),
                  (r.onerror = r.onload =
                    (n) => {
                      if (((r.onerror = r.onload = null), "load" === n.type))
                        d();
                      else {
                        var c = n && ("load" === n.type ? "missing" : n.type),
                          i = (n && n.target && n.target.href) || a,
                          b = new Error(
                            "Loading CSS chunk " + e + " failed.\n(" + i + ")",
                          );
                        (b.code = "CSS_CHUNK_LOAD_FAILED"),
                          (b.type = c),
                          (b.request = i),
                          r.parentNode && r.parentNode.removeChild(r),
                          s(b);
                      }
                    }),
                  (r.href = a),
                  n
                    ? n.parentNode.insertBefore(r, n.nextSibling)
                    : document.head.appendChild(r);
              })(e, s, null, a, n);
            }),
          a = { 6700: 0 };
        i.f.miniCss = (n, d) => {
          a[n]
            ? d.push(a[n])
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
              d.push(
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
      (i.f.j = (a, n) => {
        var d = i.o(e, a) ? e[a] : void 0;
        if (0 !== d)
          if (d) n.push(d[2]);
          else if (/^(6700|9192)$/.test(a)) e[a] = 0;
          else {
            var s = new Promise((n, s) => (d = e[a] = [n, s]));
            n.push((d[2] = s));
            var r = i.p + i.u(a),
              c = new Error();
            i.l(
              r,
              (n) => {
                if (i.o(e, a) && (0 !== (d = e[a]) && (e[a] = void 0), d)) {
                  var s = n && ("load" === n.type ? "missing" : n.type),
                    r = n && n.target && n.target.src;
                  (c.message =
                    "Loading chunk " + a + " failed.\n(" + s + ": " + r + ")"),
                    (c.name = "ChunkLoadError"),
                    (c.type = s),
                    (c.request = r),
                    d[1](c);
                }
              },
              "chunk-" + a,
              a,
            );
          }
      }),
        (i.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var d,
            s,
            [r, c, b] = n,
            o = 0;
          if (r.some((a) => 0 !== e[a])) {
            for (d in c) i.o(c, d) && (i.m[d] = c[d]);
            if (b) var f = b(i);
          }
          for (a && a(n); o < r.length; o++)
            (s = r[o]), i.o(e, s) && e[s] && e[s][0](), (e[s] = 0);
          return i.O(f);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
