/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7595064";
(() => {
  "use strict";
  var a,
    e,
    n,
    o,
    i,
    t = {},
    r = {};
  function c(a) {
    var e = r[a];
    if (void 0 !== e) return e.exports;
    var n = (r[a] = { id: a, loaded: !1, exports: {} });
    return t[a].call(n.exports, n, n.exports, c), (n.loaded = !0), n.exports;
  }
  (c.m = t),
    (a = []),
    (c.O = (e, n, o, i) => {
      if (!n) {
        var t = 1 / 0;
        for (d = 0; d < a.length; d++) {
          for (var [n, o, i] = a[d], r = !0, l = 0; l < n.length; l++)
            (!1 & i || t >= i) && Object.keys(c.O).every((a) => c.O[a](n[l]))
              ? n.splice(l--, 1)
              : ((r = !1), i < t && (t = i));
          if (r) {
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
    (c.n = (a) => {
      var e = a && a.__esModule ? () => a.default : () => a;
      return c.d(e, { a: e }), e;
    }),
    (n = Object.getPrototypeOf
      ? (a) => Object.getPrototypeOf(a)
      : (a) => a.__proto__),
    (c.t = function (a, o) {
      if ((1 & o && (a = this(a)), 8 & o)) return a;
      if ("object" == typeof a && a) {
        if (4 & o && a.__esModule) return a;
        if (16 & o && "function" == typeof a.then) return a;
      }
      var i = Object.create(null);
      c.r(i);
      var t = {};
      e = e || [null, n({}), n([]), n(n)];
      for (var r = 2 & o && a; "object" == typeof r && !~e.indexOf(r); r = n(r))
        Object.getOwnPropertyNames(r).forEach((e) => (t[e] = () => a[e]));
      return (t.default = () => a), c.d(i, t), i;
    }),
    (c.d = (a, e) => {
      for (var n in e)
        c.o(e, n) &&
          !c.o(a, n) &&
          Object.defineProperty(a, n, { enumerable: !0, get: e[n] });
    }),
    (c.f = {}),
    (c.e = (a) =>
      Promise.all(Object.keys(c.f).reduce((e, n) => (c.f[n](a, e), e), []))),
    (c.u = (a) =>
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
        27: "009f9bc6faa3445941fc",
        113: "47bef4e5b9542d2f64e2",
        131: "5f0070ef5540c5dfbec5",
        301: "90d791a6174df43a884b",
        617: "e1408fc3a8db38f33438",
        755: "9b6fba9f7801aae2d2f0",
        1133: "2f01fe16b38e277fe910",
        1195: "1374d54785a0e813ec1a",
        1261: "e208f24c98abc18639eb",
        1311: "93d6cf1edfa74e7192bc",
        1579: "fc3e39572267eafc1597",
        1953: "3fd33971b7846dbc03a5",
        2138: "ac78b67b60fedd9ca873",
        2351: "af799c024c2e2063651a",
        2557: "eed214625442b74057e3",
        2738: "eb7aee94dbec4757909e",
        2822: "5cfcb84e48c43049aab6",
        3038: "2cce631b5ae1c37e637f",
        3298: "e44d8d53d8034b624ca4",
        3602: "a305a9a9105dfba19291",
        4097: "4cfb3e65e9dd2e878ff0",
        4183: "6357463027fdd3b3404e",
        4358: "44a797971a59ab68939d",
        4445: "cfa8b59c18091cd99f0e",
        4469: "195038766f97ca8415be",
        4487: "a371111ea7ab906e8692",
        4513: "22e2cab628580b60062b",
        4729: "1367628103691dea0c0c",
        5012: "8719dd342cda1c6fe9f3",
        5277: "4b60946e96fbaa7452f0",
        5279: "29377d0dd48beccd3a76",
        5493: "561f2b0bf3f535d2ded5",
        5757: "17ac114499c63763cb84",
        6091: "30508156b873f50571f1",
        6403: "3159b690b09d5d7f1448",
        6415: "e7aabc7e452132941959",
        6457: "b83f88e6d28d929e0a56",
        6844: "9a6a23b0f6e2d812dc5c",
        6962: "e81753857c3dc1900fe7",
        7629: "12a48890ffda0976d300",
        7660: "d73f1088b9a8d2530567",
        7769: "9c0e1cabd68ef2e19310",
        7781: "b5dae059676ff294b524",
        7832: "b52c9440093ff8791dfc",
        7901: "f11e1829ad33a98ed183",
        8085: "f4523d7642b4ee05439d",
        8274: "c3eb9f37a0534a808e04",
        8282: "8b21d959146210c77116",
        8291: "271d0047c3f81019ef68",
        8427: "1ae1f89269eea4e97354",
        8433: "dd26c64e06f31132cf3c",
        8525: "7e806b5fb3d5963e65a8",
        8592: "b17fe7d9bbc148ba3617",
        9233: "9ea1e55b08fdddb48f6b",
        9389: "3f23c7c15a7387f535dd",
        9547: "d2f03aa03f9afd1e9b7d",
        9665: "f5e62f994f05f6c4410c",
        9854: "e5a2eb097a39a163ed9d",
        9951: "f44fa0faeff6c0e060fb",
      }[a]),
    (c.miniCssF = (a) => {}),
    (c.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (a) {
        if ("object" == typeof window) return window;
      }
    })()),
    (c.o = (a, e) => Object.prototype.hasOwnProperty.call(a, e)),
    (o = {}),
    (i = "Help:"),
    (c.l = (a, e, n, t) => {
      if (o[a]) o[a].push(e);
      else {
        var r, l;
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
              r = f;
              break;
            }
          }
        r ||
          ((l = !0),
          ((r = document.createElement("script")).charset = "utf-8"),
          (r.timeout = 120),
          c.nc && r.setAttribute("nonce", c.nc),
          r.setAttribute("data-webpack", i + n),
          (r.src = a)),
          (o[a] = [e]);
        var b = (e, n) => {
            (r.onerror = r.onload = null), clearTimeout(h);
            var i = o[a];
            if (
              (delete o[a],
              r.parentNode && r.parentNode.removeChild(r),
              i && i.forEach((a) => a(n)),
              e)
            )
              return e(n);
          },
          h = setTimeout(
            b.bind(null, void 0, { type: "timeout", target: r }),
            12e4
          );
        (r.onerror = b.bind(null, r.onerror)),
          (r.onload = b.bind(null, r.onload)),
          l && document.head.appendChild(r);
      }
    }),
    (c.r = (a) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(a, "__esModule", { value: !0 });
    }),
    (c.nmd = (a) => ((a.paths = []), a.children || (a.children = []), a)),
    (() => {
      var a;
      c.g.importScripts && (a = c.g.location + "");
      var e = c.g.document;
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
        (c.p = a + "../../../");
    })(),
    (() => {
      var a = { 6700: 0 };
      (c.f.j = (e, n) => {
        var o = c.o(a, e) ? a[e] : void 0;
        if (0 !== o)
          if (o) n.push(o[2]);
          else if (6700 != e) {
            var i = new Promise((n, i) => (o = a[e] = [n, i]));
            n.push((o[2] = i));
            var t = c.p + c.u(e),
              r = new Error();
            c.l(
              t,
              (n) => {
                if (c.o(a, e) && (0 !== (o = a[e]) && (a[e] = void 0), o)) {
                  var i = n && ("load" === n.type ? "missing" : n.type),
                    t = n && n.target && n.target.src;
                  (r.message =
                    "Loading chunk " + e + " failed.\n(" + i + ": " + t + ")"),
                    (r.name = "ChunkLoadError"),
                    (r.type = i),
                    (r.request = t),
                    o[1](r);
                }
              },
              "chunk-" + e,
              e
            );
          } else a[e] = 0;
      }),
        (c.O.j = (e) => 0 === a[e]);
      var e = (e, n) => {
          var o,
            i,
            [t, r, l] = n,
            s = 0;
          if (t.some((e) => 0 !== a[e])) {
            for (o in r) c.o(r, o) && (c.m[o] = r[o]);
            if (l) var d = l(c);
          }
          for (e && e(n); s < t.length; s++)
            (i = t[s]), c.o(a, i) && a[i] && a[i][0](), (a[i] = 0);
          return c.O(d);
        },
        n = (self.webpackChunkHelp = self.webpackChunkHelp || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();
