/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8073642";
(() => {
  "use strict";
  var e,
    a,
    n,
    r,
    s,
    t,
    d,
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
    (o.O = (a, n, r, s) => {
      if (!n) {
        var t = 1 / 0;
        for (b = 0; b < e.length; b++) {
          for (var [n, r, s] = e[b], d = !0, i = 0; i < n.length; i++)
            (!1 & s || t >= s) && Object.keys(o.O).every((e) => o.O[e](n[i]))
              ? n.splice(i--, 1)
              : ((d = !1), s < t && (t = s));
          if (d) {
            e.splice(b--, 1);
            var c = r();
            void 0 !== c && (a = c);
          }
        }
        return a;
      }
      s = s || 0;
      for (var b = e.length; b > 0 && e[b - 1][2] > s; b--) e[b] = e[b - 1];
      e[b] = [n, r, s];
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
      var t = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var d = 2 & r && e; "object" == typeof d && !~a.indexOf(d); d = n(d))
        Object.getOwnPropertyNames(d).forEach((a) => (t[a] = () => e[a]));
      return (t.default = () => e), o.d(s, t), s;
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
        131: "05f93b618c2e3846daf1",
        145: "5c7cd0fd761412441355",
        493: "4a8040e19a3fe7df135a",
        494: "05fe723268d8d8f38ede",
        614: "8161db84d000e99e0f98",
        647: "1535d7a6af740850ed63",
        698: "4fa4275787b05ae9acba",
        727: "3c31c02226c41719af72",
        799: "67d9aac48510b53f1720",
        819: "40a3c8cd51fa3baec5a7",
        874: "1eb3311f9b5f81d19f15",
        903: "d85b3cc4f3281384dcac",
        907: "e973629133528380c234",
        1117: "2b31d47ac2e177b22dd7",
        1162: "a5b7a5360fc03caadae5",
        1233: "8a72bb136a319770f909",
        1254: "6cf92c2fc6c9f3b66647",
        1313: "e49fb39622b6739acf6e",
        2029: "3d9df38edcd3c93420f6",
        2055: "5186de91bf96fd60b687",
        2120: "8c072467bd791e564e8b",
        2136: "ff8ceab0ca87b4fd2bb5",
        2431: "145183afb5a012b6f5f7",
        2443: "1e793992ea2a131d201e",
        2448: "37e1e66cc24ac0e1de88",
        2522: "1c40220572950397deec",
        2529: "5e80f442eefbc7f4625c",
        2537: "8ef4e6f189888b7c9a15",
        2581: "4faf81549bcb29ffbcc1",
        2601: "f7b4702f22d79b60e954",
        2767: "b615e934b9909b8fe5a5",
        2824: "31ec6bfe801658a8210c",
        2844: "272195f63f7f7fdf4eee",
        2848: "acd99461b6f81d93e9d6",
        2942: "b198d95f9b5742570503",
        3069: "69352c58e7c29acf4ebf",
        3112: "5f9300926eda46bb19f7",
        3185: "ad6b292a104dcaf7dd1a",
        3252: "ff5260eb14e488da7f85",
        3277: "775be5b179286b4e3253",
        3323: "035ce59325be98c3dbf3",
        3359: "6eef3f3ded48db830b32",
        3453: "bfba0458bf010127532f",
        3504: "0b0ce248849c900a6492",
        3557: "231c2474a98258eda810",
        3574: "8ead3cbaa2360a94ca2a",
        3768: "129606ea44b33b457d74",
        3860: "bacb1dae8ad779ad3560",
        4033: "79af9480aed91bb9aaf7",
        4108: "6dffdf271e5bf3bf1f5b",
        4171: "74b824a0c3458fc28009",
        4189: "7887b03c85838d89e8cd",
        4199: "b587ab783c527cbac316",
        4238: "5495e688c09146b85702",
        4297: "93622ce4ac5e4bfb11fd",
        4458: "8c8b8c88120be1c4be9d",
        4535: "280cf96b075bd1858bc8",
        4601: "6268783d08342b72d299",
        4722: "119336699d92edbda14f",
        4823: "7e3366c60347a419695f",
        4860: "eec8ae3d247a1b2d4f76",
        4929: "39d358e958030aae6d9b",
        4935: "467f599627903e706f73",
        4964: "2ebdccb15b9c7ebdf551",
        5117: "baa7c8399a358cbe5299",
        5257: "32010da62684134891f5",
        5438: "fd63678934b3a9e14ac4",
        5625: "20e22eaea943e78786a5",
        5676: "b61153714b78a0cd36c2",
        5849: "23c747ed178f13857c31",
        5925: "b5a642b01d7a032dca92",
        5933: "9706949d1bbdc8b713c9",
        5948: "492571f3fac87d7b96cd",
        6007: "8e5334df81422d8e23dc",
        6019: "4cbfc920d0fbaa27c344",
        6035: "6450d577bd240f8e2bcc",
        6087: "91452382fb0abfc3ece8",
        6169: "c6439631d640a941cd76",
        6492: "4f4707fd28fb566dee47",
        6542: "086fee4b351a9ce6dd5c",
        6699: "ac567c5896131b0169a7",
        6815: "c51c96b0669ca7472eb9",
        6817: "31e72074478b091e6023",
        6846: "d727634417ab505f03fc",
        7037: "a8fa40e777d1b7db7da4",
        7082: "a94f29456a3148cdc51b",
        7236: "c2458c4c3571c953bad2",
        7334: "77900194d4365378fd5a",
        7602: "60495bd8845ce411a76a",
        7762: "9e06f6f0ef535073e7b1",
        7781: "5e95c82c571717b3dd98",
        7871: "422a9d851293c39f8d93",
        7890: "16a5938abd136ce9a605",
        7942: "0a30742a1b6fca63f916",
        7951: "088e0ce4fde2fbf47bdb",
        7975: "b37f6d643451181bdb08",
        8001: "d77d47d02ec7d7fde061",
        8051: "c80ab6a91a8ee523289c",
        8052: "b83c53616fe314a74c50",
        8155: "b763c874552e1f407a0b",
        8168: "990feee5720b6c46ca88",
        8385: "dfe1b31ff4a0d580b39b",
        8774: "ab684e49ad3d89cc0640",
        8960: "5ebf7f1e1081dee8fb3a",
        8974: "4e43fe6f010bbc00d495",
        8994: "4430150ff49625ac384c",
        9062: "9521a8620af92d4a73cb",
        9315: "42d4b0d282ddd1eab8ea",
        9431: "f7f665c8a460f7a25104",
        9568: "3961831f26f2a664fa84",
        9603: "df78f10d7eed82cb3c04",
        9663: "63fac96e0398366bfd05",
        9753: "4ca36cf0209a05b6b95e",
        9899: "5fc0fefa688880bca2e1",
        9903: "d1b0bc283f0933cac642",
        9919: "874525ecdd1d0ef57e63",
        9980: "bcae3f47ec49310faba7",
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
        131: "a477d52966268d8aed4d",
        493: "f38ba98b44af4fc0288a",
        2136: "6d78a402b0f5d68079ca",
        2522: "08508b89777d546af5ee",
        2529: "af92258c5aff3107eefb",
        3504: "60af264cac871e19e383",
        3860: "2b80a2af2b902d268990",
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
    (s = "appmgmt-storeadmin:"),
    (o.l = (e, a, n, t) => {
      if (r[e]) r[e].push(a);
      else {
        var d, i;
        if (void 0 !== n)
          for (
            var c = document.getElementsByTagName("script"), b = 0;
            b < c.length;
            b++
          ) {
            var f = c[b];
            if (
              f.getAttribute("src") == e ||
              f.getAttribute("data-webpack") == s + n
            ) {
              d = f;
              break;
            }
          }
        d ||
          ((i = !0),
          ((d = document.createElement("script")).charset = "utf-8"),
          (d.timeout = 120),
          o.nc && d.setAttribute("nonce", o.nc),
          d.setAttribute("data-webpack", s + n),
          (d.src = e)),
          (r[e] = [a]);
        var h = (a, n) => {
            (d.onerror = d.onload = null), clearTimeout(l);
            var s = r[e];
            if (
              (delete r[e],
              d.parentNode && d.parentNode.removeChild(d),
              s && s.forEach((e) => e(n)),
              a)
            )
              return a(n);
          },
          l = setTimeout(
            h.bind(null, void 0, { type: "timeout", target: d }),
            12e4
          );
        (d.onerror = h.bind(null, d.onerror)),
          (d.onload = h.bind(null, d.onload)),
          i && document.head.appendChild(d);
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
    (t = (e) =>
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
            var t = document.getElementsByTagName("style");
            for (r = 0; r < t.length; r++) {
              var d;
              if ((s = (d = t[r]).getAttribute("data-href")) === e || s === a)
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
              (t) => {
                if (((s.onerror = s.onload = null), "load" === t.type)) n();
                else {
                  var d = t && ("load" === t.type ? "missing" : t.type),
                    i = (t && t.target && t.target.href) || a,
                    c = new Error(
                      "Loading CSS chunk " + e + " failed.\n(" + i + ")"
                    );
                  (c.code = "CSS_CHUNK_LOAD_FAILED"),
                    (c.type = d),
                    (c.request = i),
                    s.parentNode.removeChild(s),
                    r(c);
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
            (d[e] = t(e).then(
              () => {
                d[e] = 0;
              },
              (a) => {
                throw (delete d[e], a);
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
            var s = new Promise((n, s) => (r = e[a] = [n, s]));
            n.push((r[2] = s));
            var t = o.p + o.u(a),
              d = new Error();
            o.l(
              t,
              (n) => {
                if (o.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var s = n && ("load" === n.type ? "missing" : n.type),
                    t = n && n.target && n.target.src;
                  (d.message =
                    "Loading chunk " + a + " failed.\n(" + s + ": " + t + ")"),
                    (d.name = "ChunkLoadError"),
                    (d.type = s),
                    (d.request = t),
                    r[1](d);
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
            s,
            [t, d, i] = n,
            c = 0;
          if (t.some((a) => 0 !== e[a])) {
            for (r in d) o.o(d, r) && (o.m[r] = d[r]);
            if (i) var b = i(o);
          }
          for (a && a(n); c < t.length; c++)
            (s = t[c]), o.o(e, s) && e[s] && e[s][0](), (e[s] = 0);
          return o.O(b);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
