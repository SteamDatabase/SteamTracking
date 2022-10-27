/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7619004";
(() => {
  "use strict";
  var e,
    a,
    n,
    d,
    r,
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
    (f.O = (a, n, d, r) => {
      if (!n) {
        var c = 1 / 0;
        for (o = 0; o < e.length; o++) {
          for (var [n, d, r] = e[o], s = !0, t = 0; t < n.length; t++)
            (!1 & r || c >= r) && Object.keys(f.O).every((e) => f.O[e](n[t]))
              ? n.splice(t--, 1)
              : ((s = !1), r < c && (c = r));
          if (s) {
            e.splice(o--, 1);
            var i = d();
            void 0 !== i && (a = i);
          }
        }
        return a;
      }
      r = r || 0;
      for (var o = e.length; o > 0 && e[o - 1][2] > r; o--) e[o] = e[o - 1];
      e[o] = [n, d, r];
    }),
    (f.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return f.d(a, { a }), a;
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (f.t = function (e, d) {
      if ((1 & d && (e = this(e)), 8 & d)) return e;
      if ("object" == typeof e && e) {
        if (4 & d && e.__esModule) return e;
        if (16 & d && "function" == typeof e.then) return e;
      }
      var r = Object.create(null);
      f.r(r);
      var c = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var s = 2 & d && e; "object" == typeof s && !~a.indexOf(s); s = n(s))
        Object.getOwnPropertyNames(s).forEach((a) => (c[a] = () => e[a]));
      return (c.default = () => e), f.d(r, c), r;
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
        3359: "main_bulgarian-json",
        3453: "marketing_czech-json",
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
        493: "88ed61bc4d84c34f6097",
        647: "bb0bb9f5962de8375d2d",
        698: "ba05205f535407a0519c",
        727: "a6088936e06ae3ceae38",
        799: "6de2dd140586f910b086",
        819: "018fd8857afe16ce5459",
        874: "7a3baa9de36bb59e6a09",
        903: "adb261a4e53953b5e6f8",
        907: "374ea5852961d11d72e2",
        1117: "fbc668089ad87a011873",
        1162: "cce8a159c5db16ef6e97",
        1313: "9a67b1b4d7d8a4907f9b",
        2029: "590083161416eaabccb4",
        2120: "b3bc05d2e211fe916c7c",
        2136: "3aa22a7d2a6d51a7fde8",
        2431: "fe5ea733482a8a8976a5",
        2443: "f4386dfdca520afa3710",
        2448: "1e4ad5d9521cc2956d6d",
        2522: "a863001c5c1ed2b45ecd",
        2529: "a9cad062875688ebf59b",
        2537: "beaab2b6b4d8c2a1905b",
        2581: "ad18b5d7564fc371d365",
        2601: "a0b9efc87ee0cf99415b",
        2767: "df89e0ed568a476ba01a",
        2824: "75d13215760f30471cb5",
        2844: "709d990f3f97d70d9376",
        2848: "ba34b5712e8018ae1dfc",
        2942: "60faa58a45a0f50b85dc",
        3069: "4c1806619db7a528571a",
        3112: "04a0d8aff24700d52c87",
        3185: "d41571c880db1a076d81",
        3252: "616c538237d9bd7f82d1",
        3277: "2c392f9543569834efc9",
        3323: "054709eaf989fa99a630",
        3359: "bb46b26e22cf7b250728",
        3453: "d9c5617f839524264b61",
        3557: "c330bf0c5003c0e16c74",
        3768: "070947eaecba330422a5",
        3784: "e5ca2f94cf920e701f17",
        4033: "9e876dacdd3bcf5229a6",
        4108: "3cb20233c0722ba16c71",
        4171: "412776f8ef12a49a8088",
        4189: "5b225bd2a28794eba6f7",
        4199: "e75981cb31290f1fdb25",
        4238: "50f636644e2a23ae0690",
        4297: "500db979bc01a4f50c59",
        4458: "7e6efef54fe907479801",
        4535: "a4986eec4bb470ccc738",
        4601: "38edeb8eab627a152b26",
        4722: "6e269c7e3a94809a0ff4",
        4823: "bafbe71ec627848af1f0",
        4860: "84b5b6c553887873da98",
        4929: "7bf4daa2c38ef6ed334f",
        4964: "8cfa9d812fbfb9f05071",
        5117: "ea8c23ba4890c7de63d1",
        5257: "9f8f296a4e69a8b619b2",
        5438: "69f1d8d2145ec6661d34",
        5625: "9e5f84e7bba0159e2295",
        5676: "716d7e259ab11a3caab4",
        5849: "d48d7ad13f45dbec33e3",
        5888: "de8b9c0ccdc107d8fc93",
        5925: "80231f5ac74353fb5ead",
        5933: "934dc2caf648ea038f05",
        5948: "4f1b890cc8626a2c129b",
        6007: "cc470df5091b99303662",
        6019: "5cc1065b711d0aa4e68e",
        6035: "5b9ffe10eb165c5850dc",
        6087: "57a74a7614f38ec58f1e",
        6117: "0e0daa16995862f020a6",
        6169: "efc8524c15804e68405d",
        6492: "8aac79173731e5a6c44a",
        6542: "78bd12735a503eb9cbe2",
        6699: "04b60c2f5d07fadc496c",
        6815: "fc35a4ef18d9768b5309",
        6817: "4b67e829bf4646e8cab0",
        6846: "512715f713f37c2f97ef",
        7082: "cbc58d457b94c6431769",
        7236: "b38c2599ad15466d87ed",
        7334: "0461a6cb0eb0455e1106",
        7602: "b03438ebd8a97a723db4",
        7762: "1934154e7682add24db5",
        7781: "9a29ae8b52fe88a55a5b",
        7871: "0bef3cdfe81fd8ad597b",
        7890: "70d21542ad74e84bec08",
        7940: "7f6fd02a2c3ff2427172",
        7942: "7c22ac5b068287c588e3",
        7951: "7b4d044271dcd111f968",
        7975: "3b85d63193ea4c7adb8d",
        8001: "f5ce83acf3bbc79c6460",
        8051: "a69bf0c5059b7a166bf7",
        8155: "49ad38337ff03ca214e3",
        8168: "4a9d57179624cc45f2bf",
        8385: "fe66476e4384e798f8ec",
        8774: "38c6fded431691e3a81a",
        8960: "606868ac4600d9fe7f02",
        8974: "4ba6c8d05df0224ebbe2",
        8994: "47625278413751e57f79",
        9060: "791af918a39abccb1761",
        9062: "b5f426b606e606a56078",
        9431: "56df9a5b10eb9f4cdebb",
        9568: "8c390ec061c03ebb47cc",
        9603: "4fa351b1f2bf092cbd21",
        9663: "1e9f98da2a1b5b5292ff",
        9753: "6215812f2ed7090996c7",
        9899: "4ba468909483eea11d5e",
        9903: "4130b2308d677163ea6c",
        9919: "4671150433a4d9096c85",
        9980: "2128383ea01fa546e2f1",
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
        5676: "steamlearn",
        5888: "chunk~ab4a73d6e",
        6699: "steamdeck",
        7334: "chunk~29ab6dbf5",
        7762: "steamml",
        8974: "storeadmin",
        9060: "chunk~b3fafa6d2",
      }[e] +
      ".css?contenthash=" +
      {
        493: "d885e31859d50e4d4824",
        2136: "6c1089d2799ac9e609ab",
        2522: "7751c352d0c9c6aa48d6",
        2529: "1d875bac23ac1f93b8a5",
        4535: "1e8d4c2f448ef0f3b8ad",
        4601: "aa016ff83508d04130af",
        5676: "28c218526e041f2dc392",
        5888: "a736c8562a0ac42a1364",
        6699: "43d080104b63cb1bcddd",
        7334: "5695736ccd096744dc7e",
        7762: "e3a2b8e7ea298a4cb539",
        8974: "30bc272190fd7a2c443a",
        9060: "c5f1c9943145088953e2",
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
    (d = {}),
    (r = "appmgmt-storeadmin:"),
    (f.l = (e, a, n, c) => {
      if (d[e]) d[e].push(a);
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
              b.getAttribute("data-webpack") == r + n
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
          s.setAttribute("data-webpack", r + n),
          (s.src = e)),
          (d[e] = [a]);
        var h = (a, n) => {
            (s.onerror = s.onload = null), clearTimeout(m);
            var r = d[e];
            if (
              (delete d[e],
              s.parentNode && s.parentNode.removeChild(s),
              r && r.forEach((e) => e(n)),
              a)
            )
              return a(n);
          },
          m = setTimeout(
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
        var d = f.miniCssF(e),
          r = f.p + d;
        if (
          ((e, a) => {
            for (
              var n = document.getElementsByTagName("link"), d = 0;
              d < n.length;
              d++
            ) {
              var r =
                (s = n[d]).getAttribute("data-href") || s.getAttribute("href");
              if ("stylesheet" === s.rel && (r === e || r === a)) return s;
            }
            var c = document.getElementsByTagName("style");
            for (d = 0; d < c.length; d++) {
              var s;
              if ((r = (s = c[d]).getAttribute("data-href")) === e || r === a)
                return s;
            }
          })(d, r)
        )
          return a();
        ((e, a, n, d) => {
          var r = document.createElement("link");
          (r.rel = "stylesheet"),
            (r.type = "text/css"),
            (r.onerror = r.onload =
              (c) => {
                if (((r.onerror = r.onload = null), "load" === c.type)) n();
                else {
                  var s = c && ("load" === c.type ? "missing" : c.type),
                    t = (c && c.target && c.target.href) || a,
                    i = new Error(
                      "Loading CSS chunk " + e + " failed.\n(" + t + ")"
                    );
                  (i.code = "CSS_CHUNK_LOAD_FAILED"),
                    (i.type = s),
                    (i.request = t),
                    r.parentNode.removeChild(r),
                    d(i);
                }
              }),
            (r.href = a),
            document.head.appendChild(r);
        })(e, r, a, n);
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
            5676: 1,
            5888: 1,
            6699: 1,
            7334: 1,
            7762: 1,
            8974: 1,
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
        var d = f.o(e, a) ? e[a] : void 0;
        if (0 !== d)
          if (d) n.push(d[2]);
          else if (6700 != a) {
            var r = new Promise((n, r) => (d = e[a] = [n, r]));
            n.push((d[2] = r));
            var c = f.p + f.u(a),
              s = new Error();
            f.l(
              c,
              (n) => {
                if (f.o(e, a) && (0 !== (d = e[a]) && (e[a] = void 0), d)) {
                  var r = n && ("load" === n.type ? "missing" : n.type),
                    c = n && n.target && n.target.src;
                  (s.message =
                    "Loading chunk " + a + " failed.\n(" + r + ": " + c + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = r),
                    (s.request = c),
                    d[1](s);
                }
              },
              "chunk-" + a,
              a
            );
          } else e[a] = 0;
      }),
        (f.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var d,
            r,
            [c, s, t] = n,
            i = 0;
          if (c.some((a) => 0 !== e[a])) {
            for (d in s) f.o(s, d) && (f.m[d] = s[d]);
            if (t) var o = t(f);
          }
          for (a && a(n); i < c.length; i++)
            (r = c[i]), f.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
          return f.O(o);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
