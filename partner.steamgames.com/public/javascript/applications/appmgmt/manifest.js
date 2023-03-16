/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7924427";
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
  function f(e) {
    var a = c[e];
    if (void 0 !== a) return a.exports;
    var n = (c[e] = { id: e, loaded: !1, exports: {} });
    return i[e].call(n.exports, n, n.exports, f), (n.loaded = !0), n.exports;
  }
  (f.m = i),
    (e = []),
    (f.O = (a, n, r, d) => {
      if (!n) {
        var s = 1 / 0;
        for (o = 0; o < e.length; o++) {
          for (var [n, r, d] = e[o], t = !0, i = 0; i < n.length; i++)
            (!1 & d || s >= d) && Object.keys(f.O).every((e) => f.O[e](n[i]))
              ? n.splice(i--, 1)
              : ((t = !1), d < s && (s = d));
          if (t) {
            e.splice(o--, 1);
            var c = r();
            void 0 !== c && (a = c);
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
      var s = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var t = 2 & r && e; "object" == typeof t && !~a.indexOf(t); t = n(t))
        Object.getOwnPropertyNames(t).forEach((a) => (s[a] = () => e[a]));
      return (s.default = () => e), f.d(d, s), d;
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
        131: "60a1ea26c38bb9480e60",
        145: "18eae3092ac42be3b00b",
        493: "4a8040e19a3fe7df135a",
        494: "05fe723268d8d8f38ede",
        614: "8161db84d000e99e0f98",
        647: "f8d5c3ac45570c204275",
        698: "a2f9ae3ea11ff61505a6",
        727: "8783fa470be239f6916a",
        799: "ebdfd859255aa93b20ec",
        819: "72b6eed63c426e29aa75",
        874: "4ea584589b5ba89f0194",
        903: "f9da19890463e7598454",
        907: "ceedb74475dfa32296d7",
        1117: "d425bcea24d66463831a",
        1162: "43b23a3971c95bafc4b7",
        1233: "8a72bb136a319770f909",
        1313: "d37278fc18c2d797c697",
        2029: "2fcb14ac93dee16eeb12",
        2055: "37a43e879acda3fdf2a2",
        2120: "8c072467bd791e564e8b",
        2136: "534770f8579c9691f8c0",
        2431: "1d644fd6ec6f77ecb3b0",
        2443: "d33282f394624048b1d8",
        2448: "83825b69c43d60e4da02",
        2522: "a55ea2eef6a334b40173",
        2529: "b33a74c820b65cd350a8",
        2537: "2d7f200269b04aceca75",
        2581: "d2d4ae433d3bc3f70b07",
        2601: "8cdb0fb08d919f211e51",
        2767: "ea75eb0436f6ac663dda",
        2824: "308649544fa00b5da11d",
        2844: "32be67e8713b8c919995",
        2848: "2bbee639f3f2de382902",
        2942: "426471d8048aec668436",
        3069: "2c30e5fa9dafa7bffeb6",
        3112: "9599fd14aa986663f70e",
        3185: "409a6c89c0830a1a5aa7",
        3252: "4cf45830dabc2ec049fb",
        3277: "20699b143b5f5b517c8d",
        3323: "8847b0ee2fb49424f1b7",
        3359: "da0efe69b3b298dc4f98",
        3453: "ab9154a5ddb8680fdaa3",
        3504: "47120af1c4cb29e87533",
        3557: "0221c306a1bae0cebdf9",
        3574: "8ead3cbaa2360a94ca2a",
        3768: "3fa1d339bd2e5ebea8d4",
        3860: "677d99590e8ac98286a2",
        4033: "09705615feedb6c4b970",
        4108: "a37a76a66a210a1ba0b6",
        4171: "6c8001f2116167057fff",
        4189: "5f9527b89ec69b0e9972",
        4199: "b05f6a41950a4073f6df",
        4238: "2676e9a545ea4cbaf48a",
        4297: "37345a266b57b7acf8cb",
        4458: "875842c0bd27ecf71a87",
        4535: "b7899a9761348ec2f181",
        4601: "d4685702bd86d8065eed",
        4722: "32237b4b870fbed8ccee",
        4823: "af3e2668ac34a2a01124",
        4860: "56a2577469345578cac0",
        4929: "2af7f089afc6d03ece49",
        4935: "cdfe4ffa4f15e6360fd9",
        4964: "a557454d6d8a3780aed8",
        5117: "915adb29dbb1653ce74c",
        5257: "1175fc3e70e13c1a0593",
        5438: "a8f8148b54bb701a829c",
        5625: "46dd7f19a5eb14c31da7",
        5676: "adf9064449d1443bd30f",
        5849: "5bc6cf41cad28305d1f8",
        5925: "ca136681098aa3d72ba9",
        5933: "4d53c71a2f27f4fd1682",
        5948: "cc184f17715746729b24",
        6007: "ceef6dd8467796e943e1",
        6019: "36a68b52e33dc8875771",
        6035: "13a4c4c1410133d8d7b7",
        6087: "78840645608423264248",
        6169: "c20b160ee6a6178baa6b",
        6492: "d20564c126421bcc8815",
        6542: "a182a4eb925eb7a32d03",
        6699: "bf533d0de49c08855e8c",
        6815: "acea72ae56564defbe60",
        6817: "3b71371ed2bd537a806f",
        6846: "54e6d218e46a2a59cff6",
        7037: "1e8860001e715b5c2f26",
        7082: "65d502fd82cbdabd4b7e",
        7236: "350065925bca1e8d9c93",
        7334: "e376bc58238cabdba3a1",
        7602: "49322a5f361431822157",
        7762: "c05fdea15a2ca2a5a45d",
        7781: "4929f8b58e31a49ad1f2",
        7871: "d944abd95133354a1510",
        7890: "23edc00cb84bc9486641",
        7942: "d8fc0c123b66f1f05d73",
        7951: "4b62d6f10cd328a6c24a",
        7975: "151354fb02b5a7fb384e",
        8001: "a8f0773110b27318f142",
        8051: "fb557c2c55f641998f92",
        8052: "7e549ed07aac7208fc8d",
        8155: "c584a659d378839963a8",
        8168: "e8095286e02ee0436573",
        8385: "f151b75a44e98b3e9616",
        8774: "e89705c9b6c998ddf58f",
        8960: "fc0cfaf44c36a497b9c9",
        8974: "4c2dbb2cd4f6bafdcceb",
        8994: "10026647200221d8450f",
        9062: "332f5fb60bc29e25c211",
        9315: "905b3c4a6f4d01ab5b71",
        9431: "d430ca50f1f1c9b48caa",
        9568: "ed1fe75d186bad1443b6",
        9603: "a7e98b7968229d2e7ee3",
        9663: "bc5d2f4536d59ba6a00f",
        9753: "4fcdf2d76bf74917caec",
        9899: "12674cb2843b822a2fdf",
        9903: "b906bae3108e40ba588c",
        9919: "b7ae198176b4b754bcf7",
        9980: "38ea8b7ce717a123d915",
      }[e]),
    (f.miniCssF = (e) =>
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
        131: "879f8334fe10b3207252",
        493: "f38ba98b44af4fc0288a",
        2136: "d62cd9a149e6c7628d98",
        2522: "f7200c2653bc0de8b21b",
        2529: "af92258c5aff3107eefb",
        3504: "5a9ddd947d9a79f92467",
        3860: "b594b4bd87f4f17b753c",
        4601: "f441e6a81a93e0fe73fc",
        4935: "b7abea9ad444fe28cc7e",
        5676: "3c5747338c6d1696a9bd",
        6699: "8f35dd7dd80b677b2dc2",
        7762: "d61f93a707d7e363fa5a",
        8974: "99c7815fc4ca8a63ab52",
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
    (f.l = (e, a, n, s) => {
      if (r[e]) r[e].push(a);
      else {
        var t, i;
        if (void 0 !== n)
          for (
            var c = document.getElementsByTagName("script"), o = 0;
            o < c.length;
            o++
          ) {
            var b = c[o];
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
          f.nc && t.setAttribute("nonce", f.nc),
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
    (f.f.miniCss = (e, a) => {
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
      (f.f.j = (a, n) => {
        var r = f.o(e, a) ? e[a] : void 0;
        if (0 !== r)
          if (r) n.push(r[2]);
          else if (6700 != a) {
            var d = new Promise((n, d) => (r = e[a] = [n, d]));
            n.push((r[2] = d));
            var s = f.p + f.u(a),
              t = new Error();
            f.l(
              s,
              (n) => {
                if (f.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
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
        (f.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var r,
            d,
            [s, t, i] = n,
            c = 0;
          if (s.some((a) => 0 !== e[a])) {
            for (r in t) f.o(t, r) && (f.m[r] = t[r]);
            if (i) var o = i(f);
          }
          for (a && a(n); c < s.length; c++)
            (d = s[c]), f.o(e, d) && e[d] && e[d][0](), (e[d] = 0);
          return f.O(o);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
