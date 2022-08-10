/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7426991";
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
        27: "8db19d205d4d91ea68f5",
        113: "e2f5adf910348c6e2c02",
        131: "31adf1066dbcdcaddb17",
        238: "5711d8e8dd2f2351048d",
        301: "605dbad7149f755c304f",
        400: "19468e2d8971d2c0ed01",
        508: "e148cfd512c5f30ceedd",
        543: "7e04eee5a698b6b9ff11",
        617: "7d3ab1a831ca8f158016",
        648: "f1cc286fb5c4f89f566d",
        755: "0b07695f12aab2a12c5b",
        867: "e4aaa649779c61def34f",
        908: "982b9c0df58eb5f5ec7e",
        960: "9177f9bc01e55bfbf2d5",
        961: "d169ed195c760bf5472d",
        1133: "0eff01238bd588bc9b7c",
        1195: "8fce0bfe8682eca80105",
        1261: "697047c1483c78809d14",
        1311: "581d573a60bcb753396f",
        1546: "828e9c360f07290c4b9a",
        1579: "8179ad9e9a011a98418c",
        1649: "926bbc6e032196554958",
        1953: "11af706e0990f1c6ccd3",
        2136: "3dba7c253b650a08d039",
        2138: "4a6a7cde51c5be9bc5ad",
        2235: "a11ab5954e08def42348",
        2329: "cd3c1b3a4d5d92ff9833",
        2351: "9f9a92dd27776d9810c9",
        2373: "06251fd1a88d5e5852c4",
        2449: "0c23003fe314162e0cfc",
        2468: "7b16ed9b4d04c09c06d9",
        2557: "98beb5ca3b3c500287a6",
        2723: "3774ba2b4701e88c8211",
        2738: "182ecfb0cc045aba3cbe",
        2745: "0c6e64566e4b3c90d95b",
        2805: "d4e80d104d9879a7a501",
        2822: "6eb917c72e9ea8905422",
        2832: "617b07c11678f92935a2",
        3007: "a34481d10a48c32d3923",
        3038: "c6293662c8189449c348",
        3202: "19d060b19bc21838d625",
        3298: "8fa2fedf53e1b108192b",
        3352: "adea7d70d77c3a7d9caf",
        3499: "eab8beed455b5680c70d",
        3591: "b331668b0087b88c9c88",
        3602: "aba149dcdd43b8a28dca",
        3742: "fd48459ac5575f0058a0",
        3973: "4bc0ea24337a1d8ac251",
        4097: "3732974a223d2bef1f0a",
        4183: "145c718cc0740e8fe79c",
        4264: "15461a535d2ba266df46",
        4293: "9a8be31db0af4246a123",
        4358: "ab4fca0749ec52b5513a",
        4445: "d53246f288d954cae5b7",
        4469: "d84992db5b71ce274110",
        4487: "2823ef0b157ccd5ab5bf",
        4513: "d74301ae2e511404e1dc",
        4535: "88cc84ad46a2d465f3ce",
        4601: "33af4daeb70b8019f581",
        4729: "45978df62bbf5afd10d1",
        4819: "9fd6da0552df7f5a3d2a",
        4979: "16e78d33b1473245cc37",
        5012: "572c175c5d754a50fa4a",
        5253: "a78038e3cbde9d20505d",
        5277: "42e1500f3c83c3b5f93a",
        5279: "3bc657ab2aeb284fd01c",
        5436: "a968dca1fa240affc182",
        5439: "ab8938bd06fb93a8566c",
        5493: "f26f936a64410c3a96a9",
        5494: "2897c946bb61da3dd35b",
        5503: "0ed2342c4194bb65bf7c",
        5757: "1d473648ca5d4cee8568",
        6091: "c9b716119321e5812eb4",
        6148: "5aca2d35a443fd3058d9",
        6272: "04e4b2c7a3be4e5d73eb",
        6403: "4b77334163700db4312d",
        6415: "b2c6bc40c5d79dba8b9c",
        6457: "282944a54700ba5cd369",
        6656: "0feae8ebcbb7d0260166",
        6658: "80a98b3f2c0d35a00a06",
        6715: "ab5337832d5eb8f1f322",
        6844: "efc1e9a0f683e95b61af",
        6845: "027525f7bd4f5cd1adbc",
        6932: "334e1af9e40ee3dad97d",
        6962: "72ca9d0a45a629e71700",
        7629: "4118ac686f087359c112",
        7660: "a674be80545d592078e0",
        7769: "556a56ee1a28ce238ec4",
        7781: "4df3600d4f38aa9bc71e",
        7832: "6d3214c50ca68865f871",
        7901: "31e42a56e4595fc04347",
        7924: "364f693b5dbac8eb7fdd",
        7971: "c5f36b8b1ee8cffc56cb",
        8075: "e1cc6d08d7e3072f7df0",
        8085: "2a2f6d553740feffcc9b",
        8120: "94cb56ccb78dcbb6f3cb",
        8274: "89da3af35144e3e281a5",
        8282: "9ae2787bd71df2991862",
        8291: "f15d032ff5484a9ef0cb",
        8427: "530d79e7bccfc4c04b08",
        8433: "66f47f2cf7be0a5d7960",
        8525: "a8949d032541bf4bd33e",
        8592: "1f46c7a3a0a5c23630b9",
        8647: "3fe2b5e20eecb9ced5b0",
        8691: "9422b45f35c587cbb992",
        8805: "19027c3be0c0cbf16553",
        8919: "adc33b86db72e216b54d",
        9167: "7b02d5ac7b50aa12061d",
        9233: "4c25d8db773e532519a2",
        9316: "66488a79dddc2a6878ea",
        9348: "fc426bd2195101a754d0",
        9349: "8e488e9085d4c491c2d0",
        9389: "1b449809720727b39ad7",
        9427: "bd078fdf9c7a6f45d8d8",
        9513: "608ab4189971f6b78e5e",
        9547: "c029babfcae8df954c19",
        9561: "eaa6fe2cc381f1f30034",
        9665: "6091c63a8fc203b218f4",
        9828: "220d8afe7210f42ba6ac",
        9854: "c3597d82c2468952fb53",
        9888: "2a883fbb25478d5822da",
        9951: "c24215d8b7dc21a5d8ff",
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
        400: "997e0627c13221991d76",
        508: "207aec125077a83aa43a",
        908: "402d6864700943e3ed5f",
        2136: "7677775ce82ff87c079e",
        2329: "70358f02752594d6bf7b",
        2449: "ca5e0b04509bce560dfa",
        3352: "f3838685918d3c88bdc3",
        3499: "ceabdd14fa2e8fac8cdf",
        4535: "3f636f183cf3f9ae27ff",
        4601: "9b8e574ef6a72e938356",
        5253: "3dcbd40dd9bb1cef64ff",
        5436: "c25a8db9a3612a1fdedf",
        6272: "954c6394281de3d83a5a",
        6845: "3f3faaebf755f0c5e867",
        8075: "586c647e75b540cfe173",
        8647: "9b9437de3540a73e72d6",
        9348: "877859e7586600234bec",
        9349: "051a518f3e92dd04dbcc",
        9427: "b9c5c2e4c290875a2aa6",
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
