/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7867462";
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
        27: "c02a982c61ecc5a5a108",
        113: "af0001efeebf13b2c7d7",
        131: "16bdb1f8fb68ef2d66ec",
        238: "602fa14425f0a94b78d2",
        301: "6ad436bc09a1daf27f4b",
        312: "b31e53df3fc7939ae3f2",
        400: "44876dd7a33fe5f96898",
        483: "907cad1b54523b898ad8",
        508: "2cdafef4b019ddf48b4b",
        543: "4e0d9a4c58bb010e3962",
        617: "c86ba69900cd9406fbef",
        755: "5333c72d1a3eef781f76",
        867: "dbe91ddb7c79254d2561",
        908: "e98b6c7c3d251cd625b6",
        960: "2ba80e49777122c3b3e5",
        961: "b90a5fd895bde720cd5d",
        1133: "84334990dbb21abd6e03",
        1195: "284970bf1a4bdaf455fd",
        1261: "74036d6bef30e5d682e8",
        1311: "df22915d33a22359b6b3",
        1338: "7e2b978d0f1c4573a2fa",
        1546: "373b1004bda451d14835",
        1579: "ecc243ec41e04b416136",
        1649: "30c64d18680888e6bf00",
        1953: "a2d890895da41e53d9fd",
        2136: "e7bd601d20e996b0ef78",
        2138: "cba24820a76590df7e15",
        2235: "5e19f9722514ddd4aa79",
        2329: "92df9a8c2ac13eb62e53",
        2351: "3dc757473791f0b88d38",
        2373: "1d92fe3fa4106bd9e23d",
        2449: "bcdfa952f47dc7a17f89",
        2468: "01a7256b1e385cfbb255",
        2530: "d89c7bf2771bef4007d3",
        2557: "841894b3dd5ee0213aff",
        2723: "ec0b9d6f6a68877c37b3",
        2738: "6185d6f1c19982f19795",
        2745: "0ee183cfc2149c5db2ea",
        2805: "fbb684385ef7bd141c04",
        2822: "aa36d44a16b12e26da99",
        2832: "d0a98858af902da4bee3",
        3007: "0417ecf74a90e0dd358c",
        3038: "6ac5d030fe0b70fae11e",
        3202: "681dd766d6f76eab509a",
        3298: "ae561de3ea7436a4f234",
        3352: "e1e4138231ea4bf71063",
        3499: "ab08222d2f2b210fe821",
        3591: "32fc4fbf93470117fd1d",
        3602: "97ce17690c3989003731",
        3742: "b6e83ff0f1502132ce42",
        3903: "25e3390be285fbd9fbcb",
        4097: "ea27ac43eefd2c2c42db",
        4183: "bbf955d1b3e7233d7964",
        4293: "48bc6d7ac09918355a2c",
        4358: "40b3bb9f248f9ed15809",
        4445: "59e97fbc0354fbbe8b71",
        4469: "c4173022b91bc2967cdc",
        4487: "e29da7ae82386181a430",
        4513: "18fbc8b751e197890b04",
        4535: "2ff101a8181d8800d98d",
        4601: "4e8ce179db90e5c158c5",
        4729: "0e74dc717eb3a8c3e4c1",
        4819: "561596dd0468ff6599a3",
        4979: "e59f81b62f899ae24461",
        5012: "3b0dd354a4d739b88552",
        5119: "2eff0b7b5663bc2daad4",
        5277: "cb39b54364230da4f5f6",
        5279: "95354b09c36151e352f4",
        5436: "1499cdd88c8621aedcf5",
        5439: "16baa12ec54daa8ded6a",
        5493: "f76d04f80413fd785342",
        5494: "d2b1888623dfa560881e",
        5503: "1e51659e556bdc3e1a4f",
        5757: "5ae63a87a84e1d3788a2",
        6091: "f4067b43ff5468dbb621",
        6148: "5aca2d35a443fd3058d9",
        6272: "1528ec79501d04c0c0ce",
        6403: "ce2e0d859c6b3aa4d86d",
        6415: "e91ebcdea718a50c30f7",
        6457: "c0cbf43b3a0daeb8a410",
        6588: "f25524c9f86bd49a56bf",
        6658: "4a7e1d51e3bfbdc6bb6c",
        6715: "c66a5d57898996692d39",
        6844: "d631a31e7a3ea5f29bf4",
        6845: "9d4d211243e0f8a73cb9",
        6932: "c414c1108810bdbb9dc2",
        6962: "454ace3fd24afdbf728b",
        7629: "64654ca908c04156684a",
        7660: "d07cfbea26230cbe7d0e",
        7769: "794c1d62c649cf076a94",
        7781: "21aa050290ec59f7e598",
        7832: "6d3214c50ca68865f871",
        7901: "7eb343015dfd8c4e2fc9",
        7924: "0a1a9915d2b653c09d08",
        7942: "81084dd4dee502ad6805",
        7948: "c4a3020d5ea2a81531c5",
        7971: "78ba4acfa7cc2afac067",
        8085: "8fb6afc6f736a52ef18d",
        8120: "092b862bbd81d4ce33df",
        8274: "201b4187bccf186bfc0e",
        8282: "d1febaf5863321febee9",
        8291: "1c0667031aa2a8a5c392",
        8427: "4486e149b4fb4862f045",
        8433: "d09822b39474cc452dfc",
        8525: "cee1ce6163169aabf6da",
        8592: "914c619ee0811b1d7ee1",
        8647: "899c4ff232d85e04d8b4",
        8691: "fa98932a974e7e1e1738",
        8805: "9bd27977cf06daabeefd",
        8931: "2af22757abc5682c2bf9",
        9167: "755d0caa14214610e6c8",
        9233: "2feb98ced5b26979d42f",
        9316: "b6a1989ad55461b11487",
        9348: "6c4f854ad81e389227b3",
        9349: "2c1ac0e9373cec67d15e",
        9389: "b9f9911550161883a3b5",
        9427: "cd475ec5c728eb8f117d",
        9513: "d54d09dc14a67f547e35",
        9547: "ed335baead824e171ba9",
        9561: "071acbbbe0c1be0ee1d0",
        9665: "c123608e0079c0a903d6",
        9828: "8ed68f19e5dcdc5e6b8e",
        9854: "6d5c2223d00f1460039a",
        9888: "36f847c077671e8c11b3",
        9949: "bbe97b9789a8b190a2f0",
        9951: "1c0ba2ff262c4dd050a3",
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
        238: "79836382da32727b53de",
        312: "9e6bee6632888a265236",
        400: "e5c978046874d13878f0",
        508: "dc1ee18e19a39f801f34",
        908: "62ba4449135e3d029a52",
        2136: "1769f681321895bfc0bd",
        2329: "a969564f4cdabf0c473e",
        2449: "d84215f3c534ffcc83c6",
        2530: "a0d7506ac4d5d7474b56",
        3352: "f3838685918d3c88bdc3",
        3499: "f66814af59f83abee010",
        3903: "8ed9809af17bef038ddd",
        4535: "120ef11d3786830c5571",
        4601: "1504f12b9d914fea5e36",
        5436: "6889a14aa7d56b2157f2",
        6272: "dc19848d555f88d53c2e",
        6845: "f8508c18d3dccac3764e",
        8647: "2aa199fdf547121332be",
        8931: "6afdb5336bc897f13717",
        9348: "a05475efd1e517cb4c6e",
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
