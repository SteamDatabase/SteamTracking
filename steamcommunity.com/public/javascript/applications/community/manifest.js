/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7798238";
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
  function d(a) {
    var e = l[a];
    if (void 0 !== e) return e.exports;
    var n = (l[a] = { id: a, loaded: !1, exports: {} });
    return t[a].call(n.exports, n, n.exports, d), (n.loaded = !0), n.exports;
  }
  (d.m = t),
    (a = []),
    (d.O = (e, n, o, c) => {
      if (!n) {
        var i = 1 / 0;
        for (r = 0; r < a.length; r++) {
          for (var [n, o, c] = a[r], s = !0, t = 0; t < n.length; t++)
            (!1 & c || i >= c) && Object.keys(d.O).every((a) => d.O[a](n[t]))
              ? n.splice(t--, 1)
              : ((s = !1), c < i && (i = c));
          if (s) {
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
      for (var s = 2 & o && a; "object" == typeof s && !~e.indexOf(s); s = n(s))
        Object.getOwnPropertyNames(s).forEach((e) => (i[e] = () => a[e]));
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
        3903: "games",
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
        9951: "localization/shared_latam-json",
        9991: "localization/sales_japanese-json",
      }[a] +
      ".js?contenthash=" +
      {
        27: "db75fdd28976feaf8753",
        113: "5976d83883995bd00132",
        131: "c33e5d26c9b553088e64",
        238: "602fa14425f0a94b78d2",
        301: "ce48dfd72e79d5ba3474",
        312: "f43bd3c1dfc86bad2dbb",
        400: "6caaa010a54c1c5dd0dc",
        483: "022e81030e2fadf7a189",
        508: "13cd80cf566a7950fec5",
        543: "45872255803922b928e0",
        617: "92ed44600ee9701b4004",
        755: "da9f125d478532074d03",
        867: "dbe91ddb7c79254d2561",
        908: "c52e6179014bacdebd64",
        960: "2c8137443eb62b973ac7",
        961: "b90a5fd895bde720cd5d",
        1133: "9ea43f2adee0cd3bf461",
        1195: "401547172d71c680b88c",
        1261: "cbb0936a0b3988f1bf40",
        1311: "60cdac2fd27462b4c83d",
        1338: "32e379439443e2baae77",
        1546: "373b1004bda451d14835",
        1579: "75e955049482cabb25d8",
        1649: "1a64542dd40077eedf17",
        1953: "5c946170fbe16b7f5d75",
        2136: "dccaf47dc942e4c89b70",
        2138: "27834e4f5dca66ebf79a",
        2235: "5e19f9722514ddd4aa79",
        2329: "cd3c1b3a4d5d92ff9833",
        2351: "432f756c2a8176869de9",
        2373: "1d92fe3fa4106bd9e23d",
        2449: "7e97fa62a92d018de6bb",
        2468: "d5eea64fdc8ccc12adb3",
        2530: "90093bbb0b0d0f66e9dd",
        2557: "5f8358a312e29f226f78",
        2677: "0e674a7037aadf04f444",
        2723: "ec0b9d6f6a68877c37b3",
        2738: "a339ac59bbd64052d08f",
        2745: "0ee183cfc2149c5db2ea",
        2805: "30fac41b51bf9a4c04b3",
        2822: "9249e652c893d5501092",
        2832: "ebe307612981ea515d1c",
        3007: "0417ecf74a90e0dd358c",
        3038: "32d61e8e5f2c8e638f22",
        3202: "681dd766d6f76eab509a",
        3298: "86d5328125c1566489f4",
        3352: "54523969bbec7bfaa043",
        3499: "0792fbac8ef9039f1d4a",
        3591: "343be32681285e3fcc20",
        3602: "e93cf5264215022c5b8a",
        3742: "b6e83ff0f1502132ce42",
        3903: "20922bc7e6c9126d73e7",
        3973: "33bda4239483c6e951d3",
        4097: "9588fd821f5708f30a75",
        4183: "73da9e1a5fd313b2991e",
        4264: "2dcafd22e245d6583b96",
        4293: "48bc6d7ac09918355a2c",
        4358: "40b3bb9f248f9ed15809",
        4445: "4279ff1f76d82fe4f4ba",
        4469: "5f4161d1a6ff8922eac2",
        4487: "5bfd397e4b7eba6d9f9e",
        4513: "d3653c5c2a51f07670b3",
        4535: "2ff101a8181d8800d98d",
        4601: "aef74b8d830c657366f6",
        4729: "21bb6b1d01b896554752",
        4819: "561596dd0468ff6599a3",
        4979: "e59f81b62f899ae24461",
        5012: "323c6816da9bdaa324de",
        5277: "b8f55655764d083875ed",
        5279: "dc82746536c4fdd04b3b",
        5436: "67ce7e55f8ffb8eedcd7",
        5439: "16baa12ec54daa8ded6a",
        5493: "52325d643d4633dd9ad9",
        5494: "d2b1888623dfa560881e",
        5503: "3351e50e201cac4c34c1",
        5757: "2501581d271b35c9c659",
        6091: "a17623285940e1f30c0b",
        6148: "5aca2d35a443fd3058d9",
        6272: "d0d55178c2caff4bedfb",
        6403: "bd46024ad3283af09274",
        6415: "ece094b2f8df1339414a",
        6457: "261e5a8b086c3616898c",
        6588: "f25524c9f86bd49a56bf",
        6658: "4a7e1d51e3bfbdc6bb6c",
        6715: "c66a5d57898996692d39",
        6844: "60abe42abfbad3e5c9fc",
        6845: "1b90ebe7e497383f5d87",
        6932: "c414c1108810bdbb9dc2",
        6962: "6efffe63f9f8b0cbdf36",
        7629: "aaeaa36fb01932b5ca7d",
        7660: "f32fcd845fb8ad73d4f1",
        7769: "389ae62d5261306ad867",
        7781: "14e3cae2342811368ead",
        7832: "6d3214c50ca68865f871",
        7901: "222100f5aa24d82bd62d",
        7924: "0a1a9915d2b653c09d08",
        7942: "81084dd4dee502ad6805",
        7948: "fa171af40bb71a200a06",
        7971: "78ba4acfa7cc2afac067",
        8085: "4c49d93e5c570ac5864f",
        8120: "0df8d2f3a24a680ed1cb",
        8274: "bfebaa28236fe4408735",
        8282: "2acae3758b7bb018063e",
        8291: "aa95f4936f0a18a6f9aa",
        8427: "964ae3d87b95284959d6",
        8433: "2407f69e590795daeca4",
        8525: "385c698da6ab4823b1b5",
        8592: "0a2b7b60933edb9266e7",
        8647: "685f5b04d7debb628eb5",
        8691: "9422b45f35c587cbb992",
        8805: "9bd27977cf06daabeefd",
        8931: "5c746ca00ef67ea0e6a1",
        9167: "755d0caa14214610e6c8",
        9233: "1fffb42d268713cb2db2",
        9316: "b6a1989ad55461b11487",
        9348: "6dc08212a9f592b26d7e",
        9349: "054b8e139a613b6e2ca2",
        9389: "b9f9911550161883a3b5",
        9427: "ab71f6fa1c4a72972e25",
        9513: "d54d09dc14a67f547e35",
        9547: "bd28664881e0a3ff19b6",
        9561: "071acbbbe0c1be0ee1d0",
        9665: "3811f72c9b2a0b481564",
        9828: "8ed68f19e5dcdc5e6b8e",
        9854: "94d0431129534e59fd89",
        9888: "36f847c077671e8c11b3",
        9951: "83402f0ce8e72c41c556",
        9991: "e711b8ec50b99f7bbdc0",
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
        9427: "chunk~642602239",
      }[a] +
      ".css?contenthash=" +
      {
        238: "82877e2cea30622a4345",
        312: "9e6bee6632888a265236",
        400: "4d629ca4bc66c9aca57f",
        508: "a8085111a12090e068be",
        908: "b1cfbd6ecf3d3abad923",
        2136: "7677775ce82ff87c079e",
        2329: "70358f02752594d6bf7b",
        2449: "daa7e074383347bf1c8d",
        2530: "d54c8cc0a53b142b9410",
        3352: "f3838685918d3c88bdc3",
        3499: "f66814af59f83abee010",
        3903: "ae6a76d6cdf25200e080",
        4535: "120ef11d3786830c5571",
        4601: "5b02011896f2f5b3d01b",
        5436: "6eca1d3524672f585c5a",
        6272: "96937946e427750774e4",
        6845: "9a66c3ee0f03b5efd406",
        8647: "413bbe35d505feb2a7be",
        8931: "3492c05cec43c65e9c9d",
        9348: "396fc23edcce6bef2d51",
        9349: "f4977652404f75e5d337",
        9427: "6748952a23ee5e4faca1",
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
        var s, t;
        if (void 0 !== n)
          for (
            var l = document.getElementsByTagName("script"), r = 0;
            r < l.length;
            r++
          ) {
            var f = l[r];
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
          d.nc && s.setAttribute("nonce", d.nc),
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
    (d.f.miniCss = (a, e) => {
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
      (d.f.j = (e, n) => {
        var o = d.o(a, e) ? a[e] : void 0;
        if (0 !== o)
          if (o) n.push(o[2]);
          else if (/^(4601|6700)$/.test(e)) a[e] = 0;
          else {
            var c = new Promise((n, c) => (o = a[e] = [n, c]));
            n.push((o[2] = c));
            var i = d.p + d.u(e),
              s = new Error();
            d.l(
              i,
              (n) => {
                if (d.o(a, e) && (0 !== (o = a[e]) && (a[e] = void 0), o)) {
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
          }
      }),
        (d.O.j = (e) => 0 === a[e]);
      var e = (e, n) => {
          var o,
            c,
            [i, s, t] = n,
            l = 0;
          if (i.some((e) => 0 !== a[e])) {
            for (o in s) d.o(s, o) && (d.m[o] = s[o]);
            if (t) var r = t(d);
          }
          for (e && e(n); l < i.length; l++)
            (c = i[l]), d.o(a, c) && a[c] && a[c][0](), (a[c] = 0);
          return d.O(r);
        },
        n = (self.webpackChunkcommunity = self.webpackChunkcommunity || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();
