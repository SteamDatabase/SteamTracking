/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8053823";
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
        907: "chunk~441eeb0f7",
        1117: "main_french-json",
        1162: "shared_thai-json",
        1233: "libraries~dbdf8b1dd",
        1254: "chunk~0deb13453",
        1313: "shared_bulgarian-json",
        2029: "shared_sc_schinese-json",
        2055: "chunk~b79647cb4",
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
        3504: "chunk~bee9b953c",
        3557: "shared_finnish-json",
        3574: "libraries~00d94646f",
        3768: "main_finnish-json",
        3860: "chunk~dbdf8b1dd",
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
        7037: "libraries~d511f1559",
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
        8052: "chunk~ce86493bf",
        8155: "main_italian-json",
        8168: "main_vietnamese-json",
        8385: "shared_brazilian-json",
        8774: "marketing_romanian-json",
        8960: "marketing_bulgarian-json",
        8974: "storeadmin",
        8994: "marketing_hungarian-json",
        9062: "shared_russian-json",
        9315: "chunk~75944c423",
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
        131: "1a0ce3d1d5b363d0e465",
        145: "57bb863a77a916ef609b",
        493: "4a8040e19a3fe7df135a",
        494: "05fe723268d8d8f38ede",
        614: "8161db84d000e99e0f98",
        647: "47afd4ea85b06281b9c0",
        698: "7a9d2585ffdd922ff3ee",
        727: "6b309e072734d0d8257e",
        799: "a0c604113651276d7cde",
        819: "40a3c8cd51fa3baec5a7",
        874: "1eb3311f9b5f81d19f15",
        903: "d85b3cc4f3281384dcac",
        907: "e973629133528380c234",
        1117: "bb4f1ca86314ee171e65",
        1162: "fd1993e1e367a7dd8b40",
        1233: "8a72bb136a319770f909",
        1254: "6cf92c2fc6c9f3b66647",
        1313: "97add47884bd0378cea5",
        2029: "255ff009f6b8dbbb74f1",
        2055: "e11ab1c11e516c059cff",
        2120: "8c072467bd791e564e8b",
        2136: "73164a478e1700aa380c",
        2431: "145183afb5a012b6f5f7",
        2443: "f7c5972714b441d55228",
        2448: "37e1e66cc24ac0e1de88",
        2522: "490e4851916cd07a431c",
        2529: "281c8b5d0ff96047c024",
        2537: "35b32b76fba930753e15",
        2581: "4faf81549bcb29ffbcc1",
        2601: "f7b4702f22d79b60e954",
        2767: "ffc757c5a47eae305377",
        2824: "31ec6bfe801658a8210c",
        2844: "3e51751a30967d283e87",
        2848: "61e63007fced7d73ef9d",
        2942: "5abfea97d284c8cee665",
        3069: "69352c58e7c29acf4ebf",
        3112: "294b7a60ec99810a8f1b",
        3185: "f5388df313a08765b8f5",
        3252: "934c39239cc910d62291",
        3277: "9aa7ed084877a1acecd7",
        3323: "7b897f4dfc2d66ee4952",
        3359: "b600f44514a39f4b83dc",
        3453: "bfba0458bf010127532f",
        3504: "18e2a4baff29fee266a8",
        3557: "f37576854183ca4e6a54",
        3574: "8ead3cbaa2360a94ca2a",
        3768: "a6029de3558217749553",
        3860: "6d633516140e0b38ab9d",
        4033: "79af9480aed91bb9aaf7",
        4108: "17f212e95ca8c950d46a",
        4171: "74b824a0c3458fc28009",
        4189: "b2d1ef7747ea5e99de8b",
        4199: "b587ab783c527cbac316",
        4238: "5495e688c09146b85702",
        4297: "b912b593bf1def955557",
        4458: "8c8b8c88120be1c4be9d",
        4535: "eb42b78e605119094932",
        4601: "8ac53ccb6fb8478b7f6c",
        4722: "02303a22fc29bd9185ee",
        4823: "064e86f868196b24448d",
        4860: "7291d36726d0d5ac6556",
        4929: "39d358e958030aae6d9b",
        4935: "5c374b5f0e7f458056f2",
        4964: "88619fb4aa0125f886bd",
        5117: "baa7c8399a358cbe5299",
        5257: "32010da62684134891f5",
        5438: "f96b67280d70a247d57d",
        5625: "d4cf45f84b616561bb00",
        5676: "037190d560dc9dc3740a",
        5849: "9d985f226f5722a89a9b",
        5925: "f3310b6da06ef562c42c",
        5933: "2cec943958005a4921ba",
        5948: "82860f801028cab25259",
        6007: "a2253ffc195ded81b787",
        6019: "4cbfc920d0fbaa27c344",
        6035: "6450d577bd240f8e2bcc",
        6087: "ca6d4bdfab89378c640f",
        6169: "c6439631d640a941cd76",
        6492: "0d553776397e4f67651d",
        6542: "6dad6b84b987f792b283",
        6699: "ac567c5896131b0169a7",
        6815: "c51c96b0669ca7472eb9",
        6817: "d04652ad30e9438caab6",
        6846: "d727634417ab505f03fc",
        7037: "a8fa40e777d1b7db7da4",
        7082: "a94f29456a3148cdc51b",
        7236: "170d26807932c2ff6ebf",
        7334: "08bc9609c4e95f864df7",
        7602: "8faefdf044a9549eaddd",
        7762: "308065534bfaaa5e52d4",
        7781: "eabfd1113770429d4bc7",
        7871: "422a9d851293c39f8d93",
        7890: "901b9df8c3d7f509d7d3",
        7942: "0a30742a1b6fca63f916",
        7951: "6523ce16d76e1957be22",
        7975: "bcdf6fab142dcc77633c",
        8001: "d77d47d02ec7d7fde061",
        8051: "4d176a428bfc0cc0610f",
        8052: "3346dc4e5388bf0957d8",
        8155: "5fd2918a601cde011316",
        8168: "3cf923ee3de7250ed4fe",
        8385: "711df540e9f602b46f30",
        8774: "ab684e49ad3d89cc0640",
        8960: "5ebf7f1e1081dee8fb3a",
        8974: "4e43fe6f010bbc00d495",
        8994: "4430150ff49625ac384c",
        9062: "5a4f7918a429825bcb1a",
        9315: "42d4b0d282ddd1eab8ea",
        9431: "621c9e738538fcda2953",
        9568: "2210c063245a6d7568e4",
        9603: "df78f10d7eed82cb3c04",
        9663: "aea504aa2b9b77540a1d",
        9753: "174d665f8213694c3790",
        9899: "5fc0fefa688880bca2e1",
        9903: "d1b0bc283f0933cac642",
        9919: "874525ecdd1d0ef57e63",
        9980: "7a2fff1286d9fb4482a6",
      }[e]),
    (o.miniCssF = (e) =>
      "css/applications/appmgmt/" +
      {
        131: "chunk~00d94646f",
        493: "libraries~29ab6dbf5",
        2136: "events",
        2522: "logoedtior",
        2529: "pricingtool",
        3504: "chunk~bee9b953c",
        3860: "chunk~dbdf8b1dd",
        4601: "broadcast",
        4935: "sdrconnections",
        5676: "steamlearn",
        6699: "steamdeck",
        7762: "steamml",
        8974: "storeadmin",
      }[e] +
      ".css?contenthash=" +
      {
        131: "5e6766311a2f22c0a318",
        493: "f38ba98b44af4fc0288a",
        2136: "05433be944b731c0a236",
        2522: "08508b89777d546af5ee",
        2529: "af92258c5aff3107eefb",
        3504: "3b5f6da7198028b4edda",
        3860: "886aeefd6f5a7e041aa8",
        4601: "f441e6a81a93e0fe73fc",
        4935: "59890b790fbf2cc93831",
        5676: "390df867b5b4d66beda1",
        6699: "3a19f92cb04178af6cdb",
        7762: "d61f93a707d7e363fa5a",
        8974: "c79bccbe91afd7ff7284",
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
            131: 1,
            493: 1,
            2136: 1,
            2522: 1,
            2529: 1,
            3504: 1,
            3860: 1,
            4601: 1,
            4935: 1,
            5676: 1,
            6699: 1,
            7762: 1,
            8974: 1,
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
