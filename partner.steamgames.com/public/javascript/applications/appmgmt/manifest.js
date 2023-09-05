/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8315438";
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
        131: "cdf2f57d46d91e390711",
        145: "c9eeace7c44e7f18b602",
        493: "1337c2145dbf06161fac",
        494: "05fe723268d8d8f38ede",
        614: "cf5a894ed77d3a7fdc02",
        647: "ce505d8245470b995a7c",
        698: "dd9d3537b99928d86b93",
        727: "86f32d36ab90a0330605",
        799: "2f795d165010ab6b6457",
        819: "64442d28113da1544b4b",
        874: "1ecc1e71cb506e37cb43",
        903: "d828074ed1017d6406fb",
        1117: "4e6a7c01d3c19c5d17ab",
        1162: "553668c4bd71ecfafc39",
        1254: "2d01e63a63dd4ebb1ab5",
        1313: "8e7d97e4536962e83dc1",
        2029: "f897cbda3ee7255e616f",
        2120: "c7a981c2505166ba75ce",
        2136: "eb39585783854cd8c338",
        2360: "cff15fc83eb02e134be8",
        2431: "db7452b1af041ac5e119",
        2443: "a2995f653014f86add5c",
        2448: "2d1e2eba4934c9b222dd",
        2522: "1877d96554f42c54a8c7",
        2529: "0ff5a7ce9c2b2b46aa92",
        2537: "562c199821b8c4faf652",
        2581: "3d19b17020be2290d52d",
        2601: "1773a189fbe68a568431",
        2767: "6a722bb0e51d63289cf2",
        2824: "1fd57e6f09233a634bd2",
        2844: "e3302a2c02da4f68595f",
        2848: "c3b5017d2cef1bf1afea",
        2856: "fde4e41146f852b0ea33",
        2942: "aeb3eae5208f9c7ee681",
        3069: "be4f942bec2764f56eff",
        3112: "6fe92ac379a8d7b3a5af",
        3143: "a67158b5e5faca3a398b",
        3185: "7a7c9d47e98efd5a2e05",
        3252: "f922bee57f87d5fff0e0",
        3277: "ee4d9edf3ac35819e4fe",
        3323: "51ee8478cb98f787c89a",
        3359: "7b6de0c3f84c4b994947",
        3453: "ab0ec6d27abdd645bc50",
        3504: "ed08bd8116e13594b9b2",
        3557: "4cace64bcb2d90fa91f3",
        3768: "3ba4e6a0d5c42e3142bf",
        4023: "456281db293989426504",
        4033: "0858d12254b46732b591",
        4108: "69df7e51376ab04fdb19",
        4171: "a572d381cc372f7a7fa0",
        4189: "402e8a5f77d234e0b6f7",
        4199: "fef63592460ee9d5e550",
        4238: "a1fc9c12db9b4912040d",
        4297: "490d666a0396817e63c9",
        4458: "2d86facaacb144bd1ccc",
        4535: "7276ce24f62757f2c285",
        4601: "00be4465071f789d8e4f",
        4722: "76b59127687f56ef3677",
        4823: "49e447555874394979df",
        4860: "9fe53a7d722ec733f133",
        4929: "27728b43649b4fad559a",
        4935: "19c13863e2bc947d6710",
        4964: "c54845359d2888c88fc9",
        5117: "fe02739faca7c40c162b",
        5257: "b18dde22a3260715b381",
        5438: "49303403636329363041",
        5625: "4e64ddd82fc318137a43",
        5676: "9cd6ea425b6f8ae3bbd2",
        5849: "c7573c50e00fd2d722e5",
        5925: "c277426a2b2669e13bb0",
        5933: "8892806d17ce3c0cfa3a",
        5948: "b5ca031ad5709838a6df",
        6007: "9f5a14bcec891b6ec81b",
        6019: "a9dc675a8b76bd7c1a7d",
        6035: "0e8a44307646aff12e25",
        6087: "733c1ecd6f3d198b25a8",
        6169: "96f4e53482d648425321",
        6492: "c8ccc07b4be8774d5590",
        6542: "76b61e3f78d5a7978283",
        6699: "71cb9afa2264852ce790",
        6815: "54b1fb23f1d57d7c53dc",
        6817: "7f250496e2744bd45c1b",
        6846: "8c318beea2f43fadace6",
        7072: "bcb69799f692725f1df5",
        7082: "7ce4c77ef1dd348e77b3",
        7236: "4e5d1a38189135c9fd37",
        7334: "51ea30d1ea76618dc1e6",
        7602: "2017dd4374029c93bfbd",
        7762: "da8a7602e5ced16fd5c8",
        7781: "469e206f6f532105ccf6",
        7871: "10e9cab3cbf0ab48d312",
        7890: "840c9f6e27ad69c4f72a",
        7942: "3eb6a79a11bbe18cb066",
        7951: "9fcd714b18de9b084c32",
        7975: "4edac6897e3d853617fd",
        8001: "82225344359cecc36047",
        8051: "d3ff665ddec1166843ca",
        8155: "3292f944bf611ad36670",
        8168: "7d9ad96f2ce57a138397",
        8385: "a1a9a0cc2ba677542fd6",
        8399: "3b4bfdd5c73a62bf9ea5",
        8754: "de474d6ff3e456f578ee",
        8774: "5ea3d0f26f8c19305e2f",
        8960: "4321965fc6a442c1b209",
        8974: "590ef4c52db9c8e806da",
        8994: "bfb44d764eee710c0c59",
        9035: "9b49528f8f6672d4c141",
        9062: "f191b68e179a0e8e1f66",
        9160: "cb108b130a5992c0d6c0",
        9431: "de7cf5e983166b4b26f9",
        9568: "0edd4eb79c49ebc86f64",
        9603: "7c716d6cbded5df22270",
        9663: "25009da57b299a0df3aa",
        9753: "3bc94038145867abe82c",
        9899: "dbe7957f7bd64ecf5300",
        9903: "8af6d55d14ed1d7d23ec",
        9919: "b695729c2721f3f80138",
        9980: "8b4d047f0ef09e4234f7",
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
        2136: "61de932aa25ce99f1aee",
        2522: "568a668c02defe940a0c",
        2529: "b63f54f64beede925f71",
        3504: "27138f48e3b414dd7ed2",
        4601: "9b9120b674ef378127fd",
        4935: "59890b790fbf2cc93831",
        5676: "d0287df8605cf5ca6ca3",
        6699: "3a19f92cb04178af6cdb",
        7762: "d61f93a707d7e363fa5a",
        8974: "f095e8a4476b0c5b677f",
        9160: "031e4d40636a0f102a63",
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
            (s.onerror = s.onload = null), clearTimeout(m);
            var c = r[e];
            if (
              (delete r[e],
              s.parentNode && s.parentNode.removeChild(s),
              c && c.forEach((e) => e(n)),
              a)
            )
              return a(n);
          },
          m = setTimeout(
            h.bind(null, void 0, { type: "timeout", target: s }),
            12e4,
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
                      "Loading CSS chunk " + e + " failed.\n(" + t + ")",
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
            (s[e] = d(e).then(
              () => {
                s[e] = 0;
              },
              (a) => {
                throw (delete s[e], a);
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
              a,
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
