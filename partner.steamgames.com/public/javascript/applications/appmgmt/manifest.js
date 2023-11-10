/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8484928";
(() => {
  "use strict";
  var e,
    a,
    n,
    s,
    r,
    d,
    c,
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
    (o.O = (a, n, s, r) => {
      if (!n) {
        var d = 1 / 0;
        for (t = 0; t < e.length; t++) {
          for (var [n, s, r] = e[t], c = !0, i = 0; i < n.length; i++)
            (!1 & r || d >= r) && Object.keys(o.O).every((e) => o.O[e](n[i]))
              ? n.splice(i--, 1)
              : ((c = !1), r < d && (d = r));
          if (c) {
            e.splice(t--, 1);
            var f = s();
            void 0 !== f && (a = f);
          }
        }
        return a;
      }
      r = r || 0;
      for (var t = e.length; t > 0 && e[t - 1][2] > r; t--) e[t] = e[t - 1];
      e[t] = [n, s, r];
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
      var r = Object.create(null);
      o.r(r);
      var d = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var c = 2 & s && e; "object" == typeof c && !~a.indexOf(c); c = n(c))
        Object.getOwnPropertyNames(c).forEach((a) => (d[a] = () => e[a]));
      return (d.default = () => e), o.d(r, d), r;
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
        61: "0f95349884bfe457b103",
        77: "9fb52cc6092523e53b51",
        101: "eb008c5ef2f93f3bb22e",
        402: "a07b350b6b47714048b1",
        584: "f39db9273a3f72f3c32e",
        647: "7d70ca4977996de7bfd3",
        698: "985ed9b8bce3870a3614",
        727: "0182023cf3f5313e8bd6",
        744: "eb10f131b5a56c8c2d3b",
        799: "d24650e56e0073fdb879",
        819: "b50a42ce377a87047fb8",
        874: "4e3ce49314102df0f4a3",
        903: "ca9449ca175b9bc6b966",
        1012: "99de6102df0f85be6696",
        1043: "6479cedffa63fc105156",
        1117: "a73504ab03abfb5a1873",
        1162: "c3f5685b13b18e572196",
        1164: "f6141558c2a52cf51452",
        1313: "833cc725e6c79c18a0d4",
        1722: "a9b7fdbc0e353074dc35",
        1805: "e0635a78a4d202f0dbf3",
        2029: "a212dc179239241192fc",
        2120: "e02f02063dada506965c",
        2136: "4349a685b3462eee9ce0",
        2268: "5fd88cc87b51b0f4b9d7",
        2431: "145183afb5a012b6f5f7",
        2443: "7b42bc31df011b45a2d1",
        2448: "114487fb8ad79d93bc8c",
        2522: "b5f229b037ff2265e4df",
        2529: "df137be8312b887b3125",
        2537: "60122fc07205d051188b",
        2581: "5d4acfbfe8d128f10750",
        2601: "566edca03484f406cbf5",
        2681: "e1b377b63bd6713f81d7",
        2706: "a69e9e43f4632f138c8f",
        2767: "3b46fd589bce5ccd5b6b",
        2824: "b05db549f9c36c29a475",
        2844: "39d8bf62f282b1fdbfd4",
        2848: "578b130c5a3289e6cbb2",
        2942: "9154c28c030f265db7ac",
        2996: "40e87a20fdfef9828c8a",
        3112: "29edb405e5f95a85e071",
        3135: "056e019d3370451bb38f",
        3174: "162b159b6863c9650cbd",
        3185: "5d3f7cbeaf8d97fabcda",
        3233: "330aebbc07274af22a66",
        3252: "d7c667be2a17b4b768c0",
        3277: "f9ed6a8316ba5edcb3d4",
        3313: "2db00c9be99c1b46088a",
        3323: "dba5b06e72077f9d2454",
        3359: "66cd822c67e13c6bbb2b",
        3453: "0aa76c397fbd91e95d87",
        3557: "3b446526c6d27b5e4d46",
        3599: "59233fd44c804be31456",
        3634: "9ff1160292126c989413",
        3685: "86b3ede331061caea897",
        3768: "3d75adbefaaf59757a3d",
        3786: "6a9132c46aa8d78e5230",
        4033: "2db1b31ef590f39f8901",
        4108: "da78ea57e8e6dbea0ec2",
        4166: "5c44125e916a00734d0a",
        4171: "5c20e0e36380516858bb",
        4189: "5fdac00409d8ed9e74fd",
        4199: "0953d262d7d2cba2ca1f",
        4238: "1c6143dcf871c54f7833",
        4248: "6b130dcbe92db4a8296b",
        4297: "46c5188d80e1700db5e5",
        4309: "3a67b6c4de9156577a5b",
        4447: "a72ffb4fc996c31cb306",
        4458: "6e5fffb47d12bd468bf0",
        4535: "47b75cc853c9bb4e287b",
        4601: "b6642465e8a8494d6040",
        4682: "1b585350b044539bf455",
        4722: "435bfcf19c4b3bf63789",
        4812: "11411ee6454c880f2088",
        4823: "6d4f2fea932c5e426878",
        4860: "23143b618e23b90942a1",
        4929: "90453f550424f367c751",
        4935: "5d911a60ebf73ee91077",
        4961: "671fe16c905d3cd5c796",
        4964: "54efb220ce6ac7642f02",
        5117: "4ff9f31c97ba273599fd",
        5257: "1e9a43dbf2ee53e3b4c1",
        5414: "334fa6a7c1d041ca3d6c",
        5438: "de294e6a88fab69dece7",
        5559: "e58097ce2399920708a9",
        5625: "8b5d32831f0c52f1e16d",
        5676: "589d79e2d273584b571f",
        5785: "e7c52fce246dff083061",
        5849: "bbbda7bde895d350dcea",
        5855: "5a79220847ea16fb2251",
        5875: "8ce53f37d615df1a38bb",
        5925: "24f9387410750c739c17",
        5933: "cd726107caaf13bdc67a",
        5948: "1e2a78055ad805fc3caf",
        6007: "6bee0c159600852777f1",
        6019: "86ae1d38d2c232eba4cb",
        6035: "2167519dc120a8f5b363",
        6087: "6b80f36882117b3a6c2b",
        6169: "34b3cead7035056c2ec4",
        6492: "de7b787233a27597c84f",
        6542: "e187e9593162e61fedff",
        6608: "186a6548b05a1d5f5785",
        6693: "e0639530a4970fc44be3",
        6699: "2b2668585893837c21e0",
        6739: "723c5b0ae943c792924a",
        6762: "f1365e47a0cd0fc007ab",
        6808: "583059e1550d45cd3091",
        6815: "44362d8ea3d871bbde8f",
        6817: "4518a68ed253539ad967",
        6846: "91ce799563e659d38188",
        7072: "1fb4205f641058ede5dc",
        7082: "0a3883c171314ac4f506",
        7094: "341ef1ca4adf47de4175",
        7099: "39b81440eb42c07f91b8",
        7181: "dc15a3c3625a34162c8e",
        7236: "70bd90e86e749b03ae08",
        7241: "8c5cbaae17fa87c9a4a1",
        7510: "16d66769d4552f4a84c7",
        7602: "726ad560accd67648cd4",
        7724: "f7df9304ec3faba98def",
        7762: "9d7bf86900c8749d9742",
        7781: "cd05bd0bdc9effb7385f",
        7871: "ab7a7f0279231f88ba50",
        7890: "495e2e5b63639c8d8439",
        7934: "3225864101960a2bc8fa",
        7942: "80323e3c4dbb542b546a",
        7951: "50f8143939a42601ce79",
        7952: "5a649608cb0a18301329",
        7975: "be00c6458314d56828e8",
        8001: "aaabd9cb62d16d3f8472",
        8051: "b508e5b3442e0e789be5",
        8155: "5b5a22f585393757815d",
        8168: "9a23fa9f374bce48cfc2",
        8195: "afc1ea3c6cd4e250b3fc",
        8385: "2b8df0b73c881d349b6f",
        8389: "aa1f7f4a65af131e9b60",
        8399: "fc279e43fd4c1db9a44e",
        8754: "2083e11233cc334cb43e",
        8767: "9a45f3746266fbae2052",
        8774: "3b6d945f4c2441ae680a",
        8794: "d491c17738d061a2dbdd",
        8960: "04e58e3d9562a450af9d",
        8974: "b6b0732349a45f01032c",
        8993: "dacf0cc58d3d41478f3c",
        8994: "2148db1be59468c22e0f",
        9035: "9b49528f8f6672d4c141",
        9062: "8709d9e685de92fbcd14",
        9192: "a4579d833324241f4657",
        9431: "13375288c7f84fdd4385",
        9568: "927f226b3809399a3c47",
        9584: "dbf32ee66244233ff80b",
        9603: "249d35d58d7449b68462",
        9663: "c42f186cf1a6578298b6",
        9749: "7b9be0ea8c5b28598422",
        9753: "ac0544438c07471fe0e9",
        9899: "e4e017070b15fb5c2023",
        9903: "cf62f710d3b29d88fa53",
        9919: "874525ecdd1d0ef57e63",
        9980: "400b7d2bb5b5ac71559b",
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
        1805: "7435be2a1f107b0f5231",
        2136: "456859ee17507f7f9234",
        2268: "e19d6dbf0f6ae66012be",
        2522: "3a52d13476b669588bd8",
        2529: "074d37fe9cc54cb857a5",
        3599: "37883bb918433d9a98b6",
        4033: "903dcd11d4a31edaa885",
        4309: "f38ba98b44af4fc0288a",
        4535: "be2d8061908540c37d56",
        4601: "da717847514be2f17d39",
        4935: "59890b790fbf2cc93831",
        5676: "d0287df8605cf5ca6ca3",
        6699: "3a19f92cb04178af6cdb",
        6808: "92299797c12c2782de13",
        7762: "d61f93a707d7e363fa5a",
        8974: "31a9b03bbb0e20fcf04e",
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
    (r = "appmgmt-storeadmin:"),
    (o.l = (e, a, n, d) => {
      if (s[e]) s[e].push(a);
      else {
        var c, i;
        if (void 0 !== n)
          for (
            var f = document.getElementsByTagName("script"), t = 0;
            t < f.length;
            t++
          ) {
            var b = f[t];
            if (
              b.getAttribute("src") == e ||
              b.getAttribute("data-webpack") == r + n
            ) {
              c = b;
              break;
            }
          }
        c ||
          ((i = !0),
          ((c = document.createElement("script")).charset = "utf-8"),
          (c.timeout = 120),
          o.nc && c.setAttribute("nonce", o.nc),
          c.setAttribute("data-webpack", r + n),
          (c.src = e)),
          (s[e] = [a]);
        var l = (a, n) => {
            (c.onerror = c.onload = null), clearTimeout(h);
            var r = s[e];
            if (
              (delete s[e],
              c.parentNode && c.parentNode.removeChild(c),
              r && r.forEach((e) => e(n)),
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
    (d = (e) =>
      new Promise((a, n) => {
        var s = o.miniCssF(e),
          r = o.p + s;
        if (
          ((e, a) => {
            for (
              var n = document.getElementsByTagName("link"), s = 0;
              s < n.length;
              s++
            ) {
              var r =
                (c = n[s]).getAttribute("data-href") || c.getAttribute("href");
              if ("stylesheet" === c.rel && (r === e || r === a)) return c;
            }
            var d = document.getElementsByTagName("style");
            for (s = 0; s < d.length; s++) {
              var c;
              if ((r = (c = d[s]).getAttribute("data-href")) === e || r === a)
                return c;
            }
          })(s, r)
        )
          return a();
        ((e, a, n, s) => {
          var r = document.createElement("link");
          (r.rel = "stylesheet"),
            (r.type = "text/css"),
            (r.onerror = r.onload =
              (d) => {
                if (((r.onerror = r.onload = null), "load" === d.type)) n();
                else {
                  var c = d && ("load" === d.type ? "missing" : d.type),
                    i = (d && d.target && d.target.href) || a,
                    f = new Error(
                      "Loading CSS chunk " + e + " failed.\n(" + i + ")",
                    );
                  (f.code = "CSS_CHUNK_LOAD_FAILED"),
                    (f.type = c),
                    (f.request = i),
                    r.parentNode.removeChild(r),
                    s(f);
                }
              }),
            (r.href = a),
            document.head.appendChild(r);
        })(e, r, a, n);
      })),
    (c = { 6700: 0 }),
    (o.f.miniCss = (e, a) => {
      c[e]
        ? a.push(c[e])
        : 0 !== c[e] &&
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
            (c[e] = d(e).then(
              () => {
                c[e] = 0;
              },
              (a) => {
                throw (delete c[e], a);
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
            var r = new Promise((n, r) => (s = e[a] = [n, r]));
            n.push((s[2] = r));
            var d = o.p + o.u(a),
              c = new Error();
            o.l(
              d,
              (n) => {
                if (o.o(e, a) && (0 !== (s = e[a]) && (e[a] = void 0), s)) {
                  var r = n && ("load" === n.type ? "missing" : n.type),
                    d = n && n.target && n.target.src;
                  (c.message =
                    "Loading chunk " + a + " failed.\n(" + r + ": " + d + ")"),
                    (c.name = "ChunkLoadError"),
                    (c.type = r),
                    (c.request = d),
                    s[1](c);
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
            r,
            [d, c, i] = n,
            f = 0;
          if (d.some((a) => 0 !== e[a])) {
            for (s in c) o.o(c, s) && (o.m[s] = c[s]);
            if (i) var t = i(o);
          }
          for (a && a(n); f < d.length; f++)
            (r = d[f]), o.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
          return o.O(t);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
