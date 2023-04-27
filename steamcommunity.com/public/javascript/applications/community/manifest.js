/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8016232";
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
    l = {};
  function d(a) {
    var e = l[a];
    if (void 0 !== e) return e.exports;
    var n = (l[a] = { id: a, loaded: !1, exports: {} });
    return t[a].call(n.exports, n, n.exports, d), (n.loaded = !0), n.exports;
  }
  (d.m = t),
    (a = []),
    (d.O = (e, n, c, o) => {
      if (!n) {
        var i = 1 / 0;
        for (f = 0; f < a.length; f++) {
          for (var [n, c, o] = a[f], s = !0, t = 0; t < n.length; t++)
            (!1 & o || i >= o) && Object.keys(d.O).every((a) => d.O[a](n[t]))
              ? n.splice(t--, 1)
              : ((s = !1), o < i && (i = o));
          if (s) {
            a.splice(f--, 1);
            var l = c();
            void 0 !== l && (e = l);
          }
        }
        return e;
      }
      o = o || 0;
      for (var f = a.length; f > 0 && a[f - 1][2] > o; f--) a[f] = a[f - 1];
      a[f] = [n, c, o];
    }),
    (d.n = (a) => {
      var e = a && a.__esModule ? () => a.default : () => a;
      return d.d(e, { a: e }), e;
    }),
    (n = Object.getPrototypeOf
      ? (a) => Object.getPrototypeOf(a)
      : (a) => a.__proto__),
    (d.t = function (a, c) {
      if ((1 & c && (a = this(a)), 8 & c)) return a;
      if ("object" == typeof a && a) {
        if (4 & c && a.__esModule) return a;
        if (16 & c && "function" == typeof a.then) return a;
      }
      var o = Object.create(null);
      d.r(o);
      var i = {};
      e = e || [null, n({}), n([]), n(n)];
      for (var s = 2 & c && a; "object" == typeof s && !~e.indexOf(s); s = n(s))
        Object.getOwnPropertyNames(s).forEach((e) => (i[e] = () => a[e]));
      return (i.default = () => a), d.d(o, i), o;
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
        27: "cc2303399a9ee089eda4",
        113: "dd91b3debc8cb02673be",
        131: "4af4966c5486ab2932f1",
        238: "36a2e9ddf46d6dbd9913",
        301: "9b366d5a27b83c0b25c6",
        312: "8c619bc0ba44b5a148ea",
        400: "ac5a26fcba81aa6d333f",
        483: "758dcd901b14baa37574",
        508: "388e7407ccc2eacc50ec",
        543: "92596e2ccfaa7bc641ca",
        617: "1757a8377e40d206b1ee",
        755: "55f07050328188824367",
        867: "00f14efc6eada7a40c34",
        908: "b20b3b3648047cda3ff2",
        960: "101bc280af5c9908daa2",
        961: "6793ecf887b8597fdacb",
        1133: "c8666fea45d34bb1fec2",
        1195: "506f44603ad77ab1558d",
        1261: "ddf1a46061d8fbf0dc8a",
        1311: "69f834b0723e4b88d7ed",
        1546: "8b2ef12f587d128c8424",
        1579: "8cc5c37a58868255060d",
        1649: "6d8ca4ee2997f5521a61",
        1909: "3ba0030968b052551ad4",
        1953: "f9e4cbb2fba9fcefdf21",
        2136: "0a58d9836bea9d9a7c1c",
        2138: "40638f22adc925d4d40d",
        2235: "7cda34a98b9037c43baf",
        2329: "23fc862847c4ff48046a",
        2351: "ef646afa34926a39dbc8",
        2373: "2c7b9966da1aeeb53bd3",
        2449: "3a415d823ee15507b94d",
        2468: "13ae22e11baae0762a7d",
        2530: "14975cf5a4bdd8671c5d",
        2557: "988f9458c54e503bc22f",
        2723: "38523495650a5bd428bf",
        2738: "7b576e649592e9b59f7d",
        2745: "1e622074b2882afe7ab6",
        2805: "12da7e8721b9a51d7af9",
        2822: "3234d7e71e82f600aa5a",
        2832: "164117b6905f64b19344",
        3007: "acc88c39a0d3f4f9d93e",
        3038: "d2d6787f92b1b3da0bb9",
        3202: "0ad5cf33563130fe8a17",
        3298: "70397630461a20ccc56d",
        3352: "093c581af99dfcca34a5",
        3499: "f2761f33751216669763",
        3591: "e7d5c277a5493bfe6649",
        3602: "21b2f57f9dfda5f7036c",
        3742: "7f0869940e92dec080fa",
        3903: "ac1628b64d02c0e6939b",
        4097: "e2c59121d788d334af2c",
        4183: "1c2009cdf73c80b13e02",
        4293: "5b99ae4ac2bc9d6a39dc",
        4358: "8e6328abb246884f120f",
        4445: "9717718492bf0320b7d4",
        4469: "c884ac502c90d7d7eb04",
        4487: "97e8f138437be5677a42",
        4513: "2840e381ad273ad90947",
        4535: "c9b2340303dee7ff4e12",
        4601: "fd56322a87a3332ef17a",
        4729: "a12d049842547e7e3e1e",
        4819: "9b86ad76c5f1a960327c",
        4979: "e6ed3301386131feb79f",
        5012: "3fb6303e651602500593",
        5119: "cb720a9482f06020d883",
        5166: "673cc24f94a5a759752e",
        5277: "9c5f146555b033a39b72",
        5279: "01916c2a92305fc08c77",
        5436: "9bff8bad42477215fd05",
        5439: "104a5e1da52c10713193",
        5493: "7790716ab087d8670e93",
        5494: "ea16e2717a8f4561532c",
        5503: "d7dc11ece161a3a982eb",
        5663: "4c3e283c1a11ab7590b0",
        5757: "c6167e03ee407571ff0e",
        6091: "83b3a62da39942fce56f",
        6148: "1ca0a59911794d934b2b",
        6272: "22e806b1eef1a11fd399",
        6403: "cddb9e646a2e59b8fe92",
        6415: "8aba7b7f0f5d5ce8f09b",
        6457: "4c912ff65742514271d9",
        6576: "fb6b3ef1b3968c6cb84e",
        6588: "a5373e3d0e90ce9f0ed8",
        6656: "0620cc0db36da685d691",
        6658: "7fc816c5ae771bdd6286",
        6715: "5496f0a3caa1083a371b",
        6844: "da895d2089abdff31fc5",
        6845: "bbcc031c6b5805e4ff32",
        6932: "ab534a0dcfb466ea5ca6",
        6962: "1f1d15c56284df280253",
        7629: "ab2705c24cb993c41de8",
        7660: "bf4f181c12d3206772d3",
        7769: "3f38e2725e5874968f8c",
        7781: "17443fb754709616dc9f",
        7832: "805691d315505778e736",
        7901: "2dd32c8afe59aec19d5b",
        7924: "e9375096269081ba4f8a",
        7942: "e0bf547dd411a9a127d9",
        7948: "4701980ccbf99473c130",
        7971: "52500a13ca5f5d935dd0",
        8085: "80e5e7d623996d90448f",
        8120: "c5260b07285e53a9a3b7",
        8274: "3486d26516fcfdc8c16d",
        8282: "fab78dacf93d599fc12f",
        8291: "b0a024f9bc5bb6f20295",
        8427: "ab25be9fecfc34ca041e",
        8433: "2788e346cd0c79efd775",
        8525: "23dfd3ea2eb8d40ad207",
        8592: "42a817b9a05b2bdf61a5",
        8647: "f73b6568523873a05749",
        8691: "5f8c6308e15a113f3e35",
        8805: "345a9bed2c04b6fc41c4",
        8931: "abecf27aac108a63e6da",
        9167: "7cd31891e9613189ff2c",
        9233: "d9528c150d81faee2d24",
        9316: "3fff9a7ee9e69a05807d",
        9348: "b0e2ac5b644ab83fb13c",
        9349: "4a347361baa9fc24aea0",
        9389: "aa406f678bcb4cbf11d2",
        9427: "dd590715acf03ff618df",
        9513: "7de3c97aac224f775285",
        9547: "1e644b8dde6d460e5c2a",
        9561: "0463b2092a1ece985d41",
        9665: "3fb2c8374422bf831d51",
        9828: "398492dfe15e5ad4c29a",
        9854: "2a306568410a1e7c9759",
        9888: "abbdf2f9cd2b24b89efc",
        9949: "177e144b4faf9211c346",
        9951: "5a3c09158e9237bdf55e",
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
        508: "301f564939419666e84c",
        908: "0e081bbb135c85d95ae8",
        1909: "7e8b1c93934bfe838e2a",
        2136: "8c359fa0555fa2bd2c5d",
        2329: "a969564f4cdabf0c473e",
        2449: "5f84fb007eba38212c79",
        2530: "624523d9eb2e10b196c3",
        3352: "f3838685918d3c88bdc3",
        3499: "f66814af59f83abee010",
        3903: "fd3f85ef3102d792b6b0",
        4535: "120ef11d3786830c5571",
        4601: "1504f12b9d914fea5e36",
        5436: "671dce66cf8a63ffd3ac",
        6272: "390152204860d5f3d16e",
        6845: "f488d0107530c1af4fbe",
        8647: "2aa199fdf547121332be",
        8931: "5cb88c25514e3a3c6867",
        9348: "b2f407c25c28a4c938ee",
        9349: "f4977652404f75e5d337",
        9949: "87b30f1c0cbcb16fb9d5",
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
    (c = {}),
    (o = "community:"),
    (d.l = (a, e, n, i) => {
      if (c[a]) c[a].push(e);
      else {
        var s, t;
        if (void 0 !== n)
          for (
            var l = document.getElementsByTagName("script"), f = 0;
            f < l.length;
            f++
          ) {
            var r = l[f];
            if (
              r.getAttribute("src") == a ||
              r.getAttribute("data-webpack") == o + n
            ) {
              s = r;
              break;
            }
          }
        s ||
          ((t = !0),
          ((s = document.createElement("script")).charset = "utf-8"),
          (s.timeout = 120),
          d.nc && s.setAttribute("nonce", d.nc),
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
        var c = d.miniCssF(a),
          o = d.p + c;
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
                    l = new Error(
                      "Loading CSS chunk " + a + " failed.\n(" + t + ")"
                    );
                  (l.code = "CSS_CHUNK_LOAD_FAILED"),
                    (l.type = s),
                    (l.request = t),
                    o.parentNode.removeChild(o),
                    c(l);
                }
              }),
            (o.href = e),
            document.head.appendChild(o);
        })(a, o, e, n);
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
      (d.f.j = (e, n) => {
        var c = d.o(a, e) ? a[e] : void 0;
        if (0 !== c)
          if (c) n.push(c[2]);
          else if (6700 != e) {
            var o = new Promise((n, o) => (c = a[e] = [n, o]));
            n.push((c[2] = o));
            var i = d.p + d.u(e),
              s = new Error();
            d.l(
              i,
              (n) => {
                if (d.o(a, e) && (0 !== (c = a[e]) && (a[e] = void 0), c)) {
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
        (d.O.j = (e) => 0 === a[e]);
      var e = (e, n) => {
          var c,
            o,
            [i, s, t] = n,
            l = 0;
          if (i.some((e) => 0 !== a[e])) {
            for (c in s) d.o(s, c) && (d.m[c] = s[c]);
            if (t) var f = t(d);
          }
          for (e && e(n); l < i.length; l++)
            (o = i[l]), d.o(a, o) && a[o] && a[o][0](), (a[o] = 0);
          return d.O(f);
        },
        n = (self.webpackChunkcommunity = self.webpackChunkcommunity || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();
