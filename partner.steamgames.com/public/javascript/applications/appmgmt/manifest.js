/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8461784";
(() => {
  "use strict";
  var e,
    a,
    n,
    r,
    c,
    d,
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
    (o.O = (a, n, r, c) => {
      if (!n) {
        var d = 1 / 0;
        for (b = 0; b < e.length; b++) {
          for (var [n, r, c] = e[b], s = !0, i = 0; i < n.length; i++)
            (!1 & c || d >= c) && Object.keys(o.O).every((e) => o.O[e](n[i]))
              ? n.splice(i--, 1)
              : ((s = !1), c < d && (d = c));
          if (s) {
            e.splice(b--, 1);
            var t = r();
            void 0 !== t && (a = t);
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
        402: "libraries~a16dd2641",
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
        2996: "chunk~0693b010b",
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
        5405: "chunk~a16dd2641",
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
        7241: "chunk~98cd0a490",
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
        9035: "contenthub",
        9062: "shared_russian-json",
        9431: "main_brazilian-json",
        9568: "main_greek-json",
        9584: "libraries~1940416b2",
        9603: "libraries~82d50d904",
        9663: "main_turkish-json",
        9749: "libraries~ba97af24b",
        9753: "shared_danish-json",
        9896: "libraries~5854bd60d",
        9899: "marketing_latam-json",
        9903: "marketing_tchinese-json",
        9919: "marketing_sc_schinese-json",
        9980: "main_schinese-json",
      }[e] +
      ".js?contenthash=" +
      {
        402: "aab240eed00f4d0f0e42",
        647: "1b3ace370cdffeb18490",
        698: "0948bec15c63b5009559",
        727: "0251f0e01af42f7efc9f",
        744: "eb10f131b5a56c8c2d3b",
        799: "46cdd7c6a15797207620",
        819: "64442d28113da1544b4b",
        874: "1ecc1e71cb506e37cb43",
        903: "d828074ed1017d6406fb",
        1117: "e4f7a642f611324398ed",
        1162: "e4d2cb6e9739d121ed77",
        1313: "9670df417fa57da73cfb",
        1805: "2af17179a969ea2e8c7c",
        2029: "f897cbda3ee7255e616f",
        2120: "c7a981c2505166ba75ce",
        2136: "c86abd79cda00b6a37ec",
        2268: "9f96f0ca6264af413f63",
        2431: "db7452b1af041ac5e119",
        2443: "3c5846d0a4fdafe8fab4",
        2448: "2d1e2eba4934c9b222dd",
        2522: "6ab7e4a3b7a7f6ed2154",
        2529: "cb256d324fbb255ebe4e",
        2537: "24fa6c8f0997631476c2",
        2581: "3d19b17020be2290d52d",
        2586: "d58a1da32aa90c26b3b3",
        2601: "1773a189fbe68a568431",
        2706: "fad271af240d8ce5f90b",
        2767: "39452c2677ad7a33711b",
        2824: "1fd57e6f09233a634bd2",
        2844: "7ebf41f127691ceb42b0",
        2848: "4a103e304bc020a6d87b",
        2942: "9ff0312d517de55efff0",
        2996: "60fb4d34e1bac08d6a95",
        3112: "a6c1c669962a814d91d8",
        3135: "183b540200175f4db3a3",
        3185: "9dacbcd8767d6a0e1340",
        3252: "aa09fa8b82c79c74a9ec",
        3277: "45bc64c06e439b28ab1f",
        3323: "c0da78ce4a2536be04f0",
        3359: "4311f0c473d3c6935173",
        3453: "ab0ec6d27abdd645bc50",
        3557: "fa91fdac02d3cd44b44d",
        3599: "8b73f3ec9ca0a8d3ebb5",
        3768: "1fa64a25be06a455fea0",
        4033: "cb69d2ab76772f6a2df7",
        4108: "3acf3081e8c8bd94742a",
        4171: "a572d381cc372f7a7fa0",
        4189: "f77e109cc49fb4a976a1",
        4199: "16a36f03811510473511",
        4238: "a1fc9c12db9b4912040d",
        4297: "140ff48aef58e35ba5a6",
        4309: "c90a239d79c8a24da03b",
        4458: "2d86facaacb144bd1ccc",
        4535: "4bafd7008b0cc0201604",
        4601: "d7259bdd47d7f21a01fa",
        4722: "4f47e49d0313956c1a7d",
        4823: "9d447e7356bee5edc0bf",
        4860: "b6e14bd6e8cc6108f3f8",
        4929: "27728b43649b4fad559a",
        4935: "6d23445ce9efcf0a2fe2",
        4964: "2b004cde7ac257f0e0b8",
        5117: "f709c10ef52e8b3a9f93",
        5257: "b18dde22a3260715b381",
        5405: "ad8e574a9c46fac47348",
        5438: "600fb8b443180a4736b0",
        5625: "1a251ecb37184f3752bf",
        5676: "549f71cad09c89fecf95",
        5849: "46b530591eb78d19f9f8",
        5875: "4358b1f240b2061ec27a",
        5925: "34f7d714da4a94b093ff",
        5933: "312c66bbdaf41a4c2d33",
        5948: "7059485059949c823266",
        6007: "0cf276f56e97b805e4ab",
        6019: "a9dc675a8b76bd7c1a7d",
        6035: "0e8a44307646aff12e25",
        6087: "67eece80d3adda558bd3",
        6169: "96f4e53482d648425321",
        6492: "4e3502ecf11ad69f232a",
        6542: "1ace200ae2bea444fcc2",
        6608: "3d3f29c2c2c27f540a10",
        6699: "63980b1821dd1680b954",
        6739: "b76c366f13d79ed895dc",
        6815: "4a1177bd21ba1112cf0e",
        6817: "5ffbe7d24401a499c341",
        6846: "8c318beea2f43fadace6",
        7072: "6db9bcc123713cc76f9c",
        7082: "7ce4c77ef1dd348e77b3",
        7099: "139ad2e468d20fd8beb5",
        7236: "b0bb76d9603ae9de9ea4",
        7241: "f2098d3c8bd2e64b5415",
        7510: "eb3f085948988bc945be",
        7602: "522fa77499eb71563d0f",
        7762: "da8a7602e5ced16fd5c8",
        7781: "5a24b35b64338a8fada2",
        7871: "10e9cab3cbf0ab48d312",
        7890: "f52e6187b9b971469879",
        7942: "3eb6a79a11bbe18cb066",
        7951: "08d79e39b911974be8c8",
        7975: "f3dda6847f1ca678d8da",
        8001: "82225344359cecc36047",
        8051: "d279bb707ed808e54162",
        8155: "4dabf343f69074cbdef8",
        8168: "91b866789262f5f1549a",
        8385: "7b74b01288c9c8621624",
        8389: "1b3acb77443f58df51f8",
        8399: "3b4bfdd5c73a62bf9ea5",
        8591: "759067a7903d9cba1d2b",
        8754: "092067c49ba77b12292f",
        8774: "5ea3d0f26f8c19305e2f",
        8960: "4321965fc6a442c1b209",
        8974: "528e7b768174485f7660",
        8994: "bfb44d764eee710c0c59",
        9035: "9b49528f8f6672d4c141",
        9062: "057761d688c290dd7aff",
        9431: "46970a4e623e8172124a",
        9568: "41a473ddb08104adc478",
        9584: "2f79f83821d0d3172412",
        9603: "e370cb1068387bee8a76",
        9663: "cb3c29564f78739b6977",
        9749: "f1eaa8e8fd395c6163d2",
        9753: "671de37a1a1e4dc16df3",
        9896: "ee793fed0ad5f8b7ed00",
        9899: "dbe7957f7bd64ecf5300",
        9903: "8af6d55d14ed1d7d23ec",
        9919: "b695729c2721f3f80138",
        9980: "3fd0eb9a2232113106eb",
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
        6608: "chunk~6682e6e75",
        6699: "steamdeck",
        7762: "steamml",
        8974: "storeadmin",
      }[e] +
      ".css?contenthash=" +
      {
        1805: "23861affa9bac26a96da",
        2136: "e2d16ced40c7be3040ae",
        2268: "67a1914bd8f92cf4d3c1",
        2522: "3a52d13476b669588bd8",
        2529: "074d37fe9cc54cb857a5",
        3599: "37883bb918433d9a98b6",
        4033: "0afca9831509a281531f",
        4309: "f38ba98b44af4fc0288a",
        4601: "890ab514dff760b5224e",
        4935: "59890b790fbf2cc93831",
        5676: "d0287df8605cf5ca6ca3",
        6608: "24269674c8c31058e5fc",
        6699: "3a19f92cb04178af6cdb",
        7762: "d61f93a707d7e363fa5a",
        8974: "d9ade88be26900aac89c",
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
        var s, i;
        if (void 0 !== n)
          for (
            var t = document.getElementsByTagName("script"), b = 0;
            b < t.length;
            b++
          ) {
            var f = t[b];
            if (
              f.getAttribute("src") == e ||
              f.getAttribute("data-webpack") == c + n
            ) {
              s = f;
              break;
            }
          }
        s ||
          ((i = !0),
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
                    i = (d && d.target && d.target.href) || a,
                    t = new Error(
                      "Loading CSS chunk " + e + " failed.\n(" + i + ")",
                    );
                  (t.code = "CSS_CHUNK_LOAD_FAILED"),
                    (t.type = s),
                    (t.request = i),
                    c.parentNode.removeChild(c),
                    r(t);
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
            6608: 1,
            6699: 1,
            7762: 1,
            8974: 1,
          }[e] &&
          a.push(
            (s[e] = d(e).then(
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
              a,
            );
          } else e[a] = 0;
      }),
        (o.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var r,
            c,
            [d, s, i] = n,
            t = 0;
          if (d.some((a) => 0 !== e[a])) {
            for (r in s) o.o(s, r) && (o.m[r] = s[r]);
            if (i) var b = i(o);
          }
          for (a && a(n); t < d.length; t++)
            (c = d[t]), o.o(e, c) && e[c] && e[c][0](), (e[c] = 0);
          return o.O(b);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
