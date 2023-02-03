/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7817670";
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
        for (r = 0; r < a.length; r++) {
          for (var [n, c, o] = a[r], s = !0, t = 0; t < n.length; t++)
            (!1 & o || i >= o) && Object.keys(d.O).every((a) => d.O[a](n[t]))
              ? n.splice(t--, 1)
              : ((s = !1), o < i && (i = o));
          if (s) {
            a.splice(r--, 1);
            var l = c();
            void 0 !== l && (e = l);
          }
        }
        return e;
      }
      o = o || 0;
      for (var r = a.length; r > 0 && a[r - 1][2] > o; r--) a[r] = a[r - 1];
      a[r] = [n, c, o];
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
        27: "0e802920898b767bd138",
        113: "13b9184124ab20fb8d56",
        131: "f4cbd162dc190d1df005",
        238: "602fa14425f0a94b78d2",
        301: "93cd3238a00e69bbe39b",
        312: "f43bd3c1dfc86bad2dbb",
        400: "0383448645c599d01fe1",
        483: "022e81030e2fadf7a189",
        508: "d0e18844b7b80f9d2235",
        543: "45872255803922b928e0",
        617: "73f47cfaa7a83ecc09c7",
        755: "1095389a38616d1aa01e",
        867: "dbe91ddb7c79254d2561",
        908: "ded63ffbaa248b4fd20f",
        960: "2ba80e49777122c3b3e5",
        961: "b90a5fd895bde720cd5d",
        1133: "6e08cf46037fce45bd04",
        1195: "fb11caf283011e0f414d",
        1261: "037779366f608e09a13f",
        1311: "6fd02aef6a4366a6fd16",
        1338: "32e379439443e2baae77",
        1546: "373b1004bda451d14835",
        1579: "f25ace142b7b40d7c3e8",
        1649: "1a64542dd40077eedf17",
        1953: "ee5418c2438ccd94bdc4",
        2136: "8df4564755572f7e9c41",
        2138: "5e7d8f960a342d5c946e",
        2235: "5e19f9722514ddd4aa79",
        2329: "cd3c1b3a4d5d92ff9833",
        2351: "c7c56967f87b80e57c23",
        2373: "1d92fe3fa4106bd9e23d",
        2449: "2174fa0817730c84cf3e",
        2468: "d5eea64fdc8ccc12adb3",
        2530: "90093bbb0b0d0f66e9dd",
        2557: "201815ea8a6eea255a30",
        2723: "ec0b9d6f6a68877c37b3",
        2738: "bce559e257658bada33e",
        2745: "0ee183cfc2149c5db2ea",
        2805: "30fac41b51bf9a4c04b3",
        2822: "72febe1ffe55510169cc",
        2832: "23866f3fb07e9697efca",
        3007: "0417ecf74a90e0dd358c",
        3038: "3317dd083880280081e1",
        3202: "681dd766d6f76eab509a",
        3298: "37e895ad7b338ee17188",
        3352: "a93de3538be84fe0c0e7",
        3499: "75df6b7d604ed5f8155f",
        3591: "343be32681285e3fcc20",
        3602: "d888feb82d04dfde8fb7",
        3742: "b6e83ff0f1502132ce42",
        3903: "0291578384863195d6fc",
        4097: "3c18f60e4f19ad357814",
        4183: "2f5901c26e662aae046a",
        4293: "48bc6d7ac09918355a2c",
        4358: "40b3bb9f248f9ed15809",
        4445: "660f57521e1a02633f39",
        4469: "0c17bf4cce23470a3a1b",
        4487: "a753619fa75e13bd7577",
        4513: "2fd1ec42cd1399aa1922",
        4535: "2ff101a8181d8800d98d",
        4601: "4e8ce179db90e5c158c5",
        4729: "206c39535868086d0c46",
        4819: "561596dd0468ff6599a3",
        4979: "e59f81b62f899ae24461",
        5012: "6f4e6934239bf7a256d6",
        5119: "c2dd981024a7e830f1f9",
        5277: "361205e705e9fd6c9262",
        5279: "b65e25e7978935dd403e",
        5436: "cd3336f84e4e3e76e391",
        5439: "16baa12ec54daa8ded6a",
        5493: "333ca6a92125abd691a4",
        5494: "d2b1888623dfa560881e",
        5503: "3351e50e201cac4c34c1",
        5757: "1f94f4a147fd60498cf0",
        6091: "1a2f30cbb1adb5941948",
        6148: "5aca2d35a443fd3058d9",
        6272: "d0d55178c2caff4bedfb",
        6403: "31b092f67128d49c01a4",
        6415: "82b3c3f5343095398511",
        6457: "7d1b863889debfebf490",
        6588: "f25524c9f86bd49a56bf",
        6658: "4a7e1d51e3bfbdc6bb6c",
        6715: "c66a5d57898996692d39",
        6844: "2df2d4e6c14d4560bb0c",
        6845: "1b90ebe7e497383f5d87",
        6932: "c414c1108810bdbb9dc2",
        6962: "5729cb19a0e114f5abd8",
        7629: "7b2aca6aa6b6b6bd8120",
        7660: "52ecdcf36df4f584b872",
        7769: "aa738b1a57fb4d25cd74",
        7781: "5d7ff6dd1713f1ef1376",
        7832: "6d3214c50ca68865f871",
        7901: "549856323905801007ef",
        7924: "0a1a9915d2b653c09d08",
        7942: "81084dd4dee502ad6805",
        7948: "4577dd7676bd355a3712",
        7971: "78ba4acfa7cc2afac067",
        8085: "1b1c6cf7771149a40b26",
        8120: "0df8d2f3a24a680ed1cb",
        8274: "6ac885388feda175e55e",
        8282: "6cd4a78467e441be368b",
        8291: "f9c31a2699e7690a72ec",
        8427: "7fa5c708a7b1ece6ccf1",
        8433: "ab98bed074b245c4dda0",
        8525: "d30a9f02d30acfa05e7d",
        8592: "4af89abe4940a618f091",
        8647: "685f5b04d7debb628eb5",
        8691: "9422b45f35c587cbb992",
        8805: "9bd27977cf06daabeefd",
        8931: "aa5a41fb9cab049ccb50",
        9167: "755d0caa14214610e6c8",
        9233: "d5293783307f62925855",
        9316: "b6a1989ad55461b11487",
        9348: "327416ecc375f8b7343d",
        9349: "a1c28aea02d2446c704e",
        9389: "b9f9911550161883a3b5",
        9427: "3de4598f3199359906c5",
        9513: "d54d09dc14a67f547e35",
        9547: "f3ce0685fab66d5bb64e",
        9561: "071acbbbe0c1be0ee1d0",
        9665: "1ad7709b90712d1f2d77",
        9828: "8ed68f19e5dcdc5e6b8e",
        9854: "7d3498ef127f62bbb6a6",
        9888: "36f847c077671e8c11b3",
        9949: "ce7523a341f712356abb",
        9951: "893972c35802295bdda3",
        9991: "e711b8ec50b99f7bbdc0",
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
        6845: "profile",
        8647: "managefriends",
        8931: "chunk~c18a43282",
        9348: "chunk~69438e232",
        9349: "eventeditor",
      }[a] +
      ".css?contenthash=" +
      {
        238: "82877e2cea30622a4345",
        312: "9e6bee6632888a265236",
        400: "4d629ca4bc66c9aca57f",
        508: "b7d253347683def65342",
        908: "b1cfbd6ecf3d3abad923",
        2136: "7677775ce82ff87c079e",
        2329: "70358f02752594d6bf7b",
        2449: "daa7e074383347bf1c8d",
        2530: "d54c8cc0a53b142b9410",
        3352: "f3838685918d3c88bdc3",
        3499: "f66814af59f83abee010",
        3903: "2ba079387bbf6e9fb8fe",
        4535: "120ef11d3786830c5571",
        4601: "1504f12b9d914fea5e36",
        5436: "6eca1d3524672f585c5a",
        6272: "96937946e427750774e4",
        6845: "442855b471fc70626dfc",
        8647: "413bbe35d505feb2a7be",
        8931: "3f842d066f4fc1d71149",
        9348: "296063281ec6d3d1962c",
        9349: "f4977652404f75e5d337",
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
            var l = document.getElementsByTagName("script"), r = 0;
            r < l.length;
            r++
          ) {
            var f = l[r];
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
            if (t) var r = t(d);
          }
          for (e && e(n); l < i.length; l++)
            (o = i[l]), d.o(a, o) && a[o] && a[o][0](), (a[o] = 0);
          return d.O(r);
        },
        n = (self.webpackChunkcommunity = self.webpackChunkcommunity || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();
