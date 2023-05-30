/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8091704";
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
        145: "dedbce031981dd191fcf",
        493: "1337c2145dbf06161fac",
        494: "05fe723268d8d8f38ede",
        614: "cf5a894ed77d3a7fdc02",
        647: "4a5de2c239ce8855e596",
        698: "191faad3965638d5e5fb",
        727: "b6faa68a567966e5aba7",
        799: "dc7fe956751fe1640022",
        819: "40a3c8cd51fa3baec5a7",
        874: "1eb3311f9b5f81d19f15",
        903: "92753ef6e6e267459ab0",
        1117: "80670dea3e3aa8507bc5",
        1162: "06fa94f6ec055398b8ca",
        1254: "6cf92c2fc6c9f3b66647",
        1313: "cd7b49f38bf163cb167c",
        2029: "7fd08f7e11313713d62f",
        2120: "e02f02063dada506965c",
        2136: "a34d34df8150f969a1b0",
        2360: "3b8fe0afe48e380d5413",
        2431: "145183afb5a012b6f5f7",
        2443: "8d3555a654a6c1b9a350",
        2448: "37e1e66cc24ac0e1de88",
        2522: "7a08a77d44921911ebbc",
        2529: "a0bf3298bc4735d5de75",
        2537: "0f0a54b030d0df1747c0",
        2581: "4faf81549bcb29ffbcc1",
        2601: "f7b4702f22d79b60e954",
        2767: "974fc8c0801fbf64859a",
        2824: "31ec6bfe801658a8210c",
        2844: "361d672e74ad43eab3b4",
        2848: "6c5a15553c638622f952",
        2942: "d409f4520aa74eadb513",
        3069: "9b1e88e2991c03e6c138",
        3112: "3a05468be3eefb87d494",
        3143: "a67158b5e5faca3a398b",
        3185: "3c0634d673b92be2e55a",
        3252: "f16ff7b7b0a245b65798",
        3277: "69f8e422727076d861c2",
        3323: "3b29f22cd60c14ba0b6d",
        3359: "3b0a983ab8dacebe1c0c",
        3453: "bfba0458bf010127532f",
        3504: "82fc73f1e7298285b78b",
        3557: "8972d7e2a095de96582e",
        3768: "c18e7ac6151e5fb7cf44",
        4033: "79af9480aed91bb9aaf7",
        4108: "584c30bc0f328b4c9cfb",
        4171: "74b824a0c3458fc28009",
        4189: "47040ca444055592909c",
        4199: "68e6011e1319404611d2",
        4238: "5495e688c09146b85702",
        4297: "f11f8814f3b6996c8d9e",
        4458: "8c8b8c88120be1c4be9d",
        4535: "a289443d24be748b230e",
        4601: "cbaf39aa421a98aef398",
        4722: "b968c7eae250b3144e6d",
        4823: "4b74feb67b1f8e715011",
        4860: "dde17a79061fbdc875aa",
        4929: "39d358e958030aae6d9b",
        4935: "e549316a15e5aaa4a089",
        4964: "dc48b1c5085da8d832a7",
        5117: "e7e4dc2bb4f02bba65f2",
        5257: "37c9289198764b146ddc",
        5438: "dd77e3c1c9f5a2988f9f",
        5625: "7ee3103384df2f6c68d6",
        5676: "90f68e4332e7cc1726df",
        5849: "18bc5341af9e1e1a34fc",
        5925: "a52d9fd33de8d3aeb76d",
        5933: "a840c5153606393b1ff6",
        5948: "7027a7fe0f4278950c0e",
        6007: "e99c55b1c5075be132d3",
        6019: "4cbfc920d0fbaa27c344",
        6035: "6450d577bd240f8e2bcc",
        6087: "a8ed2b2a380aa9aa4341",
        6169: "c6439631d640a941cd76",
        6492: "1ae2ddffd91207c4a1c9",
        6542: "8f62cc290e93c956f27b",
        6699: "1430e46f795588e2cf58",
        6815: "3c6975e7950ea36913b0",
        6817: "6e86132645a25b817395",
        6846: "d727634417ab505f03fc",
        7037: "f66a545f46fdc9829dec",
        7082: "a94f29456a3148cdc51b",
        7236: "4cfbfdcd921200a35f04",
        7334: "2d8205bc3b76486ff974",
        7602: "ef0c2ec740cebaed24d6",
        7762: "9d7bf86900c8749d9742",
        7781: "825322263644b0db38a1",
        7871: "2aa996621c9a1e08df35",
        7890: "8212e9ccd18eb186314e",
        7942: "0a30742a1b6fca63f916",
        7951: "4d15dd9615e340082ad7",
        7975: "71f866968e7c32f325b2",
        8001: "d77d47d02ec7d7fde061",
        8051: "268f6a2d9c0ec2a32a96",
        8155: "169acc2eea99a8892cb6",
        8168: "d28e66e5069e3e66e07a",
        8385: "03df518b2c4983b657ed",
        8774: "ab684e49ad3d89cc0640",
        8960: "5ebf7f1e1081dee8fb3a",
        8974: "f02ec61ec71164f6b15f",
        8994: "4430150ff49625ac384c",
        9035: "9b49528f8f6672d4c141",
        9062: "6d2757d2c9d73245c134",
        9160: "12de61e546cb6cee2620",
        9431: "149ef08763b9b1865ec4",
        9568: "19883dd2f8cc063cb566",
        9603: "ec65eb2ff6f93e929dc0",
        9663: "3d0b557612e94c68c038",
        9753: "615e8e8fcff1aa966d79",
        9899: "5fc0fefa688880bca2e1",
        9903: "d1b0bc283f0933cac642",
        9919: "874525ecdd1d0ef57e63",
        9980: "28b5d0a33238c827bedc",
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
        2136: "cde00a6c65681b58eb5e",
        2522: "08508b89777d546af5ee",
        2529: "db681d451145fea22ce2",
        3504: "ffaaf76543fd09ac9532",
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
