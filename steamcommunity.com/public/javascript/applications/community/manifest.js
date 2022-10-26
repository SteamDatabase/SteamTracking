/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7612700";
(() => {
  "use strict";
  var a,
    e,
    n,
    o,
    c,
    i,
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
    (d.O = (e, n, o, c) => {
      if (!n) {
        var i = 1 / 0;
        for (r = 0; r < a.length; r++) {
          for (var [n, o, c] = a[r], t = !0, s = 0; s < n.length; s++)
            (!1 & c || i >= c) && Object.keys(d.O).every((a) => d.O[a](n[s]))
              ? n.splice(s--, 1)
              : ((t = !1), c < i && (i = c));
          if (t) {
            a.splice(r--, 1);
            var l = o();
            void 0 !== l && (e = l);
          }
        }
        return e;
      }
      c = c || 0;
      for (var r = a.length; r > 0 && a[r - 1][2] > c; r--) a[r] = a[r - 1];
      a[r] = [n, o, c];
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
      var c = Object.create(null);
      d.r(c);
      var i = {};
      e = e || [null, n({}), n([]), n(n)];
      for (var t = 2 & o && a; "object" == typeof t && !~e.indexOf(t); t = n(t))
        Object.getOwnPropertyNames(t).forEach((e) => (i[e] = () => a[e]));
      return (i.default = () => a), d.d(c, i), c;
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
        27: "d1562ae3343b53f92714",
        113: "f9e54f54caaaaf0ebbc8",
        131: "be3a8fbc05369968620f",
        238: "602fa14425f0a94b78d2",
        301: "89bcea39af1cfb180071",
        312: "01ac7c4ee0b08c5016fa",
        400: "f31d3cbb6aa7beef6dbe",
        508: "2b962a987fbab1e65206",
        543: "7e04eee5a698b6b9ff11",
        617: "5a176f3b09f32131f8a4",
        755: "83b0f61b9ba3d6743035",
        867: "e4aaa649779c61def34f",
        908: "d90df0a9f53224181670",
        960: "9177f9bc01e55bfbf2d5",
        961: "d169ed195c760bf5472d",
        1133: "ed5095afa88b5eaa4aa1",
        1195: "0fc94e4e3032c4712c07",
        1261: "18cee74a5070f0fa020a",
        1311: "7a32bb82a7af9ef04e69",
        1546: "828e9c360f07290c4b9a",
        1579: "bd31e8e89e904444a6f4",
        1649: "37298c13dffbf9f91726",
        1953: "496be00117d259f8109a",
        2136: "4970b86d51f23664d401",
        2138: "ed5e894ebd8d79d165c9",
        2235: "4e42fad4dab05d34aa6b",
        2329: "cd3c1b3a4d5d92ff9833",
        2351: "716018cde4e459daab59",
        2373: "06251fd1a88d5e5852c4",
        2449: "64f636b1750f0b3a761e",
        2468: "7b16ed9b4d04c09c06d9",
        2557: "207976b695a9ad657c19",
        2677: "54a419a1b302c5d8a9d4",
        2723: "3774ba2b4701e88c8211",
        2738: "a2597a5aa1620b8e0222",
        2745: "0c6e64566e4b3c90d95b",
        2805: "651dadc986df604bf418",
        2822: "9cb55a0608cfe0066b63",
        2832: "1d49f9d35d4d4c001984",
        3007: "a34481d10a48c32d3923",
        3038: "d9f04807d4b5851d35d9",
        3202: "19d060b19bc21838d625",
        3298: "60714b83d33484778113",
        3352: "026abaa6826403bdff4a",
        3499: "9ad20540cbd74e4db6d5",
        3591: "b971a2a6a62c1c00a12a",
        3602: "dfa5c3ff310bb33e7da3",
        3742: "1c69cb29f71f4489aba4",
        3973: "fe3b71e0ac8426aedeec",
        4097: "e1ac826e8bea96d5f6a3",
        4183: "8d2cadcb8c8e6e377696",
        4264: "493c1c579686b1ec3aa6",
        4293: "9a8be31db0af4246a123",
        4358: "f3dbe34a95fd4be51bb6",
        4445: "684775d2c59f5a01d828",
        4469: "a08f828a3a0fb81eb777",
        4487: "7fde2c02f17a9fa67750",
        4513: "0067c0c482a49aba5407",
        4535: "24da8b95e5a39ec4016a",
        4601: "f1da307246b8617ffbae",
        4729: "c1b7a205d19c591a1ed4",
        4819: "9fd6da0552df7f5a3d2a",
        4979: "16e78d33b1473245cc37",
        5012: "f9b929e44bd5926d3ce2",
        5253: "83dc503329809b97892a",
        5277: "80ce6b7889d14773334b",
        5279: "2759a856ac0d4223d3b3",
        5436: "935ccec537fdd8b10273",
        5439: "ab8938bd06fb93a8566c",
        5493: "d3747008f6262abc4806",
        5494: "2897c946bb61da3dd35b",
        5503: "35e11901f59da58dda04",
        5757: "442a703e6206788b9aa8",
        6091: "b2d74f431dfa5cbdfe44",
        6148: "5aca2d35a443fd3058d9",
        6272: "80cb93adfeefbeb6ef2b",
        6403: "6ae5cb1a5cc0867b3a17",
        6415: "7e7880069fad43079e12",
        6437: "caa49d3d01d07f13aeea",
        6457: "8ad65a32ba8902d370a7",
        6656: "0feae8ebcbb7d0260166",
        6658: "80a98b3f2c0d35a00a06",
        6715: "ab5337832d5eb8f1f322",
        6844: "11a42f2f9bc6f01dcad7",
        6845: "7284421687d43621f7b3",
        6932: "334e1af9e40ee3dad97d",
        6962: "ba4682902af80b881b9b",
        7629: "66e9846472d14b719557",
        7660: "9eea6d6153f3d34b53f1",
        7769: "f6d3fbb50284e9614ce2",
        7781: "49e29040d679c5c5a37f",
        7832: "6d3214c50ca68865f871",
        7901: "a3d95446dd30b33de2db",
        7924: "364f693b5dbac8eb7fdd",
        7971: "c5f36b8b1ee8cffc56cb",
        8085: "ee1ad0d6f582ee5432c5",
        8120: "506ffd6ec8acce59798f",
        8274: "0153b421ff3529a555a8",
        8282: "641b29748ce875249248",
        8291: "12619decdf894824f749",
        8427: "90111d5fed6a2c93bab7",
        8433: "797799cc07e6c0421aa9",
        8525: "bbc81ad1869347c9dd15",
        8592: "408d2da10177b071ed34",
        8647: "862ca126429db89196a9",
        8691: "9422b45f35c587cbb992",
        8805: "19027c3be0c0cbf16553",
        8919: "94c7700d1853bafc0ac1",
        9167: "7b02d5ac7b50aa12061d",
        9233: "f15c85966ac92a5e2897",
        9316: "66488a79dddc2a6878ea",
        9348: "d474c2ebb059fd944adc",
        9349: "41d79c61efbb1af9a636",
        9389: "9807bdc2c8f977930af3",
        9427: "5ddfb6e4ba3e3f734be3",
        9513: "608ab4189971f6b78e5e",
        9547: "fa18aecec3a022e97767",
        9561: "eaa6fe2cc381f1f30034",
        9665: "4d5711cb6823d945e5a8",
        9828: "220d8afe7210f42ba6ac",
        9854: "d6663701f6e6823e6e79",
        9888: "2a883fbb25478d5822da",
        9920: "45abe6f2e6f103e2098b",
        9951: "dfae9d1a5d3fa19e737e",
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
        238: "c1d5adf2164cb4f1234b",
        312: "bc0053e9b4b8791ffe9e",
        400: "b9aedc1c26aad57e5e93",
        508: "36668f433ce6714239d4",
        908: "402d6864700943e3ed5f",
        2136: "7677775ce82ff87c079e",
        2329: "70358f02752594d6bf7b",
        2449: "8075da3560546e1cc757",
        3352: "f3838685918d3c88bdc3",
        3499: "ceabdd14fa2e8fac8cdf",
        4535: "120ef11d3786830c5571",
        4601: "d06d8bbe9060a9dfd764",
        5253: "b9277f77112fb5d53fc4",
        5436: "0d890daa3753c873b4a8",
        6272: "99266c2797f2b1a29f40",
        6845: "3f3faaebf755f0c5e867",
        8647: "67fdc171f31b8ee41a06",
        8919: "e5fe8cb5666f0d599b51",
        9348: "ee31bbe54a5057654cca",
        9349: "051a518f3e92dd04dbcc",
        9427: "cac79198a168a194426e",
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
    (c = "community:"),
    (d.l = (a, e, n, i) => {
      if (o[a]) o[a].push(e);
      else {
        var t, s;
        if (void 0 !== n)
          for (
            var l = document.getElementsByTagName("script"), r = 0;
            r < l.length;
            r++
          ) {
            var b = l[r];
            if (
              b.getAttribute("src") == a ||
              b.getAttribute("data-webpack") == c + n
            ) {
              t = b;
              break;
            }
          }
        t ||
          ((s = !0),
          ((t = document.createElement("script")).charset = "utf-8"),
          (t.timeout = 120),
          d.nc && t.setAttribute("nonce", d.nc),
          t.setAttribute("data-webpack", c + n),
          (t.src = a)),
          (o[a] = [e]);
        var f = (e, n) => {
            (t.onerror = t.onload = null), clearTimeout(h);
            var c = o[a];
            if (
              (delete o[a],
              t.parentNode && t.parentNode.removeChild(t),
              c && c.forEach((a) => a(n)),
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
        var o = d.miniCssF(a),
          c = d.p + o;
        if (
          ((a, e) => {
            for (
              var n = document.getElementsByTagName("link"), o = 0;
              o < n.length;
              o++
            ) {
              var c =
                (t = n[o]).getAttribute("data-href") || t.getAttribute("href");
              if ("stylesheet" === t.rel && (c === a || c === e)) return t;
            }
            var i = document.getElementsByTagName("style");
            for (o = 0; o < i.length; o++) {
              var t;
              if ((c = (t = i[o]).getAttribute("data-href")) === a || c === e)
                return t;
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
                  var t = i && ("load" === i.type ? "missing" : i.type),
                    s = (i && i.target && i.target.href) || e,
                    l = new Error(
                      "Loading CSS chunk " + a + " failed.\n(" + s + ")"
                    );
                  (l.code = "CSS_CHUNK_LOAD_FAILED"),
                    (l.type = t),
                    (l.request = s),
                    c.parentNode.removeChild(c),
                    o(l);
                }
              }),
            (c.href = e),
            document.head.appendChild(c);
        })(a, c, e, n);
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
            (t[a] = i(a).then(
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
            var c = new Promise((n, c) => (o = a[e] = [n, c]));
            n.push((o[2] = c));
            var i = d.p + d.u(e),
              t = new Error();
            d.l(
              i,
              (n) => {
                if (d.o(a, e) && (0 !== (o = a[e]) && (a[e] = void 0), o)) {
                  var c = n && ("load" === n.type ? "missing" : n.type),
                    i = n && n.target && n.target.src;
                  (t.message =
                    "Loading chunk " + e + " failed.\n(" + c + ": " + i + ")"),
                    (t.name = "ChunkLoadError"),
                    (t.type = c),
                    (t.request = i),
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
            c,
            [i, t, s] = n,
            l = 0;
          if (i.some((e) => 0 !== a[e])) {
            for (o in t) d.o(t, o) && (d.m[o] = t[o]);
            if (s) var r = s(d);
          }
          for (e && e(n); l < i.length; l++)
            (c = i[l]), d.o(a, c) && a[c] && a[c][0](), (a[c] = 0);
          return d.O(r);
        },
        n = (self.webpackChunkcommunity = self.webpackChunkcommunity || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();
