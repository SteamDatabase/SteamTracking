/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8022609";
(() => {
  "use strict";
  var a,
    e,
    n,
    c,
    o,
    i,
    s,
    t = {},
    d = {};
  function l(a) {
    var e = d[a];
    if (void 0 !== e) return e.exports;
    var n = (d[a] = { id: a, loaded: !1, exports: {} });
    return t[a].call(n.exports, n, n.exports, l), (n.loaded = !0), n.exports;
  }
  (l.m = t),
    (a = []),
    (l.O = (e, n, c, o) => {
      if (!n) {
        var i = 1 / 0;
        for (r = 0; r < a.length; r++) {
          for (var [n, c, o] = a[r], s = !0, t = 0; t < n.length; t++)
            (!1 & o || i >= o) && Object.keys(l.O).every((a) => l.O[a](n[t]))
              ? n.splice(t--, 1)
              : ((s = !1), o < i && (i = o));
          if (s) {
            a.splice(r--, 1);
            var d = c();
            void 0 !== d && (e = d);
          }
        }
        return e;
      }
      o = o || 0;
      for (var r = a.length; r > 0 && a[r - 1][2] > o; r--) a[r] = a[r - 1];
      a[r] = [n, c, o];
    }),
    (l.n = (a) => {
      var e = a && a.__esModule ? () => a.default : () => a;
      return l.d(e, { a: e }), e;
    }),
    (n = Object.getPrototypeOf
      ? (a) => Object.getPrototypeOf(a)
      : (a) => a.__proto__),
    (l.t = function (a, c) {
      if ((1 & c && (a = this(a)), 8 & c)) return a;
      if ("object" == typeof a && a) {
        if (4 & c && a.__esModule) return a;
        if (16 & c && "function" == typeof a.then) return a;
      }
      var o = Object.create(null);
      l.r(o);
      var i = {};
      e = e || [null, n({}), n([]), n(n)];
      for (var s = 2 & c && a; "object" == typeof s && !~e.indexOf(s); s = n(s))
        Object.getOwnPropertyNames(s).forEach((e) => (i[e] = () => a[e]));
      return (i.default = () => a), l.d(o, i), o;
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
        1546: "localization/sales_english-json",
        1579: "localization/shared_ukrainian-json",
        1649: "chunk~03410565e",
        1909: "notifications",
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
        5166: "localization/sales_russian-json",
        5277: "localization/main_latam-json",
        5279: "localization/shared_hungarian-json",
        5436: "broadcasts",
        5439: "localization/sales_koreana-json",
        5493: "localization/main_thai-json",
        5494: "localization/sales_czech-json",
        5503: "chunk~44d969a12",
        5663: "chunk~613f0c47d",
        5757: "localization/main_norwegian-json",
        6091: "localization/main_koreana-json",
        6148: "libraries~4b330692b",
        6272: "conference",
        6403: "localization/shared_russian-json",
        6415: "localization/main_brazilian-json",
        6457: "localization/main_turkish-json",
        6576: "chunk~c314b232b",
        6588: "libraries~f036ce556",
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
        8805: "chunk~b758ffd8d",
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
        27: "b6d0e119b7af3fc76c9b",
        113: "dd91b3debc8cb02673be",
        131: "8998eb98aa316eb6ae07",
        238: "36a2e9ddf46d6dbd9913",
        301: "5db4741b3fb2b05c3783",
        312: "8c619bc0ba44b5a148ea",
        400: "61e3fd4d9f6cf68e6894",
        483: "758dcd901b14baa37574",
        508: "036ba1b4e9d57269a226",
        543: "92596e2ccfaa7bc641ca",
        617: "07af91021de6196c16f8",
        755: "916360fb222269d1fe6a",
        867: "00f14efc6eada7a40c34",
        908: "4282ff3baeba96c46bf6",
        960: "101bc280af5c9908daa2",
        961: "6793ecf887b8597fdacb",
        1133: "c8666fea45d34bb1fec2",
        1195: "506f44603ad77ab1558d",
        1261: "1fc6d2ca07416b162721",
        1311: "69f834b0723e4b88d7ed",
        1546: "8b2ef12f587d128c8424",
        1579: "2656705c0fd2e8b73a98",
        1649: "fc310fc47d6eabad3f2a",
        1909: "1ea3cc718d823e55566f",
        1953: "e2bee393bcb118d2c0ee",
        2136: "3199e86f5c07ad1bbb69",
        2138: "e736c06a5b36721f6776",
        2235: "7cda34a98b9037c43baf",
        2329: "23fc862847c4ff48046a",
        2351: "ef646afa34926a39dbc8",
        2373: "2c7b9966da1aeeb53bd3",
        2449: "e1d70ffbfe86f6a3561b",
        2468: "13ae22e11baae0762a7d",
        2530: "cf800709fc347c4d9aeb",
        2557: "988f9458c54e503bc22f",
        2723: "38523495650a5bd428bf",
        2738: "4d5df02f16478249d7ac",
        2745: "1e622074b2882afe7ab6",
        2805: "0d19f82ac897d1a8b02f",
        2822: "0def58deafb49b10b5e7",
        2832: "e0279a9c6b8158da3716",
        3007: "acc88c39a0d3f4f9d93e",
        3038: "d2d6787f92b1b3da0bb9",
        3202: "0ad5cf33563130fe8a17",
        3298: "864683a6bf859da36244",
        3352: "090812f8529812f3d59c",
        3499: "6504ef093ecb7ad13723",
        3591: "e7d5c277a5493bfe6649",
        3602: "7c0f8474538f175677f5",
        3742: "7f0869940e92dec080fa",
        3903: "a8bfb25e7172391e6e36",
        4097: "e5c25c1b8b63fbd8f3c7",
        4183: "a826d8ed0caa83caafef",
        4293: "5b99ae4ac2bc9d6a39dc",
        4358: "8e6328abb246884f120f",
        4445: "3dfb4fda4b737cb30e2f",
        4469: "058340be3ee517285c44",
        4487: "9c0f9e4bc639a8a224e3",
        4513: "269a2644de18c7e6b486",
        4535: "c9b2340303dee7ff4e12",
        4601: "fd56322a87a3332ef17a",
        4729: "7efec665e2035a4d1348",
        4819: "9b86ad76c5f1a960327c",
        4979: "e6ed3301386131feb79f",
        5012: "5f1e7c4ec191d4d6e9fc",
        5119: "2e78de21cf0bd3730f42",
        5166: "673cc24f94a5a759752e",
        5277: "656ceb41de3fc29d429f",
        5279: "c54d546851d8cb4f982e",
        5436: "a8da5ed40e2e176a9d8e",
        5439: "104a5e1da52c10713193",
        5493: "7790716ab087d8670e93",
        5494: "ea16e2717a8f4561532c",
        5503: "2aae0edaa201cdbdd715",
        5663: "0889891f3168b6888191",
        5757: "c1b175fd34759f8d7734",
        6091: "83b3a62da39942fce56f",
        6148: "1ca0a59911794d934b2b",
        6272: "27dbae14dfe296bcb0c5",
        6403: "ebe5037b0f3c47357ba1",
        6415: "f2dcdfc0cc4637af7b5e",
        6457: "4c912ff65742514271d9",
        6576: "fb6b3ef1b3968c6cb84e",
        6588: "a5373e3d0e90ce9f0ed8",
        6656: "0620cc0db36da685d691",
        6658: "7fc816c5ae771bdd6286",
        6715: "5496f0a3caa1083a371b",
        6844: "2a9590a55522e48b2c20",
        6845: "a7f3084b60399c62467f",
        6932: "ab534a0dcfb466ea5ca6",
        6962: "1f1d15c56284df280253",
        7629: "ab2705c24cb993c41de8",
        7660: "04826ec06d6cb33cd9c5",
        7769: "3f38e2725e5874968f8c",
        7781: "6a2ccb95ae99726ab0f6",
        7832: "805691d315505778e736",
        7901: "2dd32c8afe59aec19d5b",
        7924: "e9375096269081ba4f8a",
        7942: "e0bf547dd411a9a127d9",
        7948: "4701980ccbf99473c130",
        7971: "52500a13ca5f5d935dd0",
        8085: "cf0599506365adc3c802",
        8120: "c7f5cb8edc6d7b0b4117",
        8274: "3486d26516fcfdc8c16d",
        8282: "fab78dacf93d599fc12f",
        8291: "b0a024f9bc5bb6f20295",
        8427: "ab25be9fecfc34ca041e",
        8433: "9bc9402e2099b4ef9ed0",
        8525: "23dfd3ea2eb8d40ad207",
        8592: "42a817b9a05b2bdf61a5",
        8647: "ba9fd18afc0681b60912",
        8691: "5f8c6308e15a113f3e35",
        8805: "2550a00c018f3753cea9",
        8931: "1f90c9d95b80968ba8ab",
        9167: "7cd31891e9613189ff2c",
        9233: "3899c02364da374b2fea",
        9316: "3fff9a7ee9e69a05807d",
        9348: "70d1f46835e00b53ad74",
        9349: "d6fe0e80decdf7b08c9c",
        9389: "aa406f678bcb4cbf11d2",
        9427: "c357ee391af65104e888",
        9513: "7de3c97aac224f775285",
        9547: "18bb709902bae75a638b",
        9561: "0463b2092a1ece985d41",
        9665: "6ae77a2a1ab51494b83b",
        9828: "398492dfe15e5ad4c29a",
        9854: "146b7b634649b9ca5322",
        9888: "abbdf2f9cd2b24b89efc",
        9949: "177e144b4faf9211c346",
        9951: "c0115c14bd3beb94da44",
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
        1909: "notifications",
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
        238: "9d553a26b9e194868478",
        312: "4534a033127c05fa36a5",
        400: "83b042f2046c5953e1b4",
        508: "5b6e4b80f435039be319",
        908: "0e081bbb135c85d95ae8",
        1909: "53a958afa79566293e79",
        2136: "8c359fa0555fa2bd2c5d",
        2329: "a969564f4cdabf0c473e",
        2449: "5f84fb007eba38212c79",
        2530: "bb3fdde126e9cfe9adfb",
        3352: "f3838685918d3c88bdc3",
        3499: "f66814af59f83abee010",
        3903: "fd3f85ef3102d792b6b0",
        4535: "120ef11d3786830c5571",
        4601: "1504f12b9d914fea5e36",
        5436: "671dce66cf8a63ffd3ac",
        6272: "390152204860d5f3d16e",
        6845: "804c681b2ea7549f9546",
        8647: "2aa199fdf547121332be",
        8931: "e1ea789d42c003605c03",
        9348: "8d690cefb6a381fd3bc1",
        9349: "f4977652404f75e5d337",
        9949: "87b30f1c0cbcb16fb9d5",
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
    (c = {}),
    (o = "community:"),
    (l.l = (a, e, n, i) => {
      if (c[a]) c[a].push(e);
      else {
        var s, t;
        if (void 0 !== n)
          for (
            var d = document.getElementsByTagName("script"), r = 0;
            r < d.length;
            r++
          ) {
            var f = d[r];
            if (
              f.getAttribute("src") == a ||
              f.getAttribute("data-webpack") == o + n
            ) {
              s = f;
              break;
            }
          }
        s ||
          ((t = !0),
          ((s = document.createElement("script")).charset = "utf-8"),
          (s.timeout = 120),
          l.nc && s.setAttribute("nonce", l.nc),
          s.setAttribute("data-webpack", o + n),
          (s.src = a)),
          (c[a] = [e]);
        var b = (e, n) => {
            (s.onerror = s.onload = null), clearTimeout(h);
            var o = c[a];
            if (
              (delete c[a],
              s.parentNode && s.parentNode.removeChild(s),
              o && o.forEach((a) => a(n)),
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
        var c = l.miniCssF(a),
          o = l.p + c;
        if (
          ((a, e) => {
            for (
              var n = document.getElementsByTagName("link"), c = 0;
              c < n.length;
              c++
            ) {
              var o =
                (s = n[c]).getAttribute("data-href") || s.getAttribute("href");
              if ("stylesheet" === s.rel && (o === a || o === e)) return s;
            }
            var i = document.getElementsByTagName("style");
            for (c = 0; c < i.length; c++) {
              var s;
              if ((o = (s = i[c]).getAttribute("data-href")) === a || o === e)
                return s;
            }
          })(c, o)
        )
          return e();
        ((a, e, n, c) => {
          var o = document.createElement("link");
          (o.rel = "stylesheet"),
            (o.type = "text/css"),
            (o.onerror = o.onload =
              (i) => {
                if (((o.onerror = o.onload = null), "load" === i.type)) n();
                else {
                  var s = i && ("load" === i.type ? "missing" : i.type),
                    t = (i && i.target && i.target.href) || e,
                    d = new Error(
                      "Loading CSS chunk " + a + " failed.\n(" + t + ")"
                    );
                  (d.code = "CSS_CHUNK_LOAD_FAILED"),
                    (d.type = s),
                    (d.request = t),
                    o.parentNode.removeChild(o),
                    c(d);
                }
              }),
            (o.href = e),
            document.head.appendChild(o);
        })(a, o, e, n);
      })),
    (s = { 6700: 0 }),
    (l.f.miniCss = (a, e) => {
      s[a]
        ? e.push(s[a])
        : 0 !== s[a] &&
          {
            238: 1,
            312: 1,
            400: 1,
            508: 1,
            908: 1,
            1909: 1,
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
      (l.f.j = (e, n) => {
        var c = l.o(a, e) ? a[e] : void 0;
        if (0 !== c)
          if (c) n.push(c[2]);
          else if (6700 != e) {
            var o = new Promise((n, o) => (c = a[e] = [n, o]));
            n.push((c[2] = o));
            var i = l.p + l.u(e),
              s = new Error();
            l.l(
              i,
              (n) => {
                if (l.o(a, e) && (0 !== (c = a[e]) && (a[e] = void 0), c)) {
                  var o = n && ("load" === n.type ? "missing" : n.type),
                    i = n && n.target && n.target.src;
                  (s.message =
                    "Loading chunk " + e + " failed.\n(" + o + ": " + i + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = o),
                    (s.request = i),
                    c[1](s);
                }
              },
              "chunk-" + e,
              e
            );
          } else a[e] = 0;
      }),
        (l.O.j = (e) => 0 === a[e]);
      var e = (e, n) => {
          var c,
            o,
            [i, s, t] = n,
            d = 0;
          if (i.some((e) => 0 !== a[e])) {
            for (c in s) l.o(s, c) && (l.m[c] = s[c]);
            if (t) var r = t(l);
          }
          for (e && e(n); d < i.length; d++)
            (o = i[d]), l.o(a, o) && a[o] && a[o][0](), (a[o] = 0);
          return l.O(r);
        },
        n = (self.webpackChunkcommunity = self.webpackChunkcommunity || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();
