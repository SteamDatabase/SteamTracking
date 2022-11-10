/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7655116";
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
    d = {};
  function l(a) {
    var e = d[a];
    if (void 0 !== e) return e.exports;
    var n = (d[a] = { id: a, loaded: !1, exports: {} });
    return s[a].call(n.exports, n, n.exports, l), (n.loaded = !0), n.exports;
  }
  (l.m = s),
    (a = []),
    (l.O = (e, n, o, i) => {
      if (!n) {
        var c = 1 / 0;
        for (r = 0; r < a.length; r++) {
          for (var [n, o, i] = a[r], t = !0, s = 0; s < n.length; s++)
            (!1 & i || c >= i) && Object.keys(l.O).every((a) => l.O[a](n[s]))
              ? n.splice(s--, 1)
              : ((t = !1), i < c && (c = i));
          if (t) {
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
      for (var t = 2 & o && a; "object" == typeof t && !~e.indexOf(t); t = n(t))
        Object.getOwnPropertyNames(t).forEach((e) => (c[e] = () => a[e]));
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
        27: "2accc798f38c960d01be",
        113: "58e2c43f7fd70ea03e68",
        131: "1b6756e512db371fa28e",
        238: "602fa14425f0a94b78d2",
        301: "0f1969fc3c2bbd2dc3fb",
        312: "deeb6490de4cd5449bdd",
        400: "74a47d359b611e097db0",
        508: "2a20739de41ae2b9aaed",
        543: "7e04eee5a698b6b9ff11",
        617: "69036fc98a3bd6b3f553",
        755: "9ae35dbc5caf6098857e",
        867: "e4aaa649779c61def34f",
        908: "a08074760d3b9e247377",
        960: "9177f9bc01e55bfbf2d5",
        961: "d169ed195c760bf5472d",
        1133: "665ce340db4a648fce09",
        1195: "95c5a54b39ea755b3905",
        1261: "94131bd34c5a6caababd",
        1311: "fb508220e546efb7ecd7",
        1546: "828e9c360f07290c4b9a",
        1579: "acd4d346bea0d19ab5c7",
        1649: "a2882bba5d1cadff7ba1",
        1953: "12ce34a73facc57c9b83",
        2136: "9879a82073f1e4ed63e3",
        2138: "c48440f6897d61360882",
        2235: "a11ab5954e08def42348",
        2329: "cd3c1b3a4d5d92ff9833",
        2351: "cc7507ca15f4ab49e832",
        2373: "06251fd1a88d5e5852c4",
        2449: "b5f0d455c24065fe0342",
        2468: "7b16ed9b4d04c09c06d9",
        2557: "2da95f8f0154dc2f2c44",
        2677: "0e674a7037aadf04f444",
        2723: "3774ba2b4701e88c8211",
        2738: "35b985cf44b4154d8a9a",
        2745: "0c6e64566e4b3c90d95b",
        2805: "5c863ad748c34dd6e6f1",
        2822: "d192fab9c96202f5fb8b",
        2832: "e2c1a53407db47b95d36",
        3007: "a34481d10a48c32d3923",
        3038: "738d3865a2c291a6841f",
        3202: "19d060b19bc21838d625",
        3298: "75a746507390c7e57859",
        3352: "e0b2cfde39c374471500",
        3499: "522d3c2818f4e51ac3f9",
        3591: "b971a2a6a62c1c00a12a",
        3602: "7d1b343ec35066364c76",
        3742: "c0f9afd3bbaf2bc6cc96",
        3973: "fe3b71e0ac8426aedeec",
        4097: "5eae5d6061ef71b6ba1e",
        4183: "fc807c66fd5b11e1a94f",
        4264: "493c1c579686b1ec3aa6",
        4293: "9a8be31db0af4246a123",
        4358: "40b3bb9f248f9ed15809",
        4445: "16e3af7c3bff081fcbd8",
        4469: "dccf48631c0e23652324",
        4487: "7dbf04d12e69eb5b056c",
        4513: "757a243d8563c1fe06e0",
        4535: "3395b03a0fe851ba7de6",
        4601: "f1da307246b8617ffbae",
        4729: "7b3491a27b4e01ecc5bb",
        4819: "9fd6da0552df7f5a3d2a",
        4979: "16e78d33b1473245cc37",
        5012: "8b2491e91eb54c1c1c71",
        5253: "84cf86f53d95b1a8e31e",
        5277: "b6e55eb1667e9488cc3b",
        5279: "01e5f116f22e87fb1d92",
        5436: "7597096f2438aa2bf13d",
        5439: "ab8938bd06fb93a8566c",
        5493: "f7a50aa3e732bc13635f",
        5494: "2897c946bb61da3dd35b",
        5503: "3351e50e201cac4c34c1",
        5757: "764495394a6055b25061",
        6091: "224f72068d8286eb2af3",
        6148: "5aca2d35a443fd3058d9",
        6272: "b92a42501418864bf456",
        6403: "157f3c8ab80dfa5be4b1",
        6415: "eeda2cf0a96beb6caf94",
        6437: "caa49d3d01d07f13aeea",
        6457: "cec79baf27468944c453",
        6656: "0feae8ebcbb7d0260166",
        6658: "80a98b3f2c0d35a00a06",
        6715: "ab5337832d5eb8f1f322",
        6844: "c966dd5b368d863d9631",
        6845: "d6774f6f57a4304404ae",
        6932: "334e1af9e40ee3dad97d",
        6962: "c2a0dff383ac63ae13a7",
        7629: "2beb6544b0217f02ac40",
        7660: "01f88fbee463ba99c2d4",
        7769: "2b37fd666ffd43bccd60",
        7781: "6a2285545e809584fd10",
        7832: "6d3214c50ca68865f871",
        7901: "38f8babaaab81fe7f8bc",
        7924: "364f693b5dbac8eb7fdd",
        7971: "c5f36b8b1ee8cffc56cb",
        8085: "9a99212d8aac672916ee",
        8120: "a4dd7715b72f098ab3d8",
        8274: "3753224cce5c407759ef",
        8282: "2865cd00cedd22ef6ea0",
        8291: "6826aa6ff6230f562b31",
        8427: "add58cbe07fb8ee609c5",
        8433: "245abcae8248c3134903",
        8525: "85384e51faefbb3a1316",
        8592: "796588b6ca0b91b2fb72",
        8647: "685f5b04d7debb628eb5",
        8691: "9422b45f35c587cbb992",
        8805: "19027c3be0c0cbf16553",
        8919: "b19289a05aa584007a3b",
        9167: "7b02d5ac7b50aa12061d",
        9233: "e20ad13cfd32ecadc4d9",
        9316: "66488a79dddc2a6878ea",
        9348: "30e475294be336c6240a",
        9349: "e9f3ca40d43cd7215cb5",
        9389: "b9f9911550161883a3b5",
        9427: "ad7b7ec93193d12293a0",
        9513: "608ab4189971f6b78e5e",
        9547: "391f5be0d616b472c60a",
        9561: "eaa6fe2cc381f1f30034",
        9665: "4fd63200c30f25488268",
        9828: "220d8afe7210f42ba6ac",
        9854: "6bfd11beba272da54944",
        9888: "2a883fbb25478d5822da",
        9920: "327398cd22f59a3302af",
        9951: "3b820bf7b68fc129b8c8",
        9991: "dec68400ee17f6b34ffd",
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
        238: "c1d5adf2164cb4f1234b",
        312: "bc0053e9b4b8791ffe9e",
        400: "a01ac9bfd25f2eb59569",
        508: "be9cc593961dafe1ab57",
        908: "80a28985772113b04660",
        2136: "7677775ce82ff87c079e",
        2329: "70358f02752594d6bf7b",
        2449: "8075da3560546e1cc757",
        3352: "f3838685918d3c88bdc3",
        3499: "ceabdd14fa2e8fac8cdf",
        4535: "120ef11d3786830c5571",
        4601: "d06d8bbe9060a9dfd764",
        5436: "0815d5769504bacb5db2",
        6272: "96937946e427750774e4",
        6845: "3f3faaebf755f0c5e867",
        8647: "413bbe35d505feb2a7be",
        8919: "cf81e85a43eb3cd28cd4",
        9348: "e4265469d9e2dfe9d3ef",
        9349: "051a518f3e92dd04dbcc",
        9427: "b29bd27147d87ee41e2c",
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
        var t, s;
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
              t = f;
              break;
            }
          }
        t ||
          ((s = !0),
          ((t = document.createElement("script")).charset = "utf-8"),
          (t.timeout = 120),
          l.nc && t.setAttribute("nonce", l.nc),
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
                    d = new Error(
                      "Loading CSS chunk " + a + " failed.\n(" + s + ")"
                    );
                  (d.code = "CSS_CHUNK_LOAD_FAILED"),
                    (d.type = t),
                    (d.request = s),
                    i.parentNode.removeChild(i),
                    o(d);
                }
              }),
            (i.href = e),
            document.head.appendChild(i);
        })(a, i, e, n);
      })),
    (t = { 6700: 0 }),
    (l.f.miniCss = (a, e) => {
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
      (l.f.j = (e, n) => {
        var o = l.o(a, e) ? a[e] : void 0;
        if (0 !== o)
          if (o) n.push(o[2]);
          else if (/^(4601|6700)$/.test(e)) a[e] = 0;
          else {
            var i = new Promise((n, i) => (o = a[e] = [n, i]));
            n.push((o[2] = i));
            var c = l.p + l.u(e),
              t = new Error();
            l.l(
              c,
              (n) => {
                if (l.o(a, e) && (0 !== (o = a[e]) && (a[e] = void 0), o)) {
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
        (l.O.j = (e) => 0 === a[e]);
      var e = (e, n) => {
          var o,
            i,
            [c, t, s] = n,
            d = 0;
          if (c.some((e) => 0 !== a[e])) {
            for (o in t) l.o(t, o) && (l.m[o] = t[o]);
            if (s) var r = s(l);
          }
          for (e && e(n); d < c.length; d++)
            (i = c[d]), l.o(a, i) && a[i] && a[i][0](), (a[i] = 0);
          return l.O(r);
        },
        n = (self.webpackChunkcommunity = self.webpackChunkcommunity || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();
