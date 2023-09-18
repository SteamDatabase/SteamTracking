/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8347297";
(() => {
  "use strict";
  var e,
    a,
    n,
    r,
    s,
    c,
    d,
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
    (o.O = (a, n, r, s) => {
      if (!n) {
        var c = 1 / 0;
        for (f = 0; f < e.length; f++) {
          for (var [n, r, s] = e[f], d = !0, t = 0; t < n.length; t++)
            (!1 & s || c >= s) && Object.keys(o.O).every((e) => o.O[e](n[t]))
              ? n.splice(t--, 1)
              : ((d = !1), s < c && (c = s));
          if (d) {
            e.splice(f--, 1);
            var i = r();
            void 0 !== i && (a = i);
          }
        }
        return a;
      }
      s = s || 0;
      for (var f = e.length; f > 0 && e[f - 1][2] > s; f--) e[f] = e[f - 1];
      e[f] = [n, r, s];
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
      var s = Object.create(null);
      o.r(s);
      var c = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var d = 2 & r && e; "object" == typeof d && !~a.indexOf(d); d = n(d))
        Object.getOwnPropertyNames(d).forEach((a) => (c[a] = () => e[a]));
      return (c.default = () => e), o.d(s, c), s;
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
        131: "d771e935d494b0b726bc",
        145: "c9eeace7c44e7f18b602",
        493: "1337c2145dbf06161fac",
        494: "05fe723268d8d8f38ede",
        614: "cf5a894ed77d3a7fdc02",
        647: "d93756ca9ead038fcec3",
        698: "143d43523ee8ed21d9a7",
        727: "15a33acb00e5aae1bc5c",
        799: "e86da756cfc2fd81e26d",
        819: "64442d28113da1544b4b",
        874: "1ecc1e71cb506e37cb43",
        903: "d828074ed1017d6406fb",
        1117: "bafa008063a3404b9c40",
        1162: "33e1c4a867727f840c89",
        1254: "2d01e63a63dd4ebb1ab5",
        1313: "ce8fc7cb628eda7c66a8",
        2029: "f897cbda3ee7255e616f",
        2120: "c7a981c2505166ba75ce",
        2136: "5c307fb4febc74f5483d",
        2360: "cff15fc83eb02e134be8",
        2431: "db7452b1af041ac5e119",
        2443: "f9a6dbdd7cd6e0bd1a78",
        2448: "2d1e2eba4934c9b222dd",
        2522: "1877d96554f42c54a8c7",
        2529: "0022e803bf4ea9caf003",
        2537: "034baebc58b465245edf",
        2581: "3d19b17020be2290d52d",
        2601: "1773a189fbe68a568431",
        2767: "39c9321503485b8d20f0",
        2824: "1fd57e6f09233a634bd2",
        2844: "a24efac0ce976016b5e7",
        2848: "fe43e7b236b2800e28c1",
        2856: "fde4e41146f852b0ea33",
        2942: "021ec054e2295f76e787",
        3069: "be4f942bec2764f56eff",
        3112: "33975a024b3ee8ae3769",
        3143: "a67158b5e5faca3a398b",
        3185: "1c7b543fdcfb985821ab",
        3252: "542aa187239548a31312",
        3277: "f51a06af2d9f8e4e39f7",
        3323: "a63b45d2c67ad5f943ef",
        3359: "b656e962317dcb134a40",
        3453: "ab0ec6d27abdd645bc50",
        3504: "8286c9516ca48b065ae7",
        3557: "15de576a932b77293082",
        3768: "fdd84c1076b590db53b2",
        4023: "456281db293989426504",
        4033: "0858d12254b46732b591",
        4108: "171b4d5f197e4c08cd9c",
        4171: "a572d381cc372f7a7fa0",
        4189: "b3e6c6e81a167a395f3b",
        4199: "fef63592460ee9d5e550",
        4238: "a1fc9c12db9b4912040d",
        4297: "d0020794971d31f1e672",
        4458: "2d86facaacb144bd1ccc",
        4535: "7276ce24f62757f2c285",
        4601: "00be4465071f789d8e4f",
        4722: "dfa01b280c98f00c2fb5",
        4823: "b7baed3c8b2665b08711",
        4860: "ada43e08a261d5835c3d",
        4929: "27728b43649b4fad559a",
        4935: "19c13863e2bc947d6710",
        4964: "990027d4372e10566bd3",
        5117: "fe02739faca7c40c162b",
        5257: "b18dde22a3260715b381",
        5438: "b90f0a4418bf76acfd1b",
        5625: "2df35ce983849283b0df",
        5676: "87bfd93717f715ca35e3",
        5849: "91d218b769f287d4806e",
        5925: "51527e55d2de1fe99617",
        5933: "9aab5ff82f2c4ba63e41",
        5948: "e7de313d83614c88d0b4",
        6007: "ce5f588ead8a516541c8",
        6019: "a9dc675a8b76bd7c1a7d",
        6035: "0e8a44307646aff12e25",
        6087: "841158c9da485f060299",
        6169: "96f4e53482d648425321",
        6492: "742c63246fcc85dd2351",
        6542: "3aa0a1bc42d9c51e8b1a",
        6699: "71cb9afa2264852ce790",
        6815: "585f4804012f758a3056",
        6817: "3d64a0ff4bbaa8733a75",
        6846: "8c318beea2f43fadace6",
        7072: "e829a18f6c5587f3f2a1",
        7082: "7ce4c77ef1dd348e77b3",
        7236: "2b98a699ab91c83e38af",
        7334: "4dabddefaba21412370e",
        7602: "ccdc8542689e6af7ba06",
        7762: "da8a7602e5ced16fd5c8",
        7781: "704f35b7296f2f3b5822",
        7871: "10e9cab3cbf0ab48d312",
        7890: "0a0f016fc55122f7d958",
        7942: "3eb6a79a11bbe18cb066",
        7951: "c2f64310f6e40d604fd4",
        7975: "4edac6897e3d853617fd",
        8001: "82225344359cecc36047",
        8051: "35c2e1212a4bb0a60319",
        8155: "661ab05b1b30afff9443",
        8168: "528a8123332603fd6338",
        8385: "4bd75fa489f4886b3a83",
        8399: "3b4bfdd5c73a62bf9ea5",
        8754: "763696c9bb403b8d33bd",
        8774: "5ea3d0f26f8c19305e2f",
        8960: "4321965fc6a442c1b209",
        8974: "590ef4c52db9c8e806da",
        8994: "bfb44d764eee710c0c59",
        9035: "9b49528f8f6672d4c141",
        9062: "d08613e94e1e53f50167",
        9160: "cb108b130a5992c0d6c0",
        9431: "c839e3030e0ccc140bbe",
        9568: "40c94a8a9bdb07eb4e04",
        9603: "7c716d6cbded5df22270",
        9663: "3c7099abb9ddadbf0d70",
        9753: "255ca58d3576040e7f6d",
        9899: "dbe7957f7bd64ecf5300",
        9903: "8af6d55d14ed1d7d23ec",
        9919: "b695729c2721f3f80138",
        9980: "30ff0af31c4b24b560de",
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
        2529: "b9f477dd8379f0c7982f",
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
    (s = "appmgmt-storeadmin:"),
    (o.l = (e, a, n, c) => {
      if (r[e]) r[e].push(a);
      else {
        var d, t;
        if (void 0 !== n)
          for (
            var i = document.getElementsByTagName("script"), f = 0;
            f < i.length;
            f++
          ) {
            var b = i[f];
            if (
              b.getAttribute("src") == e ||
              b.getAttribute("data-webpack") == s + n
            ) {
              d = b;
              break;
            }
          }
        d ||
          ((t = !0),
          ((d = document.createElement("script")).charset = "utf-8"),
          (d.timeout = 120),
          o.nc && d.setAttribute("nonce", o.nc),
          d.setAttribute("data-webpack", s + n),
          (d.src = e)),
          (r[e] = [a]);
        var h = (a, n) => {
            (d.onerror = d.onload = null), clearTimeout(m);
            var s = r[e];
            if (
              (delete r[e],
              d.parentNode && d.parentNode.removeChild(d),
              s && s.forEach((e) => e(n)),
              a)
            )
              return a(n);
          },
          m = setTimeout(
            h.bind(null, void 0, { type: "timeout", target: d }),
            12e4,
          );
        (d.onerror = h.bind(null, d.onerror)),
          (d.onload = h.bind(null, d.onload)),
          t && document.head.appendChild(d);
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
    (c = (e) =>
      new Promise((a, n) => {
        var r = o.miniCssF(e),
          s = o.p + r;
        if (
          ((e, a) => {
            for (
              var n = document.getElementsByTagName("link"), r = 0;
              r < n.length;
              r++
            ) {
              var s =
                (d = n[r]).getAttribute("data-href") || d.getAttribute("href");
              if ("stylesheet" === d.rel && (s === e || s === a)) return d;
            }
            var c = document.getElementsByTagName("style");
            for (r = 0; r < c.length; r++) {
              var d;
              if ((s = (d = c[r]).getAttribute("data-href")) === e || s === a)
                return d;
            }
          })(r, s)
        )
          return a();
        ((e, a, n, r) => {
          var s = document.createElement("link");
          (s.rel = "stylesheet"),
            (s.type = "text/css"),
            (s.onerror = s.onload =
              (c) => {
                if (((s.onerror = s.onload = null), "load" === c.type)) n();
                else {
                  var d = c && ("load" === c.type ? "missing" : c.type),
                    t = (c && c.target && c.target.href) || a,
                    i = new Error(
                      "Loading CSS chunk " + e + " failed.\n(" + t + ")",
                    );
                  (i.code = "CSS_CHUNK_LOAD_FAILED"),
                    (i.type = d),
                    (i.request = t),
                    s.parentNode.removeChild(s),
                    r(i);
                }
              }),
            (s.href = a),
            document.head.appendChild(s);
        })(e, s, a, n);
      })),
    (d = { 6700: 0 }),
    (o.f.miniCss = (e, a) => {
      d[e]
        ? a.push(d[e])
        : 0 !== d[e] &&
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
            (d[e] = c(e).then(
              () => {
                d[e] = 0;
              },
              (a) => {
                throw (delete d[e], a);
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
            var s = new Promise((n, s) => (r = e[a] = [n, s]));
            n.push((r[2] = s));
            var c = o.p + o.u(a),
              d = new Error();
            o.l(
              c,
              (n) => {
                if (o.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var s = n && ("load" === n.type ? "missing" : n.type),
                    c = n && n.target && n.target.src;
                  (d.message =
                    "Loading chunk " + a + " failed.\n(" + s + ": " + c + ")"),
                    (d.name = "ChunkLoadError"),
                    (d.type = s),
                    (d.request = c),
                    r[1](d);
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
            s,
            [c, d, t] = n,
            i = 0;
          if (c.some((a) => 0 !== e[a])) {
            for (r in d) o.o(d, r) && (o.m[r] = d[r]);
            if (t) var f = t(o);
          }
          for (a && a(n); i < c.length; i++)
            (s = c[i]), o.o(e, s) && e[s] && e[s][0](), (e[s] = 0);
          return o.O(f);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
