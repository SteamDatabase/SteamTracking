/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7482114";
(() => {
  "use strict";
  var e,
    a,
    n,
    r,
    d,
    s,
    t,
    i = {},
    o = {};
  function c(e) {
    var a = o[e];
    if (void 0 !== a) return a.exports;
    var n = (o[e] = { id: e, loaded: !1, exports: {} });
    return i[e].call(n.exports, n, n.exports, c), (n.loaded = !0), n.exports;
  }
  (c.m = i),
    (e = []),
    (c.O = (a, n, r, d) => {
      if (!n) {
        var s = 1 / 0;
        for (f = 0; f < e.length; f++) {
          for (var [n, r, d] = e[f], t = !0, i = 0; i < n.length; i++)
            (!1 & d || s >= d) && Object.keys(c.O).every((e) => c.O[e](n[i]))
              ? n.splice(i--, 1)
              : ((t = !1), d < s && (s = d));
          if (t) {
            e.splice(f--, 1);
            var o = r();
            void 0 !== o && (a = o);
          }
        }
        return a;
      }
      d = d || 0;
      for (var f = e.length; f > 0 && e[f - 1][2] > d; f--) e[f] = e[f - 1];
      e[f] = [n, r, d];
    }),
    (c.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return c.d(a, { a }), a;
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (c.t = function (e, r) {
      if ((1 & r && (e = this(e)), 8 & r)) return e;
      if ("object" == typeof e && e) {
        if (4 & r && e.__esModule) return e;
        if (16 & r && "function" == typeof e.then) return e;
      }
      var d = Object.create(null);
      c.r(d);
      var s = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var t = 2 & r && e; "object" == typeof t && !~a.indexOf(t); t = n(t))
        Object.getOwnPropertyNames(t).forEach((a) => (s[a] = () => e[a]));
      return (s.default = () => e), c.d(d, s), d;
    }),
    (c.d = (e, a) => {
      for (var n in a)
        c.o(a, n) &&
          !c.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: a[n] });
    }),
    (c.f = {}),
    (c.e = (e) =>
      Promise.all(Object.keys(c.f).reduce((a, n) => (c.f[n](e, a), a), []))),
    (c.u = (e) =>
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
        2029: "shared_sc_schinese-json",
        2136: "events",
        2431: "shared_arabic-json",
        2443: "shared_latam-json",
        2448: "marketing_polish-json",
        2522: "logoedtior",
        2529: "pricingtool",
        2537: "shared_schinese-json",
        2581: "marketing_danish-json",
        2584: "chunk~59e71612b",
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
        4696: "libraries~59e71612b",
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
        7245: "chunk~b70782b28",
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
        493: "c64dca69a7f261bba615",
        647: "4f8972ede421a9f5ab48",
        698: "425eacdaabba0154aad5",
        727: "127a493e2e2c3c7bee26",
        799: "37f26d40e8aff0951f90",
        819: "4d5c39dec6d2e5087f74",
        874: "3affccff0ad93cf6abde",
        903: "89fa65e77cda2e763089",
        1117: "7cc519647e38dd9f4cec",
        1162: "8a578a5f2794327ea85d",
        1313: "9620642c60862f5bc2e6",
        2029: "590083161416eaabccb4",
        2136: "63d836e1cdae230d3b61",
        2431: "fe5ea733482a8a8976a5",
        2443: "19257b18e621e04cace0",
        2448: "7843dda343ddad95fa9d",
        2522: "b6c14fca06dae8e501ef",
        2529: "3ac9c688619416ad0ef3",
        2537: "10d7fb281abed132e920",
        2581: "d4356baf2bea97a10106",
        2584: "81d44d92a3f14ce3ccfb",
        2601: "7449db1375d1f0a459dc",
        2767: "6ef4596ad0b394333e62",
        2824: "e4ebc49212779106b86f",
        2844: "bbc79947b6bd9f3f7695",
        2848: "2504032a1b1d988ac87b",
        2942: "cac355b041e33b036c96",
        3069: "e33186e3c17b5589abd0",
        3112: "d5db00839a6802dc8e39",
        3185: "c1ae654b10992845a0af",
        3252: "bfdf9c265440a1af0789",
        3277: "29ef42d081f121efbe7e",
        3323: "bf1044efc7698952cf27",
        3359: "6e5da44cd2e586852e74",
        3453: "32496e6140fec98886e6",
        3557: "24c7ed182dca055952c5",
        3768: "004662d636099bbccf19",
        3784: "108250ee4ee20ad44225",
        4033: "fb7f1ea181a9cff034a1",
        4108: "1fd6bda4c97677f92aba",
        4171: "a2c9de1545935ce13eff",
        4189: "e7738c4474a00a729e29",
        4199: "f8a0483bd9e903d201a2",
        4238: "0c2acada271be2027cc7",
        4297: "186d327cd77491b6529b",
        4458: "0bc3e6ee7fcc67fa27ea",
        4535: "0d2510fcd407545d361e",
        4601: "9fb7469e68e03a0f9e34",
        4696: "b1d900572a5763fb2f4c",
        4722: "e46a54a70cc93d282a6b",
        4823: "3cda63dff4759f80295e",
        4860: "9af254a5e75d341a08fb",
        4929: "347de2c867ad1aefc6a1",
        4964: "09b66b834938c4b542fb",
        5257: "18958703c976b72a7c8f",
        5438: "b578ba933088e46a82f5",
        5625: "da5f960248e7c32225bd",
        5849: "9cf9ff83d5abf42d040c",
        5888: "7916f47f775d2df9028c",
        5925: "79736fc6103e8848d6cc",
        5933: "90a9400b96f38da3314f",
        5948: "c6be09dae8bf61e4605f",
        6007: "16c926842e93a06e1952",
        6019: "7cc81a737bee257c1d60",
        6035: "c60650656b0ae61c775c",
        6087: "ea36e141dec7f0a027d5",
        6117: "1dd438c5580566e68652",
        6169: "625b2c5a380149a72556",
        6492: "a168b160db43766f5da7",
        6542: "d1c3879a01727e072d0a",
        6699: "04b60c2f5d07fadc496c",
        6815: "30a1503a8805e4f20f80",
        6817: "56ca3f0683461507d487",
        6846: "e4b7179e0e870f589585",
        7082: "4064b1ab9b375aa3ba74",
        7236: "750dfd3042f929937d96",
        7245: "e1891c3266aae1c94446",
        7334: "85817607dbfceb83450c",
        7602: "df964c76f3344f201fcb",
        7762: "bcf0155f2f29fe8489bf",
        7781: "18aad8490bd97db68dc5",
        7871: "71902116a78429065824",
        7890: "b58f3c8e3eedaa58ec3f",
        7940: "aef15f4451ebd73cae5a",
        7942: "b67276fb77d9771a6ffe",
        7951: "ad98cab758db0e27b5b1",
        7975: "5b11a2819899adb81947",
        8001: "853fc6d96f7e4eddf4d8",
        8051: "15cbf2108c6678af5f8e",
        8155: "b2db6eb30412bd8406a6",
        8168: "820b4bc82442c404e5ce",
        8385: "05ebaff463fd40ff5e13",
        8774: "a8befffdd10a8b5ba725",
        8960: "d1a811d24b052d247622",
        8974: "9dff4c752936f34fb4fe",
        8994: "4057e7d4cc4f7b8d439c",
        9060: "fce48bf027e457e3f2fc",
        9062: "7864e12d7534f8ef7e12",
        9431: "f64dd05024851654ee4f",
        9568: "c61ff27a8aed4b3a5bfa",
        9603: "f9f6a01c5bce6aee1f36",
        9663: "d30a8313051196abda75",
        9753: "39167327fccefd0fc08b",
        9899: "d774ff0f3a6dec70cbb4",
        9903: "88db48fd05c51a05e08e",
        9919: "4671150433a4d9096c85",
        9980: "c7edfe4eaf6a05942e20",
      }[e]),
    (c.miniCssF = (e) =>
      "css/applications/appmgmt/" +
      {
        493: "libraries~29ab6dbf5",
        2136: "events",
        2522: "logoedtior",
        2529: "pricingtool",
        4601: "broadcast",
        5888: "chunk~ab4a73d6e",
        6699: "steamdeck",
        7762: "steamml",
        8974: "storeadmin",
        9060: "chunk~b3fafa6d2",
      }[e] +
      ".css?contenthash=" +
      {
        493: "d885e31859d50e4d4824",
        2136: "deb4357889b9ec49dd84",
        2522: "b1596d727e0bf9992e67",
        2529: "94df61ffe9a3da1421a7",
        4601: "2418b380a15889c1c130",
        5888: "ffece8ed43c4b8dfee38",
        6699: "255576ed648944357d8c",
        7762: "e3a2b8e7ea298a4cb539",
        8974: "34af48c4c49095b449e7",
        9060: "0b8ca185a6b93887acbc",
      }[e]),
    (c.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (c.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
    (r = {}),
    (d = "appmgmt-storeadmin:"),
    (c.l = (e, a, n, s) => {
      if (r[e]) r[e].push(a);
      else {
        var t, i;
        if (void 0 !== n)
          for (
            var o = document.getElementsByTagName("script"), f = 0;
            f < o.length;
            f++
          ) {
            var b = o[f];
            if (
              b.getAttribute("src") == e ||
              b.getAttribute("data-webpack") == d + n
            ) {
              t = b;
              break;
            }
          }
        t ||
          ((i = !0),
          ((t = document.createElement("script")).charset = "utf-8"),
          (t.timeout = 120),
          c.nc && t.setAttribute("nonce", c.nc),
          t.setAttribute("data-webpack", d + n),
          (t.src = e)),
          (r[e] = [a]);
        var h = (a, n) => {
            (t.onerror = t.onload = null), clearTimeout(m);
            var d = r[e];
            if (
              (delete r[e],
              t.parentNode && t.parentNode.removeChild(t),
              d && d.forEach((e) => e(n)),
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
          i && document.head.appendChild(t);
      }
    }),
    (c.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (c.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      var e;
      c.g.importScripts && (e = c.g.location + "");
      var a = c.g.document;
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
        (c.p = e + "../../../");
    })(),
    (s = (e) =>
      new Promise((a, n) => {
        var r = c.miniCssF(e),
          d = c.p + r;
        if (
          ((e, a) => {
            for (
              var n = document.getElementsByTagName("link"), r = 0;
              r < n.length;
              r++
            ) {
              var d =
                (t = n[r]).getAttribute("data-href") || t.getAttribute("href");
              if ("stylesheet" === t.rel && (d === e || d === a)) return t;
            }
            var s = document.getElementsByTagName("style");
            for (r = 0; r < s.length; r++) {
              var t;
              if ((d = (t = s[r]).getAttribute("data-href")) === e || d === a)
                return t;
            }
          })(r, d)
        )
          return a();
        ((e, a, n, r) => {
          var d = document.createElement("link");
          (d.rel = "stylesheet"),
            (d.type = "text/css"),
            (d.onerror = d.onload =
              (s) => {
                if (((d.onerror = d.onload = null), "load" === s.type)) n();
                else {
                  var t = s && ("load" === s.type ? "missing" : s.type),
                    i = (s && s.target && s.target.href) || a,
                    o = new Error(
                      "Loading CSS chunk " + e + " failed.\n(" + i + ")"
                    );
                  (o.code = "CSS_CHUNK_LOAD_FAILED"),
                    (o.type = t),
                    (o.request = i),
                    d.parentNode.removeChild(d),
                    r(o);
                }
              }),
            (d.href = a),
            document.head.appendChild(d);
        })(e, d, a, n);
      })),
    (t = { 6700: 0 }),
    (c.f.miniCss = (e, a) => {
      t[e]
        ? a.push(t[e])
        : 0 !== t[e] &&
          {
            493: 1,
            2136: 1,
            2522: 1,
            2529: 1,
            4601: 1,
            5888: 1,
            6699: 1,
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
      (c.f.j = (a, n) => {
        var r = c.o(e, a) ? e[a] : void 0;
        if (0 !== r)
          if (r) n.push(r[2]);
          else if (6700 != a) {
            var d = new Promise((n, d) => (r = e[a] = [n, d]));
            n.push((r[2] = d));
            var s = c.p + c.u(a),
              t = new Error();
            c.l(
              s,
              (n) => {
                if (c.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var d = n && ("load" === n.type ? "missing" : n.type),
                    s = n && n.target && n.target.src;
                  (t.message =
                    "Loading chunk " + a + " failed.\n(" + d + ": " + s + ")"),
                    (t.name = "ChunkLoadError"),
                    (t.type = d),
                    (t.request = s),
                    r[1](t);
                }
              },
              "chunk-" + a,
              a
            );
          } else e[a] = 0;
      }),
        (c.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var r,
            d,
            [s, t, i] = n,
            o = 0;
          if (s.some((a) => 0 !== e[a])) {
            for (r in t) c.o(t, r) && (c.m[r] = t[r]);
            if (i) var f = i(c);
          }
          for (a && a(n); o < s.length; o++)
            (d = s[o]), c.o(e, d) && e[d] && e[d][0](), (e[d] = 0);
          return c.O(f);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
