/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7841736";
(() => {
  "use strict";
  var a,
    e,
    n,
    c,
    o,
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
    (l.O = (e, n, c, o) => {
      if (!n) {
        var i = 1 / 0;
        for (r = 0; r < a.length; r++) {
          for (var [n, c, o] = a[r], d = !0, s = 0; s < n.length; s++)
            (!1 & o || i >= o) && Object.keys(l.O).every((a) => l.O[a](n[s]))
              ? n.splice(s--, 1)
              : ((d = !1), o < i && (i = o));
          if (d) {
            a.splice(r--, 1);
            var t = c();
            void 0 !== t && (e = t);
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
      for (var d = 2 & c && a; "object" == typeof d && !~e.indexOf(d); d = n(d))
        Object.getOwnPropertyNames(d).forEach((e) => (i[e] = () => a[e]));
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
        27: "cf6a2b2287ec26d7041b",
        113: "82068af22e9f6dee8a1f",
        131: "62f0de8090c621b1c573",
        238: "602fa14425f0a94b78d2",
        301: "0029fdf75c324b6abc00",
        312: "b31e53df3fc7939ae3f2",
        400: "06b614b734b299afff7b",
        483: "907cad1b54523b898ad8",
        508: "b31048d13be1ccd09b52",
        543: "4e0d9a4c58bb010e3962",
        617: "50f8a8d3c6339cf76060",
        755: "b3ab6a581ba6c0c6bc71",
        867: "dbe91ddb7c79254d2561",
        908: "e98b6c7c3d251cd625b6",
        960: "2ba80e49777122c3b3e5",
        961: "b90a5fd895bde720cd5d",
        1133: "63d62d7c55ea0b2b1a76",
        1195: "c1100d88a4fc211271ef",
        1261: "d7b6a83a111b81d0ff82",
        1311: "5aee132daf477be3d3f7",
        1338: "32e379439443e2baae77",
        1546: "373b1004bda451d14835",
        1579: "95c18a4a678f11767403",
        1649: "43dc585e2695e935f94d",
        1953: "e52926312a7fbab57853",
        2136: "0cf83319d3f1c3b25090",
        2138: "3cb39f2ab48175919b61",
        2235: "5e19f9722514ddd4aa79",
        2329: "92df9a8c2ac13eb62e53",
        2351: "8512fc373b86281d1b7a",
        2373: "1d92fe3fa4106bd9e23d",
        2449: "b605f71cf95640dadac6",
        2468: "01a7256b1e385cfbb255",
        2530: "3ab1c941ed523d6ff7f6",
        2557: "16de437546f103e286f1",
        2723: "ec0b9d6f6a68877c37b3",
        2738: "3f7cb163efca2a0a3b65",
        2745: "0ee183cfc2149c5db2ea",
        2805: "c734c9ac67443bba55df",
        2822: "d88be22d78fb91f6ef2a",
        2832: "23866f3fb07e9697efca",
        3007: "0417ecf74a90e0dd358c",
        3038: "70bdcad0ba4b5f23521d",
        3202: "681dd766d6f76eab509a",
        3298: "2d585cf6874724a9f37a",
        3352: "0f24791c09bc74a3d0c0",
        3499: "cd5c85ee9dd4e29bf1a8",
        3591: "343be32681285e3fcc20",
        3602: "65937801072d6c53ef2f",
        3742: "b6e83ff0f1502132ce42",
        3903: "2c948c8879a55090886a",
        4097: "ae94828afbadca6c280a",
        4183: "8b48eb1a91a09b1b6c2d",
        4293: "48bc6d7ac09918355a2c",
        4358: "40b3bb9f248f9ed15809",
        4445: "a5ece4f5137ee053fd27",
        4469: "8d1560432a8bee694c9a",
        4487: "7c4e806f40eac314dd46",
        4513: "c8f6b937a140fc92e46a",
        4535: "2ff101a8181d8800d98d",
        4601: "4e8ce179db90e5c158c5",
        4729: "b775dc72ff115a943295",
        4819: "561596dd0468ff6599a3",
        4979: "e59f81b62f899ae24461",
        5012: "6e74f3805d4d7d9ed9ef",
        5119: "c2dd981024a7e830f1f9",
        5277: "f9bb30d027e22e2c99d5",
        5279: "914cd2808a644d80c7bc",
        5436: "a7f37344563b6131cc1b",
        5439: "16baa12ec54daa8ded6a",
        5493: "99a665bb14d74f8b33c4",
        5494: "d2b1888623dfa560881e",
        5503: "e7cc38e329e7869afce7",
        5757: "6e6ed378d7217bc7e20f",
        6091: "8b705da57e21a60658f8",
        6148: "5aca2d35a443fd3058d9",
        6272: "32e59695ee2f53d2b439",
        6403: "42f20ec1eb44e3c3145e",
        6415: "d6b12d06c7347b003826",
        6457: "9042955d9592926b02fb",
        6588: "f25524c9f86bd49a56bf",
        6658: "4a7e1d51e3bfbdc6bb6c",
        6715: "c66a5d57898996692d39",
        6844: "8bca05f1d3ea0492aac6",
        6845: "7d5f17dc83d3c9a08404",
        6932: "c414c1108810bdbb9dc2",
        6962: "c67beef703055f457f52",
        7629: "fd514a8f4d435ae82721",
        7660: "e7b0732f0b144469ea9c",
        7769: "596aa5c5f2fe372c10fe",
        7781: "fbacaa762ae87c55a4a7",
        7832: "6d3214c50ca68865f871",
        7901: "a05e5f2b627b995f731e",
        7924: "0a1a9915d2b653c09d08",
        7942: "81084dd4dee502ad6805",
        7948: "c4a3020d5ea2a81531c5",
        7971: "78ba4acfa7cc2afac067",
        8085: "befcc7e3e116471d49ee",
        8120: "0df8d2f3a24a680ed1cb",
        8274: "e52032b393916562cbb5",
        8282: "629f1911b1052baceb2a",
        8291: "33b0fa289710177282d8",
        8427: "4fb3e604eb384db3dab8",
        8433: "a802b38f2587a9c21faf",
        8525: "8be2d1969399708c7638",
        8592: "c62ab280f588dc423964",
        8647: "685f5b04d7debb628eb5",
        8691: "fa98932a974e7e1e1738",
        8805: "9bd27977cf06daabeefd",
        8931: "254a320c81180e71971f",
        9167: "755d0caa14214610e6c8",
        9233: "8d70c0916885a854577f",
        9316: "b6a1989ad55461b11487",
        9348: "81c7e8c04ea18a7aea9d",
        9349: "ee9d29e8ea7c3da0f4d8",
        9389: "b9f9911550161883a3b5",
        9427: "3de4598f3199359906c5",
        9513: "d54d09dc14a67f547e35",
        9547: "d8aa63f459e25e20fcbc",
        9561: "071acbbbe0c1be0ee1d0",
        9665: "1ad7709b90712d1f2d77",
        9828: "8ed68f19e5dcdc5e6b8e",
        9854: "5fdc2bb09af2373edd4e",
        9888: "36f847c077671e8c11b3",
        9949: "ce7523a341f712356abb",
        9951: "ff39ea55d848ea549cb5",
        9991: "e711b8ec50b99f7bbdc0",
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
        238: "82877e2cea30622a4345",
        312: "9e6bee6632888a265236",
        400: "e3305a60b4fbcf773c76",
        508: "7149ffbb1bac621a9776",
        908: "402d6864700943e3ed5f",
        2136: "7677775ce82ff87c079e",
        2329: "a969564f4cdabf0c473e",
        2449: "09ebfdd2029ce702cbd4",
        2530: "d54c8cc0a53b142b9410",
        3352: "f3838685918d3c88bdc3",
        3499: "f66814af59f83abee010",
        3903: "63ce6cc1c087a1b4a29e",
        4535: "120ef11d3786830c5571",
        4601: "1504f12b9d914fea5e36",
        5436: "6eca1d3524672f585c5a",
        6272: "678fe918c1d2ea231e5d",
        6845: "2de68e17d9aa59088a8f",
        8647: "413bbe35d505feb2a7be",
        8931: "d0a98eba76910e819b25",
        9348: "c20b4ecb9d29788b8735",
        9349: "f4977652404f75e5d337",
        9949: "f3849ce27e3d0383bd29",
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
              f.getAttribute("data-webpack") == o + n
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
          d.setAttribute("data-webpack", o + n),
          (d.src = a)),
          (c[a] = [e]);
        var b = (e, n) => {
            (d.onerror = d.onload = null), clearTimeout(h);
            var o = c[a];
            if (
              (delete c[a],
              d.parentNode && d.parentNode.removeChild(d),
              o && o.forEach((a) => a(n)),
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
                (d = n[c]).getAttribute("data-href") || d.getAttribute("href");
              if ("stylesheet" === d.rel && (o === a || o === e)) return d;
            }
            var i = document.getElementsByTagName("style");
            for (c = 0; c < i.length; c++) {
              var d;
              if ((o = (d = i[c]).getAttribute("data-href")) === a || o === e)
                return d;
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
                  var d = i && ("load" === i.type ? "missing" : i.type),
                    s = (i && i.target && i.target.href) || e,
                    t = new Error(
                      "Loading CSS chunk " + a + " failed.\n(" + s + ")"
                    );
                  (t.code = "CSS_CHUNK_LOAD_FAILED"),
                    (t.type = d),
                    (t.request = s),
                    o.parentNode.removeChild(o),
                    c(t);
                }
              }),
            (o.href = e),
            document.head.appendChild(o);
        })(a, o, e, n);
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
        var c = l.o(a, e) ? a[e] : void 0;
        if (0 !== c)
          if (c) n.push(c[2]);
          else if (6700 != e) {
            var o = new Promise((n, o) => (c = a[e] = [n, o]));
            n.push((c[2] = o));
            var i = l.p + l.u(e),
              d = new Error();
            l.l(
              i,
              (n) => {
                if (l.o(a, e) && (0 !== (c = a[e]) && (a[e] = void 0), c)) {
                  var o = n && ("load" === n.type ? "missing" : n.type),
                    i = n && n.target && n.target.src;
                  (d.message =
                    "Loading chunk " + e + " failed.\n(" + o + ": " + i + ")"),
                    (d.name = "ChunkLoadError"),
                    (d.type = o),
                    (d.request = i),
                    c[1](d);
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
            [i, d, s] = n,
            t = 0;
          if (i.some((e) => 0 !== a[e])) {
            for (c in d) l.o(d, c) && (l.m[c] = d[c]);
            if (s) var r = s(l);
          }
          for (e && e(n); t < i.length; t++)
            (o = i[t]), l.o(a, o) && a[o] && a[o][0](), (a[o] = 0);
          return l.O(r);
        },
        n = (self.webpackChunkcommunity = self.webpackChunkcommunity || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();
