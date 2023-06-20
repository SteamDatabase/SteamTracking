/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8142073";
(() => {
  "use strict";
  var e,
    a,
    n,
    r,
    d,
    s,
    t,
    c = {},
    i = {};
  function o(e) {
    var a = i[e];
    if (void 0 !== a) return a.exports;
    var n = (i[e] = { id: e, loaded: !1, exports: {} });
    return c[e].call(n.exports, n, n.exports, o), (n.loaded = !0), n.exports;
  }
  (o.m = c),
    (e = []),
    (o.O = (a, n, r, d) => {
      if (!n) {
        var s = 1 / 0;
        for (b = 0; b < e.length; b++) {
          for (var [n, r, d] = e[b], t = !0, c = 0; c < n.length; c++)
            (!1 & d || s >= d) && Object.keys(o.O).every((e) => o.O[e](n[c]))
              ? n.splice(c--, 1)
              : ((t = !1), d < s && (s = d));
          if (t) {
            e.splice(b--, 1);
            var i = r();
            void 0 !== i && (a = i);
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
        131: "f3a33ae37c3259699949",
        145: "8f5a7120c26ef5d2d7f6",
        493: "1337c2145dbf06161fac",
        494: "05fe723268d8d8f38ede",
        614: "cf5a894ed77d3a7fdc02",
        647: "b3595148d0128260bae8",
        698: "197c56c05e5e1a611981",
        727: "4037e2ce1766767a7eaf",
        799: "4b619cae08754a2d9ed0",
        819: "d8e103020cc845d0a38c",
        874: "7f87e3cc1242036981c5",
        903: "78f33fb655cfed69eb32",
        1117: "a57914b5ffd0b7a5276b",
        1162: "535d51c107a66039acff",
        1254: "6cf92c2fc6c9f3b66647",
        1313: "e7102ac7df8396c0f6c5",
        2029: "7fd08f7e11313713d62f",
        2120: "e02f02063dada506965c",
        2136: "f04f674cb9389cdc9239",
        2360: "3b8fe0afe48e380d5413",
        2431: "145183afb5a012b6f5f7",
        2443: "b6800d2d219245263bf5",
        2448: "5d0550319771b11f7161",
        2522: "7a08a77d44921911ebbc",
        2529: "0dc19b0af03cd0312469",
        2537: "973c9d12a68a71820943",
        2581: "fe5f5bf3a067c9c479e1",
        2601: "4fb01cee6c2e4cc8878b",
        2767: "52b000cc924403905136",
        2824: "d2ed077d64242e538488",
        2844: "ec62148f6c4a16cf3648",
        2848: "4c947e7e60bf617d6a19",
        2856: "fde4e41146f852b0ea33",
        2942: "1ae017e155829b4e4a28",
        3069: "9b1e88e2991c03e6c138",
        3112: "3e806730c23292ff3e2b",
        3143: "a67158b5e5faca3a398b",
        3185: "2b5eb7c89bc355b24971",
        3252: "387572ea48da2d011e39",
        3277: "1c28933b518535871583",
        3323: "d193ec012e27efc68972",
        3359: "b1e35d3785c1d690c148",
        3453: "fe087b4540d985fc4f88",
        3504: "545b95148712a961d6a2",
        3557: "682ea86f67779364207d",
        3768: "3041bd11590bdd04f3ad",
        4023: "f75b23dba8f16a9398c5",
        4033: "5d44497d0063e998efd5",
        4108: "adf72a58118d628e7559",
        4171: "bdf5bf85beca5a242da1",
        4189: "fb123e5d829d5b1218d4",
        4199: "e83e89a83dbbba1840d1",
        4238: "0197343b794a3d04ed87",
        4297: "bc2dddae69105e7c31a4",
        4458: "b4cb9f4a1d2efcff69a7",
        4535: "066308aa43da6983a9ce",
        4601: "89b277b8af012fbcbc44",
        4722: "764879d149eaf1234ac9",
        4823: "1878731c121fed6d87b2",
        4860: "c13d6da0316de744eacd",
        4929: "7aeca0563098d0da2d1d",
        4935: "e549316a15e5aaa4a089",
        4964: "598e714fd368ad80e954",
        5117: "fe02739faca7c40c162b",
        5257: "1f617f5fd5351588a5c3",
        5438: "6a31eb31859d4d0d99f0",
        5625: "716a011d4e16692f88df",
        5676: "7ae659623be06e497aae",
        5849: "9e6bb9d35849f67fcfe6",
        5925: "3b18e01d8b2b2767b0d8",
        5933: "a464f607dd2db42c5e2e",
        5948: "58891e7177d2173bd0c1",
        6007: "5181e924f8f07a7a3f18",
        6019: "9e5a868bed1c4785a06f",
        6035: "a0ca994e03e2a61a2335",
        6087: "ef711e015dd01e890f51",
        6169: "848a698ce1b3664d1e85",
        6492: "145f88feaba80ce0a3d9",
        6542: "e67fe838391024527482",
        6699: "1430e46f795588e2cf58",
        6815: "e092930f24ea73fa19f3",
        6817: "fbc2d2c2e5194d6328fc",
        6846: "1df2c3e154d2d6b97429",
        7082: "79ac8efacbce415b40f9",
        7236: "9bd7c2b4cfcc4c774c79",
        7334: "9c56c19cbf9431b28d18",
        7602: "8d3f3edd72e38a23c84f",
        7762: "9d7bf86900c8749d9742",
        7781: "90d3e8a4985fae96f67d",
        7871: "bcc376f23245b2fd23b6",
        7890: "8429eb3d8b3ddf4d7595",
        7942: "771e61f95ead2f4fb189",
        7951: "1d1f13f51c3d19b1d5cc",
        7975: "115495dddc23957d4672",
        8001: "2c087e2eca4526a6d76f",
        8051: "e6ae9d86800bfa664300",
        8155: "9155f4497b49fd0715d1",
        8168: "30f6d09b76afb1a8a125",
        8385: "45762a34733ac969fc18",
        8774: "8545ab36b7b97ba30f69",
        8960: "bbdb64b6dc62430e7609",
        8974: "b6d29e2bbf5e966eb197",
        8994: "cd8279a0921e5d4b1a50",
        9035: "9b49528f8f6672d4c141",
        9062: "f9a064baa88daa85565b",
        9160: "e1b01104cb307d2e87ca",
        9431: "e2447994c0622e4ca8eb",
        9568: "6f98c5b596e4af1e7e8c",
        9603: "d0d6442967d0b3ae6afe",
        9663: "ffa7306fa798346d943c",
        9753: "2698684098aae552e740",
        9899: "e79b883cfdddd3b84246",
        9903: "f573044e1d980ce92a93",
        9919: "874525ecdd1d0ef57e63",
        9980: "8fea3b4bdbf964a63a26",
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
        2136: "ba2ef8e124633791d7a2",
        2522: "568a668c02defe940a0c",
        2529: "db681d451145fea22ce2",
        3504: "cc2430fd11f7b822fea0",
        4601: "f441e6a81a93e0fe73fc",
        4935: "59890b790fbf2cc93831",
        5676: "0303f6b87a17e746ff83",
        6699: "3a19f92cb04178af6cdb",
        7762: "d61f93a707d7e363fa5a",
        8974: "c79bccbe91afd7ff7284",
        9160: "7639856fa30db7ead417",
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
        var t, c;
        if (void 0 !== n)
          for (
            var i = document.getElementsByTagName("script"), b = 0;
            b < i.length;
            b++
          ) {
            var f = i[b];
            if (
              f.getAttribute("src") == e ||
              f.getAttribute("data-webpack") == d + n
            ) {
              t = f;
              break;
            }
          }
        t ||
          ((c = !0),
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
          c && document.head.appendChild(t);
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
                    c = (s && s.target && s.target.href) || a,
                    i = new Error(
                      "Loading CSS chunk " + e + " failed.\n(" + c + ")"
                    );
                  (i.code = "CSS_CHUNK_LOAD_FAILED"),
                    (i.type = t),
                    (i.request = c),
                    d.parentNode.removeChild(d),
                    r(i);
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
            [s, t, c] = n,
            i = 0;
          if (s.some((a) => 0 !== e[a])) {
            for (r in t) o.o(t, r) && (o.m[r] = t[r]);
            if (c) var b = c(o);
          }
          for (a && a(n); i < s.length; i++)
            (d = s[i]), o.o(e, d) && e[d] && e[d][0](), (e[d] = 0);
          return o.O(b);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
