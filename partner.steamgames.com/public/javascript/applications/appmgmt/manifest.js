/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7739199";
(() => {
  "use strict";
  var e,
    a,
    n,
    r,
    d,
    t,
    s,
    c = {},
    i = {};
  function f(e) {
    var a = i[e];
    if (void 0 !== a) return a.exports;
    var n = (i[e] = { id: e, loaded: !1, exports: {} });
    return c[e].call(n.exports, n, n.exports, f), (n.loaded = !0), n.exports;
  }
  (f.m = c),
    (e = []),
    (f.O = (a, n, r, d) => {
      if (!n) {
        var t = 1 / 0;
        for (o = 0; o < e.length; o++) {
          for (var [n, r, d] = e[o], s = !0, c = 0; c < n.length; c++)
            (!1 & d || t >= d) && Object.keys(f.O).every((e) => f.O[e](n[c]))
              ? n.splice(c--, 1)
              : ((s = !1), d < t && (t = d));
          if (s) {
            e.splice(o--, 1);
            var i = r();
            void 0 !== i && (a = i);
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
      var t = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var s = 2 & r && e; "object" == typeof s && !~a.indexOf(s); s = n(s))
        Object.getOwnPropertyNames(s).forEach((a) => (t[a] = () => e[a]));
      return (t.default = () => e), f.d(d, t), d;
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
        477: "libraries~ab4a73d6e",
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
        5117: "libraries~511d96142",
        5257: "marketing_portuguese-json",
        5438: "shared_turkish-json",
        5625: "shared_swedish-json",
        5676: "steamlearn",
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
        9035: "contenthub",
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
        493: "892b03a7d247e60c0f2f",
        614: "04db0f8cd01be95a4d3d",
        647: "9aa22caed2a00ee6cc01",
        698: "25e80b2849c89f5c20d8",
        727: "c40948854594b2c20e24",
        799: "ca27c4535751cfa64617",
        819: "018fd8857afe16ce5459",
        874: "7a3baa9de36bb59e6a09",
        903: "e12ef77830267bf1f2cb",
        907: "374ea5852961d11d72e2",
        1117: "d8200af436a578f4f367",
        1162: "8d4fe3a674e840f216d1",
        1313: "af8d9b6b5bbcd09516ba",
        2029: "a59527d0540a72406547",
        2120: "8ad84bb253e7531f1d49",
        2136: "8d9e781058872f75ced6",
        2431: "fe5ea733482a8a8976a5",
        2443: "ae936ae67a61871431ec",
        2448: "1e4ad5d9521cc2956d6d",
        2522: "29304e8eb01306577668",
        2529: "55673eb38f238d1d4f26",
        2537: "0e1ff4182ebb240697f2",
        2581: "ad18b5d7564fc371d365",
        2601: "a0b9efc87ee0cf99415b",
        2767: "2bb13fb897a2276572c7",
        2824: "75d13215760f30471cb5",
        2844: "98ee19f1251ebd8dd98d",
        2848: "bf13923d58f6c34734d0",
        2942: "744f0d4b6cb7eb47b9db",
        3069: "4c1806619db7a528571a",
        3112: "50098b7e67332c1a96ad",
        3185: "6f446beb9e578ccafe9a",
        3252: "aa46c739166dbb5ffcea",
        3277: "ca5052bc5d6dd98027c5",
        3323: "6461b014798211e24ec6",
        3359: "14819cf102b079dc2e77",
        3453: "d9c5617f839524264b61",
        3557: "f535a89d161f05ba08d9",
        3768: "bd44f27381dd12ae3bb9",
        3784: "dadc6a0dce8e3cc5f83d",
        4033: "9e876dacdd3bcf5229a6",
        4108: "d5e25c7206e9ba13a546",
        4171: "412776f8ef12a49a8088",
        4189: "0e9333f948d88aab0937",
        4199: "762f6f0e7f710cafbff9",
        4238: "50f636644e2a23ae0690",
        4297: "893e0aa5f2e6fffa5c61",
        4458: "7e6efef54fe907479801",
        4535: "5124ecf800c586c9d3e1",
        4601: "af963cc2833f26dc6fd4",
        4722: "88026f088330a5f0983a",
        4823: "9cee286a4f9c119d6de8",
        4860: "b611036258e85dac08f3",
        4929: "7bf4daa2c38ef6ed334f",
        4964: "8e78b13db393e831ea9e",
        5117: "ea8c23ba4890c7de63d1",
        5257: "9f8f296a4e69a8b619b2",
        5438: "bb307adc4b4fc9e2c153",
        5625: "66c8d4f51fed40991bf0",
        5676: "ac02236752fbbc149c7a",
        5849: "86107596f451b4e8393f",
        5888: "13a4a48bcd5ebb5dc685",
        5925: "8275d3820f067eac3282",
        5933: "661f5f759ae32c7e4259",
        5948: "da2f9e72fc34ebcfb102",
        6007: "ddb70a760a6803f5fe1f",
        6019: "5cc1065b711d0aa4e68e",
        6035: "5b9ffe10eb165c5850dc",
        6087: "12b7c15fb10a5e3da9a1",
        6117: "b887c54f3bd03195314e",
        6169: "efc8524c15804e68405d",
        6492: "cca69d841f143facb829",
        6542: "6db7d3d26744117c74d9",
        6699: "cc3c82167cd89c0dbecb",
        6815: "f8e348f10e0494f7524f",
        6817: "b92a2a3cf7e3700c21cd",
        6846: "512715f713f37c2f97ef",
        7082: "cbc58d457b94c6431769",
        7236: "9e510059d2f5efeec796",
        7334: "02eb12f8c53901ca695e",
        7602: "fedaf7dd043911d83236",
        7762: "9784117219bafc7407eb",
        7781: "ff55928d6f4fc10c5758",
        7871: "0bef3cdfe81fd8ad597b",
        7890: "6861c4144675593649b4",
        7940: "7f6fd02a2c3ff2427172",
        7942: "7c22ac5b068287c588e3",
        7951: "c04b84fd0fd11c01e624",
        7975: "cec8e3cf28035750cb6e",
        8001: "f5ce83acf3bbc79c6460",
        8051: "6bc58afe0861679d698c",
        8155: "27de7ae092de747fa092",
        8168: "10ae6e2f829338af7ed3",
        8385: "b913c34351cdb44a70a0",
        8774: "38c6fded431691e3a81a",
        8960: "606868ac4600d9fe7f02",
        8974: "1fbf6584668711a51361",
        8994: "47625278413751e57f79",
        9035: "8d859780a5bd097ac486",
        9060: "b98617a0c2550cc35136",
        9062: "1a460b500308b4cee4e4",
        9431: "fb802e39bc5ebce18d0c",
        9568: "aa08b8794c355226512b",
        9603: "3eacd5b27e59e923724f",
        9663: "54c5f2f8e78fb127ecda",
        9753: "bd8b8cb8f5c0bfe55b1c",
        9899: "4ba468909483eea11d5e",
        9903: "4130b2308d677163ea6c",
        9919: "4671150433a4d9096c85",
        9980: "716fbe899a40c66b94c1",
      }[e]),
    (f.miniCssF = (e) =>
      "css/applications/appmgmt/" +
      {
        493: "libraries~29ab6dbf5",
        2136: "events",
        2522: "logoedtior",
        2529: "pricingtool",
        4535: "login",
        4601: "broadcast",
        5676: "steamlearn",
        5888: "chunk~ab4a73d6e",
        6699: "steamdeck",
        7334: "chunk~29ab6dbf5",
        7762: "steamml",
        8974: "storeadmin",
        9035: "contenthub",
        9060: "chunk~b3fafa6d2",
      }[e] +
      ".css?contenthash=" +
      {
        493: "d885e31859d50e4d4824",
        2136: "3d967b927be2002ef6be",
        2522: "7751c352d0c9c6aa48d6",
        2529: "1d875bac23ac1f93b8a5",
        4535: "1e8d4c2f448ef0f3b8ad",
        4601: "eb529b6ef7b3aac8e613",
        5676: "a0ab437fd32bc78acc9e",
        5888: "919816d99d92c0c92a84",
        6699: "b4500b22379c6357d707",
        7334: "5695736ccd096744dc7e",
        7762: "e3a2b8e7ea298a4cb539",
        8974: "30bc272190fd7a2c443a",
        9035: "0a119707f2fbdc857531",
        9060: "68bde0a13b6cd09668dc",
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
    (f.l = (e, a, n, t) => {
      if (r[e]) r[e].push(a);
      else {
        var s, c;
        if (void 0 !== n)
          for (
            var i = document.getElementsByTagName("script"), o = 0;
            o < i.length;
            o++
          ) {
            var b = i[o];
            if (
              b.getAttribute("src") == e ||
              b.getAttribute("data-webpack") == d + n
            ) {
              s = b;
              break;
            }
          }
        s ||
          ((c = !0),
          ((s = document.createElement("script")).charset = "utf-8"),
          (s.timeout = 120),
          f.nc && s.setAttribute("nonce", f.nc),
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
            12e4
          );
        (s.onerror = h.bind(null, s.onerror)),
          (s.onload = h.bind(null, s.onload)),
          c && document.head.appendChild(s);
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
    (t = (e) =>
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
                (s = n[r]).getAttribute("data-href") || s.getAttribute("href");
              if ("stylesheet" === s.rel && (d === e || d === a)) return s;
            }
            var t = document.getElementsByTagName("style");
            for (r = 0; r < t.length; r++) {
              var s;
              if ((d = (s = t[r]).getAttribute("data-href")) === e || d === a)
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
              (t) => {
                if (((d.onerror = d.onload = null), "load" === t.type)) n();
                else {
                  var s = t && ("load" === t.type ? "missing" : t.type),
                    c = (t && t.target && t.target.href) || a,
                    i = new Error(
                      "Loading CSS chunk " + e + " failed.\n(" + c + ")"
                    );
                  (i.code = "CSS_CHUNK_LOAD_FAILED"),
                    (i.type = s),
                    (i.request = c),
                    d.parentNode.removeChild(d),
                    r(i);
                }
              }),
            (d.href = a),
            document.head.appendChild(d);
        })(e, d, a, n);
      })),
    (s = { 6700: 0 }),
    (f.f.miniCss = (e, a) => {
      s[e]
        ? a.push(s[e])
        : 0 !== s[e] &&
          {
            493: 1,
            2136: 1,
            2522: 1,
            2529: 1,
            4535: 1,
            4601: 1,
            5676: 1,
            5888: 1,
            6699: 1,
            7334: 1,
            7762: 1,
            8974: 1,
            9035: 1,
            9060: 1,
          }[e] &&
          a.push(
            (s[e] = t(e).then(
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
      (f.f.j = (a, n) => {
        var r = f.o(e, a) ? e[a] : void 0;
        if (0 !== r)
          if (r) n.push(r[2]);
          else if (6700 != a) {
            var d = new Promise((n, d) => (r = e[a] = [n, d]));
            n.push((r[2] = d));
            var t = f.p + f.u(a),
              s = new Error();
            f.l(
              t,
              (n) => {
                if (f.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var d = n && ("load" === n.type ? "missing" : n.type),
                    t = n && n.target && n.target.src;
                  (s.message =
                    "Loading chunk " + a + " failed.\n(" + d + ": " + t + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = d),
                    (s.request = t),
                    r[1](s);
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
            [t, s, c] = n,
            i = 0;
          if (t.some((a) => 0 !== e[a])) {
            for (r in s) f.o(s, r) && (f.m[r] = s[r]);
            if (c) var o = c(f);
          }
          for (a && a(n); i < t.length; i++)
            (d = t[i]), f.o(e, d) && e[d] && e[d][0](), (e[d] = 0);
          return f.O(o);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
