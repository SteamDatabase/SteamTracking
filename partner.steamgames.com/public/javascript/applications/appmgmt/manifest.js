/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7514922";
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
        for (f = 0; f < e.length; f++) {
          for (var [n, r, s] = e[f], d = !0, i = 0; i < n.length; i++)
            (!1 & s || t >= s) && Object.keys(o.O).every((e) => o.O[e](n[i]))
              ? n.splice(i--, 1)
              : ((d = !1), s < t && (t = s));
          if (d) {
            e.splice(f--, 1);
            var c = r();
            void 0 !== c && (a = c);
          }
        }
        return a;
      }
      s = s || 0;
      for (var f = e.length; f > 0 && e[f - 1][2] > s; f--) e[f] = e[f - 1];
      e[f] = [n, r, s];
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
        647: "6ef9db1bfbd5439618fb",
        698: "c23693fd7871789c04b1",
        727: "3ee47c074bdf376db6ff",
        799: "12e5a3d34d768b232f9c",
        819: "018fd8857afe16ce5459",
        874: "7a3baa9de36bb59e6a09",
        903: "adb261a4e53953b5e6f8",
        1117: "1175427691c58048c235",
        1162: "546a8703dc5f6e9e919d",
        1313: "6296020a84d93bcb7b6e",
        2029: "590083161416eaabccb4",
        2136: "e83cd78afb295d7f2f98",
        2431: "fe5ea733482a8a8976a5",
        2443: "1ac925e30952977a0256",
        2448: "1e4ad5d9521cc2956d6d",
        2522: "b64b3a9c2ae295cfbfec",
        2529: "6713e89687294b6be4f6",
        2537: "6a860988527875eafb07",
        2581: "ad18b5d7564fc371d365",
        2601: "a0b9efc87ee0cf99415b",
        2767: "511817d97191e0eee092",
        2824: "75d13215760f30471cb5",
        2844: "dc913587363215554886",
        2848: "2c61aa273c8b9e956536",
        2942: "e5061bd8de1dc370f2c2",
        3069: "e33186e3c17b5589abd0",
        3112: "99a2b98dd3b374dcad82",
        3185: "04d600c1c6cb9edd43a1",
        3252: "ab1cb7468dd36c232e49",
        3277: "01f60b2fa2ddd959992c",
        3323: "a2fa32d5e46d105e89a1",
        3359: "acd5c59c2d92edeaa49e",
        3453: "d9c5617f839524264b61",
        3557: "9cbf3177cdf17f3ab209",
        3768: "a4faa5a9d56d89b0f6ec",
        3784: "108250ee4ee20ad44225",
        4033: "9e876dacdd3bcf5229a6",
        4108: "cce51993219b2ef04a72",
        4171: "412776f8ef12a49a8088",
        4189: "6f2f0fb3301b71c2a44e",
        4199: "e75981cb31290f1fdb25",
        4238: "50f636644e2a23ae0690",
        4297: "c2487c0aa890c5f33ed4",
        4458: "7e6efef54fe907479801",
        4535: "3202cf80f018ede66093",
        4601: "707a55fb2ce12a451467",
        4722: "cffbe0c486aadb3cea32",
        4823: "65b9787cf55b0326486b",
        4860: "79b8a0d64a391761e5d8",
        4929: "7bf4daa2c38ef6ed334f",
        4964: "a4f889f387f27ff74242",
        5257: "9f8f296a4e69a8b619b2",
        5438: "60bbeca15f67659fe2e4",
        5625: "7ded13536cd9f1895af4",
        5849: "f2eb5e6740a123b5dd35",
        5888: "61081e49248a3da150cb",
        5925: "7028b1af0245c607714a",
        5933: "0dff1db44186531ca16d",
        5948: "3996256d60d1f50aff56",
        6007: "421b4163567eb08e8f5e",
        6019: "5cc1065b711d0aa4e68e",
        6035: "5b9ffe10eb165c5850dc",
        6087: "79cc8f381b49fcbb40a8",
        6117: "919e5dcce407c6d20419",
        6169: "efc8524c15804e68405d",
        6492: "3435bccc4cd4e6f9b885",
        6542: "1e20911cd9a6b1dfec38",
        6699: "04b60c2f5d07fadc496c",
        6815: "df7a029aba20764100e4",
        6817: "558846518c891edbe210",
        6846: "512715f713f37c2f97ef",
        7082: "cbc58d457b94c6431769",
        7236: "4a69bb3824cb7b48ff97",
        7334: "ec5cf9e080c6ae73bdcf",
        7602: "39062383692ab9cf6016",
        7762: "6d7b950f614d1b3e56c9",
        7781: "97fae9ab66daa3fd3637",
        7871: "0bef3cdfe81fd8ad597b",
        7890: "f292b9dfee219979617a",
        7940: "aef15f4451ebd73cae5a",
        7942: "7c22ac5b068287c588e3",
        7951: "e374b6b906e31e119164",
        7975: "e8360cd2f53ab21f453a",
        8001: "f5ce83acf3bbc79c6460",
        8051: "b0e205cc5fefe9651d7b",
        8155: "05899fab4549955e603f",
        8168: "59a0301e903080695ef5",
        8385: "c8639381d4ea15906c67",
        8774: "38c6fded431691e3a81a",
        8960: "606868ac4600d9fe7f02",
        8974: "3d909cb230f7aad08a31",
        8994: "47625278413751e57f79",
        9060: "53182d0b14f5862796ee",
        9062: "ba294a6a70759dc7e27d",
        9431: "b8c5d4a6b4164c356975",
        9568: "3ba714733eab5b7a115a",
        9603: "f9f6a01c5bce6aee1f36",
        9663: "9d74654c6cceaa2517d3",
        9753: "412a91ef7906f41bc0a7",
        9899: "4ba468909483eea11d5e",
        9903: "4130b2308d677163ea6c",
        9919: "4671150433a4d9096c85",
        9980: "24a65e95cb80a4cd5e3b",
      }[e]),
    (o.miniCssF = (e) =>
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
        2136: "330b6ceae8567a8701ea",
        2522: "b1596d727e0bf9992e67",
        2529: "c4183bb7c1d9c7de2dbb",
        4601: "31ca47ebac87d385b933",
        5888: "ae7bdf7285af918efbfc",
        6699: "255576ed648944357d8c",
        7762: "e3a2b8e7ea298a4cb539",
        8974: "204ff54d3ad2d0998199",
        9060: "84e3430ef5f4fddeffcb",
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
            var c = document.getElementsByTagName("script"), f = 0;
            f < c.length;
            f++
          ) {
            var b = c[f];
            if (
              b.getAttribute("src") == e ||
              b.getAttribute("data-webpack") == s + n
            ) {
              d = b;
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
            (d.onerror = d.onload = null), clearTimeout(m);
            var s = r[e];
            if (
              (delete r[e],
              d.parentNode && d.parentNode.removeChild(d),
              s && s.forEach((e) => e(n)),
              a)
            )
              return a(n);
          },
          m = setTimeout(
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
            if (i) var f = i(o);
          }
          for (a && a(n); c < t.length; c++)
            (s = t[c]), o.o(e, s) && e[s] && e[s][0](), (e[s] = 0);
          return o.O(f);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
