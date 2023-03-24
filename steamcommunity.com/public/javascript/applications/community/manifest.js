/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7945021";
(() => {
  "use strict";
  var a,
    e,
    n,
    o,
    i,
    c,
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
    (d.O = (e, n, o, i) => {
      if (!n) {
        var c = 1 / 0;
        for (r = 0; r < a.length; r++) {
          for (var [n, o, i] = a[r], s = !0, t = 0; t < n.length; t++)
            (!1 & i || c >= i) && Object.keys(d.O).every((a) => d.O[a](n[t]))
              ? n.splice(t--, 1)
              : ((s = !1), i < c && (c = i));
          if (s) {
            a.splice(r--, 1);
            var l = o();
            void 0 !== l && (e = l);
          }
        }
        return e;
      }
      i = i || 0;
      for (var r = a.length; r > 0 && a[r - 1][2] > i; r--) a[r] = a[r - 1];
      a[r] = [n, o, i];
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
      var i = Object.create(null);
      d.r(i);
      var c = {};
      e = e || [null, n({}), n([]), n(n)];
      for (var s = 2 & o && a; "object" == typeof s && !~e.indexOf(s); s = n(s))
        Object.getOwnPropertyNames(s).forEach((e) => (c[e] = () => a[e]));
      return (c.default = () => a), d.d(i, c), i;
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
        27: "e632e697e35c7c024e38",
        113: "62425382e458f1a34b27",
        131: "60b057beed36eb422533",
        238: "0be953ee6910fafa9646",
        301: "80b690a6338e1db9ed7f",
        312: "c3edce8c38c142d099ac",
        400: "b73861410dca742dd358",
        483: "758dcd901b14baa37574",
        508: "ada4168d0b43e2aa9ec6",
        543: "92596e2ccfaa7bc641ca",
        617: "2e34e9a7496443f28f40",
        755: "946cb193496c637d27d2",
        867: "00f14efc6eada7a40c34",
        908: "f8472009a6a6d4e710c6",
        960: "101bc280af5c9908daa2",
        961: "6793ecf887b8597fdacb",
        1133: "3d7c9643b03cc4337481",
        1195: "8ce8a913498dae7b0139",
        1261: "70b147240f9e9d07a7c5",
        1311: "69bbd6e2d61131adaaa6",
        1546: "8b2ef12f587d128c8424",
        1579: "0a4ddf97e17cd1c0cd46",
        1649: "62ad9df72bdf3ff7c244",
        1909: "75aa352973f9f524bf99",
        1953: "1076de5aff922583fce3",
        2136: "e0548046c7bbca42012f",
        2138: "b766329b1549458cbba7",
        2235: "7cda34a98b9037c43baf",
        2329: "23fc862847c4ff48046a",
        2351: "a129f3f180640afd94c4",
        2373: "2c7b9966da1aeeb53bd3",
        2449: "80f7c3657f0b711738d0",
        2468: "13ae22e11baae0762a7d",
        2530: "f3be533de44ae11ca9db",
        2557: "15cb5f979bc4f027406a",
        2723: "38523495650a5bd428bf",
        2738: "6489f9ca57e94ff40b0d",
        2745: "1e622074b2882afe7ab6",
        2805: "ad0909cfc6d3430570f1",
        2822: "d95094d980f587364f17",
        2832: "0d4a4f6e49227f8d7a48",
        3007: "acc88c39a0d3f4f9d93e",
        3038: "50e4d1a991dc3d8a9962",
        3202: "0ad5cf33563130fe8a17",
        3298: "0fd0510db08704e34040",
        3352: "3b7f8d0e34856e52a4c7",
        3499: "8df48bb7d3f2d2005c9d",
        3591: "e7d5c277a5493bfe6649",
        3602: "4b1c2f14cf006a4e6302",
        3742: "7f0869940e92dec080fa",
        3903: "b0cff9c421310fdd75db",
        4097: "e1b9170502f80beebcb3",
        4183: "3d556c96f786e1256376",
        4293: "5b99ae4ac2bc9d6a39dc",
        4358: "6898378a4469ce6b579d",
        4445: "84b8206c438fb40777ae",
        4469: "b50db8a9cb0b5ea648a6",
        4487: "5c20512f5926ad8f2334",
        4513: "68d7e7e9d652af0a9522",
        4535: "c9b2340303dee7ff4e12",
        4601: "71fdcaf50bb786195977",
        4729: "41f758c882613b3a6699",
        4819: "9b86ad76c5f1a960327c",
        4979: "e6ed3301386131feb79f",
        5012: "c437d7810e72831dba0b",
        5119: "21491fa1d58c5bdfeac0",
        5166: "673cc24f94a5a759752e",
        5277: "e62ca5bc6816f36fc092",
        5279: "39b9dd755fdcd1d14f9d",
        5436: "496b5b4d7cec5c4179f4",
        5439: "104a5e1da52c10713193",
        5493: "752a866d7bbad3da0999",
        5494: "ea16e2717a8f4561532c",
        5503: "e5f496acd89165c3c8a0",
        5663: "c9e3a51f58a401a2b7fb",
        5757: "c48995e6f975df89f0b0",
        6091: "713ac08d8aa6220c259a",
        6148: "1ca0a59911794d934b2b",
        6272: "c7b71bf1b12ae8540c33",
        6403: "8910f9a8d9395705381f",
        6415: "a42efbfe869bb05465b1",
        6457: "1217e906993dbd3c8653",
        6588: "a5373e3d0e90ce9f0ed8",
        6656: "0620cc0db36da685d691",
        6658: "7fc816c5ae771bdd6286",
        6715: "5496f0a3caa1083a371b",
        6844: "b4a9fe1dced818bc6c56",
        6845: "66339c371c9df96430f4",
        6932: "ab534a0dcfb466ea5ca6",
        6962: "d737e83eef59100e5849",
        7629: "6b4c33eb7a112aecf01f",
        7660: "e93c805091b88ca4c5f6",
        7769: "801d41733e5fa1c3145c",
        7781: "ae9f281f934855b4632a",
        7832: "805691d315505778e736",
        7901: "58e6ba504e7637e0efa8",
        7924: "e9375096269081ba4f8a",
        7942: "e0bf547dd411a9a127d9",
        7948: "4701980ccbf99473c130",
        7971: "3da053a4570862249cac",
        8085: "246998d297b1c02b45fd",
        8120: "f9bd1e7f6b1294eb9f8e",
        8274: "58561326620f45460114",
        8282: "c2e92d42ff7dbebc9a99",
        8291: "99ef495c74b5000603db",
        8427: "6f259936f0f4b1d1940e",
        8433: "26b49548351b323ed324",
        8525: "6c27b67cce74fe79b485",
        8592: "a713bc683c8dc52be912",
        8647: "9f87e60cbc3a8e4629f8",
        8691: "5f8c6308e15a113f3e35",
        8805: "9e2b1a9ca364ab5c8b35",
        8931: "b13ac26ac774f75b39cd",
        9167: "7cd31891e9613189ff2c",
        9233: "c464b9219adfe28f62d9",
        9316: "3fff9a7ee9e69a05807d",
        9348: "b2999f699bb529729f9a",
        9349: "36e6f6aa01ce20caef36",
        9389: "aa406f678bcb4cbf11d2",
        9427: "c165367bb4c6a7dd3c23",
        9513: "7de3c97aac224f775285",
        9547: "6d76c525a907144ef56e",
        9561: "0463b2092a1ece985d41",
        9665: "e85f03482114a3712a83",
        9828: "398492dfe15e5ad4c29a",
        9854: "e406c3eb0657ca7f15aa",
        9888: "abbdf2f9cd2b24b89efc",
        9949: "ab7b24bcc9b8a69debd3",
        9951: "be08e88af1c55a11bace",
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
        238: "22b823cc2a3160cbeaa8",
        312: "114eca94fb7fbe3ab3e5",
        400: "83b042f2046c5953e1b4",
        508: "c84a33ef03f3a1ccab4c",
        908: "0e081bbb135c85d95ae8",
        1909: "644d122dcd167e0de5d0",
        2136: "8c359fa0555fa2bd2c5d",
        2329: "a969564f4cdabf0c473e",
        2449: "5f84fb007eba38212c79",
        2530: "0f4ea9e53d5095abeefa",
        3352: "f3838685918d3c88bdc3",
        3499: "f66814af59f83abee010",
        3903: "fd3f85ef3102d792b6b0",
        4535: "120ef11d3786830c5571",
        4601: "1504f12b9d914fea5e36",
        5436: "671dce66cf8a63ffd3ac",
        6272: "390152204860d5f3d16e",
        6845: "39ebd3d62f4f0810de06",
        8647: "2aa199fdf547121332be",
        8931: "4c94d8b055395cc85a73",
        9348: "cb26684006904ab2ae67",
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
    (o = {}),
    (i = "community:"),
    (d.l = (a, e, n, c) => {
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
              f.getAttribute("data-webpack") == i + n
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
          s.setAttribute("data-webpack", i + n),
          (s.src = a)),
          (o[a] = [e]);
        var b = (e, n) => {
            (s.onerror = s.onload = null), clearTimeout(h);
            var i = o[a];
            if (
              (delete o[a],
              s.parentNode && s.parentNode.removeChild(s),
              i && i.forEach((a) => a(n)),
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
    (c = (a) =>
      new Promise((e, n) => {
        var o = d.miniCssF(a),
          i = d.p + o;
        if (
          ((a, e) => {
            for (
              var n = document.getElementsByTagName("link"), o = 0;
              o < n.length;
              o++
            ) {
              var i =
                (s = n[o]).getAttribute("data-href") || s.getAttribute("href");
              if ("stylesheet" === s.rel && (i === a || i === e)) return s;
            }
            var c = document.getElementsByTagName("style");
            for (o = 0; o < c.length; o++) {
              var s;
              if ((i = (s = c[o]).getAttribute("data-href")) === a || i === e)
                return s;
            }
          })(o, i)
        )
          return e();
        ((a, e, n, o) => {
          var i = document.createElement("link");
          (i.rel = "stylesheet"),
            (i.type = "text/css"),
            (i.onerror = i.onload =
              (c) => {
                if (((i.onerror = i.onload = null), "load" === c.type)) n();
                else {
                  var s = c && ("load" === c.type ? "missing" : c.type),
                    t = (c && c.target && c.target.href) || e,
                    l = new Error(
                      "Loading CSS chunk " + a + " failed.\n(" + t + ")"
                    );
                  (l.code = "CSS_CHUNK_LOAD_FAILED"),
                    (l.type = s),
                    (l.request = t),
                    i.parentNode.removeChild(i),
                    o(l);
                }
              }),
            (i.href = e),
            document.head.appendChild(i);
        })(a, i, e, n);
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
            (s[a] = c(a).then(
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
            var i = new Promise((n, i) => (o = a[e] = [n, i]));
            n.push((o[2] = i));
            var c = d.p + d.u(e),
              s = new Error();
            d.l(
              c,
              (n) => {
                if (d.o(a, e) && (0 !== (o = a[e]) && (a[e] = void 0), o)) {
                  var i = n && ("load" === n.type ? "missing" : n.type),
                    c = n && n.target && n.target.src;
                  (s.message =
                    "Loading chunk " + e + " failed.\n(" + i + ": " + c + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = i),
                    (s.request = c),
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
            i,
            [c, s, t] = n,
            l = 0;
          if (c.some((e) => 0 !== a[e])) {
            for (o in s) d.o(s, o) && (d.m[o] = s[o]);
            if (t) var r = t(d);
          }
          for (e && e(n); l < c.length; l++)
            (i = c[l]), d.o(a, i) && a[i] && a[i][0](), (a[i] = 0);
          return d.O(r);
        },
        n = (self.webpackChunkcommunity = self.webpackChunkcommunity || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();
