/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7441542";
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
  function r(a) {
    var e = l[a];
    if (void 0 !== e) return e.exports;
    var n = (l[a] = { id: a, loaded: !1, exports: {} });
    return t[a].call(n.exports, n, n.exports, r), (n.loaded = !0), n.exports;
  }
  (r.m = t),
    (a = []),
    (r.O = (e, n, o, i) => {
      if (!n) {
        var c = 1 / 0;
        for (d = 0; d < a.length; d++) {
          for (var [n, o, i] = a[d], s = !0, t = 0; t < n.length; t++)
            (!1 & i || c >= i) && Object.keys(r.O).every((a) => r.O[a](n[t]))
              ? n.splice(t--, 1)
              : ((s = !1), i < c && (c = i));
          if (s) {
            a.splice(d--, 1);
            var l = o();
            void 0 !== l && (e = l);
          }
        }
        return e;
      }
      i = i || 0;
      for (var d = a.length; d > 0 && a[d - 1][2] > i; d--) a[d] = a[d - 1];
      a[d] = [n, o, i];
    }),
    (r.n = (a) => {
      var e = a && a.__esModule ? () => a.default : () => a;
      return r.d(e, { a: e }), e;
    }),
    (n = Object.getPrototypeOf
      ? (a) => Object.getPrototypeOf(a)
      : (a) => a.__proto__),
    (r.t = function (a, o) {
      if ((1 & o && (a = this(a)), 8 & o)) return a;
      if ("object" == typeof a && a) {
        if (4 & o && a.__esModule) return a;
        if (16 & o && "function" == typeof a.then) return a;
      }
      var i = Object.create(null);
      r.r(i);
      var c = {};
      e = e || [null, n({}), n([]), n(n)];
      for (var s = 2 & o && a; "object" == typeof s && !~e.indexOf(s); s = n(s))
        Object.getOwnPropertyNames(s).forEach((e) => (c[e] = () => a[e]));
      return (c.default = () => a), r.d(i, c), i;
    }),
    (r.d = (a, e) => {
      for (var n in e)
        r.o(e, n) &&
          !r.o(a, n) &&
          Object.defineProperty(a, n, { enumerable: !0, get: e[n] });
    }),
    (r.f = {}),
    (r.e = (a) =>
      Promise.all(Object.keys(r.f).reduce((e, n) => (r.f[n](a, e), e), []))),
    (r.u = (a) =>
      "javascript/applications/community/" +
      {
        27: "localization/shared_japanese-json",
        113: "localization/main_romanian-json",
        131: "localization/shared_english-json",
        238: "communityawardsapp",
        301: "localization/main_russian-json",
        400: "chunk~b1f9f17fd",
        508: "chunk~d2dd7ecf6",
        543: "libraries~9dbf41906",
        617: "localization/main_portuguese-json",
        648: "chunk~75a560490",
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
        1953: "localization/shared_finnish-json",
        2136: "events",
        2138: "localization/shared_thai-json",
        2235: "localization/sales_french-json",
        2329: "avatarcrop",
        2351: "localization/main_swedish-json",
        2373: "localization/sales_schinese-json",
        2449: "chunk~7a7b104fb",
        2468: "libraries~d2dd7ecf6",
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
        3973: "chunk~4e3b43bb2",
        4097: "localization/shared_spanish-json",
        4183: "localization/shared_danish-json",
        4264: "libraries~7bb437d7f",
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
        5253: "chunk~7bb437d7f",
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
        6437: "libraries~215b3e016",
        6457: "localization/main_turkish-json",
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
        7971: "localization/sales_greek-json",
        8075: "chunk~ef79a82b3",
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
        8919: "chunk~215b3e016",
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
        9951: "localization/shared_latam-json",
        9991: "localization/sales_japanese-json",
      }[a] +
      ".js?contenthash=" +
      {
        27: "e9678cd2e7d262cffee4",
        113: "6eaeb40ce63d8c4b2603",
        131: "410c5842138deee7d345",
        238: "5711d8e8dd2f2351048d",
        301: "a10133e1ffc300901ceb",
        400: "c949cd6f0bddd622778c",
        508: "d8433c319d08098323c7",
        543: "7e04eee5a698b6b9ff11",
        617: "2e1cb1d28a88542b437d",
        648: "f1cc286fb5c4f89f566d",
        755: "92b4ea7dba1082c9f605",
        867: "e4aaa649779c61def34f",
        908: "982b9c0df58eb5f5ec7e",
        960: "9177f9bc01e55bfbf2d5",
        961: "d169ed195c760bf5472d",
        1133: "0c48b89bfb283e899792",
        1195: "2b634297a8f119466147",
        1261: "4b5a5863c2ee7c1f3af1",
        1311: "c07668ee6491ae52333f",
        1546: "828e9c360f07290c4b9a",
        1579: "55ede06a1ac28c58f830",
        1649: "926bbc6e032196554958",
        1953: "ceded9ab70c802d3ff27",
        2136: "3dba7c253b650a08d039",
        2138: "c8053d9ab89a179ed0bf",
        2235: "a11ab5954e08def42348",
        2329: "cd3c1b3a4d5d92ff9833",
        2351: "4a05232526641204a8cd",
        2373: "06251fd1a88d5e5852c4",
        2449: "0c23003fe314162e0cfc",
        2468: "7b16ed9b4d04c09c06d9",
        2557: "c83bd7a037e78fe54c1c",
        2723: "3774ba2b4701e88c8211",
        2738: "cddf39f0b627eca6ebed",
        2745: "0c6e64566e4b3c90d95b",
        2805: "d4e80d104d9879a7a501",
        2822: "ac27f7909f9691f17f4e",
        2832: "617b07c11678f92935a2",
        3007: "a34481d10a48c32d3923",
        3038: "fd127e6f506eff034e23",
        3202: "19d060b19bc21838d625",
        3298: "3e035a6f94ad78b84996",
        3352: "adea7d70d77c3a7d9caf",
        3499: "873bf424121848c7faea",
        3591: "b331668b0087b88c9c88",
        3602: "f77daa70dbd39d9e7555",
        3742: "fd48459ac5575f0058a0",
        3973: "4bc0ea24337a1d8ac251",
        4097: "ee77e209e6963ffaf1d6",
        4183: "f6688f322ca0656e68f7",
        4264: "15461a535d2ba266df46",
        4293: "9a8be31db0af4246a123",
        4358: "ab4fca0749ec52b5513a",
        4445: "4457125c5ead93fbd01f",
        4469: "d048a5716a87f90438d3",
        4487: "81aa5f9e8e0edf7feb57",
        4513: "c1f1d54a9515f78c9c07",
        4535: "4d8f997ceab6af185280",
        4601: "33af4daeb70b8019f581",
        4729: "52ef0b57c7ab80b69296",
        4819: "9fd6da0552df7f5a3d2a",
        4979: "16e78d33b1473245cc37",
        5012: "0f305762ddf024864b5b",
        5253: "efc6583d86b9abb0f6a1",
        5277: "5534404231afdc642cab",
        5279: "35414203e7d47983db92",
        5436: "a968dca1fa240affc182",
        5439: "ab8938bd06fb93a8566c",
        5493: "484f8b3d8ac83e0f6182",
        5494: "2897c946bb61da3dd35b",
        5503: "0ed2342c4194bb65bf7c",
        5757: "346769714da01323dd67",
        6091: "4abbe9703313b9b0afdc",
        6148: "5aca2d35a443fd3058d9",
        6272: "04e4b2c7a3be4e5d73eb",
        6403: "16b7a54408e5172c2ba4",
        6415: "0a46485c70e36051d99e",
        6437: "caa49d3d01d07f13aeea",
        6457: "cda6e979eaf375200ac7",
        6656: "0feae8ebcbb7d0260166",
        6658: "80a98b3f2c0d35a00a06",
        6715: "ab5337832d5eb8f1f322",
        6844: "de8b8a7d18ccc0ef7967",
        6845: "027525f7bd4f5cd1adbc",
        6932: "334e1af9e40ee3dad97d",
        6962: "11fc9e13ca0d2aaa3f6c",
        7629: "e89d24e1d0629f0b20fb",
        7660: "51de502d62eb86722c27",
        7769: "85cbf157c92e0032b346",
        7781: "c02297e3c21668c66066",
        7832: "6d3214c50ca68865f871",
        7901: "43fc7f63141791d862d5",
        7924: "364f693b5dbac8eb7fdd",
        7971: "c5f36b8b1ee8cffc56cb",
        8075: "e1cc6d08d7e3072f7df0",
        8085: "f5592f3021baf7c9bbcb",
        8120: "94cb56ccb78dcbb6f3cb",
        8274: "d6bc0a73cae33e2a7bb4",
        8282: "250dd4a1764adaeeb446",
        8291: "c01b32ca261097b993fe",
        8427: "ceea80359be4f33acd27",
        8433: "cef95144a19bb7e2b032",
        8525: "65705223f4c303484b0b",
        8592: "08daefc7841bea341d76",
        8647: "3fe2b5e20eecb9ced5b0",
        8691: "9422b45f35c587cbb992",
        8805: "19027c3be0c0cbf16553",
        8919: "16c2adcff09ace66c159",
        9167: "7b02d5ac7b50aa12061d",
        9233: "f8c0f3d81871caee65ec",
        9316: "66488a79dddc2a6878ea",
        9348: "baab066db3be1e4787c1",
        9349: "240e6597757e40cb0da2",
        9389: "1b449809720727b39ad7",
        9427: "61d649c43e176cd6d990",
        9513: "608ab4189971f6b78e5e",
        9547: "ffccae9301a93045cc20",
        9561: "eaa6fe2cc381f1f30034",
        9665: "fb9594adda2384fd3714",
        9828: "220d8afe7210f42ba6ac",
        9854: "7ead834eb04db9ff5075",
        9888: "2a883fbb25478d5822da",
        9951: "33fa9c8f8b5971824f59",
        9991: "dec68400ee17f6b34ffd",
      }[a]),
    (r.miniCssF = (a) =>
      "css/applications/community/" +
      {
        238: "communityawardsapp",
        400: "chunk~b1f9f17fd",
        508: "chunk~d2dd7ecf6",
        908: "qanda",
        2136: "events",
        2329: "avatarcrop",
        2449: "chunk~7a7b104fb",
        3352: "eventinternal",
        3499: "communityfaqs",
        4535: "login",
        4601: "broadcast",
        5253: "chunk~7bb437d7f",
        5436: "broadcasts",
        6272: "conference",
        6845: "profile",
        8075: "chunk~ef79a82b3",
        8647: "managefriends",
        9348: "chunk~69438e232",
        9349: "eventeditor",
        9427: "chunk~642602239",
      }[a] +
      ".css?contenthash=" +
      {
        238: "e083c44bb9e2d8c48b8a",
        400: "51f4ebba47e8db1c1a5f",
        508: "d2d728d74b6983f2d90d",
        908: "402d6864700943e3ed5f",
        2136: "7677775ce82ff87c079e",
        2329: "70358f02752594d6bf7b",
        2449: "aed4ab547a855c0e198a",
        3352: "f3838685918d3c88bdc3",
        3499: "ceabdd14fa2e8fac8cdf",
        4535: "464113da269650e2606f",
        4601: "9b8e574ef6a72e938356",
        5253: "e15c2ae2dd4512ac67bd",
        5436: "c25a8db9a3612a1fdedf",
        6272: "954c6394281de3d83a5a",
        6845: "3f3faaebf755f0c5e867",
        8075: "e278623e0b624d88ef46",
        8647: "9b9437de3540a73e72d6",
        9348: "877859e7586600234bec",
        9349: "051a518f3e92dd04dbcc",
        9427: "396ab1d8a88176982783",
      }[a]),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (a) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.o = (a, e) => Object.prototype.hasOwnProperty.call(a, e)),
    (o = {}),
    (i = "community:"),
    (r.l = (a, e, n, c) => {
      if (o[a]) o[a].push(e);
      else {
        var s, t;
        if (void 0 !== n)
          for (
            var l = document.getElementsByTagName("script"), d = 0;
            d < l.length;
            d++
          ) {
            var f = l[d];
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
          r.nc && s.setAttribute("nonce", r.nc),
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
    (r.r = (a) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(a, "__esModule", { value: !0 });
    }),
    (r.nmd = (a) => ((a.paths = []), a.children || (a.children = []), a)),
    (() => {
      var a;
      r.g.importScripts && (a = r.g.location + "");
      var e = r.g.document;
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
        (r.p = a + "../../../");
    })(),
    (c = (a) =>
      new Promise((e, n) => {
        var o = r.miniCssF(a),
          i = r.p + o;
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
    (r.f.miniCss = (a, e) => {
      s[a]
        ? e.push(s[a])
        : 0 !== s[a] &&
          {
            238: 1,
            400: 1,
            508: 1,
            908: 1,
            2136: 1,
            2329: 1,
            2449: 1,
            3352: 1,
            3499: 1,
            4535: 1,
            4601: 1,
            5253: 1,
            5436: 1,
            6272: 1,
            6845: 1,
            8075: 1,
            8647: 1,
            9348: 1,
            9349: 1,
            9427: 1,
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
      (r.f.j = (e, n) => {
        var o = r.o(a, e) ? a[e] : void 0;
        if (0 !== o)
          if (o) n.push(o[2]);
          else if (6700 != e) {
            var i = new Promise((n, i) => (o = a[e] = [n, i]));
            n.push((o[2] = i));
            var c = r.p + r.u(e),
              s = new Error();
            r.l(
              c,
              (n) => {
                if (r.o(a, e) && (0 !== (o = a[e]) && (a[e] = void 0), o)) {
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
        (r.O.j = (e) => 0 === a[e]);
      var e = (e, n) => {
          var o,
            i,
            [c, s, t] = n,
            l = 0;
          if (c.some((e) => 0 !== a[e])) {
            for (o in s) r.o(s, o) && (r.m[o] = s[o]);
            if (t) var d = t(r);
          }
          for (e && e(n); l < c.length; l++)
            (i = c[l]), r.o(a, i) && a[i] && a[i][0](), (a[i] = 0);
          return r.O(d);
        },
        n = (self.webpackChunkcommunity = self.webpackChunkcommunity || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();
