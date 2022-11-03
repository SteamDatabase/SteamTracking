/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7637884";
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
        27: "eece0091e941b31caf7c",
        113: "f9e54f54caaaaf0ebbc8",
        131: "780c15406e8303525998",
        238: "602fa14425f0a94b78d2",
        301: "89bcea39af1cfb180071",
        312: "5b1254278a23b5e15678",
        400: "18d3f5002c3bfd0d57f9",
        508: "c81c48fc512bbfa284a1",
        543: "7e04eee5a698b6b9ff11",
        617: "5a176f3b09f32131f8a4",
        755: "b9ddc1a24a51a277b446",
        867: "e4aaa649779c61def34f",
        908: "d90df0a9f53224181670",
        960: "9177f9bc01e55bfbf2d5",
        961: "d169ed195c760bf5472d",
        1133: "ed5095afa88b5eaa4aa1",
        1195: "460fb4321001a6a0421f",
        1261: "dc837406c99ea24d90ce",
        1311: "7a32bb82a7af9ef04e69",
        1546: "828e9c360f07290c4b9a",
        1579: "ccb7567bc5f865e40277",
        1649: "7843b4d35cbdaf3fda92",
        1953: "b94bc9cab029dc36332f",
        2136: "f9532822457ce97d4ee4",
        2138: "6f3a8edaabbd7f21ed5e",
        2235: "a11ab5954e08def42348",
        2329: "cd3c1b3a4d5d92ff9833",
        2351: "716018cde4e459daab59",
        2373: "06251fd1a88d5e5852c4",
        2449: "9d18591618a50c998fc5",
        2468: "7b16ed9b4d04c09c06d9",
        2557: "207976b695a9ad657c19",
        2677: "54a419a1b302c5d8a9d4",
        2723: "3774ba2b4701e88c8211",
        2738: "c63866edb7a982320818",
        2745: "0c6e64566e4b3c90d95b",
        2805: "651dadc986df604bf418",
        2822: "aa46a8979e5b501c61b8",
        2832: "6ba72f9c8f8f8b83f41d",
        3007: "a34481d10a48c32d3923",
        3038: "875dc25253b40e5794ae",
        3202: "19d060b19bc21838d625",
        3298: "8f5e4ffbfe3798e91fd5",
        3352: "026abaa6826403bdff4a",
        3499: "9ad20540cbd74e4db6d5",
        3591: "b971a2a6a62c1c00a12a",
        3602: "bd4103dd9a68c595b65f",
        3742: "c0f9afd3bbaf2bc6cc96",
        3973: "fe3b71e0ac8426aedeec",
        4097: "1ca494f7e352d57cf280",
        4183: "154bd6487f57af02c49d",
        4264: "493c1c579686b1ec3aa6",
        4293: "9a8be31db0af4246a123",
        4358: "40b3bb9f248f9ed15809",
        4445: "0dcec6650272a06937a0",
        4469: "97e78167614da051a835",
        4487: "541391ba4dba9b75cd70",
        4513: "5ff642fdb3f076a3fb53",
        4535: "3395b03a0fe851ba7de6",
        4601: "f1da307246b8617ffbae",
        4729: "7eab12c88ce4c38b4f0b",
        4819: "9fd6da0552df7f5a3d2a",
        4979: "16e78d33b1473245cc37",
        5012: "f9b929e44bd5926d3ce2",
        5253: "b3b0caf105dfd56b5fa6",
        5277: "80ce6b7889d14773334b",
        5279: "62541d60c48c5f4b9007",
        5436: "310c9baa1718b5861f3b",
        5439: "ab8938bd06fb93a8566c",
        5493: "d3747008f6262abc4806",
        5494: "2897c946bb61da3dd35b",
        5503: "35e11901f59da58dda04",
        5757: "442a703e6206788b9aa8",
        6091: "b2d74f431dfa5cbdfe44",
        6148: "5aca2d35a443fd3058d9",
        6272: "80cb93adfeefbeb6ef2b",
        6403: "6e9ffaa41e9f6ef5d2c9",
        6415: "7e7880069fad43079e12",
        6437: "caa49d3d01d07f13aeea",
        6457: "8ad65a32ba8902d370a7",
        6656: "0feae8ebcbb7d0260166",
        6658: "80a98b3f2c0d35a00a06",
        6715: "ab5337832d5eb8f1f322",
        6844: "abf9de16536c6b84137f",
        6845: "7284421687d43621f7b3",
        6932: "334e1af9e40ee3dad97d",
        6962: "ba4682902af80b881b9b",
        7629: "66e9846472d14b719557",
        7660: "5dc00c71302bce6eb3a4",
        7769: "f6d3fbb50284e9614ce2",
        7781: "1098d52656ea3ce04513",
        7832: "6d3214c50ca68865f871",
        7901: "a3d95446dd30b33de2db",
        7924: "364f693b5dbac8eb7fdd",
        7971: "c5f36b8b1ee8cffc56cb",
        8085: "b6435653619c9c0ed739",
        8120: "506ffd6ec8acce59798f",
        8274: "70e1fe760c9cfdaf53d3",
        8282: "641b29748ce875249248",
        8291: "12619decdf894824f749",
        8427: "90111d5fed6a2c93bab7",
        8433: "c5663df5a3a9a6c16ffc",
        8525: "bbc81ad1869347c9dd15",
        8592: "408d2da10177b071ed34",
        8647: "c627e8c24562446f3464",
        8691: "9422b45f35c587cbb992",
        8805: "19027c3be0c0cbf16553",
        8919: "6ecd2de3d4d7572b5429",
        9167: "7b02d5ac7b50aa12061d",
        9233: "f15c85966ac92a5e2897",
        9316: "66488a79dddc2a6878ea",
        9348: "5a35c12e39022a72550f",
        9349: "f0af456a92b506a47325",
        9389: "b9f9911550161883a3b5",
        9427: "2481cc5e3d75db3f5bd8",
        9513: "608ab4189971f6b78e5e",
        9547: "4857e37803fe51d8a921",
        9561: "eaa6fe2cc381f1f30034",
        9665: "4d5711cb6823d945e5a8",
        9828: "220d8afe7210f42ba6ac",
        9854: "1932215a9b613aaafb1c",
        9888: "2a883fbb25478d5822da",
        9920: "45abe6f2e6f103e2098b",
        9951: "5431e0d02ae00d60ecca",
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
        400: "8aeaf33c5c142372aa67",
        508: "279f834566bf14856498",
        908: "80a28985772113b04660",
        2136: "7677775ce82ff87c079e",
        2329: "70358f02752594d6bf7b",
        2449: "8075da3560546e1cc757",
        3352: "f3838685918d3c88bdc3",
        3499: "ceabdd14fa2e8fac8cdf",
        4535: "120ef11d3786830c5571",
        4601: "d06d8bbe9060a9dfd764",
        5436: "0815d5769504bacb5db2",
        6272: "99266c2797f2b1a29f40",
        6845: "3f3faaebf755f0c5e867",
        8647: "413bbe35d505feb2a7be",
        8919: "cf81e85a43eb3cd28cd4",
        9348: "ee31bbe54a5057654cca",
        9349: "051a518f3e92dd04dbcc",
        9427: "7667f06440e08f67897c",
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
