/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7855643";
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
    d = {};
  function l(a) {
    var e = d[a];
    if (void 0 !== e) return e.exports;
    var n = (d[a] = { id: a, loaded: !1, exports: {} });
    return t[a].call(n.exports, n, n.exports, l), (n.loaded = !0), n.exports;
  }
  (l.m = t),
    (a = []),
    (l.O = (e, n, o, i) => {
      if (!n) {
        var c = 1 / 0;
        for (r = 0; r < a.length; r++) {
          for (var [n, o, i] = a[r], s = !0, t = 0; t < n.length; t++)
            (!1 & i || c >= i) && Object.keys(l.O).every((a) => l.O[a](n[t]))
              ? n.splice(t--, 1)
              : ((s = !1), i < c && (c = i));
          if (s) {
            a.splice(r--, 1);
            var d = o();
            void 0 !== d && (e = d);
          }
        }
        return e;
      }
      i = i || 0;
      for (var r = a.length; r > 0 && a[r - 1][2] > i; r--) a[r] = a[r - 1];
      a[r] = [n, o, i];
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
      var i = Object.create(null);
      l.r(i);
      var c = {};
      e = e || [null, n({}), n([]), n(n)];
      for (var s = 2 & o && a; "object" == typeof s && !~e.indexOf(s); s = n(s))
        Object.getOwnPropertyNames(s).forEach((e) => (c[e] = () => a[e]));
      return (c.default = () => a), l.d(i, c), i;
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
        113: "cdced8b6d8252da3491f",
        131: "c26b733b439b90c93a4b",
        238: "602fa14425f0a94b78d2",
        301: "3e074fc977c0612db7cf",
        312: "b31e53df3fc7939ae3f2",
        400: "c72d58646bd81ab56ae8",
        483: "907cad1b54523b898ad8",
        508: "b4a34042c0e5c7dd8f8e",
        543: "4e0d9a4c58bb010e3962",
        617: "c86ba69900cd9406fbef",
        755: "f82319b2809b98f7c75b",
        867: "dbe91ddb7c79254d2561",
        908: "e98b6c7c3d251cd625b6",
        960: "2ba80e49777122c3b3e5",
        961: "b90a5fd895bde720cd5d",
        1133: "68c2fb4a03b18dcdd613",
        1195: "c1100d88a4fc211271ef",
        1261: "8c168c52fdd69a0abd5c",
        1311: "ed070c6a0df09d6c55a9",
        1338: "16d870c3ef568bc48f6c",
        1546: "373b1004bda451d14835",
        1579: "95c18a4a678f11767403",
        1649: "b375aba68a84d800ced5",
        1953: "0298b7cad089b8938db7",
        2136: "e7bd601d20e996b0ef78",
        2138: "3cb39f2ab48175919b61",
        2235: "5e19f9722514ddd4aa79",
        2329: "92df9a8c2ac13eb62e53",
        2351: "8512fc373b86281d1b7a",
        2373: "1d92fe3fa4106bd9e23d",
        2449: "bcdfa952f47dc7a17f89",
        2468: "01a7256b1e385cfbb255",
        2530: "a14c991f00e3442b7dd8",
        2557: "16de437546f103e286f1",
        2723: "ec0b9d6f6a68877c37b3",
        2738: "017d6a3e106135f215c9",
        2745: "0ee183cfc2149c5db2ea",
        2805: "fbb684385ef7bd141c04",
        2822: "e1c59d49bbc55808a27a",
        2832: "d0a98858af902da4bee3",
        3007: "0417ecf74a90e0dd358c",
        3038: "70bdcad0ba4b5f23521d",
        3202: "681dd766d6f76eab509a",
        3298: "d8e850c55b97296b4c44",
        3352: "e1e4138231ea4bf71063",
        3499: "ab08222d2f2b210fe821",
        3591: "32fc4fbf93470117fd1d",
        3602: "65937801072d6c53ef2f",
        3742: "b6e83ff0f1502132ce42",
        3903: "b151edffcc8aed19aaae",
        4097: "1ec8bfa4fa483dcc324f",
        4183: "f56f0da46d8350c2867c",
        4293: "48bc6d7ac09918355a2c",
        4358: "40b3bb9f248f9ed15809",
        4445: "35e46fe25af75d7677f6",
        4469: "58644b17fd64fab30e50",
        4487: "064a694a314858708bfe",
        4513: "f347a4fa577ea3ce0bae",
        4535: "2ff101a8181d8800d98d",
        4601: "4e8ce179db90e5c158c5",
        4729: "b775dc72ff115a943295",
        4819: "561596dd0468ff6599a3",
        4979: "e59f81b62f899ae24461",
        5012: "c2d84b6f99cf1737ab8b",
        5119: "2eff0b7b5663bc2daad4",
        5277: "216e0c2d3a9fb6b17163",
        5279: "eeca5bcca5a3ce0fba6f",
        5436: "1499cdd88c8621aedcf5",
        5439: "16baa12ec54daa8ded6a",
        5493: "99a665bb14d74f8b33c4",
        5494: "d2b1888623dfa560881e",
        5503: "1e51659e556bdc3e1a4f",
        5757: "5ae63a87a84e1d3788a2",
        6091: "3a412481595f6e80503a",
        6148: "5aca2d35a443fd3058d9",
        6272: "1528ec79501d04c0c0ce",
        6403: "485e3ce5f44f1fbe8bf5",
        6415: "dc72efbd48b8d0a5cbdb",
        6457: "c0cbf43b3a0daeb8a410",
        6588: "f25524c9f86bd49a56bf",
        6658: "4a7e1d51e3bfbdc6bb6c",
        6715: "c66a5d57898996692d39",
        6844: "8bca05f1d3ea0492aac6",
        6845: "9d4d211243e0f8a73cb9",
        6932: "c414c1108810bdbb9dc2",
        6962: "c67beef703055f457f52",
        7629: "64654ca908c04156684a",
        7660: "f4ca525ab0cf02112eb5",
        7769: "5e852243c8fc1f577f54",
        7781: "2bba607a36407490bff3",
        7832: "6d3214c50ca68865f871",
        7901: "57fbe72315d5b5d3fb6c",
        7924: "0a1a9915d2b653c09d08",
        7942: "81084dd4dee502ad6805",
        7948: "c4a3020d5ea2a81531c5",
        7971: "78ba4acfa7cc2afac067",
        8085: "0f0ec346d393abead9a2",
        8120: "c638a653de0d341d83a6",
        8274: "8ddaff6f4ddb5fcf74b2",
        8282: "a4ba44dc14a7685cd3ec",
        8291: "33b0fa289710177282d8",
        8427: "836f1ea03e158f4066a8",
        8433: "db793a558f147a98967c",
        8525: "a7482f6c64611297b91a",
        8592: "c62ab280f588dc423964",
        8647: "899c4ff232d85e04d8b4",
        8691: "fa98932a974e7e1e1738",
        8805: "9bd27977cf06daabeefd",
        8931: "9bfa4ff13f668425d529",
        9167: "755d0caa14214610e6c8",
        9233: "8d70c0916885a854577f",
        9316: "b6a1989ad55461b11487",
        9348: "6c4f854ad81e389227b3",
        9349: "2c1ac0e9373cec67d15e",
        9389: "b9f9911550161883a3b5",
        9427: "22362d391ef074612e47",
        9513: "d54d09dc14a67f547e35",
        9547: "d8aa63f459e25e20fcbc",
        9561: "071acbbbe0c1be0ee1d0",
        9665: "50b6889685f9d372f206",
        9828: "8ed68f19e5dcdc5e6b8e",
        9854: "cbf5f7dfd4c62fab2311",
        9888: "36f847c077671e8c11b3",
        9949: "bfb8bec765f07da3e66f",
        9951: "c237ff9c908ebff5ac88",
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
        508: "376b1196172079ce8f6d",
        908: "402d6864700943e3ed5f",
        2136: "1769f681321895bfc0bd",
        2329: "a969564f4cdabf0c473e",
        2449: "d84215f3c534ffcc83c6",
        2530: "d54c8cc0a53b142b9410",
        3352: "f3838685918d3c88bdc3",
        3499: "f66814af59f83abee010",
        3903: "49b9cc1b75bedaaa2cec",
        4535: "120ef11d3786830c5571",
        4601: "1504f12b9d914fea5e36",
        5436: "6889a14aa7d56b2157f2",
        6272: "678fe918c1d2ea231e5d",
        6845: "f8508c18d3dccac3764e",
        8647: "2aa199fdf547121332be",
        8931: "1c12a687eb106bb5f9c5",
        9348: "a05475efd1e517cb4c6e",
        9349: "f4977652404f75e5d337",
        9949: "2177eebe2077a216ca9e",
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
    (i = "community:"),
    (l.l = (a, e, n, c) => {
      if (o[a]) o[a].push(e);
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
          l.nc && s.setAttribute("nonce", l.nc),
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
    (c = (a) =>
      new Promise((e, n) => {
        var o = l.miniCssF(a),
          i = l.p + o;
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
                    d = new Error(
                      "Loading CSS chunk " + a + " failed.\n(" + t + ")"
                    );
                  (d.code = "CSS_CHUNK_LOAD_FAILED"),
                    (d.type = s),
                    (d.request = t),
                    i.parentNode.removeChild(i),
                    o(d);
                }
              }),
            (i.href = e),
            document.head.appendChild(i);
        })(a, i, e, n);
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
      (l.f.j = (e, n) => {
        var o = l.o(a, e) ? a[e] : void 0;
        if (0 !== o)
          if (o) n.push(o[2]);
          else if (6700 != e) {
            var i = new Promise((n, i) => (o = a[e] = [n, i]));
            n.push((o[2] = i));
            var c = l.p + l.u(e),
              s = new Error();
            l.l(
              c,
              (n) => {
                if (l.o(a, e) && (0 !== (o = a[e]) && (a[e] = void 0), o)) {
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
        (l.O.j = (e) => 0 === a[e]);
      var e = (e, n) => {
          var o,
            i,
            [c, s, t] = n,
            d = 0;
          if (c.some((e) => 0 !== a[e])) {
            for (o in s) l.o(s, o) && (l.m[o] = s[o]);
            if (t) var r = t(l);
          }
          for (e && e(n); d < c.length; d++)
            (i = c[d]), l.o(a, i) && a[i] && a[i][0](), (a[i] = 0);
          return l.O(r);
        },
        n = (self.webpackChunkcommunity = self.webpackChunkcommunity || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();
