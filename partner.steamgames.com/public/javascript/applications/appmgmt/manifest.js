/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7811484";
(() => {
  "use strict";
  var e,
    a,
    n,
    r,
    c,
    d,
    s,
    t = {},
    i = {};
  function o(e) {
    var a = i[e];
    if (void 0 !== a) return a.exports;
    var n = (i[e] = { id: e, loaded: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, o), (n.loaded = !0), n.exports;
  }
  (o.m = t),
    (e = []),
    (o.O = (a, n, r, c) => {
      if (!n) {
        var d = 1 / 0;
        for (b = 0; b < e.length; b++) {
          for (var [n, r, c] = e[b], s = !0, t = 0; t < n.length; t++)
            (!1 & c || d >= c) && Object.keys(o.O).every((e) => o.O[e](n[t]))
              ? n.splice(t--, 1)
              : ((s = !1), c < d && (d = c));
          if (s) {
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
      var d = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var s = 2 & r && e; "object" == typeof s && !~a.indexOf(s); s = n(s))
        Object.getOwnPropertyNames(s).forEach((a) => (d[a] = () => e[a]));
      return (d.default = () => e), o.d(c, d), c;
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
        647: "9a626f82409a2133f9fc",
        698: "91f94220f2a16e4fa9d1",
        727: "aaf7ee227f8394f8a93b",
        799: "8f7d8863b256486105f8",
        819: "018fd8857afe16ce5459",
        874: "7a3baa9de36bb59e6a09",
        903: "e12ef77830267bf1f2cb",
        907: "374ea5852961d11d72e2",
        1117: "c82797e47e3a29a544dc",
        1162: "aca42099b278cdbc5d3a",
        1313: "b38847e487948772a8fe",
        2029: "a59527d0540a72406547",
        2120: "5409cb703c584764d465",
        2136: "d690f0ad520d1c6eace0",
        2431: "fe5ea733482a8a8976a5",
        2443: "e9ec8748785e6c432d54",
        2448: "1e4ad5d9521cc2956d6d",
        2522: "976f0eebc99b849cc2fe",
        2529: "c84406cb2c8e776722b7",
        2537: "8ecd7f34b5cc434caaec",
        2581: "ad18b5d7564fc371d365",
        2601: "a0b9efc87ee0cf99415b",
        2767: "1d6d40b59d0dc1ca42da",
        2824: "75d13215760f30471cb5",
        2844: "5117b174e97d1e276509",
        2848: "6df58474fb0655ecf1df",
        2942: "b9339b87b5d3a0452b85",
        3069: "4c1806619db7a528571a",
        3112: "eabd249418326853ac07",
        3185: "13a3bc7007f1d5aaa545",
        3252: "18cc52f66fa990c7346a",
        3277: "292c7d0e393381071d2b",
        3323: "4038af608b97b30e3d0c",
        3353: "7e3b9f41fe3098061501",
        3359: "b413c58c9a3ca3f816d7",
        3453: "d9c5617f839524264b61",
        3557: "fe395e9567f4d7421062",
        3768: "a32e15c847b60810f74e",
        3784: "21dfb42e01dbe783c8a0",
        4033: "9e876dacdd3bcf5229a6",
        4108: "e601b6a6eeab8ce032cc",
        4171: "a87160e9abc05c3917b1",
        4189: "7427635789e6fad0ee62",
        4199: "762f6f0e7f710cafbff9",
        4238: "50f636644e2a23ae0690",
        4297: "61590b125013d127fc5a",
        4458: "7e6efef54fe907479801",
        4535: "4ca23d1873d3e142080a",
        4601: "a045bef955e4c19eaa53",
        4722: "2e16264800c39554e489",
        4823: "3662f908d01e5578f37f",
        4860: "57f45a261207592b2720",
        4929: "7bf4daa2c38ef6ed334f",
        4935: "67cd79d8063e2bd23d12",
        4964: "85669003eb54a3be5fc8",
        5117: "babbe54f40914a1d5bba",
        5257: "9f8f296a4e69a8b619b2",
        5438: "cc8093752c51e8fc04c2",
        5625: "8c9014b6b3d4c237e7ce",
        5676: "49bde19d06317c8cefc9",
        5849: "69d5a3648f02f35d9e74",
        5888: "bf596bfe1c897bd0ae47",
        5925: "dba495835edda170fd49",
        5933: "7193813bbe154a2cbef2",
        5948: "4c34f3f72a5c3e9fd06b",
        6007: "29553b5a13aee28c33a7",
        6019: "5cc1065b711d0aa4e68e",
        6035: "5b9ffe10eb165c5850dc",
        6087: "aacd044b9f1aeea04728",
        6117: "e020f638f5d8f0890c8c",
        6169: "efc8524c15804e68405d",
        6492: "541365cf07d5aaf4ff30",
        6542: "9da52eb3068d1cd340d4",
        6699: "cc3c82167cd89c0dbecb",
        6815: "f2ea4111786e8c5e0aa7",
        6817: "b78046a366fa75d612d5",
        6846: "512715f713f37c2f97ef",
        7037: "381a3e4d1d32e219e9ad",
        7082: "cbc58d457b94c6431769",
        7236: "cd76e4e6fd8d205441cd",
        7334: "f5408368ee5e032bfa79",
        7602: "5a2ca5d74fc3a988d36e",
        7762: "9784117219bafc7407eb",
        7781: "448daae176275023e245",
        7871: "0bef3cdfe81fd8ad597b",
        7890: "216f7e02d2d50e57f63e",
        7940: "7f6fd02a2c3ff2427172",
        7942: "7c22ac5b068287c588e3",
        7951: "36021bb3ab47e059d960",
        7975: "328a4d397ce1b4bbc32f",
        8001: "f5ce83acf3bbc79c6460",
        8051: "1d78b136e32db9268c61",
        8155: "75b6e340b0f2c62aa68a",
        8168: "8fe8df7400862d8bad88",
        8385: "c03760941757f6bdbdc6",
        8774: "38c6fded431691e3a81a",
        8960: "606868ac4600d9fe7f02",
        8974: "1fbf6584668711a51361",
        8994: "47625278413751e57f79",
        9035: "b68b686be235388c6b0d",
        9060: "f8ed8af2a5d0959fe186",
        9062: "b68347cd1db26aad7010",
        9431: "3c292261ad57795dd531",
        9568: "d62d64631025aef5b93a",
        9603: "3eacd5b27e59e923724f",
        9663: "b934cd92f39675544069",
        9753: "8d106aca5690c6f9b5d4",
        9899: "4ba468909483eea11d5e",
        9903: "4130b2308d677163ea6c",
        9919: "4671150433a4d9096c85",
        9980: "6059833c01c0a86d4259",
      }[e]),
    (o.miniCssF = (e) =>
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
        2136: "9decb140ade8c308a8aa",
        2522: "7751c352d0c9c6aa48d6",
        2529: "a1e88cc0287ab64dcc27",
        4535: "1e8d4c2f448ef0f3b8ad",
        4601: "eb529b6ef7b3aac8e613",
        4935: "b7abea9ad444fe28cc7e",
        5676: "65ade468b63bee82af3c",
        5888: "70c0a4ef72d21b3e5501",
        6699: "9fa3fddd5d335b690c0a",
        7334: "f77999515b3e71577bdd",
        7762: "e3a2b8e7ea298a4cb539",
        8974: "30bc272190fd7a2c443a",
        9035: "0a119707f2fbdc857531",
        9060: "199482f89a01d898e9dc",
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
    (o.l = (e, a, n, d) => {
      if (r[e]) r[e].push(a);
      else {
        var s, t;
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
              s = f;
              break;
            }
          }
        s ||
          ((t = !0),
          ((s = document.createElement("script")).charset = "utf-8"),
          (s.timeout = 120),
          o.nc && s.setAttribute("nonce", o.nc),
          s.setAttribute("data-webpack", c + n),
          (s.src = e)),
          (r[e] = [a]);
        var h = (a, n) => {
            (s.onerror = s.onload = null), clearTimeout(l);
            var c = r[e];
            if (
              (delete r[e],
              s.parentNode && s.parentNode.removeChild(s),
              c && c.forEach((e) => e(n)),
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
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (o.p = e + "../../../");
    })(),
    (d = (e) =>
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
                (s = n[r]).getAttribute("data-href") || s.getAttribute("href");
              if ("stylesheet" === s.rel && (c === e || c === a)) return s;
            }
            var d = document.getElementsByTagName("style");
            for (r = 0; r < d.length; r++) {
              var s;
              if ((c = (s = d[r]).getAttribute("data-href")) === e || c === a)
                return s;
            }
          })(r, c)
        )
          return a();
        ((e, a, n, r) => {
          var c = document.createElement("link");
          (c.rel = "stylesheet"),
            (c.type = "text/css"),
            (c.onerror = c.onload =
              (d) => {
                if (((c.onerror = c.onload = null), "load" === d.type)) n();
                else {
                  var s = d && ("load" === d.type ? "missing" : d.type),
                    t = (d && d.target && d.target.href) || a,
                    i = new Error(
                      "Loading CSS chunk " + e + " failed.\n(" + t + ")"
                    );
                  (i.code = "CSS_CHUNK_LOAD_FAILED"),
                    (i.type = s),
                    (i.request = t),
                    c.parentNode.removeChild(c),
                    r(i);
                }
              }),
            (c.href = a),
            document.head.appendChild(c);
        })(e, c, a, n);
      })),
    (s = { 6700: 0 }),
    (o.f.miniCss = (e, a) => {
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
            (s[e] = d(e).then(
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
      (o.f.j = (a, n) => {
        var r = o.o(e, a) ? e[a] : void 0;
        if (0 !== r)
          if (r) n.push(r[2]);
          else if (6700 != a) {
            var c = new Promise((n, c) => (r = e[a] = [n, c]));
            n.push((r[2] = c));
            var d = o.p + o.u(a),
              s = new Error();
            o.l(
              d,
              (n) => {
                if (o.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var c = n && ("load" === n.type ? "missing" : n.type),
                    d = n && n.target && n.target.src;
                  (s.message =
                    "Loading chunk " + a + " failed.\n(" + c + ": " + d + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = c),
                    (s.request = d),
                    r[1](s);
                }
              },
              "chunk-" + a,
              a
            );
          } else e[a] = 0;
      }),
        (o.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var r,
            c,
            [d, s, t] = n,
            i = 0;
          if (d.some((a) => 0 !== e[a])) {
            for (r in s) o.o(s, r) && (o.m[r] = s[r]);
            if (t) var b = t(o);
          }
          for (a && a(n); i < d.length; i++)
            (c = d[i]), o.o(e, c) && e[c] && e[c][0](), (e[c] = 0);
          return o.O(b);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
