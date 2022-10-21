/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7602737";
(() => {
  "use strict";
  var e,
    a,
    n,
    d,
    r,
    s,
    t,
    c = {},
    i = {};
  function f(e) {
    var a = i[e];
    if (void 0 !== a) return a.exports;
    var n = (i[e] = { id: e, loaded: !1, exports: {} });
    return c[e].call(n.exports, n, n.exports, f), (n.loaded = !0), n.exports;
  }
  (f.m = c),
    (e = []),
    (f.O = (a, n, d, r) => {
      if (!n) {
        var s = 1 / 0;
        for (o = 0; o < e.length; o++) {
          for (var [n, d, r] = e[o], t = !0, c = 0; c < n.length; c++)
            (!1 & r || s >= r) && Object.keys(f.O).every((e) => f.O[e](n[c]))
              ? n.splice(c--, 1)
              : ((t = !1), r < s && (s = r));
          if (t) {
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
      var s = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var t = 2 & d && e; "object" == typeof t && !~a.indexOf(t); t = n(t))
        Object.getOwnPropertyNames(t).forEach((a) => (s[a] = () => e[a]));
      return (s.default = () => e), f.d(r, s), r;
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
        1117: "main_french-json",
        1162: "shared_thai-json",
        1313: "shared_bulgarian-json",
        1323: "chunk~8b9d6fa7c",
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
        5257: "marketing_portuguese-json",
        5438: "shared_turkish-json",
        5625: "shared_swedish-json",
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
        799: "2b980e46fbdd18effa1e",
        819: "018fd8857afe16ce5459",
        874: "7a3baa9de36bb59e6a09",
        903: "adb261a4e53953b5e6f8",
        1117: "fbc668089ad87a011873",
        1162: "6c09577141a735b98745",
        1313: "e7e6519ea3ce12d6a128",
        1323: "b3969115acff45f25ede",
        2029: "590083161416eaabccb4",
        2120: "b3bc05d2e211fe916c7c",
        2136: "0788252e8ca7a1797b47",
        2431: "fe5ea733482a8a8976a5",
        2443: "2ba1cd5a7be8a9a82677",
        2448: "1e4ad5d9521cc2956d6d",
        2522: "464dc5c6725280d8c99d",
        2529: "5bccccadf2278d7e469c",
        2537: "a480ad5ff67a9b936789",
        2581: "ad18b5d7564fc371d365",
        2601: "a0b9efc87ee0cf99415b",
        2767: "df89e0ed568a476ba01a",
        2824: "75d13215760f30471cb5",
        2844: "8b66e8cf6ce071e72741",
        2848: "ba34b5712e8018ae1dfc",
        2942: "60faa58a45a0f50b85dc",
        3069: "4c1806619db7a528571a",
        3112: "a0cdabd7d873d4041293",
        3185: "d41571c880db1a076d81",
        3252: "c1d93b4bbb32ed79c04e",
        3277: "2c392f9543569834efc9",
        3323: "054709eaf989fa99a630",
        3359: "bb46b26e22cf7b250728",
        3453: "d9c5617f839524264b61",
        3557: "1c73fed4b8f1ab1b053c",
        3768: "070947eaecba330422a5",
        3784: "4b42faacd5b26f2d9334",
        4033: "9e876dacdd3bcf5229a6",
        4108: "9b043c510ea60bb415a7",
        4171: "412776f8ef12a49a8088",
        4189: "ebf47404367be83eec05",
        4199: "e75981cb31290f1fdb25",
        4238: "50f636644e2a23ae0690",
        4297: "7e675b91e2128971515c",
        4458: "7e6efef54fe907479801",
        4535: "2cd57c4d67b3519eced5",
        4601: "0c9ec16d9892bb82a614",
        4722: "6e269c7e3a94809a0ff4",
        4823: "a5150983b340bf9ccba4",
        4860: "84b5b6c553887873da98",
        4929: "7bf4daa2c38ef6ed334f",
        4964: "8ac36bd3b3bbe17d8617",
        5257: "9f8f296a4e69a8b619b2",
        5438: "6cf3dc1ea45b373d34a1",
        5625: "a3bcac6bdb7155a80f08",
        5849: "959014d7fa364119b5ce",
        5888: "685b36bad0799198812c",
        5925: "a6fee7daf704bd5f1cb4",
        5933: "18ae32ea24eef8a3ae54",
        5948: "2408aa52b4300ea515f1",
        6007: "c779cdfadcdb8f2201b9",
        6019: "5cc1065b711d0aa4e68e",
        6035: "5b9ffe10eb165c5850dc",
        6087: "57a74a7614f38ec58f1e",
        6117: "a256440f0ce0aac56a95",
        6169: "efc8524c15804e68405d",
        6492: "80ea53164297d696547f",
        6542: "676fb5b95679be99bade",
        6699: "04b60c2f5d07fadc496c",
        6815: "c6c217e9ae351b958328",
        6817: "f17ebc77f492e6fd4a98",
        6846: "512715f713f37c2f97ef",
        7082: "cbc58d457b94c6431769",
        7236: "b38c2599ad15466d87ed",
        7334: "ae933c0d30763e3a10ed",
        7602: "5a5a690e4f79d29ad03a",
        7762: "6d7b950f614d1b3e56c9",
        7781: "76a6cba1a2895587befb",
        7871: "0bef3cdfe81fd8ad597b",
        7890: "70d21542ad74e84bec08",
        7940: "aef15f4451ebd73cae5a",
        7942: "7c22ac5b068287c588e3",
        7951: "86e6905b68c032984ca9",
        7975: "7ab80bbd5500a5cc6386",
        8001: "f5ce83acf3bbc79c6460",
        8051: "a69bf0c5059b7a166bf7",
        8155: "f71a78788207dcb23ce2",
        8168: "4a9d57179624cc45f2bf",
        8385: "245ad7685baef8788bf1",
        8774: "38c6fded431691e3a81a",
        8960: "606868ac4600d9fe7f02",
        8974: "f67938ed23a9460aa8f9",
        8994: "47625278413751e57f79",
        9060: "791af918a39abccb1761",
        9062: "6592a4a072d15b96d608",
        9431: "125ceddb0ef357268fbf",
        9568: "8c390ec061c03ebb47cc",
        9603: "4fa351b1f2bf092cbd21",
        9663: "1e9f98da2a1b5b5292ff",
        9753: "a1457a0116e87d1d4e7b",
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
        2136: "cb3c9581a9e7802b4f36",
        2522: "8279f8b0d9f01a25d0f1",
        2529: "1d875bac23ac1f93b8a5",
        4535: "7730cf1e226c29e9af86",
        4601: "aa016ff83508d04130af",
        5888: "d9392781d4decd8ba27f",
        6699: "0defe1bc174a3c2f6333",
        7334: "7e8a36e0d1b4b4a7f566",
        7762: "e3a2b8e7ea298a4cb539",
        8974: "0c6e674e51f1be5f380c",
        9060: "7f0955936f8323d05a8e",
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
    (f.l = (e, a, n, s) => {
      if (d[e]) d[e].push(a);
      else {
        var t, c;
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
              t = b;
              break;
            }
          }
        t ||
          ((c = !0),
          ((t = document.createElement("script")).charset = "utf-8"),
          (t.timeout = 120),
          f.nc && t.setAttribute("nonce", f.nc),
          t.setAttribute("data-webpack", r + n),
          (t.src = e)),
          (d[e] = [a]);
        var h = (a, n) => {
            (t.onerror = t.onload = null), clearTimeout(m);
            var r = d[e];
            if (
              (delete d[e],
              t.parentNode && t.parentNode.removeChild(t),
              r && r.forEach((e) => e(n)),
              a)
            )
              return a(n);
          },
          m = setTimeout(
            h.bind(null, void 0, { type: "timeout", target: t }),
            12e4
          );
        (t.onerror = h.bind(null, t.onerror)),
          (t.onload = h.bind(null, t.onload)),
          c && document.head.appendChild(t);
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
    (s = (e) =>
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
                (t = n[d]).getAttribute("data-href") || t.getAttribute("href");
              if ("stylesheet" === t.rel && (r === e || r === a)) return t;
            }
            var s = document.getElementsByTagName("style");
            for (d = 0; d < s.length; d++) {
              var t;
              if ((r = (t = s[d]).getAttribute("data-href")) === e || r === a)
                return t;
            }
          })(d, r)
        )
          return a();
        ((e, a, n, d) => {
          var r = document.createElement("link");
          (r.rel = "stylesheet"),
            (r.type = "text/css"),
            (r.onerror = r.onload =
              (s) => {
                if (((r.onerror = r.onload = null), "load" === s.type)) n();
                else {
                  var t = s && ("load" === s.type ? "missing" : s.type),
                    c = (s && s.target && s.target.href) || a,
                    i = new Error(
                      "Loading CSS chunk " + e + " failed.\n(" + c + ")"
                    );
                  (i.code = "CSS_CHUNK_LOAD_FAILED"),
                    (i.type = t),
                    (i.request = c),
                    r.parentNode.removeChild(r),
                    d(i);
                }
              }),
            (r.href = a),
            document.head.appendChild(r);
        })(e, r, a, n);
      })),
    (t = { 6700: 0 }),
    (f.f.miniCss = (e, a) => {
      t[e]
        ? a.push(t[e])
        : 0 !== t[e] &&
          {
            493: 1,
            2136: 1,
            2522: 1,
            2529: 1,
            4535: 1,
            4601: 1,
            5888: 1,
            6699: 1,
            7334: 1,
            7762: 1,
            8974: 1,
            9060: 1,
          }[e] &&
          a.push(
            (t[e] = s(e).then(
              () => {
                t[e] = 0;
              },
              (a) => {
                throw (delete t[e], a);
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
            var s = f.p + f.u(a),
              t = new Error();
            f.l(
              s,
              (n) => {
                if (f.o(e, a) && (0 !== (d = e[a]) && (e[a] = void 0), d)) {
                  var r = n && ("load" === n.type ? "missing" : n.type),
                    s = n && n.target && n.target.src;
                  (t.message =
                    "Loading chunk " + a + " failed.\n(" + r + ": " + s + ")"),
                    (t.name = "ChunkLoadError"),
                    (t.type = r),
                    (t.request = s),
                    d[1](t);
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
            [s, t, c] = n,
            i = 0;
          if (s.some((a) => 0 !== e[a])) {
            for (d in t) f.o(t, d) && (f.m[d] = t[d]);
            if (c) var o = c(f);
          }
          for (a && a(n); i < s.length; i++)
            (r = s[i]), f.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
          return f.O(o);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
