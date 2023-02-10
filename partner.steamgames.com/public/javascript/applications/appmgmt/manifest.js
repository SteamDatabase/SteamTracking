/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7835695";
(() => {
  "use strict";
  var e,
    a,
    n,
    r,
    d,
    c,
    s,
    t = {},
    i = {};
  function f(e) {
    var a = i[e];
    if (void 0 !== a) return a.exports;
    var n = (i[e] = { id: e, loaded: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, f), (n.loaded = !0), n.exports;
  }
  (f.m = t),
    (e = []),
    (f.O = (a, n, r, d) => {
      if (!n) {
        var c = 1 / 0;
        for (o = 0; o < e.length; o++) {
          for (var [n, r, d] = e[o], s = !0, t = 0; t < n.length; t++)
            (!1 & d || c >= d) && Object.keys(f.O).every((e) => f.O[e](n[t]))
              ? n.splice(t--, 1)
              : ((s = !1), d < c && (c = d));
          if (s) {
            e.splice(o--, 1);
            var i = r();
            void 0 !== i && (a = i);
          }
        }
        return a;
      }
      d = d || 0;
      for (var o = e.length; o > 0 && e[o - 1][2] > d; o--) e[o] = e[o - 1];
      e[o] = [n, r, d];
    }),
    (f.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return f.d(a, { a }), a;
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (f.t = function (e, r) {
      if ((1 & r && (e = this(e)), 8 & r)) return e;
      if ("object" == typeof e && e) {
        if (4 & r && e.__esModule) return e;
        if (16 & r && "function" == typeof e.then) return e;
      }
      var d = Object.create(null);
      f.r(d);
      var c = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var s = 2 & r && e; "object" == typeof s && !~a.indexOf(s); s = n(s))
        Object.getOwnPropertyNames(s).forEach((a) => (c[a] = () => e[a]));
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
        477: "libraries~ab4a73d6e",
        493: "libraries~29ab6dbf5",
        614: "libraries~bee9b953c",
        647: "main_czech-json",
        698: "main_dutch-json",
        727: "main_japanese-json",
        799: "main_german-json",
        819: "marketing_turkish-json",
        874: "marketing_dutch-json",
        903: "marketing_russian-json",
        907: "chunk~441eeb0f7",
        1117: "main_french-json",
        1162: "shared_thai-json",
        1313: "shared_bulgarian-json",
        2029: "shared_sc_schinese-json",
        2120: "libraries~65c77a859",
        2136: "events",
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
        2942: "main_tchinese-json",
        3069: "libraries~b3fafa6d2",
        3112: "shared_french-json",
        3185: "main_swedish-json",
        3252: "shared_polish-json",
        3277: "main_romanian-json",
        3323: "main_danish-json",
        3353: "chunk~1ec826082",
        3359: "main_bulgarian-json",
        3453: "marketing_czech-json",
        3504: "chunk~bee9b953c",
        3557: "shared_finnish-json",
        3768: "main_finnish-json",
        3784: "chunk~9824b1ba9",
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
        5888: "chunk~ab4a73d6e",
        5925: "shared_dutch-json",
        5933: "shared_italian-json",
        5948: "shared_hungarian-json",
        6007: "shared_german-json",
        6019: "marketing_swedish-json",
        6035: "marketing_ukrainian-json",
        6087: "main_latam-json",
        6117: "chunk~ed848006f",
        6169: "marketing_norwegian-json",
        6492: "shared_spanish-json",
        6542: "shared_koreana-json",
        6699: "steamdeck",
        6815: "main_english-json",
        6817: "main_spanish-json",
        6846: "marketing_vietnamese-json",
        7037: "libraries~d511f1559",
        7082: "marketing_japanese-json",
        7236: "main_portuguese-json",
        7334: "chunk~29ab6dbf5",
        7602: "shared_tchinese-json",
        7762: "steamml",
        7781: "shared_ukrainian-json",
        7871: "marketing_greek-json",
        7890: "main_thai-json",
        7940: "libraries~a4c1dc2af",
        7942: "marketing_finnish-json",
        7951: "main_norwegian-json",
        7975: "shared_english-json",
        8001: "marketing_italian-json",
        8051: "main_hungarian-json",
        8155: "main_italian-json",
        8168: "main_vietnamese-json",
        8385: "shared_brazilian-json",
        8774: "marketing_romanian-json",
        8960: "marketing_bulgarian-json",
        8974: "storeadmin",
        8994: "marketing_hungarian-json",
        9035: "contenthub",
        9060: "chunk~b3fafa6d2",
        9062: "shared_russian-json",
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
        477: "00a4e7eac55f4cdbfbda",
        493: "892b03a7d247e60c0f2f",
        614: "04db0f8cd01be95a4d3d",
        647: "713fd2cd29a26e043790",
        698: "3abb3ae2a447cc9851e9",
        727: "0731db2951a0de59dda9",
        799: "fa27d3b9179e719153eb",
        819: "018fd8857afe16ce5459",
        874: "7a3baa9de36bb59e6a09",
        903: "e12ef77830267bf1f2cb",
        907: "374ea5852961d11d72e2",
        1117: "1fa927c39e7f6f48efa7",
        1162: "ed63554c9ba95db5cf05",
        1313: "e8e789404f6e8787fe51",
        2029: "a59527d0540a72406547",
        2120: "5409cb703c584764d465",
        2136: "0201ff193a011a6ca0f2",
        2431: "fe5ea733482a8a8976a5",
        2443: "dbba8c0d1b1de07beccb",
        2448: "1e4ad5d9521cc2956d6d",
        2522: "976f0eebc99b849cc2fe",
        2529: "c84406cb2c8e776722b7",
        2537: "d7e46d13e41c9fb24ecb",
        2581: "ad18b5d7564fc371d365",
        2601: "a0b9efc87ee0cf99415b",
        2767: "b1af1a39c3b3a0dfdb05",
        2824: "75d13215760f30471cb5",
        2844: "4ef006f7c43ab73440a0",
        2848: "d07617bd2e37a5c8f3f5",
        2942: "4444b5c899e3cd58f090",
        3069: "4c1806619db7a528571a",
        3112: "0dee7d3d43cd02a1be0d",
        3185: "370a31995191e785e887",
        3252: "c1143973b93bec3c389c",
        3277: "e5b4b93b0e28928065f5",
        3323: "f9391c63ce39e4347487",
        3353: "7e3b9f41fe3098061501",
        3359: "e9bfbc68987dba1d9693",
        3453: "d9c5617f839524264b61",
        3504: "d3bbece4c9afdad9985c",
        3557: "e6e1a444ae6aaf5d463d",
        3768: "ee122f53af7b70a70a55",
        3784: "21dfb42e01dbe783c8a0",
        4033: "9e876dacdd3bcf5229a6",
        4108: "7ac99cbbf9ffda962de9",
        4171: "a87160e9abc05c3917b1",
        4189: "82bbcfa0a35c5b25b9b0",
        4199: "762f6f0e7f710cafbff9",
        4238: "50f636644e2a23ae0690",
        4297: "63df3ac3d60825f5e459",
        4458: "7e6efef54fe907479801",
        4535: "4ca23d1873d3e142080a",
        4601: "a045bef955e4c19eaa53",
        4722: "60068153dc5032db3a5f",
        4823: "77cd571ab927b0b38370",
        4860: "00dfaf9bfa662bd4cd61",
        4929: "2dd0317cd42361ab73aa",
        4935: "67cd79d8063e2bd23d12",
        4964: "1860ecdb0e8abdd521ae",
        5117: "babbe54f40914a1d5bba",
        5257: "9f8f296a4e69a8b619b2",
        5438: "a7897beac478c1720208",
        5625: "52e4f264ec49a3ca4d5c",
        5676: "7e4f04ee60a344a07365",
        5849: "2fd77b70b2aededc0349",
        5888: "777f5f06d08c25f1c8a6",
        5925: "9923c746269671bf9d18",
        5933: "da7ddcc7bda67941a3a8",
        5948: "ba33ea4cc30fcbdc4167",
        6007: "c266272bfe6c69ee0bd3",
        6019: "5cc1065b711d0aa4e68e",
        6035: "5b9ffe10eb165c5850dc",
        6087: "619f3f7ded5bbf2250f5",
        6117: "e020f638f5d8f0890c8c",
        6169: "efc8524c15804e68405d",
        6492: "141fc6e907d18950fc89",
        6542: "e6b036e523d136558a57",
        6699: "cc3c82167cd89c0dbecb",
        6815: "b937e5d1120fda14785f",
        6817: "b34034c233b628512d72",
        6846: "512715f713f37c2f97ef",
        7037: "381a3e4d1d32e219e9ad",
        7082: "cbc58d457b94c6431769",
        7236: "aa736a3395894216e78b",
        7334: "bdda27a4de06725b33c8",
        7602: "8ee688a79ed200a449da",
        7762: "9784117219bafc7407eb",
        7781: "29f4aff6ee3b3b1f3b5c",
        7871: "0bef3cdfe81fd8ad597b",
        7890: "e3c956dc36e1a0cc425a",
        7940: "7f6fd02a2c3ff2427172",
        7942: "7c22ac5b068287c588e3",
        7951: "0bab2152a766c5b1f14c",
        7975: "483937109855bc952ea3",
        8001: "f5ce83acf3bbc79c6460",
        8051: "47ec5b14cbfcd25f9bd5",
        8155: "cf4c457bb72ae4251895",
        8168: "31be5f2c03713edf90c7",
        8385: "20e3db2efc00da227a7c",
        8774: "38c6fded431691e3a81a",
        8960: "606868ac4600d9fe7f02",
        8974: "1fbf6584668711a51361",
        8994: "47625278413751e57f79",
        9035: "89680ca2a3df4fb9946e",
        9060: "f8ed8af2a5d0959fe186",
        9062: "d5c9e07f396179cf9831",
        9431: "eff33059c93e56d9225b",
        9568: "df38e9fa7e56afeb6b4d",
        9603: "3eacd5b27e59e923724f",
        9663: "dd7fe6fbd02f0702f553",
        9753: "2edc91395f0728735f97",
        9899: "4ba468909483eea11d5e",
        9903: "4130b2308d677163ea6c",
        9919: "4671150433a4d9096c85",
        9980: "5a2abd09f5a15464ebad",
      }[e]),
    (f.miniCssF = (e) =>
      "css/applications/appmgmt/" +
      {
        493: "libraries~29ab6dbf5",
        2136: "events",
        2522: "logoedtior",
        2529: "pricingtool",
        4535: "login",
        4601: "broadcast",
        4935: "sdrconnections",
        5676: "steamlearn",
        5888: "chunk~ab4a73d6e",
        6699: "steamdeck",
        7334: "chunk~29ab6dbf5",
        7762: "steamml",
        8974: "storeadmin",
        9035: "contenthub",
        9060: "chunk~b3fafa6d2",
      }[e] +
      ".css?contenthash=" +
      {
        493: "d885e31859d50e4d4824",
        2136: "dd68a3c0b7cc512594bc",
        2522: "ad216eb2dd86ce0246df",
        2529: "a1e88cc0287ab64dcc27",
        4535: "1e8d4c2f448ef0f3b8ad",
        4601: "7546e86d17535773dcfd",
        4935: "b7abea9ad444fe28cc7e",
        5676: "bd29e6192646b66bd203",
        5888: "70c0a4ef72d21b3e5501",
        6699: "d09e3ea879e50817d0db",
        7334: "3444994e937efa9cbf3f",
        7762: "e3a2b8e7ea298a4cb539",
        8974: "30bc272190fd7a2c443a",
        9035: "80ce443987372e9a5376",
        9060: "ab91a5b8dda0aff8ca1f",
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
    (r = {}),
    (d = "appmgmt-storeadmin:"),
    (f.l = (e, a, n, c) => {
      if (r[e]) r[e].push(a);
      else {
        var s, t;
        if (void 0 !== n)
          for (
            var i = document.getElementsByTagName("script"), o = 0;
            o < i.length;
            o++
          ) {
            var b = i[o];
            if (
              b.getAttribute("src") == e ||
              b.getAttribute("data-webpack") == d + n
            ) {
              s = b;
              break;
            }
          }
        s ||
          ((t = !0),
          ((s = document.createElement("script")).charset = "utf-8"),
          (s.timeout = 120),
          f.nc && s.setAttribute("nonce", f.nc),
          s.setAttribute("data-webpack", d + n),
          (s.src = e)),
          (r[e] = [a]);
        var h = (a, n) => {
            (s.onerror = s.onload = null), clearTimeout(l);
            var d = r[e];
            if (
              (delete r[e],
              s.parentNode && s.parentNode.removeChild(s),
              d && d.forEach((e) => e(n)),
              a)
            )
              return a(n);
          },
          l = setTimeout(
            h.bind(null, void 0, { type: "timeout", target: s }),
            12e4
          );
        (s.onerror = h.bind(null, s.onerror)),
          (s.onload = h.bind(null, s.onload)),
          t && document.head.appendChild(s);
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
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (f.p = e + "../../../");
    })(),
    (c = (e) =>
      new Promise((a, n) => {
        var r = f.miniCssF(e),
          d = f.p + r;
        if (
          ((e, a) => {
            for (
              var n = document.getElementsByTagName("link"), r = 0;
              r < n.length;
              r++
            ) {
              var d =
                (s = n[r]).getAttribute("data-href") || s.getAttribute("href");
              if ("stylesheet" === s.rel && (d === e || d === a)) return s;
            }
            var c = document.getElementsByTagName("style");
            for (r = 0; r < c.length; r++) {
              var s;
              if ((d = (s = c[r]).getAttribute("data-href")) === e || d === a)
                return s;
            }
          })(r, d)
        )
          return a();
        ((e, a, n, r) => {
          var d = document.createElement("link");
          (d.rel = "stylesheet"),
            (d.type = "text/css"),
            (d.onerror = d.onload =
              (c) => {
                if (((d.onerror = d.onload = null), "load" === c.type)) n();
                else {
                  var s = c && ("load" === c.type ? "missing" : c.type),
                    t = (c && c.target && c.target.href) || a,
                    i = new Error(
                      "Loading CSS chunk " + e + " failed.\n(" + t + ")"
                    );
                  (i.code = "CSS_CHUNK_LOAD_FAILED"),
                    (i.type = s),
                    (i.request = t),
                    d.parentNode.removeChild(d),
                    r(i);
                }
              }),
            (d.href = a),
            document.head.appendChild(d);
        })(e, d, a, n);
      })),
    (s = { 6700: 0 }),
    (f.f.miniCss = (e, a) => {
      s[e]
        ? a.push(s[e])
        : 0 !== s[e] &&
          {
            493: 1,
            2136: 1,
            2522: 1,
            2529: 1,
            4535: 1,
            4601: 1,
            4935: 1,
            5676: 1,
            5888: 1,
            6699: 1,
            7334: 1,
            7762: 1,
            8974: 1,
            9035: 1,
            9060: 1,
          }[e] &&
          a.push(
            (s[e] = c(e).then(
              () => {
                s[e] = 0;
              },
              (a) => {
                throw (delete s[e], a);
              }
            ))
          );
    }),
    (() => {
      var e = { 6700: 0 };
      (f.f.j = (a, n) => {
        var r = f.o(e, a) ? e[a] : void 0;
        if (0 !== r)
          if (r) n.push(r[2]);
          else if (6700 != a) {
            var d = new Promise((n, d) => (r = e[a] = [n, d]));
            n.push((r[2] = d));
            var c = f.p + f.u(a),
              s = new Error();
            f.l(
              c,
              (n) => {
                if (f.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var d = n && ("load" === n.type ? "missing" : n.type),
                    c = n && n.target && n.target.src;
                  (s.message =
                    "Loading chunk " + a + " failed.\n(" + d + ": " + c + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = d),
                    (s.request = c),
                    r[1](s);
                }
              },
              "chunk-" + a,
              a
            );
          } else e[a] = 0;
      }),
        (f.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var r,
            d,
            [c, s, t] = n,
            i = 0;
          if (c.some((a) => 0 !== e[a])) {
            for (r in s) f.o(s, r) && (f.m[r] = s[r]);
            if (t) var o = t(f);
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
