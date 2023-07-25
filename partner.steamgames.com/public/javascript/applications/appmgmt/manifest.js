/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8216854";
(() => {
  "use strict";
  var e,
    a,
    n,
    r,
    c,
    s,
    t,
    d = {},
    i = {};
  function o(e) {
    var a = i[e];
    if (void 0 !== a) return a.exports;
    var n = (i[e] = { id: e, loaded: !1, exports: {} });
    return d[e].call(n.exports, n, n.exports, o), (n.loaded = !0), n.exports;
  }
  (o.m = d),
    (e = []),
    (o.O = (a, n, r, c) => {
      if (!n) {
        var s = 1 / 0;
        for (b = 0; b < e.length; b++) {
          for (var [n, r, c] = e[b], t = !0, d = 0; d < n.length; d++)
            (!1 & c || s >= c) && Object.keys(o.O).every((e) => o.O[e](n[d]))
              ? n.splice(d--, 1)
              : ((t = !1), c < s && (s = c));
          if (t) {
            e.splice(b--, 1);
            var i = r();
            void 0 !== i && (a = i);
          }
        }
        return a;
      }
      c = c || 0;
      for (var b = e.length; b > 0 && e[b - 1][2] > c; b--) e[b] = e[b - 1];
      e[b] = [n, r, c];
    }),
    (o.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return o.d(a, { a }), a;
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (o.t = function (e, r) {
      if ((1 & r && (e = this(e)), 8 & r)) return e;
      if ("object" == typeof e && e) {
        if (4 & r && e.__esModule) return e;
        if (16 & r && "function" == typeof e.then) return e;
      }
      var c = Object.create(null);
      o.r(c);
      var s = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var t = 2 & r && e; "object" == typeof t && !~a.indexOf(t); t = n(t))
        Object.getOwnPropertyNames(t).forEach((a) => (s[a] = () => e[a]));
      return (s.default = () => e), o.d(c, s), c;
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
        131: "chunk~00d94646f",
        145: "chunk~bbe83f635",
        493: "libraries~29ab6dbf5",
        494: "libraries~b79647cb4",
        614: "libraries~bee9b953c",
        647: "main_czech-json",
        698: "main_dutch-json",
        727: "main_japanese-json",
        799: "main_german-json",
        819: "marketing_turkish-json",
        874: "marketing_dutch-json",
        903: "marketing_russian-json",
        1117: "main_french-json",
        1162: "shared_thai-json",
        1254: "chunk~0deb13453",
        1313: "shared_bulgarian-json",
        2029: "shared_sc_schinese-json",
        2120: "libraries~65c77a859",
        2136: "events",
        2360: "chunk~3d030e3ba",
        2431: "shared_arabic-json",
        2443: "shared_latam-json",
        2448: "marketing_polish-json",
        2522: "logoedtior",
        2529: "pricingtool",
        2537: "shared_schinese-json",
        2581: "marketing_danish-json",
        2601: "marketing_spanish-json",
        2767: "main_polish-json",
        2824: "marketing_german-json",
        2844: "shared_japanese-json",
        2848: "main_ukrainian-json",
        2856: "libraries~0aa1e73e0",
        2942: "main_tchinese-json",
        3069: "libraries~b3fafa6d2",
        3112: "shared_french-json",
        3143: "libraries~92e10db3b",
        3185: "main_swedish-json",
        3252: "shared_polish-json",
        3277: "main_romanian-json",
        3323: "main_danish-json",
        3359: "main_bulgarian-json",
        3453: "marketing_czech-json",
        3504: "chunk~bee9b953c",
        3557: "shared_finnish-json",
        3768: "main_finnish-json",
        4023: "libraries~1286b67cd",
        4033: "marketing_schinese-json",
        4108: "shared_norwegian-json",
        4171: "marketing_koreana-json",
        4189: "shared_czech-json",
        4199: "marketing_french-json",
        4238: "marketing_thai-json",
        4297: "shared_greek-json",
        4458: "marketing_brazilian-json",
        4535: "login",
        4601: "broadcast",
        4722: "main_koreana-json",
        4823: "shared_romanian-json",
        4860: "main_russian-json",
        4929: "marketing_english-json",
        4935: "sdrconnections",
        4964: "shared_vietnamese-json",
        5117: "libraries~511d96142",
        5257: "marketing_portuguese-json",
        5438: "shared_turkish-json",
        5625: "shared_swedish-json",
        5676: "steamlearn",
        5849: "shared_portuguese-json",
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
        6699: "steamdeck",
        6815: "main_english-json",
        6817: "main_spanish-json",
        6846: "marketing_vietnamese-json",
        7072: "main_indonesian-json",
        7082: "marketing_japanese-json",
        7236: "main_portuguese-json",
        7334: "chunk~29ab6dbf5",
        7602: "shared_tchinese-json",
        7762: "steamml",
        7781: "shared_ukrainian-json",
        7871: "marketing_greek-json",
        7890: "main_thai-json",
        7942: "marketing_finnish-json",
        7951: "main_norwegian-json",
        7975: "shared_english-json",
        8001: "marketing_italian-json",
        8051: "main_hungarian-json",
        8155: "main_italian-json",
        8168: "main_vietnamese-json",
        8385: "shared_brazilian-json",
        8399: "marketing_indonesian-json",
        8754: "shared_indonesian-json",
        8774: "marketing_romanian-json",
        8960: "marketing_bulgarian-json",
        8974: "storeadmin",
        8994: "marketing_hungarian-json",
        9035: "contenthub",
        9062: "shared_russian-json",
        9160: "chunk~92e10db3b",
        9431: "main_brazilian-json",
        9568: "main_greek-json",
        9603: "libraries~82d50d904",
        9663: "main_turkish-json",
        9753: "shared_danish-json",
        9899: "marketing_latam-json",
        9903: "marketing_tchinese-json",
        9919: "marketing_sc_schinese-json",
        9980: "main_schinese-json",
      }[e] +
      ".js?contenthash=" +
      {
        131: "5efa8dca8c951d168479",
        145: "60968880bf20693f44db",
        493: "1337c2145dbf06161fac",
        494: "05fe723268d8d8f38ede",
        614: "cf5a894ed77d3a7fdc02",
        647: "8954dc4f079d8b4563a3",
        698: "ff146e522d5d166da418",
        727: "0f1950f3600ff117dd0b",
        799: "802e5e24edd9051b6f23",
        819: "b50a42ce377a87047fb8",
        874: "4e3ce49314102df0f4a3",
        903: "ca9449ca175b9bc6b966",
        1117: "163ac537e4d6bf0e8d00",
        1162: "f67afd94c15b533f6c20",
        1254: "b234c11aa2af5777889c",
        1313: "c6fe57808857654b6d72",
        2029: "7fd08f7e11313713d62f",
        2120: "e02f02063dada506965c",
        2136: "0c22f38532d92a8ffc81",
        2360: "15d97f470a726d20159f",
        2431: "145183afb5a012b6f5f7",
        2443: "923f455cd4317144aa63",
        2448: "114487fb8ad79d93bc8c",
        2522: "b5f229b037ff2265e4df",
        2529: "1f1f9e239b50895aee9d",
        2537: "9a738373770fbfe18249",
        2581: "5d4acfbfe8d128f10750",
        2601: "c63116119fcb263067bc",
        2767: "e778e74857213f1300ea",
        2824: "e6e06fcd8363ca4ef5dd",
        2844: "467ae9f85ea2f6f8ce6b",
        2848: "23c5c3e4206718560282",
        2856: "fde4e41146f852b0ea33",
        2942: "ca97c123e0857110ecbd",
        3069: "9b1e88e2991c03e6c138",
        3112: "3a6d5f304fc0c767922f",
        3143: "a67158b5e5faca3a398b",
        3185: "9c7d5ed610ede68d482f",
        3252: "b2c57a15a35b7b1b07ad",
        3277: "9afe545b5358faed27e3",
        3323: "b4fe5d2de0c926253973",
        3359: "506a2c606ff62cc8f5bc",
        3453: "0aa76c397fbd91e95d87",
        3504: "266362a7a6427f0f6e59",
        3557: "ffbcc13213af35c5753f",
        3768: "85799d2a7f8769971eff",
        4023: "f75b23dba8f16a9398c5",
        4033: "993b6c29038e5c0a9338",
        4108: "9688d09cbaeaba4b3917",
        4171: "5c20e0e36380516858bb",
        4189: "21890dfc8af94c2afb70",
        4199: "efd3c70805664354d450",
        4238: "1c6143dcf871c54f7833",
        4297: "77d1353476652d9c846f",
        4458: "6e5fffb47d12bd468bf0",
        4535: "066308aa43da6983a9ce",
        4601: "37a5f91eaa2503f5ff10",
        4722: "72d35f397924d020ee52",
        4823: "abd6e42cbbc0c837fb46",
        4860: "6e643e7837b09746a5c8",
        4929: "90453f550424f367c751",
        4935: "4ea28cd55a00ffe98139",
        4964: "af626f5c6230c03649b8",
        5117: "fe02739faca7c40c162b",
        5257: "1e9a43dbf2ee53e3b4c1",
        5438: "bc1767bea597641b2c82",
        5625: "20ada31007d41dd680d1",
        5676: "4b3090b26f9e6905111c",
        5849: "f3990c5a57483fdfa6e0",
        5925: "ce428829165eab06ae17",
        5933: "3839871a59288b328d60",
        5948: "b342ddb983bbe2c5ce2f",
        6007: "b41cc0e484fd4f7910c0",
        6019: "86ae1d38d2c232eba4cb",
        6035: "2167519dc120a8f5b363",
        6087: "d50a8d89f3b06375b76f",
        6169: "34b3cead7035056c2ec4",
        6492: "38218fb27edbeb8aeb57",
        6542: "6bdc6f041669c8e484e4",
        6699: "b45a3fccce84ff5072fa",
        6815: "243b62a451dcf5790f3a",
        6817: "878deb3988eed09b57d9",
        6846: "91ce799563e659d38188",
        7072: "d183d60040cb792004c4",
        7082: "0a3883c171314ac4f506",
        7236: "c179f572bf718a6204d6",
        7334: "c611e9d95a14a96023d3",
        7602: "475ab72734531d730ca4",
        7762: "9d7bf86900c8749d9742",
        7781: "169bddfdd37ed0759ba7",
        7871: "ab7a7f0279231f88ba50",
        7890: "19f846a6b57851c7e3ba",
        7942: "80323e3c4dbb542b546a",
        7951: "d9cb5bae3e60e5ff8c97",
        7975: "d785ac7e42b30657b02b",
        8001: "aaabd9cb62d16d3f8472",
        8051: "96d1c04125a799b36411",
        8155: "8763380921ec1897c3bd",
        8168: "61d3871d49d62aed5a58",
        8385: "1ad2d3f7aea88d26e1ff",
        8399: "5f8c62f4dbd39d2960eb",
        8754: "97d8aec93a72e4670b81",
        8774: "3b6d945f4c2441ae680a",
        8960: "04e58e3d9562a450af9d",
        8974: "07fa3401e0fa40fb572f",
        8994: "96868dfcf3cf920ece38",
        9035: "9b49528f8f6672d4c141",
        9062: "088ad207573b0d3d6eb5",
        9160: "12c16bb8e4b721ebe3d7",
        9431: "10057047d73877fca2f2",
        9568: "8270e6bf639fb690f06e",
        9603: "d0d6442967d0b3ae6afe",
        9663: "198678c014a0029545d4",
        9753: "bfa19084375c29294b38",
        9899: "e4e017070b15fb5c2023",
        9903: "cf62f710d3b29d88fa53",
        9919: "874525ecdd1d0ef57e63",
        9980: "c486745ad4ae37251402",
      }[e]),
    (o.miniCssF = (e) =>
      "css/applications/appmgmt/" +
      {
        493: "libraries~29ab6dbf5",
        2136: "events",
        2522: "logoedtior",
        2529: "pricingtool",
        3504: "chunk~bee9b953c",
        4601: "broadcast",
        4935: "sdrconnections",
        5676: "steamlearn",
        6699: "steamdeck",
        7762: "steamml",
        8974: "storeadmin",
        9160: "chunk~92e10db3b",
      }[e] +
      ".css?contenthash=" +
      {
        493: "f38ba98b44af4fc0288a",
        2136: "919f9e07a9196b38b46e",
        2522: "568a668c02defe940a0c",
        2529: "deda2f99b411c732ee09",
        3504: "c5ffd57c8ee238c08d5a",
        4601: "9b9120b674ef378127fd",
        4935: "59890b790fbf2cc93831",
        5676: "d0287df8605cf5ca6ca3",
        6699: "3a19f92cb04178af6cdb",
        7762: "d61f93a707d7e363fa5a",
        8974: "f095e8a4476b0c5b677f",
        9160: "d2be9b248c5297e4d2f5",
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
    (r = {}),
    (c = "appmgmt-storeadmin:"),
    (o.l = (e, a, n, s) => {
      if (r[e]) r[e].push(a);
      else {
        var t, d;
        if (void 0 !== n)
          for (
            var i = document.getElementsByTagName("script"), b = 0;
            b < i.length;
            b++
          ) {
            var f = i[b];
            if (
              f.getAttribute("src") == e ||
              f.getAttribute("data-webpack") == c + n
            ) {
              t = f;
              break;
            }
          }
        t ||
          ((d = !0),
          ((t = document.createElement("script")).charset = "utf-8"),
          (t.timeout = 120),
          o.nc && t.setAttribute("nonce", o.nc),
          t.setAttribute("data-webpack", c + n),
          (t.src = e)),
          (r[e] = [a]);
        var h = (a, n) => {
            (t.onerror = t.onload = null), clearTimeout(m);
            var c = r[e];
            if (
              (delete r[e],
              t.parentNode && t.parentNode.removeChild(t),
              c && c.forEach((e) => e(n)),
              a)
            )
              return a(n);
          },
          m = setTimeout(
            h.bind(null, void 0, { type: "timeout", target: t }),
            12e4,
          );
        (t.onerror = h.bind(null, t.onerror)),
          (t.onload = h.bind(null, t.onload)),
          d && document.head.appendChild(t);
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
    (s = (e) =>
      new Promise((a, n) => {
        var r = o.miniCssF(e),
          c = o.p + r;
        if (
          ((e, a) => {
            for (
              var n = document.getElementsByTagName("link"), r = 0;
              r < n.length;
              r++
            ) {
              var c =
                (t = n[r]).getAttribute("data-href") || t.getAttribute("href");
              if ("stylesheet" === t.rel && (c === e || c === a)) return t;
            }
            var s = document.getElementsByTagName("style");
            for (r = 0; r < s.length; r++) {
              var t;
              if ((c = (t = s[r]).getAttribute("data-href")) === e || c === a)
                return t;
            }
          })(r, c)
        )
          return a();
        ((e, a, n, r) => {
          var c = document.createElement("link");
          (c.rel = "stylesheet"),
            (c.type = "text/css"),
            (c.onerror = c.onload =
              (s) => {
                if (((c.onerror = c.onload = null), "load" === s.type)) n();
                else {
                  var t = s && ("load" === s.type ? "missing" : s.type),
                    d = (s && s.target && s.target.href) || a,
                    i = new Error(
                      "Loading CSS chunk " + e + " failed.\n(" + d + ")",
                    );
                  (i.code = "CSS_CHUNK_LOAD_FAILED"),
                    (i.type = t),
                    (i.request = d),
                    c.parentNode.removeChild(c),
                    r(i);
                }
              }),
            (c.href = a),
            document.head.appendChild(c);
        })(e, c, a, n);
      })),
    (t = { 6700: 0 }),
    (o.f.miniCss = (e, a) => {
      t[e]
        ? a.push(t[e])
        : 0 !== t[e] &&
          {
            493: 1,
            2136: 1,
            2522: 1,
            2529: 1,
            3504: 1,
            4601: 1,
            4935: 1,
            5676: 1,
            6699: 1,
            7762: 1,
            8974: 1,
            9160: 1,
          }[e] &&
          a.push(
            (t[e] = s(e).then(
              () => {
                t[e] = 0;
              },
              (a) => {
                throw (delete t[e], a);
              },
            )),
          );
    }),
    (() => {
      var e = { 6700: 0 };
      (o.f.j = (a, n) => {
        var r = o.o(e, a) ? e[a] : void 0;
        if (0 !== r)
          if (r) n.push(r[2]);
          else if (6700 != a) {
            var c = new Promise((n, c) => (r = e[a] = [n, c]));
            n.push((r[2] = c));
            var s = o.p + o.u(a),
              t = new Error();
            o.l(
              s,
              (n) => {
                if (o.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var c = n && ("load" === n.type ? "missing" : n.type),
                    s = n && n.target && n.target.src;
                  (t.message =
                    "Loading chunk " + a + " failed.\n(" + c + ": " + s + ")"),
                    (t.name = "ChunkLoadError"),
                    (t.type = c),
                    (t.request = s),
                    r[1](t);
                }
              },
              "chunk-" + a,
              a,
            );
          } else e[a] = 0;
      }),
        (o.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var r,
            c,
            [s, t, d] = n,
            i = 0;
          if (s.some((a) => 0 !== e[a])) {
            for (r in t) o.o(t, r) && (o.m[r] = t[r]);
            if (d) var b = d(o);
          }
          for (a && a(n); i < s.length; i++)
            (c = s[i]), o.o(e, c) && e[c] && e[c][0](), (e[c] = 0);
          return o.O(b);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
