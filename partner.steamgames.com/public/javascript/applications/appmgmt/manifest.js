/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8430811";
(() => {
  "use strict";
  var e,
    a,
    n,
    r,
    d,
    s,
    c,
    i = {},
    t = {};
  function f(e) {
    var a = t[e];
    if (void 0 !== a) return a.exports;
    var n = (t[e] = { id: e, loaded: !1, exports: {} });
    return i[e].call(n.exports, n, n.exports, f), (n.loaded = !0), n.exports;
  }
  (f.m = i),
    (e = []),
    (f.O = (a, n, r, d) => {
      if (!n) {
        var s = 1 / 0;
        for (o = 0; o < e.length; o++) {
          for (var [n, r, d] = e[o], c = !0, i = 0; i < n.length; i++)
            (!1 & d || s >= d) && Object.keys(f.O).every((e) => f.O[e](n[i]))
              ? n.splice(i--, 1)
              : ((c = !1), d < s && (s = d));
          if (c) {
            e.splice(o--, 1);
            var t = r();
            void 0 !== t && (a = t);
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
      for (var c = 2 & r && e; "object" == typeof c && !~a.indexOf(c); c = n(c))
        Object.getOwnPropertyNames(c).forEach((a) => (s[a] = () => e[a]));
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
        402: "libraries~a16dd2641",
        421: "chunk~78f0cc2ed",
        647: "main_czech-json",
        698: "main_dutch-json",
        727: "main_japanese-json",
        744: "libraries~0ce70989d",
        799: "main_german-json",
        819: "marketing_turkish-json",
        874: "marketing_dutch-json",
        903: "marketing_russian-json",
        1117: "main_french-json",
        1162: "shared_thai-json",
        1285: "libraries~86a12dc94",
        1313: "shared_bulgarian-json",
        1805: "chunk~76b1d4b20",
        2029: "shared_sc_schinese-json",
        2120: "libraries~65c77a859",
        2136: "events",
        2268: "chunk~ba97af24b",
        2431: "shared_arabic-json",
        2443: "shared_latam-json",
        2448: "marketing_polish-json",
        2522: "logoedtior",
        2529: "pricingtool",
        2537: "shared_schinese-json",
        2581: "marketing_danish-json",
        2586: "libraries~414b0edad",
        2601: "marketing_spanish-json",
        2706: "libraries~b58ccb787",
        2767: "main_polish-json",
        2824: "marketing_german-json",
        2844: "shared_japanese-json",
        2848: "main_ukrainian-json",
        2942: "main_tchinese-json",
        3112: "shared_french-json",
        3135: "marketing_schinese-json",
        3185: "main_swedish-json",
        3252: "shared_polish-json",
        3277: "main_romanian-json",
        3323: "main_danish-json",
        3359: "main_bulgarian-json",
        3453: "marketing_czech-json",
        3557: "shared_finnish-json",
        3599: "adminpromoreviewdashboard",
        3768: "main_finnish-json",
        4033: "chunk~b65c73781",
        4108: "shared_norwegian-json",
        4135: "libraries~78f0cc2ed",
        4171: "marketing_koreana-json",
        4189: "shared_czech-json",
        4199: "marketing_french-json",
        4238: "marketing_thai-json",
        4297: "shared_greek-json",
        4309: "libraries~53a792fe2",
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
        5875: "chunk~53a792fe2",
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
        6608: "chunk~6682e6e75",
        6699: "steamdeck",
        6739: "libraries~76b1d4b20",
        6815: "main_english-json",
        6817: "main_spanish-json",
        6846: "marketing_vietnamese-json",
        7072: "main_indonesian-json",
        7082: "marketing_japanese-json",
        7099: "libraries~b65c73781",
        7236: "main_portuguese-json",
        7510: "chunk~414b0edad",
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
        8389: "libraries~0693b010b",
        8399: "marketing_indonesian-json",
        8591: "chunk~ea380e36c",
        8754: "shared_indonesian-json",
        8774: "marketing_romanian-json",
        8960: "marketing_bulgarian-json",
        8974: "storeadmin",
        8994: "marketing_hungarian-json",
        9062: "shared_russian-json",
        9431: "main_brazilian-json",
        9568: "main_greek-json",
        9584: "libraries~1940416b2",
        9603: "libraries~82d50d904",
        9663: "main_turkish-json",
        9749: "libraries~ba97af24b",
        9753: "shared_danish-json",
        9899: "marketing_latam-json",
        9903: "marketing_tchinese-json",
        9919: "marketing_sc_schinese-json",
        9980: "main_schinese-json",
      }[e] +
      ".js?contenthash=" +
      {
        402: "b987aba16ba87c691302",
        421: "f89c712e23435c95988c",
        647: "0fd1104a7dcae8247799",
        698: "1a5801570c789f8b3f5a",
        727: "56e95bcb2c1b2305fd37",
        744: "eb10f131b5a56c8c2d3b",
        799: "35605c2f40558abe8420",
        819: "64442d28113da1544b4b",
        874: "1ecc1e71cb506e37cb43",
        903: "d828074ed1017d6406fb",
        1117: "185728532f5fde410282",
        1162: "30af02ccf12c3e1b937d",
        1285: "a69142727c0ffe07f561",
        1313: "130153940611df516d89",
        1805: "5b95b5ea58f1481c5c0f",
        2029: "f897cbda3ee7255e616f",
        2120: "c7a981c2505166ba75ce",
        2136: "fe2553013599a3b64807",
        2268: "9f96f0ca6264af413f63",
        2431: "db7452b1af041ac5e119",
        2443: "65f629d37e2137e3a161",
        2448: "2d1e2eba4934c9b222dd",
        2522: "6ab7e4a3b7a7f6ed2154",
        2529: "a470d13fe99fe543a600",
        2537: "200c897a9f50c182c2d3",
        2581: "3d19b17020be2290d52d",
        2586: "df2016b5a725cc98525d",
        2601: "1773a189fbe68a568431",
        2706: "fad271af240d8ce5f90b",
        2767: "2beadef0ae9d7ea3a9e3",
        2824: "1fd57e6f09233a634bd2",
        2844: "ba5cb5e07f50fd60c2ba",
        2848: "4115681522068f8f840e",
        2942: "17649d554b6dc371b2a9",
        3112: "24cc03afef3adeada7fd",
        3135: "183b540200175f4db3a3",
        3185: "a776f7aa7363079e6cdc",
        3252: "446b7176d5781ac9ec64",
        3277: "7a0a2293be5fc267483c",
        3323: "ab78d60bb8c91e395649",
        3359: "ab491e585f0c66b0cfdf",
        3453: "ab0ec6d27abdd645bc50",
        3557: "f7665810d61aaeff5b8b",
        3599: "8b73f3ec9ca0a8d3ebb5",
        3768: "63593200f96e6a3f4692",
        4033: "e293ecd672bc0b036b75",
        4108: "ce4545918f7c0347cf05",
        4135: "dbd1db10959652f04af9",
        4171: "a572d381cc372f7a7fa0",
        4189: "ddd13833124eba4d1813",
        4199: "16a36f03811510473511",
        4238: "a1fc9c12db9b4912040d",
        4297: "aa788d718e8ccef59b66",
        4309: "c8d6c85f57ecd6aa08a3",
        4458: "2d86facaacb144bd1ccc",
        4535: "4bafd7008b0cc0201604",
        4601: "d7259bdd47d7f21a01fa",
        4722: "afea452ca5762eea5f57",
        4823: "629e27f59430b35e92b2",
        4860: "cfb4603c763eb5abeb90",
        4929: "27728b43649b4fad559a",
        4935: "1604e66d139c71d0797d",
        4964: "f48b219080970a3f8940",
        5117: "5b78887a5a6976086c96",
        5257: "b18dde22a3260715b381",
        5438: "a8e2519101a6ea974e5d",
        5625: "f9fbb0cd70516ca93ca9",
        5676: "b2f180f6c44a2d47cd39",
        5849: "66003371aefb8e2260fa",
        5875: "05d1f44fab21837b0a55",
        5925: "b75bf99cef7bb47545c5",
        5933: "40270f53224089122345",
        5948: "500fbb4a7bf34514cf69",
        6007: "48fad9b69151e2cf338e",
        6019: "a9dc675a8b76bd7c1a7d",
        6035: "0e8a44307646aff12e25",
        6087: "dabb754c83570f1b5b5a",
        6169: "96f4e53482d648425321",
        6492: "f555a94241dd286ac5aa",
        6542: "c772673080153a62b185",
        6608: "c6dda4918e237e3b8789",
        6699: "63980b1821dd1680b954",
        6739: "b76c366f13d79ed895dc",
        6815: "1ada027542028f398d79",
        6817: "4da33b596970ccaf94d4",
        6846: "8c318beea2f43fadace6",
        7072: "13b69b6de4a0d03fd330",
        7082: "7ce4c77ef1dd348e77b3",
        7099: "20633ee7c5f44bd6a621",
        7236: "b0bb76d9603ae9de9ea4",
        7510: "eb3f085948988bc945be",
        7602: "2fc758425e3532894735",
        7762: "da8a7602e5ced16fd5c8",
        7781: "98b299a2470cf36e4857",
        7871: "10e9cab3cbf0ab48d312",
        7890: "c085fa00ab6476a532b6",
        7942: "3eb6a79a11bbe18cb066",
        7951: "67a9dec2be6039aeae6e",
        7975: "4207265fd09740104b4d",
        8001: "82225344359cecc36047",
        8051: "6fa53812c39d2cf0b297",
        8155: "cd2d51ae1d5819f5f52e",
        8168: "e30563d9928a924c1108",
        8385: "b5dbe7eeed028c7d5f77",
        8389: "281a9d14a1841ac0db35",
        8399: "3b4bfdd5c73a62bf9ea5",
        8591: "759067a7903d9cba1d2b",
        8754: "e2f1bebe736bf9e3b331",
        8774: "5ea3d0f26f8c19305e2f",
        8960: "4321965fc6a442c1b209",
        8974: "d0b4b1612378994dc46b",
        8994: "bfb44d764eee710c0c59",
        9062: "bcf4681a7baac478c492",
        9431: "d1df7ed6a969f423c0b4",
        9568: "41a473ddb08104adc478",
        9584: "2f79f83821d0d3172412",
        9603: "d2d2d4e8146af60da7e3",
        9663: "8de71f74526e619fdc3f",
        9749: "70e4164e80ca33e019a4",
        9753: "c0aece018f87c20470ab",
        9899: "dbe7957f7bd64ecf5300",
        9903: "8af6d55d14ed1d7d23ec",
        9919: "b695729c2721f3f80138",
        9980: "6c25ee3477cc2a864914",
      }[e]),
    (f.miniCssF = (e) =>
      "css/applications/appmgmt/" +
      {
        1805: "chunk~76b1d4b20",
        2136: "events",
        2268: "chunk~ba97af24b",
        2522: "logoedtior",
        2529: "pricingtool",
        3599: "adminpromoreviewdashboard",
        4033: "chunk~b65c73781",
        4309: "libraries~53a792fe2",
        4601: "broadcast",
        4935: "sdrconnections",
        5676: "steamlearn",
        6699: "steamdeck",
        7762: "steamml",
        8974: "storeadmin",
      }[e] +
      ".css?contenthash=" +
      {
        1805: "dbff74769898d7fb10ce",
        2136: "605cc0c5811e107ebada",
        2268: "67321b79f582d71cbe6a",
        2522: "3a52d13476b669588bd8",
        2529: "8c377b0a0162b7cc3967",
        3599: "37883bb918433d9a98b6",
        4033: "3cff0979c6d50f113bb0",
        4309: "f38ba98b44af4fc0288a",
        4601: "52204de9f058f9d5a3d2",
        4935: "59890b790fbf2cc93831",
        5676: "d0287df8605cf5ca6ca3",
        6699: "3a19f92cb04178af6cdb",
        7762: "d61f93a707d7e363fa5a",
        8974: "45442bcd9b35640d169c",
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
        var c, i;
        if (void 0 !== n)
          for (
            var t = document.getElementsByTagName("script"), o = 0;
            o < t.length;
            o++
          ) {
            var b = t[o];
            if (
              b.getAttribute("src") == e ||
              b.getAttribute("data-webpack") == d + n
            ) {
              c = b;
              break;
            }
          }
        c ||
          ((i = !0),
          ((c = document.createElement("script")).charset = "utf-8"),
          (c.timeout = 120),
          f.nc && c.setAttribute("nonce", f.nc),
          c.setAttribute("data-webpack", d + n),
          (c.src = e)),
          (r[e] = [a]);
        var h = (a, n) => {
            (c.onerror = c.onload = null), clearTimeout(l);
            var d = r[e];
            if (
              (delete r[e],
              c.parentNode && c.parentNode.removeChild(c),
              d && d.forEach((e) => e(n)),
              a)
            )
              return a(n);
          },
          l = setTimeout(
            h.bind(null, void 0, { type: "timeout", target: c }),
            12e4,
          );
        (c.onerror = h.bind(null, c.onerror)),
          (c.onload = h.bind(null, c.onload)),
          i && document.head.appendChild(c);
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
          "Automatic publicPath is not supported in this browser",
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
                (c = n[r]).getAttribute("data-href") || c.getAttribute("href");
              if ("stylesheet" === c.rel && (d === e || d === a)) return c;
            }
            var s = document.getElementsByTagName("style");
            for (r = 0; r < s.length; r++) {
              var c;
              if ((d = (c = s[r]).getAttribute("data-href")) === e || d === a)
                return c;
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
                  var c = s && ("load" === s.type ? "missing" : s.type),
                    i = (s && s.target && s.target.href) || a,
                    t = new Error(
                      "Loading CSS chunk " + e + " failed.\n(" + i + ")",
                    );
                  (t.code = "CSS_CHUNK_LOAD_FAILED"),
                    (t.type = c),
                    (t.request = i),
                    d.parentNode.removeChild(d),
                    r(t);
                }
              }),
            (d.href = a),
            document.head.appendChild(d);
        })(e, d, a, n);
      })),
    (c = { 6700: 0 }),
    (f.f.miniCss = (e, a) => {
      c[e]
        ? a.push(c[e])
        : 0 !== c[e] &&
          {
            1805: 1,
            2136: 1,
            2268: 1,
            2522: 1,
            2529: 1,
            3599: 1,
            4033: 1,
            4309: 1,
            4601: 1,
            4935: 1,
            5676: 1,
            6699: 1,
            7762: 1,
            8974: 1,
          }[e] &&
          a.push(
            (c[e] = s(e).then(
              () => {
                c[e] = 0;
              },
              (a) => {
                throw (delete c[e], a);
              },
            )),
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
              c = new Error();
            f.l(
              s,
              (n) => {
                if (f.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var d = n && ("load" === n.type ? "missing" : n.type),
                    s = n && n.target && n.target.src;
                  (c.message =
                    "Loading chunk " + a + " failed.\n(" + d + ": " + s + ")"),
                    (c.name = "ChunkLoadError"),
                    (c.type = d),
                    (c.request = s),
                    r[1](c);
                }
              },
              "chunk-" + a,
              a,
            );
          } else e[a] = 0;
      }),
        (f.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var r,
            d,
            [s, c, i] = n,
            t = 0;
          if (s.some((a) => 0 !== e[a])) {
            for (r in c) f.o(c, r) && (f.m[r] = c[r]);
            if (i) var o = i(f);
          }
          for (a && a(n); t < s.length; t++)
            (d = s[t]), f.o(e, d) && e[d] && e[d][0](), (e[d] = 0);
          return f.O(o);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
