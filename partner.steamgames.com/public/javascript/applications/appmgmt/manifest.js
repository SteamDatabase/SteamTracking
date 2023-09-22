/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8360579";
(() => {
  "use strict";
  var e,
    a,
    n,
    r,
    s,
    t,
    i,
    o = {},
    d = {};
  function c(e) {
    var a = d[e];
    if (void 0 !== a) return a.exports;
    var n = (d[e] = { id: e, loaded: !1, exports: {} });
    return o[e].call(n.exports, n, n.exports, c), (n.loaded = !0), n.exports;
  }
  (c.m = o),
    (e = []),
    (c.O = (a, n, r, s) => {
      if (!n) {
        var t = 1 / 0;
        for (f = 0; f < e.length; f++) {
          for (var [n, r, s] = e[f], i = !0, o = 0; o < n.length; o++)
            (!1 & s || t >= s) && Object.keys(c.O).every((e) => c.O[e](n[o]))
              ? n.splice(o--, 1)
              : ((i = !1), s < t && (t = s));
          if (i) {
            e.splice(f--, 1);
            var d = r();
            void 0 !== d && (a = d);
          }
        }
        return a;
      }
      s = s || 0;
      for (var f = e.length; f > 0 && e[f - 1][2] > s; f--) e[f] = e[f - 1];
      e[f] = [n, r, s];
    }),
    (c.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return c.d(a, { a }), a;
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (c.t = function (e, r) {
      if ((1 & r && (e = this(e)), 8 & r)) return e;
      if ("object" == typeof e && e) {
        if (4 & r && e.__esModule) return e;
        if (16 & r && "function" == typeof e.then) return e;
      }
      var s = Object.create(null);
      c.r(s);
      var t = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var i = 2 & r && e; "object" == typeof i && !~a.indexOf(i); i = n(i))
        Object.getOwnPropertyNames(i).forEach((a) => (t[a] = () => e[a]));
      return (t.default = () => e), c.d(s, t), s;
    }),
    (c.d = (e, a) => {
      for (var n in a)
        c.o(a, n) &&
          !c.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: a[n] });
    }),
    (c.f = {}),
    (c.e = (e) =>
      Promise.all(Object.keys(c.f).reduce((a, n) => (c.f[n](e, a), a), []))),
    (c.u = (e) =>
      "javascript/applications/appmgmt/" +
      {
        647: "main_czech-json",
        698: "main_dutch-json",
        727: "main_japanese-json",
        799: "main_german-json",
        819: "marketing_turkish-json",
        874: "marketing_dutch-json",
        903: "marketing_russian-json",
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
        3112: "shared_french-json",
        3185: "main_swedish-json",
        3252: "shared_polish-json",
        3277: "main_romanian-json",
        3323: "main_danish-json",
        3359: "main_bulgarian-json",
        3453: "marketing_czech-json",
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
        7072: "main_indonesian-json",
        7082: "marketing_japanese-json",
        7236: "main_portuguese-json",
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
        8399: "marketing_indonesian-json",
        8754: "shared_indonesian-json",
        8774: "marketing_romanian-json",
        8960: "marketing_bulgarian-json",
        8974: "storeadmin",
        8994: "marketing_hungarian-json",
        9062: "shared_russian-json",
        9431: "main_brazilian-json",
        9568: "main_greek-json",
        9663: "main_turkish-json",
        9753: "shared_danish-json",
        9899: "marketing_latam-json",
        9903: "marketing_tchinese-json",
        9919: "marketing_sc_schinese-json",
        9980: "main_schinese-json",
      }[e] +
      ".js?contenthash=" +
      {
        647: "d93756ca9ead038fcec3",
        698: "8c0cde1777fb2b8373b6",
        727: "15a33acb00e5aae1bc5c",
        799: "e86da756cfc2fd81e26d",
        819: "64442d28113da1544b4b",
        874: "1ecc1e71cb506e37cb43",
        903: "d828074ed1017d6406fb",
        1117: "bafa008063a3404b9c40",
        1162: "33e1c4a867727f840c89",
        1313: "ce8fc7cb628eda7c66a8",
        2029: "f897cbda3ee7255e616f",
        2120: "c7a981c2505166ba75ce",
        2136: "638bc0a03da0f9fd32f3",
        2431: "db7452b1af041ac5e119",
        2443: "f9a6dbdd7cd6e0bd1a78",
        2448: "2d1e2eba4934c9b222dd",
        2522: "1877d96554f42c54a8c7",
        2529: "177091030238a63035c5",
        2537: "034baebc58b465245edf",
        2581: "3d19b17020be2290d52d",
        2601: "1773a189fbe68a568431",
        2767: "39c9321503485b8d20f0",
        2824: "1fd57e6f09233a634bd2",
        2844: "a24efac0ce976016b5e7",
        2848: "69077b54c2e565ffce25",
        2942: "41815911e54beebb7ee8",
        3112: "99226d6818a14e2d1eae",
        3185: "7b81556b380721b1c87c",
        3252: "542aa187239548a31312",
        3277: "f51a06af2d9f8e4e39f7",
        3323: "a63b45d2c67ad5f943ef",
        3359: "7aab3cfc4b4b96a16f11",
        3453: "ab0ec6d27abdd645bc50",
        3557: "15de576a932b77293082",
        3768: "fdd84c1076b590db53b2",
        4033: "0858d12254b46732b591",
        4108: "171b4d5f197e4c08cd9c",
        4171: "a572d381cc372f7a7fa0",
        4189: "b3e6c6e81a167a395f3b",
        4199: "fef63592460ee9d5e550",
        4238: "a1fc9c12db9b4912040d",
        4297: "43a580fc0eec06b6c93c",
        4458: "2d86facaacb144bd1ccc",
        4535: "7276ce24f62757f2c285",
        4601: "00be4465071f789d8e4f",
        4722: "c6c6fb997bd898894eaf",
        4823: "2175a0ada5def18e2dea",
        4860: "85944ac9795e86b0b11a",
        4929: "27728b43649b4fad559a",
        4935: "81d58328003f65ceae55",
        4964: "990027d4372e10566bd3",
        5117: "fe02739faca7c40c162b",
        5257: "b18dde22a3260715b381",
        5438: "b90f0a4418bf76acfd1b",
        5625: "8e4ddfc650eb660bc910",
        5676: "50b6c3eff45b74569a2d",
        5849: "9ea3d8d455b81ba8daf8",
        5925: "02957282410817832cf2",
        5933: "9aab5ff82f2c4ba63e41",
        5948: "e7de313d83614c88d0b4",
        6007: "801d1c1f302d669a6fa8",
        6019: "a9dc675a8b76bd7c1a7d",
        6035: "0e8a44307646aff12e25",
        6087: "841158c9da485f060299",
        6169: "96f4e53482d648425321",
        6492: "742c63246fcc85dd2351",
        6542: "3aa0a1bc42d9c51e8b1a",
        6699: "07a0fd51b2c1808e595f",
        6815: "4caf483195d619a7578d",
        6817: "3d64a0ff4bbaa8733a75",
        6846: "8c318beea2f43fadace6",
        7072: "e829a18f6c5587f3f2a1",
        7082: "7ce4c77ef1dd348e77b3",
        7236: "2b98a699ab91c83e38af",
        7602: "794f3ae08776c928362e",
        7762: "da8a7602e5ced16fd5c8",
        7781: "704f35b7296f2f3b5822",
        7871: "10e9cab3cbf0ab48d312",
        7890: "97ab51880944cde88cd6",
        7942: "3eb6a79a11bbe18cb066",
        7951: "c2f64310f6e40d604fd4",
        7975: "4edac6897e3d853617fd",
        8001: "82225344359cecc36047",
        8051: "1657a1860a60f2ab59da",
        8155: "661ab05b1b30afff9443",
        8168: "528a8123332603fd6338",
        8385: "4bd75fa489f4886b3a83",
        8399: "3b4bfdd5c73a62bf9ea5",
        8754: "763696c9bb403b8d33bd",
        8774: "5ea3d0f26f8c19305e2f",
        8960: "4321965fc6a442c1b209",
        8974: "407848b4a2758e39ed25",
        8994: "bfb44d764eee710c0c59",
        9062: "d08613e94e1e53f50167",
        9431: "c839e3030e0ccc140bbe",
        9568: "40c94a8a9bdb07eb4e04",
        9663: "3c7099abb9ddadbf0d70",
        9753: "255ca58d3576040e7f6d",
        9899: "dbe7957f7bd64ecf5300",
        9903: "8af6d55d14ed1d7d23ec",
        9919: "b695729c2721f3f80138",
        9980: "30ff0af31c4b24b560de",
      }[e]),
    (c.miniCssF = (e) =>
      "css/applications/appmgmt/" +
      {
        2136: "events",
        2522: "logoedtior",
        2529: "pricingtool",
        4601: "broadcast",
        4935: "sdrconnections",
        5676: "steamlearn",
        7762: "steamml",
        8974: "storeadmin",
      }[e] +
      ".css?contenthash=" +
      {
        2136: "1260039471eaf5ffbd87",
        2522: "b0733a47547d2eedd527",
        2529: "133334836955f867e0a9",
        4601: "9b9120b674ef378127fd",
        4935: "057e096cce2e454a4b3d",
        5676: "d0287df8605cf5ca6ca3",
        7762: "d61f93a707d7e363fa5a",
        8974: "5ce17d818d67af6623fe",
      }[e]),
    (c.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (c.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
    (r = {}),
    (s = "appmgmt-storeadmin:"),
    (c.l = (e, a, n, t) => {
      if (r[e]) r[e].push(a);
      else {
        var i, o;
        if (void 0 !== n)
          for (
            var d = document.getElementsByTagName("script"), f = 0;
            f < d.length;
            f++
          ) {
            var b = d[f];
            if (
              b.getAttribute("src") == e ||
              b.getAttribute("data-webpack") == s + n
            ) {
              i = b;
              break;
            }
          }
        i ||
          ((o = !0),
          ((i = document.createElement("script")).charset = "utf-8"),
          (i.timeout = 120),
          c.nc && i.setAttribute("nonce", c.nc),
          i.setAttribute("data-webpack", s + n),
          (i.src = e)),
          (r[e] = [a]);
        var m = (a, n) => {
            (i.onerror = i.onload = null), clearTimeout(h);
            var s = r[e];
            if (
              (delete r[e],
              i.parentNode && i.parentNode.removeChild(i),
              s && s.forEach((e) => e(n)),
              a)
            )
              return a(n);
          },
          h = setTimeout(
            m.bind(null, void 0, { type: "timeout", target: i }),
            12e4,
          );
        (i.onerror = m.bind(null, i.onerror)),
          (i.onload = m.bind(null, i.onload)),
          o && document.head.appendChild(i);
      }
    }),
    (c.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (c.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      var e;
      c.g.importScripts && (e = c.g.location + "");
      var a = c.g.document;
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
        (c.p = e + "../../../");
    })(),
    (t = (e) =>
      new Promise((a, n) => {
        var r = c.miniCssF(e),
          s = c.p + r;
        if (
          ((e, a) => {
            for (
              var n = document.getElementsByTagName("link"), r = 0;
              r < n.length;
              r++
            ) {
              var s =
                (i = n[r]).getAttribute("data-href") || i.getAttribute("href");
              if ("stylesheet" === i.rel && (s === e || s === a)) return i;
            }
            var t = document.getElementsByTagName("style");
            for (r = 0; r < t.length; r++) {
              var i;
              if ((s = (i = t[r]).getAttribute("data-href")) === e || s === a)
                return i;
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
                  var i = t && ("load" === t.type ? "missing" : t.type),
                    o = (t && t.target && t.target.href) || a,
                    d = new Error(
                      "Loading CSS chunk " + e + " failed.\n(" + o + ")",
                    );
                  (d.code = "CSS_CHUNK_LOAD_FAILED"),
                    (d.type = i),
                    (d.request = o),
                    s.parentNode.removeChild(s),
                    r(d);
                }
              }),
            (s.href = a),
            document.head.appendChild(s);
        })(e, s, a, n);
      })),
    (i = { 6700: 0 }),
    (c.f.miniCss = (e, a) => {
      i[e]
        ? a.push(i[e])
        : 0 !== i[e] &&
          {
            2136: 1,
            2522: 1,
            2529: 1,
            4601: 1,
            4935: 1,
            5676: 1,
            7762: 1,
            8974: 1,
          }[e] &&
          a.push(
            (i[e] = t(e).then(
              () => {
                i[e] = 0;
              },
              (a) => {
                throw (delete i[e], a);
              },
            )),
          );
    }),
    (() => {
      var e = { 6700: 0 };
      (c.f.j = (a, n) => {
        var r = c.o(e, a) ? e[a] : void 0;
        if (0 !== r)
          if (r) n.push(r[2]);
          else if (6700 != a) {
            var s = new Promise((n, s) => (r = e[a] = [n, s]));
            n.push((r[2] = s));
            var t = c.p + c.u(a),
              i = new Error();
            c.l(
              t,
              (n) => {
                if (c.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var s = n && ("load" === n.type ? "missing" : n.type),
                    t = n && n.target && n.target.src;
                  (i.message =
                    "Loading chunk " + a + " failed.\n(" + s + ": " + t + ")"),
                    (i.name = "ChunkLoadError"),
                    (i.type = s),
                    (i.request = t),
                    r[1](i);
                }
              },
              "chunk-" + a,
              a,
            );
          } else e[a] = 0;
      }),
        (c.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var r,
            s,
            [t, i, o] = n,
            d = 0;
          if (t.some((a) => 0 !== e[a])) {
            for (r in i) c.o(i, r) && (c.m[r] = i[r]);
            if (o) var f = o(c);
          }
          for (a && a(n); d < t.length; d++)
            (s = t[d]), c.o(e, s) && e[s] && e[s][0](), (e[s] = 0);
          return c.O(f);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
