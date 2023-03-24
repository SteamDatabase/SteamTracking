/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7945024";
(() => {
  "use strict";
  var a,
    e,
    n,
    o,
    i,
    t = {},
    c = {};
  function r(a) {
    var e = c[a];
    if (void 0 !== e) return e.exports;
    var n = (c[a] = { id: a, loaded: !1, exports: {} });
    return t[a].call(n.exports, n, n.exports, r), (n.loaded = !0), n.exports;
  }
  (r.m = t),
    (a = []),
    (r.O = (e, n, o, i) => {
      if (!n) {
        var t = 1 / 0;
        for (d = 0; d < a.length; d++) {
          for (var [n, o, i] = a[d], c = !0, l = 0; l < n.length; l++)
            (!1 & i || t >= i) && Object.keys(r.O).every((a) => r.O[a](n[l]))
              ? n.splice(l--, 1)
              : ((c = !1), i < t && (t = i));
          if (c) {
            a.splice(d--, 1);
            var s = o();
            void 0 !== s && (e = s);
          }
        }
        return e;
      }
      i = i || 0;
      for (var d = a.length; d > 0 && a[d - 1][2] > i; d--) a[d] = a[d - 1];
      a[d] = [n, o, i];
    }),
    (r.n = (a) => {
      var e = a && a.__esModule ? () => a.default : () => a;
      return r.d(e, { a: e }), e;
    }),
    (n = Object.getPrototypeOf
      ? (a) => Object.getPrototypeOf(a)
      : (a) => a.__proto__),
    (r.t = function (a, o) {
      if ((1 & o && (a = this(a)), 8 & o)) return a;
      if ("object" == typeof a && a) {
        if (4 & o && a.__esModule) return a;
        if (16 & o && "function" == typeof a.then) return a;
      }
      var i = Object.create(null);
      r.r(i);
      var t = {};
      e = e || [null, n({}), n([]), n(n)];
      for (var c = 2 & o && a; "object" == typeof c && !~e.indexOf(c); c = n(c))
        Object.getOwnPropertyNames(c).forEach((e) => (t[e] = () => a[e]));
      return (t.default = () => a), r.d(i, t), i;
    }),
    (r.d = (a, e) => {
      for (var n in e)
        r.o(e, n) &&
          !r.o(a, n) &&
          Object.defineProperty(a, n, { enumerable: !0, get: e[n] });
    }),
    (r.f = {}),
    (r.e = (a) =>
      Promise.all(Object.keys(r.f).reduce((e, n) => (r.f[n](a, e), e), []))),
    (r.u = (a) =>
      "javascript/applications/help/" +
      {
        27: "localization/shared_japanese-json",
        113: "localization/main_romanian-json",
        131: "localization/shared_english-json",
        301: "localization/main_russian-json",
        617: "localization/main_portuguese-json",
        755: "localization/shared_schinese-json",
        1133: "localization/main_bulgarian-json",
        1195: "localization/main_tchinese-json",
        1261: "localization/shared_norwegian-json",
        1311: "localization/main_greek-json",
        1579: "localization/shared_ukrainian-json",
        1953: "localization/shared_finnish-json",
        2138: "localization/shared_thai-json",
        2351: "localization/main_swedish-json",
        2557: "localization/main_ukrainian-json",
        2738: "localization/shared_turkish-json",
        2822: "localization/shared_greek-json",
        3038: "localization/main_french-json",
        3298: "localization/shared_brazilian-json",
        3602: "localization/shared_dutch-json",
        4097: "localization/shared_spanish-json",
        4183: "localization/shared_danish-json",
        4358: "localization/shared_sc_schinese-json",
        4445: "localization/shared_german-json",
        4469: "localization/shared_koreana-json",
        4487: "localization/shared_swedish-json",
        4513: "localization/shared_italian-json",
        4729: "localization/shared_french-json",
        5012: "localization/main_italian-json",
        5277: "localization/main_latam-json",
        5279: "localization/shared_hungarian-json",
        5493: "localization/main_thai-json",
        5757: "localization/main_norwegian-json",
        6091: "localization/main_koreana-json",
        6403: "localization/shared_russian-json",
        6415: "localization/main_brazilian-json",
        6457: "localization/main_turkish-json",
        6844: "localization/shared_polish-json",
        6962: "localization/main_dutch-json",
        7629: "localization/main_schinese-json",
        7660: "localization/shared_romanian-json",
        7769: "localization/main_german-json",
        7781: "localization/shared_bulgarian-json",
        7832: "localization/shared_arabic-json",
        7901: "localization/main_vietnamese-json",
        8085: "localization/shared_czech-json",
        8274: "localization/main_hungarian-json",
        8282: "localization/main_czech-json",
        8291: "localization/main_polish-json",
        8427: "localization/main_finnish-json",
        8433: "localization/shared_vietnamese-json",
        8525: "localization/main_spanish-json",
        8592: "localization/main_danish-json",
        9233: "localization/main_japanese-json",
        9389: "localization/main_sc_schinese-json",
        9547: "localization/shared_tchinese-json",
        9665: "localization/main_english-json",
        9854: "localization/shared_portuguese-json",
        9951: "localization/shared_latam-json",
      }[a] +
      ".js?contenthash=" +
      {
        27: "52a1c4061604dfdc332a",
        113: "8c2eff5c92390d332bab",
        131: "a8e76f93dcf64efd2f52",
        301: "e1c991a0a2064d23b3b8",
        617: "d903ffe69281324c7a80",
        755: "8927cc64b67d0a4f4815",
        1133: "246cfbd1e251877464af",
        1195: "e0a1ad2fa4d8b3516e4c",
        1261: "be0470409efc1f85c760",
        1311: "a215290b7bde48eaf243",
        1579: "09316616c7966928b2a0",
        1953: "432d77845799941af38b",
        2138: "e1365887650017b2bd4c",
        2351: "6eac8ec9169ac4389b58",
        2557: "865cb703a9722ef14944",
        2738: "4fc6f64c034580c5c804",
        2822: "bd20cc8be9f5a09357a8",
        3038: "a30fc6ead08daef4f814",
        3298: "9b6d008ea87bcf6e5fb2",
        3602: "fbaebf92ec80b74f240f",
        4097: "3308be50791472c69385",
        4183: "6b99a16239b3f7306971",
        4358: "8e7287d3bbe4de694b2c",
        4445: "63f2aafc8a46e2258d55",
        4469: "539c761f436d1ade4a7f",
        4487: "8274c79dce07b46951db",
        4513: "6c85aa8ce1b87abe0b1a",
        4729: "1d6f475dd32687303cfb",
        5012: "cefc1d33964885ca39e2",
        5277: "620b99fcfdcc8791bc8d",
        5279: "26fe45cd4b880b72758b",
        5493: "8121d6a1c3bc040c7aa7",
        5757: "b48d5b97731315614e13",
        6091: "f45bf513eda73721537a",
        6403: "a63404ed63dfc4d3c426",
        6415: "40f59f6d4fc19efc292e",
        6457: "7bdd476b740b597caeb9",
        6844: "b073aa2e91aae7ce8b96",
        6962: "b0b4580873d45bbfc7b8",
        7629: "7770dc12bdb3e997e07e",
        7660: "f2ec6acfe6ab5d12cbd2",
        7769: "8d60a03babac83fd6661",
        7781: "ab7ffcaef0a03e986c78",
        7832: "2dd85a8abd615695ae4c",
        7901: "619b00fb185460da4302",
        8085: "ae38da26c792cba37728",
        8274: "8e2ecd8c16dd7e778302",
        8282: "8b69834304b80573d27b",
        8291: "d1dea15a861fee4bbc48",
        8427: "de235f08dcf6283c03e1",
        8433: "6898cb51266edfd13176",
        8525: "d750338a471f8a6ba966",
        8592: "90964091e85792e22c71",
        9233: "6d6e375a9175bc3de175",
        9389: "7fd1399b5363f61a1bec",
        9547: "cc892494abf69b7e630f",
        9665: "26a27344992acdd14035",
        9854: "57a7336a2bc1b6d27ffd",
        9951: "f38c3580a616f50cd472",
      }[a]),
    (r.miniCssF = (a) => {}),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (a) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.o = (a, e) => Object.prototype.hasOwnProperty.call(a, e)),
    (o = {}),
    (i = "Help:"),
    (r.l = (a, e, n, t) => {
      if (o[a]) o[a].push(e);
      else {
        var c, l;
        if (void 0 !== n)
          for (
            var s = document.getElementsByTagName("script"), d = 0;
            d < s.length;
            d++
          ) {
            var f = s[d];
            if (
              f.getAttribute("src") == a ||
              f.getAttribute("data-webpack") == i + n
            ) {
              c = f;
              break;
            }
          }
        c ||
          ((l = !0),
          ((c = document.createElement("script")).charset = "utf-8"),
          (c.timeout = 120),
          r.nc && c.setAttribute("nonce", r.nc),
          c.setAttribute("data-webpack", i + n),
          (c.src = a)),
          (o[a] = [e]);
        var b = (e, n) => {
            (c.onerror = c.onload = null), clearTimeout(h);
            var i = o[a];
            if (
              (delete o[a],
              c.parentNode && c.parentNode.removeChild(c),
              i && i.forEach((a) => a(n)),
              e)
            )
              return e(n);
          },
          h = setTimeout(
            b.bind(null, void 0, { type: "timeout", target: c }),
            12e4
          );
        (c.onerror = b.bind(null, c.onerror)),
          (c.onload = b.bind(null, c.onload)),
          l && document.head.appendChild(c);
      }
    }),
    (r.r = (a) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(a, "__esModule", { value: !0 });
    }),
    (r.nmd = (a) => ((a.paths = []), a.children || (a.children = []), a)),
    (() => {
      var a;
      r.g.importScripts && (a = r.g.location + "");
      var e = r.g.document;
      if (!a && e && (e.currentScript && (a = e.currentScript.src), !a)) {
        var n = e.getElementsByTagName("script");
        n.length && (a = n[n.length - 1].src);
      }
      if (!a)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (a = a
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (r.p = a + "../../../");
    })(),
    (() => {
      var a = { 6700: 0 };
      (r.f.j = (e, n) => {
        var o = r.o(a, e) ? a[e] : void 0;
        if (0 !== o)
          if (o) n.push(o[2]);
          else if (6700 != e) {
            var i = new Promise((n, i) => (o = a[e] = [n, i]));
            n.push((o[2] = i));
            var t = r.p + r.u(e),
              c = new Error();
            r.l(
              t,
              (n) => {
                if (r.o(a, e) && (0 !== (o = a[e]) && (a[e] = void 0), o)) {
                  var i = n && ("load" === n.type ? "missing" : n.type),
                    t = n && n.target && n.target.src;
                  (c.message =
                    "Loading chunk " + e + " failed.\n(" + i + ": " + t + ")"),
                    (c.name = "ChunkLoadError"),
                    (c.type = i),
                    (c.request = t),
                    o[1](c);
                }
              },
              "chunk-" + e,
              e
            );
          } else a[e] = 0;
      }),
        (r.O.j = (e) => 0 === a[e]);
      var e = (e, n) => {
          var o,
            i,
            [t, c, l] = n,
            s = 0;
          if (t.some((e) => 0 !== a[e])) {
            for (o in c) r.o(c, o) && (r.m[o] = c[o]);
            if (l) var d = l(r);
          }
          for (e && e(n); s < t.length; s++)
            (i = t[s]), r.o(a, i) && a[i] && a[i][0](), (a[i] = 0);
          return r.O(d);
        },
        n = (self.webpackChunkHelp = self.webpackChunkHelp || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();
