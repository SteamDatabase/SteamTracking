/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8386415";
(() => {
  "use strict";
  var e,
    a,
    n,
    r,
    d,
    c,
    s,
    i = {},
    t = {};
  function o(e) {
    var a = t[e];
    if (void 0 !== a) return a.exports;
    var n = (t[e] = { id: e, loaded: !1, exports: {} });
    return i[e].call(n.exports, n, n.exports, o), (n.loaded = !0), n.exports;
  }
  (o.m = i),
    (e = []),
    (o.O = (a, n, r, d) => {
      if (!n) {
        var c = 1 / 0;
        for (f = 0; f < e.length; f++) {
          for (var [n, r, d] = e[f], s = !0, i = 0; i < n.length; i++)
            (!1 & d || c >= d) && Object.keys(o.O).every((e) => o.O[e](n[i]))
              ? n.splice(i--, 1)
              : ((s = !1), d < c && (c = d));
          if (s) {
            e.splice(f--, 1);
            var t = r();
            void 0 !== t && (a = t);
          }
        }
        return a;
      }
      d = d || 0;
      for (var f = e.length; f > 0 && e[f - 1][2] > d; f--) e[f] = e[f - 1];
      e[f] = [n, r, d];
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
        647: "f93e9dfadf235de85d14",
        698: "07f3254640ded1031fac",
        727: "8c2fe6d94eabd8e42b49",
        744: "eb10f131b5a56c8c2d3b",
        799: "3139d47dc1c6dba3b8be",
        819: "64442d28113da1544b4b",
        874: "1ecc1e71cb506e37cb43",
        903: "d828074ed1017d6406fb",
        1117: "8ddd3211cd385d53e27b",
        1162: "a309c93065b936d86980",
        1285: "6b038fb07f26da7a1bbc",
        1313: "cbfa0227ae63ed7cc942",
        1805: "5d9e2ee2444fe773eb0d",
        2029: "f897cbda3ee7255e616f",
        2120: "c7a981c2505166ba75ce",
        2136: "c5691edf42258c42e854",
        2268: "cf26b421ba6e6355c1bb",
        2431: "db7452b1af041ac5e119",
        2443: "3962e00f4be3510fe1d8",
        2448: "2d1e2eba4934c9b222dd",
        2522: "6ab7e4a3b7a7f6ed2154",
        2529: "a470d13fe99fe543a600",
        2537: "bf54633f8baa57ae34ef",
        2581: "3d19b17020be2290d52d",
        2586: "df2016b5a725cc98525d",
        2601: "1773a189fbe68a568431",
        2706: "fad271af240d8ce5f90b",
        2767: "939bd4b847b73bde8f7a",
        2824: "1fd57e6f09233a634bd2",
        2844: "6ee9c026f291cde827ef",
        2848: "34799c65a5224f26fe04",
        2942: "51492c993788c1b6222a",
        3112: "774134fa1d93991eb4d3",
        3135: "183b540200175f4db3a3",
        3185: "032cd80e3eceeab51153",
        3252: "8d8fc815300435aa6339",
        3277: "8d26b0d4dac1330d08f5",
        3323: "7f80fa57dee4ed75b024",
        3359: "11c14225b1ad862e9733",
        3453: "ab0ec6d27abdd645bc50",
        3557: "b425116895c12d4b28bf",
        3599: "498b53cf84ec461823a7",
        3768: "f22650012ca001596d6e",
        4033: "d9a190f3977fb8ba3852",
        4108: "5c8f710410585ddfb73c",
        4135: "5beb98e1672ff3eee30a",
        4171: "a572d381cc372f7a7fa0",
        4189: "d99116b096601b055b43",
        4199: "16a36f03811510473511",
        4238: "a1fc9c12db9b4912040d",
        4297: "aecdcd645db94b002969",
        4309: "c8d6c85f57ecd6aa08a3",
        4458: "2d86facaacb144bd1ccc",
        4535: "4bafd7008b0cc0201604",
        4601: "4d3915d6db413950a2ec",
        4722: "52090a1cfec8ef05a07c",
        4823: "f787a0bd6778e30f463c",
        4860: "60ebec3f19d2c74f3aba",
        4929: "27728b43649b4fad559a",
        4935: "b7003daa02d7e20f9761",
        4964: "88f61a0af2be24b60743",
        5117: "5b78887a5a6976086c96",
        5257: "b18dde22a3260715b381",
        5438: "dc9f20eff40dd4aef7d3",
        5625: "b77f35de584dc55821e7",
        5676: "b2f180f6c44a2d47cd39",
        5849: "a1c3833c96c0d05aa0d8",
        5875: "94c6f4af5d704a17214d",
        5925: "f47fdb5fa50e3d2c1824",
        5933: "ad550a6cc2b7ab80f80c",
        5948: "4668f98bd92f39a7dc25",
        6007: "a643474f08315ac78d6e",
        6019: "a9dc675a8b76bd7c1a7d",
        6035: "0e8a44307646aff12e25",
        6087: "a200f00aea72ecbd6c50",
        6169: "96f4e53482d648425321",
        6492: "13684b3a37e2b7e93d81",
        6542: "b116265fffbce7f65e4b",
        6608: "c6dda4918e237e3b8789",
        6699: "63980b1821dd1680b954",
        6739: "751c8c1e11e13144dff7",
        6815: "80140f70f9d858bc7677",
        6817: "309719c464d8065171fd",
        6846: "8c318beea2f43fadace6",
        7072: "532dd447c387da4d0868",
        7082: "7ce4c77ef1dd348e77b3",
        7099: "ae4e0cba7a110e14b02a",
        7236: "dba469e17ab4aeda8e27",
        7510: "2fbf9ac52196f84d7d0a",
        7602: "5dd4329a1db550f9aaf1",
        7762: "da8a7602e5ced16fd5c8",
        7781: "416cf31e581a2aae6995",
        7871: "10e9cab3cbf0ab48d312",
        7890: "3a32ac1d1cbd5cbeb1cf",
        7942: "3eb6a79a11bbe18cb066",
        7951: "78ae886c0d538287db52",
        7975: "2a81105bca60a3147118",
        8001: "82225344359cecc36047",
        8051: "a981b6b2ece85c3d9a8c",
        8155: "7ebbc6dee5de427f2c46",
        8168: "d8a6ec38cd8e0dafaf35",
        8385: "34c76da978f5672299a0",
        8389: "281a9d14a1841ac0db35",
        8399: "3b4bfdd5c73a62bf9ea5",
        8591: "759067a7903d9cba1d2b",
        8754: "d7999eb0ad1b60fffa33",
        8774: "5ea3d0f26f8c19305e2f",
        8960: "4321965fc6a442c1b209",
        8974: "40e048c8a738e20075fa",
        8994: "bfb44d764eee710c0c59",
        9062: "b2ffe63f6a79cb4da39d",
        9431: "8a3e1424b345fe65adc8",
        9568: "0257f72e7b5fea1abd80",
        9584: "2f79f83821d0d3172412",
        9603: "56c925567564394ae346",
        9663: "d0fc81d111e8ab9e3aec",
        9749: "70e4164e80ca33e019a4",
        9753: "a755b4d8f8552f40aabd",
        9899: "dbe7957f7bd64ecf5300",
        9903: "8af6d55d14ed1d7d23ec",
        9919: "b695729c2721f3f80138",
        9980: "e893ac70534366745e05",
      }[e]),
    (o.miniCssF = (e) =>
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
        1805: "7aaa19fce3bada668160",
        2136: "605cc0c5811e107ebada",
        2268: "031e4d40636a0f102a63",
        2522: "568a668c02defe940a0c",
        2529: "8c377b0a0162b7cc3967",
        3599: "37883bb918433d9a98b6",
        4033: "5b87769f9d1cbefea196",
        4309: "f38ba98b44af4fc0288a",
        4601: "52204de9f058f9d5a3d2",
        4935: "59890b790fbf2cc93831",
        5676: "d0287df8605cf5ca6ca3",
        6699: "3a19f92cb04178af6cdb",
        7762: "d61f93a707d7e363fa5a",
        8974: "689c594d60964e8baab9",
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
        var s, i;
        if (void 0 !== n)
          for (
            var t = document.getElementsByTagName("script"), f = 0;
            f < t.length;
            f++
          ) {
            var b = t[f];
            if (
              b.getAttribute("src") == e ||
              b.getAttribute("data-webpack") == d + n
            ) {
              s = b;
              break;
            }
          }
        s ||
          ((i = !0),
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
          i && document.head.appendChild(s);
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
                    i = (c && c.target && c.target.href) || a,
                    t = new Error(
                      "Loading CSS chunk " + e + " failed.\n(" + i + ")",
                    );
                  (t.code = "CSS_CHUNK_LOAD_FAILED"),
                    (t.type = s),
                    (t.request = i),
                    d.parentNode.removeChild(d),
                    r(t);
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
            [c, s, i] = n,
            t = 0;
          if (c.some((a) => 0 !== e[a])) {
            for (r in s) o.o(s, r) && (o.m[r] = s[r]);
            if (i) var f = i(o);
          }
          for (a && a(n); t < c.length; t++)
            (d = c[t]), o.o(e, d) && e[d] && e[d][0](), (e[d] = 0);
          return o.O(f);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
