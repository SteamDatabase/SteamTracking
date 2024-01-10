/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8622733";
(() => {
  "use strict";
  var e,
    a,
    n,
    s,
    c,
    r = {},
    d = {};
  function b(e) {
    var a = d[e];
    if (void 0 !== a) return a.exports;
    var n = (d[e] = { id: e, loaded: !1, exports: {} });
    return r[e].call(n.exports, n, n.exports, b), (n.loaded = !0), n.exports;
  }
  (b.m = r),
    (e = []),
    (b.O = (a, n, s, c) => {
      if (!n) {
        var r = 1 / 0;
        for (o = 0; o < e.length; o++) {
          for (var [n, s, c] = e[o], d = !0, i = 0; i < n.length; i++)
            (!1 & c || r >= c) && Object.keys(b.O).every((e) => b.O[e](n[i]))
              ? n.splice(i--, 1)
              : ((d = !1), c < r && (r = c));
          if (d) {
            e.splice(o--, 1);
            var f = s();
            void 0 !== f && (a = f);
          }
        }
        return a;
      }
      c = c || 0;
      for (var o = e.length; o > 0 && e[o - 1][2] > c; o--) e[o] = e[o - 1];
      e[o] = [n, s, c];
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
      var c = Object.create(null);
      b.r(c);
      var r = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var d = 2 & s && e; "object" == typeof d && !~a.indexOf(d); d = n(d))
        Object.getOwnPropertyNames(d).forEach((a) => (r[a] = () => e[a]));
      return (r.default = () => e), b.d(c, r), c;
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
        61: "4df5b659f6822161c1c2",
        77: "77428a1cb433ab1f5341",
        101: "877576ee75d7cc23e899",
        402: "91b269c6d1e69aa459ac",
        584: "a7c8089157fb8bc98c43",
        647: "1a11aeef583c5a111f0c",
        698: "b05918f6bb69906faf2f",
        727: "55eac6062bb630d1676b",
        744: "45bc014de67e64566b0e",
        799: "481c020b9aeb00fb2fad",
        819: "c80e7a014bbe4800f228",
        874: "f04c0e1644d83d048562",
        903: "68e7861cafcf7df4a8c5",
        1012: "b556587a648f17b7bc27",
        1043: "6a60ff6e16a762e9fef2",
        1117: "709c0da37ac6b547ec15",
        1162: "87f8b68491e7d16eec9f",
        1164: "45e1a72cbb62eb12957a",
        1313: "a96d0ecb5e1b23876221",
        1722: "5e142609dea2b66c522c",
        1805: "8cfeed149947c0699fce",
        2029: "90e4c0d361b7a69c9b9d",
        2120: "8c4eb14d65368d9c0085",
        2136: "aabe2ae88aa66b87aa7f",
        2268: "5cf56a35a13172b8e337",
        2431: "de41d0131bbeada53419",
        2443: "3af97f0e637e8e6f1dff",
        2448: "453beabdf0c7fa9851ae",
        2522: "e0fa1718ed2770cf75b0",
        2529: "1082d52fc86ee2d78a3b",
        2537: "0baa8aa738309bf3e1db",
        2581: "b673b4cd50e81f8d63d0",
        2601: "429e66bf521248c23cb1",
        2681: "8a6abd0ead64f574c711",
        2706: "5ca0d37291438462fed6",
        2767: "41eb12720fdb0137a39f",
        2824: "6a205db44d0822ec80fd",
        2844: "d00ed0015f9a1d17f807",
        2848: "5172dfbacc57a9b861d7",
        2942: "ccf85984317475f60712",
        2996: "d4b4d48d6466719241ee",
        3112: "5a792f4dde84e005d901",
        3135: "2c091f822bba647f0d90",
        3174: "f4db0bc171746ce8960d",
        3185: "859ed7c6a026df666040",
        3233: "194131c7ce52d7965a51",
        3252: "396daa3342009704ca8a",
        3277: "9c0e988a4d79d68680db",
        3313: "d1d6df5fe500977e749b",
        3323: "faa1809dc59ab77729f1",
        3359: "3da6a8b9e4b389b83f5d",
        3453: "e32038e79163bfbd5fc6",
        3557: "0f03687faa86711d5d34",
        3599: "a643aeb4a45c4da46e08",
        3634: "0b17135dde44aa48bbd5",
        3685: "105674506482e07be8ff",
        3768: "0dcff358da54640e1e9b",
        3786: "78a5be619af3c1467462",
        3863: "57c07eed5934d519e809",
        4033: "24775c7c4dd9e505d668",
        4108: "146b65617ee7b0e2d538",
        4166: "48aea4d1bf95a6bc90da",
        4171: "37b0e3fd0514bd84796c",
        4189: "718d04883ae46ebfc6f2",
        4199: "6bbb582d7b7d57baf514",
        4238: "58dbd7ea970a5751dca5",
        4248: "b0abcfbfa60438b740a3",
        4297: "7f651781d42332fdcaea",
        4309: "7d8e775b5b935bed714f",
        4447: "7bbea8e343fc9cf8ec55",
        4458: "08eff159430f046a55c0",
        4535: "de99d324f7d8ec873e0c",
        4601: "833af83e49e0fea7e8b5",
        4682: "61426536c4af5b9f6233",
        4722: "c1a4da1500f35d3d051d",
        4812: "4060b348572172938851",
        4823: "ef90c308a3ca100d1262",
        4860: "2fd5d5f395192e458f95",
        4929: "c78c2dd194b26b1337a5",
        4935: "d661e2055a3a0d767808",
        4961: "765be31120c5e731942e",
        4964: "99c305587d9789752289",
        5117: "66f8bfe4475537eca9d2",
        5257: "6a86fec6f8a660c48760",
        5414: "e3c267a1ff85c3524df7",
        5438: "27dd594170578bfbc538",
        5559: "23d3c26da709a2d964d6",
        5625: "189064a32cace8d9f182",
        5676: "d1b1a8cd82a251ee4b6e",
        5785: "451c1e3fb1a5d0415ffb",
        5849: "c20eda76b5fa225aa9a0",
        5855: "a287e34f706d3d58e473",
        5875: "60b27a8aebccad005ee2",
        5925: "362e17c12e55f309bc2a",
        5933: "84f99e7aa176143c2769",
        5948: "f19cf482c9de6d7da5ab",
        6007: "f88fde7af7c144bd85c8",
        6019: "90e6b06544ec76062bac",
        6035: "429ab011c2d00b22529a",
        6087: "af6256d8817ea55cbf1c",
        6169: "05f1ac415872924c0bbf",
        6492: "df9bb4b8a7321f576037",
        6542: "0ee29d03b49226bbe113",
        6608: "8f466f362226a212a78f",
        6693: "dce7d4eb75d523fc10f5",
        6699: "891ccccf0a435d6103a1",
        6739: "eb7391d6a345e2d9f85f",
        6762: "25c628916335c69e861f",
        6808: "9d294500025572002d51",
        6815: "8c417234ec8dee886158",
        6817: "392d2cd469ace0e245de",
        6846: "72742eda0e0f9dc49c87",
        7072: "2f5db2278c5b255ea697",
        7082: "ef551ec630dced60949c",
        7094: "2afff7efb231f47d12a0",
        7099: "9e7ec91d6274d0b73725",
        7181: "bd6102051935edcfa6f3",
        7236: "b932176b006e9ac80a32",
        7241: "0f4a9605e02cb9b43f72",
        7510: "4b40a5a33307383457af",
        7602: "737144815cc2fd05d543",
        7724: "be9388a4d031a07b2960",
        7762: "cdea72f519097018e3d2",
        7781: "96d680e80a1bdf4145b4",
        7871: "fa2d9e4400368f78aac1",
        7890: "166c0f52a80bc02787a6",
        7934: "3182f63fddf68d8a0fdd",
        7942: "cf3631d2b0592bc9f653",
        7951: "d4861b8d4fd9eb5f1446",
        7952: "71b9e68585203ca5f4bd",
        7975: "cd459cea8f78c67ed559",
        8001: "a978fccb5960b471e36d",
        8051: "78009a5837ca72f1a6d2",
        8155: "8e7d58932dea6b34d8c0",
        8168: "76eb5611b6d8e0a176ff",
        8195: "627c4d805e345ccfc60e",
        8385: "9ccb49cac530b1ebc5e4",
        8389: "992236d68dd29bdce393",
        8399: "a7ca3cc0b6543a95e979",
        8754: "036fb278f53395732e81",
        8767: "d207530cc913524f1d4c",
        8774: "1a33480404aaa922314e",
        8794: "39a113d94e43cbc145b0",
        8960: "98362a33c2aeebaa6452",
        8974: "31fb8c12bdac66754472",
        8993: "fd10635afae4444c84a9",
        8994: "ad169362c6382f592c1f",
        9035: "7bd25fea5c8d91f5f1a6",
        9062: "b3f611dea830aea279c6",
        9192: "7a0cdeda49babb62ad4d",
        9431: "846d9e1377b3d5843bce",
        9568: "b591bb449717a0509c77",
        9584: "ccb37a2660d07b601b3a",
        9603: "c868b14f396aac47b601",
        9663: "a20ba5db71e4d562ba79",
        9749: "6982074c8638d20f4af2",
        9753: "60b1325fd93d6fc3f2eb",
        9899: "027e6690c1dea3dad098",
        9903: "bf513492b05191fed215",
        9919: "d21ec559578b5ffeac9c",
        9980: "c0c2562537ea0a086a82",
      }[e]),
    (b.miniCssF = (e) =>
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
        4033: "b789242f43a140f3f397",
        4309: "d885e31859d50e4d4824",
        4535: "be2d8061908540c37d56",
        4601: "72ddf9f1a147f2df42ec",
        4935: "59890b790fbf2cc93831",
        5676: "9c25633cdeb01a1062f7",
        6699: "5da20a0c7c430416da72",
        6808: "92299797c12c2782de13",
        7762: "e3a2b8e7ea298a4cb539",
        8974: "dd21fe0ad2c8db35947c",
        9192: "2960968d3708947d3c90",
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
    (c = "appmgmt-storeadmin:"),
    (b.l = (e, a, n, r) => {
      if (s[e]) s[e].push(a);
      else {
        var d, i;
        if (void 0 !== n)
          for (
            var f = document.getElementsByTagName("script"), o = 0;
            o < f.length;
            o++
          ) {
            var t = f[o];
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
          b.nc && d.setAttribute("nonce", b.nc),
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
    (b.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (b.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      var e;
      b.g.importScripts && (e = b.g.location + "");
      var a = b.g.document;
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
        (b.p = e + "../../../");
    })(),
    (() => {
      if ("undefined" != typeof document) {
        var e = (e) =>
            new Promise((a, n) => {
              var s = b.miniCssF(e),
                c = b.p + s;
              if (
                ((e, a) => {
                  for (
                    var n = document.getElementsByTagName("link"), s = 0;
                    s < n.length;
                    s++
                  ) {
                    var c =
                      (d = n[s]).getAttribute("data-href") ||
                      d.getAttribute("href");
                    if ("stylesheet" === d.rel && (c === e || c === a))
                      return d;
                  }
                  var r = document.getElementsByTagName("style");
                  for (s = 0; s < r.length; s++) {
                    var d;
                    if (
                      (c = (d = r[s]).getAttribute("data-href")) === e ||
                      c === a
                    )
                      return d;
                  }
                })(s, c)
              )
                return a();
              ((e, a, n, s, c) => {
                var r = document.createElement("link");
                (r.rel = "stylesheet"),
                  (r.type = "text/css"),
                  (r.onerror = r.onload =
                    (n) => {
                      if (((r.onerror = r.onload = null), "load" === n.type))
                        s();
                      else {
                        var d = n && ("load" === n.type ? "missing" : n.type),
                          b = (n && n.target && n.target.href) || a,
                          i = new Error(
                            "Loading CSS chunk " + e + " failed.\n(" + b + ")",
                          );
                        (i.code = "CSS_CHUNK_LOAD_FAILED"),
                          (i.type = d),
                          (i.request = b),
                          r.parentNode && r.parentNode.removeChild(r),
                          c(i);
                      }
                    }),
                  (r.href = a),
                  n
                    ? n.parentNode.insertBefore(r, n.nextSibling)
                    : document.head.appendChild(r);
              })(e, c, null, a, n);
            }),
          a = { 6700: 0 };
        b.f.miniCss = (n, s) => {
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
      (b.f.j = (a, n) => {
        var s = b.o(e, a) ? e[a] : void 0;
        if (0 !== s)
          if (s) n.push(s[2]);
          else if (/^(6700|9192)$/.test(a)) e[a] = 0;
          else {
            var c = new Promise((n, c) => (s = e[a] = [n, c]));
            n.push((s[2] = c));
            var r = b.p + b.u(a),
              d = new Error();
            b.l(
              r,
              (n) => {
                if (b.o(e, a) && (0 !== (s = e[a]) && (e[a] = void 0), s)) {
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
        (b.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var s,
            c,
            [r, d, i] = n,
            f = 0;
          if (r.some((a) => 0 !== e[a])) {
            for (s in d) b.o(d, s) && (b.m[s] = d[s]);
            if (i) var o = i(b);
          }
          for (a && a(n); f < r.length; f++)
            (c = r[f]), b.o(e, c) && e[c] && e[c][0](), (e[c] = 0);
          return b.O(o);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
