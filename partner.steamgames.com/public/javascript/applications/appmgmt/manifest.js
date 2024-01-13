/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8630793";
(() => {
  "use strict";
  var e,
    a,
    n,
    s,
    d,
    c = {},
    r = {};
  function i(e) {
    var a = r[e];
    if (void 0 !== a) return a.exports;
    var n = (r[e] = { id: e, loaded: !1, exports: {} });
    return c[e].call(n.exports, n, n.exports, i), (n.loaded = !0), n.exports;
  }
  (i.m = c),
    (e = []),
    (i.O = (a, n, s, d) => {
      if (!n) {
        var c = 1 / 0;
        for (b = 0; b < e.length; b++) {
          for (var [n, s, d] = e[b], r = !0, f = 0; f < n.length; f++)
            (!1 & d || c >= d) && Object.keys(i.O).every((e) => i.O[e](n[f]))
              ? n.splice(f--, 1)
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
      var d = Object.create(null);
      i.r(d);
      var c = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var r = 2 & s && e; "object" == typeof r && !~a.indexOf(r); r = n(r))
        Object.getOwnPropertyNames(r).forEach((a) => (c[a] = () => e[a]));
      return (c.default = () => e), i.d(d, c), d;
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
        61: "7e76158dc368f3fa9fd0",
        77: "5b8568a6e13d81f902f5",
        101: "7deeb5661479252f47ba",
        402: "91b269c6d1e69aa459ac",
        584: "5170b2b148c2d11a75a3",
        647: "ddbabddba41f8c5e9d5a",
        698: "7b4402c1f390489e2898",
        727: "769ab3d7696861f8c7e0",
        744: "45bc014de67e64566b0e",
        799: "fde510c9e3441ca3ca87",
        819: "c80e7a014bbe4800f228",
        874: "cf075a882eb39895aee0",
        903: "413d3413d8b122365716",
        1012: "e3c4d071f0f18e3a506f",
        1043: "1b3e471505ab94d455d9",
        1117: "c0504c4c399143b404f1",
        1162: "53b80214e42020a53407",
        1164: "a48d9240c4c95529fe49",
        1313: "a97e9a1e91e93305b371",
        1722: "b41de28b2494e9145e5f",
        1805: "8cfeed149947c0699fce",
        2029: "90e4c0d361b7a69c9b9d",
        2120: "8c4eb14d65368d9c0085",
        2136: "b35e12614bd3ce46a2ef",
        2268: "5cf56a35a13172b8e337",
        2431: "de41d0131bbeada53419",
        2443: "52386f0958af4ab3d9ed",
        2448: "3b2cfb70690b1de6b72d",
        2522: "e0fa1718ed2770cf75b0",
        2529: "1082d52fc86ee2d78a3b",
        2537: "7b048c2541ab6303ba34",
        2581: "b673b4cd50e81f8d63d0",
        2601: "2f98aa7418d3ae52fce2",
        2681: "fec8a48081b44d530eab",
        2706: "5ca0d37291438462fed6",
        2767: "9b050525b4b54ef8f6df",
        2824: "52af124ef23ad7cc60cb",
        2844: "e08f1979e2288bbcaaba",
        2848: "b6e4885a9bb1d17716d0",
        2942: "34858d4b86cbaf10420b",
        2996: "d4b4d48d6466719241ee",
        3112: "b4ac91ea32267dc60ed7",
        3135: "b61b04b21d500e657a51",
        3174: "ec9616f3fa4912ab5064",
        3185: "b60f376c63f07dec39dd",
        3233: "194131c7ce52d7965a51",
        3252: "29eafb056f6fa8f5e2a4",
        3277: "28793224342cead8fb7e",
        3313: "7cb4a00defd95b215ea2",
        3323: "f4c548d694458b18f335",
        3359: "b275f22a591d7a360913",
        3453: "e32038e79163bfbd5fc6",
        3557: "3daf504c4e96f1516310",
        3599: "4e421cc7cf868ca2c797",
        3634: "6dfb3eb38dd85a6ccc2a",
        3685: "8d78d08a1d5831f20990",
        3768: "9aa54067d688eb8ce085",
        3786: "78a5be619af3c1467462",
        3863: "57c07eed5934d519e809",
        4033: "ee05a651bc5ae92e5fe7",
        4108: "c43a09bc0304249765fb",
        4166: "7aa215448c453c138543",
        4171: "d1fca05cd67000b34ad7",
        4189: "725161536ceed013d0cc",
        4199: "91ee30254a2799482461",
        4238: "768f86a0e0273ac2ec0a",
        4248: "c8f3b190e7c0e10bf082",
        4297: "795649a27832b44b9969",
        4309: "7d8e775b5b935bed714f",
        4447: "79eb97c42d992e9dddf0",
        4458: "dc9c9447c67ee94c3c55",
        4535: "de99d324f7d8ec873e0c",
        4601: "833af83e49e0fea7e8b5",
        4682: "a0b9fe1d12988985dd27",
        4722: "5f9c34f9e2bf529f7ed4",
        4812: "4eda14403a7d9fbc8737",
        4823: "98eb7aac3539917218c0",
        4860: "67c88b395274c342e99b",
        4929: "c78c2dd194b26b1337a5",
        4935: "d661e2055a3a0d767808",
        4961: "fad73e383a9759a05c48",
        4964: "87bed0975e186ef8b2ee",
        5117: "66f8bfe4475537eca9d2",
        5257: "6a86fec6f8a660c48760",
        5414: "ff7f460141f91212cdfb",
        5438: "2bd77ef1ca75e72809cc",
        5559: "23d3c26da709a2d964d6",
        5625: "a5dcff9d3138e9dcb116",
        5676: "d1b1a8cd82a251ee4b6e",
        5785: "451c1e3fb1a5d0415ffb",
        5849: "edcc553176a00d921cd3",
        5855: "fda7dfcefb7723df2d28",
        5875: "f4f075bbc3a408a03151",
        5925: "74ca84c08931f04b0220",
        5933: "38af3c994c6b4dc5a810",
        5948: "660b2dcb9eeac678cb15",
        6007: "79b2f27ad44bec8bd6d5",
        6019: "9aa85ed989e74791945e",
        6035: "0e1b7105d3c6a6a00a16",
        6087: "24bde7e52cf77cb3ea6a",
        6169: "15df7b5ced1f9541490a",
        6492: "c70b80c481c663e20693",
        6542: "ed43bb2b56c71ea552bd",
        6608: "ce35eca2c61963fc189d",
        6693: "60444b25443b1d303b1d",
        6699: "891ccccf0a435d6103a1",
        6739: "eb7391d6a345e2d9f85f",
        6762: "25c628916335c69e861f",
        6808: "7738138511883a9392e0",
        6815: "99e22e070a2a81441983",
        6817: "d5da7cc95a932b5c1041",
        6846: "72742eda0e0f9dc49c87",
        7072: "fa9bec43cd069bb88032",
        7082: "ef551ec630dced60949c",
        7094: "2505154bdb5c77561ee7",
        7099: "4184389fd8a2a1385c24",
        7181: "5ff8683e553c815e3cb8",
        7236: "0b7e78a3640f98eec1fb",
        7241: "0f4a9605e02cb9b43f72",
        7510: "4b40a5a33307383457af",
        7602: "3e7275e6606a3efe2bc6",
        7724: "8c6f2a95b923f88b331b",
        7762: "cdea72f519097018e3d2",
        7781: "2647a917b7f8989aa3cf",
        7871: "cc1565729c91742e765b",
        7890: "602a45ef71590cc684d8",
        7934: "3fa06af4ce2a04ee6984",
        7942: "558ea6ab2af782489dc3",
        7951: "9f430a79b4b772b6651a",
        7952: "71b9e68585203ca5f4bd",
        7975: "c2512371d936c3423e1b",
        8001: "a978fccb5960b471e36d",
        8051: "cee0571eb5eee38dd5d2",
        8155: "0c6f11d521446a2255e8",
        8168: "9d04dd908f9c89aae469",
        8195: "627c4d805e345ccfc60e",
        8385: "55b24ffe970528890a08",
        8389: "992236d68dd29bdce393",
        8399: "94e2aad1eb53066e3f09",
        8754: "780e09f3c26856e0935f",
        8767: "330140a7fad7387d00ed",
        8774: "c16c117655edcfc1ef37",
        8794: "39a113d94e43cbc145b0",
        8960: "4612004cf9448b6e2af8",
        8974: "31fb8c12bdac66754472",
        8993: "b636f140f0365b377720",
        8994: "ad169362c6382f592c1f",
        9035: "7bd25fea5c8d91f5f1a6",
        9062: "339f73bee4ca3c9e5a86",
        9192: "7a0cdeda49babb62ad4d",
        9431: "a6beb6037db4e05bd128",
        9568: "5864c7fa1825dd28c679",
        9584: "ccb37a2660d07b601b3a",
        9603: "c868b14f396aac47b601",
        9663: "1e939280b66a55e56c5a",
        9749: "6982074c8638d20f4af2",
        9753: "70e546f5ee1e679d7c09",
        9899: "455c3cd964cb5508f466",
        9903: "ebd1041c9df508dc39bf",
        9919: "d21ec559578b5ffeac9c",
        9980: "870c77c0046a8a4840b5",
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
        1805: "c7a942275f9ca906c3a4",
        2136: "d471156263a597723e04",
        2268: "3e48e452313753a6601c",
        2522: "3612540e742afba0f5e7",
        2529: "87424d61a42768c23968",
        3599: "37883bb918433d9a98b6",
        3863: "8e701eda9fa997d9b53a",
        4033: "eebb9704d07dc9b1132c",
        4309: "d885e31859d50e4d4824",
        4535: "be2d8061908540c37d56",
        4601: "72ddf9f1a147f2df42ec",
        4935: "59890b790fbf2cc93831",
        5676: "9c25633cdeb01a1062f7",
        6699: "5da20a0c7c430416da72",
        6808: "92299797c12c2782de13",
        7762: "e3a2b8e7ea298a4cb539",
        8974: "dd21fe0ad2c8db35947c",
        9192: "7a884934a032ef1f7fc5",
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
    (d = "appmgmt-storeadmin:"),
    (i.l = (e, a, n, c) => {
      if (s[e]) s[e].push(a);
      else {
        var r, f;
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
          ((f = !0),
          ((r = document.createElement("script")).charset = "utf-8"),
          (r.timeout = 120),
          i.nc && r.setAttribute("nonce", i.nc),
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
          f && document.head.appendChild(r);
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
                d = i.p + s;
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
                        var r = n && ("load" === n.type ? "missing" : n.type),
                          i = (n && n.target && n.target.href) || a,
                          f = new Error(
                            "Loading CSS chunk " + e + " failed.\n(" + i + ")",
                          );
                        (f.code = "CSS_CHUNK_LOAD_FAILED"),
                          (f.type = r),
                          (f.request = i),
                          c.parentNode && c.parentNode.removeChild(c),
                          d(f);
                      }
                    }),
                  (c.href = a),
                  n
                    ? n.parentNode.insertBefore(c, n.nextSibling)
                    : document.head.appendChild(c);
              })(e, d, null, a, n);
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
            var d = new Promise((n, d) => (s = e[a] = [n, d]));
            n.push((s[2] = d));
            var c = i.p + i.u(a),
              r = new Error();
            i.l(
              c,
              (n) => {
                if (i.o(e, a) && (0 !== (s = e[a]) && (e[a] = void 0), s)) {
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
        (i.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var s,
            d,
            [c, r, f] = n,
            o = 0;
          if (c.some((a) => 0 !== e[a])) {
            for (s in r) i.o(r, s) && (i.m[s] = r[s]);
            if (f) var b = f(i);
          }
          for (a && a(n); o < c.length; o++)
            (d = c[o]), i.o(e, d) && e[d] && e[d][0](), (e[d] = 0);
          return i.O(b);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
