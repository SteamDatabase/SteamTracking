/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7884834";
(() => {
  "use strict";
  var a,
    e,
    n,
    o,
    c,
    i,
    d,
    s = {},
    t = {};
  function l(a) {
    var e = t[a];
    if (void 0 !== e) return e.exports;
    var n = (t[a] = { id: a, loaded: !1, exports: {} });
    return s[a].call(n.exports, n, n.exports, l), (n.loaded = !0), n.exports;
  }
  (l.m = s),
    (a = []),
    (l.O = (e, n, o, c) => {
      if (!n) {
        var i = 1 / 0;
        for (r = 0; r < a.length; r++) {
          for (var [n, o, c] = a[r], d = !0, s = 0; s < n.length; s++)
            (!1 & c || i >= c) && Object.keys(l.O).every((a) => l.O[a](n[s]))
              ? n.splice(s--, 1)
              : ((d = !1), c < i && (i = c));
          if (d) {
            a.splice(r--, 1);
            var t = o();
            void 0 !== t && (e = t);
          }
        }
        return e;
      }
      c = c || 0;
      for (var r = a.length; r > 0 && a[r - 1][2] > c; r--) a[r] = a[r - 1];
      a[r] = [n, o, c];
    }),
    (l.n = (a) => {
      var e = a && a.__esModule ? () => a.default : () => a;
      return l.d(e, { a: e }), e;
    }),
    (n = Object.getPrototypeOf
      ? (a) => Object.getPrototypeOf(a)
      : (a) => a.__proto__),
    (l.t = function (a, o) {
      if ((1 & o && (a = this(a)), 8 & o)) return a;
      if ("object" == typeof a && a) {
        if (4 & o && a.__esModule) return a;
        if (16 & o && "function" == typeof a.then) return a;
      }
      var c = Object.create(null);
      l.r(c);
      var i = {};
      e = e || [null, n({}), n([]), n(n)];
      for (var d = 2 & o && a; "object" == typeof d && !~e.indexOf(d); d = n(d))
        Object.getOwnPropertyNames(d).forEach((e) => (i[e] = () => a[e]));
      return (i.default = () => a), l.d(c, i), c;
    }),
    (l.d = (a, e) => {
      for (var n in e)
        l.o(e, n) &&
          !l.o(a, n) &&
          Object.defineProperty(a, n, { enumerable: !0, get: e[n] });
    }),
    (l.f = {}),
    (l.e = (a) =>
      Promise.all(Object.keys(l.f).reduce((e, n) => (l.f[n](a, e), e), []))),
    (l.u = (a) =>
      "javascript/applications/community/" +
      {
        27: "localization/shared_japanese-json",
        113: "localization/main_romanian-json",
        131: "localization/shared_english-json",
        238: "communityawardsapp",
        301: "localization/main_russian-json",
        312: "communityhomeheader",
        400: "chunk~b1f9f17fd",
        483: "libraries~c18a43282",
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
        1338: "chunk~87d496b58",
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
        2530: "chunk~f036ce556",
        2557: "localization/main_ukrainian-json",
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
        3903: "games",
        4097: "localization/shared_spanish-json",
        4183: "localization/shared_danish-json",
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
        5119: "chunk~1935d6e28",
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
        6457: "localization/main_turkish-json",
        6588: "libraries~f036ce556",
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
        7942: "chunk~5a92743e8",
        7948: "libraries~9e353dc2d",
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
        8931: "chunk~c18a43282",
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
        9949: "chunk~9e353dc2d",
        9951: "localization/shared_latam-json",
        9991: "localization/sales_japanese-json",
      }[a] +
      ".js?contenthash=" +
      {
        27: "715fcc6fb0fa97307c27",
        113: "b8740203651d587290e5",
        131: "bf7b3baa7c8ddc37ffb7",
        238: "0be953ee6910fafa9646",
        301: "c53c74e595a3c0c92532",
        312: "c3edce8c38c142d099ac",
        400: "85ec5b4411c0063962fc",
        483: "758dcd901b14baa37574",
        508: "94d7d1c1c50e3bc49a17",
        543: "3caa3bd62008d7e9060a",
        617: "8461faee2de863c4ddd2",
        755: "fd457699a4233e761dc1",
        867: "00f14efc6eada7a40c34",
        908: "f8472009a6a6d4e710c6",
        960: "101bc280af5c9908daa2",
        961: "6793ecf887b8597fdacb",
        1133: "4a2f1f44bf2fb6289327",
        1195: "eb40ea266e10a854727c",
        1261: "bbc1d1980139a88f41b9",
        1311: "1f4b3b61f62cbc5fd8ec",
        1338: "bb37a41b176a18d51f30",
        1546: "8b2ef12f587d128c8424",
        1579: "834f32107698525ac119",
        1649: "987999c4d023a86e344f",
        1953: "412dd1f3c64da32368e9",
        2136: "d5901c0ef7e452f760de",
        2138: "13da5e3dffdbb84ec3e5",
        2235: "7cda34a98b9037c43baf",
        2329: "23fc862847c4ff48046a",
        2351: "b3f7ba5e1edf39e486e0",
        2373: "2c7b9966da1aeeb53bd3",
        2449: "80f7c3657f0b711738d0",
        2468: "47af5272d1ad70d931fe",
        2530: "7d7a3f2de721b6757714",
        2557: "e0bf622cf8351ac4bf0a",
        2723: "38523495650a5bd428bf",
        2738: "7d541e23e76d4762b0c3",
        2745: "1e622074b2882afe7ab6",
        2805: "ad0909cfc6d3430570f1",
        2822: "8393a0656a6c4fe056d4",
        2832: "0d4a4f6e49227f8d7a48",
        3007: "acc88c39a0d3f4f9d93e",
        3038: "1f044460f7bf3480b7da",
        3202: "0ad5cf33563130fe8a17",
        3298: "bcfdf96063163bbdd2f6",
        3352: "c123b1209a9ddbfb4da0",
        3499: "8df48bb7d3f2d2005c9d",
        3591: "e7d5c277a5493bfe6649",
        3602: "8e469136791d228ef2b4",
        3742: "7f0869940e92dec080fa",
        3903: "717478410cd5c880e5b0",
        4097: "b4e4ec86c0be91636792",
        4183: "6e67c565d702dcd0a625",
        4293: "5b99ae4ac2bc9d6a39dc",
        4358: "f112abaf0be5480d74d4",
        4445: "90133668bb7c5283a1f8",
        4469: "6a2b24644d2ef10f76b1",
        4487: "15ef4f706eae0dd21616",
        4513: "9fc8d5c0408917d28f86",
        4535: "c9b2340303dee7ff4e12",
        4601: "71fdcaf50bb786195977",
        4729: "5d9fbb0313bce51f4c67",
        4819: "9b86ad76c5f1a960327c",
        4979: "e6ed3301386131feb79f",
        5012: "8f43dc01f727906956f9",
        5119: "21491fa1d58c5bdfeac0",
        5277: "275c093ca4f885a23529",
        5279: "71e38635a7008551dc4e",
        5436: "496b5b4d7cec5c4179f4",
        5439: "104a5e1da52c10713193",
        5493: "dce7c0734f8cb84a5352",
        5494: "ea16e2717a8f4561532c",
        5503: "e5f496acd89165c3c8a0",
        5757: "c90d57253e084f698b8d",
        6091: "0e062262e60e2ce3c8df",
        6148: "1ca0a59911794d934b2b",
        6272: "7c3a92aae9e87eb6c944",
        6403: "28e2d42a8915da841ef2",
        6415: "a6cde4349016a63b499b",
        6457: "2338fc33a49add524274",
        6588: "a5373e3d0e90ce9f0ed8",
        6658: "7fc816c5ae771bdd6286",
        6715: "460a9eccd75b35505b88",
        6844: "1542d2020a50fad5f45f",
        6845: "b5009d26930cbfa5bee6",
        6932: "ab534a0dcfb466ea5ca6",
        6962: "5ea69bad502afcdd70e1",
        7629: "ca54123460ebcfd695f3",
        7660: "f71be8d1629405941e60",
        7769: "3ecc42768665d4f91105",
        7781: "f599c4fe2ca5444179a0",
        7832: "805691d315505778e736",
        7901: "266324d78a18e48a6989",
        7924: "e9375096269081ba4f8a",
        7942: "e0bf547dd411a9a127d9",
        7948: "4701980ccbf99473c130",
        7971: "6390af055619e6d1ab1d",
        8085: "5bd2ada74fcf98546b2b",
        8120: "c63a29d2ef15b7b1b177",
        8274: "91b278d1ae6d3536fee8",
        8282: "d666f03146d0792b3510",
        8291: "c27c96dbd6f980550514",
        8427: "17df9c56a163c9edb455",
        8433: "20786390418052f003aa",
        8525: "52b72cc2c0ff66a198df",
        8592: "909eaecb775963a594d5",
        8647: "9f87e60cbc3a8e4629f8",
        8691: "5f8c6308e15a113f3e35",
        8805: "df81880a43af63870ac3",
        8931: "bb4f62931d6224f37e96",
        9167: "7cd31891e9613189ff2c",
        9233: "bbf04165d89ff66acafa",
        9316: "3fff9a7ee9e69a05807d",
        9348: "a7e34035142a7c33c02d",
        9349: "02fcfdc4e7d4e833f880",
        9389: "90261ff15e7517f13445",
        9427: "bda2ee7a30ee79e8c737",
        9513: "7de3c97aac224f775285",
        9547: "d1346e4f1061efaba02e",
        9561: "0463b2092a1ece985d41",
        9665: "b5da1122675226771786",
        9828: "398492dfe15e5ad4c29a",
        9854: "b1d9516a15c3d8f00f77",
        9888: "abbdf2f9cd2b24b89efc",
        9949: "ab7b24bcc9b8a69debd3",
        9951: "1a27d69716879c7e54b2",
        9991: "d565cbf4437aef3f4048",
      }[a]),
    (l.miniCssF = (a) =>
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
        2530: "chunk~f036ce556",
        3352: "eventinternal",
        3499: "communityfaqs",
        3903: "games",
        4535: "login",
        4601: "broadcast",
        5436: "broadcasts",
        6272: "conference",
        6845: "profile",
        8647: "managefriends",
        8931: "chunk~c18a43282",
        9348: "chunk~69438e232",
        9349: "eventeditor",
        9949: "chunk~9e353dc2d",
      }[a] +
      ".css?contenthash=" +
      {
        238: "79836382da32727b53de",
        312: "9e6bee6632888a265236",
        400: "ff7cb9cdd3e74b28173d",
        508: "88dc8a41d79ec8513f8a",
        908: "62ba4449135e3d029a52",
        2136: "1769f681321895bfc0bd",
        2329: "a969564f4cdabf0c473e",
        2449: "d84215f3c534ffcc83c6",
        2530: "47a64db0680bcf0e5247",
        3352: "f3838685918d3c88bdc3",
        3499: "f66814af59f83abee010",
        3903: "bd973ede1bbe474d2b52",
        4535: "120ef11d3786830c5571",
        4601: "1504f12b9d914fea5e36",
        5436: "6889a14aa7d56b2157f2",
        6272: "dc19848d555f88d53c2e",
        6845: "83d69e94abb2a80bfc95",
        8647: "2aa199fdf547121332be",
        8931: "20a3cbda692f1f213f33",
        9348: "9de00a81dccfb9f5e1bf",
        9349: "f4977652404f75e5d337",
        9949: "8c558155f0ba953dc465",
      }[a]),
    (l.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (a) {
        if ("object" == typeof window) return window;
      }
    })()),
    (l.o = (a, e) => Object.prototype.hasOwnProperty.call(a, e)),
    (o = {}),
    (c = "community:"),
    (l.l = (a, e, n, i) => {
      if (o[a]) o[a].push(e);
      else {
        var d, s;
        if (void 0 !== n)
          for (
            var t = document.getElementsByTagName("script"), r = 0;
            r < t.length;
            r++
          ) {
            var f = t[r];
            if (
              f.getAttribute("src") == a ||
              f.getAttribute("data-webpack") == c + n
            ) {
              d = f;
              break;
            }
          }
        d ||
          ((s = !0),
          ((d = document.createElement("script")).charset = "utf-8"),
          (d.timeout = 120),
          l.nc && d.setAttribute("nonce", l.nc),
          d.setAttribute("data-webpack", c + n),
          (d.src = a)),
          (o[a] = [e]);
        var b = (e, n) => {
            (d.onerror = d.onload = null), clearTimeout(h);
            var c = o[a];
            if (
              (delete o[a],
              d.parentNode && d.parentNode.removeChild(d),
              c && c.forEach((a) => a(n)),
              e)
            )
              return e(n);
          },
          h = setTimeout(
            b.bind(null, void 0, { type: "timeout", target: d }),
            12e4
          );
        (d.onerror = b.bind(null, d.onerror)),
          (d.onload = b.bind(null, d.onload)),
          s && document.head.appendChild(d);
      }
    }),
    (l.r = (a) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(a, "__esModule", { value: !0 });
    }),
    (l.nmd = (a) => ((a.paths = []), a.children || (a.children = []), a)),
    (() => {
      var a;
      l.g.importScripts && (a = l.g.location + "");
      var e = l.g.document;
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
        (l.p = a + "../../../");
    })(),
    (i = (a) =>
      new Promise((e, n) => {
        var o = l.miniCssF(a),
          c = l.p + o;
        if (
          ((a, e) => {
            for (
              var n = document.getElementsByTagName("link"), o = 0;
              o < n.length;
              o++
            ) {
              var c =
                (d = n[o]).getAttribute("data-href") || d.getAttribute("href");
              if ("stylesheet" === d.rel && (c === a || c === e)) return d;
            }
            var i = document.getElementsByTagName("style");
            for (o = 0; o < i.length; o++) {
              var d;
              if ((c = (d = i[o]).getAttribute("data-href")) === a || c === e)
                return d;
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
                  var d = i && ("load" === i.type ? "missing" : i.type),
                    s = (i && i.target && i.target.href) || e,
                    t = new Error(
                      "Loading CSS chunk " + a + " failed.\n(" + s + ")"
                    );
                  (t.code = "CSS_CHUNK_LOAD_FAILED"),
                    (t.type = d),
                    (t.request = s),
                    c.parentNode.removeChild(c),
                    o(t);
                }
              }),
            (c.href = e),
            document.head.appendChild(c);
        })(a, c, e, n);
      })),
    (d = { 6700: 0 }),
    (l.f.miniCss = (a, e) => {
      d[a]
        ? e.push(d[a])
        : 0 !== d[a] &&
          {
            238: 1,
            312: 1,
            400: 1,
            508: 1,
            908: 1,
            2136: 1,
            2329: 1,
            2449: 1,
            2530: 1,
            3352: 1,
            3499: 1,
            3903: 1,
            4535: 1,
            4601: 1,
            5436: 1,
            6272: 1,
            6845: 1,
            8647: 1,
            8931: 1,
            9348: 1,
            9349: 1,
            9949: 1,
          }[a] &&
          e.push(
            (d[a] = i(a).then(
              () => {
                d[a] = 0;
              },
              (e) => {
                throw (delete d[a], e);
              }
            ))
          );
    }),
    (() => {
      var a = { 6700: 0 };
      (l.f.j = (e, n) => {
        var o = l.o(a, e) ? a[e] : void 0;
        if (0 !== o)
          if (o) n.push(o[2]);
          else if (6700 != e) {
            var c = new Promise((n, c) => (o = a[e] = [n, c]));
            n.push((o[2] = c));
            var i = l.p + l.u(e),
              d = new Error();
            l.l(
              i,
              (n) => {
                if (l.o(a, e) && (0 !== (o = a[e]) && (a[e] = void 0), o)) {
                  var c = n && ("load" === n.type ? "missing" : n.type),
                    i = n && n.target && n.target.src;
                  (d.message =
                    "Loading chunk " + e + " failed.\n(" + c + ": " + i + ")"),
                    (d.name = "ChunkLoadError"),
                    (d.type = c),
                    (d.request = i),
                    o[1](d);
                }
              },
              "chunk-" + e,
              e
            );
          } else a[e] = 0;
      }),
        (l.O.j = (e) => 0 === a[e]);
      var e = (e, n) => {
          var o,
            c,
            [i, d, s] = n,
            t = 0;
          if (i.some((e) => 0 !== a[e])) {
            for (o in d) l.o(d, o) && (l.m[o] = d[o]);
            if (s) var r = s(l);
          }
          for (e && e(n); t < i.length; t++)
            (c = i[t]), l.o(a, c) && a[c] && a[c][0](), (a[c] = 0);
          return l.O(r);
        },
        n = (self.webpackChunkcommunity = self.webpackChunkcommunity || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();
