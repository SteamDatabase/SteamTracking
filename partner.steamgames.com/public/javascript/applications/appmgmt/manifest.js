/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8617789";
(() => {
  "use strict";
  var e,
    a,
    n,
    s,
    c,
    d = {},
    r = {};
  function i(e) {
    var a = r[e];
    if (void 0 !== a) return a.exports;
    var n = (r[e] = { id: e, loaded: !1, exports: {} });
    return d[e].call(n.exports, n, n.exports, i), (n.loaded = !0), n.exports;
  }
  (i.m = d),
    (e = []),
    (i.O = (a, n, s, c) => {
      if (!n) {
        var d = 1 / 0;
        for (f = 0; f < e.length; f++) {
          for (var [n, s, c] = e[f], r = !0, b = 0; b < n.length; b++)
            (!1 & c || d >= c) && Object.keys(i.O).every((e) => i.O[e](n[b]))
              ? n.splice(b--, 1)
              : ((r = !1), c < d && (d = c));
          if (r) {
            e.splice(f--, 1);
            var o = s();
            void 0 !== o && (a = o);
          }
        }
        return a;
      }
      c = c || 0;
      for (var f = e.length; f > 0 && e[f - 1][2] > c; f--) e[f] = e[f - 1];
      e[f] = [n, s, c];
    }),
    (i.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return i.d(a, { a }), a;
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (i.t = function (e, s) {
      if ((1 & s && (e = this(e)), 8 & s)) return e;
      if ("object" == typeof e && e) {
        if (4 & s && e.__esModule) return e;
        if (16 & s && "function" == typeof e.then) return e;
      }
      var c = Object.create(null);
      i.r(c);
      var d = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var r = 2 & s && e; "object" == typeof r && !~a.indexOf(r); r = n(r))
        Object.getOwnPropertyNames(r).forEach((a) => (d[a] = () => e[a]));
      return (d.default = () => e), i.d(c, d), c;
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
        61: "253138acde985b313d59",
        77: "0eb317255bae660e1d9c",
        101: "904d61d5caaeac55e328",
        402: "91b269c6d1e69aa459ac",
        584: "40e666228f2a4dcbe5ce",
        647: "d1be2f07b8e7d0504003",
        698: "dfffb3f99668b3a5a78e",
        727: "ff13821c9b362a324b97",
        744: "45bc014de67e64566b0e",
        799: "3d7716d0612f9acbce69",
        819: "e9d9ffdbfd6400d649f3",
        874: "dc47cd9ab8bd91d00bea",
        903: "1dff37fb233ab9b53d21",
        1012: "01f5c01a76306b0de2f6",
        1043: "f6d0d18b365e3c7eb7d5",
        1117: "70d346290a02cb90fe9c",
        1162: "a01e15ccd2faddc4ca92",
        1164: "49d82b78a1ef296fa0ea",
        1313: "b2a22d04f7f4e57cb08a",
        1722: "537fdadfee84f8123221",
        1805: "81207712d07d32ede10f",
        2029: "90e4c0d361b7a69c9b9d",
        2120: "8c4eb14d65368d9c0085",
        2136: "443d2e7dc4dbd3ff55a8",
        2268: "5cf56a35a13172b8e337",
        2431: "de41d0131bbeada53419",
        2443: "20629613d34e5e9eec29",
        2448: "f357248136ec54b029f2",
        2522: "e0fa1718ed2770cf75b0",
        2529: "1082d52fc86ee2d78a3b",
        2537: "fe9b278e7bbc9374d679",
        2581: "8a8ea21977a32ec51540",
        2601: "60fd870cacc6924fa8b2",
        2681: "9fc49f12ef27b2572d2d",
        2706: "5ca0d37291438462fed6",
        2767: "d369b3cc8210ac305f35",
        2824: "80da28884fddd144c960",
        2844: "0c6a3eb8fffe4df405a3",
        2848: "192ad2aa2b330c787221",
        2942: "ae2ede74a6fa693f68cf",
        2996: "d4b4d48d6466719241ee",
        3112: "1ff133d72fb762ebf442",
        3135: "fcad489e3b0347f444e3",
        3174: "6b0a6d5ca847ccd0baf3",
        3185: "72b1df3be70219c1a136",
        3233: "194131c7ce52d7965a51",
        3252: "76f43b334f2ee715eef7",
        3277: "420d23740ea748922ac4",
        3313: "90d6fa0e6ea5cc13ef89",
        3323: "1ceda80de119decb64d2",
        3359: "c5807e52471cff543a10",
        3453: "8183161cd77b1adc2373",
        3557: "3454e6f0859db84958ff",
        3599: "a643aeb4a45c4da46e08",
        3634: "75bb13291cf51c5ddaaa",
        3685: "f6680adc15183cd7421e",
        3768: "a621458bfc06daa618a6",
        3786: "78a5be619af3c1467462",
        3863: "57c07eed5934d519e809",
        4033: "3d05ba73ee5dd32d4fc6",
        4108: "22aaa3dc0be031bbf853",
        4166: "558e21dfcfa2c964a461",
        4171: "8e7f30894c628802ad7d",
        4189: "596bf850ba0ec500f8ec",
        4199: "5c63ca1e3284c6485a84",
        4238: "ecec316e2f458a95381a",
        4248: "d165125dc7ad7e8cc973",
        4297: "b69cad25903e6f12ff7f",
        4309: "7d8e775b5b935bed714f",
        4447: "d474b8495d6131bad959",
        4458: "d3aa56795bfc2745c125",
        4535: "de99d324f7d8ec873e0c",
        4601: "833af83e49e0fea7e8b5",
        4682: "e6b8dc4de46a2b404ed7",
        4722: "c3585184030c54f062e1",
        4812: "8ab59de6836a9713fa88",
        4823: "b8d0b9beb0170b4e566a",
        4860: "d107e86bdecd9188cabf",
        4929: "f747a7a62fe77196d99d",
        4935: "d661e2055a3a0d767808",
        4961: "230a21034a4fd43ff327",
        4964: "063341a37aff36970bec",
        5117: "eda174740ea1a7962b56",
        5257: "89033d2b67fb70e65cab",
        5414: "45b8a1c02429723bb738",
        5438: "60a00c19dc07a72284a4",
        5559: "6fa74a16edf8c001dba5",
        5625: "ff3e908eaddb6d6681e2",
        5676: "762e0f0a04fcfdace89b",
        5785: "451c1e3fb1a5d0415ffb",
        5849: "ebb310f5438d12349fa4",
        5855: "372ed6688e5a723295e0",
        5875: "3048fef86f87cac2fb7b",
        5925: "ce567fe63fffe4e1f9e6",
        5933: "b0d4cd300c268fc6276d",
        5948: "a386b51053f2319a62df",
        6007: "a0cdbe40dc5bc3c6a7aa",
        6019: "0c3f696f75271beb8f8b",
        6035: "102c2162107bd5d4e589",
        6087: "2dcf2528d0f1ed816dc5",
        6169: "497abd141eeaf6618876",
        6492: "102693084a40b5d98f35",
        6542: "0da2a77bb69a3ebf05f2",
        6608: "8f466f362226a212a78f",
        6693: "d0bb201b1c273dba93fb",
        6699: "891ccccf0a435d6103a1",
        6739: "eb7391d6a345e2d9f85f",
        6762: "25c628916335c69e861f",
        6808: "9d294500025572002d51",
        6815: "1d6256503ebef036ed3b",
        6817: "58cecdacbab8d0b3514f",
        6846: "43bc4e044f9e7efcc915",
        7072: "53f238796e7529658097",
        7082: "7d9ed1f54cbc85ff8828",
        7094: "79b756f9a01cabd48c55",
        7099: "91334a071229b8da9091",
        7181: "ca216c9298714ffe3dd9",
        7236: "43c4b94f0b328849a45c",
        7241: "0f4a9605e02cb9b43f72",
        7510: "4b40a5a33307383457af",
        7602: "d90cac7d1616642fb2c9",
        7724: "a59257906b65e14ec1e1",
        7762: "cdea72f519097018e3d2",
        7781: "4119e5d9445a8f65eea0",
        7871: "215a72afaf58fd6c1779",
        7890: "b23167b1f3f011f171bf",
        7934: "87c22a4fa6493de8966c",
        7942: "b8f8b984370dde470c36",
        7951: "6760f9c08db6aeeb0ae8",
        7952: "ca382d74349303a81799",
        7975: "8b5aabb3bdcd16122ccd",
        8001: "aca79ba61a4db6180ad9",
        8051: "9c85a7eaedd50901cb3f",
        8155: "239d770caa3e9254ec2d",
        8168: "f40a81ebd97441d3b0d9",
        8195: "627c4d805e345ccfc60e",
        8385: "c702e32e0b4ebea5407a",
        8389: "992236d68dd29bdce393",
        8399: "665af1edf46e36cb1954",
        8754: "4647afcef610bd1f97c1",
        8767: "ea2cc8b19299dcc3677b",
        8774: "69189f96394295ea0cae",
        8794: "39a113d94e43cbc145b0",
        8960: "9015abb8c976bc6d02e7",
        8974: "31fb8c12bdac66754472",
        8993: "9a9c3ed832b8bb25a3fa",
        8994: "52766935268b1e8a198f",
        9035: "7bd25fea5c8d91f5f1a6",
        9062: "e57be6e211f66f914c4d",
        9192: "7a0cdeda49babb62ad4d",
        9431: "c0f2b6107021879d1c05",
        9568: "e277fe27dccec0804282",
        9584: "ccb37a2660d07b601b3a",
        9603: "49e0bc7c8d6db473a591",
        9663: "7c3047c7d2c0e8eeb801",
        9749: "6982074c8638d20f4af2",
        9753: "56f46f30f896b24ab4b7",
        9899: "8b2fbd5db07b7f122aba",
        9903: "cbda69dcc8421dfac0ce",
        9919: "d21ec559578b5ffeac9c",
        9980: "804d25f9d2e14bd5705e",
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
        1805: "3f1c54215d03b9ef1730",
        2136: "6c01f60b490c73f1454d",
        2268: "3e48e452313753a6601c",
        2522: "3612540e742afba0f5e7",
        2529: "87424d61a42768c23968",
        3599: "37883bb918433d9a98b6",
        3863: "8e701eda9fa997d9b53a",
        4033: "d0b544d70e832047569e",
        4309: "d885e31859d50e4d4824",
        4535: "be2d8061908540c37d56",
        4601: "72ddf9f1a147f2df42ec",
        4935: "59890b790fbf2cc93831",
        5676: "ae1ea649e90d19c92519",
        6699: "b051b9fdf60218b679c6",
        6808: "92299797c12c2782de13",
        7762: "e3a2b8e7ea298a4cb539",
        8974: "dd21fe0ad2c8db35947c",
        9192: "2960968d3708947d3c90",
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
    (s = {}),
    (c = "appmgmt-storeadmin:"),
    (i.l = (e, a, n, d) => {
      if (s[e]) s[e].push(a);
      else {
        var r, b;
        if (void 0 !== n)
          for (
            var o = document.getElementsByTagName("script"), f = 0;
            f < o.length;
            f++
          ) {
            var t = o[f];
            if (
              t.getAttribute("src") == e ||
              t.getAttribute("data-webpack") == c + n
            ) {
              r = t;
              break;
            }
          }
        r ||
          ((b = !0),
          ((r = document.createElement("script")).charset = "utf-8"),
          (r.timeout = 120),
          i.nc && r.setAttribute("nonce", i.nc),
          r.setAttribute("data-webpack", c + n),
          (r.src = e)),
          (s[e] = [a]);
        var l = (a, n) => {
            (r.onerror = r.onload = null), clearTimeout(h);
            var c = s[e];
            if (
              (delete s[e],
              r.parentNode && r.parentNode.removeChild(r),
              c && c.forEach((e) => e(n)),
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
        (i.p = e + "../../../");
    })(),
    (() => {
      if ("undefined" != typeof document) {
        var e = (e) =>
            new Promise((a, n) => {
              var s = i.miniCssF(e),
                c = i.p + s;
              if (
                ((e, a) => {
                  for (
                    var n = document.getElementsByTagName("link"), s = 0;
                    s < n.length;
                    s++
                  ) {
                    var c =
                      (r = n[s]).getAttribute("data-href") ||
                      r.getAttribute("href");
                    if ("stylesheet" === r.rel && (c === e || c === a))
                      return r;
                  }
                  var d = document.getElementsByTagName("style");
                  for (s = 0; s < d.length; s++) {
                    var r;
                    if (
                      (c = (r = d[s]).getAttribute("data-href")) === e ||
                      c === a
                    )
                      return r;
                  }
                })(s, c)
              )
                return a();
              ((e, a, n, s, c) => {
                var d = document.createElement("link");
                (d.rel = "stylesheet"),
                  (d.type = "text/css"),
                  (d.onerror = d.onload =
                    (n) => {
                      if (((d.onerror = d.onload = null), "load" === n.type))
                        s();
                      else {
                        var r = n && ("load" === n.type ? "missing" : n.type),
                          i = (n && n.target && n.target.href) || a,
                          b = new Error(
                            "Loading CSS chunk " + e + " failed.\n(" + i + ")",
                          );
                        (b.code = "CSS_CHUNK_LOAD_FAILED"),
                          (b.type = r),
                          (b.request = i),
                          d.parentNode && d.parentNode.removeChild(d),
                          c(b);
                      }
                    }),
                  (d.href = a),
                  n
                    ? n.parentNode.insertBefore(d, n.nextSibling)
                    : document.head.appendChild(d);
              })(e, c, null, a, n);
            }),
          a = { 6700: 0 };
        i.f.miniCss = (n, s) => {
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
      (i.f.j = (a, n) => {
        var s = i.o(e, a) ? e[a] : void 0;
        if (0 !== s)
          if (s) n.push(s[2]);
          else if (/^(6700|9192)$/.test(a)) e[a] = 0;
          else {
            var c = new Promise((n, c) => (s = e[a] = [n, c]));
            n.push((s[2] = c));
            var d = i.p + i.u(a),
              r = new Error();
            i.l(
              d,
              (n) => {
                if (i.o(e, a) && (0 !== (s = e[a]) && (e[a] = void 0), s)) {
                  var c = n && ("load" === n.type ? "missing" : n.type),
                    d = n && n.target && n.target.src;
                  (r.message =
                    "Loading chunk " + a + " failed.\n(" + c + ": " + d + ")"),
                    (r.name = "ChunkLoadError"),
                    (r.type = c),
                    (r.request = d),
                    s[1](r);
                }
              },
              "chunk-" + a,
              a,
            );
          }
      }),
        (i.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var s,
            c,
            [d, r, b] = n,
            o = 0;
          if (d.some((a) => 0 !== e[a])) {
            for (s in r) i.o(r, s) && (i.m[s] = r[s]);
            if (b) var f = b(i);
          }
          for (a && a(n); o < d.length; o++)
            (c = d[o]), i.o(e, c) && e[c] && e[c][0](), (e[c] = 0);
          return i.O(f);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
