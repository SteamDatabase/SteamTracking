/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8197554";
(() => {
  "use strict";
  var e,
    a,
    n,
    r,
    d,
    c,
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
    (o.O = (a, n, r, d) => {
      if (!n) {
        var c = 1 / 0;
        for (b = 0; b < e.length; b++) {
          for (var [n, r, d] = e[b], s = !0, t = 0; t < n.length; t++)
            (!1 & d || c >= d) && Object.keys(o.O).every((e) => o.O[e](n[t]))
              ? n.splice(t--, 1)
              : ((s = !1), d < c && (c = d));
          if (s) {
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
      var c = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var s = 2 & r && e; "object" == typeof s && !~a.indexOf(s); s = n(s))
        Object.getOwnPropertyNames(s).forEach((a) => (c[a] = () => e[a]));
      return (c.default = () => e), o.d(d, c), d;
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
        131: "95db6ac470a1e2adc211",
        145: "542602656cd164a3950f",
        493: "1337c2145dbf06161fac",
        494: "05fe723268d8d8f38ede",
        614: "cf5a894ed77d3a7fdc02",
        647: "6a1537a1579778868624",
        698: "67967e0f04a5577a6fe8",
        727: "d721fea5fbcbceed0085",
        799: "4108d96d446e56b035e1",
        819: "b50a42ce377a87047fb8",
        874: "4e3ce49314102df0f4a3",
        903: "ca9449ca175b9bc6b966",
        1117: "537a4d4b16052464a668",
        1162: "fa604cdcb95a2a0c4082",
        1254: "e722ce5cd900a1f18f0a",
        1313: "6425d78eadc10b4d82a1",
        2029: "7fd08f7e11313713d62f",
        2120: "e02f02063dada506965c",
        2136: "812af61e26a0aee37ac9",
        2360: "3b8fe0afe48e380d5413",
        2431: "145183afb5a012b6f5f7",
        2443: "10d5be31b8ca0e5a9e91",
        2448: "114487fb8ad79d93bc8c",
        2522: "0c103f3f48b6011f1c26",
        2529: "3987d6f6b94f87c2ac32",
        2537: "f2a2bd54ee297b5d37c8",
        2581: "5d4acfbfe8d128f10750",
        2601: "c63116119fcb263067bc",
        2767: "9ead02261f6e0bfd0e64",
        2824: "e6e06fcd8363ca4ef5dd",
        2844: "e6a56c809f351fe2d42b",
        2848: "803a87438969c6bebbfd",
        2856: "fde4e41146f852b0ea33",
        2942: "ab162d870935cdd010b9",
        3069: "9b1e88e2991c03e6c138",
        3112: "ab354d9745fe3368475c",
        3143: "a67158b5e5faca3a398b",
        3185: "4a2b171b608cfffe99a1",
        3252: "e6a65b6c0fd01a1937d8",
        3277: "433bf8b647d3dd9fb2f9",
        3323: "65c228edeb42bb4f4b54",
        3359: "a7926c565497b98d2472",
        3453: "e0cb210f2bdc5cafbcf4",
        3504: "c9f31d6e8125c0c997e9",
        3557: "b09a38102b160cdd3353",
        3768: "1e2a57b5f6344f3ef646",
        4023: "f75b23dba8f16a9398c5",
        4033: "993b6c29038e5c0a9338",
        4108: "7b82f00fe9fb68d40991",
        4171: "5c20e0e36380516858bb",
        4189: "49fc5658c8ae39540840",
        4199: "efd3c70805664354d450",
        4238: "1c6143dcf871c54f7833",
        4297: "106847514093a5738388",
        4458: "6e5fffb47d12bd468bf0",
        4535: "066308aa43da6983a9ce",
        4601: "7d35230428332cb7cc9b",
        4722: "dc084bb725d1986cf488",
        4823: "1c6738e4eb6a5856ffdd",
        4860: "f6b36fa220685432e5a1",
        4929: "90453f550424f367c751",
        4935: "70b6ba26c7eb101e81af",
        4964: "78571e6f4e64e02ce850",
        5117: "fe02739faca7c40c162b",
        5257: "a2269cd6c381c27a30aa",
        5438: "585f1cbbedba5d673869",
        5625: "4310623c89dd91600db8",
        5676: "543abbb4286643d3927c",
        5849: "cbc9dd94728d21c4565f",
        5925: "996d441a78d59c1ade6d",
        5933: "50857eef83e9aa4c38b5",
        5948: "f73792b272e7bdb2ed51",
        6007: "3c7728779c96a4bb719c",
        6019: "86ae1d38d2c232eba4cb",
        6035: "2167519dc120a8f5b363",
        6087: "fec5799fd09033f75230",
        6169: "34b3cead7035056c2ec4",
        6492: "72dd77c32b392befce1c",
        6542: "0ab3615a560051ce4cd7",
        6699: "71a2362300a9169e26a0",
        6815: "559b33de4d10ae1c3e99",
        6817: "37bb8fbb6c4016a9a79c",
        6846: "91ce799563e659d38188",
        7082: "0a3883c171314ac4f506",
        7236: "932ae7f18b5f2d1fa0c5",
        7334: "c611e9d95a14a96023d3",
        7602: "6ac565515cf51d81e51c",
        7762: "9d7bf86900c8749d9742",
        7781: "cc2a15179e03eead8fdc",
        7871: "893c746f81c4f742ce72",
        7890: "af9b7c6ee8d2014b36de",
        7942: "80323e3c4dbb542b546a",
        7951: "99e40639eb0658304652",
        7975: "b1e8d3d7aae8329b1ee8",
        8001: "aaabd9cb62d16d3f8472",
        8051: "4e662cc3349b543e18ed",
        8155: "b10f5fa2b7c01e25f77f",
        8168: "b6b58a9cfb92ea3d4286",
        8385: "ae5846a8a13af2f9be06",
        8774: "8e705a7f7341da796c19",
        8960: "9661a6ba2b0e60f4f848",
        8974: "3476f7e79007c1592575",
        8994: "96868dfcf3cf920ece38",
        9035: "9b49528f8f6672d4c141",
        9062: "cc787a58e5c2b3097257",
        9160: "fdb65c990bdf0fe22528",
        9431: "b45535de3326e130f7ed",
        9568: "1542c9a0621ba5ec38d5",
        9603: "d0d6442967d0b3ae6afe",
        9663: "ac8769f86d2e477ead1d",
        9753: "128063ab2a2fd221febf",
        9899: "e4e017070b15fb5c2023",
        9903: "cf62f710d3b29d88fa53",
        9919: "874525ecdd1d0ef57e63",
        9980: "03e7145926963c614545",
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
        2136: "5808a1e599dc1afe0940",
        2522: "568a668c02defe940a0c",
        2529: "deda2f99b411c732ee09",
        3504: "e87060fc4bf94b17c59d",
        4601: "9b9120b674ef378127fd",
        4935: "59890b790fbf2cc93831",
        5676: "90121d3ac73abcb9f1b7",
        6699: "3a19f92cb04178af6cdb",
        7762: "d61f93a707d7e363fa5a",
        8974: "471241de79ebb86fd34f",
        9160: "d2be9b248c5297e4d2f5",
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
    (o.l = (e, a, n, c) => {
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
              f.getAttribute("data-webpack") == d + n
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
          s.setAttribute("data-webpack", d + n),
          (s.src = e)),
          (r[e] = [a]);
        var h = (a, n) => {
            (s.onerror = s.onload = null), clearTimeout(l);
            var d = r[e];
            if (
              (delete r[e],
              s.parentNode && s.parentNode.removeChild(s),
              d && d.forEach((e) => e(n)),
              a)
            )
              return a(n);
          },
          l = setTimeout(
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
    (c = (e) =>
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
                (s = n[r]).getAttribute("data-href") || s.getAttribute("href");
              if ("stylesheet" === s.rel && (d === e || d === a)) return s;
            }
            var c = document.getElementsByTagName("style");
            for (r = 0; r < c.length; r++) {
              var s;
              if ((d = (s = c[r]).getAttribute("data-href")) === e || d === a)
                return s;
            }
          })(r, d)
        )
          return a();
        ((e, a, n, r) => {
          var d = document.createElement("link");
          (d.rel = "stylesheet"),
            (d.type = "text/css"),
            (d.onerror = d.onload =
              (c) => {
                if (((d.onerror = d.onload = null), "load" === c.type)) n();
                else {
                  var s = c && ("load" === c.type ? "missing" : c.type),
                    t = (c && c.target && c.target.href) || a,
                    i = new Error(
                      "Loading CSS chunk " + e + " failed.\n(" + t + ")",
                    );
                  (i.code = "CSS_CHUNK_LOAD_FAILED"),
                    (i.type = s),
                    (i.request = t),
                    d.parentNode.removeChild(d),
                    r(i);
                }
              }),
            (d.href = a),
            document.head.appendChild(d);
        })(e, d, a, n);
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
            (s[e] = c(e).then(
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
            var d = new Promise((n, d) => (r = e[a] = [n, d]));
            n.push((r[2] = d));
            var c = o.p + o.u(a),
              s = new Error();
            o.l(
              c,
              (n) => {
                if (o.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var d = n && ("load" === n.type ? "missing" : n.type),
                    c = n && n.target && n.target.src;
                  (s.message =
                    "Loading chunk " + a + " failed.\n(" + d + ": " + c + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = d),
                    (s.request = c),
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
            d,
            [c, s, t] = n,
            i = 0;
          if (c.some((a) => 0 !== e[a])) {
            for (r in s) o.o(s, r) && (o.m[r] = s[r]);
            if (t) var b = t(o);
          }
          for (a && a(n); i < c.length; i++)
            (d = c[i]), o.o(e, d) && e[d] && e[d][0](), (e[d] = 0);
          return o.O(b);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
