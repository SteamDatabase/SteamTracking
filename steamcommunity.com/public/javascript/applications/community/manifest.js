/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8063000";
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
        for (f = 0; f < a.length; f++) {
          for (var [n, o, c] = a[f], d = !0, s = 0; s < n.length; s++)
            (!1 & c || i >= c) && Object.keys(l.O).every((a) => l.O[a](n[s]))
              ? n.splice(s--, 1)
              : ((d = !1), c < i && (i = c));
          if (d) {
            a.splice(f--, 1);
            var t = o();
            void 0 !== t && (e = t);
          }
        }
        return e;
      }
      c = c || 0;
      for (var f = a.length; f > 0 && a[f - 1][2] > c; f--) a[f] = a[f - 1];
      a[f] = [n, o, c];
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
        27: "495cd06a3e7a9e5d8c36",
        113: "3f52031223ed1a9ce98f",
        131: "16e16844f377e6c14057",
        238: "460672809f1af1580567",
        301: "5b997889c4ae85bd5db7",
        312: "2135f0a4365509e7a80a",
        400: "9d3b6983e44094fe2153",
        483: "758dcd901b14baa37574",
        508: "f18926e3a9d8d0e7ecbd",
        543: "92596e2ccfaa7bc641ca",
        617: "5bd841b9c1b275e1477c",
        755: "de5dd00e09c9127cb3be",
        867: "4714f6280064a9c5c47a",
        908: "bbd4c892f6f2ed7829a5",
        960: "64b316d460408524b18d",
        961: "139ee6a1169cdcabc105",
        1133: "7416797d5e10f22ce0e2",
        1195: "99e12314101a7fec5f1e",
        1261: "3f0add412adc6307abde",
        1311: "121b07502d906971b9aa",
        1546: "c0deefd8c12becfec077",
        1579: "f01e98e062ad5fa23258",
        1649: "4196439d660923038a86",
        1909: "34b0b65557e9a07d477d",
        1953: "9d40adbccce52ac22a94",
        2136: "d1a3e806f88cb159a913",
        2138: "265275cd9113a67e710c",
        2235: "bf05678d0d6c76c42b84",
        2329: "580cb569c2aa0f29227b",
        2351: "6cde82da9fd6297bd0d6",
        2373: "00e91189db07db2938d8",
        2449: "6c5da0605d244984fb8d",
        2468: "9e289bc6f39a3fa7a3d3",
        2530: "df1df2f9b642732573d2",
        2557: "3c8a01383e02f9e6d671",
        2723: "f93b75b2df1fd725cf33",
        2738: "b648fa8e6819a49cfe78",
        2745: "d73daedb49974fa3546a",
        2805: "27c327c966c604ddbf37",
        2822: "43639afe0da4c6bf5d60",
        2832: "515b851cf61069489a73",
        3007: "abac6d3ade686d483d9f",
        3038: "6443557dc1487effaf04",
        3202: "839415dd5538aa9fff41",
        3298: "d47a5df64f22bc36216c",
        3352: "67b2ca0eb82917986222",
        3499: "fedf110c85200f785da0",
        3591: "dda6f830ef55043e0ff3",
        3602: "fff7a9d70eb218a8c90e",
        3742: "94c17f19af13d9f8fe75",
        3903: "8b4f9203f0022dd03634",
        4097: "252ea6f5757091923b48",
        4183: "6be6cd24829a708c89f0",
        4293: "47086b899b3d7b50835b",
        4358: "31bcda4c21af691d3d3e",
        4445: "0344f2ac9450ede6f23e",
        4469: "f243aa2e650b734d84e0",
        4487: "3fbf36e1c99bd24f51d2",
        4513: "e3a7200ed55ac561d8d0",
        4535: "9eee409461b1bad61088",
        4601: "eb412248a06f139cadb0",
        4729: "1e6186fcb0a1da88db7e",
        4819: "00e75c317fee97addd7d",
        4979: "539b3fc2d8cc1416b424",
        5012: "067e1fbc59a42ca61cbe",
        5119: "fcd419e4386458dd2f21",
        5166: "25cb2464d0a52b820a8f",
        5277: "37fae44a622acf75d58f",
        5279: "4fabdc2469ef9ce09d8f",
        5436: "e235ef6b3667d0ab0aae",
        5439: "71354ff8192165945f48",
        5493: "ea732d207c19cb0e7de7",
        5494: "c7f3f3916dab71f85860",
        5503: "1b0164d9bb50a947c52c",
        5663: "48232521748b72cf1892",
        5757: "f2de134a7775e9ca3072",
        6091: "48bb1229ebd012b3c70c",
        6148: "1ca0a59911794d934b2b",
        6272: "7c0a03b092431b739643",
        6403: "fe1cf30980fdf4dc7f15",
        6415: "c008f6fa8ef222173814",
        6457: "f49d8dfcfdd0482dcd9b",
        6576: "30087b4c49336839ab8e",
        6588: "a5373e3d0e90ce9f0ed8",
        6656: "0620cc0db36da685d691",
        6658: "c17f503c4b160224e518",
        6715: "b546f627254ec8397a36",
        6844: "edfbea0f8456bf19e932",
        6845: "6b45ffc65541855a3481",
        6932: "d53756bb6a97321755d6",
        6962: "e4e662052caa2579a95b",
        7629: "70a9a12e24d922f37d30",
        7660: "859a890680e5563177cd",
        7769: "150a46e38c1667839751",
        7781: "5cf8c938308b549b8094",
        7832: "e8085db9d08270eac33d",
        7901: "c3223c293908289a7f79",
        7924: "02257f9a3371c8e7315b",
        7942: "ac78aa7a19125739cef1",
        7948: "4701980ccbf99473c130",
        7971: "6a51dc5e61f0f589f50a",
        8085: "dd12e2ff252f58be4290",
        8120: "3a88f19d155754e630af",
        8274: "50d22dad201296b42cb9",
        8282: "8c7761397de15e825700",
        8291: "4e3f7aabfa5f611cef89",
        8427: "d8507bf36ac2de0c6594",
        8433: "0cdf3e773d4f2ebbac37",
        8525: "aca756fcf4f1d9f7c282",
        8592: "09c0789c7ebd16f41d89",
        8647: "76558e139706697a7a4b",
        8691: "5f8c6308e15a113f3e35",
        8805: "36e3f8279b3cce35ddab",
        8931: "55162e12719e99866a8c",
        9167: "81e3145cf3688ea25dbb",
        9233: "1179d2b19a0ac7cf9cfb",
        9316: "bbc41c1dbdcf8b3dab55",
        9348: "b41e2f4af7defd59fee7",
        9349: "a8020f96e097319c147b",
        9389: "0b314dbd1c788dcbd96c",
        9427: "40cbae230ab343faecb1",
        9513: "124e58afc893e3873513",
        9547: "8329199de14fc74a6c5d",
        9561: "8a942f1802689aeef7f1",
        9665: "4256a7182938e07de38f",
        9828: "0916ec6dfd053fb2ad59",
        9854: "5a90a0cd62f3011c9698",
        9888: "47b33592c4e63e466525",
        9949: "02af94d6d9b3de7fba55",
        9951: "827f44c0f111012ffad8",
        9991: "36cd46ba70258f7aa38e",
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
      }[a] +
      ".css?contenthash=" +
      {
        238: "9d553a26b9e194868478",
        312: "4534a033127c05fa36a5",
        400: "d4002f206c009434c9e9",
        508: "7197e1ecd3babec33498",
        908: "9844515e07566417856e",
        1909: "7563093a3bd8e4c4e7c0",
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
        6272: "421aa9f56f19d4e59fdb",
        6845: "804c681b2ea7549f9546",
        8647: "2aa199fdf547121332be",
        8931: "54bb32c3178e1a0975a8",
        9348: "8d690cefb6a381fd3bc1",
        9349: "f4977652404f75e5d337",
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
            var t = document.getElementsByTagName("script"), f = 0;
            f < t.length;
            f++
          ) {
            var r = t[f];
            if (
              r.getAttribute("src") == a ||
              r.getAttribute("data-webpack") == c + n
            ) {
              d = r;
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
            if (s) var f = s(l);
          }
          for (e && e(n); t < i.length; t++)
            (c = i[t]), l.o(a, c) && a[c] && a[c][0](), (a[c] = 0);
          return l.O(f);
        },
        n = (self.webpackChunkcommunity = self.webpackChunkcommunity || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();
