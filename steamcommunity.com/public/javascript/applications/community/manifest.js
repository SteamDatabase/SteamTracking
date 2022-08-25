/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7463419";
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
  function r(a) {
    var e = l[a];
    if (void 0 !== e) return e.exports;
    var n = (l[a] = { id: a, loaded: !1, exports: {} });
    return t[a].call(n.exports, n, n.exports, r), (n.loaded = !0), n.exports;
  }
  (r.m = t),
    (a = []),
    (r.O = (e, n, o, c) => {
      if (!n) {
        var i = 1 / 0;
        for (d = 0; d < a.length; d++) {
          for (var [n, o, c] = a[d], s = !0, t = 0; t < n.length; t++)
            (!1 & c || i >= c) && Object.keys(r.O).every((a) => r.O[a](n[t]))
              ? n.splice(t--, 1)
              : ((s = !1), c < i && (i = c));
          if (s) {
            a.splice(d--, 1);
            var l = o();
            void 0 !== l && (e = l);
          }
        }
        return e;
      }
      c = c || 0;
      for (var d = a.length; d > 0 && a[d - 1][2] > c; d--) a[d] = a[d - 1];
      a[d] = [n, o, c];
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
      var c = Object.create(null);
      r.r(c);
      var i = {};
      e = e || [null, n({}), n([]), n(n)];
      for (var s = 2 & o && a; "object" == typeof s && !~e.indexOf(s); s = n(s))
        Object.getOwnPropertyNames(s).forEach((e) => (i[e] = () => a[e]));
      return (i.default = () => a), r.d(c, i), c;
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
        27: "1aa17d4d970d4eaf2b76",
        113: "1fe035936ef71b4ce19d",
        131: "4ccbaa8a7e5741fa23c9",
        238: "5711d8e8dd2f2351048d",
        301: "2bd36ba99f8aafa764d6",
        400: "fd3caf8ee196417b2eb1",
        508: "80be83a0bafeb4b4cd89",
        543: "7e04eee5a698b6b9ff11",
        617: "adbfe6814a5c9dfc484c",
        648: "f1cc286fb5c4f89f566d",
        755: "38f6e668bb80c6ae381c",
        867: "e4aaa649779c61def34f",
        908: "982b9c0df58eb5f5ec7e",
        960: "9177f9bc01e55bfbf2d5",
        961: "d169ed195c760bf5472d",
        1133: "fcc42dbe2cb832853069",
        1195: "0f391ccc70a6484f0ef5",
        1261: "dda9437fba1b0853ba96",
        1311: "222129c698ef8b42a0eb",
        1546: "828e9c360f07290c4b9a",
        1579: "143885af866790f3ee3c",
        1649: "926bbc6e032196554958",
        1953: "c5da12c90af7edff5dab",
        2136: "3dba7c253b650a08d039",
        2138: "51211be917edcd7d3e88",
        2235: "4e42fad4dab05d34aa6b",
        2329: "cd3c1b3a4d5d92ff9833",
        2351: "2fe5c57b8ec8a038e72e",
        2373: "06251fd1a88d5e5852c4",
        2449: "0c23003fe314162e0cfc",
        2468: "7b16ed9b4d04c09c06d9",
        2557: "ed9350d220a78757c34e",
        2723: "3774ba2b4701e88c8211",
        2738: "97db9a16135f0e9b258f",
        2745: "0c6e64566e4b3c90d95b",
        2805: "d4e80d104d9879a7a501",
        2822: "97ac577b2e9603019e06",
        2832: "617b07c11678f92935a2",
        3007: "a34481d10a48c32d3923",
        3038: "f09e5c53d9cc392fc0a5",
        3202: "19d060b19bc21838d625",
        3298: "1b76f001efcea3739ff2",
        3352: "adea7d70d77c3a7d9caf",
        3499: "873bf424121848c7faea",
        3591: "b331668b0087b88c9c88",
        3602: "a847b420165b53ffa7da",
        3742: "fd48459ac5575f0058a0",
        3973: "4bc0ea24337a1d8ac251",
        4097: "cc7085685ea2d4a48a02",
        4183: "9a7fec95bca3e3af8816",
        4264: "15461a535d2ba266df46",
        4293: "9a8be31db0af4246a123",
        4358: "f3dbe34a95fd4be51bb6",
        4445: "def8b185bdac10d8a11d",
        4469: "caf4412f1e00aba99e15",
        4487: "708e0aa4ce65d34ad019",
        4513: "d7353566d5ee7c783d8d",
        4535: "8d6d197c00c2a6af49c4",
        4601: "33af4daeb70b8019f581",
        4729: "e677f83d2f1b331b90b9",
        4819: "9fd6da0552df7f5a3d2a",
        4979: "16e78d33b1473245cc37",
        5012: "2ca8be6fa4118775f393",
        5253: "61eeb00868525c4ab431",
        5277: "d441fac32aad25980c74",
        5279: "3a30d2094e0ed53bb808",
        5436: "a968dca1fa240affc182",
        5439: "ab8938bd06fb93a8566c",
        5493: "2b6d4f91fd928f9bb749",
        5494: "2897c946bb61da3dd35b",
        5503: "cffd5d3e9bd4e9adde4c",
        5757: "1cabd907bc9658879aee",
        6091: "e42dc9388b5556f8aff8",
        6148: "5aca2d35a443fd3058d9",
        6272: "d3e649e89e3bcfdded69",
        6403: "b97b872ecdec4b112ff7",
        6415: "ffa16695572ea7ebcf89",
        6437: "caa49d3d01d07f13aeea",
        6457: "dc1e41aa2b8cf049eac8",
        6656: "0feae8ebcbb7d0260166",
        6658: "80a98b3f2c0d35a00a06",
        6715: "ab5337832d5eb8f1f322",
        6844: "9fcc79319ae41973d253",
        6845: "027525f7bd4f5cd1adbc",
        6932: "334e1af9e40ee3dad97d",
        6962: "c4aee05815ef30a40a06",
        7629: "2344fd390352361c3df3",
        7660: "e072f51bd8a9301c100b",
        7769: "bf512f2abff3b3676243",
        7781: "4d572155d0134a98eb29",
        7832: "6d3214c50ca68865f871",
        7901: "f066140b06f36b24f475",
        7924: "364f693b5dbac8eb7fdd",
        7971: "c5f36b8b1ee8cffc56cb",
        8075: "3fd56ece6118a2cd197f",
        8085: "c433406ddcd01416929f",
        8120: "94cb56ccb78dcbb6f3cb",
        8274: "be8d349cd6c9f45e6789",
        8282: "96fc4b7407da526c5066",
        8291: "7f75d7a6b43fecb01514",
        8427: "0d814e7655637900d107",
        8433: "059e6a4dff32884c2cc9",
        8525: "f3037554b0545114bb51",
        8592: "3b7189d53385f5ea8d3c",
        8647: "3fe2b5e20eecb9ced5b0",
        8691: "9422b45f35c587cbb992",
        8805: "19027c3be0c0cbf16553",
        8919: "7858476af9dd652b0a09",
        9167: "7b02d5ac7b50aa12061d",
        9233: "ddd739712c4af69d0dac",
        9316: "66488a79dddc2a6878ea",
        9348: "baab066db3be1e4787c1",
        9349: "240e6597757e40cb0da2",
        9389: "9807bdc2c8f977930af3",
        9427: "3ec1b58d6d4ab258133b",
        9513: "608ab4189971f6b78e5e",
        9547: "18fbfecc8d81b3a6a9a1",
        9561: "eaa6fe2cc381f1f30034",
        9665: "6d51d45defa71864a313",
        9828: "220d8afe7210f42ba6ac",
        9854: "cf98997bb8fb230e060b",
        9888: "2a883fbb25478d5822da",
        9951: "55680921fb64c0b3d74c",
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
        8919: "chunk~215b3e016",
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
        4535: "120ef11d3786830c5571",
        4601: "9b8e574ef6a72e938356",
        5253: "8811a13d8529eced6b1b",
        5436: "c25a8db9a3612a1fdedf",
        6272: "954c6394281de3d83a5a",
        6845: "3f3faaebf755f0c5e867",
        8075: "e278623e0b624d88ef46",
        8647: "9b9437de3540a73e72d6",
        8919: "2c8b6e109fce1c38b88e",
        9348: "877859e7586600234bec",
        9349: "051a518f3e92dd04dbcc",
        9427: "f38681136d433163c0c5",
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
    (c = "community:"),
    (r.l = (a, e, n, i) => {
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
          r.nc && s.setAttribute("nonce", r.nc),
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
    (i = (a) =>
      new Promise((e, n) => {
        var o = r.miniCssF(a),
          c = r.p + o;
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
            8919: 1,
            9348: 1,
            9349: 1,
            9427: 1,
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
      (r.f.j = (e, n) => {
        var o = r.o(a, e) ? a[e] : void 0;
        if (0 !== o)
          if (o) n.push(o[2]);
          else if (6700 != e) {
            var c = new Promise((n, c) => (o = a[e] = [n, c]));
            n.push((o[2] = c));
            var i = r.p + r.u(e),
              s = new Error();
            r.l(
              i,
              (n) => {
                if (r.o(a, e) && (0 !== (o = a[e]) && (a[e] = void 0), o)) {
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
        (r.O.j = (e) => 0 === a[e]);
      var e = (e, n) => {
          var o,
            c,
            [i, s, t] = n,
            l = 0;
          if (i.some((e) => 0 !== a[e])) {
            for (o in s) r.o(s, o) && (r.m[o] = s[o]);
            if (t) var d = t(r);
          }
          for (e && e(n); l < i.length; l++)
            (c = i[l]), r.o(a, c) && a[c] && a[c][0](), (a[c] = 0);
          return r.O(d);
        },
        n = (self.webpackChunkcommunity = self.webpackChunkcommunity || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();
