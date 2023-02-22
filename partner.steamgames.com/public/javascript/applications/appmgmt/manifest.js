/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7860620";
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
        493: "libraries~29ab6dbf5",
        614: "libraries~bee9b953c",
        647: "main_czech-json",
        698: "main_dutch-json",
        727: "main_japanese-json",
        799: "main_german-json",
        819: "marketing_turkish-json",
        874: "marketing_dutch-json",
        903: "marketing_russian-json",
        907: "chunk~441eeb0f7",
        1089: "libraries~b70782b28",
        1117: "main_french-json",
        1162: "shared_thai-json",
        1313: "shared_bulgarian-json",
        2029: "shared_sc_schinese-json",
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
        9035: "contenthub",
        9054: "chunk~a4c1dc2af",
        9062: "shared_russian-json",
        9417: "chunk~31585b95b",
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
        493: "9acb816c553e74c05c60",
        614: "5ae2345f014c984f49b3",
        647: "481f006782e6905f21ef",
        698: "63de50f347869cfa13b6",
        727: "901e0224676f4c3fefd6",
        799: "b367d11ed2120020b78f",
        819: "17353c983dd01f1e5560",
        874: "1d318573d97113fa7c1c",
        903: "431c5c74928ca803aa7d",
        907: "374ea5852961d11d72e2",
        1089: "dc11aa592a0bd550849c",
        1117: "a669b3ebedeca111e974",
        1162: "86b008f0ea64c31b5925",
        1313: "7ba9b75211fb9bb5f36d",
        2029: "a59527d0540a72406547",
        2120: "b4882f76bab9c3a9e06d",
        2136: "f4612303a2b5be95dddf",
        2431: "fe5ea733482a8a8976a5",
        2443: "5b613c1a224ba578fd43",
        2448: "31bed41a6804b70f63ad",
        2522: "53a05396ef88f848ffd7",
        2529: "13247563146d75652880",
        2537: "d081d73639a6be5b5c13",
        2581: "221605048afeec8a3ba5",
        2601: "89a4796956c703d43e4f",
        2767: "1a5e84d3b9ba888057cf",
        2824: "80c13a5350768958c543",
        2844: "bd6529ce5514ca2184e3",
        2848: "2ac7f74db60343234d15",
        2942: "04c05a4d2fb1f1cb5fc0",
        3069: "f5db8f8cad1898c1fff4",
        3112: "706f36f8e6e55e77188b",
        3185: "faf1b1bbc9ccb7e171e1",
        3252: "ea02b5ce181dc34a9071",
        3277: "d22f0205cdc7c9cc3436",
        3323: "6537371cbc284ca3bfcf",
        3359: "77641c7da13cc737ebda",
        3453: "3eca4e9ae3cab3f11fb9",
        3504: "4a39bf11ea0d3875ab23",
        3557: "9d196bd47137dc065915",
        3768: "434a7a39bb253654f6f1",
        3784: "f4dbd5745bd8eceff880",
        4033: "fc4b601860615245c9e9",
        4108: "d0da9d8cbd514f94cc5c",
        4171: "3e357a1b3795925371a8",
        4189: "a056702975170ad83056",
        4199: "9b21ec165c0fb19c7b76",
        4238: "2ccd849d7a65868685a9",
        4297: "779d1238837cf4ca72c7",
        4458: "e135d3725ba0d8ff5dcc",
        4535: "93ba8945dfa86bcd0ffa",
        4601: "6c7296f6d53632abbe8c",
        4722: "ae7052174b83fb648794",
        4823: "922291f4c7f035f53799",
        4860: "15f777fcd5a45017d537",
        4929: "2dd0317cd42361ab73aa",
        4935: "f0053e4a1348518f2312",
        4964: "005f285cd1245e1bf1df",
        5117: "410c0421b7883720e4d1",
        5257: "a7eabac3808c558f1631",
        5438: "06815c798973dd525cf9",
        5625: "1cdb6b4c3be9f716c33e",
        5676: "dd6720f4f14c8c127653",
        5849: "83592db63e947fa1b386",
        5925: "67f562c1a2f9589d9f5c",
        5933: "f4f9c64606ec0b305388",
        5948: "75ce1f89a9eb785f60cd",
        6007: "daf53911745086400a60",
        6019: "c180d742aafedd4ec0f0",
        6035: "c86fdad763a51e0748e2",
        6087: "25b01e25b244fa6d96bd",
        6117: "4beb5da4e5546d41b78e",
        6169: "92bed18a530139154d7c",
        6492: "3285035f1e87d1efe2c2",
        6542: "7d10fb2017e83347db67",
        6699: "7cca16fde93515e5fb96",
        6815: "7a9f20def96494e02b51",
        6817: "5101d6e26e68aa6a2776",
        6846: "30e8bbb037a485011f3d",
        7082: "9fa1d35df6ae763fc92c",
        7236: "c71b7516525178af8732",
        7245: "a10e4d01b53bd8687070",
        7334: "f84897b1741e032db35f",
        7602: "55d1fc5788f609c344ab",
        7762: "7313f8ac01a0373221ee",
        7781: "09dbd4793544e61a6e13",
        7871: "7fa0db1d6e4be369195d",
        7890: "edfdae48e558e9c632d5",
        7940: "a36fea28b58cb0a4af70",
        7942: "0125e76a9a5c1d907bf2",
        7951: "078fb8dfc7277cf8faac",
        7975: "294158e380b64b030836",
        8001: "805c869b070934b3e3ca",
        8051: "7c439e41c94788b833cd",
        8155: "56a6a56603754f0dd195",
        8168: "9ea001033cbc6000262f",
        8385: "e7cfb4101d96d6c82f26",
        8774: "eac501090b8ced10a71e",
        8960: "4e9d511d8f3e15f3ed26",
        8974: "7b0e7be5ac086d2239ec",
        8994: "5ced45b319d0e6eb044e",
        9035: "9d464722cbec1380ff34",
        9054: "f62a4f027e5a50addc3e",
        9062: "a99335330021d0156929",
        9417: "2f55bcbefa0440f21e38",
        9431: "92b9611407a39c1db465",
        9568: "c01a936b29f1c502fa27",
        9603: "b7284b10f03f8426693b",
        9663: "f3aaa90b51ed04f0976b",
        9753: "ed885ce772429ed16fb5",
        9899: "4a0a12b64a3da981b0f2",
        9903: "959600a790178a9eeb79",
        9919: "4671150433a4d9096c85",
        9980: "5be7c4f833da38dda98c",
      }[e]),
    (o.miniCssF = (e) =>
      "css/applications/appmgmt/" +
      {
        493: "libraries~29ab6dbf5",
        2136: "events",
        2522: "logoedtior",
        2529: "pricingtool",
        4601: "broadcast",
        4935: "sdrconnections",
        5676: "steamlearn",
        6699: "steamdeck",
        7245: "chunk~b70782b28",
        7334: "chunk~29ab6dbf5",
        7762: "steamml",
        8974: "storeadmin",
        9035: "contenthub",
      }[e] +
      ".css?contenthash=" +
      {
        493: "d885e31859d50e4d4824",
        2136: "282721d9a67e611ee9be",
        2522: "00fd260513aee0ab8826",
        2529: "a1e88cc0287ab64dcc27",
        4601: "1aa71cb83aeab19b43fd",
        4935: "b7abea9ad444fe28cc7e",
        5676: "6f9c08e712c2b3052368",
        6699: "b4c5af28231aaf607a48",
        7245: "267e126352b3b854b1c2",
        7334: "bc9cae3d11709cc16c6e",
        7762: "e3a2b8e7ea298a4cb539",
        8974: "c137dece0c7a1bda2224",
        9035: "b826c4bc654c7463355d",
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
            12e4
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
          "Automatic publicPath is not supported in this browser"
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
                      "Loading CSS chunk " + e + " failed.\n(" + t + ")"
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
            4601: 1,
            4935: 1,
            5676: 1,
            6699: 1,
            7245: 1,
            7334: 1,
            7762: 1,
            8974: 1,
            9035: 1,
          }[e] &&
          a.push(
            (s[e] = d(e).then(
              () => {
                s[e] = 0;
              },
              (a) => {
                throw (delete s[e], a);
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
              a
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
