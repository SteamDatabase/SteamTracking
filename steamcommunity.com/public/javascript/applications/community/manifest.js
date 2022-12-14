/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7721160";
(() => {
  "use strict";
  var a,
    e,
    n,
    o,
    c,
    i,
    t,
    s = {},
    l = {};
  function d(a) {
    var e = l[a];
    if (void 0 !== e) return e.exports;
    var n = (l[a] = { id: a, loaded: !1, exports: {} });
    return s[a].call(n.exports, n, n.exports, d), (n.loaded = !0), n.exports;
  }
  (d.m = s),
    (a = []),
    (d.O = (e, n, o, c) => {
      if (!n) {
        var i = 1 / 0;
        for (r = 0; r < a.length; r++) {
          for (var [n, o, c] = a[r], t = !0, s = 0; s < n.length; s++)
            (!1 & c || i >= c) && Object.keys(d.O).every((a) => d.O[a](n[s]))
              ? n.splice(s--, 1)
              : ((t = !1), c < i && (i = c));
          if (t) {
            a.splice(r--, 1);
            var l = o();
            void 0 !== l && (e = l);
          }
        }
        return e;
      }
      c = c || 0;
      for (var r = a.length; r > 0 && a[r - 1][2] > c; r--) a[r] = a[r - 1];
      a[r] = [n, o, c];
    }),
    (d.n = (a) => {
      var e = a && a.__esModule ? () => a.default : () => a;
      return d.d(e, { a: e }), e;
    }),
    (n = Object.getPrototypeOf
      ? (a) => Object.getPrototypeOf(a)
      : (a) => a.__proto__),
    (d.t = function (a, o) {
      if ((1 & o && (a = this(a)), 8 & o)) return a;
      if ("object" == typeof a && a) {
        if (4 & o && a.__esModule) return a;
        if (16 & o && "function" == typeof a.then) return a;
      }
      var c = Object.create(null);
      d.r(c);
      var i = {};
      e = e || [null, n({}), n([]), n(n)];
      for (var t = 2 & o && a; "object" == typeof t && !~e.indexOf(t); t = n(t))
        Object.getOwnPropertyNames(t).forEach((e) => (i[e] = () => a[e]));
      return (i.default = () => a), d.d(c, i), c;
    }),
    (d.d = (a, e) => {
      for (var n in e)
        d.o(e, n) &&
          !d.o(a, n) &&
          Object.defineProperty(a, n, { enumerable: !0, get: e[n] });
    }),
    (d.f = {}),
    (d.e = (a) =>
      Promise.all(Object.keys(d.f).reduce((e, n) => (d.f[n](a, e), e), []))),
    (d.u = (a) =>
      "javascript/applications/community/" +
      {
        27: "localization/shared_japanese-json",
        113: "localization/main_romanian-json",
        131: "localization/shared_english-json",
        238: "communityawardsapp",
        301: "localization/main_russian-json",
        312: "communityhomeheader",
        400: "chunk~b1f9f17fd",
        508: "chunk~d2dd7ecf6",
        543: "libraries~9dbf41906",
        617: "localization/main_portuguese-json",
        755: "localization/shared_schinese-json",
        867: "localization/sales_hungarian-json",
        908: "qanda",
        960: "localization/sales_norwegian-json",
        961: "localization/sales_spanish-json",
        1133: "localization/main_bulgarian-json",
        1195: "localization/main_tchinese-json",
        1261: "localization/shared_norwegian-json",
        1311: "localization/main_greek-json",
        1546: "localization/sales_english-json",
        1579: "localization/shared_ukrainian-json",
        1649: "chunk~03410565e",
        1953: "localization/shared_finnish-json",
        2136: "events",
        2138: "localization/shared_thai-json",
        2235: "localization/sales_french-json",
        2329: "avatarcrop",
        2351: "localization/main_swedish-json",
        2373: "localization/sales_schinese-json",
        2449: "chunk~7a7b104fb",
        2468: "libraries~d2dd7ecf6",
        2557: "localization/main_ukrainian-json",
        2677: "chunk~3593b01ab",
        2723: "localization/sales_polish-json",
        2738: "localization/shared_turkish-json",
        2745: "localization/sales_ukrainian-json",
        2805: "chunk~4b330692b",
        2822: "localization/shared_greek-json",
        2832: "chunk~d3aa4b017",
        3007: "localization/sales_finnish-json",
        3038: "localization/main_french-json",
        3202: "localization/sales_vietnamese-json",
        3298: "localization/shared_brazilian-json",
        3352: "eventinternal",
        3499: "communityfaqs",
        3591: "localization/sales_bulgarian-json",
        3602: "localization/shared_dutch-json",
        3742: "chunk~c7a3fa389",
        3973: "chunk~4e3b43bb2",
        4097: "localization/shared_spanish-json",
        4183: "localization/shared_danish-json",
        4264: "libraries~7bb437d7f",
        4293: "localization/sales_german-json",
        4358: "localization/shared_sc_schinese-json",
        4445: "localization/shared_german-json",
        4469: "localization/shared_koreana-json",
        4487: "localization/shared_swedish-json",
        4513: "localization/shared_italian-json",
        4535: "login",
        4601: "broadcast",
        4729: "localization/shared_french-json",
        4819: "localization/sales_tchinese-json",
        4979: "localization/sales_italian-json",
        5012: "localization/main_italian-json",
        5253: "chunk~7bb437d7f",
        5277: "localization/main_latam-json",
        5279: "localization/shared_hungarian-json",
        5436: "broadcasts",
        5439: "localization/sales_koreana-json",
        5493: "localization/main_thai-json",
        5494: "localization/sales_czech-json",
        5503: "chunk~44d969a12",
        5757: "localization/main_norwegian-json",
        6091: "localization/main_koreana-json",
        6148: "libraries~4b330692b",
        6272: "conference",
        6403: "localization/shared_russian-json",
        6415: "localization/main_brazilian-json",
        6437: "libraries~215b3e016",
        6457: "localization/main_turkish-json",
        6656: "libraries~642602239",
        6658: "localization/sales_portuguese-json",
        6715: "localization/sales_sc_schinese-json",
        6844: "localization/shared_polish-json",
        6845: "profile",
        6932: "localization/sales_turkish-json",
        6962: "localization/main_dutch-json",
        7629: "localization/main_schinese-json",
        7660: "localization/shared_romanian-json",
        7769: "localization/main_german-json",
        7781: "localization/shared_bulgarian-json",
        7832: "localization/shared_arabic-json",
        7901: "localization/main_vietnamese-json",
        7924: "localization/sales_latam-json",
        7971: "localization/sales_greek-json",
        8085: "localization/shared_czech-json",
        8120: "chunk~8e45aed72",
        8274: "localization/main_hungarian-json",
        8282: "localization/main_czech-json",
        8291: "localization/main_polish-json",
        8427: "localization/main_finnish-json",
        8433: "localization/shared_vietnamese-json",
        8525: "localization/main_spanish-json",
        8592: "localization/main_danish-json",
        8647: "managefriends",
        8691: "libraries~9714d9815",
        8805: "localization/sales_russian-json",
        8919: "chunk~215b3e016",
        9167: "localization/sales_thai-json",
        9233: "localization/main_japanese-json",
        9316: "localization/sales_romanian-json",
        9348: "chunk~69438e232",
        9349: "eventeditor",
        9389: "localization/main_sc_schinese-json",
        9427: "chunk~642602239",
        9513: "localization/sales_brazilian-json",
        9547: "localization/shared_tchinese-json",
        9561: "localization/sales_danish-json",
        9665: "localization/main_english-json",
        9828: "localization/sales_dutch-json",
        9854: "localization/shared_portuguese-json",
        9888: "localization/sales_swedish-json",
        9920: "chunk~6b6cfcb8f",
        9951: "localization/shared_latam-json",
        9991: "localization/sales_japanese-json",
      }[a] +
      ".js?contenthash=" +
      {
        27: "e294753c1063a2897436",
        113: "06f386f9c1dd8faa408d",
        131: "7e15ad8d7b58660f9f58",
        238: "602fa14425f0a94b78d2",
        301: "12f450d035a104b2ee6b",
        312: "d30a7e458abdc44255ef",
        400: "c9957df531b9dd0506ef",
        508: "76008531e5796b18afd5",
        543: "7e04eee5a698b6b9ff11",
        617: "e48e48a728f6de19f58d",
        755: "399c94232eccddf36c9d",
        867: "483a5ffa3d48a12e4102",
        908: "a08074760d3b9e247377",
        960: "db6b7d71cd8e0a0b0a62",
        961: "76ce7b8da29e4dae7c60",
        1133: "cdb28c10e4d7465bf437",
        1195: "da537e51292c9e8f8c3a",
        1261: "af31a329066c1e1927d0",
        1311: "50a943821edc2ab54139",
        1546: "099d38b21e167e12c941",
        1579: "25fa1ef205269cf5bab6",
        1649: "9fac579e9d6367e3bbc4",
        1953: "14911f13ed48f1691bdc",
        2136: "c59799731b5808386f4d",
        2138: "532e17d416c1b0ac954f",
        2235: "90e6d363c1c5dbe87c6a",
        2329: "cd3c1b3a4d5d92ff9833",
        2351: "9e91f685343a66a61144",
        2373: "219dea55ba816e2e3bab",
        2449: "c98911557b87093dcd50",
        2468: "7b16ed9b4d04c09c06d9",
        2557: "ab67bf97b56ce3bfd255",
        2677: "0e674a7037aadf04f444",
        2723: "f04f80e62ecf82eb79fe",
        2738: "8bfcd38d1b0ecce2a513",
        2745: "0f741bceff38b7a5a7f4",
        2805: "1ef1ebb9772c53bea3b4",
        2822: "8b414214ca74b7c081bb",
        2832: "f8839d951e308f6691fe",
        3007: "16e3c2f0e40aab7d5e6e",
        3038: "7926c1048c444bef3920",
        3202: "0170c0d97cdac9f4fcf2",
        3298: "85b9883708665176291d",
        3352: "6bafba4930b19cf19738",
        3499: "f08ac03b9c833abf7479",
        3591: "ae25b34c95fe0c48f5db",
        3602: "3be63eca7a64747aaa36",
        3742: "b6e83ff0f1502132ce42",
        3973: "fa73d5b3915f9b917a3c",
        4097: "0b3803f489a6aa572006",
        4183: "26ce70ed583e31c53d27",
        4264: "493c1c579686b1ec3aa6",
        4293: "b0cb7d8bf4e6cb12dccd",
        4358: "40b3bb9f248f9ed15809",
        4445: "e34a7f81e857b2ff9e7c",
        4469: "4df7bf69962f18ad03a1",
        4487: "97ce5ae3a041d4a8e6b1",
        4513: "42ef780afd72013b65ca",
        4535: "1f23cbf49e2bf7fb8e0d",
        4601: "f1da307246b8617ffbae",
        4729: "6df3fd8d0ec8c6eb60ce",
        4819: "066fa817f9dd66765433",
        4979: "a7ae61002174e0aba4ae",
        5012: "18447fd4ef00407e4e8f",
        5253: "5189208ff051fe08cf77",
        5277: "ca435a7a8778e16cae48",
        5279: "c84026047954bf40d496",
        5436: "c6a1675af4c9245ece73",
        5439: "644848f55f3d62a0b051",
        5493: "ce529e82ced3c6340bfd",
        5494: "e7b4a834eabbbfaf6f45",
        5503: "3351e50e201cac4c34c1",
        5757: "086bf0c9739b5c2aa68d",
        6091: "dba89b9bbfe294b5655a",
        6148: "5aca2d35a443fd3058d9",
        6272: "5428b30d7a8beb80959e",
        6403: "b96e1bb2eaed2f5bfdf2",
        6415: "2eb8262366a6cd878f6e",
        6437: "caa49d3d01d07f13aeea",
        6457: "90e008dd43fdf311b36a",
        6656: "0feae8ebcbb7d0260166",
        6658: "2bb161a7f514579e0bf6",
        6715: "ab5337832d5eb8f1f322",
        6844: "7b368efe9cf9c9d906fb",
        6845: "f73d458ab6bbc46dcb1a",
        6932: "d00400162afd4667229e",
        6962: "fcb9b53b8ae4fa21372c",
        7629: "8d4e0c8063eb7617574f",
        7660: "0883400ae03b87b9e64a",
        7769: "4eee4349fc7e0ff56ec1",
        7781: "2ead811e5f7df77b9b62",
        7832: "6d3214c50ca68865f871",
        7901: "a1a3848c49e9daa2d008",
        7924: "1aab1db5c8ebad024e24",
        7971: "828521ab6809b843e7db",
        8085: "d444b75ed90bdedc6e33",
        8120: "a4dd7715b72f098ab3d8",
        8274: "d2a0c3cc355b6c759fe1",
        8282: "873399207690cc21e094",
        8291: "fbf5d18fdf2784b36b22",
        8427: "b84ed12277e7f9e801c2",
        8433: "6ff4fe2e6d2742aff4d8",
        8525: "f5ece0f4aaef5e220a61",
        8592: "e97da5816c860452e898",
        8647: "685f5b04d7debb628eb5",
        8691: "9422b45f35c587cbb992",
        8805: "2cc6b98228d17f24911c",
        8919: "798f53fa90c8686ad4b0",
        9167: "1c50385d2f95f44914fe",
        9233: "30c1c43d582f7052e0b6",
        9316: "25f66e9f88a11338e1eb",
        9348: "eb5d9b72423fd919fb89",
        9349: "a88600fbf96358fc1ddf",
        9389: "b9f9911550161883a3b5",
        9427: "9ce04e461c2faa739b6f",
        9513: "5b3be9c5c1b40a3a6d8b",
        9547: "42d627b205fc8f165ca2",
        9561: "e208c775bd41af5d87e4",
        9665: "6ae219a16ec580e20be9",
        9828: "2b5c750d205a24d42f33",
        9854: "c817dd144aa4141ef52a",
        9888: "180fd17bb19addc02daa",
        9920: "88f3b4ac5fa8aafa816f",
        9951: "3d156aa6511e67d3e5c3",
        9991: "2a90911c4b1e86a648f5",
      }[a]),
    (d.miniCssF = (a) =>
      "css/applications/community/" +
      {
        238: "communityawardsapp",
        312: "communityhomeheader",
        400: "chunk~b1f9f17fd",
        508: "chunk~d2dd7ecf6",
        908: "qanda",
        2136: "events",
        2329: "avatarcrop",
        2449: "chunk~7a7b104fb",
        3352: "eventinternal",
        3499: "communityfaqs",
        4535: "login",
        4601: "broadcast",
        5436: "broadcasts",
        6272: "conference",
        6845: "profile",
        8647: "managefriends",
        8919: "chunk~215b3e016",
        9348: "chunk~69438e232",
        9349: "eventeditor",
        9427: "chunk~642602239",
      }[a] +
      ".css?contenthash=" +
      {
        238: "82877e2cea30622a4345",
        312: "9e6bee6632888a265236",
        400: "d24a8703abc7daa67070",
        508: "98ce154d42f98aeaf91f",
        908: "c9867bbaa6fc24d1d0fc",
        2136: "7677775ce82ff87c079e",
        2329: "70358f02752594d6bf7b",
        2449: "daa7e074383347bf1c8d",
        3352: "f3838685918d3c88bdc3",
        3499: "ceabdd14fa2e8fac8cdf",
        4535: "120ef11d3786830c5571",
        4601: "5b02011896f2f5b3d01b",
        5436: "4be2a998a1425189712b",
        6272: "96937946e427750774e4",
        6845: "c97ddaebddd7c4860a46",
        8647: "413bbe35d505feb2a7be",
        8919: "10877c51486a56eec38c",
        9348: "c324699991d59e2004e3",
        9349: "f4977652404f75e5d337",
        9427: "d6298b52542f8cf9fdcd",
      }[a]),
    (d.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (a) {
        if ("object" == typeof window) return window;
      }
    })()),
    (d.o = (a, e) => Object.prototype.hasOwnProperty.call(a, e)),
    (o = {}),
    (c = "community:"),
    (d.l = (a, e, n, i) => {
      if (o[a]) o[a].push(e);
      else {
        var t, s;
        if (void 0 !== n)
          for (
            var l = document.getElementsByTagName("script"), r = 0;
            r < l.length;
            r++
          ) {
            var f = l[r];
            if (
              f.getAttribute("src") == a ||
              f.getAttribute("data-webpack") == c + n
            ) {
              t = f;
              break;
            }
          }
        t ||
          ((s = !0),
          ((t = document.createElement("script")).charset = "utf-8"),
          (t.timeout = 120),
          d.nc && t.setAttribute("nonce", d.nc),
          t.setAttribute("data-webpack", c + n),
          (t.src = a)),
          (o[a] = [e]);
        var b = (e, n) => {
            (t.onerror = t.onload = null), clearTimeout(h);
            var c = o[a];
            if (
              (delete o[a],
              t.parentNode && t.parentNode.removeChild(t),
              c && c.forEach((a) => a(n)),
              e)
            )
              return e(n);
          },
          h = setTimeout(
            b.bind(null, void 0, { type: "timeout", target: t }),
            12e4
          );
        (t.onerror = b.bind(null, t.onerror)),
          (t.onload = b.bind(null, t.onload)),
          s && document.head.appendChild(t);
      }
    }),
    (d.r = (a) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(a, "__esModule", { value: !0 });
    }),
    (d.nmd = (a) => ((a.paths = []), a.children || (a.children = []), a)),
    (() => {
      var a;
      d.g.importScripts && (a = d.g.location + "");
      var e = d.g.document;
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
        (d.p = a + "../../../");
    })(),
    (i = (a) =>
      new Promise((e, n) => {
        var o = d.miniCssF(a),
          c = d.p + o;
        if (
          ((a, e) => {
            for (
              var n = document.getElementsByTagName("link"), o = 0;
              o < n.length;
              o++
            ) {
              var c =
                (t = n[o]).getAttribute("data-href") || t.getAttribute("href");
              if ("stylesheet" === t.rel && (c === a || c === e)) return t;
            }
            var i = document.getElementsByTagName("style");
            for (o = 0; o < i.length; o++) {
              var t;
              if ((c = (t = i[o]).getAttribute("data-href")) === a || c === e)
                return t;
            }
          })(o, c)
        )
          return e();
        ((a, e, n, o) => {
          var c = document.createElement("link");
          (c.rel = "stylesheet"),
            (c.type = "text/css"),
            (c.onerror = c.onload =
              (i) => {
                if (((c.onerror = c.onload = null), "load" === i.type)) n();
                else {
                  var t = i && ("load" === i.type ? "missing" : i.type),
                    s = (i && i.target && i.target.href) || e,
                    l = new Error(
                      "Loading CSS chunk " + a + " failed.\n(" + s + ")"
                    );
                  (l.code = "CSS_CHUNK_LOAD_FAILED"),
                    (l.type = t),
                    (l.request = s),
                    c.parentNode.removeChild(c),
                    o(l);
                }
              }),
            (c.href = e),
            document.head.appendChild(c);
        })(a, c, e, n);
      })),
    (t = { 6700: 0 }),
    (d.f.miniCss = (a, e) => {
      t[a]
        ? e.push(t[a])
        : 0 !== t[a] &&
          {
            238: 1,
            312: 1,
            400: 1,
            508: 1,
            908: 1,
            2136: 1,
            2329: 1,
            2449: 1,
            3352: 1,
            3499: 1,
            4535: 1,
            4601: 1,
            5436: 1,
            6272: 1,
            6845: 1,
            8647: 1,
            8919: 1,
            9348: 1,
            9349: 1,
            9427: 1,
          }[a] &&
          e.push(
            (t[a] = i(a).then(
              () => {
                t[a] = 0;
              },
              (e) => {
                throw (delete t[a], e);
              }
            ))
          );
    }),
    (() => {
      var a = { 6700: 0 };
      (d.f.j = (e, n) => {
        var o = d.o(a, e) ? a[e] : void 0;
        if (0 !== o)
          if (o) n.push(o[2]);
          else if (/^(4601|6700)$/.test(e)) a[e] = 0;
          else {
            var c = new Promise((n, c) => (o = a[e] = [n, c]));
            n.push((o[2] = c));
            var i = d.p + d.u(e),
              t = new Error();
            d.l(
              i,
              (n) => {
                if (d.o(a, e) && (0 !== (o = a[e]) && (a[e] = void 0), o)) {
                  var c = n && ("load" === n.type ? "missing" : n.type),
                    i = n && n.target && n.target.src;
                  (t.message =
                    "Loading chunk " + e + " failed.\n(" + c + ": " + i + ")"),
                    (t.name = "ChunkLoadError"),
                    (t.type = c),
                    (t.request = i),
                    o[1](t);
                }
              },
              "chunk-" + e,
              e
            );
          }
      }),
        (d.O.j = (e) => 0 === a[e]);
      var e = (e, n) => {
          var o,
            c,
            [i, t, s] = n,
            l = 0;
          if (i.some((e) => 0 !== a[e])) {
            for (o in t) d.o(t, o) && (d.m[o] = t[o]);
            if (s) var r = s(d);
          }
          for (e && e(n); l < i.length; l++)
            (c = i[l]), d.o(a, c) && a[c] && a[c][0](), (a[c] = 0);
          return d.O(r);
        },
        n = (self.webpackChunkcommunity = self.webpackChunkcommunity || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();
