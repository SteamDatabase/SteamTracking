/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7554930";
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
    o = {};
  function c(e) {
    var a = o[e];
    if (void 0 !== a) return a.exports;
    var n = (o[e] = { id: e, loaded: !1, exports: {} });
    return i[e].call(n.exports, n, n.exports, c), (n.loaded = !0), n.exports;
  }
  (c.m = i),
    (e = []),
    (c.O = (a, n, r, d) => {
      if (!n) {
        var s = 1 / 0;
        for (f = 0; f < e.length; f++) {
          for (var [n, r, d] = e[f], t = !0, i = 0; i < n.length; i++)
            (!1 & d || s >= d) && Object.keys(c.O).every((e) => c.O[e](n[i]))
              ? n.splice(i--, 1)
              : ((t = !1), d < s && (s = d));
          if (t) {
            e.splice(f--, 1);
            var o = r();
            void 0 !== o && (a = o);
          }
        }
        return a;
      }
      d = d || 0;
      for (var f = e.length; f > 0 && e[f - 1][2] > d; f--) e[f] = e[f - 1];
      e[f] = [n, r, d];
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
      var d = Object.create(null);
      c.r(d);
      var s = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var t = 2 & r && e; "object" == typeof t && !~a.indexOf(t); t = n(t))
        Object.getOwnPropertyNames(t).forEach((a) => (s[a] = () => e[a]));
      return (s.default = () => e), c.d(d, s), d;
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
        477: "libraries~ab4a73d6e",
        493: "libraries~29ab6dbf5",
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
        4964: "shared_vietnamese-json",
        5257: "marketing_portuguese-json",
        5438: "shared_turkish-json",
        5625: "shared_swedish-json",
        5849: "shared_portuguese-json",
        5888: "chunk~ab4a73d6e",
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
        9060: "chunk~b3fafa6d2",
        9062: "shared_russian-json",
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
        477: "00a4e7eac55f4cdbfbda",
        493: "88ed61bc4d84c34f6097",
        647: "75a53f2fd33879115d74",
        698: "a420081b6df405800864",
        727: "f194ab102b21def55d11",
        799: "d33dfa0d3b81c9742bf5",
        819: "018fd8857afe16ce5459",
        874: "7a3baa9de36bb59e6a09",
        903: "adb261a4e53953b5e6f8",
        1117: "db7b315d02edb9370df2",
        1162: "89afbf0c3f45908ed3d9",
        1313: "2f5f694791cdc1f6ba0d",
        2029: "590083161416eaabccb4",
        2136: "9d292e19dfecd33cc37b",
        2431: "fe5ea733482a8a8976a5",
        2443: "310fd82eb70b4e6d6cc7",
        2448: "1e4ad5d9521cc2956d6d",
        2522: "0d3843cb35810871834c",
        2529: "60453129318056c8e8fe",
        2537: "3f2b88135732c7cc4c38",
        2581: "ad18b5d7564fc371d365",
        2601: "a0b9efc87ee0cf99415b",
        2767: "108960870339b9b310f6",
        2824: "75d13215760f30471cb5",
        2844: "3d202fbc8b0029062a91",
        2848: "dbd5a6db61273ccfc729",
        2942: "c35f11c0cc1c2a4fa077",
        3069: "e33186e3c17b5589abd0",
        3112: "8ab9342fbad69ad0eaad",
        3185: "2c99a49d4e40cc836436",
        3252: "39e6ec655883528edb39",
        3277: "ba0fa4f6b515bbaf4a04",
        3323: "a604e4805cfe8380e1a9",
        3359: "fec7a558e2a717d3ded3",
        3453: "d9c5617f839524264b61",
        3557: "90ac03aa07d6cb4a3dbc",
        3768: "3b644edc177ddc993ad2",
        3784: "5338129a314d5f7d343e",
        4033: "9e876dacdd3bcf5229a6",
        4108: "d5d31966b43f9b3dd2ef",
        4171: "412776f8ef12a49a8088",
        4189: "ab847b2127bff29f694f",
        4199: "e75981cb31290f1fdb25",
        4238: "50f636644e2a23ae0690",
        4297: "32a000ff0180bc5876e6",
        4458: "7e6efef54fe907479801",
        4535: "21fd80c4c90873565fd4",
        4601: "5da43a56e7b8c132f27f",
        4722: "aefb5aaaa44a9687435b",
        4823: "b8267658535091319fc3",
        4860: "ca9c6673dc22bc9179b0",
        4929: "7bf4daa2c38ef6ed334f",
        4964: "433dd5e940d3b645d89d",
        5257: "9f8f296a4e69a8b619b2",
        5438: "5a849d27194ff2d06d42",
        5625: "8f3ac6ce5fa8eec283ce",
        5849: "d3a8554549eaec24f592",
        5888: "fd2531fcda0a29b03cc3",
        5925: "edae87da268c98feb58c",
        5933: "6e23925206e79eaca58b",
        5948: "7426a31092c3bb817863",
        6007: "63b8151035e3eecdcfc0",
        6019: "5cc1065b711d0aa4e68e",
        6035: "5b9ffe10eb165c5850dc",
        6087: "8a5ce8419a8963fbd8fb",
        6117: "ea35168781d18a504bf8",
        6169: "efc8524c15804e68405d",
        6492: "a6531acd025cd21ab950",
        6542: "5119c87dfe76974e24ae",
        6699: "04b60c2f5d07fadc496c",
        6815: "cf5389866bb914eea752",
        6817: "867babbeb8a5d2446003",
        6846: "512715f713f37c2f97ef",
        7082: "cbc58d457b94c6431769",
        7236: "8798db2925afc4a6c855",
        7334: "3a84aa6768c6f26b1a2a",
        7602: "7c9d2919b7c6833c327f",
        7762: "6d7b950f614d1b3e56c9",
        7781: "8e394d236c0e0dc26619",
        7871: "0bef3cdfe81fd8ad597b",
        7890: "3e34297eb2b38b2732f1",
        7940: "aef15f4451ebd73cae5a",
        7942: "7c22ac5b068287c588e3",
        7951: "7350c3764461f1fbdf5f",
        7975: "e481b55eb135f2e817a1",
        8001: "f5ce83acf3bbc79c6460",
        8051: "73e48f7c83458f76b4a2",
        8155: "df1b462031859b106b0e",
        8168: "ab665ba1c61ef235f3e0",
        8385: "599c18ce1d553cc5da77",
        8774: "38c6fded431691e3a81a",
        8960: "606868ac4600d9fe7f02",
        8974: "476985bf0c964f4aa984",
        8994: "47625278413751e57f79",
        9060: "d7ab85e7be859bf9e0d7",
        9062: "ff3c9e80180e5c40892a",
        9431: "88073c53de43e7542775",
        9568: "b8bf5d7fc0541b042c9b",
        9603: "f9f6a01c5bce6aee1f36",
        9663: "c19238f4f7b643e5f8d1",
        9753: "7e2f5a789513e1c59d68",
        9899: "4ba468909483eea11d5e",
        9903: "4130b2308d677163ea6c",
        9919: "4671150433a4d9096c85",
        9980: "6083499e7199a87f86d5",
      }[e]),
    (c.miniCssF = (e) =>
      "css/applications/appmgmt/" +
      {
        493: "libraries~29ab6dbf5",
        2136: "events",
        2522: "logoedtior",
        2529: "pricingtool",
        4601: "broadcast",
        5888: "chunk~ab4a73d6e",
        6699: "steamdeck",
        7762: "steamml",
        8974: "storeadmin",
        9060: "chunk~b3fafa6d2",
      }[e] +
      ".css?contenthash=" +
      {
        493: "d885e31859d50e4d4824",
        2136: "f3ea0bac6e52b4b4a75b",
        2522: "b1596d727e0bf9992e67",
        2529: "e2cd7ea1ecb4cefc7f04",
        4601: "bc0f9ecc7f5b43d48689",
        5888: "9ea666f7eea27a59499e",
        6699: "255576ed648944357d8c",
        7762: "e3a2b8e7ea298a4cb539",
        8974: "eb6d5d24a72967e983b6",
        9060: "1e182a50bf982b906585",
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
    (d = "appmgmt-storeadmin:"),
    (c.l = (e, a, n, s) => {
      if (r[e]) r[e].push(a);
      else {
        var t, i;
        if (void 0 !== n)
          for (
            var o = document.getElementsByTagName("script"), f = 0;
            f < o.length;
            f++
          ) {
            var b = o[f];
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
          c.nc && t.setAttribute("nonce", c.nc),
          t.setAttribute("data-webpack", d + n),
          (t.src = e)),
          (r[e] = [a]);
        var h = (a, n) => {
            (t.onerror = t.onload = null), clearTimeout(m);
            var d = r[e];
            if (
              (delete r[e],
              t.parentNode && t.parentNode.removeChild(t),
              d && d.forEach((e) => e(n)),
              a)
            )
              return a(n);
          },
          m = setTimeout(
            h.bind(null, void 0, { type: "timeout", target: t }),
            12e4
          );
        (t.onerror = h.bind(null, t.onerror)),
          (t.onload = h.bind(null, t.onload)),
          i && document.head.appendChild(t);
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
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (c.p = e + "../../../");
    })(),
    (s = (e) =>
      new Promise((a, n) => {
        var r = c.miniCssF(e),
          d = c.p + r;
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
                    o = new Error(
                      "Loading CSS chunk " + e + " failed.\n(" + i + ")"
                    );
                  (o.code = "CSS_CHUNK_LOAD_FAILED"),
                    (o.type = t),
                    (o.request = i),
                    d.parentNode.removeChild(d),
                    r(o);
                }
              }),
            (d.href = a),
            document.head.appendChild(d);
        })(e, d, a, n);
      })),
    (t = { 6700: 0 }),
    (c.f.miniCss = (e, a) => {
      t[e]
        ? a.push(t[e])
        : 0 !== t[e] &&
          {
            493: 1,
            2136: 1,
            2522: 1,
            2529: 1,
            4601: 1,
            5888: 1,
            6699: 1,
            7762: 1,
            8974: 1,
            9060: 1,
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
      (c.f.j = (a, n) => {
        var r = c.o(e, a) ? e[a] : void 0;
        if (0 !== r)
          if (r) n.push(r[2]);
          else if (6700 != a) {
            var d = new Promise((n, d) => (r = e[a] = [n, d]));
            n.push((r[2] = d));
            var s = c.p + c.u(a),
              t = new Error();
            c.l(
              s,
              (n) => {
                if (c.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
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
        (c.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var r,
            d,
            [s, t, i] = n,
            o = 0;
          if (s.some((a) => 0 !== e[a])) {
            for (r in t) c.o(t, r) && (c.m[r] = t[r]);
            if (i) var f = i(c);
          }
          for (a && a(n); o < s.length; o++)
            (d = s[o]), c.o(e, d) && e[d] && e[d][0](), (e[d] = 0);
          return c.O(f);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
