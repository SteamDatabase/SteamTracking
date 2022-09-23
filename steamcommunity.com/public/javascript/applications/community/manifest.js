/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7528229";
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
        27: "71e437b79c2ca3880530",
        113: "f557928c96a6334f45bf",
        131: "74453995573403e77713",
        238: "5711d8e8dd2f2351048d",
        301: "190e73000f0aeff9c04e",
        312: "7bc834b035662761d5cf",
        400: "0f50635216c6f3b910a5",
        508: "774e94e8db1f82489157",
        543: "7e04eee5a698b6b9ff11",
        617: "4e43cbf308a1b065ca34",
        755: "2ccc1e0f9ed69902dc27",
        867: "e4aaa649779c61def34f",
        908: "77f23d53c2282948f121",
        960: "9177f9bc01e55bfbf2d5",
        961: "d169ed195c760bf5472d",
        1133: "e14711d0428983bc416d",
        1195: "cbf054103f485c146f7c",
        1261: "a5369083c01892326fc0",
        1311: "94d7e0e8f86e7be90479",
        1546: "828e9c360f07290c4b9a",
        1579: "6d3f366c2153c9ed055b",
        1649: "27bd849d10937b286bc3",
        1953: "d3895a08021309374cd6",
        2136: "1628703b48fcee3dd51a",
        2138: "1c3b462e1948984901d5",
        2235: "4e42fad4dab05d34aa6b",
        2329: "cd3c1b3a4d5d92ff9833",
        2351: "11cee70e761c4d75c9bd",
        2373: "06251fd1a88d5e5852c4",
        2449: "fd7e15f6a09d43cabe55",
        2468: "7b16ed9b4d04c09c06d9",
        2557: "806a2fd86ee9b11e9a72",
        2677: "a490b4343b2e6caf0014",
        2723: "3774ba2b4701e88c8211",
        2738: "376544410905e484e8f0",
        2745: "0c6e64566e4b3c90d95b",
        2805: "eb860976152352673d09",
        2822: "1e393208729b0558493b",
        2832: "38f07772161b48433dc0",
        3007: "a34481d10a48c32d3923",
        3038: "ed287c3e3ea29205fff0",
        3202: "19d060b19bc21838d625",
        3298: "046a1cbe65b1945d2f3b",
        3352: "5e4d0e040ad4e9a78e03",
        3499: "6c099a6b70c2ed1db7cf",
        3591: "b971a2a6a62c1c00a12a",
        3602: "abaf053c7fa1f3e0b250",
        3742: "5356741f5b55c7887307",
        3973: "a3e3cfd3c6a9ebdecbb9",
        4097: "9d73898abb1b854e46b1",
        4183: "1d82dee9649289b78cb5",
        4264: "15461a535d2ba266df46",
        4293: "9a8be31db0af4246a123",
        4358: "f3dbe34a95fd4be51bb6",
        4445: "243e62f8980c3fba1d5e",
        4469: "5250c4d56ac8fc6d162c",
        4487: "3d7eb4fd3a63a2711930",
        4513: "c7c65f79608dacd89998",
        4535: "8d6d197c00c2a6af49c4",
        4601: "840a1aebb711318af388",
        4729: "03245a231eeefbb256e2",
        4819: "9fd6da0552df7f5a3d2a",
        4979: "16e78d33b1473245cc37",
        5012: "7366eeccf0991fb4e0ce",
        5253: "7bb8cd890e5b7d9c003e",
        5277: "84742ecb55659369d3ca",
        5279: "4c0c635e61e6a39b6f47",
        5436: "f911c3653b71a6e83b21",
        5439: "ab8938bd06fb93a8566c",
        5493: "75bb69bec17f99d210e4",
        5494: "2897c946bb61da3dd35b",
        5503: "65b362b41abc0308165e",
        5757: "2bea4e6c37361daae6b6",
        6091: "e95384415cb315e8a0ef",
        6148: "5aca2d35a443fd3058d9",
        6272: "ea6744e9ebe644e737bd",
        6403: "40a394e2cd5427563dbb",
        6415: "0287916ffbafed4044d2",
        6437: "caa49d3d01d07f13aeea",
        6457: "cd476ece7279bac61df3",
        6656: "0feae8ebcbb7d0260166",
        6658: "80a98b3f2c0d35a00a06",
        6715: "ab5337832d5eb8f1f322",
        6844: "fef66c159ff59e253665",
        6845: "b5662ba6b339c42aa45b",
        6932: "334e1af9e40ee3dad97d",
        6962: "780805a3d2783af7009c",
        7629: "561c7d55c9eae19de9d1",
        7660: "69f3f3ad9b662c724aed",
        7769: "b0fc1b07d0fc338114d9",
        7781: "15cbc1c0fc2114b48b45",
        7832: "6d3214c50ca68865f871",
        7901: "e1808319edfbb87fd8df",
        7924: "364f693b5dbac8eb7fdd",
        7971: "c5f36b8b1ee8cffc56cb",
        8085: "e0c6572d56fed300da8e",
        8120: "010c5f545a2ad560a620",
        8274: "de38b2db86d962ceffe3",
        8282: "ed3bb0ec6766645a172e",
        8291: "68907867c0f09448e007",
        8427: "8ec9c968b130284d4fec",
        8433: "5d4da6ba70c44b5edb3a",
        8525: "8cf27dcf491f1118060c",
        8592: "2ece952b55a7f3f7ddbe",
        8647: "5617ba3511c14d81ca41",
        8691: "9422b45f35c587cbb992",
        8805: "19027c3be0c0cbf16553",
        8919: "c76374edb3b28ecaa9e5",
        9167: "7b02d5ac7b50aa12061d",
        9233: "1b0493c0262c7c63eeb4",
        9316: "66488a79dddc2a6878ea",
        9348: "6d0237f108f44713d29a",
        9349: "173ceaa24dec12cd8b32",
        9389: "9807bdc2c8f977930af3",
        9427: "d7a2baca4d9ae036bdb7",
        9513: "608ab4189971f6b78e5e",
        9547: "18b94026363c55777020",
        9561: "eaa6fe2cc381f1f30034",
        9665: "4eb613ff4beea3b86811",
        9828: "220d8afe7210f42ba6ac",
        9854: "ac62203e40fecc192d83",
        9888: "2a883fbb25478d5822da",
        9920: "01579639941818c1eae8",
        9951: "45c2e1dd36b99402c2da",
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
        5253: "chunk~7bb437d7f",
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
        238: "e083c44bb9e2d8c48b8a",
        312: "0db92ac70e22f2f5e464",
        400: "55b0fa96b49624c5135b",
        508: "2e6e268ef4e35be1161c",
        908: "402d6864700943e3ed5f",
        2136: "7677775ce82ff87c079e",
        2329: "70358f02752594d6bf7b",
        2449: "9fc936c181695abf43c3",
        3352: "f3838685918d3c88bdc3",
        3499: "ceabdd14fa2e8fac8cdf",
        4535: "120ef11d3786830c5571",
        4601: "8afb19817af163e4db81",
        5253: "9f801babe8f2664cda23",
        5436: "c25a8db9a3612a1fdedf",
        6272: "99266c2797f2b1a29f40",
        6845: "3f3faaebf755f0c5e867",
        8647: "67fdc171f31b8ee41a06",
        8919: "8ec32844f34078285ef0",
        9348: "f6c5fbdcaf74f491bf3b",
        9349: "051a518f3e92dd04dbcc",
        9427: "ed306573c8ba9ce19417",
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
            var b = d[r];
            if (
              b.getAttribute("src") == a ||
              b.getAttribute("data-webpack") == i + n
            ) {
              t = b;
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
        var f = (e, n) => {
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
            f.bind(null, void 0, { type: "timeout", target: t }),
            12e4
          );
        (t.onerror = f.bind(null, t.onerror)),
          (t.onload = f.bind(null, t.onload)),
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
            5253: 1,
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
