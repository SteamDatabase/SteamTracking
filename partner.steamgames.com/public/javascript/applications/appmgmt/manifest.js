/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8132300";
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
    c = {};
  function o(e) {
    var a = c[e];
    if (void 0 !== a) return a.exports;
    var n = (c[e] = { id: e, loaded: !1, exports: {} });
    return i[e].call(n.exports, n, n.exports, o), (n.loaded = !0), n.exports;
  }
  (o.m = i),
    (e = []),
    (o.O = (a, n, r, d) => {
      if (!n) {
        var s = 1 / 0;
        for (b = 0; b < e.length; b++) {
          for (var [n, r, d] = e[b], t = !0, i = 0; i < n.length; i++)
            (!1 & d || s >= d) && Object.keys(o.O).every((e) => o.O[e](n[i]))
              ? n.splice(i--, 1)
              : ((t = !1), d < s && (s = d));
          if (t) {
            e.splice(b--, 1);
            var c = r();
            void 0 !== c && (a = c);
          }
        }
        return a;
      }
      d = d || 0;
      for (var b = e.length; b > 0 && e[b - 1][2] > d; b--) e[b] = e[b - 1];
      e[b] = [n, r, d];
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
      var d = Object.create(null);
      o.r(d);
      var s = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var t = 2 & r && e; "object" == typeof t && !~a.indexOf(t); t = n(t))
        Object.getOwnPropertyNames(t).forEach((a) => (s[a] = () => e[a]));
      return (s.default = () => e), o.d(d, s), d;
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
        131: "eedb3a95bc516bd58511",
        145: "8f5a7120c26ef5d2d7f6",
        493: "1337c2145dbf06161fac",
        494: "05fe723268d8d8f38ede",
        614: "cf5a894ed77d3a7fdc02",
        647: "ccfb6f8df68e218eeb0b",
        698: "f5d01c3f12a5305e04b3",
        727: "157f63afe693b785e177",
        799: "f8acf26ad09b97bc99a6",
        819: "40a3c8cd51fa3baec5a7",
        874: "1eb3311f9b5f81d19f15",
        903: "78f33fb655cfed69eb32",
        1117: "2677b5d6fe108ae53462",
        1162: "6151871b64eaba57a183",
        1254: "6cf92c2fc6c9f3b66647",
        1313: "72e19081899ffe962be5",
        2029: "7fd08f7e11313713d62f",
        2120: "e02f02063dada506965c",
        2136: "1a6c8971e37600e92d9e",
        2360: "3b8fe0afe48e380d5413",
        2431: "145183afb5a012b6f5f7",
        2443: "51ca111d75f03df2a681",
        2448: "37e1e66cc24ac0e1de88",
        2522: "7a08a77d44921911ebbc",
        2529: "0dc19b0af03cd0312469",
        2537: "b0d865a19f7b558374ff",
        2581: "4faf81549bcb29ffbcc1",
        2601: "4fb01cee6c2e4cc8878b",
        2767: "64350ff6072a3d6f2e32",
        2824: "31ec6bfe801658a8210c",
        2844: "1255eebe7b9606a2c36a",
        2848: "1a6bbbca523917597ddf",
        2856: "fde4e41146f852b0ea33",
        2942: "0ff552c6b3487ef0af37",
        3069: "9b1e88e2991c03e6c138",
        3112: "ef4486db42730b09c809",
        3143: "a67158b5e5faca3a398b",
        3185: "85ec30918f6fc62c01ba",
        3252: "d4c84fcd8dadced345f6",
        3277: "7a61bcae68ef9c89c3cd",
        3323: "9492f0d0893da8b4d99b",
        3359: "6148ab1c29670e4e786a",
        3453: "fe087b4540d985fc4f88",
        3504: "be627df84366a408f20e",
        3557: "f52009b32371106b51b9",
        3768: "5376d4a4ecd1e0123ff6",
        4023: "f75b23dba8f16a9398c5",
        4033: "79af9480aed91bb9aaf7",
        4108: "1c1c806ea9fd1eaa72ab",
        4171: "74b824a0c3458fc28009",
        4189: "fb123e5d829d5b1218d4",
        4199: "68e6011e1319404611d2",
        4238: "5495e688c09146b85702",
        4297: "51acd19b3173f5d00b86",
        4458: "8c8b8c88120be1c4be9d",
        4535: "066308aa43da6983a9ce",
        4601: "89b277b8af012fbcbc44",
        4722: "25583457de6144e714bd",
        4823: "0c8987dc65dd63531d6a",
        4860: "3f03e4fcfa9ea3c62857",
        4929: "7aeca0563098d0da2d1d",
        4935: "e549316a15e5aaa4a089",
        4964: "699df0724006beb11a71",
        5117: "fe02739faca7c40c162b",
        5257: "1f617f5fd5351588a5c3",
        5438: "b6011de2e8cfa22c199f",
        5625: "75ff3007570b36d29321",
        5676: "2db60ce97ffa506ca8a4",
        5849: "149f02fa452155f027e4",
        5925: "7b3dfe2365fbfb6cef5c",
        5933: "17a643435c6c3c3267e4",
        5948: "07fe6d4a08de3fcf0b75",
        6007: "1a9bafe786c631b7e0cb",
        6019: "4cbfc920d0fbaa27c344",
        6035: "6450d577bd240f8e2bcc",
        6087: "30cd745671695ad2e8e8",
        6169: "848a698ce1b3664d1e85",
        6492: "2e185aeeb364a6ec8618",
        6542: "4a74ea27a53ecb48f95d",
        6699: "1430e46f795588e2cf58",
        6815: "e1b5925b81570eaa0698",
        6817: "169aab0b32e95f5cbac2",
        6846: "1df2c3e154d2d6b97429",
        7082: "a94f29456a3148cdc51b",
        7236: "f22e567849cefd4c0b8f",
        7334: "9c56c19cbf9431b28d18",
        7602: "83db91fd457968159290",
        7762: "9d7bf86900c8749d9742",
        7781: "853d1b2f4645eee0165a",
        7871: "31f886f951e88f7caada",
        7890: "051c87be04b63d98df21",
        7942: "0a30742a1b6fca63f916",
        7951: "4306f8979d75a8ee489f",
        7975: "115495dddc23957d4672",
        8001: "2c087e2eca4526a6d76f",
        8051: "050143022f63bee5e73b",
        8155: "d05799a203ad9d7d4b21",
        8168: "a849b6cae1154bbed5d9",
        8385: "7d617ae49069d163f88f",
        8774: "ab684e49ad3d89cc0640",
        8960: "5ebf7f1e1081dee8fb3a",
        8974: "b6d29e2bbf5e966eb197",
        8994: "cd8279a0921e5d4b1a50",
        9035: "9b49528f8f6672d4c141",
        9062: "f17a79322c8973950a3a",
        9160: "09d9df3b5a661608673c",
        9431: "6f26a69838e108b59270",
        9568: "3bdf4597a09987a4f631",
        9603: "d0d6442967d0b3ae6afe",
        9663: "94a131d18c007de2ac28",
        9753: "fecaa9508a3e9a166f73",
        9899: "5fc0fefa688880bca2e1",
        9903: "d1b0bc283f0933cac642",
        9919: "874525ecdd1d0ef57e63",
        9980: "f5c9ec67ea1aea0c9fd6",
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
        2136: "5e842824a44387770858",
        2522: "568a668c02defe940a0c",
        2529: "db681d451145fea22ce2",
        3504: "885f58c386867f165d15",
        4601: "f441e6a81a93e0fe73fc",
        4935: "59890b790fbf2cc93831",
        5676: "0303f6b87a17e746ff83",
        6699: "3a19f92cb04178af6cdb",
        7762: "d61f93a707d7e363fa5a",
        8974: "c79bccbe91afd7ff7284",
        9160: "2b80a2af2b902d268990",
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
    (d = "appmgmt-storeadmin:"),
    (o.l = (e, a, n, s) => {
      if (r[e]) r[e].push(a);
      else {
        var t, i;
        if (void 0 !== n)
          for (
            var c = document.getElementsByTagName("script"), b = 0;
            b < c.length;
            b++
          ) {
            var f = c[b];
            if (
              f.getAttribute("src") == e ||
              f.getAttribute("data-webpack") == d + n
            ) {
              t = f;
              break;
            }
          }
        t ||
          ((i = !0),
          ((t = document.createElement("script")).charset = "utf-8"),
          (t.timeout = 120),
          o.nc && t.setAttribute("nonce", o.nc),
          t.setAttribute("data-webpack", d + n),
          (t.src = e)),
          (r[e] = [a]);
        var h = (a, n) => {
            (t.onerror = t.onload = null), clearTimeout(l);
            var d = r[e];
            if (
              (delete r[e],
              t.parentNode && t.parentNode.removeChild(t),
              d && d.forEach((e) => e(n)),
              a)
            )
              return a(n);
          },
          l = setTimeout(
            h.bind(null, void 0, { type: "timeout", target: t }),
            12e4
          );
        (t.onerror = h.bind(null, t.onerror)),
          (t.onload = h.bind(null, t.onload)),
          i && document.head.appendChild(t);
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
    (s = (e) =>
      new Promise((a, n) => {
        var r = o.miniCssF(e),
          d = o.p + r;
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
                    c = new Error(
                      "Loading CSS chunk " + e + " failed.\n(" + i + ")"
                    );
                  (c.code = "CSS_CHUNK_LOAD_FAILED"),
                    (c.type = t),
                    (c.request = i),
                    d.parentNode.removeChild(d),
                    r(c);
                }
              }),
            (d.href = a),
            document.head.appendChild(d);
        })(e, d, a, n);
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
            var d = new Promise((n, d) => (r = e[a] = [n, d]));
            n.push((r[2] = d));
            var s = o.p + o.u(a),
              t = new Error();
            o.l(
              s,
              (n) => {
                if (o.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
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
        (o.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var r,
            d,
            [s, t, i] = n,
            c = 0;
          if (s.some((a) => 0 !== e[a])) {
            for (r in t) o.o(t, r) && (o.m[r] = t[r]);
            if (i) var b = i(o);
          }
          for (a && a(n); c < s.length; c++)
            (d = s[c]), o.o(e, d) && e[d] && e[d][0](), (e[d] = 0);
          return o.O(b);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
