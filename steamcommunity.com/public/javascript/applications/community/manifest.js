/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7689286";
(() => {
  "use strict";
  var a,
    e,
    n,
    o,
    i,
    c,
    t,
    s = {},
    l = {};
  function d(a) {
    var e = l[a];
    if (void 0 !== e) return e.exports;
    var n = (l[a] = { id: a, loaded: !1, exports: {} });
    return s[a].call(n.exports, n, n.exports, d), (n.loaded = !0), n.exports;
  }
  (d.m = s),
    (a = []),
    (d.O = (e, n, o, i) => {
      if (!n) {
        var c = 1 / 0;
        for (r = 0; r < a.length; r++) {
          for (var [n, o, i] = a[r], t = !0, s = 0; s < n.length; s++)
            (!1 & i || c >= i) && Object.keys(d.O).every((a) => d.O[a](n[s]))
              ? n.splice(s--, 1)
              : ((t = !1), i < c && (c = i));
          if (t) {
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
      for (var t = 2 & o && a; "object" == typeof t && !~e.indexOf(t); t = n(t))
        Object.getOwnPropertyNames(t).forEach((e) => (c[e] = () => a[e]));
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
        2677: "chunk~3593b01ab",
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
        9920: "chunk~6b6cfcb8f",
        9951: "localization/shared_latam-json",
        9991: "localization/sales_japanese-json",
      }[a] +
      ".js?contenthash=" +
      {
        27: "04e497190f091d977fc8",
        113: "7384d99c3e905d1d102c",
        131: "e9ca392321849f78f6be",
        238: "602fa14425f0a94b78d2",
        301: "c716ab87ecd59b12cd94",
        312: "d30a7e458abdc44255ef",
        400: "c04e71af72753d39981d",
        508: "1464f240fdb89f90806a",
        543: "7e04eee5a698b6b9ff11",
        617: "2ee5625f7c47b8af1a77",
        755: "1a6a2d774bc01af4d99f",
        867: "e4aaa649779c61def34f",
        908: "a08074760d3b9e247377",
        960: "9177f9bc01e55bfbf2d5",
        961: "d169ed195c760bf5472d",
        1133: "0e7eae01172ea6e3c2e2",
        1195: "1a88fd9e652c60e9e721",
        1261: "3fb63444d5ded5e9188b",
        1311: "dc030a17f6c1d9952c64",
        1546: "828e9c360f07290c4b9a",
        1579: "86b7f54dfba1f3d057e8",
        1649: "9fac579e9d6367e3bbc4",
        1953: "03901f04f0ebbb29e5fb",
        2136: "c59799731b5808386f4d",
        2138: "1a574cc0d019c7c489e1",
        2235: "a11ab5954e08def42348",
        2329: "cd3c1b3a4d5d92ff9833",
        2351: "30081b2d81f9721be3ca",
        2373: "06251fd1a88d5e5852c4",
        2449: "7cc8ed2a455ff84cccb6",
        2468: "7b16ed9b4d04c09c06d9",
        2557: "5955fd096cf1017d6f32",
        2677: "0e674a7037aadf04f444",
        2723: "3774ba2b4701e88c8211",
        2738: "e171fd9ed74d9ff8fefa",
        2745: "0c6e64566e4b3c90d95b",
        2805: "1ef1ebb9772c53bea3b4",
        2822: "61ebbc4f286869fa8ba9",
        2832: "3789aee1415ef06ec249",
        3007: "a34481d10a48c32d3923",
        3038: "63b105b07566054cd64d",
        3202: "19d060b19bc21838d625",
        3298: "0d6cbe746bb0bf887d06",
        3352: "6bafba4930b19cf19738",
        3499: "f08ac03b9c833abf7479",
        3591: "b971a2a6a62c1c00a12a",
        3602: "5d9adb19c1ae8b344d30",
        3742: "b6e83ff0f1502132ce42",
        3973: "fa73d5b3915f9b917a3c",
        4097: "af0ef9bcbb716f790fc9",
        4183: "b990a6f5896a00f38096",
        4264: "493c1c579686b1ec3aa6",
        4293: "9a8be31db0af4246a123",
        4358: "40b3bb9f248f9ed15809",
        4445: "a163c2e3c5a62ae60e8f",
        4469: "2c9c7833b842ea73ed94",
        4487: "abf841f885ded9b1e8a1",
        4513: "90a7ce15bd7f6fb5745b",
        4535: "1f23cbf49e2bf7fb8e0d",
        4601: "f1da307246b8617ffbae",
        4729: "541499b2207dad39b974",
        4819: "9fd6da0552df7f5a3d2a",
        4979: "16e78d33b1473245cc37",
        5012: "7762d0e9ee4b053f9e10",
        5253: "b97d947557850b8a0305",
        5277: "3890c1db50bb363c6ba7",
        5279: "daedd85eb7a77e5d91d6",
        5436: "a8fc4378d25cc186c5dc",
        5439: "ab8938bd06fb93a8566c",
        5493: "1b826e97be6f2ddb9742",
        5494: "2897c946bb61da3dd35b",
        5503: "3351e50e201cac4c34c1",
        5757: "db38ab98e04008699913",
        6091: "940fd1c7071901947a4a",
        6148: "5aca2d35a443fd3058d9",
        6272: "afbbf37dd61ac7fc69d2",
        6403: "a130da103db9654e3be5",
        6415: "fb823d240a0c438447f8",
        6437: "caa49d3d01d07f13aeea",
        6457: "c238f5510c229f09785a",
        6656: "0feae8ebcbb7d0260166",
        6658: "80a98b3f2c0d35a00a06",
        6715: "ab5337832d5eb8f1f322",
        6844: "d0f4cd676b4cf8212f13",
        6845: "656a77941bef7a3874e3",
        6932: "334e1af9e40ee3dad97d",
        6962: "b80d08b6a3e6a7e349bc",
        7629: "e5061664b57e3cb42d79",
        7660: "7862763051a4e7c0c93c",
        7769: "e4fa264b8783566aaf4e",
        7781: "8881352440b37b094d38",
        7832: "6d3214c50ca68865f871",
        7901: "9e089d30e6adf8a7fc24",
        7924: "364f693b5dbac8eb7fdd",
        7971: "c5f36b8b1ee8cffc56cb",
        8085: "d92fe937a6d450d8cba3",
        8120: "a4dd7715b72f098ab3d8",
        8274: "b235defcecce6d340c82",
        8282: "95fcbf622b918709784d",
        8291: "5e392c35d0b92103da5d",
        8427: "a87e1e785fb5075c4df2",
        8433: "53bfc418d04c666e194c",
        8525: "ad54cb5d021190e5f4b4",
        8592: "3d10673422b1097616c1",
        8647: "685f5b04d7debb628eb5",
        8691: "9422b45f35c587cbb992",
        8805: "19027c3be0c0cbf16553",
        8919: "4ed9acd4fbf29b4554b7",
        9167: "7b02d5ac7b50aa12061d",
        9233: "1662db9c8ba7c8a5c7f0",
        9316: "66488a79dddc2a6878ea",
        9348: "2e5eff36345d4fd8ce8c",
        9349: "5ca450d1e3569fcdec37",
        9389: "b9f9911550161883a3b5",
        9427: "7355a9081961ed283b35",
        9513: "608ab4189971f6b78e5e",
        9547: "fd0f3d7cc2b1f3136cb2",
        9561: "eaa6fe2cc381f1f30034",
        9665: "64e20d2310a0baaf3a8a",
        9828: "220d8afe7210f42ba6ac",
        9854: "ad4c35987a54c8a9ee00",
        9888: "2a883fbb25478d5822da",
        9920: "094ea27176c1ae63a12e",
        9951: "dcd87ef939192d425dfb",
        9991: "dec68400ee17f6b34ffd",
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
        3352: "eventinternal",
        3499: "communityfaqs",
        4535: "login",
        4601: "broadcast",
        5436: "broadcasts",
        6272: "conference",
        6845: "profile",
        8647: "managefriends",
        8919: "chunk~215b3e016",
        9348: "chunk~69438e232",
        9349: "eventeditor",
        9427: "chunk~642602239",
      }[a] +
      ".css?contenthash=" +
      {
        238: "82877e2cea30622a4345",
        312: "9e6bee6632888a265236",
        400: "d24a8703abc7daa67070",
        508: "8213f717485ea5c2ffcf",
        908: "80a28985772113b04660",
        2136: "7677775ce82ff87c079e",
        2329: "70358f02752594d6bf7b",
        2449: "8075da3560546e1cc757",
        3352: "f3838685918d3c88bdc3",
        3499: "ceabdd14fa2e8fac8cdf",
        4535: "120ef11d3786830c5571",
        4601: "5b02011896f2f5b3d01b",
        5436: "0815d5769504bacb5db2",
        6272: "96937946e427750774e4",
        6845: "c97ddaebddd7c4860a46",
        8647: "413bbe35d505feb2a7be",
        8919: "cf81e85a43eb3cd28cd4",
        9348: "c324699991d59e2004e3",
        9349: "f4977652404f75e5d337",
        9427: "7420b82ea5994b9083d1",
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
        var t, s;
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
              t = f;
              break;
            }
          }
        t ||
          ((s = !0),
          ((t = document.createElement("script")).charset = "utf-8"),
          (t.timeout = 120),
          d.nc && t.setAttribute("nonce", d.nc),
          t.setAttribute("data-webpack", i + n),
          (t.src = a)),
          (o[a] = [e]);
        var b = (e, n) => {
            (t.onerror = t.onload = null), clearTimeout(h);
            var i = o[a];
            if (
              (delete o[a],
              t.parentNode && t.parentNode.removeChild(t),
              i && i.forEach((a) => a(n)),
              e)
            )
              return e(n);
          },
          h = setTimeout(
            b.bind(null, void 0, { type: "timeout", target: t }),
            12e4
          );
        (t.onerror = b.bind(null, t.onerror)),
          (t.onload = b.bind(null, t.onload)),
          s && document.head.appendChild(t);
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
                (t = n[o]).getAttribute("data-href") || t.getAttribute("href");
              if ("stylesheet" === t.rel && (i === a || i === e)) return t;
            }
            var c = document.getElementsByTagName("style");
            for (o = 0; o < c.length; o++) {
              var t;
              if ((i = (t = c[o]).getAttribute("data-href")) === a || i === e)
                return t;
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
                  var t = c && ("load" === c.type ? "missing" : c.type),
                    s = (c && c.target && c.target.href) || e,
                    l = new Error(
                      "Loading CSS chunk " + a + " failed.\n(" + s + ")"
                    );
                  (l.code = "CSS_CHUNK_LOAD_FAILED"),
                    (l.type = t),
                    (l.request = s),
                    i.parentNode.removeChild(i),
                    o(l);
                }
              }),
            (i.href = e),
            document.head.appendChild(i);
        })(a, i, e, n);
      })),
    (t = { 6700: 0 }),
    (d.f.miniCss = (a, e) => {
      t[a]
        ? e.push(t[a])
        : 0 !== t[a] &&
          {
            238: 1,
            312: 1,
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
            5436: 1,
            6272: 1,
            6845: 1,
            8647: 1,
            8919: 1,
            9348: 1,
            9349: 1,
            9427: 1,
          }[a] &&
          e.push(
            (t[a] = c(a).then(
              () => {
                t[a] = 0;
              },
              (e) => {
                throw (delete t[a], e);
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
          else if (/^(4601|6700)$/.test(e)) a[e] = 0;
          else {
            var i = new Promise((n, i) => (o = a[e] = [n, i]));
            n.push((o[2] = i));
            var c = d.p + d.u(e),
              t = new Error();
            d.l(
              c,
              (n) => {
                if (d.o(a, e) && (0 !== (o = a[e]) && (a[e] = void 0), o)) {
                  var i = n && ("load" === n.type ? "missing" : n.type),
                    c = n && n.target && n.target.src;
                  (t.message =
                    "Loading chunk " + e + " failed.\n(" + i + ": " + c + ")"),
                    (t.name = "ChunkLoadError"),
                    (t.type = i),
                    (t.request = c),
                    o[1](t);
                }
              },
              "chunk-" + e,
              e
            );
          }
      }),
        (d.O.j = (e) => 0 === a[e]);
      var e = (e, n) => {
          var o,
            i,
            [c, t, s] = n,
            l = 0;
          if (c.some((e) => 0 !== a[e])) {
            for (o in t) d.o(t, o) && (d.m[o] = t[o]);
            if (s) var r = s(d);
          }
          for (e && e(n); l < c.length; l++)
            (i = c[l]), d.o(a, i) && a[i] && a[i][0](), (a[i] = 0);
          return d.O(r);
        },
        n = (self.webpackChunkcommunity = self.webpackChunkcommunity || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();
