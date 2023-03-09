/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7904508";
(() => {
  "use strict";
  var a,
    e,
    n,
    o,
    c,
    i,
    s,
    t = {},
    l = {};
  function d(a) {
    var e = l[a];
    if (void 0 !== e) return e.exports;
    var n = (l[a] = { id: a, loaded: !1, exports: {} });
    return t[a].call(n.exports, n, n.exports, d), (n.loaded = !0), n.exports;
  }
  (d.m = t),
    (a = []),
    (d.O = (e, n, o, c) => {
      if (!n) {
        var i = 1 / 0;
        for (r = 0; r < a.length; r++) {
          for (var [n, o, c] = a[r], s = !0, t = 0; t < n.length; t++)
            (!1 & c || i >= c) && Object.keys(d.O).every((a) => d.O[a](n[t]))
              ? n.splice(t--, 1)
              : ((s = !1), c < i && (i = c));
          if (s) {
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
      for (var s = 2 & o && a; "object" == typeof s && !~e.indexOf(s); s = n(s))
        Object.getOwnPropertyNames(s).forEach((e) => (i[e] = () => a[e]));
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
        6838: "gamenotes",
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
        8657: "chunk~c5da24a27",
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
        27: "7fe7a74777f722a820c2",
        113: "b41e7fca51471de46b38",
        131: "d971d1ba319fb6c30940",
        238: "0be953ee6910fafa9646",
        301: "639f13501ae353dd2a9c",
        312: "c3edce8c38c142d099ac",
        400: "6671eebdf62f3188ef74",
        483: "758dcd901b14baa37574",
        508: "59acee0b721931340232",
        543: "3caa3bd62008d7e9060a",
        617: "7f47db10ac806d4d8dd4",
        755: "e2d2a174268d8cf8a81b",
        867: "00f14efc6eada7a40c34",
        908: "f8472009a6a6d4e710c6",
        960: "101bc280af5c9908daa2",
        961: "6793ecf887b8597fdacb",
        1133: "e25d061db796f61d64f7",
        1195: "eae11a27d2961ce4c8da",
        1261: "35614125860e625b0ad6",
        1311: "7823ce3bb5b94b059b4e",
        1338: "d62f7cefe1b558b01df6",
        1546: "8b2ef12f587d128c8424",
        1579: "fb143e0b9b807eb1844d",
        1649: "987999c4d023a86e344f",
        1953: "43442880105d5d472da9",
        2136: "d5901c0ef7e452f760de",
        2138: "d3ef3b775550a8c56d1c",
        2235: "7cda34a98b9037c43baf",
        2329: "23fc862847c4ff48046a",
        2351: "c46aa489de4617ee8736",
        2373: "2c7b9966da1aeeb53bd3",
        2449: "80f7c3657f0b711738d0",
        2468: "47af5272d1ad70d931fe",
        2530: "be90c33a3e11395ec01e",
        2557: "9dc32400cb44cd5fd70b",
        2723: "38523495650a5bd428bf",
        2738: "7c4bb732222a38a8738d",
        2745: "1e622074b2882afe7ab6",
        2805: "ad0909cfc6d3430570f1",
        2822: "b13df60387c4a9cfff25",
        2832: "0d4a4f6e49227f8d7a48",
        3007: "acc88c39a0d3f4f9d93e",
        3038: "52d64e0f598ffd79c0cc",
        3202: "0ad5cf33563130fe8a17",
        3298: "689d24a6e9650ce0a07d",
        3352: "c123b1209a9ddbfb4da0",
        3499: "8df48bb7d3f2d2005c9d",
        3591: "e7d5c277a5493bfe6649",
        3602: "58e875f6a1e9be55b668",
        3742: "7f0869940e92dec080fa",
        3903: "b0cff9c421310fdd75db",
        4097: "25970676730d752fc4a7",
        4183: "e2080d7680cba887d699",
        4293: "5b99ae4ac2bc9d6a39dc",
        4358: "f112abaf0be5480d74d4",
        4445: "2a519983960cc200ba4a",
        4469: "916c7e561d2bdb5e87d0",
        4487: "b2ce2c931e631a4b4a44",
        4513: "a535e8f41372596dc247",
        4535: "c9b2340303dee7ff4e12",
        4601: "71fdcaf50bb786195977",
        4729: "ee8175c8f14cb63aedda",
        4819: "9b86ad76c5f1a960327c",
        4979: "e6ed3301386131feb79f",
        5012: "445cab56236b3b30525a",
        5119: "21491fa1d58c5bdfeac0",
        5277: "65922d658ad1259adb06",
        5279: "fb5fc5567c7086385ff0",
        5436: "496b5b4d7cec5c4179f4",
        5439: "104a5e1da52c10713193",
        5493: "6258557bd45605bf1ae4",
        5494: "ea16e2717a8f4561532c",
        5503: "e5f496acd89165c3c8a0",
        5757: "7b7f4f624849cb859582",
        6091: "7548af7a6a4070d7aac8",
        6148: "1ca0a59911794d934b2b",
        6272: "7c3a92aae9e87eb6c944",
        6403: "9107765167cf06f06e0a",
        6415: "001d1a41a0ec15e5a5cf",
        6457: "2253ef05b746e7636597",
        6588: "a5373e3d0e90ce9f0ed8",
        6658: "7fc816c5ae771bdd6286",
        6715: "460a9eccd75b35505b88",
        6838: "bbd1f48fada7c9759e50",
        6844: "3b08b1ef707e1ffb7124",
        6845: "b5009d26930cbfa5bee6",
        6932: "ab534a0dcfb466ea5ca6",
        6962: "837ce2aad30625b23808",
        7629: "2fd3082f0fdfd4a9eba0",
        7660: "33617387e5d6d94eca75",
        7769: "12842059a3629211c321",
        7781: "1b443b266d9594224eca",
        7832: "805691d315505778e736",
        7901: "e504ece95dafb4bce94a",
        7924: "e9375096269081ba4f8a",
        7942: "e0bf547dd411a9a127d9",
        7948: "4701980ccbf99473c130",
        7971: "c1fced5bd39f152ad934",
        8085: "00b9897dbdd8e4046478",
        8120: "f9bd1e7f6b1294eb9f8e",
        8274: "d24f68b657141afbb44b",
        8282: "b2c8575589810461ee31",
        8291: "dc397a7ca810cd220272",
        8427: "3cf55c4a1bafdc34a773",
        8433: "ce91cb635cc72f33c25f",
        8525: "530323c6564ddf2671b5",
        8592: "d3c7115604b46d6d00e9",
        8647: "9f87e60cbc3a8e4629f8",
        8657: "6830340a80826c0bc7b1",
        8691: "5f8c6308e15a113f3e35",
        8805: "df81880a43af63870ac3",
        8931: "a66b68c66bdfb1b56cfc",
        9167: "7cd31891e9613189ff2c",
        9233: "d0c210e0d25f18d905f6",
        9316: "3fff9a7ee9e69a05807d",
        9348: "0db16ff4f844dd1080b5",
        9349: "b1f77fa4d0c256332f90",
        9389: "90261ff15e7517f13445",
        9427: "a5277e8f20ac6a04ba67",
        9513: "7de3c97aac224f775285",
        9547: "74ce9728343bf585659f",
        9561: "0463b2092a1ece985d41",
        9665: "c82309e1933b15295957",
        9828: "398492dfe15e5ad4c29a",
        9854: "1362f19317c822bdb8a4",
        9888: "abbdf2f9cd2b24b89efc",
        9949: "ab7b24bcc9b8a69debd3",
        9951: "1a78ab2c00260b3999a8",
        9991: "d565cbf4437aef3f4048",
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
        2530: "chunk~f036ce556",
        3352: "eventinternal",
        3499: "communityfaqs",
        3903: "games",
        4535: "login",
        4601: "broadcast",
        5436: "broadcasts",
        6272: "conference",
        6838: "gamenotes",
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
        508: "6190a94458d2a86f1191",
        908: "62ba4449135e3d029a52",
        2136: "1769f681321895bfc0bd",
        2329: "a969564f4cdabf0c473e",
        2449: "d84215f3c534ffcc83c6",
        2530: "47a64db0680bcf0e5247",
        3352: "f3838685918d3c88bdc3",
        3499: "f66814af59f83abee010",
        3903: "68945756789eda3362b5",
        4535: "120ef11d3786830c5571",
        4601: "1504f12b9d914fea5e36",
        5436: "4304b31ea15c6e00f429",
        6272: "dc19848d555f88d53c2e",
        6838: "b05b93839dead2eb8852",
        6845: "83d69e94abb2a80bfc95",
        8647: "2aa199fdf547121332be",
        8931: "6ef975c320fb9f07802f",
        9348: "9de00a81dccfb9f5e1bf",
        9349: "f4977652404f75e5d337",
        9949: "8c558155f0ba953dc465",
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
        var s, t;
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
              s = f;
              break;
            }
          }
        s ||
          ((t = !0),
          ((s = document.createElement("script")).charset = "utf-8"),
          (s.timeout = 120),
          d.nc && s.setAttribute("nonce", d.nc),
          s.setAttribute("data-webpack", c + n),
          (s.src = a)),
          (o[a] = [e]);
        var b = (e, n) => {
            (s.onerror = s.onload = null), clearTimeout(h);
            var c = o[a];
            if (
              (delete o[a],
              s.parentNode && s.parentNode.removeChild(s),
              c && c.forEach((a) => a(n)),
              e)
            )
              return e(n);
          },
          h = setTimeout(
            b.bind(null, void 0, { type: "timeout", target: s }),
            12e4
          );
        (s.onerror = b.bind(null, s.onerror)),
          (s.onload = b.bind(null, s.onload)),
          t && document.head.appendChild(s);
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
                (s = n[o]).getAttribute("data-href") || s.getAttribute("href");
              if ("stylesheet" === s.rel && (c === a || c === e)) return s;
            }
            var i = document.getElementsByTagName("style");
            for (o = 0; o < i.length; o++) {
              var s;
              if ((c = (s = i[o]).getAttribute("data-href")) === a || c === e)
                return s;
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
                  var s = i && ("load" === i.type ? "missing" : i.type),
                    t = (i && i.target && i.target.href) || e,
                    l = new Error(
                      "Loading CSS chunk " + a + " failed.\n(" + t + ")"
                    );
                  (l.code = "CSS_CHUNK_LOAD_FAILED"),
                    (l.type = s),
                    (l.request = t),
                    c.parentNode.removeChild(c),
                    o(l);
                }
              }),
            (c.href = e),
            document.head.appendChild(c);
        })(a, c, e, n);
      })),
    (s = { 6700: 0 }),
    (d.f.miniCss = (a, e) => {
      s[a]
        ? e.push(s[a])
        : 0 !== s[a] &&
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
            6838: 1,
            6845: 1,
            8647: 1,
            8931: 1,
            9348: 1,
            9349: 1,
            9949: 1,
          }[a] &&
          e.push(
            (s[a] = i(a).then(
              () => {
                s[a] = 0;
              },
              (e) => {
                throw (delete s[a], e);
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
          else if (6700 != e) {
            var c = new Promise((n, c) => (o = a[e] = [n, c]));
            n.push((o[2] = c));
            var i = d.p + d.u(e),
              s = new Error();
            d.l(
              i,
              (n) => {
                if (d.o(a, e) && (0 !== (o = a[e]) && (a[e] = void 0), o)) {
                  var c = n && ("load" === n.type ? "missing" : n.type),
                    i = n && n.target && n.target.src;
                  (s.message =
                    "Loading chunk " + e + " failed.\n(" + c + ": " + i + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = c),
                    (s.request = i),
                    o[1](s);
                }
              },
              "chunk-" + e,
              e
            );
          } else a[e] = 0;
      }),
        (d.O.j = (e) => 0 === a[e]);
      var e = (e, n) => {
          var o,
            c,
            [i, s, t] = n,
            l = 0;
          if (i.some((e) => 0 !== a[e])) {
            for (o in s) d.o(s, o) && (d.m[o] = s[o]);
            if (t) var r = t(d);
          }
          for (e && e(n); l < i.length; l++)
            (c = i[l]), d.o(a, c) && a[c] && a[c][0](), (a[c] = 0);
          return d.O(r);
        },
        n = (self.webpackChunkcommunity = self.webpackChunkcommunity || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();
